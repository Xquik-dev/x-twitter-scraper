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

Xquikは世界最速かつ最安値のX(Twitter)スクレイパーサービスで、最も網羅的なXデータを提供します。X (Twitter) Brand Monitoringは、関連性、感情、顧客体験の回答であなたのブランド言及を追跡します。他のApify Actorはすべて、フィルタリングや重複排除の前に課金します。Xquikは、配信済みでユニークかつフィルタ条件に一致する結果にのみ課金します。

AI の費用はツイート単価に含まれています。AI プロバイダーへの支払いも、トークンの購入も、キーの用意も不要です。

X(Twitter)上でのブランド言及を監視し、実行間の感情の変化を追跡します。**X (Twitter) Brand Monitoring with AI Analysis**は、一致するすべてのポストを収集し、AIによる関連性、感情、顧客体験の回答を各ポストに付加し、その回答を以前のデータセットと比較して、何が変化したかを示します。元のポストデータはすべての行に残るため、エクスポート、レビュー、追加分析のために再度スクレイピングする必要はありません。

ブランド、製品ライン、キャンペーンについて、苦情、称賛、購入に関する質問を監視するために使用してください。集計スコアではなく実際のポストからサポートチームやマーケティングチームに報告するために、また顧客がどのようにあなたについて語っているかについて、実行を重ねるごとの履歴を保持するために使用してください。

- **元のポストのすべてのフィールド**が回答とともに残ります。テキスト、著者、各種カウント、メディア、リンク、引用ポストとリプライ対象のポストです。
- **型付きの回答**: 関連性の確率、確率付きの感情カテゴリ、顧客体験のカテゴリ。
- 確率のノイズではなく判定による、実行間の**変化の追跡**。
- **フィルタ優先の課金**: 分析に成功した、一意でフィルタ条件に一致するポストのみが課金されます。

## Xでブランドを監視する方法

1. 検索語（例: `"Acme headphones" lang:en`）、プロフィールのハンドル、ポストのURL、またはポストIDを追加します。
2. `maxItems`と、日付範囲、最小いいね数、リプライ除外などのタスクに必要な抽出フィルタを設定します。
3. `analysis.targets`にブランド名とエイリアスを入れ、`analysis.context`にブランドの説明を記述します。
4. Actorを実行し、次回の比較のためにデータセットIDを保存しておきます。
5. 次回の実行では、そのIDを`monitor.baselineDatasetId`に追加します。回答の比較可能性を保つため、質問、対象、コンテキスト、コンテキストの上限は変更しないでください。

```json
{
  "searchTerms": ["\"Acme headphones\" lang:en"],
  "maxItems": 100,
  "analysis": {
    "targets": [{ "name": "Acme", "aliases": ["Acme headphones"] }],
    "context": "Consumer headphones & customer service."
  },
  "monitor": {
    "baselineDatasetId": "YOUR_PREVIOUS_DATASET_ID",
    "maxBaselineRows": 100000
  }
}
```

対象は分類の指針となります。検索クエリを作成したり、無関係なポストを自動的に除去したりするわけではないため、あなたの調査に合った検索語とフィルタを選んでください。

### モニターが回答する内容

| 質問       | 回答                                            |
| ------------------- | ------------------------------------------------ |
| ブランドの関連性     | ポストがあなたの対象について述べている確率           |
| 感情       | ポジティブ、ネガティブ、複合的、中立、または不明         |
| 顧客体験 | 顧客、見込み客、傍観者、または不明                    |

紛らわしい同名の言葉かどうかを見分けるには、関連性の確率を確認してください。感情は、著者が対象に対して表現している態度を説明します。

### 比較の仕組み

| 比較ステータス      | 意味                                                 |
| ---------------------- | ------------------------------------------------------- |
| `first_run`            | ベースラインが指定されなかった                              |
| `new_to_baseline`      | このポストIDがベースラインに存在しなかった                     |
| `unchanged`            | 比較可能なすべての判定が一致している                          |
| `changed`              | 少なくとも1つの判定が異なる                                 |
| `not_comparable`       | 必要なメタデータ、ID、または一致設定が不足している               |
| `analysis_unavailable` | このポストに成功した分析結果がない                            |

回答は判定単位で比較されます。`choice`の回答はそのカテゴリで、`score`の回答は最も近いレベルで、`probability`の回答は0.5でのはい/いいえの判定で比較されます。回答が明確に変化した場合にのみ、変更としてカウントされます。具体的には、以前のカテゴリの確率が0.4を下回った場合、スコアが少なくとも0.6レベル動いた場合、またははい/いいえの確率がしきい値から少なくとも0.1離れた場合です。実行間の僅かなばらつきは変化なしとして扱われます。同じ判定を保った変動は`unchanged`のままなので、実行間のモデルのばらつきによってレポートがあふれることはありません。`changes`は、変化した各質問について`previous`と`current`の判定を一覧表示します。変化は、モデルのばらつき、新しいコンテキスト、または元データの編集を反映している場合があり、事実の変化を証明するものではありません。また、あるポストが存在しなくなったことは、削除されたことを証明するものでもありません。

