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

# X (Twitter) Brand Monitoring with AI Analysis | $0.3/1K Tweets

<table align="center"><tr><td align="center">
<a href="https://youtu.be/4UOSpoOoC3Y?t=367"><img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" width="720" alt="Framer 将 Xquik MCP 连接到编程 agent"></a><br>
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">观看 Framer 如何搭配 Claude Code、Codex、Cursor 等使用 Xquik 抓取工具，从 6:07 开始。</a>
</td></tr></table>

Xquik 是全球最快、最便宜的 X（Twitter）抓取工具服务，拥有最完整的 X
数据，X (Twitter) Brand Monitoring 以相关性、情感与客户体验答案追踪你的
品牌提及。其他所有 Apify Actor 都在过滤或去重之前就收费。Xquik 只为交付的、
唯一的、符合过滤条件的结果收费。

监测 X（Twitter）上的品牌提及，并追踪运行之间的情感变化。
**X (Twitter) Brand Monitoring with AI Analysis** 收集每条匹配的推文，为
每条帖子添加 AI 驱动的相关性、情感与客户体验答案，并与更早的数据集比较
答案，让你看到发生了什么变化。原始推文数据保留在每一行中，因此导出、
审查与后续分析都无需二次抓取。

用它来观察品牌、产品线或活动的投诉、赞誉与购买咨询；用真实帖子而非汇总
分数为支持与市场团队提供简报；并保留一份运行间的历史记录，了解客户如何
谈论你。

- **原始推文的每个字段**都与答案并列保存：文本、作者、计数、媒体、链接、
  被引用与被回复的帖子。
- **带类型的答案**：相关性概率、带概率的情感类别、客户体验类别。
- **按判断而非概率噪音**追踪运行之间的变化。
- **先过滤后计费**：只有唯一的、符合过滤条件且分析成功的推文才会收费。

## 如何在 X 上监测品牌

1. 添加搜索词（例如 `"Acme headphones" lang:en`）、主页用户名、推文链接
   或推文 ID。
2. 设置 `maxItems` 以及任务所需的提取过滤条件，例如日期范围、最低点赞数
   或排除回复。
3. 在 `analysis.targets` 中填入你的品牌名称与别名，并在 `analysis.context`
   中描述该品牌。
4. 运行 Actor，然后保留数据集 ID 用于下一次比较。
5. 在下一次运行中，添加带有该 ID 的 `monitor.baselineDatasetId`。保持
   问题、目标、上下文与上下文限制不变，以便答案可比较。

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

目标用于指导分类。它们不会自动创建搜索查询或移除无关推文，因此请选择
与你的研究相匹配的搜索词与过滤条件。

### 监测回答的问题

| 问题       | 答案                                     |
| ---------- | ---------------------------------------- |
| 品牌相关性 | 该推文讨论你的目标的概率                 |
| 情感       | 积极、消极、混合、中性或不明确           |
| 客户体验   | 客户、潜在客户、旁观者或不明确           |

用相关性概率来审查含糊的同名情况。情感描述的是作者对目标表达出的态度。

### 比较如何运作

| 比较状态                | 含义                                       |
| ----------------------- | ------------------------------------------ |
| `first_run`              | 未提供基线                                 |
| `new_to_baseline`        | 该推文 ID 不存在于基线中                   |
| `unchanged`              | 所有可比较的判断都一致                     |
| `changed`                | 至少 1 个判断不同                          |
| `not_comparable`         | 缺少必需的元数据、ID 或匹配设置            |
| `analysis_unavailable`   | 该推文没有成功的分析结果                   |

答案按判断进行比较：`choice` 答案按类别比较，`score` 答案按最接近的等级
比较，`probability` 答案按 0.5 处的是否判断比较。只有当答案明确发生变化
时才计为已更改：更早的类别概率降到 0.4 以下、分数移动至少 0.6 个等级，
或是否概率与阈值相差至少 0.1。运行之间的临界抖动视为未变化。保持相同
判断的变化仍算 `unchanged`，因此运行之间的模型波动不会淹没你的报告。
`changes` 列出每个已更改的问题及其 `previous` 与 `current` 判断。变化
可能反映模型波动、新的上下文或被编辑的原始数据；它们不能证明事实已经
改变，缺失的推文也不能证明该推文已被删除。

基线上限默认为 100,000 行。重复的推文 ID、加载失败与变化的数据集大小
会在收集之前停止比较，绝不会产生空基线。

