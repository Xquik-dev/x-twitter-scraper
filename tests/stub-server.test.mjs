// SPDX-FileCopyrightText: 2026 Xquik Contributors
// SPDX-License-Identifier: MIT

import assert from "node:assert/strict";
import { once } from "node:events";
import { PassThrough } from "node:stream";
import test from "node:test";

import {
  createMessageHandler,
  processLine,
  startServer,
} from "../stub-server.mjs";

test("handles every supported JSON-RPC message", () => {
  const lines = [];
  const handleMessage = createMessageHandler((line) => lines.push(line));
  const messages = [
    { id: 1, method: "server/discover" },
    { id: 2, method: "initialize" },
    { method: "notifications/initialized" },
    { method: "server/discover" },
    { method: "tools/list" },
    { id: 3, method: "tools/list" },
    { id: 4, method: "tools/call", params: { name: "explore" } },
    { id: 5, method: "tools/call", params: { name: "xquik" } },
    { id: 6, method: "tools/call", params: { name: "missing" } },
    { id: 7, method: "tools/call" },
    { id: 8, method: "ping" },
    { id: 9, method: "missing" },
    { method: "missing" },
  ];

  for (const message of messages) {
    processLine(JSON.stringify(message), handleMessage);
  }

  assert.equal(lines.length, 9);
  const responses = lines.map((line) => JSON.parse(line));
  assert.deepEqual(responses[0].result.supportedVersions, ["2026-07-28"]);
  assert.equal(responses[0].result.cacheScope, "private");
  assert.deepEqual(responses[0].result.capabilities, {
    tools: { listChanged: false },
  });
  assert.equal(
    responses[0].result._meta["io.modelcontextprotocol/serverInfo"].version,
    "2.6.4",
  );
  assert.equal(responses[1].result.protocolVersion, "2025-11-25");
  assert.equal(responses[1].result.serverInfo.version, "2.6.4");
  assert.equal(responses[2].result.tools.length, 2);
  assert.equal(responses[2].result.cacheScope, "private");
  assert.equal(responses[2].result.ttlMs, 300_000);
  assert.match(responses[3].result.content[0].text, /verification stub/u);
  assert.match(responses[4].result.content[0].text, /verification stub/u);
  assert.match(responses[5].error.message, /missing/u);
  assert.match(responses[6].error.message, /undefined/u);
  assert.deepEqual(responses[7].result, {});
  assert.match(responses[8].error.message, /Method not found/u);
});

test("ignores malformed, non-object, and oversized input", () => {
  const lines = [];
  const handleMessage = createMessageHandler((line) => lines.push(line));

  processLine("{", handleMessage);
  processLine("null", handleMessage);
  processLine("[]", handleMessage);
  processLine(`"${"x".repeat(64 * 1024)}"`, handleMessage);

  assert.deepEqual(lines, []);
});

test("connects the stdio server to supplied streams", async () => {
  const input = new PassThrough();
  const output = new PassThrough();
  let raw = "";
  output.setEncoding("utf8");
  output.on("data", (chunk) => {
    raw += chunk;
  });

  const server = startServer({ input, output });
  input.end('{"id":9,"method":"ping"}\n');
  await once(server, "close");

  assert.deepEqual(JSON.parse(raw), {
    jsonrpc: "2.0",
    id: 9,
    result: {},
  });
});
