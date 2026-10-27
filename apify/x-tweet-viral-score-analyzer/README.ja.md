[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · [简体中文](README.zh-CN.md) · **日本語** · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![FramerがXquik MCPをコーディングエージェントに接続する様子](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[FramerがXquikのスクレイパーをClaude Code、Codex、Cursorなどと一緒に使う様子](https://youtu.be/4UOSpoOoC3Y?t=367)を6:07から視聴できます。

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。XquikのX Tweet Viral Score Analyzerは、すべてのポストを評価します。Viral Scoreの推定値&判定を付けます。他のApify Actorの多くは、フィルタリングや重複排除の前に課金します。Xquikが課金するのは、配信した結果のうち、重複がなくフィルター条件に合うものだけです。AIの費用はポスト1件あたりの料金に含まれます。AIのアカウント、トークン、キーは不要です。

ポストが広がる理由や伸びない理由を把握し、元のポストデータもそのまま残せます。Xquikの**X Tweet Viral Score Analyzer with AI**は、条件に合うポストを収集します。AIが各ポストの8つの特性を評価します。このActorは、その回答をViral Scoreの推定値&判定に変換します。どの行にも、実際のいいね、リポスト、返信&引用の数が残ります。各推定値を実際の結果と比べてください。

- **ポストごとのViral Score。** バージョン管理された固定のルールで、0から100のスコアを計算します。
- **8つの特性の回答。** ポストのスコアが高い理由や低い理由を示します。
- **ハードストップ。** スパム、レイジベイト、ありきたりな機械生成文に見えるポストのスコアに上限をかけます。
- **完全な元レコード。** どの行も、ポストが公開するすべてのフィールドを残します。

Viral Scoreは、文面がどれだけ効果的かを推定します。いいねや表示回数を予測するものではありません。Xがポストを順位付けする方法を再現するものでもありません。

> Xquikは独立したサードパーティサービスです。X Corpとは提携していません。
> 「Twitter」および「X」はX Corpの商標です。

## ポストのViral Scoreを確認する方法

Apifyを初めて使いますか？まず[無料アカウントを作成してください](https://console.apify.com/sign-up?fpr=xquik)。無料プランはクレジットカード不要&毎月$5分を使えます。分析済みポスト1件あたり$0.0003なので、プラットフォーム利用料を別にすると、$5で最大16,000件の分析済みポストをまかなえます。その後、このページに戻ってTry for freeを押してください。

1. 検索語、プロフィールのユーザー名、ポストのURL、ポストIDのいずれかを追加します。
2. `maxItems` & タスクに必要な抽出フィルターを設定します。
3. `analysis.context` にオーディエンスを書くか、デフォルトのままにします。
4. 実行を開始 & `Viral Score` データセットビューを開きます。

```json
{
  "searchTerms": ["from:NASA -filter:replies -filter:retweets"],
  "maxItems": 150,
  "analysis": { "context": "Space fans & general readers." }
}
```

### Actorが回答する内容

| 質問         | 回答                                                         |
| ------------ | ------------------------------------------------------------ |
| フック       | 0はフックなし、1ははっきりした書き出し、2は鋭い書き出し      |
| 明快さ       | 0はわかりにくい、1は読むのに手間がかかる、2は一読でわかる    |
| 情報量       | 0は新しい情報なし、1はよくある指摘、2は役立つ要点            |
| 面白さ       | 0は面白くない、1は少し面白い、2は共有したくなるほど面白い    |
| レイジベイト | 主に怒りをあおるポストである確率                             |
| AI生成風     | ありきたりな機械生成文のように読める確率                     |
| スパム       | スパム、詐欺、プレゼント企画、エンゲージメント稼ぎである確率 |
| 反応         | 共有、返信、いいね、反論、無視のいずれか                     |

AI生成風の回答は、文体だけを判定します。誰がポストを書いたかを確定するものではありません。

### Viral Scoreのしくみ

フック、明快さ、読んで得られるもの&予想される反応がスコアを上げます。ありきたりな機械生成文に見える書き方は、スコアを下げます。

ハードストップは、スパム、レイジベイト&ありきたりな機械生成文と思われるポストのスコアに上限をかけます。スコアは0から100の整数です。

| 判定          | スコア    |
| ------------- | --------- |
| `send_it`     | 70から100 |
| `edit_first`  | 40から69  |
| `sleep_on_it` | 0から39   |

`viral.weights` は、`viral_lite:1` のように、これらのルールのバージョンを示します。ルールが変わるたびに、この値も変わります。分析が失敗またはスキップされた場合、スコアは `null` です。デフォルトの特性の回答が欠けている場合も `null` です。XquikのX Tweet Viral Score Analyzerが、欠けたスコアを推測で埋めることはありません。

## アルゴリズムスコアの推定値

Xは、リポジトリ `xai-org/x-algorithm` のファイル `home-mixer/params/param.rs` でランキングの重みを公開しました。XquikのX Tweet Viral Score Analyzerは、そのうち4つを各ポストの公開カウントに適用します。

| カウント | 重み |
| -------- | ---- |
| いいね   | 0.66 |
| 返信     | 5    |
| リポスト | 1    |
| 引用     | 5    |

`viral.algorithmWeightedSum` は、各カウントに重みを掛けた値の合計です。`viral.algorithmScore` は、その合計を表示回数で割り、1,000を掛けた値です。表示回数のないポストでは、代わりにフォロワー数を使います。`viral.algorithmBasis` は、割る数が `views` か `followers` かを示します。スコアは、基準が同じもの同士でだけ比べてください。`viral.weightsVersion` は、`x_algorithm_params:2026-10-14` のように重みのバージョンを示します。

この推定値には次の制限があります。

- Xは、1人の閲覧者について予測した確率を各重みに掛けます。このActorは、観測したカウントを掛けます。結果は推定値であり、Xが計算するスコアではありません。
- Xはブックマークと表示回数の重みを公開していません。合計にはどちらも入りません。
- Xは、滞在時間&共有など、この4つ以外のシグナルも使います。公開データからはそれらがわかりません。
- 表示回数もフォロワー数もないポストでは、スコアは `null` です。
- AIがこれらのカウントを見ることはありません。AIが読むのはテキスト&コンテキストだけです。

## 予測と実績の比較

XquikのX Tweet Viral Score Analyzerは、各Viral Scoreを実際の結果と比べます。`viral.actualEngagementRate` は、フォロワー1,000人あたりの重み付き合計を使った `log10(1 + weighted sum per 1,000 followers)` です。対数を取ることで、非常に大きな1件のポストの影響を抑えます。フォロワー数がないか0の場合、この率は `null` です。

実行サマリーの `viral.calibration` ブロックは、次のフィールドを報告します。

- `comparedPosts` は、Viral Score&実績の率の両方があるポストを数えます。
- `rankCorrelation` は、-1から1のスピアマンの順位相関です。スコアが高いほど率も高かったかどうかを示します。
- `calibrationScore` は相関の100倍で、下限は0です。
- `overperformers` & `underperformers` は、それぞれ最大5件のポストを挙げます。各ポストには、ポストID、URL、Viral Score、実績の率 & `gap` が付きます。

`gap` は、標準化した実績の率から、標準化したViral Scoreを引いた値です。gapが1標準偏差に達したポストがリストに入ります。

このキャリブレーションには次の制限があります。

- 比較したポストが10件未満だと、キャリブレーションは `null` になり、理由は `too_few_posts` です。スコアや率がすべて同じ場合は `no_variation` です。
- 相関は近似値です。
- キャリブレーションは1回の実行だけを表します。スコアが低いのは、ポストのタイミング、トピック、オーディエンスが違うせいかもしれません。文面の推定が外れた証拠にはなりません。
- 新しいポストは、まだエンゲージメントを集めきっていません。経過時間が近いポスト同士を比べてください。

## アカウントレポート

実行サマリーの `viral.accounts` ブロックは、著者のユーザー名ごとに次の項目を報告します。

- ポスト数、平均Viral Score&実際のエンゲージメント率の平均。
- Viral Scoreが最も高いポスト&最も低いポスト。ポストID&URLも付きます。
- バケットごとの平均Viral Score。バケットは、UTCでのポストした時間帯、テキストの長さの区分、メディアの有無、リンクの有無&セルフスレッドです。

テキストの長さの区分は `short`、`medium`、`long` & `extended` です。`short` は80文字まで、`medium` は200文字まで & `long` は280文字までです。`extended` はそれより長いテキストです。セルフスレッドのポストは、同じ著者のポストへの返信です。

このレポートには次の制限があります。

- レポートは、スコア付きのポストが最も多い50個のユーザー名を挙げます。
- レポートが追跡するのは、実行の最初の1,000個のユーザー名です。`untrackedPosts` は、それ以降のユーザー名のスコア付きポストと、ユーザー名のないポストを数えます。
- ポストの少ないバケットからわかることはわずかです。平均を比べる前に `posts` を確認してください。
- バケットが示すのは、この実行で何が一緒に起きたかです。原因は示しません。

## リーダーボード

実行サマリーの `viral.leaderboard` ブロックは、アカウントレポートのユーザー名を順位付けします。`byViralScore` は平均Viral Scoreで順位付けします。`byActualEngagementRate` は実績の率の平均で順位付けします。各リストには、`rank`、`posts` & `average` を持つユーザー名が最大20個入ります。

このリーダーボードには次の制限があります。

- 順位に入るには、ユーザー名ごとにスコア付きのポストが3件以上必要です。
- 率のリストは、フォロワー数のないユーザー名を除きます。
- 同点の場合は、ポスト数の多い方、次にユーザー名の順で決めます。
- リーダーボードが扱うのは1回の実行のポストです。アカウントの全履歴ではありません。

## ポストする前に下書きを採点する

自分のテキストを `texts` に貼り付けてください。XquikのX Tweet Viral Score Analyzerがそれを採点します。Xからは何も取得しません。

```json
{
  "texts": [
    "We shipped dark mode today. Try it and tell us what breaks.",
    "5 things we learned from 1,000 support tickets."
  ],
  "analysis": { "context": "Developers who use our app." }
}
```

- 各テキストは1行になり、`viralScore`、`viralVerdict` & `viral.stops` を持ちます。
- `tweet.id` は `text:1`、`text:2` と続き、`tweet.type` は `text` です。
- 下書きにはまだいいねも表示回数もないので、`viral.algorithmScore` は `null` のままです。
- 分析したテキストは1件あたり、分析済みポスト1件と同じ$0.0003です。
- `texts` を設定した実行は、そのテキストだけを分析します。Xの対象は別の実行で扱ってください。

## Viral Scoreの確認にはいくらかかりますか？

XquikのX Tweet Viral Score Analyzerは、分析済みポスト1件あたり$0.0003からです。開始料金はかかりません。料金には、収集、AIの費用&Viral Scoreが含まれます。AIのアカウント、トークン、キーは不要です。この料金で、ポスト1件あたり最大8個の質問&64,000バイトのコンテキストを扱えます。質問の定義は1つあたり最大8,000バイトです。

より多くの量が必要なら、前払いの利用枠が多い[Apifyプランを選んでください](https://apify.com/pricing?fpr=xquik)。

抽出フィルター&重複排除は分析の前に行います。フィルターで除いた行や重複した行に支払うことはありません。失敗した分析、スキップした分析&診断情報の行には結果料金がかかりません。Apifyは、コンピュート、ストレージ&転送のプラットフォーム利用料を、プランの料金で別途請求します。Pricingタブで確認できます。

## 入力&出力の例

上の入力はそのままコピーして使えます。一部を省略した出力行は次のとおりです。

```json
{
  "tweet": { "id": "2100493544842494265", "text": "...", "likeCount": 12 },
  "viral": {
    "score": 74,
    "verdict": "send_it",
    "weights": "viral_lite:1",
    "stops": [],
    "algorithmScore": 9.46,
    "algorithmBasis": "views",
    "algorithmWeightedSum": 18.92,
    "actualEngagementRate": 0.7582,
    "weightsVersion": "x_algorithm_params:2026-10-14"
  },
  "viralScore": 74,
  "viralVerdict": "send_it",
  "viralAlgorithmScore": 9.46,
  "viralActualEngagementRate": 0.7582,
  "analysis": {
    "status": "succeeded",
    "answers": [
      { "questionId": "hook", "type": "score", "value": 2, "confidence": 0.84 },
      { "questionId": "spam", "type": "probability", "probability": 0.03 },
      {
        "questionId": "reaction",
        "type": "choice",
        "value": "share",
        "confidence": 0.7
      }
    ]
  }
}
```

各結果には `tweet`、`analysis` & `viral` が入ります。回答には、種類、質問のバージョン&取得できる確率が含まれます。`viral.stops` は、スコアに上限をかけたハードストップを挙げます。分析が失敗またはスキップされた行にも、収集したポスト & `reason` が残ります。その行の回答リストは空で、スコアは `null` です。

キーバリューストアにある無料の診断情報が、無効な入力、見つからない結果&中断された収集を説明します。実行レポートは、収集した行、課金済みの分析&保留中の課金を分けて示します。

## 実行サマリー&フラットな回答

実行は、次の3つの場合に `analysis-summary` レコードをキーバリューストアに書き込みます。

- 問題が起きた場合、または大規模な場合。
- 比較で、変化したポスト、新しいポスト、比較できないポストのいずれかが見つかった場合。
- `alwaysSaveRunRecords` がオンの場合。

それ以外の実行は、シリーズの最初の実行も含めて、このレコードを書き込みません。その場合は、`Average Viral Score is 64.` のように、主な回答をステータスに示します。変化のない比較では、`No change since the earlier run.` と示します。問題が起きた実行や大規模な実行は、`run-report` も書き込みます。`alwaysSaveRunRecords` がオンの実行も同じです。`run-report` は、`results.analysisSummary` の下にサマリーを繰り返します。

サマリーは、分析済み、失敗&スキップの行数を数えます。エンゲージメントを合計し、すべての質問を要約します。

- `viral` ブロックは、`averageScore` & 判定ごとの件数を報告します。スコアが付いた行&付かなかった行も数えます。
- 同じブロックに、上で説明した `calibration`、`accounts` & `leaderboard` が入ります。
- scoreの質問は、平均&エンゲージメントで重み付けした平均を報告します。
- `reaction` の内訳は、各反応に当てはまるポストの数を示します。
- `top` は、反応ごとにエンゲージメントが最も高いポストを3件挙げます。
- どの行も、リンク先のホスト名である `sourceDomains` を挙げます。
- どの行も、`$NVDA` のように、テキスト内にある `cashtags` を挙げます。
- `monitor.baselineDatasetId` を設定すると、サマリーの `monitor` ブロックが比較ステータスを数えます。変化した行も最大50件挙げます。

結果が空の実行は、0の件数 & `null` の平均を報告します。

どの結果行にも、`viralScore`、`viralVerdict`、`viralAlgorithmScore` & `viralActualEngagementRate` が入ります。質問IDをキーにしたフラットなマップ `answers` も入ります。各値は、選ばれたカテゴリー、スコア、確率のいずれかです。`Viral Score` データセットビュー & CSVやExcelのエクスポートには、これらの列が表示されます。列はポストの横に並ぶので、スプレッドシートでJSONを解析する必要はありません。失敗した行&スキップした行のマップは空です。

## 以前の実行と比較する

`monitor.baselineDatasetId` に、同じ分析設定で完了した以前の実行のデータセットIDを渡してください。比較ではその実行の行を読み取ります。その実行がサマリーを省いていても機能します。すると、すべての行に `monitor` オブジェクトが付きます。そのステータスは次の値をとります。

- ベースラインがない場合は `first_run`。
- 以前の実行になかったポストは `new_to_baseline`。
- 以前の実行にあったポストは `unchanged` または `changed`。

`changes` は、`previous` から `current` へ変わった特性の判定をそれぞれ挙げます。判定は、カテゴリー、丸めたスコアのレベル、0.5を境にしたはい/いいえで比較します。判定が変化として数えられるのは、はっきり変わった場合だけです。実行間でほぼ同点の判定は `unchanged` のままです。

ベースラインが `maxBaselineRows` を超える場合や、異なる設定の実行のものである場合、実行は収集の前に止まります。そのとき、実行は診断情報の行を書き込みます。`maxBaselineRows` のデフォルトは100,000です。

## タスクの例

50個の公開タスクから選べます。どのタスクも、実際の英語の検索&上限を決めた `maxItems` から始まります。`Viral Score` データセットビューを使います。オーディエンスのコンテキストを加えたタスクもあります。実行前に検索やコンテキストを編集してください。

- [AIスタートアップのローンチポストのViral Score](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-ai-startup-launch-tweets)
- [SaaS創業者のビルドインパブリックのポストのViral Score](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-saas-founder-build-in-public-posts)
- [Product HuntのローンチポストのViral Score](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-product-hunt-launch-posts)
- [開発者ツールの発表のViral Score](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-developer-tool-announcements)
- [オープンソースのリリースポストのViral Score](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-open-source-release-posts)
- [暗号資産プロジェクトの発表のViral Score](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-crypto-project-announcements)
- [子育てユーモアのポストのViral Score](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-parenting-humor-posts)
- [オフィスユーモアのポストのViral Score](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-office-humor-posts)
- [ペット写真のキャプションのViral Score](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-pet-photo-captions)
- [NASAのポストのViral Score監査](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-nasa-posts)
- [DuolingoのポストのViral Score監査](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-duolingo-posts)
- [Wendy'sのポストのViral Score監査](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-wendys-posts)

残りのタスクはActorページにあり、さらに多くのトピック&ブランドアカウントを扱います。

## よくある質問&サポート

よくある質問に答えたあと、サポートを受けられる場所を案内します。

### AIのアカウント、X APIキー、ログインは必要ですか？

いいえ。XquikのX Tweet Viral Score Analyzerは、AIの費用を料金に含めています。AIのアカウント、トークン、キーは不要です。X APIキー、ログイン、認証情報も必要ありません。

### スコアが高ければ、ポストはバズりますか？

いいえ。スコアは、一般的な読者に対して文面がどれだけ効果的かを推定します。リーチは、タイミング、オーディエンスの規模、メディア&運にも左右されます。スコアに頼る前に、各行にある実際のエンゲージメント数と比べてください。

### 自分の質問を使えますか？

はい。カスタムの `analysis.questions` がデフォルトの質問に置き換わります。`choice`、`score`、`probability` の質問を1個から8個送ってください。choiceの質問には2個から255個のカテゴリーを指定できます。scoreの質問には、順序のあるレベルが2つ以上必要です。Viral Scoreには8つのデフォルトの質問がすべて必要です。そのため、カスタムの質問を使うとViral Scoreは `null` になります。

### 分析が失敗またはスキップされた行が返るのはなぜですか？

`analysis.status` は `failed` か `skipped` です。このActorはポストを収集&配信しましたが、AIの分析が完了しませんでした。`analysis.reason` が原因を示します。`context_limit` は、指定したコンテキスト&対象でいっぱいになり、ポストを入れる余地がないことを示します。`service_unavailable` は、分析サービスが一時的に使えなかったことを示します。これらの行には、結果料金&スコアのどちらも付きません。`analysis.context` を短くするか、該当するIDを再実行してください。

`maxContextBytes` より長いポストも、このActorは分析します。まず引用元&返信先のポストを削り、次にポスト本体を削ります。このとき `analysis.contextAvailability.postText` は `truncated` になります。より多くのテキストを残すには、`maxContextBytes` を最大64,000まで上げてください。

### 分析は事実を検証しますか？

いいえ。回答が示すのは、ポストが表現する内容&その伝え方です。確率はAIの確信度であり、真偽ではありません。重要な分類は、元のポストと照らし合わせて確認してください。元のポストはすべての行に残っています。

### どの言語に対応していますか？

抽出は、Xが扱うすべての言語に対応します。分析は、まず英語の顧客シナリオで検証しています。ほかの対応言語でも、同じ構造の回答を返します。

### 費用を抑えるにはどうすればよいですか？

フィルター、重複排除 & `maxItems` は分析の前に適用されます。支払うのは、重複がなくフィルター条件に合うポストの分だけです。的確な検索演算子、日付の範囲&エンゲージメントの下限を使ってください。大規模な実行の前に、小さな `maxItems` で回答の質を確かめてください。

### Xのデータを分析しても合法ですか？

このActorは、Xの公開フィールドを取得します。結果には個人データが含まれることがあります。目的が合法であることを確認し、適用されるプライバシー規則に従ってください。判断に迷う場合は、資格のある弁護士に相談してください。

### API、スケジュール&連携は使えますか？

はい。Python、JavaScript & cURLの例は[APIタブ](https://apify.com/xquik/x-tweet-viral-score-analyzer/api)にあります。定期的な実行にはApifyの[スケジュール](https://docs.apify.com/platform/schedules)を使います。前回のデータセットIDを `monitor.baselineDatasetId` に渡すと、何が変わったかを確認できます。Apifyの連携機能で、実行をWebhook、Make、Zapier、n8n & Googleスプレッドシートにつなぐこともできます。

### どこでサポートを受けられますか？

実行IDを添えて、[Issuesタブ](https://apify.com/xquik/x-tweet-viral-score-analyzer/issues)でissueを開いてください。キーバリューストアにある無料の診断情報が、対応が必要な実行について説明します。行が1件も返らなかった実行は、その理由をステータスで示します。

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
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)は、すべてのポストについて、独自のカテゴリー、スコア&はい/いいえの質問にAIで答えます。既定の分析が自分のラベルに合わないときに使います。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) Monitor](https://apify.com/xquik/x-twitter-monitor)は、アカウントの新しいツイート、返信、引用、リポスト、プロフィールの変更を、通常はXに表示されてから一秒もかからずにすべて捕捉し、キーワードのツイートとフォローも捕捉します。Xにツイートが表示されたらすぐにアラートが必要なときに使います。monitor-hourあたり$0.0045から。
