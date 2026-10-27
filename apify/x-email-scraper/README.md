**English** ·
[Español](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-email-scraper/README.es.md)
·
[Türkçe](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-email-scraper/README.tr.md)
·
[简体中文](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-email-scraper/README.zh-CN.md)
·
[日本語](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-email-scraper/README.ja.md)
·
[한국어](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-email-scraper/README.ko.md)
·
[Deutsch](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-email-scraper/README.de.md)
·
[Français](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-email-scraper/README.fr.md)
·
[Italiano](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-email-scraper/README.it.md)

[![Framer connects Xquik MCP to coding agents](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Watch how Framer uses Xquik scrapers](https://youtu.be/4UOSpoOoC3Y?t=367)
with Claude Code, Codex, Cursor & more, from 6:07.

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
- That email's domain & the profile field that holds it, which is the bio, name
  or location.
- Every email of the profile, also when it is spelled "name [at] site [dot]
  com".
- Phone numbers the profile publishes, such as a WhatsApp link.
- The profile's website & bio links, each with its network, such as LinkedIn,
  GitHub or Telegram.
- The full public profile, with name, bio, counts, verification, dates & images.
- 3 sources in 1 run, which are accounts, their followers or following, & user
  searches.
- Filters by email domain, business email, followers, account age, bio &
  location.
- Usernames with or without @, `x.com` & `twitter.com` URLs & numeric user IDs.
- Duplicate removal before billing.
- JSON, CSV, Excel, XML & RSS exports through Apify datasets.
- Runs resume from saved state after an Apify migration.

## What you get

### Complete results

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

- Short links resolve, & list rows can carry full profiles.
- Profiles yield emails, phones & links tagged by network.

### Quality checks

- Every field X shows is served, left out on purpose or proven absent.
- Every read is checked live each hour.

## How to get emails from X profiles

New to Apify?
[Create a free account](https://console.apify.com/sign-up?fpr=xquik) first. The
free plan needs no credit card & gives $5 to spend each month. At $0.00015 per
profile, $5 pays for up to 33,000 profiles before platform usage. Then come back
here & press Try for free.

1. Open Xquik's X Email Scraper in Apify Console.
2. Paste usernames, profile URLs or user IDs into `twitterHandles`, or add
   `searchTerms`.
3. Turn on `expandFollowers` to scan each account's followers instead.
4. Set `maxItems` to cap delivered rows, then click Start.
5. Download the dataset as JSON, CSV or Excel, or use the Apify API.

You enter no X cookies, login or API key at any step.

## Input

`twitterHandles` takes every form of an account, in any mix. The run checks each
account & delivers the ones that publish an email.

```json
{
  "twitterHandles": ["sample_user", "@sample_org", "https://x.com/sample_shop"],
  "maxItems": 1000
}
```

`startUrls` & `userIds` take the same forms. With `expandFollowers`, the run
reads the followers of each account instead & keeps the ones that publish an
email. `expansionRelation` picks `Followers` or `Following`.

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
search.

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
of other Actors. Each line names their fields, then the field they map to.

- `requireEmail` needs no field. Every delivered profile publishes an email.
- `requireWebsite` maps to `hasWebsite`. It keeps a profile with any link in its
  website field, & the run status says so.
- `bioKeywords` maps to `bioContains`. Any 1 of its terms may match.
- `locationKeywords` with 1 value maps to `locationContains`. More values stop
  the run before any read or charge.
- `emailDomains` as a list maps to `emailDomains`.
- `outputEmail`, `resolveShortLinks` need no field. Every row carries its emails
  & X's full links.
- `findEmails`, `extractEmails` need no field. Rows carry the emails a profile
  publishes on X. The run status says the Actor reads no linked site.
- `validateEmails` needs no field. The run status says emails come as published,
  since the Actor checks no mailbox.

When you set one of these names & its canonical field, the canonical value wins.
The run log names the field that lost.

## Output

Each profile that publishes an email is 1 dataset row. The contact details come
first, in `email`, `emailDomain`, `emailSource` & `contactInfo`. The full public
profile follows, with `id`, `username`, `name`, `description`, `followers`,
`following`, `verified`, `verifiedType`, `createdAt`, `profilePicture` & more.
Missing source fields stay absent. Xquik's X Email Scraper invents no values.

Examples use sample values. Results reflect live data. A row looks like this.

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

An email is an address the account wrote on its own profile, in its bio, its
name or its location. The Actor returns it as the account published it &
lowercases it. Nothing checks that the address receives mail, & nothing reads
the website a profile links to. `writtenAs` holds the account's own spelling
when it differs, as in "jane [at] example [dot] org".

A phone number appears only when the profile writes it in a form that can be
nothing else. A WhatsApp link or a number that starts with + qualifies. A year,
a count or a price is never read as a phone number.

## How much does it cost to get emails from X profiles?

Every Apify plan costs $0.00015 per delivered row. Apify bills your platform
usage separately.

For more volume, [pick an Apify plan](https://apify.com/pricing?fpr=xquik) with
more prepaid usage.

- One charge per delivered data row. Diagnostics are free in `diagnostics`.
- No start or lookup fee.
- A profile without an email adds no row & no charge.
- An account X does not have adds no row & no charge.
- Deduplication runs before billing.
- Apify maximum-total-charge settings cap delivered rows.

A followers scan takes a while, since few profiles publish an email. `maxScan`
bounds that time.

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

No. Xquik's X Email Scraper needs no X cookies, API key, login or credentials.
Every read runs on Xquik's infrastructure.

### Where do the emails come from?

They come from the profile itself, in the bio, the name & the location the
account wrote. The Actor reads no post & no linked website, so every email is
one the account published on its own X profile.

### Does the Actor check that an email works?

No. It returns each address as the account published it. Nothing checks that the
address receives mail.

### Why did a followers scan deliver few rows?

About 1 follower in 400 publishes an email. The run status says how many rows
the run read. Raise `maxScan` to read further into a list, or use `searchTerms`
with words such as booking, which keep far more rows.

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

Open an issue in the
[Issues tab](https://apify.com/xquik/x-email-scraper/issues) with the run ID.
Free diagnostics in the key-value store explain runs that need attention. A run
that gets no row back says why in its status.

### Can I get a custom solution?

Yes. Describe what you need in the
[Issues tab](https://apify.com/xquik/x-email-scraper/issues). Xquik also offers
a dashboard, a REST API, an MCP server & webhooks. Find Xquik's website on its
[Apify profile](https://apify.com/xquik).
