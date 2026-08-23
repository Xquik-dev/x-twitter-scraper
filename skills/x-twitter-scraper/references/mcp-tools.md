# Xquik MCP tools reference

The MCP server at `https://xquik.com/mcp` provides 2 API tools. The client sends requests through the server, which authenticates calls to `xquik.com/api/v1`.

This file documents plans for calls the user runs in an MCP client. This Skill
never invokes `explore` or `xquik`. Code blocks show client-side tool shapes and
request plans only.

Xquik processes MCP requests as an external service. Requests may contain
queries, IDs, message text, or support content. Minimize personal data. Never
send passwords, cookies, session tokens, 2FA codes, or unnecessary personal
data. Confirm before sending private or sensitive content. Review current
retention and logging terms before sensitive work.

Hosted MCP v2.6.0 supports `2026-07-28` through `server/discover`.
Current MCP SDKs add request metadata and headers automatically.
Modern calls need no initialization session.

## Tools

| Tool | Description | Usage |
|------|-------------|------|
| `explore` | Search the API endpoint catalog (read-only, no network calls) | Included |
| `xquik` | Send confirmed Xquik API requests | Varies by endpoint |

### Plan API spec searches with `explore`

The user's MCP client provides an in-memory `spec.endpoints` array. Plan a
search or filter before an unfamiliar endpoint.

```typescript
interface EndpointInfo {
  method: string;
  path: string;
  summary: string;
  category: string; // account, composition, credits, extraction, media, monitoring, support, twitter, x-accounts, x-write
  free: boolean; // Included usage flag from endpoint metadata
  parameters?: Array<{ name: string; in: 'query' | 'path' | 'body'; required: boolean; type: string; description: string }>;
  injectedHeaders?: string[];
  responseShape?: string;
}

declare const spec: { endpoints: EndpointInfo[] };
```

For example:

```javascript
// Find all included-usage endpoints.
async () => spec.endpoints.filter(e => e.free);

// Find endpoints by category.
async () => spec.endpoints.filter(e => e.category === 'x-write');

// Search summaries by keyword.
async () => spec.endpoints.filter(e => e.summary.toLowerCase().includes('tweet'));
```

### Plan API requests with `xquik`

The user's MCP client provides `xquik.request()`. It injects authentication and
required idempotency headers. A request plan must never include API keys or
headers. The client reuses each generated key for bounded transient retries.
After an unresolved write failure, the user should verify state. Plan another
attempt only when `safe_to_retry` is true and the user confirms.

For `409 coverage_cursor_unavailable`, wait the exact `Retry-After` seconds and
retry the same cursor once. For `410 coverage_cursor_gone`, the response omits
`Retry-After`. Restart without a cursor and deduplicate by ID.

## Require confirmation in every request plan

Apply these rules before showing a user-run `xquik` request:

| Capability | Rule |
|------------|------|
| Visible writes | Show the exact tweet, reply, like, retweet, follow, unfollow, profile, or community action. Wait for explicit confirmation. |
| Direct messages | Show sender, recipient, and message text. Never send bulk or automatic DMs. |
| Persistent resources | Create monitors and webhooks only when the user explicitly asks for ongoing delivery. Show target, event types, URL, and ongoing usage before creation. |
| Private reads | Confirm before fetching DMs, bookmarks, notifications, or home timeline. Forward returned private data to other tools only after explicit confirmation. |
| Plan and credit changes | Dashboard-only. The agent may read credit balance, but must not start account changes. |
| X account login | Never ask for or submit X login material. Account connection and re-authentication happen in the dashboard. |

```typescript
declare const xquik: {
  request(path: string, options?: {
    method?: string;  // default: 'GET'
    body?: unknown;
    query?: Record<string, string>;
  }): Promise<unknown>;
};
declare const spec: { endpoints: EndpointInfo[] };
```

## Tool selection plans

Plan `explore` first for an unfamiliar endpoint. Then show the narrowest
user-run `xquik` request.

