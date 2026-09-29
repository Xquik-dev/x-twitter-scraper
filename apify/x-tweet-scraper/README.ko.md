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
완전한 X 데이터를 제공합니다. Xquik의 X Tweet Scraper는 50개 이상의 필터로
게시물(트윗), 답글, 프로필, 리스트 & 검색 결과를 수집합니다. 공개 벤치마크가
입증하듯 게시물 Actor 12개 중 가장 저렴하고 빠릅니다.
[아래 벤치마크](#벤치마크)에서 보듯 행당 필드 수도 Actor 중앙값의 2배입니다.
다른 Apify Actor는 대부분 필터링이나 중복 제거 전에 요금을 부과합니다. Xquik은
필터에 맞고 중복되지 않은 결과를 전달했을 때만 요금을 받습니다.

공개 X(Twitter) 게시물을 **모든 Apify 요금제에서 전달된 결과 1개당
$0.00015부터** 스크랩하세요. Apify 플랫폼 사용료는 Apify가 따로 청구합니다. X
로그인은 필요 없고, 시작 요금이나 쿼리 요금도 없습니다.
[Xquik](https://xquik.com)이 만들었습니다.

> Xquik은 독립적인 제3자 서비스입니다. X Corp와 제휴 관계가 없습니다.
> "Twitter"와 "X"는 X Corp의 상표입니다.

## X Tweet Scraper는 무엇을 하나요?

Xquik의 X Tweet Scraper는 게시물, 참여 지표, 공개 작성자 프로필 & 미디어를
반환합니다. URL, 사용자 아이디, 리스트 ID, 게시물 ID & 검색 쿼리를 입력으로
받고, 50개 이상의 필터를 지원합니다.

### 주요 기능

- 필터링 & 중복 제거는 과금 전에 실행됩니다.
- 입력 하나로 조회, 타임라인, 리스트, 검색 & 참여 모드를 모두 쓸 수 있습니다.
- 게시물 ID 입력에는 정해진 개수 상한이 없습니다. Apify 지출 한도 & 제한 시간
  설정은 그대로 적용됩니다.
- 실행 로그는 페이지별 소요 시간을 `fetchDurationMs`, `processingDurationMs`,
  `pushDurationMs`, `statusDurationMs` & `fullPageDurationMs`로 보여 줍니다.
- Apify가 실행을 다시 시작해도 전달된 행 & 진행 상황은 유지됩니다.

### 사용 사례

- 트윗당 더 많은 필드로 리서치, 데이터 보강, 분석 & AI 학습을 지원하세요. 저희
  중앙값 행에는 2026-09-27에 필드가 63개 있었습니다. 다른 Actor 11개 중앙값의
  2배입니다.
- 게시물 전반의 브랜드 감정을 추적하세요.
- 경쟁사 게시물 & 업계 용어를 모니터링하세요.
- 공개 대화에서 잠재 고객을 찾으세요.
- 연구용 공개 데이터셋을 모으세요.
- 공개 참여가 많은 게시물을 찾으세요.

### X Tweet Scraper로 어떤 데이터를 추출할 수 있나요?

| 필드                   | 설명                                                 |
| ---------------------- | ---------------------------------------------------- |
| `id`                   | 게시물 ID                                            |
| `text`                 | 게시물 전체 텍스트, 최대 25k자의 장문 게시물 포함    |
| `createdAt`            | X 원본 타임스탬프 문자열                             |
| `likeCount`            | 마음에 들어요 수                                     |
| `retweetCount`         | 재게시 수                                            |
| `replyCount`           | 답글 수                                              |
| `quoteCount`           | 인용 수                                              |
| `viewCount`            | 조회수                                               |
| `bookmarkCount`        | 북마크 수                                            |
| `lang`                 | 게시물 언어                                          |
| `url`                  | 게시물 바로가기 링크                                 |
| `tweetUrl`             | 플랫 출력의 게시물 URL 별칭                          |
| `twitterUrl`           | 플랫 출력의 twitter.com 형식 URL                     |
| `author`               | 제공되는 작성자 필드(사용자 아이디, 자기소개, 웹사이트, 각종 수치) |
| `authorUsername`       | 플랫 출력의 작성자 사용자 아이디                     |
| `authorFollowers`      | 플랫 출력의 작성자 팔로워 수                         |
| `authorUrl`            | 플랫 출력의 작성자 웹사이트(있는 경우)               |
| `authorDescription`    | 플랫 출력의 작성자 자기소개                          |
| `authorCoverPicture`   | 플랫 출력의 작성자 헤더 이미지 URL                   |
| `authorPinnedTweetIds` | 플랫 출력의 작성자 고정 게시물 ID                    |
| `media`                | 첨부된 이미지, 동영상, GIF                           |
| `mediaUrls`            | 플랫 출력의 미디어 URL                               |
| `imageUrls`            | 플랫 출력의 이미지 URL                               |
| `videoUrls`            | 플랫 출력의 동영상 URL                               |
| `entities`             | 해시태그, URL, 멘션, 동영상 타임스탬프               |
| `displayTextRange`     | X 표시 텍스트 범위(있는 경우)                        |
| `contentDisclosure`    | 콘텐츠 고지 메타데이터(있는 경우)                    |
| `conversationControl`  | 답글 허용 정책 & 공개 대화 소유자                    |
| `reactionContext`      | 반응이 가리키는 공개 게시물 & 사용자                 |
| `limitedActions`       | 공개 상호작용 제한 & 안내                            |
| `isLimitedReply`       | 답글 제한 여부                                       |
| `isNoteTweet`          | 장문 게시물(Note Tweet) 여부                         |
| `isQuoteStatus`        | 다른 게시물을 인용하는지 여부                        |
| `isRetweet`            | 재게시 행인지 여부(원본 포함)                        |
| `isPinned`             | 작성자가 고정한 게시물인지 여부(플랫 행)             |
| `isReply`              | 답글인지 여부                                        |
| `quoted_tweet`         | 인용된 게시물 객체(인용 게시물인 경우)               |
| `conversationId`       | 스레드/대화 ID                                       |
| `resultType`           | 리치 행, 참여 행, 진단 행의 유형                     |
| `sourceTweetId`        | 아티클 & 참여 모드의 원본 게시물 ID                  |
| `article`              | `mode: "article"`의 구조화된 아티클 데이터           |

선택적 게시물 메타데이터에는 `authorUnavailable`, `card`, `communityId`,
`communityNote`, `edit`, `exclusiveContent`, `noteTweet` & `postCta`가 있습니다.
`isTranslatable`, `place`, `possiblySensitive` & `viewState`는 그 밖의 공개
맥락을 담습니다. `previousCounts`는 수정 전 참여 수치를 담습니다. `tombstone`은
표시 제한 안내를 담습니다. `unmentionedUserIds`는 대화에서 나간 사용자를
나열합니다. 정확한 필드는 OpenAPI를 참고하세요.

중첩된 `author` 객체에는 공개 프로필 필드가 들어 있습니다. 신원, 각종 수치,
인증, 계정 상태, 프로페셔널 정보 & 프로필 자기소개를 다룹니다.

재게시 행은 `isRetweet`이 `true`입니다. 이 행의 `text`에는 원본 게시물 전문이
들어 있습니다. `retweeted_tweet`에는 원본 게시물이 작성자 & 수치와 함께 들어
있습니다.

게시물 행에는 `type`, `source`, `inReplyToId`, `inReplyToUserId`,
`inReplyToUsername` & `retweeted_tweet`도 남습니다. 인용되거나 재게시된 게시물은
중첩 단계마다 같은 필드를 담습니다.

미디어에는 제공 여부, 크기 정보, 태그 & 동영상 변형이 들어 있습니다.
`watchNowUrl` & `visitSiteUrl` 작업도 들어 있습니다.

행에는 보는 사람에게만 해당하는 상태가 들어가지 않습니다. 이 Actor는 팔로우,
차단, 뮤트, 북마크, 마음에 들어요, 재게시, 수정 권한 & 비슷한 뷰어 전용 플래그를
제거합니다. raw 출력에서도 제거합니다.

## X Tweet Scraper로 게시물(트윗) 데이터를 스크랩하려면 어떻게 하나요?

Apify Console에서 다음 단계를 따르세요.

1. [태스크 예시](#태스크-예시)나 Input 탭을 여세요.
2. URL, 사용자 아이디, 게시물 ID 또는 검색어를 추가하세요.
3. `maxItems` & 필요한 필터를 설정하세요.
4. Start를 클릭하고 실행이 끝날 때까지 기다리세요.
5. 데이터셋을 JSON, CSV, Excel 또는 HTML로 내보내세요.

아래 예시는 소스별 입력을 보여 줍니다.

### URL 붙여넣기

게시물, 프로필, 검색, 리스트 URL을 섞어서 붙여넣으세요.

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

게시물 URL은 해당 게시물을 중복 없이 입력 순서대로 반환합니다. 프로필 URL은 그
계정의 게시물을 반환합니다. 검색 URL은 해당 쿼리를 실행합니다. 리스트 URL은 그
리스트의 게시물을 반환합니다. `maxItems`는 붙여넣은 모든 URL의 결과 합계에
적용됩니다.

### 여러 사용자 아이디 스크랩

사용자 아이디는 여러 `from:username` 검색을 줄여 쓰는 방법입니다.

```json
{ "twitterHandles": ["elonmusk", "nasa", "openai"], "maxItems": 100 }
```

사용자 아이디마다 그 계정의 게시물을 반환합니다. 이 Actor는 출력 & 과금 전에
중복 행을 제거합니다. 사용자 아이디는 `@`를 붙여도, 빼도 됩니다. 사용자 아이디 &
프로필 URL은 X의 게시물 탭처럼 재게시를 포함합니다. 날짜나 필터를 설정해도
재게시는 남습니다. 재게시를 빼려면 `tweetTypes.excludeRetweets`를 설정하세요.

### 게시물 검색

Search terms 필드에 쿼리를 1개 이상 넣으세요.

```json
{
  "searchTerms": ["from:elonmusk AI", "#bitcoin lang:en"],
  "maxItems": 1000,
  "queryType": "Latest"
}
```

`mode`가 `tweet`이나 `tweets`이고 게시물 ID가 없으면 쿼리는 검색으로 실행됩니다.
이때 올바른 `searchTerms`는 빈 조회 결과를 반환하지 않습니다.

`from:elonmusk since:2026-01-01 until:2026-01-02`처럼 날짜 범위를 정해 계정의
지난 게시물을 모을 수도 있습니다. 검색어마다 자체 `searchTerm` 표시가 붙습니다.
`maxItems`는 모든 검색어의 결과 합계에 적용됩니다. 이 Actor는 반환된 모든
게시물을 `since:`, `until:` & 유닉스 시간 범위와 대조합니다. 필터가 있는 검색은
일치하는 결과를 찾거나 X에 결과가 더 없을 때까지 계속 읽습니다.

`from:` 검색어는 X 검색 결과를 그대로 반환하므로 재게시를 뺍니다. 재게시를
포함하려면 `include:nativeretweets`를, 재게시만 받으려면
`filter:nativeretweets`를 추가하세요.

### ID로 게시물 조회

```json
{ "tweetIds": ["1846987139428634858", "1858743654778892784"], "maxItems": 100 }
```

결과는 입력 순서를 지키고, 중복을 빼고, 요청한 게시물만 담습니다. 조회에는
`tweetId`, `tweetIDs`, `tweets`, `postIds`, `lookupPostIds`, `tweetUrls` &
`postUrls`도 쓸 수 있습니다.

### 참여, 스레드 & 아티클 모드

입력에 다른 필드가 있어도 한 경로로만 실행하려면 `mode`를 설정하세요.

```json
{ "mode": "replies", "replyTweetIds": ["1846987139428634858"], "maxItems": 100 }
```

게시물 & 검색 모드는 `tweet`, `tweets` & `search`입니다. 프로필 모드는
`profileTweets`, `profileReplies`, `profileMedia` & `profileLikes`입니다.
`listTweets`는 리스트 게시물을, `article`은 게시물 속 X 아티클을 읽습니다.
게시물 1개를 대상으로 하는 모드는 `replies`, `quotes`, `thread`, `retweeters` &
`favoriters`입니다.

`profileTweets`는 X 프로필의 게시물 탭과 같게 동작합니다. 그 계정의 게시물,
재게시 & 자기 게시물에 단 답글을 반환합니다. 행은 날짜순으로 나옵니다. 다른
계정에 단 답글은 과금 전에 뺍니다. 다른 작성자의 대화 맥락도 뺍니다.

원본 게시물만 받으려면 원하지 않는 유형을 제외하세요.

```json
{
  "mode": "profileTweets",
  "twitterHandles": ["apify"],
  "tweetTypes": { "excludeReplies": true, "excludeRetweets": true },
  "maxItems": 100
}
```

`tweetTypes.excludeReplies`, `excludeRetweets` & `excludeQuotes`는 모든 소스에서
작동합니다. 검색에서는 X에 `-filter:replies`, `-filter:nativeretweets` &
`-filter:quote`로 보냅니다. 프로필이나 리스트에서는 이 Actor가 해당 행을 직접
뺍니다. 제외된 행은 데이터셋에 들어가지 않으므로 요금이 없습니다. `maxItems`에도
포함되지 않습니다.

`profileReplies`는 X의 답글 탭과 같게 동작합니다. 그 계정의 게시물 & 답글을
반환합니다. 다른 작성자의 대화 맥락은 뺍니다. 답글만 받으려면 `filter:replies`나
`to:` 검색을 쓰세요.

검색 & 페이지를 넘기는 게시물 모드는 `time.since`, `time.until`, 유닉스
타임스탬프 & `lang`을 지원합니다. 프로필의 게시물, 답글, 미디어, 마음에 들어요
탭과 리스트, 답글, 인용 & 스레드가 여기에 해당합니다. 같은 뜻의 플랫 날짜
연산자도 작동합니다. 이 Actor는 과금 전에 행마다 확인합니다. 날짜 하한은
포함합니다. 상한은 포함하지 않습니다. 날짜 필터는 쓸 수 있는 날짜가 없는 행을
뺍니다. 언어 필터는 언어가 없거나 일치하지 않는 행을 뺍니다. 필터에서 빠진 행은
결과 한도를 차지하지 않습니다.

`since` & `until`을 같은 날짜로 두면 범위가 비게 됩니다. 하루 전체를 받으려면
`until`을 다음 날로 설정하세요. 날짜 범위를 둔 리스트 실행은 오래된 날짜까지
빠르게 도달합니다. 하한을 지나면 실행이 끝납니다. 리스트에서 아주 오래된 범위는
답글 몇 개를 놓칠 수 있습니다. 게시물 필터는 사용자 목록이나 게시물, 아티클 직접
조회에는 적용되지 않습니다.

`time.withinTime` & `within_time`도 같은 모드에서 작동합니다. `7d`로 설정하면
실행이 읽기 시작한 시점 기준으로 최근 7일을 남깁니다. 2006년 이전까지 거슬러
가는 범위는 모든 게시물을 남깁니다.

`mode: "replies"`는 더 엄격합니다. 모든 게시물 행의 `inReplyToId`는 요청한
게시물 ID와 같습니다. 대화 속 중첩 답글은 직접 답글로 세지 않습니다. X에 보이는
답글이 X가 표시한 답글 수보다 적으면, 이 Actor는 찾은 행을 그대로 남깁니다.
한도에 못 미치면 `diagnostics`에 `replies-incomplete` 레코드 1개를 추가합니다.
실행은 한도에 이르거나 X에 답글이 더 없을 때까지 부분 실행 상태로 남습니다.
`replyCoverage`는 답글 수 & 수집 범위 상세를 알려 줍니다. `maxItems`는 원하는
총량으로 설정하세요. 답글 대상 1개에 25,000을 넘게 설정해도 됩니다.

아티클 행에는 `resultType: "article"`, `sourceTweetId`, `article` & 선택 항목인
`author`가 들어 있습니다. 참여 사용자 행에는 `resultType: "user"`,
`sourceTweetId` & `engagementMode`가 들어 있습니다.

재게시한 사람 모드는 일반적인 공개 참여 모드로 작동합니다. 마음에 들어요를 누른
사람은 가능한 범위에서만 수집합니다. X는 조건을 충족하거나 작성자에게만 보이는
게시물에서만 마음에 들어요를 누른 사람을 보여 줄 수 있습니다. 프로필의 마음에
들어요도 가능한 범위에서만 수집합니다. 공개 프로필 상당수에 읽을 수 있는 마음에
들어요 탭이 없기 때문입니다. X가 사용자나 마음에 들어요를 누른 게시물을 보여
주지 않으면 이 Actor는 무료 `diagnostics` 레코드를 기록합니다. 게시물 행에는
북마크 수가 들어 있을 수 있습니다. X는 어떤 계정이 게시물을 북마크했는지 보여
주지 않습니다.

### 플랫 CSV 행 내보내기

기본 중첩 JSON 필드를 그대로 쓰거나, 스프레드시트에 맞는 열을 추가하세요.

```json
{ "searchTerms": ["from:nasa moon"], "maxItems": 100, "outputPreset": "flat" }
```

플랫 출력은 `author` & `media`를 그대로 둡니다. 그리고 `authorUsername`,
`authorName`, `authorFollowers`, `tweetUrl`, `twitterUrl`, `mediaUrls`,
`imageUrls` & `videoUrls` 같은 최상위 필드를 추가합니다.

모든 플랫 게시물 행에는 `media`가 있습니다. 미디어가 없는 게시물은 빈 목록을
가집니다. 그래서 스프레드시트나 타입이 정해진 파이프라인에서 모든 행의 키가
같습니다.

### 필드 이름 선택

기본값은 레거시 필드 이름입니다. 리치 결과나 raw 결과에 쓸 스타일을 고르세요.

```json
{
  "searchTerms": ["from:nasa moon"],
  "maxItems": 100,
  "outputVariant": "rich",
  "fieldStyle": "snake_case"
}
```

최상위 & 중첩 결과 필드에 `camelCase`나 `snake_case`를 쓰세요. 스네이크 케이스
플랫 출력에는 `author_username` & `media_urls` 같은 필드가 들어갑니다. `raw`
아래의 안전한 원본 스냅숏은 원래 원본 키를 유지합니다. 데이터 손실을 막기 위해
서로 충돌하는 원본 이름도 바꾸지 않습니다.

레거시 진단은 `resultType`, `actorVersion` & `replyCoverage`를 씁니다. 리치 &
raw 출력은 모든 중첩 단계에 `fieldStyle`을 적용합니다. 예를 들어 스네이크
케이스는 `result_type`, `actor_version` & `reply_coverage`를 씁니다. Overview
데이터셋 뷰는 두 스타일 모두에서 작동합니다. 실행의 `fieldStyle`에 맞는 Console
뷰를 고르세요. `camelCase fields`는 `camelCase`용입니다. `snake_case fields`는
`snake_case`용입니다. 뷰는 열만 고릅니다. 저장되거나 내보낸 데이터의 이름은
바꾸지 않습니다.

### 고급 필터 조합

사용자, 날짜, 위치, 미디어 & 참여 필터를 함께 쓰세요.

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

`queryType: "Latest + Top"`을 설정하면 한 실행에서 X 검색 모드 2가지를 모두
실행합니다. 이 Actor는 과금 전에 중복을 제거하고, 두 모드의 결과로 한도를
채웁니다. `Top`은 관련성순으로 정렬하며 일치하는 결과를 모두 반환하지는
않습니다. 일치한 쿼리를 `searchTerm` 필드로 붙이려면
`includeSearchTerms: true`를 설정하세요.

`lang`을 설정하면 이 Actor는 반환된 게시물마다 언어를 확인합니다. 일치하지 않는
게시물은 건너뛰고, 일치하는 게시물을 찾아 계속 읽습니다.

## 태스크 예시

공개 태스크 50개 중에서 고르세요. 태스크마다 범위가 정해진 입력 & 그에 맞는
데이터셋 뷰가 있습니다. 모든 태스크는 실제 검색이나 대상으로 시작합니다.
실행하기 전에 수정하세요.

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
- [Collect electric vehicle conversations](https://apify.com/xquik/x-tweet-scraper/examples/collect-electric-vehicle-conversations)

## 게시물(트윗) 스크랩 비용은 얼마인가요?

Xquik의 X Tweet Scraper는 모든 Apify 요금제에서 전달된 행 1개당 $0.00015입니다.
Apify 플랫폼 사용료는 Apify가 따로 청구합니다. Xquik은 전달된 데이터 행 1개마다
한 번 과금합니다. 진단은 `diagnostics` 출력에서 무료로 제공합니다.

- Xquik 구독은 필요 없습니다.
- 별도의 시작 요금이나 쿼리 요금이 없습니다. URL & 단건 게시물 조회에도 요금이
  붙지 않습니다.
- 필터링 & 중복 제거는 과금 전에 실행됩니다. 필터에서 빠진 행이나 중복 행에는
  요금을 내지 않습니다.
- 입력이 없거나, 입력이 잘못됐거나, 결과가 0인 실행은 무료 `diagnostics` 출력에
  해결 방법이 담긴 레코드 1개를 기록합니다.

문제가 생긴 실행이나 큰 실행은 `run-report` 레코드도 기록합니다. 이 레코드의
`estimatedChargeUsd`는 Apify의 현재 이벤트당 과금 가격을 씁니다. 문제가 생긴
실행은 입력이 없거나 잘못되어 종료된 경우를 포함해 항상 `run-report`를
기록합니다. 문제없이 끝난 작은 실행은 이 레코드를 건너뛰어 Apify 사용량을
아낍니다. 모든 실행에서 기록하려면 `alwaysSaveRunRecords`를 켜세요. 실행
보고서는 데이터 행을 `realRows`에, 진단을 `diagnosticRows`에 나눠 셉니다.

실행당 지출 상한을 정하려면 [실행 옵션](#실행-옵션)을 보세요.

## 벤치마크

Xquik의 X Tweet Scraper는 비용 & 속도에서 다른 게시물 Actor 11개를 앞섰습니다.
이 Actor의 중앙값 행에는 필드가 63개 있었고, 다른 Actor 중앙값의 2배였습니다.

| Actor                                                             | 유용한 트윗 | 유용한 트윗당 비용 | 초당 유용한 트윗 | 행당 필드 수 | 공개 실행                                                          |
| ----------------------------------------------------------------- | ----------: | -----------------: | ---------------: | -----------: | ------------------------------------------------------------------ |
| xquik/x-tweet-scraper                                             |         882 |          $0.000177 |             27.0 |           63 | [실행 보기](https://console.apify.com/view/runs/JJfsKql7EdiXsSX3T) |
| xquik/x-tweet-scraper                                             |         868 |          $0.000179 |             27.4 |           63 | [실행 보기](https://console.apify.com/view/runs/58ye04whvCP63nmmW) |
| xquik/x-tweet-scraper                                             |         869 |          $0.000179 |             25.8 |           63 | [실행 보기](https://console.apify.com/view/runs/ytoTpYCca2MShp4gh) |
| xquik/x-tweet-scraper                                             |         879 |          $0.000177 |             29.1 |           63 | [실행 보기](https://console.apify.com/view/runs/CrJLYvAIG0Ji666rr) |
| scrapesmith/twitter-x-scraper-tweets-profiles-replies             |         813 |          $0.000185 |             10.5 |           36 | [실행 보기](https://console.apify.com/view/runs/mIT1zf0xccCsYWO1E) |
| scrapesmith/twitter-x-scraper-tweets-profiles-replies             |         805 |          $0.000187 |             10.6 |           36 | [실행 보기](https://console.apify.com/view/runs/p1MUeElsamZUepTpm) |
| scrapesmith/twitter-x-scraper-tweets-profiles-replies             |         805 |          $0.000187 |             10.7 |           36 | [실행 보기](https://console.apify.com/view/runs/pQlQa0GMm7BWTUUOB) |
| kaitoeasyapi/twitter-x-data-tweet-scraper-pay-per-result-cheapest |         880 |          $0.000250 |              9.1 |           46 | [실행 보기](https://console.apify.com/view/runs/3Fn8yvqncsWdcw1I2) |
| scraper_one/x-posts-search                                        |         804 |          $0.000314 |              3.3 |           14 | [실행 보기](https://console.apify.com/view/runs/M9TgeCLLKZlNTOrj0) |
| danek/twitter-scraper                                             |         807 |          $0.000347 |              5.0 |           27 | [실행 보기](https://console.apify.com/view/runs/kyeJqCeaARxQPGM5W) |
| tweetapi/twitter-x-search-scraper                                 |         337 |          $0.000374 |              2.6 |           28 | [실행 보기](https://console.apify.com/view/runs/mxkP8EDAUVtCZdobb) |
| api-ninja/x-twitter-advanced-search                               |         837 |          $0.000430 |              7.4 |           28 | [실행 보기](https://console.apify.com/view/runs/XAWKinvZyPNjCwrib) |
| apidojo/twitter-scraper-lite                                      |         251 |          $0.000494 |             12.9 |           54 | [실행 보기](https://console.apify.com/view/runs/1t4XwmbQNTtwMJ0Ta) |
| apidojo/tweet-scraper                                             |         481 |          $0.000832 |              7.8 |           55 | [실행 보기](https://console.apify.com/view/runs/PydoBgS1YRblg29bB) |
| xtdata/twitter-x-scraper                                          |       1,378 |          $0.001168 |             11.9 |           67 | [실행 보기](https://console.apify.com/view/runs/U91dRXEvKvqu41aop) |
| seemuapps/x-tweet-scraper                                         |         805 |          $0.001242 |              6.9 |           24 | [실행 보기](https://console.apify.com/view/runs/FstursEw43TbcipYU) |
| maximedupre/twitter-scraper                                       |          46 |          $0.002846 |              0.3 |           31 | [실행 보기](https://console.apify.com/view/runs/Hs8irhEcAfWcQNc4w) |

모든 Actor는 2026-09-27에 같은 검색 & 필터로 실행했습니다. 모든 실행은 Bronze
등급을 사용했습니다. 유용한 트윗은 좋아요가 10개 이상인 고유한 영어 원본
게시물입니다. 비용은 유용한 트윗 1개당 고객의 총지출입니다. 저희 비용에는 고객이
내는 Apify 사용량이 포함됩니다. 행당 필드 수는 비어 있지 않은 필드 수의
중앙값이며, 중첩 필드도 포함합니다. 목록은 필드 1개로 셉니다. 실행을 열어 입력,
로그 & 데이터셋을 확인하세요.

## 빈 실행, 부분 실행 & 중단된 실행

Xquik의 X Tweet Scraper는 결과가 없거나, 일부만 나왔거나, 중단된 실행의 이유를
무료로 설명합니다. 실행 상태는 실행이 멈춘 이유를 알려 줍니다. 과금된 결과 &
읽은 대상 수도 셉니다.

### 빈 결과

다시 실행해 요금을 내기 전에 빈 결과부터 확인하세요. 보고서 & 최종 진단의
`filtering` 객체는 필터가 뺀 행 수를 셉니다. `serverFilteredRows`,
`actorFilteredRows` & `pagesWithUnknownServerFiltering`을 확인하세요. 필터에서
빠진 행에는 결과 요금을 내지 않습니다.

X에 결과가 더 없으면 실행이 한도보다 적게 끝날 수 있습니다. 이때
`outcome: "complete"`와 `completionReason: "source_exhausted"`를 보고합니다.
중단된 실행은 부분 결과 상태 & 재시도 안내를 유지합니다.

### 부분 실행

`failedSubtargets`는 오류로 멈춘 쿼리 & 프로필 대상을 셉니다. 전달된 행은
데이터셋에 남고 과금에 포함됩니다. 오류가 났다고 해서 대상이 없다는 뜻은
아닙니다. 이런 실행은 `completionReason: "partial_failure"`를 씁니다.

중단된 실행은 무료 `partial` 진단도 기록합니다. 이미 전달된 결과는 그대로
남습니다. 이 진단은 `availableResults`, `failedTargets`, `retryable` &
`nextAction`을 알려 줍니다. Actor가 성공으로 종료되면 전달이 끝났다는 뜻입니다.
추출이 모두 끝났다는 뜻은 아닙니다.

### 중단 원인

상태 메시지는 중단 원인을 모두 알려 줍니다. 찾을 수 없는 계정 & 멈춘 검색이 함께
있으면 둘 다 알려 줍니다. `stopCauses`는 원인마다 `message`, `retryable` &
`nextAction`을 따로 담아 나열합니다. 원인은 `target_not_found`,
`target_protected`, `search_unavailable`, `likes_hidden`, `target_failed`,
`pagination_safety_limit`, `reply_reach` & `deadline_reached`입니다. 원인 중
하나라도 `retryable`이면 실행도 `retryable`입니다.

### 찾을 수 없거나 볼 수 없는 대상

찾을 수 없거나 비공개인 대상은 실패가 아닙니다. X에 읽을 내용이 없을 뿐입니다.
실행은 나머지 대상을 끝까지 읽습니다. 그리고 `outcome: "complete"`를 보고합니다.
완료 이유는 `source_exhausted`처럼 실제로 읽은 대상에 따라 정해집니다.
`failedSubtargets`에는 이런 대상이 들어가지 않습니다. 상태 메시지 & 무료
`complete` 진단이 이런 대상을 셉니다. 다른 행이 하나도 없는 실행은 대신
`zero-output` 진단을 기록합니다.

X가 실행할 수 없는 검색은 실패로 셉니다. 이런 검색에는 X.com이 "Something went
wrong"을 표시합니다. 실행은 재시도하지 않고 그 검색을 바로 멈춥니다. X가 숨긴
마음에 들어요도 실패로 세고 바로 멈춥니다. X는 게시물에 마음에 들어요를 누른
사람을 작성자에게만 보여 줍니다. 계정이 마음에 들어요를 누른 게시물은 그 계정
본인에게만 보여 줍니다.

모든 실패가 볼 수 없는 대상 때문이면 진단은 `retryable: false`를 설정합니다.
대상 URL이나 사용자 아이디를 확인하고 볼 수 있는 공개 계정을 고르세요. X가
실행할 수 없는 검색은 범위를 좁히거나 필터를 바꾸세요. 숨겨진 마음에 들어요 대신
재게시한 사람, 답글 또는 게시물을 읽으세요. 그 밖의 실패는 끝나지 않은 대상에
대한 재시도 안내를 유지합니다.

진단은 이런 대상을 `unavailableTargets`에 적습니다. 각 항목에는 입력한 그대로의
`target`, `reason` & `nextAction`이 들어 있습니다. 이유는 `not_found`,
`protected`, `search_unavailable`, `likes_hidden` 중 하나입니다. 검색 항목에는
제거할 연산자 같은 `fix`가 붙기도 합니다. 목록에는 최대 100개 항목이 들어갑니다.
입력에서 이런 대상을 빼세요.

### 안전 한도 & 시간 제한

`completionReason: "pagination_safety_limit"`은 읽기 실패가 아닙니다. 실행은
유효한 행을 남긴 뒤, 새 결과를 더 반환하지 않는 대상을 끝냈습니다. 실행은 추출이
완료되지 않았다고 보고합니다. `failedSubtargets`는 `0`으로 남습니다. 요금은
전달된 행에만 냅니다.

Apify 기본 제한 시간은 `0`이므로 실행에 시간 제한이 없습니다. 이 Actor는 상한에
이르거나 조건에 맞는 데이터가 떨어질 때까지 계속 실행합니다. 그래도 Apify 제한
시간을 따로 정할 수 있습니다. 그러면 `completionReason: "deadline_reached"`는 그
제한이 가까워졌다는 뜻입니다. 이 Actor는 행 & 보고서를 저장한 뒤 제한 시간 전에
정상 종료합니다. 전달된 행마다 한 번만 요금을 냅니다.

## 입력

Input 탭에 모든 옵션이 있습니다. `startUrls`, `twitterHandles`, `listIds`,
`tweetIds`, `searchTerms`, `twitterContent` 중 하나 이상을 넣으세요. 문서에 나온
별칭도 작동합니다. 나머지 필드는 모두 선택 사항입니다.

예시는 다음과 같습니다.

- 게시물 URL을 Start URLs에 붙여넣으세요.
- 프로필 URL을 붙여넣거나 X handles에 사용자 아이디를 추가하세요.
- 계정의 지난 게시물을 모으려면 `from:user since:YYYY-MM-DD until:YYYY-MM-DD`를
  검색어로 쓰세요.
- 리스트 URL을 Start URLs에 붙여넣으세요.
- 고급 검색에는 `twitterContent`를 `from:`, `since:`, `min_faves:` &
  `filter:media` 같은 필터와 함께 쓰세요.

### 주요 지원 검색 연산자

| 연산자                 | 예시                   | 용도                        |
| ---------------------- | ---------------------- | --------------------------- |
| `from:`                | `from:elonmusk`        | 이 사용자의 게시물만        |
| `to:`                  | `to:OpenAI`            | 이 사용자에게 보낸 답글만   |
| `@`                    | `@nasa`                | 이 사용자를 멘션한 게시물   |
| `list:`                | `list:123456`          | 리스트 멤버의 게시물        |
| `lang:`                | `lang:en`              | 언어로 필터링               |
| `since:` / `until:`    | `since:2026-01-01`     | 날짜 범위                   |
| `min_faves:`           | `min_faves:100`        | 참여 기준값                 |
| `min_retweets:`        | `min_retweets:50`      | 재게시 기준값               |
| `filter:media`         | `filter:media`         | X 미디어 검색 연산자        |
| `filter:videos`        | `filter:videos`        | X 동영상 검색 연산자        |
| `filter:images`        | `filter:images`        | X 이미지 검색 연산자        |
| `filter:links`         | `filter:links`         | 링크가 있는 게시물만        |
| `filter:replies`       | `filter:replies`       | 답글만                      |
| `filter:quote`         | `filter:quote`         | 인용 게시물만               |
| `filter:blue_verified` | `filter:blue_verified` | Premium 사용자만            |

X는 더 이상 `filter:vine`, `filter:consumer_video`, `filter:pro_video`,
`filter:news`, `retweets_of:`로 검색하지 않습니다. 이 중 하나가 들어간 검색은
바로 끝납니다. 무료 진단이 해결 방법을 알려 줍니다. 쿼리는 512자 이하로 쓰세요.
X는 그보다 긴 쿼리를 검색하지 않습니다.

날짜 범위는 하한을 포함하고 상한을 포함하지 않습니다. 이 Actor는 게시물을
추가하거나 과금하기 전에 두 경계를 모두 확인합니다.

전체 연산자 목록은
[Twitter Advanced Search](https://github.com/igorbrigadir/twitter-advanced-search)를
보세요.

### 다른 게시물 Actor에서 옮겨오기

이미 쓰는 입력을 그대로 붙여넣으세요. Xquik의 X Tweet Scraper는 다른 게시물
Actor가 쓰는 필드 이름을 읽고 자체 필드로 연결합니다. 문서상 기본값은 계속 표준
이름입니다. 별칭을 써도 필드가 빠지지 않고 요금도 달라지지 않습니다. 입력
양식에는 표준 필드만 나오므로 짧게 유지됩니다. 별칭은 JSON, API, SDK, 자동화 &
저장된 태스크 입력에서 작동합니다.

| 이미 쓰는 필드                                                                                                                                                         | Xquik이 읽는 필드                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `startUrls`, `urls`, `tweetUrls`, `postUrls`, `profileUrls`, `accountUrls`                                                                                             | `startUrls`                                                              |
| 문자열 1개인 `profileUrl`                                                                                                                                              | `startUrls`                                                              |
| `tweetIds`, `tweetIDs`, `tweets`, `postIds`, `lookupPostIds`, `tweet_ids` 또는 문자열 1개인 `tweetId`                                                                  | `tweetIds`                                                               |
| `twitterHandles`, `usernames`, `user_names`, `userNameList`, `handles`, `screenNames`, `profileTweets`                                                                 | `twitterHandles`                                                         |
| 문자열 1개인 `username`, `handle`, `screenName`                                                                                                                        | `twitterHandles`                                                         |
| 목록이나 한 줄에 검색 1개씩 쓴 `searchTerms`, `searchQueries`, `queries`, `search`                                                                                     | `searchTerms`                                                            |
| `twitterContent`, `query`, `searchQuery`                                                                                                                               | `twitterContent`                                                         |
| `maxItems`, `maxResults`, `max_results`, `resultsLimit`, `count`, `resultsCount`, `numberOfTweets`, `maxPosts`, `max_posts`, `max_items`, `maxTweets`, `tweetsDesired` | `maxItems`                                                               |
| `sort`                                                                                                                                                                 | `queryType`                                                              |
| `tweetLanguage`, `language`                                                                                                                                            | `lang`                                                                   |
| `author`, `inReplyTo`, `mentioning`                                                                                                                                    | `from`, `to`, `@`                                                        |
| `start`, `startDate`, `end`, `endDate`                                                                                                                                 | `since`, `until`                                                         |
| `minimumRetweets`, `minimumFavorites`, `minimumReplies`                                                                                                                | `min_retweets`, `min_faves`, `min_replies`                               |
| `onlyImage`, `onlyVideo`, `onlyQuote`, `onlyTwitterBlue`                                                                                                               | `filter:images`, `filter:videos`, `filter:quote`, `filter:blue_verified` |
| `geotaggedNear`, `withinRadius`                                                                                                                                        | `near`, `within`                                                         |
| Google Search Scraper의 `quickDateRange`(예: `d7`, `w2`, `m1`, `y`)                                                                                                     | 실행 시작 시점부터 거꾸로 센 `since_time`                                |

붙여넣은 입력은 다음과 같이 동작합니다.

- 모든 소스가 실행됩니다. URL, 사용자 아이디, 검색어, 리스트 ID & 게시물 ID가
  함께 있으면 모두 실행합니다. `maxItems`는 실행 전체에 적용됩니다.
- `searchTerms`와 함께 넣은 검색 쿼리는 검색어 1개로 추가 실행됩니다.
- `x.com/@name` 형태의 프로필 URL은 `x.com/name`처럼 읽습니다.
- 별칭 & 표준 필드를 함께 설정하면 표준 필드 값을 씁니다. 실행 로그에 무시된
  별칭이 나옵니다.
- 실행 로그는 `customMapFunction`처럼 이 Actor가 무시하는 필드를 모두 알려
  줍니다. 알리지 않고 필드를 빼는 일은 없습니다.
- 행 상한은 1 이상의 정수여야 합니다. `maxResults: 0`이면 아무것도 읽거나
  과금하기 전에 실행이 멈춥니다.
- `quickDateRange: "m1"`은 모든 경로에서 지난 1개월을 읽습니다. 월 & 연 단위는
  달력 기준으로 거꾸로 셉니다. h, d, w, m, y가 없으면 읽기나 과금 전에 실행이
  멈춥니다.
- 이 Actor에는 페이지 단위가 없습니다. `maxPages` 대신 `maxItems`를 쓰세요.
- 이 Actor에는 숫자 사용자 ID 필드가 없습니다. `userId`나 `user_ids` 대신 사용자
  아이디나 프로필 URL을 보내세요.
- `from`, `min_faves`, `since_time` & `filter:images` 같은 검색 연산자 필드는
  이미 X의 이름을 씁니다. 따로 연결할 필요가 없습니다.

### Console & API 입력

Console 양식에는 다음 컨트롤이 있습니다.

- Mode, Output Variant, Field Style, Output Preset & Sort By는 값이 검증되는
  드롭다운입니다.
- Start URLs & Profile URLs는 문자열이나 `{ "url": "..." }` 객체를 받습니다.
  JSON 편집기는 두 API 형식을 모두 유지합니다.
- 구조화된 필터는 그룹별 컨트롤을 제공하므로 중첩 JSON을 쓸 필요가 없습니다.
- 양식은 필터 그룹이 이미 다루는 플랫 연산자를 숨깁니다. JSON, API, SDK, 자동화 &
  저장된 태스크 입력에서는 여전히 쓸 수 있습니다.
- Max Items & Max Items Per Target에는 1 이상의 정수를 넣습니다. 참여 기준값에는
  0 이상의 정수를 넣습니다.

새 연동에는 표준 필드를 쓰세요. 위 이전 표의 별칭도 계속 쓸 수 있습니다.
`includeRaw`는 `outputVariant: "raw"`의 별칭입니다. `compact` & `full` 같은 예전
`outputVariant` 값도 Legacy 출력으로 계속 작동합니다. 양식에는 Legacy 별칭으로
표시됩니다.

## 출력

게시물 행 1개는 X가 제공하는 메타데이터를 담은 JSON 객체 1개입니다. 데이터셋 &
run-report 스키마는 필드마다 제목, 설명 & 예시를 제공합니다. AI 에이전트는 필드
뜻을 추측하지 않고 읽을 수 있습니다.

샘플 값은 예시입니다. 실제 실행은 X의 실시간 데이터를 반환합니다.

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

데이터셋을 JSON, CSV, Excel 또는 HTML로 내보내세요.

## 실행 옵션

- 실행 비용 상한을 정하려면 Apify의 최대 총 청구액을 설정하세요. 예산 안에서
  최대한 많은 행을 받으려면 `maxItems`를 비워 두세요. 게시물을 더 적게 받으려면
  `maxItems`를 설정하세요.
- Apify API에서는 `maxTotalChargeUsd`를, Console에서는 Max cost per run을
  설정하세요. Apify는 이 한도를 `ACTOR_MAX_TOTAL_CHARGE_USD`로 Actor에 넘깁니다.
  Actor는 이 값을 과금 가능한 최대 행 수로 바꿉니다.
- 여러 게시물을 한 번에 조회하려면 `tweetIds`를 넘기세요. 계정 1개의 게시물을
  읽으려면 프로필 URL을 붙여넣으세요.
- 쿼리가 많으면 `includeSearchTerms: true`를 설정해 결과마다 검색어를 붙이세요.
- `queryType: "Latest + Top"`을 설정하면 한 실행에서 X 검색 모드 2가지를 모두
  실행합니다. 중복 제거 & 결과 상한은 두 모드 전체에 적용됩니다.
- 1초 단위 확인 & 서명된 웹훅이 필요하면 Xquik 계정 모니터나 키워드 모니터를
  쓰세요. 활성 모니터는 매초 확인합니다.

### 항상 최신 빌드 사용

배포된 수정 사항을 모두 받으려면 모든 실행에서 `latest`를 고르세요.

빌드를 고르지 않으면 Apify는 Xquik의 X Tweet Scraper를 기본값인 `latest`로
실행합니다. Console 실행 & 기본 API 예시도 이 기본값을 따릅니다.

저장된 태스크는 Actor 기본값을 덮어쓸 수 있습니다. 스케줄 & 태스크 연동은 그
선택을 그대로 씁니다. 덮어쓴 값은 모두 `latest`로 두세요.

Apify는 특정 빌드 번호를 `latest`로 바꿔 주지 않습니다. 고정한 번호는 `latest`로
바꾸세요. 특정 빌드는 잠시 되돌리거나 실행을 재현할 때만 쓰세요.

Apify의
[빌드 태그](https://docs.apify.com/platform/actors/development/builds-and-runs/builds),
[실행 옵션](https://docs.apify.com/platform/actors/running/runs-and-builds) &
[태스크 문서](https://docs.apify.com/platform/actors/running/tasks)를 읽어
보세요.

## 관련 Xquik Actor

모든 Xquik Actor는 같은 추출 엔진, 필터 우선 과금 & 진단을 공유합니다. 필요한
데이터에 맞는 Actor를 고르세요.

- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): 사용자 아이디,
  ID 또는 URL로 프로필과 그 계정의 게시물, 답글, 미디어 & 팔로워를 스크랩합니다.
  검색이 아니라 계정에서 시작할 때 사용하세요. 행당 $0.00015부터입니다.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): 게시물 아래의
  답글(댓글) & 대화 전체를 25개 이상의 필터로 스크랩합니다. 게시물 아래의 토론이
  필요할 때 사용하세요. 행당 $0.00015부터입니다.
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

## 스크랩 이상이 필요하신가요?

Xquik은 대시보드 도구 47개, REST 작업 129개, 서명된 웹훅 & MCP 서버도
제공합니다.

- [API 문서](https://docs.xquik.com/introduction): REST API 가이드
- [Search Tweets API](https://docs.xquik.com/api-reference/x/search-tweets):
  REST로 게시물 검색
- [Batch Tweets API](https://docs.xquik.com/api-reference/x/batch-tweets): ID로
  게시물 최대 100개 가져오기
- [User Tweets API](https://docs.xquik.com/api-reference/x/user-tweets): 사용자
  타임라인 가져오기
- [MCP 서버](https://docs.xquik.com/mcp/overview): 지원 도구 살펴보기
- [웹훅](https://docs.xquik.com/webhooks/overview): 서명된 이벤트 전달
- [GitHub](https://github.com/Xquik-dev/x-twitter-scraper): 소스 코드 & 이슈
  트래커

## 자주 묻는 질문

### X API 키가 필요한가요?

아니요. X API 키, 로그인, 자격 증명이 모두 필요 없습니다.

### 실행을 제한하는 요소는 무엇인가요?

항목 한도 & Apify 지출 한도에 이르면 실행이 멈춥니다. Apify 계정 & 플랫폼 한도도
그대로 적용됩니다.

### 얼마나 빠른가요?

Xquik의 X Tweet Scraper는 [벤치마크](#벤치마크)에서 초당 유용한 게시물을
25.8개에서 29.1개 전달했습니다. 실행 시간은 입력, 결과 수 & X 가용성에 따라
달라집니다.

### 최신 검색에서 X의 최신 탭에 없는 게시물이 나오는 이유는 무엇인가요?

X는 조건에 맞는 게시물 일부를 최신 탭에서 뺍니다. Xquik의 X Tweet Scraper는 그런
게시물도 반환합니다. 모든 게시물은 쿼리에 대한 실제 X 검색 결과입니다.
게시물마다 한 번만 요금을 냅니다.

### 어떤 검색 연산자를 쓸 수 있나요?

X 고급 검색은 작성자, 받는 사람, 멘션, 날짜, 참여, 미디어 & 위치를 지원합니다.
예시는 [주요 지원 검색 연산자](#주요-지원-검색-연산자)를 보세요.

### Apify API로 실행할 수 있나요?

네. Python, JavaScript & cURL 예시는
[API 탭](https://apify.com/xquik/x-tweet-scraper/api)을 보세요.

### 정기 스크랩을 예약할 수 있나요?

네. Apify에 내장된 [스케줄링](https://docs.apify.com/platform/schedules)으로
Xquik의 X Tweet Scraper를 cron 일정에 맞춰 실행하세요.

### 맞춤 솔루션을 받을 수 있나요?

네. 대시보드, API, MCP 서버 & 웹훅은 [xquik.com](https://xquik.com)을 방문하거나
[API 문서](https://docs.xquik.com/introduction)를 읽어 보세요.

### X 데이터를 스크랩해도 합법인가요?

Xquik의 X Tweet Scraper는 공개 X 필드를 요청합니다. 결과에는 개인정보가 들어
있을 수 있습니다. 적법한 목적인지 확인하고 본인에게 적용되는 개인정보 보호
규정을 따르세요. 확실하지 않으면 자격을 갖춘 법률 전문가에게 문의하세요.

### 도움은 어디서 받을 수 있나요?

Actor 페이지의 Issues 탭이나
[GitHub](https://github.com/Xquik-dev/x-twitter-scraper/issues)에서 이슈를
여세요. 실행 ID와 함께 support@xquik.com으로 문의해도 됩니다.
