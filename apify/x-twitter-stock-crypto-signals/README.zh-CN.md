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
<a href="https://youtu.be/4UOSpoOoC3Y?t=367"><img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" width="720" alt="Framer 将 Xquik MCP 连接到编程 Agent"></a><br>
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">从 6:07 开始，观看 Framer 如何在 Claude Code、Codex、Cursor 等工具中使用 Xquik 抓取工具。</a>
</td></tr></table>

Xquik 是全球最快、最便宜的 X（Twitter）抓取服务，X 数据也最完整。Xquik 的 X (Twitter) Stock & Crypto AI Trading Signals 把帖子转化为立场。每个立场按股票代码和币种，分为看涨、看跌、中性或混合。其他大多数 Apify Actor 在过滤或去重之前就开始收费。Xquik 只对已交付、不重复且符合过滤条件的结果收费。AI 费用已包含在每条帖子的价格中。你不需要 AI 账号、token 或密钥。

读懂 X（Twitter）上股票、加密货币和交易帖子背后的立场。Xquik 的 **X (Twitter) Stock & Crypto AI Trading Signals** 收集与你的资产有关的帖子（推文），并用 AI 为每条帖子加上立场、内容类型、信心程度和资产相关性。把明确的判断和留有余地的说法区分开，把分析和推广区分开。找出借用你的资产名称指代其他事物的帖子。

- **每条帖子的立场。** 每条帖子为看涨、看跌、中性、混合或不明确。
- **内容类型。** 区分分析、新闻、交易想法、推广、玩笑和提问。
- **信心程度。** 把明确的判断和持仓与留有余地的说法区分开。
- **相关性。** 帮你去掉与资产无关的股票代码或公司名用法。
- **完整的原始记录。** 每行都保留该帖子公开的所有字段。

> Xquik 是独立的第三方服务，与 X Corp 无关联。“Twitter”和“X”是 X Corp 的商标。

## 如何分析 X 上的市场情绪

1. 添加搜索词（例如 `$NVDA lang:en -filter:retweets`）、cashtag 查询、个人资料用户名或帖子 ID。
2. 设置 `maxItems` 和提取过滤条件，例如日期范围或最少喜欢数。
3. 把资产名称、股票代码和别名放进 `analysis.targets`，并在 `analysis.context` 中描述这项资产。
4. 开始运行，然后打开数据集。

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

### 该 Actor 回答什么

| 问题 | 答案 |
| --- | --- |
| 立场 | 看涨、看跌、中性、混合或不明确 |
| 内容 | 分析、新闻、交易、推广、玩笑、提问或不明确 |
| 信心程度 | 0 为留有余地的说法，1 为表明观点，2 为明确判断或持仓 |
| 相关性 | 帖子把你的目标当作资产讨论的概率 |

立场为中性或不明确时，信心程度总是 0。没有方向的帖子，无法明确表达方向。这时该答案把全部概率放在等级 0，并采用立场的置信度。

答案描述作者表达的内容，不构成投资建议，也不核实说法、价格或公告文件。

## 分析你自己的文本

把你自己的草稿、回复、评价或笔记粘贴到 `texts` 中。Xquik 的 X (Twitter) Stock & Crypto AI Trading Signals 会分析这些文本，不会从 X 获取任何内容。

```json
{
  "texts": [
    "$NVDA guidance beat again. I am adding on any dip below 900.",
    "Not touching $BTC until the ETF flows turn positive."
  ]
}
```

- 每段文本生成 1 行，`analysis` 答案与帖子相同。
- `tweet.id` 依次为 `text:1`、`text:2` 等，`tweet.type` 为 `text`。
- 每段已分析文本的费用与一条已分析帖子相同，都是 $0.0003。
- 设置 `texts` 后，运行只分析这些文本。X 目标请另外运行。

## 分析 X 上的市场情绪要花多少钱？

