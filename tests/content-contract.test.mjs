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

test("keeps the posting command explicitly confirmation gated", async () => {
  const command = await readFile(
    new URL("../commands/post.md", import.meta.url),
    "utf8",
  );

  assert.match(command, /## Workflow/);
  assert.match(command, /4\. Wait for explicit user approval\./);
  assert.match(command, /5\. After approval, use the `xquik` MCP tool/);
});
