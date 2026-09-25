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

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。X Tweet Viral Score Analyzerは、すべてのポストにViral Scoreの推定値と判定を付加します。他のApify Actorはすべて、フィルタリングや重複排除の前に課金します。Xquikは、配信済みでユニークかつフィルタ条件に一致する結果にのみ課金します。AI の費用はツイート単価に含まれています。AIのアカウントも、トークンも、キーも不要です。

ポストが広がる理由や伸びない理由を把握し、元のポストデータをそのまま保持します。**X Tweet Viral Score Analyzer with AI**は、一致するポストを収集します。AIは各ポストの8つの特性を評価します。Actorはその回答を、0から100のViral Scoreの推定値と判定に変換します。すべての行が実際のいいね、リポスト、リプライ、引用ポストの数を保持するため、各推定値を実際の結果と比較できます。

- 固定でバージョン管理されたルールによる**ポストごとのViral Score**。
- **8つの特性への回答**が、ポストのスコアが高い理由や低い理由を示します。
- **ハードストップ**が、スパム、レイジベイト、またはありきたりな機械生成文のように読めるポストのスコアに上限をかけます。
- ポストが持つすべてのフィールドを含む**完全な取得元レコード**。

Viral Scoreは、文面がどれだけうまく機能するかの推定値です。いいねや表示回数を予測するものではありません。Xがポストをランク付けする方法を再現するものでもありません。

## ポストのViral Scoreを確認する方法

1. 検索語、プロフィールのハンドル、ポストのURL、またはポストIDを追加します。
2. `maxItems`とタスクに必要な抽出フィルタを設定します。
3. `analysis.context`にオーディエンスを記述するか、デフォルトのままにします。
4. Actorを実行し、`Viral Score`データセットビューを開きます。

```json
{
  "searchTerms": ["from:NASA -filter:replies -filter:retweets"],
  "maxItems": 150,
  "analysis": { "context": "Space fans & general readers." }
}
```

### Actorが回答する内容

| 質問         | 回答                                                        |
| ----------- | --------------------------------------------------------- |
| フック       | 0はフックなし、1は明確な書き出し、2は鋭い書き出し                 |
| 明確さ       | 0はわかりにくい、1は読むのに労力が要る、2は一読で明確              |
| 情報性       | 0は新しい内容なし、1はよくある指摘、2は役立つ要点                 |
| 面白さ       | 0は面白くない、1はやや面白い、2は共有したくなるほど面白い          |
| レイジベイト  | ポストが主に怒りをあおっている確率                              |
| AI生成風     | テキストがありきたりな機械生成文のように読める確率                 |
| スパム       | スパム、詐欺、プレゼント企画、またはエンゲージメント稼ぎである確率   |
| 反応         | 共有、リプライ、いいね、反論、または無視                         |

AI生成風の回答は文体のみを判定します。誰がポストを書いたかを確定するものではありません。

### Viral Scoreのしくみ

フック、明瞭さ、得られる価値、予想される反応はスコアを上げます。ありきたりな機械的文章に見える書き方はスコアを下げます。

ハードストップは、スパム、レイジベイト、ありきたりな機械的文章と思われるポストのスコアに上限を設けます。スコアは0から100の整数です。

| 判定           | スコア      |
| ------------- | --------- |
| `send_it`     | 70から100  |
| `edit_first`  | 40から69   |
| `sleep_on_it` | 0から39    |

`viral.weights`は、`viral_lite:1`のように、これらのルールのバージョンを示します。ルールが変わるたびに変わります。分析が失敗した場合、Actorが分析をスキップした場合、またはデフォルトの特性回答が欠けている場合、スコアは`null`になります。Actorが欠けたスコアを推測で埋めることはありません。

## Algorithm Scoreの推定値

Xは、リポジトリ`xai-org/x-algorithm`のファイル`home-mixer/params/param.rs`でランキングの重みを公開しました。Actorは、そのうち4つを各ポストの公開カウントに適用します。

| カウント   | 重み  |
| -------- | ----- |
| いいね    | 0.5   |
| リプライ   | 5     |
| リポスト   | 1     |
| 引用ポスト | 5     |

