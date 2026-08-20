# Docker MCP catalog submission steps

Xquik MCP is a remote Streamable HTTP server, so it needs no Dockerfile.
Docker will list the remote endpoint directly.

## Prepared files

The `xquik-remote/` directory contains the 3 required files:

- `server.yaml`: server metadata for OAuth-enabled Streamable HTTP
- `readme.md`: documentation link
- `tools.json`: definitions for the `explore` and `xquik` tools

## Submission steps

1. Fork https://github.com/docker/mcp-registry

2. Clone the fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/mcp-registry.git
   cd mcp-registry
   ```

3. Copy the prepared files:
   ```bash
   cp -r ~/Developer/x-twitter-scraper/docker-mcp-registry/xquik-remote servers/xquik-remote
   ```

4. Install prerequisites (Go v1.24+, Docker Desktop, Task):
   ```bash
   brew install go task
   ```

5. Validate and build:
   ```bash
   task validate --name xquik-remote
   task build --tools xquik-remote
   ```

6. Open a pull request to `docker/mcp-registry` titled "Add xquik-remote MCP server."

7. Confirm Docker opens Xquik OAuth and completes browser authorization.

8. Address the Docker team's review comments.
