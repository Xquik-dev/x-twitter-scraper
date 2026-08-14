#!/usr/bin/env node

// SPDX-FileCopyrightText: 2026 Xquik Contributors
// SPDX-License-Identifier: MIT

import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = join(here, "..", "data");
const jsonFields = [
  "createdAt",
  "defaultBranch",
  "description",
  "forksCount",
  "fullName",
  "homepage",
  "isArchived",
  "isFork",
  "language",
  "license",
  "name",
  "openIssuesCount",
  "owner",
  "pushedAt",
  "stargazersCount",
  "updatedAt",
  "url",
].join(",");

const firstPartyOwners = new Set([
  "anthropics",
  "vercel-labs",
  "google",
  "google-labs-code",
  "googleworkspace",
  "openai",
  "nvidia",
  "stripe",
  "cloudflare",
  "microsoft",
  "meta",
  "facebook",
  "hashicorp",
  "figma",
  "sentry",
  "expo",
  "huggingface",
  "larksuite",
  "posit-dev",
]);

const repoQueries = [
  { kind: "query", value: "skills", extra: ["--stars", ">=100", "--archived=false", "--limit", "1000", "--sort", "stars"] },
  { kind: "query", value: '"agent skills"', extra: ["--stars", ">=100", "--archived=false", "--limit", "200", "--sort", "stars"] },
  { kind: "query", value: '"claude skills"', extra: ["--stars", ">=100", "--archived=false", "--limit", "200", "--sort", "stars"] },
  { kind: "query", value: '"cursor skills"', extra: ["--stars", ">=100", "--archived=false", "--limit", "100", "--sort", "stars"] },
  { kind: "query", value: '"codex skills"', extra: ["--stars", ">=100", "--archived=false", "--limit", "100", "--sort", "stars"] },
  { kind: "query", value: "SKILL.md", extra: ["--stars", ">=100", "--archived=false", "--limit", "200", "--sort", "stars"] },
  { kind: "query", value: "awesome-claude-skills", extra: ["--stars", ">=100", "--archived=false", "--limit", "50"] },
  { kind: "query", value: "awesome-agent-skills", extra: ["--stars", ">=100", "--archived=false", "--limit", "50"] },
  { kind: "query", value: "openclaw skills", extra: ["--stars", ">=100", "--archived=false", "--limit", "100"] },
  { kind: "query", value: "antigravity skills", extra: ["--stars", ">=100", "--archived=false", "--limit", "50"] },
  { kind: "topic", value: "agent-skills", extra: ["--stars", ">=100", "--archived=false", "--limit", "200"] },
  { kind: "topic", value: "claude-skills", extra: ["--stars", ">=100", "--archived=false", "--limit", "200"] },
  { kind: "topic", value: "claude-code-skills", extra: ["--stars", ">=100", "--archived=false", "--limit", "100"] },
  { kind: "topic", value: "cursor-skills", extra: ["--stars", ">=100", "--archived=false", "--limit", "100"] },
  { kind: "topic", value: "codex-skills", extra: ["--stars", ">=100", "--archived=false", "--limit", "50"] },
  { kind: "topic", value: "opencode-skills", extra: ["--stars", ">=100", "--archived=false", "--limit", "50"] },
];

const codeQueries = ["xquik", "Xquik", "xquik.com", "Xquik-dev/x-twitter-scraper"];

function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function ghJson(args, retries = 6) {
  for (let attempt = 0; attempt < retries; attempt += 1) {
    try {
      const stdout = execFileSync("gh", args, {
        encoding: "utf8",
        maxBuffer: 32 * 1024 * 1024,
      });
      return JSON.parse(stdout || "[]");
    } catch (error) {
      const message = error.stderr?.toString?.() || error.message || "";
      if (!/429|rate limit|secondary rate/i.test(message) || attempt === retries - 1) {
        throw error;
      }
      const waitMs = 4000 * 2 ** attempt;
      process.stderr.write(`rate limited; waiting ${waitMs}ms\n`);
      sleep(waitMs);
    }
  }
  return [];
}

function blob(repo) {
  return `${repo.fullName} ${repo.description || ""} ${repo.homepage || ""}`.toLowerCase();
}

function isAgentSkillRepo(repo) {
  const text = blob(repo);
  const name = repo.name.toLowerCase();
  if (/life[- ]skills|soft[- ]skills|job[- ]skills|interview[- ]skills|resume[- ]skills/.test(text) && !/claude|agent skill|skill\.md/.test(text)) {
    return false;
  }
  if (/agent[- ]skills?|claude[- ]skills?|claude code|cursor skills?|codex skills?|opencode|antigravity|skill\.md|skills\.sh|openclaw|copilot skills?/.test(text)) {
    return true;
  }
  if (/\bskills?\b/.test(name) && /ai|agent|claude|cursor|codex|copilot|gemini|llm|anthropic/.test(text)) {
    return true;
  }
  if (/awesome-.*skill|skill-registry|skills-directory|skills-hub|skills-marketplace/.test(text)) {
    return true;
  }
  return false;
}

