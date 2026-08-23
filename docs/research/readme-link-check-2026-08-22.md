# README link check

Checked on 2026-08-22.

`npm run check:readme-links` checked all 9 root README files. It deduplicated
their links and reached all 24 external destinations. No destination returned
a missing-page or server-error status. No destination rejected the checker.

The check reached the exact Framer video link and thumbnail URL. The contract
check also requires the thumbnail to stay nested inside the video link.

`tests/readme-translations.test.mjs` separately resolves every local link in
all 9 files.

Recheck links before a release. A successful response proves reachability at
the check time. It does not prove every statement on the destination page.
