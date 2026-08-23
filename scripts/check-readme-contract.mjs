import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const specSource = process.argv[2] ?? "https://xquik.com/openapi.json";
const framerDemo = `<table>
  <tr>
    <td align="center">
      <a href="https://youtu.be/4UOSpoOoC3Y?t=367">
        <img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" alt="Framer connects Xquik MCP to coding agents" width="720">
      </a>
      <br>
      <strong>Framer demo</strong>
      <br>
      <sub>Watch <a href="https://youtu.be/4UOSpoOoC3Y?t=367">Connect Framer to Claude Code, Codex, Cursor, and more</a> at 6:07 for the Xquik MCP connection.</sub>
    </td>
  </tr>
</table>`;

function resolveRef(spec, ref) {
  assert.match(ref, /^#\//u);
  return ref
    .slice(2)
    .split("/")
    .reduce((value, segment) => value?.[segment], spec);
}

function schemaParts(spec, schema, seen = new Set()) {
  if (!schema || typeof schema !== "object") return [];
  if (schema.$ref) {
    if (seen.has(schema.$ref)) return [];
    const nextSeen = new Set(seen).add(schema.$ref);
    return schemaParts(spec, resolveRef(spec, schema.$ref), nextSeen);
  }
  return [
    schema,
    ...(schema.allOf ?? []).flatMap((part) => schemaParts(spec, part, seen)),
    ...(schema.oneOf ?? []).flatMap((part) => schemaParts(spec, part, seen)),
  ];
}

function schemaNames(spec, schema, key) {
  return new Set(
    schemaParts(spec, schema).flatMap((part) =>
      key === "properties"
        ? Object.keys(part.properties ?? {})
        : (part.required ?? []),
    ),
  );
}

function operationCount(spec) {
  const methods = new Set([
    "get",
    "put",
    "post",
    "delete",
    "options",
    "head",
    "patch",
    "trace",
  ]);
  return Object.values(spec.paths ?? {}).reduce(
    (count, path) =>
      count + Object.keys(path).filter((method) => methods.has(method)).length,
    0,
  );
}

function parameterNames(spec, operation) {
  return new Set(
    (operation.parameters ?? []).map((parameter) => {
      const resolved = parameter.$ref
        ? resolveRef(spec, parameter.$ref)
        : parameter;
      return resolved.name;
    }),
  );
}

function requireNames(actual, expected, label) {
  for (const name of expected) {
    assert.ok(actual.has(name), `${label} is missing ${name}`);
  }
}

async function loadSpec(source) {
  if (/^https?:\/\//u.test(source)) {
    const response = await fetch(source, {
      headers: { accept: "application/json" },
      signal: AbortSignal.timeout(30_000),
    });
    assert.equal(response.ok, true, `${source}: HTTP ${response.status}`);
    return response.json();
  }
  return JSON.parse(await readFile(source, "utf8"));
}

const [readme, spec] = await Promise.all([
  readFile(new URL("README.md", root), "utf8"),
  loadSpec(specSource),
]);

assert.match(
  readme,
  /^# X \(Twitter\) Scraper API \(Best X API Alternative\)$/mu,
);
assert.ok(readme.includes(framerDemo), "Framer demo changed or is hidden");

const search = spec.paths?.["/api/v1/x/tweets/search"]?.get;
assert.ok(search, "Tweet search route is missing");
requireNames(
  parameterNames(spec, search),
  ["q", "language", "minLikes", "replies", "retweets", "quotes", "limit"],
  "Tweet search",
);

const searchResponse =
  search.responses?.["200"]?.content?.["application/json"]?.schema;
const pageBranch = searchResponse?.oneOf?.find((branch) =>
  branch.$ref?.endsWith("/PaginatedTweets"),
);
assert.ok(pageBranch, "Paginated Tweet response is missing");
const pageSchema = resolveRef(spec, pageBranch.$ref);
requireNames(
  schemaNames(spec, pageSchema, "required"),
  ["tweets", "has_next_page", "next_cursor"],
  "Tweet page",
);
requireNames(
  schemaNames(spec, pageSchema, "properties"),
  ["filtered_count", "tweets", "has_next_page", "next_cursor"],
  "Tweet page",
);

const tweetSchema = resolveRef(spec, pageSchema.properties.tweets.items.$ref);
const requiredTweetFields = [
  "id",
  "text",
  "likeCount",
  "retweetCount",
  "replyCount",
  "quoteCount",
  "viewCount",
  "bookmarkCount",
];
requireNames(
  schemaNames(spec, tweetSchema, "required"),
  requiredTweetFields,
  "Search Tweet",
);
for (const field of requiredTweetFields.slice(2)) {
  assert.match(readme, new RegExp(`    ${field}: number;`));
  assert.doesNotMatch(readme, new RegExp(`    ${field}\\?: number;`));
}

const estimate = spec.paths?.["/api/v1/extractions/estimate"]?.post;
assert.ok(estimate, "Extraction estimate route is missing");
const estimateRequest =
  estimate.requestBody?.content?.["application/json"]?.schema;
requireNames(
  schemaNames(spec, estimateRequest, "properties"),
  [
    "toolType",
    "searchQuery",
    "language",
    "minFaves",
    "replies",
    "retweets",
    "quotes",
    "dedupeAcrossTargets",
    "resultsLimit",
  ],
  "Extraction estimate request",
);
const estimateResponse =
  estimate.responses?.["200"]?.content?.["application/json"]?.schema;
requireNames(
  schemaNames(spec, estimateResponse, "required"),
  [
    "allowed",
    "estimatedResults",
    "creditsRequired",
    "creditsAvailable",
    "source",
  ],
  "Extraction estimate response",
);

const monitor = spec.paths?.["/api/v1/monitors/keywords"]?.post;
assert.ok(monitor, "Keyword monitor route is missing");
const monitorRequest =
  monitor.requestBody?.content?.["application/json"]?.schema;
requireNames(
  schemaNames(spec, monitorRequest, "required"),
  ["query", "eventTypes"],
  "Keyword monitor request",
);

const requiredResourcePaths = [
  "/api/v1/events",
  "/api/v1/extractions",
  "/api/v1/extractions/{id}/export",
  "/api/v1/monitors",
  "/api/v1/monitors/keywords",
  "/api/v1/support/tickets",
  "/api/v1/webhooks",
  "/api/v1/x/accounts",
  "/api/v1/x/articles/{tweetId}",
  "/api/v1/x/bookmarks",
  "/api/v1/x/communities",
  "/api/v1/x/communities/{id}/members",
  "/api/v1/x/dm/{userId}",
  "/api/v1/x/lists/{id}/members",
  "/api/v1/x/lists/{id}/tweets",
  "/api/v1/x/media",
  "/api/v1/x/media/download",
  "/api/v1/x/notifications",
  "/api/v1/x/profile",
  "/api/v1/x/timeline",
  "/api/v1/x/trends",
  "/api/v1/x/tweets",
  "/api/v1/x/tweets/{id}",
  "/api/v1/x/tweets/{id}/favoriters",
  "/api/v1/x/tweets/{id}/quotes",
  "/api/v1/x/tweets/{id}/replies",
  "/api/v1/x/tweets/{id}/retweet",
  "/api/v1/x/tweets/{id}/thread",
  "/api/v1/x/users/batch",
  "/api/v1/x/users/search",
  "/api/v1/x/users/{id}",
  "/api/v1/x/users/{id}/follow",
  "/api/v1/x/users/{id}/followers",
  "/api/v1/x/users/{id}/following",
  "/api/v1/x/users/{id}/media",
  "/api/v1/x/users/{id}/tweets",
  "/api/v1/x/write-actions/{id}",
];
requireNames(
  new Set(Object.keys(spec.paths ?? {})),
  requiredResourcePaths,
  "Resource coverage",
);

const extractionTypes = resolveRef(
  spec,
  spec.components.schemas.ExtractionRequest.properties.toolType.$ref,
).enum;
assert.equal(extractionTypes.length, 23);
for (const type of [
  "article_extractor",
  "community_extractor",
  "follower_explorer",
  "following_explorer",
  "list_post_extractor",
  "people_search",
  "quote_extractor",
  "reply_extractor",
  "repost_extractor",
  "space_explorer",
  "thread_extractor",
  "tweet_search_extractor",
]) {
  assert.ok(extractionTypes.includes(type), `Extraction types are missing ${type}`);
}

const count = operationCount(spec);
assert.equal(count, 128);
assert.match(readme, /128 REST API operations/u);
assert.match(readme, /--min-faves 100/u);
assert.doesNotMatch(readme, /--min-likes 100/u);

process.stdout.write(
  [
    "README contract check passed.",
    `Spec: ${specSource}`,
    `Operations: ${count}`,
    "Checked: examples, Framer media, 37 resource paths, 23 extraction types, and CLI flag.",
  ].join("\n") + "\n",
);
