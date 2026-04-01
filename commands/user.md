---
description: Look up an X/Twitter user profile by username
---

Look up the X/Twitter user profile for "$ARGUMENTS".

Use the `xquik` MCP tool to call `GET /api/v1/x/users/$ARGUMENTS`.

Display the profile:
- **Name** (@username)
- Bio
- Followers / Following / Tweets
- Verified status
- Account created date
- Profile picture URL

If the username is empty, ask the user which account to look up.
