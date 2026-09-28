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

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。XquikのX (Twitter) Brand Monitoringは、自社ブランドへの言及を、関連性、感情、顧客体験の回答とともに追跡します。他のApify Actorの多くは、フィルタリングや重複排除の前に課金します。Xquikが課金するのは、配信した結果のうち、重複がなくフィルター条件に合うものだけです。AIの費用はポスト1件あたりの料金に含まれます。AIのアカウント、トークン、キーは不要です。

X(Twitter)でのブランドへの言及を監視し、実行ごとの感情の変化を追跡します。Xquikの**X (Twitter) Brand Monitoring with AI Analysis**は、条件に合うポストをすべて収集します。そして、各ポストについて関連性、感情、顧客体験の質問にAIで答えます。その回答を以前のデータセットと比べるので、何が変わったかがわかります。どの行にも元のポストデータが残ります。エクスポート、レビュー、追加の分析のために、もう一度スクレイピングする必要はありません。

ブランド、製品ライン、キャンペーンについて、苦情、称賛、購入に関する質問を見守れます。実際のポストをもとに、サポートやマーケティングのチームに状況を伝えられます。顧客が自社をどう語っているかの履歴を、実行ごとに残せます。

- **元のポストのすべてのフィールド。** テキスト、著者、各種カウント、メディア、リンク、引用元と返信先のポストが、回答の横に残ります。
- **型付きの回答。** 各行に、関連性の確率、確率付きの感情カテゴリー、顧客体験のカテゴリーが入ります。
- **変化の追跡。** 実行どうしは判定で比較するので、確率のわずかな変動は変化に数えません。
- **フィルター優先の課金。** 支払うのは、重複がなくフィルター条件に合い、分析に成功したポストの分だけです。

> Xquikは独立したサードパーティサービスです。X Corpとは提携していません。「Twitter」および「X」はX Corpの商標です。

## Xでブランドを監視する方法

1. 検索語、プロフィールのユーザー名、ポストのURL、ポストIDを追加します。たとえば`(Sony OR "WH-1000XM5") headphones lang:en`で検索します。
2. `maxItems`と、タスクに必要な抽出フィルターを設定します。日付の範囲、いいねの最小数、返信の除外などです。
3. ブランド名と別名を`analysis.targets`に入れ、ブランドの説明を`analysis.context`に書きます。
4. 実行を開始し、次回の比較のためにデータセットIDを控えておきます。
5. 次回の実行では、そのIDを`monitor.baselineDatasetId`に追加します。回答を比較できるように、質問、対象、コンテキスト、コンテキストの上限は変えないでください。比較ではそのデータセットを読み取るので、その実行がサマリーを書き込んでいなくても機能します。

```json
{
  "searchTerms": ["(Sony OR \"WH-1000XM5\") headphones lang:en"],
  "maxItems": 100,
  "analysis": {
    "targets": [
      { "name": "Sony", "aliases": ["Sony headphones", "WH-1000XM5"] }
    ],
    "context": "Consumer headphones & customer service."
  },
  "monitor": {
    "baselineDatasetId": "YOUR_PREVIOUS_DATASET_ID",
    "maxBaselineRows": 100000
  }
}
```

対象は分類の手がかりです。検索クエリを作ったり、無関係なポストを除いたりはしません。調査に合う検索語とフィルターを選んでください。

### モニターが回答する内容

| 質問                | 回答                                             |
| ------------------- | ------------------------------------------------ |
| ブランドとの関連性  | ポストが対象について述べている確率               |
| 感情                | ポジティブ、ネガティブ、混在、中立、不明         |
| 顧客体験            | 顧客、見込み客、傍観者、不明                     |

同じ名前の別物かどうか紛らわしいときは、関連性の確率で確認してください。感情は、著者が対象に示した態度を表します。

### 比較の仕組み

| 比較ステータス         | 意味                                                    |
| ---------------------- | ------------------------------------------------------- |
| `first_run`            | ベースラインの指定なし                                  |
| `new_to_baseline`      | このポストIDはベースラインになかった                    |
| `unchanged`            | 比較できる判定がすべて一致                              |
| `changed`              | 1つ以上の判定が異なる                                   |
| `not_comparable`       | 必要なメタデータ、ID、一致する設定が不足                |
| `analysis_unavailable` | このポストには成功した分析がない                        |

回答は判定で比較します。`choice`の回答はカテゴリーで比較します。`score`の回答は最も近いレベルで比較します。`probability`の回答は、0.5を境にしたはい/いいえの判定で比較します。判定が変化として数えられるのは、はっきり変わった場合だけです。実行間でほぼ同点の判定は`unchanged`のままです。同じ判定のままの変動も同様です。そのため、実行ごとのAIの小さな差は変化として表れません。

