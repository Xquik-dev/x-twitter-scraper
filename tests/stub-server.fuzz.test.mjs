// SPDX-FileCopyrightText: 2026 Xquik Contributors
// SPDX-License-Identifier: MIT

import assert from "node:assert/strict";
import test from "node:test";

import fc from "fast-check";

import {
  createMessageHandler,
  processLine,
} from "../stub-server.mjs";

const FUZZ_OPTIONS = {
  endOnFailure: true,
  numRuns: 1_000,
  seed: 20_260_728,
};

const KNOWN_METHODS = new Set([
  "initialize",
  "notifications/initialized",
  "ping",
  "tools/call",
  "tools/list",
]);

function collectResponses(line) {
  const lines = [];
  const handleMessage = createMessageHandler((response) =>
    lines.push(response),
  );
  processLine(line, handleMessage);
  return lines.map((response) => JSON.parse(response));
}

function assertValidResponse(response) {
  assert.equal(response.jsonrpc, "2.0");
  const hasResult = Object.hasOwn(response, "result");
  const hasError = Object.hasOwn(response, "error");
  assert.notEqual(hasResult, hasError);
  if (hasError) {
    assert.equal(typeof response.error.code, "number");
    assert.equal(typeof response.error.message, "string");
  }
}

test("fuzzes arbitrary JSON lines without invalid responses", () => {
  const inputLine = fc.oneof(
    fc.jsonValue().map(JSON.stringify),
    fc.string({ maxLength: 4_096 }),
  );

  fc.assert(
    fc.property(inputLine, (line) => {
      const responses = collectResponses(line);
      for (const response of responses) {
        assertValidResponse(response);
      }
    }),
    FUZZ_OPTIONS,
  );
});

test("fuzzes unknown methods while preserving JSON-RPC identifiers", () => {
  const identifier = fc.oneof(
    fc.integer(),
    fc.string({ maxLength: 128 }),
    fc.constant(null),
  );
  const unknownMethod = fc
    .string({ maxLength: 128 })
    .filter((method) => !KNOWN_METHODS.has(method));

  fc.assert(
    fc.property(identifier, unknownMethod, fc.jsonValue(), (id, method, params) => {
      const responses = collectResponses(
        JSON.stringify({ jsonrpc: "2.0", id, method, params }),
      );
      assert.deepEqual(responses, [
        {
          jsonrpc: "2.0",
          id,
          error: {
            code: -32601,
            message: `Method not found: ${method}`,
          },
        },
      ]);
    }),
    FUZZ_OPTIONS,
  );
});
