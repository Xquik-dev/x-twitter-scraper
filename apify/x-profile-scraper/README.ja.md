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

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。XquikのX Profile Scraperは、任意のユーザー名について、プロフィール、ポスト、返信、メディア、フォロワーを収集します。他のApify Actorの多くは、フィルタリングや重複排除の前に課金します。Xquikが課金するのは、配信した結果のうち、重複がなくフィルター条件に合うものだけです。

ユーザー名、ID、URLから、Xのプロフィール、ポスト、返信、メディア、フォロワーをスクレイピングします。料金は**配信された行1件につき$0.00015**で、Apifyのプラットフォーム利用料は別途かかります。X APIキーやログインは不要です。

> Xquikは独立したサードパーティサービスです。X Corpとは提携していません。
> 「Twitter」および「X」はX Corpの商標です。

## プロフィールとタイムライン

- 自己紹介、各種カウント、認証、本人が入力した所在地、ウェブサイト、メディア。
- 表示される場合は、Xがベストエフォートで公開する所在地ラベル（Account based in）。
- 取得できる結果ページ全体にわたる、プロフィールのポストタブと返信タブ（With Replies）の行。
- 任意で追加できるメディア、フォロワー、フォロー中、認証済みフォロワー。
- 追加したポストを、日付、メディア、認証、リポストかどうか、指標で絞り込むフィルター。
- 追加したプロフィールを、オーディエンス、活動量、アカウント年数、公開メタデータで絞り込むフィルター。
- 課金前の重複排除。

## Xのプロフィールをスクレイピングする方法

1. Apify ConsoleでXquikのX Profile Scraperを開きます。
2. ユーザー名を `twitterHandles` に、URLを `startUrls` に、IDを `userIds` に追加します。
3. `includeTweets` や `includeFollowers` などのリソースをオンにします。
4. `maxItems` で配信する行数の上限を決め、Startをクリックします。
5. データセットをJSON、CSV、Excelでダウンロードするか、Apify APIを使います。

## 入力

```json
{
  "twitterHandles": ["OpenAI", "apify"],
  "includeTweets": true,
  "includeReplies": false,
  "maxItems": 10000
}
```

対象は1つで足ります。全体の `maxItems` の上限には、プロフィールと選択したリソースの両方が含まれます。

問題なく終わった小規模な実行は `run-report` を書き込まず、Apifyの利用料を節約します。毎回書き込むには `alwaysSaveRunRecords` をオンにしてください。

## 出力

プロフィールの行は `resultType: "profile"` を使います。追加の行は `profileTweet`、`profileReply`、`profileMedia`、`profileFollower`、`profileFollowing`、`profileVerifiedFollower` のいずれかを使います。すべての行に `sourceTarget` が残ります。公開フィールドはXquik RESTのレスポンス形式のままです。

Xは `accountBasedIn` を、アカウントへのアクセス元IPを集計して推定します。このラベルは、国籍、居住地、身元、登録地、ポストした場所、正確な位置を示すものではありません。`observedAt` は取得した時刻を記録します。Xがラベルを表示しない場合、`accountBasedIn` はnullです。Xがラベルを伏せている場合は、代わりに `accountBasedInUnavailable: true` が入ります。

Xは2024年から、アカウントがいいねしたポストをそのアカウント本人にだけ表示しています。そのため、他のアカウントについて `includeLikes` は `profileLike` の行を返しません。

例はサンプル値です。実際の結果にはライブデータが入ります。プロフィールの行は次のようになります。

```json
{
  "resultType": "profile",
  "sourceTarget": "sample_user",
  "username": "sample_user",
  "name": "Sample User",
  "followers": 1200,
  "verified": false,
  "accountBasedInUnavailable": true
}
```

## Xのプロフィールのスクレイピングにかかる費用は？

すべてのApifyプランで、配信された行1件につき$0.00015です。Apifyのプラットフォーム利用料は別途かかります。

