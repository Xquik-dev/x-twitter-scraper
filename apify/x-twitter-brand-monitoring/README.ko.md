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
스크레이퍼 서비스입니다. X (Twitter) Brand Monitoring은 관련성, 감정 & 고객
경험 답변으로 브랜드 언급을 추적합니다. 다른 모든 Apify Actor는 필터링이나
중복 제거 전에 요금을 부과합니다. Xquik은 전달되고, 고유하며, 필터에 맞는
결과에만 요금을 부과합니다.

AI 비용은 트윗당 가격에 포함되어 있습니다. AI 제공업체에 비용을 내거나 토큰을 구매하거나 키를 준비할 필요가 없습니다.

X(Twitter)에서 브랜드 언급을 모니터링하고 실행 간 감정 변화를 추적하세요.
**X (Twitter) Brand Monitoring**는 일치하는 모든 트윗을
수집하고, 각 게시물에 AI 기반 관련성, 감정, 고객 경험 답변을 추가하며, 이전
데이터셋과 답변을 비교해 무엇이 바뀌었는지 보여줍니다. 원본 트윗 데이터는
모든 행에 남아 있으므로 내보내기, 검토, 후속 분석에 재스크랩이 필요하지
않습니다.

브랜드, 제품 라인, 캠페인을 불만, 칭찬, 구매 문의에 대해 지켜보고, 집계
점수가 아니라 실제 게시물로 지원 & 마케팅 팀에게 브리핑하며, 고객이 여러분에
대해 이야기하는 방식을 실행별로 기록하는 데 사용하세요.

- **소스 트윗의 모든 필드**가 답변 옆에 남아 있습니다: 텍스트, 작성자, 개수,
  미디어, 링크, 인용 & 답글이 달린 게시물.
- **타입이 지정된 답변**: 관련성 확률, 확률이 있는 감정 카테고리, 고객
  경험 카테고리.
- 확률의 노이즈가 아닌 **판단** 기준으로 이루어지는 실행 간 **변화
  추적**.
- **필터 우선 과금**: 고유하고 필터에 일치하며 분석에 성공한 트윗만
  과금됩니다.

## X에서 브랜드를 모니터링하는 방법

1. 검색어(예: `"Acme headphones" lang:en`), 프로필 핸들, 트윗 URL, 트윗
   ID를 추가하세요.
2. `maxItems`와 작업에 필요한 추출 필터(예: 날짜 경계, 최소 좋아요, 답글
   제외)를 설정하세요.
3. 브랜드 이름 & 별칭을 `analysis.targets`에 넣고 `analysis.context`에
   브랜드를 설명하세요.
4. Actor를 실행한 뒤 다음 비교를 위해 데이터셋 ID를 보관하세요.
5. 다음 실행에서는 해당 ID로 `monitor.baselineDatasetId`를 추가하세요.
   답변을 비교할 수 있도록 질문, 대상, 맥락, 맥락 한도는 바꾸지 마세요.

```json
{
  "searchTerms": ["\"Acme headphones\" lang:en"],
  "maxItems": 100,
  "analysis": {
    "targets": [{ "name": "Acme", "aliases": ["Acme headphones"] }],
    "context": "Consumer headphones & customer service."
  },
  "monitor": {
    "baselineDatasetId": "YOUR_PREVIOUS_DATASET_ID",
    "maxBaselineRows": 100000
  }
}
```

대상은 분류를 안내합니다. 검색 쿼리를 만들거나 관련 없는 트윗을 자동으로
제거하지는 않으므로, 리서치에 맞는 검색어 & 필터를 선택하세요.

### 모니터가 답하는 것

| 질문             | 답변                                          |
| ---------------- | ---------------------------------------------- |
| 브랜드 관련성    | 트윗이 여러분의 대상을 다룰 확률                |
| 감정             | 긍정, 부정, 혼조, 중립 또는 불명확              |
| 고객 경험        | 고객, 잠재 고객, 관찰자 또는 불명확             |

애매한 동명 이의어를 검토하려면 관련성 확률을 사용하세요. 감정은 대상에
대한 작성자의 표현된 태도를 설명합니다.

### 비교는 어떻게 이루어지나요

