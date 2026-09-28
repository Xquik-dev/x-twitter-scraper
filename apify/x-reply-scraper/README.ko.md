<p align="center">
  <a href="README.md">English</a> ·
  <a href="README.es.md">Español</a> ·
  <a href="README.tr.md">Türkçe</a> ·
  <a href="README.zh-CN.md">简体中文</a> ·
  <a href="README.ja.md">日本語</a> ·
  <strong>한국어</strong> ·
  <a href="README.de.md">Deutsch</a> ·
  <a href="README.fr.md">Français</a> ·
  <a href="README.it.md">Italiano</a>
</p>

<table align="center"><tr><td align="center">
<a href="https://youtu.be/4UOSpoOoC3Y?t=367"><img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" width="720" alt="Framer가 Xquik MCP를 코딩 에이전트에 연결하는 모습"></a><br>
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">Framer가 Xquik 스크레이퍼를 Claude Code, Codex, Cursor 등과 함께 사용하는 방법을 6:07부터 보세요.</a>
</td></tr></table>

Xquik은 세계에서 가장 빠르고 저렴한 X(Twitter) 스크레이퍼 서비스이며, 가장
완전한 X 데이터를 제공합니다. Xquik의 X Reply Scraper는 답글(댓글) & 대화 전체를
수집합니다. 다른 Apify Actor는 대부분 필터링이나 중복 제거 전에 요금을
부과합니다. Xquik은 **필터에 맞고 중복되지 않은 결과를 전달했을 때만** 요금을
받습니다.

모든 Apify 요금제에서 **전달된 행 1개당 $0.00015**로 X(Twitter) 답글을
스크랩하세요. 게시물(트윗) URL, 게시물 ID, 프로필 URL 또는 사용자 아이디를
붙여넣으세요. 답글, 대화, 작성자, 참여 지표, 엔티티 & 미디어 URL을 내보낼 수
있습니다. Apify 플랫폼 사용료는 Apify가 따로 청구합니다. X 로그인은 필요
없습니다. 필터는 데이터셋에 기록하기 전에 실행되므로 전달된 행에만 요금을
냅니다.

> Xquik은 독립적인 제3자 서비스입니다. X Corp와 제휴 관계가 없습니다.
> "Twitter"와 "X"는 X Corp의 상표입니다.

## 이 Twitter 답글 스크레이퍼는 무엇을 하나요?

Xquik의 X Reply Scraper는 공개 답글 & 답글 대화를 수집합니다. 게시물 1개, 대량
URL 목록, 게시물 ID & 사용자 답글 타임라인을 처리합니다.

감정 분석, 고객 피드백 & 커뮤니티 연구에 쓰세요. 답글 순위 매기기, 리드 발굴,
모더레이션 검토 & 대화 데이터셋 구축에도 쓸 수 있습니다.

### 답글 수집 동작

- 자동 모드는 직접 답글 결과가 불완전하면 계속 수집합니다.
- `collectionStrategy`는 답글 작업에 따라 고를 수 있는 모드 4가지를 제공합니다.
- 대량 입력에는 게시물 URL, 게시물 ID, 프로필 & 사용자 아이디를 넣을 수
  있습니다.
- 필터링 & 중복 제거는 과금 전에 실행됩니다.
- 출력은 정렬 모드 4가지, 상세 수준 3가지 & 필드 스타일 3가지를 지원합니다.
- 모든 답글에 원본 대상, 부모 ID, 루트 ID & 깊이가 남습니다.
- 이어받기 커서로 지난 데이터 수집 & 예약 실행을 할 수 있습니다.
- 결과가 없는 실행은 `diagnostics`에 무료 레코드 1개를 기록합니다.
- 실행 로그는 페이지 & 대상별 소요 시간을 `fetchDurationMs`,
  `processingDurationMs`, `pushDurationMs`, `statusDurationMs`,
  `fullPageDurationMs` & `fullTargetDurationMs`로 보여 줍니다.
- Apify가 실행을 다시 시작해도 전달된 답글 & 진행 상황은 유지됩니다.

## X 답글 스크랩 방법

