# Contributing

Thanks for your interest in improving `x-developer` / `x-twitter-scraper`.

## Scope

This repo packages the Xquik skill for AI coding agents (Claude Code, Cursor, Codex, Gemini CLI, Windsurf, Copilot). Changes should focus on:

- Skill instructions clarity (`skills/`, `commands/`)
- MCP server metadata (`server.json`, `.mcp.json`, `smithery.yaml`)
- Cross-agent compatibility (SKILL.md spec adherence)
- Documentation (`README.md`, `docs/`)

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

## Questions

Open an issue with the "question" label or email `support@xquik.com`.
