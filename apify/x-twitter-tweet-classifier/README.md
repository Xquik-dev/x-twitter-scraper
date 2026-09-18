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
most complete X data. X (Twitter) Tweet Classifier answers your own labels,
scores & yes/no questions on every tweet. Every other Apify Actor charges before
filtering or deduplicating. Xquik charges only for delivered, unique,
filter-matching results. AI costs are included in the per-tweet price. You pay
no AI provider, buy no tokens & bring no key.

Classify X (Twitter) posts with your own questions & keep the original tweet
data. **X Tweet Classifier with AI Analysis** collects matching tweets, then
answers 1-8 typed questions per post: categories for support triage, scores for
prioritization & probabilities for relevance. Presets cover brand monitoring,
complaints, competitors, purchase intent, product feedback, news, sentiment &
market sentiment. Custom questions replace them.

- **Typed answers** with probabilities, confidence & question versions.
- **Your questions, your categories.** Each question takes up to 255 categories.
- **Complete source records** for every field the tweet exposes.
- **Filter-first billing.** You pay only for unique, filter-matching tweets with
  a successful analysis.

## How to classify tweets with custom questions

1. Add tweet URLs, search terms, profile handles or tweet IDs.
2. Set `maxItems` & the extraction filters your task needs.
3. Add your questions under `analysis.questions`, or pick a preset with
   `analysis.preset`.
4. Run the Actor & open the dataset.

Supported modes collect tweets, searches, profile posts, Lists, replies, quotes
& threads. Standalone article extraction & user lists are not classification
inputs.

```json
{
  "searchTerms": ["\"need a recommendation\" headphones lang:en"],
  "maxItems": 20,
  "analysis": {
    "questions": [
      {
        "id": "buying",
        "type": "probability",
        "version": "1",
        "instructions": "Does the author want to buy headphones?"
      }
    ],
    "targets": [{ "name": "headphones", "aliases": ["headset"] }],
    "context": "Exclude advertisements aimed at other buyers."
  }
}
```

### Questions & limits

Provide 1-8 questions with unique IDs, instructions & versions.

- `choice` uses 2-255 named `categories` with descriptions or null values.
- `score` uses an ordered `levels` array containing at least 2 descriptions.
- `probability` returns a value between 0 & 1. Optional `criteria` contain `yes`
  & `no` descriptions.

Presets: `brand`, `complaints`, `competitors`, `purchase_intent`,
`product_feedback`, `news`, `sentiment` & `market`. `maxContextBytes` defaults
to 12,000 bytes. A smaller limit skips oversized context without truncation.
`concurrency` defaults to 4 & accepts 1 through 16. Each question definition
stays within an 8,000 byte allowance.

## Pricing

AI costs are included in the per-tweet price. You pay no AI provider, buy no
tokens & bring no key.

From $0.0003 per successfully analyzed tweet, with no start fee. The price
includes collection. The analysis allowance is 8 questions, 8,000 bytes per
question definition & 12,000 bytes of context per tweet. Extraction filters &
deduplication run before analysis, so filtered-out & duplicate rows are never
analyzed or charged. Failed & skipped analyses & diagnostic rows have no result
charge. Apify bills platform usage separately. The Pricing tab shows it.

## Input & output examples

The input above is copy-ready. Output rows look like this (abbreviated):

