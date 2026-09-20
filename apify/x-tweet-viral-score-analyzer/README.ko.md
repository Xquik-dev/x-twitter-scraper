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
스크레이퍼 서비스입니다. X Tweet Viral Score Analyzer는 모든 트윗에 Viral Score
추정치 & 판정을 추가합니다. 다른 모든 Apify Actor는 필터링이나 중복 제거 전에
요금을 부과합니다. Xquik은 전달되고, 고유하며, 필터에 맞는 결과에만 요금을
부과합니다. AI 비용은 트윗당 가격에 포함되어 있습니다. AI 제공업체에 비용을
내거나 토큰을 구매하거나 키를 준비할 필요가 없습니다.

트윗이 왜 퍼지거나 묻히는지 알아보면서 원본 트윗 데이터는 그대로 유지하세요.
**X Tweet Viral Score Analyzer with AI**는 일치하는 트윗을 수집합니다. AI는 각
게시물의 특성 8개를 평가합니다. Actor는 그 답변을 0에서 100까지의 Viral Score
추정치 & 판정으로 바꿉니다. 모든 행에는 실제 좋아요, 재게시, 답글 & 인용이
유지되므로 각 추정치를 실제 결과와 비교할 수 있습니다.

- 감사할 수 있는 고정된 공개 가중치로 계산한 **게시물별 Viral Score**.
- **특성 답변 8개**는 게시물의 점수가 왜 높거나 낮은지 보여줍니다.
- **하드 스톱**은 스팸, 분노 유발, 뻔한 기계 문구로 읽히는 게시물의 점수에
  상한을 둡니다.
- 트윗이 노출하는 모든 필드가 담긴 **완전한 소스 레코드**.

Viral Score는 문구가 얼마나 효과적인지에 대한 추정치입니다. 좋아요나 조회수를
예측하지 않습니다. X가 게시물의 순위를 매기는 방식을 재현하지도 않습니다.

## 트윗의 바이럴 점수를 확인하는 방법

1. 검색어, 프로필 핸들, 트윗 URL, 트윗 ID를 추가하세요.
2. `maxItems`와 작업에 필요한 추출 필터를 설정하세요.
3. `analysis.context`에 오디언스를 설명하거나 기본값을 그대로 두세요.
4. Actor를 실행하고 `Viral Score` 데이터셋 뷰를 열어보세요.

```json
{
  "searchTerms": ["from:NASA -filter:replies -filter:retweets"],
  "maxItems": 150,
  "analysis": { "context": "Space fans & general readers." }
}
```

### Actor가 답하는 것

| 질문      | 답변                                                        |
| --------- | ----------------------------------------------------------- |
| 훅        | 0 훅 없음, 1 명확한 도입부, 2 날카로운 도입부               |
| 명확성    | 0 혼란스러움, 1 읽는 데 노력이 필요함, 2 처음 읽어도 명확함 |
| 정보성    | 0 새로운 것 없음, 1 익숙한 요점, 2 유용한 시사점            |
| 유머      | 0 웃기지 않음, 1 약간 재미있음, 2 공유할 만큼 웃김          |
| 분노 유발 | 게시물이 주로 분노를 자극할 확률                            |
| AI 작성   | 텍스트가 뻔한 기계 문구처럼 읽힐 확률                       |
| 스팸      | 스팸, 사기, 경품 행사 또는 참여 유도 파밍일 확률            |
| 반응      | 공유, 답글, 좋아요, 논쟁 또는 무시                          |

AI 작성 답변은 문체만 판단합니다. 누가 게시물을 썼는지는 입증하지 않습니다.

### Actor가 Viral Score를 계산하는 방법

Actor는 각 0-2 점수를 0에서 1까지의 비율로 환산합니다. 그런 다음 점수를
더합니다.

