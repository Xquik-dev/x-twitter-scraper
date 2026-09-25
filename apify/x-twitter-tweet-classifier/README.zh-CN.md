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
<a href="https://youtu.be/4UOSpoOoC3Y?t=367"><img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" width="720" alt="Framer 将 Xquik MCP 连接到编码 Agent"></a><br>
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">观看 Framer 如何将 Xquik 抓取工具与 Claude Code、Codex、Cursor 等一起使用，从 6:07 开始。</a>
</td></tr></table>

Xquik 是速度最快、成本最低且数据最完整的 X（Twitter）抓取工具服务。X (Twitter) Tweet Classifier可为每条推文回答你自定义的标签、评分与是非问题。其他 Apify Actor 都在筛选或去重之前收费。Xquik只对已交付、唯一且符合筛选条件的结果收费。AI 费用已包含在每条推文的价格中。你无需 AI 账户、token 或密钥。

用你自己的问题对 X（Twitter）帖子进行分类，同时保留原始推文数据。**X Tweet Classifier with AI
Analysis** 会收集匹配的推文，然后为每条帖子回答 1 到 8 个类型化问题：用于客服分流的分类、
用于优先级排序的评分，以及用于相关性判断的概率。预设覆盖品牌监测、投诉、竞争对手、购买意向、
产品反馈、新闻、情感与市场情绪。自定义问题可替代预设。

- **类型化答案**，包含概率、置信度与问题版本。
- **你的问题，你的分类。** 每个问题最多支持 255 个分类。
- **完整的源记录**，保留推文暴露的每一个字段。
- **筛选优先计费。** 你只需为唯一、符合筛选条件且分析成功的推文付费。

## 如何用自定义问题对推文分类

1. 添加推文 URL、搜索词、主页用户名或推文 ID。
2. 设置 `maxItems` 与任务所需的提取筛选条件。
3. 在 `analysis.questions` 下添加你的问题，或通过 `analysis.preset` 选择预设。
4. 运行 Actor 并打开数据集。

支持的模式可收集推文、搜索结果、主页帖子、List、回复、引用推文与推文串。独立的文章提取
与用户列表不属于分类输入。

```json
{
  "searchTerms": ["\"need a recommendation\" headphones lang:en"],
  "maxItems": 20,
  "analysis": {
    "questions": [
      {
        "id": "buying",
        "type": "probability",
        "version": "1",
        "instructions": "Does the author want to buy headphones?"
      }
    ],
    "targets": [{ "name": "headphones", "aliases": ["headset"] }],
    "context": "Exclude advertisements aimed at other buyers."
  }
}
```

### 问题与限制

请提供 1 到 8 个问题，每个问题都要有唯一的 ID、说明与版本。

- `choice` 使用 2 到 255 个带描述或 null 值的命名 `categories`。
- `score` 使用一个有序的 `levels` 数组，至少包含 2 个描述。
- `probability` 返回 0 到 1 之间的值。可选的 `criteria` 包含 `yes` 与 `no` 描述。

预设包括：`brand`、`complaints`、`competitors`、`purchase_intent`、`product_feedback`、`news`、
`sentiment` 与 `market`。`maxContextBytes` 默认值为 12,000 字节。
更小的限制会跳过超大上下文而不做截断。`concurrency` 默认值为 16，可接受 1 到 16 之间的值。
每个问题定义都不能超过 8,000 字节的限额。

## 分析你自己的文本

将你自己的文本粘贴到 `texts` 中：草稿、回复、评价或笔记。Actor 会分析这些文本，
不会从 X 获取任何内容。

```json
{
  "texts": [
    "The new update is great, but sync still drops on mobile.",
    "Support fixed my issue in 10 minutes. Thank you."
  ]
}
```

- 每段文本生成 1 行，其 `analysis` 答案与推文相同。
- `tweet.id` 依次为 `text:1`、`text:2` 等，`tweet.type` 为 `text`。
- 每段已分析文本的费用与一条已分析推文相同，均为 $0.0003。
- 设置 `texts` 后，运行只分析这些文本。X 目标请另行运行。

## 定价

AI 费用已包含在每条推文的价格中。你无需 AI 账户、token 或密钥。

每条成功分析的推文起价 $0.0003，无启动费。价格包含收集环节。分析额度为每条推文 8 个问题、
每个问题定义 8,000 字节，以及 12,000 字节的上下文。提取筛选与去重在分析之前进行，
因此被筛掉与重复的行永远不会被分析或收费。分析失败、被跳过的分析与诊断行均不产生结果费用。Apify
会单独对平台使用量计费。Pricing 选项卡会显示该费用。

## 输入与输出示例

上方的输入可直接复制使用。输出行大致如下（已精简）：

