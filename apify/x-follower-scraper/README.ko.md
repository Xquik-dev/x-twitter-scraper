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
스크레이퍼 서비스입니다. X Follower Scraper는 팔로워, 팔로잉, 리스트 멤버,
구독자 & 커뮤니티 멤버를 수집합니다. 다른 모든 Apify Actor는 필터링이나 중복
제거 전에 요금을 부과합니다. Xquik은 전달되고, 고유하며, 필터에 맞는 결과에만
요금을 부과합니다.

**모든 Apify 요금제에서 전달된 프로필당 $0.00015부터** X(Twitter) 팔로워,
팔로잉, 인증된 팔로워, 리스트 멤버, 리스트 구독자, 커뮤니티 멤버를 스크랩하세요.
Apify는 플랫폼 사용량을 별도로 청구합니다. X 로그인, 시작 요금, 쿼리 요금이
없습니다.

>

## 추출 미완료

추출이 중단되면 무료 `partial` 진단이 기록됩니다. 사용 가능한 결과는 그대로
유지됩니다. 재시도하기 전에 `availableResults`, `failedTargets`, `retryable`,
`nextAction`을 확인하세요. Actor가 성공적으로 종료되었다는 것은 전달이 확인됐다는
뜻이지, 추출이 완료됐다는 뜻은 아닙니다.

Xquik은 독립적인 제3자 서비스입니다. X Corp와 제휴 관계가 없습니다.

> "Twitter"와 "X"는 X Corp의 상표입니다.

## X Follower Scraper는 무엇을 하나요?

X Follower Scraper는 팔로워, 팔로잉, 리스트, 커뮤니티에 대해 사용 가능한 공개
프로필 데이터를 반환합니다. 각 행에는 원본 대상과 관계가 포함됩니다.

### 기본 동작

- 필터 & 중복 제거는 과금 전에 실행됩니다.
- 한 번의 실행에서 핸들, 숫자 ID, URL, 짧은 경로를 받아들입니다.
- 병합 모드는 공유된 프로필, 소스, 관계, `overlapCount`를 기록합니다.
- 자동 커서는 페이지당 최대 300개의 프로필을 요청합니다.
- 이전 커서는 200개 프로필 제한을 유지하며 만료되면 다시 시작합니다.
- 페이지 로그에는 대상을 반복하지 않으면서 `fetchDurationMs`,
  `processingDurationMs`, `pushDurationMs`, `statusDurationMs`,
  `fullPageDurationMs`가 포함됩니다.
- 체크포인트는 재시작 후에도 승인된 행, 타이밍, 실패 횟수를 보존합니다.

## 태스크 예시

50개의 공개 태스크 중에서 선택하세요. 각 태스크에는 제한된 입력과 그에 맞는
데이터셋 뷰가 있습니다. 모든 태스크는 실제 오디언스나 필터로 시작합니다. 실행하기
전에 편집하세요.

