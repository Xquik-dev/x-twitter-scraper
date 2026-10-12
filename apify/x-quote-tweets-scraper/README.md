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
most complete X data. Xquik's X Quote Tweets Scraper collects the posts that
quote public X posts, with no X cookies or login. Most other Apify Actors charge
before filtering or deduplicating. Xquik charges only for delivered, unique,
filter-matching results.

Paste post URLs or Tweet IDs & get every quote X serves for each post in 1 run.
Each row holds the quote, its author's full public profile & the quoted post.
You pay **$0.00015 per delivered row**, & Apify bills platform usage separately.

> Xquik is an independent third-party service. Not affiliated with X Corp.
> "Twitter" and "X" are trademarks of X Corp.

## Quote data in every row

- The quote's full text, link, language & post time.
- Likes, replies, reposts, quotes, views & bookmarks.
- The author's full public profile: name, bio, followers, verification & more.
- Photos, videos & GIFs with their links.
- Hashtags, mentions & links found in the text.
- The quoted post itself, in the same shape.
- `sourceTarget`, the input post the row quotes.
- `position`, the row's place in the run, & `scrapedAt`, its delivery time.
- Many posts in 1 run, each read to the end of what X serves.
- Newest first, or the quotes X ranks highest.
- 11 filters: language, dates, media type, 6 minimum counts & verified authors.
- 1 row per author when you want people, not posts.
- Post URLs from x.com & twitter.com, or numeric Tweet IDs.
- Duplicate removal before billing.
- JSON, CSV, Excel, XML & RSS exports through Apify datasets.
- Runs resume from saved state after an Apify migration.

## How to scrape quote tweets

1. Open Xquik's X Quote Tweets Scraper in Apify Console.
2. Paste post URLs into `startUrls` or Tweet IDs into `tweetIds`.
3. Set `maxItems` to cap delivered rows, then click Start.
4. Download the dataset as JSON, CSV or Excel, or use the Apify API.

You enter no X cookies, login or API key at any step. You carry no page cursor
between runs.

## Input

`startUrls` takes each post URL as a plain string or as a `{ "url": "..." }`
object. `tweetIds` takes Tweet IDs, & a post URL works there too:

```json
{
  "startUrls": [
    "https://x.com/OpenAI/status/2082577277246972300",
    { "url": "https://twitter.com/jack/status/20" }
  ],
  "tweetIds": ["2082201573976056245"],
  "maxItems": 1000
}
```

Order, filters & caps go beside the posts:

```json
{
  "tweetIds": ["2082577277246972300"],
  "sort": "top",
  "language": "en",
  "minLikes": 10,
  "sinceDate": "2026-10-01",
  "maxItemsPerTarget": 200,
  "uniqueAuthors": true
}
```

- `sort` is `latest` for the newest quotes first, or `top` for the quotes X
  ranks highest.
- `includeReplies` keeps replies that quote the post, as X's Quotes view lists
  them. It is on unless you turn it off.
- `uniqueAuthors` keeps each author's first quote of the run. The dataset then
  holds 1 row per author, not per quote. You pay for the rows delivered.
- `maxItems` caps the whole run & `maxItemsPerTarget` caps each post.
- The filters are `language`, `sinceDate`, `untilDate`, `mediaType`, `minLikes`,
  `minReplies`, `minRetweets`, `minQuotes`, `minViews`, `minBookmarks` &
  `verifiedOnly`.

A post the input names twice is read once. `tweetUrls`, `tweetId`, `tweets` &
`tweet_id` work as other names for the posts. Small runs that go well skip
`run-report` & save Apify usage. Turn on `alwaysSaveRunRecords` to write it on
every run.

## Output

Each quote is 1 dataset row with `id`, `url`, `text`, `createdAt`, `lang`,
`likeCount`, `replyCount`, `retweetCount`, `quoteCount`, `viewCount`,
`bookmarkCount`, `media`, `entities`, `author`, `quotedTweetId` &
`quoted_tweet`. The Actor adds `sourceTarget`, `position`, `scrapedAt` &
`resultType`. Missing source fields stay absent. Xquik's X Quote Tweets Scraper
invents no values.

Examples use sample values. Results reflect live data. A row looks like this:

```json
{
  "id": "1900000000000000001",
  "url": "https://x.com/sample_user/status/1900000000000000001",
  "text": "Worth a read. The second chart says it all.",
  "createdAt": "2026-10-11T09:00:00.000Z",
  "lang": "en",
  "likeCount": 42,
  "replyCount": 3,
  "retweetCount": 5,
  "quoteCount": 1,
  "viewCount": 1800,
  "bookmarkCount": 2,
  "author": {
    "id": "1234567890",
    "username": "sample_user",
    "name": "Sample User",
    "followers": 1200,
    "verified": true
  },
  "quotedTweetId": "1900000000000000000",
  "quoted_tweet": {
    "id": "1900000000000000000",
    "text": "Our new report is out."
  },
  "resultType": "quotes",
  "sourceTarget": "1900000000000000000",
  "position": 1,
  "scrapedAt": "2026-10-12T09:00:00.000Z"
}
```

