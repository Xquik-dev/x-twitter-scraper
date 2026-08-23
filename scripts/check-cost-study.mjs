// SPDX-FileCopyrightText: 2026 Xquik Contributors
// SPDX-License-Identifier: MIT

import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

const root = new URL("../", import.meta.url);
const providerUrl = new URL(
  "docs/research/cost-study/providers-2026-08-22.json",
  root,
);
const workloadUrl = new URL(
  "docs/research/cost-study/workloads-2026-08-22.json",
  root,
);
const reviewUrl = new URL(
  "docs/research/cost-study/customer-reviews-2026-08-22.json",
  root,
);

async function readJson(url) {
  return JSON.parse(await readFile(url, "utf8"));
}

function roundUsd(value) {
  return Number(value.toFixed(6));
}

function competitorCost(model, workload) {
  if (model.kind === "perCandidate") {
    return roundUsd(
      Math.max(workload.rawCandidates * model.usd, model.runMinimumUsd ?? 0),
    );
  }

  if (model.kind === "tieredDelivered") {
    const tier = model.tiers.find(
      ({ capacity }) => capacity >= workload.delivered,
    );
    return tier?.monthlyUsd ?? null;
  }

  return null;
}

function validateReviewEvidence(providers, reviews) {
  const providerIds = new Set(providers.competitors.map(({ id }) => id));
  const coverageIds = new Set(reviews.coverage.map(({ providerId }) => providerId));

  assert.equal(reviews.reviewedAt, providers.reviewedAt);
  assert.deepEqual(coverageIds, providerIds);
  assert.ok(reviews.reviews.length >= 12);
  assert.ok(new Set(reviews.reviews.map(({ providerId }) => providerId)).size >= 10);
  assert.ok(
    reviews.reviews.filter(({ reviewDate }) => reviewDate >= "2025-01-01").length >=
      10,
  );

  for (const review of reviews.reviews) {
    assert.ok(providerIds.has(review.providerId), review.providerId);
    assert.match(review.url, /^https:\/\//u, `${review.providerId}.reviewUrl`);
    assert.match(review.crossCheckSource, /^https:\/\//u);
    assert.match(review.reviewDate, /^\d{4}-\d{2}-\d{2}$/u);
    assert.ok(review.author.length > 0);
    assert.ok(review.report.length > 0);
    assert.ok(review.crossCheck.length > 0);
    assert.equal(review.usedInCostModel, false);
    assert.ok(review.limitations.length > 0);
  }
}

export function validateCostStudy(providers, workloads, reviews) {
  assert.equal(providers.reviewedAt, workloads.reviewedAt);
  assert.ok(providers.competitors.length >= 20);
  assert.deepEqual(
    new Set(providers.competitors.map(({ id }) => id)).size,
    providers.competitors.length,
  );
  assert.deepEqual(
    new Set(workloads.workloads.map(({ id }) => id)).size,
    workloads.workloads.length,
  );

  const requiredBillingFields = [
    "subscription",
    "minimum",
    "requestFees",
    "resultFees",
    "credits",
    "overages",
    "platformCosts",
    "failedCharges",
  ];

  for (const provider of providers.competitors) {
    for (const field of requiredBillingFields) {
      assert.equal(typeof provider[field], "string", `${provider.id}.${field}`);
      assert.ok(provider[field].length > 0, `${provider.id}.${field}`);
    }
    assert.ok(provider.sources.length > 0, `${provider.id}.sources`);
    for (const source of provider.sources) {
      assert.match(source, /^https:\/\//, `${provider.id}.source`);
    }
  }

  for (const workload of workloads.workloads) {
    assert.equal(
      workload.rawCandidates - workload.rejectedByFilters - workload.duplicates,
      workload.delivered,
      `${workload.id}.delivered`,
    );
    assert.equal(workload.xquikBilled, workload.delivered);
  }

  validateReviewEvidence(providers, reviews);
}

export function calculateCostStudy(providers, workloads, reviews) {
  validateCostStudy(providers, workloads, reviews);
  const modeledCompetitors = providers.competitors.filter(
    ({ model }) => competitorCost(model, workloads.workloads[0]) !== null,
  );

  const scenarios = workloads.workloads.map((workload) => {
    const xquikUsd = roundUsd(
      workload.xquikBilled * providers.xquik.paygUsdPerResult,
    );
    const competitors = Object.fromEntries(
      modeledCompetitors.map((provider) => [
        provider.id,
        competitorCost(provider.model, workload),
      ]),
    );
    const lowestModeledCompetitorUsd = Math.min(
      ...Object.values(competitors),
    );

    return {
      id: workload.id,
      rawCandidates: workload.rawCandidates,
      rejectedByFilters: workload.rejectedByFilters,
      duplicates: workload.duplicates,
      delivered: workload.delivered,
      xquikBilled: workload.xquikBilled,
      xquikUsd,
      xquikUsdPerDelivered: roundUsd(xquikUsd / workload.delivered),
      competitors,
      lowestModeledCompetitorUsd,
      xquikLowestInPublishedUnitModel: xquikUsd < lowestModeledCompetitorUsd,
    };
  });

  return {
    reviewedAt: providers.reviewedAt,
    competitorCount: providers.competitors.length,
    modeledCompetitorCount: modeledCompetitors.length,
    reviewCoverageCount: reviews.coverage.length,
    reviewCount: reviews.reviews.length,
    reviewProviderCount: new Set(
      reviews.reviews.map(({ providerId }) => providerId),
    ).size,
    modelStatus: workloads.status,
    leastCostProven: false,
    proofBlockers: [
      "No same-day live output match exists for every direct service.",
      "Several request-priced services omit a stable row-cost contract.",
      "TwexAPI omits its complete billing contract.",
      "First-purchase cash and recurring usage need separate totals.",
      "No funded filter and deduplication billing run is available.",
    ],
    scenarios,
  };
}

export async function loadCostStudy() {
  const [providers, workloads, reviews] = await Promise.all([
    readJson(providerUrl),
    readJson(workloadUrl),
    readJson(reviewUrl),
  ]);
  return calculateCostStudy(providers, workloads, reviews);
}

const invokedPath = process.argv[1] && pathToFileURL(process.argv[1]).href;
if (invokedPath === import.meta.url) {
  const study = await loadCostStudy();
  if (process.argv.includes("--json")) {
    process.stdout.write(`${JSON.stringify(study, null, 2)}\n`);
  } else {
    process.stdout.write(
      `Checked ${study.competitorCount} competitors and ${study.scenarios.length} workloads.\n`,
    );
  }
}
