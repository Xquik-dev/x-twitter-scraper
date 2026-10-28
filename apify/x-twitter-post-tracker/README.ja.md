[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · [简体中文](README.zh-CN.md) · **日本語** · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![FramerがXquik MCPをコーディングエージェントに接続する様子](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[FramerがXquikのスクレイパーをClaude Code、Codex、Cursorなどと一緒に使う様子](https://youtu.be/4UOSpoOoC3Y?t=367)を6:07から視聴できます。

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。XquikのX (Twitter) Post Trackerは、選んだポストの公開カウントを記録します。XのCookieやログインは必要ありません。後でもう一度実行すると、各行に変化が表示されます。他のApify Actorの多くは、フィルタリングや重複排除の前に課金します。Xquikが課金するのは、配信した重複のない結果だけです。

ポストのURLまたはツイートIDを貼り付けます。各実行は、ポストごとに1行のスナップショットを保存します。1行には、その時点の表示回数、いいね、リポスト、返信、引用、ブックマークが入ります。前回のスナップショットからの変化と、最初のスナップショットからの変化も入ります。料金は**配信されたスナップショット1件につき$0.00015**で、Apifyのプラットフォーム利用料は別途かかります。

> Xquikは独立したサードパーティサービスです。X Corpとは提携していません。
> 「Twitter」および「X」はX Corpの商標です。

## X (Twitter) Post Trackerを使う理由は？

- **どの行にも伸びが入ります。** 各スナップショットには、前回と初回の実行からの変化が入ります。
- **データベースなしで履歴を残せます。** 以前の実行のデータセットを渡します。最初のスナップショットは、実行から実行へ引き継がれます。
- **どの形式のポストでも貼り付けられます。** ポストのURLとツイートIDを1つのリストに混ぜられます。
- **スプレッドシートにそのまま使えるエクスポート。** `fields` と `flatten` で列を整えます。JSON、CSV、Excel、XML、RSSでエクスポートできます。

## 得られるもの

### 完全な結果

- 各結果には、Xがその対象について持つ最も完全なデータが入ります。

### 正確な行

- ポストが欠落扱いになるのは、本当に消えたときだけです。
- 行の中のIDは、すべて正確なままです。
- 行には公開データだけが入ります。

### 最新のデータ

- Xが変更を加えても、読み取りは動き続けます。

### 速度

- Xの応答が遅くても、リクエストは待たされません。
- Actorは、多数のユーザー名、ポスト、クエリを同時に読み取ります。
- 読み取りは、行が届いた時点で終わります。
- 止まったActorの呼び出しは、自動で回復します。

### 公正な課金

- 不正な入力は読み取りの前に拒否されるので、料金はかかりません。
- Actorが課金するのは、配信した、重複のない、条件に合う行だけです。
- 再起動した実行が二重に課金することはありません。
- 支出上限は行数の上限になり、診断情報はそれでも書き込まれます。
- 小規模な実行の最後には、コストを下げるヒントが出ます。

### 信頼性

- Xの一時的な障害で、リクエストが失敗することはありません。
- 期限に達すると、見つかった行を診断情報とともに返します。
- Actorは、Xquikの短い障害を乗り越えます。
- Actorの実行は、再起動しても重複なく続きます。
- 1行の不具合で、バッチ全体がだめになることはありません。
- 停止した実行も、行とレポートを残します。
- 開始できなかった実行も、その理由を説明します。
- X側の問題は、読み取りに影響する前に修正します。
- サポートは、リクエストや実行が返した内容を正確に確認できます。

### エージェント向けの設計

- Actorは、他のActor向けに書かれた入力も受け付けます。
- すべての実行が、終了した理由と再試行すべきかどうかを伝えます。

### 充実したデータ

- 各スナップショット行には、以前の実行からの各カウントの変化が含まれます。

### 品質チェック

- Xが表示するフィールドは、すべて提供するか、意図して除外するか、存在しないことを確認しています。
- すべての読み取りを、毎時ライブで確認しています。

## X (Twitter) Post Trackerで取得できるデータは？

- 各ポストの表示回数、いいね、リポスト、返信、引用、ブックマーク。
- `capturedAt` に入る、各スナップショットの時刻。
- 各ポストの最初のスナップショットと、その時刻とカウント。
- 以前の実行のデータセットから得る、前回のスナップショット。
- 前回のスナップショットからの、各カウントの変化。
- 最初のスナップショットからの、各カウントの変化。
- ポストの本文、日付、リンク、投稿者。
- 1回の実行で扱い、入力順に配信する多数のポスト。
- ApifyのデータセットによるJSON、CSV、Excel、XML、RSSのエクスポート。

## Xのポストの指標を継続して追跡する方法

Apifyは初めてですか？まず[無料アカウントを作成](https://console.apify.com/sign-up?fpr=xquik)してください。無料プランはクレジットカード不要で、毎月$5分を使えます。スナップショット1件$0.00015なら、プラットフォーム利用料を除いて、$5で最大33,000件のスナップショットをまかなえます。その後ここに戻り、Try for freeを押してください。

1. Apify ConsoleでXquikのX (Twitter) Post Trackerを開きます。
2. ポストのURLまたはツイートIDを `tweetIds` に貼り付けます。
3. 初回の実行では `previousDatasetId` を空のままにして、Startをクリックします。
4. 次の実行では、`previousDatasetId` で初回の実行のデータセットを選びます。
5. データセットをJSON、CSV、Excelでダウンロードするか、Apify APIを使います。

どの手順でも、XのCookie、ログイン情報、APIキーを入力することはありません。

## 入力

`tweetIds` は、ツイートIDとポストのURLを受け取ります。混ぜて指定してもかまいません。

```json
{
  "tweetIds": [
    "2102882545427714266",
    "https://x.com/OpenAI/status/2082577277246972300",
    "20"
  ],
  "maxItems": 1000
}
```

`startUrls` も同じポストのURLを受け取ります。各URLは、文字列のまま、または `{ "url": "..." }` オブジェクトとして指定します。

`previousDatasetId` には、このActorの以前の実行のデータセットを指定します。フォームでは、自分のデータセットから選べます。Actorはそのデータセットを読み取るだけです。初回の実行では空のままにします。

```json
{
  "tweetIds": ["2102882545427714266", "20"],
  "previousDatasetId": "<dataset ID of an earlier run>"
}
```

入力で2回指定したポストは1行になります。`maxItems` は、入力の先頭から順にポストを残します。問題なく終わった小規模な実行は `run-report` を書き込まず、Apifyの利用料を節約します。毎回書き込むには `alwaysSaveRunRecords` をオンにしてください。

## スケジュールで実行する

Apifyの[スケジュール](https://docs.apify.com/platform/schedules)は、1時間ごとなどのcronでActorを開始します。

1. `previousDatasetId` なしで、ポストを指定してActorを1回実行します。
2. Apify ConsoleでActorのスケジュールを作成します。
3. スケジュールに同じ `tweetIds` の入力を設定します。
4. `previousDatasetId` に初回の実行のデータセットを設定します。

これで、スケジュールされた各実行が、そのデータセットとカウントを比較します。各実行を直前の実行と比較するには、Apify APIで実行を開始します。前回の実行の `defaultDatasetId` を `previousDatasetId` として渡します。最初のスナップショットは引き継がれるので、`changeSinceFirst` は1日目から数え続けます。前回の実行になかったポストは、次の実行で新しい `firstSnapshot` を始めます。

実行がスナップショットを保存しなかった場合は、その前の実行のデータセットを渡してください。

## 出力

各ポストは、実行ごとにデータセットの1行になります。行の先頭は `postId`、`url`、`text`、`createdAt`、`author` です。続いて `capturedAt` と6つのカウント、`viewCount`、`likeCount`、`retweetCount`、`replyCount`、`quoteCount`、`bookmarkCount` が入ります。その後に `firstSnapshot`、`previousSnapshot`、`changeSincePrevious`、`changeSinceFirst` が入ります。カウントが0の場合、Xが値を報告していない可能性があります。

例はサンプル値です。実際の結果にはライブデータが入ります。2回目の実行の行は次のようになります。

```json
{
  "postId": "2102882545427714266",
  "url": "https://x.com/NASA/status/2102882545427714266",
  "text": "Welcome to the Artemis Accords, Croatia",
  "createdAt": "Wed Sep 23 22:07:23 +0000 2026",
  "author": { "id": "11348282", "username": "NASA", "name": "NASA" },
  "capturedAt": "2026-10-28T09:00:00.000Z",
  "viewCount": 1291231,
  "likeCount": 9043,
  "retweetCount": 772,
  "replyCount": 207,
  "quoteCount": 100,
  "bookmarkCount": 661,
  "firstSnapshot": {
    "capturedAt": "2026-10-25T09:00:00.000Z",
    "viewCount": 500000,
    "likeCount": 5000,
    "retweetCount": 500,
    "replyCount": 150,
    "quoteCount": 50,
    "bookmarkCount": 400
  },
  "previousSnapshot": {
    "capturedAt": "2026-10-27T09:00:00.000Z",
    "viewCount": 1200000,
    "likeCount": 9000,
    "retweetCount": 770,
    "replyCount": 205,
    "quoteCount": 99,
    "bookmarkCount": 640
  },
  "changeSincePrevious": {
    "viewCount": 91231,
    "likeCount": 43,
    "retweetCount": 2,
    "replyCount": 2,
    "quoteCount": 1,
    "bookmarkCount": 21
  },
  "changeSinceFirst": {
    "viewCount": 791231,
    "likeCount": 4043,
    "retweetCount": 272,
    "replyCount": 57,
    "quoteCount": 50,
    "bookmarkCount": 261
  },
  "resultType": "snapshot",
  "sourceTarget": "2102882545427714266"
}
```

行からは、次の3つのケースを見分けられます。

| 行の内容 | 意味 |
| --- | --- |
| `previousSnapshot: null` | 以前のデータセットに、このポストの行がありません。 |
| カウントのある `previousSnapshot` | 行はそのスナップショットと比較されます。 |
| 変化フィールドにある `null` のカウント | 以前の行にそのカウントがありません。 |

初回の実行では、`firstSnapshot` に行自身の時刻とカウントが入ります。2つの変化フィールドは、次回以降の実行まで `null` です。

## 出力の列

8つの入力が、実行が読み取った後の各行の形を整えます。コードは実行せず、料金も変わりません。

| フィールド | 機能 |
| --- | --- |
| `fields` | 書いた順序と表記で、これらのフィールドだけを残します |
| `omitFields` | これらのフィールドを除き、残りを保持します |
| `renameFields` | フィールドを新しい名前の列に移します |
| `flatten` | ネストした各オブジェクトを最上位の列に展開します |
| `fillMissingFields` | 行にない保持対象のフィールドを `null` で埋めます。デフォルトでオンです |
| `joinFields` | これらのリストを、それぞれ1つのテキスト値にします |
| `joinSeparator` | 結合する項目の間のテキストです。デフォルトはカンマと空白です |
| `constantFields` | すべての行に同じテキストの列を追加します |

- オブジェクト内のフィールドはドットで指定します。例は `changeSinceFirst.viewCount` です。
- `changeSincePrevious` を展開すると、カウントごとに1列になります。
- フィールド名が間違っていると、実行は読み取りの前に止まり、料金はかかりません。
- 他のActor向けに書かれたmap関数やjqフィルターは無視します。

## Xのポストの追跡にかかる費用は？

すべてのApifyプランで、配信されたスナップショット1件につき$0.00015です。Apifyのプラットフォーム利用料は別途かかります。

より多く使う場合は、前払いの利用枠が大きい[Apifyプランを選んでください](https://apify.com/pricing?fpr=xquik)。

- 課金は配信したスナップショット行1件につき1回です。`diagnostics` の診断情報は無料です。
- 開始料金も、以前のデータセットを読み取る料金もかかりません。
- 実行は課金の前に重複したポストを除きます。
- Xに存在しないポストでは、行も料金も追加されません。
- 実行が読み取れないデータセットは実行を止め、料金はかかりません。
- Apifyの最大合計課金額の設定で、配信する行数に上限をかけられます。

## 制限&復旧

XquikのX (Twitter) Post Trackerは、1回の実行で多数のポストを読み取ります。Apifyが実行を再起動しても、配信済みの行と進捗は残ります。このActor独自の時間制限はありません。設定したApifyのタイムアウトは守ります。

実行ステータスは、Xで一致するものがないポストの数を示します。以前のデータセットには最大100,000行まで入ります。実行が読み取れないデータセットは、ポストを読み取る前に実行を止めます。その場合、ステータスは以前の実行のデータセットを選ぶよう促します。中断した実行は、無料の `partial` 診断を書き込みます。再試行する前に `nextAction` を確認してください。

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
- [X (Twitter) Monitor](https://apify.com/xquik/x-twitter-monitor)は、アカウントの新しいツイート、返信、引用、リポスト、プロフィールの変更を、通常はXに表示されてから一秒もかからずにすべて捕捉し、キーワードのツイートとフォローも捕捉します。Xにツイートが表示されたらすぐにアラートが必要なときに使います。monitor-hourあたり$0.0045から。

## よくある質問

よくある質問に答えたあと、サポートを受けられる場所を案内します。

### XのCookie、APIキー、ログインは必要ですか？

いいえ。XquikのX (Twitter) Post Trackerは、XのCookie、APIキー、ログイン、認証情報を必要としません。

### `previousDatasetId` ではどのデータセットを選べばいいですか？

このActorの以前の実行のデータセットを選んでください。その中で各ポストの最新の行が `previousSnapshot` になります。他のActorの行と診断情報は読み飛ばします。

### 最初のスナップショットは、何回実行しても残りますか？

はい。各行が `firstSnapshot` を持っています。各実行を直前の実行につなげれば、最初のスナップショットは変わりません。

### 削除されたポストは追跡できますか？

いいえ。Xに存在しないポストでは、行も料金も追加されません。実行ステータスがその数を示します。

### Xのポストを追跡しても合法ですか？

XquikのX (Twitter) Post Trackerは、Xの公開フィールドを取得します。結果には個人データが含まれることがあります。目的が合法であることを確認し、適用されるプライバシー規則に従ってください。判断に迷う場合は、資格のある弁護士に相談してください。

### API、スケジュール&連携は使えますか？

はい。Apify APIまたはXquik REST APIを使ってください。[APIタブ](https://apify.com/xquik/x-twitter-post-tracker/api)には、Python、JavaScript、cURLの例があります。Apifyの[スケジュール](https://docs.apify.com/platform/schedules)を使うと、XquikのX Post Trackerをcronで実行できます。エージェントは[Apify MCP](https://docs.apify.com/platform/integrations/mcp)から呼び出せます。古いビルドが必要な場合を除き、`latest` を使ってください。

### どこでサポートを受けられますか？

実行IDを添えて[Issuesタブ](https://apify.com/xquik/x-twitter-post-tracker/issues)でissueを開いてください。対応が必要な実行は、キーバリューストアにある無料の診断情報が説明します。

### カスタムソリューションを依頼できますか？

はい。必要な内容を[Issuesタブ](https://apify.com/xquik/x-twitter-post-tracker/issues)に書いてください。Xquikはダッシュボード、REST API、MCPサーバー、Webhookも提供しています。Xquikのウェブサイトは[Apifyのプロフィール](https://apify.com/xquik)にあります。
