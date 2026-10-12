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

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。XquikのX Space Scraperは、キーワード、ホスト、ハッシュタグからスペースを見つけ、URLまたはIDでスペースとブロードキャストを読み取ります。他のApify Actorの多くは、フィルタリングや重複排除の前に課金します。Xquikが課金するのは、配信した結果のうち、重複がないものだけです。

あらゆるトピックのTwitterスペースを、ライブ中、予定済み、終了済みを問わず見つけます。X APIキーやログインは不要です。料金は**配信されたスペースまたはブロードキャスト1件につき$0.00015**で、Apifyのプラットフォーム利用料は別途かかります。

> Xquikは独立したサードパーティサービスです。X Corpとは提携していません。
> 「Twitter」および「X」はX Corpの商標です。

## スペースのデータ

- 各スペースのタイトル、状態、予定時刻、開始時刻、終了時刻。
- ライブのリスナー数、リプレイの再生数、いまスペースにいるアカウント。
- ホストの公開プロフィール、共同ホスト、スピーカー、Xが表示するリスナー。
- リプレイ、クリップ、ロックの設定と、スペースを告知するポスト（本文、各種カウント、作成者を含む）。
- ホストとスピーカーがスペースで共有したポストと、共有した人、共有した時刻。
- 終了したスペースの録音。`includeReplay` をオンにすると、HLSプレイリストのURLとして入ります。
- URLまたはIDで指定したブロードキャスト: タイトル、状態、時刻、視聴数、ホスト。
- 課金前の重複排除: 2つの検索語句が見つけた同じスペースは1行です。

## Xのスペースを見つける方法

1. Apify ConsoleでXquikのX Space Scraperを開きます。
2. 単語、ハッシュタグ、Xの検索演算子を `searchTerms` に入力します。
3. または、スペースのURLを `startUrls` に、スペースIDを `spaceIds` に貼り付けます。
4. ブロードキャストは、URLを `startUrls` に、IDを `broadcastIds` に貼り付けます。
5. `maxItems` で配信する行数の上限を決め、Startをクリックします。
6. データセットをJSON、CSV、Excelでダウンロードするか、Apify APIを使います。

`startUrls` は、各URLを文字列のまま、または `{ "url": "..." }` オブジェクトとして受け取ります。

```json
{
  "startUrls": [
    "https://x.com/i/spaces/1OGwblLjnQMKB",
    { "url": "https://x.com/i/broadcasts/1nGeLMWbkpaKX" }
  ]
}
```

## 入力

```json
{
  "searchTerms": ["bitcoin", "from:solana"],
  "queryType": "Latest",
  "maxItems": 1000
}
```

検索語句は、一致するポストが共有しているスペースを見つけます。Xの検索で使える演算子が使えます。

| 目的                                 | 検索語句           |
| ------------------------------------ | ------------------ |
| あるトピックのスペース               | `bitcoin`          |
| あるアカウントが共有するスペース     | `from:solana`      |
| あるハッシュタグのスペース           | `#AI`              |
| 1つの言語のスペース                  | `startups lang:es` |
| いいねの多いポストが共有するスペース | `nba min_faves:50` |

`queryType` は、どのポストを優先するかを決めます。`Latest` は最新のポスト、`Top` は反応の多いポストです。

すでに知っているスペースをURLまたはIDで読み取ります。

```json
{
  "startUrls": [{ "url": "https://x.com/i/spaces/1OGwblLjnQMKB" }],
  "spaceIds": ["1OGwblLjnQMKB"]
}
```

終了した各スペースの録音を取得するには、`includeReplay` をオンにします。

```json
{ "spaceIds": ["1OGwblLjnQMKB"], "includeReplay": true }
```

その行には `replay` が入り、HLSプレイリストの `url` と、`streamType`、`status` を含みます。ライブ中、予定済み、または録音のないスペースには `replay` が入りません。録音に追加料金はかかりません。

Xが `x.com/i/broadcasts` で配信するライブ動画であるブロードキャストを、URLまたはIDで読み取ります。

```json
{
  "startUrls": [{ "url": "https://x.com/i/broadcasts/1nGeLMWbkpaKX" }],
  "broadcastIds": ["1nGeLMWbkpaKX"]
}
```

問題なく終わった小規模な実行は `run-report` を書き込まず、Apifyの利用料を節約します。毎回書き込むには `alwaysSaveRunRecords` をオンにしてください。

## 出力

各行には1件のスペースまたはブロードキャストが入り、`sourceTarget` にその検索語句、URL、またはIDが入ります。`resultType` は `space` または `broadcast` です。

例はサンプル値です。実際の結果にはライブデータが入ります。スペースの行は次のようになります。

```json
{
  "id": "1SampleSpace1",
  "title": "Sample Space about bitcoin",
  "state": "Ended",
  "startedAt": "2026-03-11T17:00:26.227Z",
  "endedAt": "2026-03-11T17:49:29.190Z",
  "totalLiveListeners": 841,
  "totalReplayWatched": 609,
  "isAvailableForReplay": true,
  "creator": { "username": "sample_host", "name": "Sample Host" },
  "admins": [{ "username": "sample_host", "name": "Sample Host" }],
  "speakers": [{ "username": "sample_speaker", "name": "Sample Speaker" }],
  "listeners": [],
  "sharings": [
    {
      "id": "2106511178339881415",
      "sharedAt": "2026-03-11T17:20:16.658Z",
      "sharedBy": { "username": "sample_speaker", "name": "Sample Speaker" },
      "tweet": { "id": "2105620368836706789", "text": "Sample shared post" }
    }
  ],
  "resultType": "space",
  "sourceTarget": "bitcoin"
}
```

