// SPDX-FileCopyrightText: 2026 Xquik Contributors
// SPDX-License-Identifier: MIT

import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("uses the canonical extraction field in the competitor guide", async () => {
  const guide = await readFile(
    new URL("../task-guides/track-competitors.md", import.meta.url),
    "utf8",
  );

  assert.match(guide, /toolType=post_extractor/);
  assert.doesNotMatch(guide, /\btool=post_extractor\b/);
});