`viral.algorithmWeightedSum`は、各カウントにその重みを掛けた値の合計です。`viral.algorithmScore`は、その合計を表示回数で割り、1,000を掛けます。表示回数のないポストは、代わりにフォロワー数を使用します。`viral.algorithmBasis`は、除数が`views`か`followers`かを示します。スコアは同じ基準のもの同士でのみ比較してください。`viral.weightsVersion`は、`x_algorithm_params:2026-09-18`のように、重みのバージョンを示します。

制限事項:

- Xは、1人の閲覧者について予測した確率を各重みに掛けます。Actorは観測されたカウントを掛けます。結果は推定値であり、Xが計算するスコアではありません。
- Xはブックマークと表示回数の重みを公開していません。合計にはどちらも含まれません。
- Xは、滞在時間や共有など、この4つ以外のシグナルも使用します。公開データからはそれらはわかりません。
- ポストに表示回数もフォロワー数もない場合、スコアは`null`です。
- AIがこれらのカウントを見ることはありません。AIはテキストとコンテキストだけを読みます。

## 予測と実績の比較

Actorは、各Viral Scoreを実際の結果と比較します。`viral.actualEngagementRate`は`log10(1 + フォロワー1,000人あたりの重み付き合計)`です。対数は、非常に大きなポスト1件の影響を抑えます。フォロワー数が欠けているか0の場合、この率は`null`です。

実行サマリーの`viral.calibration`ブロックは、次の項目をレポートします。

- `comparedPosts`: Viral Scoreと実績の率の両方を持つポスト。
- `rankCorrelation`: -1から1のスピアマンの順位相関。スコアが高いほど率も高かったかどうかを示します。
- `calibrationScore`: 相関の100倍で、下限は0です。
- `overperformers`と`underperformers`: それぞれ最大5件のポストで、ポストID、URL、Viral Score、実績の率、`gap`を含みます。

`gap`は、標準化した実績の率から標準化したViral Scoreを引いた値です。gapが標準偏差1つ分に達すると、そのポストはリストに入ります。

制限事項:

- 比較されたポストが10件未満の場合、キャリブレーションは`null`になり、理由は`too_few_posts`です。スコアまたは率がすべて同じ場合は`no_variation`になります。
- 相関は近似値です。
- キャリブレーションは1回の実行を説明するものです。低いスコアは、文面の推定が外れたことではなく、ポストのタイミング、トピック、オーディエンスが異なることを意味する場合があります。
- 新しいポストは、まだエンゲージメントを集め終えていません。経過時間が近いポスト同士を比較してください。

## アカウントレポート

実行サマリーの`viral.accounts`ブロックは、著者のハンドルごとに次の項目をレポートします。

- ポスト数、平均Viral Score、実際のエンゲージメント率の平均。
- Viral Scoreが最高のポストと最低のポスト（ポストIDとURL付き）。
- バケットごとの平均Viral Score: UTCでの投稿時刻、テキストの長さの区分、メディアの有無、リンクの有無、セルフスレッド。

テキストの長さの区分は、80文字までが`short`、200文字までが`medium`、280文字までが`long`、それを超えると`extended`です。セルフスレッドのポストは、自身の著者にリプライするポストです。

制限事項:

- レポートは、スコア付きポストが最も多い50個のハンドルを一覧表示します。
- Actorは、実行の最初の1,000個のハンドルを追跡します。`untrackedPosts`は、それ以降のハンドルのスコア付きポストと、ハンドルのないポストを数えます。
- ポストの少ないバケットからわかることはわずかです。平均を比較する前に`posts`を確認してください。
- バケットは、この実行で何が同時に起きたかを示します。因果関係は示しません。

## リーダーボード

実行サマリーの`viral.leaderboard`ブロックは、アカウントレポートのハンドルを順位付けします。`byViralScore`は平均Viral Scoreで順位付けします。`byActualEngagementRate`は実績の率の平均で順位付けします。各リストは、`rank`、`posts`、`average`を持つハンドルを最大20個まで保持します。

