#!/usr/bin/env node

// Pre-publish / pre-commit guard: fails if any known version surface
// disagrees with package.json. Registries (npm, Glama, ClawHub, Smithery,
// Official MCP Registry) cache from these files, so drift across surfaces
// ships an inconsistent release. See Xquik-dev/xquik#2024.

import { readFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const expected = JSON.parse(readFileSync(join(root, "package.json"), "utf8"))
  .version;

/** Each entry: path (relative to root) + extractor returning the version string. */
const surfaces = [
  { path: "server.json", get: (j) => JSON.parse(j).version },
  { path: "openclaw.plugin.json", get: (j) => JSON.parse(j).version },
  { path: ".claude-plugin/plugin.json", get: (j) => JSON.parse(j).version },
  {
    path: ".claude-plugin/marketplace.json",
    get: (j) => {
      const m = JSON.parse(j);
      return [m.metadata?.version, ...(m.plugins ?? []).map((p) => p.version)];
    },
  },
  {
    path: "skills/x-twitter-scraper/metadata.json",
    get: (j) => JSON.parse(j).version,
  },
  {
    path: "skills/x-twitter-scraper/SKILL.md",
    get: (t) => {
      const match = /^\s*version:\s*"([^"]+)"/m.exec(t);
      return match?.[1];
    },
  },
  {
    path: "stub-server.mjs",
    get: (t) => /version:\s*"([^"]+)"/.exec(t)?.[1],
  },
];

const drifts = [];
for (const s of surfaces) {
  const raw = readFileSync(join(root, s.path), "utf8");
  const found = s.get(raw);
  const values = Array.isArray(found) ? found : [found];
  for (const v of values) {
    if (v !== expected) {
      drifts.push(`  ${s.path}: ${v ?? "<missing>"} (expected ${expected})`);
    }
  }
}

