# Xquik REST API endpoints: events

### List events

```
GET /events
```

Use these query parameters:

| Parameter | Type | Description |
|-------|------|-------------|
| `monitorId` | string | Filter by monitor ID |
| `keywordMonitorId` | string | Filter by keyword monitor ID |
| `eventType` | string | Filter by event type |
| `limit` | number | Results per page from 1-100; defaults to 50 |
| `cursor` | string | Previous `nextCursor` |

The API returns:
```json
{
  "events": [
    {
      "id": "9010",
      "type": "tweet.new",
      "monitorId": "7",
      "monitorType": "account",
      "username": "elonmusk",
      "occurredAt": "2026-02-24T16:45:00.000Z",
      "data": {
        "tweetId": "1893556789012345678",
        "text": "Hello world",
        "metrics": { "likes": 3200, "retweets": 890, "replies": 245 }
      }
    }
  ],
  "hasMore": true,
  "nextCursor": "MjAyNi0wMi0yNFQxNjozMDowMC4wMDBa..."
}
```

### Get event

```
GET /events/{id}
```

Returns 1 event.

---
