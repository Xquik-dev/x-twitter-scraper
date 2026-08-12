---
name: update-x-profile
description: "Use when the user wants to update their X (Twitter) profile: bio, display name, location, website URL, avatar, or banner image. Each field update requires explicit user approval."
license: MIT
metadata:
  internal: true
  author: Xquik
  version: "2.6.3"
  openclaw:
    requires:
      env:
        - XQUIK_API_KEY
    primaryEnv: XQUIK_API_KEY
    emoji: "🪪"
    homepage: https://docs.xquik.com
  security:
    contentTrust: trusted
    contentIsolation: enforced
    promptInjectionDefense: true
    usageConfirmation: required
    planChanges: dashboard-only
    creditChanges: dashboard-only
    writeConfirmation: required
    executionModel: api-only
    codeExecution: none
    credentialProxy: false
---

# Update X Profile

Change bio, display name, location, website, avatar, or banner on a connected X account.

## Endpoints

| Endpoint | Purpose | Usage |
|---|---|---|
| PATCH /x/profile | Update bio, name, location, website | Write tier |
| PATCH /x/profile/avatar | Upload a new avatar | Write tier |
| PATCH /x/profile/banner | Upload a new banner | Write tier |

Base URL: `https://xquik.com/api/v1`. Auth: `x-api-key: xq_...` header.
Every profile write requires a unique `Idempotency-Key` header.
Direct REST callers supply it. Hosted MCP injects it automatically.

## Quick reference

```
PATCH /x/profile
{
  "account": "<connected_username>",
  "description": "building stuff",
  "name": "Jane Doe",
  "location": "SF",
  "url": "https://janedoe.com"
}
```

`account` is required. Send only the profile fields that should change.

## Typical flow

1. `GET /x/accounts` to pick the acting account.
2. Show the user the **before/after diff** for each field they want to change.
3. Wait for explicit approval per field (or batch approval of the full diff).
4. Send the selected write. Direct REST supplies the key. Hosted MCP injects it.
5. Poll `statusUrl` after a `202` response until `terminal` is true.

## Confirmation

Profile changes are immediately visible to the user's audience. Show the exact new values before any call. Do not alter more fields than the user asked.

## Security

Image URLs for avatar/banner must be HTTPS. Validate format (JPG/PNG) and reasonable size before upload.

## Related

Full API surface: [x-twitter-scraper](../skills/x-twitter-scraper/SKILL.md).