`state` には、Xの呼び方どおりの5つの値のうち1つが入ります。

| `state`      | スペース                                      |
| ------------ | --------------------------------------------- |
| `NotStarted` | 予定されていて、`scheduledStart` が入ります。 |
| `Running`    | 現在ライブ中です。                            |
| `Ended`      | 終了しています。ホストが終了しました。        |
| `TimedOut`   | 終了しています。ホストではなくXが閉じました。 |
| `Canceled`   | 予定されていましたが、開始されませんでした。  |

`Ended` と `TimedOut` のスペースには `endedAt` が入り、どちらも録音を残せます。Xはサブスクライバー向けやコミュニティ向けのスペースをその対象者にだけ表示するため、こうしたスペースは行を返しません。

ブロードキャストの行は `resultType: "broadcast"` を持ち、次のようになります。

```json
{
  "id": "1SampleBcast1",
  "title": "Sample launch broadcast",
  "state": "Ended",
  "startedAt": "2026-09-17T00:54:56.506Z",
  "endedAt": "2026-09-17T01:17:35.036Z",
  "totalWatched": 161758,
  "totalWatching": 21639,
  "width": 3840,
  "height": 2160,
  "creator": { "username": "sample_host", "name": "Sample Host" },
  "resultType": "broadcast",
  "sourceTarget": "1SampleBcast1"
}
```

## Xのスペースのスクレイピングにかかる費用は？

すべてのApifyプランで、配信されたスペースまたはブロードキャスト1件につき$0.00015です。Apifyのプラットフォーム利用料は別途かかります。

- 課金は配信したデータ行1件につき1回です。`diagnostics` の診断情報は無料です。
- 開始料金、検索料金、ページ料金はかかりません。
- 重複排除は課金前に行います。

## 制限と復旧

抽出が中断されると、無料の `partial` 診断を書き込みます。取得済みの結果はそのまま残ります。再試行する前に `availableResults`、`failedTargets`、`retryable`、`nextAction` を確認してください。Actorの正常終了が示すのは配信の完了です。抽出が最後まで終わったことは意味しません。

実行ステータスは、早期停止の原因をすべて示します。`stopCauses` は各原因を挙げ、それぞれに `message`、`retryable`、`nextAction` を付けます。原因は `target_not_found`、`target_failed`、`pagination_safety_limit`、`deadline_reached` です。存在しない対象が一覧に入るのは、別の原因で実行が止まった場合だけです。いずれかの原因が再試行可能なら、実行も `retryable` になります。

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
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): コミュニティの情報、ポスト、検索結果、メンバー、モデレーターをスクレイピングします。Xのコミュニティを情報源にするときに使います。1行あたり$0.00015から。
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

## よくある質問

よくある質問に答えたあと、サポートを受けられる場所を案内します。

### X APIキーやログインは必要ですか？

いいえ。XquikのX Space Scraperは、X APIキー、ログイン、認証情報を必要としません。

### 現在ライブ中のスペースを見つけられますか？

はい。`queryType` を `Latest` にして検索し、`state` が `Running` の行を残します。`NotStarted` の行は予定されているスペースで、`scheduledStart` が入ります。

### Xのスペースをスクレイピングしても合法ですか？

XquikのX Space Scraperは、Xの公開フィールドを取得します。結果には個人データが含まれることがあります。目的が合法であることを確認し、適用されるプライバシー規則に従ってください。判断に迷う場合は、資格のある弁護士に相談してください。

### 実行結果が0件だったのはなぜですか？

まず無料の `diagnostics` 出力を開いてください。結果が空の実行では、ステータスが対象の確認を促します。`stopCauses` は原因ごとに、次に取る行動を `nextAction` で示します。

### API、スケジュール、連携は使えますか？

はい。Apify APIまたはXquik REST APIを使ってください。[APIタブ](https://apify.com/xquik/x-space-scraper/api)には、Python、JavaScript、cURLの例があります。Apifyの[スケジュール](https://docs.apify.com/platform/schedules)を使うと、XquikのX Space Scraperをcronで実行できます。エージェントは[Apify MCP](https://docs.apify.com/platform/integrations/mcp)から呼び出せます。古いビルドが必要な場合を除き、`latest` を使ってください。

### どこでサポートを受けられますか？

Actorページでissueを開くか、実行IDを添えてsupport@xquik.comに連絡してください。キーバリューストアにある無料の診断情報が、空の実行、部分的な実行、中断された実行の理由を説明します。

### カスタムソリューションを依頼できますか？

はい。[xquik.com](https://xquik.com)にアクセスするか、[APIドキュメント](https://docs.xquik.com/introduction)をお読みください。ダッシュボード、API、MCPサーバー、Webhookについて説明しています。
