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
most complete X data. Xquik's X Community Scraper collects Community info,
posts, media, searches, members & moderators, & finds Communities by keyword or
topic. Most other Apify Actors charge before filtering or deduplicating. Xquik
charges only for delivered, unique, filter-matching results.

Collect Twitter Community info, posts, media, keyword matches, members &
moderators from Community URLs or IDs. Find Communities by keyword or topic, or
list the ones X suggests. You pay **$0.00015 per delivered row**, & Apify bills
platform usage separately. You need no X API key or login.

> Xquik is an independent third-party service. Not affiliated with X Corp.
> "Twitter" and "X" are trademarks of X Corp.

## What does X Community Scraper do?

Xquik's X Community Scraper reads public X (Twitter) Communities from their URLs
or IDs. It returns each Community's info, posts, media, keyword matches, members
& moderators. It also finds Communities by keyword or topic, & lists the ones X
suggests.

### Key features

- Read many Communities & resources in 1 run.
- Get Community info with rules, join question, creator, admin & topic.
- Collect posts newest first, or the Top posts X ranks highest.
- Collect the Media tab, or search a Community's posts by keyword.
- Export members & moderators, or find members by name.
- Find Communities by keyword or topic, with their full records.
- Filter posts by date, language, media & engagement.
- Filter members by audience size, account age & verification.
- Filters & duplicate removal run before billing.
- Runs keep delivered rows & progress when Apify restarts them.

### Use cases

- Build lead lists from the members of a niche Community.
- Track product feedback & feature requests in a user Community.
- Find launches, hiring posts & funding news among founders.
- Compare Communities by size, topic & activity.
- Read a Community's rules before you post in it.
- Find the moderators & most followed members of a Community.
- Collect posts with images or videos for creative research.

### What data can X Community Scraper extract?

Community rows use `resultType: "community"`. These are the main fields:

| Field             | Description                               |
| ----------------- | ----------------------------------------- |
| `id`              | Community ID                              |
| `name`            | Community name                            |
| `description`     | Community description                     |
| `url`             | Community URL                             |
| `member_count`    | Member count                              |
| `moderator_count` | Moderator count                           |
| `rules`           | Community rules                           |
| `question`        | What the Community asks a user who joins  |
| `primary_topic`   | The topic X files the Community under     |
| `searchTags`      | Tags X finds the Community by             |
| `creator`         | The creator's public profile              |
| `admin`           | The admin's public profile                |
| `membersFacepile` | Members X previews on the Community page  |
| `is_nsfw`         | Whether the Community is marked sensitive |
| `banner`          | Banner URL, size & main colors            |
| `sourceTarget`    | The URL, ID, keyword or topic you entered |

Each resource adds rows of its own type:

| `resultType`         | Resource or input        | One row per              |
| -------------------- | ------------------------ | ------------------------ |
| `community`          | `info`, keywords, topics | Community                |
| `communityTweet`     | `tweets`, `search`       | Post                     |
| `communityMedia`     | `media`                  | Post with photo or video |
| `communityMember`    | `members`, `memberNames` | Member                   |
| `communityModerator` | `moderators`             | Moderator                |
| `communityTopic`     | `listTopics`             | Topic                    |

Post rows carry `text`, `createdAt`, `likeCount`, `replyCount`, `retweetCount`,
`viewCount`, `media` & the `author` profile. Member & moderator rows carry the
profile fields, such as `username`, `followers`, `verified` & `communityRole`.

## How do I use X Community Scraper to scrape Community data?

Follow these steps in Apify Console:

1. Open a [task example](#task-examples) or the Input tab.
2. Paste Community URLs into `startUrls` or IDs into `communityIds`.
3. Pick `resources` & add filters, such as `sinceDate` or `minLikes`.
4. Set `maxItems`, then click Start.
5. Export the dataset as JSON, CSV, Excel or HTML.

Each recipe below is a complete input.

### Get Community info & recent posts

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["info", "tweets"],
  "maxItems": 200
}
```

`startUrls` takes each URL as a plain string or as a `{ "url": "..." }` object:

```json
{
  "startUrls": [
    "https://x.com/i/communities/1493446837214187523",
    { "url": "https://x.com/i/communities/1493446837214187523" }
  ]
}
```

### Collect the Top posts

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["tweets"],
  "postsOrder": "Top",
  "minLikes": 50,
  "maxItems": 100
}
```

Set `postsOrder` to `Top` for the posts X ranks highest. Add `"media"` to
`resources` for the Media tab.

### Search a Community's posts

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["search"],
  "query": "pricing",
  "queryType": "Latest",
  "maxItems": 100
}
```

### Export members & moderators

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["members", "moderators"],
  "minFollowers": 1000,
  "maxItems": 1000
}
```

Member filters apply to member & moderator rows. Filtered rows never reach the
dataset, so you never pay for them.

### Find members by name

```json
{
  "communityIds": ["1493446837214187523"],
  "memberNames": ["marckohlbrugge"],
  "maxItems": 100
}
```

