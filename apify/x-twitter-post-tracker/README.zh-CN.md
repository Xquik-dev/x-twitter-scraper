[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · **简体中文** · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer 将 Xquik MCP 连接到编程 Agent](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[观看 Framer 如何在 Claude Code、Codex、Cursor 等工具中使用 Xquik 抓取工具](https://youtu.be/4UOSpoOoC3Y?t=367)，从 6:07 开始。

Xquik 是全球最快、最便宜的 X（Twitter）抓取服务，X 数据也最完整。Xquik 的 X (Twitter) Post Tracker 会记录你所选帖子的公开计数。它不需要 X Cookie 或登录。之后再运行一次，每一行都会显示变化。其他大多数 Apify Actor 在过滤或去重之前就开始收费。Xquik 只对已交付且不重复的结果收费。

粘贴帖子 URL 或推文 ID。每次运行为每条帖子保存 1 行快照。一行包含当时的浏览量、点赞、转帖、回复、引用和书签数。它还包含自上一次快照以来和自第一次快照以来的变化。费用为**每个已交付快照 $0.00015**，Apify 另行收取平台使用费。

> Xquik 是独立的第三方服务，与 X Corp 无关联。
> “Twitter”和“X”是 X Corp 的商标。

## 为什么使用 X (Twitter) Post Tracker？

- **每一行都有增长数据。** 每个快照都包含自上一次运行和第一次运行以来的变化。
- **不用数据库也有历史记录。** 传入之前某次运行的数据集。第一次快照会在一次次运行之间延续。
- **任意形式的帖子都能粘贴。** 在 1 个列表中混合帖子 URL 和推文 ID。
- **可直接放进表格的导出。** 用 `fields` 和 `flatten` 调整列。导出为 JSON、CSV、Excel、XML 或 RSS。

## 你能得到什么

### 完整的结果

- 每个结果都包含 X 为它提供的最完整数据。

### 准确的行

- 只有帖子真的不存在时，才会标为缺失。
- 行中的每个 ID 都保持精确。
- 行中只包含公开数据。

### 最新的数据

- X 上线改动后，读取仍能正常工作。

### 速度

- X 响应慢不会拖住你的请求。
- Actor 会同时读取多个账号、帖子和查询。
- 行一到达，读取就结束。
- 卡住的 Actor 调用会自动恢复。

### 公平计费

- 无效输入在任何读取之前就会被拒绝，所以不收费。
- Actor 只对已交付、不重复且符合过滤条件的行收费。
- 重启的运行绝不会重复收费。
- 花费上限会变成行数上限，诊断信息仍会写入。
- 小规模运行结束时会给出降低成本的提示。

### 可靠性

- X 的一次性故障不会让你的请求失败。
- 到达截止时间时，会返回已找到的行和诊断信息。
- Actor 能挺过 Xquik 的短暂中断。
- Actor 运行在重启后继续，不会重复。
- 一行出错不会拖垮整批。
- 停止的运行会保留它的行和报告。
- 无法启动的运行也会说明原因。
- X 那边的问题会在影响你的读取之前修复。
- 支持团队可以准确看到某个请求或运行返回了什么。

### 为 Agent 打造

- Actor 接受为其他 Actor 编写的输入。
- 每次运行都会说明结束原因以及是否需要重试。

### 丰富数据

- 跟踪的帖子会显示每项计数相比上一次运行的变化。

### 质量检查

- X 显示的每个字段，要么提供，要么有意省略，要么证明不存在。
- 每种读取每小时都会实时检查一次。

## X (Twitter) Post Tracker 能提取哪些数据？

- 每条帖子的浏览量、点赞、转帖、回复、引用和书签数。
- 每次快照的时间，位于 `capturedAt`。
- 每条帖子的第一次快照，包含时间和计数。
- 上一次快照，来自之前运行的数据集。
- 每项计数自上一次快照以来的变化。
- 每项计数自第一次快照以来的变化。
- 帖子文本、日期、链接和作者。
- 1 次运行处理多条帖子，按输入顺序交付。
- 通过 Apify 数据集导出 JSON、CSV、Excel、XML 和 RSS。

## 如何长期追踪 X 帖子数据

第一次使用 Apify？先[创建免费账号](https://console.apify.com/sign-up?fpr=xquik)。免费套餐无需信用卡，每月提供 $5 额度。按每个快照 $0.00015 计算，不含平台使用费，$5 最多可支付 33,000 个快照。然后回到这里，点击 Try for free。

1. 在 Apify Console 中打开 Xquik 的 X (Twitter) Post Tracker。
2. 把帖子 URL 或推文 ID 粘贴到 `tweetIds`。
3. 第一次运行时让 `previousDatasetId` 留空，然后点击 Start。
4. 下一次运行时，在 `previousDatasetId` 中选择第一次运行的数据集。
5. 以 JSON、CSV 或 Excel 格式下载数据集，或使用 Apify API。

任何步骤都不需要输入 X Cookie、登录信息或 API 密钥。

## 输入

`tweetIds` 接受推文 ID 和帖子 URL，可以任意混合。

```json
{
  "tweetIds": [
    "2102882545427714266",
    "https://x.com/OpenAI/status/2082577277246972300",
    "20"
  ],
  "maxItems": 1000
}
```

`startUrls` 接受同样的帖子 URL。每个 URL 可以写成普通字符串，也可以写成 `{ "url": "..." }` 对象。

`previousDatasetId` 指定本 Actor 之前某次运行的数据集。表单允许你从自己的数据集中选择。Actor 只读取该数据集。第一次运行时留空。

```json
{
  "tweetIds": ["2102882545427714266", "20"],
  "previousDatasetId": "<dataset ID of an earlier run>"
}
```

输入中出现 2 次的帖子只得到 1 行。`maxItems` 保留输入中排在前面的帖子。顺利完成的小规模运行会跳过 `run-report`，节省 Apify 使用量。打开 `alwaysSaveRunRecords`，每次运行都会写入它。

## 定时运行

Apify [定时调度](https://docs.apify.com/platform/schedules)按 cron 启动 Actor，比如每小时一次。

1. 用你的帖子运行一次 Actor，不填 `previousDatasetId`。
2. 在 Apify Console 中为 Actor 创建定时调度。
3. 给定时调度相同的 `tweetIds` 输入。
4. 把 `previousDatasetId` 设为第一次运行的数据集。

之后每次定时运行都会把计数与该数据集比较。要让每次运行与上一次比较，请通过 Apify API 启动运行。把上一次运行的 `defaultDatasetId` 作为 `previousDatasetId` 传入。第一次快照仍会延续，所以 `changeSinceFirst` 会从第 1 天起持续累计。上一次运行中缺失的帖子会在下一次运行中开始新的 `firstSnapshot`。

## 输出

每条帖子在每次运行中对应数据集的 1 行。一行以 `postId`、`url`、`text`、`createdAt` 和 `author` 开头。接着是 `capturedAt` 和 6 项计数，即 `viewCount`、`likeCount`、`retweetCount`、`replyCount`、`quoteCount` 和 `bookmarkCount`。然后是 `firstSnapshot`、`previousSnapshot`、`changeSincePrevious` 和 `changeSinceFirst`。计数为 0 可能表示 X 没有提供该数值。

示例使用样本值。结果反映实时数据。第二次运行的一行如下所示。

```json
{
  "postId": "2102882545427714266",
  "url": "https://x.com/NASA/status/2102882545427714266",
  "text": "Welcome to the Artemis Accords, Croatia",
  "createdAt": "Wed Sep 23 22:07:23 +0000 2026",
  "author": { "id": "11348282", "username": "NASA", "name": "NASA" },
  "capturedAt": "2026-10-28T09:00:00.000Z",
  "viewCount": 1291231,
  "likeCount": 9043,
  "retweetCount": 772,
  "replyCount": 207,
  "quoteCount": 100,
  "bookmarkCount": 661,
  "firstSnapshot": {
    "capturedAt": "2026-10-25T09:00:00.000Z",
    "viewCount": 500000,
    "likeCount": 5000,
    "retweetCount": 500,
    "replyCount": 150,
    "quoteCount": 50,
    "bookmarkCount": 400
  },
  "previousSnapshot": {
    "capturedAt": "2026-10-27T09:00:00.000Z",
    "viewCount": 1200000,
    "likeCount": 9000,
    "retweetCount": 770,
    "replyCount": 205,
    "quoteCount": 99,
    "bookmarkCount": 640
  },
  "changeSincePrevious": {
    "viewCount": 91231,
    "likeCount": 43,
    "retweetCount": 2,
    "replyCount": 2,
    "quoteCount": 1,
    "bookmarkCount": 21
  },
  "changeSinceFirst": {
    "viewCount": 791231,
    "likeCount": 4043,
    "retweetCount": 272,
    "replyCount": 57,
    "quoteCount": 50,
    "bookmarkCount": 261
  },
  "resultType": "snapshot",
  "sourceTarget": "2102882545427714266"
}
```

一行可以区分 3 种情况。

| 行中包含 | 含义 |
| --- | --- |
| `previousSnapshot: null` | 之前的数据集中没有这条帖子的行。 |
| 带计数的 `previousSnapshot` | 这一行与该快照比较。 |
| 变化字段中的 `null` 计数 | 之前的行缺少该计数。 |

第一次运行时，`firstSnapshot` 包含这一行自己的时间和计数。在之后的运行之前，两个变化字段都是 `null`。

## 输出列

8 个输入会在运行读取每一行之后调整它的形状。它们不运行代码，也不改变价格。

| 字段 | 作用 |
| --- | --- |
| `fields` | 只保留这些字段，按你写的顺序和拼写 |
| `omitFields` | 删除这些字段，保留其余字段 |
| `renameFields` | 把字段移到一个新名称的列 |
| `flatten` | 把每个嵌套对象变成顶层列 |
| `fillMissingFields` | 用 `null` 填充某行缺少的保留字段。默认开启 |
| `joinFields` | 把这些列表各自变成 1 个文本值 |
| `joinSeparator` | 合并项之间的文本。默认是一个逗号加一个空格 |
| `constantFields` | 添加一列，每行都是相同的文本 |

- 对象内的字段用点号表示，例如 `changeSinceFirst.viewCount`。
- 展开 `changeSincePrevious`，每项计数得到 1 列。
- 字段名写错会让运行在读取前停止，不收任何费用。
- 运行会忽略为其他 Actor 编写的 map 函数或 jq 过滤器。

## 追踪 X 帖子要花多少钱？

所有 Apify 套餐都是每个已交付快照 $0.00015。Apify 另行收取你的平台使用费。

需要更大用量时，[选择一个 Apify 套餐](https://apify.com/pricing?fpr=xquik)，获得更多预付用量。

- 每个已交付的快照行收费一次。`diagnostics` 中的诊断信息免费。
- 没有启动费，读取之前的数据集也不收费。
- 运行会在计费前删除重复的帖子。
- X 上不存在的帖子不会增加行，也不收费。
- 运行无法读取的数据集会让运行停止，不收任何费用。
- Apify 的最高总费用设置会限制交付的行数。

## 限制&恢复

Xquik 的 X (Twitter) Post Tracker 在 1 次运行中读取多条帖子。Apify 重启后，已交付的行和进度都会保留。这个 Actor 不额外设置时间限制。它会遵守你在 Apify 设置的任何超时。

运行状态会统计 X 中找不到匹配的帖子。之前的数据集最多可包含 100,000 行。运行无法读取的数据集会让运行在读取任何帖子之前停止。这时状态会提示你选择之前某次运行的数据集。中断的运行会写入免费的 `partial` 诊断。重试前请先阅读 `nextAction`。

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
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer) 根据 8 个 AI 特征答案，为每条帖子估算 0 到 100 的 Viral Score & 结论。适合研究帖子为何走红或遇冷的场景。每条已分析帖子 $0.0003 起。
- [X (Twitter) Monitor](https://apify.com/xquik/x-twitter-monitor) 捕获账号的每一条新推文、回复、引用、转帖和个人资料变更，通常在 X 显示后不到一秒，还会捕获关键词推文和关注动态。适合需要在 X 显示推文后立即收到提醒的场景。每个 monitor-hour $0.0045 起。

## 常见问题

先解答常见问题，再说明在哪里获取帮助。

### 我需要 X Cookie、API 密钥或登录吗？

不需要。Xquik 的 X (Twitter) Post Tracker 不需要 X Cookie、API 密钥、登录或任何凭据。

### `previousDatasetId` 应该选哪个数据集？

选择本 Actor 之前某次运行的数据集。其中每条帖子最新的一行会成为 `previousSnapshot`。Actor 会跳过其他 Actor 的行和诊断信息。

### 第一次快照能在多次运行后保留吗？

能。每一行都带有 `firstSnapshot`。把每次运行接在上一次之后，第一次快照就保持不变。

### 能追踪被删除的帖子吗？

不能。X 上不存在的帖子不会增加行，也不收费。运行状态会统计它。

### 追踪 X 帖子合法吗？

Xquik 的 X (Twitter) Post Tracker 请求的是公开的 X 字段。结果可能包含个人数据。请确认用途合法，并遵守适用的隐私规定。不确定时，请咨询专业律师。

### 可以使用 API、定时调度&集成吗？

可以。请使用 Apify API 或 Xquik REST API。[API 标签页](https://apify.com/xquik/x-twitter-post-tracker/api) 提供 Python、JavaScript 和 cURL 示例。Apify [定时调度](https://docs.apify.com/platform/schedules) 可以按 cron 运行 Xquik 的 X Post Tracker。Agent 可以通过 [Apify MCP](https://docs.apify.com/platform/integrations/mcp) 调用它。除非需要旧版构建，否则请使用 `latest`。

### 在哪里获取帮助？

在 [Issues 标签页](https://apify.com/xquik/x-twitter-post-tracker/issues) 提交 issue，并附上运行 ID。键值存储中的免费诊断信息会解释需要注意的运行。

### 可以获得定制方案吗？

可以。请在 [Issues 标签页](https://apify.com/xquik/x-twitter-post-tracker/issues) 说明你的需求。Xquik 还提供仪表盘、REST API、MCP 服务器和 webhook。你可以在 Xquik 的 [Apify 资料页](https://apify.com/xquik) 找到它的网站。
