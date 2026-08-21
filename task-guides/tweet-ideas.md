---
name: tweet-ideas
description: "Use when the user wants X post ideas based on their niche, trends, or saved style. Return prompts only. Do not draft or post."
license: MIT
metadata:
  internal: true
  author: Xquik
  version: "2.6.7"
  openclaw:
    requires:
      env:
        - XQUIK_API_KEY
    primaryEnv: XQUIK_API_KEY
    emoji: "💡"
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

# Tweet ideas

Generate a batch of short topic prompts. The user or `write-tweets` turns each prompt into a draft.

## Choose an endpoint

| Endpoint | Purpose | Usage |
|---|---|---|
| POST /compose with step=compose | Get content rules and follow-up questions | Compose tier |
| GET /x/trends | Seed ideas from current X trends | Read tier |
| GET /radar | Seed ideas from current news and developer trends | Included |

Base URL: `https://xquik.com/api/v1`. Auth: `x-api-key: xq_...` header.

## Example requests

```
POST /compose
{
  "step": "compose",
  "topic": "indie saas",
  "goal": "engagement"
}
-> { contentRules, followUpQuestions, scorerWeights, topPenalties }
```

## Generate the ideas

1. Ask the user for their niche.
2. Optionally fetch `GET /x/trends` or `GET /radar` for timely context.
3. Call `POST /compose` with `step: "compose"` for content rules.
4. Generate 10 short idea prompts in chat using only the user goal plus fetched trend data.
5. Pass the chosen prompt to `write-tweets` to draft.

## Related guides

Use `write-tweets` for drafts, `write-threads` for threads, and `post-tweets` to publish. See the [primary API guide](../skills/x-twitter-scraper/SKILL.md).
