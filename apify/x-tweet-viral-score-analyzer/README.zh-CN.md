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

Xquik 是全球最快、最便宜的 X（Twitter）抓取工具服务，拥有最完整的 X数据。X Tweet Viral Score Analyzer 为每条推文添加 Viral Score 估算值与一个结论。其他所有 Apify Actor 都在过滤或去重之前就收费。Xquik 只为交付的、唯一的、符合过滤条件的结果收费。AI 费用已包含在每条推文的价格中。你无需 AI 账户、token 或密钥。

了解推文为何传播或遇冷，并保留原始推文数据。
**X Tweet Viral Score Analyzer with AI** 收集匹配的推文。AI 为每条帖子的
8 个特征打分。Actor 将这些答案转换为 0 到 100 的 Viral Score 估算值与一个
结论。每一行都保留真实的点赞、转推、回复与引用，因此你可以将每个估算值与
实际结果对比。

- **每条帖子的 Viral Score**，基于固定且带版本号的规则。
- **8 个特征答案**说明一条帖子得分高或低的原因。
- **硬性限制**为读起来像垃圾内容、愤怒诱饵或通用机器文案的帖子设置分数上限。
- **完整的原始记录**，包含该推文暴露的每个字段。

Viral Score 估算的是措辞的效果。它不预测点赞数或浏览量。它不复现 X 对帖子的
排序方式。

## 如何查看推文的 Viral Score

1. 添加搜索词、主页用户名、推文链接或推文 ID。
2. 设置 `maxItems` 以及任务所需的提取过滤条件。
3. 在 `analysis.context` 中描述你的受众，或保留默认值。
4. 运行 Actor 并打开 `Viral Score` 数据集视图。

```json
{
  "searchTerms": ["from:NASA -filter:replies -filter:retweets"],
  "maxItems": 150,
  "analysis": { "context": "Space fans & general readers." }
}
```

### Actor 回答的问题

| 问题     | 答案                                            |
| -------- | ----------------------------------------------- |
| 钩子     | 0 没有钩子，1 开头清楚，2 开头抓人              |
| 清晰度   | 0 令人困惑，1 需要费力理解，2 一读就懂          |
| 信息量   | 0 没有新内容，1 熟悉的观点，2 有用的收获        |
| 趣味性   | 0 不好笑，1 略微有趣，2 好笑到值得分享          |
| 愤怒诱饵 | 帖子主要在煽动愤怒的概率                        |
| AI 写作  | 文本读起来像通用机器文案的概率                  |
| 垃圾内容 | 属于垃圾内容、诈骗、抽奖或刷互动的概率          |
| 反应     | 分享、回复、点赞、争论或忽略                    |

AI 写作答案只判断文风。它不认定帖子由谁撰写。

### Viral Score 如何运作

开头吸引力、清晰度、价值和预期反应会提高分数。读起来像通用机器文案的措辞会降低分数。

硬性上限会限制疑似垃圾信息、煽怒内容和通用机器文案的分数。分数是 0 到 100 之间的整数。

| 结论          | 分数      |
| ------------- | --------- |
| `send_it`     | 70 到 100 |
| `edit_first`  | 40 到 69  |
| `sleep_on_it` | 0 到 39   |

`viral.weights` 标明这些规则的版本，例如 `viral_lite:1`。规则每次变化时它都会随之变化。当分析失败、Actor 跳过分析或缺少某个默认特征答案时，分数为 `null`。Actor 从不用猜测填补缺失的分数。

## Algorithm Score 估算

X 在代码仓库 `xai-org/x-algorithm` 的文件 `home-mixer/params/param.rs` 中公开了
其排序权重。Actor 将其中 4 个权重应用于每条帖子的公开计数：

| 计数 | 权重 |
| ---- | ---- |
| 点赞 | 0.5  |
| 回复 | 5    |
| 转推 | 1    |
| 引用 | 5    |

`viral.algorithmWeightedSum` 是每项计数乘以其权重后的总和。
`viral.algorithmScore` 将该总和除以浏览量，再乘以 1,000。没有浏览量的帖子
改用关注者数。`viral.algorithmBasis` 标明除数，即 `views` 或 `followers`。只比较
基准相同的分数。`viral.weightsVersion` 标明权重版本，例如
`x_algorithm_params:2026-09-18`。

