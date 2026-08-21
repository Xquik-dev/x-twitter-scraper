// SPDX-FileCopyrightText: 2026 Xquik Contributors
// SPDX-License-Identifier: MIT

import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function read(path) {
  return readFile(new URL(path, root), "utf8");
}

function assertIncludes(source, values) {
  for (const value of values) {
    assert.ok(source.includes(value), `Missing ${value}`);
  }
}

const contract = Object.freeze({
  bundleVersion: "2.6.7",
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
  supportStatuses: ["pending", "ready", "failed"],
  supportDocFields: [
    "/support/tickets/{id}/messages",
    "/support/attachments/{id}",
    "Multipart",
    "Idempotency-Key",
    "Idempotency-Replayed",
    "idempotency_key_conflict",
    "publicId",
    "attachments",
    "10 MB",
    "25 MB",
    "30 MB",
    "`400`",
    "`404`",
    "`429`",
  ],
  userSearchFilters: [
    "minFollowers",
    "maxFollowers",
    "minFollowing",
    "maxFollowing",
    "minStatuses",
    "maxStatuses",
    "minAccountAgeDays",
    "verifiedOnly",
    "verifiedType",
    "hasWebsite",
    "hasLocation",
    "bioContains",
    "locationContains",
    "usernameContains",
  ],
  threadFilters: [
    "fromUser",
    "toUser",
    "mentioning",
    "language",
    "sinceDate",
    "untilDate",
    "mediaType",
    "minFaves",
    "minRetweets",
    "minReplies",
    "minQuotes",
    "minViews",
    "minBookmarks",
    "maxFaves",
    "maxRetweets",
    "maxReplies",
    "maxQuotes",
    "blueVerifiedOnly",
    "verifiedOnly",
    "replies",
    "retweets",
    "quotes",
    "exactPhrase",
    "excludeWords",
    "anyWords",
    "hashtags",
    "cashtags",
    "url",
    "conversationId",
    "inReplyToTweetId",
    "quotesOfTweetId",
    "retweetsOfTweetId",
  ],
});

