**English** ·
[Español](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-trends-scraper/README.es.md)
·
[Türkçe](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-trends-scraper/README.tr.md)
·
[简体中文](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-trends-scraper/README.zh-CN.md)
·
[日本語](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-trends-scraper/README.ja.md)
·
[한국어](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-trends-scraper/README.ko.md)
·
[Deutsch](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-trends-scraper/README.de.md)
·
[Français](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-trends-scraper/README.fr.md)
·
[Italiano](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-trends-scraper/README.it.md)

[![Framer connects Xquik MCP to coding agents](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Watch how Framer uses Xquik scrapers](https://youtu.be/4UOSpoOoC3Y?t=367)
with Claude Code, Codex, Cursor & more, from 6:07.

Xquik is the world's fastest & cheapest X (Twitter) scraper service with the
most complete X data. Xquik's X Trends Scraper collects real-time trends by
location with rank, volume & query. Most other Apify Actors charge before
filtering or deduplicating. Xquik charges only for delivered, unique,
filter-matching results.

Scrape current Twitter trends across many locations in 1 run. Or read past
trends from Xquik's Twitter trends archive, which starts 2026-10-13 02:20 UTC.
You pay **$0.00015 per delivered row**, & Apify bills platform usage separately.
You need no X API key or login.

> Xquik is an independent third-party service. Not affiliated with X Corp.
> "Twitter" and "X" are trademarks of X Corp.

## Why use X Trends Scraper?

- **Trend history by range.** Set `from`, `to` & `every` to get 1 trend list per
  step.
- **Yesterday's trends, every day.** With `at` set to `24h`, a daily schedule
  reads yesterday's trends.
- **WOEIDs, place IDs & hashflags.** Turn on `listLocations` or `listHashflags`,
  or fill `placeSearchTerms`.
- **Exact capture times.** Past rows carry `capturedAt`, when X showed the list.
- **Ready-to-use exports.** Keep, rename, flatten or join fields, then export
  JSON, CSV, Excel, XML or RSS.

### Complete results

- Each answer holds the fullest data X has for it.

### Accurate rows

- Rows hold public data only.

### Fresh data

- Read trends for any past moment since 2026-10-13.
- Reads keep working when X ships changes.

### Speed

- One slow page doesn't hold up your run.
- Reads finish the moment their rows arrive.
- Stalled Actor calls recover on their own.

### Fair billing

- Bad input costs nothing & tells you what to fix.
- Actors charge only for delivered, unique, matching rows.
- A restarted run never charges twice.
- Runs stay within your spend cap & still write their diagnostics.

### Reliability

- A one-off error doesn't fail your run.
- A deadline returns the rows already found, with diagnostics.
- Actors ride out short Xquik outages.
- Actor runs survive restarts without repeats.
- One bad row doesn't sink a batch.
- Stopped runs keep their rows & their report.
- A run that can't start still explains itself.
- Support can see exactly what a request or run returned.

### Built for agents

- Actors accept input written for other Actors.
- Every run says why it ended & whether to retry.

### Rich data

- Trends by place name, country or region ID, promoted trends marked.

### Quality checks

- Every field X shows is served, left out on purpose or proven absent.
- Xquik tests every read live against X.

## What data can X Trends Scraper extract?

- Up to 50 current trends for each location.
- A list of every place X offers trends for, with its WOEID, country & type.
- X place search, with the place ID that X post search takes.
- X hashflags, the custom emoji X shows after some hashtags.
- Rank, topic, query, Tweet volume, search URL, WOEID & source location.
- Location attribution on every row.
- Flags that mark hashtag rows & rows that have a Tweet volume.

## How to scrape X trends

New to Apify?
[Create a free account](https://console.apify.com/sign-up?fpr=xquik) first. The
free plan needs no credit card & gives $5 to spend each month. At $0.00015 per
trend, $5 pays for up to 33,000 trends before platform usage. Then come back
here & press Try for free.

1. Open Xquik's X Trends Scraper in Apify Console.
2. Enter location names in `locations` or numeric WOEIDs in `woeids`.
3. Set `maxTrendsPerLocation`, up to 50 trends for each location.
4. Set `maxItems` to cap delivered rows for the whole run, then click Start.
5. Download the dataset as JSON, CSV or Excel, or use the Apify API.

## Input

Use location names, numeric WOEIDs or both.

```json
{
  "locations": ["Worldwide", "United States", "Turkey"],
  "maxTrendsPerLocation": 50,
  "maxItems": 150
}
```

`locations` takes any country or town X offers trends for, such as Worldwide,
United States, Japan or London. 2-letter country codes work too. A name X offers
no trends for returns no rows & costs nothing. `woeids` takes numeric WOEIDs.

To see every name & WOEID, turn on `listLocations`. The run then lists the
places X offers trends for instead of trends.

```json
{ "listLocations": true, "country": "TR", "maxItems": 100 }
```

`country` takes a name or 2-letter code. `placeType` takes `country`, `town`,
`worldwide` or `unknown`. `nameContains` keeps places whose name holds your
text. Leave all 3 empty to list every place.

To search X places by name, fill `placeSearchTerms`. The run then returns places
instead of trends.

```json
{ "placeSearchTerms": ["New York"], "maxItems": 20 }
```

Each place has the `id` that X post search takes as `place`. X ranks the places,
so their order can differ between runs. A name returns up to 20 places with that
name. A name with no such place returns no rows & costs nothing.

`maxItems` caps the whole run & fills it term by term, so the first term can use
it all. Set `maxItemsPerTarget` to give each term an even share.

```json
{
  "placeSearchTerms": ["Paris", "Rome"],
  "maxItems": 20,
  "maxItemsPerTarget": 10
}
```

To list X hashflags, turn on `listHashflags`. A hashflag is the custom emoji X
shows after a hashtag for a set time.

```json
{ "listHashflags": true, "hashtagContains": "football" }
```

The run lists the hashflags X shows now. Turn off `activeOnly` to add ended &
upcoming ones. `hashtagContains` keeps hashtags that hold your text.

To see what was trending on Twitter yesterday or at any past time, fill `at`.
The run then reads the stored list nearest that time for each location.

```json
{ "locations": ["Turkey"], "at": "2026-10-13T14:00:00Z" }
```

`at` takes a date such as 2026-10-13, a time such as 2026-10-13T14:00:00Z or
Unix seconds. A time without a zone is UTC. Xquik stores 12 lists an hour for
each location & keeps each for 25 months. The Twitter trends history starts
2026-10-13 02:20 UTC. A time over 24 hours from every stored list returns no
rows & costs nothing.

`at` also takes a span back from the run, as a number & `s`, `m`, `h` or `d`.
With `24h`, a daily schedule reads yesterday's trends on every run.

```json
{ "locations": ["Turkey"], "at": "24h" }
```

For a range, fill `from` & `to`. The run returns 1 stored list per step of
`every`, such as `15m`, `1h` or `1d`.

```json
{
  "locations": ["Turkey"],
  "from": "2026-10-13",
  "to": "2026-10-14",
  "every": "1h",
  "maxItems": 1200
}
```

Without `to`, the range ends now. Without `every`, the run returns 1 list an
hour. A step with no stored list returns no rows. `from` & `to` take spans too,
so `from` set to `24h` reads the last 24 hours. `at` wins over `from` & `to`.

A run reads 1 kind of row. `listLocations` wins over `listHashflags`, which wins
over `placeSearchTerms`. Without any of them, the run reads trends.

Small runs that go well skip `run-report` & save Apify usage. Turn on
`alwaysSaveRunRecords` to write it on every run.

## Output

Each trend is 1 dataset row. Rows carry `name`, `rank`, `tweetVolume`, `query`,
`url`, `woeid`, `sourceTarget` & `resultType`. `sourceTarget` is the location as
you wrote it. Missing source fields stay absent. Xquik's X Trends Scraper
invents no values.

Examples use sample values. Results reflect live data. A trend row looks like
this.

```json
{
  "name": "#SampleTrend",
  "rank": 1,
  "tweetVolume": 12000,
  "isHashtag": true,
  "woeid": 1,
  "sourceTarget": "Worldwide"
}
```

Rows of `at` or a range also carry `capturedAt`, the time Xquik read their list
from X. Rows of `at` carry `requestedAt` too, the time you asked for. Xquik
estimates neither.

With `listLocations`, each place is 1 dataset row. Rows carry `woeid`, `name`,
`country`, `countryCode`, `placeType`, `placeTypeCode`, `parentWoeid`, `url` &
`resultType`. `url` is X's legacy reference for the place & may not open. A
trend location row looks like this.

```json
{
  "woeid": 2344116,
  "name": "Istanbul",
  "country": "Turkey",
  "countryCode": "TR",
  "placeType": "Town",
  "placeTypeCode": 7,
  "parentWoeid": 23424969,
  "resultType": "trendLocation"
}
```

With `placeSearchTerms`, each place is 1 dataset row. Rows carry `id`, `name`,
`fullName`, `country`, `countryCode`, `placeType`, `url`, `centroid`,
`boundingBox`, `attributes`, `containedWithin`, `sourceTarget` & `resultType`.
`centroid` holds longitude, then latitude. A place row looks like this.

```json
{
  "id": "0123456789abcdef",
  "name": "Sample City",
  "fullName": "Sample City, Sample Country",
  "country": "Sample Country",
  "countryCode": "US",
  "placeType": "city",
  "centroid": [-73.97, 40.78],
  "sourceTarget": "New York",
  "resultType": "place"
}
```

With `listHashflags`, each hashflag is 1 dataset row. Rows carry `hashtag`,
`assetUrl`, `startsAt`, `endsAt`, `isHashfettiEnabled`, `animations` &
`resultType`. A hashflag row looks like this.

```json
{
  "hashtag": "SampleHashtag",
  "assetUrl": "https://abs.twimg.com/hashflags/Sample/Sample.png",
  "startsAt": "2026-10-02T10:00:00.000Z",
  "endsAt": "2027-01-03T14:59:00.000Z",
  "isHashfettiEnabled": false,
  "animations": [],
  "resultType": "hashflag"
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

## How much does it cost to scrape X trends?

Every Apify plan costs $0.00015 per delivered row. Apify bills your platform
usage separately.

For more volume, [pick an Apify plan](https://apify.com/pricing?fpr=xquik) with
more prepaid usage.

- One charge per delivered data row. Diagnostics are free in `diagnostics`.
- A trend location, place or hashflag row costs the same as a trend row.
- No start, query or location fee.
- Deduplication runs before billing.
- Apify maximum-total-charge settings cap delivered rows.

## Limits & recovery

Xquik's X Trends Scraper reads many locations in 1 run. Delivered rows &
progress survive an Apify restart. The Actor adds no time limit of its own. It
respects any Apify timeout you set.

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

### Do I need an X API key or login?

No. Xquik's X Trends Scraper needs no X API key, login or credentials.

### Is it legal to scrape X trends?

Xquik's X Trends Scraper requests public X fields. Results can contain personal
data. Confirm a lawful purpose & follow applicable privacy rules. Ask qualified
counsel when uncertain.

### Why did my run return no results?

Read the run status first. An empty run's status says to check your targets &
filters. The free `diagnostics` output appears when something needs attention.
Its `stopCauses` gives each cause a `nextAction` to follow. A location X offers
no trends for returns no rows. Turn on `listLocations` to see the names X takes.

### Can I scrape historical Twitter trends?

Yes, since 2026-10-13 02:20 UTC. Fill `at` for 1 past time, or `from` & `to` for
a range. On a schedule, fill a span such as `24h`. Each row has `capturedAt`,
the time of its stored list.

### Can I use the API, schedules & integrations?

Yes. Choose from 50 public tasks or the Xquik REST API. The
[API tab](https://apify.com/xquik/x-trends-scraper/api) has Python, JavaScript &
cURL examples. Apify [schedules](https://docs.apify.com/platform/schedules) run
Xquik's X Trends Scraper on a cron. Agents use
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Use `latest`
unless you need an older build.

### Where do I get help?

Open an issue in the
[Issues tab](https://apify.com/xquik/x-trends-scraper/issues) with the run ID.
Free diagnostics in the key-value store explain runs that need attention. A run
that gets no row back says why in its status.

### Can I get a custom solution?

Yes. Describe what you need in the
[Issues tab](https://apify.com/xquik/x-trends-scraper/issues). Xquik also offers
a dashboard, a REST API, an MCP server & webhooks. Find Xquik's website on its
[Apify profile](https://apify.com/xquik).
