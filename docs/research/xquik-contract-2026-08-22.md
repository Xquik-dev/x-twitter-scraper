# Xquik contract review

Reviewed on 2026-08-22. Rechecked on 2026-08-23.

## Sources

- [Live OpenAPI document](https://xquik.com/openapi.json)
- [Billing guide](https://docs.xquik.com/guides/billing.md)
- [Extraction workflow](https://docs.xquik.com/guides/extraction-workflow.md)
- [Error handling](https://docs.xquik.com/guides/error-handling.md)

## Confirmed

- The live OpenAPI document contains 128 HTTP operations.
- Tweet search accepts an Xquik API key or supported guest payment route.
- Tweet search does not require an official X developer account.
- Tweet search does not require connecting or using an X account.
- Connected X account actions use a separate contract.
- Tweet search charges 1 credit per returned Tweet.
- Most extraction rows cost 1 credit. Article rows cost 5 credits.
- Estimates do not consume credits.
- Stored extraction reads and exports do not consume credits.
- User-result filters run before billing.
- Extraction requests can merge duplicates across targets.
- Extraction estimates return required and available credit counts.
- Result limits can fall to the affordable count.
- Zero affordable paid results return `402`.
- Active monitors cost 21 credits per hour.
- Stored events and webhook delivery are included with monitor billing.
- Subscription and top-up credits carry over.

## Live unauthenticated check

The following read-only request ran without credentials:

```bash
curl --get 'https://xquik.com/api/v1/x/tweets/search' \
  --data-urlencode 'q=machine learning lang:en' \
  --data-urlencode 'limit=1'
```

It returned `401` with `error: unauthenticated`. The response explained the
guest-wallet path. It did not start checkout or charge anything.

## Open evidence gaps

The live docs do not connect extraction deduplication to the final credit
deduction. They also do not state one billing rule for every partial response.

Do not claim that every duplicate is free yet. Do not claim that every partial
or empty outcome is free yet. Prove each statement with a funded test account
and billing before-and-after evidence.

## Required billing test

Use one funded test account in an isolated environment:

1. Record the starting credit balance.
2. Estimate a bounded filter-heavy extraction.
3. Run the exact estimated request.
4. Save candidate, rejected, duplicate, delivered, and billed counts.
5. Record the final credit balance.
6. Repeat for empty, partial, failed, and retried outcomes.
7. Confirm `starting - final = eligible unique delivered rows`.

No credential was available during this review. The billing proof remains open.
