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
most complete X data, and X (Twitter) Brand Monitoring with AI Analysis tracks your brand
mentions with relevance, sentiment & customer-experience answers. Every other
Apify Actor charges before filtering or deduplicating. Xquik charges only for
delivered, unique, filter-matching results.

AI costs are included in the per-tweet price. You pay no AI provider, buy no tokens & bring no key.

Monitor brand mentions on X (Twitter) & track sentiment changes between runs.
**X (Twitter) Brand Monitoring with AI Analysis** collects every matching tweet,
adds AI-powered relevance, sentiment & customer-experience answers to each post,
& compares the answers with an earlier dataset so you see what changed. Original
tweet data stays in every row, so exports, reviews & follow-up analysis need no
second scrape.

Use it to watch a brand, a product line or a campaign for complaints, praise &
purchase questions; to brief support & marketing teams from real posts rather
than aggregate scores; & to keep a run-over-run history of how customers talk
about you.

- **Every field of the source tweet** stays beside the answers: text, author,
  counts, media, links, quoted & replied posts.
- **Typed answers**: a relevance probability, a sentiment category with
  probabilities & a customer-experience category.
- **Change tracking** between runs by decision, not by probability noise.
- **Filter-first billing**: only unique, filter-matching tweets with successful
  analysis are charged.

## How to monitor a brand on X

1. Add search terms (for example `"Acme headphones" lang:en`), profile handles,
   tweet URLs or tweet IDs.
2. Set `maxItems` & the extraction filters your task needs, such as date bounds,
   minimum likes or reply exclusion.
3. Put your brand names & aliases under `analysis.targets` & describe the brand
   in `analysis.context`.
4. Run the Actor, then keep the dataset ID for your next comparison.
5. On the next run, add `monitor.baselineDatasetId` with that ID. Keep
   questions, targets, context & context limits unchanged so answers stay
   comparable.

```json
{
  "searchTerms": ["\"Acme headphones\" lang:en"],
  "maxItems": 100,
  "analysis": {
    "targets": [{ "name": "Acme", "aliases": ["Acme headphones"] }],
    "context": "Consumer headphones & customer service."
  },
  "monitor": {
    "baselineDatasetId": "YOUR_PREVIOUS_DATASET_ID",
    "maxBaselineRows": 100000
  }
}
```

Targets guide classification. They do not create search queries or remove
irrelevant tweets automatically, so choose search terms & filters that match
your research.

### What the monitor answers

| Question            | Answer                                           |
| ------------------- | ------------------------------------------------ |
| Brand relevance     | Probability that the tweet discusses your target |
| Sentiment           | Positive, negative, mixed, neutral or unclear    |
| Customer experience | Customer, prospect, observer or unclear          |

Use relevance probabilities to review ambiguous namesakes. Sentiment describes
the author's expressed attitude toward the target.

### How comparisons work

| Comparison status      | Meaning                                                 |
| ---------------------- | ------------------------------------------------------- |
| `first_run`            | No baseline was supplied                                |
| `new_to_baseline`      | This tweet ID was absent from the baseline              |
| `unchanged`            | Every comparable decision matches                       |
| `changed`              | At least 1 decision differs                             |
| `not_comparable`       | Required metadata, IDs or matching settings are missing |
| `analysis_unavailable` | This tweet has no successful analysis                   |

Answers compare by decision: a `choice` answer by its category, a `score` answer
by its nearest level & a `probability` answer by its yes-or-no decision at 0.5.
A decision only counts as changed when the answer clearly moves: the earlier
category falls below 0.4 probability, a score moves at least 0.6 levels, or a
yes/no probability lands at least 0.1 from the threshold. Near-tie jitter
between runs stays unchanged. Shifts that keep the same decision stay
`unchanged`, so model variation between runs does not flood your report.
`changes` lists each changed question with its `previous` & `current` decision.
Changes may reflect model variation, new context or edited source data; they do
not prove changed facts, & an absent tweet does not prove deletion.

The baseline limit defaults to 100,000 rows. Duplicate tweet IDs, loading
failures & changing dataset sizes stop comparison before collection; they never
become an empty baseline.

## Pricing

AI costs are included in the per-tweet price. You pay no AI provider, buy no tokens & bring no key.

