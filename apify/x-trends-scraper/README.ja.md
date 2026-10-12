<p align="center">
  <a href="README.md">English</a> ·
  <a href="README.es.md">Español</a> ·
  <a href="README.tr.md">Türkçe</a> ·
  <a href="README.zh-CN.md">简体中文</a> ·
  <strong>日本語</strong> ·
  <a href="README.ko.md">한국어</a> ·
  <a href="README.de.md">Deutsch</a> ·
  <a href="README.fr.md">Français</a> ·
  <a href="README.it.md">Italiano</a>
</p>

<table align="center"><tr><td align="center">
<a href="https://youtu.be/4UOSpoOoC3Y?t=367"><img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" width="720" alt="FramerがXquik MCPをコーディングエージェントに接続する様子"></a><br>
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">FramerがXquikのスクレイパーをClaude Code、Codex、Cursorなどと一緒に使う様子を6:07から視聴できます。</a>
</td></tr></table>

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。XquikのX Trends Scraperは、地域別のリアルタイムトレンドを、順位、ボリューム、クエリとともに収集します。他のApify Actorの多くは、フィルタリングや重複排除の前に課金します。Xquikが課金するのは、配信した結果のうち、重複がなくフィルター条件に合うものだけです。

1回の実行で、複数の地域の現在のX(Twitter)トレンドをスクレイピングします。料金は**配信された行1件につき$0.00015**で、Apifyのプラットフォーム利用料は別途かかります。X APIキーやログインは不要です。

> Xquikは独立したサードパーティサービスです。X Corpとは提携していません。「Twitter」および「X」はX Corpの商標です。

## 地域とトレンドデータ

- 同時に読み取る複数の国、都市、WOEID。
- 地域ごとに最大50件の現在のトレンド。
- Xがトレンドを提供するすべての場所の一覧。WOEID、国、種類が付きます。
- Xの場所検索。Xのポスト検索で使える場所IDが付きます。
- Xのハッシュフラッグ: 一部のハッシュタグの後ろにXが表示するカスタム絵文字。
- 順位、トピック、クエリ、ポスト数、検索URL、WOEID、取得元の地域。
- すべての行に付く地域の帰属情報。
- ハッシュタグの行と、ポスト数を取得できる行のラベル。
- 課金前の、同等な入力の重複排除。
- ApifyのデータセットによるJSON、CSV、Excel、XML、RSSのエクスポート。
- Apifyのマイグレーション後、保存した状態から再開する実行。

## Xのトレンドをスクレイピングする方法

1. Apify ConsoleでXquikのX Trends Scraperを開きます。
2. 地域名を`locations`に、数値のWOEIDを`woeids`に入力します。
3. `maxTrendsPerLocation`を設定します。地域ごとに最大50件です。
4. `maxItems`で実行全体の配信行数に上限をかけ、Startをクリックします。
5. データセットをJSON、CSV、Excelでダウンロードするか、Apify APIを使います。

## 入力

地域名、数値のWOEID、またはその両方を使えます。

```json
{
  "locations": ["Worldwide", "United States", "Turkey"],
  "maxTrendsPerLocation": 50,
  "maxItems": 150
}
```

`locations`には、Xがトレンドを提供する国や都市を指定できます。たとえばWorldwide、United States、Japan、Londonです。2文字の国コードも使えます。Xがトレンドを提供しない名前は、行を返さず、料金もかかりません。`woeids`には数値のWOEIDを指定します。

すべての名前とWOEIDを見るには、`listLocations`をオンにします。実行は、トレンドの代わりに、Xがトレンドを提供する場所を一覧にします。

```json
{ "listLocations": true, "country": "TR", "maxItems": 100 }
```

`country`には、名前か2文字のコードを指定します。`placeType`には、`country`、`town`、`worldwide`、`unknown`のいずれかを指定します。`nameContains`は、名前に指定したテキストを含む場所を残します。3つとも空にすると、すべての場所を一覧にします。

Xの場所を名前で検索するには、`placeSearchTerms`を入力します。実行は、トレンドの代わりに場所を返します。

```json
{ "placeSearchTerms": ["New York"], "maxItems": 20 }
```

各場所には、Xのポスト検索が`place`として受け付ける`id`が入ります。場所はXが順位付けするので、実行ごとに順序が変わることがあります。Xは1つの名前につき最大20件の場所を挙げます。New Yorkなど一部の名前では、それより少なくなります。実行は、入力した名前の場所だけを残します。そのため、New Delhiは行を返さず、料金もかかりません。

`maxItems`は実行全体に上限をかけ、検索語の順に埋めていきます。そのため、最初の検索語が上限をすべて使うことがあります。各検索語に均等に割り当てるには、`maxItemsPerTarget`を設定します。

```json
{
  "placeSearchTerms": ["Paris", "Rome"],
  "maxItems": 20,
  "maxItemsPerTarget": 10
}
```

Xのハッシュフラッグを一覧にするには、`listHashflags`をオンにします。ハッシュフラッグは、Xが一定の期間、ハッシュタグの後ろに表示するカスタム絵文字です。

