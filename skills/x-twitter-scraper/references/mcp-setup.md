# Xquik MCP Server Setup

Connect AI agents and IDEs to Xquik via the Model Context Protocol. The MCP server uses the same API key as the REST API.

| Setting | Value |
|---------|-------|
| Protocol | HTTP (StreamableHTTP) |
| Endpoint | `https://xquik.com/mcp` |
| Auth header | `x-api-key` |

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

ChatGPT Desktop does not support custom HTTP headers. Use the [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/mcp/):

```python
from agents.mcp import MCPServerStreamableHttp

xquik = MCPServerStreamableHttp(
    url="https://xquik.com/mcp",
    headers={"x-api-key": "xq_YOUR_KEY_HERE"},
)
```

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

## Available MCP Tools (22)

| Tool | Description |
|------|-------------|
| `list-monitors` | List all monitored X accounts |
| `add-monitor` | Start monitoring an X account |
| `remove-monitor` | Stop monitoring an X account |
| `get-events` | Query events with filtering and pagination |
| `get-event` | Get a single event by ID |
| `search-tweets` | Search for tweets matching a query |
| `get-user-info` | Get profile info for an X user (subset: no `verified`, `location`, `createdAt`, `statusesCount`) |
| `list-webhooks` | List all webhook endpoints |
| `add-webhook` | Register a new webhook endpoint |
| `remove-webhook` | Delete a webhook endpoint |
| `test-webhook` | Send a test payload to verify a webhook endpoint |
| `lookup-tweet` | Get tweet details and engagement metrics |
| `check-follow` | Check follow relationship between two users |
| `run-extraction` | Run a bulk data extraction (19 tool types) |
| `list-extractions` | List past extraction jobs |
| `get-extraction` | Get extraction job results |
| `estimate-extraction` | Preview extraction cost before running |
| `run-draw` | Run a giveaway draw from a tweet |
| `list-draws` | List past giveaway draws |
| `get-draw` | Get draw details and winners |
| `get-account` | Check subscription status and usage |
| `get-trends` | Get trending topics by region (free) |

**MCP vs REST field differences:** Monitor uses `xUsername` (not `username`), Event uses `eventType`/`monitoredAccountId` (not `type`/`monitorId`), FollowerCheck uses `following`/`followedBy` (not `isFollowing`/`isFollowedBy`). Use the REST API `GET /x/users/{username}` for the complete user profile.

## Example Prompts

Once connected, try these with your AI agent:

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
