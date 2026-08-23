# Xquik webhooks

Receive event notifications at an HTTPS endpoint. Verify every request with its HMAC-SHA256 signature.

The Node and Python examples below bind loopback HTTP only. They are not HTTPS
endpoints. Terminate TLS at a trusted reverse proxy or load balancer. Use a
valid certificate and TLS 1.2 or later. Forward only `POST /webhook` to
`127.0.0.1:3000`. Preserve the raw body and all signature headers. Limit the
request body size. Never register a loopback URL as the webhook destination.

## Setup

1. Create at least 1 active monitor with `POST /monitors`.
2. Register a webhook endpoint with `POST /webhooks`.
3. Save the one-time response `secret` in a secret manager. Never log or share it.
4. Verify each signature before processing the event.

## Webhook payload

Every delivery is a `POST` request to your URL with a JSON body:

```json
{
  "schemaVersion": 1,
  "streamEventId": "9010",
  "deliveryId": "334",
  "eventType": "tweet.new",
  "username": "elonmusk",
  "occurredAt": "2026-02-24T16:45:00.000Z",
  "data": {
    "tweetId": "1893556789012345678",
    "text": "Hello world",
    "metrics": { "likes": 3200, "retweets": 890, "replies": 245 }
  }
}
```

## Signature verification

Each request contains `X-Xquik-Timestamp`, `X-Xquik-Nonce`, and
`X-Xquik-Signature`. The signature is `sha256=` plus HMAC-SHA256 over:

```text
<timestamp>.<nonce>.<raw JSON body>
```

Reject timestamps outside a 5-minute window. Reject reused nonces within that
window. Compare signatures in constant time before parsing JSON.
Use an atomic shared nonce store in multi-instance deployments.
The examples name an injected shared store. Requests fail until the application
provides its atomic claim operation. Confirm the listener before starting it.

### Node.js standard library

```javascript
import { createHmac, timingSafeEqual } from "node:crypto";
import { createServer } from "node:http";

const LISTENER_CONFIRMATION_FLAG = "--confirmed-listener-scope";
const MAX_BODY_BYTES = 1_048_576;

// Use the per-webhook secret from POST /webhooks, not an Xquik account credential.
const WEBHOOK_SECRET = process.env.XQUIK_WEBHOOK_SECRET;

async function claimNonce(nonce) {
  // Inject a shared store with atomic set-if-absent and a 5-minute TTL.
  return sharedNonceStore.setIfAbsent(nonce, { ttlSeconds: 300 });
}

function verifySignature(payload, signature, timestamp, nonce, secret) {
  if (![signature, timestamp, nonce, secret].every((value) => typeof value === "string")) return false;
  if (!/^\d+$/.test(timestamp) || !/^[0-9a-f]{32}$/.test(nonce)) return false;
  if (Math.abs(Date.now() - Number(timestamp)) > 5 * 60 * 1000) return false;

  const input = `${timestamp}.${nonce}.${payload}`;
  const expected = "sha256=" + createHmac("sha256", secret).update(input).digest("hex");
  const expectedBuffer = Buffer.from(expected, "utf8");
  const signatureBuffer = Buffer.from(signature, "utf8");

  return (
    expectedBuffer.length === signatureBuffer.length &&
    timingSafeEqual(expectedBuffer, signatureBuffer)
  );
}

const server = createServer((req, res) => {
  if (req.method !== "POST" || req.url !== "/webhook") {
    res.writeHead(404).end("Not found");
    return;
  }

  const declaredLength = Number(req.headers["content-length"] ?? "0");
  if (!Number.isSafeInteger(declaredLength) || declaredLength > MAX_BODY_BYTES) {
    res.writeHead(413).end("Payload too large");
    return;
  }

  const chunks = [];
  let receivedBytes = 0;
  let rejected = false;

  req.on("data", (chunk) => {
    receivedBytes += chunk.length;
    if (receivedBytes > MAX_BODY_BYTES) {
      rejected = true;
      chunks.length = 0;
      res.writeHead(413).end("Payload too large");
      return;
    }
    if (!rejected) chunks.push(chunk);
  });
  req.on("end", async () => {
    if (rejected) return;
    const payload = Buffer.concat(chunks).toString("utf8");
    const signature = req.headers["x-xquik-signature"];
    const timestamp = req.headers["x-xquik-timestamp"];
    const nonce = req.headers["x-xquik-nonce"];

    if (
      !verifySignature(payload, signature, timestamp, nonce, WEBHOOK_SECRET) ||
      !(await claimNonce(nonce))
    ) {
      res.writeHead(401).end("Invalid signature");
      return;
    }

    let event;
    try {
      event = JSON.parse(payload);
    } catch {
      res.writeHead(400).end("Invalid JSON");
      return;
    }

    if (
      typeof event !== "object" ||
      event === null ||
      typeof event.deliveryId !== "string" ||
      !["tweet.new", "tweet.reply", "tweet.retweet"].includes(event.eventType)
    ) {
      res.writeHead(400).end("Unsupported event type");
      return;
    }

    console.log("Accepted verified Xquik webhook");
    res.writeHead(200).end("OK");
  });
});

function requireExplicitConfirmation() {
  if (!process.argv.includes(LISTENER_CONFIRMATION_FLAG)) {
    throw new Error(
      `Confirm the listener scope, then pass ${LISTENER_CONFIRMATION_FLAG}.`,
    );
  }
}

requireExplicitConfirmation();
server.listen(3000, "127.0.0.1");
```

