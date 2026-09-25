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

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。X (Twitter) Stock & Crypto AI Trading Signalsは、ポストを銘柄やコインごとの強気、弱気、中立、または複合的なスタンスに変換します。他のApify Actorはすべて、フィルタリングや重複排除の前に課金します。Xquikは、配信済みでユニークかつフィルタ条件に一致する結果にのみ課金します。AI の費用はツイート単価に含まれています。AIのアカウントも、トークンも、キーも不要です。

X(Twitter)上の株、暗号資産、トレーディングに関するポストの背後にあるスタンスを読み取り、元のポストデータをそのまま保持します。**X (Twitter) Stock & Crypto AI Trading Signals**は、あなたの銘柄や資産に関するポストを収集します。次に、AIによるスタンス、コンテンツの種類、確信度レベル、資産との関連性をすべてのポストに付加します。断定的な見立てとヘッジされた発言を区別し、分析と宣伝を区別し、資産に関するポストとその名前の無関係な使われ方を区別します。

- **ポストごとのスタンス。** 各ポストは強気、弱気、中立、複合的、または不明のいずれかです。
- **コンテンツの種類**は、分析、ニュース、トレードアイデア、宣伝、ユーモア、質問を区別します。
- **確信度**は、断定的な見立てやポジションとヘッジされた発言を区別します。
- **関連性**は、銘柄名や企業名の無関係な使われ方を除外します。
- ポストが持つすべてのフィールドについて**完全な取得元レコード**を保持します。

## Xで市場心理を分析する方法

1. `$NVDA lang:en -filter:retweets`のような検索語、キャッシュタグクエリ、プロフィールのハンドル、またはポストIDを追加します。
2. `maxItems`と、日付範囲や最小いいね数などの抽出フィルタを設定します。
3. 資産名、ティッカー、エイリアスを`analysis.targets`に入れ、`analysis.context`で資産を説明します。
4. Actorを実行し、データセットを開きます。

```json
{
  "searchTerms": ["$NVDA lang:en -filter:retweets"],
  "maxItems": 500,
  "analysis": {
    "targets": [{ "name": "Nvidia", "aliases": ["NVDA", "$NVDA"] }],
    "context": "The chip maker as a listed stock."
  }
}
```

### Actorが回答する内容

| 質問   | 回答                                                       |
| ---------- | ------------------------------------------------------------ |
| スタンス     | 強気、弱気、中立、複合的、または不明                  |
| コンテンツ    | 分析、ニュース、トレード、宣伝、ユーモア、質問、または不明 |
| 確信度 | 0はヘッジされた発言、1は明言された見方、2は断定的な見立てやポジション      |
| 関連性  | ポストがあなたの対象を資産として扱っている確率      |

回答は著者が表現している内容を説明するものです。投資助言ではなく、主張、価格、開示情報を検証するものでもありません。

## 自分のテキストを分析する

下書き、リプライ、レビュー、メモなど、自分のテキストを`texts`に貼り付けてください。Actorはそれを分析し、Xからは何も取得しません。

```json
{
  "texts": [
    "$NVDA guidance beat again. I am adding on any dip below 900.",
    "Not touching $BTC until the ETF flows turn positive."
  ]
}
```

- 各テキストは1行になり、ポストと同じ`analysis`の回答を持ちます。
- `tweet.id`は`text:1`、`text:2`のように続き、`tweet.type`は`text`です。
- 分析済みテキスト1件の料金は、分析済みポスト1件と同じ$0.0003です。
- `texts`を設定すると、実行はそれらのテキストだけを分析します。Xの対象は別に実行してください。

## 料金

AI の費用はツイート単価に含まれています。AIのアカウントも、トークンも、キーも不要です。

正常に分析されたポスト1件につき$0.0003から、開始料金はかかりません。料金には収集が含まれます。分析上限は質問8個、質問定義1個あたり8,000バイト、ポスト1件あたりのコンテキスト12,000バイトです。抽出フィルタと重複排除は分析より前に実行されるため、フィルタで除外された行や重複行が分析されたり課金されたりすることはありません。失敗またはスキップされた分析、および診断情報の行には結果料金は発生しません。Apifyはプラットフォーム利用料を別途課金します。Pricingタブがその料金を表示します。