| Goal | Endpoint (via `xquik`) |
|------|------------------------|
| Single tweet by ID or URL | `GET /api/v1/x/tweets/{id}` |
| Full X Article by tweet ID | `GET /api/v1/x/articles/{tweetId}` |
| Search tweets by keyword/hashtag | `GET /api/v1/x/tweets/search?q=...` |
| User profile, bio, and follower counts | `GET /api/v1/x/users/{id}`; `id` accepts a username or numeric ID |
| Download media from tweets | `POST /api/v1/x/media/download` |
| Check follow relationship | `GET /api/v1/x/followers/check?source=A&target=B` |
| X trending topics by region | `GET /api/v1/trends?woeid=1` |
| Xquik Radar request | Only after the user names Xquik Radar: `GET /api/v1/radar` through `xquik` |
| Activity from monitored accounts | `GET /api/v1/events` |
| Credit balance | `GET /api/v1/credits` |
| Monitor an X account | `POST /api/v1/monitors`; persistent and requires confirmation |
| Set up webhook notifications | `POST /api/v1/webhooks`; persistent and requires confirmation |
| Run a giveaway draw | `POST /api/v1/draws` |
| Compose or draft a tweet | Show content and usage, confirm, then call `POST /api/v1/compose`; confirm each compose, refine, or score call |
| Link your X username | Use the Xquik dashboard account settings |
| Analyze tweet style | `POST /api/v1/styles` |
| Get cached style | `GET /api/v1/styles/{id}` |
| Compare two styles | `GET /api/v1/styles/compare` |
| Post a tweet | `POST /api/v1/x/tweets`; requires confirmation |
| Like or unlike a tweet | `POST /api/v1/x/tweets/{id}/like` likes it. A delete request to the same route unlikes it. Both require confirmation. |
| Retweet | `POST /api/v1/x/tweets/{id}/retweet`; requires confirmation |
| Unretweet | Send a delete request to `/api/v1/x/tweets/{id}/retweet`; requires confirmation |
| Follow or unfollow | `POST /api/v1/x/users/{id}/follow` follows. A delete request to the same route unfollows. Both require confirmation. |
| Send a DM | `POST /api/v1/x/dm/{userId}`; requires confirmation |
| Upload media | `POST /api/v1/x/media`; confirm its use in a post or profile change |
| Open support ticket | Only when the user explicitly names Xquik support tickets: confirm the exact subject, message, data, and recipients. Then show the user-run `POST /api/v1/support/tickets` request. Never use this for generic support. |
| List support tickets | Only when the user explicitly names Xquik support tickets: confirm the exact private read. Then show the user-run `GET /api/v1/support/tickets` request. Never use this for generic support. |
| Get user's recent tweets | `GET /api/v1/x/users/{id}/tweets` |
| Get user's liked tweets | `GET /api/v1/x/users/{id}/likes`; sensitive preference read. Confirm the target, authorized purpose, limit, and recipients. Confirm separately before forwarding or export. |
| Get user's media tweets | `GET /api/v1/x/users/{id}/media` |
| Get accounts that liked a tweet | `GET /api/v1/x/tweets/{id}/favoriters`; apply sensitive-read safeguards when the tweet subject is sensitive. |
| Get mutual followers | `GET /api/v1/x/users/{id}/followers-you-know`; private and requires exact-scope confirmation |
| Get followers or following | `GET /api/v1/x/users/{id}/followers` or `GET /api/v1/x/users/{id}/following` |
| Get tweet quotes, replies, retweeters, or thread | `GET /api/v1/x/tweets/{id}/quotes`, `/replies`, `/retweeters`, or `/thread` |
| Read X Lists | `GET /api/v1/x/lists/{id}/members`, `/followers`, `/tweets` |
| Read X Communities | `GET /api/v1/x/communities/search`, `/tweets`, `/{id}/info`, `/{id}/members`, `/{id}/moderators`, `/{id}/tweets` |
| Get bookmarks | `GET /api/v1/x/bookmarks`; private and requires confirmation |
| Get bookmark folders | `GET /api/v1/x/bookmarks/folders` |
| Get notifications | `GET /api/v1/x/notifications`; private and requires confirmation |
| Get home timeline | `GET /api/v1/x/timeline`; private and requires confirmation |
| Get DM history | `GET /api/v1/x/dm/{userId}/history?account={username}`; private and requires exact-account confirmation |
| Check credit balance | `GET /api/v1/credits` |

