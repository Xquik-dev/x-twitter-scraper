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

# X Trends Scraper | $0.00015/Trend | Pay-Per-Result

<table align="center"><tr><td align="center">
<a href="https://youtu.be/4UOSpoOoC3Y?t=367"><img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" width="720" alt="Framer connects Xquik MCP to coding agents"></a><br>
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">Watch how Framer uses Xquik scrapers with Claude Code, Codex, Cursor, and more, from 6:07.</a>
</td></tr></table>

Xquik is the world's fastest & cheapest X (Twitter) scraper service with the
most complete X data, and X Trends Scraper collects real-time trends by location
with rank, volume & query. Every other Apify Actor charges before filtering or
deduplicating. Xquik charges only for delivered, unique, filter-matching
results.

Scrape current Twitter trends across many locations in one run. Export rank,
topic, query, Tweet volume, search URL, WOEID, and source location. No X API key
or login required.

## Locations and trend data

- Run multiple countries or WOEIDs concurrently.
- Return up to 50 current trends per location.
- Preserve location attribution on every row.
- Label hashtag rows and whether Tweet volume is available.
- Deduplicate equivalent inputs before billing.
- Export JSON, CSV, Excel, XML, and RSS through Apify datasets.
- Resume from saved state after an Apify migration.

## Input

Use location names, numeric WOEIDs, or both:

```json
{
  "locations": ["Worldwide", "United States", "Turkey"],
  "maxTrendsPerLocation": 50,
  "maxItems": 150
}
```

Supported shortcuts include Worldwide, United States, United Kingdom, Turkey,
Brazil, Canada, France, Germany, India, Indonesia, Japan, Mexico, and Australia.
Use `woeids` for any other supported location.

## Output

Each trend is one dataset row with `name`, `rank`, `tweetVolume`, `query`,
`url`, `woeid`, `sourceTarget`, and `resultType`. Missing source fields stay
absent rather than being invented.

## Pricing

Every Apify plan costs **$0.00015 per delivered row**. Apify bills your platform
usage separately.

- One charge per delivered data row. Diagnostics are free in `diagnostics`.
- No start, query, or location fee.
- Duplicates are removed before billing.
- Apify maximum-total-charge settings cap delivered rows.

Use `latest` unless you need an older build. Choose from 50 public tasks or 129
Xquik REST operations. Examples use sample values. Results reflect live data.

## Recovery and limits

Independent locations run concurrently. Cursor state, accepted rows, billing
state, and output fingerprints survive Apify migration. The Actor has no
self-imposed run timeout. A caller-supplied Apify timeout remains respected.

## Incomplete extraction

Interrupted extraction writes a free `partial` diagnostic. Available results
remain intact. Read `availableResults`, `failedTargets`, `retryable`, and
`nextAction` before retrying. A successful Actor exit confirms delivery, not
complete extraction.

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
- [X (Twitter) Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  Answers your own category, score & yes/no questions for every tweet with AI.
  Use it when the preset analyses do not fit your labels. From $0.0003 per
  analyzed tweet.
