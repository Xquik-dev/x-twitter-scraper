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

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。XquikのX Account Location Scraperは、XのCookieやログインなしで、Xアカウントの所在地を確認します。他のApify Actorの多くは、フィルタリングや重複排除の前に課金します。Xquikが課金するのは、配信した結果のうち、重複がなくフィルター条件に合うものだけです。

ユーザー名、プロフィールURL、ユーザーIDを貼り付けると、1回の実行で、すべてのアカウントについてXの「アカウントの所在地」ラベルを取得できます。このラベルは、Xがベストエフォートで示す、アカウントの国または地域です。国籍、居住地、正確な位置ではありません。料金は**配信された行1件につき$0.00015**で、Apifyのプラットフォーム利用料は別途かかります。

> Xquikは独立したサードパーティサービスです。X Corpとは提携していません。
> 「Twitter」および「X」はX Corpの商標です。

## すべての行に入るアカウント情報

- 国または地域で示される、Xの「アカウントの所在地」ラベル。
- その国の2文字のISOコード。
- ラベルが不正確な可能性があるとXが注記しているかどうか。
- Webやアプリストアの国など、アカウントが最初にXへ接続した方法。
- その接続のプラットフォームと国コード。
- ユーザー名の変更回数と、最後に変更した時期。
- Xがアカウントの所属先として表示する組織。
- アカウント作成からの日数と、プロフィールへのリンク。
- 公開プロフィールの全体: 名前、自己紹介、各種の数、認証、日付、画像。
- Xがラベルを伏せたアカウントの、追加料金なしの再読み取り。
- 1回の実行で同時に読み取り、入力順に配信する多数のアカウント。
- @の有無を問わないユーザー名、x.comとtwitter.comのURL、数値のユーザーID。
- 課金前の重複排除。
- ApifyのデータセットによるJSON、CSV、Excel、XML、RSSのエクスポート。
- Apifyのマイグレーション後、保存した状態から再開する実行。

## Xアカウントの所在地を確認する方法

1. Apify ConsoleでXquikのX Account Location Scraperを開きます。
2. ユーザー名、プロフィールURL、ユーザーIDを `twitterHandles` に貼り付けます。
3. `maxItems` で配信する行数の上限を決め、Startをクリックします。
4. データセットをJSON、CSV、Excelでダウンロードするか、Apify APIを使います。

どの手順でも、XのCookie、ログイン情報、APIキーを入力することはありません。

## 入力

`twitterHandles` は、アカウントのどの形式でも受け取ります。混ぜて指定してもかまいません。

```json
{
  "twitterHandles": [
    "BBCWorld",
    "@OpenAI",
    "https://x.com/NASA",
    "https://twitter.com/github",
    "11348282"
  ],
  "maxItems": 1000
}
```

`startUrls` と `userIds` も同じ形式を受け取ります。`startUrls` は、各URLを文字列のまま、または `{ "url": "..." }` オブジェクトとして受け取ります。

```json
{
  "startUrls": ["https://x.com/nasa", { "url": "https://x.com/OpenAI" }],
  "userIds": ["742143"]
}
```

ユーザーIDは、アカウントがユーザー名を変更しても変わりません。手元に残すリストには `userIds` を使ってください。`userNames` は `twitterHandles` の別名として使えます。

入力で2回指定したアカウントは、配信も課金も1回だけです。一方がユーザー名で、もう一方がユーザーIDの場合も同じです。`maxItems` は、入力の先頭から順にアカウントを残します。問題なく終わった小規模な実行は `run-report` を書き込まず、Apifyの利用料を節約します。毎回書き込むには `alwaysSaveRunRecords` をオンにしてください。

## 出力

各アカウントがデータセットの1行になります。先頭には、Xの「このアカウントについて」ページに表示される内容が入ります。`accountBasedIn`、`accountBasedInUnavailable`、`accountBasedInAccurate`、`affiliateUsername`、`connectedVia`、`connectedViaAccurate`、`usernameChanges` です。続いて公開プロフィールの全体が入り、`id`、`username`、`name`、`description`、`followers`、`following`、`verified`、`verifiedType`、`createdAt`、`profilePicture` などが含まれます。最後に、Actorがプロフィールから導き出す5つのフィールドが入ります。`accountBasedInCountryCode`、`connectedViaPlatform`、`connectedViaCountryCode`、`accountAgeDays`、`profileUrl` です。取得元にないフィールドは、行にも入りません。Actorが対応付けられないコードも入りません。XquikのX Account Location Scraperは値を作り出しません。

例はサンプル値です。実際の結果にはライブデータが入ります。行は次のようになります。

