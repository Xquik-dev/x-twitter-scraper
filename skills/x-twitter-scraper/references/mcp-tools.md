# Xquik MCP Tools Reference

Complete reference for all 26 MCP tools exposed by the Xquik server at `https://xquik.com/mcp`.

## Tool Selection Rules

Pick the simplest tool that answers the question:

| Goal | Tool | Returns |
|------|------|---------|
| Single tweet by ID or URL | `lookup-tweet` | Full metrics: likes, retweets, replies, quotes, views, bookmarks, author verification |
| Search tweets by keyword/hashtag/from:user | `search-tweets` | Basic tweet info: id, text, author, date (no engagement metrics) |
| User profile, bio, follower/following counts | `get-user-info` | Name, username, bio, follower count, following count, profile picture (no verification, tweet count, or join date) |
| Check follow relationship | `check-follow` | Both directions: following and followedBy |
| Trending topics by region | `get-trends` | Names, ranks, search queries. Free, no usage consumed |
| Activity from monitored accounts | `get-events` | Only YOUR monitors, not all of X |
| Budget, plan, usage percent | `get-account` | Plan, monitor quota, current period usage percent |
| Start tracking an account | `add-monitor` | Webhooks are optional, add separately with `add-webhook` |
| Stop tracking | `remove-monitor` | Not `remove-webhook` |
| Run a giveaway/raffle | `run-draw` | Handles reply fetching, filtering, deduplication, and random selection automatically |
| Past giveaway results | `list-draws` + `get-draw` | Draw details with winners |

Use `run-extraction` ONLY for bulk data that simpler tools cannot provide:

- All followers/following of an account (not just the count -- use `get-user-info` for counts)
- All replies/retweets/quotes of a tweet (comprehensive list -- use `lookup-tweet` for just the counts)
- Full tweet thread, article extraction, community/list/space members
- People search, mention history, all posts from a user
- Always call `estimate-extraction` first to check cost. Requires active subscription.

## Workflow Patterns

Multi-step tool sequences for common tasks:

| Workflow | Steps |
|----------|-------|
| **Set up real-time alerts** | `add-monitor` -> `add-webhook` -> `test-webhook` |
| **Run a giveaway** | `get-account` (check budget) -> `run-draw` |
| **Bulk extraction** | `get-account` (check subscription) -> `estimate-extraction` -> `run-extraction` -> `get-extraction` (results) |
| **Full tweet analysis** | `lookup-tweet` (metrics) -> `run-extraction` with `thread_extractor` (full thread) |
| **Find and analyze user** | `get-user-info` (profile) -> `search-tweets` from:username (recent tweets) -> `lookup-tweet` (metrics on specific tweet) |
| **Compose algorithm-optimized tweet** | `compose-tweet` -> AI asks follow-ups -> `refine-tweet` -> AI drafts tweet -> `score-tweet` -> iterate |
| **Subscribe or manage billing** | `subscribe` (returns Stripe URL) |

## Cost Categories

| Category | Tools |
|----------|-------|
| **Free** | `list-monitors`, `add-monitor`, `remove-monitor`, `get-events`, `get-event`, `list-webhooks`, `add-webhook`, `remove-webhook`, `test-webhook`, `list-extractions`, `get-extraction`, `estimate-extraction`, `list-draws`, `get-draw`, `get-account`, `subscribe`, `get-trends`, `compose-tweet`, `refine-tweet`, `score-tweet` |
| **Metered** (counts toward monthly quota) | `search-tweets`, `get-user-info`, `lookup-tweet`, `check-follow`, `run-extraction`, `run-draw` |

---

## Monitoring Tools

### list-monitors

List all X accounts the user is currently monitoring.

**Input:** None

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `monitors[].id` | string | Monitor ID (use with remove-monitor, get-events monitorId filter) |
| `monitors[].xUsername` | string | Monitored X username |
| `monitors[].eventTypes` | string[] | Subscribed event types |
| `monitors[].isActive` | boolean | Whether the monitor is currently active |
| `monitors[].createdAt` | string | ISO 8601 timestamp |

**Annotations:** readOnly, idempotent | **Cost:** Free

---

### add-monitor