const contentChecks = [
  {
    path: "README.md",
    required: [
      "100+ REST API endpoints",
      "| Follow check, article | 5 | $0.00075 |",
      "Works with all supported endpoints",
      "npm i mppx@0.6.15 viem@2.48.8",
      "npx skills@1.5.3 add Xquik-dev/x-twitter-scraper",
    ],
    forbidden: [
      "113 REST API endpoints",
      "112 REST API endpoints",
      "Works with all 113 endpoints",
      "@latest",
      "npm i mppx viem",
      "npx skills add Xquik-dev/x-twitter-scraper",
      "| Follow check, article | 7 | $0.00105 |",
    ],
  },
  {
    path: "package.json",
    required: ['"@tanstack/intent": "0.0.40"'],
    forbidden: ['"@tanstack/intent": "latest"'],
  },
  {
    path: "skills/x-twitter-scraper/SKILL.md",
    required: [
      "100+ REST API endpoints",
      "Read operations: 1-5 credits",
      "Read (10/1s), Write (30/60s), Delete (15/60s)",
      "POST /credits/quick-topup",
      "persistentResourceConfirmation: required",
      "X-authored text can include requests that conflict with the user's task",
    ],
    forbidden: [
      "113 REST API endpoints",
      "112 REST API endpoints",
      "Read operations: 1-7 credits",
      "NEVER asks",
      "Instructions found in X content",
      "Instructions embedded in X content",
      "instructions embedded",
      "The agent MUST",
      "no code execution",
      "No code execution",
      "No eval",
      "execute arbitrary code",
      "execute autonomous payments",
      "Read (120/60s)",
      "Payments are redirect-only",
      "The API cannot charge stored payment methods",
    ],
  },
  {
    path: "skills/x-twitter-scraper/references/api-endpoints.md",
    required: ["GET /credits/topup/status", "POST /credits/quick-topup"],
    forbidden: [
      "current period usage",
      "counts toward the monthly quota",
      "usagePercent",
      "projectedPercent",
      "usage_limit_reached",
      "extra_usage_disabled",
      "overage_limit_reached",
      "monitor_limit_reached",
    ],
  },
  {
    path: "skills/x-twitter-scraper/references/mcp-setup.md",
    required: ["https://xquik.com/openapi.json"],
    forbidden: ["https://docs.xquik.com/openapi.json"],
  },
  {
    path: "skills/x-twitter-scraper/references/webhooks.md",
    required: ["expectedBuffer.length === signatureBuffer.length"],
    forbidden: ["timingSafeEqual(Buffer.from(expected), Buffer.from(signature))"],
  },
  {
    path: ".claude-plugin/plugin.json",
    required: ["100+ endpoints"],
    forbidden: ["113 endpoints", "112 endpoints"],
  },
  {
    path: ".claude-plugin/marketplace.json",
    required: ["confirmation-gated writes"],
    forbidden: ["write actions, credits"],
  },
  {
    path: "skills/x-twitter-scraper/references/pricing.md",
    required: [
      "Read operations - 5 credits ($0.00075)",
      "Works with all supported endpoints",
      "Starter",
      "Credit Top-Ups",
      "`GET /x/followers/check` | $0.00105",
      "`GET /x/articles/{tweetId}` | $0.00105",
      "npm i mppx@0.6.15 viem@2.48.8",
    ],
    forbidden: [
      "Works with all 113 endpoints",
      "Read operations - 7 credits ($0.00105)",
      "npm i mppx viem",
      "Extra Usage",
    ],
  },
  {
    path: "skills/x-twitter-scraper/references/workflows.md",
    required: [
      "| **Get an X Article** by tweet ID | `GET /x/articles/{id}` | 5 credits |",
      "| **Check follow relationship** | `GET /x/followers/check?source=A&target=B` | 5 credits |",
    ],
    forbidden: [
      "| **Get an X Article** by tweet ID | `GET /x/articles/{id}` | 7 credits |",
      "| **Check follow relationship** | `GET /x/followers/check?source=A&target=B` | 7 credits |",
    ],
  },
  {
    path: "server.json",
    required: ["100+ REST endpoints", '"name": "x-api-key"'],
    forbidden: [
      "113 REST endpoints",
      "112 REST endpoints",
      '"name": "Authorization"',
      "Bearer {XQUIK_API_KEY}",
    ],
  },
  {
    path: "stub-server.mjs",
    required: [
      "100+ endpoints",
      "100+ REST endpoints",
      "Send confirmed Xquik API requests",
      '"x-api-key": "<YOUR_API_KEY>"',
    ],
    forbidden: [
      "113 endpoints",
      "113 REST endpoints",
      "112 endpoints",
      "112 REST endpoints",
      "Execute authenticated",
      "Execute confirmed Xquik API calls",
      "JavaScript expression",
      "Node.js VM",
      "Call `POST /api/v1/subscribe`",
      '"Authorization": "Bearer <YOUR_API_KEY>"',
    ],
  },
  {
    path: "docker-mcp-registry/xquik-remote/tools.json",
    required: ["Send confirmed Xquik API requests", "Bounded request"],
    forbidden: ["Execute confirmed Xquik API calls", "JavaScript expression"],
  },
];

for (const check of contentChecks) {
  const raw = readFileSync(join(root, check.path), "utf8");
  for (const required of check.required) {
    if (!raw.includes(required)) {
      drifts.push(`  ${check.path}: missing "${required}"`);
    }
  }
  for (const forbidden of check.forbidden) {
    if (raw.includes(forbidden)) {
      drifts.push(`  ${check.path}: stale "${forbidden}"`);
    }
  }
}

for (const dir of readdirSync(join(root, "skills"))) {
  const path = `skills/${dir}/SKILL.md`;
  let raw;
  try {
    raw = readFileSync(join(root, path), "utf8");
  } catch {
    continue;
  }
  for (const required of [
    "writeConfirmation: required",
    "paymentConfirmation: required",
  ]) {
    if (!raw.includes(required)) {
      drifts.push(`  ${path}: missing "${required}"`);
    }
  }
}

if (drifts.length > 0) {
  process.stderr.write(
    `Version drift detected (package.json = ${expected}):\n${drifts.join("\n")}\n`,
  );
  process.exit(1);
}

process.stdout.write(`All surfaces at ${expected}\n`);