Xquik 的 X (Twitter) Stock & Crypto AI Trading Signals 每条已分析帖子 $0.0003 起，不收启动费。价格包含收集和 AI 费用。你不需要 AI 账号、token 或密钥。这个价格涵盖每条帖子最多 8 个问题和 64,000 字节的上下文。每个问题定义最多可用 8,000 字节。

提取过滤和去重在分析之前进行。被过滤的行和重复行都不收费。失败的分析、跳过的分析和诊断行不产生结果费用。Apify 会按你套餐的费率，另行收取计算、存储和传输的平台使用费。Pricing 标签页会显示这部分费用。

## 输入与输出示例

上面的输入可以直接复制使用。一行省略后的输出如下：

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

每条结果都包含 `tweet` 和 `analysis`。答案包括类型、问题版本和可用的概率。分析失败或被跳过的行会保留已收集的帖子和一个 `reason`，答案列表为空。

键值存储中的免费诊断信息会说明无效输入、缺失结果和中断的收集。运行报告把已收集的行、已收费的分析和待收取的费用分开列出。

## 运行摘要与扁平答案

运行在以下 4 种情况下，会向键值存储写入一条 `analysis-summary` 记录：

- 运行遇到问题或规模较大。
- 设置了 `monitor` 但没有 `baselineDatasetId`，即系列中的第一次运行。
- 比较发现了已变化、新增或无法比较的帖子。
- 开启了 `alwaysSaveRunRecords`。

其他运行会跳过这条记录。它们的状态会写明占比最高的答案，例如 `Top stance: bullish in 3 of 5 results.`。没有变化的比较会显示 `No change since the earlier run.`。运行遇到问题或规模较大时，还会写入 `run-report`。开启 `alwaysSaveRunRecords` 的运行也会写入。`run-report` 会在 `results.analysisSummary` 下重复这份摘要。

摘要统计已分析、失败和跳过的行，汇总互动数据，并总结每个问题。

- `cashtags` 统计每个 cashtag 的立场，例如 `$NVDA`。每项资产的看涨比例来自 `choices.stance`。
- 每个 `cashtags` 条目都会加上 `signal`，包含看涨和看跌数量。它的分数在 -1 到 1 之间，算法是看涨数减去看跌数，再除以行数。
- `stance` 块加上按互动加权的分布，以及互动最多的看涨和看跌帖子。
- `conviction` 报告平均值和按互动加权的平均值。
- `monitor.changedRows` 列出自基线以来立场发生变化的帖子。
- 每行都列出 `sourceDomains`，即它链接到的主机名。
- 设置 `monitor.baselineDatasetId` 时，摘要的 `monitor` 块会统计比较状态，并列出最多 50 个已变化的行。

摘要把数字四舍五入到 4 位小数。空运行的计数为 0，平均值为 `null`。

每个结果行还带有 `answers`，这是一个以问题 ID 为键的扁平映射。每个值是所选的类别、分数或概率。`Flat answers` 数据集视图以及 CSV 或 Excel 导出会为每个问题显示 1 列。这些列就在帖子旁边，所以电子表格不需要解析 JSON。失败和跳过的行带有空映射。

## 与之前的运行比较

传入 `monitor.baselineDatasetId`，即之前一次已完成、分析设置相同的运行的数据集 ID。比较会读取那次运行的行，所以即使那次运行跳过了摘要，也能正常比较。之后每行都会多一个 `monitor` 对象。它的状态可能是：

- 没有基线时为 `first_run`。
- 之前的运行中没有的帖子为 `new_to_baseline`。
- 之前的运行中已有的帖子为 `unchanged` 或 `changed`。

`changes` 列出从 `previous` 变为 `current` 的每个立场、内容类型或信心程度。判断按类别、四舍五入后的分数等级，或以 0.5 为界的“是/否”结论来比较。只有判断明显变化时，才算已变化。两次运行之间接近持平的结果仍为 `unchanged`。

