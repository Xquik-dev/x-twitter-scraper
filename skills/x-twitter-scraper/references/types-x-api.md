# Xquik TypeScript Types: X API

```typescript

interface TweetMediaItem {
  mediaUrl: string;
  type: string;       // "photo" | "video" | "animated_gif"
  url: string;
  allowDownload?: boolean;
  altText?: string;
  aspectRatio?: number[];
  availabilityStatus?: string;
  displayUrl?: string;
  durationMillis?: number;
  expandedUrl?: string;
  faceRects?: Record<string, unknown>;
  focusRects?: Array<Record<string, number>>;
  height?: number;
  id?: string;
  indices?: number[];
  mediaKey?: string;
  monetizable?: boolean;
  sizes?: Record<string, unknown>;
  videoVariants?: Array<Record<string, unknown>>;
  width?: number;
}

interface Tweet {
  id: string;
  text: string;
  author?: TweetAuthor;
  createdAt?: string;
  retweetCount: number;
  replyCount: number;
  likeCount: number;
  quoteCount: number;
  viewCount: number;
  bookmarkCount: number;
  media?: TweetMediaItem[];
  article?: Record<string, unknown>;
  card?: Record<string, unknown>;
  communityNote?: Record<string, unknown>;
  edit?: Record<string, unknown>;
  isTranslatable?: boolean;
  noteTweet?: Record<string, unknown>;
  place?: Record<string, unknown>;
  possiblySensitive?: boolean;
  previousCounts?: Record<string, number>;
  viewState?: string;
}

interface ProfileRichness {
  affiliatesHighlightedLabel?: Record<string, unknown>;
  businessAccountAffiliatesCount?: number;
  creatorSubscriptionsCount?: number;
  hasGraduatedAccess?: boolean;
  hasHiddenSubscriptionsOnProfile?: boolean;
  highlightsInfo?: Record<string, unknown>;
  identityVerification?: Record<string, unknown>;
  isProfileTranslatable?: boolean;
  parodyCommentaryFanLabel?: string;
  profileDescriptionLanguage?: string;
  profileImageShape?: string;
  profileInterstitialType?: string;
  profileSortEnabled?: boolean;
  profileTranslatorType?: string;
  superFollowEligible?: boolean;
}

interface TweetAuthor extends ProfileRichness {
  id: string;
  username: string;
  name: string;
  followers: number;
  verified: boolean;
  profilePicture?: string;
}

interface TweetSearchResult {
  id: string;
  text: string;
  createdAt?: string;
  likeCount: number;    // Zero can mean X did not report the count
  retweetCount: number; // Zero can mean X did not report the count
  replyCount: number;   // Zero can mean X did not report the count
  media?: TweetMediaItem[];
  author?: UserProfile;
}

interface UserProfile extends ProfileRichness {
  id: string;
  username: string;
  name: string;
  description?: string;
  followers?: number;
  following?: number;
  verified?: boolean;
  profilePicture?: string;
  location?: string;
  createdAt?: string;
  statusesCount?: number;
}

interface FollowerCheck {
  sourceUsername: string;
  targetUsername: string;
  isFollowing: boolean;
  isFollowedBy: boolean;
}

```

Optional fields appear only when X supplies them. Never infer missing values.
Fetching-account action and permission state stays private. Follow-relationship
state appears only through an explicitly requested
`GET /api/v1/x/followers/check` lookup.

Reply endpoints expose replies visible through Xquik. Handle
`424 replies_incomplete` with `conversation_id:<tweet_id>` search.