## 定价

每成功分析一条推文起价 $0.0003，无起步费用。收集费用已包含在内，文档化的
分析额度为 8 个问题、每个问题定义 8,000 字节、每条推文 12,000 字节上下文。
提取过滤与去重在分析之前运行，因此被过滤掉的行与重复行永远不会被分析或
收费。失败、跳过的分析以及诊断行不产生结果费用。Apify 平台使用量（计算、
存储与传输）由 Apify 按你的方案费率单独计费，显示在 Pricing 标签页中。

## 输入与输出示例

上方输入可直接复制使用。输出行如下所示（已省略部分内容）：

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

每条结果包含 `tweet`、`analysis` 与 `monitor`。答案包括类型、问题版本
及可用概率。缺失的引用、回复、作者与媒体上下文会在
`analysis.contextAvailability` 下明确标出。失败或跳过的分析会保留已
收集的推文，答案列表为空并附带 `reason`。key-value store 中的免费诊断
信息会说明无效输入、缺失结果与中断的收集，运行报告会将已收集的行、
已收费的分析与待收费项分开列出。

## 运行摘要与扁平化答案

每次运行都会向其 key-value store 写入一条 `analysis-summary` 记录，并在
运行报告中的 `results.analysisSummary` 下重复该记录。它统计已分析、
失败与跳过的行数，汇总互动数据，并对每个问题作出总结。`targets` 报告
每个品牌或别名的提及数、声量占比与互动数据，每个条目的 `top` 列出该答案
类别下互动最多的三条提及，因此每个品牌最强烈的负面与正面提及都能立即
用于提醒。`sentiment` 块在 `top` 下列出互动最多的三条正面与负面提及，
可直接用于提醒，`relevance` 统计与该品牌相关的提及数。数字四舍五入到
4 位小数；空运行报告零计数，均值为 `null`。每个 `targets` 条目还带有
`choices`（提及该品牌的推文中的答案拆分），`monitor.changedRows` 列出
自基线以来判断发生变化的推文，可直接用于 webhook 或提醒。每一行还列出
`sourceDomains`（其链接指向的主机名），摘要的 `monitor` 块统计比较状态，
并在设置了 `monitor.baselineDatasetId` 时列出最多 50 行变化。

每条结果行还带有 `answers`，这是从问题 ID 到所选类别、分数或概率的扁平化
映射。`Flat answers` 数据集视图以及 CSV 或 Excel 导出会在推文旁为每个
问题显示一列，因此电子表格无需解析 JSON。失败与跳过的行携带空映射。

## 任务示例

从 50 个公开任务中选择。每个任务都从一个真实的英文搜索开始，配有受限的
`maxItems`、现成的目标与上下文，以及概览数据集视图。运行前可编辑搜索或
目标。

- [Monitor Nike brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-nike-brand-mentions-on-x)
- [Monitor Starbucks brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-starbucks-brand-mentions-on-x)
- [Monitor Tesla brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-tesla-brand-mentions-on-x)
- [Monitor Spotify brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-spotify-brand-mentions-on-x)
- [Monitor Netflix brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-netflix-brand-mentions-on-x)
- [Monitor Airbnb brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-airbnb-brand-mentions-on-x)
- [Monitor Uber brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-uber-brand-mentions-on-x)
- [Monitor Peloton brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-peloton-brand-mentions-on-x)
- [Monitor Shopify brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-shopify-brand-mentions-on-x)
- [Monitor Notion brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-notion-brand-mentions-on-x)
- [Monitor Duolingo brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-duolingo-brand-mentions-on-x)
- [Monitor Lululemon brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-lululemon-brand-mentions-on-x)

其余任务在 Actor 页面上涵盖更多品牌、话题与市场。

## 相关 Xquik Actor

每个 Xquik Actor 都共享同一套提取引擎、先过滤后计费的规则与诊断机制。
选择与你所需数据匹配的那一个。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper)：从搜索、主页
  时间线、List 与推文 ID 抓取推文，提供 50 多种过滤条件与扁平化导出。当你
  只需要推文数据而无需分析时使用。每行起价 $0.00015。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper)：从用户名、
  ID 或链接抓取主页及其帖子、回复、媒体与点赞。当你从账号而非搜索出发时
  使用。每行起价 $0.00015。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper)：抓取帖子下的
  回复、评论与完整对话，提供 25 多种过滤条件。当你需要推文下方的讨论时
  使用。每行起价 $0.00015。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper)：批量
  抓取帖子链接或 ID 对应的回复、引用推文、转推者、点赞者与推文串。当你要
  衡量谁与帖子互动过时使用。每行起价 $0.00015。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper)：以主页
  行的形式抓取关注者、正在关注、List 成员、订阅者与 Community 成员。当你
  需要受众或成员列表时使用。每个主页起价 $0.00015。
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper)：
  按用户名、简介与地区搜索用户，支持关注者数、认证状态、账号年龄与地区
  过滤。当你要从搜索构建账号列表时使用。每个主页起价 $0.00015。