Start monitoring an X account for real-time activity. To also receive HTTP push notifications, set up a webhook with `add-webhook` after creating the monitor.

**Input:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `username` | string | Yes | X username without @ prefix (e.g. "elonmusk") |
| `eventTypes` | string[] | Yes | Event types: `tweet.new`, `tweet.reply`, `tweet.retweet`, `tweet.quote`, `follower.gained`, `follower.lost` |

**Output:** Monitor object with `id`, `xUsername`, `eventTypes`, `isActive`, `createdAt`.

**Annotations:** openWorld | **Cost:** Free

---

### remove-monitor

Stop monitoring an X account and delete the monitor. Permanent. To only stop push notifications while keeping the monitor active, use `remove-webhook` instead.

**Input:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `monitorId` | string | Yes | Monitor ID (use `list-monitors` to find IDs) |

**Output:** Text confirmation.

**Annotations:** destructive, idempotent | **Cost:** Free

---

### get-events

Retrieve recent activity from monitored X accounts. Only returns events from accounts YOU monitor via `add-monitor`. Does NOT search all of X -- use `search-tweets` for that.

**Input:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | number | No | Events to return (1-50, default 50) |
| `afterCursor` | string | No | Pagination cursor from previous response |
| `monitorId` | string | No | Filter to a specific monitor |
| `eventType` | string | No | Filter: `tweet.new`, `tweet.reply`, `tweet.retweet`, `tweet.quote`, `follower.gained`, `follower.lost` |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `events[].id` | string | Event ID (use with get-event for full details) |
| `events[].xUsername` | string | Username of the monitored account |
| `events[].eventType` | string | Event type (tweet.new, tweet.reply, etc.) |
| `events[].eventData` | object | Full event payload (tweet text, author, metrics) |
| `events[].monitoredAccountId` | string | ID of the monitored account |
| `events[].createdAt` | string | ISO 8601 timestamp when event was recorded |
| `events[].occurredAt` | string | ISO 8601 timestamp when event occurred on X |
| `hasMore` | boolean | Whether more results are available |
| `nextCursor` | string | Pass as afterCursor to fetch the next page |

**Annotations:** readOnly, idempotent | **Cost:** Free

---

### get-event

Get full details for a single activity event by its ID.

**Input:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `eventId` | string | Yes | Event ID (from `get-events` results) |

**Output:** Single event object with `id`, `xUsername`, `eventType`, `eventData`, `monitoredAccountId`, `createdAt`, `occurredAt`.

**Annotations:** readOnly, idempotent | **Cost:** Free

---

## Search & Lookup Tools

### search-tweets

Search X for tweets matching a query. Returns basic tweet info only (id, text, author, date). For engagement metrics, use `lookup-tweet` on individual results.

Supports X search syntax: keywords, `#hashtags`, `from:user`, `to:user`, `"exact phrases"`, `OR`, `-exclude`.

**Input:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | X search query |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `tweets[].id` | string | Tweet ID (use with lookup-tweet for full metrics) |
| `tweets[].text` | string | Full tweet text |
| `tweets[].authorUsername` | string | X username of the tweet author |
| `tweets[].authorName` | string | Display name of the tweet author |
| `tweets[].createdAt` | string | ISO 8601 timestamp when tweet was posted |
| `tweets[].media[]` | array | Optional. Attached photos/videos: `mediaUrl`, `type`, `url` |

**Annotations:** readOnly, idempotent, openWorld | **Cost:** Metered

---

### lookup-tweet

Get full details of a specific tweet by its ID or URL. Returns engagement metrics and author info.

