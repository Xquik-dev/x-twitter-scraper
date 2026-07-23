// SPDX-FileCopyrightText: 2026 Xquik Contributors
// SPDX-License-Identifier: MIT

/** Each entry: path (relative to root) + extractor returning the version string. */
function parseJsonVersion(raw) {
  return JSON.parse(raw).version;
}

export const versionSurfaces = [
  { path: "server.json", get: parseJsonVersion },
  { path: "openclaw.plugin.json", get: parseJsonVersion },
  { path: ".codex-plugin/plugin.json", get: parseJsonVersion },
  { path: ".claude-plugin/plugin.json", get: parseJsonVersion },
  {
    path: ".claude-plugin/marketplace.json",
    get: (j) => {
      const m = JSON.parse(j);
      return [m.metadata?.version, ...(m.plugins ?? []).map((p) => p.version)];
    },
  },
  {
    path: "skills/x-twitter-scraper/metadata.json",
    get: parseJsonVersion,
  },
  {
    path: "skills/x-twitter-scraper/SKILL.md",
    get: (t) => {
      const match = /^\s*version:\s*"([^"]+)"/m.exec(t);
      return match?.[1];
    },
  },
  {
    path: "stub-server.mjs",
    get: (t) => /version:\s*"([^"]+)"/.exec(t)?.[1],
  },
];

export const skillFrontmatterExpectations = {
  scalars: {
    author: "Xquik <support@xquik.com>",
    compatibility:
      "Requires internet access to call the first-party Xquik REST API.",
    "metadata.author": "Xquik",
    "metadata.capabilities.network.allowed": true,
    "metadata.capabilities.shell.allowed": false,
    "metadata.capabilities.filesystem.read": false,
    "metadata.capabilities.filesystem.write": false,
    "metadata.capabilities.mcp.allowed": true,
    "metadata.capabilities.mcp.transport": "native-http-or-oauth-only",
    "metadata.capabilities.codeExecution.allowed": false,
    "metadata.capabilities.localNetwork.allowed": false,
    "metadata.openclaw.primaryEnv": "XQUIK_API_KEY",
    "metadata.openclaw.homepage": "https://docs.xquik.com",
    "metadata.security.credentialsHandledByAgent": "api-key-only",
    "metadata.security.credentialsTransmitted": "xquik-api-key-only",
    "metadata.security.xLoginSecretsHandled": false,
    "metadata.security.passwordsCollected": false,
    "metadata.security.totpCollected": false,
    "metadata.security.sessionCookiesCollected": false,
    "metadata.security.contentIsolation": "enforced",
    "metadata.security.inputValidation": "enforced",
    "metadata.security.outputSanitization": "enforced",
    "metadata.security.writeConfirmation": "required",
    "metadata.security.persistentResourceConfirmation": "required",
    "metadata.security.accountChangeExecution": false,
    "metadata.security.autonomousPlanChanges": false,
    "metadata.security.planChanges": "dashboard-only",
    "metadata.security.creditChanges": "dashboard-only",
    "metadata.security.mcpTransport": "native-http-or-oauth-only",
    "metadata.security.thirdPartyContentIsolation": "explicit-boundary-markers",
    "metadata.security.executionModel": "api-only",
    "metadata.security.codeExecution": "none",
    "metadata.security.localFileAccess": "none",
    "metadata.security.localNetworkAccess": "none",
    "metadata.security.auditLogging": "enabled",
    "metadata.security.rateLimiting": "per-method-tier",
    "metadata.security.usageConfirmation": "required",
    "metadata.security.securityReference": "references/security.md",
  },
  arrays: {
    tags: ["twitter", "x", "social-media", "api-development", "scraping"],
    "metadata.capabilities.network.hosts": ["xquik.com", "docs.xquik.com"],
    "metadata.capabilities.environment.required": ["XQUIK_API_KEY"],
    "metadata.capabilities.environment.optional": ["XQUIK_WEBHOOK_SECRET"],
    "metadata.openclaw.requires.env": ["XQUIK_API_KEY"],
    "metadata.security.allowedHosts": ["xquik.com", "docs.xquik.com"],
  },
  enums: {
    "metadata.security.contentTrust": ["mixed"],
  },
};