1. 게시물 URL, 게시물 ID, 프로필 URL 또는 사용자 아이디를 붙여넣으세요.
2. `maxItems`, `scope` & 작업에 필요한 필터를 설정하세요.
3. Xquik의 X Reply Scraper를 실행하고 데이터셋을 여세요.

미리 채워진 양식은 검증된 공개 대화를 대상으로 합니다. full 수준의 플랫 행을
최대 25개 반환합니다. 자동 모드는 기본적으로 대화 전체를 검색합니다. 중복 제거 &
원본 표시는 켜진 상태로 유지됩니다.

### 게시물 URL로 답글 스크랩

```json
{
  "startUrls": [{ "url": "https://x.com/OpenAI/status/2082577277246972300" }],
  "maxItems": 100
}
```

### 게시물 ID로 답글 스크랩

```json
{
  "tweetIds": ["2082577277246972300", "2083148725367783580"],
  "maxItemsPerTarget": 100,
  "maxItems": 10000
}
```

### 중첩 대화 전체 수집

```json
{
  "tweetIds": ["2082577277246972300"],
  "collectionStrategy": "conversationSearch",
  "scope": "all",
  "maxDepth": 5,
  "sort": "oldest",
  "maxItems": 500
}
```

### 사용자의 답글 타임라인 스크랩

```json
{ "usernames": ["OpenAI", "apify"], "maxItems": 10000 }
```

### 과금 전에 답글 필터링

```json
{
  "tweetIds": ["2082577277246972300"],
  "anyWords": ["API", "agent", "developer"],
  "excludeWords": ["airdrop", "giveaway"],
  "lang": "en",
  "minLikes": 2,
  "minViews": 100,
  "verifiedOnly": true,
  "maxItems": 10000
}
```

### CSV에 맞는 플랫 행 내보내기

```json
{
  "tweetIds": ["2082577277246972300"],
  "outputMode": "full",
  "outputPreset": "flat",
  "fieldStyle": "camelCase",
  "maxItems": 100
}
```

## X 답글 스크랩 비용은 얼마인가요?

Xquik의 X Reply Scraper는 모든 Apify 요금제에서 전달된 행 1개당 $0.00015입니다.
Apify 플랫폼 사용료는 Apify가 따로 청구합니다.

Xquik은 전달된 데이터 행 1개마다 한 번 과금합니다. 필터나 중복 제거로 빠진
답글에는 비용이 없습니다. `diagnostics`의 진단 레코드는 무료입니다. 시작, URL,
쿼리, 페이지 넘김, 필터 요금이 없습니다.

## 공개 태스크 예시

공개 태스크 50개 중에서 고르세요. 태스크마다 범위가 정해진 입력 & 그에 맞는
데이터셋 뷰가 있습니다. 실행하기 전에 원하는 대로 수정하세요.

다음 예시로 시작해 보세요.

