---
name: x-twitter-scraper
description: Build integrations with the Xquik X (Twitter) real-time data platform REST API, webhooks, and MCP server. Use this skill when working with Xquik endpoints, building apps that monitor X accounts, extract Twitter/X data (followers, replies, retweets, communities, lists, Spaces), run giveaway draws, look up tweets/users, check follow relationships, or set up webhook delivery. Activate whenever the user mentions Xquik, xquik.com, X data extraction, Twitter scraping, tweet monitoring, giveaway draws on X, or connecting AI agents to X/Twitter data via MCP. Also use when the user needs help choosing the right Xquik endpoint, handling API errors, verifying webhook signatures, or setting up cursor pagination.
license: MIT
metadata:
  author: Xquik
  version: "1.1.0"
---

# Xquik API Integration

Xquik is an X (Twitter) real-time data platform providing a REST API, HMAC webhooks, and an MCP server for AI agents. It covers account monitoring, bulk data extraction (19 tools), giveaway draws, tweet/user lookups, follow checks, and trending topics.

## Quick Reference

| | |
|---|---|
| **Base URL** | `https://xquik.com/api/v1` |
| **Auth** | `x-api-key: xq_...` header (64 hex chars after `xq_` prefix) |
| **MCP endpoint** | `https://xquik.com/mcp` (StreamableHTTP, same API key) |
| **Rate limits** | 10 req/s sustained, 20 burst (API); 60 req/s sustained, 100 burst (general) |
| **Pricing** | $20/month base (1 monitor included), $10/month per extra monitor |
| **Quota** | Monthly usage cap, hard limit, no overage. `402` when exhausted. |
| **Docs** | [docs.xquik.com](https://docs.xquik.com) |
| **HTTPS only** | Plain HTTP gets `301` redirect |

## Authentication

Every request requires an API key via the `x-api-key` header. Keys start with `xq_` and are generated from the Xquik dashboard. The key is shown only once at creation -- store it securely.

```javascript
const API_KEY = "xq_YOUR_KEY_HERE";
const BASE = "https://xquik.com/api/v1";
const headers = { "x-api-key": API_KEY, "Content-Type": "application/json" };
```

```python
import requests

API_KEY = "xq_YOUR_KEY_HERE"
BASE = "https://xquik.com/api/v1"
HEADERS = {"x-api-key": API_KEY, "Content-Type": "application/json"}
```

## Choosing the Right Endpoint

| Goal | Endpoint | Notes |
|------|----------|-------|
| **Get a single tweet** by ID/URL | `GET /x/tweets/{id}` | Full metrics: likes, retweets, views, bookmarks, author info |
| **Search tweets** by keyword/hashtag | `GET /x/tweets/search?q=...` | Basic tweet info only (no engagement metrics) |
| **Get a user profile** | `GET /x/users/{username}` | Bio, follower/following counts, profile picture |
| **Check follow relationship** | `GET /x/follows/check?source=A&target=B` | Both directions |
| **Get trending topics** | `GET /trends?woeid=1` | Free, no quota consumed |
| **Monitor an X account** | `POST /monitors` | Track tweets, replies, quotes, retweets, follower changes |
| **Poll for events** | `GET /events` | Cursor-paginated, filter by monitorId/eventType |
| **Receive events in real time** | `POST /webhooks` | HMAC-signed delivery to your HTTPS endpoint |
| **Run a giveaway draw** | `POST /draws` | Pick random winners from tweet replies |
| **Extract bulk data** | `POST /extractions` | 19 tool types, always estimate cost first |
| **Check account/usage** | `GET /account` | Plan status, monitors, usage percent |

**Common mistakes:**
- Do NOT use extractions to get follower/following COUNT -- use `GET /x/users/{username}`
- Do NOT use extractions to get retweet/reply/like COUNTS -- use `GET /x/tweets/{id}`
- Do NOT use search to find a specific tweet by ID -- use `GET /x/tweets/{id}`
- Always call `POST /extractions/estimate` before running large extractions
- Likes and bookmarks of a user are NOT available (X API limitation)

## Error Handling & Retry

All errors return `{ "error": "error_code" }`. Key error codes:

| Status | Code | Action |
|--------|------|--------|
| 400 | `invalid_input`, `invalid_id`, `invalid_tweet_url`, `invalid_username`, `invalid_tool_type` | Fix the request, do not retry |
| 401 | `unauthenticated` | Check API key |
| 402 | `no_subscription`, `subscription_inactive`, `usage_limit_reached` | Subscribe or wait for quota reset |
| 403 | `monitor_limit_reached` | Delete a monitor or add capacity ($10/month) |
| 404 | `not_found` | Resource doesn't exist or belongs to another account |
| 409 | `monitor_already_exists` | Monitor exists, use the existing one |
| 429 | - | Rate limited. Retry with exponential backoff, respect `Retry-After` header |
| 500 | `internal_error` | Retry with backoff |
| 502 | `x_api_unavailable` | X API down, retry with backoff |

Retry only `429` and `5xx`. Never retry `4xx` (except 429). Max 3 retries with exponential backoff:

```javascript
async function xquikFetch(path, options = {}) {
  const baseDelay = 1000;

  for (let attempt = 0; attempt <= 3; attempt++) {
    const response = await fetch(`${BASE}${path}`, {
      ...options,
      headers: { ...headers, ...options.headers },
    });

    if (response.ok) return response.json();

    const retryable = response.status === 429 || response.status >= 500;
    if (!retryable || attempt === 3) {
      const error = await response.json();
      throw new Error(`Xquik API ${response.status}: ${error.error}`);
    }

    const retryAfter = response.headers.get("Retry-After");
    const delay = retryAfter
      ? parseInt(retryAfter, 10) * 1000
      : baseDelay * Math.pow(2, attempt) + Math.random() * 1000;

    await new Promise((resolve) => setTimeout(resolve, delay));
  }
}
```

```python
import time, random

def xquik_fetch(path, method="GET", json_body=None, max_retries=3):
    base_delay = 1.0

    for attempt in range(max_retries + 1):
        response = requests.request(
            method,
            f"{BASE}{path}",
            headers=HEADERS,
            json=json_body,
        )

        if response.ok:
            return response.json()

        retryable = response.status_code == 429 or response.status_code >= 500
        if not retryable or attempt == max_retries:
            error = response.json()
            raise Exception(f"Xquik API {response.status_code}: {error['error']}")

        retry_after = response.headers.get("Retry-After")
        delay = int(retry_after) if retry_after else base_delay * (2 ** attempt) + random.uniform(0, 1)
        time.sleep(delay)
```

## Cursor Pagination

Events, draws, extractions, and extraction results use cursor-based pagination. When more results exist, the response includes `hasMore: true` and a `nextCursor` string. Pass `nextCursor` as the `after` query parameter.

```javascript
async function fetchAllPages(path, dataKey) {
  const results = [];
  let cursor;

  while (true) {
    const url = new URL(`${BASE}${path}`);
    url.searchParams.set("limit", "100");
    if (cursor) url.searchParams.set("after", cursor);

    const data = await xquikFetch(`${path}?${url.searchParams}`);
    results.push(...data[dataKey]);

    if (!data.hasMore) break;
    cursor = data.nextCursor;
  }

  return results;
}
```

Cursors are opaque strings -- never decode or construct them manually.

## Extraction Tools (19 Types)

Extractions run bulk data collection jobs. The complete workflow: estimate cost, create job, retrieve results, optionally export.

### Tool Types and Required Parameters

| Tool Type | Required Field | Description |
|-----------|---------------|-------------|
| `reply_extractor` | `targetTweetId` | Users who replied to a tweet |
| `repost_extractor` | `targetTweetId` | Users who retweeted a tweet |
| `quote_extractor` | `targetTweetId` | Users who quote-tweeted a tweet |
| `thread_extractor` | `targetTweetId` | All tweets in a thread |
| `article_extractor` | `targetTweetId` | Article content linked in a tweet |
| `follower_explorer` | `targetUsername` | Followers of an account |
| `following_explorer` | `targetUsername` | Accounts followed by a user |
| `verified_follower_explorer` | `targetUsername` | Verified followers of an account |
| `mention_extractor` | `targetUsername` | Tweets mentioning an account |
| `post_extractor` | `targetUsername` | Posts from an account |
| `community_extractor` | `targetCommunityId` | Members of a community |
| `community_moderator_explorer` | `targetCommunityId` | Moderators of a community |
| `community_post_extractor` | `targetCommunityId` | Posts from a community |
| `community_search` | `targetCommunityId` + `searchQuery` | Search posts within a community |
| `list_member_extractor` | `targetListId` | Members of a list |
| `list_post_extractor` | `targetListId` | Posts from a list |
| `list_follower_explorer` | `targetListId` | Followers of a list |
| `space_explorer` | `targetSpaceId` | Participants of a Space |
| `people_search` | `searchQuery` | Search for users by keyword |

### Complete Extraction Workflow

```javascript
// Step 1: Estimate cost before running
const estimate = await xquikFetch("/extractions/estimate", {
  method: "POST",
  body: JSON.stringify({
    toolType: "follower_explorer",
    targetUsername: "elonmusk",
  }),
});
// Response: { allowed: true, estimatedResults: 195000000, usagePercent: 12, projectedPercent: 98 }

if (!estimate.allowed) {
  console.log("Extraction would exceed monthly quota");
  return;
}

// Step 2: Create extraction job
const job = await xquikFetch("/extractions", {
  method: "POST",
  body: JSON.stringify({
    toolType: "follower_explorer",
    targetUsername: "elonmusk",
  }),
});
// Response: { id: "77777", toolType: "follower_explorer", status: "completed", totalResults: 195000 }

// Step 3: Retrieve paginated results (up to 1,000 per page)
let cursor;
const allResults = [];

while (true) {
  const path = `/extractions/${job.id}${cursor ? `?after=${cursor}` : ""}`;
  const page = await xquikFetch(path);
  allResults.push(...page.results);
  // Each result: { xUserId, xUsername, xDisplayName, xFollowersCount, xVerified, xProfileImageUrl }

  if (!page.hasMore) break;
  cursor = page.nextCursor;
}

// Step 4: Export as CSV/XLSX/Markdown (50,000 row limit)
const exportUrl = `${BASE}/extractions/${job.id}/export?format=csv&type=users`;
const csvResponse = await fetch(exportUrl, { headers });
const csvData = await csvResponse.text();
```

```python
# Step 1: Estimate
estimate = xquik_fetch("/extractions/estimate", method="POST", json_body={
    "toolType": "reply_extractor",
    "targetTweetId": "1893704267862470862",
})

if not estimate["allowed"]:
    print(f"Would exceed quota: {estimate['projectedPercent']}%")
    exit()

# Step 2: Create job
job = xquik_fetch("/extractions", method="POST", json_body={
    "toolType": "reply_extractor",
    "targetTweetId": "1893704267862470862",
})

# Step 3: Get results
cursor = None
results = []

while True:
    path = f"/extractions/{job['id']}"
    if cursor:
        path += f"?after={cursor}"
    page = xquik_fetch(path)
    results.extend(page["results"])

    if not page["hasMore"]:
        break
    cursor = page["nextCursor"]

print(f"Extracted {len(results)} results")
```

### Orchestrating Multiple Extractions

When building applications that combine multiple extraction tools (e.g., market research), run them sequentially and respect rate limits:

```javascript
async function marketResearchPipeline(username) {
  // 1. Get user profile
  const user = await xquikFetch(`/x/users/${username}`);

  // 2. Extract their recent posts
  const postsJob = await xquikFetch("/extractions", {
    method: "POST",
    body: JSON.stringify({ toolType: "post_extractor", targetUsername: username }),
  });

  // 3. Search for related conversations
  const tweets = await xquikFetch(`/x/tweets/search?q=from:${username}`);

  // 4. For top tweets, extract replies for sentiment analysis
  for (const tweet of tweets.tweets.slice(0, 5)) {
    const estimate = await xquikFetch("/extractions/estimate", {
      method: "POST",
      body: JSON.stringify({ toolType: "reply_extractor", targetTweetId: tweet.id }),
    });

    if (estimate.allowed) {
      const repliesJob = await xquikFetch("/extractions", {
        method: "POST",
        body: JSON.stringify({ toolType: "reply_extractor", targetTweetId: tweet.id }),
      });
      // Process replies...
    }
  }

  // 5. Get trending topics for context (free, no quota)
  const trends = await xquikFetch("/trends?woeid=1");

  return { user, posts: postsJob, tweets, trends };
}
```

## Giveaway Draws

Run transparent, auditable giveaway draws from tweet replies with configurable filters.

### Create Draw Request

`POST /draws` with a `tweetUrl` (required) and optional filters:

| Field | Type | Description |
|-------|------|-------------|
| `tweetUrl` | string | **Required.** Full tweet URL: `https://x.com/user/status/ID` |
| `winnerCount` | number | Winners to select (default 1) |
| `backupCount` | number | Backup winners to select |
| `uniqueAuthorsOnly` | boolean | Count only one entry per author |
| `mustRetweet` | boolean | Require participants to have retweeted |
| `mustFollowUsername` | string | Username participants must follow |
| `filterMinFollowers` | number | Minimum follower count |
| `filterAccountAgeDays` | number | Minimum account age in days |
| `filterLanguage` | string | Language code (e.g., `"en"`) |
| `requiredKeywords` | string[] | Words that must appear in the reply |
| `requiredHashtags` | string[] | Hashtags that must appear (e.g., `["#giveaway"]`) |
| `requiredMentions` | string[] | Usernames that must be mentioned (e.g., `["@xquik"]`) |

### Complete Draw Workflow

```javascript
// Step 1: Create draw with filters
const draw = await xquikFetch("/draws", {
  method: "POST",
  body: JSON.stringify({
    tweetUrl: "https://x.com/burakbayir/status/1893456789012345678",
    winnerCount: 3,
    backupCount: 2,
    uniqueAuthorsOnly: true,
    mustRetweet: true,
    mustFollowUsername: "burakbayir",
    filterMinFollowers: 50,
    filterAccountAgeDays: 30,
    filterLanguage: "en",
    requiredHashtags: ["#giveaway"],
  }),
});
// Response:
// {
//   id: "42",
//   tweetId: "1893456789012345678",
//   tweetUrl: "https://x.com/burakbayir/status/1893456789012345678",
//   tweetText: "Giveaway! RT + Follow to enter...",
//   tweetAuthorUsername: "burakbayir",
//   tweetLikeCount: 5200,
//   tweetRetweetCount: 3100,
//   tweetReplyCount: 890,
//   tweetQuoteCount: 45,
//   status: "completed",
//   totalEntries: 890,
//   validEntries: 312,
//   createdAt: "2026-02-24T10:00:00.000Z",
//   drawnAt: "2026-02-24T10:01:00.000Z"
// }

// Step 2: Get draw details with winners
const details = await xquikFetch(`/draws/${draw.id}`);
// details.winners: [
//   { position: 1, authorUsername: "winner1", tweetId: "...", isBackup: false },
//   { position: 2, authorUsername: "winner2", tweetId: "...", isBackup: false },
//   { position: 3, authorUsername: "winner3", tweetId: "...", isBackup: false },
//   { position: 4, authorUsername: "backup1", tweetId: "...", isBackup: true },
//   { position: 5, authorUsername: "backup2", tweetId: "...", isBackup: true },
// ]

// Step 3: Export results
const exportUrl = `${BASE}/draws/${draw.id}/export?format=csv`;
```

```python
# Create draw with all filters
draw = xquik_fetch("/draws", method="POST", json_body={
    "tweetUrl": "https://x.com/burakbayir/status/1893456789012345678",
    "winnerCount": 3,
    "backupCount": 2,
    "uniqueAuthorsOnly": True,
    "mustRetweet": True,
    "mustFollowUsername": "burakbayir",
    "filterMinFollowers": 50,
    "filterAccountAgeDays": 30,
    "requiredKeywords": ["giveaway"],
})

# Get winners
details = xquik_fetch(f"/draws/{draw['id']}")
for winner in details["winners"]:
    role = "BACKUP" if winner["isBackup"] else "WINNER"
    print(f"{role} #{winner['position']}: @{winner['authorUsername']}")
```

## Webhook Event Handling

Webhooks deliver events to your HTTPS endpoint with HMAC-SHA256 signatures. Each delivery is a POST with `X-Xquik-Signature` header and JSON body containing `eventType`, `username`, and `data`.

### Complete Webhook Handler with Event-Type Routing

```javascript
import express from "express";
import { createHmac, timingSafeEqual, createHash } from "node:crypto";

const WEBHOOK_SECRET = process.env.XQUIK_WEBHOOK_SECRET;
const processedHashes = new Set(); // Use Redis/DB in production

function verifySignature(payload, signature, secret) {
  const expected = "sha256=" + createHmac("sha256", secret).update(payload).digest("hex");
  return timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
}

const app = express();

app.post("/webhook", express.raw({ type: "application/json" }), (req, res) => {
  const signature = req.headers["x-xquik-signature"];
  const payload = req.body.toString();

  // 1. Verify HMAC signature (constant-time comparison)
  if (!signature || !verifySignature(payload, signature, WEBHOOK_SECRET)) {
    return res.status(401).send("Invalid signature");
  }

  // 2. Deduplicate (retries can deliver the same event twice)
  const payloadHash = createHash("sha256").update(payload).digest("hex");
  if (processedHashes.has(payloadHash)) {
    return res.status(200).send("Already processed");
  }
  processedHashes.add(payloadHash);

  // 3. Parse and route by event type
  const event = JSON.parse(payload);

  switch (event.eventType) {
    case "tweet.new":
      handleNewTweet(event.username, event.data);
      break;
    case "tweet.reply":
      handleReply(event.username, event.data);
      break;
    case "tweet.quote":
      handleQuote(event.username, event.data);
      break;
    case "tweet.retweet":
      handleRetweet(event.username, event.data);
      break;
    case "follower.gained":
      handleFollowerGained(event.username, event.data);
      break;
    case "follower.lost":
      handleFollowerLost(event.username, event.data);
      break;
  }

  // 4. Respond within 10 seconds (process async if slow)
  res.status(200).send("OK");
});

function handleNewTweet(username, data) {
  // data: { tweetId, text, metrics: { likes, retweets, replies } }
  console.log(`New tweet from @${username}: ${data.text}`);
  // Apply business logic: forward to Slack, store in DB, trigger alerts...
}

function handleReply(username, data) {
  console.log(`Reply from @${username}: ${data.text}`);
}

function handleQuote(username, data) {
  console.log(`Quote tweet from @${username}: ${data.text}`);
}

function handleRetweet(username, data) {
  console.log(`Retweet by @${username}`);
}

function handleFollowerGained(username, data) {
  console.log(`@${username} gained a follower`);
}

function handleFollowerLost(username, data) {
  console.log(`@${username} lost a follower`);
}

app.listen(3000);
```

```python
import hmac, hashlib, json, os
from flask import Flask, request

app = Flask(__name__)
WEBHOOK_SECRET = os.environ["XQUIK_WEBHOOK_SECRET"]
processed_hashes = set()  # Use Redis/DB in production

def verify_signature(payload: bytes, signature: str, secret: str) -> bool:
    expected = "sha256=" + hmac.new(secret.encode(), payload, hashlib.sha256).hexdigest()
    return hmac.compare_digest(expected, signature)

EVENT_HANDLERS = {
    "tweet.new": lambda u, d: print(f"New tweet from @{u}: {d['text']}"),
    "tweet.reply": lambda u, d: print(f"Reply from @{u}: {d['text']}"),
    "tweet.quote": lambda u, d: print(f"Quote from @{u}: {d['text']}"),
    "tweet.retweet": lambda u, d: print(f"Retweet by @{u}"),
    "follower.gained": lambda u, d: print(f"@{u} gained a follower"),
    "follower.lost": lambda u, d: print(f"@{u} lost a follower"),
}

@app.route("/webhook", methods=["POST"])
def webhook():
    signature = request.headers.get("X-Xquik-Signature", "")
    payload = request.get_data()

    if not verify_signature(payload, signature, WEBHOOK_SECRET):
        return "Invalid signature", 401

    payload_hash = hashlib.sha256(payload).hexdigest()
    if payload_hash in processed_hashes:
        return "Already processed", 200
    processed_hashes.add(payload_hash)

    event = json.loads(payload)
    handler = EVENT_HANDLERS.get(event["eventType"])
    if handler:
        handler(event["username"], event["data"])

    return "OK", 200
```

Webhook security rules:
- Always verify signature before processing (constant-time comparison)
- Compute HMAC over raw body bytes, not re-serialized JSON
- Respond `200` within 10 seconds; queue slow processing for async
- Deduplicate by payload hash (retries can deliver same event twice)
- Store webhook secret in environment variables, never hardcode
- Retry policy: 5 attempts with exponential backoff on failure

## Real-Time Monitoring Setup

Complete end-to-end: create monitor, register webhook, handle events.

```javascript
// 1. Create monitor
const monitor = await xquikFetch("/monitors", {
  method: "POST",
  body: JSON.stringify({
    username: "elonmusk",
    eventTypes: ["tweet.new", "tweet.reply", "tweet.quote", "follower.gained"],
  }),
});
// Response: { id: "7", username: "elonmusk", xUserId: "44196397", eventTypes: [...], isActive: true }

// 2. Register webhook
const webhook = await xquikFetch("/webhooks", {
  method: "POST",
  body: JSON.stringify({
    url: "https://your-server.com/webhook",
    eventTypes: ["tweet.new", "tweet.reply"],
  }),
});
// IMPORTANT: Save webhook.secret -- it's shown only once!

// 3. Poll events (alternative to webhooks)
const events = await xquikFetch("/events?monitorId=7&limit=50");
// Response: { events: [...], hasMore: false }
```

Event types: `tweet.new`, `tweet.quote`, `tweet.reply`, `tweet.retweet`, `follower.gained`, `follower.lost`.

## MCP Server (AI Agents)

The MCP server at `https://xquik.com/mcp` exposes 21 tools using StreamableHTTP transport and the same API key auth. Supported platforms: Claude Desktop, Claude Code, ChatGPT (Agents SDK), Codex CLI, Cursor, VS Code, Windsurf, OpenCode.

For setup configs per platform, read `references/mcp-setup.md`.

## Pricing & Quota

- **Base plan**: $20/month (1 monitor, monthly usage quota)
- **Extra monitors**: $10/month each
- **Free**: account info, monitor/webhook management, trends, extraction history
- **Metered**: tweet search, user lookup, tweet lookup, follow check, extractions, draws
- **Quota enforcement**: hard limit, `402 usage_limit_reached` when exhausted
- **Check usage**: `GET /account` returns `usagePercent` (0-100)

## Conventions

- **IDs are strings** -- bigint values, treat as opaque strings, never parse as numbers
- **Timestamps are ISO 8601 UTC** -- e.g., `2026-02-24T10:30:00.000Z`
- **Errors return JSON** -- `{ "error": "error_code" }`
- **Cursors are opaque** -- pass `nextCursor` as the `after` query parameter, never decode
- Export formats: `csv`, `xlsx`, `md` via `GET /extractions/{id}/export?format=csv&type=users` or `GET /draws/{id}/export?format=csv`

## Unsupported Operations

- Tweets a user liked or bookmarked
- Posting tweets, liking, retweeting, following
- DMs or private/protected account data

## Reference Files

For additional detail beyond this guide:

- **`references/api-endpoints.md`** -- All REST API endpoints with methods, paths, parameters, and response shapes
- **`references/webhooks.md`** -- Extended webhook examples, local testing with ngrok, delivery status monitoring
- **`references/mcp-setup.md`** -- MCP server configuration for 8 IDEs and AI agent platforms
- **`references/extractions.md`** -- Extraction tool details, export columns, common mistakes
- **`references/types.md`** -- Copy-pasteable TypeScript type definitions for all API objects
