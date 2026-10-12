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
완전한 X 데이터를 제공합니다. Xquik의 X Account Location Scraper는 X 쿠키나
로그인 없이 X 계정이 어디에 기반을 두고 있는지 확인합니다. 다른 Apify Actor는
대부분 필터링이나 중복 제거 전에 요금을 부과합니다. Xquik은 필터에 맞고 중복되지
않은 결과를 전달했을 때만 요금을 받습니다.

사용자 아이디, 프로필 URL 또는 사용자 ID를 붙여 넣으면 1회 실행으로 모든 계정의
X "Account based in"(계정 기반 위치) 라벨을 받습니다. 이 라벨은 X가 최선을 다해
추정한 계정의 국가 또는 지역입니다. 국적이나 거주지, 정확한 위치가 아닙니다.
요금은 **전달된 행 1개당 $0.00015**이며, Apify 플랫폼 사용료는 Apify가 따로
청구합니다.

> Xquik은 독립적인 제3자 서비스입니다. X Corp와 제휴 관계가 없습니다.
> "Twitter"와 "X"는 X Corp의 상표입니다.

## 모든 행에 들어 있는 계정 정보

- 국가 또는 지역으로 표시되는 X의 "Account based in" 라벨.
- 해당 국가의 2글자 ISO 코드.
- X가 라벨이 부정확할 수 있다고 알리는지 여부.
- Web이나 앱 스토어 국가처럼 계정이 X에 처음 연결된 방식.
- 그 연결의 플랫폼 & 국가 코드.
- 계정이 사용자 아이디를 바꾼 횟수 & 마지막으로 바꾼 시점.
- X가 계정의 소속으로 표시하는 조직.
- 일 단위 계정 연령 & 프로필 링크.
- 전체 공개 프로필: 이름, 자기소개, 각종 수치, 인증, 날짜 & 이미지.
- X가 라벨을 내주지 않은 계정을 추가 요금 없이 1번 더 읽기.
- 1회 실행에서 여러 계정을 동시에 읽고 입력 순서대로 전달.
- @가 있거나 없는 사용자 아이디, x.com & twitter.com URL, 숫자 사용자 ID.
- 과금 전 중복 제거.
- Apify 데이터셋에서 JSON, CSV, Excel, XML & RSS로 내보내기.
- Apify 마이그레이션 후 저장된 상태에서 이어서 진행.

## X 계정의 기반 위치 확인 방법

1. Apify Console에서 Xquik의 X Account Location Scraper를 여세요.
2. `twitterHandles`에 사용자 아이디, 프로필 URL 또는 사용자 ID를 붙여 넣으세요.
3. `maxItems`로 전달할 행 수의 상한을 정하고 Start를 클릭하세요.
4. 데이터셋을 JSON, CSV 또는 Excel로 내려받거나 Apify API를 사용하세요.

어느 단계에서도 X 쿠키, 로그인, API 키를 입력하지 않습니다.

## 입력

`twitterHandles`는 계정을 가리키는 모든 형식을 받으며, 섞어서 넣어도 됩니다.

```json
{
  "twitterHandles": [
    "BBCWorld",
    "@OpenAI",
    "https://x.com/NASA",
    "https://twitter.com/github",
    "11348282"
  ],
  "maxItems": 1000
}
```

`startUrls` & `userIds`도 같은 형식을 받습니다. `startUrls`는 각 URL을 일반
문자열 또는 `{ "url": "..." }` 객체로 받습니다.

```json
{
  "startUrls": ["https://x.com/nasa", { "url": "https://x.com/OpenAI" }],
  "userIds": ["742143"]
}
```

사용자 ID는 계정이 사용자 아이디를 바꿔도 그대로이므로, 계속 관리하는 목록에는
`userIds`를 사용하세요. `userNames`는 `twitterHandles`의 다른 이름으로 쓸 수
있습니다.

입력에 2번 들어간 계정은 1번만 전달하고 과금합니다. 항목 1개가 사용자 아이디이고
다른 항목이 사용자 ID여도 마찬가지입니다. `maxItems`는 입력의 앞쪽 계정부터
남깁니다. 문제없이 끝난 작은 실행은 `run-report`를 건너뛰어 Apify 사용량을
아낍니다. 모든 실행에서 보고서를 기록하려면 `alwaysSaveRunRecords`를 켜세요.

## 출력

계정 1개가 데이터셋 행 1개입니다. X의 계정 정보 페이지에 표시되는
`accountBasedIn`, `accountBasedInUnavailable`, `accountBasedInAccurate`,
`affiliateUsername`, `connectedVia`, `connectedViaAccurate` &
`usernameChanges`가 먼저 나옵니다. 이어서 `id`, `username`, `name`,
`description`, `followers`, `following`, `verified`, `verifiedType`,
`createdAt`, `profilePicture` 등 전체 공개 프로필이 나옵니다. Actor가 프로필에서
계산하는 필드 5개인 `accountBasedInCountryCode`, `connectedViaPlatform`,
`connectedViaCountryCode`, `accountAgeDays` & `profileUrl`이 마지막에 나옵니다.
원본에 없는 필드는 행에서 빠지고, Actor가 매칭하지 못한 코드도 넣지 않습니다.
Xquik의 X Account Location Scraper는 값을 지어내지 않습니다.