function classify(repo, xquikRepos) {
  const fullName = repo.fullName;
  const owner = repo.owner?.login || fullName.split("/")[0];
  const text = blob(repo);
  if (xquikRepos.has(fullName.toLowerCase()) || /xquik/.test(text) || owner.toLowerCase() === "xquik-dev") {
    return "already-has-xquik";
  }
  if (/skillspector|agentskills\/agentskills|vercel-labs\/skills$/.test(fullName.toLowerCase()) || /scanner|specification and documentation for agent skills/.test(text)) {
    return "tooling-or-spec";
  }
  if (firstPartyOwners.has(owner.toLowerCase())) {
    return "first-party-collection";
  }
  if (/awesome|directory|registry|marketplace|curated (list|collection)|index of|hub of/.test(text) || /^awesome-/.test(repo.name.toLowerCase())) {
    return "community-catalog";
  }
  if (/(collection|library|bundle|hub|pack) of/.test(text) || /skills-collection|claude-skills$|agent-skills$/.test(repo.name.toLowerCase())) {
    return "skill-collection";
  }
  return "single-skill-or-narrow-collection";
}

function ownerLogin(repo) {
  if (typeof repo.owner === "string") {
    return repo.owner;
  }
  return repo.owner?.login || repo.fullName.split("/")[0];
}

function collectRepos() {
  const byName = new Map();
  for (const query of repoQueries) {
    const args = ["search", "repos"];
    if (query.kind === "topic") {
      args.push("--topic", query.value);
    } else {
      args.push(query.value);
    }
    args.push(...query.extra, "--json", jsonFields);
    process.stderr.write(`search ${query.kind}=${query.value}\n`);
    const rows = ghJson(args);
    for (const repo of rows) {
      if (!repo?.fullName || repo.stargazersCount < 100 || repo.isFork) {
        continue;
      }
      const current = byName.get(repo.fullName);
      if (!current || current.stargazersCount < repo.stargazersCount) {
        byName.set(repo.fullName, {
          ...repo,
          owner: ownerLogin(repo),
        });
      }
    }
    sleep(1500);
  }
  return [...byName.values()].sort((a, b) => b.stargazersCount - a.stargazersCount);
}

function collectXquikRepos() {
  const repos = new Set();
  for (const query of codeQueries) {
    process.stderr.write(`code search ${query}\n`);
    const rows = ghJson([
      "search",
      "code",
      query,
      "--limit",
      "100",
      "--json",
      "repository,path",
    ]);
    for (const row of rows) {
      const name = row.repository?.nameWithOwner;
      if (name) {
        repos.add(name.toLowerCase());
      }
    }
    sleep(2000);
  }
  return repos;
}

function listingEntry(repo) {
  return `- **[Xquik-dev/x-twitter-scraper](https://github.com/Xquik-dev/x-twitter-scraper)** - Bounded X/Twitter data, MCP, and confirmed publishing for ${repo.fullName}.`;
}

const xquikRepos = collectXquikRepos();
const repos = collectRepos();
const agentRepos = repos.filter(isAgentSkillRepo);
const catalog = agentRepos.map((repo) => {
  const classification = classify(repo, xquikRepos);
  return {
    fullName: repo.fullName,
    url: repo.url,
    stars: repo.stargazersCount,
    description: repo.description || "",
    homepage: repo.homepage || "",
    license: repo.license?.key || repo.license || "",
    language: repo.language || "",
    defaultBranch: repo.defaultBranch || "main",
    owner: repo.owner,
    isArchived: Boolean(repo.isArchived),
    pushedAt: repo.pushedAt,
    classification,
    alreadyHasXquik: classification === "already-has-xquik",
    listingEntry: listingEntry(repo),
  };
});

const withoutXquik = catalog.filter((repo) => !repo.alreadyHasXquik);
const summary = {
  generatedAt: new Date().toISOString(),
  searchedRepoCount: repos.length,
  agentSkillRepoCount: catalog.length,
  withoutXquikCount: withoutXquik.length,
  alreadyHasXquikCount: catalog.length - withoutXquik.length,
  classifications: Object.fromEntries(
    [...new Set(catalog.map((repo) => repo.classification))]
      .sort()
      .map((name) => [name, catalog.filter((repo) => repo.classification === name).length]),
  ),
};

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "summary.json"), `${JSON.stringify(summary, null, 2)}\n`);
writeFileSync(join(outDir, "catalog.json"), `${JSON.stringify(catalog, null, 2)}\n`);
writeFileSync(
  join(outDir, "without-xquik.json"),
  `${JSON.stringify(withoutXquik, null, 2)}\n`,
);
writeFileSync(
  join(outDir, "xquik-code-hits.json"),
  `${JSON.stringify([...xquikRepos].sort(), null, 2)}\n`,
);

process.stdout.write(`${JSON.stringify(summary, null, 2)}\n`);
if (withoutXquik.length < 500) {
  process.stderr.write(
    `warning: only ${withoutXquik.length} agent-skill repos >=100 stars without Xquik\n`,
  );
  process.exitCode = 2;
}
