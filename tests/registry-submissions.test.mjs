// SPDX-FileCopyrightText: 2026 Xquik Contributors
// SPDX-License-Identifier: MIT

import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function read(path) {
  return readFile(new URL(path, root), "utf8");
}

test("records at least 500 skill repos without Xquik and 100 or more stars", async () => {
  const repos = JSON.parse(
    await read("skill-registry-submissions/data/without-xquik.json"),
  );
  assert.ok(repos.length >= 500, `expected >= 500 repos, got ${repos.length}`);
  for (const repo of repos) {
    assert.ok(repo.stars >= 100, `${repo.fullName} has ${repo.stars} stars`);
    assert.doesNotMatch(repo.fullName, /xquik/i);
    assert.doesNotMatch(repo.description || "", /xquik/i);
  }
});

test("keeps Docker remote MCP files in the official remote-server shape", async () => {
  const tools = (await read("docker-mcp-registry/xquik-remote/tools.json")).trim();
  const server = await read("docker-mcp-registry/xquik-remote/server.yaml");
  const readme = await read("docker-mcp-registry/xquik-remote/readme.md");
  assert.equal(tools, "[]");
  assert.match(server, /^name: xquik-remote$/m);
  assert.match(server, /^type: remote$/m);
  assert.match(server, /transport_type: streamable-http/);
  assert.match(server, /url: https:\/\/xquik.com\/mcp/);
  assert.match(server, /provider: xquik-remote/);
  assert.doesNotMatch(server, /^source:/m);
  assert.match(readme, /https:\/\/docs\.xquik\.com\/mcp\/overview/);
});

test("skips third-party targets that already have a kriptoburak PR", async () => {
  const targets = JSON.parse(
    await read("skill-registry-submissions/data/targets.json"),
  );
  assert.equal(targets.prAuthor, "kriptoburak");
  assert.ok(targets.forbiddenAuthors.includes("Xquik-dev"));
  assert.match(targets.rule, /already has an open PR/);
  assert.ok(targets.targets.length >= 5);
  for (const target of targets.targets) {
    assert.equal(target.eligible, false, `${target.fullName} must not get a duplicate PR`);
    assert.ok(
      target.existing?.open?.length || target.existing?.merged?.length,
      `${target.fullName} must record an existing PR`,
    );
  }
});

test("ships a catalog SKILL.md with safety gates", async () => {
  const skill = await read(
    "skill-registry-submissions/packages/x-twitter-scraper/SKILL.md",
  );
  assert.match(skill, /^name: x-twitter-scraper$/m);
  assert.match(skill, /XQUIK_API_KEY/);
  assert.match(skill, /Never request X passwords/);
  assert.match(
    skill,
    /npx skills@1\.5\.3 add Xquik-dev\/x-twitter-scraper/,
  );
});
