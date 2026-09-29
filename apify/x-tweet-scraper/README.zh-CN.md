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

Xquik 是全球最快、最便宜的 X（Twitter）抓取服务，X 数据也最完整。Xquik 的 X Tweet Scraper 用 50 多个过滤条件收集帖子（即推文）、回复、个人资料、列表和搜索结果。公开基准测试证明，它是 12 个帖子抓取 Actor 中最便宜、最快的。它每行的字段数是各 Actor 中位数的 2 倍，详见[下方基准测试](#基准测试)。其他大多数 Apify Actor 在过滤或去重之前就开始收费。Xquik 只对已交付、不重复且符合过滤条件的结果收费。

抓取公开的 X（Twitter）帖子，**所有 Apify 套餐均为每条已交付结果 $0.00015 起**。Apify 另行收取平台使用费。无需登录 X，也没有启动费或查询费。由 [Xquik](https://xquik.com) 打造。

> Xquik 是独立的第三方服务，与 X Corp 无关联。“Twitter”和“X”是 X Corp 的商标。

## X Tweet Scraper 能做什么？

Xquik 的 X Tweet Scraper 返回帖子、互动指标、公开的作者个人资料和媒体。它接受 URL、用户名、列表 ID、帖子 ID 和搜索查询，并提供 50 多个过滤条件。

### 主要功能

- 过滤和去重在计费前完成。
- 一种输入即可支持按 ID 查询、时间线、列表、搜索和互动模式。
- 帖子 ID 输入没有固定的数量上限。你的 Apify 支出和超时设置仍然有效。
- 运行日志在 `fetchDurationMs`、`processingDurationMs`、`pushDurationMs`、`statusDurationMs` 和 `fullPageDurationMs` 中显示每页耗时。
- Apify 重启运行后，已交付的行和进度都会保留。

### 使用场景

- 用每条推文更多的字段支持研究、数据补全、分析和 AI 训练。我们的中位数行在 2026-09-29 有 63 个字段。这是其他 11 个 Actor 中位数的 2 倍。
- 追踪帖子中的品牌情感。
- 监测竞争对手的帖子和行业术语。
- 在公开对话中寻找潜在客户。
- 收集用于研究的公开数据集。
- 找出公开互动量高的帖子。

### X Tweet Scraper 能提取哪些数据？

| 字段 | 说明 |
| --- | --- |
| `id` | 帖子 ID |
| `text` | 完整帖子正文（包括最长 25k 字符的 Note Tweet） |
| `createdAt` | X 原生时间戳字符串 |
| `likeCount` | 喜欢数 |
| `retweetCount` | 转帖数 |
| `replyCount` | 回复数 |
| `quoteCount` | 引用帖子数 |
| `viewCount` | 查看次数 |
| `bookmarkCount` | 书签数 |
| `lang` | 帖子语言 |
| `url` | 帖子的直接链接 |
| `tweetUrl` | 扁平输出中的帖子 URL 别名 |
| `twitterUrl` | 扁平输出中 twitter.com 格式的 URL |
| `author` | 可获取的作者字段（用户名、简介、网站、计数） |
| `authorUsername` | 扁平输出中的作者用户名 |
| `authorFollowers` | 扁平输出中的作者关注者数 |
| `authorUrl` | 扁平输出中的作者网站（如有） |
| `authorDescription` | 扁平输出中的作者简介 |
| `authorCoverPicture` | 扁平输出中的作者横幅图片 URL |
| `authorPinnedTweetIds` | 扁平输出中的作者置顶帖子 ID |
| `media` | 附带的图片、视频、GIF |
| `mediaUrls` | 扁平输出中的媒体 URL |
| `imageUrls` | 扁平输出中的图片 URL |
| `videoUrls` | 扁平输出中的视频 URL |
| `entities` | 话题标签、URL、提及和视频时间戳 |
| `displayTextRange` | X 显示文本范围（如有） |
| `contentDisclosure` | 披露元数据（如有） |
| `conversationControl` | 回复权限和公开对话所有者 |
| `reactionContext` | 反应所引用的公开帖子和用户 |
| `limitedActions` | 公开的互动限制和提示 |
| `isLimitedReply` | 回复是否受限 |
| `isNoteTweet` | 是否为 Note Tweet（长帖） |
| `isQuoteStatus` | 这条帖子是否引用了另一条帖子 |
| `isRetweet` | 这一行是否为转帖，附带原帖 |
| `isPinned` | 作者是否置顶了这条帖子，仅限扁平行 |
| `isReply` | 这条帖子是否为回复 |
| `quoted_tweet` | 被引用的帖子对象（如为引用帖子） |
| `conversationId` | 帖子串或对话 ID |
| `resultType` | 丰富行、互动行和诊断记录的行类型 |
| `sourceTweetId` | 文章和互动模式下的源帖子 ID |
| `article` | `mode: "article"` 下的结构化文章数据 |

可选的帖子元数据包括 `authorUnavailable`、`card`、`communityId`、`communityNote`、`edit`、`exclusiveContent`、`noteTweet` 和 `postCta`。`isTranslatable`、`place`、`possiblySensitive` 和 `viewState` 保存其他公开上下文。`previousCounts` 保存编辑前的互动数据。`tombstone` 保存可见性提示。`unmentionedUserIds` 列出退出对话的用户。具体字段见 OpenAPI。

嵌套的 `author` 对象包含公开个人资料字段，涵盖身份、计数、认证、可用性、职业信息和个人简介。

转帖行的 `isRetweet` 为 `true`。它们的 `text` 包含完整的原帖。`retweeted_tweet` 保存原帖及其作者和计数。

帖子行还保留 `type`、`source`、`inReplyToId`、`inReplyToUserId`、`inReplyToUsername` 和 `retweeted_tweet`。被引用和被转帖的帖子在每一层嵌套中都带有相同字段。

媒体信息包括可用性、尺寸、标签和视频变体，还有 `watchNowUrl` 和 `visitSiteUrl` 操作。

数据行从不包含仅对查看者可见的状态。该 Actor 会移除关注、屏蔽、隐藏、书签、喜欢、转帖、编辑权限等查看者标记。原始输出同样不含这些标记。

## 如何用 X Tweet Scraper 抓取帖子数据？

在 Apify Console 中按以下步骤操作：

1. 打开一个[任务示例](#任务示例)，或打开 Input 标签页。
2. 添加 URL、用户名、帖子 ID 或搜索词。
3. 设置 `maxItems` 和需要的过滤条件。
4. 点击 Start，等待运行完成。
5. 以 JSON、CSV、Excel 或 HTML 格式导出数据集。

下面的示例列出每种来源的输入。

### 粘贴 URL

可以混合粘贴帖子、个人资料、搜索或列表 URL：

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

帖子 URL 返回对应的帖子，不重复，并按你的输入顺序排列。个人资料 URL 返回该账号的帖子。搜索 URL 执行其中的查询。列表 URL 返回该列表的帖子。`maxItems` 限制所有粘贴 URL 的结果总数。

### 抓取多个用户名

用户名相当于多个 `from:username` 搜索的简写：

```json
{ "twitterHandles": ["elonmusk", "nasa", "openai"], "maxItems": 100 }
```

每个用户名返回该账号的帖子。该 Actor 在输出和计费前移除重复行。用户名带不带 `@` 都可以。和 X 上的“帖子”标签页一样，用户名和个人资料 URL 会保留转帖。即使设置了日期或过滤条件，也会保留。设置 `tweetTypes.excludeRetweets` 可以去掉转帖。

### 搜索帖子

在 Search terms 字段中填写一个或多个查询：

```json
{
  "searchTerms": ["from:elonmusk AI", "#bitcoin lang:en"],
  "maxItems": 1000,
  "queryType": "Latest"
}
```

`mode` 设为 `tweet` 或 `tweets` 且没有帖子 ID 时，查询按搜索执行。这样，有效的 `searchTerms` 不会返回空的查询结果。

也可以用日期窗口补抓账号的历史帖子，例如 `from:elonmusk since:2026-01-01 until:2026-01-02`。每个搜索词都有自己的 `searchTerm` 标注。`maxItems` 限制所有搜索词的结果总数。该 Actor 会用 `since:`、`until:` 和 Unix 时间窗口检查每条返回的帖子。带过滤条件的搜索会一直读取，直到找到匹配项或 X 没有更多结果。

`from:` 搜索词的结果与 X 搜索一致，所以不含转帖。添加 `include:nativeretweets` 可以保留转帖，添加 `filter:nativeretweets` 则只返回转帖。

### 按 ID 查询帖子

```json
{ "tweetIds": ["1846987139428634858", "1858743654778892784"], "maxItems": 100 }
```

结果保持你的输入顺序，去掉重复项，并且只包含你请求的帖子。查询还接受 `tweetId`、`tweetIDs`、`tweets`、`postIds`、`lookupPostIds`、`tweetUrls` 和 `postUrls`。

### 互动、帖子串和文章模式

设置 `mode` 可以强制使用一种读取方式，不管输入中还有哪些字段：

```json
{ "mode": "replies", "replyTweetIds": ["1846987139428634858"], "maxItems": 100 }
```

帖子和搜索模式有 `tweet`、`tweets` 和 `search`。个人资料模式有 `profileTweets`、`profileReplies`、`profileMedia` 和 `profileLikes`。`listTweets` 读取列表帖子，`article` 读取帖子中的 X 文章。针对单条帖子的模式有 `replies`、`quotes`、`thread`、`retweeters` 和 `favoriters`。

`profileTweets` 对应 X 个人资料的“帖子”标签页。它返回该账号的帖子、转帖和对自己帖子的回复。行按日期排序。该 Actor 在计费前去掉回复其他账号的帖子，也去掉其他作者的对话上下文。

只要原创帖子时，排除不需要的类型：

```json
{
  "mode": "profileTweets",
  "twitterHandles": ["apify"],
  "tweetTypes": { "excludeReplies": true, "excludeRetweets": true },
  "maxItems": 100
}
```

`tweetTypes.excludeReplies`、`excludeRetweets` 和 `excludeQuotes` 适用于所有来源。搜索时，它们会以 `-filter:replies`、`-filter:nativeretweets` 和 `-filter:quote` 发给 X。读取个人资料或列表时，该 Actor 自己去掉这些行。被排除的行不会进入数据集，所以你不用为它们付费。它们也不计入 `maxItems`。

`profileReplies` 对应 X 的“回复”标签页（With Replies）。它返回该账号自己的帖子和回复。该 Actor 会排除其他作者的对话上下文。只要回复时，使用 `filter:replies` 或 `to:` 搜索。

搜索和分页的帖子模式支持 `time.since`、`time.until`、Unix 时间戳和 `lang`。这些模式包括个人资料的帖子、回复、媒体和喜欢，以及列表、回复、引用和帖子串。对应的扁平日期运算符也可以用。该 Actor 在计费前逐行验证。日期下限包含在内，上限不包含。日期过滤会排除没有可用日期的行。语言过滤会排除语言缺失或不匹配的行。被过滤的行不会占用你的结果上限。

`since` 和 `until` 用同一天会得到空窗口。要取完整的 1 天，把 `until` 设为第二天。带日期窗口的列表运行会很快翻到较早的日期，越过你的下限后就结束。列表中很久以前的窗口可能漏掉少量回复。帖子过滤条件不适用于用户名单，也不适用于直接的帖子或文章查询。

`time.withinTime` 和 `within_time` 在相同模式下有效。值为 `7d` 时，保留运行开始读取前的最近 7 天。窗口早于 2006 年时，保留所有帖子。

`mode: "replies"` 更严格。每个帖子行的 `inReplyToId` 都等于请求的帖子 ID。对话中的嵌套回复不算直接回复。如果 X 显示的回复少于它报告的数量，该 Actor 会保留已找到的行。未达到你的上限时，它会向 `diagnostics` 添加 1 条 `replies-incomplete` 记录。在达到你的上限或 X 没有更多回复之前，运行保持部分完成状态。`replyCoverage` 报告回复数量和覆盖详情。把 `maxItems` 设为你想要的总数，单个回复目标也可以超过 25,000。

文章行包含 `resultType: "article"`、`sourceTweetId`、`article` 和可选的 `author`。互动用户行包含 `resultType: "user"`、`sourceTweetId` 和 `engagementMode`。

转帖者是常规的公开互动模式。喜欢者只能尽力获取，X 可能只在符合条件或作者本人可见的帖子上显示喜欢者。个人资料的喜欢也只能尽力获取，因为很多公开个人资料没有可读取的“喜欢”标签页。X 没有显示任何用户或喜欢过的帖子时，该 Actor 会写入一条免费的 `diagnostics` 记录。帖子行可以带有书签数。X 不显示哪些账号把帖子加入了书签。

### 导出扁平 CSV 行

保留默认的嵌套 JSON 字段，或添加适合电子表格的列：

```json
{ "searchTerms": ["from:nasa moon"], "maxItems": 100, "outputPreset": "flat" }
```

扁平输出不改动 `author` 和 `media`，并添加 `authorUsername`、`authorName`、`authorFollowers`、`tweetUrl`、`twitterUrl`、`mediaUrls`、`imageUrls` 和 `videoUrls` 等顶层字段。

每个扁平帖子行都带有 `media`。没有媒体的帖子为空数组。这样，每行在电子表格或类型化管道中都有相同的键。

### 选择字段命名

默认使用旧版字段名。可以为丰富结果或原始结果选择一种风格：

```json
{
  "searchTerms": ["from:nasa moon"],
  "maxItems": 100,
  "outputVariant": "rich",
  "fieldStyle": "snake_case"
}
```

顶层和嵌套结果字段可以使用 `camelCase` 或 `snake_case`。扁平 snake case 输出包含 `author_username` 和 `media_urls` 等字段。`raw` 下的安全源数据快照保留原始键名。冲突的源字段名也保持不变，以免丢失数据。

旧版诊断使用 `resultType`、`actorVersion` 和 `replyCoverage`。丰富输出和原始输出会在每一层嵌套中应用 `fieldStyle`。例如，snake case 使用 `result_type`、`actor_version` 和 `reply_coverage`。Overview 数据集视图两种风格都适用。请选择与运行的 `fieldStyle` 一致的 Console 视图。`camelCase fields` 对应 `camelCase`，`snake_case fields` 对应 `snake_case`。视图只选择列，从不重命名已存储或已导出的数据。

### 组合高级过滤条件

组合用户、日期、位置、媒体和互动过滤条件：

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

设置 `queryType: "Latest + Top"`，在 1 次运行中同时使用 X 的两种搜索模式。该 Actor 在计费前去重，并用任一模式的结果填满你的上限。`Top` 按相关性排序，不会返回所有匹配项。设置 `includeSearchTerms: true`，把每个匹配的查询附加为 `searchTerm` 字段。

设置 `lang` 后，该 Actor 会验证每条返回帖子的语言，跳过不匹配的帖子，并继续读取匹配的帖子。

## 任务示例

你可以从 50 个公开任务中选择。每个任务都有设了上限的输入和对应的数据集视图。每个任务打开时都带有一个真实的搜索或目标，运行前可以先修改。

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
- [收集电动汽车相关对话](https://apify.com/xquik/x-tweet-scraper/examples/collect-electric-vehicle-conversations)

## 抓取帖子（推文）要花多少钱？

Xquik 的 X Tweet Scraper 在所有 Apify 套餐上都按每个已交付行 $0.00015 收费。Apify 另行收取平台使用费。Xquik 对每个已交付的数据行收费一次。`diagnostics` 输出中的诊断信息免费。

- 不需要订阅 Xquik。
- 没有单独的启动费或查询费。URL 和单条帖子查询也不额外收费。
- 过滤和去重在计费前完成。被过滤或重复的行都不收费。
- 没有输入、输入无效和零输出的运行，会向免费的 `diagnostics` 输出写入 1 条说明下一步做法的记录。

运行遇到问题或规模较大时，还会写入一条 `run-report` 记录。其中的 `estimatedChargeUsd` 使用 Apify 的实时按事件计费价格。出现问题的运行总会写入 `run-report`，包括没有输入和输入无效时的退出。顺利完成的小型运行会跳过它，节省 Apify 用量。开启 `alwaysSaveRunRecords` 后，每次运行都会写入。运行报告把数据行记在 `realRows`，把诊断记录记在 `diagnosticRows`，两者分开统计。

要限制单次运行的花费，请看[运行选项](#运行选项)。

## 基准测试

Xquik 的 X Tweet Scraper 在成本和速度上胜过其他 11 个帖子抓取 Actor。它的中位数行有 63 个字段，是其他 Actor 中位数的 2 倍。

| Actor                                                             | 有用推文 | 每条有用推文成本 | 每秒有用推文 | 每行字段数 | 公开运行                                                          |
| ----------------------------------------------------------------- | -------: | ---------------: | -----------: | ---------: | ----------------------------------------------------------------- |
| xquik/x-tweet-scraper                                             |      890 |        $0.000175 |         39.2 |         63 | [查看运行](https://console.apify.com/view/runs/fflWVxHwYvtyHpAQX) |
| xquik/x-tweet-scraper                                             |      883 |        $0.000176 |         25.2 |         63 | [查看运行](https://console.apify.com/view/runs/EtSdBgkUcH4M1uicf) |
| xquik/x-tweet-scraper                                             |      882 |        $0.000177 |         25.7 |         63 | [查看运行](https://console.apify.com/view/runs/SK3ZWhPwzGJYoYQba) |
| xquik/x-tweet-scraper                                             |      877 |        $0.000178 |         26.9 |         63 | [查看运行](https://console.apify.com/view/runs/JRdbcigkBMCaFuH1W) |
| scrapesmith/twitter-x-scraper-tweets-profiles-replies             |      813 |        $0.000185 |         10.5 |         36 | [查看运行](https://console.apify.com/view/runs/mIT1zf0xccCsYWO1E) |
| scrapesmith/twitter-x-scraper-tweets-profiles-replies             |      805 |        $0.000187 |         10.6 |         36 | [查看运行](https://console.apify.com/view/runs/p1MUeElsamZUepTpm) |
| scrapesmith/twitter-x-scraper-tweets-profiles-replies             |      805 |        $0.000187 |         10.7 |         36 | [查看运行](https://console.apify.com/view/runs/pQlQa0GMm7BWTUUOB) |
| kaitoeasyapi/twitter-x-data-tweet-scraper-pay-per-result-cheapest |      880 |        $0.000250 |          9.1 |         46 | [查看运行](https://console.apify.com/view/runs/3Fn8yvqncsWdcw1I2) |
| scraper_one/x-posts-search                                        |      804 |        $0.000314 |          3.3 |         14 | [查看运行](https://console.apify.com/view/runs/M9TgeCLLKZlNTOrj0) |
| danek/twitter-scraper                                             |      807 |        $0.000347 |          5.0 |         27 | [查看运行](https://console.apify.com/view/runs/kyeJqCeaARxQPGM5W) |
| tweetapi/twitter-x-search-scraper                                 |      337 |        $0.000374 |          2.6 |         28 | [查看运行](https://console.apify.com/view/runs/mxkP8EDAUVtCZdobb) |
| api-ninja/x-twitter-advanced-search                               |      837 |        $0.000430 |          7.4 |         28 | [查看运行](https://console.apify.com/view/runs/XAWKinvZyPNjCwrib) |
| apidojo/twitter-scraper-lite                                      |      251 |        $0.000494 |         12.9 |         54 | [查看运行](https://console.apify.com/view/runs/1t4XwmbQNTtwMJ0Ta) |
| apidojo/tweet-scraper                                             |      481 |        $0.000832 |          7.8 |         55 | [查看运行](https://console.apify.com/view/runs/PydoBgS1YRblg29bB) |
| xtdata/twitter-x-scraper                                          |    1,378 |        $0.001168 |         11.9 |         67 | [查看运行](https://console.apify.com/view/runs/U91dRXEvKvqu41aop) |
| seemuapps/x-tweet-scraper                                         |      805 |        $0.001242 |          6.9 |         24 | [查看运行](https://console.apify.com/view/runs/FstursEw43TbcipYU) |
| maximedupre/twitter-scraper                                       |       46 |        $0.002846 |          0.3 |         31 | [查看运行](https://console.apify.com/view/runs/Hs8irhEcAfWcQNc4w) |

每个 Actor 都运行了同一个搜索和相同的过滤条件。其他 Actor 在 2026-09-27 运行，Xquik 的运行在 2026-09-29 使用了 `outputVariant: "rich"`。
所有运行都使用 Bronze 等级。
有用推文是唯一的英文原创帖子，且至少有 10 个赞。
成本是客户为每条有用推文支付的总费用。
我们的成本包含客户支付的 Apify 平台使用费。
每行字段数是非空字段数的中位数，包括嵌套字段。
一个列表计为 1 个字段。
打开一次运行，即可查看其输入、日志和数据集。

## 空运行、部分完成和停止的运行

Xquik 的 X Tweet Scraper 免费说明运行为何为空、部分完成或停止。运行状态会说明停止原因，并统计已计费的结果和已读取的目标。

### 空结果

为下一次运行付费前，先检查空结果。报告和最终诊断中的 `filtering` 对象会统计被你的过滤条件移除的行。请查看 `serverFilteredRows`、`actorFilteredRows` 和 `pagesWithUnknownServerFiltering`。被过滤的行不产生结果费用。

X 没有更多结果时，运行可能在达到你的上限前结束。这时它报告 `outcome: "complete"` 和 `completionReason: "source_exhausted"`。中断的运行会保留部分完成的结果状态和重试指引。

### 部分完成的运行

`failedSubtargets` 统计出错后停止的查询和个人资料目标。已交付的行留在数据集中，并计入计费。出错并不代表目标不存在。这类运行使用 `completionReason: "partial_failure"`。

中断的运行还会写入一条免费的 `partial` 诊断。已交付的结果不受影响。诊断会报告 `availableResults`、`failedTargets`、`retryable` 和 `nextAction`。Actor 成功退出说明结果已交付，但不代表提取完整。

### 停止原因

状态文本会写明停止的每个原因。如果一次运行既有不存在的账号，又有停滞的搜索，状态会同时写明两者。`stopCauses` 列出每个原因，并附上各自的 `message`、`retryable` 和 `nextAction`。原因包括 `target_not_found`、`target_protected`、`search_unavailable`、`likes_hidden`、`target_failed`、`pagination_safety_limit`、`reply_reach` 和 `deadline_reached`。只要有一个原因可重试，整个运行就是 `retryable`。

### 不存在和不可用的目标

不存在或受保护的目标不算失败，因为 X 上没有可读取的内容。运行会把其他所有目标读完，并报告 `outcome: "complete"`。完成原因取自已读取的目标，例如 `source_exhausted`。`failedSubtargets` 不计入这些目标。状态文本和一条免费的 `complete` 诊断会统计它们。没有其他行的运行会改为写入 `zero-output` 诊断。

X 无法执行的搜索算作失败。遇到这类搜索，X.com 会显示“Something went wrong”。运行会立即停止该搜索，不再重试。X 隐藏的喜欢也算作失败，并立即停止。X 只向帖子作者显示谁喜欢了这条帖子，也只向账号本人显示它喜欢过的帖子。

所有失败都与不可用的目标有关时，诊断会设为 `retryable: false`。请检查目标 URL 或用户名，选择可用的公开账号。缩小 X 无法执行的搜索，或更改它的过滤条件。改为读取转帖者、回复或帖子，不要读取被隐藏的喜欢。其他失败会为未完成的目标保留重试指引。

诊断会在 `unavailableTargets` 中列出这些目标。每个条目包含你输入的原样 `target`、一个 `reason` 和一个 `nextAction`。`reason` 为 `not_found`、`protected`、`search_unavailable` 或 `likes_hidden`。搜索条目还可能有 `fix`，例如需要删除的运算符。这份清单最多保存 100 个条目。请从输入中移除这些目标。

### 安全限制与时间限制

`completionReason: "pagination_safety_limit"` 不是读取失败。运行保留了有效行，然后结束了一个不再返回新结果的目标。运行会报告提取不完整。`failedSubtargets` 保持为 `0`。你只为已交付的行付费。

Apify 默认超时为 `0`，所以运行没有时间限制。该 Actor 会一直运行，直到达到你的上限或没有更多符合条件的数据。你仍然可以设置有限的 Apify 超时。这时 `completionReason: "deadline_reached"` 表示快到时限了。该 Actor 会保存数据行和报告，然后在时限前正常退出。每个已交付行只收费一次。

## 输入

Input 标签页列出了所有选项。至少提供 `startUrls`、`twitterHandles`、`listIds`、`tweetIds`、`searchTerms` 或 `twitterContent` 中的一个。文档中列出的别名也可以用。其他字段都是可选的。

示例：

- 把帖子 URL 粘贴到 Start URLs。
- 粘贴个人资料 URL，或把用户名添加到 X handles。
- 用 `from:user since:YYYY-MM-DD until:YYYY-MM-DD` 作为搜索词，补抓账号的历史帖子。
- 把列表 URL 粘贴到 Start URLs。
- 做高级搜索时，把 `twitterContent` 与 `from:`、`since:`、`min_faves:` 和 `filter:media` 等过滤条件组合使用。

### 支持的常用搜索运算符

| 运算符 | 示例 | 用途 |
| --- | --- | --- |
| `from:` | `from:elonmusk` | 只看该用户的帖子 |
| `to:` | `to:OpenAI` | 只看回复该用户的帖子 |
| `@` | `@nasa` | 提及该用户的帖子 |
| `list:` | `list:123456` | 列表成员发的帖子 |
| `lang:` | `lang:en` | 按语言过滤 |
| `since:` / `until:` | `since:2026-01-01` | 日期范围 |
| `min_faves:` | `min_faves:100` | 互动量门槛 |
| `min_retweets:` | `min_retweets:50` | 转帖数门槛 |
| `filter:media` | `filter:media` | X 媒体搜索运算符 |
| `filter:videos` | `filter:videos` | X 视频搜索运算符 |
| `filter:images` | `filter:images` | X 图片搜索运算符 |
| `filter:links` | `filter:links` | 只看带链接的帖子 |
| `filter:replies` | `filter:replies` | 只看回复帖子 |
| `filter:quote` | `filter:quote` | 只看引用帖子 |
| `filter:blue_verified` | `filter:blue_verified` | 只看 Premium 用户 |

X 不再支持搜索 `filter:vine`、`filter:consumer_video`、`filter:pro_video`、`filter:news` 或 `retweets_of:`。含有其中任何一个的搜索会立即结束，一条免费诊断会给出修正方法。每个查询请控制在 512 个字符以内，X 最多只搜索这么长。

日期窗口包含下限，不包含上限。该 Actor 在添加每条帖子并计费前，会检查这两个边界。

完整的运算符列表见 [Twitter Advanced Search](https://github.com/igorbrigadir/twitter-advanced-search)。

### 从其他帖子抓取 Actor 迁移

直接粘贴你现在用的输入。Xquik 的 X Tweet Scraper 能读取其他帖子抓取 Actor 使用的字段名，并映射到自己的字段。标准名称仍是文档中的默认写法。别名从不丢弃字段，也不改变你的费用。输入表单只列出标准字段，因此很简短。别名在 JSON、API、SDK、自动化和已保存的任务输入中都有效。

| 你现在用的字段 | Xquik 读取为 |
| --- | --- |
| `startUrls`、`urls`、`tweetUrls`、`postUrls`、`profileUrls`、`accountUrls` | `startUrls` |
| 单个字符串形式的 `profileUrl` | `startUrls` |
| `tweetIds`、`tweetIDs`、`tweets`、`postIds`、`lookupPostIds`、`tweet_ids`，或单个字符串形式的 `tweetId` | `tweetIds` |
| `twitterHandles`、`usernames`、`user_names`、`userNameList`、`handles`、`screenNames`、`profileTweets` | `twitterHandles` |
| 单个字符串形式的 `username`、`handle`、`screenName` | `twitterHandles` |
| `searchTerms`、`searchQueries`、`queries`、`search`，列表形式或每行一个搜索 | `searchTerms` |
| `twitterContent`、`query`、`searchQuery` | `twitterContent` |
| `maxItems`、`maxResults`、`max_results`、`resultsLimit`、`count`、`resultsCount`、`numberOfTweets`、`maxPosts`、`max_posts`、`max_items`、`maxTweets`、`tweetsDesired` | `maxItems` |
| `sort` | `queryType` |
| `tweetLanguage`、`language` | `lang` |
| `author`、`inReplyTo`、`mentioning` | `from`、`to`、`@` |
| `start`、`startDate`、`end`、`endDate` | `since`、`until` |
| `minimumRetweets`、`minimumFavorites`、`minimumReplies` | `min_retweets`、`min_faves`、`min_replies` |
| `onlyImage`、`onlyVideo`、`onlyQuote`、`onlyTwitterBlue` | `filter:images`、`filter:videos`、`filter:quote`、`filter:blue_verified` |
| `geotaggedNear`、`withinRadius` | `near`、`within` |
| Google Search Scraper 的 `quickDateRange`，例如 `d7`、`w2`、`m1` 或 `y` | `since_time`，从运行开始时往回计算 |

粘贴的输入会这样处理：

- 每种来源都会运行。同时包含 URL、用户名、搜索词、列表 ID 和帖子 ID 的输入会全部运行。`maxItems` 作用于整次运行。
- 与 `searchTerms` 一起出现的搜索查询，会作为多出的 1 个搜索词运行。
- 写成 `x.com/@name` 的个人资料 URL，按 `x.com/name` 读取。
- 同时设置别名和它的标准字段时，以标准字段的值为准。运行日志会写明被忽略的别名。
- 运行日志会写明该 Actor 忽略的每个字段，例如 `customMapFunction`。该 Actor 从不悄悄丢弃字段。
- 行数上限必须是大于等于 1 的整数。`maxResults: 0` 会让运行在读取或计费前停止。
- `quickDateRange: "m1"` 在所有读取方式下都读取过去 1 个月。月和年按日历往回计算。没有 h、d、w、m 或 y 时，运行会在读取或计费前停止。
- 该 Actor 没有“页”这个单位。请把 `maxPages` 换成 `maxItems`。
- 该 Actor 没有用户 ID 字段。请发送用户名或个人资料 URL，不要用 `userId` 或 `user_ids`。
- `from`、`min_faves`、`since_time` 和 `filter:images` 等搜索运算符字段已经使用 X 的名称，不需要映射。

### Console 与 API 输入

Console 表单有以下控件：

- Mode、Output Variant、Field Style、Output Preset 和 Sort By 是经过校验的下拉菜单。
- Start URLs 和 Profile URLs 接受字符串或 `{ "url": "..." }` 对象。它们的 JSON 编辑器保留两种 API 格式。
- 结构化过滤条件提供分组控件，所以你不需要写嵌套 JSON。
- 表单会隐藏已被过滤条件组覆盖的扁平运算符。JSON、API、SDK、自动化和已保存的任务输入仍然接受它们。
- Max Items 和 Max Items Per Target 接受大于等于 1 的整数。互动门槛接受大于等于 0 的整数。

新的集成请使用标准字段。上面迁移表中的别名仍然可用。`includeRaw` 是 `outputVariant: "raw"` 的别名。`compact` 和 `full` 等旧的 `outputVariant` 值仍可作为 Legacy 输出使用，表单会把它们标为 Legacy 别名。

## 输出

每个帖子行都是一个 JSON 对象，包含 X 提供的元数据。数据集和运行报告的 schema 为每个字段给出标题、说明和示例。AI Agent 读取时不需要猜字段的含义。

示例值仅作说明，你的运行会返回来自 X 的实时数据。

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

可以把数据集导出为 JSON、CSV、Excel 或 HTML。

## 运行选项

- 设置 Apify 的最高总费用来限制运行成本。`maxItems` 留空，即可在预算内拿到尽可能多的行。想要更少的帖子时，再设置 `maxItems`。
- 在 Apify API 中设置 `maxTotalChargeUsd`，或在 Console 中设置 Max cost per run。Apify 会把这个限额以 `ACTOR_MAX_TOTAL_CHARGE_USD` 传给该 Actor，Actor 再把它换算成最多可计费的行数。
- 传入 `tweetIds` 可一次查询多条帖子。粘贴个人资料 URL 可读取一个账号的帖子。
- 查询较多时，设置 `includeSearchTerms: true`，为每条结果标上对应的搜索词。
- 设置 `queryType: "Latest + Top"`，在 1 次运行中同时使用 X 的两种搜索模式。去重和结果上限同时作用于两者。
- 如需每秒 1 次的检查和签名 webhook，请使用 Xquik 的账号监控或关键词监控。活跃的监控每秒检查一次。

### 始终使用最新构建

每次运行都选择 `latest`，获取所有已发布的修复。

如果不选择构建，Apify 会用默认的 `latest` 运行 Xquik 的 X Tweet Scraper。Console 中的运行和标准 API 示例都沿用这个默认值。

已保存的任务可以覆盖 Actor 的默认值。定时调度和任务集成会沿用任务的选择。请把所有覆盖值都设为 `latest`。

Apify 不会把固定的构建编号重定向到 `latest`。请把固定编号换成 `latest`。只在临时回滚或复现某次运行时使用固定构建。

请阅读 Apify 的[构建标签](https://docs.apify.com/platform/actors/development/builds-and-runs/builds)、[运行选项](https://docs.apify.com/platform/actors/running/runs-and-builds)和[任务文档](https://docs.apify.com/platform/actors/running/tasks)。

## 相关 Xquik Actor

所有 Xquik Actor 都使用同一套提取引擎、先过滤后计费的规则和诊断功能。按你需要的数据选择对应的 Actor。

- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper)：从用户名、ID 或 URL 抓取个人资料，以及这些账号的帖子、回复、媒体和关注者。适合从账号而不是搜索入手的场景。每行 $0.00015 起。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper)：抓取帖子下的回复、评论和完整对话，提供 25 多个过滤条件。适合需要帖子下方讨论的场景。每行 $0.00015 起。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper)：按帖子 URL 或 ID 批量抓取回复、引用、转帖者和帖子串。适合衡量谁与帖子有过互动的场景。每行 $0.00015 起。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper)：抓取关注者、正在关注的账号、列表成员、订阅者和社群成员，输出为个人资料行。适合需要受众或成员名单的场景。每条个人资料 $0.00015 起。
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper)：按用户名、简介和位置搜索用户，可按关注者数、认证状态、账号年龄和位置过滤。适合通过搜索建立账号名单的场景。每条个人资料 $0.00015 起。
- [X List Scraper](https://apify.com/xquik/x-list-scraper)：从列表 URL 或 ID 抓取列表帖子、成员和关注者。适合用精选列表确定来源的场景。每行 $0.00015 起。
- [X Community Scraper](https://apify.com/xquik/x-community-scraper)：抓取社群信息、帖子、搜索结果、成员和版主。适合来源是 X 社群的场景。每行 $0.00015 起。
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper)：按位置抓取实时趋势，附带排名、帖子量、查询词和 WOEID。适合追踪各地热门话题的场景。每条趋势 $0.00015 起。
- [X Article Scraper](https://apify.com/xquik/x-article-scraper)：把长篇 X 文章抓取为 Markdown 和纯文本，附带封面、作者、日期和指标。适合需要文章正文而不是帖子的场景。每篇文章 $0.00015 起。
- [X Media Downloader](https://apify.com/xquik/x-media-downloader)：从帖子或个人资料提取或存储照片、视频和 GIF，可选 MP4 和元数据。适合需要媒体文件本身的场景。每条媒体行 $0.00015 起。
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring)：追踪品牌提及，用 AI 判断相关性和情感、回答客户体验问题，并比较各次运行。适合长期关注一个品牌的场景。每条已分析帖子 $0.0003 起。
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis)：用 AI 为每条帖子标注态度、强度和讽刺概率。适合了解任意话题整体情感的场景。每条已分析帖子 $0.0003 起。
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)：用 AI 标注看涨、看跌、中性或混合立场，以及内容类型、信心程度和资产相关性。适合关注股票、加密货币或交易讨论的场景。每条已分析帖子 $0.0003 起。
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)：用 AI 按形式、来源标注和话题相关性标注新闻帖子。适合区分新闻报道和评论的场景。每条已分析帖子 $0.0003 起。
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)：用 AI 为每条帖子回答你自定义的分类、评分和是非问题。适合预设分析不符合你的标签的场景。每条已分析帖子 $0.0003 起。
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)：根据 8 个 AI 特征答案，为每条帖子估算 0 到 100 的 Viral Score 和结论。适合研究帖子为何走红或遇冷的场景。每条已分析帖子 $0.0003 起。

## 不只需要抓取？

Xquik 还提供 47 个仪表盘工具、129 个 REST 操作、签名 webhook 和一个 MCP 服务器。

- [API 文档](https://docs.xquik.com/introduction)：REST API 指南
- [Search Tweets API](https://docs.xquik.com/api-reference/x/search-tweets)：通过 REST 搜索帖子
- [Batch Tweets API](https://docs.xquik.com/api-reference/x/batch-tweets)：按 ID 获取最多 100 条帖子
- [User Tweets API](https://docs.xquik.com/api-reference/x/user-tweets)：获取用户的时间线
- [MCP 服务器](https://docs.xquik.com/mcp/overview)：查看支持的工具
- [Webhooks](https://docs.xquik.com/webhooks/overview)：签名事件推送
- [GitHub](https://github.com/Xquik-dev/x-twitter-scraper)：源代码和问题追踪

## 常见问题

### 我需要 X API 密钥吗？

不需要。你不需要 X API 密钥、登录或任何凭据。

### 什么会限制一次运行？

你设置的结果上限和 Apify 支出上限会让运行停止。Apify 账号和平台限制仍然适用。

### 它有多快？

在[基准测试](#基准测试)中，Xquik 的 X Tweet Scraper 每秒交付 25.2 到 39.2 条有效帖子。运行时间取决于你的输入、结果数量和 X 的可用性。

### 为什么“最新”搜索会返回 X“最新”标签页里没有的帖子？

X 的“最新”标签页会漏掉一些匹配的帖子。Xquik 的 X Tweet Scraper 也会返回这些帖子。每条帖子都是你的查询在 X 上真实的搜索结果。每条帖子只收费一次。

### 支持哪些搜索运算符？

X 高级搜索支持作者、接收者、提及、日期、互动、媒体和位置。示例见[支持的常用搜索运算符](#支持的常用搜索运算符)。

### 可以用 Apify API 运行它吗？

可以。[API 标签页](https://apify.com/xquik/x-tweet-scraper/api) 提供 Python、JavaScript 和 cURL 示例。

### 可以定期自动抓取吗？

可以。用 Apify 内置的[定时调度](https://docs.apify.com/platform/schedules)，按 cron 运行 Xquik 的 X Tweet Scraper。

### 可以获得定制方案吗？

可以。访问 [xquik.com](https://xquik.com) 或阅读 [API 文档](https://docs.xquik.com/introduction)，了解仪表盘、API、MCP 服务器和 webhook。

### 抓取 X 数据合法吗？

Xquik 的 X Tweet Scraper 请求的是公开的 X 字段。结果可能包含个人数据。请确认用途合法，并遵守适用于你的隐私规定。不确定时，请咨询专业律师。

### 在哪里获取帮助？

在 Actor 页面的 Issues 标签页或 [GitHub](https://github.com/Xquik-dev/x-twitter-scraper/issues) 上提交 issue。也可以带上运行 ID 联系 support@xquik.com。
