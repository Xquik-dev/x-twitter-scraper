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

Xquikは、最も完全なXデータを備えた、世界最速かつ最安のX(Twitter)スクレイパーサービスです。X Reply Scraperは、リプライ、コメント、会話全体を収集します。他のApify Actorはすべて、フィルタリングや重複排除の前に課金します。Xquikは、配信済みでユニークかつフィルター条件に一致した結果にのみ課金します。

**すべてのApifyプランで配信された行1件につき$0.00015**で、X(Twitter)のリプライをスクレイピングします。投稿URL、Tweet ID、プロフィールURL、またはユーザー名を貼り付けてください。リプライ、会話、著者、エンゲージメント、エンティティ、メディアのURLをエクスポートします。Apifyはプラットフォーム利用料を別途請求します。Xへのログインは不要です。

フィルターはデータセットへの書き込み前に実行されます。課金対象は配信された行のみです。

>

## 抽出が不完全な場合

抽出が中断されると、無料の `partial` 診断が書き込まれます。取得済みの結果はそのまま保持されます。再試行する前に `availableResults`、`failedTargets`、`retryable`、`nextAction` を確認してください。Actorが正常終了しても、それは配信の完了を意味するだけで、抽出が完全に終わったことを意味しません。

Xquikは独立した第三者サービスです。X Corpとは提携していません。

> 「Twitter」および「X」はX Corpの商標です。

## このTwitterリプライスクレイパーは何をするか

X Reply Scraperは、公開されているリプライとコメントの会話を収集します。単一の投稿、一括のURLリスト、Tweet ID、ユーザーのリプライタイムラインを処理します。

感情分析、顧客フィードバック、コミュニティ調査、リプライのランキング、リード発掘、モデレーションのレビュー、会話データセットの作成に利用できます。

### リプライ収集の動作

- 自動モードは、不完全な直接結果を会話検索に切り替えます。
- 自動化されたポストのリプライページは、最大300行をリクエストします。
- 直接リプライ、検索、スレッドのコンテキストをカバーする4つの戦略があります。
- 一括入力は、投稿URL、Tweet ID、プロフィール、ユーザー名を受け付けます。
- プロフィールをターゲットにした場合、両方が該当するときはタイムラインと著者検索を組み合わせます。
- フィルタリングと重複削除は課金前に実行されます。
- 出力は、4種類の並び順、3段階の詳細レベル、3種類のフィールドスタイルに対応します。
- すべてのリプライは、ソースターゲット、親ID、ルートID、深さを保持します。
- 継続用のカーソルは、バックフィルとスケジュール実行をサポートします。
- 空の実行では、`diagnostics` に無料のレコードが1件書き込まれます。
- ページおよびターゲットのログには、入力を重複させることなく `fetchDurationMs`、`processingDurationMs`、`pushDurationMs`、`statusDurationMs`、`fullPageDurationMs`、`fullTargetDurationMs` が含まれます。
- チェックポイントは、再起動後も承認済みのリプライ、タイミング、失敗を保持します。

### 常に最新のビルドを使用する

公開済みのすべての修正を受け取るには、実行のたびに `latest` を選択してください。

ビルドが指定されない場合、ApifyはこのActorの `latest` デフォルトを使用します。Consoleでの実行や標準的なAPIの例は、そのデフォルトを引き継ぎます。

保存済みタスクは、Actorのデフォルトを上書きできます。スケジュールやタスクの連携も、その選択を再利用します。すべての上書き設定を `latest` のままにしてください。

Apifyは、固定されたビルド番号を `latest` に自動転送しません。固定された番号は `latest` に置き換えてください。固定ビルドは、一時的なロールバックにのみ使用してください。

## クイックスタート

初期フォームは、認証済みの公開会話を対象とします。最大10ページにわたって、最大25件のフル・フラット行を返します。自動モードは、デフォルトで会話全体を検索します。重複排除とソースの帰属情報はオンのままです。

### 投稿URLからリプライをスクレイピングする

```json
{
  "startUrls": [{ "url": "https://x.com/OpenAI/status/2082577277246972300" }],
  "maxItems": 100
}
```

### Tweet IDからリプライをスクレイピングする

```json
{
  "tweetIds": ["2082577277246972300", "2083148725367783580"],
  "maxItemsPerTarget": 100,
  "maxItems": 10000
}
```

### 入れ子になった会話全体を収集する

```json
{
  "tweetIds": ["2082577277246972300"],
  "collectionStrategy": "conversationSearch",
  "scope": "all",
  "maxDepth": 5,
  "sort": "oldest",
  "maxItems": 500
}
```

