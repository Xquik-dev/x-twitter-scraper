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

This environment currently authenticates to GitHub as the `cursor` integration on `Xquik-dev/x-twitter-scraper`. It cannot fork or open pull requests as kriptoburak until `KRIPTOBURAK_GITHUB_TOKEN` is available.

## What to submit

Maintainers reject SaaS dumps, AI-generated list spam, and skills that do not match the repo. Each target below is a fit, not a volume play.

| Target | Fit | Action | Why reviewers should accept it |
| --- | --- | --- | --- |
| [docker/mcp-registry](https://github.com/docker/mcp-registry) | Remote MCP catalog | Copy `docker-mcp-registry/xquik-remote/` | Official remote-server layout: `server.yaml`, empty `tools.json`, docs-only `readme.md`, OAuth |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | In-tree skill | Add `x-twitter-scraper/SKILL.md` plus README row | Their CONTRIBUTING asks for that folder layout; they already list Twitter skills |
| [skillmatic-ai/awesome-agent-skills](https://github.com/skillmatic-ai/awesome-agent-skills) | Skill index | One README link | General Agent Skills list; MIT skill with SKILL.md |
| [heilcheng/awesome-agent-skills](https://github.com/heilcheng/awesome-agent-skills) | Skill index | One README metadata row | Index of SKILL.md packages |
| [karanb192/awesome-claude-skills](https://github.com/karanb192/awesome-claude-skills) | Skill index | Structured README block | Required Source / Description / Use Case / Stars fields |
| Langflow | Framework plugin | Ship `langflow-extension/` as `lfx-xquik` | Langflow wants pip extensions, not a vendor dump into core |

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
