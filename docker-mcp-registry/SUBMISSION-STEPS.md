# Docker MCP Catalog Submission Steps

Xquik MCP is a **remote server** (Streamable HTTP). Docker lists the remote
endpoint directly. Remote entries must not ship a Dockerfile.

Open the pull request from **kriptoburak**, never from Xquik-dev.

## Prepared Files

The `xquik-remote/` directory contains the 3 files Docker requires for remote
servers:

- `server.yaml` - Remote Streamable HTTP metadata with OAuth
- `readme.md` - Docs URL only
- `tools.json` - Empty array `[]` because remote servers use dynamic tool discovery

Do not add a local image, secrets block, or static tool list. That fails Docker's
remote-server review.

## Submission Steps

1. Fork https://github.com/docker/mcp-registry as **kriptoburak**

2. Clone the fork:
   ```bash
   git clone https://github.com/kriptoburak/mcp-registry.git
   cd mcp-registry
   git checkout -b add-xquik-remote
   ```

3. Copy the prepared files:
   ```bash
   cp -R docker-mcp-registry/xquik-remote servers/xquik-remote
   ```

4. Install prerequisites (Go v1.24+, Docker Desktop, Task), then:
   ```bash
   task catalog -- xquik-remote
   docker mcp catalog import $PWD/catalogs/xquik-remote/catalog.yaml
   docker mcp server enable xquik-remote
   docker mcp oauth authorize xquik-remote
   ```

5. Open a PR from kriptoburak to docker/mcp-registry with title:
   `Add xquik-remote MCP server`

6. Share test credentials through Docker's review form if maintainers ask:
   https://forms.gle/6Lw3nsvu2d6nFg8e6

7. Confirm Docker Desktop opens Xquik OAuth and completes browser authorization.