### ユーザーのリプライタイムラインをスクレイピングする

```json
{ "usernames": ["OpenAI", "apify"], "maxItems": 10000 }
```

### 課金前にリプライをフィルタリングする

```json
{
  "tweetIds": ["2082577277246972300"],
  "anyWords": ["API", "agent", "developer"],
  "excludeWords": ["airdrop", "giveaway"],
  "lang": "en",
  "minLikes": 2,
  "minViews": 100,
  "verifiedOnly": true,
  "maxItems": 10000
}
```

### CSVに適したフラットな行をエクスポートする

```json
{
  "tweetIds": ["2082577277246972300"],
  "outputMode": "full",
  "outputPreset": "flat",
  "fieldStyle": "camelCase",
  "maxItems": 100
}
```

サンプル値は例示のためのものです。レスポンスは実行時のソースデータを反映します。

## AIエージェントとMCPへの対応

このActorは、Apify MCP、APIクライアント、x402、Skyfireを通じて実行できます。

- 制限された権限により、無関係なApifyアカウントのデータを保護します。
- イベント課金により、決定的な結果ベースのコストを実現します。
- エージェント決済との互換性を保つため、スタンバイモードは無効のままです。
- 型付きスキーマにより、リプライ、Run Report、継続用カーソルを公開します。
- 上限のあるデフォルト値により、意図しない無制限のエージェント実行を防ぎます。
- 安定した `camelCase` と `snake_case` のモードにより、ツールの連結を簡素化します。
- 診断行には、ステータス、メッセージ、復旧のためのアクションが含まれます。
- Run Reportには、正確な結果、停止理由、課金見積もりが含まれます。

## リプライのターゲットと入力エイリアス

以下の主要なフィールドを使用してください。

| 入力          | 目的                                             |
| ------------- | ------------------------------------------------ |
| `startUrls`   | X投稿URLとプロフィールURLの混在                    |
| `tweetIds`    | 数値の投稿ID                                       |
| `usernames`   | 著者検索を伴うプロフィールタイムライン                 |
| `startCursor` | 保存済みのソースカーソルから1つのターゲットを再開       |

ビジュアルフォームには、正規のコントロールのみが表示されます。互換性のためのエイリアスは、JSON、API、SDK、自動化、保存済みタスクの入力で引き続き利用できます。正規フィールドとエイリアスフィールドを明示的に組み合わせた場合、既存の解決順序が維持されます。

互換性のためのエイリアスは、一般的な競合ツールの入力を受け付けます。

- URLのエイリアス: `urls`、`tweetUrls`、`postUrls`、`profileUrls`
- IDのエイリアス: `conversationIds`、`postIds`、`ids`、`tweetId`、`id`
- ユーザー名のエイリアス: `twitterHandles`、`screenname`
- 全体上限のエイリアス: `maxResults`、`max_results`、`resultsLimit`、
  `maxReplies`
- ターゲットごとのエイリアス: `maxRepliesPerTweet`、`maxCommentsPerPost`
- 検索エイリアス: `useSearch`
- 入れ子リプライのエイリアス: `includeNestedReplies`、`includeRepliesOfReplies`
- 元の投稿のエイリアス: `includeOriginalTweet`
- 出力のエイリアス: `outputVariant`、`includeRaw`

不正な形式や未対応のターゲットがあっても、Actorは失敗しません。有効なターゲットが1つも残らない場合、実行は実用的な診断を返します。

プロフィールをターゲットにした場合、カーソルページネーションと著者検索を組み合わせます。Actorは、出力と課金の前に重複する行を削除します。保存済みの旧形式カーソルは、標準的なページネーションを維持します。

## カバレッジ戦略

### 自動での完全収集

ほとんどの用途では `collectionStrategy: "auto"` を使用してください。フルまたは入れ子のスコープは、完全なリプライ抽出から始まります。スコープ、深さ、並び順、著者のコントロールは、レスポンス上限が適用される前に処理されます。抽出には、ルート以外のターゲットの下にある子孫が含まれます。抽出が不完全な場合、会話検索と直接リプライを試みる前に、既存の行を保持します。直接スコープは、必要に応じて検索にフォールバックします。未完了のページは、その継続状態を保持します。明示的な戦略が切り替わることはありません。

診断上のカバレッジしきい値は、ソースが尽きたことを証明するものではありません。停滞したページ、上限、データの欠落、エラーがあると、復旧は不完全なままになります。

### 直接リプライエンドポイント

