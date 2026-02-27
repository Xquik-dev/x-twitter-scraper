# Xquik Skill

A [Claude Code skill](https://docs.anthropic.com/en/docs/claude-code/skills) for building integrations with the [Xquik](https://xquik.com) X (Twitter) real-time data platform.

## What This Skill Does

When installed, this skill gives Claude deep knowledge of the Xquik platform, enabling it to:

- **Write API integrations** using the Xquik REST API (monitors, events, webhooks, draws, extractions, lookups, trends)
- **Set up webhook handlers** with proper HMAC-SHA256 signature verification
- **Configure MCP connections** for 8 IDEs and AI agent platforms
- **Choose the right endpoint** for any X data task (search vs. lookup vs. extraction)
- **Handle errors and pagination** following Xquik conventions
- **Use all 19 extraction tools** with correct parameters
- **Run giveaway draws** with configurable filters

## Installation

### Claude Code

Add to your project's `.claude/skills/` directory:

```bash
cd your-project
git clone https://github.com/Xquik-dev/x-twitter-scraper.git .claude/skills/x-twitter-scraper
```

Or add as a git submodule:

```bash
git submodule add https://github.com/Xquik-dev/x-twitter-scraper.git .claude/skills/x-twitter-scraper
```

### Global Installation

To make the skill available across all projects:

```bash
git clone https://github.com/Xquik-dev/x-twitter-scraper.git ~/.claude/skills/x-twitter-scraper
```

## Skill Structure

```
x-twitter-scraper/
├── SKILL.md                      # Main skill (auth, endpoints, patterns)
└── references/
    ├── api-endpoints.md          # All REST API endpoints
    ├── webhooks.md               # Webhook setup & verification
    ├── mcp-setup.md              # MCP configs for 8 platforms
    ├── extractions.md            # 19 extraction tool types
    └── types.md                  # TypeScript type definitions
```

## Coverage

| Area | Details |
|------|---------|
| REST API | All endpoints across 9 resource groups |
| Webhooks | HMAC verification in Node.js, Python, Go |
| MCP Server | Claude Desktop, Claude Code, ChatGPT, Codex CLI, Cursor, VS Code, Windsurf, OpenCode |
| Extractions | All 19 tool types with parameters |
| Draws | Full giveaway draw API with filters |
| Types | Complete TypeScript definitions |

## Links

- [Xquik Platform](https://xquik.com)
- [API Documentation](https://docs.xquik.com)
- [API Reference](https://docs.xquik.com/api-reference/overview)
- [MCP Server Guide](https://docs.xquik.com/mcp/overview)

## License

MIT