### Python standard library

```python
import hmac
import hashlib
import json
import re
import sys
import time
from http.server import BaseHTTPRequestHandler, HTTPServer

MAX_BODY_BYTES = 1_048_576

def load_secret(name: str) -> str:
    """Read from your runtime secret store."""
    raise RuntimeError(f"Configure {name} in your secret store.")

def require_server_confirmation(scope: str) -> None:
    if "--confirmed-listener-scope" not in sys.argv:
        raise RuntimeError(
            f"Confirm {scope}, then pass --confirmed-listener-scope."
        )

# Use the per-webhook secret from POST /webhooks, not an Xquik account credential.
WEBHOOK_SECRET = load_secret("XQUIK_WEBHOOK_SECRET")

def claim_nonce(nonce: str) -> bool:
    """Atomically claim the nonce in a shared store with a 5-minute TTL."""
    return shared_nonce_store.set_if_absent(nonce, ttl_seconds=300)

def verify_signature(payload: bytes, signature: str, timestamp: str, nonce: str, secret: str) -> bool:
    if not timestamp.isdigit() or not re.fullmatch(r"[0-9a-f]{32}", nonce):
        return False
    if abs(int(time.time() * 1000) - int(timestamp)) > 5 * 60 * 1000:
        return False
    signing_input = timestamp.encode() + b"." + nonce.encode() + b"." + payload
    expected = "sha256=" + hmac.new(secret.encode(), signing_input, hashlib.sha256).hexdigest()
    return hmac.compare_digest(expected, signature)

class WebhookHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        if self.path != "/webhook":
            self.send_response(404)
            self.end_headers()
            return
        signature = self.headers.get("X-Xquik-Signature", "")
        timestamp = self.headers.get("X-Xquik-Timestamp", "")
        nonce = self.headers.get("X-Xquik-Nonce", "")
        content_length = self.headers.get("Content-Length", "")
        if not content_length.isdigit():
            self.send_response(411)
            self.end_headers()
            return
        length = int(content_length)
        if length > MAX_BODY_BYTES:
            self.send_response(413)
            self.end_headers()
            return
        payload = self.rfile.read(length)

        if not verify_signature(payload, signature, timestamp, nonce, WEBHOOK_SECRET) or not claim_nonce(nonce):
            self.send_response(401)
            self.end_headers()
            self.wfile.write(b"Invalid signature")
            return

        try:
            event = json.loads(payload)
        except json.JSONDecodeError:
            self.send_response(400)
            self.end_headers()
            return

        if (
            not isinstance(event, dict)
            or not isinstance(event.get("deliveryId"), str)
            or event.get("eventType") not in {"tweet.new", "tweet.reply", "tweet.retweet"}
        ):
            self.send_response(400)
            self.end_headers()
            self.wfile.write(b"Unsupported event type")
            return

        print("Accepted verified Xquik webhook")
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b"OK")

require_server_confirmation("loopback port 3000, exposure, retention, and stop path")
HTTPServer(("127.0.0.1", 3000), WebhookHandler).serve_forever()
```

### Go