制限事項:

- ハンドルが順位に入るには、スコア付きポストが少なくとも3件必要です。
- 率のリストは、フォロワー数のないハンドルを除外します。
- 同順位の場合は、ポスト数の多さ、次にハンドル名で順位を決めます。
- リーダーボードは1回の実行のポストを対象とし、アカウントの全履歴は対象としません。

## 投稿する前に下書きを採点する

自分のテキストを`texts`に貼り付けてください。Actorはそれを採点し、Xからは何も取得しません。

```json
{
  "texts": [
    "We shipped dark mode today. Try it and tell us what breaks.",
    "5 things we learned from 1,000 support tickets."
  ],
  "analysis": { "context": "Developers who use our app." }
}
```

- 各テキストは1行になり、`viralScore`、`viralVerdict`、`viral.stops`を持ちます。
- `tweet.id`は`text:1`、`text:2`のように続き、`tweet.type`は`text`です。
- 下書きにはまだいいねも表示回数もないため、`viral.algorithmScore`は`null`のままです。
- 分析済みテキスト1件の料金は、分析済みポスト1件と同じ$0.0003です。
- `texts`を設定すると、実行はそれらのテキストだけを分析します。Xの対象は別に実行してください。

## 料金

AI の費用はツイート単価に含まれています。AIのアカウントも、トークンも、キーも不要です。

正常に分析されたポスト1件につき$0.0003から、開始料金はかかりません。料金には収集とViral Scoreが含まれます。分析上限は質問8個、質問定義1個あたり8,000バイト、ポスト1件あたりのコンテキスト12,000バイトです。抽出フィルタと重複排除は分析より前に実行されるため、フィルタで除外された行や重複行が分析されたり課金されたりすることはありません。失敗またはスキップされた分析、および診断情報の行には結果料金は発生しません。Apifyはプラットフォーム利用料を別途請求します。Pricingタブがその料金を表示します。

## 入力と出力の例

上記の入力はそのままコピーして使用できます。出力行は次のようになります（一部省略）。

