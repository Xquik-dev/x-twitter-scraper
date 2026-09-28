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

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。XquikのX Tweet Scraperは、50以上のフィルターで、ポスト（旧ツイート）、返信、プロフィール、リスト、検索結果を収集します。公開ベンチマークで、12のポスト用Actorの中で最も安く、最も速いことが実証されています。[下のベンチマーク](#ベンチマーク)のとおり、1行あたりのフィールド数は他のActorの中央値の2倍です。他のApify Actorの多くは、フィルタリングや重複排除の前に課金します。Xquikが課金するのは、配信した結果のうち、重複がなくフィルター条件に合うものだけです。

公開されているX(Twitter)のポストを、**すべてのApifyプランで配信結果1件あたり$0.00015から**スクレイピングできます。Apifyのプラットフォーム利用料は別途かかります。Xへのログインは不要で、開始料金もクエリ料金もかかりません。[Xquik](https://xquik.com)が開発しています。

> Xquikは独立したサードパーティサービスです。X Corpとは提携していません。
> 「Twitter」および「X」はX Corpの商標です。

## X Tweet Scraperでできること

XquikのX Tweet Scraperは、ポスト、エンゲージメント指標、著者の公開プロフィール、メディアを返します。URL、ユーザー名、リストID、ポストID、検索クエリを受け付け、50以上のフィルターを使えます。

### 主な機能

- フィルターと重複排除は課金前に行います。
- 1つの入力で、ID指定の取得、タイムライン、リスト、検索、エンゲージメントの各モードに対応します。
- ポストIDの入力に決まった件数の上限はありません。Apifyの支出とタイムアウトの設定は適用されます。
- 実行ログには、ページごとの所要時間が`fetchDurationMs`、`processingDurationMs`、`pushDurationMs`、`statusDurationMs`、`fullPageDurationMs`に表示されます。
- Apifyが実行を再起動しても、配信済みの行と進捗は残ります。

### ユースケース

- ポストごとにより多くのフィールドを使い、調査、データ補完、分析、AI学習に活用する。当社の中央値の行は、2026-09-27に63個のフィールドがありました。これは他の11個のActorの中央値の2倍です。
- ポストに表れるブランドへの感情を追跡できます。
- 競合のポストや業界の用語を監視できます。
- 公開の会話から見込み客を見つけられます。
- 研究用に公開データセットを集められます。
- 公開エンゲージメントの高いポストを見つけられます。

### X Tweet Scraperが抽出できるデータ

| フィールド             | 説明                                                     |
| ---------------------- | -------------------------------------------------------- |
| `id`                   | ポストID                                                 |
| `text`                 | ポストの全文（最大25,000文字のNote Tweetを含む）         |
| `createdAt`            | Xの形式のタイムスタンプ文字列                            |
| `likeCount`            | いいね数                                                 |
| `retweetCount`         | リポスト数                                               |
| `replyCount`           | 返信数                                                   |
| `quoteCount`           | 引用ポスト数                                             |
| `viewCount`            | 表示回数                                                 |
| `bookmarkCount`        | ブックマーク数                                           |
| `lang`                 | ポストの言語                                             |
| `url`                  | ポストへの直接リンク                                     |
| `tweetUrl`             | フラット出力でのポストURLの別名                          |
| `twitterUrl`           | フラット出力でのtwitter.com形式のURL                     |
| `author`               | 取得できる著者のフィールド（ユーザー名、自己紹介、ウェブサイト、各種カウント） |
| `authorUsername`       | フラット出力での著者のユーザー名                         |
| `authorFollowers`      | フラット出力での著者のフォロワー数                       |
| `authorUrl`            | フラット出力での著者のウェブサイト（取得できる場合）     |
| `authorDescription`    | フラット出力での著者の自己紹介                           |
| `authorCoverPicture`   | フラット出力での著者のヘッダー画像URL                    |
| `authorPinnedTweetIds` | フラット出力での著者の固定ポストID                       |
| `media`                | 添付された画像、動画、GIF                                |
| `mediaUrls`            | フラット出力でのメディアURL                              |
| `imageUrls`            | フラット出力での画像URL                                  |
| `videoUrls`            | フラット出力での動画URL                                  |
| `entities`             | ハッシュタグ、URL、メンション、動画のタイムスタンプ      |
| `displayTextRange`     | Xの表示テキストの範囲（取得できる場合）                  |
| `contentDisclosure`    | 開示のメタデータ（取得できる場合）                       |
| `conversationControl`  | 返信の制限設定と、公開の会話の所有者                     |
| `reactionContext`      | リアクションが参照する公開のポストとユーザー             |
| `limitedActions`       | 公開の操作制限と案内                                     |
| `isLimitedReply`       | 返信が制限されているかどうか                             |
| `isNoteTweet`          | Note Tweet（長文ポスト）かどうか                         |
| `isQuoteStatus`        | このポストが別のポストを引用しているかどうか             |
| `isRetweet`            | この行がリポストかどうか（元のポスト付き）               |
| `isPinned`             | 著者がこのポストを固定しているかどうか（フラット行）     |
| `isReply`              | このポストが返信かどうか                                 |
| `quoted_tweet`         | 引用元ポストのオブジェクト（引用ポストの場合）           |
| `conversationId`       | スレッドまたは会話のID                                   |
| `resultType`           | リッチな行、エンゲージメントの行、診断情報の行の種類     |
| `sourceTweetId`        | 記事モードとエンゲージメントモードでの元ポストID         |
| `article`              | `mode: "article"`での構造化された記事データ              |

任意のポストメタデータには、`authorUnavailable`、`card`、`communityId`、`communityNote`、`edit`、`exclusiveContent`、`noteTweet`、`postCta`があります。`isTranslatable`、`place`、`possiblySensitive`、`viewState`は、その他の公開の文脈を残します。`previousCounts`は編集前のエンゲージメントを残します。`tombstone`は表示に関する通知を残します。`unmentionedUserIds`は、会話から抜けたユーザーを挙げます。正確なフィールドはOpenAPIを参照してください。

入れ子の`author`オブジェクトには、公開プロフィールのフィールドが入ります。本人を識別する情報、各種カウント、認証、表示可否、プロフェッショナル情報、プロフィールの自己紹介を含みます。

リポストの行では`isRetweet`が`true`になります。その`text`には元のポストの全文が入ります。`retweeted_tweet`には、元のポストとその著者、各種カウントが入ります。

ポストの行には、`type`、`source`、`inReplyToId`、`inReplyToUserId`、`inReplyToUsername`、`retweeted_tweet`も残ります。引用されたポストとリポストされたポストは、どの入れ子の階層でも同じフィールドを持ちます。

メディアには、表示可否、サイズ、タグ、動画のバリアントが入ります。`watchNowUrl`と`visitSiteUrl`のアクションも入ります。

行には、閲覧者だけに見える状態は入りません。このActorは、フォロー、ブロック、ミュート、ブックマーク、いいね、リポスト、編集権限などの閲覧者のフラグを削除します。raw出力からも削除します。

## X Tweet Scraperでポストデータをスクレイピングする方法

Apify Consoleで次の手順に従ってください。

1. [タスクの例](#タスクの例)かInputタブを開きます。
2. URL、ユーザー名、ポストID、検索語を追加します。
3. `maxItems`と必要なフィルターを設定します。
4. Startをクリックし、実行が終わるのを待ちます。
5. データセットをJSON、CSV、Excel、HTMLでエクスポートします。

以下のレシピで、取得元ごとの入力を示します。

### URLを貼り付ける

ポスト、プロフィール、検索、リストのURLを自由に組み合わせて貼り付けられます。

```json
{
  "startUrls": [
    { "url": "https://x.com/elonmusk/status/1846987139428634858" },
    { "url": "https://x.com/nasa" },
    { "url": "https://x.com/search?q=AI%20lang%3Aen" },
    { "url": "https://x.com/i/lists/1748648376080666720" }
  ],
  "maxItems": 500
}
```

ポストのURLは、そのポストを重複なく入力順に返します。プロフィールのURLは、そのアカウントのポストを返します。検索のURLは、そのクエリを実行します。リストのURLは、そのリストのポストを返します。`maxItems`は、貼り付けたすべてのURLの結果の合計に上限をかけます。

### 多数のユーザー名をスクレイピングする

ユーザー名は、多数の`from:username`検索をまとめて書く方法として使えます。

```json
{ "twitterHandles": ["elonmusk", "nasa", "openai"], "maxItems": 100 }
```

各ユーザー名は、そのアカウントのポストを返します。このActorは、出力と課金の前に重複した行を除きます。ユーザー名には`@`を付けても付けなくてもかまいません。ユーザー名とプロフィールのURLは、Xのポストタブと同じくリポストを残します。日付やフィルターを指定しても残ります。リポストを除くには`tweetTypes.excludeRetweets`を設定してください。

### ポストを検索する

Search termsフィールドに1つ以上のクエリを入れます。

```json
{
  "searchTerms": ["from:elonmusk AI", "#bitcoin lang:en"],
  "maxItems": 1000,
  "queryType": "Latest"
}
```

`mode`が`tweet`か`tweets`で、ポストIDがない場合、クエリは検索として実行されます。そのため、有効な`searchTerms`が空のID取得の結果を返すことはありません。

`from:elonmusk since:2026-01-01 until:2026-01-02`のように、期間を指定してアカウントの過去のポストを取得することもできます。各検索語には、それぞれの`searchTerm`の帰属情報が残ります。`maxItems`は、すべての検索語の結果の合計に上限をかけます。このActorは、返されたすべてのポストを`since:`、`until:`、Unix時間の範囲と照合します。フィルター付きの検索は、一致する結果が見つかるか、Xに結果がなくなるまで読み取りを続けます。

`from:`の検索語はXの検索と同じ結果を返すので、リポストは含まれません。リポストを残すには`include:nativeretweets`を、リポストだけを取得するには`filter:nativeretweets`を追加してください。

### IDでポストを取得する

```json
{ "tweetIds": ["1846987139428634858", "1858743654778892784"], "maxItems": 100 }
```

結果は入力順を保ち、重複を除き、指定したポストだけを含みます。このID取得は、`tweetId`、`tweetIDs`、`tweets`、`postIds`、`lookupPostIds`、`tweetUrls`、`postUrls`も受け付けます。

### エンゲージメント、スレッド、記事のモード

入力にほかのフィールドがあっても1つのモードに固定するには、`mode`を設定します。

```json
{ "mode": "replies", "replyTweetIds": ["1846987139428634858"], "maxItems": 100 }
```

ポストと検索のモードは`tweet`、`tweets`、`search`です。プロフィールのモードは`profileTweets`、`profileReplies`、`profileMedia`、`profileLikes`です。`listTweets`はリストのポストを読み取り、`article`はポスト内のXの記事を読み取ります。1件のポストに対するモードは`replies`、`quotes`、`thread`、`retweeters`、`favoriters`です。

`profileTweets`は、Xのプロフィールの「ポスト」タブと同じ内容を返します。アカウントのポスト、リポスト、自分のポストへの返信です。行は日付順に並びます。このActorは、他のアカウントへの返信を課金前に除きます。他の著者による会話の文脈も除きます。

オリジナルのポストだけが必要なら、不要な種類を除外してください。

```json
{
  "mode": "profileTweets",
  "twitterHandles": ["apify"],
  "tweetTypes": { "excludeReplies": true, "excludeRetweets": true },
  "maxItems": 100
}
```

`tweetTypes.excludeReplies`、`excludeRetweets`、`excludeQuotes`は、すべての取得元で使えます。検索では、これらを`-filter:replies`、`-filter:nativeretweets`、`-filter:quote`としてXに送ります。プロフィールやリストでは、このActorがその行を自分で除きます。除外した行はデータセットに届かないので、料金はかかりません。`maxItems`の件数にも含まれません。

`profileReplies`は、Xの「返信」タブと同じく、アカウント自身のポストと返信を返します。このActorは、他の著者による会話の文脈を除きます。返信だけが必要なら、`filter:replies`か`to:`の検索を使ってください。

検索と、ページ送りのあるポストのモードは、`time.since`、`time.until`、Unixタイムスタンプ、`lang`に対応します。対象は、プロフィールのポストタブ、返信タブ、メディアタブ、いいねタブ、リスト、返信、引用、スレッドです。対応するフラットな日付演算子も使えます。このActorは課金前に各行を確認します。日付の下限は範囲に含みます。上限は含みません。日付フィルターは、使える日付のない行を除きます。言語フィルターは、言語がないか一致しない行を除きます。フィルターで除いた行が、結果の上限を使うことはありません。

`since`と`until`に同じ日付を指定すると、範囲は空になります。丸1日分を取得するには、`until`を翌日にしてください。期間を指定したリストの実行は、古い日付にすばやく到達します。下限を過ぎると終了します。リストのかなり古い期間では、一部の返信が欠けることがあります。ポストのフィルターは、ユーザーの一覧や、ポストと記事の直接取得には適用されません。

`time.withinTime`と`within_time`も同じモードで使えます。`7d`を指定すると、実行が読み取りを始める時点から直近7日間を残します。2006年より前までさかのぼる期間では、すべてのポストを残します。

`mode: "replies"`はより厳密です。どのポストの行も、`inReplyToId`が指定したポストIDと一致します。会話の入れ子の返信は、直接の返信として数えません。Xが表示する返信が報告された数より少ない場合、このActorは見つかった行を残します。上限に達していないときは、`diagnostics`に`replies-incomplete`レコードを1件加えます。実行は、上限に達するか、Xに返信がなくなるまで部分的な状態のままです。`replyCoverage`は、返信の件数とカバレッジの詳細を報告します。1つの返信対象で25,000件を超える場合も、`maxItems`には欲しい合計数を設定してください。

記事の行には、`resultType: "article"`、`sourceTweetId`、`article`、任意の`author`が入ります。エンゲージメントのユーザー行には、`resultType: "user"`、`sourceTweetId`、`engagementMode`が入ります。

リポストしたユーザーの取得は、通常の公開エンゲージメントモードです。いいねしたユーザーの取得はベストエフォートです。Xは、条件を満たすポストや、所有者に見えるポストでしか、いいねしたユーザーを表示しないことがあります。プロフィールのいいねもベストエフォートです。多くの公開プロフィールには、読み取れるいいねタブがないためです。Xがユーザーやいいねしたポストを表示しない場合、このActorは無料の`diagnostics`レコードを書き込みます。ポストの行にはブックマーク数が入ることがあります。どのアカウントがポストをブックマークしたかは、Xが表示しません。

### フラットなCSVの行をエクスポートする

デフォルトの入れ子のJSONフィールドのままにするか、スプレッドシート向けの列を加えられます。

```json
{ "searchTerms": ["from:nasa moon"], "maxItems": 100, "outputPreset": "flat" }
```

フラット出力は、`author`と`media`をそのまま残します。そして、`authorUsername`、`authorName`、`authorFollowers`、`tweetUrl`、`twitterUrl`、`mediaUrls`、`imageUrls`、`videoUrls`などのトップレベルのフィールドを加えます。

フラットなポストの行には、すべて`media`があります。メディアのないポストでは、空のリストです。そのため、スプレッドシートでも型付きのパイプラインでも、どの行も同じキーを持ちます。

### フィールド名を選ぶ

デフォルトは従来のフィールド名です。richやrawの結果では、スタイルを選べます。

```json
{
  "searchTerms": ["from:nasa moon"],
  "maxItems": 100,
  "outputVariant": "rich",
  "fieldStyle": "snake_case"
}
```

トップレベルと入れ子の結果フィールドには、`camelCase`か`snake_case`を使えます。フラットなスネークケースの出力には、`author_username`や`media_urls`などのフィールドがあります。`raw`の下にある安全な元データのスナップショットは、元のキーを保ちます。データが失われないよう、衝突する元の名前も変えません。

従来の診断情報は`resultType`、`actorVersion`、`replyCoverage`を使います。richとrawの出力は、どの入れ子の階層にも`fieldStyle`を適用します。たとえばスネークケースでは、`result_type`、`actor_version`、`reply_coverage`を使います。Overviewのデータセットビューは、どちらのスタイルでも使えます。実行の`fieldStyle`に合うコンソールのビューを選んでください。`camelCase fields`は`camelCase`向けです。`snake_case fields`は`snake_case`向けです。ビューが選ぶのは列だけです。保存済みやエクスポート済みのデータの名前を変えることはありません。

### 高度なフィルターを組み合わせる

ユーザー、日付、位置情報、メディア、エンゲージメントのフィルターを組み合わせられます。

```json
{
  "twitterContent": "AI",
  "from": "elonmusk",
  "since": "2026-01-01_00:00:00_UTC",
  "until": "2026-03-01_00:00:00_UTC",
  "lang": "en",
  "filter:media": true,
  "min_faves": 1000,
  "maxItems": 500
}
```

`queryType: "Latest + Top"`を設定すると、Xの2つの検索モードを1回の実行で使えます。このActorは課金前に重複を除き、どちらかのモードの結果で上限まで埋めます。`Top`は関連性の順に並べ、一致するすべてのポストは返しません。`includeSearchTerms: true`を設定すると、一致した各クエリが`searchTerm`フィールドとして付きます。

`lang`を設定すると、このActorは返された各ポストの言語を確認します。一致しないポストは飛ばし、一致するポストを探して読み取りを続けます。

## タスクの例

50個の公開タスクから選べます。どのタスクにも、上限を決めた入力と、対応するデータセットビューがあります。どのタスクも、実際の検索や対象で始まります。実行前に編集してください。

- [AIエージェント向けに最新のXポストを取得する](https://apify.com/xquik/x-tweet-scraper/examples/search-x-posts-for-ai-agents)
- [RAG用のXデータセットを構築する](https://apify.com/xquik/x-tweet-scraper/examples/build-x-rag-dataset)
- [RAG用にX記事を抽出する](https://apify.com/xquik/x-tweet-scraper/examples/extract-x-article-for-rag)
- [X上のAI検索での露出を監視する](https://apify.com/xquik/x-tweet-scraper/examples/monitor-ai-search-visibility-on-x)
- [AI SEOと生成エンジン最適化を追跡する](https://apify.com/xquik/x-tweet-scraper/examples/track-generative-engine-optimization-talk)
- [X上でAIエージェントツールを発見する](https://apify.com/xquik/x-tweet-scraper/examples/discover-ai-agent-tools-on-x)
- [AI製品へのフィードバックを収集する](https://apify.com/xquik/x-tweet-scraper/examples/collect-ai-product-feedback)
- [X上でのブランド言及を監視する](https://apify.com/xquik/x-tweet-scraper/examples/monitor-brand-mentions-on-x)
- [TwitterデータをCSVにエクスポートする](https://apify.com/xquik/x-tweet-scraper/examples/export-twitter-data-to-csv)
- [OpenAIのポストへのリプライを収集する](https://apify.com/xquik/x-tweet-scraper/examples/collect-replies-to-an-openai-post)
- [Twitterのスレッド全体を抽出する](https://apify.com/xquik/x-tweet-scraper/examples/extract-complete-twitter-thread)
- [スペイン語のAI関連の会話を収集する](https://apify.com/xquik/x-tweet-scraper/examples/collect-spanish-ai-conversations)

## ポストのスクレイピングにかかる費用は？

XquikのX Tweet Scraperは、すべてのApifyプランで配信された行1件につき$0.00015です。Apifyのプラットフォーム利用料は別途かかります。Xquikの課金は、配信したデータ行1件につき1回です。`diagnostics`出力の診断情報は無料です。

- Xquikのサブスクリプションは不要です。
- 開始料金やクエリ料金は別途かかりません。URLや1件のポストの取得にも料金はかかりません。
- フィルターと重複排除は課金前に行います。除いた行や重複した行に支払うことはありません。
- 入力なし、無効な入力、出力0件の実行は、無料の`diagnostics`出力に、次の行動を示すレコードを1件書き込みます。

問題が起きた実行と大規模な実行は、`run-report`レコードも書き込みます。その`estimatedChargeUsd`には、Apifyの現在のイベント課金の価格を使います。問題が起きた実行は、入力なしや無効な入力での終了も含めて、必ず`run-report`を書き込みます。問題なく終わった小規模な実行は書き込まず、Apifyの利用料を節約します。毎回書き込むには`alwaysSaveRunRecords`をオンにしてください。実行レポートは、データ行を`realRows`に、診断情報を`diagnosticRows`に分けて記録します。

実行の支出に上限をかける方法は、[実行オプション](#実行オプション)を参照してください。

## ベンチマーク

XquikのX Tweet Scraperは、コストと速度で他の11のポスト用Actorを上回りました。1行あたりのフィールド数の中央値は63で、他のActorの中央値の2倍でした。

| Actor                                                             | 有効なポスト | 有効なポスト1件あたりのコスト | 1秒あたりの有効なポスト | 1行あたりのフィールド数 | 公開された実行                                                      |
| ----------------------------------------------------------------- | -----------: | ----------------------------: | ----------------------: | ----------------------: | ------------------------------------------------------------------- |
| xquik/x-tweet-scraper                                             |          882 |                     $0.000177 |                    27.0 |                      63 | [実行を見る](https://console.apify.com/view/runs/JJfsKql7EdiXsSX3T) |
| xquik/x-tweet-scraper                                             |          868 |                     $0.000179 |                    27.4 |                      63 | [実行を見る](https://console.apify.com/view/runs/58ye04whvCP63nmmW) |
| xquik/x-tweet-scraper                                             |          869 |                     $0.000179 |                    25.8 |                      63 | [実行を見る](https://console.apify.com/view/runs/ytoTpYCca2MShp4gh) |
| xquik/x-tweet-scraper                                             |          879 |                     $0.000177 |                    29.1 |                      63 | [実行を見る](https://console.apify.com/view/runs/CrJLYvAIG0Ji666rr) |
| scrapesmith/twitter-x-scraper-tweets-profiles-replies             |          813 |                     $0.000185 |                    10.5 |                      36 | [実行を見る](https://console.apify.com/view/runs/mIT1zf0xccCsYWO1E) |
| scrapesmith/twitter-x-scraper-tweets-profiles-replies             |          805 |                     $0.000187 |                    10.6 |                      36 | [実行を見る](https://console.apify.com/view/runs/p1MUeElsamZUepTpm) |
| scrapesmith/twitter-x-scraper-tweets-profiles-replies             |          805 |                     $0.000187 |                    10.7 |                      36 | [実行を見る](https://console.apify.com/view/runs/pQlQa0GMm7BWTUUOB) |
| kaitoeasyapi/twitter-x-data-tweet-scraper-pay-per-result-cheapest |          880 |                     $0.000250 |                     9.1 |                      46 | [実行を見る](https://console.apify.com/view/runs/3Fn8yvqncsWdcw1I2) |
| scraper_one/x-posts-search                                        |          804 |                     $0.000314 |                     3.3 |                      14 | [実行を見る](https://console.apify.com/view/runs/M9TgeCLLKZlNTOrj0) |
| danek/twitter-scraper                                             |          807 |                     $0.000347 |                     5.0 |                      27 | [実行を見る](https://console.apify.com/view/runs/kyeJqCeaARxQPGM5W) |
| tweetapi/twitter-x-search-scraper                                 |          337 |                     $0.000374 |                     2.6 |                      28 | [実行を見る](https://console.apify.com/view/runs/mxkP8EDAUVtCZdobb) |
| api-ninja/x-twitter-advanced-search                               |          837 |                     $0.000430 |                     7.4 |                      28 | [実行を見る](https://console.apify.com/view/runs/XAWKinvZyPNjCwrib) |
| apidojo/twitter-scraper-lite                                      |          251 |                     $0.000494 |                    12.9 |                      54 | [実行を見る](https://console.apify.com/view/runs/1t4XwmbQNTtwMJ0Ta) |
| apidojo/tweet-scraper                                             |          481 |                     $0.000832 |                     7.8 |                      55 | [実行を見る](https://console.apify.com/view/runs/PydoBgS1YRblg29bB) |
| xtdata/twitter-x-scraper                                          |        1,378 |                     $0.001168 |                    11.9 |                      67 | [実行を見る](https://console.apify.com/view/runs/U91dRXEvKvqu41aop) |
| seemuapps/x-tweet-scraper                                         |          805 |                     $0.001242 |                     6.9 |                      24 | [実行を見る](https://console.apify.com/view/runs/FstursEw43TbcipYU) |
| maximedupre/twitter-scraper                                       |           46 |                     $0.002846 |                     0.3 |                      31 | [実行を見る](https://console.apify.com/view/runs/Hs8irhEcAfWcQNc4w) |

各Actorは2026-09-27に同じ検索と同じフィルタで実行しました。すべての実行でBronzeティアを使いました。有効なポストとは、10件以上のいいねがある、ユニークな英語のオリジナルポストです。コストは、有効なポスト1件あたりの顧客の総支払額です。当社のコストには、お客様が支払うApify使用料を含みます。1行あたりのフィールド数は、空でないフィールド数の中央値で、ネストされたフィールドも含みます。リストは1フィールドとして数えます。実行を開くと、入力、ログ、データセットを確認できます。

## 空の実行、部分的な実行、停止した実行

XquikのX Tweet Scraperは、空の実行、部分的な実行、停止した実行の理由を無料で説明します。実行ステータスは、実行が止まった理由を示します。課金された結果と読み取った対象の数も数えます。

### 空の結果

次の実行に費用をかける前に、結果が空だった理由を確認してください。レポートと最終的な診断情報の`filtering`オブジェクトは、フィルターで除いた行を数えます。`serverFilteredRows`、`actorFilteredRows`、`pagesWithUnknownServerFiltering`を確認してください。フィルターで除いた行に結果料金はかかりません。

Xに結果がなくなると、上限に届かずに実行が終わることがあります。その場合、`outcome: "complete"`と`completionReason: "source_exhausted"`を報告します。中断された実行は、部分的な結果と再試行の案内を残します。

### 部分的な実行

`failedSubtargets`は、エラーの後に止まったクエリとプロフィールの対象を数えます。配信済みの行はデータセットに残り、課金の対象になります。エラーは、対象が存在しないことを意味しません。こうした実行は`completionReason: "partial_failure"`を使います。

中断された実行は、無料の`partial`診断も書き込みます。配信済みの結果はそのまま残ります。この診断は、`availableResults`、`failedTargets`、`retryable`、`nextAction`を報告します。Actorの正常終了が示すのは配信の完了です。抽出が最後まで終わったことは示しません。

### 停止の原因

ステータスのテキストは、停止の原因をすべて示します。存在しないアカウントと、進まなくなった検索がある実行では、両方を示します。`stopCauses`は各原因を挙げ、それぞれに`message`、`retryable`、`nextAction`を付けます。原因は`target_not_found`、`target_protected`、`search_unavailable`、`likes_hidden`、`target_failed`、`pagination_safety_limit`、`reply_reach`、`deadline_reached`です。いずれかの原因が再試行可能なら、実行も`retryable`になります。

### 存在しない対象と表示できない対象

存在しない対象や非公開の対象は、失敗ではありません。Xにそこで読み取れるものがないだけです。実行は、ほかのすべての対象を最後まで読み取ります。そして、`outcome: "complete"`を報告します。完了の理由は、`source_exhausted`など、読み取った対象から決まります。`failedSubtargets`には、それらの対象を含めません。ステータスのテキストと無料の`complete`診断が、それらの対象を数えます。ほかに行がない実行は、代わりに`zero-output`診断を書き込みます。

Xが実行できない検索は、失敗として数えます。このような検索に対して、X.comは「Something went wrong」と表示します。実行は、その検索を再試行せずにすぐ止めます。Xが非表示にしているいいねも失敗として数え、すぐに止めます。Xは、ポストにいいねしたユーザーをそのポストの著者にだけ表示します。アカウントがいいねしたポストは、そのアカウント本人にだけ表示します。

すべての失敗が表示できない対象に関するものなら、診断情報は`retryable: false`を設定します。対象のURLやユーザー名を確認し、表示できる公開アカウントを選んでください。Xが実行できない検索は、範囲を絞るかフィルターを変えてください。非表示のいいねの代わりに、リポストしたユーザー、返信、ポストを読み取ってください。その他の失敗では、終わっていない対象の再試行の案内が残ります。

診断情報は、それらの対象を`unavailableTargets`に挙げます。各エントリには、入力したままの`target`、`reason`、`nextAction`が入ります。理由は`not_found`、`protected`、`search_unavailable`、`likes_hidden`のいずれかです。検索のエントリには、削除すべき演算子などを示す`fix`が入ることもあります。一覧には最大100件のエントリが入ります。それらの対象は入力から外してください。

### 安全上の上限と時間の上限

`completionReason: "pagination_safety_limit"`は、読み取りの失敗ではありません。実行は有効な行を残しました。その後、新しい結果を返さなくなった対象を終了しました。実行は、抽出が未完了であることを報告します。`failedSubtargets`は`0`のままです。支払うのは配信された行の分だけです。

デフォルトのApifyタイムアウトは`0`なので、実行に時間制限はありません。このActorは、上限に達するか、対象のデータがなくなるまで続けます。有限のApifyタイムアウトを設定することもできます。その場合、`completionReason: "deadline_reached"`は、その上限が近いことを示します。このActorは上限の前に行とレポートを保存し、正常に終了します。配信された行の課金は1回だけです。

## 入力

Inputタブにすべてのオプションがあります。`startUrls`、`twitterHandles`、`listIds`、`tweetIds`、`searchTerms`、`twitterContent`のうち、少なくとも1つを指定してください。ドキュメントに記載された別名でもかまいません。ほかのフィールドはすべて任意です。

例:

- ポストのURLをStart URLsに貼り付けます。
- プロフィールのURLを貼り付けるか、ユーザー名をX handlesに追加します。
- アカウントの過去のポストを取得するには、検索語として`from:user since:YYYY-MM-DD until:YYYY-MM-DD`を使います。
- リストのURLをStart URLsに貼り付けます。
- 高度な検索には、`twitterContent`と、`from:`、`since:`、`min_faves:`、`filter:media`などのフィルターを組み合わせます。

### 対応する主な検索演算子

| 演算子                 | 例                     | 用途                             |
| ---------------------- | ---------------------- | -------------------------------- |
| `from:`                | `from:elonmusk`        | このユーザーのポストだけ         |
| `to:`                  | `to:OpenAI`            | このユーザーへの返信だけ         |
| `@`                    | `@nasa`                | このユーザーをメンションしたポスト |
| `list:`                | `list:123456`          | リストのメンバーのポスト         |
| `lang:`                | `lang:en`              | 言語で絞り込み                   |
| `since:` / `until:`    | `since:2026-01-01`     | 日付の範囲                       |
| `min_faves:`           | `min_faves:100`        | エンゲージメントのしきい値       |
| `min_retweets:`        | `min_retweets:50`      | リポスト数のしきい値             |
| `filter:media`         | `filter:media`         | Xのメディア検索演算子            |
| `filter:videos`        | `filter:videos`        | Xの動画検索演算子                |
| `filter:images`        | `filter:images`        | Xの画像検索演算子                |
| `filter:links`         | `filter:links`         | リンク付きのポストだけ           |
| `filter:replies`       | `filter:replies`       | 返信のポストだけ                 |
| `filter:quote`         | `filter:quote`         | 引用ポストだけ                   |
| `filter:blue_verified` | `filter:blue_verified` | Premiumユーザーだけ              |

Xは、`filter:vine`、`filter:consumer_video`、`filter:pro_video`、`filter:news`、`retweets_of:`での検索に対応しなくなりました。これらを含む検索はすぐに終了します。無料の診断情報が直し方を示します。各クエリは512文字以内にしてください。Xはそれより長いクエリを検索しません。

日付の範囲は、下限を含み、上限を含みません。このActorは、各ポストを追加または課金する前に、両方の境界を確認します。

演算子の全一覧は、[Twitter Advanced Search](https://github.com/igorbrigadir/twitter-advanced-search)を参照してください。

### 他のポスト用Actorから移行する

今使っている入力をそのまま貼り付けてください。XquikのX Tweet Scraperは、他のポスト用Actorのフィールド名を読み取ります。そして、自身のフィールドに対応付けます。ドキュメント上のデフォルトは、引き続き正規の名前です。別名のせいでフィールドが失われたり、料金が変わったりすることはありません。入力フォームには正規のフィールドだけが並ぶので、短いままです。別名は、JSON、API、SDK、自動化、保存済みタスクの入力で使えます。

| すでに使っているフィールド                                                                                                                                             | Xquikでの読み取り先                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `startUrls`, `urls`, `tweetUrls`, `postUrls`, `profileUrls`, `accountUrls`                                                                                             | `startUrls`                                                              |
| 1つの文字列としての`profileUrl`                                                                                                                                        | `startUrls`                                                              |
| `tweetIds`、`tweetIDs`、`tweets`、`postIds`、`lookupPostIds`、`tweet_ids`、または1つの文字列としての`tweetId`                                                          | `tweetIds`                                                               |
| `twitterHandles`, `usernames`, `user_names`, `userNameList`, `handles`, `screenNames`, `profileTweets`                                                                 | `twitterHandles`                                                         |
| 1つの文字列としての`username`、`handle`、`screenName`                                                                                                                  | `twitterHandles`                                                         |
| `searchTerms`、`searchQueries`、`queries`、`search`（リスト、または1行に1つの検索）                                                                                    | `searchTerms`                                                            |
| `twitterContent`, `query`, `searchQuery`                                                                                                                               | `twitterContent`                                                         |
| `maxItems`, `maxResults`, `max_results`, `resultsLimit`, `count`, `resultsCount`, `numberOfTweets`, `maxPosts`, `max_posts`, `max_items`, `maxTweets`, `tweetsDesired` | `maxItems`                                                               |
| `sort`                                                                                                                                                                 | `queryType`                                                              |
| `tweetLanguage`, `language`                                                                                                                                            | `lang`                                                                   |
| `author`, `inReplyTo`, `mentioning`                                                                                                                                    | `from`, `to`, `@`                                                        |
| `start`, `startDate`, `end`, `endDate`                                                                                                                                 | `since`, `until`                                                         |
| `minimumRetweets`, `minimumFavorites`, `minimumReplies`                                                                                                                | `min_retweets`, `min_faves`, `min_replies`                               |
| `onlyImage`, `onlyVideo`, `onlyQuote`, `onlyTwitterBlue`                                                                                                               | `filter:images`, `filter:videos`, `filter:quote`, `filter:blue_verified` |
| `geotaggedNear`, `withinRadius`                                                                                                                                        | `near`, `within`                                                         |
| Google Search Scraperの`quickDateRange`（`d7`、`w2`、`m1`、`y`など）                                                                                                   | `since_time`（実行開始時点からさかのぼって計算）                         |

貼り付けた入力は次のように動きます。

- すべての取得元を実行します。URL、ユーザー名、検索語、リストID、ポストIDを含む入力は、そのすべてを実行します。`maxItems`は実行全体に適用されます。
- `searchTerms`の横にある検索クエリは、検索語の1つとして追加で実行されます。
- `x.com/@name`の形式のプロフィールURLは、`x.com/name`と同じように読み取ります。
- 別名と正規のフィールドの両方を設定した場合は、正規の値が優先されます。実行ログには、採用されなかった別名が記録されます。
- 実行ログには、`customMapFunction`など、このActorが無視するすべてのフィールドが記録されます。このActorが黙ってフィールドを捨てることはありません。
- 行数の上限は1以上の整数にしてください。`maxResults: 0`は、何かを読み取ったり課金したりする前に実行を止めます。
- `quickDateRange: "m1"`は、どのモードでも過去1か月を読み取ります。月と年はカレンダーどおりにさかのぼります。h、d、w、m、yのどれも含まない値では、読み取りや課金の前に実行が止まります。
- このActorにはページという単位がありません。`maxPages`は`maxItems`に置き換えてください。
- このActorにはユーザーIDのフィールドがありません。`userId`や`user_ids`の代わりに、ユーザー名かプロフィールのURLを送ってください。
- `from`、`min_faves`、`since_time`、`filter:images`などの検索演算子のフィールドは、すでにXと同じ名前です。対応付けは不要です。

### ConsoleとAPIの入力

コンソールのフォームには次のコントロールがあります。

- Mode、Output Variant、Field Style、Output Preset、Sort Byは、入力値を検証するドロップダウンです。
- Start URLsとProfile URLsは、文字列か`{ "url": "..." }`オブジェクトを受け付けます。それぞれのJSONエディターは、両方のAPI形式を保ちます。
- 構造化フィルターはグループにまとめたコントロールなので、入れ子のJSONは不要です。
- フォームは、フィルターのグループですでに扱えるフラットな演算子を表示しません。JSON、API、SDK、自動化、保存済みタスクの入力では、引き続き受け付けます。
- Max ItemsとMax Items Per Targetには、1以上の整数を指定できます。エンゲージメントのしきい値には、0以上の整数を指定できます。

新しい連携では正規のフィールドを使ってください。上の移行表にある別名は引き続き使えます。`includeRaw`は`outputVariant: "raw"`の別名です。`compact`や`full`などの古い`outputVariant`の値は、Legacy出力として引き続き使えます。フォームでは、それらをLegacyの別名として表示します。

## 出力

ポストの各行は、Xが提供するメタデータを持つJSONオブジェクトです。データセットと実行レポートのスキーマは、各フィールドにタイトル、説明、例を付けます。AIエージェントは、フィールドの意味を推測せずに読み取れます。

サンプル値は説明用です。実際の実行では、Xのライブデータが返ります。

```json
{
  "id": "1846987139428634858",
  "text": "The future of AI is...",
  "createdAt": "Sun Mar 15 12:00:00 +0000 2026",
  "retweetCount": 500,
  "replyCount": 120,
  "likeCount": 5000,
  "quoteCount": 80,
  "viewCount": 1200000,
  "bookmarkCount": 300,
  "lang": "en",
  "url": "https://x.com/elonmusk/status/1846987139428634858",
  "author": {
    "id": "44196397",
    "username": "elonmusk",
    "name": "Elon Musk",
    "followers": 180000000,
    "verified": true
  },
  "media": [{ "type": "photo", "url": "https://..." }],
  "entities": {
    "hashtags": [{ "text": "AI" }],
    "urls": [],
    "user_mentions": []
  },
  "isNoteTweet": false,
  "isQuoteStatus": false,
  "isReply": false,
  "conversationId": "1846987139428634858"
}
```

データセットはJSON、CSV、Excel、HTMLでエクスポートできます。

## 実行オプション

- 実行のコストに上限をかけるには、Apifyの最大合計課金額を設定します。その予算で取得できるだけ多くの行を得るには、`maxItems`を空のままにします。ポストの数を減らしたいときは、`maxItems`を設定します。
- Apify APIでは`maxTotalChargeUsd`を、コンソールではMax cost per runを設定します。Apifyはその上限を`ACTOR_MAX_TOTAL_CHARGE_USD`としてこのActorに渡します。このActorは、それを課金できる最大の行数に変換します。
- 多数のポストをまとめて取得するには、`tweetIds`を渡します。1つのアカウントのポストを読むには、プロフィールのURLを貼り付けます。
- クエリが多い場合は、`includeSearchTerms: true`を設定して、各結果に検索語のタグを付けます。
- `queryType: "Latest + Top"`を設定すると、Xの2つの検索モードを1回の実行で使えます。重複排除と結果の上限は、両方にまとめて適用されます。
- 1秒ごとのチェックと署名付きWebhookには、Xquikのアカウントモニターかキーワードモニターを使います。有効なモニターは1秒ごとにチェックします。

### 常に最新のビルドを使う

すべての実行で`latest`を選ぶと、公開済みのすべての修正が適用されます。

ビルドを選ばない場合、ApifyはXquikのX Tweet Scraperをデフォルトの`latest`で実行します。コンソールでの実行と標準のAPIの例は、そのデフォルトを引き継ぎます。

保存済みのタスクは、Actorのデフォルトを上書きできます。スケジュールとタスクの連携は、その選択を再利用します。上書きはすべて`latest`にしておいてください。

Apifyは、特定のビルド番号を`latest`に転送しません。固定した番号は`latest`に置き換えてください。特定のビルドは、一時的なロールバックや実行の再現にだけ使ってください。

Apifyの[ビルドタグ](https://docs.apify.com/platform/actors/development/builds-and-runs/builds)、[実行オプション](https://docs.apify.com/platform/actors/running/runs-and-builds)、[タスクのドキュメント](https://docs.apify.com/platform/actors/running/tasks)を参照してください。

## 関連するXquik Actor

すべてのXquik Actorは、同じ抽出エンジン、フィルター優先の課金、診断機能を共有しています。必要なデータに合うものを選んでください。

- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): ユーザー名、ID、URLから、プロフィールとそのポスト、返信、メディア、フォロワーをスクレイピングします。検索ではなくアカウントから始めるときに使います。1行あたり$0.00015から。
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

## スクレイピング以外も必要ですか？

Xquikは、47個のダッシュボードツール、129個のREST操作、署名付きWebhook、MCPサーバーも提供しています。

- [APIドキュメント](https://docs.xquik.com/introduction): REST APIのガイド
- [Search Tweets API](https://docs.xquik.com/api-reference/x/search-tweets): RESTでポストを検索
- [Batch Tweets API](https://docs.xquik.com/api-reference/x/batch-tweets): IDで最大100件のポストを取得
- [User Tweets API](https://docs.xquik.com/api-reference/x/user-tweets): ユーザーのタイムラインを取得
- [MCPサーバー](https://docs.xquik.com/mcp/overview): 対応するツールを確認
- [Webhooks](https://docs.xquik.com/webhooks/overview): 署名付きのイベント配信
- [GitHub](https://github.com/Xquik-dev/x-twitter-scraper): ソースコードとissueトラッカー

## よくある質問

### X APIキーは必要ですか？

いいえ。X APIキー、ログイン、認証情報は不要です。

### 実行を止める上限は何ですか？

指定した件数の上限とApifyの支出上限で、実行は止まります。Apifyのアカウントとプラットフォームの制限も適用されます。

### どのくらい速いですか？

XquikのX Tweet Scraperは、[ベンチマーク](#ベンチマーク)で1秒あたり25.8件から29.1件の有効なポストを配信しました。実行時間は、入力、結果の件数、Xの可用性によって変わります。

### Latest検索で、Xの最新タブにないポストが返るのはなぜですか？

Xは、一致するポストの一部を最新タブに表示しません。XquikのX Tweet Scraperは、そうしたポストも返します。どのポストも、クエリに対するXの実際の検索結果です。各ポストの課金は1回だけです。

### どの検索演算子が使えますか？

Xの高度な検索は、著者、宛先、メンション、日付、エンゲージメント、メディア、位置情報に対応しています。例は[対応する主な検索演算子](#対応する主な検索演算子)を参照してください。

### Apify APIでこのActorを実行できますか？

はい。Python、JavaScript、cURLの例は[APIタブ](https://apify.com/xquik/x-tweet-scraper/api)にあります。

### 定期的なスクレイピングをスケジュールできますか？

はい。Apifyに組み込まれた[スケジュール機能](https://docs.apify.com/platform/schedules)で、XquikのX Tweet Scraperをcronで実行できます。

### カスタムソリューションを依頼できますか？

はい。ダッシュボード、API、MCPサーバー、Webhookについては、[xquik.com](https://xquik.com)にアクセスするか、[APIドキュメント](https://docs.xquik.com/introduction)をお読みください。

### Xのデータをスクレイピングしても合法ですか？

XquikのX Tweet Scraperは、Xの公開フィールドを取得します。結果には個人データが含まれることがあります。目的が合法であることを確認し、自分に適用されるプライバシー規則に従ってください。判断に迷う場合は、資格のある弁護士に相談してください。

### どこでサポートを受けられますか？

ActorページのIssuesタブか、[GitHub](https://github.com/Xquik-dev/x-twitter-scraper/issues)でissueを開いてください。実行IDを添えてsupport@xquik.comに連絡することもできます。
