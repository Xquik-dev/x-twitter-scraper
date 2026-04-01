---
description: Post a tweet to X/Twitter
---

Post a tweet with the text: "$ARGUMENTS"

Before posting, confirm with the user: "Post this tweet? [text]"

After confirmation, use the `xquik` MCP tool to call `POST /api/v1/x/tweets` with body `{ "text": "<the tweet text>" }`.

Note: The API requires an `account` field (connected X username). If unknown, use the `explore` MCP tool to check available accounts first via `GET /api/v1/x-accounts`, then use the first connected account.

Show the result: tweet ID and link `https://x.com/i/status/{tweetId}`.

If the text is empty, ask the user what to tweet.
