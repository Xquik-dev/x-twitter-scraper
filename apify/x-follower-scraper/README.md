<p align="center">
  <strong>English</strong> ·
  <a href="README.es.md">Español</a> ·
  <a href="README.tr.md">Türkçe</a> ·
  <a href="README.zh-CN.md">简体中文</a> ·
  <a href="README.ja.md">日本語</a> ·
  <a href="README.ko.md">한국어</a> ·
  <a href="README.de.md">Deutsch</a> ·
  <a href="README.fr.md">Français</a> ·
  <a href="README.it.md">Italiano</a>
</p>

<table align="center"><tr><td align="center">
<a href="https://youtu.be/4UOSpoOoC3Y?t=367"><img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" width="720" alt="Framer connects Xquik MCP to coding agents"></a><br>
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">Watch how Framer uses Xquik scrapers with Claude Code, Codex, Cursor, and more, from 6:07.</a>
</td></tr></table>

Xquik is the world's fastest & cheapest X (Twitter) scraper service with the
most complete X data, and X Follower Scraper collects followers, following, list
members, subscribers & community members. Every other Apify Actor charges before
filtering or deduplicating. Xquik charges only for delivered, unique,
filter-matching results.

Scrape X (Twitter) followers, following, verified followers, List members, List
subscribers, and Community members for **from $0.00015 per delivered profile on
every Apify plan**. Apify bills platform usage separately. No X login, start
fee, or query fee.

>

## Incomplete extraction

Interrupted extraction writes a free `partial` diagnostic. Available results
remain intact. Read `availableResults`, `failedTargets`, `retryable`, and
`nextAction` before retrying. A successful Actor exit confirms delivery, not
complete extraction.

Xquik is an independent third-party service. Not affiliated with X Corp.

> "Twitter" and "X" are trademarks of X Corp.

## What does X Follower Scraper do?

X Follower Scraper returns available public profile data for followers,
following, Lists, and Communities. Each row includes its source target and
relation.

### Core behavior

- Filters and duplicate removal run before billing.
- One run accepts handles, numeric IDs, URLs, and short paths.
- Merge mode records shared profiles, sources, relations, and `overlapCount`.
- Automatic cursors request up to 300 profiles per page.
- Older cursors keep their 200-profile limit and restart when expired.
- Page logs include `fetchDurationMs`, `processingDurationMs`, `pushDurationMs`,
  `statusDurationMs`, and `fullPageDurationMs` without repeating targets.
- Checkpoints preserve accepted rows, timing, and failure counts after restarts.

## Task examples

Choose from 50 public tasks. Each has a bounded input and a matching dataset
view. Every task opens with a real audience or filter. Edit it before running.

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
verification, availability, affiliates, professional data, and biographies.
Source attribution, entities, and pinned tweet IDs remain available. See OpenAPI
for the exact fields.

Set `outputMode: "raw"` or `includeRaw: true` to include a `raw` copy of the
safe source profile. Compact mode remains the default.

`verifiedOnly` accepts public Blue and legacy verified profiles. Conflicting
source flags never let a false value hide a true verification state.

Viewer-relative state belongs to Xquik's fetch account, not your dataset.
Follow, block, mute, DM, notification, and similar viewer flags are always
removed, including from raw output.

## How much does it cost to scrape X followers?

Every Apify plan costs `$0.00015` per delivered profile. Apify bills your
platform usage separately. Xquik applies one charge per delivered data row.
Diagnostics are free in the `diagnostics` output. No separate Xquik subscription
applies. No start fee applies. Each run writes a `run-report` record with
`estimatedChargeUsd` calculated from the live pay-per-event price Apify exposes
to the Actor. Every outcome writes `run-report`, including no-input and
invalid-input exits. Its `version` field reports the exact published Actor
source version.

`failedTargets` counts targets that stopped after a read failure. Accepted
profiles remain billable data rows. These runs use
`completionReason: "partial_failure"`. Fast server-side pagination follows the
same reporting contract.

