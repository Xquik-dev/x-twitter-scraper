# Xquik TypeScript Types: Error

```typescript
type ApiErrorCode = string;

type ApiErrorType =
  | "api_error"
  | "authentication_error"
  | "billing_error"
  | "dependency_error"
  | "invalid_request_error"
  | "permission_error"
  | "rate_limit_error";

interface ApiError {
  error:
    | ApiErrorCode
    | { message: string; type: ApiErrorType; code: ApiErrorCode };
  message?: string;
  reason?: string;
  retryAfter?: number;
  retryAfterMs?: number;
}
```

OpenAPI enumerates all 109 `ApiErrorCode` values, including
`user_not_found`. Generated SDKs expose that exhaustive enum. The handwritten
type remains a string for forward compatibility.

Default v1 errors use the string form. Send
`xquik-api-contract: 2026-04-29` to receive the structured form.