From $0.0003 per successfully analyzed tweet, with no start fee. Collection is
included, & the documented analysis allowance is 8 questions, 8,000 bytes per
question definition & 12,000 bytes of context per tweet. Extraction filters &
deduplication run before analysis, so filtered-out & duplicate rows are never
analyzed or charged. Failed & skipped analyses & diagnostic rows have no result
charge. Apify platform usage (compute, storage & transfer) is billed separately
by Apify at your plan's rates & appears on the Pricing tab.

## Input & output examples

The input above is copy-ready. Output rows look like this (abbreviated):

```json
{
  "tweet": { "id": "2100344867507327087", "text": "…", "likeCount": 6409 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      { "questionId": "relevance", "type": "probability", "probability": 0.97 },
      {
        "questionId": "sentiment",
        "type": "choice",
        "value": "neutral",
        "confidence": 0.88
      },
      {
        "questionId": "experience",
        "type": "choice",
        "value": "observer",
        "confidence": 0.69
      }
    ]
  },
  "monitor": { "status": "unchanged", "changedQuestionIds": [], "changes": [] }
}
```

Each result contains `tweet`, `analysis` & `monitor`. Answers include types,
question versions & available probabilities. Missing quote, reply, author &
media context stays explicit under `analysis.contextAvailability`. A failed or
skipped analysis keeps the collected tweet with an empty answer list & a
`reason`. Free diagnostics in the key-value store explain invalid inputs,
missing results & interrupted collection, & the run report separates collected
rows, charged analyses & pending charges.

## Run summary & flat answers

Each run writes an `analysis-summary` record to its key-value store & repeats it
under `results.analysisSummary` in the run report. It counts analyzed, failed &
skipped rows, sums engagement, and summarizes every question. `targets` reports
mentions, share of voice & engagement per brand or alias, and each entry's `top`
lists its three most engaged mentions per answer category, so the strongest
negative & positive mentions of every brand are ready for alerts. The
`sentiment` block lists the three most engaged positive & negative mentions
under `top`, ready for alerts, and `relevance` counts mentions that are about
the brand. Numbers are rounded to 4 decimals; empty runs report zero counts &
`null` means. Each `targets` entry also carries `choices`, the answer split
among tweets that mention that brand, and `monitor.changedRows` lists tweets
whose decisions moved since the baseline, ready for a webhook or alert. Every
row also lists `sourceDomains`, the hostnames it links to, and the summary's
`monitor` block counts comparison statuses & lists up to 50 changed rows when
`monitor.baselineDatasetId` is set.

Every result row also carries `answers`, a flat map from question ID to the
chosen category, score, or probability. The `Flat answers` dataset view & CSV or
Excel exports show one column per question beside the tweet, so spreadsheets
need no JSON parsing. Failed & skipped rows carry an empty map.

## Task examples

Choose from 50 public tasks. Each starts from a real English search with a
bounded `maxItems`, ready-made targets & context, & the overview dataset view.
Edit the search or targets before running.

- [Monitor Nike brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-nike-brand-mentions-on-x)
- [Monitor Starbucks brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-starbucks-brand-mentions-on-x)
- [Monitor Tesla brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-tesla-brand-mentions-on-x)
- [Monitor Spotify brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-spotify-brand-mentions-on-x)
- [Monitor Netflix brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-netflix-brand-mentions-on-x)
- [Monitor Airbnb brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-airbnb-brand-mentions-on-x)
- [Monitor Uber brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-uber-brand-mentions-on-x)
- [Monitor Peloton brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-peloton-brand-mentions-on-x)
- [Monitor Shopify brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-shopify-brand-mentions-on-x)
- [Monitor Notion brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-notion-brand-mentions-on-x)
- [Monitor Duolingo brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-duolingo-brand-mentions-on-x)
- [Monitor Lululemon brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-lululemon-brand-mentions-on-x)

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

## FAQ & support

### Can I use my own questions?

Yes. Custom `analysis.questions` replace the defaults: 1-8 `choice`, `score` or
`probability` questions. Choice questions accept 2-255 categories; scores use at
least 2 ordered levels. Keep the same questions across runs you want to compare.

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
