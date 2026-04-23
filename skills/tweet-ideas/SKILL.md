---
name: tweet-ideas
description: "Use when the user wants tweet ideas or content prompts for X (Twitter). Generates a batch of post ideas based on the user's niche, recent trends, and their style profile. Ideation only - drafting and posting are separate skills."
license: MIT
metadata:
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
    executionModel: api-only
    codeExecution: none
    credentialProxy: false
---

# Tweet Ideas

Generate a batch of tweet topic ideas. Each idea is a short prompt - the user (or `write-tweets`) turns it into an actual draft.

## Endpoints

| Endpoint | Purpose | Cost |
|---|---|---|
| POST /compose (step=ideas) | Generate topic ideas | Compose tier |
| GET /trends | Seed ideas from current trends | Read tier |

Base URL: `https://xquik.com/api/v1`. Auth: `x-api-key: xq_...` header.

## Quick reference

```
POST /compose
{
  "step": "ideas",
  "niche": "indie saas",
  "count": 10,
  "seed_from_trends": true
}
-> { ideas: [{ prompt, rationale, format: "thread"|"single"|"poll" }] }
```

## Typical flow

1. Ask the user for their niche.
2. Generate 10 ideas.
3. Show as a numbered list; user picks one.
4. Pass the chosen idea's `prompt` to `write-tweets` to draft.

## Related

Drafting: `write-tweets`. Threads: `write-threads`. Posting: `post-tweets`. Full API: [x-twitter-scraper](../x-twitter-scraper/SKILL.md).
