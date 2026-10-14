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

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。XquikのX Email Scraperは、XのCookieやログインなしで、アカウントが自分のXプロフィールで公開しているメールアドレスを取得します。他のApify Actorの多くは、フィルタリングや重複排除の前に課金します。Xquikが課金するのは、配信した結果のうち、重複がなくフィルター条件に合うものだけです。

ユーザー名を貼り付けるか、アカウントのフォロワーをスキャンするか、Xのユーザーを検索すると、メールアドレスを公開しているすべてのプロフィールを、メールアドレスを先頭にした行として取得できます。メールアドレスのないプロフィールは配信されず、料金もかかりません。料金は**配信された行1件につき$0.00015**で、Apifyのプラットフォーム利用料は別途かかります。

> Xquikは独立したサードパーティサービスです。X Corpとは提携していません。
> 「Twitter」および「X」はX Corpの商標です。

## すべての行に入る連絡先情報

- 小文字に変換した、プロフィールが公開している最初のメールアドレス。
- そのメールアドレスのドメインと、それが書かれているプロフィールの欄。欄は自己紹介、名前、所在地のいずれかです。
- 「name [at] site [dot] com」のような書き方も含む、プロフィールのすべてのメールアドレス。
- WhatsAppのリンクなど、プロフィールが公開している電話番号。
- それぞれにLinkedIn、GitHub、Telegramなどのネットワークを付けた、プロフィールのウェブサイトと自己紹介のリンク。
- 名前、自己紹介、各種の数、認証、日付、画像を含む公開プロフィールの全体。
- 1回の実行で使える3つの取得元。アカウント、そのフォロワーまたはフォロー中、ユーザー検索を使えます。
- メールアドレスのドメイン、ビジネス用メールアドレス、フォロワー数、アカウント年数、自己紹介、所在地のフィルター。
- @の有無を問わないユーザー名、x.comとtwitter.comのURL、数値のユーザーID。
- 課金前の重複排除。
- ApifyのデータセットによるJSON、CSV、Excel、XML、RSSのエクスポート。
- Apifyのマイグレーション後、保存した状態から再開する実行。

## Xのプロフィールからメールアドレスを取得する方法

1. Apify ConsoleでXquikのX Email Scraperを開きます。
2. ユーザー名、プロフィールURL、ユーザーIDを `twitterHandles` に貼り付けるか、`searchTerms` を追加します。
3. 代わりに各アカウントのフォロワーをスキャンするには、`expandFollowers` をオンにします。
4. `maxItems` で配信する行数の上限を決め、Startをクリックします。
5. データセットをJSON、CSV、Excelでダウンロードするか、Apify APIを使います。

どの手順でも、XのCookie、ログイン情報、APIキーを入力することはありません。

## 入力

`twitterHandles` は、アカウントのどの形式でも受け取ります。混ぜて指定してもかまいません。実行は各アカウントを確認し、メールアドレスを公開しているものを配信します。

```json
{
  "twitterHandles": ["sample_user", "@sample_org", "https://x.com/sample_shop"],
  "maxItems": 1000
}
```

`startUrls` と `userIds` も同じ形式を受け取ります。`expandFollowers` をオンにすると、実行は代わりに各アカウントのフォロワーを読み取り、メールアドレスを公開しているものを残します。`expansionRelation` で `Followers` か `Following` を選びます。

```json
{
  "twitterHandles": ["sample_org"],
  "expandFollowers": true,
  "expansionRelation": "Followers",
  "maxScan": 10000,
  "emailDomains": "example.com, example.org"
}
```

`searchTerms` は、名前、ユーザー名、自己紹介の語でXのユーザーを検索します。検索語1つが1回の検索です。

```json
{
  "searchTerms": ["booking", "founder"],
  "businessEmailOnly": true,
  "minFollowers": 1000
}
```

