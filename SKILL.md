---
name: x-twitter-scraper
description: Build integrations with the Xquik X (Twitter) real-time data platform REST API, webhooks, and MCP server. Use this skill when working with Xquik endpoints, building apps that monitor X accounts, extract Twitter/X data (followers, replies, retweets, communities, lists, Spaces), run giveaway draws, look up tweets/users, check follow relationships, or set up webhook delivery. Activate whenever the user mentions Xquik, xquik.com, X data extraction, Twitter scraping, tweet monitoring, giveaway draws on X, or connecting AI agents to X/Twitter data via MCP. Also use when the user needs help choosing the right Xquik endpoint, handling API errors, verifying webhook signatures, or setting up cursor pagination.
license: MIT
metadata:
  author: Xquik
  version: "1.0.0"
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

Every request requires an API key via the `x-api-key` header. Keys are generated from the Xquik dashboard and start with `xq_`.

```bash
curl https://xquik.com/api/v1/account \
  -H "x-api-key: xq_YOUR_KEY_HERE"
```

```javascript
const response = await fetch("https://xquik.com/api/v1/account", {
  headers: { "x-api-key": "xq_YOUR_KEY_HERE" },
});
```

```python
import requests

response = requests.get(
    "https://xquik.com/api/v1/account",
    headers={"x-api-key": "xq_YOUR_KEY_HERE"},
)
```

The API key is shown only once at creation. Store it securely. If compromised, revoke and regenerate.

## Choosing the Right Endpoint

Use this decision tree to pick the correct API call:

| Goal | Endpoint | Method |
|------|----------|--------|
| **Get a single tweet** by ID/URL | `GET /x/tweets/{id}` | Returns full metrics (likes, retweets, views, bookmarks) |
| **Search tweets** by keyword/hashtag/from:user | `GET /x/tweets/search?q=...` | Returns basic tweet info (no engagement metrics) |
| **Get a user profile** (bio, follower count) | `GET /x/users/{username}` | Does NOT return verification status |
| **Check follow relationship** | `GET /x/follows/check?source=A&target=B` | Returns both directions |
| **Get trending topics** | `GET /trends?woeid=1` | Free, no quota consumed |
| **Monitor an X account** | `POST /monitors` | Track tweets, replies, quotes, retweets, follower changes |
| **Poll for events** | `GET /events` | Cursor-paginated, filter by monitorId/eventType |
| **Receive events in real time** | `POST /webhooks` | HMAC-signed delivery to your HTTPS endpoint |
| **Run a giveaway draw** | `POST /draws` | Pick random winners from tweet replies |
| **Extract bulk data** (followers, replies, etc.) | `POST /extractions` | 19 tool types, estimate cost first |
| **Check account/usage** | `GET /account` | Plan status, monitors, usage percent |

**Common mistakes to avoid:**
- Do NOT use extractions to get follower/following COUNT -- use `GET /x/users/{username}`
- Do NOT use extractions to get retweet/reply/like COUNTS -- use `GET /x/tweets/{id}`
- Do NOT use search to find a specific tweet by ID -- use `GET /x/tweets/{id}`
- Always call `POST /extractions/estimate` before running large extractions
- Likes and bookmarks of a user are NOT available (X API limitation)

For the full endpoint reference, read `references/api-endpoints.md`.

## Core Patterns

### Cursor Pagination

Events, draws, and extractions use cursor-based pagination. When more results exist, the response includes `hasMore: true` and a `nextCursor` string.

```javascript
async function fetchAllEvents(apiKey, monitorId) {
  const results = [];
  let cursor;

  while (true) {
    const url = new URL("https://xquik.com/api/v1/events");
    url.searchParams.set("monitorId", monitorId);
    url.searchParams.set("limit", "50");
    if (cursor) url.searchParams.set("after", cursor);

    const res = await fetch(url, { headers: { "x-api-key": apiKey } });
    const { events, hasMore, nextCursor } = await res.json();
    results.push(...events);

    if (!hasMore) break;
    cursor = nextCursor;
  }

  return results;
}
```

Cursors are opaque strings -- never decode or construct them manually.

### Error Handling & Retry

All errors return `{ "error": "error_code" }`. Retry only on `429` and `5xx` with exponential backoff (max 3 attempts). Respect the `Retry-After` header on 429 responses.

```javascript
async function fetchWithRetry(url, options = {}, maxRetries = 3) {
  const baseDelay = 1000;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    const response = await fetch(url, options);

    if (response.ok) return response.json();

    const retryable = response.status === 429 || response.status >= 500;
    if (!retryable || attempt === maxRetries) {
      const error = await response.json();
      throw new Error(`API error ${response.status}: ${error.error}`);
    }

    const retryAfter = response.headers.get("Retry-After");
    const delay = retryAfter
      ? parseInt(retryAfter, 10) * 1000
      : baseDelay * Math.pow(2, attempt) + Math.random() * 1000;

    await new Promise((resolve) => setTimeout(resolve, delay));
  }
}
```

Key error codes: `unauthenticated` (401), `no_subscription` / `usage_limit_reached` (402), `monitor_limit_reached` (403), `not_found` (404), `monitor_already_exists` (409). Never retry 4xx errors (except 429).

