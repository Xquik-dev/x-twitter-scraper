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
most complete X data. Xquik's X Profile Scraper collects profiles, posts,
replies, media & followers for any handle. Most other Apify Actors charge before
filtering or deduplicating. Xquik charges only for delivered, unique,
filter-matching results.

Scrape X profiles, posts, replies, media & followers from handles, IDs or URLs.
You pay **$0.00015 per delivered row**, & Apify bills platform usage separately.
You need no X API key or login.

> Xquik is an independent third-party service. Not affiliated with X Corp.
> "Twitter" and "X" are trademarks of X Corp.

## What does X Profile Scraper do?

Xquik's X Profile Scraper returns public X (Twitter) profiles from handles,
numeric user IDs or profile URLs. Each profile can add its posts, replies,
media, Highlights, followers, following & verified followers. It also translates
bios & checks who broadcasts live now.

### Key features

- Read many profiles in 1 run from handles, IDs or URLs.
- Add posts, replies, media, Highlights, followers, following or verified
  followers as separate rows.
- Translate each bio into a language code with `translateBioTo`.
- Check whether each profile broadcasts live now with `checkLiveNow`.
- Filter posts by date, language, media & engagement.
- Filter profiles by audience size, account age & verification.
- Filters & duplicate removal run before billing.
- Runs keep delivered rows & progress when Apify restarts them.

### Use cases

- Enrich lead lists with bios, websites, locations & audience size.
- Compare competitor accounts by followers, posts & verification.
- Vet creators by audience, account age & engagement.
- Archive an account's posts, media & Highlights.
- Map an account's network through its followers & following.
- Watch creators & brands for live broadcasts.
- Read bios from other markets in your own language.

### What data can X Profile Scraper extract?

Profile rows use `resultType: "profile"`. These are the main fields:

| Field              | Description                                     |
| ------------------ | ----------------------------------------------- |
| `id`               | Numeric user ID                                 |
| `username`         | Handle without `@`                              |
| `name`             | Display name                                    |
| `description`      | Bio text                                        |
| `url`              | Website on profile rows                         |
| `location`         | Location the owner typed                        |
| `followers`        | Follower count                                  |
| `following`        | Following count                                 |
| `statusesCount`    | Post count                                      |
| `mediaCount`       | Media post count                                |
| `favouritesCount`  | Likes the account gave                          |
| `listedCount`      | Public Lists that include the account           |
| `createdAt`        | Account creation time                           |
| `verified`         | Whether X reports verification                  |
| `isBlueVerified`   | Whether the account has X Blue verification     |
| `verifiedType`     | Verification category, such as `Government`     |
| `profilePicture`   | Profile image URL                               |
| `coverPicture`     | Banner image URL                                |
| `pinnedTweetIds`   | Pinned post IDs                                 |
| `professional`     | Professional category & type                    |
| `accountBasedIn`   | X's best-effort country or region label         |
| `connectedVia`     | How the account first connected to X            |
| `usernameChanges`  | How often the handle changed & when it last did |
| `birthdate`        | Birthday parts the account made public          |
| `subscribersCount` | Subscriber count, when X sends it               |
| `tipJar`           | Public tipping links                            |
| `protected`        | Whether the account protects its posts          |
| `unavailable`      | Whether the account is unavailable              |
| `sourceTarget`     | The handle, ID or URL you entered               |

The dataset schema documents every other field, such as `identityVerification`,
`isAutomated`, `automatedBy`, `withheldInCountries` & `verificationReason`.

Optional rows keep the Xquik REST response shape:

| `resultType`              | Turned on by               | One row per       |
| ------------------------- | -------------------------- | ----------------- |
| `profileTweet`            | `includeTweets`            | Post              |
| `profileReply`            | `includeReplies`           | Post or reply     |
| `profileMedia`            | `includeMedia`             | Media post        |
| `profileHighlight`        | `includeHighlights`        | Highlighted post  |
| `profileFollower`         | `includeFollowers`         | Follower          |
| `profileFollowing`        | `includeFollowing`         | Followed account  |
| `profileVerifiedFollower` | `includeVerifiedFollowers` | Verified follower |
| `profileBioTranslation`   | `translateBioTo`           | Translated bio    |
| `profileLive`             | `checkLiveNow`             | Checked profile   |

