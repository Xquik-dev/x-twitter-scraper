# Bundle X API source review

- Reviewed: 2026-08-22
- Source: [Bundle X API](https://bundle.social/x-api)
- Source type: Product documentation and pricing summary
- Page update shown: July 2026

## Audience

Product teams and agencies adding scheduled multi-network publishing.

## Questions answered

- Can one request schedule an X post?
- How are connected accounts and media handled?
- What changes with the connected account's X subscription?
- How are X posting charges passed through?

## Claims recorded

Bundle says it handles OAuth, media, queues, statuses, and 15 networks. Its
account count, support response, and official-API claims need separate evidence.

## Evidence and examples

The page includes a TypeScript scheduling request. It documents account
connection, upload IDs, status states, reply controls, and tier-dependent limits.
This is a publishing layer, not an X data collection service.

## Pricing record

The page states `$0.015` per X post and `$0.20` for a post with a link. It says
these charges pass through without markup. Subscription and prepaid balance
rules still need the primary pricing contract.

## Structure and requested action

The page opens with a quick request. It then explains direct integration costs,
workflow, billing, capabilities, limits, examples, FAQs, and related pages.

## Xquik lesson

Lead with a real request. State which costs come from X and which come from the
service. Explain connected-account limits before users compose content.