```json
{
  "accountBasedIn": {
    "value": "United Kingdom",
    "level": "country",
    "observedAt": "2026-10-12T09:00:00.000Z"
  },
  "accountBasedInAccurate": true,
  "affiliateUsername": "sample_org",
  "connectedVia": "Web",
  "usernameChanges": {
    "count": 1,
    "lastChangedAt": "2021-03-04T10:00:00.000Z"
  },
  "id": "1234567890",
  "username": "sample_user",
  "name": "Sample User",
  "followers": 1200,
  "verified": true,
  "createdAt": "2017-03-21T20:50:14.000Z",
  "accountBasedInCountryCode": "GB",
  "connectedViaPlatform": "web",
  "accountAgeDays": 3491,
  "profileUrl": "https://x.com/sample_user",
  "resultType": "profile",
  "sourceTarget": "sample_user"
}
```

行からは、次の3つのケースを見分けられます。

| 行の内容                          | 意味                                            | 対応                                            |
| --------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `value` のある `accountBasedIn`   | Xはそのアカウントにこのラベルを表示しています。 | そのまま使います。                              |
| `accountBasedIn: null`            | Xはそのアカウントにラベルを表示していません。   | 何もしません。Xには表示するラベルがありません。 |
| `accountBasedInUnavailable: true` | Xは2回の読み取りの両方でラベルを伏せました。    | 後でそのアカウントをもう一度実行します。        |

Xがラベルを伏せると、実行は行を配信する前に、そのアカウントをもう1回読み取ります。2回目の読み取りは無料です。それでも伏せられたラベルは不明であり、存在しないわけではありません。そのような行には、「このアカウントについて」のフィールドを除いた公開プロフィールが入ります。実行ステータスは、こうしたアカウントの数を数えます。3つのケースは、いずれも配信された行1件です。

## ラベルの意味

Xは `accountBasedIn` を、アカウントへのアクセス元IPを集計して推定します。このラベルは、国籍、居住地、身元、登録地、ポストした場所、正確な位置を示すものではありません。`level` は、Xが表示しているのが国か、より広い地域かを示します。`observedAt` は取得した時刻を記録します。ラベルが不正確な可能性があるとXが注記している場合、`accountBasedInAccurate` は `false` です。`connectedVia` は、アカウントが最初にXへ接続した方法を示します。その国が不正確な可能性があるとXが注記している場合、`connectedViaAccurate` は `false` です。`connectedViaPlatform` は `web`、`ios`、`android` のいずれかです。2つの国コードはXが表記する名前から求めるので、地域にはコードがありません。`location` は、本人がプロフィールに入力したテキストで、別のフィールドです。

## Xアカウントの所在地の確認にかかる費用は？

すべてのApifyプランで、配信された行1件につき$0.00015です。Apifyのプラットフォーム利用料は別途かかります。

- 課金は配信したデータ行1件につき1回です。`diagnostics` の診断情報は無料です。
- 開始料金や照会料金はかかりません。
- Xに存在しないアカウントでは、行も料金も追加されません。
- 伏せられたラベルの2回目の読み取りに、追加料金はかかりません。
- 重複排除は課金前に行います。
- Apifyの最大合計課金額の設定で、配信する行数に上限をかけられます。

## 制限と復旧

XquikのX Account Location Scraperは、1回の実行で多数のアカウントを読み取ります。Apifyが実行を再起動しても、配信済みの行と進捗は残ります。このActor独自の時間制限はありません。設定したApifyのタイムアウトは守ります。

実行ステータスは、Xで一致するものが見つからないアカウントを挙げ、ユーザー名、ID、URLの確認を促します。凍結されたアカウントも挙げます。抽出が中断されると、無料の `partial` 診断を書き込みます。取得済みの結果はそのまま残ります。再試行する前に `availableResults`、`failedTargets`、`retryable`、`nextAction` を確認してください。Actorの正常終了が示すのは配信の完了です。抽出が最後まで終わったことは意味しません。

実行ステータスは、早期停止の原因をすべて示します。`stopCauses` は各原因を挙げ、それぞれに `message`、`retryable`、`nextAction` を付けます。原因は `target_not_found`、`target_suspended`、`target_failed`、`deadline_reached` です。存在しない対象や凍結された対象が一覧に入るのは、別の原因で実行が止まった場合だけです。いずれかの原因が再試行可能なら、実行も `retryable` になります。

## 関連するXquik Actor

