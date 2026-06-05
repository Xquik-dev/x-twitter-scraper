---
name: write-threads
description: "Use when the user wants to write a Twitter thread on X. Drafts a multi-tweet thread with coherent narrative, splits long content into 280-char segments, and hands off to post-tweets for publishing. Text generation only."
license: MIT
metadata:
  internal: true
  author: Xquik
  version: "1.0.0"
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
    costConfirmation: required
    executionModel: api-only
    codeExecution: none
    credentialProxy: false
---

# Write Twitter Threads

Draft multi-tweet threads on X. This skill produces the thread text; publishing is done through `post-tweets` chaining replies to the previous tweet ID.

## Endpoints

| Endpoint | Purpose | Cost |
|---|---|---|
| POST /compose (step=compose/refine) | Get guidance for the thread topic and tone | Compose tier |
| POST /drafts | Save a thread draft | Read tier |

Base URL: `https://xquik.com/api/v1`. Auth: `x-api-key: xq_...` header.

## Quick reference

```
POST /compose
{
  "step": "compose",
  "topic": "why static sites beat SPAs for blogs",
  "goal": "authority"
}
-> { contentRules, followUpQuestions, scorerWeights, topPenalties }
```

Use the returned guidance to draft the thread in chat. Keep each tweet within the 280-char limit and preserve a natural narrative flow (hook, arguments, conclusion).

## Publishing flow

1. `POST /compose` with `step: "compose"` for the topic.
2. Show all tweets in order to the user and wait for approval.
3. For each tweet in sequence:
   - Post the first via `post-tweets` skill.
   - Capture the returned `id`.
   - Post the next with `reply_to_tweet_id` = previous id.
4. Stop and surface any error instead of continuing silently.

## Confirmation

Never publish a thread without user review of every tweet in order. Threads amplify mistakes - one typo becomes 10 tweets.

## Related

Single tweets: `write-tweets`. Publishing: `post-tweets`. Full API: [x-twitter-scraper](../x-twitter-scraper/SKILL.md).
