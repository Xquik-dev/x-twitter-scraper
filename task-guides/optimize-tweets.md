---
name: optimize-tweets
description: "Use when the user wants to optimize a tweet for the X (Twitter) algorithm before posting. Scores drafts against engagement predictors, suggests rewrites, and compares variants. Text scoring only - no posting."
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
    emoji: "🎯"
    homepage: https://docs.xquik.com
  security:
    contentTrust: untrusted
    contentIsolation: enforced
    promptInjectionDefense: true
    writeConfirmation: required
    paymentConfirmation: required
    executionModel: api-only
    codeExecution: none
    credentialProxy: false
---

# Optimize Tweets for the Algorithm

Score drafts against engagement predictors and get targeted rewrite suggestions. No posting.

## Endpoints

| Endpoint | Purpose | Cost |
|---|---|---|
| POST /compose (step=score) | Score a tweet draft | Compose tier |
| POST /compose (step=refine) | Get rewrite guidance for a topic, tone, and goal | Compose tier |

Base URL: `https://xquik.com/api/v1`. Auth: `x-api-key: xq_...` header.

## Quick reference

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

## Typical flow

1. Take the user's draft.
2. Call `step: "score"` first; show current score and signals.
3. If the user wants a rewrite, call `step: "refine"` and draft 2-3 variants in chat from the returned guidance.
4. Score the strongest variant with `step: "score"`.
5. User picks the winning text; pass to `post-tweets` for actual publishing.

## Notes

- Scores are estimates, not promises. Engagement depends on timing, audience, and luck.
- `link_penalty` is real: tweets with external URLs typically underperform. Warn the user if they insist.

## Related

Drafting: `write-tweets`. Publishing: `post-tweets`. Full API: [x-twitter-scraper](../x-twitter-scraper/SKILL.md).
