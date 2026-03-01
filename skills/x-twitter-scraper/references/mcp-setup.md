# Xquik MCP Server Setup

Connect AI agents and IDEs to Xquik via the Model Context Protocol. The MCP server uses the same API key as the REST API.

| Setting | Value |
|---------|-------|
| Protocol | HTTP (StreamableHTTP) |
| Endpoint | `https://xquik.com/mcp` |
| Auth header | `x-api-key` |

## Claude.ai (Web)

Claude.ai supports MCP connectors natively via OAuth. Add Xquik as a connector from **Settings > Feature Preview > Integrations > Add More > Xquik**. The OAuth 2.1 flow handles authentication automatically -- no API key needed.

## Claude Desktop

Claude Desktop only supports stdio transport. Use `mcp-remote` as a bridge (requires [Node.js](https://nodejs.org)).

Add to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "xquik": {
      "command": "npx",
      "args": [
        "mcp-remote@latest",
        "https://xquik.com/mcp",
        "--header",
        "x-api-key:xq_YOUR_KEY_HERE"
      ]
    }
  }
}
```

## Claude Code

Add to `.mcp.json`:

```json
{
  "mcpServers": {
    "xquik": {
      "type": "http",
      "url": "https://xquik.com/mcp",
      "headers": {
        "x-api-key": "xq_YOUR_KEY_HERE"
      }
    }
  }
}
```

## ChatGPT

3 ways to connect ChatGPT to Xquik:

### Option 1: Custom GPT (Recommended)

Create a Custom GPT and add Xquik as an Action using the OpenAPI schema at `https://docs.xquik.com/openapi.json`. Set the API key under Authentication > API Key > Header `x-api-key`.

### Option 2: Agents SDK

Use the [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/mcp/) for programmatic access:

```python
from agents.mcp import MCPServerStreamableHttp

async with MCPServerStreamableHttp(
    url="https://xquik.com/mcp",
    headers={"x-api-key": "xq_YOUR_KEY_HERE"},
    params={},
) as xquik:
    # use xquik as a tool provider
    pass
```

### Option 3: Developer Mode

ChatGPT Developer Mode supports MCP connectors via OAuth. Add Xquik from **Settings > Developer Mode > MCP Tools > Add**. Enter `https://xquik.com/mcp` as the endpoint. OAuth handles authentication automatically.

## Codex CLI

Add to `~/.codex/config.toml`:

```toml
[mcp_servers.xquik]
url = "https://xquik.com/mcp"
http_headers = { "x-api-key" = "xq_YOUR_KEY_HERE" }
```

## Cursor

Add to `~/.cursor/mcp.json` (global) or `.cursor/mcp.json` (project):

```json
{
  "mcpServers": {
    "xquik": {
      "url": "https://xquik.com/mcp",
      "headers": {
        "x-api-key": "xq_YOUR_KEY_HERE"
      }
    }
  }
}
```

## VS Code

Add to `.vscode/mcp.json` (project) or use **MCP: Open User Configuration** (global):

```json
{
  "servers": {
    "xquik": {
      "type": "http",
      "url": "https://xquik.com/mcp",
      "headers": {
        "x-api-key": "xq_YOUR_KEY_HERE"
      }
    }
  }
}
```

## Windsurf

Add to `~/.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "xquik": {
      "serverUrl": "https://xquik.com/mcp",
      "headers": {
        "x-api-key": "xq_YOUR_KEY_HERE"
      }
    }
  }
}
```

## OpenCode

Add to `opencode.json`:

```json
{
  "mcp": {
    "xquik": {
      "type": "remote",
      "url": "https://xquik.com/mcp",
      "headers": {
        "x-api-key": "xq_YOUR_KEY_HERE"
      }
    }
  }
}
```

## Available MCP Tools (26)

For complete input/output schemas, see [mcp-tools.md](mcp-tools.md).

