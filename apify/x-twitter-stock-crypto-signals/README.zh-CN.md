<p align="center">
  <a href="README.md">English</a> ·
  <a href="README.es.md">Español</a> ·
  <a href="README.tr.md">Türkçe</a> ·
  <strong>简体中文</strong> ·
  <a href="README.ja.md">日本語</a> ·
  <a href="README.ko.md">한국어</a> ·
  <a href="README.de.md">Deutsch</a> ·
  <a href="README.fr.md">Français</a> ·
  <a href="README.it.md">Italiano</a>
</p>

<table align="center"><tr><td align="center">
<a href="https://youtu.be/4UOSpoOoC3Y?t=367"><img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" width="720" alt="Framer connects Xquik MCP to coding agents"></a><br>
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">观看 Framer 如何在 Claude Code、Codex、Cursor 等工具中使用 Xquik 抓取工具，从 6:07 开始。</a>
</td></tr></table>

Xquik 是全球速度最快、成本最低的 X（Twitter）抓取服务，拥有最完整的 X 数据。X (Twitter) Stock & Crypto AI Trading Signals 会将推文转化为针对每个股票代码或币种的看涨、看跌、中性或混合立场。其他所有 Apify Actor 都会在过滤或去重之前收费。Xquik 只对已交付、唯一且符合过滤条件的结果收费。AI 费用已包含在每条推文的价格中。你无需向 AI 提供商付费、无需购买 token，也无需自带密钥。

在 X（Twitter）上读取股票、加密货币和交易相关帖子背后的立场，同时保留原始推文数据。**X (Twitter) Stock & Crypto AI Trading Signals** 会收集与你的股票代码或资产相关的帖子。然后它会为每条帖子添加由 AI 生成的立场、内容类型、信心程度和资产相关性。它能将明确的判断与含糊其辞的言论区分开，将分析与推广区分开，将谈论你所关注资产的帖子与仅仅提到同名词但无关的用法区分开。

- **每条帖子的立场。** 每条帖子为看涨、看跌、中性、混合或不明确。
- **内容类型**可区分分析、新闻、交易想法、推广、玩笑和提问。
- **信心程度**可将明确的判断和持仓与含糊其辞的言论区分开。
- **相关性**可过滤掉与股票代码或公司名称无关的用法。
- **完整的来源记录**，涵盖推文暴露的每一个字段。

## 如何分析 X 上的市场情绪

1. 添加搜索词，例如 `$NVDA lang:en -filter:retweets`、cashtag 查询、主页用户名或推文 ID。
2. 设置 `maxItems` 以及日期范围或最低点赞数等提取过滤条件。
3. 在 `analysis.targets` 下填入资产名称、股票代码和别名，并在 `analysis.context` 中描述该资产。
4. 运行 Actor 并打开数据集。

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

### Actor 能回答哪些问题

| 问题   | 回答                                                       |
| ---------- | ------------------------------------------------------------ |
| 立场     | 看涨、看跌、中性、混合或不明确                  |
| 内容类型     | 分析、新闻、交易、推广、玩笑、提问或不明确 |
| 信心程度 | 0 表示含糊其辞的言论，1 表示表达了观点，2 表示明确的判断或持仓      |
| 相关性  | 该帖子将你关注的目标视为资产的概率      |

这些回答描述的是作者所表达的内容，并非投资建议，也不会核实相关说法、价格或备案信息。

## 定价

AI 费用已包含在每条推文的价格中。你无需向 AI 提供商付费、无需购买 token，也无需自带密钥。

每条成功分析的推文低至 $0.0003，无启动费。价格已包含数据收集。分析额度为每条推文 8 个问题、每个问题定义 8,000 字节、上下文 12,000 字节。提取过滤和去重会在分析之前执行，因此被过滤掉或重复的行不会被分析，也不会计费。分析失败、被跳过的分析以及诊断行不产生结果费用。Apify 会单独收取平台使用费。Pricing 标签页会显示该费用。

## 输入与输出示例

上面的输入可直接复制使用。输出行如下所示（已精简）：

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

每个结果都包含 `tweet` 和 `analysis`。回答中包含类型、问题版本和可用的概率值。分析失败或被跳过时，仍会保留已收集的推文，但回答列表为空，并附带一个 `reason`。键值存储中的免费诊断记录会说明无效输入、缺失结果和被中断的收集过程，运行报告则会区分已收集的行、已计费的分析和待处理的费用。

