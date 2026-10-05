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

## Migrate from another sentiment Actor

Use 1 name per setting when adapting an existing input.

| Existing input name                                 | Xquik field      |
| --------------------------------------------------- | ---------------- |
| `query`, `searchQuery`                              | `twitterContent` |
| `queries`, `searchQueries`, `search`                | `searchTerms`    |
| `handles`, `usernames`, `username`, `profileTweets` | `twitterHandles` |
| `tweetUrls`, `postUrls`, `urls`                     | `startUrls`      |
| `tweetIDs`, `tweet_ids`, `postIds`, `tweetId`       | `tweetIds`       |
| `maxTweets`, `maxResults`, `count`, `max_posts`     | `maxItems`       |
| `sort`                                              | `queryType`      |
| `tweetLanguage`, `language`                         | `lang`           |
| `startDate`, `endDate`                              | `since`, `until` |

The Actor accepts these common names directly. Use `Latest` or `Top` for `sort`.
Keep language codes & date boundaries. Limits apply across all targets. This
input is ready to run:

```json
{ "searchTerms": ["from:NASA"], "sort": "Latest", "maxItems": 5 }
```

Other inputs need conversion before the run.

Wrap a single `tweetUrl` in `startUrls`:

```json
{ "startUrls": ["https://x.com/NASA/status/2105727882588807607"] }
```

Put `text`, `Texts`, dataset strings or file strings in `texts`:

```json
{ "texts": ["Support fixed my issue. Thank you."] }
```

Turn `hashtag` or `cashtag` into search strings:

```json
{ "searchTerms": ["#Artemis lang:en", "$AAPL lang:en"], "maxItems": 5 }
```

Replace `minLikes`, `minReplies` & `minRetweets` with these field names:

```json
{ "min_faves": 10, "min_replies": 2, "min_retweets": 3 }
```

Results keep the original record in `tweet` & answers in `analysis.answers`. Map
positive, negative & neutral labels to the matching sentiment categories. Keep
`mixed` & `unclear` as separate categories. Other sentiment scores may use
different scales & meanings. Xquik's intensity runs from 0 to 2 & may include
decimals. Sarcasm is a probability. Confidence describes an answer's certainty.

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

Choose from 50 public tasks. Start with the example that matches your question.
Most tasks use small caps. The 2 dated searches request 50 posts. Open a task to
use its saved input. The copy-ready inputs & observed yields below help you
choose settings.

Every successful row returns sentiment, intensity & sarcasm probability. Each
keeps its original post or supplied text beside the answers. These examples use
English inputs & language filters. A language label can still miss
other-language text within a post or quote.

Without targets, an answer describes the post's main subject. A keyword mention
can concern something else. With several targets, the sentiment answer describes
them together. It does not return a separate answer for every target.

Profile likes may be hidden. Use profile replies or posts if unavailable.

Search results can include announcements, promotions, jokes & repeated text.
Distinct post IDs do not prove independent reactions or customer identities.
Opinion phrases & engagement filters select a sample. Review the posts before
counting them as feedback. Analysis does not verify their claims.

### Tested task inputs