Xのリプライタイムラインを強制的に使用するには、`collectionStrategy: "replies"` を使用してください。これにより、ソースの並び順が保たれ、カーソルに対応します。

### 会話検索

広範な会話のカバレッジを得るには、`collectionStrategy: "conversationSearch"` を使用してください。Actorは `conversation_id:<Tweet ID>` で検索します。

### スレッド全体のコンテキスト

ソースとなる会話のコンテキストを読み取るには、`collectionStrategy: "thread"` を使用してください。ルート投稿を深さ0として保持するには、`includeOriginalPost: true` を設定してください。

## 直接および入れ子のリプライのコントロール

結果の形を選ぶには `scope` を使用します。

| 値       | 結果                                                 |
| -------- | ---------------------------------------------------- |
| `direct` | 深さ1のリプライを保持する                              |
| `nested` | 深さ2以上のリプライへのリプライを保持する               |
| `all`    | 利用可能な直接および入れ子のリプライをすべて保持する      |

ネストの深さを制限するには `maxDepth` を使用します。Xが会話の祖先を省略している場合、親へのリンクが存在しないことがあります。Actorは、利用可能な範囲で最良の深さを保持します。

## 並び替え

`sort` には次の値を使用します。

- `relevance` はXのソース順序を保持する
- `latest` は新しい順に並べ替える
- `oldest` は古い順に並べ替える
- `likes` はいいね数が多い順に並べ替える

プロフィールをターゲットにした場合、並べ替えを行う前に、リクエストされた一意でフィルター済みの結果件数を収集します。ポストをターゲットにした場合は、全体の並び順が維持されます。

`sortBy` と `queryType` の互換性エイリアスも引き続きサポートされます。

## リプライのフィルター

対応するすべてのフィルターは、データセットへの書き込み前に実行されます。

### テキストとエンティティのフィルター

| 入力             | 動作                                       |
| ---------------- | ------------------------------------------ |
| `exactPhrase`    | 完全一致するフレーズを1つ要求する            |
| `anyWords`       | 単語またはフレーズを少なくとも1つ要求する      |
| `excludeWords`   | 一致する単語やフレーズを除外する              |
| `keywordInclude` | `anyWords` と統合されるエイリアス            |
| `keywordExclude` | `excludeWords` と統合されるエイリアス        |
| `hashtags`       | ハッシュタグを少なくとも1つ要求する           |
| `cashtags`       | キャッシュタグを少なくとも1つ要求する         |
| `mentioning`     | @メンションを要求する                        |

### 著者と言語のフィルター

| 入力                     | 動作                                       |
| ----------------------- | ------------------------------------------ |
| `fromUser`              | リプライの著者を1人に絞る                     |
| `toUser`                | 特定のユーザー名宛てのリプライに絞る            |
| `lang`                  | 特定のX言語コードに絞る                        |
| `verifiedOnly`          | 何らかの公開認証シグナルを要求する              |
| `blueVerifiedOnly`      | X Premiumの認証を要求する                      |
| `excludeOriginalAuthor` | ソース著者自身によるリプライを除外する           |

### エンゲージメントのフィルター

`minLikes`、`minReplies`、`minRetweets`、`minQuotes`、`minViews`、`minBookmarks` を使用します。`minFaves` エイリアスは `minLikes` にマッピングされます。

### メディアと時間のフィルター

- 公開メディアがあるリプライに絞るには `hasMediaOnly: true` を設定します。
- `mediaType` を `any`、`image`、`video`、`gif`、`link` のいずれかに設定します。
- 開始タイムスタンプ(その時刻を含む)には `since` を設定します。
- 終了タイムスタンプ(その時刻を含まない)には `until` を設定します。
- 互換性のためのエイリアスとして `sinceTime` と `untilTime` を使用できます。

## 上限、課金、継続

`maxItems` は、実行全体で配信される行数を制限します。`maxItemsPerTarget` は、各投稿またはプロフィールを制限します。

独立したターゲットは並行して実行されます。各ターゲットは、順序付けられたカーソルページネーションを維持します。データセットへの書き込みは、上限、重複排除、帰属情報、課金をアトミックに保ちます。

Actorは課金前に重複を削除します。異なるターゲットからの重複行を保持するには、`dedupeAcrossTargets: false` を設定してください。

ページ数の上限に達した実行の後は、デフォルトのキーバリューストアから `next-cursors` を読み取ってください。そのターゲットを継続するには、`startCursor` に1つのカーソルを渡します。

## 出力フィールド

データセットとRun Reportのスキーマは、返されるすべてのフィールドを記述します。プリミティブなフィールドには、エージェントや生成された連携のための例も含まれます。