**Input:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tweetId` | string | Yes | Numeric tweet ID (e.g. "1234567890") or ID extracted from a tweet URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `tweet.id` | string | Tweet ID |
| `tweet.text` | string | Tweet text |
| `tweet.likeCount` | number | Number of likes |
| `tweet.retweetCount` | number | Number of retweets |
| `tweet.replyCount` | number | Number of replies |
| `tweet.quoteCount` | number | Number of quote tweets |
| `tweet.viewCount` | number | Number of views |
| `tweet.bookmarkCount` | number | Number of bookmarks |
| `tweet.media[]` | array | Optional. Attached photos/videos: `mediaUrl`, `type`, `url` |
| `author.id` | string | Author user ID |
| `author.username` | string | Author username |
| `author.followers` | number | Author follower count |
| `author.verified` | boolean | Whether author is verified |

**Annotations:** readOnly, idempotent, openWorld | **Cost:** Metered

---

### get-user-info

Look up an X user profile by username. Does NOT return verification status or tweet count. To check verification, use `search-tweets from:username` + `lookup-tweet` (author.verified). To search for users by name, use `run-extraction` with `people_search`.

**Input:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `username` | string | Yes | X username without @ prefix (e.g. "elonmusk") |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `username` | string | X username (without @) |
| `name` | string | Display name |
| `description` | string | User bio text |
| `followersCount` | number | Number of followers |
| `followingCount` | number | Number of accounts followed |
| `profilePicture` | string | Profile picture URL |

**Note:** The REST API `GET /x/users/{username}` returns additional fields: `verified`, `location`, `createdAt`, `statusesCount`.

**Annotations:** readOnly, idempotent, openWorld | **Cost:** Metered

---

### check-follow

Check if one X account follows another. Returns both directions.

**Input:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sourceUsername` | string | Yes | Account to check (without @) |
| `targetUsername` | string | Yes | Account that may be followed (without @) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `following` | boolean | Whether the source follows the target |
| `followedBy` | boolean | Whether the target follows the source |

**Annotations:** readOnly, idempotent, openWorld | **Cost:** Metered

---

### get-trends

Get trending topics on X for a region. Free -- does not consume usage quota.

**Input:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `woeid` | number | No | Region WOEID: 1=Worldwide (default), 23424977=US, 23424975=UK, 23424969=Turkey, 23424950=Spain, 23424829=Germany, 23424819=France, 23424856=Japan, 23424848=India, 23424768=Brazil, 23424775=Canada, 23424900=Mexico |
| `count` | number | No | Trends to return (1-50, default 30) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `woeid` | number | Region WOEID used for this request |
| `total` | number | Total number of trends returned |
| `trends[].name` | string | Trend name or hashtag |
| `trends[].rank` | number | Trend rank position |
| `trends[].description` | string | Trend description or context |
| `trends[].query` | string | Search query to find tweets for this trend |

**Annotations:** readOnly, idempotent, openWorld | **Cost:** Free

---

## Webhook Tools

### list-webhooks

List all webhook endpoints configured by the user.

**Input:** None

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `webhooks[].id` | string | Webhook ID (use with remove-webhook, test-webhook) |
| `webhooks[].url` | string | HTTPS endpoint URL |
| `webhooks[].eventTypes` | string[] | Event types delivered to this webhook |
| `webhooks[].isActive` | boolean | Whether the webhook is currently active |
| `webhooks[].createdAt` | string | ISO 8601 timestamp |

**Annotations:** readOnly, idempotent | **Cost:** Free

---

### add-webhook

Register a new webhook endpoint to receive real-time event notifications via HTTP POST. Events are delivered as HMAC-signed JSON payloads. Returns the webhook details including an HMAC signing secret. Store this secret securely to verify payload signatures.

**Input:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string (URL) | Yes | HTTPS URL that will receive webhook POST requests |
| `eventTypes` | string[] | Yes | Event types: `tweet.new`, `tweet.reply`, `tweet.retweet`, `tweet.quote`, `follower.gained`, `follower.lost` |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Webhook ID |
| `url` | string | HTTPS endpoint URL |
| `eventTypes` | string[] | Event types delivered to this webhook |
| `isActive` | boolean | Whether the webhook is active |
| `createdAt` | string | ISO 8601 timestamp |
| `secret` | string | HMAC signing secret for verifying webhook payloads. Store securely. |

**Annotations:** openWorld | **Cost:** Free

---

### remove-webhook

Delete a webhook endpoint. Permanent. To stop monitoring an account entirely, use `remove-monitor` instead.

**Input:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `webhookId` | string | Yes | Webhook ID (use `list-webhooks` to find IDs) |

**Output:** Text confirmation.

**Annotations:** destructive, idempotent | **Cost:** Free

---

### test-webhook

Send a test payload to a webhook endpoint to verify it works.

