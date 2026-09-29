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
most complete X data. Xquik's X Tweet Scraper collects tweets, replies,
profiles, lists & searches with 50+ filters. Public benchmarks prove it is the
cheapest & fastest of 12 tweet Actors. Its rows carry 2x the median Actor's
fields, as the [benchmark below](#benchmark) shows. Most other Apify Actors
charge before filtering or deduplicating. Xquik charges only for delivered,
unique, filter-matching results.

Scrape public X (Twitter) tweets **from $0.00015 per delivered result on every
Apify plan**. Apify bills platform usage separately. You need no X login, & you
pay no start or query fee. Built by [Xquik](https://xquik.com).

> Xquik is an independent third-party service. Not affiliated with X Corp.
> "Twitter" and "X" are trademarks of X Corp.

## What does X Tweet Scraper do?

Xquik's X Tweet Scraper returns tweets, engagement metrics, public author
profiles & media. It accepts URLs, handles, List IDs, Tweet IDs & search queries
with 50+ filters.

### Key features

- Filters & duplicate removal run before billing.
- One input supports lookups, timelines, Lists, search & engagement modes.
- Tweet ID inputs have no fixed count cap. Your Apify spend & timeout settings
  still apply.
- Run logs show page timing in `fetchDurationMs`, `processingDurationMs`,
  `pushDurationMs`, `statusDurationMs` & `fullPageDurationMs`.
- Runs keep delivered rows & progress when Apify restarts them.

### Use cases

- Feed research, enrichment, analytics & AI training with more fields per tweet.
  Our median rich row had 63 fields on 2026-09-29. That is 2x the median of 11
  other Actors.
- Track brand sentiment across tweets.
- Monitor competitor posts & industry terms.
- Find prospects in public conversations.
- Collect public datasets for research.
- Find posts with high public engagement.

### What data can X Tweet Scraper extract?

| Field                  | Description                                      |
| ---------------------- | ------------------------------------------------ |
| `id`                   | Tweet ID                                         |
| `text`                 | Full text, including Note Tweets up to 25k chars |
| `createdAt`            | X native timestamp string                        |
| `likeCount`            | Number of likes                                  |
| `retweetCount`         | Number of retweets                               |
| `replyCount`           | Number of replies                                |
| `quoteCount`           | Number of quote tweets                           |
| `viewCount`            | Number of views                                  |
| `bookmarkCount`        | Number of bookmarks                              |
| `lang`                 | Tweet language                                   |
| `url`                  | Direct link to tweet                             |
| `tweetUrl`             | Flat output tweet URL alias                      |
| `twitterUrl`           | Flat output `twitter.com` URL                    |
| `author`               | Author fields: username, bio, website, counts    |
| `authorUsername`       | Flat output author handle                        |
| `authorFollowers`      | Flat output author follower count                |
| `authorUrl`            | Flat output author website when available        |
| `authorDescription`    | Flat output author bio text                      |
| `authorCoverPicture`   | Flat output author banner image URL              |
| `authorPinnedTweetIds` | Flat output author pinned tweet IDs              |
| `media`                | Attached images, videos, GIFs                    |
| `mediaUrls`            | Flat output media URLs                           |
| `imageUrls`            | Flat output image URLs                           |
| `videoUrls`            | Flat output video URLs                           |
| `entities`             | Hashtags, URLs, mentions, and video timestamps   |
| `displayTextRange`     | X display text range when available              |
| `contentDisclosure`    | Disclosure metadata when available               |
| `conversationControl`  | Reply policy and public conversation owner       |
| `reactionContext`      | Public post and user referenced by a reaction    |
| `limitedActions`       | Public interaction restrictions and prompts      |
| `isLimitedReply`       | Whether replies are limited                      |
| `isNoteTweet`          | Whether this is a Note Tweet (long-form post)    |
| `isQuoteStatus`        | Whether this tweet quotes another tweet          |
| `isRetweet`            | Whether this row is a retweet, original attached |
| `isPinned`             | Whether the author pinned this post, flat rows   |
| `isReply`              | Whether this tweet is a reply                    |
| `quoted_tweet`         | Quoted tweet object (if quote tweet)             |
| `conversationId`       | Thread/conversation ID                           |
| `resultType`           | Row type for rich, engagement & diagnostic rows  |
| `sourceTweetId`        | Source tweet ID for article and engagement modes |
| `article`              | Structured article data in `mode: "article"`     |

Optional tweet metadata includes `authorUnavailable`, `card`, `communityId`,
`communityNote`, `edit`, `exclusiveContent`, `noteTweet` & `postCta`.
`isTranslatable`, `place`, `possiblySensitive` & `viewState` keep other public
context. `previousCounts` keeps pre-edit engagement. `tombstone` keeps
visibility notices. `unmentionedUserIds` lists users who left the conversation.
See OpenAPI for the exact fields.

Nested `author` objects carry public profile fields. They cover identity,
counts, verification, availability, professional data & profile biographies.

Retweet rows set `isRetweet` to `true`. Their `text` carries the original post
in full. `retweeted_tweet` holds the original post with its author & counts.

Tweet rows also keep `type`, `source`, `inReplyToId`, `inReplyToUserId`,
`inReplyToUsername` & `retweeted_tweet`. Quoted & reposted tweets carry the same
fields at every nesting level.

Media carries availability, geometry, tags & video variants. It also carries the
`watchNowUrl` & `visitSiteUrl` actions.

Rows never include viewer-only state. The Actor removes follow, block, mute,
bookmark, like, repost, edit-permission & similar viewer flags. Raw output drops
them too.

## How do I use X Tweet Scraper to scrape tweet data?

Each example below is a complete input. Pick the one that fits your data.

Follow these steps in Apify Console:

1. Open a [task example](#task-examples) or the Input tab.
2. Add URLs, handles, Tweet IDs or search terms.
3. Set `maxItems` & any filters you need.
4. Click Start & wait for the run to finish.
5. Export the dataset as JSON, CSV, Excel or HTML.

The recipes below show the input for each source.

### Paste URLs

Paste any mix of tweet, profile, search or List URLs:

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

### Scrape many handles

Handles work as shorthand for many `from:username` searches:

```json
{ "twitterHandles": ["elonmusk", "nasa", "openai"], "maxItems": 100 }
```

Each handle returns that account's posts. The Actor removes duplicate rows
before output & billing. You can add usernames with or without `@`. Handles &
profile URLs keep reposts, as the Posts tab on X does. They keep them even with
dates or filters. Set `tweetTypes.excludeRetweets` to drop them.

### Search tweets

Put one or more queries in the Search terms field:

```json
{
  "searchTerms": ["from:elonmusk AI", "#bitcoin lang:en"],
  "maxItems": 1000,
  "queryType": "Latest"
}
```

With `mode` set to `tweet` or `tweets` & no Tweet IDs, queries run as Search.
Valid `searchTerms` then never return an empty lookup.

Account backfills with date windows work too, such as
`from:elonmusk since:2026-01-01 until:2026-01-02`. Each term keeps its own
`searchTerm` attribution. `maxItems` caps results across all search terms. The
Actor checks every returned tweet against `since:`, `until:` & Unix-time
windows. Filtered searches keep reading until they find matches or X has no more
results.

A `from:` search term returns what X search returns, so it leaves out reposts.
Add `include:nativeretweets` to keep them, or `filter:nativeretweets` for
reposts only.

### Look up tweets by ID

```json
{ "tweetIds": ["1846987139428634858", "1858743654778892784"], "maxItems": 100 }
```

Results keep your input order, drop duplicates & include only the tweets you
asked for. The lookup also accepts `tweetId`, `tweetIDs`, `tweets`, `postIds`,
`lookupPostIds`, `tweetUrls` & `postUrls`.

### Engagement, thread & article modes

Set `mode` to force one route, whatever other fields the input holds:

```json
{ "mode": "replies", "replyTweetIds": ["1846987139428634858"], "maxItems": 100 }
```

Tweet & search modes are `tweet`, `tweets` & `search`. Profile modes are
`profileTweets`, `profileReplies`, `profileMedia` & `profileLikes`. `listTweets`
reads List posts, & `article` reads the X article in a post. Modes for a single
post are `replies`, `quotes`, `thread`, `retweeters` & `favoriters`.

`profileTweets` follows the profile Posts tab on X. It returns the account's
posts, reposts & replies to its own posts. Rows come in date order. The Actor
drops replies to other accounts before billing. It also drops conversation
context from other authors.

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
& `-filter:quote`. On a profile or a List, the Actor drops those rows itself.
Excluded rows never reach the dataset, so you never pay for them. They never
count toward `maxItems` either.

`profileReplies` follows X's With Replies tab. It returns the account's own
posts & replies. The Actor excludes conversation context from other authors. Use
`filter:replies` or a `to:` search for reply-only results.

Search & paginated Tweet modes support `time.since`, `time.until`, Unix
timestamps & `lang`. These include profile Posts, With Replies, Media, Likes,
Lists, replies, quotes & threads. Matching flat date operators work too. The
Actor verifies each row before billing. The lower date bound is inclusive. The
upper bound is exclusive. Date filters exclude rows without usable dates.
Language filters exclude missing or mismatched languages. Filtered rows never
use up your result limit.

The same date for `since` & `until` gives an empty window. Set `until` to the
next day to get 1 full day. List runs with a date window reach older days
quickly. They end once they pass your lower bound. Windows far back in a List
can miss a few replies. Tweet filters do not apply to user lists or direct Tweet
or article lookups.

`time.withinTime` & `within_time` work in the same modes. A value of `7d` keeps
the last 7 days before the run starts reading. A window reaching back before
2006 keeps every post.

`mode: "replies"` is stricter. Every tweet row has `inReplyToId` equal to the
requested tweet ID. Nested conversation replies never count as direct replies.
If X shows fewer replies than it reports, the Actor keeps the rows it found. It
adds 1 `replies-incomplete` record to `diagnostics` when your limit is not
reached. The run stays partial until it reaches your limit or X has no more
replies. `replyCoverage` reports reply counts & coverage details. Set `maxItems`
to the total you want, even above 25,000 for one reply target.

Article rows include `resultType: "article"`, `sourceTweetId`, `article` &
optional `author`. Engagement user rows include `resultType: "user"`,
`sourceTweetId` & `engagementMode`.

Retweeters work as a normal public engagement mode. Favoriters are best effort.
X may show likers only on eligible or owner-visible posts. Profile likes are
best effort too, since many public profiles have no readable Likes tab. If X
shows no users or liked tweets, the Actor writes a free `diagnostics` record.
Tweet rows can carry bookmark counts. X does not show which accounts bookmarked
a post.

### Export flat CSV rows

Keep the default nested JSON fields, or add spreadsheet-friendly columns:

```json
{ "searchTerms": ["from:nasa moon"], "maxItems": 100, "outputPreset": "flat" }
```

Flat output keeps `author` & `media` unchanged. It adds top-level fields such as
`authorUsername`, `authorName`, `authorFollowers`, `tweetUrl`, `twitterUrl`,
`mediaUrls`, `imageUrls` & `videoUrls`.

Every flat tweet row carries `media`. A tweet without media has an empty list.
Each row then has the same keys in a spreadsheet or typed pipeline.

### Choose field names

Legacy field names are the default. Pick a style for rich or raw results:

```json
{
  "searchTerms": ["from:nasa moon"],
  "maxItems": 100,
  "outputVariant": "rich",
  "fieldStyle": "snake_case"
}
```

Use `camelCase` or `snake_case` for top-level & nested result fields. Flat snake
case output includes fields such as `author_username` & `media_urls`. Safe
source snapshots under `raw` keep their original source keys. Conflicting source
names also stay unchanged to prevent data loss.

Legacy diagnostics use `resultType`, `actorVersion` & `replyCoverage`. Rich &
raw output apply `fieldStyle` at every nesting level. For example, snake case
uses `result_type`, `actor_version` & `reply_coverage`. The Overview dataset
view works with either style. Choose the Console view matching the run's
`fieldStyle`. `camelCase fields` expects `camelCase`. `snake_case fields`
expects `snake_case`. Views select columns only. They never rename stored or
exported data.

### Combine advanced filters

Combine user, date, location, media & engagement filters:

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
removes duplicates before billing & fills your limit from either mode. `Top`
sorts by relevance & does not return every match. Set `includeSearchTerms: true`
to attach each matching query as a `searchTerm` field.

When you set `lang`, the Actor verifies each returned tweet's language. It skips
mismatches & keeps reading for matching tweets.

## Task examples

Choose from 50 public tasks. Each has a bounded input & a matching dataset view.
Every task opens with a real search or target. Edit it before you run it.

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
- [Collect electric vehicle conversations](https://apify.com/xquik/x-tweet-scraper/examples/collect-electric-vehicle-conversations)

## How much does it cost to scrape tweets?

Xquik's X Tweet Scraper costs $0.00015 per delivered row on every Apify plan.
Apify bills your platform usage separately. Xquik applies one charge per
delivered data row. Diagnostics are free in the `diagnostics` output.

- You need no Xquik subscription.
- You pay no separate start or query fee. URLs & single Tweet lookups add no fee
  either.
- Filters & deduplication run before billing. You never pay for filtered or
  duplicate rows.
- No-input, invalid-input & zero-output runs write 1 actionable record to the
  free `diagnostics` output.

A run that hits a problem, or a large run, also writes a `run-report` record.
Its `estimatedChargeUsd` uses the live pay-per-event price from Apify. Runs with
a problem always write `run-report`, including no-input and invalid-input exits.
A small run that goes well skips it & saves Apify usage. Turn on
`alwaysSaveRunRecords` to write it on every run. Run reports separate data rows
in `realRows` from diagnostics in `diagnosticRows`.

To cap what a run can spend, see [Run options](#run-options).

## Benchmark

Xquik's X Tweet Scraper beat 11 other tweet Actors on cost & speed. Its median
row had 63 fields, 2x the median of the others.

| Actor                                                             | Useful tweets | Cost per useful tweet | Useful tweets per second | Fields per row | Public run                                                        |
| ----------------------------------------------------------------- | ------------: | --------------------: | -----------------------: | -------------: | ----------------------------------------------------------------- |
| xquik/x-tweet-scraper                                             |           890 |             $0.000175 |                     39.2 |             63 | [View run](https://console.apify.com/view/runs/fflWVxHwYvtyHpAQX) |
| xquik/x-tweet-scraper                                             |           883 |             $0.000176 |                     25.2 |             63 | [View run](https://console.apify.com/view/runs/EtSdBgkUcH4M1uicf) |
| xquik/x-tweet-scraper                                             |           882 |             $0.000177 |                     25.7 |             63 | [View run](https://console.apify.com/view/runs/SK3ZWhPwzGJYoYQba) |
| xquik/x-tweet-scraper                                             |           877 |             $0.000178 |                     26.9 |             63 | [View run](https://console.apify.com/view/runs/JRdbcigkBMCaFuH1W) |
| scrapesmith/twitter-x-scraper-tweets-profiles-replies             |           813 |             $0.000185 |                     10.5 |             36 | [View run](https://console.apify.com/view/runs/mIT1zf0xccCsYWO1E) |
| scrapesmith/twitter-x-scraper-tweets-profiles-replies             |           805 |             $0.000187 |                     10.6 |             36 | [View run](https://console.apify.com/view/runs/p1MUeElsamZUepTpm) |
| scrapesmith/twitter-x-scraper-tweets-profiles-replies             |           805 |             $0.000187 |                     10.7 |             36 | [View run](https://console.apify.com/view/runs/pQlQa0GMm7BWTUUOB) |
| kaitoeasyapi/twitter-x-data-tweet-scraper-pay-per-result-cheapest |           880 |             $0.000250 |                      9.1 |             46 | [View run](https://console.apify.com/view/runs/3Fn8yvqncsWdcw1I2) |
| scraper_one/x-posts-search                                        |           804 |             $0.000314 |                      3.3 |             14 | [View run](https://console.apify.com/view/runs/M9TgeCLLKZlNTOrj0) |
| danek/twitter-scraper                                             |           807 |             $0.000347 |                      5.0 |             27 | [View run](https://console.apify.com/view/runs/kyeJqCeaARxQPGM5W) |
| tweetapi/twitter-x-search-scraper                                 |           337 |             $0.000374 |                      2.6 |             28 | [View run](https://console.apify.com/view/runs/mxkP8EDAUVtCZdobb) |
| api-ninja/x-twitter-advanced-search                               |           837 |             $0.000430 |                      7.4 |             28 | [View run](https://console.apify.com/view/runs/XAWKinvZyPNjCwrib) |
| apidojo/twitter-scraper-lite                                      |           251 |             $0.000494 |                     12.9 |             54 | [View run](https://console.apify.com/view/runs/1t4XwmbQNTtwMJ0Ta) |
| apidojo/tweet-scraper                                             |           481 |             $0.000832 |                      7.8 |             55 | [View run](https://console.apify.com/view/runs/PydoBgS1YRblg29bB) |
| xtdata/twitter-x-scraper                                          |         1,378 |             $0.001168 |                     11.9 |             67 | [View run](https://console.apify.com/view/runs/U91dRXEvKvqu41aop) |
| seemuapps/x-tweet-scraper                                         |           805 |             $0.001242 |                      6.9 |             24 | [View run](https://console.apify.com/view/runs/FstursEw43TbcipYU) |
| maximedupre/twitter-scraper                                       |            46 |             $0.002846 |                      0.3 |             31 | [View run](https://console.apify.com/view/runs/Hs8irhEcAfWcQNc4w) |

Every Actor ran the same search & filters. The other Actors ran on 2026-09-27.
Xquik's runs set `outputVariant: "rich"` & ran on 2026-09-29. All runs used the
Bronze tier. A useful tweet is a unique English original post with 10+ likes.
Cost is the customer's total spend per useful tweet. Ours includes the Apify
usage our customers pay. Fields per row is the median count of non-empty fields,
nested ones included. A list counts as 1 field. Open a run for its input, log &
dataset.

## Empty, partial & stopped runs

Xquik's X Tweet Scraper explains empty, partial & stopped runs for free. The run
status says why the run stopped. It also counts charged results & targets read.

### Empty results

Check an empty result before you pay for another run. The `filtering` object in
reports & final diagnostics counts the rows your filters removed. Read
`serverFilteredRows`, `actorFilteredRows` & `pagesWithUnknownServerFiltering`.
You never pay result charges for filtered rows.

A run can finish below your limit when X has no more results. It reports
`outcome: "complete"` with `completionReason: "source_exhausted"`. Interrupted
runs keep their partial outcome & retry guidance.

### Partial runs

`failedSubtargets` counts queries & profile targets that stopped after an error.
Delivered rows stay in the dataset & count toward billing. An error never means
the target is missing. These runs use `completionReason: "partial_failure"`.

An interrupted run also writes a free `partial` diagnostic. Results already
delivered stay intact. The diagnostic reports `availableResults`,
`failedTargets`, `retryable` & `nextAction`. A successful Actor exit confirms
delivery. It does not confirm complete extraction.

### Stop causes

The status text names every cause of the stop. A run with a missing account & a
stalled search says both. `stopCauses` lists each cause with its own `message`,
`retryable` & `nextAction`. The causes are `target_not_found`,
`target_protected`, `search_unavailable`, `likes_hidden`, `target_failed`,
`pagination_safety_limit`, `reply_reach` & `deadline_reached`. The run is
`retryable` when any cause is.

### Missing & unavailable targets

A missing or protected target is not a failure. X has nothing to read there. The
run reads every other target to the end. It reports `outcome: "complete"`. Its
completion reason comes from the targets it read, such as `source_exhausted`.
`failedSubtargets` leaves those targets out. The status text & a free `complete`
diagnostic count them. A run without other rows writes a `zero-output`
diagnostic instead.

A search X cannot run counts as a failure. X.com shows "Something went wrong"
for such a search. The run stops it at once without retries. Likes X hides also
count as failures & stop at once. X shows who liked a post only to its author.
It shows an account's liked posts only to that account.

When all failures concern unavailable targets, diagnostics set
`retryable: false`. Check target URLs or usernames & choose available public
accounts. Narrow a search X cannot run or change its filters. Read retweeters,
replies or posts instead of hidden likes. Other failures keep retry guidance for
unfinished targets.

The diagnostic names those targets in `unavailableTargets`. Each entry has the
`target` as you entered it, a `reason` & a `nextAction`. The reason is
`not_found`, `protected`, `search_unavailable` or `likes_hidden`. A search entry
can also have a `fix`, such as the operator to remove. The list holds up to 100
entries. Remove those targets from your input.

### Safety & time limits

`completionReason: "pagination_safety_limit"` is not a read failure. The run
kept its valid rows. It then ended a target that stopped returning new results.
The run reports incomplete extraction. `failedSubtargets` stays `0`. You pay
only for delivered rows.

The default Apify timeout is `0`, so runs have no time limit. The Actor
continues until it reaches your cap or runs out of eligible data. You can still
set a finite Apify timeout. Then `completionReason: "deadline_reached"` means
that limit is near. The Actor saves rows & the report, then exits cleanly before
the limit. You pay once for each delivered row.

## Input

The Input tab lists every option. Give at least one of `startUrls`,
`twitterHandles`, `listIds`, `tweetIds`, `searchTerms` or `twitterContent`.
Their documented aliases work too. Every other field is optional.

Examples:

- Paste a tweet URL into Start URLs.
- Paste a profile URL, or add the username to X handles.
- Use `from:user since:YYYY-MM-DD until:YYYY-MM-DD` as a search term for account
  backfills.
- Paste a List URL into Start URLs.
- Combine `twitterContent` with filters such as `from:`, `since:`, `min_faves:`
  & `filter:media` for advanced searches.

### Top supported search operators

| Operator               | Example                | Purpose                   |
| ---------------------- | ---------------------- | ------------------------- |
| `from:`                | `from:elonmusk`        | Only tweets by this user  |
| `to:`                  | `to:OpenAI`            | Only replies to this user |
| `@`                    | `@nasa`                | Mentions of this user     |
| `list:`                | `list:123456`          | Tweets from list members  |
| `lang:`                | `lang:en`              | Filter by language        |
| `since:` / `until:`    | `since:2026-01-01`     | Date range                |
| `min_faves:`           | `min_faves:100`        | Engagement threshold      |
| `min_retweets:`        | `min_retweets:50`      | Retweet threshold         |
| `filter:media`         | `filter:media`         | X media search operator   |
| `filter:videos`        | `filter:videos`        | X video search operator   |
| `filter:images`        | `filter:images`        | X image search operator   |
| `filter:links`         | `filter:links`         | Only tweets with links    |
| `filter:replies`       | `filter:replies`       | Only reply tweets         |
| `filter:quote`         | `filter:quote`         | Only quote tweets         |
| `filter:blue_verified` | `filter:blue_verified` | Only Premium users        |

X no longer searches `filter:vine`, `filter:consumer_video`, `filter:pro_video`,
`filter:news` or `retweets_of:`. A search with one of them ends at once. A free
diagnostic names the fix. Keep each query to 512 characters or fewer. X searches
no more than that.

Date windows include the lower bound & exclude the upper bound. The Actor checks
both bounds before it adds or charges for each tweet.

For the full operator list, see
[Twitter Advanced Search](https://github.com/igorbrigadir/twitter-advanced-search).

### Migrate from another tweet Actor

Paste the input you already use. Xquik's X Tweet Scraper reads the field names
other tweet Actors use. It maps them to its own fields. Canonical names stay the
documented default. An alias never drops a field & never changes what you pay.
The input form lists canonical fields only, so it stays short. Aliases work in
JSON, API, SDK, automation & saved task inputs.

Each line names the fields you already use, then the field they map to:

- `startUrls`, `urls`, `tweetUrls`, `postUrls`, `profileUrls`, `accountUrls`:
  `startUrls`
- `profileUrl`, as one string: `startUrls`
- `tweetIds`, `tweetIDs`, `tweets`, `postIds`, `lookupPostIds`, `tweet_ids`, or
  `tweetId` as one string: `tweetIds`
- `twitterHandles`, `usernames`, `user_names`, `userNameList`, `handles`,
  `screenNames`, `profileTweets`: `twitterHandles`
- `username`, `handle`, `screenName`, as one string: `twitterHandles`
- `searchTerms`, `searchQueries`, `queries`, `search`, as a list or one search
  per line: `searchTerms`
- `twitterContent`, `query`, `searchQuery`: `twitterContent`
- `maxItems`, `maxResults`, `max_results`, `resultsLimit`, `count`,
  `resultsCount`, `numberOfTweets`, `maxPosts`, `max_posts`, `max_items`,
  `maxTweets`, `tweetsDesired`: `maxItems`
- `sort`: `queryType`
- `tweetLanguage`, `language`: `lang`
- `author`, `inReplyTo`, `mentioning`: `from`, `to`, `@`
- `start`, `startDate`, `end`, `endDate`: `since`, `until`
- `minimumRetweets`, `minimumFavorites`, `minimumReplies`: `min_retweets`,
  `min_faves`, `min_replies`
- `onlyImage`, `onlyVideo`, `onlyQuote`, `onlyTwitterBlue`: `filter:images`,
  `filter:videos`, `filter:quote`, `filter:blue_verified`
- `geotaggedNear`, `withinRadius`: `near`, `within`
- `quickDateRange` from the Google Search Scraper, such as `d7`, `w2`, `m1` or
  `y`: `since_time`, counted back from the run start

How a pasted input behaves:

- Every source runs. An input with URLs, handles, search terms, List IDs & Tweet
  IDs runs them all. `maxItems` applies across the whole run.
- A search query next to `searchTerms` runs as 1 more term.
- A profile URL written as `x.com/@name` reads like `x.com/name`.
- When you set an alias & its canonical field, the canonical value wins. The run
  log names the alias that lost.
- The run log names every field the Actor ignores, such as `customMapFunction`.
  The Actor never drops a field silently.
- A row cap must be a whole number of 1 or more. `maxResults: 0` stops the run
  before it reads or charges anything.
- `quickDateRange: "m1"` reads the past month on every route. Months & years
  count back on the calendar. Without h, d, w, m or y, the run stops before any
  read or charge.
- The Actor has no page unit. Replace `maxPages` with `maxItems`.
- The Actor has no user ID field. Send handles or profile URLs instead of
  `userId` or `user_ids`.
- Search operator fields such as `from`, `min_faves`, `since_time` &
  `filter:images` already use X's names. They need no mapping.

### Console & API input

The Console form has these controls:

- Mode, Output Variant, Field Style, Output Preset & Sort By are validated
  dropdowns.
- Start URLs & Profile URLs accept strings or `{ "url": "..." }` objects. Their
  JSON editors keep both API formats.
- Structured filters offer grouped controls, so you need no nested JSON.
- The form hides flat operators that a filter group already covers. JSON, API,
  SDK, automation & saved task inputs still accept them.
- Max Items & Max Items Per Target accept whole numbers of 1 or more. Engagement
  thresholds accept whole numbers of 0 or more.

Use canonical fields in new integrations. The aliases in the migration table
above stay available. `includeRaw` is an alias for `outputVariant: "raw"`. Older
`outputVariant` values such as `compact` & `full` still work as Legacy output.
The form labels them as Legacy aliases.

## Output

Each tweet row is a JSON object with the metadata X makes available. The dataset
& run-report schemas give each field a title, description & example. AI agents
can read them without guessing what a field means.

Sample values are illustrative. Your runs return live data from X.

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

Export the dataset as JSON, CSV, Excel or HTML.

## Run options

- Set Apify's max total charge to cap run cost. Leave `maxItems` empty to get
  the most rows that budget allows. Set `maxItems` when you want fewer tweets.
- Set `maxTotalChargeUsd` in the Apify API, or Max cost per run in Console.
  Apify passes that limit to the Actor as `ACTOR_MAX_TOTAL_CHARGE_USD`. The
  Actor turns it into the maximum billable row count.
- Pass `tweetIds` to look up many tweets at once. Paste a profile URL to read
  one account's posts.
- With many queries, set `includeSearchTerms: true` to tag each result with its
  search term.
- Set `queryType: "Latest + Top"` to run both X search modes in one run.
  Deduplication & result caps apply across both.
- Use Xquik account or keyword monitors for 1-second checks & signed webhooks.
  Active monitors check every second.

### Always use the latest build

Select `latest` for every run to get every published fix.

If you pick no build, Apify runs Xquik's X Tweet Scraper on its `latest`
default. Console runs & standard API examples inherit that default.

Saved tasks can override the Actor default. Schedules & task integrations reuse
that choice. Keep every override set to `latest`.

Apify does not redirect exact build numbers to `latest`. Replace pinned numbers
with `latest`. Use an exact build only for a temporary rollback or to reproduce
a run.

Read Apify's
[build tags](https://docs.apify.com/platform/actors/development/builds-and-runs/builds),
[run options](https://docs.apify.com/platform/actors/running/runs-and-builds) &
[task documentation](https://docs.apify.com/platform/actors/running/tasks).

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

Xquik also provides 47 dashboard tools, 129 REST operations, signed webhooks &
an MCP server.

- [API documentation](https://docs.xquik.com/introduction): REST API guides
- [Search Tweets API](https://docs.xquik.com/api-reference/x/search-tweets):
  search tweets over REST
- [Batch Tweets API](https://docs.xquik.com/api-reference/x/batch-tweets): fetch
  up to 100 tweets by ID
- [User Tweets API](https://docs.xquik.com/api-reference/x/user-tweets): get a
  user's timeline
- [MCP server](https://docs.xquik.com/mcp/overview): discover supported tools
- [Webhooks](https://docs.xquik.com/webhooks/overview): signed event delivery
- [GitHub](https://github.com/Xquik-dev/x-twitter-scraper): source code & issue
  tracker

## FAQ

Answers to common questions, then where to get help.

### Do I need an X API key?

No. You need no X API key, login or credentials.

### What limits a run?

Your item limit & your Apify spend limit stop the run. Apify account & platform
limits still apply.

### How fast is it?

Xquik's X Tweet Scraper delivered 25.2 to 39.2 useful tweets per second in the
[benchmark](#benchmark). Runtime depends on your input, the result count & X
availability.

### Why do I get posts that X's search tab leaves out?

X leaves some matching posts out of its Latest tab. Xquik's X Tweet Scraper
returns those posts too. Every post is a real X search result for your query.
You pay for each post once.

### Which search operators work?

X advanced search supports authors, recipients, mentions, dates, engagement,
media & location. See
[Top supported search operators](#top-supported-search-operators) for examples.

### Can I use the Apify API to run this?

Yes. See the [API tab](https://apify.com/xquik/x-tweet-scraper/api) for Python,
JavaScript & cURL examples.

### Can I schedule recurring scrapes?

Yes. Use Apify's built-in
[scheduling](https://docs.apify.com/platform/schedules) to run Xquik's X Tweet
Scraper on a cron.

### Can I get a custom solution?

Yes. Visit [xquik.com](https://xquik.com) or read the
[API docs](https://docs.xquik.com/introduction) for the dashboard, API, MCP
server & webhooks.

### Is it legal to scrape X data?

Xquik's X Tweet Scraper requests public X fields. Results can contain personal
data. Confirm a lawful purpose & follow the privacy rules that apply to you. Ask
qualified counsel when unsure.

### Where do I get help?

Open an issue in the Issues tab on the Actor page, or on
[GitHub](https://github.com/Xquik-dev/x-twitter-scraper/issues). You can also
contact <support@xquik.com> with the run ID.
