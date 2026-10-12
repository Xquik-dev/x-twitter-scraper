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

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。XquikのX List Scraperは、リストの詳細、ポスト、メンバー、フォロワーを収集し、キーワードでリストを見つけます。他のApify Actorの多くは、フィルタリングや重複排除の前に課金します。Xquikが課金するのは、配信した結果のうち、重複がなくフィルター条件に合うものだけです。

XのリストのURLまたは数値のリストIDから、詳細、ポスト、メンバー、フォロワーをスクレイピングします。検索語で公開リストを見つけることもできます。料金は**配信された行1件につき$0.00015**で、Apifyのプラットフォーム利用料は別途かかります。X APIキーやログインは不要です。

> Xquikは独立したサードパーティサービスです。X Corpとは提携していません。
> 「Twitter」および「X」はX Corpの商標です。

## リストのデータとフィルター

- リストの詳細: 名前、説明、メンバー数、フォロワー数、作成日時、バナー、所有者の公開プロフィール。
- テキスト、著者、指標、メディア、タイムスタンプを含むリストのポスト。
- リストのメンバーとリストのフォロワー。
- キーワードによるリストの検索。各行は1つのリストで、所有者、メンバー数、フォロワー数が付きます。
- リストのポストに返信を含めるオプション。
- 日付、Unix時間、言語、メディア、エンゲージメント、認証、プロフィールのフィルター。
- アカウントが作成した公開リストと、そのアカウントが入っている公開リスト。ユーザー名かプロフィールのURLから取得します。
- 1回の実行で扱える複数のリストとリソースの種類。
- 全体の上限と、リストのリソースまたは検索語ごとの上限。
- Apifyのマイグレーション後に再開する実行。
- 課金前の重複排除。

## Xのリストをスクレイピングする方法

1. Apify ConsoleでXquikのX List Scraperを開きます。
2. リストのURLを `startUrls` に、数値のリストIDを `listIds` に貼り付けます。リストを見つけるには、代わりにキーワードを `searchTerms` に追加します。
3. `resources` を選び、`sinceDate` や `minLikes` などのフィルターを追加します。
4. `maxItems` で配信する行数の上限を決め、Startをクリックします。
5. データセットをJSON、CSV、Excelでダウンロードするか、Apify APIを使います。

`startUrls` は、各URLを文字列のまま、または `{ "url": "..." }` オブジェクトとして受け取ります。

```json
{
  "startUrls": [
    "https://x.com/i/lists/1748648376080666720",
    { "url": "https://x.com/nasa" }
  ]
}
```

## 入力

```json
{
  "listIds": ["1748648376080666720"],
  "resources": ["info", "tweets", "members", "followers"],
  "includeReplies": false,
  "maxItems": 10000
}
```

キーワードでリストを見つけるには、検索語を送ります。

```json
{ "searchTerms": ["space news", "climate science"], "maxItemsPerTarget": 50 }
```

問題なく終わった小規模な実行は `run-report` を書き込まず、Apifyの利用料を節約します。毎回書き込むには `alwaysSaveRunRecords` をオンにしてください。

## 出力

各行の `resultType` は `list`、`listTweet`、`listMember`、`listFollower` のいずれかです。`sourceTarget` には、入力したリストIDか、`list` の行を見つけた検索語が残ります。`list` の行にはリストの詳細が入り、リストごとに1行です。ほかの行は、安定したXquikのポストまたはプロフィールのレスポンス形式を使います。

### アカウントのリスト

各アカウントの公開リストを一覧にするには、ユーザー名を `twitterHandles` に、またはプロフィールのURLを `startUrls` に追加します。

```json
{ "twitterHandles": ["verge"], "accountLists": ["created", "memberships"] }
```

`created` はアカウントが作成したリストを、`memberships` はそのアカウントが入っているリストを一覧にします。各リストは1行です。行には、`createdList` か `listMembership` の `resultType`、ユーザー名を設定した `sourceTarget`、`id`、`name`、`description`、`memberCount`、`subscriberCount`、`createdAt`、`bannerUrl`、`owner` のプロフィールが入ります。Xは非公開リストを所有者にだけ表示するので、非公開リストは含まれません。

各アカウントでは、作成したリストが、入っているリストより先に並びます。Actorは複数のアカウントを並行して読み取るので、異なるアカウントの行は読み取った順に届きます。`sourceTarget` でグループ化してください。

1行は、1つのアカウントと1つのリストの組です。指定したアカウントのうち2つが共有するリストは2行になり、それぞれの下に1行ずつ入ります。どの行も課金されます。`dedupeAcrossTargets` がこれらの行を除くことはありません。