**Input:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `webhookId` | string | Yes | Webhook ID (use `list-webhooks` to find IDs) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `success` | boolean | Whether the test delivery succeeded |
| `statusCode` | number | HTTP status code from the endpoint |
| `error` | string | Error message (present on failure) |

**Annotations:** openWorld | **Cost:** Free

---

## Extraction Tools

### estimate-extraction

Preview the cost of an extraction before running it. Always call this before `run-extraction`. Returns `allowed: false` when the user has no active subscription.

**Input:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `toolType` | string | Yes | One of 19 extraction tool types (see `run-extraction`) |
| `targetUsername` | string | Conditional | Required for: follower_explorer, following_explorer, verified_follower_explorer, mention_extractor, post_extractor |
| `targetTweetId` | string | Conditional | Required for: reply_extractor, repost_extractor, quote_extractor, thread_extractor, article_extractor |
| `targetCommunityId` | string | Conditional | Required for: community_extractor, community_moderator_explorer, community_post_extractor, community_search |
| `targetListId` | string | Conditional | Required for: list_member_extractor, list_post_extractor, list_follower_explorer |
| `targetSpaceId` | string | Conditional | Required for: space_explorer |
| `searchQuery` | string | Conditional | Required for: people_search, community_search |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `allowed` | boolean | Whether the extraction is allowed within budget |
| `estimatedResults` | number | Estimated number of results |
| `projectedPercent` | number | Projected usage percent after extraction |
| `usagePercent` | number | Current usage percent of monthly quota |
| `source` | string | Data source used for estimation |
| `error` | string | Error message if estimation failed |

**Annotations:** readOnly, idempotent, openWorld | **Cost:** Free

---

### run-extraction

Run a bulk data extraction job. Subscription required. For simpler lookups, prefer: `get-user-info` (profiles/counts), `search-tweets` (finding tweets), `lookup-tweet` (single tweet stats), `check-follow` (follow checks). Always call `estimate-extraction` first.

**Input:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `toolType` | string | Yes | Extraction type (see table below) |
| `targetUsername` | string | Conditional | X username without @ |
| `targetTweetId` | string | Conditional | Tweet ID |
| `targetCommunityId` | string | Conditional | Community ID |
| `targetListId` | string | Conditional | List ID |
| `targetSpaceId` | string | Conditional | Space ID |
| `searchQuery` | string | Conditional | Search keywords |

**19 tool types by target:**

| Target | Tool Types |
|--------|-----------|
| Username | `follower_explorer`, `following_explorer`, `verified_follower_explorer`, `mention_extractor`, `post_extractor` |
| Tweet ID | `reply_extractor`, `repost_extractor`, `quote_extractor`, `thread_extractor`, `article_extractor` |
| Community ID | `community_extractor`, `community_moderator_explorer`, `community_post_extractor`, `community_search` |
| List ID | `list_member_extractor`, `list_post_extractor`, `list_follower_explorer` |
| Space ID | `space_explorer` |
| Search query | `people_search` |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Extraction job ID (use with get-extraction for results) |
| `toolType` | string | Extraction tool type used |
| `status` | string | Job status |
| `totalResults` | number | Number of results extracted |

**Annotations:** openWorld | **Cost:** Metered

---

### list-extractions

List past extraction jobs.

