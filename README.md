# X API / Twitter Scraper Skill for AI Coding Agents

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
![GitHub stars](https://img.shields.io/github/stars/Xquik-dev/x-twitter-scraper)
[![npm version](https://img.shields.io/npm/v/x-developer.svg)](https://www.npmjs.com/package/x-developer)
[![npm downloads](https://img.shields.io/npm/dm/x-developer.svg)](https://www.npmjs.com/package/x-developer)
[![X Tweet Scraper on Apify](https://apify.com/actor-badge?actor=xquik/x-tweet-scraper)](https://apify.com/xquik/x-tweet-scraper)
[![x-twitter-scraper MCP server](https://glama.ai/mcp/servers/Xquik-dev/x-twitter-scraper/badges/score.svg)](https://glama.ai/mcp/servers/Xquik-dev/x-twitter-scraper)
[![smithery badge](https://smithery.ai/badge/xquik/x-twitter-scraper)](https://smithery.ai/servers/xquik/x-twitter-scraper)

An [AI agent skill](https://skills.sh) that gives coding agents deep knowledge of the [Xquik](https://xquik.com) X (Twitter) real-time data platform. 100+ REST API endpoints, 2 MCP tools, HMAC webhooks, 23 bulk extraction tools, and confirmation-gated write actions.

**The cheapest X data API on the market** - post reads from $0.00015/call (about 33x cheaper than official X API post reads).

Works with **40+ AI coding agents** including Claude Code, OpenAI Codex, Cursor, GitHub Copilot, Gemini CLI, Windsurf, VS Code, Cline, Roo Code, Goose, Amp, Augment, Continue, OpenHands, Trae, OpenCode, and more.

## Pricing

Xquik is dramatically cheaper than every alternative for X/Twitter data access.

### vs Official X API

| | Xquik | Official X pay-per-usage | Notes |
|---|---|---|---|
| **Access model** | **$20/month full API, plus pay-per-use options** | No subscriptions or commitments | Basic and Pro are legacy package names |
| **Cost per post read** | **$0.00015** | $0.005 per resource | Xquik is about 33x cheaper |
| **Cost per user lookup** | **$0.00015** | $0.010 per resource | Xquik is about 67x cheaper |
| **Cost per trend read** | **$0.00045** | $0.010 per resource | Xquik is about 22x cheaper |
| **Write actions** | **$0.0015** | $0.015 content or interaction create; $0.200 content create with URL | Xquik is 10x cheaper for matching $0.015 write classes |
| **Bulk extraction** | **From $0.00015/result** | Charged per returned resource | Built-in extraction jobs are included with Xquik |
| **Monitoring + webhooks** | Active monitors are metered; webhooks included | No direct monitor product in pricing table | Real-time delivery is included |
| **Giveaway draws** | **$0.00015/entry** | No comparable draw product | Draw engine is included |
| **MCP server** | **Included** | Not listed | Agent tools are included |

Source: [official X API pricing](https://docs.x.com/x-api/getting-started/pricing), which lists current pay-per-usage read and write rates.

### Per-Operation Costs (1 credit = $0.00015)

| Operation | Credits | Cost |
|-----------|---------|------|
| Read (tweet, search, timeline, bookmarks, etc.) | 1 | $0.00015 |
| Read (user profile, verified followers, followers you know) | 1 | $0.00015 |
| Read (favoriters) | 1 | $0.00015 |
| Read (trends) | 3 | $0.00045 |
| Follow check, article | 5 | $0.00075 |
| Write (tweet, like, retweet, follow, DM, etc.) | 10 | $0.0015 |
| Extraction (tweets, replies, quotes, mentions, posts, likes, media, search, favoriters, retweeters, community members, people search, list members, list followers) | 1/result | $0.00015/result |
| Extraction (followers, following, verified followers) | 1/result | $0.00015/result |
| Extraction (articles) | 5/result | $0.00075/result |
| Draw | 1/entry | $0.00015/entry |
| Active monitors | 21/hour | $0.00315/hour |
| Webhooks, radar, compose, drafts | 0 | **Free** |

### Pay-Per-Use (No Subscription)

Two options for pay-per-use without a monthly subscription:

- **Credits**: Start a credit top-up checkout only after explicit confirmation. 1 credit = $0.00015. Works with all supported endpoints.
- **MPP**: 32 X-API endpoints accept optional per-call payments. Show the exact amount and get explicit confirmation before starting any payment flow. SDK: `npm i mppx@0.6.15 viem@2.48.8`.

## Installation

Install via the [skills CLI](https://skills.sh) (auto-detects your installed agents):

```bash
npx skills@1.5.3 add Xquik-dev/x-twitter-scraper
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
- **Bookmarks & notifications**: Access bookmarks, bookmark folders, notifications, and home timeline after explicit approval
- **DM history**: Retrieve conversation history with explicit approval
- **Mutual follow checker**: Check if two accounts follow each other
- **X account monitoring**: Track accounts for new tweets, replies, quotes, retweets with explicit approval
- **Webhook delivery**: Receive HMAC-signed event notifications at your HTTPS endpoint
- **Trending topics**: Get trending hashtags and topics by region
- **Radar**: Trending news from 7 sources (Google Trends, Hacker News, Polymarket, TrustMRR, Wikipedia, GitHub, Reddit). Free
- **Giveaway draws**: Run transparent draws from tweet replies with configurable filters
- **Write actions**: Post tweets, like, retweet, follow/unfollow, remove followers, send DMs, update profile, upload media, manage communities after explicit approval
- **Tweet composition**: Algorithm-optimized tweet composer with scoring (free)
- **Credits & billing**: Check balance; start top-up or subscription checkout only after explicit confirmation
- **Support tickets**: Open and manage support tickets via API
- **MCP server**: 2 tools covering 100+ endpoints for AI agent integration
- **Pay-per-use (MPP)**: Optional per-call access to 32 endpoints with exact-amount confirmation

## Capabilities

| Area | Details |
|------|---------|
| **REST API** | 100+ endpoints across 10 categories with retry logic and pagination |
| **MCP Server** | 2 tools (explore + xquik). StreamableHTTP, configs for 10 platforms |
| **Data Extraction** | 23 bulk extraction tools (replies, retweets, quotes, favoriters, threads, articles, user likes, user media, communities, lists, Spaces, people search, tweet search, mentions, posts) |
| **X Lookups** | Tweet, user, article, search, user tweets, user likes, user media, favoriters, mutual followers, and confirmation-gated private reads |
| **Write Actions** | Confirmation-gated post/delete tweets, like/unlike, retweet, follow/unfollow, remove followers, DM, profile update, avatar/banner, media upload, community actions |
| **Giveaway Draws** | Random winner selection from tweet replies with 11 filter options |
| **Account Monitoring** | Real-time tracking of tweets, replies, quotes, retweets with ongoing-cost confirmation |
| **Webhooks** | HMAC-SHA256 signature verification in Node.js, Python, Go |
| **Media Download** | Download images, videos, GIFs with permanent hosted URLs |
| **Engagement Analytics** | Likes, retweets, replies, quotes, views, bookmarks per tweet |
| **Trending Topics** | Regional trends + 7 free news sources via Radar |
| **Tweet Composition** | Algorithm-optimized tweet composer with scoring checklist (free) |
| **Credits & Billing** | Check balance, start confirmed top-up checkout, start confirmed subscription checkout |
| **Pay-Per-Use (MPP)** | 32 endpoints with exact-amount confirmation before every payment flow |
| **TypeScript Types** | Complete type definitions for all API objects |

## Supported Agents

Claude Code, OpenAI Codex, Cursor, GitHub Copilot, Gemini CLI, Windsurf, VS Code Copilot, Cline, Roo Code, Goose, Amp, Augment, Continue, OpenHands, Trae, OpenCode, and any agent that supports the skills.sh protocol.

## API Coverage

| Resource | Endpoints |
|----------|-----------|
| X Lookups | Tweet, article, search, user profile, user tweets, user likes, user media, favoriters, followers you know, follow check, download media, and confirmation-gated private reads |
| Extractions | Create (23 types), estimate, list, get results, export |
| Monitors | Create with confirmation, list, get, update, delete |
| Events | List (filtered, paginated), get single |
| Webhooks | Create with destination confirmation, list, update, delete, test, deliveries |
| Trends | Regional trending topics |
| Radar | Trending topics & news from 7 sources (free) |
| Draws | Create with filters, list, get with winners, export |
| Styles | Analyze, save, list, get, delete, compare, performance |
| Compose | Tweet composition (compose, refine, score) |
| Drafts | Create, list, get, delete |
| Account | Get account, update locale, set X identity, subscription checkout with confirmation |
| Credits | Get balance, confirmed top-up checkout |
| API Keys | Create, list, revoke |
| X Accounts | List, get, and disconnect already-connected accounts; dashboard handles connection and re-authentication |
| X Write | Confirmation-gated tweet, delete, like, unlike, retweet, follow, unfollow, DM, profile, avatar, banner, media upload, communities |
| Support | Create ticket, list, get, update, reply |

## Official SDKs & Tools

Use the X Twitter Scraper API in your language of choice. All SDKs are auto-generated, kept in sync with the OpenAPI spec, and follow idiomatic conventions for each ecosystem.

| Repo | Language | Install | Stars |
|------|----------|---------|-------|
| [x-twitter-scraper-typescript](https://github.com/Xquik-dev/x-twitter-scraper-typescript) | TypeScript / Node.js | `npm i x-twitter-scraper` | ![Stars](https://img.shields.io/github/stars/Xquik-dev/x-twitter-scraper-typescript?style=flat-square) |
| [x-twitter-scraper-python](https://github.com/Xquik-dev/x-twitter-scraper-python) | Python | `pip install x-twitter-scraper` | ![Stars](https://img.shields.io/github/stars/Xquik-dev/x-twitter-scraper-python?style=flat-square) |
| [x-twitter-scraper-go](https://github.com/Xquik-dev/x-twitter-scraper-go) | Go | `go get github.com/Xquik-dev/x-twitter-scraper-go` | ![Stars](https://img.shields.io/github/stars/Xquik-dev/x-twitter-scraper-go?style=flat-square) |
| [x-twitter-scraper-ruby](https://github.com/Xquik-dev/x-twitter-scraper-ruby) | Ruby | `gem install x-twitter-scraper` | ![Stars](https://img.shields.io/github/stars/Xquik-dev/x-twitter-scraper-ruby?style=flat-square) |
| [x-twitter-scraper-java](https://github.com/Xquik-dev/x-twitter-scraper-java) | Java | Build from source while Maven Central publication is pending | ![Stars](https://img.shields.io/github/stars/Xquik-dev/x-twitter-scraper-java?style=flat-square) |
| [x-twitter-scraper-kotlin](https://github.com/Xquik-dev/x-twitter-scraper-kotlin) | Kotlin | Build from source while Maven Central publication is pending | ![Stars](https://img.shields.io/github/stars/Xquik-dev/x-twitter-scraper-kotlin?style=flat-square) |
| [x-twitter-scraper-csharp](https://github.com/Xquik-dev/x-twitter-scraper-csharp) | C# / .NET | `dotnet add package XTwitterScraper` | ![Stars](https://img.shields.io/github/stars/Xquik-dev/x-twitter-scraper-csharp?style=flat-square) |
| [x-twitter-scraper-php](https://github.com/Xquik-dev/x-twitter-scraper-php) | PHP | `composer require xquik/x-twitter-scraper` | ![Stars](https://img.shields.io/github/stars/Xquik-dev/x-twitter-scraper-php?style=flat-square) |
| [x-twitter-scraper-cli](https://github.com/Xquik-dev/x-twitter-scraper-cli) | CLI | Build from source or install a pinned release tag | ![Stars](https://img.shields.io/github/stars/Xquik-dev/x-twitter-scraper-cli?style=flat-square) |
| [terraform-provider-x-twitter-scraper](https://github.com/Xquik-dev/terraform-provider-x-twitter-scraper) | Terraform | Build from source ([release page](https://github.com/Xquik-dev/terraform-provider-x-twitter-scraper/releases)) | ![Stars](https://img.shields.io/github/stars/Xquik-dev/terraform-provider-x-twitter-scraper?style=flat-square) |
| [tweetclaw](https://github.com/Xquik-dev/tweetclaw) | OpenClaw plugin | `openclaw plugins install @xquik/tweetclaw` | ![Stars](https://img.shields.io/github/stars/Xquik-dev/tweetclaw?style=flat-square) |

## Skill Structure

```
x-twitter-scraper/
├── skills/
│   └── x-twitter-scraper/
│       ├── SKILL.md                      # Main skill (auth, pricing, endpoints, patterns)
│       ├── metadata.json                 # Version and references
│       └── references/
│           ├── api-endpoints.md          # REST API endpoint reference
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
- Framework guides: [Mastra](https://docs.xquik.com/guides/mastra), [CrewAI](https://docs.xquik.com/guides/crewai), [LangChain](https://docs.xquik.com/guides/langchain), [Pydantic AI](https://docs.xquik.com/guides/pydantic-ai), [Google ADK](https://docs.xquik.com/guides/google-adk), [Microsoft Agent Framework](https://docs.xquik.com/guides/microsoft-agent-framework), [n8n](https://docs.xquik.com/guides/n8n), [Zapier](https://docs.xquik.com/guides/zapier), [Make](https://docs.xquik.com/guides/make), [Pipedream](https://docs.xquik.com/guides/pipedream), [Composio migration](https://docs.xquik.com/guides/composio-migration)
- [skills.sh Page](https://skills.sh/Xquik-dev/x-twitter-scraper)

## License

MIT
