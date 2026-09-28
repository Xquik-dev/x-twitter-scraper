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

Xquik 是全球最快、最便宜的 X（Twitter）抓取服务，X 数据也最完整。Xquik 的 X (Twitter) Brand Monitoring 追踪你的品牌提及，并给出相关性、情感和客户体验答案。其他大多数 Apify Actor 在过滤或去重之前就开始收费。Xquik 只对已交付、不重复且符合过滤条件的结果收费。AI 费用已包含在每条帖子的价格中。你不需要 AI 账号、token 或密钥。

监测 X（Twitter）上的品牌提及，并追踪两次运行之间的情感变化。Xquik 的 **X (Twitter) Brand Monitoring with AI Analysis** 收集每条匹配的帖子（推文），并用 AI 为每条帖子回答相关性、情感和客户体验问题。它会把这些答案与之前的数据集比较，让你看到哪些变了。每行都保留原始帖子数据。导出、复核和后续分析都不需要再抓一次。

关注一个品牌、一条产品线或一场营销活动中的投诉、称赞和购买咨询。用真实帖子给客服和市场团队做简报。保留客户在每次运行中谈论你的记录。

- **源帖子的每个字段。** 正文、作者、计数、媒体、链接，以及被引用和被回复的帖子，都和答案放在一起。
- **类型化答案。** 每行都有相关性概率、带概率的情感类别，以及客户体验类别。
- **变化追踪。** 运行之间按判断比较，所以概率的小幅波动不算变化。
- **先过滤后计费。** 你只为不重复、符合过滤条件且分析成功的帖子付费。

> Xquik 是独立的第三方服务，与 X Corp 无关联。“Twitter”和“X”是 X Corp 的商标。

## 如何在 X 上监测品牌

1. 添加搜索词、个人资料用户名、帖子 URL 或帖子 ID。例如搜索 `(Sony OR "WH-1000XM5") headphones lang:en`。
2. 设置 `maxItems` 和任务需要的提取过滤条件，例如日期范围、最少喜欢数和排除回复。
3. 把品牌名称和别名放进 `analysis.targets`，并在 `analysis.context` 中描述这个品牌。
4. 开始运行，然后记下数据集 ID，供下次比较。
5. 下次运行时，用这个 ID 添加 `monitor.baselineDatasetId`。保持问题、目标、上下文和上下文限制不变，答案才能比较。比较读取的是那个数据集，所以即使那次运行跳过了摘要，也能正常比较。

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

目标用于引导分类。它们不会生成搜索查询，也不会移除无关的帖子。请选择符合你研究需要的搜索词和过滤条件。

### 监测回答什么

| 问题 | 答案 |
| --- | --- |
| 品牌相关性 | 帖子讨论你的目标的概率 |
| 情感 | 积极、消极、混合、中性或不明确 |
| 客户体验 | 客户、潜在客户、旁观者或不明确 |

用相关性概率复核容易混淆的同名对象。情感描述作者对目标表达出的态度。

### 比较如何进行

| 比较状态 | 含义 |
| --- | --- |
| `first_run` | 没有提供基线 |
| `new_to_baseline` | 基线中没有这个帖子 ID |
| `unchanged` | 每个可比较的判断都一致 |
| `changed` | 至少有 1 个判断不同 |
| `not_comparable` | 缺少必需的元数据、ID 或匹配的设置 |
| `analysis_unavailable` | 这条帖子没有成功的分析 |

答案按判断比较。`choice` 答案按类别比较。`score` 答案按最接近的等级比较。`probability` 答案按以 0.5 为界的“是/否”结论比较。只有判断明显变化时，才算已变化。两次运行之间接近持平的结果仍为 `unchanged`，判断不变的波动也一样。所以，两次运行之间 AI 的细微差异不会显示为变化。

`changes` 列出每个已变化的问题，以及它的 `previous` 和 `current` 判断。变化可能来自 AI 的波动、新的上下文或被编辑的源数据。变化不能证明事实改变了，某条帖子缺失也不能证明它被删除。

