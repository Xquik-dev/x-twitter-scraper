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

Session auth only. These endpoints do not accept API key auth.

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
  "createdAt": "2026-02-24T10:30:00.000Z"
}
```

Event types: `tweet.new`, `tweet.quote`, `tweet.reply`, `tweet.retweet`, `follower.gained`, `follower.lost`.

Returns `409 monitor_already_exists` if the username is already monitored.

### List Monitors

```
GET /monitors
```

Returns all monitors (up to 200, no pagination). Response includes `monitors` array and `total` count.

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

### Test Webhook

```
POST /webhooks/{id}/test
```

Sends a `webhook.test` event to the webhook endpoint, HMAC-signed with the webhook's secret. Returns success or failure status with HTTP response details.

**Payload delivered to your endpoint:**
```json
{
  "eventType": "webhook.test",
  "data": {
    "message": "Test delivery from Xquik"
  },
  "timestamp": "2026-02-27T12:00:00.000Z"
}
```

The delivery includes the `X-Xquik-Signature` header, identical to production deliveries.

Returns `400 webhook_inactive` if the webhook is disabled. Reactivate via `PATCH /webhooks/{id}` before testing.

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
  "tweetText": "Like & RT to enter! Picking 3 winners tomorrow.",
  "tweetAuthorUsername": "xquik",
  "tweetLikeCount": 4200,
  "tweetRetweetCount": 1800,
  "tweetReplyCount": 1500,
  "tweetQuoteCount": 120,
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
GET /draws/{id}/export?format=csv&type=winners
```

Formats: `csv`, `xlsx`, `md`. Types: `winners` (default), `entries`. Entry exports capped at 50,000 rows.

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
GET /extractions/{id}/export?format=csv
```

Formats: `csv`, `xlsx`, `md`. 50,000 row limit. Exports include enrichment columns not in the API response.

---

## X API (Direct Lookups)

Metered operations that count toward the monthly quota.

### Get Tweet

```
GET /x/tweets/{id}
```

Returns full tweet with engagement metrics (likes, retweets, replies, quotes, views, bookmarks), author info (username, followers, verified status, profile picture), and optional attached media (photos/videos with URLs).

### Search Tweets

```
GET /x/tweets/search?q={query}
```

Search using X syntax: keywords, `#hashtags`, `from:user`, `to:user`, `"exact phrases"`, `OR`, `-exclude`.

Returns tweet info with optional engagement metrics (likeCount, retweetCount, replyCount) and optional attached media. Some fields may be omitted if unavailable.

### Get User

```
GET /x/users/{username}
```

Returns profile info. Fields `id`, `username`, `name` are always present. All other fields (`description`, `followers`, `following`, `verified`, `profilePicture`, `location`, `createdAt`, `statusesCount`) are optional and omitted when unavailable.

### Check Follower

