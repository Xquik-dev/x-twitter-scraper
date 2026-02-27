# Xquik REST API Endpoints

Base URL: `https://xquik.com/api/v1`

All requests require the `x-api-key` header. All responses are JSON. HTTPS only.

## Table of Contents

- [Account](#account)
- [API Keys](#api-keys)
- [Monitors](#monitors)
- [Events](#events)
- [Webhooks](#webhooks)
- [Draws](#draws)
- [Extractions](#extractions)
- [X API (Direct Lookups)](#x-api-direct-lookups)
- [Trends](#trends)

---

## Account

### Get Account

```
GET /account
```

Returns subscription status, monitor allocation, and current period usage.

**Response:**
```json
{
  "plan": "active",
  "monitorsAllowed": 1,
  "monitorsUsed": 0,
  "currentPeriod": {
    "start": "2026-02-01T00:00:00.000Z",
    "end": "2026-03-01T00:00:00.000Z",
    "usagePercent": 45
  }
}
```

### Update Account

```
PATCH /account
```

Update account locale. Session auth only (not API key).

**Body:** `{ "locale": "en" | "tr" | "es" }`

---

## API Keys

Session auth only -- these endpoints do not accept API key auth.

### Create API Key

```
POST /api-keys
```

**Body:** `{ "name": "My Key" }` (optional)

**Response:** Returns `fullKey` (shown only once), `prefix`, `name`, `id`, `createdAt`.

### List API Keys

```
GET /api-keys
```

Returns all keys with `id`, `name`, `prefix`, `isActive`, `createdAt`, `lastUsedAt`. Full key is never exposed.

### Revoke API Key

```
DELETE /api-keys/{id}
```

Permanent and irreversible. The key stops working immediately.

---

## Monitors

### Create Monitor

```
POST /monitors
```

**Body:**
```json
{
  "username": "elonmusk",
  "eventTypes": ["tweet.new", "tweet.reply", "tweet.quote"]
}
```

**Response:**
```json
{
  "id": "7",
  "username": "elonmusk",
  "xUserId": "44196397",
  "eventTypes": ["tweet.new", "tweet.reply", "tweet.quote"],
  "isActive": true,
  "createdAt": "2026-02-24T10:30:00.000Z"
}
```

Event types: `tweet.new`, `tweet.quote`, `tweet.reply`, `tweet.retweet`, `follower.gained`, `follower.lost`.

Returns `409 monitor_already_exists` if the username is already monitored.

### List Monitors

```
GET /monitors
```

Returns all monitors (up to 200, no pagination).

### Get Monitor

```
GET /monitors/{id}
```

### Update Monitor

```
PATCH /monitors/{id}
```

**Body:** `{ "eventTypes": [...], "isActive": true|false }` (both optional)

### Delete Monitor

```
DELETE /monitors/{id}
```

Stops tracking and deletes all associated data.

---

## Events

### List Events

```
GET /events
```

**Query parameters:**

| Param | Type | Description |
|-------|------|-------------|
| `monitorId` | string | Filter by monitor ID |
| `eventType` | string | Filter by event type |
| `limit` | number | Results per page (1-100, default 50) |
| `after` | string | Cursor for next page |

**Response:**
```json
{
  "events": [
    {
      "id": "9010",
      "type": "tweet.new",
      "monitorId": "7",
      "username": "elonmusk",
      "occurredAt": "2026-02-24T16:45:00.000Z",
      "data": {
        "tweetId": "1893556789012345678",
        "text": "Hello world",
        "metrics": { "likes": 3200, "retweets": 890, "replies": 245 }
      }
    }
  ],
  "hasMore": true,
  "nextCursor": "MjAyNi0wMi0yNFQxNjozMDowMC4wMDBa..."
}
```

### Get Event

```
GET /events/{id}
```

Returns a single event with full details.

---

## Webhooks

### Create Webhook

```
POST /webhooks
```

**Body:**
```json
{
  "url": "https://your-server.com/webhook",
  "eventTypes": ["tweet.new", "tweet.reply"]
}
```

**Response** includes a `secret` field (shown only once). Store it for signature verification.

### List Webhooks

```
GET /webhooks
```

Returns all webhooks (up to 200). Secret is never exposed in list responses.

### Update Webhook

```
PATCH /webhooks/{id}
```

**Body:** `{ "url": "...", "eventTypes": [...], "isActive": true|false }` (all optional)

### Delete Webhook

```
DELETE /webhooks/{id}
```

Permanently removes the webhook. All future deliveries are stopped.

### List Deliveries

```
GET /webhooks/{id}/deliveries
```

View delivery attempts and statuses for a webhook. Statuses: `pending`, `delivered`, `failed`, `exhausted`.

---

## Draws

### Create Draw

```
POST /draws
```

Run a giveaway draw from a tweet. Picks random winners from replies.

**Body:**
```json
{
  "tweetUrl": "https://x.com/user/status/1893456789012345678",
  "winnerCount": 3,
  "backupCount": 2,
  "uniqueAuthorsOnly": true,
  "mustRetweet": true,
  "mustFollowUsername": "burakbayir",
  "filterMinFollowers": 100,
  "filterAccountAgeDays": 30,
  "filterLanguage": "en",
  "requiredKeywords": ["giveaway"],
  "requiredHashtags": ["#contest"],
  "requiredMentions": ["@xquik"]
}
```

All filter fields are optional. Only `tweetUrl` is required.

**Response:**
```json
{
  "id": "42",
  "tweetId": "1893456789012345678",
  "tweetUrl": "https://x.com/user/status/1893456789012345678",
  "status": "completed",
  "totalEntries": 1500,
  "validEntries": 890,
  "createdAt": "2026-02-24T10:00:00.000Z",
  "drawnAt": "2026-02-24T10:01:00.000Z"
}
```

### List Draws

```
GET /draws
```

Cursor-paginated. Returns compact draw objects.

### Get Draw

```
GET /draws/{id}
```

Returns full draw details including winners.

### Export Draw

```
GET /draws/{id}/export?format=csv
```

Formats: `csv`, `xlsx`, `md`.

---

## Extractions

### Create Extraction

```
POST /extractions
```

Run a bulk data extraction job. See `references/extractions.md` for all 19 tool types.

**Body:**
```json
{
  "toolType": "reply_extractor",
  "targetTweetId": "1893704267862470862"
}
```

**Response:**
```json
{
  "id": "77777",
  "toolType": "reply_extractor",
  "status": "completed",
  "totalResults": 150
}
```

### Estimate Extraction

```
POST /extractions/estimate
```

Preview the cost before running. Same body as create.

**Response:**
```json
{
  "allowed": true,
  "source": "replyCount",
  "estimatedResults": 150,
  "usagePercent": 45,
  "projectedPercent": 48
}
```

### List Extractions

```
GET /extractions
```

Cursor-paginated. Filter by `status` and `toolType`.

### Get Extraction

```
GET /extractions/{id}
```

Returns job details with paginated results (up to 1,000 per page).

### Export Extraction

```
GET /extractions/{id}/export?format=csv&type=users
```

Formats: `csv`, `xlsx`, `md`. Types: `users`, `tweets`. 50,000 row limit. Exports include enrichment columns not in the API response.

---

## X API (Direct Lookups)

Metered operations that count toward the monthly quota.

### Get Tweet

```
GET /x/tweets/{id}
```

Returns full tweet with engagement metrics (likes, retweets, replies, quotes, views, bookmarks) and author info (username, followers, verified status).

### Search Tweets

```
GET /x/tweets/search?q={query}
```

Search using X syntax: keywords, `#hashtags`, `from:user`, `to:user`, `"exact phrases"`, `OR`, `-exclude`.

Returns basic tweet info (id, text, author, date). For engagement metrics, use Get Tweet on individual results.

### Get User

```
GET /x/users/{username}
```

Returns profile info: name, username, bio, follower count, following count, profile picture, location, created date, statuses count.

### Check Follower

```
GET /x/follows/check?source={username}&target={username}
```

Returns `isFollowing` and `isFollowedBy` for both directions.

---

## Trends

### List Trends

```
GET /trends?woeid=1&count=30
```

Free, no usage consumed. Cached, refreshes every 15 minutes.

**WOEIDs:** 1 (Worldwide), 23424977 (US), 23424975 (UK), 23424969 (Turkey), 23424950 (Spain), 23424829 (Germany), 23424819 (France), 23424856 (Japan), 23424848 (India), 23424768 (Brazil), 23424775 (Canada), 23424900 (Mexico).

**Response:**
```json
{
  "trends": [
    { "name": "#AI", "description": "...", "rank": 1, "query": "#AI" }
  ],
  "total": 30,
  "woeid": 1
}
```

---

## Error Codes

| Status | Code | Meaning |
|--------|------|---------|
| 400 | `invalid_input` | Request body failed validation |
| 400 | `invalid_id` | Path parameter is not a valid ID |
| 400 | `invalid_tweet_url` | Tweet URL format is invalid |
| 400 | `invalid_tweet_id` | Tweet ID is empty or invalid |
| 400 | `invalid_username` | X username is empty or invalid |
| 400 | `invalid_tool_type` | Extraction tool type not recognized |
| 400 | `invalid_format` | Export format not `csv`, `xlsx`, or `md` |
| 400 | `missing_query` | Required query parameter is missing |
| 401 | `unauthenticated` | Missing or invalid API key |
| 402 | `no_subscription` | No active subscription |
| 402 | `subscription_inactive` | Subscription is not active |
| 402 | `usage_limit_reached` | Monthly usage cap exceeded |
| 403 | `monitor_limit_reached` | Plan monitor limit exceeded |
| 404 | `not_found` | Resource does not exist |
| 409 | `monitor_already_exists` | Duplicate monitor for same username |
| 429 | - | Rate limited -- retry with backoff |
| 500 | `internal_error` | Server error |
| 502 | `x_api_unavailable` | X API temporarily unavailable |
