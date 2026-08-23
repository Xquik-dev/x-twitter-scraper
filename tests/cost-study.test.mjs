// SPDX-FileCopyrightText: 2026 Xquik Contributors
// SPDX-License-Identifier: MIT

import assert from "node:assert/strict";
import test from "node:test";

import { loadCostStudy } from "../scripts/check-cost-study.mjs";

test("keeps the dated cost study reproducible", async () => {
  const study = await loadCostStudy();

  assert.equal(study.reviewedAt, "2026-08-22");
  assert.equal(study.competitorCount, 22);
  assert.equal(study.modeledCompetitorCount, 7);
  assert.equal(study.reviewCoverageCount, 22);
  assert.equal(study.reviewCount, 17);
  assert.equal(study.reviewProviderCount, 14);
  assert.equal(study.scenarios.length, 4);
  assert.equal(study.leastCostProven, false);
  assert.deepEqual(
    study.scenarios.map(({ xquikUsd }) => xquikUsd),
    [15, 60, 150, 1.5],
  );
  assert.ok(
    study.scenarios.every(
      ({ delivered, xquikBilled }) => delivered === xquikBilled,
    ),
  );
  assert.ok(
    study.scenarios.every(({ xquikLowestInPublishedUnitModel }) =>
      Boolean(xquikLowestInPublishedUnitModel),
    ),
  );
});
