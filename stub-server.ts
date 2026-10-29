#!/usr/bin/env bun

import { createInterface, type Interface } from "node:readline";
import { pathToFileURL } from "node:url";

const SERVER_INFO = {
  name: "xquik",
  version: "2.7.1",
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

const REQUEST_SECONDS = 54;

const READ_EXAMPLE =
  'async () => (await xquik.request({ path: "<path from search>" })).result';
const WRITE_EXAMPLE =
  'async () => (await xquik.request({ method: "POST", path: "<path from search>", body: { "<field>": "<value>" } })).result';

const executeDescription = (opening: string, methods: string, example: string): string =>
  `${opening} search returns endpoints, parameters, and response schemas. The sandbox declares \`interface XquikRequest { path: string; ${methods}; query?: Record<string, string | number | boolean | undefined>; body?: unknown } interface XquikResponse<T> { success: true; status: number; result: T; errors: []; messages: [] } declare const xquik: { result: unknown; request<T = unknown>(options: XquikRequest): Promise<XquikResponse<T>> }\`. code is an async arrow function. Canonical result fields use snake_case. camelCase reads resolve to the same value. Missing field reads return undefined and produce warnings listing available keys. Optional fields may require explicit request parameters. An absent field does not prove the data is unavailable. Output holds up to 24,000 characters, so large arrays fit after projection. A longer answer returns its first page. A call may send requests for ${String(REQUEST_SECONDS)} seconds. Paged reads return a cursor, so a few pages fit 1 call. Independent reads can run together with Promise.all. An answer with a result_id lets a later call project its data through xquik.result. result_id comes only from an earlier answer. It reuses saved data without repeating requests. Authentication and idempotency headers are injected, so code holds no credentials. The sandbox has no filesystem or general network access. A failed request throws an Error naming its method, path, HTTP status and the API's error.

Example
\`\`\`js
${example}
\`\`\``;

type ToolHints = { readonly openWorld: boolean; readonly readOnly: boolean };

function annotations(title: string, { openWorld, readOnly }: ToolHints) {
  return {
    destructiveHint: !readOnly,
    idempotentHint: readOnly,
    openWorldHint: openWorld,
    readOnlyHint: readOnly,
    title,
  };
}

const codeProperty = (description: string) => ({
  type: "string",
  maxLength: 10_000,
  description,
});

const EXECUTE_INPUT_SCHEMA = {
  type: "object",
  properties: {
    code: codeProperty("JavaScript async arrow function that calls xquik.request()."),
    result_id: {
      type: "string",
      pattern: "^[a-f0-9]{64}\\.[1-9]\\d{0,6}$",
      description:
        "Saved result ID from an earlier answer. Leave it out unless an answer gave you one. Read its data through xquik.result.",
    },
  },
  required: ["code"],
};

const TOOL_OUTPUT_SCHEMA = {
  type: "object",
  properties: {
    result: { description: "JSON returned by the executed async function." },
    warnings: {
      type: "object",
      additionalProperties: { type: "array", items: { type: "string" } },
      description:
        "Missing field names mapped to available keys. Optional fields may require explicit request parameters. Absence does not prove the data is unavailable.",
    },
  },
  required: ["result"],
  additionalProperties: false,
};

const DOCS_OUTPUT_SCHEMA = {
  type: "object",
  properties: {
    results: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "string", description: "Documentation page path" },
          text: { type: "string", description: "Matching documentation text" },
          title: { type: "string", description: "Documentation page title" },
          url: { type: "string", description: "Documentation URL" },
        },
        required: ["id", "text", "title", "url"],
        additionalProperties: false,
      },
    },
  },
  required: ["results"],
  additionalProperties: false,
};

