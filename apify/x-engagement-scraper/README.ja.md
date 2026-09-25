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
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">FramerがClaude Code、Codex、Cursorなどと一緒にXquikのスクレイパーを使う方法を6:07から見る。</a>
</td></tr></table>

Xquikは、最も完全なXデータを備えた、世界最速かつ最安のX(Twitter)スクレイパーサービスです。X Engagement Scraperは、任意の投稿に対するリプライ、引用ポスト、リポストしたユーザー、スレッドを収集します。他のApify Actorはすべて、フィルタリングや重複排除の前に課金します。Xquikは、配信済みでユニークかつフィルター条件に一致した結果にのみ課金します。

1件以上のXの投稿について、Twitterのエンゲージメントデータ(リプライ、引用ポスト、リポストしたユーザー、スレッドのコンテキスト)を収集します。X APIキーやログインは不要です。

## リプライ、引用ポスト、プロフィール

- 投稿URLと数値のTweet ID。
- 利用可能な結果ページ全体にわたる直接のリプライ。
- 4種類の並び順による直接および入れ子のリプライ。
- 選択可能な行としてのソース投稿の詳細。
- テキスト、著者、メディア、指標を含む引用ポスト。
- リポストしたユーザーのプロフィール。
- 各ソース投稿を取り巻く会話のコンテキスト。
- 1回の実行で複数のエンゲージメントタイプと投稿を指定可能。
- 全体および各リソースの上限。
- ソース投稿とエンゲージメントタイプの帰属情報。
- Apifyが実行を再起動しても、中断した箇所から続行します。

## 入力

```json
{
  "tweetIds": ["2082577277246972300"],
  "engagementTypes": ["replies", "quotes", "retweeters"],
  "maxItems": 10000
}
```

Xは2024年に、投稿にいいねしたユーザーの表示をやめました。`favoriters` タイプは行を返しません。行のない実行は、その理由を診断情報に記載します。

各ソースとエンゲージメントの組み合わせを保持するには、`dedupeAcrossTargets` をオフのままにしてください。実行全体でアカウントごとに1行だけ保持するには、これをオンにしてください。

## 出力

各行は `resultType` として `tweet`、`replies`、`completeReplies`、`quotes`、`retweeters`、
`favoriters`、`thread` のいずれかを使用します。`sourceTarget` はソースとなるTweet IDを示します。ポストとプロフィールのフィールドは、安定したXquik REST応答の形式に従います。

`completeReplies` は返されたすべての行を保持します。Run Reportは、部分的なカバレッジについて `incompleteTargets` をカウントします。フィルターはActorの課金前に実行されます。

## リポストのタイムスタンプ

`retweeters` の結果に対して `includeRetweetTimestamp` を `true` に設定します。
`retweetedAt` 列には、観測されたリポスト時刻がUTCで格納されます。

Xにリポストがまだ表示されている場合、Actorはそのリポスト時刻を取得します。古い、削除済み、または利用できないリポストの場合、タイムスタンプは `null` になります。そのプロフィールは出力に残ります。`null` は、あるアカウントが投稿を一度もリポストしていないことを証明するものではありません。

このオプションを有効にすると実行が遅くなります。プロフィールのみの結果が必要な場合は、無効のままにしてください。プロフィールの `createdAt` は、アカウント作成日のままです。ポストの行には、リポストイベントを含む場合に `retweetedAt` が付与されます。元の投稿日時やスクレイピング時刻が、リポスト時刻の代わりになることはありません。結果の価格と配信済み行の課金は変わりません。

## 料金

すべてのApifyプランで、**配信された行1件につき$0.00015**です。Apifyはプラットフォーム利用料を別途請求します。

- 配信されたデータ行ごとに1回課金されます。診断情報は `diagnostics` 内で無料です。
- 開始料金、投稿料金、エンゲージメントタイプ料金、ページ料金はかかりません。
- 重複排除は課金前に実行されます。

古いビルドが必要な場合を除き、`latest` を使用してください。50個の公開タスクまたは129個の
Xquik REST操作から選べます。例ではサンプル値を使用しています。結果はライブデータを反映します。

## 復旧と制限

1回の実行で多数の投稿とエンゲージメントの種類を読み取れます。 配信済みの行と進捗は、Apifyが実行を再起動しても保持されます。Actorが独自の時間制限を追加することはありません。

## 抽出が不完全な場合