フルモードのリプライ行には、次の主要なフィールドを含められます。

| フィールド           | 説明                                                        |
| ------------------- | ----------------------------------------------------------- |
| `id`                | リプライID                                                    |
| `text`              | リプライのテキスト                                              |
| `fullText`          | 長文のリプライテキスト                                          |
| `createdAt`         | リプライのタイムスタンプ                                        |
| `lang`              | X言語コード                                                    |
| `url`               | リプライへの直接URL                                             |
| `conversationId`    | Xの会話ID                                                      |
| `inReplyToId`       | 直接の親ID                                                     |
| `inReplyToUserId`   | 親の著者ID                                                     |
| `inReplyToUsername` | 親のユーザー名                                                  |
| `likeCount`         | いいね数                                                       |
| `replyCount`        | 子リプライ数                                                    |
| `retweetCount`      | リポスト数                                                     |
| `quoteCount`        | 引用ポスト数                                                    |
| `viewCount`         | 表示回数                                                       |
| `bookmarkCount`     | ブックマーク数                                                  |
| `author`            | 利用可能な公開の著者メタデータ                                    |
| `media`             | 画像、動画、GIF、バリエーション                                  |
| `entities`          | ハッシュタグ、キャッシュタグ、メンション、URL、動画のタイムスタンプ  |
| `quoted_tweet`      | 利用可能な場合の引用元ポスト                                     |
| `retweeted_tweet`   | 利用可能な場合のリポスト元ポスト                                 |

フルモードの行には、利用可能なソースメタデータも保持されます。これには、`isNoteTweet`、
`isReply`、`isLimitedReply`、`isQuoteStatus`、`source`、`type`、
`displayTextRange`、`contentDisclosure`、`conversationControl`、`article`、
`limitedActions`、`reactionContext`、`card`、`communityId`、`communityNote`、
`edit`、`isTranslatable`、`noteTweet`、`place`、`postCta`、`possiblySensitive`、
`previousCounts`、`tombstone`、`unmentionedUserIds`、`viewState` が含まれます。

フラットな行は、会話の系統、ソースの詳細、結果タイプ、スキーマバージョンを保持します。正確なフィールドについてはOpenAPIを参照してください。

### 著者のメタデータ

入れ子になった著者情報は、公開プロフィールの契約に従います。これは、識別情報、各種カウント、認証、利用可否、職業データ、プロフィールの自己紹介文をカバーします。

フラット出力には、`authorId`、`authorUsername`、`authorName`、`authorFollowers`、
`authorFollowing`、`authorVerified` が追加されます。

### メディアのメタデータ

メディアには、利用可否、寸法、タグ、動画のバリエーション、`watchNowUrl`、
`visitSiteUrl` アクションが含まれます。

フラット出力には `mediaUrls` が追加されます。

## 出力モード

### コンパクト

データセットの幅を減らすには `outputMode: "compact"` を設定してください。テキスト、会話、著者、エンゲージメント、メディアのフィールドは保持されます。

### フル

対応するすべての公開フィールドを保持するには `outputMode: "full"` を設定してください。

### Raw

サニタイズされたソースのスナップショットを `raw` として追加するには `outputMode: "raw"` を設定してください。

### 入れ子またはフラット

デフォルトの `flat` レイアウトは、入れ子になったオブジェクトを保持しつつ、テーブル用の著者フィールドを追加します。追加されたフラットフィールドを省略するには `outputPreset: "nested"` を設定してください。

### フィールドの命名

`fieldStyle` を `source`、`camelCase`、`snake_case` のいずれかに設定してください。Actorは、衝突するソースキーの上書きを避けます。

## 診断

成功したデータ行は `resultType: "reply"` を使用します。データを伴わない終了では、実用的な修正方法とともに、`diagnostics` に無料のレコードが正確に1件書き込まれます。

入力なしや無効な入力による終了を含め、すべての結果について `run-report` が書き込まれます。レポートのスキーマは、完了状況、課金、失敗、保存されたカーソルを記述します。その `version` フィールドは、公開されているActorソースの正確なバージョンを示します。

考えられるステータスには、次のものがあります。

- `no-input`
- `invalid-input`
- `replies-incomplete`
- `zero-output`
- `aborted`
- `unexpected-error`

## 費用はいくらか

すべてのApifyプランで、**配信された行1件につき$0.00015**です。これは、1行あたり
`$0.00015` に相当します。Apifyはプラットフォーム利用料を別途請求します。

