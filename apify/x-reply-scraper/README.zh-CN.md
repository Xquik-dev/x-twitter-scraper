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
<a href="https://youtu.be/4UOSpoOoC3Y?t=367"><img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" width="720" alt="Framer connects Xquik MCP to coding agents"></a><br>
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">观看 Framer 如何将 Xquik 抓取工具与 Claude Code、Codex、Cursor 等结合使用，从 6:07 开始。</a>
</td></tr></table>

Xquik 是全球速度最快、成本最低的 X（Twitter）抓取服务，提供最完整的 X
数据。X Reply Scraper 用于收集回复、评论及完整对话。其他所有 Apify Actor
都会在过滤或去重之前收费。Xquik 只对已交付、唯一且符合过滤条件的结果收费。

在所有 Apify 套餐上，抓取 X（Twitter）回复的价格为**每条已交付行 $0.00015**。
粘贴帖子 URL、推文 ID、主页 URL 或用户名即可。可导出回复、对话、作者、互动数据、
实体及媒体 URL。Apify 会单独计算平台使用费。无需 X 登录。

过滤在写入数据集之前执行。你只需为已交付的行付费。

>

## 未完成的抓取

被中断的抓取会写入一条免费的 `partial` 诊断记录。已获取的结果保持完整。
重试前请先查看 `availableResults`、`failedTargets`、`retryable` 和
`nextAction`。Actor 成功退出只能确认交付情况，不代表抓取已完成。

Xquik 是独立的第三方服务，与 X Corp 无关联。

> "Twitter" 和 "X" 是 X Corp 的商标。

## 这个 Twitter 回复抓取工具能做什么？

X Reply Scraper 收集公开的回复和评论对话。它可以处理单个帖子、批量 URL
列表、推文 ID 以及用户的回复时间线。

可用于情感分析、客户反馈、社区研究、回复排名、潜在客户发现、内容审核及对话数据集构建。

### 回复采集行为

- 自动模式会将未完成的直接结果切换为对话搜索。
- 自动化的推文回复分页每次最多请求 300 行。
- 四种策略分别覆盖直接回复、搜索和推文串上下文。
- 批量输入支持帖子 URL、推文 ID、主页及用户名。
- 当两者都适用时，主页目标会同时结合时间线和作者搜索。
- 过滤和去重都在计费之前执行。
- 输出支持 4 种排序模式、3 种详情级别和 3 种字段风格。
- 每条回复都保留其来源目标、父级 ID、根 ID 及层级深度。
- 延续游标支持回溯抓取和定时运行。
- 空运行会向 `diagnostics` 写入 1 条免费记录。
- 分页和目标日志包含 `fetchDurationMs`、`processingDurationMs`、
  `pushDurationMs`、`statusDurationMs`、`fullPageDurationMs` 和
  `fullTargetDurationMs`，且不会重复输入内容。
- 检查点会在重启后保留已接受的回复、耗时及失败记录。

### 始终使用最新构建

每次运行都选择 `latest`，以获取所有已发布的修复。

如果你未指定构建，Apify 会使用此 Actor 的 `latest` 默认值。控制台运行和标准 API
示例都会继承该默认值。

已保存的任务可能会覆盖 Actor 的默认值。定时任务和任务集成会沿用该选择。
请将所有覆盖项都设置为 `latest`。

Apify 不会将固定的构建编号重定向到 `latest`。请将固定编号替换为 `latest`。
仅在临时回滚时使用固定构建。

## 快速开始

初始表单以一个已验证的公开对话为目标。它会返回最多跨 10 页的 25 条完整、
扁平化的行。自动模式默认搜索整个对话。去重和来源归属默认保持开启。

### 从帖子 URL 抓取回复

```json
{
  "startUrls": [{ "url": "https://x.com/OpenAI/status/2082577277246972300" }],
  "maxItems": 100
}
```

### 从推文 ID 抓取回复

```json
{
  "tweetIds": ["2082577277246972300", "2083148725367783580"],
  "maxItemsPerTarget": 100,
  "maxItems": 10000
}
```

### 收集完整的嵌套对话

```json
{
  "tweetIds": ["2082577277246972300"],
  "collectionStrategy": "conversationSearch",
  "scope": "all",
  "maxDepth": 5,
  "sort": "oldest",
  "maxItems": 500
}
```

### 抓取用户的回复时间线

```json
{ "usernames": ["OpenAI", "apify"], "maxItems": 10000 }
```

### 在计费前过滤回复