```json
{
  "tweet": { "id": "2100344867507327087", "text": "…", "likeCount": 6409 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      {
        "questionId": "topic",
        "type": "choice",
        "value": "ai_safety",
        "confidence": 0.93
      },
      {
        "questionId": "disclosure",
        "type": "probability",
        "probability": 0.97
      },
      {
        "questionId": "specificity",
        "type": "score",
        "value": 2,
        "confidence": 0.88
      }
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
skipped rows, sums engagement, and summarizes every question. Every custom
question gets its own block: category counts & shares for choice questions, mean
& level counts for score questions, yes & no counts for yes/no questions. The
summary rounds numbers to 4 decimals. An empty run reports zero counts & `null`
means. Pass `analysis.preset` with `brand`, `complaints`, `purchase_intent`,
`product_feedback`, `competitors`, `sentiment`, `market` or `news` to run a
built-in lens instead of custom questions. The summary then reports that lens
per question. Every row lists `sourceDomains`, the hostnames it links to, &
`cashtags` such as `$NVDA` found in its text. With `monitor.baselineDatasetId`
set, the summary's `monitor` block counts comparison statuses & lists up to 50
changed rows.

Every result row also carries `answers`, a flat map from question ID to the
chosen category, score, or probability. The `Flat answers` dataset view & CSV or
Excel exports show one column per question beside the tweet, so spreadsheets
need no JSON parsing. Failed & skipped rows carry an empty map.

## Compare with an earlier run

Pass `monitor.baselineDatasetId`, the dataset ID of a completed earlier run with
the same analysis settings. Every row then gains a `monitor` object. Its status
is `first_run` without a baseline, `new_to_baseline` for tweets the earlier run
did not have, & `unchanged` or `changed` for tweets it had. `changes` lists each
decision for any of your questions that moved from `previous` to `current`.
Decisions compare by category, rounded score level, or yes/no at 0.5. A decision
counts as changed in three cases. The earlier category falls below 0.4
probability. A score moves at least 0.6 levels. A yes/no probability lands at
least 0.1 from the threshold. Near-tie jitter between runs stays unchanged.
Baselines above `maxBaselineRows` (default 100,000) or from different settings
stop the run before collection with a diagnostic row.

## Task examples

Choose from 50 public tasks. Each starts from a real English search with a
bounded `maxItems`, ready-made custom questions & the overview dataset view.
Edit the search or the questions before running.

- [Triage customer support requests on X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/triage-support-requests-on-x)
- [Score sales leads from X posts](https://apify.com/xquik/x-twitter-tweet-classifier/examples/score-sales-leads-from-x-posts)
- [Detect service outage reports on X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/detect-outage-reports-on-x)
- [Classify hiring signals on X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-hiring-signals-on-x)
- [Tag product feature requests on X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/tag-feature-requests-on-x)
- [Classify app feedback like store reviews](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-app-store-style-feedback)
- [Detect scam and fraud warnings on X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/detect-scam-warnings-on-x)
- [Classify event attendance intent](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-event-attendance-intent)
- [Extract restaurant review signals](https://apify.com/xquik/x-twitter-tweet-classifier/examples/extract-restaurant-review-signals)
- [Separate crypto promotion from analysis](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-crypto-scam-vs-analysis)
- [Classify persuasive political posts](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-political-ad-style-posts)
- [Detect subscription churn risk signals](https://apify.com/xquik/x-twitter-tweet-classifier/examples/detect-churn-risk-signals)

The remaining tasks cover more workflows on the Actor page.

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
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  Labels news posts by format, source attribution & topic relevance with AI. Use
  it when you separate reporting from commentary. From $0.0003 per analyzed
  tweet.

## FAQ & support

### Do question versions matter?

Yes. Every answer stores the `version` you give its question. When you refine
questions over time, you can tell which wording produced a result.

### Why did a row come back with `analysis.status` of `failed` or `skipped`?

The Actor collected & delivered the tweet, but the AI analysis did not complete.
`analysis.reason` names the cause, such as `context_limit` when the tweet & its
context exceed `maxContextBytes`, or `service_unavailable` after retries. These
rows carry no result charge. Raise `maxContextBytes` (up to 12,000) or rerun the
affected IDs.

### Does the analysis verify facts?

No. Answers describe what the post expresses & how the post frames it.
Probabilities express model confidence, not truth. Review important
classifications against the original tweet, which every row keeps.

### Which languages work?

Extraction supports every language X serves. We validate analysis on English
customer scenarios first. Other supported languages return answers with the same
structure. `unclear` categories & probabilities show uncertainty in every
language.

### How do I limit cost?

Filters, deduplication & `maxItems` run before analysis, so the Actor analyzes &
charges only unique, filter-matching tweets. Use precise search operators, date
bounds & engagement floors, & start with a small `maxItems` to check answer
quality before a large run.

### Where do I get help?

Open an issue on the Actor page or contact support@xquik.com with the run ID.
Free diagnostics in the key-value store explain empty, partial or interrupted
runs.

Xquik is an independent third-party service. Not affiliated with X Corp.
"Twitter" and "X" are trademarks of X Corp.
