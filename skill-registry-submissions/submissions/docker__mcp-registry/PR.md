# Add xquik-remote MCP server

## Summary
Add Xquik as a remote Streamable HTTP MCP server.

## Why this belongs in the Docker MCP Registry
Xquik already hosts `https://xquik.com/mcp`. Docker's remote-server path is the correct catalog fit. A local image would be the wrong submission type.

## Files
- `servers/xquik-remote/server.yaml`
- `servers/xquik-remote/tools.json` (`[]` for dynamic remote tools)
- `servers/xquik-remote/readme.md`

## Checks
- [x] MIT-licensed source repository
- [x] Public Streamable HTTP endpoint
- [x] OAuth 2.1 discovery at Xquik
- [x] Docs URL in readme.md
- [x] No Dockerfile

Xquik is an independent third-party service. Not affiliated with X Corp.
