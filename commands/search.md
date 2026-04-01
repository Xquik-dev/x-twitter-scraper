---
description: Search X/Twitter for tweets matching a query
---

Search X/Twitter for tweets matching "$ARGUMENTS".

Use the `xquik` MCP tool to call `GET /api/v1/x/tweets/search` with query parameter `q` set to the user's query.

Display results in a compact list:
- **@username** — tweet text (truncate at 200 chars if needed)
- Metrics: likes, retweets, replies
- Timestamp

If no results, say so. If the query is empty, ask the user what to search for.