Xquikは、配信されたデータ行ごとに1回課金します。診断情報は `diagnostics` 内で無料です。開始料金、URL料金、クエリ料金、ページネーション料金、フィルター料金、プロキシ料金はかかりません。

Apifyのデフォルトのタイムアウトは `0` であり、実行に時間制限はありません。Actorは、上限に達するか対象データが尽きるまで続行します。呼び出し側は、それでも有限のApifyタイムアウトを設定できます。その場合、`completionReason: "deadline_reached"` は、その設定された上限が近いことを意味します。Actorは、チェックポイント、行、レポート、正常な終了のために、最後の15秒を確保します。すでに収集されたリプライは配信され、一度だけ課金されます。未完了のページネーションは再開可能なままです。

## 公開タスクの例

50個の公開タスクから選べます。それぞれに、範囲が定められた入力と、対応するデータセットビューがあります。実行前に、どのタスクも編集できます。

まずは次の例から始めてください。

- [Collect replies for AI agents](https://apify.com/xquik/x-reply-scraper/examples/collect-replies-for-ai-agents)
- [Build an X reply RAG dataset](https://apify.com/xquik/x-reply-scraper/examples/build-x-reply-rag-dataset)
- [Archive replies for LLM processing](https://apify.com/xquik/x-reply-scraper/examples/archive-replies-for-llm-processing)
- [Extract reply leads for CRM](https://apify.com/xquik/x-reply-scraper/examples/extract-reply-leads-for-crm)

## APIの例

### JavaScript

```javascript
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: '<APIFY_API_TOKEN>' });
const run = await client
  .actor('xquik/x-reply-scraper')
  .call({
    tweetIds: ['2082577277246972300'],
    collectionStrategy: 'auto',
    scope: 'all',
    maxItems: 100,
  });

const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
```

### Python

```python
from apify_client import ApifyClient

client = ApifyClient("<APIFY_API_TOKEN>")
run = client.actor("xquik/x-reply-scraper").call(run_input={
    "tweetIds": ["2082577277246972300"],
    "collectionStrategy": "auto",
    "scope": "all",
    "maxItems": 100,
})

for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
```

### cURL

```bash
curl "https://api.apify.com/v2/acts/xquik~x-reply-scraper/run-sync-get-dataset-items" \
  -X POST \
  -H "Authorization: Bearer <APIFY_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"tweetIds":["2082577277246972300"],"maxItems":100}'
```

## 自動化と連携

Apifyのスケジュール、Webhook、APIクライアント、Make、Zapier、n8n、Googleスプレッドシート、クラウドストレージ、または
[Apify MCPサーバー](https://docs.apify.com/platform/integrations/mcp)を通じてActorを実行できます。

対応するエージェントのワークフローでは、
[x402](https://docs.apify.com/integrations/x402)または
[Skyfire](https://docs.apify.com/integrations/skyfire)も使用できます。

Xquikは、47個のダッシュボードツール、129個のREST操作、署名付きWebhook、MCPサーバーも提供しています。

## 責任ある利用

公開データのみを収集してください。適用される法律とプラットフォームのルールに従ってください。

リプライのデータセットには個人データが含まれる場合があります。正当な目的を選んでください。保持期間を最小限にしてください。エクスポートを保護してください。必要に応じて、削除および開示請求の権利を尊重してください。

Actorは、保護されたアカウントを回避しません。顧客のXパスワード、セッションクッキー、認証トークンをリクエストすることもありません。

## 関連するXquik Actor

すべてのXquik Actorは、同じ抽出エンジン、フィルター優先の課金、診断機能を共有しています。必要なデータに合ったものを選んでください。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): 検索、プロフィールのタイムライン、リスト、Tweet IDから、50以上のフィルターとフラットなエクスポートでポストをスクレイピングします。分析なしでポストデータが必要なときに使用します。1行あたり$0.00015から。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): ハンドル名、ID、URLから、プロフィールとその投稿、リプライ、メディア、いいねをスクレイピングします。検索ではなくアカウント起点で始めるときに使用します。1行あたり$0.00015から。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): 投稿URLまたはIDから、リプライ、引用ポスト、リポストしたユーザー、いいねしたユーザー、スレッドを一括でスクレイピングします。誰がポストにエンゲージしたかを測定するときに使用します。1行あたり$0.00015から。
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
- [X (Twitter) Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier): AIですべてのポストに対して、独自のカテゴリー、スコア、はい/いいえの質問に答えます。既定の分析があなたのラベルに合わないときに使用します。分析済みポスト1件あたり$0.0003から。
