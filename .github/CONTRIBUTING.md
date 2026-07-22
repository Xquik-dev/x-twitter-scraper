# Contributing

Thanks for your interest in improving `x-twitter-scraper`.

## Scope

This repo packages Xquik as an X Twitter Scraper API skill, MCP listing, SDK handoff, and public integration guide for developers and agents. Changes should focus on:

- Skill instruction clarity (`skills/`, `commands/`, `task-guides/`)
- MCP and marketplace metadata (`server.json`, `.mcp.json`, `docker-mcp-registry/`, `mcpize/`)
- Cross-agent compatibility (SKILL.md spec adherence)
- Documentation and package metadata (`README.md`, `package.json`, plugin manifests)

Changes to the upstream Xquik API itself belong in the main Xquik repo.

## Getting started

1. Fork and clone
2. Create a branch for your change
3. Make the edit
4. Open a PR using the template

## Guidelines

- Keep skill instructions short and agent-friendly
- Update `SKILL.md` if user-facing behavior changes
- Update `README.md` if the API surface changes
- Bump the version in `package.json` if you republish to npm

## Test Policy

Run these checks before opening a pull request:

```sh
npm ci --ignore-scripts
npm test
npm run check-versions
npm pack --dry-run --json
```

CI runs the same tests on every pull request and every push to `master`. Bug
fixes must include a regression test. New behavior must include tests for
expected and invalid inputs.

## Questions

Open an issue with the "question" label or email `support@xquik.com`.
