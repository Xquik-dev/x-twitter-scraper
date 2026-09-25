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

Xquik은 가장 완전한 X 데이터를 보유한, 세계에서 가장 빠르고 저렴한 X(Twitter)
스크레이퍼 서비스입니다. X Reply Scraper는 답글, 댓글 & 전체 대화를 수집합니다.
다른 모든 Apify Actor는 필터링이나 중복 제거 전에 요금을 부과합니다. Xquik은
전달되고, 고유하며, 필터에 맞는 결과에만 요금을 부과합니다.

**모든 Apify 요금제에서 전달된 행당 $0.00015**로 X(Twitter) 답글을 스크랩하세요.
게시물 URL, 트윗 ID, 프로필 URL, 사용자 이름을 붙여넣으세요. 답글, 대화, 작성자,
참여, 엔터티, 미디어 URL을 내보냅니다. Apify는 플랫폼 사용량을 별도로
청구합니다. X 로그인이 필요하지 않습니다.

필터는 데이터셋 쓰기 전에 실행됩니다. 전달된 행에 대해서만 비용을 지불합니다.

> Xquik은 독립적인 제3자 서비스입니다. X Corp와 제휴 관계가 없습니다.
> "Twitter"와 "X"는 X Corp의 상표입니다.

## 추출 미완료

추출이 중단되면 무료 `partial` 진단이 기록됩니다. 사용 가능한 결과는 그대로
유지됩니다. 재시도하기 전에 `availableResults`, `failedTargets`, `retryable`,
`nextAction`을 확인하세요. Actor가 성공적으로 종료되었다는 것은 전달이 확인됐다는
뜻이지, 추출이 완료됐다는 뜻은 아닙니다.

상태 메시지는 실행이 일찍 멈춘 원인을 모두 표시합니다. `stopCauses`는 각 원인을
나열하고, 원인마다 `message`, `retryable` & `nextAction`을 따로 담습니다. 원인은
`target_failed`, `page_limit`, `reply_reach` & `deadline_reached`입니다.
`reply_reach`는 X가 스레드의 일부만 제공했다는 뜻입니다. 원인 중 하나라도
`retryable`이면 실행도 `retryable`입니다.

## 이 Twitter 답글 스크레이퍼는 무엇을 하나요?

X Reply Scraper는 공개 답글과 댓글 대화를 수집합니다. 단일 게시물, 대량 URL
목록, 트윗 ID, 사용자 답글 타임라인을 처리합니다.

감정 분석, 고객 피드백, 커뮤니티 리서치, 답글 순위, 리드 발굴, 모더레이션
검토, 대화 데이터셋에 사용하세요.

### 답글 수집 동작

- 자동 모드는 직접 결과가 불완전하면 계속 수집합니다.
- `collectionStrategy`는 다양한 답글 작업을 위한 4가지 모드를 제공합니다.
- 대량 입력은 게시물 URL, 트윗 ID, 프로필, 사용자 이름을 받아들입니다.
- 필터 & 중복 제거는 과금 전에 실행됩니다.
- 출력은 4가지 정렬 모드, 3가지 세부 수준, 3가지 필드 스타일을 지원합니다.
- 모든 답글은 원본 대상, 부모 ID, 루트 ID, 깊이를 유지합니다.
- 연속 커서는 백필과 예약 실행을 지원합니다.
- 빈 실행은 `diagnostics`에 무료 레코드 1건을 작성합니다.
- 실행 로그는 `fetchDurationMs`, `processingDurationMs`, `pushDurationMs`,
  `statusDurationMs`, `fullPageDurationMs`, `fullTargetDurationMs`로 페이지 & 대상별 소요
  시간을 보여 줍니다.
- Apify가 실행을 다시 시작해도 전달된 답글 & 진행 상황은 유지됩니다.

### 항상 최신 빌드를 사용하세요

게시된 모든 수정 사항을 받으려면 매 실행마다 `latest`를 선택하세요.

빌드를 지정하지 않으면 Apify는 이 Actor의 `latest` 기본값을 사용합니다.
Console 실행과 표준 API 예시는 이 기본값을 상속받습니다.

저장된 태스크는 Actor 기본값을 재정의할 수 있습니다. 스케줄과 태스크 통합은 그
선택을 재사용합니다. 모든 재정의를 `latest`로 유지하세요.

