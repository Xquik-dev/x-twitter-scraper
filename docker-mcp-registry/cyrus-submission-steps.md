# Cyrus skills marketplace (atcyrus.com/skills) submission steps

The Cyrus Skills Marketplace lists agent Skills from GitHub repositories that
use the skills.sh `SKILL.md` format.

## Check the listing

- Skill file: `skills/x-twitter-scraper/SKILL.md`
- skills.sh listing: https://skills.sh/Xquik-dev/x-twitter-scraper
- Cyrus listing: https://www.atcyrus.com/skills/x-twitter-scraper

If the Cyrus URL returns "Skill not found," request a listing below.

## Request a listing

### Ask in Discord

1. Join the Cyrus Discord: https://discord.gg/cyrus (linked from atcyrus.com)
2. Post in their skills/marketplace channel requesting listing for:
   - Repository: https://github.com/Xquik-dev/x-twitter-scraper
   - Skill path: `skills/x-twitter-scraper/SKILL.md`
   - Install command: `npx skills@1.5.3 add Xquik-dev/x-twitter-scraper`
   - Category: Development or Data & APIs
   - Description: Twitter scraper API Skill for search, exports, monitoring,
     HMAC webhooks, and approved X account actions. Includes 128 REST
     operations and 120 MCP catalog routes. Of these, 119 support JSON or text.

### Open a GitHub issue

1. Open an issue at https://github.com/ceedaragents/cyrus
2. Request a Skill listing with the details above.

## Files supplied by this repo

The existing Skill includes:

- Frontmatter with its name, description, compatibility, license, and metadata
- A `references/` directory with endpoint documentation
- `metadata.json` with version information
- An MIT license