| 비교 상태              | 의미                                                   |
| ----------------------- | -------------------------------------------------------- |
| `first_run`             | 기준선이 제공되지 않음                                  |
| `new_to_baseline`       | 이 트윗 ID가 기준선에 없었음                            |
| `unchanged`             | 비교 가능한 모든 판단이 일치함                          |
| `changed`               | 판단 1개 이상이 다름                                    |
| `not_comparable`        | 필요한 메타데이터, ID, 일치 설정이 누락됨               |
| `analysis_unavailable`  | 이 트윗에 성공한 분석이 없음                            |

답변은 판단 기준으로 비교됩니다. `choice` 답변은 카테고리로, `score`
답변은 가장 가까운 수준으로, `probability` 답변은 0.5 기준의 예/아니오
판단으로 비교됩니다. 이전 카테고리의 확률이 0.4 아래로 떨어지거나, 점수가
최소 0.6 수준 이동하거나, 예/아니오 확률이 임계값에서 최소 0.1 벗어날
때만 명확히 변경된 것으로 집계됩니다. 실행 간의 근소한 흔들림은 변경되지
않은 것으로 유지됩니다. 동일한 판단을 유지하는 변동은 `unchanged`로
남으므로 실행 간 모델 편차가 보고서를 채우지 않습니다. `changes`는 변경된
각 질문을 `previous`와 `current` 판단과 함께 나열합니다. 변화는 모델 편차,
새로운 맥락, 편집된 소스 데이터를 반영할 수 있으며 사실이 바뀌었다는
증거는 아니고, 트윗이 없다고 해서 삭제되었다는 증거도 아닙니다.

기준선 제한은 기본적으로 100,000행입니다. 중복된 트윗 ID, 로딩 실패,
데이터셋 크기 변경은 수집 전에 비교를 중단시키며, 절대 빈 기준선이 되지
않습니다.

## 가격

AI 비용은 트윗당 가격에 포함되어 있습니다. AI 제공업체에 비용을 내거나 토큰을 구매하거나 키를 준비할 필요가 없습니다.

성공적으로 분석된 트윗당 $0.0003부터이며 시작 요금은 없습니다. 수집이
포함되며, 문서화된 분석 허용량은 질문 8개, 질문 정의당 8,000바이트, 트윗당
맥락 12,000바이트입니다. 추출 필터 & 중복 제거는 분석 전에 실행되므로
필터링되어 제외되거나 중복된 행은 분석되거나 과금되지 않습니다. 실패하거나
건너뛴 분석과 진단 행에는 결과 요금이 없습니다. Apify 플랫폼 사용량(컴퓨팅,
저장, 전송)은 Apify가 여러분 요금제의 요율로 별도로 청구하며 Pricing 탭에
표시됩니다.

## 입력 & 출력 예시

위 입력은 바로 복사해 사용할 수 있습니다. 출력 행은 다음과 같습니다(축약됨).

```json
{
  "tweet": { "id": "2100344867507327087", "text": "…", "likeCount": 6409 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      { "questionId": "relevance", "type": "probability", "probability": 0.97 },
      {
        "questionId": "sentiment",
        "type": "choice",
        "value": "neutral",
        "confidence": 0.88
      },
      {
        "questionId": "experience",
        "type": "choice",
        "value": "observer",
        "confidence": 0.69
      }
    ]
  },
  "monitor": { "status": "unchanged", "changedQuestionIds": [], "changes": [] }
}
```

각 결과에는 `tweet`, `analysis`, `monitor`가 포함됩니다. 답변에는 유형,
질문 버전, 사용 가능한 확률이 포함됩니다. 인용, 답글, 작성자, 미디어 맥락이
누락된 경우 `analysis.contextAvailability` 아래에 명시적으로 표시됩니다.
실패하거나 건너뛴 분석은 수집된 트윗을 빈 답변 목록과 `reason`과 함께
유지합니다. 키-값 저장소의 무료 진단은 잘못된 입력, 누락된 결과, 중단된
수집을 설명하며, 실행 보고서는 수집된 행, 과금된 분석, 보류 중인 요금을
구분합니다.

## 실행 요약 & 플랫 답변

