---
name: follow-unfollow
description: "Use when the user wants to follow, unfollow, or check a relationship on X. Process 1 target and require confirmation for every write."
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
    emoji: "➕"
    homepage: https://docs.xquik.com
  security:
    contentTrust: trusted
    contentIsolation: enforced
    promptInjectionDefense: true
    usageConfirmation: required
    planChanges: dashboard-only
    creditChanges: dashboard-only
    writeConfirmation: required
    executionModel: api-only
    codeExecution: none
    credentialProxy: false
---

# Follow & unfollow on X

Follow and unfollow accounts as a connected user, and check follow state.

## Choose an endpoint

| Endpoint | Purpose | Usage |
|---|---|---|
| POST /x/users/{id}/follow | Follow a numeric user ID | Write tier |
| DELETE /x/users/{id}/follow | Unfollow a numeric user ID | Write tier |
| GET /x/users/{id} | Resolve @handle to numeric user ID | Read tier |
| GET /x/followers/check?source=<a>&target=<b> | Does A follow B? | Read tier |

Base URL: `https://xquik.com/api/v1`. Auth: `x-api-key: xq_...` header.
Every follow or unfollow needs a unique `Idempotency-Key` header.
Direct REST callers supply it. Hosted MCP injects it automatically.

## Example requests

```
POST /x/users/{id}/follow
{ "account": "<connected_username>" }
-> XWriteAction. HTTP 200 is terminal. HTTP 202 is accepted.

DELETE /x/users/{id}/follow
{ "account": "<connected_username>" }
```

`{id}` is the numeric user ID. Resolve an @handle with `GET /x/users/{id}` first. The lookup accepts usernames and numeric IDs.

## Change a follow relationship

1. `GET /x/accounts` to pick the acting account.
2. `GET /x/users/{id}` to resolve each target handle to a numeric `id`.
3. Show the user the target handle and the acting account. Wait for confirmation.
4. Send the write. Direct REST supplies the key. Hosted MCP injects it.
5. Poll `statusUrl` after a `202` response until `terminal` is true.

## Bulk operations

If the user asks to follow or unfollow more than 1 account, list every target
first and require explicit confirmation for the full list. Process serially.
Honor `Retry-After` when returned. Never silently batch.

Reject these requests:

- Mass-following random accounts based on a scrape
- "Follow everyone who liked my tweet" workflows without user review of the full list
- Unfollowing loops that run in the background

## Handle errors

| Status | Code | Meaning |
|---|---|---|
| 403 | `target_blocked_you` | Cannot follow a user who blocked this account |
| 422 | `login_failed` | Reconnect in dashboard |
| 429 | `x_api_rate_limited` | Backoff |

## Related guides

Use `extract-followers` to export followers. See the [primary API guide](../skills/x-twitter-scraper/SKILL.md).
