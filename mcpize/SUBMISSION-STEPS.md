# MCPize Submission Steps

Use this checklist for the human-owned MCPize marketplace submission. Xquik
already runs a remote Streamable HTTP MCP server, so prefer a remote listing
that points at the existing endpoint.

## Listing Details

- Name: `com.xquik/mcp`
- Server URL: `https://xquik.com/mcp`
- Transport: Streamable HTTP
- Repository: `https://github.com/Xquik-dev/x-twitter-scraper`
- Version: `2.4.8`
- Description: `X data platform with 100+ REST endpoints, 2 MCP tools, 23 extraction tools, webhooks, and confirmation-gated writes.`
- Categories: Social Media, Automation, Search, Data, Monitoring, Web Scraping, AI Agents
- Auth header: `x-api-key`
- Auth value template: `{XQUIK_API_KEY}`
- API key source: `https://dashboard.xquik.com/account`

## Submission Flow

1. Sign in to MCPize with the owner account.
2. Start a marketplace submission or new project from the MCPize dashboard.
3. Select an existing remote MCP server when that option is available.
4. Enter the listing details above.
5. Keep API keys out of public forms and repositories. Use the placeholder
   value template for docs or metadata.
6. If MCPize requires hosted deployment instead of a remote URL, create a thin
   adapter task that forwards to `https://xquik.com/mcp` and preserves the
   incoming `x-api-key` header.
7. Test the listing with an Xquik API key owned by the submitter.
8. Update public docs with the MCPize listing URL only after the listing is
   live.

## Acceptance Checks

- Searching MCPize for `xquik` returns the listing.
- The listing shows `https://xquik.com/mcp` as the remote server URL or uses an
  approved adapter that targets it.
- The install instructions show `x-api-key: {XQUIK_API_KEY}`.
- The listing description matches `server.json`.