Plan `POST /api/v1/extractions` only for bulk data that simpler endpoints cannot
provide. Examples include complete follower lists, replies, and community
members. Show `POST /api/v1/extractions/estimate` first. The user runs it,
reviews its live result, and confirms before creating the job.

Fresh cursorless Tweet Search with `queryType=Latest` is newest-first across
pages. Existing cursors retain their ordering. Thread reads accept 32 effective
result filters. They exclude `nativeRetweets`, `sinceTime`, and `untilTime`.
See [direct lookups](api-endpoints-x-api.md) for the exact names.

## User-run workflow plans

| Workflow | Steps |
|----------|-------|
| Set up ongoing alerts | Confirm target, event types, destination, and usage estimate -> `POST /monitors` -> `POST /webhooks` -> `POST /webhooks/{id}/test` |
| Run a giveaway | Confirm tweet URL and rules -> `POST /draws` |
| Bulk extraction | `POST /extractions/estimate` -> show the live estimate -> confirm -> `POST /extractions` -> `GET /extractions/{id}` |
| Compose and score a tweet | Show the supplied content and usage -> confirm -> `POST /compose` with `step=compose` -> confirm each `refine` or `score` call |
| Analyze tweet style | Show scope and usage -> confirm -> `POST /styles` -> `GET /styles/{id}` -> confirm before `POST /compose` with `styleUsername` |
| Post a tweet | `GET /x/accounts` -> confirm -> `POST /x/tweets` with `account` and `text` -> hosted MCP adds a unique `Idempotency-Key` -> poll `statusUrl` |
| Use Xquik Radar | User names Xquik Radar -> `GET /radar` through `xquik` -> confirm before any `POST /compose` call |
| Open a support ticket | Only after the user names Xquik support tickets: show the exact subject, message, data, and recipients -> confirm -> user runs `POST /support/tickets` -> user runs `GET /support/tickets/{id}`. Never use this for generic support. |
| Collect complete reply coverage | `GET /x/tweets/{id}/replies?mode=complete&limit=<1-25000>` -> filter direct rows by `inReplyToId` -> keep `nested_replies` separate -> inspect `diagnostic` |

## Common mistakes

| Mistake | Fix |
|---------|-----|
| Combining included and metered calls in `Promise.all` | Call included endpoints first, then metered ones. A 402 in `Promise.all` cancels all results. |
| Using `compose` when the user wants to send a tweet | `POST /compose` creates drafts. Use `POST /x/tweets` to send. |
| Using `POST /x/tweets` when the user wants writing help | Use compose, refine, and score instead. |
| Falling back to web search after an API error | Keep data already fetched from Xquik. |
| Skipping account checks before metered calls | Attempt the requested call. On 402, explain the account state and direct the user to the dashboard. |
| Passing API keys in code | The server adds authentication. Do not include keys. |
| Using `explore` for API calls | `explore` searches the API spec. Use `xquik` for API calls. |
| Looking up follow or DM targets by username | These routes need a numeric user ID. Resolve it through `GET /x/users/{id}` first. |
| Treating nested replies as direct replies | Match `inReplyToId` to the root ID. Keep `nested_replies` separate. |
| Treating 424 as an empty failure | Keep safe partial rows. Follow `diagnostic.recommendedFallback` and disclose coverage. |

## Excluded operations

This Skill excludes credential lifecycle, payment, checkout, and wallet
operations. Do not load, call, recommend, or describe those REST endpoints from
this Skill. Use a separate, purpose-specific workflow with its own authority and
confirmation controls. Binary support downloads remain REST-only.

## Usage reference

- Included operations cover account info, compose steps, cached styles, drafts, Radar, support tickets, credit balance, and webhook management.
- Metered or account-gated operations cover tweet search, lookups, media, extractions, draws, monitors, analysis, trends, and confirmed writes.
