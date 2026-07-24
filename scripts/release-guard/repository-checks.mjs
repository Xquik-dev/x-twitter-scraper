// SPDX-FileCopyrightText: 2026 Xquik Contributors
// SPDX-License-Identifier: MIT

import { existsSync, readdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";

import {
  asArray,
  collectFilesBelow,
  formatValue,
  readJson,
  readSelector,
  readText,
  root,
} from "./context.mjs";
import {
  jsonFieldExpectations,
  manifestReferences,
  markdownRoots,
} from "./policy.mjs";

const publicContractRoots = [
  ".claude-plugin",
  ".codex-plugin",
  "docker-mcp-registry",
  "mcpize",
  "skills",
  "task-guides",
];

const publicContractFiles = [
  "README.md",
  "openclaw.plugin.json",
  "package.json",
  "server.json",
  "stub-server.mjs",
];

const stalePublicContractPatterns = [
  ["126-operation REST count", /\b126 REST(?: API)? operations\b/u],
  ["ambiguous 118-operation MCP count", /\b118 (?:MCP )?operations\b/u],
  ["118-of-126 MCP count", /\b118 of 126\b/u],
  ["MCP v2.5.4", /\bMCP v2\.5\.4\b/u],
  ["60/1s read limit", /\bRead(?::| \() 60\/1s\b/u],
  ["60-per-1s read limit", /\b60 requests per (?:1s|second)\b/iu],
  ["30/60s write limit", /\bWrite(?::| \() 30\/60s\b/u],
  ["30-per-60s write limit", /\b30 requests per (?:60s|60 seconds)\b/iu],
  ["15/60s delete limit", /\bDelete(?::| \() 15\/60s\b/u],
  ["15-per-60s delete limit", /\b15 requests per (?:60s|60 seconds)\b/iu],
  ["volatile agent count", /\b40\+ (?:AI )?(?:coding )?agents\b/iu],
  ["stub in-memory catalog claim", /in-memory catalog of \d+ MCP operations/iu],
];

function collectMarkdownPathsBelow(path) {
  const paths = [];
  for (const entry of readdirSync(join(root, path), { withFileTypes: true })) {
    const childPath = `${path}/${entry.name}`;
    if (entry.isDirectory()) {
      paths.push(...collectMarkdownPathsBelow(childPath));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      paths.push(childPath);
    }
  }
  return paths;
}

function extractMarkdownLinks(raw) {
  return [...raw.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map(
    (match) => match[1],
  );
}

function collectMarkdownLinkDrifts() {
  const paths = [
    "README.md",
    "CODE_OF_CONDUCT.md",
    ...markdownRoots.flatMap(collectMarkdownPathsBelow),
  ];
  const drifts = [];
  for (const path of paths) {
    for (const target of extractMarkdownLinks(readText(path))) {
      const cleanTarget = target.split("#", 1)[0];
      if (
        cleanTarget !== "" &&
        !/^[a-z][a-z0-9+.-]*:/i.test(cleanTarget) &&
        !existsSync(join(root, dirname(path), cleanTarget))
      ) {
        drifts.push(`  ${path}: broken markdown link "${target}"`);
      }
    }
  }
  return drifts;
}

function collectManifestReferenceDrifts() {
  const drifts = [];
  for (const [path, selector] of manifestReferences) {
    for (const target of asArray(readSelector(readJson(path), selector))) {
      if (
        typeof target === "string" &&
        target.startsWith("./") &&
        !existsSync(join(root, target))
      ) {
        drifts.push(
          `  ${path}: missing manifest reference "${selector}" -> ${target}`,
        );
      }
    }
  }
  return drifts;
}

function collectJsonFieldDrifts() {
  const drifts = [];
  for (const expectation of jsonFieldExpectations) {
    const data = readJson(expectation.path);
    for (const [selector, expectedValue] of Object.entries(
      expectation.fields,
    )) {
      const actualValue = readSelector(data, selector);
      if (actualValue !== expectedValue) {
        drifts.push(
          `  ${expectation.path}: ${selector} = ${formatValue(actualValue)} (expected ${formatValue(expectedValue)})`,
        );
      }
    }
  }
  return drifts;
}

function collectPackageFiles(patterns) {
  const files = new Set(["package.json"]);
  for (const pattern of patterns) {
    if (!pattern.startsWith("!") && existsSync(join(root, pattern))) {
      for (const path of collectFilesBelow(pattern)) {
        files.add(path);
      }
    }
  }
  return files;
}

function collectPackageFileDrifts() {
  const packageJson = readJson("package.json");
  const drifts = [];
  for (const command of Object.values(packageJson.scripts ?? {})) {
    const scriptPath = command.match(/\bscripts\/[^\s]+/)?.[0];
    if (scriptPath && !existsSync(join(root, scriptPath))) {
      drifts.push(`  package.json: script target missing "${scriptPath}"`);
    }
  }
  const requiredPackageFiles = [
    ".mcp.json",
    ".claude-plugin/plugin.json",
    ".codex-plugin/plugin.json",
    "commands/post.md",
    "task-guides/search-tweets.md",
    "server.json",
    "scripts/check-versions.mjs",
    "scripts/release-guard/context.mjs",
    "scripts/release-guard/content-policy.mjs",
    "scripts/release-guard/frontmatter.mjs",
    "scripts/release-guard/policy-checks.mjs",
    "scripts/release-guard/policy.mjs",
    "scripts/release-guard/repository-checks.mjs",
    "skills.sh.json",
    "start.sh",
    "stub-server.mjs",
  ];
  const packageFiles = collectPackageFiles(packageJson.files ?? []);
  for (const path of requiredPackageFiles) {
    if (!packageFiles.has(path)) {
      drifts.push(`  package.json files: missing "${path}"`);
    }
  }
  if ((statSync(join(root, "start.sh")).mode & 0o111) === 0) {
    drifts.push("  start.sh: must be executable");
  }
  return drifts;
}

function collectNestedReferenceDrifts() {
  const drifts = [];
  for (const skill of readdirSync(join(root, "skills"))) {
    const referencesPath = `skills/${skill}/references`;
    if (!existsSync(join(root, referencesPath))) {
      continue;
    }
    for (const entry of readdirSync(join(root, referencesPath), {
      withFileTypes: true,
    })) {
      if (entry.isDirectory()) {
        drifts.push(
          `  ${referencesPath}/${entry.name}: nested reference directories are not allowed`,
        );
      }
    }
  }
  return drifts;
}

function collectPublicContractDrifts() {
  const paths = new Set([
    ...publicContractFiles,
    ...publicContractRoots.flatMap(collectFilesBelow),
  ]);
  const drifts = [];
  for (const path of paths) {
    if (!/\.(?:json|md|mjs|ya?ml)$/u.test(path)) {
      continue;
    }
    const raw = readText(path);
    for (const [label, pattern] of stalePublicContractPatterns) {
      if (pattern.test(raw)) {
        drifts.push(`  ${path}: stale ${label}`);
      }
    }
  }
  return drifts;
}

function collectRegistryMetadataDrifts() {
  const description = readJson("server.json").description;
  if (typeof description !== "string") {
    return ["  server.json: description must be a string"];
  }
  if (description.length > 100) {
    return [
      `  server.json: description has ${description.length} characters (maximum 100)`,
    ];
  }
  return [];
}

export function collectRepositoryDrifts() {
  return [
    ...collectMarkdownLinkDrifts(),
    ...collectManifestReferenceDrifts(),
    ...collectJsonFieldDrifts(),
    ...collectPackageFileDrifts(),
    ...collectNestedReferenceDrifts(),
    ...collectPublicContractDrifts(),
    ...collectRegistryMetadataDrifts(),
  ];
}
