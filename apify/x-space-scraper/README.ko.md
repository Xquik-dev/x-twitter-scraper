[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · **한국어** ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer가 Xquik MCP를 코딩 에이전트에 연결하는 모습](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Framer가 Xquik 스크레이퍼를 Claude Code, Codex, Cursor 등과 함께 사용하는 방법](https://youtu.be/4UOSpoOoC3Y?t=367)을
6:07부터 보세요.

Xquik은 세계에서 가장 빠르고 저렴한 X(Twitter) 스크레이퍼 서비스이며, 가장
완전한 X 데이터를 제공합니다. Xquik의 X Space Scraper는 키워드, 호스트 또는
해시태그로 스페이스를 찾고 URL이나 ID로 스페이스 & 방송을 읽습니다. 다른 Apify
Actor는 대부분 필터링이나 중복 제거 전에 요금을 부과합니다. Xquik은 중복되지
않은 결과를 전달했을 때만 요금을 받습니다.

어떤 주제든 진행 중이거나 예정되었거나 종료된 Twitter 스페이스를 찾으세요. X API
키나 로그인은 필요 없습니다. 요금은 **전달된 스페이스 또는 방송 1개당
$0.00015**이며, Apify 플랫폼 사용료는 Apify가 따로 청구합니다.

> Xquik은 독립적인 제3자 서비스입니다. X Corp와 제휴 관계가 없습니다.
> "Twitter"와 "X"는 X Corp의 상표입니다.

## 스페이스 데이터

- 각 스페이스의 제목, 상태 & 예정, 시작 & 종료 시간.
- 실시간 청취자 수, 다시 듣기 재생 수 & 지금 스페이스에 있는 계정.
- 호스트의 공개 프로필, 공동 호스트, 스피커 & X가 표시하는 청취자.
- 다시 듣기, 클립 & 잠금 설정, 그리고 스페이스를 알리는 게시물과 그 본문, 수치 &
  작성자.
- 호스트 & 스피커가 스페이스에서 공유한 게시물, 공유한 사람 & 시간.
- 종료된 스페이스의 녹음. `includeReplay`를 켜면 HLS 재생 목록 URL로 들어옵니다.
- URL이나 ID로 읽는 방송. 제목, 상태, 시간, 시청 수 & 호스트를 읽습니다.
- 과금 전 중복 제거. 검색어 2개가 찾은 스페이스는 행 1개입니다.

## X 스페이스 찾는 방법

Apify가 처음인가요? 먼저
[무료 계정을 만드세요](https://console.apify.com/sign-up?fpr=xquik). 무료
요금제는 신용카드가 필요 없고 매달 쓸 수 있는 $5를 줍니다. 스페이스 또는 방송
1개당 $0.00015이므로 $5면 플랫폼 사용료를 빼고 최대 33,000개를 받을 수 있습니다.
그런 다음 여기로 돌아와 Try for free를 누르세요.

1. Apify Console에서 Xquik의 X Space Scraper를 여세요.
2. `searchTerms`에 단어, 해시태그 또는 X 검색 연산자를 입력하세요.
3. 또는 `startUrls`에 스페이스 URL을, `spaceIds`에 스페이스 ID를 붙여넣으세요.
4. 방송은 URL을 `startUrls`에, ID를 `broadcastIds`에 붙여넣으세요.
5. `maxItems`로 전달할 행 수의 상한을 정하고 Start를 클릭하세요.
6. 데이터셋을 JSON, CSV 또는 Excel로 내려받거나 Apify API를 사용하세요.

`startUrls`는 각 URL을 일반 문자열 또는 `{ "url": "..." }` 객체로 받습니다.

```json
{
  "startUrls": [
    "https://x.com/i/spaces/1OGwblLjnQMKB",
    { "url": "https://x.com/i/broadcasts/1nGeLMWbkpaKX" }
  ]
}
```

## 입력

```json
{
  "searchTerms": ["bitcoin", "from:solana"],
  "queryType": "Latest",
  "maxItems": 1000
}
```

검색어는 일치하는 게시물이 공유한 스페이스를 찾습니다. X 검색에서 쓰는 연산자를
그대로 쓸 수 있습니다.

| 목표                                          | 검색어             |
| --------------------------------------------- | ------------------ |
| 특정 주제의 스페이스                          | `bitcoin`          |
| 특정 계정이 공유한 스페이스                   | `from:solana`      |
| 해시태그가 붙은 스페이스                      | `#AI`              |
| 언어 1개의 스페이스                           | `startups lang:es` |
| 마음에 들어요가 많은 게시물이 공유한 스페이스 | `nba min_faves:50` |

`queryType`은 어떤 게시물을 앞에 둘지 정합니다. `Latest`는 최신 게시물을,
`Top`은 반응이 가장 많은 게시물을 앞에 둡니다.

`Live`는 지금 방송 중인 스페이스를, `Upcoming`은 예정된 스페이스를 나열합니다.
둘 다 X 자체의 스페이스 검색을 읽습니다. 이 검색은 스페이스 제목의 단어로 찾으며
연산자는 받지 않습니다.

```json
{ "searchTerms": ["bitcoin"], "queryType": "Live" }
```

이미 아는 스페이스는 URL이나 ID로 읽습니다.

```json
{
  "startUrls": [{ "url": "https://x.com/i/spaces/1OGwblLjnQMKB" }],
  "spaceIds": ["1OGwblLjnQMKB"]
}
```

종료된 각 스페이스의 녹음을 받으려면 `includeReplay`를 켜세요.

```json
{ "spaceIds": ["1OGwblLjnQMKB"], "includeReplay": true }
```

그러면 행에 `replay`가 들어갑니다. HLS 재생 목록인 `url`과 `streamType` &
`status`를 담습니다. 진행 중이거나 예정되었거나 녹음이 없는 스페이스에는
`replay`가 없습니다. 녹음에는 추가 요금이 없습니다.

X가 `x.com/i/broadcasts`에서 제공하는 라이브 동영상인 방송은 URL이나 ID로
읽습니다.

```json
{
  "startUrls": [{ "url": "https://x.com/i/broadcasts/1nGeLMWbkpaKX" }],
  "broadcastIds": ["1nGeLMWbkpaKX"]
}
```

문제없이 끝난 작은 실행은 `run-report`를 건너뛰어 Apify 사용량을 아낍니다. 모든
실행에서 이 레코드를 기록하려면 `alwaysSaveRunRecords`를 켜세요.

## 출력

각 행에는 스페이스 또는 방송 1개 & 해당 검색어, URL 또는 ID를 담은
`sourceTarget`이 들어 있습니다. `resultType`은 `space` 또는 `broadcast`입니다.

예시는 샘플 값입니다. 실제 결과는 실시간 데이터를 따릅니다. 스페이스 행은 다음과
같습니다.

```json
{
  "id": "1SampleSpace1",
  "title": "Sample Space about bitcoin",
  "state": "Ended",
  "startedAt": "2026-03-11T17:00:26.227Z",
  "endedAt": "2026-03-11T17:49:29.190Z",
  "totalLiveListeners": 841,
  "totalReplayWatched": 609,
  "isAvailableForReplay": true,
  "creator": { "username": "sample_host", "name": "Sample Host" },
  "admins": [{ "username": "sample_host", "name": "Sample Host" }],
  "speakers": [{ "username": "sample_speaker", "name": "Sample Speaker" }],
  "listeners": [],
  "sharings": [
    {
      "id": "2106511178339881415",
      "sharedAt": "2026-03-11T17:20:16.658Z",
      "sharedBy": { "username": "sample_speaker", "name": "Sample Speaker" },
      "tweet": { "id": "2105620368836706789", "text": "Sample shared post" }
    }
  ],
  "resultType": "space",
  "sourceTarget": "bitcoin"
}
```

`state`에는 X가 쓰는 이름 그대로 값 5개 중 1개가 들어갑니다.

| `state`      | 스페이스                                          |
| ------------ | ------------------------------------------------- |
| `NotStarted` | 예정되어 있으며 `scheduledStart`가 들어 있습니다. |
| `Running`    | 지금 진행 중입니다.                               |
| `Ended`      | 끝났습니다. 호스트가 종료했습니다.                |
| `TimedOut`   | 끝났습니다. 호스트가 아니라 X가 닫았습니다.       |
| `Canceled`   | 예정되었지만 시작하지 않았습니다.                 |

`Ended` & `TimedOut` 스페이스에는 `endedAt`이 들어 있고, 둘 다 녹음을 남길 수
있습니다. X는 구독자나 커뮤니티 전용 스페이스를 해당 대상에게만 보여 주므로,
이런 스페이스는 행을 반환하지 않습니다.

방송 행에는 `resultType: "broadcast"`가 들어 있고 다음과 같습니다.

```json
{
  "id": "1SampleBcast1",
  "title": "Sample launch broadcast",
  "state": "Ended",
  "startedAt": "2026-09-17T00:54:56.506Z",
  "endedAt": "2026-09-17T01:17:35.036Z",
  "totalWatched": 161758,
  "totalWatching": 21639,
  "width": 3840,
  "height": 2160,
  "creator": { "username": "sample_host", "name": "Sample Host" },
  "resultType": "broadcast",
  "sourceTarget": "1SampleBcast1"
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

## X 스페이스 스크랩 비용은 얼마인가요?

모든 Apify 요금제에서 전달된 스페이스 또는 방송 1개당 $0.00015입니다. Apify
플랫폼 사용료는 Apify가 따로 청구합니다.

더 많이 수집하려면 선불 사용량이 더 많은
[Apify 요금제를 고르세요](https://apify.com/pricing?fpr=xquik).

- 전달된 데이터 행 1개마다 한 번 과금합니다. 진단은 `diagnostics`에서 무료로
  제공합니다.
- 시작, 검색 또는 페이지 요금이 없습니다.
- 과금 전에 중복을 제거합니다.

## 제한 & 복구

추출이 중단되면 무료 `partial` 진단을 기록합니다. 이미 받은 결과는 그대로
남습니다. 다시 시도하기 전에 `availableResults`, `failedTargets`, `retryable` &
`nextAction`을 확인하세요. Actor가 성공으로 종료되면 전달이 끝났다는 뜻입니다.
추출이 모두 끝났다는 뜻은 아닙니다.

실행 상태는 실행이 일찍 멈춘 원인을 모두 알려 줍니다. `stopCauses`는 원인마다
`message`, `retryable` & `nextAction`을 따로 담아 나열합니다. 원인은
`target_not_found`, `target_failed`, `pagination_safety_limit` &
`deadline_reached`입니다. 찾을 수 없는 대상은 다른 원인으로 실행이 멈췄을 때만
목록에 들어갑니다. 원인 중 하나라도 재시도할 수 있으면 실행도 `retryable`입니다.

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

아니요. Xquik의 X Space Scraper는 X API 키, 로그인, 자격 증명이 모두 필요
없습니다.

### 지금 진행 중인 스페이스를 찾을 수 있나요?

네. `queryType`을 `Live`로 설정하고 `bitcoin` 같은 검색어를 추가하세요. 각 행은
지금 방송 중인 스페이스입니다. `Upcoming`은 예정된 스페이스를 나열하며, 이
스페이스에는 `scheduledStart`가 들어 있습니다.

### X 스페이스를 스크랩해도 합법인가요?

Xquik의 X Space Scraper는 공개 X 필드를 요청합니다. 결과에는 개인정보가 들어
있을 수 있습니다. 적법한 목적인지 확인하고 적용되는 개인정보 보호 규정을
따르세요. 확실하지 않으면 자격을 갖춘 법률 전문가에게 문의하세요.

### 실행 결과가 비어 있는 이유는 무엇인가요?

먼저 실행 상태를 읽으세요. 결과가 없는 실행의 상태는 대상을 확인하라고
안내합니다. 무료 `diagnostics` 출력은 확인할 일이 있을 때 나타납니다. 그 안의
`stopCauses`는 원인마다 따라 할 `nextAction`을 알려 줍니다.

### API, 스케줄 & 연동을 사용할 수 있나요?

네. Apify API나 Xquik REST API를 사용하세요.
[API 탭](https://apify.com/xquik/x-space-scraper/api)에 Python, JavaScript &
cURL 예시가 있습니다. Apify
[스케줄](https://docs.apify.com/platform/schedules)로 Xquik의 X Space Scraper를
cron 일정에 맞춰 실행할 수 있습니다. 에이전트는
[Apify MCP](https://docs.apify.com/platform/integrations/mcp)를 사용합니다. 이전
빌드가 꼭 필요하지 않다면 `latest`를 사용하세요.

### 도움은 어디서 받을 수 있나요?

실행 ID와 함께 [Issues 탭](https://apify.com/xquik/x-space-scraper/issues)에서
이슈를 여세요. 키-값 저장소의 무료 진단이 확인이 필요한 실행의 원인을
설명합니다. 행을 하나도 받지 못한 실행은 상태에서 이유를 알려 줍니다.

### 맞춤 솔루션을 받을 수 있나요?

네. [Issues 탭](https://apify.com/xquik/x-space-scraper/issues)에 필요한 내용을
적어 주세요. Xquik은 대시보드, REST API, MCP 서버 & 웹훅도 제공합니다. Xquik
웹사이트는 [Apify 프로필](https://apify.com/xquik)에서 찾을 수 있습니다.