Apify는 정확한 빌드 번호를 `latest`로 리다이렉트하지 않습니다. 고정된 번호를
`latest`로 교체하세요. 정확한 빌드는 임시 롤백에만 사용하세요.

## 빠른 시작

초기 양식은 확인된 공개 대화를 대상으로 합니다. 최대 25개의 전체 플랫 행을 반환합니다. 자동 모드는 기본적으로 전체 대화를 검색합니다.
중복 제거 & 출처 표시는 켜진 상태로 유지됩니다.

### 게시물 URL에서 답글 스크랩하기

```json
{
  "startUrls": [{ "url": "https://x.com/OpenAI/status/2082577277246972300" }],
  "maxItems": 100
}
```

### 트윗 ID에서 답글 스크랩하기

```json
{
  "tweetIds": ["2082577277246972300", "2083148725367783580"],
  "maxItemsPerTarget": 100,
  "maxItems": 10000
}
```

### 전체 중첩 대화 수집하기

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

### 사용자의 답글 타임라인 스크랩하기

```json
{ "usernames": ["OpenAI", "apify"], "maxItems": 10000 }
```

### 과금 전에 답글 필터링하기

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

### CSV 친화적인 플랫 행 내보내기

```json
{
  "tweetIds": ["2082577277246972300"],
  "outputMode": "full",
  "outputPreset": "flat",
  "fieldStyle": "camelCase",
  "maxItems": 100
}
```

샘플 값은 예시용입니다. 응답은 실행 시점의 소스 데이터를 반영합니다.

## AI 에이전트 & MCP 대응

Apify MCP, API 클라이언트, x402 또는 Skyfire를 통해 이 Actor를 실행하세요.

- 제한된 권한으로 관련 없는 Apify 계정 데이터를 보호합니다.
- 이벤트당 과금은 결정적인 결과 기반 비용을 지원합니다.
- 에이전트 결제 호환성을 위해 대기 모드는 비활성화되어 있습니다.
- 타입이 지정된 스키마가 답글, 실행 보고서, 연속 커서를 노출합니다.
- 제한된 기본값이 의도치 않은 무제한 에이전트 실행을 막습니다.
- 안정적인 `camelCase`와 `snake_case` 모드가 도구 연결을 단순화합니다.
- 진단 행에는 상태, 메시지, 복구 조치가 포함됩니다.
- 실행 보고서에는 정확한 결과, 중단 이유, 과금 예상치가 포함됩니다.

## 답글 대상 & 입력 별칭

아래 기본 필드를 사용하세요.

| 입력          | 목적                                         |
| ------------- | -------------------------------------------- |
| `startUrls`   | 혼합된 X 게시물 & 프로필 URL                 |
| `tweetIds`    | 숫자로 된 게시물 ID                          |
| `usernames`   | 프로필의 답글 타임라인                       |
| `startCursor` | 저장된 커서로 대상 1개 재개                  |

시각적 폼은 표준 컨트롤만 보여줍니다. 호환성 별칭은 JSON, API, SDK, 자동화,
저장된 태스크 입력에서 계속 사용할 수 있습니다. 명시적인 표준 필드와 별칭
필드를 함께 사용하면 기존 해석 순서가 유지됩니다.

호환성 별칭은 흔한 경쟁사 입력 방식을 받아들입니다.

- URL 별칭: `urls`, `tweetUrls`, `postUrls`, `profileUrls`
- ID 별칭: `conversationIds`, `postIds`, `ids`, `tweetId`, `id`
- 사용자 이름 별칭: `twitterHandles`, `screenname`
- 전체 제한 별칭: `maxResults`, `max_results`, `resultsLimit`, `maxReplies`
- 대상별 별칭: `maxRepliesPerTweet`, `maxCommentsPerPost`
- 검색 별칭: `useSearch`
- 중첩 답글 별칭: `includeNestedReplies`, `includeRepliesOfReplies`
- 원본 게시물 별칭: `includeOriginalTweet`
- 출력 별칭: `outputVariant`, `includeRaw`

잘못되었거나 지원되지 않는 대상이 있어도 Actor는 실패하지 않습니다. 유효한
대상이 남아 있지 않으면 실행은 실행 가능한 진단을 반환합니다.

Actor는 출력 & 과금 전에 중복 행을 제거합니다.

## 커버리지 전략

### 자동 완료

