# X API / Twitter Scraper Skill for AI Coding Agents

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
![GitHub stars](https://img.shields.io/github/stars/Xquik-dev/x-twitter-scraper)
[![npm version](https://img.shields.io/npm/v/x-developer.svg)](https://www.npmjs.com/package/x-developer)
[![npm downloads](https://img.shields.io/npm/dm/x-developer.svg)](https://www.npmjs.com/package/x-developer)
[![X Tweet Scraper on Apify](https://apify.com/actor-badge?actor=xquik/x-tweet-scraper)](https://apify.com/xquik/x-tweet-scraper)
[![x-twitter-scraper MCP server](https://glama.ai/mcp/servers/Xquik-dev/x-twitter-scraper/badges/score.svg)](https://glama.ai/mcp/servers/Xquik-dev/x-twitter-scraper)
[![smithery badge](https://smithery.ai/badge/xquik/x-twitter-scraper)](https://smithery.ai/servers/xquik/x-twitter-scraper)

An [AI agent skill](https://skills.sh) that gives coding agents deep knowledge of the [Xquik](https://xquik.com) X (Twitter) real-time data platform. 111 REST API endpoints, 2 MCP tools, HMAC webhooks, 23 bulk extraction tools, and write actions.

**The cheapest X data API on the market** - reads from $0.00015/call (33x cheaper than the official X API).

Works with **40+ AI coding agents** including Claude Code, OpenAI Codex, Cursor, GitHub Copilot, Gemini CLI, Windsurf, VS Code, Cline, Roo Code, Goose, Amp, Augment, Continue, OpenHands, Trae, OpenCode, and more.

## Pricing

Xquik is dramatically cheaper than every alternative for X/Twitter data access.

### vs Official X API

| | Xquik | X API Basic | X API Pro |
|---|---|---|---|
| **Monthly cost** | **$20** | $100 | $5,000 |
| **Cost per tweet read** | **$0.00015** | ~$0.01 | ~$0.005 |
| **Cost per user lookup** | **$0.00015** | ~$0.01 | ~$0.005 |
| **Write actions** | **$0.0015** | Limited | Limited |
| **Bulk extraction** | **From $0.00015/result** | Not available | Not available |
| **Monitoring + webhooks** | **Free** | Not available | Not available |
| **Giveaway draws** | **$0.00015/entry** | Not available | Not available |
| **MCP server** | **Included** | Not available | Not available |

### Per-Operation Costs (1 credit = $0.00015)

| Operation | Credits | Cost |
|-----------|---------|------|
| Read (tweet, search, timeline, bookmarks, etc.) | 1 | $0.00015 |
| Read (user profile, verified followers, followers you know) | 1 | $0.00015 |
| Read (favoriters) | 1 | $0.00015 |
| Read (trends) | 3 | $0.00045 |
| Follow check, article | 7 | $0.00105 |
| Write (tweet, like, retweet, follow, DM, etc.) | 10 | $0.0015 |
| Extraction (tweets, replies, quotes, mentions, posts, likes, media, search, favoriters, retweeters, community members, people search, list members, list followers) | 1/result | $0.00015/result |
| Extraction (followers, following, verified followers) | 1/result | $0.00015/result |
| Extraction (articles) | 5/result | $0.00075/result |
| Draw | 1/entry | $0.00015/entry |
| Monitors, webhooks, radar, compose, drafts | 0 | **Free** |

### Pay-Per-Use (No Subscription)

Two options for pay-per-use without a monthly subscription:

- **Credits**: Top up credits via `POST /credits/topup` ($10 minimum). 1 credit = $0.00015. Works with all 111 endpoints.
- **MPP**: 32 X-API endpoints accept anonymous on-chain payments via Machine Payments Protocol. No account needed. SDK: `npm i mppx viem`.

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

- **Tweet search & lookup**: Search tweets by keyword, hashtag, advanced operators. Get full engagement metrics for any tweet
- **User profile lookup**: Fetch follower/following counts, bio, location, and profile data for any X account
- **User activity feeds**: Get user's recent tweets, liked tweets, and media tweets
- **Tweet engagement data**: Get who liked (favoriters) any tweet, mutual followers between accounts
- **Follower & following extraction**: Extract complete follower lists, verified followers, and following lists
- **Reply, retweet & quote extraction**: Bulk extract all replies, retweets, and quote tweets
- **Media download**: Download images, videos, and GIFs with permanent hosted URLs
- **Thread & article extraction**: Extract full tweet threads and linked article content
- **Community & Space data**: Extract community members, moderators, posts, and Space participants
- **Bookmarks & notifications**: Access bookmarks, bookmark folders, notifications, and home timeline
- **DM history**: Retrieve conversation history with any user
- **Mutual follow checker**: Check if two accounts follow each other
- **X account monitoring**: Track accounts for new tweets, replies, quotes, retweets
- **Webhook delivery**: Receive HMAC-signed event notifications at your HTTPS endpoint
- **Trending topics**: Get trending hashtags and topics by region
- **Radar**: Trending news from 7 sources (Google Trends, Hacker News, Polymarket, TrustMRR, Wikipedia, GitHub, Reddit). Free
- **Giveaway draws**: Run transparent draws from tweet replies with configurable filters
- **Write actions**: Post tweets, like, retweet, follow/unfollow, send DMs, update profile, upload media, manage communities
- **Tweet composition**: Algorithm-optimized tweet composer with scoring (free)
- **Credits & billing**: Check balance, top up credits, manage subscription
- **Support tickets**: Open and manage support tickets via API
- **MCP server**: 2 tools covering 111 endpoints for AI agent integration
- **Pay-per-use (MPP)**: Anonymous access to 32 endpoints via on-chain payments, no account needed

## Capabilities

| Area | Details |
|------|---------|
| **REST API** | 111 endpoints across 10 categories with retry logic and pagination |
| **MCP Server** | 2 tools (explore + xquik). StreamableHTTP, configs for 10 platforms |
| **Data Extraction** | 23 bulk extraction tools (replies, retweets, quotes, favoriters, threads, articles, user likes, user media, communities, lists, Spaces, people search, tweet search, mentions, posts) |
| **X Lookups** | Tweet, user, article, search, user tweets, user likes, user media, favoriters, mutual followers, bookmarks, notifications, timeline, DM history |
| **Write Actions** | Post/delete tweets, like/unlike, retweet, follow/unfollow, DM, profile update, avatar/banner, media upload, community actions |
| **Giveaway Draws** | Random winner selection from tweet replies with 11 filter options |
| **Account Monitoring** | Real-time tracking of tweets, replies, quotes, retweets |
| **Webhooks** | HMAC-SHA256 signature verification in Node.js, Python, Go |
| **Media Download** | Download images, videos, GIFs with permanent hosted URLs |
| **Engagement Analytics** | Likes, retweets, replies, quotes, views, bookmarks per tweet |
| **Trending Topics** | Regional trends + 7 free news sources via Radar |
| **Tweet Composition** | Algorithm-optimized tweet composer with scoring checklist (free) |
| **Credits & Billing** | Check balance, top up, manage subscription via API |
| **Pay-Per-Use (MPP)** | 32 endpoints with anonymous on-chain payments, no account needed |
| **TypeScript Types** | Complete type definitions for all API objects |

## Supported Agents

Claude Code, OpenAI Codex, Cursor, GitHub Copilot, Gemini CLI, Windsurf, VS Code Copilot, Cline, Roo Code, Goose, Amp, Augment, Continue, OpenHands, Trae, OpenCode, and any agent that supports the skills.sh protocol.

## API Coverage

| Resource | Endpoints |
|----------|-----------|
| X Lookups | Tweet, article, search, user profile, user tweets, user likes, user media, favoriters, followers you know, follow check, download media, bookmarks, bookmark folders, notifications, timeline, DM history |
| Extractions | Create (23 types), estimate, list, get results, export |
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
| Credits | Get balance, top up |
| API Keys | Create, list, revoke |
| X Accounts | Connect, list, get, disconnect, re-authenticate |
| X Write | Tweet, delete, like, unlike, retweet, follow, unfollow, DM, profile, avatar, banner, media upload, communities |
| Support | Create ticket, list, get, update, reply |

## Official SDKs & Tools

Use the X Twitter Scraper API in your language of choice. All SDKs are auto-generated, kept in sync with the OpenAPI spec, and follow idiomatic conventions for each ecosystem.

| Repo | Language | Install | Stars |
|------|----------|---------|-------|
| [x-twitter-scraper-typescript](https://github.com/Xquik-dev/x-twitter-scraper-typescript) | TypeScript / Node.js | `npm i x-twitter-scraper` | ![Stars](https://img.shields.io/github/stars/Xquik-dev/x-twitter-scraper-typescript?style=flat-square) |
| [x-twitter-scraper-python](https://github.com/Xquik-dev/x-twitter-scraper-python) | Python | `pip install x-twitter-scraper` | ![Stars](https://img.shields.io/github/stars/Xquik-dev/x-twitter-scraper-python?style=flat-square) |
| [x-twitter-scraper-go](https://github.com/Xquik-dev/x-twitter-scraper-go) | Go | `go get github.com/Xquik-dev/x-twitter-scraper-go` | ![Stars](https://img.shields.io/github/stars/Xquik-dev/x-twitter-scraper-go?style=flat-square) |
| [x-twitter-scraper-ruby](https://github.com/Xquik-dev/x-twitter-scraper-ruby) | Ruby | `gem install x-twitter-scraper` | ![Stars](https://img.shields.io/github/stars/Xquik-dev/x-twitter-scraper-ruby?style=flat-square) |
| [x-twitter-scraper-java](https://github.com/Xquik-dev/x-twitter-scraper-java) | Java | `implementation("com.x_twitter_scraper.api:x-twitter-scraper-java:0.3.0")` | ![Stars](https://img.shields.io/github/stars/Xquik-dev/x-twitter-scraper-java?style=flat-square) |
| [x-twitter-scraper-kotlin](https://github.com/Xquik-dev/x-twitter-scraper-kotlin) | Kotlin | `implementation("com.x_twitter_scraper.api:x-twitter-scraper-kotlin:0.3.0")` | ![Stars](https://img.shields.io/github/stars/Xquik-dev/x-twitter-scraper-kotlin?style=flat-square) |
| [x-twitter-scraper-csharp](https://github.com/Xquik-dev/x-twitter-scraper-csharp) | C# / .NET | `dotnet add package XTwitterScraper` | ![Stars](https://img.shields.io/github/stars/Xquik-dev/x-twitter-scraper-csharp?style=flat-square) |
| [x-twitter-scraper-php](https://github.com/Xquik-dev/x-twitter-scraper-php) | PHP | `composer require xquik/x-twitter-scraper` | ![Stars](https://img.shields.io/github/stars/Xquik-dev/x-twitter-scraper-php?style=flat-square) |
| [x-twitter-scraper-cli](https://github.com/Xquik-dev/x-twitter-scraper-cli) | CLI | `go install github.com/Xquik-dev/x-twitter-scraper-cli/cmd/x-twitter-scraper@latest` | ![Stars](https://img.shields.io/github/stars/Xquik-dev/x-twitter-scraper-cli?style=flat-square) |
| [terraform-provider-x-twitter-scraper](https://github.com/Xquik-dev/terraform-provider-x-twitter-scraper) | Terraform | Build from source ([latest release](https://github.com/Xquik-dev/terraform-provider-x-twitter-scraper/releases)) | ![Stars](https://img.shields.io/github/stars/Xquik-dev/terraform-provider-x-twitter-scraper?style=flat-square) |
| [tweetclaw](https://github.com/Xquik-dev/tweetclaw) | OpenClaw plugin | `openclaw plugins install @xquik/tweetclaw` | ![Stars](https://img.shields.io/github/stars/Xquik-dev/tweetclaw?style=flat-square) |

## Skill Structure

```
x-twitter-scraper/
├── skills/
│   └── x-twitter-scraper/
│       ├── SKILL.md                      # Main skill (auth, pricing, endpoints, patterns)
│       ├── metadata.json                 # Version and references
│       └── references/
│           ├── api-endpoints.md          # All REST API endpoints
│           ├── mcp-tools.md              # MCP tool selection rules and workflow patterns
│           ├── mcp-setup.md              # MCP configs for 10 platforms (v2 + v1)
│           ├── webhooks.md               # Webhook setup & verification
│           ├── extractions.md            # 23 extraction tool types
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
- [Billing & Pricing](https://docs.xquik.com/guides/billing)
- Framework guides: [Mastra](https://docs.xquik.com/guides/mastra), [CrewAI](https://docs.xquik.com/guides/crewai), [LangChain](https://docs.xquik.com/guides/langchain), [Pydantic AI](https://docs.xquik.com/guides/pydantic-ai), [Google ADK](https://docs.xquik.com/guides/google-adk), [Microsoft Agent Framework](https://docs.xquik.com/guides/microsoft-agent-framework), [n8n](https://docs.xquik.com/guides/n8n), [Zapier](https://docs.xquik.com/guides/zapier), [Composio migration](https://docs.xquik.com/guides/composio-migration)
- [skills.sh Page](https://skills.sh/Xquik-dev/x-twitter-scraper)

## License

MIT
