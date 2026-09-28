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
완전한 X 데이터를 제공합니다. Xquik의 X Tweet Viral Score Analyzer는 모든
게시물(트윗)을 평가합니다. Viral Score 추정치 & 판정을 더합니다. 다른 Apify
Actor는 대부분 필터링이나 중복 제거 전에 요금을 부과합니다. Xquik은 필터에 맞고
중복되지 않은 결과를 전달했을 때만 요금을 받습니다. AI 비용은 게시물당 가격에
포함되어 있습니다. AI 계정, 토큰, 키가 필요 없습니다.

게시물이 왜 퍼지거나 묻히는지 알아보고 원본 게시물 데이터는 그대로 보관하세요.
Xquik의 **X Tweet Viral Score Analyzer with AI**는 조건에 맞는 게시물을
수집합니다. AI가 게시물마다 특성 8가지를 평가합니다. 이 Actor는 그 답변을 Viral
Score 추정치 & 판정으로 바꿉니다. 모든 행에 실제 마음에 들어요, 재게시, 답글 &
인용 수가 남습니다. 추정치를 실제 결과와 비교하세요.

- **게시물별 Viral Score.** 버전이 매겨진 고정 규칙으로 0에서 100까지의 점수를
  계산합니다.
- **특성 답변 8개.** 게시물 점수가 높거나 낮은 이유를 보여 줍니다.
- **하드 스톱.** 스팸, 분노 유발, 기계가 쓴 듯한 뻔한 글로 읽히는 게시물의
  점수에 상한을 둡니다.
- **완전한 원본 레코드.** 모든 행에 게시물이 제공하는 필드가 모두 남습니다.

Viral Score는 문구가 얼마나 효과적인지를 추정합니다. 마음에 들어요 수나 조회수를
예측하지 않습니다. X가 게시물 순위를 매기는 방식을 재현하지도 않습니다.

> Xquik은 독립적인 제3자 서비스입니다. X Corp와 제휴 관계가 없습니다.
> "Twitter"와 "X"는 X Corp의 상표입니다.

## 게시물(트윗) 바이럴 점수 확인 방법

1. 검색어, 프로필 사용자 아이디, 게시물 URL 또는 게시물 ID를 추가하세요.
2. `maxItems` & 작업에 필요한 추출 필터를 설정하세요.
3. `analysis.context`에 오디언스를 설명하거나 기본값을 그대로 두세요.
4. 실행을 시작하고 `Viral Score` 데이터셋 뷰를 여세요.

```json
{
  "searchTerms": ["from:NASA -filter:replies -filter:retweets"],
  "maxItems": 150,
  "analysis": { "context": "Space fans & general readers." }
}
```

### Actor가 답하는 질문

| 질문      | 답변                                                   |
| --------- | ------------------------------------------------------ |
| 후킹      | 0 후킹 없음, 1 분명한 도입, 2 강렬한 도입              |
| 명료성    | 0 헷갈림, 1 읽는 데 노력이 필요함, 2 한 번에 이해됨    |
| 정보성    | 0 새로운 내용 없음, 1 익숙한 내용, 2 유용한 시사점     |
| 재미      | 0 재미없음, 1 약간 재미있음, 2 공유할 만큼 재미있음    |
| 분노 유발 | 게시물이 주로 분노를 자극할 확률                       |
| AI 작성   | 텍스트가 기계가 쓴 뻔한 글처럼 읽힐 확률               |
| 스팸      | 스팸, 사기, 경품 이벤트, 참여 유도 게시물일 확률       |
| 반응      | 공유, 답글, 마음에 들어요, 논쟁 또는 무시              |

AI 작성 답변은 문체만 판단합니다. 게시물을 누가 썼는지 밝히지는 않습니다.

### Viral Score 계산 방식

후킹, 명료성, 읽을 가치 & 예상 반응이 점수를 올립니다. 기계가 쓴 뻔한 글처럼
읽히는 문구는 점수를 내립니다.

하드 스톱은 스팸, 분노 유발 & 기계가 쓴 뻔한 글로 보이는 게시물의 점수에 상한을
둡니다. 점수는 0에서 100 사이의 정수입니다.