예시는 샘플 값입니다. 실제 결과는 실시간 데이터를 따릅니다. 행은 다음과
같습니다.

```json
{
  "accountBasedIn": {
    "value": "United Kingdom",
    "level": "country",
    "observedAt": "2026-10-12T09:00:00.000Z"
  },
  "accountBasedInAccurate": true,
  "affiliateUsername": "sample_org",
  "connectedVia": "Web",
  "usernameChanges": {
    "count": 1,
    "lastChangedAt": "2021-03-04T10:00:00.000Z"
  },
  "id": "1234567890",
  "username": "sample_user",
  "name": "Sample User",
  "followers": 1200,
  "verified": true,
  "createdAt": "2017-03-21T20:50:14.000Z",
  "accountBasedInCountryCode": "GB",
  "connectedViaPlatform": "web",
  "accountAgeDays": 3491,
  "profileUrl": "https://x.com/sample_user",
  "resultType": "profile",
  "sourceTarget": "sample_user"
}
```

행은 다음 3가지 경우를 구분합니다.

| 행에 들어 있는 값                 | 의미                                            | 할 일                                 |
| --------------------------------- | ----------------------------------------------- | ------------------------------------- |
| `value`가 있는 `accountBasedIn`   | X가 이 계정에 이 라벨을 표시합니다.             | 그대로 사용하세요.                    |
| `accountBasedIn: null`            | X가 이 계정에 표시하는 라벨이 없습니다.         | 없습니다. X에 표시할 라벨이 없습니다. |
| `accountBasedInUnavailable: true` | X가 읽기 2번 모두에서 라벨을 내주지 않았습니다. | 나중에 이 계정으로 다시 실행하세요.   |

X가 라벨을 내주지 않으면 실행은 행을 전달하기 전에 그 계정을 1번 더 읽습니다.
2번째 읽기는 무료입니다. 그래도 받지 못한 라벨은 없는 것이 아니라 알 수 없는
것입니다. 이런 행에는 계정 정보 필드 없이 공개 프로필만 들어 있으며, 실행 상태에
이런 계정의 수가 나옵니다. 3가지 경우 모두 전달된 행 1개입니다.

## 라벨의 의미

X는 계정에 접속한 IP를 집계해 `accountBasedIn`을 추론합니다. 이 라벨은 국적,
거주지, 신원, 가입 위치, 게시 위치, 정확한 위치를 나타내지 않습니다. `level`은
X가 국가를 표시하는지 더 넓은 지역을 표시하는지 알려 줍니다. `observedAt`은
가져온 시각을 기록합니다. X가 라벨이 부정확할 수 있다고 알리면
`accountBasedInAccurate` 값은 `false`입니다. `connectedVia`는 계정이 X에 처음
연결된 방식을 알려 주며, X가 그 국가가 부정확할 수 있다고 알리면
`connectedViaAccurate` 값은 `false`입니다. `connectedViaPlatform`은 `web`, `ios`
또는 `android`입니다. 국가 코드 2개는 X가 적은 이름에서 나오므로 지역에는 코드가
없습니다. `location`은 계정 주인이 프로필에 직접 쓴 텍스트이며, 별개의
필드입니다.

## X 계정 위치 확인 비용은 얼마인가요?

모든 Apify 요금제에서 전달된 행 1개당 $0.00015입니다. Apify 플랫폼 사용료는
Apify가 따로 청구합니다.

- 전달된 데이터 행 1개마다 한 번 과금합니다. 진단은 `diagnostics`에서 무료로
  제공합니다.
- 시작, 조회 요금이 없습니다.
- X에 없는 계정은 행도 요금도 추가하지 않습니다.
- X가 내주지 않은 라벨을 다시 읽어도 추가 요금이 없습니다.
- 과금 전에 중복을 제거합니다.
- Apify의 최대 총 청구액 설정에 따라 전달되는 행 수가 제한됩니다.

## 제한 & 복구

Xquik의 X Account Location Scraper는 1회 실행에서 여러 계정을 읽습니다. Apify가
실행을 다시 시작해도 전달된 행 & 진행 상황은 유지됩니다. 이 Actor는 자체 시간
제한을 두지 않습니다. 사용자가 설정한 Apify 제한 시간은 지킵니다.

실행 상태는 X에서 찾을 수 없는 계정을 알려 주고 사용자 아이디, ID 또는 URL을
확인하라고 안내합니다. 정지된 계정도 알려 줍니다. 추출이 중단되면 무료 `partial`
진단을 기록합니다. 이미 받은 결과는 그대로 남습니다. 다시 시도하기 전에
`availableResults`, `failedTargets`, `retryable` & `nextAction`을 확인하세요.
Actor가 성공으로 종료되면 전달이 끝났다는 뜻입니다. 추출이 모두 끝났다는 뜻은
아닙니다.

