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
most complete X data. Xquik's X Trends Scraper collects real-time trends by
location with rank, volume & query. Most other Apify Actors charge before
filtering or deduplicating. Xquik charges only for delivered, unique,
filter-matching results.

Scrape current Twitter trends across many locations in 1 run. You pay **$0.00015
per delivered row**, & Apify bills platform usage separately. You need no X API
key or login.

> Xquik is an independent third-party service. Not affiliated with X Corp.
> "Twitter" and "X" are trademarks of X Corp.

## Locations & trend data

- Multiple countries, towns or WOEIDs, read concurrently.
- Up to 50 current trends for each location.
- A list of every place X offers trends for, with its WOEID, country & type.
- X place search, with the place ID that X post search takes.
- X hashflags: the custom emoji X shows after some hashtags.
- Rank, topic, query, Tweet volume, search URL, WOEID & source location.
- Location attribution on every row.
- Labels for hashtag rows & for available Tweet volume.
- Duplicate removal for equivalent inputs before billing.
- JSON, CSV, Excel, XML & RSS exports through Apify datasets.
- Runs resume from saved state after an Apify migration.

## How to scrape X trends

1. Open Xquik's X Trends Scraper in Apify Console.
2. Enter location names in `locations` or numeric WOEIDs in `woeids`.
3. Set `maxTrendsPerLocation`, up to 50 trends for each location.
4. Set `maxItems` to cap delivered rows for the whole run, then click Start.
5. Download the dataset as JSON, CSV or Excel, or use the Apify API.

## Input

Use location names, numeric WOEIDs or both:

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
places X offers trends for instead of trends:

```json
{ "listLocations": true, "country": "TR", "maxItems": 100 }
```

`country` takes a name or 2-letter code. `placeType` takes `country`, `town`,
`worldwide` or `unknown`. `nameContains` keeps places whose name holds your
text. Leave all 3 empty to list every place.

To search X places by name, fill `placeSearchTerms`. The run then returns places
instead of trends:

```json
{ "placeSearchTerms": ["New York"], "maxItems": 20 }
```

Each place has the `id` that X post search takes as `place`. X ranks the places,
so their order can differ between runs. X lists up to 20 places for a name, &
fewer for a few names, such as New York. The run keeps only places with the name
you typed, so New Delhi returns no rows & costs nothing.

`maxItems` caps the whole run & fills it term by term, so the first term can use
it all. Set `maxItemsPerTarget` to give each term an even share:

```json
{
  "placeSearchTerms": ["Paris", "Rome"],
  "maxItems": 20,
  "maxItemsPerTarget": 10
}
```

To list X hashflags, turn on `listHashflags`. A hashflag is the custom emoji X
shows after a hashtag for a set time:

```json
{ "listHashflags": true, "hashtagContains": "football" }
```

The run lists the hashflags X shows now. Turn off `activeOnly` to add ended &
upcoming ones. `hashtagContains` keeps hashtags that hold your text.

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
this:

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

With `listLocations`, each place is 1 dataset row. Rows carry `woeid`, `name`,
`country`, `countryCode`, `placeType`, `placeTypeCode`, `parentWoeid`, `url` &
`resultType`. `url` is X's legacy reference for the place & may not open. A
trend location row looks like this:

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
`centroid` holds longitude, then latitude. A place row looks like this:

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
`resultType`. A hashflag row looks like this:

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

## How much does it cost to scrape X trends?

Every Apify plan costs $0.00015 per delivered row. Apify bills your platform
usage separately.

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
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper):
  Scrapes the quote tweets of posts with text, media, counts, authors & 11
  filters. Use it when you study who quoted posts & what they said. From
  $0.00015 per tweet.
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

### Do I need an X API key or login?

No. Xquik's X Trends Scraper needs no X API key, login or credentials.

### Is it legal to scrape X trends?

Xquik's X Trends Scraper requests public X fields. Results can contain personal
data. Confirm a lawful purpose & follow applicable privacy rules. Ask qualified
counsel when uncertain.

### Why did my run return no results?

Open the free `diagnostics` output first. An empty run's status says to check
your targets & filters. `stopCauses` gives each cause a `nextAction` to follow.
A location X offers no trends for returns no rows. Turn on `listLocations` to
see the names X takes.

### Can I use the API, schedules & integrations?

Yes. Choose from 50 public tasks or the Xquik REST API. The
[API tab](https://apify.com/xquik/x-trends-scraper/api) has Python, JavaScript &
cURL examples. Apify [schedules](https://docs.apify.com/platform/schedules) run
Xquik's X Trends Scraper on a cron. Agents use
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
