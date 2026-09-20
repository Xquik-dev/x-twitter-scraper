<p align="center">
  <strong>English</strong> ·
  <a href="README.es.md">Español</a> ·
  <a href="README.tr.md">Türkçe</a> ·
  <a href="README.zh-CN.md">简体中文</a> ·
  <a href="README.ja.md">日本語</a> ·
  <a href="README.ko.md">한국어</a> ·
  <a href="README.de.md">Deutsch</a> ·
  <a href="README.fr.md">Français</a> ·
  <a href="README.it.md">Italiano</a>
</p>

<table align="center"><tr><td align="center">
<a href="https://youtu.be/4UOSpoOoC3Y?t=367"><img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" width="720" alt="Framer connects Xquik MCP to coding agents"></a><br>
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">Watch how Framer uses Xquik scrapers with Claude Code, Codex, Cursor, and more, from 6:07.</a>
</td></tr></table>

Xquik is the world's fastest & cheapest X (Twitter) scraper service with the
most complete X data. X Reply Scraper collects replies, comments & whole
conversations. Every other Apify Actor charges before filtering or
deduplicating. Xquik charges only for delivered, unique, filter-matching
results.

Scrape X (Twitter) replies for **$0.00015 per delivered rows on every Apify
plan**. Paste post URLs, Tweet IDs, profile URLs, or usernames. Export replies,
conversations, authors, engagement, entities, and media URLs. Apify bills your
platform usage separately. You need no X login.

Filters run before dataset writes. You pay only for delivered rows.

>

## Incomplete extraction

Interrupted extraction writes a free `partial` diagnostic. Available results
remain intact. Read `availableResults`, `failedTargets`, `retryable`, and
`nextAction` before retrying. A successful Actor exit confirms delivery, not
complete extraction.

Xquik is an independent third-party service. Not affiliated with X Corp.

> "Twitter" and "X" are trademarks of X Corp.

## What does this Twitter reply scraper do?

X Reply Scraper collects public replies and comment conversations. It handles
single posts, bulk URL lists, Tweet IDs, and user reply timelines.

Use it for sentiment analysis, customer feedback, community research, reply
ranking, lead discovery, moderation review, and conversation datasets.

### Reply collection behavior

- Auto mode switches incomplete direct results to conversation search.
- Automatic Tweet reply pages request up to 300 rows.
- Four strategies cover direct replies, search, and thread context.
- Bulk inputs accept post URLs, Tweet IDs, profiles, and usernames.
- Profile targets combine timeline and author search when both apply.
- Filters and duplicate removal run before billing.
- Output supports 4 sort modes, 3 detail levels, and 3 field styles.
- Every reply keeps its source target, parent IDs, root ID, and depth.
- Continuation cursors support backfills and scheduled runs.
- Empty runs write 1 free record to `diagnostics`.
- Page and target logs include `fetchDurationMs`, `processingDurationMs`,
  `pushDurationMs`, `statusDurationMs`, `fullPageDurationMs`, and
  `fullTargetDurationMs` without repeating inputs.
- Checkpoints preserve accepted replies, timing, and failures after restarts.

### Always use the latest build

Select `latest` for every run to receive all published fixes.

If you specify no build, Apify uses this Actor's `latest` default. Console runs
and standard API examples inherit that default.

Saved tasks may override the Actor default. Schedules and task integrations
reuse that choice. Keep every override set to `latest`.

Apify does not redirect exact build numbers to `latest`. Replace pinned numbers
with `latest`. Use exact builds only for temporary rollbacks.

## Quick start

The initial form targets a verified public conversation. It returns up to 25
full, flat rows across at most 10 pages. Auto mode searches the full
conversation by default. Deduplication and source attribution stay on.

### Scrape replies from a post URL

```json
{
  "startUrls": [{ "url": "https://x.com/OpenAI/status/2082577277246972300" }],
  "maxItems": 100
}
```

### Scrape replies from Tweet IDs

```json
{
  "tweetIds": ["2082577277246972300", "2083148725367783580"],
  "maxItemsPerTarget": 100,
  "maxItems": 10000
}
```

