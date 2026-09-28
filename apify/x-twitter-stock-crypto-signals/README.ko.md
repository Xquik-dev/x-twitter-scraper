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
완전한 X 데이터를 제공합니다. Xquik의 X (Twitter) Stock & Crypto AI Trading
Signals는 게시물(트윗)을 입장 신호로 바꿉니다. 입장은 티커 & 코인마다 강세,
약세, 중립, 혼조 중 하나입니다. 다른 Apify Actor는 대부분 필터링이나 중복 제거
전에 요금을 부과합니다. Xquik은 필터에 맞고 중복되지 않은 결과를 전달했을 때만
요금을 받습니다. AI 비용은 게시물당 가격에 포함되어 있습니다. AI 계정, 토큰,
키가 필요 없습니다.

X(Twitter)의 주식, 암호화폐 & 트레이딩 게시물에 담긴 입장을 읽어 내세요. Xquik의
**X (Twitter) Stock & Crypto AI Trading Signals**는 지정한 자산에 관한 게시물을
수집합니다. 그리고 모든 게시물에 AI 기반 입장, 콘텐츠 유형, 확신도 & 자산
관련성을 더합니다. 단호한 전망을 조심스러운 언급과, 분석을 홍보와 구분하세요.
자산 이름을 다른 뜻으로 쓴 게시물도 찾아내세요.

- **게시물별 입장.** 게시물마다 강세, 약세, 중립, 혼조, 불명확 중 하나로
  분류합니다.
- **콘텐츠 유형.** 분석, 뉴스, 매매 아이디어, 홍보, 유머 & 질문을 구분합니다.
- **확신도.** 단호한 전망 & 포지션을 조심스러운 언급과 구분합니다.
- **관련성.** 티커나 회사 이름이 관련 없는 뜻으로 쓰인 게시물을 걸러 내도록
  돕습니다.
- **완전한 원본 레코드.** 모든 행에 게시물이 제공하는 필드가 모두 남습니다.

> Xquik은 독립적인 제3자 서비스입니다. X Corp와 제휴 관계가 없습니다.
> "Twitter"와 "X"는 X Corp의 상표입니다.

## X 시장 심리 분석 방법

1. `$NVDA lang:en -filter:retweets` 같은 검색어, 캐시태그 쿼리, 프로필 사용자
   아이디 또는 게시물 ID를 추가하세요.
2. `maxItems` & 날짜 범위나 최소 마음에 들어요 수 같은 추출 필터를 설정하세요.
3. 자산 이름, 티커 & 별칭은 `analysis.targets`에 넣고, 자산 설명은
   `analysis.context`에 쓰세요.
4. 실행을 시작하고 데이터셋을 여세요.

```json
{
  "searchTerms": ["$NVDA lang:en -filter:retweets"],
  "maxItems": 500,
  "analysis": {
    "targets": [{ "name": "Nvidia", "aliases": ["NVDA", "$NVDA"] }],
    "context": "The chip maker as a listed stock."
  }
}
```

### Actor가 답하는 질문

| 질문   | 답변                                                   |
| ------ | ------------------------------------------------------ |
| 입장   | 강세, 약세, 중립, 혼조 또는 불명확                     |
| 콘텐츠 | 분석, 뉴스, 매매, 홍보, 유머, 질문 또는 불명확         |
| 확신도 | 0 조심스러운 언급, 1 의견 표명, 2 단호한 전망 또는 포지션 |
| 관련성 | 게시물이 대상을 자산으로 다룰 확률                     |

입장이 중립이나 불명확이면 확신도는 항상 0입니다. 방향이 없는 게시물은 방향을
단호하게 말할 수 없기 때문입니다. 이때 확신도 답변은 모든 확률을 0단계에 두고,
입장 답변의 신뢰도를 그대로 가져옵니다.

답변은 작성자가 표현한 내용을 설명합니다. 투자 조언이 아니며, 주장, 가격, 공시를
검증하지 않습니다.

## 직접 쓴 텍스트 분석

직접 쓴 초안, 답글, 리뷰, 메모를 `texts`에 붙여넣으세요. Xquik의 X (Twitter)
Stock & Crypto AI Trading Signals가 이를 분석합니다. X에서는 아무것도 가져오지
않습니다.

```json
{
  "texts": [
    "$NVDA guidance beat again. I am adding on any dip below 900.",
    "Not touching $BTC until the ETF flows turn positive."
  ]
}
```

- 텍스트 1개가 행 1개가 되며, 게시물과 같은 `analysis` 답변이 담깁니다.
- `tweet.id`는 `text:1`, `text:2` 순으로 매겨지고, `tweet.type`은 `text`입니다.
- 분석한 텍스트 1개의 비용은 분석한 게시물과 같은 $0.0003입니다.
- `texts`를 설정하면 그 텍스트만 분석합니다. X 대상은 따로 실행하세요.

