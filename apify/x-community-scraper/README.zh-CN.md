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
<a href="https://youtu.be/4UOSpoOoC3Y?t=367"><img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" width="720" alt="Framer 将 Xquik MCP 连接到编程 Agent"></a><br>
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">从 6:07 开始，观看 Framer 如何在 Claude Code、Codex、Cursor 等工具中使用 Xquik 抓取工具。</a>
</td></tr></table>

Xquik 是全球最快、最便宜的 X（Twitter）抓取服务，X 数据也最完整。Xquik 的 X Community Scraper 收集社群信息、帖子、媒体、搜索结果、成员和版主，并按关键词或话题查找社群。其他大多数 Apify Actor 在过滤或去重之前就开始收费。Xquik 只对已交付、不重复且符合过滤条件的结果收费。

从社群 URL 或 ID 收集 Twitter 社群（X Communities）的信息、帖子、媒体、关键词匹配结果、成员和版主。按关键词或话题查找社群，或列出 X 推荐的社群。费用为**每个已交付行 $0.00015**，Apify 另行收取平台使用费。无需 X API 密钥，也无需登录。

> Xquik 是独立的第三方服务，与 X Corp 无关联。“Twitter”和“X”是 X Corp 的商标。

## X Community Scraper 能做什么？

Xquik 的 X Community Scraper 通过 URL 或 ID 读取公开的 X（Twitter）社群。它返回每个社群的信息、帖子、媒体、关键词匹配结果、成员和版主。它还能按关键词或话题查找社群，并列出 X 推荐的社群。

### 主要功能

- 1 次运行可读取多个社群和多种资源。
- 获取社群信息，包括规则、加入问题、创建者、管理员和话题。
- 按从新到旧收集帖子，或收集 X 排名最高的“热门”帖子。
- 收集“媒体”标签页，或按关键词搜索社群帖子。
- 导出成员和版主，或按名称查找成员。
- 按关键词或话题查找社群，并附带完整记录。
- 按日期、语言、媒体和互动数据过滤帖子。
- 按受众规模、账号年龄和认证状态过滤成员。
- 过滤和去重都在计费前完成。
- Apify 重启运行时，已交付的行和进度都会保留。

### 使用场景

- 从细分社群的成员中建立潜在客户名单。
- 在用户社群中追踪产品反馈和功能需求。
- 在创始人群体中发现产品发布、招聘帖子和融资消息。
- 按规模、话题和活跃度比较社群。
- 在社群中发帖前，先阅读它的规则。
- 找出社群的版主和关注者最多的成员。
- 收集带图片或视频的帖子，用于创意研究。

### X Community Scraper 能提取哪些数据？

社群行使用 `resultType: "community"`。主要字段如下：

| 字段              | 说明                           |
| ----------------- | ------------------------------ |
| `id`              | 社群 ID                        |
| `name`            | 社群名称                       |
| `description`     | 社群简介                       |
| `url`             | 社群 URL                       |
| `member_count`    | 成员数                         |
| `moderator_count` | 版主数                         |
| `rules`           | 社群规则                       |
| `question`        | 社群向加入的用户提出的问题     |
| `primary_topic`   | X 将社群归入的话题             |
| `searchTags`      | X 用来查找社群的标签           |
| `creator`         | 创建者的公开个人资料           |
| `admin`           | 管理员的公开个人资料           |
| `membersFacepile` | X 在社群页面上预览的成员       |
| `is_nsfw`         | 社群是否被标记为敏感内容       |
| `banner`          | 横幅 URL、尺寸和主色           |
| `sourceTarget`    | 你输入的 URL、ID、关键词或话题 |

每种资源会添加各自类型的行：

| `resultType`         | 资源或输入               | 每行对应           |
| -------------------- | ------------------------ | ------------------ |
| `community`          | `info`、关键词、话题     | 社群               |
| `communityTweet`     | `tweets`、`search`       | 帖子               |
| `communityMedia`     | `media`                  | 带照片或视频的帖子 |
| `communityMember`    | `members`、`memberNames` | 成员               |
| `communityModerator` | `moderators`             | 版主               |
| `communityTopic`     | `listTopics`             | 话题               |

帖子行包含 `text`、`createdAt`、`likeCount`、`replyCount`、`retweetCount`、`viewCount`、`media` 和 `author` 个人资料。成员行和版主行包含个人资料字段，例如 `username`、`followers`、`verified` 和 `communityRole`。

## 如何使用 X Community Scraper 抓取社群数据？

在 Apify Console 中按以下步骤操作：

