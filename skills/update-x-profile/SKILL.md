---
name: update-x-profile
description: "Use when the user wants to update their X (Twitter) profile: bio, display name, location, website URL, avatar, or banner image. Each field update requires explicit user approval."
license: MIT
metadata:
  author: Xquik
  version: "1.0.0"
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
    paymentConfirmation: required
    writeConfirmation: required
    executionModel: api-only
    codeExecution: none
    credentialProxy: false
---

# Update X Profile

Change bio, display name, location, website, avatar, or banner on a connected X account.

## Endpoints

| Endpoint | Purpose | Cost |
|---|---|---|
| PATCH /x/profile | Update bio, name, location, website | Write tier |
| PUT /x/profile/avatar | Upload a new avatar | Write tier |
| PUT /x/profile/banner | Upload a new banner | Write tier |

Base URL: `https://xquik.com/api/v1`. Auth: `x-api-key: xq_...` header.

## Quick reference

```
PATCH /x/profile
{
  "account": "<connected_username>",
  "bio": "building stuff",
  "name": "Jane Doe",
  "location": "SF",
  "website": "https://janedoe.com"
}
```

All fields optional. Send only what should change.

## Typical flow

1. `GET /x/accounts` to pick the acting account.
2. Show the user the **before/after diff** for each field they want to change.
3. Wait for explicit approval per field (or batch approval of the full diff).
4. `PATCH /x/profile` for text fields, `PUT` for images.

## Confirmation

Profile changes are immediately visible to the user's audience. Show the exact new values before any call. Do not alter more fields than the user asked.

## Security

Image URLs for avatar/banner must be HTTPS. Validate format (JPG/PNG) and reasonable size before upload.

## Related

Full API surface: [x-twitter-scraper](../x-twitter-scraper/SKILL.md).
