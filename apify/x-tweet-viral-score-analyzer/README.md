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
most complete X data. X Tweet Viral Score Analyzer adds a Viral Score estimate &
a verdict to every tweet. Every other Apify Actor charges before filtering or
deduplicating. Xquik charges only for delivered, unique, filter-matching
results. AI costs are included in the per-tweet price. You need no AI account,
tokens or key.

Learn why tweets spread or flop & keep the original tweet data. **X Tweet Viral
Score Analyzer with AI** collects matching tweets. The AI rates 8 traits of each
post. The Actor turns those answers into a Viral Score estimate from 0 to 100 &
a verdict. Every row keeps real likes, reposts, replies & quotes, so you can
compare each estimate with what happened.

- **Viral Score per post** from fixed, versioned rules.
- **8 trait answers** show why a post scored high or low.
- **Hard stops** cap posts that read as spam, ragebait or generic machine copy.
- **Complete source records** with every field the tweet exposes.

The Viral Score is an estimate of how well the wording works. It does not
predict likes or views. It does not reproduce how X ranks posts.

## How to check a tweet's viral score

1. Add search terms, profile handles, tweet URLs or tweet IDs.
2. Set `maxItems` & the extraction filters your task needs.
3. Describe your audience in `analysis.context`, or leave the default.
4. Run the Actor & open the `Viral Score` dataset view.

```json
{
  "searchTerms": ["from:NASA -filter:replies -filter:retweets"],
  "maxItems": 150,
  "analysis": { "context": "Space fans & general readers." }
}
```

### What the Actor answers

| Question    | Answer                                                    |
| ----------- | --------------------------------------------------------- |
| Hook        | 0 no hook, 1 clear opening, 2 sharp opening               |
| Clarity     | 0 confusing, 1 takes effort, 2 clear on first read        |
| Informative | 0 nothing new, 1 familiar point, 2 useful takeaway        |
| Funny       | 0 not funny, 1 mildly amusing, 2 funny enough to share    |
| Ragebait    | Probability that the post mainly provokes outrage         |
| AI written  | Probability that the text reads like generic machine copy |
| Spam        | Probability of spam, scam, giveaway or engagement farming |
| Reaction    | Share, reply, like, argue or ignore                       |

The AI-written answer judges style only. It does not establish who wrote the
post.

### How the Viral Score works

Hook, clarity, payoff & the expected reaction raise the score. Wording that
reads like generic machine copy lowers it.

Hard stops cap the score of likely spam, ragebait & generic machine copy. The
score is a whole number from 0 to 100.

| Verdict       | Score     |
| ------------- | --------- |
| `send_it`     | 70 to 100 |
| `edit_first`  | 40 to 69  |
| `sleep_on_it` | 0 to 39   |

`viral.weights` names the version of these rules, such as `viral_lite:1`. It
changes whenever the rules change. The score is `null` when the analysis failed,
the Actor skipped it, or a default trait answer is missing. The Actor never
fills a missing score with a guess.

## Algorithm Score estimate

X published its ranking weights in the repository `xai-org/x-algorithm`, file
`home-mixer/params/param.rs`. The Actor applies 4 of them to the public counts
of each post:

| Count  | Weight |
| ------ | ------ |
| Like   | 0.5    |
| Reply  | 5      |
| Repost | 1      |
| Quote  | 5      |

`viral.algorithmWeightedSum` is the sum of each count times its weight.
`viral.algorithmScore` divides that sum by views & multiplies by 1,000. A post
without a view count uses followers instead. `viral.algorithmBasis` names the
divisor, `views` or `followers`. Compare scores with the same basis only.
`viral.weightsVersion` names the weights, such as
`x_algorithm_params:2026-09-18`.

Limits:

- X multiplies each weight by a probability it predicts for one viewer. The
  Actor multiplies by observed counts. The result is an estimate, not the score
  X computes.
- X publishes no weight for bookmarks or views. The sum leaves both out.
- X uses more signals than these 4, such as dwell time & shares. Public data
  does not show them.
- The score is `null` when a post has no views & no follower count.
- The AI never sees these counts. It reads the text & context only.

## Predicted against actual

The Actor compares each Viral Score with what happened.
`viral.actualEngagementRate` is `log10(1 + weighted sum per 1,000 followers)`.
The log limits the effect of one very large post. The rate is `null` when the
follower count is missing or 0.

The run summary's `viral.calibration` block reports:

