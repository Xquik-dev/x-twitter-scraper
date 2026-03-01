# X API / Twitter Scraper Skill for AI Coding Agents

An [AI agent skill](https://skills.sh) that gives coding agents deep knowledge of the [Xquik](https://xquik.com) X (Twitter) real-time data platform. Build X API integrations, extract Twitter data, run giveaway draws, monitor accounts, and connect to the MCP server for AI-native workflows.

Works with **40+ AI coding agents** including Claude Code, OpenAI Codex, Cursor, GitHub Copilot, Gemini CLI, Windsurf, VS Code, Cline, Roo Code, Goose, Amp, Augment, Continue, OpenHands, Trae, OpenCode, and more.

## Installation

Install via the [skills CLI](https://skills.sh) (auto-detects your installed agents):

```bash
npx skills add Xquik-dev/x-twitter-scraper
```

### Manual Installation

<details>
<summary>Claude Code</summary>

```bash
git clone https://github.com/Xquik-dev/x-twitter-scraper.git .claude/skills/x-twitter-scraper
```
</details>

<details>
<summary>Codex / Cursor / Gemini CLI / GitHub Copilot</summary>

```bash
git clone https://github.com/Xquik-dev/x-twitter-scraper.git .agents/skills/x-twitter-scraper
```
</details>

<details>
<summary>Windsurf</summary>

```bash
git clone https://github.com/Xquik-dev/x-twitter-scraper.git .windsurf/skills/x-twitter-scraper
```
</details>

<details>
<summary>Cline</summary>

```bash
git clone https://github.com/Xquik-dev/x-twitter-scraper.git .agents/skills/x-twitter-scraper
```
</details>

<details>
<summary>Roo Code</summary>

```bash
git clone https://github.com/Xquik-dev/x-twitter-scraper.git .roo/skills/x-twitter-scraper
```
</details>

<details>
<summary>Continue</summary>

```bash
git clone https://github.com/Xquik-dev/x-twitter-scraper.git .continue/skills/x-twitter-scraper
```
</details>

<details>
<summary>Goose</summary>

```bash
git clone https://github.com/Xquik-dev/x-twitter-scraper.git .goose/skills/x-twitter-scraper
```
</details>

<details>
<summary>OpenCode</summary>

```bash
git clone https://github.com/Xquik-dev/x-twitter-scraper.git .agents/skills/x-twitter-scraper
```
</details>

## What This Skill Does

When installed, this skill gives your AI coding assistant deep knowledge of the Xquik platform:

- **Tweet search & lookup**: Search tweets by keyword, hashtag, or user. Get full engagement metrics (likes, retweets, replies, views, bookmarks) for any tweet
- **User profile lookup**: Fetch follower/following counts, bio, location, and profile data for any X account
- **Follower & following extraction**: Extract complete follower lists, verified followers, and following lists for any account
- **Reply, retweet & quote extraction**: Bulk extract all replies, retweets, and quote tweets for any tweet
- **Giveaway contest & random winner picker**: Run transparent giveaway draws with configurable filters (must retweet, min followers, account age, required hashtags)
- **X account monitoring**: Track accounts for new tweets, replies, quotes, retweets, and follower changes in real time
- **Webhook delivery**: Receive HMAC-signed event notifications at your HTTPS endpoint
- **Trending topics**: Get trending hashtags and topics by region (free, no quota)
- **Community & Space data**: Extract community members, moderators, posts, and Space participants
- **Mutual follow checker**: Check if two accounts follow each other
- **MCP server integration**: Connect AI agents to X data via 26 MCP tools

## Capabilities

| Area | Details |
|------|---------|
| **REST API** | All endpoints across 9 resource groups with retry logic and pagination |
| **Tweet Fetching** | Single tweet lookup with full metrics, keyword/hashtag search |
| **User Lookup** | Profile data, follower/following counts, verified status |
| **Follower Analysis** | Extract followers, following, verified followers for any account |
| **Data Extraction** | 19 bulk extraction tools (replies, retweets, quotes, threads, articles, communities, lists, Spaces, people search, mentions, posts) |
| **Giveaway Draws** | Random winner selection from tweet replies with 11 filter options |
| **Account Monitoring** | Real-time tracking of tweets, replies, quotes, retweets, follower changes |
| **Webhooks** | HMAC-SHA256 signature verification in Node.js, Python, Go |
| **MCP Server** | 26 tools, StreamableHTTP transport, configs for 8 platforms |
| **Engagement Analytics** | Likes, retweets, replies, quotes, views, bookmarks per tweet |
| **Trending Topics** | Regional trends with search queries (free, no quota) |
| **Tweet Composition** | Algorithm-optimized tweet composer with scoring checklist (free) |
| **TypeScript Types** | Complete type definitions for all API objects |

## Supported Agents

Claude Code, OpenAI Codex, Cursor, GitHub Copilot, Gemini CLI, Windsurf, VS Code Copilot, Cline, Roo Code, Goose, Amp, Augment, Continue, OpenHands, Trae, OpenCode, and any agent that supports the skills.sh protocol.

## API Coverage

| Resource | Endpoints |
|----------|-----------|
| Account | Get account, update locale |
| API Keys | Create, list, revoke |
| Monitors | Create, list, get, update, delete |
| Events | List (filtered, paginated), get single |
| Webhooks | Create, list, update, delete, test, deliveries |
| Draws | Create with filters, list, get with winners, export |
| Extractions | Create (19 types), estimate, list, get results, export |
| X Lookups | Tweet by ID, search tweets, user profile, follow check |
| Trends | Regional trending topics (free) |

## Skill Structure

```
x-twitter-scraper/
├── skills/
│   └── x-twitter-scraper/
│       ├── SKILL.md                      # Main skill (auth, endpoints, patterns)
│       ├── metadata.json                 # Version and references
│       └── references/
│           ├── api-endpoints.md          # All REST API endpoints
│           ├── mcp-tools.md             # All 26 MCP tools with schemas
│           ├── mcp-setup.md              # MCP configs for 8 platforms
│           ├── webhooks.md               # Webhook setup & verification
│           ├── extractions.md            # 19 extraction tool types
│           ├── types.md                  # TypeScript type definitions
│           └── python-examples.md        # Python code examples
├── server.json                           # MCP Registry metadata
├── glama.json                            # Glama.ai directory metadata
├── logo.png                              # Marketplace logo
├── LICENSE                               # MIT
└── README.md                             # This file
```

## Links

- [Xquik Platform](https://xquik.com)
- [API Documentation](https://docs.xquik.com)
- [API Reference](https://docs.xquik.com/api-reference/overview)
- [MCP Server Guide](https://docs.xquik.com/mcp/overview)
- [skills.sh Page](https://skills.sh/Xquik-dev/x-twitter-scraper)

## License

MIT