```json
{
  "tweetIds": ["2082577277246972300"],
  "anyWords": ["API", "agent", "developer"],
  "excludeWords": ["airdrop", "giveaway"],
  "lang": "en",
  "minLikes": 2,
  "minViews": 100,
  "verifiedOnly": true,
  "maxItems": 10000
}
```

### 导出适合 CSV 的扁平化行

```json
{
  "tweetIds": ["2082577277246972300"],
  "outputMode": "full",
  "outputPreset": "flat",
  "fieldStyle": "camelCase",
  "maxItems": 100
}
```

示例数值仅供参考。响应内容反映的是运行时的源数据。

## AI 智能体与 MCP 就绪

可通过 Apify MCP、API 客户端、x402 或 Skyfire 运行此 Actor。

- 受限权限可保护无关的 Apify 账户数据。
- 按事件付费的计费方式支持确定性的、基于结果的成本核算。
- Standby 模式始终保持禁用，以兼容智能体支付场景。
- 类型化的模式描述了回复、运行报告和延续游标。
- 有边界的默认值可防止智能体意外运行无限抓取。
- 稳定的 `camelCase` 和 `snake_case` 模式简化了工具链的对接。
- 诊断行包含状态、消息和恢复操作。
- 运行报告包含确切的结果、停止原因和费用估算。

## 回复目标与输入别名

请使用以下主要字段。

| 输入          | 用途                                   |
| ------------- | -------------------------------------- |
| `startUrls`   | 混合的 X 帖子和主页 URL                |
| `tweetIds`    | 数字形式的帖子 ID                      |
| `usernames`   | 结合作者搜索的主页时间线                |
| `startCursor` | 从已保存的来源游标恢复某个目标的抓取     |

可视化表单只显示规范化的控件。兼容性别名在 JSON、API、SDK、自动化及已保存的
任务输入中始终可用。同时使用规范字段和别名字段时，它们保持原有的解析顺序。

兼容性别名接受常见的竞品输入：

- URL 别名：`urls`、`tweetUrls`、`postUrls`、`profileUrls`
- ID 别名：`conversationIds`、`postIds`、`ids`、`tweetId`、`id`
- 用户名别名：`twitterHandles`、`screenname`
- 全局限制别名：`maxResults`、`max_results`、`resultsLimit`、
  `maxReplies`
- 单目标别名：`maxRepliesPerTweet`、`maxCommentsPerPost`
- 搜索别名：`useSearch`
- 嵌套回复别名：`includeNestedReplies`、`includeRepliesOfReplies`
- 原帖别名：`includeOriginalTweet`
- 输出别名：`outputVariant`、`includeRaw`

格式错误或不受支持的目标不会导致 Actor 失败。如果没有剩余的有效目标，运行会
返回一条可操作的诊断信息。

主页目标会将游标分页与作者搜索结合使用。Actor 会在输出和计费之前移除重复行。
已保存的旧版游标会保留标准的分页方式。

## 覆盖策略

### 自动完成

大多数任务建议使用 `collectionStrategy: "auto"`。完整或嵌套范围会从完整回复
抓取开始。范围、深度、排序及作者控件会在响应限制之前生效。抓取会包含非根
目标之下的所有后代。未完成的抓取会先保留已有行，再尝试对话搜索和直接回复。
直接范围会在需要时回退到搜索。未完成的页面会保留其延续状态。显式指定的
策略不会切换。

诊断中的覆盖率阈值并不能证明来源已被穷尽。停滞的页面、限制、数据缺失或
错误都会使恢复过程不完整。

### 直接回复端点

使用 `collectionStrategy: "replies"` 可强制使用 X 的回复时间线。这样能保留
来源顺序，并支持游标。

### 对话搜索

使用 `collectionStrategy: "conversationSearch"` 可获得更广泛的对话覆盖。
Actor 会以 `conversation_id:<推文 ID>` 进行搜索。

### 完整推文串上下文

使用 `collectionStrategy: "thread"` 可读取源对话的上下文。设置
`includeOriginalPost: true` 可将根帖子保留为深度 0。

## 直接与嵌套回复控件

使用 `scope` 选择结果形态。

| 值       | 结果                                    |
| -------- | ---------------------------------------- |
| `direct` | 保留深度为 1 的回复                       |
| `nested` | 保留深度为 2 及以上的回复的回复            |
| `all`    | 保留所有可用的直接和嵌套回复               |

使用 `maxDepth` 限制嵌套层级。当 X 省略某个对话祖先时，父级链接可能缺失。
Actor 会保留可获取的最佳深度信息。

## 排序

使用 `sort` 时可选以下值：