The default Apify timeout is `0`. Runs have no time limit. The Actor follows
every live cursor until the cap or source ends. A caller can still set a finite
timeout. Then `completionReason: "deadline_reached"` means that limit is near.
The Actor reserves the final 15 seconds for checkpoints, rows, reports, and a
clean exit. Valid profiles remain delivered and bill once. Unfinished pagination
remains resumable.

Independent targets run concurrently. Each target keeps ordered cursor
pagination. Dataset writes keep caps, deduplication, attribution, and billing
atomic.

- Starts, targets, and relation selection add no separate query charge.
- Filters (`minFollowers`, `verifiedOnly`, `bioContains`, `locationContains`,
  `minFollowing`, `maxFollowing`, `minStatuses`, `maxStatuses`,
  `minAccountAgeDays`, `verifiedType`, `usernameContains`, `hasWebsite`,
  `hasLocation`) run before a profile enters your dataset.
- With `dedupeAcrossTargets: true`, repeats are removed before writing.
- Rows rejected by the dataset are not billed.
- No-input, invalid-input, and zero-output runs write 1 actionable record to the
  free `diagnostics` output.

Set `maxTotalChargeUsd` in the Apify API, or Max cost per run in Console, to
hard-cap spend. Apify exposes that limit to the Actor as
`ACTOR_MAX_TOTAL_CHARGE_USD`, and the Actor stops before accepting rows beyond
it. Leave `maxItems` empty to let the run return as many profiles as the spend
cap allows. Set `maxItems` only when you want a smaller result cap than the
budget would allow.

## How do I use X Follower Scraper to scrape follower data?

### 1. Paste profile or list URLs

Paste profile, List, or Community URLs. The scraper routes each URL to its
relation:

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

### 2. Bulk handles

Shorthand for many `/<handle>/followers` targets. Usernames accept `@` or no
prefix:

```json
{
  "twitterHandles": ["elonmusk", "nasa", "openai"],
  "relation": "followers",
  "maxItems": 1000
}
```

Set `relation` to `followers`, `following`, or `verified_followers` to switch
what is scraped for every handle.

Aliases accepted for the same input include `username`, `usernames`, and
`user_names`.

### 3. Multi-relation runs

```json
{
  "usernames": ["nasa"],
  "relations": ["followers", "following"],
  "maxItems": 1000
}
```

You can also use booleans such as `getFollowers`, `getFollowing`,
`getVerifiedFollowers`, `getListMembers`, `getListFollowers`, and
`getCommunityMembers`.

### 4. Scrape by numeric user, list, or community IDs

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

Aliases accepted for numeric user IDs include `twitterUserIds` and `user_ids`.

`relation` applies to numeric user IDs. List IDs default to members. Community
IDs always use members. `maxItemsPerTarget` prevents the first large target from
consuming the global limit.

### 5. Filter before you pay

Apply filters so only matching profiles enter your dataset:

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

The Actor may inspect more profiles than it writes. You only pay for rows that
pass every filter and enter your dataset.

Separate `bioContains` alternatives with commas or new lines. A profile passes
when its bio contains any supplied term. Matching stays case-insensitive.

### 6. Find audience overlap

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

The output contains one row per unique profile. Shared profiles include
`sourceTargets`, `sourceRelations`, `sourceUrls`, `sourceTargetKeys`, and
`overlapCount`, so you can sort by overlap or export directly to CSV. Keep
`maxItems` high enough to let every target contribute rows; use
`maxItemsPerTarget` to control depth per account.

### Accepted URL shapes

