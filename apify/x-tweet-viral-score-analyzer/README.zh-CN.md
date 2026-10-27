[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · **简体中文** · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer 将 Xquik MCP 连接到编程 Agent](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[观看 Framer 如何在 Claude Code、Codex、Cursor 等工具中使用 Xquik 抓取工具](https://youtu.be/4UOSpoOoC3Y?t=367)，从 6:07 开始。

Xquik 是全球最快、最便宜的 X（Twitter）抓取服务，X 数据也最完整。Xquik 的 X Tweet Viral Score Analyzer 为每条帖子评分。它会加上 Viral Score 估算值&结论。其他大多数 Apify Actor 在过滤或去重之前就开始收费。Xquik 只对已交付、不重复且符合过滤条件的结果收费。AI 费用已包含在每条帖子的价格中。你不需要 AI 账号、token 或密钥。

了解帖子为何走红或遇冷&保留原始帖子数据。Xquik 的 **X Tweet Viral Score Analyzer with AI** 收集匹配的帖子。AI 为每条帖子的 8 个特征打分。该 Actor 再把这些答案换算成 Viral Score 估算值&结论。每行都保留真实的喜欢、转帖、回复&引用数。你可以拿每个估算值和实际结果对比。

Viral Score 估算的是措辞的效果。它不预测喜欢数或查看次数。它也不复现 X 对帖子的排序方式。

> Xquik 是独立的第三方服务，与 X Corp 无关联。
> “Twitter”和“X”是 X Corp 的商标。

## 为什么使用 X Tweet Viral Score Analyzer with AI？

- **知道该发哪些帖子。** 每条帖子都会得到 `send_it`、`edit_first` 或 `sleep_on_it` 结论。
- **发帖前先测试草稿。** 把文本粘贴到 `texts` 中，获得同样的分数&结论。运行不会从 X 获取任何内容。
- **预测值与实际值对比。** 摘要会列出实际互动高于或低于分数预期的帖子。
- **了解每个账号什么内容有效。** 每个用户名都有它表现最好&最差的帖子。报告按发帖时段、长度、媒体&链接拆分它的平均分。
- **并排给账号排名。** 排行榜按平均 Viral Score & 实际互动率给用户名排名。
- **查看变化。** 把之前某次运行的数据集 ID 填入 `monitor.baselineDatasetId`。每行就会显示哪些特征发生了变化。
- **可直接用于表格的分数。** `Viral Score` 视图&导出会把分数、结论&答案放在各列中。
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
- 从新到旧的结果跨页也保持真实的日期顺序。
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
- `viralAlgorithmScore` 把帖子的公开计数换算成 1 个可比较的数字。

### 质量检查

- X 显示的每个字段，要么已提供，要么是有意省略，要么已证实不存在。
- Xquik 会针对 X 实时测试每一种读取。

## X Tweet Viral Score Analyzer with AI 返回哪些数据？

- **每条帖子的 Viral Score。** 固定且带版本号的规则为每条帖子算出 0 到 100 的分数。
- **8 个特征答案。** 它们说明帖子得分高或低的原因。
- **硬性上限。** 读起来像垃圾内容、引战内容或通用机器文案的帖子，分数会被封顶。
- **完整的原始记录。** 每行都保留该帖子公开的所有字段。

## 如何查看帖子的 Viral Score

刚接触 Apify？先[创建免费账号](https://console.apify.com/sign-up?fpr=xquik)。免费套餐不需要信用卡&每月提供 $5 可用额度。按每条已分析帖子 $0.0003 计算，不算平台用量，$5 最多可支付 16,000 条已分析帖子。然后回到这里&点击 Try for free。

1. 添加搜索词、个人资料用户名、帖子 URL 或帖子 ID。
2. 设置 `maxItems` & 任务需要的提取过滤条件。
3. 在 `analysis.context` 中描述你的受众，或保留默认值。
4. 开始运行&打开 `Viral Score` 数据集视图。

```json
{
  "searchTerms": ["from:NASA -filter:replies -filter:retweets"],
  "maxItems": 150,
  "analysis": { "context": "Space fans & general readers." }
}
```

### 该 Actor 回答什么

| 问题       | 答案                                           |
| ---------- | ---------------------------------------------- |
| 开头吸引力 | 0 为开头没有吸引力，1 为开头清楚，2 为开头抓人 |
| 清晰度     | 0 为令人困惑，1 为需要费力理解，2 为初读即懂   |
| 信息量     | 0 为没有新内容，1 为常见观点，2 为有用的收获   |
| 幽默感     | 0 为不好笑，1 为略微有趣，2 为好笑到值得分享   |
| 引战       | 帖子主要在煽动愤怒的概率                       |
| AI 写作感  | 文本读起来像通用机器文案的概率                 |
| 垃圾内容   | 属于垃圾内容、诈骗、抽奖或刷互动的概率         |
| 反应       | 分享、回复、喜欢、争论或忽略                   |

AI 写作感答案只判断文风。它不能确定帖子是谁写的。

### Viral Score 如何计算

开头吸引力、清晰度、收获&预期反应会提高分数。读起来像通用机器文案的措辞会降低分数。

硬性上限会限制疑似垃圾内容、引战内容&通用机器文案的分数。分数是 0 到 100 的整数。

| 结论          | 分数      |
| ------------- | --------- |
| `send_it`     | 70 到 100 |
| `edit_first`  | 40 到 69  |
| `sleep_on_it` | 0 到 39   |

`viral.weights` 标明这些规则的版本，例如 `viral_lite:1`。规则每次变化时，它都会变。分析失败或被跳过后，分数为 `null`。缺少某个默认特征答案时，分数也为 `null`。Xquik 的 X Tweet Viral Score Analyzer 从不用猜测值填补缺失的分数。

## 算法分数估算

X 在代码仓库 `xai-org/x-algorithm` 的 `home-mixer/params/param.rs` 文件中公开了排序权重。Xquik 的 X Tweet Viral Score Analyzer 把其中 4 个权重用于每条帖子的公开计数。

| 计数 | 权重 |
| ---- | ---- |
| 喜欢 | 0.66 |
| 回复 | 5    |
| 转帖 | 1    |
| 引用 | 5    |

`viral.algorithmWeightedSum` 是每项计数乘以权重后的总和。`viral.algorithmScore` 把这个总和除以查看次数，再乘以 1,000。没有查看次数的帖子改用关注者数。`viral.algorithmBasis` 标明除数是 `views` 还是 `followers`。只比较基准相同的分数。`viral.weightsVersion` 标明权重版本，例如 `x_algorithm_params:2026-10-14`。

这个估算有以下局限。

- X 把每个权重乘以它为单个查看者预测的概率。该 Actor 乘以的是观测到的计数。结果是估算值，不是 X 算出的分数。
- X 没有公开书签或查看次数的权重。总和不包含这 2 项。
- X 使用的信号不止这 4 项，例如停留时长&分享。公开数据看不到这些信号。
- 帖子既没有查看次数也没有关注者数时，分数为 `null`。
- AI 从不读取这些计数。它只读取文本&上下文。

## 预测值与实际值对比

Xquik 的 X Tweet Viral Score Analyzer 把每个 Viral Score 与实际结果对比。`viral.actualEngagementRate` 为 `log10(1 + weighted sum per 1,000 followers)`。取对数可以减小单条超大帖子的影响。关注者数缺失或为 0 时，该比率为 `null`。

运行摘要的 `viral.calibration` 块报告以下字段。

- `comparedPosts` 统计同时有 Viral Score & 实际比率的帖子。
- `rankCorrelation` 是取值 -1 到 1 的 Spearman 等级相关系数。它显示分数越高的帖子，实际比率是否也越高。
- `calibrationScore` 是相关系数乘以 100，最低为 0。
- `overperformers` & `underperformers` 各列出最多 5 条帖子。每条都有帖子 ID、URL、Viral Score、实际比率 & `gap`。

`gap` 是标准化的实际比率减去标准化的 Viral Score。差值达到 1 个标准差时，帖子会进入相应清单。

校准有以下局限。

- 对比的帖子少于 10 条时，校准为 `null`，原因为 `too_few_posts`。分数或比率完全相同时，原因为 `no_variation`。
- 相关系数是近似值。
- 校准只描述 1 次运行。分数低可能说明帖子在发布时间、话题或受众上不同。它不能证明措辞估算失效。
- 新帖子的互动还没积累完。请比较发布时长相近的帖子。

## 账号报告

运行摘要的 `viral.accounts` 块按作者用户名报告以下内容。

- 帖子数、平均 Viral Score & 平均实际互动率。
- Viral Score 最高&最低的帖子，附帖子 ID & URL。
- 每个分组的平均 Viral Score。分组包括 UTC 发帖小时、文本长度区间、是否有媒体、是否有链接&是否为自回复帖子串。

文本长度区间有 `short`、`medium`、`long` & `extended`。`short` 到 80 个字符为止，`medium` 到 200 & `long` 到 280。`extended` 涵盖更长的文本。自回复帖子串中的帖子回复的是作者自己。

报告有以下局限。

- 报告列出已评分帖子最多的 50 个用户名。
- 报告跟踪 1 次运行中的前 1,000 个用户名。`untrackedPosts` 统计之后出现的用户名的已评分帖子&没有用户名的帖子。
- 帖子很少的分组说明不了什么。比较平均值前，请先看 `posts`。
- 分组只显示本次运行中哪些情况同时出现。它们不显示因果关系。

## 排行榜

运行摘要的 `viral.leaderboard` 块为账号报告中的用户名排名。`byViralScore` 按平均 Viral Score 排名。`byActualEngagementRate` 按平均实际比率排名。每个榜单最多 20 个用户名，带有 `rank`、`posts` & `average`。

排行榜有以下局限。

- 用户名至少要有 3 条已评分帖子才能上榜。
- 比率榜跳过没有关注者数的用户名。
- 并列时，先比帖子数，再按用户名排序。
- 排行榜只涵盖 1 次运行的帖子，不代表账号的全部历史。

## 发帖前先给草稿打分

把你自己的文本粘贴到 `texts` 中。Xquik 的 X Tweet Viral Score Analyzer 会给它打分&不从 X 获取任何内容。

```json
{
  "texts": [
    "We shipped dark mode today. Try it and tell us what breaks.",
    "5 things we learned from 1,000 support tickets."
  ],
  "analysis": { "context": "Developers who use our app." }
}
```

- 每段文本生成 1 行，包含 `viralScore`、`viralVerdict` & `viral.stops`。
- `tweet.id` 依次为 `text:1`、`text:2` & 后续编号，`tweet.type` 则为 `text`。
- 草稿还没有喜欢或查看次数，所以 `viral.algorithmScore` 保持为 `null`。
- 每段已分析文本的费用与每条已分析帖子相同，都是 $0.0003。
- 设置 `texts` 后，运行只分析这些文本。X 目标请另外运行。

## 查看 Viral Score 要花多少钱？

Xquik 的 X Tweet Viral Score Analyzer 每条已分析帖子 $0.0003 起。它不收启动费。价格包含收集、AI 费用 & Viral Score。你不需要 AI 账号、token 或密钥。这个价格涵盖每条帖子最多 8 个问题 & 64,000 字节的上下文。每个问题定义最多可用 8,000 字节。

需要更大的数据量时，请[选择 Apify 套餐](https://apify.com/pricing?fpr=xquik)，获得更多预付用量。

提取过滤&去重在分析之前进行。你从不为被过滤掉的行或重复行付费。失败的分析、跳过的分析&诊断行不产生结果费用。Apify 会按你套餐的费率，另行收取计算、存储&传输的平台使用费。Pricing 标签页会显示这部分费用。

## 输入&输出示例

上面的输入可以直接复制使用。省略部分内容的输出行如下所示。

```json
{
  "tweet": { "id": "2100493544842494265", "text": "...", "likeCount": 12 },
  "viral": {
    "score": 74,
    "verdict": "send_it",
    "weights": "viral_lite:1",
    "stops": [],
    "algorithmScore": 9.46,
    "algorithmBasis": "views",
    "algorithmWeightedSum": 18.92,
    "actualEngagementRate": 0.7582,
    "weightsVersion": "x_algorithm_params:2026-10-14"
  },
  "viralScore": 74,
  "viralVerdict": "send_it",
  "viralAlgorithmScore": 9.46,
  "viralActualEngagementRate": 0.7582,
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

每条结果都包含 `tweet`、`analysis` & `viral`。答案包括类型、问题版本&可用的概率。`viral.stops` 列出封顶分数的硬性上限。分析失败或被跳过的行会保留已收集的帖子 & `reason`。它的答案列表为空&分数为 `null`。

键值存储中的免费诊断信息会说明无效输入、缺失结果&中断的收集。运行报告把已收集的行、已收费的分析&待收取的费用分开列出。

## 运行摘要&扁平答案

运行在以下 3 种情况下，会向它的键值存储写入 `analysis-summary` 记录。

- 运行遇到问题或规模较大。
- 比较发现了已变化、新增或无法比较的帖子。
- 开启了 `alwaysSaveRunRecords`。

其他运行会跳过这条记录，包括系列中的首次运行。它们的状态会写明主要答案，例如 `Average Viral Score is 64.`。没有变化的比较会显示 `No change since the earlier run.`。运行遇到问题或规模较大时，还会写入 `run-report`。开启 `alwaysSaveRunRecords` 的运行也会写入。`run-report` 会在 `results.analysisSummary` 下重复这份摘要。

摘要统计已分析、失败&跳过的行。它汇总互动数据&总结每个问题。

- `viral` 块报告 `averageScore` & 每种结论的数量。它也统计已评分&未评分的行。
- 同一个块还包含上文介绍的 `calibration`、`accounts` & `leaderboard`。
- 评分题报告平均值&按互动加权的平均值。
- `reaction` 分布显示每种反应下各有多少条帖子。
- `top` 列出每种反应下互动最多的 3 条帖子。
- 每行都列出 `sourceDomains`，即它链接到的主机名。
- 每行都列出文本中出现的 `cashtags`，例如 `$NVDA`。
- 设置 `monitor.baselineDatasetId` 时，摘要的 `monitor` 块会统计比较状态。它最多列出 50 个已变化的行。

空运行会报告为 0 的计数&为 `null` 的平均值。

每个结果行还带有 `viralScore`、`viralVerdict`、`viralAlgorithmScore` & `viralActualEngagementRate`。它还带有 `answers`，即以问题 ID 为键的扁平映射。每个值是所选的类别、分数或概率。`Viral Score` 数据集视图 & CSV 或 Excel 导出会显示这些列。这些列就在帖子旁边，所以电子表格不需要解析 JSON。失败&跳过的行带有空映射。

## 与之前的运行比较

传入 `monitor.baselineDatasetId`，即之前某次已完成、分析设置相同的运行的数据集 ID。比较会读取那次运行的行。即使那次运行跳过了摘要，比较也能进行。之后每行都会多出 `monitor` 对象。它的状态取以下值。

- 没有基线时为 `first_run`。
- 之前的运行中没有的帖子为 `new_to_baseline`。
- 之前的运行中已有的帖子为 `unchanged` 或 `changed`。

`changes` 列出从 `previous` 变为 `current` 的每个特征判断。判断按类别、四舍五入后的分数等级，或以 0.5 为界的是/否结论来比较。只有判断明显变化时，才算已变化。不同运行之间接近持平的结果仍为 `unchanged`。

基线超过 `maxBaselineRows` 或来自不同设置时，运行会在收集前停止。运行随后写入诊断行。`maxBaselineRows` 默认为 100,000。

## 任务示例

你可以从 50 个公开任务中选择。每个任务都从真实的英文搜索&有上限的 `maxItems` 开始。它使用 `Viral Score` 数据集视图。有些任务还加了受众上下文。运行前可以修改搜索或上下文。

- [AI 创业公司发布帖子的 Viral Score](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-ai-startup-launch-tweets)
- [SaaS 创始人公开构建帖子的 Viral Score](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-saas-founder-build-in-public-posts)
- [Product Hunt 发布帖子的 Viral Score](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-product-hunt-launch-posts)
- [开发者工具公告的 Viral Score](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-developer-tool-announcements)
- [开源版本发布帖子的 Viral Score](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-open-source-release-posts)
- [加密货币项目公告的 Viral Score](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-crypto-project-announcements)
- [育儿幽默帖子的 Viral Score](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-parenting-humor-posts)
- [职场幽默帖子的 Viral Score](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-office-humor-posts)
- [宠物照片配文的 Viral Score](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-pet-photo-captions)
- [NASA 帖子的 Viral Score 审查](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-nasa-posts)
- [Duolingo 帖子的 Viral Score 审查](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-duolingo-posts)
- [Wendy's 帖子的 Viral Score 审查](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-wendys-posts)

Actor 页面上的其余任务涵盖更多话题&品牌账号。

## 常见问题&支持

先解答常见问题，再说明在哪里获取帮助。

### 我需要 AI 账号、X API 密钥或登录吗？

不需要。Xquik 的 X Tweet Viral Score Analyzer 的价格已包含 AI 费用。你不需要 AI 账号、token 或密钥。你也不需要 X API 密钥、登录或凭据。

### 分数高就代表帖子会走红吗？

不会。分数估算的是措辞对普通读者的效果。发布时机、受众规模、媒体&运气也决定传播范围。依赖分数之前，请先与每行的真实互动数对比。

### 可以使用自己的问题吗？

可以。自定义的 `analysis.questions` 会替换默认问题。可以发送 1 到 8 个 `choice`、`score` 或 `probability` 问题。选择题接受 2 到 255 个类别。评分题至少需要 2 个有序等级。Viral Score 需要全部 8 个默认问题，所以使用自定义问题时它为 `null`。

### 为什么某行返回时分析失败或被跳过？

`analysis.status` 为 `failed` 或 `skipped`。该 Actor 已收集&交付这条帖子，但 AI 分析没有完成。`analysis.reason` 会写明原因。`context_limit` 表示你的上下文&目标没有给帖子留出空间。`service_unavailable` 表示分析服务曾短暂不可用。这些行不产生结果费用&没有分数。请缩短 `analysis.context`，或重新运行受影响的 ID。

帖子超过 `maxContextBytes` 时，该 Actor 仍会分析它。它先截断被引用&被回复的帖子，再截断这条帖子本身。这时 `analysis.contextAvailability.postText` 为 `truncated`。要保留更多文本，可以把 `maxContextBytes` 提高到最多 64,000。

### 分析会核实事实吗？

不会。答案描述帖子表达了什么&帖子如何表述。概率表示 AI 的置信度，不代表事实。重要的分类结果请对照原始帖子核查，每行都保留了原帖。

### 支持哪些语言？

提取支持 X 提供的所有语言。我们先在英文客户场景中验证分析。其他支持的语言返回结构相同的答案。

### 如何控制成本？

过滤、去重 & `maxItems` 都在分析之前生效。你只为不重复且符合过滤条件的帖子付费。使用精确的搜索运算符、日期范围&互动下限。大规模运行前，先用较小的 `maxItems` 检查答案质量。

### 分析 X 数据合法吗？

该 Actor 请求的是公开的 X 字段。结果可能包含个人数据。请确认用途合法&遵守适用的隐私规定。不确定时，请咨询专业律师。

### 可以使用 API、定时调度&集成吗？

可以。[API 标签页](https://apify.com/xquik/x-tweet-viral-score-analyzer/api) 提供 Python、JavaScript & cURL 示例。用 Apify [定时调度](https://docs.apify.com/platform/schedules) 定期运行。把上次的数据集 ID 作为 `monitor.baselineDatasetId` 传入，就能看到变化。Apify 集成还能把运行连接到 webhook、Make、Zapier、n8n & Google Sheets。

### 在哪里获取帮助？

在 [Issues 标签页](https://apify.com/xquik/x-tweet-viral-score-analyzer/issues) 提交 issue，并附上运行 ID。键值存储中的免费诊断信息会说明需要注意的运行。没有返回任何行的运行，会在状态中说明原因。

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
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor) 用 AI 按形式、来源标注&话题相关性标注新闻帖子。适合区分新闻报道和评论的场景。每条已分析帖子 $0.0003 起。
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier) 用 AI 为每条帖子回答你自定义的分类、评分&是非问题。适合预设分析不符合你的标签的场景。每条已分析帖子 $0.0003 起。
- [X (Twitter) Monitor](https://apify.com/xquik/x-twitter-monitor) 捕获账号的每一条新推文、回复、引用、转帖和个人资料变更，通常在 X 显示后不到一秒，还会捕获关键词推文和关注动态。适合需要在 X 显示推文后立即收到提醒的场景。每个 monitor-hour $0.0045 起。
