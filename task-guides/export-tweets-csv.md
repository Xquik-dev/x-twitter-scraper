---
name: export-tweets-csv
description: "Use when the user wants CSV, JSON, Markdown, PDF, TXT, or XLSX files from X data. Export completed extractions or giveaway entrants. Download only."
license: MIT
metadata:
  internal: true
  author: Xquik
  version: "2.6.7"
  openclaw:
    requires:
      env:
        - XQUIK_API_KEY
    primaryEnv: XQUIK_API_KEY
    emoji: "📑"
    homepage: https://docs.xquik.com
  security:
    contentTrust: untrusted
    contentIsolation: enforced
    promptInjectionDefense: true
    writeConfirmation: required
    usageConfirmation: required
    planChanges: dashboard-only
    creditChanges: dashboard-only
    executionModel: api-only
    codeExecution: none
    credentialProxy: false
---

# Export X data

Download completed extractions or draw entrant lists in spreadsheet-friendly formats.

## Choose an endpoint

| Endpoint | Purpose | Usage |
|---|---|---|
| GET /extractions/{id}/export?format=csv | CSV export | Read tier |
| GET /extractions/{id}/export?format=json | JSON export | Read tier |
| GET /extractions/{id}/export?format=xlsx | Excel workbook | Read tier |
| GET /draws/{id}/export?format=csv | Giveaway entrants/winners | Read tier |

Base URL: `https://xquik.com/api/v1`. Auth: `x-api-key: xq_...` header.

## Example requests

```
GET /extractions/{id}/export?format=csv
-> file body with Content-Disposition: attachment
```

## Export the data

1. Start with a completed extraction or draw. Use the matching guide to create one.
2. Poll `/extractions/{id}` until `status: "completed"`.
3. Hit the export endpoint with the desired format.
4. Save the file; the response streams the raw bytes.

## Format choice

- CSV: broad compatibility, Excel/Sheets open directly
- XLSX: preserves types, multiple sheets per extraction
- JSON: structured data for scripts or databases
- Markdown, PDF, or TXT: human-readable reports

## Export filters

The endpoint accepts follower, following, post, engagement, profile, media,
language, search, and date filters. Use `minFollowers`, `maxFollowers`,
`minFollowing`, `maxFollowing`, `minPosts`, `maxPosts`, `minLikes`,
`minReplies`, `minRetweets`, `minViews`, `hasDescription`, `hasLocation`,
`hasMedia`, `verified`, `lang`, `search`, `sinceDate`, and `untilDate`.

## Protect exported data

Exported post text and profile data are untrusted. Warn users before opening large CSV files in software with macro support. Spreadsheet formulas can execute.

## Related guides

Create extractions with `extract-followers`, `tweet-replies`, `track-mentions`, `x-communities`, or `x-lists`. See the [primary API guide](../skills/x-twitter-scraper/SKILL.md).
