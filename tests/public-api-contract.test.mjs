// SPDX-FileCopyrightText: 2026 Xquik Contributors
// SPDX-License-Identifier: MIT

import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function read(path) {
  return readFile(new URL(path, root), "utf8");
}

const contract = Object.freeze({
  bundleVersion: "2.6.2",
  hostedMcpVersion: "2.6.0",
  eventCursor: "cursor",
  eventFilters: ["monitorId", "keywordMonitorId", "eventType"],
  webhookCreateFields: ["url", "eventTypes"],
  webhookSignatureHeaders: [
    "X-Xquik-Timestamp",
    "X-Xquik-Nonce",
    "X-Xquik-Signature",
  ],
  writeTweetFields: [
    "account",
    "text",
    "reply_to_tweet_id",
    "community_id",
    "is_note_tweet",
    "media",
  ],
  articleFields: [
    "article",
    "title",
    "previewText",
    "coverImageUrl",
    "bodyText",
    "contents",
    "createdAt",
    "likeCount",
    "replyCount",
    "quoteCount",
    "viewCount",
    "author",
  ],
  extractionFormats: ["csv", "json", "md", "md-document", "pdf", "txt", "xlsx"],
  radarSources: [
    "github",
    "google_trends",
    "hacker_news",
    "polymarket",
    "reddit",
    "trustmrr",
    "wikipedia",
  ],
});

test("separates the bundle version from hosted MCP", async () => {
  const packageJson = JSON.parse(await read("package.json"));
  const serverJson = JSON.parse(await read("server.json"));
  const readme = await read("README.md");
  const versionGuard = await read("scripts/check-versions.mjs");

  assert.equal(packageJson.version, contract.bundleVersion);
  assert.equal(serverJson.version, contract.hostedMcpVersion);
  assert.match(readme, /bundle is v2\.6\.2/);
  assert.match(readme, /Hosted MCP v2\.6\.0/);
  assert.match(versionGuard, /All bundle surfaces at/);
  assert.match(versionGuard, /hosted MCP at/);
});

test("keeps package-only releases from republishing hosted MCP", async () => {
  const workflow = await read(".github/workflows/publish-mcp-registry.yml");
  const contributing = await read(".github/CONTRIBUTING.md");

  assert.match(
    workflow,
    /registry\.modelcontextprotocol\.io\/v0\.1\/servers\/\$\{server_name\}\/versions\/\$\{server_version\}/,
  );
  assert.match(workflow, /echo "published=true" >> "\$GITHUB_OUTPUT"/);
  assert.equal(
    workflow.match(/if: steps\.registry\.outputs\.published != 'true'/g)
      ?.length,
    5,
  );
  assert.match(contributing, /Package releases use the version in `package\.json`/);
  assert.match(contributing, /Hosted MCP releases use[\s\S]*`server\.json`/);
});

test("documents current monitor bodies and event pagination", async () => {
  const monitorGuide = await read("task-guides/monitor-accounts.md");
  const hashtagGuide = await read("task-guides/track-hashtags.md");
  const events = await read(
    "skills/x-twitter-scraper/references/api-endpoints-events.md",
  );

  assert.match(monitorGuide, /"username": "elonmusk"/);
  assert.match(monitorGuide, /"eventTypes": \["tweet\.new", "tweet\.reply"\]/);
  assert.match(hashtagGuide, /POST \/monitors\/keywords/);
  assert.match(hashtagGuide, /"query": "#buildinpublic lang:en"/);
  for (const filter of contract.eventFilters) {
    assert.ok(events.includes("| `" + filter + "` |"));
  }
  assert.ok(events.includes("| `" + contract.eventCursor + "` |"));
  assert.doesNotMatch(monitorGuide, /monitor_id|webhook_url/);
});