基线上限 `maxBaselineRows` 默认为 100,000 行。重复的帖子 ID、加载失败和数据集大小变化都会让比较在收集前停止，而不会变成空基线。

## 分析你自己的文本

把你自己的草稿、回复、评价或笔记粘贴到 `texts` 中。Xquik 的 X (Twitter) Brand Monitoring 会分析这些文本，不会从 X 获取任何内容。

```json
{
  "texts": [
    "The new update is great, but sync still drops on mobile.",
    "Support fixed my issue in 10 minutes. Thank you."
  ]
}
```

- 每段文本生成 1 行，`analysis` 答案与帖子相同。
- `tweet.id` 依次为 `text:1`、`text:2` 等，`tweet.type` 为 `text`。
- 每段已分析文本的费用与一条已分析帖子相同，都是 $0.0003。
- 设置 `texts` 后，运行只分析这些文本。X 目标请另外运行。

## 在 X 上监测品牌要花多少钱？

Xquik 的 X (Twitter) Brand Monitoring 每条已分析帖子 $0.0003 起，不收启动费。价格包含收集和 AI 费用。你不需要 AI 账号、token 或密钥。这个价格涵盖每条帖子最多 8 个问题和 64,000 字节的上下文。每个问题定义最多可用 8,000 字节。

提取过滤和去重在分析之前进行。被过滤的行和重复行都不收费。失败的分析、跳过的分析和诊断行不产生结果费用。Apify 会按你套餐的费率，另行收取计算、存储和传输的平台使用费。Pricing 标签页会显示这部分费用。

## 输入与输出示例

上面的输入可以直接复制使用。一行省略后的输出如下：

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

每条结果都包含 `tweet`、`analysis` 和 `monitor`。答案包括类型、问题版本和可用的概率。`analysis.contextAvailability` 报告缺失的引用、回复、作者和媒体上下文。分析失败或被跳过的行会保留已收集的帖子和一个 `reason`，答案列表为空。

键值存储中的免费诊断信息会说明无效输入、缺失结果和中断的收集。运行报告把已收集的行、已收费的分析和待收取的费用分开列出。

## 运行摘要与扁平答案

运行在以下 4 种情况下，会向键值存储写入一条 `analysis-summary` 记录：

- 运行遇到问题或规模较大。
- 设置了 `monitor` 但没有 `baselineDatasetId`，即系列中的第一次运行。
- 比较发现了已变化、新增或无法比较的帖子。
- 开启了 `alwaysSaveRunRecords`。

其他运行会跳过这条记录。它们的状态会写明占比最高的答案，例如 `Top sentiment: negative in 2 of 5 results.`。没有变化的比较会显示 `No change since the earlier run.`。运行遇到问题或规模较大时，还会写入 `run-report`。开启 `alwaysSaveRunRecords` 的运行也会写入。`run-report` 会在 `results.analysisSummary` 下重复这份摘要。

摘要统计已分析、失败和跳过的行，汇总互动数据，并总结每个问题。

- `targets` 报告每个品牌或别名的提及数、声量占比和互动数据。
- 每个 `targets` 条目都有 `top`，列出每个答案类别下互动最多的 3 条提及。可以用它为最强烈的负面和正面提及设置提醒。
- 每个 `targets` 条目都有 `choices`，即提及该品牌的帖子中的答案分布。
- `sentiment` 块在 `top` 下列出互动最多的 3 条正面提及和负面提及。
- `relevance` 统计与品牌相关的提及。
- `monitor.changedRows` 列出自基线以来判断发生变化的帖子。可以把它们发到 webhook 或提醒中。
- 设置 `monitor.baselineDatasetId` 时，`monitor` 块会统计比较状态，并列出最多 50 个已变化的行。
- 每行都列出 `sourceDomains`，即它链接到的主机名。

摘要把数字四舍五入到 4 位小数。空运行的计数为 0，平均值为 `null`。

