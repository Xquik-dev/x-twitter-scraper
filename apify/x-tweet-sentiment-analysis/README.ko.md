[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · **한국어** ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer가 Xquik MCP를 코딩 에이전트에 연결하는 모습](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Framer가 Xquik 스크레이퍼를 Claude Code, Codex, Cursor 등과 함께 사용하는 방법](https://youtu.be/4UOSpoOoC3Y?t=367)을
6:07부터 보세요.

Xquik은 세계에서 가장 빠르고 저렴한 X(Twitter) 스크레이퍼 서비스이며, 가장
완전한 X 데이터를 제공합니다. Xquik의 X Tweet Sentiment Analysis는 모든 게시물에
태도, 강도 & 비꼼 여부를 더합니다. 다른 Apify Actor는 대부분 필터링이나 중복
제거 전에 요금을 부과합니다. Xquik은 필터에 맞고 중복되지 않은 결과를 전달했을
때만 요금을 받습니다. AI 비용은 게시물당 가격에 포함되어 있습니다. AI 계정,
토큰, 키가 모두 필요 없습니다.

X(Twitter) 게시물에 담긴 태도를 측정하고 원본 게시물 데이터는 그대로 보관하세요.
Xquik의 **X Tweet Sentiment Analysis with AI**는 조건에 맞는 게시물을
수집합니다. 그리고 모든 게시물에 AI 기반 감정 카테고리, 강도 단계 & 비꼼 확률을
더합니다. 출시, 캠페인, 에피소드 또는 공인에 대한 반응을 추적하세요. 강한 반응과
지나가는 언급을 구분하세요.

> Xquik은 독립적인 제3자 서비스입니다. X Corp와 제휴 관계가 없습니다.
> "Twitter"와 "X"는 X Corp의 상표입니다.

## 왜 X Tweet Sentiment Analysis with AI인가요?

- **내 브랜드를 향한 감정.** `analysis.targets`에 브랜드, 제품 또는 인물을 추가하세요. 그러면 답변이 그 대상을 향한 태도를 판단합니다.
- **참여로 반응에 가중치 주기.** `engagementShares`는 마음에 들어요, 재게시, 답글 & 인용으로 감정 분포에 가중치를 줍니다. `top`은 태도별로 참여가 가장 많은 트윗 3개를 나열합니다.
- **바뀐 점 확인.** 이전 실행의 데이터셋 ID를 `monitor.baselineDatasetId`에 넣으세요. 그러면 각 행에 어떤 답변이 바뀌었는지 나옵니다.
- **직접 쓴 텍스트 분석.** 초안, 리뷰 또는 답글을 `texts`에 붙여 넣으면 같은 답변을 받습니다. 실행은 X에서 아무것도 가져오지 않습니다.
- **스프레드시트에 바로 쓰는 답변.** `Flat answers` 뷰 & CSV 또는 Excel 내보내기는 질문마다 열 1개를 보여 줍니다.
- **직접 만든 질문.** `analysis.questions`에 질문을 최대 8개까지 넣어 기본 질문을 바꾸세요.
- **계정이나 키 불필요.** 가격에 AI 기반 분석이 포함되어 있습니다. AI 키, X API 키, 로그인이 모두 필요 없습니다.

### 완전한 결과

- 넓은 날짜 범위도 빠짐없이 빠르게 돌아옵니다.
- 어떤 연산자를 조합해도 검색은 일치하는 결과를 모두 반환합니다.
- 필터를 건 페이지도 결과가 끝날 때까지 꽉 채워 돌아옵니다.
- 각 응답에는 X가 가진 가장 완전한 데이터가 담깁니다.

### 정확한 행

- 검색 결과에는 쿼리에 맞는 게시물이 모두 들어 있고 다른 것은 들어 있지 않습니다.
- 단어 & 구문 매칭은 모든 언어 & 문자 체계에서 작동합니다.
- 언어 필터는 X가 태그하는 모든 언어에서 작동합니다.
- 비공개 계정 & 비공개 리스트는 빈 페이지 대신 분명한 답을 받습니다.
- 재게시에는 원본 전체 텍스트가 들어 있습니다.
- 행의 모든 ID가 정확하게 유지됩니다.
- 멘션, 링크, 해시태그 & 하이라이트의 위치가 텍스트와 맞습니다.
- 인증 배지는 `x.com`에 표시되는 것과 같습니다.
- 행에는 공개 데이터만 들어갑니다.
- 최신순 결과는 날짜 순서대로 돌아옵니다.
- 검색은 X에 입력하는 그대로의 쿼리를 받습니다.
- 장소 검색은 6개 언어의 이름으로 작동합니다.
- 실행할 수 없는 검색은 바로 실패하고 고치는 방법을 알려 줍니다.
- 날짜는 흔히 쓰는 어떤 형식으로 적어도 같은 뜻입니다.
- 검색은 `since_id` & `max_id` 범위를 받습니다.
- 광고 & 프로모션 항목은 행에 들어가지 않습니다.

### 최신 데이터

- X가 변경 사항을 배포해도 읽기는 계속 작동합니다.

### 속도

- 느린 페이지 1개 때문에 실행이 늦어지지 않습니다.
- 게시물이 많은 주제에서도 검색은 빠릅니다.
- 다음 페이지가 매번 빠르게 도착합니다.
- 읽기는 행이 도착하는 즉시 끝납니다.
- 멈춘 Actor 호출은 스스로 복구됩니다.

### 공정한 과금

- 잘못된 입력은 요금이 들지 않으며 고칠 부분을 알려 줍니다.
- AI 분석은 분석한 게시물에만 과금합니다.
- Actor는 전달되고, 중복되지 않고, 조건에 맞는 행에만 요금을 받습니다.
- 다시 시작한 실행도 두 번 과금하지 않습니다.
- 실행은 최대 총 청구액을 넘지 않으며 진단도 그대로 기록합니다.
- AI Actor는 실패하거나 건너뛴 분석에 과금하지 않습니다.

### 안정성

- 일시적인 오류 하나로 실행이 실패하지 않습니다.
- 페이지를 넘겨도 결과가 일관되게 유지됩니다.
- 페이지 넘김이 끝없이 반복되지 않습니다.
- 제한 시간에 도달하면 이미 찾은 행을 진단과 함께 반환합니다.
- 짧은 Xquik 장애가 있어도 Actor는 계속 작동합니다.
- Actor 실행은 다시 시작해도 중복 없이 이어집니다.
- 잘못된 행 1개 때문에 배치 전체가 실패하지 않습니다.
- 중단된 실행도 행 & 보고서를 유지합니다.
- 시작하지 못한 실행도 그 이유를 알려 줍니다.
- 지원팀은 요청이나 실행이 무엇을 반환했는지 정확히 볼 수 있습니다.

### 에이전트를 위한 설계

- Actor는 다른 Actor용으로 쓴 입력도 받습니다.
- 모든 실행은 끝난 이유 & 재시도 여부를 알려 줍니다.

### 풍부한 데이터

- 게시물 행에는 장문 게시물 텍스트, 수정 이력, 커뮤니티 노트, 도달 범위 라벨 & 답글 설정이 들어 있습니다.
- 행에는 게시 앱, 미디어 수 & 프로페셔널 계정 데이터가 들어 있습니다.
- 미디어에는 화질별 버전, 대체 텍스트, 크기 & 볼 수 없을 때의 이유가 함께 옵니다.
- AI 답변에는 확률, 신뢰도 & 질문 버전이 담깁니다.
- 분석 실행 간 변경 판정은 사소한 변동으로 바뀌지 않습니다.

### 품질 검사

- X가 표시하는 필드는 모두 제공하거나, 일부러 빼거나, 없다는 것을 확인합니다.
- Xquik은 모든 읽기를 실제 X에서 실시간으로 테스트합니다.

## X Tweet Sentiment Analysis with AI는 어떤 데이터를 반환하나요?

- **게시물별 감정.** 게시물마다 카테고리가 따로 붙으므로 모든 답변을 하나씩
  검토할 수 있습니다.
- **강도.** 0에서 2까지의 단계로 강하게 말한 게시물과 온건한 게시물을
  구분합니다.
- **비꼼 확률.** 글자 그대로의 표현이 태도와 반대인 게시물을 표시합니다.
- **완전한 원본 레코드.** 모든 행에 게시물이 제공하는 필드가 모두 남습니다.

## 게시물 감정 분석 방법

Apify가 처음인가요? 먼저
[무료 계정을 만드세요](https://console.apify.com/sign-up?fpr=xquik). 무료
요금제는 신용카드가 필요 없고 매달 쓸 수 있는 $5를 줍니다. 분석한 게시물 1개당
$0.0003이므로 $5면 플랫폼 사용료를 빼고 게시물을 최대 16,000개 분석할 수
있습니다. 그런 다음 여기로 돌아와 Try for free를 누르세요.

1. 검색어, 프로필 사용자 아이디, 게시물 URL 또는 게시물 ID를 추가하세요.
2. `maxItems` & 작업에 필요한 추출 필터를 설정하세요.
3. 각 게시물을 그 자체의 주제로 판단하려면 `analysis.targets`를 비워 두세요.
   브랜드, 제품 또는 인물에 초점을 맞추려면 그 이름 & 별칭을 추가하세요.
4. 실행을 시작하고 데이터셋을 여세요.

```json
{
  "searchTerms": ["\"season finale\" lang:en"],
  "maxItems": 200,
  "analysis": { "context": "Reactions to the show, not spoilers." }
}
```

### Actor가 답하는 질문

| 질문 | 답변                                        |
| ---- | ------------------------------------------- |
| 감정 | 긍정, 부정, 혼합, 중립 또는 불명확          |
| 강도 | 0 지나가는 언급, 1 분명한 태도, 2 강한 표현 |
| 비꼼 | 글자 그대로의 표현이 태도와 반대일 확률     |

대상을 지정하면 감정은 그 대상에 대한 태도를 판단합니다. 직접 제공한 인용이나
답글 맥락도 사용합니다. 대상이 없으면 게시물의 주된 주제를 판단합니다.

## 직접 쓴 텍스트 분석

직접 쓴 초안, 답글, 리뷰 또는 메모를 `texts`에 붙여넣으세요. Xquik의 X Tweet
Sentiment Analysis가 이를 분석합니다. X에서는 아무것도 가져오지 않습니다.

```json
{
  "texts": [
    "The new update is great, but sync still drops on mobile.",
    "Support fixed my issue in 10 minutes. Thank you."
  ]
}
```

- 텍스트 1개가 행 1개가 되며, 게시물과 같은 `analysis` 답변이 담깁니다.
- `tweet.id`는 `text:1`, `text:2` 순으로 매겨지고, `tweet.type`은 `text`입니다.
- 분석한 텍스트 1개의 비용은 분석한 게시물과 같은 $0.0003입니다.
- `texts`를 설정하면 그 텍스트만 분석합니다. X 대상은 따로 실행하세요.

## 다른 감정 분석 Actor에서 옮겨오기

기존 입력을 옮길 때는 설정 1개에 이름 1개만 쓰세요.

| 기존 입력 이름                                      | Xquik 필드       |
| --------------------------------------------------- | ---------------- |
| `query`, `searchQuery`                              | `twitterContent` |
| `queries`, `searchQueries`, `search`                | `searchTerms`    |
| `handles`, `usernames`, `username`, `profileTweets` | `twitterHandles` |
| `tweetUrls`, `postUrls`, `urls`                     | `startUrls`      |
| `tweetIDs`, `tweet_ids`, `postIds`, `tweetId`       | `tweetIds`       |
| `maxTweets`, `maxResults`, `count`, `max_posts`     | `maxItems`       |
| `sort`                                              | `queryType`      |
| `tweetLanguage`, `language`                         | `lang`           |
| `startDate`, `endDate`                              | `since`, `until` |

이 Actor는 이런 흔한 이름을 그대로 받습니다. 다른 게시물 Actor의 필터 이름도
읽습니다. 여기에 필드가 없는 필터는 실행의 모든 검색에서 X 검색 연산자가 되고,
실행 로그는 시작할 때 그 연산자를 나열합니다. `sort`에는 `Latest` 또는 `Top`을
쓰세요. 언어 코드 & 날짜 경계는 그대로 두세요. 상한은 모든 대상에 걸쳐
적용됩니다. 다음 입력은 바로 실행할 수 있습니다.

```json
{ "searchTerms": ["from:NASA"], "sort": "Latest", "maxItems": 5 }
```

다른 입력은 실행 전에 바꿔야 합니다.

`tweetUrl` 1개는 `startUrls`로 감싸세요.

```json
{ "startUrls": ["https://x.com/NASA/status/2105727882588807607"] }
```

`text`, `Texts`, 데이터셋 문자열 또는 파일 문자열은 `texts`에 넣으세요.

```json
{ "texts": ["Support fixed my issue. Thank you."] }
```

`hashtag`나 `cashtag`는 검색 문자열로 바꾸세요.

```json
{ "searchTerms": ["#Artemis lang:en", "$AAPL lang:en"], "maxItems": 5 }
```

`minLikes`, `minReplies` & `minRetweets`는 다음 필드 이름으로 바꾸세요.

```json
{ "min_faves": 10, "min_replies": 2, "min_retweets": 3 }
```

결과는 원본 레코드를 `tweet`에, 답변을 `analysis.answers`에 담습니다. 긍정, 부정
& 중립 라벨은 그에 맞는 감정 카테고리에 연결하세요. `mixed` & `unclear`는 별도
카테고리로 두세요. 다른 감정 점수는 척도 & 의미가 다를 수 있습니다. Xquik의
강도는 0에서 2까지이며 소수가 나올 수 있습니다. 비꼼은 확률입니다. 신뢰도는
답변이 얼마나 확실한지를 나타냅니다.

## 게시물 감정 분석 비용은 얼마인가요?

Xquik의 X Tweet Sentiment Analysis는 분석한 게시물 1개당 $0.0003부터입니다. 시작
요금은 받지 않습니다. 가격에는 수집 & AI 비용이 포함되어 있습니다. AI 계정,
토큰, 키가 모두 필요 없습니다. 이 가격으로 게시물당 질문 최대 8개 & 맥락 최대
64,000바이트를 처리합니다. 질문 정의 1개는 최대 8,000바이트까지 쓸 수 있습니다.

더 많이 수집하려면 선불 사용량이 더 많은
[Apify 요금제를 고르세요](https://apify.com/pricing?fpr=xquik).

추출 필터 & 중복 제거는 분석 전에 실행됩니다. 필터에서 빠진 행이나 중복 행에는
요금을 내지 않습니다. 실패한 분석, 건너뛴 분석 & 진단 행에는 결과 요금이
없습니다. 컴퓨팅, 저장소 & 전송에 드는 Apify 플랫폼 사용료는 요금제 단가에 따라
Apify가 따로 청구합니다. Pricing 탭에서 확인할 수 있습니다.

## 입력 & 출력 예시

위 입력은 그대로 복사해 쓸 수 있습니다. 줄인 출력 행은 다음과 같습니다.

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

각 결과에는 `tweet` & `analysis`가 들어 있습니다. 답변에는 유형, 질문 버전 &
제공되는 확률이 포함됩니다. 분석이 실패했거나 건너뛴 행에도 수집한 게시물 &
`reason`이 남습니다. 이런 행의 답변 목록은 비어 있습니다.

키-값 저장소의 무료 진단은 잘못된 입력, 누락된 결과 & 중단된 수집을 설명합니다.
실행 보고서는 수집한 행, 과금된 분석 & 대기 중인 요금을 나눠 보여 줍니다.

## 실행 요약 & 플랫 답변

실행은 다음 3가지 경우에 키-값 저장소에 `analysis-summary` 레코드를 기록합니다.

- 문제가 생겼거나 규모가 큰 경우.
- 비교에서 바뀌었거나, 새로 나왔거나, 비교할 수 없는 게시물을 찾은 경우.
- `alwaysSaveRunRecords`가 켜져 있는 경우.

나머지 실행은 시리즈의 첫 실행을 포함해 이 레코드를 건너뜁니다. 이런 실행의
상태는 `Top sentiment is positive in 3 of 5 results.`처럼 가장 많은 답변을 알려
줍니다. 바뀐 것이 없는 비교는 `No change since the earlier run.`이라고 알려
줍니다. 문제가 생긴 실행이나 큰 실행은 `run-report`도 기록합니다.
`alwaysSaveRunRecords`가 켜진 실행도 마찬가지입니다. `run-report`는
`results.analysisSummary` 아래에 같은 요약을 한 번 더 담습니다.

요약은 분석한 행, 실패한 행 & 건너뛴 행을 셉니다. 참여 지표 합계 & 모든 질문의
요약도 담습니다.

- `sentiment` 분포는 태도별 게시물 수를 보여 줍니다.
- `engagementShares`는 같은 분포를 마음에 들어요, 재게시, 답글 & 인용 수로
  가중합니다.
- `top`은 태도별로 참여가 가장 많은 게시물 3개를 나열합니다.
- 모든 행은 링크한 호스트 이름인 `sourceDomains`를 나열합니다.
- 모든 행은 텍스트에서 찾은 `$NVDA` 같은 `cashtags`를 나열합니다.
- `monitor.baselineDatasetId`를 설정하면 요약의 `monitor` 블록이 비교 상태별
  개수를 셉니다. 바뀐 행은 최대 50개까지 나열합니다.

요약의 숫자는 소수점 4자리로 반올림합니다. 결과가 없는 실행은 개수 0 & 평균
`null`을 보고합니다.

모든 결과 행에는 질문 ID를 키로 쓰는 플랫 맵 `answers`도 들어 있습니다. 각 값은
선택된 카테고리, 점수 또는 확률입니다. `Flat answers` 데이터셋 뷰 & CSV나 Excel
내보내기는 질문 1개당 열 1개를 보여 줍니다. 이 열은 게시물 옆에 붙어 있으므로
스프레드시트에서 JSON을 파싱할 필요가 없습니다. 실패한 행 & 건너뛴 행에는 빈
맵이 들어갑니다.

## 이전 실행과 비교

`monitor.baselineDatasetId`에 같은 분석 설정으로 완료된 이전 실행의 데이터셋
ID를 넣으세요. 비교는 그 실행의 행을 읽습니다. 그 실행이 요약을 건너뛰었어도
비교는 작동합니다. 그러면 모든 행에 `monitor` 객체가 붙습니다. 이 객체의 상태
값은 다음과 같습니다.

- 기준 데이터셋이 없으면 `first_run`.
- 이전 실행에 없던 게시물은 `new_to_baseline`.
- 이전 실행에 있던 게시물은 `unchanged` 또는 `changed`.

`changes`는 `previous`에서 `current`로 바뀐 감정, 강도 단계 또는 비꼼 판정을
하나씩 나열합니다. 판정은 카테고리, 반올림한 점수 단계 또는 0.5 기준의
예/아니오로 비교합니다. 판정이 분명하게 바뀌었을 때만 변경으로 셉니다. 실행
사이에 거의 차이가 없는 경우는 `unchanged`로 남습니다.

기준 데이터셋이 `maxBaselineRows`를 넘거나 다른 설정에서 나왔으면 수집 전에
실행이 멈춥니다. 이때 실행은 진단 행을 기록합니다. `maxBaselineRows`의 기본값은
100,000입니다.

## 태스크 예시

공개 태스크 50개 중에서 고르세요. 궁금한 점에 맞는 예시부터 시작하세요. 대부분의
태스크는 상한이 작습니다. 날짜를 지정한 검색 2개는 게시물 50개를 요청합니다.
태스크를 열면 저장된 입력을 쓸 수 있습니다. 아래의 복사용 입력 & 확인된 결과
수는 설정을 고르는 데 도움이 됩니다.

성공한 모든 행은 감정, 강도 & 비꼼 확률을 반환합니다. 각 행은 답변 옆에 원본
게시물이나 직접 넣은 텍스트를 그대로 둡니다. 이 예시들은 영어 입력 & 언어 필터를
씁니다. 그래도 언어 라벨은 게시물이나 인용 안의 다른 언어 텍스트를 놓칠 수
있습니다.

대상이 없으면 답변은 게시물의 주된 주제를 설명합니다. 키워드 언급은 다른 것에
관한 내용일 수 있습니다. 대상이 여러 개면 감정 답변은 대상 전체를 함께
설명합니다. 대상마다 답변을 따로 반환하지 않습니다.

프로필의 마음에 들어요는 숨겨져 있을 수 있습니다. 볼 수 없으면 프로필의 답글이나
게시물을 쓰세요.

검색 결과에는 발표, 홍보, 농담 & 반복된 텍스트가 들어갈 수 있습니다. 게시물 ID가
서로 달라도 독립적인 반응이나 고객 신원이 증명되지는 않습니다. 의견 표현 & 참여
필터는 표본을 골라냅니다. 피드백으로 세기 전에 게시물을 검토하세요. 분석은
게시물의 주장을 검증하지 않습니다.

### 테스트한 태스크 입력

태스크를 여세요. Input 탭에 시각적 필드 & JSON이 있습니다. 시작하기 전에 JSON을
복사하거나 필드를 바꾸세요.
[Apify가 태스크 입력을 설명합니다](https://docs.apify.com/actors/running/tasks).

테스트 날짜는 UTC 기준입니다. 결과 수는 기록된 실행을 설명할 뿐, 보장되는
공급량이 아닙니다. 날짜를 지정한 게시물 50개 예시는 고유 ID가 독립적인 의견과 왜
다른지 보여 줍니다.

#### 피날레 리뷰 초안

[시즌 피날레 리뷰 텍스트](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-season-finale-reactions)

피날레 리뷰 초안에서 칭찬과 비판을 구분하세요. 2026-10-01에 직접 넣은 고유
텍스트 3개를 확인했습니다. 상한은 3개였습니다. 이 텍스트는 직접 쓴 예시이며,
시청자 조사가 아닙니다.

#### 휴대폰 출시 논의

[2026년 9월 iPhone 출시 게시물](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-iphone-launch-posts)

9월의 고정된 날짜 범위 안에서 출시 논의를 검토하세요. 2026-10-01에 고유 게시물
5개를 확인했습니다. 상한은 5개였습니다. 발표와 개인 의견이 모두 검색될 수
있습니다.

#### 하프타임 쇼 리뷰

[하프타임 쇼 리뷰 텍스트](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-super-bowl-halftime-show)

하프타임 리뷰에서 엇갈린 평가와 비꼼을 확인하세요. 2026-10-01에 직접 넣은 고유
텍스트 3개를 확인했습니다. 상한은 3개였습니다. 이 리뷰는 직접 쓴 예시이며,
실시간 공연 반응이 아닙니다.

#### 전기차 경험

[전기차 경험 게시물](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-new-electric-car)

전기차를 운전하거나 고르는 일에 관한 게시물을 찾으세요. 2026-10-01에 고유 게시물
5개를 확인했습니다. 상한은 5개였습니다. 개인적인 표현으로 농담이나 전해 들은
이야기가 검색될 수 있습니다.

#### 영화 논의

[Marvel 영화 논의 게시물](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-marvel-movie-audiences)

관객 의견을 고르기 전에 영화 논의를 검토하세요. 2026-10-01에 고유 게시물 5개를
확인했습니다. 상한은 5개였습니다. Marvel은 관련 없는 뜻으로 쓰인 경우에도 검색될
수 있습니다.

#### 아티스트 미디어 캡션

[Taylor Swift 미디어 캡션 어조](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-taylor-swift-album-reactions)

최근 미디어와 함께 아티스트의 표현을 검토하세요. 2026-10-01에 고유 게시물 5개를
확인했습니다. 상한은 5개였습니다. 캡션은 이미지나 동영상에 보이는 모든 것을
설명하지 못합니다.

#### 게임 출시 스레드

[게임 출시 업데이트 스레드](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-video-game-launch)

발표와 경쟁 게임에 대한 반응을 함께 읽으세요. 2026-10-01에 고유 게시물 5개를
확인했습니다. 상한은 5개였습니다. 이 스레드는 여러 게임을 언급하며 첫 게시물을
포함합니다.

#### 원격 근무 논의

[원격 근무 논의](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-remote-work)

원격 근무 논의에 드러난 태도를 비교하세요. 2026-10-01에 고유 게시물 5개를
확인했습니다. 상한은 5개였습니다. 채용 광고와 반복되는 의견이 나올 수 있습니다.

#### 항공사 게시물

[항공사 논의 게시물](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-airline-passengers)

서비스 피드백을 고르기 전에 항공사 언급을 검토하세요. 2026-10-01에 고유 게시물
5개를 확인했습니다. 상한은 5개였습니다. 언급만으로는 작성자가 승객이라는 증거가
되지 않습니다.

#### 대학 풋볼 논의

[대학 풋볼 논의](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-college-football-fans)

팬 의견과 대학 풋볼 홍보를 구분하세요. 2026-10-01에 고유 게시물 5개를
확인했습니다. 상한은 5개였습니다. 팬 의견과 함께 프리뷰와 홍보가 검색될 수
있습니다.

#### 금리 논의

[금리 논의](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-interest-rates)

금리를 둘러싼 시장과 정책에 대한 태도를 검토하세요. 2026-10-01에 고유 게시물
5개를 확인했습니다. 상한은 5개였습니다. 주된 주제는 정치인일 수도, 시장일 수도
있습니다.

#### 스쿠터 논의

[전동 스쿠터 논의](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-electric-scooters)

이용자 피드백을 고르기 전에 스쿠터 논의를 찾으세요. 2026-10-01에 고유 게시물
5개를 확인했습니다. 상한은 5개였습니다. 개인 경험과 함께 광고, 연구, 농담이
검색될 수 있습니다.

#### 식당 경험

[새 식당 경험](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-restaurant-openings)

새 식당에 대한 1인칭 표현을 검토하세요. 2026-10-01에 고유 게시물 5개를
확인했습니다. 상한은 5개였습니다. 개인적인 표현은 초대나 추천에도 나올 수
있습니다.

#### 공개 리스트 피드 어조

[공개 리스트 피드 어조](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-ai-coding-assistants)

공개 리스트에 있는 게시물의 어조를 검토하세요. 2026-10-01에 고유 게시물 5개를
확인했습니다. 상한은 5개였습니다. 멤버는 다른 주제를 이야기하거나 다른 사람의
글을 재게시할 수 있습니다.

#### 기기 프로필 답글

[Google 기기 프로필 답글 어조](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-smart-home-device-owners)

답글을 포함해 기기 프로필의 표현을 검토하세요. 2026-10-01에 고유 게시물 5개를
확인했습니다. 상한은 5개였습니다. 상위 게시물의 맥락이 없으면 프로필 답글의
의미를 알기 어려울 수 있습니다.

#### 마라톤 훈련

[마라톤 훈련 논의](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-marathon-runners)

훈련 소식과 마라톤 계획에 담긴 태도를 찾으세요. 2026-10-01에 고유 게시물 5개를
확인했습니다. 상한은 5개였습니다. 러너의 소식과 함께 계획과 홍보가 나올 수
있습니다.

#### 여행 계획

[개인 도쿄 여행 게시물](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-tourist-destinations)

개인 여행 계획과 여행 이야기를 검토하세요. 2026-10-01에 고유 게시물 5개를
확인했습니다. 상한은 5개였습니다. 이름에 Tokyo가 들어간 행사는 일본 여행
이야기가 아니어도 검색될 수 있습니다.

#### 스트리밍 가격 논의

[Netflix 가격 논의 게시물](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-streaming-price-increases)

해지 사유를 검토하기 전에 Netflix 가격에 대한 우려를 찾으세요. 2026-10-01에 고유
게시물 5개를 확인했습니다. 상한은 5개였습니다. 가격 표현은 우려를 골라낼 뿐,
시청자를 대표하는 표본이 아닙니다.

#### 학용품 쇼핑

[2026년 8월 학용품 게시물](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-back-to-school-shoppers)

8월 기간의 학용품 게시물 50개를 검토하세요. 2026-10-01에 고유 게시물 50개를
확인했습니다. 상한은 50개였습니다. 저희가 검토한 결과 ID 50개 중 분명히 관련된
행은 42개였습니다.

#### 열차 지연

[열차 지연 경험 게시물](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-public-transit)

지연된 열차와 관련된 불만과 경험을 찾으세요. 2026-10-01에 고유 게시물 5개를
확인했습니다. 상한은 5개였습니다. 개인적인 표현으로는 공식 안내를 놓칠 수
있습니다.

#### 반려동물 사료 논의

[반려동물 사료 경험 게시물](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-pet-food-brands)

더 넓은 돌봄 논의 안에서 반려동물 사료 언급을 검토하세요. 2026-10-01에 고유
게시물 5개를 확인했습니다. 상한은 5개였습니다. 돌봄이나 수의 관련 논의에서 사료
브랜드가 지나가듯 언급될 수 있습니다.

#### 선택한 판타지 스포츠 게시물

[판타지 스포츠 게시물 묶음](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-fantasy-football-apps)

선택한 판타지 스포츠 게시물 묶음을 분석하세요. 2026-10-01에 고유 게시물 2개를
확인했습니다. 상한은 2개였습니다. 라벨은 각 게시물의 주제에 관한 것이며,
자동으로 앱에 관한 것이 되지는 않습니다.

#### 카페 경험

[카페 경험 게시물](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-coffee-shop-customers)

고객 피드백을 고르기 전에 카페에 대한 의견을 찾으세요. 2026-10-01에 고유 게시물
5개를 확인했습니다. 상한은 5개였습니다. 작성자의 불만은 검증되지 않은 주장으로
남습니다.

#### 주택 시장

[주택 시장 논의](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-housing-market)

주택 시장에 대한 의견과 뉴스를 검토하세요. 2026-10-01에 고유 게시물 5개를
확인했습니다. 상한은 5개였습니다. 뉴스와 의견은 서로 다른 시장 문제를 다룰 수
있습니다.

#### 대회 논의

[League of Legends 대회 게시물](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-esports-tournament-viewers)

대회 논의와 티켓 또는 경기 홍보를 구분하세요. 2026-10-01에 고유 게시물 5개를
확인했습니다. 상한은 5개였습니다. 티켓 광고와 경기 보도는 시청자 의견이
아닙니다.

#### 팟캐스트 제작사 게시물

[팟캐스트 제작사 게시물 어조](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-podcast-episodes)

팟캐스트 제작사가 직접 내보내는 메시지를 검토하세요. 2026-10-01에 고유 게시물
5개를 확인했습니다. 상한은 5개였습니다. 제작사의 어조는 청취자 만족도를 측정하지
않습니다.

#### 헬스장 비교

[헬스장 비교 리뷰 텍스트](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-gym-memberships)

리뷰에서 헬스장 2곳에 대한 종합적인 태도를 확인하세요. 2026-10-01에 직접 넣은
고유 텍스트 3개를 확인했습니다. 상한은 3개였습니다. 두 대상은 텍스트마다 감정
답변 1개를 공유합니다.

#### 렌터카

[렌터카 경험 게시물](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-car-rental-customers)

서비스 문제를 검토하기 전에 렌터카에 대한 의견을 찾으세요. 2026-10-01에 고유
게시물 5개를 확인했습니다. 상한은 5개였습니다. 이용자 경험담과 함께 문의와
홍보가 검색될 수 있습니다.

#### 캠퍼스 논의

[대학 비용과 캠퍼스 게시물](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-university-life)

비용 관련 게시물을 고르기 전에 캠퍼스 논의를 검토하세요. 2026-10-01에 고유
게시물 5개를 확인했습니다. 상한은 5개였습니다. 캠퍼스 뉴스와 비판은 학생의
경험을 증명하지 않습니다.

#### 결혼 준비

[개인 결혼 준비 게시물](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-wedding-planning-posts)

결혼 계획과 비용에 대한 1인칭 표현을 찾으세요. 2026-10-01에 고유 게시물 5개를
확인했습니다. 상한은 5개였습니다. 준비 경험과 함께 이야기, 농담, 지나가는 표현이
검색될 수 있습니다.

#### 충전 경험

[전기차 충전 경험 게시물](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-ev-charging-experiences)

전기차 논의 안에서 충전 경험을 검토하세요. 2026-10-01에 고유 게시물 5개를
확인했습니다. 상한은 5개였습니다. 충전은 차량의 다른 문제에 딸린 부차적인 내용일
수 있습니다.

#### 세금 신고 논의

[2026년 봄 TurboTax 신고 게시물](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-tax-filing-software)

봄의 고정된 날짜 범위 안에서 신고 논의를 검토하세요. 2026-10-01에 고유 게시물
5개를 확인했습니다. 상한은 5개였습니다. 게시물은 현재 수수료나 세금 규정을
검증하지 않습니다.

#### 테마파크 방문

[테마파크 방문 논의](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-theme-park-visitors)

방문 반응을 고르기 전에 테마파크 언급을 찾으세요. 2026-10-01에 고유 게시물 5개를
확인했습니다. 상한은 5개였습니다. 지나가는 언급 때문에 다른 주제를 다룬 긴
게시물이 검색될 수 있습니다.

#### 식료품 지출

[식료품 예산 경험 게시물](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-grocery-prices)

식료품 지출에 대한 1인칭 의견을 찾으세요. 2026-10-01에 고유 게시물 5개를
확인했습니다. 상한은 5개였습니다. 더 넓은 정치, 영양 또는 크리에이터 논의에서
식료품 지출이 언급될 수 있습니다.

#### 카메라 논의

[휴대폰 카메라 논의](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-phone-camera-reviews)

사진, 리뷰, 발표와 함께 카메라 언급을 검토하세요. 2026-10-01에 고유 게시물 5개를
확인했습니다. 상한은 5개였습니다. 카메라는 다른 발표에서 지나가듯 언급될 수
있습니다.

#### 선택한 스니커즈 게시물

[선택한 스니커즈 게시물 1개](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-sneaker-drop-reactions)

넓은 키워드 검색 없이 이미 아는 게시물을 분석하세요. 2026-10-01에 고유 게시물
1개를 확인했습니다. 상한은 1개였습니다. 선택한 이 캡션은 이미지의 모든 세부
사항을 설명하지 않습니다.

#### 고객 지원 챗봇

[고객 지원 챗봇 논의 게시물](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-customer-support-chatbots)

서비스 불만을 고르기 전에 고객 지원 챗봇 논의를 찾으세요. 2026-10-01에 고유
게시물 5개를 확인했습니다. 상한은 5개였습니다. 정서 지원 봇과 기업의 답변도
검색될 수 있습니다.

#### 페스티벌 논의

[2026년 4월 Coachella 논의](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-music-festival-attendees)

4월 기간의 페스티벌 게시물 50개를 검토하세요. 2026-10-01에 고유 게시물 50개를
확인했습니다. 상한은 50개였습니다. ID 50개에는 관련된 행 47개와 반복된 뉴스
문구가 들어 있었습니다.

#### 전기 요금

[전기 요금 논의](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-electric-bills)

정책 논의와 함께 개인의 전기 요금을 검토하세요. 2026-10-01에 고유 게시물 5개를
확인했습니다. 상한은 5개였습니다. 정책 관련 주장과 가격 전망은 검증되지 않은
상태로 남습니다.

#### 농구 선수단 변동

[NBA 트레이드와 계약 논의](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-nba-trade-reactions)

팬 반응을 고르기 전에 트레이드와 계약 논의를 찾으세요. 2026-10-01에 고유 게시물
5개를 확인했습니다. 상한은 5개였습니다. 다른 소식에서 선수나 팀이 지나가듯
언급될 수 있습니다.

#### 숙박 논의

[Airbnb 숙박 논의](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-airbnb-stays)

숙박 논의 안에서 Airbnb에 대한 태도에 초점을 맞추세요. 2026-10-01에 고유 게시물
5개를 확인했습니다. 상한은 5개였습니다. 게스트의 이야기와 함께 호스트 홍보와 앱
게시물이 나올 수 있습니다.

#### 책 반응

[독서 반응 게시물](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-book-club-readers)

독서 모임 회원이라고 가정하지 말고 독서 반응을 검토하세요. 2026-10-01에 고유
게시물 5개를 확인했습니다. 상한은 5개였습니다. 영화와의 비교와 개인적인 독서
의견이 모두 검색될 수 있습니다.

#### 밀키트 경험

[HelloFresh 경험 게시물](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-meal-kit-services)

제품 경험을 검토하기 전에 밀키트에 대한 의견을 찾으세요. 2026-10-01에 고유
게시물 5개를 확인했습니다. 상한은 5개였습니다. 계획, 광고, 더 넓은 개인적인
이야기에서 브랜드가 언급될 수 있습니다.

#### 레이스 논의

[Formula 1 레이스 논의 게시물](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-formula-one-race-weekends)

팀과 드라이버의 발언과 함께 레이스 논의를 검토하세요. 2026-10-01에 고유 게시물
5개를 확인했습니다. 상한은 5개였습니다. 인용된 드라이버 발언은 서로 다른 ID에서
반복될 수 있습니다.

#### 데이팅 앱 경험

[데이팅 앱 경험 게시물](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-dating-app-experiences)

데이팅 앱 경험, 매칭에 대한 말과 농담을 찾으세요. 2026-10-01에 고유 게시물 5개를
확인했습니다. 상한은 5개였습니다. 매칭에 대한 말과 농담은 고객 신원을 검증하지
않습니다.

#### 공항 대기 게시물

[공항 대기와 라운지 게시물](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-airport-travelers)

여행 안내와 함께 공항 대기에 대한 의견을 검토하세요. 2026-10-01에 고유 게시물
5개를 확인했습니다. 상한은 5개였습니다. 개인의 대기 경험과 함께 공식 안내가 나올
수 있습니다.

#### 학교 급식 논의

[학교 급식 논의](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-school-lunch-programs)

학교 급식에 대한 개인 게시물과 정책 논쟁을 검토하세요. 2026-10-01에 고유 게시물
5개를 확인했습니다. 상한은 5개였습니다. 작성자에는 학부모뿐 아니라 기관도 있을
수 있습니다.

#### 맥주 시음

[수제 맥주 시음 게시물](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-craft-beer-drinkers)

리뷰 예시를 고르기 전에 맥주 시음 의견을 찾으세요. 2026-10-01에 고유 게시물
5개를 확인했습니다. 상한은 5개였습니다. 링크가 붙은 짧은 캡션은 태도를 분명히 알
만큼 맥락이 충분하지 않을 수 있습니다.

#### 도킹 발표 인용

[SpaceX 도킹 발표 인용](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-space-launches)

정해진 시각 이후에 도킹 발표 1개를 인용한 게시물을 검토하세요. 2026-10-01에 고유
게시물 5개를 확인했습니다. 상한은 5개였습니다. 인용은 반응뿐 아니라 초대나
중립적인 설명일 수도 있습니다.

#### 생일 답글

[NASA 생일 답글](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-replies-to-a-news-post)

생일 게시물 1개에 직접 달린 답글을 검토하세요. 2026-10-01에 고유 게시물 5개를
확인했습니다. 상한은 5개였습니다. 루트 게시물의 맥락이 없으면 답글에 대한 답변의
의미를 알기 어려울 수 있습니다.

결과를 살펴보는 동안에는 `maxItems`를 작게 유지하세요. 상한은 출력을 제한할 뿐
공급량을 제한하지 않습니다. 조건에 맞는 게시물이 더 적으면 필터를 바꾸기 전에
실행 보고서를 확인하세요. 날짜나 최소 참여 기준처럼 설정을 한 번에 1개씩
넓히세요. 바꾼 설정을 기록해 두세요.

분석이 실패하면 `analysis.reason`을 확인하고 해당 ID만 다시 시도하세요. 게시물의
답글이 불완전해 보이면 무료 진단 행을 확인하세요. X가 보여 준 답글이 X가 집계한
수보다 적을 때 그 사실을 알려 줍니다. 미디어 캡션은 이미지나 동영상에 보이는
모든 것을 설명하지 못합니다. 인용이나 답글 맥락이 없으면 답변이 불확실해질 수
있습니다.

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

## 자주 묻는 질문 & 지원

자주 묻는 질문에 먼저 답하고, 이어서 도움받을 곳을 안내합니다.

### AI 계정, X API 키나 로그인이 필요한가요?

아니요. Xquik의 X Tweet Sentiment Analysis는 가격에 AI 비용이 포함되어 있습니다.
AI 계정, 토큰, 키가 모두 필요 없습니다. X API 키, 로그인, 자격 증명도 필요
없습니다.

### 직접 만든 질문을 쓸 수 있나요?

네. 직접 만든 `analysis.questions`가 기본 질문을 대신합니다. `choice`, `score`
또는 `probability` 질문을 1개에서 8개까지 보내세요. choice 질문에는 카테고리를
2개에서 255개까지 넣을 수 있습니다. score 질문에는 순서가 있는 단계가 2개 이상
필요합니다. 비교하려는 실행끼리는 같은 질문을 유지하세요.

### 분석이 실패했거나 건너뛴 행은 왜 나오나요?

`analysis.status`가 `failed` 또는 `skipped`입니다. Actor가 게시물을 수집해
전달했지만 AI 분석이 끝나지 않았습니다. `analysis.reason`에 원인이 나옵니다.
`context_limit`은 맥락 & 대상이 길어 게시물이 들어갈 자리가 없다는 뜻입니다.
`service_unavailable`은 분석 서비스를 잠시 쓸 수 없었다는 뜻입니다. 이런 행에는
결과 요금이 없습니다. `analysis.context`를 줄이거나 해당 ID를 다시 실행하세요.

게시물이 `maxContextBytes`보다 길어도 Actor는 분석합니다. 인용한 게시물 & 답글
대상 게시물을 먼저 자르고, 그다음 게시물 본문을 자릅니다. 이때
`analysis.contextAvailability.postText`는 `truncated`가 됩니다. 텍스트를 더
남기려면 `maxContextBytes`를 최대 64,000까지 올리세요.

### 분석이 사실을 검증하나요?

아니요. 답변은 게시물이 표현하는 내용 & 그 내용을 제시하는 방식을 설명합니다.
확률은 사실 여부가 아니라 AI의 확신 정도를 나타냅니다. 중요한 분류는 원본
게시물과 대조해 검토하세요. 모든 행에 원본 게시물이 남아 있습니다.

### 어떤 언어를 지원하나요?

추출은 X가 제공하는 모든 언어를 지원합니다. 저희는 영어 고객 시나리오로 분석을
먼저 검증합니다. 지원하는 다른 언어도 같은 구조로 답변을 반환합니다. `unclear`
카테고리 & 확률은 모든 언어에서 불확실성을 보여 줍니다.

### 비용을 제한하려면 어떻게 하나요?

필터, 중복 제거 & `maxItems`는 분석 전에 적용됩니다. 필터에 맞고 중복되지 않은
게시물에만 요금을 냅니다. 정확한 검색 연산자, 날짜 범위 & 최소 참여 기준을
쓰세요. 큰 실행 전에 작은 `maxItems`로 시작해 답변 품질을 확인하세요.

### X 데이터를 분석해도 합법인가요?

이 Actor는 공개 X 필드를 요청합니다. 결과에는 개인정보가 들어 있을 수 있습니다.
적법한 목적인지 확인하고 적용되는 개인정보 보호 규정을 따르세요. 확실하지 않으면
자격을 갖춘 법률 전문가에게 문의하세요.

### API, 스케줄 & 연동을 사용할 수 있나요?

네. Python, JavaScript & cURL 예시는
[API 탭](https://apify.com/xquik/x-tweet-sentiment-analysis/api)을 보세요. 반복
실행에는 Apify [스케줄](https://docs.apify.com/platform/schedules)을 쓰세요.
무엇이 바뀌었는지 보려면 이전 데이터셋 ID를 `monitor.baselineDatasetId`로
넘기세요. Apify 연동으로 실행을 웹훅, Make, Zapier, n8n & Google Sheets에도
연결할 수 있습니다.

### 도움은 어디서 받을 수 있나요?

실행 ID와 함께
[Issues 탭](https://apify.com/xquik/x-tweet-sentiment-analysis/issues)에서
이슈를 여세요. 키-값 저장소의 무료 진단이 확인이 필요한 실행의 원인을
설명합니다. 행을 하나도 받지 못한 실행은 상태에서 이유를 알려 줍니다.
