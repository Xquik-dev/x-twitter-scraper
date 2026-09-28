**English** ·
[Español](README.es.md)
·
[Türkçe](README.tr.md)
·
[简体中文](README.zh-CN.md)
·
[日本語](README.ja.md)
·
[한국어](README.ko.md)
·
[Deutsch](README.de.md)
·
[Français](README.fr.md)
·
[Italiano](README.it.md)

[![Framer connects Xquik MCP to coding agents](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)

[Watch how Framer uses Xquik scrapers](https://youtu.be/4UOSpoOoC3Y?t=367) with
Claude Code, Codex, Cursor, and more, from 6:07.

Xquik is the world's fastest & cheapest X (Twitter) scraper service with the
most complete X data. Xquik's X Reply Scraper collects replies, comments & whole
conversations. Most other Apify Actors charge before filtering or deduplicating.
Xquik charges only for **delivered, unique, filter-matching results**.

Scrape X (Twitter) replies for **$0.00015 per delivered row** on every Apify
plan. Paste post URLs, Tweet IDs, profile URLs or usernames. Export replies,
conversations, authors, engagement, entities & media URLs. Apify bills your
platform usage separately. You need no X login. Filters run before dataset
writes, so you pay only for delivered rows.

> Xquik is an independent third-party service. Not affiliated with X Corp.
> "Twitter" and "X" are trademarks of X Corp.

## What does this Twitter reply scraper do?

Xquik's X Reply Scraper collects public replies & comment conversations. It
handles single posts, bulk URL lists, Tweet IDs & user reply timelines.

Use it for sentiment analysis, customer feedback & community research. Other
uses include reply ranking, lead discovery, moderation review & conversation
datasets.

### Reply collection behavior

- Auto mode keeps collecting when direct results are incomplete.
- `collectionStrategy` offers 4 modes for different reply jobs.
- Bulk inputs accept post URLs, Tweet IDs, profiles & usernames.
- Filters & duplicate removal run before billing.
- Output supports 4 sort modes, 3 detail levels & 3 field styles.
- Every reply keeps its source target, parent IDs, root ID & depth.
- Continuation cursors support backfills & scheduled runs.
- Empty runs write 1 free record to `diagnostics`.
- Run logs show page & target timing in `fetchDurationMs`,
  `processingDurationMs`, `pushDurationMs`, `statusDurationMs`,
  `fullPageDurationMs` & `fullTargetDurationMs`.
- Runs keep delivered replies & progress when Apify restarts them.

## How to scrape X replies

1. Paste post URLs, Tweet IDs, profile URLs or usernames.
2. Set `maxItems`, `scope` & the filters your job needs.
3. Run Xquik's X Reply Scraper & open the dataset.

The prefilled form targets a verified public conversation. It returns up to 25
full, flat rows. Auto mode searches the full conversation by default.
Deduplication & source attribution stay on.

### Scrape replies from a post URL

```json
{
  "startUrls": [{ "url": "https://x.com/OpenAI/status/2082577277246972300" }],
  "maxItems": 100
}
```

### Scrape replies from tweet IDs

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

## How much does it cost to scrape X replies?

Xquik's X Reply Scraper costs $0.00015 per delivered row on every Apify plan.
Apify bills platform usage separately.

Xquik applies one charge per delivered data row. Replies that your filters or
deduplication remove cost nothing. Diagnostic records in `diagnostics` are free.
No start, URL, query, pagination or filter fee applies.

## Public task examples

Choose from 50 public tasks. Each has a bounded input & a matching dataset view.
Edit any task before you run it.

Start with these examples:

- [Collect replies for AI agents](https://apify.com/xquik/x-reply-scraper/examples/collect-replies-for-ai-agents)
- [Build an X reply RAG dataset](https://apify.com/xquik/x-reply-scraper/examples/build-x-reply-rag-dataset)
- [Archive replies for LLM processing](https://apify.com/xquik/x-reply-scraper/examples/archive-replies-for-llm-processing)
- [Extract reply leads for CRM](https://apify.com/xquik/x-reply-scraper/examples/extract-reply-leads-for-crm)

## AI agent & MCP readiness

Run Xquik's X Reply Scraper through Apify MCP, API clients, x402 or Skyfire.

- Limited permissions protect unrelated Apify account data.
- Pay-per-event billing ties cost to delivered results.
- Standby mode stays off for compatibility with agentic payments.
- Typed schemas describe replies, run reports & continuation cursors.
- Bounded defaults prevent accidental unbounded agent runs.
- Stable `camelCase` & `snake_case` modes simplify tool chaining.
- Diagnostic rows include a status, a message & a recovery action.
- Run reports include exact outcomes, stop reasons & charge estimates.

## Reply targets & input aliases

Use these primary fields.

| Input         | Purpose                               |
| ------------- | ------------------------------------- |
| `startUrls`   | Mixed X post and profile URLs         |
| `tweetIds`    | Numeric post IDs                      |
| `usernames`   | Profile reply timelines               |
| `startCursor` | Resume one target from a saved cursor |

The input form shows canonical controls only. Compatibility aliases still work
in JSON, API, SDK, automation & saved task inputs. When you combine canonical &
alias fields, their existing resolution order applies.

These aliases accept common field names from other scrapers:

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

Malformed or unsupported targets do not fail the Actor. When no valid target
remains, the run writes a diagnostic with the fix.

## Coverage strategies

Pick how the Actor collects replies. Auto fits most jobs.

### Auto complete

Use `collectionStrategy: "auto"` for most jobs. It collects every reply it can
reach for your scope. Scope, depth, sort & author controls apply before your
limits. It includes replies below non-root targets. When X hides part of a
thread, the status says how many replies X hides. The other `collectionStrategy`
values never switch modes.

A coverage figure in diagnostics does not prove X has no more replies. Limits,
missing data or errors can leave a run incomplete.

### Direct replies

Use `collectionStrategy: "replies"` for direct replies in X's own order. It
supports saved cursors.

### Conversation search

Use `collectionStrategy: "conversationSearch"` for broad conversation coverage.

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

Use `maxDepth` to limit nesting. When X omits a conversation ancestor, the
parent link can be missing. The Actor preserves the best available depth.

## Sorting

Use `sort` with these values:

- `relevance` keeps X source order
- `latest` sorts newest first
- `oldest` sorts oldest first
- `likes` sorts highest like count first

Profile targets collect your requested count of unique, filtered results, then
sort them. Tweet targets keep global sorting.

The `sortBy` & `queryType` compatibility aliases still work.

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

Use `minLikes`, `minReplies`, `minRetweets`, `minQuotes`, `minViews` &
`minBookmarks`. The `minFaves` alias maps to `minLikes`.

### Media & time filters

- Set `hasMediaOnly: true` for replies with public media.
- Set `mediaType` to `any`, `image`, `video`, `gif` or `link`.
- Set `since` for an inclusive start timestamp.
- Set `until` for an exclusive end timestamp.
- Use `sinceTime` & `untilTime` as compatibility aliases.

## Output fields

The dataset & run-report schemas describe every returned field. Primitive fields
also carry examples for agents & generated integrations.

Every full reply row can include these core fields:

| Field               | Description                                           |
| ------------------- | ----------------------------------------------------- |
| `id`                | Reply ID                                              |
| `text`              | Reply text                                            |
| `fullText`          | Long-form reply text                                  |
| `createdAt`         | Reply timestamp                                       |
| `lang`              | X language code                                       |
| `url`               | Direct reply URL                                      |
| `conversationId`    | X conversation ID                                     |
| `inReplyToId`       | Immediate parent ID                                   |
| `inReplyToUserId`   | Parent author ID                                      |
| `inReplyToUsername` | Parent username                                       |
| `likeCount`         | Likes                                                 |
| `replyCount`        | Child replies                                         |
| `retweetCount`      | Reposts                                               |
| `quoteCount`        | Quotes                                                |
| `viewCount`         | Views                                                 |
| `bookmarkCount`     | Bookmarks                                             |
| `author`            | Available public author metadata                      |
| `media`             | Images, videos, GIFs, and variants                    |
| `entities`          | Hashtags, cashtags, mentions, URLs & video timestamps |
| `quoted_tweet`      | Quoted post when available                            |
| `retweeted_tweet`   | Reposted post when available                          |

Full rows also keep available source metadata:

- Post type fields are `type`, `isReply`, `isQuoteStatus`, `isNoteTweet`,
  `isLimitedReply` & `isTranslatable`.
- Text details are `displayTextRange`, `noteTweet`, `article` & `card`.
- Labels & notices are `contentDisclosure`, `communityNote`,
  `possiblySensitive`, `tombstone` & `exclusiveContent`.
- Conversation details are `conversationControl`, `limitedActions` &
  `unmentionedUserIds`.
- Context fields are `source`, `place`, `communityId`, `reactionContext` &
  `postCta`.
- Edit & availability fields are `edit`, `previousCounts`, `viewState` &
  `authorUnavailable`.

Flat rows keep conversation ancestry, source details, result type & schema
version. See OpenAPI for the exact fields.

### Author metadata

Nested authors follow the public profile contract. It covers identity, counts,
verification, availability, professional data & profile biographies.

Flat output adds `authorId`, `authorUsername`, `authorName`, `authorFollowers`,
`authorFollowing` & `authorVerified`.

### Media metadata

Media covers availability, geometry, tags & video variants. It also has the
`watchNowUrl` & `visitSiteUrl` actions.

Flat output adds `mediaUrls`.

### Output example

A trimmed reply row looks like this:

```json
{
  "resultType": "reply",
  "id": "1881423000000000000",
  "url": "https://x.com/example/status/1881423000000000000",
  "text": "Thanks for sharing this update.",
  "createdAt": "2026-08-09T12:00:00.000Z",
  "lang": "en",
  "conversationId": "1881422000000000000",
  "rootTweetId": "1881422000000000000",
  "parentReplyId": "1881422000000000000",
  "depth": 1,
  "isDirectReply": true,
  "likeCount": 42,
  "replyCount": 3,
  "retweetCount": 5,
  "quoteCount": 2,
  "viewCount": 1000,
  "bookmarkCount": 7,
  "authorUsername": "example",
  "authorName": "Example User",
  "authorFollowers": 1000,
  "authorVerified": false,
  "mediaUrls": ["https://pbs.twimg.com/media/example.jpg"],
  "sourceTweetId": "1881422000000000000",
  "sourceTarget": "1881422000000000000"
}
```

Sample values are illustrative. Real runs return live data.

## Output modes

Pick how wide each dataset row is.

### Compact

Set `outputMode: "compact"` for a narrower dataset. It keeps text, conversation,
author, engagement & media fields.

### Full

Set `outputMode: "full"` to keep every supported public field.

### Raw

Set `outputMode: "raw"` to add a sanitized source snapshot under `raw`.

### Nested or flat

The default `flat` layout keeps nested objects & adds author fields for tables.
Set `outputPreset: "nested"` to omit the added flat fields.

### Field naming

Set `fieldStyle` to `source`, `camelCase` or `snake_case`. The Actor avoids
overwriting colliding source keys.

## Limits, billing & continuation

`maxItems` limits delivered rows across the run. `maxItemsPerTarget` limits each
post or profile.

One run can read many targets. Caps, deduplication, attribution & billing stay
exact across them.

The Actor removes duplicate rows before output & billing. Set
`dedupeAcrossTargets: false` to keep duplicate rows from different targets.

After a page-limited run, read `next-cursors` from the default key-value store.
Pass one cursor through `startCursor` to continue that target.

### Apify timeout

The default Apify timeout is `0`, so runs have no time limit. The Actor
continues until it reaches the cap or runs out of eligible data. You can still
set a finite Apify timeout. Then `completionReason: "deadline_reached"` means
that limit is near. The Actor saves replies & the report, then exits cleanly
before the limit. Delivered replies bill once. Unfinished targets stay
resumable.

## Incomplete extraction

An interrupted run writes a free `partial` diagnostic. Available results stay
intact. Read `availableResults`, `failedTargets`, `retryable` & `nextAction`
before you retry. A successful Actor exit confirms delivery, not complete
extraction.

The status names every cause of an early stop. `stopCauses` lists each cause
with its own `message`, `retryable` & `nextAction`. The causes are
`target_not_found`, `target_failed`, `page_limit`, `reply_reach` &
`deadline_reached`. `reply_reach` means X served only part of a thread.

A missing post or account does not count as a failure. The status names it, such
as "X has no match for 1 target." It joins `stopCauses` only when another cause
stopped the run. The run is `retryable` when any cause is.

## Diagnostics

Successful data rows use `resultType: "reply"`. Runs that exit without data
write exactly 1 free record to `diagnostics`. The record says how to fix the
problem.

The run status says why the run stopped. It also counts charged results &
targets read. Runs with a problem always write `run-report`, including no-input
and invalid-input exits. A large run writes it too. A small run that goes well
skips it & saves Apify usage. Turn on `alwaysSaveRunRecords` to write it on
every run.

The report schema documents completion, billing, failures & saved cursors. Its
`version` field reports the exact published Actor source version.

The `status` field uses these values:

- `no-input`
- `invalid-input`
- `replies-incomplete`
- `zero-output`
- `aborted`
- `unexpected-error`

## API examples

Each example runs Xquik's X Reply Scraper & returns the dataset items. Replace
`<APIFY_API_TOKEN>` with your Apify API token.

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
actor=xquik~x-reply-scraper
curl "https://api.apify.com/v2/acts/$actor/run-sync-get-dataset-items" \
  -X POST \
  -H "Authorization: Bearer <APIFY_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"tweetIds":["2082577277246972300"],"maxItems":100}'
```

## Automation & integrations

Run Xquik's X Reply Scraper through Apify schedules, webhooks or API clients.
Connect it to Make, Zapier, n8n, Google Sheets or cloud storage. Agents can call
it through the
[Apify MCP server](https://docs.apify.com/platform/integrations/mcp).

Eligible agent workflows can also use
[x402](https://docs.apify.com/integrations/x402) or
[Skyfire](https://docs.apify.com/integrations/skyfire).

Xquik also offers 47 dashboard tools, 129 REST operations, signed webhooks & an
MCP server.

### Always use the latest build

Select `latest` for every run to get all published fixes.

If you specify no build, Apify uses this Actor's `latest` default. Console runs
& standard API examples inherit that default.

Saved tasks may override the Actor default. Schedules & task integrations reuse
that choice. Keep every override set to `latest`.

Apify does not redirect exact build numbers to `latest`. Replace pinned numbers
with `latest`. Use exact builds only for temporary rollbacks.

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

## FAQ

Answers to common questions, then where to get help.

### Do I need an X API key or login?

No. You need no X API key, login or credentials. Xquik's X Reply Scraper never
asks for your X password, cookies or tokens.

### Is it legal to scrape X replies?

Xquik's X Reply Scraper collects public replies & does not bypass protected
accounts. Collect only public data. Follow applicable laws & platform rules.

Reply datasets can contain personal data. Choose a lawful purpose. Minimize
retention. Protect exports. Honor deletion & access requests where required. Ask
qualified counsel when uncertain.

### Why did my run return fewer replies than the post shows?

When X hides part of a thread, the status says how many replies X hides.
`reply_reach` in `stopCauses` means X served only part of a thread. Filters,
deduplication, `scope`, `maxDepth` & your limits also lower the count.

### Can I use the API, schedules & integrations?

Yes. The [API tab](https://apify.com/xquik/x-reply-scraper/api) shows Python,
JavaScript & cURL examples. Use Apify
[schedules](https://docs.apify.com/platform/schedules) to run Xquik's X Reply
Scraper on a cron. It also connects to Make, Zapier, n8n & Google Sheets.

### Where do I get help?

Open an issue on the Actor page or contact <support@xquik.com> with the run ID.

### Can I get a custom solution?

Yes. Visit [xquik.com](https://xquik.com) or read the
[API docs](https://docs.xquik.com/introduction). Xquik offers a dashboard, a
REST API, an MCP server & webhooks.
