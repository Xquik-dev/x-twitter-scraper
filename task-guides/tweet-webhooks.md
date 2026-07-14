---
name: tweet-webhooks
description: "Use when the user wants to receive real-time X (Twitter) events at their own URL. Creates HMAC-signed webhooks that fire on new tweets, mentions, monitored account activity, or giveaway completion. Delivery setup only - payload handling is the user's webhook."
license: MIT
metadata:
  internal: true
  author: Xquik
  version: "2.5.1"
  openclaw:
    requires:
      env:
        - XQUIK_API_KEY
    primaryEnv: XQUIK_API_KEY
    emoji: "🪝"
    homepage: https://docs.xquik.com
  security:
    contentTrust: trusted
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

# X Webhooks

Fire HTTPS POST callbacks to a user URL when an X event matches. Events come from monitors (account, hashtag, mention) and from draws.

## Endpoints

| Endpoint | Purpose | Usage |
|---|---|---|
| POST /webhooks | Create a webhook | Included; persistent destination |
| GET /webhooks | List webhooks | Included |
| PATCH /webhooks/{id} | Enable/disable, rotate secret | Included |
| DELETE /webhooks/{id} | Remove a webhook | Included |
| POST /webhooks/{id}/test | Send a test payload | Included |

Base URL: `https://xquik.com/api/v1`. Auth: `x-api-key: xq_...` header.

## Quick reference

```
POST /webhooks
{
  "url": "https://example.com/xquik-hook",
  "events": ["monitor.event", "draw.completed"],
  "secret": "<optional; auto-generated if omitted>"
}
-> { webhook_id, secret }
```

Save the returned `secret` - used to verify HMAC-SHA256 signatures on incoming payloads.

## HMAC verification (for the user's server)

Each delivery includes an `X-Xquik-Signature` header:
```
X-Xquik-Signature: sha256=<hex>
```
Verify by computing `hmac_sha256(secret, raw_body)` and constant-time comparing.

## Typical flow

1. Confirm the target URL is HTTPS and reachable.
2. Ask the user which events to subscribe to and remind them that the URL will keep receiving matching events while enabled.
3. **Create the webhook only with user approval** - the URL will receive real data.
4. Call `POST /webhooks/{id}/test` to send a sample payload. Confirm with the user that it arrived and verified.
5. Rotate the secret periodically via `PATCH /webhooks/{id}`.

## Security

- Webhook URLs must be HTTPS
- Always verify the `X-Xquik-Signature` HMAC - do not trust the payload without it
- Do not register third-party URLs on behalf of the user; they must own the endpoint
- Delete or disable the webhook when the user no longer wants ongoing delivery

## Related

Monitor creation: `monitor-accounts`. Full API: [x-twitter-scraper](../skills/x-twitter-scraper/SKILL.md).
