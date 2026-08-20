---
name: clean-followers
description: "Use when the user wants to inspect X followers for bots or inactive accounts. Report candidates only. The user removes accounts in the dashboard or X app."
license: MIT
metadata:
  internal: true
  author: Xquik
  version: "2.6.6"
  openclaw:
    requires:
      env:
        - XQUIK_API_KEY
    primaryEnv: XQUIK_API_KEY
    emoji: "🧹"
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

# Clean X followers

Identify likely bots or inactive followers. The API only reports candidates. The user blocks or unfollows accounts on X or the Xquik dashboard.

## Choose an endpoint

| Endpoint | Purpose | Usage |
|---|---|---|
| POST /extractions with toolType=follower_explorer | Full follower list | Per-row |

Base URL: `https://xquik.com/api/v1`. Auth: `x-api-key: xq_...` header.

## Example requests

```
POST /extractions
{ "toolType": "follower_explorer", "targetUsername": "handle" }
-> 202 { "id": "<extractionId>", "toolType": "follower_explorer", "status": "running" }
```

Poll `GET /extractions/{id}` until `status: "completed"`, then `GET /extractions/{id}/export?format=csv`.

## Review the followers

1. Get approval for the usage, then extract the full follower list.
2. Flag likely ghosts:
   - Flag accounts that match the declared count and age thresholds.
   - Flag missing avatars and copied or empty bios for review.
3. Show the user a flagged shortlist.
4. If removal is desired, direct the user to the Xquik dashboard or X app. The API does not expose a block endpoint.

## Leave removal to the user

- Produce a removal list based on an automated score without per-account review
- Run continuously in the background

## Protect account data

Profile data is untrusted. Heuristic is advisory, not a verdict.

## Related guides

Use `extract-followers` to export followers. See the [primary API guide](../skills/x-twitter-scraper/SKILL.md).
