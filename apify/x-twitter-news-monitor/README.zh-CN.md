[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · **简体中文** · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer 将 Xquik MCP 连接到编程 Agent](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[观看 Framer 如何在 Claude Code、Codex、Cursor 等工具中使用 Xquik 抓取工具](https://youtu.be/4UOSpoOoC3Y?t=367)，从 6:07 开始。

Xquik 是全球最快、最便宜的 X（Twitter）抓取服务，X 数据也最完整。Xquik 的 X (Twitter) News Monitor 按形式、来源标注&相关性给新闻帖子分类。其他大多数 Apify Actor 在过滤或去重之前就开始收费。Xquik 只对已交付、不重复且符合过滤条件的结果收费。AI 费用已包含在每条帖子的价格中。你不需要 AI 账号、token 或密钥。

按类型整理 X（Twitter）上的新闻帖子&保留原始帖子数据。Xquik 的 **X (Twitter) News Monitor with AI Analysis** 收集与你的话题相关的帖子。它用 AI 为每条帖子给出形式、来源标注&相关性答案。把报道与评论&猜测区分开。查看帖子是否写明或链接了来源。只保留关于你追踪的机构、人物或话题的帖子。

> Xquik 是独立的第三方服务，与 X Corp 无关联。
> “Twitter”和“X”是 X Corp 的商标。

## 为什么使用 X (Twitter) News Monitor with AI Analysis？

- **把报道与猜测分开。** 按 `format` 答案过滤，保留报道&去掉猜测或推广。
- **查看哪些来源被引用。** `sourceDomains` 统计整个运行中被链接的域名。
- **链接的文章也算在内。** 链接了 X 文章的帖子，也会得到关于该文章的答案。
- **按目标统计报道情况。** 每个目标都有各自的形式&来源标注分布，以及热门帖子。
- **查看变化。** 把之前某次运行的数据集 ID 填入 `monitor.baselineDatasetId`。每行就会显示哪些判断发生了变化。
- **检查你自己的文本。** 把标题或草稿粘贴到 `texts` 中，获得同样的答案。运行不会从 X 获取任何内容。
- **可直接用于表格的答案。** `Flat answers` 视图 & CSV 或 Excel 导出为每个问题显示 1 列。
- **无需账号或密钥。** 价格已包含 AI 分析。你不需要 AI 密钥、X API 密钥或登录。

### 完整结果

- 大日期范围也能完整&快速返回。
- 无论组合哪些运算符，搜索都会返回每条匹配结果。
- 带过滤条件的每一页都会填满，直到结果用完。
- 每次返回的结果都包含 X 所能提供的最完整数据。

### 准确的数据行

- 搜索结果包含与你的查询匹配的每条帖子，不含其他内容。
- 词语&短语匹配适用于每种语言&文字。
- 语言过滤适用于 X 标注的每种语言。
- 受保护账号&私密列表会得到明确答复，而不是空白页面。
- 转帖包含完整的原帖正文。
- 行中的每个 ID 都精确无误。
- 提及、链接、话题标签&高亮与正文位置一致。
- 认证徽章与 `x.com` 上显示的一致。
- 行中只包含公开数据。
- 从新到旧的结果按日期顺序返回。
- 搜索查询可以按你在 X 上的写法输入。
- 地点搜索支持 6 种语言的名称。
- 无法执行的搜索会立即失败&说明如何修正。
- 日期无论用哪种常见格式书写，含义都相同。
- 搜索接受 `since_id` & `max_id` 边界。
- 广告&推广条目绝不会进入你的数据行。

### 数据保持最新

- X 发布改动后，读取仍能正常进行。

### 速度

- 单个慢页面不会拖慢整个运行。
- 热门话题的搜索同样很快。
- 每个后续页面都很快返回。
- 行一到达，读取就立即结束。
- 卡住的 Actor 调用会自动恢复。

### 公平计费

- 错误的输入不收费&会告诉你要改什么。
- AI 分析只对已分析的帖子计费。
- Actor 只对已交付、不重复且符合过滤条件的行收费。
- 重启的运行绝不会重复收费。
- 运行始终不超出你的支出上限&仍会写入诊断信息。
- AI Actor 不对失败或跳过的分析计费。

### 可靠性

- 偶发错误不会让运行失败。
- 翻页时前后页面保持一致。
- 翻页绝不会无限循环。
- 到达截止时间时，会返回已找到的行&诊断信息。
- Xquik 短暂中断不会让 Actor 失败。
- Actor 运行在重启后继续，且不会重复。
- 单个错误行不会让整批失败。
- 已停止的运行会保留它的行&报告。
- 无法启动的运行也会说明原因。
- 支持团队能准确看到某个请求或运行返回了什么。

### 为 Agent 设计

- Actor 接受为其他 Actor 编写的输入。
- 每次运行都会说明结束原因&是否需要重试。

### 丰富的数据

- 帖子行包含长帖正文、编辑记录、社群笔记、可见范围标签&回复权限。
- 行中包含发布来源应用、媒体数量&专业账号数据。
- 媒体附带变体、替代文本、尺寸&可用性原因。
- AI 答案附带概率、置信度&问题版本。
- 各次分析运行之间的变化不会因噪声而来回翻转。

### 质量检查

- X 显示的每个字段，要么已提供，要么是有意省略，要么已证实不存在。
- Xquik 会针对 X 实时测试每一种读取。

## X (Twitter) News Monitor with AI Analysis 返回哪些数据？

- **形式。** 它区分报道、评论、猜测、推广&讽刺。
- **来源标注。** 它显示某个说法是写明了来源、链接了来源、属于亲历，还是没有来源。
- **相关性。** 它把关于你的目标的帖子与同名对象区分开。
- **完整的原始记录。** 每行都保留该帖子公开的所有字段，有链接文章时也一并保留。

## 如何在 X 上给新闻帖子分类

刚接触 Apify？先[创建免费账号](https://console.apify.com/sign-up?fpr=xquik)。免费套餐不需要信用卡&每月提供 $5 可用额度。按每条已分析帖子 $0.0003 计算，不算平台用量，$5 最多可支付 16,000 条已分析帖子。然后回到这里&点击 Try for free。

1. 添加搜索词，例如 `Nvidia earnings lang:en -filter:retweets`，或添加新闻账号用户名或帖子 ID。
2. 设置 `maxItems` & 提取过滤条件，例如日期范围、`filter:links` 或最少转帖数。
3. 把你追踪的机构、人物或话题连同别名放进 `analysis.targets`。在 `analysis.context` 中缩小话题范围。
4. 开始运行&打开数据集。

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

### 该 Actor 回答什么

- 形式为报道、评论、猜测、推广、讽刺、无关或不明确。
- 来源标注为写明来源、链接来源、亲历、无来源或不明确。
- 相关性是所报道事件与你的目标有关的概率。

分类不核实事实。写明来源不代表来源可信。来源标注描述的是帖子呈现的内容。

## 分析你自己的文本

把你自己的草稿、回复、评价或笔记粘贴到 `texts` 中。Xquik 的 X (Twitter) News Monitor 会分析这些文本。它不会从 X 获取任何内容。

```json
{
  "texts": [
    "Central bank holds rates at 4.5%, signals 2 cuts next year.",
    "I was at the port this morning. Cranes are idle & trucks are queued."
  ]
}
```

- 每段文本生成 1 行，`analysis` 答案与帖子相同。
- `tweet.id` 依次为 `text:1`、`text:2` & 后续编号，`tweet.type` 则为 `text`。
- 每段已分析文本的费用与每条已分析帖子相同，都是 $0.0003。
- 设置 `texts` 后，运行只分析这些文本。X 目标请另外运行。

## 在 X 上给新闻帖子分类要花多少钱？

Xquik 的 X (Twitter) News Monitor 每条已分析帖子 $0.0003 起。它不收启动费。价格包含收集 & AI 费用。你不需要 AI 账号、token 或密钥。这个价格涵盖每条帖子最多 8 个问题 & 64,000 字节的上下文。每个问题定义最多可用 8,000 字节。

需要更大的数据量时，请[选择 Apify 套餐](https://apify.com/pricing?fpr=xquik)，获得更多预付用量。

提取过滤&去重在分析之前进行。你从不为被过滤掉的行或重复行付费。失败的分析、跳过的分析&诊断行不产生结果费用。Apify 会按你套餐的费率，另行收取计算、存储&传输的平台使用费。Pricing 标签页会显示这部分费用。

## 输入&输出示例

上面的输入可以直接复制使用。省略部分内容的输出行如下所示。

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

每条结果都包含 `tweet` & `analysis`。答案包括类型、问题版本&可用的概率。分析失败或被跳过的行会保留已收集的帖子 & `reason`。它的答案列表为空。

帖子链接了 X 文章时，分析还会获取这篇文章。它会把标题、预览&正文区块作为上下文加入。`analysis.contextAvailability.article` 报告 `text_blocks`、`summary` 或 `not_supplied`。`summary` 表示只有标题&预览。

键值存储中的免费诊断信息会说明无效输入、缺失结果&中断的收集。运行报告把已收集的行、已收费的分析&待收取的费用分开列出。

## 运行摘要&扁平答案

运行在以下 3 种情况下，会向它的键值存储写入 `analysis-summary` 记录。

- 运行遇到问题或规模较大。
- 比较发现了已变化、新增或无法比较的帖子。
- 开启了 `alwaysSaveRunRecords`。

其他运行会跳过这条记录，包括系列中的第 1 次运行。它们的状态会写明占比最高的答案，例如 `Top format is reporting in 4 of 5 results.`。没有变化的比较会显示 `No change since the earlier run.`。遇到问题或规模较大的运行还会写入 `run-report`。开启 `alwaysSaveRunRecords` 的运行也会写入。`run-report` 会在 `results.analysisSummary` 下重复这份摘要。

摘要统计已分析、失败&跳过的行。它汇总互动数据&总结每个问题。

- `format` 分布把报道与评论、猜测、推广&讽刺区分开。
- `attribution` 统计写明来源、链接来源、亲历&无来源的数量。
- `relevance` 统计关于每个目标的帖子。
- `targets` 给出每个目标的提及数。每个目标的 `top` 列出每个答案类别下互动最多的帖子。
- 每个 `targets` 条目都有 `choices`，即关于该目标的帖子的形式&来源标注分布。
- `sourceDomains` 统计整次运行中被链接的域名。
- `monitor.changedRows` 列出自基线以来判断发生变化的帖子。
- 每行都列出 `sourceDomains`，即它链接到的主机名。
- 每行都列出文本中出现的 `cashtags`，例如 `$NVDA`。
- 设置 `monitor.baselineDatasetId` 时，摘要的 `monitor` 块会统计比较状态。它最多列出 50 个已变化的行。

每个结果行还带有 `answers`，即以问题 ID 为键的扁平映射。每个值是所选的类别、分数或概率。`Flat answers` 数据集视图 & CSV 或 Excel 导出会为每个问题显示 1 列。这些列就在帖子旁边，所以电子表格不需要解析 JSON。失败&跳过的行带有空映射。

## 与之前的运行比较

传入 `monitor.baselineDatasetId`，即之前某次已完成、分析设置相同的运行的数据集 ID。比较会读取那次运行的行。即使那次运行跳过了摘要，比较也能进行。之后每行都会多出 `monitor` 对象。它的状态取以下值。

- 没有基线时为 `first_run`。
- 之前的运行中没有的帖子为 `new_to_baseline`。
- 之前的运行中已有的帖子为 `unchanged` 或 `changed`。

`changes` 列出从 `previous` 变为 `current` 的每个形式、来源标注或相关性判断。判断按类别、四舍五入后的分数等级或以 0.5 为界的是或否结论比较。只有判断明显变化时，才算已变化。各次运行之间接近持平的结果仍为 `unchanged`。

基线超过 `maxBaselineRows` 或来自不同设置时，运行会在收集前停止。运行随后写入诊断行。`maxBaselineRows` 默认为 100,000。

## 任务示例

你可以从 50 个公开任务中选择。每个任务都从真实的英文搜索&有上限的 `maxItems` 开始。任务包含现成的目标、上下文&概览数据集视图。运行前可以修改搜索或目标。

- [给 X 上的 Nvidia 新闻帖子分类](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-nvidia-news-posts-on-x)
- [给 X 文章新闻帖子分类](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-x-article-news-posts)
- [给 X 上的 OpenAI 新闻帖子分类](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-openai-news-posts-on-x)
- [给 X 上的 Apple 新闻帖子分类](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-apple-news-posts-on-x)
- [给 X 上的 Tesla 新闻帖子分类](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-tesla-news-posts-on-x)
- [给 X 上的 SpaceX 新闻帖子分类](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-spacex-news-posts-on-x)
- [给 X 上的 Boeing 新闻帖子分类](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-boeing-news-posts-on-x)
- [给 X 上的 Pfizer 新闻帖子分类](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-pfizer-news-posts-on-x)
- [给 X 上的 Moderna 新闻帖子分类](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-moderna-news-posts-on-x)
- [给 X 上的 ExxonMobil 新闻帖子分类](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-exxon-news-posts-on-x)
- [给 X 上的美联储新闻帖子分类](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-federal-reserve-news-posts-on-x)
- [给 X 上的欧洲央行新闻帖子分类](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-european-central-bank-news-posts-on-x)
- [给 X 上的英国央行新闻帖子分类](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-bank-of-england-news-posts-on-x)

Actor 页面上的其余任务涵盖更多品牌、话题&市场。

## 相关 Xquik Actor

所有 Xquik Actor 都使用同一套提取引擎、先过滤后计费的规则&诊断功能。按你需要的数据选择对应的 Actor。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper) 从搜索、个人资料时间线、列表&帖子 ID 抓取帖子，提供 50 多个过滤条件&扁平导出。适合需要帖子数据但不做分析的场景。每行 $0.00015 起。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper) 从用户名、ID 或 URL 抓取个人资料，以及这些账号的帖子、回复、媒体&关注者。适合从账号而不是搜索入手的场景。每行 $0.00015 起。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper) 抓取帖子下的回复、评论&完整对话，提供 25 多个过滤条件。适合需要帖子下方讨论的场景。每行 $0.00015 起。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper) 按帖子 URL 或 ID 批量抓取回复、引用、转帖者&帖子串。适合衡量谁与帖子有过互动的场景。每行 $0.00015 起。
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper) 抓取帖子的引用帖子，包含文本、媒体、计数&作者，提供 11 个过滤条件。适合研究谁引用了帖子&说了什么的场景。每条帖子 $0.00015 起。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper) 抓取关注者、正在关注的账号、列表成员、订阅者&社群成员，输出为个人资料行。适合需要受众或成员名单的场景。每条个人资料 $0.00015 起。
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper) 按用户名、简介&位置搜索用户，可按关注者数、认证状态、账号年龄&位置过滤。适合通过搜索建立账号名单的场景。每条个人资料 $0.00015 起。
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper) 通过 X 的“账号所在地”标签、账号连接 X 的方式&用户名更改记录，查看账号所在的位置。适合核实账号所在地的场景。每个账号 $0.00015 起。
- [X Email Scraper](https://apify.com/xquik/x-email-scraper) 从用户名、关注者或用户搜索获取账号在个人资料上公开的邮箱、电话&链接。适合需要个人资料上公开的邮箱的场景。每条个人资料 $0.00015 起。
- [X List Scraper](https://apify.com/xquik/x-list-scraper) 从列表 URL 或 ID 抓取列表帖子、成员&关注者。适合用精选列表确定来源的场景。每行 $0.00015 起。
- [X Community Scraper](https://apify.com/xquik/x-community-scraper) 抓取社群信息、帖子、搜索结果、成员&版主。适合来源是 X 社群的场景。每行 $0.00015 起。
- [X Space Scraper](https://apify.com/xquik/x-space-scraper) 按关键词查找空间&读取它们的标题、状态、时间、听众数、主持人&发言人。它还能按 URL 或 ID 读取直播。适合追踪 X 上实时音频&视频的场景。每个空间或直播 $0.00015 起。
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper) 按位置抓取实时趋势，附带排名、帖子量、查询词 & WOEID。适合追踪各地热门话题的场景。每条趋势 $0.00015 起。
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper) 按关键词、地点、办公方式、职级&公司抓取 X 职位，附带薪资&申请链接。适合收集发布在 X 上的职位空缺的场景。每个职位 $0.00015 起。
- [X Article Scraper](https://apify.com/xquik/x-article-scraper) 把长篇 X 文章抓取为 Markdown & 纯文本，附带封面、作者、日期&指标。适合需要文章正文而不是帖子的场景。每篇文章 $0.00015 起。
- [X Media Downloader](https://apify.com/xquik/x-media-downloader) 从帖子或个人资料提取或存储照片、视频 & GIF，可选 MP4 & 元数据。适合需要媒体文件本身的场景。每条媒体行 $0.00015 起。
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring) 追踪品牌提及，用 AI 给出相关性、情感&客户体验答案，并比较各次运行。适合长期关注某个品牌的场景。每条已分析帖子 $0.0003 起。
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis) 用 AI 为每条帖子标注态度、强度&讽刺概率。适合了解任意话题整体情感的场景。每条已分析帖子 $0.0003 起。
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals) 用 AI 标注看涨、看跌、中性或混合立场，以及内容类型、信心程度&资产相关性。适合关注股票、加密货币或交易讨论的场景。每条已分析帖子 $0.0003 起。
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier) 用 AI 为每条帖子回答你自定义的分类、评分&是非问题。适合预设分析不符合你的标签的场景。每条已分析帖子 $0.0003 起。
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer) 根据 8 个 AI 特征答案，为每条帖子估算 0 到 100 的 Viral Score & 结论。适合研究帖子为何走红或遇冷的场景。每条已分析帖子 $0.0003 起。
- [X (Twitter) Monitor](https://apify.com/xquik/x-twitter-monitor) 捕获账号的每一条新推文、回复、引用、转帖和个人资料变更，通常在 X 显示后不到一秒，还会捕获关键词推文和关注动态。适合需要在 X 显示推文后立即收到提醒的场景。每个 monitor-hour $0.0045 起。

## 常见问题&支持

先解答常见问题，再说明在哪里获取帮助。

### 我需要 AI 账号、X API 密钥或登录吗？

不需要。Xquik 的 X (Twitter) News Monitor 的价格已包含 AI 费用。你不需要 AI 账号、token 或密钥。你也不需要 X API 密钥、登录或任何凭据。

### 可以使用自己的问题吗？

可以。自定义的 `analysis.questions` 会替换默认问题。可以发送 1 到 8 个 `choice`、`score` 或 `probability` 问题。选择题接受 2 到 255 个类别。评分题至少需要 2 个有序等级。要比较的多次运行请保持问题不变。

### 为什么某行返回时分析失败或被跳过？

`analysis.status` 为 `failed` 或 `skipped`。该 Actor 已收集&交付这条帖子，但 AI 分析没有完成。`analysis.reason` 会写明原因。`context_limit` 表示你的上下文&目标没有给帖子留出空间。`service_unavailable` 表示分析服务曾短暂不可用。这些行不产生结果费用。请缩短 `analysis.context`，或重新运行受影响的 ID。

帖子超过 `maxContextBytes` 时，该 Actor 仍会分析它。它先截断被引用&被回复的帖子，再截断这条帖子本身。这时 `analysis.contextAvailability.postText` 为 `truncated`。要保留更多文本，可以把 `maxContextBytes` 提高到最多 64,000。

### 分析会核实事实吗？

不会。答案描述帖子表达了什么&帖子如何表述。概率表示 AI 的置信度，不代表事实。重要的分类结果请对照原始帖子核查，每行都保留了原帖。

### 支持哪些语言？

提取支持 X 提供的所有语言。我们先在英文客户场景中验证分析。其他支持的语言返回结构相同的答案。在每种语言中，`unclear` 类别&概率都会反映不确定性。

### 如何控制成本？

过滤、去重 & `maxItems` 都在分析之前生效。你只为不重复且符合过滤条件的帖子付费。使用精确的搜索运算符、日期范围&互动下限。大规模运行前，先用较小的 `maxItems` 检查答案质量。

### 分析 X 数据合法吗？

该 Actor 请求的是公开的 X 字段。结果可能包含个人数据。请确认用途合法&遵守适用的隐私规定。不确定时，请咨询专业律师。

### 可以使用 API、定时调度&集成吗？

可以。[API 标签页](https://apify.com/xquik/x-twitter-news-monitor/api) 提供 Python、JavaScript & cURL 示例。用 Apify [定时调度](https://docs.apify.com/platform/schedules) 定期运行。把上次的数据集 ID 作为 `monitor.baselineDatasetId` 传入，就能看到变化。Apify 集成还能把运行连接到 webhook、Make、Zapier、n8n & Google Sheets。

### 在哪里获取帮助？

在 [Issues 标签页](https://apify.com/xquik/x-twitter-news-monitor/issues) 提交 issue，并附上运行 ID。键值存储中的免费诊断信息会说明需要注意的运行。没有返回任何行的运行，会在状态中说明原因。
