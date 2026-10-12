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
most complete X data. Xquik's X Email Scraper gets the emails accounts publish
on their own X profiles, with no X cookies or login. Most other Apify Actors
charge before filtering or deduplicating. Xquik charges only for delivered,
unique, filter-matching results.

Paste usernames, scan an account's followers or search X users, & get every
profile that publishes an email, with the email first. A profile without an
email is not delivered & costs nothing. You pay **$0.00015 per delivered row**,
& Apify bills platform usage separately.

> Xquik is an independent third-party service. Not affiliated with X Corp.
> "Twitter" and "X" are trademarks of X Corp.

## Contact details in every row

- The first email the profile publishes, lowercased.
- That email's domain & the profile field that holds it: bio, name or location.
- Every email of the profile, also when it is spelled "name [at] site [dot]
  com".
- Phone numbers the profile publishes, such as a WhatsApp link.
- The profile's website & bio links, each with its network, such as LinkedIn,
  GitHub or Telegram.
- The full public profile: name, bio, counts, verification, dates & images.
- 3 sources in 1 run: accounts, their followers or following, & user searches.
- Filters by email domain, business email, followers, account age, bio &
  location.
- Usernames with or without @, x.com & twitter.com URLs & numeric user IDs.
- Duplicate removal before billing.
- JSON, CSV, Excel, XML & RSS exports through Apify datasets.
- Runs resume from saved state after an Apify migration.

## How to get emails from X profiles

1. Open Xquik's X Email Scraper in Apify Console.
2. Paste usernames, profile URLs or user IDs into `twitterHandles`, or add
   `searchTerms`.
3. Turn on `expandFollowers` to scan each account's followers instead.
4. Set `maxItems` to cap delivered rows, then click Start.
5. Download the dataset as JSON, CSV or Excel, or use the Apify API.

You enter no X cookies, login or API key at any step.

## Input

`twitterHandles` takes every form of an account, in any mix. The run checks each
account & delivers the ones that publish an email:

```json
{
  "twitterHandles": ["sample_user", "@sample_org", "https://x.com/sample_shop"],
  "maxItems": 1000
}
```

`startUrls` & `userIds` take the same forms. With `expandFollowers`, the run
reads the followers of each account instead & keeps the ones that publish an
email. `expansionRelation` picks `Followers` or `Following`:

```json
{
  "twitterHandles": ["sample_org"],
  "expandFollowers": true,
  "expansionRelation": "Followers",
  "maxScan": 10000,
  "emailDomains": "example.com, example.org"
}
```

`searchTerms` searches X users by name, username or bio words. Each term is 1
search:

```json
{
  "searchTerms": ["booking", "founder"],
  "businessEmailOnly": true,
  "minFollowers": 1000
}
```

About 1 follower in 400 publishes an email, so a followers scan reads far more
profiles than it delivers. `maxScan` caps the profiles the run reads of each
list or search. It starts at 10,000. The run status says how many rows it read
when it stops a list there, & you raise `maxScan` to read further. Scanned
profiles are free.

`emailDomains` keeps profiles with an email at a listed domain or a subdomain of
one. `businessEmailOnly` keeps profiles with an email outside free webmail, such
as Gmail. `minFollowers`, `maxFollowers`, `minAccountAgeDays`, `verifiedOnly`,
`hasWebsite`, `hasLocation`, `bioContains` & `locationContains` narrow the
profiles further. Every filter applies before billing.

`searchQueries` & `keyword` work as other names for `searchTerms`, &
`maxFollowersPerHandle` as another name for `maxScan`. An account the input
names twice is delivered & charged once. Small runs that go well skip
`run-report` & save Apify usage. Turn on `alwaysSaveRunRecords` to write it on
every run.

### Migrate from another email Actor

Paste the input you already use. Xquik's X Email Scraper reads these field names
of other Actors. Each line names their fields, then the field they map to:

- `requireEmail`: no field needed. Every delivered profile publishes an email.
- `requireWebsite`: `hasWebsite`. It keeps a profile with any link in its
  website field, & the run status says so.
- `bioKeywords`: `bioContains`. Any 1 of its terms may match.
- `locationKeywords` with 1 value: `locationContains`. More values stop the run
  before any read or charge.
- `emailDomains` as a list: `emailDomains`
- `outputEmail`, `resolveShortLinks`: no field needed. Every row carries its
  emails & X's full links.
- `findEmails`, `extractEmails`: no field. Rows carry the emails a profile
  publishes on X. The run status says the Actor reads no linked site.
- `validateEmails`: no field. The run status says emails come as published,
  since the Actor checks no mailbox.

When you set one of these names & its canonical field, the canonical value wins.
The run log names the field that lost.

## Output

Each profile that publishes an email is 1 dataset row. The contact details come
first: `email`, `emailDomain`, `emailSource` & `contactInfo`. The full public
profile follows, with `id`, `username`, `name`, `description`, `followers`,
`following`, `verified`, `verifiedType`, `createdAt`, `profilePicture` & more.
Missing source fields stay absent. Xquik's X Email Scraper invents no values.

