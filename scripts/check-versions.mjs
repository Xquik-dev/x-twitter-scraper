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

if (drifts.length > 0) {
  process.stderr.write(
    `Version drift detected (package.json = ${expected}):\n${drifts.join("\n")}\n`,
  );
  process.exit(1);
}

process.stdout.write(`All surfaces at ${expected}\n`);
