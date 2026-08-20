# Xquik TypeScript types: download media

```typescript

interface DownloadMediaRequest {
  tweetInput?: string;  // Tweet URL or numeric tweet ID for 1 tweet.
  tweetIds?: string[];  // Tweet URLs or IDs for up to 50 tweets. Use exactly 1 input field.
}

interface DownloadMediaSingleResponse {
  tweetId: string;      // Resolved tweet ID
  galleryUrl: string;   // Shareable gallery page URL
  cacheHit: boolean;    // True when the cache served the result without usage.
}

interface DownloadMediaBulkResponse {
  galleryUrl: string;   // Combined gallery page URL
  totalTweets: number;  // Number of tweets processed
  totalMedia: number;   // Total media items downloaded
}

```