基线超过 `maxBaselineRows` 或来自不同设置时，运行会在收集前停止，并写入一条诊断行。`maxBaselineRows` 默认为 100,000。

## 任务示例

你可以从 50 个公开任务中选择。每个任务都从一个真实的英文搜索和有上限的 `maxItems` 开始，并包含现成的目标、上下文和概览数据集视图。运行前可以修改搜索或目标。

- [Nvidia (NVDA) 在 X 上的市场情绪](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/nvda-market-sentiment-on-x)
- [Tesla (TSLA) 在 X 上的市场情绪](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/tsla-market-sentiment-on-x)
- [Apple (AAPL) 在 X 上的市场情绪](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/aapl-market-sentiment-on-x)
- [Amazon (AMZN) 在 X 上的市场情绪](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/amzn-market-sentiment-on-x)
- [Microsoft (MSFT) 在 X 上的市场情绪](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/msft-market-sentiment-on-x)
- [Alphabet (GOOGL) 在 X 上的市场情绪](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/googl-market-sentiment-on-x)
- [Meta (META) 在 X 上的市场情绪](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/meta-market-sentiment-on-x)
- [AMD (AMD) 在 X 上的市场情绪](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/amd-market-sentiment-on-x)
- [Palantir (PLTR) 在 X 上的市场情绪](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/pltr-market-sentiment-on-x)
- [Coinbase (COIN) 在 X 上的市场情绪](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/coin-market-sentiment-on-x)
- [Strategy (MSTR) 在 X 上的市场情绪](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/mstr-market-sentiment-on-x)
- [Robinhood (HOOD) 在 X 上的市场情绪](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/hood-market-sentiment-on-x)

Actor 页面上的其余任务涵盖更多品牌、话题和市场。

## 相关 Xquik Actor

所有 Xquik Actor 都使用同一套提取引擎、先过滤后计费的规则和诊断功能。按你需要的数据选择对应的 Actor。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper)：从搜索、个人资料时间线、列表和帖子 ID 抓取帖子，提供 50 多个过滤条件和扁平导出。适合只要帖子数据、不做分析的场景。每行 $0.00015 起。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper)：从用户名、ID 或 URL 抓取个人资料，以及这些账号的帖子、回复、媒体和关注者。适合从账号而不是搜索入手的场景。每行 $0.00015 起。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper)：抓取帖子下的回复、评论和完整对话，提供 25 多个过滤条件。适合需要帖子下方讨论的场景。每行 $0.00015 起。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper)：按帖子 URL 或 ID 批量抓取回复、引用、转帖者和帖子串。适合衡量谁与帖子有过互动的场景。每行 $0.00015 起。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper)：抓取关注者、正在关注的账号、列表成员、订阅者和社群成员，输出为个人资料行。适合需要受众或成员名单的场景。每条个人资料 $0.00015 起。
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper)：按用户名、简介和位置搜索用户，可按关注者数、认证状态、账号年龄和位置过滤。适合通过搜索建立账号名单的场景。每条个人资料 $0.00015 起。
- [X List Scraper](https://apify.com/xquik/x-list-scraper)：从列表 URL 或 ID 抓取列表帖子、成员和关注者。适合用精选列表确定来源的场景。每行 $0.00015 起。
- [X Community Scraper](https://apify.com/xquik/x-community-scraper)：抓取社群信息、帖子、搜索结果、成员和版主。适合来源是 X 社群的场景。每行 $0.00015 起。
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper)：按位置抓取实时趋势，附带排名、帖子量、查询词和 WOEID。适合追踪各地热门话题的场景。每条趋势 $0.00015 起。
- [X Article Scraper](https://apify.com/xquik/x-article-scraper)：把长篇 X 文章抓取为 Markdown 和纯文本，附带封面、作者、日期和指标。适合需要文章正文而不是帖子的场景。每篇文章 $0.00015 起。
- [X Media Downloader](https://apify.com/xquik/x-media-downloader)：从帖子或个人资料提取或存储照片、视频和 GIF，可选 MP4 和元数据。适合需要媒体文件本身的场景。每条媒体行 $0.00015 起。
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring)：追踪品牌提及，用 AI 判断相关性和情感、回答客户体验问题，并比较各次运行。适合长期关注一个品牌的场景。每条已分析帖子 $0.0003 起。
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis)：用 AI 为每条帖子标注态度、强度和讽刺概率。适合了解任意话题整体情感的场景。每条已分析帖子 $0.0003 起。
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)：用 AI 按形式、来源标注和话题相关性标注新闻帖子。适合区分新闻报道和评论的场景。每条已分析帖子 $0.0003 起。
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)：用 AI 为每条帖子回答你自定义的分类、评分和是非问题。适合预设分析不符合你的标签的场景。每条已分析帖子 $0.0003 起。
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)：根据 8 个 AI 特征答案，为每条帖子估算 0 到 100 的 Viral Score 和结论。适合研究帖子为何走红或遇冷的场景。每条已分析帖子 $0.0003 起。