| Tool | Cost | Annotations | Description |
|------|------|-------------|-------------|
| `list-monitors` | Free | readOnly | List all monitored X accounts with IDs and event types |
| `add-monitor` | Free | openWorld | Start monitoring an X account for tweets, replies, retweets, quotes, follower changes |
| `remove-monitor` | Free | destructive | Stop monitoring and permanently delete a monitor |
| `get-events` | Free | readOnly | Query events from YOUR monitored accounts with filtering and pagination |
| `get-event` | Free | readOnly | Get full details for a single event by ID |
| `search-tweets` | Metered | readOnly, openWorld | Search tweets by keyword, hashtag, from:user. Returns basic info only (no metrics) |
| `get-user-info` | Metered | readOnly, openWorld | Get profile, bio, follower/following counts. No verified, location, createdAt, statusesCount |
| `lookup-tweet` | Metered | readOnly, openWorld | Get tweet with full metrics (likes, retweets, views, bookmarks) and author verification |
| `check-follow` | Metered | readOnly, openWorld | Check follow relationship in both directions |
| `list-webhooks` | Free | readOnly | List all webhook endpoints with URLs and event types |
| `add-webhook` | Free | openWorld | Register an HTTPS endpoint for HMAC-signed event delivery |
| `remove-webhook` | Free | destructive | Permanently delete a webhook endpoint |
| `test-webhook` | Free | openWorld | Send a test payload to verify a webhook endpoint works |
| `run-extraction` | Metered | openWorld | Run bulk data extraction (19 tool types). Always estimate first |
| `list-extractions` | Free | readOnly | List past extraction jobs with status and result counts |
| `get-extraction` | Free | readOnly | Get paginated results of a completed extraction |
| `estimate-extraction` | Free | readOnly, openWorld | Preview extraction cost and check if it fits within budget |
| `run-draw` | Metered | openWorld | Run a giveaway draw with configurable filters. Handles everything automatically |
| `list-draws` | Free | readOnly | List past giveaway draws |
| `get-draw` | Free | readOnly | Get draw details with tweet metrics at draw time and winners list |
| `get-account` | Free | readOnly | Check plan, monitor quota, and current period usage percent |
| `subscribe` | Free | idempotent, openWorld | Get Stripe Checkout or Customer Portal URL for subscription management |
| `get-trends` | Free | readOnly, openWorld | Get trending topics by region. Free, no usage consumed |
| `compose-tweet` | Free | readOnly | Start composing an algorithm-optimized tweet. Returns signals and follow-up questions |
| `refine-tweet` | Free | readOnly | Get targeted composition guidance after user answers follow-ups |
| `score-tweet` | Free | readOnly | Evaluate a draft tweet against X algorithm ranking factors (pass/fail checklist) |

**MCP vs REST field differences:** Monitor uses `xUsername` (not `username`), Event uses `eventType`/`monitoredAccountId` (not `type`/`monitorId`), FollowerCheck uses `following`/`followedBy` (not `isFollowing`/`isFollowedBy`). Use the REST API `GET /x/users/{username}` for the complete user profile.

## After Setup

### Workflow Patterns

| Workflow | Steps |
|----------|-------|
| Set up real-time alerts | `add-monitor` -> `add-webhook` -> `test-webhook` |
| Run a giveaway | `get-account` (check budget) -> `run-draw` |
| Bulk extraction | `get-account` (check subscription) -> `estimate-extraction` -> `run-extraction` -> `get-extraction` |
| Full tweet analysis | `lookup-tweet` (metrics) -> `run-extraction` with `thread_extractor` (full thread) |
| Find and analyze user | `get-user-info` (profile) -> `search-tweets from:username` -> `lookup-tweet` (metrics) |
| Compose optimized tweet | `compose-tweet` -> AI asks follow-ups -> `refine-tweet` -> AI drafts -> `score-tweet` |
| Subscribe or manage billing | `subscribe` (returns Stripe URL) |

### Example Prompts

Try these with your AI agent:

- "Monitor @vercel for new tweets and quote tweets"
- "How many followers does @elonmusk have?"
- "Search for tweets mentioning xquik"
- "What does this tweet say? https://x.com/elonmusk/status/1893456789012345678"
- "Does @elonmusk follow @SpaceX back?"
- "Pick 3 winners from this tweet: https://x.com/burakbayir/status/1893456789012345678"
- "How much would it cost to extract all followers of @elonmusk?"
- "What's trending in the US right now?"
- "Set up a webhook at https://my-server.com/events for new tweets"
- "What plan am I on and how much have I used?"
