---
name: find-influencers
description: "Use when the user wants to find X (Twitter) influencers in a niche. Searches users by bio keyword, filters by follower count and engagement, and surfaces active accounts suited for outreach or partnership research. Read-only discovery."
license: MIT
metadata:
  internal: true
  author: Xquik
  version: "2.6.5"
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
    writeConfirmation: required
    usageConfirmation: required
    planChanges: dashboard-only
    creditChanges: dashboard-only
    executionModel: api-only
    codeExecution: none
    credentialProxy: false
---

# Find X Influencers

Find active X accounts in a niche by bio/handle search with follower and activity filters. Read-only.

## Endpoints

| Endpoint | Purpose | Usage |
|---|---|---|
| POST /extractions with toolType=people_search | User search by keyword/bio | Per-row |
| POST /extractions/estimate | Preview usage before running | Included |
| GET /x/users/{id} | Profile snapshot for shortlisted accounts | Read tier |

Base URL: `https://xquik.com/api/v1`. Auth: `x-api-key: xq_...` header.

## Quick reference

```
POST /extractions/estimate
{ "toolType": "people_search", "searchQuery": "crypto trader" }

POST /extractions
{ "toolType": "people_search", "searchQuery": "crypto trader" }
-> 202 { "id": "<extractionId>", "toolType": "people_search", "status": "running" }
```

The request also accepts profile filters. Examples include `minFollowers`,
`maxFollowers`, `minPosts`, `minAccountAgeDays`, `verifiedType`,
`hasWebsite`, `hasLocation`, and text-match fields. Apply them before
estimation so excluded rows are not delivered.

## Typical flow

1. Ask for the niche, result bound, and profile filters.
2. Call `POST /extractions/estimate`, show the usage estimate.
3. On approval, `POST /extractions`.
4. Poll `GET /extractions/{id}` until `completed`.
5. Retrieve `GET /extractions/{id}?cursor=<cursor>` until `hasMore` is false.
6. Optionally enrich the shortlist with `GET /x/users/{id}` for recency signals. The `{id}` segment accepts a username or numeric user ID.
7. Export via `GET /extractions/{id}/export?format=csv` if raw data is needed.

## Ethics note

This skill is for discovery and research. Do not use to mass-DM, mass-follow, or run automated outreach. If the user wants outreach, they must review each target before any action.

## Related

Reach out: `send-dms` (single DM with confirmation). Full API: [x-twitter-scraper](../skills/x-twitter-scraper/SKILL.md).
