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

Xquikは、最も完全なXデータを備えた、世界最速かつ最安のX(Twitter)スクレイパーサービスです。X Profile Scraperは、任意のハンドル名について、プロフィール、投稿、リプライ、メディア、いいねを収集します。他のApify Actorはすべて、フィルタリングや重複排除の前に課金します。Xquikは、配信済みでユニークかつフィルター条件に一致した結果にのみ課金します。

Xのプロフィール、投稿、リプライ、メディア、いいねをスクレイピングします。ハンドル名、ID、URLを使用できます。X APIキーやログインは不要です。

## プロフィールとタイムライン

- 自己紹介、各種カウント、認証、自己申告の所在地、ウェブサイト、メディアを抽出します。
- 利用可能な場合、Xがベストエフォートで公開している所在地ラベル(Account based in)を含めます。
- 利用可能な結果ページ全体にわたって、プロフィールの投稿とWith Repliesの行を追加します。
- メディア、いいね、フォロワー、フォロー中、または認証済みフォロワーを追加します。
- 任意の投稿を、日付、メディア、認証、リポスト状態、指標でフィルタリングします。
- 任意のプロフィールを、オーディエンス、活動量、アカウント年数、公開メタデータでフィルタリングします。
- 重複する行は課金前に削除されます。

## 入力

```json
{
  "twitterHandles": ["OpenAI", "apify"],
  "includeTweets": true,
  "includeReplies": false,
  "maxItems": 10000
}
```

ターゲットは1つで十分です。全体の `maxItems` 上限には、プロフィールと選択したリソースの両方が含まれます。

## 出力

プロフィールの行は `resultType: "profile"` を使用します。任意で追加される行は、`profileTweet`、
`profileReply`、`profileMedia`、`profileLike`、`profileFollower`、
`profileFollowing`、`profileVerifiedFollower` のいずれかを使用します。すべての行は
`sourceTarget` を保持します。公開フィールドは、Xquik REST応答の形式のまま残ります。Xは
`accountBasedIn` を、集約されたアカウントアクセスのIPアドレスから推定します。`observedAt` は取得時刻を記録します。これは、国籍、居住地、身元、登録、投稿、正確な位置を示すものではありません。

## 料金

すべてのApifyプランで、**配信された行1件につき$0.00015**です。Apifyはプラットフォーム利用料を別途請求します。

- 配信されたデータ行ごとに1回課金されます。診断情報は `diagnostics` 内で無料です。
- 開始料金、プロフィール料金、クエリ料金はかかりません。
- 重複排除は課金前に実行されます。
- Apifyの最大合計課金額の設定は、配信される行数の上限になります。

古いビルドが必要な場合を除き、`latest` を使用してください。50個の公開タスクまたは129個の
Xquik REST操作から選べます。例ではサンプル値を使用しています。結果はライブデータを反映します。

## ページネーションと復旧

独立したターゲットは並行して実行されます。タイムラインは、すべてのフィルターを含めて自動的にカバレッジを行います。承認された行、課金状態、フィンガープリントは、マイグレーションを経ても保持されます。

## 抽出が不完全な場合

抽出が中断されると、無料の `partial` 診断が書き込まれます。取得済みの結果はそのまま保持されます。再試行する前に `availableResults`、`failedTargets`、`retryable`、`nextAction` を確認してください。Actorが正常終了しても、それは配信の完了を意味するだけで、抽出が完全に終わったことを意味しません。

Xquikは独立した第三者サービスです。X Corpとは提携していません。
「Twitter」および「X」はX Corpの商標です。

## 関連するXquik Actor

すべてのXquik Actorは、同じ抽出エンジン、フィルター優先の課金、診断機能を共有しています。必要なデータに合ったものを選んでください。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): 検索、プロフィールのタイムライン、リスト、Tweet IDから、50以上のフィルターとフラットなエクスポートでポストをスクレイピングします。分析なしでポストデータが必要なときに使用します。1行あたり$0.00015から。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): 25以上のフィルターで、投稿へのリプライ、コメント、会話全体をスクレイピングします。ポストの下にある議論が必要なときに使用します。1行あたり$0.00015から。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): 投稿URLまたはIDから、リプライ、引用ポスト、リポストしたユーザー、いいねしたユーザー、スレッドを一括でスクレイピングします。誰がポストにエンゲージしたかを測定するときに使用します。1行あたり$0.00015から。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): フォロワー、フォロー中、リストメンバー、購読者、コミュニティメンバーをプロフィール行としてスクレイピングします。オーディエンスやメンバーリストが必要なときに使用します。1プロフィールあたり$0.00015から。
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper): ハンドル名、自己紹介、所在地でユーザーを検索し、フォロワー数、認証、アカウント年数、所在地でフィルタリングします。検索からアカウントリストを構築するときに使用します。1プロフィールあたり$0.00015から。
- [X List Scraper](https://apify.com/xquik/x-list-scraper): リストのURLまたはIDから、リストの投稿、メンバー、フォロワーをスクレイピングします。厳選されたリストが情報源となるときに使用します。1行あたり$0.00015から。
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): コミュニティ情報、投稿、検索、メンバー、モデレーターをスクレイピングします。情報源がXコミュニティであるときに使用します。1行あたり$0.00015から。
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): 順位、ボリューム、クエリ、WOEIDとともに、地域別のリアルタイムトレンドをスクレイピングします。どこで何がトレンドになっているかを追跡するときに使用します。1トレンドあたり$0.00015から。
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): カバー画像、著者、日付、指標とともに、長文のX記事をMarkdownとテキストでスクレイピングします。ポストではなく記事本文が必要なときに使用します。1記事あたり$0.00015から。
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): MP4やメタデータのオプション付きで、投稿やプロフィールから写真、動画、GIFを抽出または保存します。メディアファイル自体が必要なときに使用します。1メディア行あたり$0.00015から。
- [X (Twitter) Brand Monitoring](https://apify.com/xquik/x-twitter-brand-monitoring): AIによる関連性、感情、カスタマーエクスペリエンスの回答でブランドの言及を追跡し、実行結果を比較します。長期的にブランドを監視するときに使用します。分析済みポスト1件あたり$0.0003から。
- [X Tweet Sentiment Analysis](https://apify.com/xquik/x-tweet-sentiment-analysis): AIですべてのポストの態度、強度、皮肉の確率をラベル付けします。あらゆるトピックの一般的な感情分析が必要なときに使用します。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) Stock & Crypto Signal](https://apify.com/xquik/x-twitter-stock-crypto-signals): AIで強気、弱気、中立、または混合のスタンス、コンテンツタイプ、確信度、資産との関連性をラベル付けします。株式、暗号資産、取引に関する話題を追うときに使用します。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) News Monitor with AI](https://apify.com/xquik/x-twitter-news-monitor): AIでニュース投稿を形式、情報源の帰属、トピックの関連性でラベル付けします。報道とコメンタリーを区別するときに使用します。分析済みポスト1件あたり$0.0003から。
- [X Tweet Classifier with AI](https://apify.com/xquik/x-twitter-tweet-classifier): AIですべてのポストに対して、独自のカテゴリー、スコア、はい/いいえの質問に答えます。既定の分析があなたのラベルに合わないときに使用します。分析済みポスト1件あたり$0.0003から。
