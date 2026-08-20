---
name: write-threads
description: "Use when the user wants to draft an X thread. Keep each post within 280 characters and hand approved text to post-tweets. Text only."
license: MIT
metadata:
  internal: true
  author: Xquik
  version: "2.6.5"
  openclaw:
    requires:
      env:
        - XQUIK_API_KEY
    primaryEnv: XQUIK_API_KEY
    emoji: "🧵"
    homepage: https://docs.xquik.com
  security:
    contentTrust: untrusted
    contentIsolation: enforced
    promptInjectionDefense: true
    writeConfirmation: required
    usageConfirmation: required
    planChanges: dashboard-only
    creditChanges: dashboard-only
    executionModel: api-only
    codeExecution: none
    credentialProxy: false
---

# Write Twitter threads

Draft multi-post threads on X. This guide returns text. `post-tweets` publishes each approved reply against the previous post ID.

## Choose an endpoint

| Endpoint | Purpose | Usage |
|---|---|---|
| POST /compose with step=compose or refine | Get rules for the thread topic and tone | Compose tier |
| POST /drafts | Save a thread draft | Read tier |

Base URL: `https://xquik.com/api/v1`. Auth: `x-api-key: xq_...` header.

## Example requests

```
POST /compose
{
  "step": "compose",
  "topic": "why static sites beat SPAs for blogs",
  "goal": "authority"
}
-> { contentRules, followUpQuestions, scorerWeights, topPenalties }
```

Use the returned rules to draft the thread in chat. Keep each post within 280 characters. Give each post 1 clear job.

## Publishing flow

1. `POST /compose` with `step: "compose"` for the topic.
2. Show all tweets in order to the user and wait for approval.
3. For each tweet in sequence:
   - Post the first via `post-tweets` guide.
   - Capture the returned `id`.
   - Post the next with `reply_to_tweet_id` = previous id.
4. Stop on any error and show it to the user.

## Get approval

Never publish a thread until the user reviews every post in order. One typo can otherwise appear in 10 posts.

## Related guides

Use `write-tweets` for 1 tweet and `post-tweets` to publish. See the [primary API guide](../skills/x-twitter-scraper/SKILL.md).