```
GET /x/followers/check?source={username}&target={username}
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

## Drafts

### Create Draft

`POST /drafts`

Save a tweet draft for later.

**Request body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `text` | string | Yes | The draft tweet text |
| `topic` | string | No | Topic the tweet is about |
| `goal` | string | No | Optimization goal: `engagement`, `followers`, `authority`, `conversation` |

**Response (201):**

```json
{
  "id": "123",
  "text": "draft text",
  "topic": "product launch",
  "goal": "engagement",
  "createdAt": "2026-02-24T10:30:00.000Z",
  "updatedAt": "2026-02-24T10:30:00.000Z"
}
```

---

### List Drafts

`GET /drafts`

List saved tweet drafts with cursor pagination.

**Query parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `limit` | number | No | 50 | Results per page (max 50) |
| `afterCursor` | string | No | - | Pagination cursor from previous response |

**Response (200):**

```json
{
  "drafts": [
    {
      "id": "123",
      "text": "draft text",
      "topic": "product launch",
      "goal": "engagement",
      "createdAt": "2026-02-24T10:30:00.000Z",
      "updatedAt": "2026-02-24T10:30:00.000Z"
    }
  ],
  "afterCursor": "cursor_string",
  "hasMore": true
}
```

---

### Get Draft

`GET /drafts/{id}`

Get a specific draft by ID.

**Response (200):** Single draft object.

**Errors:** `400 invalid_id`, `404 draft_not_found`

---

### Delete Draft

`DELETE /drafts/{id}`

Delete a draft. Returns `204 No Content`.

**Errors:** `400 invalid_id`, `404 draft_not_found`

---

## Tweet Style Cache

### Analyze & Cache Style

`POST /styles`

Fetch recent tweets from an X account and cache them for style analysis. **Consumes API usage credits.**

**Request body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | Yes | X username to analyze (without @) |

**Response (201):**

```json
{
  "xUsername": "elonmusk",
  "tweetCount": 20,
  "isOwnAccount": false,
  "fetchedAt": "2026-02-24T10:30:00.000Z",
  "tweets": [
    {
      "id": "1893456789012345678",
      "text": "The future is now.",
      "authorUsername": "elonmusk",
      "createdAt": "2026-02-24T14:22:00.000Z"
    }
  ]
}
```

---

### List Cached Styles

`GET /styles`

List all cached tweet style profiles. Max 200 results, ordered by fetch date.

**Response (200):**

```json
{
  "styles": [
    {
      "xUsername": "elonmusk",
      "tweetCount": 20,
      "isOwnAccount": false,
      "fetchedAt": "2026-02-24T10:30:00.000Z"
    }
  ]
}
```

---

### Get Cached Style

`GET /styles/{username}`

Get a cached style profile with full tweet data.

**Response (200):** Full style object with `tweets` array.

**Errors:** `404 style_not_found`

---

### Delete Cached Style

`DELETE /styles/{username}`

Delete a cached style. Returns `204 No Content`.

**Errors:** `404 style_not_found`

---

### Compare Styles

`GET /styles/compare?username1=A&username2=B`

Compare two cached tweet style profiles side by side.

**Query parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `username1` | string | Yes | First X username |
| `username2` | string | Yes | Second X username |

**Response (200):**

```json
{
  "style1": { "xUsername": "user1", "tweetCount": 20, "isOwnAccount": true, "fetchedAt": "...", "tweets": [...] },
  "style2": { "xUsername": "user2", "tweetCount": 15, "isOwnAccount": false, "fetchedAt": "...", "tweets": [...] }
}
```

**Errors:** `400 missing_params`, `404 style_not_found`

---

### Analyze Performance

`GET /styles/{username}/performance`

Get live engagement metrics for cached tweets. **Consumes API usage credits.**

**Response (200):**

```json
{
  "xUsername": "elonmusk",
  "tweetCount": 20,
  "tweets": [
    {
      "id": "1893456789012345678",
      "text": "The future is now.",
      "likeCount": 42000,
      "retweetCount": 8500,
      "replyCount": 3200,
      "quoteCount": 1100,
      "viewCount": 5000000,
      "bookmarkCount": 2400
    }
  ]
}
```

**Errors:** `404 style_not_found`

---

## Account Identity

### Set X Identity

`PUT /account/x-identity`

Link your X username to your Xquik account. Required for own-account detection in style analysis.

**Request body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | Yes | Your X username (without @) |

**Response (200):**

```json
{
  "success": true,
  "xUsername": "elonmusk"
}
```

**Errors:** `400 invalid_input`

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
| 400 | `invalid_params` | Export query parameters are missing or invalid |
| 400 | `missing_query` | Required query parameter is missing |
| 400 | `missing_params` | Required query parameters are missing |
| 401 | `unauthenticated` | Missing or invalid API key |
| 402 | `no_subscription` | No active subscription |
| 402 | `subscription_inactive` | Subscription is not active |
| 402 | `usage_limit_reached` | Monthly usage cap exceeded |
| 403 | `monitor_limit_reached` | Plan monitor limit exceeded |
| 400 | `webhook_inactive` | Webhook is disabled (test-webhook only) |
| 400 | `api_key_limit_reached` | API key limit reached (100 max) |
| 402 | `no_addon` | No monitor addon on subscription |
| 404 | `not_found` | Resource does not exist |
| 404 | `user_not_found` | X user not found |
| 404 | `tweet_not_found` | Tweet not found |
| 409 | `monitor_already_exists` | Duplicate monitor for same username |
| 429 | - | Rate limited. Retry with backoff |
| 429 | `x_api_rate_limited` | X data source rate limited. Retry |
| 500 | `internal_error` | Server error |
| 502 | `stream_registration_failed` | Stream registration failed. Retry |
| 502 | `x_api_unavailable` | X data source temporarily unavailable |
| 502 | `x_api_unauthorized` | X data source authentication failed. Retry |