const TOOL_DEFINITIONS = [
  {
    name: "docs",
    title: "Search Xquik documentation",
    description:
      "Search Xquik's public docs to answer questions about its X (Twitter) API, MCP setup, SDKs, errors and limits. Queries reach only the read-only docs server.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          minLength: 1,
          maxLength: 500,
          description: "Documentation search query.",
        },
      },
      required: ["query"],
    },
    outputSchema: DOCS_OUTPUT_SCHEMA,
    hints: { openWorld: true, readOnly: true },
  },
  {
    name: "search",
    title: "Search Xquik API specification",
    description:
      "Search the current credential's Xquik OpenAPI catalog for X (Twitter) operations. The sandbox has no network access. spec is global and the async function's first argument. spec.paths maps paths to HTTP methods and operation objects. Fields include operationId, summary, description, readOnly, tags, parameters, requestBody, and responses. The catalog resolves inputs inline. Response $refs point to reusable schemas in spec.components.schemas. An answer can hold operation descriptions, parameters, and response schemas with their paths. Fields remain queryable independently. Paths may contain placeholders. Answers hold up to 24,000 characters of JSON.\n\nExamples\n```js\n// Every tag\nasync (spec) => [...new Set(Object.values(spec.paths).flatMap(Object.values).flatMap((op) => op.tags ?? []))]\n// Operations tagged Users\nasync (spec) => Object.entries(spec.paths).flatMap(([path, methods]) => Object.entries(methods).filter(([, op]) => op.tags?.includes(\"Users\")).map(([method, op]) => ({ method, path, summary: op.summary })))\n// 1 operation's parameters\nasync (spec) => Object.values(spec.paths).flatMap(Object.values).find((op) => op.operationId === \"searchTweets\")?.parameters\n```",
    inputSchema: {
      type: "object",
      properties: { code: codeProperty("JavaScript async arrow function that searches spec.") },
      required: ["code"],
    },
    outputSchema: TOOL_OUTPUT_SCHEMA,
    hints: { openWorld: false, readOnly: true },
  },
  {
    name: "execute",
    title: "Read Xquik API data",
    description: executeDescription(
      "Execute JavaScript that reads Xquik's X (Twitter) API at https://xquik.com/docs. It runs each operation whose search spec says `readOnly: true`.",
      'method?: "GET" | "POST"',
      READ_EXAMPLE,
    ),
    inputSchema: EXECUTE_INPUT_SCHEMA,
    outputSchema: TOOL_OUTPUT_SCHEMA,
    hints: { openWorld: true, readOnly: true },
  },
  {
    name: "executeWrite",
    title: "Change data through the Xquik API",
    description: executeDescription(
      "Execute JavaScript that changes data through Xquik's X (Twitter) API at https://xquik.com/docs, such as posts, follows, monitors, webhooks & drafts. It runs each operation whose search spec says `readOnly: false`.",
      'method: "POST" | "PUT" | "PATCH" | "DELETE"',
      WRITE_EXAMPLE,
    ),
    inputSchema: EXECUTE_INPUT_SCHEMA,
    outputSchema: TOOL_OUTPUT_SCHEMA,
    hints: { openWorld: true, readOnly: false },
  },
  {
    name: "whoami",
    title: "Current Xquik account",
    description:
      "Return the Xquik account this connection is authenticated as. Takes no arguments. The id stays the same across token refresh, reconnection & permission changes.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    outputSchema: {
      type: "object",
      properties: {
        email: {
          type: "string",
          description: "Email address for display, never the profile identity.",
        },
        id: {
          type: "string",
          minLength: 1,
          pattern: "\\S",
          description:
            "Opaque profile identifier. Unique within Xquik, unchanged across token refresh & reconnection, & never reassigned to another account.",
        },
        name: {
          type: "string",
          description: "Display name for the authenticated account.",
        },
      },
      required: ["id"],
      additionalProperties: false,
    },
    hints: { openWorld: false, readOnly: true },
  },
];

const TOOLS = TOOL_DEFINITIONS.map(({ hints, ...tool }) => ({
  ...tool,
  annotations: annotations(tool.title, hints),
}));

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

export function createMessageHandler(writeLine: (line: string) => void): (msg: object) => void {
  function send(msg: Readonly<Record<string, unknown>>): void {
    writeLine(`${JSON.stringify(msg)}\n`);
  }

  function sendResult(id: unknown, result: unknown): void {
    send({ jsonrpc: JSONRPC, id, result });
  }

  function sendError(id: unknown, code: number, message: string): void {
    send({ jsonrpc: JSONRPC, id, error: { code, message } });
  }

  function sendStubToolResult(id: unknown): void {
    sendResult(id, {
      content: [{ type: "text", text: LIVE_SERVER_MESSAGE }],
      isError: true,
    });
  }

  return function handleMessage(msg: object): void {
    const id = "id" in msg ? msg.id : undefined;
    const method = "method" in msg ? msg.method : undefined;
    const params = "params" in msg ? msg.params : undefined;
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
        const toolName =
          typeof params === "object" && params !== null && "name" in params ? params.name : undefined;
        if (TOOLS.some((tool) => tool.name === toolName)) {
          return sendStubToolResult(id);
        }
        return sendError(id, -32601, `Unknown tool: ${String(toolName)}`);
      }

      case "ping":
        return sendResult(id, {});

      default:
        return sendError(id, -32601, `Method not found: ${String(method)}`);
    }
  };
}

export function processLine(line: string, handleMessage: (msg: object) => void): void {
  if (line.length > MAX_LINE_LENGTH) {
    return;
  }

  try {
    const msg: unknown = JSON.parse(line);
    if (typeof msg === "object" && msg !== null && !Array.isArray(msg)) {
      handleMessage(msg);
    }
  } catch {}
}

type ServerStreams = {
  readonly input?: NodeJS.ReadableStream;
  readonly output?: { write: (line: string) => unknown };
};

export function startServer({ input = process.stdin, output = process.stdout }: ServerStreams = {}): Interface {
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
