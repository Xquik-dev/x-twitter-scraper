# Xquik TypeScript Type Definitions

Copy-pasteable TypeScript types for all Xquik API objects.

## Contents

- [Account](#account)
- [API Keys](#api-keys)
- [Monitors](#monitors)
- [Events](#events)
- [Webhooks](#webhooks)
- [Draws](#draws)
- [Extractions](#extractions)
- [X API](#x-api)
- [Trends](#trends)
- [Error](#error)
- [Request Bodies](#request-bodies)
- [MCP Output Schemas](#mcp-output-schemas)

```typescript
// ─── Account ─────────────────────────────────────────────

interface Account {
  plan: "active" | "inactive";
  monitorsAllowed: number;
  monitorsUsed: number;
  currentPeriod?: {
    start: string;
    end: string;
    usagePercent: number;
  };
}

// ─── API Keys ────────────────────────────────────────────

interface ApiKeyCreated {
  id: string;
  fullKey: string;
  prefix: string;
  name: string;
  createdAt: string;
}

interface ApiKey {
  id: string;
  name: string;
  prefix: string;
  isActive: boolean;
  createdAt: string;
  lastUsedAt?: string;
}

// ─── Monitors ────────────────────────────────────────────

interface Monitor {
  id: string;
  username: string;
  xUserId: string;
  eventTypes: EventType[];
  isActive: boolean;
  createdAt: string;
}

type EventType =
  | "tweet.new"
  | "tweet.quote"
  | "tweet.reply"
  | "tweet.retweet"
  | "follower.gained"
  | "follower.lost";

// ─── Events ──────────────────────────────────────────────

interface Event {
  id: string;
  type: EventType;
  monitorId: string;
  username: string;
  occurredAt: string;
  data: EventData;
  xEventId?: string;
}

// Tweet events (tweet.new, tweet.reply, tweet.quote, tweet.retweet)
interface TweetEventData {
  tweetId: string;
  text: string;
  metrics: {
    likes: number;
    retweets: number;
    replies: number;
  };
  // tweet.quote only
  quotedTweetId?: string;
  quotedUsername?: string;
  // tweet.reply only
  inReplyToTweetId?: string;
  inReplyToUsername?: string;
  // tweet.retweet only
  retweetedTweetId?: string;
  retweetedUsername?: string;
}

// Follower events (follower.gained, follower.lost)
interface FollowerEventData {
  followerId: string;
  followerUsername: string;
  followerName: string;
  followerFollowersCount: number;
  followerVerified: boolean;
}

type EventData = TweetEventData | FollowerEventData;

interface EventList {
  events: Event[];
  hasMore: boolean;
  nextCursor?: string;
}

// ─── Webhooks ────────────────────────────────────────────

interface WebhookCreated {
  id: string;
  url: string;
  eventTypes: EventType[];
  secret: string;
  createdAt: string;
}

interface Webhook {
  id: string;
  url: string;
  eventTypes: EventType[];
  isActive: boolean;
  createdAt: string;
}

interface Delivery {
  id: string;
  streamEventId: string;
  status: "pending" | "delivered" | "failed" | "exhausted";
  attempts: number;
  lastStatusCode?: number;
  lastError?: string;
  createdAt: string;
  deliveredAt?: string;
}

interface WebhookPayload {
  eventType: EventType;
  username: string;
  data: EventData;
}

// ─── Draws ───────────────────────────────────────────────

interface Draw {
  id: string;
  tweetId: string;
  tweetUrl: string;
  tweetText: string;
  tweetAuthorUsername: string;
  tweetLikeCount: number;
  tweetRetweetCount: number;
  tweetReplyCount: number;
  tweetQuoteCount: number;
  status: "pending" | "running" | "completed" | "failed";
  totalEntries: number;
  validEntries: number;
  createdAt: string;
  drawnAt?: string;
}

interface DrawListItem {
  id: string;
  tweetUrl: string;
  status: "pending" | "running" | "completed" | "failed";
  totalEntries: number;
  validEntries: number;
  createdAt: string;
  drawnAt?: string;
}

interface DrawWinner {
  position: number;
  authorUsername: string;
  tweetId: string;
  isBackup: boolean;
}

interface DrawList {
  draws: DrawListItem[];
  hasMore: boolean;
  nextCursor?: string;
}

interface CreateDrawRequest {
  tweetUrl: string;
  winnerCount?: number;
  backupCount?: number;
  uniqueAuthorsOnly?: boolean;
  mustRetweet?: boolean;
  mustFollowUsername?: string;
  filterMinFollowers?: number;
  filterAccountAgeDays?: number;
  filterLanguage?: string;
  requiredKeywords?: string[];
  requiredHashtags?: string[];
  requiredMentions?: string[];
}

// ─── Extractions ─────────────────────────────────────────

type ExtractionToolType =
  | "article_extractor"
  | "community_extractor"
  | "community_moderator_explorer"
  | "community_post_extractor"
  | "community_search"
  | "follower_explorer"
  | "following_explorer"
  | "list_follower_explorer"
  | "list_member_extractor"
  | "list_post_extractor"
  | "mention_extractor"
  | "people_search"
  | "post_extractor"
  | "quote_extractor"
  | "reply_extractor"
  | "repost_extractor"
  | "space_explorer"
  | "thread_extractor"
  | "verified_follower_explorer";

interface ExtractionJob {
  id: string;
  toolType: ExtractionToolType;
  status: "pending" | "running" | "completed" | "failed";
  totalResults: number;
  targetTweetId?: string;
  targetUsername?: string;
  targetUserId?: string;
  targetCommunityId?: string;
  searchQuery?: string;
  aiTitles?: { en: string; tr: string; es: string };
  errorMessage?: string;
  createdAt: string;
  completedAt?: string;
}

interface ExtractionResult {
  id: string;
  xUserId: string;
  xUsername?: string;
  xDisplayName?: string;
  xFollowersCount?: number;
  xVerified?: boolean;
  xProfileImageUrl?: string;
  tweetId?: string;
  tweetText?: string;
  tweetCreatedAt?: string;
  createdAt: string;
}

interface ExtractionList {
  extractions: ExtractionJob[];
  hasMore: boolean;
  nextCursor?: string;
}

interface ExtractionEstimate {
  allowed: boolean;
  source: "replyCount" | "retweetCount" | "quoteCount" | "followers" | "unknown";
  estimatedResults: number;
  usagePercent: number;
  projectedPercent: number;
  error?: string;
}

interface CreateExtractionRequest {
  toolType: ExtractionToolType;
  targetTweetId?: string;
  targetUsername?: string;
  targetCommunityId?: string;
  targetListId?: string;
  targetSpaceId?: string;
  searchQuery?: string;
}

// ─── X API ───────────────────────────────────────────────

interface Tweet {
  id: string;
  text: string;
  createdAt: string;
  retweetCount: number;
  replyCount: number;
  likeCount: number;
  quoteCount: number;
  viewCount: number;
  bookmarkCount: number;
}

interface TweetAuthor {
  id: string;
  username: string;
  followers: number;
  verified: boolean;
  profilePicture: string;
}

interface TweetSearchResult {
  id: string;
  text: string;
  createdAt: string;
  likeCount: number;    // Omitted if unavailable
  retweetCount: number; // Omitted if unavailable
  replyCount: number;   // Omitted if unavailable
  author: {
    id: string;
    username: string;
    name: string;
    verified: boolean;
  };
}

interface UserProfile {
  id: string;
  username: string;
  name: string;
  description: string;
  followers: number;
  following: number;
  verified: boolean;
  profilePicture: string;
  location: string;
  createdAt: string;
  statusesCount: number;
}

interface FollowerCheck {
  sourceUsername: string;
  targetUsername: string;
  isFollowing: boolean;
  isFollowedBy: boolean;
}

// ─── Trends ──────────────────────────────────────────────

interface Trend {
  name: string;
  description?: string;
  rank?: number;
  query?: string;
}

interface TrendList {
  trends: Trend[];
  total: number;
  woeid: number;
}

// ─── Error ───────────────────────────────────────────────

interface ApiError {
  error: string;
  limit?: number;
}

// ─── Request Bodies ──────────────────────────────────────

interface CreateMonitorRequest {
  username: string;
  eventTypes: EventType[];
}

interface UpdateMonitorRequest {
  eventTypes?: EventType[];
  isActive?: boolean;
}

interface CreateWebhookRequest {
  url: string;
  eventTypes: EventType[];
}

interface UpdateWebhookRequest {
  url?: string;
  eventTypes?: EventType[];
  isActive?: boolean;
}

interface CreateApiKeyRequest {
  name?: string;
}
```

## REST API vs MCP Field Naming

The REST API and MCP server use different field names for the same data. Map these when switching between interfaces:

| Type | REST API Field | MCP Field |
|------|---------------|-----------|
| **Monitor** | `username` | `xUsername` |
| **Event** | `type` | `eventType` |
| **Event** | `data` | `eventData` |
| **Event** | `monitorId` | `monitoredAccountId` |
| **UserProfile** | `followers` | `followersCount` |
| **UserProfile** | `following` | `followingCount` |
| **FollowerCheck** | `isFollowing` / `isFollowedBy` | `following` / `followedBy` |

**MCP `get-user-info` returns a subset** of the full `UserProfile` type. Fields not returned by MCP: `verified`, `location`, `createdAt`, `statusesCount`. Use the REST API `GET /x/users/{username}` for the complete profile.

## MCP Output Schemas

MCP tools return structured data with these shapes. Field names differ from the REST API (see mapping table above).

```typescript
// ─── MCP: get-user-info ─────────────────────────────────

interface McpUserInfo {
  username: string;
  name: string;
  description: string;       // User bio
  followersCount: number;
  followingCount: number;
  profilePicture: string;    // Profile image URL
  // Not returned: verified, location, createdAt, statusesCount
  // Use REST GET /x/users/{username} for the full profile
}

// ─── MCP: search-tweets ─────────────────────────────────

interface McpSearchResult {
  tweets: {
    id: string;
    text: string;
    authorUsername: string;
    authorName: string;
    createdAt: string;        // ISO 8601 timestamp
    // No engagement metrics -- use lookup-tweet for those
  }[];
}

// ─── MCP: lookup-tweet ──────────────────────────────────

interface McpTweetLookup {
  tweet: {
    id: string;
    text: string;
    likeCount: number;
    retweetCount: number;
    replyCount: number;
    quoteCount: number;
    viewCount: number;
    bookmarkCount: number;
  };
  author?: {
    id: string;
    username: string;
    followers: number;
    verified: boolean;
  };
}

// ─── MCP: check-follow ─────────────────────────────────

interface McpFollowCheck {
  following: boolean;         // Whether the source follows the target
  followedBy: boolean;        // Whether the target follows the source
}

// ─── MCP: get-events ────────────────────────────────────

interface McpEventList {
  events: {
    id: string;
    xUsername: string;
    eventType: string;
    eventData: unknown;       // Full event payload (tweet text, author, metrics)
    monitoredAccountId: string;
    createdAt: string;        // ISO 8601 when event was recorded
    occurredAt: string;       // ISO 8601 when event occurred on X
  }[];
  hasMore: boolean;
  nextCursor?: string;
}

// ─── MCP: list-monitors ─────────────────────────────────

interface McpMonitorList {
  monitors: {
    id: string;
    xUsername: string;
    eventTypes: string[];
    isActive: boolean;
    createdAt: string;        // ISO 8601 timestamp
  }[];
}

// ─── MCP: add-webhook ───────────────────────────────────

interface McpWebhookCreated {
  id: string;
  url: string;
  eventTypes: string[];
  isActive: boolean;
  createdAt: string;          // ISO 8601 timestamp
  secret: string;             // HMAC signing secret. Store securely.
}

// ─── MCP: test-webhook ──────────────────────────────────

interface McpWebhookTest {
  success: boolean;
  statusCode: number;
  error?: string;
}

// ─── MCP: run-extraction ────────────────────────────────

interface McpExtractionJob {
  id: string;                 // Use with get-extraction for results
  toolType: string;
  status: string;             // pending, running, completed, failed
  totalResults: number;
}

// ─── MCP: estimate-extraction ───────────────────────────

interface McpExtractionEstimate {
  allowed?: boolean;          // Whether extraction fits within budget
  estimatedResults?: number;
  projectedPercent?: number;  // Projected usage percent after extraction
  usagePercent?: number;      // Current usage percent of monthly quota
  source?: string;
  error?: string;
}

// ─── MCP: run-draw ──────────────────────────────────────

interface McpDrawResult {
  id: string;
  tweetId: string;
  totalEntries: number;
  validEntries: number;
  winners: {
    position: number;
    authorUsername: string;
    tweetId: string;
    isBackup: boolean;
  }[];
}

// ─── MCP: get-draw ──────────────────────────────────────

interface McpDrawDetails {
  draw: {
    id: string;
    status: string;
    createdAt: string;
    drawnAt?: string;
    totalEntries: number;
    validEntries: number;
    tweetId: string;
    tweetUrl: string;
    tweetText: string;
    tweetAuthorUsername: string;
    tweetLikeCount: number;   // Like count at draw time
    tweetRetweetCount: number; // Retweet count at draw time
    tweetReplyCount: number;  // Reply count at draw time
    tweetQuoteCount: number;  // Quote count at draw time
  };
  winners: {
    position: number;
    authorUsername: string;
    tweetId: string;
    isBackup: boolean;
  }[];
}

// ─── MCP: get-account ───────────────────────────────────

interface McpAccount {
  plan: string;               // Current plan name (free or subscriber)
  monitorsAllowed: number;    // Maximum monitors on current plan
  monitorsUsed: number;       // Number of active monitors
  currentPeriod?: {           // Present only with active subscription
    start: string;            // ISO 8601 billing period start
    end: string;              // ISO 8601 billing period end
    usagePercent: number;     // Current usage percent of monthly quota
  };
}

// ─── MCP: get-trends ────────────────────────────────────

interface McpTrends {
  woeid: number;
  total: number;
  trends: {
    name: string;             // Trend name or hashtag
    rank?: number;            // Trend rank position
    description?: string;     // Trend description or context
    query?: string;           // Search query to find tweets for this trend
  }[];
}
```
