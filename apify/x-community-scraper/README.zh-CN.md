[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · **简体中文** · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer 将 Xquik MCP 连接到编程 Agent](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[观看 Framer 如何在 Claude Code、Codex、Cursor 等工具中使用 Xquik 抓取工具](https://youtu.be/4UOSpoOoC3Y?t=367)，从 6:07 开始。

Xquik 是全球最快、最便宜的 X（Twitter）抓取服务，X 数据也最完整。Xquik 的 X Community Scraper 收集社群信息、帖子、媒体、搜索结果、成员&版主，还能按关键词或话题查找社群。其他大多数 Apify Actor 在过滤或去重之前就开始收费。Xquik 只对已交付、不重复且符合过滤条件的结果收费。

从社群 URL 或 ID 收集 Twitter 社群的信息、帖子、媒体、关键词匹配结果、成员&版主。按关键词或话题查找社群，或列出 X 推荐的社群。你需支付**每个已交付行 $0.00015**，Apify 另行收取平台使用费。你不需要 X API 密钥或登录。

> Xquik 是独立的第三方服务，与 X Corp 无关联。
> “Twitter”和“X”是 X Corp 的商标。

## X Community Scraper 能做什么？

Xquik 的 X Community Scraper 通过 URL 或 ID 读取公开的 X（Twitter）社群。它返回每个社群的信息、帖子、媒体、关键词匹配结果、成员&版主。它还能按关键词或话题查找社群，并列出 X 推荐的社群。

### 使用场景

- 从细分社群的成员中建立潜在客户名单。
- 在用户社群中追踪产品反馈&功能需求。
- 在创始人群体中发现产品发布、招聘帖子&融资消息。
- 按规模、话题&活跃度比较社群。
- 在社群中发帖前，先阅读它的规则。
- 找出社群的版主&关注者最多的成员。
- 收集带图片或视频的帖子，用于创意研究。

## 为什么使用 X Community Scraper？

- **不用 ID 也能找到社群。** 按关键词或话题搜索，或列出 X 推荐的社群。每个匹配结果都附带完整记录。
- **完整的社群记录。** 信息行包含规则、加入问题、创建者、管理员&话题。
- **最新或热门帖子。** 按从新到旧收集帖子，或收集 X 排名最高的热门帖子。可加入媒体帖子，或按关键词搜索社群帖子。
- **成员&版主。** 导出两者及其 `communityRole`，或按名称查找成员。每行都包含个人资料公开的邮箱、电话&链接。
- **帖子&成员过滤。** 按日期、语言、媒体&互动数据保留帖子。按受众规模、账号年龄&认证状态保留成员。

### 完整结果

- 每次返回的结果都包含 X 所能提供的最完整数据。

### 准确的数据行

- 转帖包含完整的原帖正文。
- 行中的每个 ID 都精确无误。
- 提及、链接、话题标签&高亮与正文位置一致。
- 认证徽章与 `x.com` 上显示的一致。
- 行中只包含公开数据。
- 广告&推广条目绝不会进入你的数据行。

### 数据保持最新

- X 发布改动后，读取仍能正常进行。

### 速度

- 单个慢页面不会拖慢整个运行。
- 行一到达，读取就立即结束。
- 卡住的 Actor 调用会自动恢复。

### 公平计费

- 错误的输入不收费&会告诉你要改什么。
- Actor 只对已交付、不重复且符合过滤条件的行收费。
- 多个目标共有的个人资料只计费 1 次。
- 重启的运行绝不会重复收费。
- 运行始终不超出你的支出上限&仍会写入诊断信息。
- 小规模运行结束时会给出降低成本的建议。

### 可靠性

- 偶发错误不会让运行失败。
- 到达截止时间时，会返回已找到的行&诊断信息。
- Xquik 短暂中断不会让 Actor 失败。
- Actor 运行在重启后继续，且不会重复。
- 单个错误行不会让整批失败。
- 已停止的运行会保留它的行&报告。
- 无法启动的运行也会说明原因。
- 支持团队能准确看到某个请求或运行返回了什么。

### 为 Agent 设计

- Actor 接受为其他 Actor 编写的输入。
- 输出可直接用于表格，带扁平列&互动总数。
- 每次运行都会说明结束原因&是否需要重试。

### 丰富的数据

- 帖子行包含长帖正文、编辑记录、社群笔记、可见范围标签&回复权限。
- 行中包含发布来源应用、媒体数量&专业账号数据。
- 媒体附带变体、替代文本、尺寸&可用性原因。

### 质量检查

- X 显示的每个字段，要么已提供，要么是有意省略，要么已证实不存在。
- Xquik 会针对 X 实时测试每一种读取。

## X Community Scraper 能提取哪些数据？

社群行使用 `resultType: "community"`。主要字段如下。

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
| `banner`          | 横幅 URL、尺寸&主色            |
| `sourceTarget`    | 你输入的 URL、ID、关键词或话题 |

每种资源会添加各自类型的行。

| `resultType`         | 资源或输入               | 每行对应           |
| -------------------- | ------------------------ | ------------------ |
| `community`          | `info`、关键词、话题     | 社群               |
| `communityTweet`     | `tweets`、`search`       | 帖子               |
| `communityMedia`     | `media`                  | 带照片或视频的帖子 |
| `communityMember`    | `members`、`memberNames` | 成员               |
| `communityModerator` | `moderators`             | 版主               |
| `communityTopic`     | `listTopics`             | 话题               |

帖子行包含 `text`、`createdAt`、`likeCount`、`replyCount`、`retweetCount`、`viewCount`、`media` & `author` 个人资料。成员行&版主行包含个人资料字段，例如 `username`、`followers`、`verified` & `communityRole`。它们还包含 `email` & `contactInfo`，即每条个人资料公开的邮箱、电话&链接。

## 如何使用 X Community Scraper 抓取社群数据？

刚接触 Apify？先[创建免费账号](https://console.apify.com/sign-up?fpr=xquik)。免费套餐不需要信用卡&每月提供 $5 可用额度。按每行 $0.00015 计算，不算平台用量，$5 最多可支付 33,000 行。然后回到这里&点击 Try for free。

在 Apify Console 中按以下步骤操作。

1. 打开[任务示例](#任务示例)或 Input 标签页。
2. 把社群 URL 粘贴到 `startUrls`，或把 ID 粘贴到 `communityIds`。
3. 选择 `resources` & 添加过滤条件，例如 `sinceDate` 或 `minLikes`。
4. 设置 `maxItems`，然后点击 Start。
5. 以 JSON、CSV、Excel 或 HTML 格式导出数据集。

下面每个示例都是完整的输入。

### 获取社群信息&最新帖子

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["info", "tweets"],
  "maxItems": 200
}
```

`startUrls` 中的每个 URL 可以写成普通字符串，也可以写成 `{ "url": "..." }` 对象。

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

### 导出成员&版主

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["members", "moderators"],
  "minFollowers": 1000,
  "maxItems": 1000
}
```

成员过滤条件适用于成员行&版主行。被过滤的行从不进入数据集，所以你从不为它们付费。

### 按名称查找成员

```json
{
  "communityIds": ["1493446837214187523"],
  "memberNames": ["marckohlbrugge"],
  "maxItems": 100
}
```

与 X 的成员搜索一样，X 对每个名称最多检查 10 个匹配账号。找到的每个成员是 1 个 `communityMember` 行，并带有它的 `communityRole`。使用 `memberNames` 的运行不会读取其他资源，除非 `resources` 中列出了它们。

### 按关键词或话题查找社群

```json
{
  "searchTerms": ["artificial intelligence"],
  "topics": ["Technology"],
  "maxItems": 100
}
```

找到的每个社群都带有规则，以及创建者、管理员&成员的个人资料。把 `includeDetails` 设为 `false`，运行更快&只返回简短记录。开启 `includeSuggested` 可获取 X 推荐的社群，每次运行的结果可能不同。开启 `listTopics` 可获取每个话题&它的子话题。

## 任务示例

你可以从 50 个公开任务中选择。每个任务都有设了上限的输入&对应的数据集视图。运行前先编辑任务。

- [获取 X 社群概览](https://apify.com/xquik/x-community-scraper/examples/get-an-x-community-overview)
- [获取 X 社群详情&最新帖子](https://apify.com/xquik/x-community-scraper/examples/get-community-details-with-recent-posts)
- [查找 X 社群中的热门科技帖子](https://apify.com/xquik/x-community-scraper/examples/find-top-technology-posts-in-a-community)
- [导出 X 社群成员](https://apify.com/xquik/x-community-scraper/examples/export-x-community-members)
- [导出 X 社群的认证成员](https://apify.com/xquik/x-community-scraper/examples/export-verified-community-members)
- [列出 X 社群的版主](https://apify.com/xquik/x-community-scraper/examples/list-x-community-moderators)
- [按规模&话题比较开发者社群](https://apify.com/xquik/x-community-scraper/examples/compare-developer-communities-by-size)
- [发帖前阅读 X 社群规则](https://apify.com/xquik/x-community-scraper/examples/read-community-rules-before-you-post)
- [在创业社群中查找融资帖子](https://apify.com/xquik/x-community-scraper/examples/find-funding-posts-in-a-startup-community)
- [在软件工程社群中查找招聘帖子](https://apify.com/xquik/x-community-scraper/examples/find-hiring-posts-in-a-software-community)
- [查找拥有大量受众的创业社群成员](https://apify.com/xquik/x-community-scraper/examples/find-startup-community-members-with-big-audiences)
- [全面审查小型 X 社群](https://apify.com/xquik/x-community-scraper/examples/audit-a-small-community-end-to-end)

## 抓取 X 社群要花多少钱？

Xquik 的 X Community Scraper 在所有 Apify 套餐上都按每个已交付行 $0.00015 收费。Apify 另行收取你的平台使用费。Xquik 对每个已交付的数据行收费 1 次。`diagnostics` 输出中的诊断信息免费。

需要更大的数据量时，请[选择 Apify 套餐](https://apify.com/pricing?fpr=xquik)，获得更多预付用量。

- 你不需要订阅 Xquik。
- 你不用支付单独的启动费、社群费、资源费或查询费。
- 找到的每个社群计 1 行，无论是否带完整记录。
- 过滤&去重在计费前完成。你从不为被过滤或重复的行付费。
- Apify 的最高总费用设置会限制已交付行数。

运行遇到问题或规模较大时，还会写入 1 条 `run-report` 记录。顺利完成的小型运行会跳过它&节省 Apify 用量。开启 `alwaysSaveRunRecords` 后，每次运行都会写入它。

要限制单次运行的花费，请看[运行选项](#运行选项)。

## 空运行、部分完成&停止的运行

Xquik 的 X Community Scraper 免费说明空运行、部分完成&停止的运行。运行状态会说明运行停止的原因。它还会统计已计费的结果&已读取的目标。

### 空结果

空运行的状态会提示你检查目标&过滤条件。被过滤的行从不占用你的结果上限。读取了所有目标却没有得到任何行的运行不写入记录。它的状态会说明原因&需要修改什么。该 Actor 只返回 X 公开展示的社群。可用字段因社群而异。

### 部分完成的运行

提取中断时，会写入免费的 `partial` 诊断。已交付的行留在数据集中。重试前，先查看 `availableResults`、`failedTargets`、`retryable` & `nextAction`。Actor 成功退出说明结果已交付，不代表提取完整。

### 停止原因

运行状态会写明提前停止的每个原因。`stopCauses` 列出每个原因，并附上各自的 `message`、`retryable` & `nextAction`。原因包括 `target_not_found`、`target_failed`、`pagination_safety_limit` & `deadline_reached`。只有在其他原因让运行停止时，缺失的目标才会列入其中。只要任何原因可重试，整个运行就是 `retryable`。该 Actor 本身不设时间限制。

## 输入

Input 标签页列出了所有选项。提供社群 URL 或 ID、关键词、话题，或开启 `includeSuggested` 或 `listTopics`。其他字段都是可选的。

| 字段 | 作用 |
| --- | --- |
| `startUrls` | `x.com` 上的社群 URL |
| `communityIds` | 数字社群 ID |
| `resources` | `info`、`tweets`、`media`、`search`、`members`、`moderators` |
| `query` | `search` 资源使用的关键词 |
| `queryType` | 关键词搜索按 `Latest` 或 `Top` 排序 |
| `postsOrder` | 帖子按 `Latest` 或 `Top` 排序 |
| `memberNames` | 要在成员中查找的名称或用户名 |
| `searchTerms` | 用于查找社群的关键词 |
| `topics` | 话题名称或 ID，例如 `Technology` |
| `includeSuggested` | 添加 X 推荐加入的社群 |
| `listTopics` | 添加每个社群话题&它的子话题 |
| `includeDetails` | 为按关键词或话题找到的社群添加完整记录 |
| `maxItems` | 整个运行的已交付行数上限 |
| `maxItemsPerTarget` | 每种社群资源的行数上限 |
| `sinceDate`、`untilDate` | 只保留日期窗口内的帖子 |
| `language` | 只保留 1 个语言代码的帖子 |
| `mediaType` | 只保留带图片、视频、GIF、链接或不带媒体的帖子 |
| `minViews`、`minLikes` | 只保留查看数或喜欢数高于指定值的帖子 |
| `minReplies`、`minRetweets` | 只保留回复数或转帖数高于指定值的帖子 |
| `nativeRetweets` | 只保留原生转帖 |
| `verifiedOnly` | 只保留已认证的作者、成员或版主 |
| `minFollowers`、`maxFollowers` | 只保留受众规模在指定范围内的成员 |
| `minAccountAgeDays` | 只保留账号年龄不少于指定天数的成员 |
| `blueVerifiedOnly` | 只保留 X 标记为 Blue 认证的作者或成员 |
| `verifiedType` | 只保留属于 1 种认证类型的成员 |
| `minFollowing`、`maxFollowing` | 只保留正在关注数在指定范围内的成员 |
| `minStatuses`、`maxStatuses` | 只保留帖子数在指定范围内的成员 |
| `hasWebsite`、`hasLocation` | 只保留列出网站或位置的成员 |
| `hasEmail` | 只保留公开了邮箱的成员 |
| `businessEmailOnly` | 只保留邮箱不属于免费邮箱服务的成员 |
| `emailDomains` | 只保留邮箱属于这些域名的成员 |
| `bioContains` | 只保留简介包含其中 1 个词的成员 |
| `locationContains` | 只保留位置包含这段文本的成员 |
| `usernameContains` | 只保留用户名包含这段文本的成员 |
| `dedupeAcrossTargets` | 计费前去除跨社群重复的行 |

### 从其他社群 Actor 迁移

`ranking` & `sort` 这 2 个名称与 `postsOrder` 的作用相同。`Top` 或 `Relevance` 读取热门帖子。同时设置其中某个名称 & `postsOrder` 时，以 `postsOrder` 的值为准。运行日志会写明被覆盖的字段。

### 选择合适的输入

- 想快速了解社群时，保留默认的 `info` & `tweets` 资源。
- 要建立潜在客户名单，选择 `members`，并搭配 `minFollowers` & `verifiedOnly`。
- 要做产品研究，选择 `search`，并设置 `query`，例如 `bug` 或 `pricing`。
- 要做创意研究，选择 `media` & 设置 `mediaType`。
- 要发现社群，发送 `searchTerms` 或 `topics`，不需要提供 ID。

## 输出

每行都是 1 个 JSON 对象。每行都有 `sourceTarget`，指向输入的社群、关键词或话题。Xquik 的 X Community Scraper 保留原始字段&从不编造值。数据集 schema 为每个字段提供标题&说明。

示例使用样例值。实际结果反映实时数据。社群信息行如下所示。

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

## 运行选项

- 设置 Apify 的最高总费用来限制运行成本。把 `maxItems` 设得高一些，即可在预算内拿到尽可能多的行。
- 在 Apify API 中设置 `maxTotalChargeUsd`，或在 Console 中设置 Max cost per run。
- 把所有社群放进 1 次运行。每次运行都向 Apify 支付相同的启动成本。
- `maxItemsPerTarget` 限制每种社群资源的行数。
- `maxConcurrency` 设置同时运行的社群资源数量。默认值是最快且安全的设置。

每次运行都选择 `latest`，获取所有已发布的修复。已保存的任务&定时调度会保留各自的构建选择，所以请把它设为 `latest`。

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

不需要。Xquik 的 X Community Scraper 不需要 X API 密钥、登录或凭据。

### 如何找到社群的 ID？

在 X 上打开该社群。ID 就是 URL 中 `/i/communities/` 后面的数字。你也可以把完整 URL 粘贴到 `startUrls`。

### 可以把 X 社群成员导出为 CSV 或 Excel 吗？

可以。选择 `members` 资源，然后以 CSV、Excel、JSON 或 HTML 格式导出数据集。

### 不知道 ID 也能找到社群吗？

可以。在 `searchTerms` 中发送关键词，或在 `topics` 中发送话题。找到的每个社群是 1 行，并附带完整记录。

### 可以获取社群的热门帖子吗？

可以。把 `postsOrder` 设为 `Top`。添加 `minLikes` 或 `minViews`，只保留最受欢迎的帖子。

### 1 次运行可以抓取多少个社群？

你列出多少个，就能抓取多少个。`maxItems` & 你的 Apify 支出上限会限制行数。

### 它能读取私密社群吗？

不能。Xquik 的 X Community Scraper 只返回 X 公开展示的社群。

### 抓取 X 社群合法吗？

Xquik 的 X Community Scraper 请求的是公开的 X 字段。结果可能包含个人数据。请确认用途合法&遵守适用的隐私规定。不确定时，请咨询专业律师。

### 为什么我的运行没有返回结果？

先查看运行状态。空运行的状态会提示你检查目标&过滤条件。出现需要注意的情况时，会生成免费的 `diagnostics` 输出。其中的 `stopCauses` 为每个原因给出可以照做的 `nextAction`。运行会列出它无法读取的每个输入&说明修正方法。

### 可以使用 API、定时调度&集成吗？

可以。你可以从 50 个公开任务或 Xquik REST API 中选择。[API 标签页](https://apify.com/xquik/x-community-scraper/api) 提供 Python、JavaScript & cURL 示例。Apify [定时调度](https://docs.apify.com/platform/schedules) 可以按 cron 运行 Xquik 的 X Community Scraper。Agent 可以使用 [Apify MCP](https://docs.apify.com/platform/integrations/mcp)。除非需要旧构建，否则请使用 `latest`。

### 可以获得定制方案吗？

可以。在 [Issues 标签页](https://apify.com/xquik/x-community-scraper/issues) 中说明你的需求。Xquik 还提供仪表盘、REST API、MCP 服务器 & webhook。在 Xquik 的 [Apify 主页](https://apify.com/xquik) 上可以找到它的网站。

### 在哪里获取帮助？

在 [Issues 标签页](https://apify.com/xquik/x-community-scraper/issues) 提交 issue，并附上运行 ID。键值存储中的免费诊断信息会说明需要注意的运行。没有返回任何行的运行，会在状态中说明原因。
