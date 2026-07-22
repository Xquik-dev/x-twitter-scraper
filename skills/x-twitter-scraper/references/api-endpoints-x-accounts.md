# Xquik REST API Endpoints: X Accounts (Connected)

Read identity metadata for connected X accounts used by confirmation-gated
actions.

**Account lifecycle actions are outside this skill.** Connecting,
re-authenticating, retrying, or disconnecting an X account must be completed by
the user in the Xquik dashboard. The skill never accepts X login material and
does not expose account-lifecycle writes. Direct the user to the dashboard
account page instead.

### List X Accounts

```
GET /x/accounts
```

Returns all connected X accounts. Response: `{ accounts: [{ id, username, displayName, isActive, createdAt }] }`.

### Get X Account

```
GET /x/accounts/{id}
```

Returns `{ id, username, displayName, isActive, createdAt }`.

---
