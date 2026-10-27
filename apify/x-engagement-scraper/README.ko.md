[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · **한국어** ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer가 Xquik MCP를 코딩 에이전트에 연결하는 모습](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Framer가 Xquik 스크레이퍼를 Claude Code, Codex, Cursor 등과 함께 사용하는 방법](https://youtu.be/4UOSpoOoC3Y?t=367)을
6:07부터 보세요.

Xquik은 세계에서 가장 빠르고 저렴한 X(Twitter) 스크레이퍼 서비스이며, 가장
완전한 X 데이터를 제공합니다. Xquik의 X Engagement Scraper는 모든 게시물의 답글,
인용, 재게시한 사람 & 스레드를 수집합니다. 다른 Apify Actor는 대부분 필터링이나
중복 제거 전에 요금을 부과합니다. Xquik은 필터에 맞고 중복되지 않은 결과를
전달했을 때만 요금을 받습니다.

X 게시물 1개 이상에 달린 Twitter 답글, 인용, 재게시한 사람 & 스레드 맥락을
수집하세요. 요금은 **전달된 행 1개당 $0.00015**이며, Apify 플랫폼 사용료는
Apify가 따로 청구합니다. X API 키나 로그인은 필요 없습니다.

> Xquik은 독립적인 제3자 서비스입니다. X Corp와 제휴 관계가 없습니다.
> "Twitter"와 "X"는 X Corp의 상표입니다.

## 왜 X Engagement Scraper인가요?

- **누가 재게시했는지 확인.** `repostCheckUsers`의 각 계정이 각 게시물을 재게시했는지 알 수 있습니다.
- **필요한 답글만.** 직접 답글 또는 중첩 답글, 답글 깊이 & 기간을 고르세요.
- **재게시한 사람에서 리드 찾기.** `minFollowers`, `hasEmail` 또는 `bioContains`로 재게시한 사람을 필터링하세요. 행에는 각 프로필이 공개한 이메일, 전화번호 & 링크가 들어 있습니다.
- **실행 1번에 모든 참여 유형.** 게시물 URL이나 게시물 ID를 붙여 넣으세요. 답글, 인용, 재게시한 사람 & 스레드 맥락을 섞어 받으세요.
- **행 상한 설정.** `maxItems`로 실행 전체를, `maxItemsPerTarget`으로 게시물마다 참여 유형별 행 수를 제한하세요.
- **참여율 기본 제공.** `fields`에 `engagementRate` 또는 `engagementPerView`를 적으면 그 열이 추가됩니다.

### 완전한 결과

- 각 응답에는 X가 가진 가장 완전한 데이터가 담깁니다.

### 정확한 행

- 재게시에는 원본 전체 텍스트가 들어 있습니다.
- 행의 모든 ID가 정확하게 유지됩니다.
- 멘션, 링크, 해시태그 & 하이라이트의 위치가 텍스트와 맞습니다.
- 알 수 없는 수치는 0으로 표시하지 않고 `unknownCounts`에 나열합니다.
- 인증 배지는 `x.com`에 표시되는 것과 같습니다.
- 행에는 공개 데이터만 들어갑니다.
- 인용 검색은 실제 인용을 모두 반환하고 다른 것은 반환하지 않습니다.
- 광고 & 프로모션 항목은 행에 들어가지 않습니다.

### 최신 데이터

- X가 변경 사항을 배포해도 읽기는 계속 작동합니다.

### 속도

- 느린 페이지 1개 때문에 실행이 늦어지지 않습니다.
- 읽기는 행이 도착하는 즉시 끝납니다.
- 멈춘 Actor 호출은 스스로 복구됩니다.

### 공정한 과금

- 잘못된 입력은 요금이 들지 않으며 고칠 부분을 알려 줍니다.
- Actor는 전달되고, 중복되지 않고, 조건에 맞는 행에만 요금을 받습니다.
- 여러 대상에 겹치는 프로필은 한 번만 과금됩니다.
- 다시 시작한 실행도 두 번 과금하지 않습니다.
- 실행은 최대 총 청구액을 넘지 않으며 진단도 그대로 기록합니다.
- 작은 실행은 비용을 줄이는 팁과 함께 끝납니다.

### 안정성

- 일시적인 오류 하나로 실행이 실패하지 않습니다.
- 제한 시간에 도달하면 이미 찾은 행을 진단과 함께 반환합니다.
- 짧은 Xquik 장애가 있어도 Actor는 계속 작동합니다.
- Actor 실행은 다시 시작해도 중복 없이 이어집니다.
- 잘못된 행 1개 때문에 배치 전체가 실패하지 않습니다.
- 중단된 실행도 행 & 보고서를 유지합니다.
- 시작하지 못한 실행도 그 이유를 알려 줍니다.
- 지원팀은 요청이나 실행이 무엇을 반환했는지 정확히 볼 수 있습니다.

### 에이전트를 위한 설계

- Actor는 다른 Actor용으로 쓴 입력도 받습니다.
- 출력은 플랫 열 & 참여 합계를 갖춰 스프레드시트에 바로 쓸 수 있습니다.
- 모든 실행은 끝난 이유 & 재시도 여부를 알려 줍니다.

### 풍부한 데이터

- 게시물 행에는 장문 게시물 텍스트, 수정 이력, 커뮤니티 노트, 도달 범위 라벨 & 답글 설정이 들어 있습니다.
- 행에는 게시 앱, 미디어 수 & 프로페셔널 계정 데이터가 들어 있습니다.
- 미디어에는 화질별 버전, 대체 텍스트, 크기 & 볼 수 없을 때의 이유가 함께 옵니다.
- 각 계정이 게시물을 언제 재게시했는지 볼 수 있습니다.

### 품질 검사

- X가 표시하는 필드는 모두 제공하거나, 일부러 빼거나, 없다는 것을 확인합니다.
- Xquik은 모든 읽기를 실제 X에서 실시간으로 테스트합니다.

## X Engagement Scraper로 어떤 데이터를 추출할 수 있나요?

- 제공되는 모든 결과 페이지의 직접 답글.
- 4가지 정렬 순서의 직접 답글 & 중첩 답글.
- 선택해서 받을 수 있는 원본 게시물 상세 행.
- 텍스트, 작성자, 미디어 & 지표가 담긴 인용 게시물.
- 재게시한 사람의 프로필.
- 각 원본 게시물을 둘러싼 대화 맥락.
- 원본 게시물 & 참여 유형 표시.

## X 게시물 참여 데이터 스크랩 방법

Apify가 처음인가요? 먼저
[무료 계정을 만드세요](https://console.apify.com/sign-up?fpr=xquik). 무료
요금제는 신용카드가 필요 없고 매달 쓸 수 있는 $5를 줍니다. 행 1개당
$0.00015이므로 $5면 플랫폼 사용료를 빼고 최대 33,000행을 받을 수 있습니다. 그런
다음 여기로 돌아와 Try for free를 누르세요.

1. Apify Console에서 Xquik의 X Engagement Scraper를 여세요.
2. 게시물 URL은 `startUrls`에, 숫자로 된 게시물 ID는 `tweetIds`에 붙여넣으세요.
3. `engagementTypes`를 고르고 `minLikes`나 `language` 같은 필터를 추가하세요.
4. `maxItems`로 전달할 행 수의 상한을 정하고 Start를 클릭하세요.
5. 데이터셋을 JSON, CSV 또는 Excel로 내려받거나 Apify API를 사용하세요.

`startUrls`는 각 URL을 일반 문자열 또는 `{ "url": "..." }` 객체로 받습니다.

```json
{
  "startUrls": [
    "https://x.com/OpenAI/status/2082577277246972300",
    { "url": "https://x.com/jack/status/20" }
  ]
}
```

## 입력

```json
{
  "tweetIds": ["2082577277246972300"],
  "engagementTypes": ["replies", "quotes", "retweeters"],
  "maxItems": 10000
}
```

X는 2024년부터 게시물에 마음에 들어요를 누른 사람을 공개하지 않습니다. 그래서
`favoriters` 유형은 행을 반환하지 않습니다. 행이 없는 실행은 진단에 이 이유를
적습니다.

기본적으로 각 계정이나 게시물은 참여 유형마다 한 번만 나오고 한 번만 과금됩니다.
원본 게시물마다 행을 남기려면 `dedupeAcrossTargets`를 `false`로 설정하세요. 실행
상태는 건너뛴 중복을 셉니다. 건너뛴 중복은 과금하지 않습니다.

문제없이 끝난 작은 실행은 `run-report`를 건너뛰어 Apify 사용량을 아낍니다. 모든
실행에서 이 레코드를 기록하려면 `alwaysSaveRunRecords`를 켜세요.

### 다른 참여 Actor에서 옮겨오기

이 Actor는 다른 참여 Actor의 다음 필드 이름을 읽습니다.

- `urls` 필드는 `startUrls`에 매핑됩니다.
- `category` 필드는 `engagementTypes`에 매핑됩니다. `replies`, `retweets`,
  `info` & `checkRetweet`은 `replies`, `retweeters`, `tweet` & `repostCheck`로
  읽습니다.
- `resultsPerCategory` 필드는 `maxItemsPerTarget`에 매핑됩니다.
- `retweetCheckUsername` 필드는 `repostCheckUsers`에 매핑됩니다.

`followers`나 `tweets`처럼 다른 Actor가 하는 일을 가리키는 `category`는 실행을
멈춥니다. 이때 실행은 아무것도 읽지 않고 과금하지도 않습니다. 메시지가 써야 할
Actor를 알려 줍니다. 이 이름 중 하나 & 그 표준 필드를 함께 설정하면 표준 필드
값을 씁니다. 실행 로그에 무시된 필드가 나옵니다.

## 출력

각 행은 `resultType`을 `tweet`, `replies`, `completeReplies`, `quotes`,
`retweeters`, `favoriters`, `thread` 또는 `repostCheck`로 설정합니다.
`sourceTarget`에는 원본 게시물 ID가 들어 있습니다. 게시물 & 프로필 필드는 Xquik
REST의 안정적인 응답 형식을 따릅니다.

`completeReplies`는 반환된 행을 모두 남깁니다. 실행 보고서는 일부만 수집된
대상을 `incompleteTargets`에 셉니다. 필터는 과금 전에 실행됩니다.

재게시한 사람 & 마음에 들어요를 누른 사람에는 `minFollowers`, `hasEmail` &
`bioContains` 같은 프로필 필터를 모두 쓸 수 있습니다. 이 행에는 각 프로필이
공개한 이메일, 전화번호 & 링크인 `email` & `contactInfo`가 들어 있습니다.

예시는 샘플 값입니다. 실제 결과는 실시간 데이터를 따릅니다. 답글 행은 다음과
같습니다.

```json
{
  "resultType": "replies",
  "sourceTarget": "2082577277246972300",
  "inReplyToId": "2082577277246972300",
  "username": "sample_user",
  "text": "Sample reply text",
  "likeCount": 12
}
```

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

- 객체 안의 필드는 점으로 구분해 적으세요. 대소문자 & 밑줄은 상관없습니다.
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

## 재게시 확인

각 계정이 각 게시물을 재게시했는지 알아보려면 `engagementTypes`에
`repostCheck`를 추가하고 `repostCheckUsers`에 계정을 나열하세요.

```json
{
  "tweetIds": ["2098439298617856319"],
  "engagementTypes": ["repostCheck"],
  "repostCheckUsers": ["discord", "nasa"]
}
```

확인 1건은 `isRetweeted`, `retweetedAt`, `retweetId`, `checkedPosts` &
`complete`가 담긴 행 1개입니다. 행의 `id`는
`repostCheck:<post ID>:<account>`입니다. 확인은 각 계정의 최신 게시물을
읽습니다. 그 게시물들보다 오래된 재게시는 `complete: false`와 함께 `false`로
나옵니다.

`repostCheck` & `tweet` 행만 있는 실행은 입력 순서를 지킵니다. 게시물이 먼저
나오고, 이어서 나열한 순서대로 계정이 나옵니다.

## 리트윗 시각

`retweeters` 결과에서 `includeRetweetTimestamp`를 `true`로 설정하세요.
`retweetedAt` 열에는 확인된 리트윗 시각이 UTC로 들어갑니다.

Xquik의 X Engagement Scraper는 X에 그 리트윗이 아직 보일 때 리트윗 시각을
찾습니다. 오래되었거나, 삭제되었거나, 볼 수 없는 리트윗은 시각이 `null`로
남습니다. 프로필은 출력에 그대로 남습니다. `null` 값은 그 계정이 게시물을
리트윗한 적이 없다는 증거가 아닙니다.

이 옵션을 켜면 실행이 느려집니다. 프로필만 필요하면 끄세요. 프로필의
`createdAt`은 계속 계정 생성일입니다. 게시물 행에 리트윗 이벤트가 있으면
`retweetedAt`이 들어갑니다. 원본 게시물 날짜 & 스크랩 시각은 리트윗 시각을
대신하지 않습니다. 결과 가격 & 전달된 행 기준 과금은 그대로입니다.

## X 게시물 참여 데이터 스크랩 비용은 얼마인가요?

모든 Apify 요금제에서 전달된 행 1개당 $0.00015입니다. Apify 플랫폼 사용료는
Apify가 따로 청구합니다.

더 많이 수집하려면 선불 사용량이 더 많은
[Apify 요금제를 고르세요](https://apify.com/pricing?fpr=xquik).

- 전달된 데이터 행 1개마다 한 번 과금합니다. 진단은 `diagnostics`에서 무료로
  제공합니다.
- 시작, 게시물, 참여 유형 또는 페이지 요금이 없습니다.
- 과금 전에 중복을 제거합니다.

## 제한 & 복구

Xquik의 X Engagement Scraper는 실행 1번에 여러 게시물 & 참여 유형을 읽습니다.
Apify가 실행을 다시 시작해도 전달된 행 & 진행 상황은 유지됩니다. 이 Actor는 자체
시간 제한을 두지 않습니다.

추출이 중단되면 무료 `partial` 진단을 기록합니다. 이미 받은 결과는 그대로
남습니다. 다시 시도하기 전에 `availableResults`, `failedTargets`, `retryable` &
`nextAction`을 확인하세요. Actor가 성공으로 종료되면 전달이 끝났다는 뜻입니다.
추출이 모두 끝났다는 뜻은 아닙니다.

실행 상태는 실행이 일찍 멈춘 원인을 모두 알려 줍니다. `stopCauses`는 원인마다
`message`, `retryable` & `nextAction`을 따로 담아 나열합니다. 원인은
`target_not_found`, `target_failed`, `pagination_safety_limit`, `reply_reach` &
`deadline_reached`입니다. `reply_reach`는 X가 답글 스레드의 일부만 제공했다는
뜻입니다. 찾을 수 없는 대상은 다른 원인으로 실행이 멈췄을 때만 목록에
들어갑니다. 원인 중 하나라도 재시도할 수 있으면 실행도 `retryable`입니다.

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
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper)는 25개 이상의
  필터로 게시물 아래의 답글, 댓글 & 대화 전체를 스크랩합니다. 게시물 아래의
  토론이 필요할 때 사용하세요. 행당 $0.00015부터입니다.
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
- [X (Twitter) Monitor](https://apify.com/xquik/x-twitter-monitor)는 계정의 새
  트윗, 답글, 인용, 리포스트 & 프로필 변경을 보통 X에 표시된 뒤 1초 안에 모두
  잡아내고, 키워드 트윗 & 팔로우도 잡아냅니다. X에 트윗이 표시되는 즉시 알림이
  필요할 때 사용하세요. monitor-hour당 $0.0045부터입니다.

## 자주 묻는 질문

자주 묻는 질문에 먼저 답하고, 이어서 도움받을 곳을 안내합니다.

### X API 키나 로그인이 필요한가요?

아니요. Xquik의 X Engagement Scraper는 X API 키, 로그인, 자격 증명이 모두 필요
없습니다.

### X 참여 데이터를 스크랩해도 합법인가요?

Xquik의 X Engagement Scraper는 공개 X 필드를 요청합니다. 결과에는 개인정보가
들어 있을 수 있습니다. 적법한 목적인지 확인하고 적용되는 개인정보 보호 규정을
따르세요. 확실하지 않으면 자격을 갖춘 법률 전문가에게 문의하세요.

### 실행 결과가 비어 있는 이유는 무엇인가요?

먼저 실행 상태를 읽으세요. 결과가 없는 실행의 상태는 대상 & 필터를 확인하라고
안내합니다. 무료 `diagnostics` 출력은 확인할 일이 있을 때 나타납니다. 그 안의
`stopCauses`는 원인마다 따라 할 `nextAction`을 알려 줍니다. 실행은 읽을 수 없는
입력을 모두 나열하고 고치는 방법을 알려 줍니다. X가 2024년부터 게시물에 마음에
들어요를 누른 사람을 공개하지 않으므로 `favoriters`는 행을 반환하지 않습니다.

### API, 스케줄 & 연동을 사용할 수 있나요?

네. 공개 태스크 50개나 Xquik REST API 중에서 고르세요.
[API 탭](https://apify.com/xquik/x-engagement-scraper/api)에 Python, JavaScript
& cURL 예시가 있습니다. Apify
[스케줄](https://docs.apify.com/platform/schedules)로 Xquik의 X Engagement
Scraper를 cron 일정에 맞춰 실행할 수 있습니다. 에이전트는
[Apify MCP](https://docs.apify.com/platform/integrations/mcp)를 사용합니다. 이전
빌드가 꼭 필요하지 않다면 `latest`를 사용하세요.

### 도움은 어디서 받을 수 있나요?

실행 ID와 함께
[Issues 탭](https://apify.com/xquik/x-engagement-scraper/issues)에서 이슈를
여세요. 키-값 저장소의 무료 진단이 확인이 필요한 실행의 원인을 설명합니다. 행을
하나도 받지 못한 실행은 상태에서 이유를 알려 줍니다.

### 맞춤 솔루션을 받을 수 있나요?

네. [Issues 탭](https://apify.com/xquik/x-engagement-scraper/issues)에 필요한
내용을 적어 주세요. Xquik은 대시보드, REST API, MCP 서버 & 웹훅도 제공합니다.
Xquik 웹사이트는 [Apify 프로필](https://apify.com/xquik)에서 찾을 수 있습니다.
