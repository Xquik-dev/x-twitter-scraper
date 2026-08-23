# Skill eval evidence

Reviewed on 2026-08-24.

This directory retains the final benchmark summary for each complete Skill.
Raw traces stay in ignored `skills/_artifacts/evals/` directories. The tracked
summary records source hashes, case counts, repeats, pass rates, variance,
timing, tokens, commands, file changes, rubric grades, and human feedback.

[The dated benchmark](benchmark-2026-08-23.json) records 2 clean-context rounds
for each Skill. Every guided run passed. Both Skills beat their no-Skill
baselines without extra permissions or created files.

The main Skill has one fully automated clean rubric. A second round needed one
rule correction. The old rubric penalized an adjacent no-trigger case for not
using another Skill. The corrected rubric checks that case against its
activation, scope, and expected output.