- `comparedPosts`: posts with a Viral Score & an actual rate.
- `rankCorrelation`: a Spearman rank correlation from -1 to 1. It asks whether
  higher scores went with higher rates.
- `calibrationScore`: 100 times the correlation, floored at 0.
- `overperformers` & `underperformers`: up to 5 posts each, with tweet ID, URL,
  Viral Score, actual rate & `gap`.

`gap` is the standardized actual rate minus the standardized Viral Score. A post
enters a list when its gap reaches 1 standard deviation.

Limits:

- Fewer than 10 compared posts give a `null` calibration with the reason
  `too_few_posts`. Identical scores or rates give `no_variation`.
- The correlation is approximate.
- The calibration describes one run. A low score can mean the posts differ in
  timing, topic or audience, not that the wording estimate failed.
- Young posts have not finished collecting engagement. Compare posts of similar
  age.

## Account report

The run summary's `viral.accounts` block reports each author handle:

- Post count, average Viral Score & average actual engagement rate.
- The best & worst post by Viral Score, with tweet ID & URL.
- Average Viral Score per bucket: posting hour in UTC, text length band, has
  media, has link & self-thread.

Text length bands are `short` to 80 characters, `medium` to 200, `long` to 280 &
`extended` above. A self-thread post replies to its own author.

Limits:

- The report lists the 50 handles with the most scored posts.
- The Actor follows the first 1,000 handles of a run. `untrackedPosts` counts
  scored posts from later handles & posts without a handle.
- A bucket with few posts says little. Check `posts` before you compare
  averages.
- Buckets show what went together in this run. They do not show cause.

## Leaderboard

The run summary's `viral.leaderboard` block ranks the handles of the account
report. `byViralScore` ranks by average Viral Score. `byActualEngagementRate`
ranks by average actual rate. Each list holds up to 20 handles with `rank`,
`posts` & `average`.

Limits:

- A handle needs at least 3 scored posts to rank.
- The rate list skips handles without a follower count.
- More posts, then the handle name, break ties.
- The leaderboard covers the posts of one run, not an account's whole history.

## Score a draft before you post

Paste your own text in `texts`. The Actor scores it & fetches nothing from X.

```json
{
  "texts": [
    "We shipped dark mode today. Try it and tell us what breaks.",
    "5 things we learned from 1,000 support tickets."
  ],
  "analysis": { "context": "Developers who use our app." }
}
```

- Each text becomes 1 row with `viralScore`, `viralVerdict` & `viral.stops`.
- `tweet.id` is `text:1`, `text:2` & so on, & `tweet.type` is `text`.
- A draft has no likes or views yet, so `viral.algorithmScore` stays `null`.
- Each analyzed text costs the same $0.0003 as an analyzed tweet.
- With `texts` set, the run analyzes only those texts. Run X targets separately.

## Pricing

AI costs are included in the per-tweet price. You need no AI account, tokens or
key.

From $0.0003 per successfully analyzed tweet, with no start fee. The price
includes collection & the Viral Score. The analysis allowance is 8 questions,
8,000 bytes per question definition & 12,000 bytes of context per tweet.
Extraction filters & deduplication run before analysis, so filtered-out &
duplicate rows are never analyzed or charged. Failed & skipped analyses &
diagnostic rows have no result charge. Apify bills platform usage separately.
The Pricing tab shows it.

## Input & output examples

The input above is copy-ready. Output rows look like this (abbreviated):

```json
{
  "tweet": { "id": "2100493544842494265", "text": "...", "likeCount": 12 },
  "viral": {
    "score": 74,
    "verdict": "send_it",
    "weights": "viral_lite:1",
    "stops": [],
    "algorithmScore": 8.5,
    "algorithmBasis": "views",
    "algorithmWeightedSum": 17,
    "actualEngagementRate": 0.7202,
    "weightsVersion": "x_algorithm_params:2026-09-18"
  },
  "viralScore": 74,
  "viralVerdict": "send_it",
  "viralAlgorithmScore": 8.5,
  "viralActualEngagementRate": 0.7202,
  "analysis": {
    "status": "succeeded",
    "answers": [
      { "questionId": "hook", "type": "score", "value": 2, "confidence": 0.84 },
      { "questionId": "spam", "type": "probability", "probability": 0.03 },
      {
        "questionId": "reaction",
        "type": "choice",
        "value": "share",
        "confidence": 0.7
      }
    ]
  }
}
```

