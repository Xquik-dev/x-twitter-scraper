[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · [简体中文](README.zh-CN.md) · **日本語** · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![FramerがXquik MCPをコーディングエージェントに接続する様子](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[FramerがXquikのスクレイパーをClaude Code、Codex、Cursorなどと一緒に使う様子](https://youtu.be/4UOSpoOoC3Y?t=367)を6:07から視聴できます。

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。XquikのX User Search Scraperは、ユーザー名、自己紹介&所在地でユーザーを探します。他のApify Actorの多くは、フィルタリングや重複排除の前に課金します。Xquikが課金するのは、配信した結果のうち、重複がなくフィルター条件に合うものだけです。

名前、トピック、自己紹介、所在地でTwitterのユーザー検索ができます。X APIキーもログインも不要です。料金は**配信されたプロフィール1件につき$0.00015**で、プラットフォームの利用料はApifyが別途請求します。

> Xquikは独立したサードパーティサービスです。X Corpとは提携していません。
> 「Twitter」および「X」はX Corpの商標です。

## アカウントのデータ&フィルター

- オーディエンス、ポスト、アカウント年数、認証、ウェブサイト、所在地、自己紹介、ユーザー名&メールアドレスのフィルター。
- 各プロフィールが公開しているメールアドレス、電話番号&リンクを含む `email` & `contactInfo`。
- `mode: "autocomplete"`。各検索語についてXが提案するアカウント、トピック、ハッシュタグ&キャッシュタグを返します。
- `startCursor` に保存したカーソルからの、1つのクエリの再開。
- Apifyが実行を再起動しても残る、配信済みの行&進捗。
- 課金前のフィルター&重複排除。

## Xのユーザーを検索する方法

Apifyを初めて使いますか？まず[無料アカウントを作成してください](https://console.apify.com/sign-up?fpr=xquik)。無料プランはクレジットカード不要&毎月$5分を使えます。1プロフィールあたり$0.00015なので、プラットフォーム利用料を別にすると、$5で最大33,000件のプロフィールをまかなえます。その後、このページに戻ってTry for freeを押してください。

1. Apify ConsoleでXquikのX User Search Scraperを開きます。
2. 名前、トピック、自己紹介、所在地を `searchTerms` に入力します。
3. `minFollowers`、`verifiedOnly`、`locationContains` などのフィルターを追加します。
4. `maxItems` で配信するプロフィール数の上限を決め、Startをクリックします。
5. データセットをJSON、CSV、Excelのいずれかでダウンロードするか、Apify APIを使います。

## 入力

```json
{
  "searchTerms": ["artificial intelligence", "machine learning"],
  "minFollowers": 1000,
  "maxItems": 10000
}
```

問題なく終わった小規模な実行は、`run-report` を省いてApifyの利用料を節約します。毎回書き込むには `alwaysSaveRunRecords` をオンにしてください。

### 他のユーザー検索用Actorから移行する

今使っている入力をそのまま貼り付けてください。XquikのX User Search Scraperは、他のActorの次のフィールド名を読み取ります。各行は、そのActorのフィールドを挙げ、続けて対応先のフィールドを示します。

- `requireEmail`、`requireWebsite` は `hasEmail`、`hasWebsite` に対応します。
- `verification` では、`any_verified` は `verifiedOnly` を、`blue_verified` は `blueVerifiedOnly` を、`business` & `government` は `verifiedType` を設定します。`unverified` を指定すると、読み取りや課金の前に実行が止まります。
- `bioKeywords` は `bioContains` に対応します。その語句のうち、どれか1つが一致すれば残ります。
- 値が1つの `locationKeywords` は `locationContains` に対応します。値が2つ以上あると、読み取りや課金の前に実行が止まります。
- リストとして渡した `emailDomains` は `emailDomains` に対応します。
- `outputEmail`、`resolveShortLinks` に対応するフィールドは不要です。すべての行に、メールアドレス&Xの完全なリンクが含まれます。
- `findEmails`、`extractEmails` に対応するフィールドは不要です。行には、プロフィールがX上で公開しているメールアドレスが含まれます。実行ステータスは、このActorがリンク先のサイトを読み取らないことを示します。
- `validateEmails` に対応するフィールドは不要です。このActorはメールボックスを確認しないため、メールアドレスは公開されているとおりに届くと実行ステータスが示します。

これらの名前のどれか&対応する正規のフィールドの両方を設定した場合は、正規の値が優先されます。実行ログには、採用されなかったフィールドが記録されます。

## 検索のオートコンプリート

誰かが入力している最中にXが提案する内容を読み取るには、`mode` を `autocomplete` に設定します。各検索語は、提案されたアカウント、トピック、ハッシュタグ&キャッシュタグを返します。

```json
{
  "searchTerms": ["nasa", "$tsla"],
  "mode": "autocomplete",
  "suggestionTypes": ["users", "cashtags"],
  "maxItems": 100
}
```

- ハッシュタグには `#` で、キャッシュタグには `$` で検索語を始めます。
- `suggestionTypes` は、選んだ種類だけを残します。
- 各行は、種類を `suggestionType` に、検索に使うテキストを `suggestion` に示します。
- キャッシュタグの行には、`price`、`marketCap` & `dailyChangePercent` が入ります。
- プロフィールのフィルターは、`mode: "search"` にだけ適用されます。

提案の行は次のようになります。

```json
{
  "suggestionType": "user",
  "suggestion": "@sample_user",
  "username": "sample_user",
  "name": "Sample User",
  "verified": true,
  "sourceTarget": "sample"
}
```

## 出力

各行には、プロフィール&その取得元のクエリを示す `sourceTarget` が入ります。

例はサンプル値です。結果にはライブデータが反映されます。プロフィールの行は次のようになります。

```json
{
  "username": "sample_user",
  "name": "Sample User",
  "description": "Sample bio about artificial intelligence",
  "followers": 2500,
  "verified": false,
  "sourceTarget": "artificial intelligence"
}
```

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

## Xのユーザー検索にはいくらかかりますか？

どのApifyプランでも、配信されたプロフィール1件につき$0.00015です。オートコンプリートの提案も、配信された行1件につき同じ料金です。プラットフォームの利用料は、Apifyが別途請求します。

より多くの量が必要なら、前払いの利用枠が多い[Apifyプランを選んでください](https://apify.com/pricing?fpr=xquik)。

- 課金は配信したデータ行1件につき1回です。`diagnostics` の診断情報は無料です。
- 開始、クエリ、ページの料金はかかりません。
- フィルター&重複排除は課金の前に行います。

## 制限&復旧

抽出が中断されると、無料の `partial` 診断を書き込みます。取得できた結果はそのまま残ります。再試行する前に `availableResults`、`failedTargets`、`retryable` & `nextAction` を確認してください。Actorの正常終了が示すのは配信の完了です。抽出が最後まで終わったことは意味しません。

実行ステータスは、早期停止の原因をすべて示します。`stopCauses` は各原因を挙げ、それぞれに `message`、`retryable` & `nextAction` を付けます。原因は `target_not_found`、`target_failed`、`pagination_safety_limit` & `deadline_reached` です。存在しない対象が一覧に入るのは、別の原因で実行が止まった場合だけです。いずれかの原因が再試行可能なら、実行も `retryable` になります。

## 関連するXquik Actor

すべてのXquik Actorは、同じ抽出エンジン、フィルター優先の課金&診断機能を共有しています。必要なデータに合うものを選んでください。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper)は、検索、プロフィールのタイムライン、リスト&ポストIDから、50以上のフィルター&フラットなエクスポート付きでポストをスクレイピングします。分析なしでポストデータが必要なときに使います。1行あたり$0.00015から。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper)は、ユーザー名、ID、URLから、プロフィールとそのポスト、返信、メディア&フォロワーをスクレイピングします。検索ではなくアカウントから始めるときに使います。1行あたり$0.00015から。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper)は、25以上のフィルターで、ポストへの返信、コメント&会話全体をスクレイピングします。ポストの下の議論が必要なときに使います。1行あたり$0.00015から。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper)は、ポストのURLやIDから、返信、引用ポスト、リポストしたユーザー&スレッドを一括でスクレイピングします。誰がポストに反応したかを測るときに使います。1行あたり$0.00015から。
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper)は、11のフィルターを使い、ポストの引用ポストを、テキスト、メディア、件数&著者とともにスクレイピングします。ポストを引用した人&その発言を調べるときに使います。1ポストあたり$0.00015から。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper)は、フォロワー、フォロー中、リストのメンバー、購読者&コミュニティのメンバーをプロフィール行としてスクレイピングします。オーディエンスやメンバーの一覧が必要なときに使います。1プロフィールあたり$0.00015から。
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

