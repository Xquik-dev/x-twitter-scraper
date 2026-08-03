---
description: Post a tweet to X/Twitter
---

Post a tweet with the text: "$ARGUMENTS"

## Workflow

1. If the text is empty, ask the user what to tweet.
2. Resolve the connected X username. Ask the user if it is unknown.
3. Show the exact text, account, endpoint, and usage estimate.
4. Wait for explicit user approval.
5. After approval, use the `xquik` MCP tool to call `POST /api/v1/x/tweets` with body `{ "account": "<confirmed account>", "text": "<the tweet text>" }`.
6. Show the returned tweet ID and `https://x.com/i/status/{tweetId}`.

The API requires the `account` field on every post request.