## 常见问题与支持

### 我需要 AI 账号、X API 密钥或登录吗？

不需要。Xquik 的 X (Twitter) Stock & Crypto AI Trading Signals 的价格已包含 AI 费用。你不需要 AI 账号、token 或密钥，也不需要 X API 密钥、登录或任何凭据。

### 一次运行可以追踪多个股票代码吗？

可以。把每项资产连同股票代码和别名列在 `analysis.targets` 下，并合并它们的搜索词。相关性答案会告诉你哪些帖子把你的目标当作资产讨论。

### 为什么某行的 `analysis.status` 是 `failed` 或 `skipped`？

该 Actor 已收集并交付这条帖子，但 AI 分析没有完成。`analysis.reason` 会写明原因。`context_limit` 表示你的上下文和目标没有给帖子留出空间。`service_unavailable` 表示分析服务曾短暂不可用。这些行不产生结果费用。请缩短 `analysis.context`，或重新运行受影响的 ID。

帖子超过 `maxContextBytes` 时，该 Actor 仍会分析它。它先截断被引用和被回复的帖子，再截断这条帖子本身。这时 `analysis.contextAvailability.postText` 为 `truncated`。要保留更多文本，可以把 `maxContextBytes` 提高到最多 64,000。

### 分析会核实事实吗？

不会。答案描述帖子表达了什么，以及帖子如何表述。概率表示 AI 的置信度，不代表事实。重要的分类结果请对照原始帖子核查，每行都保留了原帖。

### 支持哪些语言？

提取支持 X 提供的所有语言。我们先在英文客户场景中验证分析。其他支持的语言返回结构相同的答案。在每种语言中，`unclear` 类别和概率都会反映不确定性。

### 如何控制成本？

过滤、去重和 `maxItems` 都在分析之前生效。你只为不重复且符合过滤条件的帖子付费。使用精确的搜索运算符、日期范围和互动下限。大规模运行前，先用较小的 `maxItems` 检查答案质量。

### 分析 X 数据合法吗？

该 Actor 请求的是公开的 X 字段。结果可能包含个人数据。请确认用途合法，并遵守适用的隐私规定。不确定时，请咨询专业律师。

### 可以使用 API、定时调度和集成吗？

可以。[API 标签页](https://apify.com/xquik/x-twitter-stock-crypto-signals/api) 提供 Python、JavaScript 和 cURL 示例。用 Apify [定时调度](https://docs.apify.com/platform/schedules) 定期运行。把上一次的数据集 ID 作为 `monitor.baselineDatasetId` 传入，就能看到变化。Apify 集成还能把运行连接到 webhook、Make、Zapier、n8n 和 Google Sheets。

### 在哪里获取帮助？

在 Actor 页面提交 issue，或带上运行 ID 联系 support@xquik.com。键值存储中的免费诊断信息会说明运行为何为空、不完整或被中断。
