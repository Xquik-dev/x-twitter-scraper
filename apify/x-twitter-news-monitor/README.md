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
most complete X data, and X (Twitter) News Monitor sorts news posts by format,
source attribution & relevance. Every other Apify Actor charges before filtering
or deduplicating. Xquik charges only for delivered, unique, filter-matching
results.

AI costs are included in the per-tweet price. You pay no AI provider, buy no tokens & bring no key.

Sort news posts on X (Twitter) by what they are & keep the original tweet data.
**X (Twitter) News Monitor with AI Analysis** collects posts about your topics,
then adds an AI-powered format, source attribution & relevance answer to every
post. Separate reporting from commentary & speculation, see whether a source is
named or linked, & keep only posts that concern the organizations, people or
topics you track.

- **Format** tells reporting, commentary, speculation, promotion & satire apart.
- **Attribution** shows whether a claim names a source, links one, is firsthand
  or has none.
- **Relevance** keeps posts about your targets & drops namesakes.
- **Complete source records** for every field the tweet exposes, including
  linked articles when available.

## How to classify news posts on X

1. Add search terms such as `Nvidia earnings lang:en -filter:retweets`, news
   account handles or tweet IDs.
2. Set `maxItems` & extraction filters such as date bounds, `filter:news` or
   minimum reposts.
3. Put the organizations, people or topics you track & their aliases under
   `analysis.targets`, & narrow the topic in `analysis.context`.
4. Run the Actor & open the dataset.

```json
{
  "searchTerms": ["Nvidia earnings lang:en -filter:retweets"],
  "maxItems": 300,
  "analysis": {
    "targets": [{ "name": "Nvidia", "aliases": ["NVDA", "Jensen Huang"] }],
    "context": "Financial & product news about the chip maker."
  }
}
```

### What the Actor answers

| Question    | Answer                                                                      |
| ----------- | --------------------------------------------------------------------------- |
| Format      | Reporting, commentary, speculation, promotion, satire, unrelated or unclear |
| Attribution | Named, linked, firsthand, absent or unclear                                 |
| Relevance   | Probability that the reported event concerns your targets                   |

Classification does not verify facts. A named source is not a credible source;
attribution describes what the post presents.

## Pricing

AI costs are included in the per-tweet price. You pay no AI provider, buy no tokens & bring no key.

From $0.0003 per successfully analyzed tweet, with no start fee. Collection is
included, & the documented analysis allowance is 8 questions, 8,000 bytes per
question definition & 12,000 bytes of context per tweet. Extraction filters &
deduplication run before analysis, so filtered-out & duplicate rows are never
analyzed or charged. Failed & skipped analyses & diagnostic rows have no result
charge. Apify platform usage is billed separately by Apify & appears on the
Pricing tab.

## Input & output examples

The input above is copy-ready. Output rows look like this (abbreviated):

```json
{
  "tweet": { "id": "2100673144985993441", "text": "…", "retweetCount": 40 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      {
        "questionId": "format",
        "type": "choice",
        "value": "reporting",
        "confidence": 0.9
      },
      {
        "questionId": "attribution",
        "type": "choice",
        "value": "named",
        "confidence": 0.84
      },
      { "questionId": "relevance", "type": "probability", "probability": 0.98 }
    ]
  }
}
```

Each result contains `tweet` & `analysis`. Answers include types, question
versions & available probabilities. When a post links an X Article, the analysis
fetches that article's title, preview & text blocks as context, and
`analysis.contextAvailability.article` reports `text_blocks`, `summary` (title &
preview only) or `not_supplied`. A failed or skipped analysis keeps the
collected tweet with an empty answer list & a `reason`. Free diagnostics in the
key-value store explain invalid inputs, missing results & interrupted
collection, & the run report separates collected rows, charged analyses &
pending charges.

## Run summary & flat answers

Each run writes an `analysis-summary` record to its key-value store & repeats it
under `results.analysisSummary` in the run report. It counts analyzed, failed &
skipped rows, sums engagement, and summarizes every question. The `format` split
separates reporting from commentary, speculation, promotion & satire;
`attribution` counts named, linked, firsthand & absent sources; `relevance`
counts posts about each target, with `targets` giving mentions per target and
each target's `top` listing its most engaged posts per answer category. Numbers
are rounded to 4 decimals; empty runs report zero counts & `null` means.
`sourceDomains` counts linked domains across the run, each `targets` entry
carries `choices` with the format & attribution split for posts about that
target, and `monitor.changedRows` lists posts whose decisions moved since the
baseline. Every row also lists `sourceDomains`, the hostnames it links to,
`cashtags` such as `$NVDA` found in its text, and the summary's `monitor` block
counts comparison statuses & lists up to 50 changed rows when
`monitor.baselineDatasetId` is set.