每个结果行还带有 `answers`，这是一个以问题 ID 为键的扁平映射。每个值是所选的类别、分数或概率。`Flat answers` 数据集视图以及 CSV 或 Excel 导出会为每个问题显示 1 列。这些列就在帖子旁边，所以电子表格不需要解析 JSON。失败和跳过的行带有空映射。

## 任务示例

你可以从 50 个公开任务中选择。每个任务都从一个真实的英文搜索和有上限的 `maxItems` 开始，并包含现成的目标、上下文和概览数据集视图。运行前可以修改搜索或目标。

- [监测 Nike 在 X 上的品牌提及](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-nike-brand-mentions-on-x)
- [监测 Starbucks 在 X 上的品牌提及](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-starbucks-brand-mentions-on-x)
- [监测 Tesla 在 X 上的品牌提及](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-tesla-brand-mentions-on-x)
- [监测 Spotify 在 X 上的品牌提及](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-spotify-brand-mentions-on-x)
- [监测 Netflix 在 X 上的品牌提及](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-netflix-brand-mentions-on-x)
- [监测 Airbnb 在 X 上的品牌提及](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-airbnb-brand-mentions-on-x)
- [监测 Uber 在 X 上的品牌提及](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-uber-brand-mentions-on-x)
- [监测 Peloton 在 X 上的品牌提及](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-peloton-brand-mentions-on-x)
- [监测 Shopify 在 X 上的品牌提及](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-shopify-brand-mentions-on-x)
- [监测 Notion 在 X 上的品牌提及](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-notion-brand-mentions-on-x)
- [监测 Duolingo 在 X 上的品牌提及](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-duolingo-brand-mentions-on-x)
- [监测 Lululemon 在 X 上的品牌提及](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-lululemon-brand-mentions-on-x)

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
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis)：用 AI 为每条帖子标注态度、强度和讽刺概率。适合了解任意话题整体情感的场景。每条已分析帖子 $0.0003 起。
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)：用 AI 标注看涨、看跌、中性或混合立场，以及内容类型、信心程度和资产相关性。适合关注股票、加密货币或交易讨论的场景。每条已分析帖子 $0.0003 起。
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)：用 AI 按形式、来源标注和话题相关性标注新闻帖子。适合区分新闻报道和评论的场景。每条已分析帖子 $0.0003 起。
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)：用 AI 为每条帖子回答你自定义的分类、评分和是非问题。适合预设分析不符合你的标签的场景。每条已分析帖子 $0.0003 起。
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)：根据 8 个 AI 特征答案，为每条帖子估算 0 到 100 的 Viral Score 和结论。适合研究帖子为何走红或遇冷的场景。每条已分析帖子 $0.0003 起。

## 常见问题与支持

### 我需要 AI 账号、X API 密钥或登录吗？

不需要。Xquik 的 X (Twitter) Brand Monitoring 的价格已包含 AI 费用。你不需要 AI 账号、token 或密钥，也不需要 X API 密钥、登录或任何凭据。

### 可以使用自己的问题吗？

可以。自定义的 `analysis.questions` 会替换默认问题。可以发送 1 到 8 个 `choice`、`score` 或 `probability` 问题。选择题接受 2 到 255 个类别。评分题至少需要 2 个有序等级。要比较的多次运行请保持问题不变。

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

可以。[API 标签页](https://apify.com/xquik/x-twitter-brand-monitoring/api) 提供 Python、JavaScript 和 cURL 示例。用 Apify [定时调度](https://docs.apify.com/platform/schedules) 定期运行。把上一次的数据集 ID 作为 `monitor.baselineDatasetId` 传入，就能看到变化。Apify 集成还能把运行连接到 webhook、Make、Zapier、n8n 和 Google Sheets。

### 在哪里获取帮助？

在 Actor 页面提交 issue，或带上运行 ID 联系 support@xquik.com。键值存储中的免费诊断信息会说明运行为何为空、不完整或被中断。
