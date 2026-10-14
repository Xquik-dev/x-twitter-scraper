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
완전한 X 데이터를 제공합니다. Xquik의 X List Scraper는 리스트 상세 정보, 게시물,
멤버 & 팔로워를 수집하고 키워드로 리스트를 찾습니다. 다른 Apify Actor는 대부분
필터링이나 중복 제거 전에 요금을 부과합니다. Xquik은 필터에 맞고 중복되지 않은
결과를 전달했을 때만 요금을 받습니다.

X 리스트 URL이나 숫자로 된 리스트 ID로 상세 정보, 게시물, 멤버 & 팔로워를
스크랩하거나 검색어로 공개 리스트를 찾으세요. 요금은 **전달된 행 1개당
$0.00015**이며, Apify 플랫폼 사용료는 Apify가 따로 청구합니다. X API 키나
로그인은 필요 없습니다.

> Xquik은 독립적인 제3자 서비스입니다. X Corp와 제휴 관계가 없습니다.
> "Twitter"와 "X"는 X Corp의 상표입니다.

## 리스트 데이터 & 필터

- 리스트 상세 정보. 이름, 설명, 멤버 수 & 팔로워 수, 생성 시각, 배너 & 소유자의
  공개 프로필이 들어 있습니다.
- 텍스트, 작성자, 지표, 미디어 & 타임스탬프가 담긴 리스트 게시물.
- 리스트 멤버 & 리스트 팔로워.
- 키워드로 리스트 검색. 각 행은 리스트 1개이며 소유자, 멤버 수 & 팔로워 수가
  들어 있습니다.
- 리스트 게시물의 답글 포함 여부 선택.
- 날짜, 유닉스 시간, 언어, 미디어, 참여, 인증 & 프로필 필터.
- 사용자 아이디나 프로필 URL로 계정이 만들었거나 속해 있는 공개 리스트 조회.
- 한 실행에서 여러 리스트 & 리소스 유형 처리.
- 전체 상한 & 리스트 리소스별 또는 검색어별 상한.
- Apify 마이그레이션 후에도 이어서 진행.
- 과금 전 중복 제거.

## X 리스트 스크랩 방법

1. Apify Console에서 Xquik의 X List Scraper를 여세요.
2. 리스트 URL은 `startUrls`에, 숫자로 된 리스트 ID는 `listIds`에 붙여넣으세요.
   리스트를 찾으려면 대신 `searchTerms`에 키워드를 추가하세요.
3. `resources`를 고르고 `sinceDate`나 `minLikes` 같은 필터를 추가하세요.
4. `maxItems`로 전달할 행 수의 상한을 정하고 Start를 클릭하세요.
5. 데이터셋을 JSON, CSV 또는 Excel로 내려받거나 Apify API를 사용하세요.

`startUrls`는 각 URL을 일반 문자열 또는 `{ "url": "..." }` 객체로 받습니다.

```json
{
  "startUrls": [
    "https://x.com/i/lists/1748648376080666720",
    { "url": "https://x.com/nasa" }
  ]
}
```

## 입력

```json
{
  "listIds": ["1748648376080666720"],
  "resources": ["info", "tweets", "members", "followers"],
  "includeReplies": false,
  "maxItems": 10000
}
```

키워드로 리스트를 찾으려면 검색어를 보내세요.

```json
{ "searchTerms": ["space news", "climate science"], "maxItemsPerTarget": 50 }
```

문제없이 끝난 작은 실행은 `run-report`를 건너뛰어 Apify 사용량을 아낍니다. 모든
실행에서 보고서를 기록하려면 `alwaysSaveRunRecords`를 켜세요.

## 출력

각 행의 `resultType`은 `list`, `listTweet`, `listMember`, `listFollower` 중
하나입니다. `sourceTarget`에는 입력한 리스트 ID나 `list` 행을 찾은 검색어가
남습니다. `list` 행에는 리스트의 상세 정보가 리스트당 1개씩 들어 있습니다.
나머지 행은 Xquik의 안정적인 게시물 또는 프로필 응답 형식을 따릅니다.

### 계정의 리스트

각 계정의 공개 리스트를 나열하려면 `twitterHandles`에 사용자 아이디를, 또는
`startUrls`에 프로필 URL을 추가하세요.

