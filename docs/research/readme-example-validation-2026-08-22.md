# README example validation

Checked on 2026-08-22.

This record separates schema checks from credential-backed production runs.
No sample result values were added to the README.

## Current checks

| Example | Source checked | Result | Limit |
| --- | --- | --- | --- |
| cURL, TypeScript fetch, and Python requests | [Live OpenAPI](https://xquik.com/openapi.json) | Search path, 7 query fields, required page fields, and required Tweet counters match. | No credential-backed response was fetched. |
| TypeScript SDK | [npm 0.12.4](https://www.npmjs.com/package/x-twitter-scraper), [source commit](https://github.com/Xquik-dev/x-twitter-scraper-typescript/commit/d4e2e4d03ffcc86bdd77bfd184e7207633b50ae5) | Default export, `client.x.tweets.search`, and each example parameter match. | No package call was sent. |
| MCP | [Local tool guide](../../skills/x-twitter-scraper/references/mcp-tools.md), [setup guide](../../skills/x-twitter-scraper/references/mcp-setup.md) | Hosted URL, `xquik.request`, path, and query object match. | No authenticated hosted call was sent. |
| CLI | [v0.13.3](https://github.com/Xquik-dev/x-twitter-scraper-cli/releases/tag/v0.13.3), [source commit](https://github.com/Xquik-dev/x-twitter-scraper-cli/commit/13c294c68a37eca5d16d49c871f0db42b5dfb9fc) | Command, key variable, `--q`, `--language`, `--min-faves`, and `--limit` match. | The review corrected `--min-likes` to `--min-faves`. |
| Apify Actor | [Actor](https://apify.com/xquik/x-tweet-scraper), build `1.12.108` | `searchTerms`, `lang`, `min_faves`, reply and repost filters, `maxItems`, `outputVariant`, and `fieldStyle` match the input schema. | No paid run was started. |
| Extraction estimate | [Live OpenAPI](https://xquik.com/openapi.json) | Path, request fields, and 5 required response fields match. | No credential-backed estimate was sent. |
| Keyword monitor | [Live OpenAPI](https://xquik.com/openapi.json) | Path and required `query` and `eventTypes` fields match. | No persistent monitor was created. |

The Python SDK source was also checked at
[commit `433d0bc`](https://github.com/Xquik-dev/x-twitter-scraper-python/commit/433d0bc5a6cc406d851fc3930722a30cc561418d).
The README uses direct `requests`, so its Python example does not depend on the
SDK method layout.

## Reproduce

```bash
npm run check:readme-contract
node --test tests/readme-examples.test.mjs
node --test tests/readme-translations.test.mjs
```

The live checker validates the current operation count, search request and
response, extraction estimate, keyword monitor, 37 resource paths, all 23
extraction types, the Framer media block, and the corrected CLI flag. The
translation check requires the same 16 examples in all 9 README files.

## Remaining proof

- Run the quick request with a real Xquik key in a clean environment.
- Run the estimate and record its returned field names.
- Run a funded filter and dedupe job. Compare its credit change.
- Avoid creating a monitor only for documentation testing. It has ongoing cost.