- [Discover AI builders in OpenAI followers](https://apify.com/xquik/x-follower-scraper/examples/discover-ai-builders-in-openai-followers)
- [Build an X audience dataset for AI agents](https://apify.com/xquik/x-follower-scraper/examples/build-agent-ready-x-audience-dataset)
- [Collect X audience data for RAG](https://apify.com/xquik/x-follower-scraper/examples/collect-x-audience-data-for-rag)
- [Find AI SEO practitioners on X](https://apify.com/xquik/x-follower-scraper/examples/find-ai-seo-practitioners-on-x)
- [Compare AI brand follower overlap](https://apify.com/xquik/x-follower-scraper/examples/compare-ai-brand-follower-overlap)
- [Export Twitter followers to CSV](https://apify.com/xquik/x-follower-scraper/examples/export-twitter-followers-to-csv)
- [Analyze competitor follower overlap](https://apify.com/xquik/x-follower-scraper/examples/analyze-competitor-follower-overlap)
- [Find micro-influencers in X followers](https://apify.com/xquik/x-follower-scraper/examples/find-micro-influencers-in-followers)
- [Export curated Twitter list members](https://apify.com/xquik/x-follower-scraper/examples/export-curated-twitter-list-members)
- [Analyze public X Community members](https://apify.com/xquik/x-follower-scraper/examples/analyze-public-x-community-members)
- [Collect Community members for AI agents](https://apify.com/xquik/x-follower-scraper/examples/collect-community-members-for-ai-agents)
- [Create repeatable X follower snapshots](https://apify.com/xquik/x-follower-scraper/examples/create-repeatable-follower-snapshots)

### X Follower Scraper는 어떤 데이터를 추출할 수 있나요?

| 필드              | 설명                                                     |
| ----------------- | -------------------------------------------------------- |
| `id`              | 숫자로 된 X 사용자 ID                                    |
| `username`        | 핸들(`@` 제외)                                           |
| `name`            | 표시 이름                                                |
| `description`     | 자기소개 텍스트                                          |
| `followers`       | 팔로워 수                                                |
| `following`       | 팔로잉 수                                                |
| `statusesCount`   | 게시한 트윗 총 개수                                      |
| `mediaCount`      | 업로드한 미디어 총 개수                                  |
| `favouritesCount` | 누른 좋아요 총 개수                                      |
| `verified`        | 공개 Blue 또는 레거시 인증 플래그를 합친 값              |
| `verifiedType`    | `blue`, `business`, `government`, `none` 중 하나         |
| `location`        | 자기 신고 위치                                           |
| `url`             | 프로필의 웹사이트 URL                                    |
| `profilePicture`  | 아바타 URL(전체 크기)                                    |
| `coverPicture`    | 배너 URL                                                 |
| `createdAt`       | X가 제공하는 계정 생성 타임스탬프 문자열                 |
| `sourceTarget`    | 이 프로필을 스크랩한 대상 핸들 / ID                      |
| `sourceRelation`  | 관계: `followers`, `following`, `list_members`, ...      |
| `sourceUrl`       | 이 프로필을 발견한 정확한 URL                            |
| `sourceTargets`   | 병합 모드에서 이 프로필과 일치한 모든 대상               |
| `sourceRelations` | 병합 모드에서 이 프로필과 일치한 모든 관계               |
| `sourceUrls`      | 병합 모드에서 이 프로필과 일치한 모든 소스 URL           |
| `overlapCount`    | 병합 모드에서 일치하는 관계-대상 쌍의 수                 |
| `resultType`      | 전체 & 원본 출력 모드에서의 행 유형                      |
| `raw`             | Actor 고유 서식 적용 전의 안전한 원본 프로필             |

행은 공개 프로필 계약을 따릅니다. 여기에는 신원, 개수, 인증, 사용 가능 여부,
제휴, 전문 데이터, 자기소개가 포함됩니다. 소스 귀속, 엔터티, 고정 트윗 ID도 계속
사용할 수 있습니다. 정확한 필드는 OpenAPI를 참고하세요.

`outputMode: "raw"` 또는 `includeRaw: true`를 설정하면 안전한 원본 프로필의
`raw` 사본이 포함됩니다. 압축 모드가 기본값으로 유지됩니다.

`verifiedOnly`는 공개 Blue와 레거시 인증 프로필을 모두 받아들입니다. 상충하는
소스 플래그가 있어도 거짓 값이 참인 인증 상태를 숨기지는 않습니다.

뷰어 상대적 상태는 여러분의 데이터셋이 아니라 Xquik의 조회 계정에 속합니다.
팔로우, 차단, 뮤트, DM, 알림 등 뷰어 관련 플래그는 원본 출력에서도 항상
제거됩니다.

## X 팔로워를 스크랩하는 데 비용이 얼마나 드나요?

모든 Apify 요금제는 전달된 프로필당 `$0.00015`입니다. Apify는 플랫폼 사용량을
별도로 청구합니다. Xquik은 전달된 데이터 행당 1회 과금합니다. 진단 정보는
`diagnostics` 출력에서 무료입니다. 별도의 Xquik 구독은 적용되지 않습니다. 시작
요금도 없습니다. 각 실행은 Apify가 Actor에 노출하는 실시간 이벤트당 요금으로
계산된 `estimatedChargeUsd`가 담긴 `run-report` 레코드를 작성합니다. 입력이
없거나 잘못된 입력으로 종료된 경우를 포함해 모든 결과가 `run-report`를
작성합니다. `version` 필드는 게시된 정확한 Actor 소스 버전을 보고합니다.

`failedTargets`는 읽기 실패 후 중단된 대상 수를 집계합니다. 승인된 프로필은
과금 가능한 데이터 행으로 유지됩니다. 이런 실행은
`completionReason: "partial_failure"`를 사용합니다. 빠른 서버 사이드
페이지네이션도 동일한 보고 계약을 따릅니다.

기본 Apify 시간 제한은 `0`입니다. 실행에는 시간 제한이 없습니다. Actor는 상한이나
소스가 끝날 때까지 모든 실시간 커서를 따릅니다. 호출자는 여전히 유한한 시간
제한을 설정할 수 있습니다. 그러면 `completionReason: "deadline_reached"`는 해당
제한이 임박했음을 의미합니다. Actor는 체크포인트, 행, 보고서, 정상 종료를 위해
마지막 15초를 남겨둡니다. 유효한 프로필은 계속 전달되며 한 번만 과금됩니다.
마치지 못한 페이지네이션은 재개할 수 있습니다.

독립적인 대상은 동시에 실행됩니다. 각 대상은 순서가 유지된 커서 페이지네이션을
유지합니다. 데이터셋 쓰기는 상한, 중복 제거, 귀속, 과금을 원자적으로 유지합니다.

- 시작, 대상, 관계 선택에는 별도의 쿼리 요금이 추가되지 않습니다.
- 필터(`minFollowers`, `verifiedOnly`, `bioContains`, `locationContains`,
  `minFollowing`, `maxFollowing`, `minStatuses`, `maxStatuses`,
  `minAccountAgeDays`, `verifiedType`, `usernameContains`, `hasWebsite`,
  `hasLocation`)는 프로필이 데이터셋에 들어가기 전에 실행됩니다.
- `dedupeAcrossTargets: true`이면 중복은 쓰기 전에 제거됩니다.
- 데이터셋에서 거부된 행은 과금되지 않습니다.
- 입력이 없거나, 입력이 잘못됐거나, 출력이 0인 실행은 무료 `diagnostics`
  출력에 실행 가능한 레코드 1건을 작성합니다.

지출을 강제로 제한하려면 Apify API에서 `maxTotalChargeUsd`를 설정하거나
Console에서 실행당 최대 비용을 설정하세요. Apify는 이 제한을 Actor에
`ACTOR_MAX_TOTAL_CHARGE_USD`로 노출하며, Actor는 이를 초과하는 행을 받아들이기
전에 멈춥니다. 예산 상한이 허용하는 만큼 많은 프로필을 반환하려면 `maxItems`를
비워두세요. 예산보다 작은 결과 상한을 원할 때만 `maxItems`를 설정하세요.

## X Follower Scraper로 팔로워 데이터를 스크랩하는 방법

### 1. 프로필이나 리스트 URL 붙여넣기

프로필, 리스트, 커뮤니티 URL을 붙여넣으세요. 스크레이퍼는 각 URL을 해당 관계로
라우팅합니다.

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

### 2. 대량 핸들

`/<handle>/followers` 형태의 많은 대상을 위한 축약형입니다. 사용자 이름은
`@`가 있든 없든 받아들여집니다.

```json
{
  "twitterHandles": ["elonmusk", "nasa", "openai"],
  "relation": "followers",
  "maxItems": 1000
}
```

`relation`을 `followers`, `following`, `verified_followers`로 설정하면 각
핸들에 대해 스크랩할 대상이 바뀝니다.

동일한 입력에 대해 허용되는 별칭에는 `username`, `usernames`,
`user_names`가 있습니다.

### 3. 다중 관계 실행

```json
{
  "usernames": ["nasa"],
  "relations": ["followers", "following"],
  "maxItems": 1000
}
```

`getFollowers`, `getFollowing`, `getVerifiedFollowers`, `getListMembers`,
`getListFollowers`, `getCommunityMembers`와 같은 불리언 값도 사용할 수
있습니다.

### 4. 숫자 사용자, 리스트, 커뮤니티 ID로 스크랩하기

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

숫자 사용자 ID에 허용되는 별칭에는 `twitterUserIds`와 `user_ids`가 있습니다.

`relation`은 숫자 사용자 ID에 적용됩니다. 리스트 ID는 기본적으로 멤버를
사용합니다. 커뮤니티 ID는 항상 멤버를 사용합니다. `maxItemsPerTarget`은 첫 번째
대규모 대상이 전체 상한을 모두 소비하지 못하게 막습니다.

### 5. 지불 전에 필터링하기

일치하는 프로필만 데이터셋에 들어가도록 필터를 적용하세요.

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

Actor는 기록하는 것보다 더 많은 프로필을 검사할 수 있습니다. 모든 필터를
통과해 데이터셋에 들어간 행에 대해서만 비용을 지불합니다.

`bioContains`의 대안 값들은 쉼표나 줄바꿈으로 구분하세요. 자기소개에 제공된
용어 중 하나라도 포함되면 프로필이 통과합니다. 일치는 대소문자를 구분하지
않습니다.

### 6. 오디언스 중복 찾기

경쟁사, 리스트, 커뮤니티, 관계 유형을 비교하려면 병합 모드를 사용하세요.

```json
{
  "twitterHandles": ["openai", "anthropicai", "GoogleDeepMind"],
  "relation": "followers",
  "dedupeMode": "merge",
  "maxItemsPerTarget": 5000,
  "maxItems": 15000
}
```

출력에는 고유 프로필당 하나의 행이 포함됩니다. 공유된 프로필에는
`sourceTargets`, `sourceRelations`, `sourceUrls`, `sourceTargetKeys`,
`overlapCount`가 포함되어 있어 중복 기준으로 정렬하거나 바로 CSV로 내보낼 수
있습니다. 모든 대상이 행을 기여할 수 있도록 `maxItems`를 충분히 높게 유지하고,
계정별 깊이를 조절하려면 `maxItemsPerTarget`을 사용하세요.

### 허용되는 URL 형태

| URL                                         | 관계                                     |
| -------------------------------------------- | ---------------------------------------- |
| `https://x.com/<handle>/followers`          | `followers`                              |
| `https://x.com/<handle>/verified_followers` | `verified_followers`                     |
| `https://x.com/<handle>/following`          | `following`                              |
| `https://x.com/<handle>`                    | 기본 `relation`(설정되지 않으면 followers) |
| `https://x.com/i/lists/<id>/members`        | `list_members`                           |
| `https://x.com/i/lists/<id>/followers`      | `list_followers`                         |
| `https://x.com/i/lists/<id>`                | `list_members`                           |
| `https://x.com/i/communities/<id>/members`  | `community_members`                      |
| `https://x.com/i/communities/<id>`          | `community_members`                      |
| `<handle>/followers`                        | `followers`                              |
| `<handle>/following`                        | `following`                              |
| `<handle>/verified_followers`               | `verified_followers`                     |
| `lists/<id>/members`                        | `list_members`                           |
| `lists/<id>/followers`                      | `list_followers`                         |
| `communities/<id>/members`                  | `community_members`                      |

`twitter.com`과 `mobile.twitter.com`도 어디서나 받아들여집니다.

## 입력

전체 옵션 목록은 **Input** 탭을 확인하세요. `startUrls`, `twitterHandles`,
`userIds`, `listIds`, `communityIds` 또는 그 문서화된 별칭 중 최소 1개를
제외하고 모든 필드는 선택 사항입니다.

예시:

- `twitterHandles`에 경쟁사 핸들을 추가하고 `relation: "followers"`를
  설정하세요.
- 인증된 프로필을 위해 `https://x.com/<handle>/verified_followers`를 Start
  URLs에 붙여넣으세요.
- 리스트 URL을 Start URLs에 붙여넣어 멤버를 감사하세요.
- 핸들을 2개 이상 추가하세요. 처음 일치하는 프로필 행만 유지하려면
  `dedupeMode: "first"`를 설정하고, 일치하는 모든 소스 대상이 담긴 행 하나만
  유지하려면 `dedupeMode: "merge"`를 사용하세요.

### Console & API 입력 UX

Console은 다음 컨트롤을 제공합니다.

- Start URLs 필드는 URL 문자열이나 `{ "url": "..." }` 객체를 받아들입니다.
  JSON 편집기는 두 API 형식을 모두 보존합니다.
- Relation, Output Mode, Dedupe Mode는 검증된 선택 항목입니다.
- Relations는 다중 관계 실행을 위한 검증된 다중 선택 항목입니다.
- 결과 제한은 1 이상의 정수를 받아들입니다.
- 숫자로 된 프로필 필터는 0 이상의 정수를 받아들입니다.

새 통합에는 표준 필드를 사용하세요. 호환성 별칭은 JSON, API, SDK, 자동화,
저장된 태스크 입력에서 계속 사용할 수 있습니다. 여기에는 Output Mode 별칭인
`outputVariant`와 `includeRaw`도 포함됩니다. Dedupe Mode 별칭인
`dedupeAcrossTargets`도 포함됩니다. 시각적 폼은 표준 컨트롤과 중복되는 별칭을
숨깁니다. 기존 JSON과 저장된 태스크 입력은 현재 동작을 유지합니다.

### 항상 최신 빌드를 사용하세요

Store 실행은 Actor의 `latest` 빌드 구성을 사용합니다. API 클라이언트는 빌드
재정의를 생략하거나 `build=latest`를 전달해야 합니다. 이전 빌드를 고정한
태스크와 통합은 업데이트하세요. 고정된 빌드는 자동으로 이동하지 않습니다.

## 출력

각 프로필은 하나의 JSON 객체입니다. 압축 모드는 정규화된 공개 필드, 스키마
버전 필드, 사용 가능한 소스 메타데이터를 반환합니다.

데이터셋과 실행 보고서 스키마는 반환되는 모든 필드를 설명합니다. 기본 필드에는
에이전트와 생성된 통합을 위한 예시도 포함됩니다.

샘플 값은 예시용입니다. 응답은 실행 시점의 소스 데이터를 반영합니다.

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
  "profilePicture": "https://...",
  "coverPicture": "https://...",
  "createdAt": "Tue Jun 02 20:12:29 +0000 2009",
  "sourceTarget": "nasa",
  "sourceRelation": "followers",
  "sourceUrl": "https://x.com/nasa/followers"
}
```

병합 중복 제거 모드는 중복 필드를 추가합니다.

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

Apify 데이터셋에서 JSON, CSV, Excel, HTML로 내보낼 수 있습니다.

## 실행 옵션

- Apify 최대 총 비용을 설정해 실행 비용을 제한하세요. 해당 예산 안에서 최대
  행수를 원한다면 `maxItems`를 비워두고, 프로필 수를 줄이고 싶다면 `maxItems`와
  `maxItemsPerTarget`을 설정하세요.
- `minFollowers`, `verifiedOnly`, `verifiedType`, `minStatuses`,
  `usernameContains`, `bioContains`, `locationContains`, `hasWebsite`,
  `hasLocation`을 조합해 과금되는 데이터셋을 좁히세요.
- 여러 경쟁사 핸들을 스크랩하며 전체 대상에서 고유한 프로필만 얻으려면
  `dedupeMode: "first"`를 설정하세요.
- 일치하는 모든 소스 대상이 첨부된 프로필당 하나의 행을 얻으려면
  `dedupeMode: "merge"`를 설정하세요.
- 고정 트윗 ID, 엔터티, 프로필 메타데이터 등 선택적 프로필 필드를 사용
  가능하면 얻으려면 `outputMode: "full"`을 설정하세요.
- 정규화된 필드와 함께 위생 처리된 `raw` 객체를 포함하려면
  `outputMode: "raw"` 또는 `includeRaw: true`를 설정하세요.
- 반복되는 Actor 실행을 예약하고 각 데이터셋을 저장해 프로필 ID를
  비교하세요. Xquik 모니터는 팔로워 목록 변경이 아니라 지원되는 트윗 &
  프로필 이벤트를 내보냅니다.

## 사용 사례

- 리드 리서치를 위해 경쟁사 팔로워를 내보내세요.
- 내 계정, 경쟁사, 공인의 오디언스를 비교하세요.
- 팔로워 수와 인증 여부를 필터링해 일치하는 프로필을 찾으세요.
- 관련 X 커뮤니티의 멤버를 내보내세요.
- 리서치용 공개 소셜 네트워크 데이터셋을 만드세요.
- 자기소개 키워드, 위치, 프로필 유형별로 팔로워 기반을 세분화하세요.

## 데이터 책임

Actor는 공개 X 프로필 필드를 요청합니다. 결과에는 자기 신고 위치를 포함한 개인
데이터가 포함될 수 있습니다. 합법적인 목적을 확인하고 적용되는 개인정보
보호 규칙을 따르세요. 확실하지 않다면 자격을 갖춘 법률 자문에게 문의하세요.

## 관련 Xquik Actor

모든 Xquik Actor는 동일한 추출 엔진, 필터 우선 과금 & 진단 기능을 공유합니다.
필요한 데이터에 맞는 Actor를 선택하세요.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): 검색, 프로필
  타임라인, 리스트 & 트윗 ID에서 50개 이상의 필터와 플랫 내보내기로 트윗을
  스크랩합니다. 분석 없이 트윗 데이터만 필요할 때 사용하세요. 행당 $0.00015부터.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): 핸들, ID
  또는 URL에서 프로필과 게시물, 답글, 미디어 & 좋아요를 스크랩합니다. 검색이
  아니라 계정에서 시작할 때 사용하세요. 행당 $0.00015부터.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): 게시물 아래의
  답글, 댓글 & 전체 대화를 25개 이상의 필터로 스크랩합니다. 트윗 아래의 토론이
  필요할 때 사용하세요. 행당 $0.00015부터.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): 게시물
  URL이나 ID에 대한 답글, 인용, 리트윗한 사람, 좋아요를 누른 사람 & 스레드를
  대량으로 스크랩합니다. 게시물에 참여한 사람을 측정할 때 사용하세요. 행당
  $0.00015부터.
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
- [X (Twitter) Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  AI로 모든 트윗에 대해 자신만의 카테고리, 점수 & 예/아니오 질문에 답합니다.
  미리 준비된 분석이 라벨에 맞지 않을 때 사용하세요. 분석된 트윗당
  $0.0003부터.

## 스크래핑보다 더 필요하신가요?

Xquik은 47개의 대시보드 도구, 129개의 REST 작업, 서명된 웹훅, MCP 서버도
제공합니다.

- [API documentation](https://docs.xquik.com/introduction): REST API 가이드
- [Followers API](https://docs.xquik.com/api-reference/x/followers): 계정에서
  사용 가능한 팔로워를 가져옵니다
- [Following API](https://docs.xquik.com/api-reference/x/following): 사용자가
  팔로우하는 대상을 가져옵니다
- [List Members API](https://docs.xquik.com/api-reference/x/list-members):
  공개 X 리스트에서 멤버를 내보냅니다
- [MCP server](https://docs.xquik.com/mcp/overview): 지원되는 JSON이나 텍스트
  작업을 검색하고 실행합니다
- [Webhooks](https://docs.xquik.com/webhooks/overview): 지원되는 트윗 & 프로필
  이벤트를 수신합니다

## FAQ

**X API 키가 필요한가요?** 아니요. 이 스크레이퍼는 자체 인프라를 사용합니다.
로그인이나 자격 증명이 필요하지 않습니다.

**실행 제한 요소는 무엇인가요?** 요청한 항목 제한과 Apify 지출 한도가 실행을
멈춥니다. Apify 계정 및 플랫폼 제한도 계속 적용됩니다.

**속도는 얼마나 빠른가요?** 실행 시간은 대상 크기, 필터, 업스트림 가용성에
따라 달라집니다. 깊이 있는 필터링 실행은 5페이지마다 Console 진행 상황을
체크포인트합니다. 이는 페이지 조회 사이의 비데이터 트래픽을 줄여줍니다.

**왜 내 실행이 `maxItems`보다 적은 행을 반환하나요?** `minFollowers`,
`verifiedOnly`, `bioContains` 같은 필터는 쓰기 전에 적용됩니다. 더 많은 결과를
얻으려면 필터를 완화하세요.

**하나의 계정에서 얼마나 많은 팔로워를 스크랩할 수 있나요?** X는 대규모 계정을
배치로 페이지네이션합니다. 더 많은 페이지를 가져오려면 Apify의 실행 시간
제한을 늘리세요. `maxItemsPerTarget`은 각 대상만 제한합니다.

**Actor가 일시적인 실패를 재시도하나요?** 예. 타임아웃, 429, 5xx 응답에 대해
페이지당 최대 3회 시도합니다. `Retry-After`가 있으면 이를 따릅니다. 그렇지
않으면 지수 백오프를 사용합니다. 심각한 실패에서도 부분 결과는 보존됩니다.

**Apify 실행 시간 제한 근처에서는 어떻게 되나요?** Actor는 더 짧은 실행
기한을 추가하지 않습니다. Apify가 설정한 제한을 사용하며 마지막 15초를
마무리 작업에 남겨둡니다. 프로필을 플러시하고, 페이지네이션을 체크포인트하고,
보고서를 작성한 뒤 종료합니다. 데이터셋에 승인되지 않은 행은 과금되지
않습니다.

**중단한 곳에서 다시 시작할 수 있나요?** 재개 커서 입력은 아직 노출되지
않았습니다. 동일한 대상을 다시 실행하면 첫 번째로 사용 가능한 페이지부터
시작합니다.

**Apify API로 이 Actor를 실행할 수 있나요?** 예. Python, JavaScript, cURL
예시는 [API tab](https://apify.com/xquik/x-follower-scraper/api)을
참고하세요.

**반복 스크랩을 예약할 수 있나요?** 예. Apify의 내장
[스케줄링](https://docs.apify.com/platform/schedules)을 사용해 이 Actor를
cron으로 실행하세요. 저장된 데이터셋을 비교해 팔로워 변화를 찾으세요.

**문제는 어디에 보고하나요?** 이 Actor 페이지의 Issues 탭을 사용하세요.

**API 문서는 어디에 있나요?**
[API documentation](https://docs.xquik.com/introduction)을 읽어보세요.
