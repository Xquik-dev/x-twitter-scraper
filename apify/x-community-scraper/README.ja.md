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

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。XquikのX Community Scraperは、コミュニティの情報、ポスト、メディア、検索結果、メンバー、モデレーターを収集し、キーワードやトピックでコミュニティを見つけます。他のApify Actorの多くは、フィルタリングや重複排除の前に課金します。Xquikが課金するのは、配信した結果のうち、重複がなくフィルター条件に合うものだけです。

コミュニティのURLまたはIDから、X(Twitter)のコミュニティの情報、ポスト、メディア、キーワードに一致するポスト、メンバー、モデレーターを収集します。キーワードやトピックでコミュニティを見つけたり、Xがおすすめするコミュニティを一覧にしたりできます。料金は**配信された行1件につき$0.00015**で、Apifyのプラットフォーム利用料は別途かかります。X APIキーやログインは不要です。

> Xquikは独立したサードパーティサービスです。X Corpとは提携していません。
> 「Twitter」および「X」はX Corpの商標です。

## X Community Scraperでできること

XquikのX Community Scraperは、公開されているX(Twitter)のコミュニティを、そのURLまたはIDから読み取ります。各コミュニティの情報、ポスト、メディア、キーワードに一致するポスト、メンバー、モデレーターを返します。キーワードやトピックでコミュニティを見つけたり、Xがおすすめするコミュニティを一覧にしたりすることもできます。

### 主な機能

- 1回の実行で、複数のコミュニティとリソースを読み取れます。
- ルール、参加時の質問、作成者、管理者、トピックを含むコミュニティ情報を取得できます。
- 新しい順のポストか、Xが最も高く評価するTop（話題）のポストを収集できます。
- メディアタブを収集したり、コミュニティのポストをキーワードで検索したりできます。
- メンバーとモデレーターをエクスポートしたり、名前でメンバーを探したりできます。
- キーワードやトピックでコミュニティを見つけ、その完全なレコードを取得できます。
- 日付、言語、メディア、エンゲージメントでポストを絞り込めます。
- フォロワー数、アカウント年数、認証でメンバーを絞り込めます。
- フィルターと重複排除は課金前に行います。
- Apifyが実行を再起動しても、配信済みの行と進捗は残ります。

### ユースケース

- ニッチなコミュニティのメンバーから、リードリストを作れます。
- ユーザーコミュニティで、製品へのフィードバックや機能のリクエストを追跡できます。
- 創業者たちのローンチ、採用のポスト、資金調達のニュースを見つけられます。
- 規模、トピック、活動量でコミュニティを比較できます。
- ポストする前に、コミュニティのルールを確認できます。
- コミュニティのモデレーターと、最もフォローされているメンバーを見つけられます。
- クリエイティブのリサーチ用に、画像や動画付きのポストを集められます。

### X Community Scraperが抽出できるデータ

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
| `banner`          | バナーのURL、サイズ、メインカラー                  |
| `sourceTarget`    | 入力したURL、ID、キーワード、トピック              |

各リソースは、それぞれの種類の行を追加します。

| `resultType`         | リソースまたは入力           | 1行が表すもの          |
| -------------------- | ---------------------------- | ---------------------- |
| `community`          | `info`、キーワード、トピック | コミュニティ           |
| `communityTweet`     | `tweets`、`search`           | ポスト                 |
| `communityMedia`     | `media`                      | 写真か動画付きのポスト |
| `communityMember`    | `members`、`memberNames`     | メンバー               |
| `communityModerator` | `moderators`                 | モデレーター           |
| `communityTopic`     | `listTopics`                 | トピック               |

ポストの行には、`text`、`createdAt`、`likeCount`、`replyCount`、`retweetCount`、`viewCount`、`media`、`author` のプロフィールが入ります。メンバーとモデレーターの行には、`username`、`followers`、`verified`、`communityRole` などのプロフィールのフィールドが入ります。

## X Community Scraperでコミュニティのデータをスクレイピングする方法