## 运行摘要与扁平化回答

每次运行都会向其键值存储写入一条 `analysis-summary` 记录，并在运行报告的 `results.analysisSummary` 中重复该记录。它会统计已分析、失败和被跳过的行数，汇总互动数据，并对每个问题进行汇总。`cashtags` 会按 `$NVDA` 这样的 cashtag 统计立场分布，因此每个资产的看涨比例来自 `choices.stance`。`stance` 部分会附加按互动量加权的分布情况，以及互动量最高的看涨和看跌帖子。`conviction` 会报告均值和按互动量加权的均值。摘要会将数值四舍五入到小数点后 4 位。空运行会报告数量为零、均值为 `null`。每条 `cashtags` 记录还会附加 `signal`，其中包含看涨数量、看跌数量，以及一个介于 -1 到 1 之间的分数。该分数为 (看涨 - 看跌) / 行数。`monitor.changedRows` 会列出自基线以来立场发生变化的推文。每一行会列出 `sourceDomains`，即其链接指向的域名。设置 `monitor.baselineDatasetId` 后，摘要中的 `monitor` 部分会统计各比较状态的数量，并列出最多 50 条发生变化的行。

每个结果行还包含 `answers`，这是一个从问题 ID 映射到所选类别、评分或概率的扁平化映射。`Flat answers` 数据集视图以及 CSV 或 Excel 导出会在推文旁为每个问题显示一列，因此电子表格无需解析 JSON。失败或被跳过的行对应一个空映射。

## 与更早的运行进行比较

传入 `monitor.baselineDatasetId`，即一次采用相同分析设置且已完成的更早运行的数据集 ID。每一行就会新增一个 `monitor` 对象。其状态在没有基线时为 `first_run`，基线中不存在该推文时为 `new_to_baseline`，基线中存在该推文时为 `unchanged` 或 `changed`。`changes` 会列出每一项从 `previous` 变为 `current` 的立场、内容类型或信心程度。比较时按类别、四舍五入后的评分等级或以 0.5 为界的是/否值进行判断。有三种情况会计为已变化。此前的类别概率低于 0.4。评分变化至少 0.6 个等级。是/否概率与阈值的距离至少达到 0.1。运行之间的临界抖动仍视为未变化。超过 `maxBaselineRows`（默认 100,000）的基线，或来自不同设置的基线，会在数据收集开始前停止运行，并写入一条诊断记录。

## 任务示例

可从 50 个公开任务中选择。每个任务都从一个真实的英文搜索开始，附带明确的 `maxItems`、现成的目标与上下文，以及概览数据集视图。运行前可编辑搜索词或目标。

- [Nvidia (NVDA) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/nvda-market-sentiment-on-x)
- [Tesla (TSLA) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/tsla-market-sentiment-on-x)
- [Apple (AAPL) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/aapl-market-sentiment-on-x)
- [Amazon (AMZN) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/amzn-market-sentiment-on-x)
- [Microsoft (MSFT) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/msft-market-sentiment-on-x)
- [Alphabet (GOOGL) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/googl-market-sentiment-on-x)
- [Meta (META) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/meta-market-sentiment-on-x)
- [AMD (AMD) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/amd-market-sentiment-on-x)
- [Palantir (PLTR) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/pltr-market-sentiment-on-x)
- [Coinbase (COIN) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/coin-market-sentiment-on-x)
- [Strategy (MSTR) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/mstr-market-sentiment-on-x)
- [Robinhood (HOOD) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/hood-market-sentiment-on-x)

Actor 页面上还有更多涵盖其他品牌、主题和市场的任务。

## 相关 Xquik Actor