- `relevance` 保留 X 来源的顺序
- `latest` 按最新排在前面
- `oldest` 按最早排在前面
- `likes` 按点赞数从高到低排序

主页目标会先收集所需数量的唯一、经过过滤的结果，再进行排序。推文目标则
保留全局排序。

`sortBy` 和 `queryType` 兼容性别名仍受支持。

## 回复过滤器

所有受支持的过滤器都会在写入数据集之前执行。

### 文本与实体过滤器

| 输入             | 行为                          |
| ---------------- | ------------------------------ |
| `exactPhrase`    | 要求包含某个精确短语             |
| `anyWords`       | 要求至少包含 1 个词或短语        |
| `excludeWords`   | 移除匹配的词或短语                |
| `keywordInclude` | 与 `anyWords` 合并的别名          |
| `keywordExclude` | 与 `excludeWords` 合并的别名      |
| `hashtags`       | 要求至少包含 1 个话题标签          |
| `cashtags`       | 要求至少包含 1 个股票代码标签      |
| `mentioning`     | 要求包含一个 @ 提及               |

### 作者与语言过滤器

| 输入                    | 行为                             |
| ----------------------- | -------------------------------- |
| `fromUser`              | 保留某一位回复作者                 |
| `toUser`                | 保留发给某个用户名的回复            |
| `lang`                  | 保留某一种 X 语言代码               |
| `verifiedOnly`          | 要求存在任意公开的认证标识           |
| `blueVerifiedOnly`      | 要求 X Premium 认证                |
| `excludeOriginalAuthor` | 移除源作者的自我回复                |

### 互动过滤器

使用 `minLikes`、`minReplies`、`minRetweets`、`minQuotes`、`minViews` 和
`minBookmarks`。`minFaves` 别名映射到 `minLikes`。

### 媒体与时间过滤器

- 设置 `hasMediaOnly: true` 只保留带有公开媒体的回复。
- 设置 `mediaType` 为 `any`、`image`、`video`、`gif` 或 `link`。
- 设置 `since` 表示起始时间戳（含边界）。
- 设置 `until` 表示结束时间戳（不含边界）。
- 使用 `sinceTime` 和 `untilTime` 作为兼容性别名。

## 限制、计费与延续

`maxItems` 限制整次运行中交付的行数。`maxItemsPerTarget` 限制每个帖子或
主页的行数。

独立的目标会并发运行。每个目标都会保持有序的游标分页。数据集写入会将
上限、去重、归属和计费作为一个整体原子性地处理。

Actor 会在计费之前去重。将 `dedupeAcrossTargets` 设为 `false` 可保留来自
不同目标的重复行。

在受分页限制的运行结束后，请从默认的键值存储中读取 `next-cursors`。
通过 `startCursor` 传入某个游标即可继续该目标的抓取。

## 输出字段

数据集和运行报告的模式描述了每个返回字段。基础字段还包含示例，方便智能体
和自动生成的集成理解。

每条完整的回复行可以包含以下核心字段：

| 字段                | 描述                                                       |
| ------------------- | ----------------------------------------------------------- |
| `id`                | 回复 ID                                                     |
| `text`              | 回复文本                                                     |
| `fullText`          | 长文本形式的回复内容                                          |
| `createdAt`         | 回复时间戳                                                   |
| `lang`              | X 语言代码                                                   |
| `url`               | 回复的直接 URL                                               |
| `conversationId`    | X 对话 ID                                                    |
| `inReplyToId`       | 直接父级 ID                                                  |
| `inReplyToUserId`   | 父级作者 ID                                                  |
| `inReplyToUsername` | 父级用户名                                                   |
| `likeCount`         | 点赞数                                                       |
| `replyCount`        | 子回复数                                                     |
| `retweetCount`      | 转推数                                                       |
| `quoteCount`        | 引用数                                                       |
| `viewCount`         | 浏览量                                                       |
| `bookmarkCount`     | 收藏数                                                       |
| `author`            | 可获取的公开作者元数据                                          |
| `media`             | 图片、视频、GIF 及其变体                                       |
| `entities`          | 话题标签、股票代码标签、提及、URL 及视频时间戳                    |
| `quoted_tweet`      | 可获取时的被引用帖子                                            |
| `retweeted_tweet`   | 可获取时的被转推帖子                                            |

完整行还会保留可获取的源元数据，包括 `isNoteTweet`、
`isReply`、`isLimitedReply`、`isQuoteStatus`、`source`、`type`、
`displayTextRange`、`contentDisclosure`、`conversationControl`、`article`、
`limitedActions`、`reactionContext`、`card`、`communityId`、`communityNote`、
`edit`、`isTranslatable`、`noteTweet`、`place`、`postCta`、`possiblySensitive`、
`previousCounts`、`tombstone`、`unmentionedUserIds` 和 `viewState`。