실행 상태는 실행이 일찍 멈춘 원인을 모두 알려 줍니다. `stopCauses`는 원인마다
`message`, `retryable` & `nextAction`을 따로 담아 나열합니다. 원인은
`target_not_found`, `target_suspended`, `target_failed` &
`deadline_reached`입니다. 찾을 수 없거나 정지된 대상은 다른 원인으로 실행이
멈췄을 때만 목록에 들어갑니다. 원인 중 하나라도 재시도할 수 있으면 실행도
`retryable`입니다.

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
- [X List Scraper](https://apify.com/xquik/x-list-scraper): 리스트 URL이나 ID로
  리스트 게시물, 멤버 & 팔로워를 스크랩합니다. 직접 고른 리스트로 수집 대상을
  정할 때 사용하세요. 행당 $0.00015부터입니다.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): 커뮤니티
  정보, 게시물, 검색 결과, 멤버 & 모더레이터를 스크랩합니다. X 커뮤니티에서
  데이터를 모을 때 사용하세요. 행당 $0.00015부터입니다.
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

## 자주 묻는 질문

자주 묻는 질문에 먼저 답하고, 이어서 도움받을 곳을 안내합니다.

### X 쿠키, API 키 또는 로그인이 필요한가요?

아니요. Xquik의 X Account Location Scraper는 X 쿠키, API 키, 로그인, 자격 증명이
모두 필요 없습니다. 모든 읽기는 Xquik 인프라에서 실행됩니다.

### 라벨이 계정 주인이 사는 곳을 알려 주나요?

아니요. X가 최선을 다해 추정해 계정에 붙인 라벨입니다. 국적, 거주지, 정확한
위치를 나타내지 않으며, X 스스로도 일부 라벨이 부정확할 수 있다고 표시합니다.

### 행에 `accountBasedInUnavailable`이 있는 이유는 무엇인가요?

X가 이 실행의 읽기 2번 모두에서 라벨을 내주지 않았습니다. 라벨은 없는 것이
아니라 알 수 없는 것입니다. 라벨을 받으려면 나중에 이 계정으로 다시 실행하세요.
`accountBasedIn: null`은 다릅니다. X가 그 계정에 표시하는 라벨이 없다는
뜻입니다.

### 1회 실행에서 계정을 몇 개까지 확인할 수 있나요?

붙여 넣은 만큼 확인합니다. 1회 실행으로 100,000행 이상을 받을 수 있습니다.
목록이 더 길면 `maxItems`를 양식의 기본값인 1,000보다 높이세요.

### X 계정의 기반 위치를 확인해도 합법인가요?

Xquik의 X Account Location Scraper는 공개 X 필드를 요청합니다. 결과에는
개인정보가 들어 있을 수 있습니다. 적법한 목적인지 확인하고 관련 개인정보 보호
규정을 따르세요. 확실하지 않으면 자격을 갖춘 법률 전문가에게 문의하세요.

### 실행 결과가 비어 있는 이유는 무엇인가요?

먼저 실행 상태를 읽으세요. 결과가 없는 실행의 상태는 X에서 찾을 수 없는 계정마다
사용자 아이디, ID 또는 URL을 확인하라고 안내합니다. 무료 `diagnostics` 출력은
확인할 일이 있을 때 나타납니다. 그 안의 `stopCauses`는 원인마다 따라 할
`nextAction`을 알려 줍니다.

### API, 스케줄 & 연동을 사용할 수 있나요?

네. Apify API나 Xquik REST API를 사용하세요.
[API 탭](https://apify.com/xquik/x-account-location-scraper/api)에 Python,
JavaScript & cURL 예시가 있습니다. Apify
[스케줄](https://docs.apify.com/platform/schedules)로 Xquik의 X Account Location
Scraper를 cron 일정에 맞춰 실행할 수 있습니다. 에이전트는
[Apify MCP](https://docs.apify.com/platform/integrations/mcp)를 사용합니다. 이전
빌드가 꼭 필요하지 않다면 `latest`를 사용하세요.

### 도움은 어디서 받을 수 있나요?

Actor 페이지에서 이슈를 열거나 실행 ID와 함께 <support@xquik.com>으로
문의하세요. 키-값 저장소의 무료 진단이 확인이 필요한 실행의 원인을 설명합니다.
행을 하나도 받지 못한 실행은 상태에서 이유를 알려 줍니다.

### 맞춤 솔루션을 받을 수 있나요?

네. [xquik.com](https://xquik.com)을 방문하거나
[API 문서](https://docs.xquik.com/introduction)를 읽어 보세요. 대시보드, API,
MCP 서버 & 웹훅 안내가 있습니다.
