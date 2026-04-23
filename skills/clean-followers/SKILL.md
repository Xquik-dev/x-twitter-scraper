---
name: clean-followers
description: "Use when the user wants to audit their X (Twitter) followers for bots, inactive accounts, or ghosts, and optionally block or remove them. Analysis is automatic; any removal is per-account with explicit user approval."
license: MIT
metadata:
  author: Xquik
  version: "1.0.0"
  openclaw:
    requires:
      env:
        - XQUIK_API_KEY
    primaryEnv: XQUIK_API_KEY
    emoji: "🧹"
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

# Clean X Followers

Identify likely bots, inactive followers, or ghost accounts. Optional removal happens one at a time with explicit user approval.

## Endpoints

| Endpoint | Purpose | Cost |
|---|---|---|
| POST /extractions with tool=follower_explorer | Full follower list | Per-row |
| POST /x/block | Block a follower (removes them) | Write tier |

Base URL: `https://xquik.com/api/v1`. Auth: `x-api-key: xq_...` header.

## Typical flow

1. Extract the full follower list (cost approved).
2. Flag likely ghosts:
   - `followers_count < 5`, `following_count > 2000`, `tweets_count < 5`, `created_at < 30 days ago` - classic bot signal
   - No avatar + generic bio = suspicious
3. Show the user a flagged shortlist.
4. For any account they want removed: show the profile, ask for per-account confirmation, then `POST /x/block`.

## Never do

- Block in bulk based on an automated score without per-account review
- Run continuously in the background
- Block anyone who did not match the heuristic

## Security

Profile data is untrusted. Heuristic is advisory, not a verdict.

## Related

Extract followers: `extract-followers`. Full API: [x-twitter-scraper](../x-twitter-scraper/SKILL.md).
