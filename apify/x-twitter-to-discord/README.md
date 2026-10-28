**English** ·
[Español](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-twitter-to-discord/README.es.md)
·
[Türkçe](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-twitter-to-discord/README.tr.md)
·
[简体中文](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-twitter-to-discord/README.zh-CN.md)
·
[日本語](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-twitter-to-discord/README.ja.md)
·
[한국어](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-twitter-to-discord/README.ko.md)
·
[Deutsch](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-twitter-to-discord/README.de.md)
·
[Français](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-twitter-to-discord/README.fr.md)
·
[Italiano](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-twitter-to-discord/README.it.md)

[![Framer connects Xquik MCP to coding agents](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Watch how Framer uses Xquik scrapers](https://youtu.be/4UOSpoOoC3Y?t=367)
with Claude Code, Codex, Cursor & more, from 6:07.

Xquik is the world's fastest & cheapest X (Twitter) scraper service with the
most complete X data. Xquik's X (Twitter) to Discord Bot sends every new tweet,
reply, quote & repost of the accounts you pick to your Discord channel. It
usually catches each one in under a second after X shows it. Most other Apify
Actors charge before filtering or deduplicating. Xquik charges only for
delivered, unique results, & here only for the hours a monitor watches.

Paste a Discord webhook URL & the accounts to watch, then click Start. Alerts
reach your channel between runs, with no bot to host or invite. You pay
**$0.0045 per monitor-hour**. Events & alerts are free, & Apify bills platform
usage separately.

> Xquik is an independent third-party service. Not affiliated with X Corp.
> "Twitter" and "X" are trademarks of X Corp.

## Why use X (Twitter) to Discord Bot?

- **No bot to host.** Alerts post through your channel's webhook. Nothing runs
  on your side, & nobody invites a bot.
- **No surprise pings.** A mention inside a tweet never pings anyone in your
  server.
- **Know your channel is connected.** Each new Discord URL gets a test message.
  The run status shows Discord's answer.
- **Many channels from 1 input.** Send the same alerts to more Discord channels,
  Slack, Telegram or any webhook.
- **Recover missed events.** `since` saves events again from any date in the
  last 30 days.
- **Know the monitor is watching.** Each run's status page says so & shows 1
  next step with a button.
- **No silent pauses.** Your channel gets a warning 4 hours before a monitor
  with no runs pauses. The next run resumes it.
- **No X account needed.** You never share your X login or an API key.

### Accurate rows

- Reposts carry the full original text.
- Every ID in a row stays exact.
- Mentions, links, hashtags & highlights line up with the text.
- Verified badges match what `x.com` shows.
- Rows hold public data only.
- Ads & promoted entries never reach your rows.
- Monitors report only real deletions & unfollows.
- Profile change alerts don't flap.

### Fresh data

- Account monitors see changes within about a second.
- Keyword monitors catch every matching post.
- Monitors don't miss posts.
- A monitor that falls behind catches up on what it missed.
- Live videos & Spaces raise an event when they start.
- Reads keep working when X ships changes.

### Speed

- One slow page doesn't hold up your run.
- Stalled Actor calls recover on their own.

### Fair billing

- Monitors have 1 flat hourly price, events & webhooks included.
- Monitor Actors bill only the hours a monitor watched.

### Reliability

- A one-off error doesn't fail your run.
- Actors ride out short Xquik outages.
- Actor runs survive restarts without repeats.
- Stopped runs keep their rows & their report.
- A run that can't start still explains itself.
- Webhooks are signed & replay-safe.
- A webhook that was down still gets its events, for up to 7 days.
- New events arrive on time, even after your webhook was down.
- Webhooks never go to private or local hosts.
- Chat alerts arrive in order without hitting rate limits.
- Support can see exactly what a request or run returned.

### Built for agents

- Actors accept input written for other Actors.
- Every run says why it ended & whether to retry.

### Rich data

- Post rows carry note text, edits, Community Notes, reach labels & reply
  controls.
- Rows carry source apps, media counts & professional account data.
- Media comes with variants, alt text, sizes & availability reasons.

### Quality checks

- Every field X shows is served, left out on purpose or proven absent.
- Xquik tests every read live against X.
- Actor READMEs, schemas & real output name the same fields.

## What data does X (Twitter) to Discord Bot send?

- Every new tweet, reply, quote & repost of the accounts you watch, usually
  caught in under a second after X shows it.
- Every new tweet that matches your keyword, with any X search operator.
- Live videos, Spaces, deleted tweets, profile changes, follows & followers,
  when you turn them on.
- Each alert as a Discord message that names the account & the event, holds the
  tweet's text & links to it on X.
- Every event in the run's dataset & in 1 history dataset per saved task or
  monitor name.

## How to send tweets to Discord

Monitoring needs a paid Apify plan.
[Pick a plan](https://apify.com/pricing?fpr=xquik), then come back here & press
Try for free.

1. In Discord, open your channel's settings, then Integrations, then Webhooks.
2. Create a webhook & copy its URL.
3. Open Xquik's X (Twitter) to Discord Bot in Apify Console & paste the URL into
   `discordWebhookUrl`.
4. Paste usernames into `twitterHandles`, or X searches into `searchTerms`.
5. Click Start. Monitoring begins in that run, & the channel gets a test
   message.
6. Add a schedule that runs the Actor every hour, with the same input.

Each later run charges the hours watched since the run before. It saves the new
events to its dataset & ends fast. A monitor with no run for 24 hours pauses, &
your channel gets a warning 4 hours before that. The next run resumes it &
charges the unpaid hours first.

## Input

| Field                                                   | What it does                                                          |
| ------------------------------------------------------- | --------------------------------------------------------------------- |
| `discordWebhookUrl`                                     | The webhook URL of your Discord channel.                              |
| `twitterHandles`                                        | Usernames with or without @, or `x.com` profile URLs, 1 a line.       |
| `searchTerms`                                           | X searches, such as `"x api" lang:en`. Each search is 1 monitor.      |
| `monitorName`                                           | Names this set of accounts & keywords, for runs without a saved task. |
| `newPosts`, `replies`, `quotes`, `reposts`              | New tweets, replies, quote tweets & reposts. On by default.           |
| `deletedPosts`, `liveVideos`                            | Deleted tweets, live videos & Spaces of accounts.                     |
| `profileChanges`, `followingChanges`, `followerChanges` | Profile changes, follows & followers of accounts.                     |
| `eventTypes`                                            | Exact event types, which replace the checkboxes.                      |
| `webhookUrls`, `telegram`                               | Slack, any HTTPS webhook or Telegram, beside Discord.                 |
| `since`                                                 | Saves the kept events since a date in the last 30 days, once.         |
| `stop`                                                  | Stops the monitor & turns alerts off.                                 |

1 input takes up to 100 accounts & keywords. Keywords send tweet events only. A
run without a Discord URL still watches & saves new events to its dataset, & its
status says to add a webhook URL.

These inputs are ready to copy.

```json
{
  "discordWebhookUrl": "https://discord.com/api/webhooks/000/XXXX",
  "twitterHandles": ["NASA"]
}
```

```json
{
  "discordWebhookUrl": "https://discord.com/api/webhooks/000/XXXX",
  "searchTerms": ["\"your game\" -from:yourstudio"],
  "monitorName": "game-mentions"
}
```

## Output

Each run returns 4 outputs.

- **Status page**, the `STATUS.html` record. It shows if the monitor watches,
  the 1 next step with a button, what the run saved & charged, the targets &
  each alert destination. The Output tab shows it.
- **Status record**, the `STATUS` record. It holds the same status as JSON.
- **New events**, the run's dataset. It holds each new event, oldest first, & 1
  status row last.
- **Diagnostics**, written only when something needs attention.

An event row is the event exactly as Xquik's REST API serves it, with every
field. The status record holds `state`, `targets`, `destinations`,
`eventsSaved`, `hoursCharged`, `paidThrough`, `pausesAt`, `nextStep`,
`nextStepAction` & `nextStepUrl`, as X (Twitter) to Discord Bot shows them.

The history dataset in your account keeps every event of the monitor, each once.
Its name starts with `x-monitor-`.

## For AI agents

1 call is the whole API. Each call starts or updates the monitor, charges the
hours watched since the call before, & returns only what is new. No call charges
an hour twice. A call that starts or updates a monitor ends fast, inside what
Apify's MCP waits for. A stop takes about half a minute & saves the last events.

This input starts or continues a monitor.

```json
{
  "discordWebhookUrl": "https://discord.com/api/webhooks/000/XXXX",
  "twitterHandles": ["NASA"],
  "monitorName": "agent-demo"
}
```

The run's dataset holds the new events, then 1 row with `resultType` `status`.
Its `state` says if the monitor watches, & `nextStep` says what to do next. To
check a monitor, call the Actor again with the same input. That changes nothing
& charges only hours already watched.

A monitor needs a run at least once every 24 hours to keep watching. Apify's MCP
server has no schedule tool, so you cannot add one. Ask the user to add an Apify
schedule on the page in `nextStepUrl`. It runs the Actor every hour with the
same input. Stop it with the same input & `"stop": true`.

## How much does a Twitter to Discord bot cost?

Every paid Apify plan costs $0.0045 per monitor-hour. 1 account or keyword is 1
monitor. Apify bills your platform usage separately.

- 1 account sent to Discord for 30 days costs about $3.24.
- 5 accounts for 30 days cost about $16.20.
- Events & alerts are free, however many arrive.
- No start fee. A run charges only hours already watched.
- A target X does not have watches nothing & costs nothing.
- Your maximum cost per run caps each charge. Hours past it wait for the next
  run.

An hourly schedule keeps Apify usage small next to the hours it pays. Runs every
few minutes add usage & change nothing for alerts, which arrive between runs
anyway.

Monitoring needs a [paid Apify plan](https://apify.com/pricing?fpr=xquik). On
the free plan, a run starts no monitor & charges nothing. It shows the 5 latest
tweets of your first account instead.

## Limits & recovery

- 1 input takes up to 100 accounts & keywords. Use 2 tasks for more.
- Up to 10 webhook URLs per input, plus Telegram.
- Events stay 30 days, so `since` can save them again within that time.
- A run that stops early leaves its events for the next run. None is lost.
- Each run writes 1 free status row, so its dataset is never empty.
- Every monitor Actor of Xquik charges the same hour price. A run pays the
  oldest unpaid hours of all your monitors, whichever Actor watched them.

## Related Xquik Actors

Every Xquik Actor shares the same extraction engine, filter-first billing &
diagnostics. Pick the one that matches the data you need.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper) scrapes tweets from
  searches, profile timelines, Lists & tweet IDs with 50+ filters & flat
  exports. Use it when you need tweet data without analysis. From $0.00015 per
  row.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper) scrapes
  profiles plus their posts, replies, media & followers from handles, IDs or
  URLs. Use it when you start from accounts rather than searches. From $0.00015
  per row.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper) scrapes replies,
  comments & whole conversations under posts with 25+ filters. Use it when you
  need the discussion beneath tweets. From $0.00015 per row.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper) scrapes
  replies, quotes, retweeters & threads for post URLs or IDs in bulk. Use it
  when you measure who engaged with posts. From $0.00015 per row.
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper)
  scrapes the quote tweets of posts with text, media, counts, authors & 11
  filters. Use it when you study who quoted posts & what they said. From
  $0.00015 per tweet.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper) scrapes
  followers, following, List members, subscribers & Community members as profile
  rows. Use it when you need audience or member lists. From $0.00015 per
  profile.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper)
  searches users by handle, bio & location with follower, verification, age &
  location filters. Use it when you build account lists from search. From
  $0.00015 per profile.
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper)
  checks where accounts are based with X's "Account based in" label, "connected
  via" & username changes. Use it when you vet where accounts are based. From
  $0.00015 per account.
