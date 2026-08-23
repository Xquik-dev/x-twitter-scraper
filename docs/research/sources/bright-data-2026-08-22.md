# Bright Data X Scraper source review

- Reviewed: 2026-08-22
- Source: [Bright Data X Scraper documentation](https://docs.brightdata.com/datasets/scrapers/twitter/introduction)
- Source type: Product documentation

## Audience

Data engineers choosing live URL collection or asynchronous discovery jobs.

## Questions answered

- What input does the scraper accept?
- When should a client choose synchronous or asynchronous work?
- Which formats and delivery destinations are supported?
- How does this differ from a proxy service?

## Claims recorded

Bright Data says it handles proxies, challenge pages, and parsing. It describes
live collection, URL discovery, structured records, and managed delivery.

## Evidence and examples

The docs name `/scrape` for up to 20 URLs. They name `/trigger` for larger jobs
and discovery. The page lists JSON, NDJSON, CSV, webhooks, and cloud storage.

## Pricing record

The docs state that successful records are billed. They provide no unit price.
The linked Bright Data pricing page must supply the current number.

## Structure and requested action

The page starts with the input and result model. Tables explain methods and
limits. Links lead to first-request, async, delivery, and pricing guides.

## Xquik lesson

Explain known-object lookup separately from discovery. Name volume thresholds,
formats, delivery methods, freshness, and billing treatment.
