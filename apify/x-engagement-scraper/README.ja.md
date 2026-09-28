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

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。XquikのX Engagement Scraperは、任意のポストについて、返信、引用ポスト、リポストしたユーザー、スレッドを収集します。他のApify Actorの多くは、フィルタリングや重複排除の前に課金します。Xquikが課金するのは、配信した結果のうち、重複がなくフィルター条件に合うものだけです。

1件以上のXのポストについて、X(Twitter)の返信、引用ポスト、リポストしたユーザー、スレッドの文脈を収集します。料金は**配信された行1件につき$0.00015**で、Apifyのプラットフォーム利用料は別途かかります。X APIキーやログインは不要です。

> Xquikは独立したサードパーティサービスです。X Corpとは提携していません。
> 「Twitter」および「X」はX Corpの商標です。

## 返信、引用ポスト、プロフィール

- ポストURLと数値のポストID。
- 取得できる結果ページ全体にわたる直接の返信。
- 4種類の並び順による、直接の返信と入れ子の返信。
- 選択できる行としての元ポストの詳細。
- テキスト、著者、メディア、指標を含む引用ポスト。
- リポストしたユーザーのプロフィール。
- 各元ポストの周りの会話の文脈。
- 1回の実行で扱える複数のエンゲージメントの種類とポスト。
- 全体の上限と、エンゲージメントのリソースごとの上限。
- 元ポストとエンゲージメントの種類の帰属情報。
- Apifyが再起動しても続きから再開する実行。

## Xのポストのエンゲージメントをスクレイピングする方法

1. Apify ConsoleでXquikのX Engagement Scraperを開きます。
2. ポストのURLを `startUrls` に、数値のポストIDを `tweetIds` に貼り付けます。
3. `engagementTypes` を選び、`minLikes` や `language` などのフィルターを追加します。
4. `maxItems` で配信する行数の上限を決め、Startをクリックします。
5. データセットをJSON、CSV、Excelでダウンロードするか、Apify APIを使います。

## 入力

```json
{
  "tweetIds": ["2082577277246972300"],
  "engagementTypes": ["replies", "quotes", "retweeters"],
  "maxItems": 10000
}
```

Xは2024年、ポストにいいねしたユーザーの表示をやめました。`favoriters` タイプは行を返しません。行が0件の実行は、その理由を診断情報に書きます。

デフォルトでは、各アカウントや各ポストはエンゲージメントの種類ごとに1回だけ出力され、課金も1回です。元ポストごとに行を残すには、`dedupeAcrossTargets` を `false` にしてください。スキップした重複は課金されず、実行ステータスがその件数を示します。

問題なく終わった小規模な実行は `run-report` を書き込まず、Apifyの利用料を節約します。毎回書き込むには `alwaysSaveRunRecords` をオンにしてください。

## 出力

各行の `resultType` は `tweet`、`replies`、`completeReplies`、`quotes`、`retweeters`、`favoriters`、`thread` のいずれかです。`sourceTarget` には元ポストのIDが入ります。ポストとプロフィールのフィールドは、安定したXquik RESTのレスポンス形式に従います。

`completeReplies` は返されたすべての行を残します。実行レポートは、一部しか取得できなかった対象を `incompleteTargets` に数えます。フィルターは課金前に適用されます。

例はサンプル値です。実際の結果にはライブデータが入ります。返信の行は次のようになります。

```json
{
  "resultType": "replies",
  "sourceTarget": "2082577277246972300",
  "inReplyToId": "2082577277246972300",
  "username": "sample_user",
  "text": "Sample reply text",
  "likeCount": 12
}
```

## リポストのタイムスタンプ

`retweeters` の結果にリポスト時刻を付けるには、`includeRetweetTimestamp` を `true` にします。`retweetedAt` 列には、確認できたリポスト時刻がUTCで入ります。

XquikのX Engagement Scraperは、Xにそのリポストがまだ表示されていれば、リポスト時刻を取得します。古いリポスト、削除されたリポスト、表示できないリポストでは、タイムスタンプが `null` になります。その場合もプロフィールは出力に残ります。`null` は、そのアカウントがポストをリポストしなかった証拠にはなりません。

このオプションを使うと実行は遅くなります。プロフィールだけが必要なら、オフのままにしてください。プロフィールの `createdAt` は、アカウントの作成日のままです。ポストの行は、リポストのイベントを含む場合に `retweetedAt` を持ちます。元のポストの日時やスクレイピングした時刻を、リポスト時刻の代わりに使うことはありません。結果の料金と、配信行ごとの課金は変わりません。

## Xのポストのエンゲージメントをスクレイピングする費用は？

すべてのApifyプランで、配信された行1件につき$0.00015です。Apifyのプラットフォーム利用料は別途かかります。

- 課金は配信したデータ行1件につき1回です。`diagnostics` の診断情報は無料です。
- 開始料金、ポスト料金、エンゲージメントの種類ごとの料金、ページ料金はかかりません。
- 重複排除は課金前に行います。

## 制限と復旧

XquikのX Engagement Scraperは、1回の実行で多数のポストとエンゲージメントの種類を読み取ります。Apifyが実行を再起動しても、配信済みの行と進捗は残ります。このActor独自の時間制限はありません。

抽出が中断されると、無料の `partial` 診断を書き込みます。取得済みの結果はそのまま残ります。再試行する前に `availableResults`、`failedTargets`、`retryable`、`nextAction` を確認してください。Actorの正常終了が示すのは配信の完了です。抽出が最後まで終わったことは意味しません。