**Input:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | number | No | Jobs to return (1-100, default 50) |
| `afterCursor` | string | No | Pagination cursor |
| `status` | string | No | Filter: running, completed, failed |
| `toolType` | string | No | Filter by extraction tool type |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extractions[].id` | string | Extraction ID (use with get-extraction for results) |
| `extractions[].toolType` | string | Extraction tool type used |
| `extractions[].status` | string | Job status (running, completed, failed) |
| `extractions[].createdAt` | string | ISO 8601 creation timestamp |
| `extractions[].completedAt` | string | ISO 8601 completion timestamp |
| `extractions[].totalResults` | number | Number of results extracted |
| `hasMore` | boolean | Whether more results are available |
| `nextCursor` | string | Pass as afterCursor to fetch the next page |

**Annotations:** readOnly, idempotent | **Cost:** Free

---

### get-extraction

Get results of a specific extraction job by its ID.

**Input:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Extraction job ID (from `list-extractions` or `run-extraction`) |
| `limit` | number | No | Results to return (1-200, default 100) |
| `afterCursor` | string | No | Pagination cursor |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `job` | object | Full job metadata |
| `results` | array | Extracted data (user profiles, tweets, etc.) |
| `hasMore` | boolean | Whether more results are available |
| `nextCursor` | string | Pass as afterCursor to fetch the next page |

**Annotations:** readOnly, idempotent | **Cost:** Free

---

## Giveaway Draw Tools

### run-draw

Run a giveaway draw or raffle from a tweet. Handles reply fetching, filtering, deduplication, and cryptographically secure random selection automatically.

**Input:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tweetUrl` | string | Yes | Full tweet URL (e.g. "https://x.com/user/status/123") |
| `winnerCount` | number | No | Winners to select (default 1) |
| `backupCount` | number | No | Backup winners to select |
| `uniqueAuthorsOnly` | boolean | No | Count only one entry per author |
| `mustRetweet` | boolean | No | Require participants to have retweeted |
| `filterMinFollowers` | number | No | Minimum follower count |
| `filterAccountAgeDays` | number | No | Minimum account age in days |
| `filterLanguage` | string | No | Language code (e.g. "en") |
| `mustFollowUsername` | string | No | Username participants must follow |
| `requiredHashtags` | string[] | No | Hashtags that must appear in replies |
| `requiredKeywords` | string[] | No | Keywords that must appear in replies |
| `requiredMentions` | string[] | No | Usernames that must be mentioned in replies |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Draw ID (use with get-draw for full details) |
| `tweetId` | string | Giveaway tweet ID |
| `totalEntries` | number | Total reply count before filtering |
| `validEntries` | number | Valid entries after filtering |
| `winners[].position` | number | Winner position (1-based) |
| `winners[].authorUsername` | string | X username of the winner |
| `winners[].tweetId` | string | Tweet ID of the winning reply |
| `winners[].isBackup` | boolean | Whether this is a backup winner |

**Annotations:** openWorld | **Cost:** Metered

---

### list-draws

List past giveaway draws.

**Input:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | number | No | Draws to return (1-100, default 50) |
| `afterCursor` | string | No | Pagination cursor |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `draws[].id` | string | Draw ID (use with get-draw for full details) |
| `draws[].tweetUrl` | string | Giveaway tweet URL |
| `draws[].status` | string | Draw status |
| `draws[].createdAt` | string | ISO 8601 timestamp |
| `draws[].drawnAt` | string | ISO 8601 timestamp when drawn |
| `draws[].totalEntries` | number | Total reply count |
| `draws[].validEntries` | number | Valid entries after filtering |
| `hasMore` | boolean | Whether more results are available |
| `nextCursor` | string | Pass as afterCursor to fetch the next page |

**Annotations:** readOnly, idempotent | **Cost:** Free

---

### get-draw

Get details of a specific giveaway draw including winners.

**Input:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `drawId` | string | Yes | Draw ID (from `list-draws` or `run-draw`) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `draw.id` | string | Draw ID |
| `draw.status` | string | Draw status (completed, failed) |
| `draw.createdAt` | string | ISO 8601 timestamp |
| `draw.drawnAt` | string | ISO 8601 timestamp when winners were drawn |
| `draw.totalEntries` | number | Total reply count before filtering |
| `draw.validEntries` | number | Entries remaining after filters applied |
| `draw.tweetId` | string | Giveaway tweet ID |
| `draw.tweetUrl` | string | Full URL of the giveaway tweet |
| `draw.tweetText` | string | Giveaway tweet text |
| `draw.tweetAuthorUsername` | string | Username of the giveaway tweet author |
| `draw.tweetLikeCount` | number | Tweet like count at draw time |
| `draw.tweetRetweetCount` | number | Tweet retweet count at draw time |
| `draw.tweetReplyCount` | number | Tweet reply count at draw time |
| `draw.tweetQuoteCount` | number | Tweet quote count at draw time |
| `winners[].position` | number | Winner position (1-based) |
| `winners[].authorUsername` | string | X username of the winner |
| `winners[].tweetId` | string | Tweet ID of the winning reply |
| `winners[].isBackup` | boolean | Whether this is a backup winner |

**Annotations:** readOnly, idempotent | **Cost:** Free

