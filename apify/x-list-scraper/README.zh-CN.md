[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · **简体中文** · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer 将 Xquik MCP 连接到编程 Agent](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[观看 Framer 如何在 Claude Code、Codex、Cursor 等工具中使用 Xquik 抓取工具](https://youtu.be/4UOSpoOoC3Y?t=367)，从 6:07 开始。

Xquik 是全球最快、最便宜的 X（Twitter）抓取服务，X 数据也最完整。Xquik 的 X List Scraper 收集列表详情、帖子、成员&关注者，&按关键词查找列表。其他大多数 Apify Actor 在过滤或去重之前就开始收费。Xquik 只对已交付、不重复且符合过滤条件的结果收费。

从 X 列表 URL 或数字列表 ID 抓取详情、帖子、成员&关注者，或用搜索词查找公开列表。费用为**每个已交付行 $0.00015** & Apify 另行收取平台使用费。你不需要 X API 密钥或登录。

> Xquik 是独立的第三方服务，与 X Corp 无关联。
> “Twitter”和“X”是 X Corp 的商标。

## 列表数据&过滤条件

- 列表详情，包含名称、描述、成员数&关注者数、创建时间、横幅&所有者的公开个人资料。
- 列表帖子，包含正文、作者、指标、媒体&时间戳。
- 列表成员&列表关注者。
- 按关键词搜索列表。每行是 1 个列表，附带所有者、成员数&关注者数。
- 可选择包含列表帖子中的回复。
- 可按日期、Unix 时间、语言、媒体、互动量、认证状态&个人资料过滤。
- 成员&关注者支持个人资料过滤条件，例如 `minFollowers`、`hasEmail` & `bioContains`。
- 通过用户名或个人资料 URL，获取某个账号创建或被加入的公开列表。
- 1 次运行可读取多个列表&多种资源类型。
- 全局上限&每种列表资源或每个搜索词各自的上限。
- Apify 迁移后，运行会继续。
- 计费前去除重复项。

## 如何抓取 X 列表

刚接触 Apify？先[创建免费账号](https://console.apify.com/sign-up?fpr=xquik)。免费套餐不需要信用卡&每月提供 $5 可用额度。按每行 $0.00015 计算，不算平台用量，$5 最多可支付 33,000 行。然后回到这里&点击 Try for free。

1. 在 Apify Console 中打开 Xquik 的 X List Scraper。
2. 把列表 URL 粘贴到 `startUrls`，或把数字列表 ID 粘贴到 `listIds`。要查找列表，改为把关键词添加到 `searchTerms`。
3. 选择 `resources` & 添加 `sinceDate` 或 `minLikes` 等过滤条件。
4. 设置 `maxItems` 限制交付的行数，然后点击 Start。
5. 以 JSON、CSV 或 Excel 格式下载数据集，或使用 Apify API。

`startUrls` 中的每个 URL 可以写成普通字符串，也可以写成 `{ "url": "..." }` 对象。

```json
{
  "startUrls": [
    "https://x.com/i/lists/1748648376080666720",
    { "url": "https://x.com/nasa" }
  ]
}
```

## 输入

```json
{
  "listIds": ["1748648376080666720"],
  "resources": ["info", "tweets", "members", "followers"],
  "includeReplies": false,
  "maxItems": 10000
}
```

要按关键词查找列表，请发送搜索词。

```json
{ "searchTerms": ["space news", "climate science"], "maxItemsPerTarget": 50 }
```

顺利完成的小型运行会跳过 `run-report` & 节省 Apify 用量。开启 `alwaysSaveRunRecords` 后，每次运行都会写入报告。

## 输出

每行的 `resultType` 为 `list`、`listTweet`、`listMember` 或 `listFollower`。`sourceTarget` 保存输入的列表 ID，或找到某个 `list` 行的搜索词。`list` 行保存列表的详情，每个列表 1 行。其他行沿用 Xquik 稳定的帖子或个人资料响应结构。

成员行&关注者行带有 `email` & `contactInfo`。它们保存每个个人资料公开的邮箱、电话&链接。

### 账号的列表

把用户名添加到 `twitterHandles`，或把个人资料 URL 添加到 `startUrls`，就能列出每个账号的公开列表。

```json
{ "twitterHandles": ["verge"], "accountLists": ["created", "memberships"] }
```

`created` 列出该账号创建的列表 & `memberships` 列出包含该账号的列表。每个列表是 1 行，`resultType` 为 `createdList` 或 `listMembership`，`sourceTarget` 为该用户名，&带有 `id`、`name`、`description`、`memberCount`、`subscriberCount`、`createdAt`、`bannerUrl` & `owner` 个人资料。X 只向所有者显示私密列表，所以私密列表不会出现。

每个账号创建的列表排在它被加入的列表之前。该 Actor 并行读取多个账号，所以不同账号的行会按读取顺序到达。请按 `sourceTarget` 分组。

1 行对应 1 个账号&1 个列表。你的 2 个账号共有的列表是 2 行，每个账号下各 1 行。每行都会收费。`dedupeAcrossTargets` 从不移除这些行。

示例使用样例值。实际结果反映实时数据。列表详情行如下所示。

```json
{
  "resultType": "list",
  "sourceTarget": "4143408",
  "id": "4143408",
  "name": "NASA Centers",
  "description": "NASA has 10 centers http://www.nasa.gov/about/sites",
  "memberCount": 11,
  "subscriberCount": 859,
  "createdAt": "2009-12-02T22:41:02.000Z",
  "owner": { "username": "NASA", "name": "NASA" }
}
```

列表成员行如下所示。

```json
{
  "resultType": "listMember",
  "sourceTarget": "1748648376080666720",
  "username": "sample_user",
  "name": "Sample User",
  "followers": 1200,
  "verified": false
}
```

来自搜索词的 `list` 行如下所示。

```json
{
  "resultType": "list",
  "sourceTarget": "space news",
  "id": "1000000000000000001",
  "name": "Sample Space News",
  "description": "Sample accounts that post space news.",
  "url": "https://x.com/i/lists/1000000000000000001",
  "memberCount": 35,
  "subscriberCount": 76,
  "owner": { "username": "sample_user", "name": "Sample User" }
}
```

## 输出列

运行读到每行后，8 个输入会调整该行的形式。它们不运行代码&不改变价格。

| 字段                | 作用                                        |
| ------------------- | ------------------------------------------- |
| `fields`            | 只保留这些字段，顺序&拼写与你写的一致       |
| `omitFields`        | 去掉这些字段&保留其余字段                   |
| `renameFields`      | 把字段移到使用新名称的列中                  |
| `flatten`           | 把每个嵌套对象展开为顶层列                  |
| `fillMissingFields` | 某行缺少保留的字段时，填入 `null`。默认开启 |
| `joinFields`        | 把这些列表各自合并为 1 个文本值             |
| `joinSeparator`     | 合并项之间的文本。默认是逗号&空格           |
| `constantFields`    | 添加每行文本都相同的列                      |

- 用点号表示对象内的字段。大小写&下划线都没有影响。
- 每行都保留它的 `id`。
- 使用 `fields` 时，某行缺少的字段会以 `null` 输出。这样每行的列都相同。
- 字段名写错时，运行会在读取前停止&不收取任何费用。
- 如果无法检查字段名，运行会继续读取&把未见过的字段名列在最后。
- 运行会忽略为其他 Actor 编写的映射函数或 jq 过滤器。

在 `fields` 或 `renameFields` 中写上计算列的名称，即可添加该列。

| 列 | 公式 |
| --- | --- |
| `totalEngagement` | `likeCount` + `replyCount` + `retweetCount` + `quoteCount`。缺少的计数按 0 计算 |
| `engagementRate` | `totalEngagement` × 100 ÷ 作者的 `followers`，保留 4 位小数 |
| `engagementPerView` | `totalEngagement` × 100 ÷ `viewCount`，保留 4 位小数 |

没有这些计数的行，`totalEngagement` 为 `null`。除数缺失或为 0 时，比率为 `null`。

## 抓取 X 列表要花多少钱？

所有 Apify 套餐的价格都是每个已交付行 $0.00015。Apify 另行收取你的平台使用费。

需要更大的数据量时，请[选择 Apify 套餐](https://apify.com/pricing?fpr=xquik)，获得更多预付用量。

- 每个已交付的数据行收费 1 次。`diagnostics` 中的诊断信息免费。
- 没有启动费、列表费或资源费。
- 计费前先去重。

## 限制&恢复

Xquik 的 X List Scraper 在 1 次运行中读取多个列表&多种资源。已交付的行&进度在 Apify 重启后仍会保留。该 Actor 本身不设时间限制。

提取中断时，会写入免费的 `partial` 诊断。已获取的结果不受影响。重试前，先查看 `availableResults`、`failedTargets`、`retryable` & `nextAction`。Actor 成功退出只说明结果已交付，不代表提取完整。

运行状态会写明提前停止的每个原因。`stopCauses` 列出每个原因，并附上各自的 `message`、`retryable` & `nextAction`。原因包括 `target_not_found`、`target_failed`、`pagination_safety_limit` & `deadline_reached`。只有在其他原因让运行停止时，缺失的目标才会列入其中。只要任何原因可重试，整个运行就是 `retryable`。

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

### 我需要 X API 密钥或登录吗？

不需要。Xquik 的 X List Scraper 不需要 X API 密钥、登录或任何凭据。

### 抓取 X 列表合法吗？

Xquik 的 X List Scraper 请求的是公开的 X 字段。结果可能包含个人数据。请确认用途合法&遵守适用的隐私规定。不确定时，请咨询专业律师。

### 为什么我的运行没有返回结果？

先查看运行状态。空运行的状态会提示你检查目标&过滤条件。出现需要注意的情况时，会生成免费的 `diagnostics` 输出。其中的 `stopCauses` 为每个原因给出可以照做的 `nextAction`。运行会列出它无法读取的每个输入&说明修正方法。

### 可以使用 API、定时调度&集成吗？

可以。你可以从 50 个公开任务或 Xquik REST API 中选择。[API 标签页](https://apify.com/xquik/x-list-scraper/api) 提供 Python、JavaScript & cURL 示例。Apify [定时调度](https://docs.apify.com/platform/schedules) 可以按 cron 运行 Xquik 的 X List Scraper。Agent 使用 [Apify MCP](https://docs.apify.com/platform/integrations/mcp)。除非需要旧版构建，否则请使用 `latest`。

### 在哪里获取帮助？

在 [Issues 标签页](https://apify.com/xquik/x-list-scraper/issues) 提交 issue，并附上运行 ID。键值存储中的免费诊断信息会说明需要注意的运行。没有返回任何行的运行，会在状态中说明原因。

### 可以获得定制方案吗？

可以。在 [Issues 标签页](https://apify.com/xquik/x-list-scraper/issues) 中说明你的需求。Xquik 还提供仪表盘、REST API、MCP 服务器 & webhook。在 Xquik 的 [Apify 主页](https://apify.com/xquik) 上可以找到它的网站。