| 판정          | 점수       |
| ------------- | ---------- |
| `send_it`     | 70에서 100 |
| `edit_first`  | 40에서 69  |
| `sleep_on_it` | 0에서 39   |

`viral.weights`는 `viral_lite:1`처럼 이 규칙의 버전을 나타냅니다. 규칙이 바뀔
때마다 이 값도 바뀝니다. 분석이 실패했거나 건너뛰었으면 점수는 `null`입니다.
기본 특성 답변이 하나라도 빠져도 `null`입니다. Xquik의 X Tweet Viral Score
Analyzer는 빠진 점수를 추측으로 채우지 않습니다.

## Algorithm Score 추정치

X는 `xai-org/x-algorithm` 저장소의 `home-mixer/params/param.rs` 파일에 순위
가중치를 공개했습니다. Xquik의 X Tweet Viral Score Analyzer는 그중 4개를 각
게시물의 공개 수치에 적용합니다.

| 수치          | 가중치 |
| ------------- | ------ |
| 마음에 들어요 | 0.5    |
| 답글          | 5      |
| 재게시        | 1      |
| 인용          | 5      |

`viral.algorithmWeightedSum`은 각 수치에 가중치를 곱해 더한 값입니다.
`viral.algorithmScore`는 그 합을 조회수로 나누고 1,000을 곱한 값입니다. 조회수가
없는 게시물은 대신 팔로워 수를 씁니다. `viral.algorithmBasis`는 나눈 기준이
`views`인지 `followers`인지 알려 줍니다. 기준이 같은 점수끼리만 비교하세요.
`viral.weightsVersion`은 `x_algorithm_params:2026-09-18`처럼 가중치 버전을
나타냅니다.

이 추정치에는 다음과 같은 한계가 있습니다.

- X는 각 가중치에 사용자 1명에 대해 예측한 확률을 곱합니다. 이 Actor는 관측된
  수치를 곱합니다. 따라서 결과는 X가 계산하는 점수가 아니라 추정치입니다.
- X는 북마크나 조회수에 대한 가중치를 공개하지 않습니다. 그래서 합계에서 둘 다
  뺍니다.
- X는 체류 시간 & 공유처럼 이 4가지 외의 신호도 씁니다. 공개 데이터에는 이런
  신호가 나오지 않습니다.
- 게시물에 조회수 & 팔로워 수가 모두 없으면 점수는 `null`입니다.
- AI는 이 수치를 보지 않습니다. 텍스트 & 맥락만 읽습니다.

## 예측과 실제 비교

Xquik의 X Tweet Viral Score Analyzer는 각 Viral Score를 실제 결과와 비교합니다.
`viral.actualEngagementRate`는
`log10(1 + weighted sum per 1,000 followers)`입니다. 로그를 쓰면 아주 큰 게시물
하나의 영향을 줄일 수 있습니다. 팔로워 수가 없거나 0이면 이 비율은 `null`입니다.

실행 요약의 `viral.calibration` 블록은 다음 필드를 보고합니다.

- `comparedPosts`는 Viral Score & 실제 비율이 모두 있는 게시물 수입니다.
- `rankCorrelation`은 -1에서 1 사이의 스피어먼 순위 상관계수입니다. 점수가
  높을수록 비율도 높았는지 보여 줍니다.
- `calibrationScore`는 상관계수에 100을 곱한 값이며, 0보다 작으면 0입니다.
- `overperformers` & `underperformers`는 각각 게시물을 최대 5개까지 나열합니다.
  각 항목에는 게시물 ID, URL, Viral Score, 실제 비율 & `gap`이 들어 있습니다.

`gap`은 표준화한 실제 비율에서 표준화한 Viral Score를 뺀 값입니다. gap이 1
표준편차에 이르면 게시물이 목록에 들어갑니다.

이 보정에는 다음과 같은 한계가 있습니다.

- 비교한 게시물이 10개 미만이면 보정은 `null`이 되고 이유는
  `too_few_posts`입니다. 점수나 비율이 모두 같으면 `no_variation`이 됩니다.
- 상관계수는 근삿값입니다.
- 보정은 실행 1개만 설명합니다. 점수가 낮다면 게시물의 시점, 주제, 오디언스가
  서로 달랐기 때문일 수 있습니다. 문구 추정이 틀렸다는 증거는 아닙니다.