- 課金は配信したデータ行1件につき1回です。`diagnostics` の診断情報は無料です。
- 開始料金、プロフィール料金、クエリ料金はかかりません。
- 重複排除は課金前に行います。
- Apifyの最大合計課金額の設定で、配信する行数に上限をかけられます。

## 制限と復旧

XquikのX Profile Scraperは、1回の実行で多数のプロフィールを読み取ります。設定したフィルターはすべてタイムラインの行に適用されます。Apifyが実行を再起動しても、配信済みの行と進捗は残ります。

抽出が中断されると、無料の `partial` 診断を書き込みます。取得済みの結果はそのまま残ります。再試行する前に `availableResults`、`failedTargets`、`retryable`、`nextAction` を確認してください。Actorの正常終了が示すのは配信の完了です。抽出が最後まで終わったことは意味しません。

実行ステータスは、早期停止の原因をすべて示します。`stopCauses` は各原因を挙げ、それぞれに `message`、`retryable`、`nextAction` を付けます。原因は `target_not_found`、`target_failed`、`pagination_safety_limit`、`deadline_reached` です。存在しない対象が一覧に入るのは、別の原因で実行が止まった場合だけです。いずれかの原因が再試行可能なら、実行も `retryable` になります。

## 関連するXquik Actor

すべてのXquik Actorは、同じ抽出エンジン、フィルター優先の課金、診断機能を共有しています。必要なデータに合うものを選んでください。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): 検索、プロフィールのタイムライン、リスト、ポストIDから、50以上のフィルターでポストをスクレイピングし、フラットな形式で出力します。分析なしでポストデータが必要なときに使います。1行あたり$0.00015から。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): 25以上のフィルターで、ポストへの返信、コメント、会話全体をスクレイピングします。ポストの下の議論が必要なときに使います。1行あたり$0.00015から。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): ポストのURLまたはIDから、返信、引用ポスト、リポストしたユーザー、スレッドを一括でスクレイピングします。誰がポストに反応したかを測るときに使います。1行あたり$0.00015から。
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

いいえ。XquikのX Profile Scraperは、X APIキー、ログイン、認証情報を必要としません。

### Xのプロフィールをスクレイピングしても合法ですか？

XquikのX Profile Scraperは、Xの公開フィールドを取得します。結果には個人データが含まれることがあります。目的が合法であることを確認し、適用されるプライバシー規則に従ってください。判断に迷う場合は、資格のある弁護士に相談してください。

### 実行結果が0件だったのはなぜですか？

まず無料の `diagnostics` 出力を開いてください。結果が空の実行では、ステータスが対象とフィルターの確認を促します。`stopCauses` は原因ごとに、次に取る行動を `nextAction` で示します。読み取れない入力があれば、実行はそれぞれを挙げて直し方を示します。Xはいいねを非公開にしているため、他のアカウントについて `includeLikes` は `profileLike` の行を返しません。

### API、スケジュール、連携は使えますか？

はい。50個の公開タスクと129個のXquik REST操作から選べます。[APIタブ](https://apify.com/xquik/x-profile-scraper/api)には、Python、JavaScript、cURLの例があります。Apifyの[スケジュール](https://docs.apify.com/platform/schedules)を使うと、XquikのX Profile Scraperをcronで実行できます。エージェントは[Apify MCP](https://docs.apify.com/platform/integrations/mcp)から呼び出せます。古いビルドが必要な場合を除き、`latest` を使ってください。

### どこでサポートを受けられますか？

Actorページでissueを開くか、実行IDを添えてsupport@xquik.comに連絡してください。キーバリューストアにある無料の診断情報が、空の実行、部分的な実行、中断された実行の理由を説明します。

### カスタムソリューションを依頼できますか？

はい。[xquik.com](https://xquik.com)にアクセスするか、[APIドキュメント](https://docs.xquik.com/introduction)をお読みください。ダッシュボード、API、MCPサーバー、Webhookについて説明しています。
