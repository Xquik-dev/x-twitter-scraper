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
완전한 X 데이터를 제공합니다. Xquik의 X Community Scraper는 커뮤니티 정보,
게시물, 미디어, 검색 결과, 멤버 & 모더레이터를 수집하고 키워드나 주제로
커뮤니티를 찾습니다. 다른 Apify Actor는 대부분 필터링이나 중복 제거 전에 요금을
부과합니다. Xquik은 필터에 맞고 중복되지 않은 결과를 전달했을 때만 요금을
받습니다.

커뮤니티 URL이나 ID로 Twitter 커뮤니티 정보, 게시물, 미디어, 키워드 검색 결과,
멤버 & 모더레이터를 수집하세요. 키워드나 주제로 커뮤니티를 찾거나 X가 추천하는
커뮤니티를 나열하세요. 요금은 **전달된 행 1개당 $0.00015**이며, Apify 플랫폼
사용료는 Apify가 따로 청구합니다. X API 키나 로그인은 필요 없습니다.

> Xquik은 독립적인 제3자 서비스입니다. X Corp와 제휴 관계가 없습니다.
> "Twitter"와 "X"는 X Corp의 상표입니다.

## X Community Scraper는 무엇을 하나요?

Xquik의 X Community Scraper는 URL이나 ID로 공개 X(Twitter) 커뮤니티를 읽습니다.
커뮤니티마다 정보, 게시물, 미디어, 키워드 검색 결과, 멤버 & 모더레이터를
반환합니다. 키워드나 주제로 커뮤니티를 찾고, X가 추천하는 커뮤니티도 나열합니다.

### 주요 기능

- 실행 1번으로 여러 커뮤니티 & 리소스를 읽습니다.
- 규칙, 가입 질문, 개설자, 관리자 & 주제가 담긴 커뮤니티 정보를 받습니다.
- 게시물을 최신순으로 받거나, X가 가장 높게 평가한 인기 게시물을 받습니다.
- 미디어 탭을 수집하거나 키워드로 커뮤니티 게시물을 검색합니다.
- 멤버 & 모더레이터를 내보내거나 이름으로 멤버를 찾습니다.
- 키워드나 주제로 커뮤니티를 찾고 전체 레코드를 받습니다.
- 날짜, 언어, 미디어 & 참여로 게시물을 필터링합니다.
- 오디언스 규모, 계정 연령 & 인증 여부로 멤버를 필터링합니다.
- 필터 & 중복 제거는 과금 전에 실행됩니다.
- Apify가 실행을 다시 시작해도 전달된 행 & 진행 상황은 유지됩니다.

### 활용 사례

- 틈새 커뮤니티의 멤버로 리드 목록을 만드세요.
- 사용자 커뮤니티에서 제품 피드백 & 기능 요청을 추적하세요.
- 창업자들 사이의 출시 소식, 채용 게시물 & 투자 뉴스를 찾으세요.
- 규모, 주제 & 활동량으로 커뮤니티를 비교하세요.
- 커뮤니티에 게시하기 전에 그 커뮤니티의 규칙을 읽어 보세요.
- 커뮤니티의 모더레이터 & 팔로워가 가장 많은 멤버를 찾으세요.
- 크리에이티브 리서치를 위해 이미지나 동영상이 있는 게시물을 수집하세요.

### X Community Scraper로 어떤 데이터를 추출할 수 있나요?

커뮤니티 행은 `resultType: "community"`를 사용합니다. 주요 필드는 다음과
같습니다.

