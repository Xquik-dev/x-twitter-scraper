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
    1,
    "the shared request must use one finite bound",
  );

  const estimateIndex = workflow.indexOf("json_body=extraction_request");
  const allowedIndex = workflow.indexOf('estimate["allowed"] is not True');
  const approvalIndex = workflow.indexOf("require_explicit_approval(proposal)");
  const createIndex = workflow.indexOf(
    '"/extractions", method="POST", json_body=extraction_request',
  );

  assert.ok(estimateIndex >= 0, "shared estimate request is missing");
  assert.ok(allowedIndex >= 0, "strict estimate response gate is missing");
  assert.ok(
    estimateIndex < allowedIndex && allowedIndex < approvalIndex && approvalIndex < createIndex,
    "exact-job approval must follow the estimate and precede job creation",
  );
});