대부분의 작업에는 `collectionStrategy: "auto"`를 사용하세요. 지정한 범위에서 가져올 수 있는 모든 답글을 수집합니다.
범위, 깊이, 정렬, 작성자 설정은 한도보다 먼저 적용됩니다. 루트가 아닌 대상 아래의 답글도 포함됩니다. X가 스레드 일부를 숨기면 상태
메시지에 X가 숨긴 답글 수가 표시됩니다. 다른 `collectionStrategy` 값은 모드를 전환하지 않습니다.

진단의 커버리지 수치는 X에 더 이상 답글이 없다는 증거가 아닙니다. 한도, 누락된 데이터, 오류로 인해 실행이 불완전하게 남을 수 있습니다.

### 직접 답글

X 자체 순서대로 직접 답글을 가져오려면 `collectionStrategy: "replies"`를 사용하세요. 저장된 커서를 지원합니다.

### 대화 검색

대화를 폭넓게 수집하려면 `collectionStrategy: "conversationSearch"`를 사용하세요.

### 전체 스레드 맥락

원본 대화 맥락을 읽으려면 `collectionStrategy: "thread"`를 사용하세요. 루트
게시물을 깊이 0으로 유지하려면 `includeOriginalPost: true`를 설정하세요.

## 직접 & 중첩 답글 컨트롤

결과 형태를 선택하려면 `scope`를 사용하세요.

| 값       | 결과                                          |
| -------- | ---------------------------------------------- |
| `direct` | 깊이 1의 답글 유지                             |
| `nested` | 깊이 2 이상의 답글에 대한 답글 유지            |
| `all`    | 사용 가능한 직접 & 중첩 답글 모두 유지         |

중첩을 제한하려면 `maxDepth`를 사용하세요. X가 대화 조상을 생략하면 부모 링크가
없을 수 있습니다. Actor는 사용 가능한 최선의 깊이를 보존합니다.

## 정렬

`sort`에 다음 값을 사용하세요.

- `relevance`는 X 소스 순서를 유지합니다
- `latest`는 최신순으로 정렬합니다
- `oldest`는 오래된 순으로 정렬합니다
- `likes`는 좋아요 수가 가장 많은 순으로 정렬합니다

프로필 대상은 정렬하기 전에 요청된 고유하고 필터링된 결과 수를 수집합니다.
트윗 대상은 전역 정렬을 유지합니다.

`sortBy`와 `queryType` 호환성 별칭도 계속 지원됩니다.

## 답글 필터

지원되는 모든 필터는 데이터셋 쓰기 전에 실행됩니다.

### 텍스트 & 엔터티 필터

| 입력             | 동작                                |
| ---------------- | ----------------------------------- |
| `exactPhrase`    | 정확한 구절 1개를 요구              |
| `anyWords`       | 단어나 구절을 1개 이상 요구         |
| `excludeWords`   | 일치하는 단어나 구절을 제거         |
| `keywordInclude` | `anyWords`와 병합되는 별칭          |
| `keywordExclude` | `excludeWords`와 병합되는 별칭      |
| `hashtags`       | 해시태그 1개 이상을 요구            |
| `cashtags`       | 캐시태그 1개 이상을 요구            |
| `mentioning`     | @멘션을 요구                        |

### 작성자 & 언어 필터

| 입력                    | 동작                                    |
| ----------------------- | ---------------------------------------- |
| `fromUser`              | 답글 작성자 1명 유지                    |
| `toUser`                | 특정 사용자 이름에게 향한 답글만 유지   |
| `lang`                  | X 언어 코드 1개 유지                    |
| `verifiedOnly`          | 공개 인증 신호를 요구                   |
| `blueVerifiedOnly`      | X Premium 인증을 요구                   |
| `excludeOriginalAuthor` | 원본 작성자의 자기 답글 제거            |

### 참여 필터

`minLikes`, `minReplies`, `minRetweets`, `minQuotes`, `minViews`,
`minBookmarks`를 사용하세요. `minFaves` 별칭은 `minLikes`에 매핑됩니다.

### 미디어 & 시간 필터

- 공개 미디어가 있는 답글만 원하면 `hasMediaOnly: true`를 설정하세요.
- `mediaType`을 `any`, `image`, `video`, `gif`, `link` 중 하나로 설정하세요.
- 포함되는 시작 타임스탬프에는 `since`를 설정하세요.
- 제외되는 종료 타임스탬프에는 `until`을 설정하세요.
- `sinceTime`과 `untilTime`을 호환성 별칭으로 사용하세요.