局限：

- X 将每个权重乘以它为单个浏览者预测的概率。Actor 乘以的是观测到的计数。
  结果是一个估算值，而不是 X 计算的分数。
- X 没有公开书签或浏览量的权重。总和不包含这两项。
- X 使用的信号多于这 4 项，例如停留时长与分享。公开数据不显示这些信号。
- 帖子既没有浏览量也没有关注者数时，分数为 `null`。
- AI 永远看不到这些计数。它只读取文本与上下文。

## 预测与实际对比

Actor 将每个 Viral Score 与实际结果对比。
`viral.actualEngagementRate` 为 `log10(1 + weighted sum per 1,000 followers)`。
对数限制了单条超大帖子的影响。关注者数缺失或为 0 时，该比率为 `null`。

运行摘要的 `viral.calibration` 块报告：

- `comparedPosts`：同时具有 Viral Score 与实际比率的帖子。
- `rankCorrelation`：取值 -1 到 1 的 Spearman 等级相关系数。它考察更高的分数
  是否对应更高的比率。
- `calibrationScore`：相关系数乘以 100，最低为 0。
- `overperformers` 与 `underperformers`：各最多 5 条帖子，包含推文 ID、URL、
  Viral Score、实际比率与 `gap`。

`gap` 是标准化的实际比率减去标准化的 Viral Score。帖子的 gap 达到 1 个标准差时
进入列表。

局限：

- 对比的帖子少于 10 条时，校准结果为 `null`，原因为 `too_few_posts`。分数或
  比率完全相同时，原因为 `no_variation`。
- 相关系数是近似值。
- 校准只描述一次运行。分数低可能意味着帖子在时机、话题或受众上存在差异，
  而不是措辞估算失效。
- 新帖子尚未完成互动积累。请比较发布时长相近的帖子。

## 账号报告

运行摘要的 `viral.accounts` 块报告每个作者用户名：

- 帖子数、平均 Viral Score 与平均实际互动率。
- 按 Viral Score 计的最佳与最差帖子，包含推文 ID 与 URL。
- 每个桶的平均 Viral Score：UTC 发帖小时、文本长度区间、有媒体、有链接与
  自回复推文串。

文本长度区间为：`short` 至 80 个字符，`medium` 至 200，`long` 至 280，
`extended` 为超过 280。自回复推文串帖子回复的是其作者自己。

局限：

- 报告列出已评分帖子最多的 50 个用户名。
- Actor 跟踪一次运行中的前 1,000 个用户名。`untrackedPosts` 统计来自之后的
  用户名以及没有用户名的已评分帖子。
- 帖子很少的桶说明不了什么。比较平均值之前请先查看 `posts`。
- 桶显示的是本次运行中同时出现的情况。它们不显示因果关系。

## 排行榜

运行摘要的 `viral.leaderboard` 块为账号报告中的用户名排名。`byViralScore` 按
平均 Viral Score 排名。`byActualEngagementRate` 按平均实际比率排名。每个列表
最多包含 20 个用户名，带有 `rank`、`posts` 与 `average`。

局限：

- 一个用户名至少需要 3 条已评分帖子才能上榜。
- 比率列表跳过没有关注者数的用户名。
- 并列时先比帖子数，再比用户名。
- 排行榜涵盖一次运行中的帖子，而不是账号的全部历史。

## 发帖前先为草稿评分

将你自己的文本粘贴到 `texts` 中。Actor 为其评分，不会从 X 获取任何内容。

```json
{
  "texts": [
    "We shipped dark mode today. Try it and tell us what breaks.",
    "5 things we learned from 1,000 support tickets."
  ],
  "analysis": { "context": "Developers who use our app." }
}
```

- 每段文本生成 1 行，带有 `viralScore`、`viralVerdict` 与 `viral.stops`。
- `tweet.id` 依次为 `text:1`、`text:2` 等，`tweet.type` 为 `text`。
- 草稿还没有点赞或浏览量，因此 `viral.algorithmScore` 保持为 `null`。
- 每段已分析文本的费用与一条已分析推文相同，均为 $0.0003。
- 设置 `texts` 后，运行只分析这些文本。X 目标请另行运行。

## 定价

AI 费用已包含在每条推文的价格中。你无需 AI 账户、token 或密钥。