- 올라온 지 얼마 안 된 게시물은 아직 참여가 다 쌓이지 않았습니다. 게시 시점이
  비슷한 게시물끼리 비교하세요.

## 계정 보고서

실행 요약의 `viral.accounts` 블록은 작성자 사용자 아이디별로 다음을 보고합니다.

- 게시물 수, 평균 Viral Score & 평균 실제 참여율.
- Viral Score 기준 최고 & 최저 게시물과 그 게시물 ID & URL.
- 구간별 평균 Viral Score. 구간은 게시 시각(UTC), 텍스트 길이 구간, 미디어 포함,
  링크 포함 & 셀프 스레드입니다.

텍스트 길이 구간은 `short`, `medium`, `long` & `extended`입니다. `short`는 80자,
`medium`은 200자, `long`은 280자까지입니다. `extended`는 그보다 긴 텍스트입니다.
셀프 스레드 게시물은 작성자 자신의 게시물에 단 답글입니다.

이 보고서에는 다음과 같은 한계가 있습니다.

- 점수가 매겨진 게시물이 가장 많은 사용자 아이디 50개를 나열합니다.
- 실행에서 처음 나온 사용자 아이디 1,000개를 추적합니다. `untrackedPosts`는 그
  뒤에 나온 사용자 아이디의 점수 매긴 게시물 & 사용자 아이디가 없는 게시물을
  셉니다.
- 게시물이 적은 구간은 참고할 정보가 적습니다. 평균을 비교하기 전에 `posts`를
  확인하세요.
- 구간은 이 실행에서 함께 나타난 경향을 보여 줄 뿐, 원인을 보여 주지는 않습니다.

## 리더보드

실행 요약의 `viral.leaderboard` 블록은 계정 보고서의 사용자 아이디에 순위를
매깁니다. `byViralScore`는 평균 Viral Score로, `byActualEngagementRate`는 평균
실제 비율로 순위를 매깁니다. 각 목록에는 사용자 아이디가 최대 20개까지 `rank`,
`posts` & `average`와 함께 들어갑니다.

리더보드에는 다음과 같은 한계가 있습니다.

- 순위에 오르려면 사용자 아이디에 점수 매긴 게시물이 3개 이상 있어야 합니다.
- 비율 목록은 팔로워 수가 없는 사용자 아이디를 건너뜁니다.
- 동점이면 게시물이 많은 쪽이 앞서고, 그다음은 사용자 아이디 순입니다.
- 리더보드는 계정의 전체 기록이 아니라 실행 1개의 게시물만 다룹니다.

## 게시하기 전에 초안 점수 확인

직접 쓴 텍스트를 `texts`에 붙여넣으세요. Xquik의 X Tweet Viral Score Analyzer가
점수를 매기며, X에서는 아무것도 가져오지 않습니다.

```json
{
  "texts": [
    "We shipped dark mode today. Try it and tell us what breaks.",
    "5 things we learned from 1,000 support tickets."
  ],
  "analysis": { "context": "Developers who use our app." }
}
```

- 텍스트 1개가 행 1개가 되며, `viralScore`, `viralVerdict` & `viral.stops`가
  담깁니다.
- `tweet.id`는 `text:1`, `text:2` 순으로 매겨지고, `tweet.type`은 `text`입니다.
- 초안에는 아직 마음에 들어요나 조회수가 없으므로 `viral.algorithmScore`는
  `null`로 남습니다.
- 분석한 텍스트 1개의 비용은 분석한 게시물과 같은 $0.0003입니다.
- `texts`를 설정하면 그 텍스트만 분석합니다. X 대상은 따로 실행하세요.

## 바이럴 점수 확인 비용은 얼마인가요?

Xquik의 X Tweet Viral Score Analyzer는 분석한 게시물 1개당 $0.0003부터입니다.
시작 요금은 없습니다. 가격에는 수집, AI 비용 & Viral Score가 포함되어 있습니다.
AI 계정, 토큰, 키가 필요 없습니다. 이 가격으로 게시물당 질문 최대 8개 & 맥락
최대 64,000바이트를 처리합니다. 질문 정의 1개는 최대 8,000바이트까지 쓸 수
있습니다.

