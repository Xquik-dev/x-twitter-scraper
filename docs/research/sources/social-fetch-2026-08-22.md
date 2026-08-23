# Social Fetch X source review

- Reviewed: 2026-08-22
- Source: [Social Fetch X API](https://www.socialfetch.dev/platforms/twitter)
- Source type: Product documentation and pricing summary

## Audience

Developers who need a small, fixed set of X read routes.

## Questions answered

- Which nine routes are available?
- How do lookup outcomes and request metadata work?
- What does each route cost in credits?
- How are empty or inaccessible results represented?

## Claims recorded

Social Fetch describes profiles, timelines, posts, replies, transcripts, search,
hashtags, and communities. It says one API key covers all routes.

## Evidence and examples

The page names each route and its main parameters. It documents a `{ data,
meta }` envelope, typed lookup status, request ID, and charged-credit field.

## Pricing record

The page says successful routes cost one or two credits. Each page of a
paginated route is billed. The pricing page is still needed to convert credits
into currency. The response field is the final charge record.

## Structure and requested action

The page explains route coverage, setup, billing, official API fit, and FAQs.
Calls to action lead to signup, route docs, and credit packs.

## Xquik lesson

Document empty, missing, and inaccessible outcomes. Put request IDs and billing
metadata in the first response example.