### X APIキーやログインは必要ですか？

いいえ。XquikのX User Search Scraperは、X APIキー、ログイン、認証情報を必要としません。

### Xのアカウントをスクレイピングしても合法ですか？

XquikのX User Search Scraperは、Xの公開フィールドを取得します。結果には個人データが含まれることがあります。目的が合法であることを確認し、適用されるプライバシー規則に従ってください。判断に迷う場合は、資格のある弁護士に相談してください。

### 実行結果が0件だったのはなぜですか？

まず実行ステータスを確認してください。結果が空の実行では、ステータスが対象&フィルターの確認を促します。対応が必要なことがあると、無料の `diagnostics` 出力が現れます。その `stopCauses` は、原因ごとに従うべき `nextAction` を示します。

### API、スケジュール&連携は使えますか？

はい。50個の公開タスクかXquik REST APIから選べます。[APIタブ](https://apify.com/xquik/x-user-search-scraper/api)には、Python、JavaScript & cURLの例があります。Apifyの[スケジュール](https://docs.apify.com/platform/schedules)で、XquikのX User Search Scraperをcronで実行できます。エージェントは[Apify MCP](https://docs.apify.com/platform/integrations/mcp)を使います。古いビルドが必要な場合を除き、`latest` を使ってください。

### どこでサポートを受けられますか？

実行IDを添えて、[Issuesタブ](https://apify.com/xquik/x-user-search-scraper/issues)でissueを開いてください。キーバリューストアにある無料の診断情報が、対応が必要な実行について説明します。行が1件も返らなかった実行は、その理由をステータスで示します。

### カスタムソリューションを依頼できますか？

はい。必要な内容を[Issuesタブ](https://apify.com/xquik/x-user-search-scraper/issues)に書いてください。Xquikは、ダッシュボード、REST API、MCPサーバー & Webhookも提供しています。Xquikのウェブサイトは、Xquikの[Apifyプロフィール](https://apify.com/xquik)にあります。
