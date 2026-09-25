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
스크레이퍼 서비스입니다. X Trends Scraper는 순위, 볼륨 & 쿼리와 함께 위치별
실시간 트렌드를 수집합니다. 다른 모든 Apify Actor는 필터링이나 중복 제거 전에
요금을 부과합니다. Xquik은 전달되고, 고유하며, 필터에 맞는 결과에만 요금을
부과합니다.

하나의 실행에서 여러 위치의 현재 Twitter 트렌드를 스크랩하세요. 순위, 주제,
쿼리, 트윗 볼륨, 검색 URL, WOEID, 원본 위치를 내보냅니다. X API 키나 로그인이
필요 없습니다.

## 위치 & 트렌드 데이터

- 여러 국가나 WOEID를 동시에 실행하세요.
- 위치당 최대 50개의 현재 트렌드를 반환합니다.
- 모든 행에서 위치 귀속을 보존합니다.
- 해시태그 행과 트윗 볼륨 사용 가능 여부를 라벨링합니다.
- 과금 전에 동등한 입력을 중복 제거합니다.
- Apify 데이터셋을 통해 JSON, CSV, Excel, XML, RSS로 내보냅니다.
- Apify 마이그레이션 후 저장된 상태에서 재개합니다.

## 입력

위치 이름, 숫자 WOEID, 또는 둘 다 사용하세요.

```json
{
  "locations": ["Worldwide", "United States", "Turkey"],
  "maxTrendsPerLocation": 50,
  "maxItems": 150
}
```

지원되는 단축 표현에는 Worldwide, United States, United Kingdom, Turkey,
Brazil, Canada, France, Germany, India, Indonesia, Japan, Mexico, Australia가
있습니다. 다른 지원 위치에는 `woeids`를 사용하세요.

## 출력

각 트렌드는 `name`, `rank`, `tweetVolume`, `query`, `url`, `woeid`,
`sourceTarget`, `resultType`이 포함된 하나의 데이터셋 행입니다. 누락된 소스
필드는 그대로 비어 있습니다. Actor는 값을 지어내지 않습니다.

## 가격

모든 Apify 요금제는 **전달된 행당 $0.00015**입니다. Apify는 플랫폼 사용량을
별도로 청구합니다.

- 전달된 데이터 행당 1회 과금됩니다. 진단 정보는 `diagnostics`에서 무료입니다.
- 시작, 쿼리, 위치 요금은 없습니다.
- Actor는 과금 전에 중복을 제거합니다.
- Apify 최대 총 비용 설정으로 전달되는 행을 제한할 수 있습니다.

이전 빌드가 필요하지 않다면 `latest`를 사용하세요. 50개의 공개 태스크나 129개의
Xquik REST 작업 중에서 선택하세요. 예시는 샘플 값을 사용합니다. 결과는 실시간
데이터를 반영합니다.

## 복구 & 제한

한 번의 실행으로 여러 지역을 읽을 수 있습니다. 전달된 행 & 진행 상황은 Apify가 실행을 다시 시작해도 유지됩니다. Actor는 자체
시간 제한을 추가하지 않습니다. 설정한 Apify 시간 제한은 지킵니다.

## 추출 미완료

추출이 중단되면 무료 `partial` 진단이 기록됩니다. 사용 가능한 결과는 그대로
유지됩니다. 재시도하기 전에 `availableResults`, `failedTargets`, `retryable`,
`nextAction`을 확인하세요. Actor가 성공적으로 종료되었다는 것은 전달이 확인됐다는
뜻이지, 추출이 완료됐다는 뜻은 아닙니다.

상태 메시지는 실행이 일찍 멈춘 원인을 모두 표시합니다. `stopCauses`는 각 원인을
나열하고, 원인마다 `message`, `retryable` & `nextAction`을 따로 담습니다. 원인은
`target_not_found`, `target_failed`, `pagination_safety_limit` &
`deadline_reached`입니다. 찾을 수 없는 대상은 다른 원인으로 실행이 멈췄을 때만
목록에 들어갑니다. 원인 중 하나라도 재시도할 수 있으면 실행도 `retryable`입니다.

Xquik은 독립적인 제3자 서비스입니다. X Corp와 제휴 관계가 없습니다. "Twitter"와
"X"는 X Corp의 상표입니다.

## 관련 Xquik Actor

모든 Xquik Actor는 동일한 추출 엔진, 필터 우선 과금 & 진단 기능을 공유합니다.
필요한 데이터에 맞는 Actor를 선택하세요.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): 검색, 프로필
  타임라인, 리스트 & 트윗 ID에서 50개 이상의 필터와 플랫 내보내기로 트윗을
  스크랩합니다. 분석 없이 트윗 데이터만 필요할 때 사용하세요. 행당 $0.00015부터.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): 핸들, ID
  또는 URL에서 프로필과 게시물, 답글, 미디어 & 팔로워를 스크랩합니다. 검색이
  아니라 계정에서 시작할 때 사용하세요. 행당 $0.00015부터.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): 게시물 아래의
  답글, 댓글 & 전체 대화를 25개 이상의 필터로 스크랩합니다. 트윗 아래의 토론이
  필요할 때 사용하세요. 행당 $0.00015부터.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): 게시물
  URL이나 ID에 대한 답글, 인용, 리트윗한 사람 & 스레드를
  대량으로 스크랩합니다. 게시물에 참여한 사람을 측정할 때 사용하세요. 행당
  $0.00015부터.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): 팔로워,
  팔로잉, 리스트 멤버, 구독자 & 커뮤니티 멤버를 프로필 행으로 스크랩합니다.
  오디언스나 멤버 목록이 필요할 때 사용하세요. 프로필당 $0.00015부터.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper): 핸들,
  자기소개 & 위치와 팔로워, 인증, 계정 나이 & 위치 필터로 사용자를 검색합니다.
  검색으로 계정 목록을 만들 때 사용하세요. 프로필당 $0.00015부터.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): 리스트 URL이나
  ID에서 리스트 게시물, 멤버 & 팔로워를 스크랩합니다. 큐레이션된 리스트가
  소스를 정의할 때 사용하세요. 행당 $0.00015부터.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): 커뮤니티
  정보, 게시물, 검색, 멤버 & 모더레이터를 스크랩합니다. 소스가 X 커뮤니티일 때
  사용하세요. 행당 $0.00015부터.
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
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  AI로 모든 트윗에 대해 자신만의 카테고리, 점수 & 예/아니오 질문에 답합니다.
  미리 준비된 분석이 라벨에 맞지 않을 때 사용하세요. 분석된 트윗당
  $0.0003부터.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer):
  AI의 특성 답변 8개로 모든 트윗의 0에서 100까지 Viral Score & 판정을
  추정합니다. 트윗이 왜 퍼지거나 묻히는지 연구할 때 사용하세요. 분석된 트윗당
  $0.0003부터.
