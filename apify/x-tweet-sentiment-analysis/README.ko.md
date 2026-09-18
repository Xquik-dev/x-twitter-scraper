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

# X Tweet Sentiment Analysis with AI | $0.3/1K Tweets

<table align="center"><tr><td align="center">
<a href="https://youtu.be/4UOSpoOoC3Y?t=367"><img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" width="720" alt="Framer가 Xquik MCP를 코딩 에이전트에 연결하는 모습"></a><br>
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">Framer가 Xquik 스크레이퍼를 Claude Code, Codex, Cursor 등과 함께 사용하는 방법을 6:07부터 보세요.</a>
</td></tr></table>

Xquik은 가장 완전한 X 데이터를 보유한, 세계에서 가장 빠르고 저렴한 X(Twitter)
스크레이퍼 서비스입니다. X Tweet Sentiment Analysis는 모든 트윗에 태도, 강도 &
비꼬는 표현 가능성을 추가합니다. 다른 모든 Apify Actor는 필터링이나 중복 제거
전에 요금을 부과합니다. Xquik은 전달되고, 고유하며, 필터에 맞는 결과에만 요금을
부과합니다.

X(Twitter) 게시물 뒤에 담긴 태도를 측정하면서 원본 트윗 데이터는 그대로
유지하세요. **X Tweet Sentiment Analysis with AI**는 일치하는 트윗을 수집한 뒤
모든 게시물에 AI 기반 감정 카테고리, 강도 수준, 비꼬는 표현 가능성을
추가합니다. 출시, 캠페인, 에피소드, 공인에 대한 반응을 추적하고, 시끄러운
반응과 스쳐 지나가는 언급을 구분하세요.

- 감사할 수 없는 집계 점수가 아니라, **게시물별 감정**입니다.
- **강도**는 격정적인 게시물과 온건한 게시물을 구분합니다.
- **비꼬는 표현 가능성**은 문자 그대로의 표현이 태도와 모순되는 게시물을
  표시합니다.
- 트윗이 노출하는 모든 필드가 담긴 **완전한 소스 레코드**.

## 트윗 감정을 분석하는 방법

1. 검색어, 프로필 핸들, 트윗 URL, 트윗 ID를 추가하세요.
2. `maxItems`와 작업에 필요한 추출 필터를 설정하세요.
3. `analysis.targets`를 비워두면 각 게시물을 자체 주제로 판단하고, 이름 &
   별칭을 추가하면 브랜드, 제품, 인물에 태도를 집중시킵니다.
4. Actor를 실행하고 데이터셋을 열어보세요.

```json
{
  "searchTerms": ["\"season finale\" lang:en"],
  "maxItems": 200,
  "analysis": { "context": "Reactions to the show, not spoilers." }
}
```

### Actor가 답하는 것

| 질문   | 답변                                                          |
| ------ | -------------------------------------------------------------- |
| 감정   | 긍정, 부정, 혼조, 중립 또는 불명확                              |
| 강도   | 0 스쳐 지나가는 언급, 1 명확한 태도, 2 격정적인 표현            |
| 비꼬기 | 문자 그대로의 표현이 태도와 모순될 확률                         |

대상이 제공되면 감정은 대상에 대한 태도를 판단하고 제공된 인용이나 답글
맥락을 사용합니다. 그렇지 않으면 게시물의 주된 주제를 판단합니다.

## 가격

성공적으로 분석된 트윗당 $0.0003부터이며 시작 요금은 없습니다. 수집이
포함되며, 문서화된 분석 허용량은 질문 8개, 질문 정의당 8,000바이트, 트윗당
맥락 12,000바이트입니다. 추출 필터 & 중복 제거는 분석 전에 실행되므로
필터링되어 제외되거나 중복된 행은 분석되거나 과금되지 않습니다. 실패하거나
건너뛴 분석과 진단 행에는 결과 요금이 없습니다. Apify 플랫폼 사용량은
Apify가 별도로 청구하며 Pricing 탭에 표시됩니다.

## 입력 & 출력 예시

위 입력은 바로 복사해 사용할 수 있습니다. 출력 행은 다음과 같습니다(축약됨).

```json
{
  "tweet": { "id": "2100493544842494265", "text": "…", "likeCount": 12 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      {
        "questionId": "sentiment",
        "type": "choice",
        "value": "positive",
        "confidence": 0.91
      },
      {
        "questionId": "intensity",
        "type": "score",
        "value": 2,
        "confidence": 0.8
      },
      { "questionId": "sarcasm", "type": "probability", "probability": 0.04 }
    ]
  }
}
```

각 결과에는 `tweet`과 `analysis`가 포함됩니다. 답변에는 유형, 질문 버전,
사용 가능한 확률이 포함됩니다. 실패하거나 건너뛴 분석은 수집된 트윗을 빈
답변 목록과 `reason`과 함께 유지합니다. 키-값 저장소의 무료 진단은 잘못된
입력, 누락된 결과, 중단된 수집을 설명하며, 실행 보고서는 수집된 행, 과금된
분석, 보류 중인 요금을 구분합니다.

## 실행 요약 & 플랫 답변

각 실행은 키-값 저장소에 `analysis-summary` 레코드를 작성하고 실행
보고서의 `results.analysisSummary` 아래에 이를 반복합니다. 분석된 행, 실패한
행, 건너뛴 행을 집계하고, 참여도를 합산하며, 모든 질문을 요약합니다.
`sentiment` 분포는 각 태도에 속하는 트윗 수를 보여주며,
`engagementShares`에서는 모든 트윗을 좋아요, 리트윗, 답글, 인용으로
가중했을 때 분포가 어떻게 바뀌는지 보여줍니다. `top`은 태도별로 가장 많이
참여된 트윗 3개를 나열합니다. 숫자는 소수점 4자리로 반올림되며, 빈 실행은
0 카운트와 `null` 평균을 보고합니다. 모든 행에는 링크된 호스트 이름인
`sourceDomains`와 텍스트에서 발견된 `$NVDA` 같은 `cashtags`도 나열되며,
`monitor.baselineDatasetId`가 설정된 경우 요약의 `monitor` 블록은 비교
상태를 집계하고 변경된 행을 최대 50개까지 나열합니다.

