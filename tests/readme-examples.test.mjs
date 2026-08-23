import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const readmePath = new URL("../README.md", import.meta.url);

function section(source, start, end) {
  const content = source.split(start, 2)[1];
  assert.ok(content, `Missing section ${start}`);
  return end ? content.split(end, 1)[0] : content;
}

test("keeps every README example bounded and contract-shaped", async () => {
  const readme = await readFile(readmePath, "utf8");
  const examples = [...readme.matchAll(/```[^\n]*\n[\s\S]*?\n```/g)].map(
    (match) => match[0],
  );
  const quickstart = section(
    readme,
    "## Run one request",
    "## Is Xquik the best X API alternative?",
  );
  const code = section(
    readme,
    "## Code examples",
    "## Bulk extraction and estimates",
  );
  const bulk = section(
    readme,
    "## Bulk extraction and estimates",
    "## Filters, deduplication, and billing",
  );
  const monitoring = section(
    readme,
    "## Monitoring, events, and webhooks",
    "## Account and agent safety",
  );

  assert.equal(examples.length, 16);
  for (const token of [
    "q=machine learning",
    "language=en",
    "minLikes=100",
    "replies=exclude",
    "retweets=exclude",
    "quotes=exclude",
    "limit=25",
  ]) {
    assert.ok(quickstart.includes(token), token);
  }
  for (const field of [
    "id: string",
    "text: string",
    "likeCount: number",
    "retweetCount: number",
    "replyCount: number",
    "quoteCount: number",
    "viewCount: number",
    "bookmarkCount: number",
    "has_next_page: boolean",
    "next_cursor: string",
  ]) {
    assert.ok(quickstart.includes(field), field);
  }
  assert.doesNotMatch(quickstart, /"tweets"\s*:\s*\[/u);

  for (const token of [
    "new URL(\"https://xquik.com/api/v1/x/tweets/search\")",
    "requests.get(",
    "bun add x-twitter-scraper",
    "client.x.tweets.search({",
    'xquik.request("/api/v1/x/tweets/search"',
    "x-twitter-scraper x:tweets search",
    "--min-faves 100",
    '"searchTerms": ["machine learning"]',
    '"maxItems": 25',
  ]) {
    assert.ok(code.includes(token), token);
  }
  assert.doesNotMatch(code, /--min-likes/u);

  for (const token of [
    "/api/v1/extractions/estimate",
    '"toolType": "tweet_search_extractor"',
    '"dedupeAcrossTargets": true',
    '"resultsLimit": 1000',
    "estimatedResults",
    "creditsRequired",
    "creditsAvailable",
  ]) {
    assert.ok(bulk.includes(token), token);
  }
  for (const token of [
    "/api/v1/monitors/keywords",
    '"query": "xquik OR \\"x api\\""',
    '"eventTypes": ["tweet.new"]',
    "X-Xquik-Timestamp",
    "X-Xquik-Nonce",
    "X-Xquik-Signature",
  ]) {
    assert.ok(monitoring.includes(token), token);
  }
});