## 제한, 과금 & 연속성

`maxItems`는 실행 전체에서 전달되는 행을 제한합니다. `maxItemsPerTarget`은 각
게시물이나 프로필을 제한합니다.

한 번의 실행으로 여러 대상을 읽을 수 있습니다. 상한, 중복 제거, 출처 표시, 과금은 모든 대상에서 정확하게 유지됩니다.

Actor는 과금 전에 중복을 제거합니다. 다른 대상의 중복 행을 유지하려면
`dedupeAcrossTargets: false`를 설정하세요.

페이지 제한이 걸린 실행 후에는 기본 키-값 저장소에서 `next-cursors`를
읽으세요. 커서 하나를 `startCursor`로 전달해 해당 대상을 계속 진행하세요.

## 출력 필드

데이터셋과 실행 보고서 스키마는 반환되는 모든 필드를 설명합니다. 기본 필드에는
에이전트와 생성된 통합을 위한 예시도 포함됩니다.

모든 전체 답글 행에는 다음 핵심 필드가 포함될 수 있습니다.

| 필드                 | 설명                                                      |
| -------------------- | --------------------------------------------------------- |
| `id`                 | 답글 ID                                                    |
| `text`               | 답글 텍스트                                                |
| `fullText`           | 장문 답글 텍스트                                           |
| `createdAt`          | 답글 타임스탬프                                            |
| `lang`               | X 언어 코드                                                |
| `url`                | 답글 직접 URL                                              |
| `conversationId`     | X 대화 ID                                                  |
| `inReplyToId`        | 직속 부모 ID                                               |
| `inReplyToUserId`    | 부모 작성자 ID                                             |
| `inReplyToUsername`  | 부모 사용자 이름                                           |
| `likeCount`          | 좋아요 수                                                  |
| `replyCount`         | 하위 답글 수                                               |
| `retweetCount`       | 재게시 수                                                  |
| `quoteCount`         | 인용 수                                                    |
| `viewCount`          | 조회 수                                                    |
| `bookmarkCount`      | 북마크 수                                                  |
| `author`             | 사용 가능한 공개 작성자 메타데이터                         |
| `media`              | 이미지, 동영상, GIF, 변형                                  |
| `entities`           | 해시태그, 캐시태그, 멘션, URL, 동영상 타임스탬프           |
| `quoted_tweet`       | 사용 가능한 경우 인용된 게시물                             |
| `retweeted_tweet`    | 사용 가능한 경우 재게시된 게시물                           |

전체 행은 사용 가능한 소스 메타데이터도 보존합니다. 여기에는 `isNoteTweet`,
`isReply`, `isLimitedReply`, `isQuoteStatus`, `source`, `type`,
`displayTextRange`, `contentDisclosure`, `conversationControl`, `article`,
`limitedActions`, `reactionContext`, `authorUnavailable`, `card`, `communityId`,
`communityNote`, `edit`, `exclusiveContent`, `isTranslatable`, `noteTweet`,
`place`, `postCta`, `possiblySensitive`, `previousCounts`, `tombstone`,
`unmentionedUserIds`, `viewState`가 포함됩니다.

플랫 행은 대화 계보, 소스 세부 정보, 결과 유형, 스키마 버전을 유지합니다.
정확한 필드는 OpenAPI를 참고하세요.

### 작성자 메타데이터

중첩된 작성자는 공개 프로필 계약을 따릅니다. 여기에는 신원, 개수, 인증, 사용
가능 여부, 전문 데이터, 프로필 자기소개가 포함됩니다.

플랫 출력에는 `authorId`, `authorUsername`, `authorName`,
`authorFollowers`, `authorFollowing`, `authorVerified`가 추가됩니다.

### 미디어 메타데이터

미디어에는 사용 가능 여부, 크기, 태그, 동영상 변형, `watchNowUrl`,
`visitSiteUrl` 액션이 포함됩니다.

플랫 출력에는 `mediaUrls`가 추가됩니다.

## 출력 모드

### 압축

데이터셋 폭을 줄이려면 `outputMode: "compact"`를 설정하세요. 텍스트, 대화,
작성자, 참여, 미디어 필드를 보존합니다.

### 전체

지원되는 모든 공개 필드를 보존하려면 `outputMode: "full"`을 설정하세요.

### 원본

