# Security Policy

## Reporting A Vulnerability

If you discover a security vulnerability, please **do not** open a public issue.

Email [security@xquik.com](mailto:security@xquik.com) with:

- A description of the issue
- Steps to reproduce
- Impact assessment

We aim to acknowledge reports within 72 hours. We will coordinate a disclosure
timeline after confirming the issue.

## Credential handling

This skill uses an API key for authentication. Key guidelines:

- Never commit API keys to the repo or share them publicly
- Store keys in environment variables (`XQUIK_API_KEY`) or your agent's secret store
- Rotate keys immediately if you suspect compromise
- Use per-agent / per-environment keys to limit blast radius

## Scope

In scope:

- The skill and guide files (`skills/`, `task-guides/`, `commands/`)
- The plugin, MCP, and marketplace metadata (`.claude-plugin/`, `.codex-plugin/`, `openclaw.plugin.json`, `skills.sh.json`, `server.json`, `.mcp.json`, `docker-mcp-registry/`, `mcpize/`)
- The npm package (`x-developer`)

Out of scope:

- The upstream Xquik API (report at `security@xquik.com`)
- Third-party registries that list this skill
