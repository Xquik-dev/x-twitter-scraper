[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · [简体中文](README.zh-CN.md) · **日本語** · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![FramerがXquik MCPをコーディングエージェントに接続する様子](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[FramerがXquikのスクレイパーをClaude Code、Codex、Cursorなどと一緒に使う様子](https://youtu.be/4UOSpoOoC3Y?t=367)を6:07から視聴できます。

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。XquikのX (Twitter) Crypto Trackerは、選んだ暗号資産のアカウントとKOLの新しいツイートをすべて捕捉します。通常、Xに表示されてから一秒もかからずに、それぞれを捕捉します。他のApify Actorの多くは、フィルタリングや重複排除の前に課金します。Xquikが課金するのは、配信した重複のない結果だけです。このActorでは、モニターが監視した時間だけに課金します。

暗号資産のアカウントかキャッシュタグを貼り付けて、Startをクリックします。削除されたツイートとプロフィールの変更も届き、アラートは実行と実行の間に届きます。料金は**monitor-hourあたり$0.0045**です。イベントとアラートは無料で、Apifyのプラットフォーム利用料は別途かかります。

> Xquikは独立したサードパーティサービスです。X Corpとは提携していません。
> 「Twitter」および「X」はX Corpの商標です。

## 暗号資産Twitterトラッカーが送る内容

- 監視している暗号資産のアカウントとKOLのすべての新しいツイート、返信、引用、リポスト。通常、Xに表示されてから一秒もかからずに捕捉します。
- 削除されたツイート。アカウントが何を消したかがわかります。
- 表示名、ユーザー名、自己紹介、プロフィール画像、ウェブサイト、固定ツイートなどのプロフィールの変更。これも通常、Xに表示されてから一秒もかからずに捕捉します。
- `followingChanges` をオンにすると、各アカウントがフォローまたはフォロー解除したアカウントを、フォローされたアカウントの全プロフィールとともに送ります。
- キャッシュタグ、コイン名、コントラクトアドレスについて、Xの最新の検索結果に表示されるすべての新しいツイート。
- Telegram、Discord、Slack、任意のHTTPS Webhookへのアラート。すべてのイベントは実行のデータセットと1つの履歴データセットにも入ります。

## 暗号資産のTwitterアカウントを追跡する方法

監視にはApifyの有料プランが必要です。[プランを選び](https://apify.com/pricing?fpr=xquik)、ここに戻ってTry for freeを押してください。

1. Apify ConsoleでXquikのX (Twitter) Crypto Trackerを開きます。
2. 暗号資産のアカウントとKOLを `twitterHandles` に、キャッシュタグ、コイン名、コントラクトアドレスを `searchTerms` に貼り付けます。
3. `telegram` をオンにするか、DiscordかSlackのWebhook URLを `webhookUrls` に貼り付けます。
4. Startをクリックします。その実行で監視が始まります。
5. 同じ入力でActorを1時間ごとに実行するスケジュールを追加します。

以降の各実行は、前回の実行から監視した時間を課金します。新しいイベントをデータセットに保存し、すぐに終わります。24時間実行のないモニターは一時停止します。その4時間前に、アラートで警告が届きます。次の実行でモニターが再開し、未払いの時間を先に課金します。

## 入力

| フィールド | 内容 |
| --- | --- |
| `twitterHandles` | @の有無を問わない暗号資産のアカウントとKOL、または `x.com` のプロフィールURL。1行に1つ。 |
| `searchTerms` | キャッシュタグ、コイン名、コントラクトアドレス。Xの検索演算子はどれでも使えます。 |
| `monitorName` | 保存済みのタスクがない実行で、このアカウントとキーワードのセットに名前を付けます。 |
| `newPosts`, `replies`, `quotes`, `reposts` | 新しいツイート、返信、引用ツイート、リポスト。デフォルトでオンです。 |
| `deletedPosts`, `profileChanges` | 削除されたツイートとプロフィールの変更。デフォルトでオンです。 |
| `followingChanges`, `followerChanges` | フォローとフォロー解除、新しいフォロワーと失ったフォロワー。 |
| `liveVideos` | アカウントのライブ動画とスペース。 |
| `eventTypes` | チェックボックスの代わりに使う、正確なイベントの種類。 |
| `webhookUrls` | HTTPSのURLを1行に1つ。ActorがSlackとDiscordのURLを判別します。 |
| `telegram` | 実行が示すリンクを通じて、Telegramにアラートを送ります。 |
| `since` | 過去30日以内の日付から保管しているイベントを、1回だけ保存します。 |
| `stop` | モニターを止め、アラートをオフにします。 |

1つの入力で、アカウントとキーワードを合計100件まで指定できます。キーワードはツイートのイベントだけを送ります。フレーズを引用符で囲むと、完全一致で探します。Telegramにはユーザー名もチャットIDも不要です。実行ステータスにリンクが表示されます。リンクを開いてStartを押すと、そのチャットにアラートが届きます。

次の入力はそのままコピーできます。

```json
{ "twitterHandles": ["VitalikButerin", "cz_binance"], "telegram": true }
```

```json
{
  "searchTerms": ["$ETH", "$SOL"],
  "webhookUrls": "https://discord.com/api/webhooks/000/XXXX",
  "monitorName": "coin-tweets"
}
```

## 出力

各実行は4つの出力を返します。

- **ステータスページ**、つまり `STATUS.html` レコード。モニターが監視中かどうか、ボタン付きの次の手順1つ、実行が保存して課金した内容、対象、各送信先を表示します。Outputタブに表示されます。
- **ステータスレコード**、つまり `STATUS` レコード。同じステータスをJSONで保持します。
- **新しいイベント**、つまり実行のデータセット。新しいイベントが古い順に並び、最後に1行のステータス行が入ります。
- **診断**。対応が必要なことがあるときだけ書き込みます。

イベント行は、XquikのREST APIが返すイベントそのもので、すべてのフィールドを含みます。ステータスレコードには、X (Twitter) Crypto Trackerが表示するとおりに `state`、`targets`、`destinations`、`eventsSaved`、`hoursCharged`、`paidThrough`、`pausesAt`、`nextStep`、`nextStepAction`、`nextStepUrl` が入ります。

アカウント内の履歴データセットは、モニターのすべてのイベントを1回ずつ保存します。名前は `x-monitor-` で始まります。

## AIエージェント向け

API全体が1回の呼び出しです。各呼び出しはモニターを開始または更新し、前回の呼び出しから監視した時間を課金し、新しいものだけを返します。同じ時間を2回課金する呼び出しはありません。モニターを開始または更新する呼び出しはすぐに終わり、ApifyのMCPが待つ時間内に収まります。停止は最後のイベントを先に集めるため、少し時間がかかります。

次の入力でモニターを開始または継続します。

```json
{
  "twitterHandles": ["VitalikButerin"],
  "searchTerms": ["$ETH"],
  "monitorName": "agent-demo"
}
```

実行のデータセットには、新しいイベントのあとに、`resultType` が `status` の行が1行入ります。その `state` はモニターが監視中かどうかを、`nextStep` は次にすることを示します。モニターを確認するには、同じ入力でActorをもう一度呼び出します。何も変わらず、課金はすでに監視した時間だけです。

モニターが監視を続けるには、少なくとも24時間に1回の実行が必要です。ApifyのMCPサーバーにはスケジュールのツールがないので、スケジュールは自分では追加できません。`nextStepUrl` のページでApifyのスケジュールを追加するよう、ユーザーに頼んでください。そのスケジュールが、同じ入力でActorを1時間ごとに実行します。止めるには、同じ入力に `"stop": true` を付けて実行します。

## 暗号資産Twitterトラッカーの費用は？

すべてのApify有料プランで、monitor-hourあたり$0.0045です。アカウントまたはキーワード1つが1モニターです。Apifyのプラットフォーム利用料は別途かかります。

- 1アカウントを30日間追跡すると、約$3.24です。
- 10人のKOLを30日間追跡すると、約$32.40です。
- イベントとアラートは、いくつ届いても無料です。
- 開始料金はかかりません。実行が課金するのは、すでに監視した時間だけです。
- Xに存在しない対象は何も監視せず、費用もかかりません。
- 実行あたりの最大コストが、各課金に上限をかけます。上限を超えた時間は次の実行まで待ちます。

1時間ごとのスケジュールなら、支払う監視時間に比べてApifyの利用料は小さく済みます。数分ごとの実行は利用料を増やすだけで、アラートには何の違いもありません。アラートはどのみち実行と実行の間に届きます。

監視には[Apifyの有料プラン](https://apify.com/pricing?fpr=xquik)が必要です。無料プランでは、実行はモニターを開始せず、課金もしません。代わりに最初のアカウントの最新ツイート5件を表示します。

## 制限&復旧

- 1つの入力で、アカウントとキーワードを合計100件まで指定できます。それ以上は2つのタスクを使ってください。
- Webhook URLは1つの入力あたり10件までで、ほかにTelegramも使えます。
- イベントは30日間保管されるので、その期間内なら `since` で再び保存できます。
- 早く止まった実行は、そのイベントを次の実行に残します。失われるイベントはありません。
- 各実行は無料のステータス行を1行書き込むので、データセットが空になることはありません。
- Xquikの監視Actorはどれも、1時間あたりの料金が同じです。実行は、どのActorが監視したかにかかわらず、すべてのモニターの最も古い未払いの時間を支払います。

## 関連するXquik Actor

すべてのXquik Actorは、同じ抽出エンジン、フィルター優先の課金&診断機能を共有しています。必要なデータに合うものを選んでください。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper)は、検索、プロフィールのタイムライン、リスト&ポストIDから、50以上のフィルター&フラットなエクスポート付きでポストをスクレイピングします。分析なしでポストデータが必要なときに使います。1行あたり$0.00015から。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper)は、ユーザー名、ID、URLから、プロフィールとそのポスト、返信、メディア&フォロワーをスクレイピングします。検索ではなくアカウントから始めるときに使います。1行あたり$0.00015から。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper)は、25以上のフィルターで、ポストへの返信、コメント&会話全体をスクレイピングします。ポストの下の議論が必要なときに使います。1行あたり$0.00015から。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper)は、ポストのURLやIDから、返信、引用ポスト、リポストしたユーザー&スレッドを一括でスクレイピングします。誰がポストに反応したかを測るときに使います。1行あたり$0.00015から。
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper)は、11のフィルターを使い、ポストの引用ポストを、テキスト、メディア、件数&著者とともにスクレイピングします。ポストを引用した人&その発言を調べるときに使います。1ポストあたり$0.00015から。
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

