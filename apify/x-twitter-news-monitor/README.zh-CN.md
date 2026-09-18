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
<a href="https://youtu.be/4UOSpoOoC3Y?t=367"><img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" width="720" alt="Framer 将 Xquik MCP 连接到编程 agent"></a><br>
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">观看 Framer 如何搭配 Claude Code、Codex、Cursor 等使用 Xquik 抓取工具，从 6:07 开始。</a>
</td></tr></table>

Xquik 是全球最快、最便宜的 X（Twitter）抓取工具服务，拥有最完整的 X 数据。X
(Twitter) News Monitor 按形式、来源归属与相关性对新闻帖子进行分类。其他所有
Apify Actor 都在过滤或去重之前就收费。Xquik 只为交付的、唯一的、符合过滤条件的
结果收费。AI 费用已包含在每条推文的价格中。你无需向 AI 提供商付费、无需购买
token，也无需自带密钥。

按新闻帖子的性质对其分类，并保留原始推文数据。**X (Twitter) News Monitor with
AI Analysis** 收集关于你所关注话题的帖子，然后为每条帖子添加 AI 驱动的形式、来
源归属与相关性答案。把报道与评论、猜测区分开。查看帖子是否具名或链接了来源。只
保留与你所追踪的组织、人物或话题相关的帖子。

- **形式**区分报道、评论、猜测、推广与讽刺。
- **归属**显示某个说法是具名来源、链接来源、第一手信息，还是没有来源。
- **相关性**保留与你的目标有关的帖子，去除同名干扰。
- **完整的原始记录**，包含该推文暴露的每个字段，以及可用时的链接文章。

## 如何对 X 上的新闻帖子分类

1. 添加搜索词，例如 `Nvidia earnings lang:en -filter:retweets`、新闻账号
   用户名或推文 ID。
2. 设置 `maxItems` 以及提取过滤条件，例如日期范围、`filter:news` 或最低
   转发数。
3. 在 `analysis.targets` 中填入你所追踪的组织、人物或话题及其别名，并在
   `analysis.context` 中缩小话题范围。
4. 运行 Actor 并打开数据集。

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

### Actor 回答的问题

| 问题   | 答案                                                     |
| ------ | --------------------------------------------------------- |
| 形式   | 报道、评论、猜测、推广、讽刺、无关或不明确                 |
| 归属   | 具名、链接、第一手、缺失或不明确                           |
| 相关性 | 所报道事件与你的目标相关的概率                             |

分类不核实事实。具名来源不代表是可信来源。归属描述的是帖子所呈现的内容。

## 定价

AI 费用已包含在每条推文的价格中。你无需向 AI 提供商付费、无需购买 token，也无需自带密钥。

每成功分析一条推文起价 $0.0003，无起步费用。价格已包含收集费用。分析额度为 8
个问题、每个问题定义 8,000 字节、每条推文 12,000 字节上下文。提取过滤与去重在
分析之前运行，因此被过滤掉的行与重复行永远不会被分析或收费。失败、跳过的分析以
及诊断行不产生结果费用。Apify 会单独收取平台使用费。Pricing 标签页会显示该费
用。

## 输入与输出示例

上方输入可直接复制使用。输出行如下所示（已省略部分内容）：

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

每条结果都包含 `tweet` 与 `analysis`。答案包括类型、问题版本及可用概率。当某条
帖子链接了一篇 X Article 时，分析会抓取该文章的标题、预览与文本块作为上下文。
`analysis.contextAvailability.article` 会报告 `text_blocks`、`summary` 或
`not_supplied`。`summary` 表示仅有标题与预览。失败或跳过的分析会保留已收集的推
文，答案列表为空并附带 `reason`。key-value store 中的免费诊断信息会说明无效输
入、缺失结果与中断的收集，运行报告会将已收集的行、已收费的分析与待收费项分开列
出。

## 运行摘要与扁平化答案

每次运行都会向其 key-value store 写入一条 `analysis-summary` 记录，并在运行报
告中的 `results.analysisSummary` 下重复该记录。它统计已分析、失败与跳过的行
数，汇总互动数据，并对每个问题作出总结。

- `format` 拆分把报道与评论、猜测、推广与讽刺区分开。
- `attribution` 统计具名、链接、第一手与缺失来源的数量。
- `relevance` 统计与每个目标相关的帖子数。
- `targets` 给出每个目标的提及数。每个目标的 `top` 列出各答案类别下互动最多的
  帖子。
- 每个 `targets` 条目带有 `choices`，即与该目标相关帖子的形式与归属拆分。
- `sourceDomains` 统计本次运行中链接到的域名。
- `monitor.changedRows` 列出自基线以来判断发生变化的帖子。

每一行都列出 `sourceDomains`，即其链接指向的主机名，以及文本中发现的 `$NVDA`
这类 `cashtags`。设置 `monitor.baselineDatasetId` 后，摘要的 `monitor` 块会统
计比较状态，并列出最多 50 行变化。