추출 필터 & 중복 제거는 분석 전에 실행됩니다. 필터에서 걸러진 행이나 중복 행에는
요금을 내지 않습니다. 실패한 분석, 건너뛴 분석 & 진단 행에는 결과 요금이
없습니다. 컴퓨팅, 저장소 & 전송에 드는 Apify 플랫폼 사용료는 요금제 단가에 따라
Apify가 따로 청구합니다. Pricing 탭에서 확인할 수 있습니다.

## 입력 & 출력 예시

위 입력은 그대로 복사해 쓸 수 있습니다. 줄인 출력 행은 다음과 같습니다.

```json
{
  "tweet": { "id": "2100493544842494265", "text": "...", "likeCount": 12 },
  "viral": {
    "score": 74,
    "verdict": "send_it",
    "weights": "viral_lite:1",
    "stops": [],
    "algorithmScore": 8.5,
    "algorithmBasis": "views",
    "algorithmWeightedSum": 17,
    "actualEngagementRate": 0.7202,
    "weightsVersion": "x_algorithm_params:2026-09-18"
  },
  "viralScore": 74,
  "viralVerdict": "send_it",
  "viralAlgorithmScore": 8.5,
  "viralActualEngagementRate": 0.7202,
  "analysis": {
    "status": "succeeded",
    "answers": [
      { "questionId": "hook", "type": "score", "value": 2, "confidence": 0.84 },
      { "questionId": "spam", "type": "probability", "probability": 0.03 },
      {
        "questionId": "reaction",
        "type": "choice",
        "value": "share",
        "confidence": 0.7
      }
    ]
  }
}
```

각 결과에는 `tweet`, `analysis` & `viral`이 들어 있습니다. 답변에는 유형, 질문
버전 & 제공되는 확률이 포함됩니다. `viral.stops`는 점수에 상한을 건 하드 스톱을
나열합니다. 분석이 실패했거나 건너뛴 행에도 수집한 게시물 & `reason`이 남습니다.
이런 행의 답변 목록은 비어 있고 점수는 `null`입니다.

키-값 저장소의 무료 진단은 잘못된 입력, 누락된 결과 & 중단된 수집을 설명합니다.
실행 보고서는 수집한 행, 과금된 분석 & 대기 중인 요금을 나눠 보여 줍니다.

## 실행 요약 & 플랫 답변

실행은 다음 4가지 경우에 키-값 저장소에 `analysis-summary` 레코드를 기록합니다.

- 문제가 생겼거나 규모가 큰 경우.
- 시리즈의 첫 실행으로 `baselineDatasetId` 없이 `monitor`를 설정한 경우.
- 비교에서 바뀌었거나, 새로 나왔거나, 비교할 수 없는 게시물을 찾은 경우.
- `alwaysSaveRunRecords`가 켜져 있는 경우.

나머지 실행은 이 레코드를 건너뜁니다. 대신 실행 상태에
`Average Viral Score: 64.`처럼 가장 많은 답변을 표시합니다. 바뀐 것이 없는
비교는 `No change since the earlier run.`을 표시합니다. 문제가 생긴 실행이나 큰
실행은 `run-report`도 기록합니다. `alwaysSaveRunRecords`가 켜진 실행도
마찬가지입니다. `run-report`는 `results.analysisSummary` 아래에 같은 요약을 한
번 더 담습니다.

요약은 분석한 행, 실패한 행 & 건너뛴 행을 셉니다. 참여 지표를 합산하고 모든
질문을 요약합니다.

- `viral` 블록은 `averageScore` & 판정별 개수를 보고합니다. 점수가 있는 행 &
  없는 행도 셉니다.
- 같은 블록에 앞에서 설명한 `calibration`, `accounts` & `leaderboard`가 들어
  있습니다.
- score 질문은 평균 & 참여 가중 평균을 보고합니다.
- `reaction` 분포는 반응별 게시물 수를 보여 줍니다.
- `top`은 반응별로 참여가 가장 많은 게시물 3개를 나열합니다.
- 모든 행에는 링크된 호스트 이름을 담은 `sourceDomains`가 있습니다.
- 모든 행은 텍스트에서 찾은 `$NVDA` 같은 `cashtags`를 나열합니다.
- `monitor.baselineDatasetId`를 설정하면 요약의 `monitor` 블록이 비교 상태별
  개수를 셉니다. 바뀐 행은 최대 50개까지 나열합니다.

