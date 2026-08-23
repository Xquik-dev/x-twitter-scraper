# SkillSpector security report

The dated scan evidence stays outside this Skill directory. This keeps a scan
result from changing the directory it describes.

The release scan covers this complete directory. It runs the current stable
SkillSpector static checks and a semantic scan. The gate reads the report, not
the process exit code. It accepts only `SAFE`, complete analysis, and zero
active findings.

See [the current results](../../docs/research/skill-security/results/README.md).
Refresh them after any file in this directory changes.