### Collect the full nested conversation

```json
{
  "tweetIds": ["2082577277246972300"],
  "collectionStrategy": "conversationSearch",
  "scope": "all",
  "maxDepth": 5,
  "sort": "oldest",
  "maxItems": 500
}
```

### Scrape a user's reply timeline

```json
{ "usernames": ["OpenAI", "apify"], "maxItems": 10000 }
```

### Filter replies before billing

```json
{
  "tweetIds": ["2082577277246972300"],
  "anyWords": ["API", "agent", "developer"],
  "excludeWords": ["airdrop", "giveaway"],
  "lang": "en",
  "minLikes": 2,
  "minViews": 100,
  "verifiedOnly": true,
  "maxItems": 10000
}
```

### Export flat CSV-friendly rows

```json
{
  "tweetIds": ["2082577277246972300"],
  "outputMode": "full",
  "outputPreset": "flat",
  "fieldStyle": "camelCase",
  "maxItems": 100
}
```

Sample values are illustrative. Responses reflect source data at run time.

## AI agent & MCP readiness

Run this Actor through Apify MCP, API clients, x402, or Skyfire.

- Limited permissions protect unrelated Apify account data.
- Pay-per-event billing supports deterministic result-based costs.
- Standby mode stays disabled for agentic-payment compatibility.
- Typed schemas expose replies, run reports, and continuation cursors.
- Bounded defaults prevent accidental unbounded agent runs.
- Stable `camelCase` and `snake_case` modes simplify tool chaining.
- Diagnostic rows include a status, message, and recovery action.
- Run reports include exact outcomes, stop reasons, and charge estimates.

## Reply targets & input aliases

Use the primary fields below.

| Input         | Purpose                                      |
| ------------- | -------------------------------------------- |
| `startUrls`   | Mixed X post and profile URLs                |
| `tweetIds`    | Numeric post IDs                             |
| `usernames`   | Profile timelines with author search         |
| `startCursor` | Resume one target from a saved source cursor |

The visual form shows canonical controls only. Compatibility aliases stay
available in JSON, API, SDK, automation, and saved task inputs. Explicit
canonical and alias fields keep their existing resolution order when combined.

Compatibility aliases accept common competitor inputs:

- URL aliases: `urls`, `tweetUrls`, `postUrls`, `profileUrls`
- ID aliases: `conversationIds`, `postIds`, `ids`, `tweetId`, `id`
- Username aliases: `twitterHandles`, `screenname`
- Global limit aliases: `maxResults`, `max_results`, `resultsLimit`,
  `maxReplies`
- Per-target aliases: `maxRepliesPerTweet`, `maxCommentsPerPost`
- Search alias: `useSearch`
- Nested reply aliases: `includeNestedReplies`, `includeRepliesOfReplies`
- Original post alias: `includeOriginalTweet`
- Output aliases: `outputVariant`, `includeRaw`

Malformed or unsupported targets do not fail the Actor. The run returns an
actionable diagnostic when no valid targets remain.

Profile targets combine cursor pagination with author search. The Actor removes
duplicate rows before output and billing. Saved legacy cursors retain standard
pagination.

## Coverage strategies

### Auto complete

Use `collectionStrategy: "auto"` for most jobs. Full or nested scopes start with
complete reply extraction. Scope, depth, sort & author controls apply before
response limits. Extraction includes descendants beneath non-root targets.
Incomplete extraction preserves rows before trying conversation search & direct
replies. Direct scopes fall back to search when needed. Unfinished pages keep
their continuation. Explicit strategies never switch.

The diagnostic coverage threshold does not prove source exhaustion. Stalled
pages, limits, missing data, or errors keep recovery incomplete.

### Direct reply endpoint

Use `collectionStrategy: "replies"` to force X's reply timeline. This keeps the
source ordering and supports cursors.

### Conversation search

Use `collectionStrategy: "conversationSearch"` for broad conversation coverage.
The Actor searches by `conversation_id:<Tweet ID>`.

### Full thread context

