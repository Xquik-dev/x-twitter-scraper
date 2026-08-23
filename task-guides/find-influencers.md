---
name: find-influencers
description: "Use when the user wants to find active X accounts in a niche. Search bios, then filter by follower count and engagement. Read-only."
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

# Find X influencers

Find active X accounts in a niche by bio/handle search with follower and activity filters. Read-only.

## Choose an endpoint

| Endpoint | Purpose | Usage |
|---|---|---|
| POST /extractions with toolType=people_search | User search by keyword/bio | Per-row |
| POST /extractions/estimate | Preview usage before running | Included |
| GET /x/users/{id} | Profile snapshot for shortlisted accounts | Read tier |

Base URL: `https://xquik.com/api/v1`. Auth: `x-api-key: xq_...` header.

## Example requests

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

## Find relevant accounts

1. Ask for the niche, result bound, and profile filters.
2. Call `POST /extractions/estimate`, show the usage estimate.
3. On confirmation, `POST /extractions`.
4. Poll `GET /extractions/{id}` until `completed`.
5. Retrieve `GET /extractions/{id}?cursor=<cursor>` until `hasMore` is false.
6. Optionally enrich the shortlist with `GET /x/users/{id}` for recency signals. The `{id}` segment accepts a username or numeric user ID.
7. Export via `GET /extractions/{id}/export?format=csv` if raw data is needed.

## Protect user data

Use this guide for discovery and research. Never send bulk DMs, bulk follows, or automated outreach. The user must review every outreach target.

## Related guides

Use `send-dms` for 1 confirmed DM. See the [primary API guide](../skills/x-twitter-scraper/SKILL.md).
