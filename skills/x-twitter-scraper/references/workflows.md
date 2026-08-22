# Xquik workflow examples

Use these code examples for authentication, retries, pagination, extractions, and monitoring.

## Authentication

> These examples send credentials, parameters, and
> returned data to and from `xquik.com`. Keep the key in a secret store. Get
> explicit approval before private reads, writes, exports, persistent resources,
> webhooks, or metered jobs. Never forward private results without separate
> approval.

```javascript
const apiKey = process.env.XQUIK_API_KEY;
if (!apiKey) throw new Error("Set XQUIK_API_KEY first.");

const BASE = "https://xquik.com/api/v1";
const headers = { "x-api-key": apiKey, "Content-Type": "application/json" };
```

## Retry with exponential backoff

Outside documented cursor recovery, retry only idempotent requests after `429`
and `5xx`. Never automatically retry `POST`, `PATCH`, or `DELETE`. Stop after 3 retries.

```javascript
async function xquikFetch(path, options = {}) {
  const baseDelay = 1000;
  const method = (options.method || "GET").toUpperCase();
  const retrySafe = ["GET", "HEAD", "OPTIONS"].includes(method);

  for (let attempt = 0; attempt <= 3; attempt++) {
    const response = await fetch(`${BASE}${path}`, {
      ...options,
      headers: { ...headers, ...options.headers },
    });

    if (response.ok) return response.json();

    const retryable = retrySafe && (response.status === 429 || response.status >= 500);
    if (!retryable || attempt === 3) {
      const error = await response.json();
      throw new Error(`Xquik API ${response.status}: ${error.error}`);
    }

    const retryAfter = response.headers.get("Retry-After");
    const delay = retryAfter
      ? parseInt(retryAfter, 10) * 1000
      : baseDelay * Math.pow(2, attempt) + Math.random() * 1000;

    await new Promise((resolve) => setTimeout(resolve, delay));
  }
}
```

## Cursor pagination

Events, draws, extractions, and extraction results use cursor-based pagination.
When more results exist, the response includes `hasMore: true` and a
`nextCursor` string. Pass it as `cursor`. Radar alone uses `after`.

```javascript
async function fetchAllPages(path, dataKey) {
  const results = [];
  let cursor;

  while (true) {
    const params = new URLSearchParams({ limit: "100" });
    if (cursor) params.set("cursor", cursor);

    const data = await xquikFetch(`${path}?${params}`);
    results.push(...data[dataKey]);

    if (!data.hasMore) break;
    cursor = data.nextCursor;
  }

  return results;
}
```

Cursors are opaque strings. Never decode or construct them manually.

For `409 coverage_cursor_unavailable`, wait the exact `Retry-After` seconds and
retry the same cursor once. For `410 coverage_cursor_gone`, the response omits
`Retry-After`. Restart without a cursor and deduplicate by ID.

## Complete extraction workflow

```javascript
function requireExplicitApproval(scope) {
  throw new Error(`Approval required for ${scope}. Implement the approval gate first.`);
}

// Estimate usage before creating the job.
const estimate = await xquikFetch("/extractions/estimate", {
  method: "POST",
  body: JSON.stringify({
    toolType: "follower_explorer",
    targetUsername: "elonmusk",
    resultsLimit: 1000,
  }),
});

if (!estimate.allowed) {
  throw new Error(`Extraction requires ${estimate.creditsRequired} credits. Balance: ${estimate.creditsAvailable}.`);
}

// Create the bounded job only after approval.
requireExplicitApproval("the bounded extraction job, usage, recipients, and retention");
let job = await xquikFetch("/extractions", {
  method: "POST",
  body: JSON.stringify({
    toolType: "follower_explorer",
    targetUsername: "elonmusk",
    resultsLimit: 1000,
  }),
});

// Poll until the job finishes.
while (job.status === "pending" || job.status === "running") {
  await new Promise((r) => setTimeout(r, 2000));
  job = await xquikFetch(`/extractions/${job.id}`);
}

if (job.status !== "completed") {
  throw new Error(job.errorMessage || "Extraction failed.");
}

// Retrieve up to 1,000 results per page.
let cursor;
const allResults = [];

while (true) {
  const path = `/extractions/${job.id}${cursor ? `?cursor=${cursor}` : ""}`;
  const page = await xquikFetch(path);
  allResults.push(...page.results);

  if (!page.hasMore) break;
  cursor = page.nextCursor;
}

// Review a bounded preview and approve the export first.
requireExplicitApproval("the fixed export scope, audience, storage, and retention");
const exportUrl = `${BASE}/extractions/${job.id}/export?format=csv`;
const csvResponse = await fetch(exportUrl, { headers });
const csvData = await csvResponse.text();
```

