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

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。X User Search Scraperは、ハンドル、自己紹介、地域からユーザーを検索します。他のApify Actorはすべて、フィルタリングや重複排除の前に課金します。Xquikは、配信済みでユニークかつフィルタ条件に一致する結果にのみ課金します。

名前、トピック、自己紹介、地域でTwitterアカウントを検索できます。X APIキーは不要です。

- オーディエンス、ポスト数、アカウントの経過期間、認証状態、ウェブサイト、地域、自己紹介、ユーザー名でフィルタできます。
- 1つのクエリを保存済みカーソルから再開できます。マイグレーションを経ても受理済みの作業は保持されます。

## 入力

```json
{
  "searchTerms": ["artificial intelligence", "machine learning"],
  "minFollowers": 1000,
  "maxItems": 10000
}
```

## 出力

各行には、プロフィールと、その取得元となったクエリが`sourceTarget`として含まれます。

## 料金

すべてのプランで**配信されたプロフィール1件につき$0.00015**です。Apifyのプラットフォーム利用料は別途課金されます。

- 配信されたデータ行1件につき1回課金されます。`diagnostics`内の診断情報は無料です。
- 開始料金、クエリ料金、ページ料金はかかりません。フィルタと重複排除は課金前に実行されます。

50個の公開タスクから選択できます。129のREST操作はサンプル値とライブデータを使用します。

## 抽出が完了しなかった場合

抽出が中断された場合、無料の`partial`診断が書き込まれます。取得済みの結果はそのまま保持されます。再試行する前に`availableResults`、`failedTargets`、`retryable`、`nextAction`を確認してください。Actorが正常終了したことは、配信が成功したことを示すだけで、抽出が完全に完了したことを意味しません。

Xquikは独立したサードパーティサービスです。X Corpとは提携していません。「Twitter」および「X」はX Corpの商標です。

## 関連するXquik Actor

すべてのXquik Actorは、同じ抽出エンジン、フィルタ優先の課金方式、診断機能を共有しています。必要なデータに合ったものを選んでください。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): 検索、プロフィールのタイムライン、リスト、ポストIDから50種類以上のフィルタとフラットなエクスポートでポストをスクレイピングします。分析なしでポストデータが必要なときに使用してください。1行あたり$0.00015から。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): ハンドル、ID、URLからプロフィールとそのポスト、リプライ、メディア、いいねをスクレイピングします。検索ではなくアカウントから始めるときに使用してください。1行あたり$0.00015から。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): 25種類以上のフィルタで、ポスト配下のリプライ、コメント、会話全体をスクレイピングします。ポストの下にある議論が必要なときに使用してください。1行あたり$0.00015から。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): ポストのURLまたはIDから、リプライ、引用ポスト、リポストしたユーザー、いいねしたユーザー、スレッドを一括でスクレイピングします。誰がポストにエンゲージしたかを測定するときに使用してください。1行あたり$0.00015から。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): フォロワー、フォロー中、リストメンバー、購読者、コミュニティメンバーをプロフィール行としてスクレイピングします。オーディエンスやメンバーリストが必要なときに使用してください。1プロフィールあたり$0.00015から。
- [X List Scraper](https://apify.com/xquik/x-list-scraper): リストのURLまたはIDから、リストのポスト、メンバー、フォロワーをスクレイピングします。厳選されたリストが情報源となるときに使用してください。1行あたり$0.00015から。
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): コミュニティ情報、ポスト、検索、メンバー、モデレーターをスクレイピングします。情報源がXコミュニティであるときに使用してください。1行あたり$0.00015から。
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): 順位、ボリューム、クエリ、WOEIDを含む地域別のリアルタイムトレンドをスクレイピングします。どこで何がトレンドになっているかを追跡するときに使用してください。1トレンドあたり$0.00015から。
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): 表紙、著者、日付、指標付きで、長文のX ArticlesをMarkdownとテキストでスクレイピングします。ポストではなく記事本文が必要なときに使用してください。1記事あたり$0.00015から。
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): ポストやプロフィールから写真、動画、GIFを抽出または保存し、MP4化やメタデータのオプションを備えます。メディアファイル自体が必要なときに使用してください。1メディア行あたり$0.00015から。
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring): AIによる関連性、感情、顧客体験の回答でブランドの言及を追跡し、実行結果を比較します。長期的にブランドを監視するときに使用してください。分析済みポスト1件あたり$0.0003から。
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis): すべてのポストにAIで態度、強度、皮肉の確率をラベル付けします。任意のトピックについて一般的な感情分析が必要なときに使用してください。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals): AIで強気、弱気、中立、または複合的なスタンス、コンテンツの種類、確信度、資産との関連性をラベル付けします。株、暗号資産、トレーディングの話題を追うときに使用してください。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor): AIでニュースポストを形式、情報源の帰属、トピックとの関連性でラベル付けします。報道とコメントを区別するときに使用してください。分析済みポスト1件あたり$0.0003から。
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier): AIで独自のカテゴリ、スコア、はい/いいえの質問にすべてのポストで回答します。既定の分析があなたのラベルに合わないときに使用してください。分析済みポスト1件あたり$0.0003から。