각 실행은 키-값 저장소에 `analysis-summary` 레코드를 작성하고 실행
보고서의 `results.analysisSummary` 아래에 이를 반복합니다. 분석된 행, 실패한
행, 건너뛴 행을 집계하고, 참여도를 합산하며, 모든 질문을 요약합니다.
`targets`는 브랜드나 별칭별로 언급 수, 관심 점유율, 참여도를 보고하며, 각
항목의 `top`은 답변 카테고리별로 가장 많이 참여된 언급 3개를 나열해 모든
브랜드의 가장 강한 부정적 & 긍정적 언급을 알림용으로 바로 사용할 수
있습니다. `sentiment` 블록은 `top` 아래에 가장 많이 참여된 긍정 & 부정
언급 3개를 알림용으로 나열하며, `relevance`는 브랜드에 관한 언급 수를
집계합니다. 숫자는 소수점 4자리로 반올림되며, 빈 실행은 0 카운트와
`null` 평균을 보고합니다. 각 `targets` 항목에는 해당 브랜드를 언급한
트윗 사이의 답변 분포인 `choices`도 있으며, `monitor.changedRows`는
기준선 이후 판단이 바뀐 트윗을 나열해 웹훅이나 알림에 바로 사용할 수
있습니다. 모든 행에는 링크된 호스트 이름인 `sourceDomains`도 나열되며,
`monitor.baselineDatasetId`가 설정된 경우 요약의 `monitor` 블록은 비교
상태를 집계하고 변경된 행을 최대 50개까지 나열합니다.

모든 결과 행에는 질문 ID를 선택된 카테고리, 점수, 확률에 매핑하는 플랫
맵인 `answers`도 포함됩니다. `Flat answers` 데이터셋 뷰와 CSV나 Excel
내보내기는 트윗 옆에 질문당 하나의 열을 보여주므로 스프레드시트에서 JSON을
파싱할 필요가 없습니다. 실패하거나 건너뛴 행은 빈 맵을 가집니다.

## 태스크 예시

50개의 공개 태스크 중에서 선택하세요. 각 태스크는 제한된 `maxItems`, 미리
준비된 대상 & 맥락, Overview 데이터셋 뷰가 포함된 실제 영어 검색으로
시작합니다. 실행하기 전에 검색이나 대상을 편집하세요.

- [Monitor Nike brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-nike-brand-mentions-on-x)
- [Monitor Starbucks brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-starbucks-brand-mentions-on-x)
- [Monitor Tesla brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-tesla-brand-mentions-on-x)
- [Monitor Spotify brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-spotify-brand-mentions-on-x)
- [Monitor Netflix brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-netflix-brand-mentions-on-x)
- [Monitor Airbnb brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-airbnb-brand-mentions-on-x)
- [Monitor Uber brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-uber-brand-mentions-on-x)
- [Monitor Peloton brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-peloton-brand-mentions-on-x)
- [Monitor Shopify brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-shopify-brand-mentions-on-x)
- [Monitor Notion brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-notion-brand-mentions-on-x)
- [Monitor Duolingo brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-duolingo-brand-mentions-on-x)
- [Monitor Lululemon brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-lululemon-brand-mentions-on-x)

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
- [X Tweet Sentiment Analysis](https://apify.com/xquik/x-tweet-sentiment-analysis):
  AI로 모든 트윗에 태도, 강도 & 비꼬는 표현 가능성을 라벨링합니다. 어떤
  주제든 전반적인 감정이 필요할 때 사용하세요. 분석된 트윗당 $0.0003부터.
- [X (Twitter) Stock & Crypto Signal](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  AI로 강세, 약세, 중립 또는 혼조 입장, 콘텐츠 유형, 확신도 & 자산 관련성을
  라벨링합니다. 주식, 암호화폐 또는 트레이딩 이야기를 팔로우할 때 사용하세요.
  분석된 트윗당 $0.0003부터.
- [X (Twitter) News Monitor with AI](https://apify.com/xquik/x-twitter-news-monitor):
  AI로 뉴스 게시물을 형식, 출처 표기 & 주제 관련성으로 라벨링합니다. 보도와
  논평을 구분할 때 사용하세요. 분석된 트윗당 $0.0003부터.
- [X Tweet Classifier with AI](https://apify.com/xquik/x-twitter-tweet-classifier):
  AI로 모든 트윗에 대해 자신만의 카테고리, 점수 & 예/아니오 질문에 답합니다.
  미리 준비된 분석이 라벨에 맞지 않을 때 사용하세요. 분석된 트윗당
  $0.0003부터.

## FAQ & 지원

### 제 자신의 질문을 사용할 수 있나요?

예. 커스텀 `analysis.questions`가 기본값을 대체합니다: 1-8개의 `choice`,
`score`, `probability` 질문. Choice 질문은 2-255개의 카테고리를
받아들이며, score는 최소 2개의 순서가 있는 수준을 사용합니다. 비교하려는
실행 전체에서 동일한 질문을 유지하세요.

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
