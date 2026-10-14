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

[![Framer connects Xquik MCP to coding agents](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Watch how Framer uses Xquik scrapers](https://youtu.be/4UOSpoOoC3Y?t=367)
with Claude Code, Codex, Cursor & more, from 6:07.

Xquik is the world's fastest & cheapest X (Twitter) scraper service with the
most complete X data. Xquik's X Article Scraper turns long-form X Articles into
Markdown & text. It adds covers, authors, dates & metrics. Most other Apify
Actors charge before filtering or deduplicating. Xquik charges only for
delivered, unique, filter-matching results.

Extract long-form X Articles from post URLs or numeric Tweet IDs. You pay
**$0.00015 per delivered article**, & Apify bills platform usage separately. You
need no X API key or login.

> Xquik is an independent third-party service. Not affiliated with X Corp.
> "Twitter" and "X" are trademarks of X Corp.

## Article data & format

- Markdown with headings, lists, bold, italic, links & images, without HTML.
- `contents` blocks that keep the source formatting.
- Post URLs & numeric Tweet IDs in the same run.
- Every Article an account published, from its handle or profile URL.
- Duplicate removal before billing.

Xquik's X Article Scraper never guesses link metadata. Apify shows Markdown as
text.

## How to scrape X articles

New to Apify?
[Create a free account](https://console.apify.com/sign-up?fpr=xquik) first. The
free plan needs no credit card & gives $5 to spend each month. At $0.00015 per
article, $5 pays for up to 33,000 articles before platform usage. Then come back
here & press Try for free.

1. Open Xquik's X Article Scraper in Apify Console.
2. Paste Article post URLs into `startUrls` or Tweet IDs into `tweetIds`. To
   list an account's Articles, add its handle to `twitterHandles`.
3. Set `maxItems` to cap delivered Articles, then click Start.
4. Download the dataset as JSON, CSV or Excel, or use the Apify API.

`startUrls` takes each URL as a plain string or as a `{ "url": "..." }` object.

```json
{
  "startUrls": [
    "https://x.com/github/status/2082201573976056245",
    { "url": "https://x.com/satyanadella/status/2066182223213293753" }
  ]
}
```

## Input

| Field                  | Purpose                                  | Default  |
| ---------------------- | ---------------------------------------- | -------- |
| `startUrls`            | Public Article post or profile URLs      | None     |
| `tweetIds`             | Numeric Article Tweet IDs                | None     |
| `twitterHandles`       | Accounts whose Articles to list          | None     |
| `maxItems`             | Global delivered-Article cap             | `100000` |
| `dedupeAcrossTargets`  | Drop repeated Article IDs before billing | `true`   |
| `maxConcurrency`       | Parallel independent Article reads       | `100`    |
| `alwaysSaveRunRecords` | Save `run-report` on every run           | `false`  |

## Output

The Output tab opens `Articles`. `Results` links to rows. `Run Report` links to
counts, completion, duration & anomalies. A run that hits a problem, or a large
run, writes the report. A small run that goes well states its counts in the run
status instead. Turn on `alwaysSaveRunRecords` to write it on every run.

Examples use sample values. Results reflect live data. An Article row includes
these fields.

```json
{
  "markdown": "# Article title\n\nPlain **Article** text",
  "bodyMarkdown": "Plain **Article** text",
  "bodyText": "Plain Article text",
  "contents": [
    {
      "type": "paragraph",
      "text": "Plain Article text",
      "inlineStyleRanges": [{ "offset": 6, "length": 7, "style": "Bold" }]
    }
  ]
}
```

Rows add author, source, cover, time & metrics. Export JSON or tables.

A handle in `twitterHandles`, or a profile URL in `startUrls`, lists that
account's Articles newest first. Each is an `articlePreview` row with the
Article's `title`, `previewText`, `coverImageUrl`, `articleId`, dates & post
metrics. X lists no body there, so the row has no `markdown` or `contents`. Run
its `tweetId` to get the full Article.

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

## How much does it cost to scrape X articles?

Every Apify plan costs $0.00015 per delivered article. Apify bills your platform
usage separately.

For more volume, [pick an Apify plan](https://apify.com/pricing?fpr=xquik) with
more prepaid usage.

- One charge per delivered data row. Diagnostics are free in `diagnostics`.
- No start fee.
- Deduplication runs before billing.

## Limits & recovery

Xquik's X Article Scraper returns only public Articles that X exposes.

Interrupted extraction writes a free `partial` diagnostic. Available results
stay intact. Read `availableResults`, `failedTargets`, `retryable` &
`nextAction` before you retry. A successful Actor exit confirms delivery, not
complete extraction.

The run status names every cause of an early stop. `stopCauses` lists each cause
with its own `message`, `retryable` & `nextAction`. The causes are
`target_not_found`, `target_suspended`, `target_failed`,
`pagination_safety_limit` & `deadline_reached`. `target_suspended` names the
accounts X suspended. A missing or suspended target joins the list only when
another cause stopped the run. The run is `retryable` when any cause is.

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
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper) scrapes
  replies, quotes, retweeters & threads for post URLs or IDs in bulk. Use it
  when you measure who engaged with posts. From $0.00015 per row.
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

No. Xquik's X Article Scraper needs no X API key, login or credentials.

### Is it legal to scrape X articles?

Xquik's X Article Scraper requests public X fields. Results can contain personal
data. Confirm a lawful purpose & follow applicable privacy rules. Ask qualified
counsel when uncertain.

### Why did my run return no results?

Read the run status first. An empty run's status says to check your targets &
filters. The free `diagnostics` output appears when something needs attention.
Its `stopCauses` gives each cause a `nextAction` to follow. The run warns about
links it cannot read & says how to fix them. Xquik's X Article Scraper returns
only public Articles that X exposes.

### Can I use the API, schedules & integrations?

Yes. Choose from 50 public tasks or the Xquik REST API. The
[API tab](https://apify.com/xquik/x-article-scraper/api) has Python, JavaScript
& cURL examples. Apify [schedules](https://docs.apify.com/platform/schedules)
run Xquik's X Article Scraper on a cron. Agents use
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Use `latest`
unless you need an older build.

### Where do I get help?

Open an issue in the
[Issues tab](https://apify.com/xquik/x-article-scraper/issues) with the run ID.
Free diagnostics in the key-value store explain runs that need attention. A run
that gets no row back says why in its status.

### Can I get a custom solution?

Yes. Describe what you need in the
[Issues tab](https://apify.com/xquik/x-article-scraper/issues). Xquik also
offers a dashboard, a REST API, an MCP server & webhooks. Find Xquik's website
on its [Apify profile](https://apify.com/xquik).
