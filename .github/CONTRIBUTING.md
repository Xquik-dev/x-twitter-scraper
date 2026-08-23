# Contributing

Use this guide to improve `x-twitter-scraper`.

## Scope

This repo packages Xquik's Twitter scraper API Skill, MCP listings, SDK setup,
and external integration guides for developers and agents. Changes should focus on:

- Clarify Skill instructions in `skills/`, `commands/`, and `task-guides/`.
- Update MCP and marketplace metadata in `server.json`, `.mcp.json`, `docker-mcp-registry/`, and `mcpize/`.
- Preserve cross-agent compatibility with the SKILL.md specification.
- Update `README.md`, `package.json`, and plugin manifests together when needed.

Changes to the upstream Xquik API itself belong in the main Xquik repo.

## Getting started

1. Fork and clone the repository.
2. Create a branch for the change.
3. Make and test the edit.
4. Open a pull request with the template.

## Guidelines

- Keep Skill instructions short and direct.
- Update `SKILL.md` when user-facing behavior changes.
- Update `README.md` when the documented API changes.
- Bump the `package.json` version before republishing to npm.

## Release process

Package releases use the version in `package.json`. Hosted MCP releases use
the independent version in `server.json`. Keep the hosted version unchanged
when only the package changes.

1. Merge the release commit into the default branch.
2. Create and push the matching `vMAJOR.MINOR.PATCH` tag.
3. Wait for the npm and GitHub release workflow to finish.
4. Verify the published npm version and package contents.

The MCP Registry workflow reads `server.json`. It skips versions that already
exist. It publishes only when the hosted MCP version changes.

## Test policy

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

Open an issue with the `question` label or email `support@xquik.com`.