ベースラインの上限はデフォルトで100,000行です。重複するポストID、読み込み失敗、データセットサイズの変化があると、収集前に比較が停止します。それらが空のベースラインになることはありません。

## 料金

AI の費用はツイート単価に含まれています。AI プロバイダーへの支払いも、トークンの購入も、キーの用意も不要です。

正常に分析されたポスト1件につき$0.0003から、開始料金はかかりません。収集は含まれており、規定の分析上限は質問8個、質問定義1個あたり8,000バイト、ポスト1件あたりのコンテキスト12,000バイトです。抽出フィルタと重複排除は分析より前に実行されるため、フィルタで除外された行や重複行が分析されたり課金されたりすることはありません。失敗またはスキップされた分析、および診断情報の行には結果料金は発生しません。Apifyのプラットフォーム利用料(計算、ストレージ、転送)は、Apifyがそのプランの料金で別途課金し、Pricingタブに表示されます。

## 入力と出力の例

上記の入力はそのままコピーして使用できます。出力行は次のようになります（一部省略）。

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

各結果には`tweet`、`analysis`、`monitor`が含まれます。回答には、種類、質問のバージョン、利用可能な確率が含まれます。引用ポスト、リプライ、著者、メディアのコンテキストが欠落している場合は、`analysis.contextAvailability`の下で明示されます。失敗またはスキップされた分析では、収集されたポストが空の回答リストと`reason`とともに保持されます。key-value storeにある無料の診断情報は、無効な入力、結果の欠落、中断された収集について説明します。また、実行レポートでは、収集された行、課金された分析、保留中の課金が分けて記録されます。

## 実行サマリーとフラットな回答

各実行は、key-value storeに`analysis-summary`レコードを書き込み、実行レポートの`results.analysisSummary`の下にも同じ内容を記録します。これは、分析済み、失敗、スキップされた行の数を数え、エンゲージメントを合計し、すべての質問を要約します。`targets`は、ブランドまたはエイリアスごとの言及数、シェア・オブ・ボイス、エンゲージメントをレポートし、各エントリの`top`は回答カテゴリごとに最もエンゲージメントの高い言及を3件一覧表示するため、各ブランドの最も強いネガティブおよびポジティブな言及がアラート用にすぐ使える状態になります。`sentiment`ブロックは、`top`の下に最もエンゲージメントの高いポジティブおよびネガティブな言及を一覧表示し、アラートにすぐ使える状態にします。また`relevance`は、そのブランドに関するものと判定された言及の数を数えます。数値は小数点以下4桁に丸められます。結果がゼロの実行では、カウントはゼロ、平均は`null`としてレポートされます。各`targets`エントリには、そのブランドに言及したポストの中での回答の内訳を示す`choices`も含まれ、`monitor.changedRows`は、ベースラインから判定が変化したポストを一覧表示し、Webhookやアラートにすぐ使えます。各行には、リンク先のホスト名である`sourceDomains`も一覧表示され、`monitor.baselineDatasetId`が設定されている場合、サマリーの`monitor`ブロックが比較ステータスを数え、変更のあった行を最大50件まで一覧表示します。

各結果行には、質問IDから選択されたカテゴリ、スコア、または確率へのフラットなマップである`answers`も含まれます。`Flat answers`データセットビュー、CSVまたはExcelのエクスポートでは、質問ごとに1列がポストの隣に表示されるため、スプレッドシートでJSONを解析する必要はありません。失敗またはスキップされた行は空のマップを持ちます。

## タスクの例

50個の公開タスクから選択できます。それぞれ、範囲が定められた`maxItems`、用意済みの対象とコンテキスト、概要のデータセットビューを備えた実際の英語検索から始まります。実行前に検索や対象を編集してください。

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
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis): すべてのポストにAIで態度、強度、皮肉の確率をラベル付けします。任意のトピックについて一般的な感情分析が必要なときに使用してください。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals): AIで強気、弱気、中立、または複合的なスタンス、コンテンツの種類、確信度、資産との関連性をラベル付けします。株、暗号資産、トレーディングの話題を追うときに使用してください。分析済みポスト1件あたり$0.0003から。
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor): AIでニュースポストを形式、情報源の帰属、トピックとの関連性でラベル付けします。報道とコメントを区別するときに使用してください。分析済みポスト1件あたり$0.0003から。
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier): AIで独自のカテゴリ、スコア、はい/いいえの質問にすべてのポストで回答します。既定の分析があなたのラベルに合わないときに使用してください。分析済みポスト1件あたり$0.0003から。

## よくある質問とサポート

### 自分の質問を使えますか？

はい。カスタムの`analysis.questions`はデフォルトを置き換えます。`choice`、`score`、`probability`の質問を1～8個指定できます。choiceの質問は2～255個のカテゴリを、scoreの質問は少なくとも2段階の順序付きレベルを使用します。比較したい実行間では、同じ質問を維持してください。

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