| URL                                         | Relation                                |
| ------------------------------------------- | --------------------------------------- |
| `https://x.com/<handle>/followers`          | `followers`                             |
| `https://x.com/<handle>/verified_followers` | `verified_followers`                    |
| `https://x.com/<handle>/following`          | `following`                             |
| `https://x.com/<handle>`                    | default `relation` (followers if unset) |
| `https://x.com/i/lists/<id>/members`        | `list_members`                          |
| `https://x.com/i/lists/<id>/followers`      | `list_followers`                        |
| `https://x.com/i/lists/<id>`                | `list_members`                          |
| `https://x.com/i/communities/<id>/members`  | `community_members`                     |
| `https://x.com/i/communities/<id>`          | `community_members`                     |
| `<handle>/followers`                        | `followers`                             |
| `<handle>/following`                        | `following`                             |
| `<handle>/verified_followers`               | `verified_followers`                    |
| `lists/<id>/members`                        | `list_members`                          |
| `lists/<id>/followers`                      | `list_followers`                        |
| `communities/<id>/members`                  | `community_members`                     |

`twitter.com` and `mobile.twitter.com` are also accepted everywhere.

## Input

See the **Input** tab for the complete list of options. All fields are optional
except at least one of: `startUrls`, `twitterHandles`, `userIds`, `listIds`, or
`communityIds`, or their documented aliases.

Examples:

- Add a competitor handle to `twitterHandles` with `relation: "followers"`.
- Paste `https://x.com/<handle>/verified_followers` into Start URLs for verified
  profiles.
- Paste a list URL into Start URLs to audit its members.
- Add 2+ handles. Set `dedupeMode: "first"` to keep only the first matching
  profile row, or use `dedupeMode: "merge"` to keep one row with all matching
  source targets.

### Console & API input UX

The Console exposes these controls:

- The Start URLs field accepts URL strings or `{ "url": "..." }` objects. Its
  JSON editor preserves both API formats.
- Relation, Output Mode, and Dedupe Mode are validated selects.
- Relations is a validated multi-select for multi-relation runs.
- Result limits accept whole numbers of 1 or more.
- Numeric profile filters accept whole numbers of 0 or more.

Use canonical fields in new integrations. Compatibility aliases remain available
in JSON, API, SDK, automation, and task inputs. This includes `outputVariant`
and `includeRaw` as Output Mode aliases. It also includes `dedupeAcrossTargets`
as a Dedupe Mode alias. The visual form hides aliases that duplicate a canonical
control. Existing JSON and saved task inputs keep their current behavior.

### Always use the latest build

Store runs use the Actor's `latest` build configuration. API clients should omit
the build override or pass `build=latest`. Update Tasks and integrations that
pin an older build. Pinned builds never move automatically.

## Output

Each profile is a JSON object. Compact mode returns normalized public fields,
schema version fields, and source metadata when available:

Dataset and run-report schemas describe every returned field. Primitive fields
also include examples for agents and generated integrations.

Sample values are illustrative. Responses reflect source data at run time.

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

Export as JSON, CSV, Excel, or HTML from the Apify dataset.

## Run options

- Set Apify max total charge to cap run cost. Leave `maxItems` empty for maximum
  rows within that budget, or set `maxItems` and `maxItemsPerTarget` when you
  want fewer profiles.
- Combine `minFollowers`, `verifiedOnly`, `verifiedType`, `minStatuses`,
  `usernameContains`, `bioContains`, `locationContains`, `hasWebsite`, and
  `hasLocation` to narrow the billed dataset.
- Set `dedupeMode: "first"` when scraping multiple competitor handles to get
  only unique profiles across all targets.
- Set `dedupeMode: "merge"` to get one row per profile with every matching
  source target attached.
- Set `outputMode: "full"` to get optional profile fields such as pinned tweet
  IDs, entities, and profile metadata when available.
- Set `outputMode: "raw"` or `includeRaw: true` to include a sanitized `raw`
  object alongside normalized fields.
- Schedule repeat Actor runs and store each dataset to compare profile IDs.
  Xquik monitors emit supported tweet and profile events, not follower-list
  changes.

## Use cases

