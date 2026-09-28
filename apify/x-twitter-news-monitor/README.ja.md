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

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。XquikのX (Twitter) News Monitorは、ニュースのポストを形式、情報源の明示、関連性で分類します。他のApify Actorの多くは、フィルタリングや重複排除の前に課金します。Xquikが課金するのは、配信した結果のうち、重複がなくフィルター条件に合うものだけです。AIの費用はポスト1件あたりの料金に含まれます。AIのアカウント、トークン、キーは不要です。

X(Twitter)のニュースのポストを種類別に分け、元のポストデータもそのまま残します。Xquikの**X (Twitter) News Monitor with AI Analysis**は、指定したトピックのポストを収集します。そして、AIによる形式、情報源の明示、関連性の回答をすべてのポストに付けます。報道を、論評や憶測と分けられます。ポストが情報源を名指ししているか、リンクしているかがわかります。追跡している組織、人物、トピックについてのポストだけを残せます。

- **形式。** 報道、論評、憶測、宣伝、風刺を見分けます。
- **情報源の明示。** 主張が情報源を名指ししているか、リンクしているか、本人の体験か、情報源がないかを示します。
- **関連性。** 対象についてのポストと、同じ名前の別物を見分けます。
- **完全な元レコード。** どの行も、ポストが持つすべてのフィールドを残します。リンク先の記事も、取得できれば含みます。

> Xquikは独立したサードパーティサービスです。X Corpとは提携していません。「Twitter」および「X」はX Corpの商標です。

## Xのニュースのポストを分類する方法

1. `Nvidia earnings lang:en -filter:retweets`のような検索語、ニュースアカウントのユーザー名、ポストIDを追加します。
2. `maxItems`と、日付の範囲、`filter:links`、リポストの最小数などの抽出フィルターを設定します。
3. 追跡する組織、人物、トピックを、別名とともに`analysis.targets`に入れます。トピックの範囲は`analysis.context`で絞ります。
4. 実行を開始し、データセットを開きます。

```json
{
  "searchTerms": ["Nvidia earnings lang:en -filter:retweets"],
  "maxItems": 300,
  "analysis": {
    "targets": [{ "name": "Nvidia", "aliases": ["NVDA", "Jensen Huang"] }],
    "context": "Financial & product news about the chip maker."
  }
}
```

### Actorが回答する内容

| 質問         | 回答                                                                        |
| ------------ | --------------------------------------------------------------------------- |
| 形式         | 報道、論評、憶測、宣伝、風刺、無関係、不明                                  |
| 情報源の明示 | 名指し、リンク、本人の体験、なし、不明                                      |
| 関連性       | 報じられた出来事が対象に関係する確率                                        |

分類は事実を検証しません。情報源を名指ししていても、信頼できるとは限りません。情報源の明示は、ポストが何を示しているかを表します。

## 自分のテキストを分析する

自分の下書き、返信、レビュー、メモを`texts`に貼り付けてください。XquikのX (Twitter) News Monitorがそれを分析します。Xからは何も取得しません。

```json
{
  "texts": [
    "Central bank holds rates at 4.5%, signals 2 cuts next year.",
    "I was at the port this morning. Cranes are idle & trucks are queued."
  ]
}
```

- 各テキストは1行になり、ポストと同じ`analysis`の回答を持ちます。
- `tweet.id`は`text:1`、`text:2`と続き、`tweet.type`は`text`です。
- 分析するテキスト1件の料金は、分析済みポスト1件と同じ$0.0003です。
- `texts`を設定した実行は、そのテキストだけを分析します。Xの対象は別の実行で扱ってください。

## Xのニュースのポストを分類する費用は？

XquikのX (Twitter) News Monitorは、分析済みポスト1件あたり$0.0003からです。開始料金はかかりません。料金には収集とAIの費用が含まれます。AIのアカウント、トークン、キーは不要です。この料金で、ポスト1件あたり最大8個の質問と64,000バイトのコンテキストを扱えます。質問の定義は1つあたり最大8,000バイトです。

抽出フィルターと重複排除は分析の前に行います。フィルターで除いた行や重複した行に支払うことはありません。失敗した分析、スキップした分析、診断情報の行には結果料金がかかりません。Apifyは、コンピュート、ストレージ、転送のプラットフォーム利用料を、プランの料金で別途請求します。Pricingタブで確認できます。

## 入力と出力の例

