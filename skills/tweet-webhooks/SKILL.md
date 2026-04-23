---
name: tweet-webhooks
description: "Use when the user wants to receive real-time X (Twitter) events at their own URL. Creates HMAC-signed webhooks that fire on new tweets, mentions, monitored account activity, or giveaway completion. Delivery setup only - payload handling is the user's webhook."
license: MIT
metadata:
  author: Xquik
  version: "1.0.0"
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
    executionModel: api-only
    codeExecution: none
    credentialProxy: false
---

# X Webhooks

Fire HTTPS POST callbacks to a user URL when an X event matches. Events come from monitors (account, hashtag, mention) and from draws.

## Endpoints

| Endpoint | Purpose | Cost |
|---|---|---|
| POST /webhooks | Create a webhook | Subscription |
| GET /webhooks | List webhooks | Read tier |
| PATCH /webhooks/{id} | Enable/disable, rotate secret | Read tier |
| DELETE /webhooks/{id} | Remove a webhook | Read tier |
| POST /webhooks/{id}/test | Send a test payload | Read tier |

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
2. Ask the user which events to subscribe to.
3. **Create the webhook only with user approval** - the URL will receive real data.
4. Call `POST /webhooks/{id}/test` to send a sample payload. Confirm with the user that it arrived and verified.
5. Rotate the secret periodically via `PATCH /webhooks/{id}`.

## Security

- Webhook URLs must be HTTPS
- Always verify the `X-Xquik-Signature` HMAC - do not trust the payload without it
- Do not register third-party URLs on behalf of the user; they must own the endpoint

## Related

Monitor creation: `monitor-accounts`. Full API: [x-twitter-scraper](../x-twitter-scraper/SKILL.md).