`changes`は、変化した質問ごとに`previous`と`current`の判定を挙げます。変化の原因は、AIのばらつき、新しいコンテキスト、元データの編集のこともあります。変化は事実が変わった証拠ではありません。ポストが見つからないことも、削除の証拠にはなりません。

ベースラインの上限`maxBaselineRows`のデフォルトは100,000行です。ポストIDの重複、読み込みの失敗、データセットのサイズの変化があると、収集の前に比較が止まります。空のベースラインとして扱われることはありません。

## 自分のテキストを分析する

自分の下書き、返信、レビュー、メモを`texts`に貼り付けてください。XquikのX (Twitter) Brand Monitoringがそれを分析します。Xからは何も取得しません。

```json
{
  "texts": [
    "The new update is great, but sync still drops on mobile.",
    "Support fixed my issue in 10 minutes. Thank you."
  ]
}
```

- 各テキストは1行になり、ポストと同じ`analysis`の回答を持ちます。
- `tweet.id`は`text:1`、`text:2`と続き、`tweet.type`は`text`です。
- 分析するテキスト1件の料金は、分析済みポスト1件と同じ$0.0003です。
- `texts`を設定した実行は、そのテキストだけを分析します。Xの対象は別の実行で扱ってください。

## Xでブランドを監視する費用は？

XquikのX (Twitter) Brand Monitoringは、分析済みポスト1件あたり$0.0003からです。開始料金はかかりません。料金には収集とAIの費用が含まれます。AIのアカウント、トークン、キーは不要です。この料金で、ポスト1件あたり最大8個の質問と64,000バイトのコンテキストを扱えます。質問の定義は1つあたり最大8,000バイトです。

抽出フィルターと重複排除は分析の前に行います。フィルターで除いた行や重複した行に支払うことはありません。失敗した分析、スキップした分析、診断情報の行には結果料金がかかりません。Apifyは、コンピュート、ストレージ、転送のプラットフォーム利用料を、プランの料金で別途請求します。Pricingタブで確認できます。

## 入力と出力の例

上の入力はそのままコピーして使えます。一部を省略した出力行は次のとおりです。

```json
{
  "tweet": { "id": "2100344867507327087", "text": "…", "likeCount": 6409 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      { "questionId": "relevance", "type": "probability", "probability": 0.97 },
      {
        "questionId": "sentiment",
        "type": "choice",
        "value": "neutral",
        "confidence": 0.88
      },
      {
        "questionId": "experience",
        "type": "choice",
        "value": "observer",
        "confidence": 0.69
      }
    ]
  },
  "monitor": { "status": "unchanged", "changedQuestionIds": [], "changes": [] }
}
```

各結果には`tweet`、`analysis`、`monitor`が入ります。回答には、種類、質問のバージョン、取得できる確率が含まれます。`analysis.contextAvailability`は、引用、返信、著者、メディアのうち欠けているコンテキストを報告します。分析が失敗またはスキップされた行にも、収集したポストと`reason`が残ります。その行の回答リストは空です。

キーバリューストアにある無料の診断情報が、無効な入力、見つからない結果、中断された収集を説明します。実行レポートは、収集した行、課金済みの分析、保留中の課金を分けて示します。

## 実行サマリーとフラットな回答

実行は、次の4つの場合に`analysis-summary`レコードをキーバリューストアに書き込みます。

- 問題が起きた場合、または大規模な場合。
- シリーズの最初の実行として、`baselineDatasetId`なしで`monitor`を設定した場合。
- 比較で、変化したポスト、新しいポスト、比較できないポストが見つかった場合。
- `alwaysSaveRunRecords`がオンの場合。

それ以外の実行は、このレコードを書き込みません。その場合は、`Top sentiment: negative in 2 of 5 results.`のように、最も多い回答をステータスに示します。変化のない比較では、`No change since the earlier run.`と示します。問題が起きた実行と大規模な実行は、`run-report`も書き込みます。`alwaysSaveRunRecords`がオンの実行も同じです。`run-report`は、`results.analysisSummary`の下にサマリーを繰り返します。

サマリーは、分析済み、失敗、スキップの行数を数えます。エンゲージメントを合計し、すべての質問を要約します。

