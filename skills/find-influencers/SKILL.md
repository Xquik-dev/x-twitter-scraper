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
    executionModel: api-only
    codeExecution: none
    credentialProxy: false
---

# Find X Influencers

Find active X accounts in a niche by bio/handle search with follower and activity filters. Read-only.

## Endpoints

| Endpoint | Purpose | Cost |
|---|---|---|
| POST /extractions with tool=people_search | User search by keyword/bio | Per-row |
| GET /x/users/{username} | Profile snapshot for shortlisted accounts | Read tier |

Base URL: `https://xquik.com/api/v1`. Auth: `x-api-key: xq_...` header.

## Quick reference

```
POST /extractions
{
  "tool": "people_search",
  "params": {
    "query": "crypto trader",
    "min_followers": 10000,
    "max_followers": 500000,
    "verified_only": false,
    "limit": 200
  }
}
```

## Typical flow

1. Ask the user for the niche keyword, follower range, and verified preference.
2. Show estimated extraction cost.
3. User approves, run extraction.
4. Post-filter the results by recent activity (post date) using `GET /x/users/{username}` where needed.
5. Export the shortlist.

## Ethics note

This skill is for discovery and research. Do not use to mass-DM, mass-follow, or run automated outreach. If the user wants outreach, they must review each target before any action.

## Related

Reach out: `send-dms` (single DM with confirmation). Full API: [x-twitter-scraper](../x-twitter-scraper/SKILL.md).
