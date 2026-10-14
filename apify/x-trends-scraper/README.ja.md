[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · [简体中文](README.zh-CN.md) · **日本語** · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![FramerがXquik MCPをコーディングエージェントに接続する様子](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[FramerがXquikのスクレイパーをClaude Code、Codex、Cursorなどと一緒に使う様子](https://youtu.be/4UOSpoOoC3Y?t=367)を6:07から視聴できます。

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。XquikのX Trends Scraperは、地域別のリアルタイムトレンドを、順位、ボリューム&クエリとともに収集します。他のApify Actorの多くは、フィルタリングや重複排除の前に課金します。Xquikが課金するのは、配信した結果のうち、重複がなくフィルター条件に合うものだけです。

1回の実行で、多数の地域の現在のTwitterトレンドをスクレイピングできます。XquikのTwitterトレンドアーカイブから、過去のトレンドを読み取ることもできます。アーカイブは2026-10-13 02:20 UTCから始まります。料金は**配信された行1件につき$0.00015**で、プラットフォームの利用料はApifyが別途請求します。X APIキーもログインも不要です。

> Xquikは独立したサードパーティサービスです。X Corpとは提携していません。
> 「Twitter」および「X」はX Corpの商標です。

## 地域&トレンドデータ

- 同時に読み取る複数の国、都市、WOEID。
- 地域ごとに最大50件の現在のトレンド。
- Twitterトレンドアーカイブにある過去のトレンド。日付&時刻で指定でき、2026-10-13以降が対象です。
- Xがトレンドを提供するすべての場所の一覧。WOEID、国&種類が付きます。
- Xの場所検索。Xのポスト検索で使える場所IDが付きます。
- Xのハッシュフラッグ。一部のハッシュタグの後ろにXが表示するカスタム絵文字です。
- 順位、トピック、クエリ、ポスト数、検索URL、WOEID & 取得元の地域。
- すべての行に付く地域の帰属情報。
- ハッシュタグの行&ポスト数がある行を示すフラグ。
- 課金前の、同等な入力の重複排除。
- ApifyのデータセットによるJSON、CSV、Excel、XML & RSSのエクスポート。
- Apifyのマイグレーション後に、保存した状態から再開する実行。

## Xのトレンドをスクレイピングする方法

Apifyを初めて使いますか？まず[無料アカウントを作成してください](https://console.apify.com/sign-up?fpr=xquik)。無料プランはクレジットカード不要&毎月$5分を使えます。1トレンドあたり$0.00015なので、プラットフォーム利用料を別にすると、$5で最大33,000件のトレンドをまかなえます。その後、このページに戻ってTry for freeを押してください。

1. Apify ConsoleでXquikのX Trends Scraperを開きます。
2. 地域名を `locations` に、または数値のWOEIDを `woeids` に入力します。
3. `maxTrendsPerLocation` を、地域ごとに最大50件の範囲で設定します。
4. `maxItems` で実行全体の配信行数に上限をかけ、Startをクリックします。
5. データセットをJSON、CSV、Excelのいずれかでダウンロードするか、Apify APIを使います。

## 入力

地域名、数値のWOEID、またはその両方を使えます。

```json
{
  "locations": ["Worldwide", "United States", "Turkey"],
  "maxTrendsPerLocation": 50,
  "maxItems": 150
}
```

`locations` には、Xがトレンドを提供する国や都市を指定できます。たとえばWorldwide、United States、Japan、Londonです。2文字の国コードも使えます。Xがトレンドを提供しない名前は、行を返さず、料金もかかりません。`woeids` には数値のWOEIDを指定します。

すべての名前&WOEIDを見るには、`listLocations` をオンにします。すると実行は、トレンドの代わりに、Xがトレンドを提供する場所を一覧にします。

```json
{ "listLocations": true, "country": "TR", "maxItems": 100 }
```

`country` には、名前か2文字のコードを指定します。`placeType` には、`country`、`town`、`worldwide`、`unknown` のいずれかを指定します。`nameContains` は、名前に指定したテキストを含む場所を残します。3つとも空にすると、すべての場所を一覧にします。

Xの場所を名前で検索するには、`placeSearchTerms` を入力します。すると実行は、トレンドの代わりに場所を返します。

```json
{ "placeSearchTerms": ["New York"], "maxItems": 20 }
```

各場所には、Xのポスト検索が `place` として受け付ける `id` が入ります。場所はXが順位付けするので、実行ごとに順序が変わることがあります。Xは1つの名前につき最大20件の場所を挙げます。New Yorkなど一部の名前では、それより少なくなります。実行は、入力した名前を持つ場所だけを残します。そのため、New Delhiは行を返さず、料金もかかりません。

`maxItems` は実行全体に上限をかけ、検索語の順に埋めていきます。そのため、最初の検索語が上限をすべて使うことがあります。各検索語に均等に割り当てるには、`maxItemsPerTarget` を設定します。

```json
{
  "placeSearchTerms": ["Paris", "Rome"],
  "maxItems": 20,
  "maxItemsPerTarget": 10
}
```

Xのハッシュフラッグを一覧にするには、`listHashflags` をオンにします。ハッシュフラッグは、Xが一定の期間、ハッシュタグの後ろに表示するカスタム絵文字です。

```json
{ "listHashflags": true, "hashtagContains": "football" }
```

実行は、Xが今表示しているハッシュフラッグを一覧にします。終了したもの&今後のものも加えるには、`activeOnly` をオフにします。`hashtagContains` は、指定したテキストを含むハッシュタグを残します。

昨日や過去の任意の時点でTwitterのトレンドに何が入っていたかを見るには、`at` を入力してください。すると実行は地域ごとに、その時点に最も近い保存済みリストを読み取ります。

```json
{ "locations": ["Turkey"], "at": "2026-10-13T14:00:00Z" }
```

`at` には、2026-10-13のような日付、2026-10-13T14:00:00Zのような時刻、またはUnix秒を指定できます。タイムゾーンのない時刻はUTCとして扱います。Xquikは地域ごとに1時間あたり12件のリストを保存し、それぞれを25か月間保持します。Twitterトレンドの履歴は2026-10-13 02:20 UTCから始まります。どの保存済みリストからも24時間を超えて離れた時点は、行を返さず、料金もかかりません。

`at` には、実行時点からさかのぼる期間も指定できます。数値 & `s`、`m`、`h`、`d` のいずれかで書きます。`24h` にすると、毎日のスケジュールが実行のたびに昨日のトレンドを読み取ります。

```json
{ "locations": ["Turkey"], "at": "24h" }
```

期間を指定するには、`from` & `to` を入力してください。実行は `every` の間隔ごとに保存済みリストを1件返します。間隔は `15m`、`1h`、`1d` のように指定します。

```json
{
  "locations": ["Turkey"],
  "from": "2026-10-13",
  "to": "2026-10-14",
  "every": "1h",
  "maxItems": 1200
}
```

`to` がなければ、期間は現在で終わります。`every` がなければ、実行は1時間ごとに1件のリストを返します。保存済みリストのない間隔は行を返しません。`from` & `to` にも期間を指定できるため、`from` を `24h` にすると直近24時間を読み取ります。`at` は `from` & `to` より優先されます。

1回の実行が読み取る行の種類は1つです。`listLocations` は `listHashflags` より優先され、`listHashflags` は `placeSearchTerms` より優先されます。どれも指定しなければ、実行はトレンドを読み取ります。

問題なく終わった小規模な実行は、`run-report` を省いてApifyの利用料を節約します。毎回書き込むには `alwaysSaveRunRecords` をオンにしてください。

## 出力

各トレンドがデータセットの1行になります。行には `name`、`rank`、`tweetVolume`、`query`、`url`、`woeid`、`sourceTarget` & `resultType` が入ります。`sourceTarget` は、入力したままの地域です。取得元にないフィールドは、行にも入りません。XquikのX Trends Scraperは値を作り出しません。

例はサンプル値です。結果にはライブデータが反映されます。トレンドの行は次のようになります。

```json
{
  "name": "#SampleTrend",
  "rank": 1,
  "tweetVolume": 12000,
  "isHashtag": true,
  "woeid": 1,
  "sourceTarget": "Worldwide"
}
```

`at` または期間で読み取った行には、`capturedAt` も入ります。これはXquikがそのリストをXから読み取った時刻です。`at` の行には、指定した時刻を示す `requestedAt` も入ります。Xquikはどちらの値も推定しません。

`listLocations` を使うと、各場所がデータセットの1行になります。行には `woeid`、`name`、`country`、`countryCode`、`placeType`、`placeTypeCode`、`parentWoeid`、`url` & `resultType` が入ります。`url` は、その場所に対するXの従来の参照先で、開けないことがあります。トレンド地域の行は次のようになります。

```json
{
  "woeid": 2344116,
  "name": "Istanbul",
  "country": "Turkey",
  "countryCode": "TR",
  "placeType": "Town",
  "placeTypeCode": 7,
  "parentWoeid": 23424969,
  "resultType": "trendLocation"
}
```

`placeSearchTerms` を使うと、各場所がデータセットの1行になります。行には `id`、`name`、`fullName`、`country`、`countryCode`、`placeType`、`url`、`centroid`、`boundingBox`、`attributes`、`containedWithin`、`sourceTarget` & `resultType` が入ります。`centroid` には、経度、緯度の順に入ります。場所の行は次のようになります。

```json
{
  "id": "0123456789abcdef",
  "name": "Sample City",
  "fullName": "Sample City, Sample Country",
  "country": "Sample Country",
  "countryCode": "US",
  "placeType": "city",
  "centroid": [-73.97, 40.78],
  "sourceTarget": "New York",
  "resultType": "place"
}
```

`listHashflags` を使うと、各ハッシュフラッグがデータセットの1行になります。行には `hashtag`、`assetUrl`、`startsAt`、`endsAt`、`isHashfettiEnabled`、`animations` & `resultType` が入ります。ハッシュフラッグの行は次のようになります。

```json
{
  "hashtag": "SampleHashtag",
  "assetUrl": "https://abs.twimg.com/hashflags/Sample/Sample.png",
  "startsAt": "2026-10-02T10:00:00.000Z",
  "endsAt": "2027-01-03T14:59:00.000Z",
  "isHashfettiEnabled": false,
  "animations": [],
  "resultType": "hashflag"
}
```

## 出力の列

実行が各行を読み取った後、8つの入力でその形を整えます。コードの実行&料金の変更はありません。

| フィールド | 動作 |
| --- | --- |
| `fields` | 書いたとおりの順序&表記で、指定したフィールドだけを残す |
| `omitFields` | 指定したフィールドを除き、残りを保持する |
| `renameFields` | フィールドを新しい名前の列に移す |
| `flatten` | 入れ子の各オブジェクトをトップレベルの列にする |
| `fillMissingFields` | 残すフィールドが行にない場合は `null` で埋める。デフォルトでオン |
| `joinFields` | 指定した各リストを1つのテキスト値にする |
| `joinSeparator` | 結合した項目の間に入るテキスト。デフォルトはカンマ&スペース |
| `constantFields` | すべての行に同じテキストが入る列を加える |

- オブジェクト内のフィールドは、ドットでつないで指定します。大文字小文字&アンダースコアの違いは問いません。
- どの行も `id` を残します。
- `fields` を使うと、行にないフィールドは `null` として届きます。そのため、どの行も同じ列を持ちます。
- フィールド名が間違っていると、読み取り&課金の前に実行が止まります。
- 名前を確認できない場合、実行は読み取りを続け、見当たらなかった名前を最後に挙げます。
- 他のActor向けに書いたマップ関数やjqフィルターは、実行が無視します。

## Xのトレンドのスクレイピングにはいくらかかりますか？

どのApifyプランでも、配信された行1件につき$0.00015です。プラットフォームの利用料は、Apifyが別途請求します。

より多くの量が必要なら、前払いの利用枠が多い[Apifyプランを選んでください](https://apify.com/pricing?fpr=xquik)。

- 課金は配信したデータ行1件につき1回です。`diagnostics` の診断情報は無料です。
- トレンド地域、場所、ハッシュフラッグの行の料金は、トレンドの行と同じです。
- 開始、クエリ、地域の料金はかかりません。
- 重複排除は課金の前に行います。
- Apifyの最大合計課金額の設定で、配信する行数に上限をかけられます。

## 制限&復旧

XquikのX Trends Scraperは、1回の実行で多数の地域を読み取ります。Apifyが実行を再起動しても、配信済みの行&進捗は残ります。このActor独自の時間制限はありません。設定したApifyのタイムアウトには従います。

抽出が中断されると、無料の `partial` 診断を書き込みます。取得できた結果はそのまま残ります。再試行する前に `availableResults`、`failedTargets`、`retryable` & `nextAction` を確認してください。Actorの正常終了が示すのは配信の完了です。抽出が最後まで終わったことは意味しません。

実行ステータスは、早期停止の原因をすべて示します。`stopCauses` は各原因を挙げ、それぞれに `message`、`retryable` & `nextAction` を付けます。原因は `target_not_found`、`target_failed`、`pagination_safety_limit` & `deadline_reached` です。存在しない対象が一覧に入るのは、別の原因で実行が止まった場合だけです。いずれかの原因が再試行可能なら、実行も `retryable` になります。

## 関連するXquik Actor

すべてのXquik Actorは、同じ抽出エンジン、フィルター優先の課金&診断機能を共有しています。必要なデータに合うものを選んでください。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper)は、検索、プロフィールのタイムライン、リスト&ポストIDから、50以上のフィルター&フラットなエクスポート付きでポストをスクレイピングします。分析なしでポストデータが必要なときに使います。1行あたり$0.00015から。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper)は、ユーザー名、ID、URLから、プロフィールとそのポスト、返信、メディア&フォロワーをスクレイピングします。検索ではなくアカウントから始めるときに使います。1行あたり$0.00015から。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper)は、25以上のフィルターで、ポストへの返信、コメント&会話全体をスクレイピングします。ポストの下の議論が必要なときに使います。1行あたり$0.00015から。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper)は、ポストのURLやIDから、返信、引用ポスト、リポストしたユーザー&スレッドを一括でスクレイピングします。誰がポストに反応したかを測るときに使います。1行あたり$0.00015から。
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper)は、11のフィルターを使い、ポストの引用ポストを、テキスト、メディア、件数&著者とともにスクレイピングします。ポストを引用した人&その発言を調べるときに使います。1ポストあたり$0.00015から。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper)は、フォロワー、フォロー中、リストのメンバー、購読者&コミュニティのメンバーをプロフィール行としてスクレイピングします。オーディエンスやメンバーの一覧が必要なときに使います。1プロフィールあたり$0.00015から。
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper)は、ユーザー名、自己紹介&所在地でユーザーを検索し、フォロワー数、認証、アカウント年数&所在地で絞り込みます。検索からアカウントの一覧を作るときに使います。1プロフィールあたり$0.00015から。
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper)は、Xの「アカウントの所在地」ラベル、Xへの接続方法&ユーザー名の変更履歴から、アカウントの所在地を確認します。アカウントの所在地を精査するときに使います。1アカウントあたり$0.00015から。
- [X Email Scraper](https://apify.com/xquik/x-email-scraper)は、ユーザー名、フォロワー、ユーザー検索から、アカウントがプロフィールで公開しているメールアドレス、電話番号&リンクを取得します。プロフィールが公開しているメールアドレスが必要なときに使います。1プロフィールあたり$0.00015から。
- [X List Scraper](https://apify.com/xquik/x-list-scraper)は、リストのURLやIDから、リストのポスト、メンバー&フォロワーをスクレイピングします。厳選したリストを情報源にするときに使います。1行あたり$0.00015から。
- [X Community Scraper](https://apify.com/xquik/x-community-scraper)は、コミュニティの情報、ポスト、検索結果、メンバー&モデレーターをスクレイピングします。Xのコミュニティを情報源にするときに使います。1行あたり$0.00015から。
- [X Space Scraper](https://apify.com/xquik/x-space-scraper)は、キーワードでスペースを見つけ、タイトル、状態、時刻、リスナー数、ホスト&スピーカーを読み取ります。URLやIDでブロードキャストも読み取ります。Xのライブ音声&ライブ動画を追うときに使います。スペースまたはブロードキャスト1件あたり$0.00015から。
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper)は、キーワード、勤務地、勤務形態、職位レベル&企業からXの求人を、給与&応募リンクとともにスクレイピングします。Xに掲載された求人を集めるときに使います。1求人あたり$0.00015から。
- [X Article Scraper](https://apify.com/xquik/x-article-scraper)は、長文のXの記事を、カバー画像、著者、日付&指標とともに、Markdown & テキストでスクレイピングします。ポストではなく記事の本文が必要なときに使います。1記事あたり$0.00015から。
- [X Media Downloader](https://apify.com/xquik/x-media-downloader)は、ポストやプロフィールの写真、動画 & GIFを、MP4 & メタデータのオプション付きで抽出または保存します。メディアファイルそのものが必要なときに使います。1メディア行あたり$0.00015から。
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring)は、ブランドへの言及を、AIによる関連性、感情&顧客体験の回答とともに追跡し、実行どうしを比較します。ブランドを継続して見守るときに使います。分析済みポスト1件あたり$0.0003から。
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis)は、すべてのポストに、態度、強度&皮肉の確率のラベルをAIで付けます。任意のトピックの全体的な感情が必要なときに使います。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)は、強気、弱気、中立、混在のいずれかのスタンス、コンテンツの種類、確信度&資産との関連性のラベルをAIで付けます。株、暗号資産、トレードの話題を追うときに使います。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)は、ニュースのポストに、形式、情報源の明示&トピックとの関連性のラベルをAIで付けます。報道と論評を分けるときに使います。分析済みポスト1件あたり$0.0003から。
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)は、すべてのポストについて、独自のカテゴリー、スコア&はい/いいえの質問にAIで答えます。既定の分析が自分のラベルに合わないときに使います。分析済みポスト1件あたり$0.0003から。
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)は、AIによる8つの特性の回答から、すべてのポストについて0から100のViral Score & 判定を推定します。ポストが広がる理由や伸びない理由を調べるときに使います。分析済みポスト1件あたり$0.0003から。

