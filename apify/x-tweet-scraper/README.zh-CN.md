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
数据。X Tweet Scraper 可通过 50 多种过滤器抓取推文、回复、主页、List
和搜索结果。其他所有 Apify Actor 都会在过滤或去重之前收费。Xquik 只对
已交付、唯一且符合过滤条件的结果收费。

在所有 Apify 套餐上，抓取公开 X（Twitter）推文的价格为**每条已交付结果
起价 $0.00015**。Apify 会单独计算平台使用费。无需 X 登录，也不收取启动
费或查询费。由 [Xquik](https://xquik.com) 构建。

> Xquik 是独立的第三方服务，与 X Corp 无关联。
> "Twitter" 和 "X" 是 X Corp 的商标。

## X Tweet Scraper 能做什么？

X Tweet Scraper 返回推文、互动指标、公开作者主页信息及媒体内容。它接受
URL、用户名、List ID、推文 ID 以及带有 50 多种过滤器的搜索查询。

### 核心行为

- 过滤和去重都在计费之前执行。
- 单一输入即可支持查询、时间线、List、搜索及互动模式。
- 推文 ID 类输入没有固定的数量上限，Apify 的支出和超时设置仍然适用。
- 自动化的搜索和引用分页每次最多请求 300 行。
- 已保存的游标会保留其原有的分页上限，并在过期后重新开始。
- 当两者都适用时，主页模式会同时结合时间线和作者搜索。
- 分页日志包含 `fetchDurationMs`、`processingDurationMs`、`pushDurationMs`、
  `statusDurationMs` 和 `fullPageDurationMs`，且不会重复目标信息。
- 检查点会在重启后保留已接受的行、耗时及失败计数。

### 始终使用最新构建

每次运行都选择 `latest`，以获取所有已发布的修复。

如果你未指定构建，Apify 会使用此 Actor 的 `latest` 默认值。控制台运行和标准
API 示例都会继承该默认值。

已保存的任务可能会覆盖 Actor 的默认值。定时任务和任务集成会沿用该选择。
请将所有覆盖项都设置为 `latest`。

Apify 不会将固定的构建编号重定向到 `latest`。请将固定编号替换为
`latest`。仅在临时回滚或需要复现结果时使用固定构建。

请阅读 Apify 的
[构建标签](https://docs.apify.com/platform/actors/development/builds-and-runs/builds)、
[运行选项](https://docs.apify.com/platform/actors/running/runs-and-builds)
以及[任务文档](https://docs.apify.com/platform/actors/running/tasks)。

## 任务示例

可从 50 个公开任务中选择。每个任务都有明确的输入边界和对应的数据集视图。
每个任务打开时都带有一个真实的搜索或目标，运行前可先编辑。

- [为 AI 智能体获取最新 X 帖子](https://apify.com/xquik/x-tweet-scraper/examples/search-x-posts-for-ai-agents)
- [构建用于 RAG 的 X 数据集](https://apify.com/xquik/x-tweet-scraper/examples/build-x-rag-dataset)
- [提取用于 RAG 的 X Article](https://apify.com/xquik/x-tweet-scraper/examples/extract-x-article-for-rag)
- [监测 X 上的 AI 搜索可见度](https://apify.com/xquik/x-tweet-scraper/examples/monitor-ai-search-visibility-on-x)
- [追踪 AI SEO 与生成式引擎优化](https://apify.com/xquik/x-tweet-scraper/examples/track-generative-engine-optimization-talk)
- [发现 X 上的 AI 智能体工具](https://apify.com/xquik/x-tweet-scraper/examples/discover-ai-agent-tools-on-x)
- [收集 AI 产品反馈](https://apify.com/xquik/x-tweet-scraper/examples/collect-ai-product-feedback)
- [监测 X 上的品牌提及](https://apify.com/xquik/x-tweet-scraper/examples/monitor-brand-mentions-on-x)
- [将 Twitter 数据导出为 CSV](https://apify.com/xquik/x-tweet-scraper/examples/export-twitter-data-to-csv)
- [收集对某条 OpenAI 帖子的回复](https://apify.com/xquik/x-tweet-scraper/examples/collect-replies-to-an-openai-post)
- [提取完整的 Twitter 推文串](https://apify.com/xquik/x-tweet-scraper/examples/extract-complete-twitter-thread)
- [收集西班牙语 AI 对话](https://apify.com/xquik/x-tweet-scraper/examples/collect-spanish-ai-conversations)

### X Tweet Scraper 能提取哪些数据？

| 字段                   | 描述                                                        |
| ---------------------- | ------------------------------------------------------------ |
| `id`                   | 推文 ID                                                       |
| `text`                 | 完整推文文本（包括最长 25000 字符的 Note Tweet）                |
| `createdAt`            | X 原生时间戳字符串                                             |
| `likeCount`            | 点赞数                                                        |
| `retweetCount`         | 转推数                                                        |
| `replyCount`           | 回复数                                                        |
| `quoteCount`           | 引用推文数                                                     |
| `viewCount`            | 浏览量                                                        |
| `bookmarkCount`        | 收藏数                                                        |
| `lang`                 | 推文语言                                                      |
| `url`                  | 推文的直接链接                                                 |
| `tweetUrl`             | 扁平化输出中的推文 URL 别名                                     |
| `twitterUrl`           | 扁平化输出中 twitter.com 格式的 URL                             |
| `author`               | 可获取的作者字段（用户名、简介、网站、计数）                        |
| `authorUsername`       | 扁平化输出中的作者用户名                                        |
| `authorFollowers`      | 扁平化输出中的作者关注者数量                                     |
| `authorUrl`            | 扁平化输出中作者的网站（如有）                                    |
| `authorDescription`    | 扁平化输出中的作者简介文本                                       |
| `authorCoverPicture`   | 扁平化输出中的作者横幅图片 URL                                    |
| `authorPinnedTweetIds` | 扁平化输出中的作者置顶推文 ID                                     |
| `media`                | 附带的图片、视频、GIF                                            |
| `mediaUrls`            | 扁平化输出中的媒体 URL                                          |
| `imageUrls`            | 扁平化输出中的图片 URL                                          |
| `videoUrls`            | 扁平化输出中的视频 URL                                          |
| `entities`             | 话题标签、URL、提及及视频时间戳                                   |
| `displayTextRange`     | 可获取时的 X 显示文本范围                                        |
| `contentDisclosure`    | 可获取时的披露元数据                                             |
| `conversationControl`  | 回复策略及公开对话所有者                                          |
| `reactionContext`      | 某个反应所引用的公开帖子和用户                                     |
| `limitedActions`       | 公开的互动限制及提示信息                                          |
| `isLimitedReply`       | 回复是否受到限制                                                |
| `isNoteTweet`          | 是否为 Note Tweet（长篇帖子）                                    |
| `isQuoteStatus`        | 该推文是否引用了另一条推文                                        |
| `isRetweet`            | 该行是否为转推，并附带原帖                                      |
| `isPinned`             | 作者是否置顶此帖，仅扁平行                                      |
| `isReply`              | 该推文是否为回复                                                |
| `quoted_tweet`         | 被引用的推文对象（若为引用推文）                                    |
| `conversationId`       | 推文串/对话 ID                                                 |
| `resultType`           | 用于区分丰富数据行、互动数据行及诊断记录的行类型                      |
| `sourceTweetId`        | 文章和互动模式下的来源推文 ID                                     |
| `article`              | `mode: "article"` 下的结构化文章数据                             |

可选的推文元数据可能包含 `authorUnavailable`、`card`、
`communityId`、`communityNote`、`edit`、`exclusiveContent`、
`noteTweet` 和 `postCta`。`isTranslatable`、`place`、
`possiblySensitive` 和 `viewState` 保留其他公开上下文信息。
`previousCounts` 保留编辑前的互动数据。`tombstone` 保留提示信息。
`unmentionedUserIds` 列出退出对话的用户。具体字段请参见 OpenAPI 文档。

嵌套的作者信息遵循公开主页数据契约，涵盖身份、计数、认证、可用性、
职业数据及个人简介。

转推行会将 `isRetweet` 设为 `true`。它们的 `text` 包含完整的原帖内容，
`retweeted_tweet` 则保存原帖及其作者和计数。

推文行还会保留 `type`、`source`、`inReplyToId`、`inReplyToUserId`、
`inReplyToUsername` 和 `retweeted_tweet`。被引用和被转推的推文会递归
保留相同的受支持安全字段。

媒体信息包括可用性、尺寸、标签、视频变体、`watchNowUrl` 和
`visitSiteUrl` 操作。

与查看者相关的状态属于 Xquik 的抓取账户，而非属于你的数据集。关注、
屏蔽、静音、收藏、点赞、转发、编辑权限等与查看者相关的标记都会一律
移除，原始输出中也不例外。

## 抓取推文的费用是多少？

在所有 Apify 套餐上，费用为每条已交付行 `$0.00015`。Apify 会单独计算
平台使用费。Xquik 对每条已交付的数据行收取一次费用。`diagnostics`
输出中的诊断记录免费。

不收取 Xquik 订阅费，也不收取单独的启动费或查询费。每次运行还会写入
一条 `run-report` 记录，其中 `estimatedChargeUsd` 根据 Apify 向 Actor
公开的实时按事件付费价格计算得出。每种结果都会写入 `run-report`，包括
无输入和输入无效的退出情况。运行报告会将数据行区分为 `realRows`，
诊断记录区分为 `diagnosticRows`。

在为下一次运行付费之前，请先理解空结果的原因。`filtering` 对象会在
报告和最终诊断中将 `serverFilteredRows` 与 `actorFilteredRows` 区分开来。
这些数字统计的是已处理页面中被拒绝的行数，包括重复出现的源行。
`pagesWithUnknownServerFiltering` 标识出没有有效服务器计数的页面。缺失的
计数将保持为空缺。被过滤的行永远不会产生结果费用。

来源耗尽可能导致抓取在低于你所请求的上限时就已完成。这类运行会报告
`outcome: "complete"`，`completionReason: "source_exhausted"`。被中断的
运行会保留其部分完成的结果状态及重试指引。

`failedSubtargets` 统计因读取失败而被停止的查询和主页目标数量。分页
失败和支付失败会保留部分结果行及未完成的游标，这些失败并不意味着目标
不存在。已接受的行仍属于数据行，并计入计费。这类运行使用
`completionReason: "partial_failure"`。快速的服务端分页遵循同样的报告
约定。

被中断的抓取还会写入一条免费的 `partial` 诊断记录。已获取的结果保持
完整。诊断记录中报告 `availableResults`、`failedTargets`、`retryable`
及 `nextAction`。Actor 成功退出只能确认交付情况，不代表抓取已完成。

状态消息会写明导致运行停止的每个原因。如果一次运行中既有不存在的账户，又有停
滞的搜索，状态消息会同时写明两者。`stopCauses` 会列出每个原因及其各自的
`message`、`retryable` 和 `nextAction`。原因的取值为 `target_not_found`、
`target_protected`、`search_unavailable`、`likes_hidden`、`target_failed`、
`pagination_safety_limit`、`reply_reach` 和 `deadline_reached`。只要任一原因
可重试，整个运行就会标记为 `retryable`。

受保护或不存在的目标都会被计为失败，即使运行中包含有效结果也是如此。X 无法执
行的搜索也计为失败。对于这类搜索，X.com 会显示 "Something went wrong"，运行
会立即停止该搜索，不再重试。X 隐藏的点赞也计为失败。X 只向作者显示谁点赞了其
帖子，也只向账户本人显示该账户点赞过的帖子。当所有失败都与不可用的目标有关
时，诊断记录会将 `retryable` 设为 `false`。请检查目标 URL 或用户名，并选择可
用的公开账户。请缩小 X 无法执行的搜索的范围，或更改其过滤条件。请改为读取转
推者、回复或帖子，而不是被隐藏的点赞。其他类型的失败会为未完成的目标保留重试
指引。

诊断记录会在 `unavailableTargets` 中列出这些目标。每个条目包含你输入时原样的
`target` 和一个 `reason`，取值为 `not_found`、`protected`、
`search_unavailable` 或 `likes_hidden`。该列表最多保存 100 个条目。从输入中
移除它们，即可得到完整的运行。

`completionReason: "pagination_safety_limit"` 并不代表读取失败，它表示
分页在保留有效行的同时，达到了自身的边界安全限制。在仍存在有效恢复
游标的情况下，Latest 搜索会持续翻页，即使遇到空页面。Top 搜索及账户
窗口恢复可能会在连续出现 10 个空页面后设置检查点。当服务报告分页停滞时，
运行会保留已获取的行，并立即为该目标设置检查点。设置了检查点的
运行会报告抓取未完成，并保留可恢复的游标。即使出现连续的空页面，终止页面
仍会完成分页。`failedSubtargets` 会保持为 `0`。你只需为被接受的数据集行
付费。

Apify 的默认超时为 `0`，因此运行没有时间限制。Actor 会持续运行，直到
达到上限或用完可用数据为止。调用方仍可设置有限的 Apify 超时。此时
`completionReason: "deadline_reached"` 表示该配置的限制即将到达。Actor
会为检查点、行数据、报告及成功退出保留最后 15 秒。有效行会保持已交付
状态并只计费一次。未完成的分页仍可恢复继续。

- 启动、查询、URL 及单条推文查询不会产生额外费用。
- Actor 会在写入或计费之前去重。
- 无输入、输入无效及零输出的运行会向免费的 `diagnostics` 输出写入 1
  条可操作的记录。

## 如何使用 X Tweet Scraper 抓取推文数据？

### 1. 直接粘贴 URL

粘贴多种混合的推文、主页、搜索或 List URL：

```json
{
  "startUrls": [
    { "url": "https://x.com/elonmusk/status/1846987139428634858" },
    { "url": "https://x.com/nasa" },
    { "url": "https://x.com/search?q=AI%20lang%3Aen" },
    { "url": "https://x.com/i/lists/1748648376080666720" }
  ],
  "maxItems": 500
}
```

Actor 会以最多 100 个为一批并发查询推文 URL。部分成功的响应会对未解析的
ID 重新检查一次。批处理输出保持唯一，并与请求的 ID 相匹配。主页 URL
会将主页时间线与作者搜索结合起来。搜索 URL 会提取其中的查询内容。
List URL 会使用专用的 List 路径，而不是通用的 `list:` 搜索。`maxItems`
会对所有粘贴的 URL 的结果总数设置上限。

### 2. 批量用户名

作为多次 `from:username` 搜索的简写形式：

```json
{ "twitterHandles": ["elonmusk", "nasa", "openai"], "maxItems": 100 }
```

每个用户名都会结合游标分页和作者搜索。Actor 会在输出和计费之前移除重复行。用
户名可以带上可选的 `@` 前缀。与 X 上的 Posts 标签页一样，用户名和主页 URL 会
保留转发，即使设置了日期或过滤条件也是如此。设置
`tweetTypes.excludeRetweets` 即可去掉转发。

### 3. 搜索推文

将 **Search Terms** 字段设置为一个或多个查询：

```json
{
  "searchTerms": ["from:elonmusk AI", "#bitcoin lang:en"],
  "maxItems": 1000,
  "queryType": "Latest"
}
```

当 `mode` 为 `tweet` 或 `tweets` 且没有推文 ID 时，查询输入会被路由
到搜索。这样可以避免有效的 `searchTerms` 返回空的查询结果。

单纯的账户回溯并搭配日期窗口，例如
`from:elonmusk since:2026-01-01 until:2026-01-02`，会使用有边界的账户
路径。较近的时间窗口会结合主页时间线与作者搜索。较早的历史时间窗口
则使用精确搜索。兼容的相邻时间窗口会共享一次检索，并保留原始的
`searchTerm` 归属信息。`maxItems` 会对所有搜索词的结果总数设置上限。
所有 `since:`/`until:` 及 Unix 时间窗口都会对每条返回的推文进行验证。
经过过滤的账户窗口会先读取完整的源页面，再应用输出上限。经过过滤的
页面会持续读取，直到出现匹配的推文或分页结束为止。独立的搜索词会并发
运行。每个搜索词都会保持有序的游标分页，以确保深度和归属的一致性。
账户窗口只有在彼此兼容时才会共享一次检索。

`from:` 搜索词返回的结果与 X 搜索相同，因此不包含转发。添加
`include:nativeretweets` 可保留转发，添加 `filter:nativeretweets` 则只返回转
发。

### 4. 按 ID 查询推文

```json
{ "tweetIds": ["1846987139428634858", "1858743654778892784"], "maxItems": 100 }
```

Actor 每次请求处理 100 个 ID，会并发运行多个批次，并将每个完成的批次
一次性写入。部分成功的响应只会重新检查未解析的 ID。结果会保留输入
顺序、去除重复项，并排除未被请求的推文。

同一查询也接受 `tweetId`、`tweetIDs`、`tweets`、`postIds`、
`lookupPostIds`、`tweetUrls` 和 `postUrls` 等别名。

### 5. 显式的互动、推文串及文章模式

无论其他输入字段如何，使用 `mode` 可以指定一条固定路径：

```json
{ "mode": "replies", "replyTweetIds": ["1846987139428634858"], "maxItems": 100 }
```

支持的显式模式包括：`tweet`、`tweets`、`search`、`profileTweets`、
`profileReplies`、`profileMedia`、`profileLikes`、`listTweets`、
`article`、`replies`、`quotes`、`thread`、`retweeters` 及 `favoriters`。

`profileTweets` 遵循 X 上主页的 Posts 标签页。它按日期顺序返回该账户的
帖子、转发，以及该账户对自己帖子的回复。对其他账户的回复及来自其他作者的
对话上下文会在计费之前被排除。

如果只需要原创帖子，请排除你不想要的类型：

```json
{
  "mode": "profileTweets",
  "twitterHandles": ["apify"],
  "tweetTypes": { "excludeReplies": true, "excludeRetweets": true },
  "maxItems": 100
}
```

`tweetTypes.excludeReplies`、`excludeRetweets` 和 `excludeQuotes` 适用于
每一种来源。搜索会将它们以 `-filter:replies`、`-filter:nativeretweets` 和
`-filter:quote` 的形式发送给 X。对于主页或 List，Actor 会自行丢弃这些行。
被排除的行永远不会进入数据集，因此你永远不用为它们付费，它们也永远不会
计入 `maxItems`。

`profileReplies` 遵循 X 的 With Replies 标签页。它返回目标账户自己
发布的主页帖子及回复。Actor 会排除来自其他作者的对话上下文。如果只需要
纯回复结果，请使用 `filter:replies` 或 `to:` 搜索。

搜索及分页类的推文模式都支持 `time.since`、`time.until`、Unix
时间戳及 `lang`。这些模式包括主页的 Posts、With Replies、Media、
Likes、Lists、回复、引用及推文串。对应的扁平化日期操作符同样有效。
Actor 会在计费前验证每一行数据。下限日期为含边界。上限日期为不含
边界。日期过滤会排除没有可用日期的行。语言过滤会排除缺失或不匹配
语言的行。被过滤的行永远不会占用你所请求的结果数量上限。当较早的
推文出现在匹配结果之前时，无序结果会继续翻页。带日期窗口的 List 运行会
直接跳到该窗口，因此 30 天前的某一天与昨天耗时相近。对于 List 深处的
窗口，推文来自 X 的 List 搜索，它会漏掉 List 时间线上显示的少数回复。
当连续 3 个页面只包含早于你下限日期的推文时，List 运行也会结束。由于
上限日期为不含边界，`since` 和 `until` 使用同一日期就是一个空窗口。将
`until` 设为第二天，即可获取 1 整天的数据。推文过滤器不适用于用户列表或
直接的推文/文章查询。

`time.withinTime` 和 `within_time` 也适用于上述模式。取值为 `7d` 时，
会保留运行开始读取前最近 7 天内的帖子。回溯到 2006 年之前的时间窗口
会保留所有帖子。

`mode: "replies"` 的规则更为严格。它结合了直接时间线、受支持的排序
模式、每一个前向游标模块、带标签的隐藏内容分支、按已报告回复数量
缩放的时间分区，以及搜索。每一行推文数据的 `inReplyToId` 都等于所
请求的推文 ID。嵌套对话中的回复永远不计为直接回复。如果 X 显示的
回复数少于其报告的数量，Actor 会保留安全的部分结果行，并在仍有余量
时向 `diagnostics` 添加 1 条 `replies-incomplete` 记录。达到覆盖率
阈值并不意味着抓取已经完成，运行会一直保持部分完成状态，直到达到
你的限制或源数据被验证为已耗尽。`replyCoverage` 会报告计数、所用
策略、分页异常、缺失字段以及推荐的回退方案。Actor 会在返回零输出前
遵循瞬时重试延迟。请将 `maxItems` 设置为你所需的总量，单个回复目标
也可以设置超过 25000 的总量。

文章行包含 `resultType: "article"`、`sourceTweetId`、`article` 及
可选的 `author`。互动用户行包含 `resultType: "user"`、
`sourceTweetId` 及 `engagementMode`。

转推者属于常规的公开互动模式。点赞者属于尽力而为的模式：X 可能只对
符合条件或帖子所有者可见的帖子公开点赞用户。主页点赞同样属于尽力
而为的模式，因为许多公开主页并未公开可读取的 Likes 标签页。如果 X
没有公开用户或被点赞的推文，Actor 会写入一条免费的 `diagnostics`
记录。收藏数可能出现在推文行中，但 X 不会公开具体收藏了某条帖子的
账户。

### 6. 扁平化 CSV 输出

可以保留默认的嵌套 JSON 字段，也可以新增便于制表的列：

```json
{ "searchTerms": ["from:nasa moon"], "maxItems": 100, "outputPreset": "flat" }
```

扁平化输出会保持 `author` 和 `media` 字段不变，同时新增顶层字段，
例如 `authorUsername`、`authorName`、`authorFollowers`、`tweetUrl`、
`twitterUrl`、`mediaUrls`、`imageUrls` 和 `videoUrls`。

每个扁平化推文行都带有 `media`。没有媒体的推文会得到一个空列表，因此在
电子表格或带类型的数据管道中，每一行都有相同的键。

### 7. 选择字段命名方式

默认保留旧版字段名。可为丰富或原始结果数据选择一种命名风格：

```json
{
  "searchTerms": ["from:nasa moon"],
  "maxItems": 100,
  "outputVariant": "rich",
  "fieldStyle": "snake_case"
}
```

顶层及嵌套结果字段可使用 `camelCase` 或 `snake_case`。扁平化的
snake case 输出包含 `author_username` 和 `media_urls` 等字段。`raw`
下的安全源数据快照会保留其原始的源字段键名。发生冲突的源字段名同样
保持不变，以防止数据丢失。

旧版诊断记录使用 `resultType`、`actorVersion` 和 `replyCoverage`。
丰富和原始输出会递归应用 `fieldStyle`。例如，snake case 会使用
`result_type`、`actor_version` 和 `reply_coverage`。Overview 数据集
视图可同时适用于这两种风格。请选择与运行的 `fieldStyle` 相匹配的
控制台视图。`camelCase fields` 视图对应 `camelCase`。`snake_case
fields` 视图对应 `snake_case`。视图只负责选择列，永远不会重命名存储
或导出的数据。

### 8. 高级过滤器

组合用户、日期、位置、媒体及互动过滤器：

```json
{
  "twitterContent": "AI",
  "from": "elonmusk",
  "since": "2026-01-01_00:00:00_UTC",
  "until": "2026-03-01_00:00:00_UTC",
  "lang": "en",
  "filter:media": true,
  "min_faves": 1000,
  "maxItems": 500
}
```

设置 `queryType: "Latest + Top"` 可并发运行两种 X 搜索模式。Actor
会在计费前去重，并用任一模式回填未使用的容量。`Top` 按相关性排序，
并不保证结果详尽。设置 `includeSearchTerms: true` 可为每条匹配结果
附加对应的 `searchTerm` 字段。短暂的瞬时读取中断会在 Actor 返回诊断
信息之前额外重试一次。

设置 `lang` 时，Actor 会验证每条返回推文的语言，跳过不匹配的结果，
并继续翻页寻找匹配的推文。

### 从其他推文 Actor 迁移

粘贴你已在使用的输入即可。X Tweet Scraper 会读取其他推文 Actor 使用的
字段名，并将它们映射到自己的字段。规范化名称仍是文档中的默认名称。别名
永远不会丢弃字段，也永远不会改变你支付的费用。输入表单只列出规范化
字段，因此保持简短。别名可在 JSON、API、SDK、自动化及已保存的任务输入中
使用。

| 你已在使用的字段                                                                                                                                                       | X Tweet Scraper 将其读取为                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `startUrls`, `urls`, `tweetUrls`, `postUrls`, `profileUrls`, `accountUrls`                                                                                             | `startUrls`                                                              |
| 作为 1 个字符串的 `profileUrl`                                                                                                                                         | `startUrls`                                                              |
| `tweetIds`、`tweetIDs`、`tweets`、`postIds`、`lookupPostIds`、`tweet_ids`，或作为 1 个字符串的 `tweetId`                                                               | `tweetIds`                                                               |
| `twitterHandles`, `usernames`, `user_names`, `userNameList`, `handles`, `screenNames`, `profileTweets`                                                                 | `twitterHandles`                                                         |
| 作为 1 个字符串的 `username`、`handle` 或 `screenName`                                                                                                                 | `twitterHandles`                                                         |
| `searchTerms`、`searchQueries`、`queries`、`search`，以列表形式或每行 1 个搜索词                                                                                       | `searchTerms`                                                            |
| `twitterContent`, `query`, `searchQuery`                                                                                                                               | `twitterContent`                                                         |
| `maxItems`, `maxResults`, `max_results`, `resultsLimit`, `count`, `resultsCount`, `numberOfTweets`, `maxPosts`, `max_posts`, `max_items`, `maxTweets`, `tweetsDesired` | `maxItems`                                                               |
| `sort`                                                                                                                                                                 | `queryType`                                                              |
| `tweetLanguage`, `language`                                                                                                                                            | `lang`                                                                   |
| `author`, `inReplyTo`, `mentioning`                                                                                                                                    | `from`, `to`, `@`                                                        |
| `start`, `startDate`, `end`, `endDate`                                                                                                                                 | `since`, `until`                                                         |
| `minimumRetweets`, `minimumFavorites`, `minimumReplies`                                                                                                                | `min_retweets`, `min_faves`, `min_replies`                               |
| `onlyImage`, `onlyVideo`, `onlyQuote`, `onlyTwitterBlue`                                                                                                               | `filter:images`, `filter:videos`, `filter:quote`, `filter:blue_verified` |
| `geotaggedNear`, `withinRadius`                                                                                                                                        | `near`, `within`                                                         |
| 来自 Google Search Scraper 的 `quickDateRange`，例如 `d7`、`w2`、`m1` 或 `y`                                                                                           | `since_time`，从运行开始时往回计算                                       |

粘贴的输入会这样运行：

- 每一种来源都会运行。包含起始 URL、用户名、搜索词、List ID 和推文 ID 的
  输入会全部运行，`maxItems` 适用于整个运行。
- 与 `searchTerms` 并列的搜索查询会作为额外的 1 个搜索词运行。
- 写成 `x.com/@name` 的主页 URL 会按 `x.com/name` 读取。
- 同时设置别名及其规范化字段时，以规范化字段的值为准。运行日志会写明
  未被采用的别名。
- 运行日志会写明 Actor 不读取的每个字段，例如 `customMapFunction`。不会有
  任何内容在未通知的情况下被丢弃。
- 行数上限必须是大于等于 1 的整数。`maxResults: 0` 会在抓取或计费任何
  内容之前停止运行。
- `quickDateRange: "m1"` 在每条路径上都读取过去 1 个月。月和年按日历往回计
  算。不含 h、d、w、m 或 y 的值会在读取或计费任何内容之前停止运行。
- Actor 没有页数单位。请用 `maxItems` 替换 `maxPages`。
- Actor 没有用户 ID 字段。请发送用户名或主页 URL，而不是 `userId` 或
  `user_ids`。
- `from`、`min_faves`、`since_time` 和 `filter:images` 等搜索操作符字段
  已经使用 X 所用的名称，因此无需映射。

### 控制台与 API 输入体验

控制台提供以下控件：

- Mode、Output Variant、Field Style、Output Preset 及 Sort By 都是
  经过校验的下拉选择项。
- Start URLs 和 Profile URLs 字段接受字符串或 `{ "url": "..." }`
  对象。其 JSON 编辑器同时兼容两种 API 格式。
- Structured Filters 提供分组控件，无需编写嵌套 JSON。
- 规范化的过滤器分组会将等效的扁平化操作符排除在表单之外。JSON、
  API、SDK、自动化及已保存的任务输入仍然接受这些操作符。
- Max Items 和 Max Items Per Target 接受大于等于 1 的整数。互动阈值
  接受大于等于 0 的整数。

新集成请使用规范化字段。上方迁移表中的别名仍然可用。`includeRaw` 是
`outputVariant: "raw"` 的别名。
`outputVariant` 的历史取值，例如 `compact` 和 `full`，仍然受支持，
并使用 Legacy 输出格式。可视化表单会将它们标记为 Legacy 别名。

### 常用支持的搜索操作符

| 操作符                  | 示例                     | 用途                       |
| ------------------------ | ------------------------- | -------------------------- |
| `from:`                  | `from:elonmusk`            | 仅返回该用户发布的推文        |
| `to:`                    | `to:OpenAI`                | 仅返回发给该用户的回复        |
| `@`                      | `@nasa`                    | 提及该用户的推文              |
| `list:`                  | `list:123456`              | 来自 List 成员的推文          |
| `lang:`                  | `lang:en`                  | 按语言过滤                    |
| `since:` / `until:`      | `since:2026-01-01`         | 日期范围                      |
| `min_faves:`             | `min_faves:100`            | 互动数量阈值                  |
| `min_retweets:`          | `min_retweets:50`          | 转推数量阈值                  |
| `filter:media`           | `filter:media`             | X 的媒体搜索操作符             |
| `filter:videos`          | `filter:videos`            | X 的视频搜索操作符             |
| `filter:images`          | `filter:images`            | X 的图片搜索操作符             |
| `filter:links`           | `filter:links`             | 仅返回带链接的推文              |
| `filter:replies`         | `filter:replies`           | 仅返回回复类推文                |
| `filter:quote`           | `filter:quote`             | 仅返回引用推文                  |
| `filter:blue_verified`   | `filter:blue_verified`     | 仅返回 Premium 用户            |

日期窗口的下限为含边界，上限为不含边界。Actor 会在为每条推文计入结果
或计费之前验证这两个边界。

完整的操作符列表请参见
[Twitter Advanced Search](https://github.com/igorbrigadir/twitter-advanced-search)。

## 输入

完整的选项列表请见 **Input** 标签页。所有字段均为可选，但以下字段
（或其文档记录的别名）中至少需要提供一个：`startUrls`、
`twitterHandles`、`listIds`、`tweetIds`、`searchTerms` 或
`twitterContent`。

示例：

- 在 Start URLs 中粘贴一条推文 URL。
- 粘贴一个主页 URL，或将用户名添加到 X Handles。Actor 会将其时间线
  与作者搜索结合起来。
- 使用 `from:user since:YYYY-MM-DD until:YYYY-MM-DD` 作为搜索词，
  进行账户回溯抓取。Actor 会在检索前合并兼容的时间窗口。较近的时间
  窗口会结合主页时间线与作者搜索。较早的历史时间窗口则使用精确搜索。
- 在 Start URLs 中粘贴一条 List URL。
- 将 `twitterContent` 与 `from:`、`since:`、`min_faves:` 及
  `filter:media` 等过滤器结合，用于高级搜索。

此抓取工具会将 List URL 路由到专用的 List 路径，而不是通用的
`list:ID` 搜索。

## 输出

每条推文都是一个包含可用元数据的 JSON 对象：

数据集和运行报告的模式包含字段标题、描述及示例，智能体无需猜测字段
含义即可直接使用。

示例数值仅供参考。响应内容反映的是运行时的源数据。

```json
{
  "id": "1846987139428634858",
  "text": "The future of AI is...",
  "createdAt": "Sun Mar 15 12:00:00 +0000 2026",
  "retweetCount": 500,
  "replyCount": 120,
  "likeCount": 5000,
  "quoteCount": 80,
  "viewCount": 1200000,
  "bookmarkCount": 300,
  "lang": "en",
  "url": "https://x.com/elonmusk/status/1846987139428634858",
  "author": {
    "id": "44196397",
    "username": "elonmusk",
    "name": "Elon Musk",
    "followers": 180000000,
    "verified": true
  },
  "media": [{ "type": "photo", "url": "https://..." }],
  "entities": {
    "hashtags": [{ "text": "AI" }],
    "urls": [],
    "user_mentions": []
  },
  "isNoteTweet": false,
  "isQuoteStatus": false,
  "isReply": false,
  "conversationId": "1846987139428634858"
}
```

可从 Apify 数据集导出为 JSON、CSV、Excel 或 HTML 格式。

## 运行选项

- 设置 Apify 的最大总费用可为运行成本设定上限。将 `maxItems` 留空
  即可在该预算内获取尽可能多的行，若想获取较少的推文，可设置
  `maxItems`。
- 在 Apify API 中设置 `maxTotalChargeUsd`，或在控制台中设置 Max
  cost per run。Apify 会将该限制以 `ACTOR_MAX_TOTAL_CHARGE_USD` 的
  形式暴露给 Actor，Actor 会据此换算出最大可计费行数。
- 传入 `tweetIds` 可使用并发的 100 个 ID 批处理。粘贴主页 URL 可使用
  更快的用户时间线路径。
- 运行多个查询时，设置 `includeSearchTerms: true` 可为每条结果标注
  其来源搜索词。
- 设置 `queryType: "Latest + Top"` 可并发运行两种 X 搜索模式，去重
  和结果上限依然保持原子性。
- 使用 Xquik 的账户或关键词监控功能，可实现每秒检测和签名 webhook
  推送。已启用的监控会每秒检测一次。

## 使用场景

- 追踪推文中的品牌情感倾向。
- 监测竞争对手的帖子及行业相关话题。
- 在公开对话中寻找潜在客户。
- 为研究收集公开数据集。
- 寻找互动量较高的帖子。

## 数据责任

此 Actor 请求的是公开的 X 字段。结果中可能包含个人数据。请确认合法
用途，并遵守适用的隐私规则。如有不确定，请咨询合格的法律顾问。

## 相关 Xquik Actor

每个 Xquik Actor 都共享同一套抓取引擎、先过滤后计费的策略以及诊断机制。
请选择与你所需数据匹配的那一个。

- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper)：从
  用户名、ID 或 URL 抓取主页及其帖子、回复、媒体和关注者。适用于从账户
  出发而非从搜索出发的场景。起价为每行 $0.00015。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper)：使用
  25 种以上的过滤器抓取帖子下的回复、评论及完整对话。适用于需要获取
  推文下方讨论内容的场景。起价为每行 $0.00015。
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

## 需要抓取以外的功能？

Xquik 还提供 47 个仪表盘工具、129 个 REST 操作、签名 webhook 以及一个
MCP 服务器。

- [API 文档](https://docs.xquik.com/introduction)：REST API 使用指南
- [Search Tweets API](https://docs.xquik.com/api-reference/x/search-tweets)：
  驱动此 Actor 的接口
- [Batch Tweets API](https://docs.xquik.com/api-reference/x/batch-tweets)：
  按 ID 获取最多 100 条推文
- [User Tweets API](https://docs.xquik.com/api-reference/x/user-tweets)：
  获取用户的时间线
- [MCP 服务器](https://docs.xquik.com/mcp/overview)：查看支持的工具
- [Webhooks](https://docs.xquik.com/webhooks/overview)：签名事件推送
- [GitHub](https://github.com/Xquik-dev/x-twitter-scraper)：源代码及
  问题跟踪

## 常见问题

**我需要 X API 密钥吗？** 不需要。此抓取工具使用自有基础设施，无需
登录或凭据。

**什么因素会限制一次运行？** 你设置的条目数量上限和 Apify 支出上限会
停止运行，Apify 账户及平台限制依然适用。

**运行速度有多快？** 运行耗时取决于所用路径、结果数量及上游服务的
可用性。

**为什么 Latest 搜索会返回 X 的 Latest 标签页不显示的帖子？** X 会把部分
匹配的帖子排除在其公开的 Latest 列表之外，只返回给带时间范围的搜索。此
Actor 会把 Latest 搜索当作并排的时间切片来读取，因此两类帖子都能获取。在
针对 1 个查询、100 条帖子的测试中，83 条与另外 5 个抓取工具返回的帖子
一致，17 条是 X 只返回给带时间范围搜索的帖子。这 17 条全部位于同一时间
跨度内。每条帖子都是你的查询在 X 上的真实搜索结果，每条帖子你只需付费
1 次。

**哪些搜索操作符可用？** X 高级搜索支持按作者、接收者、提及、日期、
互动、媒体及位置进行搜索。

**可以用 Apify API 运行吗？** 可以。请查看
[API 标签页](https://apify.com/xquik/x-tweet-scraper/api)获取 Python、
JavaScript 及 cURL 示例。

**可以设置定期抓取吗？** 可以。使用 Apify 内置的
[定时任务](https://docs.apify.com/platform/schedules)功能，即可按
cron 计划运行此 Actor。

**在哪里报告问题？** 请在
[GitHub](https://github.com/Xquik-dev/x-twitter-scraper/issues) 提交
issue，或使用此 Actor 页面上的 Issues 标签页。

**可以获取定制方案吗？** 可以。请访问 [xquik.com](https://xquik.com)，
或阅读 [API 文档](https://docs.xquik.com/introduction)了解仪表盘、
API、MCP 服务器及 webhook。