```json
{
  "tweet": { "id": "2100493544842494265", "text": "...", "likeCount": 12 },
  "viral": {
    "score": 74,
    "verdict": "send_it",
    "weights": "viral_lite:1",
    "stops": [],
    "algorithmScore": 8.5,
    "algorithmBasis": "views",
    "algorithmWeightedSum": 17,
    "actualEngagementRate": 0.7202,
    "weightsVersion": "x_algorithm_params:2026-09-18"
  },
  "viralScore": 74,
  "viralVerdict": "send_it",
  "viralAlgorithmScore": 8.5,
  "viralActualEngagementRate": 0.7202,
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

各結果には`tweet`、`analysis`、`viral`が含まれます。回答には、種類、質問のバージョン、利用可能な確率が含まれます。`viral.stops`は、スコアに上限をかけたハードストップを一覧表示します。失敗またはスキップされた分析では、収集されたポストが空の回答リスト、`reason`、`null`のスコアとともに保持されます。key-value storeにある無料の診断情報は、無効な入力、結果の欠落、中断された収集について説明します。実行レポートでは、収集された行、課金された分析、保留中の課金が分けて記録されます。

## 実行サマリーとフラットな回答

各実行は、key-value storeに`analysis-summary`レコードを書き込み、実行レポートの`results.analysisSummary`の下にも同じ内容を記録します。これは、分析済み、失敗、スキップされた行の数を数え、エンゲージメントを合計し、すべての質問を要約します。その`viral`ブロックは、`averageScore`、各判定の件数、Actorがスコアを付けた行と付けなかった行の数をレポートします。同じブロックには、上で説明した`calibration`、`accounts`、`leaderboard`も含まれます。スコアの質問は、平均とエンゲージメントで重み付けした平均をレポートします。`reaction`の内訳は、各反応に該当するポストの数を示し、`top`は、反応ごとに最もエンゲージメントの高いポストを3件ずつ一覧表示します。結果がゼロの実行は、カウントをゼロ、平均を`null`としてレポートします。各行は、リンク先のホスト名である`sourceDomains`と、テキスト内で見つかった`$NVDA`のような`cashtags`を一覧表示します。`monitor.baselineDatasetId`を設定している場合、サマリーの`monitor`ブロックが比較ステータスを数え、変更のあった行を最大50件まで一覧表示します。

各結果行には、`viralScore`、`viralVerdict`、`viralAlgorithmScore`、`viralActualEngagementRate`と、質問IDから選択されたカテゴリ、スコア、または確率へのフラットなマップである`answers`も含まれます。`Viral Score`データセットビュー、CSVまたはExcelのエクスポートでは、これらの列がポストの隣に表示されるため、スプレッドシートでJSONを解析する必要はありません。失敗またはスキップされた行は空のマップを持ちます。

## 以前の実行と比較する

`monitor.baselineDatasetId`、つまり同じ分析設定で完了した以前の実行のデータセットIDを渡してください。すると、すべての行が`monitor`オブジェクトを持ちます。そのステータスは、ベースラインがない場合は`first_run`、以前の実行に存在しなかったポストでは`new_to_baseline`、以前の実行に存在したポストでは`unchanged`または`changed`です。`changes`は、`previous`から`current`へと変化した特性の判定をそれぞれ一覧表示します。判定は、カテゴリ、丸められたスコアレベル、または0.5でのはい/いいえで比較されます。判定が変更としてカウントされるのは、明確に変わった場合だけです。実行間の僅かなばらつきは変化なしとして扱われます。`maxBaselineRows`（デフォルト100,000）を超えるベースラインや、異なる設定によるベースラインは、収集の前に実行を停止させ、診断情報の行を出力します。

## タスクの例

50個の公開タスクから選択できます。それぞれ、範囲が定められた`maxItems`と`Viral Score`データセットビューを備えた実際の英語検索から始まります。一部のタスクはオーディエンスのコンテキストを追加します。実行前に検索やコンテキストを編集してください。

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

残りのタスクは、Actorのページでさらに多くのトピックとブランドアカウントをカバーしています。

## よくある質問とサポート

### スコアが高ければ、ポストはバズりますか？

いいえ。スコアは、一般的な読者に対して文面がどれだけうまく機能するかを推定します。タイミング、オーディエンスの規模、メディア、運もリーチを左右します。スコアに頼る前に、各行にある実際のエンゲージメント数と比較してください。

### 自分の質問を使えますか？

はい。カスタムの`analysis.questions`はデフォルトを置き換えます。`choice`、`score`、`probability`の質問を1～8個、カテゴリは2～255個、または少なくとも2段階の順序付きレベルで指定できます。Viral Scoreには8つのデフォルトの質問がすべて必要なため、カスタムの質問を使うとViral Scoreは`null`になります。

### `analysis.status`が`failed`や`skipped`になって返ってくるのはなぜですか？

Actorはポストを収集して配信しましたが、AI分析は完了しませんでした。`analysis.reason`が原因を示します。例えば、ポストとそのコンテキストが`maxContextBytes`を超えた場合の`context_limit`や、分析サービスが一時的に利用できない場合の`service_unavailable`などです。これらの行に結果料金は発生せず、スコアも付きません。`maxContextBytes`を上げる（最大12,000）か、対象のIDを再実行してください。

### この分析は事実を検証しますか？

いいえ。回答は、ポストが表現している内容と、ポストがそれをどう表現しているかを説明するものです。確率はモデルの確信度を示すものであり、真実性を示すものではありません。重要な分類結果は、すべての行に保持されている元のポストと照らし合わせて確認してください。

### どの言語に対応していますか？

抽出はXが提供するすべての言語に対応しています。私たちは分析をまず英語の顧客シナリオで検証しています。その他のサポート対象言語も同じ構造で回答を返します。

### 費用を抑えるにはどうすればよいですか？

フィルタ、重複排除、`maxItems`は分析より前に実行されるため、Actorは一意でフィルタ条件に一致するポストのみを分析し、課金します。的確な検索演算子、日付範囲、エンゲージメントの下限を使用し、大規模な実行の前には小さな`maxItems`で回答の品質を確認してください。

### サポートはどこで受けられますか？

Actorのページでイシューを開くか、実行IDを添えてsupport@xquik.comにお問い合わせください。key-value storeにある無料の診断情報は、空の実行、部分的な実行、中断された実行について説明します。

Xquikは独立したサードパーティサービスです。X Corpとは提携していません。「Twitter」および「X」はX Corpの商標です。

## 関連するXquik Actor

すべてのXquik Actorは、同じ抽出エンジン、フィルタ優先の課金方式、診断機能を共有しています。必要なデータに合ったものを選んでください。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): 検索、プロフィールのタイムライン、リスト、ポストIDから50種類以上のフィルタとフラットなエクスポートでポストをスクレイピングします。分析なしでポストデータが必要なときに使用してください。1行あたり$0.00015から。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): ハンドル、ID、URLからプロフィールとそのポスト、リプライ、メディア、フォロワーをスクレイピングします。検索ではなくアカウントから始めるときに使用してください。1行あたり$0.00015から。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): 25種類以上のフィルタで、ポスト配下のリプライ、コメント、会話全体をスクレイピングします。ポストの下にある議論が必要なときに使用してください。1行あたり$0.00015から。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): ポストのURLまたはIDから、リプライ、引用ポスト、リポストしたユーザー、スレッドを一括でスクレイピングします。誰がポストにエンゲージしたかを測定するときに使用してください。1行あたり$0.00015から。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): フォロワー、フォロー中、リストメンバー、購読者、コミュニティメンバーをプロフィール行としてスクレイピングします。オーディエンスやメンバーリストが必要なときに使用してください。1プロフィールあたり$0.00015から。
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper): ハンドル、自己紹介、地域からユーザーを検索し、フォロワー数、認証状態、アカウントの経過期間、地域でフィルタします。検索からアカウントリストを作成するときに使用してください。1プロフィールあたり$0.00015から。
- [X List Scraper](https://apify.com/xquik/x-list-scraper): リストのURLまたはIDから、リストのポスト、メンバー、フォロワーをスクレイピングします。厳選されたリストが情報源となるときに使用してください。1行あたり$0.00015から。
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): コミュニティ情報、ポスト、検索、メンバー、モデレーターをスクレイピングします。情報源がXコミュニティであるときに使用してください。1行あたり$0.00015から。
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): 順位、ボリューム、クエリ、WOEIDを含む地域別のリアルタイムトレンドをスクレイピングします。どこで何がトレンドになっているかを追跡するときに使用してください。1トレンドあたり$0.00015から。
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): 表紙、著者、日付、指標付きで、長文のX ArticlesをMarkdownとテキストでスクレイピングします。ポストではなく記事本文が必要なときに使用してください。1記事あたり$0.00015から。
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): ポストやプロフィールから写真、動画、GIFを抽出または保存し、MP4化やメタデータのオプションを備えます。メディアファイル自体が必要なときに使用してください。1メディア行あたり$0.00015から。
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring): AIによる関連性、感情、顧客体験の回答でブランドの言及を追跡し、実行結果を比較します。長期的にブランドを監視するときに使用してください。分析済みポスト1件あたり$0.0003から。
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis): すべてのポストにAIで態度、強度、皮肉の確率をラベル付けします。任意のトピックについて一般的な感情分析が必要なときに使用してください。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals): AIで強気、弱気、中立、または複合的なスタンス、コンテンツの種類、確信度、資産との関連性をラベル付けします。株、暗号資産、トレーディングの話題を追うときに使用してください。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor): AIでニュースポストを形式、情報源の帰属、トピックとの関連性でラベル付けします。報道とコメントを区別するときに使用してください。分析済みポスト1件あたり$0.0003から。
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier): AIで独自のカテゴリ、スコア、はい/いいえの質問にすべてのポストで回答します。既定の分析があなたのラベルに合わないときに使用してください。分析済みポスト1件あたり$0.0003から。