결과가 없는 실행은 개수 0 & 평균 `null`을 보고합니다.

모든 결과 행에는 `viralScore`, `viralVerdict`, `viralAlgorithmScore` &
`viralActualEngagementRate`도 들어 있습니다. 질문 ID를 키로 쓰는 플랫 맵
`answers`도 들어 있습니다. 각 값은 선택된 카테고리, 점수 또는 확률입니다.
`Viral Score` 데이터셋 뷰 & CSV나 Excel 내보내기는 이 열들을 보여 줍니다. 이
열은 게시물 옆에 붙어 있으므로 스프레드시트에서 JSON을 파싱할 필요가 없습니다.
실패하거나 건너뛴 행에는 빈 맵이 들어갑니다.

## 이전 실행과 비교

`monitor.baselineDatasetId`에 같은 분석 설정으로 끝난 이전 실행의 데이터셋 ID를
넣으세요. 비교는 그 실행의 행을 읽습니다. 그래서 이전 실행이 요약을 건너뛰었어도
작동합니다. 그러면 모든 행에 `monitor` 객체가 생깁니다. 상태는 다음 중
하나입니다.

- 기준 데이터셋이 없으면 `first_run`.
- 이전 실행에 없던 게시물은 `new_to_baseline`.
- 이전 실행에 있던 게시물은 `unchanged` 또는 `changed`.

`changes`는 `previous`에서 `current`로 바뀐 특성 판정을 하나씩 나열합니다.
판정은 카테고리, 반올림한 점수 단계, 0.5 기준의 예/아니오로 비교합니다. 판정이
분명하게 바뀌었을 때만 변경으로 셉니다. 실행 사이에 거의 차이가 없는 경우는
`unchanged`로 남습니다.

기준 데이터셋이 `maxBaselineRows`를 넘거나 다른 설정에서 나왔으면 수집 전에
실행이 멈춥니다. 이때 실행은 진단 행을 기록합니다. `maxBaselineRows`의 기본값은
100,000입니다.

## 태스크 예시

공개 태스크 50개 중에서 고르세요. 각 태스크는 실제 영어 검색 & 상한을 정한
`maxItems`로 시작합니다. `Viral Score` 데이터셋 뷰를 사용합니다. 일부는 오디언스
맥락을 더합니다. 실행하기 전에 검색이나 맥락을 수정하세요.

