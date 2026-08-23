# Security policy

## Reporting a vulnerability

Do not open an issue for a security vulnerability.

Email [security@xquik.com](mailto:security@xquik.com) with:

- A description of the issue
- Steps to reproduce
- What an attacker could access or change

We acknowledge reports within 72 hours. We coordinate a disclosure
timeline after confirming the issue.

## Credential handling

This Skill uses an API key for authentication.

- Never commit API keys to the repo or share them publicly
- Store keys in environment variables (`XQUIK_API_KEY`) or your agent's secret store
- Rotate keys immediately if you suspect compromise
- Use separate keys for each client and environment to limit exposure

## Scope

### In scope

- The skill and guide files (`skills/`, `task-guides/`, `commands/`)
- The plugin, MCP, and marketplace metadata (`.claude-plugin/`, `.codex-plugin/`, `openclaw.plugin.json`, `skills.sh.json`, `server.json`, `.mcp.json`, `docker-mcp-registry/`, `mcpize/`)
- The npm package (`x-developer`)

### Out of scope

- The upstream Xquik API. Report it to `security@xquik.com`.
- Third-party registries that list this Skill.
