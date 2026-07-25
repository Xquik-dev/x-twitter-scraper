// SPDX-FileCopyrightText: 2026 Xquik Contributors
// SPDX-License-Identifier: MIT

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

test("packaged MCP entry supports the offline quickstart workflow", () => {
  const manifest = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
  assert.ok(manifest.files.includes("stub-server.mjs"));

  const requests = [
    { jsonrpc: "2.0", id: 1, method: "initialize", params: {} },
    { jsonrpc: "2.0", id: 2, method: "tools/list", params: {} },
    {
      jsonrpc: "2.0",
      id: 3,
      method: "tools/call",
      params: {
        name: "explore",
        arguments: {
          code: "async () => spec.endpoints.find(e => e.path === '/api/v1/x/tweets/search')",
        },
      },
    },
  ];
  const child = spawnSync(process.execPath, [join(root, "stub-server.mjs")], {
    encoding: "utf8",
    input: `${requests.map(JSON.stringify).join("\n")}\n`,
    timeout: 5_000,
  });

  assert.equal(child.status, 0, child.stderr);
  const responses = child.stdout.trim().split("\n").map(JSON.parse);
  assert.equal(responses[0].result.serverInfo.name, "xquik");

  const explore = responses[1].result.tools.find(
    (tool) => tool.name === "explore",
  );
  assert.ok(explore);
  assert.equal(explore.inputSchema.type, "object");
  assert.deepEqual(explore.inputSchema.required, ["code"]);
  assert.equal(explore.annotations.readOnlyHint, true);
  assert.match(explore.description, /EndpointInfo/u);
  assert.match(explore.description, /JSON or text/u);

  const resultText = responses[2].result.content[0].text;
  assert.match(resultText, /https:\/\/xquik\.com\/mcp/u);
  assert.match(resultText, /OAuth 2\.1/u);
});
