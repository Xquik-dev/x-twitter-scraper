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

Xquik 是全球最快、最便宜的 X（Twitter）抓取服务，X 数据也最完整。Xquik 的 X Reply Scraper 收集回复、评论和完整对话。其他大多数 Apify Actor 在过滤或去重之前就开始收费。Xquik 只对**已交付、不重复且符合过滤条件的结果**收费。

在所有 Apify 套餐上，抓取 X（Twitter）回复的费用都是**每个已交付行 $0.00015**。粘贴帖子 URL、帖子 ID（即 Tweet ID）、个人资料 URL 或用户名即可。可以导出回复、对话、作者、互动数据、实体和媒体 URL。Apify 另行收取平台使用费。无需登录 X。过滤在写入数据集之前进行，所以你只为已交付的行付费。

> Xquik 是独立的第三方服务，与 X Corp 无关联。“Twitter”和“X”是 X Corp 的商标。

## 这个 Twitter 回复抓取工具能做什么？

Xquik 的 X Reply Scraper 收集公开回复和评论对话。它可以处理单条帖子、批量 URL 列表、帖子 ID 和用户的回复时间线。

它适合情感分析、客户反馈和社群研究。其他用途包括回复排名、发现潜在客户、审核内容和构建对话数据集。

### 回复收集方式

- 直接结果不完整时，自动模式会继续收集。
- `collectionStrategy` 为不同的回复任务提供 4 种模式。
- 批量输入支持帖子 URL、帖子 ID、个人资料和用户名。
- 过滤和去重都在计费前完成。
- 输出支持 4 种排序方式、3 种详细程度和 3 种字段风格。
- 每条回复都保留来源目标、父级 ID、根 ID 和层级深度。
- 续抓游标支持补抓历史数据和定时运行。
- 空运行会向 `diagnostics` 写入 1 条免费记录。
- 运行日志在 `fetchDurationMs`、`processingDurationMs`、`pushDurationMs`、`statusDurationMs`、`fullPageDurationMs` 和 `fullTargetDurationMs` 中显示每页和每个目标的耗时。
- Apify 重启运行后，已交付的回复和进度都会保留。

## 如何抓取 X 回复

1. 粘贴帖子 URL、帖子 ID、个人资料 URL 或用户名。
2. 设置 `maxItems`、`scope` 和任务所需的过滤条件。
3. 运行 Xquik 的 X Reply Scraper，然后打开数据集。

预填表单指向一个已认证账号的公开对话，最多返回 25 行完整的扁平数据。自动模式默认搜索整个对话。去重和来源标注保持开启。

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

## 抓取 X 回复要花多少钱？

Xquik 的 X Reply Scraper 在所有 Apify 套餐上都按每个已交付行 $0.00015 收费。Apify 另行收取平台使用费。

Xquik 对每个已交付的数据行收费一次。被你的过滤条件或去重移除的回复不收费。`diagnostics` 中的诊断记录免费。没有启动费、URL 费、查询费、翻页费或过滤费。

## 公开任务示例

你可以从 50 个公开任务中选择。每个任务都有设了上限的输入和对应的数据集视图。运行前可以修改任何任务。

从这些示例开始：

