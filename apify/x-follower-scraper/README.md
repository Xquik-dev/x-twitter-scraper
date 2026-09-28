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
most complete X data. Xquik's X Follower Scraper collects followers, following,
list members, subscribers & community members. Public benchmarks prove it is the
cheapest & fastest of 10 follower Actors. Its rows carry 1.9x the median Actor's
fields, as the [benchmark below](#benchmark) shows. Most other Apify Actors
charge before filtering or deduplicating. Xquik charges only for delivered,
unique, filter-matching results.

Scrape X (Twitter) followers, following, verified followers, List members, List
subscribers & Community members. Xquik's X Follower Scraper costs **from
$0.00015 per delivered profile on every Apify plan**. Apify bills platform usage
separately. You need no X login, & Xquik adds no start or query fee.

> Xquik is an independent third-party service. Not affiliated with X Corp.
> "Twitter" and "X" are trademarks of X Corp.

## What does X Follower Scraper do?

Xquik's X Follower Scraper returns available public profile data for followers,
following, Lists & Communities. Each row names its source target & relation.

### Core behavior

- Filters & duplicate removal run before billing.
- By default, a profile shared by several targets appears & bills once.
- One run accepts handles, numeric IDs, URLs & short paths.
- Merge mode records shared profiles, sources, relations & `overlapCount`.
- Run logs show page timing in `fetchDurationMs`, `processingDurationMs`,
  `pushDurationMs`, `statusDurationMs` & `fullPageDurationMs`.
- Runs keep delivered rows & progress when Apify restarts them.

### What data can X Follower Scraper extract?

| Field             | Description                                             |
| ----------------- | ------------------------------------------------------- |
| `id`              | Numeric X user ID                                       |
| `username`        | Handle (without `@`)                                    |
| `name`            | Display name                                            |
| `description`     | Bio text                                                |
| `followers`       | Follower count                                          |
| `following`       | Following count                                         |
| `statusesCount`   | Total tweets posted                                     |
| `mediaCount`      | Total media uploaded                                    |
| `favouritesCount` | Total likes given                                       |
| `verified`        | Combined public Blue or legacy verified flag            |
| `verifiedType`    | `blue`, `business`, `government`, or `none`             |
| `location`        | Self-reported location                                  |
| `url`             | Website URL from profile                                |
| `profilePicture`  | Avatar URL (full-size)                                  |
| `coverPicture`    | Banner URL                                              |
| `createdAt`       | Account creation timestamp string from X                |
| `sourceTarget`    | Handle / ID you scraped this profile from               |
| `sourceRelation`  | Relation: `followers`, `following`, `list_members`, ... |
| `sourceUrl`       | Exact URL the profile was discovered on                 |
| `sourceTargets`   | All targets that matched this profile in merge mode     |
| `sourceRelations` | All relations that matched this profile in merge mode   |
| `sourceUrls`      | All source URLs that matched this profile in merge mode |
| `overlapCount`    | Number of matching relation-target pairs in merge mode  |
| `resultType`      | Row type in full and raw output modes                   |
| `raw`             | Safe source profile before Actor-specific formatting    |

Rows follow the public profile contract. It covers identity, counts,
verification, availability, affiliates, professional data & biographies. Source
attribution, entities & pinned tweet IDs remain available. See OpenAPI for the
exact fields.

Set `outputMode: "raw"` or `includeRaw: true` to add a `raw` field. It holds a
safe copy of the source profile. Compact mode is the default.

`verifiedOnly` accepts public Blue & legacy verified profiles. If source flags
conflict, the true verification state wins.

Rows never include viewer-only state. Xquik removes follow, block, mute, DM,
notification & similar viewer flags. Raw output drops them too.

## Use cases

- Enrich leads & build research datasets with more fields per profile. Our
  median row had 28 fields on 2026-09-28. That is 1.9x the median of 9 other
  Actors.
- Export competitor followers for lead research.
- Compare audiences across your account, competitors & public figures.
- Filter by follower count & verification to find matching profiles.
- Export X Community members.
- Build public social-network datasets for research.
- Segment follower bases by bio keyword, location, or profile type.

## How do I use X Follower Scraper to scrape follower data?

Each example below is a complete input. Pick the one that fits your data.

1. Open Xquik's X Follower Scraper in Apify Console.
2. Add profile, List or Community URLs, X handles or numeric IDs.
3. Pick a relation, such as `followers` or `verified_followers`.
4. Set `maxItems` & any profile filters.
5. Start the run.
6. Export the dataset as JSON, CSV, Excel or HTML.

The inputs below cover common jobs.

### Paste profile or list URLs

Paste profile, List or Community URLs. Each URL sets the relation to scrape:

```json
{
  "startUrls": [
    { "url": "https://x.com/nasa/followers" },
    { "url": "https://x.com/spacex/verified_followers" },
    { "url": "https://x.com/elonmusk/following" },
    { "url": "https://x.com/i/lists/1748648376080666720/members" },
    { "url": "https://x.com/i/communities/1493446837214187523/members" }
  ],
  "maxItems": 5000
}
```

### Bulk handles

`twitterHandles` is shorthand for many `/<handle>/followers` targets. Handles
work with or without `@`:

```json
{
  "twitterHandles": ["elonmusk", "nasa", "openai"],
  "relation": "followers",
  "maxItems": 1000
}
```

`relation` sets what to scrape for every handle. Use `followers`, `following` or
`verified_followers`.

The same input also accepts `username`, `usernames` & `user_names` as aliases.

### Multi-relation runs

Set `relations` to read several relations for the same handles:

```json
{
  "usernames": ["nasa"],
  "relations": ["followers", "following"],
  "maxItems": 1000
}
```

Booleans such as `getFollowers`, `getFollowing`, `getVerifiedFollowers`,
`getListMembers`, `getListFollowers` & `getCommunityMembers` also work.

### Scrape by numeric user, list, or community IDs

```json
{
  "userIds": ["44196397"],
  "listIds": ["1748648376080666720"],
  "communityIds": ["1493446837214187523"],
  "relation": "followers",
  "maxItemsPerTarget": 500,
  "maxItems": 1500
}
```

Numeric user IDs also accept the `twitterUserIds` & `user_ids` aliases.

`relation` applies to numeric user IDs. List IDs default to members. Community
IDs always use members. `maxItemsPerTarget` keeps the first large target from
using up `maxItems`.

### Filter before you pay

Add filters so only matching profiles enter your dataset:

```json
{
  "twitterHandles": ["openai"],
  "relation": "followers",
  "minFollowers": 1000,
  "verifiedOnly": true,
  "verifiedType": "business",
  "minStatuses": 100,
  "usernameContains": "ai",
  "bioContains": "founder, CEO",
  "locationContains": "San Francisco",
  "maxItems": 500
}
```

The Actor may inspect more profiles than it writes. You pay only for rows that
pass every filter & enter your dataset.

Separate `bioContains` alternatives with commas or new lines. A profile passes
when its bio contains any supplied term. Matching ignores case.

### Find audience overlap

Use merge mode to compare competitors, lists, communities, or relation types:

```json
{
  "twitterHandles": ["openai", "anthropicai", "GoogleDeepMind"],
  "relation": "followers",
  "dedupeMode": "merge",
  "maxItemsPerTarget": 5000,
  "maxItems": 15000
}
```

The output has 1 row per unique profile. Shared profiles include
`sourceTargets`, `sourceRelations`, `sourceUrls`, `sourceTargetKeys` &
`overlapCount`. Sort by `overlapCount` or export the rows to CSV. Keep
`maxItems` high enough for every target to add rows. Use `maxItemsPerTarget` to
set the depth for each account.

### Accepted URL shapes

| URL                                         | Relation                     |
| ------------------------------------------- | ---------------------------- |
| `https://x.com/<handle>/followers`          | `followers`                  |
| `https://x.com/<handle>/verified_followers` | `verified_followers`         |
| `https://x.com/<handle>/following`          | `following`                  |
| `https://x.com/<handle>`                    | `relation`, else `followers` |
| `https://x.com/i/lists/<id>/members`        | `list_members`               |
| `https://x.com/i/lists/<id>/followers`      | `list_followers`             |
| `https://x.com/i/lists/<id>`                | `list_members`               |
| `https://x.com/i/communities/<id>/members`  | `community_members`          |
| `https://x.com/i/communities/<id>`          | `community_members`          |
| `<handle>/followers`                        | `followers`                  |
| `<handle>/following`                        | `following`                  |
| `<handle>/verified_followers`               | `verified_followers`         |
| `lists/<id>/members`                        | `list_members`               |
| `lists/<id>/followers`                      | `list_followers`             |
| `communities/<id>/members`                  | `community_members`          |

`twitter.com` & `mobile.twitter.com` URLs work everywhere too. URLs without
`https://`, such as `x.com/nasa`, also work.

## Task examples

Choose from 50 public tasks. Each has a bounded input & a matching dataset view.
Every task opens with a real audience or filter. Edit it before you run it.

- [Discover AI builders in OpenAI followers](https://apify.com/xquik/x-follower-scraper/examples/discover-ai-builders-in-openai-followers)
- [Build an X audience dataset for AI agents](https://apify.com/xquik/x-follower-scraper/examples/build-agent-ready-x-audience-dataset)
- [Collect X audience data for RAG](https://apify.com/xquik/x-follower-scraper/examples/collect-x-audience-data-for-rag)
- [Find AI SEO practitioners on X](https://apify.com/xquik/x-follower-scraper/examples/find-ai-seo-practitioners-on-x)
- [Compare AI brand follower overlap](https://apify.com/xquik/x-follower-scraper/examples/compare-ai-brand-follower-overlap)
- [Export Twitter followers to CSV](https://apify.com/xquik/x-follower-scraper/examples/export-twitter-followers-to-csv)
- [Analyze competitor follower overlap](https://apify.com/xquik/x-follower-scraper/examples/analyze-competitor-follower-overlap)
- [Find micro-influencers in X followers](https://apify.com/xquik/x-follower-scraper/examples/find-micro-influencers-in-followers)
- [Export curated Twitter list members](https://apify.com/xquik/x-follower-scraper/examples/export-curated-twitter-list-members)
- [Analyze public X Community members](https://apify.com/xquik/x-follower-scraper/examples/analyze-public-x-community-members)
- [Collect Community members for AI agents](https://apify.com/xquik/x-follower-scraper/examples/collect-community-members-for-ai-agents)
- [Create repeatable X follower snapshots](https://apify.com/xquik/x-follower-scraper/examples/create-repeatable-follower-snapshots)

## How much does it cost to scrape X followers?

Xquik's X Follower Scraper costs $0.00015 per delivered profile on every Apify
plan. Apify bills your platform usage separately. Xquik applies one charge per
delivered data row. You need no separate Xquik subscription, & Xquik adds no
start fee. Starts, targets & relation selection add no separate query charge.

One run can read many targets. Caps, deduplication, attribution & billing stay
exact across them.

- Filters run before a profile enters your dataset, so filtered rows cost
  nothing.
- Number filters are `minFollowers`, `maxFollowers`, `minFollowing`,
  `maxFollowing`, `minStatuses`, `maxStatuses` & `minAccountAgeDays`.
- Profile filters are `verifiedOnly`, `verifiedType`, `bioContains`,
  `locationContains`, `usernameContains`, `hasWebsite` & `hasLocation`.
- The Actor removes repeats across targets before writing. Set
  `dedupeAcrossTargets: false` to keep them.
- Xquik never bills rows the dataset rejects.
- Diagnostics are free in the `diagnostics` output.
- No-input, invalid-input & zero-output runs write 1 actionable record to the
  free `diagnostics` output.

A run that hits a problem, or a large run, also writes a `run-report` record.
Its `estimatedChargeUsd` uses the live pay-per-event price Apify exposes to the
Actor. A small run that goes well skips it & saves Apify usage. Turn on
`alwaysSaveRunRecords` to write it on every run.

## Benchmark

Xquik's X Follower Scraper beat 9 other follower Actors on cost & speed. Its
median row had 28 fields, 1.9x the median of the others.

| Actor                                                  | Useful profiles | Cost per useful profile | Useful profiles per second | Fields per row | Public run                                                                                                                                                                                     |
| ------------------------------------------------------ | --------------: | ----------------------: | -------------------------: | -------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| xquik/x-follower-scraper                               |           1,000 |               $0.000155 |                       68.5 |             27 | [View run](https://console.apify.com/view/runs/X8Vnx8Ytuk5AzWiK7)                                                                                                                              |
| xquik/x-follower-scraper                               |             999 |               $0.000155 |                       38.4 |             28 | [View run](https://console.apify.com/view/runs/lPqjfUn8767FpIDis)                                                                                                                              |
| b2b_leads/X-Real-Time-Data                             |             286 |               $0.000388 |                        3.1 |             21 | [View run](https://console.apify.com/view/runs/IkQButA6cVz4ys4GM)                                                                                                                              |
| kaitoeasyapi/premium-x-follower-scraper-following-data |             356 |               $0.000506 |                       21.9 |             50 | [View run](https://console.apify.com/view/runs/cJgj15HLBA50LEUf0)                                                                                                                              |
| api-ninja/x-twitter-followers-scraper                  |             350 |               $0.000809 |                        7.0 |              8 | [View run](https://console.apify.com/view/runs/XjJ4UPKAILSz0Droz)                                                                                                                              |
| altimis/scweet                                         |             332 |               $0.000922 |                        1.1 |             21 | [View run](https://console.apify.com/view/runs/qVGvT7TPAJEHCuR42)                                                                                                                              |
| apidojo/twitter-user-scraper                           |             323 |               $0.001160 |                        7.3 |             25 | [View run](https://console.apify.com/view/runs/Xnf7rh8jK6764gP1f)                                                                                                                              |
| atomus/twitter-scraper                                 |             323 |               $0.001272 |                        6.2 |             13 | [View run](https://console.apify.com/view/runs/MWz1l0cTcfPcEnaiH)                                                                                                                              |
| practicaltools/cheap-simple-twitter-api                |             283 |               $0.002036 |                        6.5 |              4 | [Run 1](https://console.apify.com/view/runs/Zhvi7LsfpHdQNKcGb), [Run 2](https://console.apify.com/view/runs/IsJj4fa8pFUG7uhlK), [Run 3](https://console.apify.com/view/runs/2W7n8fpEqoxiXq6oX) |
| maximedupre/twitter-scraper                            |             320 |               $0.002192 |                        2.1 |             15 | [Run 1](https://console.apify.com/view/runs/HblUkhgI2svp1LBGs), [Run 2](https://console.apify.com/view/runs/37yQFzgydzJoWfa39), [Run 3](https://console.apify.com/view/runs/mtBoKcocaM4BUzZmm) |
| seemuapps/x-followers-following-scraper                |             286 |               $0.003504 |                        3.9 |              9 | [Run 1](https://console.apify.com/view/runs/1r3je034X2qhFGgLj), [Run 2](https://console.apify.com/view/runs/dc4ztVP3n2eemgiNQ), [Run 3](https://console.apify.com/view/runs/gWPiBT00G7D9IJ0Cj) |

Every Actor read the followers of NASA, SpaceX & esa on 2026-09-28. All runs
used the Bronze tier. A useful profile is unique, 30+ days old, with 1+ follower
& 1+ post. Cost is the customer's total spend per useful profile. Ours includes
the Apify usage our customers pay. A row with 3 runs adds them up. Fields per
row is the median count of non-empty fields, nested ones included. A list counts
as 1 field. Open a run for its input, log & dataset.

## Input

The Input tab lists every option. Add at least 1 of `startUrls`,
`twitterHandles`, `userIds`, `listIds` or `communityIds`. Their documented
aliases count too. Every other field is optional.

Try these inputs:

- Add a competitor handle to `twitterHandles` with `relation: "followers"`.
- Paste `https://x.com/<handle>/verified_followers` into Start URLs for verified
  profiles.
- Paste a list URL into Start URLs to audit its members.
- Add 2+ handles. A shared profile appears once, under the first target. Use
  `dedupeMode: "merge"` to keep 1 row with every matching target. Set
  `dedupeAcrossTargets: false` to keep 1 row per target.

### Console & API input

The Console form has these controls:

- The Start URLs field accepts URL strings or `{ "url": "..." }` objects. Its
  JSON editor keeps both API formats.
- Relation, Output Mode & Dedupe Mode are select lists with fixed choices.
- Relations is a multi-select list for multi-relation runs.
- Result limits accept whole numbers of 1 or more.
- Numeric profile filters accept whole numbers of 0 or more.

Use canonical fields in new integrations. Aliases still work in JSON, API, SDK,
automation & task inputs. `outputVariant` & `includeRaw` are Output Mode
aliases. `dedupeAcrossTargets` is a Dedupe Mode alias. The visual form hides
aliases that duplicate a canonical control. Existing JSON & saved task inputs
with aliases keep working. Saved inputs with `dedupeAcrossTargets: false` or
`dedupeMode: "none"` keep 1 row per target.

### Migrate from another follower Actor

Paste the input you already use. Xquik's X Follower Scraper reads the field
names other X follower Actors use. It maps them to its own fields. Canonical
names stay the documented default. An alias never drops a field & never changes
what you pay.

Each line names the fields you already use, then the field they map to:

- `twitterHandles`, `usernames`, `user_names`, `handles`, `userNameList`,
  `screenNames`: `twitterHandles`
- `username`, `handle`, `screenName`, as one string: `twitterHandles`
- `twitterUserIds`, `user_ids`, `userIdList`: `userIds`
- `user_id`, `userId`, as one string: `userIds`
- `startUrls`, `urls`, `targets`, `profileUrls`, `accountUrls`: `startUrls`
- `profileUrl`, as one string: `startUrls`
- `getFollowers`, `getFollowing`: `relations`
- `type` with `followers` or `following`: `relation`
- `maxResults`, `max_results`, `resultsLimit`, `count`: `maxItems`
- `scrapeAllResults`: no per-target cap

2 names mean something else here. In some Actors `maxFollowers` & `maxFollowing`
cap how many rows a run returns. In Xquik's X Follower Scraper they filter
profiles by their follower & following counts. Use `maxItems` to cap rows. The
Actor has no page unit, so replace `maxPages` with `maxItems`.

### Always use the latest build

Store runs use the `latest` build of Xquik's X Follower Scraper. In API calls,
omit the build override or pass `build=latest`. Update Tasks & integrations that
pin an older build. Pinned builds never move on their own.

## Output

Each profile is a JSON object. Compact mode returns normalized public fields,
schema version fields & source metadata when available.

The dataset & run-report schemas describe every returned field. Primitive fields
also carry examples for agents & generated integrations.

Sample values below are illustrative. Your rows carry live data at run time. A
compact row looks like this:

```json
{
  "schemaVersion": 1,
  "_schema_version": 1,
  "id": "44196397",
  "username": "elonmusk",
  "name": "Elon Musk",
  "description": "...",
  "followers": 180000000,
  "following": 500,
  "statusesCount": 42000,
  "mediaCount": 3200,
  "favouritesCount": 120000,
  "verified": true,
  "verifiedType": "blue",
  "location": "...",
  "url": "https://...",
  "profilePicture": "https://...",
  "coverPicture": "https://...",
  "createdAt": "Tue Jun 02 20:12:29 +0000 2009",
  "sourceTarget": "nasa",
  "sourceRelation": "followers",
  "sourceUrl": "https://x.com/nasa/followers"
}
```

Merge dedupe mode adds overlap fields:

```json
{
  "schemaVersion": 1,
  "_schema_version": 1,
  "id": "44196397",
  "username": "elonmusk",
  "sourceTargets": ["nasa", "spacex"],
  "sourceRelations": ["followers"],
  "sourceUrls": [
    "https://x.com/nasa/followers",
    "https://x.com/spacex/followers"
  ],
  "sourceTargetKeys": ["followers:nasa", "followers:spacex"],
  "overlapCount": 2
}
```

Export the Apify dataset as JSON, CSV, Excel or HTML.

## Run options

Set `maxTotalChargeUsd` in the Apify API to hard-cap spend. In Console, the same
limit is Max cost per run. Apify passes that limit to Xquik's X Follower Scraper
as `ACTOR_MAX_TOTAL_CHARGE_USD`. It stops before it accepts rows beyond the
limit. Leave `maxItems` empty to return as many profiles as the spend cap
allows. Set `maxItems` & `maxItemsPerTarget` only when you want fewer profiles
than the budget allows.

- Combine profile filters, such as `minFollowers`, `verifiedType` &
  `bioContains`, to narrow the billed dataset.
- By default, runs keep only unique profiles across targets. Set
  `dedupeAcrossTargets: false` to keep 1 row per target.
- Set `dedupeMode: "merge"` for 1 row per profile with every matching source
  target.
- Set `outputMode: "full"` for optional profile fields when available. These
  include pinned tweet IDs, entities & profile metadata.
- Set `outputMode: "raw"` or `includeRaw: true` to include a sanitized `raw`
  object beside normalized fields.
- Schedule repeat runs & store each dataset to compare profile IDs. Xquik
  monitors emit supported tweet & profile events, not follower-list changes.

## Empty, partial & stopped runs

Xquik's X Follower Scraper explains empty, partial & stopped runs with free
diagnostics. A successful Actor exit confirms delivery, not complete extraction.

An interrupted run writes a free `partial` diagnostic. Results already delivered
stay in the dataset. Read `availableResults`, `failedTargets`, `retryable` &
`nextAction` before you retry.

The run status says why the run stopped. It also counts charged results, skipped
duplicates & targets read. The status names every cause of an early stop.
`stopCauses` lists each cause with its own `message`, `retryable` &
`nextAction`. The causes are `target_not_found`, `target_protected`,
`target_failed` & `deadline_reached`. A missing account joins the list only when
another cause stopped the run. The run is `retryable` when any cause is.

X keeps the lists of a protected account private. That target gets
`target_protected` in 1 free diagnostic, & the run reads the other targets.

`failedTargets` counts targets that stopped after an error. These runs use
`completionReason: "partial_failure"`. Their delivered profiles stay billable
data rows.

The default Apify timeout is `0`, so runs have no time limit. The run continues
until it reaches the cap or runs out of profiles. You can still set a finite
timeout. Then `completionReason: "deadline_reached"` means that limit is near.
The run saves profiles & the report, then exits cleanly before the limit.
Delivered profiles bill once.

Runs with a problem always write `run-report`, including no-input and
invalid-input exits. `run-report` also has a `version` field with the exact
published Actor source version.

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
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): Scrapes
  real-time trends by location with rank, volume, query & WOEID. Use it when you
  track what is trending where. From $0.00015 per trend.
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

Xquik also offers 47 dashboard tools, 129 REST operations, signed webhooks & an
MCP server.

- [API documentation](https://docs.xquik.com/introduction): REST API guides
- [Followers API](https://docs.xquik.com/api-reference/x/followers): get an
  account's available followers
- [Following API](https://docs.xquik.com/api-reference/x/following): get who a
  user follows
- [List Members API](https://docs.xquik.com/api-reference/x/list-members):
  export members from a public X list
- [MCP server](https://docs.xquik.com/mcp/overview): discover & run supported
  JSON or text operations
- [Webhooks](https://docs.xquik.com/webhooks/overview): receive supported Tweet
  & profile events

## FAQ

Answers to common questions, then where to get help.

### Do I need an X API key?

No. You need no X API key, login or credentials.

### What limits a run?

Your item limit & your Apify spend limit stop the run. Apify account & platform
limits still apply.

### How fast is it?

The speed of Xquik's X Follower Scraper depends on target size, filters & X
availability. Its 2 [benchmark](#benchmark) runs reached 38.4 & 68.5 useful
profiles per second.

### Why does my run return fewer rows than my limit?

Filters such as `minFollowers`, `verifiedOnly` & `bioContains` apply before
writes. Relax them to return more results. Xquik's X Follower Scraper also
removes repeats across targets.

### How many followers can I scrape from a single account?

As many as X shows for that account. The run continues until your cap, your
spend limit or the end of the list. `maxItemsPerTarget` caps each target only.

### Does the Actor retry temporary failures?

Yes. It recovers from temporary X errors on its own. After a hard failure, the
run keeps its partial results.

### What happens near the Apify run time limit?

Xquik's X Follower Scraper adds no shorter deadline of its own. Before your
limit, it saves profiles, writes the report & exits. Rows that never reach the
dataset cost nothing.

### Can I resume where I left off?

Not yet. A new run on the same target starts from the beginning.

### Can I use the Apify API to run this?

Yes. See the [API tab](https://apify.com/xquik/x-follower-scraper/api) for
Python, JavaScript & cURL examples.

### Can I schedule recurring scrapes?

Yes. Use Apify's built-in
[scheduling](https://docs.apify.com/platform/schedules) to run this Actor on a
cron. Compare stored datasets to find follower changes.

### Is it legal to scrape X data?

Xquik's X Follower Scraper requests public X profile fields. Results can contain
personal data, including self-reported locations. Confirm a lawful purpose &
follow applicable privacy rules. Ask qualified counsel when uncertain.

### Where do I get help?

Open an issue in the Issues tab on the Actor page. You can also contact
<support@xquik.com> with the run ID.

### Where are the API docs?

Read the [API documentation](https://docs.xquik.com/introduction).
