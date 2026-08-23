import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function json(path) {
  return JSON.parse(await readFile(new URL(path, root), "utf8"));
}

test("keeps package and plugin positioning aligned", async () => {
  const [
    packageJson,
    codex,
    claude,
    marketplace,
    openclaw,
    context7,
    registry,
    metadata,
    docker,
    skill,
  ] = await Promise.all([
    json("package.json"),
    json(".codex-plugin/plugin.json"),
    json(".claude-plugin/plugin.json"),
    json(".claude-plugin/marketplace.json"),
    json("openclaw.plugin.json"),
    json("context7.json"),
    json("registry.json"),
    json("skills/x-twitter-scraper/metadata.json"),
    readFile(
      new URL("docker-mcp-registry/xquik-remote/server.yaml", root),
      "utf8",
    ),
    readFile(new URL("skills/x-twitter-scraper/SKILL.md", root), "utf8"),
  ]);
  const descriptions = [
    packageJson.description,
    codex.description,
    claude.description,
    marketplace.metadata.description,
    marketplace.plugins[0].description,
    openclaw.description,
    context7.description,
    registry.items[0].description,
    metadata.abstract,
    docker,
    skill.split("---", 3)[1],
  ];

  assert.equal(descriptions.length, 11);
  for (const description of descriptions) {
    assert.match(description, /X \(Twitter\) Scraper API/u);
    assert.match(description, /X API Alternative/u);
    assert.match(description, /do not need an official X developer account/u);
    assert.match(description, /do not need to connect or use an X account/u);
  }
  for (const description of descriptions.slice(0, -1)) {
    assert.match(description, /Not affiliated with X Corp\./u);
  }
});

test("keeps the short MCP registry description current", async () => {
  const server = await json("server.json");

  assert.ok(server.description.length <= 100);
  assert.match(server.description, /128 REST operations/u);
  assert.match(server.description, /120 MCP routes/u);
  assert.match(server.description, /119 JSON\/text ops/u);
  assert.match(server.description, /official X developer account or X account/u);
});
