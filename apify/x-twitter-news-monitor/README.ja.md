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

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。X (Twitter) News Monitorは、ニュースポストを形式、情報源の帰属、関連性で分類します。他のApify Actorはすべて、フィルタリングや重複排除の前に課金します。Xquikは、配信済みでユニークかつフィルタ条件に一致する結果にのみ課金します。

AI の費用はツイート単価に含まれています。AI プロバイダーへの支払いも、トークンの購入も、キーの用意も不要です。

X(Twitter)上のニュースポストをその性質によって分類し、元のポストデータをそのまま保持します。**X (Twitter) News Monitor with AI Analysis**は、あなたのトピックに関するポストを収集し、AIによる形式、情報源の帰属、関連性の回答をすべてのポストに付加します。報道とコメントや憶測を区別し、情報源が明示またはリンクされているかどうかを確認し、追跡している組織、人物、トピックに関するポストのみを保持します。

- **形式**は、報道、コメント、憶測、宣伝、風刺を区別します。
- **帰属**は、主張が情報源を明示しているか、リンクしているか、当事者本人によるものか、それとも情報源がないかを示します。
- **関連性**は、あなたの対象に関するポストを保持し、同名の無関係なものを除外します。
- ポストが持つすべてのフィールドについて、リンクされた記事も含めて**完全な取得元レコード**を保持します。

## Xでニュースポストを分類する方法

1. `Nvidia earnings lang:en -filter:retweets`のような検索語、ニュースアカウントのハンドル、またはポストIDを追加します。
2. `maxItems`と、日付範囲、`filter:news`、最小リポスト数などの抽出フィルタを設定します。
3. 追跡している組織、人物、トピックとそのエイリアスを`analysis.targets`に入れ、`analysis.context`でトピックを絞り込みます。
4. Actorを実行し、データセットを開きます。

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

| 質問    | 回答                                                                      |
| ----------- | --------------------------------------------------------------------------- |
| 形式      | 報道、コメント、憶測、宣伝、風刺、無関係、または不明 |
| 帰属 | 明示、リンク、当事者本人、なし、または不明                                                 |
| 関連性   | 報じられている出来事があなたの対象に関するものである確率                   |

分類は事実を検証しません。情報源が明示されているからといって、それが信頼できる情報源であるとは限りません。帰属は、ポストが何を提示しているかを説明するものです。

## 料金

AI の費用はツイート単価に含まれています。AI プロバイダーへの支払いも、トークンの購入も、キーの用意も不要です。

正常に分析されたポスト1件につき$0.0003から、開始料金はかかりません。収集は含まれており、規定の分析上限は質問8個、質問定義1個あたり8,000バイト、ポスト1件あたりのコンテキスト12,000バイトです。抽出フィルタと重複排除は分析より前に実行されるため、フィルタで除外された行や重複行が分析されたり課金されたりすることはありません。失敗またはスキップされた分析、および診断情報の行には結果料金は発生しません。Apifyのプラットフォーム利用料は、Apifyによって別途課金され、Pricingタブに表示されます。

## 入力と出力の例

上記の入力はそのままコピーして使用できます。出力行は次のようになります（一部省略）。

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

各結果には`tweet`と`analysis`が含まれます。回答には、種類、質問のバージョン、利用可能な確率が含まれます。ポストがX Articleにリンクしている場合、分析はその記事のタイトル、プレビュー、テキストブロックをコンテキストとして取得し、`analysis.contextAvailability.article`は`text_blocks`、`summary`（タイトルとプレビューのみ）、または`not_supplied`をレポートします。失敗またはスキップされた分析では、収集されたポストが空の回答リストと`reason`とともに保持されます。key-value storeにある無料の診断情報は、無効な入力、結果の欠落、中断された収集について説明します。また、実行レポートでは、収集された行、課金された分析、保留中の課金が分けて記録されます。

## 実行サマリーとフラットな回答

各実行は、key-value storeに`analysis-summary`レコードを書き込み、実行レポートの`results.analysisSummary`の下にも同じ内容を記録します。これは、分析済み、失敗、スキップされた行の数を数え、エンゲージメントを合計し、すべての質問を要約します。`format`の内訳は、報道をコメント、憶測、宣伝、風刺と区別します。`attribution`は、明示、リンク、当事者本人、情報源なしの数を数えます。`relevance`は各対象に関するポストの数を数え、`targets`は対象ごとの言及数を示し、各対象の`top`は回答カテゴリごとに最もエンゲージメントの高いポストを一覧表示します。数値は小数点以下4桁に丸められます。結果がゼロの実行では、カウントはゼロ、平均は`null`としてレポートされます。`sourceDomains`は実行全体でリンクされたドメインの数を数え、各`targets`エントリには、その対象に関するポストの形式と帰属の内訳を示す`choices`が含まれます。また`monitor.changedRows`は、ベースラインから判定が変化したポストを一覧表示します。各行には、リンク先のホスト名である`sourceDomains`と、テキスト内で見つかった`$NVDA`のような`cashtags`も一覧表示されます。また、`monitor.baselineDatasetId`が設定されている場合、サマリーの`monitor`ブロックが比較ステータスを数え、変更のあった行を最大50件まで一覧表示します。