- [X Email Scraper](https://apify.com/xquik/x-email-scraper) gets the emails,
  phones & links accounts publish on their profiles, from handles, followers or
  user searches. Use it when you need the emails profiles publish. From $0.00015
  per profile.
- [X List Scraper](https://apify.com/xquik/x-list-scraper) scrapes List posts,
  members & followers from List URLs or IDs. Use it when a curated List defines
  your sources. From $0.00015 per row.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper) scrapes
  Community info, posts, searches, members & moderators. Use it when your
  sources are X Communities. From $0.00015 per row.
- [X Space Scraper](https://apify.com/xquik/x-space-scraper) finds Spaces by
  keyword & reads their titles, states, times, listener counts, hosts &
  speakers. It also reads broadcasts by URL or ID. Use it when you track live
  audio & video on X. From $0.00015 per Space or broadcast.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper) scrapes real-time
  trends by location with rank, volume, query & WOEID. Use it when you track
  what is trending where. From $0.00015 per trend.
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper) scrapes X job listings
  by keyword, place, workplace, seniority & company, with salaries & apply
  links. Use it when you collect job openings posted on X. From $0.00015 per
  job.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper) scrapes
  long-form X Articles as Markdown & text with covers, authors, dates & metrics.
  Use it when you need article bodies, not tweets. From $0.00015 per article.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader) extracts or
  stores photos, videos & GIFs from posts or profiles with MP4 & metadata
  options. Use it when you need the media files themselves. From $0.00015 per
  media row.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring)
  tracks brand mentions with AI relevance, sentiment & customer-experience
  answers & compares runs. Use it when you watch a brand over time. From $0.0003
  per analyzed tweet.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis)
  labels attitude, intensity & sarcasm probability for every tweet with AI. Use
  it when you need general sentiment on any topic. From $0.0003 per analyzed
  tweet.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)
  labels bullish, bearish, neutral or mixed stance, content type, conviction &
  asset relevance with AI. Use it when you follow stocks, crypto or trading
  talk. From $0.0003 per analyzed tweet.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)
  labels news posts by format, source attribution & topic relevance with AI. Use
  it when you separate reporting from commentary. From $0.0003 per analyzed
  tweet.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)
  answers your own category, score & yes/no questions for every tweet with AI.
  Use it when the preset analyses do not fit your labels. From $0.0003 per
  analyzed tweet.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)
  estimates a Viral Score from 0 to 100 & a verdict for every tweet from 8 AI
  trait answers. Use it when you study why tweets spread or flop. From $0.0003
  per analyzed tweet.
