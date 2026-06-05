---
name: tweet-ideas
description: "Use when the user wants tweet ideas or content prompts for X (Twitter). Generates a batch of post ideas based on the user's niche, recent trends, and their style profile. Ideation only - drafting and posting are separate skills."
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
    emoji: "💡"
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

# Tweet Ideas

Generate a batch of tweet topic ideas. Each idea is a short prompt - the user (or `write-tweets`) turns it into an actual draft.

## Endpoints

| Endpoint | Purpose | Cost |
|---|---|---|
| POST /compose (step=compose) | Get content rules and follow-up questions | Compose tier |
| GET /x/trends | Seed ideas from current X trends | Read tier |
| GET /radar | Seed ideas from current news and developer trends | Free |

Base URL: `https://xquik.com/api/v1`. Auth: `x-api-key: xq_...` header.

## Quick reference

```
POST /compose
{
  "step": "compose",
  "topic": "indie saas",
  "goal": "engagement"
}
-> { contentRules, followUpQuestions, scorerWeights, topPenalties }
```

## Typical flow

1. Ask the user for their niche.
2. Optionally fetch `GET /x/trends` or `GET /radar` for timely context.
3. Call `POST /compose` with `step: "compose"` for content rules.
4. Generate 10 short idea prompts in chat using only the user goal plus fetched trend data.
5. Pass the chosen prompt to `write-tweets` to draft.

## Related

Drafting: `write-tweets`. Threads: `write-threads`. Posting: `post-tweets`. Full API: [x-twitter-scraper](../x-twitter-scraper/SKILL.md).
