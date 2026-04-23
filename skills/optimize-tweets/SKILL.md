---
name: optimize-tweets
description: "Use when the user wants to optimize a tweet for the X (Twitter) algorithm before posting. Scores drafts against engagement predictors, suggests rewrites, and compares variants. Text scoring only - no posting."
license: MIT
metadata:
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
| POST /compose (step=optimize) | Rewrite for higher predicted engagement | Compose tier |

Base URL: `https://xquik.com/api/v1`. Auth: `x-api-key: xq_...` header.

## Quick reference

```
POST /compose
{
  "step": "score",
  "text": "<draft>"
}
-> {
  score: 0-100,
  signals: { hook_quality, length_fit, format, media_bonus, reply_bait_risk, link_penalty },
  suggestions: string[]
}
```

```
POST /compose
{ "step": "optimize", "text": "<draft>", "target_score": 80 }
-> { variants: [{ text, score }] }
```

## Typical flow

1. Take the user's draft.
2. Call `step: "score"` first; show current score and signals.
3. If the user wants a rewrite, call `step: "optimize"`; show 2-3 variants with scores.
4. User picks the winning text; pass to `post-tweets` for actual publishing.

## Notes

- Scores are estimates, not promises. Engagement depends on timing, audience, and luck.
- `link_penalty` is real: tweets with external URLs typically underperform. Warn the user if they insist.

## Related

Drafting: `write-tweets`. Publishing: `post-tweets`. Full API: [x-twitter-scraper](../x-twitter-scraper/SKILL.md).
