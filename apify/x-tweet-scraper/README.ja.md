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

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。X Tweet Scraperは、50種類以上のフィルタでポスト、リプライ、プロフィール、リスト、検索を収集します。他のApify Actorはすべて、フィルタリングや重複排除の前に課金します。Xquikは、配信済みでユニークかつフィルタ条件に一致する結果にのみ課金します。

公開されているX(Twitter)のポストを、**すべてのApifyプランで配信結果1件につき$0.00015から**でスクレイピングできます。Apifyのプラットフォーム利用料は別途課金されます。Xへのログイン、開始料金、クエリ料金は不要です。[Xquik](https://xquik.com)が開発しています。

> Xquikは独立したサードパーティサービスです。X Corpとは提携していません。
> 「Twitter」および「X」はX Corpの商標です。

## X Tweet Scraperは何をするか

X Tweet Scraperは、ポスト、エンゲージメント指標、公開されている著者プロフィール、メディアを返します。URL、ハンドル、リストID、ポストID、そして50種類以上のフィルタを備えた検索クエリを受け付けます。

### 基本動作

- フィルタと重複排除は課金前に実行されます。
- 1つの入力で、検索、タイムライン、リスト、検索、エンゲージメントの各モードに対応します。
- ポストIDの入力には固定の件数上限はありません。Apifyの利用料上限とタイムアウトの設定が適用されます。
- 自動検索と引用ページは、最大300行までリクエストします。
- 保存されたカーソルは元のページ上限を保持し、期限切れになると再開します。
- 該当する場合、プロフィールモードはタイムラインと著者検索を組み合わせます。
- ページのログには、対象を重複させることなく`fetchDurationMs`、`processingDurationMs`、`pushDurationMs`、`statusDurationMs`、`fullPageDurationMs`が含まれます。
- チェックポイントは、再起動後も受理済みの行、タイミング、失敗件数を保持します。

### 常に最新のビルドを使用する

すべての実行で`latest`を選択すると、公開済みのすべての修正が適用されます。

ビルドが指定されない場合、ApifyはこのActorの`latest`のデフォルトを使用します。コンソールでの実行と標準的なAPIの例は、そのデフォルトを引き継ぎます。

保存したタスクではActorのデフォルトを上書きできます。スケジュールとタスク連携はその選択を再利用します。上書きする場合は常に`latest`に設定してください。

Apifyは特定のビルド番号を`latest`にリダイレクトしません。固定したビルド番号は`latest`に置き換えてください。特定のビルドを使うのは、一時的なロールバックや再現性が必要な場合に限定してください。

Apifyの
[ビルドタグ](https://docs.apify.com/platform/actors/development/builds-and-runs/builds)、
[実行オプション](https://docs.apify.com/platform/actors/running/runs-and-builds)、
[タスクのドキュメント](https://docs.apify.com/platform/actors/running/tasks)を参照してください。

## タスクの例

50個の公開タスクから選択できます。それぞれに範囲が定められた入力と、対応するデータセットビューがあります。どのタスクも実際の検索や対象で始まります。実行前に編集してください。

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

### X Tweet Scraperが抽出できるデータ

| フィールド              | 説明                                                       |
| ---------------------- | ---------------------------------------------------------- |
| `id`                   | ポストID                                                    |
| `text`                 | ポストの全文（最大25,000文字のNote Tweetsを含む）             |
| `createdAt`            | Xネイティブのタイムスタンプ文字列                             |
| `likeCount`            | いいねの数                                                   |
| `retweetCount`         | リポストの数                                                 |
| `replyCount`           | リプライの数                                                 |
| `quoteCount`           | 引用ポストの数                                               |
| `viewCount`            | 閲覧数                                                       |
| `bookmarkCount`        | ブックマーク数                                               |
| `lang`                 | ポストの言語                                                 |
| `url`                  | ポストへの直接リンク                                          |
| `tweetUrl`             | フラット出力用のポストURLのエイリアス                          |
| `twitterUrl`           | フラット出力用のtwitter.com形式のURL                          |
| `author`               | 取得可能な著者フィールド（ユーザー名、自己紹介、ウェブサイト、各種カウント） |
| `authorUsername`       | フラット出力用の著者ハンドル                                  |
| `authorFollowers`      | フラット出力用の著者フォロワー数                              |
| `authorUrl`            | フラット出力用の著者ウェブサイト（取得可能な場合）              |
| `authorDescription`    | フラット出力用の著者の自己紹介文                              |
| `authorCoverPicture`   | フラット出力用の著者バナー画像URL                             |
| `authorPinnedTweetIds` | フラット出力用の著者の固定ポストID                            |
| `media`                | 添付された画像、動画、GIF                                     |
| `mediaUrls`            | フラット出力用のメディアURL                                   |
| `imageUrls`            | フラット出力用の画像URL                                       |
| `videoUrls`            | フラット出力用の動画URL                                       |
| `entities`             | ハッシュタグ、URL、メンション、動画タイムスタンプ               |
| `displayTextRange`     | X表示テキストの範囲（取得可能な場合）                          |
| `contentDisclosure`    | 開示に関するメタデータ（取得可能な場合）                       |
| `conversationControl`  | リプライポリシーと公開会話の所有者                             |
| `reactionContext`      | リアクションが参照する公開ポストとユーザー                     |
| `limitedActions`       | 公開されているインタラクション制限とプロンプト                 |
| `isLimitedReply`       | リプライが制限されているかどうか                              |
| `isNoteTweet`          | Note Tweet（長文ポスト）かどうか                              |
| `isQuoteStatus`        | このポストが他のポストを引用しているかどうか                   |
| `isReply`              | このポストがリプライかどうか                                  |
| `quoted_tweet`         | 引用元ポストのオブジェクト（引用ポストの場合）                  |
| `conversationId`       | スレッド/会話ID                                              |
| `resultType`           | リッチな行、エンゲージメント行、診断情報の行の種類              |
| `sourceTweetId`        | 記事モードおよびエンゲージメントモードの元ポストID              |
| `article`              | `mode: "article"`の構造化された記事データ                     |

任意のポストメタデータには、`card`、`communityId`、`communityNote`、`edit`、`noteTweet`、`postCta`が含まれる場合があります。`isTranslatable`、`place`、`possiblySensitive`、`viewState`はその他の公開情報を保持します。`previousCounts`は編集前のエンゲージメントを保持します。`tombstone`は通知を保持します。`unmentionedUserIds`は会話から退出したユーザーを一覧表示します。正確なフィールドについてはOpenAPIを参照してください。

ネストされた著者情報は、公開プロフィールの仕様に従います。これには、アイデンティティ、各種カウント、認証状態、利用可能性、専門的なデータ、プロフィールの自己紹介が含まれます。

ポストの行には、`type`、`source`、`inReplyToId`、`inReplyToUserId`、`inReplyToUsername`、`retweeted_tweet`も保持されます。引用ポストとリポストは、同じ対応フィールドを再帰的に安全に保持します。

メディアには、利用可能性、ジオメトリ、タグ、動画のバリアント、`watchNowUrl`、`visitSiteUrl`のアクションが含まれます。

閲覧者に紐づく状態は、あなたのデータセットではなくXquikの取得用アカウントに属します。フォロー、ブロック、ミュート、ブックマーク、いいね、リポスト、編集権限などの閲覧者フラグは、生の出力からも常に除去されます。

## ポストのスクレイピングにかかる費用は？

すべてのApifyプランで、配信された行1件につき`$0.00015`です。Apifyのプラットフォーム利用料は別途課金されます。Xquikは配信されたデータ行1件につき1回課金します。`diagnostics`の出力にある診断情報は無料です。

Xquikのサブスクリプションは適用されません。個別の開始料金やクエリ料金もかかりません。各実行では、Actorに公開されているApifyの従量課金の価格から算出した`estimatedChargeUsd`を含む`run-report`レコードも書き込まれます。入力なしや無効な入力での終了を含め、すべての結果について`run-report`が書き込まれます。実行レポートでは、データ行を`realRows`に、診断情報を`diagnosticRows`に分けて記録します。

別の実行に費用をかける前に、空の結果になった理由を理解してください。`filtering`オブジェクトは、レポートと最終的な診断情報の中で`serverFilteredRows`と`actorFilteredRows`を分けて記録します。これらは、繰り返し出現する元の行を含め、処理済みページ全体で拒否された行を数えます。`pagesWithUnknownServerFiltering`は、有効なサーバー側カウントがないページを特定します。欠落したカウントはギャップのままです。フィルタで除外された行に結果料金が発生することはありません。

情報源の枯渇により、要求した上限を下回って抽出が完了することがあります。これらの実行は、`outcome: "complete"`と`completionReason: "source_exhausted"`をレポートします。中断された実行は、部分的な結果と再試行のガイダンスを保持します。

`failedSubtargets`は、読み取り失敗によって停止したクエリとプロフィール対象の数を数えます。ページネーションと支払いの失敗は、部分的な行と未完了のカーソルを保持します。これらは対象が存在しないことを意味するものではありません。受理された行はデータ行のままで、課金対象に含まれます。これらの実行は`completionReason: "partial_failure"`を使用します。高速なサーバー側ページネーションも同じレポートの仕様に従います。

中断された抽出でも、無料の`partial`診断が書き込まれます。取得済みの結果はそのまま保持されます。この診断は`availableResults`、`failedTargets`、`retryable`、`nextAction`をレポートします。Actorが正常終了したことは、配信が成功したことを示すだけで、抽出が完全に完了したことを意味しません。

保護されている対象、または存在しない対象は、有効な結果がある実行を含めて失敗として数えられます。すべての失敗が利用できない対象に関するものである場合、診断情報では`retryable: false`が設定されます。対象のURLやユーザー名を確認し、利用可能な公開アカウントを選んでください。その他の失敗では、未完了の対象について再試行のガイダンスが保持されます。

`completionReason: "pagination_safety_limit"`は読み取り失敗ではありません。これは、ページネーションが有効な行を保持したまま、設定された安全上限に達したことを意味します。有効な回復用カーソルが残っている限り、最新の検索は空のページを経ても続行されます。トップ検索とアカウント期間の回復は、連続して10ページが空だった場合にチェックポイントを取ることがあります。ページネーションが停滞していることをサービスが報告した場合も、検索はチェックポイントを取ります。停滞は検索を再開させることなく自動再試行を停止させます。これらの実行は不完全な抽出をレポートし、再開可能なカーソルを保持します。ページが空になり続けた後でも、最終ページに達すればページネーションは完了します。`failedSubtargets`は`0`のままです。課金対象となるのは受理されたデータセット行のみです。

デフォルトのApifyタイムアウトは`0`なので、実行に時間制限はありません。Actorは、上限に達するか、対象データを使い尽くすまで継続します。呼び出し側は、有限のApifyタイムアウトを設定することもできます。その場合、`completionReason: "deadline_reached"`は、設定した上限が近づいていることを意味します。Actorは、チェックポイント、行、レポート、正常終了のために最後の15秒を確保します。有効な行はそのまま配信され、1回だけ課金されます。未完了のページネーションは再開可能なままです。

- 開始、クエリ、URL、単一のポスト検索には別途料金はかかりません。
- Actorは、行を書き込む前、または課金する前に重複を除去します。
- 入力なし、無効な入力、出力ゼロの実行では、無料の`diagnostics`出力に1件の実用的なレコードが書き込まれます。

## X Tweet Scraperでポストデータをスクレイピングする方法

### 1. URLを直接貼り付ける

ポスト、プロフィール、検索、リストのURLを混在させて貼り付けられます。

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

ポストのURLは、最大100件までの同時バッチで検索されます。部分的に成功したレスポンスでは、未解決のIDのみを1回だけ再チェックします。バッチ出力は一意であり、要求されたIDと一致します。プロフィールのURLは、プロフィールのタイムラインと著者検索を組み合わせます。検索URLはクエリを抽出します。リストのURLは、汎用の`list:`検索ではなく専用のリストパスを使用します。`maxItems`は、貼り付けたすべてのURLをまたいだ結果の上限です。

### 2. 複数のハンドルを一括指定

多数の`from:username`検索の省略記法です。

```json
{ "twitterHandles": ["elonmusk", "nasa", "openai"], "maxItems": 100 }
```

各ハンドルは、カーソルによるページネーションと著者検索を組み合わせます。Actorは、出力と課金の前に重複行を除去します。ユーザー名には任意で`@`プレフィックスを付けられます。

### 3. ポストを検索する

**Search Terms**フィールドに1つ以上のクエリを設定します。

```json
{
  "searchTerms": ["from:elonmusk AI", "#bitcoin lang:en"],
  "maxItems": 1000,
  "queryType": "Latest"
}
```

`mode`が`tweet`または`tweets`で、ポストIDが指定されていない場合、クエリの入力は検索にルーティングされます。これにより、有効な`searchTerms`が空の検索結果を返すことを防ぎます。

`from:elonmusk since:2026-01-01 until:2026-01-02`のような、日付範囲を指定した単純なアカウントの過去データ取得は、範囲が定められたアカウントルートを使用します。直近の期間はプロフィールのタイムラインと著者検索を組み合わせます。過去の期間は正確な検索を使用します。互換性のある隣接した期間は1回の取得を共有し、元の`searchTerm`の帰属情報を保持します。`maxItems`は、すべての検索語をまたいだ結果の上限です。すべての`since:`/`until:`とUnixタイムのウィンドウは、返された各ポストを検証します。フィルタされたアカウントの期間は、出力上限を適用する前に元のページを最後まで読み込みます。フィルタされたページは、一致するポストが見つかるか、ページネーションが終わるまで続きます。独立した検索語は同時並行で実行されます。各検索語は、深さと帰属情報を一貫させるために、順序付けられたカーソルページネーションを維持します。アカウントの期間は、互換性がある場合にのみ1回の取得を共有します。

### 4. IDでポストを検索する

```json
{ "tweetIds": ["1846987139428634858", "1858743654778892784"], "maxItems": 100 }
```

Actorは1リクエストあたり100件のIDを処理します。バッチは同時並行で実行され、完了したグループごとに1回だけ書き込まれます。部分的なレスポンスでは、未解決のIDのみを再チェックします。結果は入力の順序を保持し、重複を除去し、要求されていないポストを除外します。

同じ検索に使える別名には、`tweetId`、`tweetIDs`、`tweets`、`postIds`、`lookupPostIds`、`tweetUrls`、`postUrls`があります。

### 5. 明示的なエンゲージモード、スレッドモード、記事モード

他の入力フィールドに関係なく1つのルートを使いたい場合は、`mode`を使用します。

```json
{ "mode": "replies", "replyTweetIds": ["1846987139428634858"], "maxItems": 100 }
```

サポートされている明示的なモード: `tweet`、`tweets`、`search`、`profileTweets`、`profileReplies`、`profileMedia`、`profileLikes`、`listTweets`、`article`、`replies`、`quotes`、`thread`、`retweeters`、`favoriters`。

`profileTweets`は、プロフィールのPostsタブに従います。対象の著者本人が作成した、リプライではないポストを返します。他の著者のリプライ行や会話コンテキストは、課金前に除外されます。

`profileReplies`は、XのWith Repliesタブに従います。対象の著者本人が作成したプロフィールのポストとリプライを返します。他の著者による会話コンテキストは除外されます。リプライのみが必要な場合は、`filter:replies`や`to:`検索を使用してください。

検索とページネーションが必要なポストのモードは、`time.since`、`time.until`、Unixタイムスタンプ、`lang`をサポートします。これには、プロフィールのPosts、With Replies、Media、Likes、Lists、リプライ、引用ポスト、スレッドが含まれます。対応するフラットな日付演算子も機能します。Actorは、課金前に各行を検証します。日付の下限は含み、上限は含みません。日付フィルタは、利用可能な日付がない行を除外します。言語フィルタは、言語が欠落しているか一致しない行を除外します。フィルタされた行は、要求した結果上限を消費しません。順序が保証されていない結果では、一致する結果より古いポストが先に来る場合でもページネーションが続きます。ポストのフィルタは、ユーザーリストや直接のポスト/記事検索には適用されません。

`mode: "replies"`はより厳格です。直接のタイムライン、サポートされているランキングモード、すべての前方カーソルモジュール、ラベル付けされた非表示コンテンツの分岐、報告されたリプライ数に応じた時間区分、検索を組み合わせます。すべてのポスト行には、要求されたポストIDと一致する`inReplyToId`があります。ネストされた会話内のリプライは、直接のリプライとしてカウントされません。Xが報告よりも少ないリプライしか公開していない場合、Actorは安全な部分的結果を保持します。余力がある場合は、`diagnostics`に1件の`replies-incomplete`レコードを追加します。カバレッジのしきい値に達したことは、抽出が完了したことを意味しません。実行は、指定した上限に達するか、確認済みの情報源枯渇に至るまで部分的なままです。`replyCoverage`は、件数、戦略、ページネーションの異常、欠落フィールド、推奨されるフォールバックをレポートします。Actorは、出力ゼロを返す前に、一時的な再試行の遅延を尊重します。1つのリプライ対象について25,000件を超える合計を含め、要求する合計に`maxItems`を設定してください。

記事の行には、`resultType: "article"`、`sourceTweetId`、`article`、任意で`author`が含まれます。エンゲージメントのユーザー行には、`resultType: "user"`、`sourceTweetId`、`engagementMode`が含まれます。

リポストしたユーザーの一覧取得は通常の公開エンゲージメントモードです。いいねしたユーザーの一覧取得はベストエフォートです。Xは、対象ポストが該当する場合や所有者に公開されている場合にのみ、いいねしたユーザーを公開することがあります。プロフィールのいいねもベストエフォートです。多くの公開プロフィールでは、読み取り可能なLikesタブが公開されていないためです。Xがユーザーやいいねしたポストを公開していない場合、Actorは無料の`diagnostics`レコードを書き込みます。ブックマーク数はポストの行に表示されることがありますが、Xはポストをブックマークした具体的なアカウントは公開していません。

### 6. フラットなCSV出力

デフォルトのネストされたJSONフィールドをそのまま使うか、スプレッドシート向けの列を追加できます。

```json
{ "searchTerms": ["from:nasa moon"], "maxItems": 100, "outputPreset": "flat" }
```

フラット出力は`author`と`media`をそのまま維持しつつ、`authorUsername`、`authorName`、`authorFollowers`、`tweetUrl`、`twitterUrl`、`mediaUrls`、`imageUrls`、`videoUrls`などのトップレベルフィールドも追加します。

### 7. フィールド命名の選択

デフォルトでは従来のフィールド名を維持します。リッチまたは生の結果データについては、スタイルを選択できます。

```json
{
  "searchTerms": ["from:nasa moon"],
  "maxItems": 100,
  "outputVariant": "rich",
  "fieldStyle": "snake_case"
}
```

トップレベルとネストされた結果フィールドには`camelCase`または`snake_case`を使用できます。フラットなスネークケース出力には、`author_username`や`media_urls`のようなフィールドが含まれます。`raw`配下の安全な取得元スナップショットは、元のソースキーを保持します。競合する取得元の名前も、データ損失を防ぐために変更されずに残ります。

従来の診断情報は`resultType`、`actorVersion`、`replyCoverage`を使用します。リッチ出力と生出力は、`fieldStyle`を再帰的に適用します。例えば、スネークケースでは`result_type`、`actor_version`、`reply_coverage`が使われます。Overviewのデータセットビューはどちらのスタイルでも動作します。実行の`fieldStyle`に合ったコンソールビューを選んでください。`camelCase fields`は`camelCase`を想定しています。`snake_case fields`は`snake_case`を想定しています。ビューが選択するのは列のみです。保存済みまたはエクスポート済みのデータの名前を変更することはありません。

### 8. 高度なフィルタ

ユーザー、日付、位置情報、メディア、エンゲージメントのフィルタを組み合わせられます。

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

`queryType: "Latest + Top"`を設定すると、Xの2つの検索モードが同時並行で実行されます。Actorは課金前に重複排除を行い、いずれかのモードから未使用の容量分を補います。`Top`は関連度でランク付けされたものであり、網羅的ではありません。`includeSearchTerms: true`を設定すると、一致した各クエリが`searchTerm`フィールドとして付加されます。短時間の一時的な読み取り障害には、Actorが診断情報を返す前にもう1回再試行が行われます。

`lang`を設定すると、Actorは返された各ポストの言語を検証します。不一致のものはスキップし、一致するポストを求めてページ取得を続けます。

`query`、`searchQuery`、`urls`、`profileUrls`、`usernames`、`maxResults`、`max_results`、`resultsLimit`、`numberOfTweets`、`maxPosts`、`max_posts`のような、競合他社になじみのある別名も使用できます。

### コンソールとAPIの入力UX

コンソールでは、以下のコントロールが公開されています。

- Mode、Output Variant、Field Style、Output Preset、Sort Byは、検証済みの選択肢です。
- Start URLsとProfile URLsのフィールドは、文字列または`{ "url": "..." }`オブジェクトを受け付けます。それらのJSONエディタは両方のAPI形式を保持します。
- Structured Filtersは、ネストされたJSONを使わずにグループ化されたコントロールを公開します。
- 標準的なフィルタグループは、対応するフラットな演算子をフォームから除外しています。JSON、API、SDK、自動化、保存済みタスクの入力では、それらは引き続き受け付けられます。
- Max ItemsとMax Items Per Targetは、1以上の整数を受け付けます。エンゲージメントのしきい値は、0以上の整数を受け付けます。

新しい連携では標準フィールドを使用してください。互換性のための別名は、JSON、API、SDK、自動化、タスクの入力で引き続き利用できます。これには、`outputVariant: "raw"`の別名としての`includeRaw`も含まれます。`compact`や`full`のような従来の`outputVariant`の値は、引き続き受け付けられ、レガシー出力を使用します。ビジュアルフォームでは、それらをレガシーの別名としてラベル付けしています。

### 主なサポート対象の検索演算子

| 演算子                   | 例                       | 用途                          |
| ---------------------- | ---------------------- | --------------------------- |
| `from:`                | `from:elonmusk`        | このユーザーのポストのみ           |
| `to:`                  | `to:OpenAI`            | このユーザーへのリプライのみ        |
| `@`                    | `@nasa`                | このユーザーに言及したポスト        |
| `list:`                | `list:123456`          | リストメンバーによるポスト          |
| `lang:`                | `lang:en`              | 言語で絞り込み                   |
| `since:` / `until:`    | `since:2026-01-01`     | 日付範囲                       |
| `min_faves:`           | `min_faves:100`        | エンゲージメントのしきい値          |
| `min_retweets:`        | `min_retweets:50`      | リポストのしきい値                |
| `filter:media`         | `filter:media`         | Xのメディア検索演算子             |
| `filter:videos`        | `filter:videos`        | Xの動画検索演算子                 |
| `filter:images`        | `filter:images`        | Xの画像検索演算子                 |
| `filter:links`         | `filter:links`         | リンク付きのポストのみ             |
| `filter:replies`       | `filter:replies`       | リプライポストのみ                |
| `filter:quote`         | `filter:quote`         | 引用ポストのみ                   |
| `filter:blue_verified` | `filter:blue_verified` | Premiumユーザーのみ              |

日付範囲は、下限を含み、上限を含みません。Actorは、各ポストを追加または課金する前に、両方の境界を検証します。

演算子の完全なリストについては、
[Twitter Advanced Search](https://github.com/igorbrigadir/twitter-advanced-search)を参照してください。

## 入力

オプションの完全なリストについては、**Input**タブを参照してください。すべてのフィールドは任意ですが、`startUrls`、`twitterHandles`、`listIds`、`tweetIds`、`searchTerms`、`twitterContent`、またはそれらの記載されている別名のうち、少なくとも1つは必要です。

例:

- ポストのURLをStart URLsに貼り付けます。
- プロフィールのURLを貼り付けるか、ユーザー名をX Handlesに追加します。Actorはそのタイムラインと著者検索を組み合わせます。
- アカウントの過去データ取得には、Search Termとして`from:user since:YYYY-MM-DD until:YYYY-MM-DD`を使用します。Actorは、取得前に互換性のある期間をマージします。直近の期間はプロフィールのタイムラインと著者検索を組み合わせます。過去の期間は正確な検索を使用します。
- リストのURLをStart URLsに貼り付けます。
- 高度な検索には、`twitterContent`と`from:`、`since:`、`min_faves:`、`filter:media`のようなフィルタを組み合わせます。

このスクレイパーは、汎用の`list:ID`検索ではなく、専用のリストパスを通じてリストのURLをルーティングします。

## 出力

各ポストは、利用可能なメタデータを持つ1つのJSONオブジェクトです。

データセットと実行レポートのスキーマには、フィールドのタイトル、説明、例が含まれます。エージェントは、フィールドの意味を推測することなくそれらを確認できます。

サンプル値は例示目的のものです。レスポンスは、実行時点の取得元データを反映します。

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

Apifyのデータセットから、JSON、CSV、Excel、HTMLとしてエクスポートできます。

## 実行オプション

- Apifyの最大合計課金額を設定して、実行コストの上限を決めます。その予算内で最大の行数を得るには`maxItems`を空のままにし、ポスト数を少なくしたい場合は`maxItems`を設定します。
- Apify APIで`maxTotalChargeUsd`を設定するか、コンソールでMax cost per runを設定します。Apifyはその上限をActorに`ACTOR_MAX_TOTAL_CHARGE_USD`として公開し、Actorはそれを課金可能な最大行数に変換します。
- 同時並行の100件バッチのために`tweetIds`を渡します。高速なユーザータイムラインのパスを使うには、プロフィールのURLを貼り付けます。
- 多数のクエリを実行する場合は、各結果にその取得元となった検索語をタグ付けするために`includeSearchTerms: true`を設定します。
- `queryType: "Latest + Top"`を設定すると、Xの2つの検索モードが同時並行で実行されます。重複排除と結果上限は原子的に維持されます。
- 1秒ごとのチェックと署名付きWebhookには、Xquikのアカウントモニターまたはキーワードモニターを使用してください。アクティブなモニターは1秒ごとにチェックします。

## ユースケース

- ポスト全体のブランド感情を追跡する。
- 競合他社のポストや業界用語を監視する。
- 公開の会話から見込み客を見つける。
- 研究のために公開データセットを収集する。
- 高いエンゲージメントを得ているポストを見つける。

## データ取り扱いに関する責任

このActorは公開されているXのフィールドをリクエストします。結果には個人データが含まれる可能性があります。合法的な目的であることを確認し、適用されるプライバシー規則に従ってください。不明な点がある場合は、資格のある弁護士に相談してください。

## 関連するXquik Actor

すべてのXquik Actorは、同じ抽出エンジン、フィルタ優先の課金方式、診断機能を共有しています。必要なデータに合ったものを選んでください。

- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): ハンドル、ID、URLからプロフィールとそのポスト、リプライ、メディア、いいねをスクレイピングします。検索ではなくアカウントから始めるときに使用してください。1行あたり$0.00015から。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): 25種類以上のフィルタで、ポスト配下のリプライ、コメント、会話全体をスクレイピングします。ポストの下にある議論が必要なときに使用してください。1行あたり$0.00015から。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): ポストのURLまたはIDから、リプライ、引用ポスト、リポストしたユーザー、いいねしたユーザー、スレッドを一括でスクレイピングします。誰がポストにエンゲージしたかを測定するときに使用してください。1行あたり$0.00015から。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): フォロワー、フォロー中、リストメンバー、購読者、コミュニティメンバーをプロフィール行としてスクレイピングします。オーディエンスやメンバーリストが必要なときに使用してください。1プロフィールあたり$0.00015から。
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper): ハンドル、自己紹介、地域からユーザーを検索し、フォロワー数、認証状態、アカウントの経過期間、地域でフィルタします。検索からアカウントリストを作成するときに使用してください。1プロフィールあたり$0.00015から。
- [X List Scraper](https://apify.com/xquik/x-list-scraper): リストのURLまたはIDから、リストのポスト、メンバー、フォロワーをスクレイピングします。厳選されたリストが情報源となるときに使用してください。1行あたり$0.00015から。
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): コミュニティ情報、ポスト、検索、メンバー、モデレーターをスクレイピングします。情報源がXコミュニティであるときに使用してください。1行あたり$0.00015から。
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): 順位、ボリューム、クエリ、WOEIDを含む地域別のリアルタイムトレンドをスクレイピングします。どこで何がトレンドになっているかを追跡するときに使用してください。1トレンドあたり$0.00015から。
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): 表紙、著者、日付、指標付きで、長文のX ArticlesをMarkdownとテキストでスクレイピングします。ポストではなく記事本文が必要なときに使用してください。1記事あたり$0.00015から。
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): ポストやプロフィールから写真、動画、GIFを抽出または保存し、MP4化やメタデータのオプションを備えます。メディアファイル自体が必要なときに使用してください。1メディア行あたり$0.00015から。
- [X (Twitter) Brand Monitoring](https://apify.com/xquik/x-twitter-brand-monitoring): AIによる関連性、感情、顧客体験の回答でブランドの言及を追跡し、実行結果を比較します。長期的にブランドを監視するときに使用してください。分析済みポスト1件あたり$0.0003から。
- [X Tweet Sentiment Analysis](https://apify.com/xquik/x-tweet-sentiment-analysis): すべてのポストにAIで態度、強度、皮肉の確率をラベル付けします。任意のトピックについて一般的な感情分析が必要なときに使用してください。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) Stock & Crypto Signal](https://apify.com/xquik/x-twitter-stock-crypto-signals): AIで強気、弱気、中立、または複合的なスタンス、コンテンツの種類、確信度、資産との関連性をラベル付けします。株、暗号資産、トレーディングの話題を追うときに使用してください。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) News Monitor with AI](https://apify.com/xquik/x-twitter-news-monitor): AIでニュースポストを形式、情報源の帰属、トピックとの関連性でラベル付けします。報道とコメントを区別するときに使用してください。分析済みポスト1件あたり$0.0003から。
- [X Tweet Classifier with AI](https://apify.com/xquik/x-twitter-tweet-classifier): AIで独自のカテゴリ、スコア、はい/いいえの質問にすべてのポストで回答します。既定の分析があなたのラベルに合わないときに使用してください。分析済みポスト1件あたり$0.0003から。

## スクレイピング以外にも必要ですか？

Xquikは、47種類のダッシュボードツール、129のREST操作、署名付きWebhook、MCPサーバーも提供しています。

- [APIドキュメント](https://docs.xquik.com/introduction): REST APIガイド
- [Search Tweets API](https://docs.xquik.com/api-reference/x/search-tweets): このActorを支えているエンドポイント
- [Batch Tweets API](https://docs.xquik.com/api-reference/x/batch-tweets): 最大100件のポストをIDで取得
- [User Tweets API](https://docs.xquik.com/api-reference/x/user-tweets): ユーザーのタイムラインを取得
- [MCPサーバー](https://docs.xquik.com/mcp/overview): サポートされているツールを確認
- [Webhooks](https://docs.xquik.com/webhooks/overview): 署名付きイベント配信
- [GitHub](https://github.com/Xquik-dev/x-twitter-scraper): ソースコードとイシュートラッカー

## よくある質問

**X APIキーは必要ですか？** いいえ。このスクレイパーは独自のインフラを使用します。ログインや認証情報は不要です。

**実行を制限するものは何ですか？** 指定した件数の上限とApifyの利用料上限が実行を停止させます。Apifyのアカウントおよびプラットフォームの制限も適用されます。

**どのくらい速いですか？** 実行時間は、ルート、結果件数、取得元の可用性によって異なります。

**どの検索演算子がサポートされていますか？** Xの高度な検索は、著者、宛先、メンション、日付、エンゲージメント、メディア、位置情報をサポートしています。

**これを実行するのにApify APIを使えますか？** はい。Python、JavaScript、cURLの例については、[APIタブ](https://apify.com/xquik/x-tweet-scraper/api)を参照してください。

**定期的なスクレイピングをスケジュールできますか？** はい。このActorをcronで実行するには、Apifyの組み込み[スケジュール機能](https://docs.apify.com/platform/schedules)を使用してください。

**問題はどこに報告すればよいですか？** [GitHub](https://github.com/Xquik-dev/x-twitter-scraper/issues)でイシューを開くか、このActorのページのIssuesタブを使用してください。

**カスタムソリューションを依頼できますか？** はい。ダッシュボード、API、MCPサーバー、Webhookについては、[xquik.com](https://xquik.com)にアクセスするか、[APIドキュメント](https://docs.xquik.com/introduction)をお読みください。