- [X List Scraper](https://apify.com/xquik/x-list-scraper)：从 List 链接或
  ID 抓取 List 帖子、成员与关注者。当你的数据来源由一个精选 List 决定时
  使用。每行起价 $0.00015。
- [X Community Scraper](https://apify.com/xquik/x-community-scraper)：抓取
  Community 信息、帖子、搜索结果、成员与管理员。当你的数据来源是 X
  Community 时使用。每行起价 $0.00015。
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper)：按地区抓取
  实时趋势，包含排名、热度、查询词与 WOEID。当你要追踪各地正在流行什么时
  使用。每条趋势起价 $0.00015。
- [X Article Scraper](https://apify.com/xquik/x-article-scraper)：以
  Markdown 与文本形式抓取长文 X Article，包含封面、作者、日期与指标。当你
  需要文章正文而非推文时使用。每篇文章起价 $0.00015。
- [X Media Downloader](https://apify.com/xquik/x-media-downloader)：从帖子
  或主页提取或存储照片、视频与 GIF，提供 MP4 与元数据选项。当你需要媒体
  文件本身时使用。每个媒体行起价 $0.00015。
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis)：
  用 AI 为每条推文标注态度、强度与讽刺概率。当你需要针对任意话题的通用
  情感分析时使用。每条已分析推文起价 $0.0003。
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)：
  用 AI 标注看涨、看跌、中性或混合立场、内容类型、信念强度与资产相关性。
  当你要关注股票、加密货币或交易讨论时使用。每条已分析推文起价 $0.0003。
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)：
  用 AI 按形式、来源归属与话题相关性标注新闻帖子。当你要把报道与评论区分
  开时使用。每条已分析推文起价 $0.0003。
- [X (Twitter) Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)：
  用 AI 为每条推文回答你自己定义的类别、分数与是否问题。当预设分析不适合
  你的标签体系时使用。每条已分析推文起价 $0.0003。

## 常见问题与支持

### 我可以使用自己的问题吗？

可以。自定义 `analysis.questions` 会替换默认问题：1 到 8 个 `choice`、
`score` 或 `probability` 类型的问题。选择题类问题接受 2 到 255 个类别；
分数题至少使用 2 个有序等级。若要比较多次运行，请在各次运行中保持相同
问题。

### 为什么某一行返回的 `analysis.status` 是 `failed` 或 `skipped`？

该推文已被收集并交付，但 AI 驱动的分析未能完成。`analysis.reason` 会说明
原因，例如推文及其上下文超过 `maxContextBytes` 时的 `context_limit`，或
重试后仍失败的 `service_unavailable`。这些行不产生结果费用。提高
`maxContextBytes`（最多 12,000）或重新运行受影响的 ID。

### 分析会核实事实吗？

不会。答案描述的是帖子表达了什么、以及如何被表述，概率表达的是模型置信度，
而非事实真伪。请对照每一行都保留的原始推文，核查重要的分类结果。

### 支持哪些语言？

提取支持 X 提供的所有语言。分析首先在英文客户场景中得到验证；其他受支持
的语言会返回结构相同的答案，不确定性通过 `unclear` 类别与概率明确体现。

### 如何控制成本？

过滤、去重与 `maxItems` 都在分析之前运行，因此只有唯一的、符合过滤条件的
推文才会被分析并收费。使用精确的搜索操作符、日期范围与互动下限，并先用
较小的 `maxItems` 检查答案质量，再进行大规模运行。

### 在哪里获取帮助？

在 Actor 页面上提交 issue，或联系 support@xquik.com 并附上运行 ID。
key-value store 中的免费诊断信息会说明空、部分完成或中断的运行。

Xquik 是独立的第三方服务，与 X Corp 没有关联。
“Twitter” 与 “X” 是 X Corp 的商标。
