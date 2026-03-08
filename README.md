# X API / Twitter Scraper Skill for AI Coding Agents

An [AI agent skill](https://skills.sh) that gives coding agents deep knowledge of the [Xquik](https://xquik.com) X (Twitter) real-time data platform. Search and extract tweets, download media, scrape follower/following lists, monitor accounts, and connect to the MCP server for AI-native workflows.

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

- **Tweet search & lookup**: Search tweets by keyword, hashtag, advanced operators (`from:`, `to:`, `"exact phrase"`, `OR`, `-exclude`). Get full engagement metrics (likes, retweets, replies, views, bookmarks) for any tweet
- **User profile lookup**: Fetch follower/following counts, bio, location, and profile data for any X account
- **Follower & following extraction**: Extract complete follower lists, verified followers, and following lists for any account
- **Reply, retweet & quote extraction**: Bulk extract all replies, retweets, and quote tweets for any tweet
- **Media download**: Download images, videos, and GIFs from any tweet with permanent hosted URLs
- **Thread & article extraction**: Extract full tweet threads and linked article content
- **Community & Space data**: Extract community members, moderators, posts, and Space participants
- **People & tweet search extraction**: Bulk search for users by keyword or extract tweets by hashtag (up to 1,000)
- **Mutual follow checker**: Check if two accounts follow each other
- **X account monitoring**: Track accounts for new tweets, replies, quotes, retweets, and follower changes in real time
- **Webhook delivery**: Receive HMAC-signed event notifications at your HTTPS endpoint
- **Trending topics**: Get trending hashtags and topics by region
- **Radar**: Trending news from 7 sources (Google Trends, Hacker News, Polymarket, TrustMRR, Wikipedia, GitHub, Reddit). Free
- **Giveaway draws**: Run transparent draws from tweet replies with configurable filters
- **Write actions**: Post tweets, like, retweet, follow/unfollow, send DMs, update profile, upload media, manage communities via connected X accounts
- **Telegram integrations**: Receive real-time monitor event notifications in Telegram
- **MCP server integration**: Connect AI agents to X data via MCP (v2: 2-tool sandbox covering 76 endpoints, v1 legacy: 18 discrete tools)

## Capabilities

| Area | Details |
|------|---------|
| **REST API** | 76 endpoints across 12 resource groups with retry logic and pagination |
| **Tweet Fetching** | Single tweet lookup with full metrics, keyword/hashtag search |
| **User Lookup** | Profile data, follower/following counts, verified status |
| **Follower Analysis** | Extract followers, following, verified followers for any account |
| **Data Extraction** | 20 bulk extraction tools (replies, retweets, quotes, threads, articles, communities, lists, Spaces, people search, tweet search, mentions, posts) |
| **Giveaway Draws** | Random winner selection from tweet replies with 11 filter options |
| **Write Actions** | Post/delete tweets, like/unlike, retweet, follow/unfollow, DM, profile update, media upload, community actions |
| **Telegram Integrations** | Real-time monitor event notifications via Telegram bot |
| **Account Monitoring** | Real-time tracking of tweets, replies, quotes, retweets, follower changes |
| **Webhooks** | HMAC-SHA256 signature verification in Node.js, Python, Go |
| **Media Download** | Download images, videos, GIFs with permanent hosted URLs (first download metered, cached free) |
| **MCP Server** | v2: 2-tool sandbox (76 endpoints), v1 legacy: 18 tools. StreamableHTTP, configs for 10 platforms |
| **Engagement Analytics** | Likes, retweets, replies, quotes, views, bookmarks per tweet |
| **Trending Topics** | Regional trends with search queries |
| **Tweet Composition** | Algorithm-optimized tweet composer with scoring checklist (free) |
| **TypeScript Types** | Complete type definitions for all API objects |

## Supported Agents

Claude Code, OpenAI Codex, Cursor, GitHub Copilot, Gemini CLI, Windsurf, VS Code Copilot, Cline, Roo Code, Goose, Amp, Augment, Continue, OpenHands, Trae, OpenCode, and any agent that supports the skills.sh protocol.

## API Coverage

| Resource | Endpoints |
|----------|-----------|
| X Lookups | Tweet by ID, search tweets, user profile, follow check, download media |
| Extractions | Create (20 types), estimate, list, get results, export |
| Monitors | Create, list, get, update, delete |
| Events | List (filtered, paginated), get single |
| Webhooks | Create, list, update, delete, test, deliveries |
| Trends | Regional trending topics |
| Radar | Trending topics & news from 7 sources (free) |
| Draws | Create with filters, list, get with winners, export |
| Styles | Analyze, save, list, get, delete, compare, performance |
| Compose | Tweet composition (compose, refine, score) |
| Drafts | Create, list, get, delete |
| Account | Get account, update locale, set X identity, subscribe |
| API Keys | Create, list, revoke |
| X Accounts | Connect, list, get, disconnect, re-authenticate |
| X Write | Tweet, delete, like, unlike, retweet, follow, unfollow, DM, profile, avatar, banner, media upload, communities |
| Integrations | Create (Telegram), list, get, update, delete, test, deliveries |

## Skill Structure

```
x-twitter-scraper/
├── skills/
│   └── x-twitter-scraper/
│       ├── SKILL.md                      # Main skill (auth, endpoints, patterns)
│       ├── metadata.json                 # Version and references
│       └── references/
│           ├── api-endpoints.md          # All REST API endpoints
│           ├── mcp-tools.md              # All 18 v1 legacy MCP tools with schemas
│           ├── mcp-setup.md              # MCP configs for 10 platforms (v2 + v1)
│           ├── webhooks.md               # Webhook setup & verification
│           ├── extractions.md            # 20 extraction tool types
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
