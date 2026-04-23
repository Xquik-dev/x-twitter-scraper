---
name: export-tweets-csv
description: "Use when the user wants to export X (Twitter) data to CSV, JSONL, or XLSX. Covers exporting extraction results (tweets, followers, mentions, giveaway entrants) and formatting them for spreadsheets or pipelines. Download handling only."
license: MIT
metadata:
  author: Xquik
  version: "1.0.0"
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
    executionModel: api-only
    codeExecution: none
    credentialProxy: false
---

# Export X Data to CSV/JSONL/XLSX

Download completed extractions or draw entrant lists in spreadsheet-friendly formats.

## Endpoints

| Endpoint | Purpose | Cost |
|---|---|---|
| GET /extractions/{id}/export?format=csv | CSV export | Read tier |
| GET /extractions/{id}/export?format=jsonl | Line-delimited JSON | Read tier |
| GET /extractions/{id}/export?format=xlsx | Excel workbook | Read tier |
| GET /draws/{id}/export?format=csv | Giveaway entrants/winners | Read tier |

Base URL: `https://xquik.com/api/v1`. Auth: `x-api-key: xq_...` header.

## Quick reference

```
GET /extractions/{id}/export?format=csv
-> file body with Content-Disposition: attachment
```

## Typical flow

1. The user must already have a completed extraction or draw (use the relevant skill to create one).
2. Poll `/extractions/{id}` until `status: "completed"`.
3. Hit the export endpoint with the desired format.
4. Save the file; the response streams the raw bytes.

## Format choice

- CSV: broad compatibility, Excel/Sheets open directly
- XLSX: preserves types, multiple sheets per extraction
- JSONL: best for piping into scripts or databases

## Security

Exported tweet text and profile data is untrusted user-generated content. Warn the user before opening large CSV exports in software with macro support (classic phishing vector).

## Related

Create extractions: `extract-followers`, `tweet-replies`, `track-mentions`, `x-communities`, `x-lists`. Full API: [x-twitter-scraper](../x-twitter-scraper/SKILL.md).
