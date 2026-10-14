[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · **简体中文** · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer 将 Xquik MCP 连接到编程 Agent](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[观看 Framer 如何在 Claude Code、Codex、Cursor 等工具中使用 Xquik 抓取工具](https://youtu.be/4UOSpoOoC3Y?t=367)，从 6:07 开始。

Xquik 是全球最快、最便宜的 X（Twitter）抓取服务，X 数据也最完整。Xquik 的 X Reply Scraper 收集回复、评论&完整对话。其他大多数 Apify Actor 在过滤或去重之前就开始收费。Xquik 只对**已交付、不重复且符合过滤条件的结果**收费。

在所有 Apify 套餐上，以**每个已交付行 $0.00015** 的价格抓取 Twitter 回复&评论，&无需 X 账号即可阅读。粘贴帖子 URL、帖子 ID、个人资料 URL 或用户名即可。可以导出回复、对话、作者、互动数据、实体&媒体 URL。Apify 另行收取你的平台使用费。你不需要登录 X。过滤在写入数据集之前进行，所以你只为已交付的行付费。

> Xquik 是独立的第三方服务，与 X Corp 无关联。
> “Twitter”和“X”是 X Corp 的商标。

## X Reply Scraper 能做什么？

Xquik 的 X Reply Scraper 收集公开回复&评论对话。它可以处理单条帖子、批量 URL 列表、帖子 ID & 用户的回复时间线。

### 主要功能

- 直接结果不完整时，自动模式会继续收集。
- `collectionStrategy` 设置该 Actor 收集回复的方式。
- 批量输入支持帖子 URL、帖子 ID、个人资料&用户名。
- 过滤&去重都在计费前完成。
- 输出支持 4 种排序方式、3 种详细程度&3 种字段风格。
- 每条回复都保留来源目标、父级 ID、根 ID & 层级深度。
- 续抓游标支持补抓历史数据&定时运行。
- 需要关注的运行会向 `diagnostics` 写入 1 条免费记录。读取了所有目标&没有找到回复的运行不写入记录。它的状态会说明原因。
- 运行日志在 `fetchDurationMs`、`processingDurationMs`、`pushDurationMs`、`statusDurationMs`、`fullPageDurationMs` & `fullTargetDurationMs` 中显示每页&每个目标的耗时。
- Apify 重启运行时，已交付的回复&进度都会保留。

### 使用场景

- 衡量品牌&产品帖子下的情感&客户反馈。
- 为走红帖子下喜欢数最多的回复&评论排名。
- 在公开回复中找到提出问题或说出需求的潜在客户。
- 审查回复，处理内容审核、垃圾信息&滥用问题。
- 重建完整对话，用于研究 & AI 训练数据集。
- 长期追踪某个账号如何回复它的客户。

### X Reply Scraper 能提取哪些数据？

数据集&运行报告的 schema 描述了每个返回字段。文本、数字&布尔字段还附有示例，供 Agent & 自动生成的集成使用。

每个完整回复行可以包含以下核心字段。

| 字段                | 说明                                      |
| ------------------- | ----------------------------------------- |
| `id`                | 回复 ID                                   |
| `text`              | 回复正文                                  |
| `fullText`          | 长回复的完整正文                          |
| `createdAt`         | 回复时间戳                                |
| `lang`              | X 语言代码                                |
| `url`               | 回复的直接 URL                            |
| `conversationId`    | X 对话 ID                                 |
| `inReplyToId`       | 直接父级 ID                               |
| `inReplyToUserId`   | 父级作者 ID                               |
| `inReplyToUsername` | 父级用户名                                |
| `likeCount`         | 喜欢数                                    |
| `replyCount`        | 下级回复数                                |
| `retweetCount`      | 转帖数                                    |
| `quoteCount`        | 引用数                                    |
| `viewCount`         | 查看次数                                  |
| `bookmarkCount`     | 书签数                                    |
| `author`            | 可获取的公开作者元数据                    |
| `media`             | 图片、视频、GIF 和变体                    |
| `entities`          | 话题标签、cashtag、提及、URL & 视频时间戳 |
| `quoted_tweet`      | 可获取时提供的被引用帖子                  |
| `retweeted_tweet`   | 可获取时提供的被转帖帖子                  |

完整行还会保留可获取的源元数据。

- 帖子类型字段有 `type`、`isReply`、`isQuoteStatus`、`isNoteTweet`、`isLimitedReply` & `isTranslatable`。
- 文本细节有 `displayTextRange`、`noteTweet`、`article`、`card` & `cashtagAttachments`。
- 标签&提示有 `contentDisclosure`、`communityNote`、`possiblySensitive`、`tombstone` & `exclusiveContent`。
- 对话细节有 `conversationControl`、`limitedActions`、`subscriberBadge` & `unmentionedUserIds`。
- 上下文字段有 `source`、`place`、`communityId`、`communityName`、`reactionContext` & `postCta`。
- 编辑&可用性字段有 `edit`、`previousCounts`、`viewState` & `authorUnavailable`。

扁平行保留对话上级链、来源详情、结果类型 & schema 版本。具体字段见 OpenAPI。

## 如何用 X Reply Scraper 抓取回复？

刚接触 Apify？先[创建免费账号](https://console.apify.com/sign-up?fpr=xquik)。免费套餐不需要信用卡&每月提供 $5 可用额度。按每行 $0.00015 计算，不算平台用量，$5 最多可支付 33,000 行。然后回到这里&点击 Try for free。

1. 粘贴帖子 URL、帖子 ID、个人资料 URL 或用户名。
2. 设置 `maxItems`、`scope` & 任务所需的过滤条件。
3. 运行 Xquik 的 X Reply Scraper & 打开数据集。

预填表单的目标是经过验证的公开对话。它最多返回 1,000 行完整的扁平数据。自动模式默认搜索整个对话。去重&来源标注保持开启。

### 从帖子 URL 抓取回复

```json
{
  "startUrls": [{ "url": "https://x.com/OpenAI/status/2082577277246972300" }],
  "maxItems": 100
}
```

### 从帖子 ID 抓取回复

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

### 计费前过滤回复

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

### 导出适合 CSV 的扁平行

```json
{
  "tweetIds": ["2082577277246972300"],
  "outputMode": "full",
  "outputPreset": "flat",
  "fieldStyle": "camelCase",
  "maxItems": 100
}
```

## 任务示例

你可以从 50 个公开任务中选择。每个任务都有设了上限的输入&对应的数据集视图。运行前可以修改任何任务。

- [抓取 X 帖子回复 & Twitter 评论](https://apify.com/xquik/x-reply-scraper/examples/scrape-post-replies)
- [批量抓取 Twitter 回复](https://apify.com/xquik/x-reply-scraper/examples/scrape-bulk-post-replies)
- [重建 Twitter 回复对话](https://apify.com/xquik/x-reply-scraper/examples/rebuild-full-conversation)
- [按喜欢数为 Twitter 回复排名](https://apify.com/xquik/x-reply-scraper/examples/rank-most-liked-replies)
- [抓取最新的帖子回复](https://apify.com/xquik/x-reply-scraper/examples/collect-latest-replies)
- [移除 Twitter 回复中的垃圾信息](https://apify.com/xquik/x-reply-scraper/examples/exclude-spam-keywords)
- [抓取英文 Twitter 回复](https://apify.com/xquik/x-reply-scraper/examples/collect-english-replies)
- [抓取已认证账号的 Twitter 回复](https://apify.com/xquik/x-reply-scraper/examples/collect-verified-replies)
- [抓取带媒体的 Twitter 回复](https://apify.com/xquik/x-reply-scraper/examples/collect-media-replies)
- [抓取用户的 Twitter 回复时间线](https://apify.com/xquik/x-reply-scraper/examples/scrape-profile-replies)
- [为 AI Agent 收集 Twitter 回复](https://apify.com/xquik/x-reply-scraper/examples/collect-replies-for-ai-agents)
- [构建 X 回复 RAG 数据集](https://apify.com/xquik/x-reply-scraper/examples/build-x-reply-rag-dataset)
- [归档 Twitter 回复供 LLM 使用](https://apify.com/xquik/x-reply-scraper/examples/archive-replies-for-llm-processing)
- [把 X 回复中的潜在客户提取到 CRM](https://apify.com/xquik/x-reply-scraper/examples/extract-reply-leads-for-crm)

## 抓取 X 回复要花多少钱？

Xquik 的 X Reply Scraper 在所有 Apify 套餐上都按每个已交付行 $0.00015 收费。Apify 另行收取平台使用费。

需要更大的数据量时，请[选择 Apify 套餐](https://apify.com/pricing?fpr=xquik)，获得更多预付用量。

Xquik 对每个已交付的数据行收费 1 次。被你的过滤条件或去重移除的回复不收费。`diagnostics` 中的诊断记录免费。不收取启动费、URL 费、查询费、翻页费或过滤费。

## 空运行、部分完成&停止的运行

Xquik 的 X Reply Scraper 会免费说明空运行、部分完成&停止的运行。运行状态会说明运行停止的原因。它还会统计已计费的结果&已读取的目标。读取了所有目标&没有找到回复的运行不写入记录。它的状态会说明原因&需要修改的地方。

### 提取不完整

中断的运行会写入免费的 `partial` 诊断。已获取的结果不受影响。重试前，先查看 `availableResults`、`failedTargets`、`retryable` & `nextAction`。Actor 成功退出只说明结果已交付，不代表提取完整。

状态会写明提前停止的每个原因。`stopCauses` 列出每个原因，并附上各自的 `message`、`retryable` & `nextAction`。原因包括 `target_not_found`、`target_failed`、`page_limit`、`reply_reach` & `deadline_reached`。`reply_reach` 表示 X 只提供了帖子串的一部分。

帖子或账号不存在不算失败。状态会写明这种情况，例如“X has no match for 1 target.”这条消息。只有在其他原因让运行停止时，它才会列入 `stopCauses`。只要任何原因可重试，整个运行就是 `retryable`。

### 诊断

成功的数据行使用 `resultType: "reply"`。需要关注的运行会向 `diagnostics` 写入恰好 1 条免费记录。这类情况包括输入无效、目标被跳过或提前停止。记录会说明如何解决问题。读取了所有目标&没有找到回复的运行不写入记录。它的状态会说明原因。

运行状态会说明运行停止的原因。它还会统计已计费的结果&已读取的目标。出现问题的运行总会写入 `run-report`，包括没有输入和输入无效时的退出。大型运行也会写入。顺利完成的小型运行会跳过它&节省 Apify 用量。开启 `alwaysSaveRunRecords` 后，每次运行都会写入。

报告 schema 记录完成情况、计费、失败&已保存的游标。它的 `version` 字段给出已发布 Actor 源码的确切版本。

`status` 字段使用以下值。

- `no-input`
- `invalid-input`
- `replies-incomplete`
- `zero-output`
- `aborted`
- `unexpected-error`

## 输入

Input 标签页列出了所有选项。至少提供 1 个帖子 URL、帖子 ID、个人资料 URL 或用户名。其他字段都是可选的。

### 回复目标&输入别名

请使用以下主要字段。

| 输入          | 用途                        |
| ------------- | --------------------------- |
| `startUrls`   | 混合的 X 帖子和个人资料 URL |
| `tweetIds`    | 数字帖子 ID                 |
| `usernames`   | 个人资料的回复时间线        |
| `startCursor` | 从已保存的游标继续某个目标  |

输入表单只显示标准控件。兼容别名在 JSON、API、SDK、自动化&已保存的任务输入中仍然有效。同时使用标准字段&别名字段时，按它们现有的解析顺序处理。

这些别名接受其他抓取工具常用的字段名。

- URL 别名有 `urls`、`tweetUrls`、`postUrls`、`profileUrls` & 作为单个字符串的 `twitterUrl`。
- ID 别名有 `conversationIds`、`postIds`、`ids`、`tweetId`、`id`。
- 用户名别名有 `twitterHandles`、`screenname`。
- 全局上限别名有 `maxResults`、`max_results`、`resultsLimit`、`maxReplies`。
- 单目标上限别名有 `maxRepliesPerTweet`、`maxCommentsPerPost`、`resultsPerCategory`。
- 搜索别名是 `useSearch`。
- 嵌套回复别名有 `includeNestedReplies`、`includeRepliesOfReplies`。
- 深度别名是 `depth`，取值为 `1`、`2` 或 `3`，对应 `maxDepth`。`full` 表示不设上限。
- 范围别名是 `onlyDirectReplies`，对应 `scope: "direct"`。
- 原帖别名有 `includeOriginalTweet`、`includeSourceTweet`。使用 `includeSourceTweet` 时，`resultsPerCategory` 限制回复数&原帖另占 1 行。
- 作者别名是 `excludeOpSelfReplies`，对应 `excludeOriginalAuthor`。
- 排序别名有 `sortBy` & `queryType`，对应 `sort`。`top`、`newest` & `mostLiked` 分别读取为 `relevance`、`latest` & `likes`。
- 输出别名有 `outputVariant`、`includeRaw`。

`category` 设为 `replies` 时不改变任何行为。属于其他 Actor 职责的类别会让运行停止，例如 `retweets` 或 `info`。这时运行不读取&不收取任何费用。提示信息会写明应使用的 Actor。同时设置其中某个别名&它的标准字段时，以标准字段的值为准。运行日志会写明被忽略的别名。

格式错误或不受支持的目标不会让 Actor 失败。没有剩余的有效目标时，运行会写入附带修正方法的诊断。

### 覆盖策略

选择该 Actor 收集回复的方式。自动模式适合大多数任务。

#### 自动完整收集

大多数任务使用 `collectionStrategy: "auto"`。它会在你设定的范围内收集能获取到的每条回复。范围、深度、排序&作者控制先于你的上限生效。它也包含非根目标下的回复。X 隐藏了部分帖子串时，状态会说明 X 隐藏了多少条回复。其他 `collectionStrategy` 值从不切换模式。

诊断中的覆盖率数值不能证明 X 没有更多回复。上限、数据缺失或错误都可能让运行不完整。

#### 直接回复

使用 `collectionStrategy: "replies"`，按 X 自己的顺序获取直接回复。它支持已保存的游标。

#### 对话搜索

使用 `collectionStrategy: "conversationSearch"`，覆盖更广的对话。

#### 完整帖子串上下文

使用 `collectionStrategy: "thread"` 读取源对话的上下文。设置 `includeOriginalPost: true`，把根帖子保留为深度 0。

#### 被隐藏的回复

默认的 `auto` 策略会加入帖子作者隐藏的回复。每条都是带有 `resultType: "hiddenReply"` 的 1 行，按普通行价格计费&计入 `maxItems`。只有当帖子统计的回复数多于 X 显示的回复时，运行才会读取它们。所以没有被隐藏回复的帖子不会产生额外费用。设置 `includeHiddenReplies: false` 可以排除它们。

使用 `collectionStrategy: "hiddenReplies"`，只获取被隐藏的回复。X 按从早到晚的顺序列出它们，并附上对它们的回复。没有被隐藏回复的帖子不返回任何行。

### 直接回复&嵌套回复控制

用 `scope` 选择结果形式。

| 值       | 结果                               |
| -------- | ---------------------------------- |
| `direct` | 保留深度为 1 的回复                |
| `nested` | 保留深度为 2 及以上的回复的回复    |
| `all`    | 保留所有可获取的直接回复和嵌套回复 |

用 `maxDepth` 限制嵌套层级。X 省略某个对话上级时，父级链接可能缺失。该 Actor 会保留能得到的最准确深度。

### 排序

`sort` 使用以下值。

- `relevance` 保持 X 的原始顺序
- `latest` 把最新的排在前面
- `oldest` 把最早的排在前面
- `likes` 把喜欢数最高的排在前面

X 搜索会少计部分较早回复的喜欢数，所以 `likes` 运行可能漏掉这些回复。

个人资料目标会先收集你要求数量的不重复且已过滤的结果，再排序。帖子目标保持全局排序。

`sortBy` & `queryType` 兼容别名仍然有效。

### 回复过滤条件

所有支持的过滤条件都在写入数据集之前生效。

#### 文本&实体过滤条件

| 输入             | 行为                         |
| ---------------- | ---------------------------- |
| `exactPhrase`    | 必须包含指定的精确短语       |
| `anyWords`       | 至少包含 1 个词或短语        |
| `excludeWords`   | 移除包含这些词或短语的回复   |
| `keywordInclude` | 与 `anyWords` 合并的别名     |
| `keywordExclude` | 与 `excludeWords` 合并的别名 |
| `hashtags`       | 至少包含 1 个话题标签        |
| `cashtags`       | 至少包含 1 个 cashtag        |
| `mentioning`     | 必须包含 @提及               |

#### 作者&语言过滤条件

| 输入                    | 行为                         |
| ----------------------- | ---------------------------- |
| `fromUser`              | 只保留指定回复作者的回复     |
| `toUser`                | 只保留回复给指定用户名的回复 |
| `lang`                  | 只保留指定 X 语言代码的回复  |
| `verifiedOnly`          | 要求有任意公开认证标识       |
| `blueVerifiedOnly`      | 要求 X Premium 认证          |
| `excludeOriginalAuthor` | 移除源帖子作者的自我回复     |

#### 互动过滤条件

使用 `minLikes`、`minReplies`、`minRetweets`、`minQuotes`、`minViews` & `minBookmarks`。`minFaves` 别名对应 `minLikes`。

#### 媒体&时间过滤条件

- 设置 `hasMediaOnly: true`，只保留带公开媒体的回复。
- 把 `mediaType` 设为 `any`、`image`、`video`、`gif` 或 `link`。
- 把 `mediaType` 设为 `none`，只保留不含媒体或链接的纯文字回复。
- 设置 `since` 作为起始时间戳，包含该时间点。
- 设置 `until` 作为结束时间戳，不包含该时间点。
- 把 `sinceTime` & `untilTime` 用作兼容别名。

## 输出

每个回复行都是 JSON 对象。数据集&运行报告的 schema 描述了每个字段，所以 AI Agent 无需猜测就能读取数据行。以 JSON、CSV、Excel 或 HTML 格式导出数据集。

### 作者元数据

嵌套的作者对象遵循公开个人资料的约定。它涵盖身份、计数、认证、可用性、职业信息&个人简介。

扁平输出会加上 `authorId`、`authorUsername`、`authorName`、`authorFollowers`、`authorFollowing` & `authorVerified`。

### 媒体元数据

媒体信息涵盖可用性、尺寸、标签&视频变体。它还有 `watchNowUrl` & `visitSiteUrl` 操作。

扁平输出会加上 `mediaUrls`。

### 输出示例

精简后的回复行如下所示。

```json
{
  "resultType": "reply",
  "id": "1881423000000000000",
  "url": "https://x.com/example/status/1881423000000000000",
  "text": "Thanks for sharing this update.",
  "createdAt": "2026-08-09T12:00:00.000Z",
  "lang": "en",
  "conversationId": "1881422000000000000",
  "rootTweetId": "1881422000000000000",
  "parentReplyId": "1881422000000000000",
  "depth": 1,
  "isDirectReply": true,
  "likeCount": 42,
  "replyCount": 3,
  "retweetCount": 5,
  "quoteCount": 2,
  "viewCount": 1000,
  "bookmarkCount": 7,
  "authorUsername": "example",
  "authorName": "Example User",
  "authorFollowers": 1000,
  "authorVerified": false,
  "mediaUrls": ["https://pbs.twimg.com/media/example.jpg"],
  "sourceTweetId": "1881422000000000000",
  "sourceTarget": "1881422000000000000"
}
```

示例值仅作说明。实际运行返回实时数据。

### 输出模式

选择每个数据集行的宽度。

#### 精简

设置 `outputMode: "compact"`，得到更窄的数据集。它保留正文、对话、作者、互动&媒体字段。

#### 完整

设置 `outputMode: "full"`，保留所有支持的公开字段。

#### 丰富

设置 `outputMode: "rich"`，让每行包含最多的数据。丰富行保留完整模式的每一列&在末尾加上 `hasCommunityNotes`、`quotedTweetPermalink`、`unavailableAuthorId` & 媒体的 `sourceUser`。

#### 原始

设置 `outputMode: "raw"`，在 `raw` 下加入经过清理的源数据快照。

#### 嵌套或扁平

默认的 `flat` 布局保留嵌套对象&为表格加上作者字段。设置 `outputPreset: "nested"` 可以省略这些额外的扁平字段。

#### 字段命名

把 `fieldStyle` 设为 `source`、`camelCase` 或 `snake_case`。该 Actor 会避免覆盖名称冲突的源字段。

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

### 限制、计费&续抓

`maxItems` 限制整次运行交付的行数。`maxItemsPerTarget` 限制每条帖子或每个个人资料的行数。

1 次运行可以读取多个目标。上限、去重、来源标注&计费在所有目标之间都保持准确。

该 Actor 在输出&计费前移除重复行。设置 `dedupeAcrossTargets: false`，可保留来自不同目标的重复行。

运行因翻页上限结束后，从默认键值存储读取 `next-cursors`。通过 `startCursor` 传入 1 个游标，即可继续该目标。

#### Apify 超时

Apify 默认超时为 `0`，所以运行没有时间限制。该 Actor 会一直运行，直到达到上限或没有更多符合条件的数据。你仍然可以设置有限的 Apify 超时。这时 `completionReason: "deadline_reached"` 表示快到时限了。该 Actor 会保存回复&报告，然后在时限前正常退出。已交付的回复只计费 1 次。未完成的目标之后可以继续。

### API 示例

每个示例都会运行 Xquik 的 X Reply Scraper & 返回数据集条目。把 `<APIFY_API_TOKEN>` 替换为你的 Apify API token。

#### JavaScript

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

#### Python

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

#### cURL

```bash
actor=xquik~x-reply-scraper
curl "https://api.apify.com/v2/acts/$actor/run-sync-get-dataset-items" \
  -X POST \
  -H "Authorization: Bearer <APIFY_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"tweetIds":["2082577277246972300"],"maxItems":100}'
```

### 自动化&集成

通过 Apify 定时调度、webhook 或 API 客户端运行 Xquik 的 X Reply Scraper。把它连接到 Make、Zapier、n8n、Google Sheets 或云存储。Agent 可以通过 [Apify MCP 服务器](https://docs.apify.com/platform/integrations/mcp) 调用它。

符合条件的 Agent 工作流还可以使用 [x402](https://docs.apify.com/integrations/x402) 或 [Skyfire](https://docs.apify.com/integrations/skyfire)。

Xquik 还提供 53 个仪表盘工具、REST API、签名 webhook & MCP 服务器。

### 为 AI Agent & MCP 做好准备

通过 Apify MCP、API 客户端、x402 或 Skyfire 运行 Xquik 的 X Reply Scraper。

- 有限权限保护无关的 Apify 账号数据。
- 按事件计费让费用与已交付的结果挂钩。
- Standby 模式保持关闭，以兼容 Agent 支付。
- 类型化 schema 描述回复、运行报告&续抓游标。
- 有上限的默认值防止 Agent 意外发起无上限的运行。
- 稳定的 `camelCase` & `snake_case` 模式让工具串联更简单。
- 诊断行包含状态、消息&恢复操作。
- 运行报告包含确切结果、停止原因&费用估算。

### 始终使用最新构建

每次运行都选择 `latest`，获取所有已发布的修复。

如果不指定构建，Apify 会使用该 Actor 的默认构建 `latest`。Console 中的运行&标准 API 示例都沿用这个默认值。

已保存的任务可能会覆盖 Actor 的默认值。定时调度&任务集成会沿用这个选择。请把每个覆盖值都设为 `latest`。

Apify 不会把确切的构建编号重定向到 `latest`。请把固定的编号换成 `latest`。只在临时回滚时使用确切构建。

## 相关 Xquik Actor

所有 Xquik Actor 都使用同一套提取引擎、先过滤后计费的规则&诊断功能。按你需要的数据选择对应的 Actor。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper) 从搜索、个人资料时间线、列表&帖子 ID 抓取帖子，提供 50 多个过滤条件&扁平导出。适合需要帖子数据但不做分析的场景。每行 $0.00015 起。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper) 从用户名、ID 或 URL 抓取个人资料，以及这些账号的帖子、回复、媒体&关注者。适合从账号而不是搜索入手的场景。每行 $0.00015 起。
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

## 常见问题

先解答常见问题，再说明在哪里获取帮助。

### 如何抓取帖子下的评论？

把帖子 URL 粘贴到 `startUrls` & 点击 Start。X 把评论称为回复，所以每条评论就是 1 个回复行。

### 可以同时抓取多条帖子的回复吗？

可以。在 1 次运行中粘贴多个帖子 URL 或帖子 ID。每条回复都会在 `sourceTarget` 中保留来源帖子。

### 包含嵌套回复吗？

包含。默认的 `scope` 会收集直接回复&嵌套回复。把 `scope` 设为 `direct`，只获取对帖子本身的回复。`maxDepth` 限制运行读取的深度。

### 能获取作者隐藏的回复吗？

能。默认的 `auto` 策略会把它们作为 `hiddenReply` 行加入。设置 `includeHiddenReplies: false` 可以跳过它们。

### 可以按喜欢数或日期给回复排序吗？

可以。设置 `sort`，可以按喜欢数为回复排名，也可以把最新或最早的回复排在前面。

### 可以把回复导出为 CSV 或 Excel 吗？

可以。以 CSV、Excel、JSON 或 HTML 格式导出数据集。扁平输出每行 1 条回复，作者字段就在旁边。

### 可以抓取某个用户的回复，而不是某条帖子的回复吗？

可以。粘贴个人资料 URL 或用户名。运行会读取该用户的回复时间线。

### 我需要 X API 密钥或登录吗？

不需要。你不需要 X API 密钥、登录或任何凭据。Xquik 的 X Reply Scraper 从不索要你的 X 密码、Cookie 或 token。

### 抓取 X 回复合法吗？

Xquik 的 X Reply Scraper 收集公开回复&不会绕过受保护的账号。只收集公开数据。遵守适用的法律&平台规则。

回复数据集可能包含个人数据。请选择合法的用途。尽量少保留数据。保护好导出文件。在法律要求时，响应删除&访问请求。不确定时，请咨询专业律师。

### 为什么运行返回的回复比帖子显示的少？

X 隐藏了部分帖子串时，状态会说明 X 隐藏了多少条回复。`stopCauses` 中的 `reply_reach` 表示 X 只提供了帖子串的一部分。过滤条件、去重、`scope`、`maxDepth` & 你设置的上限也会减少数量。

### 可以使用 API、定时调度&集成吗？

可以。[API 标签页](https://apify.com/xquik/x-reply-scraper/api) 提供 Python、JavaScript & cURL 示例。用 Apify [定时调度](https://docs.apify.com/platform/schedules) 按 cron 运行 Xquik 的 X Reply Scraper。它还能连接 Make、Zapier、n8n & Google Sheets。

### 在哪里获取帮助？

在 [Issues 标签页](https://apify.com/xquik/x-reply-scraper/issues) 提交 issue，并附上运行 ID。

### 可以获得定制方案吗？

可以。在 [Issues 标签页](https://apify.com/xquik/x-reply-scraper/issues) 中说明你的需求。Xquik 还提供仪表盘、REST API、MCP 服务器 & webhook。在 Xquik 的 [Apify 主页](https://apify.com/xquik) 上可以找到它的网站。