上の入力はそのままコピーして使えます。一部を省略した出力行は次のとおりです。

```json
{
  "tweet": { "id": "2100673144985993441", "text": "…", "retweetCount": 40 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      {
        "questionId": "format",
        "type": "choice",
        "value": "reporting",
        "confidence": 0.9
      },
      {
        "questionId": "attribution",
        "type": "choice",
        "value": "named",
        "confidence": 0.84
      },
      { "questionId": "relevance", "type": "probability", "probability": 0.98 }
    ]
  }
}
```

各結果には`tweet`と`analysis`が入ります。回答には、種類、質問のバージョン、取得できる確率が含まれます。分析が失敗またはスキップされた行にも、収集したポストと`reason`が残ります。その行の回答リストは空です。

ポストがXの記事にリンクしている場合、分析はその記事も取得します。タイトル、プレビュー、テキストブロックをコンテキストに加えます。`analysis.contextAvailability.article`は`text_blocks`、`summary`、`not_supplied`のいずれかを報告します。`summary`は、タイトルとプレビューだけを使ったことを示します。

キーバリューストアにある無料の診断情報が、無効な入力、見つからない結果、中断された収集を説明します。実行レポートは、収集した行、課金済みの分析、保留中の課金を分けて示します。

## 実行サマリーとフラットな回答

実行は、次の4つの場合に`analysis-summary`レコードをキーバリューストアに書き込みます。

- 問題が起きた場合、または大規模な場合。
- シリーズの最初の実行として、`baselineDatasetId`なしで`monitor`を設定した場合。
- 比較で、変化したポスト、新しいポスト、比較できないポストが見つかった場合。
- `alwaysSaveRunRecords`がオンの場合。

それ以外の実行は、このレコードを書き込みません。その場合は、`Top format: reporting in 4 of 5 results.`のように、最も多い回答をステータスに示します。変化のない比較では、`No change since the earlier run.`と示します。問題が起きた実行と大規模な実行は、`run-report`も書き込みます。`alwaysSaveRunRecords`がオンの実行も同じです。`run-report`は、`results.analysisSummary`の下にサマリーを繰り返します。

サマリーは、分析済み、失敗、スキップの行数を数えます。エンゲージメントを合計し、すべての質問を要約します。

- `format`の内訳は、報道を、論評、憶測、宣伝、風刺と分けて示します。
- `attribution`は、情報源の名指し、リンク、本人の体験、情報源なしの件数を数えます。
- `relevance`は、各対象についてのポストを数えます。
- `targets`は、対象ごとの言及数を示します。各対象の`top`は、回答カテゴリーごとにエンゲージメントが最も高いポストを挙げます。
- 各`targets`エントリの`choices`は、その対象についてのポストでの、形式と情報源の明示の内訳です。
- `sourceDomains`は、実行全体でリンクされたドメインを数えます。
- `monitor.changedRows`は、ベースラインから判定が変わったポストを挙げます。
- どの行も、リンク先のホスト名を`sourceDomains`に挙げます。
- どの行も、テキスト内にある`$NVDA`のような`cashtags`を挙げます。
- `monitor.baselineDatasetId`を設定すると、サマリーの`monitor`ブロックが比較ステータスを数えます。変化した行も最大50件挙げます。

どの結果行にも、質問IDをキーにしたフラットなマップ`answers`が入ります。各値は、選ばれたカテゴリー、スコア、確率です。`Flat answers`データセットビューと、CSVやExcelのエクスポートでは、質問ごとに1列が表示されます。列はポストの横に並ぶので、スプレッドシートでJSONを解析する必要はありません。失敗した行とスキップした行のマップは空です。

## 以前の実行と比較する

`monitor.baselineDatasetId`に、同じ分析設定で完了した以前の実行のデータセットIDを渡してください。比較ではその実行の行を読み取ります。その実行がサマリーを書き込んでいなくても機能します。ベースラインを指定すると、すべての行に`monitor`オブジェクトが付きます。ステータスは次のいずれかです。

- ベースラインがない場合は`first_run`。
- 以前の実行になかったポストは`new_to_baseline`。
- 以前の実行にあったポストは`unchanged`または`changed`。

`changes`は、`previous`から`current`へ変わった形式、情報源の明示、関連性の判定をそれぞれ挙げます。判定は、カテゴリー、丸めたスコアのレベル、0.5を境にしたはい/いいえで比較します。判定が変化として数えられるのは、はっきり変わった場合だけです。実行間でほぼ同点の判定は`unchanged`のままです。

