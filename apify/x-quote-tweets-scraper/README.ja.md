[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · [简体中文](README.zh-CN.md) · **日本語** · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![FramerがXquik MCPをコーディングエージェントに接続する様子](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[FramerがXquikのスクレイパーをClaude Code、Codex、Cursorなどと一緒に使う様子](https://youtu.be/4UOSpoOoC3Y?t=367)を6:07から視聴できます。

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。XquikのX Quote Tweets Scraperは、XのCookieやログインなしで、Xの公開ポストを引用したポストを収集します。他のApify Actorの多くは、フィルタリングや重複排除の前に課金します。Xquikが課金するのは、配信した結果のうち、重複がなくフィルター条件に合うものだけです。

ポストのURLかポストIDを貼り付けると、1回の実行で、各ポストについてXが返すすべての引用ポストを取得できます。各行には、引用ポスト、その著者の公開プロフィールの全体&引用元のポストが入ります。料金は**配信された行1件につき$0.00015**で、プラットフォームの利用料はApifyが別途請求します。

> Xquikは独立したサードパーティサービスです。X Corpとは提携していません。
> 「Twitter」および「X」はX Corpの商標です。

## すべての行に入る引用データ

- 引用ポストの全文、リンク、言語&ポストした日時。
- いいね数、返信数、リポスト数、引用数、表示回数&ブックマーク数。
- 名前、自己紹介、フォロワー数、認証などを含む、著者の公開プロフィールの全体。
- 写真、動画&GIFと、それぞれのリンク。
- テキストに含まれるハッシュタグ、メンション&リンク。
- 同じ形式で入る、引用元のポストそのもの。
- その行が引用している入力のポストを示す `sourceTarget`。
- 実行内での行の順番を示す `position` & 配信時刻を示す `scrapedAt`。
- 1回の実行で読み取る多数のポスト。どのポストも、Xが返す分を最後まで読み取ります。
- 新しい順、またはXが最も高く評価する引用ポストの順。
- 11個のフィルター。言語、日付、メディアの種類、6つの最小数&認証済みの著者で絞り込めます。
- ポストではなく人が必要なときの、著者1人につき1行。
- `x.com` & `twitter.com` のポストURL、または数値のポストID。
- 課金前の重複排除。
- ApifyのデータセットによるJSON、CSV、Excel、XML & RSSのエクスポート。
- Apifyのマイグレーション後に、保存した状態から再開する実行。

## 引用ポストをスクレイピングする方法

Apifyを初めて使いますか？まず[無料アカウントを作成してください](https://console.apify.com/sign-up?fpr=xquik)。無料プランはクレジットカード不要&毎月$5分を使えます。1ポストあたり$0.00015なので、プラットフォーム利用料を別にすると、$5で最大33,000件のポストをまかなえます。その後、このページに戻ってTry for freeを押してください。

1. Apify ConsoleでXquikのX Quote Tweets Scraperを開きます。
2. ポストのURLを `startUrls` に、またはポストIDを `tweetIds` に貼り付けます。
3. `maxItems` で配信する行数の上限を決め、Startをクリックします。
4. データセットをJSON、CSV、Excelのいずれかでダウンロードするか、Apify APIを使います。

どの手順でも、XのCookie、ログイン、APIキーを入力することはありません。実行をまたいでページのカーソルを引き継ぐ必要もありません。

## 入力

`startUrls` は、各ポストURLを文字列のまま、または `{ "url": "..." }` オブジェクトとして受け取ります。`tweetIds` はポストIDを受け取り、ポストのURLも指定できます。

```json
{
  "startUrls": [
    "https://x.com/OpenAI/status/2082577277246972300",
    { "url": "https://twitter.com/jack/status/20" }
  ],
  "tweetIds": ["2082201573976056245"],
  "maxItems": 1000
}
```

並び順、フィルター&上限は、ポストと並べて指定します。

```json
{
  "tweetIds": ["2082577277246972300"],
  "sort": "top",
  "language": "en",
  "minLikes": 10,
  "sinceDate": "2026-10-01",
  "maxItemsPerTarget": 200,
  "uniqueAuthors": true
}
```

- `sort` を `latest` にすると、新しい引用ポストが先に並びます。`top` にすると、Xが最も高く評価する引用ポストが先に並びます。
- `includeReplies` は、Xの「引用」画面に並ぶとおりに、そのポストを引用した返信を残します。オフにしない限りオンのままです。
- `uniqueAuthors` は、各著者について、その実行で最初の引用ポストを残します。その場合、データセットには引用ポストごとではなく著者ごとに1行が入ります。支払うのは配信された行の分です。
- `maxItems` は実行全体の上限を決め、`maxItemsPerTarget` はポストごとの上限を決めます。
- フィルターは `language`、`sinceDate`、`untilDate`、`mediaType`、`minLikes`、`minReplies`、`minRetweets`、`minQuotes`、`minViews`、`minBookmarks` & `verifiedOnly` です。

入力で2回指定したポストは、1回だけ読み取ります。`tweetUrls`、`tweetId`、`tweets` & `tweet_id` は、ポストを指定する別名として使えます。問題なく終わった小規模な実行は、`run-report` を省いてApifyの利用料を節約します。毎回書き込むには `alwaysSaveRunRecords` をオンにしてください。

## 出力

各引用ポストがデータセットの1行になり、`id`、`url`、`text`、`createdAt`、`lang`、`likeCount`、`replyCount`、`retweetCount`、`quoteCount`、`viewCount`、`bookmarkCount`、`media`、`entities`、`author`、`quotedTweetId` & `quoted_tweet` が入ります。Actorは `sourceTarget`、`position`、`scrapedAt` & `resultType` を追加します。取得元にないフィールドは、行にも入りません。XquikのX Quote Tweets Scraperは値を作り出しません。

例はサンプル値です。結果にはライブデータが反映されます。行は次のようになります。

```json
{
  "id": "1900000000000000001",
  "url": "https://x.com/sample_user/status/1900000000000000001",
  "text": "Worth a read. The second chart says it all.",
  "createdAt": "2026-10-11T09:00:00.000Z",
  "lang": "en",
  "likeCount": 42,
  "replyCount": 3,
  "retweetCount": 5,
  "quoteCount": 1,
  "viewCount": 1800,
  "bookmarkCount": 2,
  "author": {
    "id": "1234567890",
    "username": "sample_user",
    "name": "Sample User",
    "followers": 1200,
    "verified": true
  },
  "quotedTweetId": "1900000000000000000",
  "quoted_tweet": {
    "id": "1900000000000000000",
    "text": "Our new report is out."
  },
  "resultType": "quotes",
  "sourceTarget": "1900000000000000000",
  "position": 1,
  "scrapedAt": "2026-10-12T09:00:00.000Z"
}
```

`position` は、フィルター&重複排除の後に、配信された行を1から数えます。データセットには2つのテーブルビューがあります。「Quote Tweets」は、各引用ポストを各種の件数とともに表示します。「Quote Authors」は、各ポストを誰が引用したかを表示し、著者のプロフィールのフィールドを列にします。

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

計算列を加えるには、その名前を `fields` か `renameFields` に書きます。

| 列 | 計算式 |
| --- | --- |
| `totalEngagement` | `likeCount` + `replyCount` + `retweetCount` + `quoteCount`。欠けた件数は0として足す |
| `engagementRate` | `totalEngagement` × 100 ÷ 著者の `followers`、小数点以下4桁まで |
| `engagementPerView` | `totalEngagement` × 100 ÷ `viewCount`、小数点以下4桁まで |

これらの件数がない行では、`totalEngagement` は `null` です。除数がないか0の場合、率は `null` です。

## Xが返す内容

2つの制限はXによるものです。XquikのX Quote Tweets Scraperは、それをはっきり示します。

- 引用が非常に多いポストでは、どこまで過去の引用ポストをさかのぼれるかをXの検索が決めます。実行は、Xが返すすべての引用ポストを読み取り、そこで止まります。
- `top` はXによる順位付けで、Xquikによるものではありません。いいね数の順ではありません。後の行のいいね数が、前の行より多いこともあります。

## 引用ポストのスクレイピングにはいくらかかりますか？

どのApifyプランでも、配信された行1件につき$0.00015です。プラットフォームの利用料は、Apifyが別途請求します。

より多くの量が必要なら、前払いの利用枠が多い[Apifyプランを選んでください](https://apify.com/pricing?fpr=xquik)。

- 課金は配信したデータ行1件につき1回です。`diagnostics` の診断情報は無料です。
- 開始料金はかかりません。
- Xに存在しないポストでは、行も料金も追加されません。
- フィルター & `uniqueAuthors` は課金の前に適用されるので、除外された引用ポストに料金はかかりません。
- 重複排除は課金の前に行います。
- Apifyの最大合計課金額の設定で、配信する行数に上限をかけられます。

## 制限&復旧

XquikのX Quote Tweets Scraperは、1回の実行で多数のポストを読み取ります。Apifyが実行を再起動しても、配信済みの行&進捗は残ります。このActor独自の時間制限はありません。設定したApifyのタイムアウトには従います。

実行ステータスは、Xで一致するものが見つからないポストを挙げ、URLかIDの確認を促します。抽出が中断されると、無料の `partial` 診断を書き込みます。取得できた結果はそのまま残ります。再試行する前に `availableResults`、`failedTargets`、`retryable` & `nextAction` を確認してください。Actorの正常終了が示すのは配信の完了です。抽出が最後まで終わったことは意味しません。

実行ステータスは、早期停止の原因をすべて示します。`stopCauses` は各原因を挙げ、それぞれに `message`、`retryable` & `nextAction` を付けます。いずれかの原因が再試行可能なら、実行も `retryable` になります。

## 関連するXquik Actor

すべてのXquik Actorは、同じ抽出エンジン、フィルター優先の課金&診断機能を共有しています。必要なデータに合うものを選んでください。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper)は、検索、プロフィールのタイムライン、リスト&ポストIDから、50以上のフィルター&フラットなエクスポート付きでポストをスクレイピングします。分析なしでポストデータが必要なときに使います。1行あたり$0.00015から。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper)は、ユーザー名、ID、URLから、プロフィールとそのポスト、返信、メディア&フォロワーをスクレイピングします。検索ではなくアカウントから始めるときに使います。1行あたり$0.00015から。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper)は、25以上のフィルターで、ポストへの返信、コメント&会話全体をスクレイピングします。ポストの下の議論が必要なときに使います。1行あたり$0.00015から。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper)は、ポストのURLやIDから、返信、引用ポスト、リポストしたユーザー&スレッドを一括でスクレイピングします。誰がポストに反応したかを測るときに使います。1行あたり$0.00015から。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper)は、フォロワー、フォロー中、リストのメンバー、購読者&コミュニティのメンバーをプロフィール行としてスクレイピングします。オーディエンスやメンバーの一覧が必要なときに使います。1プロフィールあたり$0.00015から。
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper)は、ユーザー名、自己紹介&所在地でユーザーを検索し、フォロワー数、認証、アカウント年数&所在地で絞り込みます。検索からアカウントの一覧を作るときに使います。1プロフィールあたり$0.00015から。
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper)は、Xの「アカウントの所在地」ラベル、Xへの接続方法&ユーザー名の変更履歴から、アカウントの所在地を確認します。アカウントの所在地を精査するときに使います。1アカウントあたり$0.00015から。
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