每成功分析一条推文起价 $0.0003，无起步费用。价格已包含收集费用与 Viral Score。
分析额度为 8 个问题、每个问题定义 8,000 字节、每条推文 12,000 字节上下文。
提取过滤与去重在分析之前运行，因此被过滤掉的行与重复行永远不会被分析或收费。
失败、跳过的分析以及诊断行不产生结果费用。Apify 会单独计算平台使用费。
Pricing 标签页会显示该费用。

## 输入与输出示例

上方输入可直接复制使用。输出行如下所示（已省略部分内容）：

```json
{
  "tweet": { "id": "2100493544842494265", "text": "...", "likeCount": 12 },
  "viral": {
    "score": 74,
    "verdict": "send_it",
    "weights": "viral_lite:1",
    "stops": [],
    "algorithmScore": 8.5,
    "algorithmBasis": "views",
    "algorithmWeightedSum": 17,
    "actualEngagementRate": 0.7202,
    "weightsVersion": "x_algorithm_params:2026-09-18"
  },
  "viralScore": 74,
  "viralVerdict": "send_it",
  "viralAlgorithmScore": 8.5,
  "viralActualEngagementRate": 0.7202,
  "analysis": {
    "status": "succeeded",
    "answers": [
      { "questionId": "hook", "type": "score", "value": 2, "confidence": 0.84 },
      { "questionId": "spam", "type": "probability", "probability": 0.03 },
      {
        "questionId": "reaction",
        "type": "choice",
        "value": "share",
        "confidence": 0.7
      }
    ]
  }
}
```

每条结果都包含 `tweet`、`analysis` 与 `viral`。答案包括类型、问题版本及可用
概率。`viral.stops` 列出为分数封顶的硬性限制。失败或跳过的分析会保留已收集的
推文，答案列表为空，并附带 `reason` 与 `null` 分数。key-value store 中的免费
诊断信息会说明无效输入、缺失结果与中断的收集。运行报告会将已收集的行、
已收费的分析与待收费项分开列出。

## 运行摘要与扁平化答案

每次运行都会向其 key-value store 写入一条 `analysis-summary` 记录，并在运行
报告中的 `results.analysisSummary` 下重复该记录。它统计已分析、失败与跳过的
行数，汇总互动数据，并对每个问题作出总结。其 `viral` 块报告 `averageScore`、
每种结论的数量，以及 Actor 已评分或未评分的行数。同一个块还包含上文介绍的
`calibration`、`accounts` 与 `leaderboard`。分数类问题报告均值与按互动加权的
均值。`reaction` 拆分显示每种反应下有多少条推文，`top` 列出每种反应下互动
最多的三条推文。空运行报告零计数，平均值为 `null`。每一行都列出
`sourceDomains`，即其链接指向的主机名，以及文本中发现的 `cashtags`，例如
`$NVDA`。设置了 `monitor.baselineDatasetId` 时，摘要的 `monitor` 块统计比较
状态，并列出最多 50 行变化。

每条结果行还带有 `viralScore`、`viralVerdict`、`viralAlgorithmScore`、
`viralActualEngagementRate` 与 `answers`，后者是从问题 ID 到所选类别、分数或
概率的扁平化映射。`Viral Score` 数据集视图以及 CSV 或 Excel 导出会在推文旁
显示这些列，因此电子表格无需解析 JSON。失败与跳过的行携带空映射。

## 与更早的运行比较

传入 `monitor.baselineDatasetId`（一次使用相同分析设置完成的更早运行的数据集 ID）。此后每一行都会获得一个 `monitor` 对象。其状态在没有基线时为`first_run`，更早运行中不存在的推文为 `new_to_baseline`，已存在的推文为`unchanged` 或 `changed`。`changes` 列出每个从 `previous` 变为 `current` 的特征判断。判断按类别、四舍五入的分数等级或 0.5 处的是否判断进行比较。只有判断发生明显变化时才计为已更改。运行之间的临界抖动视为未变化。超过 `maxBaselineRows`（默认 100,000）的基线或来自不同设置的基线，会在收集之前以诊断行的形式停止运行。

## 任务示例

从 50 个公开任务中选择。每个任务都从一个真实的英文搜索开始，配有受限的
`maxItems` 与 `Viral Score` 数据集视图。部分任务添加了受众上下文。运行前可
编辑搜索或上下文。

