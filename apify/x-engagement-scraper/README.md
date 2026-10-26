**English** ·
[Español](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-engagement-scraper/README.es.md)
·
[Türkçe](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-engagement-scraper/README.tr.md)
·
[简体中文](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-engagement-scraper/README.zh-CN.md)
·
[日本語](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-engagement-scraper/README.ja.md)
·
[한국어](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-engagement-scraper/README.ko.md)
·
[Deutsch](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-engagement-scraper/README.de.md)
·
[Français](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-engagement-scraper/README.fr.md)
·
[Italiano](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-engagement-scraper/README.it.md)

[![Framer connects Xquik MCP to coding agents](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Watch how Framer uses Xquik scrapers](https://youtu.be/4UOSpoOoC3Y?t=367)
with Claude Code, Codex, Cursor & more, from 6:07.

Xquik is the world's fastest & cheapest X (Twitter) scraper service with the
most complete X data. Xquik's X Engagement Scraper collects replies, quotes,
retweeters & threads for any post. Most other Apify Actors charge before
filtering or deduplicating. Xquik charges only for delivered, unique,
filter-matching results.

Collect Twitter replies, quotes, retweeters & thread context for 1 or more X
posts. You pay **$0.00015 per delivered row**, & Apify bills platform usage
separately. You need no X API key or login.

> Xquik is an independent third-party service. Not affiliated with X Corp.
> "Twitter" and "X" are trademarks of X Corp.

## Replies, quotes & profiles

- Post URLs & numeric Tweet IDs.
- Direct replies across available result pages.
- Direct & nested replies in 4 sort orders.
- Source post details as a selectable row.
- Quote posts with text, authors, media & metrics.
- Retweeter profiles.
- Conversation context around each source post.
- Many engagement types & posts in 1 run.
- A global cap & a cap for each engagement resource.
- Source post & engagement-type attribution.
- Runs resume after an Apify restart.

## What you get

### Complete results

- Reply exports include replies that X's post page leaves out.
- Each answer holds the fullest data X has for it.

### Accurate rows

- Reposts carry the full original text.
- Every ID in a row stays exact.
- Mentions, links, hashtags & highlights line up with the text.
- Counts X didn't send are listed in `unknownCounts`, never shown as 0.
- Verified badges match what `x.com` shows.
- Rows hold public data only.
- Quote searches return every real quote & nothing else.
- Ads & promoted entries never reach your rows.

### Fresh data

- Reads keep working when X ships changes.

### Speed

- A slow X answer doesn't hold up your request.
- Actors read many handles, posts & queries at once.
- Reads finish the moment their rows arrive.
- Stalled Actor calls recover on their own.

### Fair billing

- Bad input costs nothing, since it's refused before any read.
- Actors charge only for delivered, unique, matching rows.
- A profile shared by several targets is billed once.
- A restarted run never charges twice.
- A spend cap becomes a row cap, & diagnostics still get written.
- Small runs end with a tip that cuts cost.

### Reliability

- A one-off X failure doesn't fail your request.
- A deadline returns the rows already found, with diagnostics.
- Actors ride out short Xquik outages.
- Actor runs survive restarts without repeats.
- One bad row doesn't sink a batch.
- Stopped runs keep their rows & their report.
- A run that can't start still explains itself.
- Problems on X's side are fixed before they reach your reads.
- Support can see exactly what a request or run returned.

### Built for agents

- Actors accept input written for other Actors.
- Output is ready for spreadsheets, with flat columns & engagement totals.
- Every run says why it ended & whether to retry.

### Rich data

- Post rows carry note text, edits, Community Notes, reach labels & reply
  controls.
- Rows carry source apps, media counts & professional account data.
- Media comes with variants, alt text, sizes & availability reasons.
- You see when each account reposted a post.

### Quality checks

- Every field X shows is served, left out on purpose or proven absent.
- Every read is checked live each hour.

## How to scrape X post engagement

New to Apify?
[Create a free account](https://console.apify.com/sign-up?fpr=xquik) first. The
free plan needs no credit card & gives $5 to spend each month. At $0.00015 per
row, $5 pays for up to 33,000 rows before platform usage. Then come back here &
press Try for free.

1. Open Xquik's X Engagement Scraper in Apify Console.
2. Paste post URLs into `startUrls` or numeric Tweet IDs into `tweetIds`.
3. Pick `engagementTypes` & add filters such as `minLikes` or `language`.
4. Set `maxItems` to cap delivered rows, then click Start.
5. Download the dataset as JSON, CSV or Excel, or use the Apify API.

`startUrls` takes each URL as a plain string or as a `{ "url": "..." }` object.

```json
{
  "startUrls": [
    "https://x.com/OpenAI/status/2082577277246972300",
    { "url": "https://x.com/jack/status/20" }
  ]
}
```

## Input

```json
{
  "tweetIds": ["2082577277246972300"],
  "engagementTypes": ["replies", "quotes", "retweeters"],
  "maxItems": 10000
}
```

X stopped showing who liked a post in 2024. The `favoriters` type returns no
rows. A run with no rows states that reason in its diagnostic.

By default, each account or post appears once per engagement type, with 1
charge. Set `dedupeAcrossTargets` to `false` to keep a row for each source post.
The run status counts the duplicates it skipped at no charge.

Small runs that go well skip `run-report` & save Apify usage. Turn on
`alwaysSaveRunRecords` to write it on every run.

### Migrate from another engagement Actor

The Actor reads these field names of other engagement Actors.

- `urls` maps to `startUrls`.
- `category` maps to `engagementTypes`. `replies`, `retweets`, `info` &
  `checkRetweet` read as `replies`, `retweeters`, `tweet` & `repostCheck`.
- `resultsPerCategory` maps to `maxItemsPerTarget`.
- `retweetCheckUsername` maps to `repostCheckUsers`.

A `category` that is another Actor's job, such as `followers` or `tweets`, stops
the run. It reads & charges nothing. The message names the Actor to use. When
you set one of these names & its canonical field, the canonical value wins. The
run log names the field that lost.

## Output

Each row sets `resultType` to `tweet`, `replies`, `completeReplies`, `quotes`,
`retweeters`, `favoriters`, `thread` or `repostCheck`. `sourceTarget` holds the
source Tweet ID. Tweet & profile fields follow stable Xquik REST response
shapes.

`completeReplies` keeps every returned row. The run report counts partial
coverage in `incompleteTargets`. Filters run before billing.

Reposters & likers take every profile filter, such as `minFollowers`, `hasEmail`
& `bioContains`. Their rows carry `email` & `contactInfo`, the emails, phones &
links each profile publishes.

Examples use sample values. Results reflect live data. A reply row looks like
this.

```json
{
  "resultType": "replies",
  "sourceTarget": "2082577277246972300",
  "inReplyToId": "2082577277246972300",
  "username": "sample_user",
  "text": "Sample reply text",
  "likeCount": 12
}
```

## Output columns

8 inputs shape each row after the run reads it. They run no code & change no
price.

| Field               | What it does                                                |
| ------------------- | ----------------------------------------------------------- |
| `fields`            | Keep only these fields, in the order & spelling you write   |
| `omitFields`        | Drop these fields & keep the rest                           |
| `renameFields`      | Move a field to a column with a new name                    |
| `flatten`           | Turn each nested object into top-level columns              |
| `fillMissingFields` | Fill a kept field a row lacks with `null`. On by default    |
| `joinFields`        | Turn each of these lists into 1 text value                  |
| `joinSeparator`     | Text between joined items. The default is a comma & a space |
| `constantFields`    | Add a column with the same text on every row                |

- Use a dot for a field inside an object. Case & underscores do not matter.
- Every row keeps its `id`.
- With `fields`, a field a row lacks arrives as `null`. Every row then has the
  same columns.
- A wrong field name stops the run before it reads & charges nothing.
- If names cannot be checked, the run reads on & lists unseen names last.
- The run ignores a map function or jq filter written for another Actor.

Name a computed column in `fields` or `renameFields` to add it.

| Column              | Formula                                                                            |
| ------------------- | ---------------------------------------------------------------------------------- |
| `totalEngagement`   | `likeCount` + `replyCount` + `retweetCount` + `quoteCount`. A missing count adds 0 |
| `engagementRate`    | `totalEngagement` × 100 ÷ the author's `followers`, to 4 decimals                  |
| `engagementPerView` | `totalEngagement` × 100 ÷ `viewCount`, to 4 decimals                               |

`totalEngagement` is `null` for a row without those counts. A rate is `null`
when its divisor is missing or 0.

## Repost check

Add `repostCheck` to `engagementTypes` & list accounts in `repostCheckUsers` to
learn whether each account reposted each post.

```json
{
  "tweetIds": ["2098439298617856319"],
  "engagementTypes": ["repostCheck"],
  "repostCheckUsers": ["discord", "nasa"]
}
```

Each check is 1 row with `isRetweeted`, `retweetedAt`, `retweetId`,
`checkedPosts` & `complete`. Its `id` is `repostCheck:<post ID>:<account>`. A
repost the check can't confirm reads as `false` with `complete: false`.

A run of only `repostCheck` & `tweet` rows keeps your input order, with each
post followed by its accounts as you listed them.

## Retweet timestamps

Set `includeRetweetTimestamp` to `true` for `retweeters` results. The
`retweetedAt` column holds the observed retweet time in UTC.

Xquik's X Engagement Scraper finds the retweet time when X still shows that
retweet. Older, deleted or unavailable retweets leave the timestamp `null`. The
profile stays in the output. A `null` value does not prove that an account never
retweeted a post.

This option makes runs slower. Leave it off for profile-only results. Profile
`createdAt` stays the account creation date. Tweet rows carry `retweetedAt` when
they contain a retweet event. Original post dates & scrape times never replace
retweet times. Result prices & delivered-row billing stay the same.

## How much does it cost to scrape X post engagement?

Every Apify plan costs $0.00015 per delivered row. Apify bills your platform
usage separately.

For more volume, [pick an Apify plan](https://apify.com/pricing?fpr=xquik) with
more prepaid usage.

- One charge per delivered data row. Diagnostics are free in `diagnostics`.
- No start, post, engagement-type or page fee.
- Deduplication runs before billing.

## Limits & recovery

Xquik's X Engagement Scraper reads many posts & engagement types in 1 run.
Delivered rows & progress survive an Apify restart. The Actor adds no time limit
of its own.

Interrupted extraction writes a free `partial` diagnostic. Available results
stay intact. Read `availableResults`, `failedTargets`, `retryable` &
`nextAction` before you retry. A successful Actor exit confirms delivery, not
complete extraction.

The run status names every cause of an early stop. `stopCauses` lists each cause
with its own `message`, `retryable` & `nextAction`. The causes are
`target_not_found`, `target_failed`, `pagination_safety_limit`, `reply_reach` &
`deadline_reached`. `reply_reach` means X served only part of a reply thread. A
missing target joins the list only when another cause stopped the run. The run
is `retryable` when any cause is.

## Related Xquik Actors

Every Xquik Actor shares the same extraction engine, filter-first billing &
diagnostics. Pick the one that matches the data you need.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper) scrapes tweets from
  searches, profile timelines, Lists & tweet IDs with 50+ filters & flat
  exports. Use it when you need tweet data without analysis. From $0.00015 per
  row.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper) scrapes
  profiles plus their posts, replies, media & followers from handles, IDs or
  URLs. Use it when you start from accounts rather than searches. From $0.00015
  per row.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper) scrapes replies,
  comments & whole conversations under posts with 25+ filters. Use it when you
  need the discussion beneath tweets. From $0.00015 per row.
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper)
  scrapes the quote tweets of posts with text, media, counts, authors & 11
  filters. Use it when you study who quoted posts & what they said. From
  $0.00015 per tweet.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper) scrapes
  followers, following, List members, subscribers & Community members as profile
  rows. Use it when you need audience or member lists. From $0.00015 per
  profile.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper)
  searches users by handle, bio & location with follower, verification, age &
  location filters. Use it when you build account lists from search. From
  $0.00015 per profile.
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper)
  checks where accounts are based with X's "Account based in" label, "connected
  via" & username changes. Use it when you vet where accounts are based. From
  $0.00015 per account.