`position` counts delivered rows from 1, after filters & deduplication. The
dataset has 2 table views. "Quote Tweets" shows each quote with its counts.
"Quote Authors" shows who quoted each post, with the author's profile fields as
columns.

## What X serves

2 limits come from X, & Xquik's X Quote Tweets Scraper states them plainly:

- X's search decides how far back the quotes of a very large post go. A run
  reads every quote X serves & stops there.
- `top` is X's ranking, not Xquik's. It is not a like count order. A later row
  can have more likes than an earlier one.

## How much does it cost to scrape quote tweets?

Every Apify plan costs $0.00015 per delivered row. Apify bills your platform
usage separately.

- One charge per delivered data row. Diagnostics are free in `diagnostics`.
- No start fee.
- A post X does not have adds no row & no charge.
- Filters & `uniqueAuthors` run before billing, so a dropped quote costs
  nothing.
- Deduplication runs before billing.
- Apify maximum-total-charge settings cap delivered rows.

## Limits & recovery

Xquik's X Quote Tweets Scraper reads many posts in 1 run. Delivered rows &
progress survive an Apify restart. The Actor adds no time limit of its own. It
respects any Apify timeout you set.

The run status names the posts X has no match for & says to check the URL or ID.
Interrupted extraction writes a free `partial` diagnostic. Available results
stay intact. Read `availableResults`, `failedTargets`, `retryable` &
`nextAction` before you retry. A successful Actor exit confirms delivery, not
complete extraction.

The run status names every cause of an early stop. `stopCauses` lists each cause
with its own `message`, `retryable` & `nextAction`. The run is `retryable` when
any cause is.

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
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper):
  Checks where accounts are based with X's Account based in label, connected via
  & username changes. Use it when you vet where accounts are based. From
  $0.00015 per account.
- [X Email Scraper](https://apify.com/xquik/x-email-scraper): Gets the emails,
  phones & links accounts publish on their profiles, from handles, followers or
  user searches. Use it when you need the emails profiles publish. From $0.00015
  per profile.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): Scrapes List posts,
  members & followers from List URLs or IDs. Use it when a curated List defines
  your sources. From $0.00015 per row.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): Scrapes
  Community info, posts, searches, members & moderators. Use it when your
  sources are X Communities. From $0.00015 per row.
- [X Space Scraper](https://apify.com/xquik/x-space-scraper): Finds Spaces by
  keyword & reads their titles, states, times, listener counts, hosts &
  speakers. Also reads broadcasts by URL or ID. Use it when you track live audio
  & video on X. From $0.00015 per Space or broadcast.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): Scrapes
  real-time trends by location with rank, volume, query & WOEID. Use it when you
  track what is trending where. From $0.00015 per trend.
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper): Scrapes X job
  listings by keyword, place, workplace, seniority & company, with salaries &
  apply links. Use it when you collect job openings posted on X. From $0.00015
  per job.
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

### Do I need X cookies, an API key or a login?

No. Xquik's X Quote Tweets Scraper needs no X cookies, API key, login or
credentials. Every read runs on Xquik's infrastructure.

### Can I scrape the quotes of many posts in 1 run?

Yes. Paste as many post URLs or Tweet IDs as you need. Each row's `sourceTarget`
says which post it quotes.

### How many quotes can 1 run return?

A run can return 100,000 rows & more. Raise `maxItems` above the 1,000 the form
starts with for a full export.

### Why does a huge post return fewer quotes than its counter shows?

X's search decides how far back the quotes of a very large post go. The run
delivers every quote X serves. The counter also includes quotes from private or
removed accounts.

### How do I get 1 row per person who quoted a post?

Turn on `uniqueAuthors`. The run keeps each author's first quote & skips their
later ones uncharged.

### Is it legal to scrape quote tweets?

Xquik's X Quote Tweets Scraper requests public X posts. Results can contain
personal data. Confirm a lawful purpose & follow applicable privacy rules. Ask
qualified counsel when uncertain.

### Why did my run return no results?

Read the run status first. An empty run's status says whether X has no match for
a post or the post has no quotes that match your filters. The free `diagnostics`
output appears when something needs attention. Its `stopCauses` gives each cause
a `nextAction` to follow.

### Can I use the API, schedules & integrations?

Yes. Use the Apify API or the Xquik REST API. The
[API tab](https://apify.com/xquik/x-quote-tweets-scraper/api) has Python,
JavaScript & cURL examples. Apify
[schedules](https://docs.apify.com/platform/schedules) run Xquik's X Quote
Tweets Scraper on a cron. Agents use
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Use `latest`
unless you need an older build.

### Where do I get help?

Open an issue on the Actor page or contact <support@xquik.com> with the run ID.
Free diagnostics in the key-value store explain runs that need attention. A run
that gets no row back says why in its status.

### Can I get a custom solution?

Yes. Visit [xquik.com](https://xquik.com) or read the
[API docs](https://docs.xquik.com/introduction). They cover the dashboard, API,
MCP server & webhooks.
