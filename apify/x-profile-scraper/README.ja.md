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

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。XquikのX Profile Scraperは、任意のユーザー名について、プロフィール、ポスト、返信、メディア、フォロワーを収集します。他のApify Actorの多くは、フィルタリングや重複排除の前に課金します。Xquikが課金するのは、配信した結果のうち、重複がなくフィルター条件に合うものだけです。

ユーザー名、ID、URLから、Xのプロフィール、ポスト、返信、メディア、フォロワーをスクレイピングします。料金は**配信された行1件につき$0.00015**で、Apifyのプラットフォーム利用料は別途かかります。X APIキーやログインは不要です。

> Xquikは独立したサードパーティサービスです。X Corpとは提携していません。
> 「Twitter」および「X」はX Corpの商標です。

## X Profile Scraperでできること

XquikのX Profile Scraperは、ユーザー名、数値のユーザーID、プロフィールURLから、公開されているX(Twitter)のプロフィールを返します。各プロフィールには、ポスト、返信、メディア、ハイライト、フォロワー、フォロー中、認証済みフォロワーを追加できます。自己紹介の翻訳や、今ライブ配信しているアカウントの確認もできます。

### 主な機能

- ユーザー名、ID、URLから、1回の実行で多数のプロフィールを読み取れます。
- ポスト、返信、メディア、ハイライト、フォロワー、フォロー中、認証済みフォロワーを、別々の行として追加できます。
- `translateBioTo` で、各自己紹介を言語コードで指定した言語に翻訳できます。
- `checkLiveNow` で、各プロフィールが今ライブ配信中かどうかを確認できます。
- ポストを日付、言語、メディア、エンゲージメントで絞り込めます。
- プロフィールをオーディエンスの規模、アカウント年数、認証で絞り込めます。
- フィルターと重複排除は課金前に行います。
- Apifyが実行を再起動しても、配信済みの行と進捗は残ります。

### ユースケース

- 自己紹介、ウェブサイト、所在地、オーディエンスの規模で、見込み客リストを充実させられます。
- フォロワー、ポスト、認証で、競合のアカウントを比較できます。
- オーディエンス、アカウント年数、エンゲージメントから、クリエイターを見極められます。
- アカウントのポスト、メディア、ハイライトをアーカイブできます。
- フォロワーとフォロー中から、アカウントのつながりを把握できます。
- クリエイターやブランドのライブ配信をチェックできます。
- 他の市場のアカウントの自己紹介を、自分の言語で読めます。

### X Profile Scraperが抽出できるデータ

プロフィールの行は `resultType: "profile"` を使います。主なフィールドは次のとおりです。

| フィールド         | 説明                                      |
| ------------------ | ----------------------------------------- |
| `id`               | 数値のユーザーID                          |
| `username`         | `@` なしのユーザー名                      |
| `name`             | 表示名                                    |
| `description`      | 自己紹介の本文                            |
| `url`              | プロフィール行のウェブサイト              |
| `location`         | 本人が入力した所在地                      |
| `followers`        | フォロワー数                              |
| `following`        | フォロー中の数                            |
| `statusesCount`    | ポスト数                                  |
| `mediaCount`       | メディアのポスト数                        |
| `favouritesCount`  | アカウントが付けたいいねの数              |
| `listedCount`      | アカウントを含む公開リストの数            |
| `createdAt`        | アカウントの作成日時                      |
| `verified`         | Xが認証済みとしているかどうか             |
| `isBlueVerified`   | X Blueの認証があるかどうか                |
| `verifiedType`     | `Government` などの認証の種類             |
| `profilePicture`   | プロフィール画像のURL                     |
| `coverPicture`     | ヘッダー画像のURL                         |
| `pinnedTweetIds`   | 固定ポストのID                            |
| `professional`     | プロフェッショナルカテゴリーと種類        |
| `accountBasedIn`   | Xがベストエフォートで示す国や地域のラベル |
| `connectedVia`     | アカウントが最初にXへ接続した方法         |
| `usernameChanges`  | ユーザー名の変更回数と最後に変更した時期  |
| `birthdate`        | アカウントが公開した誕生日の項目          |
| `subscribersCount` | 購読者数（Xが返す場合）                   |
| `tipJar`           | 公開のチップリンク                        |
| `protected`        | ポストを非公開にしているかどうか          |
| `unavailable`      | アカウントを表示できないかどうか          |
| `sourceTarget`     | 入力したユーザー名、ID、URL               |

