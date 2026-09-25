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

Xquikは、最も完全なXデータを備えた、世界最速かつ最安のX(Twitter)スクレイパーサービスです。X Follower Scraperは、フォロワー、フォロー中、リストメンバー、購読者、コミュニティメンバーを収集します。他のApify Actorはすべて、フィルタリングや重複排除の前に課金します。Xquikは、配信済みでユニークかつフィルター条件に一致した結果にのみ課金します。

X(Twitter)のフォロワー、フォロー中、認証済みフォロワー、リストメンバー、リスト購読者、コミュニティメンバーを、**すべてのApifyプランで配信済みプロフィール1件あたり$0.00015から**スクレイピングできます。Apifyはプラットフォーム利用料を別途請求します。Xへのログイン、開始料金、クエリ料金は不要です。

> Xquikは独立した第三者サービスです。X Corpとは提携していません。
> 「Twitter」および「X」はX Corpの商標です。

## 抽出が不完全な場合

抽出が中断されると、無料の `partial` 診断が書き込まれます。取得済みの結果はそのまま保持されます。再試行する前に `availableResults`、`failedTargets`、`retryable`、`nextAction` を確認してください。Actorが正常終了しても、それは配信の完了を意味するだけで、抽出が完全に終わったことを意味しません。

## X Follower Scraperは何をするか

X Follower Scraperは、フォロワー、フォロー中、リスト、コミュニティについて、利用可能な公開プロフィールデータを返します。各行には、そのソースターゲットと関係性が含まれます。

### 基本的な動作

- フィルタリングと重複削除は課金前に実行されます。
- 1回の実行で、ハンドル名、数値ID、URL、短縮パスを受け付けます。
- マージモードでは、共有されたプロフィール、ソース、関係性、`overlapCount` が記録されます。
- 実行ログには、ページごとの所要時間が`fetchDurationMs`、`processingDurationMs`、`pushDurationMs`、`statusDurationMs`、`fullPageDurationMs`として表示されます。
- Apifyが実行を再起動しても、配信済みの行と進捗は保持されます。

## タスクの例

50個の公開タスクから選べます。それぞれに、範囲が定められた入力と、対応するデータセットビューがあります。すべてのタスクは、実際のオーディエンスまたはフィルターから始まります。実行前に編集してください。