いいえ。XquikのX (Twitter) Crypto Trackerは、XのCookie、APIキー、ログイン、認証情報を必要としません。チェックはすべてXquikのインフラで実行します。

### KOLのツイートはどのくらい速く届きますか？

Xquikは通常、監視しているアカウントの新しいツイート、返信、引用、リポスト、プロフィールの変更を、Xに表示されてから一秒もかからずに捕捉します。アラートはイベントが届くたびに送られ、実行を待つことはありません。

### ミームコインやコントラクトアドレスも追跡できますか？

はい。コインのキャッシュタグ、名前、コントラクトアドレスを `searchTerms` に追加します。Xの最新の検索結果に表示される新しいツイートが、すべてアラートに届きます。

### 削除されたツイートもわかりますか？

はい。`deletedPosts` はデフォルトでオンなので、アカウントが削除したツイートでアラートが届きます。

### これは投資助言ですか？

いいえ。トラッカーは、Xの公開イベントを起きたとおりに送ります。投資助言はせず、コインの順位付けもしません。

### 監視に有料プランが必要だと実行に表示されるのはなぜですか？

モニターは実行と実行の間も、1日中動きます。そのため、Apifyの有料プランが必要です。アップグレードしてから、同じ入力でもう一度実行してください。

### モニターを止めるとどうなりますか？

