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

Xquik 是全球最快、最便宜的 X（Twitter）抓取工具服务，拥有最完整的 X
数据，X Tweet Sentiment Analysis 为每条推文添加态度、强度与讽刺判断。其他所有
Apify Actor 都在过滤或去重之前就收费。Xquik 只为交付的、唯一的、符合过滤条件
的结果收费。

AI 费用已包含在每条推文的价格中。你无需向 AI 提供商付费、无需购买 token，也无需自带密钥。

衡量 X（Twitter）帖子背后的态度，并保留原始推文数据。
**X Tweet Sentiment Analysis** 收集匹配的推文，然后为每条帖子添加
AI 驱动的情感类别、强度等级与讽刺概率。追踪一次发布、一场活动、一集节目或
一位公众人物引发的反应，把强烈反应从随口提及中区分出来。

- **每条帖子的情感**，而不是无法审核的汇总分数。
- **强度**区分强烈表态的帖子与温和的帖子。
- **讽刺概率**标记字面措辞与态度相矛盾的帖子。
- **完整的原始记录**，包含该推文暴露的每个字段。

## 如何分析推文情感

1. 添加搜索词、主页用户名、推文链接或推文 ID。
2. 设置 `maxItems` 以及任务所需的提取过滤条件。
3. 留空 `analysis.targets` 以就每条帖子自身主题作判断，或添加名称与别名，将
   态度判断聚焦到某个品牌、产品或人物上。
4. 运行 Actor 并打开数据集。

```json
{
  "searchTerms": ["\"season finale\" lang:en"],
  "maxItems": 200,
  "analysis": { "context": "Reactions to the show, not spoilers." }
}
```

### Actor 回答的问题

| 问题   | 答案                                                        |
| ------ | ----------------------------------------------------------- |
| 情感   | 积极、消极、混合、中性或不明确                               |
| 强度   | 0 随口提及，1 明确表态，2 强烈措辞                           |
| 讽刺   | 字面措辞与态度相矛盾的概率                                   |

提供目标时，情感判断针对目标的态度，并使用所提供的引用或回复上下文；否则
判断帖子的主要主题。

## 定价

AI 费用已包含在每条推文的价格中。你无需向 AI 提供商付费、无需购买 token，也无需自带密钥。

每成功分析一条推文起价 $0.0003，无起步费用。收集费用已包含在内，文档化的
分析额度为 8 个问题、每个问题定义 8,000 字节、每条推文 12,000 字节上下文。
提取过滤与去重在分析之前运行，因此被过滤掉的行与重复行永远不会被分析或收费。
失败、跳过的分析以及诊断行不产生结果费用。Apify 平台使用量由 Apify 单独计费，
显示在 Pricing 标签页中。

## 输入与输出示例

上方输入可直接复制使用。输出行如下所示（已省略部分内容）：

```json
{
  "tweet": { "id": "2100493544842494265", "text": "…", "likeCount": 12 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      {
        "questionId": "sentiment",
        "type": "choice",
        "value": "positive",
        "confidence": 0.91
      },
      {
        "questionId": "intensity",
        "type": "score",
        "value": 2,
        "confidence": 0.8
      },
      { "questionId": "sarcasm", "type": "probability", "probability": 0.04 }
    ]
  }
}
```

每条结果都包含 `tweet` 与 `analysis`。答案包括类型、问题版本及可用概率。
失败或跳过的分析会保留已收集的推文，答案列表为空并附带 `reason`。key-value
store 中的免费诊断信息会说明无效输入、缺失结果与中断的收集，运行报告会将
已收集的行、已收费的分析与待收费项分开列出。

## 运行摘要与扁平化答案

每次运行都会向其 key-value store 写入一条 `analysis-summary` 记录，并在运行
报告中的 `results.analysisSummary` 下重复该记录。它统计已分析、失败与跳过的
行数，汇总互动数据，并对每个问题作出总结。`sentiment` 拆分显示每种态度下有
多少条推文，以及在 `engagementShares` 下，当每条推文按其点赞、转推、回复与
引用加权后，这一拆分如何变化。`top` 列出每种态度下互动最多的三条推文。数字
四舍五入到 4 位小数；空运行报告零计数，均值为 `null`。每一行还列出
`sourceDomains`（其链接指向的主机名）、文本中发现的 `cashtags`（如
`$NVDA`），摘要的 `monitor` 块统计比较状态，并在设置了
`monitor.baselineDatasetId` 时列出最多 50 行变化。