ベースラインが`maxBaselineRows`を超える場合や、異なる設定の実行のものである場合、実行は収集の前に止まります。そのとき、実行は診断情報の行を書き込みます。`maxBaselineRows`のデフォルトは100,000です。

## タスクの例

50個の公開タスクから選べます。どのタスクも、実際の英語の検索と、上限を決めた`maxItems`から始まります。用意済みの対象、コンテキスト、概要のデータセットビューも含みます。実行前に検索や対象を編集してください。

- [X上のNvidia関連ニュースポストを分類する](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-nvidia-news-posts-on-x)
- [Xの記事にリンクしたニュースポストを分類する](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-x-article-news-posts)
- [X上のOpenAI関連ニュースポストを分類する](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-openai-news-posts-on-x)
- [X上のApple関連ニュースポストを分類する](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-apple-news-posts-on-x)
- [X上のTesla関連ニュースポストを分類する](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-tesla-news-posts-on-x)
- [X上のSpaceX関連ニュースポストを分類する](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-spacex-news-posts-on-x)
- [X上のBoeing関連ニュースポストを分類する](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-boeing-news-posts-on-x)
- [X上のPfizer関連ニュースポストを分類する](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-pfizer-news-posts-on-x)
- [X上のModerna関連ニュースポストを分類する](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-moderna-news-posts-on-x)
- [X上のExxonMobil関連ニュースポストを分類する](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-exxon-news-posts-on-x)
- [X上のFederal Reserve関連ニュースポストを分類する](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-federal-reserve-news-posts-on-x)
- [X上のEuropean Central Bank関連ニュースポストを分類する](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-european-central-bank-news-posts-on-x)
- [X上のBank of England関連ニュースポストを分類する](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-bank-of-england-news-posts-on-x)

残りのタスクは、Actorのページでさらに多くのブランド、トピック、市場を扱っています。

## 関連するXquik Actor

すべてのXquik Actorは、同じ抽出エンジン、フィルター優先の課金、診断機能を共有しています。必要なデータに合うものを選んでください。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): 検索、プロフィールのタイムライン、リスト、ポストIDから、50以上のフィルターでポストをスクレイピングし、フラットな形式で出力します。分析なしでポストデータが必要なときに使います。1行あたり$0.00015から。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): ユーザー名、ID、URLから、プロフィールとそのポスト、返信、メディア、フォロワーをスクレイピングします。検索ではなくアカウントから始めるときに使います。1行あたり$0.00015から。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): 25以上のフィルターで、ポストへの返信、コメント、会話全体をスクレイピングします。ポストの下の議論が必要なときに使います。1行あたり$0.00015から。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): ポストのURLまたはIDから、返信、引用ポスト、リポストしたユーザー、スレッドを一括でスクレイピングします。誰がポストに反応したかを測るときに使います。1行あたり$0.00015から。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): フォロワー、フォロー中、リストのメンバー、購読者、コミュニティのメンバーをプロフィール行としてスクレイピングします。オーディエンスやメンバーの一覧が必要なときに使います。1プロフィールあたり$0.00015から。
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper): ユーザー名、自己紹介、所在地でユーザーを検索し、フォロワー数、認証、アカウント年数、所在地で絞り込みます。検索からアカウントの一覧を作るときに使います。1プロフィールあたり$0.00015から。
- [X List Scraper](https://apify.com/xquik/x-list-scraper): リストのURLまたはIDから、リストのポスト、メンバー、フォロワーをスクレイピングします。厳選したリストを情報源にするときに使います。1行あたり$0.00015から。
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): コミュニティの情報、ポスト、検索結果、メンバー、モデレーターをスクレイピングします。Xのコミュニティを情報源にするときに使います。1行あたり$0.00015から。
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): 地域別のリアルタイムトレンドを、順位、ボリューム、クエリ、WOEIDとともにスクレイピングします。どこで何がトレンドかを追うときに使います。1トレンドあたり$0.00015から。
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): 長文のXの記事を、カバー画像、著者、日付、指標とともにMarkdownとテキストでスクレイピングします。ポストではなく記事の本文が必要なときに使います。1記事あたり$0.00015から。
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): ポストやプロフィールから写真、動画、GIFを抽出または保存します。MP4とメタデータのオプションがあります。メディアファイルそのものが必要なときに使います。1メディア行あたり$0.00015から。
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring): ブランドへの言及を、AIによる関連性、感情、顧客体験の回答とともに追跡し、実行どうしを比較します。ブランドを継続して見守るときに使います。分析済みポスト1件あたり$0.0003から。
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis): すべてのポストに、AIで態度、強度、皮肉の確率のラベルを付けます。任意のトピックの全体的な感情を知りたいときに使います。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals): AIで、強気、弱気、中立、混在のスタンス、コンテンツの種類、確信度、資産との関連性のラベルを付けます。株、暗号資産、トレードの話題を追うときに使います。分析済みポスト1件あたり$0.0003から。
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier): すべてのポストについて、独自のカテゴリー、スコア、はい/いいえの質問にAIが答えます。既定の分析が自分のラベルに合わないときに使います。分析済みポスト1件あたり$0.0003から。
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer): AIによる8つの特性の回答から、すべてのポストについて0から100のViral Scoreと判定を推定します。ポストが広がる理由や伸びない理由を調べるときに使います。分析済みポスト1件あたり$0.0003から。