모든 결과 행에는 질문 ID를 선택된 카테고리, 점수, 확률에 매핑하는 플랫
맵인 `answers`도 포함됩니다. `Flat answers` 데이터셋 뷰와 CSV나 Excel
내보내기는 트윗 옆에 질문당 하나의 열을 보여주므로 스프레드시트에서 JSON을
파싱할 필요가 없습니다. 실패하거나 건너뛴 행은 빈 맵을 가집니다.

## 이전 실행과 비교하기

동일한 분석 설정으로 완료된 이전 실행의 데이터셋 ID인
`monitor.baselineDatasetId`를 전달하면 모든 행이 `monitor` 객체를 얻습니다.
기준선이 없으면 `first_run`, 이전 실행에 없던 트윗이면
`new_to_baseline`, 이전 실행에 있던 트윗이면 `unchanged`나 `changed`가
되며, `changes`는 `previous`에서 `current`로 바뀐 각 감정, 강도 수준,
비꼬기 판단을 나열합니다. 판단은 카테고리, 반올림된 점수 수준, 또는 0.5
기준의 예/아니오로 비교되며, 이전 카테고리의 확률이 0.4 아래로
떨어지거나, 점수가 최소 0.6 수준 이동하거나, 예/아니오 확률이 임계값에서
최소 0.1 벗어날 때만 명확히 변경된 것으로 집계됩니다. 실행 간의 근소한
흔들림은 변경되지 않은 것으로 유지됩니다. `maxBaselineRows`(기본값
100,000)를 초과하거나 다른 설정에서 나온 기준선은 수집 전에 실행을
중단시키고 진단 행을 남깁니다.

## 태스크 예시

50개의 공개 태스크 중에서 선택하세요. 각 태스크는 제한된 `maxItems`, 미리
준비된 대상 & 맥락, Overview 데이터셋 뷰가 포함된 실제 영어 검색으로
시작합니다. 실행하기 전에 검색이나 대상을 편집하세요.

- [Sentiment of season finale reactions](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-season-finale-reactions)
- [Sentiment of iPhone launch posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-iphone-launch-posts)
- [Sentiment of the Super Bowl halftime show](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-super-bowl-halftime-show)
- [Sentiment toward a new electric car model](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-new-electric-car)
- [Sentiment of Marvel movie audiences](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-marvel-movie-audiences)
- [Sentiment of Taylor Swift album reactions](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-taylor-swift-album-reactions)
- [Sentiment of a video game launch](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-video-game-launch)
- [Sentiment about remote work](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-remote-work)
- [Sentiment of airline passengers](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-airline-passengers)
- [Sentiment of college football fans](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-college-football-fans)
- [Sentiment about interest rate decisions](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-interest-rates)
- [Sentiment toward electric scooters](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-electric-scooters)

나머지 태스크는 Actor 페이지에서 더 많은 브랜드, 주제 & 시장을 다룹니다.

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

## FAQ & 지원

### 제 자신의 질문을 사용할 수 있나요?

예. 커스텀 `analysis.questions`가 기본값을 대체합니다: 2-255개의 카테고리를
가진 `choice`, `score`, `probability` 질문 1-8개, 또는 최소 2개의 순서가
있는 수준.

### 왜 어떤 행은 `analysis.status`가 `failed`나 `skipped`로 돌아왔나요?

트윗은 수집되어 전달되었지만 AI 기반 분석이 완료되지 않았습니다.
`analysis.reason`은 트윗과 그 맥락이 `maxContextBytes`를 초과할 때의
`context_limit`이나 재시도 후의 `service_unavailable` 같은 원인을
나타냅니다. 이런 행에는 결과 요금이 없습니다. `maxContextBytes`를 최대
12,000까지 높이거나 해당 ID를 다시 실행하세요.

### 분석이 사실을 검증하나요?

아니요. 답변은 게시물이 표현하는 내용과 그것이 어떻게 프레이밍되었는지를
설명합니다. 확률은 진실이 아니라 모델의 확신도를 나타냅니다. 중요한 분류는
모든 행이 보존하는 원본 트윗과 대조해 검토하세요.

### 어떤 언어가 작동하나요?

추출은 X가 제공하는 모든 언어를 지원합니다. 분석은 먼저 영어 고객
시나리오에서 검증되었으며, 다른 지원 언어도 동일한 구조로 답변을
반환하고, `unclear` 카테고리와 확률을 통해 불확실성이 명시적으로
드러납니다.

### 비용을 어떻게 제한하나요?

필터, 중복 제거 & `maxItems`는 분석 전에 실행되므로 고유하고 필터에
일치하는 트윗만 분석되고 과금됩니다. 정확한 검색 연산자, 날짜 경계, 참여
하한선을 사용하고, 답변 품질을 확인하기 위해 작은 `maxItems`로
시작하세요.

### 도움은 어디서 받나요?

Actor 페이지에서 이슈를 열거나 실행 ID와 함께 support@xquik.com으로
문의하세요. 키-값 저장소의 무료 진단은 비어 있거나, 부분적이거나, 중단된
실행을 설명합니다.

Xquik은 독립적인 제3자 서비스입니다. X Corp와 제휴 관계가 없습니다. "Twitter"와
"X"는 X Corp의 상표입니다.
