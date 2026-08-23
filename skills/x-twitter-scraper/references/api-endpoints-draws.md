# Xquik REST API endpoints: draws

## Protect giveaway participant data

Draw creation and participant exports are metered or privacy-sensitive actions.
Confirm the source tweet, eligibility rules, requested data type, export
audience, and retention plan. Use the smallest necessary dataset. Do not
export entries for surveillance, discrimination, harassment, or unrelated
secondary use.
Draw history and results are account-scoped private reads. Require exact-scope
confirmation before listing draws or retrieving winners.

### Create draw

```
POST /draws
```

Run a giveaway draw from a tweet. The draw selects random winners from replies.

Get confirmation first. Show the source tweet, winner count, backup count,
filters, and estimated usage. Also show the lawful purpose, participant-data
handling, export audience, and retention plan. Record every field before
persisting participant data.

Send this body:
```json
{
  "tweetUrl": "https://x.com/user/status/1893456789012345678",
  "winnerCount": 3,
  "backupCount": 2,
  "uniqueAuthorsOnly": true,
  "mustRetweet": true,
  "mustFollowUsername": "burakbayir",
  "filterMinFollowers": 100,
  "filterAccountAgeDays": 30,
  "filterLanguage": "en",
  "requiredKeywords": ["giveaway"],
  "requiredHashtags": ["#contest"],
  "requiredMentions": ["@xquik"]
}
```

All filter fields are optional. Only `tweetUrl` is required.

The API returns:
```json
{
  "id": "42",
  "tweetId": "1893456789012345678",
  "tweetUrl": "https://x.com/user/status/1893456789012345678",
  "tweetText": "Like and repost to enter. We will select 3 winners tomorrow.",
  "tweetAuthorUsername": "xquik",
  "tweetLikeCount": 4200,
  "tweetRetweetCount": 1800,
  "tweetReplyCount": 1500,
  "tweetQuoteCount": 120,
  "status": "completed",
  "totalEntries": 1500,
  "validEntries": 890,
  "createdAt": "2026-02-24T10:00:00.000Z",
  "drawnAt": "2026-02-24T10:01:00.000Z"
}
```

### List draws

```
GET /draws
```

Cursor-paginated. Returns compact draw objects.

This is a private read. Show the exact account, requested page scope, and returned
field scope. List draws only after explicit confirmation for that exact read.

### Get draw

```
GET /draws/{id}
```

Returns full draw details including winners.

This is a private read. Show the exact account, draw ID, and returned-data scope.
Retrieve details only after explicit confirmation for that exact read.

### Export draw

```
GET /draws/{id}/export?format=csv&type=winners
```

Choose `csv`, `json`, `md`, `md-document`, `pdf`, `txt`, or `xlsx`. Choose `winners` or `entries`; the default is `winners`. Entry exports support 100,000 rows, except PDF supports 10,000.

Get confirmation first. Full entry exports can contain participant identity and
activity data. Show the lawful purpose, exact draw, type, format, audience, and
retention period. Export only after explicit confirmation for that exact request.
Prefer winners-only output. Delete data when the stated purpose ends.

---