위생 처리된 소스 스냅샷을 `raw` 아래에 추가하려면 `outputMode: "raw"`를
설정하세요.

### 중첩 또는 플랫

기본 `flat` 레이아웃은 중첩 객체를 유지하고 표를 위한 작성자 필드를
추가합니다. 추가된 플랫 필드를 생략하려면 `outputPreset: "nested"`를
설정하세요.

### 필드 명명

`fieldStyle`을 `source`, `camelCase`, `snake_case` 중 하나로 설정하세요.
Actor는 충돌하는 소스 키를 덮어쓰지 않습니다.

## 진단

성공적인 데이터 행은 `resultType: "reply"`를 사용합니다. 데이터가 없는 종료는
실행 가능한 수정 방법과 함께 `diagnostics`에 정확히 무료 레코드 1건을
작성합니다.

입력이 없거나 잘못된 입력으로 종료된 경우를 포함해 모든 결과가 `run-report`를
작성합니다. 보고서 스키마는 완료, 과금, 실패, 저장된 커서를 문서화합니다.
`version` 필드는 게시된 정확한 Actor 소스 버전을 보고합니다.

가능한 상태에는 다음이 포함됩니다.

- `no-input`
- `invalid-input`
- `replies-incomplete`
- `zero-output`
- `aborted`
- `unexpected-error`

## 비용은 얼마나 드나요?

모든 Apify 요금제는 **전달된 행당 $0.00015**입니다. 이는 행당 `$0.00015`와
같습니다. Apify는 플랫폼 사용량을 별도로 청구합니다.

Xquik은 전달된 데이터 행마다 한 번 과금합니다. `diagnostics`의 진단은 무료입니다. 시작, URL, 쿼리, 페이지네이션, 필터
요금은 없습니다.

기본 Apify 시간 제한은 `0`이므로 실행에 시간 제한이 없습니다. Actor는 상한에 도달하거나 적격 데이터가 소진될 때까지 계속됩니다.
유한한 Apify 시간 제한을 직접 설정할 수도 있습니다. 그러면 `completionReason: "deadline_reached"`는 그
제한이 가까워졌다는 뜻입니다. Actor는 제한 전에 답글 & 보고서를 저장하고 정상적으로 종료합니다. 전달된 답글은 한 번만 과금됩니다.
완료되지 않은 대상은 나중에 재개할 수 있습니다.

## 공개 태스크 예시

50개의 공개 태스크 중에서 선택하세요. 각 태스크에는 제한된 입력과 그에 맞는
데이터셋 뷰가 있습니다. 실행하기 전에 태스크를 편집하세요.

다음 예시로 시작하세요.