- [X Email Scraper](https://apify.com/xquik/x-email-scraper) gets the emails,
  phones & links accounts publish on their profiles, from handles, followers or
  user searches. Use it when you need the emails profiles publish. From $0.00015
  per profile.
- [X List Scraper](https://apify.com/xquik/x-list-scraper) scrapes List posts,
  members & followers from List URLs or IDs. Use it when a curated List defines
  your sources. From $0.00015 per row.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper) scrapes
  Community info, posts, searches, members & moderators. Use it when your
  sources are X Communities. From $0.00015 per row.
- [X Space Scraper](https://apify.com/xquik/x-space-scraper) finds Spaces by
  keyword & reads their titles, states, times, listener counts, hosts &
  speakers. It also reads broadcasts by URL or ID. Use it when you track live
  audio & video on X. From $0.00015 per Space or broadcast.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper) scrapes real-time
  trends by location with rank, volume, query & WOEID. Use it when you track
  what is trending where. From $0.00015 per trend.
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper) scrapes X job listings
  by keyword, place, workplace, seniority & company, with salaries & apply
  links. Use it when you collect job openings posted on X. From $0.00015 per
  job.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper) scrapes
  long-form X Articles as Markdown & text with covers, authors, dates & metrics.
  Use it when you need article bodies, not tweets. From $0.00015 per article.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader) extracts or
  stores photos, videos & GIFs from posts or profiles with MP4 & metadata
  options. Use it when you need the media files themselves. From $0.00015 per
  media row.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring)
  tracks brand mentions with AI relevance, sentiment & customer-experience
  answers & compares runs. Use it when you watch a brand over time. From $0.0003
  per analyzed tweet.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis)
  labels attitude, intensity & sarcasm probability for every tweet with AI. Use
  it when you need general sentiment on any topic. From $0.0003 per analyzed
  tweet.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)
  labels bullish, bearish, neutral or mixed stance, content type, conviction &
  asset relevance with AI. Use it when you follow stocks, crypto or trading
  talk. From $0.0003 per analyzed tweet.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)
  labels news posts by format, source attribution & topic relevance with AI. Use
  it when you separate reporting from commentary. From $0.0003 per analyzed
  tweet.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)
  answers your own category, score & yes/no questions for every tweet with AI.
  Use it when the preset analyses do not fit your labels. From $0.0003 per
  analyzed tweet.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)
  estimates a Viral Score from 0 to 100 & a verdict for every tweet from 8 AI
  trait answers. Use it when you study why tweets spread or flop. From $0.0003
  per analyzed tweet.