## X 시장 심리 분석 비용은 얼마인가요?

Xquik의 X (Twitter) Stock & Crypto AI Trading Signals는 분석한 게시물 1개당
$0.0003부터입니다. 시작 요금은 없습니다. 가격에는 수집 & AI 비용이 포함되어
있습니다. AI 계정, 토큰, 키가 필요 없습니다. 이 가격으로 게시물당 질문 최대 8개 &
맥락 최대 64,000바이트를 처리합니다. 질문 정의 1개는 최대 8,000바이트까지 쓸 수
있습니다.

추출 필터 & 중복 제거는 분석 전에 실행됩니다. 필터에서 걸러진 행이나 중복 행에는
요금을 내지 않습니다. 실패한 분석, 건너뛴 분석 & 진단 행에는 결과 요금이
없습니다. 컴퓨팅, 저장소 & 전송에 드는 Apify 플랫폼 사용료는 요금제 단가에 따라
Apify가 따로 청구합니다. Pricing 탭에서 확인할 수 있습니다.

## 입력 & 출력 예시

위 입력은 그대로 복사해 쓸 수 있습니다. 줄인 출력 행은 다음과 같습니다.

```json
{
  "tweet": { "id": "2100692112916574711", "text": "…", "likeCount": 31 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      {
        "questionId": "stance",
        "type": "choice",
        "value": "bullish",
        "confidence": 0.86
      },
      {
        "questionId": "content",
        "type": "choice",
        "value": "analysis",
        "confidence": 0.79
      },
      {
        "questionId": "conviction",
        "type": "score",
        "value": 1,
        "confidence": 0.7
      },
      { "questionId": "relevance", "type": "probability", "probability": 0.95 }
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

실행은 다음 4가지 경우에 키-값 저장소에 `analysis-summary` 레코드를 기록합니다.

- 문제가 생겼거나 규모가 큰 경우.
- 시리즈의 첫 실행으로 `baselineDatasetId` 없이 `monitor`를 설정한 경우.
- 비교에서 바뀌었거나, 새로 나왔거나, 비교할 수 없는 게시물을 찾은 경우.
- `alwaysSaveRunRecords`가 켜져 있는 경우.

나머지 실행은 이 레코드를 건너뜁니다. 대신 실행 상태에
`Top stance: bullish in 3 of 5 results.`처럼 가장 많은 답변을 표시합니다. 바뀐
것이 없는 비교는 `No change since the earlier run.`을 표시합니다. 문제가 생긴
실행이나 큰 실행은 `run-report`도 기록합니다. `alwaysSaveRunRecords`가 켜진
실행도 마찬가지입니다. `run-report`는 `results.analysisSummary` 아래에 같은
요약을 한 번 더 담습니다.

요약은 분석한 행, 실패한 행 & 건너뛴 행을 셉니다. 참여 지표를 합산하고 모든
질문을 요약합니다.

- `cashtags`는 `$NVDA` 같은 캐시태그별로 입장을 셉니다. 자산별 강세 비율은
  `choices.stance`에서 구합니다.
- 각 `cashtags` 항목에는 강세 & 약세 개수가 담긴 `signal`이 추가됩니다. 점수
  범위는 -1에서 1까지입니다. 점수는 강세 개수에서 약세 개수를 뺀 값을 행 수로
  나눈 값입니다.
- `stance` 블록에는 참여 가중 분포 & 참여가 가장 많은 강세, 약세 게시물이
  추가됩니다.
- `conviction`은 평균 & 참여 가중 평균을 보고합니다.
- `monitor.changedRows`는 기준 데이터셋 이후 입장이 바뀐 게시물을 나열합니다.
- 모든 행에는 링크된 호스트 이름을 담은 `sourceDomains`가 있습니다.
- `monitor.baselineDatasetId`를 설정하면 요약의 `monitor` 블록이 비교 상태별
  개수를 셉니다. 바뀐 행은 최대 50개까지 나열합니다.

요약의 숫자는 소수점 4자리로 반올림합니다. 결과가 없는 실행은 개수 0 & 평균
`null`을 보고합니다.

모든 결과 행에는 질문 ID를 키로 쓰는 플랫 맵 `answers`도 들어 있습니다. 각 값은
선택된 카테고리, 점수 또는 확률입니다. `Flat answers` 데이터셋 뷰 & CSV나 Excel
내보내기는 질문 1개당 열 1개를 보여 줍니다. 이 열은 게시물 옆에 붙어 있으므로
스프레드시트에서 JSON을 파싱할 필요가 없습니다. 실패하거나 건너뛴 행에는 빈 맵이
들어갑니다.

## 이전 실행과 비교

`monitor.baselineDatasetId`에 같은 분석 설정으로 끝난 이전 실행의 데이터셋 ID를
넣으세요. 비교는 그 실행의 행을 읽습니다. 그래서 이전 실행이 요약을 건너뛰었어도
작동합니다. 그러면 모든 행에 `monitor` 객체가 생깁니다. 상태는 다음 중
하나입니다.

- 기준 데이터셋이 없으면 `first_run`.
- 이전 실행에 없던 게시물은 `new_to_baseline`.
- 이전 실행에 있던 게시물은 `unchanged` 또는 `changed`.

`changes`는 `previous`에서 `current`로 바뀐 입장, 콘텐츠 유형, 확신도를 하나씩
나열합니다. 판정은 카테고리, 반올림한 점수 단계, 0.5 기준의 예/아니오로
비교합니다. 판정이 분명하게 바뀌었을 때만 변경으로 셉니다. 실행 사이에 거의
차이가 없는 경우는 `unchanged`로 남습니다.

기준 데이터셋이 `maxBaselineRows`를 넘거나 다른 설정에서 나왔으면 수집 전에
실행이 멈춥니다. 이때 실행은 진단 행을 기록합니다. `maxBaselineRows`의 기본값은
100,000입니다.

## 태스크 예시

공개 태스크 50개 중에서 고르세요. 각 태스크는 실제 영어 검색 & 상한을 정한
`maxItems`로 시작합니다. 미리 준비된 대상, 맥락 & Overview 데이터셋 뷰도 들어
있습니다. 실행하기 전에 검색이나 대상을 수정하세요.

- [Nvidia (NVDA) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/nvda-market-sentiment-on-x)
- [Tesla (TSLA) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/tsla-market-sentiment-on-x)
- [Apple (AAPL) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/aapl-market-sentiment-on-x)
- [Amazon (AMZN) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/amzn-market-sentiment-on-x)
- [Microsoft (MSFT) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/msft-market-sentiment-on-x)
- [Alphabet (GOOGL) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/googl-market-sentiment-on-x)
- [Meta (META) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/meta-market-sentiment-on-x)
- [AMD (AMD) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/amd-market-sentiment-on-x)
- [Palantir (PLTR) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/pltr-market-sentiment-on-x)
- [Coinbase (COIN) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/coin-market-sentiment-on-x)
- [Strategy (MSTR) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/mstr-market-sentiment-on-x)
- [Robinhood (HOOD) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/hood-market-sentiment-on-x)

나머지 태스크는 Actor 페이지에서 더 많은 브랜드, 주제 & 시장을 다룹니다.

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

## 자주 묻는 질문 & 지원

### AI 계정, X API 키나 로그인이 필요한가요?

아니요. Xquik의 X (Twitter) Stock & Crypto AI Trading Signals는 가격에 AI 비용이
포함되어 있습니다. AI 계정, 토큰, 키가 필요 없습니다. X API 키, 로그인, 자격
증명도 필요 없습니다.

### 한 실행에서 여러 티커를 추적할 수 있나요?

네. 모든 자산을 티커 & 별칭과 함께 `analysis.targets`에 나열하세요. 각 자산의
검색어도 함께 넣으세요. 관련성 답변을 보면 어떤 게시물이 대상을 자산으로
다루는지 알 수 있습니다.

### `analysis.status`가 `failed`나 `skipped`인 행은 왜 생기나요?

Actor가 게시물을 수집해 전달했지만 AI 분석이 끝나지 않은 경우입니다.
`analysis.reason`에 원인이 나옵니다. `context_limit`은 맥락 & 대상이 길어
게시물이 들어갈 자리가 없다는 뜻입니다. `service_unavailable`은 분석 서비스를
잠시 쓸 수 없었다는 뜻입니다. 이런 행에는 결과 요금이 없습니다.
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
검증합니다. 지원하는 다른 언어도 같은 구조로 답변을 반환합니다. 어느 언어에서든
`unclear` 카테고리 & 확률로 불확실성을 드러냅니다.

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
[API 탭](https://apify.com/xquik/x-twitter-stock-crypto-signals/api)을 보세요.
반복 실행에는 Apify [스케줄](https://docs.apify.com/platform/schedules)을
쓰세요. 무엇이 바뀌었는지 보려면 이전 데이터셋 ID를
`monitor.baselineDatasetId`로 넘기세요. Apify 연동으로 실행을 웹훅, Make,
Zapier, n8n & Google Sheets에도 연결할 수 있습니다.

### 도움은 어디서 받을 수 있나요?

Actor 페이지에서 이슈를 열거나 실행 ID와 함께 support@xquik.com으로 문의하세요.
키-값 저장소의 무료 진단이 결과가 없거나, 일부만 나왔거나, 중단된 실행의 원인을
설명합니다.