test("documents replay-safe webhook signing and bounded retries", async () => {
  const guide = await read("skills/x-twitter-scraper/references/webhooks.md");
  const endpointGuide = await read(
    "skills/x-twitter-scraper/references/api-endpoints-webhooks.md",
  );
  const taskGuide = await read("task-guides/tweet-webhooks.md");

  for (const field of contract.webhookCreateFields) {
    assert.match(taskGuide, new RegExp(`"${field}"`));
  }
  for (const header of contract.webhookSignatureHeaders) {
    assert.match(guide, new RegExp(header));
  }
  assert.match(guide, /<timestamp>\.<nonce>\.<raw JSON body>/);
  assert.match(guide, /claimNonce\(nonce\)/);
  assert.match(guide, /claim_nonce\(nonce\)/);
  assert.match(guide, /Use an atomic shared nonce store/);
  assert.doesNotMatch(guide, /event\.data\.text|event\['data'\]\['text'\]/);
  assert.match(guide, /POST \/webhooks\/\{id\}\/resume/);
  assert.match(endpointGuide, /"schemaVersion": 1/);
  assert.match(endpointGuide, /"streamEventId": "9010"/);
  assert.match(endpointGuide, /"deliveryId": "334"/);
  assert.match(endpointGuide, /X-Xquik-Timestamp/);
  assert.doesNotMatch(endpointGuide, /"timestamp": "2026/);
  assert.doesNotMatch(taskGuide, /"secret": "<optional/);
  assert.doesNotMatch(guide, /retried up to 5 times/);
  assert.doesNotMatch(guide, /\b\d+\s+attempts\b/);
});

test("uses keyword monitor and durable write summaries across entry points", async () => {
  const keywordGuide = await read(
    "skills/x-twitter-scraper/references/track-twitter-keywords-mentions.md",
  );
  const command = await read("commands/post.md");
  const skill = await read("skills/x-twitter-scraper/SKILL.md");

  assert.match(keywordGuide, /POST \/monitors\/keywords/);
  assert.doesNotMatch(keywordGuide, /Use `POST \/monitors` for\s+ongoing tracking/);
  for (const document of [command, skill]) {
    assert.match(document, /Idempotency-Key/);
    assert.match(document, /Hosted MCP (?:injects|supplies) it automatically/);
    assert.match(document, /statusUrl/);
    assert.match(document, /safeToRetry/);
  }

  const mcpReference = await read(
    "skills/x-twitter-scraper/references/mcp-tools.md",
  );
  assert.match(mcpReference, /required idempotency headers injected automatically/);
  assert.doesNotMatch(mcpReference, /with `account`, `text`, and unique `Idempotency-Key`/);
});

test("documents canonical X write fields and durable envelopes", async () => {
  const writeReference = await read(
    "skills/x-twitter-scraper/references/api-endpoints-x-write.md",
  );
  const writeTypes = await read(
    "skills/x-twitter-scraper/references/types-x-write.md",
  );
  const profile = await read("task-guides/update-x-profile.md");

  for (const field of contract.writeTweetFields) {
    assert.ok(writeReference.includes("| `" + field + "` |"));
  }
  assert.match(writeReference, /Idempotency-Key/);
  assert.match(writeReference, /Hosted MCP injects it\s+automatically/);
  assert.match(writeReference, /HTTP 200/);
  assert.match(writeReference, /HTTP 202/);
  assert.match(writeTypes, /interface XWriteAction/);
  assert.match(writeTypes, /safeToRetry: boolean/);
  assert.match(profile, /"description": "building stuff"/);
  assert.match(profile, /"url": "https:\/\/janedoe\.com"/);
  assert.doesNotMatch(writeReference, /attachment_url|reply_to_message_id/);
});

test("distinguishes direct REST and hosted MCP idempotency", async () => {
  const guides = await Promise.all([
    read("task-guides/post-tweets.md"),
    read("task-guides/send-dms.md"),
    read("task-guides/follow-unfollow.md"),
    read("task-guides/update-x-profile.md"),
  ]);

  for (const guide of guides) {
    assert.match(guide, /Direct REST callers supply it/);
    assert.match(guide, /Hosted MCP injects it automatically/);
  }

  const mcp = await read(
    "skills/x-twitter-scraper/references/mcp-tools.md",
  );
  assert.match(mcp, /reuses each generated key for bounded transient retries/);
  assert.match(mcp, /safe_to_retry/);
});

test("documents automatic cursor recovery across public entry points", async () => {
  const documents = await Promise.all([
    read("skills/x-twitter-scraper/SKILL.md"),
    read("skills/x-twitter-scraper/references/api-endpoints-x-api.md"),
    read("skills/x-twitter-scraper/references/api-endpoints-error-codes.md"),
    read("task-guides/search-tweets.md"),
    read("task-guides/user-tweets.md"),
    read("task-guides/tweet-replies.md"),
  ]);

  for (const document of documents) {
    assert.match(document, /invalid_coverage_cursor/);
    assert.match(document, /coverage_cursor_unavailable/);
    assert.match(document, /coverage_cursor_gone/);
    assert.match(document, /Retry-After/);
  }

  const reference = documents[1];
  const errors = documents[2];
  assert.match(reference, /Tweet search, user Tweets, user replies, Tweet replies/);
  assert.match(reference, /following, and verified followers/);
  assert.match(reference, /Retry the same cursor once/);
  assert.match(reference, /response omits `Retry-After`/);
  assert.match(errors, /\| 400 \| `invalid_coverage_cursor`/);
  assert.match(errors, /\| 409 \| `coverage_cursor_unavailable`/);
  assert.match(errors, /\| 410 \| `coverage_cursor_gone`/);
});

test("documents the wrapped article response", async () => {
  const article = await read(
    "skills/x-twitter-scraper/references/api-endpoints-x-api.md",
  );
  const articleSection = article
    .split("### Get Article", 2)[1]
    .split("### Search Tweets", 1)[0];

  for (const field of contract.articleFields) {
    assert.match(articleSection, new RegExp(`"${field}"`));
  }
  assert.doesNotMatch(
    articleSection,
    /bodyHtml|coverImage"|bookmarkCount|retweetCount/,
  );
});

test("documents current pagination, filters, and export formats", async () => {
  const search = await read("task-guides/search-tweets.md");
  const timeline = await read("task-guides/user-tweets.md");
  const replies = await read("task-guides/tweet-replies.md");
  const extractions = await read(
    "skills/x-twitter-scraper/references/extractions.md",
  );
  const exportGuide = await read("task-guides/export-tweets-csv.md");

  assert.match(search, /\?cursor=<cursor>/);
  assert.match(timeline, /pageSize` from 1 to 300/);
  assert.match(timeline, /Stop only when\s+`has_next_page` is false/);
  assert.match(replies, /empty or underfilled page can still resume/i);
  assert.match(extractions, /`minFollowers`/);
  assert.match(extractions, /`minViews`/);
  assert.match(extractions, /`boundingBox`/);
  for (const format of contract.extractionFormats) {
    assert.match(extractions, new RegExp(`\\b${format.replace("-", "\\-")}\\b`));
  }
  assert.doesNotMatch(exportGuide, /JSONL|format=jsonl/i);
  assert.doesNotMatch(search, /1,000 (?:tweets|rows) per job/i);
});

test("documents current Radar and X trends contracts", async () => {
  const radar = await read(
    "skills/x-twitter-scraper/references/api-endpoints-radar.md",
  );
  const radarTypes = await read(
    "skills/x-twitter-scraper/references/types-radar.md",
  );
  const trends = await read("task-guides/x-trends.md");

  assert.match(radar, /`after`/);
  for (const source of contract.radarSources) {
    assert.match(`${radar}\n${radarTypes}`, new RegExp(`\\b${source}\\b`));
  }
  assert.match(trends, /tweetVolume/);
  assert.match(trends, /promotedContent/);
  assert.doesNotMatch(trends, /`volume`|`context`/);
});

test("removes obsolete operation-named MCP type files", async () => {
  const files = await readdir(
    new URL("skills/x-twitter-scraper/references/", root),
  );
  const obsolete = files.filter(
    (file) =>
      file.startsWith("types-mcp-") && file !== "types-mcp-output-schemas.md",
  );
  const outputGuide = await read(
    "skills/x-twitter-scraper/references/types-mcp-output-schemas.md",
  );

  assert.deepEqual(obsolete, []);
  assert.match(outputGuide, /2 tools: `explore` and `xquik`/);
  assert.doesNotMatch(outputGuide, /types-mcp-(?:lookup|search|get|run)/);
});