Each result contains `tweet`, `analysis` & `viral`. Answers include types,
question versions & available probabilities. `viral.stops` lists the hard stops
that capped the score. A failed or skipped analysis keeps the collected tweet
with an empty answer list, a `reason` & a `null` score. Free diagnostics in the
key-value store explain invalid inputs, missing results & interrupted
collection. The run report separates collected rows, charged analyses & pending
charges.

## Run summary & flat answers

Each run writes an `analysis-summary` record to its key-value store & repeats it
under `results.analysisSummary` in the run report. It counts analyzed, failed &
skipped rows, sums engagement, and summarizes every question. Its `viral` block
reports `averageScore`, the count of each verdict, & how many rows the Actor
scored or left unscored. The same block holds `calibration`, `accounts` &
`leaderboard`, described above. Score questions report a mean & an
engagement-weighted mean. The `reaction` split shows how many tweets fall into
each reaction, & `top` lists the three most engaged tweets per reaction. An
empty run reports zero counts & a `null` average. Every row lists
`sourceDomains`, the hostnames it links to, & `cashtags` such as `$NVDA` found
in its text. With `monitor.baselineDatasetId` set, the summary's `monitor` block
counts comparison statuses & lists up to 50 changed rows.

Every result row also carries `viralScore`, `viralVerdict`,
`viralAlgorithmScore`, `viralActualEngagementRate` & `answers`, a flat map from
question ID to the chosen category, score, or probability. The `Viral Score`
dataset view & CSV or Excel exports show these columns beside the tweet, so
spreadsheets need no JSON parsing. Failed & skipped rows carry an empty map.

## Compare with an earlier run

Pass `monitor.baselineDatasetId`, the dataset ID of a completed earlier run with
the same analysis settings. Every row then gains a `monitor` object. Its status
is `first_run` without a baseline, `new_to_baseline` for tweets the earlier run
did not have, & `unchanged` or `changed` for tweets it had. `changes` lists each
trait decision that moved from `previous` to `current`. Decisions compare by
category, rounded score level, or yes/no at 0.5. A decision counts as changed
only when it moves clearly. Near-tie jitter between runs stays unchanged.
Baselines above `maxBaselineRows` (default 100,000) or from different settings
stop the run before collection with a diagnostic row.

## Task examples

Choose from 50 public tasks. Each starts from a real English search with a
bounded `maxItems` & the `Viral Score` dataset view. Some add audience context.
Edit the search or context before running.

- [Viral score of AI startup launch tweets](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-ai-startup-launch-tweets)
- [Viral score of SaaS founder build in public posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-saas-founder-build-in-public-posts)
- [Viral score of Product Hunt launch posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-product-hunt-launch-posts)
- [Viral score of Developer tool announcements](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-developer-tool-announcements)
- [Viral score of Open source release posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-open-source-release-posts)
- [Viral score of Crypto project announcements](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-crypto-project-announcements)
- [Viral score of Parenting humor posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-parenting-humor-posts)
- [Viral score of Office humor posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-office-humor-posts)
- [Viral score of Pet photo captions](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-pet-photo-captions)
- [Viral score audit of NASA posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-nasa-posts)
- [Viral score audit of Duolingo posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-duolingo-posts)
- [Viral score audit of Wendy's posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-wendys-posts)

The remaining tasks cover more topics & brand accounts on the Actor page.

## FAQ & support

### Does a high score mean a tweet will go viral?

No. The score estimates how well the wording works for a general reader. Timing,
audience size, media & luck also decide reach. Compare scores with the real
engagement counts on each row before you rely on them.

### Can I use my own questions?

Yes. Custom `analysis.questions` replace the defaults: 1-8 `choice`, `score` or
`probability` questions with 2-255 categories or at least 2 ordered levels. The
Viral Score needs all 8 default questions, so custom questions leave it `null`.

### Why did a row come back with `analysis.status` of `failed` or `skipped`?

The Actor collected & delivered the tweet, but the AI analysis did not complete.
`analysis.reason` names the cause, such as `context_limit` when the tweet & its
context exceed `maxContextBytes`, or `service_unavailable` when the analysis
service is briefly unavailable. These rows carry no result charge & no score.
Raise `maxContextBytes` (up to 12,000) or rerun the affected IDs.

### Does the analysis verify facts?

No. Answers describe what the post expresses & how the post frames it.
Probabilities express model confidence, not truth. Review important
classifications against the original tweet, which every row keeps.

### Which languages work?

Extraction supports every language X serves. We validate analysis on English
customer scenarios first. Other supported languages return answers with the same
structure.

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
