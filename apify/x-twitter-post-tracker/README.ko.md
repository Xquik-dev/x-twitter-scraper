[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · **한국어** ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer가 Xquik MCP를 코딩 에이전트에 연결하는 모습](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Framer가 Xquik 스크레이퍼를 Claude Code, Codex, Cursor 등과 함께 사용하는 방법](https://youtu.be/4UOSpoOoC3Y?t=367)을
6:07부터 보세요.

Xquik은 세계에서 가장 빠르고 저렴한 X(Twitter) 스크레이퍼 서비스이며, 가장
완전한 X 데이터를 제공합니다. Xquik의 X (Twitter) Post Tracker는 고른 게시물의
공개 수치를 기록합니다. X 쿠키나 로그인이 필요 없습니다. 나중에 다시 실행하면 각
행에 무엇이 바뀌었는지 나옵니다. 다른 Apify Actor는 대부분 필터링이나 중복 제거
전에 요금을 부과합니다. Xquik은 중복되지 않은 결과를 전달했을 때만 요금을
받습니다.

게시물 URL이나 트윗 ID를 붙여 넣으세요. 각 실행은 게시물마다 스냅샷 1행을
저장합니다. 한 행에는 그 시점의 조회수, 좋아요, 리포스트, 답글, 인용 & 북마크
수가 들어 있습니다. 이전 스냅샷 이후와 첫 스냅샷 이후의 변화도 들어 있습니다.
요금은 **전달된 스냅샷당 $0.00015**이며, Apify 플랫폼 사용료는 Apify가 따로
청구합니다.

> Xquik은 독립적인 제3자 서비스입니다. X Corp와 제휴 관계가 없습니다.
> "Twitter"와 "X"는 X Corp의 상표입니다.

## X (Twitter) Post Tracker를 써야 하는 이유는?

- **모든 행에 성장 수치.** 각 스냅샷에 지난 실행과 첫 실행 이후의 변화가 들어
  있습니다.
- **데이터베이스 없이 기록 유지.** 이전 실행의 데이터셋을 넘기세요. 첫 스냅샷이
  실행에서 실행으로 이어집니다.
- **어떤 형태의 게시물이든 붙여 넣기.** 게시물 URL과 트윗 ID를 1개 목록에 섞어
  넣으세요.
- **스프레드시트에 바로 쓰는 내보내기.** `fields`와 `flatten`으로 열을
  정리하세요. JSON, CSV, Excel, XML 또는 RSS로 내보낼 수 있습니다.

## 받는 것

### 완전한 결과

- 각 결과에는 X에 있는 가장 완전한 데이터가 들어 있습니다.

### 정확한 행

- 게시물은 실제로 사라졌을 때만 없음으로 표시됩니다.
- 행의 모든 ID는 정확하게 유지됩니다.
- 행에는 공개 데이터만 들어 있습니다.

### 최신 데이터

- X가 변경 사항을 내놓아도 읽기는 계속 작동합니다.

### 속도

- X의 느린 응답이 요청을 붙잡아 두지 않습니다.
- Actor는 여러 핸들, 게시물 & 쿼리를 한 번에 읽습니다.
- 읽기는 행이 도착하는 즉시 끝납니다.
- 멈춘 Actor 호출은 스스로 복구됩니다.

### 공정한 청구

- 잘못된 입력은 읽기 전에 거부되므로 비용이 들지 않습니다.
- Actor는 전달된, 중복되지 않은, 조건에 맞는 행에만 요금을 받습니다.
- 다시 시작한 실행은 절대 2번 청구하지 않습니다.
- 지출 한도는 행 한도가 되며, 진단은 계속 기록됩니다.
- 작은 실행은 비용을 줄이는 팁으로 끝납니다.

### 안정성

- X의 일회성 장애가 요청을 실패시키지 않습니다.
- 기한에 도달하면 이미 찾은 행을 진단과 함께 돌려줍니다.
- Actor는 짧은 Xquik 장애를 견뎌 냅니다.
- Actor 실행은 재시작 후에도 반복 없이 이어집니다.
- 잘못된 행 1개가 배치 전체를 망치지 않습니다.
- 중지된 실행도 행 & 보고서를 유지합니다.
- 시작하지 못한 실행도 이유를 설명합니다.
- X 쪽 문제는 읽기에 영향을 주기 전에 해결됩니다.
- 지원팀은 요청이나 실행이 무엇을 반환했는지 정확히 볼 수 있습니다.

### 에이전트를 위한 설계

- Actor는 다른 Actor용으로 작성된 입력도 받습니다.
- 모든 실행이 끝난 이유 & 다시 시도할지 여부를 알려 줍니다.

### 풍부한 데이터

- 각 스냅샷 행에는 이전 실행 이후 각 수치의 변화가 담겨 있습니다.

### 품질 검사

- X가 보여 주는 모든 필드는 제공되거나, 의도적으로 제외되거나, 없음이
  확인됩니다.
- 모든 읽기를 매시간 실시간으로 확인합니다.

## X (Twitter) Post Tracker는 어떤 데이터를 추출하나요?

- 각 게시물의 조회수, 좋아요, 리포스트, 답글, 인용 & 북마크 수.
- `capturedAt`에 들어가는 각 스냅샷의 시각.
- 각 게시물의 첫 스냅샷과 그 시각 & 수치.
- 이전 실행의 데이터셋에서 가져온 이전 스냅샷.
- 이전 스냅샷 이후 각 수치의 변화.
- 첫 스냅샷 이후 각 수치의 변화.
- 게시물 텍스트, 날짜, 링크 & 작성자.
- 1번의 실행으로 처리하고 입력 순서대로 전달하는 여러 게시물.
- Apify 데이터셋을 통한 JSON, CSV, Excel, XML & RSS 내보내기.

## X 게시물 지표를 시간에 따라 추적하는 방법

Apify가 처음인가요? 먼저
[무료 계정을 만드세요](https://console.apify.com/sign-up?fpr=xquik). 무료
요금제는 신용카드가 필요 없고 매달 $5를 쓸 수 있습니다. 스냅샷당 $0.00015이므로,
플랫폼 사용료를 빼고 $5로 최대 33,000개의 스냅샷을 받을 수 있습니다. 그다음
여기로 돌아와 Try for free를 누르세요.

1. Apify Console에서 Xquik의 X (Twitter) Post Tracker를 여세요.
2. 게시물 URL이나 트윗 ID를 `tweetIds`에 붙여 넣으세요.
3. 첫 실행에서는 `previousDatasetId`를 비워 두고 Start를 클릭하세요.
4. 다음 실행에서는 `previousDatasetId`에서 첫 실행의 데이터셋을 고르세요.
5. 데이터셋을 JSON, CSV 또는 Excel로 내려받거나 Apify API를 사용하세요.

어느 단계에서도 X 쿠키, 로그인 정보, API 키를 입력하지 않습니다.

## 입력

`tweetIds`는 트윗 ID와 게시물 URL을 어떤 조합으로든 받습니다.

```json
{
  "tweetIds": [
    "2102882545427714266",
    "https://x.com/OpenAI/status/2082577277246972300",
    "20"
  ],
  "maxItems": 1000
}
```

`startUrls`도 같은 게시물 URL을 받습니다. 각 URL을 일반 문자열이나
`{ "url": "..." }` 객체로 넣으세요.

`previousDatasetId`는 이 Actor의 이전 실행 데이터셋을 지정합니다. 양식에서 내
데이터셋 중에 고를 수 있습니다. Actor는 그 데이터셋을 읽기만 합니다. 첫
실행에서는 비워 두세요.

```json
{
  "tweetIds": ["2102882545427714266", "20"],
  "previousDatasetId": "<dataset ID of an earlier run>"
}
```

입력에 2번 들어간 게시물은 1행만 받습니다. `maxItems`는 입력의 앞쪽 게시물부터
남깁니다. 문제없이 끝난 작은 실행은 `run-report`를 건너뛰어 Apify 사용량을
아낍니다. 매번 기록하려면 `alwaysSaveRunRecords`를 켜세요.

## 스케줄로 실행하기

Apify [스케줄](https://docs.apify.com/platform/schedules)은 매시간 실행 같은
cron 일정으로 Actor를 시작합니다.

1. 게시물을 넣고 `previousDatasetId` 없이 Actor를 1번 실행하세요.
2. Apify Console에서 Actor의 스케줄을 만드세요.
3. 스케줄에 같은 `tweetIds` 입력을 넣으세요.
4. `previousDatasetId`를 첫 실행의 데이터셋으로 설정하세요.

그러면 예약된 각 실행이 그 데이터셋과 수치를 비교합니다. 각 실행을 바로 전
실행과 비교하려면 Apify API로 실행을 시작하세요. 마지막 실행의
`defaultDatasetId`를 `previousDatasetId`로 넘기세요. 첫 스냅샷은 계속 이어지므로
`changeSinceFirst`는 1일째부터 계속 셉니다. 마지막 실행에 없던 게시물은 다음
실행에서 새 `firstSnapshot`을 시작합니다.

실행이 스냅샷을 저장하지 않았다면 그 이전 실행의 데이터셋을 넘기세요.

## 출력

각 게시물은 실행마다 데이터셋 1행입니다. 행은 `postId`, `url`, `text`,
`createdAt` & `author`로 시작합니다. 이어서 `capturedAt`와 6개 수치인
`viewCount`, `likeCount`, `retweetCount`, `replyCount`, `quoteCount` &
`bookmarkCount`가 옵니다. 그다음 `firstSnapshot`, `previousSnapshot`,
`changeSincePrevious` & `changeSinceFirst`가 옵니다. 수치가 0이면 X가 그 값을
보고하지 않았다는 뜻일 수 있습니다.

예시는 샘플 값을 사용합니다. 결과에는 실시간 데이터가 반영됩니다. 두 번째 실행의
행은 다음과 같습니다.

```json
{
  "postId": "2102882545427714266",
  "url": "https://x.com/NASA/status/2102882545427714266",
  "text": "Welcome to the Artemis Accords, Croatia",
  "createdAt": "Wed Sep 23 22:07:23 +0000 2026",
  "author": { "id": "11348282", "username": "NASA", "name": "NASA" },
  "capturedAt": "2026-10-28T09:00:00.000Z",
  "viewCount": 1291231,
  "likeCount": 9043,
  "retweetCount": 772,
  "replyCount": 207,
  "quoteCount": 100,
  "bookmarkCount": 661,
  "firstSnapshot": {
    "capturedAt": "2026-10-25T09:00:00.000Z",
    "viewCount": 500000,
    "likeCount": 5000,
    "retweetCount": 500,
    "replyCount": 150,
    "quoteCount": 50,
    "bookmarkCount": 400
  },
  "previousSnapshot": {
    "capturedAt": "2026-10-27T09:00:00.000Z",
    "viewCount": 1200000,
    "likeCount": 9000,
    "retweetCount": 770,
    "replyCount": 205,
    "quoteCount": 99,
    "bookmarkCount": 640
  },
  "changeSincePrevious": {
    "viewCount": 91231,
    "likeCount": 43,
    "retweetCount": 2,
    "replyCount": 2,
    "quoteCount": 1,
    "bookmarkCount": 21
  },
  "changeSinceFirst": {
    "viewCount": 791231,
    "likeCount": 4043,
    "retweetCount": 272,
    "replyCount": 57,
    "quoteCount": 50,
    "bookmarkCount": 261
  },
  "resultType": "snapshot",
  "sourceTarget": "2102882545427714266"
}
```

행으로 3가지 경우를 구분할 수 있습니다.

| 행에 있는 값                   | 의미                                       |
| ------------------------------ | ------------------------------------------ |
| `previousSnapshot: null`       | 이전 데이터셋에 이 게시물의 행이 없습니다. |
| 수치가 있는 `previousSnapshot` | 행이 그 스냅샷과 비교됩니다.               |
| 변화 필드의 `null` 수치        | 이전 행에 그 수치가 없습니다.              |

첫 실행에서는 `firstSnapshot`에 행 자체의 시각과 수치가 들어갑니다. 두 변화
필드는 다음 실행 전까지 `null`입니다.

## 출력 열

8개 입력이 실행이 읽은 뒤 각 행의 모양을 정합니다. 코드를 실행하지 않으며 가격도
바뀌지 않습니다.

| 필드                | 하는 일                                                         |
| ------------------- | --------------------------------------------------------------- |
| `fields`            | 이 필드만 남기며, 쓴 순서 & 철자를 따릅니다                     |
| `omitFields`        | 이 필드를 빼고 나머지를 남깁니다                                |
| `renameFields`      | 필드를 새 이름의 열로 옮깁니다                                  |
| `flatten`           | 중첩된 각 객체를 최상위 열로 바꿉니다                           |
| `fillMissingFields` | 행에 없는 유지 필드를 `null`로 채웁니다. 기본으로 켜져 있습니다 |
| `joinFields`        | 이 목록을 각각 텍스트 값 1개로 바꿉니다                         |
| `joinSeparator`     | 합친 항목 사이의 텍스트입니다. 기본값은 쉼표 & 공백입니다       |
| `constantFields`    | 모든 행에 같은 텍스트가 들어간 열을 추가합니다                  |

- 객체 안의 필드는 `changeSinceFirst.viewCount`처럼 점으로 지정하세요.
- `changeSincePrevious`를 펼치면 수치마다 1개 열이 생깁니다.
- 잘못된 필드 이름은 읽기 전에 실행을 멈추며 요금이 청구되지 않습니다.
- 실행은 다른 Actor용으로 작성된 map 함수나 jq 필터를 무시합니다.

## X 게시물 추적 비용은 얼마인가요?

모든 Apify 요금제에서 전달된 스냅샷당 $0.00015입니다. Apify 플랫폼 사용료는
Apify가 따로 청구합니다.

더 많은 사용량이 필요하면 선불 사용량이 더 많은
[Apify 요금제를 고르세요](https://apify.com/pricing?fpr=xquik).

- 전달된 스냅샷 행마다 1번 청구합니다. `diagnostics`의 진단은 무료입니다.
- 시작 요금도, 이전 데이터셋을 읽는 요금도 없습니다.
- 실행은 청구 전에 중복 게시물을 제거합니다.
- X에 없는 게시물은 행도 요금도 추가하지 않습니다.
- 실행이 읽을 수 없는 데이터셋은 실행을 멈추며 요금이 청구되지 않습니다.
- Apify 최대 총 청구액 설정이 전달되는 행 수를 제한합니다.

## 제한 & 복구

Xquik의 X (Twitter) Post Tracker는 1번의 실행으로 여러 게시물을 읽습니다. 전달된
행과 진행 상황은 Apify 재시작 후에도 유지됩니다. 이 Actor는 자체 시간 제한을
두지 않습니다. 설정한 Apify 타임아웃은 지킵니다.

실행 상태는 X에서 일치하는 항목이 없는 게시물 수를 셉니다. 이전 데이터셋에는
최대 100,000행이 들어갈 수 있습니다. 실행이 읽을 수 없는 데이터셋은 게시물을
읽기 전에 실행을 멈춥니다. 그러면 상태에서 이전 실행의 데이터셋을 고르라고
안내합니다. 중단된 실행은 무료 `partial` 진단을 기록합니다. 다시 시도하기 전에
`nextAction`을 읽으세요.

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

### X 쿠키, API 키 또는 로그인이 필요한가요?

아니요. Xquik의 X (Twitter) Post Tracker는 X 쿠키, API 키, 로그인, 자격 증명이
모두 필요 없습니다.

### `previousDatasetId`에서 어떤 데이터셋을 골라야 하나요?

이 Actor의 이전 실행 데이터셋을 고르세요. 그 안에서 각 게시물의 최신 행이
`previousSnapshot`이 됩니다. 다른 Actor의 행과 진단은 건너뜁니다.

### 첫 스냅샷은 여러 번 실행해도 유지되나요?

네. 각 행에 `firstSnapshot`이 들어 있습니다. 각 실행을 바로 전 실행에 이어
붙이면 첫 스냅샷이 그대로 유지됩니다.

### 누군가 삭제한 게시물도 추적할 수 있나요?

아니요. X에 없는 게시물은 행도 요금도 추가하지 않습니다. 실행 상태가 그 수를
셉니다.

### X 게시물을 추적해도 합법인가요?

Xquik의 X (Twitter) Post Tracker는 공개 X 필드를 요청합니다. 결과에는 개인정보가
들어 있을 수 있습니다. 적법한 목적인지 확인하고 적용되는 개인정보 보호 규정을
따르세요. 확실하지 않으면 자격을 갖춘 법률 전문가에게 문의하세요.

### API, 스케줄 & 연동을 사용할 수 있나요?

네. Apify API나 Xquik REST API를 사용하세요.
[API 탭](https://apify.com/xquik/x-twitter-post-tracker/api)에 Python,
JavaScript & cURL 예시가 있습니다. Apify
[스케줄](https://docs.apify.com/platform/schedules)로 Xquik의 X Post Tracker를
cron 일정에 따라 실행할 수 있습니다. 에이전트는
[Apify MCP](https://docs.apify.com/platform/integrations/mcp)를 사용합니다. 이전
빌드가 필요한 경우가 아니면 `latest`를 사용하세요.

### 도움은 어디서 받을 수 있나요?

[Issues 탭](https://apify.com/xquik/x-twitter-post-tracker/issues)에서 실행 ID와
함께 이슈를 여세요. 키-값 저장소의 무료 진단이 확인이 필요한 실행을 설명합니다.

### 맞춤 솔루션을 받을 수 있나요?

네. 필요한 내용을
[Issues 탭](https://apify.com/xquik/x-twitter-post-tracker/issues)에 적어
주세요. Xquik은 대시보드, REST API, MCP 서버 & 웹훅도 제공합니다. Xquik
웹사이트는 [Apify 프로필](https://apify.com/xquik)에서 찾을 수 있습니다.
