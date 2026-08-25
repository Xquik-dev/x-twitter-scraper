#!/usr/bin/env bun

// SPDX-FileCopyrightText: 2026 Xquik
// SPDX-License-Identifier: MIT

// Package-verification stub for the stdio MCP protocol.
// Returns the published tool definitions used by registry checks.
// Connect to https://xquik.com/mcp for live requests.

import { createInterface } from "node:readline";
import { pathToFileURL } from "node:url";

const SERVER_INFO = {
  name: "xquik",
  version: "2.6.7",
};

const CAPABILITIES = {
  tools: { listChanged: false },
};

const MODERN_PROTOCOL_VERSION = "2026-07-28";
const LEGACY_PROTOCOL_VERSION = "2025-11-25";
const CACHE_TTL_MS = 300_000;
const MAX_LINE_LENGTH = 64 * 1024;
const JSONRPC = "2.0";
const LIVE_SERVER_MESSAGE =
  "This package is a verification stub. Add https://xquik.com/mcp to your MCP client and complete OAuth 2.1 for live API access. Use a bearer API key only when OAuth is unavailable.";

function inputSchema(name, description, maxLength, minLength) {
  return {
    type: "object",
    properties: {
      [name]: {
        type: "string",
        ...(minLength ? { minLength } : {}),
        maxLength,
        description,
      },
    },
    required: [name],
  };
}

const TOOLS = [
  {
    name: "docs",
    description:
      "Search Xquik scraper and API documentation. The stub returns setup guidance.",
    inputSchema: inputSchema("query", "Documentation search query.", 500, 1),
    annotations: {
      destructiveHint: false,
      idempotentHint: true,
      openWorldHint: true,
      readOnlyHint: true,
    },
  },
  {
    name: "search",
    description:
      "Search the credential-scoped OpenAPI catalog. The stub makes no API request.",
    inputSchema: inputSchema(
      "code",
      "Async arrow function that reads spec.endpoints.",
      10_000,
    ),
    annotations: {
      destructiveHint: false,
      idempotentHint: true,
      openWorldHint: false,
      readOnlyHint: true,
    },
  },
  {
    name: "execute",
    description:
      "Send confirmed Xquik API requests. The stub returns setup guidance.",
    inputSchema: inputSchema(
      "code",
      "Async arrow function that calls xquik.request(path, options?).",
      10_000,
    ),
    annotations: {
      destructiveHint: true,
      idempotentHint: false,
      openWorldHint: true,
      readOnlyHint: false,
    },
  },
];

const DISCOVERY_RESULT = {
  _meta: {
    "io.modelcontextprotocol/serverInfo": SERVER_INFO,
  },
  cacheScope: "private",
  capabilities: CAPABILITIES,
  supportedVersions: [MODERN_PROTOCOL_VERSION],
  ttlMs: CACHE_TTL_MS,
};

const TOOL_LIST_RESULT = {
  cacheScope: "private",
  tools: TOOLS,
  ttlMs: CACHE_TTL_MS,
};

function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

export function createMessageHandler(writeLine) {
  function send(msg) {
    writeLine(`${JSON.stringify(msg)}\n`);
  }

  function sendResult(id, result) {
    send({ jsonrpc: JSONRPC, id, result });
  }

  function sendError(id, code, message) {
    send({ jsonrpc: JSONRPC, id, error: { code, message } });
  }

  function sendStubToolResult(id) {
    sendResult(id, {
      content: [{ type: "text", text: LIVE_SERVER_MESSAGE }],
    });
  }

  return function handleMessage(msg) {
    const { id, method, params } = msg;
    if (id === undefined) {
      return;
    }

    switch (method) {
      case "server/discover":
        return sendResult(id, DISCOVERY_RESULT);

      case "initialize":
        return sendResult(id, {
          protocolVersion: LEGACY_PROTOCOL_VERSION,
          serverInfo: SERVER_INFO,
          capabilities: CAPABILITIES,
        });

      case "tools/list":
        return sendResult(id, TOOL_LIST_RESULT);

      case "tools/call": {
        const toolName = params?.name;
        if (TOOLS.some((tool) => tool.name === toolName)) {
          return sendStubToolResult(id);
        }
        return sendError(id, -32601, `Unknown tool: ${toolName}`);
      }

      case "ping":
        return sendResult(id, {});

      default:
        return sendError(id, -32601, `Method not found: ${method}`);
    }
  };
}

export function processLine(line, handleMessage) {
  if (line.length > MAX_LINE_LENGTH) {
    return;
  }

  try {
    const msg = JSON.parse(line);
    if (isObject(msg)) {
      handleMessage(msg);
    }
  } catch {
    // Ignore malformed input.
  }
}

export function startServer({
  input = process.stdin,
  output = process.stdout,
} = {}) {
  const rl = createInterface({ input, terminal: false });
  const handleMessage = createMessageHandler((line) => output.write(line));
  rl.on("line", (line) => processLine(line, handleMessage));
  return rl;
}

const isDirectExecution =
  process.argv[1] !== undefined &&
  import.meta.url === pathToFileURL(process.argv[1]).href;

if (isDirectExecution) {
  startServer();
}
