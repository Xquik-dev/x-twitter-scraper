# Extraction jobs

Use an extraction for a complete list, a large dataset, or a file export.
Each job bills per delivered result, and filters apply before billing, so
excluded rows cost nothing.

## Flow

1. Build one body with `toolType`, its target, the requested filters, and
   `resultsLimit` when the user set a cap. Without a cap the API uses 10,000.
2. `POST /extractions/estimate` with that body. It is free and creates
   nothing. The response holds `allowed`, `estimatedResults`,
   `creditsRequired`, `creditsAvailable`, and `source`.
3. Show those numbers. `estimatedResults` is a conservative billing count, such
   as the follower count or the `resultsLimit` cap, not a count of matching
   posts. `source` names which one it used. When `allowed` is false, the
   balance cannot fund the job, so lower `resultsLimit` or add credits in the
   dashboard.
4. Ask the user to confirm the estimate. Create nothing before a yes.
5. `POST /extractions` with the same body. A `202` response returns the job
   `id`, `status`, and `statusUrl`.
6. Poll `GET /extractions/{id}` until `job.status` is `completed`, `failed`, or
   `canceled`. The response holds `job`, `results`, `hasMore`, `nextCursor`,
   and `pollAfterMs`. Wait
   `pollAfterMs` between polls. Rows arrive 100 per page by default, up to
   1,000 with `limit=1000`. While `hasMore` is true, pass `nextCursor` back as
   `cursor`.
7. Always give the download call: `GET /extractions/{id}/export?format=csv`.
   Formats: `csv`, `json`, `md`, `md-document`, `pdf`, `txt`, `xlsx`. One
   export holds up to 100,000 rows, and PDF up to 10,000. For a larger job,
   also page `GET /extractions/{id}?limit=1000&cursor=<nextCursor>` and
   append the rows to the file.

`DELETE /extractions/{id}` cancels a running job.

```json
{
  "toolType": "follower_explorer",
  "targetUsername": "nasa",
  "resultsLimit": 5000
}
```

## Tools and targets

| Target field | Tools |
| --- | --- |
| `targetTweetId` | `reply_extractor` (reply authors), `repost_extractor`, `quote_extractor`, `favoriters` (needs a connected X account), `thread_extractor`, `article_extractor` |
| `targetUsername` | `follower_explorer`, `following_explorer`, `verified_follower_explorer`, `mention_extractor`, `post_extractor`, `user_media`, `user_likes` (needs a connected X account) |
| `targetCommunityId` | `community_extractor` (members), `community_moderator_explorer`, `community_post_extractor`, `community_search` (also needs `searchQuery`) |
| `targetListId` | `list_member_extractor`, `list_post_extractor`, `list_follower_explorer` |
| `targetSpaceId` | `space_explorer` (participants) |
| `searchQuery` | `tweet_search_extractor`, `people_search` |

Multi-target jobs use `targetUsernames`, `targetTweetIds`, `searchQueries`,
`targetCommunityIds`, or `targetListIds`, with `maxItemsPerTarget`.

## Search filters

`tweet_search_extractor` takes the query in `searchQuery` and these optional
top-level filters: `fromUser`, `toUser`, `mentioning`, `language`,
`sinceDate`, `untilDate`, `mediaType`, `minFaves`, `minRetweets`,
`minReplies`, `minQuotes`, `verifiedOnly`, `replies`, `retweets`, `quotes`,
`exactPhrase`, `excludeWords`, `anyWords`, `hashtags`, `cashtags`, `url`, and
`queryType` (`Latest` default, or `Top`). Send only the filters the user asked
for.

```json
{
  "toolType": "tweet_search_extractor",
  "searchQuery": "solar panels",
  "language": "en",
  "sinceDate": "2026-01-01",
  "untilDate": "2026-06-30",
  "retweets": "exclude",
  "resultsLimit": 20000
}
```

Profile tools accept `minFollowers`, `maxFollowers`, `verifiedOnly`,
`bioContains`, `locationContains`, and `minAccountAgeDays`.

## Results

Rows keep stable IDs. Store the job ID, body, and collection time with the
file. Deleted, protected, or unavailable content can be missing, so counts can
differ from the numbers X shows on a profile or post.