Use `collectionStrategy: "thread"` to read the source conversation context. Set
`includeOriginalPost: true` to keep the root post as depth 0.

## Direct & nested reply controls

Use `scope` to choose the result shape.

| Value    | Result                                       |
| -------- | -------------------------------------------- |
| `direct` | Keep depth 1 replies                         |
| `nested` | Keep replies to replies at depth 2+          |
| `all`    | Keep every available direct and nested reply |

Use `maxDepth` to bound nesting. Parent links may be absent when X omits a
conversation ancestor. The Actor preserves the best available depth.

## Sorting

Use `sort` with these values:

- `relevance` preserves X source order
- `latest` sorts newest first
- `oldest` sorts oldest first
- `likes` sorts highest like count first

Profile targets collect the requested unique, filtered result count before
sorting it. Tweet targets retain global sorting.

The `sortBy` and `queryType` compatibility aliases remain supported.

## Reply filters

All supported filters run before dataset writes.

### Text & entity filters

| Input            | Behavior                          |
| ---------------- | --------------------------------- |
| `exactPhrase`    | Require one exact phrase          |
| `anyWords`       | Require at least 1 word or phrase |
| `excludeWords`   | Remove matching words or phrases  |
| `keywordInclude` | Alias merged with `anyWords`      |
| `keywordExclude` | Alias merged with `excludeWords`  |
| `hashtags`       | Require at least 1 hashtag        |
| `cashtags`       | Require at least 1 cashtag        |
| `mentioning`     | Require an @mention               |

### Author & language filters

| Input                   | Behavior                               |
| ----------------------- | -------------------------------------- |
| `fromUser`              | Keep one reply author                  |
| `toUser`                | Keep replies addressed to one username |
| `lang`                  | Keep one X language code               |
| `verifiedOnly`          | Require any public verification signal |
| `blueVerifiedOnly`      | Require X Premium verification         |
| `excludeOriginalAuthor` | Remove source-author self-replies      |

### Engagement filters

Use `minLikes`, `minReplies`, `minRetweets`, `minQuotes`, `minViews`, and
`minBookmarks`. The `minFaves` alias maps to `minLikes`.

### Media & time filters

- Set `hasMediaOnly: true` for replies with public media.
- Set `mediaType` to `any`, `image`, `video`, `gif`, or `link`.
- Set `since` for an inclusive start timestamp.
- Set `until` for an exclusive end timestamp.
- Use `sinceTime` and `untilTime` as compatibility aliases.

## Limits, billing & continuation

`maxItems` limits delivered rows across the run. `maxItemsPerTarget` limits each
post or profile.

Independent targets run concurrently. Each target keeps ordered cursor
pagination. Dataset writes keep caps, deduplication, attribution, and billing
atomic.

The Actor removes duplicates before billing. Set `dedupeAcrossTargets: false` to
preserve duplicate rows from different targets.

After a page-limited run, read `next-cursors` from the default key-value store.
Pass one cursor through `startCursor` to continue that target.

## Output fields

Dataset and run-report schemas describe every returned field. Primitive fields
also include examples for agents and generated integrations.

Every full reply row can include these core fields:

| Field               | Description                                              |
| ------------------- | -------------------------------------------------------- |
| `id`                | Reply ID                                                 |
| `text`              | Reply text                                               |
| `fullText`          | Long-form reply text                                     |
| `createdAt`         | Reply timestamp                                          |
| `lang`              | X language code                                          |
| `url`               | Direct reply URL                                         |
| `conversationId`    | X conversation ID                                        |
| `inReplyToId`       | Immediate parent ID                                      |
| `inReplyToUserId`   | Parent author ID                                         |
| `inReplyToUsername` | Parent username                                          |
| `likeCount`         | Likes                                                    |
| `replyCount`        | Child replies                                            |
| `retweetCount`      | Reposts                                                  |
| `quoteCount`        | Quotes                                                   |
| `viewCount`         | Views                                                    |
| `bookmarkCount`     | Bookmarks                                                |
| `author`            | Available public author metadata                         |
| `media`             | Images, videos, GIFs, and variants                       |
| `entities`          | Hashtags, cashtags, mentions, URLs, and video timestamps |
| `quoted_tweet`      | Quoted post when available                               |
| `retweeted_tweet`   | Reposted post when available                             |

