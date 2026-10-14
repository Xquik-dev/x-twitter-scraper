[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · [简体中文](README.zh-CN.md) · **日本語** · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![FramerがXquik MCPをコーディングエージェントに接続する様子](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[FramerがXquikのスクレイパーをClaude Code、Codex、Cursorなどと一緒に使う様子](https://youtu.be/4UOSpoOoC3Y?t=367)を6:07から視聴できます。

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。XquikのX Profile Scraperは、任意のユーザー名について、プロフィール、ポスト、返信、メディア&フォロワーを収集します。他のApify Actorの多くは、フィルタリングや重複排除の前に課金します。Xquikが課金するのは、配信した結果のうち、重複がなくフィルター条件に合うものだけです。

Twitterアカウントをまとめて調べ、Xアカウントなしでプロフィールを読めます。ユーザー名、ID、URLから、Xのプロフィール、ポスト、返信、メディア&フォロワーをスクレイピングします。料金は**配信された行1件につき$0.00015**で、プラットフォームの利用料はApifyが別途請求します。X APIキーもログインも不要です。

> Xquikは独立したサードパーティサービスです。X Corpとは提携していません。
> 「Twitter」および「X」はX Corpの商標です。

## X Profile Scraperでは何ができますか？

XquikのX Profile Scraperは、ユーザー名、数値のユーザーID、プロフィールのURLから、公開されているX(Twitter)のプロフィールを返します。各プロフィールには、そのポスト、返信、メディア、ハイライト、フォロワー、フォロー中&認証済みフォロワーを追加できます。自己紹介の翻訳&今ライブ配信しているアカウントの確認もできます。

### 主な機能

- ユーザー名、ID、URLから、1回の実行で多数のプロフィールを読み取れます。
- ポスト、返信、メディア、ハイライト、フォロワー、フォロー中、認証済みフォロワーを、別々の行として追加できます。
- `translateBioTo` で、各自己紹介を言語コードで指定した言語に翻訳できます。
- `checkLiveNow` で、各プロフィールが今ライブ配信中かどうかを確認できます。
- ポストを日付、言語、メディア&エンゲージメントで絞り込めます。
- プロフィールをオーディエンスの規模、アカウント年数&認証で絞り込めます。
- フィルター&重複排除は課金の前に行います。
- Apifyが実行を再起動しても、配信済みの行&進捗は残ります。

### ユースケース

- 自己紹介、ウェブサイト、所在地&オーディエンスの規模で、見込み客リストを充実させます。
- フォロワー、ポスト&認証で、競合のアカウントを比較します。
- オーディエンス、アカウント年数&エンゲージメントから、クリエイターを見極めます。
- アカウントのポスト、メディア&ハイライトをアーカイブします。
- フォロワー&フォロー中から、アカウントのつながりを把握します。
- クリエイター&ブランドのライブ配信を見守ります。
- 他の市場の自己紹介を、自分の言語で読みます。

### X Profile Scraperではどんなデータを抽出できますか？

プロフィールの行は `resultType: "profile"` を使います。主なフィールドは次のとおりです。

| フィールド | 説明 |
| --- | --- |
| `id` | 数値のユーザーID |
| `username` | `@` なしのユーザー名 |
| `name` | 表示名 |
| `description` | 自己紹介の本文 |
| `url` | プロフィール行のウェブサイト |
| `location` | 本人が入力した所在地 |
| `email` | プロフィールが公開している最初のメールアドレス |
| `contactInfo` | プロフィールが公開しているメールアドレス、電話番号&リンク |
| `followers` | フォロワー数 |
| `following` | フォロー中の数 |
| `statusesCount` | ポスト数 |
| `mediaCount` | メディアのポスト数 |
| `favouritesCount` | アカウントが付けたいいねの数 |
| `listedCount` | アカウントを含む公開リストの数 |
| `createdAt` | アカウントの作成日時 |
| `verified` | Xが認証済みとしているかどうか |
| `isBlueVerified` | アカウントにX Blueの認証があるかどうか |
| `verifiedType` | `Government` などの認証の種類 |
| `profilePicture` | 48pxのプロフィール画像のURL |
| `profilePictureOriginal` | ダウンロード用の、フルサイズの同じ画像 |
| `coverPicture` | ヘッダー画像のURL |
| `pinnedTweetIds` | 固定ポストのID |
| `professional` | プロフェッショナルのカテゴリー&種類 |
| `accountBasedIn` | Xがベストエフォートで示す国や地域のラベル |
| `connectedVia` | アカウントが最初にXへ接続した方法 |
| `usernameChanges` | ユーザー名の変更回数&最後に変更した時期 |
| `birthdate` | アカウントが公開した誕生日の項目 |
| `subscribersCount` | Xが返す場合の購読者数 |
| `tipJar` | 公開のチップリンク |
| `protected` | アカウントがポストを非公開にしているかどうか |
| `unavailable` | アカウントを表示できないかどうか |
| `sourceTarget` | 入力したユーザー名、ID、URL |

データセットのスキーマは、`identityVerification`、`isAutomated`、`automatedBy`、`withheldInCountries` & `verificationReason` など、そのほかのすべてのフィールドを説明しています。

オプションの行は、Xquik RESTのレスポンス形式を保ちます。

| `resultType` | オンにする入力 | 1行あたりの対象 |
| --- | --- | --- |
| `profileTweet` | `includeTweets` | ポスト |
| `profileReply` | `includeReplies` | ポストまたは返信 |
| `profileMedia` | `includeMedia` | メディアのポスト |
| `profileHighlight` | `includeHighlights` | ハイライトされたポスト |
| `profileFollower` | `includeFollowers` | フォロワー |
| `profileFollowing` | `includeFollowing` | フォロー中のアカウント |
| `profileVerifiedFollower` | `includeVerifiedFollowers` | 認証済みフォロワー |
| `profileBioTranslation` | `translateBioTo` | 翻訳した自己紹介 |
| `profileLive` | `checkLiveNow` | 確認したプロフィール |

行には、あなたがそのアカウントをフォローやブロックしているかなど、閲覧者だけに見える状態は入りません。

## X Profile Scraperでプロフィールデータをスクレイピングするには？

Apifyを初めて使いますか？まず[無料アカウントを作成してください](https://console.apify.com/sign-up?fpr=xquik)。無料プランはクレジットカード不要&毎月$5分を使えます。1行あたり$0.00015なので、プラットフォーム利用料を別にすると、$5で最大33,000行分をまかなえます。その後、このページに戻ってTry for freeを押してください。

Apify Consoleで次の手順に従ってください。

1. [タスクの例](#タスクの例)かInputタブを開きます。
2. ユーザー名を `twitterHandles` に、URLを `startUrls` に、IDを `userIds` に追加します。
3. `includeTweets` など、必要なリソースをオンにします。
4. `maxItems` & 必要なフィルターを設定し、Startをクリックします。
5. データセットを、JSON、CSV、Excel、HTMLのいずれかでエクスポートします。

以下の各レシピは、そのまま使える完全な入力です。

### 多数のプロフィールをスクレイピングする

```json
{ "twitterHandles": ["nasa", "OpenAI", "apify"], "maxItems": 100 }
```

各ユーザー名から、プロフィールの行が1件返ります。ユーザー名は `@` 付きでも `@` なしでも使えます。

### プロフィールのURLやIDを貼り付ける

`startUrls` は、各URLを文字列のまま、または `{ "url": "..." }` オブジェクトとして受け取ります。`userIds` は、数値のXユーザーIDを受け取ります。

```json
{
  "startUrls": ["https://x.com/nasa", { "url": "https://x.com/OpenAI" }],
  "userIds": ["11348282"],
  "maxItems": 100
}
```

実行は、重複したユーザー名を1回だけ読み取ります。

### ポスト、返信&メディアを追加する

```json
{
  "twitterHandles": ["nasa"],
  "includeTweets": true,
  "includeMedia": true,
  "sinceDate": "2026-01-01",
  "maxItems": 500
}
```

`includeTweets` は、プロフィールのポストタブをたどります。`includeReplies` は返信タブを、`includeMedia` はメディアタブをたどります。`includeHighlights` は、ハイライトタブにあるポストをXの順序で追加します。ハイライトのないプロフィールは、行を追加しません。

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

ポストのフィルターは、オプションのポストの行に適用されます。フィルターで除いた行はデータセットに届かないので、その分を支払うことはありません。

### フォロワー&フォロー中をエクスポートする

```json
{
  "twitterHandles": ["apify"],
  "includeFollowers": true,
  "minFollowers": 1000,
  "verifiedOnly": true,
  "maxItems": 1000
}
```

`includeFollowers`、`includeFollowing` & `includeVerifiedFollowers` は、アカウント1件につきプロフィールの行を1件追加します。プロフィールのフィルターは、これらの行&メインのプロフィールに適用されます。

### 自己紹介を翻訳する

```json
{ "twitterHandles": ["nasa", "SpaceX"], "translateBioTo": "es" }
```

翻訳1件ごとに、`text`、`language` & `sourceLanguage` を持つ `profileBioTranslation` の行が1件入ります。自己紹介のないプロフィールでは、行も料金も追加されません。

### 今ライブ配信中のアカウントを確認する

```json
{ "twitterHandles": ["nasa", "SpaceX"], "checkLiveNow": true }
```

確認1件ごとに、`live`、`userId`、`userName` & `broadcast` を持つ `profileLive` の行が1件入ります。`broadcast` には、配信中か終了済みかを問わず、プロフィールの最新のブロードキャストが入ります。ない場合はnullです。存在しないプロフィールは、行を追加しません。

## タスクの例

50個の公開タスクから選べます。どのタスクにも、上限を決めた入力&対応するデータセットビューがあります。実行前にタスクを編集できます。

- [1つのXアカウントのプロフィールカードを取得する](https://apify.com/xquik/x-profile-scraper/examples/get-an-x-profile-card)
- [競合ブランドのプロフィールを比較する](https://apify.com/xquik/x-profile-scraper/examples/compare-competitor-brand-profiles)
- [数値のユーザーIDをプロフィールに変換する](https://apify.com/xquik/x-profile-scraper/examples/resolve-numeric-user-ids-to-profiles)
- [1つのアカウントの最近のポストを収集する](https://apify.com/xquik/x-profile-scraper/examples/collect-recent-posts-from-an-account)
- [アカウントで最もいいねされたポストを見つける](https://apify.com/xquik/x-profile-scraper/examples/find-an-accounts-most-liked-posts)
- [アカウントがポストした動画を収集する](https://apify.com/xquik/x-profile-scraper/examples/collect-videos-from-an-account)
- [アカウントの暦年1年分をアーカイブする](https://apify.com/xquik/x-profile-scraper/examples/archive-one-year-of-posts)
- [アカウントのフォロワーをエクスポートする](https://apify.com/xquik/x-profile-scraper/examples/export-the-followers-of-an-account)
- [企業の認証済みフォロワーをエクスポートする](https://apify.com/xquik/x-profile-scraper/examples/export-verified-followers)
- [フォロワーが10,000人以上いるフォロワーを見つける](https://apify.com/xquik/x-profile-scraper/examples/find-influential-followers)
- [2つのデザインツールのオーディエンスの重なりを測る](https://apify.com/xquik/x-profile-scraper/examples/measure-audience-overlap)
- [1つのアカウントを全面的に監査する](https://apify.com/xquik/x-profile-scraper/examples/run-a-full-account-audit)

## Xのプロフィールのスクレイピングにはいくらかかりますか？

XquikのX Profile Scraperは、どのApifyプランでも配信された行1件につき$0.00015です。プラットフォームの利用料は、Apifyが別途請求します。Xquikの課金は、配信したデータ行1件につき1回です。`diagnostics` 出力の診断情報は無料です。

より多くの量が必要なら、前払いの利用枠が多い[Apifyプランを選んでください](https://apify.com/pricing?fpr=xquik)。

- Xquikのサブスクリプションは不要です。
- 開始、プロフィール、クエリの料金は別途かかりません。
- フィルター&重複排除は課金の前に行います。フィルターで除いた行や重複した行に支払うことはありません。
- 自己紹介のないプロフィールには、翻訳の料金がかかりません。
- 存在しないプロフィールには、ライブ確認の料金がかかりません。
- Apifyの最大合計課金額の設定で、配信する行数に上限をかけられます。

問題が起きた実行や大規模な実行は、`run-report` レコードも書き込みます。問題なく終わった小規模な実行は、これを省いてApifyの利用料を節約します。毎回書き込むには `alwaysSaveRunRecords` をオンにしてください。

実行の支出に上限をかける方法は、[実行オプション](#実行オプション)を参照してください。

## 空の実行、部分的な実行&停止した実行

XquikのX Profile Scraperは、空の実行、部分的な実行&停止した実行を無料で説明します。実行ステータスは、実行が止まった理由を示します。課金した結果&読み取った対象の数も数えます。

### 空の結果

結果が空の実行では、ステータスが対象&フィルターの確認を促します。フィルターで除いた行が、結果の上限を使うことはありません。すべての対象を読み取っても行が1件も返らない実行は、レコードを書き込みません。その理由&変えるべき点はステータスが示します。

Xは2024年から、アカウントがいいねしたポストをそのアカウント本人にだけ表示しています。そのため、他のアカウントについて `includeLikes` は `profileLike` の行を返しません。

### 部分的な実行

抽出が中断されると、無料の `partial` 診断を書き込みます。配信済みの行はデータセットに残ります。再試行する前に `availableResults`、`failedTargets`、`retryable` & `nextAction` を確認してください。Actorの正常終了が示すのは配信の完了です。抽出が最後まで終わったことは意味しません。

### 停止の原因

実行ステータスは、早期停止の原因をすべて示します。`stopCauses` は各原因を挙げ、それぞれに `message`、`retryable` & `nextAction` を付けます。原因は `target_not_found`、`target_suspended`、`target_failed`、`pagination_safety_limit` & `deadline_reached` です。`target_suspended` は、Xが凍結したアカウントを示します。存在しない対象や凍結された対象が一覧に入るのは、別の原因で実行が止まった場合だけです。いずれかの原因が再試行可能なら、実行も `retryable` になります。

## 入力

Inputタブには、すべてのオプションが表示されます。`twitterHandles`、`startUrls`、`userIds` のうち、少なくとも1つを指定してください。ほかのフィールドはすべて任意です。

| フィールド | 動作 |
| --- | --- |
| `twitterHandles` | `@` の有無を問わないユーザー名 |
| `startUrls` | `x.com` または `twitter.com` のプロフィールURL |
| `userIds` | 数値のXユーザーID |
| `maxItems` | 実行全体で配信する行数の上限 |
| `maxItemsPerTarget` | プロフィールやリソースごとの行数の上限 |
| `includeTweets` | ポストタブを追加する |
| `includeReplies` | 返信タブを追加する |
| `includeMedia` | メディアタブを追加する |
| `includeHighlights` | ハイライトタブを追加する |
| `includeLikes` | いいねしたポストを追加する。Xは本人以外にはこれを表示しない |
| `includeFollowers` | フォロワーを追加する |
| `includeFollowing` | フォロー中のアカウントを追加する |
| `includeVerifiedFollowers` | 認証済みフォロワーを追加する |
| `translateBioTo` | 各自己紹介を、`es` などの言語コードの言語に翻訳する |
| `checkLiveNow` | 各プロフィールが今ライブ配信中かどうかを確認する |
| `sinceDate`, `untilDate` | 期間内のポストを残す |
| `language` | 1つの言語コードのポストを残す |
| `mediaType` | 画像、動画、GIF、リンクを含むポスト、またはどれも含まないポストを残す |
| `minViews`, `minLikes` | 表示回数かいいね数が一定を超えるポストを残す |
| `minReplies`, `minRetweets` | 返信数かリポスト数が一定を超えるポストを残す |
| `nativeRetweets` | 通常のリポストだけを残す |
| `verifiedOnly` | 認証済みの著者やプロフィールを残す |
| `blueVerifiedOnly` | XがBlue認証済みとする著者やプロフィールを残す |
| `verifiedType` | 1つの認証の種類を持つプロフィールを残す |
| `minFollowers`, `maxFollowers` | フォロワー数が範囲内のプロフィールを残す |
| `minAccountAgeDays` | 作成からこの日数以上たったプロフィールを残す |
| `minFollowing`, `maxFollowing` | フォロー数が範囲内のプロフィールを残す |
| `minStatuses`, `maxStatuses` | ポスト数が範囲内のプロフィールを残す |
| `hasWebsite`, `hasLocation` | ウェブサイトか所在地を記載したプロフィールを残す |
| `hasEmail` | メールアドレスを公開しているプロフィールを残す |
| `businessEmailOnly` | フリーメール以外のメールアドレスを持つプロフィールを残す |
| `emailDomains` | これらのドメインのメールアドレスを持つプロフィールを残す |
| `bioContains` | 自己紹介にこれらの語のいずれかを含むプロフィールを残す |
| `locationContains` | 所在地にこのテキストを含むプロフィールを残す |
| `usernameContains` | ユーザー名にこのテキストを含むプロフィールを残す |
| `dedupeAcrossTargets` | プロフィール間で重複する行を課金前に除く |

### 他のプロフィール用Actorから移行する

今使っている入力をそのまま貼り付けてください。XquikのX Profile Scraperは、他のプロフィール用Actorの次のフィールド名を読み取ります。各行は、そのActorのフィールドを挙げ、続けて対応先のフィールドを示します。

- `profiles`、`userNames`、`usernames`、`handles`、`screenNames` は `twitterHandles` に対応します。
- `urls`、`profileUrls` は `startUrls` に対応します。
- `maxProfiles`、`maxResults` は `maxItems` に対応します。
- `shouldScrapeFollowers`、`shouldScrapeFollowings` は `includeFollowers`、`includeFollowing` に対応します。
- `requireEmail` は `hasEmail` に対応します。
- `requireWebsite` は `hasWebsite` に対応します。ウェブサイト欄に何らかのリンクがあるプロフィールを残し、実行ステータスがその旨を示します。
- `filterByBlueVerified` は `blueVerifiedOnly` に対応します。`false` を指定すると、読み取りや課金の前に実行が止まります。
- `bioKeywords` は `bioContains` に対応します。その語句のうち、どれか1つが一致すれば残ります。
- 値が1つの `locationKeywords` は `locationContains` に対応します。値が2つ以上あると、読み取りや課金の前に実行が止まります。
- リストとして渡した `emailDomains` は `emailDomains` に対応します。
- `outputEmail`、`resolveShortLinks` に対応するフィールドは不要です。すべての行に、メールアドレス&Xの完全なリンクが含まれます。
- `findEmails`、`extractEmails` に対応するフィールドは不要です。行には、プロフィールがX上で公開しているメールアドレスが含まれます。実行ステータスは、このActorがリンク先のサイトを読み取らないことを示します。
- `validateEmails` に対応するフィールドは不要です。このActorはメールボックスを確認しないため、メールアドレスは公開されているとおりに届くと実行ステータスが示します。

`category` を `user_info` に設定しても、何も変わりません。`tweets` や `followers` など、他のActorの役割にあたるカテゴリーは実行を止めます。そのとき、読み取り&課金は一切行いません。メッセージが、使うべきActorを示します。別名&対応する正規のフィールドの両方を設定した場合は、正規の値が優先されます。実行ログには、採用されなかった別名が記録されます。

### 適切な入力を選ぶ

- プロフィールカードだけが必要なら、ユーザー名を指定し、`include` のオプションはすべてオフのままにします。
- アカウントをアーカイブするなら、`includeTweets`、`includeMedia` & `includeHighlights` をオンにし、`sinceDate` を設定します。
- 人気のコンテンツが必要なら、`includeTweets` に `minLikes` か `minViews` を加えます。
- 見込み客リストを作るなら、`includeFollowers` をオンにし、`minFollowers` & `minAccountAgeDays` を組み合わせます。
- オーディエンスの重なりを調べるなら、ユーザー名を2つ指定し、`includeFollowers` をオンにして、`dedupeAcrossTargets: false` を設定します。すると、共通のフォロワーがそれぞれのユーザー名の下に表示されます。

## 出力

各行はJSONオブジェクトです。データセットのスキーマが各フィールドにタイトル&説明を付けるので、AIエージェントは推測せずに行を読み取れます。

例はサンプル値です。結果にはライブデータが反映されます。プロフィールの行は次のようになります。

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

Xは `accountBasedIn` を、アカウントへのアクセス元IPを集計して推定します。このラベルは、国籍、居住地、身元、登録地、ポストした場所、正確な位置のいずれも示しません。`observedAt` は取得した時刻を記録します。Xがラベルを表示しない場合、`accountBasedIn` はnullです。Xがラベルを伏せている場合は、代わりに行に `accountBasedInUnavailable: true` が入ります。

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

- オブジェクト内のフィールドは、`accountBasedIn.value` のようにドットでつないで指定します。大文字小文字&アンダースコアの違いは問いません。
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

- 実行のコストに上限をかけるには、Apifyの最大合計課金額を設定します。その予算で取得できる最大の行数を得るには、`maxItems` を大きな値のままにします。
- Apify APIでは `maxTotalChargeUsd` を、ConsoleではMax cost per runを設定します。
- プロフィールはすべて1回の実行にまとめてください。どの実行も、Apifyに同じ開始コストを支払います。
- `maxConcurrency` は、同時に処理するプロフィールの数を決めます。デフォルトは、安全な範囲で最も速い設定です。
- 1秒ごとのチェック&署名付きWebhookには、Xquikのアカウントモニターを使います。有効なモニターは1秒ごとにチェックします。

すべての実行で `latest` を選ぶと、公開済みのすべての修正が適用されます。保存済みのタスク&スケジュールはそれぞれのビルドの選択を保つので、`latest` のままにしておいてください。

## 関連するXquik Actor

すべてのXquik Actorは、同じ抽出エンジン、フィルター優先の課金&診断機能を共有しています。必要なデータに合うものを選んでください。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper)は、検索、プロフィールのタイムライン、リスト&ポストIDから、50以上のフィルター&フラットなエクスポート付きでポストをスクレイピングします。分析なしでポストデータが必要なときに使います。1行あたり$0.00015から。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper)は、25以上のフィルターで、ポストへの返信、コメント&会話全体をスクレイピングします。ポストの下の議論が必要なときに使います。1行あたり$0.00015から。
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

## よくある質問

よくある質問に答えたあと、サポートを受けられる場所を案内します。

### X APIキーやログインは必要ですか？

いいえ。XquikのX Profile Scraperは、X APIキー、ログイン、認証情報を必要としません。

### 1回の実行で何件のプロフィールをスクレイピングできますか？

指定しただけ読み取れます。行数の上限は、`maxItems` & Apifyの支出上限で決まります。

### XのプロフィールをCSVやExcelにエクスポートできますか？

はい。Storageタブから、データセットをJSON、CSV、Excel、HTMLのいずれかでエクスポートしてください。

### Twitterユーザーのフォロワーをスクレイピングできますか？

はい。`includeFollowers`、`includeFollowing`、`includeVerifiedFollowers` のいずれかをオンにしてください。アカウント1件が1行になります。

### プロフィールのウェブサイト&所在地も取得できますか？

はい。`url` にはウェブサイトが、`location` には本人が入力したテキストが入ります。それらを記載したプロフィールだけを残すには、`hasWebsite` & `hasLocation` を設定してください。

### 非公開アカウントをスクレイピングできますか？

公開プロフィールの行は、`protected: true` 付きで取得できます。Xは、非公開アカウントのポスト&フォロワーを、承認済みのフォロワーにだけ表示します。

### アカウントが今ライブ配信中かどうかは、どうすればわかりますか？

`checkLiveNow: true` を設定してください。各プロフィールに、`live` & 最新のブロードキャストを持つ `profileLive` の行が入ります。

### 自己紹介を翻訳できますか？

はい。`translateBioTo` に、`es` や `pt-br` などの言語コードを設定してください。自己紹介のないプロフィールは、行を追加しません。

### includeLikesが何も返さないのはなぜですか？

Xは2024年から、アカウントがいいねしたポストをそのアカウント本人にだけ表示しています。このActorを含め、他のアカウントはそれを読み取れません。

### Xのプロフィールをスクレイピングしても合法ですか？

XquikのX Profile Scraperは、Xの公開フィールドを取得します。結果には個人データが含まれることがあります。目的が合法であることを確認し、適用されるプライバシー規則に従ってください。判断に迷う場合は、資格のある弁護士に相談してください。

### 実行結果が0件だったのはなぜですか？

まず実行ステータスを確認してください。結果が空の実行では、ステータスが対象&フィルターの確認を促します。対応が必要なことがあると、無料の `diagnostics` 出力が現れます。その `stopCauses` は、原因ごとに従うべき `nextAction` を示します。実行は、読み取れない入力をすべて挙げ、直し方を示します。

### API、スケジュール&連携は使えますか？

はい。50個の公開タスクかXquik REST APIから選べます。[APIタブ](https://apify.com/xquik/x-profile-scraper/api)には、Python、JavaScript & cURLの例があります。Apifyの[スケジュール](https://docs.apify.com/platform/schedules)で、XquikのX Profile Scraperをcronで実行できます。エージェントは[Apify MCP](https://docs.apify.com/platform/integrations/mcp)を使います。古いビルドが必要な場合を除き、`latest` を使ってください。

### カスタムソリューションを依頼できますか？

はい。必要な内容を[Issuesタブ](https://apify.com/xquik/x-profile-scraper/issues)に書いてください。Xquikは、ダッシュボード、REST API、MCPサーバー & Webhookも提供しています。Xquikのウェブサイトは、Xquikの[Apifyプロフィール](https://apify.com/xquik)にあります。

### どこでサポートを受けられますか？

実行IDを添えて、[Issuesタブ](https://apify.com/xquik/x-profile-scraper/issues)でissueを開いてください。キーバリューストアにある無料の診断情報が、対応が必要な実行について説明します。行が1件も返らなかった実行は、その理由をステータスで示します。