1. 打开一个[任务示例](#任务示例)或 Input 标签页。
2. 把社群 URL 粘贴到 `startUrls`，或把 ID 粘贴到 `communityIds`。
3. 选择 `resources`，并添加 `sinceDate` 或 `minLikes` 等过滤条件。
4. 设置 `maxItems`，然后点击 Start。
5. 以 JSON、CSV、Excel 或 HTML 格式导出数据集。

下面每个示例都是完整的输入。

### 获取社群信息和最新帖子

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["info", "tweets"],
  "maxItems": 200
}
```

`startUrls` 中的每个 URL 可以写成普通字符串，也可以写成 `{ "url": "..." }` 对象：

```json
{
  "startUrls": [
    "https://x.com/i/communities/1493446837214187523",
    { "url": "https://x.com/i/communities/1493446837214187523" }
  ]
}
```

### 收集热门帖子

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["tweets"],
  "postsOrder": "Top",
  "minLikes": 50,
  "maxItems": 100
}
```

把 `postsOrder` 设为 `Top`，获取 X 排名最高的帖子。要读取“媒体”标签页，把 `"media"` 加入 `resources`。

### 搜索社群帖子

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["search"],
  "query": "pricing",
  "queryType": "Latest",
  "maxItems": 100
}
```

### 导出成员和版主

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["members", "moderators"],
  "minFollowers": 1000,
  "maxItems": 1000
}
```

成员过滤条件同时适用于成员行和版主行。被过滤掉的行不会进入数据集，所以你无需为它们付费。

### 按名称查找成员

```json
{
  "communityIds": ["1493446837214187523"],
  "memberNames": ["marckohlbrugge"],
  "maxItems": 100
}
```

与 x.com 的成员搜索一样，X 对每个名称最多检查 10 个匹配账号。找到的每个成员是 1 个 `communityMember` 行，附带其 `communityRole`。使用 `memberNames` 的运行不会读取其他资源，除非 `resources` 中列出了它们。

### 按关键词或话题查找社群

```json
{
  "searchTerms": ["artificial intelligence"],
  "topics": ["Technology"],
  "maxItems": 100
}
```

找到的每个社群都带有规则，以及创建者、管理员和成员的个人资料。把 `includeDetails` 设为 `false`，运行更快，只返回简短记录。开启 `includeSuggested`，获取 X 推荐的社群，每次运行的结果可能不同。开启 `listTopics`，获取每个话题及其子话题。

## 任务示例

你可以从 50 个公开任务中选择。每个任务都有限定范围的输入和匹配的数据集视图。运行任务前，先按你的需要编辑它。

