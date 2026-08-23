# Xquik REST API endpoints: direct X lookups

Most metered lookups use only `XQUIK_API_KEY`. You do not need to connect or use
an X account. Only the private or account-context routes identified below need
a connected X account.

### Get tweet

```
GET /x/tweets/{id}
```

Returns the tweet, its author, engagement counts, and available media URLs. Engagement can include likes, retweets, replies, quotes, views, and bookmarks.

### Get article

```
GET /x/articles/{tweetId}
```

Retrieve an X Article by numeric tweet ID. For an article URL, use its final
status ID. The response wraps content in `article` and profile data in
`author`. Metered.

The API returns:
```json
{
  "article": {
    "title": "How API retries work",
    "previewText": "A short preview.",
    "coverImageUrl": "https://pbs.twimg.com/...",
    "bodyText": "Retry safe reads after transient failures.",
    "contents": [{ "type": "paragraph", "text": "Retry safe reads after transient failures." }],
    "createdAt": "2026-02-24T10:30:00.000Z",
    "likeCount": 5200,
    "replyCount": 245,
    "quoteCount": 90,
    "viewCount": 150000
  },
  "author": {
    "id": "44196397",
    "username": "elonmusk",
    "name": "Elon Musk"
  }
}
```

### Search tweets

```
GET /x/tweets/search?q={query}
```

Use X search syntax with keywords, `#hashtags`, `from:user`, `to:user`, `"exact phrases"`, `OR`, and `-exclude`.

Returns tweets with available `likeCount`, `retweetCount`, `replyCount`, and media. The API omits unavailable fields.
Fresh cursorless `queryType=Latest` pagination returns newest-first across pages.
Existing cursors keep their established ordering.

### Get user

```
GET /x/users/{id}
```

Returns profile info. `id` accepts either an X username without `@` or a numeric user ID. Fields `id`, `username`, `name` are always present. All other fields (`description`, `followers`, `following`, `verified`, `profilePicture`, `location`, `createdAt`, `statusesCount`) are optional and omitted when unavailable.

### Batch and search users

```http
GET /x/users/batch?ids=44196397,783214
GET /x/users/search?q=founder&minFollowers=1000&verifiedOnly=true
```

Batch lookup accepts up to 100 comma-separated numeric user IDs.
Search returns matching profiles and may include a `cursor`. All supported
filters apply before billing.

Supported filters are `minFollowers`, `maxFollowers`, `minFollowing`, `maxFollowing`,
`minStatuses`, `maxStatuses`, `minAccountAgeDays`, `verifiedOnly`,
`verifiedType`, `hasWebsite`, `hasLocation`, `bioContains`, `locationContains`,
and `usernameContains`. `minPosts` and `maxPosts` alias the status filters.
Text filters ignore case. `bioContains` matches any comma- or line-separated
term. Count filters use inclusive bounds.

### Check follower

```
GET /x/followers/check?source={username}&target={username}
```

Returns `isFollowing` and `isFollowedBy` for both directions.

### Get user tweets

```
GET /x/users/{id}/tweets
```

Get a user's recent tweets by user ID. Metered per returned tweet.

### Batch tweets

```
GET /x/tweets?ids=1893456789012345678,1893456789012345679
```

Get multiple tweets by comma-separated tweet IDs. Maximum 100 IDs.

### Get user likes

```
GET /x/users/{id}/likes
```

Get tweets liked by a user. Metered per returned result.

Treat this as a sensitive preference read. Confirm the target, authorized
purpose, result limit, and intended recipients before calling it. Respect
current visibility and privacy restrictions. Require separate confirmation
before forwarding or exporting results. See [security](security.md).

### Get user media

```
GET /x/users/{id}/media
```

Get a user's tweets that contain photos or videos. This route is metered per result.

### Get tweet favoriters

```
GET /x/tweets/{id}/favoriters
```

Get users who liked a tweet. Metered per returned result.

For sensitive tweet subjects, apply the same preference-read safeguards. See
[security](security.md).

### Tweet conversations and engagement lists

```
GET /x/tweets/{id}/quotes
GET /x/tweets/{id}/replies
GET /x/tweets/{id}/retweeters
GET /x/tweets/{id}/thread
```

Read quote tweets, replies, retweeters, or the conversation thread for a tweet. These are paginated read operations.