export const taskGuideFrontmatterExpectations = {
  scalars: {
    "metadata.internal": true,
    "metadata.author": "Xquik",
    "metadata.openclaw.primaryEnv": "XQUIK_API_KEY",
    "metadata.openclaw.homepage": "https://docs.xquik.com",
    "metadata.security.contentIsolation": "enforced",
    "metadata.security.promptInjectionDefense": true,
    "metadata.security.writeConfirmation": "required",
    "metadata.security.usageConfirmation": "required",
    "metadata.security.planChanges": "dashboard-only",
    "metadata.security.creditChanges": "dashboard-only",
    "metadata.security.executionModel": "api-only",
    "metadata.security.codeExecution": "none",
    "metadata.security.credentialProxy": false,
  },
  arrays: {
    "metadata.openclaw.requires.env": ["XQUIK_API_KEY"],
  },
  enums: {
    "metadata.security.contentTrust": ["trusted", "mixed", "untrusted"],
  },
};

export const manifestReferences = [
  [".codex-plugin/plugin.json", "skills"],
  [".codex-plugin/plugin.json", "mcpServers"],
  [".codex-plugin/plugin.json", "interface.composerIcon"],
  [".claude-plugin/plugin.json", "skills"],
  [".claude-plugin/plugin.json", "mcpServers"],
  ["openclaw.plugin.json", "skills"],
];

export const jsonFieldExpectations = [
  {
    path: "package.json",
    fields: {
      name: "x-developer",
      "author.name": "Xquik",
      "author.url": "https://docs.xquik.com",
      homepage: "https://docs.xquik.com",
      license: "MIT",
      "repository.url": "git+https://github.com/Xquik-dev/x-twitter-scraper.git",
      "bugs.url": "https://github.com/Xquik-dev/x-twitter-scraper/issues",
    },
  },
  {
    path: "openclaw.plugin.json",
    fields: {
      id: "x-developer",
      name: "X Developer API",
      "skills.0": "./skills",
      "providerAuthEnvVars.xquik.0": "XQUIK_API_KEY",
      "uiHints.apiKey.sensitive": true,
      "configSchema.additionalProperties": false,
    },
  },
  {
    path: ".codex-plugin/plugin.json",
    fields: {
      name: "x-twitter-scraper",
      "author.name": "Xquik",
      homepage: "https://docs.xquik.com",
      repository: "https://github.com/Xquik-dev/x-twitter-scraper",
      license: "MIT",
      skills: "./skills/",
      mcpServers: "./.mcp.json",
      "interface.developerName": "Xquik",
      "interface.websiteURL": "https://docs.xquik.com",
      "interface.privacyPolicyURL": "https://xquik.com/privacy",
      "interface.termsOfServiceURL": "https://xquik.com/terms",
    },
  },
  {
    path: ".claude-plugin/plugin.json",
    fields: {
      name: "x-twitter-scraper",
      "author.name": "Xquik",
      homepage: "https://docs.xquik.com",
      repository: "https://github.com/Xquik-dev/x-twitter-scraper",
      license: "MIT",
      skills: "./skills/",
      mcpServers: "./.mcp.json",
      "userConfig.api_key.sensitive": true,
    },
  },
  {
    path: ".claude-plugin/marketplace.json",
    fields: {
      name: "x-twitter-scraper",
      "owner.name": "Xquik",
      "owner.email": "support@xquik.com",
      "plugins.0.name": "x-twitter-scraper",
      "plugins.0.homepage": "https://docs.xquik.com",
      "plugins.0.repository": "https://github.com/Xquik-dev/x-twitter-scraper",
      "plugins.0.license": "MIT",
    },
  },
  {
    path: "server.json",
    fields: {
      name: "com.xquik/mcp",
      title: "Xquik MCP Server",
      "repository.url": "https://github.com/Xquik-dev/x-twitter-scraper",
      "repository.source": "github",
      websiteUrl: "https://docs.xquik.com/mcp/overview",
      "remotes.0.type": "streamable-http",
      "remotes.0.url": "https://xquik.com/mcp",
    },
  },
  {
    path: "skills/x-twitter-scraper/metadata.json",
    fields: {
      organization: "Xquik",
      homepage: "https://docs.xquik.com",
      repository: "https://github.com/Xquik-dev/x-twitter-scraper",
      license: "MIT",
      "security.defaultMode": "read-only-public-data",
      "security.localExecution": false,
      "security.localFileAccess": false,
      "security.localNetworkAccess": false,
      "security.untrustedContentBoundaries": true,
    },
  },
];

export const markdownRoots = [
  ".github",
  "commands",
  "docker-mcp-registry",
  "mcpize",
  "skills",
  "task-guides",
];