```json
{ "twitterHandles": ["verge"], "accountLists": ["created", "memberships"] }
```

`created`는 계정이 만든 리스트를, `memberships`는 계정이 속해 있는 리스트를
나열합니다. 리스트 1개가 행 1개입니다. 행에는 `createdList` 또는
`listMembership`인 `resultType`, 사용자 아이디가 들어간 `sourceTarget` & `id`,
`name`, `description`, `memberCount`, `subscriberCount`, `createdAt`,
`bannerUrl` & `owner` 프로필이 들어 있습니다. X는 비공개 리스트를 소유자에게만
보여 주므로 비공개 리스트는 빠집니다.

계정마다 만든 리스트가 속해 있는 리스트보다 먼저 나옵니다. 이 Actor는 계정을
동시에 읽으므로 서로 다른 계정의 행은 읽히는 순서대로 도착합니다.
`sourceTarget`으로 묶으세요.

행 1개는 계정 1개 & 리스트 1개입니다. 입력한 계정 2개가 함께 가진 리스트는
계정마다 1개씩, 행 2개가 됩니다. 각 행에 요금이 부과됩니다.
`dedupeAcrossTargets`는 이런 행을 제거하지 않습니다.

예시는 샘플 값입니다. 실제 결과는 실시간 데이터를 따릅니다. 리스트 상세 정보
행은 다음과 같습니다.

```json
{
  "resultType": "list",
  "sourceTarget": "4143408",
  "id": "4143408",
  "name": "NASA Centers",
  "description": "NASA has 10 centers http://www.nasa.gov/about/sites",
  "memberCount": 11,
  "subscriberCount": 859,
  "createdAt": "2009-12-02T22:41:02.000Z",
  "owner": { "username": "NASA", "name": "NASA" }
}
```

리스트 멤버 행은 다음과 같습니다.

```json
{
  "resultType": "listMember",
  "sourceTarget": "1748648376080666720",
  "username": "sample_user",
  "name": "Sample User",
  "followers": 1200,
  "verified": false
}
```

검색어로 찾은 `list` 행은 다음과 같습니다.

```json
{
  "resultType": "list",
  "sourceTarget": "space news",
  "id": "1000000000000000001",
  "name": "Sample Space News",
  "description": "Sample accounts that post space news.",
  "url": "https://x.com/i/lists/1000000000000000001",
  "memberCount": 35,
  "subscriberCount": 76,
  "owner": { "username": "sample_user", "name": "Sample User" }
}
```

## X 리스트 스크랩 비용은 얼마인가요?

모든 Apify 요금제에서 전달된 행 1개당 $0.00015입니다. Apify 플랫폼 사용료는
Apify가 따로 청구합니다.

- 전달된 데이터 행 1개마다 한 번 과금합니다. 진단은 `diagnostics`에서 무료로
  제공합니다.
- 시작, 리스트, 리소스 요금이 없습니다.
- 과금 전에 중복을 제거합니다.

## 제한 & 복구

Xquik의 X List Scraper는 한 실행에서 여러 리스트 & 리소스를 읽습니다. Apify가
실행을 다시 시작해도 전달된 행 & 진행 상황은 유지됩니다. 이 Actor는 자체 시간
제한을 두지 않습니다.

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
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper)는 게시물 아래의
  답글(댓글) & 대화 전체를 25개 이상의 필터로 스크랩합니다. 게시물 아래의 토론이
  필요할 때 사용하세요. 행당 $0.00015부터입니다.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper)는 게시물
  URL이나 ID로 답글, 인용, 재게시한 사람 & 스레드를 대량으로 스크랩합니다. 누가
  게시물에 반응했는지 측정할 때 사용하세요. 행당 $0.00015부터입니다.
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper)는
  게시물을 인용한 게시물을 텍스트, 미디어, 수치, 작성자 & 11개의 필터와 함께
  스크랩합니다. 누가 게시물을 인용했고 무엇을 말했는지 살펴볼 때 사용하세요.
  게시물당 $0.00015부터입니다.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper)는 팔로워,
  팔로잉, 리스트 멤버, 구독자 & 커뮤니티 멤버를 프로필 행으로 스크랩합니다.
  오디언스나 멤버 목록이 필요할 때 사용하세요. 프로필당 $0.00015부터입니다.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper)는
  사용자 아이디, 자기소개 & 위치로 사용자를 검색하며 팔로워, 인증, 계정 연령 &
  위치 필터를 지원합니다. 검색으로 계정 목록을 만들 때 사용하세요. 프로필당
  $0.00015부터입니다.
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper)는
  X의 "Account based in"(계정 기반 위치) 라벨, X에 연결된 방식 & 사용자 아이디
  변경 내역으로 계정이 어디에 기반을 두고 있는지 확인합니다. 계정의 기반 위치를
  검증할 때 사용하세요. 계정당 $0.00015부터입니다.