- `targets`は、ブランドや別名ごとに、言及数、シェア・オブ・ボイス、エンゲージメントを報告します。
- 各`targets`エントリの`top`は、回答カテゴリーごとにエンゲージメントが最も高い言及を3件示します。最も強いネガティブな言及とポジティブな言及のアラートに使えます。
- 各`targets`エントリの`choices`は、そのブランドに言及したポストでの回答の内訳です。
- `sentiment`ブロックは、エンゲージメントが最も高いポジティブな言及とネガティブな言及を3件ずつ`top`に挙げます。
- `relevance`は、そのブランドについての言及を数えます。
- `monitor.changedRows`は、ベースラインから判定が変わったポストを挙げます。Webhookやアラートに送れます。
- `monitor.baselineDatasetId`を設定すると、`monitor`ブロックが比較ステータスを数えます。変化した行も最大50件挙げます。
- どの行も、リンク先のホスト名を`sourceDomains`に挙げます。

サマリーは数値を小数点以下4桁に丸めます。結果が空の実行は、件数を0、平均を`null`として報告します。

どの結果行にも、質問IDをキーにしたフラットなマップ`answers`が入ります。各値は、選ばれたカテゴリー、スコア、確率です。`Flat answers`データセットビューと、CSVやExcelのエクスポートでは、質問ごとに1列が表示されます。列はポストの横に並ぶので、スプレッドシートでJSONを解析する必要はありません。失敗した行とスキップした行のマップは空です。

## タスクの例

50個の公開タスクから選べます。どのタスクも、実際の英語の検索と、上限を決めた`maxItems`から始まります。用意済みの対象、コンテキスト、概要のデータセットビューも含みます。実行前に検索や対象を編集してください。

- [X上でのNikeのブランド言及を監視する](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-nike-brand-mentions-on-x)
- [X上でのStarbucksのブランド言及を監視する](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-starbucks-brand-mentions-on-x)
- [X上でのTeslaのブランド言及を監視する](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-tesla-brand-mentions-on-x)
- [X上でのSpotifyのブランド言及を監視する](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-spotify-brand-mentions-on-x)
- [X上でのNetflixのブランド言及を監視する](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-netflix-brand-mentions-on-x)
- [X上でのAirbnbのブランド言及を監視する](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-airbnb-brand-mentions-on-x)
- [X上でのUberのブランド言及を監視する](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-uber-brand-mentions-on-x)
- [X上でのPelotonのブランド言及を監視する](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-peloton-brand-mentions-on-x)
- [X上でのShopifyのブランド言及を監視する](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-shopify-brand-mentions-on-x)
- [X上でのNotionのブランド言及を監視する](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-notion-brand-mentions-on-x)
- [X上でのDuolingoのブランド言及を監視する](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-duolingo-brand-mentions-on-x)
- [X上でのLululemonのブランド言及を監視する](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-lululemon-brand-mentions-on-x)

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
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis): すべてのポストに、AIで態度、強度、皮肉の確率のラベルを付けます。任意のトピックの全体的な感情を知りたいときに使います。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals): AIで、強気、弱気、中立、混在のスタンス、コンテンツの種類、確信度、資産との関連性のラベルを付けます。株、暗号資産、トレードの話題を追うときに使います。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor): AIで、ニュースのポストに形式、情報源の明示、トピックとの関連性のラベルを付けます。報道と論評を分けるときに使います。分析済みポスト1件あたり$0.0003から。
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier): すべてのポストについて、独自のカテゴリー、スコア、はい/いいえの質問にAIが答えます。既定の分析が自分のラベルに合わないときに使います。分析済みポスト1件あたり$0.0003から。
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer): AIによる8つの特性の回答から、すべてのポストについて0から100のViral Scoreと判定を推定します。ポストが広がる理由や伸びない理由を調べるときに使います。分析済みポスト1件あたり$0.0003から。

## よくある質問とサポート

### AIのアカウント、X APIキー、ログインは必要ですか？

いいえ。XquikのX (Twitter) Brand Monitoringは、AIの費用を料金に含めています。AIのアカウント、トークン、キーは不要です。X APIキー、ログイン、認証情報も必要ありません。

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

はい。Python、JavaScript、cURLの例は[APIタブ](https://apify.com/xquik/x-twitter-brand-monitoring/api)にあります。定期的な実行にはApifyの[スケジュール](https://docs.apify.com/platform/schedules)を使います。前回のデータセットIDを`monitor.baselineDatasetId`に渡すと、何が変わったかを確認できます。Apifyの連携機能で、実行をWebhook、Make、Zapier、n8n、Googleスプレッドシートにつなぐこともできます。

### どこでサポートを受けられますか？

Actorページでissueを開くか、実行IDを添えてsupport@xquik.comに連絡してください。キーバリューストアにある無料の診断情報が、空の実行、部分的な実行、中断された実行の理由を説明します。
