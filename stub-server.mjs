#!/usr/bin/env node

// SPDX-FileCopyrightText: 2026 Xquik Contributors
// SPDX-License-Identifier: MIT

// Minimal stdio MCP server stub for package verification.
// Exposes the public tool shape used by registry checks.
// For live usage, connect to: https://xquik.com/mcp

import { createInterface } from "node:readline";
import { pathToFileURL } from "node:url";

const SERVER_INFO = {
  name: "xquik",
  version: "2.5.6",
};

const CAPABILITIES = {
  tools: { listChanged: false },
};

const MAX_LINE_LENGTH = 64 * 1024;
const JSONRPC = "2.0";
const LIVE_SERVER_MESSAGE =
  "This is a verification stub. Add https://xquik.com/mcp to your MCP client and complete OAuth 2.1 for live API access. API keys remain a bearer-token fallback.";

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
      "Live Xquik tool: search the 119-route API catalog before calling 'xquik'. This package stub returns setup guidance only.",
      "",
      "## When to use",
      "- Use 'explore' FIRST to find the right endpoint path, parameters, and response shape before calling 'xquik'.",
      "- Use when the user asks what capabilities are available or how to accomplish a task on X/Twitter.",
      "- Use to check whether an endpoint is included usage or requires account access.",
      "",
      "## When NOT to use",
      "- Do NOT use 'explore' to fetch live data from X - use 'xquik' instead.",
      "- Do NOT use if you already know the endpoint path and parameters.",
      "",
      "## Behavior",
      "- Live server: read-only, idempotent catalog search with no API request.",
      "- Package stub: makes no network call and returns live setup guidance.",
      "- The live catalog has 119 routes. Of these, 118 support JSON or text.",
      "- Each EndpointInfo contains method, path, summary, category, free, parameters, and responseShape fields.",
      "",
      "## Input format",
      "Provide a bounded request function. The server exposes `spec.endpoints` (EndpointInfo[]). Filter, search, or return them.",
      "",
      "## Examples",
      "Find all included-usage endpoints: `async () => spec.endpoints.filter(e => e.free)`",
      "Find by category: `async () => spec.endpoints.filter(e => e.category === 'composition')`",
      "Search by keyword: `async () => spec.endpoints.filter(e => e.summary.toLowerCase().includes('tweet'))`",
      "Get full details: `async () => spec.endpoints.find(e => e.path === '/api/v1/x/tweets/search')`",
    ]),
    inputSchema: codeInputSchema(
      "Bounded request function that filters or searches spec.endpoints (EndpointInfo[]). Must return an array or single EndpointInfo object. Example: async () => spec.endpoints.filter(e => e.category === 'twitter')",
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
      "Live Xquik tool: send confirmed requests across 119 catalog routes. This package stub returns setup guidance only.",
      "",
      "## When to use",
      "- Use after calling 'explore' to discover the endpoint path and parameters.",
      "- Use for live X/Twitter operations such as tweet search, user lookup, giveaway draws, extraction jobs, composition, private reads, persistent monitors, webhooks, and confirmation-gated writes.",
      "- Confirm private reads, persistent resources, metered operations, and writes before using endpoints that require user approval.",
      "",
      "## When NOT to use",
      "- Do NOT use to discover endpoints - use 'explore' first.",
      "- Do NOT pass API keys or auth headers - authentication is injected automatically.",
      "",
      "## Behavior",
      "- Live server: processes `xquik.request(path, options?)` inside a bounded sandbox.",
      "- Package stub: makes no API request and returns live setup guidance.",
      "- The live tool has no filesystem or arbitrary network access.",
      "- 118 catalog routes support JSON or text. Binary support downloads use REST.",
      "- Mutating operations require prior user confirmation and can return durable actions.",
      "- Pagination responses include `has_more` and `next_cursor`. Pass `cursor` for the next page.",
      "- Some operations modify X or Xquik resources. Show the exact payload, target, and usage estimate before calling them.",
      "",
      "## Error handling",
      "- 402: Account access or usage balance requires dashboard attention. Explain the account state and direct the user to the dashboard before retrying.",
      "- 429: Rate limited. Retry after backoff.",
      "- 404: Resource not found, such as a missing user, tweet, or monitor.",
      "- Durable writes: follow `safe_to_retry` and `next_action` before retrying.",
      "",
      "## Input format",
      "Provide a bounded request function using `xquik.request(path, { method?, body?, query? })`. Auth is automatic.",
      "",
      "## Examples",
      "Search tweets: `async () => xquik.request('/api/v1/x/tweets/search', { query: { q: 'AI agents', limit: '50' } })`",
      "Get user: `async () => xquik.request('/api/v1/x/users/elonmusk')`",
      "After explicit user confirmation, post tweet: `async () => xquik.request('/api/v1/x/tweets', { method: 'POST', body: { account: '<confirmed_account>', text: '<confirmed_text>' } })`",
    ]),
    inputSchema: codeInputSchema(
      "Bounded request function that calls xquik.request(path, options?) to perform X/Twitter API operations. Auth is injected automatically. Example: async () => xquik.request('/api/v1/x/tweets/search', { query: { q: 'AI', limit: '20' } })",
    ),
    annotations: {
      destructiveHint: true,
      idempotentHint: false,
      openWorldHint: true,
      readOnlyHint: false,
    },
  },
];

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

    switch (method) {
      case "initialize":
        return sendResult(id, {
          protocolVersion: "2024-11-05",
          serverInfo: SERVER_INFO,
          capabilities: CAPABILITIES,
        });

      case "notifications/initialized":
        return; // no response needed

      case "tools/list":
        return sendResult(id, { tools: TOOLS });

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
        if (id !== undefined) {
          return sendError(id, -32601, `Method not found: ${method}`);
        }
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
    // ignore malformed input
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