```json
{ "listHashflags": true, "hashtagContains": "football" }
```

実行は、Xが今表示しているハッシュフラッグを一覧にします。終了したものと今後のものも加えるには、`activeOnly`をオフにします。`hashtagContains`は、指定したテキストを含むハッシュタグを残します。

1回の実行が読み取る行の種類は1つです。優先順位は、`listLocations`、`listHashflags`、`placeSearchTerms`の順です。どれも指定しなければ、実行はトレンドを読み取ります。

問題なく終わった小規模な実行は`run-report`を書き込まず、Apifyの利用料を節約します。毎回書き込むには`alwaysSaveRunRecords`をオンにしてください。

## 出力

各トレンドがデータセットの1行になります。行には`name`、`rank`、`tweetVolume`、`query`、`url`、`woeid`、`sourceTarget`、`resultType`が入ります。`sourceTarget`は、入力したままの地域です。取得元にないフィールドは、行にも入りません。XquikのX Trends Scraperは値を作り出しません。

例はサンプル値です。実際の結果にはライブデータが入ります。トレンドの行は次のようになります。

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

`listLocations`を使うと、各場所がデータセットの1行になります。行には`woeid`、`name`、`country`、`countryCode`、`placeType`、`placeTypeCode`、`parentWoeid`、`url`、`resultType`が入ります。`url`は、その場所に対するXの従来の参照先で、開けないことがあります。トレンド地域の行は次のようになります。

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

`placeSearchTerms`を使うと、各場所がデータセットの1行になります。行には`id`、`name`、`fullName`、`country`、`countryCode`、`placeType`、`url`、`centroid`、`boundingBox`、`attributes`、`containedWithin`、`sourceTarget`、`resultType`が入ります。`centroid`には、経度、緯度の順に入ります。場所の行は次のようになります。

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

`listHashflags`を使うと、各ハッシュフラッグがデータセットの1行になります。行には`hashtag`、`assetUrl`、`startsAt`、`endsAt`、`isHashfettiEnabled`、`animations`、`resultType`が入ります。ハッシュフラッグの行は次のようになります。

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

## Xのトレンドのスクレイピングにかかる費用は？

すべてのApifyプランで、配信された行1件につき$0.00015です。Apifyのプラットフォーム利用料は別途かかります。

- 課金は配信したデータ行1件につき1回です。`diagnostics`の診断情報は無料です。
- トレンド地域、場所、ハッシュフラッグの行の料金は、トレンドの行と同じです。
- 開始料金、クエリ料金、地域料金はかかりません。
- 重複排除は課金前に行います。
- Apifyの最大合計課金額の設定で、配信する行数に上限をかけられます。

## 制限と復旧

XquikのX Trends Scraperは、1回の実行で多数の地域を読み取ります。Apifyが実行を再起動しても、配信済みの行と進捗は残ります。このActor独自の時間制限はありません。設定したApifyのタイムアウトは守ります。

抽出が中断されると、無料の`partial`診断を書き込みます。取得済みの結果はそのまま残ります。再試行する前に`availableResults`、`failedTargets`、`retryable`、`nextAction`を確認してください。Actorの正常終了が示すのは配信の完了です。抽出が最後まで終わったことは意味しません。

実行ステータスは、早期停止の原因をすべて示します。`stopCauses`は各原因を挙げ、それぞれに`message`、`retryable`、`nextAction`を付けます。原因は`target_not_found`、`target_failed`、`pagination_safety_limit`、`deadline_reached`です。存在しない対象が一覧に入るのは、別の原因で実行が止まった場合だけです。いずれかの原因が再試行可能なら、実行も`retryable`になります。

## 関連するXquik Actor

