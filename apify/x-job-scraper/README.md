**English** ·
[Español](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-job-scraper/README.es.md)
·
[Türkçe](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-job-scraper/README.tr.md)
·
[简体中文](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-job-scraper/README.zh-CN.md)
·
[日本語](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-job-scraper/README.ja.md)
·
[한국어](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-job-scraper/README.ko.md)
·
[Deutsch](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-job-scraper/README.de.md)
·
[Français](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-job-scraper/README.fr.md)
·
[Italiano](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-job-scraper/README.it.md)

[![Framer connects Xquik MCP to coding agents](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Watch how Framer uses Xquik scrapers](https://youtu.be/4UOSpoOoC3Y?t=367)
with Claude Code, Codex, Cursor & more, from 6:07.

Xquik is the world's fastest & cheapest X (Twitter) scraper service with the
most complete X data. Xquik's X Jobs Scraper collects job listings posted on X,
with salaries, apply links & full descriptions. Most other Apify Actors charge
before filtering or deduplicating. Xquik charges only for delivered, unique,
filter-matching results.

Search X jobs by keyword, place, workplace type, seniority & company in 1 run.
You pay **$0.00015 per delivered row**, & Apify bills platform usage separately.
You need no X API key or login.

> Xquik is an independent third-party service. Not affiliated with X Corp.
> "Twitter" and "X" are trademarks of X Corp.

## Searches & job data

- Many search terms in 1 run, read at once.
- Filters for place, workplace type, seniority, employment type & company.
- Job URLs & job IDs read as full listings.
- Job locations by name, each with the ID that `locationId` takes.
- Title, salary range, currency, apply link, location & hiring account.
- Full descriptions as plain text & Markdown on every row.
- Search attribution on every row.
- Duplicate removal across searches before billing.
- JSON, CSV, Excel, XML & RSS exports through Apify datasets.
- Runs resume from saved state after an Apify migration.

## What you get

### Complete results

- Each answer holds the fullest data X has for it.

### Accurate rows

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

### Quality checks

- Every field X shows is served, left out on purpose or proven absent.
- Every read is checked live each hour.

## How to scrape X jobs

New to Apify?
[Create a free account](https://console.apify.com/sign-up?fpr=xquik) first. The
free plan needs no credit card & gives $5 to spend each month. At $0.00015 per
job, $5 pays for up to 33,000 jobs before platform usage. Then come back here &
press Try for free.

1. Open Xquik's X Jobs Scraper in Apify Console.
2. Enter job titles or skills in `searchTerms`, or job URLs in `startUrls`.
3. Narrow the search with `location`, `locationType`, `seniority` or `company`.
4. Set `maxItems` to cap delivered rows, then click Start.
5. Download the dataset as JSON, CSV or Excel, or use the Apify API.

`startUrls` takes each URL as a plain string or as a `{ "url": "..." }` object.

```json
{
  "startUrls": [
    "https://x.com/i/jobs/1899202395210649861",
    { "url": "https://x.com/i/jobs/1899202395210649861" }
  ]
}
```

## Input

Search by keyword with filters.

```json
{
  "searchTerms": ["software engineer", "data scientist"],
  "location": "Berlin",
  "locationType": ["remote", "hybrid"],
  "seniority": ["senior", "lead"],
  "maxItems": 200
}
```

`locationType` takes `onsite`, `remote` & `hybrid`. `seniority` takes `intern`,
`entry_level`, `junior`, `mid_level`, `senior`, `lead`, `manager` & `executive`.
`employmentType` takes `full_time`, `full_time_contract`, `part_time` &
`contract_to_hire`. Each filter keeps jobs that match any value you choose.

Read known jobs by URL or ID.

```json
{
  "startUrls": [{ "url": "https://x.com/i/jobs/1899202395210649861" }],
  "jobIds": ["1828221151962898435"]
}
```

`location` takes a place name. `locationId` pins 1 exact place instead, such as
New York City rather than West New York.

Find place IDs by name. A run with `locationSearchTerms` lists places instead of
jobs.

```json
{ "locationSearchTerms": ["New York"], "maxItems": 20 }
```

Small runs that go well skip `run-report` & save Apify usage. Turn on
`alwaysSaveRunRecords` to write it on every run.

## Output

Each job is 1 dataset row with `id`, `title`, `url`, `applyUrl`, `location`, the
salary fields & `account`. Each row also carries `description`,
`descriptionMarkdown`, `locationType`, `employmentType`, `seniorityLevel`,
`jobFunction`, `team`, `postedAt` & `company`. Set `includeDetails` to `false`
for a faster run with the list fields only. Rows from job URLs always carry the
full listing. Missing source fields stay absent. Xquik's X Jobs Scraper invents
no values.

Examples use sample values. Results reflect live data. A job row looks like
this.

```json
{
  "id": "1899202395210649861",
  "title": "Engineer",
  "url": "https://x.com/i/jobs/1899202395210649861",
  "applyUrl": "https://example.com/careers/engineer",
  "location": "United States",
  "locationType": "remote",
  "employmentType": "full_time",
  "seniorityLevel": "lead",
  "formattedSalary": "Starting at $225K",
  "salaryMin": 225000,
  "salaryCurrencyCode": "USD",
  "salaryInterval": "annually",
  "account": { "username": "example", "verified": true },
  "sourceTarget": "software engineer",
  "resultType": "job"
}
```

Each job location is 1 row with the `id` that `locationId` takes.

```json
{
  "id": "1720462281920696805",
  "name": "New York City, NY",
  "sourceTarget": "New York",
  "resultType": "jobLocation"
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

## How much does it cost to scrape X jobs?

Every Apify plan costs $0.00015 per delivered row. Apify bills your platform
usage separately.

For more volume, [pick an Apify plan](https://apify.com/pricing?fpr=xquik) with
more prepaid usage.

- One charge per delivered data row. Diagnostics are free in `diagnostics`.
- No start, search or job URL fee.
- Full descriptions cost nothing extra.
- Deduplication runs before billing.
- Apify maximum-total-charge settings cap delivered rows.

## Limits & recovery

Xquik's X Jobs Scraper reads many searches & job URLs in 1 run. Delivered rows &
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
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper) scrapes real-time
  trends by location with rank, volume, query & WOEID. Use it when you track
  what is trending where. From $0.00015 per trend.
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

No. Xquik's X Jobs Scraper needs no X API key, login or credentials.

### Is it legal to scrape X jobs?

Xquik's X Jobs Scraper requests public X fields. Results can contain personal
data. Confirm a lawful purpose & follow applicable privacy rules. Ask qualified
counsel when uncertain.

### Why did my run return no results?

Read the run status first. An empty run's status says to check your search terms
& filters. The free `diagnostics` output appears when something needs attention.
Its `stopCauses` gives each cause a `nextAction` to follow. A filter value the
Actor does not know stops the run before any charge & names the values to use.

### Can I use the API, schedules & integrations?

Yes. Use the Apify API or the Xquik REST API. The
[API tab](https://apify.com/xquik/x-job-scraper/api) has Python, JavaScript &
cURL examples. Apify [schedules](https://docs.apify.com/platform/schedules) run
Xquik's X Jobs Scraper on a cron. Agents use
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Use `latest`
unless you need an older build.

### Where do I get help?

Open an issue in the [Issues tab](https://apify.com/xquik/x-job-scraper/issues)
with the run ID. Free diagnostics in the key-value store explain runs that need
attention. A run that gets no row back says why in its status.

### Can I get a custom solution?

Yes. Describe what you need in the
[Issues tab](https://apify.com/xquik/x-job-scraper/issues). Xquik also offers a
dashboard, a REST API, an MCP server & webhooks. Find Xquik's website on its
[Apify profile](https://apify.com/xquik).
