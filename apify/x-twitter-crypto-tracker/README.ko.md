[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · **한국어** ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer가 Xquik MCP를 코딩 에이전트에 연결하는 모습](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Framer가 Xquik 스크레이퍼를 Claude Code, Codex, Cursor 등과 함께 사용하는 방법](https://youtu.be/4UOSpoOoC3Y?t=367)을
6:07부터 보세요.

Xquik은 세계에서 가장 빠르고 저렴한 X(Twitter) 스크레이퍼 서비스이며, 가장
완전한 X 데이터를 제공합니다. Xquik의 X (Twitter) Crypto Tracker는 고른 암호화폐
계정 & KOL의 모든 새 트윗을 잡아냅니다. 보통 X에 표시된 뒤 일 초 안에 각각을
잡아냅니다. 다른 Apify Actor는 대부분 필터링이나 중복 제거 전에 요금을
부과합니다. Xquik은 중복되지 않은 결과를 전달했을 때만 요금을 받으며, 이
Actor에서는 모니터가 감시한 시간에만 요금을 받습니다.

암호화폐 계정이나 캐시태그를 붙여 넣고 Start를 클릭하세요. 삭제된 트윗 & 프로필
변경도 오며, 알림은 실행과 실행 사이에 도착합니다. 요금은 **monitor-hour당
$0.0045**입니다. 이벤트 & 알림은 무료이며, Apify 플랫폼 사용료는 Apify가 따로
청구합니다.

> Xquik은 독립적인 제3자 서비스입니다. X Corp와 제휴 관계가 없습니다.
> "Twitter"와 "X"는 X Corp의 상표입니다.

## 암호화폐 Twitter 트래커가 보내는 내용

- 감시하는 암호화폐 계정 & KOL의 모든 새 트윗, 답글, 인용 & 재게시. 보통 X에
  표시된 뒤 일 초 안에 잡아냅니다.
- 삭제된 트윗. 계정이 무엇을 내렸는지 볼 수 있습니다.
- 표시 이름, 사용자 아이디, 자기소개, 프로필 사진, 웹사이트 & 고정된 트윗 같은
  프로필 변경. 이것도 보통 X에 표시된 뒤 일 초 안에 잡아냅니다.
- `followingChanges`를 켜면 각 계정이 팔로우하거나 언팔로우한 계정을 그 계정의
  전체 프로필과 함께 보냅니다.
- 캐시태그, 코인 이름 또는 컨트랙트 주소로 X 최신 검색 결과에 나오는 모든 새
  트윗.
- Telegram, Discord, Slack 또는 모든 HTTPS 웹훅으로 보내는 알림. 모든 이벤트는
  실행 데이터셋 & 이력 데이터셋 1개에도 남습니다.

## 암호화폐 Twitter 계정 추적 방법

모니터링에는 Apify 유료 요금제가 필요합니다.
[요금제를 고른](https://apify.com/pricing?fpr=xquik) 뒤 여기로 돌아와 Try for
free를 누르세요.

1. Apify Console에서 Xquik의 X (Twitter) Crypto Tracker를 여세요.
2. 암호화폐 계정 & KOL을 `twitterHandles`에, 캐시태그, 코인 이름 또는 컨트랙트
   주소를 `searchTerms`에 붙여 넣으세요.
3. `telegram`을 켜거나, Discord 또는 Slack 웹훅 URL을 `webhookUrls`에 붙여
   넣으세요.
4. Start를 클릭하세요. 그 실행에서 모니터링이 시작됩니다.
5. 같은 입력으로 Actor를 매시간 실행하는 스케줄을 추가하세요.

이후 각 실행은 이전 실행 이후 감시한 시간을 청구합니다. 새 이벤트를 데이터셋에
저장하고 빠르게 끝납니다. 24시간 동안 실행이 없는 모니터는 일시 중지됩니다. 그
4시간 전에 알림으로 경고를 받습니다. 다음 실행이 모니터를 재개하고, 미납 시간을
먼저 청구합니다.

## 입력

| 필드                                       | 기능                                                                             |
| ------------------------------------------ | -------------------------------------------------------------------------------- |
| `twitterHandles`                           | @가 있거나 없는 암호화폐 계정 & KOL 또는 `x.com` 프로필 URL, 줄마다 1개.         |
| `searchTerms`                              | 캐시태그, 코인 이름 또는 컨트랙트 주소. X 검색 연산자는 무엇이든 쓸 수 있습니다. |
| `monitorName`                              | 저장된 태스크가 없는 실행에서 이 계정 & 키워드 묶음의 이름을 정합니다.           |
| `newPosts`, `replies`, `quotes`, `reposts` | 새 트윗, 답글, 인용한 트윗 & 재게시. 기본으로 켜져 있습니다.                     |
| `deletedPosts`, `profileChanges`           | 삭제된 트윗 & 프로필 변경. 기본으로 켜져 있습니다.                               |
| `followingChanges`, `followerChanges`      | 팔로우 & 언팔로우, 새 팔로워 & 잃은 팔로워.                                      |
| `liveVideos`                               | 계정의 라이브 동영상 & 스페이스.                                                 |
| `eventTypes`                               | 체크박스를 대신하는 정확한 이벤트 유형.                                          |
| `webhookUrls`                              | HTTPS URL, 줄마다 1개. Actor가 Slack & Discord URL을 알아봅니다.                 |
| `telegram`                                 | 실행이 알려 주는 링크로 Telegram에 알림을 보냅니다.                              |
| `since`                                    | 최근 30일 안의 날짜 이후 보관된 이벤트를 1번 저장합니다.                         |
| `stop`                                     | 모니터를 멈추고 알림을 끕니다.                                                   |

입력 1개에는 계정 & 키워드를 합쳐서 100개까지 넣을 수 있습니다. 키워드는 트윗
이벤트만 보냅니다. 구문을 따옴표로 감싸면 정확히 일치하는 트윗을 찾습니다.
Telegram에는 사용자 아이디나 채팅 ID가 필요 없습니다. 실행 상태에 링크가
나옵니다. 링크를 열고 Start를 누르면 그 채팅으로 알림이 옵니다.

아래 입력은 바로 복사해 쓸 수 있습니다.

```json
{ "twitterHandles": ["VitalikButerin", "cz_binance"], "telegram": true }
```

```json
{
  "searchTerms": ["$ETH", "$SOL"],
  "webhookUrls": "https://discord.com/api/webhooks/000/XXXX",
  "monitorName": "coin-tweets"
}
```

## 출력

각 실행은 출력 4개를 돌려줍니다.

- **상태 페이지**, 즉 `STATUS.html` 레코드. 모니터가 감시 중인지, 버튼이 달린
  다음 단계 1개, 실행이 저장하고 청구한 내용, 대상 & 각 알림 수신처를 보여
  줍니다. Output 탭에 표시됩니다.
- **상태 레코드**, 즉 `STATUS` 레코드. 같은 상태를 JSON으로 담습니다.
- **새 이벤트**, 즉 실행의 데이터셋. 새 이벤트가 오래된 순서로 들어 있고,
  마지막에 상태 행 1개가 있습니다.
- **진단**. 확인할 일이 있을 때만 기록합니다.

이벤트 행은 Xquik REST API가 제공하는 이벤트 그대로이며, 모든 필드를 담습니다.
상태 레코드에는 X (Twitter) Crypto Tracker가 보여 주는 대로 `state`, `targets`,
`destinations`, `eventsSaved`, `hoursCharged`, `paidThrough`, `pausesAt`,
`nextStep`, `nextStepAction` & `nextStepUrl`이 들어 있습니다.

계정의 이력 데이터셋은 모니터의 모든 이벤트를 1번씩 보관합니다. 이름은
`x-monitor-`로 시작합니다.

## AI 에이전트용

호출 1번이 API의 전부입니다. 각 호출은 모니터를 시작하거나 업데이트하고, 이전
호출 이후 감시한 시간을 청구하며, 새로운 것만 돌려줍니다. 어떤 호출도 같은
시간을 2번 청구하지 않습니다. 모니터를 시작하거나 업데이트하는 호출은 빠르게
끝나며, Apify MCP가 기다리는 시간 안에 들어옵니다. 중지는 마지막 이벤트를 먼저
모으므로 잠시 걸립니다.

이 입력은 모니터를 시작하거나 이어 갑니다.

```json
{
  "twitterHandles": ["VitalikButerin"],
  "searchTerms": ["$ETH"],
  "monitorName": "agent-demo"
}
```

실행의 데이터셋에는 새 이벤트가 들어 있고, 그다음에 `resultType`이 `status`인 행
1개가 있습니다. 그 행의 `state`는 모니터가 감시 중인지, `nextStep`은 다음에 할
일을 알려 줍니다. 모니터를 확인하려면 같은 입력으로 Actor를 다시 호출하세요.
아무것도 바뀌지 않으며, 이미 감시한 시간만 청구합니다.

모니터가 계속 감시하려면 24시간에 최소 1번 실행이 필요합니다. Apify MCP 서버에는
스케줄 도구가 없으므로 직접 스케줄을 추가할 수 없습니다. `nextStepUrl`의
페이지에서 Apify 스케줄을 추가해 달라고 사용자에게 요청하세요. 그 스케줄이 같은
입력으로 Actor를 매시간 실행합니다. 멈추려면 같은 입력에 `"stop": true`를
넣으세요.

## 암호화폐 Twitter 트래커 비용은 얼마인가요?

모든 Apify 유료 요금제에서 monitor-hour당 $0.0045입니다. 계정 또는 키워드 1개가
모니터 1개입니다. Apify 플랫폼 사용료는 Apify가 따로 청구합니다.

- 계정 1개를 30일 동안 추적하면 약 $3.24입니다.
- KOL 10명을 30일 동안 추적하면 약 $32.40입니다.
- 이벤트 & 알림은 몇 개가 와도 무료입니다.
- 시작 요금이 없습니다. 실행은 이미 감시한 시간만 청구합니다.
- X에 없는 대상은 아무것도 감시하지 않고 비용도 들지 않습니다.
- 실행당 최대 비용이 각 청구의 상한입니다. 상한을 넘는 시간은 다음 실행을
  기다립니다.

매시간 스케줄을 쓰면 Apify 사용량이 결제하는 시간에 비해 작게 유지됩니다. 몇
분마다 실행하면 사용량만 늘고 알림에는 아무 변화가 없습니다. 알림은 어차피 실행
사이에 도착합니다.

모니터링에는 [Apify 유료 요금제](https://apify.com/pricing?fpr=xquik)가
필요합니다. 무료 요금제에서는 실행이 모니터를 시작하지 않고 요금도 청구하지
않습니다. 대신 첫 번째 계정의 최신 트윗 5개를 보여 줍니다.

## 제한 & 복구

- 입력 1개에는 계정 & 키워드를 합쳐서 100개까지 넣을 수 있습니다. 더 필요하면
  태스크 2개를 쓰세요.
- 입력 1개당 웹훅 URL을 최대 10개까지, 그리고 Telegram을 쓸 수 있습니다.
- 이벤트는 30일 동안 보관되므로, 그 기간 안에는 `since`로 다시 저장할 수
  있습니다.
- 일찍 멈춘 실행은 이벤트를 다음 실행에 남깁니다. 잃어버리는 이벤트는 없습니다.
- 각 실행은 무료 상태 행 1개를 기록하므로, 데이터셋이 비는 일이 없습니다.
- Xquik의 모든 모니터 Actor는 시간당 요금이 같습니다. 실행은 어떤 Actor가
  감시했든 모든 모니터의 가장 오래된 미납 시간을 결제합니다.

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

## 자주 묻는 질문

자주 묻는 질문에 먼저 답하고, 이어서 도움받을 곳을 안내합니다.

### X 쿠키, API 키 또는 로그인이 필요한가요?

아니요. Xquik의 X (Twitter) Crypto Tracker는 X 쿠키, API 키, 로그인, 자격 증명이
모두 필요 없습니다. 모든 확인은 Xquik 인프라에서 실행됩니다.

### KOL의 트윗은 얼마나 빨리 도착하나요?

Xquik은 보통 감시하는 계정의 새 트윗, 답글, 인용, 재게시 또는 프로필 변경을 X에
표시된 뒤 일 초 안에 잡아냅니다. 알림은 이벤트가 도착하는 대로 나가며 실행을
기다리지 않습니다.

### 밈 코인 & 컨트랙트 주소도 추적할 수 있나요?

네. 코인의 캐시태그, 이름 또는 컨트랙트 주소를 `searchTerms`에 추가하세요.
그것으로 X 최신 검색 결과에 나오는 모든 새 트윗이 알림으로 도착합니다.

### 삭제된 트윗도 보이나요?

네. `deletedPosts`가 기본으로 켜져 있으므로, 계정이 삭제한 트윗은 알림을
보냅니다.

### 이것은 투자 조언인가요?

아니요. 트래커는 공개 X 이벤트를 일어나는 대로 보냅니다. 금융 조언을 하지 않으며
어떤 코인의 순위도 매기지 않습니다.

### 실행에서 모니터링에 유료 요금제가 필요하다고 나오는 이유는 무엇인가요?

모니터는 실행 사이에도 하루 종일 동작합니다. 그래서 Apify 유료 요금제가
필요합니다. 요금제를 업그레이드한 뒤 같은 입력으로 다시 실행하세요.

### 모니터를 멈추면 어떻게 되나요?

실행이 모든 대상을 멈추고 알림을 끕니다. 그때까지 감시한 시간을 청구합니다.
그다음 최신 이벤트를 잠시 기다려 저장하므로, 놓치는 이벤트가 없습니다. 이미
보관된 이벤트는 30일 동안 계속 읽을 수 있습니다.

### API, 스케줄 & 연동을 사용할 수 있나요?

네. Apify API나 Xquik REST API를 사용하세요.
[API 탭](https://apify.com/xquik/x-twitter-crypto-tracker/api)에 Python,
JavaScript & cURL 예시가 있습니다. Apify
[스케줄](https://docs.apify.com/platform/schedules)로 모니터를 계속 실행할 수
있습니다. 에이전트는
[Apify MCP](https://docs.apify.com/platform/integrations/mcp)를 사용합니다.

### X 계정을 모니터링해도 합법인가요?

Xquik의 X (Twitter) Crypto Tracker는 공개 X 데이터를 요청합니다. 결과에는
개인정보가 들어 있을 수 있습니다. 적법한 목적인지 확인하고 본인에게 적용되는
개인정보 보호 규정을 따르세요. 확실하지 않으면 자격을 갖춘 법률 전문가에게
문의하세요.

### 도움은 어디서 받을 수 있나요?

[Issues 탭](https://apify.com/xquik/x-twitter-crypto-tracker/issues)에서 실행
ID와 함께 이슈를 여세요. 상태 페이지가 모든 실행을 설명하며, 무료 진단은 확인이
필요한 실행을 다룹니다.

### 맞춤 솔루션을 받을 수 있나요?

네. 필요한 내용을
[Issues 탭](https://apify.com/xquik/x-twitter-crypto-tracker/issues)에 적어
주세요. Xquik은 대시보드, REST API, MCP 서버 & 웹훅도 제공합니다. Xquik
웹사이트는 [Apify 프로필](https://apify.com/xquik)에서 찾을 수 있습니다.