すべてのXquik Actorは、同じ抽出エンジン、フィルター優先の課金、診断機能を共有しています。必要なデータに合うものを選んでください。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): 検索、プロフィールのタイムライン、リスト、ポストIDから、50以上のフィルターでポストをスクレイピングし、フラットな形式で出力します。分析なしでポストデータが必要なときに使います。1行あたり$0.00015から。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): ユーザー名、ID、URLから、プロフィールとそのポスト、返信、メディア、フォロワーをスクレイピングします。検索ではなくアカウントから始めるときに使います。1行あたり$0.00015から。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): 25以上のフィルターで、ポストへの返信、コメント、会話全体をスクレイピングします。ポストの下の議論が必要なときに使います。1行あたり$0.00015から。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): ポストのURLまたはIDから、返信、引用ポスト、リポストしたユーザー、スレッドを一括でスクレイピングします。誰がポストに反応したかを測るときに使います。1行あたり$0.00015から。
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper): ポストを引用したポストを、テキスト、メディア、件数、著者とともに、11のフィルターでスクレイピングします。誰がポストを引用し、何と言ったかを調べたいときに使います。1ポストあたり$0.00015から。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): フォロワー、フォロー中、リストのメンバー、購読者、コミュニティのメンバーをプロフィール行としてスクレイピングします。オーディエンスやメンバーの一覧が必要なときに使います。1プロフィールあたり$0.00015から。
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper): ユーザー名、自己紹介、所在地でユーザーを検索し、フォロワー数、認証、アカウント年数、所在地で絞り込みます。検索からアカウントの一覧を作るときに使います。1プロフィールあたり$0.00015から。
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper): Xの「アカウントの所在地」ラベル、Xへの接続方法、ユーザー名の変更履歴から、アカウントの所在地を確認します。アカウントの所在地を確かめたいときに使います。1アカウントあたり$0.00015から。
- [X List Scraper](https://apify.com/xquik/x-list-scraper): リストのURLまたはIDから、リストのポスト、メンバー、フォロワーをスクレイピングします。厳選したリストを情報源にするときに使います。1行あたり$0.00015から。
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): コミュニティの情報、ポスト、検索結果、メンバー、モデレーターをスクレイピングします。Xのコミュニティを情報源にするときに使います。1行あたり$0.00015から。
- [X Space Scraper](https://apify.com/xquik/x-space-scraper): キーワードからスペースを見つけ、タイトル、状態、時刻、リスナー数、ホスト、スピーカーを読み取ります。URLまたはIDでブロードキャストも読み取ります。Xのライブ音声とライブ動画を追うときに使います。スペースまたはブロードキャスト1件あたり$0.00015から。
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper): キーワード、勤務地、勤務形態、職位レベル、企業からXの求人を、給与と応募リンクとともにスクレイピングします。Xに掲載された求人を集めるときに使います。1求人あたり$0.00015から。
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): 長文のXの記事を、カバー画像、著者、日付、指標とともにMarkdownとテキストでスクレイピングします。ポストではなく記事の本文が必要なときに使います。1記事あたり$0.00015から。
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): ポストやプロフィールから写真、動画、GIFを抽出または保存します。MP4とメタデータのオプションがあります。メディアファイルそのものが必要なときに使います。1メディア行あたり$0.00015から。
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring): ブランドへの言及を、AIによる関連性、感情、顧客体験の回答とともに追跡し、実行どうしを比較します。ブランドを継続して見守るときに使います。分析済みポスト1件あたり$0.0003から。
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis): すべてのポストに、AIで態度、強度、皮肉の確率のラベルを付けます。任意のトピックの全体的な感情を知りたいときに使います。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals): AIで、強気、弱気、中立、混在のスタンス、コンテンツの種類、確信度、資産との関連性のラベルを付けます。株、暗号資産、トレードの話題を追うときに使います。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor): AIで、ニュースのポストに形式、情報源の明示、トピックとの関連性のラベルを付けます。報道と論評を分けるときに使います。分析済みポスト1件あたり$0.0003から。
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier): すべてのポストについて、独自のカテゴリー、スコア、はい/いいえの質問にAIが答えます。既定の分析が自分のラベルに合わないときに使います。分析済みポスト1件あたり$0.0003から。
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer): AIによる8つの特性の回答から、すべてのポストについて0から100のViral Scoreと判定を推定します。ポストが広がる理由や伸びない理由を調べるときに使います。分析済みポスト1件あたり$0.0003から。

## よくある質問

よくある質問に答えたあと、サポートを受けられる場所を案内します。

### X APIキーやログインは必要ですか？

いいえ。XquikのX Trends Scraperは、X APIキー、ログイン、認証情報を必要としません。

### Xのトレンドをスクレイピングしても合法ですか？

XquikのX Trends Scraperは、Xの公開フィールドを取得します。結果には個人データが含まれることがあります。目的が合法であることを確認し、適用されるプライバシー規則に従ってください。判断に迷う場合は、資格のある弁護士に相談してください。

### 実行結果が0件だったのはなぜですか？

まず無料の`diagnostics`出力を開いてください。結果が空の実行では、ステータスが対象とフィルターの確認を促します。`stopCauses`は原因ごとに、次に取る行動を`nextAction`で示します。Xがトレンドを提供しない地域は、行を返しません。Xが受け付ける名前を見るには、`listLocations`をオンにしてください。

### API、スケジュール、連携は使えますか？

はい。50個の公開タスクかXquik REST APIから選べます。[APIタブ](https://apify.com/xquik/x-trends-scraper/api)には、Python、JavaScript、cURLの例があります。Apifyの[スケジュール](https://docs.apify.com/platform/schedules)を使うと、XquikのX Trends Scraperをcronで実行できます。エージェントは[Apify MCP](https://docs.apify.com/platform/integrations/mcp)から呼び出せます。古いビルドが必要な場合を除き、`latest`を使ってください。

### どこでサポートを受けられますか？

Actorページでissueを開くか、実行IDを添えてsupport@xquik.comに連絡してください。キーバリューストアにある無料の診断情報が、空の実行、部分的な実行、中断された実行の理由を説明します。

### カスタムソリューションを依頼できますか？

はい。[xquik.com](https://xquik.com)にアクセスするか、[APIドキュメント](https://docs.xquik.com/introduction)をお読みください。ダッシュボード、API、MCPサーバー、Webhookについて説明しています。