Examples use sample values. Results reflect live data. A row looks like this:

```json
{
  "email": "press@example.com",
  "emailDomain": "example.com",
  "emailSource": "bio",
  "contactInfo": {
    "emails": [
      {
        "value": "press@example.com",
        "domain": "example.com",
        "source": "bio"
      },
      {
        "value": "jane@example.org",
        "domain": "example.org",
        "source": "bio",
        "writtenAs": "jane [at] example [dot] org"
      }
    ],
    "phones": [
      {
        "value": "+14155550123",
        "source": "bio",
        "writtenAs": "+1 (415) 555-0123"
      }
    ],
    "links": [
      { "url": "https://example.com", "network": "website", "source": "url" }
    ]
  },
  "id": "1234567890",
  "username": "sample_user",
  "name": "Sample User",
  "description": "Press: press@example.com",
  "followers": 1200,
  "verified": true,
  "createdAt": "2017-03-21T20:50:14.000Z",
  "resultType": "profile",
  "sourceTarget": "sample_user"
}
```

`resultType` is `profile` for an account or a search result, `profileFollower`
for a follower & `profileFollowing` for an account someone follows.
`sourceTarget` names the account or the search term the row came from.

## What the email means

An email is an address the account wrote on its own profile: in its bio, its
name or its location. The Actor returns it as the account published it &
lowercases it. Nothing checks that the address receives mail, & nothing reads
the website a profile links to. `writtenAs` holds the account's own spelling
when it differs, as in "jane [at] example [dot] org".

A phone number appears only when the profile writes it in a form that can be
nothing else, such as a WhatsApp link or a number that starts with +. A year, a
count or a price is never read as a phone number.

## How much does it cost to get emails from X profiles?

Every Apify plan costs $0.00015 per delivered row. Apify bills your platform
usage separately.

- One charge per delivered data row. Diagnostics are free in `diagnostics`.
- No start or lookup fee.
- A profile without an email adds no row & no charge.
- An account X does not have adds no row & no charge.
- Deduplication runs before billing.
- Apify maximum-total-charge settings cap delivered rows.

A followers scan runs for a while to find few rows, since it reads about 350
profiles a second & keeps about 1 in 400. `maxScan` bounds that time.

## Limits & recovery

Xquik's X Email Scraper reads many accounts, lists & searches in 1 run.
Delivered rows & progress survive an Apify restart. The Actor adds no time limit
of its own. It respects any Apify timeout you set.

The run status names the accounts X has no match for & says to check the handle,
ID or URL. It also names suspended accounts. Interrupted extraction writes a
free `partial` diagnostic. Available results stay intact. Read
`availableResults`, `failedTargets`, `retryable` & `nextAction` before you
retry. A successful Actor exit confirms delivery, not complete extraction.

The run status names every cause of an early stop. `stopCauses` lists each cause
with its own `message`, `retryable` & `nextAction`. The causes are `scan_limit`,
`target_not_found`, `target_suspended`, `target_failed` & `deadline_reached`. A
missing or suspended target or a list stopped at `maxScan` joins the list only
when another cause stopped the run. The run is `retryable` when any cause is.

A list the run stops at `maxScan` ends no run early. A run with rows finishes, &
its status says how many rows it read & to raise `maxScan`. It writes no
diagnostic for that, which saves you a record write. A run report counts such
lists in `scanLimitedTargets`.

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

No. Xquik's X Email Scraper needs no X cookies, API key, login or credentials.
Every read runs on Xquik's infrastructure.

### Where do the emails come from?

From the profile itself: the bio, the name & the location the account wrote. The
Actor reads no post & no linked website, so every email is one the account
published on its own X profile.

### Does the Actor check that an email works?

No. It returns each address as the account published it. Nothing checks that the
address receives mail.

### Why did a followers scan deliver few rows?

About 1 follower in 400 publishes an email. The run status says how many rows a
list was read for. Raise `maxScan` to read further into a list, or use
`searchTerms` with words such as booking, which keep far more rows.

### How many profiles can I check in 1 run?

As many as you paste. A run can return 100,000 rows & more. Raise `maxItems`
above the 1,000 the form starts with for a larger list.

### Is it legal to collect emails from X profiles?

Xquik's X Email Scraper requests public X fields. Results contain personal data.
Confirm a lawful purpose, follow the privacy & email rules that apply to you &
honor opt-outs. Ask qualified counsel when uncertain.

### Why did my run return no results?

Read the run status first. An empty run's status says to check the handle, ID or
URL of each account X has no match for. A profile without an email adds no row.
The free `diagnostics` output appears when something needs attention. Its
`stopCauses` gives each cause a `nextAction` to follow.

### Can I use the API, schedules & integrations?

Yes. Use the Apify API or the Xquik REST API. The
[API tab](https://apify.com/xquik/x-email-scraper/api) has Python, JavaScript &
cURL examples. Apify [schedules](https://docs.apify.com/platform/schedules) run
Xquik's X Email Scraper on a cron. Agents use
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
