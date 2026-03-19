# Xquik MCP Tools Reference

The MCP server at `https://xquik.com/mcp` uses a code-execution sandbox model with 2 tools. The agent writes async JavaScript arrow functions that run in a sandboxed environment with auth injected automatically.

## Tools

| Tool | Description | Cost |
|------|-------------|------|
| `explore` | Search the API endpoint catalog (read-only, no network calls) | Free |
| `xquik` | Execute API calls against your account | Varies by endpoint |
| `github-trending` | Trending repositories on GitHub | Free |
| `google-trends` | Trending search topics from Google | Free |
| `hacker-news-trending` | Trending stories on Hacker News | Free |
| `polymarket-trending` | Trending prediction markets from Polymarket | Free |
| `reddit-trending` | Trending posts on Reddit | Free |
| `startup-trending` | Trending startups and SaaS products | Free |
| `wikipedia-trending` | Most viewed Wikipedia articles | Free |

### `explore` — Search the API Spec

The sandbox provides an in-memory `spec.endpoints` array. Filter/search it to find endpoints before calling them.

```typescript
interface EndpointInfo {
  method: string;
  path: string;
  summary: string;
  category: string; // account, automations, bot, composition, extraction, integrations, media, monitoring, support, twitter, x-accounts, x-write
  free: boolean;
  parameters?: Array<{ name: string; in: 'query' | 'path' | 'body'; required: boolean; type: string; description: string }>;
  responseShape?: string;
}

declare const spec: { endpoints: EndpointInfo[] };
```

Examples:

```javascript
// Find all free endpoints
async () => spec.endpoints.filter(e => e.free);

// Find endpoints by category
async () => spec.endpoints.filter(e => e.category === 'x-write');

// Search by keyword
async () => spec.endpoints.filter(e => e.summary.toLowerCase().includes('tweet'));
```

### `xquik` — Execute API Calls

The sandbox provides `xquik.request()` with auth injected automatically. Never pass API keys.

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

## Tool Selection Rules

Use `explore` first to find endpoints, then `xquik` to call them.

| Goal | Endpoint (via `xquik`) |
|------|------------------------|
| Single tweet by ID or URL | `GET /api/v1/x/tweets/{id}` |
| Full X Article by tweet ID | `GET /api/v1/x/articles/{id}` |
| Search tweets by keyword/hashtag | `GET /api/v1/x/tweets/search?q=...` |
| User profile, bio, follower counts | `GET /api/v1/x/users/{username}` |
| Download media from tweets | `POST /api/v1/x/media/download` |
| Check follow relationship | `GET /api/v1/x/followers/check?source=A&target=B` |
| Trending topics by region (X) | `GET /api/v1/trends?woeid=1` |
| Trending news from 7 sources | `GET /api/v1/radar` |
| Trending GitHub repos | `github-trending` |
| Trending Google search topics | `google-trends` |
| Trending Hacker News stories | `hacker-news-trending` |
| Trending prediction markets | `polymarket-trending` |
| Trending Reddit posts | `reddit-trending` |
| Trending startups | `startup-trending` |
| Most viewed Wikipedia articles | `wikipedia-trending` |
| Activity from monitored accounts | `GET /api/v1/events` |
| Budget, plan, usage percent | `GET /api/v1/account` |
| Monitor an X account | `POST /api/v1/monitors` |
| Set up webhook notifications | `POST /api/v1/webhooks` |
| Run a giveaway draw | `POST /api/v1/draws` |
| Subscribe or manage billing | `POST /api/v1/subscribe` |
| Compose/draft a tweet | `POST /api/v1/compose` (3-step: compose, refine, score) |
| Link your X username | `PUT /api/v1/account/x-identity` |
| Analyze tweet style | `POST /api/v1/styles` |
| Get cached style | `GET /api/v1/styles/{username}` |
| Compare two styles | `GET /api/v1/styles/compare` |
| Post a tweet | `POST /api/v1/x/tweets` (requires connected account) |
| Like/unlike a tweet | `POST`/`DELETE /api/v1/x/tweets/{id}/like` |
| Retweet | `POST /api/v1/x/tweets/{id}/retweet` |
| Follow/unfollow | `POST`/`DELETE /api/v1/x/users/{id}/follow` |
| Send a DM | `POST /api/v1/x/dm/{userId}` |
| Upload media | `POST /api/v1/x/media` |
| Create automation flow | `POST /api/v1/automations` |
| List automation flows | `GET /api/v1/automations` |
| Add step to flow | `POST /api/v1/automations/{slug}/steps` |
| Activate/deactivate flow | `PATCH /api/v1/automations/{slug}` |
| Open support ticket | `POST /api/v1/support/tickets` |
| List support tickets | `GET /api/v1/support/tickets` |

