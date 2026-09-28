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
most complete X data. Xquik's X (Twitter) Stock & Crypto AI Trading Signals
turns tweets into stances. Each stance is bullish, bearish, neutral or mixed,
per ticker & coin. Most other Apify Actors charge before filtering or
deduplicating. Xquik charges only for delivered, unique, filter-matching
results. AI costs are included in the per-tweet price. You need no AI account,
tokens or key.

Read the stance behind stock, crypto & trading posts on X (Twitter). Xquik's **X
(Twitter) Stock & Crypto AI Trading Signals** collects posts about your assets.
It adds an AI-powered stance, content type, conviction level & asset relevance
to every post. Separate firm calls from hedged remarks & analysis from
promotion. Spot posts that use your asset's name for something else.

- **Stance per post.** Each post is bullish, bearish, neutral, mixed or unclear.
- **Content type.** It tells analysis, news, trade ideas, promotion, humor &
  questions apart.
- **Conviction.** It separates firm calls & positions from hedged remarks.
- **Relevance.** It helps you drop unrelated uses of a ticker or company name.
- **Complete source records.** Every row keeps every field the tweet exposes.

> Xquik is an independent third-party service. Not affiliated with X Corp.
> "Twitter" and "X" are trademarks of X Corp.

## How to analyze market sentiment on X

1. Add search terms such as `$NVDA lang:en -filter:retweets`, cashtag queries,
   profile handles or tweet IDs.
2. Set `maxItems` & extraction filters such as date bounds or minimum likes.
3. Put asset names, tickers & aliases under `analysis.targets` & describe the
   asset in `analysis.context`.
4. Start the run & open the dataset.

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

Conviction is 0 whenever the stance is neutral or unclear. A post without a
direction cannot state one firmly. That answer puts all probability on level 0 &
takes the stance's confidence.

Answers describe what authors express. They are not investment advice & do not
verify claims, prices or filings.

## Analyze your own text

Paste your own drafts, replies, reviews or notes in `texts`. Xquik's X (Twitter)
Stock & Crypto AI Trading Signals analyzes them. It fetches nothing from X.

```json
{
  "texts": [
    "$NVDA guidance beat again. I am adding on any dip below 900.",
    "Not touching $BTC until the ETF flows turn positive."
  ]
}
```

- Each text becomes 1 row with the same `analysis` answers as a tweet.
- `tweet.id` is `text:1`, `text:2` & so on, & `tweet.type` is `text`.
- Each analyzed text costs the same $0.0003 as an analyzed tweet.
- With `texts` set, the run analyzes only those texts. Run X targets separately.

## How much does it cost to analyze market sentiment on X?

Xquik's X (Twitter) Stock & Crypto AI Trading Signals costs from $0.0003 per
analyzed tweet. It charges no start fee. The price includes collection & AI
costs. You need no AI account, tokens or key. The price covers up to 8 questions
& 64,000 bytes of context per tweet. Each question definition may use up to
8,000 bytes.

Extraction filters & deduplication run before analysis. You never pay for
filtered-out or duplicate rows. Failed analyses, skipped analyses & diagnostic
rows have no result charge. Apify bills platform usage for compute, storage &
transfer separately at your plan's rates. The Pricing tab shows it.

## Input & output examples

The input above is copy-ready. An abbreviated output row looks like this:

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
versions & available probabilities. A row with a failed or skipped analysis
keeps the collected tweet & a `reason`. Its answer list is empty.

Free diagnostics in the key-value store explain invalid inputs, missing results
& interrupted collection. The run report separates collected rows, charged
analyses & pending charges.

## Run summary & flat answers

A run writes an `analysis-summary` record to its key-value store in 4 cases:

- It hits a problem or is large.
- It sets `monitor` without `baselineDatasetId`, as the first run of a series.
- Its comparison finds a changed, new or not comparable tweet.
- It has `alwaysSaveRunRecords` on.

Other runs skip the record. Their status names the top answer, like
`Top stance: bullish in 3 of 5 results.` A comparison without a change states
`No change since the earlier run.` A run that hits a problem or is large also
writes `run-report`. So does a run with `alwaysSaveRunRecords` on. `run-report`
repeats the summary under `results.analysisSummary`.

The summary counts analyzed, failed & skipped rows. It sums engagement &
summarizes every question.

- `cashtags` counts stance per cashtag, such as `$NVDA`. Each asset's bullish
  ratio comes from `choices.stance`.
- Each `cashtags` entry adds `signal` with bullish & bearish counts. Its score
  runs from -1 to 1. The score is bullish minus bearish, divided by rows.
- The `stance` block adds the engagement-weighted split & the most engaged
  bullish & bearish posts.
