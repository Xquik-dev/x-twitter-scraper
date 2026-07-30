# Xquik REST API Endpoints: Drafts

## Safety Boundary

`GET` operations are read-only. `POST` and delete operations are non-default
writes. Show the exact draft text or draft ID and receive explicit user
approval immediately before each write. Never infer approval from an earlier
request or retry a failed write automatically.

### Create Draft

`POST /drafts`

Save a tweet draft for later.

**Approval required:** Preview the complete text and metadata. Create the draft
only after the user explicitly approves that exact payload.

**Request body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `text` | string | Yes | The draft tweet text |
| `topic` | string | No | Topic the tweet is about |
| `goal` | string | No | Optimization goal: `engagement`, `followers`, `authority`, `conversation` |

**Response (201):**

```json
{
  "id": "123",
  "text": "draft text",
  "topic": "product launch",
  "goal": "engagement",
  "createdAt": "2026-02-24T10:30:00.000Z",
  "updatedAt": "2026-02-24T10:30:00.000Z"
}
```

---

### List Drafts

`GET /drafts`

List saved tweet drafts with cursor pagination.

**Query parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `limit` | number | No | 50 | Results per page (max 50) |
| `afterCursor` | string | No | - | Pagination cursor from previous response |

**Response (200):**

```json
{
  "drafts": [
    {
      "id": "123",
      "text": "draft text",
      "topic": "product launch",
      "goal": "engagement",
      "createdAt": "2026-02-24T10:30:00.000Z",
      "updatedAt": "2026-02-24T10:30:00.000Z"
    }
  ],
  "afterCursor": "cursor_string",
  "hasMore": true
}
```

---

### Get Draft

`GET /drafts/{id}`

Get a specific draft by ID.

**Response (200):** Single draft object.

**Errors:** `400 invalid_id`, `404 draft_not_found`

---

### Delete Draft

delete request to `/drafts/{id}`

**Destructive action:** Deletion is permanent and cannot be recovered through
this API. Show the draft ID and text, then obtain explicit approval immediately
before deleting it. Returns `204 No Content`.

**Errors:** `400 invalid_id`, `404 draft_not_found`

---