- [为 AI Agent 收集回复](https://apify.com/xquik/x-reply-scraper/examples/collect-replies-for-ai-agents)
- [构建 X 回复 RAG 数据集](https://apify.com/xquik/x-reply-scraper/examples/build-x-reply-rag-dataset)
- [归档回复供 LLM 处理](https://apify.com/xquik/x-reply-scraper/examples/archive-replies-for-llm-processing)
- [提取回复中的潜在客户到 CRM](https://apify.com/xquik/x-reply-scraper/examples/extract-reply-leads-for-crm)

## 面向 AI Agent 与 MCP

可以通过 Apify MCP、API 客户端、x402 或 Skyfire 运行 Xquik 的 X Reply Scraper。

- 有限权限保护无关的 Apify 账号数据。
- 按事件计费，费用与已交付结果挂钩。
- Standby 模式保持关闭，以兼容 Agent 支付。
- 类型化 schema 描述回复、运行报告和续抓游标。
- 默认值设有上限，防止 Agent 意外发起无上限的运行。
- 稳定的 `camelCase` 和 `snake_case` 模式让工具串联更简单。
- 诊断行包含状态、消息和恢复操作。
- 运行报告包含确切结果、停止原因和费用估算。

## 回复目标与输入别名

请使用以下主要字段。

| 输入 | 用途 |
| --- | --- |
| `startUrls` | 混合的 X 帖子和个人资料 URL |
| `tweetIds` | 数字帖子 ID |
| `usernames` | 个人资料的回复时间线 |
| `startCursor` | 从保存的游标继续某个目标 |

输入表单只显示标准控件。兼容别名在 JSON、API、SDK、自动化和已保存的任务输入中仍然有效。同时使用标准字段和别名字段时，按现有的解析顺序处理。

这些别名接受其他抓取工具常用的字段名：

- URL 别名：`urls`、`tweetUrls`、`postUrls`、`profileUrls`
- ID 别名：`conversationIds`、`postIds`、`ids`、`tweetId`、`id`
- 用户名别名：`twitterHandles`、`screenname`
- 全局上限别名：`maxResults`、`max_results`、`resultsLimit`、`maxReplies`
- 单目标上限别名：`maxRepliesPerTweet`、`maxCommentsPerPost`
- 搜索别名：`useSearch`
- 嵌套回复别名：`includeNestedReplies`、`includeRepliesOfReplies`
- 原帖别名：`includeOriginalTweet`
- 输出别名：`outputVariant`、`includeRaw`

格式错误或不受支持的目标不会让 Actor 失败。没有剩余的有效目标时，运行会写入一条诊断，并附上修正方法。

## 覆盖策略

### 自动完整收集

大多数任务使用 `collectionStrategy: "auto"`。它会在你设定的范围内收集能获取到的每条回复。范围、深度、排序和作者控制先于你的上限生效。非根目标下的回复也会包含在内。X 隐藏了部分帖子串时，状态会说明 X 隐藏了多少条回复。其他 `collectionStrategy` 值不会切换到别的模式。

诊断中的覆盖率数值不能证明 X 没有更多回复。上限、数据缺失或错误都可能让运行不完整。

### 直接回复

使用 `collectionStrategy: "replies"`，按 X 自己的顺序获取直接回复。它支持保存的游标。

### 对话搜索

使用 `collectionStrategy: "conversationSearch"`，覆盖更广的对话。

### 完整帖子串上下文

使用 `collectionStrategy: "thread"` 读取源对话的上下文。设置 `includeOriginalPost: true`，把根帖子保留为深度 0。

## 直接回复与嵌套回复控制

用 `scope` 选择结果形式。

| 值 | 结果 |
| --- | --- |
| `direct` | 保留深度为 1 的回复 |
| `nested` | 保留深度为 2 及以上的回复的回复 |
| `all` | 保留所有可用的直接回复和嵌套回复 |

用 `maxDepth` 限制嵌套层级。X 省略某个对话上级时，父级链接可能缺失。该 Actor 会保留能得到的最准确深度。

## 排序

`sort` 可以使用以下值：

- `relevance` 保持 X 的原始顺序
- `latest` 最新的排在前面
- `oldest` 最早的排在前面
- `likes` 喜欢数最高的排在前面

个人资料目标先收集你要求数量的、已过滤且不重复的结果，再排序。帖子目标保持全局排序。

`sortBy` 和 `queryType` 兼容别名仍然有效。

## 回复过滤条件

所有支持的过滤条件都在写入数据集之前生效。

### 文本与实体过滤条件

| 输入 | 行为 |
| --- | --- |
| `exactPhrase` | 必须包含一个完全一致的短语 |
| `anyWords` | 至少包含 1 个词或短语 |
| `excludeWords` | 移除包含这些词或短语的回复 |
| `keywordInclude` | 与 `anyWords` 合并的别名 |
| `keywordExclude` | 与 `excludeWords` 合并的别名 |
| `hashtags` | 至少包含 1 个话题标签 |
| `cashtags` | 至少包含 1 个 cashtag |
| `mentioning` | 必须包含一个 @提及 |

### 作者与语言过滤条件

| 输入 | 行为 |
| --- | --- |
| `fromUser` | 只保留某一位回复作者 |
| `toUser` | 只保留回复给某个用户名的回复 |
| `lang` | 只保留一种 X 语言代码 |
| `verifiedOnly` | 要求有任意公开认证标识 |
| `blueVerifiedOnly` | 要求 X Premium 认证 |
| `excludeOriginalAuthor` | 移除源帖子作者的自我回复 |

### 互动过滤条件

使用 `minLikes`、`minReplies`、`minRetweets`、`minQuotes`、`minViews` 和 `minBookmarks`。`minFaves` 别名对应 `minLikes`。

### 媒体与时间过滤条件

- 设置 `hasMediaOnly: true`，只保留带公开媒体的回复。
- 把 `mediaType` 设为 `any`、`image`、`video`、`gif` 或 `link`。
- 设置 `since` 作为起始时间戳，包含该时间点。
- 设置 `until` 作为结束时间戳，不包含该时间点。
- `sinceTime` 和 `untilTime` 可作为兼容别名使用。

## 输出字段

数据集和运行报告的 schema 描述了每个返回字段。基础字段还附有示例，方便 Agent 和自动生成的集成使用。

每个完整回复行可以包含以下核心字段：

| 字段 | 说明 |
| --- | --- |
| `id` | 回复 ID |
| `text` | 回复正文 |
| `fullText` | 长回复的完整正文 |
| `createdAt` | 回复时间戳 |
| `lang` | X 语言代码 |
| `url` | 回复的直接 URL |
| `conversationId` | X 对话 ID |
| `inReplyToId` | 直接父级 ID |
| `inReplyToUserId` | 父级作者 ID |
| `inReplyToUsername` | 父级用户名 |
| `likeCount` | 喜欢数 |
| `replyCount` | 下级回复数 |
| `retweetCount` | 转帖数 |
| `quoteCount` | 引用数 |
| `viewCount` | 查看次数 |
| `bookmarkCount` | 书签数 |
| `author` | 可获取的公开作者元数据 |
| `media` | 图片、视频、GIF 及其变体 |
| `entities` | 话题标签、cashtag、提及、URL 和视频时间戳 |
| `quoted_tweet` | 被引用的帖子（如有） |
| `retweeted_tweet` | 被转帖的帖子（如有） |

完整行还会保留可获取的源元数据：

- 帖子类型字段：`type`、`isReply`、`isQuoteStatus`、`isNoteTweet`、`isLimitedReply` 和 `isTranslatable`。
- 文本细节：`displayTextRange`、`noteTweet`、`article` 和 `card`。
- 标签和提示：`contentDisclosure`、`communityNote`、`possiblySensitive`、`tombstone` 和 `exclusiveContent`。
- 对话细节：`conversationControl`、`limitedActions` 和 `unmentionedUserIds`。
- 上下文字段：`source`、`place`、`communityId`、`reactionContext` 和 `postCta`。
- 编辑和可用性字段：`edit`、`previousCounts`、`viewState` 和 `authorUnavailable`。

扁平行保留对话上级链、来源详情、结果类型和 schema 版本。具体字段见 OpenAPI。

### 作者元数据

嵌套的作者对象遵循公开个人资料的约定，涵盖身份、计数、认证、可用性、职业信息和个人简介。

扁平输出会加上 `authorId`、`authorUsername`、`authorName`、`authorFollowers`、`authorFollowing` 和 `authorVerified`。

### 媒体元数据

媒体信息包括可用性、尺寸、标签和视频变体，还有 `watchNowUrl` 和 `visitSiteUrl` 操作。

扁平输出会加上 `mediaUrls`。

### 输出示例

一行精简后的回复数据如下：

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

示例值仅作说明，实际运行返回实时数据。

## 输出模式

### 精简

设置 `outputMode: "compact"`，得到更窄的数据集。它保留正文、对话、作者、互动和媒体字段。

### 完整

设置 `outputMode: "full"`，保留所有支持的公开字段。

### 原始

设置 `outputMode: "raw"`，在 `raw` 下加入经过清理的源数据快照。

### 嵌套或扁平

默认的 `flat` 布局保留嵌套对象，并为表格加上作者字段。设置 `outputPreset: "nested"` 可以省略这些额外的扁平字段。

### 字段命名

把 `fieldStyle` 设为 `source`、`camelCase` 或 `snake_case`。该 Actor 不会覆盖名称冲突的源字段。

## 限制、计费与续抓

`maxItems` 限制整次运行交付的行数。`maxItemsPerTarget` 限制每条帖子或每个个人资料的行数。

1 次运行可以读取多个目标。上限、去重、来源标注和计费在所有目标之间都保持准确。

该 Actor 在输出和计费前移除重复行。设置 `dedupeAcrossTargets: false`，可保留来自不同目标的重复行。

因翻页限制结束的运行，可以从默认键值存储读取 `next-cursors`。通过 `startCursor` 传入一个游标，即可继续该目标。

### Apify 超时

Apify 默认超时为 `0`，所以运行没有时间限制。该 Actor 会一直运行，直到达到上限或没有更多符合条件的数据。你仍然可以设置有限的 Apify 超时。这时 `completionReason: "deadline_reached"` 表示快到时限了。该 Actor 会保存回复和报告，然后在时限前正常退出。已交付的回复只计费一次。未完成的目标之后可以继续。

## 提取不完整

中断的运行会写入一条免费的 `partial` 诊断。已获取的结果不受影响。重试前，先查看 `availableResults`、`failedTargets`、`retryable` 和 `nextAction`。Actor 成功退出只说明结果已交付，不代表提取完整。

状态会写明提前停止的每个原因。`stopCauses` 列出每个原因，并附上各自的 `message`、`retryable` 和 `nextAction`。原因包括 `target_not_found`、`target_failed`、`page_limit`、`reply_reach` 和 `deadline_reached`。`reply_reach` 表示 X 只提供了帖子串的一部分。

帖子或账号不存在不算失败。状态会写明这一点，例如“X has no match for 1 target.”。只有在其他原因让运行停止时，它才会列入 `stopCauses`。只要有一个原因可重试，整个运行就是 `retryable`。

## 诊断

成功的数据行使用 `resultType: "reply"`。没有数据就退出的运行，会向 `diagnostics` 写入恰好 1 条免费记录。记录会说明如何解决问题。

运行状态会说明运行为何停止，并统计已计费的结果和已读取的目标。出现问题的运行总会写入 `run-report`，包括没有输入和输入无效时的退出。大型运行也会写入。顺利完成的小型运行会跳过它，节省 Apify 用量。开启 `alwaysSaveRunRecords` 后，每次运行都会写入。

报告 schema 记录完成情况、计费、失败和已保存的游标。其中的 `version` 字段给出已发布 Actor 源码的确切版本。

`status` 字段使用以下值：

- `no-input`
- `invalid-input`
- `replies-incomplete`
- `zero-output`
- `aborted`
- `unexpected-error`

## API 示例

每个示例都会运行 Xquik 的 X Reply Scraper 并返回数据集条目。把 `<APIFY_API_TOKEN>` 替换为你的 Apify API token。

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
actor=xquik~x-reply-scraper
curl "https://api.apify.com/v2/acts/$actor/run-sync-get-dataset-items" \
  -X POST \
  -H "Authorization: Bearer <APIFY_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"tweetIds":["2082577277246972300"],"maxItems":100}'
```

## 自动化与集成

可以通过 Apify 定时调度、webhook 或 API 客户端运行 Xquik 的 X Reply Scraper。它能连接 Make、Zapier、n8n、Google Sheets 或云存储。Agent 可以通过 [Apify MCP 服务器](https://docs.apify.com/platform/integrations/mcp) 调用它。

符合条件的 Agent 工作流还可以使用 [x402](https://docs.apify.com/integrations/x402) 或 [Skyfire](https://docs.apify.com/integrations/skyfire)。

Xquik 还提供 47 个仪表盘工具、129 个 REST 操作、签名 webhook 和一个 MCP 服务器。

### 始终使用最新构建

每次运行都选择 `latest`，获取所有已发布的修复。

如果不指定构建，Apify 会使用该 Actor 的默认构建 `latest`。Console 中的运行和标准 API 示例都沿用这个默认值。

已保存的任务可能会覆盖 Actor 的默认值。定时调度和任务集成会沿用任务的选择。请把所有覆盖值都设为 `latest`。

Apify 不会把固定的构建编号重定向到 `latest`。请把固定编号换成 `latest`。只在临时回滚时使用固定构建。

## 相关 Xquik Actor

所有 Xquik Actor 都使用同一套提取引擎、先过滤后计费的规则和诊断功能。按你需要的数据选择对应的 Actor。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper)：从搜索、个人资料时间线、列表和帖子 ID 抓取帖子，提供 50 多个过滤条件和扁平导出。适合只要帖子数据、不做分析的场景。每行 $0.00015 起。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper)：从用户名、ID 或 URL 抓取个人资料，以及这些账号的帖子、回复、媒体和关注者。适合从账号而不是搜索入手的场景。每行 $0.00015 起。
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

## 常见问题

### 我需要 X API 密钥或登录吗？

不需要。你不需要 X API 密钥、登录或任何凭据。Xquik 的 X Reply Scraper 从不索要你的 X 密码、Cookie 或 token。

### 抓取 X 回复合法吗？

Xquik 的 X Reply Scraper 收集公开回复，不会绕过受保护的账号。只收集公开数据。遵守适用的法律和平台规则。

回复数据集可能包含个人数据。请选择合法的用途，尽量少保留数据，保护好导出文件。在法律要求时，响应删除和访问请求。不确定时，请咨询专业律师。

### 为什么运行返回的回复比帖子显示的少？

X 隐藏了部分帖子串时，状态会说明 X 隐藏了多少条回复。`stopCauses` 中的 `reply_reach` 表示 X 只提供了帖子串的一部分。过滤条件、去重、`scope`、`maxDepth` 和你设置的上限也会减少数量。

### 可以使用 API、定时调度和集成吗？

可以。[API 标签页](https://apify.com/xquik/x-reply-scraper/api) 提供 Python、JavaScript 和 cURL 示例。用 Apify [定时调度](https://docs.apify.com/platform/schedules) 可以按 cron 运行 Xquik 的 X Reply Scraper。它还能连接 Make、Zapier、n8n 和 Google Sheets。

### 在哪里获取帮助？

在 Actor 页面提交 issue，或带上运行 ID 联系 [support@xquik.com](mailto:support@xquik.com)。

### 可以获得定制方案吗？

可以。访问 [xquik.com](https://xquik.com) 或阅读 [API 文档](https://docs.xquik.com/introduction)。Xquik 提供仪表盘、REST API、MCP 服务器和 webhook。