メールアドレスを公開しているのは、フォロワーのおよそ400人に1人です。そのため、フォロワーのスキャンは、配信する数よりはるかに多くのプロフィールを読み取ります。`maxScan` は、実行が各リストまたは各検索で読み取るプロフィール数に上限をかけます。初期値は10,000です。実行がそこでリストを止めると、読み取った行数を実行ステータスが示します。さらに先まで読み取るには、`maxScan` を大きくしてください。スキャンしたプロフィールは無料です。

`emailDomains` は、指定したドメインかそのサブドメインのメールアドレスを持つプロフィールを残します。`businessEmailOnly` は、Gmailなどの無料のウェブメール以外のメールアドレスを持つプロフィールを残します。`minFollowers`、`maxFollowers`、`minAccountAgeDays`、`verifiedOnly`、`hasWebsite`、`hasLocation`、`bioContains`、`locationContains` は、プロフィールをさらに絞り込みます。フィルターはすべて課金前に適用されます。

`searchQueries` と `keyword` は `searchTerms` の別名として、`maxFollowersPerHandle` は `maxScan` の別名として使えます。入力で2回指定したアカウントは、配信も課金も1回だけです。問題なく終わった小規模な実行は `run-report` を書き込まず、Apifyの利用料を節約します。毎回書き込むには `alwaysSaveRunRecords` をオンにしてください。

### 他のメールアドレス用Actorから移行する

今使っている入力をそのまま貼り付けてください。XquikのX Email Scraperは、他のActorの次のフィールド名を読み取ります。各項目は、そのActorのフィールドを挙げ、その後に対応付け先のフィールドを示します。

- `requireEmail` に対応するフィールドは不要です。配信されるすべてのプロフィールは、メールアドレスを公開しています。
- `requireWebsite` は `hasWebsite` に対応します。ウェブサイト欄にリンクが1つでもあるプロフィールを残し、実行ステータスにその旨が示されます。
- `bioKeywords` は `bioContains` に対応します。語句のうち1つが一致すれば十分です。
- 値が1つの `locationKeywords` は `locationContains` に対応します。値が2つ以上あると、読み取りや課金の前に実行が止まります。
- リストとしての `emailDomains` は `emailDomains` に対応します。
- `outputEmail`、`resolveShortLinks` に対応するフィールドは不要です。すべての行に、その行のメールアドレスとXの完全なリンクが含まれます。
- `findEmails`、`extractEmails` に対応するフィールドはありません。行には、プロフィールがX上で公開しているメールアドレスが含まれます。実行ステータスには、このActorがリンク先のサイトを読み取らないことが示されます。
- `validateEmails` に対応するフィールドはありません。このActorはメールボックスを確認しないため、実行ステータスには、メールアドレスが公開されているとおりに届くことが示されます。

これらの名前のどれかと正規のフィールドの両方を設定した場合は、正規の値が優先されます。実行ログには、採用されなかったフィールドが記録されます。

## 出力

メールアドレスを公開している各プロフィールがデータセットの1行になります。先頭には連絡先情報が入ります。`email`、`emailDomain`、`emailSource`、`contactInfo` です。続いて公開プロフィールの全体が入り、`id`、`username`、`name`、`description`、`followers`、`following`、`verified`、`verifiedType`、`createdAt`、`profilePicture` などが含まれます。取得元にないフィールドは、行にも入りません。XquikのX Email Scraperは値を作り出しません。

例はサンプル値です。実際の結果にはライブデータが入ります。行は次のようになります。

```json
{
  "email": "press@example.com",
  "emailDomain": "example.com",
  "emailSource": "bio",
  "contactInfo": {
    "emails": [
      {
        "value": "press@example.com",
        "domain": "example.com",
        "source": "bio"
      },
      {
        "value": "jane@example.org",
        "domain": "example.org",
        "source": "bio",
        "writtenAs": "jane [at] example [dot] org"
      }
    ],
    "phones": [
      {
        "value": "+14155550123",
        "source": "bio",
        "writtenAs": "+1 (415) 555-0123"
      }
    ],
    "links": [
      { "url": "https://example.com", "network": "website", "source": "url" }
    ]
  },
  "id": "1234567890",
  "username": "sample_user",
  "name": "Sample User",
  "description": "Press: press@example.com",
  "followers": 1200,
  "verified": true,
  "createdAt": "2017-03-21T20:50:14.000Z",
  "resultType": "profile",
  "sourceTarget": "sample_user"
}
```

