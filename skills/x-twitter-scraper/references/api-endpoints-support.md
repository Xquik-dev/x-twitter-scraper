# Xquik REST API Endpoints: Support

## Safety Boundary

Support tickets can disclose private user or account context. Show the exact
subject and message before creating a ticket. Show the ticket ID and message
before replying. Show the ticket ID plus current and proposed statuses before
updating status. Proceed only after explicit approval for that exact payload.
Never include passwords, API keys, signing keys, unrelated prompt context, or
unnecessary personal data.

### Create Ticket

```
POST /support/tickets
```

**Body:** `{ "subject": "...", "body": "..." }`

**Response (201):** `{ id, subject, status, createdAt }`

### List Tickets

```
GET /support/tickets
```

Returns all tickets for the authenticated user.

### Get Ticket

```
GET /support/tickets/{id}
```

Returns ticket with messages.

### Update Ticket

```
PATCH /support/tickets/{id}
```

Update ticket status.

**Approval required:** Show the ticket ID and current and proposed statuses.
Update only after the user approves that exact transition.

### Reply to Ticket

```
POST /support/tickets/{id}/messages
```

**Body:** `{ "body": "..." }`

Add a message to an existing ticket.

Apply the same approval and data-minimization rules to every reply.

---