- [X Email Scraper](https://apify.com/xquik/x-email-scraper)는 사용자 아이디,
  팔로워 또는 사용자 검색에서 계정이 프로필에 공개한 이메일, 전화번호 & 링크를
  가져옵니다. 프로필이 공개한 이메일이 필요할 때 사용하세요. 프로필당
  $0.00015부터입니다.
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
  AI로 강세, 약세, 중립, 혼조 입장과 콘텐츠 유형, 확신도 & 자산 관련성을
  라벨링합니다. 주식, 암호화폐, 트레이딩 이야기를 지켜볼 때 사용하세요. 분석한
  게시물당 $0.0003부터입니다.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)는
  AI로 뉴스 게시물을 형식, 출처 표기 & 주제 관련성에 따라 라벨링합니다. 보도와
  논평을 구분할 때 사용하세요. 분석한 게시물당 $0.0003부터입니다.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)는
  직접 만든 카테고리, 점수 & 예/아니오 질문에 AI로 게시물마다 답합니다. 기본
  분석이 원하는 라벨과 맞지 않을 때 사용하세요. 분석한 게시물당
  $0.0003부터입니다.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)는
  AI의 특성 답변 8개로 게시물마다 0에서 100까지의 Viral Score & 판정을
  추정합니다. 게시물이 왜 퍼지거나 묻히는지 분석할 때 사용하세요. 분석한
  게시물당 $0.0003부터입니다.

## 자주 묻는 질문

자주 묻는 질문에 먼저 답하고, 이어서 도움받을 곳을 안내합니다.

### X API 키나 로그인이 필요한가요?

아니요. Xquik의 X List Scraper는 X API 키, 로그인, 자격 증명이 모두 필요
없습니다.

### X 리스트를 스크랩해도 합법인가요?

Xquik의 X List Scraper는 공개 X 필드를 요청합니다. 결과에는 개인정보가 들어 있을
수 있습니다. 적법한 목적인지 확인하고 관련 개인정보 보호 규정을 따르세요.
확실하지 않으면 자격을 갖춘 법률 전문가에게 문의하세요.

### 실행 결과가 비어 있는 이유는 무엇인가요?

먼저 무료 `diagnostics` 출력을 여세요. 결과가 없는 실행은 상태 메시지에서 대상 &
필터를 확인하라고 안내합니다. `stopCauses`는 원인마다 따라 할 `nextAction`을
알려 줍니다. 읽을 수 없는 입력이 있으면 실행이 하나씩 나열하고 해결 방법을 알려
줍니다.

### API, 스케줄 & 연동을 사용할 수 있나요?

네. 공개 태스크 50개나 Xquik REST API 중에서 고르세요.
[API 탭](https://apify.com/xquik/x-list-scraper/api)에 Python, JavaScript & cURL
예시가 있습니다. Apify [스케줄](https://docs.apify.com/platform/schedules)로
Xquik의 X List Scraper를 cron 일정에 맞춰 실행할 수 있습니다. 에이전트는
[Apify MCP](https://docs.apify.com/platform/integrations/mcp)를 사용합니다. 이전
빌드가 꼭 필요하지 않다면 `latest`를 사용하세요.

### 도움은 어디서 받을 수 있나요?

Actor 페이지에서 이슈를 열거나 실행 ID와 함께 support@xquik.com으로 문의하세요.
키-값 저장소의 무료 진단이 결과가 없거나, 일부만 나왔거나, 중단된 실행의 원인을
설명합니다.

### 맞춤 솔루션을 받을 수 있나요?

네. [xquik.com](https://xquik.com)을 방문하거나
[API 문서](https://docs.xquik.com/introduction)를 읽어 보세요. 대시보드, API,
MCP 서버 & 웹훅 안내가 있습니다.
