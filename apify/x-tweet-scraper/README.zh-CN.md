[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · **简体中文** · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer 将 Xquik MCP 连接到编程 Agent](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[观看 Framer 如何在 Claude Code、Codex、Cursor 等工具中使用 Xquik 抓取工具](https://youtu.be/4UOSpoOoC3Y?t=367)，从 6:07 开始。

Xquik 是全球最快、最便宜的 X（Twitter）抓取服务，X 数据也最完整。Xquik 的 X Tweet Scraper 用 50 多个过滤条件收集帖子、回复、个人资料、列表&搜索结果。公开基准测试证明，它是 12 个帖子抓取 Actor 中最便宜&最快的。它每行的字段数是各 Actor 中位数的 2 倍，详见[下方基准测试](#基准测试)。其他大多数 Apify Actor 在过滤或去重之前就开始收费。Xquik 只对已交付、不重复且符合过滤条件的结果收费。

抓取 Twitter 推文，**所有 Apify 套餐均为每条已交付结果 $0.00015 起**，可替代 Twitter API。Apify 另行收取平台使用费。你不需要登录 X，也不用支付启动费或查询费。由 Xquik 打造。

> Xquik 是独立的第三方服务，与 X Corp 无关联。
> “Twitter”和“X”是 X Corp 的商标。

## X Tweet Scraper 能做什么？

Xquik 的 X Tweet Scraper 返回帖子、互动指标、公开的作者个人资料&媒体。它接受 URL、用户名、列表 ID、帖子 ID & 搜索查询，并提供 50 多个过滤条件。

### 使用场景

- 把帖子正文、作者、媒体&指标用于研究、数据补全、分析 & AI 训练。
- 追踪帖子中的品牌情感。
- 监测竞争对手的帖子&行业术语。
- 在公开对话中寻找潜在客户。
- 收集用于研究的公开数据集。
- 找出公开互动量高的帖子。

## 为什么使用 X Tweet Scraper？

- **搜索快 13.6 倍。** 关键词搜索的速度是其他 4 个帖子 Actor 中最快者的 13.6 倍。带过滤条件的搜索是 4.3 倍，用户时间线约 3 倍。[基准测试](README.md#benchmark)于 2026-10-15 & 2026-10-16 进行。
- **每条有用帖子的成本最低。** 在全部 3 项[基准测试](README.md#benchmark)中，它每条有用帖子的成本都最低。
- **每条帖子的字段更多。** 它的关键词搜索行字段数中位数为 67 个。这是[基准测试](README.md#benchmark)中其他 Actor 中位数的 1.3 倍。
- **1 次运行涵盖所有来源。** 在 1 个输入中混合使用帖子 ID、用户名、列表、搜索 & URL。设置 `mode` 即可获取回复、引用、帖子串、提及、转帖者或文章。
- **找到 X 上的热门帖子。** `mode: "topTweets"` 返回 X 按 1 项指标排名最高的帖子，例如查看次数。可把范围缩小到 1 天、1 周或 1 个月&某个国家。
- **每条帖子的嵌入代码。** `mode: "embed"` 返回在你的网站上显示帖子的 HTML。
- **帖子 ID 数量不设上限。** 1 次运行可查询任意数量的帖子 ID。行按你的输入顺序返回。你的支出上限&超时设置仍然有效。
- **1 次运行同时获取最新&热门。** 把 `queryType` 设为 `Latest + Top`，同时使用两种搜索排序。每条帖子只付费 1 次。

### 完整结果

- 大日期范围也能完整&快速返回。
- 无论组合哪些运算符，搜索都会返回每条匹配结果。
- 账号历史完整返回，包括旧帖子。
- 个人资料导出会保留作者自己帖子串中的每条帖子。
- 读取个人资料时会包含置顶帖子，并标记为置顶。
- 热门帖子列表稳定返回。
- 带过滤条件的每一页都会填满，直到结果用完。
- 每次返回的结果都包含 X 所能提供的最完整数据。

### 准确的数据行

- 搜索结果包含与你的查询匹配的每条帖子，不含其他内容。
- 词语&短语匹配适用于每种语言&文字。
- 语言过滤适用于 X 标注的每种语言。
- 只有帖子确实不存在时，才会标为缺失。
- 受保护账号&私密列表会得到明确答复，而不是空白页面。
- 转帖包含完整的原帖正文。
- 行中的每个 ID 都精确无误。
- 提及、链接、话题标签&高亮与正文位置一致。
- 未知的计数会列在 `unknownCounts` 中，绝不会显示为 0。
- 认证徽章与 `x.com` 上显示的一致。
- 行中只包含公开数据。
- 引用搜索返回每条真实的引用，不含其他内容。
- 回复导出只包含直接回复，顺序经过验证。
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
- 同一批中出现 2 次的帖子 ID 只计费 1 次。
- Actor 只对已交付、不重复且符合过滤条件的行收费。
- 重启的运行绝不会重复收费。
- 运行始终不超出你的支出上限&仍会写入诊断信息。
- 小规模运行结束时会给出降低成本的建议。

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
- `stopCauses`、`failedSubtargets` & `unavailableTargets` 会写明部分失败的情况。
- 支持团队能准确看到某个请求或运行返回了什么。

### 为 Agent 设计

- Actor 接受为其他 Actor 编写的输入。
- 输出可直接用于表格，带扁平列&互动总数。
- 每次运行都会说明结束原因&是否需要重试。

### 丰富的数据

- 帖子行包含长帖正文、编辑记录、社群笔记、可见范围标签&回复权限。
- 行中包含发布来源应用、媒体数量&专业账号数据。
- 媒体附带变体、替代文本、尺寸&可用性原因。
- 你能看到每个账号转帖某条帖子的时间。
- 帖子&简介可以翻译成你的语言。

### 质量检查

- X 显示的每个字段，要么已提供，要么是有意省略，要么已证实不存在。
- Xquik 会针对 X 实时测试每一种读取。

## X Tweet Scraper 能提取哪些数据？

| 字段                   | 说明                                     |
| ---------------------- | ---------------------------------------- |
| `id`                   | 帖子 ID                                  |
| `text`                 | 完整正文，包括最长 25k 字符的 Note Tweet |
| `createdAt`            | X 原生时间戳字符串                       |
| `likeCount`            | 喜欢数                                   |
| `retweetCount`         | 转帖数                                   |
| `replyCount`           | 回复数                                   |
| `quoteCount`           | 引用帖子数                               |
| `viewCount`            | 查看次数                                 |
| `bookmarkCount`        | 书签数                                   |
| `lang`                 | 帖子语言                                 |
| `url`                  | 帖子的直接链接                           |
| `tweetUrl`             | 扁平输出中的帖子 URL 别名                |
| `twitterUrl`           | 扁平输出中的 `twitter.com` URL           |
| `author`               | 作者用户名、简介、网站&计数              |
| `authorUsername`       | 扁平输出中的作者用户名                   |
| `authorFollowers`      | 扁平输出中的作者关注者数                 |
| `authorUrl`            | 扁平输出中的作者网站，可用时提供         |
| `authorDescription`    | 扁平输出中的作者简介文本                 |
| `authorCoverPicture`   | 扁平输出中的作者横幅图片 URL             |
| `authorPinnedTweetIds` | 扁平输出中的作者置顶帖子 ID              |
| `media`                | 附带的图片、视频、GIF                    |
| `mediaUrls`            | 扁平输出中的媒体 URL                     |
| `imageUrls`            | 扁平输出中的图片 URL                     |
| `videoUrls`            | 扁平输出中的视频 URL                     |
| `entities`             | 话题标签、URL、提及和视频时间戳          |
| `displayTextRange`     | X 显示文本范围，可用时提供               |
| `contentDisclosure`    | 披露元数据，可用时提供                   |
| `conversationControl`  | 回复权限和公开对话所有者                 |
| `reactionContext`      | 反应所引用的公开帖子和用户               |
| `subscriberBadge`      | 回复作者订阅的创作者                     |
| `limitedActions`       | 公开的互动限制和提示                     |
| `isLimitedReply`       | 回复是否受限                             |
| `isNoteTweet`          | 是否为 Note Tweet（长帖）                |
| `isQuoteStatus`        | 这条帖子是否引用了另一条帖子             |
| `isRetweet`            | 这一行是否为转帖，附带原帖               |
| `isPinned`             | 作者是否置顶了这条帖子。仅限扁平行       |
| `isReply`              | 这条帖子是否为回复                       |
| `quoted_tweet`         | 被引用的帖子对象（如为引用帖子）         |
| `conversationId`       | 帖子串或对话 ID                          |
| `resultType`           | 丰富行、互动行&诊断行的行类型            |
| `sourceTweetId`        | 文章和互动模式下的源帖子 ID              |
| `article`              | `mode: "article"` 下的结构化文章数据     |
| `translation`          | `mode: "translation"` 下 X 的翻译        |
| `embed`                | `mode: "embed"` 下的嵌入 HTML & 链接     |

可选的帖子元数据包括 `authorUnavailable`、`card`、`cashtagAttachments`、`communityId`、`communityName`、`communityNote`、`edit`、`exclusiveContent`、`noteTweet` & `postCta`。`isTranslatable`、`place`、`possiblySensitive` & `viewState` 保存其他公开上下文。`previousCounts` 保存编辑前的互动数据。`tombstone` 保存可见性提示。`unmentionedUserIds` 列出退出对话的用户。具体字段见 OpenAPI。

设置 `outputVariant: "rich"`，让每行包含最多的数据。丰富行在末尾加上 `hasCommunityNotes`、`quotedTweetPermalink`、`unavailableAuthorId` & 媒体的 `sourceUser`。旧版行保持不变。

嵌套的 `author` 对象包含公开个人资料字段。它们涵盖身份、计数、认证、可用性、职业信息&个人简介。

转帖行的 `isRetweet` 为 `true`。它们的 `text` 包含完整的原帖。`retweeted_tweet` 保存原帖及其作者&计数。

帖子行还保留 `type`、`source`、`inReplyToId`、`inReplyToUserId`、`inReplyToUsername` & `retweeted_tweet`。被引用&被转帖的帖子在每一层嵌套中都带有相同字段。

媒体信息包括可用性、尺寸、标签&视频变体。它还包括 `watchNowUrl` & `visitSiteUrl` 操作。

数据行从不包含仅对查看者可见的状态。该 Actor 会移除关注、屏蔽、隐藏、书签、喜欢、转帖、编辑权限&类似的查看者标记。原始输出同样不含这些标记。

## 如何用 X Tweet Scraper 抓取帖子数据？

刚接触 Apify？先[创建免费账号](https://console.apify.com/sign-up?fpr=xquik)。免费套餐不需要信用卡&每月提供 $5 可用额度。按每行 $0.00015 计算，不算平台用量，$5 最多可支付 33,000 行。然后回到这里&点击 Try for free。

在 Apify Console 中按以下步骤操作。

1. 打开[任务示例](#任务示例)或 Input 标签页。
2. 添加 URL、用户名、帖子 ID 或搜索词。
3. 设置 `maxItems` & 需要的过滤条件。
4. 点击 Start & 等待运行完成。
5. 以 JSON、CSV、Excel 或 HTML 格式导出数据集。

下面每个示例都是 1 种来源的完整输入。选择适合你数据的那个。

### 粘贴 URL

可以混合粘贴帖子、个人资料、搜索或列表 URL。

```json
{
  "startUrls": [
    { "url": "https://x.com/jack/status/20" },
    { "url": "https://x.com/nasa" },
    { "url": "https://x.com/search?q=AI%20lang%3Aen" },
    { "url": "https://x.com/i/lists/1748648376080666720" }
  ],
  "maxItems": 500
}
```

帖子 URL 返回对应的帖子，不重复&按你的输入顺序排列。个人资料 URL 返回该账号的帖子。搜索 URL 执行其中的查询。列表 URL 返回该列表的帖子。`maxItems` 限制所有粘贴 URL 的结果总数。

### 抓取多个用户名

用户名相当于多个 `from:username` 搜索的简写。

```json
{ "twitterHandles": ["elonmusk", "nasa", "openai"], "maxItems": 100 }
```

每个用户名返回该账号的帖子。该 Actor 在输出&计费前移除重复行。用户名带不带 `@` 都可以。和 X 上的“帖子”标签页一样，用户名&个人资料 URL 会保留转帖。即使设置了日期或过滤条件，它们也会保留转帖。设置 `tweetTypes.excludeRetweets` 可以去掉转帖。

### 搜索帖子

在 Search terms 字段中填写 1 个或多个查询。

```json
{
  "searchTerms": ["from:elonmusk AI", "#bitcoin lang:en"],
  "maxItems": 1000,
  "queryType": "Latest"
}
```

`mode` 设为 `tweet` 或 `tweets` & 没有帖子 ID 时，查询按搜索执行。这样，有效的 `searchTerms` 从不返回空的查询结果。

也可以用日期窗口补抓账号的历史帖子，例如 `from:elonmusk since:2026-01-01 until:2026-01-02`。每个搜索词都保留自己的 `searchTerm` 标注。`maxItems` 限制所有搜索词的结果总数。该 Actor 会用 `since:`、`until:` & Unix 时间窗口检查每条返回的帖子。带过滤条件的搜索会一直读取，直到找到匹配项或 X 没有更多结果。

`from:` 搜索词返回的结果与 X 搜索一致，所以不含转帖。添加 `include:nativeretweets` 可以保留转帖，添加 `filter:nativeretweets` 则只返回转帖。

### 按 ID 查询帖子

```json
{ "tweetIds": ["20", "2082577277246972300"], "maxItems": 100 }
```

结果保持你的输入顺序、去掉重复项&只包含你请求的帖子。查询还接受 `tweetId`、`tweetIDs`、`tweets`、`postIds`、`lookupPostIds`、`tweetUrls` & `postUrls`。

每个条目是帖子 ID 或帖子 URL。运行会免费跳过其他任何条目&读取其余条目。运行状态会统计跳过的条目，日志会列出它们。

把所有 ID 放进 1 次运行。每次运行都向 Apify 支付相同的启动成本。每次运行只有 1 个 ID 时，Apify 用量会让每条帖子多花约 $0.00008。1 次运行有 188 个 ID 时，每条帖子约多花 $0.000005。少于 5 个 ID 的运行会在结束时给出这条提示。

### 互动、帖子串&文章模式

设置 `mode` 可以选择运行读取的内容，不管输入中还有哪些其他字段。

```json
{ "mode": "replies", "replyTweetIds": ["2082577277246972300"], "maxItems": 100 }
```

帖子&搜索模式有 `tweet`、`tweets` & `search`。个人资料模式有 `profileTweets`、`profileReplies`、`profileMedia`、`profileLikes` & `profileMentions`。`listTweets` 读取列表帖子，`article` 读取帖子中的 X 文章。针对单条帖子的模式有 `replies`、`quotes`、`thread`、`retweeters`、`favoriters`、`translation` & `embed`。

`profileMentions` 返回提及每个用户名的帖子，最新的排在前面。

```json
{ "mode": "profileMentions", "twitterHandles": ["nasa"], "maxItems": 100 }
```

`profileTweets` 对应 X 个人资料的“帖子”标签页。它返回该账号的帖子、转帖&对自己帖子的回复。行按日期顺序排列。该 Actor 在计费前去掉回复其他账号的帖子。它也去掉其他作者的对话上下文。

如果只要原创帖子，就排除你不需要的类型。

```json
{
  "mode": "profileTweets",
  "twitterHandles": ["apify"],
  "tweetTypes": { "excludeReplies": true, "excludeRetweets": true },
  "maxItems": 100
}
```

`tweetTypes.excludeReplies`、`excludeRetweets` & `excludeQuotes` 适用于所有来源。搜索时，它们会以 `-filter:replies`、`-filter:nativeretweets` & `-filter:quote` 发给 X。读取个人资料或列表时，该 Actor 自己去掉这些行。被排除的行从不进入数据集，所以你从不为它们付费。它们也从不计入 `maxItems`。

`profileReplies` 对应 X 的“回复”标签页。它返回该账号自己的帖子&回复。该 Actor 会排除其他作者的对话上下文。只要回复时，使用 `filter:replies` 或 `to:` 搜索。

搜索&分页的帖子模式支持 `time.since`、`time.until`、Unix 时间戳 & `lang`。这些模式包括个人资料的“帖子”、“回复”、“媒体”&“喜欢”标签页，以及列表、回复、引用&帖子串。对应的扁平日期运算符也可以用。该 Actor 在计费前逐行验证。日期下限包含在内。上限不包含在内。日期过滤会排除没有可用日期的行。语言过滤会排除语言缺失或不匹配的行。被过滤的行从不占用你的结果上限。

`since` & `until` 用同一天会得到空窗口。要取完整的 1 天，把 `until` 设为第二天。带日期窗口的列表运行会很快翻到较早的日期。越过你的下限后，它们就会结束。列表中很久以前的窗口可能漏掉少量回复。帖子过滤条件不适用于用户名单，也不适用于直接的帖子或文章查询。

`time.withinTime` & `within_time` 在相同模式下有效。值为 `7d` 时，保留运行开始读取前的最近 7 天。回溯到 2006 年之前的窗口会保留所有帖子。

`mode: "replies"` 更严格。每个帖子行的 `inReplyToId` 都等于请求的帖子 ID。对话中的嵌套回复从不算作直接回复。如果 X 显示的回复少于它报告的数量，该 Actor 会保留已找到的行。未达到你的上限时，它会向 `diagnostics` 添加 1 条 `replies-incomplete` 记录。在达到你的上限或 X 没有更多回复之前，运行保持部分完成状态。`replyCoverage` 报告回复数量&覆盖详情。把 `maxItems` 设为你想要的总数，即使 1 个回复目标超过 25,000 也可以。

文章行包含 `resultType: "article"`、`sourceTweetId`、`article` & 可选的 `author`。互动用户行包含 `resultType: "user"`、`sourceTweetId` & `engagementMode`。

转帖者是常规的公开互动模式。喜欢者只能尽力获取。X 可能只在符合条件或作者本人可见的帖子上显示喜欢者。个人资料的喜欢也只能尽力获取，因为很多公开个人资料没有可读取的“喜欢”标签页。X 没有显示任何用户或喜欢过的帖子时，运行状态会说明这一点。帖子行可以带有书签数。X 不显示哪些账号把帖子加入了书签。

### 翻译帖子&获取嵌入 HTML

`mode: "translation"` 返回 X 对每条帖子的翻译。把 `translateTo` 设为语言代码，例如 `en`、`es`、`pt-br` 或 `zh-tw`。默认值为 `en`。

```json
{
  "mode": "translation",
  "tweetIds": ["2082577277246972300"],
  "translateTo": "es"
}
```

每行包含 `resultType: "translation"`、`sourceTweetId` & `translation`。该对象包含 `language`、`sourceLanguage`、`text` & `entities`。

`mode: "embed"` 返回把每条帖子嵌入网站的 HTML。

```json
{ "mode": "embed", "tweetIds": ["2082577277246972300"], "embedTheme": "dark" }
```

每行包含 `resultType: "embed"`、`sourceTweetId` & `embed`。该对象包含 `url`、`authorName`、`authorUrl`、`html` & `width`。`embedHideMedia`、`embedHideThread` & `embedOmitScript` 可以去掉媒体、被回复的帖子或小组件脚本。

这 2 种模式都在 `tweetIds` 中接受帖子 ID 或帖子 URL。`startUrls` 也接受帖子 URL。每条帖子按常规的每行价格产生 1 行。X 上不存在的帖子不产生行&不收费。

### 获取 X 上的热门帖子

`mode: "topTweets"` 按 1 项指标返回 X 排名最高的帖子，与 X 的 Inspiration 页面显示的一致。

```json
{
  "mode": "topTweets",
  "topMetric": "views",
  "topWindow": "week",
  "topCountry": "US",
  "maxItems": 100
}
```

`topMetric` 可以是 `likes`、`replies`、`quotes`、`bookmarks`、`shares` 或 `views`。默认值为 `likes`。`topWindow` 可以是 `day`、`week` 或 `month`，默认值为 `day`。每种选择 X 最多列出 100 条帖子。`topCountry` 留空表示整个 X。设置 `lang` 可只保留 1 种语言。两者都设置时，X 按国家挑选&该 Actor 按语言保留。每行带有 `engagementMode: "topTweets"`，和其他帖子一样按 1 个结果计费。

### 导出扁平 CSV 行

保留默认的嵌套 JSON 字段，或添加适合电子表格的列。

```json
{ "searchTerms": ["from:nasa moon"], "maxItems": 100, "outputPreset": "flat" }
```

扁平输出不改动 `author` & `media`。它会添加 `authorUsername`、`authorName`、`authorFollowers`、`tweetUrl`、`twitterUrl`、`mediaUrls`、`imageUrls` & `videoUrls` 等顶层字段。

每个扁平帖子行都带有 `media`。没有媒体的帖子为空列表。这样，每行在电子表格或类型化管道中都有相同的键。

### 选择字段命名

默认使用旧版字段名。可以为丰富结果或原始结果选择风格。

```json
{
  "searchTerms": ["from:nasa moon"],
  "maxItems": 100,
  "outputVariant": "rich",
  "fieldStyle": "snake_case"
}
```

顶层&嵌套结果字段可以使用 `camelCase` 或 `snake_case`。扁平 snake case 输出包含 `author_username` & `media_urls` 等字段。`raw` 下的安全源数据快照保留原始的源键名。冲突的源字段名也保持不变，以免丢失数据。

旧版诊断使用 `resultType`、`actorVersion` & `replyCoverage`。丰富&原始输出会在每一层嵌套中应用 `fieldStyle`。例如，snake case 使用 `result_type`、`actor_version` & `reply_coverage`。Overview 数据集视图适用于任一风格。请选择与运行的 `fieldStyle` 一致的 Console 视图。`camelCase fields` 对应 `camelCase`。`snake_case fields` 对应 `snake_case`。视图只选择列。它们从不重命名已存储或已导出的数据。

### 组合高级过滤条件

组合用户、日期、位置、媒体&互动过滤条件。

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

设置 `queryType: "Latest + Top"`，在 1 次运行中同时使用 X 的 2 种搜索模式。该 Actor 在计费前去重&用任一模式的结果填满你的上限。`Top` 按相关性排序&不会返回所有匹配项。设置 `includeSearchTerms: true`，把每个匹配的查询附加为 `searchTerm` 字段。

设置 `lang` 后，该 Actor 会验证每条返回帖子的语言。它跳过不匹配的帖子&继续读取匹配的帖子。

## 任务示例

你可以从 50 个公开任务中选择。每个任务都有设了上限的输入&对应的数据集视图。每个任务打开时都带有真实的搜索或目标。运行前先修改它。

- [为 AI Agent 获取最新 X 帖子](https://apify.com/xquik/x-tweet-scraper/examples/search-x-posts-for-ai-agents)
- [构建用于 RAG 的 X 数据集](https://apify.com/xquik/x-tweet-scraper/examples/build-x-rag-dataset)
- [提取用于 RAG 的 X 文章](https://apify.com/xquik/x-tweet-scraper/examples/extract-x-article-for-rag)
- [监测 X 上的 AI 搜索可见度](https://apify.com/xquik/x-tweet-scraper/examples/monitor-ai-search-visibility-on-x)
- [按日期搜索 Twitter](https://apify.com/xquik/x-tweet-scraper/examples/search-twitter-by-date)
- [发现 X 上的 AI Agent 工具](https://apify.com/xquik/x-tweet-scraper/examples/discover-ai-agent-tools-on-x)
- [收集 AI 产品反馈](https://apify.com/xquik/x-tweet-scraper/examples/collect-ai-product-feedback)
- [监测 X 上的品牌提及](https://apify.com/xquik/x-tweet-scraper/examples/monitor-brand-mentions-on-x)
- [将 Twitter 数据导出为 CSV](https://apify.com/xquik/x-tweet-scraper/examples/export-twitter-data-to-csv)
- [收集某条 OpenAI 帖子的回复](https://apify.com/xquik/x-tweet-scraper/examples/collect-replies-to-an-openai-post)
- [提取完整的 Twitter 帖子串](https://apify.com/xquik/x-tweet-scraper/examples/extract-complete-twitter-thread)
- [收集电动汽车相关对话](https://apify.com/xquik/x-tweet-scraper/examples/collect-electric-vehicle-conversations)

## 抓取帖子要花多少钱？

Xquik 的 X Tweet Scraper 在所有 Apify 套餐上都按每个已交付行 $0.00015 收费。Apify 另行收取你的平台使用费。Xquik 对每个已交付的数据行收费 1 次。`diagnostics` 输出中的诊断信息免费。

需要更大的数据量时，请[选择 Apify 套餐](https://apify.com/pricing?fpr=xquik)，获得更多预付用量。

- 你不需要订阅 Xquik。
- 你不用支付单独的启动费或查询费。URL & 单条帖子查询也不额外收费。
- 过滤&去重在计费前完成。你从不为被过滤或重复的行付费。
- 没有输入&输入无效的运行，会向免费的 `diagnostics` 输出写入 1 条说明下一步做法的记录。提前停止或跳过某个目标的运行也会这样做。自身过滤条件移除了所有行的运行同样如此，例如读取个人资料时设置的 `lang`。
- 读取了所有目标却没有得到任何行的运行不写入记录。它的状态会说明原因&需要修改什么。被你的搜索运算符排除的行也不写入记录，例如 `-is:retweet`。

运行遇到问题或规模较大时，还会写入 1 条 `run-report` 记录。其中的 `estimatedChargeUsd` 使用 Apify 的实时按事件计费价格。出现问题的运行总会写入 `run-report`，包括没有输入和输入无效时的退出。顺利完成的小型运行会跳过它&节省 Apify 用量。开启 `alwaysSaveRunRecords` 后，每次运行都会写入它。运行报告把 `realRows` 中的数据行与 `diagnosticRows` 中的诊断记录分开。

要限制单次运行的花费，请看[运行选项](#运行选项)。

## 基准测试

Xquik 的 X Tweet Scraper 在成本&速度上胜过其他 11 个帖子抓取 Actor。它的中位数行有 63 个字段，是其他 Actor 中位数的 2 倍。

- `xquik/x-tweet-scraper` 交付了 890 条有用帖子，每条有用帖子 $0.000175，每秒 39.2 条&每行 63 个字段。[查看运行](https://console.apify.com/view/runs/fflWVxHwYvtyHpAQX)
- `xquik/x-tweet-scraper` 交付了 883 条有用帖子，每条有用帖子 $0.000176，每秒 25.2 条&每行 63 个字段。[查看运行](https://console.apify.com/view/runs/EtSdBgkUcH4M1uicf)
- `xquik/x-tweet-scraper` 交付了 882 条有用帖子，每条有用帖子 $0.000177，每秒 25.7 条&每行 63 个字段。[查看运行](https://console.apify.com/view/runs/SK3ZWhPwzGJYoYQba)
- `xquik/x-tweet-scraper` 交付了 877 条有用帖子，每条有用帖子 $0.000178，每秒 26.9 条&每行 63 个字段。[查看运行](https://console.apify.com/view/runs/JRdbcigkBMCaFuH1W)
- `scrapesmith/twitter-x-scraper-tweets-profiles-replies` 交付了 813 条有用帖子，每条有用帖子 $0.000185，每秒 10.5 条&每行 36 个字段。[查看运行](https://console.apify.com/view/runs/mIT1zf0xccCsYWO1E)
- `scrapesmith/twitter-x-scraper-tweets-profiles-replies` 交付了 805 条有用帖子，每条有用帖子 $0.000187，每秒 10.6 条&每行 36 个字段。[查看运行](https://console.apify.com/view/runs/p1MUeElsamZUepTpm)
- `scrapesmith/twitter-x-scraper-tweets-profiles-replies` 交付了 805 条有用帖子，每条有用帖子 $0.000187，每秒 10.7 条&每行 36 个字段。[查看运行](https://console.apify.com/view/runs/pQlQa0GMm7BWTUUOB)
- `kaitoeasyapi/twitter-x-data-tweet-scraper-pay-per-result-cheapest` 交付了 880 条有用帖子，每条有用帖子 $0.000250，每秒 9.1 条&每行 46 个字段。[查看运行](https://console.apify.com/view/runs/3Fn8yvqncsWdcw1I2)
- `scraper_one/x-posts-search` 交付了 804 条有用帖子，每条有用帖子 $0.000314，每秒 3.3 条&每行 14 个字段。[查看运行](https://console.apify.com/view/runs/M9TgeCLLKZlNTOrj0)
- `danek/twitter-scraper` 交付了 807 条有用帖子，每条有用帖子 $0.000347，每秒 5.0 条&每行 27 个字段。[查看运行](https://console.apify.com/view/runs/kyeJqCeaARxQPGM5W)
- `tweetapi/twitter-x-search-scraper` 交付了 337 条有用帖子，每条有用帖子 $0.000374，每秒 2.6 条&每行 28 个字段。[查看运行](https://console.apify.com/view/runs/mxkP8EDAUVtCZdobb)
- `api-ninja/x-twitter-advanced-search` 交付了 837 条有用帖子，每条有用帖子 $0.000430，每秒 7.4 条&每行 28 个字段。[查看运行](https://console.apify.com/view/runs/XAWKinvZyPNjCwrib)
- `apidojo/twitter-scraper-lite` 交付了 251 条有用帖子，每条有用帖子 $0.000494，每秒 12.9 条&每行 54 个字段。[查看运行](https://console.apify.com/view/runs/1t4XwmbQNTtwMJ0Ta)
- `apidojo/tweet-scraper` 交付了 481 条有用帖子，每条有用帖子 $0.000832，每秒 7.8 条&每行 55 个字段。[查看运行](https://console.apify.com/view/runs/PydoBgS1YRblg29bB)
- `xtdata/twitter-x-scraper` 交付了 1,378 条有用帖子，每条有用帖子 $0.001168，每秒 11.9 条&每行 67 个字段。[查看运行](https://console.apify.com/view/runs/U91dRXEvKvqu41aop)
- `seemuapps/x-tweet-scraper` 交付了 805 条有用帖子，每条有用帖子 $0.001242，每秒 6.9 条&每行 24 个字段。[查看运行](https://console.apify.com/view/runs/FstursEw43TbcipYU)
- `maximedupre/twitter-scraper` 交付了 46 条有用帖子，每条有用帖子 $0.002846，每秒 0.3 条&每行 31 个字段。[查看运行](https://console.apify.com/view/runs/Hs8irhEcAfWcQNc4w)

每个 Actor 都运行了相同的搜索&过滤条件。其他 Actor 在 2026-09-27 运行。Xquik 的运行设置了 `outputVariant: "rich"` & 在 2026-09-29 运行。所有运行都使用 Bronze 等级。有用帖子指不重复的英文原创帖子，且喜欢数至少为 10。成本是客户为每条有用帖子支付的总费用。我们的成本包含客户支付的 Apify 用量。每行字段数是非空字段数的中位数，包括嵌套字段。1 个列表计为 1 个字段。打开某次运行，即可查看它的输入、日志&数据集。

## 空运行、部分完成&停止的运行

Xquik 的 X Tweet Scraper 免费说明空运行、部分完成&停止的运行。运行状态会说明运行停止的原因。它还会统计已计费的结果&已读取的目标。

### 空结果

为另一次运行付费前，先检查空结果。报告&最终诊断中的 `filtering` 对象会统计被你的过滤条件移除的行。请查看 `serverFilteredRows`、`actorFilteredRows` & `pagesWithUnknownServerFiltering`。被过滤的行从不产生结果费用。该 Actor 自身的过滤条件移除了行（`actorFilteredRows`）时，运行会写入 1 条带有这些计数的诊断。被你的搜索运算符排除的行（`serverFilteredRows`）、时间窗口之外的帖子&完全没有得到行的运行都不写入记录。运行状态会说明原因&需要修改什么，例如扩大搜索范围。

X 没有更多结果时，运行可能在达到你的上限前结束。这时它报告 `outcome: "complete"`，并附带 `completionReason: "source_exhausted"`。中断的运行会保留部分完成的结果状态&重试指引。

### 部分完成的运行

`failedSubtargets` 统计出错后停止的查询&个人资料目标。已交付的行留在数据集中&计入计费。出错从不代表目标不存在。这类运行使用 `completionReason: "partial_failure"`。

中断的运行还会写入 1 条免费的 `partial` 诊断。已交付的结果不受影响。诊断会报告 `availableResults`、`failedTargets`、`retryable` & `nextAction`。Actor 成功退出说明结果已交付。它不代表提取完整。

### 停止原因

状态文本会写明停止的每个原因。不存在的账号&停滞的搜索同时出现时，状态会写明两者。`stopCauses` 列出每个原因，并附上各自的 `message`、`retryable` & `nextAction`。原因包括 `target_not_found`、`target_suspended`、`target_protected`、`search_unavailable`、`likes_hidden`、`target_failed`、`pagination_safety_limit`、`reply_reach` & `deadline_reached`。只要任何原因可重试，整个运行就是 `retryable`。

### 不存在&不可用的目标

不存在或受保护的目标不算失败。X 在那里没有可读取的内容。运行会把其他所有目标读完。它报告 `outcome: "complete"`。它的完成原因取自已读取的目标，例如 `source_exhausted`。`failedSubtargets` 不计入这些目标。状态文本&免费的 `complete` 诊断会统计它们。没有其他行的运行会改为写入 `zero-output` 诊断。

X 无法执行的搜索算作失败。遇到这类搜索，X 会显示“Something went wrong”。运行会立即停止该搜索，不再重试。X 隐藏的喜欢也算作失败&立即停止。X 只向帖子作者显示谁喜欢了这条帖子。它只向账号本人显示该账号喜欢过的帖子。

所有失败都与不可用的目标有关时，诊断会设为 `retryable: false`。请检查目标 URL 或用户名&选择可用的公开账号。缩小 X 无法执行的搜索，或更改它的过滤条件。改为读取转帖者、回复或帖子，不要读取被隐藏的喜欢。其他失败会为未完成的目标保留重试指引。

诊断会在 `unavailableTargets` 中列出这些目标。每个条目包含与你输入一致的 `target`、`reason` & `nextAction`。原因是 `not_found`、`list_not_found`、`suspended`、`protected`、`search_unavailable` 或 `likes_hidden`。`list_not_found` 表示 X 没有找到该列表，它可能是私密列表。搜索条目还可能带有 `fix`，例如需要删除的运算符。这份清单最多保存 100 个条目。请从输入中移除这些目标。

### 安全限制&时间限制

`completionReason: "pagination_safety_limit"` 不是读取失败。运行保留了有效行。然后它结束了不再返回新结果的目标。运行会报告提取不完整。`failedSubtargets` 保持为 `0`。你只为已交付的行付费。

Apify 默认超时为 `0`，所以运行没有时间限制。该 Actor 会一直运行，直到达到你的上限或没有更多符合条件的数据。你仍然可以设置有限的 Apify 超时。这时 `completionReason: "deadline_reached"` 表示快到时限了。该 Actor 会保存数据行&报告，然后在时限前正常退出。每个已交付行你只付费 1 次。

## 输入

Input 标签页列出了所有选项。至少提供 `startUrls`、`twitterHandles`、`listIds`、`tweetIds`、`searchTerms` 或 `twitterContent` 中的 1 个。它们在文档中列出的别名也可以用。其他字段都是可选的。

以下任一输入都足以运行。

- 把帖子 URL 粘贴到 Start URLs。
- 粘贴个人资料 URL，或把用户名添加到 X handles。
- 用 `from:user since:YYYY-MM-DD until:YYYY-MM-DD` 作为搜索词，补抓账号的历史帖子。
- 把列表 URL 粘贴到 Start URLs。
- 做高级搜索时，把 `twitterContent` 与 `from:`、`since:`、`min_faves:` & `filter:media` 等过滤条件组合使用。

### 支持的常用搜索运算符

| 运算符                   | 示例                      | 用途                 |
| ------------------------ | ------------------------- | -------------------- |
| `from:`                  | `from:elonmusk`           | 只看该用户的帖子     |
| `to:`                    | `to:OpenAI`               | 只看回复该用户的帖子 |
| `@`                      | `@nasa`                   | 提及该用户的帖子     |
| `list:`                  | `list:123456`             | 列表成员发的帖子     |
| `lang:`                  | `lang:en`                 | 按语言过滤           |
| `since:` / `until:`      | `since:2026-01-01`        | 日期范围             |
| `min_faves:`             | `min_faves:100`           | 互动量门槛           |
| `min_retweets:`          | `min_retweets:50`         | 转帖数门槛           |
| `filter:media`           | `filter:media`            | X 媒体搜索运算符     |
| `filter:videos`          | `filter:videos`           | X 视频搜索运算符     |
| `filter:images`          | `filter:images`           | X 图片搜索运算符     |
| `filter:links`           | `filter:links`            | 只看带链接的帖子     |
| `filter:replies`         | `filter:replies`          | 只看回复帖子         |
| `filter:quote`           | `filter:quote`            | 只看引用帖子         |
| `filter:blue_verified`   | `filter:blue_verified`    | 只看 Premium 用户    |
| `-filter:replies`        | `-filter:replies`         | 不含回复帖子         |
| `-filter:nativeretweets` | `-filter:nativeretweets`  | 不含转帖             |
| `-filter:quote`          | `-filter:quote`           | 不含引用帖子         |
| `OR`                     | `(from:nasa OR from:esa)` | 匹配任一条件的帖子   |
| `#`                      | `#bitcoin lang:en`        | 带有该话题标签的帖子 |

X 不再支持搜索 `filter:vine`、`filter:consumer_video`、`filter:pro_video`、`filter:news` 或 `retweets_of:`。含有其中任何运算符的搜索会立即结束。免费诊断会写明修正方法。每个查询请控制在 512 个字符以内。X 最多只搜索这么长。

日期窗口包含下限&不包含上限。该 Actor 在添加每条帖子&为它计费前，会检查上下限。

完整的运算符列表见 Xquik 的 [Twitter advanced search operators](https://github.com/Xquik-dev/x-twitter-advanced-search)。

### 从其他帖子抓取 Actor 迁移

直接粘贴你现在用的输入。Xquik 的 X Tweet Scraper 能读取其他帖子抓取 Actor 使用的字段名。它会把这些字段映射到自己的字段。标准名称仍是文档中的默认写法。别名从不丢弃字段&从不改变你的费用。输入表单只列出标准字段，因此很简短。别名在 JSON、API、SDK、自动化&已保存的任务输入中都有效。

每行先列出你现在用的字段，再列出它们映射到的字段。

- `startUrls`、`urls`、`tweetUrls`、`postUrls`、`profileUrls`、`accountUrls` 映射到 `startUrls`。
- 单个字符串形式的 `profileUrl` 映射到 `startUrls`。
- `tweetIds`、`tweetIDs`、`tweets`、`postIds`、`lookupPostIds`、`tweet_ids`，或单个字符串形式的 `tweetId` 映射到 `tweetIds`。
- `twitterHandles`、`usernames`、`user_names`、`userNameList`、`handles`、`screenNames`、`profileTweets` 映射到 `twitterHandles`。
- 单个字符串形式的 `username`、`handle`、`screenName` 映射到 `twitterHandles`。
- 列表形式或每行 1 个搜索的 `searchTerms`、`searchQueries`、`queries`、`search` 映射到 `searchTerms`。
- `twitterContent`、`query`、`searchQuery` 映射到 `twitterContent`。
- `maxItems`、`maxResults`、`max_results`、`resultsLimit`、`count`、`resultsCount`、`numberOfTweets`、`maxPosts`、`max_posts`、`max_items`、`maxTweets`、`tweetsDesired`、`maxTotalTweets` 映射到 `maxItems`。
- `per_profile_limit` 映射到 `maxItemsPerTarget`。
- `sort` 映射到 `queryType`。
- 值为 `Top` & `Latest` 时，`search_type`、`searchType`、`query_type`、`search_sort` 不分大小写映射到 `queryType`。`Media`、`Photos` & `Videos` 会开启 `filter:media`、`filter:images` & `filter:videos`。
- `tweetLanguage`、`language`、`contentLanguage` 映射到 `lang`。
- `author`、`fromUser` 映射到 `from`。
- `inReplyTo`、`toUser` 映射到 `to`。
- `mentioning` 映射到 `@`。
- `start`、`startDate`、`timeSince` 映射到 `since`。
- `end`、`endDate`、`timeUntil` 映射到 `until`。
- 以秒为单位的 `timeSinceUnix`、`sinceTime`、`timeUntilUnix`、`untilTime` 映射到 `since_time`、`until_time`。
- `timeWithinTime`、`withinTime` 映射到 `within_time`。
- `timeWindowHours`、`timeWindow` 映射到 `within_time`，分别按小时&按天计算。
- `timeSinceId`、`sinceId`、`timeMaxId`、`maxId` 映射到 `since_id`、`max_id`。
- Google Search Scraper 的 `quickDateRange`，例如 `d7`、`w2`、`m1` 或 `y`，映射到 `since_time`，从运行开始时往回计算。
- `minimumFavorites`、`minLikes`、`min_likes`、`minFaves`、`engagementMinLikes`、`Minimum_likes` 映射到 `min_faves`。
- `minimumRetweets`、`minRetweets`、`engagementMinRetweets` 映射到 `min_retweets`。
- `minimumReplies`、`minReplies`、`engagementMinReplies`、`Minimum_replies` 映射到 `min_replies`。
- `engagementMaxLikes`、`maxLikes`、`engagementMaxRetweets`、`maxRetweets`、`engagementMaxReplies` 映射到 `engagement.maxLikes`、`engagement.maxRetweets`、`engagement.maxReplies`。
- `onlyImage`、`onlyImages`、`has_images` 映射到 `filter:images`。
- `onlyVideo`、`onlyVideos`、`has_videos` 映射到 `filter:videos`。
- `onlyWithMedia`、`mediaOnly` 映射到 `filter:media`。
- `onlyQuote`、`onlyQuotes` 映射到 `filter:quote`。
- `onlyTwitterBlue`、`usersBlueVerifiedOnly`、`blue_verified_only`、`onlyBlueVerified` 映射到 `filter:blue_verified`。
- `engagementHasEngagement`、`hasEngagement` 映射到 `filter:has_engagement`。
- `mediaHasLinks`、`has_links`、`requireLinks` 映射到 `filter:links`。
- `mediaHasMentions`、`has_mentions`、`requireMentions` 映射到 `filter:mentions`。
- `mediaHasHashtags`、`has_hashtags`、`requireHashtags` 映射到 `filter:hashtags`。
- `mediaNewsOnly`、`mediaSafeContentOnly` 映射到 `filter:news`、`filter:safe`。
- 只含 1 种类型的 `mediaTypes` 映射到该类型的 `filter:` 字段。
- `mediaSubtype` 映射到 `filter:media`、`filter:images` 或 `filter:videos`。
- `includeNativeRetweets`、`includeRetweets` 映射到 `include:nativeretweets`。
- `excludeReplies`、`excludeRetweets`、设为 false 的 `includeRetweets`、`tweetTypesExclude` 映射到 `tweetTypes.excludeReplies`、`tweetTypes.excludeRetweets` & `tweetTypes.excludeQuotes`。
- 只含 1 种类型的列表形式 `tweetTypes` 映射到 `tweetTypes.replies`、`tweetTypes.quotes` 或 `tweetTypes.nativeRetweets`。
- `tweetSubtype` 映射到 `tweetTypes.replies` 或 `tweetTypes.quotes`。`self_threads` 会添加运算符 `filter:self_threads`。
- `geotaggedNear`、`geoNear` 映射到 `near`。
- `withinRadius`、`geoWithinRadius`、`geoWithin` 映射到 `within`。
- `geoGeocode` 映射到 `geocode`。
- `tweetConversationId`、`tweetQuotedTweetId`、`tweetQuotedUserId` 映射到 `conversation_id`、`quoted_tweet_id`、`quoted_user_id`。
- `cardName`、`tweetPollTypes` 映射到 `card_name`。
- `search_query` 映射到 `twitterContent`。
- `profile_urls` 中的链接映射到 `startUrls`，用户名映射到 `twitterHandles`。
- `lookup_post_ids`，或单个字符串形式的 `id` 映射到 `tweetIds`。
- 写成 1 个逗号分隔列表的 `tweets` 映射到 `tweetIds`。

有些字段在这里没有对应的字段。每个这类字段都会把它代表的 X 搜索运算符加到本次运行的每次搜索中。运行日志会在开头列出它添加的运算符。

- `usersFromUsers`、`from_users`、`usersToUsers`、`to_users`、`usersListMembers` 会添加 `from:`、`to:` & `list:`。多个值按任一匹配运行，例如 `(from:a OR from:b)`。
- `usersMentionUsers`、`mentioning_users` 会添加 `@name`。
- `usersExcludeFromUsers` 会添加 `-from:`。
- `onlyVerifiedUsers`、`usersVerifiedOnly`、`verified_only` 会添加 `filter:verified`。
- `placeObjectId`、`geoPlaceId`、`placeId`、`place` 会添加 `place:`。
- `cardDomain` 会添加 `card_domain:`。
- `appsSources`、`appsExcludeSources` 会添加 `source:` & `-source:`。
- 各含 1 个值的 `contentKeywords`、`contentExactPhrases`、`contentHashtags`、`contentCashtags` 会添加该词、带引号的短语、`#tag` & `$tag`。
- `contentExcludeKeywords`、`contentExcludeHashtags`、`exclude_words`、`hashtags_exclude` 会添加 `-word` & `-#tag`。
- 使用 `all_words` & `exact_phrases` 时，每个词&短语都必须匹配。
- `any_words`、`hashtags_any` 会添加任一匹配的条件，例如 `(#a OR #b)`。
- `contentQuestionMarks` 会添加 `?`。
- `contentEmoticons` 为 `positive` 添加 `:)`，为 `negative` 添加 `:(`。
- `tweet_type` 会添加 `filter:replies`、`filter:retweets` & 它们的 `-filter:` 形式。

用文字命名的模式会映射到 `mode`。`Advanced Search` 映射到 `search`，`Get Tweet by ID` 映射到 `tweet`，`Get a Few Tweets` 映射到 `tweets`，`Get Replies` 映射到 `replies`，`Get Quotes` 映射到 `quotes`，`Get Retweeters` 映射到 `retweeters` & `Get Favoriters` 映射到 `favoriters`。

粘贴的输入会这样处理。

- 每种来源都会运行。同时包含 URL、用户名、搜索词、列表 ID & 帖子 ID 的输入会全部运行。`maxItems` 作用于整次运行。
- 与 `searchTerms` 一起出现的搜索查询，会作为多出的 1 个搜索词运行。
- 写成 `x.com/@name` 的个人资料 URL，按 `x.com/name` 读取。
- 同时设置别名&它的标准字段时，以标准字段的值为准。运行日志会写明被覆盖的别名。
- 运行日志会写明该 Actor 忽略的每个字段，例如 `customMapFunction`。该 Actor 从不悄悄丢弃字段。
- 行数上限必须是大于等于 1 的整数。`maxResults: 0` 会让运行在读取或计费前停止。
- `quickDateRange: "m1"` 在所有读取方式下都读取过去 1 个月。月&年按日历往回计算。没有 h、d、w、m 或 y 时，运行会在读取或计费前停止。
- 该 Actor 没有“页”这个单位。请把 `maxPages` 换成 `maxItems`。
- 该 Actor 没有 `userId` 或 `user_ids` 字段。请把用户 ID 填在用户名的位置。它在 `twitterHandles`、个人资料 URL & `from:` 后面都有效。
- `from`、`min_faves`、`since_time` & `filter:images` 等搜索运算符字段已经使用 X 的名称。它们不需要映射。
- 其他 Actor 没有标明“全部匹配”或“任一匹配”的列表，只含 1 个值时才能运行。这些列表是 `contentKeywords`、`contentExactPhrases`、`contentHashtags`、`contentCashtags`、`usersMentionUsers`、`mediaTypes` & `tweetTypes`。值更多时，运行会在读取或计费前停止。提示信息会说明如何把它们写成 1 个搜索词。
- 设为 `People` 或 `Lists` 的 `search_type`、设为 `followers` 的 `source_mode`、`engagementLevel` 预设 & `Get Similar Tweets` 模式，都会让运行在读取或计费前停止。提示信息会写明应使用的 Actor 或字段。
- 设为 `tweets` 或 `info` 的 `category` 不改变任何行为。属于其他 Actor 职责的值会让运行停止，例如 `followers`、`user_info` 或 `replies`。运行不读取&不收费。提示信息会写明该 Actor。

### Console & API 输入

Console 表单有以下控件。

- Mode、Output Variant、Field Style、Output Preset & Sort By 是经过校验的下拉菜单。
- Start URLs & Profile URLs 接受字符串或 `{ "url": "..." }` 对象。它们的 JSON 编辑器保留这 2 种 API 格式。
- 结构化过滤条件提供分组控件，所以你不需要写嵌套 JSON。
- 表单会隐藏已被过滤条件组覆盖的扁平运算符。JSON、API、SDK、自动化&已保存的任务输入仍然接受它们。
- Max Items & Max Items Per Target 接受大于等于 1 的整数。互动门槛接受大于等于 0 的整数。

新的集成请使用标准字段。上面迁移表中的别名仍然可用。`includeRaw` 是 `outputVariant: "raw"` 的别名。`compact` & `full` 等旧的 `outputVariant` 值仍可作为 Legacy 输出使用。表单把它们标为 Legacy 别名。

## 输出

每个帖子行都是 1 个 JSON 对象，包含 X 提供的元数据。数据集&运行报告的 schema 为每个字段给出标题、说明&示例。AI Agent 读取时不需要猜测字段的含义。

示例值仅作说明。你的运行会返回来自 X 的实时数据。

```json
{
  "id": "20",
  "text": "just setting up my twttr",
  "createdAt": "Tue Mar 21 20:50:14 +0000 2006",
  "retweetCount": 500,
  "replyCount": 120,
  "likeCount": 5000,
  "quoteCount": 80,
  "viewCount": 1200000,
  "bookmarkCount": 300,
  "lang": "en",
  "url": "https://x.com/jack/status/20",
  "author": {
    "id": "12",
    "username": "jack",
    "name": "jack",
    "followers": 6000000,
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
  "conversationId": "20"
}
```

以 JSON、CSV、Excel 或 HTML 格式导出数据集。

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

- 用点号表示对象内的字段，例如 `author.id`。大小写&下划线都没有影响。
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

## 运行选项

- 设置 Apify 的最高总费用来限制运行成本。`maxItems` 留空，即可在预算内拿到尽可能多的行。想要更少的帖子时，再设置 `maxItems`。
- 在 Apify API 中设置 `maxTotalChargeUsd`，或在 Console 中设置 Max cost per run。Apify 会把这个限额以 `ACTOR_MAX_TOTAL_CHARGE_USD` 传给该 Actor。该 Actor 再把它换算成最多可计费的行数。
- 传入 `tweetIds` 可同时查询多条帖子。粘贴个人资料 URL 可读取 1 个账号的帖子。
- 查询较多时，设置 `includeSearchTerms: true`，为每条结果标上对应的搜索词。
- 设置 `queryType: "Latest + Top"`，在 1 次运行中同时使用 X 的 2 种搜索模式。去重&结果上限同时作用于这 2 种模式。
- 如需每秒 1 次的检查&签名 webhook，请使用 Xquik 的账号监控或关键词监控。活跃的监控每秒检查 1 次。

### 始终使用最新构建

每次运行都选择 `latest`，获取所有已发布的修复。

如果不选择构建，Apify 会用默认的 `latest` 运行 Xquik 的 X Tweet Scraper。Console 中的运行&标准 API 示例都沿用这个默认值。

已保存的任务可以覆盖 Actor 的默认值。定时调度&任务集成会沿用这个选择。请把所有覆盖值都设为 `latest`。

Apify 不会把固定的构建编号重定向到 `latest`。请把固定编号换成 `latest`。只在临时回滚或复现某次运行时使用固定构建。

请阅读 Apify 的[构建标签](https://docs.apify.com/platform/actors/development/builds-and-runs/builds)、[运行选项](https://docs.apify.com/platform/actors/running/runs-and-builds)&[任务文档](https://docs.apify.com/platform/actors/running/tasks)。

## 相关 Xquik Actor

所有 Xquik Actor 都使用同一套提取引擎、先过滤后计费的规则&诊断功能。按你需要的数据选择对应的 Actor。

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

### 我需要 X API 密钥吗？

不需要。你不需要 X API 密钥、登录或凭据。

### 什么会限制运行？

你的结果上限 & Apify 支出上限会让运行停止。Apify 账号&平台限制仍然适用。

### 它有多快？

在[基准测试](#基准测试)中，Xquik 的 X Tweet Scraper 每秒交付 25.2 到 39.2 条有用帖子。运行时间取决于你的输入、结果数量 & X 的可用性。

### 搜索会返回每条匹配的帖子吗？

会，直到匹配结果用完或达到 `maxItems`。结果只包含与你的查询匹配的帖子。每条帖子你只付费 1 次。

### 支持哪些搜索运算符？

X 高级搜索支持作者、接收者、提及、日期、互动、媒体&位置。示例见[支持的常用搜索运算符](#支持的常用搜索运算符)。

### 可以用 Apify API 运行它吗？

可以。[API 标签页](https://apify.com/xquik/x-tweet-scraper/api) 提供 Python、JavaScript & cURL 示例。

### 可以定期自动抓取吗？

可以。用 Apify 内置的[定时调度](https://docs.apify.com/platform/schedules)，按 cron 运行 Xquik 的 X Tweet Scraper。

### 可以获得定制方案吗？

可以。在 [Issues 标签页](https://apify.com/xquik/x-tweet-scraper/issues) 中说明你的需求。Xquik 还提供仪表盘、REST API、MCP 服务器 & webhook。在 Xquik 的 [Apify 主页](https://apify.com/xquik) 上可以找到它的网站。

### 抓取 X 数据合法吗？

Xquik 的 X Tweet Scraper 请求的是公开的 X 字段。结果可能包含个人数据。请确认用途合法&遵守适用于你的隐私规定。不确定时，请咨询专业律师。

### 在哪里获取帮助？

在 [Issues 标签页](https://apify.com/xquik/x-tweet-scraper/issues) 提交 issue，并附上运行 ID。
