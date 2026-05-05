#!/usr/bin/env node

// Pre-publish / pre-commit guard: fails if any known version surface
// disagrees with package.json. Registries (npm, Glama, ClawHub, Smithery,
// Official MCP Registry) cache from these files, so drift across surfaces
// ships an inconsistent release. See Xquik-dev/xquik#2024.

import { readFileSync } from "node:fs";
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
      "113 REST API endpoints",
      "| Follow check, article | 5 | $0.00075 |",
      "Works with all 113 endpoints",
    ],
    forbidden: [
      "112 REST API endpoints",
      "| Follow check, article | 7 | $0.00105 |",
    ],
  },
  {
    path: "skills/x-twitter-scraper/SKILL.md",
    required: ["113 REST API endpoints", "Read operations: 1-5 credits"],
    forbidden: ["112 REST API endpoints", "Read operations: 1-7 credits"],
  },
  {
    path: "skills/x-twitter-scraper/references/api-endpoints.md",
    required: ["GET /credits/topup/status"],
    forbidden: [],
  },
  {
    path: ".claude-plugin/plugin.json",
    required: ["113 endpoints"],
    forbidden: ["112 endpoints"],
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
      "Works with all 113 endpoints",
    ],
    forbidden: ["Read operations - 7 credits ($0.00105)"],
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
    required: ["113 REST endpoints", '"name": "x-api-key"'],
    forbidden: [
      "112 REST endpoints",
      '"name": "Authorization"',
      "Bearer {XQUIK_API_KEY}",
    ],
  },
  {
    path: "stub-server.mjs",
    required: [
      "113 endpoints",
      "113 REST endpoints",
      "Execute confirmed Xquik API calls",
      '"x-api-key": "<YOUR_API_KEY>"',
    ],
    forbidden: [
      "112 endpoints",
      "112 REST endpoints",
      "Execute authenticated",
      "Call `POST /api/v1/subscribe`",
      '"Authorization": "Bearer <YOUR_API_KEY>"',
    ],
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

if (drifts.length > 0) {
  process.stderr.write(
    `Version drift detected (package.json = ${expected}):\n${drifts.join("\n")}\n`,
  );
  process.exit(1);
}

process.stdout.write(`All surfaces at ${expected}\n`);