Full rows also preserve available source metadata. This includes `isNoteTweet`,
`isReply`, `isLimitedReply`, `isQuoteStatus`, `source`, `type`,
`displayTextRange`, `contentDisclosure`, `conversationControl`, `article`,
`limitedActions`, `reactionContext`, `card`, `communityId`, `communityNote`,
`edit`, `isTranslatable`, `noteTweet`, `place`, `postCta`, `possiblySensitive`,
`previousCounts`, `tombstone`, `unmentionedUserIds`, and `viewState`.

Flat rows keep conversation ancestry, source details, result type, and schema
version. See OpenAPI for the exact fields.

### Author metadata

Nested authors follow the public profile contract. It covers identity, counts,
verification, availability, professional data, and profile biographies.

Flat output adds `authorId`, `authorUsername`, `authorName`, `authorFollowers`,
`authorFollowing`, and `authorVerified`.

### Media metadata

Media includes availability, geometry, tags, video variants, `watchNowUrl`, and
`visitSiteUrl` actions.

Flat output adds `mediaUrls`.

## Output modes

### Compact

Set `outputMode: "compact"` to reduce dataset width. It preserves text,
conversation, author, engagement, and media fields.

### Full

Set `outputMode: "full"` to preserve every supported public field.

### Raw

Set `outputMode: "raw"` to add a sanitized source snapshot under `raw`.

### Nested or flat

The default `flat` layout keeps nested objects and adds author fields for
tables. Set `outputPreset: "nested"` to omit the added flat fields.

### Field naming

Set `fieldStyle` to `source`, `camelCase`, or `snake_case`. The Actor avoids
overwriting colliding source keys.

## Diagnostics

Successful data rows use `resultType: "reply"`. Non-data exits write exactly 1
free record to `diagnostics` with an actionable fix.

Every outcome writes `run-report`, including no-input and invalid-input exits.
The report schema documents completion, billing, failures, and saved cursors.
Its `version` field reports the exact published Actor source version.

Possible statuses include:

- `no-input`
- `invalid-input`
- `replies-incomplete`
- `zero-output`
- `aborted`
- `unexpected-error`

## How much does it cost?

Every Apify plan costs **$0.00015 per delivered row**. This equals
`$0.00015` per
row. Apify bills platform usage separately.

Xquik applies one charge per delivered data row. Diagnostics are free in
`diagnostics`. No start, URL, query, pagination, filter, or proxy fee applies.

The default Apify timeout is `0`, so runs have no time limit. The Actor
continues until it reaches the cap or runs out of eligible data. A caller can
still set a finite Apify timeout. Then `completionReason: "deadline_reached"`
means that configured limit is near. The Actor keeps the final 15 seconds for
checkpoints, rows, reports, and a successful exit. Replies already collected
remain delivered and bill once. Unfinished pagination remains resumable.

## Public task examples

Choose from 50 public tasks. Each has a bounded input and a matching dataset
view. Edit any task before running it.

Start with these examples:

