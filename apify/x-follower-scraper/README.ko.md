[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · **한국어** ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer가 Xquik MCP를 코딩 에이전트에 연결하는 모습](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Framer가 Xquik 스크레이퍼를 Claude Code, Codex, Cursor 등과 함께 사용하는 방법](https://youtu.be/4UOSpoOoC3Y?t=367)을
6:07부터 보세요.

Xquik은 세계에서 가장 빠르고 저렴한 X(Twitter) 스크레이퍼 서비스이며, 가장
완전한 X 데이터를 제공합니다. Xquik의 X Follower Scraper는 팔로워, 팔로잉,
리스트 멤버, 구독자 & 커뮤니티 멤버를 수집합니다. 공개 벤치마크가 입증하듯
팔로워 Actor 10개 중 가장 저렴하고 빠릅니다. [아래 벤치마크](#벤치마크)에서 보듯
full 행의 필드 수도 Actor 중앙값의 2.5배입니다. 다른 Apify Actor는 대부분
필터링이나 중복 제거 전에 요금을 부과합니다. Xquik은 필터에 맞고 중복되지 않은
결과를 전달했을 때만 요금을 받습니다.

Twitter 팔로워 목록을 팔로잉, 인증된 팔로워, 리스트 멤버, 리스트 구독자 &
커뮤니티 멤버와 함께 내보내세요. Xquik의 X Follower Scraper는 **모든 Apify
요금제에서 전달된 프로필 1개당 $0.00015부터**입니다. Apify 플랫폼 사용료는
Apify가 따로 청구합니다. X 로그인은 필요 없고, Xquik은 시작 요금이나 쿼리 요금을
받지 않습니다.

> Xquik은 독립적인 제3자 서비스입니다. X Corp와 제휴 관계가 없습니다.
> "Twitter"와 "X"는 X Corp의 상표입니다.

## X Follower Scraper는 무엇을 하나요?

Xquik의 X Follower Scraper는 팔로워, 팔로잉, 리스트 & 커뮤니티의 공개 프로필
데이터를 제공되는 만큼 반환합니다. 각 행에는 원본 대상 & 관계가 표시됩니다.

### 기본 동작

- 필터링 & 중복 제거는 과금 전에 실행됩니다.
- 기본적으로 여러 대상에 겹치는 프로필은 한 번만 나오고 한 번만 과금됩니다.
- 실행 1개에 사용자 아이디, 숫자 ID, URL & 짧은 경로를 함께 넣을 수 있습니다.
- 병합 모드는 겹치는 프로필, 원본, 관계 & `overlapCount`를 기록합니다.
- 실행 로그는 페이지별 소요 시간을 `fetchDurationMs`, `processingDurationMs`,
  `pushDurationMs`, `statusDurationMs` & `fullPageDurationMs`로 보여 줍니다.
- Apify가 실행을 다시 시작해도 전달된 행 & 진행 상황은 유지됩니다.

### X Follower Scraper로 어떤 데이터를 추출할 수 있나요?

| 필드                     | 설명                                               |
| ------------------------ | -------------------------------------------------- |
| `id`                     | 숫자 X 사용자 ID                                   |
| `username`               | 사용자 아이디(`@` 제외)                            |
| `name`                   | 표시 이름                                          |
| `description`            | 자기소개 텍스트                                    |
| `followers`              | 팔로워 수                                          |
| `following`              | 팔로잉 수                                          |
| `statusesCount`          | 작성한 게시물 총수                                 |
| `mediaCount`             | 올린 미디어 총수                                   |
| `favouritesCount`        | 누른 마음에 들어요 총수                            |
| `verified`               | 공개 Blue 인증 또는 기존 인증을 합친 플래그        |
| `verifiedType`           | `blue`, `business`, `government` 또는 `none`       |
| `location`               | 본인이 입력한 위치                                 |
| `url`                    | 프로필의 웹사이트 URL                              |
| `email`                  | 프로필이 공개한 첫 번째 이메일                     |
| `contactInfo`            | 프로필이 공개한 이메일, 전화번호 & 링크            |
| `profilePicture`         | 48 px 크기의 프로필 사진 URL                       |
| `profilePictureOriginal` | 내려받을 수 있는 원본 크기의 같은 프로필 사진      |
| `coverPicture`           | 배너 URL                                           |
| `createdAt`              | X의 계정 생성 타임스탬프 문자열                    |
| `sourceTarget`           | 이 프로필을 스크랩한 사용자 아이디 / ID            |
| `sourceRelation`         | `followers`나 `list_members` 같은 관계             |
| `sourceUrl`              | 프로필을 찾은 정확한 URL                           |
| `sourceTargets`          | 병합 모드에서 이 프로필과 일치한 모든 대상         |
| `sourceRelations`        | 병합 모드에서 이 프로필과 일치한 모든 관계         |
| `sourceUrls`             | 병합 모드에서 이 프로필과 일치한 모든 원본 URL     |
| `overlapCount`           | 병합 모드에서 일치한 관계-대상 쌍의 수             |
| `resultType`             | full과 raw 출력 모드의 행 유형                     |
| `raw`                    | Actor 전용 서식을 적용하기 전의 안전한 원본 프로필 |

행에는 신원, 수치, 인증, 이용 가능 여부, 제휴, 프로페셔널 정보 & 자기소개에 관한
공개 프로필 필드가 들어 있습니다. 원본 표시, 엔티티 & 고정 게시물 ID도 계속
제공됩니다. 정확한 필드는 OpenAPI를 참고하세요.

`raw` 필드를 추가하려면 `outputMode: "raw"`나 `includeRaw: true`를 설정하세요.
이 필드에는 원본 프로필의 안전한 사본이 들어 있습니다. 기본값은 compact
모드입니다.

행당 데이터를 가장 많이 받으려면 `outputMode: "full"`을 설정하세요. 행에는 X가
팔로워 & 팔로잉 목록에서 보내는 `listedCount`, `defaultProfileImage` &
`advertiserAccountType` 같은 추가 프로필 필드도 최대 13개까지 들어갑니다. full
행은 이 필드를 끝에 둡니다. compact 행은 더 작고 저장 비용이 적게 듭니다.

`verifiedOnly`는 공개 Blue 인증 & 기존 인증 프로필을 받습니다. X의 인증 플래그
중 하나라도 인증으로 표시하면 그 프로필은 인증된 것으로 봅니다.
`blueVerifiedOnly`는 X가 Blue 인증으로 표시한 프로필을 남깁니다. X는 많은 기업 &
정부 계정도 Blue로 표시합니다. 배지 유형 1개만 남기려면 `verifiedType`을
설정하세요.

행에는 보는 사람에게만 해당하는 상태가 들어가지 않습니다. Xquik은 팔로우, 차단,
뮤트, DM, 알림 & 비슷한 뷰어 플래그를 제거합니다. raw 출력에서도 제거합니다.

## 사용 사례

- 프로필당 더 많은 필드로 리드를 보강하고 리서치 데이터셋을 만드세요. 2026-09-29
  기준 저희 full 행의 중앙값에는 필드가 38개 있었습니다. 다른 Actor 9개 중앙값의
  2.5배입니다.
- 리드 조사를 위해 경쟁사 팔로워를 내보내세요.
- 내 계정, 경쟁사 & 공인의 오디언스를 비교하세요.
- 팔로워 수 & 인증 여부로 필터링해 조건에 맞는 프로필을 찾으세요.
- X 커뮤니티 멤버를 내보내세요.
- 연구용 공개 소셜 네트워크 데이터셋을 만드세요.
- 자기소개 키워드, 위치 또는 프로필 유형으로 팔로워층을 나누세요.

## X Follower Scraper로 팔로워 데이터를 스크랩하려면 어떻게 하나요?

Apify가 처음인가요? 먼저
[무료 계정을 만드세요](https://console.apify.com/sign-up?fpr=xquik). 무료
요금제는 신용카드가 필요 없고 매달 쓸 수 있는 $5를 줍니다. 프로필 1개당
$0.00015이므로 $5면 플랫폼 사용료를 빼고 프로필을 최대 33,000개 받을 수
있습니다. 그런 다음 여기로 돌아와 Try for free를 누르세요.

1. Apify Console에서 Xquik의 X Follower Scraper를 여세요.
2. 프로필, 리스트 또는 커뮤니티 URL이나 X 사용자 아이디 또는 숫자 ID를
   추가하세요.
3. `followers`나 `verified_followers` 같은 관계를 고르세요.
4. `maxItems` & 필요한 프로필 필터를 설정하세요.
5. 실행을 시작하세요.
6. 데이터셋을 JSON, CSV, Excel 또는 HTML로 내보내세요.

아래 입력은 각각 완전한 입력이며 자주 하는 작업을 다룹니다. 데이터에 맞는 입력을
고르세요.

### 프로필이나 리스트 URL 붙여넣기

프로필, 리스트 또는 커뮤니티 URL을 붙여넣으세요. URL마다 스크랩할 관계가
정해집니다.

```json
{
  "startUrls": [
    { "url": "https://x.com/nasa/followers" },
    { "url": "https://x.com/spacex/verified_followers" },
    { "url": "https://x.com/elonmusk/following" },
    { "url": "https://x.com/i/lists/1748648376080666720/members" },
    { "url": "https://x.com/i/communities/1493446837214187523/members" }
  ],
  "maxItems": 5000
}
```

### 여러 사용자 아이디 한 번에 넣기

`twitterHandles`는 여러 `/<handle>/followers` 대상을 줄여 쓰는 방법입니다.
사용자 아이디는 `@`를 붙여도, 빼도 됩니다.

```json
{
  "twitterHandles": ["elonmusk", "nasa", "openai"],
  "relation": "followers",
  "maxItems": 1000
}
```

`relation`은 모든 사용자 아이디에서 무엇을 스크랩할지 정합니다. `followers`,
`following` 또는 `verified_followers`를 쓰세요.

사용자 ID만 필요하면 `follower_ids`나 `following_ids`를 쓰세요. 각 행에는 사용자
ID 1개, 그 원본 대상 & 관계가 들어 있고, 페이지 1개에는 ID가 최대 5,000개
들어갑니다. 프로필 필터에는 프로필 필드가 필요하므로 이 2개 관계에서는 비워
두세요.

회사의 직원 & 제품처럼 조직이 제휴 계정으로 등록한 계정을 받으려면
`affiliates`를 쓰세요. 각 행은 전체 프로필입니다. 제휴 계정이 없는 계정은 행을
반환하지 않습니다.

계정이 구독하는 크리에이터를 받으려면 `subscriptions`를 쓰세요. 구독을 숨긴
계정은 행을 반환하지 않습니다.

X가 어떤 계정과 비슷하다고 보여 주는 계정을 받으려면 `similar`를 쓰세요. 각 행은
전체 프로필입니다. X는 적은 수의 계정만 보여 주며, 실행마다 그 목록을 바꿀 수
있습니다.

같은 입력에서 `username`, `usernames` & `user_names`도 별칭으로 쓸 수 있습니다.

### 여러 관계를 한 번에 실행

같은 사용자 아이디에서 여러 관계를 읽으려면 `relations`를 설정하세요.

```json
{
  "usernames": ["nasa"],
  "relations": ["followers", "following"],
  "maxItems": 1000
}
```

`getFollowers`, `getFollowing`, `getVerifiedFollowers`, `getListMembers`,
`getListFollowers` & `getCommunityMembers` 같은 불리언 값도 작동합니다.

### 숫자 사용자 ID, 리스트 ID 또는 커뮤니티 ID로 스크랩

```json
{
  "userIds": ["44196397"],
  "listIds": ["1748648376080666720"],
  "communityIds": ["1493446837214187523"],
  "relation": "followers",
  "maxItemsPerTarget": 500,
  "maxItems": 1500
}
```

숫자 사용자 ID에는 `twitterUserIds` & `user_ids` 별칭도 쓸 수 있습니다.

`relation`은 숫자 사용자 ID에 적용됩니다. 리스트 ID의 기본값은 멤버입니다.
커뮤니티 ID는 항상 멤버를 씁니다. `maxItemsPerTarget`을 쓰면 첫 번째 큰 대상이
`maxItems`를 다 써 버리지 않습니다.

### 요금을 내기 전에 필터링

조건에 맞는 프로필만 데이터셋에 들어가도록 필터를 추가하세요.

```json
{
  "twitterHandles": ["openai"],
  "relation": "followers",
  "minFollowers": 1000,
  "verifiedOnly": true,
  "verifiedType": "business",
  "minStatuses": 100,
  "usernameContains": "ai",
  "bioContains": "founder, CEO",
  "locationContains": "San Francisco",
  "maxItems": 500
}
```

이 Actor는 기록하는 것보다 많은 프로필을 확인할 수 있습니다. 요금은 모든 필터를
통과해 데이터셋에 들어간 행에만 냅니다. 필터를 쓴 실행의 마지막 상태는 확인한
프로필 수 & 통과한 프로필 수를 알려 줍니다. 필터를 쓴 실행은 기본적으로 목록
1개당 프로필 100,000개를 확인하면 멈춥니다. 더 적게 또는 더 많이 읽으려면
`maxScan`을 설정하세요.

`bioContains`의 후보 단어는 쉼표나 줄바꿈으로 구분하세요. 자기소개에 입력한 단어
중 하나라도 있으면 프로필이 통과합니다. 대소문자는 구분하지 않습니다.

### 오디언스 겹침 찾기

경쟁사, 리스트, 커뮤니티 또는 관계 유형을 비교하려면 병합 모드를 쓰세요.

```json
{
  "twitterHandles": ["openai", "anthropicai", "GoogleDeepMind"],
  "relation": "followers",
  "dedupeMode": "merge",
  "maxItemsPerTarget": 5000,
  "maxItems": 15000
}
```

출력에는 고유한 프로필마다 행이 1개씩 있습니다. 겹치는 프로필에는
`sourceTargets`, `sourceRelations`, `sourceUrls`, `sourceTargetKeys` &
`overlapCount`가 들어갑니다. `overlapCount`로 정렬하거나 행을 CSV로 내보내세요.
행은 대상 순서를 따릅니다. 모든 대상이 행을 추가할 수 있도록 `maxItems`를
넉넉하게 두세요. `maxItems` 때문에 실행이 일찍 끝나면 남는 프로필이 실행마다
달라질 수 있습니다. 계정마다 얼마나 깊이 읽을지는 `maxItemsPerTarget`으로
정하세요.

### 누가 누구를 팔로우하는지 확인

원본 계정 & 대상 계정을 나열해 서로의 팔로우 관계를 확인하세요.

```json
{
  "followCheckSources": ["elonmusk", "@nasa"],
  "followCheckTargets": ["spacex", "https://x.com/i/user/11348282"]
}
```

실행은 원본마다 모든 대상을 확인하므로 이 입력은 4번 확인합니다. 확인 1번은 행
1개 & 결과 1개이며, 가격은 프로필과 같습니다. 각 행에는 `isFollowing`(원본이
대상을 팔로우함) & `isFollowedBy`(대상이 맞팔로우함)가 두 계정의
`sourceUsername`, `sourceId`, `targetUsername` & `targetId`와 함께 들어
있습니다. 계정에는 사용자 ID, `@`를 붙이거나 뺀 사용자 아이디 또는 프로필 URL을
넣습니다. 숫자는 사용자 ID로 봅니다. Follow checks 뷰가 이 행을 보여 줍니다.

### 지원하는 URL 형식

| URL                                         | 관계                           |
| ------------------------------------------- | ------------------------------ |
| `https://x.com/<handle>/followers`          | `followers`                    |
| `https://x.com/<handle>/verified_followers` | `verified_followers`           |
| `https://x.com/<handle>/following`          | `following`                    |
| `https://x.com/<handle>/affiliates`         | `affiliates`                   |
| `https://x.com/<handle>`                    | `relation`, 없으면 `followers` |
| `https://x.com/i/lists/<id>/members`        | `list_members`                 |
| `https://x.com/i/lists/<id>/followers`      | `list_followers`               |
| `https://x.com/i/lists/<id>`                | `list_members`                 |
| `https://x.com/i/communities/<id>/members`  | `community_members`            |
| `https://x.com/i/communities/<id>`          | `community_members`            |
| `<handle>/followers`                        | `followers`                    |
| `<handle>/following`                        | `following`                    |
| `<handle>/verified_followers`               | `verified_followers`           |
| `<handle>/affiliates`                       | `affiliates`                   |
| `lists/<id>/members`                        | `list_members`                 |
| `lists/<id>/followers`                      | `list_followers`               |
| `communities/<id>/members`                  | `community_members`            |

`twitter.com` & `mobile.twitter.com` URL도 어디서나 작동합니다. `x.com/nasa`처럼
`https://`가 없는 URL도 작동합니다.

## 태스크 예시

공개 태스크 50개 중에서 고르세요. 태스크마다 범위가 정해진 입력 & 그에 맞는
데이터셋 뷰가 있습니다. 모든 태스크는 실제 오디언스나 필터로 시작합니다.
실행하기 전에 수정하세요.

- [OpenAI 팔로워에서 AI 빌더 찾기](https://apify.com/xquik/x-follower-scraper/examples/discover-ai-builders-in-openai-followers)
- [AI 에이전트용 X 오디언스 데이터셋 만들기](https://apify.com/xquik/x-follower-scraper/examples/build-agent-ready-x-audience-dataset)
- [RAG용 X 오디언스 데이터 모으기](https://apify.com/xquik/x-follower-scraper/examples/collect-x-audience-data-for-rag)
- [X에서 AI SEO 실무자 찾기](https://apify.com/xquik/x-follower-scraper/examples/find-ai-seo-practitioners-on-x)
- [Twitter에서 누가 누구를 팔로우하는지 확인하기](https://apify.com/xquik/x-follower-scraper/examples/check-who-follows-who-on-twitter)
- [Twitter 팔로워를 CSV로 내보내기](https://apify.com/xquik/x-follower-scraper/examples/export-twitter-followers-to-csv)
- [경쟁사 팔로워 겹침 분석하기](https://apify.com/xquik/x-follower-scraper/examples/analyze-competitor-follower-overlap)
- [X 팔로워에서 마이크로 인플루언서 찾기](https://apify.com/xquik/x-follower-scraper/examples/find-micro-influencers-in-followers)
- [큐레이션된 Twitter 리스트 멤버 내보내기](https://apify.com/xquik/x-follower-scraper/examples/export-curated-twitter-list-members)
- [공개 X 커뮤니티 멤버 분석하기](https://apify.com/xquik/x-follower-scraper/examples/analyze-public-x-community-members)
- [AI 에이전트용 커뮤니티 멤버 모으기](https://apify.com/xquik/x-follower-scraper/examples/collect-community-members-for-ai-agents)
- [반복 가능한 X 팔로워 스냅숏 만들기](https://apify.com/xquik/x-follower-scraper/examples/create-repeatable-follower-snapshots)

## X 팔로워 스크랩 비용은 얼마인가요?

Xquik의 X Follower Scraper는 모든 Apify 요금제에서 전달된 프로필 1개당
$0.00015입니다. Apify 플랫폼 사용료는 Apify가 따로 청구합니다. Xquik은 전달된
데이터 행 1개마다 한 번 과금합니다. 별도의 Xquik 구독은 필요 없고, Xquik은 시작
요금을 받지 않습니다. 시작, 대상 & 관계 선택에도 별도의 쿼리 요금이 붙지
않습니다. 팔로우 확인 1번은 같은 가격의 행 1개입니다.

더 많이 수집하려면 선불 사용량이 더 많은
[Apify 요금제를 고르세요](https://apify.com/pricing?fpr=xquik).

실행 1개로 여러 대상을 읽을 수 있습니다. 상한, 중복 제거 & 과금은 모든 대상에서
정확하게 유지됩니다.

- 필터는 프로필이 데이터셋에 들어가기 전에 실행되므로, 필터에서 빠진 행에는
  비용이 없습니다.
- 숫자 필터는 `minFollowers`, `maxFollowers`, `minFollowing`, `maxFollowing`,
  `minStatuses`, `maxStatuses` & `minAccountAgeDays`입니다.
- 프로필 필터는 `verifiedOnly`, `blueVerifiedOnly`, `verifiedType`,
  `bioContains`, `locationContains`, `usernameContains`, `hasWebsite` &
  `hasLocation`입니다.
- 이메일 필터는 `hasEmail`, `businessEmailOnly` & `emailDomains`입니다. 이
  필터는 프로필에 이메일을 공개한 행을 남깁니다.
- 이 Actor는 기록하기 전에 대상 사이의 중복을 제거합니다. 중복을 남기려면
  `dedupeAcrossTargets: false`를 설정하세요.
- Xquik은 데이터셋이 거부한 행을 과금하지 않습니다.
- 진단은 `diagnostics` 출력에서 무료로 제공합니다.
- 입력이 없는 실행, 입력이 잘못된 실행 & 결과가 0인 실행은 무료 `diagnostics`
  출력에 바로 조치할 수 있는 레코드 1개를 기록합니다.

문제가 생긴 실행이나 큰 실행은 `run-report` 레코드도 기록합니다. 이 레코드의
`estimatedChargeUsd`는 Apify가 Actor에 제공하는 현재 이벤트당 과금 가격을
씁니다. 문제없이 끝난 작은 실행은 이 레코드를 건너뛰어 Apify 사용량을 아낍니다.
모든 실행에서 기록하려면 `alwaysSaveRunRecords`를 켜세요.

## 벤치마크

Xquik의 X Follower Scraper는 비용 & 속도에서 다른 팔로워 Actor 9개를 앞섰습니다.
이 Actor의 full 행 중앙값에는 필드가 38개 있었고, 다른 Actor 중앙값의
2.5배였습니다.

- `xquik/x-follower-scraper` 실행은 유용한 프로필 1,000개를 전달했습니다. 유용한
  프로필당 $0.000155, 초당 100.0개 & 행당 필드 38개입니다.
  [실행 보기](https://console.apify.com/view/runs/z5ELS2u5sgjuhAFHN)
- `xquik/x-follower-scraper` 실행은 유용한 프로필 1,000개를 전달했습니다. 유용한
  프로필당 $0.000155, 초당 77.9개 & 행당 필드 38개입니다.
  [실행 보기](https://console.apify.com/view/runs/Htim4jqodU6ZPjQiQ)
- `b2b_leads/X-Real-Time-Data` 실행은 유용한 프로필 286개를 전달했습니다. 유용한
  프로필당 $0.000388, 초당 3.1개 & 행당 필드 21개입니다.
  [실행 보기](https://console.apify.com/view/runs/IkQButA6cVz4ys4GM)
- `kaitoeasyapi/premium-x-follower-scraper-following-data` 실행은 유용한 프로필
  356개를 전달했습니다. 유용한 프로필당 $0.000506, 초당 21.9개 & 행당 필드
  50개입니다. [실행 보기](https://console.apify.com/view/runs/cJgj15HLBA50LEUf0)
- `api-ninja/x-twitter-followers-scraper` 실행은 유용한 프로필 350개를
  전달했습니다. 유용한 프로필당 $0.000809, 초당 7.0개 & 행당 필드 8개입니다.
  [실행 보기](https://console.apify.com/view/runs/XjJ4UPKAILSz0Droz)
- `altimis/scweet` 실행은 유용한 프로필 332개를 전달했습니다. 유용한 프로필당
  $0.000922, 초당 1.1개 & 행당 필드 21개입니다.
  [실행 보기](https://console.apify.com/view/runs/qVGvT7TPAJEHCuR42)
- `apidojo/twitter-user-scraper` 실행은 유용한 프로필 323개를 전달했습니다.
  유용한 프로필당 $0.001160, 초당 7.3개 & 행당 필드 25개입니다.
  [실행 보기](https://console.apify.com/view/runs/Xnf7rh8jK6764gP1f)
- `atomus/twitter-scraper` 실행은 유용한 프로필 323개를 전달했습니다. 유용한
  프로필당 $0.001272, 초당 6.2개 & 행당 필드 13개입니다.
  [실행 보기](https://console.apify.com/view/runs/MWz1l0cTcfPcEnaiH)
- `practicaltools/cheap-simple-twitter-api` 실행은 유용한 프로필 283개를
  전달했습니다. 유용한 프로필당 $0.002036, 초당 6.5개 & 행당 필드 4개입니다.
  [실행 1](https://console.apify.com/view/runs/Zhvi7LsfpHdQNKcGb),
  [실행 2](https://console.apify.com/view/runs/IsJj4fa8pFUG7uhlK),
  [실행 3](https://console.apify.com/view/runs/2W7n8fpEqoxiXq6oX)
- `maximedupre/twitter-scraper` 실행은 유용한 프로필 320개를 전달했습니다.
  유용한 프로필당 $0.002192, 초당 2.1개 & 행당 필드 15개입니다.
  [실행 1](https://console.apify.com/view/runs/HblUkhgI2svp1LBGs),
  [실행 2](https://console.apify.com/view/runs/37yQFzgydzJoWfa39),
  [실행 3](https://console.apify.com/view/runs/mtBoKcocaM4BUzZmm)
- `seemuapps/x-followers-following-scraper` 실행은 유용한 프로필 286개를
  전달했습니다. 유용한 프로필당 $0.003504, 초당 3.9개 & 행당 필드 9개입니다.
  [실행 1](https://console.apify.com/view/runs/1r3je034X2qhFGgLj),
  [실행 2](https://console.apify.com/view/runs/dc4ztVP3n2eemgiNQ),
  [실행 3](https://console.apify.com/view/runs/gWPiBT00G7D9IJ0Cj)

모든 Actor는 NASA, SpaceX & esa의 팔로워를 읽었습니다. 다른 Actor는 2026-09-28에
실행했습니다. Xquik 실행은 `outputMode: "full"`을 설정하고 2026-09-29에
실행했습니다. 모든 실행은 Bronze 등급을 사용했습니다. 유용한 프로필은 고유하고,
생성된 지 30일 이상이며, 팔로워 1명 이상 & 게시물 1개 이상이 있는 프로필입니다.
비용은 유용한 프로필 1개당 고객의 총지출입니다. 저희 비용에는 고객이 내는 Apify
사용료가 포함됩니다. 실행이 3개인 행은 그 실행들의 합계입니다. 행당 필드 수는
비어 있지 않은 필드 수의 중앙값이며, 중첩 필드도 포함합니다. 목록은 필드 1개로
셉니다. 실행을 열면 입력, 로그 & 데이터셋을 볼 수 있습니다.

## 입력

Input 탭에 모든 옵션이 있습니다. `startUrls`, `twitterHandles`, `userIds`,
`listIds` 또는 `communityIds` 중 1개 이상을 넣거나, `followCheckSources` &
`followCheckTargets`를 둘 다 넣으세요. 문서에 나온 별칭도 인정됩니다. 나머지
필드는 모두 선택 사항입니다.

다음 입력을 써 보세요.

- `relation: "followers"`와 함께 경쟁사 사용자 아이디를 `twitterHandles`에
  추가하세요.
- 인증된 프로필을 받으려면 `https://x.com/<handle>/verified_followers`를 Start
  URLs에 붙여넣으세요.
- 리스트 멤버를 점검하려면 리스트 URL을 Start URLs에 붙여넣으세요.
- 사용자 아이디를 2개 이상 추가하세요. 겹치는 프로필은 그 프로필을 먼저 반환한
  대상 아래에 한 번만 나옵니다. 그 대상은 실행마다 달라질 수 있습니다. 일치한
  대상을 모두 담은 안정적인 행 1개를 받으려면 `dedupeMode: "merge"`를 쓰세요.
  대상마다 행 1개를 남기려면 `dedupeAcrossTargets: false`를 설정하세요.

### Console & API 입력

Console 양식에는 다음 컨트롤이 있습니다.

- Start URLs 필드는 URL 문자열이나 `{ "url": "..." }` 객체를 받습니다. JSON
  편집기는 두 API 형식을 모두 유지합니다.
- Relation, Output Mode & Dedupe Mode는 선택지가 정해진 목록입니다.
- Relations는 여러 관계를 실행할 때 쓰는 다중 선택 목록입니다.
- 결과 한도에는 1 이상의 정수를 넣습니다.
- 숫자 프로필 필터에는 0 이상의 정수를 넣습니다.

새 연동에는 표준 필드를 쓰세요. 별칭은 JSON, API, SDK, 자동화 & 태스크 입력에서
계속 작동합니다. `outputVariant` & `includeRaw`는 Output Mode의 별칭입니다.
`dedupeAcrossTargets`는 Dedupe Mode의 별칭입니다. 시각적 양식은 표준 컨트롤과
겹치는 별칭을 숨깁니다. 별칭을 쓴 기존 JSON & 저장된 태스크 입력도 계속
작동합니다. `dedupeAcrossTargets: false`나 `dedupeMode: "none"`이 저장된 입력은
대상마다 행 1개를 남깁니다.

### 다른 팔로워 Actor에서 옮겨오기

이미 쓰는 입력을 그대로 붙여넣으세요. Xquik의 X Follower Scraper는 다른 X 팔로워
Actor가 쓰는 필드 이름을 읽습니다. 그리고 그 이름을 자체 필드에 연결합니다.
문서상 기본값은 계속 표준 이름입니다. 별칭을 써도 필드가 빠지지 않고 요금도
달라지지 않습니다.

각 줄은 이미 쓰는 필드를 먼저 적고, 이어서 연결되는 필드를 적습니다.

- `twitterHandles`, `usernames`, `user_names`, `handles`, `userNameList`,
  `screenNames` 필드는 `twitterHandles`에 매핑됩니다.
- 문자열 1개인 `username`, `handle`, `screenName` 필드는 `twitterHandles`에
  매핑됩니다.
- `twitterUserIds`, `user_ids`, `userIdList` 필드는 `userIds`에 매핑됩니다.
- 문자열 1개인 `user_id`, `userId` 필드는 `userIds`에 매핑됩니다.
- `startUrls`, `urls`, `targets`, `profileUrls`, `accountUrls` 필드는
  `startUrls`에 매핑됩니다.
- 문자열 1개인 `profileUrl` 필드는 `startUrls`에 매핑됩니다.
- `getFollowers`, `getFollowing` 필드는 `relations`에 매핑됩니다.
- `followers`나 `following` 값을 가진 `type` 필드는 `relation`에 매핑됩니다.
- `relationship`, `relationshipType`, `listType`, `scrape_type` 필드는
  `relation`에 매핑됩니다.
- `relationships` 필드는 `relations`에 매핑됩니다.
- `followers`, `following` 또는 `both` 값을 가진 `mode` 필드는 `relation` 또는
  `relations`에 매핑됩니다.
- `followers`, `following` 또는 `affiliates` 값을 가진 `category` 필드는
  `relation`에 매핑됩니다.
- `profile_urls` 필드는 링크면 `startUrls`에, 사용자 아이디면 `twitterHandles`에
  매핑됩니다.
- `maxResults`, `max_results`, `resultsLimit`, `count`, `max_items` 필드는
  `maxItems`에 매핑됩니다.
- `per_profile_limit`, `maxItemsPerUser`, `maxUsersPerAccount`,
  `max_followers_per_user`, `max_following_per_user`, `follower_limit` 필드는
  `maxItemsPerTarget`에 매핑됩니다. 0이면 계정별 상한이 없습니다.
  `max_following_per_user`는 `relation`도 `following`으로 설정합니다.
- `scrapeAllResults`는 대상별 상한을 두지 않습니다.
- `minTweets` 필드는 `minStatuses`에 매핑됩니다.
- `includeRawUser` 필드는 `includeRaw`에 매핑됩니다.
- `outputVariant` 필드는 `outputMode`에 매핑됩니다.
- `requireEmail` 필드는 `hasEmail`에 매핑됩니다.
- `requireWebsite` 필드는 `hasWebsite`에 매핑됩니다. 웹사이트 필드에 링크가
  하나라도 있는 프로필을 남기며, 실행 상태가 이를 알려 줍니다.
- `onlyVerified`, `blue_verified_only` 필드는 `blueVerifiedOnly`에 매핑됩니다.
  `source_mode`가 있는 입력에서는 `blue_verified_only`가 적용되지 않습니다.
- `verification`에서 `any_verified`는 `verifiedOnly`를, `blue_verified`는
  `blueVerifiedOnly`를, `business` & `government`는 `verifiedType`을 설정합니다.
  `unverified`는 읽기나 과금 전에 실행을 멈춥니다.
- `bioKeywords` 필드는 `bioContains`에 매핑됩니다. 용어 중 1개만 일치해도
  됩니다.
- 값이 1개인 `locationKeywords` 필드는 `locationContains`에 매핑됩니다. 값이 더
  많으면 읽기나 과금 전에 실행이 멈춥니다.
- 목록으로 보낸 `emailDomains` 필드는 `emailDomains`에 매핑됩니다.
- `outputEmail`, `resolveShortLinks`에는 대응하는 필드가 필요 없습니다. 모든
  행에 이메일 & X의 전체 링크가 들어 있습니다.
- `findEmails`, `extractEmails`에는 대응하는 필드가 필요 없습니다. 행에는
  프로필이 X에 공개한 이메일이 들어 있습니다. 실행 상태는 이 Actor가 연결된
  사이트를 읽지 않는다고 알려 줍니다.
- `validateEmails`에는 대응하는 필드가 필요 없습니다. 이 Actor는 메일함을
  확인하지 않으므로, 실행 상태는 이메일이 공개된 그대로 나온다고 알려 줍니다.

붙여넣은 입력은 다음과 같이 동작합니다.

- 다른 말로 적은 목록은 이 Actor가 쓰는 이름으로 읽습니다. `followings`,
  `Verified Followers` & `verifiedFollowers`는 `relation`에서도 `following` &
  `verified_followers`로 읽습니다.
- 별칭 & 그 표준 필드를 함께 설정하면 표준 필드 값이 우선합니다. 실행 로그에
  밀려난 별칭이 나옵니다.
- `mutuals`처럼 이 Actor가 읽지 않는 목록은 읽기나 과금 전에 실행을 멈춥니다.
- 다른 Actor가 하는 일을 가리키는 모드도 같은 방식으로 실행을 멈춥니다.
  `source_mode`에서는 `search` & `profiles`가 그렇습니다. `mode`에서는
  `profiles` & `all`이 그렇습니다. `category`에서는 `tweets`, `user_info` 또는
  `replies` 같은 일이 그렇습니다. 메시지가 써야 할 Actor를 알려 줍니다.

이름 2개는 여기서 뜻이 다릅니다. 일부 Actor에서 `maxFollowers` &
`maxFollowing`은 실행이 반환하는 행 수의 상한입니다. Xquik의 X Follower
Scraper에서는 팔로워 수 & 팔로잉 수로 프로필을 거르는 필터입니다. 행 수 상한은
`maxItems`로 정하세요. `maxFollowers`를 설정하고 행 상한이 없는 실행은 계정을
걸러 냈다고 로그 & 마지막 상태에 알립니다. 이 Actor에는 페이지 단위가 없으므로
`maxPages` 대신 `maxItems`를 쓰세요.

### 항상 최신 빌드 사용

Store에서 실행하면 Xquik의 X Follower Scraper `latest` 빌드를 씁니다. API
호출에서는 빌드 지정을 빼거나 `build=latest`를 넘기세요. 예전 빌드에 고정된
태스크 & 연동은 업데이트하세요. 고정된 빌드는 저절로 바뀌지 않습니다.

## 출력

프로필 1개는 JSON 객체 1개입니다. compact 모드는 정규화된 공개 필드, 스키마 버전
필드 & 제공되는 원본 메타데이터를 반환합니다.

데이터셋 & run-report 스키마는 반환되는 모든 필드를 설명합니다. 기본형 필드에는
에이전트 & 자동 생성 연동을 위한 예시도 들어 있습니다.

아래 샘플 값은 예시입니다. 실제 행에는 실행 시점의 실시간 데이터가 들어갑니다.
compact 행은 다음과 같습니다.

```json
{
  "schemaVersion": 1,
  "_schema_version": 1,
  "id": "44196397",
  "username": "elonmusk",
  "name": "Elon Musk",
  "description": "...",
  "followers": 180000000,
  "following": 500,
  "statusesCount": 42000,
  "mediaCount": 3200,
  "favouritesCount": 120000,
  "verified": true,
  "verifiedType": "blue",
  "location": "...",
  "url": "https://...",
  "profilePicture": "https://..._normal.jpg",
  "profilePictureOriginal": "https://....jpg",
  "coverPicture": "https://...",
  "createdAt": "Tue Jun 02 20:12:29 +0000 2009",
  "sourceTarget": "nasa",
  "sourceRelation": "followers",
  "sourceUrl": "https://x.com/nasa/followers"
}
```

병합 중복 제거 모드는 겹침 필드를 추가합니다.

```json
{
  "schemaVersion": 1,
  "_schema_version": 1,
  "id": "44196397",
  "username": "elonmusk",
  "sourceTargets": ["nasa", "spacex"],
  "sourceRelations": ["followers"],
  "sourceUrls": [
    "https://x.com/nasa/followers",
    "https://x.com/spacex/followers"
  ],
  "sourceTargetKeys": ["followers:nasa", "followers:spacex"],
  "overlapCount": 2
}
```

팔로우 확인 행은 다음과 같습니다.

```json
{
  "id": "followCheck:elonmusk:spacex",
  "resultType": "followCheck",
  "source": "elonmusk",
  "target": "spacex",
  "sourceId": "44196397",
  "sourceUsername": "elonmusk",
  "targetId": "34743251",
  "targetUsername": "spacex",
  "isFollowing": true,
  "isFollowedBy": false,
  "schemaVersion": 1
}
```

Apify 데이터셋을 JSON, CSV, Excel 또는 HTML로 내보내세요.

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

## 실행 옵션

지출에 확실한 상한을 두려면 Apify API에서 `maxTotalChargeUsd`를 설정하세요.
Console에서는 같은 한도가 Max cost per run입니다. Apify는 이 한도를
`ACTOR_MAX_TOTAL_CHARGE_USD`로 Xquik의 X Follower Scraper에 넘깁니다. 이 Actor는
한도를 넘는 행을 받기 전에 멈춥니다. 지출 상한 안에서 최대한 많은 프로필을
받으려면 `maxItems`를 비워 두세요. `maxItems` & `maxItemsPerTarget`은 예산이
허용하는 것보다 적은 프로필을 원할 때만 설정하세요.

- `minFollowers`, `verifiedType` & `bioContains` 같은 프로필 필터를 함께 써서
  과금되는 데이터셋을 좁히세요.
- 기본적으로 실행은 대상 전체에서 고유한 프로필만 남깁니다. 대상마다 행 1개를
  남기려면 `dedupeAcrossTargets: false`를 설정하세요.
- 일치한 원본 대상을 모두 담아 프로필마다 행 1개를 받으려면
  `dedupeMode: "merge"`를 설정하세요.
- 제공되는 선택 프로필 필드까지 받으려면 `outputMode: "full"`을 설정하세요. 고정
  게시물 ID, 엔티티 & 프로필 메타데이터가 여기에 해당합니다.
- 정규화된 필드 옆에 정제된 `raw` 객체를 넣으려면 `outputMode: "raw"`나
  `includeRaw: true`를 설정하세요.
- 반복 실행을 예약하고 데이터셋을 보관해 프로필 ID를 비교하세요. Xquik 모니터는
  지원하는 게시물 & 프로필 이벤트를 보내며, 팔로워 목록 변화는 보내지 않습니다.

## 빈 실행, 부분 실행 & 중단된 실행

Xquik의 X Follower Scraper는 빈 실행, 부분 실행 & 중단된 실행을 무료 진단으로
설명합니다. Actor가 성공으로 종료되면 전달이 끝났다는 뜻이지, 추출이 모두
끝났다는 뜻은 아닙니다.

중단된 실행은 무료 `partial` 진단을 기록합니다. 이미 전달된 결과는 데이터셋에
남습니다. 다시 시도하기 전에 `availableResults`, `failedTargets`, `retryable` &
`nextAction`을 확인하세요.

실행 상태는 실행이 멈춘 이유를 알려 줍니다. 과금된 결과, 건너뛴 중복 & 읽은 대상
수도 셉니다. 상태는 실행이 일찍 멈춘 원인을 모두 알려 줍니다. `stopCauses`는
원인마다 `message`, `retryable` & `nextAction`을 따로 담아 나열합니다. 원인은
`target_not_found`, `target_suspended`, `target_protected`, `target_failed` &
`deadline_reached`입니다. `target_suspended`는 X가 정지한 계정을 알려 줍니다.
찾을 수 없거나 정지된 계정은 다른 원인으로 실행이 멈췄을 때만 목록에 들어갑니다.
원인 중 하나라도 재시도할 수 있으면 실행도 `retryable`입니다.

X는 비공개 계정의 목록을 공개하지 않습니다. 그런 대상은 무료 진단 1개에
`target_protected`로 기록되고, 실행은 나머지 대상을 읽습니다.

`failedTargets`는 오류로 멈춘 대상을 셉니다. 이런 실행은
`completionReason: "partial_failure"`를 씁니다. 이미 전달된 프로필은 과금 대상
데이터 행으로 남습니다.

Apify 기본 제한 시간은 `0`이므로 실행에 시간 제한이 없습니다. 실행은 상한에
이르거나 프로필이 떨어질 때까지 계속됩니다. 그래도 제한 시간을 따로 정할 수
있습니다. 그러면 `completionReason: "deadline_reached"`는 그 제한이 가까워졌다는
뜻입니다. 실행은 프로필 & 보고서를 저장한 뒤 제한 시간 전에 정상 종료합니다.
전달된 프로필은 한 번만 과금됩니다.

문제가 생긴 실행은 입력이 없거나 잘못되어 종료된 경우를 포함해 항상
`run-report`를 기록합니다. `run-report`에는 게시된 Actor 소스의 정확한 버전을
담은 `version` 필드도 있습니다.

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
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper)는 게시물
  URL이나 ID로 답글, 인용, 재게시한 사람 & 스레드를 대량으로 스크랩합니다. 누가
  게시물에 반응했는지 측정할 때 사용하세요. 행당 $0.00015부터입니다.
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper)는
  게시물을 인용한 게시물을 텍스트, 미디어, 수치, 작성자 & 11개의 필터와 함께
  스크랩합니다. 게시물을 인용한 사람 & 그들이 한 말을 살펴볼 때 사용하세요.
  게시물당 $0.00015부터입니다.
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

### X API 키가 필요한가요?

아니요. X API 키, 로그인, 자격 증명이 모두 필요 없습니다.

### 실행을 제한하는 요소는 무엇인가요?

항목 한도 & Apify 지출 한도에 이르면 실행이 멈춥니다. Apify 계정 & 플랫폼 한도도
그대로 적용됩니다.

### 얼마나 빠른가요?

Xquik의 X Follower Scraper의 속도는 대상 규모, 필터 & X 가용성에 따라
달라집니다. [벤치마크](#벤치마크) 실행 2개는 초당 유용한 프로필 77.9개 &
100.0개에 이르렀습니다.

### 실행 결과가 한도보다 적은 이유는 무엇인가요?

`minFollowers`, `verifiedOnly` & `bioContains` 같은 필터는 기록 전에 적용됩니다.
결과를 더 받으려면 필터를 완화하세요. 필터를 쓴 실행은 `maxScan`을 설정하지
않으면 목록 1개당 프로필 100,000개를 확인한 뒤 멈춥니다. Xquik의 X Follower
Scraper는 대상 사이의 중복도 제거합니다.

### 계정 1개에서 팔로워를 몇 명까지 스크랩할 수 있나요?

X가 그 계정에 보여 주는 만큼 가능합니다. 실행은 상한이나 지출 한도에 이르거나
목록이 끝날 때까지 계속됩니다. `maxItemsPerTarget`은 대상별 상한일 뿐입니다.
필터를 쓴 실행은 `maxScan`을 설정하지 않으면 목록 1개당 프로필 100,000개를
확인한 뒤 멈춥니다.

### 일시적인 오류가 나면 Actor가 다시 시도하나요?

네. X의 일시적인 오류에서 스스로 복구합니다. 복구할 수 없는 오류가 나도 실행은
일부 결과를 남깁니다.

### Apify 실행 제한 시간에 가까워지면 어떻게 되나요?

Xquik의 X Follower Scraper는 더 짧은 자체 마감 시간을 두지 않습니다. 설정한 제한
시간 전에 프로필을 저장하고, 보고서를 기록한 뒤 종료합니다. 데이터셋에 들어가지
않은 행에는 비용이 없습니다.

### 중단한 지점부터 이어서 할 수 있나요?

아직은 안 됩니다. 같은 대상으로 새로 실행하면 처음부터 시작합니다.

### Apify API로 실행할 수 있나요?

네. Python, JavaScript & cURL 예시는
[API 탭](https://apify.com/xquik/x-follower-scraper/api)을 보세요.

### 정기 스크랩을 예약할 수 있나요?

네. Apify에 내장된 [스케줄링](https://docs.apify.com/platform/schedules)으로 이
Actor를 cron 일정에 맞춰 실행하세요. 보관한 데이터셋을 비교하면 팔로워 변화를
찾을 수 있습니다.

### X 데이터를 스크랩해도 합법인가요?

Xquik의 X Follower Scraper는 공개 X 프로필 필드를 요청합니다. 결과에는 본인이
입력한 위치를 포함한 개인정보가 들어 있을 수 있습니다. 적법한 목적인지 확인하고
적용되는 개인정보 보호 규정을 따르세요. 확실하지 않으면 자격을 갖춘 법률
전문가에게 문의하세요.

### 도움은 어디서 받을 수 있나요?

실행 ID와 함께
[Issues 탭](https://apify.com/xquik/x-follower-scraper/issues)에서 이슈를
여세요.

### API 문서는 어디에 있나요?

[API 탭](https://apify.com/xquik/x-follower-scraper/api)에 이 Actor용 Python,
JavaScript & cURL 예시가 있습니다. Xquik 웹사이트는
[Apify 프로필](https://apify.com/xquik)에서 찾을 수 있습니다.
