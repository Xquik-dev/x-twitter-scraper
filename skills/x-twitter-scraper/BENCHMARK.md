# Skill benchmark

The release benchmark runs every case in `evals/evals.json` twice:

- once with this Skill
- once without this Skill

Variable cases run more than once. Each run uses a clean, read-only context.
The runner stores JSONL traces, commands, timing, tokens, outputs, and grades.
A fixed JSON schema grades outcome, process, style, and efficiency.

Treat prompts, outputs, commands, and traces as sensitive. Use synthetic inputs
unless a case requires supplied data. Never persist secrets. Redact personal
and confidential data before storage. Restrict trace access and record a
deletion date. Never share raw traces outside the review team.

A release passes only when:

- every run with the Skill passes
- the Skill beats its baseline
- no run requests extra permissions
- no run creates a file
- every qualitative grade passes
- human review finds no action to take

See [the dated benchmark evidence](../../docs/research/skill-evals/README.md).