## 入力と出力の例

上記の入力はそのままコピーして使用できます。出力行は次のようになります（一部省略）。

```json
{
  "tweet": { "id": "2100692112916574711", "text": "…", "likeCount": 31 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      {
        "questionId": "stance",
        "type": "choice",
        "value": "bullish",
        "confidence": 0.86
      },
      {
        "questionId": "content",
        "type": "choice",
        "value": "analysis",
        "confidence": 0.79
      },
      {
        "questionId": "conviction",
        "type": "score",
        "value": 1,
        "confidence": 0.7
      },
      { "questionId": "relevance", "type": "probability", "probability": 0.95 }
    ]
  }
}
```

各結果には`tweet`と`analysis`が含まれます。回答には、種類、質問のバージョン、利用可能な確率が含まれます。失敗またはスキップされた分析では、収集されたポストが空の回答リストと`reason`とともに保持されます。key-value storeにある無料の診断情報は、無効な入力、結果の欠落、中断された収集について説明します。また、実行レポートでは、収集された行、課金された分析、保留中の課金が分けて記録されます。

## 実行サマリーとフラットな回答

各実行は、key-value storeに`analysis-summary`レコードを書き込み、実行レポートの`results.analysisSummary`の下にも同じ内容を記録します。これは、分析済み、失敗、スキップされた行の数を数え、エンゲージメントを合計し、すべての質問を要約します。`cashtags`は`$NVDA`のようなキャッシュタグごとのスタンスを数えるため、資産ごとの強気比率は`choices.stance`から得られます。`stance`ブロックには、エンゲージメントで重み付けした内訳と、最もエンゲージメントの高い強気・弱気のポストが追加されます。`conviction`は平均値とエンゲージメントで重み付けした平均値をレポートします。サマリーは数値を小数点以下4桁に丸めます。結果がゼロの実行は、カウントをゼロ、平均を`null`としてレポートします。各`cashtags`エントリは、強気の件数、弱気の件数、-1から1のスコアを持つ`signal`を追加します。スコアは(強気 - 弱気) / 行数です。`monitor.changedRows`は、ベースラインからスタンスが変化したポストを一覧表示します。各行は、リンク先のホスト名である`sourceDomains`を一覧表示します。`monitor.baselineDatasetId`が設定されている場合、サマリーの`monitor`ブロックが比較ステータスを数え、変更のあった行を最大50件まで一覧表示します。

各結果行には、質問IDから選択されたカテゴリ、スコア、または確率へのフラットなマップである`answers`も含まれます。`Flat answers`データセットビュー、CSVまたはExcelのエクスポートでは、質問ごとに1列がポストの隣に表示されるため、スプレッドシートでJSONを解析する必要はありません。失敗またはスキップされた行は空のマップを持ちます。

## 以前の実行と比較する

`monitor.baselineDatasetId`、つまり同じ分析設定で完了した以前の実行のデータセットIDを渡します。すると、すべての行が`monitor`オブジェクトを持ちます。そのステータスは、ベースラインがない場合は`first_run`、以前の実行に存在しなかったポストでは`new_to_baseline`、以前の実行に存在したポストでは`unchanged`または`changed`です。`changes`には、スタンス、コンテンツの種類、または確信度レベルが`previous`から`current`へと変化したものが一覧表示されます。判定は、カテゴリ、丸められたスコアレベル、または0.5でのはい/いいえで比較されます。判定が変更としてカウントされるのは、明確に変わった場合だけです。実行間の僅かなばらつきは変化なしとして扱われます。`maxBaselineRows`（デフォルト100,000）を超えるベースラインや、異なる設定によるベースラインは、収集の前に実行を停止させ、診断情報の行を出力します。

## タスクの例

50個の公開タスクから選択できます。それぞれ、範囲が定められた`maxItems`、用意済みの対象とコンテキスト、概要のデータセットビューを備えた実際の英語検索から始まります。実行前に検索や対象を編集してください。