```json
{
  "tweet": { "id": "2100344867507327087", "text": "…", "likeCount": 6409 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      {
        "questionId": "topic",
        "type": "choice",
        "value": "ai_safety",
        "confidence": 0.93
      },
      {
        "questionId": "disclosure",
        "type": "probability",
        "probability": 0.97
      },
      {
        "questionId": "specificity",
        "type": "score",
        "value": 2,
        "confidence": 0.88
      }
    ]
  }
}
```

每条结果都包含 `tweet` 与 `analysis`。答案包含类型、问题版本与可用的概率值。分析失败或
被跳过时，仍会保留已收集的推文，附带一个空的答案列表与一个 `reason`。键值存储中的免费
诊断信息会说明无效输入、缺失结果与被中断的收集情况，运行报告则会分别统计已收集行数、
已收费分析数与待收费数量。

## 运行摘要与扁平化答案

每次运行都会在键值存储中写入一条 `analysis-summary` 记录，并在运行报告的
`results.analysisSummary` 中重复该记录。它会统计已分析、失败与被跳过的行数，汇总互动数据，
并对每个问题进行摘要。每个自定义问题都有专属统计区块：choice 问题的分类计数与占比、score
问题的均值与各等级计数、是非问题的是与否计数。摘要会将数字四舍五入到 4 位小数。
空运行的计数报告为零，均值报告为 `null`。将 `analysis.preset` 设为 `brand`、`complaints`、
`purchase_intent`、`product_feedback`、`competitors`、`sentiment`、`market` 或 `news`
可运行内置分析视角而非自定义问题。此时摘要会按该视角逐个问题报告。每一行会列出
`sourceDomains`（其链接的域名）与 `cashtags`（其文本中出现的股票代码，如 `$NVDA`）。设置
`monitor.baselineDatasetId` 后，摘要中的 `monitor` 区块会统计对比状态并列出最多 50
条发生变化的行。

每条结果行还携带 `answers`，这是一个从问题 ID 到所选分类、评分或概率的扁平映射。`Flat
answers` 数据集视图以及 CSV 或 Excel 导出会在推文旁为每个问题显示单独一列，无需在电子
表格中解析 JSON。失败或被跳过的行携带空映射。

## 与早期运行对比

传入 `monitor.baselineDatasetId`，即使用相同分析设置的早期已完成运行的数据集 ID。每一行都会获得一个 `monitor` 对象。其状态在没有基线时为 `first_run`，早期运行没有的推文为`new_to_baseline`，早期运行已有的推文为 `unchanged` 或 `changed`。`changes` 会列出你的问题中从`previous` 变为 `current` 的每个决策变化。决策对比按分类、四舍五入后的评分等级或以 0.5为界的是非判断进行。只有判断发生明显变化时才计为已更改。多次运行之间的临界抖动会保持为不变。超过 `maxBaselineRows`（默认100,000）的基线，或来自不同设置的基线，会在收集之前停止运行并写入一条诊断行。

## 任务示例

可从 50 个公开任务中选择。每个任务都从真实的英文搜索开始，配有限定的 `maxItems`、
现成的自定义问题与总览数据集视图。运行前可编辑搜索词或问题。

- [Triage customer support requests on X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/triage-support-requests-on-x)
- [Score sales leads from X posts](https://apify.com/xquik/x-twitter-tweet-classifier/examples/score-sales-leads-from-x-posts)
- [Detect service outage reports on X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/detect-outage-reports-on-x)
- [Classify hiring signals on X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-hiring-signals-on-x)
- [Tag product feature requests on X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/tag-feature-requests-on-x)
- [Classify app feedback like store reviews](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-app-store-style-feedback)
- [Detect scam and fraud warnings on X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/detect-scam-warnings-on-x)
- [Classify event attendance intent](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-event-attendance-intent)
- [Extract restaurant review signals](https://apify.com/xquik/x-twitter-tweet-classifier/examples/extract-restaurant-review-signals)
- [Separate crypto promotion from analysis](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-crypto-scam-vs-analysis)
- [Classify persuasive political posts](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-political-ad-style-posts)
- [Detect subscription churn risk signals](https://apify.com/xquik/x-twitter-tweet-classifier/examples/detect-churn-risk-signals)

Actor 页面上还有更多任务，覆盖更多工作流。

## 相关 Xquik Actor

每个 Xquik Actor 共享相同的提取引擎与筛选优先的计费与诊断机制。请选择与你所需数据匹配的一款。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper)：从搜索、主页时间线、List 与推文 ID
  中抓取推文，提供 50 多种筛选条件与扁平化导出。适合只需要推文数据而无需分析的场景。
  起价每行 $0.00015。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper)：从
  用户名、ID 或 URL 抓取主页及其帖子、回复、媒体和关注者。适用于从账户
  出发而非从搜索出发的场景。起价为每行 $0.00015。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper)：抓取帖子下的回复、评论与完整对话，
  提供 25 多种筛选条件。适合需要获取推文下方讨论内容的场景。起价每行 $0.00015。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper)：
  批量抓取帖子 URL 或 ID 对应的回复、引用、转推者及推文串。
  适用于衡量谁与帖子产生了互动。起价为每行 $0.00015。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper)：以主页行形式抓取关注者、
  关注对象、List 成员、订阅者与 Community 成员。适合需要受众或成员列表的场景。
  起价每个主页 $0.00015。
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper)：按用户名、简介与位置
  搜索用户，支持关注者数、认证状态、账号年龄与位置筛选。适合从搜索构建账号列表的场景。
  起价每个主页 $0.00015。