`resultType` は、アカウントまたは検索結果では `profile`、フォロワーでは `profileFollower`、フォロー中のアカウントでは `profileFollowing` です。`sourceTarget` は、その行の取得元であるアカウントまたは検索語を示します。

## メールアドレスの意味

メールアドレスは、アカウントが自分のプロフィールの自己紹介、名前、所在地のいずれかに書いたアドレスです。Actorは、アカウントが公開したとおりに返し、小文字に変換します。そのアドレスにメールが届くかどうかは確認しません。プロフィールがリンクしているウェブサイトも読み取りません。「jane [at] example [dot] org」のように、アカウント自身の書き方が異なる場合は、`writtenAs` にその書き方が入ります。

電話番号が入るのは、WhatsAppのリンクや+で始まる番号など、電話番号としか読めない形でプロフィールに書かれている場合だけです。年、件数、価格を電話番号として読み取ることはありません。

## Xのプロフィールからのメールアドレス取得にかかる費用は？

すべてのApifyプランで、配信された行1件につき$0.00015です。Apifyのプラットフォーム利用料は別途かかります。

- 課金は配信したデータ行1件につき1回です。`diagnostics` の診断情報は無料です。
- 開始料金や照会料金はかかりません。
- メールアドレスのないプロフィールでは、行も料金も追加されません。
- Xに存在しないアカウントでは、行も料金も追加されません。
- 重複排除は課金前に行います。
- Apifyの最大合計課金額の設定で、配信する行数に上限をかけられます。

フォロワーのスキャンは、わずかな行を見つけるためにしばらく動き続けます。1秒におよそ350件のプロフィールを読み取り、残すのはおよそ400件に1件だからです。`maxScan` は、その時間に上限をかけます。

## 制限と復旧

XquikのX Email Scraperは、1回の実行で多数のアカウント、リスト、検索を読み取ります。Apifyが実行を再起動しても、配信済みの行と進捗は残ります。このActor独自の時間制限はありません。設定したApifyのタイムアウトは守ります。

実行ステータスは、Xで一致するものが見つからないアカウントを挙げ、ユーザー名、ID、URLの確認を促します。凍結されたアカウントも挙げます。抽出が中断されると、無料の `partial` 診断を書き込みます。取得済みの結果はそのまま残ります。再試行する前に `availableResults`、`failedTargets`、`retryable`、`nextAction` を確認してください。Actorの正常終了が示すのは配信の完了です。抽出が最後まで終わったことは意味しません。

実行ステータスは、早期停止の原因をすべて示します。`stopCauses` は各原因を挙げ、それぞれに `message`、`retryable`、`nextAction` を付けます。原因は `scan_limit`、`target_not_found`、`target_suspended`、`target_failed`、`deadline_reached` です。存在しない対象や凍結された対象、`maxScan` で止まったリストが一覧に入るのは、別の原因で実行が止まった場合だけです。いずれかの原因が再試行可能なら、実行も `retryable` になります。

実行が `maxScan` で止めたリストが、実行を早期に終わらせることはありません。行のある実行は完了し、そのステータスは読み取った行数を示して、`maxScan` を大きくするよう促します。そのための診断は書き込まないので、レコードの書き込み1回分を節約できます。実行レポートは、そうしたリストを `scanLimitedTargets` に数えます。

## 関連するXquik Actor

