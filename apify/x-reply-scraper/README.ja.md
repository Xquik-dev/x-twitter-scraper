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

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。XquikのX Reply Scraperは、返信、コメント、会話全体を収集します。他のApify Actorの多くは、フィルタリングや重複排除の前に課金します。Xquikが課金するのは、**配信した結果のうち、重複がなくフィルター条件に合うもの**だけです。

X(Twitter)の返信を、すべてのApifyプランで**配信された行1件につき$0.00015**でスクレイピングします。ポストのURL、ポストID、プロフィールのURL、ユーザー名を貼り付けてください。返信、会話、著者、エンゲージメント、エンティティ、メディアのURLをエクスポートできます。Apifyのプラットフォーム利用料は別途かかります。Xへのログインは不要です。フィルターはデータセットに書き込む前に適用されるので、支払うのは配信された行の分だけです。

> Xquikは独立したサードパーティサービスです。X Corpとは提携していません。
> 「Twitter」および「X」はX Corpの商標です。

## このTwitterリプライ（返信）スクレイパーでできること

XquikのX Reply Scraperは、公開されている返信とコメントの会話を収集します。1件のポスト、URLの一括リスト、ポストID、ユーザーの返信タイムラインを扱えます。

感情分析、顧客フィードバック、コミュニティ調査に使えます。返信のランキング、見込み客の発掘、モデレーションの確認、会話データセットの作成にも使えます。

### 返信の収集の動作

- 自動モードは、直接の結果が不完全な場合も収集を続けます。
- `collectionStrategy` には、用途に応じた4つのモードがあります。
- 一括入力は、ポストのURL、ポストID、プロフィール、ユーザー名を受け付けます。
- フィルターと重複排除は課金前に行います。
- 出力は、4種類の並び順、3段階の詳細レベル、3種類のフィールドスタイルに対応します。
- すべての返信に、元の対象、親ID、ルートID、深さが残ります。
- 継続用のカーソルで、過去分の取得と定期実行ができます。
- 空の実行は、`diagnostics` に無料のレコードを1件書き込みます。
- 実行ログには、ページごとと対象ごとの所要時間が `fetchDurationMs`、`processingDurationMs`、`pushDurationMs`、`statusDurationMs`、`fullPageDurationMs`、`fullTargetDurationMs` に表示されます。
- Apifyが実行を再起動しても、配信済みの返信と進捗は残ります。

## Xの返信をスクレイピングする方法

1. ポストのURL、ポストID、プロフィールのURL、ユーザー名を貼り付けます。
2. `maxItems`、`scope`、必要なフィルターを設定します。
3. XquikのX Reply Scraperを実行し、データセットを開きます。

入力済みのフォームは、確認済みの公開の会話を対象にしています。完全なフラット行を最大25件返します。自動モードは、デフォルトで会話全体を検索します。重複排除と元の対象の帰属情報はオンのままです。

### ポストのURLから返信をスクレイピングする

```json
{
  "startUrls": [{ "url": "https://x.com/OpenAI/status/2082577277246972300" }],
  "maxItems": 100
}
```

### ポストIDから返信をスクレイピングする

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

### ユーザーの返信タイムラインをスクレイピングする

```json
{ "usernames": ["OpenAI", "apify"], "maxItems": 10000 }
```

### 課金前に返信を絞り込む

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

### CSV向けのフラットな行をエクスポートする

```json
{
  "tweetIds": ["2082577277246972300"],
  "outputMode": "full",
  "outputPreset": "flat",
  "fieldStyle": "camelCase",
  "maxItems": 100
}
```

## Xの返信のスクレイピングにかかる費用は？

XquikのX Reply Scraperは、すべてのApifyプランで配信された行1件につき$0.00015です。Apifyのプラットフォーム利用料は別途かかります。

Xquikの課金は、配信したデータ行1件につき1回です。フィルターや重複排除で除いた返信には料金がかかりません。`diagnostics` の診断レコードは無料です。開始、URL、クエリ、ページ送り、フィルターの料金はかかりません。