X checks up to 10 matching accounts per name, as x.com's member search does.
Each member found is 1 `communityMember` row with its `communityRole`. A run
with `memberNames` reads no other resource unless `resources` names it.

### Find Communities by keyword or topic

```json
{
  "searchTerms": ["artificial intelligence"],
  "topics": ["Technology"],
  "maxItems": 100
}
```

Each found Community carries its rules, creator, admin & member profiles. Set
`includeDetails` to `false` for a faster run with the short record. Turn on
`includeSuggested` for the Communities X suggests, which can differ per run, or
`listTopics` for every topic & its subtopics.

## Task examples

Choose from 50 public tasks. Each has a bounded input & a matching dataset view.
Edit a task before you run it.

- [Get an X Community overview](https://apify.com/xquik/x-community-scraper/examples/get-an-x-community-overview)
- [Get X Community details with recent posts](https://apify.com/xquik/x-community-scraper/examples/get-community-details-with-recent-posts)
- [Find top technology posts in an X Community](https://apify.com/xquik/x-community-scraper/examples/find-top-technology-posts-in-a-community)
- [Export X Community members](https://apify.com/xquik/x-community-scraper/examples/export-x-community-members)
- [Export verified members of an X Community](https://apify.com/xquik/x-community-scraper/examples/export-verified-community-members)
- [List the moderators of an X Community](https://apify.com/xquik/x-community-scraper/examples/list-x-community-moderators)
- [Compare developer Communities by size & topic](https://apify.com/xquik/x-community-scraper/examples/compare-developer-communities-by-size)
- [Read an X Community rulebook before you post](https://apify.com/xquik/x-community-scraper/examples/read-community-rules-before-you-post)
- [Find funding posts in a startup Community](https://apify.com/xquik/x-community-scraper/examples/find-funding-posts-in-a-startup-community)
- [Find hiring posts in a software engineering Community](https://apify.com/xquik/x-community-scraper/examples/find-hiring-posts-in-a-software-community)
- [Find startup Community members with large audiences](https://apify.com/xquik/x-community-scraper/examples/find-startup-community-members-with-big-audiences)
- [Audit a small X Community end to end](https://apify.com/xquik/x-community-scraper/examples/audit-a-small-community-end-to-end)

## How much does it cost to scrape X Communities?

Xquik's X Community Scraper costs $0.00015 per delivered row on every Apify
plan. Apify bills your platform usage separately. Xquik applies one charge per
delivered data row. Diagnostics are free in the `diagnostics` output.

- You need no Xquik subscription.
- You pay no separate start, Community, resource or query fee.
- A found Community costs 1 row, with or without its full record.
- Filters & deduplication run before billing. You never pay for filtered or
  duplicate rows.
- Apify maximum-total-charge settings cap delivered rows.

A run that hits a problem, or a large run, also writes a `run-report` record. A
small run that goes well skips it & saves Apify usage. Turn on
`alwaysSaveRunRecords` to write it on every run.

To cap what a run can spend, see [Run options](#run-options).

## Empty, partial & stopped runs

Xquik's X Community Scraper explains empty, partial & stopped runs for free. The
run status says why the run stopped. It also counts charged results & targets
read.

### Empty results

An empty run's status says to check your targets & filters. Filtered rows never
use up your result limit. A run that reads every target & gets no row back
writes no record. Its status says why & what to change. The Actor returns only
public Communities that X exposes. Available fields vary by Community.

### Partial runs

Interrupted extraction writes a free `partial` diagnostic. Delivered rows stay
in the dataset. Read `availableResults`, `failedTargets`, `retryable` &
`nextAction` before you retry. A successful Actor exit confirms delivery, not
complete extraction.

### Stop causes

The run status names every cause of an early stop. `stopCauses` lists each cause
with its own `message`, `retryable` & `nextAction`. The causes are
`target_not_found`, `target_failed`, `pagination_safety_limit` &
`deadline_reached`. A missing target joins the list only when another cause
stopped the run. The run is `retryable` when any cause is. The Actor adds no
time limit of its own.

## Input

The Input tab lists every option. Give Community URLs or IDs, keywords, topics,
or turn on `includeSuggested` or `listTopics`. Every other field is optional.

| Field                          | What it does                                                 |
| ------------------------------ | ------------------------------------------------------------ |
| `startUrls`                    | Community URLs on x.com                                      |
| `communityIds`                 | Numeric Community IDs                                        |
| `resources`                    | `info`, `tweets`, `media`, `search`, `members`, `moderators` |
| `query`                        | Keyword for the `search` resource                            |
| `queryType`                    | `Latest` or `Top` order for keyword search                   |
| `postsOrder`                   | `Latest` or `Top` order for posts                            |
| `memberNames`                  | Names or usernames to find among members                     |
| `searchTerms`                  | Keywords to find Communities by                              |
| `topics`                       | Topic names or IDs, such as `Technology`                     |
| `includeSuggested`             | Add the Communities X suggests to join                       |
| `listTopics`                   | Add every Community topic & its subtopics                    |
| `includeDetails`               | Add full records to Communities found by keyword or topic    |
| `maxItems`                     | Cap on delivered rows across the whole run                   |
| `maxItemsPerTarget`            | Cap on rows for each Community resource                      |
| `sinceDate`, `untilDate`       | Keep posts inside a date window                              |
| `language`                     | Keep posts in 1 language code                                |
| `mediaType`                    | Keep posts with images, videos, GIFs, links or none          |
| `minViews`, `minLikes`         | Keep posts above a view or like count                        |
| `minReplies`, `minRetweets`    | Keep posts above a reply or repost count                     |
| `nativeRetweets`               | Keep only native reposts                                     |
| `verifiedOnly`                 | Keep verified authors, members or moderators                 |
| `minFollowers`, `maxFollowers` | Keep members inside an audience range                        |
| `minAccountAgeDays`            | Keep members at least this many days old                     |
| `dedupeAcrossTargets`          | Drop rows repeated across Communities before billing         |

### Pick the right inputs

- For a quick look, keep the default `info` & `tweets` resources.
- For lead lists, pick `members` with `minFollowers` & `verifiedOnly`.
- For product research, pick `search` with a `query` such as `bug` or `pricing`.
- For creative research, pick `media` & set `mediaType`.
- To discover Communities, send `searchTerms` or `topics` without IDs.

## Output

Each row is a JSON object. Every row includes `sourceTarget` for the input
Community, keyword or topic. Xquik's X Community Scraper keeps source fields &
invents no values. The dataset schema gives each field a title & description.

Examples use sample values. Results reflect live data. A Community info row
looks like this:

```json
{
  "resultType": "community",
  "sourceTarget": "1493446837214187523",
  "id": "1493446837214187523",
  "name": "Sample Community",
  "description": "A place to share what you build.",
  "member_count": 1200,
  "moderator_count": 4,
  "primary_topic": "Technology"
}
```

Export the dataset as JSON, CSV, Excel or HTML.

## Run options

- Set Apify's max total charge to cap run cost. Leave `maxItems` high to get the
  most rows that budget allows.
- Set `maxTotalChargeUsd` in the Apify API, or Max cost per run in Console.
- Put all your Communities in 1 run. Each run pays Apify the same start cost.
- `maxItemsPerTarget` caps the rows of each Community resource.
- `maxConcurrency` sets how many Community resources run at once. The default is
  the fastest safe setting.

Select `latest` for every run to get every published fix. Saved tasks &
schedules keep their own build choice, so keep it on `latest`.

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
- [Community Info API](https://docs.xquik.com/api-reference/x/community-info):
  get 1 Community's record
- [Community Posts API](https://docs.xquik.com/api-reference/x/community-tweets):
  get a Community's posts
- [Community Members API](https://docs.xquik.com/api-reference/x/community-members):
  export a Community's members
- [Find Communities API](https://docs.xquik.com/api-reference/x/community-find):
  find Communities by keyword
- [MCP server](https://docs.xquik.com/mcp/overview): discover supported tools
- [Webhooks](https://docs.xquik.com/webhooks/overview): signed event delivery

## FAQ

Answers to common questions, then where to get help.

### Do I need an X API key or login?

No. Xquik's X Community Scraper needs no X API key, login or credentials.

### How do I find a Community's ID?

Open the Community on x.com. The ID is the number after `/i/communities/` in the
URL. You can also paste the whole URL into `startUrls`.

### Can I export X Community members to CSV or Excel?

Yes. Pick the `members` resource, then export the dataset as CSV, Excel, JSON or
HTML.

### Can I find a Community without its ID?

Yes. Send keywords in `searchTerms` or topics in `topics`. Each found Community
is 1 row with its full record.

### Can I get the Top posts of a Community?

Yes. Set `postsOrder` to `Top`. Add `minLikes` or `minViews` to keep only the
most popular posts.

### How many Communities can I scrape in 1 run?

As many as you list. `maxItems` & your Apify spend limit cap the rows.

### Does it read private Communities?

No. Xquik's X Community Scraper returns only public Communities that X exposes.

### Is it legal to scrape X Communities?

Xquik's X Community Scraper requests public X fields. Results can contain
personal data. Confirm a lawful purpose & follow applicable privacy rules. Ask
qualified counsel when uncertain.

### Why did my run return no results?

Read the run status first. An empty run's status says to check your targets &
filters. The free `diagnostics` output appears when something needs attention.
Its `stopCauses` gives each cause a `nextAction` to follow. The run lists each
input it cannot read & says how to fix it.

### Can I use the API, schedules & integrations?

Yes. Choose from 50 public tasks or the Xquik REST API. The
[API tab](https://apify.com/xquik/x-community-scraper/api) has Python,
JavaScript & cURL examples. Apify
[schedules](https://docs.apify.com/platform/schedules) run Xquik's X Community
Scraper on a cron. Agents use
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