- [Viral score of AI startup launch tweets](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-ai-startup-launch-tweets)
- [Viral score of SaaS founder build in public posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-saas-founder-build-in-public-posts)
- [Viral score of Product Hunt launch posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-product-hunt-launch-posts)
- [Viral score of Developer tool announcements](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-developer-tool-announcements)
- [Viral score of Open source release posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-open-source-release-posts)
- [Viral score of Crypto project announcements](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-crypto-project-announcements)
- [Viral score of Parenting humor posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-parenting-humor-posts)
- [Viral score of Office humor posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-office-humor-posts)
- [Viral score of Pet photo captions](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-pet-photo-captions)
- [Viral score audit of NASA posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-nasa-posts)
- [Viral score audit of Duolingo posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-duolingo-posts)
- [Viral score audit of Wendy's posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-wendys-posts)

其余任务在 Actor 页面上涵盖更多话题与品牌账号。

## 常见问题与支持

### 高分意味着推文一定会爆红吗？

不是。分数估算的是措辞对普通读者的效果。时机、受众规模、媒体与运气也决定
触达范围。在依赖分数之前，请将其与每一行上的真实互动计数对比。

### 我可以使用自己的问题吗？

可以。自定义 `analysis.questions` 会替换默认问题：1 到 8 个 `choice`、
`score` 或 `probability` 类型的问题，类别数为 2 到 255 个，或至少 2 个
有序等级。Viral Score 需要全部 8 个默认问题，因此使用自定义问题时它为 `null`。

### 为什么某一行返回的 `analysis.status` 是 `failed` 或 `skipped`？

Actor 已收集并交付该推文，但 AI 分析未能完成。`analysis.reason` 会说明原因，例如推文及其上下文超过 `maxContextBytes` 时的 `context_limit`，或分析服务暂时不可用时的 `service_unavailable`。这些行不产生结果费用，也没有分数。提高`maxContextBytes`（最多 12,000）或重新运行受影响的 ID。

### 分析会核实事实吗？

不会。答案描述的是帖子表达了什么、以及帖子如何表述它。概率表达的是模型置信度，
而非事实真伪。请对照每一行都保留的原始推文，核查重要的分类结果。

### 支持哪些语言？

提取支持 X 提供的所有语言。我们首先在英文客户场景中验证分析。其他受支持
的语言会返回结构相同的答案。

### 如何控制成本？

过滤、去重与 `maxItems` 都在分析之前运行，因此 Actor 只分析唯一的、符合过滤条件的
推文并只对它们收费。使用精确的搜索操作符、日期范围与互动下限，并先用
较小的 `maxItems` 检查答案质量，再进行大规模运行。

### 在哪里获取帮助？

在 Actor 页面上提交 issue，或联系 support@xquik.com 并附上运行 ID。
key-value store 中的免费诊断信息会说明空、部分完成或中断的运行。

Xquik 是独立的第三方服务，与 X Corp 没有关联。
“Twitter” 与 “X” 是 X Corp 的商标。

## 相关 Xquik Actor

每个 Xquik Actor 都共享同一套提取引擎、先过滤后计费的规则与诊断机制。
选择与你所需数据匹配的那一个。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper)：从搜索、主页
  时间线、List 与推文 ID 抓取推文，提供 50 多种过滤条件与扁平化导出。当你
  只需要推文数据而无需分析时使用。每行起价 $0.00015。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper)：从
  用户名、ID 或 URL 抓取主页及其帖子、回复、媒体和关注者。适用于从账户
  出发而非从搜索出发的场景。起价为每行 $0.00015。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper)：抓取帖子下的
  回复、评论与完整对话，提供 25 多种过滤条件。当你需要推文下方的讨论时
  使用。每行起价 $0.00015。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper)：
  批量抓取帖子 URL 或 ID 对应的回复、引用、转推者及推文串。
  适用于衡量谁与帖子产生了互动。起价为每行 $0.00015。
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
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)：
  用 AI 按形式、来源归属与话题相关性标注新闻帖子。当你要把报道与评论区分
  开时使用。每条已分析推文起价 $0.0003。
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)：
  用 AI 为每条推文回答你自己定义的类别、分数与是否问题。当预设分析不适合
  你的标签体系时使用。每条已分析推文起价 $0.0003。
