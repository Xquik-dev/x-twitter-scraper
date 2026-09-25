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
most complete X data. X Tweet Scraper collects tweets, replies, profiles, lists
& searches with 50+ filters. Every other Apify Actor charges before filtering or
deduplicating. Xquik charges only for delivered, unique, filter-matching
results.

Scrape public X (Twitter) tweets for **from $0.00015 per delivered result on
every Apify plan**. Apify bills platform usage separately. No X login, start
fee, or query fee. Built by [Xquik](https://xquik.com).

> Xquik is an independent third-party service. Not affiliated with X Corp.
> "Twitter" and "X" are trademarks of X Corp.

## What does X Tweet Scraper do?

X Tweet Scraper returns tweets, engagement metrics, public author profiles, and
media. It accepts URLs, handles, List IDs, Tweet IDs, and search queries with
50+ filters.

### Core behavior

- Filters and duplicate removal run before billing.
- One input supports lookups, timelines, Lists, search, and engagement modes.
- Tweet ID inputs have no fixed count cap. Apify spend and timeout settings
  apply.
- Run logs show page timing in `fetchDurationMs`, `processingDurationMs`,
  `pushDurationMs`, `statusDurationMs` & `fullPageDurationMs`.
- Runs keep delivered rows & progress when Apify restarts them.

### Always use the latest build

Select `latest` for every run to receive all published fixes.

If you specify no build, Apify uses this Actor's `latest` default. Console runs
and standard API examples inherit that default.

Saved tasks may override the Actor default. Schedules and task integrations
reuse that choice. Keep every override set to `latest`.

Apify does not redirect exact build numbers to `latest`. Replace pinned numbers
with `latest`. Use an exact build only for temporary rollback or
reproducibility.

Read Apify's
[build tags](https://docs.apify.com/platform/actors/development/builds-and-runs/builds),
[run options](https://docs.apify.com/platform/actors/running/runs-and-builds),
and [task documentation](https://docs.apify.com/platform/actors/running/tasks).

## Task examples

Choose from 50 public tasks. Each has a bounded input and a matching dataset
view. Every task opens with a real search or target. Edit it before running.

- [Fetch fresh X posts for AI agents](https://apify.com/xquik/x-tweet-scraper/examples/search-x-posts-for-ai-agents)
- [Build an X dataset for RAG](https://apify.com/xquik/x-tweet-scraper/examples/build-x-rag-dataset)
- [Extract an X article for RAG](https://apify.com/xquik/x-tweet-scraper/examples/extract-x-article-for-rag)
- [Monitor AI search visibility on X](https://apify.com/xquik/x-tweet-scraper/examples/monitor-ai-search-visibility-on-x)
- [Track AI SEO and generative engine optimization](https://apify.com/xquik/x-tweet-scraper/examples/track-generative-engine-optimization-talk)
- [Discover AI agent tools on X](https://apify.com/xquik/x-tweet-scraper/examples/discover-ai-agent-tools-on-x)
- [Collect AI product feedback](https://apify.com/xquik/x-tweet-scraper/examples/collect-ai-product-feedback)
- [Monitor brand mentions on X](https://apify.com/xquik/x-tweet-scraper/examples/monitor-brand-mentions-on-x)
- [Export Twitter data to CSV](https://apify.com/xquik/x-tweet-scraper/examples/export-twitter-data-to-csv)
- [Collect replies to an OpenAI post](https://apify.com/xquik/x-tweet-scraper/examples/collect-replies-to-an-openai-post)
- [Extract a complete Twitter thread](https://apify.com/xquik/x-tweet-scraper/examples/extract-complete-twitter-thread)
- [Collect Spanish AI conversations](https://apify.com/xquik/x-tweet-scraper/examples/collect-spanish-ai-conversations)

### What data can X Tweet Scraper extract?

| Field                  | Description                                              |
| ---------------------- | -------------------------------------------------------- |
| `id`                   | Tweet ID                                                 |
| `text`                 | Full tweet text (including Note Tweets up to 25k chars)  |
| `createdAt`            | X native timestamp string                                |
| `likeCount`            | Number of likes                                          |
| `retweetCount`         | Number of retweets                                       |
| `replyCount`           | Number of replies                                        |
| `quoteCount`           | Number of quote tweets                                   |
| `viewCount`            | Number of views                                          |
| `bookmarkCount`        | Number of bookmarks                                      |
| `lang`                 | Tweet language                                           |
| `url`                  | Direct link to tweet                                     |
| `tweetUrl`             | Flat output tweet URL alias                              |
| `twitterUrl`           | Flat output twitter.com-formatted URL                    |
| `author`               | Available author fields (username, bio, website, counts) |
| `authorUsername`       | Flat output author handle                                |
| `authorFollowers`      | Flat output author follower count                        |
| `authorUrl`            | Flat output author website when available                |
| `authorDescription`    | Flat output author bio text                              |
| `authorCoverPicture`   | Flat output author banner image URL                      |
| `authorPinnedTweetIds` | Flat output author pinned tweet IDs                      |
| `media`                | Attached images, videos, GIFs                            |
| `mediaUrls`            | Flat output media URLs                                   |
| `imageUrls`            | Flat output image URLs                                   |
| `videoUrls`            | Flat output video URLs                                   |
| `entities`             | Hashtags, URLs, mentions, and video timestamps           |
| `displayTextRange`     | X display text range when available                      |
| `contentDisclosure`    | Disclosure metadata when available                       |
| `conversationControl`  | Reply policy and public conversation owner               |
| `reactionContext`      | Public post and user referenced by a reaction            |
| `limitedActions`       | Public interaction restrictions and prompts              |
| `isLimitedReply`       | Whether replies are limited                              |
| `isNoteTweet`          | Whether this is a Note Tweet (long-form post)            |
| `isQuoteStatus`        | Whether this tweet quotes another tweet                  |
| `isRetweet`            | Whether this row is a retweet, original attached         |
| `isPinned`             | Whether the author pinned this post, flat rows           |
| `isReply`              | Whether this tweet is a reply                            |
| `quoted_tweet`         | Quoted tweet object (if quote tweet)                     |
| `conversationId`       | Thread/conversation ID                                   |
| `resultType`           | Row type for rich rows, engagement rows, and diagnostics |
| `sourceTweetId`        | Source tweet ID for article and engagement modes         |
| `article`              | Structured article data in `mode: "article"`             |

Optional tweet metadata may include `authorUnavailable`, `card`, `communityId`,
`communityNote`, `edit`, `exclusiveContent`, `noteTweet`, and `postCta`.
`isTranslatable`, `place`, `possiblySensitive`, and `viewState` preserve other
public context. `previousCounts` preserves pre-edit engagement. `tombstone`
preserves notices. `unmentionedUserIds` lists users who left the conversation.
See OpenAPI for the exact fields.

Nested authors follow the public profile contract. It covers identity, counts,
verification, availability, professional data, and profile biographies.

Retweet rows set `isRetweet` to `true`. Their `text` carries the original post
in full, and `retweeted_tweet` holds the original post with its author & counts.

Tweet rows also preserve `type`, `source`, `inReplyToId`, `inReplyToUserId`,
`inReplyToUsername`, and `retweeted_tweet`. Quoted and reposted tweets preserve
the same supported safe fields recursively.

Media includes availability, geometry, tags, video variants, `watchNowUrl`, and
`visitSiteUrl` actions.

Rows never include viewer-only state. Follow, block, mute, bookmark, like,
repost, edit-permission & similar viewer flags are always removed, including
from raw output.

## How much does it cost to scrape tweets?

Every Apify plan costs `$0.00015` per delivered row. Apify bills your platform
usage separately. Xquik applies one charge per delivered data row. Diagnostics
are free in the `diagnostics` output.

No Xquik subscription applies. No separate start or query fee applies. Each run
also writes a `run-report` record with `estimatedChargeUsd` calculated from the
live pay-per-event price Apify exposes to the Actor. Every outcome writes
`run-report`, including no-input and invalid-input exits. Run reports separate
data rows in `realRows` and diagnostics in `diagnosticRows`.

Understand empty results before spending on another run. The `filtering` object
in reports & final diagnostics counts the rows your filters removed. See
`serverFilteredRows`, `actorFilteredRows` & `pagesWithUnknownServerFiltering`.
Filtered rows never incur result charges.

Source exhaustion can complete extraction below your requested limit. These runs
report `outcome: "complete"` with `completionReason: "source_exhausted"`.
Interrupted runs retain their partial outcome & retry guidance.

`failedSubtargets` counts queries & profile targets that stopped after an error.
Delivered rows stay in the dataset & count toward billing. An error never means
the target is missing. These runs use `completionReason: "partial_failure"`.

Interrupted extraction also writes a free `partial` diagnostic. Available
results remain intact. The diagnostic reports `availableResults`,
`failedTargets`, `retryable`, and `nextAction`. A successful Actor exit confirms
delivery, not complete extraction.

The status text names every cause of the stop. A run with a missing account & a
stalled search says both. `stopCauses` lists each cause with its own `message`,
`retryable` & `nextAction`. The causes are `target_not_found`,
`target_protected`, `search_unavailable`, `likes_hidden`, `target_failed`,
`pagination_safety_limit`, `reply_reach` & `deadline_reached`. The run is
`retryable` when any cause is.

Protected or missing targets count as failures, including runs with valid
results. So does a search X cannot run. X.com shows "Something went wrong" for
such a search, & the run stops it at once without retries. So do likes X hides.
X shows who liked a post only to its author, & the posts an account liked only
to that account. When all failures concern unavailable targets, diagnostics set
`retryable: false`. Check target URLs or usernames & choose available public
accounts. Narrow a search X cannot run or change its filters. Read retweeters,
replies or posts in place of hidden likes. Other failures retain retry guidance
for unfinished targets.

The diagnostic names those targets in `unavailableTargets`. Each entry has the
`target` as you entered it & a `reason`: `not_found`, `protected`,
`search_unavailable` or `likes_hidden`. The list holds up to 100 entries. Remove
them from the input to get a complete run.

`completionReason: "pagination_safety_limit"` is not a read failure. The run
kept its valid rows, then ended a target that no longer returned new results.
The run reports incomplete extraction. `failedSubtargets` stays `0`. You pay
only for delivered rows.

The default Apify timeout is `0`, so runs have no time limit. The Actor
continues until it reaches the cap or runs out of eligible data. You can still
set a finite Apify timeout. Then `completionReason: "deadline_reached"` means
that limit is near. The Actor saves rows & the report, then exits cleanly before
the limit. Delivered rows bill once.

- Starts, queries, URLs, and single Tweet lookups add no separate fee.
- The Actor removes duplicates before writing or billing rows.
- No-input, invalid-input, and zero-output runs write 1 actionable record to the
  free `diagnostics` output.

## How do I use X Tweet Scraper to scrape tweet data?

### 1. Paste URLs directly

Paste a mix of tweet, profile, search, or list URLs:

```json
{
  "startUrls": [
    { "url": "https://x.com/elonmusk/status/1846987139428634858" },
    { "url": "https://x.com/nasa" },
    { "url": "https://x.com/search?q=AI%20lang%3Aen" },
    { "url": "https://x.com/i/lists/1748648376080666720" }
  ],
  "maxItems": 500
}
```

Tweet URLs return those tweets, unique & in your input order. Profile URLs
return the account's posts. Search URLs run their query. List URLs return the
List's posts. `maxItems` caps results across all pasted URLs.

### 2. Bulk handles

Shorthand for many `from:username` searches:

```json
{ "twitterHandles": ["elonmusk", "nasa", "openai"], "maxItems": 100 }
```

Each handle returns that account's posts. The Actor removes duplicate rows
before output & billing. Usernames accept an optional `@` prefix. Handles &
profile URLs keep reposts, as the Posts tab on X does, even with dates or
filters. Set `tweetTypes.excludeRetweets` to drop them.

### 3. Search tweets

Set the **Search Terms** field to one or more queries:

```json
{
  "searchTerms": ["from:elonmusk AI", "#bitcoin lang:en"],
  "maxItems": 1000,
  "queryType": "Latest"
}
```

If `mode` is `tweet` or `tweets` without Tweet IDs, query input routes to
Search. This prevents valid `searchTerms` from returning an empty lookup.

Account backfills with date windows work too, such as
`from:elonmusk since:2026-01-01 until:2026-01-02`. Each term keeps its own
`searchTerm` attribution. `maxItems` caps results across all search terms. The
Actor checks every returned tweet against `since:`, `until:` & Unix-time
windows. Filtered searches keep reading until they find matches or X has no more
results.

A `from:` search term returns what X search returns, so it leaves out reposts.
Add `include:nativeretweets` to keep them, or `filter:nativeretweets` for
reposts only.

### 4. Lookup tweets by ID

```json
{ "tweetIds": ["1846987139428634858", "1858743654778892784"], "maxItems": 100 }
```

Results keep your input order, drop duplicates & include only the tweets you
asked for.

Aliases accepted for the same lookup include `tweetId`, `tweetIDs`, `tweets`,
`postIds`, `lookupPostIds`, `tweetUrls`, and `postUrls`.

### 5. Explicit engagement, thread, and article modes

Use `mode` when you want one route, regardless of other input fields:

```json
{ "mode": "replies", "replyTweetIds": ["1846987139428634858"], "maxItems": 100 }
```

Supported explicit modes: `tweet`, `tweets`, `search`, `profileTweets`,
`profileReplies`, `profileMedia`, `profileLikes`, `listTweets`, `article`,
`replies`, `quotes`, `thread`, `retweeters`, and `favoriters`.

`profileTweets` follows the profile Posts tab on X. It returns the account's
posts, its reposts & its replies to its own posts, in date order. Replies to
other accounts & conversation context from other authors are left out before
billing.

For original posts only, exclude the types you do not want:

```json
{
  "mode": "profileTweets",
  "twitterHandles": ["apify"],
  "tweetTypes": { "excludeReplies": true, "excludeRetweets": true },
  "maxItems": 100
}
```

`tweetTypes.excludeReplies`, `excludeRetweets` & `excludeQuotes` work on every
source. A search sends them to X as `-filter:replies`, `-filter:nativeretweets`
& `-filter:quote`. On a profile or a List the Actor drops those rows itself.
Excluded rows never reach the dataset, so you never pay for them, & they never
count toward `maxItems`.

`profileReplies` follows X's With Replies tab. It returns target-authored
profile posts and replies. The Actor excludes conversation context from other
authors. Use `filter:replies` or `to:` search when you need reply-only results.

Search & paginated Tweet modes support `time.since`, `time.until`, Unix
timestamps & `lang`. These include profile Posts, With Replies, Media, Likes,
Lists, replies, quotes & threads. Matching flat date operators work too. The
Actor verifies each row before billing. The lower date bound is inclusive. The
upper bound is exclusive. Date filters exclude rows without usable dates.
Language filters exclude missing or mismatched languages. Filtered rows never
consume your requested result limit. List runs with a date window reach older
days quickly. They end once they pass your lower bound. Windows far back in a
List can miss a few replies. Since the upper bound is exclusive, the same date
for `since` & `until` is an empty window. Set `until` to the next day to get 1
full day. Tweet filters do not apply to user lists or direct Tweet/article
lookups.

`time.withinTime` & `within_time` work in the same modes. A value of `7d` keeps
the last 7 days before the run starts reading. A window reaching back before
2006 keeps every post.

`mode: "replies"` is stricter. Every tweet row has `inReplyToId` equal to the
requested tweet ID. Nested conversation replies never count as direct replies.
If X shows fewer replies than it reports, the Actor keeps the rows it found. It
adds 1 `replies-incomplete` record to `diagnostics` when your limit is not
reached. The run stays partial until it reaches your limit or X has no more
replies. `replyCoverage` reports reply counts & coverage details. Set `maxItems`
to your requested total, including totals above 25,000 for one reply target.

Article rows include `resultType: "article"`, `sourceTweetId`, `article`, and
optional `author`. Engagement user rows include `resultType: "user"`,
`sourceTweetId`, and `engagementMode`.

Retweeters remain a normal public engagement mode. Favoriters are best effort: X
may only expose liking users for eligible or owner-visible posts. Profile likes
are also best effort because many public profiles do not expose a readable Likes
tab. If X does not expose users or liked tweets, the Actor writes a free
`diagnostics` record. Bookmark counts can appear on tweet rows, but X does not
expose the specific accounts that bookmarked a post.

### 6. Flat CSV output

Keep the default nested JSON fields, or add spreadsheet-friendly columns:

```json
{ "searchTerms": ["from:nasa moon"], "maxItems": 100, "outputPreset": "flat" }
```

Flat output keeps `author` and `media` unchanged and also adds top-level fields
such as `authorUsername`, `authorName`, `authorFollowers`, `tweetUrl`,
`twitterUrl`, `mediaUrls`, `imageUrls`, and `videoUrls`.

Every flat tweet row carries `media`. A tweet without media has an empty list,
so each row has the same keys in a spreadsheet or a typed pipeline.

### 7. Select field naming

Keep legacy field names by default. Select a style for rich or raw result data:

```json
{
  "searchTerms": ["from:nasa moon"],
  "maxItems": 100,
  "outputVariant": "rich",
  "fieldStyle": "snake_case"
}
```

Use `camelCase` or `snake_case` for top-level and nested result fields. Flat
snake case output includes fields such as `author_username` and `media_urls`.
Safe source snapshots under `raw` keep their original source keys. Conflicting
source names also stay unchanged to prevent data loss.

Legacy diagnostics use `resultType`, `actorVersion`, and `replyCoverage`. Rich
and raw output apply `fieldStyle` recursively. For example, snake case uses
`result_type`, `actor_version`, and `reply_coverage`. The Overview dataset view
works with either style. Choose the Console view matching the run's
`fieldStyle`. `camelCase fields` expects `camelCase`. `snake_case fields`
expects `snake_case`. Views select columns only. They never rename stored or
exported data.

### 8. Advanced filters

Combine user, date, location, media, and engagement filters:

```json
{
  "twitterContent": "AI",
  "from": "elonmusk",
  "since": "2026-01-01_00:00:00_UTC",
  "until": "2026-03-01_00:00:00_UTC",
  "lang": "en",
  "filter:media": true,
  "min_faves": 1000,
  "maxItems": 500
}
```

Set `queryType: "Latest + Top"` to run both X search modes in one run. The Actor
removes duplicates before billing & fills your limit from either mode. `Top` is
ranked by relevance & is not exhaustive. Set `includeSearchTerms: true` to
attach each matching query as a `searchTerm` field.

When you set `lang`, the Actor verifies each returned tweet's language. It skips
mismatches and continues paging for matching tweets.

### Migrate from another tweet Actor

Paste the input you already use. X Tweet Scraper reads the field names that
other tweet Actors use & maps them to its own fields. Canonical names stay the
documented default. An alias never drops a field & never changes what you pay.
The input form lists canonical fields only, so it stays short. Aliases work in
JSON, API, SDK, automation & saved task inputs.

| Field you already use                                                                                                                                                  | X Tweet Scraper reads it as                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `startUrls`, `urls`, `tweetUrls`, `postUrls`, `profileUrls`, `accountUrls`                                                                                             | `startUrls`                                                              |
| `profileUrl`, as one string                                                                                                                                            | `startUrls`                                                              |
| `tweetIds`, `tweetIDs`, `tweets`, `postIds`, `lookupPostIds`, `tweet_ids`, or `tweetId` as one string                                                                  | `tweetIds`                                                               |
| `twitterHandles`, `usernames`, `user_names`, `userNameList`, `handles`, `screenNames`, `profileTweets`                                                                 | `twitterHandles`                                                         |
| `username`, `handle`, `screenName`, as one string                                                                                                                      | `twitterHandles`                                                         |
| `searchTerms`, `searchQueries`, `queries`, `search`, as a list or one search per line                                                                                  | `searchTerms`                                                            |
| `twitterContent`, `query`, `searchQuery`                                                                                                                               | `twitterContent`                                                         |
| `maxItems`, `maxResults`, `max_results`, `resultsLimit`, `count`, `resultsCount`, `numberOfTweets`, `maxPosts`, `max_posts`, `max_items`, `maxTweets`, `tweetsDesired` | `maxItems`                                                               |
| `sort`                                                                                                                                                                 | `queryType`                                                              |
| `tweetLanguage`, `language`                                                                                                                                            | `lang`                                                                   |
| `author`, `inReplyTo`, `mentioning`                                                                                                                                    | `from`, `to`, `@`                                                        |
| `start`, `startDate`, `end`, `endDate`                                                                                                                                 | `since`, `until`                                                         |
| `minimumRetweets`, `minimumFavorites`, `minimumReplies`                                                                                                                | `min_retweets`, `min_faves`, `min_replies`                               |
| `onlyImage`, `onlyVideo`, `onlyQuote`, `onlyTwitterBlue`                                                                                                               | `filter:images`, `filter:videos`, `filter:quote`, `filter:blue_verified` |
| `geotaggedNear`, `withinRadius`                                                                                                                                        | `near`, `within`                                                         |
| `quickDateRange` from the Google Search Scraper, such as `d7`, `w2`, `m1` or `y`                                                                                       | `since_time`, counted back from the run start                            |

How a pasted input behaves:

- Every source runs. An input with start URLs, handles, search terms, list IDs &
  tweet IDs runs them all, & `maxItems` applies across the run.
- A search query next to `searchTerms` runs as 1 more term.
- A profile URL written as `x.com/@name` reads like `x.com/name`.
- When you set an alias & its canonical field, the canonical value wins. The run
  log names the alias that lost.
- The run log names every field the Actor does not read, such as
  `customMapFunction`. Nothing is dropped without notice.
- A row cap must be a whole number of 1 or more. `maxResults: 0` stops the run
  before anything is fetched or charged.
- `quickDateRange: "m1"` reads the past month on every route. Months & years
  count back on the calendar. A value without h, d, w, m or y stops the run
  before it reads or charges anything.
- The Actor has no page unit. Replace `maxPages` with `maxItems`.
- The Actor has no user ID field. Send handles or profile URLs instead of
  `userId` or `user_ids`.
- Search operator fields such as `from`, `min_faves`, `since_time` &
  `filter:images` already use the names X uses, so they need no mapping.

### Console & API input UX

The Console exposes these controls:

- Mode, Output Variant, Field Style, Output Preset, and Sort By are validated
  selects.
- The Start URLs and Profile URLs fields accept strings or `{ "url": "..." }`
  objects. Their JSON editors preserve both API formats.
- Structured Filters exposes grouped controls without nested JSON.
- Canonical filter groups keep equivalent flat operators out of the form. JSON,
  API, SDK, automation, and saved task inputs still accept them.
- Max Items and Max Items Per Target accept whole numbers of 1 or more.
  Engagement thresholds accept whole numbers of 0 or more.

Use canonical fields in new integrations. The aliases in the migration table
above stay available. `includeRaw` is an alias for `outputVariant: "raw"`.
Historical `outputVariant` values such as `compact` and `full` remain accepted
and use Legacy output. The visual form labels them as Legacy aliases.

### Top supported search operators

| Operator               | Example                | Purpose                     |
| ---------------------- | ---------------------- | --------------------------- |
| `from:`                | `from:elonmusk`        | Only tweets by this user    |
| `to:`                  | `to:OpenAI`            | Only replies to this user   |
| `@`                    | `@nasa`                | Tweets mentioning this user |
| `list:`                | `list:123456`          | Tweets from list members    |
| `lang:`                | `lang:en`              | Filter by language          |
| `since:` / `until:`    | `since:2026-01-01`     | Date range                  |
| `min_faves:`           | `min_faves:100`        | Engagement threshold        |
| `min_retweets:`        | `min_retweets:50`      | Retweet threshold           |
| `filter:media`         | `filter:media`         | X media search operator     |
| `filter:videos`        | `filter:videos`        | X video search operator     |
| `filter:images`        | `filter:images`        | X image search operator     |
| `filter:links`         | `filter:links`         | Only tweets with links      |
| `filter:replies`       | `filter:replies`       | Only reply tweets           |
| `filter:quote`         | `filter:quote`         | Only quote tweets           |
| `filter:blue_verified` | `filter:blue_verified` | Only Premium users          |

Date windows use an inclusive lower bound and exclusive upper bound. The Actor
verifies both bounds before adding or charging for each tweet.

For the full operator list, see
[Twitter Advanced Search](https://github.com/igorbrigadir/twitter-advanced-search).

## Input

See the **Input** tab for the complete list of options. All fields are optional
except at least one of: `startUrls`, `twitterHandles`, `listIds`, `tweetIds`,
`searchTerms`, `twitterContent`, or their documented aliases.

Examples:

- Paste a tweet URL into Start URLs.
- Paste a profile URL or add the username to X Handles.
- Use `from:user since:YYYY-MM-DD until:YYYY-MM-DD` as a Search Term for account
  backfills.
- Paste a list URL into Start URLs.
- Combine `twitterContent` with filters such as `from:`, `since:`, `min_faves:`,
  and `filter:media` for advanced searches.

## Output

Each tweet is a JSON object with available metadata:

Dataset and run-report schemas include field titles, descriptions, and examples.
Agents can inspect them without guessing field meaning.

Sample values are illustrative. Responses reflect source data at run time.

```json
{
  "id": "1846987139428634858",
  "text": "The future of AI is...",
  "createdAt": "Sun Mar 15 12:00:00 +0000 2026",
  "retweetCount": 500,
  "replyCount": 120,
  "likeCount": 5000,
  "quoteCount": 80,
  "viewCount": 1200000,
  "bookmarkCount": 300,
  "lang": "en",
  "url": "https://x.com/elonmusk/status/1846987139428634858",
  "author": {
    "id": "44196397",
    "username": "elonmusk",
    "name": "Elon Musk",
    "followers": 180000000,
    "verified": true
  },
  "media": [{ "type": "photo", "url": "https://..." }],
  "entities": {
    "hashtags": [{ "text": "AI" }],
    "urls": [],
    "user_mentions": []
  },
  "isNoteTweet": false,
  "isQuoteStatus": false,
  "isReply": false,
  "conversationId": "1846987139428634858"
}
```

Export as JSON, CSV, Excel, or HTML from the Apify dataset.

## Run options

- Set Apify max total charge to cap run cost. Leave `maxItems` empty for maximum
  rows within that budget, or set `maxItems` when you want fewer tweets.
- Set `maxTotalChargeUsd` in the Apify API, or Max cost per run in Console.
  Apify exposes that limit to the Actor as `ACTOR_MAX_TOTAL_CHARGE_USD`, and the
  Actor turns it into the maximum billable row count.
- Pass `tweetIds` to look up many tweets at once. Paste a profile URL to read
  one account's posts.
- Set `includeSearchTerms: true` when running many queries to tag each result
  with its source search term.
- Set `queryType: "Latest + Top"` to run both X search modes in one run.
  Deduplication & result caps apply across both.
- Use Xquik account or keyword monitors for 1-second checks and signed webhooks.
  Active monitors check every second.

## Use cases

- Track brand sentiment across tweets.
- Monitor competitor posts and industry terms.
- Find prospects in public conversations.
- Collect public datasets for research.
- Find posts with high public engagement.

## Data responsibility

The Actor requests public X fields. Results can contain personal data. Confirm a
lawful purpose and follow applicable privacy rules. Ask qualified counsel when
uncertain.

## Related Xquik Actors

Every Xquik Actor shares the same extraction engine, filter-first billing &
diagnostics. Pick the one that matches the data you need.

- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): Scrapes
  profiles plus their posts, replies, media & followers from handles, IDs or
  URLs. Use it when you start from accounts rather than searches. From $0.00015
  per row.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): Scrapes replies,
  comments & whole conversations under posts with 25+ filters. Use it when you
  need the discussion beneath tweets. From $0.00015 per row.
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

## Need more than scraping?

Xquik also provides 47 dashboard tools, 129 REST operations, signed webhooks,
and an MCP server.

- [API documentation](https://docs.xquik.com/introduction): REST API guides
- [Search Tweets API](https://docs.xquik.com/api-reference/x/search-tweets):
  search tweets over REST
- [Batch Tweets API](https://docs.xquik.com/api-reference/x/batch-tweets): fetch
  up to 100 tweets by ID
- [User Tweets API](https://docs.xquik.com/api-reference/x/user-tweets): get a
  user's timeline
- [MCP server](https://docs.xquik.com/mcp/overview): discover supported tools
- [Webhooks](https://docs.xquik.com/webhooks/overview): signed event delivery
- [GitHub](https://github.com/Xquik-dev/x-twitter-scraper): source code and
  issue tracker

## FAQ

**Do I need an X API key?** No. You need no X API key, login or credentials.

**What limits a run?** Your requested item limit and Apify spend limit stop the
run. Apify account and platform limits still apply.

**How fast is it?** Runtime depends on your input, the result count & X
availability.

**Why does a Latest search return posts that X's Latest tab does not show?** X
leaves some matching posts out of its Latest tab. This Actor returns those posts
too. Every post is a real X search result for your query, & you pay for each
post once.

**Which search operators work?** X advanced search supports authors, recipients,
mentions, dates, engagement, media, and location.

**Can I use the Apify API to run this?** Yes. See the
[API tab](https://apify.com/xquik/x-tweet-scraper/api) for Python, JavaScript,
and cURL examples.

**Can I schedule recurring scrapes?** Yes. Use Apify's built-in
[scheduling](https://docs.apify.com/platform/schedules) to run this Actor on a
cron.

**Where do I report issues?** Open an issue on
[GitHub](https://github.com/Xquik-dev/x-twitter-scraper/issues) or use the
Issues tab on this Actor's page.

**Can I get a custom solution?** Yes. Visit [xquik.com](https://xquik.com) or
read the [API docs](https://docs.xquik.com/introduction) for the dashboard, API,
MCP server, and webhooks.
