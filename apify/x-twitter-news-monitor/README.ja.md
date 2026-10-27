[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · [简体中文](README.zh-CN.md) · **日本語** · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![FramerがXquik MCPをコーディングエージェントに接続する様子](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[FramerがXquikのスクレイパーをClaude Code、Codex、Cursorなどと一緒に使う様子](https://youtu.be/4UOSpoOoC3Y?t=367)を6:07から視聴できます。

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。XquikのX (Twitter) News Monitorは、ニュースのポストを形式、情報源の明示&関連性で分類します。他のApify Actorの多くは、フィルタリングや重複排除の前に課金します。Xquikが課金するのは、配信した結果のうち、重複がなくフィルター条件に合うものだけです。AIの費用はポスト1件あたりの料金に含まれます。AIのアカウント、トークン、キーは不要です。

X(Twitter)のニュースのポストを種類別に分け、元のポストデータもそのまま残します。Xquikの**X (Twitter) News Monitor with AI Analysis**は、指定したトピックのポストを収集します。すべてのポストに、AIによる形式、情報源の明示&関連性の回答を付けます。報道を、論評&憶測と分けられます。ポストが情報源を名指ししているか、リンクしているかがわかります。追跡している組織、人物、トピックについてのポストだけを残せます。

> Xquikは独立したサードパーティサービスです。X Corpとは提携していません。
> 「Twitter」および「X」はX Corpの商標です。

## X (Twitter) News Monitor with AI Analysisを使う理由

- **報道を憶測と分ける。** `format` の回答で絞り込むと、報道を残し、憶測や宣伝を除けます。
- **どの情報源が引用されているかがわかる。** `sourceDomains` は、実行全体でリンクされたドメインを数えます。
- **リンク先の記事も対象。** Xの記事にリンクしたポストは、その記事についての回答も得られます。
- **対象ごとの報道状況。** 対象ごとに、形式の内訳、情報源の明示の内訳&上位のポストが付きます。
- **何が変わったかがわかる。** 以前の実行のデータセットIDを `monitor.baselineDatasetId` に追加します。すると各行に、どの判定が変わったかが表示されます。
- **自分のテキストも確認。** 見出しや下書きを `texts` に貼り付けると、同じ回答が得られます。この実行はXから何も取得しません。
- **スプレッドシートでそのまま使える回答。** `Flat answers` ビュー&CSVやExcelのエクスポートでは、質問ごとに1列になります。
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

## X (Twitter) News Monitor with AI Analysisが返すデータ

- **形式。** 報道、論評、憶測、宣伝&風刺を見分けます。
- **情報源の明示。** 主張が情報源を名指ししているか、リンクしているか、本人の体験か、情報源がないかを示します。
- **関連性。** 対象についてのポストと、同じ名前の別物を見分けます。
- **完全な元レコード。** どの行も、ポストが公開するすべてのフィールドを残します。リンク先の記事も、取得できれば含みます。

## Xのニュースのポストを分類する方法

Apifyを初めて使いますか？まず[無料アカウントを作成してください](https://console.apify.com/sign-up?fpr=xquik)。無料プランはクレジットカード不要&毎月$5分を使えます。分析済みポスト1件あたり$0.0003なので、プラットフォーム利用料を別にすると、$5で最大16,000件の分析済みポストをまかなえます。その後、このページに戻ってTry for freeを押してください。

1. `Nvidia earnings lang:en -filter:retweets` のような検索語、ニュースアカウントのユーザー名、ポストIDのいずれかを追加します。
2. `maxItems` & 日付の範囲、`filter:links`、リポストの最小数などの抽出フィルターを設定します。
3. 追跡する組織、人物、トピックを、別名とともに `analysis.targets` に入れます。トピックの範囲は `analysis.context` で絞ります。
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

- 形式は、報道、論評、憶測、宣伝、風刺、無関係、不明のいずれかです。
- 情報源の明示は、名指し、リンク、本人の体験、なし、不明のいずれかです。
- 関連性は、報じられた出来事が対象に関係する確率です。

分類は事実を検証しません。情報源を名指ししていても、信頼できるとは限りません。情報源の明示は、ポストが何を示しているかを表します。

## 自分のテキストを分析する

自分の下書き、返信、レビュー、メモを `texts` に貼り付けてください。XquikのX (Twitter) News Monitorがそれを分析します。Xからは何も取得しません。

```json
{
  "texts": [
    "Central bank holds rates at 4.5%, signals 2 cuts next year.",
    "I was at the port this morning. Cranes are idle & trucks are queued."
  ]
}
```

- 各テキストは1行になり、ポストと同じ `analysis` の回答を持ちます。
- `tweet.id` は `text:1`、`text:2` と続き、`tweet.type` は `text` です。
- 分析したテキストは1件あたり、分析済みポスト1件と同じ$0.0003です。
- `texts` を設定した実行は、そのテキストだけを分析します。Xの対象は別の実行で扱ってください。

## Xのニュースのポストを分類するにはいくらかかりますか？

XquikのX (Twitter) News Monitorは、分析済みポスト1件あたり$0.0003からです。開始料金はかかりません。料金には収集&AIの費用が含まれます。AIのアカウント、トークン、キーは不要です。この料金で、ポスト1件あたり最大8個の質問&64,000バイトのコンテキストを扱えます。質問の定義は1つあたり最大8,000バイトまで使えます。

より多くの量が必要なら、前払いの利用枠が多い[Apifyプランを選んでください](https://apify.com/pricing?fpr=xquik)。

抽出フィルター&重複排除は分析の前に行います。フィルターで除いた行や重複した行に支払うことはありません。失敗した分析、スキップした分析&診断情報の行には結果料金がかかりません。Apifyは、コンピュート、ストレージ&転送のプラットフォーム利用料を、プランの料金で別途請求します。Pricingタブで確認できます。

## 入力&出力の例

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

各結果には `tweet` & `analysis` が入ります。回答には、種類、質問のバージョン&取得できる確率が含まれます。分析が失敗またはスキップされた行にも、収集したポスト & `reason` が残ります。その行の回答リストは空です。

ポストがXの記事にリンクしている場合、分析ではその記事も取得します。タイトル、プレビュー&本文のブロックをコンテキストとして加えます。`analysis.contextAvailability.article` は、`text_blocks`、`summary`、`not_supplied` のいずれかを報告します。`summary` は、タイトル&プレビューだけであることを示します。

キーバリューストアにある無料の診断情報が、無効な入力、見つからない結果&中断された収集を説明します。実行レポートは、収集した行、課金済みの分析&保留中の課金を分けて示します。

## 実行サマリー&フラットな回答

実行は、次の3つの場合に `analysis-summary` レコードをキーバリューストアに書き込みます。

- 問題が起きた場合、または大規模な場合。
- 比較で、変化したポスト、新しいポスト、比較できないポストのいずれかが見つかった場合。
- `alwaysSaveRunRecords` がオンの場合。

それ以外の実行は、シリーズの最初の実行も含めて、このレコードを省きます。その場合、ステータスが `Top format is reporting in 4 of 5 results.` のように最も多い回答を示します。変化のない比較では、`No change since the earlier run.` と示します。問題が起きた実行や大規模な実行は、`run-report` も書き込みます。`alwaysSaveRunRecords` がオンの実行も同じです。`run-report` は、`results.analysisSummary` の下にサマリーを繰り返します。

サマリーは、分析済み、失敗&スキップの行数を数えます。エンゲージメントを合計し、すべての質問を要約します。

- `format` の内訳は、報道を、論評、憶測、宣伝&風刺と分けて示します。
- `attribution` は、情報源の名指し、リンク、本人の体験&情報源なしの件数を数えます。
- `relevance` は、対象ごとに、その対象についてのポストを数えます。
- `targets` は、対象ごとの言及数を示します。各対象の `top` は、回答カテゴリーごとにエンゲージメントが最も高いポストを挙げます。
- 各 `targets` エントリーの `choices` は、その対象についてのポストでの形式&情報源の明示の内訳です。
- `sourceDomains` は、実行全体でリンクされたドメインを数えます。
- `monitor.changedRows` は、ベースラインから判定が変わったポストを挙げます。
- どの行も、リンク先のホスト名を `sourceDomains` に挙げます。
- どの行も、`$NVDA` のように本文中にあるキャッシュタグを `cashtags` に挙げます。
- `monitor.baselineDatasetId` を設定すると、サマリーの `monitor` ブロックが比較ステータスを数えます。変化した行も最大50件挙げます。

どの結果行にも、質問IDをキーにしたフラットなマップ `answers` も入ります。各値は、選ばれたカテゴリー、スコア、確率のいずれかです。`Flat answers` データセットビュー & CSVやExcelのエクスポートでは、質問ごとに1列が表示されます。列はポストの横に並ぶので、スプレッドシートでJSONを解析する必要はありません。失敗した行&スキップした行のマップは空です。

## 以前の実行と比較する

`monitor.baselineDatasetId` に、同じ分析設定で完了した以前の実行のデータセットIDを渡してください。比較ではその実行の行を読み取ります。その実行がサマリーを省いていても機能します。すると、すべての行に `monitor` オブジェクトが付きます。そのステータスは次の値をとります。

- ベースラインがない場合は `first_run`。
- 以前の実行になかったポストは `new_to_baseline`。
- 以前の実行にあったポストは `unchanged` または `changed`。

`changes` は、形式、情報源の明示、関連性の判定のうち、`previous` から `current` へ変わったものをそれぞれ挙げます。判定は、カテゴリー、丸めたスコアのレベル、0.5を境にしたはい/いいえで比較します。判定が変化として数えられるのは、はっきり変わった場合だけです。実行間でほぼ同点の判定は `unchanged` のままです。

ベースラインが `maxBaselineRows` を超える場合や、異なる設定の実行のものである場合、実行は収集の前に止まります。そのとき、実行は診断情報の行を書き込みます。`maxBaselineRows` のデフォルトは100,000です。

## タスクの例

50個の公開タスクから選べます。どのタスクも、実際の英語の検索&上限を決めた `maxItems` から始まります。各タスクには、用意済みの対象、コンテキスト&概要のデータセットビューも入っています。実行前に検索や対象を編集してください。

- [X上のNvidiaのニュースポストを分類する](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-nvidia-news-posts-on-x)
- [Xの記事のニュースポストを分類する](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-x-article-news-posts)
- [X上のOpenAIのニュースポストを分類する](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-openai-news-posts-on-x)
- [X上のAppleのニュースポストを分類する](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-apple-news-posts-on-x)
- [X上のTeslaのニュースポストを分類する](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-tesla-news-posts-on-x)
- [X上のSpaceXのニュースポストを分類する](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-spacex-news-posts-on-x)
- [X上のBoeingのニュースポストを分類する](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-boeing-news-posts-on-x)
- [X上のPfizerのニュースポストを分類する](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-pfizer-news-posts-on-x)
- [X上のModernaのニュースポストを分類する](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-moderna-news-posts-on-x)
- [X上のExxonMobilのニュースポストを分類する](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-exxon-news-posts-on-x)
- [X上の米連邦準備制度のニュースポストを分類する](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-federal-reserve-news-posts-on-x)
- [X上の欧州中央銀行のニュースポストを分類する](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-european-central-bank-news-posts-on-x)
- [X上のイングランド銀行のニュースポストを分類する](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-bank-of-england-news-posts-on-x)

残りのタスクはActorページにあり、さらに多くのブランド、トピック&市場を扱います。

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
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)は、すべてのポストについて、独自のカテゴリー、スコア&はい/いいえの質問にAIで答えます。既定の分析が自分のラベルに合わないときに使います。分析済みポスト1件あたり$0.0003から。
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)は、AIによる8つの特性の回答から、すべてのポストについて0から100のViral Score & 判定を推定します。ポストが広がる理由や伸びない理由を調べるときに使います。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) Monitor](https://apify.com/xquik/x-twitter-monitor)は、アカウントの新しいツイート、返信、引用、リポスト、プロフィールの変更を、通常はXに表示されてから一秒もかからずにすべて捕捉し、キーワードのツイートとフォローも捕捉します。Xにツイートが表示されたらすぐにアラートが必要なときに使います。monitor-hourあたり$0.0045から。

## よくある質問&サポート

よくある質問に答えたあと、サポートを受けられる場所を案内します。

### AIのアカウント、X APIキー、ログインは必要ですか？

いいえ。XquikのX (Twitter) News Monitorは、AIの費用を料金に含めています。AIのアカウント、トークン、キーは不要です。X APIキー、ログイン、認証情報も必要ありません。

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

はい。Python、JavaScript & cURLの例は[APIタブ](https://apify.com/xquik/x-twitter-news-monitor/api)にあります。定期的な実行にはApifyの[スケジュール](https://docs.apify.com/platform/schedules)を使います。前回のデータセットIDを `monitor.baselineDatasetId` に渡すと、何が変わったかを確認できます。Apifyの連携機能で、実行をWebhook、Make、Zapier、n8n & Googleスプレッドシートにつなぐこともできます。

### どこでサポートを受けられますか？

実行IDを添えて、[Issuesタブ](https://apify.com/xquik/x-twitter-news-monitor/issues)でissueを開いてください。キーバリューストアにある無料の診断情報が、対応が必要な実行について説明します。行が1件も返らなかった実行は、その理由をステータスで示します。