- [Collect replies for AI agents](https://apify.com/xquik/x-reply-scraper/examples/collect-replies-for-ai-agents)
- [Build an X reply RAG dataset](https://apify.com/xquik/x-reply-scraper/examples/build-x-reply-rag-dataset)
- [Archive replies for LLM processing](https://apify.com/xquik/x-reply-scraper/examples/archive-replies-for-llm-processing)
- [Extract reply leads for CRM](https://apify.com/xquik/x-reply-scraper/examples/extract-reply-leads-for-crm)

## API 예시

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
curl "https://api.apify.com/v2/acts/xquik~x-reply-scraper/run-sync-get-dataset-items" \
  -X POST \
  -H "Authorization: Bearer <APIFY_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"tweetIds":["2082577277246972300"],"maxItems":100}'
```

## 자동화 & 통합

Apify 스케줄, 웹훅, API 클라이언트, Make, Zapier, n8n, Google Sheets, 클라우드
저장소, 또는 [Apify MCP server](https://docs.apify.com/platform/integrations/mcp)를
통해 Actor를 실행하세요.

적격한 에이전트 워크플로는
[x402](https://docs.apify.com/integrations/x402)나
[Skyfire](https://docs.apify.com/integrations/skyfire)도 사용할 수 있습니다.

Xquik은 47개의 대시보드 도구, 129개의 REST 작업, 서명된 웹훅, MCP 서버도
제공합니다.

## 책임 있는 사용

공개 데이터만 수집하세요. 적용되는 법률과 플랫폼 규칙을 따르세요.

답글 데이터셋에는 개인 데이터가 포함될 수 있습니다. 합법적인 목적을 선택하세요.
보관 기간을 최소화하세요. 내보내기 파일을 보호하세요. 필요한 경우 삭제 & 접근
요청을 존중하세요.

Actor는 보호된 계정을 우회하지 않습니다. X 비밀번호, 쿠키, 토큰을 절대 요청하지 않습니다.

## 관련 Xquik Actor

모든 Xquik Actor는 동일한 추출 엔진, 필터 우선 과금 & 진단 기능을 공유합니다.
필요한 데이터에 맞는 Actor를 선택하세요.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): 검색, 프로필
  타임라인, 리스트 & 트윗 ID에서 50개 이상의 필터와 플랫 내보내기로 트윗을
  스크랩합니다. 분석 없이 트윗 데이터만 필요할 때 사용하세요. 행당 $0.00015부터.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): 핸들, ID
  또는 URL에서 프로필과 게시물, 답글, 미디어 & 팔로워를 스크랩합니다. 검색이
  아니라 계정에서 시작할 때 사용하세요. 행당 $0.00015부터.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): 게시물
  URL이나 ID에 대한 답글, 인용, 리트윗한 사람 & 스레드를
  대량으로 스크랩합니다. 게시물에 참여한 사람을 측정할 때 사용하세요. 행당
  $0.00015부터.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): 팔로워,
  팔로잉, 리스트 멤버, 구독자 & 커뮤니티 멤버를 프로필 행으로 스크랩합니다.
  오디언스나 멤버 목록이 필요할 때 사용하세요. 프로필당 $0.00015부터.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper): 핸들,
  자기소개 & 위치와 팔로워, 인증, 계정 나이 & 위치 필터로 사용자를 검색합니다.
  검색으로 계정 목록을 만들 때 사용하세요. 프로필당 $0.00015부터.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): 리스트 URL이나
  ID에서 리스트 게시물, 멤버 & 팔로워를 스크랩합니다. 큐레이션된 리스트가
  소스를 정의할 때 사용하세요. 행당 $0.00015부터.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): 커뮤니티
  정보, 게시물, 검색, 멤버 & 모더레이터를 스크랩합니다. 소스가 X 커뮤니티일 때
  사용하세요. 행당 $0.00015부터.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): 순위, 볼륨,
  쿼리 & WOEID로 위치별 실시간 트렌드를 스크랩합니다. 어디서 무엇이 트렌드인지
  추적할 때 사용하세요. 트렌드당 $0.00015부터.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): 커버, 작성자,
  날짜 & 지표와 함께 장문의 X 아티클을 마크다운 & 텍스트로 스크랩합니다. 트윗이
  아니라 아티클 본문이 필요할 때 사용하세요. 아티클당 $0.00015부터.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): MP4 &
  메타데이터 옵션과 함께 게시물이나 프로필에서 사진, 동영상 & GIF를 추출하거나
  저장합니다. 미디어 파일 자체가 필요할 때 사용하세요. 미디어 행당
  $0.00015부터.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  AI 관련성, 감정 & 고객 경험 답변으로 브랜드 언급을 추적하고 실행 결과를
  비교합니다. 브랜드를 시간에 따라 지켜볼 때 사용하세요. 분석된 트윗당
  $0.0003부터.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  AI로 모든 트윗에 태도, 강도 & 비꼬는 표현 가능성을 라벨링합니다. 어떤
  주제든 전반적인 감정이 필요할 때 사용하세요. 분석된 트윗당 $0.0003부터.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  AI로 강세, 약세, 중립 또는 혼조 입장, 콘텐츠 유형, 확신도 & 자산 관련성을
  라벨링합니다. 주식, 암호화폐 또는 트레이딩 이야기를 팔로우할 때 사용하세요.
  분석된 트윗당 $0.0003부터.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  AI로 뉴스 게시물을 형식, 출처 표기 & 주제 관련성으로 라벨링합니다. 보도와
  논평을 구분할 때 사용하세요. 분석된 트윗당 $0.0003부터.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  AI로 모든 트윗에 대해 자신만의 카테고리, 점수 & 예/아니오 질문에 답합니다.
  미리 준비된 분석이 라벨에 맞지 않을 때 사용하세요. 분석된 트윗당
  $0.0003부터.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer):
  AI의 특성 답변 8개로 모든 트윗의 0에서 100까지 Viral Score & 판정을
  추정합니다. 트윗이 왜 퍼지거나 묻히는지 연구할 때 사용하세요. 분석된 트윗당
  $0.0003부터.