| 항목                           | 점수         |
| ------------------------------ | ------------ |
| 훅                             | 최대 30      |
| 명확성                         | 최대 20      |
| 보상, 정보성 & 유머 중 높은 쪽 | 최대 30      |
| 반응                           | 최대 20      |
| AI 작성 확률                   | 최대 15 차감 |

반응은 20점 중 일부를 얻습니다: 공유 1, 답글 0.8, 좋아요 0.6, 논쟁 0.4 &
무시 0. 그런 다음 하드 스톱이 점수에 상한을 둡니다. 스팸 확률이 0.7 이상이면
상한은 20입니다. 분노 유발 확률이 0.7 이상이면 상한은 35입니다. AI 작성 확률이
0.8 이상이면 상한은 60입니다. Actor는 결과를 정수로 반올림합니다.

| 판정          | 점수       |
| ------------- | ---------- |
| `send_it`     | 70에서 100 |
| `edit_first`  | 40에서 69  |
| `sleep_on_it` | 0에서 39   |

`viral.weights`는 `viral_lite:1`처럼 이 규칙의 버전을 나타냅니다. 가중치, 스톱
또는 임계값이 바뀔 때마다 저희는 버전을 올립니다. 분석이 실패했거나, Actor가
분석을 건너뛰었거나, 기본 특성 답변이 누락되면 점수는 `null`입니다. Actor는
누락된 점수를 추측으로 채우지 않습니다.

## Algorithm Score 추정치

X는 저장소 `xai-org/x-algorithm`의 파일 `home-mixer/params/param.rs`에 순위
가중치를 공개했습니다. Actor는 그중 4개를 각 게시물의 공개 수치에 적용합니다.

| 수치   | 가중치 |
| ------ | ------ |
| 좋아요 | 0.5    |
| 답글   | 5      |
| 재게시 | 1      |
| 인용   | 5      |

`viral.algorithmWeightedSum`은 각 수치에 가중치를 곱한 값의 합입니다.
`viral.algorithmScore`는 그 합을 조회수로 나누고 1,000을 곱합니다. 조회수가
없는 게시물은 대신 팔로워 수를 사용합니다. `viral.algorithmBasis`는 나누는 값인
`views` 또는 `followers`를 나타냅니다. 기준이 같은 점수끼리만 비교하세요.
`viral.weightsVersion`은 `x_algorithm_params:2026-09-18`처럼 가중치의 버전을
나타냅니다.

한계:

- X는 각 가중치에 시청자 1명에 대해 예측한 확률을 곱합니다. Actor는 관측된
  수치를 곱합니다. 결과는 추정치이며 X가 계산하는 점수가 아닙니다.
- X는 북마크나 조회수의 가중치를 공개하지 않습니다. 합계는 둘 다 제외합니다.
- X는 체류 시간 & 공유처럼 이 4개보다 더 많은 신호를 사용합니다. 공개 데이터는
  이를 보여주지 않습니다.
- 게시물에 조회수도 팔로워 수도 없으면 점수는 `null`입니다.
- AI는 이 수치를 보지 않습니다. 텍스트 & 맥락만 읽습니다.

## 예측과 실제 비교

Actor는 각 Viral Score를 실제 결과와 비교합니다.
`viral.actualEngagementRate`는
`log10(1 + weighted sum per 1,000 followers)`입니다. 로그는 매우 큰 게시물
하나의 영향을 제한합니다. 팔로워 수가 없거나 0이면 비율은 `null`입니다.

실행 요약의 `viral.calibration` 블록은 다음을 보고합니다.

- `comparedPosts`: Viral Score & 실제 비율이 있는 게시물.
- `rankCorrelation`: -1에서 1까지의 스피어만 순위 상관계수. 더 높은 점수가 더
  높은 비율과 함께 나타났는지 묻습니다.
- `calibrationScore`: 상관계수의 100배이며 하한은 0입니다.
- `overperformers` & `underperformers`: 각각 최대 5개의 게시물이며 트윗 ID, URL,
  Viral Score, 실제 비율 & `gap`이 포함됩니다.

