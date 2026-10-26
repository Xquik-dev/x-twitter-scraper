**English** ·
[Español](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-twitter-monitor/README.es.md)
·
[Türkçe](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-twitter-monitor/README.tr.md)
·
[简体中文](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-twitter-monitor/README.zh-CN.md)
·
[日本語](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-twitter-monitor/README.ja.md)
·
[한국어](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-twitter-monitor/README.ko.md)
·
[Deutsch](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-twitter-monitor/README.de.md)
·
[Français](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-twitter-monitor/README.fr.md)
·
[Italiano](https://github.com/Xquik-dev/x-twitter-scraper/blob/master/apify/x-twitter-monitor/README.it.md)

[![Framer connects Xquik MCP to coding agents](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Watch how Framer uses Xquik scrapers](https://youtu.be/4UOSpoOoC3Y?t=367)
with Claude Code, Codex, Cursor & more, from 6:07.

Xquik is the world's fastest & cheapest X (Twitter) scraper service with the
most complete X data. Xquik's X (Twitter) Monitor sends Twitter alerts for the
accounts & keywords you pick. It catches every new tweet, reply, quote, repost &
profile change of a watched account. It usually catches each one in under a
second after X shows it. For a keyword, it catches every new matching tweet. It
also catches follows & followers. Each event reaches Discord, Telegram, Slack or
your webhook as an alert. Most other Apify Actors charge before filtering or
deduplicating. Xquik charges only for delivered, unique results, & here only for
the hours a monitor watches.

Paste accounts or keywords & click Start. Monitoring starts at once, & alerts
arrive between runs. You pay **$0.0045 per monitor-hour**. Events & alerts are
free, & Apify bills platform usage separately.

> Xquik is an independent third-party service. Not affiliated with X Corp.
> "Twitter" and "X" are trademarks of X Corp.

## What the Twitter monitor sends

- Every new tweet, reply, quote & repost of the accounts you watch, usually
  caught in under a second after X shows it.
- Every new tweet that matches your keyword, with any X search operator.
- Deleted tweets, live videos & Spaces an account starts.
- Profile changes, also usually caught in under a second after X shows them.
  They cover display name, username, bio, profile photo, banner, location,
  website, verification, protection, pinned tweet & availability.
- New follows & unfollows of each watched account.
- New & lost followers of each watched account.
- Tweets with mentions, hashtags, media, links or polls, & long tweets, in
  `eventTypes`.
- The full event, which is the tweet with its author, counts & media, or the
  change.
- The permanent X user ID beside the current username, so a renamed account
  keeps its monitor.
- Alerts to Slack & Discord in their own message format, to Telegram, & to any
  HTTPS webhook as signed JSON.
- A test alert to each new webhook, Slack or Discord URL, with its answer in the
  run status. Telegram confirms in the chat when you press Start.
- Every event in the run's dataset & in 1 history dataset per saved task or
  monitor name.

## What you get

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
- Monitors don't miss posts between checks.
- A monitor that falls behind catches up on what it missed.
- Live videos & Spaces raise an event when they start.
- Reads keep working when X ships changes.

### Speed

- A slow X answer doesn't hold up your request.
- Stalled Actor calls recover on their own.
- Webhooks arrive without connection setup delay.

### Fair billing

- Monitors have 1 flat hourly price, events & webhooks included.
- Monitor Actors bill only the hours a monitor watched.

### Reliability

- A one-off X failure doesn't fail your request.
- Actors ride out short Xquik outages.
- Actor runs survive restarts without repeats.
- Stopped runs keep their rows & their report.
- A run that can't start still explains itself.
- Webhooks are signed & replay-safe.
- Webhook deliveries retry until they land, for up to 7 days.
- New events don't queue behind old retries.
- Webhooks never go to private or local hosts.
- Chat alerts arrive in order without hitting rate limits.
- Problems on X's side are fixed before they reach your reads.
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
- Every read is checked live each hour.
- Actor READMEs, schemas & real output name the same fields.

## How to set up Twitter keyword alerts

Monitoring needs a paid Apify plan.
[Pick a plan](https://apify.com/pricing?fpr=xquik), then come back here & press
Try for free.

1. Open Xquik's X (Twitter) Monitor in Apify Console.
2. Paste usernames into `twitterHandles`, or X searches into `searchTerms`.
3. Pick the events that send an alert. New tweets, replies, quotes & reposts are
   on by default.
4. Paste webhook URLs into `webhookUrls`, or turn on `telegram`.
5. Click Start. Monitoring begins in that run.
6. Add a schedule that runs the Actor every hour, with the same input.

Each later run charges the hours watched since the run before. It saves the new
events to its dataset & ends fast. A monitor with no run for 24 hours pauses.
Your alerts warn you 4 hours before that. The next run resumes it & charges the
unpaid hours first.

The same input continues the same monitors. A changed input updates them. A
saved task keeps 1 set of monitors. Without a task, `monitorName` names the set,
so 2 names keep 2 sets apart.

## Twitter alerts in Discord, Telegram & Slack

- **Discord.** Paste a channel webhook URL into `webhookUrls`. Each alert
  arrives as a Discord message, with no bot to host.
- **Telegram.** Turn on `telegram`. The run status gives a link to Xquik's
  Telegram bot. Open it & press Start, & alerts reach that chat.
- **Slack.** Paste an incoming webhook URL. Each alert arrives as a Slack
  message.
- **Any app.** Paste an HTTPS URL. Each alert arrives as signed JSON, the same
  event the dataset holds.

Each new webhook, Slack or Discord URL gets a test alert in the run that adds
it, & the status page says whether it arrived. Telegram sends no test alert. The
bot answers in the chat when you press Start, & the next run shows Telegram as
connected.

## Input

| Field                                | What it does                                                                       |
| ------------------------------------ | ---------------------------------------------------------------------------------- |
| `twitterHandles`                     | Usernames with or without @, or `x.com` profile URLs, 1 a line.                    |
| `searchTerms`                        | X searches, such as `"x api" lang:en`. Each search is 1 monitor.                   |
| `monitorName`                        | Names this set of accounts & keywords, for runs without a saved task.              |
| `newPosts`                           | Every new tweet. On by default.                                                    |
| `replies`, `quotes`, `reposts`       | Replies, quote tweets & reposts. On by default.                                    |
| `deletedPosts`, `liveVideos`         | Deleted tweets, live videos & Spaces of accounts.                                  |
| `profileChanges`, `followingChanges` | Profile changes, follows & unfollows of accounts.                                  |
| `followerChanges`                    | New & lost followers of accounts.                                                  |
| `eventTypes`                         | Exact event types, which replace the checkboxes, such as follower changes & media. |
| `webhookUrls`                        | HTTPS URLs, 1 a line. Slack & Discord URLs are detected.                           |
| `telegram`                           | Sends alerts to Telegram through a link the run gives you.                         |
| `since`                              | Saves the kept events since a date in the last 30 days, once.                      |
| `stop`                               | Stops the monitor & turns alerts off.                                              |

1 input takes up to 100 accounts & keywords. Keywords send tweet events only.
Put a phrase in quotes to match it exactly, as in `"x api"`. Without quotes, the
words can appear anywhere in a tweet. To catch mentions of an account, add the
keyword `@username`. Telegram needs no username or chat ID. The run status gives
a link. Open it & press Start, & alerts reach that chat.

These inputs are ready to copy.

```json
{ "twitterHandles": ["NASA", "SpaceX"], "reposts": false }
```

```json
{
  "searchTerms": ["\"your brand\" -from:yourbrand"],
  "webhookUrls": "https://hooks.slack.com/services/T000/B000/XXXX",
  "monitorName": "brand-mentions"
}
```

```json
{ "twitterHandles": ["elonmusk"], "profileChanges": true, "telegram": true }
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
field.

```json
{
  "resultType": "event",
  "id": "981",
  "type": "tweet.new",
  "occurredAt": "2026-10-13T09:00:01.000Z",
  "monitorId": "2944",
  "monitorType": "account",
  "username": "NASA",
  "xUserId": "11348282",
  "data": { "tweetId": "1977000000000000000", "text": "Liftoff!" }
}
```

The sample values show the shape. Live data differs.

The status record holds `state`, `targets`, `destinations`, `eventsSaved`,
`pendingEvents`, `hoursCharged`, `chargedUsd`, `chargeConfirmed`, `hoursOwed`,
`paidThrough`, `pausesAt`, `historyDataset`, `notices`, `nextStep`,
`nextStepAction` & `nextStepUrl`. A target X does not have says so in its
`message`, & the monitor watches the rest. A new generic webhook shows its
signing secret once, in the status record only.

The history dataset in your account keeps every event of the monitor, each once.
Its name starts with `x-monitor-`.

## For AI agents

1 call is the whole API. Each call starts or updates the monitor, charges the
hours watched since the call before, & returns only what is new. No call charges
an hour twice. A call that starts or updates a monitor ends fast, inside what
Apify's MCP waits for. A stop takes about half a minute & saves the last events.
Read its result from the run when your tool stops waiting.

This input starts or continues a monitor.

```json
{
  "twitterHandles": ["NASA"],
  "searchTerms": ["\"x api\" lang:en"],
  "monitorName": "agent-demo"
}
```

A call returns 2 things.

- The run's dataset holds the new events, then 1 row with `resultType` `status`.
  Its `state` says if the monitor watches, & `nextStep` says what to do next.
  `nextStepAction` names the kind of step, such as `add_schedule`, &
  `nextStepUrl` is the page for it.
- The `STATUS` record holds the same status, with a signing secret when the call
  created a webhook.

To check a monitor, call the Actor again with the same input. That changes
nothing & charges only hours already watched. It returns the status & the new
events.

A monitor needs a run at least once every 24 hours to keep watching. Apify's MCP
server has no schedule tool, so you cannot add one. Ask the user to add an Apify
schedule on the page in `nextStepUrl`. It runs the Actor every hour with the
same input. Or call the Actor again yourself from any timer. Stop it with the
same input & `"stop": true`.

The Actor also reads the names agents guess, such as `handles` & `usernames`, &
the run status says how it read them.

## How much does a Twitter monitor cost?

Every paid Apify plan costs $0.0045 per monitor-hour. 1 account or keyword is 1
monitor. An input with 2 accounts & 1 keyword costs 3 monitor-hours each hour.
Apify bills your platform usage separately.

- 1 account watched for 30 days costs about $3.24.
- 10 accounts & 2 keywords watched for 30 days cost about $38.88.
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
tweets of your first account instead, so you can see what alerts would hold.

## Limits & recovery

- 1 input takes up to 100 accounts & keywords. Use 2 tasks for more.
- Up to 10 webhook URLs per input, plus Telegram.
- Events stay 30 days, so `since` can save them again within that time.
- A run that stops early leaves its events for the next run. None is lost.
- A run cut off before its charge pays nothing. Those hours are never billed.
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

## FAQ

Answers to common questions, then where to get help.

### Do I need X cookies, an API key or a login?

No. Xquik's X (Twitter) Monitor needs no X cookies, API key, login or
credentials. Every check runs on Xquik's infrastructure.

### How do I track a Twitter account?

Paste its username into `twitterHandles`, pick the events you want & add an
alert destination. Xquik usually catches each new tweet in under a second after
X shows it, & every event stays in the dataset.

### Can it track crypto accounts & coin mentions?

Yes. Add the accounts you follow, or a keyword search such as a cashtag or a
contract address. Their new tweets & matching tweets reach Discord or Telegram
as alerts.

### How fast do alerts arrive?

Xquik usually catches a new tweet, reply, quote, repost or profile change of a
watched account in under a second after X shows it. Alerts go out as events
arrive & never wait for a run.

### Why does the run say monitoring needs a paid plan?

Monitors run between runs, all day. So they need a paid Apify plan. Upgrade,
then run again with the same input.

### What happens when I stop the monitor?

The run stops every target & turns alerts off. It charges the hours watched
until then. It saves the newest events within about half a minute, so none is
lost. Events already kept stay readable for 30 days.

### How do I check a webhook signature?

A new generic webhook gets a signing secret, shown once in the `STATUS` record.
Each delivery is signed with it, as Xquik's REST webhooks are.

### Can I use the API, schedules & integrations?

Yes. Use the Apify API or the Xquik REST API. The
[API tab](https://apify.com/xquik/x-twitter-monitor/api) has Python, JavaScript
& cURL examples. Apify [schedules](https://docs.apify.com/platform/schedules)
keep the monitor running. Agents use
[Apify MCP](https://docs.apify.com/platform/integrations/mcp).

### Is it legal to monitor X accounts?

Xquik's X (Twitter) Monitor requests public X data. Results can contain personal
data. Confirm a lawful purpose & follow the privacy rules that apply to you. Ask
qualified counsel when uncertain.

### Where do I get help?

Open an issue in the
[Issues tab](https://apify.com/xquik/x-twitter-monitor/issues) with the run ID.
The status page explains every run, & free diagnostics cover runs that need
attention.

### Can I get a custom solution?

Yes. Describe what you need in the
[Issues tab](https://apify.com/xquik/x-twitter-monitor/issues). Xquik also
offers a dashboard, a REST API, an MCP server & webhooks. Find Xquik's website
on its [Apify profile](https://apify.com/xquik).
