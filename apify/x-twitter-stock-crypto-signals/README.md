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

# X (Twitter) Stock & Crypto AI Trading Signals | $0.3/1K Tweets

<table align="center"><tr><td align="center">
<a href="https://youtu.be/4UOSpoOoC3Y?t=367"><img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" width="720" alt="Framer connects Xquik MCP to coding agents"></a><br>
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">Watch how Framer uses Xquik scrapers with Claude Code, Codex, Cursor, and more, from 6:07.</a>
</td></tr></table>

Xquik is the world's fastest & cheapest X (Twitter) scraper service with the
most complete X data, and X (Twitter) Stock & Crypto AI Trading Signals turns
tweets into bullish, bearish, neutral or mixed stances per ticker & coin. Every
other Apify Actor charges before filtering or deduplicating. Xquik charges only
for delivered, unique, filter-matching results.

Read the stance behind stock, crypto & trading posts on X (Twitter) & keep the
original tweet data. **X (Twitter) Stock & Crypto AI Trading Signals** collects
posts about your tickers or assets, then adds an AI-powered stance, content
type, conviction level & asset relevance to every post. Separate firm calls from
hedged remarks, analysis from promotion, & posts about your asset from unrelated
uses of its name.

- **Stance per post**: bullish, bearish, neutral, mixed or unclear.
- **Content type** tells analysis, news, trade ideas, promotion, humor &
  questions apart.
- **Conviction** separates firm calls & positions from hedged remarks.
- **Relevance** filters out unrelated uses of a ticker or company name.
- **Complete source records** for every field the tweet exposes.

## How to analyze market sentiment on X

1. Add search terms such as `$NVDA lang:en -filter:retweets`, cashtag queries,
   profile handles or tweet IDs.
2. Set `maxItems` & extraction filters such as date bounds or minimum likes.
3. Put asset names, tickers & aliases under `analysis.targets` & describe the
   asset in `analysis.context`.
4. Run the Actor & open the dataset.

```json
{
  "searchTerms": ["$NVDA lang:en -filter:retweets"],
  "maxItems": 500,
  "analysis": {
    "targets": [{ "name": "Nvidia", "aliases": ["NVDA", "$NVDA"] }],
    "context": "The chip maker as a listed stock."
  }
}
```

### What the Actor answers

| Question   | Answer                                                       |
| ---------- | ------------------------------------------------------------ |
| Stance     | Bullish, bearish, neutral, mixed or unclear                  |
| Content    | Analysis, news, trade, promotion, humor, question or unclear |
| Conviction | 0 hedged remark, 1 stated view, 2 firm call or position      |
| Relevance  | Probability that the post treats your targets as assets      |

Answers describe what authors express. They are not investment advice & do not
verify claims, prices or filings.

## Pricing

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
  "tweet": { "id": "2100692112916574711", "text": "…", "likeCount": 31 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      {
        "questionId": "stance",
        "type": "choice",
        "value": "bullish",
        "confidence": 0.86
      },
      {
        "questionId": "content",
        "type": "choice",
        "value": "analysis",
        "confidence": 0.79
      },
      {
        "questionId": "conviction",
        "type": "score",
        "value": 1,
        "confidence": 0.7
      },
      { "questionId": "relevance", "type": "probability", "probability": 0.95 }
    ]
  }
}
```

Each result contains `tweet` & `analysis`. Answers include types, question
versions & available probabilities. A failed or skipped analysis keeps the
collected tweet with an empty answer list & a `reason`. Free diagnostics in the
key-value store explain invalid inputs, missing results & interrupted
collection, & the run report separates collected rows, charged analyses &
pending charges.

## Run summary & flat answers

Each run writes an `analysis-summary` record to its key-value store & repeats it
under `results.analysisSummary` in the run report. It counts analyzed, failed &
skipped rows, sums engagement, and summarizes every question. `cashtags` counts
stance per cashtag such as `$NVDA`, so the bullish ratio per asset comes from
`choices.stance`. The `stance` block adds the engagement-weighted split & the
most engaged bullish & bearish posts; `conviction` reports the mean &
engagement-weighted mean. Numbers are rounded to 4 decimals; empty runs report
zero counts & `null` means. Each `cashtags` entry adds `signal`: bullish count,
bearish count & a score from -1 to 1 computed as (bullish - bearish) / rows, and
`monitor.changedRows` lists tweets whose stance moved since the baseline. Every
row also lists `sourceDomains`, the hostnames it links to, and the summary's
`monitor` block counts comparison statuses & lists up to 50 changed rows when
`monitor.baselineDatasetId` is set.

Every result row also carries `answers`, a flat map from question ID to the
chosen category, score, or probability. The `Flat answers` dataset view & CSV or
Excel exports show one column per question beside the tweet, so spreadsheets
need no JSON parsing. Failed & skipped rows carry an empty map.

## Compare with an earlier run

Pass `monitor.baselineDatasetId`, the dataset ID of a completed earlier run with
the same analysis settings, and every row gains a `monitor` object: `first_run`
without a baseline, `new_to_baseline` for tweets the earlier run did not have,
`unchanged` or `changed` for tweets it had, with `changes` listing each stance,
content type or conviction level that moved from `previous` to `current`.
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

- [Nvidia (NVDA) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/nvda-market-sentiment-on-x)
- [Tesla (TSLA) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/tsla-market-sentiment-on-x)
- [Apple (AAPL) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/aapl-market-sentiment-on-x)
- [Amazon (AMZN) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/amzn-market-sentiment-on-x)
- [Microsoft (MSFT) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/msft-market-sentiment-on-x)
- [Alphabet (GOOGL) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/googl-market-sentiment-on-x)
- [Meta (META) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/meta-market-sentiment-on-x)
- [AMD (AMD) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/amd-market-sentiment-on-x)
- [Palantir (PLTR) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/pltr-market-sentiment-on-x)
- [Coinbase (COIN) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/coin-market-sentiment-on-x)
- [Strategy (MSTR) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/mstr-market-sentiment-on-x)
- [Robinhood (HOOD) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/hood-market-sentiment-on-x)

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
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  Labels news posts by format, source attribution & topic relevance with AI. Use
  it when you separate reporting from commentary. From $0.0003 per analyzed
  tweet.
- [X (Twitter) Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  Answers your own category, score & yes/no questions for every tweet with AI.
  Use it when the preset analyses do not fit your labels. From $0.0003 per
  analyzed tweet.

## FAQ & support

### Can I track several tickers in one run?

Yes. List every asset under `analysis.targets` with its tickers & aliases, &
combine search terms. Relevance answers tell you which posts treat your targets
as assets.

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
