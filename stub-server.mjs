#!/usr/bin/env node

// Minimal stdio MCP server stub for Glama Docker verification.
// Exposes the same tool definitions as the real remote server at https://xquik.com/mcp
// so Glama can discover tools, run TDQS scoring, and mark the server as tested.
// For live usage, connect to: https://xquik.com/mcp

import { createInterface } from "node:readline";

const SERVER_INFO = {
  name: "xquik",
  version: "2.2.0",
};

const CAPABILITIES = {
  tools: { listChanged: false },
};

const TOOLS = [
  {
    name: "explore",
    description:
      "Search the X (Twitter) API spec for endpoints: tweet search, user lookup, media download, monitoring, giveaways, composition, and more. No network calls - runs against an in-memory endpoint catalog.\n\nWrite an async arrow function. The sandbox provides:\n\n```typescript\ninterface EndpointInfo {\n  method: string;\n  path: string;\n  summary: string;\n  category: string;\n  free: boolean;\n  parameters?: Array<{ name: string; in: 'query' | 'path' | 'body'; required: boolean; type: string; description: string }>;\n  responseShape?: string;\n}\n\ndeclare const spec: { endpoints: EndpointInfo[] };\n```\n\n## Examples\n\n### Find all free endpoints\n```javascript\nasync () => {\n  return spec.endpoints.filter(e => e.free);\n}\n```\n\n### Find endpoints by category\n```javascript\nasync () => {\n  return spec.endpoints.filter(e => e.category === 'composition');\n}\n```\n\n### Search by keyword\n```javascript\nasync () => {\n  return spec.endpoints.filter(e => e.summary.toLowerCase().includes('tweet'));\n}\n```",
    inputSchema: {
      type: "object",
      properties: {
        code: {
          type: "string",
          maxLength: 4096,
          description: "Async arrow function to execute",
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
      "Execute X (Twitter) API calls: search tweets, look up users, download media, compose tweets, run giveaways, monitor accounts, and more. Write an async arrow function.\n\nThe sandbox provides:\n```typescript\n// xquik.request(path, options?) - auth is injected automatically\ndeclare const xquik: {\n  request(path: string, options?: {\n    method?: string;  // default: 'GET'\n    body?: unknown;\n    query?: Record<string, string>;\n  }): Promise<unknown>;\n};\ndeclare const spec: { endpoints: EndpointInfo[] };\n```\n\nAuth is injected automatically - never pass API keys.\nFirst use \"explore\" to find endpoints, then write code here to call them.\n\n## Workflows\n\n### 1. Send a tweet (Subscription required)\n```javascript\nasync () => {\n  const { accounts } = await xquik.request('/api/v1/x/accounts');\n  return xquik.request('/api/v1/x/tweets', {\n    method: 'POST',\n    body: { account: accounts[0].xUsername, text: 'Hello world!' }\n  });\n}\n```\n\n### 2. Search tweets\n```javascript\nasync () => {\n  return xquik.request('/api/v1/x/tweets/search', { query: { q: 'AI agents', limit: '50' } });\n}\n```\n\n### 3. Get user profile\n```javascript\nasync () => {\n  return xquik.request('/api/v1/x/users/elonmusk');\n}\n```\n\n### 4. Run a giveaway draw\n```javascript\nasync () => {\n  return xquik.request('/api/v1/draws', {\n    method: 'POST',\n    body: { tweetUrl: 'https://x.com/user/status/123', winnerCount: 3 }\n  });\n}\n```\n\n### 5. Monitor an account\n```javascript\nasync () => {\n  return xquik.request('/api/v1/monitors', {\n    method: 'POST',\n    body: { username: 'elonmusk' }\n  });\n}\n```",
    inputSchema: {
      type: "object",
      properties: {
        code: {
          type: "string",
          maxLength: 4096,
          description: "Async arrow function to execute",
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