- [Collect replies for AI agents](https://apify.com/xquik/x-reply-scraper/examples/collect-replies-for-ai-agents)
- [Build an X reply RAG dataset](https://apify.com/xquik/x-reply-scraper/examples/build-x-reply-rag-dataset)
- [Archive replies for LLM processing](https://apify.com/xquik/x-reply-scraper/examples/archive-replies-for-llm-processing)
- [Extract reply leads for CRM](https://apify.com/xquik/x-reply-scraper/examples/extract-reply-leads-for-crm)

## AI 에이전트 & MCP 지원

Xquik의 X Reply Scraper는 Apify MCP, API 클라이언트, x402 또는 Skyfire로 실행할
수 있습니다.

- 제한된 권한으로 관련 없는 Apify 계정 데이터를 보호합니다.
- 이벤트당 과금으로 비용이 전달된 결과에 맞춰집니다.
- 에이전트 결제와 호환되도록 Standby 모드는 꺼져 있습니다.
- 타입이 정해진 스키마가 답글, 실행 보고서 & 이어받기 커서를 설명합니다.
- 범위가 정해진 기본값이 에이전트가 실수로 무제한 실행하는 것을 막습니다.
- 안정적인 `camelCase` & `snake_case` 모드로 도구를 쉽게 연결할 수 있습니다.
- 진단 행에는 상태, 메시지 & 복구 방법이 들어 있습니다.
- 실행 보고서에는 정확한 결과, 중단 이유 & 예상 요금이 들어 있습니다.

## 답글 대상 & 입력 별칭

다음 기본 필드를 쓰세요.

| 입력          | 용도                                  |
| ------------- | ------------------------------------- |
| `startUrls`   | X 게시물 & 프로필 URL 혼합            |
| `tweetIds`    | 숫자 게시물 ID                        |
| `usernames`   | 프로필 답글 타임라인                  |
| `startCursor` | 저장된 커서로 대상 1개 이어서 실행    |

입력 양식에는 표준 컨트롤만 나옵니다. 호환용 별칭은 JSON, API, SDK, 자동화 &
저장된 태스크 입력에서 계속 작동합니다. 표준 필드 & 별칭 필드를 함께 쓰면 기존
우선순위가 적용됩니다.

다음 별칭은 다른 스크레이퍼에서 흔히 쓰는 필드 이름을 받습니다.

- URL 별칭: `urls`, `tweetUrls`, `postUrls`, `profileUrls`
- ID 별칭: `conversationIds`, `postIds`, `ids`, `tweetId`, `id`
- 사용자 아이디 별칭: `twitterHandles`, `screenname`
- 전체 한도 별칭: `maxResults`, `max_results`, `resultsLimit`, `maxReplies`
- 대상별 별칭: `maxRepliesPerTweet`, `maxCommentsPerPost`
- 검색 별칭: `useSearch`
- 중첩 답글 별칭: `includeNestedReplies`, `includeRepliesOfReplies`
- 원본 게시물 별칭: `includeOriginalTweet`
- 출력 별칭: `outputVariant`, `includeRaw`

형식이 잘못됐거나 지원하지 않는 대상이 있어도 Actor는 실패하지 않습니다. 유효한
대상이 하나도 남지 않으면 실행은 해결 방법이 담긴 진단을 기록합니다.

## 수집 전략

### 자동 완전 수집

대부분의 작업에는 `collectionStrategy: "auto"`를 쓰세요. 설정한 범위에서 가져올
수 있는 답글을 모두 수집합니다. 범위, 깊이, 정렬 & 작성자 설정은 한도보다 먼저
적용됩니다. 루트가 아닌 대상 아래의 답글도 포함합니다. X가 스레드 일부를 숨기면
상태 메시지가 숨겨진 답글 수를 알려 줍니다. 다른 `collectionStrategy` 값은
모드를 바꾸지 않습니다.

진단의 수집 범위 수치가 X에 답글이 더 없다는 증거는 아닙니다. 한도, 누락된
데이터, 오류 때문에 실행이 불완전하게 끝날 수 있습니다.

### 직접 답글

X 자체 순서대로 직접 답글을 받으려면 `collectionStrategy: "replies"`를 쓰세요.
저장된 커서를 지원합니다.

### 대화 검색

대화를 폭넓게 수집하려면 `collectionStrategy: "conversationSearch"`를 쓰세요.

### 스레드 전체 맥락

원본 대화 맥락을 읽으려면 `collectionStrategy: "thread"`를 쓰세요. 루트 게시물을
깊이 0으로 남기려면 `includeOriginalPost: true`를 설정하세요.

## 직접 답글 & 중첩 답글 설정

결과 형태는 `scope`로 고르세요.

| 값       | 결과                                     |
| -------- | ---------------------------------------- |
| `direct` | 깊이 1 답글 유지                         |
| `nested` | 깊이 2 이상인 답글의 답글 유지           |
| `all`    | 제공되는 직접 답글 & 중첩 답글 모두 유지 |

중첩 깊이를 제한하려면 `maxDepth`를 쓰세요. X가 대화의 상위 게시물을 빼면 부모
링크가 없을 수 있습니다. 이 Actor는 확인할 수 있는 가장 정확한 깊이를 남깁니다.

## 정렬

`sort`에는 다음 값을 씁니다.

- `relevance`는 X 원본 순서를 유지합니다.
- `latest`는 최신순으로 정렬합니다.
- `oldest`는 오래된 순으로 정렬합니다.
- `likes`는 마음에 들어요가 많은 순으로 정렬합니다.

프로필 대상은 요청한 수만큼 중복 없이 필터를 거친 결과를 모은 뒤 정렬합니다.
게시물 대상은 전체 정렬을 유지합니다.

호환용 별칭 `sortBy` & `queryType`도 계속 작동합니다.

## 답글 필터

지원하는 필터는 모두 데이터셋에 기록하기 전에 실행됩니다.

### 텍스트 & 엔티티 필터

| 입력             | 동작                           |
| ---------------- | ------------------------------ |
| `exactPhrase`    | 정확한 문구 1개 필수           |
| `anyWords`       | 단어나 문구 1개 이상 필수      |
| `excludeWords`   | 일치하는 단어나 문구 제외      |
| `keywordInclude` | `anyWords`에 합쳐지는 별칭     |
| `keywordExclude` | `excludeWords`에 합쳐지는 별칭 |
| `hashtags`       | 해시태그 1개 이상 필수         |
| `cashtags`       | 캐시태그 1개 이상 필수         |
| `mentioning`     | @멘션 필수                     |

### 작성자 & 언어 필터

| 입력                    | 동작                                     |
| ----------------------- | ---------------------------------------- |
| `fromUser`              | 답글 작성자 1명만 유지                   |
| `toUser`                | 사용자 아이디 1개에 보낸 답글만 유지     |
| `lang`                  | X 언어 코드 1개만 유지                   |
| `verifiedOnly`          | 공개 인증 표시가 하나라도 있어야 함      |
| `blueVerifiedOnly`      | X Premium 인증 필수                      |
| `excludeOriginalAuthor` | 원본 작성자의 셀프 답글 제외             |

### 참여 필터

`minLikes`, `minReplies`, `minRetweets`, `minQuotes`, `minViews` &
`minBookmarks`를 쓰세요. 별칭 `minFaves`는 `minLikes`로 연결됩니다.

### 미디어 & 시간 필터

- 공개 미디어가 있는 답글만 받으려면 `hasMediaOnly: true`를 설정하세요.
- `mediaType`은 `any`, `image`, `video`, `gif`, `link` 중 하나로 설정하세요.
- 시작 시각(포함)은 `since`로 설정하세요.
- 종료 시각(미포함)은 `until`로 설정하세요.
- 호환용 별칭으로 `sinceTime` & `untilTime`을 쓸 수 있습니다.

## 출력 필드

데이터셋 & run-report 스키마는 반환되는 모든 필드를 설명합니다. 기본형 필드에는
에이전트 & 자동 생성 연동을 위한 예시도 들어 있습니다.

full 답글 행에는 다음 핵심 필드가 들어갈 수 있습니다.

| 필드                | 설명                                            |
| ------------------- | ----------------------------------------------- |
| `id`                | 답글 ID                                         |
| `text`              | 답글 텍스트                                     |
| `fullText`          | 장문 답글 텍스트                                |
| `createdAt`         | 답글 타임스탬프                                 |
| `lang`              | X 언어 코드                                     |
| `url`               | 답글 바로가기 URL                               |
| `conversationId`    | X 대화 ID                                       |
| `inReplyToId`       | 바로 위 부모 ID                                 |
| `inReplyToUserId`   | 부모 작성자 ID                                  |
| `inReplyToUsername` | 부모 작성자 사용자 아이디                       |
| `likeCount`         | 마음에 들어요 수                                |
| `replyCount`        | 하위 답글 수                                    |
| `retweetCount`      | 재게시 수                                       |
| `quoteCount`        | 인용 수                                         |
| `viewCount`         | 조회수                                          |
| `bookmarkCount`     | 북마크 수                                       |
| `author`            | 제공되는 공개 작성자 메타데이터                 |
| `media`             | 이미지, 동영상, GIF & 변형                      |
| `entities`          | 해시태그, 캐시태그, 멘션, URL & 동영상 타임스탬프 |
| `quoted_tweet`      | 인용된 게시물(있는 경우)                        |
| `retweeted_tweet`   | 재게시된 게시물(있는 경우)                      |

full 행에는 제공되는 원본 메타데이터도 남습니다.

- 게시물 유형 필드는 `type`, `isReply`, `isQuoteStatus`, `isNoteTweet`,
  `isLimitedReply` & `isTranslatable`입니다.
- 텍스트 상세 필드는 `displayTextRange`, `noteTweet`, `article` & `card`입니다.
- 라벨 & 안내 필드는 `contentDisclosure`, `communityNote`, `possiblySensitive`,
  `tombstone` & `exclusiveContent`입니다.
- 대화 상세 필드는 `conversationControl`, `limitedActions` &
  `unmentionedUserIds`입니다.
- 맥락 필드는 `source`, `place`, `communityId`, `reactionContext` &
  `postCta`입니다.
- 수정 & 상태 필드는 `edit`, `previousCounts`, `viewState` &
  `authorUnavailable`입니다.

플랫 행에는 상위 대화 정보, 원본 상세, 결과 유형 & 스키마 버전이 남습니다.
정확한 필드는 OpenAPI를 참고하세요.

### 작성자 메타데이터

중첩된 작성자는 공개 프로필 규격을 따릅니다. 신원, 각종 수치, 인증, 계정 상태,
프로페셔널 정보 & 프로필 자기소개를 다룹니다.

플랫 출력은 `authorId`, `authorUsername`, `authorName`, `authorFollowers`,
`authorFollowing` & `authorVerified`를 추가합니다.

### 미디어 메타데이터

미디어에는 제공 여부, 크기 정보, 태그 & 동영상 변형이 들어 있습니다.
`watchNowUrl` & `visitSiteUrl` 작업도 들어 있습니다.

플랫 출력은 `mediaUrls`를 추가합니다.

### 출력 예시

일부를 줄인 답글 행은 다음과 같습니다.

```json
{
  "resultType": "reply",
  "id": "1881423000000000000",
  "url": "https://x.com/example/status/1881423000000000000",
  "text": "Thanks for sharing this update.",
  "createdAt": "2026-08-09T12:00:00.000Z",
  "lang": "en",
  "conversationId": "1881422000000000000",
  "rootTweetId": "1881422000000000000",
  "parentReplyId": "1881422000000000000",
  "depth": 1,
  "isDirectReply": true,
  "likeCount": 42,
  "replyCount": 3,
  "retweetCount": 5,
  "quoteCount": 2,
  "viewCount": 1000,
  "bookmarkCount": 7,
  "authorUsername": "example",
  "authorName": "Example User",
  "authorFollowers": 1000,
  "authorVerified": false,
  "mediaUrls": ["https://pbs.twimg.com/media/example.jpg"],
  "sourceTweetId": "1881422000000000000",
  "sourceTarget": "1881422000000000000"
}
```

샘플 값은 예시입니다. 실제 실행은 실시간 데이터를 반환합니다.

## 출력 모드

### Compact 모드

더 간결한 데이터셋을 받으려면 `outputMode: "compact"`를 설정하세요. 텍스트,
대화, 작성자, 참여 & 미디어 필드를 남깁니다.

### Full 모드

지원하는 공개 필드를 모두 남기려면 `outputMode: "full"`을 설정하세요.

### Raw 모드

`raw` 아래에 정제된 원본 스냅숏을 추가하려면 `outputMode: "raw"`를 설정하세요.

### 중첩 또는 플랫

기본 `flat` 레이아웃은 중첩 객체를 유지하고, 표에 쓸 작성자 필드를 추가합니다.
추가되는 플랫 필드를 빼려면 `outputPreset: "nested"`를 설정하세요.

### 필드 이름 규칙

`fieldStyle`은 `source`, `camelCase`, `snake_case` 중 하나로 설정하세요. 이
Actor는 서로 충돌하는 원본 키를 덮어쓰지 않습니다.

## 한도, 과금 & 이어서 실행

`maxItems`는 실행 전체에서 전달되는 행 수를 제한합니다. `maxItemsPerTarget`은
게시물이나 프로필마다 제한합니다.

한 실행으로 여러 대상을 읽을 수 있습니다. 상한, 중복 제거, 원본 표시 & 과금은
모든 대상에서 정확하게 유지됩니다.

이 Actor는 출력 & 과금 전에 중복 행을 제거합니다. 서로 다른 대상에서 나온 중복
행을 남기려면 `dedupeAcrossTargets: false`를 설정하세요.

페이지 한도로 끝난 실행 뒤에는 기본 키-값 저장소에서 `next-cursors`를 읽으세요.
그 대상을 이어서 실행하려면 커서 1개를 `startCursor`로 넘기세요.

### Apify 제한 시간

Apify 기본 제한 시간은 `0`이므로 실행에 시간 제한이 없습니다. 이 Actor는 상한에
이르거나 조건에 맞는 데이터가 떨어질 때까지 계속 실행합니다. 그래도 Apify 제한
시간을 따로 정할 수 있습니다. 그러면 `completionReason: "deadline_reached"`는 그
제한이 가까워졌다는 뜻입니다. 이 Actor는 답글 & 보고서를 저장한 뒤 제한 시간
전에 정상 종료합니다. 전달된 답글은 한 번만 과금됩니다. 끝나지 않은 대상은
나중에 이어서 실행할 수 있습니다.

## 추출 미완료

중단된 실행은 무료 `partial` 진단을 기록합니다. 이미 받은 결과는 그대로
남습니다. 다시 시도하기 전에 `availableResults`, `failedTargets`, `retryable` &
`nextAction`을 확인하세요. Actor가 성공으로 종료되면 전달이 끝났다는 뜻입니다.
추출이 모두 끝났다는 뜻은 아닙니다.

상태 메시지는 실행이 일찍 멈춘 원인을 모두 알려 줍니다. `stopCauses`는 원인마다
`message`, `retryable` & `nextAction`을 따로 담아 나열합니다. 원인은
`target_not_found`, `target_failed`, `page_limit`, `reply_reach` &
`deadline_reached`입니다. `reply_reach`는 X가 스레드의 일부만 제공했다는
뜻입니다.

찾을 수 없는 게시물이나 계정은 실패로 세지 않습니다. 상태 메시지는 "X has no
match for 1 target."처럼 그 대상을 알려 줍니다. 다른 원인으로 실행이 멈췄을 때만
`stopCauses`에 들어갑니다. 원인 중 하나라도 `retryable`이면 실행도
`retryable`입니다.

## 진단

성공한 데이터 행은 `resultType: "reply"`를 씁니다. 데이터 없이 종료된 실행은
`diagnostics`에 무료 레코드를 정확히 1개 기록합니다. 이 레코드는 문제를 해결하는
방법을 알려 줍니다.

실행 상태는 실행이 멈춘 이유를 알려 줍니다. 과금된 결과 & 읽은 대상 수도 셉니다.
문제가 생긴 실행은 입력이 없거나 잘못되어 종료된 경우를 포함해 항상
`run-report`를 기록합니다. 큰 실행도 기록합니다. 문제없이 끝난 작은 실행은 이
레코드를 건너뛰어 Apify 사용량을 아낍니다. 모든 실행에서 기록하려면
`alwaysSaveRunRecords`를 켜세요.

보고서 스키마는 완료 상태, 과금, 실패 & 저장된 커서를 설명합니다. `version`
필드는 게시된 Actor 소스의 정확한 버전을 알려 줍니다.

`status` 필드는 다음 값을 씁니다.

- `no-input`
- `invalid-input`
- `replies-incomplete`
- `zero-output`
- `aborted`
- `unexpected-error`

## API 예시

각 예시는 Xquik의 X Reply Scraper를 실행하고 데이터셋 항목을 반환합니다.
`<APIFY_API_TOKEN>`을 본인의 Apify API 토큰으로 바꾸세요.

### JavaScript

```javascript
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: '<APIFY_API_TOKEN>' });
const run = await client
  .actor('xquik/x-reply-scraper')
  .call({
    tweetIds: ['2082577277246972300'],
    collectionStrategy: 'auto',
    scope: 'all',
    maxItems: 100,
  });

const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
```

### Python

```python
from apify_client import ApifyClient

client = ApifyClient("<APIFY_API_TOKEN>")
run = client.actor("xquik/x-reply-scraper").call(run_input={
    "tweetIds": ["2082577277246972300"],
    "collectionStrategy": "auto",
    "scope": "all",
    "maxItems": 100,
})

for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
```

### cURL

```bash
actor=xquik~x-reply-scraper
curl "https://api.apify.com/v2/acts/$actor/run-sync-get-dataset-items" \
  -X POST \
  -H "Authorization: Bearer <APIFY_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"tweetIds":["2082577277246972300"],"maxItems":100}'
```

## 자동화 & 연동

Xquik의 X Reply Scraper는 Apify 스케줄, 웹훅 또는 API 클라이언트로 실행할 수
있습니다. Make, Zapier, n8n, Google Sheets 또는 클라우드 저장소에 연결하세요.
에이전트는 [Apify MCP 서버](https://docs.apify.com/platform/integrations/mcp)로
호출할 수 있습니다.

조건을 충족하는 에이전트 워크플로는
[x402](https://docs.apify.com/integrations/x402)나
[Skyfire](https://docs.apify.com/integrations/skyfire)도 쓸 수 있습니다.

Xquik은 대시보드 도구 47개, REST 작업 129개, 서명된 웹훅 & MCP 서버도
제공합니다.

### 항상 최신 빌드 사용

배포된 수정 사항을 모두 받으려면 모든 실행에서 `latest`를 고르세요.

빌드를 지정하지 않으면 Apify는 이 Actor의 기본값인 `latest`를 씁니다. Console
실행 & 기본 API 예시도 이 기본값을 따릅니다.

저장된 태스크는 Actor 기본값을 덮어쓸 수 있습니다. 스케줄 & 태스크 연동은 그
선택을 그대로 씁니다. 덮어쓴 값은 모두 `latest`로 두세요.

Apify는 특정 빌드 번호를 `latest`로 바꿔 주지 않습니다. 고정한 번호는 `latest`로
바꾸세요. 특정 빌드는 잠시 되돌릴 때만 쓰세요.

## 관련 Xquik Actor

모든 Xquik Actor는 같은 추출 엔진, 필터 우선 과금 & 진단을 공유합니다. 필요한
데이터에 맞는 Actor를 고르세요.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): 검색, 프로필
  타임라인, 리스트 & 게시물 ID에서 게시물을 스크랩합니다. 50개 이상의 필터 &
  플랫 내보내기를 지원합니다. 분석 없이 게시물 데이터만 필요할 때 사용하세요.
  행당 $0.00015부터입니다.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): 사용자 아이디,
  ID 또는 URL로 프로필과 그 계정의 게시물, 답글, 미디어 & 팔로워를 스크랩합니다.
  검색이 아니라 계정에서 시작할 때 사용하세요. 행당 $0.00015부터입니다.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): 게시물
  URL이나 ID로 답글, 인용, 재게시한 사람 & 스레드를 대량으로 스크랩합니다. 누가
  게시물에 반응했는지 측정할 때 사용하세요. 행당 $0.00015부터입니다.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): 팔로워,
  팔로잉, 리스트 멤버, 구독자 & 커뮤니티 멤버를 프로필 행으로 스크랩합니다.
  오디언스나 멤버 목록이 필요할 때 사용하세요. 프로필당 $0.00015부터입니다.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper): 사용자
  아이디, 자기소개 & 위치로 사용자를 검색합니다. 팔로워, 인증, 계정 연령 & 위치
  필터를 지원합니다. 검색으로 계정 목록을 만들 때 사용하세요. 프로필당
  $0.00015부터입니다.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): 리스트 URL이나 ID로
  리스트 게시물, 멤버 & 팔로워를 스크랩합니다. 직접 고른 리스트로 수집 대상을
  정할 때 사용하세요. 행당 $0.00015부터입니다.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): 커뮤니티
  정보, 게시물, 검색 결과, 멤버 & 모더레이터를 스크랩합니다. X 커뮤니티에서
  데이터를 모을 때 사용하세요. 행당 $0.00015부터입니다.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): 위치별 실시간
  트렌드를 순위, 볼륨, 쿼리 & WOEID와 함께 스크랩합니다. 어디에서 무엇이
  트렌드인지 추적할 때 사용하세요. 트렌드당 $0.00015부터입니다.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): 장문의 X
  아티클을 커버, 작성자, 날짜 & 지표와 함께 마크다운 & 텍스트로 스크랩합니다.
  게시물이 아니라 아티클 본문이 필요할 때 사용하세요. 아티클당
  $0.00015부터입니다.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): 게시물이나
  프로필의 사진, 동영상 & GIF를 추출하거나 저장합니다. MP4 & 메타데이터 옵션을
  지원합니다. 미디어 파일 자체가 필요할 때 사용하세요. 미디어 행당
  $0.00015부터입니다.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  브랜드 언급을 추적하고 AI로 관련성, 감정 & 고객 경험 질문에 답합니다. 실행
  결과끼리 비교도 합니다. 브랜드를 꾸준히 지켜볼 때 사용하세요. 분석한 게시물당
  $0.0003부터입니다.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  AI로 게시물마다 태도, 강도 & 비꼼 확률을 라벨링합니다. 어떤 주제든 전반적인
  감정을 알고 싶을 때 사용하세요. 분석한 게시물당 $0.0003부터입니다.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  AI로 강세, 약세, 중립, 혼조 입장과 콘텐츠 유형, 확신도 & 자산 관련성을
  라벨링합니다. 주식, 암호화폐, 트레이딩 이야기를 지켜볼 때 사용하세요. 분석한
  게시물당 $0.0003부터입니다.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  AI로 뉴스 게시물을 형식, 출처 표기 & 주제 관련성에 따라 라벨링합니다. 보도와
  논평을 구분할 때 사용하세요. 분석한 게시물당 $0.0003부터입니다.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  직접 만든 카테고리, 점수 & 예/아니오 질문에 AI가 게시물마다 답합니다. 기본
  분석이 원하는 라벨과 맞지 않을 때 사용하세요. 분석한 게시물당
  $0.0003부터입니다.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer):
  AI의 특성 답변 8개로 게시물마다 0에서 100까지의 Viral Score & 판정을
  추정합니다. 게시물이 왜 퍼지거나 묻히는지 분석할 때 사용하세요. 분석한
  게시물당 $0.0003부터입니다.

