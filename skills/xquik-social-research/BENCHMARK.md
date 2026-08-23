# Skill benchmark

The release benchmark compares this Skill with a no-Skill baseline.
It runs every case in `evals/evals.json` in a clean, read-only context.
Variable cases run more than once.

The gate checks activation, output, commands, permissions, files, timing,
tokens, and fixed-schema qualitative grades. Every run with the Skill must
pass. The Skill must beat its baseline without extra permissions or files.
Human review must find no action to take.

See [the dated benchmark evidence](../../docs/research/skill-evals/README.md).