| 필드              | 설명                                         |
| ----------------- | -------------------------------------------- |
| `id`              | 커뮤니티 ID                                  |
| `name`            | 커뮤니티 이름                                |
| `description`     | 커뮤니티 설명                                |
| `url`             | 커뮤니티 URL                                 |
| `member_count`    | 멤버 수                                      |
| `moderator_count` | 모더레이터 수                                |
| `rules`           | 커뮤니티 규칙                                |
| `question`        | 가입하는 사용자에게 커뮤니티가 묻는 질문     |
| `primary_topic`   | X가 커뮤니티를 분류한 주제                   |
| `searchTags`      | X가 커뮤니티를 찾을 때 쓰는 태그             |
| `creator`         | 개설자의 공개 프로필                         |
| `admin`           | 관리자의 공개 프로필                         |
| `membersFacepile` | X가 커뮤니티 페이지에서 미리 보여 주는 멤버  |
| `is_nsfw`         | 커뮤니티가 민감한 콘텐츠로 표시되었는지 여부 |
| `banner`          | 배너 URL, 크기 & 주요 색상                   |
| `sourceTarget`    | 입력한 URL, ID, 키워드 또는 주제             |

리소스마다 고유한 유형의 행이 추가됩니다.

| `resultType`         | 리소스 또는 입력         | 행 1개당                      |
| -------------------- | ------------------------ | ----------------------------- |
| `community`          | `info`, 키워드, 주제     | 커뮤니티                      |
| `communityTweet`     | `tweets`, `search`       | 게시물                        |
| `communityMedia`     | `media`                  | 사진이나 동영상이 있는 게시물 |
| `communityMember`    | `members`, `memberNames` | 멤버                          |
| `communityModerator` | `moderators`             | 모더레이터                    |
| `communityTopic`     | `listTopics`             | 주제                          |

게시물 행에는 `text`, `createdAt`, `likeCount`, `replyCount`, `retweetCount`,
`viewCount`, `media` & `author` 프로필이 들어 있습니다. 멤버 & 모더레이터
행에는 `username`, `followers`, `verified` & `communityRole` 같은 프로필 필드가
들어 있습니다.

## X Community Scraper로 커뮤니티 데이터를 스크랩하려면 어떻게 하나요?

Apify Console에서 다음 단계를 따르세요.

1. [태스크 예시](#태스크-예시)나 Input 탭을 여세요.
2. 커뮤니티 URL은 `startUrls`에, ID는 `communityIds`에 붙여넣으세요.
3. `resources`를 고르고 `sinceDate`나 `minLikes` 같은 필터를 추가하세요.
4. `maxItems`를 설정하고 Start를 클릭하세요.
5. 데이터셋을 JSON, CSV, Excel 또는 HTML로 내보내세요.

아래 레시피는 각각 그대로 쓸 수 있는 완전한 입력입니다.

### 커뮤니티 정보 & 최근 게시물 가져오기

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["info", "tweets"],
  "maxItems": 200
}
```

`startUrls`는 각 URL을 일반 문자열 또는 `{ "url": "..." }` 객체로 받습니다.

```json
{
  "startUrls": [
    "https://x.com/i/communities/1493446837214187523",
    { "url": "https://x.com/i/communities/1493446837214187523" }
  ]
}
```

### 인기 게시물 수집하기

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["tweets"],
  "postsOrder": "Top",
  "minLikes": 50,
  "maxItems": 100
}
```

X가 가장 높게 평가한 게시물을 받으려면 `postsOrder`를 `Top`으로 설정하세요.
미디어 탭을 받으려면 `resources`에 `"media"`를 추가하세요.

### 커뮤니티 게시물 검색하기

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["search"],
  "query": "pricing",
  "queryType": "Latest",
  "maxItems": 100
}
```

### 멤버 & 모더레이터 내보내기

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["members", "moderators"],
  "minFollowers": 1000,
  "maxItems": 1000
}
```

멤버 필터는 멤버 & 모더레이터 행에 적용됩니다. 필터에서 걸러진 행은 데이터셋에
들어가지 않으므로 요금이 부과되지 않습니다.

### 이름으로 멤버 찾기

```json
{
  "communityIds": ["1493446837214187523"],
  "memberNames": ["marckohlbrugge"],
  "maxItems": 100
}
```

