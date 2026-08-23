// SPDX-FileCopyrightText: 2026 Xquik Contributors
// SPDX-License-Identifier: MIT

import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("keeps the Python extraction example bounded and requires confirmation", async () => {
  const source = await readFile(
    new URL(
      "../skills/x-twitter-scraper/references/python-examples.md",
      import.meta.url,
    ),
    "utf8",
  );
  const workflow = source.match(
    /## Extraction workflow\n\n```python\n([\s\S]*?)\n```/,
  )?.[1];

  assert.ok(workflow, "Python extraction workflow is missing");
  assert.match(workflow, /RESULTS_LIMIT = [1-9]\d*/);
  assert.equal(
    workflow.match(/"resultsLimit": RESULTS_LIMIT/g)?.length,
    2,
    "estimate and create requests must use the same finite bound",
  );

  const allowedIndex = workflow.indexOf('if not estimate["allowed"]:');
  const confirmationIndex = workflow.indexOf(
    '"the bounded extraction job, usage, recipients, and retention"',
  );
  const createIndex = workflow.indexOf(
    'xquik_fetch("/extractions", method="POST"',
  );

  assert.ok(allowedIndex >= 0, "estimate response gate is missing");
  assert.ok(
    allowedIndex < confirmationIndex && confirmationIndex < createIndex,
    "exact-job confirmation must follow the estimate and precede job creation",
  );
});

test("keeps metered draws, community exports, and MCP data inside declared boundaries", async () => {
  const reference = (name) =>
    readFile(
      new URL(`../skills/x-twitter-scraper/references/${name}`, import.meta.url),
      "utf8",
    );
  const [skill, draws, communities, setup, tools] = await Promise.all([
    readFile(new URL("../skills/x-twitter-scraper/SKILL.md", import.meta.url), "utf8"),
    reference("automate-twitter-giveaways.md"),
    reference("extract-x-community-data.md"),
    reference("mcp-setup.md"),
    reference("mcp-tools.md"),
  ]);

  assert.match(skill, /giveaways, draws/u);
  assert.match(skill, /meteredIrreversibleOperations/u);
  assert.match(draws, /metered draw creation and winner selection only when requested/u);
  assert.match(communities, /applicable legal basis/u);
  assert.match(communities, /privacy confirmation before estimating/u);
  assert.match(communities, /Never redistribute or target people/u);
  assert.match(setup, /flows stay outside this Skill/u);
  assert.match(setup, /Never create keys or wallets/u);
  assert.match(tools, /processes MCP requests as an external service/u);
  assert.match(tools, /Confirm before sending private or sensitive content/u);
  assert.match(tools, /retention and logging terms/u);
});

test("keeps identity exports and webhook transport inside privacy and TLS boundaries", async () => {
  const reference = (name) =>
    readFile(
      new URL(`../skills/x-twitter-scraper/references/${name}`, import.meta.url),
      "utf8",
    );
  const [draws, followers, webhooks] = await Promise.all([
    reference("draws.md"),
    reference("export-twitter-followers.md"),
    reference("webhooks.md"),
  ]);

  assert.match(draws, /exporting participant identifiers/u);
  assert.match(draws, /pseudonymize identifiers/u);
  assert.match(draws, /Never reuse draw data for profiling or targeting/u);
  assert.match(followers, /visible-data access for a documented/u);
  assert.match(followers, /privacy\s+confirmation before estimating/u);
  assert.match(followers, /Confirm authority and the applicable legal basis/u);
  assert.match(webhooks, /bind loopback HTTP only/u);
  assert.match(webhooks, /Terminate TLS at a trusted reverse proxy/u);
  assert.match(webhooks, /Forward only `POST \/webhook`/u);
  assert.match(webhooks, /Preserve the raw body and all signature headers/u);
});

test("keeps benchmark traces, giveaway entries, and support tickets confidential", async () => {
  const reference = (name) =>
    readFile(
      new URL(`../skills/x-twitter-scraper/${name}`, import.meta.url),
      "utf8",
    );
  const [benchmark, giveaways, workflows] = await Promise.all([
    reference("BENCHMARK.md"),
    reference("references/automate-twitter-giveaways.md"),
    reference("references/workflows.md"),
  ]);

  assert.match(benchmark, /Never persist secrets/u);
  assert.match(benchmark, /Redact personal\s+and confidential data/u);
  assert.match(benchmark, /Restrict trace access/u);
  assert.match(benchmark, /deletion date/u);
  assert.match(giveaways, /Give participants any required disclosure/u);
  assert.match(giveaways, /Confirm export fields/u);
  assert.match(giveaways, /Never publish unnecessary\s+personal data/u);
  assert.match(workflows, /confirm Xquik support as the destination/u);
  assert.match(workflows, /remove secrets and unnecessary personal data/u);
  assert.match(workflows, /Create the ticket only after confirmation/u);
});

