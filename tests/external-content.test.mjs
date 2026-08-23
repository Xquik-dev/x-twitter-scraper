import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import { extname, join, relative } from "node:path";
import test from "node:test";

const root = new URL("../", import.meta.url);
const rootPath = decodeURIComponent(root.pathname).replace(/\/$/u, "");
const ignoredDirectories = new Set([
  ".git",
  "_artifacts",
  "coverage",
  "node_modules",
]);
const scannedExtensions = new Set([".json", ".md", ".yaml", ".yml"]);
const blockedMarkdownTerms = [
  ["pub", "lic"].join(""),
  ["app", "roved"].join(""),
];
const secretPatterns = [
  /\bxq_(?!replace_me\b)[A-Za-z0-9_-]{12,}\b/u,
  /\bsk-[A-Za-z0-9]{16,}\b/u,
  /\bgh[pousr]_[A-Za-z0-9]{20,}\b/u,
  /\bAKIA[A-Z0-9]{16}\b/u,
  /-----BEGIN (?:RSA |OPENSSH |EC )?PRIVATE KEY-----/u,
];
const internalPathPatterns = [
  /\/Users\/[A-Za-z0-9._-]+\//u,
  /\.codex\/attachments\//u,
  /goal-objective\.md/u,
  /pasted-text\.txt/u,
];

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (ignoredDirectories.has(entry.name)) continue;
      files.push(...(await collectFiles(join(directory, entry.name))));
      continue;
    }
    if (entry.isFile() && scannedExtensions.has(extname(entry.name))) {
      files.push(join(directory, entry.name));
    }
  }
  return files;
}

test("keeps external content clear of secrets and internal paths", async () => {
  const files = await collectFiles(rootPath);
  const findings = [];

  assert.ok(files.length > 100);
  for (const file of files) {
    const source = await readFile(file, "utf8");
    const path = relative(rootPath, file);
    for (const pattern of [...secretPatterns, ...internalPathPatterns]) {
      if (pattern.test(source)) findings.push(`${path}: ${pattern.source}`);
    }
    if (extname(file) === ".md") {
      for (const term of blockedMarkdownTerms) {
        if (new RegExp(`\\b${term}\\b`, "iu").test(source)) {
          findings.push(`${path}: blocked Markdown term`);
        }
      }
    }
  }

  assert.deepEqual(findings, []);
});