## FAQ

Answers to common questions, then where to get help.

### Do I need an X API key or login?

No. Xquik's X Engagement Scraper needs no X API key, login or credentials.

### Is it legal to scrape X engagement data?

Xquik's X Engagement Scraper requests public X fields. Results can contain
personal data. Confirm a lawful purpose & follow applicable privacy rules. Ask
qualified counsel when uncertain.

### Why did my run return no results?

Read the run status first. An empty run's status says to check your targets &
filters. The free `diagnostics` output appears when something needs attention.
Its `stopCauses` gives each cause a `nextAction` to follow. The run lists each
input it cannot read & says how to fix it. X stopped showing who liked a post in
2024, so `favoriters` returns no rows.

### Can I use the API, schedules & integrations?

Yes. Choose from 50 public tasks or the Xquik REST API. The
[API tab](https://apify.com/xquik/x-engagement-scraper/api) has Python,
JavaScript & cURL examples. Apify
[schedules](https://docs.apify.com/platform/schedules) run Xquik's X Engagement
Scraper on a cron. Agents use
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Use `latest`
unless you need an older build.

### Where do I get help?

Open an issue in the
[Issues tab](https://apify.com/xquik/x-engagement-scraper/issues) with the run
ID. Free diagnostics in the key-value store explain runs that need attention. A
run that gets no row back says why in its status.

### Can I get a custom solution?

Yes. Describe what you need in the
[Issues tab](https://apify.com/xquik/x-engagement-scraper/issues). Xquik also
offers a dashboard, a REST API, an MCP server & webhooks. Find Xquik's website
on its [Apify profile](https://apify.com/xquik).