---

## Account Tool

### get-account

Check Xquik account status, subscription, and usage.

**Input:** None

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `plan` | string | Current plan name (free or subscriber) |
| `monitorsAllowed` | number | Maximum monitors allowed on current plan |
| `monitorsUsed` | number | Number of active monitors |
| `currentPeriod` | object | Current billing period (present only with active subscription) |
| `currentPeriod.start` | string | ISO 8601 period start date |
| `currentPeriod.end` | string | ISO 8601 period end date |
| `currentPeriod.usagePercent` | number | Percent of monthly quota consumed |

**Annotations:** readOnly, idempotent | **Cost:** Free

---

## Subscription Tool

### subscribe

Get a subscription checkout or management link. Returns a Stripe Checkout URL (for new subscribers) or Customer Portal URL (for existing subscribers). Free, no subscription needed.

**Input:** None

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | One of: `already_subscribed`, `checkout_created`, `payment_issue` |
| `url` | string | Stripe Checkout or Customer Portal URL. Open in browser. |
| `message` | string | Human-readable status message |

**Annotations:** idempotent, openWorld | **Cost:** Free

---

## Tweet Composition Tools

### compose-tweet

Start composing an algorithm-optimized tweet. Returns X algorithm engagement signals, content rules, and follow-up questions for the AI to ask the user. Free, no subscription needed. Use this first, then `refine-tweet` after the user answers follow-ups, then `score-tweet` to evaluate the draft.

**Input:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `topic` | string | Yes | What the tweet is about |
| `goal` | string | No | Optimization goal: `engagement` (default), `followers`, `authority`, `conversation` |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `algorithmInsights[].name` | string | Signal name from PhoenixScores |
| `algorithmInsights[].polarity` | string | `positive` or `negative` (helps or hurts ranking) |
| `algorithmInsights[].description` | string | What this signal measures |
| `contentRules[].rule` | string | Actionable content rule |
| `contentRules[].description` | string | Why this rule matters based on algorithm architecture |
| `followUpQuestions` | string[] | Questions for the AI to ask the user before composing |
| `topPenalties` | string[] | Most severe negative signals to avoid |
| `source` | string | Attribution to algorithm source code |

**Annotations:** readOnly, idempotent | **Cost:** Free

---

### refine-tweet

Get targeted composition guidance after the user answers follow-up questions from `compose-tweet`. Returns goal-specific tips, example tweet patterns, media strategy, hashtag advice, and CTA guidance. Free, no subscription needed.

**Input:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `topic` | string | Yes | What the tweet is about |
| `goal` | string | Yes | `engagement`, `followers`, `authority`, or `conversation` |
| `tone` | string | Yes | Desired tone (e.g. casual, professional, provocative, educational) |
| `hashtags` | string | No | Hashtags to include (comma or space separated) |
| `mediaType` | string | No | `photo`, `video`, or `none` |
| `callToAction` | string | No | Desired CTA (e.g. "reply with your take", "share if you agree") |
| `additionalContext` | string | No | Additional context about target audience or constraints |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `compositionGuidance` | string[] | Targeted guidance based on user preferences |
| `examplePatterns[].pattern` | string | Tweet structure template |
| `examplePatterns[].description` | string | What this pattern achieves |

**Annotations:** readOnly, idempotent | **Cost:** Free

---

### score-tweet

Evaluate a draft tweet against X algorithm ranking factors. Returns a pass/fail checklist covering links, hashtags, capitalization, engagement farming, CTA, length, media, and punctuation. Free, no subscription needed.

**Input:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `draft` | string | Yes | The draft tweet text to evaluate |
| `hasLink` | boolean | No | Whether a link will be attached (link card, not in tweet body) |
| `hasMedia` | boolean | No | Whether media (photo/video) will be attached |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `totalChecks` | number | Total number of checks performed |
| `passedCount` | number | Number of checks that passed |
| `topSuggestion` | string | Highest-impact improvement suggestion |
| `checklist[].factor` | string | What was checked |
| `checklist[].passed` | boolean | Whether the check passed |
| `checklist[].suggestion` | string | Improvement suggestion (present only if failed) |

**Annotations:** readOnly, idempotent | **Cost:** Free

---

## MCP vs REST API

