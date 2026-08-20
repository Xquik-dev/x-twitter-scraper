// SPDX-FileCopyrightText: 2026 Xquik Contributors
// SPDX-License-Identifier: MIT

import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const skillsRoot = join(root, "skills");

function readFrontmatterScalar(source, key) {
  const frontmatter = source.match(/^---\n([\s\S]*?)\n---\n/)?.[1];
  assert.ok(frontmatter, "Skill frontmatter is missing");

  const value = frontmatter.match(new RegExp(`^${key}:\\s*(.+)$`, "m"))?.[1];
  assert.ok(value, `Skill frontmatter ${key} is missing`);
  return value.replace(/^(["'])(.*)\1$/, "$2");
}

function discoverSkills(directory) {
  return readdirSync(directory, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() &&
        existsSync(join(directory, entry.name, "SKILL.md")),
    )
    .map((entry) => {
      const source = readFileSync(
        join(directory, entry.name, "SKILL.md"),
        "utf8",
      );
      return {
        directory: entry.name,
        description: readFrontmatterScalar(source, "description"),
        name: readFrontmatterScalar(source, "name"),
      };
    })
    .sort((left, right) => left.name.localeCompare(right.name));
}

test("matches Gemini CLI's one-level Skill discovery contract", () => {
  const skills = discoverSkills(skillsRoot);

  assert.deepEqual(
    skills.map(({ name }) => name),
    ["x-twitter-scraper", "xquik-social-research"],
  );
  assert.equal(new Set(skills.map(({ name }) => name)).size, skills.length);

  for (const skill of skills) {
    assert.equal(skill.directory, skill.name);
    assert.ok(skill.description.length > 40);
  }
});

test("documents a consent-preserving native Gemini CLI install", () => {
  const readme = readFileSync(join(root, "README.md"), "utf8");
  const section = readme.match(/### Gemini CLI\n\n([\s\S]*?)\n### Manual Installation/)?.[1];

  assert.ok(section, "Gemini CLI installation section is missing");
  assert.match(
    section,
    /gemini skills install https:\/\/github\.com\/Xquik-dev\/x-twitter-scraper\.git \\\n  --path skills/,
  );
  assert.match(section, /gemini skills list/);
  assert.match(section, /x-twitter-scraper/);
  assert.match(section, /xquik-social-research/);
  assert.doesNotMatch(section, /--consent/);
});