`gap`은 표준화된 실제 비율에서 표준화된 Viral Score를 뺀 값입니다. 게시물은
gap이 1 표준편차에 도달하면 목록에 들어갑니다.

한계:

- 비교된 게시물이 10개 미만이면 보정은 `null`이고 이유는 `too_few_posts`입니다.
  점수나 비율이 모두 같으면 `no_variation`입니다.
- Actor는 메모리를 일정하게 유지하려고 비율을 0.1 폭의 버킷으로 묶습니다. 한
  버킷의 게시물은 동률로 계산되므로 상관계수는 근사치입니다.
- 보정은 실행 1개를 설명합니다. 낮은 점수는 문구 추정이 실패했다는 뜻이 아니라
  게시물의 타이밍, 주제 또는 오디언스가 다르다는 뜻일 수 있습니다.
- 최근 게시물은 아직 참여 수집이 끝나지 않았습니다. 게시 시기가 비슷한
  게시물끼리 비교하세요.

## 계정 보고서

실행 요약의 `viral.accounts` 블록은 각 작성자 핸들을 보고합니다.

- 게시물 수, 평균 Viral Score & 평균 실제 참여율.
- Viral Score 기준 최고 & 최저 게시물과 트윗 ID & URL.
- 버킷별 평균 Viral Score: UTC 게시 시간, 텍스트 길이 구간, 미디어 포함, 링크
  포함 & 셀프 스레드.

텍스트 길이 구간은 80자까지 `short`, 200자까지 `medium`, 280자까지 `long` & 그
이상은 `extended`입니다. 셀프 스레드 게시물은 자신의 작성자에게 답글을 답니다.

한계:

- 보고서는 점수가 매겨진 게시물이 가장 많은 핸들 50개를 나열합니다.
- Actor는 실행의 처음 1,000개 핸들을 추적합니다. `untrackedPosts`는 그 이후
  핸들의 점수가 매겨진 게시물 & 핸들이 없는 게시물을 집계합니다.
- 게시물이 적은 버킷은 알려주는 것이 적습니다. 평균을 비교하기 전에 `posts`를
  확인하세요.
- 버킷은 이 실행에서 함께 나타난 것을 보여줍니다. 인과관계는 보여주지 않습니다.

## 리더보드

실행 요약의 `viral.leaderboard` 블록은 계정 보고서의 핸들에 순위를 매깁니다.
`byViralScore`는 평균 Viral Score로 순위를 매깁니다. `byActualEngagementRate`는
평균 실제 비율로 순위를 매깁니다. 각 목록에는 `rank`, `posts` & `average`가
포함된 핸들이 최대 20개 담깁니다.

한계:

- 핸들이 순위에 오르려면 점수가 매겨진 게시물이 최소 3개 필요합니다.
- 비율 목록은 팔로워 수가 없는 핸들을 건너뜁니다.
- 동률은 더 많은 게시물, 그다음 핸들 이름 순으로 가립니다.
- 리더보드는 계정의 전체 기록이 아니라 실행 1개의 게시물을 다룹니다.

## 게시 전에 초안 점수 매기기

`texts`에 직접 작성한 텍스트를 붙여넣으세요. Actor는 이를 점수화하며 X에서
아무것도 가져오지 않습니다.

```json
{
  "texts": [
    "We shipped dark mode today. Try it and tell us what breaks.",
    "5 things we learned from 1,000 support tickets."
  ],
  "analysis": { "context": "Developers who use our app." }
}
```

- 각 텍스트는 `viralScore`, `viralVerdict` & `viral.stops`가 담긴 1개의 행이
  됩니다.
- `tweet.id`는 `text:1`, `text:2` 등으로 이어지고 `tweet.type`은 `text`입니다.
- 초안에는 아직 좋아요나 조회수가 없으므로 `viral.algorithmScore`는 `null`로
  남습니다.
