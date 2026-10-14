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
most complete X data. Xquik's X Space Scraper finds Spaces by keyword, host or
hashtag & reads Spaces & broadcasts by URL or ID. Most other Apify Actors charge
before filtering or deduplicating. Xquik charges only for delivered, unique
results.

Find Twitter Spaces about any topic, live, scheduled or ended. You need no X API
key or login. You pay **$0.00015 per delivered Space or broadcast**, & Apify
bills platform usage separately.

> Xquik is an independent third-party service. Not affiliated with X Corp.
> "Twitter" and "X" are trademarks of X Corp.

## Space data

- Title, state & the scheduled, start & end times of each Space.
- Live listener count, replay plays & the accounts in the Space now.
- The host's public profile, co-hosts, speakers & listeners X lists.
- Replay, clipping & lock settings, plus the post that announces the Space, with
  its text, counts & author.
- Posts the hosts & speakers shared in the Space, with who shared each & when.
- The recording of a Space that is over, as an HLS playlist URL, with
  `includeReplay`.
- Broadcasts by URL or ID, with title, state, times, watch counts & host.
- Duplicate removal before billing. A Space that 2 search terms find is 1 row.

## How to find X Spaces

New to Apify?
[Create a free account](https://console.apify.com/sign-up?fpr=xquik) first. The
free plan needs no credit card & gives $5 to spend each month. At $0.00015 per
Space or broadcast, $5 pays for up to 33,000 of them before platform usage. Then
come back here & press Try for free.

1. Open Xquik's X Space Scraper in Apify Console.
2. Enter words, hashtags or X search operators in `searchTerms`.
3. Or paste Space URLs in `startUrls`, or Space IDs in `spaceIds`.
4. For broadcasts, paste their URLs in `startUrls` or their IDs in
   `broadcastIds`.
5. Set `maxItems` to cap delivered rows, then click Start.
6. Download the dataset as JSON, CSV or Excel, or use the Apify API.

`startUrls` takes each URL as a plain string or as a `{ "url": "..." }` object.

```json
{
  "startUrls": [
    "https://x.com/i/spaces/1OGwblLjnQMKB",
    { "url": "https://x.com/i/broadcasts/1nGeLMWbkpaKX" }
  ]
}
```

## Input

```json
{
  "searchTerms": ["bitcoin", "from:solana"],
  "queryType": "Latest",
  "maxItems": 1000
}
```

A search term finds the Spaces that matching posts share. It takes the operators
X search takes.

| Goal                               | Search term        |
| ---------------------------------- | ------------------ |
| Spaces about a topic               | `bitcoin`          |
| Spaces an account shares           | `from:solana`      |
| Spaces under a hashtag             | `#AI`              |
| Spaces in 1 language               | `startups lang:es` |
| Spaces that well-liked posts share | `nba min_faves:50` |

`queryType` picks which posts lead. `Latest` puts the newest first & `Top` the
most engaging.

`Live` lists Spaces on air now & `Upcoming` lists scheduled ones. Both read X's
own Spaces search, which matches words in Space titles & takes no operators.

```json
{ "searchTerms": ["bitcoin"], "queryType": "Live" }
```

Read Spaces you already know by URL or ID.

```json
{
  "startUrls": [{ "url": "https://x.com/i/spaces/1OGwblLjnQMKB" }],
  "spaceIds": ["1OGwblLjnQMKB"]
}
```

Turn on `includeReplay` to get the recording of each Space that is over.

```json
{ "spaceIds": ["1OGwblLjnQMKB"], "includeReplay": true }
```

The row then carries `replay` with `url`, an HLS playlist, plus `streamType` &
`status`. A Space that is live, scheduled or without a recording has no
`replay`. The replay costs nothing extra.

Read broadcasts, the live video X hosts at `x.com/i/broadcasts`, by URL or ID.

```json
{
  "startUrls": [{ "url": "https://x.com/i/broadcasts/1nGeLMWbkpaKX" }],
  "broadcastIds": ["1nGeLMWbkpaKX"]
}
```

Small runs that go well skip `run-report` & save Apify usage. Turn on
`alwaysSaveRunRecords` to write it on every run.

## Output

Each row holds 1 Space or broadcast & its search term, URL or ID in
`sourceTarget`. `resultType` is `space` or `broadcast`.

Examples use sample values. Results reflect live data. A Space row looks like
this.

```json
{
  "id": "1SampleSpace1",
  "title": "Sample Space about bitcoin",
  "state": "Ended",
  "startedAt": "2026-03-11T17:00:26.227Z",
  "endedAt": "2026-03-11T17:49:29.190Z",
  "totalLiveListeners": 841,
  "totalReplayWatched": 609,
  "isAvailableForReplay": true,
  "creator": { "username": "sample_host", "name": "Sample Host" },
  "admins": [{ "username": "sample_host", "name": "Sample Host" }],
  "speakers": [{ "username": "sample_speaker", "name": "Sample Speaker" }],
  "listeners": [],
  "sharings": [
    {
      "id": "2106511178339881415",
      "sharedAt": "2026-03-11T17:20:16.658Z",
      "sharedBy": { "username": "sample_speaker", "name": "Sample Speaker" },
      "tweet": { "id": "2105620368836706789", "text": "Sample shared post" }
    }
  ],
  "resultType": "space",
  "sourceTarget": "bitcoin"
}
```

`state` holds 1 of 5 values, as X names them.

| `state`      | The Space                                |
| ------------ | ---------------------------------------- |
| `NotStarted` | Is scheduled & carries `scheduledStart`. |
| `Running`    | Is live now.                             |
| `Ended`      | Is over. Its host ended it.              |
| `TimedOut`   | Is over. X closed it, not its host.      |
| `Canceled`   | Was scheduled & never started.           |

`Ended` & `TimedOut` Spaces carry `endedAt`, & both can keep a recording. X
shows a Space for subscribers or a Community only to its audience, so those
Spaces return no row.

A broadcast row has `resultType: "broadcast"` & looks like this.

```json
{
  "id": "1SampleBcast1",
  "title": "Sample launch broadcast",
  "state": "Ended",
  "startedAt": "2026-09-17T00:54:56.506Z",
  "endedAt": "2026-09-17T01:17:35.036Z",
  "totalWatched": 161758,
  "totalWatching": 21639,
  "width": 3840,
  "height": 2160,
  "creator": { "username": "sample_host", "name": "Sample Host" },
  "resultType": "broadcast",
  "sourceTarget": "1SampleBcast1"
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

## How much does it cost to scrape X Spaces?

Every Apify plan costs $0.00015 per delivered Space or broadcast. Apify bills
your platform usage separately.

For more volume, [pick an Apify plan](https://apify.com/pricing?fpr=xquik) with
more prepaid usage.

- One charge per delivered data row. Diagnostics are free in `diagnostics`.
- No start, search or page fee.
- Deduplication runs before billing.

## Limits & recovery

Interrupted extraction writes a free `partial` diagnostic. Available results
stay intact. Read `availableResults`, `failedTargets`, `retryable` &
`nextAction` before you retry. A successful Actor exit confirms delivery, not
complete extraction.

The run status names every cause of an early stop. `stopCauses` lists each cause
with its own `message`, `retryable` & `nextAction`. The causes are
`target_not_found`, `target_failed`, `pagination_safety_limit` &
`deadline_reached`. A missing target joins the list only when another cause
stopped the run. The run is `retryable` when any cause is.

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
  checks where accounts are based with X's Account based in label, connected via
  & username changes. Use it when you vet where accounts are based. From
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

No. Xquik's X Space Scraper needs no X API key, login or credentials.

### Can I find Spaces that are live now?

Yes. Set `queryType` to `Live` & add a search term, such as `bitcoin`. Each row
is a Space on air now. `Upcoming` lists scheduled Spaces, which carry
`scheduledStart`.

### Is it legal to scrape X Spaces?

Xquik's X Space Scraper requests public X fields. Results can contain personal
data. Confirm a lawful purpose & follow applicable privacy rules. Ask qualified
counsel when uncertain.

### Why did my run return no results?

Read the run status first. An empty run's status says to check your targets. The
free `diagnostics` output appears when something needs attention. Its
`stopCauses` gives each cause a `nextAction` to follow.

### Can I use the API, schedules & integrations?

Yes. Use the Apify API or the Xquik REST API. The
[API tab](https://apify.com/xquik/x-space-scraper/api) has Python, JavaScript &
cURL examples. Apify [schedules](https://docs.apify.com/platform/schedules) run
Xquik's X Space Scraper on a cron. Agents use
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Use `latest`
unless you need an older build.

### Where do I get help?

Open an issue in the
[Issues tab](https://apify.com/xquik/x-space-scraper/issues) with the run ID.
Free diagnostics in the key-value store explain runs that need attention. A run
that gets no row back says why in its status.

### Can I get a custom solution?

Yes. Describe what you need in the
[Issues tab](https://apify.com/xquik/x-space-scraper/issues). Xquik also offers
a dashboard, a REST API, an MCP server & webhooks. Find Xquik's website on its
[Apify profile](https://apify.com/xquik).
