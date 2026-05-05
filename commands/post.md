---
description: Post a tweet to X/Twitter
---

Post a tweet with the text: "$ARGUMENTS"

Before posting, confirm the exact tweet text and posting account with the user.

After confirmation, use the `xquik` MCP tool to call `POST /api/v1/x/tweets` with body `{ "account": "<confirmed account>", "text": "<the tweet text>" }`.

Note: The API requires an `account` field (connected X username). If unknown, ask the user which connected account should post.

Show the result: tweet ID and link `https://x.com/i/status/{tweetId}`.

If the text is empty, ask the user what to tweet.
