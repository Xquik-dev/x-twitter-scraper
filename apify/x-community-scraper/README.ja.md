[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · [简体中文](README.zh-CN.md) · **日本語** · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![FramerがXquik MCPをコーディングエージェントに接続する様子](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[FramerがXquikのスクレイパーをClaude Code、Codex、Cursorなどと一緒に使う様子](https://youtu.be/4UOSpoOoC3Y?t=367)を6:07から視聴できます。

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。XquikのX Community Scraperは、コミュニティの情報、ポスト、メディア、検索結果、メンバー&モデレーターを収集します。キーワードやトピックでコミュニティを見つけることもできます。他のApify Actorの多くは、フィルタリングや重複排除の前に課金します。Xquikが課金するのは、配信した結果のうち、重複がなくフィルター条件に合うものだけです。

コミュニティのURLかIDから、Twitterのコミュニティの情報、ポスト、メディア、キーワードに一致するポスト、メンバー&モデレーターを収集できます。キーワードやトピックでコミュニティを見つけたり、Xがおすすめするコミュニティを一覧にしたりできます。料金は**配信された行1件につき$0.00015**です。プラットフォームの利用料は、Apifyが別途請求します。X APIキーやログインは不要です。

> Xquikは独立したサードパーティサービスです。X Corpとは提携していません。
> 「Twitter」および「X」はX Corpの商標です。

## X Community Scraperでできること

XquikのX Community Scraperは、公開されているX(Twitter)のコミュニティを、そのURLかIDから読み取ります。各コミュニティの情報、ポスト、メディア、キーワードに一致するポスト、メンバー&モデレーターを返します。キーワードやトピックでコミュニティを見つけたり、Xがおすすめするコミュニティを一覧にしたりもできます。

### ユースケース

- ニッチなコミュニティのメンバーから、リードリストを作れます。
- ユーザーコミュニティで、製品へのフィードバック&機能のリクエストを追跡できます。
- 創業者たちのローンチ、採用のポスト&資金調達のニュースを見つけられます。
- 規模、トピック&活動量でコミュニティを比較できます。
- ポストする前に、コミュニティのルールを確認できます。
- コミュニティのモデレーター&最もフォローされているメンバーを見つけられます。
- クリエイティブのリサーチ用に、画像や動画付きのポストを集められます。

## X Community Scraperを使う理由

- **IDなしでコミュニティを探せる。** キーワードやトピックで検索するか、Xがおすすめするコミュニティを一覧にできます。見つかったコミュニティには、それぞれ完全なレコードが付きます。
- **コミュニティの完全なレコード。** 情報の行には、ルール、参加時の質問、作成者、管理者&トピックが入ります。
- **最新のポストか話題のポスト。** ポストを新しい順に集めるか、Xが最も高く評価する話題のポストを集められます。メディア付きのポストを加えたり、コミュニティのポストをキーワードで検索したりもできます。
- **メンバー&モデレーター。** どちらも `communityRole` 付きでエクスポートするか、名前でメンバーを探せます。行には、各プロフィールが公開しているメールアドレス、電話番号&リンクが入ります。
- **ポスト&メンバーのフィルター。** ポストは日付、言語、メディア&エンゲージメントで絞り込めます。メンバーはオーディエンスの規模、アカウント年数&認証で絞り込めます。

### 完全な結果

- 各回答には、Xが持つ最も完全なデータが入ります。

### 正確な行

- リポストには、元のポストの全文が入ります。
- 行の中のIDはすべて正確なままです。
- メンション、リンク、ハッシュタグ&ハイライトの位置は、テキストと一致します。
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

### 品質チェック

- Xが表示するフィールドはすべて、提供されるか、意図的に除かれるか、存在しないことが確認されています。
- Xquikは、すべての読み取りを実際のXでテストしています。

## X Community Scraperが抽出できるデータ

コミュニティの行は `resultType: "community"` を使います。主なフィールドは次のとおりです。

| フィールド        | 説明                                               |
| ----------------- | -------------------------------------------------- |
| `id`              | コミュニティID                                     |
| `name`            | コミュニティ名                                     |
| `description`     | コミュニティの説明                                 |
| `url`             | コミュニティのURL                                  |
| `member_count`    | メンバー数                                         |
| `moderator_count` | モデレーター数                                     |
| `rules`           | コミュニティのルール                               |
| `question`        | 参加するユーザーにコミュニティが尋ねる質問         |
| `primary_topic`   | Xがコミュニティを分類しているトピック              |
| `searchTags`      | Xがコミュニティの検索に使うタグ                    |
| `creator`         | 作成者の公開プロフィール                           |
| `admin`           | 管理者の公開プロフィール                           |
| `membersFacepile` | Xがコミュニティページでプレビュー表示するメンバー  |
| `is_nsfw`         | コミュニティがセンシティブに設定されているかどうか |
| `banner`          | バナーのURL、サイズ&メインカラー                   |
| `sourceTarget`    | 入力したURL、ID、キーワード、トピックのいずれか    |

各リソースは、それぞれの種類の行を追加します。

| `resultType`         | リソースまたは入力           | 1行が表すもの          |
| -------------------- | ---------------------------- | ---------------------- |
| `community`          | `info`、キーワード、トピック | コミュニティ           |
| `communityTweet`     | `tweets`、`search`           | ポスト                 |
| `communityMedia`     | `media`                      | 写真か動画付きのポスト |
| `communityMember`    | `members`、`memberNames`     | メンバー               |
| `communityModerator` | `moderators`                 | モデレーター           |
| `communityTopic`     | `listTopics`                 | トピック               |

ポストの行には、`text`、`createdAt`、`likeCount`、`replyCount`、`retweetCount`、`viewCount`、`media` & `author` のプロフィールが入ります。メンバー&モデレーターの行には、`username`、`followers`、`verified` & `communityRole` などのプロフィールのフィールドが入ります。`email` & `contactInfo` も入ります。これらは、各プロフィールが公開しているメールアドレス、電話番号&リンクです。

## X Community Scraperでコミュニティのデータをスクレイピングする方法

Apifyを初めて使いますか？まず[無料アカウントを作成してください](https://console.apify.com/sign-up?fpr=xquik)。無料プランはクレジットカード不要&毎月$5分を使えます。1行あたり$0.00015なので、プラットフォーム利用料を別にすると、$5で最大33,000行分をまかなえます。その後、このページに戻ってTry for freeを押してください。

Apify Consoleで次の手順に従ってください。

1. [タスクの例](#タスクの例)かInputタブを開きます。
2. コミュニティのURLを `startUrls` に、IDを `communityIds` に貼り付けます。
3. `resources` を選び、`sinceDate` や `minLikes` などのフィルターを追加します。
4. `maxItems` を設定し、Startをクリックします。
5. データセットをJSON、CSV、Excel、HTMLのいずれかでエクスポートします。

以下のレシピはどれも完全な入力です。

### コミュニティの情報&最近のポストを取得する

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["info", "tweets"],
  "maxItems": 200
}
```

`startUrls` は、各URLを文字列のまま、または `{ "url": "..." }` オブジェクトとして受け取ります。

```json
{
  "startUrls": [
    "https://x.com/i/communities/1493446837214187523",
    { "url": "https://x.com/i/communities/1493446837214187523" }
  ]
}
```

### 話題のポストを収集する

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["tweets"],
  "postsOrder": "Top",
  "minLikes": 50,
  "maxItems": 100
}
```

Xが最も高く評価するポストを取得するには、`postsOrder` を `Top` に設定します。メディアタブを取得するには、`resources` に `"media"` を加えます。

### コミュニティのポストを検索する

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["search"],
  "query": "pricing",
  "queryType": "Latest",
  "maxItems": 100
}
```

### メンバー&モデレーターをエクスポートする

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["members", "moderators"],
  "minFollowers": 1000,
  "maxItems": 1000
}
```

メンバーのフィルターは、メンバー&モデレーターの行に適用されます。フィルターで除いた行はデータセットに届かないので、料金はかかりません。

### 名前でメンバーを探す

```json
{
  "communityIds": ["1493446837214187523"],
  "memberNames": ["marckohlbrugge"],
  "maxItems": 100
}
```

Xのメンバー検索と同じく、Xは名前1つにつき、一致するアカウントを最大10件まで確認します。見つかった各メンバーは、`communityRole` を持つ1つの `communityMember` 行になります。`memberNames` を使う実行は、`resources` で指定しない限り、ほかのリソースを読み取りません。

### キーワードやトピックでコミュニティを見つける

```json
{
  "searchTerms": ["artificial intelligence"],
  "topics": ["Technology"],
  "maxItems": 100
}
```

見つかった各コミュニティには、ルール、作成者、管理者&メンバーのプロフィールが入ります。短いレコードでより速く実行するには、`includeDetails` を `false` に設定します。Xがおすすめするコミュニティには `includeSuggested` をオンにします。おすすめは実行ごとに変わることがあります。すべてのトピック&そのサブトピックには `listTopics` をオンにします。

## タスクの例

50個の公開タスクから選べます。どのタスクにも、上限を決めた入力&対応するデータセットビューがあります。実行前にタスクを編集してください。

- [Xのコミュニティの概要を取得する](https://apify.com/xquik/x-community-scraper/examples/get-an-x-community-overview)
- [Xのコミュニティの詳細と最近のポストを取得する](https://apify.com/xquik/x-community-scraper/examples/get-community-details-with-recent-posts)
- [Xのコミュニティで人気のテクノロジー関連ポストを見つける](https://apify.com/xquik/x-community-scraper/examples/find-top-technology-posts-in-a-community)
- [Xのコミュニティのメンバーをエクスポートする](https://apify.com/xquik/x-community-scraper/examples/export-x-community-members)
- [Xのコミュニティの認証済みメンバーをエクスポートする](https://apify.com/xquik/x-community-scraper/examples/export-verified-community-members)
- [Xのコミュニティのモデレーターを一覧にする](https://apify.com/xquik/x-community-scraper/examples/list-x-community-moderators)
- [開発者のコミュニティを規模&トピックで比較する](https://apify.com/xquik/x-community-scraper/examples/compare-developer-communities-by-size)
- [ポストする前にXのコミュニティのルールを読む](https://apify.com/xquik/x-community-scraper/examples/read-community-rules-before-you-post)
- [スタートアップのコミュニティで資金調達のポストを見つける](https://apify.com/xquik/x-community-scraper/examples/find-funding-posts-in-a-startup-community)
- [ソフトウェアエンジニアリングのコミュニティで採用のポストを見つける](https://apify.com/xquik/x-community-scraper/examples/find-hiring-posts-in-a-software-community)
- [スタートアップのコミュニティでフォロワーの多いメンバーを見つける](https://apify.com/xquik/x-community-scraper/examples/find-startup-community-members-with-big-audiences)
- [小規模なXのコミュニティを隅々まで調べる](https://apify.com/xquik/x-community-scraper/examples/audit-a-small-community-end-to-end)

## Xのコミュニティのスクレイピングにはいくらかかりますか？

XquikのX Community Scraperは、どのApifyプランでも、配信された行1件につき$0.00015です。プラットフォームの利用料は、Apifyが別途請求します。Xquikの課金は、配信したデータ行1件につき1回です。`diagnostics` 出力の診断情報は無料です。

より多くの量が必要なら、前払いの利用枠が多い[Apifyプランを選んでください](https://apify.com/pricing?fpr=xquik)。

- Xquikのサブスクリプションは不要です。
- 開始料金、コミュニティ料金、リソース料金、クエリ料金は別途かかりません。
- 見つかったコミュニティは、完全なレコードの有無にかかわらず1行分の料金です。
- フィルター&重複排除は課金前に行います。フィルターで除いた行や重複した行に支払うことはありません。
- Apifyの最大合計課金額の設定で、配信する行数に上限がかかります。

問題が起きた実行や大規模な実行は、`run-report` レコードも書き込みます。問題なく終わった小規模な実行は、これを省いてApifyの利用料を節約します。毎回書き込むには `alwaysSaveRunRecords` をオンにしてください。

実行の支出に上限をかける方法は、[実行オプション](#実行オプション)を参照してください。

## 空の実行、部分的な実行&停止した実行

XquikのX Community Scraperは、空の実行、部分的な実行&停止した実行を無料で説明します。実行ステータスは、実行が止まった理由を示します。課金された結果&読み取った対象の数も数えます。

### 空の結果

結果が空の実行では、ステータスが対象&フィルターの確認を促します。フィルターで除いた行が、結果の上限を使うことはありません。すべての対象を読み取っても行が返らない実行は、レコードを書き込みません。理由&変えるべき点はステータスが示します。このActorが返すのは、Xが表示する公開コミュニティだけです。取得できるフィールドはコミュニティによって異なります。

### 部分的な実行

抽出が中断されると、無料の `partial` 診断を書き込みます。配信済みの行はデータセットに残ります。再試行する前に `availableResults`、`failedTargets`、`retryable` & `nextAction` を確認してください。Actorの正常終了が示すのは配信の完了です。抽出が最後まで終わったことは意味しません。

### 停止の原因

実行ステータスは、早期停止の原因をすべて示します。`stopCauses` は各原因を挙げ、それぞれに `message`、`retryable` & `nextAction` を付けます。原因は `target_not_found`、`target_failed`、`pagination_safety_limit` & `deadline_reached` です。存在しない対象が一覧に入るのは、別の原因で実行が止まった場合だけです。いずれかの原因が再試行可能なら、実行も `retryable` になります。このActor独自の時間制限はありません。

## 入力

Inputタブにすべてのオプションがあります。コミュニティのURLかID、キーワード、トピックを指定するか、`includeSuggested` か `listTopics` をオンにしてください。ほかのフィールドはすべて任意です。

| フィールド | 動作 |
| --- | --- |
| `startUrls` | `x.com` 上のコミュニティのURL |
| `communityIds` | 数値のコミュニティID |
| `resources` | `info`、`tweets`、`media`、`search`、`members`、`moderators` |
| `query` | `search` リソースのキーワード |
| `queryType` | キーワード検索の `Latest` か `Top` の並び順 |
| `postsOrder` | ポストの `Latest` か `Top` の並び順 |
| `memberNames` | メンバーの中から探す名前かユーザー名 |
| `searchTerms` | コミュニティを見つけるためのキーワード |
| `topics` | `Technology` などのトピック名かID |
| `includeSuggested` | Xが参加をおすすめするコミュニティを加える |
| `listTopics` | すべてのコミュニティトピック&そのサブトピックを加える |
| `includeDetails` | キーワードやトピックで見つけたコミュニティに完全なレコードを加える |
| `maxItems` | 実行全体で配信する行数の上限 |
| `maxItemsPerTarget` | コミュニティのリソースごとの行数の上限 |
| `sinceDate`, `untilDate` | 期間内のポストを残す |
| `language` | 1つの言語コードのポストを残す |
| `mediaType` | 画像、動画、GIF、リンクを含むポストか、どれも含まないポストを残す |
| `minViews`, `minLikes` | 表示回数かいいね数が一定以上のポストを残す |
| `minReplies`, `minRetweets` | 返信数かリポスト数が一定以上のポストを残す |
| `nativeRetweets` | ネイティブのリポストだけを残す |
| `verifiedOnly` | 認証済みの著者、メンバー、モデレーターを残す |
| `minFollowers`, `maxFollowers` | フォロワー数が範囲内のメンバーを残す |
| `minAccountAgeDays` | アカウント作成から指定日数以上たったメンバーを残す |
| `blueVerifiedOnly` | XがBlue認証済みと示す著者かメンバーを残す |
| `verifiedType` | 1つの種類の認証を持つメンバーを残す |
| `minFollowing`, `maxFollowing` | フォロー中の数が範囲内のメンバーを残す |
| `minStatuses`, `maxStatuses` | ポスト数が範囲内のメンバーを残す |
| `hasWebsite`, `hasLocation` | ウェブサイトか所在地を載せているメンバーを残す |
| `hasEmail` | メールアドレスを公開しているメンバーを残す |
| `businessEmailOnly` | フリーメール以外のメールアドレスを持つメンバーを残す |
| `emailDomains` | これらのドメインのメールアドレスを持つメンバーを残す |
| `bioContains` | 自己紹介にこれらの語のどれかを含むメンバーを残す |
| `locationContains` | 所在地にこのテキストを含むメンバーを残す |
| `usernameContains` | ユーザー名にこのテキストを含むメンバーを残す |
| `dedupeAcrossTargets` | コミュニティ間で重複する行を課金前に除く |

### 他のコミュニティ用Actorから移行する

`ranking` & `sort` という名前は、`postsOrder` として働きます。`Top` か `Relevance` は、話題のポストを読み取ります。どちらか & `postsOrder` を設定した場合は、`postsOrder` の値が優先されます。実行ログには、採用されなかったフィールドが記録されます。

### 適切な入力を選ぶ

- ざっと確認するには、デフォルトの `info` & `tweets` のリソースのままにします。
- リードリストには、`members` を選び、`minFollowers` & `verifiedOnly` を組み合わせます。
- 製品のリサーチには、`search` を選び、`bug` や `pricing` などの `query` を指定します。
- クリエイティブのリサーチには、`media` を選び、`mediaType` を設定します。
- コミュニティを探すには、IDなしで `searchTerms` か `topics` を送ります。

## 出力

各行はJSONオブジェクトです。すべての行に、入力したコミュニティ、キーワード、トピックを示す `sourceTarget` が入ります。XquikのX Community Scraperは元のフィールドを保ち、値を作り出しません。データセットのスキーマは、各フィールドにタイトル&説明を付けます。

例はサンプル値です。結果にはライブデータが反映されます。コミュニティ情報の行は次のようになります。

```json
{
  "resultType": "community",
  "sourceTarget": "1493446837214187523",
  "id": "1493446837214187523",
  "name": "Sample Community",
  "description": "A place to share what you build.",
  "member_count": 1200,
  "moderator_count": 4,
  "primary_topic": "Technology"
}
```

データセットは、JSON、CSV、Excel、HTMLのいずれかでエクスポートしてください。

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

## 実行オプション

- 実行のコストに上限をかけるには、Apifyの最大合計課金額を設定します。その予算で取得できるだけ多くの行を得るには、`maxItems` を大きいままにします。
- Apify APIでは `maxTotalChargeUsd` を、ConsoleではMax cost per runを設定します。
- コミュニティはすべて1回の実行にまとめてください。どの実行も、Apifyに同じ開始コストを支払います。
- `maxItemsPerTarget` は、コミュニティのリソースごとの行数に上限をかけます。
- `maxConcurrency` は、同時に実行するコミュニティのリソースの数を決めます。デフォルトは、安全な範囲で最も速い設定です。

公開済みのすべての修正を受け取るには、すべての実行で `latest` を選んでください。保存済みのタスク&スケジュールはそれぞれのビルドの選択を保つので、`latest` のままにしておいてください。

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

いいえ。XquikのX Community Scraperは、X APIキー、ログイン、認証情報のどれも必要としません。

### コミュニティのIDはどうやって見つけますか？

Xでコミュニティを開きます。IDは、URLの `/i/communities/` の後ろにある数字です。URL全体を `startUrls` に貼り付けることもできます。

### XのコミュニティのメンバーをCSVやExcelにエクスポートできますか？

はい。`members` リソースを選び、データセットをCSV、Excel、JSON、HTMLのいずれかでエクスポートしてください。

### IDがなくてもコミュニティを見つけられますか？

はい。キーワードを `searchTerms` に、トピックを `topics` に入れて送ってください。見つかった各コミュニティは、完全なレコードを持つ1行になります。

### コミュニティの話題のポストを取得できますか？

はい。`postsOrder` を `Top` に設定してください。最も人気のあるポストだけを残すには、`minLikes` か `minViews` を追加します。

### 1回の実行で何個のコミュニティをスクレイピングできますか？

指定した数だけスクレイピングできます。行数の上限は、`maxItems` & Apifyの支出上限で決まります。

### 非公開のコミュニティも読み取れますか？

いいえ。XquikのX Community Scraperが返すのは、Xが表示する公開コミュニティだけです。

### Xのコミュニティをスクレイピングしても合法ですか？

XquikのX Community Scraperは、Xの公開フィールドを取得します。結果には個人データが含まれることがあります。目的が合法であることを確認し、適用されるプライバシー規則に従ってください。判断に迷う場合は、資格のある弁護士に相談してください。

### 実行結果が0件だったのはなぜですか？

まず実行ステータスを確認してください。結果が空の実行では、ステータスが対象&フィルターの確認を促します。対応が必要なことがあると、無料の `diagnostics` 出力が現れます。その `stopCauses` は、原因ごとに従うべき `nextAction` を示します。実行は、読み取れない入力をすべて挙げ、直し方を示します。

### API、スケジュール&連携は使えますか？

はい。50個の公開タスクかXquik REST APIから選べます。[APIタブ](https://apify.com/xquik/x-community-scraper/api)には、Python、JavaScript & cURLの例があります。Apifyの[スケジュール](https://docs.apify.com/platform/schedules)を使うと、XquikのX Community Scraperをcronで実行できます。エージェントは[Apify MCP](https://docs.apify.com/platform/integrations/mcp)を使います。古いビルドが必要な場合を除き、`latest` を使ってください。

### カスタムソリューションを依頼できますか？

はい。必要な内容を[Issuesタブ](https://apify.com/xquik/x-community-scraper/issues)に書いてください。Xquikは、ダッシュボード、REST API、MCPサーバー & Webhookも提供しています。Xquikのウェブサイトは、Xquikの[Apifyプロフィール](https://apify.com/xquik)にあります。

### どこでサポートを受けられますか？

実行IDを添えて、[Issuesタブ](https://apify.com/xquik/x-community-scraper/issues)でissueを開いてください。キーバリューストアにある無料の診断情報が、対応が必要な実行について説明します。行が1件も返らなかった実行は、その理由をステータスで示します。
