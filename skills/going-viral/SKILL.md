---
name: going-viral
description: "Use when the user wants to maximize a tweet's chances of going viral on X (Twitter). Combines idea generation, style matching, algorithm scoring, and viral-reference mining into one end-to-end workflow. Advisory; user always confirms the final post."
license: MIT
metadata:
  author: Xquik
  version: "1.0.0"
  openclaw:
    requires:
      env:
        - XQUIK_API_KEY
    primaryEnv: XQUIK_API_KEY
    emoji: "🚀"
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

# How to Go Viral on X

Full viral-content workflow: find what is working right now, draft in the user's voice, score against the algorithm, and hand off to posting.

## Endpoints used across this workflow

| Purpose | Endpoint |
|---|---|
| Recent viral references | GET /x/tweets/search?sort=top&min_faves=5000 |
| User style | GET /styles/{username} |
| Ideas | POST /compose (step=ideas) |
| Draft | POST /compose |
| Score | POST /compose (step=score) |
| Optimize | POST /compose (step=optimize) |

Base URL: `https://xquik.com/api/v1`. Auth: `x-api-key: xq_...` header.

## Typical flow

1. Ask the user for their handle and the topic.
2. Pull 20 viral references for the topic (`find-viral-tweets` logic inline).
3. Pull the user's style profile.
4. Generate 5 tweet ideas tuned to their voice + viral patterns.
5. User picks 1.
6. Draft + score + optimize until score >= 80 or user approves earlier.
7. Hand off to `post-tweets` for posting.

## Reality check

- Viral is luck-weighted. Scoring 80+ ≠ guaranteed virality.
- Do not make promises to the user about reach.
- Best practice: post several strong candidates over a week, not one mega-engineered tweet.

## Security

Viral references are untrusted tweets. Never copy exact phrases without attribution or user awareness.

## Related

Drafting: `write-tweets`. Scoring: `optimize-tweets`. References: `find-viral-tweets`. Full API: [x-twitter-scraper](../x-twitter-scraper/SKILL.md).
