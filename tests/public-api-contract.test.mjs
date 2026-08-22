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
  assert.doesNotMatch(endpointGuide, /"schemaVersion": 1/);
  assert.doesNotMatch(endpointGuide, /"streamEventId": "9010"/);
  assert.doesNotMatch(endpointGuide, /"deliveryId": "334"/);
  assert.match(endpointGuide, /"timestamp": "2026-02-27T12:00:00.000Z"/);
  assert.match(endpointGuide, /X-Xquik-Timestamp/);
  assert.doesNotMatch(taskGuide, /"secret": "<optional/);
  assert.doesNotMatch(guide, /retried up to 5 times/);
  assert.doesNotMatch(guide, /\b\d+\s+attempts\b/);
});

test("documents source-backed review fixes", async () => {
  const [
    skill,
    draws,
    errors,
    extractions,
    events,
    drafts,
    draftTypes,
    styles,
    radar,
    drawTypes,
    mediaTypes,
    workflows,
    support,
  ] = await Promise.all([
    read("skills/x-twitter-scraper/SKILL.md"),
    read("skills/x-twitter-scraper/references/api-endpoints-draws.md"),
    read("skills/x-twitter-scraper/references/api-endpoints-error-codes.md"),
    read("skills/x-twitter-scraper/references/api-endpoints-extractions.md"),
    read("skills/x-twitter-scraper/references/api-endpoints-events.md"),
    read("skills/x-twitter-scraper/references/api-endpoints-drafts.md"),
    read("skills/x-twitter-scraper/references/types-tweet-drafts.md"),
    read("skills/x-twitter-scraper/references/api-endpoints-tweet-style-cache.md"),
    read("skills/x-twitter-scraper/references/api-endpoints-radar.md"),
    read("skills/x-twitter-scraper/references/types-draws.md"),
    read("skills/x-twitter-scraper/references/types-download-media.md"),
    read("skills/x-twitter-scraper/references/workflows.md"),
    read("skills/x-twitter-scraper/references/api-endpoints-support.md"),
  ]);

  assert.match(skill, /allowed-tools: WebFetch mcp__xquik__explore mcp__xquik__xquik/);
  assert.match(skill, /`WebFetch` access for public docs[\s\S]*only/);
  assert.match(draws, /Remaining credits cap how many replies and retweeters/);
  assert.match(draws, /"winners": \[\]/);
  assert.match(errors, /\| 424 \| `x_api_unavailable` \|/);
  assert.match(extractions, /GET \/extractions\/\{id\}\?limit=1000&cursor=<nextCursor>/);
  assert.match(events, /"id": "1893556789012345678"/);
  assert.match(events, /"author": \{/);
  assert.match(events, /"createdAt": "2026-02-24T16:45:00.000Z"/);
  assert.match(drafts, /"nextCursor": "cursor_string"/);
  assert.match(draftTypes, /nextCursor\?: string/);
  assert.match(styles, /`xUsername` is the route identifier/);
  assert.match(radar, /new URLSearchParams\([\s\S]*after: nextCursor/);
  assert.match(drawTypes, /interface DrawDetails[\s\S]*winners: DrawWinner\[\]/);
  assert.match(mediaTypes, /type DownloadMediaRequest =/);
  assert.match(mediaTypes, /tweetIds: NonEmptyTweetIds/);
  assert.match(workflows, /job\.status !== "completed"/);
  assert.match(workflows, /method: "DELETE"/);
  assert.match(workflows, /separate polling-only workflow/);
  assert.doesNotMatch(workflows, /monitorId=7/);
  assert.match(support, /PATCH \/support\/tickets\/\{id\}/);
  assert.match(support, /"status": "open" \| "resolved" \| "closed"/);
  assert.match(support, /"publicId": "tkt_\.\.\."/);
});

test("separates REST credentials from client-managed MCP OAuth", async () => {
  const [skill, metadata, security, setup, tools] = await Promise.all([
    read("skills/x-twitter-scraper/SKILL.md"),
    read("skills/x-twitter-scraper/metadata.json"),
    read("skills/x-twitter-scraper/references/security.md"),
    read("skills/x-twitter-scraper/references/mcp-setup.md"),
    read("skills/x-twitter-scraper/references/mcp-tools.md"),
  ]);

  assert.match(skill, /required: \[\][\s\S]*optional:[\s\S]*XQUIK_API_KEY/);
  assert.match(skill, /For REST, a valid Xquik API key/);
  assert.match(skill, /For MCP, client-managed OAuth 2\.1/);
  assert.match(skill, /Use HTTPS directly/);
  assert.match(skill, /URL-encoded/);
  assert.match(metadata, /client-managed-oauth-2\.1-or-bearer-fallback/);
  assert.match(security, /OAuth 2\.1 with S256 PKCE/);
  assert.match(security, /`Authorization: Bearer` fallback/);
  assert.match(setup, /Business workspaces limit Developer[\s\S]*admins and owners/);
  assert.match(setup, /Enterprise and[\s\S]*Edu workspaces[\s\S]*role-based/);
  assert.match(tools, /Record<string, string \| number \| boolean>/);
});

test("documents bounded jobs, retries, exports, and webhook delivery", async () => {
  const [guide, draws, errors, extractions, python, workflows, webhooks] =
    await Promise.all([
      read("skills/x-twitter-scraper/references/twitter-scraper-api-guide.md"),
      read("skills/x-twitter-scraper/references/draws.md"),
      read("skills/x-twitter-scraper/references/api-endpoints-error-codes.md"),
      read("skills/x-twitter-scraper/references/extractions.md"),
      read("skills/x-twitter-scraper/references/python-examples.md"),
      read("skills/x-twitter-scraper/references/workflows.md"),
      read("skills/x-twitter-scraper/references/webhooks.md"),
    ]);

  assert.match(guide, /100,000 rows[\s\S]*PDF[\s\S]*10,000/);
  assert.match(guide, /connection\s+failures, `408`, `429`, or `5xx`/);
  assert.match(guide, /`424` only when[\s\S]*safe to retry/);
  assert.match(draws, /estimated entries, intended\s+audience, and retention period/);
  assert.match(draws, /request: \{ drawId: draw\.id, format: "csv", type: "winners" \}/);
  assert.equal((errors.match(/default v1 string error contract/g) ?? []).length, 2);
  assert.match(extractions, /GET \/extractions\/\{id\}\?limit=1000&cursor=<nextCursor>/);
  assert.match(extractions, /send[\s\S]*`nextCursor` unchanged[\s\S]*`cursor`/i);
  assert.match(python, /urllib\.parse\.urlencode/);
  assert.match(python, /poll_deadline = time\.monotonic\(\) \+ 5 \* 60/);
  assert.match(python, /event_type not in SUPPORTED_EVENT_TYPES[\s\S]*send_response\(503\)/);
  assert.match(workflows, /new AbortController\(\)/);
  assert.match(workflows, /response\.status === 408/);
  assert.match(workflows, /if \(!csvResponse\.ok\)/);
  assert.match(workflows, /Math\.min\(100, remaining\)/);
  assert.match(webhooks, /reverse proxy or load[\s\S]*terminates TLS/);
  assert.match(webhooks, /"tweet\.quote"/);
  assert.match(webhooks, /`webhook\.test` payload omits[\s\S]*`deliveryId`/);
});

test("documents current compose, tweet, style, and write types", async () => {
  const [compose, tweetTypes, styles, writeTypes, writeEndpoints] =
    await Promise.all([
      read("skills/x-twitter-scraper/references/api-endpoints-compose.md"),
      read("skills/x-twitter-scraper/references/types-x-api.md"),
      read("skills/x-twitter-scraper/references/api-endpoints-tweet-style-cache.md"),
      read("skills/x-twitter-scraper/references/types-x-write.md"),
      read("skills/x-twitter-scraper/references/api-endpoints-x-write.md"),
    ]);

  assert.match(compose, /`step=score` requires a nonempty `draft`/);
  assert.match(tweetTypes, /type: "photo" \| "video" \| "animated_gif"/);
  assert.match(tweetTypes, /inReplyToId\?: string/);
  assert.match(styles, /both values are cached style[\s\S]*identifiers/);
  assert.match(styles, /normalized label returned as `xUsername`/);
  assert.match(writeTypes, /type NonEmptyTweetMedia =/);
  assert.match(writeTypes, /\| \[string, string, string, string\]/);
  assert.match(writeTypes, /text: string; media\?: NonEmptyTweetMedia/);
  assert.match(writeTypes, /text\?: string; media: NonEmptyTweetMedia/);
  assert.match(writeEndpoints, /Every write request needs an[\s\S]*`account`/);
  assert.match(writeEndpoints, /read-only status request does not/);
});

test("hardens portable webhook receiver examples", async () => {
  const [guide, python, webhookTypes] = await Promise.all([
    read("skills/x-twitter-scraper/references/webhooks.md"),
    read("skills/x-twitter-scraper/references/python-examples.md"),
    read("skills/x-twitter-scraper/references/types-webhooks.md"),
  ]);

  assert.match(guide, /MAX_WEBHOOK_BODY_BYTES = 1024 \* 1024/);
  assert.match(guide, /http\.MaxBytesReader/);
  assert.match(guide, /if \(!WEBHOOK_SECRET\) throw new Error/);
  assert.match(guide, /except json\.JSONDecodeError/);
  assert.match(guide, /if err := json\.Unmarshal\(payload, &event\); err != nil/);
  assert.match(guide, /eventStore\.markProcessed/);
  assert.match(guide, /req\.setTimeout\(10_000/);
  assert.match(guide, /res\.writeHead\(413\)[\s\S]*req\.destroy\(\)/);
  assert.match(guide, /event === null[\s\S]*Array\.isArray\(event\)/);
  assert.match(guide, /not isinstance\(event, dict\)/);
  assert.match(guide, /server\.listen\(3000, "127\.0\.0\.1"\)/);
  assert.match(guide, /HTTPServer\(\("127\.0\.0\.1", 3000\)/);
  assert.match(guide, /func main\(\)[\s\S]*Addr:\s+"127\.0\.0\.1:3000"/);
  assert.match(guide, /read_body_with_deadline\(self\.rfile, self\.connection, length, 10\.0\)/);
  assert.match(guide, /except \(socket\.timeout, TimeoutError\)/);
  assert.match(guide, /ReadTimeout:\s+10 \* time\.Second/);
  assert.match(python, /MAX_WEBHOOK_BODY_BYTES = 1024 \* 1024/);
  assert.match(python, /def validate_subscription_event_types\(event_types: list\[str\]\)/);
  assert.match(python, /event_type not in SUPPORTED_EVENT_TYPES[\s\S]*send_response\(503\)/);
  assert.match(python, /claim_event\(delivery_key\)/);
  assert.match(python, /apply_effect_and_mark_processed\(stream_key, event\)/);
  assert.match(webhookTypes, /interface ProductionWebhookPayload/);
  assert.match(webhookTypes, /interface WebhookTestPayload/);
  assert.match(webhookTypes, /timestamp: string/);
});

test("hardens bounded workflows and persistent delivery setup", async () => {
  const [
    skill,
    monitorEndpoints,
    webhookEndpoints,
    extractions,
    python,
    pipeline,
    workflows,
    writeEndpoints,
  ] = await Promise.all([
    read("skills/x-twitter-scraper/SKILL.md"),
    read("skills/x-twitter-scraper/references/api-endpoints-monitors.md"),
    read("skills/x-twitter-scraper/references/api-endpoints-webhooks.md"),
    read("skills/x-twitter-scraper/references/extractions.md"),
    read("skills/x-twitter-scraper/references/python-examples.md"),
    read("skills/x-twitter-scraper/references/twitter-data-pipeline.md"),
    read("skills/x-twitter-scraper/references/workflows.md"),
    read("skills/x-twitter-scraper/references/api-endpoints-x-write.md"),
  ]);

  assert.match(skill, /`5xx`:[^\n]*up to 3 times/);
  assert.doesNotMatch(monitorEndpoints, /For creates and updates/);
  assert.match(webhookEndpoints, /atomic insert-if-absent/);
  assert.match(webhookEndpoints, /`deliveryId` separately/);
  assert.match(webhookEndpoints, /`127\.0\.0\.1`/);

  const requestSection = extractions.slice(0, extractions.indexOf("## Response"));
  const extractionRequests = [...requestSection.matchAll(/```json\n([\s\S]*?)\n```/g)]
    .map((match) => JSON.parse(match[1]))
    .filter((body) => body.toolType);
  assert.ok(extractionRequests.length > 0);
  for (const request of extractionRequests) {
    assert.ok(Number.isInteger(request.resultsLimit) && request.resultsLimit > 0);
  }

  assert.match(python, /response\.status == 204 or not response_body/);
  assert.match(pipeline, /objective, event scope, destination URL, verification method/);
  assert.match(pipeline, /retention period, and deactivation or deletion procedure/);

  assert.match(workflows, /await response\.text\(\)[\s\S]*finally[\s\S]*clearTimeout/);
  assert.match(workflows, /fetchAllPages\(path, dataKey, maxResults, identityForItem\)/);
  assert.match(workflows, /error\.status === 410/);
  assert.match(workflows, /error\.code === "coverage_cursor_gone"/);
  assert.match(workflows, /seenIds\.has\(identity\)/);
  assert.match(workflows, /existingMonitorIds/);
  assert.match(workflows, /existingWebhookIds/);
  assert.match(workflows, /candidates\.length !== 1/);
  assert.match(workflows, /Monitor \$\{monitor\.id\} was retained for manual reconciliation/);
  assert.match(workflows, /typeof item\?\.xUserId === "string"/);

  assert.match(writeEndpoints, /Idempotency-Key: <UNIQUE_WRITE_KEY>/);
  assert.match(writeEndpoints, /Direct REST callers supply this header/);
});

test("aligns public safety and type contracts", async () => {
  const [
    skill,
    errors,
    supportEndpoints,
    mcp,
    python,
    exportGuide,
    faq,
    pipeline,
    eventTypes,
    extractionTypes,
    supportTypes,
    typeIndex,
    workflows,
    skillCard,
  ] = await Promise.all([
    read("skills/x-twitter-scraper/SKILL.md"),
    read("skills/x-twitter-scraper/references/api-endpoints-error-codes.md"),
    read("skills/x-twitter-scraper/references/api-endpoints-support.md"),
    read("skills/x-twitter-scraper/references/mcp-tools.md"),
    read("skills/x-twitter-scraper/references/python-examples.md"),
    read("skills/x-twitter-scraper/references/scrape-export-twitter-data.md"),
    read("skills/x-twitter-scraper/references/twitter-api-alternative-faq.md"),
    read("skills/x-twitter-scraper/references/twitter-data-pipeline.md"),
    read("skills/x-twitter-scraper/references/types-events.md"),
    read("skills/x-twitter-scraper/references/types-extractions.md"),
    read("skills/x-twitter-scraper/references/types-support.md"),
    read("skills/x-twitter-scraper/references/types.md"),
    read("skills/x-twitter-scraper/references/workflows.md"),
    read("skills/x-twitter-scraper/skill-card.md"),
  ]);

  assert.match(skill, /For REST, use the Xquik API key/);
  assert.match(skill, /For MCP, prefer client-managed\s+OAuth 2\.1/);
  assert.match(errors, /Never\s+retry `POST`, `PATCH`, or `DELETE` automatically/);
  assert.match(errors, /inspect `statusUrl`/);
  assert.match(supportEndpoints, /Never retry a direct REST write without this key/);

  assert.match(mcp, /bookmark folders/);
  assert.match(mcp, /creating, replacing, or deleting a cached style/);

  assert.match(python, /def claim_nonce\(nonce: str, ttl_seconds: int\)/);
  const pythonReceiver = python.slice(python.indexOf("class WebhookHandler"));
  assert.ok(
    pythonReceiver.indexOf("claim_nonce(nonce, 5 * 60)") <
      pythonReceiver.indexOf('if event_type == "webhook.test"'),
    "claim each nonce before accepting a test delivery",
  );
  assert.match(python, /HTTPServer\(\("127\.0\.0\.1", 3000\)/);
  assert.match(python, /Terminate TLS at a reverse proxy/);

  assertIncludes(exportGuide, contract.extractionFormats.map((format) => `\`${format}\``));
  assert.doesNotMatch(faq, /tweet scraping/);
  assert.match(pipeline, /connection failures, `408`, `429`, or `5xx`/);
  assert.match(pipeline, /`424` only when `safeToRetry` is `true`/);

  assert.doesNotMatch(typeIndex, /types-api-keys/);
  await assert.rejects(read("skills/x-twitter-scraper/references/types-api-keys.md"));
  assert.match(eventTypes, /monitorType: "account"[\s\S]*username: string/);
  assert.match(eventTypes, /monitorType: "keyword"[\s\S]*query: string/);
  assert.match(eventTypes, /keywordMonitorId: string/);

  assert.match(extractionTypes, /interface CreateExtractionResponse/);
  assert.match(extractionTypes, /interface CreateExtractionRequest[\s\S]*resultsLimit: number/);
  assert.match(extractionTypes, /Number\.isFinite\(request\.resultsLimit\)/);
  assert.match(supportTypes, /type SupportAttachments =\s+\| \[Blob\]/);
  assert.match(supportTypes, /body or attachments is required/);
  assert.match(supportTypes, /candidate\.body\.length > 10_000/);

  assert.match(workflows, /removes the like/);
  assert.match(skillCard, /1 low-confidence MIT license finding and 0 confirmed security issues/);
  assert.match(skillCard, /local files or local networks/);
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

test("documents file responses and specialized monitor contracts", async () => {
  const [apiIndex, eventEndpoints, eventTypes, requestTypes] = await Promise.all([
    read("skills/x-twitter-scraper/references/api-endpoints.md"),
    read("skills/x-twitter-scraper/references/api-endpoints-events.md"),
    read("skills/x-twitter-scraper/references/types-events.md"),
    read("skills/x-twitter-scraper/references/types-request-bodies.md"),
  ]);

  assert.doesNotMatch(apiIndex, /All responses are JSON/);
  assert.match(apiIndex, /`Content-Type`[\s\S]*`Content-Disposition`/);
  assert.match(apiIndex, /`response\.json\(\)` whenever `Content-Type` indicates JSON/);
  assert.match(eventEndpoints, /Detailed events may include `xEventId`/);
  assert.match(eventTypes, /type XquikEventDetail[\s\S]*xEventId\?: string/);
  assert.match(
    requestTypes,
    /interface CreateKeywordMonitorRequest[\s\S]*query: string;[\s\S]*eventTypes: EventType\[\]/,
  );
  const updateKeyword = requestTypes.match(
    /interface UpdateKeywordMonitorRequest \{([\s\S]*?)\n\}/,
  )?.[1];
  assert.ok(updateKeyword);
  assert.match(updateKeyword, /eventTypes\?: EventType\[\]/);
  assert.match(updateKeyword, /isActive\?: boolean/);
  assert.doesNotMatch(updateKeyword, /query/);
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
  assert.match(mcp, /safeToRetry/);
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
    assert.match(document, /deduplicate by (?:(?:Tweet )?ID|an endpoint-specific\s+stable identity)/i);
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
    .split("## Get article", 2)[1]
    .split("## Search tweets", 1)[0];

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

test("preserves audited integration safety invariants", async () => {
  const [
    events,
    styles,
    draws,
    extractions,
    mcp,
    python,
    security,
    skillCard,
    support,
    pipeline,
    xTypes,
    usage,
    webhooks,
    workflows,
  ] =
    await Promise.all([
      read("skills/x-twitter-scraper/references/api-endpoints-events.md"),
      read("skills/x-twitter-scraper/references/api-endpoints-tweet-style-cache.md"),
      read("skills/x-twitter-scraper/references/draws.md"),
      read("skills/x-twitter-scraper/references/extractions.md"),
      read("skills/x-twitter-scraper/references/mcp-tools.md"),
      read("skills/x-twitter-scraper/references/python-examples.md"),
      read("skills/x-twitter-scraper/references/security.md"),
      read("skills/x-twitter-scraper/skill-card.md"),
      read("skills/x-twitter-scraper/references/types-support.md"),
      read("skills/x-twitter-scraper/references/twitter-data-pipeline.md"),
      read("skills/x-twitter-scraper/references/types-x-api.md"),
      read("skills/x-twitter-scraper/references/usage.md"),
      read("skills/x-twitter-scraper/references/webhooks.md"),
      read("skills/x-twitter-scraper/references/workflows.md"),
    ]);

  assert.match(events, /Both ID fields contain the keyword monitor ID/);
  assert.match(events, /Keyword events omit `username`/);
  assert.match(styles, /encodeURIComponent\(label\)/);
  assert.match(styles, /encodeURIComponent\(response\.xUsername\)/);
  assert.match(draws, /const BASE = "https:\/\/xquik\.com\/api\/v1"/);
  assert.ok(
    extractions.indexOf("POST /extractions/estimate") <
      extractions.indexOf("POST /extractions`."),
  );
  assert.match(mcp, /POST \/api\/v1\/draws`; metered and requires approval for the exact request/i);
  assert.match(python, /if not isinstance\(payload, dict\):/);
  assert.match(python, /MAX_RETRY_DELAY_SECONDS/);
  assert.match(python, /if max_retries < 0:\n\s+raise ValueError/);
  assert.match(python, /poll_deadline = time\.monotonic\(\) \+ 5 \* 60/);
  assert.match(python, /deadline=poll_deadline/);
  assert.match(python, /if not valid_event_envelope\(event\):/);
  assert.match(python, /is_nonempty_string\(event\.get\("deliveryId"\)\)/);
  assert.match(python, /isinstance\(data, dict\)/);
  assert.match(security, /Replace every `<`, `>`, and `&`/);
  assert.match(security, /Never put raw X-authored text inside the markers/);
  assert.match(skillCard, /JSON-encode quoted content/);
  assert.match(support, /function assertCreateTicketRequest/);
  assert.match(
    pipeline,
    /deduplicate by `eventId`[\s\S]*webhook deliveries by `deliveryId`/,
  );
  assert.match(support, /subject\.length > 500/);
  assert.match(xTypes, /interface TweetReplies[\s\S]*next_cursor: string/);
  assert.match(usage, /Obtain explicit approval for that exact read/);
  assert.match(webhooks, /eventStore\.claimPending\(deliveryKey\)/);
  assert.match(webhooks, /claim_event\(delivery_key\)/);
  assert.match(webhooks, /eventStore\.ClaimPending\(deliveryKey\)/);
  assert.match(webhooks, /if not valid_event_envelope\(event\):/);
  assert.match(workflows, /existingMonitorIds/);
  assert.match(workflows, /Monitor creation is ambiguous/);
  assert.match(workflows, /Monitor \$\{monitor\.id\} was retained for manual reconciliation/);
  assert.doesNotMatch(
    workflows,
    /eventTypes: \["tweet\.new", "tweet\.reply"\][\s\S]*eventTypes: \["tweet\.new", "tweet\.reply",/,
  );
});

test("preserves reviewed approval and decoding safeguards", async () => {
  const [
    extractionEndpoints,
    drawEndpoints,
    styleEndpoints,
    endpointIndex,
    comparison,
    mcp,
    supportTypes,
    workflows,
    skillCard,
    mediaEndpoints,
    mediaTypes,
  ] = await Promise.all([
    read("skills/x-twitter-scraper/references/api-endpoints-extractions.md"),
    read("skills/x-twitter-scraper/references/api-endpoints-draws.md"),
    read("skills/x-twitter-scraper/references/api-endpoints-tweet-style-cache.md"),
    read("skills/x-twitter-scraper/references/api-endpoints.md"),
    read("skills/x-twitter-scraper/references/compare-twitter-apis.md"),
    read("skills/x-twitter-scraper/references/mcp-tools.md"),
    read("skills/x-twitter-scraper/references/types-support.md"),
    read("skills/x-twitter-scraper/references/workflows.md"),
    read("skills/x-twitter-scraper/skill-card.md"),
    read("skills/x-twitter-scraper/references/api-endpoints-x-media.md"),
    read("skills/x-twitter-scraper/references/types-download-media.md"),
  ]);

  assert.ok(
    extractionEndpoints.indexOf("Send that body to the estimate endpoint") <
      extractionEndpoints.indexOf("Then require approval"),
  );
  assert.match(drawEndpoints, /no precise preflight estimate is available/);
  assert.match(drawEndpoints, /Never invent an estimate/);
  assert.match(styleEndpoints, /new URLSearchParams/);
  assert.match(endpointIndex, /`response\.json\(\)` whenever `Content-Type` indicates JSON/);
  assert.match(comparison, /Do not add raw credits, row counts, retry counts, bytes/);
  assert.match(mcp, /confirm the source tweet, `winnerCount`, `backupCount`, every/);
  assert.match(mcp, /show the exact subject, body, and attachments/);
  assert.match(supportTypes, /typeof candidate\.body !== "string"/);
  assert.match(supportTypes, /!Array\.isArray\(candidate\.attachments\)/);
  assert.match(supportTypes, /typeof subject !== "string"/);
  assert.match(workflows, /Math\.min\(\n\s+maxRetryDelay,/);
  assert.match(skillCard, /MCP review uses client-managed\nOAuth 2\.1/);
  assert.match(mediaEndpoints, /`tweetId` \| string \| Numeric tweet ID alias/);
  assert.match(mediaEndpoints, /`tweetUrl` \| string \| Tweet URL alias/);
  assert.match(mediaTypes, /tweetId: string/);
  assert.match(mediaTypes, /tweetUrl: string/);
});

test("preserves final review safety and correctness fixes", async () => {
  const [
    skill,
    events,
    xApi,
    xWrite,
    comparison,
    giveaways,
    alternative,
    mcpSetup,
    mcpTools,
    writeTypes,
    webhooks,
    workflows,
  ] = await Promise.all([
    read("skills/x-twitter-scraper/SKILL.md"),
    read("skills/x-twitter-scraper/references/api-endpoints-events.md"),
    read("skills/x-twitter-scraper/references/api-endpoints-x-api.md"),
    read("skills/x-twitter-scraper/references/api-endpoints-x-write.md"),
    read("skills/x-twitter-scraper/references/compare-twitter-apis.md"),
    read("skills/x-twitter-scraper/references/automate-twitter-giveaways.md"),
    read("skills/x-twitter-scraper/references/best-x-api-alternative.md"),
    read("skills/x-twitter-scraper/references/mcp-setup.md"),
    read("skills/x-twitter-scraper/references/mcp-tools.md"),
    read("skills/x-twitter-scraper/references/types-x-write.md"),
    read("skills/x-twitter-scraper/references/webhooks.md"),
    read("skills/x-twitter-scraper/references/workflows.md"),
  ]);

  assert.match(events, /Require explicit approval for that scope before reading a page/);
  assert.match(events, /Require\nexplicit approval before retrieving the event/);
  assert.match(xApi, /Public tweet, article, search,[\s\S]*do not require a connected X account/);
  assert.doesNotMatch(xWrite, /^(?:GET|POST|PATCH|DELETE|PUT) \/x\//m);
  assert.match(xWrite, /POST \/api\/v1\/x\/tweets/);
  assert.match(comparison, /top tweet-scraping tools/);
  assert.match(giveaways, /\(draws\.md\)/);
  assert.doesNotMatch(alternative, /\.\.\/\.\.\/\.\.\/logo\.png/);
  assert.match(mcpSetup, /require_approval=\{"explore": "never", "xquik": "always"\}/);
  assert.match(mcpTools, /`safeToRetry` is true/);
  assert.doesNotMatch(mcpTools, /safe_to_retry/);
  assert.match(writeTypes, /function assertCreateTweetRequest\([\s\S]*request: unknown,[\s\S]*resolvedMedia/);
  assert.match(writeTypes, /media must contain 1-4 nonempty URLs/);
  assert.match(webhooks, /applyEffectAndMarkProcessed\(streamKey, event\)/);
  assert.match(webhooks, /apply_effect_and_mark_processed\(stream_key, event\)/);
  assert.match(webhooks, /ApplyEffectAndMarkProcessed\(streamKey, event\)/);
  assert.match(webhooks, /var event \*struct/);
  assert.match(webhooks, /err != nil \|\| event == nil/);
  assert.match(workflows, /const seenCursors = new Set\(\)/);
  assert.match(workflows, /Pagination exceeded the maximum page count/);
  assert.match(workflows, /const pollDeadline = performance\.now\(\) \+ 5 \* 60 \* 1000/);
  assert.match(workflows, /timeoutMs: remainingPollMs/);
  assert.match(workflows, /let webhookRemoved = false/);
  assert.doesNotMatch(workflows, /const eventParams = new URLSearchParams/);
  assert.match(skill, /Serialize X-authored content as JSON/);
  assert.doesNotMatch(skill, /requires:\n\s+env:\n\s+- XQUIK_API_KEY/);
});

test("preserves complete AutoSkills review fixes", async () => {
  const [
    skill,
    xApi,
    draws,
    followers,
    mcp,
    python,
    security,
    tweetTypes,
    writeTypes,
    webhooks,
    workflows,
    skillCard,
  ] = await Promise.all([
    read("skills/x-twitter-scraper/SKILL.md"),
    read("skills/x-twitter-scraper/references/api-endpoints-x-api.md"),
    read("skills/x-twitter-scraper/references/draws.md"),
    read("skills/x-twitter-scraper/references/export-twitter-followers.md"),
    read("skills/x-twitter-scraper/references/mcp-tools.md"),
    read("skills/x-twitter-scraper/references/python-examples.md"),
    read("skills/x-twitter-scraper/references/security.md"),
    read("skills/x-twitter-scraper/references/types-x-api.md"),
    read("skills/x-twitter-scraper/references/types-x-write.md"),
    read("skills/x-twitter-scraper/references/webhooks.md"),
    read("skills/x-twitter-scraper/references/workflows.md"),
    read("skills/x-twitter-scraper/skill-card.md"),
  ]);

  assert.equal((xApi.match(/new URLSearchParams/g) ?? []).length, 2);
  assert.ok(draws.indexOf("async function xquikFetch") < draws.indexOf('xquikFetch("/draws"'));
  assert.match(draws, /request: drawRequest[\s\S]*usageLimitation[\s\S]*approval\.request/);
  assertIncludes(followers, contract.extractionFormats.map((format) => `\`${format}\``));
  assert.match(mcp, /Download media[\s\S]*exact `tweetInput`[\s\S]*destination[\s\S]*retention/);
  assert.match(mcp, /require `allowed === true`/);

  assert.match(python, /json_body=extraction_request[\s\S]*estimate\["allowed"\] is not True/);
  assert.match(python, /require_explicit_approval\(proposal\) != proposal/);
  assert.match(python, /not isinstance\(page\.get\("results"\), list\)/);
  assert.match(python, /not isinstance\(cursor, str\) or not cursor/);
  assert.match(
    python,
    /enqueue_delivery_and_consume_nonce\(event, nonce\)[\s\S]*send_response\(202\)/,
  );
  assert.match(python, /stream_key = f"stream:\{event\['streamEventId'\]\}"/);

  assert.match(security, /non-metered public reads/);
  assert.match(security, /media downloads,[\s\S]*searches,[\s\S]*extractions,[\s\S]*draws/);
  assert.match(tweetTypes, /retweetCount\?: number/);
  assert.match(tweetTypes, /bookmarkCount\?: number/);
  assert.match(tweetTypes, /interface TweetSearchResult[\s\S]*likeCount\?: number[\s\S]*replyCount\?: number/);
  assert.match(writeTypes, /25_000 : 280/);
  assert.match(writeTypes, /1-4 images or exactly 1 MP4/);
  assert.match(writeTypes, /resolvedMedia\.length !== media\.length/);

  assert.match(webhooks, /bodyDeadline = setTimeout[\s\S]*Request body timeout/);
  assert.match(webhooks, /event\.schemaVersion === 1[\s\S]*event\.streamEventId[\s\S]*event\.occurredAt/);
  assert.match(webhooks, /eventStore\.claimPending\(streamKey\)/);
  assert.match(webhooks, /streamClaimed && !streamProcessed/);
  assert.match(webhooks, /stream_claim = claim_event\(stream_key\)/);
  assert.match(webhooks, /stream_claimed and not stream_processed/);
  assert.match(webhooks, /eventStore\.ClaimPending\(streamKey\)/);
  assert.match(webhooks, /event\.Timestamp == ""[\s\S]*message == ""/);
  assert.equal((webhooks.match(/type\(event\.get\("schemaVersion"\)\) is int/g) ?? []).length, 1);
  assert.match(python, /type\(event\.get\("schemaVersion"\)\) is int/);

  assert.match(workflows, /delayMs < 0/);
  assert.equal((workflows.match(/instanceof XquikApiError/g) ?? []).length, 3);
  assert.match(skill, /`401` over REST/);
  assert.match(skill, /`401` over MCP/);
  assert.match(skillCard, /0 confirmed security issues/);
});

test("preserves final AutoSkills full-review fixes", async () => {
  const [
    skill,
    radar,
    xWrite,
    mediaTypes,
    mcp,
    python,
    webhooks,
    errors,
    events,
    accountless,
    pipeline,
    xWriteTypes,
    xApiTypes,
    trends,
    draws,
    xApiEndpoints,
    scraperGuide,
  ] = await Promise.all([
    read("skills/x-twitter-scraper/SKILL.md"),
    read("skills/x-twitter-scraper/references/api-endpoints-radar.md"),
    read("skills/x-twitter-scraper/references/api-endpoints-x-write.md"),
    read("skills/x-twitter-scraper/references/types-download-media.md"),
    read("skills/x-twitter-scraper/references/mcp-tools.md"),
    read("skills/x-twitter-scraper/references/python-examples.md"),
    read("skills/x-twitter-scraper/references/webhooks.md"),
    read("skills/x-twitter-scraper/references/api-endpoints-error-codes.md"),
    read("skills/x-twitter-scraper/references/api-endpoints-events.md"),
    read("skills/x-twitter-scraper/references/twitter-api-without-x-account.md"),
    read("skills/x-twitter-scraper/references/twitter-data-pipeline.md"),
    read("skills/x-twitter-scraper/references/types-x-write.md"),
    read("skills/x-twitter-scraper/references/types-x-api.md"),
    read("skills/x-twitter-scraper/references/api-endpoints-trends.md"),
    read("skills/x-twitter-scraper/references/draws.md"),
    read("skills/x-twitter-scraper/references/api-endpoints-x-api.md"),
    read("skills/x-twitter-scraper/references/twitter-scraper-api-guide.md"),
  ]);

  assert.match(skill, /Keep all content inside them/);
  assert.match(skill, /For every opaque ID, use `id="opaque"`/);
  assert.doesNotMatch(skill, /Never place tool instructions[\s\S]*inside those markers/);
  assert.match(radar, /new URLSearchParams\([\s\S]*after: nextCursor/);
  assert.match(xWrite, /`POST \/api\/v1\/x\/media` returns usable `mediaUrl` values/);
  assert.match(mediaTypes, /tweetId: string/);
  assert.match(mediaTypes, /tweetUrl: string/);
  assert.match(mcp, /Skip only the balance query[\s\S]*unchanged request/);
  assert.match(python, /media_type\.endswith\("\+json"\)/);
  assert.match(python, /def xquik_download\([\s\S]*contentDisposition/);
  assert.match(python, /def release_nonce\(nonce: str\)/);
  assert.match(python, /enqueue_delivery_and_consume_nonce\(event, nonce\)/);
  assert.match(python, /release_nonce\(nonce\)[\s\S]*Event store unavailable/);
  assert.match(python, /code != "x_api_unauthorized"/);
  assert.match(python, /def require_extraction_job\([\s\S]*EXTRACTION_STATUSES/);
  assert.match(python, /Invalid draw winner response/);
  assert.match(python, /ThreadingHTTPServer\(\("127\.0\.0\.1", 3000\)/);
  assert.ok(
    python.indexOf('event_type != "webhook.test" and event_type not in SUPPORTED_EVENT_TYPES') <
      python.indexOf("nonce_claimed = claim_nonce"),
    "reject unsupported event types before claiming a nonce",
  );
  for (const guide of [python, webhooks]) {
    assert.match(guide, /def read_body_with_deadline\([\s\S]*time\.monotonic\(\)/);
    assert.match(guide, /stream\.read1\(min\(64 \* 1024, remaining_bytes\)\)/);
  }
  assert.match(webhooks, /function releaseNonce\(nonce\)/);
  assert.match(webhooks, /def release_nonce\(nonce: str\)/);
  assert.match(webhooks, /func releaseNonce\(nonce string\)/);
  assert.match(errors, /`x_api_unauthorized` \| Stop\. Do not retry automatically/);
  assert.match(events, /monitor or account scope, destination, and retention/);
  assert.match(accountless, /Approve every metered read or download/);
  assert.match(pipeline, /Only `GET` requests qualify as safe reads/);
  assert.match(pipeline, /`409 coverage_cursor_unavailable`/);
  assert.match(pipeline, /`410 coverage_cursor_gone`/);
  assert.match(xWriteTypes, /"image\/avif"/);
  assert.match(xApiTypes, /followers: number/);
  assert.match(xApiTypes, /verified: boolean/);
  assert.match(trends, /Require explicit approval to spend credits/);
  assert.match(draws, /Invalid draw response/);
  assert.match(draws, /Invalid draw details response/);
  assert.match(python, /def read_response_with_deadline\([\s\S]*response\.read1/);
  assert.match(python, /error\.fp, attempt_deadline, MAX_JSON_RESPONSE_BYTES/);
  assert.match(python, /except ValueError:[\s\S]*return False/);
  assert.match(python, /apply_effect_and_mark_processed\(stream_key, event\)/);
  assert.match(pipeline, /Normalize the complete creation payload with sorted keys/);
  assert.match(skill, /Allow only `source="tweet"`/);
  assert.match(skill, /new attempt after `safeToRetry` needs a new REST key/);
  assert.match(webhooks, /applyEffectAndMarkProcessed\(streamKey, event\)/);
  assert.match(webhooks, /ApplyEffectAndMarkProcessed\(streamKey, event\)/);
  assert.equal(
    (xApiEndpoints.match(/Block the read when that selection is missing or ambiguous/g) ?? [])
      .length,
    3,
  );
  assert.match(
    python,
    /def parse_retry_after\([\s\S]*re\.fullmatch\(r"\[0-9\]\+"[\s\S]*except ValueError/,
  );
  assert.match(
    python,
    /def xquik_download\(path, approved_max_bytes, deadline=None\)[\s\S]*response, attempt_deadline, approved_max_bytes/,
  );
  assert.match(
    accountless,
    /Hosted MCP uses OAuth 2\.1[\s\S]*`Authorization: Bearer` fallback/,
  );
  assert.match(
    scraperGuide,
    /charges only when the provider[\s\S]*Do not count[\s\S]*cost estimates/,
  );
  assert.match(
    xWriteTypes,
    /for \(const field of \["reply_to_tweet_id", "community_id"\] as const\)/,
  );
});