- [Collect replies for AI agents](https://apify.com/xquik/x-reply-scraper/examples/collect-replies-for-ai-agents)
- [Build an X reply RAG dataset](https://apify.com/xquik/x-reply-scraper/examples/build-x-reply-rag-dataset)
- [Archive replies for LLM processing](https://apify.com/xquik/x-reply-scraper/examples/archive-replies-for-llm-processing)
- [Extract reply leads for CRM](https://apify.com/xquik/x-reply-scraper/examples/extract-reply-leads-for-crm)

## API example

### JavaScript

```javascript
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: '<APIFY_API_TOKEN>' });
const run = await client
  .actor('xquik/x-reply-scraper')
  .call({
    tweetIds: ['2082577277246972300'],
    collectionStrategy: 'auto',
    scope: 'all',
    maxItems: 100,
  });

const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
```

### Python

```python
from apify_client import ApifyClient

client = ApifyClient("<APIFY_API_TOKEN>")
run = client.actor("xquik/x-reply-scraper").call(run_input={
    "tweetIds": ["2082577277246972300"],
    "collectionStrategy": "auto",
    "scope": "all",
    "maxItems": 100,
})

for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
```

### cURL

```bash
curl "https://api.apify.com/v2/acts/xquik~x-reply-scraper/run-sync-get-dataset-items" \
  -X POST \
  -H "Authorization: Bearer <APIFY_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"tweetIds":["2082577277246972300"],"maxItems":100}'
```

## Automation & integrations

Run the Actor through Apify schedules, webhooks, API clients, Make, Zapier, n8n,
Google Sheets, cloud storage, or the
[Apify MCP server](https://docs.apify.com/platform/integrations/mcp).

Eligible agent workflows can also use
[x402](https://docs.apify.com/integrations/x402) or
[Skyfire](https://docs.apify.com/integrations/skyfire).

Xquik also provides 47 dashboard tools, 129 REST operations, signed webhooks,
and an MCP server.

## Responsible use

Collect only public data. Follow applicable laws and platform rules.

Reply datasets can contain personal data. Choose a lawful purpose. Minimize
retention. Protect exports. Honor deletion and access requests where required.

The Actor does not bypass protected accounts. It does not request customer X
passwords, session cookies, or authentication tokens.

## Related Xquik Actors

Every Xquik Actor shares the same extraction engine, filter-first billing &
diagnostics. Pick the one that matches the data you need.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): Scrapes tweets
  from searches, profile timelines, Lists & tweet IDs with 50+ filters & flat
  exports. Use it when you need tweet data without analysis. From $0.00015 per
  row.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): Scrapes
  profiles plus their posts, replies, media & followers from handles, IDs or
  URLs. Use it when you start from accounts rather than searches. From $0.00015
  per row.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): Scrapes
  replies, quotes, retweeters & threads for post URLs or IDs in bulk. Use it
  when you measure who engaged with posts. From $0.00015 per row.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): Scrapes
  followers, following, List members, subscribers & Community members as profile
  rows. Use it when you need audience or member lists. From $0.00015 per
  profile.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper):
  Searches users by handle, bio & location with follower, verification, age &
  location filters. Use it when you build account lists from search. From
  $0.00015 per profile.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): Scrapes List posts,
  members & followers from List URLs or IDs. Use it when a curated List defines
  your sources. From $0.00015 per row.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): Scrapes
  Community info, posts, searches, members & moderators. Use it when your
  sources are X Communities. From $0.00015 per row.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): Scrapes
  real-time trends by location with rank, volume, query & WOEID. Use it when you
  track what is trending where. From $0.00015 per trend.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): Scrapes
  long-form X Articles as Markdown & text with covers, authors, dates & metrics.
  Use it when you need article bodies, not tweets. From $0.00015 per article.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): Extracts or
  stores photos, videos & GIFs from posts or profiles with MP4 & metadata
  options. Use it when you need the media files themselves. From $0.00015 per
  media row.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  Tracks brand mentions with AI relevance, sentiment & customer-experience
  answers & compares runs. Use it when you watch a brand over time. From $0.0003
  per analyzed tweet.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  Labels attitude, intensity & sarcasm probability for every tweet with AI. Use
  it when you need general sentiment on any topic. From $0.0003 per analyzed
  tweet.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  Labels bullish, bearish, neutral or mixed stance, content type, conviction &
  asset relevance with AI. Use it when you follow stocks, crypto or trading
  talk. From $0.0003 per analyzed tweet.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  Labels news posts by format, source attribution & topic relevance with AI. Use
  it when you separate reporting from commentary. From $0.0003 per analyzed
  tweet.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  Answers your own category, score & yes/no questions for every tweet with AI.
  Use it when the preset analyses do not fit your labels. From $0.0003 per
  analyzed tweet.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer):
  Estimates a Viral Score from 0 to 100 & a verdict for every tweet from 8 AI
  trait answers. Use it when you study why tweets spread or flop. From $0.0003
  per analyzed tweet.
