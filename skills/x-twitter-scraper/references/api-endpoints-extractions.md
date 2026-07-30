# Xquik REST API Endpoints: Extractions

## Safety Boundary

Extraction creation and export can collect and disclose large datasets. First
confirm the lawful purpose, exact target, minimum fields, `resultsLimit`,
recipients, and retention period. Estimate usage, show the estimate, and obtain
explicit approval for that exact bounded job. Never use extraction for private
data, surveillance, discrimination, harassment, doxxing, or unrelated
secondary use.

### Create Extraction

```
POST /extractions
```

Run a bulk data extraction job. See `references/extractions.md` for all 23 tool types.

**Approval required:** Call the estimate endpoint with the same body first.
Create the job only after the user approves the target, bound, fields, usage,
and data-handling plan.

**Body:**
```json
{
  "toolType": "reply_extractor",
  "targetTweetId": "1893704267862470862",
  "resultsLimit": 500
}
```

`resultsLimit` (optional): Maximum results to extract. Stops early instead of fetching all data. Useful for controlling usage.

**Tweet Search Filters** (`tweet_search_extractor` only):

| Field | Type | Description |
|-------|------|-------------|
| `fromUser` | string | Author username |
| `toUser` | string | Directed to user |
| `mentioning` | string | Mentions user |
| `language` | string | Language code (e.g., `en`) |
| `sinceDate` | string | Start date (YYYY-MM-DD) |
| `untilDate` | string | End date (YYYY-MM-DD) |
| `mediaType` | string | `images`, `videos`, `gifs`, or `media` |
| `minFaves` | number | Minimum likes |
| `minRetweets` | number | Minimum retweets |
| `minReplies` | number | Minimum replies |
| `verifiedOnly` | boolean | Verified authors only |
| `replies` | string | `include`, `exclude`, or `only` |
| `retweets` | string | `include`, `exclude`, or `only` |
| `exactPhrase` | string | Exact match text |
| `excludeWords` | string | Comma-separated words to exclude |
| `advancedQuery` | string | Raw X search operators appended to query |

These filters are converted to X search operators and combined with `searchQuery`.

**Response:**
```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "toolType": "reply_extractor",
  "status": "running"
}
```

### Estimate Extraction

```
POST /extractions/estimate
```

Preview usage before running. Same body as create.

**Response:**
```json
{
  "allowed": true,
  "creditsAvailable": "50000",
  "creditsRequired": "150",
  "source": "replyCount",
  "estimatedResults": 150
}
```

### List Extractions

```
GET /extractions
```

Cursor-paginated. Filter by `status` and `toolType`.

### Get Extraction

```
GET /extractions/{id}
```

Returns job details with paginated results (up to 1,000 per page).

### Export Extraction

```
GET /extractions/{id}/export?format=csv
```

Formats: `csv`, `json`, `md`, `md-document`, `pdf`, `txt`, `xlsx`. 100,000 row limit (PDF 10,000). Exports include enrichment columns not in the API response.

**Privacy warning:** Confirm the exact format, minimum fields, recipient,
storage location, and retention period. Review enrichment columns before
sharing. Delete the export when the approved purpose ends.

---
