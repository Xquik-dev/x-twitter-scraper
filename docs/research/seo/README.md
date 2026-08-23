# Search question and keyword evidence

Last reviewed: 2026-08-22

The question map covers all 149 rows from both question CSV files. It maps 112
relevant prompts to one answer guide. It skips 37 rows with a recorded reason.
Each row has its source file, row number, locale, intent, fingerprint, topic,
destination, and coverage status.

The keyword map covers all 3,484 input rows. Every recorded volume is above
zero. Normalization produces 3,470 unique phrases and 14 duplicate groups.

The keyword CSV contains no locale field. Search volume depends on the selected
location and network. [Google Ads explains this scope](https://support.google.com/google-ads/answer/3022575?hl=en).
[Semrush also ties volume to its selected database](https://www.semrush.com/kb/683-what-is-search-volume-in-semrush).
The map finds 450 relevant phrases. It targets none of them. Add a
locale-specific source before using a volume value for any language.

## Files

- [Question map](question-map-2026-08-22.json)
- [Keyword map](keyword-map-2026-08-22.json)
- Generator: `scripts/build-seo-maps.mjs`
- Check: `tests/seo-evidence.test.mjs`

Run the generator with three read-only inputs:

```bash
node scripts/build-seo-maps.mjs \
  ai_models-x_api_alternative-en-us-22-08-2026.csv \
  ai_models-twitter_api_alternative-en-us-22-08-2026.csv \
  keywords-unified-deduplicated.csv
```

The generator stores only input basenames and SHA-256 hashes. It never stores a
local path. Question text stays in the source files. The map uses fingerprints
to avoid copying unverified source wording into repository copy.
