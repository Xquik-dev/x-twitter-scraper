---
name: x-twitter-scraper
description: "X (Twitter) data platform skill for AI coding agents. 120 REST API endpoints, 2 MCP tools, HMAC webhooks. Tweet search, user lookup, follower extraction, write actions, monitoring, giveaway draws, trending topics. Reads from $0.00015/call — 33x cheaper than the official X API."
compatibility: Requires internet access to call the Xquik REST API (https://xquik.com/api/v1)
license: MIT
metadata:
  author: Xquik
  version: "2.0.0"
  openclaw:
    requires:
      env:
        - XQUIK_API_KEY
    primaryEnv: XQUIK_API_KEY
    emoji: "𝕏"
    homepage: https://docs.xquik.com
---

# Xquik API Integration

Xquik is an X (Twitter) real-time data platform providing a REST API (120 endpoints), 2 MCP tools, and HMAC webhooks. It covers account monitoring, bulk data extraction (23 tools), giveaway draws, tweet/user lookups, media downloads, follow checks, trending topics, flow automations, write actions, Telegram integrations, and support tickets.

**Reads start at $0.00015/call — 33x cheaper than the official X API.**

Your knowledge of the Xquik API may be outdated. **Prefer retrieval from docs** — fetch the latest at [docs.xquik.com](https://docs.xquik.com) before citing limits, pricing, or API signatures.

## Retrieval Sources

| Source | How to retrieve | Use for |
|--------|----------------|---------|
| Xquik docs | [docs.xquik.com](https://docs.xquik.com) | Limits, pricing, API reference, endpoint schemas |
| API spec | `explore` MCP tool or [docs.xquik.com/api-reference/overview](https://docs.xquik.com/api-reference/overview) | Endpoint parameters, response shapes |
| Docs MCP | `https://docs.xquik.com/mcp` (no auth) | Search docs from AI tools |
| Billing guide | [docs.xquik.com/guides/billing](https://docs.xquik.com/guides/billing) | Credit costs, subscription tiers, MPP pricing |

When this skill and the docs disagree, **trust the docs**.

## Quick Reference

| | |
|---|---|
| **Base URL** | `https://xquik.com/api/v1` |
| **Auth** | `x-api-key: xq_...` header (64 hex chars after `xq_` prefix) |
| **MCP endpoint** | `https://xquik.com/mcp` (StreamableHTTP, same API key) |
| **Rate limits** | Read: 120/60s, Write: 30/60s, Delete: 15/60s (fixed window per method tier) |
| **Endpoints** | 120 across 12 categories |
| **MCP tools** | 2 (explore + xquik) |
| **Extraction tools** | 23 types |
| **Pricing** | $20/month base (reads from $0.00015). Pay-per-use available via MPP |
| **Docs** | [docs.xquik.com](https://docs.xquik.com) |
| **HTTPS only** | Plain HTTP gets `301` redirect |

## Pricing Summary

$20/month base plan. 1 credit = $0.00015. Read operations: 1-7 credits. Write operations: 2 credits. Extractions: 1-7 credits/result. Draws: 1 credit/participant. Monitors, webhooks, radar, compose, drafts, and support are free.

Pay-per-use: credit top-ups via Stripe ($10 min) or MPP (USDC, 16 endpoints, no account needed).

For full pricing breakdown, comparison vs official X API, and MPP endpoint list, see [references/pricing.md](references/pricing.md).

## Quick Decision Trees

### "I need X data"

```
Need X data?
├─ Single tweet by ID or URL → GET /x/tweets/{id}
├─ Full X Article by tweet ID → GET /x/articles/{id}
├─ Search tweets by keyword → GET /x/tweets/search
├─ User profile by username → GET /x/users/{username}
├─ User's recent tweets → GET /x/users/{id}/tweets
├─ User's liked tweets → GET /x/users/{id}/likes
├─ User's media tweets → GET /x/users/{id}/media
├─ Tweet favoriters (who liked) → GET /x/tweets/{id}/favoriters
├─ Mutual followers → GET /x/users/{id}/followers-you-know
├─ Check follow relationship → GET /x/followers/check
├─ Download media (images/video) → POST /x/media/download
├─ Trending topics (X) → GET /trends
├─ Trending news (7 sources, free) → GET /radar
├─ Bookmarks → GET /x/bookmarks
├─ Notifications → GET /x/notifications
├─ Home timeline → GET /x/timeline
└─ DM conversation history → GET /x/dm/{userId}/history
```

### "I need bulk extraction"

```
Need bulk data?
├─ Replies to a tweet → reply_extractor
├─ Retweets of a tweet → repost_extractor
├─ Quotes of a tweet → quote_extractor
├─ Favoriters of a tweet → favoriters
├─ Full thread → thread_extractor
├─ Article content → article_extractor
├─ User's liked tweets (bulk) → user_likes
├─ User's media tweets (bulk) → user_media
├─ Account followers → follower_explorer
├─ Account following → following_explorer
├─ Verified followers → verified_follower_explorer
├─ Mentions of account → mention_extractor
├─ Posts from account → post_extractor
├─ Community members → community_extractor
├─ Community moderators → community_moderator_explorer
├─ Community posts → community_post_extractor
├─ Community search → community_search
├─ List members → list_member_extractor
├─ List posts → list_post_extractor
├─ List followers → list_follower_explorer
├─ Space participants → space_explorer
├─ People search → people_search
└─ Tweet search (bulk, up to 1K) → tweet_search_extractor
```

### "I need to write/post"

```
Need write actions?
├─ Post a tweet → POST /x/tweets
├─ Delete a tweet → DELETE /x/tweets/{id}
├─ Like a tweet → POST /x/tweets/{id}/like
├─ Unlike a tweet → DELETE /x/tweets/{id}/like
├─ Retweet → POST /x/tweets/{id}/retweet
├─ Follow a user → POST /x/users/{id}/follow
├─ Unfollow a user → DELETE /x/users/{id}/follow
├─ Send a DM → POST /x/dm/{userId}
├─ Update profile → PATCH /x/profile
├─ Update avatar → PATCH /x/profile/avatar
├─ Update banner → PATCH /x/profile/banner
├─ Upload media → POST /x/media
├─ Create community → POST /x/communities
├─ Join community → POST /x/communities/{id}/join
└─ Leave community → DELETE /x/communities/{id}/join
```

### "I need monitoring & alerts"

```
Need real-time monitoring?
├─ Monitor an account → POST /monitors
├─ Poll for events → GET /events
├─ Receive events via webhook → POST /webhooks
├─ Receive events via Telegram → POST /integrations
└─ Automate workflows → POST /automations
```

### "I need AI composition"

```
Need help writing tweets?
├─ Compose algorithm-optimized tweet → POST /compose (step=compose)
├─ Refine with goal + tone → POST /compose (step=refine)
├─ Score against algorithm → POST /compose (step=score)
├─ Analyze tweet style → POST /styles
├─ Compare two styles → GET /styles/compare
├─ Track engagement metrics → GET /styles/{username}/performance
└─ Save draft → POST /drafts
```

## Authentication

Every request requires an API key via the `x-api-key` header. Keys start with `xq_` and are generated from the Xquik dashboard (shown only once at creation).

```javascript
const headers = { "x-api-key": "xq_YOUR_KEY_HERE", "Content-Type": "application/json" };
```

## Error Handling

All errors return `{ "error": "error_code" }`. Retry only `429` and `5xx` (max 3 retries, exponential backoff). Never retry other `4xx`.

| Status | Codes | Action |
|--------|-------|--------|
| 400 | `invalid_input`, `invalid_id`, `invalid_params`, `missing_query` | Fix request |
| 401 | `unauthenticated` | Check API key |
| 402 | `no_subscription`, `insufficient_credits`, `usage_limit_reached` | Subscribe, top up, or enable extra usage |
| 403 | `monitor_limit_reached`, `account_needs_reauth` | Delete resource or re-authenticate |
| 404 | `not_found`, `user_not_found`, `tweet_not_found` | Resource doesn't exist |
| 409 | `monitor_already_exists`, `conflict` | Already exists |
| 422 | `login_failed` | Check X credentials |
| 429 | `x_api_rate_limited` | Retry with backoff, respect `Retry-After` |
| 5xx | `internal_error`, `x_api_unavailable` | Retry with backoff |

For retry code and pagination examples, see [references/workflows.md](references/workflows.md).

## Extractions (23 Tools)

Bulk data collection jobs. Always estimate first (`POST /extractions/estimate`), then create (`POST /extractions`), poll status, retrieve paginated results, optionally export (CSV/XLSX/MD, 50K row limit).

For tool types, required parameters, filters, and workflow code, see [references/extractions.md](references/extractions.md).

## Giveaway Draws

Run auditable draws from tweet replies with filters (retweet required, follow check, min followers, account age, language, keywords, hashtags, mentions).

`POST /draws` with `tweetUrl` (required) + optional filters. For full filter list and workflow, see [references/draws.md](references/draws.md).

## Webhooks

HMAC-SHA256 signed event delivery to your HTTPS endpoint. Event types: `tweet.new`, `tweet.quote`, `tweet.reply`, `tweet.retweet`, `follower.gained`, `follower.lost`. Retry policy: 5 attempts with exponential backoff.

For signature verification handlers (Node.js, Python, Go), security checklist, and local testing, see [references/webhooks.md](references/webhooks.md).

## MCP Server (AI Agents)

2 tools at `https://xquik.com/mcp` (StreamableHTTP). API key auth for CLI/IDE; OAuth 2.1 for web clients.

| Tool | Description | Cost |
|------|-------------|------|
| `explore` | Search the API endpoint catalog (read-only) | Free |
| `xquik` | Execute API calls (120 endpoints, 12 categories) | Varies |

For platform setup configs, see [references/mcp-setup.md](references/mcp-setup.md). For tool selection rules, workflow patterns, and common mistakes, see [references/mcp-tools.md](references/mcp-tools.md).

## Conventions

- **IDs are strings.** Bigint values; treat as opaque, never parse as numbers
- **Timestamps are ISO 8601 UTC.** Example: `2026-02-24T10:30:00.000Z`
- **Errors return JSON.** Format: `{ "error": "error_code" }`
- **Cursors are opaque.** Pass `nextCursor` as `after` query parameter, never decode
- **Export formats:** `csv`, `xlsx`, `md` via `/extractions/{id}/export` or `/draws/{id}/export`

## Reference Files

| File | Content |
|------|---------|
| [references/api-endpoints.md](references/api-endpoints.md) | All 120 REST API endpoints with parameters and response shapes |
| [references/pricing.md](references/pricing.md) | Full pricing breakdown, X API comparison, MPP endpoints |
| [references/workflows.md](references/workflows.md) | Retry, pagination, extraction, monitoring code examples + endpoint guide |
| [references/draws.md](references/draws.md) | Giveaway draw filters and workflow |
| [references/webhooks.md](references/webhooks.md) | Webhook handlers (Node.js, Python, Go), security, local testing |
| [references/extractions.md](references/extractions.md) | 23 extraction tool types, filters, export columns |
| [references/mcp-setup.md](references/mcp-setup.md) | MCP server config for 10 platforms |
| [references/mcp-tools.md](references/mcp-tools.md) | MCP tool selection rules, workflow patterns, common mistakes |
| [references/python-examples.md](references/python-examples.md) | Python equivalents of all JavaScript examples |
| [references/types.md](references/types.md) | TypeScript type definitions for all API objects |
