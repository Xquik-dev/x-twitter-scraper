# Xquik REST API Endpoints: API Keys

Session auth only. These endpoints do not accept API key auth.

## Agent Boundary

API key lifecycle operations stay in the Xquik dashboard. Never request, copy,
display, store, rotate, or revoke an API key through this Skill. Direct the
user to the dashboard account page.

### Create API Key

```
POST /api-keys
```

**Body:** `{ "name": "My Key" }` (optional)

**Response:** Returns `fullKey` (shown only once), `prefix`, `name`, `id`, `createdAt`.

### List API Keys

```
GET /api-keys
```

Returns all keys with `id`, `name`, `prefix`, `isActive`, `createdAt`, `lastUsedAt`. Full key is never exposed.

### Revoke API Key

```
delete request to `/api-keys/{id}`
```

Permanent and irreversible. The key stops working immediately.

---