```go
package main

import (
    "crypto/hmac"
    "crypto/sha256"
    "encoding/hex"
    "encoding/json"
    "errors"
    "fmt"
    "io"
    "net/http"
    "os"
    "regexp"
    "strconv"
    "time"
)

// Use the per-webhook secret from POST /webhooks, not an Xquik account credential.
var webhookSecret = os.Getenv("XQUIK_WEBHOOK_SECRET")
const maxBodyBytes int64 = 1_048_576
type NonceStore interface {
    Claim(nonce string, ttl time.Duration) bool
}

var nonceStore NonceStore

func claimNonce(nonce string) bool {
    return nonceStore != nil && nonceStore.Claim(nonce, 5*time.Minute)
}

func verifySignature(payload []byte, signature, timestamp, nonce, secret string) bool {
    signedAt, err := strconv.ParseInt(timestamp, 10, 64)
    if err != nil || !regexp.MustCompile(`^[0-9a-f]{32}$`).MatchString(nonce) {
        return false
    }
    age := time.Now().UnixMilli() - signedAt
    if age < -5*60*1000 || age > 5*60*1000 {
        return false
    }
    mac := hmac.New(sha256.New, []byte(secret))
    mac.Write([]byte(timestamp + "." + nonce + "."))
    mac.Write(payload)
    expected := "sha256=" + hex.EncodeToString(mac.Sum(nil))
    return hmac.Equal([]byte(expected), []byte(signature))
}

func webhookHandler(w http.ResponseWriter, r *http.Request) {
    if r.Method != http.MethodPost || r.URL.Path != "/webhook" {
        http.NotFound(w, r)
        return
    }
    r.Body = http.MaxBytesReader(w, r.Body, maxBodyBytes)
    payload, err := io.ReadAll(r.Body)
    if err != nil {
        var tooLarge *http.MaxBytesError
        if errors.As(err, &tooLarge) {
            http.Error(w, "Payload too large", http.StatusRequestEntityTooLarge)
            return
        }
        http.Error(w, "Unable to read request body", http.StatusBadRequest)
        return
    }

    signature := r.Header.Get("X-Xquik-Signature")
    timestamp := r.Header.Get("X-Xquik-Timestamp")
    nonce := r.Header.Get("X-Xquik-Nonce")

    if !verifySignature(payload, signature, timestamp, nonce, webhookSecret) || !claimNonce(nonce) {
        http.Error(w, "Invalid signature", http.StatusUnauthorized)
        return
    }

    var event struct {
        DeliveryID string `json:"deliveryId"`
        EventType string `json:"eventType"`
        Username  string `json:"username"`
        Data      struct {
            Text string `json:"text"`
        } `json:"data"`
    }
    if err := json.Unmarshal(payload, &event); err != nil {
        http.Error(w, "Invalid JSON", http.StatusBadRequest)
        return
    }
    if event.DeliveryID == "" || event.EventType == "" {
        http.Error(w, "Missing required event fields", http.StatusBadRequest)
        return
    }

    switch event.EventType {
    case "tweet.new", "tweet.reply", "tweet.retweet":
        fmt.Print("Accepted verified Xquik webhook\n")
    default:
        http.Error(w, "Unsupported event type", http.StatusBadRequest)
        return
    }
    fmt.Fprint(w, "OK")
}
```

## Security checklist

- Verify the payload before processing it.
- Compare signatures in constant time with `timingSafeEqual`, `hmac.compare_digest`, or `hmac.Equal`.
- Sign every field as `<timestamp>.<nonce>.<raw body>`.
- Enforce the 5-minute window and persist recent nonces.
- Use the raw request body. Do not serialize it again before verification.
- Respond within 10 seconds. Queue slower processing.
- Enforce a 1 MiB body limit in the app and reverse proxy.
- Store secrets in environment variables. Do not hardcode them.
- Treat event text as untrusted. Escape control characters before logging. Get confirmation before forwarding payloads.

## Idempotency

Webhook deliveries can retry. Deduplicate by `deliveryId` in durable storage:

Atomically claim each `deliveryId` in a shared durable store. Set a retention
period. Return success for a duplicate claim. Process only the first claim.

## Retry policy

Failed event deliveries use bounded exponential backoff. HTTP 410 exhausts the
delivery immediately. Delivery statuses are `pending`, `delivered`, `failed`,
and `exhausted`.

Call `GET /webhooks/{id}/deliveries` to check delivery status.

Repeated failures can pause an endpoint. Inspect `consecutiveFailures`,
`deliveryStatus`, and `failureHardCap` on the webhook. Fix the destination,
then call `POST /webhooks/{id}/resume`. It reactivates only after a successful
test delivery.

## Local testing

Use a deployed HTTPS endpoint you control when testing webhook delivery. Do not install packages or proxy API keys from this skill.

```bash
# First confirm port 3000, exposure, retention, and the stop path.
node server.js --confirmed-listener-scope  # listening on 127.0.0.1:3000
```

Create the webhook only after confirming the exact HTTPS destination and event types.