- 분석된 텍스트 1개의 비용은 분석된 트윗과 동일한 $0.0003입니다.
- `texts`를 설정하면 실행은 해당 텍스트만 분석합니다. X 대상은 별도로
  실행하세요.

## 가격

AI 비용은 트윗당 가격에 포함되어 있습니다. AI 제공업체에 비용을 내거나 토큰을 구매하거나 키를 준비할 필요가 없습니다.

성공적으로 분석된 트윗당 $0.0003부터이며 시작 요금은 없습니다. 가격에는
수집 & Viral Score가 포함됩니다. 분석 허용량은 질문 8개, 질문 정의당
8,000바이트, 트윗당 맥락 12,000바이트입니다. 추출 필터 & 중복 제거는 분석 전에
실행되므로 필터링되어 제외되거나 중복된 행은 분석되거나 과금되지 않습니다.
실패하거나 건너뛴 분석과 진단 행에는 결과 요금이 없습니다. Apify는 플랫폼
사용량을 별도로 청구합니다. Pricing 탭이 이를 보여줍니다.

## 입력 & 출력 예시

위 입력은 바로 복사해 사용할 수 있습니다. 출력 행은 다음과 같습니다(축약됨).

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

각 결과에는 `tweet`, `analysis` & `viral`이 포함됩니다. 답변에는 유형, 질문
버전, 사용 가능한 확률이 포함됩니다. `viral.stops`는 점수에 상한을 둔 하드
스톱을 나열합니다. 실패하거나 건너뛴 분석은 수집된 트윗을 빈 답변 목록,
`reason` & `null` 점수와 함께 유지합니다. 키-값 저장소의 무료 진단은 잘못된
입력, 누락된 결과, 중단된 수집을 설명합니다. 실행 보고서는 수집된 행, 과금된
분석, 보류 중인 요금을 구분합니다.

## 실행 요약 & 플랫 답변

각 실행은 키-값 저장소에 `analysis-summary` 레코드를 작성하고 실행
보고서의 `results.analysisSummary` 아래에 이를 반복합니다. 분석된 행, 실패한
행, 건너뛴 행을 집계하고, 참여도를 합산하며, 모든 질문을 요약합니다. `viral`
블록은 `averageScore`, 각 판정의 개수, & Actor가 점수를 매긴 행과 매기지 않은
행의 수를 보고합니다. 같은 블록에는 위에서 설명한 `calibration`, `accounts` &
`leaderboard`가 담깁니다. 점수 질문은 평균 & 참여도 가중 평균을 보고합니다.
`reaction` 분포는 각 반응에 속하는 트윗 수를 보여주며, `top`은 반응별로 가장
많이 참여된 트윗 3개를 나열합니다. 빈 실행은 0 카운트 & `null` 평균을
보고합니다. 모든 행은 링크된 호스트 이름인 `sourceDomains` & 텍스트에서 발견된
`$NVDA` 같은 `cashtags`를 나열합니다. `monitor.baselineDatasetId`를 설정하면
요약의 `monitor` 블록은 비교 상태를 집계하고 변경된 행을 최대 50개까지
나열합니다.

모든 결과 행에는 `viralScore`, `viralVerdict`, `viralAlgorithmScore`,
`viralActualEngagementRate` & 질문 ID를 선택된 카테고리, 점수, 확률에 매핑하는
플랫 맵인 `answers`도 포함됩니다. `Viral Score` 데이터셋 뷰와 CSV나 Excel
내보내기는 트윗 옆에 이 열들을 보여주므로 스프레드시트에서 JSON을 파싱할
필요가 없습니다. 실패하거나 건너뛴 행은 빈 맵을 가집니다.

## 이전 실행과 비교하기

