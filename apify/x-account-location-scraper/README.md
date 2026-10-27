**English** ·
[Español](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-account-location-scraper/README.es.md)
·
[Türkçe](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-account-location-scraper/README.tr.md)
·
[简体中文](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-account-location-scraper/README.zh-CN.md)
·
[日本語](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-account-location-scraper/README.ja.md)
·
[한국어](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-account-location-scraper/README.ko.md)
·
[Deutsch](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-account-location-scraper/README.de.md)
·
[Français](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-account-location-scraper/README.fr.md)
·
[Italiano](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-account-location-scraper/README.it.md)

[![Framer connects Xquik MCP to coding agents](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Watch how Framer uses Xquik scrapers](https://youtu.be/4UOSpoOoC3Y?t=367)
with Claude Code, Codex, Cursor & more, from 6:07.

Xquik is the world's fastest & cheapest X (Twitter) scraper service with the
most complete X data. Xquik's X Account Location Scraper checks where X accounts
are based, with no X cookies or login. Most other Apify Actors charge before
filtering or deduplicating. Xquik charges only for delivered, unique,
filter-matching results.

Paste usernames, profile URLs or user IDs & get X's "Account based in" label for
every account in 1 run. The label is X's best-effort country or region for an
account. It is not nationality, residence or exact location. You pay **$0.00015
per delivered row**, & Apify bills platform usage separately.

> Xquik is an independent third-party service. Not affiliated with X Corp.
> "Twitter" and "X" are trademarks of X Corp.

## Account details in every row

- X's "Account based in" label, as a country or a region.
- The 2-letter ISO code of that country.
- Whether X notes that the label may be inaccurate.
- How the account first connected to X, such as Web or an app store country.
- The platform & the country code in that connection.
- How often the account changed its username, & when it last did.
- The organization X shows the account is affiliated with.
- The account's age in days & a link to its profile.
- The full public profile, with name, bio, counts, verification, dates & images.
- Account location labels fill in on more rows, at no extra charge.
- Many accounts in 1 run, read at once & delivered in input order.
- Usernames with or without @, `x.com` & `twitter.com` URLs & numeric user IDs.
- Duplicate removal before billing.
- JSON, CSV, Excel, XML & RSS exports through Apify datasets.
- Runs resume from saved state after an Apify migration.

## What you get

### Complete results

- Account location labels fill in on more rows, at no extra charge.
- Each answer holds the fullest data X has for it.

### Accurate rows

- Every ID in a row stays exact.
- Verified badges match what `x.com` shows.
- Rows hold public data only.
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
- Every run says why it ended & whether to retry.

### Rich data

- Account location comes with country code, accuracy note & username history.

### Quality checks

- Every field X shows is served, left out on purpose or proven absent.
- Every read is checked live each hour.

## How to check where X accounts are based

New to Apify?
[Create a free account](https://console.apify.com/sign-up?fpr=xquik) first. The
free plan needs no credit card & gives $5 to spend each month. At $0.00015 per
account, $5 pays for up to 33,000 accounts before platform usage. Then come back
here & press Try for free.

1. Open Xquik's X Account Location Scraper in Apify Console.
2. Paste usernames, profile URLs or user IDs into `twitterHandles`.
3. Set `maxItems` to cap delivered rows, then click Start.
4. Download the dataset as JSON, CSV or Excel, or use the Apify API.

You enter no X cookies, login or API key at any step.

## Input

`twitterHandles` takes every form of an account, in any mix.

```json
{
  "twitterHandles": [
    "BBCWorld",
    "@OpenAI",
    "https://x.com/NASA",
    "https://twitter.com/github",
    "11348282"
  ],
  "maxItems": 1000
}
```

`startUrls` & `userIds` take the same forms. `startUrls` takes each URL as a
plain string or as a `{ "url": "..." }` object.

```json
{
  "startUrls": ["https://x.com/nasa", { "url": "https://x.com/OpenAI" }],
  "userIds": ["742143"]
}
```

A user ID stays the same when an account changes its username, so use `userIds`
for lists you keep. `userNames` works as another name for `twitterHandles`.

An account the input names twice is delivered & charged once, also when 1 entry
is its handle & the other its user ID. `maxItems` keeps the first accounts of
the input. Small runs that go well skip `run-report` & save Apify usage. Turn on
`alwaysSaveRunRecords` to write it on every run.

## Output

Each account is 1 dataset row. What X's About page shows comes first, in
`accountBasedIn`, `accountBasedInUnavailable`, `accountBasedInAccurate`,
`affiliateUsername`, `connectedVia`, `connectedViaAccurate` & `usernameChanges`.
The full public profile follows, with `id`, `username`, `name`, `description`,
`followers`, `following`, `verified`, `verifiedType`, `createdAt`,
`profilePicture` & more. 5 fields the Actor works out from the profile come
last. They are `accountBasedInCountryCode`, `connectedViaPlatform`,
`connectedViaCountryCode`, `accountAgeDays` & `profileUrl`. Missing source
fields stay absent, & a code the Actor cannot match stays out. Xquik's X Account
Location Scraper invents no values.

Examples use sample values. Results reflect live data. A row looks like this.

```json
{
  "accountBasedIn": {
    "value": "United Kingdom",
    "level": "country",
    "observedAt": "2026-10-12T09:00:00.000Z"
  },
  "accountBasedInAccurate": true,
  "affiliateUsername": "sample_org",
  "connectedVia": "Web",
  "usernameChanges": {
    "count": 1,
    "lastChangedAt": "2021-03-04T10:00:00.000Z"
  },
  "id": "1234567890",
  "username": "sample_user",
  "name": "Sample User",
  "followers": 1200,
  "verified": true,
  "createdAt": "2017-03-21T20:50:14.000Z",
  "accountBasedInCountryCode": "GB",
  "connectedViaPlatform": "web",
  "accountAgeDays": 3491,
  "profileUrl": "https://x.com/sample_user",
  "resultType": "profile",
  "sourceTarget": "sample_user"
}
```

A row tells 3 cases apart.

| The row holds                     | It means                            | What to do                   |
| --------------------------------- | ----------------------------------- | ---------------------------- |
| `accountBasedIn` with a `value`   | X shows this label for the account. | Use it.                      |
| `accountBasedIn: null`            | X shows no label for this account.  | Nothing. X has none to show. |
| `accountBasedInUnavailable: true` | X withheld the label for this run.  | Run the account again later. |

A label X withholds is unknown, not absent. Such a row carries the public
profile without the About fields, & the run status counts these accounts. Each
of the 3 cases is 1 delivered row.

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

- Use a dot for a field inside an object, such as `accountBasedIn.value`. Case &
  underscores do not matter.
- Every row keeps its `id`.
- With `fields`, a field a row lacks arrives as `null`. Every row then has the
  same columns.
- A wrong field name stops the run before it reads & charges nothing.
- If names cannot be checked, the run reads on & lists unseen names last.
- The run ignores a map function or jq filter written for another Actor.

## What the label means

X infers `accountBasedIn` from aggregated account-access IPs. The label does not
state nationality, residence, identity, signup, post or exact location. `level`
says whether X shows a country or a wider region. `observedAt` records retrieval
time. `accountBasedInAccurate` is `false` when X notes that the label may be
inaccurate. `connectedVia` says how the account first connected to X, &
`connectedViaAccurate` is `false` when X notes that its country may be
inaccurate. `connectedViaPlatform` is `web`, `ios` or `android`. A region has no
country code. A country always gets the same code. `location` is the text the
account owner wrote on the profile, which is a different field.

## How much does it cost to check X account locations?

Every Apify plan costs $0.00015 per delivered row. Apify bills your platform
usage separately.

For more volume, [pick an Apify plan](https://apify.com/pricing?fpr=xquik) with
more prepaid usage.

- One charge per delivered data row. Diagnostics are free in `diagnostics`.
- No start or lookup fee.
- An account X does not have adds no row & no charge.
- More rows get their location label, at no extra charge.
- Deduplication runs before billing.
- Apify maximum-total-charge settings cap delivered rows.

## Limits & recovery

Xquik's X Account Location Scraper reads many accounts in 1 run. Delivered rows
& progress survive an Apify restart. The Actor adds no time limit of its own. It
respects any Apify timeout you set.

The run status names the accounts X has no match for & says to check the handle,
ID or URL. It also names suspended accounts. Interrupted extraction writes a
free `partial` diagnostic. Available results stay intact. Read
`availableResults`, `failedTargets`, `retryable` & `nextAction` before you
retry. A successful Actor exit confirms delivery, not complete extraction.

The run status names every cause of an early stop. `stopCauses` lists each cause
with its own `message`, `retryable` & `nextAction`. The causes are
`target_not_found`, `target_suspended`, `target_failed` & `deadline_reached`. A
missing or suspended target joins the list only when another cause stopped the
run. The run is `retryable` when any cause is.

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

### Do I need X cookies, an API key or a login?

No. Xquik's X Account Location Scraper needs no X cookies, API key, login or
credentials. Every read runs on Xquik's infrastructure.

### Does the label show where the account owner lives?

No. It is X's best-effort label for the account. It does not state nationality,
residence or exact location, & X itself marks some labels as possibly
inaccurate.

### Why does a row say `accountBasedInUnavailable`?

X withheld the label during this run. The label is unknown, not absent. Run the
account again later to get it. `accountBasedIn: null` is different. X shows no
label for that account.

### How many accounts can I check in 1 run?

As many as you paste. A run can return 100,000 rows & more. Raise `maxItems`
above the 1,000 the form starts with for a larger list.

### Is it legal to check where X accounts are based?

Xquik's X Account Location Scraper requests public X fields. Results can contain
personal data. Confirm a lawful purpose & follow applicable privacy rules. Ask
qualified counsel when uncertain.

### Why did my run return no results?

Read the run status first. An empty run's status says to check the handle, ID or
URL of each account X has no match for. The free `diagnostics` output appears
when something needs attention. Its `stopCauses` gives each cause a `nextAction`
to follow.

### Can I use the API, schedules & integrations?

Yes. Use the Apify API or the Xquik REST API. The
[API tab](https://apify.com/xquik/x-account-location-scraper/api) has Python,
JavaScript & cURL examples. Apify
[schedules](https://docs.apify.com/platform/schedules) run Xquik's X Account
Location Scraper on a cron. Agents use
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Use `latest`
unless you need an older build.

### Where do I get help?

Open an issue in the
[Issues tab](https://apify.com/xquik/x-account-location-scraper/issues) with the
run ID. Free diagnostics in the key-value store explain runs that need
attention. A run that gets no row back says why in its status.

### Can I get a custom solution?

Yes. Describe what you need in the
[Issues tab](https://apify.com/xquik/x-account-location-scraper/issues). Xquik
also offers a dashboard, a REST API, an MCP server & webhooks. Find Xquik's
website on its [Apify profile](https://apify.com/xquik).
