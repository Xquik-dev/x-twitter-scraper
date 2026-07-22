# MCPize Submission Steps

Use this checklist for the human-owned MCPize marketplace submission. Xquik
already runs a remote Streamable HTTP MCP server, so prefer a remote listing
that points at the existing endpoint.

## Listing Details

- Name: `com.xquik/mcp`
- Server URL: `https://xquik.com/mcp`
- Transport: Streamable HTTP
- Repository: `https://github.com/Xquik-dev/x-twitter-scraper`
- Version: `2.5.6`
- Description: `X data platform with 127 REST operations and 119 MCP catalog routes through 2 tools. 118 support JSON or text. Includes webhooks, SDKs, and confirmed writes. Not affiliated with X Corp.`
- Categories: Social Media, Automation, Search, Data, Monitoring, Web Scraping, AI Agents
- Authentication: OAuth 2.1 discovery
- Protected resource metadata: `https://xquik.com/.well-known/oauth-protected-resource/mcp`
- Authorization server metadata: `https://xquik.com/.well-known/oauth-authorization-server`

## Submission Flow

1. Sign in to MCPize with the owner account.
2. Start a marketplace submission or new project from the MCPize dashboard.
3. Select an existing remote MCP server when that option is available.
4. Enter the listing details above.
5. Leave manual client ID and client secret fields empty when discovery works.
6. Do not add a local bridge or hosted forwarding adapter.
7. Test browser authorization through the marketplace client.
8. Update public docs with the MCPize listing URL only after the listing is
   live.

## Acceptance Checks

- Searching MCPize for `xquik` returns the listing.
- The listing shows `https://xquik.com/mcp` as the remote server URL.
- The install flow opens Xquik OAuth without requesting an API key.
- The listing description matches `server.json`.