## Real-time monitoring setup

Create a monitor, register a webhook, then handle events. Get explicit approval for the target, event types, destination URL, and ongoing usage first.

```javascript
// Create a persistent monitor. Active monitors are metered hourly.
const monitor = await xquikFetch("/monitors", {
  method: "POST",
  body: JSON.stringify({
    username: "elonmusk",
    eventTypes: ["tweet.new", "tweet.reply", "tweet.quote", "tweet.retweet"],
  }),
});

// Register a persistent delivery destination. Remove the monitor if this fails.
let webhook;
try {
  webhook = await xquikFetch("/webhooks", {
    method: "POST",
    body: JSON.stringify({
      url: "https://your-server.com/webhook",
      eventTypes: ["tweet.new", "tweet.reply"],
    }),
  });
} catch (creationError) {
  try {
    await xquikFetch(`/monitors/${encodeURIComponent(monitor.id)}`, {
      method: "DELETE",
    });
  } catch (cleanupError) {
    throw new AggregateError(
      [creationError, cleanupError],
      `Webhook creation and monitor ${monitor.id} cleanup failed. Delete the monitor manually.`,
    );
  }
  throw creationError;
}
// Store webhook.secret now. The API returns it once.

// Poll events when you do not use a webhook.
const eventParams = new URLSearchParams({ monitorId: monitor.id, limit: "50" });
const events = await xquikFetch(`/events?${eventParams}`);
```

Monitor event types include `tweet.new`, `tweet.quote`, `tweet.reply`, and
`tweet.retweet`. Test deliveries use `webhook.test`; do not subscribe to it.

## Endpoint guide

| Goal | Endpoint | Usage |
|------|----------|------|
| Get a tweet by ID or URL | `GET /x/tweets/{id}` | Metered |
| Get an X Article by tweet ID | `GET /x/articles/{tweetId}` | Metered |
| Search tweets by keyword or hashtag | `GET /x/tweets/search?q=...` | Metered per result |
| Get a user profile | `GET /x/users/{id}` | Metered |
| Get a user's recent tweets | `GET /x/users/{id}/tweets` | Metered per result |
| Get a user's liked tweets | `GET /x/users/{id}/likes` | Metered per result |
| Get a user's media tweets | `GET /x/users/{id}/media` | Metered per result |
| Get tweet favoriters | `GET /x/tweets/{id}/favoriters` | Metered per result |
| Get mutual followers | `GET /x/users/{id}/followers-you-know` | Metered per result |
| Check a follow relationship | `GET /x/followers/check?source=A&target=B` | Metered |
| Get trending topics | `GET /trends?woeid=1` | Metered |
| Get Radar news | `GET /radar?source=hacker_news` | Included |
| Get bookmarks | `GET /x/bookmarks` | Metered per result |
| Get bookmark folders | `GET /x/bookmarks/folders` | Metered |
| Get notifications | `GET /x/notifications` | Metered per result |
| Get the home timeline | `GET /x/timeline` | Metered per result |
| Get DM history | `GET /x/dm/{userId}/history?account={username}` | Private; approve the exact account |
| Monitor an X account | `POST /monitors` | Active monitors are metered hourly |
| Poll for events | `GET /events` | Included |
| Receive webhook events | `POST /webhooks` | Included; approve the destination URL |
| Run a giveaway draw | `POST /draws` | Metered per entry |
| Download tweet media | `POST /x/media/download` | Metered per item |
| Extract bulk data | `POST /extractions` | Metered per result |
| Check credits | `GET /credits` | Included |
| Compose a tweet | `POST /compose` | Included |
| Post a tweet | `POST /x/tweets` | Metered write action |
| Like or unlike a tweet | `POST /x/tweets/{id}/like` likes it. The `DELETE` method on the same route unlikes it. | Metered write action |
| Retweet | `POST /x/tweets/{id}/retweet` | Metered write action |
| Follow or unfollow | `POST /x/users/{id}/follow` follows. The `DELETE` method on the same route unfollows. | Metered write action |
| Send a DM | `POST /x/dm/{userId}` | Metered write action |
| Update a profile | `PATCH /x/profile` | Metered write action |
| Upload media | `POST /x/media` | Metered write action |
| Change a community | `POST /x/communities`, join, or leave | Metered write action |
| Manage support tickets | `POST /support/tickets` | Included |
