#!/usr/bin/env node

// Pre-publish / pre-commit guard: fails if any known version surface
// disagrees with package.json. Registry metadata caches from these files, so
// drift across surfaces ships an inconsistent release. See Xquik-dev/xquik#2024.

import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { collectFrontmatterDrifts } from "./release-guard/frontmatter.mjs";
import { contentChecks } from "./release-guard/content-policy.mjs";
import {
  jsonFieldExpectations,
  manifestReferences,
  markdownRoots,
  skillFrontmatterExpectations,
  taskGuideFrontmatterExpectations,
  versionSurfaces,
} from "./release-guard/policy.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const expected = readJson("package.json").version;
const taskGuidePaths = readdirSync(join(root, "task-guides"))
  .filter((fileName) => fileName.endsWith(".md"))
  .map((fileName) => `task-guides/${fileName}`);
const taskGuideNames = new Set(
  taskGuidePaths.map((path) => path.slice("task-guides/".length, -3)),
);
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

function readText(path) {
  return readFileSync(join(root, path), "utf8");
}

function readJson(path) {
  return JSON.parse(readText(path));
}

function asArray(value) {
  return Array.isArray(value) ? value : [value];
}

function collectVersionDrifts() {
  const drifts = [];
  for (const surface of versionSurfaces) {
    const raw = readText(surface.path);
    for (const version of asArray(surface.get(raw))) {
      if (version !== expected) {
        drifts.push(
          `  ${surface.path}: ${version ?? "<missing>"} (expected ${expected})`,
        );
      }
    }
  }
  return drifts;
}

function collectContentDrifts() {
  const drifts = [];
  for (const check of contentChecks) {
    const raw = readText(check.path);
    drifts.push(...checkRequiredContent(check, raw));
    drifts.push(...checkForbiddenContent(check, raw));
  }
  return drifts;
}

function checkRequiredContent(check, raw) {
  const drifts = [];
  for (const required of check.required) {
    if (!raw.includes(required)) {
      drifts.push(`  ${check.path}: missing "${required}"`);
    }
  }
  return drifts;
}

function checkForbiddenContent(check, raw) {
  const drifts = [];
  for (const forbidden of check.forbidden) {
    const isMatch =
      typeof forbidden === "string"
        ? raw.includes(forbidden)
        : forbidden.pattern.test(raw);
    if (isMatch) {
      const label =
        typeof forbidden === "string" ? `"${forbidden}"` : forbidden.label;
      drifts.push(`  ${check.path}: stale ${label}`);
    }
  }
  return drifts;
}

function collectSkillMetadataDrifts() {
  const primarySkillPath = "skills/x-twitter-scraper/SKILL.md";
  const portableSkillPaths = readdirSync(join(root, "skills"))
    .filter((dir) => dir !== "x-twitter-scraper")
    .map((dir) => `skills/${dir}/SKILL.md`);
  return [
    ...collectFrontmatterPolicyDrifts(
      [primarySkillPath],
      skillFrontmatterExpectations,
    ),
    ...collectFrontmatterPolicyDrifts(portableSkillPaths, {}),
  ];
}

function collectTaskGuideMetadataDrifts() {
  return collectFrontmatterPolicyDrifts(
    taskGuidePaths,
    withPackageVersion(taskGuideFrontmatterExpectations),
  );
}

function collectFrontmatterPolicyDrifts(paths, expectations) {
  const drifts = [];
  for (const path of paths) {
    drifts.push(...collectFrontmatterDrifts(path, readText(path), expectations));
  }
  return drifts;
}

function withPackageVersion(expectations) {
  return {
    ...expectations,
    scalars: {
      ...expectations.scalars,
      "metadata.version": expected,
    },
  };
}

function collectTaskGuideUsageLanguageDrifts() {
  const drifts = [];
  for (const path of taskGuidePaths) {
    const raw = readText(path);
    if (raw.includes("| Free") || raw.includes("free read-only")) {
      drifts.push(`  ${path}: use "Included" instead of pricing-style "Free"`);
    }
    if (raw.includes("sibling skills") || raw.includes("` skill")) {
      drifts.push(`  ${path}: task guides must not be labeled skills`);
    }
  }
  return drifts;
}

function collectSkillsShGroupingDrifts() {
  const drifts = [];
  const skillsSh = readJson("skills.sh.json");
  const groupedSkills = new Set();
  for (const group of skillsSh.groupings ?? []) {
    for (const skill of group.skills ?? []) {
      groupedSkills.add(skill);
      const hasPrimarySkill = skill === "x-twitter-scraper";
      const hasTaskGuide = taskGuideNames.has(skill);
      if (!hasPrimarySkill && !hasTaskGuide) {
        drifts.push(`  skills.sh.json: grouped skill "${skill}" has no guide`);
      }
    }
  }
  for (const skill of taskGuideNames) {
    if (!groupedSkills.has(skill)) {
      drifts.push(`  skills.sh.json: missing task guide "${skill}"`);
    }
  }
  return drifts;
}