Every result row also carries `answers`, a flat map from question ID to the
chosen category, score, or probability. The `Flat answers` dataset view & CSV or
Excel exports show one column per question beside the tweet, so spreadsheets
need no JSON parsing. Failed & skipped rows carry an empty map.

## Compare with an earlier run

Pass `monitor.baselineDatasetId`, the dataset ID of a completed earlier run with
the same analysis settings, and every row gains a `monitor` object: `first_run`
without a baseline, `new_to_baseline` for tweets the earlier run did not have,
`unchanged` or `changed` for tweets it had, with `changes` listing each format,
attribution or relevance decision that moved from `previous` to `current`.
Decisions compare by category, rounded score level, or yes/no at 0.5, and a
decision only counts as changed when the answer clearly moves: the earlier
category falls below 0.4 probability, a score moves at least 0.6 levels, or a
yes/no probability lands at least 0.1 from the threshold. Near-tie jitter
between runs stays unchanged. Baselines above `maxBaselineRows` (default
100,000) or from different settings stop the run before collection with a
diagnostic row.

## Task examples

Choose from 50 public tasks. Each starts from a real English search with a
bounded `maxItems`, ready-made targets & context, & the overview dataset view.
Edit the search or targets before running.

- [Classify Nvidia news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-nvidia-news-posts-on-x)
- [Classify X Article news posts](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-x-article-news-posts)
- [Classify OpenAI news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-openai-news-posts-on-x)
- [Classify Apple news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-apple-news-posts-on-x)
- [Classify Tesla news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-tesla-news-posts-on-x)
- [Classify SpaceX news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-spacex-news-posts-on-x)
- [Classify Boeing news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-boeing-news-posts-on-x)
- [Classify Pfizer news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-pfizer-news-posts-on-x)
- [Classify Moderna news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-moderna-news-posts-on-x)
- [Classify ExxonMobil news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-exxon-news-posts-on-x)
- [Classify Federal Reserve news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-federal-reserve-news-posts-on-x)
- [Classify European Central Bank news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-european-central-bank-news-posts-on-x)
- [Classify Bank of England news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-bank-of-england-news-posts-on-x)

The remaining tasks cover more brands, topics & markets on the Actor page.

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
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  Answers your own category, score & yes/no questions for every tweet with AI.
  Use it when the preset analyses do not fit your labels. From $0.0003 per
  analyzed tweet.

## FAQ & support

### Can I use my own questions?

Yes. Custom `analysis.questions` replace the defaults: 1-8 `choice`, `score` or
`probability` questions with 2-255 categories or at least 2 ordered levels.

### Why did a row come back with `analysis.status` of `failed` or `skipped`?

The tweet was collected & delivered, but AI-powered analysis did not complete.
`analysis.reason` names the cause, such as `context_limit` when the tweet & its
context exceed `maxContextBytes`, or `service_unavailable` after retries. These
rows carry no result charge. Raise `maxContextBytes` (up to 12,000) or rerun the
affected IDs.

### Does the analysis verify facts?

No. Answers describe what the post expresses & how it is framed. Probabilities
express model confidence, not truth. Review important classifications against
the original tweet, which every row keeps.

### Which languages work?

Extraction supports every language X serves. Analysis is validated on English
customer scenarios first; other supported languages return answers with the same
structure, & uncertainty stays explicit through `unclear` categories &
probabilities.

### How do I limit cost?

Filters, deduplication & `maxItems` run before analysis, so only unique,
filter-matching tweets are analyzed & charged. Use precise search operators,
date bounds & engagement floors, & start with a small `maxItems` to check answer
quality before a large run.

### Where do I get help?

Open an issue on the Actor page or contact support@xquik.com with the run ID.
Free diagnostics in the key-value store explain empty, partial or interrupted
runs.

Xquik is an independent third-party service. Not affiliated with X Corp.
"Twitter" and "X" are trademarks of X Corp.
