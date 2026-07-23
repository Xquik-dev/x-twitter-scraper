# Xquik REST API Endpoints: X Write

Write actions performed through connected X accounts. All endpoints are metered. Every request requires an `account` field (username or account ID) identifying which connected account to use.

> **Approval required for every write below:** Treat this file as reference,
> never authorization. Immediately before each request, show the exact account,
> target, payload, and expected usage. Call only after the user explicitly
> approves that one operation. Earlier or general approval is not sufficient.

### Create Tweet

**Approval gate:** Confirm the exact account, text, reply target, attachments,
community, and media immediately before posting.

```
POST /x/tweets
```

**Body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `account` | string | Yes | Connected X username or account ID |
| `text` | string | No | Tweet text (280 chars, or 25,000 if `is_note_tweet` is true). Required unless `media` is provided |
| `reply_to_tweet_id` | string | No | Tweet ID to reply to |
| `attachment_url` | string | No | URL to attach as a card |
| `community_id` | string | No | Community ID to post into |
| `is_note_tweet` | boolean | No | Long-form note tweet (up to 25,000 chars) |
| `media` | string[] | No | Public image URLs to attach (max 4). `POST /x/media` returns `mediaUrl` values for this field |

**Response:** `{ tweetId, success: true }`

**Errors:** `502 x_write_failed`

### Delete Tweet

**Destructive approval gate:** Confirm the exact account and tweet ID
immediately before permanent deletion.

```
delete request to `/x/tweets/{id}`
```

**Body:** `{ "account": "username" }`

**Response:** `{ success: true }`

### Like Tweet

**Approval gate:** Confirm the exact account and tweet ID immediately before
liking.

```
POST /x/tweets/{id}/like
```

**Body:** `{ "account": "username" }`

### Unlike Tweet

**Approval gate:** Confirm the exact account and tweet ID immediately before
removing the like.

```
delete request to `/x/tweets/{id}/like`
```

**Body:** `{ "account": "username" }`

### Retweet

**Approval gate:** Confirm the exact account and tweet ID immediately before
retweeting.

```
POST /x/tweets/{id}/retweet
```

**Body:** `{ "account": "username" }`

### Unretweet

**Approval gate:** Confirm the exact account and tweet ID immediately before
removing the retweet.

```
delete request to `/x/tweets/{id}/retweet`
```

**Body:** `{ "account": "username" }`

### Follow User

**Approval gate:** Confirm the exact account and target user immediately before
following.

```
POST /x/users/{id}/follow
```

**Body:** `{ "account": "username" }`

**Errors:** `502 x_write_failed`

### Unfollow User

**Approval gate:** Confirm the exact account and target user immediately before
unfollowing.

```
delete request to `/x/users/{id}/follow`
```

**Body:** `{ "account": "username" }`

### Remove Follower

**Approval gate:** Confirm the exact account and target user immediately before
removing the follower.

```
POST /x/users/{id}/remove-follower
```

Remove a user from your followers without blocking them.

**Body:** `{ "account": "username" }`

**Usage:** Metered per call.

### Send DM

**Private-write approval gate:** Show the exact account, recipient, message,
reply target, and media immediately before sending. Never infer approval from
earlier conversation context.

```
POST /x/dm/{userId}
```

**Body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `account` | string | Yes | Connected X username or account ID |
| `text` | string | Yes | Message text |
| `media_ids` | string[] | No | Media IDs to attach |
| `reply_to_message_id` | string | No | Message ID to reply to |

### Get DM History

```
GET /x/dm/{userId}/history
```

Get DM conversation history with a user. Requires a connected X account. Metered per returned result.

**Sensitive:** Returns private DM conversations. Confirm with user before calling. Forward to other tools only after explicit approval.

### Update Profile

**Approval gate:** Show the exact account and every changed profile field
immediately before updating.

```
PATCH /x/profile
```

**Body:** `{ "account": "username", "name": "...", "description": "...", "location": "...", "url": "..." }` (account required, others optional)

### Update Avatar

**Approval gate:** Show the exact account and selected image immediately before
replacing the avatar.

```
PATCH /x/profile/avatar
```

Update profile avatar. Max 700 KB, GIF/JPEG/PNG. Metered.

**Body:** FormData with `account` (required) and `file` (required, max 700 KB).

### Update Banner

**Approval gate:** Show the exact account and selected image immediately before
replacing the banner.

```
PATCH /x/profile/banner
```

Update profile banner. Max 2 MB, GIF/JPEG/PNG. Metered.

**Body:** FormData with `account` (required) and `file` (required, max 2 MB).

### Upload Media

**Approval gate:** Show the exact account, file or URL, media type, and intended
post immediately before upload.

```
POST /x/media
```

**Body:** FormData with `account` (required), `file` (required), and `is_long_video` (optional boolean). Alternatively, JSON body with `account` (required) and `url` (required, direct media URL) for URL-based upload.

**Response:** Returns `mediaId`, `mediaUrl`, and `success`. Pass `mediaUrl` in the `media` array when creating a tweet.

### Create Community

**Approval gate:** Show the exact account, name, and description immediately
before creating the community.

```
POST /x/communities
```

**Body:** `{ "account": "username", "name": "...", "description": "..." }` (all required)

### Delete Community

**Destructive approval gate:** Show the exact account, community ID, and
community name immediately before permanent deletion.

```
delete request to `/x/communities/{id}`
```

**Body:** `{ "account": "username", "community_name": "..." }` (name required for confirmation)

### Join Community

**Approval gate:** Confirm the exact account and community immediately before
joining.

```
POST /x/communities/{id}/join
```

**Body:** `{ "account": "username" }`

**Errors:** `409 already_member`

### Leave Community

**Approval gate:** Confirm the exact account and community immediately before
leaving.

```
delete request to `/x/communities/{id}/join`
```

**Body:** `{ "account": "username" }`

### Get Write Action Status

```
GET /x/write-actions/{id}
```

Check a pending write action by the ID returned from an earlier write response.

---