Open a task. Its Input tab has visual fields & JSON. Copy its JSON or change the
fields before starting.
[Apify explains task inputs](https://docs.apify.com/actors/running/tasks).

Test dates use UTC. Yields describe the recorded run, not a guaranteed supply.
The dated 50-post examples show why unique IDs differ from independent opinions.

#### Finale review drafts

[Season finale review texts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-season-finale-reactions)

Separate praise from criticism in your finale review drafts. Observed 3 unique
supplied texts on 2026-10-01. Cap: 3. These are your own illustrative texts, not
audience research.

#### Phone launch discussion

[September 2026 iPhone launch posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-iphone-launch-posts)

Review launch discussion within a fixed September date window. Observed 5 unique
posts on 2026-10-01. Cap: 5. Announcements and personal opinions can both match.

#### Halftime show reviews

[Halftime show review texts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-super-bowl-halftime-show)

Check mixed judgments and sarcasm in your halftime reviews. Observed 3 unique
supplied texts on 2026-10-01. Cap: 3. These are your own illustrative reviews,
not live show reactions.

#### Electric car experiences

[Electric car experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-new-electric-car)

Find posts about driving or choosing an electric car. Observed 5 unique posts on
2026-10-01. Cap: 5. Personal phrases can match jokes or secondhand accounts.

#### Movie discussion

[Marvel movie discussion posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-marvel-movie-audiences)

Review movie discussion before selecting audience comments. Observed 5 unique
posts on 2026-10-01. Cap: 5. Marvel can match unrelated uses of the word.

#### Artist media captions

[Taylor Swift media caption tone](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-taylor-swift-album-reactions)

Review the artist's wording beside recent media. Observed 5 unique posts on
2026-10-01. Cap: 5. Captions cannot describe everything shown in images or
videos.

#### Game release thread

[Game release update thread](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-video-game-launch)

Read an announcement beside responses about competing games. Observed 5 unique
posts on 2026-10-01. Cap: 5. The thread mentions several games and includes its
opening post.

#### Remote work discussion

[Remote work discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-remote-work)

Compare attitudes expressed in remote work discussion. Observed 5 unique posts
on 2026-10-01. Cap: 5. Job ads and repeated opinions can appear.

#### Airline posts

[Airline discussion posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-airline-passengers)

Review airline mentions before choosing service feedback. Observed 5 unique
posts on 2026-10-01. Cap: 5. A mention does not prove the author is a passenger.

#### College football discussion

[College football discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-college-football-fans)

Separate fan opinions from college football promotion. Observed 5 unique posts
on 2026-10-01. Cap: 5. Previews and promotions can match beside fan opinions.

#### Interest rate discussion

[Interest rate discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-interest-rates)

Review market and policy attitudes around interest rates. Observed 5 unique
posts on 2026-10-01. Cap: 5. The main subject can be a politician or the market.

#### Scooter discussion

[Electric scooter discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-electric-scooters)

Find scooter discussion before choosing rider feedback. Observed 5 unique posts
on 2026-10-01. Cap: 5. Ads, research and jokes can match beside personal
experiences.

#### Restaurant experiences

[New restaurant experiences](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-restaurant-openings)

Review first-person wording about new restaurants. Observed 5 unique posts on
2026-10-01. Cap: 5. Personal wording can also appear in invitations or
recommendations.

#### Public list feed tone

[Public list feed tone](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-ai-coding-assistants)

Review the tone of posts in a public List. Observed 5 unique posts on
2026-10-01. Cap: 5. Members can discuss other subjects and repost another
person's wording.

#### Device profile replies

[Google device profile reply tone](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-smart-home-device-owners)

Review wording from a device profile, including replies. Observed 5 unique posts
on 2026-10-01. Cap: 5. Missing parent context can limit what a profile reply
means.

#### Marathon training

[Marathon training discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-marathon-runners)

Find attitudes in training updates and marathon plans. Observed 5 unique posts
on 2026-10-01. Cap: 5. Plans and promotion can appear beside runner updates.

#### Trip planning

[Personal Tokyo trip posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-tourist-destinations)

Review personal trip plans and travel stories. Observed 5 unique posts on
2026-10-01. Cap: 5. Tokyo-named events can match without describing a Japan
trip.

#### Streaming price discussion

[Netflix price discussion posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-streaming-price-increases)

Find Netflix price concerns before reviewing cancellation reasons. Observed 5
unique posts on 2026-10-01. Cap: 5. Price phrases select concerns, not a
representative viewer sample.

#### School supply shopping

[August 2026 school supply posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-back-to-school-shoppers)

Review 50 school supply posts within an August window. Observed 50 unique posts
on 2026-10-01. Cap: 50. The 50 IDs included 42 clearly related rows in our
review.

#### Train delays

[Train delay experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-public-transit)

Find complaints and experiences involving delayed trains. Observed 5 unique
posts on 2026-10-01. Cap: 5. Personal phrases can miss official notices.

#### Pet food discussion

[Pet food experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-pet-food-brands)

Review pet food mentions within wider care discussion. Observed 5 unique posts
on 2026-10-01. Cap: 5. Care or veterinary discussions can mention food brands
incidentally.

#### Selected fantasy sports posts

[Fantasy sports post batch](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-fantasy-football-apps)

Analyze a selected batch of fantasy sports posts. Observed 2 unique posts on
2026-10-01. Cap: 2. Labels concern each post's subject, not automatically an
app.

#### Coffee shop experiences

[Coffee shop experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-coffee-shop-customers)

Find coffee shop comments before selecting customer feedback. Observed 5 unique
posts on 2026-10-01. Cap: 5. Author complaints remain unverified statements.

#### Housing market

[Housing market discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-housing-market)

Review opinions and news about the housing market. Observed 5 unique posts on
2026-10-01. Cap: 5. News and opinions can concern different market issues.

#### Tournament discussion

[League of Legends tournament posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-esports-tournament-viewers)

Separate tournament discussion from ticket or match promotion. Observed 5 unique
posts on 2026-10-01. Cap: 5. Ticket ads and match reports are not viewer
opinions.

#### Podcast publisher posts

[Podcast publisher post tone](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-podcast-episodes)

Review the podcast publisher's own messaging. Observed 5 unique posts on
2026-10-01. Cap: 5. Publisher tone does not measure listener satisfaction.

#### Gym comparisons

[Gym comparison review texts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-gym-memberships)

Check combined attitude toward 2 gyms in your reviews. Observed 3 unique
supplied texts on 2026-10-01. Cap: 3. Both targets share 1 sentiment answer per
text.

#### Car rentals

[Car rental experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-car-rental-customers)

Find car rental comments before reviewing service concerns. Observed 5 unique
posts on 2026-10-01. Cap: 5. Inquiries and promotions can match beside renter
accounts.

#### Campus discussion

[University cost and campus posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-university-life)

Review campus discussion before selecting cost-related posts. Observed 5 unique
posts on 2026-10-01. Cap: 5. Campus news and criticism do not prove student
experiences.

#### Wedding planning

[Personal wedding planning posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-wedding-planning-posts)

Find first-person wording about wedding plans and costs. Observed 5 unique posts
on 2026-10-01. Cap: 5. Stories, jokes and incidental wording can match beside
planning experiences.

#### Charging experiences

[EV charging experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-ev-charging-experiences)

Review charging experiences within electric vehicle discussion. Observed 5
unique posts on 2026-10-01. Cap: 5. Charging can be secondary to another vehicle
concern.

#### Tax filing discussion

[Spring 2026 TurboTax filing posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-tax-filing-software)

Review filing discussion within a fixed spring date window. Observed 5 unique
posts on 2026-10-01. Cap: 5. Posts do not verify current fees or tax rules.

#### Theme park visits

[Theme park visit discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-theme-park-visitors)

Find theme park mentions before choosing visit reactions. Observed 5 unique
posts on 2026-10-01. Cap: 5. Incidental references can match longer posts about
another subject.

#### Grocery spending

[Grocery budget experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-grocery-prices)

Find first-person comments about grocery spending. Observed 5 unique posts on
2026-10-01. Cap: 5. Wider political, nutrition or creator discussions can
mention grocery spending.

#### Camera discussion

[Phone camera discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-phone-camera-reviews)

Review camera mentions beside photos, reviews and announcements. Observed 5
unique posts on 2026-10-01. Cap: 5. Camera mentions can be incidental in other
announcements.

#### Selected sneaker post

[A selected sneaker post](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-sneaker-drop-reactions)

Analyze a known post without a broad keyword search. Observed 1 unique posts on
2026-10-01. Cap: 1. This selected caption does not describe every detail of its
image.

#### Support chatbots

[Support chatbot discussion posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-customer-support-chatbots)

Find support chatbot discussion before selecting service complaints. Observed 5
unique posts on 2026-10-01. Cap: 5. Emotional support bots and business
responses can also match.

#### Festival discussion

[April 2026 Coachella discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-music-festival-attendees)

Review 50 festival posts within an April window. Observed 50 unique posts on
2026-10-01. Cap: 50. The 50 IDs included 47 related rows and repeated news copy.

#### Electricity bills

[Electricity bill discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-electric-bills)

Review personal electricity costs beside policy discussion. Observed 5 unique
posts on 2026-10-01. Cap: 5. Policy claims and price predictions remain
unverified.

#### Basketball roster changes

[NBA trade and signing discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-nba-trade-reactions)

Find trade and signing discussion before choosing fan reactions. Observed 5
unique posts on 2026-10-01. Cap: 5. Other stories can mention players or teams
incidentally.

#### Stay discussion

[Airbnb stay discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-airbnb-stays)

Focus attitudes toward Airbnb within stay discussion. Observed 5 unique posts on
2026-10-01. Cap: 5. Host promotion and app posts can appear beside guest
stories.

#### Book reactions

[Book reading reaction posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-book-club-readers)

Review reading reactions without assuming book club membership. Observed 5
unique posts on 2026-10-01. Cap: 5. Film comparisons and personal reading
opinions can both match.

#### Meal kit experiences

[HelloFresh experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-meal-kit-services)

Find meal kit comments before reviewing product experiences. Observed 5 unique
posts on 2026-10-01. Cap: 5. Plans, ads and wider personal stories can mention
the brand.

#### Race discussion

[Formula 1 race discussion posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-formula-one-race-weekends)

Review race discussion beside team and driver statements. Observed 5 unique
posts on 2026-10-01. Cap: 5. Quoted driver statements can repeat across
different IDs.

#### Dating app experiences

[Dating app experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-dating-app-experiences)

Find dating app experiences, match remarks and jokes. Observed 5 unique posts on
2026-10-01. Cap: 5. Match remarks and jokes do not verify customer identities.

#### Airport wait posts

[Airport wait and lounge posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-airport-travelers)

Review airport wait comments beside travel notices. Observed 5 unique posts on
2026-10-01. Cap: 5. Official notices can appear beside personal wait
experiences.

#### School lunch discussion

[School lunch discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-school-lunch-programs)

Review personal posts and policy debate about school lunches. Observed 5 unique
posts on 2026-10-01. Cap: 5. Authors can include institutions, not only parents.

#### Beer tasting

[Craft beer tasting posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-craft-beer-drinkers)

Find beer tasting opinions before choosing review examples. Observed 5 unique
posts on 2026-10-01. Cap: 5. Thin linked captions can lack enough context for a
clear attitude.

#### Docking announcement quotes

[SpaceX docking announcement quotes](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-space-launches)

Review quotes of one docking announcement after a fixed time. Observed 5 unique
posts on 2026-10-01. Cap: 5. Quotes can be invitations or neutral descriptions,
not only reactions.

#### Birthday replies

[NASA birthday replies](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-replies-to-a-news-post)

Review direct replies to one birthday post. Observed 5 unique posts on
2026-10-01. Cap: 5. Missing root context can limit what a reply's answer means.

Keep `maxItems` small while you inspect results. A cap limits output, not
supply. If fewer posts qualify, check the run report before changing your
filters. Widen 1 setting at a time, such as dates or an engagement floor. Keep a
record of the setting you changed.

For failed analyses, inspect `analysis.reason` & retry only the affected IDs.
For incomplete replies, inspect the free diagnostic before calling them
complete. Media captions cannot describe everything shown in an image or video.
Missing quote or reply context can make an answer uncertain.

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
- [X Space Scraper](https://apify.com/xquik/x-space-scraper): Finds Spaces by
  keyword & reads their titles, states, times, listener counts, hosts &
  speakers. Also reads broadcasts by URL or ID. Use it when you track live audio
  & video on X. From $0.00015 per Space or broadcast.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): Scrapes
  real-time trends by location with rank, volume, query & WOEID. Use it when you
  track what is trending where. From $0.00015 per trend.
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper): Scrapes X job
  listings by keyword, place, workplace, seniority & company, with salaries &
  apply links. Use it when you collect job openings posted on X. From $0.00015
  per job.
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