- [Viral score of AI startup launch tweets](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-ai-startup-launch-tweets)
- [Viral score of SaaS founder build in public posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-saas-founder-build-in-public-posts)
- [Viral score of Product Hunt launch posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-product-hunt-launch-posts)
- [Viral score of Developer tool announcements](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-developer-tool-announcements)
- [Viral score of Open source release posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-open-source-release-posts)
- [Viral score of Crypto project announcements](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-crypto-project-announcements)
- [Viral score of Parenting humor posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-parenting-humor-posts)
- [Viral score of Office humor posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-office-humor-posts)
- [Viral score of Pet photo captions](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-pet-photo-captions)
- [Viral score audit of NASA posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-nasa-posts)
- [Viral score audit of Duolingo posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-duolingo-posts)
- [Viral score audit of Wendy's posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-wendys-posts)

나머지 태스크는 Actor 페이지에서 더 많은 주제 & 브랜드 계정을 다룹니다.

## 자주 묻는 질문 & 지원

### AI 계정, X API 키나 로그인이 필요한가요?

아니요. Xquik의 X Tweet Viral Score Analyzer는 가격에 AI 비용이 포함되어
있습니다. AI 계정, 토큰, 키가 필요 없습니다. X API 키, 로그인, 자격 증명도 필요
없습니다.

### 점수가 높으면 게시물이 바이럴되나요?

아니요. 점수는 일반 독자에게 문구가 얼마나 효과적인지를 추정합니다. 도달 범위는
게시 시점, 오디언스 규모, 미디어 & 운에도 달려 있습니다. 점수를 믿기 전에 각
행의 실제 참여 수치와 비교하세요.

### 직접 만든 질문을 쓸 수 있나요?

네. 직접 만든 `analysis.questions`가 기본 질문을 대신합니다. `choice`, `score`,
`probability` 질문을 1개에서 8개까지 보내세요. choice 질문에는 카테고리를
2개에서 255개까지 넣을 수 있습니다. score 질문에는 순서가 있는 단계가 2개 이상
필요합니다. Viral Score에는 기본 질문 8개가 모두 필요하므로, 직접 만든 질문을
쓰면 점수는 `null`이 됩니다.

### `analysis.status`가 `failed`나 `skipped`인 행은 왜 생기나요?

Actor가 게시물을 수집해 전달했지만 AI 분석이 끝나지 않은 경우입니다.
`analysis.reason`에 원인이 나옵니다. `context_limit`은 맥락 & 대상이 길어
게시물이 들어갈 자리가 없다는 뜻입니다. `service_unavailable`은 분석 서비스를
잠시 쓸 수 없었다는 뜻입니다. 이런 행에는 결과 요금도 점수도 없습니다.
`analysis.context`를 줄이거나 해당 ID를 다시 실행하세요.

게시물이 `maxContextBytes`보다 길어도 Actor는 분석합니다. 인용한 게시물 & 답글
대상 게시물을 먼저 자르고, 그다음 게시물 본문을 자릅니다. 이때
`analysis.contextAvailability.postText`는 `truncated`가 됩니다. 텍스트를 더
남기려면 `maxContextBytes`를 최대 64,000까지 올리세요.

### 분석이 사실을 검증하나요?

아니요. 답변은 게시물이 무엇을 표현하고 어떻게 제시하는지를 설명합니다. 확률은
사실 여부가 아니라 AI의 확신 정도입니다. 중요한 분류는 원본 게시물과 대조해
검토하세요. 모든 행에 원본 게시물이 남아 있습니다.

### 어떤 언어를 지원하나요?

추출은 X가 제공하는 모든 언어를 지원합니다. 분석은 영어 고객 시나리오에서 먼저
검증합니다. 지원하는 다른 언어도 같은 구조로 답변을 반환합니다.

### 비용을 제한하려면 어떻게 하나요?

필터, 중복 제거 & `maxItems`는 분석 전에 적용됩니다. 필터에 맞고 중복되지 않은
게시물에만 요금을 냅니다. 정확한 검색 연산자, 날짜 범위 & 최소 참여 기준을
쓰세요. 큰 실행 전에 작은 `maxItems`로 시작해 답변 품질을 확인하세요.

### X 데이터를 분석해도 합법인가요?

이 Actor는 공개 X 필드를 요청합니다. 결과에는 개인정보가 들어 있을 수 있습니다.
적법한 목적인지 확인하고 관련 개인정보 보호 규정을 따르세요. 확실하지 않으면
자격을 갖춘 법률 전문가에게 문의하세요.

### API, 스케줄 & 연동을 사용할 수 있나요?

네. Python, JavaScript & cURL 예시는
[API 탭](https://apify.com/xquik/x-tweet-viral-score-analyzer/api)을 보세요.
반복 실행에는 Apify [스케줄](https://docs.apify.com/platform/schedules)을
쓰세요. 무엇이 바뀌었는지 보려면 이전 데이터셋 ID를
`monitor.baselineDatasetId`로 넘기세요. Apify 연동으로 실행을 웹훅, Make,
Zapier, n8n & Google Sheets에도 연결할 수 있습니다.

### 도움은 어디서 받을 수 있나요?

Actor 페이지에서 이슈를 열거나 실행 ID와 함께 support@xquik.com으로 문의하세요.
키-값 저장소의 무료 진단이 결과가 없거나, 일부만 나왔거나, 중단된 실행의 원인을
설명합니다.

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
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): 위치별 실시간
  트렌드를 순위, 볼륨, 쿼리 & WOEID와 함께 스크랩합니다. 어디에서 무엇이
  트렌드인지 추적할 때 사용하세요. 트렌드당 $0.00015부터입니다.
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