## 자주 묻는 질문

### X API 키나 로그인이 필요한가요?

아니요. X API 키, 로그인, 자격 증명이 모두 필요 없습니다. Xquik의 X Reply
Scraper는 X 비밀번호, 쿠키, 토큰을 요구하지 않습니다.

### X 답글을 스크랩해도 합법인가요?

Xquik의 X Reply Scraper는 공개 답글을 수집하며 비공개 계정을 우회하지 않습니다.
공개 데이터만 수집하세요. 관련 법률 & 플랫폼 규칙을 따르세요.

답글 데이터셋에는 개인정보가 들어 있을 수 있습니다. 적법한 목적을 정하세요. 보관
기간은 최소로 하세요. 내보낸 파일을 보호하세요. 필요한 경우 삭제 & 열람 요청에
응하세요. 확실하지 않으면 자격을 갖춘 법률 전문가에게 문의하세요.

### 게시물에 표시된 것보다 답글이 적게 나오는 이유는 무엇인가요?

X가 스레드 일부를 숨기면 상태 메시지가 숨겨진 답글 수를 알려 줍니다.
`stopCauses`의 `reply_reach`는 X가 스레드의 일부만 제공했다는 뜻입니다. 필터,
중복 제거, `scope`, `maxDepth` & 설정한 한도도 개수를 줄입니다.

### API, 스케줄 & 연동을 사용할 수 있나요?

네. [API 탭](https://apify.com/xquik/x-reply-scraper/api)에 Python, JavaScript &
cURL 예시가 있습니다. Apify
[스케줄](https://docs.apify.com/platform/schedules)로 Xquik의 X Reply Scraper를
cron 일정에 맞춰 실행하세요. Make, Zapier, n8n & Google Sheets에도 연결됩니다.

### 도움은 어디서 받을 수 있나요?

Actor 페이지에서 이슈를 열거나 실행 ID와 함께
[support@xquik.com](mailto:support@xquik.com)으로 문의하세요.

### 맞춤 솔루션을 받을 수 있나요?

네. [xquik.com](https://xquik.com)을 방문하거나
[API 문서](https://docs.xquik.com/introduction)를 읽어 보세요. Xquik은 대시보드,
REST API, MCP 서버 & 웹훅을 제공합니다.
