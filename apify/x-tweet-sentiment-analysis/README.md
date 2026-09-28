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
most complete X data. Xquik's X Tweet Sentiment Analysis adds attitude,
intensity & sarcasm to every tweet. Most other Apify Actors charge before
filtering or deduplicating. Xquik charges only for delivered, unique,
filter-matching results. AI costs are included in the per-tweet price. You need
no AI account, tokens or key.

Measure the attitude behind X (Twitter) posts & keep the original tweet data.
Xquik's **X Tweet Sentiment Analysis with AI** collects matching tweets. It adds
an AI-powered sentiment category, intensity level & sarcasm probability to every
post. Track reactions to a launch, a campaign, an episode or a public figure.
Separate loud reactions from passing mentions.

- **Sentiment per post.** Each tweet gets its own category, so you can audit
  every answer.
- **Intensity.** A level from 0 to 2 separates emphatic posts from mild ones.
- **Sarcasm probability.** It flags posts whose literal wording contradicts the
  attitude.
- **Complete source records.** Every row keeps every field the tweet exposes.

> Xquik is an independent third-party service. Not affiliated with X Corp.
> "Twitter" and "X" are trademarks of X Corp.

## How to analyze tweet sentiment

1. Add search terms, profile handles, tweet URLs or tweet IDs.
2. Set `maxItems` & the extraction filters your task needs.
3. Leave `analysis.targets` empty to judge each post on its own subject. To
   focus on a brand, product or person, add its names & aliases.
4. Start the run & open the dataset.

```json
{
  "searchTerms": ["\"season finale\" lang:en"],
  "maxItems": 200,
  "analysis": { "context": "Reactions to the show, not spoilers." }
}
```

### What the Actor answers

| Question  | Answer                                                        |
| --------- | ------------------------------------------------------------- |
| Sentiment | Positive, negative, mixed, neutral or unclear                 |
| Intensity | 0 passing mention, 1 clear attitude, 2 emphatic wording       |
| Sarcasm   | Probability that the literal wording contradicts the attitude |

With targets, sentiment judges the attitude toward them. It also uses the quote
or reply context you supply. Without targets it judges the main subject of the
post.

## Analyze your own text

Paste your own drafts, replies, reviews or notes in `texts`. Xquik's X Tweet
Sentiment Analysis analyzes them. It fetches nothing from X.

```json
{
  "texts": [
    "The new update is great, but sync still drops on mobile.",
    "Support fixed my issue in 10 minutes. Thank you."
  ]
}
```

- Each text becomes 1 row with the same `analysis` answers as a tweet.
- `tweet.id` is `text:1`, `text:2` & so on, & `tweet.type` is `text`.
- Each analyzed text costs the same $0.0003 as an analyzed tweet.
- With `texts` set, the run analyzes only those texts. Run X targets separately.

## How much does it cost to analyze tweet sentiment?

Xquik's X Tweet Sentiment Analysis costs from $0.0003 per analyzed tweet. It
charges no start fee. The price includes collection & AI costs. You need no AI
account, tokens or key. The price covers up to 8 questions & 64,000 bytes of
context per tweet. Each question definition may use up to 8,000 bytes.

Extraction filters & deduplication run before analysis. You never pay for
filtered-out or duplicate rows. Failed analyses, skipped analyses & diagnostic
rows have no result charge. Apify bills platform usage for compute, storage &
transfer separately at your plan's rates. The Pricing tab shows it.

## Input & output examples

The input above is copy-ready. An abbreviated output row looks like this:

```json
{
  "tweet": { "id": "2100493544842494265", "text": "…", "likeCount": 12 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      {
        "questionId": "sentiment",
        "type": "choice",
        "value": "positive",
        "confidence": 0.91
      },
      {
        "questionId": "intensity",
        "type": "score",
        "value": 2,
        "confidence": 0.8
      },
      { "questionId": "sarcasm", "type": "probability", "probability": 0.04 }
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
`Top sentiment: positive in 3 of 5 results.` A comparison without a change
states `No change since the earlier run.` A run that hits a problem or is large
also writes `run-report`. So does a run with `alwaysSaveRunRecords` on.
`run-report` repeats the summary under `results.analysisSummary`.

The summary counts analyzed, failed & skipped rows. It sums engagement &
summarizes every question.

- The `sentiment` split shows how many tweets fall into each attitude.
- `engagementShares` weights the same split by likes, retweets, replies &
  quotes.
- `top` lists the 3 most engaged tweets per attitude.
- Every row lists `sourceDomains`, the hostnames it links to.
- Every row lists `cashtags` found in its text, such as `$NVDA`.
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

`changes` lists each sentiment, intensity level or sarcasm decision that moved
from `previous` to `current`. Decisions compare by category, rounded score level
or yes/no at 0.5. A decision counts as changed only when it moves clearly. Near
ties between runs stay `unchanged`.

A baseline above `maxBaselineRows`, or from different settings, stops the run
before collection. The run then writes a diagnostic row. `maxBaselineRows`
defaults to 100,000.

## Task examples

Choose from 50 public tasks. Each starts from a real English search & a bounded
`maxItems`. It includes ready-made targets, context & the overview dataset view.
Edit the search or targets before running.

- [Sentiment of season finale reactions](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-season-finale-reactions)
- [Sentiment of iPhone launch posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-iphone-launch-posts)
- [Sentiment of the Super Bowl halftime show](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-super-bowl-halftime-show)
- [Sentiment toward a new electric car model](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-new-electric-car)
- [Sentiment of Marvel movie audiences](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-marvel-movie-audiences)
- [Sentiment of Taylor Swift album reactions](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-taylor-swift-album-reactions)
- [Sentiment of a video game launch](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-video-game-launch)
- [Sentiment about remote work](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-remote-work)
- [Sentiment of airline passengers](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-airline-passengers)
- [Sentiment of college football fans](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-college-football-fans)
- [Sentiment about interest rate decisions](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-interest-rates)
- [Sentiment toward electric scooters](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-electric-scooters)

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

## FAQ & support

Answers to common questions, then where to get help.

### Do I need an AI account, X API key or login?

No. Xquik's X Tweet Sentiment Analysis includes AI costs in its price. You need
no AI account, tokens or key. You also need no X API key, login or credentials.

### Can I use my own questions?

Yes. Custom `analysis.questions` replace the defaults. Send 1 to 8 `choice`,
`score` or `probability` questions. Choice questions accept 2 to 255 categories.
Score questions need at least 2 ordered levels. Keep the same questions across
runs you want to compare.

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

Yes. See the [API tab](https://apify.com/xquik/x-tweet-sentiment-analysis/api)
for Python, JavaScript & cURL examples. Use Apify
[schedules](https://docs.apify.com/platform/schedules) for recurring runs. Pass
the previous dataset ID as `monitor.baselineDatasetId` to see what changed.
Apify integrations also connect runs to webhooks, Make, Zapier, n8n & Google
Sheets.

### Where do I get help?

Open an issue on the Actor page or contact <support@xquik.com> with the run ID.
Free diagnostics in the key-value store explain empty, partial or interrupted
runs.