每个 Xquik Actor 都共享相同的抓取引擎，采用先过滤后计费与诊断机制。请选择与你所需数据相匹配的那一个。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper)：从搜索、主页时间线、List 和推文 ID 抓取推文，提供 50 多种过滤条件和扁平化导出。适合在不需要分析的情况下获取推文数据。每行低至 $0.00015。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper)：从用户名、ID 或 URL 抓取主页及其帖子、回复、媒体和点赞。适合从账号而非搜索出发的场景。每行低至 $0.00015。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper)：抓取帖子下的回复、评论及完整对话，提供 25 多种过滤条件。适合需要获取帖子下方讨论内容的场景。每行低至 $0.00015。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper)：批量抓取帖子 URL 或 ID 对应的回复、引用推文、转推者、点赞者和推文串。适合衡量谁与帖子产生了互动。每行低至 $0.00015。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper)：以主页行的形式抓取关注者、关注对象、List 成员、订阅者和 Community 成员。适合需要受众或成员列表的场景。每个主页低至 $0.00015。
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper)：按用户名、简介和所在地搜索用户，并提供关注者数、认证状态、账号年龄和所在地过滤条件。适合根据搜索结果构建账号列表。每个主页低至 $0.00015。
- [X List Scraper](https://apify.com/xquik/x-list-scraper)：从 List 的 URL 或 ID 抓取 List 帖子、成员和关注者。适合由精选 List 定义数据来源的场景。每行低至 $0.00015。
- [X Community Scraper](https://apify.com/xquik/x-community-scraper)：抓取 Community 信息、帖子、搜索结果、成员和管理员。适合以 X Community 为数据来源的场景。每行低至 $0.00015。
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper)：按地点抓取实时趋势，包含排名、热度、查询词和 WOEID。适合追踪各地正在流行的话题。每条趋势低至 $0.00015。
- [X Article Scraper](https://apify.com/xquik/x-article-scraper)：以 Markdown 和文本形式抓取长篇 X Articles，包含封面、作者、日期和指标数据。适合需要获取文章正文而非推文的场景。每篇文章低至 $0.00015。
- [X Media Downloader](https://apify.com/xquik/x-media-downloader)：从帖子或主页提取或存储照片、视频和 GIF，提供 MP4 和元数据选项。适合需要获取媒体文件本身的场景。每条媒体记录低至 $0.00015。
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring)：跟踪品牌提及，提供 AI 相关性、情感和客户体验方面的回答，并比较各次运行结果。适合长期观察某个品牌的场景。每条已分析推文低至 $0.0003。
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis)：使用 AI 为每条推文标注态度、强度和讽刺概率。适合需要针对任意主题获取整体情感的场景。每条已分析推文低至 $0.0003。
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)：使用 AI 按格式、来源归属和主题相关性标注新闻类帖子。适合将报道内容与评论区分开的场景。每条已分析推文低至 $0.0003。
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)：使用 AI 为每条推文回答你自定义的分类、评分和是/否问题。适合预设分析无法满足你的标签需求的场景。每条已分析推文低至 $0.0003。

## 常见问题与支持

### 我可以在一次运行中跟踪多个股票代码吗？

可以。在 `analysis.targets` 下列出每个资产及其股票代码和别名，并组合搜索词。相关性回答会告诉你哪些帖子将你所关注的目标视为资产。

### 为什么某一行返回的 `analysis.status` 是 `failed` 或 `skipped`？

Actor 已收集并交付该推文，但 AI 分析未能完成。`analysis.reason` 会说明原因，例如推文及其上下文超过 `maxContextBytes` 时的 `context_limit`，或重试后仍失败的 `service_unavailable`。这些行不产生结果费用。可以提高 `maxContextBytes`（最高 12,000），或重新运行受影响的 ID。

### 该分析会核实事实吗？

不会。回答描述的是帖子所表达的内容，以及帖子如何表述该内容。概率反映的是模型的信心程度，而非事实真相。请对照每一行都保留的原始推文，审核重要的分类结果。

### 支持哪些语言？

数据提取支持 X 提供的所有语言。我们首先在英文客户场景中验证分析功能。其他受支持语言返回的回答具有相同的结构。`unclear` 类别和概率会在每种语言中体现不确定性。

### 如何控制成本？

过滤、去重和 `maxItems` 会在分析之前执行，因此 Actor 只分析唯一且符合过滤条件的推文，也只对这些推文计费。请使用精确的搜索操作符、日期范围和互动量下限，并先用较小的 `maxItems` 检验回答质量，再进行大规模运行。

### 在哪里获取帮助？

请在 Actor 页面上提交 issue，或通过 support@xquik.com 联系支持团队并附上运行 ID。键值存储中的免费诊断记录会说明空结果、部分结果或被中断的运行情况。

Xquik 是独立的第三方服务，与 X Corp 没有关联。
"Twitter" 和 "X" 是 X Corp 的商标。
