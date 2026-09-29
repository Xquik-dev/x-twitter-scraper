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

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。XquikのX Follower Scraperは、フォロワー、フォロー中、リストのメンバー、購読者、コミュニティのメンバーを収集します。公開ベンチマークで、10のフォロワー用Actorの中で最も安く、最も速いことが実証されています。[下のベンチマーク](#ベンチマーク)のとおり、1行あたりのフィールド数（`outputMode: "full"`）は他のActorの中央値の2.5倍です。他のApify Actorの多くは、フィルタリングや重複排除の前に課金します。Xquikが課金するのは、配信した結果のうち、重複がなくフィルター条件に合うものだけです。

X(Twitter)のフォロワー、フォロー中、認証済みフォロワー、リストのメンバー、リストの購読者、コミュニティのメンバーをスクレイピングします。XquikのX Follower Scraperの料金は、**すべてのApifyプランで配信されたプロフィール1件あたり$0.00015から**です。Apifyのプラットフォーム利用料は別途かかります。Xへのログインは不要で、Xquikの開始料金もクエリ料金もかかりません。

> Xquikは独立したサードパーティサービスです。X Corpとは提携していません。
> 「Twitter」および「X」はX Corpの商標です。

## X Follower Scraperでできること

XquikのX Follower Scraperは、フォロワー、フォロー中、リスト、コミュニティについて、取得できる公開プロフィールデータを返します。各行には、元の対象と関係の種類が入ります。

### 基本の動作

- フィルターと重複排除は課金前に行います。
- デフォルトでは、複数の対象に共通するプロフィールは1回だけ出力され、課金も1回です。
- 1回の実行で、ユーザー名、数値ID、URL、短いパスを受け付けます。
- マージモードは、共通のプロフィール、元の対象、関係、`overlapCount` を記録します。
- 実行ログには、ページごとの所要時間が `fetchDurationMs`、`processingDurationMs`、`pushDurationMs`、`statusDurationMs`、`fullPageDurationMs` に表示されます。
- Apifyが実行を再起動しても、配信済みの行と進捗は残ります。

### X Follower Scraperが抽出できるデータ

| フィールド        | 説明                                                    |
| ----------------- | ------------------------------------------------------- |
| `id`              | 数値のXユーザーID                                       |
| `username`        | ユーザー名（`@` なし）                                  |
| `name`            | 表示名                                                  |
| `description`     | 自己紹介のテキスト                                      |
| `followers`       | フォロワー数                                            |
| `following`       | フォロー中の数                                          |
| `statusesCount`   | ポストの合計数                                          |
| `mediaCount`      | アップロードしたメディアの合計数                        |
| `favouritesCount` | いいねの合計数                                          |
| `verified`        | 公開のBlue認証と従来の認証をまとめたフラグ              |
| `verifiedType`    | `blue`、`business`、`government`、`none` のいずれか     |
| `location`        | 本人が入力した所在地                                    |
| `url`             | プロフィールのウェブサイトURL                           |
| `profilePicture`  | プロフィール画像のURL（フルサイズ）                     |
| `coverPicture`    | ヘッダー画像のURL                                       |
| `createdAt`       | Xのアカウント作成日時の文字列                           |
| `sourceTarget`    | このプロフィールを取得した元のユーザー名またはID        |
| `sourceRelation`  | `followers`、`following`、`list_members` などの関係     |
| `sourceUrl`       | プロフィールを見つけた正確なURL                         |
| `sourceTargets`   | マージモードでこのプロフィールに一致したすべての対象    |
| `sourceRelations` | マージモードでこのプロフィールに一致したすべての関係    |
| `sourceUrls`      | マージモードでこのプロフィールに一致したすべての元URL   |
| `overlapCount`    | マージモードで一致した関係と対象の組の数                |
| `resultType`      | フル出力モードとraw出力モードでの行の種類               |
| `raw`             | Actor独自の整形を加える前の、安全な元のプロフィール     |

行は公開プロフィールの仕様に従います。本人を識別する情報、各種カウント、認証、表示可否、関連アカウント、プロフェッショナル情報、自己紹介を含みます。元の対象の帰属情報、エンティティ、固定ポストのIDも取得できます。正確なフィールドはOpenAPIを参照してください。

`raw` フィールドを加えるには、`outputMode: "raw"` か `includeRaw: true` を設定します。このフィールドには、元のプロフィールの安全なコピーが入ります。デフォルトはコンパクトモードです。

`verifiedOnly` は、公開のBlue認証と従来の認証のプロフィールを通します。元のフラグが食い違う場合は、認証済みを示すフラグを優先します。

行には、閲覧者だけに見える状態は入りません。Xquikは、フォロー、ブロック、ミュート、DM、通知などの閲覧者のフラグを削除します。raw出力からも削除します。

## ユースケース

- プロフィールごとにより多くのフィールドを使い、リードを補完し、調査用データセットを作る。当社の中央値の行（`outputMode: "full"`）は、2026-09-29に38個のフィールドがありました。これは他の9個のActorの中央値の2.5倍です。
- 競合のフォロワーをエクスポートして、見込み客を調べられます。
- 自社アカウント、競合、著名人のオーディエンスを比べられます。
- フォロワー数と認証で絞り込み、条件に合うプロフィールを見つけられます。
- Xのコミュニティのメンバーをエクスポートできます。
- 研究用に、公開のソーシャルネットワークのデータセットを作れます。
- 自己紹介のキーワード、所在地、プロフィールの種類で、フォロワー層を分けられます。

## X Follower Scraperでフォロワーデータをスクレイピングする方法

1. Apify ConsoleでXquikのX Follower Scraperを開きます。
2. プロフィール、リスト、コミュニティのURL、Xのユーザー名、数値IDを追加します。
3. `followers` や `verified_followers` などの関係を選びます。
4. `maxItems` と、必要なプロフィールのフィルターを設定します。
5. 実行を開始します。
6. データセットをJSON、CSV、Excel、HTMLでエクスポートします。

以下の入力で、よくある用途を扱えます。

### プロフィールやリストのURLを貼り付ける

プロフィール、リスト、コミュニティのURLを貼り付けます。スクレイピングする関係は、URLごとに決まります。

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

### ユーザー名を一括指定する

`twitterHandles` は、多数の `/<handle>/followers` の対象をまとめて書く方法です。ユーザー名には `@` を付けても付けなくてもかまいません。

```json
{
  "twitterHandles": ["elonmusk", "nasa", "openai"],
  "relation": "followers",
  "maxItems": 1000
}
```

`relation` で、各ユーザー名について何をスクレイピングするかを決めます。`followers`、`following`、`verified_followers` のいずれかを使います。

同じ入力は、別名の `username`、`usernames`、`user_names` も受け付けます。

### 複数の関係をまとめて取得する

同じユーザー名について複数の関係を読み取るには、`relations` を設定します。

```json
{
  "usernames": ["nasa"],
  "relations": ["followers", "following"],
  "maxItems": 1000
}
```

`getFollowers`、`getFollowing`、`getVerifiedFollowers`、`getListMembers`、`getListFollowers`、`getCommunityMembers` などの真偽値も使えます。

### 数値のユーザーID、リストID、コミュニティIDでスクレイピングする

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

数値のユーザーIDには、別名の `twitterUserIds` と `user_ids` も使えます。

`relation` は数値のユーザーIDに適用されます。リストIDのデフォルトはメンバーです。コミュニティIDでは常にメンバーを取得します。`maxItemsPerTarget` を使うと、最初の大きな対象が `maxItems` を使い切るのを防げます。

### 支払う前に絞り込む

フィルターを追加すると、条件に合うプロフィールだけがデータセットに入ります。

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

このActorは、書き込む数より多くのプロフィールを調べることがあります。支払うのは、すべてのフィルターを通ってデータセットに入った行の分だけです。

`bioContains` の候補は、カンマか改行で区切ります。自己紹介に指定した語のどれかが含まれていれば、そのプロフィールは条件を満たします。大文字と小文字は区別しません。

### オーディエンスの重なりを調べる

競合、リスト、コミュニティ、関係の種類を比べるには、マージモードを使います。

```json
{
  "twitterHandles": ["openai", "anthropicai", "GoogleDeepMind"],
  "relation": "followers",
  "dedupeMode": "merge",
  "maxItemsPerTarget": 5000,
  "maxItems": 15000
}
```

出力は、重複のないプロフィールごとに1行です。共通のプロフィールには、`sourceTargets`、`sourceRelations`、`sourceUrls`、`sourceTargetKeys`、`overlapCount` が入ります。`overlapCount` で並べ替えたり、行をCSVにエクスポートしたりできます。すべての対象が行を追加できるよう、`maxItems` は十分に大きくしてください。アカウントごとの取得件数は `maxItemsPerTarget` で決めます。

### 対応するURLの形式

| URL                                         | 関係                                    |
| ------------------------------------------- | --------------------------------------- |
| `https://x.com/<handle>/followers`          | `followers`                             |
| `https://x.com/<handle>/verified_followers` | `verified_followers`                    |
| `https://x.com/<handle>/following`          | `following`                             |
| `https://x.com/<handle>`                    | デフォルトの `relation`（未設定ならfollowers） |
| `https://x.com/i/lists/<id>/members`        | `list_members`                          |
| `https://x.com/i/lists/<id>/followers`      | `list_followers`                        |
| `https://x.com/i/lists/<id>`                | `list_members`                          |
| `https://x.com/i/communities/<id>/members`  | `community_members`                     |
| `https://x.com/i/communities/<id>`          | `community_members`                     |
| `<handle>/followers`                        | `followers`                             |
| `<handle>/following`                        | `following`                             |
| `<handle>/verified_followers`               | `verified_followers`                    |
| `lists/<id>/members`                        | `list_members`                          |
| `lists/<id>/followers`                      | `list_followers`                        |
| `communities/<id>/members`                  | `community_members`                     |

`twitter.com` と `mobile.twitter.com` のURLも、すべての箇所で使えます。`x.com/nasa` のように `https://` のないURLも使えます。

## タスクの例

50個の公開タスクから選べます。どのタスクにも、上限を決めた入力と、対応するデータセットビューがあります。どのタスクも、実際のオーディエンスやフィルターで始まります。実行前に編集してください。

- [OpenAIのフォロワーからAIの開発者を見つける](https://apify.com/xquik/x-follower-scraper/examples/discover-ai-builders-in-openai-followers)
- [AIエージェント向けにXのオーディエンスデータセットを作る](https://apify.com/xquik/x-follower-scraper/examples/build-agent-ready-x-audience-dataset)
- [RAG用にXのオーディエンスデータを集める](https://apify.com/xquik/x-follower-scraper/examples/collect-x-audience-data-for-rag)
- [XでAI SEOの実践者を見つける](https://apify.com/xquik/x-follower-scraper/examples/find-ai-seo-practitioners-on-x)
- [AIブランドのフォロワーの重なりを比べる](https://apify.com/xquik/x-follower-scraper/examples/compare-ai-brand-follower-overlap)
- [TwitterのフォロワーをCSVにエクスポートする](https://apify.com/xquik/x-follower-scraper/examples/export-twitter-followers-to-csv)
- [競合のフォロワーの重なりを分析する](https://apify.com/xquik/x-follower-scraper/examples/analyze-competitor-follower-overlap)
- [Xのフォロワーからマイクロインフルエンサーを見つける](https://apify.com/xquik/x-follower-scraper/examples/find-micro-influencers-in-followers)
- [厳選されたTwitterリストのメンバーをエクスポートする](https://apify.com/xquik/x-follower-scraper/examples/export-curated-twitter-list-members)
- [Xの公開コミュニティのメンバーを分析する](https://apify.com/xquik/x-follower-scraper/examples/analyze-public-x-community-members)
- [AIエージェント向けにコミュニティのメンバーを集める](https://apify.com/xquik/x-follower-scraper/examples/collect-community-members-for-ai-agents)
- [繰り返し取れるXフォロワーのスナップショットを作る](https://apify.com/xquik/x-follower-scraper/examples/create-repeatable-follower-snapshots)

## Xのフォロワーのスクレイピングにかかる費用は？

XquikのX Follower Scraperは、すべてのApifyプランで配信されたプロフィール1件につき$0.00015です。Apifyのプラットフォーム利用料は別途かかります。Xquikの課金は、配信したデータ行1件につき1回です。Xquikのサブスクリプションは別途必要なく、開始料金もかかりません。開始、対象、関係の選択に、別のクエリ料金はかかりません。

1回の実行で多数の対象を読み取れます。上限、重複排除、帰属情報、課金は、すべての対象で正確に保たれます。

- フィルターはプロフィールがデータセットに入る前に適用されるので、除かれた行に料金はかかりません。
- 数値のフィルターは `minFollowers`、`maxFollowers`、`minFollowing`、`maxFollowing`、`minStatuses`、`maxStatuses`、`minAccountAgeDays` です。
- プロフィールのフィルターは `verifiedOnly`、`verifiedType`、`bioContains`、`locationContains`、`usernameContains`、`hasWebsite`、`hasLocation` です。
- Actorは、書き込む前に対象間の重複を除きます。重複を残すには `dedupeAcrossTargets: false` を設定します。
- データセットが受け付けなかった行に、Xquikが課金することはありません。
- 診断情報は `diagnostics` 出力で無料です。
- 入力なし、無効な入力、出力0件の実行は、無料の `diagnostics` 出力に、次の行動を示すレコードを1件書き込みます。

問題が起きた実行と大規模な実行は、`run-report` レコードも書き込みます。その `estimatedChargeUsd` には、ApifyがActorに渡す現在のイベント課金の価格を使います。問題なく終わった小規模な実行は書き込まず、Apifyの利用料を節約します。毎回書き込むには `alwaysSaveRunRecords` をオンにしてください。

## ベンチマーク

XquikのX Follower Scraperは、コストと速度で他の9つのフォロワー用Actorを上回りました。1行あたりのフィールド数の中央値（`outputMode: "full"`）は38で、他のActorの中央値の2.5倍でした。

| Actor                                                  | 有効なプロフィール | 有効なプロフィール1件あたりのコスト | 1秒あたりの有効なプロフィール | 1行あたりのフィールド数 | 公開された実行                                                                                                                                                                                 |
| ------------------------------------------------------ | -----------------: | ----------------------------------: | ----------------------------: | ----------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| xquik/x-follower-scraper                               |              1,000 |                           $0.000155 |                         100.0 |                      38 | [実行を見る](https://console.apify.com/view/runs/z5ELS2u5sgjuhAFHN)                                                                                                                            |
| xquik/x-follower-scraper                               |              1,000 |                           $0.000155 |                          77.9 |                      38 | [実行を見る](https://console.apify.com/view/runs/Htim4jqodU6ZPjQiQ)                                                                                                                            |
| b2b_leads/X-Real-Time-Data                             |                286 |                           $0.000388 |                           3.1 |                      21 | [実行を見る](https://console.apify.com/view/runs/IkQButA6cVz4ys4GM)                                                                                                                            |
| kaitoeasyapi/premium-x-follower-scraper-following-data |                356 |                           $0.000506 |                          21.9 |                      50 | [実行を見る](https://console.apify.com/view/runs/cJgj15HLBA50LEUf0)                                                                                                                            |
| api-ninja/x-twitter-followers-scraper                  |                350 |                           $0.000809 |                           7.0 |                       8 | [実行を見る](https://console.apify.com/view/runs/XjJ4UPKAILSz0Droz)                                                                                                                            |
| altimis/scweet                                         |                332 |                           $0.000922 |                           1.1 |                      21 | [実行を見る](https://console.apify.com/view/runs/qVGvT7TPAJEHCuR42)                                                                                                                            |
| apidojo/twitter-user-scraper                           |                323 |                           $0.001160 |                           7.3 |                      25 | [実行を見る](https://console.apify.com/view/runs/Xnf7rh8jK6764gP1f)                                                                                                                            |
| atomus/twitter-scraper                                 |                323 |                           $0.001272 |                           6.2 |                      13 | [実行を見る](https://console.apify.com/view/runs/MWz1l0cTcfPcEnaiH)                                                                                                                            |
| practicaltools/cheap-simple-twitter-api                |                283 |                           $0.002036 |                           6.5 |                       4 | [実行1](https://console.apify.com/view/runs/Zhvi7LsfpHdQNKcGb), [実行2](https://console.apify.com/view/runs/IsJj4fa8pFUG7uhlK), [実行3](https://console.apify.com/view/runs/2W7n8fpEqoxiXq6oX) |
| maximedupre/twitter-scraper                            |                320 |                           $0.002192 |                           2.1 |                      15 | [実行1](https://console.apify.com/view/runs/HblUkhgI2svp1LBGs), [実行2](https://console.apify.com/view/runs/37yQFzgydzJoWfa39), [実行3](https://console.apify.com/view/runs/mtBoKcocaM4BUzZmm) |
| seemuapps/x-followers-following-scraper                |                286 |                           $0.003504 |                           3.9 |                       9 | [実行1](https://console.apify.com/view/runs/1r3je034X2qhFGgLj), [実行2](https://console.apify.com/view/runs/dc4ztVP3n2eemgiNQ), [実行3](https://console.apify.com/view/runs/gWPiBT00G7D9IJ0Cj) |

各Actorは、NASA、SpaceX、esaのフォロワーを読み取りました。他のActorは2026-09-28に、Xquikの実行は2026-09-29に`outputMode: "full"`で実行しました。すべての実行でBronzeティアを使いました。有効なプロフィールとは、作成から30日以上で、フォロワーとポストが1件以上あるユニークなプロフィールです。コストは、有効なプロフィール1件あたりの顧客の総支払額です。当社のコストには、お客様が支払うApify使用料を含みます。3回の実行がある行は、それらを合計しています。1行あたりのフィールド数は、空でないフィールド数の中央値で、ネストされたフィールドも含みます。リストは1フィールドとして数えます。実行を開くと、入力、ログ、データセットを確認できます。

## 入力

Inputタブにすべてのオプションがあります。`startUrls`、`twitterHandles`、`userIds`、`listIds`、`communityIds` のうち、少なくとも1つを追加してください。ドキュメントに記載された別名でもかまいません。ほかのフィールドはすべて任意です。

次の入力を試してください。

- 競合のユーザー名を `twitterHandles` に追加し、`relation: "followers"` を指定します。
- 認証済みのプロフィールを取得するには、`https://x.com/<handle>/verified_followers` をStart URLsに貼り付けます。
- リストのメンバーを確認するには、リストのURLをStart URLsに貼り付けます。
- ユーザー名を2つ以上追加します。共通のプロフィールは、最初の対象の下に1回だけ出力されます。一致したすべての対象を持つ1行を残すには、`dedupeMode: "merge"` を使います。対象ごとに1行を残すには、`dedupeAcrossTargets: false` を設定します。

### ConsoleとAPIの入力

Consoleのフォームには次のコントロールがあります。

- Start URLsフィールドは、URLの文字列か `{ "url": "..." }` オブジェクトを受け付けます。そのJSONエディターは、両方のAPI形式を保ちます。
- Relation、Output Mode、Dedupe Modeは、選択肢が決まった選択リストです。
- Relationsは、複数の関係を取得するための複数選択リストです。
- 結果の上限には、1以上の整数を指定できます。
- 数値のプロフィールフィルターには、0以上の整数を指定できます。

新しい連携では正規のフィールドを使ってください。別名は、JSON、API、SDK、自動化、タスクの入力で引き続き使えます。`outputVariant` と `includeRaw` はOutput Modeの別名です。`dedupeAcrossTargets` はDedupe Modeの別名です。ビジュアルフォームは、正規のコントロールと重複する別名を表示しません。別名を使った既存のJSONや保存済みタスクの入力は、そのまま動きます。`dedupeAcrossTargets: false` か `dedupeMode: "none"` を含む保存済みの入力は、対象ごとに1行を残します。

### 他のフォロワー用Actorから移行する

今使っている入力をそのまま貼り付けてください。XquikのX Follower Scraperは、他のXフォロワー用Actorのフィールド名を読み取ります。そして、自身のフィールドに対応付けます。ドキュメント上のデフォルトは、引き続き正規の名前です。別名のせいでフィールドが失われたり、料金が変わったりすることはありません。

| すでに使っているフィールド                                                            | Xquikでの読み取り先 |
| ------------------------------------------------------------------------------------- | ------------------- |
| `twitterHandles`, `usernames`, `user_names`, `handles`, `userNameList`, `screenNames` | `twitterHandles`    |
| `username`, `handle`, `screenName`（1つの文字列として）                               | `twitterHandles`    |
| `twitterUserIds`, `user_ids`, `userIdList`                                            | `userIds`           |
| `user_id`, `userId`（1つの文字列として）                                              | `userIds`           |
| `startUrls`, `urls`, `targets`, `profileUrls`, `accountUrls`                          | `startUrls`         |
| `profileUrl`（1つの文字列として）                                                     | `startUrls`         |
| `getFollowers`, `getFollowing`                                                        | `relations`         |
| `followers` か `following` を指定した `type`                                          | `relation`          |
| `maxResults`, `max_results`, `resultsLimit`, `count`                                  | `maxItems`          |
| `scrapeAllResults`                                                                    | 対象ごとの上限なし  |

2つの名前は、ここでは意味が異なります。一部のActorでは、`maxFollowers` と `maxFollowing` は実行が返す行数の上限です。XquikのX Follower Scraperでは、フォロワー数とフォロー中の数でプロフィールを絞り込むフィルターです。行数の上限には `maxItems` を使ってください。このActorにはページという単位がないので、`maxPages` は `maxItems` に置き換えてください。

### 常に最新のビルドを使う

Storeからの実行では、XquikのX Follower Scraperの `latest` ビルドを使います。API呼び出しでは、ビルドの指定を省くか、`build=latest` を渡してください。古いビルドを固定しているタスクと連携は更新してください。固定したビルドが自動で切り替わることはありません。

## 出力

各プロフィールは1つのJSONオブジェクトです。コンパクトモードは、正規化した公開フィールド、スキーマのバージョンのフィールド、取得できる場合は元のメタデータを返します。

データセットと実行レポートのスキーマは、返すすべてのフィールドを説明します。プリミティブなフィールドには、エージェントや自動生成された連携のための例も付きます。

以下のサンプル値は説明用です。実際の行には、実行時点のライブデータが入ります。コンパクトな行は次のようになります。

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

重複排除のマージモードでは、重なりのフィールドが加わります。

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

ApifyのデータセットはJSON、CSV、Excel、HTMLでエクスポートできます。

## 実行オプション

支出に上限をかけるには、Apify APIで `maxTotalChargeUsd` を設定します。Consoleでは、同じ上限をMax cost per runで設定します。Apifyはその上限を `ACTOR_MAX_TOTAL_CHARGE_USD` としてXquikのX Follower Scraperに渡します。このActorは、上限を超える行を受け付ける前に止まります。支出の上限までできるだけ多くのプロフィールを返すには、`maxItems` を空にしてください。予算より少ないプロフィールでよい場合にだけ、`maxItems` と `maxItemsPerTarget` を設定します。

- `minFollowers`、`verifiedType`、`bioContains` などのプロフィールのフィルターを組み合わせて、課金対象のデータセットを絞り込みます。
- デフォルトでは、対象をまたいで重複のないプロフィールだけを残します。対象ごとに1行を残すには、`dedupeAcrossTargets: false` を設定します。
- 一致したすべての元の対象を持つ、プロフィールごとに1行を得るには、`dedupeMode: "merge"` を設定します。
- 取得できる場合に任意のプロフィールフィールドを得るには、`outputMode: "full"` を設定します。固定ポストのID、エンティティ、プロフィールのメタデータなどです。
- 正規化したフィールドの横に、サニタイズ済みの `raw` オブジェクトを入れるには、`outputMode: "raw"` か `includeRaw: true` を設定します。
- 定期実行をスケジュールし、各データセットを保存してプロフィールIDを比べます。Xquikのモニターが発行するのは、対応するポストとプロフィールのイベントです。フォロワーリストの変化は発行しません。

## 空の実行、部分的な実行、停止した実行

XquikのX Follower Scraperは、空の実行、部分的な実行、停止した実行の理由を、無料の診断情報で説明します。Actorの正常終了が示すのは配信の完了です。抽出が最後まで終わったことは意味しません。

中断された実行は、無料の `partial` 診断を書き込みます。配信済みの結果はデータセットに残ります。再試行する前に `availableResults`、`failedTargets`、`retryable`、`nextAction` を確認してください。

実行ステータスは、実行が止まった理由を示します。課金された結果、スキップした重複、読み取った対象の数も数えます。ステータスは、早期停止の原因をすべて示します。`stopCauses` は各原因を挙げ、それぞれに `message`、`retryable`、`nextAction` を付けます。原因は `target_not_found`、`target_protected`、`target_failed`、`deadline_reached` です。存在しないアカウントが一覧に入るのは、別の原因で実行が止まった場合だけです。いずれかの原因が再試行可能なら、実行も `retryable` になります。

Xは、非公開アカウントのフォロワーやフォロー中の一覧を公開しません。その対象には、無料の診断1件で `target_protected` が付きます。実行は、ほかの対象の読み取りを続けます。

`failedTargets` は、エラーの後に止まった対象を数えます。こうした実行は `completionReason: "partial_failure"` を使います。配信済みのプロフィールは、課金対象のデータ行のままです。

デフォルトのApifyタイムアウトは `0` なので、実行に時間制限はありません。実行は、上限に達するか、プロフィールがなくなるまで続きます。有限のタイムアウトを設定することもできます。その場合、`completionReason: "deadline_reached"` は、その上限が近いことを示します。実行は上限の前にプロフィールとレポートを保存し、正常に終了します。配信済みのプロフィールの課金は1回だけです。

問題が起きた実行は、入力なしや無効な入力での終了も含めて、必ず `run-report` を書き込みます。`run-report` には、公開されているActorのソースの正確なバージョンを示す `version` フィールドもあります。

## 関連するXquik Actor

すべてのXquik Actorは、同じ抽出エンジン、フィルター優先の課金、診断機能を共有しています。必要なデータに合うものを選んでください。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): 検索、プロフィールのタイムライン、リスト、ポストIDから、50以上のフィルターでポストをスクレイピングし、フラットな形式で出力します。分析なしでポストデータが必要なときに使います。1行あたり$0.00015から。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): ユーザー名、ID、URLから、プロフィールとそのポスト、返信、メディア、フォロワーをスクレイピングします。検索ではなくアカウントから始めるときに使います。1行あたり$0.00015から。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): 25以上のフィルターで、ポストへの返信、コメント、会話全体をスクレイピングします。ポストの下の議論が必要なときに使います。1行あたり$0.00015から。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): ポストのURLまたはIDから、返信、引用ポスト、リポストしたユーザー、スレッドを一括でスクレイピングします。誰がポストに反応したかを測るときに使います。1行あたり$0.00015から。
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
- [Followers API](https://docs.xquik.com/api-reference/x/followers): アカウントの取得できるフォロワーを取得
- [Following API](https://docs.xquik.com/api-reference/x/following): ユーザーがフォローしているアカウントを取得
- [List Members API](https://docs.xquik.com/api-reference/x/list-members): Xの公開リストのメンバーをエクスポート
- [MCPサーバー](https://docs.xquik.com/mcp/overview): 対応するJSONやテキストの操作を探して実行
- [Webhooks](https://docs.xquik.com/webhooks/overview): 対応するポストとプロフィールのイベントを受信

## よくある質問

### X APIキーは必要ですか？

いいえ。X APIキー、ログイン、認証情報は不要です。

### 実行を止める上限は何ですか？

指定した件数の上限とApifyの支出上限で、実行は止まります。Apifyのアカウントとプラットフォームの制限も適用されます。

### どのくらい速いですか？

XquikのX Follower Scraperの速度は、対象の規模、フィルター、Xの可用性によって変わります。[ベンチマーク](#ベンチマーク)の2回の実行では、1秒あたり77.9件と100.0件の有効なプロフィールを取得しました。

### 結果が `maxItems` より少ないのはなぜですか？

`minFollowers`、`verifiedOnly`、`bioContains` などのフィルターは、書き込みの前に適用されます。結果を増やすには、フィルターを緩めてください。XquikのX Follower Scraperは、対象間の重複も除きます。

### 1つのアカウントから何人のフォロワーを取得できますか？

Xがそのアカウントについて表示する分だけ取得できます。実行は、上限、支出の上限、一覧の終わりのいずれかに達するまで続きます。`maxItemsPerTarget` は、対象ごとの上限だけを決めます。

### Actorは一時的な失敗を再試行しますか？

はい。Xの一時的なエラーからは自動で回復します。深刻な失敗の後も、実行は部分的な結果を残します。

### Apifyの実行時間の上限が近づくとどうなりますか？

XquikのX Follower Scraperは、それより短い独自の期限を設けません。上限の前にプロフィールを保存し、レポートを書き込んで終了します。データセットに届かなかった行に料金はかかりません。

### 中断したところから再開できますか？

まだできません。同じ対象で新しく実行すると、最初から始まります。

### Apify APIでこのActorを実行できますか？

はい。Python、JavaScript、cURLの例は[APIタブ](https://apify.com/xquik/x-follower-scraper/api)にあります。

### 定期的なスクレイピングをスケジュールできますか？

はい。Apifyに組み込まれた[スケジュール機能](https://docs.apify.com/platform/schedules)で、このActorをcronで実行できます。保存したデータセットを比べると、フォロワーの変化がわかります。

### Xのデータをスクレイピングしても合法ですか？

XquikのX Follower Scraperは、Xの公開プロフィールのフィールドを取得します。結果には、本人が入力した所在地などの個人データが含まれることがあります。目的が合法であることを確認し、適用されるプライバシー規則に従ってください。判断に迷う場合は、資格のある弁護士に相談してください。

### どこでサポートを受けられますか？

ActorページのIssuesタブでissueを開いてください。実行IDを添えてsupport@xquik.comに連絡することもできます。

### APIドキュメントはどこにありますか？

[APIドキュメント](https://docs.xquik.com/introduction)をお読みください。
