[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · [简体中文](README.zh-CN.md) · **日本語** · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![FramerがXquik MCPをコーディングエージェントに接続する様子](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[FramerがXquikのスクレイパーをClaude Code、Codex、Cursorなどと一緒に使う様子](https://youtu.be/4UOSpoOoC3Y?t=367)を6:07から視聴できます。

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。XquikのX Account Location Scraperは、XのCookieやログインなしで、Xアカウントの所在地を確認します。他のApify Actorの多くは、フィルタリングや重複排除の前に課金します。Xquikが課金するのは、配信した結果のうち、重複がなくフィルター条件に合うものだけです。

ユーザー名、プロフィールURL、ユーザーIDのいずれかを貼り付けると、1回の実行で、すべてのアカウントについてXの「アカウントの所在地」ラベルを取得できます。このラベルは、Xがベストエフォートで示す、アカウントの国か地域です。国籍、居住地、正確な位置ではありません。料金は**配信された行1件につき$0.00015**です。プラットフォームの利用料は、Apifyが別途請求します。

> Xquikは独立したサードパーティサービスです。X Corpとは提携していません。
> 「Twitter」および「X」はX Corpの商標です。

## すべての行に入るアカウント情報

- 国か地域で示される、Xの「アカウントの所在地」ラベル。
- その国の2文字のISOコード。
- ラベルが不正確な可能性があるとXが注記しているかどうか。
- Webやアプリストアの国など、アカウントが最初にXへ接続した方法。
- その接続のプラットフォーム&国コード。
- ユーザー名の変更回数&最後に変更した時期。
- Xがアカウントの所属先として表示する組織。
- アカウント作成からの日数&プロフィールへのリンク。
- 名前、自己紹介、各種カウント、認証、日付&画像を含む公開プロフィールの全体。
- Xがラベルを伏せたアカウントの、追加料金なしの再読み取り。
- 1回の実行で同時に読み取り、入力順に配信する多数のアカウント。
- @の有無を問わないユーザー名、`x.com` & `twitter.com` のURL & 数値のユーザーID。
- 課金前の重複排除。
- ApifyのデータセットによるJSON、CSV、Excel、XML & RSSのエクスポート。
- Apifyのマイグレーション後、保存した状態から再開する実行。

## Xアカウントの所在地を確認する方法

Apifyを初めて使いますか？まず[無料アカウントを作成してください](https://console.apify.com/sign-up?fpr=xquik)。無料プランはクレジットカード不要&毎月$5分を使えます。1アカウントあたり$0.00015なので、プラットフォーム利用料を別にすると、$5で最大33,000件のアカウントをまかなえます。その後、このページに戻ってTry for freeを押してください。

1. Apify ConsoleでXquikのX Account Location Scraperを開きます。
2. ユーザー名、プロフィールURL、ユーザーIDのいずれかを `twitterHandles` に貼り付けます。
3. `maxItems` で配信する行数の上限を決め、Startをクリックします。
4. データセットをJSON、CSV、Excelのいずれかでダウンロードするか、Apify APIを使います。

どの手順でも、XのCookie、ログイン情報、APIキーを入力することはありません。

## 入力

`twitterHandles` は、アカウントのあらゆる形式を、どんな組み合わせでも受け取ります。

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

`startUrls` & `userIds` も同じ形式を受け取ります。`startUrls` は、各URLを文字列のまま、または `{ "url": "..." }` オブジェクトとして受け取ります。

```json
{
  "startUrls": ["https://x.com/nasa", { "url": "https://x.com/OpenAI" }],
  "userIds": ["742143"]
}
```

ユーザーIDは、アカウントがユーザー名を変えても変わりません。そのため、手元に残すリストには `userIds` を使ってください。`userNames` は `twitterHandles` の別名として使えます。

入力で2回指定したアカウントは、配信&課金とも1回だけです。一方がユーザー名で、もう一方がユーザーIDの場合も同じです。`maxItems` は、入力の先頭から順にアカウントを残します。問題なく終わった小規模な実行は、`run-report` を省いてApifyの利用料を節約します。毎回書き込むには `alwaysSaveRunRecords` をオンにしてください。

## 出力

各アカウントがデータセットの1行になります。先頭には、Xの「このアカウントについて」ページに表示される内容が入ります。`accountBasedIn`、`accountBasedInUnavailable`、`accountBasedInAccurate`、`affiliateUsername`、`connectedVia`、`connectedViaAccurate` & `usernameChanges` です。続いて公開プロフィールの全体が入り、`id`、`username`、`name`、`description`、`followers`、`following`、`verified`、`verifiedType`、`createdAt`、`profilePicture` などが含まれます。最後に、このActorがプロフィールから導き出す5つのフィールドが入ります。`accountBasedInCountryCode`、`connectedViaPlatform`、`connectedViaCountryCode`、`accountAgeDays` & `profileUrl` です。取得元にないフィールドは行に入らず、Actorが対応付けられないコードも入りません。XquikのX Account Location Scraperは値を作り出しません。

例はサンプル値です。結果にはライブデータが反映されます。行は次のようになります。

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

| 行の内容 | 意味 | 対応 |
| --- | --- | --- |
| `value` のある `accountBasedIn` | Xはそのアカウントにこのラベルを表示しています。 | そのまま使います。 |
| `accountBasedIn: null` | Xはそのアカウントにラベルを表示していません。 | 何もしません。Xには表示するラベルがありません。 |
| `accountBasedInUnavailable: true` | Xは2回の読み取りの両方でラベルを伏せました。 | 後でそのアカウントをもう一度実行します。 |

Xがラベルを伏せると、実行は行を配信する前に、そのアカウントをもう1回読み取ります。2回目の読み取りは無料です。それでも伏せられたラベルは不明であり、存在しないわけではありません。そのような行には、「このアカウントについて」のフィールドを除いた公開プロフィールが入ります。実行ステータスは、こうしたアカウントの数を数えます。3つのケースは、いずれも配信された行1件です。

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

- オブジェクト内のフィールドは、`accountBasedIn.value` のようにドットでつないで指定します。大文字小文字&アンダースコアの違いは問いません。
- どの行も `id` を残します。
- `fields` を使うと、行にないフィールドは `null` として届きます。そのため、どの行も同じ列を持ちます。
- フィールド名が間違っていると、読み取り&課金の前に実行が止まります。
- 名前を確認できない場合、実行は読み取りを続け、見当たらなかった名前を最後に挙げます。
- 他のActor向けに書いたマップ関数やjqフィルターは、実行が無視します。

## ラベルの意味

Xは `accountBasedIn` を、アカウントへのアクセス元IPを集計して推定します。このラベルは、国籍、居住地、身元、登録地、ポストした場所、正確な位置を示すものではありません。`level` は、Xが表示しているのが国か、より広い地域かを示します。`observedAt` は取得した時刻を記録します。ラベルが不正確な可能性があるとXが注記している場合、`accountBasedInAccurate` は `false` です。`connectedVia` は、アカウントが最初にXへ接続した方法を示します。その国が不正確な可能性があるとXが注記している場合、`connectedViaAccurate` は `false` です。`connectedViaPlatform` は `web`、`ios`、`android` のいずれかです。2つの国コードはXが表記する名前から求めるので、地域にはコードがありません。Xは一部の国を2つの名前で表記します。たとえばTürkiye & Turkeyで、どちらも同じコードになります。`location` は、本人がプロフィールに入力したテキストで、別のフィールドです。

## Xアカウントの所在地の確認にはいくらかかりますか？

どのApifyプランでも、配信された行1件につき$0.00015です。プラットフォームの利用料は、Apifyが別途請求します。

より多くの量が必要なら、前払いの利用枠が多い[Apifyプランを選んでください](https://apify.com/pricing?fpr=xquik)。

- 課金は配信したデータ行1件につき1回です。`diagnostics` の診断情報は無料です。
- 開始料金や照会料金はかかりません。
- Xに存在しないアカウントでは、行も課金も発生しません。
- 伏せられたラベルの2回目の読み取りに、追加料金はかかりません。
- 重複排除は課金前に行います。
- Apifyの最大合計課金額の設定で、配信する行数に上限がかかります。

## 制限&復旧

XquikのX Account Location Scraperは、1回の実行で多数のアカウントを読み取ります。Apifyが実行を再起動しても、配信済みの行&進捗は残ります。このActor独自の時間制限はありません。設定したApifyのタイムアウトは守ります。

実行ステータスは、Xで一致するものが見つからないアカウントを挙げ、ユーザー名、ID、URLの確認を促します。凍結されたアカウントも挙げます。抽出が中断されると、無料の `partial` 診断を書き込みます。取得済みの結果はそのまま残ります。再試行する前に `availableResults`、`failedTargets`、`retryable` & `nextAction` を確認してください。Actorの正常終了が示すのは配信の完了です。抽出が最後まで終わったことは意味しません。

実行ステータスは、早期停止の原因をすべて示します。`stopCauses` は各原因を挙げ、それぞれに `message`、`retryable` & `nextAction` を付けます。原因は `target_not_found`、`target_suspended`、`target_failed` & `deadline_reached` です。存在しない対象や凍結された対象が一覧に入るのは、別の原因で実行が止まった場合だけです。いずれかの原因が再試行可能なら、実行も `retryable` になります。

## 関連するXquik Actor

すべてのXquik Actorは、同じ抽出エンジン、フィルター優先の課金&診断機能を共有しています。必要なデータに合うものを選んでください。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper)は、検索、プロフィールのタイムライン、リスト&ポストIDから、50以上のフィルター&フラットなエクスポート付きでポストをスクレイピングします。分析なしでポストデータが必要なときに使います。1行あたり$0.00015から。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper)は、ユーザー名、ID、URLから、プロフィールとそのポスト、返信、メディア&フォロワーをスクレイピングします。検索ではなくアカウントから始めるときに使います。1行あたり$0.00015から。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper)は、25以上のフィルターで、ポストへの返信、コメント&会話全体をスクレイピングします。ポストの下の議論が必要なときに使います。1行あたり$0.00015から。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper)は、ポストのURLやIDから、返信、引用ポスト、リポストしたユーザー&スレッドを一括でスクレイピングします。誰がポストに反応したかを測るときに使います。1行あたり$0.00015から。
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper)は、11のフィルターを使い、ポストの引用ポストを、テキスト、メディア、件数&著者とともにスクレイピングします。ポストを引用した人&その発言を調べるときに使います。1ポストあたり$0.00015から。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper)は、フォロワー、フォロー中、リストのメンバー、購読者&コミュニティのメンバーをプロフィール行としてスクレイピングします。オーディエンスやメンバーの一覧が必要なときに使います。1プロフィールあたり$0.00015から。
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper)は、ユーザー名、自己紹介&所在地でユーザーを検索し、フォロワー数、認証、アカウント年数&所在地で絞り込みます。検索からアカウントの一覧を作るときに使います。1プロフィールあたり$0.00015から。
- [X Email Scraper](https://apify.com/xquik/x-email-scraper)は、ユーザー名、フォロワー、ユーザー検索から、アカウントがプロフィールで公開しているメールアドレス、電話番号&リンクを取得します。プロフィールが公開しているメールアドレスが必要なときに使います。1プロフィールあたり$0.00015から。
- [X List Scraper](https://apify.com/xquik/x-list-scraper)は、リストのURLやIDから、リストのポスト、メンバー&フォロワーをスクレイピングします。厳選したリストを情報源にするときに使います。1行あたり$0.00015から。
- [X Community Scraper](https://apify.com/xquik/x-community-scraper)は、コミュニティの情報、ポスト、検索結果、メンバー&モデレーターをスクレイピングします。Xのコミュニティを情報源にするときに使います。1行あたり$0.00015から。
- [X Space Scraper](https://apify.com/xquik/x-space-scraper)は、キーワードでスペースを見つけ、タイトル、状態、時刻、リスナー数、ホスト&スピーカーを読み取ります。URLやIDでブロードキャストも読み取ります。Xのライブ音声&ライブ動画を追うときに使います。スペースまたはブロードキャスト1件あたり$0.00015から。
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper)は、地域別のリアルタイムトレンドを、順位、ボリューム、クエリ & WOEIDとともにスクレイピングします。どこで何がトレンドかを追うときに使います。1トレンドあたり$0.00015から。
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper)は、キーワード、勤務地、勤務形態、職位レベル&企業からXの求人を、給与&応募リンクとともにスクレイピングします。Xに掲載された求人を集めるときに使います。1求人あたり$0.00015から。
- [X Article Scraper](https://apify.com/xquik/x-article-scraper)は、長文のXの記事を、カバー画像、著者、日付&指標とともに、Markdown & テキストでスクレイピングします。ポストではなく記事の本文が必要なときに使います。1記事あたり$0.00015から。
- [X Media Downloader](https://apify.com/xquik/x-media-downloader)は、ポストやプロフィールの写真、動画 & GIFを、MP4 & メタデータのオプション付きで抽出または保存します。メディアファイルそのものが必要なときに使います。1メディア行あたり$0.00015から。
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring)は、ブランドへの言及を、AIによる関連性、感情&顧客体験の回答とともに追跡し、実行どうしを比較します。ブランドを継続して見守るときに使います。分析済みポスト1件あたり$0.0003から。
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis)は、すべてのポストに、態度、強度&皮肉の確率のラベルをAIで付けます。任意のトピックの全体的な感情が必要なときに使います。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)は、強気、弱気、中立、混在のいずれかのスタンス、コンテンツの種類、確信度&資産との関連性のラベルをAIで付けます。株、暗号資産、トレードの話題を追うときに使います。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)は、ニュースのポストに、形式、情報源の明示&トピックとの関連性のラベルをAIで付けます。報道と論評を分けるときに使います。分析済みポスト1件あたり$0.0003から。
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)は、すべてのポストについて、独自のカテゴリー、スコア&はい/いいえの質問にAIで答えます。既定の分析が自分のラベルに合わないときに使います。分析済みポスト1件あたり$0.0003から。
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)は、AIによる8つの特性の回答から、すべてのポストについて0から100のViral Score & 判定を推定します。ポストが広がる理由や伸びない理由を調べるときに使います。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) Monitor](https://apify.com/xquik/x-twitter-monitor)は、アカウントの新しいツイート、返信、引用、リポスト、プロフィールの変更を、通常はXに表示されてから一秒もかからずにすべて捕捉し、キーワードのツイートとフォローも捕捉します。Xにツイートが表示されたらすぐにアラートが必要なときに使います。monitor-hourあたり$0.0045から。

## よくある質問

よくある質問に答えたあと、サポートを受けられる場所を案内します。

### XのCookie、APIキー、ログインは必要ですか？

いいえ。XquikのX Account Location Scraperは、XのCookie、APIキー、ログイン、認証情報のどれも必要としません。読み取りはすべてXquikのインフラで実行します。

### ラベルは、アカウントの持ち主が住んでいる場所を示しますか？

いいえ。これは、Xがベストエフォートでアカウントに付けるラベルです。国籍、居住地、正確な位置を示すものではありません。X自身も、一部のラベルに不正確な可能性があると示しています。

### 行に `accountBasedInUnavailable` が入っているのはなぜですか？

Xが、その実行の2回の読み取りの両方でラベルを伏せたためです。ラベルは不明であり、存在しないわけではありません。後でそのアカウントをもう一度実行すると、取得できます。`accountBasedIn: null` は別の状態です。Xがそのアカウントにラベルを表示していないことを意味します。

### 1回の実行で何件のアカウントを確認できますか？

貼り付けただけ確認できます。1回の実行で100,000行以上を返せます。より大きなリストでは、`maxItems` をフォームの初期値である1,000より大きくしてください。

### Xアカウントの所在地を確認しても合法ですか？

XquikのX Account Location Scraperは、Xの公開フィールドを取得します。結果には個人データが含まれることがあります。目的が合法であることを確認し、適用されるプライバシー規則に従ってください。判断に迷う場合は、資格のある弁護士に相談してください。

### 実行結果が0件だったのはなぜですか？

まず実行ステータスを確認してください。結果が空の実行では、Xで一致するものが見つからない各アカウントについて、ステータスがユーザー名、ID、URLの確認を促します。対応が必要なことがあると、無料の `diagnostics` 出力が現れます。その `stopCauses` は、原因ごとに従うべき `nextAction` を示します。

### API、スケジュール&連携は使えますか？

はい。Apify APIかXquik REST APIを使ってください。[APIタブ](https://apify.com/xquik/x-account-location-scraper/api)には、Python、JavaScript & cURLの例があります。Apifyの[スケジュール](https://docs.apify.com/platform/schedules)を使うと、XquikのX Account Location Scraperをcronで実行できます。エージェントは[Apify MCP](https://docs.apify.com/platform/integrations/mcp)を使います。古いビルドが必要な場合を除き、`latest` を使ってください。

### どこでサポートを受けられますか？

実行IDを添えて、[Issuesタブ](https://apify.com/xquik/x-account-location-scraper/issues)でissueを開いてください。キーバリューストアにある無料の診断情報が、対応が必要な実行について説明します。行が1件も返らなかった実行は、その理由をステータスで示します。

### カスタムソリューションを依頼できますか？

はい。必要な内容を[Issuesタブ](https://apify.com/xquik/x-account-location-scraper/issues)に書いてください。Xquikは、ダッシュボード、REST API、MCPサーバー & Webhookも提供しています。Xquikのウェブサイトは、Xquikの[Apifyプロフィール](https://apify.com/xquik)にあります。
