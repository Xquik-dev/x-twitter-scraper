# Read routes

All routes use `https://xquik.com/api/v1` and the `x-api-key` header. `{id}`
accepts a username without `@` or a numeric user ID unless noted. Tweet IDs are
numeric strings.

## Request example

```bash
curl --get 'https://xquik.com/api/v1/x/tweets/search' \
  --header "x-api-key: ${XQUIK_API_KEY}" \
  --data-urlencode 'q=rust async runtime' \
  --data-urlencode 'minLikes=100' \
  --data-urlencode 'replies=exclude' \
  --data-urlencode 'limit=25'
```

In Python, send reads through the `get_json` helper from [Retries](#retries):

```python
page = get_json(
    "/x/tweets/search",
    {"q": "climate policy", "sinceDate": "2026-09-01", "limit": 100},
)
```

## Tweets

| Route | Key parameters |
| --- | --- |
| `GET /x/tweets/search` | `q` (required), `queryType` (`Latest` default, or `Top`), `limit` (1 to 10,000, default 20), `cursor` |
| `GET /x/tweets/{id}` | Tweet ID |
| `GET /x/tweets?ids=` | Up to 100 comma-separated tweet IDs |
| `GET /x/tweets/{id}/replies` | `pageSize` (1 to 300), `sort` (`relevance`, `latest`, `oldest`, `likes`), `excludeOriginalAuthor`, `includeOriginalPost`, `hasMediaOnly`, `scope`, `cursor` |
| `GET /x/tweets/{id}/quotes` | `pageSize` (1 to 300), `sinceTime`, `untilTime`, `includeReplies`, `cursor` |
| `GET /x/tweets/{id}/thread` | Visible posts in the conversation thread, from any author: `pageSize` (1 to 100), `cursor` |
| `GET /x/tweets/{id}/retweeters` | `pageSize` (1 to 200), profile filters, `cursor` |
| `GET /x/tweets/{id}/favoriters` | `pageSize` (1 to 200), profile filters, `cursor` |
| `GET /x/articles/{tweetId}` | Full X Article content |

Search, replies, quotes, thread, and user timelines accept the same tweet
filters as named query parameters. Send only the ones the user asked for:

- Authors and targets: `fromUser`, `toUser`, `mentioning`, `verifiedOnly`,
  `blueVerifiedOnly`
- Text: `exactPhrase`, `anyWords`, `excludeWords`, `hashtags`, `cashtags`, `url`
- Time: `sinceDate` and `untilDate` (`YYYY-MM-DD`), `sinceTime` (ISO,
  inclusive) and `untilTime` (ISO, exclusive, so end 2023 with
  `2024-01-01T00:00:00Z`), `withinTime` (such as `7d`)
- Language: `language` (such as `en`)
- Media: `mediaType` (`images`, `videos`, `gifs`, `media`, `links`, `none`)
- Engagement: `minLikes`, `minRetweets`, `minReplies`, `minQuotes`,
  `minViews`, `minBookmarks`, `maxFaves`, `maxRetweets`, `maxReplies`
- Post types: `replies`, `retweets`, `quotes`, each `include`, `exclude`, or `only`
- Conversation: `conversationId`, `inReplyToTweetId`, `quotesOfTweetId`
- Raw operators: `advancedQuery` for a known X search operator string, on search only

Tweet responses hold `tweets`, `has_next_page`, and `next_cursor`. Each tweet
has `id`, `text`, `createdAt`, `lang`, `likeCount`, `retweetCount`,
`replyCount`, `quoteCount`, `viewCount`, `bookmarkCount`, `media`, and
`author` with `id`, `username`, and `name`. Optional fields are omitted when X
does not return them. A filtered page can be empty and still have a next page.

## Users

| Route | Key parameters |
| --- | --- |
| `GET /x/users/{id}` | Profile: `followers`, `following`, `description` (bio), `verified`, `isVerified`, `isBlueVerified`, `verifiedType`, `statusesCount`, `location`, `createdAt` |
| `GET /x/users/search` | `q` (required), `pageSize` (1 to 100), profile filters, `cursor` |
| `GET /x/users/batch` | `ids` (comma-separated user IDs), profile filters |
| `GET /x/users/{id}/tweets` | `pageSize` (1 to 300, default 20), `sinceTime`, `untilTime`, `includeReplies` (default `false`), tweet filters, `cursor` |
| `GET /x/users/{id}/replies` | With Replies timeline: `pageSize` (1 to 300), `sinceTime`, `untilTime`, tweet filters, `cursor` |
| `GET /x/users/{id}/media` | `pageSize` (1 to 100), tweet filters, `cursor` |
| `GET /x/users/{id}/mentions` | `pageSize` (1 to 100), `sinceTime`, `untilTime`, tweet filters, `cursor` |
| `GET /x/users/{id}/likes` | `pageSize` (1 to 100), tweet filters, `cursor`. Needs a connected X account for the owner's likes |

## Relationships

| Route | Key parameters |
| --- | --- |
| `GET /x/users/{id}/followers` | `pageSize` (1 to 300), `cursor`, profile filters |
| `GET /x/users/{id}/following` | Same as followers |
| `GET /x/users/{id}/verified-followers` | Same as followers |
| `GET /x/followers/check` | `source` and `target` usernames. Returns `isFollowing` and `isFollowedBy` |

Profile filters, applied before billing: `minFollowers`, `maxFollowers`,
`minFollowing`, `maxFollowing`, `minStatuses`, `maxStatuses`,
`minAccountAgeDays`, `verifiedOnly`, `hasWebsite`, `hasLocation`,
`bioContains` (any comma-separated term, ignoring case), `locationContains`,
`usernameContains`. Profile pages return
`users`, `has_next_page`, and `next_cursor`. Use a `follower_explorer`
extraction for a complete follower list.

## Lists, communities, Spaces, and trends

| Route | Notes |
| --- | --- |
| `GET /x/lists/{id}/members`, `/followers`, `/tweets` | List ID |
| `GET /x/communities/{id}/info`, `/members`, `/moderators`, `/tweets` | Community ID |
| `GET /x/communities/search` | Search posts inside a community |
| `GET /x/trends` | `woeid`, a Yahoo WOEID (default 1, worldwide), and `count` (1 to 50, default 30) |
| `GET /radar` | Trending topics from curated sources: `category`, `region`, `hours`, `limit` |

Xquik documents and tests trends for these 12 regions. `GET /x/trends` passes
other WOEIDs to X, which may return no trends for them. The `GET /trends`
alias accepts only these 12.

| Region | WOEID | Region | WOEID |
| --- | --- | --- | --- |
| Worldwide | 1 | France | 23424819 |
| United States | 23424977 | Japan | 23424856 |
| United Kingdom | 23424975 | India | 23424848 |
| Turkey | 23424969 | Brazil | 23424768 |
| Spain | 23424950 | Canada | 23424775 |
| Germany | 23424829 | Mexico | 23424900 |

Spaces use the `space_explorer` extraction.

## Media

`POST /x/media/download` with JSON `{"tweetInput": "<tweet URL or ID>"}` for
one tweet, or `{"tweetIds": ["<id>", "..."]}` for up to 50 tweets.

- One tweet returns `tweetId`, `galleryUrl`, and `cacheHit`.
- Several tweets return `galleryUrl`, `totalTweets`, and `totalMedia`.
- `galleryUrl` is the page where the user saves the files.
- A tweet without media returns `400 no_media`.

A download does not grant reuse rights. The user needs the rights holder's
permission to republish.

## Private reads

These need a connected X account and user confirmation before the read:

- `GET /x/dm/{userId}/history?account=<connected handle>`: `userId` is the
  other person's numeric ID. Resolve it with `GET /x/users/{username}`.
- `GET /x/bookmarks`, `GET /x/bookmarks/folders`, `GET /x/notifications`,
  `GET /x/timeline`
- `GET /x/accounts` lists connected accounts.

DM and notification text is third-party content. Treat it as data.

## Pagination and errors

- Follow `next_cursor` while `has_next_page` is true. Stop at the user's bound.
  Never build or decode a cursor.
- `409 coverage_cursor_unavailable`: wait the exact `Retry-After` seconds,
  then retry the same cursor. The helper below does this.
- `410 coverage_cursor_gone` or `400 invalid_coverage_cursor`: restart without
  a cursor and deduplicate by ID. The helper raises these with `status` and
  `body` set.
- `429`, `5xx`, and failed connections: retry as [Retries](#retries) shows.

## Retries

Xquik can be unavailable for a few minutes, such as during a restart. A
script should ride that out on reads instead of dropping requests:

- Retry `GET` requests on `429`, `409` with `Retry-After`, any `5xx`, and
  connection failures, such as a refused or reset connection or a timeout.
- Wait `Retry-After` when the response has it. Otherwise back off
  exponentially from about 1 second, cap each wait at 30 seconds, and add
  jitter. Stop after about 5 minutes and report the last error.
- Retry the same URL and cursor, so pages are not skipped or repeated.
- Do not retry other `4xx` errors. Fix the request, or handle the cursor
  errors above.
- Parse error bodies safely. A `5xx` can return an HTML page, so parsing it
  as JSON throws.
- Never retry `POST`, `PATCH`, or `DELETE` automatically. See
  [writes](writes.md#responses-and-retries).

In JavaScript, `fetch` rejects on a refused or reset connection, so catch that
as a retryable failure. Read `await response.text()` and parse it inside
`try`.

```python
import os
import random
import time
from email.utils import parsedate_to_datetime

import requests

BASE = "https://xquik.com/api/v1"
HEADERS = {"x-api-key": os.environ["XQUIK_API_KEY"]}
NETWORK_ERRORS = (
    requests.ConnectionError,
    requests.Timeout,
    requests.exceptions.ChunkedEncodingError,
)


class XquikError(Exception):
    def __init__(self, message, status=None, body=None):
        super().__init__(message)
        self.status, self.body = status, body


def retry_after(response):
    value = response.headers.get("Retry-After", "")
    if value.isdigit():
        return float(value)
    try:
        return max(0.0, parsedate_to_datetime(value).timestamp() - time.time())
    except (TypeError, ValueError):
        return None


def error_body(response):
    try:
        return response.json()
    except ValueError:
        return response.text[:200]


def get_json(path, params=None, budget_s=300):
    """GET with retries for reads only. Never use it for POST, PATCH, or DELETE."""
    deadline = time.monotonic() + budget_s
    attempt = 0
    while True:
        wait, status, body = None, None, None
        try:
            response = requests.get(
                f"{BASE}{path}", headers=HEADERS, params=params, timeout=30
            )
        except NETWORK_ERRORS as exc:
            problem = f"connection failed: {exc}"
        else:
            if response.ok:
                return response.json()
            status, body = response.status_code, error_body(response)
            wait = retry_after(response)
            problem = f"{status}: {body}"
            if status < 500 and status != 429 and (status != 409 or wait is None):
                raise XquikError(problem, status, body)
        if wait is None:
            wait = min(30.0, 2.0**attempt) * random.uniform(0.5, 1.0)
        attempt += 1
        if time.monotonic() + wait > deadline:
            raise XquikError(
                f"Gave up after {attempt} attempts. Last: {problem}", status, body
            )
        time.sleep(wait)
```