実行はすべての対象を止め、アラートをオフにします。それまでに監視した時間を課金します。その後、最新のイベントを少し待って保存するので、取り残されるイベントはありません。すでに保管されたイベントは、30日間読み取れます。

### API、スケジュール&連携は使えますか？

はい。Apify APIまたはXquik REST APIを使ってください。[APIタブ](https://apify.com/xquik/x-twitter-crypto-tracker/api)には、Python、JavaScript、cURLの例があります。Apifyの[スケジュール](https://docs.apify.com/platform/schedules)で、モニターを動かし続けられます。エージェントは[Apify MCP](https://docs.apify.com/platform/integrations/mcp)から呼び出せます。

### Xアカウントを監視しても合法ですか？

XquikのX (Twitter) Crypto Trackerは、Xの公開データを取得します。結果には個人データが含まれることがあります。目的が合法であることを確認し、自分に適用されるプライバシー規則に従ってください。判断に迷う場合は、資格のある弁護士に相談してください。

### どこでサポートを受けられますか？

実行IDを添えて[Issuesタブ](https://apify.com/xquik/x-twitter-crypto-tracker/issues)でissueを開いてください。ステータスページがすべての実行を説明し、対応が必要な実行は無料の診断情報がカバーします。

### カスタムソリューションを依頼できますか？

はい。必要な内容を[Issuesタブ](https://apify.com/xquik/x-twitter-crypto-tracker/issues)に書いてください。Xquikはダッシュボード、REST API、MCPサーバー、Webhookも提供しています。Xquikのウェブサイトは[Apifyのプロフィール](https://apify.com/xquik)にあります。