- [X上のNvidia(NVDA)の市場心理](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/nvda-market-sentiment-on-x)
- [X上のTesla(TSLA)の市場心理](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/tsla-market-sentiment-on-x)
- [X上のApple(AAPL)の市場心理](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/aapl-market-sentiment-on-x)
- [X上のAmazon(AMZN)の市場心理](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/amzn-market-sentiment-on-x)
- [X上のMicrosoft(MSFT)の市場心理](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/msft-market-sentiment-on-x)
- [X上のAlphabet(GOOGL)の市場心理](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/googl-market-sentiment-on-x)
- [X上のMeta(META)の市場心理](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/meta-market-sentiment-on-x)
- [X上のAMD(AMD)の市場心理](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/amd-market-sentiment-on-x)
- [X上のPalantir(PLTR)の市場心理](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/pltr-market-sentiment-on-x)
- [X上のCoinbase(COIN)の市場心理](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/coin-market-sentiment-on-x)
- [X上のStrategy(MSTR)の市場心理](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/mstr-market-sentiment-on-x)
- [X上のRobinhood(HOOD)の市場心理](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/hood-market-sentiment-on-x)

残りのタスクは、Actorのページでさらに多くのブランド、トピック、市場をカバーしています。

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
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor): AIでニュースポストを形式、情報源の帰属、トピックとの関連性でラベル付けします。報道とコメントを区別するときに使用してください。分析済みポスト1件あたり$0.0003から。
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier): AIで独自のカテゴリ、スコア、はい/いいえの質問にすべてのポストで回答します。既定の分析があなたのラベルに合わないときに使用してください。分析済みポスト1件あたり$0.0003から。
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer): AIによる8つの特性への回答から、すべてのポストについて0から100のViral Scoreと判定を推定します。ポストが広がる理由や伸びない理由を調べるときに使用してください。分析済みポスト1件あたり$0.0003から。

## よくある質問とサポート

### 1回の実行で複数の銘柄を追跡できますか？

はい。すべての資産をティッカーとエイリアスとともに`analysis.targets`に列挙し、検索語を組み合わせてください。関連性の回答から、どのポストがあなたの対象を資産として扱っているかがわかります。

### `analysis.status`が`failed`や`skipped`になって返ってくるのはなぜですか？

Actorはポストを収集して配信しましたが、AI分析は完了しませんでした。`analysis.reason`が原因を示します。例えば、ポストとそのコンテキストが`maxContextBytes`を超えた場合の`context_limit`や、分析サービスが一時的に利用できない場合の`service_unavailable`などです。これらの行に結果料金は発生しません。`maxContextBytes`を上げる（最大12,000）か、対象のIDを再実行してください。

### この分析は事実を検証しますか？

いいえ。回答は、ポストが表現している内容と、ポストがそれをどう表現しているかを説明します。確率はモデルの確信度を示すものであり、真実性を示すものではありません。重要な分類結果は、すべての行に保持されている元のポストと照らし合わせて確認してください。

### どの言語に対応していますか？

抽出はXが提供するすべての言語に対応しています。私たちは分析をまず英語の顧客シナリオで検証しています。その他のサポート対象言語も同じ構造で回答を返します。`unclear`のカテゴリと確率が、すべての言語で不確実性を示します。

### 費用を抑えるにはどうすればよいですか？

フィルタ、重複排除、`maxItems`は分析より前に実行されるため、Actorは一意でフィルタ条件に一致するポストのみを分析し、課金します。的確な検索演算子、日付範囲、エンゲージメントの下限を使用し、大規模な実行の前には小さな`maxItems`で回答の品質を確認してください。

### サポートはどこで受けられますか？

Actorのページでイシューを開くか、実行IDを添えてsupport@xquik.comにお問い合わせください。key-value storeにある無料の診断情報は、空の実行、部分的な実行、中断された実行について説明します。

Xquikは独立したサードパーティサービスです。X Corpとは提携していません。「Twitter」および「X」はX Corpの商標です。
