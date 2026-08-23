# MCPize submission steps

Use this checklist to submit Xquik to MCPize. List the existing remote
Streamable HTTP endpoint.

## Listing details

- Name: `com.xquik/mcp`
- Server URL: `https://xquik.com/mcp`
- Transport: Streamable HTTP
- Repository: `https://github.com/Xquik-dev/x-twitter-scraper`
- Version: `2.6.0`
- Description: `128 REST operations. 120 MCP routes; 119 JSON/text ops. OAuth 2.1. Not affiliated with X Corp.`
- Categories: Social Media, Automation, Search, Data, Monitoring, Web Scraping, Agent Tools
- Authentication: OAuth 2.1 discovery
- Protected resource metadata: `https://xquik.com/.well-known/oauth-protected-resource/mcp`
- Authorization server metadata: `https://xquik.com/.well-known/oauth-authorization-server`

## Submission flow

1. Sign in to MCPize with the owner account.
2. Start a marketplace submission or new project from the MCPize dashboard.
3. Select an existing remote MCP server when that option is available.
4. Enter the listing details above.
5. Leave manual client ID and client secret fields empty when discovery works.
6. Do not add a local bridge or hosted forwarding adapter.
7. Test browser authorization through the marketplace client.
8. Update published docs with the MCPize listing URL only after the listing is
   live.

## Acceptance checks

- Searching MCPize for `xquik` returns the listing.
- The listing shows `https://xquik.com/mcp` as the remote server URL.
- The install flow opens Xquik OAuth without requesting an API key.
- The listing description matches `server.json`.
