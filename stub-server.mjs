#!/usr/bin/env node

// SPDX-FileCopyrightText: 2026 Xquik Contributors
// SPDX-License-Identifier: MIT

// Package-verification stub for the stdio MCP protocol.
// Returns the public tool definitions used by registry checks.
// Connect to https://xquik.com/mcp for live requests.

import { createInterface } from "node:readline";
import { pathToFileURL } from "node:url";

const SERVER_INFO = {
  name: "xquik",
  version: "2.6.6",
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

function description(lines) {
  return lines.join("\n");
}

function codeInputSchema(descriptionText) {
  return {
    type: "object",
    properties: {
      code: {
        type: "string",
        maxLength: 4096,
        description: descriptionText,
      },
    },
    required: ["code"],
  };
}

const TOOLS = [
  {
    name: "explore",
    description: description([
      "The live Xquik 'explore' tool searches the 120-route API catalog. This package stub returns setup guidance only.",
      "",
      "## When to use",
      "- Call 'explore' before 'xquik' to find an endpoint, its parameters, and its response shape.",
      "- Call it when the user asks what the Twitter API supports.",
      "- Check whether an endpoint uses included usage or requires account access.",
      "",
      "## When not to use",
      "- Use 'xquik' instead when fetching live X data.",
      "- Skip discovery when you know the endpoint and parameters.",
      "",
      "## Behavior",
      "- The live server searches the catalog without sending an API request.",
      "- The package stub makes no network call and returns setup instructions.",
      "- The live catalog has 120 routes. Of these, 119 support JSON or text.",
      "- Each EndpointInfo contains method, path, summary, category, free, parameters, and responseShape.",
      "",
      "## Input format",
      "Provide a bounded request function. Filter, search, or return the `spec.endpoints` EndpointInfo array.",
      "",
      "## Examples",
      "Find all included-usage endpoints: `async () => spec.endpoints.filter(e => e.free)`",
      "Filter by category: `async () => spec.endpoints.filter(e => e.category === 'composition')`",
      "Search summaries: `async () => spec.endpoints.filter(e => e.summary.toLowerCase().includes('tweet'))`",
      "Get one endpoint: `async () => spec.endpoints.find(e => e.path === '/api/v1/x/tweets/search')`",
    ]),
    inputSchema: codeInputSchema(
      "Bounded function that filters or searches the spec.endpoints EndpointInfo array. Return one EndpointInfo object or an array. Example: async () => spec.endpoints.filter(e => e.category === 'twitter')",
    ),
    annotations: {
      destructiveHint: false,
      idempotentHint: true,
      openWorldHint: false,
      readOnlyHint: true,
    },
  },
  {
    name: "xquik",
    description: description([
      "The live 'xquik' tool sends approved requests across 120 catalog routes. This package stub returns setup guidance only.",
      "",
      "## When to use",
      "- Call it after 'explore' identifies the endpoint and parameters.",
      "- Use it for Twitter search, user lookup, draws, extractions, composition, private reads, monitors, webhooks, and approved writes.",
      "- Get approval before private reads, persistent resources, metered operations, and writes.",
      "",
      "## When not to use",
      "- Use 'explore' first when you do not know the endpoint.",
      "- Omit API keys and authorization headers. The server adds authentication.",
      "",
      "## Behavior",
      "- The live server processes `xquik.request(path, options?)` inside a bounded sandbox.",
      "- The package stub makes no API request and returns setup instructions.",
      "- The live tool cannot access local files or arbitrary network hosts.",
      "- 119 catalog routes support JSON or text. Use REST for binary downloads.",
      "- Write operations require prior approval and can return durable actions.",
      "- Pagination responses include `has_more` and `next_cursor`. Pass `cursor` for the next page.",
      "- Show the exact payload, target, and usage estimate before changing X or Xquik resources.",
      "",
      "## Error handling",
      "- For 402, explain the account state and send the user to the dashboard.",
      "- For 429, wait before retrying.",
      "- For 404, explain which user, tweet, or monitor was not found.",
      "- For durable writes, follow `safe_to_retry` and `next_action` before retrying.",
      "",
      "## Input format",
      "Provide a bounded function that calls `xquik.request(path, { method?, body?, query? })`. The server adds authentication.",
      "",
      "## Examples",
      "Search tweets: `async () => xquik.request('/api/v1/x/tweets/search', { query: { q: 'twitter scraper api', limit: '50' } })`",
      "Get user: `async () => xquik.request('/api/v1/x/users/elonmusk')`",
      "Post after approval: `async () => xquik.request('/api/v1/x/tweets', { method: 'POST', body: { account: '<confirmed_account>', text: '<confirmed_text>' } })`",
    ]),
    inputSchema: codeInputSchema(
      "Bounded function that calls xquik.request(path, options?) for Twitter API operations. The server adds authentication. Example: async () => xquik.request('/api/v1/x/tweets/search', { query: { q: 'twitter api', limit: '20' } })",
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

function isKnownTool(name) {
  return TOOLS.some((tool) => tool.name === name);
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
        if (isKnownTool(toolName)) {
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