## よくある質問とサポート

### AIのアカウント、X APIキー、ログインは必要ですか？

いいえ。XquikのX (Twitter) News Monitorは、AIの費用を料金に含めています。AIのアカウント、トークン、キーは不要です。X APIキー、ログイン、認証情報も必要ありません。

### 自分の質問を使えますか？

はい。カスタムの`analysis.questions`がデフォルトの質問に置き換わります。`choice`、`score`、`probability`の質問を1個から8個送ってください。choiceの質問には2個から255個のカテゴリーを指定できます。scoreの質問には、順序のあるレベルが2つ以上必要です。比較したい実行どうしでは、同じ質問を使ってください。

### `analysis.status`が`failed`や`skipped`の行が返るのはなぜですか？

Actorはポストを収集して配信しましたが、AIの分析が完了しませんでした。`analysis.reason`が原因を示します。`context_limit`は、コンテキストと対象でいっぱいになり、ポストを入れる余地がないことを示します。`service_unavailable`は、分析サービスが一時的に使えなかったことを示します。これらの行に結果料金はかかりません。`analysis.context`を短くするか、該当するIDを再実行してください。

`maxContextBytes`より長いポストも、Actorは分析します。まず引用元と返信先のポストを削り、次にポスト本体を削ります。このとき`analysis.contextAvailability.postText`は`truncated`になります。より多くのテキストを残すには、`maxContextBytes`を最大64,000まで上げてください。

### 分析は事実を検証しますか？

いいえ。回答が示すのは、ポストが何を表現し、それをどう伝えているかです。確率はAIの確信度であり、真偽ではありません。重要な分類は、元のポストと照らし合わせて確認してください。元のポストはすべての行に残っています。

### どの言語に対応していますか？

抽出は、Xが扱うすべての言語に対応します。分析は、まず英語の顧客シナリオで検証しています。ほかの対応言語でも、同じ構造の回答を返します。どの言語でも、`unclear`のカテゴリーと確率が不確かさを示します。

### 費用を抑えるにはどうすればよいですか？

フィルター、重複排除、`maxItems`は分析の前に適用されます。支払うのは、重複がなくフィルター条件に合うポストの分だけです。的確な検索演算子、日付の範囲、エンゲージメントの下限を使ってください。大規模な実行の前に、小さな`maxItems`で回答の質を確かめてください。

### Xのデータを分析しても合法ですか？

このActorは、Xの公開フィールドを取得します。結果には個人データが含まれることがあります。目的が合法であることを確認し、適用されるプライバシー規則に従ってください。判断に迷う場合は、資格のある弁護士に相談してください。

### API、スケジュール、連携は使えますか？

はい。Python、JavaScript、cURLの例は[APIタブ](https://apify.com/xquik/x-twitter-news-monitor/api)にあります。定期的な実行にはApifyの[スケジュール](https://docs.apify.com/platform/schedules)を使います。前回のデータセットIDを`monitor.baselineDatasetId`に渡すと、何が変わったかを確認できます。Apifyの連携機能で、実行をWebhook、Make、Zapier、n8n、Googleスプレッドシートにつなぐこともできます。

### どこでサポートを受けられますか？

Actorページでissueを開くか、実行IDを添えてsupport@xquik.comに連絡してください。キーバリューストアにある無料の診断情報が、空の実行、部分的な実行、中断された実行の理由を説明します。
