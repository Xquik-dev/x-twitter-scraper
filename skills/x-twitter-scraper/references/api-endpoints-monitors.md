# Xquik REST API Endpoints: Monitors

## Safety Boundary

Monitor reads are read-only. Creating, updating, enabling, disabling, or
deleting a monitor changes a persistent and potentially metered resource.
Before every write, show the exact account or keyword, event types, delivery
plan, ongoing usage, and disable path. Proceed only after explicit approval for
that exact action. Never create monitoring from an ambiguous request.

### Create Monitor

```
POST /monitors
```

**Approval required:** This starts persistent monitoring. Confirm the exact
username, event types, delivery plan, ongoing usage, and disable path first.

**Body:**
```json
{
  "username": "elonmusk",
  "eventTypes": ["tweet.new", "tweet.reply", "tweet.quote"]
}
```

**Response:**
```json
{
  "id": "7",
  "username": "elonmusk",
  "xUserId": "44196397",
  "eventTypes": ["tweet.new", "tweet.reply", "tweet.quote"],
  "createdAt": "2026-02-24T10:30:00.000Z"
}
```

Event types: `tweet.new`, `tweet.quote`, `tweet.reply`, `tweet.retweet`, `webhook.test`.

Returns `409 monitor_already_exists` if the username is already monitored.

### List Monitors

```
GET /monitors
```

Returns all monitors (up to 200, no pagination). Response includes `monitors` array and `total` count.

### Get Monitor

```
GET /monitors/{id}
```

### Update Monitor

```
PATCH /monitors/{id}
```

**Approval required:** Show the current and proposed event types and active
state. Apply only the explicitly approved change.

**Body:** `{ "eventTypes": [...], "isActive": true|false }` (both optional)

### Delete Monitor

```
delete request to `/monitors/{id}`
```

**Destructive action:** This permanently stops tracking and deletes associated
monitor data. Show the monitor ID, target, and lost data. Delete only after
explicit approval immediately before the call.

### Keyword Monitors

```
GET /monitors/keywords
POST /monitors/keywords
GET /monitors/keywords/{id}
PATCH /monitors/keywords/{id}
delete request to `/monitors/keywords/{id}`
```

Create and manage ongoing keyword monitors. Treat these as persistent resources: confirm the keyword query, event delivery plan, and ongoing usage before creating or enabling one.

Creating, updating, enabling, disabling, or deleting a keyword monitor requires
explicit approval for the exact monitor. Deletion permanently removes its
associated data.

---
