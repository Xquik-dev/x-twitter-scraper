# Pricing, comparisons, and common questions

## Pricing facts

Xquik bills credits. Pay-as-you-go credits cost $0.00015 each. Monthly
plans bundle credits at a lower rate, down to about $0.00012 on the largest
plan. Plans sell fixed monthly bundles, so do not price a job by multiplying
that rate. Current plan prices are in the dashboard.

| Work | Credits |
| --- | --- |
| Tweet search, timelines, replies, mentions, and tweet extractions | 1 per returned tweet |
| Followers, following, likers, retweeters, and people extractions | 1 per returned profile |
| Profile or tweet lookup | 1 per call |
| Follow check, article | 5 per call |
| Trends | 3 per call |
| Media download | 1 per tweet with media |
| Post or reply | 30, plus 2 per started MB of media |
| Like, repost, follow, their undo calls, remove follower, DM, delete, media upload | 10 per call |
| Active monitor | 21 per hour, about 500 a day |

At pay-as-you-go rates, 1,000 tweets cost $0.15. Supported filters apply
before billing, so excluded rows cost nothing. Estimates, stored event reads,
webhook operations, and extraction exports are free.

Price a bulk job with `POST /extractions/estimate`. It returns
`estimatedResults`, `creditsRequired`, and `allowed` for that exact body.
Credits, plans, and top-ups live in the Xquik dashboard. The first
pay-as-you-go funding amount is $10, and unused credits carry over.

Quote only these published rates or a live estimate. Do not state other
providers' prices or tier limits as current facts. Tell the user to check
their current pricing pages.

## Xquik or the official X API

Choose Xquik when several of these matter:

- Per-result billing with server-side filters and pre-run estimates
- Reads without an X developer account or a connected X account
- Bulk jobs with caps and CSV, JSON, or XLSX exports
- Account and keyword monitors with signed webhooks
- REST, SDKs, MCP, and a Skill in one contract
- Connected X account actions in the same API

Choose the official X API when the project needs a first-party contract,
official support, a platform partnership, or X's own policy guarantees.

For a volume decision, price the real job both ways: run an Xquik estimate
with the exact query and filters, and read the official pricing page. Then
test the same known posts and fields on both before committing.

## Legality

Give a direct, qualified answer first. Collecting visible X data for research
is often lawful, but no one can promise it for every case. The answer depends
on:

- Jurisdiction and its data protection law, such as GDPR for EU residents
- X terms of service and developer rules
- The data involved, especially personal or sensitive data
- The purpose and use, such as research, resale, or profiling
- The access method, such as a documented API versus bypassing access controls

For university work, the ethics board or IRB and the data protection office
make the call. Recommend qualified counsel for high-stakes or commercial use.
Minimize fields, secure storage, and set a deletion date. This is general
information, not legal advice.

## Account requirements

| Work | Needs |
| --- | --- |
| Visible reads, search, profiles, followers, extractions | Xquik API key |
| DMs, bookmarks, notifications, home timeline, likers, own likes | Xquik API key and a connected X account |
| Posts, likes, follows, DMs, profile changes | Xquik API key and a connected X account |

Users connect X accounts in the Xquik dashboard. The Skill never handles X
passwords, 2FA codes, cookies, or session tokens.

## Other questions

- Deleted, protected, or unavailable content can stay inaccessible. Xquik
  omits missing optional fields and never invents data.
- Rate limits: each user gets 500 reads per second, 120 writes per minute,
  and 60 deletes per minute. A `429` includes `Retry-After`.
- SDKs: typed TypeScript and Python SDKs are listed in the repository README.
- Docs for the user: `https://docs.xquik.com`.