동일한 분석 설정으로 완료된 이전 실행의 데이터셋 ID인
`monitor.baselineDatasetId`를 전달하세요. 그러면 모든 행이 `monitor` 객체를
얻습니다. 그 상태는 기준선이 없으면 `first_run`, 이전 실행에 없던 트윗이면
`new_to_baseline`, & 이전 실행에 있던 트윗이면 `unchanged`나 `changed`입니다.
`changes`는 `previous`에서 `current`로 바뀐 각 특성 판단을 나열합니다. 판단은
카테고리, 반올림된 점수 수준, 또는 0.5 기준의 예/아니오로 비교됩니다. 판단은
세 가지 경우에 변경된 것으로 집계됩니다. 이전 카테고리의 확률이 0.4 아래로
떨어집니다. 점수가 최소 0.6 수준 이동합니다. 예/아니오 확률이 임계값에서 최소
0.1 벗어납니다. 실행 간의 근소한 흔들림은 변경되지 않은 것으로 유지됩니다.
`maxBaselineRows`(기본값 100,000)를 초과하거나 다른 설정에서 나온 기준선은
수집 전에 실행을 중단시키고 진단 행을 남깁니다.

## 태스크 예시

50개의 공개 태스크 중에서 선택하세요. 각 태스크는 제한된 `maxItems` &
`Viral Score` 데이터셋 뷰가 포함된 실제 영어 검색으로 시작합니다. 일부는
오디언스 맥락을 추가합니다. 실행하기 전에 검색이나 맥락을 편집하세요.

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

## FAQ & 지원

### 점수가 높으면 트윗이 바이럴된다는 뜻인가요?

아니요. 점수는 문구가 일반 독자에게 얼마나 효과적인지 추정합니다. 타이밍,
오디언스 규모, 미디어 & 운도 도달 범위를 결정합니다. 점수에 의존하기 전에 각
행의 실제 참여 수치와 비교하세요.

### 제 자신의 질문을 사용할 수 있나요?

예. 커스텀 `analysis.questions`가 기본값을 대체합니다: 2-255개의 카테고리를
가진 `choice`, `score`, `probability` 질문 1-8개, 또는 최소 2개의 순서가
있는 수준. Viral Score에는 기본 질문 8개가 모두 필요하므로 커스텀 질문을 쓰면
점수는 `null`로 남습니다.

### 왜 어떤 행은 `analysis.status`가 `failed`나 `skipped`로 돌아왔나요?

Actor는 트윗을 수집 & 전달했지만 AI 분석이 완료되지 않았습니다.
`analysis.reason`은 트윗과 그 맥락이 `maxContextBytes`를 초과할 때의
`context_limit`이나 재시도 후의 `service_unavailable` 같은 원인을
나타냅니다. 이런 행에는 결과 요금도 점수도 없습니다. `maxContextBytes`를 최대
12,000까지 높이거나 해당 ID를 다시 실행하세요.

### 분석이 사실을 검증하나요?

아니요. 답변은 게시물이 표현하는 내용 & 게시물이 그것을 어떻게 프레이밍하는지를
설명합니다. 확률은 진실이 아니라 모델의 확신도를 나타냅니다. 중요한 분류는
모든 행이 보존하는 원본 트윗과 대조해 검토하세요.

### 어떤 언어가 작동하나요?

추출은 X가 제공하는 모든 언어를 지원합니다. 저희는 분석을 먼저 영어
고객 시나리오에서 검증합니다. 다른 지원 언어도 동일한 구조로 답변을
반환합니다.

### 비용을 어떻게 제한하나요?

필터, 중복 제거 & `maxItems`는 분석 전에 실행되므로 Actor는 고유하고
필터에 일치하는 트윗만 분석 & 과금합니다. 정확한 검색 연산자, 날짜 경계, 참여
하한선을 사용하고, 큰 실행 전에 답변 품질을 확인하기 위해 작은 `maxItems`로
시작하세요.

### 도움은 어디서 받나요?

Actor 페이지에서 이슈를 열거나 실행 ID와 함께 support@xquik.com으로
문의하세요. 키-값 저장소의 무료 진단은 비어 있거나, 부분적이거나, 중단된
실행을 설명합니다.

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
