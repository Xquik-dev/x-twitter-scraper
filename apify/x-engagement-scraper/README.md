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

## How to scrape X post engagement

1. Open Xquik's X Engagement Scraper in Apify Console.
2. Paste post URLs into `startUrls` or numeric Tweet IDs into `tweetIds`.
3. Pick `engagementTypes` & add filters such as `minLikes` or `language`.
4. Set `maxItems` to cap delivered rows, then click Start.
5. Download the dataset as JSON, CSV or Excel, or use the Apify API.

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

## Output

Each row sets `resultType` to `tweet`, `replies`, `completeReplies`, `quotes`,
`retweeters`, `favoriters` or `thread`. `sourceTarget` holds the source Tweet
ID. Tweet & profile fields follow stable Xquik REST response shapes.

`completeReplies` keeps every returned row. The run report counts partial
coverage in `incompleteTargets`. Filters run before billing.

Examples use sample values. Results reflect live data. A reply row looks like
this:

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

## Retweet timestamps

Set `includeRetweetTimestamp` to `true` for `retweeters` results. The
`retweetedAt` column holds the observed repost time in UTC.

Xquik's X Engagement Scraper finds the repost time when X still shows that
repost. Older, deleted or unavailable reposts leave the timestamp `null`. The
profile stays in the output. A `null` value does not prove that an account never
reposted a post.

This option makes runs slower. Leave it off for profile-only results. Profile
`createdAt` stays the account creation date. Tweet rows carry `retweetedAt` when
they contain a repost event. Original post dates & scrape times never replace
repost times. Result prices & delivered-row billing stay the same.

## How much does it cost to scrape X post engagement?

Every Apify plan costs $0.00015 per delivered row. Apify bills your platform
usage separately.

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

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): Scrapes tweets
  from searches, profile timelines, Lists & tweet IDs with 50+ filters & flat
  exports. Use it when you need tweet data without analysis. From $0.00015 per
  row.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): Scrapes
  profiles plus their posts, replies, media & followers from handles, IDs or
  URLs. Use it when you start from accounts rather than searches. From $0.00015
  per row.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): Scrapes replies,
  comments & whole conversations under posts with 25+ filters. Use it when you
  need the discussion beneath tweets. From $0.00015 per row.
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

No. Xquik's X Engagement Scraper needs no X API key, login or credentials.

### Is it legal to scrape X engagement data?

Xquik's X Engagement Scraper requests public X fields. Results can contain
personal data. Confirm a lawful purpose & follow applicable privacy rules. Ask
qualified counsel when uncertain.

### Why did my run return no results?

Open the free `diagnostics` output first. An empty run's status says to check
your targets & filters. `stopCauses` gives each cause a `nextAction` to follow.
The run lists each input it cannot read & says how to fix it. X stopped showing
who liked a post in 2024, so `favoriters` returns no rows.

### Can I use the API, schedules & integrations?

Yes. Choose from 50 public tasks or 129 Xquik REST operations. The
[API tab](https://apify.com/xquik/x-engagement-scraper/api) has Python,
JavaScript & cURL examples. Apify
[schedules](https://docs.apify.com/platform/schedules) run Xquik's X Engagement
Scraper on a cron. Agents use
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Use `latest`
unless you need an older build.

### Where do I get help?

Open an issue on the Actor page or contact <support@xquik.com> with the run ID.
Free diagnostics in the key-value store explain empty, partial or interrupted
runs.

### Can I get a custom solution?

Yes. Visit [xquik.com](https://xquik.com) or read the
[API docs](https://docs.xquik.com/introduction). They cover the dashboard, API,
MCP server & webhooks.