Rows never include viewer-only state, such as whether you follow or block an
account.

## How do I use X Profile Scraper to scrape profile data?

Follow these steps in Apify Console:

1. Open a [task example](#task-examples) or the Input tab.
2. Add handles to `twitterHandles`, URLs to `startUrls` or IDs to `userIds`.
3. Turn on the resources you need, such as `includeTweets`.
4. Set `maxItems` & any filters, then click Start.
5. Export the dataset as JSON, CSV, Excel or HTML.

Each recipe below is a complete input.

### Scrape many profiles

```json
{ "twitterHandles": ["nasa", "OpenAI", "apify"], "maxItems": 100 }
```

Each handle returns 1 profile row. Handles work with or without `@`.

### Paste profile URLs or IDs

`startUrls` takes each URL as a plain string or as a `{ "url": "..." }` object.
`userIds` takes numeric X user IDs:

```json
{
  "startUrls": ["https://x.com/nasa", { "url": "https://x.com/OpenAI" }],
  "userIds": ["11348282"],
  "maxItems": 100
}
```

A handle you name twice is read once.

### Add posts, replies & media

```json
{
  "twitterHandles": ["nasa"],
  "includeTweets": true,
  "includeMedia": true,
  "sinceDate": "2026-01-01",
  "maxItems": 500
}
```

`includeTweets` follows the profile's Posts tab. `includeReplies` follows its
With Replies tab. `includeMedia` follows its Media tab. `includeHighlights` adds
the posts on its Highlights tab, in X's order. A profile without highlights adds
no rows.

### Keep only popular posts

```json
{
  "twitterHandles": ["nasa"],
  "includeTweets": true,
  "minLikes": 1000,
  "mediaType": "videos",
  "maxItems": 200
}
```

Post filters apply to optional post rows. Filtered rows never reach the dataset,
so you never pay for them.

### Export followers & following

```json
{
  "twitterHandles": ["apify"],
  "includeFollowers": true,
  "minFollowers": 1000,
  "verifiedOnly": true,
  "maxItems": 1000
}
```

`includeFollowers`, `includeFollowing` & `includeVerifiedFollowers` add 1
profile row per account. Profile filters apply to these rows & to the main
profiles.

### Translate bios

```json
{ "twitterHandles": ["nasa", "SpaceX"], "translateBioTo": "es" }
```

Each translation is 1 `profileBioTranslation` row with `text`, `language` &
`sourceLanguage`. A profile without a bio adds no row & no charge.

### Check who is live now

```json
{ "twitterHandles": ["nasa", "SpaceX"], "checkLiveNow": true }
```

Each check is 1 `profileLive` row with `live`, `userId`, `userName` &
`broadcast`. `broadcast` holds the profile's latest broadcast, live or ended, or
null. A missing profile adds no row.

## Task examples

Choose from 50 public tasks. Each has a bounded input & a matching dataset view.
Edit a task before you run it.

- [Get the profile card of one X account](https://apify.com/xquik/x-profile-scraper/examples/get-an-x-profile-card)
- [Compare the profiles of competing brands](https://apify.com/xquik/x-profile-scraper/examples/compare-competitor-brand-profiles)
- [Resolve numeric user IDs to profiles](https://apify.com/xquik/x-profile-scraper/examples/resolve-numeric-user-ids-to-profiles)
- [Collect the recent posts of one account](https://apify.com/xquik/x-profile-scraper/examples/collect-recent-posts-from-an-account)
- [Find the most liked posts of an account](https://apify.com/xquik/x-profile-scraper/examples/find-an-accounts-most-liked-posts)
- [Collect the videos an account posts](https://apify.com/xquik/x-profile-scraper/examples/collect-videos-from-an-account)
- [Archive one calendar year of an account](https://apify.com/xquik/x-profile-scraper/examples/archive-one-year-of-posts)
- [Export the followers of an account](https://apify.com/xquik/x-profile-scraper/examples/export-the-followers-of-an-account)
- [Export the verified followers of a company](https://apify.com/xquik/x-profile-scraper/examples/export-verified-followers)
- [Find followers with 10,000 or more followers](https://apify.com/xquik/x-profile-scraper/examples/find-influential-followers)
- [Measure the audience overlap of 2 design tools](https://apify.com/xquik/x-profile-scraper/examples/measure-audience-overlap)
- [Run a full audit of one account](https://apify.com/xquik/x-profile-scraper/examples/run-a-full-account-audit)

## How much does it cost to scrape X profiles?

Xquik's X Profile Scraper costs $0.00015 per delivered row on every Apify plan.
Apify bills your platform usage separately. Xquik applies one charge per
delivered data row. Diagnostics are free in the `diagnostics` output.

- You need no Xquik subscription.
- You pay no separate start, profile or query fee.
- Filters & deduplication run before billing. You never pay for filtered or
  duplicate rows.
- A profile without a bio adds no translation charge.
- A missing profile adds no live check charge.
- Apify maximum-total-charge settings cap delivered rows.

A run that hits a problem, or a large run, also writes a `run-report` record. A
small run that goes well skips it & saves Apify usage. Turn on
`alwaysSaveRunRecords` to write it on every run.

To cap what a run can spend, see [Run options](#run-options).

## Empty, partial & stopped runs

Xquik's X Profile Scraper explains empty, partial & stopped runs for free. The
run status says why the run stopped. It also counts charged results & targets
read.

### Empty results

An empty run's status says to check your targets & filters. Filtered rows never
use up your result limit. A run that reads every target & gets no row back
writes no record. Its status says why & what to change.

X has shown the posts an account liked only to that account since 2024.
`includeLikes` returns no `profileLike` rows for other accounts.

### Partial runs

Interrupted extraction writes a free `partial` diagnostic. Delivered rows stay
in the dataset. Read `availableResults`, `failedTargets`, `retryable` &
`nextAction` before you retry. A successful Actor exit confirms delivery, not
complete extraction.

### Stop causes

The run status names every cause of an early stop. `stopCauses` lists each cause
with its own `message`, `retryable` & `nextAction`. The causes are
`target_not_found`, `target_suspended`, `target_failed`,
`pagination_safety_limit` & `deadline_reached`. `target_suspended` names the
accounts X suspended. A missing or suspended target joins the list only when
another cause stopped the run. The run is `retryable` when any cause is.

## Input

The Input tab lists every option. Give at least 1 of `twitterHandles`,
`startUrls` or `userIds`. Every other field is optional.

| Field                          | What it does                                          |
| ------------------------------ | ----------------------------------------------------- |
| `twitterHandles`               | Handles, with or without `@`                          |
| `startUrls`                    | Profile URLs on x.com or twitter.com                  |
| `userIds`                      | Numeric X user IDs                                    |
| `maxItems`                     | Cap on delivered rows across the whole run            |
| `maxItemsPerTarget`            | Cap on rows for each profile or resource              |
| `includeTweets`                | Add the Posts tab                                     |
| `includeReplies`               | Add the With Replies tab                              |
| `includeMedia`                 | Add the Media tab                                     |
| `includeHighlights`            | Add the Highlights tab                                |
| `includeLikes`                 | Add liked posts, which X hides from other accounts    |
| `includeFollowers`             | Add followers                                         |
| `includeFollowing`             | Add followed accounts                                 |
| `includeVerifiedFollowers`     | Add verified followers                                |
| `translateBioTo`               | Translate each bio into a language code, such as `es` |
| `checkLiveNow`                 | Check whether each profile broadcasts live now        |
| `sinceDate`, `untilDate`       | Keep posts inside a date window                       |
| `language`                     | Keep posts in 1 language code                         |
| `mediaType`                    | Keep posts with images, videos, GIFs, links or none   |
| `minViews`, `minLikes`         | Keep posts above a view or like count                 |
| `minReplies`, `minRetweets`    | Keep posts above a reply or repost count              |
| `nativeRetweets`               | Keep only native reposts                              |
| `verifiedOnly`                 | Keep verified authors or profiles                     |
| `blueVerifiedOnly`             | Keep authors or profiles X marks as blue verified     |
| `minFollowers`, `maxFollowers` | Keep profiles inside an audience range                |
| `minAccountAgeDays`            | Keep profiles at least this many days old             |
| `hasWebsite`, `hasLocation`    | Keep profiles that list a website or a location       |
| `bioContains`                  | Keep profiles whose bio has 1 of these words          |
| `locationContains`             | Keep profiles whose location has this text            |
| `dedupeAcrossTargets`          | Drop rows repeated across profiles before billing     |

### Migrate from another profile Actor

Paste the input you already use. Xquik's X Profile Scraper reads these field
names of other profile Actors. Each line names their fields, then the field they
map to:

- `profiles`, `userNames`, `usernames`, `handles`, `screenNames`:
  `twitterHandles`
- `urls`, `profileUrls`: `startUrls`
- `maxProfiles`, `maxResults`: `maxItems`
- `shouldScrapeFollowers`, `shouldScrapeFollowings`: `includeFollowers`,
  `includeFollowing`
- `requireEmail`: `hasEmail`
- `requireWebsite`: `hasWebsite`. It keeps a profile with any link in its
  website field, & the run status says so.
- `filterByBlueVerified`: `blueVerifiedOnly`. `false` stops the run before any
  read or charge.
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

`category` set to `user_info` changes nothing. A category that is another
Actor's job, such as `tweets` or `followers`, stops the run. It reads & charges
nothing. The message names the Actor to use. When you set an alias & its
canonical field, the canonical value wins. The run log names the alias that
lost.

### Pick the right inputs

- For a profile card alone, give handles & leave every `include` option off.
- For an account archive, turn on `includeTweets`, `includeMedia` &
  `includeHighlights`, & set `sinceDate`.
- For top content, add `minLikes` or `minViews` to `includeTweets`.
- For lead lists, turn on `includeFollowers` with `minFollowers` &
  `minAccountAgeDays`.
- For audience overlap, give 2 handles, turn on `includeFollowers` & set
  `dedupeAcrossTargets: false`. A shared follower then appears under each
  handle.

## Output

Each row is a JSON object. The dataset schema gives each field a title &
description, so AI agents can read rows without guessing.

Examples use sample values. Results reflect live data. A profile row looks like
this:

```json
{
  "resultType": "profile",
  "sourceTarget": "sample_user",
  "id": "1234567890",
  "username": "sample_user",
  "name": "Sample User",
  "description": "Building tools for researchers.",
  "url": "https://example.com",
  "location": "Lisbon",
  "followers": 1200,
  "following": 310,
  "statusesCount": 4200,
  "verified": false,
  "createdAt": "Tue Mar 21 20:50:14 +0000 2017",
  "accountBasedInUnavailable": true
}
```

X infers `accountBasedIn` from aggregated account-access IPs. The label does not
state nationality, residence, identity, signup, post or exact location.
`observedAt` records retrieval time. `accountBasedIn` is null when X shows no
label. When X withholds it, the row has `accountBasedInUnavailable: true`
instead.

Export the dataset as JSON, CSV, Excel or HTML.

## Run options

- Set Apify's max total charge to cap run cost. Leave `maxItems` high to get the
  most rows that budget allows.
- Set `maxTotalChargeUsd` in the Apify API, or Max cost per run in Console.
- Put all your profiles in 1 run. Each run pays Apify the same start cost.
- `maxConcurrency` sets how many profiles run at once. The default is the
  fastest safe setting.
- Use Xquik account monitors for 1-second checks & signed webhooks. Active
  monitors check every second.

Select `latest` for every run to get every published fix. Saved tasks &
schedules keep their own build choice, so keep it on `latest`.

## Related Xquik Actors

Every Xquik Actor shares the same extraction engine, filter-first billing &
diagnostics. Pick the one that matches the data you need.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): Scrapes tweets
  from searches, profile timelines, Lists & tweet IDs with 50+ filters & flat
  exports. Use it when you need tweet data without analysis. From $0.00015 per
  row.
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

## Need more than scraping?

Xquik also offers 53 dashboard tools, a REST API, signed webhooks & an MCP
server.

- [API documentation](https://docs.xquik.com/introduction): REST API guides
- [Profile Lookup API](https://docs.xquik.com/api-reference/x/twitter-profile-lookup):
  get 1 public profile
- [User Tweets API](https://docs.xquik.com/api-reference/x/user-tweets): get a
  user's posts
- [Followers API](https://docs.xquik.com/api-reference/x/followers): get an
  account's followers
- [Bio Translation API](https://docs.xquik.com/api-reference/x/user-bio-translation):
  translate a profile bio
- [Live Status API](https://docs.xquik.com/api-reference/x/user-live-status):
  check whether a user is live
- [MCP server](https://docs.xquik.com/mcp/overview): discover supported tools
- [Webhooks](https://docs.xquik.com/webhooks/overview): signed event delivery

## FAQ

Answers to common questions, then where to get help.

### Do I need an X API key or login?

No. Xquik's X Profile Scraper needs no X API key, login or credentials.

### How many profiles can I scrape in 1 run?

As many as you list. `maxItems` & your Apify spend limit cap the rows.

### Can I export X profiles to CSV or Excel?

Yes. Export the dataset as JSON, CSV, Excel or HTML from the Storage tab.

### Can I scrape a Twitter user's followers?

Yes. Turn on `includeFollowers`, `includeFollowing` or
`includeVerifiedFollowers`. Each account is 1 row.

### Does it get a profile's website & location?

Yes. `url` holds the website & `location` holds the text the owner typed. Set
`hasWebsite` & `hasLocation` to keep only profiles that list them.

### Can I scrape protected accounts?

You get the public profile row, with `protected: true`. X shows a protected
account's posts & followers only to its approved followers.

### How do I know if an account is live now?

Set `checkLiveNow: true`. Each profile gets a `profileLive` row with `live` &
its latest broadcast.

### Can it translate bios?

Yes. Set `translateBioTo` to a language code, such as `es` or `pt-br`. A profile
without a bio adds no row.

### Why does includeLikes return nothing?

X has shown the posts an account liked only to that account since 2024. Other
accounts, this Actor included, can't read them.

### Is it legal to scrape X profiles?

Xquik's X Profile Scraper requests public X fields. Results can contain personal
data. Confirm a lawful purpose & follow applicable privacy rules. Ask qualified
counsel when uncertain.

### Why did my run return no results?

Read the run status first. An empty run's status says to check your targets &
filters. The free `diagnostics` output appears when something needs attention.
Its `stopCauses` gives each cause a `nextAction` to follow. The run lists each
input it cannot read & says how to fix it.

### Can I use the API, schedules & integrations?

Yes. Choose from 50 public tasks or the Xquik REST API. The
[API tab](https://apify.com/xquik/x-profile-scraper/api) has Python, JavaScript
& cURL examples. Apify [schedules](https://docs.apify.com/platform/schedules)
run Xquik's X Profile Scraper on a cron. Agents use
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Use `latest`
unless you need an older build.

### Can I get a custom solution?

Yes. Visit [xquik.com](https://xquik.com) or read the
[API docs](https://docs.xquik.com/introduction). They cover the dashboard, API,
MCP server & webhooks.

### Where do I get help?

Open an issue on the Actor page or contact <support@xquik.com> with the run ID.
Free diagnostics in the key-value store explain runs that need attention. A run
that gets no row back says why in its status.