`identityVerification`、`isAutomated`、`automatedBy`、`withheldInCountries`、`verificationReason` など、そのほかのフィールドはすべてデータセットのスキーマに記載されています。

追加の行は、Xquik RESTのレスポンス形式のままです。

| `resultType`              | オンにするフィールド       | 1行あたりの対象        |
| ------------------------- | -------------------------- | ---------------------- |
| `profileTweet`            | `includeTweets`            | ポスト                 |
| `profileReply`            | `includeReplies`           | ポストまたは返信       |
| `profileMedia`            | `includeMedia`             | メディアのポスト       |
| `profileHighlight`        | `includeHighlights`        | ハイライトのポスト     |
| `profileFollower`         | `includeFollowers`         | フォロワー             |
| `profileFollowing`        | `includeFollowing`         | フォロー中のアカウント |
| `profileVerifiedFollower` | `includeVerifiedFollowers` | 認証済みフォロワー     |
| `profileBioTranslation`   | `translateBioTo`           | 翻訳した自己紹介       |
| `profileLive`             | `checkLiveNow`             | 確認したプロフィール   |

行には、あなたがそのアカウントをフォローやブロックしているかといった、閲覧者だけに見える状態は入りません。

## X Profile Scraperでプロフィールデータをスクレイピングする方法

Apify Consoleで次の手順に従ってください。

