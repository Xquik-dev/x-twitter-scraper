[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · [简体中文](README.zh-CN.md) · **日本語** · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![FramerがXquik MCPをコーディングエージェントに接続する様子](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[FramerがXquikのスクレイパーをClaude Code、Codex、Cursorなどと一緒に使う様子](https://youtu.be/4UOSpoOoC3Y?t=367)を6:07から視聴できます。

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。XquikのX (Twitter) Tweet Classifierは、すべてのポストについて独自の質問に答えます。ラベル、スコア、はい/いいえの回答を求められます。他のApify Actorの多くは、フィルタリングや重複排除の前に課金します。Xquikが課金するのは、配信した結果のうち、重複がなくフィルター条件に合うものだけです。AIの費用はポスト1件あたりの料金に含まれます。AIのアカウント、トークン、キーは不要です。

X(Twitter)のポストを独自の質問で分類し、元のポストデータもそのまま残します。Xquikの**X Tweet Classifier with AI Analysis**は、条件に合うポストを収集します。ポストごとに1個から8個の型付きの質問に答えます。サポートの振り分けにはカテゴリー、優先度付けにはスコア、関連性の判断には確率を使います。プリセットは、ブランド監視、苦情、競合、購入意欲、製品フィードバック、ニュース、感情&市場心理を扱います。カスタムの質問を指定すると、プリセットの代わりに使われます。

- **型付きの回答。** 回答には、確率、確信度&質問のバージョンが付きます。
- **自分の質問と自分のカテゴリー。** 各質問に最大255個のカテゴリーを指定できます。
- **完全な元レコード。** どの行も、ポストが公開するすべてのフィールドを残します。
- **フィルター優先の課金。** 支払うのは、重複がなくフィルター条件に合い、分析に成功したポストの分だけです。

> Xquikは独立したサードパーティサービスです。X Corpとは提携していません。
> 「Twitter」および「X」はX Corpの商標です。

## カスタムの質問でポストを分類する方法

Apifyを初めて使いますか？まず[無料アカウントを作成してください](https://console.apify.com/sign-up?fpr=xquik)。無料プランはクレジットカード不要&毎月$5分を使えます。分析済みポスト1件あたり$0.0003なので、プラットフォーム利用料を別にすると、$5で最大16,000件の分析済みポストをまかなえます。その後、このページに戻ってTry for freeを押してください。

1. ポストのURL、検索語、プロフィールのユーザー名、ポストIDのいずれかを追加します。
2. `maxItems` & タスクに必要な抽出フィルターを設定します。
3. 質問を `analysis.questions` に追加するか、`analysis.preset` でプリセットを選びます。どちらも指定しない場合、実行は `sentiment` プリセットを使います。
4. 実行を開始し、データセットを開きます。

対応するモードで収集できるのは、ポスト、検索結果、プロフィールのポスト、リスト、返信、引用&スレッドです。記事だけの抽出&ユーザーの一覧は、分類の入力になりません。

```json
{
  "searchTerms": ["\"need a recommendation\" headphones lang:en"],
  "maxItems": 20,
  "analysis": {
    "questions": [
      {
        "id": "buying",
        "type": "probability",
        "version": "1",
        "instructions": "Does the author want to buy headphones?"
      }
    ],
    "targets": [{ "name": "headphones", "aliases": ["headset"] }],
    "context": "Exclude advertisements aimed at other buyers."
  }
}
```

### 質問&上限

一意のID、指示&バージョンを持つ質問を1個から8個指定してください。

- `choice` は、説明またはnull値を持つ2個から255個の名前付き `categories` を使います。
- `score` は、2つ以上の説明を持つ順序付きの `levels` 配列を使います。
- `probability` は0から1の値を返します。任意の `criteria` には、`yes` & `no` の説明を入れます。

プリセットは `brand`、`complaints`、`competitors`、`purchase_intent`、`product_feedback`、`news`、`sentiment` & `market` です。`maxContextBytes` のデフォルトは64,000バイトです。これより小さい上限にすると、長いポストは収まるように削られ、`truncated` と記録されます。`concurrency` のデフォルトは16で、1から16を指定できます。質問の定義は1つあたり最大8,000バイトまで使えます。

## 自分のテキストを分析する

自分の下書き、返信、レビュー、メモを `texts` に貼り付けてください。XquikのX Tweet Classifierがそれを分析します。Xからは何も取得しません。

```json
{
  "texts": [
    "The new update is great, but sync still drops on mobile.",
    "Support fixed my issue in 10 minutes. Thank you."
  ]
}
```

- 各テキストは1行になり、ポストと同じ `analysis` の回答を持ちます。
- `tweet.id` は `text:1`、`text:2` と続き、`tweet.type` は `text` です。
- 分析したテキストは1件あたり、分析済みポスト1件と同じ$0.0003です。
- `texts` を設定した実行は、そのテキストだけを分析します。Xの対象は別の実行で扱ってください。

## ポストの分類にはいくらかかりますか？

XquikのX Tweet Classifierは、分析済みポスト1件あたり$0.0003からです。開始料金はかかりません。料金には収集&AIの費用が含まれます。AIのアカウント、トークン、キーは不要です。この料金で、ポスト1件あたり最大8個の質問&64,000バイトのコンテキストを扱えます。質問の定義は1つあたり最大8,000バイトまで使えます。

より多くの量が必要なら、前払いの利用枠が多い[Apifyプランを選んでください](https://apify.com/pricing?fpr=xquik)。

抽出フィルター&重複排除は分析の前に行います。フィルターで除いた行や重複した行に支払うことはありません。失敗した分析、スキップした分析&診断情報の行には結果料金がかかりません。Apifyは、コンピュート、ストレージ&転送のプラットフォーム利用料を、プランの料金で別途請求します。Pricingタブで確認できます。

## 入力&出力の例

上の入力はそのままコピーして使えます。一部を省略した出力行は次のとおりです。

```json
{
  "tweet": { "id": "2100344867507327087", "text": "…", "likeCount": 6409 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      {
        "questionId": "topic",
        "type": "choice",
        "value": "ai_safety",
        "confidence": 0.93
      },
      {
        "questionId": "disclosure",
        "type": "probability",
        "probability": 0.97
      },
      {
        "questionId": "specificity",
        "type": "score",
        "value": 2,
        "confidence": 0.88
      }
    ]
  }
}
```

各結果には `tweet` & `analysis` が入ります。回答には、種類、質問のバージョン&取得できる確率が含まれます。分析が失敗またはスキップされた行にも、収集したポスト & `reason` が残ります。その行の回答リストは空です。

キーバリューストアにある無料の診断情報が、無効な入力、見つからない結果&中断された収集を説明します。実行レポートは、収集した行、課金済みの分析&保留中の課金を分けて示します。

## 実行サマリー&フラットな回答

実行は、次の3つの場合に `analysis-summary` レコードをキーバリューストアに書き込みます。

- 問題が起きた場合、または大規模な場合。
- 比較で、変化したポスト、新しいポスト、比較できないポストのいずれかが見つかった場合。
- `alwaysSaveRunRecords` がオンの場合。

それ以外の実行は、シリーズの最初の実行も含めて、このレコードを省きます。その場合、ステータスが `Top sentiment is positive in 3 of 5 results.` のように最も多い回答を示します。変化のない比較では、`No change since the earlier run.` と示します。問題が起きた実行や大規模な実行は、`run-report` も書き込みます。`alwaysSaveRunRecords` がオンの実行も同じです。`run-report` は、`results.analysisSummary` の下にサマリーを繰り返します。

サマリーは、分析済み、失敗&スキップの行数を数えます。エンゲージメントを合計し、すべての質問を要約します。カスタムの質問には、それぞれ専用のブロックが付きます。

- choiceの質問は、カテゴリーごとの件数&割合を報告します。
- scoreの質問は、平均&レベルごとの件数を報告します。
- はい/いいえの質問は、はい&いいえの件数を報告します。
- どの行も、リンク先のホスト名を `sourceDomains` に挙げます。
- どの行も、`$NVDA` のように本文中にあるキャッシュタグを `cashtags` に挙げます。
- `monitor.baselineDatasetId` を設定すると、サマリーの `monitor` ブロックが比較ステータスを数えます。変化した行も最大50件挙げます。

サマリーは数値を小数点以下4桁に丸めます。結果が空の実行は、0の件数 & `null` の平均を報告します。

カスタムの質問の代わりに組み込みのプリセットを使うには、`analysis.preset` を設定します。指定できる値は `brand`、`complaints`、`purchase_intent`、`product_feedback`、`competitors`、`sentiment`、`market`、`news` のいずれかです。その場合、サマリーはそのプリセットの各質問を報告します。

どの結果行にも、質問IDをキーにしたフラットなマップ `answers` も入ります。各値は、選ばれたカテゴリー、スコア、確率のいずれかです。`Flat answers` データセットビュー & CSVやExcelのエクスポートでは、質問ごとに1列が表示されます。列はポストの横に並ぶので、スプレッドシートでJSONを解析する必要はありません。失敗した行&スキップした行のマップは空です。

## 以前の実行と比較する

`monitor.baselineDatasetId` に、同じ分析設定で完了した以前の実行のデータセットIDを渡してください。比較ではその実行の行を読み取ります。その実行がサマリーを省いていても機能します。すると、すべての行に `monitor` オブジェクトが付きます。そのステータスは次の値をとります。

- ベースラインがない場合は `first_run`。
- 以前の実行になかったポストは `new_to_baseline`。
- 以前の実行にあったポストは `unchanged` または `changed`。

`changes` は、いずれかの質問の判定のうち、`previous` から `current` へ変わったものをそれぞれ挙げます。判定は、カテゴリー、丸めたスコアのレベル、0.5を境にしたはい/いいえで比較します。判定が変化として数えられるのは、はっきり変わった場合だけです。実行間でほぼ同点の判定は `unchanged` のままです。

ベースラインが `maxBaselineRows` を超える場合や、異なる設定の実行のものである場合、実行は収集の前に止まります。そのとき、実行は診断情報の行を書き込みます。`maxBaselineRows` のデフォルトは100,000です。

## タスクの例

50個の公開タスクから選べます。どのタスクも、実際の英語の検索&上限を決めた `maxItems` から始まります。各タスクには、用意済みのカスタムの質問&概要のデータセットビューも入っています。実行前に検索や質問を編集してください。

- [X上のカスタマーサポート依頼をトリアージする](https://apify.com/xquik/x-twitter-tweet-classifier/examples/triage-support-requests-on-x)
- [Xのポストから営業リードをスコアリングする](https://apify.com/xquik/x-twitter-tweet-classifier/examples/score-sales-leads-from-x-posts)
- [X上のサービス障害の報告を検出する](https://apify.com/xquik/x-twitter-tweet-classifier/examples/detect-outage-reports-on-x)
- [X上の採用シグナルを分類する](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-hiring-signals-on-x)
- [X上の製品機能リクエストにタグを付ける](https://apify.com/xquik/x-twitter-tweet-classifier/examples/tag-feature-requests-on-x)
- [アプリのフィードバックをストアレビューのように分類する](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-app-store-style-feedback)
- [X上の詐欺と不正の警告を検出する](https://apify.com/xquik/x-twitter-tweet-classifier/examples/detect-scam-warnings-on-x)
- [イベントへの参加意向を分類する](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-event-attendance-intent)
- [レストランのレビューのシグナルを抽出する](https://apify.com/xquik/x-twitter-tweet-classifier/examples/extract-restaurant-review-signals)
- [暗号資産の宣伝を分析と区別する](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-crypto-scam-vs-analysis)
- [説得を狙った政治ポストを分類する](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-political-ad-style-posts)
- [サブスクリプション解約リスクのシグナルを検出する](https://apify.com/xquik/x-twitter-tweet-classifier/examples/detect-churn-risk-signals)

残りのタスクはActorページにあり、さらに多くのワークフローを扱います。

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
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)は、AIによる8つの特性の回答から、すべてのポストについて0から100のViral Score & 判定を推定します。ポストが広がる理由や伸びない理由を調べるときに使います。分析済みポスト1件あたり$0.0003から。

## よくある質問&サポート

よくある質問に答えたあと、サポートを受けられる場所を案内します。

### AIのアカウント、X APIキー、ログインは必要ですか？

いいえ。XquikのX Tweet Classifierは、AIの費用を料金に含めています。AIのアカウント、トークン、キーは不要です。X APIキー、ログイン、認証情報も必要ありません。

### 質問のバージョンは重要ですか？

はい。すべての回答に、その質問に付けた `version` が保存されます。時間をかけて質問を改善しても、どの文言がその結果を生んだかがわかります。

### 分析が失敗またはスキップされた行が返るのはなぜですか？

`analysis.status` は `failed` か `skipped` です。このActorはポストを収集&配信しましたが、AIの分析が完了しませんでした。`analysis.reason` が原因を示します。`context_limit` は、指定したコンテキスト&対象でいっぱいになり、ポストを入れる余地がないことを示します。`service_unavailable` は、分析サービスが一時的に使えなかったことを示します。これらの行に結果料金はかかりません。`analysis.context` を短くするか、該当するIDを再実行してください。

`maxContextBytes` より長いポストも、このActorは分析します。まず引用元&返信先のポストを削り、次にポスト本体を削ります。このとき `analysis.contextAvailability.postText` は `truncated` になります。より多くのテキストを残すには、`maxContextBytes` を最大64,000まで上げてください。

### 分析は事実を検証しますか？

いいえ。回答が示すのは、ポストが表現する内容&その伝え方です。確率はAIの確信度であり、真偽ではありません。重要な分類は、元のポストと照らし合わせて確認してください。元のポストはすべての行に残っています。

### どの言語に対応していますか？

抽出は、Xが扱うすべての言語に対応します。分析は、まず英語の顧客シナリオで検証しています。ほかの対応言語でも、同じ構造の回答を返します。どの言語でも、`unclear` のカテゴリー&確率が不確かさを示します。

### 費用を抑えるにはどうすればよいですか？

フィルター、重複排除 & `maxItems` は分析の前に適用されます。支払うのは、重複がなくフィルター条件に合うポストの分だけです。的確な検索演算子、日付の範囲&エンゲージメントの下限を使ってください。大規模な実行の前に、小さな `maxItems` で回答の質を確かめてください。

### Xのデータを分析しても合法ですか？

このActorは、Xの公開フィールドを取得します。結果には個人データが含まれることがあります。目的が合法であることを確認し、適用されるプライバシー規則に従ってください。判断に迷う場合は、資格のある弁護士に相談してください。

### API、スケジュール&連携は使えますか？

はい。Python、JavaScript & cURLの例は[APIタブ](https://apify.com/xquik/x-twitter-tweet-classifier/api)にあります。定期的な実行にはApifyの[スケジュール](https://docs.apify.com/platform/schedules)を使います。前回のデータセットIDを `monitor.baselineDatasetId` に渡すと、何が変わったかを確認できます。Apifyの連携機能で、実行をWebhook、Make、Zapier、n8n & Googleスプレッドシートにつなぐこともできます。

### どこでサポートを受けられますか？

実行IDを添えて、[Issuesタブ](https://apify.com/xquik/x-twitter-tweet-classifier/issues)でissueを開いてください。キーバリューストアにある無料の診断情報が、対応が必要な実行について説明します。行が1件も返らなかった実行は、その理由をステータスで示します。
