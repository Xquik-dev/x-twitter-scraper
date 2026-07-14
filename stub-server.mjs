#!/usr/bin/env node

// Minimal stdio MCP server stub for package verification.
// Exposes the public tool shape used by registry checks.
// For live usage, connect to: https://xquik.com/mcp

import { createInterface } from "node:readline";

const SERVER_INFO = {
  name: "xquik",
  version: "2.5.1",
};

const CAPABILITIES = {
  tools: { listChanged: false },
};

const MAX_LINE_LENGTH = 64 * 1024;
const JSONRPC = "2.0";
const LIVE_SERVER_MESSAGE =
  'This is a verification stub. Connect to the live server at https://xquik.com/mcp for real API access. Configure with: { "mcpServers": { "xquik": { "url": "https://xquik.com/mcp", "headers": { "x-api-key": "<YOUR_API_KEY>" } } } }';

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
      "Search and browse the Xquik X (Twitter) API specification to discover endpoints before making live API calls with the 'xquik' tool.",
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
      "- Read-only, idempotent. No network calls - runs against an in-memory catalog of 118 MCP operations.",
      "- Included usage and does not require authentication.",
      "- Returns the result of your filter function, such as an empty array if no endpoints match.",
      "- Returns a validation error if the request function is invalid.",
      "- Timeout: 60 seconds.",
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
      "Send confirmed Xquik API requests across 118 MCP operations.",
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
      "- Processes the provided request function with `xquik.request(path, options?)` and `spec.endpoints` available.",
      "- No filesystem or arbitrary network access - only xquik.request() is available.",
      "- Timeout: 60 seconds per invocation, 60 seconds per individual API request.",
      "- Read operations return JSON objects with the requested data.",
      "- Mutating operations require prior user confirmation and return `{ success: true }` or `{ success: true, warning: '...' }`.",
      "- Pagination responses include `has_next_page` and `next_cursor`. Pass `cursor` as a query param for the next page.",
      "- Some operations modify X or Xquik resources. Show the exact payload, target, and usage estimate before calling them.",
      "",
      "## Error handling",
      "- 402: Account access or usage balance requires dashboard attention. Explain the account state and direct the user to the dashboard before retrying.",
      "- 429: Rate limited. Retry after backoff.",
      "- 404: Resource not found, such as a missing user, tweet, or monitor.",
      "- 200 with `warning` field: Probable success - do NOT retry.",
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

const rl = createInterface({ input: process.stdin, terminal: false });

function send(msg) {
  const json = JSON.stringify(msg);
  process.stdout.write(json + "\n");
}

function sendResult(id, result) {
  send({ jsonrpc: JSONRPC, id, result });
}

function sendError(id, code, message) {
  send({ jsonrpc: JSONRPC, id, error: { code, message } });
}

function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function isKnownTool(name) {
  return TOOLS.some((tool) => tool.name === name);
}

function sendStubToolResult(id) {
  sendResult(id, {
    content: [{ type: "text", text: LIVE_SERVER_MESSAGE }],
  });
}

function handleMessage(msg) {
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
}

rl.on("line", (line) => {
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
});