Both interfaces access the same Xquik platform. Choose based on your integration:

| | MCP Server | REST API |
|---|------------|----------|
| **URL** | `https://xquik.com/mcp` | `https://xquik.com/api/v1` |
| **Transport** | StreamableHTTP | HTTPS + JSON |
| **Auth** | `x-api-key` header | `x-api-key` header |
| **Best for** | AI agents, IDE integrations | Custom apps, scripts, backend services |
| **Tools/Endpoints** | 26 tools | 25+ endpoints |
| **User profile** | Subset: name, bio, follower/following counts, profile picture | Full: adds verified, location, createdAt, statusesCount |
| **Follow check** | `following` / `followedBy` | `isFollowing` / `isFollowedBy` |
| **Monitor username field** | `xUsername` | `username` |
| **Event fields** | `eventType`, `eventData`, `monitoredAccountId` | `type`, `data`, `monitorId` |
| **Search results** | id, text, authorUsername, authorName, createdAt | id, text, createdAt, optional metrics, author object |
| **Webhook update** | Not available (delete + recreate) | `PATCH /webhooks/{id}` |
| **Monitor update** | Not available (delete + recreate) | `PATCH /monitors/{id}` |
| **Export** | Not available (use REST) | `GET /extractions/{id}/export`, `GET /draws/{id}/export` |

**Key differences:**
- REST `GET /x/users/{username}` returns `verified`, `location`, `createdAt`, `statusesCount` that MCP `get-user-info` does not
- REST `GET /x/tweets/search` returns optional engagement metrics; MCP `search-tweets` returns basic info only
- REST supports PATCH for monitors and webhooks; MCP requires delete + recreate
- REST supports file export (CSV, XLSX, Markdown); MCP does not

---

## Annotation Summary

All 26 tools declare MCP annotations indicating their behavior:

| Annotation | Meaning | Tools |
|------------|---------|-------|
| `readOnlyHint: true` | Does not modify any data | list-monitors, get-events, get-event, search-tweets, get-user-info, list-webhooks, lookup-tweet, check-follow, list-extractions, get-extraction, estimate-extraction, list-draws, get-draw, get-account, get-trends, compose-tweet, refine-tweet, score-tweet |
| `destructiveHint: true` | Permanently deletes data | remove-monitor, remove-webhook |
| `idempotentHint: true` | Safe to retry, same result | list-monitors, remove-monitor, get-events, get-event, search-tweets, get-user-info, list-webhooks, remove-webhook, lookup-tweet, check-follow, list-extractions, get-extraction, estimate-extraction, list-draws, get-draw, get-account, subscribe, get-trends, compose-tweet, refine-tweet, score-tweet |
| `openWorldHint: true` | Makes external network requests | add-monitor, search-tweets, get-user-info, add-webhook, test-webhook, lookup-tweet, check-follow, run-extraction, estimate-extraction, run-draw, subscribe, get-trends |

---

## Common Mistakes

- Do NOT use `run-extraction` to get follower/following COUNT. Use `get-user-info`
- Do NOT use `run-extraction` `post_extractor` to find latest tweets. Use `search-tweets from:username`
- Do NOT use `search-tweets` when you have a tweet ID/URL. Use `lookup-tweet`
- Do NOT use `get-events` for non-monitored accounts. Use `search-tweets`
- Do NOT use `run-extraction` to get retweet/reply/like COUNTS. Use `lookup-tweet`
- Do NOT use `search-tweets` to find trending topics. Use `get-trends`
- Do NOT run extractions without estimating cost. Use `get-account` + `estimate-extraction`
- Do NOT use `get-user-info` to check verification. Use `search-tweets from:username` + `lookup-tweet` (author.verified)
- Do NOT manually search replies and pick random winners. Use `run-draw` which handles filtering, deduplication, and cryptographically secure random selection
- Do NOT invent tool types like "like_extractor" or "bookmark_extractor". Likes and bookmarks are NOT available

## Unsupported Operations

These are not available through the MCP server or REST API:

- Tweets a user liked or bookmarked
- Posting tweets, liking, retweeting, following
- DMs or private/protected account data
- Exporting extraction results as files (use REST API: `GET /api/v1/extractions/{id}/export`)