- Export competitor followers for lead research.
- Compare audiences across your account, competitors, and public figures.
- Filter follower count and verification to find matching profiles.
- Export members of relevant X Communities.
- Build public social-network datasets for research.
- Segment follower bases by bio keyword, location, or profile type.

## Data responsibility

The Actor requests public X profile fields. Results can contain personal data,
including self-reported locations. Confirm a lawful purpose and follow
applicable privacy rules. Ask qualified counsel when uncertain.

## Related Xquik Actors

Every Xquik Actor shares the same extraction engine, filter-first billing &
diagnostics. Pick the one that matches the data you need.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): Scrapes tweets
  from searches, profile timelines, Lists & tweet IDs with 50+ filters & flat
  exports. Use it when you need tweet data without analysis. From $0.00015 per
  row.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): Scrapes
  profiles plus their posts, replies, media & likes from handles, IDs or URLs.
  Use it when you start from accounts rather than searches. From $0.00015 per
  row.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): Scrapes replies,
  comments & whole conversations under posts with 25+ filters. Use it when you
  need the discussion beneath tweets. From $0.00015 per row.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): Scrapes
  replies, quotes, retweeters, likers & threads for post URLs or IDs in bulk.
  Use it when you measure who engaged with posts. From $0.00015 per row.
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

## Need more than scraping?

Xquik also provides 47 dashboard tools, 129 REST operations, signed webhooks,
and an MCP server.

- [API documentation](https://docs.xquik.com/introduction): REST API guides
- [Followers API](https://docs.xquik.com/api-reference/x/followers): fetch an
  account's available followers
- [Following API](https://docs.xquik.com/api-reference/x/following): get who a
  user follows
- [List Members API](https://docs.xquik.com/api-reference/x/list-members):
  export members from a public X list
- [MCP server](https://docs.xquik.com/mcp/overview): discover and run supported
  JSON or text operations
- [Webhooks](https://docs.xquik.com/webhooks/overview): receive supported Tweet
  and profile events

## FAQ

**Do I need an X API key?** No. This scraper uses its own infrastructure. No
login or credentials required.

**What limits a run?** Your requested item limit and Apify spend limit stop the
run. Apify account and platform limits still apply.

**How fast is it?** Runtime depends on target size, filters, and upstream
availability. Deep filtered runs checkpoint Console progress every 5 pages. This
reduces non-data traffic between page fetches.

**Why is my run returning fewer rows than `maxItems`?** Filters such as
`minFollowers`, `verifiedOnly`, and `bioContains` apply before writes. Relax
filters to return more results.

**How many followers can I scrape from a single account?** X paginates large
accounts in batches. Raise Apify's run time limit to fetch more pages.
`maxItemsPerTarget` only caps each target.

**Does the Actor retry temporary failures?** Yes. It makes up to 3 attempts per
page for timeouts, 429, and 5xx responses. It honors `Retry-After` when present.
Otherwise, it uses exponential backoff. Hard failures preserve partial results.

**What happens near the Apify run time limit?** The Actor adds no shorter run
deadline. It uses Apify's configured limit and keeps the final 15 seconds for
finalization. It flushes profiles, checkpoints pagination, writes the report,
and exits. Rows not accepted by the dataset are not billed.

**Can I resume where I left off?** Resume cursor input is not exposed yet.
Re-running the same target starts from its first available page.

**Can I use the Apify API to run this?** Yes. See the
[API tab](https://apify.com/xquik/x-follower-scraper/api) for Python,
JavaScript, and cURL examples.

**Can I schedule recurring scrapes?** Yes. Use Apify's built-in
[scheduling](https://docs.apify.com/platform/schedules) to run this Actor on a
cron. Compare stored datasets to find follower changes.

**Where do I report issues?** Use the Issues tab on this Actor's page.

**Where are the API docs?** Read the
[API documentation](https://docs.xquik.com/introduction).
