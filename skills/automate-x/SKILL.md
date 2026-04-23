---
name: automate-x
description: "Use when the user wants to set up event-driven automations on X (Twitter) - for example, auto-archive tweets matching a query to a sheet, or trigger a webhook when a competitor posts. Configuration only; the agent does not act autonomously."
license: MIT
metadata:
  author: Xquik
  version: "1.0.0"
  openclaw:
    requires:
      env:
        - XQUIK_API_KEY
    primaryEnv: XQUIK_API_KEY
    emoji: "⚙"
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

# Automate X Workflows

Configure recipe-style automations on Xquik: a trigger (new tweet matching filter, monitor fires, etc.) connected to an action (webhook, archive, email).

## Endpoints

| Endpoint | Purpose | Cost |
|---|---|---|
| POST /automations | Create an automation | Subscription |
| GET /automations | List automations | Read tier |
| PATCH /automations/{id} | Pause/enable/rename | Read tier |
| DELETE /automations/{id} | Remove | Read tier |

Base URL: `https://xquik.com/api/v1`. Auth: `x-api-key: xq_...` header.

## Quick reference

```
POST /automations
{
  "name": "archive bangers",
  "trigger": {
    "type": "tweet_matches",
    "query": "from:@handle min_faves:1000"
  },
  "action": {
    "type": "webhook",
    "url": "https://example.com/archive"
  }
}
```

Supported triggers: `tweet_matches`, `monitor_event`, `draw_completed`, `mention_received`.
Supported actions: `webhook`, `email`, `archive_to_csv`.

## Typical flow

1. Ask the user for the trigger and action.
2. Walk through fields; show the final config.
3. **User approval required** before `POST /automations` - automations run unattended.
4. Offer a test run if the trigger supports it.
5. Provide a command to pause/remove later.

## Confirmation

Every create, edit, pause, or delete requires explicit user direction. No cascading or autonomous changes.

## Security

Action URLs must be HTTPS. Webhook payloads are HMAC-signed (see `tweet-webhooks`).

## Related

Monitors (triggers only): `monitor-accounts`. Webhook delivery: `tweet-webhooks`. Full API: [x-twitter-scraper](../x-twitter-scraper/SKILL.md).