test("requires a privacy check before X data work", async () => {
  const skill = await readFile(
    new URL("../skills/x-twitter-scraper/SKILL.md", import.meta.url),
    "utf8",
  );

  assert.match(skill, /Confirm an authorized purpose and applicable legal basis/u);
  assert.match(skill, /laws, X terms, consent rules, and disclosure rules/u);
  assert.match(skill, /Name recipients and a secure destination/u);
  assert.match(skill, /access controls, retention, and a deletion date/u);
  assert.match(skill, /Require confirmation after this check for private, bulk/u);
  assert.match(skill, /Keep every direct read bounded/u);
});

test("protects follower and mention reads with endpoint-specific controls", async () => {
  const endpoints = await readFile(
    new URL(
      "../skills/x-twitter-scraper/references/api-endpoints-x-api.md",
      import.meta.url,
    ),
    "utf8",
  );

  assert.match(endpoints, /Confirm the exact target username or user ID/u);
  assert.match(endpoints, /authorized purpose and applicable legal basis/u);
  assert.match(endpoints, /finite result cap and pagination limit/u);
  assert.match(endpoints, /intended recipients and secure destination/u);
  assert.match(endpoints, /Respect visibility restrictions and access controls/u);
  assert.match(endpoints, /separate confirmation before forwarding or exporting/u);
  assert.match(endpoints, /Never use a default or inferred account/u);
});

test("warns before MCP access, X writes, and webhook listener startup", async () => {
  const reference = (name) =>
    readFile(
      new URL(`../skills/x-twitter-scraper/references/${name}`, import.meta.url),
      "utf8",
    );
  const [endpoints, setup, webhooks] = await Promise.all([
    reference("api-endpoints.md"),
    reference("mcp-setup.md"),
    reference("webhooks.md"),
  ]);

  assert.match(endpoints, /Connected-account operations and X writes affect external accounts/u);
  assert.match(endpoints, /Treat these changes as\s+potentially irreversible/u);
  assert.match(endpoints, /confirm the exact\s+action, target connected X account, content, audience, and timing/u);
  assert.match(setup, /Xquik receives authenticated tool requests/u);
  assert.match(setup, /Review the OAuth consent screen and\s+tool list/u);
  assert.match(setup, /Grant only the access needed/u);
  assert.match(setup, /API key grants its documented access until revoked/u);
  assert.match(webhooks, /--confirmed-listener-scope/u);
  assert.match(webhooks, /process\.argv\.includes\(LISTENER_CONFIRMATION_FLAG\)/u);
  assert.match(webhooks, /"--confirmed-listener-scope" not in sys\.argv/u);
  assert.match(webhooks, /node server\.js --confirmed-listener-scope/u);
});

test("bounds extraction scope and webhook request bodies", async () => {
  const reference = (name) =>
    readFile(
      new URL(`../skills/x-twitter-scraper/references/${name}`, import.meta.url),
      "utf8",
    );
  const [extractions, webhooks] = await Promise.all([
    reference("types-extractions.md"),
    reference("webhooks.md"),
  ]);

  assert.match(extractions, /Never omit limits to request every available result/u);
  assert.match(extractions, /Treat an omitted `resultsLimit` as an unbounded extraction request/u);
  assert.match(extractions, /Get separate confirmation before exporting profile or\s+relationship data/u);
  assert.match(webhooks, /const MAX_BODY_BYTES = 1_048_576/u);
  assert.match(webhooks, /receivedBytes > MAX_BODY_BYTES/u);
  assert.match(webhooks, /length > MAX_BODY_BYTES/u);
  assert.match(webhooks, /http\.MaxBytesReader\(w, r\.Body, maxBodyBytes\)/u);
  assert.match(webhooks, /Enforce a 1 MiB body limit in the app and reverse proxy/u);
});