抽出が中断されると、無料の `partial` 診断が書き込まれます。取得済みの結果はそのまま保持されます。再試行する前に `availableResults`、`failedTargets`、`retryable`、`nextAction` を確認してください。Actorが正常終了しても、それは配信の完了を意味するだけで、抽出が完全に終わったことを意味しません。

ステータスのテキストは、実行が早期に停止した原因をすべて示します。`stopCauses` は各原因を列挙し、原因ごとに `message`、`retryable`、`nextAction` を示します。原因は `target_not_found`、`target_failed`、`pagination_safety_limit`、`reply_reach`、`deadline_reached` です。`reply_reach` は、Xがリプライスレッドの一部しか返さなかったことを意味します。存在しないターゲットは、別の原因で実行が停止した場合にのみ一覧に含まれます。いずれかの原因が再試行可能であれば、実行も `retryable` になります。

Xquikは独立した第三者サービスです。X Corpとは提携していません。
「Twitter」および「X」はX Corpの商標です。

## 関連するXquik Actor

すべてのXquik Actorは、同じ抽出エンジン、フィルター優先の課金、診断機能を共有しています。必要なデータに合ったものを選んでください。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): 検索、プロフィールのタイムライン、リスト、Tweet IDから、50以上のフィルターとフラットなエクスポートでポストをスクレイピングします。分析なしでポストデータが必要なときに使用します。1行あたり$0.00015から。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): ハンドル、ID、URLからプロフィールとそのポスト、リプライ、メディア、フォロワーをスクレイピングします。検索ではなくアカウントから始めるときに使用してください。1行あたり$0.00015から。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): 25以上のフィルターで、投稿へのリプライ、コメント、会話全体をスクレイピングします。ポストの下にある議論が必要なときに使用します。1行あたり$0.00015から。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): フォロワー、フォロー中、リストメンバー、購読者、コミュニティメンバーをプロフィール行としてスクレイピングします。オーディエンスやメンバーリストが必要なときに使用します。1プロフィールあたり$0.00015から。
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper): ハンドル名、自己紹介、所在地でユーザーを検索し、フォロワー数、認証、アカウント年数、所在地でフィルタリングします。検索からアカウントリストを構築するときに使用します。1プロフィールあたり$0.00015から。
- [X List Scraper](https://apify.com/xquik/x-list-scraper): リストのURLまたはIDから、リストの投稿、メンバー、フォロワーをスクレイピングします。厳選されたリストが情報源となるときに使用します。1行あたり$0.00015から。
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): コミュニティ情報、投稿、検索、メンバー、モデレーターをスクレイピングします。情報源がXコミュニティであるときに使用します。1行あたり$0.00015から。
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): 順位、ボリューム、クエリ、WOEIDとともに、地域別のリアルタイムトレンドをスクレイピングします。どこで何がトレンドになっているかを追跡するときに使用します。1トレンドあたり$0.00015から。
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): カバー画像、著者、日付、指標とともに、長文のX記事をMarkdownとテキストでスクレイピングします。ポストではなく記事本文が必要なときに使用します。1記事あたり$0.00015から。
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): MP4やメタデータのオプション付きで、投稿やプロフィールから写真、動画、GIFを抽出または保存します。メディアファイル自体が必要なときに使用します。1メディア行あたり$0.00015から。
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring): AIによる関連性、感情、カスタマーエクスペリエンスの回答でブランドの言及を追跡し、実行結果を比較します。長期的にブランドを監視するときに使用します。分析済みポスト1件あたり$0.0003から。
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis): AIですべてのポストの態度、強度、皮肉の確率をラベル付けします。あらゆるトピックの一般的な感情分析が必要なときに使用します。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals): AIで強気、弱気、中立、または混合のスタンス、コンテンツタイプ、確信度、資産との関連性をラベル付けします。株式、暗号資産、取引に関する話題を追うときに使用します。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor): AIでニュース投稿を形式、情報源の帰属、トピックの関連性でラベル付けします。報道とコメンタリーを区別するときに使用します。分析済みポスト1件あたり$0.0003から。
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier): AIですべてのポストに対して、独自のカテゴリー、スコア、はい/いいえの質問に答えます。既定の分析があなたのラベルに合わないときに使用します。分析済みポスト1件あたり$0.0003から。
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer): AIによる8つの特性への回答から、すべてのポストについて0から100のViral Scoreと判定を推定します。ポストが広がる理由や伸びない理由を調べるときに使用してください。分析済みポスト1件あたり$0.0003から。
