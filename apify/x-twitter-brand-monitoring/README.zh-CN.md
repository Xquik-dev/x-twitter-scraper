[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · **简体中文** · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer 将 Xquik MCP 连接到编程 Agent](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[观看 Framer 如何在 Claude Code、Codex、Cursor 等工具中使用 Xquik 抓取工具](https://youtu.be/4UOSpoOoC3Y?t=367)，从 6:07 开始。

Xquik 是全球最快、最便宜的 X（Twitter）抓取服务，X 数据也最完整。Xquik 的 X (Twitter) Brand Monitoring 追踪你的品牌提及，附带相关性、情感&客户体验答案。其他大多数 Apify Actor 在过滤或去重之前就开始收费。Xquik 只对已交付、不重复且符合过滤条件的结果收费。AI 费用已包含在每条帖子的价格中。你不需要 AI 账号、token 或密钥。

监测 X（Twitter）上的品牌提及&追踪各次运行之间的情感变化。Xquik 的 **X (Twitter) Brand Monitoring with AI Analysis** 收集每条匹配的帖子。它用 AI 为每条帖子回答相关性、情感&客户体验问题。它会把这些答案与之前的数据集比较，让你看到哪些发生了变化。每行都保留原始帖子数据。导出、复核&后续分析都无需重新抓取。

监测品牌、产品线或营销活动中的投诉、称赞&购买咨询。用真实帖子给客服&市场团队做简报。保留客户在每次运行中如何谈论你的历史记录。

- **源帖子的每个字段。** 正文、作者、计数、媒体、链接、被引用&被回复的帖子都和答案放在一起。
- **类型化答案。** 每行都有相关性概率、带概率的情感类别&客户体验类别。
- **变化追踪。** 运行之间按判断比较，所以概率的小幅波动不算变化。
- **先过滤后计费。** 你只为不重复、符合过滤条件且分析成功的帖子付费。

> Xquik 是独立的第三方服务，与 X Corp 无关联。
> “Twitter”和“X”是 X Corp 的商标。

## 如何在 X 上监测品牌

刚接触 Apify？先[创建免费账号](https://console.apify.com/sign-up?fpr=xquik)。免费套餐不需要信用卡&每月提供 $5 可用额度。按每条已分析帖子 $0.0003 计算，不算平台用量，$5 最多可支付 16,000 条已分析帖子。然后回到这里&点击 Try for free。

1. 添加搜索词、个人资料用户名、帖子 URL 或帖子 ID。例如搜索 `(Sony OR "WH-1000XM5") headphones lang:en`。
2. 设置 `maxItems` & 任务需要的提取过滤条件。例如日期范围、最少喜欢数&排除回复。
3. 把品牌名称&别名放进 `analysis.targets` & 在 `analysis.context` 中描述这个品牌。
4. 开始运行，然后记下数据集 ID，供下次比较。
5. 下次运行时，用这个 ID 添加 `monitor.baselineDatasetId`。保持问题、目标、上下文&上下文限制不变，这样答案才能比较。比较读取的是那个数据集，所以即使那次运行跳过了摘要，比较也能进行。

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

目标用于引导分类。它们不会生成搜索查询，也不会移除无关的帖子。请选择符合你研究需要的搜索词&过滤条件。

### 监测回答什么

| 问题       | 答案                           |
| ---------- | ------------------------------ |
| 品牌相关性 | 帖子讨论你的目标的概率         |
| 情感       | 积极、消极、混合、中性或不明确 |
| 客户体验   | 客户、潜在客户、旁观者或不明确 |

用相关性概率复核容易混淆的同名对象。情感描述作者对目标表达出的态度。

### 比较如何进行

| 比较状态               | 含义                        |
| ---------------------- | --------------------------- |
| `first_run`            | 没有提供基线                |
| `new_to_baseline`      | 基线中没有这个帖子 ID       |
| `unchanged`            | 每个可比较的判断都一致      |
| `changed`              | 至少有 1 个判断不同         |
| `not_comparable`       | 缺少元数据、ID 或匹配的设置 |
| `analysis_unavailable` | 这条帖子没有成功的分析      |

答案按判断比较。`choice` 答案按类别比较。`score` 答案按最接近的等级比较。`probability` 答案按以 0.5 为界的是或否判断比较。只有判断明显变化时，才算已变化。各次运行之间接近持平的结果仍为 `unchanged`，&保持同一判断的波动也是如此。所以各次运行之间 AI 的细微差异不会显示为变化。

`changes` 列出每个已变化的问题，并附上它的 `previous` & `current` 判断。变化可能来自 AI 的波动、新的上下文或被编辑的源数据。变化不能证明事实改变了，&某条帖子缺失也不能证明它被删除。

基线上限 `maxBaselineRows` 默认为 100,000 行。重复的帖子 ID、加载失败&数据集大小变化都会让比较在收集前停止。它们绝不会变成空基线。

## 分析你自己的文本

把你自己的草稿、回复、评价或笔记粘贴到 `texts` 中。Xquik 的 X (Twitter) Brand Monitoring 会分析这些文本。它不会从 X 获取任何内容。

```json
{
  "texts": [
    "The new update is great, but sync still drops on mobile.",
    "Support fixed my issue in 10 minutes. Thank you."
  ]
}
```

- 每段文本生成 1 行，`analysis` 答案与帖子相同。
- `tweet.id` 依次为 `text:1`、`text:2` & 后续编号，`tweet.type` 则为 `text`。
- 每段已分析文本的费用与每条已分析帖子相同，都是 $0.0003。
- 设置 `texts` 后，运行只分析这些文本。X 目标请另外运行。

## 在 X 上监测品牌要花多少钱？

Xquik 的 X (Twitter) Brand Monitoring 每条已分析帖子 $0.0003 起。它不收启动费。价格包含收集 & AI 费用。你不需要 AI 账号、token 或密钥。这个价格涵盖每条帖子最多 8 个问题 & 64,000 字节的上下文。每个问题定义最多可用 8,000 字节。

需要更大的数据量时，请[选择 Apify 套餐](https://apify.com/pricing?fpr=xquik)，获得更多预付用量。

提取过滤&去重在分析之前进行。你从不为被过滤掉的行或重复行付费。失败的分析、跳过的分析&诊断行不产生结果费用。Apify 会按你套餐的费率，另行收取计算、存储&传输的平台使用费。Pricing 标签页会显示这部分费用。

## 输入&输出示例

上面的输入可以直接复制使用。省略部分内容的输出行如下所示。

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

每条结果都包含 `tweet`、`analysis` & `monitor`。答案包括类型、问题版本&可用的概率。`analysis.contextAvailability` 报告缺失的引用、回复、作者&媒体上下文。分析失败或被跳过的行会保留已收集的帖子 & `reason`。它的答案列表为空。

键值存储中的免费诊断信息会说明无效输入、缺失结果&中断的收集。运行报告把已收集的行、已收费的分析&待收取的费用分开列出。

## 运行摘要&扁平答案

运行在以下 3 种情况下，会向它的键值存储写入 `analysis-summary` 记录。

- 运行遇到问题或规模较大。
- 比较发现了已变化、新增或无法比较的帖子。
- 开启了 `alwaysSaveRunRecords`。

其他运行会跳过这条记录，包括系列中的第 1 次运行。它们的状态会写明占比最高的答案，例如 `Top sentiment is negative in 2 of 5 results.`。没有变化的比较会显示 `No change since the earlier run.`。遇到问题或规模较大的运行还会写入 `run-report`。开启 `alwaysSaveRunRecords` 的运行也会写入。`run-report` 会在 `results.analysisSummary` 下重复这份摘要。

摘要统计已分析、失败&跳过的行。它汇总互动数据&总结每个问题。

- `targets` 报告每个品牌或别名的提及数、声量占比&互动数据。
- 每个 `targets` 条目都有 `top`，即每个答案类别下互动最多的 3 条提及。可以用它为最强烈的负面&正面提及设置提醒。
- 每个 `targets` 条目都有 `choices`，即提及该品牌的帖子中的答案分布。
- `sentiment` 块在 `top` 下列出互动最多的 3 条正面&负面提及。
- `relevance` 统计与品牌相关的提及。
- `monitor.changedRows` 列出自基线以来判断发生变化的帖子。可以把它们发到 webhook 或提醒中。
- 设置 `monitor.baselineDatasetId` 时，`monitor` 块会统计比较状态。它最多列出 50 个已变化的行。
- 每行都列出 `sourceDomains`，即它链接到的主机名。

摘要把数字四舍五入到 4 位小数。空运行会报告为 0 的计数&为 `null` 的平均值。

每个结果行还带有 `answers`，即以问题 ID 为键的扁平映射。每个值是所选的类别、分数或概率。`Flat answers` 数据集视图 & CSV 或 Excel 导出会为每个问题显示 1 列。这些列就在帖子旁边，所以电子表格不需要解析 JSON。失败&跳过的行带有空映射。

## 任务示例

你可以从 50 个公开任务中选择。每个任务都从真实的英文搜索&有上限的 `maxItems` 开始。任务包含现成的目标、上下文&概览数据集视图。运行前可以修改搜索或目标。

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
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis) 用 AI 为每条帖子标注态度、强度&讽刺概率。适合了解任意话题整体情感的场景。每条已分析帖子 $0.0003 起。
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals) 用 AI 标注看涨、看跌、中性或混合立场，以及内容类型、信心程度&资产相关性。适合关注股票、加密货币或交易讨论的场景。每条已分析帖子 $0.0003 起。
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor) 用 AI 按形式、来源标注&话题相关性标注新闻帖子。适合区分新闻报道和评论的场景。每条已分析帖子 $0.0003 起。
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier) 用 AI 为每条帖子回答你自定义的分类、评分&是非问题。适合预设分析不符合你的标签的场景。每条已分析帖子 $0.0003 起。
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer) 根据 8 个 AI 特征答案，为每条帖子估算 0 到 100 的 Viral Score & 结论。适合研究帖子为何走红或遇冷的场景。每条已分析帖子 $0.0003 起。
- [X (Twitter) Monitor](https://apify.com/xquik/x-twitter-monitor) 捕获账号的每一条新推文、回复、引用、转帖和个人资料变更，通常在 X 显示后不到一秒，还会捕获关键词推文和关注动态。适合需要在 X 显示推文后立即收到提醒的场景。每个 monitor-hour $0.0045 起。

## 常见问题&支持

先解答常见问题，再说明在哪里获取帮助。

### 我需要 AI 账号、X API 密钥或登录吗？

不需要。Xquik 的 X (Twitter) Brand Monitoring 的价格已包含 AI 费用。你不需要 AI 账号、token 或密钥。你也不需要 X API 密钥、登录或任何凭据。

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

可以。[API 标签页](https://apify.com/xquik/x-twitter-brand-monitoring/api) 提供 Python、JavaScript & cURL 示例。用 Apify [定时调度](https://docs.apify.com/platform/schedules) 定期运行。把上次的数据集 ID 作为 `monitor.baselineDatasetId` 传入，就能看到变化。Apify 集成还能把运行连接到 webhook、Make、Zapier、n8n & Google Sheets。

### 在哪里获取帮助？

在 [Issues 标签页](https://apify.com/xquik/x-twitter-brand-monitoring/issues) 提交 issue，并附上运行 ID。键值存储中的免费诊断信息会说明需要注意的运行。没有返回任何行的运行，会在状态中说明原因。