すべてのXquik Actorは、同じ抽出エンジン、フィルター優先の課金、診断機能を共有しています。必要なデータに合うものを選んでください。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): 検索、プロフィールのタイムライン、リスト、ポストIDから、50以上のフィルターでポストをスクレイピングし、フラットな形式で出力します。分析なしでポストデータが必要なときに使います。1行あたり$0.00015から。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): ユーザー名、ID、URLから、プロフィールとそのポスト、返信、メディア、フォロワーをスクレイピングします。検索ではなくアカウントから始めるときに使います。1行あたり$0.00015から。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): 25以上のフィルターで、ポストへの返信、コメント、会話全体をスクレイピングします。ポストの下の議論が必要なときに使います。1行あたり$0.00015から。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): ポストのURLまたはIDから、返信、引用ポスト、リポストしたユーザー、スレッドを一括でスクレイピングします。誰がポストに反応したかを測るときに使います。1行あたり$0.00015から。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): フォロワー、フォロー中、リストのメンバー、購読者、コミュニティのメンバーをプロフィール行としてスクレイピングします。オーディエンスやメンバーの一覧が必要なときに使います。1プロフィールあたり$0.00015から。
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper): ユーザー名、自己紹介、所在地でユーザーを検索し、フォロワー数、認証、アカウント年数、所在地で絞り込みます。検索からアカウントの一覧を作るときに使います。1プロフィールあたり$0.00015から。
- [X List Scraper](https://apify.com/xquik/x-list-scraper): リストのURLまたはIDから、リストのポスト、メンバー、フォロワーをスクレイピングします。厳選したリストを情報源にするときに使います。1行あたり$0.00015から。
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): コミュニティの情報、ポスト、検索結果、メンバー、モデレーターをスクレイピングします。Xのコミュニティを情報源にするときに使います。1行あたり$0.00015から。
- [X Space Scraper](https://apify.com/xquik/x-space-scraper): キーワードからスペースを見つけ、タイトル、状態、時刻、リスナー数、ホスト、スピーカーを読み取ります。URLまたはIDでブロードキャストも読み取ります。Xのライブ音声とライブ動画を追うときに使います。スペースまたはブロードキャスト1件あたり$0.00015から。
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): 地域別のリアルタイムトレンドを、順位、ボリューム、クエリ、WOEIDとともにスクレイピングします。どこで何がトレンドかを追うときに使います。1トレンドあたり$0.00015から。
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

### XのCookie、APIキー、ログインは必要ですか？

いいえ。XquikのX Account Location Scraperは、XのCookie、APIキー、ログイン、認証情報を必要としません。読み取りはすべてXquikのインフラで実行します。

### ラベルは、アカウントの持ち主が住んでいる場所を示しますか？

いいえ。これは、Xがベストエフォートでアカウントに付けるラベルです。国籍、居住地、正確な位置を示すものではありません。X自身も、一部のラベルに不正確な可能性があると示しています。

### 行に `accountBasedInUnavailable` が入っているのはなぜですか？

Xが、その実行の2回の読み取りの両方でラベルを伏せたためです。ラベルは不明であり、存在しないわけではありません。後でそのアカウントをもう一度実行すると、取得できます。`accountBasedIn: null` は別の状態で、Xがそのアカウントにラベルを表示していないことを意味します。

### 1回の実行で何件のアカウントを確認できますか？

貼り付けただけ確認できます。1回の実行で100,000行以上を返せます。より大きなリストでは、`maxItems` をフォームの初期値である1,000より大きくしてください。

### Xアカウントの所在地を確認しても合法ですか？

XquikのX Account Location Scraperは、Xの公開フィールドを取得します。結果には個人データが含まれることがあります。目的が合法であることを確認し、適用されるプライバシー規則に従ってください。判断に迷う場合は、資格のある弁護士に相談してください。

### 実行結果が0件だったのはなぜですか？

まず実行ステータスを確認してください。結果が空の実行では、Xで一致するものが見つからない各アカウントについて、ステータスがユーザー名、ID、URLの確認を促します。対応が必要なことがあると、無料の `diagnostics` 出力が表示されます。その `stopCauses` は、原因ごとに次に取る行動を `nextAction` で示します。

### API、スケジュール、連携は使えますか？

はい。Apify APIまたはXquik REST APIを使ってください。[APIタブ](https://apify.com/xquik/x-account-location-scraper/api)には、Python、JavaScript、cURLの例があります。Apifyの[スケジュール](https://docs.apify.com/platform/schedules)を使うと、XquikのX Account Location Scraperをcronで実行できます。エージェントは[Apify MCP](https://docs.apify.com/platform/integrations/mcp)から呼び出せます。古いビルドが必要な場合を除き、`latest` を使ってください。

### どこでサポートを受けられますか？

Actorページでissueを開くか、実行IDを添えて<support@xquik.com>に連絡してください。対応が必要な実行は、キーバリューストアにある無料の診断情報が説明します。行が1件も返らなかった実行は、そのステータスで理由を示します。

### カスタムソリューションを依頼できますか？

はい。[xquik.com](https://xquik.com)にアクセスするか、[APIドキュメント](https://docs.xquik.com/introduction)をお読みください。ダッシュボード、API、MCPサーバー、Webhookについて説明しています。
