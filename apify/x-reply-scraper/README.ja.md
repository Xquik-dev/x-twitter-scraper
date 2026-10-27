[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · [简体中文](README.zh-CN.md) · **日本語** · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![FramerがXquik MCPをコーディングエージェントに接続する様子](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[FramerがXquikのスクレイパーをClaude Code、Codex、Cursorなどと一緒に使う様子](https://youtu.be/4UOSpoOoC3Y?t=367)を6:07から視聴できます。

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。XquikのX Reply Scraperは、返信、コメント&会話全体を収集します。他のApify Actorの多くは、フィルタリングや重複排除の前に課金します。Xquikが課金するのは、**配信した結果のうち、重複がなくフィルター条件に合うもの**だけです。

Twitterの返信&コメントを、どのApifyプランでも**配信された行1件につき$0.00015**でスクレイピングし、Xアカウントなしで読めます。ポストのURL、ポストID、プロフィールのURL、ユーザー名のいずれかを貼り付けてください。返信、会話、著者、エンゲージメント、エンティティ&メディアのURLをエクスポートできます。プラットフォームの利用料は、Apifyが別途請求します。Xへのログインは不要です。フィルターはデータセットへの書き込み前に適用されるので、支払うのは配信された行の分だけです。

> Xquikは独立したサードパーティサービスです。X Corpとは提携していません。
> 「Twitter」および「X」はX Corpの商標です。

## X Reply Scraperでは何ができますか？

XquikのX Reply Scraperは、公開の返信&コメントの会話を収集します。単一のポスト、URLの一括リスト、ポストID&ユーザーの返信タイムラインを扱えます。

### ユースケース

- ブランド&製品のポストに寄せられた感情&顧客フィードバックを測定します。
- 話題になったポストで、いいねが最も多い返信&コメントを順位付けします。
- 公開の返信で質問したりニーズを挙げたりする見込み客を見つけます。
- モデレーション、スパム&嫌がらせの観点から返信を確認します。
- 研究&AIの学習用データセットのために、会話全体を再構成します。
- アカウントが顧客にどう返信しているかを、継続して追跡します。

## X Reply Scraperを使う理由

- **返信のエクスポートが1.7倍速い。** 実行の中央値は、他の4つのActorのうち最速のものの1.7倍の速さでした。[ベンチマーク](README.md#benchmark)は2026-10-15に実施しました。
- **有効な返信1件あたりの費用が最安。** [ベンチマーク](README.md#benchmark)で、有効な返信1件あたりの費用が最も低くなりました。
- **返信ごとのフィールド数が2倍。** [ベンチマーク](README.md#benchmark)では、行のフィールド数の中央値が100でした。これは他のActorの中央値の2倍です。
- **会話の形を選べる。** 直接の返信、入れ子の返信、またはその両方を、指定した深さまで残せます。`collectionStrategy` で、スレッドや非表示の返信だけを返すこともできます。
- **どのスレッドも再構成できる。** 各返信には、親を示す `inReplyToId`、ルートを示す `rootTweetId` & `depth` が入ります。
- **1回の実行で多数のポスト。** ポストのURL、ポストID、プロフィール&ユーザー名をまとめて貼り付けられます。ユーザー名を指定すると、そのアカウントの返信を返します。
- **必要な返信だけ。** 単語、ハッシュタグ、著者、言語、認証、エンゲージメント、メディア&日付で絞り込めます。
- **いいね数か日付で並べ替え。** 返信をいいね数で順位付けするか、新しい順か古い順に並べられます。行はコンパクト、フル、リッチのいずれかで、`camelCase` か `snake_case` で返ります。
- **大きなスレッドの続きを後で取得。** 途中で止まった実行は、対象ごとの位置を `next-cursors` に保存します。続けるには、そのうち1つを `startCursor` に渡します。

### 完全な結果

- 完全モードは、著者が非表示にした返信を加え、空のスレッドの理由を説明します。
- 各回答には、Xが持つ最も完全なデータが入ります。

### 正確な行

- ポストが見つからないと示すのは、実際に消えたときだけです。
- リポストには、元のポストの全文が入ります。
- 行の中のIDはすべて正確なままです。
- メンション、リンク、ハッシュタグ&ハイライトの位置は、テキストと一致します。
- 不明な件数は `unknownCounts` に記録され、0として表示されることはありません。
- 認証バッジは `x.com` の表示と一致します。
- 行には公開データだけが入ります。
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

### 品質チェック

- Xが表示するフィールドはすべて、提供されるか、意図的に除かれるか、存在しないことが確認されています。
- Xquikは、すべての読み取りを実際のXでテストしています。

## X Reply Scraperではどんなデータを抽出できますか？

データセット&実行レポートのスキーマは、返すすべてのフィールドを説明します。テキスト、数値&真偽値のフィールドには、エージェント&自動生成された連携のための例も付いています。

フルの返信行には、次の主なフィールドが入ることがあります。

| フィールド | 説明 |
| --- | --- |
| `id` | 返信のID |
| `text` | 返信のテキスト |
| `fullText` | 長文の返信テキスト |
| `createdAt` | 返信のタイムスタンプ |
| `lang` | Xの言語コード |
| `url` | 返信への直接のURL |
| `conversationId` | Xの会話ID |
| `inReplyToId` | 直接の親のID |
| `inReplyToUserId` | 親の著者のID |
| `inReplyToUsername` | 親のユーザー名 |
| `likeCount` | いいね数 |
| `replyCount` | 子の返信数 |
| `retweetCount` | リポスト数 |
| `quoteCount` | 引用数 |
| `viewCount` | 表示回数 |
| `bookmarkCount` | ブックマーク数 |
| `author` | 取得できる公開の著者メタデータ |
| `media` | 画像、動画、GIFとバリアント |
| `entities` | ハッシュタグ、キャッシュタグ、メンション、URL & 動画のタイムスタンプ |
| `quoted_tweet` | 取得できる場合の引用元ポスト |
| `retweeted_tweet` | 取得できる場合のリポスト元ポスト |

フルの行には、取得できる元のメタデータも残ります。

- ポストの種類のフィールドは `type`、`isReply`、`isQuoteStatus`、`isNoteTweet`、`isLimitedReply` & `isTranslatable` です。
- テキストの詳細は `displayTextRange`、`noteTweet`、`article`、`card` & `cashtagAttachments` です。
- ラベル&通知は `contentDisclosure`、`communityNote`、`possiblySensitive`、`tombstone` & `exclusiveContent` です。
- 会話の詳細は `conversationControl`、`limitedActions`、`subscriberBadge` & `unmentionedUserIds` です。
- 文脈のフィールドは `source`、`place`、`communityId`、`communityName`、`reactionContext` & `postCta` です。
- 編集&表示可否のフィールドは `edit`、`previousCounts`、`viewState` & `authorUnavailable` です。

フラットな行には、会話の系統、元データの詳細、結果の種類&スキーマのバージョンが残ります。正確なフィールドはOpenAPIを参照してください。

## X Reply Scraperで返信をスクレイピングするには？

Apifyを初めて使いますか？まず[無料アカウントを作成してください](https://console.apify.com/sign-up?fpr=xquik)。無料プランはクレジットカード不要&毎月$5分を使えます。1行あたり$0.00015なので、プラットフォーム利用料を別にすると、$5で最大33,000行分をまかなえます。その後、このページに戻ってTry for freeを押してください。

1. ポストのURL、ポストID、プロフィールのURL、ユーザー名のいずれかを貼り付けます。
2. `maxItems`、`scope` & ジョブに必要なフィルターを設定します。
3. XquikのX Reply Scraperを実行し、データセットを開きます。

フォームには、私たちがテストした公開の会話が入力済みです。フルかつフラットな行を最大1,000件返します。自動モードは、デフォルトで会話全体を検索します。重複排除&取得元の記録はオンのままです。

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

## タスクの例

50個の公開タスクから選べます。どのタスクにも、上限を決めた入力&対応するデータセットビューがあります。どのタスクも実行前に編集できます。

- [Xのポストの返信&Twitterのコメントをスクレイピングする](https://apify.com/xquik/x-reply-scraper/examples/scrape-post-replies)
- [Twitterの返信を一括でスクレイピングする](https://apify.com/xquik/x-reply-scraper/examples/scrape-bulk-post-replies)
- [Twitterの返信の会話を再構成する](https://apify.com/xquik/x-reply-scraper/examples/rebuild-full-conversation)
- [Twitterの返信をいいね数で順位付けする](https://apify.com/xquik/x-reply-scraper/examples/rank-most-liked-replies)
- [ポストへの最新の返信をスクレイピングする](https://apify.com/xquik/x-reply-scraper/examples/collect-latest-replies)
- [Twitterの返信からスパムを除く](https://apify.com/xquik/x-reply-scraper/examples/exclude-spam-keywords)
- [英語のTwitterの返信をスクレイピングする](https://apify.com/xquik/x-reply-scraper/examples/collect-english-replies)
- [認証済みアカウントのTwitterの返信をスクレイピングする](https://apify.com/xquik/x-reply-scraper/examples/collect-verified-replies)
- [メディア付きのTwitterの返信をスクレイピングする](https://apify.com/xquik/x-reply-scraper/examples/collect-media-replies)
- [ユーザーのTwitterの返信タイムラインをスクレイピングする](https://apify.com/xquik/x-reply-scraper/examples/scrape-profile-replies)
- [AIエージェント向けにTwitterの返信を収集する](https://apify.com/xquik/x-reply-scraper/examples/collect-replies-for-ai-agents)
- [Xの返信でRAG用データセットを作る](https://apify.com/xquik/x-reply-scraper/examples/build-x-reply-rag-dataset)
- [LLM向けにTwitterの返信をアーカイブする](https://apify.com/xquik/x-reply-scraper/examples/archive-replies-for-llm-processing)
- [CRM向けにXの返信から見込み客を抽出する](https://apify.com/xquik/x-reply-scraper/examples/extract-reply-leads-for-crm)

## Xの返信のスクレイピングにはいくらかかりますか？

XquikのX Reply Scraperは、どのApifyプランでも配信された行1件につき$0.00015です。プラットフォームの利用料は、Apifyが別途請求します。

より多くの量が必要なら、前払いの利用枠が多い[Apifyプランを選んでください](https://apify.com/pricing?fpr=xquik)。

Xquikの課金は、配信したデータ行1件につき1回です。フィルターや重複排除で除いた返信には料金がかかりません。`diagnostics` の診断レコードは無料です。開始、URL、クエリ、ページ送り、フィルターの料金はかかりません。

## 空の実行、部分的な実行&停止した実行

XquikのX Reply Scraperは、空の実行、部分的な実行&停止した実行を無料で説明します。実行ステータスは、実行が止まった理由を示します。課金した結果&読み取った対象の数も数えます。すべての対象を読み取っても返信が見つからない実行は、レコードを書き込みません。その理由&変えるべき点はステータスが示します。

### 不完全な抽出

中断された実行は、無料の `partial` 診断を書き込みます。取得できた結果はそのまま残ります。再試行する前に `availableResults`、`failedTargets`、`retryable` & `nextAction` を確認してください。Actorの正常終了が示すのは配信の完了です。抽出が最後まで終わったことは意味しません。

ステータスは、早期停止の原因をすべて示します。`stopCauses` は各原因を挙げ、それぞれに `message`、`retryable` & `nextAction` を付けます。原因は `target_not_found`、`target_failed`、`page_limit`、`reply_reach` & `deadline_reached` です。`reply_reach` は、Xがスレッドの一部しか返さなかったことを示します。

存在しないポストやアカウントは、失敗として数えません。ステータスは「X has no match for 1 target.」のようにそれを示します。`stopCauses` に入るのは、別の原因で実行が止まった場合だけです。いずれかの原因が再試行可能なら、実行も `retryable` になります。

### 診断

成功したデータ行は `resultType: "reply"` を使います。対応が必要な実行は、`diagnostics` に無料のレコードをちょうど1件書き込みます。たとえば、無効な入力、スキップした対象、早期停止の場合です。そのレコードが直し方を示します。すべての対象を読み取っても返信が見つからない実行は、何も書き込みません。その理由はステータスが示します。

実行ステータスは、実行が止まった理由を示します。課金した結果&読み取った対象の数も数えます。問題が起きた実行は、入力なしと無効な入力での終了も含めて、必ず `run-report` を書き込みます。大規模な実行も書き込みます。問題なく終わった小規模な実行は、これを省いてApifyの利用料を節約します。毎回書き込むには `alwaysSaveRunRecords` をオンにしてください。

レポートのスキーマは、完了状況、課金、失敗&保存したカーソルを説明します。その `version` フィールドは、公開されているActorのソースの正確なバージョンを示します。

`status` フィールドは次の値を使います。

- `no-input`
- `invalid-input`
- `replies-incomplete`
- `zero-output`
- `aborted`
- `unexpected-error`

## 入力

Inputタブには、すべてのオプションが表示されます。ポストのURL、ポストID、プロフィールのURL、ユーザー名のうち、少なくとも1つを指定してください。ほかのフィールドはすべて任意です。

### 返信の対象&入力の別名

次の主要なフィールドを使ってください。

| 入力          | 用途                                    |
| ------------- | --------------------------------------- |
| `startUrls`   | XのポストURLとプロフィールURLの混在     |
| `tweetIds`    | 数値のポストID                          |
| `usernames`   | プロフィールの返信タイムライン          |
| `startCursor` | 保存したカーソルから1つの対象を再開する |

入力フォームには正規のコントロールだけが表示されます。互換用の別名は、JSON、API、SDK、自動化&保存済みタスクの入力で引き続き使えます。正規のフィールド&別名を組み合わせた場合は、既存の優先順位が適用されます。

次の別名は、他のスクレイパーでよく使われるフィールド名を受け付けます。

- URLの別名は `urls`、`tweetUrls`、`postUrls`、`profileUrls` & 1つの文字列としての `twitterUrl` です。
- IDの別名は `conversationIds`、`postIds`、`ids`、`tweetId`、`id` です。
- ユーザー名の別名は `twitterHandles`、`screenname` です。
- 全体の上限の別名は `maxResults`、`max_results`、`resultsLimit`、`maxReplies` です。
- 対象ごとの上限の別名は `maxRepliesPerTweet`、`maxCommentsPerPost`、`resultsPerCategory` です。
- 検索の別名は `useSearch` です。
- 入れ子の返信の別名は `includeNestedReplies`、`includeRepliesOfReplies` です。
- 深さの別名は `maxDepth` にあたる `depth` で、値は `1`、`2`、`3` のいずれかです。`full` は上限を設けません。
- 範囲の別名は、`scope: "direct"` にあたる `onlyDirectReplies` です。
- 元のポストの別名は `includeOriginalTweet`、`includeSourceTweet` です。`includeSourceTweet` を使うと、`resultsPerCategory` は返信の数を制限し、ポストの分が1行増えます。
- 著者の別名は、`excludeOriginalAuthor` にあたる `excludeOpSelfReplies` です。
- 並び順の別名は、`sort` にあたる `sortBy` & `queryType` です。`top`、`newest` & `mostLiked` は、それぞれ `relevance`、`latest` & `likes` として読み取ります。
- 出力の別名は `outputVariant`、`includeRaw` です。

`category` を `replies` に設定しても、何も変わりません。`retweets` や `info` など、他のActorの役割にあたるカテゴリーは実行を止めます。そのとき、読み取り&課金は一切行いません。メッセージが、使うべきActorを示します。これらの別名&対応する正規のフィールドの両方を設定した場合は、正規の値が優先されます。実行ログには、採用されなかった別名が記録されます。

形式が正しくない対象や未対応の対象があっても、Actorは失敗しません。有効な対象が1つも残らない場合、実行は直し方を示す診断を書き込みます。

### 収集範囲の戦略

Actorが返信を収集する方法を選んでください。ほとんどのジョブには自動モードが合います。

#### 自動の完全収集

ほとんどのジョブでは `collectionStrategy: "auto"` を使ってください。指定した範囲で到達できる返信をすべて収集します。範囲、深さ、並び順&著者の設定は、上限より先に適用されます。ルート以外の対象の下にある返信も含みます。Xがスレッドの一部を隠している場合、Xが隠している返信の数をステータスが示します。ほかの `collectionStrategy` の値では、モードが切り替わることはありません。

診断情報のカバレッジの数値は、Xにそれ以上の返信がないことを証明するものではありません。上限、データの欠落、エラーによって、実行が不完全になることがあります。

#### 直接の返信

Xの独自の順序で直接の返信を取得するには、`collectionStrategy: "replies"` を使います。保存したカーソルに対応しています。

#### 会話検索

会話を幅広く集めるには、`collectionStrategy: "conversationSearch"` を使います。

#### スレッド全体の文脈

元の会話の文脈を読み取るには、`collectionStrategy: "thread"` を使います。ルートのポストを深さ0として残すには、`includeOriginalPost: true` を設定します。

#### 非表示の返信

デフォルトの `auto` 戦略は、ポストの著者が非表示にした返信を加えます。それぞれが `resultType: "hiddenReply"` の行になり、通常の行と同じ料金がかかり、`maxItems` に数えられます。実行がこれらを読み取るのは、ポストの返信数がXに表示される数より多い場合だけです。そのため、非表示の返信がないポストに追加の費用はかかりません。除外するには、`includeHiddenReplies: false` を設定します。

非表示の返信だけを取得するには、`collectionStrategy: "hiddenReplies"` を使います。Xはこれらを古い順に、それぞれへの返信とともに並べます。非表示の返信がないポストは、行を返しません。

### 直接の返信&入れ子の返信の設定

結果の形は `scope` で選びます。

| 値       | 結果                                           |
| -------- | ---------------------------------------------- |
| `direct` | 深さ1の返信を残す                              |
| `nested` | 深さ2以上の、返信への返信を残す                |
| `all`    | 取得できる直接の返信と入れ子の返信をすべて残す |

入れ子の深さは `maxDepth` で制限します。Xが会話の上位のポストを省くと、親へのリンクが欠けることがあります。Actorは、取得できる中で最も正確な深さを残します。

### 並び替え

`sort` には次の値を使います。

- `relevance` はXの元の順序を保ちます
- `latest` は新しい順に並べます
- `oldest` は古い順に並べます
- `likes` はいいねが多い順に並べます

Xの検索では、一部の古い返信のいいね数が実際より少なく数えられます。そのため、`likes` の実行ではそうした返信が漏れることがあります。

プロフィールが対象の場合は、指定した件数の、重複がなくフィルターを通った結果を集めてから並べ替えます。ポストが対象の場合は、全体での並び順を保ちます。

互換用の別名 `sortBy` & `queryType` も引き続き使えます。

### 返信のフィルター

対応するフィルターはすべて、データセットへの書き込み前に適用されます。

#### テキスト&エンティティのフィルター

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

#### 著者&言語のフィルター

| 入力                    | 動作                                 |
| ----------------------- | ------------------------------------ |
| `fromUser`              | 1人の返信の著者に絞る                |
| `toUser`                | 1つのユーザー名宛ての返信に絞る      |
| `lang`                  | 1つのXの言語コードに絞る             |
| `verifiedOnly`          | 何らかの公開の認証シグナルを求める   |
| `blueVerifiedOnly`      | X Premiumの認証を求める              |
| `excludeOriginalAuthor` | 元のポストの著者による自己返信を除く |

#### エンゲージメントのフィルター

`minLikes`、`minReplies`、`minRetweets`、`minQuotes`、`minViews` & `minBookmarks` を使います。別名の `minFaves` は `minLikes` に対応します。

#### メディア&日時のフィルター

- 公開メディア付きの返信に絞るには、`hasMediaOnly: true` を設定します。
- `mediaType` を `any`、`image`、`video`、`gif`、`link` のいずれかに設定します。
- メディアもリンクもないテキストの返信に絞るには、`mediaType` を `none` に設定します。
- 範囲に含める開始日時は `since` で設定します。
- 範囲に含めない終了日時は `until` で設定します。
- 互換用の別名として `sinceTime` & `untilTime` を使えます。

## 出力

返信の各行はJSONオブジェクトです。データセット&実行レポートのスキーマがすべてのフィールドを説明するので、AIエージェントは推測せずに行を読み取れます。データセットは、JSON、CSV、Excel、HTMLのいずれかでエクスポートしてください。

### 著者のメタデータ

入れ子の著者情報は、公開プロフィールの仕様に従います。本人を識別する情報、各種の件数、認証、表示可否、プロフェッショナル情報&プロフィールの自己紹介を含みます。

フラット出力には `authorId`、`authorUsername`、`authorName`、`authorFollowers`、`authorFollowing` & `authorVerified` が加わります。

### メディアのメタデータ

メディアには、表示可否、サイズ、タグ&動画のバリアントが含まれます。`watchNowUrl` & `visitSiteUrl` のアクションもあります。

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

### 出力モード

データセットの各行の幅を選んでください。

#### コンパクト

列を絞ったデータセットにするには、`outputMode: "compact"` を設定します。テキスト、会話、著者、エンゲージメント&メディアのフィールドは残ります。

#### フル

対応するすべての公開フィールドを残すには、`outputMode: "full"` を設定します。

#### リッチ

1行あたりのデータを最も多くするには、`outputMode: "rich"` を設定します。リッチな行は、フルの列をすべて残し、末尾に `hasCommunityNotes`、`quotedTweetPermalink`、`unavailableAuthorId` & メディアの `sourceUser` を加えます。

#### Raw

`raw` の下にサニタイズ済みの元データのスナップショットを加えるには、`outputMode: "raw"` を設定します。

#### 入れ子またはフラット

デフォルトの `flat` レイアウトは、入れ子のオブジェクトを残し、表向けの著者フィールドを加えます。加えたフラットなフィールドを省くには、`outputPreset: "nested"` を設定します。

#### フィールドの命名

`fieldStyle` を `source`、`camelCase`、`snake_case` のいずれかに設定します。Actorは、名前が衝突する元のキーを上書きしないようにします。

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

- オブジェクト内のフィールドは、`author.id` のようにドットでつないで指定します。大文字小文字&アンダースコアの違いは問いません。
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

## 実行オプション

### 上限、課金&継続

`maxItems` は、実行全体で配信する行数を制限します。`maxItemsPerTarget` は、ポストやプロフィールごとの行数を制限します。

1回の実行で多数の対象を読み取れます。上限、重複排除、帰属情報&課金は、すべての対象にわたって正確に保たれます。

Actorは、出力&課金の前に重複した行を除きます。異なる対象から来た重複行を残すには、`dedupeAcrossTargets: false` を設定します。

ページ数の上限で止まった実行の後は、デフォルトのキーバリューストアから `next-cursors` を読み取ってください。その対象を続けるには、カーソルを1つ `startCursor` に渡します。

#### Apifyのタイムアウト

デフォルトのApifyタイムアウトは `0` なので、実行に時間制限はありません。Actorは、上限に達するか、対象となるデータがなくなるまで続けます。有限のApifyタイムアウトを設定することもできます。その場合、`completionReason: "deadline_reached"` は、その制限が近いことを示します。Actorは制限の前に返信&レポートを保存し、正常に終了します。配信済みの返信の課金は1回だけです。終わっていない対象は、後から再開できます。

### APIの例

どの例も、XquikのX Reply Scraperを実行してデータセットのアイテムを返します。`<APIFY_API_TOKEN>` は、自分のApify APIトークンに置き換えてください。

#### JavaScript

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

#### Python

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

#### cURL

```bash
actor=xquik~x-reply-scraper
curl "https://api.apify.com/v2/acts/$actor/run-sync-get-dataset-items" \
  -X POST \
  -H "Authorization: Bearer <APIFY_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"tweetIds":["2082577277246972300"],"maxItems":100}'
```

### 自動化&連携

XquikのX Reply Scraperは、Apifyのスケジュール、Webhook、APIクライアントから実行できます。Make、Zapier、n8n、Googleスプレッドシート、クラウドストレージにつなぐこともできます。エージェントは[Apify MCPサーバー](https://docs.apify.com/platform/integrations/mcp)から呼び出せます。

対象となるエージェントのワークフローでは、[x402](https://docs.apify.com/integrations/x402)や[Skyfire](https://docs.apify.com/integrations/skyfire)も使えます。

Xquikは、53個のダッシュボードツール、REST API、署名付きWebhook & MCPサーバーも提供しています。

### AIエージェント&MCPへの対応

XquikのX Reply Scraperは、Apify MCP、APIクライアント、x402、Skyfireのいずれかから実行できます。

- 限定された権限で、無関係なApifyアカウントのデータを守ります。
- イベント課金で、費用は配信した結果に連動します。
- エージェント決済との互換性のため、スタンバイモードはオフのままです。
- 型付きのスキーマが、返信、実行レポート&継続用カーソルを記述します。
- 上限付きのデフォルト値が、エージェントの誤った無制限の実行を防ぎます。
- 安定した `camelCase` & `snake_case` のモードで、ツールをつなぎやすくなります。
- 診断行には、ステータス、メッセージ&復旧のためのアクションが入ります。
- 実行レポートには、正確な結果、停止理由&課金の見積もりが入ります。

### 常に最新のビルドを使う

すべての実行で `latest` を選ぶと、公開済みのすべての修正が適用されます。

ビルドを指定しない場合、ApifyはこのActorの `latest` のデフォルトを使います。Consoleでの実行&標準のAPIの例は、そのデフォルトを引き継ぎます。

保存済みのタスクは、Actorのデフォルトを上書きすることがあります。スケジュール&タスクの連携は、その選択を再利用します。上書きはすべて `latest` にしておいてください。

Apifyは、特定のビルド番号を `latest` に転送しません。固定した番号は `latest` に置き換えてください。特定のビルドは、一時的なロールバックにだけ使ってください。

## 関連するXquik Actor

すべてのXquik Actorは、同じ抽出エンジン、フィルター優先の課金&診断機能を共有しています。必要なデータに合うものを選んでください。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper)は、検索、プロフィールのタイムライン、リスト&ポストIDから、50以上のフィルター&フラットなエクスポート付きでポストをスクレイピングします。分析なしでポストデータが必要なときに使います。1行あたり$0.00015から。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper)は、ユーザー名、ID、URLから、プロフィールとそのポスト、返信、メディア&フォロワーをスクレイピングします。検索ではなくアカウントから始めるときに使います。1行あたり$0.00015から。
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

### ポストのコメントをスクレイピングするには？

ポストのURLを `startUrls` に貼り付けて、Startをクリックしてください。Xではコメントを返信と呼ぶので、コメント1件が返信の1行になります。

### 多数のポストの返信を一度にスクレイピングできますか？

はい。1回の実行に、多数のポストのURLやポストIDを貼り付けてください。各返信は、元のポストを `sourceTarget` に残します。

### 入れ子の返信も含まれますか？

はい。デフォルトの `scope` は、直接の返信&入れ子の返信を収集します。ポストへの返信だけが必要なら、`scope` を `direct` に設定してください。`maxDepth` は、実行がたどる深さを制限します。

### 著者が非表示にした返信も取得できますか？

はい。デフォルトの `auto` 戦略が、それらを `hiddenReply` の行として加えます。除外するには、`includeHiddenReplies: false` を設定してください。

### 返信をいいね数や日付で並べ替えられますか？

はい。`sort` を設定すると、返信をいいね数で順位付けしたり、新しい順や古い順に並べたりできます。

### 返信をCSVやExcelにエクスポートできますか？

はい。データセットは、CSV、Excel、JSON、HTMLのいずれかでエクスポートできます。フラット出力では、1行に1件の返信が入り、その横に著者のフィールドが並びます。

### ポストではなくユーザーの返信をスクレイピングできますか？

はい。プロフィールのURLかユーザー名を貼り付けてください。実行は、そのユーザーの返信タイムラインを読み取ります。

### X APIキーやログインは必要ですか？

いいえ。X APIキー、ログイン、認証情報は不要です。XquikのX Reply Scraperが、Xのパスワード、Cookie、トークンを求めることはありません。

### Xの返信をスクレイピングしても合法ですか？

XquikのX Reply Scraperは公開されている返信を収集し、非公開アカウントの保護を回避しません。公開データだけを収集してください。適用される法律&プラットフォームのルールに従ってください。

返信のデータセットには個人データが含まれることがあります。合法的な目的を選んでください。保存期間は最小限にしてください。エクスポートしたデータを保護してください。必要な場合は、削除&開示の請求に応じてください。判断に迷う場合は、資格のある弁護士に相談してください。

### ポストに表示される数より返信が少ないのはなぜですか？

Xがスレッドの一部を隠している場合、Xが隠している返信の数をステータスが示します。`stopCauses` の `reply_reach` は、Xがスレッドの一部しか返さなかったことを示します。フィルター、重複排除、`scope`、`maxDepth` & 指定した上限でも件数は減ります。

### API、スケジュール&連携は使えますか？

はい。[APIタブ](https://apify.com/xquik/x-reply-scraper/api)に、Python、JavaScript & cURLの例があります。Apifyの[スケジュール](https://docs.apify.com/platform/schedules)を使うと、XquikのX Reply Scraperをcronで実行できます。Make、Zapier、n8n & Googleスプレッドシートにもつながります。

### どこでサポートを受けられますか？

実行IDを添えて、[Issuesタブ](https://apify.com/xquik/x-reply-scraper/issues)でissueを開いてください。

### カスタムソリューションを依頼できますか？

はい。必要な内容を[Issuesタブ](https://apify.com/xquik/x-reply-scraper/issues)に書いてください。Xquikは、ダッシュボード、REST API、MCPサーバー & Webhookも提供しています。Xquikのウェブサイトは、Xquikの[Apifyプロフィール](https://apify.com/xquik)にあります。
