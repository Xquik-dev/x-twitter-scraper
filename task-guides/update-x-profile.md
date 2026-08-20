---
name: update-x-profile
description: "Use when the user wants to change an X profile field or image. Show the exact diff and require approval for every field."
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

# Update X profile

Change bio, display name, location, website, avatar, or banner on a connected X account.

## Choose an endpoint

| Endpoint | Purpose | Usage |
|---|---|---|
| PATCH /x/profile | Update bio, name, location, website | Write tier |
| PATCH /x/profile/avatar | Upload a new avatar | Write tier |
| PATCH /x/profile/banner | Upload a new banner | Write tier |

Base URL: `https://xquik.com/api/v1`. Auth: `x-api-key: xq_...` header.
Every profile write requires a unique `Idempotency-Key` header.
Direct REST callers supply it. Hosted MCP injects it automatically.

## Example requests

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

Every request needs `account`. Send only the fields the user wants to change.

## Update the profile

1. `GET /x/accounts` to pick the acting account.
2. Show the before and after value for every requested field.
3. Wait for approval of each field or the complete diff.
4. Send the selected write. Direct REST supplies the key. Hosted MCP injects it.
5. Poll `statusUrl` after a `202` response until `terminal` is true.

## Get approval

The audience sees profile changes immediately. Show exact new values before the call. Change only requested fields.

## Protect the account

Avatar and banner URLs must use HTTPS. Accept JPG or PNG files within the documented size limit.

## Related guides

See the [primary API guide](../skills/x-twitter-scraper/SKILL.md).