実行ステータスは、早期停止の原因をすべて示します。`stopCauses` は各原因を挙げ、それぞれに `message`、`retryable`、`nextAction` を付けます。原因は `target_not_found`、`target_failed`、`pagination_safety_limit`、`reply_reach`、`deadline_reached` です。`reply_reach` は、Xが返信スレッドの一部しか返さなかったことを示します。存在しない対象が一覧に入るのは、別の原因で実行が止まった場合だけです。いずれかの原因が再試行可能なら、実行も `retryable` になります。

## 関連するXquik Actor

すべてのXquik Actorは、同じ抽出エンジン、フィルター優先の課金、診断機能を共有しています。必要なデータに合うものを選んでください。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): 検索、プロフィールのタイムライン、リスト、ポストIDから、50以上のフィルターでポストをスクレイピングし、フラットな形式で出力します。分析なしでポストデータが必要なときに使います。1行あたり$0.00015から。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): ユーザー名、ID、URLから、プロフィールとそのポスト、返信、メディア、フォロワーをスクレイピングします。検索ではなくアカウントから始めるときに使います。1行あたり$0.00015から。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): 25以上のフィルターで、ポストへの返信、コメント、会話全体をスクレイピングします。ポストの下の議論が必要なときに使います。1行あたり$0.00015から。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): フォロワー、フォロー中、リストのメンバー、購読者、コミュニティのメンバーをプロフィール行としてスクレイピングします。オーディエンスやメンバーの一覧が必要なときに使います。1プロフィールあたり$0.00015から。
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper): ユーザー名、自己紹介、所在地でユーザーを検索し、フォロワー数、認証、アカウント年数、所在地で絞り込みます。検索からアカウントの一覧を作るときに使います。1プロフィールあたり$0.00015から。
- [X List Scraper](https://apify.com/xquik/x-list-scraper): リストのURLまたはIDから、リストのポスト、メンバー、フォロワーをスクレイピングします。厳選したリストを情報源にするときに使います。1行あたり$0.00015から。
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): コミュニティの情報、ポスト、検索結果、メンバー、モデレーターをスクレイピングします。Xのコミュニティを情報源にするときに使います。1行あたり$0.00015から。
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): 地域別のリアルタイムトレンドを、順位、ボリューム、クエリ、WOEIDとともにスクレイピングします。どこで何がトレンドかを追うときに使います。1トレンドあたり$0.00015から。
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): 長文のXの記事を、カバー画像、著者、日付、指標とともにMarkdownとテキストでスクレイピングします。ポストではなく記事の本文が必要なときに使います。1記事あたり$0.00015から。
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): ポストやプロフィールから写真、動画、GIFを抽出または保存します。MP4とメタデータのオプションがあります。メディアファイルそのものが必要なときに使います。1メディア行あたり$0.00015から。
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring): ブランドへの言及を、AIによる関連性、感情、顧客体験の回答とともに追跡し、実行どうしを比較します。ブランドを継続して見守るときに使います。分析済みポスト1件あたり$0.0003から。
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis): すべてのポストに、AIで態度、強度、皮肉の確率のラベルを付けます。任意のトピックの全体的な感情を知りたいときに使います。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals): AIで、強気、弱気、中立、混在のスタンス、コンテンツの種類、確信度、資産との関連性のラベルを付けます。株、暗号資産、トレードの話題を追うときに使います。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor): AIで、ニュースのポストに形式、情報源の明示、トピックとの関連性のラベルを付けます。報道と論評を分けるときに使います。分析済みポスト1件あたり$0.0003から。
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier): すべてのポストについて、独自のカテゴリー、スコア、はい/いいえの質問にAIが答えます。既定の分析が自分のラベルに合わないときに使います。分析済みポスト1件あたり$0.0003から。
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer): AIによる8つの特性の回答から、すべてのポストについて0から100のViral Scoreと判定を推定します。ポストが広がる理由や伸びない理由を調べるときに使います。分析済みポスト1件あたり$0.0003から。

## よくある質問

### X APIキーやログインは必要ですか？

いいえ。XquikのX Engagement Scraperは、X APIキー、ログイン、認証情報を必要としません。

### Xのエンゲージメントデータをスクレイピングしても合法ですか？

XquikのX Engagement Scraperは、Xの公開フィールドを取得します。結果には個人データが含まれることがあります。目的が合法であることを確認し、適用されるプライバシー規則に従ってください。判断に迷う場合は、資格のある弁護士に相談してください。

### 実行結果が0件だったのはなぜですか？

まず無料の `diagnostics` 出力を開いてください。結果が空の実行では、ステータスが対象とフィルターの確認を促します。`stopCauses` は原因ごとに、次に取る行動を `nextAction` で示します。読み取れない入力があれば、実行はそれぞれを挙げて直し方を示します。Xは2024年にポストにいいねしたユーザーの表示をやめたため、`favoriters` は行を返しません。

### API、スケジュール、連携は使えますか？

はい。50個の公開タスクと129個のXquik REST操作から選べます。[APIタブ](https://apify.com/xquik/x-engagement-scraper/api)には、Python、JavaScript、cURLの例があります。Apifyの[スケジュール](https://docs.apify.com/platform/schedules)を使うと、XquikのX Engagement Scraperをcronで実行できます。エージェントは[Apify MCP](https://docs.apify.com/platform/integrations/mcp)から呼び出せます。古いビルドが必要な場合を除き、`latest` を使ってください。

### どこでサポートを受けられますか？

Actorページでissueを開くか、実行IDを添えてsupport@xquik.comに連絡してください。キーバリューストアにある無料の診断情報が、空の実行、部分的な実行、中断された実行の理由を説明します。

### カスタムソリューションを依頼できますか？

はい。[xquik.com](https://xquik.com)にアクセスするか、[APIドキュメント](https://docs.xquik.com/introduction)をお読みください。ダッシュボード、API、MCPサーバー、Webhookについて説明しています。
