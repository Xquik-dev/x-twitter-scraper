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
스크레이퍼 서비스입니다. X Tweet Scraper는 50개 이상의 필터로 트윗, 답글,
프로필, 리스트 & 검색을 수집합니다. 다른 모든 Apify Actor는 필터링이나 중복
제거 전에 요금을 부과합니다. Xquik은 전달되고, 고유하며, 필터에 맞는 결과에만
요금을 부과합니다.

**모든 Apify 요금제에서 전달된 결과당 $0.00015부터** 공개 X(Twitter) 트윗을
스크랩하세요. Apify는 플랫폼 사용량을 별도로 청구합니다. X 로그인, 시작 요금,
쿼리 요금이 없습니다. [Xquik](https://xquik.com)이 만들었습니다.

> Xquik은 독립적인 제3자 서비스입니다. X Corp와 제휴 관계가 없습니다.
> "Twitter"와 "X"는 X Corp의 상표입니다.

## X Tweet Scraper는 무엇을 하나요?

X Tweet Scraper는 트윗, 참여 지표, 공개 작성자 프로필, 미디어를 반환합니다.
URL, 핸들, 리스트 ID, 트윗 ID, 검색 쿼리를 50개 이상의 필터와 함께 받아들입니다.

### 기본 동작

- 필터 & 중복 제거는 과금 전에 실행됩니다.
- 하나의 입력이 조회, 타임라인, 리스트, 검색, 참여 모드를 지원합니다.
- 트윗 ID 입력에는 고정된 개수 상한이 없습니다. Apify 지출 & 시간 제한
  설정이 적용됩니다.
- 실행 로그는 `fetchDurationMs`, `processingDurationMs`, `pushDurationMs`,
  `statusDurationMs`, `fullPageDurationMs`로 페이지별 소요 시간을 보여 줍니다.
- Apify가 실행을 다시 시작해도 전달된 행 & 진행 상황은 유지됩니다.

### 항상 최신 빌드를 사용하세요

게시된 모든 수정 사항을 받으려면 매 실행마다 `latest`를 선택하세요.

빌드를 지정하지 않으면 Apify는 이 Actor의 `latest` 기본값을 사용합니다.
Console 실행과 표준 API 예시는 이 기본값을 상속받습니다.

저장된 태스크는 Actor 기본값을 재정의할 수 있습니다. 스케줄과 태스크 통합은
그 선택을 재사용합니다. 모든 재정의를 `latest`로 유지하세요.

Apify는 정확한 빌드 번호를 `latest`로 리다이렉트하지 않습니다. 고정된 번호를
`latest`로 교체하세요. 정확한 빌드는 임시 롤백이나 재현성 확보에만 사용하세요.

Apify의 [빌드 태그](https://docs.apify.com/platform/actors/development/builds-and-runs/builds),
[실행 옵션](https://docs.apify.com/platform/actors/running/runs-and-builds),
[태스크 문서](https://docs.apify.com/platform/actors/running/tasks)를
읽어보세요.

## 태스크 예시

50개의 공개 태스크 중에서 선택하세요. 각 태스크에는 제한된 입력과 그에 맞는
데이터셋 뷰가 있습니다. 모든 태스크는 실제 검색이나 대상으로 시작합니다.
실행하기 전에 편집하세요.

- [Fetch fresh X posts for AI agents](https://apify.com/xquik/x-tweet-scraper/examples/search-x-posts-for-ai-agents)
- [Build an X dataset for RAG](https://apify.com/xquik/x-tweet-scraper/examples/build-x-rag-dataset)
- [Extract an X article for RAG](https://apify.com/xquik/x-tweet-scraper/examples/extract-x-article-for-rag)
- [Monitor AI search visibility on X](https://apify.com/xquik/x-tweet-scraper/examples/monitor-ai-search-visibility-on-x)
- [Track AI SEO and generative engine optimization](https://apify.com/xquik/x-tweet-scraper/examples/track-generative-engine-optimization-talk)
- [Discover AI agent tools on X](https://apify.com/xquik/x-tweet-scraper/examples/discover-ai-agent-tools-on-x)
- [Collect AI product feedback](https://apify.com/xquik/x-tweet-scraper/examples/collect-ai-product-feedback)
- [Monitor brand mentions on X](https://apify.com/xquik/x-tweet-scraper/examples/monitor-brand-mentions-on-x)
- [Export Twitter data to CSV](https://apify.com/xquik/x-tweet-scraper/examples/export-twitter-data-to-csv)
- [Collect replies to an OpenAI post](https://apify.com/xquik/x-tweet-scraper/examples/collect-replies-to-an-openai-post)
- [Extract a complete Twitter thread](https://apify.com/xquik/x-tweet-scraper/examples/extract-complete-twitter-thread)
- [Collect Spanish AI conversations](https://apify.com/xquik/x-tweet-scraper/examples/collect-spanish-ai-conversations)

### X Tweet Scraper는 어떤 데이터를 추출할 수 있나요?

| 필드                    | 설명                                                        |
| ----------------------- | ----------------------------------------------------------- |
| `id`                    | 트윗 ID                                                      |
| `text`                  | 트윗 전체 텍스트(최대 25,000자의 노트 트윗 포함)             |
| `createdAt`             | X 고유 타임스탬프 문자열                                     |
| `likeCount`             | 좋아요 수                                                    |
| `retweetCount`          | 리트윗 수                                                    |
| `replyCount`            | 답글 수                                                      |
| `quoteCount`            | 인용 트윗 수                                                 |
| `viewCount`             | 조회 수                                                      |
| `bookmarkCount`         | 북마크 수                                                    |
| `lang`                  | 트윗 언어                                                    |
| `url`                   | 트윗으로 바로 가는 링크                                      |
| `tweetUrl`              | 플랫 출력 트윗 URL 별칭                                      |
| `twitterUrl`            | 플랫 출력 twitter.com 형식 URL                               |
| `author`                | 사용 가능한 작성자 필드(사용자 이름, 자기소개, 웹사이트, 개수) |
| `authorUsername`        | 플랫 출력 작성자 핸들                                        |
| `authorFollowers`       | 플랫 출력 작성자 팔로워 수                                   |
| `authorUrl`             | 사용 가능한 경우 플랫 출력 작성자 웹사이트                    |
| `authorDescription`     | 플랫 출력 작성자 자기소개 텍스트                              |
| `authorCoverPicture`    | 플랫 출력 작성자 배너 이미지 URL                              |
| `authorPinnedTweetIds`  | 플랫 출력 작성자 고정 트윗 ID                                 |
| `media`                 | 첨부된 이미지, 동영상, GIF                                   |
| `mediaUrls`             | 플랫 출력 미디어 URL                                         |
| `imageUrls`             | 플랫 출력 이미지 URL                                         |
| `videoUrls`             | 플랫 출력 동영상 URL                                         |
| `entities`              | 해시태그, URL, 멘션, 동영상 타임스탬프                       |
| `displayTextRange`      | 사용 가능한 경우 X 표시 텍스트 범위                          |
| `contentDisclosure`     | 사용 가능한 경우 공개 정보 메타데이터                        |
| `conversationControl`   | 답글 정책 & 공개 대화 소유자                                 |
| `reactionContext`       | 리액션이 참조하는 공개 게시물 & 사용자                       |
| `limitedActions`        | 공개 상호작용 제한 & 안내 문구                               |
| `isLimitedReply`        | 답글이 제한되었는지 여부                                     |
| `isNoteTweet`           | 노트 트윗(장문 게시물) 여부                                  |
| `isQuoteStatus`         | 다른 트윗을 인용하는지 여부                                  |
| `isRetweet`             | 이 행이 리트윗인지 여부, 원본 첨부                           |
| `isPinned`              | 작성자가 고정한 게시물인지 여부, 플랫 행                        |
| `isReply`               | 답글인지 여부                                                |
| `quoted_tweet`          | 인용된 트윗 객체(인용 트윗인 경우)                           |
| `conversationId`        | 스레드/대화 ID                                               |
| `resultType`            | 리치 행, 참여 행, 진단에 대한 행 유형                        |
| `sourceTweetId`         | 아티클 & 참여 모드의 원본 트윗 ID                             |
| `article`               | `mode: "article"`에서 구조화된 아티클 데이터                 |

선택적 트윗 메타데이터에는 `authorUnavailable`, `card`, `communityId`,
`communityNote`, `edit`, `exclusiveContent`, `noteTweet`, `postCta`가 포함될 수
있습니다. `isTranslatable`, `place`, `possiblySensitive`, `viewState`는 그 밖의
공개 맥락을 보존합니다. `previousCounts`는 수정 전 참여 지표를 보존합니다.
`tombstone`은 안내 문구를 보존합니다. `unmentionedUserIds`는 대화를 떠난
사용자를 나열합니다. 정확한 필드는 OpenAPI를 참고하세요.

중첩된 작성자는 공개 프로필 계약을 따릅니다. 여기에는 신원, 개수, 인증, 사용
가능 여부, 전문 데이터, 프로필 자기소개가 포함됩니다.

리트윗 행은 `isRetweet`을 `true`로 설정합니다. 해당 행의 `text`는 원본 게시물
전체를 담고, `retweeted_tweet`은 원본 게시물을 작성자 & 카운트와 함께 담습니다.

트윗 행은 `type`, `source`, `inReplyToId`, `inReplyToUserId`,
`inReplyToUsername`, `retweeted_tweet`도 보존합니다. 인용 & 재게시된 트윗은
동일한 지원 안전 필드를 재귀적으로 보존합니다.

미디어에는 사용 가능 여부, 크기, 태그, 동영상 변형, `watchNowUrl`,
`visitSiteUrl` 액션이 포함됩니다.

행에는 뷰어 전용 상태가 절대 포함되지 않습니다. 팔로우, 차단, 뮤트, 북마크, 좋아요, 재게시, 편집 권한 및 유사한 뷰어 플래그는 raw
출력을 포함해 항상 제거됩니다.

## 트윗을 스크랩하는 데 비용이 얼마나 드나요?

모든 Apify 요금제는 전달된 행당 `$0.00015`입니다. Apify는 플랫폼 사용량을
별도로 청구합니다. Xquik은 전달된 데이터 행당 1회 과금합니다. 진단 정보는
`diagnostics` 출력에서 무료입니다.

별도의 Xquik 구독은 적용되지 않습니다. 별도의 시작이나 쿼리 요금도 없습니다.
각 실행은 Apify가 Actor에 노출하는 실시간 이벤트당 요금으로 계산된
`estimatedChargeUsd`가 담긴 `run-report` 레코드도 작성합니다. 입력이 없거나
잘못된 입력으로 종료된 경우를 포함해 모든 결과가 `run-report`를 작성합니다.
실행 보고서는 `realRows`의 데이터 행과 `diagnosticRows`의 진단을 구분합니다.

다음 실행에 지출하기 전에 빈 결과의 원인을 파악하세요. 보고서 & 최종 진단의 `filtering` 객체는 필터가 제거한 행 수를 집계합니다.
`serverFilteredRows`, `actorFilteredRows`, `pagesWithUnknownServerFiltering`을
확인하세요. 필터링된 행에는 결과 요금이 부과되지 않습니다.

소스 소진은 요청한 제한보다 낮은 상태로 추출을 완료할 수 있습니다. 이런
실행은 `completionReason: "source_exhausted"`와 함께
`outcome: "complete"`를 보고합니다. 중단된 실행은 부분 결과와 재시도 안내를
유지합니다.

`failedSubtargets`는 오류 후 중단된 쿼리와 프로필 대상을 집계합니다. 전달된 행은 데이터셋에 남고 과금에 포함됩니다. 오류가
대상이 없다는 뜻은 아닙니다. 이러한 실행은 `completionReason: "partial_failure"`를 사용합니다.

추출이 중단되면 무료 `partial` 진단도 기록됩니다. 사용 가능한 결과는 그대로
유지됩니다. 진단은 `availableResults`, `failedTargets`, `retryable`,
`nextAction`을 보고합니다. Actor가 성공적으로 종료되었다는 것은 전달이
확인됐다는 뜻이지, 추출이 완료됐다는 뜻은 아닙니다.

상태 메시지는 중단 원인을 모두 표시합니다. 찾을 수 없는 계정 & 정체된 검색이
함께 있는 실행은 둘 다 표시합니다. `stopCauses`는 각 원인을 나열하고, 원인마다
`message`, `retryable` & `nextAction`을 따로 담습니다. 원인은
`target_not_found`, `target_protected`, `search_unavailable`, `likes_hidden`,
`target_failed`, `pagination_safety_limit`, `reply_reach` &
`deadline_reached`입니다. 원인 중 하나라도 `retryable`이면 실행도
`retryable`입니다.

보호되거나 누락된 대상은 유효한 결과가 있는 실행을 포함해 실패로 집계됩니다. X가
실행할 수 없는 검색도 실패로 집계됩니다. X.com은 이런 검색에 "Something went
wrong"을 표시합니다. 실행은 재시도 없이 이 검색을 즉시 멈춥니다. X가 숨기는
좋아요도 실패로 집계됩니다. X는 게시물에 좋아요를 누른 사람을 작성자에게만 보여
줍니다. 계정이 좋아요를 누른 게시물도 그 계정에게만 보여 줍니다. 모든 실패가
사용할 수 없는 대상 때문일 때는 진단에서 `retryable: false`로 설정됩니다. 대상
URL이나 사용자 이름을 확인하고 사용 가능한 공개 계정을 선택하세요. X가 실행할 수
없는 검색은 범위를 좁히거나 필터를 바꾸세요. 숨겨진 좋아요 대신 리트윗한 사람,
답글 또는 게시물을 읽으세요. 다른 실패는 마치지 못한 대상에 대한 재시도 안내를
유지합니다.

진단은 이런 대상을 `unavailableTargets`에 나열합니다. 각 항목에는 입력한
그대로의 `target`과 `reason`이 있으며, `reason`은 `not_found`, `protected`,
`search_unavailable` 또는 `likes_hidden`입니다. 목록은 최대 100개 항목을
담습니다. 완전한 실행을 얻으려면 입력에서 이 대상을 빼세요.

`completionReason: "pagination_safety_limit"`는 읽기 실패가 아닙니다. 실행은 유효한 행을 유지한 뒤 더
이상 새 결과를 반환하지 않는 대상을 종료했습니다. 실행은 추출이 완료되지 않았다고 보고합니다. `failedSubtargets`는 `0`으로
유지됩니다. 전달된 행에 대해서만 비용을 지불합니다.

기본 Apify 시간 제한은 `0`이므로 실행에 시간 제한이 없습니다. Actor는 상한에 도달하거나 적격 데이터가 소진될 때까지 계속됩니다.
유한한 Apify 시간 제한을 직접 설정할 수도 있습니다. 그러면 `completionReason: "deadline_reached"`는 그
제한이 가까워졌다는 뜻입니다. Actor는 제한 전에 행 & 보고서를 저장하고 정상적으로 종료합니다. 전달된 행은 한 번만 과금됩니다.

- 시작, 쿼리, URL, 단건 트윗 조회에는 별도의 요금이 추가되지 않습니다.
- Actor는 행을 쓰거나 과금하기 전에 중복을 제거합니다.
- 입력이 없거나, 입력이 잘못됐거나, 출력이 0인 실행은 무료 `diagnostics`
  출력에 실행 가능한 레코드 1건을 작성합니다.

## X Tweet Scraper로 트윗 데이터를 스크랩하는 방법

### 1. URL을 직접 붙여넣기

트윗, 프로필, 검색, 리스트 URL을 혼합해 붙여넣으세요.

```json
{
  "startUrls": [
    { "url": "https://x.com/elonmusk/status/1846987139428634858" },
    { "url": "https://x.com/nasa" },
    { "url": "https://x.com/search?q=AI%20lang%3Aen" },
    { "url": "https://x.com/i/lists/1748648376080666720" }
  ],
  "maxItems": 500
}
```

트윗 URL은 해당 트윗을 중복 없이 입력 순서대로 반환합니다. 프로필 URL은 해당 계정의 게시물을 반환합니다. 검색 URL은 해당 쿼리를
실행합니다. 리스트 URL은 해당 리스트의 게시물을 반환합니다. `maxItems`는 붙여 넣은 모든 URL의 결과 합계를 제한합니다.

### 2. 대량 핸들

많은 `from:username` 검색을 위한 축약형입니다.

```json
{ "twitterHandles": ["elonmusk", "nasa", "openai"], "maxItems": 100 }
```

각 핸들은 해당 계정의 게시물을 반환합니다. Actor는 출력 & 과금 전에 중복 행을 제거합니다. 사용자 이름에는 선택적으로 `@` 접두사를
붙일 수 있습니다. 핸들 & 프로필 URL은 X의 Posts 탭처럼 재게시를 유지합니다. 날짜나 필터를 지정해도 마찬가지입니다. 재게시를
제외하려면 `tweetTypes.excludeRetweets`를 설정하세요.

### 3. 트윗 검색

**Search Terms** 필드에 하나 이상의 쿼리를 설정하세요.

```json
{
  "searchTerms": ["from:elonmusk AI", "#bitcoin lang:en"],
  "maxItems": 1000,
  "queryType": "Latest"
}
```

`mode`가 트윗 ID 없이 `tweet`이나 `tweets`이면 쿼리 입력은 검색으로
라우팅됩니다. 이는 유효한 `searchTerms`가 빈 조회를 반환하지 않도록
방지합니다.

`from:elonmusk since:2026-01-01 until:2026-01-02`처럼 날짜 범위가 있는 계정 백필도 지원합니다. 각
검색어는 자체 `searchTerm` 귀속을 유지합니다. `maxItems`는 모든 검색어의 결과 합계를 제한합니다. Actor는 반환된 모든
트윗을 `since:`, `until:`, 유닉스 시간 범위와 대조해 확인합니다. 필터가 있는 검색은 일치하는 결과를 찾거나 X에 더 이상
결과가 없을 때까지 계속 읽습니다.

`from:` 검색어는 X 검색이 반환하는 결과를 그대로 반환하므로 재게시를 제외합니다.
재게시를 유지하려면 `include:nativeretweets`를 추가하세요. 재게시만 원하면
`filter:nativeretweets`를 추가하세요.

### 4. ID로 트윗 조회하기

```json
{ "tweetIds": ["1846987139428634858", "1858743654778892784"], "maxItems": 100 }
```

결과는 입력 순서를 유지하고, 중복을 제거하며, 요청한 트윗만 포함합니다.

같은 조회에 허용되는 별칭에는 `tweetId`, `tweetIDs`, `tweets`, `postIds`,
`lookupPostIds`, `tweetUrls`, `postUrls`가 있습니다.

### 5. 명시적 참여, 스레드, 아티클 모드

다른 입력 필드와 관계없이 하나의 경로를 원한다면 `mode`를 사용하세요.

```json
{ "mode": "replies", "replyTweetIds": ["1846987139428634858"], "maxItems": 100 }
```

지원되는 명시적 모드: `tweet`, `tweets`, `search`, `profileTweets`,
`profileReplies`, `profileMedia`, `profileLikes`, `listTweets`, `article`,
`replies`, `quotes`, `thread`, `retweeters`, `favoriters`.

`profileTweets`는 X에서 프로필의 Posts 탭을 따릅니다. 계정의 게시물,
재게시 & 자기 게시물에 단 답글을 날짜순으로 반환합니다. 다른 계정에 단
답글 & 다른 작성자의 대화 맥락은 과금 전에 제외됩니다.

원본 게시물만 원하면 원하지 않는 유형을 제외하세요:

```json
{
  "mode": "profileTweets",
  "twitterHandles": ["apify"],
  "tweetTypes": { "excludeReplies": true, "excludeRetweets": true },
  "maxItems": 100
}
```

`tweetTypes.excludeReplies`, `excludeRetweets` & `excludeQuotes`는 모든
소스에서 작동합니다. 검색은 이를 `-filter:replies`, `-filter:nativeretweets`
& `-filter:quote`로 X에 보냅니다. 프로필이나 리스트에서는 Actor가 해당 행을
직접 버립니다. 제외된 행은 데이터셋에 도달하지 않습니다. 그래서 그 행에
비용을 지불하지 않으며, `maxItems`에도 집계되지 않습니다.

`profileReplies`는 X의 With Replies 탭을 따릅니다. 대상이 작성한 프로필
게시물과 답글을 반환합니다. Actor는 다른 작성자의 대화 맥락을 제외합니다.
답글만 필요할 때는 `filter:replies`나 `to:` 검색을 사용하세요.

검색 & 페이지네이션되는 트윗 모드는 `time.since`, `time.until`, 유닉스 타임스탬프, `lang`을 지원합니다. 여기에는
프로필 Posts, With Replies, Media, Likes, 리스트, 답글, 인용, 스레드가 포함됩니다. 일치하는 플랫 날짜 연산자도
작동합니다. Actor는 과금 전에 각 행을 확인합니다. 날짜 하한은 포함되고 상한은 제외됩니다. 날짜 필터는 사용할 수 있는 날짜가 없는 행을
제외합니다. 언어 필터는 언어가 없거나 일치하지 않는 행을 제외합니다. 필터링된 행은 요청한 결과 한도를 소모하지 않습니다. 날짜 범위가 있는
리스트 실행은 이전 날짜에 빠르게 도달합니다. 하한을 지나면 종료됩니다. 리스트의 아주 오래된 범위에서는 일부 답글이 빠질 수 있습니다. 상한이
제외되므로 `since` & `until`에 같은 날짜를 지정하면 빈 범위가 됩니다. 하루 전체를 가져오려면 `until`을 다음 날로
설정하세요. 트윗 필터는 사용자 목록이나 트윗/아티클 직접 조회에는 적용되지 않습니다.

`time.withinTime` & `within_time`도 같은 모드에서 작동합니다. `7d` 값은 실행이
읽기를 시작하기 전 최근 7일의 게시물을 남깁니다. 2006년 이전까지 거슬러 올라가는
윈도우는 모든 게시물을 남깁니다.

`mode: "replies"`는 더 엄격합니다. 모든 트윗 행의 `inReplyToId`는 요청한 트윗 ID와 같습니다. 중첩된 대화 답글은
직접 답글로 계산되지 않습니다. X가 보고한 수보다 적은 답글을 보여 주면 Actor는 찾은 행을 유지합니다. 한도에 도달하지 않으면
`diagnostics`에 `replies-incomplete` 레코드 1개를 추가합니다. 실행은 한도에 도달하거나 X에 더 이상 답글이 없을
때까지 부분 상태로 유지됩니다. `replyCoverage`는 답글 수 & 커버리지 세부 정보를 보고합니다. 단일 답글 대상에 대해
25,000개를 넘는 합계를 포함해 요청하는 합계로 `maxItems`를 설정하세요.

아티클 행에는 `resultType: "article"`, `sourceTweetId`, `article`, 선택적
`author`가 포함됩니다. 참여 사용자 행에는 `resultType: "user"`,
`sourceTweetId`, `engagementMode`가 포함됩니다.

리트윗한 사람은 일반적인 공개 참여 모드입니다. 좋아요를 누른 사람은 최선
노력 기반입니다. X는 적격하거나 소유자에게 보이는 게시물에 대해서만 좋아요
누른 사용자를 노출할 수 있습니다. 프로필 좋아요도 최선 노력 기반인데, 많은
공개 프로필이 읽을 수 있는 Likes 탭을 노출하지 않기 때문입니다. X가 사용자나
좋아요를 누른 트윗을 노출하지 않으면 Actor는 무료 `diagnostics` 레코드를
작성합니다. 북마크 수는 트윗 행에 나타날 수 있지만, X는 게시물을 북마크한
구체적인 계정은 노출하지 않습니다.

### 6. 플랫 CSV 출력

기본 중첩 JSON 필드를 유지하거나 스프레드시트 친화적인 열을 추가하세요.

```json
{ "searchTerms": ["from:nasa moon"], "maxItems": 100, "outputPreset": "flat" }
```

플랫 출력은 `author`와 `media`를 그대로 유지하면서 `authorUsername`,
`authorName`, `authorFollowers`, `tweetUrl`, `twitterUrl`, `mediaUrls`,
`imageUrls`, `videoUrls` 같은 최상위 필드도 추가합니다.

모든 플랫 트윗 행은 `media`를 담습니다. 미디어가 없는 트윗은 빈 리스트를
가지므로, 스프레드시트나 타입이 지정된 파이프라인에서 모든 행이 같은 키를
가집니다.

### 7. 필드 명명 선택

기본적으로 레거시 필드 이름을 유지합니다. 리치 또는 원본 결과 데이터를
위한 스타일을 선택하세요.

```json
{
  "searchTerms": ["from:nasa moon"],
  "maxItems": 100,
  "outputVariant": "rich",
  "fieldStyle": "snake_case"
}
```

최상위 & 중첩 결과 필드에 `camelCase`나 `snake_case`를 사용하세요. 플랫
스네이크 케이스 출력에는 `author_username`, `media_urls` 같은 필드가
포함됩니다. `raw` 아래의 안전한 소스 스냅샷은 원래의 소스 키를
유지합니다. 충돌하는 소스 이름도 데이터 손실을 막기 위해 그대로 유지됩니다.

레거시 진단은 `resultType`, `actorVersion`, `replyCoverage`를 사용합니다.
리치 & 원본 출력은 `fieldStyle`을 재귀적으로 적용합니다. 예를 들어 스네이크
케이스는 `result_type`, `actor_version`, `reply_coverage`를 사용합니다.
Overview 데이터셋 뷰는 두 스타일 모두에서 작동합니다. 실행의 `fieldStyle`에
맞는 Console 뷰를 선택하세요. `camelCase fields`는 `camelCase`를
기대합니다. `snake_case fields`는 `snake_case`를 기대합니다. 뷰는 열만
선택합니다. 저장되거나 내보내진 데이터의 이름을 바꾸지는 않습니다.

### 8. 고급 필터

사용자, 날짜, 위치, 미디어, 참여 필터를 결합하세요.

```json
{
  "twitterContent": "AI",
  "from": "elonmusk",
  "since": "2026-01-01_00:00:00_UTC",
  "until": "2026-03-01_00:00:00_UTC",
  "lang": "en",
  "filter:media": true,
  "min_faves": 1000,
  "maxItems": 500
}
```

두 X 검색 모드를 한 번의 실행에서 사용하려면 `queryType: "Latest + Top"`을 설정하세요. Actor는 과금 전에 중복을
제거하고 두 모드 중 어느 쪽의 결과로든 한도를 채웁니다. `Top`은 관련성 순으로 정렬되며 전체 결과가 아닙니다. 일치하는 각 쿼리를
`searchTerm` 필드로 첨부하려면 `includeSearchTerms: true`를 설정하세요.

`lang`을 설정하면 Actor는 반환된 각 트윗의 언어를 검증합니다. 일치하지 않는
항목은 건너뛰고 일치하는 트윗을 위해 페이지를 계속 넘깁니다.

### 다른 트윗 Actor에서 옮겨오기

이미 쓰는 입력을 붙여넣으세요. X Tweet Scraper는 다른 트윗 Actor가 쓰는 필드
이름을 읽고 자체 필드에 매핑합니다. 표준 이름이 문서화된 기본값으로
유지됩니다. 별칭은 필드를 버리지 않으며 지불 금액을 바꾸지 않습니다. 입력
폼은 표준 필드만 나열하므로 짧게 유지됩니다. 별칭은 JSON, API, SDK, 자동화 &
저장된 태스크 입력에서 작동합니다.

| 이미 쓰는 필드                                                                                                                                                         | X Tweet Scraper가 읽는 필드                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `startUrls`, `urls`, `tweetUrls`, `postUrls`, `profileUrls`, `accountUrls`                                                                                             | `startUrls`                                                              |
| 문자열 1개인 `profileUrl`                                                                                                                                              | `startUrls`                                                              |
| `tweetIds`, `tweetIDs`, `tweets`, `postIds`, `lookupPostIds`, `tweet_ids`, 또는 문자열 1개인 `tweetId`                                                                 | `tweetIds`                                                               |
| `twitterHandles`, `usernames`, `user_names`, `userNameList`, `handles`, `screenNames`, `profileTweets`                                                                 | `twitterHandles`                                                         |
| 문자열 1개인 `username`, `handle`, `screenName`                                                                                                                        | `twitterHandles`                                                         |
| `searchTerms`, `searchQueries`, `queries`, `search`, 목록 또는 한 줄에 검색어 1개씩                                                                                    | `searchTerms`                                                            |
| `twitterContent`, `query`, `searchQuery`                                                                                                                               | `twitterContent`                                                         |
| `maxItems`, `maxResults`, `max_results`, `resultsLimit`, `count`, `resultsCount`, `numberOfTweets`, `maxPosts`, `max_posts`, `max_items`, `maxTweets`, `tweetsDesired` | `maxItems`                                                               |
| `sort`                                                                                                                                                                 | `queryType`                                                              |
| `tweetLanguage`, `language`                                                                                                                                            | `lang`                                                                   |
| `author`, `inReplyTo`, `mentioning`                                                                                                                                    | `from`, `to`, `@`                                                        |
| `start`, `startDate`, `end`, `endDate`                                                                                                                                 | `since`, `until`                                                         |
| `minimumRetweets`, `minimumFavorites`, `minimumReplies`                                                                                                                | `min_retweets`, `min_faves`, `min_replies`                               |
| `onlyImage`, `onlyVideo`, `onlyQuote`, `onlyTwitterBlue`                                                                                                               | `filter:images`, `filter:videos`, `filter:quote`, `filter:blue_verified` |
| `geotaggedNear`, `withinRadius`                                                                                                                                        | `near`, `within`                                                         |
| Google Search Scraper의 `quickDateRange`, 예: `d7`, `w2`, `m1` 또는 `y`                                                                                                | `since_time`, 실행 시작 시점부터 거슬러 계산                             |

붙여넣은 입력은 이렇게 동작합니다:

- 모든 소스가 실행됩니다. 시작 URL, 핸들, 검색어, 리스트 ID & 트윗 ID가 있는
  입력은 전부 실행하며, `maxItems`는 실행 전체에 적용됩니다.
- `searchTerms` 옆에 있는 검색 쿼리는 검색어 1개가 더 추가된 것으로
  실행됩니다.
- Actor는 `x.com/@name`으로 쓴 프로필 URL을 `x.com/name`과 똑같이 읽습니다.
- 별칭 & 그 표준 필드를 함께 설정하면 표준 값이 우선합니다. 실행 로그에 밀린
  별칭 이름이 남습니다.
- 실행 로그에는 `customMapFunction`처럼 Actor가 읽지 않는 모든 필드 이름이
  남습니다. 알림 없이 버려지는 것은 없습니다.
- 행 상한은 1 이상의 정수여야 합니다. `maxResults: 0`은 무언가를 가져오거나
  과금하기 전에 실행을 멈춥니다.
- `quickDateRange: "m1"`은 모든 경로에서 지난 1개월을 읽습니다. 월 & 연 단위는
  달력 기준으로 거슬러 셉니다. h, d, w, m 또는 y가 없는 값은 무언가를 읽거나
  과금하기 전에 실행을 멈춥니다.
- Actor에는 페이지 단위가 없습니다. `maxPages` 대신 `maxItems`를 쓰세요.
- Actor에는 사용자 ID 필드가 없습니다. `userId`나 `user_ids` 대신 핸들이나
  프로필 URL을 보내세요.
- `from`, `min_faves`, `since_time` & `filter:images` 같은 검색 연산자 필드는
  이미 X가 쓰는 이름을 사용하므로 매핑이 필요 없습니다.

### Console & API 입력 UX

Console은 다음 컨트롤을 제공합니다.

- Mode, Output Variant, Field Style, Output Preset, Sort By는 검증된 선택
  항목입니다.
- Start URLs와 Profile URLs 필드는 문자열이나 `{ "url": "..." }` 객체를
  받아들입니다. JSON 편집기는 두 API 형식을 모두 보존합니다.
- Structured Filters는 중첩 JSON 없이 그룹화된 컨트롤을 제공합니다.
- 표준 필터 그룹은 동등한 플랫 연산자를 폼 밖에 유지합니다. JSON, API,
  SDK, 자동화, 저장된 태스크 입력은 여전히 그것들을 받아들입니다.
- Max Items와 Max Items Per Target은 1 이상의 정수를 받아들입니다. 참여
  임계값은 0 이상의 정수를 받아들입니다.

새 통합에는 표준 필드를 사용하세요. 위 마이그레이션 표의 별칭은 계속
사용할 수 있습니다. `includeRaw`는 `outputVariant: "raw"`의 별칭입니다.
`compact`와 `full` 같은 기존
`outputVariant` 값도 계속 받아들여지며 Legacy 출력을 사용합니다. 시각적
폼은 이를 Legacy 별칭으로 표시합니다.

### 주요 지원 검색 연산자

| 연산자                 | 예시                    | 목적                         |
| ---------------------- | ----------------------- | ---------------------------- |
| `from:`                | `from:elonmusk`         | 이 사용자의 트윗만            |
| `to:`                  | `to:OpenAI`             | 이 사용자에 대한 답글만       |
| `@`                    | `@nasa`                 | 이 사용자를 언급한 트윗       |
| `list:`                | `list:123456`           | 리스트 멤버의 트윗            |
| `lang:`                | `lang:en`               | 언어별 필터                  |
| `since:` / `until:`    | `since:2026-01-01`      | 날짜 범위                    |
| `min_faves:`           | `min_faves:100`         | 참여 임계값                  |
| `min_retweets:`        | `min_retweets:50`       | 리트윗 임계값                |
| `filter:media`         | `filter:media`          | X 미디어 검색 연산자          |
| `filter:videos`        | `filter:videos`         | X 동영상 검색 연산자          |
| `filter:images`        | `filter:images`         | X 이미지 검색 연산자          |
| `filter:links`         | `filter:links`          | 링크가 있는 트윗만            |
| `filter:replies`       | `filter:replies`        | 답글 트윗만                  |
| `filter:quote`         | `filter:quote`          | 인용 트윗만                  |
| `filter:blue_verified` | `filter:blue_verified`  | Premium 사용자만              |

날짜 범위는 하한을 포함하고 상한을 제외합니다. Actor는 각 트윗을 추가하거나
과금하기 전에 두 경계를 모두 검증합니다.

전체 연산자 목록은
[Twitter Advanced Search](https://github.com/igorbrigadir/twitter-advanced-search)를
참고하세요.

## 입력

전체 옵션 목록은 **Input** 탭을 확인하세요. `startUrls`, `twitterHandles`,
`listIds`, `tweetIds`, `searchTerms`, `twitterContent` 또는 그 문서화된
별칭 중 최소 1개를 제외하고 모든 필드는 선택 사항입니다.

예시:

- 트윗 URL을 Start URLs에 붙여넣으세요.
- 프로필 URL을 붙여넣거나 사용자 이름을 X Handles에 추가하세요.
- 계정 백필에는 `from:user since:YYYY-MM-DD until:YYYY-MM-DD`를 검색어로 사용하세요.
- 리스트 URL을 Start URLs에 붙여넣으세요.
- `twitterContent`를 `from:`, `since:`, `min_faves:`, `filter:media` 같은
  필터와 결합해 고급 검색을 수행하세요.

## 출력

각 트윗은 사용 가능한 메타데이터가 담긴 하나의 JSON 객체입니다.

데이터셋과 실행 보고서 스키마에는 필드 제목, 설명, 예시가 포함됩니다.
에이전트는 필드 의미를 추측하지 않고 확인할 수 있습니다.

샘플 값은 예시용입니다. 응답은 실행 시점의 소스 데이터를 반영합니다.

```json
{
  "id": "1846987139428634858",
  "text": "The future of AI is...",
  "createdAt": "Sun Mar 15 12:00:00 +0000 2026",
  "retweetCount": 500,
  "replyCount": 120,
  "likeCount": 5000,
  "quoteCount": 80,
  "viewCount": 1200000,
  "bookmarkCount": 300,
  "lang": "en",
  "url": "https://x.com/elonmusk/status/1846987139428634858",
  "author": {
    "id": "44196397",
    "username": "elonmusk",
    "name": "Elon Musk",
    "followers": 180000000,
    "verified": true
  },
  "media": [{ "type": "photo", "url": "https://..." }],
  "entities": {
    "hashtags": [{ "text": "AI" }],
    "urls": [],
    "user_mentions": []
  },
  "isNoteTweet": false,
  "isQuoteStatus": false,
  "isReply": false,
  "conversationId": "1846987139428634858"
}
```

Apify 데이터셋에서 JSON, CSV, Excel, HTML로 내보낼 수 있습니다.

## 실행 옵션

- Apify 최대 총 비용을 설정해 실행 비용을 제한하세요. 해당 예산 안에서
  최대 행수를 원한다면 `maxItems`를 비워두고, 트윗 수를 줄이고 싶다면
  `maxItems`를 설정하세요.
- Apify API에서 `maxTotalChargeUsd`를 설정하거나 Console에서 실행당 최대
  비용을 설정하세요. Apify는 이 제한을 Actor에
  `ACTOR_MAX_TOTAL_CHARGE_USD`로 노출하며, Actor는 이를 과금 가능한 최대
  행 수로 변환합니다.
- 여러 트윗을 한 번에 조회하려면 `tweetIds`를 전달하세요. 한 계정의 게시물을 읽으려면 프로필 URL을 붙여 넣으세요.
- 여러 쿼리를 실행할 때 각 결과에 소스 검색어를 태그하려면
  `includeSearchTerms: true`를 설정하세요.
- 두 X 검색 모드를 한 번의 실행에서 사용하려면 `queryType: "Latest + Top"`을 설정하세요. 중복 제거 & 결과 한도는
  두 모드에 함께 적용됩니다.
- 1초 확인과 서명된 웹훅을 위해 Xquik 계정 또는 키워드 모니터를 사용하세요.
  활성 모니터는 매초 확인합니다.

## 사용 사례

- 트윗 전반에서 브랜드 감정을 추적하세요.
- 경쟁사 게시물과 업계 용어를 모니터링하세요.
- 공개 대화에서 잠재 고객을 찾으세요.
- 리서치용 공개 데이터셋을 수집하세요.
- 공개 참여도가 높은 게시물을 찾으세요.

## 데이터 책임

Actor는 공개 X 필드를 요청합니다. 결과에는 개인 데이터가 포함될 수
있습니다. 합법적인 목적을 확인하고 적용되는 개인정보 보호 규칙을 따르세요.
확실하지 않다면 자격을 갖춘 법률 자문에게 문의하세요.

## 관련 Xquik Actor

모든 Xquik Actor는 동일한 추출 엔진, 필터 우선 과금 & 진단 기능을 공유합니다.
필요한 데이터에 맞는 Actor를 선택하세요.

- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): 핸들, ID
  또는 URL에서 프로필과 게시물, 답글, 미디어 & 팔로워를 스크랩합니다. 검색이
  아니라 계정에서 시작할 때 사용하세요. 행당 $0.00015부터.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): 게시물 아래의
  답글, 댓글 & 전체 대화를 25개 이상의 필터로 스크랩합니다. 트윗 아래의 토론이
  필요할 때 사용하세요. 행당 $0.00015부터.
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

## 스크래핑보다 더 필요하신가요?

Xquik은 47개의 대시보드 도구, 129개의 REST 작업, 서명된 웹훅, MCP 서버도
제공합니다.

- [API documentation](https://docs.xquik.com/introduction): REST API 가이드
- [Search Tweets API](https://docs.xquik.com/api-reference/x/search-tweets):
  REST로 트윗을 검색합니다
- [Batch Tweets API](https://docs.xquik.com/api-reference/x/batch-tweets): ID로
  최대 100개의 트윗을 가져옵니다
- [User Tweets API](https://docs.xquik.com/api-reference/x/user-tweets): 사용자
  타임라인을 가져옵니다
- [MCP server](https://docs.xquik.com/mcp/overview): 지원되는 도구를 검색합니다
- [Webhooks](https://docs.xquik.com/webhooks/overview): 서명된 이벤트 전달
- [GitHub](https://github.com/Xquik-dev/x-twitter-scraper): 소스 코드 & 이슈
  트래커

## FAQ

**X API 키가 필요한가요?** 아니요. X API 키, 로그인, 자격 증명이 모두 필요하지 않습니다.

**실행 제한 요소는 무엇인가요?** 요청한 항목 제한과 Apify 지출 한도가
실행을 멈춥니다. Apify 계정 및 플랫폼 제한도 계속 적용됩니다.

**속도는 얼마나 빠른가요?** 실행 시간은 입력, 결과 수, X 가용성에 따라 달라집니다.

**최신 검색은 왜 X의 최신 탭에 없는 게시물을 반환하나요?** X는 일치하는 게시물 일부를 최신 탭에서 뺍니다. 이 Actor는 그런
게시물도 반환합니다. 모든 게시물은 쿼리에 대한 실제 X 검색 결과이며, 각 게시물은 한 번만 과금됩니다.

**어떤 검색 연산자를 쓸 수 있나요?** X 고급 검색은 작성자, 수신자, 멘션,
날짜, 참여, 미디어, 위치를 지원합니다.

**Apify API로 이 Actor를 실행할 수 있나요?** 예. Python, JavaScript, cURL
예시는 [API tab](https://apify.com/xquik/x-tweet-scraper/api)을
참고하세요.

**반복 스크랩을 예약할 수 있나요?** 예. Apify의 내장
[스케줄링](https://docs.apify.com/platform/schedules)을 사용해 이 Actor를
cron으로 실행하세요.

**문제는 어디에 보고하나요?**
[GitHub](https://github.com/Xquik-dev/x-twitter-scraper/issues)에 이슈를
열거나 이 Actor 페이지의 Issues 탭을 사용하세요.

**맞춤 솔루션을 받을 수 있나요?** 예. 대시보드, API, MCP 서버, 웹훅에
대해서는 [xquik.com](https://xquik.com)을 방문하거나
[API docs](https://docs.xquik.com/introduction)를 읽어보세요.