## よくある質問

よくある質問に答えたあと、サポートを受けられる場所を案内します。

### XのCookie、APIキー、ログインは必要ですか？

いいえ。XquikのX Quote Tweets Scraperは、XのCookie、APIキー、ログイン、認証情報を必要としません。読み取りはすべてXquikのインフラで行います。

### 1回の実行で多数のポストの引用ポストをスクレイピングできますか？

はい。ポストのURLやポストIDを必要なだけ貼り付けてください。各行の `sourceTarget` が、その行がどのポストを引用しているかを示します。

### 1回の実行で何件の引用ポストを返せますか？

1回の実行で100,000行以上を返せます。すべてをエクスポートするには、`maxItems` をフォームの初期値である1,000より大きくしてください。

### 引用が膨大なポストで、返る引用ポストがカウンターの表示より少ないのはなぜですか？

引用が非常に多いポストでは、どこまで過去の引用ポストをさかのぼれるかをXの検索が決めます。実行は、Xが返すすべての引用ポストを配信します。カウンターには、非公開アカウントや削除されたアカウントの引用ポストも含まれます。

### ポストを引用した人ごとに1行を取得するにはどうすればよいですか？

`uniqueAuthors` をオンにしてください。実行は各著者の最初の引用ポストを残し、それ以降の引用ポストは課金せずにスキップします。

