# Xquik REST API Endpoints: Extractions

## Safety Boundary

Extraction creation and export can collect and disclose large datasets. First
confirm the lawful purpose, exact target, `resultsLimit`, recipients, and
retention period. Estimate usage, show the estimate, and obtain explicit
approval for that exact bounded job. Never use extraction for private data,
surveillance, discrimination, harassment, doxxing, or unrelated secondary use.
Extraction history and results are account-scoped private reads. Require
exact-scope approval before listing jobs or retrieving results.

### Create Extraction

```
POST /extractions
```

Run a bulk data extraction job. See `references/extractions.md` for all 23 tool types.

**Approval required:** Call the estimate endpoint with the same body first.
Create the job only when the estimate returns `allowed: true`. Then require
approval for the target, bound, usage, and data-handling plan.

**Body:**
```json
{
  "toolType": "reply_extractor",
  "targetTweetId": "1893704267862470862",
  "resultsLimit": 500
}
```

The API accepts an omitted `resultsLimit`. This Skill must always send an
explicit finite positive bound. The bound stops early and limits usage.

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

**Private read:** Show the exact account, purpose, requested filters, and page
scope. Also show downstream recipients and the retention plan. List jobs only
after explicit approval for that exact read.

### Get Extraction

```
GET /extractions/{id}
```

Returns job details with paginated results (up to 1,000 per page).

**Private read:** Show the exact account, job ID, purpose, and page scope. Also
show downstream recipients and the retention plan. Retrieve results only after
explicit approval for that exact read.

### Export Extraction

```
GET /extractions/{id}/export?format=csv
```

Formats: `csv`, `json`, `md`, `md-document`, `pdf`, `txt`, `xlsx`. 100,000 row limit (PDF 10,000). Exports include enrichment columns not in the API response.

**Approval required:** The export endpoint cannot project rows or fields. Set
the smallest approved `resultsLimit` when creating the job. Before export, show
the exact account, job ID, purpose, and format. Describe the full fixed-dataset
scope with its row count, schema, and field list. Show only a bounded preview,
including enrichment columns and risk, before approval. Show all downstream
recipients, storage location, and retention period. Materialize or
transmit the complete dataset only after explicit approval. Block exports that
exceed the approved purpose. Delete the export when the approved purpose ends.

---
