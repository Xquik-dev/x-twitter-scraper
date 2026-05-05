# Docker MCP Catalog Submission Steps

Xquik MCP is a **remote server** (StreamableHTTP), so no Dockerfile is needed.
Docker will list the remote endpoint directly.

## Prepared Files

The `xquik-remote/` directory contains the 3 required files:

- `server.yaml` - Server metadata (remote type, StreamableHTTP, API key auth)
- `readme.md` - Link to docs
- `tools.json` - Tool definitions for explore and xquik tools

## Submission Steps

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

6. Create PR to docker/mcp-registry with title: "Add xquik-remote MCP server"

7. Share the test API key via the form: https://forms.gle/6Lw3nsvu2d6nFg8e6

8. Wait for Docker team review (catalog entry available within 24h of approval).
