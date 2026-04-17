# Security Policy

## Reporting a vulnerability

If you discover a security vulnerability, please **do not** open a public issue.

Email `security@xquik.com` with:
- A description of the issue
- Steps to reproduce
- Impact assessment

We'll respond within 72 hours.

## Credential handling

This skill uses an API key for authentication. Key guidelines:

- Never commit API keys to the repo or share them publicly
- Store keys in environment variables (`XQUIK_API_KEY`) or your agent's secret store
- Rotate keys immediately if you suspect compromise
- Use per-agent / per-environment keys to limit blast radius

## Scope

In scope:
- The skill files (`skills/`, `commands/`, `.claude-plugin/`)
- The MCP server configuration (`server.json`, `.mcp.json`, `smithery.yaml`)
- The npm package (`x-developer`)

Out of scope:
- The upstream Xquik API (report at `security@xquik.com`)
- Third-party registries that list this skill
