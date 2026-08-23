# X data cost study

Reviewed on 2026-08-22.

This study tracks 22 active competitors. It separates published billing from
live output tests. That distinction matters. A request price is not a Tweet
price. A successful HTML response is not a finished dataset.

## Current finding

The published unit model favors Xquik in all 4 synthetic workloads. This is not
the final least-cost proof. Seven competitors have usable row prices. The other
services need live output matching or clearer billing contracts.

Do not turn this finding into a universal savings claim. Complete every blocker
listed below first.

## Matched output

Each scenario requests the same fields:

- Tweet ID
- Text and creation time
- Engagement counts
- Author ID and username

Each scenario uses the same language, date, video, engagement, and Post-type
filters. It allows 2 retries for documented transient failures. Delivery must
support JSON and CSV.

The synthetic Xquik scenario applies filters and removes duplicates before
delivery. Its billed count equals eligible unique delivered rows. Current live
documentation proves filters before billing. It does not prove the final charge
for every deduplicated row. A funded billing test remains required.

## Scenario inputs

| Scenario | Candidates | Rejected | Duplicates | Delivered | Xquik billed |
| --- | ---: | ---: | ---: | ---: | ---: |
| Light | 250,000 | 145,000 | 5,000 | 100,000 | 100,000 |
| Medium | 2,000,000 | 1,500,000 | 100,000 | 400,000 | 400,000 |
| Heavy | 10,000,000 | 8,500,000 | 500,000 | 1,000,000 | 1,000,000 |
| Near-zero yield | 5,000,000 | 4,980,000 | 10,000 | 10,000 | 10,000 |

These counts are synthetic. They test billing rules. They are not measured
production yields.

## Customer review evidence

The [review registry](customer-reviews-2026-08-22.json) tracks all 22 providers.
It contains 17 dated reports across 14 providers. Thirteen reports date from
2025 or later. Three providers have only a current aggregate review page. Five
had no credible independent customer review in the reviewed search results.

Each report records its author when available, date, URL, paraphrased finding,
provider cross-check, and limits. Review reports do not change the price model.
They describe setup, spending surprises, reliability, and support only when a
customer reported them.

## Published unit model

| Provider | Light | Medium | Heavy | Near-zero yield |
| --- | ---: | ---: | ---: | ---: |
| Xquik PAYG | $15 | $60 | $150 | $1.50 |
| Official X API | $1,250 | $10,000 | $50,000 | $25,000 |
| Bright Data | $375 | $3,000 | $15,000 | $7,500 |
| Apify API Dojo Actor | $100 | $800 | $4,000 | $2,000 |
| TwexAPI | $25 | $200 | $1,000 | $500 |
| TwitterAPI.io | $37.50 | $300 | $1,500 | $750 |
| SocialData | $50 | $400 | $2,000 | $1,000 |
| Lobstr.io | $100 | $500 | $500 | $20 |

The table uses Xquik PAYG at $0.00015 per delivered row. It applies competitor
row prices to inspected candidates. The competitor must expose matching filters
before this assumption can change.

Subscription value and first-purchase cash are separate. The provider registry
records both. Unused Xquik credits carry over.

## Competitor coverage

The registry includes:

1. Official X API
2. ScrapingDog
3. Bright Data
4. Apify API Dojo Tweet Scraper
5. Scrapfly
6. ScrapeBadger
7. Social Fetch
8. TwexAPI
9. TwitterAPI.io
10. ScrapingBee
11. ScraperAPI
12. Lobstr.io
13. Oxylabs Web Scraper API
14. SocialData
15. Data365
16. EnsembleData
17. RapidAPI Twitter API45
18. ZenRows
19. Zyte API
20. Crawlbase
21. ScrapingAnt
22. Scrape.do

General scraping services remain in the study. Their price buys an HTTP or
browser result. It does not guarantee a stable X schema, complete pagination,
server-side filters, deduplication, or file delivery.

## Proof blockers

- Run the same query against every direct service on the same day.
- Save redacted request settings and output counts.
- Confirm field parity and freshness.
- Confirm each page size and result cap.
- Test empty, partial, failed, and retried requests.
- Run the funded Xquik filter and deduplication billing test.
- Record first-purchase cash and consumed value separately.
- Resolve services whose full billing contracts require sign-in.
- Recalculate when any source changes.

Until these checks pass, `leastCostProven` stays `false`.

## Reproduce the model

Run:

```bash
npm run check:cost-study
node scripts/check-cost-study.mjs --json
```

Inputs:

- [`providers-2026-08-22.json`](providers-2026-08-22.json)
- [`workloads-2026-08-22.json`](workloads-2026-08-22.json)
- [`customer-reviews-2026-08-22.json`](customer-reviews-2026-08-22.json)

The script checks provider count, source URLs, billing fields, review coverage,
review dates, workload math, and billed-row equality.