### 引用ポストをスクレイピングしても合法ですか？

XquikのX Quote Tweets Scraperは、Xの公開ポストを取得します。結果には個人データが含まれることがあります。目的が合法であることを確認し、適用されるプライバシー規則に従ってください。判断に迷う場合は、資格のある弁護士に相談してください。

### 実行結果が0件だったのはなぜですか？

まず実行ステータスを確認してください。結果が空の実行では、Xで一致するポストが見つからないのか、フィルターに合う引用ポストがそのポストにないのかを、ステータスが示します。対応が必要なことがあると、無料の `diagnostics` 出力が現れます。その `stopCauses` は、原因ごとに従うべき `nextAction` を示します。

### API、スケジュール&連携は使えますか？

はい。Apify APIかXquik REST APIを使ってください。[APIタブ](https://apify.com/xquik/x-quote-tweets-scraper/api)には、Python、JavaScript & cURLの例があります。Apifyの[スケジュール](https://docs.apify.com/platform/schedules)で、XquikのX Quote Tweets Scraperをcronで実行できます。エージェントは[Apify MCP](https://docs.apify.com/platform/integrations/mcp)を使います。古いビルドが必要な場合を除き、`latest` を使ってください。

### どこでサポートを受けられますか？

実行IDを添えて、[Issuesタブ](https://apify.com/xquik/x-quote-tweets-scraper/issues)でissueを開いてください。キーバリューストアにある無料の診断情報が、対応が必要な実行について説明します。行が1件も返らなかった実行は、その理由をステータスで示します。

### カスタムソリューションを依頼できますか？

はい。必要な内容を[Issuesタブ](https://apify.com/xquik/x-quote-tweets-scraper/issues)に書いてください。Xquikは、ダッシュボード、REST API、MCPサーバー & Webhookも提供しています。Xquikのウェブサイトは、Xquikの[Apifyプロフィール](https://apify.com/xquik)にあります。
