# README translation guide

`README.md` is the source. Keep every translated README beside it at the
repository root. GitHub visitors can switch languages without changing folders.

This process follows GitHub's
[README guidance](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)
and the tldr-pages
[translation workflow](https://github.com/tldr-pages/tldr/blob/main/CONTRIBUTING.md).
Translate from English. Use machine translation only as a draft. A fluent
reviewer must check every sentence before a translation is marked verified.
See the dated [practice review](research/multilingual-readme-practices-2026-08-22.md)
for the source findings and repository decisions.

## Files

| Language | Code | File |
| --- | --- | --- |
| English | `en` | `README.md` |
| Spanish | `es` | `README.es.md` |
| Turkish | `tr` | `README.tr.md` |
| Simplified Chinese | `zh-CN` | `README.zh-CN.md` |
| Japanese | `ja` | `README.ja.md` |
| Korean | `ko` | `README.ko.md` |
| German | `de` | `README.de.md` |
| French | `fr` | `README.fr.md` |
| Italian | `it` | `README.it.md` |

Use ISO 639-1 codes. Add a region only when language or script differs. Use a
hyphen in regional tags, such as `zh-CN`.

## Source revision

Each translation starts with this comment:

```html
<!-- Translation source SHA-256: <README.md SHA-256>. -->
```

The translation check computes the English hash and compares it with all 8
comments. An English edit makes every translation stale until each file is
reviewed and its hash changes.

## Shared structure

Keep all 9 language links in the same order. Bold only the current language.
Use root-level sibling paths such as `README.tr.md`.

Keep all 19 main sections and all 16 fenced examples. The examples must match
English byte for byte. This prevents translated commands from drifting. Keep
the shared documentation, billing, extraction, MCP, security, contribution,
and translation links in every file.

Keep the Framer link and thumbnail block byte for byte. Keep every Apify review
in its original English. If a reviewer adds a translation later, place the
original and translation beside each other. Label the translation.

Each translation must answer the same visitor decisions:

1. What Xquik does.
2. Which credentials scraping needs.
3. How to run the first bounded request.
4. What the response, cursor, and bill mean.
5. When Xquik fits better than another option.
6. Which REST, SDK, MCP, CLI, Skill, and Actor clients exist.
7. How bulk jobs, filters, deduplication, and exports work.
8. How monitors, events, and signed webhooks work.
9. Which X account tasks require a connected X account.
10. Where to find pricing evidence, SDKs, docs, and help.
11. Which exact Apify reviews support the testimonial section.

Keep commands, code, URLs, paths, variables, header names, field names, versions,
dates, and measured numbers unchanged. Translate headings, prose, link labels,
and table labels. Keep `Skill`, REST, API, MCP, SDK, HMAC, JSON, OAuth, Xquik,
Twitter, and X unchanged.

Use the [shared glossary](translation-glossary.md). Use neutral Latin American
Spanish and conversational Turkish. Write Simplified Chinese in
`README.zh-CN.md`. Prefer short sentences and concrete examples in every
language.

## Review workflow

1. Edit `README.md` first.
2. Record its new SHA-256 value.
3. Update every affected translation from English.
4. Preserve all 19 main sections and 16 bounded examples.
5. Ask a fluent reviewer to check meaning, tone, safety, billing, and legal text.
6. Record the reviewer in [translation-reviews.md](translation-reviews.md).
7. Run `bun run test`.
8. Preview every README. Check tables, links, wrapping, and code fences.

Never mark a language verified without a reviewer name, date, source hash, and
review reference. A pending review stays visible in the register.
