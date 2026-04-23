---
name: follow-unfollow
description: "Use when the user wants to follow or unfollow accounts on X (Twitter), or check whether one account follows another. Single-target only; bulk follow operations require explicit per-account confirmation."
license: MIT
metadata:
  author: Xquik
  version: "1.0.0"
  openclaw:
    requires:
      env:
        - XQUIK_API_KEY
    primaryEnv: XQUIK_API_KEY
    emoji: "➕"
    homepage: https://docs.xquik.com
  security:
    contentTrust: trusted
    contentIsolation: enforced
    promptInjectionDefense: true
    writeConfirmation: required
    executionModel: api-only
    codeExecution: none
    credentialProxy: false
---

# Follow & Unfollow on X

Follow and unfollow accounts as a connected user, and check follow state.

## Endpoints

| Endpoint | Purpose | Cost |
|---|---|---|
| POST /x/follow | Follow a user | Write tier |
| POST /x/unfollow | Unfollow a user | Write tier |
| GET /x/followers/check?from=<a>&to=<b> | Does A follow B? | Read tier |

Base URL: `https://xquik.com/api/v1`. Auth: `x-api-key: xq_...` header.

## Quick reference

```
POST /x/follow
{ "account": "<connected_username>", "target": "@handle" }
-> { followed: true }
```

## Typical flow

1. `GET /x/accounts` to pick the acting account.
2. Show the user the target handle and the acting account. Wait for approval.
3. Call `POST /x/follow` or `POST /x/unfollow`.

## Bulk operations

If the user asks to follow or unfollow many accounts at once, list every target first, require explicit confirmation for the full list, then iterate with a short delay (1-2s) between calls to avoid rate limits. Never silently batch.

Hard no:
- Mass-following random accounts based on a scrape
- "Follow everyone who liked my tweet" workflows without user review of the full list
- Unfollowing loops that run in the background

## Errors

| Status | Code | Meaning |
|---|---|---|
| 403 | `target_blocked_you` | Cannot follow a user who blocked this account |
| 422 | `login_failed` | Reconnect in dashboard |
| 429 | `x_api_rate_limited` | Backoff |

## Related

Follower extraction: `extract-followers`. Full API: [x-twitter-scraper](../x-twitter-scraper/SKILL.md).