扁平化行保留了对话谱系、来源详情、结果类型及模式版本。具体字段请参见
OpenAPI 文档。

### 作者元数据

嵌套的作者信息遵循公开主页数据契约，涵盖身份、计数、认证、可用性、
职业数据及个人简介。

扁平化输出还会新增 `authorId`、`authorUsername`、`authorName`、
`authorFollowers`、`authorFollowing` 和 `authorVerified`。

### 媒体元数据

媒体信息包括可用性、尺寸、标签、视频变体、`watchNowUrl` 和
`visitSiteUrl` 操作。

扁平化输出还会新增 `mediaUrls`。

## 输出模式

### 精简模式（Compact）

设置 `outputMode: "compact"` 可缩减数据集宽度。它保留文本、对话、作者、
互动及媒体字段。

### 完整模式（Full）

设置 `outputMode: "full"` 可保留所有受支持的公开字段。

### 原始模式（Raw）

设置 `outputMode: "raw"` 可在 `raw` 字段下添加经过清理的源数据快照。

### 嵌套或扁平化

默认的 `flat` 布局会保留嵌套对象，并为表格新增作者字段。设置
`outputPreset: "nested"` 可省略新增的扁平化字段。

### 字段命名

将 `fieldStyle` 设置为 `source`、`camelCase` 或 `snake_case`。Actor 不会
覆盖发生冲突的源字段键名。

## 诊断信息

成功的数据行使用 `resultType: "reply"`。非数据类退出会向 `diagnostics`
写入恰好 1 条免费记录，并附带可操作的修复建议。

每种结果都会写入 `run-report`，包括无输入和输入无效的退出情况。该报告的
模式记录了完成情况、计费、失败及已保存的游标。其 `version` 字段记录
确切的已发布 Actor 源代码版本。

可能出现的状态包括：

- `no-input`
- `invalid-input`
- `replies-incomplete`
- `zero-output`
- `aborted`
- `unexpected-error`

## 抓取费用是多少？

在所有 Apify 套餐上，费用为**每条已交付行 $0.00015**。也就是每行
`$0.00015`。Apify 会单独计算平台使用费。

Xquik 对每条已交付的数据行收取一次费用。`diagnostics` 中的诊断记录免费。
不收取任何启动、URL、查询、分页或代理费用。

Apify 的默认超时为 `0`，因此运行没有时间限制。Actor 会持续运行，直到达到
上限或用完可用数据为止。调用方仍可设置有限的 Apify 超时。此时
`completionReason: "deadline_reached"` 表示该配置的限制即将到达。Actor
会为检查点、行数据、报告及成功退出保留最后 15 秒。已收集的回复会保持
已交付状态并只计费一次。未完成的分页仍可恢复继续。

## 公开任务示例

可从 50 个公开任务中选择。每个任务都有明确的输入边界和对应的数据集视图。
运行前可编辑任意任务。

从以下示例开始：