test("excludes account-management tools and protects cached style data", async () => {
  const reference = (name) =>
    readFile(
      new URL(`../skills/x-twitter-scraper/references/${name}`, import.meta.url),
      "utf8",
    );
  const [tools, styles, extractions] = await Promise.all([
    reference("mcp-tools.md"),
    reference("api-endpoints-tweet-style-cache.md"),
    reference("types-extractions.md"),
  ]);

  assert.match(tools, /excludes credential lifecycle, payment, checkout, and wallet/u);
  assert.match(tools, /Do not load, call, recommend, or describe those REST endpoints/u);
  assert.doesNotMatch(tools, /Guest wallet creation/u);
  assert.match(styles, /third-party usernames, Tweet text, and Tweet metadata/u);
  assert.match(styles, /who can access it/u);
  assert.match(styles, /retention period, and deletion\s+date/u);
  assert.match(styles, /Never reuse cached content for\s+profiling, targeting, or unrelated work/u);
  assert.match(extractions, /resultsLimit: number; \/\/ Finite maximum required by this Skill/u);
  assert.doesNotMatch(extractions, /Omit to request all available results/u);
});

test("keeps unbounded and research plans mechanically complete", async () => {
  const skill = await readFile(
    new URL("../skills/x-twitter-scraper/SKILL.md", import.meta.url),
    "utf8",
  );

  assert.match(skill, /For requests using `all`, `every`, or another unbounded scope/u);
  assert.match(skill, /`Output format: JSON or CSV`/u);
  assert.match(skill, /Do not choose defaults/u);
  assert.ok(
    skill.indexOf("For requests using `all`") < skill.indexOf("Endpoint details may change"),
    "critical unbounded-work rules must stay in the early response section",
  );
  assert.ok(
    skill.indexOf("Treat a research dataset") < skill.indexOf("Endpoint details may change"),
    "critical research estimate rules must stay in the early response section",
  );
  assert.match(skill, /"toolType": "tweet_search_extractor"/u);
  assert.match(skill, /"searchQuery": "<exact query and dates>"/u);
  assert.match(skill, /"resultsLimit": 200/u);
});

test("separates MCP OAuth handling and protects persistent monitors", async () => {
  const [skill, metadata, monitors] = await Promise.all([
    readFile(new URL("../skills/x-twitter-scraper/SKILL.md", import.meta.url), "utf8"),
    readFile(new URL("../skills/x-twitter-scraper/metadata.json", import.meta.url), "utf8"),
    readFile(
      new URL(
        "../skills/x-twitter-scraper/references/monitor-twitter-webhooks.md",
        import.meta.url,
      ),
      "utf8",
    ),
  ]);

  assert.match(skill, /oauthHandledByAgent: false/u);
  assert.match(skill, /OAuth is an MCP-client credential flow/u);
  assert.match(skill, /agent must never read,\s+copy, log, or store OAuth tokens/u);
  assert.match(skill, /REST calls made from this Skill use only `XQUIK_API_KEY`/u);
  assert.match(metadata, /"oauthHandledByAgent": false/u);
  assert.match(metadata, /"oauthHandledByMcpClient": true/u);
  assert.match(monitors, /Confirm authority and an applicable legal basis/u);
  assert.match(monitors, /affected-account consent when applicable/u);
  assert.match(monitors, /Collect only the needed event types and fields/u);
  assert.match(monitors, /retention period, deletion date, and tested delete path/u);
  assert.match(monitors, /Confirm this complete privacy scope before creation/u);
});

test("keeps MCP and X writes plan-only while validating webhook routes", async () => {
  const [skill, metadata, endpoints, webhooks] = await Promise.all([
    readFile(new URL("../skills/x-twitter-scraper/SKILL.md", import.meta.url), "utf8"),
    readFile(new URL("../skills/x-twitter-scraper/metadata.json", import.meta.url), "utf8"),
    readFile(
      new URL(
        "../skills/x-twitter-scraper/references/api-endpoints-x-api.md",
        import.meta.url,
      ),
      "utf8",
    ),
    readFile(
      new URL("../skills/x-twitter-scraper/references/webhooks.md", import.meta.url),
      "utf8",
    ),
  ]);

  assert.match(skill, /usage: setup-and-request-planning-only/u);
  assert.match(skill, /This Skill must never invoke\s+an MCP tool/u);
  assert.match(skill, /This Skill never executes an X account change/u);
  assert.match(skill, /accountChangeInstructions: plan-only/u);
  assert.match(metadata, /"accountChangeInstructions": "plan-only"/u);
  assert.match(metadata, /"mcpInvocationBySkill": false/u);
  assert.match(endpoints, /Most metered lookups use only `XQUIK_API_KEY`/u);
  assert.match(endpoints, /Only the private or account-context routes/u);
  assert.match(webhooks, /self\.path != "\/webhook"/u);
  assert.match(webhooks, /except json\.JSONDecodeError/u);
  assert.match(webhooks, /r\.URL\.Path != "\/webhook"/u);
  assert.match(webhooks, /if err := json\.Unmarshal\(payload, &event\); err != nil/u);
});

