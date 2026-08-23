# Xquik giveaway draws

Run giveaway draws from tweet replies with explicit filters and a stable draw ID.

## Create draw

Call `POST /draws` with a required `tweetUrl` and optional filters:

| Field | Type | Description |
|-------|------|-------------|
| `tweetUrl` | string | Required full tweet URL, such as `https://x.com/user/status/ID` |
| `winnerCount` | number | Winners to select; defaults to 1 |
| `backupCount` | number | Backup winners to select |
| `uniqueAuthorsOnly` | boolean | Count only one entry per author |
| `mustRetweet` | boolean | Require participants to have retweeted |
| `mustFollowUsername` | string | Username participants must follow |
| `filterMinFollowers` | number | Minimum follower count |
| `filterAccountAgeDays` | number | Minimum account age in days |
| `filterLanguage` | string | Language code, such as `"en"` |
| `requiredKeywords` | string[] | Words that must appear in the reply |
| `requiredHashtags` | string[] | Required hashtags, such as `["#giveaway"]` |
| `requiredMentions` | string[] | Required usernames, such as `["@xquik"]` |

## Create and review a draw

```javascript
requireExplicitConfirmation(
  "the tweet, filters, 3 winners, 2 backups, live usage estimate, and retention",
);

// Create a filtered draw.
const draw = await xquikFetch("/draws", {
  method: "POST",
  body: JSON.stringify({
    tweetUrl: "https://x.com/burakbayir/status/1893456789012345678",
    winnerCount: 3,
    backupCount: 2,
    uniqueAuthorsOnly: true,
    mustRetweet: true,
    mustFollowUsername: "burakbayir",
    filterMinFollowers: 50,
    filterAccountAgeDays: 30,
    filterLanguage: "en",
    requiredHashtags: ["#giveaway"],
  }),
});

// Get the winners and draw details.
const details = await xquikFetch(`/draws/${draw.id}`);
// details.winners: [
//   { position: 1, authorUsername: "winner1", tweetId: "...", isBackup: false },
//   ...
// ]

requireExplicitConfirmation(
  "exporting participant identifiers, winner identifiers, and applied filters",
);

// Export the results.
const exportUrl = `${BASE}/draws/${draw.id}/export?format=csv`;
```

Export only required fields. Redact usernames or pseudonymize identifiers when
the review does not need direct identity. Restrict access and set a deletion
date. Never reuse draw data for profiling or targeting.

## Twitter giveaway draw usage

Metered per participant entry.