1. [タスクの例](#タスクの例)かInputタブを開きます。
2. ユーザー名を `twitterHandles` に、URLを `startUrls` に、IDを `userIds` に追加します。
3. `includeTweets` など、必要なリソースをオンにします。
4. `maxItems` と必要なフィルターを設定し、Startをクリックします。
5. データセットをJSON、CSV、Excel、HTMLでエクスポートします。

以下のレシピは、どれも完全な入力です。

### 多数のプロフィールをスクレイピングする

```json
{ "twitterHandles": ["nasa", "OpenAI", "apify"], "maxItems": 100 }
```

各ユーザー名から、プロフィールの行が1件返ります。ユーザー名には `@` を付けても付けなくてもかまいません。

### プロフィールのURLやIDを貼り付ける

`startUrls` は、各URLを文字列のまま、または `{ "url": "..." }` オブジェクトとして受け取ります。`userIds` は、数値のXユーザーIDを受け取ります。

```json
{
  "startUrls": ["https://x.com/nasa", { "url": "https://x.com/OpenAI" }],
  "userIds": ["11348282"],
  "maxItems": 100
}
```

2回指定したユーザー名は、1回だけ読み取ります。

### ポスト、返信、メディアを追加する

```json
{
  "twitterHandles": ["nasa"],
  "includeTweets": true,
  "includeMedia": true,
  "sinceDate": "2026-01-01",
  "maxItems": 500
}
```

`includeTweets` は、プロフィールのポストタブを読み取ります。`includeReplies` は返信タブを、`includeMedia` はメディアタブを読み取ります。`includeHighlights` は、ハイライトタブにあるポストを、Xの順序で追加します。ハイライトのないプロフィールは、行を追加しません。

### 人気のポストだけを残す

```json
{
  "twitterHandles": ["nasa"],
  "includeTweets": true,
  "minLikes": 1000,
  "mediaType": "videos",
  "maxItems": 200
}
```

ポストのフィルターは、追加したポストの行に適用されます。フィルターで除いた行はデータセットに届かないので、料金はかかりません。

### フォロワーとフォロー中をエクスポートする

```json
{
  "twitterHandles": ["apify"],
  "includeFollowers": true,
  "minFollowers": 1000,
  "verifiedOnly": true,
  "maxItems": 1000
}
```

`includeFollowers`、`includeFollowing`、`includeVerifiedFollowers` は、アカウント1件につきプロフィールの行を1件追加します。プロフィールのフィルターは、これらの行とメインのプロフィールの両方に適用されます。

### 自己紹介を翻訳する

```json
{ "twitterHandles": ["nasa", "SpaceX"], "translateBioTo": "es" }
```

翻訳1件につき、`text`、`language`、`sourceLanguage` を持つ `profileBioTranslation` の行が1件入ります。自己紹介のないプロフィールでは、行も料金も追加されません。

### 今ライブ配信中のアカウントを確認する

```json
{ "twitterHandles": ["nasa", "SpaceX"], "checkLiveNow": true }
```

確認1件につき、`live`、`userId`、`userName`、`broadcast` を持つ `profileLive` の行が1件入ります。`broadcast` には、配信中か終了済みかを問わず、プロフィールの最新のブロードキャストが入ります。ない場合はnullです。存在しないプロフィールは、行を追加しません。

## タスクの例

50個の公開タスクから選べます。どのタスクにも、上限を決めた入力と、対応するデータセットビューがあります。実行前に編集してください。

- [1つのXアカウントのプロフィールカードを取得する](https://apify.com/xquik/x-profile-scraper/examples/get-an-x-profile-card)
- [競合ブランドのプロフィールを比較する](https://apify.com/xquik/x-profile-scraper/examples/compare-competitor-brand-profiles)
- [数値のユーザーIDをプロフィールに変換する](https://apify.com/xquik/x-profile-scraper/examples/resolve-numeric-user-ids-to-profiles)
- [1つのアカウントの最近のポストを収集する](https://apify.com/xquik/x-profile-scraper/examples/collect-recent-posts-from-an-account)
- [アカウントで最もいいねされたポストを見つける](https://apify.com/xquik/x-profile-scraper/examples/find-an-accounts-most-liked-posts)
- [アカウントがポストした動画を収集する](https://apify.com/xquik/x-profile-scraper/examples/collect-videos-from-an-account)
- [アカウントのポストを暦年で1年分アーカイブする](https://apify.com/xquik/x-profile-scraper/examples/archive-one-year-of-posts)
- [アカウントのフォロワーをエクスポートする](https://apify.com/xquik/x-profile-scraper/examples/export-the-followers-of-an-account)
- [企業の認証済みフォロワーをエクスポートする](https://apify.com/xquik/x-profile-scraper/examples/export-verified-followers)
- [フォロワーが10,000人以上いるフォロワーを見つける](https://apify.com/xquik/x-profile-scraper/examples/find-influential-followers)
- [2つのデザインツールのオーディエンスの重なりを測る](https://apify.com/xquik/x-profile-scraper/examples/measure-audience-overlap)
- [1つのアカウントを全面的に監査する](https://apify.com/xquik/x-profile-scraper/examples/run-a-full-account-audit)

## Xのプロフィールのスクレイピングにかかる費用は？

XquikのX Profile Scraperは、すべてのApifyプランで配信された行1件につき$0.00015です。Apifyのプラットフォーム利用料は別途かかります。Xquikの課金は、配信したデータ行1件につき1回です。`diagnostics` 出力の診断情報は無料です。

- Xquikのサブスクリプションは不要です。
- 開始料金、プロフィール料金、クエリ料金は別途かかりません。
- フィルターと重複排除は課金前に行います。除いた行や重複した行に支払うことはありません。
- 自己紹介のないプロフィールには、翻訳の料金がかかりません。
- 存在しないプロフィールには、ライブ確認の料金がかかりません。
- Apifyの最大合計課金額の設定で、配信する行数に上限をかけられます。

問題が起きた実行と大規模な実行は、`run-report` レコードも書き込みます。問題なく終わった小規模な実行は書き込まず、Apifyの利用料を節約します。毎回書き込むには `alwaysSaveRunRecords` をオンにしてください。

実行の支出に上限をかける方法は、[実行オプション](#実行オプション)を参照してください。

## 空の実行、部分的な実行、停止した実行

XquikのX Profile Scraperは、空の実行、部分的な実行、停止した実行の理由を無料で説明します。実行ステータスは、実行が止まった理由を示します。課金された結果と読み取った対象の数も数えます。

### 空の結果

結果が空の実行では、ステータスが対象とフィルターの確認を促します。フィルターで除いた行が、結果の上限を使うことはありません。すべての対象を読み取っても行が1件も返らなかった実行は、レコードを書き込みません。理由と変更すべき点は、そのステータスが示します。

Xは2024年から、アカウントがいいねしたポストをそのアカウント本人にだけ表示しています。そのため、他のアカウントについて `includeLikes` は `profileLike` の行を返しません。

### 部分的な実行

抽出が中断されると、無料の `partial` 診断を書き込みます。配信済みの行はデータセットに残ります。再試行する前に `availableResults`、`failedTargets`、`retryable`、`nextAction` を確認してください。Actorの正常終了が示すのは配信の完了です。抽出が最後まで終わったことは意味しません。

### 停止の原因

実行ステータスは、早期停止の原因をすべて示します。`stopCauses` は各原因を挙げ、それぞれに `message`、`retryable`、`nextAction` を付けます。原因は `target_not_found`、`target_suspended`、`target_failed`、`pagination_safety_limit`、`deadline_reached` です。`target_suspended` は、Xが凍結したアカウントを示します。存在しない対象や凍結された対象が一覧に入るのは、別の原因で実行が止まった場合だけです。いずれかの原因が再試行可能なら、実行も `retryable` になります。

## 入力

Inputタブにすべてのオプションがあります。`twitterHandles`、`startUrls`、`userIds` のうち、少なくとも1つを指定してください。ほかのフィールドはすべて任意です。

| フィールド                     | 内容                                          |
| ------------------------------ | --------------------------------------------- |
| `twitterHandles`               | `@` の有無を問わないユーザー名                |
| `startUrls`                    | x.comまたはtwitter.comのプロフィールURL       |
| `userIds`                      | 数値のXユーザーID                             |
| `maxItems`                     | 実行全体で配信する行数の上限                  |
| `maxItemsPerTarget`            | プロフィールやリソースごとの行数の上限        |
| `includeTweets`                | ポストタブを追加                              |
| `includeReplies`               | 返信タブを追加                                |
| `includeMedia`                 | メディアタブを追加                            |
| `includeHighlights`            | ハイライトタブを追加                          |
| `includeLikes`                 | いいねしたポストを追加（Xは本人以外に非表示） |
| `includeFollowers`             | フォロワーを追加                              |
| `includeFollowing`             | フォロー中のアカウントを追加                  |
| `includeVerifiedFollowers`     | 認証済みフォロワーを追加                      |
| `translateBioTo`               | 各自己紹介を翻訳する言語のコード（`es` など） |
| `checkLiveNow`                 | 各プロフィールが今ライブ配信中かどうかを確認  |
| `sinceDate`, `untilDate`       | 期間内のポストだけを残す                      |
| `language`                     | 1つの言語コードのポストだけを残す             |
| `mediaType`                    | 画像、動画、GIF、リンクの有無でポストを残す   |
| `minViews`, `minLikes`         | 表示回数かいいね数が一定以上のポストを残す    |
| `minReplies`, `minRetweets`    | 返信数かリポスト数が一定以上のポストを残す    |
| `nativeRetweets`               | 通常のリポストだけを残す                      |
| `verifiedOnly`                 | 認証済みの著者やプロフィールだけを残す        |
| `minFollowers`, `maxFollowers` | フォロワー数が範囲内のプロフィールを残す      |
| `minAccountAgeDays`            | 作成からこの日数以上たったプロフィールを残す  |
| `dedupeAcrossTargets`          | プロフィール間で重複する行を課金前に除く      |

### 適切な入力を選ぶ

- プロフィールカードだけが必要なら、ユーザー名を指定し、`include` のオプションはすべてオフのままにします。
- アカウントをアーカイブするなら、`includeTweets`、`includeMedia`、`includeHighlights` をオンにし、`sinceDate` を設定します。
- 人気のコンテンツが必要なら、`includeTweets` に `minLikes` か `minViews` を加えます。
- 見込み客リストを作るなら、`includeFollowers` をオンにし、`minFollowers` と `minAccountAgeDays` を設定します。
- オーディエンスの重なりを調べるなら、ユーザー名を2つ指定し、`includeFollowers` をオンにして、`dedupeAcrossTargets: false` を設定します。すると、共通のフォロワーがそれぞれのユーザー名の下に表示されます。

## 出力

各行はJSONオブジェクトです。データセットのスキーマは各フィールドにタイトルと説明を付けるので、AIエージェントは推測せずに行を読み取れます。

例はサンプル値です。実際の結果にはライブデータが入ります。プロフィールの行は次のようになります。

```json
{
  "resultType": "profile",
  "sourceTarget": "sample_user",
  "id": "1234567890",
  "username": "sample_user",
  "name": "Sample User",
  "description": "Building tools for researchers.",
  "url": "https://example.com",
  "location": "Lisbon",
  "followers": 1200,
  "following": 310,
  "statusesCount": 4200,
  "verified": false,
  "createdAt": "Tue Mar 21 20:50:14 +0000 2017",
  "accountBasedInUnavailable": true
}
```

Xは `accountBasedIn` を、アカウントへのアクセス元IPを集計して推定します。このラベルは、国籍、居住地、身元、登録地、ポストした場所、正確な位置を示すものではありません。`observedAt` は取得した時刻を記録します。Xがラベルを表示しない場合、`accountBasedIn` はnullです。Xがラベルを伏せている場合は、代わりに `accountBasedInUnavailable: true` が入ります。

データセットはJSON、CSV、Excel、HTMLでエクスポートできます。

## 実行オプション

- 実行のコストに上限をかけるには、Apifyの最大合計課金額を設定します。その予算で取得できるだけ多くの行を得るには、`maxItems` を大きな値のままにします。
- Apify APIでは `maxTotalChargeUsd` を、ConsoleではMax cost per runを設定します。
- プロフィールはすべて1回の実行にまとめてください。どの実行も、Apifyに同じ開始コストを支払います。
- `maxConcurrency` は、同時に処理するプロフィールの数を決めます。デフォルトは、安全な範囲で最も速い設定です。
- 1秒ごとのチェックと署名付きWebhookには、Xquikのアカウントモニターを使います。有効なモニターは1秒ごとにチェックします。

すべての実行で `latest` を選ぶと、公開済みのすべての修正が適用されます。保存済みのタスクとスケジュールはそれぞれのビルドの選択を保つので、`latest` のままにしておいてください。

## 関連するXquik Actor

すべてのXquik Actorは、同じ抽出エンジン、フィルター優先の課金、診断機能を共有しています。必要なデータに合うものを選んでください。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): 検索、プロフィールのタイムライン、リスト、ポストIDから、50以上のフィルターでポストをスクレイピングし、フラットな形式で出力します。分析なしでポストデータが必要なときに使います。1行あたり$0.00015から。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): 25以上のフィルターで、ポストへの返信、コメント、会話全体をスクレイピングします。ポストの下の議論が必要なときに使います。1行あたり$0.00015から。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): ポストのURLまたはIDから、返信、引用ポスト、リポストしたユーザー、スレッドを一括でスクレイピングします。誰がポストに反応したかを測るときに使います。1行あたり$0.00015から。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): フォロワー、フォロー中、リストのメンバー、購読者、コミュニティのメンバーをプロフィール行としてスクレイピングします。オーディエンスやメンバーの一覧が必要なときに使います。1プロフィールあたり$0.00015から。
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper): ユーザー名、自己紹介、所在地でユーザーを検索し、フォロワー数、認証、アカウント年数、所在地で絞り込みます。検索からアカウントの一覧を作るときに使います。1プロフィールあたり$0.00015から。
- [X List Scraper](https://apify.com/xquik/x-list-scraper): リストのURLまたはIDから、リストのポスト、メンバー、フォロワーをスクレイピングします。厳選したリストを情報源にするときに使います。1行あたり$0.00015から。
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): コミュニティの情報、ポスト、検索結果、メンバー、モデレーターをスクレイピングします。Xのコミュニティを情報源にするときに使います。1行あたり$0.00015から。
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
- [Profile Lookup API](https://docs.xquik.com/api-reference/x/twitter-profile-lookup): 公開プロフィールを1件取得
- [User Tweets API](https://docs.xquik.com/api-reference/x/user-tweets): ユーザーのポストを取得
- [Followers API](https://docs.xquik.com/api-reference/x/followers): アカウントのフォロワーを取得
- [Bio Translation API](https://docs.xquik.com/api-reference/x/user-bio-translation): プロフィールの自己紹介を翻訳
- [Live Status API](https://docs.xquik.com/api-reference/x/user-live-status): ユーザーがライブ配信中かどうかを確認
- [MCPサーバー](https://docs.xquik.com/mcp/overview): 対応するツールを確認
- [Webhooks](https://docs.xquik.com/webhooks/overview): 署名付きのイベント配信

## よくある質問

よくある質問に答えたあと、サポートを受けられる場所を案内します。

### X APIキーやログインは必要ですか？

いいえ。XquikのX Profile Scraperは、X APIキー、ログイン、認証情報を必要としません。

### 1回の実行で何件のプロフィールをスクレイピングできますか？

指定しただけ読み取れます。行数の上限は、`maxItems` とApifyの支出上限で決まります。

### XのプロフィールをCSVやExcelにエクスポートできますか？

はい。StorageタブからデータセットをJSON、CSV、Excel、HTMLでエクスポートできます。

### Twitterユーザーのフォロワーをスクレイピングできますか？

はい。`includeFollowers`、`includeFollowing`、`includeVerifiedFollowers` のいずれかをオンにしてください。アカウント1件が1行になります。

### プロフィールのウェブサイトと所在地も取得できますか？

はい。`url` にはウェブサイトが、`location` には本人が入力したテキストが入ります。

### 非公開アカウントをスクレイピングできますか？

公開プロフィールの行は、`protected: true` 付きで取得できます。Xは、非公開アカウントのポストとフォロワーを、承認済みのフォロワーにだけ表示します。

### アカウントが今ライブ配信中かどうかは、どうすればわかりますか？

`checkLiveNow: true` を設定します。各プロフィールに、`live` と最新のブロードキャストを持つ `profileLive` の行が入ります。

### 自己紹介を翻訳できますか？

はい。`translateBioTo` に、`es` や `pt-br` などの言語コードを設定します。自己紹介のないプロフィールは、行を追加しません。

### includeLikesが何も返さないのはなぜですか？

Xは2024年から、アカウントがいいねしたポストをそのアカウント本人にだけ表示しています。このActorを含め、他のアカウントはそれを読み取れません。

### Xのプロフィールをスクレイピングしても合法ですか？

XquikのX Profile Scraperは、Xの公開フィールドを取得します。結果には個人データが含まれることがあります。目的が合法であることを確認し、適用されるプライバシー規則に従ってください。判断に迷う場合は、資格のある弁護士に相談してください。

### 実行結果が0件だったのはなぜですか？

まず実行ステータスを確認してください。結果が空の実行では、ステータスが対象とフィルターの確認を促します。対応が必要なことがあると、無料の `diagnostics` 出力が表示されます。その `stopCauses` は、原因ごとに次に取る行動を `nextAction` で示します。読み取れない入力があれば、実行はそれぞれを挙げて直し方を示します。

### API、スケジュール、連携は使えますか？

はい。50個の公開タスクかXquik REST APIから選べます。[APIタブ](https://apify.com/xquik/x-profile-scraper/api)には、Python、JavaScript、cURLの例があります。Apifyの[スケジュール](https://docs.apify.com/platform/schedules)を使うと、XquikのX Profile Scraperをcronで実行できます。エージェントは[Apify MCP](https://docs.apify.com/platform/integrations/mcp)から呼び出せます。古いビルドが必要な場合を除き、`latest` を使ってください。

### カスタムソリューションを依頼できますか？

はい。[xquik.com](https://xquik.com)にアクセスするか、[APIドキュメント](https://docs.xquik.com/introduction)をお読みください。ダッシュボード、API、MCPサーバー、Webhookについて説明しています。

### どこでサポートを受けられますか？

Actorページでissueを開くか、実行IDを添えて<support@xquik.com>に連絡してください。対応が必要な実行は、キーバリューストアにある無料の診断情報が説明します。行が1件も返らなかった実行は、そのステータスで理由を示します。
