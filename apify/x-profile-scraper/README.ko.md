[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · **한국어** ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer가 Xquik MCP를 코딩 에이전트에 연결하는 모습](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Framer가 Xquik 스크레이퍼를 Claude Code, Codex, Cursor 등과 함께 사용하는 방법](https://youtu.be/4UOSpoOoC3Y?t=367)을
6:07부터 보세요.

Xquik은 세계에서 가장 빠르고 저렴한 X(Twitter) 스크레이퍼 서비스이며, 가장
완전한 X 데이터를 제공합니다. Xquik의 X Profile Scraper는 사용자 아이디만 있으면
프로필, 게시물, 답글, 미디어 & 팔로워를 수집합니다. 다른 Apify Actor는 대부분
필터링이나 중복 제거 전에 요금을 부과합니다. Xquik은 필터에 맞고 중복되지 않은
결과를 전달했을 때만 요금을 받습니다.

Twitter 계정을 한꺼번에 조회하고 X 계정 없이 프로필을 읽으세요. 사용자 아이디,
ID 또는 URL로 X 프로필, 게시물, 답글, 미디어 & 팔로워를 스크랩하세요. 요금은
**전달된 행 1개당 $0.00015**이며, Apify 플랫폼 사용료는 Apify가 따로 청구합니다.
X API 키나 로그인은 필요 없습니다.

> Xquik은 독립적인 제3자 서비스입니다. X Corp와 제휴 관계가 없습니다.
> "Twitter"와 "X"는 X Corp의 상표입니다.

## X Profile Scraper는 무엇을 하나요?

Xquik의 X Profile Scraper는 사용자 아이디, 숫자 사용자 ID 또는 프로필 URL로 공개
X(Twitter) 프로필을 반환합니다. 각 프로필에 게시물, 답글, 미디어, 하이라이트,
팔로워, 팔로잉 & 인증된 팔로워를 추가할 수 있습니다. 자기소개를 번역하고 지금
라이브 방송 중인 계정도 확인합니다.

### 사용 사례

- 자기소개, 웹사이트, 위치 & 오디언스 규모로 리드 목록을 보강하세요.
- 팔로워, 게시물 & 인증 여부로 경쟁 계정을 비교하세요.
- 오디언스, 계정 연령 & 참여도로 크리에이터를 검증하세요.
- 계정의 게시물, 미디어 & 하이라이트를 보관하세요.
- 팔로워 & 팔로잉으로 계정의 네트워크를 파악하세요.
- 크리에이터 & 브랜드의 라이브 방송을 지켜보세요.
- 다른 시장의 자기소개를 내 언어로 읽으세요.

## 왜 X Profile Scraper인가요?

- **실행 1번에 계정 전체.** 사용자 아이디, ID 또는 URL을 넣으세요. 게시물, 답글, 미디어, 하이라이트, 팔로워, 팔로잉 또는 인증된 팔로워를 행으로 추가하세요.
- **라이브 방송 확인.** `checkLiveNow`는 지금 누가 라이브 중인지 최근 방송과 함께 알려 줍니다.
- **행마다 공개 연락처.** `email` & `contactInfo`에는 프로필이 공개한 이메일, 전화번호 & 링크가 들어 있습니다. 비즈니스 이메일이나 직접 고른 도메인만 남기세요.
- **계정 기반 위치 & 이력.** `accountBasedIn`에는 X의 국가 또는 지역 라벨이 들어 있습니다. `usernameChanges`는 사용자 아이디가 몇 번 바뀌었는지 보여 줍니다.
- **프로필 & 게시물 필터.** 오디언스 규모, 계정 연령 & 인증 여부로 프로필을 남기세요. 날짜, 언어, 미디어 & 참여로 게시물을 남기세요.

### 완전한 결과

- 계정 이력은 오래된 게시물까지 빠짐없이 돌아옵니다.
- 답글을 뺀 프로필 게시물에도 작성자 자신의 스레드는 남습니다.
- 프로필 읽기에는 고정된 게시물이 들어가며, 고정됨으로 표시됩니다.
- 팔로워 & 팔로잉 내보내기는 전체 목록을 반환합니다.
- 인증된 팔로워 내보내기도 전체 목록을 반환합니다.
- 각 응답에는 X가 가진 가장 완전한 데이터가 담깁니다.

### 정확한 행

- 재게시에는 원본 전체 텍스트가 들어 있습니다.
- 행의 모든 ID가 정확하게 유지됩니다.
- 멘션, 링크, 해시태그 & 하이라이트의 위치가 텍스트와 맞습니다.
- 인증 배지는 `x.com`에 표시되는 것과 같습니다.
- 행에는 공개 데이터만 들어갑니다.
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
- 게시물 & 자기소개를 원하는 언어로 번역할 수 있습니다.

### 품질 검사

- X가 표시하는 필드는 모두 제공하거나, 일부러 빼거나, 없다는 것을 확인합니다.
- Xquik은 모든 읽기를 실제 X에서 실시간으로 테스트합니다.

## X Profile Scraper로 어떤 데이터를 추출할 수 있나요?

프로필 행은 `resultType: "profile"`을 사용합니다. 주요 필드는 다음과 같습니다.

| 필드                     | 설명                                       |
| ------------------------ | ------------------------------------------ |
| `id`                     | 숫자 사용자 ID                             |
| `username`               | `@`를 뺀 사용자 아이디                     |
| `name`                   | 표시 이름                                  |
| `description`            | 자기소개 텍스트                            |
| `url`                    | 프로필 행의 웹사이트                       |
| `location`               | 계정 주인이 입력한 위치                    |
| `email`                  | 프로필이 공개한 첫 번째 이메일             |
| `contactInfo`            | 프로필이 공개한 이메일, 전화번호 & 링크    |
| `followers`              | 팔로워 수                                  |
| `following`              | 팔로잉 수                                  |
| `statusesCount`          | 게시물 수                                  |
| `mediaCount`             | 미디어 게시물 수                           |
| `favouritesCount`        | 계정이 누른 마음에 들어요 수               |
| `listedCount`            | 계정이 포함된 공개 리스트 수               |
| `createdAt`              | 계정 생성 시각                             |
| `verified`               | X가 인증으로 표시하는지 여부               |
| `isBlueVerified`         | 계정의 X Blue 인증 여부                    |
| `verifiedType`           | `Government` 같은 인증 유형                |
| `profilePicture`         | 48 px 크기의 프로필 이미지 URL             |
| `profilePictureOriginal` | 내려받을 수 있는 원본 크기의 같은 이미지   |
| `coverPicture`           | 헤더 이미지 URL                            |
| `pinnedTweetIds`         | 고정된 게시물 ID                           |
| `professional`           | 프로페셔널 카테고리 & 유형                 |
| `accountBasedIn`         | X가 최대한 추정한 국가 또는 지역 라벨      |
| `connectedVia`           | 계정이 처음 X에 연결된 방식                |
| `usernameChanges`        | 사용자 아이디 변경 횟수 & 마지막 변경 시점 |
| `birthdate`              | 계정이 공개한 생일 정보                    |
| `subscribersCount`       | X가 보내는 경우 구독자 수                  |
| `tipJar`                 | 공개 팁 링크                               |
| `protected`              | 계정이 게시물을 보호하는지 여부            |
| `unavailable`            | 계정을 사용할 수 없는지 여부               |
| `sourceTarget`           | 입력한 사용자 아이디, ID 또는 URL          |

`identityVerification`, `isAutomated`, `automatedBy`, `withheldInCountries` &
`verificationReason` 같은 나머지 필드는 모두 데이터셋 스키마에 설명되어
있습니다.

선택 항목 행은 Xquik REST 응답 형식을 그대로 따릅니다.

| `resultType`              | 켜는 옵션                  | 행 단위           |
| ------------------------- | -------------------------- | ----------------- |
| `profileTweet`            | `includeTweets`            | 게시물            |
| `profileReply`            | `includeReplies`           | 게시물 또는 답글  |
| `profileMedia`            | `includeMedia`             | 미디어 게시물     |
| `profileHighlight`        | `includeHighlights`        | 하이라이트 게시물 |
| `profileFollower`         | `includeFollowers`         | 팔로워            |
| `profileFollowing`        | `includeFollowing`         | 팔로잉 계정       |
| `profileVerifiedFollower` | `includeVerifiedFollowers` | 인증된 팔로워     |
| `profileBioTranslation`   | `translateBioTo`           | 번역된 자기소개   |
| `profileLive`             | `checkLiveNow`             | 확인한 프로필     |

내가 계정을 팔로우하거나 차단했는지처럼 보는 사람에게만 해당하는 상태는 행에
들어가지 않습니다.

## X Profile Scraper로 프로필 데이터를 스크랩하려면 어떻게 하나요?

Apify가 처음인가요? 먼저
[무료 계정을 만드세요](https://console.apify.com/sign-up?fpr=xquik). 무료
요금제는 신용카드가 필요 없고 매달 쓸 수 있는 $5를 줍니다. 행 1개당
$0.00015이므로 $5면 플랫폼 사용료를 빼고 최대 33,000행을 받을 수 있습니다. 그런
다음 여기로 돌아와 Try for free를 누르세요.

Apify Console에서 다음 단계를 따르세요.

1. [태스크 예시](#태스크-예시)나 Input 탭을 여세요.
2. 사용자 아이디는 `twitterHandles`에, URL은 `startUrls`에, ID는 `userIds`에
   추가하세요.
3. `includeTweets`처럼 필요한 리소스를 켜세요.
4. `maxItems` & 필요한 필터를 설정한 다음 Start를 클릭하세요.
5. 데이터셋을 JSON, CSV, Excel 또는 HTML로 내보내세요.

아래 예시는 각각 완전한 입력입니다.

### 여러 프로필 스크랩

```json
{ "twitterHandles": ["nasa", "OpenAI", "apify"], "maxItems": 100 }
```

사용자 아이디 1개마다 프로필 행 1개를 반환합니다. 사용자 아이디는 `@`를 붙여도,
빼도 됩니다.

### 프로필 URL이나 ID 붙여넣기

`startUrls`는 각 URL을 일반 문자열 또는 `{ "url": "..." }` 객체로 받습니다.
`userIds`는 숫자 X 사용자 ID를 받습니다.

```json
{
  "startUrls": ["https://x.com/nasa", { "url": "https://x.com/OpenAI" }],
  "userIds": ["11348282"],
  "maxItems": 100
}
```

같은 사용자 아이디를 여러 번 넣어도 실행은 1번만 읽습니다.

### 게시물, 답글 & 미디어 추가

```json
{
  "twitterHandles": ["nasa"],
  "includeTweets": true,
  "includeMedia": true,
  "sinceDate": "2026-01-01",
  "maxItems": 500
}
```

`includeTweets`는 프로필의 게시물 탭을 따릅니다. `includeReplies`는 답글 탭을
따릅니다. `includeMedia`는 미디어 탭을 따릅니다. `includeHighlights`는
하이라이트 탭에 있는 게시물을 X의 순서대로 추가합니다. 하이라이트가 없는
프로필은 행을 추가하지 않습니다.

### 인기 게시물만 남기기

```json
{
  "twitterHandles": ["nasa"],
  "includeTweets": true,
  "minLikes": 1000,
  "mediaType": "videos",
  "maxItems": 200
}
```

게시물 필터는 선택 항목인 게시물 행에 적용됩니다. 필터에서 빠진 행은 데이터셋에
들어가지 않으므로 요금을 내지 않습니다.

### 팔로워 & 팔로잉 내보내기

```json
{
  "twitterHandles": ["apify"],
  "includeFollowers": true,
  "minFollowers": 1000,
  "verifiedOnly": true,
  "maxItems": 1000
}
```

`includeFollowers`, `includeFollowing` & `includeVerifiedFollowers`는 계정
1개마다 프로필 행 1개를 추가합니다. 프로필 필터는 이 행 & 기본 프로필에 모두
적용됩니다.

### 자기소개 번역

```json
{ "twitterHandles": ["nasa", "SpaceX"], "translateBioTo": "es" }
```

번역 1개는 `text`, `language` & `sourceLanguage`를 담은 `profileBioTranslation`
행 1개입니다. 자기소개가 없는 프로필은 행도 요금도 생기지 않습니다.

### 지금 라이브 중인 계정 확인

```json
{ "twitterHandles": ["nasa", "SpaceX"], "checkLiveNow": true }
```

확인 1번은 `live`, `userId`, `userName` & `broadcast`를 담은 `profileLive` 행
1개입니다. `broadcast`에는 라이브 중이거나 끝난 프로필의 최근 방송이 들어가고,
없으면 null입니다. 찾을 수 없는 프로필은 행을 추가하지 않습니다.

## 태스크 예시

공개 태스크 50개 중에서 고르세요. 태스크마다 범위가 정해진 입력 & 그에 맞는
데이터셋 뷰가 있습니다. 실행하기 전에 태스크를 수정하세요.

- [X 계정 1개의 프로필 카드 가져오기](https://apify.com/xquik/x-profile-scraper/examples/get-an-x-profile-card)
- [경쟁 브랜드의 프로필 비교하기](https://apify.com/xquik/x-profile-scraper/examples/compare-competitor-brand-profiles)
- [숫자 사용자 ID를 프로필로 변환하기](https://apify.com/xquik/x-profile-scraper/examples/resolve-numeric-user-ids-to-profiles)
- [계정 1개의 최근 게시물 수집하기](https://apify.com/xquik/x-profile-scraper/examples/collect-recent-posts-from-an-account)
- [계정에서 마음에 들어요를 가장 많이 받은 게시물 찾기](https://apify.com/xquik/x-profile-scraper/examples/find-an-accounts-most-liked-posts)
- [계정이 올린 동영상 수집하기](https://apify.com/xquik/x-profile-scraper/examples/collect-videos-from-an-account)
- [계정의 1년 치 게시물 보관하기](https://apify.com/xquik/x-profile-scraper/examples/archive-one-year-of-posts)
- [계정의 팔로워 내보내기](https://apify.com/xquik/x-profile-scraper/examples/export-the-followers-of-an-account)
- [회사의 인증된 팔로워 내보내기](https://apify.com/xquik/x-profile-scraper/examples/export-verified-followers)
- [팔로워가 10,000명 이상인 팔로워 찾기](https://apify.com/xquik/x-profile-scraper/examples/find-influential-followers)
- [디자인 툴 2개의 오디언스 겹침 측정하기](https://apify.com/xquik/x-profile-scraper/examples/measure-audience-overlap)
- [계정 1개 전체 점검하기](https://apify.com/xquik/x-profile-scraper/examples/run-a-full-account-audit)

## X 프로필 스크랩 비용은 얼마인가요?

Xquik의 X Profile Scraper는 모든 Apify 요금제에서 전달된 행 1개당
$0.00015입니다. Apify 플랫폼 사용료는 Apify가 따로 청구합니다. Xquik은 전달된
데이터 행 1개마다 한 번 과금합니다. 진단은 `diagnostics` 출력에서 무료로
제공합니다.

더 많이 수집하려면 선불 사용량이 더 많은
[Apify 요금제를 고르세요](https://apify.com/pricing?fpr=xquik).

- Xquik 구독은 필요 없습니다.
- 별도의 시작, 프로필 또는 쿼리 요금은 내지 않습니다.
- 필터링 & 중복 제거는 과금 전에 실행됩니다. 필터에서 빠진 행이나 중복 행에는
  요금을 내지 않습니다.
- 자기소개가 없는 프로필에는 번역 요금이 붙지 않습니다.
- 찾을 수 없는 프로필에는 라이브 확인 요금이 붙지 않습니다.
- Apify의 최대 총 청구액 설정에 따라 전달되는 행 수가 제한됩니다.

문제가 생긴 실행이나 큰 실행은 `run-report` 레코드도 기록합니다. 문제없이 끝난
작은 실행은 이 레코드를 건너뛰어 Apify 사용량을 아낍니다. 모든 실행에서
기록하려면 `alwaysSaveRunRecords`를 켜세요.

실행당 지출 상한을 정하려면 [실행 옵션](#실행-옵션)을 보세요.

## 빈 실행, 부분 실행 & 중단된 실행

Xquik의 X Profile Scraper는 빈 실행, 부분 실행 & 중단된 실행의 원인을 무료로
알려 줍니다. 실행 상태는 실행이 멈춘 이유를 알려 줍니다. 과금된 결과 & 읽은 대상
수도 셉니다.

### 빈 결과

결과가 없는 실행의 상태는 대상 & 필터를 확인하라고 안내합니다. 필터에서 빠진
행은 결과 한도를 차지하지 않습니다. 모든 대상을 읽고도 행을 하나도 받지 못한
실행은 레코드를 기록하지 않습니다. 대신 실행 상태가 이유 & 바꿀 점을 알려
줍니다.

X는 2024년부터 계정이 마음에 들어요를 누른 게시물을 그 계정 본인에게만 보여
줍니다. 그래서 다른 계정에 대해서는 `includeLikes`가 `profileLike` 행을 반환하지
않습니다.

### 부분 실행

추출이 중단되면 무료 `partial` 진단을 기록합니다. 전달된 행은 데이터셋에 그대로
남습니다. 다시 시도하기 전에 `availableResults`, `failedTargets`, `retryable` &
`nextAction`을 확인하세요. Actor가 성공으로 종료되면 전달이 끝났다는 뜻입니다.
추출이 모두 끝났다는 뜻은 아닙니다.

### 중단 원인

실행 상태는 실행이 일찍 멈춘 원인을 모두 알려 줍니다. `stopCauses`는 원인마다
`message`, `retryable` & `nextAction`을 따로 담아 나열합니다. 원인은
`target_not_found`, `target_suspended`, `target_failed`,
`pagination_safety_limit` & `deadline_reached`입니다. `target_suspended`는 X가
정지한 계정을 알려 줍니다. 찾을 수 없거나 정지된 대상은 다른 원인으로 실행이
멈췄을 때만 목록에 들어갑니다. 원인 중 하나라도 재시도할 수 있으면 실행도
`retryable`입니다.

## 입력

Input 탭에 모든 옵션이 나와 있습니다. `twitterHandles`, `startUrls` 또는
`userIds` 중 1개 이상을 넣으세요. 다른 필드는 모두 선택 사항입니다.

| 필드                           | 기능                                                           |
| ------------------------------ | -------------------------------------------------------------- |
| `twitterHandles`               | `@`를 붙이거나 뺀 사용자 아이디                                |
| `startUrls`                    | `x.com` 또는 `twitter.com`의 프로필 URL                        |
| `userIds`                      | 숫자 X 사용자 ID                                               |
| `maxItems`                     | 실행 전체에서 전달할 행 수의 상한                              |
| `maxItemsPerTarget`            | 프로필이나 리소스마다 받을 행 수의 상한                        |
| `includeTweets`                | 게시물 탭 추가                                                 |
| `includeReplies`               | 답글 탭 추가                                                   |
| `includeMedia`                 | 미디어 탭 추가                                                 |
| `includeHighlights`            | 하이라이트 탭 추가                                             |
| `includeLikes`                 | X가 다른 계정에는 숨기는, 마음에 들어요를 누른 게시물 추가     |
| `includeFollowers`             | 팔로워 추가                                                    |
| `includeFollowing`             | 팔로잉 계정 추가                                               |
| `includeVerifiedFollowers`     | 인증된 팔로워 추가                                             |
| `translateBioTo`               | 각 자기소개를 `es` 같은 언어 코드로 번역                       |
| `checkLiveNow`                 | 각 프로필이 지금 라이브 방송 중인지 확인                       |
| `sinceDate`, `untilDate`       | 날짜 범위 안의 게시물만 유지                                   |
| `language`                     | 언어 코드 1개의 게시물만 유지                                  |
| `mediaType`                    | 이미지, 동영상, GIF, 링크가 있거나 미디어가 없는 게시물만 유지 |
| `minViews`, `minLikes`         | 조회수나 마음에 들어요 수가 기준 이상인 게시물만 유지          |
| `minReplies`, `minRetweets`    | 답글 수나 재게시 수가 기준 이상인 게시물만 유지                |
| `nativeRetweets`               | 네이티브 재게시물만 유지                                       |
| `verifiedOnly`                 | 인증된 작성자나 프로필만 유지                                  |
| `blueVerifiedOnly`             | X가 Blue 인증으로 표시한 작성자나 프로필만 유지                |
| `verifiedType`                 | 인증 유형 1개의 프로필만 유지                                  |
| `minFollowers`, `maxFollowers` | 오디언스 범위 안의 프로필만 유지                               |
| `minAccountAgeDays`            | 계정 연령이 이 일수 이상인 프로필만 유지                       |
| `minFollowing`, `maxFollowing` | 팔로잉 수 범위 안의 프로필만 유지                              |
| `minStatuses`, `maxStatuses`   | 게시물 수 범위 안의 프로필만 유지                              |
| `hasWebsite`, `hasLocation`    | 웹사이트나 위치를 적은 프로필만 유지                           |
| `hasEmail`                     | 이메일을 공개한 프로필만 유지                                  |
| `businessEmailOnly`            | 무료 메일이 아닌 이메일이 있는 프로필만 유지                   |
| `emailDomains`                 | 이 도메인의 이메일이 있는 프로필만 유지                        |
| `bioContains`                  | 자기소개에 이 단어 중 1개가 있는 프로필만 유지                 |
| `locationContains`             | 위치에 이 텍스트가 있는 프로필만 유지                          |
| `usernameContains`             | 사용자 아이디에 이 텍스트가 있는 프로필만 유지                 |
| `dedupeAcrossTargets`          | 프로필 간 중복 행을 과금 전에 제거                             |

### 다른 프로필 Actor에서 옮겨오기

이미 쓰는 입력을 그대로 붙여넣으세요. Xquik의 X Profile Scraper는 다른 프로필
Actor의 다음 필드 이름을 읽습니다. 각 줄은 그쪽 필드를 먼저 적고, 이어서
연결되는 필드를 적습니다.

- `profiles`, `userNames`, `usernames`, `handles`, `screenNames` 필드는
  `twitterHandles`에 매핑됩니다.
- `urls`, `profileUrls` 필드는 `startUrls`에 매핑됩니다.
- `maxProfiles`, `maxResults` 필드는 `maxItems`에 매핑됩니다.
- `shouldScrapeFollowers`, `shouldScrapeFollowings` 필드는 `includeFollowers`,
  `includeFollowing`에 매핑됩니다.
- `requireEmail` 필드는 `hasEmail`에 매핑됩니다.
- `requireWebsite` 필드는 `hasWebsite`에 매핑됩니다. 웹사이트 필드에 링크가
  하나라도 있는 프로필을 남기며, 실행 상태가 이를 알립니다.
- `filterByBlueVerified` 필드는 `blueVerifiedOnly`에 매핑됩니다. `false`는
  읽기나 과금 전에 실행을 멈춥니다.
- `bioKeywords` 필드는 `bioContains`에 매핑됩니다. 용어 중 1개만 일치하면
  됩니다.
- 값이 1개인 `locationKeywords` 필드는 `locationContains`에 매핑됩니다. 값이 더
  많으면 읽기나 과금 전에 실행이 멈춥니다.
- 목록으로 보낸 `emailDomains` 필드는 `emailDomains`에 매핑됩니다.
- `outputEmail`, `resolveShortLinks`에 대응하는 필드는 필요 없습니다. 모든 행에
  해당 이메일 & X의 전체 링크가 들어 있습니다.
- `findEmails`, `extractEmails`에 대응하는 필드는 필요 없습니다. 행에는 프로필이
  X에 공개한 이메일이 들어 있습니다. 실행 상태가 이 Actor는 연결된 사이트를 읽지
  않는다고 알립니다.
- `validateEmails`에 대응하는 필드는 필요 없습니다. 이 Actor는 메일함을 확인하지
  않으므로 실행 상태가 이메일이 공개된 그대로 나온다고 알립니다.

`user_info`로 설정한 `category`는 아무것도 바꾸지 않습니다. `tweets`나
`followers`처럼 다른 Actor가 하는 일을 가리키는 카테고리는 실행을 멈춥니다. 이때
실행은 아무것도 읽지 않고 과금하지도 않습니다. 메시지가 써야 할 Actor를 알려
줍니다. 별칭 & 그 표준 필드를 함께 설정하면 표준 필드 값을 씁니다. 실행 로그에
무시된 별칭이 나옵니다.

### 알맞은 입력 고르기

- 프로필 카드만 필요하면 사용자 아이디를 넣고 `include` 옵션은 모두 끄세요.
- 계정을 보관하려면 `includeTweets`, `includeMedia` & `includeHighlights`를 켜고
  `sinceDate`를 설정하세요.
- 인기 콘텐츠를 원하면 `includeTweets`에 `minLikes`나 `minViews`를 더하세요.
- 리드 목록을 만들려면 `includeFollowers`를 `minFollowers` &
  `minAccountAgeDays`와 함께 켜세요.
- 오디언스 겹침을 보려면 사용자 아이디 2개를 넣고 `includeFollowers`를 켠 다음
  `dedupeAcrossTargets: false`로 설정하세요. 그러면 공통 팔로워가 각 사용자
  아이디 아래에 모두 나타납니다.

## 출력

각 행은 JSON 객체입니다. 데이터셋 스키마가 필드마다 제목 & 설명을 제공하므로 AI
에이전트가 추측 없이 행을 읽을 수 있습니다.

예시는 샘플 값입니다. 실제 결과는 실시간 데이터를 따릅니다. 프로필 행은 다음과
같습니다.

```json
{
  "resultType": "profile",
  "sourceTarget": "sample_user",
  "id": "1234567890",
  "username": "sample_user",
  "name": "Sample User",
  "description": "Building tools for researchers.",
  "url": "https://example.com",
  "location": "Lisbon",
  "followers": 1200,
  "following": 310,
  "statusesCount": 4200,
  "verified": false,
  "createdAt": "Tue Mar 21 20:50:14 +0000 2017",
  "accountBasedInUnavailable": true
}
```

X는 계정 접속 IP를 집계해 `accountBasedIn`을 추정합니다. 이 라벨은 국적, 거주지,
신원, 가입 위치, 게시 위치 또는 정확한 위치를 나타내지 않습니다.
`observedAt`에는 데이터를 가져온 시각이 기록됩니다. X에 라벨이 없으면
`accountBasedIn`은 null입니다. X가 라벨을 숨기면 행에 대신
`accountBasedInUnavailable: true`가 들어갑니다.

데이터셋을 JSON, CSV, Excel 또는 HTML로 내보내세요.

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

- 객체 안의 필드는 `accountBasedIn.value`처럼 점으로 구분해 적으세요. 대소문자 &
  밑줄은 상관없습니다.
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

- 실행 비용 상한을 정하려면 Apify의 최대 총 청구액을 설정하세요. 그 예산 안에서
  가장 많은 행을 받으려면 `maxItems`를 높게 두세요.
- Apify API에서는 `maxTotalChargeUsd`를, Console에서는 Max cost per run을
  설정하세요.
- 모든 프로필을 실행 1번에 넣으세요. 실행마다 Apify에 같은 시작 비용을 냅니다.
- `maxConcurrency`는 동시에 처리할 프로필 수를 정합니다. 기본값이 가장 빠르면서
  안전한 설정입니다.
- 1초 단위 확인 & 서명된 웹훅이 필요하면 Xquik 계정 모니터를 쓰세요. 활성
  모니터는 매초 확인합니다.

배포된 수정 사항을 모두 받으려면 모든 실행에서 `latest`를 고르세요. 저장된
태스크 & 스케줄은 자체 빌드 선택을 유지하므로 `latest`로 두세요.

## 관련 Xquik Actor

모든 Xquik Actor는 같은 추출 엔진, 필터 우선 과금 & 진단을 공유합니다. 필요한
데이터에 맞는 Actor를 고르세요.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper)는 50개 이상의 필터
  & 플랫 내보내기로 검색, 프로필 타임라인, 리스트 & 게시물 ID에서 게시물을
  스크랩합니다. 분석 없이 게시물 데이터만 필요할 때 사용하세요. 행당
  $0.00015부터입니다.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper)는 25개 이상의
  필터로 게시물 아래의 답글, 댓글 & 대화 전체를 스크랩합니다. 게시물 아래의
  토론이 필요할 때 사용하세요. 행당 $0.00015부터입니다.
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
- [X (Twitter) Monitor](https://apify.com/xquik/x-twitter-monitor)는 계정의 새
  트윗, 답글, 인용, 리포스트 & 프로필 변경을 보통 X에 표시된 뒤 1초 안에 모두
  잡아내고, 키워드 트윗 & 팔로우도 잡아냅니다. X에 트윗이 표시되는 즉시 알림이
  필요할 때 사용하세요. monitor-hour당 $0.0045부터입니다.

## 자주 묻는 질문

자주 묻는 질문에 먼저 답하고, 이어서 도움받을 곳을 안내합니다.

### X API 키나 로그인이 필요한가요?

아니요. Xquik의 X Profile Scraper는 X API 키, 로그인, 자격 증명이 모두 필요
없습니다.

### 실행 1번에 프로필을 몇 개까지 스크랩할 수 있나요?

입력한 만큼 스크랩할 수 있습니다. `maxItems` & Apify 지출 한도가 행 수를
제한합니다.

### X 프로필을 CSV나 Excel로 내보낼 수 있나요?

네. Storage 탭에서 데이터셋을 JSON, CSV, Excel 또는 HTML로 내보내세요.

### Twitter 사용자의 팔로워를 스크랩할 수 있나요?

네. `includeFollowers`, `includeFollowing` 또는 `includeVerifiedFollowers`를
켜세요. 계정 1개가 행 1개입니다.

### 프로필의 웹사이트 & 위치도 가져오나요?

네. `url`에는 웹사이트가, `location`에는 계정 주인이 입력한 텍스트가 들어갑니다.
`hasWebsite` & `hasLocation`을 설정하면 이를 적은 프로필만 남길 수 있습니다.

### 보호된 계정도 스크랩할 수 있나요?

공개 프로필 행은 `protected: true`와 함께 받을 수 있습니다. X는 보호된 계정의
게시물 & 팔로워를 승인된 팔로워에게만 보여 줍니다.

### 계정이 지금 라이브 중인지 어떻게 알 수 있나요?

`checkLiveNow: true`로 설정하세요. 각 프로필에 `live` & 최근 방송을 담은
`profileLive` 행이 생깁니다.

### 자기소개를 번역할 수 있나요?

네. `translateBioTo`를 `es`나 `pt-br` 같은 언어 코드로 설정하세요. 자기소개가
없는 프로필은 행을 추가하지 않습니다.

### includeLikes가 아무것도 반환하지 않는 이유는 무엇인가요?

X는 2024년부터 계정이 마음에 들어요를 누른 게시물을 그 계정 본인에게만 보여
줍니다. 이 Actor를 포함해 다른 계정은 이 게시물을 읽을 수 없습니다.

### X 프로필을 스크랩해도 합법인가요?

Xquik의 X Profile Scraper는 공개 X 필드를 요청합니다. 결과에는 개인정보가 들어
있을 수 있습니다. 적법한 목적인지 확인하고 적용되는 개인정보 보호 규정을
따르세요. 확실하지 않으면 자격을 갖춘 법률 전문가에게 문의하세요.

### 실행 결과가 비어 있는 이유는 무엇인가요?

먼저 실행 상태를 읽으세요. 결과가 없는 실행의 상태는 대상 & 필터를 확인하라고
안내합니다. 무료 `diagnostics` 출력은 확인할 일이 있을 때 나타납니다. 그 안의
`stopCauses`는 원인마다 따라 할 `nextAction`을 알려 줍니다. 실행은 읽을 수 없는
입력을 모두 나열하고 고치는 방법을 알려 줍니다.

### API, 스케줄 & 연동을 사용할 수 있나요?

네. 공개 태스크 50개나 Xquik REST API 중에서 고르세요.
[API 탭](https://apify.com/xquik/x-profile-scraper/api)에 Python, JavaScript &
cURL 예시가 있습니다. Apify
[스케줄](https://docs.apify.com/platform/schedules)로 Xquik의 X Profile
Scraper를 cron 일정에 맞춰 실행할 수 있습니다. 에이전트는
[Apify MCP](https://docs.apify.com/platform/integrations/mcp)를 사용합니다. 이전
빌드가 꼭 필요하지 않다면 `latest`를 사용하세요.

### 맞춤 솔루션을 받을 수 있나요?

네. [Issues 탭](https://apify.com/xquik/x-profile-scraper/issues)에 필요한
내용을 적어 주세요. Xquik은 대시보드, REST API, MCP 서버 & 웹훅도 제공합니다.
Xquik 웹사이트는 [Apify 프로필](https://apify.com/xquik)에서 찾을 수 있습니다.

### 도움은 어디서 받을 수 있나요?

실행 ID와 함께 [Issues 탭](https://apify.com/xquik/x-profile-scraper/issues)에서
이슈를 여세요. 키-값 저장소의 무료 진단이 확인이 필요한 실행의 원인을
설명합니다. 행을 하나도 받지 못한 실행은 상태에서 이유를 알려 줍니다.
