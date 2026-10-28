**English** ·
[Español](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-twitter-post-tracker/README.es.md)
·
[Türkçe](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-twitter-post-tracker/README.tr.md)
·
[简体中文](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-twitter-post-tracker/README.zh-CN.md)
·
[日本語](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-twitter-post-tracker/README.ja.md)
·
[한국어](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-twitter-post-tracker/README.ko.md)
·
[Deutsch](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-twitter-post-tracker/README.de.md)
·
[Français](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-twitter-post-tracker/README.fr.md)
·
[Italiano](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-twitter-post-tracker/README.it.md)

[![Framer connects Xquik MCP to coding agents](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Watch how Framer uses Xquik scrapers](https://youtu.be/4UOSpoOoC3Y?t=367)
with Claude Code, Codex, Cursor & more, from 6:07.

Xquik is the world's fastest & cheapest X (Twitter) scraper service with the
most complete X data. Xquik's X (Twitter) Post Tracker records the public counts
of posts you pick. It needs no X cookies or login. Run it again later, & each
row shows what changed. Most other Apify Actors charge before filtering or
deduplicating. Xquik charges only for delivered, unique results.

Paste post URLs or Tweet IDs. Each run saves 1 snapshot row per post. A row
holds views, likes, reposts, replies, quotes & bookmarks at that moment. It also
holds the change since the previous snapshot & since the first one. You pay
**$0.00015 per delivered snapshot**, & Apify bills platform usage separately.

> Xquik is an independent third-party service. Not affiliated with X Corp.
> "Twitter" and "X" are trademarks of X Corp.

## Why use X (Twitter) Post Tracker?

- **Growth in every row.** Each snapshot holds the change since the last & first
  runs.
- **History without a database.** Pass an earlier run's dataset. The first
  snapshot carries forward from run to run.
- **Paste any post form.** Mix post URLs & Tweet IDs in 1 list.
- **Spreadsheet-ready exports.** Shape columns with `fields` & `flatten`. Export
  JSON, CSV, Excel, XML or RSS.

## What you get

### Complete results

- Each answer holds the fullest data X has for it.

### Accurate rows

- A post is called missing only when it's gone.
- Every ID in a row stays exact.
- Rows hold public data only.

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
- Every run says why it ended & whether to retry.

### Rich data

- Tracked posts show each count's change since an earlier run.

### Quality checks

- Every field X shows is served, left out on purpose or proven absent.
- Every read is checked live each hour.

## What data can X (Twitter) Post Tracker extract?

- Views, likes, reposts, replies, quotes & bookmarks of each post.
- The time of each snapshot, in `capturedAt`.
- The first snapshot of each post, with its time & counts.
- The previous snapshot, from the earlier run's dataset.
- The change in each count since the previous snapshot.
- The change in each count since the first snapshot.
- The post text, its date, its link & its author.
- Many posts in 1 run, delivered in input order.
- JSON, CSV, Excel, XML & RSS exports through Apify datasets.

## How to track X post metrics over time

New to Apify?
[Create a free account](https://console.apify.com/sign-up?fpr=xquik) first. The
free plan needs no credit card & gives $5 to spend each month. At $0.00015 per
snapshot, $5 pays for up to 33,000 snapshots before platform usage. Then come
back here & press Try for free.

1. Open Xquik's X (Twitter) Post Tracker in Apify Console.
2. Paste post URLs or Tweet IDs into `tweetIds`.
3. Leave `previousDatasetId` empty on the first run, then click Start.
4. On the next run, pick the first run's dataset in `previousDatasetId`.
5. Download the dataset as JSON, CSV or Excel, or use the Apify API.

You enter no X cookies, login or API key at any step.

## Input

`tweetIds` takes Tweet IDs & post URLs, in any mix.

```json
{
  "tweetIds": [
    "2102882545427714266",
    "https://x.com/OpenAI/status/2082577277246972300",
    "20"
  ],
  "maxItems": 1000
}
```

`startUrls` takes the same post URLs. Give each as a plain string or a
`{ "url": "..." }` object.

`previousDatasetId` names the dataset of an earlier run of this Actor. The form
lets you pick it from your datasets. The Actor only reads that dataset. Leave it
empty on the first run.

```json
{
  "tweetIds": ["2102882545427714266", "20"],
  "previousDatasetId": "<dataset ID of an earlier run>"
}
```

A post the input names twice gets 1 row. `maxItems` keeps the first posts of the
input. Small runs that go well skip `run-report` & save Apify usage. Turn on
`alwaysSaveRunRecords` to write it on every run.

## Run it on a schedule

Apify [schedules](https://docs.apify.com/platform/schedules) start the Actor on
a cron, such as every hour.

1. Run the Actor once with your posts & no `previousDatasetId`.
2. Create a schedule for the Actor in Apify Console.
3. Give the schedule the same `tweetIds` input.
4. Set `previousDatasetId` to the first run's dataset.

Each scheduled run then compares its counts with that dataset. To compare each
run with the one before, start runs with the Apify API. Pass the last run's
`defaultDatasetId` as `previousDatasetId`. The first snapshot still carries
forward, so `changeSinceFirst` keeps counting from day 1. A post missing from
the last run starts a new `firstSnapshot` in the next one.

## Output

Each post is 1 dataset row per run. A row starts with `postId`, `url`, `text`,
`createdAt` & `author`. Then come `capturedAt` & the 6 counts, `viewCount`,
`likeCount`, `retweetCount`, `replyCount`, `quoteCount` & `bookmarkCount`. Then
come `firstSnapshot`, `previousSnapshot`, `changeSincePrevious` &
`changeSinceFirst`. A count of 0 can mean X did not report it.

Examples use sample values. Results reflect live data. A second run's row looks
like this.

```json
{
  "postId": "2102882545427714266",
  "url": "https://x.com/NASA/status/2102882545427714266",
  "text": "Welcome to the Artemis Accords, Croatia",
  "createdAt": "Wed Sep 23 22:07:23 +0000 2026",
  "author": { "id": "11348282", "username": "NASA", "name": "NASA" },
  "capturedAt": "2026-10-28T09:00:00.000Z",
  "viewCount": 1291231,
  "likeCount": 9043,
  "retweetCount": 772,
  "replyCount": 207,
  "quoteCount": 100,
  "bookmarkCount": 661,
  "firstSnapshot": {
    "capturedAt": "2026-10-25T09:00:00.000Z",
    "viewCount": 500000,
    "likeCount": 5000,
    "retweetCount": 500,
    "replyCount": 150,
    "quoteCount": 50,
    "bookmarkCount": 400
  },
  "previousSnapshot": {
    "capturedAt": "2026-10-27T09:00:00.000Z",
    "viewCount": 1200000,
    "likeCount": 9000,
    "retweetCount": 770,
    "replyCount": 205,
    "quoteCount": 99,
    "bookmarkCount": 640
  },
  "changeSincePrevious": {
    "viewCount": 91231,
    "likeCount": 43,
    "retweetCount": 2,
    "replyCount": 2,
    "quoteCount": 1,
    "bookmarkCount": 21
  },
  "changeSinceFirst": {
    "viewCount": 791231,
    "likeCount": 4043,
    "retweetCount": 272,
    "replyCount": 57,
    "quoteCount": 50,
    "bookmarkCount": 261
  },
  "resultType": "snapshot",
  "sourceTarget": "2102882545427714266"
}
```

A row tells 3 cases apart.

| The row holds                    | It means                                      |
| -------------------------------- | --------------------------------------------- |
| `previousSnapshot: null`         | The earlier dataset has no row for this post. |
| `previousSnapshot` with counts   | The row compares with that snapshot.          |
| A `null` count in a change field | The earlier row lacks that count.             |

On a first run, `firstSnapshot` holds the row's own time & counts. Both change
fields are `null` until a later run.

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

- Use a dot for a field inside an object, such as `changeSinceFirst.viewCount`.
- Flatten `changeSincePrevious` to get 1 column per count.
- A wrong field name stops the run before it reads & charges nothing.
- The run ignores a map function or jq filter written for another Actor.

## How much does it cost to track X posts?

Every Apify plan costs $0.00015 per delivered snapshot. Apify bills your
platform usage separately.

For more volume, [pick an Apify plan](https://apify.com/pricing?fpr=xquik) with
more prepaid usage.

- One charge per delivered snapshot row. Diagnostics are free in `diagnostics`.
- No start fee & no fee for reading the earlier dataset.
- The run removes duplicate posts before billing.
- A post X does not have adds no row & no charge.
- A dataset the run cannot read stops the run & charges nothing.
- Apify maximum-total-charge settings cap delivered rows.

## Limits & recovery

Xquik's X (Twitter) Post Tracker reads many posts in 1 run. Delivered rows &
progress survive an Apify restart. The Actor adds no time limit of its own. It
respects any Apify timeout you set.

The run status counts the posts X has no match for. An earlier dataset can hold
up to 100,000 rows. A dataset the run cannot read stops it before any post read.
The status then says to pick an earlier run's dataset. Interrupted runs write a
free `partial` diagnostic. Read `nextAction` before you retry.

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
- [X (Twitter) Monitor](https://apify.com/xquik/x-twitter-monitor) catches every
  new tweet, reply, quote, repost & profile change of accounts, usually in under
  a second after X shows it, plus keyword tweets & follows. Use it when you need
  alerts as soon as X shows a tweet. From $0.0045 per monitor-hour.

## FAQ

Answers to common questions, then where to get help.

### Do I need X cookies, an API key or a login?

No. Xquik's X (Twitter) Post Tracker needs no X cookies, API key, login or
credentials.

### Which dataset do I pick in `previousDatasetId`?

Pick the dataset of an earlier run of this Actor. Its newest row for each post
becomes `previousSnapshot`. Rows of other Actors & diagnostics are skipped.

### Does the first snapshot survive many runs?

Yes. Each row carries `firstSnapshot`. Chain each run on the one before, & the
first snapshot stays the same.

### Can I track a post someone deleted?

No. A post X does not have adds no row & no charge. The run status counts it.

### Is it legal to track X posts?

Xquik's X (Twitter) Post Tracker requests public X fields. Results can contain
personal data. Confirm a lawful purpose & follow applicable privacy rules. Ask
qualified counsel when uncertain.

### Can I use the API, schedules & integrations?

Yes. Use the Apify API or the Xquik REST API. The
[API tab](https://apify.com/xquik/x-twitter-post-tracker/api) has Python,
JavaScript & cURL examples. Apify
[schedules](https://docs.apify.com/platform/schedules) run Xquik's X Post
Tracker on a cron. Agents use
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Use `latest`
unless you need an older build.

### Where do I get help?

Open an issue in the
[Issues tab](https://apify.com/xquik/x-twitter-post-tracker/issues) with the run
ID. Free diagnostics in the key-value store explain runs that need attention.

### Can I get a custom solution?

Yes. Describe what you need in the
[Issues tab](https://apify.com/xquik/x-twitter-post-tracker/issues). Xquik also
offers a dashboard, a REST API, an MCP server & webhooks. Find Xquik's website
on its [Apify profile](https://apify.com/xquik).
