[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · [简体中文](README.zh-CN.md) · **日本語** · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![FramerがXquik MCPをコーディングエージェントに接続する様子](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[FramerがXquikのスクレイパーをClaude Code、Codex、Cursorなどと一緒に使う様子](https://youtu.be/4UOSpoOoC3Y?t=367)を6:07から視聴できます。

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。XquikのX Tweet Sentiment Analysisは、すべてのポストに態度、強度&皮肉の判定を付けます。他のApify Actorの多くは、フィルタリングや重複排除の前に課金します。Xquikが課金するのは、配信した結果のうち、重複がなくフィルター条件に合うものだけです。AIの費用はポスト1件あたりの料金に含まれます。AIのアカウント、トークン、キーは不要です。

X(Twitter)のポストに表れた態度を測り、元のポストデータもそのまま残せます。Xquikの**X Tweet Sentiment Analysis with AI**は、条件に合うポストを収集します。そして、AIによる感情のカテゴリー、強度レベル&皮肉の確率をすべてのポストに付けます。発売、キャンペーン、番組のエピソード、著名人への反応を追跡できます。強い反応と、ついでの言及を分けられます。

> Xquikは独立したサードパーティサービスです。X Corpとは提携していません。
> 「Twitter」および「X」はX Corpの商標です。

## X Tweet Sentiment Analysis with AIを使う理由

- **自社ブランドへの感情。** `analysis.targets` にブランド、製品、人物を追加します。すると回答は、その対象への態度を判定します。
- **エンゲージメントで反応に重み付け。** `engagementShares` は、感情の内訳をいいね、リポスト、返信&引用で重み付けします。`top` は、態度ごとにエンゲージメントが最も多い3件のポストを一覧にします。
- **何が変わったかがわかる。** 以前の実行のデータセットIDを `monitor.baselineDatasetId` に追加します。すると各行に、どの回答が変わったかが表示されます。
- **自分のテキストも分析。** 下書き、レビュー、返信を `texts` に貼り付けると、同じ回答が得られます。この実行はXから何も取得しません。
- **スプレッドシートでそのまま使える回答。** `Flat answers` ビュー&CSVやExcelのエクスポートでは、質問ごとに1列になります。
- **独自の質問を設定。** `analysis.questions` に最大8個の質問を書くと、デフォルトの質問の代わりに使われます。
- **アカウントもキーも不要。** 料金にはAIによる分析が含まれます。AIのキー、X APIキー、ログインは要りません。

### 完全な結果

- 長い期間を指定しても、すべての結果がすばやく返ります。
- どの演算子を組み合わせても、検索は一致するものをすべて返します。
- フィルター付きのページは、結果がなくなるまで件数が欠けずに返ります。
- 各回答には、Xが持つ最も完全なデータが入ります。

### 正確な行

- 検索結果には、クエリに一致するポストがすべて入り、それ以外は入りません。
- 単語&フレーズの一致は、どの言語&文字体系でも機能します。
- 言語フィルターは、Xがタグ付けするすべての言語で使えます。
- 非公開アカウント&非公開リストには、空のページではなく明確な答えを返します。
- リポストには、元のポストの全文が入ります。
- 行の中のIDはすべて正確なままです。
- メンション、リンク、ハッシュタグ&ハイライトの位置は、テキストと一致します。
- 認証バッジは `x.com` の表示と一致します。
- 行には公開データだけが入ります。
- 新しい順の結果は、ページをまたいでも正しい日付順を保ちます。
- 検索は、Xで入力するのと同じ形のクエリを受け付けます。
- 場所の検索は、6つの言語の名前で使えます。
- 実行できない検索はすぐに失敗し、直し方を伝えます。
- 日付は、一般的などの形式で書いても同じ意味になります。
- 検索は `since_id` & `max_id` の範囲指定を受け付けます。
- 広告&プロモーションの項目が行に入ることはありません。

### 最新のデータ

- Xが変更を加えても、読み取りは動き続けます。

### 速度

- 遅いページが1つあっても、実行は止まりません。
- 投稿の多いトピックでも、検索は速いままです。
- 次のページはどれもすばやく届きます。
- 読み取りは、行が届いた時点で終わります。
- 止まったActorの呼び出しは、自動で回復します。

### 公正な課金

- 不正な入力は無料で、何を直せばよいかを伝えます。
- AI分析の課金は、分析したポストの分だけです。
- Actorが課金するのは、配信した行のうち、重複がなく条件に合うものだけです。
- 再起動した実行が二重に課金することはありません。
- 実行は支出の上限内に収まり、上限に達しても診断情報を書き込みます。
- AIのActorは、失敗した分析やスキップした分析に課金しません。

### 信頼性

- 一度きりのエラーで実行が失敗することはありません。
- ページ送りは、ページが変わっても一貫しています。
- ページ送りが無限に繰り返すことはありません。
- 期限が来ると、それまでに見つかった行を診断情報とともに返します。
- Xquikの短い障害があっても、Actorは動き続けます。
- Actorの実行は、再起動しても重複なく続きます。
- 不正な行が1つあっても、バッチ全体は失敗しません。
- 停止した実行にも、行&レポートが残ります。
- 開始できない実行も、その理由を説明します。
- サポートは、リクエストや実行が返した内容を正確に確認できます。

### エージェント向けの設計

- Actorは、他のActor向けに書かれた入力も受け付けます。
- どの実行も、終了した理由&再試行すべきかどうかを示します。

### 豊富なデータ

- ポストの行には、Note Tweetのテキスト、編集履歴、コミュニティノート、リーチのラベル&返信の設定が入ります。
- 行には、投稿元のアプリ、メディアの数&プロフェッショナルアカウントの情報が入ります。
- メディアには、バリアント、代替テキスト、サイズ&利用可否の理由が付きます。
- AIの回答には、確率、確信度&質問のバージョンが付きます。
- 分析の実行をまたいだ変化の判定は、ノイズで揺れません。

### 品質チェック

- Xが表示するフィールドはすべて、提供されるか、意図的に除かれるか、存在しないことが確認されています。
- Xquikは、すべての読み取りを実際のXでテストしています。

## X Tweet Sentiment Analysis with AIが返すデータ

- **ポストごとの感情。** 各ポストにそれぞれのカテゴリーが付くので、すべての回答を確認できます。
- **強度。** 0から2のレベルで、強い調子のポストと穏やかなポストを分けます。
- **皮肉の確率。** 文字どおりの言葉が態度と食い違うポストに印を付けます。
- **完全な元レコード。** どの行も、ポストが公開するすべてのフィールドを残します。

## ポストの感情を分析する方法

Apifyを初めて使いますか？まず[無料アカウントを作成してください](https://console.apify.com/sign-up?fpr=xquik)。無料プランはクレジットカード不要&毎月$5分を使えます。分析済みポスト1件あたり$0.0003なので、プラットフォーム利用料を別にすると、$5で最大16,000件の分析済みポストをまかなえます。その後、このページに戻ってTry for freeを押してください。

1. 検索語、プロフィールのユーザー名、ポストのURL、ポストIDのいずれかを追加します。
2. `maxItems` & タスクに必要な抽出フィルターを設定します。
3. 各ポストをそれぞれの主題で判定するなら、`analysis.targets` は空のままにします。ブランド、製品、人物に絞るなら、その名前&別名を追加します。
4. 実行を開始&データセットを開きます。

```json
{
  "searchTerms": ["\"season finale\" lang:en"],
  "maxItems": 200,
  "analysis": { "context": "Reactions to the show, not spoilers." }
}
```

### Actorが回答する内容

| 質問 | 回答                                                    |
| ---- | ------------------------------------------------------- |
| 感情 | ポジティブ、ネガティブ、混在、中立、不明のいずれか      |
| 強度 | 0はついでの言及、1ははっきりした態度、2は強い言葉づかい |
| 皮肉 | 文字どおりの言葉が態度と食い違う確率                    |

対象を指定すると、感情はその対象への態度を判定します。指定した引用や返信の文脈も使います。対象がなければ、ポストの主な主題を判定します。

## 自分のテキストを分析する

自分の下書き、返信、レビュー、メモを `texts` に貼り付けてください。XquikのX Tweet Sentiment Analysisがそれを分析します。Xからは何も取得しません。

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

## 他の感情分析Actorから移行する

既存の入力を移すときは、1つの設定に名前を1つだけ使ってください。

| 既存の入力名                                        | Xquikのフィールド |
| --------------------------------------------------- | ----------------- |
| `query`, `searchQuery`                              | `twitterContent`  |
| `queries`, `searchQueries`, `search`                | `searchTerms`     |
| `handles`, `usernames`, `username`, `profileTweets` | `twitterHandles`  |
| `tweetUrls`, `postUrls`, `urls`                     | `startUrls`       |
| `tweetIDs`, `tweet_ids`, `postIds`, `tweetId`       | `tweetIds`        |
| `maxTweets`, `maxResults`, `count`, `max_posts`     | `maxItems`        |
| `sort`                                              | `queryType`       |
| `tweetLanguage`, `language`                         | `lang`            |
| `startDate`, `endDate`                              | `since`, `until`  |

このActorは、これらのよく使われる名前をそのまま受け付けます。他のポスト用Actorのフィルター名も読み取ります。ここに対応するフィールドがないフィルターは、実行中のすべての検索でXの検索演算子になります。実行ログは、それらの演算子を最初に挙げます。`sort` には `Latest` か `Top` を使ってください。言語コード&日付の境界はそのまま残してください。上限は、すべての対象を合わせた数に適用されます。次の入力はそのまま実行できます。

```json
{ "searchTerms": ["from:NASA"], "sort": "Latest", "maxItems": 5 }
```

ほかの入力は、実行前に変換が必要です。

1つの `tweetUrl` は `startUrls` に入れてください。

```json
{ "startUrls": ["https://x.com/NASA/status/2105727882588807607"] }
```

`text`、`Texts`、データセットの文字列、ファイルの文字列は `texts` に入れてください。

```json
{ "texts": ["Support fixed my issue. Thank you."] }
```

`hashtag` や `cashtag` は検索文字列に変えてください。

```json
{ "searchTerms": ["#Artemis lang:en", "$AAPL lang:en"], "maxItems": 5 }
```

`minLikes`、`minReplies` & `minRetweets` は、次のフィールド名に置き換えてください。

```json
{ "min_faves": 10, "min_replies": 2, "min_retweets": 3 }
```

結果は、元のレコードを `tweet` に、回答を `analysis.answers` に残します。ポジティブ、ネガティブ&中立のラベルは、該当する感情カテゴリーに対応付けてください。`mixed` & `unclear` は別のカテゴリーとして残してください。ほかの感情スコアは、尺度&意味が異なる場合があります。Xquikの強度は0から2で、小数を含むことがあります。皮肉は確率です。確信度は、回答の確かさを表します。

## ポストの感情分析にはいくらかかりますか？

XquikのX Tweet Sentiment Analysisは、分析済みポスト1件あたり$0.0003からです。開始料金はかかりません。料金には収集&AIの費用が含まれます。AIのアカウント、トークン、キーは不要です。この料金で、ポスト1件あたり最大8個の質問&64,000バイトのコンテキストを扱えます。質問の定義は1つあたり最大8,000バイトです。

より多くの量が必要なら、前払いの利用枠が多い[Apifyプランを選んでください](https://apify.com/pricing?fpr=xquik)。

抽出フィルター&重複排除は分析の前に行います。フィルターで除いた行や重複した行に支払うことはありません。失敗した分析、スキップした分析&診断情報の行には結果料金がかかりません。Apifyは、コンピュート、ストレージ&転送のプラットフォーム利用料を、プランの料金で別途請求します。Pricingタブで確認できます。

## 入力&出力の例

上の入力はそのままコピーして使えます。一部を省略した出力行は次のとおりです。

```json
{
  "tweet": { "id": "2100493544842494265", "text": "…", "likeCount": 12 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      {
        "questionId": "sentiment",
        "type": "choice",
        "value": "positive",
        "confidence": 0.91
      },
      {
        "questionId": "intensity",
        "type": "score",
        "value": 2,
        "confidence": 0.8
      },
      { "questionId": "sarcasm", "type": "probability", "probability": 0.04 }
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

それ以外の実行は、シリーズの最初の実行も含めて、このレコードを書き込みません。その場合は、`Top sentiment is positive in 3 of 5 results.` のように、最も多い回答をステータスに示します。変化のない比較では、`No change since the earlier run.` と示します。問題が起きた実行や大規模な実行は、`run-report` も書き込みます。`alwaysSaveRunRecords` がオンの実行も同じです。`run-report` は、`results.analysisSummary` の下にサマリーを繰り返します。

サマリーは、分析済み、失敗&スキップの行数を数えます。エンゲージメントを合計し、すべての質問を要約します。

- `sentiment` の内訳は、各態度に当てはまるポストの数を示します。
- `engagementShares` は、同じ内訳をいいね、リポスト、返信&引用の数で重み付けします。
- `top` は、態度ごとにエンゲージメントが最も高いポストを3件挙げます。
- どの行も、リンク先のホスト名である `sourceDomains` を挙げます。
- どの行も、`$NVDA` のように、テキスト内にある `cashtags` を挙げます。
- `monitor.baselineDatasetId` を設定すると、サマリーの `monitor` ブロックが比較ステータスを数えます。変化した行も最大50件挙げます。

サマリーは数値を小数点以下4桁に丸めます。結果が空の実行は、0の件数 & `null` の平均を報告します。

どの結果行にも、質問IDをキーにしたフラットなマップ `answers` も入ります。各値は、選ばれたカテゴリー、スコア、確率のいずれかです。`Flat answers` データセットビュー & CSVやExcelのエクスポートでは、質問ごとに1列が表示されます。列はポストの横に並ぶので、スプレッドシートでJSONを解析する必要はありません。失敗した行&スキップした行のマップは空です。

## 以前の実行と比較する

`monitor.baselineDatasetId` に、同じ分析設定で完了した以前の実行のデータセットIDを渡してください。比較ではその実行の行を読み取ります。その実行がサマリーを省いていても機能します。すると、すべての行に `monitor` オブジェクトが付きます。そのステータスは次の値をとります。

- ベースラインがない場合は `first_run`。
- 以前の実行になかったポストは `new_to_baseline`。
- 以前の実行にあったポストは `unchanged` または `changed`。

`changes` は、`previous` から `current` へ変わった感情、強度レベル、皮肉の判定をそれぞれ挙げます。判定は、カテゴリー、丸めたスコアのレベル、0.5を境にしたはい/いいえで比較します。判定が変化として数えられるのは、はっきり変わった場合だけです。実行間でほぼ同点の判定は `unchanged` のままです。

ベースラインが `maxBaselineRows` を超える場合や、異なる設定の実行のものである場合、実行は収集の前に止まります。そのとき、実行は診断情報の行を書き込みます。`maxBaselineRows` のデフォルトは100,000です。

## タスクの例

50個の公開タスクから選べます。知りたいことに合う例から始めてください。ほとんどのタスクは小さな上限を使います。日付を指定した2つの検索は、50件のポストを要求します。タスクを開くと、保存済みの入力を使えます。下にあるコピーして使える入力&観測した件数が、設定を選ぶ助けになります。

成功した行はどれも、感情、強度&皮肉の確率を返します。どの行も、回答の横に元のポストか入力したテキストを残します。これらの例は、英語の入力&言語フィルターを使います。それでも言語ラベルは、ポストや引用の中にある別の言語のテキストを見落とすことがあります。

対象がなければ、回答はポストの主な主題を表します。キーワードに言及していても、別のものの話である場合があります。対象が複数あると、感情の回答はそれらをまとめて表します。対象ごとに別々の回答は返しません。

プロフィールのいいねは非公開の場合があります。取得できない場合は、プロフィールの返信かポストを使ってください。

検索結果には、告知、宣伝、冗談&繰り返しのテキストが含まれることがあります。ポストIDが別々でも、独立した反応や顧客本人であることの証明にはなりません。意見を表すフレーズ&エンゲージメントのフィルターは、サンプルを選ぶだけです。フィードバックとして数える前に、ポストを確認してください。分析は、ポストの主張を検証しません。

### テスト済みのタスク入力

タスクを開いてください。Inputタブには、ビジュアルなフィールド&JSONがあります。開始する前に、JSONをコピーするかフィールドを変更してください。[タスクの入力はApifyが説明しています](https://docs.apify.com/actors/running/tasks)。

テストの日付はUTCです。件数は記録した実行のもので、取得できる量を保証するものではありません。日付を指定した50件の例は、重複のないIDが独立した意見と異なる理由を示します。

#### フィナーレのレビュー下書き

[シーズンフィナーレのレビューテキスト](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-season-finale-reactions)

フィナーレのレビュー下書きで、称賛と批判を分けます。2026-10-01に、入力した重複のないテキストを3件観測しました。上限は3件です。これは自分で用意した説明用のテキストで、視聴者調査ではありません。

#### スマートフォン発売の議論

[2026年9月のiPhone発売に関するポスト](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-iphone-launch-posts)

9月の決まった期間内で、発売についての議論を確認します。2026-10-01に重複のないポストを5件観測しました。上限は5件です。告知と個人の意見のどちらも一致することがあります。

#### ハーフタイムショーのレビュー

[ハーフタイムショーのレビューテキスト](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-super-bowl-halftime-show)

ハーフタイムショーのレビューで、評価の混在と皮肉を確かめます。2026-10-01に、入力した重複のないテキストを3件観測しました。上限は3件です。これは自分で用意した説明用のレビューで、ショーへのリアルタイムの反応ではありません。

#### 電気自動車の体験

[電気自動車の体験に関するポスト](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-new-electric-car)

電気自動車の運転や車選びについてのポストを見つけます。2026-10-01に重複のないポストを5件観測しました。上限は5件です。個人的な言い回しは、冗談や伝聞にも一致することがあります。

#### 映画の議論

[Marvel映画の議論のポスト](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-marvel-movie-audiences)

観客のコメントを選ぶ前に、映画の議論を確認します。2026-10-01に重複のないポストを5件観測しました。上限は5件です。Marvelは、無関係な意味で使われた同じ語にも一致することがあります。

#### アーティストのメディアキャプション

[Taylor Swiftのメディアキャプションのトーン](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-taylor-swift-album-reactions)

最近のメディアに添えたアーティストの言葉を確認します。2026-10-01に重複のないポストを5件観測しました。上限は5件です。キャプションは、画像や動画に映るすべてを説明できるわけではありません。

#### ゲーム発売のスレッド

[ゲーム発売のアップデートスレッド](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-video-game-launch)

告知と、競合するゲームについての返信を並べて読みます。2026-10-01に重複のないポストを5件観測しました。上限は5件です。スレッドは複数のゲームに触れていて、最初のポストも含みます。

#### リモートワークの議論

[リモートワークの議論](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-remote-work)

リモートワークの議論に表れた態度を比べます。2026-10-01に重複のないポストを5件観測しました。上限は5件です。求人広告や繰り返しの意見が含まれることがあります。

#### 航空会社のポスト

[航空会社についての議論のポスト](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-airline-passengers)

サービスへのフィードバックを選ぶ前に、航空会社への言及を確認します。2026-10-01に重複のないポストを5件観測しました。上限は5件です。言及があっても、投稿者が乗客である証明にはなりません。

#### 大学アメフトの議論

[大学アメフトの議論](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-college-football-fans)

ファンの意見と、大学アメフトの宣伝を分けます。2026-10-01に重複のないポストを5件観測しました。上限は5件です。ファンの意見に加えて、プレビューや宣伝も一致することがあります。

#### 金利の議論

[金利の議論](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-interest-rates)

金利をめぐる市場と政策への態度を確認します。2026-10-01に重複のないポストを5件観測しました。上限は5件です。主な主題は、政治家の場合も市場の場合もあります。

#### スクーターの議論

[電動スクーターの議論](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-electric-scooters)

利用者のフィードバックを選ぶ前に、スクーターの議論を見つけます。2026-10-01に重複のないポストを5件観測しました。上限は5件です。個人の体験に加えて、広告、調査、冗談も一致することがあります。

#### レストランの体験

[新しいレストランの体験](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-restaurant-openings)

新しいレストランについての一人称の言葉を確認します。2026-10-01に重複のないポストを5件観測しました。上限は5件です。個人的な言い回しは、招待やおすすめにも表れることがあります。

#### 公開リストのフィードのトーン

[公開リストのフィードのトーン](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-ai-coding-assistants)

公開リストにあるポストのトーンを確認します。2026-10-01に重複のないポストを5件観測しました。上限は5件です。メンバーは別の主題を扱うことも、他人の言葉をリポストすることもあります。

#### デバイスのプロフィールの返信

[Googleデバイスのプロフィールの返信のトーン](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-smart-home-device-owners)

デバイスのプロフィールの言葉を、返信も含めて確認します。2026-10-01に重複のないポストを5件観測しました。上限は5件です。返信先の文脈がないと、プロフィールの返信の意味が限られることがあります。

#### マラソンのトレーニング

[マラソンのトレーニングの議論](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-marathon-runners)

トレーニングの近況とマラソンの計画に表れた態度を見つけます。2026-10-01に重複のないポストを5件観測しました。上限は5件です。ランナーの近況に加えて、計画や宣伝が含まれることがあります。

#### 旅行の計画

[個人の東京旅行のポスト](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-tourist-destinations)

個人の旅行計画と旅行の体験談を確認します。2026-10-01に重複のないポストを5件観測しました。上限は5件です。名前にTokyoが入ったイベントは、日本旅行の話でなくても一致することがあります。

#### ストリーミング料金の議論

[Netflixの料金についての議論のポスト](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-streaming-price-increases)

解約の理由を確認する前に、Netflixの料金への懸念を見つけます。2026-10-01に重複のないポストを5件観測しました。上限は5件です。料金のフレーズが選ぶのは懸念であり、視聴者を代表するサンプルではありません。

#### 学用品の買い物

[2026年8月の学用品のポスト](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-back-to-school-shoppers)

8月の期間内で、学用品のポストを50件確認します。2026-10-01に重複のないポストを50件観測しました。上限は50件です。当社の確認では、50件のIDのうち明らかに関連する行は42件でした。

#### 電車の遅延

[電車の遅延の体験に関するポスト](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-public-transit)

遅れた電車についての苦情と体験を見つけます。2026-10-01に重複のないポストを5件観測しました。上限は5件です。個人的な言い回しでは、公式のお知らせが漏れることがあります。

#### ペットフードの議論

[ペットフードの体験に関するポスト](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-pet-food-brands)

ペットの世話についてのより広い議論の中で、ペットフードへの言及を確認します。2026-10-01に重複のないポストを5件観測しました。上限は5件です。世話や獣医療の議論が、フードのブランドについでに触れることがあります。

#### 選んだファンタジースポーツのポスト

[ファンタジースポーツのポストのバッチ](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-fantasy-football-apps)

選んだファンタジースポーツのポストのバッチを分析します。2026-10-01に重複のないポストを2件観測しました。上限は2件です。ラベルは各ポストの主題についてのもので、アプリについてとは限りません。

#### コーヒーショップの体験

[コーヒーショップの体験に関するポスト](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-coffee-shop-customers)

顧客のフィードバックを選ぶ前に、コーヒーショップへのコメントを見つけます。2026-10-01に重複のないポストを5件観測しました。上限は5件です。投稿者の苦情は、検証されていない発言のままです。

#### 住宅市場

[住宅市場の議論](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-housing-market)

住宅市場についての意見とニュースを確認します。2026-10-01に重複のないポストを5件観測しました。上限は5件です。ニュースと意見は、市場の別々の問題を扱うことがあります。

#### 大会の議論

[League of Legendsの大会のポスト](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-esports-tournament-viewers)

大会の議論と、チケットや試合の宣伝を分けます。2026-10-01に重複のないポストを5件観測しました。上限は5件です。チケットの広告と試合のレポートは、視聴者の意見ではありません。

#### ポッドキャスト配信元のポスト

[ポッドキャスト配信元のポストのトーン](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-podcast-episodes)

ポッドキャスト配信元自身の発信を確認します。2026-10-01に重複のないポストを5件観測しました。上限は5件です。配信元のトーンは、リスナーの満足度を測るものではありません。

#### ジムの比較

[ジムを比べるレビューテキスト](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-gym-memberships)

自分のレビューで、2つのジムへの態度をまとめて確かめます。2026-10-01に、入力した重複のないテキストを3件観測しました。上限は3件です。2つの対象は、テキストごとに1つの感情の回答を共有します。

#### レンタカー

[レンタカーの体験に関するポスト](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-car-rental-customers)

サービスへの懸念を確認する前に、レンタカーへのコメントを見つけます。2026-10-01に重複のないポストを5件観測しました。上限は5件です。利用者の体験談に加えて、問い合わせや宣伝も一致することがあります。

#### キャンパスの議論

[大学の費用とキャンパスに関するポスト](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-university-life)

費用に関するポストを選ぶ前に、キャンパスの議論を確認します。2026-10-01に重複のないポストを5件観測しました。上限は5件です。キャンパスのニュースや批判は、学生の体験の証明にはなりません。

#### 結婚式の準備

[個人の結婚式準備のポスト](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-wedding-planning-posts)

結婚式の計画と費用についての一人称の言葉を見つけます。2026-10-01に重複のないポストを5件観測しました。上限は5件です。準備の体験に加えて、エピソード、冗談、ついでの言い回しも一致することがあります。

#### 充電の体験

[EV充電の体験に関するポスト](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-ev-charging-experiences)

電気自動車の議論の中で、充電の体験を確認します。2026-10-01に重複のないポストを5件観測しました。上限は5件です。充電は、車についての別の懸念に付随する話題の場合があります。

#### 税務申告の議論

[2026年春のTurboTaxでの申告のポスト](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-tax-filing-software)

春の決まった期間内で、申告についての議論を確認します。2026-10-01に重複のないポストを5件観測しました。上限は5件です。ポストは、現在の料金や税のルールを裏付けるものではありません。

#### テーマパークへの来園

[テーマパーク来園の議論](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-theme-park-visitors)

来園への反応を選ぶ前に、テーマパークへの言及を見つけます。2026-10-01に重複のないポストを5件観測しました。上限は5件です。ついでに触れただけで、別の主題についての長いポストが一致することがあります。

#### 食料品の出費

[食料品の予算の体験に関するポスト](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-grocery-prices)

食料品の出費についての一人称のコメントを見つけます。2026-10-01に重複のないポストを5件観測しました。上限は5件です。政治、栄養、クリエイターについてのより広い議論が、食料品の出費に触れることがあります。

#### カメラの議論

[スマートフォンのカメラの議論](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-phone-camera-reviews)

写真、レビュー、告知とあわせて、カメラへの言及を確認します。2026-10-01に重複のないポストを5件観測しました。上限は5件です。カメラへの言及は、別の告知の中でついでに出てくるだけの場合があります。

#### 選んだスニーカーのポスト

[選んだスニーカーのポスト1件](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-sneaker-drop-reactions)

広いキーワード検索をせずに、すでに分かっているポストを分析します。2026-10-01に重複のないポストを1件観測しました。上限は1件です。この選んだキャプションは、画像の細部をすべて説明しているわけではありません。

#### サポートチャットボット

[サポートチャットボットの議論のポスト](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-customer-support-chatbots)

サービスへの苦情を選ぶ前に、サポートチャットボットの議論を見つけます。2026-10-01に重複のないポストを5件観測しました。上限は5件です。心のサポート用のボットや、企業からの返信も一致することがあります。

#### フェスの議論

[2026年4月のCoachellaの議論](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-music-festival-attendees)

4月の期間内で、フェスのポストを50件確認します。2026-10-01に重複のないポストを50件観測しました。上限は50件です。50件のIDには、関連する行が47件と、繰り返しのニュース文が含まれていました。

#### 電気料金

[電気料金の議論](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-electric-bills)

個人の電気代を、政策の議論とあわせて確認します。2026-10-01に重複のないポストを5件観測しました。上限は5件です。政策についての主張と価格の予測は、検証されていないままです。

#### バスケットボールのロスター変更

[NBAのトレードと契約の議論](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-nba-trade-reactions)

ファンの反応を選ぶ前に、トレードと契約の議論を見つけます。2026-10-01に重複のないポストを5件観測しました。上限は5件です。別の話題が、選手やチームについでに触れることがあります。

#### 宿泊の議論

[Airbnbでの宿泊の議論](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-airbnb-stays)

宿泊の議論の中で、Airbnbへの態度に絞ります。2026-10-01に重複のないポストを5件観測しました。上限は5件です。ゲストの体験談に加えて、ホストの宣伝やアプリのポストが含まれることがあります。

#### 本への反応

[読書の感想のポスト](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-book-club-readers)

読書会のメンバーだと決めつけずに、読書の反応を確認します。2026-10-01に重複のないポストを5件観測しました。上限は5件です。映画との比較と、個人の読書の感想のどちらも一致することがあります。

#### ミールキットの体験

[HelloFreshの体験に関するポスト](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-meal-kit-services)

製品の体験を確認する前に、ミールキットへのコメントを見つけます。2026-10-01に重複のないポストを5件観測しました。上限は5件です。計画、広告、より広い個人的な話が、このブランドに触れることがあります。

#### レースの議論

[Formula 1のレースの議論のポスト](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-formula-one-race-weekends)

レースの議論を、チームやドライバーの発言とあわせて確認します。2026-10-01に重複のないポストを5件観測しました。上限は5件です。引用されたドライバーの発言は、別々のIDで繰り返されることがあります。

#### マッチングアプリの体験

[マッチングアプリの体験に関するポスト](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-dating-app-experiences)

マッチングアプリの体験、マッチについての発言、冗談を見つけます。2026-10-01に重複のないポストを5件観測しました。上限は5件です。マッチについての発言や冗談は、顧客本人であることを裏付けません。

#### 空港の待ち時間のポスト

[空港の待ち時間とラウンジのポスト](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-airport-travelers)

空港の待ち時間へのコメントを、旅行のお知らせとあわせて確認します。2026-10-01に重複のないポストを5件観測しました。上限は5件です。個人の待ち時間の体験に加えて、公式のお知らせが含まれることがあります。

#### 学校給食の議論

[学校給食の議論](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-school-lunch-programs)

学校給食についての個人のポストと政策論争を確認します。2026-10-01に重複のないポストを5件観測しました。上限は5件です。投稿者には、保護者だけでなく機関も含まれることがあります。

#### ビールのテイスティング

[クラフトビールのテイスティングのポスト](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-craft-beer-drinkers)

レビューの例を選ぶ前に、ビールのテイスティングの感想を見つけます。2026-10-01に重複のないポストを5件観測しました。上限は5件です。リンクに添えた短いキャプションは、態度をはっきり読み取るだけの文脈を欠くことがあります。

#### ドッキングの告知への引用

[SpaceXのドッキングの告知への引用](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-space-launches)

決まった時刻より後の、1件のドッキングの告知への引用を確認します。2026-10-01に重複のないポストを5件観測しました。上限は5件です。引用は反応だけでなく、誘いや中立的な説明の場合もあります。

#### 誕生日ポストへの返信

[NASAの誕生日ポストへの返信](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-replies-to-a-news-post)

1件の誕生日ポストへの直接の返信を確認します。2026-10-01に重複のないポストを5件観測しました。上限は5件です。元のポストの文脈がないと、返信の回答の意味が限られることがあります。

結果を調べる間は、`maxItems` を小さく保ってください。上限が制限するのは出力であり、取得できる量ではありません。条件に合うポストが少ない場合は、フィルターを変える前に実行レポートを確認してください。日付やエンゲージメントの下限など、設定は1つずつ広げてください。変更した設定は記録しておいてください。

分析が失敗した場合は、`analysis.reason` を確認し、該当するIDだけを再試行してください。ポストの返信が不完全に見える場合は、無料の診断行を確認してください。Xが表示した返信がXのカウントより少ないときは、その旨が書かれています。メディアのキャプションは、画像や動画に映るすべてを説明できるわけではありません。引用や返信の文脈がないと、回答が不確かになることがあります。

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
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)は、強気、弱気、中立、混在のいずれかのスタンス、コンテンツの種類、確信度&資産との関連性のラベルをAIで付けます。株、暗号資産、トレードの話題を追うときに使います。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)は、ニュースのポストに、形式、情報源の明示&トピックとの関連性のラベルをAIで付けます。報道と論評を分けるときに使います。分析済みポスト1件あたり$0.0003から。
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)は、すべてのポストについて、独自のカテゴリー、スコア&はい/いいえの質問にAIで答えます。既定の分析が自分のラベルに合わないときに使います。分析済みポスト1件あたり$0.0003から。
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)は、AIによる8つの特性の回答から、すべてのポストについて0から100のViral Score & 判定を推定します。ポストが広がる理由や伸びない理由を調べるときに使います。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) Monitor](https://apify.com/xquik/x-twitter-monitor)は、アカウントの新しいツイート、返信、引用、リポスト、プロフィールの変更を、通常はXに表示されてから一秒もかからずにすべて捕捉し、キーワードのツイートとフォローも捕捉します。Xにツイートが表示されたらすぐにアラートが必要なときに使います。monitor-hourあたり$0.0045から。

## よくある質問&サポート

よくある質問に答えたあと、サポートを受けられる場所を案内します。

### AIのアカウント、X APIキー、ログインは必要ですか？

いいえ。XquikのX Tweet Sentiment Analysisは、AIの費用を料金に含めています。AIのアカウント、トークン、キーは不要です。X APIキー、ログイン、認証情報も必要ありません。

### 自分の質問を使えますか？

はい。カスタムの `analysis.questions` がデフォルトの質問に置き換わります。`choice`、`score`、`probability` の質問を1個から8個送ってください。choiceの質問には2個から255個のカテゴリーを指定できます。scoreの質問には、順序のあるレベルが2つ以上必要です。比較したい実行どうしでは、同じ質問を使ってください。

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

はい。Python、JavaScript & cURLの例は[APIタブ](https://apify.com/xquik/x-tweet-sentiment-analysis/api)にあります。定期的な実行にはApifyの[スケジュール](https://docs.apify.com/platform/schedules)を使います。前回のデータセットIDを `monitor.baselineDatasetId` に渡すと、何が変わったかを確認できます。Apifyの連携機能で、実行をWebhook、Make、Zapier、n8n & Googleスプレッドシートにつなぐこともできます。

### どこでサポートを受けられますか？

実行IDを添えて、[Issuesタブ](https://apify.com/xquik/x-tweet-sentiment-analysis/issues)でissueを開いてください。キーバリューストアにある無料の診断情報が、対応が必要な実行について説明します。行が1件も返らなかった実行は、その理由をステータスで示します。
