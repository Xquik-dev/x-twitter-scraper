import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const coveragePath = new URL(
  "../docs/research/content-gap-coverage-2026-08-22.md",
  import.meta.url,
);
const sourceIndexPath = new URL(
  "../docs/research/sources/README.md",
  import.meta.url,
);

const requiredGapIds = [
  "quickstart",
  "response-shape",
  "input-identities",
  "credential-boundary",
  "x-account-boundary",
  "access-outcomes",
  "client-choice",
  "lookup-vs-bulk",
  "pagination",
  "resource-coverage",
  "filters",
  "dedupe",
  "limits",
  "estimates",
  "exports",
  "monitors",
  "webhooks",
  "actor-costs",
  "billing-units",
  "failure-billing",
  "cost-example",
  "cost-study",
  "customer-reviews",
  "student-workflow",
  "developer-workflow",
  "no-code-workflow",
  "agency-workflow",
  "ai-workflow",
  "diy-maintenance",
  "proxy-boundary",
  "secret-boundary",
  "account-actions",
  "bulk-action-safety",
  "legal-use",
  "troubleshooting",
  "support",
  "matched-pilot",
  "vendor-metrics",
  "testimonials",
  "provider-branding",
];

test("records every required competitor topic decision", async () => {
  const coverage = await readFile(coveragePath, "utf8");

  assert.equal(requiredGapIds.length, 40);
  for (const gapId of requiredGapIds) {
    assert.match(coverage, new RegExp(`\\| ${gapId} \\|`));
  }
  assert.match(coverage, /\| Covered \|/);
  assert.match(coverage, /\| Partial:/);
  assert.match(coverage, /\| Skipped:/);
});

test("maps all dated source records into the coverage matrix", async () => {
  const [coverage, sourceIndex] = await Promise.all([
    readFile(coveragePath, "utf8"),
    readFile(sourceIndexPath, "utf8"),
  ]);
  const sourceFiles = [
    ...sourceIndex.matchAll(/\[Review\]\(([^)]+-2026-08-22\.md)\)/g),
  ].map((match) => match[1]);

  assert.equal(sourceFiles.length, 12);
  assert.equal(new Set(sourceFiles).size, 12);
  for (const sourceFile of sourceFiles) {
    assert.match(coverage, new RegExp(`sources/${sourceFile}`));
  }
});
