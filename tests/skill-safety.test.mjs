// SPDX-FileCopyrightText: 2026 Xquik Contributors
// SPDX-License-Identifier: MIT

import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("keeps the Python extraction example bounded and requires approval", async () => {
  const source = await readFile(
    new URL(
      "../skills/x-twitter-scraper/references/python-examples.md",
      import.meta.url,
    ),
    "utf8",
  );
  const workflow = source.match(
    /## Extraction workflow\n\n```python\n([\s\S]*?)\n```/,
  )?.[1];

  assert.ok(workflow, "Python extraction workflow is missing");
  assert.match(workflow, /RESULTS_LIMIT = [1-9]\d*/);
  assert.equal(
    workflow.match(/"resultsLimit": RESULTS_LIMIT/g)?.length,
    2,
    "estimate and create requests must use the same finite bound",
  );

  const allowedIndex = workflow.indexOf('if not estimate["allowed"]:');
  const approvalIndex = workflow.indexOf(
    '"the bounded extraction job, usage, recipients, and retention"',
  );
  const createIndex = workflow.indexOf(
    'xquik_fetch("/extractions", method="POST"',
  );

  assert.ok(allowedIndex >= 0, "estimate response gate is missing");
  assert.ok(
    allowedIndex < approvalIndex && approvalIndex < createIndex,
    "exact-job approval must follow the estimate and precede job creation",
  );
});