function collectMarkdownLinkDrifts() {
  const drifts = [];
  for (const path of collectMarkdownPaths()) {
    const raw = readText(path);
    for (const target of extractMarkdownLinks(raw)) {
      const cleanTarget = target.split("#", 1)[0];
      if (cleanTarget === "" || isExternalLink(cleanTarget)) {
        continue;
      }
      const resolved = join(root, dirname(path), cleanTarget);
      if (!existsSync(resolved)) {
        drifts.push(`  ${path}: broken markdown link "${target}"`);
      }
    }
  }
  return drifts;
}

function collectManifestReferenceDrifts() {
  const drifts = [];
  for (const [path, selector] of manifestReferences) {
    const manifest = readJson(path);
    for (const target of asArray(readSelector(manifest, selector))) {
      if (typeof target !== "string" || !target.startsWith("./")) {
        continue;
      }
      const resolved = join(root, target);
      if (!existsSync(resolved)) {
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

function collectPackageFileDrifts() {
  const drifts = [];
  const packageJson = readJson("package.json");
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
    "scripts/release-guard/content-policy.mjs",
    "scripts/release-guard/frontmatter.mjs",
    "scripts/release-guard/policy.mjs",
    "skills.sh.json",
    "start.sh",
    "stub-server.mjs",
  ];
  const packageFiles = new Set(collectPackageFiles(packageJson.files ?? []));
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

function collectPackageFiles(patterns) {
  const files = new Set(["package.json"]);
  for (const pattern of patterns) {
    if (pattern.startsWith("!")) {
      continue;
    }
    const resolved = join(root, pattern);
    if (!existsSync(resolved)) {
      continue;
    }
    for (const path of collectFilesBelow(pattern)) {
      files.add(path);
    }
  }
  return files;
}

function collectFilesBelow(path) {
  const resolved = join(root, path);
  const stats = statSync(resolved);
  if (stats.isFile()) {
    return [path];
  }
  if (!stats.isDirectory()) {
    return [];
  }
  return readdirSync(resolved, { withFileTypes: true }).flatMap((entry) => {
    const childPath = `${path}/${entry.name}`;
    return entry.isDirectory() ? collectFilesBelow(childPath) : [childPath];
  });
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
  const drifts = [];
  const paths = new Set([
    ...publicContractFiles,
    ...publicContractRoots.flatMap((path) => collectFilesBelow(path)),
  ]);
  for (const path of paths) {
    if (!/\.(?:json|md|mjs|ya?ml)$/u.test(path)) continue;
    const raw = readText(path);
    for (const [label, pattern] of stalePublicContractPatterns) {
      if (pattern.test(raw)) {
        drifts.push(`  ${path}: stale ${label}`);
      }
    }
  }
  return drifts;
}

function readSelector(object, selector) {
  return selector
    .split(".")
    .reduce((value, key) => value?.[selectorKey(key)], object);
}

function selectorKey(key) {
  const index = Number(key);
  return Number.isNaN(index) ? key : index;
}

function formatValue(value) {
  return value === undefined ? "<missing>" : JSON.stringify(value);
}

function collectMarkdownPaths() {
  return [
    "README.md",
    "CODE_OF_CONDUCT.md",
    ...markdownRoots.flatMap((path) => collectMarkdownPathsBelow(path)),
  ];
}

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
  return [...raw.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map((match) => match[1]);
}

function isExternalLink(target) {
  return /^[a-z][a-z0-9+.-]*:/i.test(target);
}

const failures = [
  ...collectVersionDrifts(),
  ...collectContentDrifts(),
  ...collectSkillMetadataDrifts(),
  ...collectTaskGuideMetadataDrifts(),
  ...collectTaskGuideUsageLanguageDrifts(),
  ...collectSkillsShGroupingDrifts(),
  ...collectMarkdownLinkDrifts(),
  ...collectManifestReferenceDrifts(),
  ...collectJsonFieldDrifts(),
  ...collectPackageFileDrifts(),
  ...collectNestedReferenceDrifts(),
  ...collectPublicContractDrifts(),
];

function reportFailures() {
  process.stderr.write(
    `Release guard failed (package.json = ${expected}):\n${failures.join("\n")}\n`,
  );
  process.exit(1);
}

if (failures.length > 0) {
  reportFailures();
}

process.stdout.write(`All surfaces at ${expected}\n`);
