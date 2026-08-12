---
name: tweet-webhooks
description: "Use when the user wants to receive monitored X (Twitter) events at their own URL. Creates HMAC-signed webhooks for account and keyword monitor events. Delivery setup only - payload handling is the user's webhook."
license: MIT
metadata:
  internal: true
  author: Xquik
  version: "2.6.3"
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

Send HTTPS POST callbacks when an account or keyword monitor emits an event.

## Endpoints

| Endpoint | Purpose | Usage |
|---|---|---|
| POST /webhooks | Create a webhook | Included; persistent destination |
| GET /webhooks | List webhooks | Included |
| PATCH /webhooks/{id} | Change URL, events, or active state | Included |
| DELETE /webhooks/{id} | Deactivate a webhook | Included |
| POST /webhooks/{id}/test | Send a test payload | Included |
| POST /webhooks/{id}/resume | Test and resume delivery | Included |

Base URL: `https://xquik.com/api/v1`. Auth: `x-api-key: xq_...` header.

## Quick reference

```
POST /webhooks
{
  "url": "https://example.com/xquik-hook",
  "eventTypes": ["tweet.new", "tweet.reply"]
}
-> { id, url, secret, eventTypes, createdAt }
```

Save the returned `secret` - used to verify HMAC-SHA256 signatures on incoming payloads.

## HMAC verification (for the user's server)

Each delivery includes these headers:
```
X-Xquik-Timestamp: <unix milliseconds>
X-Xquik-Nonce: <unique hex nonce>
X-Xquik-Signature: sha256=<hex>
```
Compute HMAC-SHA256 over
`<timestamp>.<nonce>.<raw_body>`. Compare in constant time. Reject old
timestamps and reused nonces.

## Typical flow

1. Confirm the target URL is HTTPS and reachable.
2. Ask the user which events to subscribe to and remind them that the URL will keep receiving matching events while enabled.
3. **Create the webhook only with user approval** - the URL will receive real data.
4. Call `POST /webhooks/{id}/test` to send a sample payload. Confirm with the user that it arrived and verified.
5. Inspect `deliveryStatus`. Use `/resume` after fixing a paused destination.

## Security

- Webhook URLs must be HTTPS
- Verify the signature, timestamp, and nonce before parsing the payload
- Do not register third-party URLs on behalf of the user; they must own the endpoint
- Delete or disable the webhook when the user no longer wants ongoing delivery

## Related

Monitor creation: `monitor-accounts`. Full API: [x-twitter-scraper](../skills/x-twitter-scraper/SKILL.md).