- [X List Scraper](https://apify.com/xquik/x-list-scraper)：从 List 的 URL 或 ID 抓取 List 帖子、
  成员与关注者。适合由精选 List 定义数据来源的场景。起价每行 $0.00015。
- [X Community Scraper](https://apify.com/xquik/x-community-scraper)：抓取 Community 信息、帖子、
  搜索结果、成员与管理员。适合数据来源为 X Community 的场景。起价每行 $0.00015。
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper)：按位置抓取实时趋势，包含排名、
  热度、搜索词与 WOEID。适合追踪各地热门话题的场景。起价每条趋势 $0.00015。
- [X Article Scraper](https://apify.com/xquik/x-article-scraper)：以 Markdown 与文本形式抓取长篇
  X Article，包含封面、作者、日期与指标。适合需要文章正文而非推文的场景。起价每篇文章 $0.00015。
- [X Media Downloader](https://apify.com/xquik/x-media-downloader)：从帖子或主页中提取或存储照片、
  视频与 GIF，提供 MP4 与元数据选项。适合需要媒体文件本身的场景。起价每条媒体行 $0.00015。
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring)：
  通过 AI 相关性、情感与客户体验回答追踪品牌提及，并对比多次运行结果。适合持续关注品牌动态的场景。
  起价每条分析推文 $0.0003。
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis)：通过 AI
  为每条推文标注态度、强度与讽刺概率。适合需要对任意话题进行通用情感分析的场景。
  起价每条分析推文 $0.0003。
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)：
  通过 AI 标注看涨、看跌、中性或混合立场、内容类型、信心程度与资产相关性。适合关注股票、加密货币
  或交易讨论的场景。起价每条分析推文 $0.0003。
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)：通过 AI
  按格式、来源归属与话题相关性标注新闻类帖子。适合区分报道与评论的场景。
  起价每条分析推文 $0.0003。
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)：
  根据 8 个 AI 特征回答，为每条推文估算 0 到 100 的 Viral Score 及一个结论。
  适用于研究推文为何传播或遇冷的场景。起价为每条分析推文 $0.0003。

## 常见问题与支持

### 问题版本重要吗？

重要。每个答案都会存储你为其问题设置的 `version`。后续优化问题时，
你可以分辨是哪种表述产生了该结果。

### 为什么某一行返回的 `analysis.status` 是 `failed` 或 `skipped`？

Actor 已收集并交付该推文，但 AI 分析未能完成。`analysis.reason` 会说明原因，例如推文及其上下文超过 `maxContextBytes` 时会显示 `context_limit`，或分析服务暂时不可用时的 `service_unavailable`。这些行不产生结果费用。可提高 `maxContextBytes`（最高 12,000）或重新运行受影响的 ID。

### 分析会核实事实吗？

不会。答案描述的是帖子表达的内容，以及帖子如何表达该内容。概率反映的是模型置信度，而非事实真相。
请对照每一行都保留的原始推文，审核重要的分类结果。

### 支持哪些语言？

提取支持 X 提供的所有语言。我们首先在英文客户场景中验证分析。其他受支持语言返回的答案结构相同。
`unclear` 分类与概率会在每种语言中体现不确定性。

### 如何控制成本？

筛选、去重与 `maxItems` 在分析之前执行，因此 Actor 只分析唯一且符合筛选条件的推文，
也只对这些推文收费。请使用精确的搜索运算符、日期范围与互动量下限，并先用较小的 `maxItems`
检查答案质量，再进行大规模运行。

### 在哪里获取帮助？

请在 Actor 页面提交 issue，或通过 support@xquik.com 联系支持并附上运行 ID。键值存储中的
免费诊断信息会说明空结果、部分结果或被中断的运行。

Xquik 是独立的第三方服务，与 X Corp 无关联。"Twitter" 与 "X" 是 X Corp 的商标。
