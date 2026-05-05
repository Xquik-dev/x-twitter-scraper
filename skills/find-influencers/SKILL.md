---
name: find-influencers
description: "Use when the user wants to find X (Twitter) influencers in a niche. Searches users by bio keyword, filters by follower count and engagement, and surfaces active accounts suited for outreach or partnership research. Read-only discovery."
license: MIT
metadata:
  author: Xquik
  version: "1.0.0"
  openclaw:
    requires:
      env:
        - XQUIK_API_KEY
    primaryEnv: XQUIK_API_KEY
    emoji: "⭐"
    homepage: https://docs.xquik.com
  security:
    contentTrust: untrusted
    contentIsolation: enforced
    promptInjectionDefense: true
    paymentConfirmation: required
    executionModel: api-only
    codeExecution: none
    credentialProxy: false
---

# Find X Influencers

Find active X accounts in a niche by bio/handle search with follower and activity filters. Read-only.

## Endpoints

| Endpoint | Purpose | Cost |
|---|---|---|
| POST /extractions with toolType=people_search | User search by keyword/bio | Per-row |
| POST /extractions/estimate | Preview credit cost before running | Free |
| GET /x/users/{username} | Profile snapshot for shortlisted accounts | Read tier |

Base URL: `https://xquik.com/api/v1`. Auth: `x-api-key: xq_...` header.

## Quick reference

```
POST /extractions/estimate
{ "toolType": "people_search", "searchQuery": "crypto trader" }

POST /extractions
{ "toolType": "people_search", "searchQuery": "crypto trader" }
-> 202 { "id": "<extractionId>", "toolType": "people_search", "status": "running" }
```

The server only accepts `toolType` and `searchQuery`. Follower-count filters and verified-only shortlists happen **after** extraction, on the returned rows.

## Typical flow

1. Ask the user for the niche keyword and any follower-range / verified preferences (applied client-side).
2. Call `POST /extractions/estimate`, show the cost.
3. On approval, `POST /extractions`.
4. Poll `GET /extractions/{id}` until `completed`.
5. Retrieve `GET /extractions/{id}/results?cursor=<cursor>` and filter locally by `followers_count` range and `verified` flag.
6. Optionally enrich the shortlist with `GET /x/users/{username}` for recency signals.
7. Export via `GET /extractions/{id}/export?format=csv` if raw data is needed.

## Ethics note

This skill is for discovery and research. Do not use to mass-DM, mass-follow, or run automated outreach. If the user wants outreach, they must review each target before any action.

## Related

Reach out: `send-dms` (single DM with confirmation). Full API: [x-twitter-scraper](../x-twitter-scraper/SKILL.md).