- [为 AI 智能体收集回复](https://apify.com/xquik/x-reply-scraper/examples/collect-replies-for-ai-agents)
- [构建 X 回复 RAG 数据集](https://apify.com/xquik/x-reply-scraper/examples/build-x-reply-rag-dataset)
- [归档回复供 LLM 处理](https://apify.com/xquik/x-reply-scraper/examples/archive-replies-for-llm-processing)
- [为 CRM 提取回复中的潜在客户](https://apify.com/xquik/x-reply-scraper/examples/extract-reply-leads-for-crm)

## API 示例

### JavaScript

```javascript
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: '<APIFY_API_TOKEN>' });
const run = await client
  .actor('xquik/x-reply-scraper')
  .call({
    tweetIds: ['2082577277246972300'],
    collectionStrategy: 'auto',
    scope: 'all',
    maxItems: 100,
  });

const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
```

### Python

```python
from apify_client import ApifyClient

client = ApifyClient("<APIFY_API_TOKEN>")
run = client.actor("xquik/x-reply-scraper").call(run_input={
    "tweetIds": ["2082577277246972300"],
    "collectionStrategy": "auto",
    "scope": "all",
    "maxItems": 100,
})

for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
```

### cURL

```bash
curl "https://api.apify.com/v2/acts/xquik~x-reply-scraper/run-sync-get-dataset-items" \
  -X POST \
  -H "Authorization: Bearer <APIFY_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"tweetIds":["2082577277246972300"],"maxItems":100}'
```

## 自动化与集成

可通过 Apify 定时任务、webhook、API 客户端、Make、Zapier、n8n、
Google Sheets、云存储或
[Apify MCP 服务器](https://docs.apify.com/platform/integrations/mcp)运行
此 Actor。

符合条件的智能体工作流也可以使用
[x402](https://docs.apify.com/integrations/x402) 或
[Skyfire](https://docs.apify.com/integrations/skyfire)。

Xquik 还提供 47 个仪表盘工具、129 个 REST 操作、签名 webhook 以及一个
MCP 服务器。

## 负责任使用

只采集公开数据。请遵守适用的法律和平台规则。

回复数据集可能包含个人数据。请选择合法用途，尽量减少数据留存时间，
妥善保护导出内容，并在需要时尊重删除和访问请求。

此 Actor 不会绕过受保护的账户，也不会请求客户的 X 密码、会话 Cookie
或身份验证令牌。

## 相关 Xquik Actor

每个 Xquik Actor 都共享同一套抓取引擎、先过滤后计费的策略以及诊断机制。
请选择与你所需数据匹配的那一个。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper)：从搜索、
  主页时间线、List 及推文 ID 中抓取推文，支持 50 多种过滤器和扁平化导出。
  适用于只需要推文数据、不需要分析的场景。起价为每行 $0.00015。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper)：从
  用户名、ID 或 URL 抓取主页及其帖子、回复、媒体和关注者。适用于从账户
  出发而非从搜索出发的场景。起价为每行 $0.00015。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper)：
  批量抓取帖子 URL 或 ID 对应的回复、引用、转推者及推文串。
  适用于衡量谁与帖子产生了互动。起价为每行 $0.00015。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper)：
  以主页行的形式抓取关注者、正在关注的账户、List 成员、订阅者及社区成员。
  适用于需要受众或成员名单的场景。起价为每份主页 $0.00015。
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper)：
  按用户名、简介和位置搜索用户，并支持关注者数量、认证状态、账户年龄和
  位置过滤。适用于从搜索构建账户列表的场景。起价为每份主页 $0.00015。
- [X List Scraper](https://apify.com/xquik/x-list-scraper)：从 List 的
  URL 或 ID 抓取 List 帖子、成员及关注者。适用于以精选 List 作为数据源的
  场景。起价为每行 $0.00015。
- [X Community Scraper](https://apify.com/xquik/x-community-scraper)：
  抓取社区信息、帖子、搜索结果、成员及管理员。适用于以 X 社区作为数据源的
  场景。起价为每行 $0.00015。
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper)：按地区
  抓取实时趋势，包含排名、热度、查询词和 WOEID。适用于追踪各地热门话题的
  场景。起价为每条趋势 $0.00015。
- [X Article Scraper](https://apify.com/xquik/x-article-scraper)：将长
  篇 X Article 抓取为 Markdown 和纯文本，包含封面、作者、日期及数据指标。
  适用于需要文章正文而非推文的场景。起价为每篇文章 $0.00015。
- [X Media Downloader](https://apify.com/xquik/x-media-downloader)：
  从帖子或主页中提取或保存照片、视频及 GIF，支持 MP4 和元数据选项。适用
  于需要媒体文件本身的场景。起价为每条媒体行 $0.00015。
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring)：
  通过 AI 追踪品牌提及的相关性、情感及客户体验相关的回答，并比较不同运行
  结果。适用于长期观察某个品牌的场景。起价为每条分析推文 $0.0003。
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis)：
  通过 AI 为每条推文标注态度、强度及讽刺可能性。适用于需要对任意主题进行
  通用情感分析的场景。起价为每条分析推文 $0.0003。
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)：
  通过 AI 标注看涨、看跌、中性或混合立场、内容类型、信心程度及资产相关性。
  适用于关注股票、加密货币或交易讨论的场景。起价为每条分析推文 $0.0003。
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)：
  通过 AI 按格式、消息来源归属及主题相关性为新闻类帖子打标签。适用于将
  报道内容与评论内容区分开的场景。起价为每条分析推文 $0.0003。
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)：
  通过 AI 为每条推文回答你自定义的分类、评分及是否问题。适用于预设分析
  无法满足你的标签需求的场景。起价为每条分析推文 $0.0003。
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)：
  根据 8 个 AI 特征回答，为每条推文估算 0 到 100 的 Viral Score 及一个结论。
  适用于研究推文为何传播或遇冷的场景。起价为每条分析推文 $0.0003。
