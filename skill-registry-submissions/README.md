# Xquik Skill, MCP, and Plugin Submissions

Third-party listings for the Xquik X/Twitter skill, remote MCP server, and Langflow extension.

Xquik is an independent third-party service. It is not affiliated with X Corp.

Install the agent skill:

```bash
npx skills@1.5.3 add Xquik-dev/x-twitter-scraper
```

Connect remote MCP at `https://xquik.com/mcp`.

## Pull request account

Open every third-party pull request from [kriptoburak](https://github.com/kriptoburak). Do not open those pull requests from Xquik-dev.

This Cloud Agent keeps the default `cursor` login for `Xquik-dev/x-twitter-scraper`. Third-party forks and PRs use a separate GitHub CLI login as [kriptoburak](https://github.com/kriptoburak). Do not ping maintainers while a review is waiting. Rebase when a branch is behind, and reply only when there is new evidence.

## Already open as kriptoburak

Do not open a duplicate. kriptoburak currently has thousands of open GitHub PRs. These catalog targets already have an Xquik PR:

| Target | Status | Existing PR |
| --- | --- | --- |
| [docker/mcp-registry](https://github.com/docker/mcp-registry) | Open | https://github.com/docker/mcp-registry/pull/4371 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | Open | https://github.com/ComposioHQ/awesome-claude-skills/pull/1204 |
| [skillmatic-ai/awesome-agent-skills](https://github.com/skillmatic-ai/awesome-agent-skills) | Open | https://github.com/skillmatic-ai/awesome-agent-skills/pull/49 |
| [heilcheng/awesome-agent-skills](https://github.com/heilcheng/awesome-agent-skills) | Open | https://github.com/heilcheng/awesome-agent-skills/pull/290 |
| [karanb192/awesome-claude-skills](https://github.com/karanb192/awesome-claude-skills) | Open | https://github.com/karanb192/awesome-claude-skills/pull/27 |
| [langflow-ai/langflow](https://github.com/langflow-ai/langflow) | Open | https://github.com/langflow-ai/langflow/pull/13306 |
| [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) | Merged, plus open update | https://github.com/punkpeye/awesome-mcp-servers/pull/4464, https://github.com/punkpeye/awesome-mcp-servers/pull/5940 |

## Do not submit

| Target | Reason |
| --- | --- |
| travisvn/awesome-claude-skills | Forbids SaaS wrappers and AI-assisted PRs |
| hesreallyhim/awesome-claude-code | Human-only issue form; paid signup is a review blocker |
| punkpeye/awesome-mcp-servers | Already lists Xquik-dev/x-twitter-scraper |
| VoltAgent/awesome-agent-skills | Already lists Xquik-dev/x-twitter-scraper |
| VoltAgent/awesome-openclaw-skills | Already lists a kriptoburak Xquik skill |
| spencerpauly/awesome-cursor-skills | Cursor-native engineering list; a commercial API skill does not match |
| anthropics/skills, vercel-labs/agent-skills, google/skills | First-party collections |
| Single-skill repos | Adding Xquik would change an unrelated project |
| langflow-ai/langflow core | Use the pip extension; core bundle PRs need frontend icons, sidebar entries, and docs they did not ask for |

## Research catalog

`data/without-xquik.json` records 900 GitHub agent-skill repositories with 100 or more stars that do not mention Xquik. That file is discovery evidence. It is not a pull-request queue.

## Prepared packages

- Catalog skill: `packages/x-twitter-scraper/SKILL.md`
- Docker MCP files: `../docker-mcp-registry/xquik-remote/`
- Langflow extension: `langflow-extension/`
- Per-target PR text: `submissions/`