每条结果行还带有 `answers`，这是从问题 ID 到所选类别、分数或概率的扁平化
映射。`Flat answers` 数据集视图以及 CSV 或 Excel 导出会在推文旁为每个
问题显示一列，因此电子表格无需解析 JSON。失败与跳过的行携带空映射。

## 与更早的运行比较

传入 `monitor.baselineDatasetId`，即一次使用相同分析设置完成的更早运行的数据集
ID。之后每一行都会获得一个 `monitor` 对象。其状态在没有基线时为 `first_run`，
更早运行中不存在的推文为 `new_to_baseline`，已存在的推文为 `unchanged` 或
`changed`。`changes` 列出每个从 `previous` 变为 `current` 的形式、归属或相关性
判断。判断按类别、四舍五入的分数等级或 0.5 处的是否判断进行比较。判断在三种情
况下计为已更改。更早的类别概率降到 0.4 以下。分数移动至少 0.6 个等级。是否概率
与阈值相差至少 0.1。运行之间的临界抖动视为未变化。超过 `maxBaselineRows`（默认
100,000）的基线或来自不同设置的基线，会在收集之前以诊断行的形式停止运行。

## 任务示例

从 50 个公开任务中选择。每个任务都从一个真实的英文搜索开始，配有受限的
`maxItems`、现成的目标与上下文，以及概览数据集视图。运行前可编辑搜索或
目标。

- [Classify Nvidia news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-nvidia-news-posts-on-x)
- [Classify X Article news posts](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-x-article-news-posts)
- [Classify OpenAI news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-openai-news-posts-on-x)
- [Classify Apple news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-apple-news-posts-on-x)
- [Classify Tesla news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-tesla-news-posts-on-x)
- [Classify SpaceX news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-spacex-news-posts-on-x)
- [Classify Boeing news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-boeing-news-posts-on-x)
- [Classify Pfizer news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-pfizer-news-posts-on-x)
- [Classify Moderna news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-moderna-news-posts-on-x)
- [Classify ExxonMobil news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-exxon-news-posts-on-x)
- [Classify Federal Reserve news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-federal-reserve-news-posts-on-x)
- [Classify European Central Bank news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-european-central-bank-news-posts-on-x)
- [Classify Bank of England news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-bank-of-england-news-posts-on-x)

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
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring)：
  以 AI 相关性、情感与客户体验答案追踪品牌提及，并比较不同运行。当你要
  长期观察一个品牌时使用。每条已分析推文起价 $0.0003。
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis)：
  用 AI 为每条推文标注态度、强度与讽刺概率。当你需要针对任意话题的通用
  情感分析时使用。每条已分析推文起价 $0.0003。
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)：
  用 AI 标注看涨、看跌、中性或混合立场、内容类型、信念强度与资产相关性。
  当你要关注股票、加密货币或交易讨论时使用。每条已分析推文起价 $0.0003。
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)：
  用 AI 为每条推文回答你自己定义的类别、分数与是否问题。当预设分析不适合
  你的标签体系时使用。每条已分析推文起价 $0.0003。

## 常见问题与支持

### 我可以使用自己的问题吗？

可以。自定义 `analysis.questions` 会替换默认问题：1 到 8 个 `choice`、
`score` 或 `probability` 类型的问题，类别数为 2 到 255 个，或至少 2 个
有序等级。

### 为什么某一行返回的 `analysis.status` 是 `failed` 或 `skipped`？

Actor 已收集并交付该推文，但 AI 分析未能完成。`analysis.reason` 会说明原因，例
如推文及其上下文超过 `maxContextBytes` 时的 `context_limit`，或重试后仍失败的
`service_unavailable`。这些行不产生结果费用。提高 `maxContextBytes`（最多
12,000）或重新运行受影响的 ID。

### 分析会核实事实吗？

不会。答案描述的是帖子表达了什么、以及帖子如何表述。概率表达的是模型置信度，而
非事实真伪。请对照每一行都保留的原始推文，核查重要的分类结果。

### 支持哪些语言？

提取支持 X 提供的所有语言。我们首先在英文客户场景中验证分析。其他受支持的语言
会返回结构相同的答案。`unclear` 类别与概率会在每种语言中体现不确定性。

### 如何控制成本？

过滤、去重与 `maxItems` 都在分析之前运行，因此 Actor 只分析唯一的、符合过滤条
件的推文并只对其收费。使用精确的搜索操作符、日期范围与互动下限，并先用较小的
`maxItems` 检查答案质量，再进行大规模运行。

### 在哪里获取帮助？

在 Actor 页面上提交 issue，或联系 support@xquik.com 并附上运行 ID。
key-value store 中的免费诊断信息会说明空、部分完成或中断的运行。

Xquik 是独立的第三方服务，与 X Corp 没有关联。
“Twitter” 与 “X” 是 X Corp 的商标。
