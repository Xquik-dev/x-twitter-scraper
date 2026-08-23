# Multilingual README practices

Reviewed on 2026-08-22.

## Sources

- [GitHub README guidance](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)
- [tldr contribution and translation rules](https://github.com/tldr-pages/tldr/blob/main/CONTRIBUTING.md)

## Findings

GitHub treats the README as a visitor's starting point. It recommends covering
the project's purpose, value, setup, help, and maintainers. Relative repository
links work in clones and across branches. GitHub truncates content after 500
KiB.

tldr keeps English as the source for translations. It adds a region only when
language or script differs. Its current rules allow machine translation only
as a reference. A confident reader must proofread every translated page. It
also recommends syncing translations after English changes.

## Repository decisions

- Keep English and 8 translated READMEs at the repository root.
- Use native language names in one switcher. Do not use flags.
- Link repository files with relative paths.
- Record the English SHA-256 in every translation.
- Keep commands, code, routes, fields, versions, and URLs unchanged.
- Maintain one glossary for repeated technical terms.
- Test sections, examples, links, hashes, claims, reviews, and Framer media.
- Keep every language marked `Pending` until a fluent reviewer signs it off.

## Open gate

Automation catches drift. It cannot prove native fluency. All 9 READMEs still
need named fluent reviewers and dated review references.
