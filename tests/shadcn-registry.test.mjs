// SPDX-FileCopyrightText: 2026 Xquik Contributors
// SPDX-License-Identifier: MIT

import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const skillRoot = join(root, "skills", "x-twitter-scraper");
const registry = JSON.parse(readFileSync(join(root, "registry.json"), "utf8"));
const [item] = registry.items;

function collectFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? collectFiles(path) : [path];
  });
}

test("publishes the complete portable Skill tree", () => {
  const expectedPaths = collectFiles(skillRoot)
    .map((path) => relative(root, path))
    .sort();
  const publishedPaths = item.files.map(({ path }) => path).sort();

  assert.equal(registry.$schema, "https://ui.shadcn.com/schema/registry.json");
  assert.equal(registry.name, "xquik");
  assert.equal(registry.homepage, "https://docs.xquik.com");
  assert.equal(registry.items.length, 1);
  assert.equal(item.name, "x-twitter-scraper");
  assert.equal(item.type, "registry:item");
  assert.deepEqual(publishedPaths, expectedPaths);
  assert.equal(new Set(publishedPaths).size, publishedPaths.length);
});

test("publishes the MIT license with the portable Skill", () => {
  const license = readFileSync(join(skillRoot, "LICENSE"), "utf8");

  assert.match(license, /^MIT License$/m);
  assert.match(license, /Copyright \(c\) 2026 Xquik/);
});

test("installs only inside the project-local Skill directory", () => {
  for (const file of item.files) {
    const relativePath = file.path.replace("skills/x-twitter-scraper/", "");

    assert.equal(file.type, "registry:file");
    assert.equal(
      file.target,
      `~/.agents/skills/x-twitter-scraper/${relativePath}`,
    );
    assert.equal("content" in file, false);
    assert.equal(file.path.includes(".."), false);
    assert.equal(file.target.includes(".env"), false);
  }
});

test("documents the exact GitHub registry install command", () => {
  const readme = readFileSync(join(root, "README.md"), "utf8");

  assert.match(
    readme,
    /bunx shadcn@4\.18\.0 add Xquik-dev\/x-twitter-scraper\/x-twitter-scraper/,
  );
  assert.match(
    readme,
    /bunx shadcn@4\.18\.0 view Xquik-dev\/x-twitter-scraper\/x-twitter-scraper/,
  );
});