例はサンプル値です。実際の結果にはライブデータが入ります。リストの詳細の行は次のようになります。

```json
{
  "resultType": "list",
  "sourceTarget": "4143408",
  "id": "4143408",
  "name": "NASA Centers",
  "description": "NASA has 10 centers http://www.nasa.gov/about/sites",
  "memberCount": 11,
  "subscriberCount": 859,
  "createdAt": "2009-12-02T22:41:02.000Z",
  "owner": { "username": "NASA", "name": "NASA" }
}
```

リストのメンバー行は次のようになります。

```json
{
  "resultType": "listMember",
  "sourceTarget": "1748648376080666720",
  "username": "sample_user",
  "name": "Sample User",
  "followers": 1200,
  "verified": false
}
```

検索語から得た `list` の行は次のようになります。

```json
{
  "resultType": "list",
  "sourceTarget": "space news",
  "id": "1000000000000000001",
  "name": "Sample Space News",
  "description": "Sample accounts that post space news.",
  "url": "https://x.com/i/lists/1000000000000000001",
  "memberCount": 35,
  "subscriberCount": 76,
  "owner": { "username": "sample_user", "name": "Sample User" }
}
```

## Xのリストのスクレイピングにかかる費用は？

すべてのApifyプランで、配信された行1件につき$0.00015です。Apifyのプラットフォーム利用料は別途かかります。

- 課金は配信したデータ行1件につき1回です。`diagnostics` の診断情報は無料です。
- 開始料金、リスト料金、リソース料金はかかりません。
- 重複排除は課金前に行います。

## 制限と復旧

XquikのX List Scraperは、1回の実行で多数のリストとリソースを読み取ります。Apifyが実行を再起動しても、配信済みの行と進捗は残ります。このActor独自の時間制限はありません。

抽出が中断されると、無料の `partial` 診断を書き込みます。取得済みの結果はそのまま残ります。再試行する前に `availableResults`、`failedTargets`、`retryable`、`nextAction` を確認してください。Actorの正常終了が示すのは配信の完了です。抽出が最後まで終わったことは意味しません。

実行ステータスは、早期停止の原因をすべて示します。`stopCauses` は各原因を挙げ、それぞれに `message`、`retryable`、`nextAction` を付けます。原因は `target_not_found`、`target_failed`、`pagination_safety_limit`、`deadline_reached` です。存在しない対象が一覧に入るのは、別の原因で実行が止まった場合だけです。いずれかの原因が再試行可能なら、実行も `retryable` になります。

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
- [X Email Scraper](https://apify.com/xquik/x-email-scraper): ユーザー名、フォロワー、ユーザー検索から、アカウントがプロフィールで公開しているメールアドレス、電話番号、リンクを取得します。プロフィールが公開しているメールアドレスが必要なときに使います。1プロフィールあたり$0.00015から。
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

### X APIキーやログインは必要ですか？

いいえ。XquikのX List Scraperは、X APIキー、ログイン、認証情報を必要としません。

### Xのリストをスクレイピングしても合法ですか？

XquikのX List Scraperは、Xの公開フィールドを取得します。結果には個人データが含まれることがあります。目的が合法であることを確認し、適用されるプライバシー規則に従ってください。判断に迷う場合は、資格のある弁護士に相談してください。

### 実行結果が0件だったのはなぜですか？

まず無料の `diagnostics` 出力を開いてください。結果が空の実行では、ステータスが対象とフィルターの確認を促します。`stopCauses` は原因ごとに、次に取る行動を `nextAction` で示します。読み取れない入力があれば、実行はそれぞれを挙げて直し方を示します。

### API、スケジュール、連携は使えますか？

はい。50個の公開タスクかXquik REST APIから選べます。[APIタブ](https://apify.com/xquik/x-list-scraper/api)には、Python、JavaScript、cURLの例があります。Apifyの[スケジュール](https://docs.apify.com/platform/schedules)を使うと、XquikのX List Scraperをcronで実行できます。エージェントは[Apify MCP](https://docs.apify.com/platform/integrations/mcp)から呼び出せます。古いビルドが必要な場合を除き、`latest` を使ってください。

### どこでサポートを受けられますか？

Actorページでissueを開くか、実行IDを添えてsupport@xquik.comに連絡してください。キーバリューストアにある無料の診断情報が、空の実行、部分的な実行、中断された実行の理由を説明します。

### カスタムソリューションを依頼できますか？

はい。[xquik.com](https://xquik.com)にアクセスするか、[APIドキュメント](https://docs.xquik.com/introduction)をお読みください。ダッシュボード、API、MCPサーバー、Webhookについて説明しています。
