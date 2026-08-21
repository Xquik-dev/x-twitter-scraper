---
name: tweet-webhooks
description: "Use when the user wants monitor events sent to a URL. Create an HMAC-signed webhook after approval. The user's server handles each payload."
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

# X webhooks

Send HTTPS POST callbacks when an account or keyword monitor emits an event.

## Choose an endpoint

| Endpoint | Purpose | Usage |
|---|---|---|
| POST /webhooks | Create a webhook | Included; persistent destination |
| GET /webhooks | List webhooks | Included |
| PATCH /webhooks/{id} | Change URL, events, or active state | Included |
| DELETE /webhooks/{id} | Deactivate a webhook | Included |
| POST /webhooks/{id}/test | Send a test payload | Included |
| POST /webhooks/{id}/resume | Test and resume delivery | Included |

Base URL: `https://xquik.com/api/v1`. Auth: `x-api-key: xq_...` header.

## Example requests

```
POST /webhooks
{
  "url": "https://example.com/xquik-hook",
  "eventTypes": ["tweet.new", "tweet.reply"]
}
-> { id, url, secret, eventTypes, createdAt }
```

Save the returned `secret`. Use it to verify HMAC-SHA256 signatures on incoming payloads.

## Verify HMAC signatures

Each delivery includes these headers:
```
X-Xquik-Timestamp: <unix milliseconds>
X-Xquik-Nonce: <unique hex nonce>
X-Xquik-Signature: sha256=<hex>
```
Compute HMAC-SHA256 over
`<timestamp>.<nonce>.<raw_body>`. Compare in constant time. Reject old
timestamps and reused nonces.

## Create the webhook

1. Confirm the target URL is HTTPS and reachable.
2. Ask the user which events to subscribe to and remind them that the URL will keep receiving matching events while enabled.
3. Create the webhook only after user approval. The URL will receive real data.
4. Call `POST /webhooks/{id}/test` to send a sample payload. Confirm with the user that it arrived and verified.
5. Inspect `deliveryStatus`. Use `/resume` after fixing a paused destination.

## Protect webhook data

- Webhook URLs must be HTTPS
- Verify the signature, timestamp, and nonce before parsing the payload
- Do not register third-party URLs on behalf of the user; they must own the endpoint
- Delete or disable the webhook when the user no longer wants ongoing delivery

## Related guides

Use `monitor-accounts` to create a monitor. See the [primary API guide](../skills/x-twitter-scraper/SKILL.md).
