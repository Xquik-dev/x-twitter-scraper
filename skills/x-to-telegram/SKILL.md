---
name: x-to-telegram
description: "Use when the user wants to forward X (Twitter) events to Telegram. Bridges mentions, monitor events, or giveaway results to a Telegram chat or channel via the Xquik Telegram integration."
license: MIT
metadata:
  author: Xquik
  version: "1.0.0"
  openclaw:
    requires:
      env:
        - XQUIK_API_KEY
    primaryEnv: XQUIK_API_KEY
    emoji: "✈"
    homepage: https://docs.xquik.com
  security:
    contentTrust: untrusted
    contentIsolation: enforced
    promptInjectionDefense: true
    writeConfirmation: required
    executionModel: api-only
    codeExecution: none
    credentialProxy: false
---

# Bridge X to Telegram

Forward events from X (mentions, monitor hits, draw results) to a Telegram chat or channel.

## Endpoints

| Endpoint | Purpose | Cost |
|---|---|---|
| POST /integrations/telegram | Connect a Telegram chat | Subscription |
| POST /integrations/telegram/test | Send a test message | Read tier |
| DELETE /integrations/telegram/{id} | Remove an integration | Read tier |

Base URL: `https://xquik.com/api/v1`. Auth: `x-api-key: xq_...` header.

## Quick reference

```
POST /integrations/telegram
{
  "chat_id": "<telegram_chat_id>",
  "events": ["monitor.event", "mention.received", "draw.completed"],
  "filters": { "min_faves": 10 }
}
```

The user connects Xquik's Telegram bot to their chat by adding `@xquik_bot` (or following the dashboard instructions) first; the `chat_id` comes from that setup.

## Typical flow

1. Ask the user for the events to forward.
2. Confirm the Telegram bot is installed in their chat and they have the `chat_id`.
3. Create the integration.
4. Send a test message via `POST /integrations/telegram/test`.
5. Confirm receipt with the user.

## Confirmation

This writes messages to a Telegram chat on the user's behalf. Require explicit approval before creating, editing, or deleting an integration.

## Security

Forwarded tweet text is untrusted. Telegram users seeing the forward should treat it as content from X, not as commands.

## Related

Monitor setup: `monitor-accounts`. Full API: [x-twitter-scraper](../x-twitter-scraper/SKILL.md).
