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

Xquikは、最も完全なXデータを備えた、世界最速かつ最安のX(Twitter)スクレイパーサービスです。X List Scraperは、リストの投稿、メンバー、フォロワーを収集します。他のApify Actorはすべて、フィルタリングや重複排除の前に課金します。
Xquikは、配信済みでユニークかつフィルター条件に一致した結果にのみ課金します。

リストのURLまたは数値のIDから、Xリストの投稿、メンバー、フォロワーをスクレイピングします。複数のリストとリソースをまとめて処理できます。X APIキーやログインは不要です。

## リストのデータとフィルター

- テキスト、著者、指標、メディア、タイムスタンプを含むリストの投稿。
- リストのメンバーとリストのフォロワー。
- 投稿タイムラインに対する任意のリプライ含有オプション。
- 日付、Unix時刻、言語、メディア、エンゲージメント、認証、プロフィールのフィルター。
- 1回の実行で複数のリストとリソースタイプ。
- 全体および各リソースの上限。
- ページネーションはマイグレーション後も再開されます。Actorは重複する行を削除します。

## 入力

```json
{
  "listIds": ["1748648376080666720"],
  "resources": ["tweets", "members", "followers"],
  "includeReplies": false,
  "maxItems": 10000
}
```

## 出力

各行は `resultType` として `listTweet`、`listMember`、`listFollower` を使用し、`sourceTarget` に入力されたリストIDを保持します。行の本体は、安定したXquikのポストまたはプロフィールの応答形式を使用します。

## 料金

すべてのApifyプランで、**配信された行1件につき$0.00015**です。Apifyはプラットフォーム利用料を別途請求します。

- 配信されたデータ行ごとに1回課金されます。診断情報は `diagnostics` 内で無料です。
- 開始料金、リスト料金、リソース料金はかかりません。
- 重複排除は課金前に実行されます。

古いビルドが必要な場合を除き、`latest` を使用してください。50個の公開タスクまたは129個の
Xquik REST操作から選べます。例ではサンプル値を使用しています。結果はライブデータを反映します。

## ページネーションと復旧

独立したリストリソースは並行して実行されます。各カーソル系列は順序が保たれます。承認された行、課金状態、カーソル、フィンガープリントは、Apifyのマイグレーションを経ても保持されます。Actorには自己設定のタイムアウトはありません。

## 抽出が不完全な場合

抽出が中断されると、無料の `partial` 診断が書き込まれます。取得済みの結果はそのまま保持されます。再試行する前に `availableResults`、`failedTargets`、`retryable`、`nextAction` を確認してください。Actorが正常終了しても、それは配信の完了を意味するだけで、抽出が完全に終わったことを意味しません。

Xquikは独立した第三者サービスです。X Corpとは提携していません。
「Twitter」および「X」はX Corpの商標です。

## 関連するXquik Actor

すべてのXquik Actorは、同じ抽出エンジン、フィルター優先の課金、診断機能を共有しています。必要なデータに合ったものを選んでください。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): 検索、プロフィールのタイムライン、リスト、Tweet IDから、50以上のフィルターとフラットなエクスポートでポストをスクレイピングします。分析なしでポストデータが必要なときに使用します。1行あたり$0.00015から。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): ハンドル名、ID、URLから、プロフィールとその投稿、リプライ、メディア、いいねをスクレイピングします。検索ではなくアカウント起点で始めるときに使用します。1行あたり$0.00015から。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): 25以上のフィルターで、投稿へのリプライ、コメント、会話全体をスクレイピングします。ポストの下にある議論が必要なときに使用します。1行あたり$0.00015から。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): 投稿URLまたはIDから、リプライ、引用ポスト、リポストしたユーザー、いいねしたユーザー、スレッドを一括でスクレイピングします。誰がポストにエンゲージしたかを測定するときに使用します。1行あたり$0.00015から。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): フォロワー、フォロー中、リストメンバー、購読者、コミュニティメンバーをプロフィール行としてスクレイピングします。オーディエンスやメンバーリストが必要なときに使用します。1プロフィールあたり$0.00015から。
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper): ハンドル名、自己紹介、所在地でユーザーを検索し、フォロワー数、認証、アカウント年数、所在地でフィルタリングします。検索からアカウントリストを構築するときに使用します。1プロフィールあたり$0.00015から。
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): コミュニティ情報、投稿、検索、メンバー、モデレーターをスクレイピングします。情報源がXコミュニティであるときに使用します。1行あたり$0.00015から。
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): 順位、ボリューム、クエリ、WOEIDとともに、地域別のリアルタイムトレンドをスクレイピングします。どこで何がトレンドになっているかを追跡するときに使用します。1トレンドあたり$0.00015から。
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): カバー画像、著者、日付、指標とともに、長文のX記事をMarkdownとテキストでスクレイピングします。ポストではなく記事本文が必要なときに使用します。1記事あたり$0.00015から。
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): MP4やメタデータのオプション付きで、投稿やプロフィールから写真、動画、GIFを抽出または保存します。メディアファイル自体が必要なときに使用します。1メディア行あたり$0.00015から。
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring): AIによる関連性、感情、カスタマーエクスペリエンスの回答でブランドの言及を追跡し、実行結果を比較します。長期的にブランドを監視するときに使用します。分析済みポスト1件あたり$0.0003から。
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis): AIですべてのポストの態度、強度、皮肉の確率をラベル付けします。あらゆるトピックの一般的な感情分析が必要なときに使用します。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals): AIで強気、弱気、中立、または混合のスタンス、コンテンツタイプ、確信度、資産との関連性をラベル付けします。株式、暗号資産、取引に関する話題を追うときに使用します。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor): AIでニュース投稿を形式、情報源の帰属、トピックの関連性でラベル付けします。報道とコメンタリーを区別するときに使用します。分析済みポスト1件あたり$0.0003から。
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier): AIですべてのポストに対して、独自のカテゴリー、スコア、はい/いいえの質問に答えます。既定の分析があなたのラベルに合わないときに使用します。分析済みポスト1件あたり$0.0003から。