Apify Consoleで次の手順に従ってください。

1. [タスクの例](#タスクの例)かInputタブを開きます。
2. コミュニティのURLを `startUrls` に、IDを `communityIds` に貼り付けます。
3. `resources` を選び、`sinceDate` や `minLikes` などのフィルターを追加します。
4. `maxItems` を設定し、Startをクリックします。
5. データセットをJSON、CSV、Excel、HTMLでエクスポートします。

以下のレシピはどれも完全な入力です。

### コミュニティの情報と最近のポストを取得する

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

Xが最も高く評価するポストを取得するには、`postsOrder` を `Top` に設定します。メディアタブには、`resources` に `"media"` を加えます。

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

### メンバーとモデレーターをエクスポートする

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["members", "moderators"],
  "minFollowers": 1000,
  "maxItems": 1000
}
```

メンバーのフィルターは、メンバーとモデレーターの行に適用されます。フィルターで除いた行はデータセットに届かないので、料金はかかりません。

### 名前でメンバーを探す

```json
{
  "communityIds": ["1493446837214187523"],
  "memberNames": ["marckohlbrugge"],
  "maxItems": 100
}
```

x.comのメンバー検索と同じく、Xは名前1つにつき、一致するアカウントを最大10件まで確認します。見つかった各メンバーは、`communityRole` を持つ1つの `communityMember` 行になります。`memberNames` を使う実行は、`resources` で指定しない限り、ほかのリソースを読み取りません。

### キーワードやトピックでコミュニティを見つける

```json
{
  "searchTerms": ["artificial intelligence"],
  "topics": ["Technology"],
  "maxItems": 100
}
```

見つかった各コミュニティには、ルール、作成者、管理者、メンバーのプロフィールが入ります。短いレコードでより速く実行するには、`includeDetails` を `false` に設定します。Xがおすすめするコミュニティには `includeSuggested` をオンにします。おすすめは実行ごとに変わることがあります。すべてのトピックとそのサブトピックには `listTopics` をオンにします。

## タスクの例

50個の公開タスクから選べます。どのタスクにも、上限を決めた入力と、対応するデータセットビューがあります。実行前にタスクを編集してください。

- [Xのコミュニティの概要を取得する](https://apify.com/xquik/x-community-scraper/examples/get-an-x-community-overview)
- [Xのコミュニティの詳細と最近のポストを取得する](https://apify.com/xquik/x-community-scraper/examples/get-community-details-with-recent-posts)
- [Xのコミュニティで人気のテクノロジー関連ポストを見つける](https://apify.com/xquik/x-community-scraper/examples/find-top-technology-posts-in-a-community)
- [Xのコミュニティのメンバーをエクスポートする](https://apify.com/xquik/x-community-scraper/examples/export-x-community-members)
- [Xのコミュニティの認証済みメンバーをエクスポートする](https://apify.com/xquik/x-community-scraper/examples/export-verified-community-members)
- [Xのコミュニティのモデレーターを一覧にする](https://apify.com/xquik/x-community-scraper/examples/list-x-community-moderators)
- [開発者のコミュニティを規模とトピックで比較する](https://apify.com/xquik/x-community-scraper/examples/compare-developer-communities-by-size)
- [ポストする前にXのコミュニティのルールを読む](https://apify.com/xquik/x-community-scraper/examples/read-community-rules-before-you-post)
- [スタートアップのコミュニティで資金調達のポストを見つける](https://apify.com/xquik/x-community-scraper/examples/find-funding-posts-in-a-startup-community)
- [ソフトウェアエンジニアリングのコミュニティで採用のポストを見つける](https://apify.com/xquik/x-community-scraper/examples/find-hiring-posts-in-a-software-community)
- [スタートアップのコミュニティでフォロワーの多いメンバーを見つける](https://apify.com/xquik/x-community-scraper/examples/find-startup-community-members-with-big-audiences)
- [小規模なXのコミュニティを隅々まで調べる](https://apify.com/xquik/x-community-scraper/examples/audit-a-small-community-end-to-end)

## Xのコミュニティのスクレイピングにかかる費用は？

XquikのX Community Scraperは、すべてのApifyプランで配信された行1件につき$0.00015です。Apifyのプラットフォーム利用料は別途かかります。Xquikの課金は、配信したデータ行1件につき1回です。`diagnostics` 出力の診断情報は無料です。

- Xquikのサブスクリプションは不要です。
- 開始料金、コミュニティ料金、リソース料金、クエリ料金はかかりません。
- 見つかったコミュニティは、完全なレコードの有無にかかわらず1行分の料金です。
- フィルターと重複排除は課金前に行います。除いた行や重複した行に支払うことはありません。
- Apifyの最大合計課金額の設定で、配信する行数に上限がかかります。

問題が起きた実行と大規模な実行は、`run-report` レコードも書き込みます。問題なく終わった小規模な実行は書き込まず、Apifyの利用料を節約します。毎回書き込むには `alwaysSaveRunRecords` をオンにしてください。

実行の支出に上限をかける方法は、[実行オプション](#実行オプション)を参照してください。

## 空の実行、部分的な実行、停止した実行

XquikのX Community Scraperは、空の実行、部分的な実行、停止した実行の理由を無料で説明します。実行ステータスは、実行が止まった理由を示します。課金された結果と読み取った対象の数も数えます。

### 空の結果

結果が空の実行では、ステータスが対象とフィルターの確認を促します。フィルターで除いた行が、結果の上限を使うことはありません。すべての対象を読み取っても行が1件も返らなかった実行は、レコードを書き込みません。その理由と変えるべき点は、ステータスが示します。このActorが返すのは、Xが表示する公開コミュニティだけです。取得できるフィールドはコミュニティによって異なります。

### 部分的な実行

抽出が中断されると、無料の `partial` 診断を書き込みます。配信済みの行はデータセットに残ります。再試行する前に `availableResults`、`failedTargets`、`retryable`、`nextAction` を確認してください。Actorの正常終了が示すのは配信の完了です。抽出が最後まで終わったことは意味しません。

### 停止の原因

実行ステータスは、早期停止の原因をすべて示します。`stopCauses` は各原因を挙げ、それぞれに `message`、`retryable`、`nextAction` を付けます。原因は `target_not_found`、`target_failed`、`pagination_safety_limit`、`deadline_reached` です。存在しない対象が一覧に入るのは、別の原因で実行が止まった場合だけです。いずれかの原因が再試行可能なら、実行も `retryable` になります。このActor独自の時間制限はありません。

## 入力

Inputタブにすべてのオプションがあります。コミュニティのURLかID、キーワード、トピックを指定するか、`includeSuggested` か `listTopics` をオンにしてください。ほかのフィールドはすべて任意です。

| フィールド                     | 機能                                                              |
| ------------------------------ | ----------------------------------------------------------------- |
| `startUrls`                    | x.com上のコミュニティのURL                                        |
| `communityIds`                 | 数値のコミュニティID                                              |
| `resources`                    | `info`、`tweets`、`media`、`search`、`members`、`moderators`      |
| `query`                        | `search` リソースのキーワード                                     |
| `queryType`                    | キーワード検索の `Latest` または `Top` の並び順                   |
| `postsOrder`                   | ポストの `Latest` または `Top` の並び順                           |
| `memberNames`                  | メンバーの中から探す名前またはユーザー名                          |
| `searchTerms`                  | コミュニティを見つけるためのキーワード                            |
| `topics`                       | `Technology` などのトピック名またはID                             |
| `includeSuggested`             | Xが参加をおすすめするコミュニティを追加                           |
| `listTopics`                   | すべてのコミュニティトピックとそのサブトピックを追加              |
| `includeDetails`               | キーワードやトピックで見つけたコミュニティに完全なレコードを追加  |
| `maxItems`                     | 実行全体で配信する行数の上限                                      |
| `maxItemsPerTarget`            | コミュニティのリソースごとの行数の上限                            |
| `sinceDate`, `untilDate`       | 期間内のポストを残す                                              |
| `language`                     | 1つの言語コードのポストを残す                                     |
| `mediaType`                    | 画像、動画、GIF、リンクを含むポストか、どれも含まないポストを残す |
| `minViews`, `minLikes`         | 表示回数かいいね数が一定以上のポストを残す                        |
| `minReplies`, `minRetweets`    | 返信数かリポスト数が一定以上のポストを残す                        |
| `nativeRetweets`               | ネイティブのリポストだけを残す                                    |
| `verifiedOnly`                 | 認証済みの著者、メンバー、モデレーターを残す                      |
| `minFollowers`, `maxFollowers` | フォロワー数が範囲内のメンバーを残す                              |
| `minAccountAgeDays`            | アカウント作成から指定日数以上たったメンバーを残す                |
| `dedupeAcrossTargets`          | コミュニティ間で重複する行を課金前に除く                          |

### 他のコミュニティ用Actorから移行する

`ranking` と `sort` という名前は、`postsOrder` と同じように働きます。`Top` または `Relevance` は、上位のポストを読み取ります。どちらかと `postsOrder` の両方を設定した場合は、`postsOrder` の値が優先されます。実行ログには、採用されなかったフィールドが記録されます。

### 適切な入力を選ぶ

- ざっと確認するには、デフォルトの `info` と `tweets` のリソースのままにします。
- リードリストには、`members` を選び、`minFollowers` と `verifiedOnly` を組み合わせます。
- 製品のリサーチには、`search` を選び、`bug` や `pricing` などの `query` を指定します。
- クリエイティブのリサーチには、`media` を選び、`mediaType` を設定します。
- コミュニティを探すには、IDなしで `searchTerms` か `topics` を送ります。

## 出力

各行はJSONオブジェクトです。すべての行に、入力したコミュニティ、キーワード、トピックを示す `sourceTarget` が入ります。XquikのX Community Scraperは元のフィールドを保ち、値を作り出しません。データセットのスキーマは、各フィールドにタイトルと説明を付けます。

例はサンプル値です。実際の結果にはライブデータが入ります。コミュニティ情報の行は次のようになります。

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

データセットはJSON、CSV、Excel、HTMLでエクスポートできます。

## 実行オプション

- 実行のコストに上限をかけるには、Apifyの最大合計課金額を設定します。その予算で取得できるだけ多くの行を得るには、`maxItems` を大きいままにします。
- Apify APIでは `maxTotalChargeUsd` を、ConsoleではMax cost per runを設定します。
- コミュニティはすべて1回の実行にまとめてください。どの実行も、Apifyに同じ開始コストを支払います。
- `maxItemsPerTarget` は、コミュニティのリソースごとの行数に上限をかけます。
- `maxConcurrency` は、同時に実行するコミュニティのリソースの数を決めます。デフォルトは、安全な範囲で最も速い設定です。

すべての実行で `latest` を選ぶと、公開済みのすべての修正が適用されます。保存済みのタスクとスケジュールは、それぞれのビルドの選択を保持します。そのため、`latest` のままにしておいてください。

## 関連するXquik Actor

すべてのXquik Actorは、同じ抽出エンジン、フィルター優先の課金、診断機能を共有しています。必要なデータに合うものを選んでください。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): 検索、プロフィールのタイムライン、リスト、ポストIDから、50以上のフィルターでポストをスクレイピングし、フラットな形式で出力します。分析なしでポストデータが必要なときに使います。1行あたり$0.00015から。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): ユーザー名、ID、URLから、プロフィールとそのポスト、返信、メディア、フォロワーをスクレイピングします。検索ではなくアカウントから始めるときに使います。1行あたり$0.00015から。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): 25以上のフィルターで、ポストへの返信、コメント、会話全体をスクレイピングします。ポストの下の議論が必要なときに使います。1行あたり$0.00015から。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): ポストのURLまたはIDから、返信、引用ポスト、リポストしたユーザー、スレッドを一括でスクレイピングします。誰がポストに反応したかを測るときに使います。1行あたり$0.00015から。
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper): ポストを引用したポストを、テキスト、メディア、件数、著者とともに、11のフィルターでスクレイピングします。誰がポストを引用し、何と言ったかを調べたいときに使います。1ポストあたり$0.00015から。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): フォロワー、フォロー中、リストのメンバー、購読者、コミュニティのメンバーをプロフィール行としてスクレイピングします。オーディエンスやメンバーの一覧が必要なときに使います。1プロフィールあたり$0.00015から。
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper): ユーザー名、自己紹介、所在地でユーザーを検索し、フォロワー数、認証、アカウント年数、所在地で絞り込みます。検索からアカウントの一覧を作るときに使います。1プロフィールあたり$0.00015から。
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper): Xの「アカウントの所在地」ラベル、Xへの接続方法、ユーザー名の変更履歴から、アカウントの所在地を確認します。アカウントの所在地を確かめたいときに使います。1アカウントあたり$0.00015から。
- [X List Scraper](https://apify.com/xquik/x-list-scraper): リストのURLまたはIDから、リストのポスト、メンバー、フォロワーをスクレイピングします。厳選したリストを情報源にするときに使います。1行あたり$0.00015から。
- [X Space Scraper](https://apify.com/xquik/x-space-scraper): キーワードからスペースを見つけ、タイトル、状態、時刻、リスナー数、ホスト、スピーカーを読み取ります。URLまたはIDでブロードキャストも読み取ります。Xのライブ音声とライブ動画を追うときに使います。スペースまたはブロードキャスト1件あたり$0.00015から。
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): 地域別のリアルタイムトレンドを、順位、ボリューム、クエリ、WOEIDとともにスクレイピングします。どこで何がトレンドかを追うときに使います。1トレンドあたり$0.00015から。
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper): キーワード、勤務地、勤務形態、職位レベル、企業からXの求人を、給与と応募リンクとともにスクレイピングします。Xに掲載された求人を集めるときに使います。1求人あたり$0.00015から。
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): 長文のXの記事を、カバー画像、著者、日付、指標とともにMarkdownとテキストでスクレイピングします。ポストではなく記事の本文が必要なときに使います。1記事あたり$0.00015から。
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): ポストやプロフィールから写真、動画、GIFを抽出または保存します。MP4とメタデータのオプションがあります。メディアファイルそのものが必要なときに使います。1メディア行あたり$0.00015から。
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring): ブランドへの言及を、AIによる関連性、感情、顧客体験の回答とともに追跡し、実行どうしを比較します。ブランドを継続して見守るときに使います。分析済みポスト1件あたり$0.0003から。
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis): すべてのポストに、AIで態度、強度、皮肉の確率のラベルを付けます。任意のトピックの全体的な感情を知りたいときに使います。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals): AIで、強気、弱気、中立、混在のスタンス、コンテンツの種類、確信度、資産との関連性のラベルを付けます。株、暗号資産、トレードの話題を追うときに使います。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor): AIで、ニュースのポストに形式、情報源の明示、トピックとの関連性のラベルを付けます。報道と論評を分けるときに使います。分析済みポスト1件あたり$0.0003から。
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier): すべてのポストについて、独自のカテゴリー、スコア、はい/いいえの質問にAIが答えます。既定の分析が自分のラベルに合わないときに使います。分析済みポスト1件あたり$0.0003から。
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer): AIによる8つの特性の回答から、すべてのポストについて0から100のViral Scoreと判定を推定します。ポストが広がる理由や伸びない理由を調べるときに使います。分析済みポスト1件あたり$0.0003から。

## スクレイピング以外も必要ですか？

Xquikは、53個のダッシュボードツール、REST API、署名付きWebhook、MCPサーバーも提供しています。

- [APIドキュメント](https://docs.xquik.com/introduction): REST APIのガイド
- [Community Info API](https://docs.xquik.com/api-reference/x/community-info): 1つのコミュニティのレコードを取得
- [Community Posts API](https://docs.xquik.com/api-reference/x/community-tweets): コミュニティのポストを取得
- [Community Members API](https://docs.xquik.com/api-reference/x/community-members): コミュニティのメンバーをエクスポート
- [Find Communities API](https://docs.xquik.com/api-reference/x/community-find): キーワードでコミュニティを検索
- [MCPサーバー](https://docs.xquik.com/mcp/overview): 対応するツールを確認
- [Webhooks](https://docs.xquik.com/webhooks/overview): 署名付きのイベント配信

## よくある質問

よくある質問に答えたあと、サポートを受けられる場所を案内します。

### X APIキーやログインは必要ですか？

いいえ。XquikのX Community Scraperは、X APIキー、ログイン、認証情報を必要としません。

### コミュニティのIDはどうやって見つけますか？

x.comでコミュニティを開きます。IDは、URLの `/i/communities/` の後ろにある数字です。URL全体を `startUrls` に貼り付けることもできます。

### XのコミュニティのメンバーをCSVやExcelにエクスポートできますか？

はい。`members` リソースを選び、データセットをCSV、Excel、JSON、HTMLでエクスポートしてください。

### IDがなくてもコミュニティを見つけられますか？

はい。キーワードを `searchTerms` に、トピックを `topics` に入れて送ってください。見つかった各コミュニティは、完全なレコードを持つ1行になります。

### コミュニティの話題のポストを取得できますか？

はい。`postsOrder` を `Top` に設定してください。最も人気のあるポストだけを残すには、`minLikes` か `minViews` を追加します。

### 1回の実行で何個のコミュニティをスクレイピングできますか？

指定した数だけスクレイピングできます。行数の上限は、`maxItems` とApifyの支出上限で決まります。

### 非公開のコミュニティも読み取れますか？

いいえ。XquikのX Community Scraperが返すのは、Xが表示する公開コミュニティだけです。

### Xのコミュニティをスクレイピングしても合法ですか？

XquikのX Community Scraperは、Xの公開フィールドを取得します。結果には個人データが含まれることがあります。目的が合法であることを確認し、適用されるプライバシー規則に従ってください。判断に迷う場合は、資格のある弁護士に相談してください。

### 実行結果が0件だったのはなぜですか？

まず実行ステータスを確認してください。結果が空の実行では、ステータスが対象とフィルターの確認を促します。無料の `diagnostics` 出力は、確認が必要なことがあるときに表示されます。その `stopCauses` は原因ごとに、次に取る行動を `nextAction` で示します。読み取れない入力があれば、実行はそれぞれを挙げて直し方を示します。

### API、スケジュール、連携は使えますか？

はい。50個の公開タスクかXquik REST APIから選べます。[APIタブ](https://apify.com/xquik/x-community-scraper/api)には、Python、JavaScript、cURLの例があります。Apifyの[スケジュール](https://docs.apify.com/platform/schedules)を使うと、XquikのX Community Scraperをcronで実行できます。エージェントは[Apify MCP](https://docs.apify.com/platform/integrations/mcp)から呼び出せます。古いビルドが必要な場合を除き、`latest` を使ってください。

### カスタムソリューションを依頼できますか？

はい。[xquik.com](https://xquik.com)にアクセスするか、[APIドキュメント](https://docs.xquik.com/introduction)をお読みください。ダッシュボード、API、MCPサーバー、Webhookについて説明しています。

### どこでサポートを受けられますか？

Actorページでissueを開くか、実行IDを添えて<support@xquik.com>に連絡してください。キーバリューストアにある無料の診断情報が、確認が必要な実行の理由を説明します。行が1件も返らなかった実行は、その理由をステータスで示します。