Use `POST /api/v1/extractions` ONLY for bulk data that simpler endpoints cannot provide (all followers, all replies to a tweet, community members, etc.). Always call `POST /api/v1/extractions/estimate` first.

## Workflow Patterns

| Workflow | Steps |
|----------|-------|
| **Set up real-time alerts** | `POST /monitors` -> `POST /webhooks` -> `POST /webhooks/{id}/test` |
| **Run a giveaway** | `GET /account` -> `POST /draws` |
| **Bulk extraction** | `POST /extractions/estimate` -> `POST /extractions` -> `GET /extractions/{id}` |
| **Compose optimized tweet** | `POST /compose` (step=compose -> refine -> score) |
| **Analyze tweet style** | `POST /styles` -> `GET /styles/{username}` -> `POST /compose` with `styleUsername` |
| **Post a tweet** | `GET /x/accounts` -> `POST /x/tweets` with `account` + `text` |
| **Get trending news** | `GET /radar` (free, all sources) or per-source tools (`github-trending`, `google-trends`, `hacker-news-trending`, `polymarket-trending`, `reddit-trending`, `startup-trending`, `wikipedia-trending`) -> `POST /compose` with trending topic |
| **Create automation** | `POST /automations` -> `POST /automations/{slug}/steps` -> `PATCH /automations/{slug}` (activate) |
| **Open support ticket** | `POST /support/tickets` -> `GET /support/tickets/{id}` |

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Combining free and paid calls in `Promise.all` | Call free endpoints first, then paid ones separately. A 402 in Promise.all kills all results |
| Using `compose` when user wants to send a tweet | `POST /compose` is for drafting. Use `POST /x/tweets` to send |
| Using `POST /x/tweets` when user wants help writing | Use the 3-step compose flow instead |
| Falling back to web search when API call fails | Use free data already fetched (radar, styles, compose). Never discard it |
| Not checking subscription before paid calls | Always attempt the call. Handle 402 by calling `POST /subscribe` for checkout URL |
| Passing API keys in code | Auth is injected automatically. Never include keys |
| Using `explore` for API calls | `explore` is read-only spec search. Use `xquik` for actual API calls |
| Looking up follow/DM by username | Follow and DM endpoints need numeric user ID. Look up via `GET /x/users/{username}` first |

## Unsupported Operations

These are NOT available via the MCP server:

- API key management (create, list, delete)
- File export (CSV, XLSX, Markdown)
- Account locale update
- Scheduled tweets
- Bookmark management
- Direct X search (use extraction `tweet_search_extractor` for bulk search)

## Cost Reference

- **Free**: account info, compose (all steps), styles (cached lookup/save/delete/compare), drafts, radar, radar source tools (github-trending, google-trends, hacker-news-trending, polymarket-trending, reddit-trending, startup-trending, wikipedia-trending), subscribe, API keys, bot endpoints, integrations, X account management, automations (create, list, update, delete, steps), support tickets
- **Subscription required**: tweet search, user lookup, tweet lookup, follow check, media download (first only, cached free), extractions, draws, style analysis (X API refresh), performance analysis, trends, all write actions (tweet, like, retweet, follow, DM, profile, media upload, communities)
