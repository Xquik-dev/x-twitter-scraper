# Cyrus Skills Marketplace (atcyrus.com/skills) Submission Steps

The Cyrus Skills Marketplace is a curated directory of agent skills. Skills are
indexed from GitHub repos that follow the skills.sh standard (SKILL.md format).

## Current Status

- x-twitter-scraper already has a SKILL.md at `skills/x-twitter-scraper/SKILL.md`
- Already listed on skills.sh at https://skills.sh/Xquik-dev/x-twitter-scraper (393 installs)
- NOT yet listed on Cyrus at https://www.atcyrus.com/skills/x-twitter-scraper (returns "Skill not found")

## Submission Process

The Cyrus marketplace does not have a public self-service submission form.
Skills appear to be indexed from GitHub repos via a curation process. Options:

### Option A: Request Listing via Discord

1. Join the Cyrus Discord: https://discord.gg/cyrus (linked from atcyrus.com)
2. Post in their skills/marketplace channel requesting listing for:
   - **Repo**: https://github.com/Xquik-dev/x-twitter-scraper
   - **Skill path**: skills/x-twitter-scraper/SKILL.md
   - **Install command**: `npx skills add Xquik-dev/x-twitter-scraper`
   - **Category**: Development (or Data & APIs)
   - **Description**: X (Twitter) data platform skill for AI coding agents. 100+ REST API endpoints, 2 MCP tools, HMAC webhooks. Reads from $0.00015/call.

### Option B: Open GitHub Issue

1. Open an issue at https://github.com/ceedaragents/cyrus
2. Request skill listing with the details from Option A

## SKILL.md Already Prepared

The existing SKILL.md is fully compliant with the skills.sh standard:
- Has proper frontmatter (name, description, compatibility, license, metadata)
- Includes references directory with detailed endpoint docs
- Includes metadata.json with version info
- MIT licensed

No additional files are needed for Cyrus - the existing skill structure is ready.