すべてのXquik Actorは、同じ抽出エンジン、フィルター優先の課金、診断機能を共有しています。必要なデータに合うものを選んでください。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper)は、検索、プロフィールのタイムライン、リスト、ポストIDから、50以上のフィルターでポストをスクレイピングし、フラットな形式で出力します。分析なしでポストデータが必要なときに使います。1行あたり$0.00015から。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper)は、ユーザー名、ID、URLから、プロフィールとそのポスト、返信、メディア、フォロワーをスクレイピングします。検索ではなくアカウントから始めるときに使います。1行あたり$0.00015から。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper)は、25以上のフィルターで、ポストへの返信、コメント、会話全体をスクレイピングします。ポストの下の議論が必要なときに使います。1行あたり$0.00015から。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper)は、ポストのURLまたはIDから、返信、引用ポスト、リポストしたユーザー、スレッドを一括でスクレイピングします。誰がポストに反応したかを測るときに使います。1行あたり$0.00015から。
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper)は、ポストを引用したポストを、テキスト、メディア、件数、著者とともに、11のフィルターでスクレイピングします。誰がポストを引用し、何と言ったかを調べたいときに使います。1ポストあたり$0.00015から。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper)は、フォロワー、フォロー中、リストのメンバー、購読者、コミュニティのメンバーをプロフィール行としてスクレイピングします。オーディエンスやメンバーの一覧が必要なときに使います。1プロフィールあたり$0.00015から。
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper)は、ユーザー名、自己紹介、所在地でユーザーを検索し、フォロワー数、認証、アカウント年数、所在地で絞り込みます。検索からアカウントの一覧を作るときに使います。1プロフィールあたり$0.00015から。
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper)は、Xの「アカウントの所在地」ラベル、Xへの接続方法、ユーザー名の変更履歴から、アカウントの所在地を確認します。アカウントの所在地を確かめたいときに使います。1アカウントあたり$0.00015から。
- [X List Scraper](https://apify.com/xquik/x-list-scraper)は、リストのURLまたはIDから、リストのポスト、メンバー、フォロワーをスクレイピングします。厳選したリストを情報源にするときに使います。1行あたり$0.00015から。
- [X Community Scraper](https://apify.com/xquik/x-community-scraper)は、コミュニティの情報、ポスト、検索結果、メンバー、モデレーターをスクレイピングします。Xのコミュニティを情報源にするときに使います。1行あたり$0.00015から。
- [X Space Scraper](https://apify.com/xquik/x-space-scraper)は、キーワードからスペースを見つけ、タイトル、状態、時刻、リスナー数、ホスト、スピーカーを読み取ります。URLまたはIDでブロードキャストも読み取ります。Xのライブ音声とライブ動画を追うときに使います。スペースまたはブロードキャスト1件あたり$0.00015から。
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper)は、地域別のリアルタイムトレンドを、順位、ボリューム、クエリ、WOEIDとともにスクレイピングします。どこで何がトレンドかを追うときに使います。1トレンドあたり$0.00015から。
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper)は、キーワード、勤務地、勤務形態、職位レベル、企業からXの求人を、給与と応募リンクとともにスクレイピングします。Xに掲載された求人を集めるときに使います。1求人あたり$0.00015から。
- [X Article Scraper](https://apify.com/xquik/x-article-scraper)は、長文のXの記事を、カバー画像、著者、日付、指標とともにMarkdownとテキストでスクレイピングします。ポストではなく記事の本文が必要なときに使います。1記事あたり$0.00015から。
- [X Media Downloader](https://apify.com/xquik/x-media-downloader)は、ポストやプロフィールの写真、動画、GIFを、MP4とメタデータのオプション付きで抽出または保存します。メディアファイルそのものが必要なときに使います。1メディア行あたり$0.00015から。
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring)は、ブランドへの言及を、AIによる関連性、感情、顧客体験の回答とともに追跡し、実行どうしを比較します。ブランドを継続して見守るときに使います。分析済みポスト1件あたり$0.0003から。
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis)は、すべてのポストに、態度、強度、皮肉の確率のラベルをAIで付けます。任意のトピックの全体的な感情を知りたいときに使います。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)は、強気、弱気、中立、混在のスタンス、コンテンツの種類、確信度、資産との関連性のラベルをAIで付けます。株、暗号資産、トレードの話題を追うときに使います。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)は、ニュースのポストに、形式、情報源の明示、トピックとの関連性のラベルをAIで付けます。報道と論評を分けるときに使います。分析済みポスト1件あたり$0.0003から。
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)は、すべてのポストについて、独自のカテゴリー、スコア、はい/いいえの質問にAIで答えます。既定の分析が自分のラベルに合わないときに使います。分析済みポスト1件あたり$0.0003から。
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)は、AIによる8つの特性の回答から、すべてのポストについて0から100のViral Scoreと判定を推定します。ポストが広がる理由や伸びない理由を調べるときに使います。分析済みポスト1件あたり$0.0003から。

