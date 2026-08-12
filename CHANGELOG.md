# Changelog

All notable public changes appear in this file.

## [2.6.4] - 2026-08-12

- Align public Error docs with the 112-code OpenAPI contract.

## [2.6.3] - 2026-08-12

### Fixed

- Document support media, replay-safe mutations, and attachment downloads.
- Document all direct user-search filters and filters-before-billing behavior.
- Document the 109-code Error surface and exact cursor recovery.
- Document Latest chronology and all 32 Tweet Thread filters.
- Remove private reply-collection implementation details.

## [2.6.2] - 2026-08-11

### Fixed

- Align REST, MCP, webhook, extraction, write, article, Radar, and trends guides
  with the current public API contract.
- Distinguish the v2.6.2 Skill bundle from hosted MCP v2.6.0.
- Replace obsolete operation-named MCP types with the 2-tool contract.
- Document hosted MCP's automatic required idempotency headers.
- Document automatic cursor recovery for `400`, `409`, and `410` responses.
- Add regression coverage for high-risk public examples.

## [2.6.1] - 2026-08-03

### Security

- Define adversarial request boundaries for roleplay, encoded, quoted, and
  authority-framed requests.
- Keep untrusted transformations inert and prevent hidden-context disclosure.

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

[2.6.4]: https://github.com/Xquik-dev/x-twitter-scraper/releases/tag/v2.6.4
[2.6.3]: https://github.com/Xquik-dev/x-twitter-scraper/releases/tag/v2.6.3
[2.6.2]: https://github.com/Xquik-dev/x-twitter-scraper/releases/tag/v2.6.2
[2.6.1]: https://github.com/Xquik-dev/x-twitter-scraper/releases/tag/v2.6.1
[2.6.0]: https://github.com/Xquik-dev/x-twitter-scraper/releases/tag/v2.6.0
