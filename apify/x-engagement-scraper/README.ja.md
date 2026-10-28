[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · [简体中文](README.zh-CN.md) · **日本語** · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![FramerがXquik MCPをコーディングエージェントに接続する様子](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[FramerがXquikのスクレイパーをClaude Code、Codex、Cursorなどと一緒に使う様子](https://youtu.be/4UOSpoOoC3Y?t=367)を6:07から視聴できます。

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。XquikのX Engagement Scraperは、任意のポストについて、返信、引用ポスト、リポストしたユーザー&スレッドを収集します。他のApify Actorの多くは、フィルタリングや重複排除の前に課金します。Xquikが課金するのは、配信した結果のうち、重複がなくフィルター条件に合うものだけです。

1件以上のXのポストについて、Twitterの返信、引用ポスト、リポストしたユーザー&スレッドの文脈を収集します。料金は**配信された行1件につき$0.00015**で、プラットフォームの利用料はApifyが別途請求します。X APIキーもログインも不要です。

> Xquikは独立したサードパーティサービスです。X Corpとは提携していません。
> 「Twitter」および「X」はX Corpの商標です。

## X Engagement Scraperを使う理由

- **必要な返信だけ。** 直接の返信か入れ子の返信、返信の深さ&期間を選べます。
- **リポストしたユーザーから見込み客を。** リポストしたユーザーを `minFollowers`、`hasEmail`、`bioContains` で絞り込めます。行には、各プロフィールが公開しているメールアドレス、電話番号&リンクが入ります。
- **1回の実行ですべてのエンゲージメントの種類。** ポストのURLかポストIDを貼り付けます。返信、引用ポスト、リポストしたユーザー&スレッドの文脈を混ぜられます。
- **行数の上限を設定。** 実行全体は `maxItems` で、各ポストのエンゲージメントの種類ごとは `maxItemsPerTarget` で上限をかけられます。
- **エンゲージメント率を標準で算出。** `fields` に `engagementRate` か `engagementPerView` を指定すると、その列を追加します。

### 完全な結果

- 各回答には、Xが持つ最も完全なデータが入ります。

### 正確な行

- リポストには、元のポストの全文が入ります。
- 行の中のIDはすべて正確なままです。
- メンション、リンク、ハッシュタグ&ハイライトの位置は、テキストと一致します。
- 不明な件数は `unknownCounts` に記録され、0として表示されることはありません。
- 認証バッジは `x.com` の表示と一致します。
- 行には公開データだけが入ります。
- 引用ポストの検索は、実際の引用ポストをすべて返し、それ以外は返しません。
- 広告&プロモーションの項目が行に入ることはありません。

### 最新のデータ

- Xが変更を加えても、読み取りは動き続けます。

### 速度

- 遅いページが1つあっても、実行は止まりません。
- 読み取りは、行が届いた時点で終わります。
- 止まったActorの呼び出しは、自動で回復します。

### 公正な課金

- 不正な入力は無料で、何を直せばよいかを伝えます。
- Actorが課金するのは、配信した行のうち、重複がなく条件に合うものだけです。
- 複数の対象に共通するプロフィールの課金は1回だけです。
- 再起動した実行が二重に課金することはありません。
- 実行は支出の上限内に収まり、上限に達しても診断情報を書き込みます。
- 小さな実行の最後には、コストを下げるヒントが表示されます。

### 信頼性

- 一度きりのエラーで実行が失敗することはありません。
- 期限が来ると、それまでに見つかった行を診断情報とともに返します。
- Xquikの短い障害があっても、Actorは動き続けます。
- Actorの実行は、再起動しても重複なく続きます。
- 不正な行が1つあっても、バッチ全体は失敗しません。
- 停止した実行にも、行&レポートが残ります。
- 開始できない実行も、その理由を説明します。
- サポートは、リクエストや実行が返した内容を正確に確認できます。

### エージェント向けの設計

- Actorは、他のActor向けに書かれた入力も受け付けます。
- 出力はフラットな列&エンゲージメントの合計付きで、そのままスプレッドシートで使えます。
- どの実行も、終了した理由&再試行すべきかどうかを示します。

### 豊富なデータ

- ポストの行には、Note Tweetのテキスト、編集履歴、コミュニティノート、リーチのラベル&返信の設定が入ります。
- 行には、投稿元のアプリ、メディアの数&プロフェッショナルアカウントの情報が入ります。
- メディアには、バリアント、代替テキスト、サイズ&利用可否の理由が付きます。
- 各アカウントがポストをリポストした日時がわかります。
- 各アカウントがポストに返信、リポスト、引用したかがわかります。著者をフォローしているか、コミュニティに参加しているかもわかります。

### 品質チェック

- Xが表示するフィールドはすべて、提供されるか、意図的に除かれるか、存在しないことが確認されています。
- Xquikは、すべての読み取りを実際のXでテストしています。

## X Engagement Scraperが抽出できるデータ

- 取得できる結果ページ全体にわたる直接の返信。
- 4種類の並び順による、直接の返信&入れ子の返信。
- 選択できる行としての、元のポストの詳細。
- テキスト、著者、メディア&指標を含む引用ポスト。
- リポストしたユーザーのプロフィール。
- 各元ポストの周りの会話の文脈。
- 元のポスト&エンゲージメントの種類の帰属情報。

## Xのポストのエンゲージメントをスクレイピングする方法

Apifyを初めて使いますか？まず[無料アカウントを作成してください](https://console.apify.com/sign-up?fpr=xquik)。無料プランはクレジットカード不要&毎月$5分を使えます。1行あたり$0.00015なので、プラットフォーム利用料を別にすると、$5で最大33,000行分をまかなえます。その後、このページに戻ってTry for freeを押してください。

1. Apify ConsoleでXquikのX Engagement Scraperを開きます。
2. ポストのURLを `startUrls` に、または数値のポストIDを `tweetIds` に貼り付けます。
3. `engagementTypes` を選び、`minLikes` や `language` などのフィルターを追加します。
4. `maxItems` で配信する行数の上限を決め、Startをクリックします。
5. データセットをJSON、CSV、Excelのいずれかでダウンロードするか、Apify APIを使います。

`startUrls` は、各URLを文字列のまま、または `{ "url": "..." }` オブジェクトとして受け取ります。

```json
{
  "startUrls": [
    "https://x.com/OpenAI/status/2082577277246972300",
    { "url": "https://x.com/jack/status/20" }
  ]
}
```

## 入力

```json
{
  "tweetIds": ["2082577277246972300"],
  "engagementTypes": ["replies", "quotes", "retweeters"],
  "maxItems": 10000
}
```

Xは2024年に、ポストにいいねしたユーザーの表示をやめました。`favoriters` タイプは行を返しません。行のない実行は、その理由を診断情報に書きます。

デフォルトでは、各アカウントや各ポストはエンゲージメントの種類ごとに1回だけ出力され、課金も1回です。元のポストごとに行を残すには、`dedupeAcrossTargets` を `false` にしてください。スキップした重複は課金されず、実行ステータスがその件数を数えます。

問題なく終わった小規模な実行は、`run-report` を省いてApifyの利用料を節約します。毎回書き込むには `alwaysSaveRunRecords` をオンにしてください。

### 他のエンゲージメント用Actorから移行する

このActorは、他のエンゲージメント用Actorの次のフィールド名を読み取ります。

- `urls` は `startUrls` に対応します。
- `category` は `engagementTypes` に対応します。`replies`、`retweets`、`info` & `checkRetweet` は、それぞれ `replies`、`retweeters`、`tweet` & `repostCheck` として読み取ります。
- `resultsPerCategory` は `maxItemsPerTarget` に対応します。
- `retweetCheckUsername` は `repostCheckUsers` に対応します。

`followers` や `tweets` など、他のActorの役割にあたる `category` は実行を止めます。そのとき、読み取り&課金は一切行いません。メッセージが、使うべきActorを示します。これらの名前のどれか&対応する正規のフィールドの両方を設定した場合は、正規の値が優先されます。実行ログには、採用されなかったフィールドが記録されます。

## 出力

各行の `resultType` は、`tweet`、`replies`、`completeReplies`、`quotes`、`retweeters`、`favoriters`、`thread`、`repostCheck` のいずれかです。`sourceTarget` には元のポストのIDが入ります。ポスト&プロフィールのフィールドは、安定したXquik RESTのレスポンス形式に従います。

`completeReplies` は、返されたすべての行を残します。実行レポートは、一部しか取得できなかった対象を `incompleteTargets` に数えます。フィルターは課金の前に適用されます。

リポストしたユーザー&いいねしたユーザーには、`minFollowers`、`hasEmail` & `bioContains` など、すべてのプロフィールのフィルターを使えます。その行には `email` & `contactInfo` が入ります。これは、各プロフィールが公開しているメールアドレス、電話番号&リンクです。

例はサンプル値です。結果にはライブデータが反映されます。返信の行は次のようになります。

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

## リポストの確認

各アカウントが各ポストをリポストしたかどうかを調べるには、`engagementTypes` に `repostCheck` を加え、`repostCheckUsers` にアカウントを並べます。

```json
{
  "tweetIds": ["2098439298617856319"],
  "engagementTypes": ["repostCheck"],
  "repostCheckUsers": ["discord", "nasa"]
}
```

確認1件につき1行になり、`isRetweeted`、`retweetedAt`、`retweetId`、`checkedPosts` & `complete` が入ります。その `id` は `repostCheck:<post ID>:<account>` です。確認では、各アカウントの最新のポストを読み取ります。それらのポストより古いリポストは `false` になり、`complete: false` が付きます。

`repostCheck` & `tweet` の行だけの実行は、入力した順序を保ちます。各ポストの後に、指定した順でそのアカウントが並びます。

## リポストのタイムスタンプ

`retweeters` の結果では、`includeRetweetTimestamp` を `true` に設定してください。`retweetedAt` 列には、確認できたリポスト時刻がUTCで入ります。

XquikのX Engagement Scraperは、Xにそのリポストがまだ表示されていれば、リポスト時刻を取得します。古いリポスト、削除されたリポスト、表示できないリポストでは、タイムスタンプが `null` になります。その場合もプロフィールは出力に残ります。`null` は、そのアカウントがポストをリポストしなかった証拠にはなりません。

このオプションを使うと実行は遅くなります。プロフィールだけが必要なら、オフのままにしてください。プロフィールの `createdAt` は、アカウントの作成日のままです。ポストの行は、リポストのイベントを含む場合に `retweetedAt` を持ちます。元のポストの日時やスクレイピングした時刻を、リポスト時刻の代わりに使うことはありません。結果の料金&配信行ごとの課金は変わりません。

## Xのポストのエンゲージメントのスクレイピングにはいくらかかりますか？

どのApifyプランでも、配信された行1件につき$0.00015です。プラットフォームの利用料は、Apifyが別途請求します。

より多くの量が必要なら、前払いの利用枠が多い[Apifyプランを選んでください](https://apify.com/pricing?fpr=xquik)。

- 課金は配信したデータ行1件につき1回です。`diagnostics` の診断情報は無料です。
- 開始、ポスト、エンゲージメントの種類、ページの料金はかかりません。
- 重複排除は課金の前に行います。

## 制限&復旧

XquikのX Engagement Scraperは、1回の実行で多数のポスト&エンゲージメントの種類を読み取ります。Apifyが実行を再起動しても、配信済みの行&進捗は残ります。このActor独自の時間制限はありません。

抽出が中断されると、無料の `partial` 診断を書き込みます。取得できた結果はそのまま残ります。再試行する前に `availableResults`、`failedTargets`、`retryable` & `nextAction` を確認してください。Actorの正常終了が示すのは配信の完了です。抽出が最後まで終わったことは意味しません。

実行ステータスは、早期停止の原因をすべて示します。`stopCauses` は各原因を挙げ、それぞれに `message`、`retryable` & `nextAction` を付けます。原因は `target_not_found`、`target_failed`、`pagination_safety_limit`、`reply_reach` & `deadline_reached` です。`reply_reach` は、Xが返信スレッドの一部しか返さなかったことを示します。存在しない対象が一覧に入るのは、別の原因で実行が止まった場合だけです。いずれかの原因が再試行可能なら、実行も `retryable` になります。

## 関連するXquik Actor

すべてのXquik Actorは、同じ抽出エンジン、フィルター優先の課金&診断機能を共有しています。必要なデータに合うものを選んでください。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper)は、検索、プロフィールのタイムライン、リスト&ポストIDから、50以上のフィルター&フラットなエクスポート付きでポストをスクレイピングします。分析なしでポストデータが必要なときに使います。1行あたり$0.00015から。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper)は、ユーザー名、ID、URLから、プロフィールとそのポスト、返信、メディア&フォロワーをスクレイピングします。検索ではなくアカウントから始めるときに使います。1行あたり$0.00015から。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper)は、25以上のフィルターで、ポストへの返信、コメント&会話全体をスクレイピングします。ポストの下の議論が必要なときに使います。1行あたり$0.00015から。
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
- [X (Twitter) Monitor](https://apify.com/xquik/x-twitter-monitor)は、アカウントの新しいツイート、返信、引用、リポスト、プロフィールの変更を、通常はXに表示されてから一秒もかからずにすべて捕捉し、キーワードのツイートとフォローも捕捉します。Xにツイートが表示されたらすぐにアラートが必要なときに使います。monitor-hourあたり$0.0045から。

## よくある質問

よくある質問に答えたあと、サポートを受けられる場所を案内します。

### X APIキーやログインは必要ですか？

いいえ。XquikのX Engagement Scraperは、X APIキー、ログイン、認証情報を必要としません。

### Xのエンゲージメントデータをスクレイピングしても合法ですか？

XquikのX Engagement Scraperは、Xの公開フィールドを取得します。結果には個人データが含まれることがあります。目的が合法であることを確認し、適用されるプライバシー規則に従ってください。判断に迷う場合は、資格のある弁護士に相談してください。

### 実行結果が0件だったのはなぜですか？

まず実行ステータスを確認してください。結果が空の実行では、ステータスが対象&フィルターの確認を促します。対応が必要なことがあると、無料の `diagnostics` 出力が現れます。その `stopCauses` は、原因ごとに従うべき `nextAction` を示します。実行は、読み取れない入力をすべて挙げ、直し方を示します。Xは2024年にポストにいいねしたユーザーの表示をやめたため、`favoriters` は行を返しません。

### API、スケジュール&連携は使えますか？

はい。50個の公開タスクかXquik REST APIから選べます。[APIタブ](https://apify.com/xquik/x-engagement-scraper/api)には、Python、JavaScript & cURLの例があります。Apifyの[スケジュール](https://docs.apify.com/platform/schedules)で、XquikのX Engagement Scraperをcronで実行できます。エージェントは[Apify MCP](https://docs.apify.com/platform/integrations/mcp)を使います。古いビルドが必要な場合を除き、`latest` を使ってください。

### どこでサポートを受けられますか？

実行IDを添えて、[Issuesタブ](https://apify.com/xquik/x-engagement-scraper/issues)でissueを開いてください。キーバリューストアにある無料の診断情報が、対応が必要な実行について説明します。行が1件も返らなかった実行は、その理由をステータスで示します。

### カスタムソリューションを依頼できますか？

はい。必要な内容を[Issuesタブ](https://apify.com/xquik/x-engagement-scraper/issues)に書いてください。Xquikは、ダッシュボード、REST API、MCPサーバー & Webhookも提供しています。Xquikのウェブサイトは、Xquikの[Apifyプロフィール](https://apify.com/xquik)にあります。