## よくある質問

よくある質問に答えたあと、サポートを受けられる場所を案内します。

### XのCookie、APIキー、ログインは必要ですか？

いいえ。XquikのX Email Scraperは、XのCookie、APIキー、ログイン、認証情報を必要としません。読み取りはすべてXquikのインフラで実行します。

### メールアドレスはどこから取得しますか？

プロフィールそのものからです。アカウントが書いた自己紹介、名前、所在地から取得します。Actorは、ポストもリンク先のウェブサイトも読み取りません。そのため、どのメールアドレスも、アカウントが自分のXプロフィールで公開したものです。

### Actorは、メールアドレスが使えるかどうかを確認しますか？

いいえ。各アドレスを、アカウントが公開したとおりに返します。そのアドレスにメールが届くかどうかは確認しません。

### フォロワーのスキャンで配信された行が少ないのはなぜですか？

メールアドレスを公開しているのは、フォロワーのおよそ400人に1人です。実行ステータスは、リストを何行まで読み取ったかを示します。リストをさらに先まで読み取るには、`maxScan` を大きくしてください。bookingなどの語を `searchTerms` に指定することもできます。そのほうが、はるかに多くの行が残ります。

### 1回の実行で何件のプロフィールを確認できますか？

貼り付けただけ確認できます。1回の実行で100,000行以上を返せます。より大きなリストでは、`maxItems` をフォームの初期値である1,000より大きくしてください。

### Xのプロフィールからメールアドレスを収集しても合法ですか？

XquikのX Email Scraperは、Xの公開フィールドを取得します。結果には個人データが含まれます。目的が合法であることを確認し、自分に適用されるプライバシーとメールに関する規則に従い、オプトアウトに応じてください。判断に迷う場合は、資格のある弁護士に相談してください。

### 実行結果が0件だったのはなぜですか？

まず実行ステータスを確認してください。結果が空の実行では、Xで一致するものが見つからない各アカウントについて、ステータスがユーザー名、ID、URLの確認を促します。メールアドレスのないプロフィールは、行を追加しません。対応が必要なことがあると、無料の `diagnostics` 出力が表示されます。その `stopCauses` は、原因ごとに次に取る行動を `nextAction` で示します。

### API、スケジュール、連携は使えますか？

はい。Apify APIまたはXquik REST APIを使ってください。[APIタブ](https://apify.com/xquik/x-email-scraper/api)には、Python、JavaScript、cURLの例があります。Apifyの[スケジュール](https://docs.apify.com/platform/schedules)を使うと、XquikのX Email Scraperをcronで実行できます。エージェントは[Apify MCP](https://docs.apify.com/platform/integrations/mcp)から呼び出せます。古いビルドが必要な場合を除き、`latest` を使ってください。

### どこでサポートを受けられますか？

Actorページでissueを開くか、実行IDを添えて<support@xquik.com>に連絡してください。対応が必要な実行は、キーバリューストアにある無料の診断情報が説明します。行が1件も返らなかった実行は、そのステータスで理由を示します。

### カスタムソリューションを依頼できますか？

はい。[xquik.com](https://xquik.com)にアクセスするか、[APIドキュメント](https://docs.xquik.com/introduction)をお読みください。ダッシュボード、API、MCPサーバー、Webhookについて説明しています。