## よくある質問

よくある質問に答えたあと、サポートを受けられる場所を案内します。

### X APIキーやログインは必要ですか？

いいえ。XquikのX Trends Scraperは、X APIキー、ログイン、認証情報を必要としません。

### Xのトレンドをスクレイピングしても合法ですか？

XquikのX Trends Scraperは、Xの公開フィールドを取得します。結果には個人データが含まれることがあります。目的が合法であることを確認し、適用されるプライバシー規則に従ってください。判断に迷う場合は、資格のある弁護士に相談してください。

### 実行結果が0件だったのはなぜですか？

まず実行ステータスを確認してください。結果が空の実行では、ステータスが対象&フィルターの確認を促します。対応が必要なことがあると、無料の `diagnostics` 出力が現れます。その `stopCauses` は、原因ごとに従うべき `nextAction` を示します。Xがトレンドを提供しない地域は、行を返しません。Xが受け付ける名前を見るには、`listLocations` をオンにしてください。

### 過去のTwitterトレンドをスクレイピングできますか？

はい。2026-10-13 02:20 UTC以降が対象です。過去の1時点には `at` を、期間には `from` & `to` を入力してください。スケジュールでは、`24h` のような期間を入力してください。各行には、保存済みリストの時刻を示す `capturedAt` が入ります。

### API、スケジュール&連携は使えますか？

はい。50個の公開タスクかXquik REST APIから選べます。[APIタブ](https://apify.com/xquik/x-trends-scraper/api)には、Python、JavaScript & cURLの例があります。Apifyの[スケジュール](https://docs.apify.com/platform/schedules)で、XquikのX Trends Scraperをcronで実行できます。エージェントは[Apify MCP](https://docs.apify.com/platform/integrations/mcp)を使います。古いビルドが必要な場合を除き、`latest` を使ってください。

### どこでサポートを受けられますか？

実行IDを添えて、[Issuesタブ](https://apify.com/xquik/x-trends-scraper/issues)でissueを開いてください。キーバリューストアにある無料の診断情報が、対応が必要な実行について説明します。行が1件も返らなかった実行は、その理由をステータスで示します。

### カスタムソリューションを依頼できますか？

はい。必要な内容を[Issuesタブ](https://apify.com/xquik/x-trends-scraper/issues)に書いてください。Xquikは、ダッシュボード、REST API、MCPサーバー & Webhookも提供しています。Xquikのウェブサイトは、Xquikの[Apifyプロフィール](https://apify.com/xquik)にあります。