x.com의 멤버 검색처럼 X는 이름마다 일치하는 계정을 최대 10개까지 확인합니다.
찾은 멤버는 각각 `communityRole`이 담긴 `communityMember` 행 1개가 됩니다.
`memberNames`를 사용하는 실행은 `resources`에 지정하지 않은 다른 리소스를 읽지
않습니다.

### 키워드나 주제로 커뮤니티 찾기

```json
{
  "searchTerms": ["artificial intelligence"],
  "topics": ["Technology"],
  "maxItems": 100
}
```

찾은 커뮤니티마다 규칙, 개설자, 관리자 & 멤버 프로필이 들어 있습니다. 짧은
레코드로 더 빠르게 실행하려면 `includeDetails`를 `false`로 설정하세요. X가
추천하는 커뮤니티를 받으려면 `includeSuggested`를 켜세요. 추천은 실행마다 다를
수 있습니다. 모든 주제 & 하위 주제를 받으려면 `listTopics`를 켜세요.

## 태스크 예시

공개 태스크 50개 중에서 고르세요. 각 태스크에는 범위가 정해진 입력 & 그에 맞는
데이터셋 뷰가 있습니다. 실행하기 전에 태스크를 원하는 대로 수정하세요.

- [X 커뮤니티 개요 가져오기](https://apify.com/xquik/x-community-scraper/examples/get-an-x-community-overview)
- [최근 게시물과 함께 X 커뮤니티 세부 정보 가져오기](https://apify.com/xquik/x-community-scraper/examples/get-community-details-with-recent-posts)
- [X 커뮤니티에서 기술 분야 인기 게시물 찾기](https://apify.com/xquik/x-community-scraper/examples/find-top-technology-posts-in-a-community)
- [X 커뮤니티 멤버 내보내기](https://apify.com/xquik/x-community-scraper/examples/export-x-community-members)
- [X 커뮤니티의 인증된 멤버 내보내기](https://apify.com/xquik/x-community-scraper/examples/export-verified-community-members)
- [X 커뮤니티의 모더레이터 나열하기](https://apify.com/xquik/x-community-scraper/examples/list-x-community-moderators)
- [규모 & 주제로 개발자 커뮤니티 비교하기](https://apify.com/xquik/x-community-scraper/examples/compare-developer-communities-by-size)
- [게시하기 전에 X 커뮤니티 규칙 읽기](https://apify.com/xquik/x-community-scraper/examples/read-community-rules-before-you-post)
- [스타트업 커뮤니티에서 투자 게시물 찾기](https://apify.com/xquik/x-community-scraper/examples/find-funding-posts-in-a-startup-community)
- [소프트웨어 엔지니어링 커뮤니티에서 채용 게시물 찾기](https://apify.com/xquik/x-community-scraper/examples/find-hiring-posts-in-a-software-community)
- [오디언스가 큰 스타트업 커뮤니티 멤버 찾기](https://apify.com/xquik/x-community-scraper/examples/find-startup-community-members-with-big-audiences)
- [작은 X 커뮤니티를 처음부터 끝까지 점검하기](https://apify.com/xquik/x-community-scraper/examples/audit-a-small-community-end-to-end)

## X 커뮤니티 스크랩 비용은 얼마인가요?

Xquik의 X Community Scraper는 모든 Apify 요금제에서 전달된 행 1개당
$0.00015입니다. Apify 플랫폼 사용료는 Apify가 따로 청구합니다. Xquik은 전달된
데이터 행 1개마다 한 번 과금합니다. 진단은 `diagnostics` 출력에서 무료로
제공합니다.

- Xquik 구독은 필요 없습니다.
- 시작, 커뮤니티, 리소스, 쿼리 요금을 따로 내지 않습니다.
- 찾은 커뮤니티는 전체 레코드가 있든 없든 행 1개 요금입니다.
- 필터 & 중복 제거는 과금 전에 실행됩니다. 걸러지거나 중복된 행에는 요금이
  부과되지 않습니다.
- Apify의 최대 총 요금 설정이 전달되는 행 수를 제한합니다.

문제가 생긴 실행이나 큰 실행은 `run-report` 레코드도 기록합니다. 문제없이 끝난
작은 실행은 이 레코드를 건너뛰어 Apify 사용량을 아낍니다. 모든 실행에서 보고서를
기록하려면 `alwaysSaveRunRecords`를 켜세요.

실행 1번에 쓸 수 있는 비용의 상한을 정하려면 [실행 옵션](#실행-옵션)을
참고하세요.

## 빈 결과, 일부만 끝난 실행 & 중단된 실행

Xquik의 X Community Scraper는 결과가 없거나, 일부만 나왔거나, 중단된 실행의
원인을 무료로 설명합니다. 실행 상태는 실행이 멈춘 이유를 알려 줍니다. 과금된
결과 & 읽은 대상의 수도 함께 알려 줍니다.

### 빈 결과

결과가 없는 실행은 상태 메시지에서 대상 & 필터를 확인하라고 안내합니다. 필터에서
걸러진 행은 결과 상한을 차지하지 않습니다. 모든 대상을 읽고도 행을 받지 못한
실행은 레코드를 기록하지 않습니다. 대신 상태 메시지에서 이유 & 바꿀 점을 알려
줍니다. 이 Actor는 X가 공개한 커뮤니티만 반환합니다. 제공되는 필드는 커뮤니티마다
다릅니다.

### 일부만 끝난 실행

추출이 중단되면 무료 `partial` 진단을 기록합니다. 전달된 행은 데이터셋에 그대로
남습니다. 다시 시도하기 전에 `availableResults`, `failedTargets`, `retryable` &
`nextAction`을 확인하세요. Actor가 성공으로 종료되면 전달이 끝났다는 뜻입니다.
추출이 모두 끝났다는 뜻은 아닙니다.

### 중단 원인

실행 상태는 실행이 일찍 멈춘 원인을 모두 알려 줍니다. `stopCauses`는 원인마다
`message`, `retryable` & `nextAction`을 따로 담아 나열합니다. 원인은
`target_not_found`, `target_failed`, `pagination_safety_limit` &
`deadline_reached`입니다. 찾을 수 없는 대상은 다른 원인으로 실행이 멈췄을 때만
목록에 들어갑니다. 원인 중 하나라도 재시도할 수 있으면 실행도 `retryable`입니다.
이 Actor는 자체 시간 제한을 두지 않습니다.

## 입력

Input 탭에 모든 옵션이 나와 있습니다. 커뮤니티 URL이나 ID, 키워드, 주제를
입력하거나 `includeSuggested` 또는 `listTopics`를 켜세요. 나머지 필드는 모두
선택 사항입니다.

| 필드                           | 기능                                                         |
| ------------------------------ | ------------------------------------------------------------ |
| `startUrls`                    | x.com의 커뮤니티 URL                                         |
| `communityIds`                 | 숫자로 된 커뮤니티 ID                                        |
| `resources`                    | `info`, `tweets`, `media`, `search`, `members`, `moderators` |
| `query`                        | `search` 리소스에 쓸 키워드                                  |
| `queryType`                    | 키워드 검색의 `Latest` 또는 `Top` 정렬                       |
| `postsOrder`                   | 게시물의 `Latest` 또는 `Top` 정렬                            |
| `memberNames`                  | 멤버 중에서 찾을 이름이나 사용자 아이디                      |
| `searchTerms`                  | 커뮤니티를 찾을 키워드                                       |
| `topics`                       | `Technology` 같은 주제 이름이나 ID                           |
| `includeSuggested`             | X가 가입을 추천하는 커뮤니티 추가                            |
| `listTopics`                   | 모든 커뮤니티 주제 & 하위 주제 추가                          |
| `includeDetails`               | 키워드나 주제로 찾은 커뮤니티에 전체 레코드 추가             |
| `maxItems`                     | 실행 전체에서 전달할 행 수의 상한                            |
| `maxItemsPerTarget`            | 커뮤니티 리소스마다 받을 행 수의 상한                        |
| `sinceDate`, `untilDate`       | 날짜 범위 안의 게시물만 유지                                 |
| `language`                     | 언어 코드 1개에 해당하는 게시물만 유지                       |
| `mediaType`                    | 미디어 유형으로 게시물 유지: 이미지, 동영상, GIF, 링크, 없음 |
| `minViews`, `minLikes`         | 조회수나 마음에 들어요 수가 기준 이상인 게시물만 유지        |
| `minReplies`, `minRetweets`    | 답글 수나 재게시 수가 기준 이상인 게시물만 유지              |
| `nativeRetweets`               | 네이티브 재게시만 유지                                       |
| `verifiedOnly`                 | 인증된 작성자, 멤버 또는 모더레이터만 유지                   |
| `minFollowers`, `maxFollowers` | 팔로워 수 범위 안의 멤버만 유지                              |
| `minAccountAgeDays`            | 계정 연령이 이 일수 이상인 멤버만 유지                       |
| `dedupeAcrossTargets`          | 과금 전에 여러 커뮤니티에서 중복된 행 제거                   |

### 다른 커뮤니티 Actor에서 옮겨오기

`ranking` & `sort`라는 이름은 `postsOrder`처럼 작동합니다. `Top`이나
`Relevance`는 상위 게시물을 읽습니다. 둘 중 하나 & `postsOrder`를 함께 설정하면
`postsOrder` 값을 씁니다. 실행 로그에 무시된 필드가 나옵니다.

### 알맞은 입력 고르기

- 빠르게 살펴보려면 기본 리소스인 `info` & `tweets`를 그대로 두세요.
- 리드 목록을 만들려면 `members`를 고르고 `minFollowers` & `verifiedOnly`를
  함께 쓰세요.
- 제품 리서치에는 `search`를 고르고 `bug`나 `pricing` 같은 `query`를 지정하세요.
- 크리에이티브 리서치에는 `media`를 고르고 `mediaType`을 설정하세요.
- 커뮤니티를 찾으려면 ID 없이 `searchTerms`나 `topics`를 보내세요.

## 출력

각 행은 JSON 객체입니다. 모든 행에는 입력한 커뮤니티, 키워드 또는 주제를
가리키는 `sourceTarget`이 들어 있습니다. Xquik의 X Community Scraper는 원본
필드를 그대로 두고 값을 지어내지 않습니다. 데이터셋 스키마에는 필드마다 제목 &
설명이 있습니다.

예시는 샘플 값입니다. 실제 결과는 실시간 데이터를 따릅니다. 커뮤니티 정보 행은
다음과 같습니다.

```json
{
  "resultType": "community",
  "sourceTarget": "1493446837214187523",
  "id": "1493446837214187523",
  "name": "Sample Community",
  "description": "A place to share what you build.",
  "member_count": 1200,
  "moderator_count": 4,
  "primary_topic": "Technology"
}
```

데이터셋을 JSON, CSV, Excel 또는 HTML로 내보내세요.

## 실행 옵션

- 실행 비용의 상한을 정하려면 Apify의 최대 총 요금을 설정하세요. 예산 안에서
  가장 많은 행을 받으려면 `maxItems`를 높게 두세요.
- Apify API에서는 `maxTotalChargeUsd`를, Console에서는 Max cost per run을
  설정하세요.
- 모든 커뮤니티를 실행 1번에 넣으세요. 실행마다 Apify에 같은 시작 비용을 냅니다.
- `maxItemsPerTarget`은 커뮤니티 리소스마다 행 수의 상한을 정합니다.
- `maxConcurrency`는 동시에 실행할 커뮤니티 리소스 수를 정합니다. 기본값이
  안전하면서 가장 빠른 설정입니다.

배포된 모든 수정 사항을 받으려면 모든 실행에서 `latest`를 선택하세요. 저장된
태스크 & 스케줄은 자체 빌드 선택을 유지하므로 `latest`로 두세요.

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
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): 게시물 아래의
  답글(댓글) & 대화 전체를 25개 이상의 필터로 스크랩합니다. 게시물 아래의 토론이
  필요할 때 사용하세요. 행당 $0.00015부터입니다.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): 게시물
  URL이나 ID로 답글, 인용, 재게시한 사람 & 스레드를 대량으로 스크랩합니다. 누가
  게시물에 반응했는지 측정할 때 사용하세요. 행당 $0.00015부터입니다.
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper):
  게시물을 인용한 게시물을 텍스트, 미디어, 수치, 작성자 & 11개의 필터와 함께
  스크랩합니다. 누가 게시물을 인용했고 무엇을 말했는지 살펴볼 때 사용하세요.
  게시물당 $0.00015부터입니다.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): 팔로워,
  팔로잉, 리스트 멤버, 구독자 & 커뮤니티 멤버를 프로필 행으로 스크랩합니다.
  오디언스나 멤버 목록이 필요할 때 사용하세요. 프로필당 $0.00015부터입니다.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper): 사용자
  아이디, 자기소개 & 위치로 사용자를 검색합니다. 팔로워, 인증, 계정 연령 & 위치
  필터를 지원합니다. 검색으로 계정 목록을 만들 때 사용하세요. 프로필당
  $0.00015부터입니다.
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper):
  X의 "Account based in"(계정 기반 위치) 라벨, X에 연결된 방식 & 사용자 아이디
  변경 내역으로 계정이 어디에 기반을 두고 있는지 확인합니다. 계정의 기반 위치를
  검증할 때 사용하세요. 계정당 $0.00015부터입니다.
- [X Email Scraper](https://apify.com/xquik/x-email-scraper): 사용자 아이디,
  팔로워 또는 사용자 검색에서 계정이 프로필에 공개한 이메일, 전화번호 & 링크를
  가져옵니다. 프로필이 공개한 이메일이 필요할 때 사용하세요. 프로필당
  $0.00015부터입니다.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): 리스트 URL이나 ID로
  리스트 게시물, 멤버 & 팔로워를 스크랩합니다. 직접 고른 리스트로 수집 대상을
  정할 때 사용하세요. 행당 $0.00015부터입니다.
- [X Space Scraper](https://apify.com/xquik/x-space-scraper): 키워드로
  스페이스를 찾고 제목, 상태, 시간, 청취자 수, 호스트 & 스피커를 읽습니다.
  URL이나 ID로 방송도 읽습니다. X의 라이브 오디오 & 동영상을 추적할 때
  사용하세요. 스페이스 또는 방송당 $0.00015부터입니다.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): 위치별 실시간
  트렌드를 순위, 볼륨, 쿼리 & WOEID와 함께 스크랩합니다. 어디에서 무엇이
  트렌드인지 추적할 때 사용하세요. 트렌드당 $0.00015부터입니다.
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper): 키워드, 지역, 근무
  형태, 직급 & 회사별로 X 채용 공고를 급여 & 지원 링크와 함께 스크랩합니다. X에
  올라온 채용 공고를 모을 때 사용하세요. 공고당 $0.00015부터입니다.
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

## 스크랩 외에 더 필요한 기능이 있나요?

Xquik은 대시보드 도구 53개, REST API, 서명된 웹훅 & MCP 서버도 제공합니다.

- [API 문서](https://docs.xquik.com/introduction): REST API 가이드
- [커뮤니티 정보 API](https://docs.xquik.com/api-reference/x/community-info):
  커뮤니티 1개의 레코드 가져오기
- [커뮤니티 게시물 API](https://docs.xquik.com/api-reference/x/community-tweets):
  커뮤니티 게시물 가져오기
- [커뮤니티 멤버 API](https://docs.xquik.com/api-reference/x/community-members):
  커뮤니티 멤버 내보내기
- [커뮤니티 찾기 API](https://docs.xquik.com/api-reference/x/community-find):
  키워드로 커뮤니티 찾기
- [MCP 서버](https://docs.xquik.com/mcp/overview): 지원 도구 확인하기
- [웹훅](https://docs.xquik.com/webhooks/overview): 서명된 이벤트 전달

## 자주 묻는 질문

자주 묻는 질문에 먼저 답하고, 이어서 도움받을 곳을 안내합니다.

### X API 키나 로그인이 필요한가요?

아니요. Xquik의 X Community Scraper는 X API 키, 로그인, 자격 증명이 모두 필요
없습니다.

### 커뮤니티 ID는 어떻게 찾나요?

x.com에서 커뮤니티를 여세요. URL에서 `/i/communities/` 뒤에 오는 숫자가
ID입니다. URL 전체를 `startUrls`에 붙여넣어도 됩니다.

### X 커뮤니티 멤버를 CSV나 Excel로 내보낼 수 있나요?

네. `members` 리소스를 고른 다음 데이터셋을 CSV, Excel, JSON 또는 HTML로
내보내세요.

### ID 없이 커뮤니티를 찾을 수 있나요?

네. 키워드는 `searchTerms`에, 주제는 `topics`에 넣어 보내세요. 찾은 커뮤니티는
각각 전체 레코드가 담긴 행 1개가 됩니다.

### 커뮤니티의 인기 게시물을 받을 수 있나요?

네. `postsOrder`를 `Top`으로 설정하세요. 가장 인기 있는 게시물만 남기려면
`minLikes`나 `minViews`를 추가하세요.

### 실행 1번에 커뮤니티를 몇 개까지 스크랩할 수 있나요?

입력한 만큼 스크랩할 수 있습니다. `maxItems` & Apify 지출 한도가 행 수의 상한을
정합니다.

### 비공개 커뮤니티도 읽나요?

아니요. Xquik의 X Community Scraper는 X가 공개한 커뮤니티만 반환합니다.

### X 커뮤니티를 스크랩해도 합법인가요?

Xquik의 X Community Scraper는 공개 X 필드를 요청합니다. 결과에는 개인정보가 들어
있을 수 있습니다. 적법한 목적인지 확인하고 관련 개인정보 보호 규정을 따르세요.
확실하지 않으면 자격을 갖춘 법률 전문가에게 문의하세요.

### 실행 결과가 비어 있는 이유는 무엇인가요?

먼저 실행 상태를 읽어 보세요. 결과가 없는 실행은 상태 메시지에서 대상 & 필터를
확인하라고 안내합니다. 확인이 필요한 문제가 있으면 무료 `diagnostics` 출력이
나타납니다. 그 안의 `stopCauses`는 원인마다 따라 할 `nextAction`을 알려 줍니다.
읽을 수 없는 입력이 있으면 실행이 하나씩 나열하고 해결 방법을 알려 줍니다.

### API, 스케줄 & 연동을 사용할 수 있나요?

네. 공개 태스크 50개나 Xquik REST API 중에서 고르세요.
[API 탭](https://apify.com/xquik/x-community-scraper/api)에 Python, JavaScript &
cURL 예시가 있습니다. Apify
[스케줄](https://docs.apify.com/platform/schedules)로 Xquik의 X Community
Scraper를 cron 일정에 맞춰 실행할 수 있습니다. 에이전트는
[Apify MCP](https://docs.apify.com/platform/integrations/mcp)를 사용합니다. 이전
빌드가 꼭 필요하지 않다면 `latest`를 사용하세요.

### 맞춤 솔루션을 받을 수 있나요?

네. [xquik.com](https://xquik.com)을 방문하거나
[API 문서](https://docs.xquik.com/introduction)를 읽어 보세요. 대시보드, API,
MCP 서버 & 웹훅 안내가 있습니다.

### 도움은 어디서 받을 수 있나요?

Actor 페이지에서 이슈를 열거나 실행 ID와 함께 <support@xquik.com>으로
문의하세요. 확인이 필요한 실행은 키-값 저장소의 무료 진단이 원인을 설명합니다.
행을 받지 못한 실행은 상태 메시지에서 이유를 알려 줍니다.