test("requires privacy and compliance checks before bulk comparison workflows", async () => {
  const guide = await readFile(
    new URL(
      "../skills/x-twitter-scraper/references/best-x-api-alternative.md",
      import.meta.url,
    ),
    "utf8",
  );

  assert.match(guide, /Check privacy and compliance before bulk work/u);
  assert.match(guide, /applicable legal basis/u);
  assert.match(guide, /jurisdiction-specific restrictions/u);
  assert.match(guide, /Obtain consent and give notice when required/u);
  assert.match(guide, /Exclude unnecessary sensitive data and profiling fields/u);
  assert.match(guide, /retention period, deletion date, and tested delete path/u);
  assert.match(guide, /Do not begin until the user confirms this complete scope/u);
  assert.match(guide, /legal and privacy\s+review before a production workload/u);
});

test("localizes required account facts outside English", async () => {
  const skill = await readFile(
    new URL("../skills/x-twitter-scraper/SKILL.md", import.meta.url),
    "utf8",
  );

  assert.match(skill, /exact sentences in every English scraping response/u);
  assert.match(skill, /Translate both\s+facts naturally when the response uses another language/u);
});

test("keeps MCP workflows as user-run plans", async () => {
  const setup = await readFile(
    new URL("../skills/x-twitter-scraper/references/mcp-setup.md", import.meta.url),
    "utf8",
  );

  assert.match(setup, /This Skill stops at setup and request planning/u);
  assert.match(setup, /It never invokes `explore` or\s+`xquik`/u);
  assert.match(setup, /The user runs calls through their chosen MCP client/u);
  assert.match(setup, /Workflow plan \| User-run steps/u);
  assert.match(setup, /Then run the write in the MCP client/u);
});

test("separates maintainer release work from the Skill runtime", async () => {
  const card = await readFile(
    new URL("../skills/x-twitter-scraper/skill-card.md", import.meta.url),
    "utf8",
  );

  assert.match(card, /prepares X account action plans/u);
  assert.match(card, /does not execute MCP calls or account-changing routes/u);
  assert.match(card, /Release verification belongs to a separate maintainer workflow/u);
  assert.match(card, /Maintainer tooling and file access are not\s+part of the Skill runtime/u);
  assert.match(card, /user runs the confirmed request outside this Skill/u);
  assert.match(card, /Return draft write payloads and persistence plans for review/u);
  assert.match(card, /Never execute them/u);
});

test("keeps the MCP tool reference plan-only and gates support tickets", async () => {
  const tools = await readFile(
    new URL("../skills/x-twitter-scraper/references/mcp-tools.md", import.meta.url),
    "utf8",
  );

  assert.match(tools, /plans for calls the user runs in an MCP client/u);
  assert.match(tools, /This Skill\s+never invokes `explore` or `xquik`/u);
  assert.match(tools, /Plan API spec searches with `explore`/u);
  assert.match(tools, /Plan API requests with `xquik`/u);
  assert.match(tools, /before showing a user-run `xquik` request/u);
  assert.match(tools, /Only when the user explicitly names Xquik support tickets/u);
  assert.match(tools, /Never use this for generic support/u);
  assert.match(tools, /User-run workflow plans/u);
});

test("keeps the Agents SDK example configuration-only", async () => {
  const setup = await readFile(
    new URL("../skills/x-twitter-scraper/references/mcp-setup.md", import.meta.url),
    "utf8",
  );

  assert.match(setup, /Only the MCP server setting is returned/u);
  assert.match(setup, /It makes no request/u);
  assert.match(setup, /outside this Skill/u);
  assert.match(setup, /def build_xquik_server/u);
  assert.doesNotMatch(setup, /Runner\.run/u);
  assert.doesNotMatch(setup, /async with MCPServerStreamableHttp/u);
});