test("separates the bundle version from hosted MCP", async () => {
  const packageJson = JSON.parse(await read("package.json"));
  const serverJson = JSON.parse(await read("server.json"));
  const readme = await read("README.md");
  const mcpize = await read("mcpize/SUBMISSION-STEPS.md");
  const versionGuard = await read("scripts/check-versions.mjs");

  assert.equal(packageJson.version, contract.bundleVersion);
  assert.equal(serverJson.version, contract.hostedMcpVersion);
  assert.ok(readme.includes(`bundle is v${contract.bundleVersion}`));
  assert.match(readme, /Hosted MCP v2\.6\.0/);
  assert.match(mcpize, /Version: `2\.6\.0`/);
  assert.match(versionGuard, /All bundle version files use/);
  assert.match(versionGuard, /hosted MCP uses/);
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
  assertIncludes(
    events,
    contract.eventFilters.map((filter) => `| \`${filter}\` |`),
  );
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
  assertIncludes(guide, contract.webhookSignatureHeaders);
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

  assertIncludes(
    writeReference,
    contract.writeTweetFields.map((field) => `| \`${field}\` |`),
  );
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
    read("skills/x-twitter-scraper/references/mcp-tools.md"),
    read("skills/x-twitter-scraper/references/mcp-setup.md"),
    read("skills/x-twitter-scraper/references/workflows.md"),
    read("skills/x-twitter-scraper/references/scrape-export-twitter-data.md"),
  ]);

  for (const document of documents) {
    assert.match(document, /coverage_cursor_unavailable/);
    assert.match(document, /wait the exact\s+`Retry-After` seconds/i);
    assert.match(document, /retry the same cursor once/i);
    assert.match(document, /coverage_cursor_gone/);
    assert.match(document, /(?:omits|without|no)\s+`Retry-After`/i);
    assert.match(document, /restart without a\s+cursor/i);
    assert.match(document, /deduplicate by (?:Tweet )?ID/i);
  }

  for (const document of documents.slice(0, 6)) {
    assert.match(document, /invalid_coverage_cursor/);
  }
  for (const document of documents.slice(-2)) {
    assert.match(document, /Outside documented cursor recovery/);
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

test("documents the current Error schema", async () => {
  const errors = await read(
    "skills/x-twitter-scraper/references/api-endpoints-error-codes.md",
  );
  const types = await read(
    "skills/x-twitter-scraper/references/types-error.md",
  );
  const userGuide = await read("task-guides/user-tweets.md");

  for (const document of [errors, types]) {
    assert.match(document, /112/);
    assertIncludes(document, [
      "closed",
      "expired",
      "missing_url",
      "user_not_found",
    ]);
    assert.match(document, /xquik-api-contract: 2026-04-29/);
  }
  assert.match(types, /error:\s*[\s\S]*string[\s\S]*message: string; type: ApiErrorType; code: string/);
  assert.match(types, /retryAfter\?: number/);
  assert.match(types, /retryAfterMs\?: number/);
  assert.match(types, /rate_limit_error/);
  assert.match(errors, /requires an integer `Retry-After` response\s+header/);
  assert.match(errors, /`410 coverage_cursor_gone` has no `Retry-After` header/);
  assert.match(errors, /"error": "coverage_cursor_unavailable"/);
  assert.match(errors, /"error": "coverage_cursor_gone"/);
  assert.doesNotMatch(errors, /stream_registration_failed/);
  assert.match(userGuide, /404 user_not_found/);
  assert.doesNotMatch(userGuide, /protected_account/);
});

test("documents the wrapped article response", async () => {
  const article = await read(
    "skills/x-twitter-scraper/references/api-endpoints-x-api.md",
  );
  const articleSection = article
    .split("### Get article", 2)[1]
    .split("### Search tweets", 1)[0];

  assertIncludes(
    articleSection,
    contract.articleFields.map((field) => `"${field}"`),
  );
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
  const extractionTypes = await read(
    "skills/x-twitter-scraper/references/types-extractions.md",
  );
  const xTypes = await read("skills/x-twitter-scraper/references/types-x-api.md");
  const exportGuide = await read("task-guides/export-tweets-csv.md");

  assert.match(search, /\?cursor=<cursor>/);
  assert.match(timeline, /pageSize` from 1 to 300/);
  assert.match(timeline, /Stop only when\s+`has_next_page` is false/);
  assert.match(replies, /empty or underfilled page can still resume/i);
  assert.match(extractions, /`minFollowers`/);
  assert.match(extractions, /`minViews`/);
  assert.match(extractions, /`boundingBox`/);
  assert.match(extractionTypes, /targetTweetIds\?: string\[\]/);
  assert.match(extractionTypes, /relationTargets\?: ExtractionRelationTarget\[\]/);
  assert.match(extractionTypes, /dedupeMode\?: "none" \| "first" \| "merge"/);
  assert.match(extractionTypes, /collectionStrategy\?: "auto" \| "complete"/);
  assertIncludes(xTypes, [
    "adultContent", "availabilityReason", "embeddable", "grokPostId", "sourceStatusId",
    "withheldScope", "professional", "grokTranslatedBio", "tipJar",
  ]);
  for (const format of contract.extractionFormats) {
    assert.match(extractions, new RegExp(`\\b${format.replace("-", "\\-")}\\b`));
  }
  assert.doesNotMatch(exportGuide, /JSONL|format=jsonl/i);
  assert.doesNotMatch(search, /1,000 (?:tweets|rows) per job/i);
  assert.match(replies, /collection across available\s+read strategies/);
  assert.doesNotMatch(replies, /It merges available/);
});

test("documents Latest ordering and thread result filters", async () => {
  const taskGuide = await read("task-guides/search-tweets.md");
  const skill = await read("skills/x-twitter-scraper/SKILL.md");
  const mcp = await read("skills/x-twitter-scraper/references/mcp-tools.md");
  const research = await read("skills/xquik-social-research/SKILL.md");
  const scraper = await read(
    "skills/x-twitter-scraper/references/scrape-export-twitter-data.md",
  );
  const direct = await read(
    "skills/x-twitter-scraper/references/api-endpoints-x-api.md",
  );

  for (const document of [taskGuide, skill, mcp, research, scraper, direct]) {
    assert.match(document, /fresh cursorless[\s\S]*queryType=Latest[\s\S]*newest-first across\s+pages/i);
    assert.match(document, /existing cursors (?:keep|retain)[\s\S]{0,60}ordering/i);
  }

  const acceptedThreadFilters = direct
    .split("Thread reads accept these 32 effective result filters:", 2)[1]
    .split("Thread reads do not accept", 1)[0];
  assert.equal(contract.threadFilters.length, 32);
  assertIncludes(
    acceptedThreadFilters,
    contract.threadFilters.map((filter) => `\`${filter}\``),
  );
  assert.doesNotMatch(acceptedThreadFilters, /nativeRetweets|sinceTime|untilTime/);
  assert.match(direct, /32 effective result filters/);
  assert.match(direct, /do not accept `nativeRetweets`, `sinceTime`,\s+or `untilTime`/);
  for (const document of [skill, mcp, research]) {
    assert.match(document, /Thread reads accept\s+(?:the\s+)?32 effective\s+result filters/i);
    assert.match(document, /exclud(?:e|ing)[\s\S]{0,30}`nativeRetweets`, `sinceTime`, and\s+`untilTime`/);
  }
});

test("documents direct user filters and support media contracts", async () => {
  const direct = await read(
    "skills/x-twitter-scraper/references/api-endpoints-x-api.md",
  );
  const support = await read(
    "skills/x-twitter-scraper/references/api-endpoints-support.md",
  );
  const supportTypes = await read(
    "skills/x-twitter-scraper/references/types-support.md",
  );
  const readme = await read("README.md");

  assertIncludes(direct, contract.userSearchFilters);
  assert.match(direct, /All supported\s+filters apply before billing/);
  assert.match(direct, /`minPosts` and `maxPosts` alias/);
  assertIncludes(support, contract.supportDocFields);
  assertIncludes(support, contract.supportStatuses);
  assertIncludes(supportTypes, contract.supportStatuses);
  assert.match(
    support,
    /`201`[\s\S]*`200`[\s\S]*`409 idempotency_key_conflict`/,
  );
  assert.match(support, /Range[\s\S]*`206`[\s\S]*`416 invalid_range`/);
  assert.match(
    supportTypes,
    /interface SupportAttachment[\s\S]*interface SupportMutationResponse/,
  );
  assert.match(readme, /Support \|[^\n]*download attachments/);
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
  assertIncludes(`${radar}\n${radarTypes}`, contract.radarSources);
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
