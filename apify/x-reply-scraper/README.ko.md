[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · **한국어** ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer가 Xquik MCP를 코딩 에이전트에 연결하는 모습](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Framer가 Xquik 스크레이퍼를 Claude Code, Codex, Cursor 등과 함께 사용하는 방법](https://youtu.be/4UOSpoOoC3Y?t=367)을
6:07부터 보세요.

Xquik은 세계에서 가장 빠르고 저렴한 X(Twitter) 스크레이퍼 서비스이며, 가장
완전한 X 데이터를 제공합니다. Xquik의 X Reply Scraper는 답글, 댓글 & 대화 전체를
수집합니다. 다른 Apify Actor는 대부분 필터링이나 중복 제거 전에 요금을
부과합니다. Xquik은 **필터에 맞고 중복되지 않은 결과를 전달했을 때만** 요금을
받습니다.

모든 Apify 요금제에서 **전달된 행 1개당 $0.00015**로 Twitter 답글 & 댓글을
스크랩하고, X 계정 없이 읽으세요. 게시물 URL, 게시물 ID, 프로필 URL 또는 사용자
아이디를 붙여넣으세요. 답글, 대화, 작성자, 참여 지표, 엔티티 & 미디어 URL을
내보낼 수 있습니다. Apify 플랫폼 사용료는 Apify가 따로 청구합니다. X 로그인은
필요 없습니다. 필터는 데이터셋에 기록하기 전에 실행되므로 전달된 행에만 요금을
냅니다.

> Xquik은 독립적인 제3자 서비스입니다. X Corp와 제휴 관계가 없습니다.
> "Twitter"와 "X"는 X Corp의 상표입니다.

## X Reply Scraper는 무엇을 하나요?

Xquik의 X Reply Scraper는 공개 답글 & 댓글 대화를 수집합니다. 게시물 1개, 대량
URL 목록, 게시물 ID & 사용자 답글 타임라인을 처리합니다.

### 주요 기능

- 자동 모드는 직접 답글 결과가 불완전하면 계속 수집합니다.
- `collectionStrategy`는 Actor가 답글을 수집하는 방식을 정합니다.
- 대량 입력에는 게시물 URL, 게시물 ID, 프로필 & 사용자 아이디를 넣을 수
  있습니다.
- 필터링 & 중복 제거는 과금 전에 실행됩니다.
- 출력은 정렬 모드 4가지, 상세 수준 3가지 & 필드 스타일 3가지를 지원합니다.
- 모든 답글에 원본 대상, 부모 ID, 루트 ID & 깊이가 남습니다.
- 이어받기 커서로 지난 데이터 수집 & 예약 실행을 할 수 있습니다.
- 확인이 필요한 실행은 `diagnostics`에 무료 레코드 1개를 기록합니다. 모든 대상을
  읽고도 답글을 찾지 못한 실행은 레코드를 기록하지 않습니다. 실행 상태가 그
  이유를 알려 줍니다.
- 실행 로그는 페이지 & 대상별 소요 시간을 `fetchDurationMs`,
  `processingDurationMs`, `pushDurationMs`, `statusDurationMs`,
  `fullPageDurationMs` & `fullTargetDurationMs`로 보여 줍니다.
- Apify가 실행을 다시 시작해도 전달된 답글 & 진행 상황은 유지됩니다.

### 사용 사례

- 브랜드 & 제품 게시물에 달린 답글로 감정 & 고객 피드백을 측정합니다.
- 화제가 된 게시물에서 마음에 들어요를 가장 많이 받은 답글 & 댓글의 순위를
  매깁니다.
- 공개 답글에서 질문하거나 필요를 밝힌 리드를 찾습니다.
- 모더레이션, 스팸 & 악용 대응을 위해 답글을 검토합니다.
- 연구 & AI 학습 데이터셋을 위해 대화 전체를 재구성합니다.
- 한 계정이 고객에게 어떻게 답글을 다는지 시간에 따라 추적합니다.

### X Reply Scraper는 어떤 데이터를 추출할 수 있나요?

데이터셋 & run-report 스키마는 반환되는 모든 필드를 설명합니다. 텍스트, 숫자 &
불리언 필드에는 에이전트 & 자동 생성 연동을 위한 예시도 들어 있습니다.

모든 full 답글 행에는 다음 핵심 필드가 들어갈 수 있습니다.

| 필드                | 설명                                              |
| ------------------- | ------------------------------------------------- |
| `id`                | 답글 ID                                           |
| `text`              | 답글 텍스트                                       |
| `fullText`          | 장문 답글 텍스트                                  |
| `createdAt`         | 답글 타임스탬프                                   |
| `lang`              | X 언어 코드                                       |
| `url`               | 답글 바로가기 URL                                 |
| `conversationId`    | X 대화 ID                                         |
| `inReplyToId`       | 바로 위 부모 ID                                   |
| `inReplyToUserId`   | 부모 작성자 ID                                    |
| `inReplyToUsername` | 부모 작성자 사용자 아이디                         |
| `likeCount`         | 마음에 들어요 수                                  |
| `replyCount`        | 하위 답글 수                                      |
| `retweetCount`      | 재게시 수                                         |
| `quoteCount`        | 인용 수                                           |
| `viewCount`         | 조회수                                            |
| `bookmarkCount`     | 북마크 수                                         |
| `author`            | 제공되는 공개 작성자 메타데이터                   |
| `media`             | 이미지, 동영상, GIF와 변형                        |
| `entities`          | 해시태그, 캐시태그, 멘션, URL & 동영상 타임스탬프 |
| `quoted_tweet`      | 있는 경우 인용된 게시물                           |
| `retweeted_tweet`   | 있는 경우 재게시된 게시물                         |

full 행에는 제공되는 원본 메타데이터도 남습니다.

- 게시물 유형 필드는 `type`, `isReply`, `isQuoteStatus`, `isNoteTweet`,
  `isLimitedReply` & `isTranslatable`입니다.
- 텍스트 상세 필드는 `displayTextRange`, `noteTweet`, `article`, `card` &
  `cashtagAttachments`입니다.
- 라벨 & 안내 필드는 `contentDisclosure`, `communityNote`, `possiblySensitive`,
  `tombstone` & `exclusiveContent`입니다.
- 대화 상세 필드는 `conversationControl`, `limitedActions`, `subscriberBadge` &
  `unmentionedUserIds`입니다.
- 맥락 필드는 `source`, `place`, `communityId`, `communityName`,
  `reactionContext` & `postCta`입니다.
- 수정 & 상태 필드는 `edit`, `previousCounts`, `viewState` &
  `authorUnavailable`입니다.

플랫 행에는 상위 대화 정보, 원본 상세, 결과 유형 & 스키마 버전이 남습니다.
정확한 필드는 OpenAPI를 참고하세요.

## X Reply Scraper로 답글을 스크랩하려면 어떻게 하나요?

Apify가 처음인가요? 먼저
[무료 계정을 만드세요](https://console.apify.com/sign-up?fpr=xquik). 무료
요금제는 신용카드가 필요 없고 매달 쓸 수 있는 $5를 줍니다. 행 1개당
$0.00015이므로 $5면 플랫폼 사용료를 빼고 최대 33,000행을 받을 수 있습니다. 그런
다음 여기로 돌아와 Try for free를 누르세요.

1. 게시물 URL, 게시물 ID, 프로필 URL 또는 사용자 아이디를 붙여넣으세요.
2. `maxItems`, `scope` & 작업에 필요한 필터를 설정하세요.
3. Xquik의 X Reply Scraper를 실행하고 데이터셋을 여세요.

양식에는 저희가 테스트한 공개 대화가 미리 채워져 있습니다. full 수준의 플랫 행을
최대 1,000개 반환합니다. 자동 모드는 기본적으로 대화 전체를 검색합니다. 중복
제거 & 원본 표시는 켜진 상태로 유지됩니다.

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

## 태스크 예시

공개 태스크 50개 중에서 고르세요. 태스크마다 범위가 정해진 입력 & 그에 맞는
데이터셋 뷰가 있습니다. 실행하기 전에 원하는 태스크를 수정하세요.

- [X 게시물 답글 & Twitter 댓글 스크랩](https://apify.com/xquik/x-reply-scraper/examples/scrape-post-replies)
- [Twitter 답글 대량 스크랩](https://apify.com/xquik/x-reply-scraper/examples/scrape-bulk-post-replies)
- [Twitter 답글 대화 재구성](https://apify.com/xquik/x-reply-scraper/examples/rebuild-full-conversation)
- [마음에 들어요 순으로 Twitter 답글 순위 매기기](https://apify.com/xquik/x-reply-scraper/examples/rank-most-liked-replies)
- [최신 게시물 답글 스크랩](https://apify.com/xquik/x-reply-scraper/examples/collect-latest-replies)
- [Twitter 답글에서 스팸 제거](https://apify.com/xquik/x-reply-scraper/examples/exclude-spam-keywords)
- [영어 Twitter 답글 스크랩](https://apify.com/xquik/x-reply-scraper/examples/collect-english-replies)
- [인증 계정의 Twitter 답글 스크랩](https://apify.com/xquik/x-reply-scraper/examples/collect-verified-replies)
- [미디어가 있는 Twitter 답글 스크랩](https://apify.com/xquik/x-reply-scraper/examples/collect-media-replies)
- [사용자의 Twitter 답글 타임라인 스크랩](https://apify.com/xquik/x-reply-scraper/examples/scrape-profile-replies)
- [AI 에이전트용 Twitter 답글 수집](https://apify.com/xquik/x-reply-scraper/examples/collect-replies-for-ai-agents)
- [X 답글 RAG 데이터셋 구축](https://apify.com/xquik/x-reply-scraper/examples/build-x-reply-rag-dataset)
- [LLM용 Twitter 답글 보관](https://apify.com/xquik/x-reply-scraper/examples/archive-replies-for-llm-processing)
- [CRM용 X 답글 리드 추출](https://apify.com/xquik/x-reply-scraper/examples/extract-reply-leads-for-crm)

## X 답글 스크랩 비용은 얼마인가요?

Xquik의 X Reply Scraper는 모든 Apify 요금제에서 전달된 행 1개당 $0.00015입니다.
Apify 플랫폼 사용료는 Apify가 따로 청구합니다.

더 많이 수집하려면 선불 사용량이 더 많은
[Apify 요금제를 고르세요](https://apify.com/pricing?fpr=xquik).

Xquik은 전달된 데이터 행 1개마다 한 번 과금합니다. 필터나 중복 제거로 빠진
답글에는 비용이 없습니다. `diagnostics`의 진단 레코드는 무료입니다. 시작, URL,
쿼리, 페이지 넘김 또는 필터 요금은 없습니다.

## 빈 실행, 부분 실행 & 중단된 실행

Xquik의 X Reply Scraper는 빈 실행, 부분 실행 & 중단된 실행의 원인을 무료로 알려
줍니다. 실행 상태는 실행이 멈춘 이유를 알려 줍니다. 과금된 결과 & 읽은 대상 수도
셉니다. 모든 대상을 읽고도 답글을 찾지 못한 실행은 레코드를 기록하지 않습니다.
실행 상태가 그 이유 & 바꿔야 할 설정을 알려 줍니다.

### 추출 미완료

중단된 실행은 무료 `partial` 진단을 기록합니다. 이미 받은 결과는 그대로
남습니다. 다시 시도하기 전에 `availableResults`, `failedTargets`, `retryable` &
`nextAction`을 확인하세요. Actor가 성공으로 종료되면 전달이 끝났다는 뜻입니다.
추출이 모두 끝났다는 뜻은 아닙니다.

실행 상태는 실행이 일찍 멈춘 원인을 모두 알려 줍니다. `stopCauses`는 원인마다
`message`, `retryable` & `nextAction`을 따로 담아 나열합니다. 원인은
`target_not_found`, `target_failed`, `page_limit`, `reply_reach` &
`deadline_reached`입니다. `reply_reach`는 X가 스레드의 일부만 제공했다는
뜻입니다.

찾을 수 없는 게시물이나 계정은 실패로 세지 않습니다. 실행 상태는 "X has no match
for 1 target."처럼 그 대상을 알려 줍니다. 다른 원인으로 실행이 멈췄을 때만
`stopCauses`에 들어갑니다. 원인 중 하나라도 재시도할 수 있으면 실행도
`retryable`입니다.

### 진단

성공한 데이터 행은 `resultType: "reply"`를 씁니다. 확인이 필요한 실행은
`diagnostics`에 무료 레코드를 정확히 1개 기록합니다. 잘못된 입력, 건너뛴 대상,
조기 중단이 그 예입니다. 이 레코드는 문제를 해결하는 방법을 알려 줍니다. 모든
대상을 읽고도 답글을 찾지 못한 실행은 레코드를 기록하지 않습니다. 실행 상태가 그
이유를 알려 줍니다.

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

## 입력

Input 탭에 모든 옵션이 나와 있습니다. 게시물 URL, 게시물 ID, 프로필 URL 또는
사용자 아이디를 1개 이상 넣으세요. 다른 필드는 모두 선택 사항입니다.

### 답글 대상 & 입력 별칭

다음 기본 필드를 쓰세요.

| 입력          | 용도                               |
| ------------- | ---------------------------------- |
| `startUrls`   | X 게시물과 프로필 URL 혼합         |
| `tweetIds`    | 숫자 게시물 ID                     |
| `usernames`   | 프로필 답글 타임라인               |
| `startCursor` | 저장된 커서로 대상 1개 이어서 실행 |

입력 양식에는 표준 컨트롤만 나옵니다. 호환용 별칭은 JSON, API, SDK, 자동화 &
저장된 태스크 입력에서 계속 작동합니다. 표준 필드 & 별칭 필드를 함께 쓰면 기존
우선순위가 적용됩니다.

다음 별칭은 다른 스크레이퍼에서 흔히 쓰는 필드 이름을 받습니다.

- URL 별칭은 `urls`, `tweetUrls`, `postUrls`, `profileUrls` & 문자열 1개인
  `twitterUrl`입니다.
- ID 별칭은 `conversationIds`, `postIds`, `ids`, `tweetId`, `id`입니다.
- 사용자 아이디 별칭은 `twitterHandles`, `screenname`입니다.
- 전체 한도 별칭은 `maxResults`, `max_results`, `resultsLimit`,
  `maxReplies`입니다.
- 대상별 별칭은 `maxRepliesPerTweet`, `maxCommentsPerPost`,
  `resultsPerCategory`입니다.
- 검색 별칭은 `useSearch`입니다.
- 중첩 답글 별칭은 `includeNestedReplies`, `includeRepliesOfReplies`입니다.
- 깊이 별칭은 `maxDepth`에 해당하는 `1`, `2` 또는 `3` 값의 `depth`입니다.
  `full`은 한도를 두지 않습니다.
- 범위 별칭은 `scope: "direct"`에 해당하는 `onlyDirectReplies`입니다.
- 원본 게시물 별칭은 `includeOriginalTweet`, `includeSourceTweet`입니다.
  `includeSourceTweet`를 쓰면 `resultsPerCategory`는 답글 수의 상한이고 게시물은
  행 1개가 더 붙습니다.
- 작성자 별칭은 `excludeOriginalAuthor`에 해당하는 `excludeOpSelfReplies`입니다.
- 정렬 별칭은 `sort`에 해당하는 `sortBy` & `queryType`입니다. `top`, `newest` &
  `mostLiked`는 `relevance`, `latest` & `likes`로 읽습니다.
- 출력 별칭은 `outputVariant`, `includeRaw`입니다.

`replies`로 설정한 `category`는 아무것도 바꾸지 않습니다. `retweets`나
`info`처럼 다른 Actor가 하는 일을 가리키는 카테고리는 실행을 멈춥니다. 이때
실행은 아무것도 읽지 않고 과금하지도 않습니다. 메시지가 써야 할 Actor를 알려
줍니다. 이 별칭 중 하나 & 그 표준 필드를 함께 설정하면 표준 필드 값을 씁니다.
실행 로그에 무시된 별칭이 나옵니다.

형식이 잘못됐거나 지원하지 않는 대상이 있어도 Actor는 실패하지 않습니다. 유효한
대상이 하나도 남지 않으면 실행은 해결 방법이 담긴 진단을 기록합니다.

### 수집 전략

Actor가 답글을 수집하는 방식을 고르세요. 대부분의 작업에는 자동 모드가 맞습니다.

#### 자동 완전 수집

대부분의 작업에는 `collectionStrategy: "auto"`를 쓰세요. 설정한 범위에서 가져올
수 있는 답글을 모두 수집합니다. 범위, 깊이, 정렬 & 작성자 설정은 한도보다 먼저
적용됩니다. 루트가 아닌 대상 아래의 답글도 포함합니다. X가 스레드 일부를 숨기면
실행 상태가 X가 숨긴 답글 수를 알려 줍니다. 다른 `collectionStrategy` 값은
모드를 바꾸지 않습니다.

진단의 수집 범위 수치가 X에 답글이 더 없다는 증거는 아닙니다. 한도, 누락된
데이터 또는 오류 때문에 실행이 불완전하게 끝날 수 있습니다.

#### 직접 답글

X 자체 순서대로 직접 답글을 받으려면 `collectionStrategy: "replies"`를 쓰세요.
저장된 커서를 지원합니다.

#### 대화 검색

대화를 폭넓게 수집하려면 `collectionStrategy: "conversationSearch"`를 쓰세요.

#### 스레드 전체 맥락

원본 대화 맥락을 읽으려면 `collectionStrategy: "thread"`를 쓰세요. 루트 게시물을
깊이 0으로 남기려면 `includeOriginalPost: true`를 설정하세요.

#### 숨겨진 답글

기본 `auto` 전략은 게시물 작성자가 숨긴 답글을 추가합니다. 각 답글은
`resultType: "hiddenReply"`가 들어 있는 행이 되며, 일반 행과 같은 가격으로
과금되고 `maxItems`에 포함됩니다. 게시물의 답글 수가 X가 보여 주는 답글보다 많을
때만 실행이 숨겨진 답글을 읽습니다. 그래서 숨겨진 답글이 없는 게시물에는 추가
비용이 없습니다. 숨겨진 답글을 빼려면 `includeHiddenReplies: false`를
설정하세요.

숨겨진 답글만 받으려면 `collectionStrategy: "hiddenReplies"`를 쓰세요. X는
숨겨진 답글을 오래된 순으로, 그 답글에 달린 답글과 함께 나열합니다. 숨겨진
답글이 없는 게시물은 행을 반환하지 않습니다.

### 직접 답글 & 중첩 답글 설정

결과 형태는 `scope`로 고르세요.

| 값       | 결과                                     |
| -------- | ---------------------------------------- |
| `direct` | 깊이 1 답글 유지                         |
| `nested` | 깊이 2 이상인 답글의 답글 유지           |
| `all`    | 제공되는 직접 답글과 중첩 답글 모두 유지 |

중첩 깊이를 제한하려면 `maxDepth`를 쓰세요. X가 대화의 상위 게시물을 빼면 부모
링크가 없을 수 있습니다. 이 Actor는 확인할 수 있는 가장 정확한 깊이를 남깁니다.

### 정렬

`sort`에는 다음 값을 씁니다.

- `relevance`는 X 원본 순서를 유지합니다.
- `latest`는 최신순으로 정렬합니다.
- `oldest`는 오래된 순으로 정렬합니다.
- `likes`는 마음에 들어요가 많은 순으로 정렬합니다.

X 검색은 일부 오래된 답글의 마음에 들어요 수를 실제보다 적게 셉니다. 그래서
`likes` 실행은 그런 답글을 놓칠 수 있습니다.

프로필 대상은 요청한 수만큼 중복 없이 필터를 거친 결과를 모은 뒤 정렬합니다.
게시물 대상은 전체 정렬을 유지합니다.

호환용 별칭 `sortBy` & `queryType`도 계속 작동합니다.

### 답글 필터

지원하는 필터는 모두 데이터셋에 기록하기 전에 실행됩니다.

#### 텍스트 & 엔티티 필터

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

#### 작성자 & 언어 필터

| 입력                    | 동작                                 |
| ----------------------- | ------------------------------------ |
| `fromUser`              | 답글 작성자 1명만 유지               |
| `toUser`                | 사용자 아이디 1개에 보낸 답글만 유지 |
| `lang`                  | X 언어 코드 1개만 유지               |
| `verifiedOnly`          | 공개 인증 표시가 하나라도 있어야 함  |
| `blueVerifiedOnly`      | X Premium 인증 필수                  |
| `excludeOriginalAuthor` | 원본 작성자의 셀프 답글 제외         |

#### 참여 필터

`minLikes`, `minReplies`, `minRetweets`, `minQuotes`, `minViews` &
`minBookmarks`를 쓰세요. 별칭 `minFaves`는 `minLikes`로 연결됩니다.

#### 미디어 & 시간 필터

- 공개 미디어가 있는 답글만 받으려면 `hasMediaOnly: true`를 설정하세요.
- `mediaType`은 `any`, `image`, `video`, `gif` 또는 `link`로 설정하세요.
- 미디어나 링크가 없는 텍스트 답글만 원하면 `mediaType`을 `none`으로 설정하세요.
- 그 시각을 포함하는 시작 타임스탬프는 `since`로 설정하세요.
- 그 시각을 포함하지 않는 종료 타임스탬프는 `until`로 설정하세요.
- 호환용 별칭으로 `sinceTime` & `untilTime`을 쓸 수 있습니다.

## 출력

각 답글 행은 JSON 객체입니다. 데이터셋 & run-report 스키마가 모든 필드를
설명하므로 AI 에이전트가 추측 없이 행을 읽을 수 있습니다. 데이터셋은 JSON, CSV,
Excel 또는 HTML로 내보내세요.

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

### 출력 모드

각 데이터셋 행에 데이터를 얼마나 담을지 고르세요.

#### Compact 모드

더 간결한 데이터셋을 받으려면 `outputMode: "compact"`를 설정하세요. 텍스트,
대화, 작성자, 참여 & 미디어 필드를 남깁니다.

#### Full 모드

지원하는 공개 필드를 모두 남기려면 `outputMode: "full"`을 설정하세요.

#### Rich 모드

행당 데이터를 가장 많이 받으려면 `outputMode: "rich"`를 설정하세요. Rich 행은
full 열을 모두 남기고 끝에 `hasCommunityNotes`, `quotedTweetPermalink`,
`unavailableAuthorId` & 미디어의 `sourceUser`를 더합니다.

#### Raw 모드

`raw` 아래에 정제된 원본 스냅숏을 추가하려면 `outputMode: "raw"`를 설정하세요.

#### 중첩 또는 플랫

기본 `flat` 레이아웃은 중첩 객체를 유지하고, 표에 쓸 작성자 필드를 추가합니다.
추가되는 플랫 필드를 빼려면 `outputPreset: "nested"`를 설정하세요.

#### 필드 이름 규칙

`fieldStyle`은 `source`, `camelCase` 또는 `snake_case`로 설정하세요. 이 Actor는
서로 충돌하는 원본 키를 덮어쓰지 않습니다.

## 출력 열

입력 8개가 실행이 읽은 각 행의 모양을 정합니다. 이 입력은 코드를 실행하지 않으며
가격도 바꾸지 않습니다.

| 필드                | 하는 일                                                           |
| ------------------- | ----------------------------------------------------------------- |
| `fields`            | 입력한 순서 & 철자 그대로 이 필드만 남깁니다                      |
| `omitFields`        | 이 필드를 빼고 나머지를 남깁니다                                  |
| `renameFields`      | 필드를 새 이름의 열로 옮깁니다                                    |
| `flatten`           | 중첩된 객체를 각각 최상위 열로 바꿉니다                           |
| `fillMissingFields` | 남긴 필드가 행에 없으면 `null`로 채웁니다. 기본으로 켜져 있습니다 |
| `joinFields`        | 이 목록을 각각 텍스트 값 1개로 바꿉니다                           |
| `joinSeparator`     | 합친 항목 사이에 넣는 텍스트입니다. 기본값은 쉼표 & 공백입니다    |
| `constantFields`    | 모든 행에 같은 텍스트가 들어간 열을 추가합니다                    |

- 객체 안의 필드는 `author.id`처럼 점으로 구분해 적으세요. 대소문자 & 밑줄은
  상관없습니다.
- 모든 행에 `id`가 남습니다.
- `fields`를 쓰면 행에 없는 필드는 `null`로 들어갑니다. 그래서 모든 행의 열이
  같아집니다.
- 필드 이름이 잘못되면 실행은 읽기 & 과금 전에 멈춥니다.
- 이름을 확인할 수 없으면 실행은 계속 읽고, 보지 못한 이름을 마지막에
  나열합니다.
- 실행은 다른 Actor용으로 쓴 맵 함수나 jq 필터를 무시합니다.

계산된 열을 추가하려면 그 이름을 `fields`나 `renameFields`에 적으세요.

| 열                  | 계산식                                                                                 |
| ------------------- | -------------------------------------------------------------------------------------- |
| `totalEngagement`   | `likeCount` + `replyCount` + `retweetCount` + `quoteCount`. 없는 수치는 0으로 더합니다 |
| `engagementRate`    | `totalEngagement` × 100 ÷ 작성자의 `followers`, 소수점 4자리까지                       |
| `engagementPerView` | `totalEngagement` × 100 ÷ `viewCount`, 소수점 4자리까지                                |

그 수치가 없는 행의 `totalEngagement`는 `null`입니다. 나누는 값이 없거나 0이면
비율은 `null`입니다.

## 실행 옵션

### 한도, 과금 & 이어서 실행

`maxItems`는 실행 전체에서 전달되는 행 수를 제한합니다. `maxItemsPerTarget`은
게시물이나 프로필마다 제한합니다.

한 실행으로 여러 대상을 읽을 수 있습니다. 상한, 중복 제거, 원본 표시 & 과금은
모든 대상에서 정확하게 유지됩니다.

이 Actor는 출력 & 과금 전에 중복 행을 제거합니다. 서로 다른 대상에서 나온 중복
행을 남기려면 `dedupeAcrossTargets: false`를 설정하세요.

페이지 한도로 끝난 실행 뒤에는 기본 키-값 저장소에서 `next-cursors`를 읽으세요.
그 대상을 이어서 실행하려면 커서 1개를 `startCursor`로 넘기세요.

#### Apify 제한 시간

Apify 기본 제한 시간은 `0`이므로 실행에 시간 제한이 없습니다. 이 Actor는 상한에
이르거나 조건에 맞는 데이터가 떨어질 때까지 계속 실행합니다. 그래도 Apify 제한
시간을 따로 정할 수 있습니다. 그러면 `completionReason: "deadline_reached"`는 그
제한이 가까워졌다는 뜻입니다. 이 Actor는 답글 & 보고서를 저장한 뒤 제한 시간
전에 정상 종료합니다. 전달된 답글은 한 번만 과금됩니다. 끝나지 않은 대상은
나중에 이어서 실행할 수 있습니다.

### API 예시

각 예시는 Xquik의 X Reply Scraper를 실행하고 데이터셋 항목을 반환합니다.
`<APIFY_API_TOKEN>`을 본인의 Apify API 토큰으로 바꾸세요.

#### JavaScript

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

#### Python

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

#### cURL

```bash
actor=xquik~x-reply-scraper
curl "https://api.apify.com/v2/acts/$actor/run-sync-get-dataset-items" \
  -X POST \
  -H "Authorization: Bearer <APIFY_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"tweetIds":["2082577277246972300"],"maxItems":100}'
```

### 자동화 & 연동

Xquik의 X Reply Scraper는 Apify 스케줄, 웹훅 또는 API 클라이언트로 실행할 수
있습니다. Make, Zapier, n8n, Google Sheets 또는 클라우드 저장소에 연결하세요.
에이전트는 [Apify MCP 서버](https://docs.apify.com/platform/integrations/mcp)로
호출할 수 있습니다.

조건을 충족하는 에이전트 워크플로는
[x402](https://docs.apify.com/integrations/x402)나
[Skyfire](https://docs.apify.com/integrations/skyfire)도 쓸 수 있습니다.

Xquik은 대시보드 도구 53개, REST API, 서명된 웹훅 & MCP 서버도 제공합니다.

### AI 에이전트 & MCP 지원

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

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper)는 50개 이상의 필터
  & 플랫 내보내기로 검색, 프로필 타임라인, 리스트 & 게시물 ID에서 게시물을
  스크랩합니다. 분석 없이 게시물 데이터만 필요할 때 사용하세요. 행당
  $0.00015부터입니다.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper)는 사용자
  아이디, ID 또는 URL로 프로필과 그 계정의 게시물, 답글, 미디어 & 팔로워를
  스크랩합니다. 검색이 아니라 계정에서 시작할 때 사용하세요. 행당
  $0.00015부터입니다.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper)는 게시물
  URL이나 ID로 답글, 인용, 재게시한 사람 & 스레드를 대량으로 스크랩합니다. 누가
  게시물에 반응했는지 측정할 때 사용하세요. 행당 $0.00015부터입니다.
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper)는
  게시물을 인용한 게시물을 텍스트, 미디어, 수치, 작성자 & 11개의 필터와 함께
  스크랩합니다. 게시물을 인용한 사람 & 그들이 한 말을 살펴볼 때 사용하세요.
  게시물당 $0.00015부터입니다.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper)는 팔로워,
  팔로잉, 리스트 멤버, 구독자 & 커뮤니티 멤버를 프로필 행으로 스크랩합니다.
  오디언스나 멤버 목록이 필요할 때 사용하세요. 프로필당 $0.00015부터입니다.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper)는
  사용자 아이디, 자기소개 & 위치로 사용자를 검색하며 팔로워, 인증, 계정 연령 &
  위치 필터를 지원합니다. 검색으로 계정 목록을 만들 때 사용하세요. 프로필당
  $0.00015부터입니다.
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper)는
  X의 "Account based in" 라벨, X에 연결된 방식 & 사용자 아이디 변경 내역으로
  계정이 어디에 기반을 두고 있는지 확인합니다. 계정의 기반 위치를 검증할 때
  사용하세요. 계정당 $0.00015부터입니다.
- [X Email Scraper](https://apify.com/xquik/x-email-scraper)는 사용자 아이디,
  팔로워 또는 사용자 검색에서 계정이 프로필에 공개한 이메일, 전화번호 & 링크를
  가져옵니다. 프로필이 공개한 이메일이 필요할 때 사용하세요. 프로필당
  $0.00015부터입니다.
- [X List Scraper](https://apify.com/xquik/x-list-scraper)는 리스트 URL이나 ID로
  리스트 게시물, 멤버 & 팔로워를 스크랩합니다. 직접 고른 리스트로 수집 대상을
  정할 때 사용하세요. 행당 $0.00015부터입니다.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper)는 커뮤니티
  정보, 게시물, 검색 결과, 멤버 & 모더레이터를 스크랩합니다. X 커뮤니티에서
  데이터를 모을 때 사용하세요. 행당 $0.00015부터입니다.
- [X Space Scraper](https://apify.com/xquik/x-space-scraper)는 키워드로
  스페이스를 찾고 제목, 상태, 시간, 청취자 수, 호스트 & 스피커를 읽습니다.
  URL이나 ID로 방송도 읽습니다. X의 라이브 오디오 & 동영상을 추적할 때
  사용하세요. 스페이스 또는 방송당 $0.00015부터입니다.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper)는 위치별 실시간
  트렌드를 순위, 볼륨, 쿼리 & WOEID와 함께 스크랩합니다. 어디에서 무엇이
  트렌드인지 추적할 때 사용하세요. 트렌드당 $0.00015부터입니다.
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper)는 키워드, 지역, 근무
  형태, 직급 & 회사별로 X 채용 공고를 급여 & 지원 링크와 함께 스크랩합니다. X에
  올라온 채용 공고를 모을 때 사용하세요. 공고당 $0.00015부터입니다.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper)는 장문의 X
  아티클을 커버, 작성자, 날짜 & 지표와 함께 마크다운 & 텍스트로 스크랩합니다.
  게시물이 아니라 아티클 본문이 필요할 때 사용하세요. 아티클당
  $0.00015부터입니다.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader)는 게시물이나
  프로필의 사진, 동영상 & GIF를 MP4 & 메타데이터 옵션과 함께 추출하거나
  저장합니다. 미디어 파일 자체가 필요할 때 사용하세요. 미디어 행당
  $0.00015부터입니다.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring)는
  브랜드 언급을 추적하고, AI로 관련성, 감정 & 고객 경험 질문에 답하며, 실행
  결과끼리 비교합니다. 브랜드를 꾸준히 지켜볼 때 사용하세요. 분석한 게시물당
  $0.0003부터입니다.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis)는
  AI로 게시물마다 태도, 강도 & 비꼼 확률을 라벨링합니다. 어떤 주제든 전반적인
  감정을 알고 싶을 때 사용하세요. 분석한 게시물당 $0.0003부터입니다.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)는
  AI로 강세, 약세, 중립 또는 혼조 입장과 콘텐츠 유형, 확신도 & 자산 관련성을
  라벨링합니다. 주식, 암호화폐 또는 트레이딩 이야기를 지켜볼 때 사용하세요.
  분석한 게시물당 $0.0003부터입니다.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)는
  AI로 뉴스 게시물을 형식, 출처 표기 & 주제 관련성에 따라 라벨링합니다. 보도와
  논평을 구분할 때 사용하세요. 분석한 게시물당 $0.0003부터입니다.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)는
  직접 만든 카테고리, 점수 & 예/아니오 질문에 AI로 게시물마다 답합니다. 기본
  분석이 원하는 라벨과 맞지 않을 때 사용하세요. 분석한 게시물당
  $0.0003부터입니다.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)는
  AI 특성 답변 8개로 게시물마다 0에서 100까지의 Viral Score & 판정을 추정합니다.
  게시물이 왜 퍼지거나 묻히는지 분석할 때 사용하세요. 분석한 게시물당
  $0.0003부터입니다.

## 자주 묻는 질문

자주 묻는 질문에 먼저 답하고, 이어서 도움받을 곳을 안내합니다.

### 게시물의 댓글은 어떻게 스크랩하나요?

게시물 URL을 `startUrls`에 붙여넣고 Start를 클릭하세요. X는 댓글을 답글이라고
부르므로 댓글 1개가 답글 행 1개가 됩니다.

### 여러 게시물의 답글을 한 번에 스크랩할 수 있나요?

네. 실행 1번에 게시물 URL이나 게시물 ID를 여러 개 붙여넣으세요. 각 답글의 원본
게시물은 `sourceTarget`에 남습니다.

### 중첩 답글도 포함되나요?

네. 기본 `scope`는 직접 답글 & 중첩 답글을 수집합니다. 게시물에 직접 달린 답글만
받으려면 `scope`를 `direct`로 설정하세요. `maxDepth`는 실행이 내려가는 깊이를
제한합니다.

### 작성자가 숨긴 답글도 가져오나요?

네. 기본 `auto` 전략은 숨겨진 답글을 `hiddenReply` 행으로 추가합니다. 건너뛰려면
`includeHiddenReplies: false`를 설정하세요.

### 답글을 마음에 들어요 수나 날짜순으로 정렬할 수 있나요?

네. `sort`를 설정하면 답글을 마음에 들어요 순으로 정렬하거나 최신순 또는 오래된
순으로 나열할 수 있습니다.

### 답글을 CSV나 Excel로 내보낼 수 있나요?

네. 데이터셋을 CSV, Excel, JSON 또는 HTML로 내보내세요. 플랫 출력은 행마다 답글
1개를 담고 그 옆에 작성자 필드를 둡니다.

### 게시물 대신 사용자의 답글을 스크랩할 수 있나요?

네. 프로필 URL이나 사용자 아이디를 붙여넣으세요. 실행은 그 사용자의 답글
타임라인을 읽습니다.

### X API 키나 로그인이 필요한가요?

아니요. X API 키, 로그인, 자격 증명이 모두 필요 없습니다. Xquik의 X Reply
Scraper는 X 비밀번호, 쿠키나 토큰을 요구하지 않습니다.

### X 답글을 스크랩해도 합법인가요?

Xquik의 X Reply Scraper는 공개 답글을 수집하며 비공개 계정을 우회하지 않습니다.
공개 데이터만 수집하세요. 관련 법률 & 플랫폼 규칙을 따르세요.

답글 데이터셋에는 개인정보가 들어 있을 수 있습니다. 적법한 목적을 정하세요. 보관
기간은 최소로 하세요. 내보낸 파일을 보호하세요. 필요한 경우 삭제 & 열람 요청에
응하세요. 확실하지 않으면 자격을 갖춘 법률 전문가에게 문의하세요.

### 게시물에 표시된 것보다 답글이 적게 나오는 이유는 무엇인가요?

X가 스레드 일부를 숨기면 실행 상태가 X가 숨긴 답글 수를 알려 줍니다.
`stopCauses`의 `reply_reach`는 X가 스레드의 일부만 제공했다는 뜻입니다. 필터,
중복 제거, `scope`, `maxDepth` & 설정한 한도도 개수를 줄입니다.

### API, 스케줄 & 연동을 사용할 수 있나요?

네. [API 탭](https://apify.com/xquik/x-reply-scraper/api)에 Python, JavaScript &
cURL 예시가 있습니다. Apify
[스케줄](https://docs.apify.com/platform/schedules)로 Xquik의 X Reply Scraper를
cron 일정에 맞춰 실행하세요. Make, Zapier, n8n & Google Sheets에도 연결됩니다.

### 도움은 어디서 받을 수 있나요?

실행 ID와 함께 [Issues 탭](https://apify.com/xquik/x-reply-scraper/issues)에서
이슈를 여세요.

### 맞춤 솔루션을 받을 수 있나요?

네. [Issues 탭](https://apify.com/xquik/x-reply-scraper/issues)에 필요한 내용을
적어 주세요. Xquik은 대시보드, REST API, MCP 서버 & 웹훅도 제공합니다. Xquik
웹사이트는 [Apify 프로필](https://apify.com/xquik)에서 찾을 수 있습니다.