- [Discover AI builders in OpenAI followers](https://apify.com/xquik/x-follower-scraper/examples/discover-ai-builders-in-openai-followers)
- [Build an X audience dataset for AI agents](https://apify.com/xquik/x-follower-scraper/examples/build-agent-ready-x-audience-dataset)
- [Collect X audience data for RAG](https://apify.com/xquik/x-follower-scraper/examples/collect-x-audience-data-for-rag)
- [Find AI SEO practitioners on X](https://apify.com/xquik/x-follower-scraper/examples/find-ai-seo-practitioners-on-x)
- [Compare AI brand follower overlap](https://apify.com/xquik/x-follower-scraper/examples/compare-ai-brand-follower-overlap)
- [Export Twitter followers to CSV](https://apify.com/xquik/x-follower-scraper/examples/export-twitter-followers-to-csv)
- [Analyze competitor follower overlap](https://apify.com/xquik/x-follower-scraper/examples/analyze-competitor-follower-overlap)
- [Find micro-influencers in X followers](https://apify.com/xquik/x-follower-scraper/examples/find-micro-influencers-in-followers)
- [Export curated Twitter list members](https://apify.com/xquik/x-follower-scraper/examples/export-curated-twitter-list-members)
- [Analyze public X Community members](https://apify.com/xquik/x-follower-scraper/examples/analyze-public-x-community-members)
- [Collect Community members for AI agents](https://apify.com/xquik/x-follower-scraper/examples/collect-community-members-for-ai-agents)
- [Create repeatable X follower snapshots](https://apify.com/xquik/x-follower-scraper/examples/create-repeatable-follower-snapshots)

### X Follower Scraperが抽出できるデータ

| フィールド         | 説明                                                     |
| ----------------- | ------------------------------------------------------- |
| `id`              | 数値のXユーザーID                                          |
| `username`        | ハンドル名(`@` を除く)                                     |
| `name`            | 表示名                                                    |
| `description`     | 自己紹介テキスト                                            |
| `followers`       | フォロワー数                                               |
| `following`       | フォロー中の数                                              |
| `statusesCount`   | 投稿したポストの合計数                                       |
| `mediaCount`      | アップロードしたメディアの合計数                              |
| `favouritesCount` | いいねした合計数                                            |
| `verified`        | 公開されているBlueまたは従来の認証済みフラグを統合したもの        |
| `verifiedType`    | `blue`、`business`、`government`、または `none`             |
| `location`        | 自己申告の所在地                                            |
| `url`             | プロフィールのウェブサイトURL                                 |
| `profilePicture`  | アバターURL(フルサイズ)                                    |
| `coverPicture`    | バナーURL                                                 |
| `createdAt`       | Xから取得したアカウント作成日時の文字列                        |
| `sourceTarget`    | このプロフィールをスクレイピングした元のハンドル名/ID           |
| `sourceRelation`  | 関係性: `followers`、`following`、`list_members` など        |
| `sourceUrl`       | プロフィールが発見された正確なURL                             |
| `sourceTargets`   | マージモードでこのプロフィールに一致したすべてのターゲット        |
| `sourceRelations` | マージモードでこのプロフィールに一致したすべての関係性            |
| `sourceUrls`      | マージモードでこのプロフィールに一致したすべてのソースURL         |
| `overlapCount`    | マージモードで一致した関係性とターゲットの組み合わせの数          |
| `resultType`      | フルモードおよびrawモードの出力における行のタイプ                |
| `raw`             | Actor固有の整形を行う前の安全なソースプロフィール                |

各行は公開プロフィールの契約に従います。これは、識別情報、各種カウント、認証、利用可否、提携情報、職業データ、自己紹介文をカバーします。ソースの帰属情報、エンティティ、固定ポストのIDは利用可能です。正確なフィールドについてはOpenAPIを参照してください。

安全なソースプロフィールの `raw` コピーを含めるには、`outputMode: "raw"` または `includeRaw: true` を設定してください。コンパクトモードが引き続きデフォルトです。

`verifiedOnly` は、公開されているBlueおよび従来の認証済みプロフィールを受け付けます。ソース側のフラグが矛盾していても、偽の値が真の認証状態を隠すことはありません。

行に閲覧者固有の状態が含まれることはありません。フォロー、ブロック、ミュート、DM、通知などの閲覧者フラグは、rawの出力を含めて常に削除されます。

## Xのフォロワーをスクレイピングする費用はいくらか

すべてのApifyプランで、配信されたプロフィール1件につき `$0.00015` です。Apifyはプラットフォーム利用料を別途請求します。Xquikは、配信されたデータ行ごとに1回課金します。診断情報は `diagnostics` 出力内で無料です。別途Xquikのサブスクリプションは不要です。開始料金もかかりません。各実行では、Apifyがそのactorに公開しているライブのイベント課金価格から計算された `estimatedChargeUsd` を含む `run-report` レコードが書き込まれます。入力なしや無効な入力による終了を含め、すべての結果について `run-report` が書き込まれます。その `version` フィールドは、公開されているActorソースの正確なバージョンを示します。

`failedTargets` は、エラーの後に停止したターゲットの数をカウントします。配信済みのプロフィールは課金対象のデータ行のままです。これらの実行では `completionReason: "partial_failure"` を使用します。

Apifyのデフォルトのタイムアウトは `0` です。実行に時間制限はありません。Actorは、上限に達するかプロフィールがなくなるまで継続します。有限のタイムアウトを設定することもできます。その場合、`completionReason: "deadline_reached"` はその上限が近いことを意味します。Actorは上限の前にプロフィールとレポートを保存し、正常に終了します。配信済みのプロフィールは1回だけ課金されます。

1回の実行で多数のターゲットを読み取れます。上限、重複排除、帰属、課金はすべてのターゲットで正確に保たれます。

- 開始、ターゲット、関係性の選択に、別途のクエリ料金はかかりません。
- フィルター(`minFollowers`、`verifiedOnly`、`bioContains`、`locationContains`、
  `minFollowing`、`maxFollowing`、`minStatuses`、`maxStatuses`、
  `minAccountAgeDays`、`verifiedType`、`usernameContains`、`hasWebsite`、
  `hasLocation`)は、プロフィールがデータセットに入る前に実行されます。
- `dedupeAcrossTargets: true` の場合、Actorは書き込み前に重複を削除します。
- データセットに拒否された行は課金されません。
- 入力なし、無効な入力、出力ゼロの実行では、無料の `diagnostics` 出力に1件の実用的なレコードが書き込まれます。

支出をハードキャップするには、Apify APIで `maxTotalChargeUsd` を設定するか、Consoleで「Max cost per run」を設定してください。Apifyはこの上限を `ACTOR_MAX_TOTAL_CHARGE_USD` としてActorに公開し、Actorはそれを超える行を受け付ける前に停止します。予算の上限が許す限り多くのプロフィールを実行で返すには、`maxItems` を空のままにしてください。予算が許す上限よりも小さい結果上限が必要な場合にのみ、`maxItems` を設定してください。

## X Follower Scraperを使ってフォロワーデータをスクレイピングする方法

### 1. プロフィールまたはリストのURLを貼り付ける

プロフィール、リスト、コミュニティのURLを貼り付けます。スクレイパーは各URLをその関係性にルーティングします。

```json
{
  "startUrls": [
    { "url": "https://x.com/nasa/followers" },
    { "url": "https://x.com/spacex/verified_followers" },
    { "url": "https://x.com/elonmusk/following" },
    { "url": "https://x.com/i/lists/1748648376080666720/members" },
    { "url": "https://x.com/i/communities/1493446837214187523/members" }
  ],
  "maxItems": 5000
}
```

### 2. 一括ハンドル名指定

多数の `/<handle>/followers` ターゲットに対する省略記法です。ユーザー名は `@` の有無を問いません。

```json
{
  "twitterHandles": ["elonmusk", "nasa", "openai"],
  "relation": "followers",
  "maxItems": 1000
}
```

Actorが各ハンドル名に対してスクレイピングする関係を選ぶには、`relation` を `followers`、`following`、または `verified_followers` に設定します。

同じ入力に使えるエイリアスとして、`username`、`usernames`、`user_names` があります。

### 3. 複数の関係性を一度に実行

```json
{
  "usernames": ["nasa"],
  "relations": ["followers", "following"],
  "maxItems": 1000
}
```

`getFollowers`、`getFollowing`、`getVerifiedFollowers`、`getListMembers`、`getListFollowers`、`getCommunityMembers` のような真偽値も使用できます。

### 4. 数値のユーザーID、リストID、コミュニティIDでスクレイピング

```json
{
  "userIds": ["44196397"],
  "listIds": ["1748648376080666720"],
  "communityIds": ["1493446837214187523"],
  "relation": "followers",
  "maxItemsPerTarget": 500,
  "maxItems": 1500
}
```

数値のユーザーIDに使えるエイリアスとして、`twitterUserIds` と `user_ids` があります。

`relation` は数値のユーザーIDに適用されます。リストIDはデフォルトでメンバーを対象とします。コミュニティIDは常にメンバーを使用します。`maxItemsPerTarget` は、最初の大きなターゲットが全体の上限を消費してしまうことを防ぎます。

### 5. 課金前にフィルタリングする

フィルターを適用して、一致するプロフィールだけをデータセットに入れます。

```json
{
  "twitterHandles": ["openai"],
  "relation": "followers",
  "minFollowers": 1000,
  "verifiedOnly": true,
  "verifiedType": "business",
  "minStatuses": 100,
  "usernameContains": "ai",
  "bioContains": "founder, CEO",
  "locationContains": "San Francisco",
  "maxItems": 500
}
```

Actorは、書き込む数よりも多くのプロフィールを調べる場合があります。課金対象となるのは、すべてのフィルターを通過してデータセットに入った行のみです。

`bioContains` の候補は、カンマまたは改行で区切ってください。プロフィールの自己紹介に、指定した用語のいずれかが含まれていれば一致とみなされます。大文字と小文字は区別されません。

### 6. オーディエンスの重複を調べる

競合、リスト、コミュニティ、関係性のタイプを比較するには、マージモードを使用します。

```json
{
  "twitterHandles": ["openai", "anthropicai", "GoogleDeepMind"],
  "relation": "followers",
  "dedupeMode": "merge",
  "maxItemsPerTarget": 5000,
  "maxItems": 15000
}
```

出力には、一意のプロフィールごとに1行が含まれます。共有されているプロフィールには、`sourceTargets`、`sourceRelations`、`sourceUrls`、`sourceTargetKeys`、`overlapCount` が含まれるため、重複度で並べ替えたり、そのままCSVにエクスポートしたりできます。すべてのターゲットが行を提供できるよう、`maxItems` は十分に大きく保ってください。アカウントごとの深さを制御するには `maxItemsPerTarget` を使用してください。

### 対応するURLの形式

| URL                                         | 関係性                                       |
| ------------------------------------------- | -------------------------------------------- |
| `https://x.com/<handle>/followers`          | `followers`                                  |
| `https://x.com/<handle>/verified_followers` | `verified_followers`                         |
| `https://x.com/<handle>/following`          | `following`                                  |
| `https://x.com/<handle>`                    | デフォルトの `relation`(未設定時はfollowers)   |
| `https://x.com/i/lists/<id>/members`        | `list_members`                               |
| `https://x.com/i/lists/<id>/followers`      | `list_followers`                             |
| `https://x.com/i/lists/<id>`                | `list_members`                               |
| `https://x.com/i/communities/<id>/members`  | `community_members`                          |
| `https://x.com/i/communities/<id>`          | `community_members`                          |
| `<handle>/followers`                        | `followers`                                  |
| `<handle>/following`                        | `following`                                  |
| `<handle>/verified_followers`               | `verified_followers`                         |
| `lists/<id>/members`                        | `list_members`                               |
| `lists/<id>/followers`                      | `list_followers`                             |
| `communities/<id>/members`                  | `community_members`                          |

`twitter.com` と `mobile.twitter.com` も、あらゆる箇所で受け付けられます。

## 入力

利用可能なオプションの完全な一覧は **Input** タブを参照してください。すべてのフィールドは任意ですが、`startUrls`、`twitterHandles`、`userIds`、`listIds`、`communityIds`、またはそれらの記載されたエイリアスのうち、少なくとも1つは必要です。

例:

- 競合のハンドル名を `relation: "followers"` とともに `twitterHandles` に追加する。
- 認証済みプロフィールを取得するために、`https://x.com/<handle>/verified_followers` をStart URLsに貼り付ける。
- リストのメンバーを監査するために、リストのURLをStart URLsに貼り付ける。
- ハンドル名を2件以上追加する。最初に一致したプロフィール行だけを保持するには `dedupeMode: "first"` を設定し、一致したすべてのソースターゲットを持つ1行を保持するには `dedupeMode: "merge"` を使用する。

### ConsoleとAPIの入力UX

Consoleでは、次のコントロールが提供されます。

- Start URLsフィールドは、URL文字列または `{ "url": "..." }` オブジェクトを受け付けます。そのJSONエディターは、両方のAPI形式を保持します。
- Relation、Output Mode、Dedupe Modeは、検証済みの選択項目です。
- Relationsは、複数の関係性を一度に実行するための検証済みの複数選択項目です。
- 結果件数の上限は、1以上の整数を受け付けます。
- 数値のプロフィールフィルターは、0以上の整数を受け付けます。

新しい連携では、正規のフィールドを使用してください。互換性のためのエイリアスは、JSON、API、SDK、自動化、タスクの入力で引き続き利用できます。これには、Output Modeのエイリアスとしての `outputVariant` と `includeRaw` が含まれます。また、Dedupe Modeのエイリアスとしての `dedupeAcrossTargets` も含まれます。ビジュアルフォームは、正規のコントロールと重複するエイリアスを非表示にします。既存のJSONおよび保存済みタスクの入力は、現在の動作を維持します。

### 別のフォロワーActorから移行する

すでに使っている入力をそのまま貼り付けてください。X Follower Scraperは、他のXフォロワーActorが使うフィールド名を読み取り、自身のフィールドに対応付けます。正規の名前は、引き続きドキュメント上のデフォルトです。エイリアスがフィールドを落とすことはなく、支払う金額を変えることもありません。

| すでに使っているフィールド                                                              | X Follower Scraperでの読み取り先 |
| ------------------------------------------------------------------------------------- | ------------------------------ |
| `twitterHandles`, `usernames`, `user_names`, `handles`, `userNameList`, `screenNames` | `twitterHandles`               |
| `username`, `handle`, `screenName`（1つの文字列として）                                  | `twitterHandles`               |
| `twitterUserIds`, `user_ids`, `userIdList`                                            | `userIds`                      |
| `user_id`, `userId`（1つの文字列として）                                                 | `userIds`                      |
| `startUrls`, `urls`, `targets`, `profileUrls`, `accountUrls`                          | `startUrls`                    |
| `profileUrl`（1つの文字列として）                                                        | `startUrls`                    |
| `getFollowers`, `getFollowing`                                                        | `relations`                    |
| `type` に `followers` または `following` を指定                                         | `relation`                     |
| `maxResults`, `max_results`, `resultsLimit`, `count`                                  | `maxItems`                     |
| `scrapeAllResults`                                                                    | ターゲットごとの上限なし          |

2つの名前は、ここでは別の意味を持ちます。一部のActorでは、`maxFollowers` と `maxFollowing` は実行が取得する行数の上限です。X Follower Scraperでは、これらはフォロワー数とフォロー中の数でプロフィールをフィルタリングします。行数を制限するには `maxItems` を使用してください。X Follower Scraperにはページという単位がないため、`maxPages` は `maxItems` に置き換えてください。

### 常に最新のビルドを使用する

Storeでの実行は、Actorの `latest` ビルド設定を使用します。APIクライアントは、ビルドの上書きを省略するか、`build=latest` を渡してください。古いビルドを固定しているタスクや連携は更新してください。固定されたビルドは自動的には移行しません。

## 出力

各プロフィールはJSONオブジェクトです。コンパクトモードは、正規化された公開フィールド、スキーマバージョンのフィールド、利用可能な場合のソースメタデータを返します。

データセットとRun Reportのスキーマは、返されるすべてのフィールドを記述します。プリミティブなフィールドには、エージェントや生成された連携のための例も含まれます。

サンプル値は例示のためのものです。レスポンスは実行時のソースデータを反映します。

```json
{
  "schemaVersion": 1,
  "_schema_version": 1,
  "id": "44196397",
  "username": "elonmusk",
  "name": "Elon Musk",
  "description": "...",
  "followers": 180000000,
  "following": 500,
  "statusesCount": 42000,
  "mediaCount": 3200,
  "favouritesCount": 120000,
  "verified": true,
  "verifiedType": "blue",
  "location": "...",
  "url": "https://...",
  "profilePicture": "https://...",
  "coverPicture": "https://...",
  "createdAt": "Tue Jun 02 20:12:29 +0000 2009",
  "sourceTarget": "nasa",
  "sourceRelation": "followers",
  "sourceUrl": "https://x.com/nasa/followers"
}
```

マージ重複排除モードでは、重複に関するフィールドが追加されます。

```json
{
  "schemaVersion": 1,
  "_schema_version": 1,
  "id": "44196397",
  "username": "elonmusk",
  "sourceTargets": ["nasa", "spacex"],
  "sourceRelations": ["followers"],
  "sourceUrls": [
    "https://x.com/nasa/followers",
    "https://x.com/spacex/followers"
  ],
  "sourceTargetKeys": ["followers:nasa", "followers:spacex"],
  "overlapCount": 2
}
```

Apifyのデータセットから、JSON、CSV、Excel、HTMLとしてエクスポートできます。

## 実行オプション

- Apifyの最大合計課金額を設定して、実行コストに上限を設けます。その予算内で最大件数の行を得るには `maxItems` を空のままにし、より少ないプロフィール数にしたい場合は `maxItems` と `maxItemsPerTarget` を設定します。
- `minFollowers`、`verifiedOnly`、`verifiedType`、`minStatuses`、`usernameContains`、`bioContains`、`locationContains`、`hasWebsite`、`hasLocation` を組み合わせて、課金対象のデータセットを絞り込みます。
- 複数の競合ハンドル名をスクレイピングする際に、全ターゲットを通じて一意のプロフィールのみを得るには `dedupeMode: "first"` を設定します。
- 一致したすべてのソースターゲットを添付した、プロフィールごとに1行を得るには `dedupeMode: "merge"` を設定します。
- 利用可能な場合に、固定ポストのID、エンティティ、プロフィールのメタデータなどの任意のプロフィールフィールドを得るには `outputMode: "full"` を設定します。
- 正規化されたフィールドとともに、サニタイズされた `raw` オブジェクトを含めるには `outputMode: "raw"` または `includeRaw: true` を設定します。
- Actorの繰り返し実行をスケジュールし、各データセットを保存してプロフィールIDを比較します。Xquikのモニターは、対応するポストおよびプロフィールのイベントを発行しますが、フォロワーリストの変更は発行しません。

## ユースケース

- リード調査のために、競合のフォロワーをエクスポートする。
- 自社アカウント、競合、著名人のオーディエンスを比較する。
- フォロワー数と認証状態でフィルタリングし、一致するプロフィールを見つける。
- 関連するXコミュニティのメンバーをエクスポートする。
- 研究のために、公開されているソーシャルネットワークのデータセットを構築する。
- 自己紹介のキーワード、所在地、プロフィールタイプでフォロワー層をセグメント分けする。

## データの取り扱いに関する責任

Actorは公開されているXのプロフィールフィールドをリクエストします。結果には、自己申告の所在地を含む個人データが含まれる場合があります。正当な目的を確認し、適用されるプライバシー規則に従ってください。不明な点がある場合は、資格のある弁護士に相談してください。

## 関連するXquik Actor

すべてのXquik Actorは、同じ抽出エンジン、フィルター優先の課金、診断機能を共有しています。必要なデータに合ったものを選んでください。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): 検索、プロフィールのタイムライン、リスト、Tweet IDから、50以上のフィルターとフラットなエクスポートでポストをスクレイピングします。分析なしでポストデータが必要なときに使用します。1行あたり$0.00015から。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): ハンドル、ID、URLからプロフィールとそのポスト、リプライ、メディア、フォロワーをスクレイピングします。検索ではなくアカウントから始めるときに使用してください。1行あたり$0.00015から。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): 25以上のフィルターで、投稿へのリプライ、コメント、会話全体をスクレイピングします。ポストの下にある議論が必要なときに使用します。1行あたり$0.00015から。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): ポストのURLまたはIDから、リプライ、引用ポスト、リポストしたユーザー、スレッドを一括でスクレイピングします。誰がポストにエンゲージしたかを測定するときに使用してください。1行あたり$0.00015から。
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
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier): AIですべてのポストに対して、独自のカテゴリー、スコア、はい/いいえの質問に答えます。既定の分析があなたのラベルに合わないときに使用します。分析済みポスト1件あたり$0.0003から。
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer): AIによる8つの特性への回答から、すべてのポストについて0から100のViral Scoreと判定を推定します。ポストが広がる理由や伸びない理由を調べるときに使用してください。分析済みポスト1件あたり$0.0003から。

## スクレイピング以外にも必要ですか?

Xquikは、47個のダッシュボードツール、129個のREST操作、署名付きWebhook、MCPサーバーも提供しています。

- [API documentation](https://docs.xquik.com/introduction): REST APIガイド
- [Followers API](https://docs.xquik.com/api-reference/x/followers): アカウントの利用可能なフォロワーを取得する
- [Following API](https://docs.xquik.com/api-reference/x/following): あるユーザーがフォローしている相手を取得する
- [List Members API](https://docs.xquik.com/api-reference/x/list-members): 公開Xリストのメンバーをエクスポートする
- [MCP server](https://docs.xquik.com/mcp/overview): 対応するJSONまたはテキスト操作を発見して実行する
- [Webhooks](https://docs.xquik.com/webhooks/overview): 対応するポストおよびプロフィールのイベントを受信する

## よくある質問

**X APIキーは必要ですか?** いいえ。X APIキー、ログイン、認証情報はいずれも不要です。

**実行を制限するものは何ですか?** リクエストしたアイテム数の上限とApifyの支出上限が実行を停止させます。Apifyのアカウントおよびプラットフォームの制限も適用されます。

**速度はどれくらいですか?** 実行時間は、ターゲットの規模、フィルター、Xの可用性によって異なります。

**実行の結果が`maxItems`より少ないのはなぜですか?** `minFollowers`、`verifiedOnly`、`bioContains` などのフィルターは書き込み前に適用されます。より多くの結果を得るには、フィルターを緩めてください。

**1つのアカウントから何人のフォロワーをスクレイピングできますか?** Xがそのアカウントについて表示する分だけ取得できます。実行は、上限、支出上限、リストの終わりのいずれかに達するまで続きます。`maxItemsPerTarget` は各ターゲットの上限のみを設定します。

**Actorは一時的な失敗を再試行しますか?** はい。Xの一時的なエラーからは自動で回復します。深刻な失敗が起きても、部分的な結果は保持されます。

**Apifyの実行時間制限が近づくと何が起きますか?** Actorは、それより短い独自の期限を追加しません。上限の前にプロフィールを保存し、レポートを書き込んで終了します。データセットに届かなかった行は課金されません。

**中断した箇所から再開できますか?** まだできません。同じターゲットを再実行すると、最初から開始します。

**このActorを実行するのにApify APIを使えますか?** はい。Python、JavaScript、cURLの例については、[APIタブ](https://apify.com/xquik/x-follower-scraper/api)を参照してください。

**定期的なスクレイピングをスケジュールできますか?** はい。Apify組み込みの[スケジュール機能](https://docs.apify.com/platform/schedules)を使って、このActorをcronで実行してください。保存したデータセットを比較して、フォロワーの変化を見つけられます。

**問題はどこで報告すればよいですか?** このActorのページにあるIssuesタブを使用してください。

**APIドキュメントはどこにありますか?** [APIドキュメント](https://docs.xquik.com/introduction)を参照してください。