- `conviction` reports the mean & the engagement-weighted mean.
- `monitor.changedRows` lists tweets whose stance moved since the baseline.
- Every row lists `sourceDomains`, the hostnames it links to.
- With `monitor.baselineDatasetId` set, the summary's `monitor` block counts
  comparison statuses. It lists up to 50 changed rows.

The summary rounds numbers to 4 decimals. An empty run reports counts of 0 &
`null` means.

Every result row also carries `answers`, a flat map keyed by question ID. Each
value is the chosen category, score or probability. The `Flat answers` dataset
view & CSV or Excel exports show 1 column per question. The columns sit beside
the tweet, so spreadsheets need no JSON parsing. Failed & skipped rows carry an
empty map.

## Compare with an earlier run

Pass `monitor.baselineDatasetId`, the dataset ID of a completed earlier run with
the same analysis settings. The comparison reads that run's rows. It works even
when that run skipped its summary. Every row then gains a `monitor` object. Its
status can be:

- `first_run` without a baseline.
- `new_to_baseline` for tweets the earlier run did not have.
- `unchanged` or `changed` for tweets it had.

`changes` lists each stance, content type or conviction level that moved from
`previous` to `current`. Decisions compare by category, rounded score level or
yes/no at 0.5. A decision counts as changed only when it moves clearly. Near
ties between runs stay `unchanged`.

A baseline above `maxBaselineRows`, or from different settings, stops the run
before collection. The run then writes a diagnostic row. `maxBaselineRows`
defaults to 100,000.

## Task examples

Choose from 50 public tasks. Each starts from a real English search & a bounded
`maxItems`. It includes ready-made targets, context & the overview dataset view.
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
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  Answers your own category, score & yes/no questions for every tweet with AI.
  Use it when the preset analyses do not fit your labels. From $0.0003 per
  analyzed tweet.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer):
  Estimates a Viral Score from 0 to 100 & a verdict for every tweet from 8 AI
  trait answers. Use it when you study why tweets spread or flop. From $0.0003
  per analyzed tweet.

## FAQ & support

Answers to common questions, then where to get help.

### Do I need an AI account, X API key or login?

No. Xquik's X (Twitter) Stock & Crypto AI Trading Signals includes AI costs in
its price. You need no AI account, tokens or key. You also need no X API key,
login or credentials.

### Can I track several tickers in one run?

Yes. List every asset with its tickers & aliases under `analysis.targets`.
Combine their search terms. Relevance answers tell you which posts treat your
targets as assets.

### Why did a row come back with a failed or skipped analysis?

`analysis.status` is `failed` or `skipped`. The Actor collected & delivered the
tweet, but the AI analysis did not complete. `analysis.reason` names the cause.
`context_limit` means your context & targets leave no room for the tweet.
`service_unavailable` means the analysis service was briefly unavailable. These
rows carry no result charge. Shorten `analysis.context` or rerun the affected
IDs.

The Actor still analyzes a tweet longer than `maxContextBytes`. It cuts quoted &
replied-to posts first, then the tweet. `analysis.contextAvailability.postText`
is then `truncated`. Raise `maxContextBytes` up to 64,000 to keep more text.

### Does the analysis verify facts?

No. Answers describe what the post expresses & how the post frames it.
Probabilities express AI confidence, not truth. Review important classifications
against the original tweet, which every row keeps.

### Which languages work?

Extraction supports every language X serves. We validate analysis on English
customer scenarios first. Other supported languages return answers with the same
structure. `unclear` categories & probabilities show uncertainty in every
language.

### How do I limit cost?

Filters, deduplication & `maxItems` run before analysis. You pay only for
unique, filter-matching tweets. Use precise search operators, date bounds &
engagement floors. Start with a small `maxItems` to check answer quality before
a large run.

### Is it legal to analyze X data?

The Actor requests public X fields. Results can contain personal data. Confirm a
lawful purpose & follow applicable privacy rules. Ask qualified counsel when
uncertain.

### Can I use the API, schedules & integrations?

Yes. See the
[API tab](https://apify.com/xquik/x-twitter-stock-crypto-signals/api) for
Python, JavaScript & cURL examples. Use Apify
[schedules](https://docs.apify.com/platform/schedules) for recurring runs. Pass
the previous dataset ID as `monitor.baselineDatasetId` to see what changed.
Apify integrations also connect runs to webhooks, Make, Zapier, n8n & Google
Sheets.

### Where do I get help?

Open an issue on the Actor page or contact <support@xquik.com> with the run ID.
Free diagnostics in the key-value store explain empty, partial or interrupted
runs.
