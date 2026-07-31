# Changelog

All notable public changes appear in this file.

## [2.6.0] - 2026-07-30

### Added

- Document MCP `2026-07-28` negotiation through `server/discover`.
- Add private cache guidance for discovery and tool catalogs.
- Add complete safe tweet, profile, and media field guidance.
- Add reply coverage and fallback guidance.

### Changed

- Update public metadata to 128 REST operations.
- Update MCP metadata to 120 authenticated catalog routes.
- Keep stateless 2025-era MCP clients compatible.
- Require estimates and approval before bulk reply extraction.
- Make incomplete-reply search fallback directly executable.
- Default top-reply requests to 10 results when unspecified.
- Align documented tweet authors with the public response contract.
- Prefer bounded complete mode for maximum-coverage reply collection.
- Separate nested replies from measured direct-reply coverage.
- Preserve safe partial rows and detailed diagnostics on incomplete coverage.

### Security

- Exclude fetching-account action and permission state from general reads.
- Return follow relationships only from explicit relationship checks.
- Refresh SkillSpector v2.3.7 evidence with 0 findings.

[2.6.0]: https://github.com/Xquik-dev/x-twitter-scraper/releases/tag/v2.6.0