### Webhook Signature Verification

Every webhook delivery has an `X-Xquik-Signature` header: `sha256=` + HMAC-SHA256(secret, raw body). Always verify before processing.

**Node.js:**
```javascript
import { createHmac, timingSafeEqual } from "node:crypto";

function verifySignature(payload, signature, secret) {
  const expected = "sha256=" + createHmac("sha256", secret).update(payload).digest("hex");
  return timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
}
```

**Python:**
```python
import hmac, hashlib

def verify_signature(payload: bytes, signature: str, secret: str) -> bool:
    expected = "sha256=" + hmac.new(secret.encode(), payload, hashlib.sha256).hexdigest()
    return hmac.compare_digest(expected, signature)
```

**Go:**
```go
func verifySignature(payload []byte, signature, secret string) bool {
    mac := hmac.New(sha256.New, []byte(secret))
    mac.Write(payload)
    expected := "sha256=" + hex.EncodeToString(mac.Sum(nil))
    return hmac.Equal([]byte(expected), []byte(signature))
}
```

Critical rules:
- Use constant-time comparison (never `===` or `==`)
- Compute HMAC over the raw body bytes, not re-serialized JSON
- Respond within 10 seconds; process async if slow
- Deduplicate deliveries by hashing the raw payload (retries can deliver the same event twice)

For complete webhook setup, read `references/webhooks.md`.

## Integration Approaches

### 1. REST API Polling

Best for: simple integrations, batch processing, periodic data collection.

1. Create a monitor: `POST /monitors` with `username` and `eventTypes`
2. Poll events: `GET /events?monitorId={id}&limit=50` on an interval (e.g., every 30s)
3. Paginate through results using `nextCursor`

### 2. Real-Time Webhooks

Best for: instant notifications, event-driven architectures, production systems.

1. Create a monitor: `POST /monitors`
2. Register a webhook: `POST /webhooks` with `url` and `eventTypes`
3. Save the `secret` from the response (shown only once)
4. Build a handler that verifies signatures and processes events
5. Respond `200` within 10 seconds

Webhook retry policy: 5 attempts with exponential backoff. Failed deliveries progress through `pending` -> `failed` -> `exhausted`.

### 3. MCP Server (AI Agents)

Best for: AI-powered tools, natural language interfaces, IDE integrations.

The MCP server at `https://xquik.com/mcp` exposes 21 tools for monitoring, search, extraction, draws, and account management. It uses the same API key auth.

Supported platforms: Claude Desktop, Claude Code, ChatGPT (via Agents SDK), Codex CLI, Cursor, VS Code, Windsurf, OpenCode.

For setup configs per platform, read `references/mcp-setup.md`.

## Event Types

Used across monitors, webhooks, and events:

| Type | Description |
|------|-------------|
| `tweet.new` | Original tweet posted |
| `tweet.quote` | Quote tweet posted |
| `tweet.reply` | Reply posted |
| `tweet.retweet` | Retweet posted |
| `follower.gained` | New follower gained |
| `follower.lost` | Follower lost |

## Extraction Tools

Xquik provides 19 extraction tools for bulk data collection. Each tool requires a specific target parameter. Always call `POST /extractions/estimate` before running to preview cost and check quota.

For the full tool type reference with required parameters, read `references/extractions.md`.

## Pricing & Quota

- **Base plan**: $20/month (1 monitor, monthly usage quota)
- **Extra monitors**: $10/month each
- **Free operations**: account info, monitor/webhook management, trends
- **Metered operations**: tweet search, user lookup, tweet lookup, follow check, extractions, draws
- **Quota enforcement**: hard limit, `402 usage_limit_reached` when exhausted
- **Check usage**: `GET /account` returns `usagePercent` (0-100)

Approximate monthly limits (single operation type): ~66k tweet searches, ~55k user lookups, ~66k follow checks.

## Conventions

- **IDs are strings** -- bigint values, treat as opaque strings, never parse as numbers
- **Timestamps are ISO 8601 UTC** -- e.g., `2026-02-24T10:30:00.000Z`
- **Errors return JSON** -- `{ "error": "error_code" }`, some include extra context (e.g., `{ "error": "monitor_limit_reached", "limit": 1 }`)
- **Cursors are opaque** -- pass `nextCursor` as the `after` query parameter, never decode

## Unsupported Operations

These are NOT available through the Xquik API:
- Tweets a user liked or bookmarked
- Posting tweets, liking, retweeting, following
- DMs or private/protected account data
- File exports via API response (use `GET /extractions/{id}/export` or `GET /draws/{id}/export`)

## Reference Files

Read these for detailed information on specific topics:

- **`references/api-endpoints.md`** -- All REST API endpoints with methods, paths, parameters, and response shapes
- **`references/webhooks.md`** -- Complete webhook setup, HMAC verification code, idempotency, retry policy
- **`references/mcp-setup.md`** -- MCP server configuration for 8 IDEs and AI agent platforms
- **`references/extractions.md`** -- All 19 extraction tool types with required parameters and descriptions
- **`references/types.md`** -- Copy-pasteable TypeScript type definitions for all API objects