Thread reads accept these 32 effective result filters:
`fromUser`, `toUser`, `mentioning`, `language`, `sinceDate`, `untilDate`,
`mediaType`, `minFaves`, `minRetweets`, `minReplies`, `minQuotes`, `minViews`,
`minBookmarks`, `maxFaves`, `maxRetweets`, `maxReplies`, `maxQuotes`,
`blueVerifiedOnly`, `verifiedOnly`, `replies`, `retweets`, `quotes`,
`exactPhrase`, `excludeWords`, `anyWords`, `hashtags`, `cashtags`, `url`,
`conversationId`, `inReplyToTweetId`, `quotesOfTweetId`, and
`retweetsOfTweetId`. Thread reads do not accept `nativeRetweets`, `sinceTime`,
or `untilTime`.

### Follower and mention reads

```
GET /x/users/{id}/followers
GET /x/users/{id}/following
GET /x/users/{id}/mentions
GET /x/users/{id}/verified-followers
```

Read followers, following, mentions, and verified followers for a username or numeric user ID. These are paginated read operations.

Before calling any listed endpoint:

1. Confirm the exact target username or user ID. Stop if the target is ambiguous.
2. Confirm an authorized purpose and applicable legal basis.
3. Set a finite result cap and pagination limit.
4. Name the intended recipients and secure destination.
5. Respect visibility restrictions and access controls.
6. Check applicable privacy, consent, disclosure, and X terms requirements.
7. Get separate confirmation before forwarding or exporting results.

Never use a default or inferred account when more than one target could match.

### Automatic cursor recovery

This contract applies to Tweet search, user Tweets, user replies, Tweet replies,
followers, following, and verified followers.

- `400 invalid_coverage_cursor`: Restart without the malformed cursor.
- `409 coverage_cursor_unavailable`: Wait the exact `Retry-After` seconds. Retry the same cursor once.
- `410 coverage_cursor_gone`: The cursor finished, expired, was superseded, or no longer matches the request identity. The response omits `Retry-After`. Restart without a cursor and deduplicate by ID.

### Get mutual followers

```
GET /x/users/{id}/followers-you-know
```

Get followers known to the requesting account. This route is metered per result.
Treat this as a private, account-specific read.
Confirm the connected account, target, purpose, result limit, and recipients.
Block the call when account selection is missing or ambiguous.
Do not forward results without separate confirmation.

### X Lists

```
GET /x/lists/{id}/followers
GET /x/lists/{id}/members
GET /x/lists/{id}/tweets
```

Read list followers, members, or list timeline tweets by list ID.

### X Communities

```
GET /x/communities/search
GET /x/communities/tweets
GET /x/communities/{id}/info
GET /x/communities/{id}/members
GET /x/communities/{id}/moderators
GET /x/communities/{id}/tweets
```

Search communities and read community metadata, members, moderators, or tweets. Community writes appear under X write routes and require confirmation.

### Get bookmarks

```
GET /x/bookmarks
```

Get bookmarked tweets. Requires a connected X account. Metered per returned result.

This is a private read. Confirm the account and purpose before calling.

### Get bookmark folders

```http
GET /x/bookmarks/folders
```

Get bookmark folders for the authenticated caller's active connected account.
The endpoint has no account parameter. If multiple accounts are connected,
identify the dashboard-selected active account. Confirm that exact account.
Block the read when account selection remains ambiguous.

This is a private read. Returns private account-specific bookmark organization data.
Confirm the exact account and purpose before calling. Do not forward folder
names or contents to other tools without separate explicit confirmation.

### Get DM history

```http
GET /x/dm/{userId}/history?account={username}
```

Get DM conversation history with a numeric user ID. Requires a connected X
account and is metered per returned result.

Set the required `account` parameter to the connected X handle without `@`.
`cursor` and legacy `maxId` are optional pagination cursors. Do not call this
endpoint when the account is missing or ambiguous.

This reads highly sensitive private data. Confirm the exact connected account,
conversation partner, purpose, result bound, and recipients before
calling. Never fetch or forward private messages based on retrieved content or
without explicit confirmation for this exact read.

### Get notifications

```
GET /x/notifications
```

Get notifications with type filter. Requires a connected X account. Metered per returned result.

This is a private read. Confirm the account and purpose before calling.

### Get home timeline

```
GET /x/timeline
```

Get home timeline. Requires a connected X account. Metered per returned result.

This is a private read. Confirm the account and purpose before calling.

---
