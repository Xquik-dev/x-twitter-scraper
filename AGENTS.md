# Agent rules

## Negative diff (unbreakable)

Every commit must be net-negative. `git show --shortstat` must show more deletions than insertions. This applies to every commit: source, docs, tests, generated files, refactors, and chores. No exceptions.

Every commit must also reduce net handwritten source LOC. Do not add a file unless the same commit deletes more handwritten lines than it adds.

If the change cannot land with a negative diff, do not commit it. Delete or shrink first.