## 公開タスクの例

50個の公開タスクから選べます。どのタスクにも、上限を決めた入力と、対応するデータセットビューがあります。実行前にタスクを編集できます。

まずは次の例から始めてください。

- [AIエージェント向けに返信を収集する](https://apify.com/xquik/x-reply-scraper/examples/collect-replies-for-ai-agents)
- [Xの返信でRAG用データセットを作る](https://apify.com/xquik/x-reply-scraper/examples/build-x-reply-rag-dataset)
- [LLMで処理するために返信を保存する](https://apify.com/xquik/x-reply-scraper/examples/archive-replies-for-llm-processing)
- [CRM向けに返信から見込み客を抽出する](https://apify.com/xquik/x-reply-scraper/examples/extract-reply-leads-for-crm)

## AIエージェントとMCPへの対応

XquikのX Reply Scraperは、Apify MCP、APIクライアント、x402、Skyfireから実行できます。

- 限定された権限で、無関係なApifyアカウントのデータを守ります。
- イベント課金で、費用は配信した結果に連動します。
- エージェント決済と両立させるため、スタンバイモードはオフのままです。
- 型付きのスキーマが、返信、実行レポート、継続用カーソルを記述します。
- 上限付きのデフォルト値で、エージェントが誤って無制限に実行するのを防ぎます。
- 安定した `camelCase` と `snake_case` のモードで、ツールをつなぎやすくなります。
- 診断行には、ステータス、メッセージ、復旧のためのアクションが入ります。
- 実行レポートには、正確な結果、停止理由、課金見積もりが入ります。

## 返信の対象と入力の別名

次の主要なフィールドを使ってください。

| 入力          | 用途                                  |
| ------------- | ------------------------------------- |
| `startUrls`   | XのポストURLとプロフィールURLの混在   |
| `tweetIds`    | 数値のポストID                        |
| `usernames`   | プロフィールの返信タイムライン        |
| `startCursor` | 保存したカーソルから1つの対象を再開   |

入力フォームには正規のコントロールだけが表示されます。互換用の別名は、JSON、API、SDK、自動化、保存済みタスクの入力で引き続き使えます。正規のフィールドと別名を組み合わせた場合は、既存の優先順位が適用されます。

次の別名は、他のスクレイパーでよく使われるフィールド名を受け付けます。

- URLの別名: `urls`、`tweetUrls`、`postUrls`、`profileUrls`
- IDの別名: `conversationIds`、`postIds`、`ids`、`tweetId`、`id`
- ユーザー名の別名: `twitterHandles`、`screenname`
- 全体の上限の別名: `maxResults`、`max_results`、`resultsLimit`、`maxReplies`
- 対象ごとの上限の別名: `maxRepliesPerTweet`、`maxCommentsPerPost`
- 検索の別名: `useSearch`
- 入れ子の返信の別名: `includeNestedReplies`、`includeRepliesOfReplies`
- 元のポストの別名: `includeOriginalTweet`
- 出力の別名: `outputVariant`、`includeRaw`

形式が正しくない対象や未対応の対象があっても、Actorは失敗しません。有効な対象が1つも残らない場合、実行は直し方を示す診断を書き込みます。

## 収集範囲の戦略

### 自動の完全収集

ほとんどのジョブでは `collectionStrategy: "auto"` を使ってください。指定した範囲で取得できる返信をすべて収集します。範囲、深さ、並び順、著者の設定は、上限より前に適用されます。ルート以外の対象の下にある返信も含みます。Xがスレッドの一部を非表示にしている場合、非表示の返信の数をステータスに示します。ほかの `collectionStrategy` の値では、モードが切り替わることはありません。

診断情報のカバレッジの数値は、Xにそれ以上返信がないことの証明にはなりません。上限、データの欠落、エラーで、実行が未完了になることがあります。

### 直接の返信

Xの表示順で直接の返信を取得するには、`collectionStrategy: "replies"` を使います。保存したカーソルに対応しています。

### 会話検索

会話を幅広く集めるには、`collectionStrategy: "conversationSearch"` を使います。

### スレッド全体の文脈

元の会話の文脈を読み取るには、`collectionStrategy: "thread"` を使います。ルートのポストを深さ0として残すには、`includeOriginalPost: true` を設定します。

## 直接の返信と入れ子の返信の設定

結果の形は `scope` で選びます。

| 値       | 結果                                         |
| -------- | -------------------------------------------- |
| `direct` | 深さ1の返信を残す                            |
| `nested` | 深さ2以上の、返信への返信を残す              |
| `all`    | 取得できる直接の返信と入れ子の返信をすべて残す |

入れ子の深さは `maxDepth` で制限します。Xが会話の上位のポストを省いた場合、親へのリンクが欠けることがあります。Actorは、取得できる範囲で最も正確な深さを残します。

## 並び替え

`sort` には次の値を使います。

- `relevance` はXの元の順序を保ちます
- `latest` は新しい順に並べます
- `oldest` は古い順に並べます
- `likes` はいいねが多い順に並べます

プロフィールが対象の場合は、指定した件数の、重複がなくフィルターを通った結果を集めてから並べ替えます。ポストが対象の場合は、全体での並び順を保ちます。

互換用の別名 `sortBy` と `queryType` も引き続き使えます。

## 返信のフィルター

対応するフィルターはすべて、データセットへの書き込み前に適用されます。

### テキストとエンティティのフィルター

| 入力             | 動作                              |
| ---------------- | --------------------------------- |
| `exactPhrase`    | 1つのフレーズとの完全一致を求める |
| `anyWords`       | 1つ以上の単語かフレーズを求める   |
| `excludeWords`   | 一致する単語やフレーズを除く      |
| `keywordInclude` | `anyWords` に統合される別名       |
| `keywordExclude` | `excludeWords` に統合される別名   |
| `hashtags`       | 1つ以上のハッシュタグを求める     |
| `cashtags`       | 1つ以上のキャッシュタグを求める   |
| `mentioning`     | @メンションを求める               |

### 著者と言語のフィルター

| 入力                    | 動作                                   |
| ----------------------- | -------------------------------------- |
| `fromUser`              | 1人の返信の著者に絞る                  |
| `toUser`                | 1つのユーザー名宛ての返信に絞る        |
| `lang`                  | 1つのXの言語コードに絞る               |
| `verifiedOnly`          | 何らかの公開の認証シグナルを求める     |
| `blueVerifiedOnly`      | X Premiumの認証を求める                |
| `excludeOriginalAuthor` | 元のポストの著者による自己返信を除く   |

### エンゲージメントのフィルター

`minLikes`、`minReplies`、`minRetweets`、`minQuotes`、`minViews`、`minBookmarks` を使います。別名の `minFaves` は `minLikes` に対応します。

### メディアと日時のフィルター

- 公開メディア付きの返信に絞るには、`hasMediaOnly: true` を設定します。
- `mediaType` を `any`、`image`、`video`、`gif`、`link` のいずれかに設定します。
- `since` には、範囲に含める開始日時を設定します。
- `until` には、範囲に含めない終了日時を設定します。
- 互換用の別名として `sinceTime` と `untilTime` も使えます。

## 出力フィールド

データセットと実行レポートのスキーマは、返すすべてのフィールドを説明します。プリミティブなフィールドには、エージェントや自動生成された連携のための例も付きます。

フルの返信行には、次の主なフィールドが入ることがあります。

| フィールド          | 説明                                                     |
| ------------------- | -------------------------------------------------------- |
| `id`                | 返信のID                                                 |
| `text`              | 返信のテキスト                                           |
| `fullText`          | 長文の返信テキスト                                       |
| `createdAt`         | 返信のタイムスタンプ                                     |
| `lang`              | Xの言語コード                                            |
| `url`               | 返信への直接URL                                          |
| `conversationId`    | Xの会話ID                                                |
| `inReplyToId`       | 直接の親のID                                             |
| `inReplyToUserId`   | 親の著者のID                                             |
| `inReplyToUsername` | 親のユーザー名                                           |
| `likeCount`         | いいね数                                                 |
| `replyCount`        | 子の返信数                                               |
| `retweetCount`      | リポスト数                                               |
| `quoteCount`        | 引用数                                                   |
| `viewCount`         | 表示回数                                                 |
| `bookmarkCount`     | ブックマーク数                                           |
| `author`            | 取得できる公開の著者メタデータ                           |
| `media`             | 画像、動画、GIF、バリアント                              |
| `entities`          | ハッシュタグ、キャッシュタグ、メンション、URL、動画のタイムスタンプ |
| `quoted_tweet`      | 取得できる場合の引用元ポスト                             |
| `retweeted_tweet`   | 取得できる場合のリポスト元ポスト                         |

フルの行には、取得できる元のメタデータも残ります。

- ポストの種類のフィールドは `type`、`isReply`、`isQuoteStatus`、`isNoteTweet`、`isLimitedReply`、`isTranslatable` です。
- テキストの詳細は `displayTextRange`、`noteTweet`、`article`、`card` です。
- ラベルと通知は `contentDisclosure`、`communityNote`、`possiblySensitive`、`tombstone`、`exclusiveContent` です。
- 会話の詳細は `conversationControl`、`limitedActions`、`unmentionedUserIds` です。
- 文脈のフィールドは `source`、`place`、`communityId`、`reactionContext`、`postCta` です。
- 編集と表示可否のフィールドは `edit`、`previousCounts`、`viewState`、`authorUnavailable` です。

フラットな行には、会話の系統、元データの詳細、結果の種類、スキーマのバージョンが残ります。正確なフィールドはOpenAPIを参照してください。

### 著者のメタデータ

入れ子の著者情報は、公開プロフィールの仕様に従います。本人を識別する情報、各種カウント、認証、表示可否、プロフェッショナル情報、プロフィールの自己紹介を含みます。

フラット出力には `authorId`、`authorUsername`、`authorName`、`authorFollowers`、`authorFollowing`、`authorVerified` が加わります。

### メディアのメタデータ

メディアには、表示可否、サイズ、タグ、動画のバリアントが含まれます。`watchNowUrl` と `visitSiteUrl` のアクションもあります。

フラット出力には `mediaUrls` が加わります。

### 出力の例

一部を省略した返信の行は次のとおりです。

```json
{
  "resultType": "reply",
  "id": "1881423000000000000",
  "url": "https://x.com/example/status/1881423000000000000",
  "text": "Thanks for sharing this update.",
  "createdAt": "2026-08-09T12:00:00.000Z",
  "lang": "en",
  "conversationId": "1881422000000000000",
  "rootTweetId": "1881422000000000000",
  "parentReplyId": "1881422000000000000",
  "depth": 1,
  "isDirectReply": true,
  "likeCount": 42,
  "replyCount": 3,
  "retweetCount": 5,
  "quoteCount": 2,
  "viewCount": 1000,
  "bookmarkCount": 7,
  "authorUsername": "example",
  "authorName": "Example User",
  "authorFollowers": 1000,
  "authorVerified": false,
  "mediaUrls": ["https://pbs.twimg.com/media/example.jpg"],
  "sourceTweetId": "1881422000000000000",
  "sourceTarget": "1881422000000000000"
}
```

サンプル値は説明用です。実際の実行ではライブデータが返ります。

## 出力モード

### コンパクト

データセットの列を絞るには `outputMode: "compact"` を設定します。テキスト、会話、著者、エンゲージメント、メディアのフィールドは残ります。

### フル

対応するすべての公開フィールドを残すには `outputMode: "full"` を設定します。

### Raw

`raw` の下にサニタイズ済みの元データのスナップショットを加えるには、`outputMode: "raw"` を設定します。

### 入れ子またはフラット

デフォルトの `flat` レイアウトは、入れ子のオブジェクトを残したまま、表向けの著者フィールドを加えます。加えたフラットなフィールドを省くには、`outputPreset: "nested"` を設定します。

### フィールドの命名

`fieldStyle` を `source`、`camelCase`、`snake_case` のいずれかに設定します。Actorは、名前が衝突する元のキーを上書きしないようにします。

## 上限、課金、継続

`maxItems` は、実行全体で配信する行数を制限します。`maxItemsPerTarget` は、ポストやプロフィールごとの行数を制限します。

1回の実行で多数の対象を読み取れます。上限、重複排除、帰属情報、課金は、すべての対象で正確に保たれます。

Actorは、出力と課金の前に重複した行を除きます。異なる対象から来た重複行を残すには、`dedupeAcrossTargets: false` を設定します。

ページ数の上限で止まった実行の後は、デフォルトのキーバリューストアから `next-cursors` を読み取ってください。その対象を続けるには、カーソルを1つ `startCursor` に渡します。

### Apifyのタイムアウト

デフォルトのApifyタイムアウトは `0` なので、実行に時間制限はありません。Actorは、上限に達するか、対象のデータがなくなるまで続けます。有限のApifyタイムアウトを設定することもできます。その場合、`completionReason: "deadline_reached"` は、その上限が近いことを示します。Actorは上限の前に返信とレポートを保存し、正常に終了します。配信済みの返信の課金は1回だけです。終わっていない対象は、後から再開できます。

## 抽出が不完全な場合

中断された実行は、無料の `partial` 診断を書き込みます。取得済みの結果はそのまま残ります。再試行する前に `availableResults`、`failedTargets`、`retryable`、`nextAction` を確認してください。Actorの正常終了が示すのは配信の完了です。抽出が最後まで終わったことは意味しません。

ステータスは、早期停止の原因をすべて示します。`stopCauses` は各原因を挙げ、それぞれに `message`、`retryable`、`nextAction` を付けます。原因は `target_not_found`、`target_failed`、`page_limit`、`reply_reach`、`deadline_reached` です。`reply_reach` は、Xがスレッドの一部しか返さなかったことを示します。

存在しないポストやアカウントは、失敗として数えません。ステータスは、"X has no match for 1 target." のようにそれを示します。`stopCauses` に入るのは、別の原因で実行が止まった場合だけです。いずれかの原因が再試行可能なら、実行も `retryable` になります。

## 診断

成功したデータ行は `resultType: "reply"` を使います。データなしで終わった実行は、`diagnostics` に無料のレコードをちょうど1件書き込みます。そのレコードが直し方を示します。

実行ステータスは、実行が止まった理由を示します。課金された結果と読み取った対象の数も数えます。問題が起きた実行は、入力なしや無効な入力での終了も含めて、必ず `run-report` を書き込みます。大規模な実行も書き込みます。問題なく終わった小規模な実行は書き込まず、Apifyの利用料を節約します。毎回書き込むには `alwaysSaveRunRecords` をオンにしてください。

レポートのスキーマは、完了状況、課金、失敗、保存したカーソルを説明します。`version` フィールドは、公開されているActorのソースの正確なバージョンを示します。

`status` フィールドは次の値を使います。

- `no-input`
- `invalid-input`
- `replies-incomplete`
- `zero-output`
- `aborted`
- `unexpected-error`

## APIの例

どの例も、XquikのX Reply Scraperを実行してデータセットのアイテムを返します。`<APIFY_API_TOKEN>` は、自分のApify APIトークンに置き換えてください。

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
actor=xquik~x-reply-scraper
curl "https://api.apify.com/v2/acts/$actor/run-sync-get-dataset-items" \
  -X POST \
  -H "Authorization: Bearer <APIFY_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"tweetIds":["2082577277246972300"],"maxItems":100}'
```

## 自動化と連携

XquikのX Reply Scraperは、Apifyのスケジュール、Webhook、APIクライアントから実行できます。Make、Zapier、n8n、Googleスプレッドシート、クラウドストレージとも連携できます。エージェントは[Apify MCPサーバー](https://docs.apify.com/platform/integrations/mcp)から呼び出せます。

対象となるエージェントのワークフローでは、[x402](https://docs.apify.com/integrations/x402)や[Skyfire](https://docs.apify.com/integrations/skyfire)も使えます。

Xquikは、47個のダッシュボードツール、129個のREST操作、署名付きWebhook、MCPサーバーも提供しています。

### 常に最新のビルドを使う

すべての実行で `latest` を選ぶと、公開済みのすべての修正が適用されます。

ビルドを指定しない場合、ApifyはこのActorの `latest` のデフォルトを使います。Consoleでの実行と標準のAPIの例は、そのデフォルトを引き継ぎます。

保存済みのタスクは、Actorのデフォルトを上書きできます。スケジュールとタスクの連携は、その選択を再利用します。上書きはすべて `latest` にしておいてください。

Apifyは、特定のビルド番号を `latest` に転送しません。固定した番号は `latest` に置き換えてください。特定のビルドは、一時的なロールバックにだけ使ってください。

## 関連するXquik Actor

すべてのXquik Actorは、同じ抽出エンジン、フィルター優先の課金、診断機能を共有しています。必要なデータに合うものを選んでください。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): 検索、プロフィールのタイムライン、リスト、ポストIDから、50以上のフィルターでポストをスクレイピングし、フラットな形式で出力します。分析なしでポストデータが必要なときに使います。1行あたり$0.00015から。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): ユーザー名、ID、URLから、プロフィールとそのポスト、返信、メディア、フォロワーをスクレイピングします。検索ではなくアカウントから始めるときに使います。1行あたり$0.00015から。
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

## よくある質問

### X APIキーやログインは必要ですか？

いいえ。X APIキー、ログイン、認証情報は不要です。XquikのX Reply Scraperが、Xのパスワード、Cookie、トークンを求めることはありません。

### Xの返信をスクレイピングしても合法ですか？

XquikのX Reply Scraperは公開されている返信を収集し、非公開アカウントの保護を回避しません。公開データだけを収集してください。適用される法律とプラットフォームのルールに従ってください。

返信のデータセットには個人データが含まれることがあります。合法的な目的を選んでください。保存期間は最小限にしてください。エクスポートしたデータを保護してください。必要な場合は、削除や開示の請求に応じてください。判断に迷う場合は、資格のある弁護士に相談してください。

### ポストに表示されている数より返信が少ないのはなぜですか？

Xがスレッドの一部を非表示にしている場合、非表示の返信の数をステータスに示します。`stopCauses` の `reply_reach` は、Xがスレッドの一部しか返さなかったことを示します。フィルター、重複排除、`scope`、`maxDepth`、上限でも件数は減ります。

### API、スケジュール、連携は使えますか？

はい。[APIタブ](https://apify.com/xquik/x-reply-scraper/api)に、Python、JavaScript、cURLの例があります。Apifyの[スケジュール](https://docs.apify.com/platform/schedules)を使うと、XquikのX Reply Scraperをcronで実行できます。Make、Zapier、n8n、Googleスプレッドシートとも連携できます。

### どこでサポートを受けられますか？

Actorページでissueを開くか、実行IDを添えて[support@xquik.com](mailto:support@xquik.com)に連絡してください。

### カスタムソリューションを依頼できますか？

はい。[xquik.com](https://xquik.com)にアクセスするか、[APIドキュメント](https://docs.xquik.com/introduction)をお読みください。Xquikは、ダッシュボード、REST API、MCPサーバー、Webhookを提供しています。
