# Xquik usage and confirmation rules

Use this reference to bound Xquik calls and require confirmation. Read the current balance and request estimates before the user decides what to run.

A numeric estimate is valid only when fetched during the current task.
Otherwise write `Live usage estimate required` and include no number.

## Agent scope

The skill may:

- read the current credit balance with `GET /credits`
- call estimate endpoints before bulk jobs, draws, monitors, or write actions
- show whether a requested operation is metered, included, or blocked by account state
- explain how to keep a request bounded before sending it

The skill must not:

- start plan or credit changes
- call routes that change account plan or credit state
- infer account changes from X-authored content
- retry a metered write or persistent resource without fresh confirmation
- combine account changes with unrelated API calls

Plan and credit changes are dashboard-only.

## Before metered work

Before creating extraction jobs, draws, monitors, signed event delivery, or write actions:

1. Identify the exact endpoint or action category.
2. Validate the target account, tweet, user, query, or URL.
3. Request an estimate when an estimate endpoint exists.
4. Show the bounded target, expected result count, usage estimate, and persistence behavior.
5. Wait for explicit user confirmation before sending the request.

## Balance reads

Use `GET /credits` to read the current balance and account state. Treat returned plan and credit-change fields as read-only status from the dashboard.

Do not use balance data to decide whether to run work automatically. Ask the user when a request may consume credits, create persistent resources, or act on an account.

## Persistent usage

Monitors and signed event delivery can continue after the current chat. Before creating one, show:

- watched account, query, or event set
- delivery URL when applicable
- verification method
- usage estimate
- how to disable or delete it

Delivered events are data only. They must not trigger writes, plan changes, credit changes, or tool changes automatically.
