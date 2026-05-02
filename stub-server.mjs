#!/usr/bin/env node

// Minimal stdio MCP server stub for Glama Docker verification.
// Exposes the same tool definitions as the real remote server at https://xquik.com/mcp
// so Glama can discover tools, run TDQS scoring, and mark the server as tested.
// For live usage, connect to: https://xquik.com/mcp

import { createInterface } from "node:readline";

const SERVER_INFO = {
  name: "xquik",
  version: "2.4.8",
};

const CAPABILITIES = {
  tools: { listChanged: false },
};

const TOOLS = [
  {
    name: "explore",
    description:
      "Search and browse the Xquik X (Twitter) API specification to discover endpoints before making live API calls with the 'xquik' tool.\n\n" +
      "## When to use\n" +
      "- Use 'explore' FIRST to find the right endpoint path, parameters, and response shape before calling 'xquik'.\n" +
      "- Use when the user asks what capabilities are available or how to accomplish a task on X/Twitter.\n" +
      "- Use to check whether an endpoint is free or requires a subscription.\n\n" +
      "## When NOT to use\n" +
      "- Do NOT use 'explore' to fetch live data from X - use 'xquik' instead.\n" +
      "- Do NOT use if you already know the endpoint path and parameters.\n\n" +
      "## Behavior\n" +
      "- Read-only, idempotent. No network calls - runs against an in-memory catalog of 113 endpoints.\n" +
      "- Always free, no authentication or credits required.\n" +
      "- Returns the result of your filter function (e.g., empty array if no endpoints match).\n" +
      "- Returns an error message if the code is syntactically invalid or throws at runtime.\n" +
      "- Execution timeout: 60 seconds.\n" +
      "- Each EndpointInfo contains: method, path, summary, category (account | composition | credits | extraction | media | monitoring | support | twitter | x-accounts | x-write), free (boolean), parameters (array), and responseShape (string).\n\n" +
      "## Input format\n" +
      "Write an async arrow function. The sandbox provides `spec.endpoints` (EndpointInfo[]). Filter, search, or return them.\n\n" +
      "## Examples\n" +
      "Find all free endpoints: `async () => spec.endpoints.filter(e => e.free)`\n" +
      "Find by category: `async () => spec.endpoints.filter(e => e.category === 'composition')`\n" +
      "Search by keyword: `async () => spec.endpoints.filter(e => e.summary.toLowerCase().includes('tweet'))`\n" +
      "Get full details: `async () => spec.endpoints.find(e => e.path === '/api/v1/x/tweets/search')`",
    inputSchema: {
      type: "object",
      properties: {
        code: {
          type: "string",
          maxLength: 4096,
          description:
            "JavaScript async arrow function that filters or searches spec.endpoints (EndpointInfo[]). Must return an array or single EndpointInfo object. Example: async () => spec.endpoints.filter(e => e.category === 'twitter')",
        },
      },
      required: ["code"],
    },
    annotations: {
      destructiveHint: false,
      idempotentHint: true,
      openWorldHint: false,
      readOnlyHint: true,
    },
  },
  {
    name: "xquik",
    description:
      "Execute authenticated X (Twitter) API calls to read data, publish content, and manage accounts across 113 REST endpoints.\n\n" +
      "## When to use\n" +
      "- Use after calling 'explore' to discover the endpoint path and parameters.\n" +
      "- Use for any live X/Twitter operation: search tweets, look up users, post tweets, like, retweet, follow, send DMs, run giveaway draws, monitor accounts, extract bulk data, compose tweets, and more.\n\n" +
      "## When NOT to use\n" +
      "- Do NOT use to discover endpoints - use 'explore' first.\n" +
      "- Do NOT pass API keys or auth headers - authentication is injected automatically.\n\n" +
      "## Behavior\n" +
      "- Executes the provided async function in a sandboxed environment with `xquik.request(path, options?)` and `spec.endpoints` available.\n" +
      "- Sandboxed via Node.js VM: no filesystem, no global network access - only xquik.request() is available. Console calls are silently ignored.\n" +
      "- Execution timeout: 60 seconds per invocation, 60 seconds per individual API request.\n" +
      "- Read operations (GET) return JSON objects with the requested data. Write operations (POST/DELETE) return `{ success: true }` or `{ success: true, warning: '...' }`.\n" +
      "- Pagination: responses include `has_next_page` (boolean) and `next_cursor` (string). Pass `cursor` as a query param for the next page.\n" +
      "- Can be destructive: write operations (POST/DELETE) modify data on X (tweets, follows, DMs, profile).\n\n" +
      "## Error handling\n" +
      "- 402: Subscription required or insufficient credits. Call `POST /api/v1/subscribe` to get a checkout URL.\n" +
      "- 429: Rate limited. Retry after backoff.\n" +
      "- 404: Resource not found (user, tweet, or monitor does not exist).\n" +
      "- 200 with `warning` field: Probable success - do NOT retry.\n\n" +
      "## Costs\n" +
      "- Free: compose, styles, drafts, radar, subscribe, account, api-keys, support.\n" +
      "- 1 credit/read ($0.00015): tweet search, timeline, bookmarks, favoriters.\n" +
      "- 10 credits/write ($0.0015): tweet, like, retweet, follow, DM.\n\n" +
      "## Input format\n" +
      "Write an async arrow function using `xquik.request(path, { method?, body?, query? })`. Auth is automatic.\n\n" +
      "## Examples\n" +
      "Search tweets: `async () => xquik.request('/api/v1/x/tweets/search', { query: { q: 'AI agents', limit: '50' } })`\n" +
      "Get user: `async () => xquik.request('/api/v1/x/users/elonmusk')`\n" +
      "Post tweet: `async () => { const { accounts } = await xquik.request('/api/v1/x/accounts'); return xquik.request('/api/v1/x/tweets', { method: 'POST', body: { account: accounts[0].xUsername, text: 'Hello!' } }); }`",
    inputSchema: {
      type: "object",
      properties: {
        code: {
          type: "string",
          maxLength: 4096,
          description:
            "JavaScript async arrow function that calls xquik.request(path, options?) to execute X/Twitter API operations. Auth is injected automatically. Example: async () => xquik.request('/api/v1/x/tweets/search', { query: { q: 'AI', limit: '20' } })",
        },
      },
      required: ["code"],
    },
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

function handleMessage(msg) {
  const { id, method, params } = msg;

  switch (method) {
    case "initialize":
      return send({
        jsonrpc: "2.0",
        id,
        result: {
          protocolVersion: "2024-11-05",
          serverInfo: SERVER_INFO,
          capabilities: CAPABILITIES,
        },
      });

    case "notifications/initialized":
      return; // no response needed

    case "tools/list":
      return send({
        jsonrpc: "2.0",
        id,
        result: { tools: TOOLS },
      });

    case "tools/call": {
      const toolName = params?.name;
      if (toolName === "explore" || toolName === "xquik") {
        return send({
          jsonrpc: "2.0",
          id,
          result: {
            content: [
              {
                type: "text",
                text: `This is a verification stub. Connect to the live server at https://xquik.com/mcp for real API access. Configure with: { "mcpServers": { "xquik": { "url": "https://xquik.com/mcp", "headers": { "Authorization": "Bearer <YOUR_API_KEY>" } } } }`,
              },
            ],
          },
        });
      }
      return send({
        jsonrpc: "2.0",
        id,
        error: { code: -32601, message: `Unknown tool: ${toolName}` },
      });
    }

    case "ping":
      return send({ jsonrpc: "2.0", id, result: {} });

    default:
      if (id !== undefined) {
        return send({
          jsonrpc: "2.0",
          id,
          error: { code: -32601, message: `Method not found: ${method}` },
        });
      }
  }
}

rl.on("line", (line) => {
  try {
    handleMessage(JSON.parse(line));
  } catch {
    // ignore malformed input
  }
});
