[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · **한국어** ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer가 Xquik MCP를 코딩 에이전트에 연결하는 모습](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Framer가 Xquik 스크레이퍼를 Claude Code, Codex, Cursor 등과 함께 사용하는 방법](https://youtu.be/4UOSpoOoC3Y?t=367)을
6:07부터 보세요.

Xquik은 세계에서 가장 빠르고 저렴한 X(Twitter) 스크레이퍼 서비스이며, 가장
완전한 X 데이터를 제공합니다. Xquik의 X Email Scraper는 X 쿠키나 로그인 없이
계정이 자신의 X 프로필에 공개한 이메일을 가져옵니다. 다른 Apify Actor는 대부분
필터링이나 중복 제거 전에 요금을 부과합니다. Xquik은 필터에 맞고 중복되지 않은
결과를 전달했을 때만 요금을 받습니다.

사용자 아이디를 붙여넣거나, 계정의 팔로워를 스캔하거나, X 사용자를 검색하면
이메일을 공개한 프로필을 모두 받으며, 이메일이 맨 앞에 나옵니다. 이메일이 없는
프로필은 전달하지 않으며 요금도 없습니다. 요금은 **전달된 행 1개당
$0.00015**이며, Apify 플랫폼 사용료는 Apify가 따로 청구합니다.

> Xquik은 독립적인 제3자 서비스입니다. X Corp와 제휴 관계가 없습니다.
> "Twitter"와 "X"는 X Corp의 상표입니다.

## 모든 행에 들어 있는 연락처 정보

- 프로필이 공개한 첫 번째 이메일을 소문자로 바꾼 값.
- 그 이메일의 도메인 & 이메일이 들어 있는 프로필 필드. 필드는 자기소개, 이름
  또는 위치입니다.
- "name [at] site [dot] com"처럼 풀어 쓴 것까지 포함한 프로필의 모든 이메일.
- WhatsApp 링크 등 프로필이 공개한 전화번호.
- 프로필의 웹사이트 & 자기소개 링크, 그리고 LinkedIn, GitHub 또는 Telegram 같은
  각 링크의 네트워크.
- 이름, 자기소개, 각종 수치, 인증, 날짜 & 이미지를 담은 전체 공개 프로필.
- 실행 1번에 쓸 수 있는 3가지 출처. 계정, 그 계정의 팔로워 또는 팔로잉 & 사용자
  검색입니다.
- 이메일 도메인, 비즈니스 이메일, 팔로워, 계정 연령, 자기소개 & 위치 필터.
- @가 있거나 없는 사용자 아이디, `x.com` & `twitter.com` URL & 숫자 사용자 ID.
- 과금 전 중복 제거.
- Apify 데이터셋에서 JSON, CSV, Excel, XML & RSS로 내보내기.
- Apify 마이그레이션 후 저장된 상태에서 이어서 진행.

## X 프로필에서 이메일을 가져오는 방법

Apify가 처음인가요? 먼저
[무료 계정을 만드세요](https://console.apify.com/sign-up?fpr=xquik). 무료
요금제는 신용카드가 필요 없고 매달 쓸 수 있는 $5를 줍니다. 프로필 1개당
$0.00015이므로 $5면 플랫폼 사용료를 빼고 프로필을 최대 33,000개 받을 수
있습니다. 그런 다음 여기로 돌아와 Try for free를 누르세요.

1. Apify Console에서 Xquik의 X Email Scraper를 여세요.
2. `twitterHandles`에 사용자 아이디, 프로필 URL 또는 사용자 ID를 붙여넣거나
   `searchTerms`를 추가하세요.
3. 계정 대신 각 계정의 팔로워를 스캔하려면 `expandFollowers`를 켜세요.
4. `maxItems`로 전달할 행 수의 상한을 정하고 Start를 클릭하세요.
5. 데이터셋을 JSON, CSV 또는 Excel로 내려받거나 Apify API를 사용하세요.

어느 단계에서도 X 쿠키, 로그인 또는 API 키를 입력하지 않습니다.

## 입력

`twitterHandles`는 계정을 가리키는 모든 형식을 받으며, 섞어서 넣어도 됩니다.
실행은 각 계정을 확인하고 이메일을 공개한 계정을 전달합니다.

```json
{
  "twitterHandles": ["sample_user", "@sample_org", "https://x.com/sample_shop"],
  "maxItems": 1000
}
```

`startUrls` & `userIds`도 같은 형식을 받습니다. `expandFollowers`를 켜면 실행은
계정 대신 각 계정의 팔로워를 읽고, 이메일을 공개한 팔로워를 남깁니다.
`expansionRelation`으로 `Followers` 또는 `Following`을 고릅니다.

```json
{
  "twitterHandles": ["sample_org"],
  "expandFollowers": true,
  "expansionRelation": "Followers",
  "maxScan": 10000,
  "emailDomains": "example.com, example.org"
}
```

`searchTerms`는 이름, 사용자 아이디 또는 자기소개의 단어로 X 사용자를
검색합니다. 검색어 1개가 검색 1번입니다.

```json
{
  "searchTerms": ["booking", "founder"],
  "businessEmailOnly": true,
  "minFollowers": 1000
}
```

팔로워 400명 중 약 1명이 이메일을 공개하므로, 팔로워 스캔은 전달하는 것보다 훨씬
많은 프로필을 읽습니다. `maxScan`은 실행이 목록이나 검색마다 읽는 프로필 수의
상한입니다. 기본값은 10,000입니다. 실행이 목록을 여기서 멈추면 실행 상태가 읽은
행 수를 알려 주며, 더 읽으려면 `maxScan`을 높이세요. 스캔한 프로필은 무료입니다.

`emailDomains`는 이메일이 입력한 도메인이나 그 하위 도메인에 속한 프로필만
남깁니다. `businessEmailOnly`는 Gmail 같은 무료 웹메일이 아닌 이메일이 있는
프로필만 남깁니다. `minFollowers`, `maxFollowers`, `minAccountAgeDays`,
`verifiedOnly`, `hasWebsite`, `hasLocation`, `bioContains` &
`locationContains`는 프로필을 더 좁힙니다. 모든 필터는 과금 전에 적용됩니다.

`searchQueries` & `keyword`는 `searchTerms`의 다른 이름으로,
`maxFollowersPerHandle`은 `maxScan`의 다른 이름으로 쓸 수 있습니다. 입력에 2번
들어간 계정은 1번만 전달하고 과금합니다. 문제없이 끝난 작은 실행은
`run-report`를 건너뛰어 Apify 사용량을 아낍니다. 모든 실행에서 이 레코드를
기록하려면 `alwaysSaveRunRecords`를 켜세요.

### 다른 이메일 Actor에서 옮겨오기

이미 쓰는 입력을 그대로 붙여넣으세요. Xquik의 X Email Scraper는 다른 Actor의
다음 필드 이름을 읽습니다. 각 줄은 그쪽 필드를 먼저 적고, 이어서 연결되는 필드를
적습니다.

- `requireEmail`에 대응하는 필드는 필요 없습니다. 전달된 프로필은 모두 이메일을
  공개한 프로필입니다.
- `requireWebsite` 필드는 `hasWebsite`에 매핑됩니다. 웹사이트 필드에 링크가
  하나라도 있는 프로필을 남기며, 실행 상태가 이를 알립니다.
- `bioKeywords` 필드는 `bioContains`에 매핑됩니다. 용어 중 1개만 일치하면
  됩니다.
- 값이 1개인 `locationKeywords` 필드는 `locationContains`에 매핑됩니다. 값이 더
  많으면 읽기나 과금 전에 실행이 멈춥니다.
- 목록으로 보낸 `emailDomains` 필드는 `emailDomains`에 매핑됩니다.
- `outputEmail`, `resolveShortLinks`에 대응하는 필드는 필요 없습니다. 모든 행에
  해당 이메일 & X의 전체 링크가 들어 있습니다.
- `findEmails`, `extractEmails`에 대응하는 필드는 필요 없습니다. 행에는 프로필이
  X에 공개한 이메일이 들어 있습니다. 실행 상태가 이 Actor는 연결된 사이트를 읽지
  않는다고 알립니다.
- `validateEmails`에 대응하는 필드는 필요 없습니다. 이 Actor는 메일함을 확인하지
  않으므로 실행 상태가 이메일이 공개된 그대로 나온다고 알립니다.

이 이름 중 하나 & 그 표준 필드를 함께 설정하면 표준 필드 값을 씁니다. 실행
로그에 무시된 필드가 나옵니다.

## 출력

이메일을 공개한 프로필 1개가 데이터셋 행 1개입니다. 연락처 정보인 `email`,
`emailDomain`, `emailSource` & `contactInfo`가 먼저 나옵니다. 이어서 `id`,
`username`, `name`, `description`, `followers`, `following`, `verified`,
`verifiedType`, `createdAt`, `profilePicture` 등 전체 공개 프로필이 나옵니다.
원본에 없는 필드는 행에서 빠집니다. Xquik의 X Email Scraper는 값을 지어내지
않습니다.

예시는 샘플 값입니다. 실제 결과는 실시간 데이터를 따릅니다. 행은 다음과
같습니다.

```json
{
  "email": "press@example.com",
  "emailDomain": "example.com",
  "emailSource": "bio",
  "contactInfo": {
    "emails": [
      {
        "value": "press@example.com",
        "domain": "example.com",
        "source": "bio"
      },
      {
        "value": "jane@example.org",
        "domain": "example.org",
        "source": "bio",
        "writtenAs": "jane [at] example [dot] org"
      }
    ],
    "phones": [
      {
        "value": "+14155550123",
        "source": "bio",
        "writtenAs": "+1 (415) 555-0123"
      }
    ],
    "links": [
      { "url": "https://example.com", "network": "website", "source": "url" }
    ]
  },
  "id": "1234567890",
  "username": "sample_user",
  "name": "Sample User",
  "description": "Press: press@example.com",
  "followers": 1200,
  "verified": true,
  "createdAt": "2017-03-21T20:50:14.000Z",
  "resultType": "profile",
  "sourceTarget": "sample_user"
}
```

`resultType`은 계정이나 검색 결과이면 `profile`, 팔로워이면 `profileFollower`,
누군가가 팔로우하는 계정이면 `profileFollowing`입니다. `sourceTarget`은 행이
나온 계정이나 검색어를 알려 줍니다.

## 이메일의 의미

이메일은 계정이 자신의 프로필, 곧 자기소개나 이름, 위치에 직접 적은 주소입니다.
Actor는 계정이 공개한 그대로 반환하며 소문자로만 바꿉니다. 주소가 메일을
받는지는 확인하지 않으며, 프로필이 링크한 웹사이트도 읽지 않습니다. 계정이 쓴
표기가 다를 때는 "jane [at] example [dot] org"처럼 그 표기가 `writtenAs`에
들어갑니다.

전화번호는 프로필이 WhatsApp 링크나 +로 시작하는 번호처럼 다른 것으로 볼 수 없는
형식으로 적었을 때만 나옵니다. 연도, 개수 또는 가격은 전화번호로 읽지 않습니다.

## X 프로필에서 이메일을 가져오는 비용은 얼마인가요?

모든 Apify 요금제에서 전달된 행 1개당 $0.00015입니다. Apify 플랫폼 사용료는
Apify가 따로 청구합니다.

더 많이 수집하려면 선불 사용량이 더 많은
[Apify 요금제를 고르세요](https://apify.com/pricing?fpr=xquik).

- 전달된 데이터 행 1개마다 한 번 과금합니다. 진단은 `diagnostics`에서 무료로
  제공합니다.
- 시작 또는 조회 요금이 없습니다.
- 이메일이 없는 프로필은 행도 요금도 추가하지 않습니다.
- X에 없는 계정은 행도 요금도 추가하지 않습니다.
- 과금 전에 중복을 제거합니다.
- Apify의 최대 총 청구액 설정에 따라 전달되는 행 수가 제한됩니다.

팔로워 스캔은 초당 약 350개의 프로필을 읽고 400개 중 약 1개를 남기므로, 적은
행을 찾는 데 시간이 걸립니다. `maxScan`이 그 시간을 제한합니다.

## 제한 & 복구

Xquik의 X Email Scraper는 실행 1번에 여러 계정, 목록 & 검색을 읽습니다. Apify가
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
`scan_limit`, `target_not_found`, `target_suspended`, `target_failed` &
`deadline_reached`입니다. 찾을 수 없거나 정지된 대상 또는 `maxScan`에서 멈춘
목록은 다른 원인으로 실행이 멈췄을 때만 원인 목록에 들어갑니다. 원인 중 하나라도
재시도할 수 있으면 실행도 `retryable`입니다.

실행이 `maxScan`에서 멈춘 목록은 실행을 일찍 끝내지 않습니다. 행이 있는 실행은
정상 종료하며, 상태가 읽은 행 수를 알려 주고 `maxScan`을 높이라고 안내합니다.
이때는 진단을 기록하지 않아 레코드 쓰기 1번을 아낍니다. 실행 보고서는 이런
목록을 `scanLimitedTargets`에 셉니다.

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

아니요. Xquik의 X Email Scraper는 X 쿠키, API 키, 로그인, 자격 증명이 모두 필요
없습니다. 모든 읽기는 Xquik 인프라에서 실행됩니다.

### 이메일은 어디에서 나오나요?

프로필 자체에서 나옵니다. 계정이 직접 쓴 자기소개, 이름 & 위치입니다. Actor는
게시물도 링크된 웹사이트도 읽지 않으므로, 모든 이메일은 계정이 자신의 X 프로필에
공개한 것입니다.

### Actor가 이메일이 작동하는지 확인하나요?

아니요. 각 주소를 계정이 공개한 그대로 반환합니다. 주소가 메일을 받는지는
확인하지 않습니다.

### 팔로워 스캔이 적은 행만 전달한 이유는 무엇인가요?

팔로워 400명 중 약 1명이 이메일을 공개합니다. 실행 상태는 실행에서 읽은 행 수를
알려 줍니다. 목록을 더 깊이 읽으려면 `maxScan`을 높이세요. 또는 booking 같은
단어로 `searchTerms`를 쓰면 훨씬 많은 행이 남습니다.

### 실행 1번에 프로필을 몇 개까지 확인할 수 있나요?

붙여넣은 만큼 확인합니다. 실행 1번으로 100,000행 이상을 받을 수 있습니다. 목록이
더 길면 `maxItems`를 양식의 기본값인 1,000보다 높이세요.

### X 프로필에서 이메일을 수집해도 합법인가요?

Xquik의 X Email Scraper는 공개 X 필드를 요청합니다. 결과에는 개인정보가 들어
있습니다. 적법한 목적인지 확인하고, 적용되는 개인정보 보호 & 이메일 규정을
따르고, 수신 거부 요청을 존중하세요. 확실하지 않으면 자격을 갖춘 법률 전문가에게
문의하세요.

### 실행 결과가 비어 있는 이유는 무엇인가요?

먼저 실행 상태를 읽으세요. 결과가 없는 실행의 상태는 X에서 찾을 수 없는 계정마다
사용자 아이디, ID 또는 URL을 확인하라고 안내합니다. 이메일이 없는 프로필은 행을
추가하지 않습니다. 무료 `diagnostics` 출력은 확인할 일이 있을 때 나타납니다. 그
안의 `stopCauses`는 원인마다 따라 할 `nextAction`을 알려 줍니다.

### API, 스케줄 & 연동을 사용할 수 있나요?

네. Apify API나 Xquik REST API를 사용하세요.
[API 탭](https://apify.com/xquik/x-email-scraper/api)에 Python, JavaScript &
cURL 예시가 있습니다. Apify
[스케줄](https://docs.apify.com/platform/schedules)로 Xquik의 X Email Scraper를
cron 일정에 맞춰 실행할 수 있습니다. 에이전트는
[Apify MCP](https://docs.apify.com/platform/integrations/mcp)를 사용합니다. 이전
빌드가 꼭 필요하지 않다면 `latest`를 사용하세요.

### 도움은 어디서 받을 수 있나요?

실행 ID와 함께 [Issues 탭](https://apify.com/xquik/x-email-scraper/issues)에서
이슈를 여세요. 키-값 저장소의 무료 진단이 확인이 필요한 실행의 원인을
설명합니다. 행을 하나도 받지 못한 실행은 상태에서 이유를 알려 줍니다.

### 맞춤 솔루션을 받을 수 있나요?

네. [Issues 탭](https://apify.com/xquik/x-email-scraper/issues)에 필요한 내용을
적어 주세요. Xquik은 대시보드, REST API, MCP 서버 & 웹훅도 제공합니다. Xquik
웹사이트는 [Apify 프로필](https://apify.com/xquik)에서 찾을 수 있습니다.