每条结果行还带有 `answers`，这是从问题 ID 到所选类别、分数或概率的扁平化
映射。`Flat answers` 数据集视图以及 CSV 或 Excel 导出会在推文旁为每个问题
显示一列，因此电子表格无需解析 JSON。失败与跳过的行携带空映射。

## 与更早的运行比较

传入 `monitor.baselineDatasetId`（一次使用相同分析设置完成的更早运行的
数据集 ID），每一行都会获得一个 `monitor` 对象：没有基线时为 `first_run`，
更早运行中不存在的推文为 `new_to_baseline`，已存在的推文为 `unchanged` 或
`changed`，`changes` 列出每个从 `previous` 变为 `current` 的情感、强度等级
或讽刺判断。判断按类别、四舍五入的分数等级或 0.5 处的是否判断进行比较，
只有当答案明确发生变化时才计为已更改：更早的类别概率降到 0.4 以下、分数
移动至少 0.6 个等级，或是否概率与阈值相差至少 0.1。运行之间的临界抖动
视为未变化。超过 `maxBaselineRows`（默认 100,000）的基线或来自不同设置的
基线，会在收集之前以诊断行的形式停止运行。

## 任务示例

从 50 个公开任务中选择。每个任务都从一个真实的英文搜索开始，配有受限的
`maxItems`、现成的目标与上下文，以及概览数据集视图。运行前可编辑搜索或
目标。

- [Sentiment of season finale reactions](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-season-finale-reactions)
- [Sentiment of iPhone launch posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-iphone-launch-posts)
- [Sentiment of the Super Bowl halftime show](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-super-bowl-halftime-show)
- [Sentiment toward a new electric car model](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-new-electric-car)
- [Sentiment of Marvel movie audiences](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-marvel-movie-audiences)
- [Sentiment of Taylor Swift album reactions](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-taylor-swift-album-reactions)
- [Sentiment of a video game launch](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-video-game-launch)
- [Sentiment about remote work](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-remote-work)
- [Sentiment of airline passengers](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-airline-passengers)
- [Sentiment of college football fans](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-college-football-fans)
- [Sentiment about interest rate decisions](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-interest-rates)
- [Sentiment toward electric scooters](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-electric-scooters)

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
- [X (Twitter) Brand Monitoring](https://apify.com/xquik/x-twitter-brand-monitoring)：
  以 AI 相关性、情感与客户体验答案追踪品牌提及，并比较不同运行。当你要
  长期观察一个品牌时使用。每条已分析推文起价 $0.0003。
- [X (Twitter) Stock & Crypto Signal](https://apify.com/xquik/x-twitter-stock-crypto-signals)：
  用 AI 标注看涨、看跌、中性或混合立场、内容类型、信念强度与资产相关性。
  当你要关注股票、加密货币或交易讨论时使用。每条已分析推文起价 $0.0003。
- [X (Twitter) News Monitor with AI](https://apify.com/xquik/x-twitter-news-monitor)：
  用 AI 按形式、来源归属与话题相关性标注新闻帖子。当你要把报道与评论区分
  开时使用。每条已分析推文起价 $0.0003。
- [X Tweet Classifier with AI](https://apify.com/xquik/x-twitter-tweet-classifier)：
  用 AI 为每条推文回答你自己定义的类别、分数与是否问题。当预设分析不适合
  你的标签体系时使用。每条已分析推文起价 $0.0003。

## 常见问题与支持

### 我可以使用自己的问题吗？

可以。自定义 `analysis.questions` 会替换默认问题：1 到 8 个 `choice`、
`score` 或 `probability` 类型的问题，类别数为 2 到 255 个，或至少 2 个
有序等级。

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
