---
name: optimize-tweets
description: "Use when the user wants to score and revise a tweet before posting. Return text and scores only. Do not post."
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
    emoji: "🎯"
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

# Score and revise tweets

Score drafts against engagement predictors and get targeted rewrite suggestions. No posting.

## Choose an endpoint

| Endpoint | Purpose | Usage |
|---|---|---|
| POST /compose with step=score | Score a tweet draft | Compose tier |
| POST /compose with step=refine | Get rewrite rules for a topic, tone, and goal | Compose tier |

Base URL: `https://xquik.com/api/v1`. Auth: `x-api-key: xq_...` header.

## Example requests

```
POST /compose
{
  "step": "score",
  "draft": "<draft>"
}
-> { totalChecks, passedCount, topSuggestion, checklist }
```

```
POST /compose
{
  "step": "refine",
  "topic": "<topic>",
  "goal": "engagement",
  "tone": "casual",
  "additionalContext": "<draft>"
}
-> { compositionGuidance, examplePatterns }
```

## Score and revise the tweet

1. Take the user's draft.
2. Call `step: "score"` first; show current score and signals.
3. If the user wants a rewrite, call `step: "refine"` and draft 2-3 variants from the returned guidance.
4. Score the user's preferred variant with `step: "score"`.
5. The user selects the text. Pass it to `post-tweets` for publishing.

## Limits

- Scores are estimates, not promises. Engagement depends on timing, audience, and luck.
- `link_penalty` records how an external URL affects the score. Explain that
  signal without promising engagement.

## Related guides

Use `write-tweets` to draft and `post-tweets` to publish. See the [primary API guide](../skills/x-twitter-scraper/SKILL.md).