各結果行には、質問IDから選択されたカテゴリ、スコア、または確率へのフラットなマップである`answers`も含まれます。`Flat answers`データセットビュー、CSVまたはExcelのエクスポートでは、質問ごとに1列がポストの隣に表示されるため、スプレッドシートでJSONを解析する必要はありません。失敗またはスキップされた行は空のマップを持ちます。

## 以前の実行と比較する

`monitor.baselineDatasetId`、つまり同じ分析設定で完了した以前の実行のデータセットIDを渡すと、すべての行に`monitor`オブジェクトが追加されます。ベースラインがない場合は`first_run`、以前の実行に存在しなかったポストには`new_to_baseline`、以前の実行に存在したポストには`unchanged`または`changed`が付与され、`changes`には、形式、帰属、または関連性の判定が`previous`から`current`へと変化したものが一覧表示されます。判定は、カテゴリ、丸められたスコアレベル、または0.5でのはい/いいえで比較され、回答が明確に変化した場合にのみ変更としてカウントされます。具体的には、以前のカテゴリの確率が0.4を下回った場合、スコアが少なくとも0.6レベル動いた場合、またははい/いいえの確率がしきい値から少なくとも0.1離れた場合です。実行間の僅かなばらつきは変化なしとして扱われます。`maxBaselineRows`（デフォルト100,000）を超えるベースラインや、異なる設定によるベースラインは、収集の前に実行を停止させ、診断情報の行を出力します。

## タスクの例

50個の公開タスクから選択できます。それぞれ、範囲が定められた`maxItems`、用意済みの対象とコンテキスト、概要のデータセットビューを備えた実際の英語検索から始まります。実行前に検索や対象を編集してください。

- [X上のNvidia関連ニュースポストを分類する](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-nvidia-news-posts-on-x)
- [X Articleのニュースポストを分類する](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-x-article-news-posts)
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

残りのタスクは、Actorのページでさらに多くのブランド、トピック、市場をカバーしています。

## 関連するXquik Actor

すべてのXquik Actorは、同じ抽出エンジン、フィルタ優先の課金方式、診断機能を共有しています。必要なデータに合ったものを選んでください。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): 検索、プロフィールのタイムライン、リスト、ポストIDから50種類以上のフィルタとフラットなエクスポートでポストをスクレイピングします。分析なしでポストデータが必要なときに使用してください。1行あたり$0.00015から。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): ハンドル、ID、URLからプロフィールとそのポスト、リプライ、メディア、いいねをスクレイピングします。検索ではなくアカウントから始めるときに使用してください。1行あたり$0.00015から。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): 25種類以上のフィルタで、ポスト配下のリプライ、コメント、会話全体をスクレイピングします。ポストの下にある議論が必要なときに使用してください。1行あたり$0.00015から。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): ポストのURLまたはIDから、リプライ、引用ポスト、リポストしたユーザー、いいねしたユーザー、スレッドを一括でスクレイピングします。誰がポストにエンゲージしたかを測定するときに使用してください。1行あたり$0.00015から。
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
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier): AIで独自のカテゴリ、スコア、はい/いいえの質問にすべてのポストで回答します。既定の分析があなたのラベルに合わないときに使用してください。分析済みポスト1件あたり$0.0003から。

## よくある質問とサポート

### 自分の質問を使えますか？

はい。カスタムの`analysis.questions`はデフォルトを置き換えます。`choice`、`score`、`probability`の質問を1～8個、カテゴリは2～255個、または少なくとも2段階の順序付きレベルで指定できます。

### `analysis.status`が`failed`や`skipped`になって返ってくるのはなぜですか？

ポストは収集され配信されましたが、AIによる分析は完了しませんでした。`analysis.reason`が原因を示します。例えば、ポストとそのコンテキストが`maxContextBytes`を超えた場合の`context_limit`や、再試行後の`service_unavailable`などです。これらの行に結果料金は発生しません。`maxContextBytes`を上げる（最大12,000）か、対象のIDを再実行してください。

### この分析は事実を検証しますか？

いいえ。回答は、ポストが表現している内容とその表現のされ方を説明するものです。確率はモデルの確信度を示すものであり、真実性を示すものではありません。重要な分類結果は、すべての行に保持されている元のポストと照らし合わせて確認してください。

### どの言語に対応していますか？

抽出はXが提供するすべての言語に対応しています。分析はまず英語の顧客シナリオで検証されています。その他のサポート対象言語でも同じ構造で回答が返され、`unclear`のカテゴリと確率を通じて不確実性が明示されます。

### 費用を抑えるにはどうすればよいですか？

フィルタ、重複排除、`maxItems`は分析より前に実行されるため、一意でフィルタ条件に一致するポストのみが分析され、課金されます。的確な検索演算子、日付範囲、エンゲージメントの下限を使用し、大規模な実行の前には小さな`maxItems`で回答の品質を確認してください。

### サポートはどこで受けられますか？

Actorのページでイシューを開くか、実行IDを添えてsupport@xquik.comにお問い合わせください。key-value storeにある無料の診断情報は、空の実行、部分的な実行、中断された実行について説明します。

Xquikは独立したサードパーティサービスです。X Corpとは提携していません。「Twitter」および「X」はX Corpの商標です。