- [X (Twitter) Monitor](https://apify.com/xquik/x-twitter-monitor) catches every
  new tweet, reply, quote, repost & profile change of accounts, usually in under
  a second after X shows it, plus keyword tweets & follows. Use it when you need
  alerts as soon as X shows a tweet. From $0.0045 per monitor-hour.

## FAQ

Answers to common questions, then where to get help.

### Do I need X cookies, an API key or a login?

No. Xquik's X (Twitter) to Discord Bot needs no X cookies, API key, login or
credentials. Every check runs on Xquik's infrastructure.

### Do I need to host or invite a bot?

No. Discord posts each alert through your channel's webhook. Nothing runs on
your side, & nobody needs to invite anything to the server.

### How fast do tweets reach Discord?

Xquik usually catches a new tweet, reply, quote or repost of a watched account
in under a second after X shows it. The tweet usually reaches Discord about a
second after X shows it. Alerts never wait for a run.

### Can I send keyword tweets to Discord?

Yes. Add X searches to `searchTerms`. Each new tweet that matches them reaches
the channel.

### Can I post to more than 1 channel?

Yes. Put the other channels' webhook URLs in `webhookUrls`, up to 10 for each
input.

### Why does the run say monitoring needs a paid plan?

Monitors run between runs, all day. So they need a paid Apify plan. Upgrade,
then run again with the same input.

### What happens when I stop the monitor?

The run stops every target & turns alerts off. It charges the hours watched
until then. It saves the newest events within about half a minute, so none is
lost. Events already kept stay readable for 30 days.

### Can I use the API, schedules & integrations?

Yes. Use the Apify API or the Xquik REST API. The
[API tab](https://apify.com/xquik/x-twitter-to-discord/api) has Python,
JavaScript & cURL examples. Apify
[schedules](https://docs.apify.com/platform/schedules) keep the monitor running.
Agents use [Apify MCP](https://docs.apify.com/platform/integrations/mcp).

### Is it legal to monitor X accounts?

Xquik's X (Twitter) to Discord Bot requests public X data. Results can contain
personal data. Confirm a lawful purpose & follow the privacy rules that apply to
you. Ask qualified counsel when uncertain.

### Where do I get help?

Open an issue in the
[Issues tab](https://apify.com/xquik/x-twitter-to-discord/issues) with the run
ID. The status page explains every run, & free diagnostics cover runs that need
attention.

### Can I get a custom solution?

Yes. Describe what you need in the
[Issues tab](https://apify.com/xquik/x-twitter-to-discord/issues). Xquik also
offers a dashboard, a REST API, an MCP server & webhooks. Find Xquik's website
on its [Apify profile](https://apify.com/xquik).