- [获取 X 社群概览](https://apify.com/xquik/x-community-scraper/examples/get-an-x-community-overview)
- [获取 X 社群详情和最新帖子](https://apify.com/xquik/x-community-scraper/examples/get-community-details-with-recent-posts)
- [查找 X 社群中的热门科技帖子](https://apify.com/xquik/x-community-scraper/examples/find-top-technology-posts-in-a-community)
- [导出 X 社群成员](https://apify.com/xquik/x-community-scraper/examples/export-x-community-members)
- [导出 X 社群的认证成员](https://apify.com/xquik/x-community-scraper/examples/export-verified-community-members)
- [列出 X 社群的版主](https://apify.com/xquik/x-community-scraper/examples/list-x-community-moderators)
- [按规模和话题比较开发者社群](https://apify.com/xquik/x-community-scraper/examples/compare-developer-communities-by-size)
- [发帖前阅读 X 社群规则](https://apify.com/xquik/x-community-scraper/examples/read-community-rules-before-you-post)
- [在创业社群中查找融资帖子](https://apify.com/xquik/x-community-scraper/examples/find-funding-posts-in-a-startup-community)
- [在软件工程社群中查找招聘帖子](https://apify.com/xquik/x-community-scraper/examples/find-hiring-posts-in-a-software-community)
- [查找拥有大量受众的创业社群成员](https://apify.com/xquik/x-community-scraper/examples/find-startup-community-members-with-big-audiences)
- [全面审查一个小型 X 社群](https://apify.com/xquik/x-community-scraper/examples/audit-a-small-community-end-to-end)

## 抓取 X 社群要花多少钱？

在所有 Apify 套餐中，Xquik 的 X Community Scraper 的价格都是每个已交付行 $0.00015。Apify 另行收取平台使用费。Xquik 对每个已交付的数据行收费一次。`diagnostics` 输出中的诊断信息免费。

- 无需订阅 Xquik。
- 没有单独的启动费、社群费、资源费或查询费。
- 找到的每个社群计 1 行，无论是否带完整记录。
- 过滤和去重在计费前完成。被过滤掉的行和重复行都不收费。
- Apify 的最高总费用设置会限制已交付行数。

遇到问题的运行或大型运行，还会写入一条 `run-report` 记录。顺利完成的小型运行会跳过它，节省 Apify 用量。开启 `alwaysSaveRunRecords` 后，每次运行都会写入这条记录。

要限制单次运行的花费，请参阅[运行选项](#运行选项)。

## 空运行、不完整运行和已停止的运行

Xquik 的 X Community Scraper 会免费说明空运行、不完整运行和已停止运行的原因。运行状态会写明运行停止的原因，还会统计已收费的结果数和已读取的目标数。

### 结果为空

空运行的状态会提示你检查目标和过滤条件。被过滤掉的行不会占用你的结果上限。如果运行读取了所有目标却没有返回任何行，就不会写入记录。它的状态会说明原因和需要修改的内容。该 Actor 只返回 X 公开展示的社群。可用字段因社群而异。

### 不完整的运行

提取中断时，会写入一条免费的 `partial` 诊断。已交付的行会留在数据集中。重试前，先查看 `availableResults`、`failedTargets`、`retryable` 和 `nextAction`。Actor 成功退出只说明结果已交付，不代表提取完整。

### 停止原因

运行状态会写明提前停止的每个原因。`stopCauses` 列出每个原因，并附上各自的 `message`、`retryable` 和 `nextAction`。原因包括 `target_not_found`、`target_failed`、`pagination_safety_limit` 和 `deadline_reached`。只有在其他原因让运行停止时，缺失的目标才会一并列出。只要有一个原因可重试，整个运行就是 `retryable`。该 Actor 本身不设时间限制。

## 输入

Input 标签页列出了所有选项。请提供社群 URL 或 ID、关键词、话题，或开启 `includeSuggested` 或 `listTopics`。其他字段都是可选的。

| 字段                           | 作用                                                         |
| ------------------------------ | ------------------------------------------------------------ |
| `startUrls`                    | x.com 上的社群 URL                                           |
| `communityIds`                 | 数字社群 ID                                                  |
| `resources`                    | `info`、`tweets`、`media`、`search`、`members`、`moderators` |
| `query`                        | `search` 资源使用的关键词                                    |
| `queryType`                    | 关键词搜索的排序：`Latest` 或 `Top`                          |
| `postsOrder`                   | 帖子的排序：`Latest` 或 `Top`                                |
| `memberNames`                  | 要在成员中查找的名称或用户名                                 |
| `searchTerms`                  | 用于查找社群的关键词                                         |
| `topics`                       | 话题名称或 ID，例如 `Technology`                             |
| `includeSuggested`             | 添加 X 推荐加入的社群                                        |
| `listTopics`                   | 添加每个社群话题及其子话题                                   |
| `includeDetails`               | 为按关键词或话题找到的社群添加完整记录                       |
| `maxItems`                     | 整个运行的已交付行数上限                                     |
| `maxItemsPerTarget`            | 每种社群资源的行数上限                                       |
| `sinceDate`, `untilDate`       | 只保留日期范围内的帖子                                       |
| `language`                     | 只保留 1 个语言代码对应的帖子                                |
| `mediaType`                    | 只保留带图片、视频、GIF、链接或不带媒体的帖子                |
| `minViews`, `minLikes`         | 只保留查看次数或喜欢次数高于指定值的帖子                     |
| `minReplies`, `minRetweets`    | 只保留回复数或转帖数高于指定值的帖子                         |
| `nativeRetweets`               | 只保留原生转帖                                               |
| `verifiedOnly`                 | 只保留认证作者、成员或版主                                   |
| `minFollowers`, `maxFollowers` | 只保留受众规模在指定范围内的成员                             |
| `minAccountAgeDays`            | 只保留账号年龄不少于指定天数的成员                           |
| `dedupeAcrossTargets`          | 计费前去除跨社群重复的行                                     |

### 从其他社群 Actor 迁移

`ranking` 和 `sort` 这两个名称与 `postsOrder` 的作用相同。`Top` 或 `Relevance` 读取排名最高的帖子。同时设置其中一个和 `postsOrder` 时，以 `postsOrder` 的值为准。运行日志会写明被忽略的字段。

### 选择合适的输入

- 想快速了解社群，保留默认的 `info` 和 `tweets` 资源。
- 要建立潜在客户名单，选择 `members`，并搭配 `minFollowers` 和 `verifiedOnly`。
- 要做产品研究，选择 `search`，并设置 `query`，例如 `bug` 或 `pricing`。
- 要做创意研究，选择 `media` 并设置 `mediaType`。
- 要发现社群，发送 `searchTerms` 或 `topics`，无需提供 ID。

## 输出

每行都是一个 JSON 对象。每行都有 `sourceTarget`，指向输入的社群、关键词或话题。Xquik 的 X Community Scraper 保留原始字段，不编造任何值。数据集 schema 为每个字段提供标题和说明。

示例使用样例值，实际结果来自实时数据。一行社群信息如下：

```json
{
  "resultType": "community",
  "sourceTarget": "1493446837214187523",
  "id": "1493446837214187523",
  "name": "Sample Community",
  "description": "A place to share what you build.",
  "member_count": 1200,
  "moderator_count": 4,
  "primary_topic": "Technology"
}
```

以 JSON、CSV、Excel 或 HTML 格式导出数据集。

## 运行选项

- 设置 Apify 的最高总费用，限制运行成本。把 `maxItems` 设得高一些，在预算内获取尽可能多的行。
- 在 Apify API 中设置 `maxTotalChargeUsd`，或在 Console 中设置 Max cost per run。
- 把所有社群放在 1 次运行中。每次运行都要向 Apify 支付同样的启动成本。
- `maxItemsPerTarget` 限制每种社群资源的行数。
- `maxConcurrency` 设置同时运行的社群资源数量。默认值是最快且安全的设置。

每次运行都选择 `latest`，以获得所有已发布的修复。已保存的任务和定时调度会保留各自的构建选择，所以请把它们设为 `latest`。

## 相关 Xquik Actor

所有 Xquik Actor 都使用同一套提取引擎、先过滤后计费的规则和诊断功能。按你需要的数据选择对应的 Actor。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper)：从搜索、个人资料时间线、列表和帖子 ID 抓取帖子，提供 50 多个过滤条件和扁平导出。适合只要帖子数据、不做分析的场景。每行 $0.00015 起。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper)：从用户名、ID 或 URL 抓取个人资料，以及这些账号的帖子、回复、媒体和关注者。适合从账号而不是搜索入手的场景。每行 $0.00015 起。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper)：抓取帖子下的回复、评论和完整对话，提供 25 多个过滤条件。适合需要帖子下方讨论的场景。每行 $0.00015 起。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper)：按帖子 URL 或 ID 批量抓取回复、引用、转帖者和帖子串。适合衡量谁与帖子有过互动的场景。每行 $0.00015 起。
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper)：抓取引用帖子的帖子，包含文本、媒体、计数和作者，提供 11 个过滤条件。适合研究谁引用了帖子以及说了什么的场景。每条帖子 $0.00015 起。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper)：抓取关注者、正在关注的账号、列表成员、订阅者和社群成员，输出为个人资料行。适合需要受众或成员名单的场景。每条个人资料 $0.00015 起。
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper)：按用户名、简介和位置搜索用户，可按关注者数、认证状态、账号年龄和位置过滤。适合通过搜索建立账号名单的场景。每条个人资料 $0.00015 起。
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper)：通过 X 的“账号所在地”标签、账号连接 X 的方式和用户名更改记录，查看账号所在的位置。适合核实账号所在地的场景。每个账号 $0.00015 起。
- [X List Scraper](https://apify.com/xquik/x-list-scraper)：从列表 URL 或 ID 抓取列表帖子、成员和关注者。适合用精选列表确定来源的场景。每行 $0.00015 起。
- [X Space Scraper](https://apify.com/xquik/x-space-scraper)：按关键词查找空间，读取标题、状态、时间、听众数、主持人和发言人，也可按 URL 或 ID 读取直播。适合追踪 X 上实时音频和视频的场景。每个空间或直播 $0.00015 起。
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper)：按位置抓取实时趋势，附带排名、帖子量、查询词和 WOEID。适合追踪各地热门话题的场景。每条趋势 $0.00015 起。
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper)：按关键词、地点、办公方式、职级和公司抓取 X 职位，附带薪资和申请链接。适合收集发布在 X 上的职位空缺的场景。每个职位 $0.00015 起。
- [X Article Scraper](https://apify.com/xquik/x-article-scraper)：把长篇 X 文章抓取为 Markdown 和纯文本，附带封面、作者、日期和指标。适合需要文章正文而不是帖子的场景。每篇文章 $0.00015 起。
- [X Media Downloader](https://apify.com/xquik/x-media-downloader)：从帖子或个人资料提取或存储照片、视频和 GIF，可选 MP4 和元数据。适合需要媒体文件本身的场景。每条媒体行 $0.00015 起。
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring)：追踪品牌提及，用 AI 判断相关性和情感、回答客户体验问题，并比较各次运行。适合长期关注一个品牌的场景。每条已分析帖子 $0.0003 起。
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis)：用 AI 为每条帖子标注态度、强度和讽刺概率。适合了解任意话题整体情感的场景。每条已分析帖子 $0.0003 起。
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)：用 AI 标注看涨、看跌、中性或混合立场，以及内容类型、信心程度和资产相关性。适合关注股票、加密货币或交易讨论的场景。每条已分析帖子 $0.0003 起。
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)：用 AI 按形式、来源标注和话题相关性标注新闻帖子。适合区分新闻报道和评论的场景。每条已分析帖子 $0.0003 起。
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)：用 AI 为每条帖子回答你自定义的分类、评分和是非问题。适合预设分析不符合你的标签的场景。每条已分析帖子 $0.0003 起。
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)：根据 8 个 AI 特征答案，为每条帖子估算 0 到 100 的 Viral Score 和结论。适合研究帖子为何走红或遇冷的场景。每条已分析帖子 $0.0003 起。

## 需要抓取之外的功能？

Xquik 还提供 53 个仪表盘工具、REST API、签名 webhook 和 MCP 服务器。

- [API 文档](https://docs.xquik.com/introduction)：REST API 指南
- [社群信息 API](https://docs.xquik.com/api-reference/x/community-info)：获取 1 个社群的记录
- [社群帖子 API](https://docs.xquik.com/api-reference/x/community-tweets)：获取社群的帖子
- [社群成员 API](https://docs.xquik.com/api-reference/x/community-members)：导出社群的成员
- [查找社群 API](https://docs.xquik.com/api-reference/x/community-find)：按关键词查找社群
- [MCP 服务器](https://docs.xquik.com/mcp/overview)：了解支持的工具
- [Webhook](https://docs.xquik.com/webhooks/overview)：签名事件推送

## 常见问题

先解答常见问题，再说明在哪里获取帮助。

### 我需要 X API 密钥或登录吗？

不需要。Xquik 的 X Community Scraper 不需要 X API 密钥、登录或任何凭据。

### 如何找到社群的 ID？

在 x.com 上打开该社群。ID 就是 URL 中 `/i/communities/` 后面的数字。你也可以把完整 URL 粘贴到 `startUrls`。

### 可以把 X 社群成员导出为 CSV 或 Excel 吗？

可以。选择 `members` 资源，然后以 CSV、Excel、JSON 或 HTML 格式导出数据集。

### 不知道 ID 也能找到社群吗？

可以。在 `searchTerms` 中发送关键词，或在 `topics` 中发送话题。找到的每个社群是 1 行，附带完整记录。

### 可以获取社群的热门帖子吗？

可以。把 `postsOrder` 设为 `Top`。添加 `minLikes` 或 `minViews`，只保留最受欢迎的帖子。

### 1 次运行可以抓取多少个社群？

你列出多少个，就抓取多少个。行数受 `maxItems` 和你的 Apify 支出上限限制。

### 它能读取私密社群吗？

不能。Xquik 的 X Community Scraper 只返回 X 公开展示的社群。

### 抓取 X 社群合法吗？

Xquik 的 X Community Scraper 请求的是公开的 X 字段。结果可能包含个人数据。请确认用途合法，并遵守适用的隐私规定。不确定时，请咨询专业律师。

### 为什么我的运行没有返回结果？

先查看运行状态。空运行的状态会提示你检查目标和过滤条件。出现需要注意的情况时，会生成免费的 `diagnostics` 输出。其中的 `stopCauses` 为每个原因给出下一步操作 `nextAction`。运行会列出它无法读取的每个输入，并说明修正方法。

### 可以使用 API、定时调度和集成吗？

可以。你可以从 50 个公开任务或 Xquik REST API 中选择。[API 标签页](https://apify.com/xquik/x-community-scraper/api) 提供 Python、JavaScript 和 cURL 示例。Apify [定时调度](https://docs.apify.com/platform/schedules) 可以按 cron 运行 Xquik 的 X Community Scraper。Agent 可以通过 [Apify MCP](https://docs.apify.com/platform/integrations/mcp) 调用它。除非需要旧构建，否则请使用 `latest`。

### 可以获得定制方案吗？

可以。访问 [xquik.com](https://xquik.com) 或阅读 [API 文档](https://docs.xquik.com/introduction)。这些资料介绍了仪表盘、API、MCP 服务器和 webhook。

### 在哪里获取帮助？

在 Actor 页面提交 issue，或带上运行 ID 联系 <support@xquik.com>。键值存储中的免费诊断信息会说明需要注意的运行。没有返回任何行的运行，会在状态中说明原因。
