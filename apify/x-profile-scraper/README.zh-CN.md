[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · **简体中文** · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer 将 Xquik MCP 连接到编程 Agent](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[观看 Framer 如何在 Claude Code、Codex、Cursor 等工具中使用 Xquik 抓取工具](https://youtu.be/4UOSpoOoC3Y?t=367)，从 6:07 开始。

Xquik 是全球最快、最便宜的 X（Twitter）抓取服务，X 数据也最完整。Xquik 的 X Profile Scraper 可以为任意用户名收集个人资料、帖子、回复、媒体&关注者。其他大多数 Apify Actor 在过滤或去重之前就开始收费。Xquik 只对已交付、不重复且符合过滤条件的结果收费。

批量查找 Twitter 账号&无需 X 账号即可阅读个人资料。用用户名、ID 或 URL 抓取 X 个人资料、帖子、回复、媒体&关注者。费用为**每个已交付行 $0.00015** & Apify 另行收取平台使用费。你不需要 X API 密钥或登录。

> Xquik 是独立的第三方服务，与 X Corp 无关联。
> “Twitter”和“X”是 X Corp 的商标。

## X Profile Scraper 能做什么？

Xquik 的 X Profile Scraper 根据用户名、数字用户 ID 或个人资料 URL 返回公开的 X（Twitter）个人资料。每个个人资料都可以附带它的帖子、回复、媒体、亮点、关注者、正在关注的账号&已认证关注者。它还能翻译简介&检查谁正在直播。

### 主要功能

- 在 1 次运行中，用用户名、ID 或 URL 读取多个个人资料。
- 把帖子、回复、媒体、亮点、关注者、正在关注的账号或已认证关注者添加为单独的行。
- 用 `translateBioTo` 按语言代码翻译每条简介。
- 用 `checkLiveNow` 检查每个个人资料当前是否正在直播。
- 按日期、语言、媒体&互动数据过滤帖子。
- 按受众规模、账号年龄&认证状态过滤个人资料。
- 过滤&去重都在计费前完成。
- Apify 重启运行时，已交付的行&进度都会保留。

### 使用场景

- 用简介、网站、位置&受众规模丰富潜在客户名单。
- 按关注者、帖子&认证状态比较竞争对手账号。
- 按受众、账号年龄&互动数据评估创作者。
- 存档某个账号的帖子、媒体&亮点。
- 通过关注者&正在关注的账号，梳理某个账号的关系网络。
- 留意创作者&品牌何时开始直播。
- 用你自己的语言阅读其他市场的简介。

### X Profile Scraper 能提取哪些数据？

个人资料行使用 `resultType: "profile"`。主要字段如下。

| 字段                     | 说明                             |
| ------------------------ | -------------------------------- |
| `id`                     | 数字用户 ID                      |
| `username`               | 不带 `@` 的用户名                |
| `name`                   | 显示名称                         |
| `description`            | 简介文本                         |
| `url`                    | 个人资料行中的网站               |
| `location`               | 账号主人填写的位置               |
| `email`                  | 个人资料公开的第 1 个邮箱        |
| `contactInfo`            | 个人资料公开的邮箱、电话&链接    |
| `followers`              | 关注者数                         |
| `following`              | 正在关注数                       |
| `statusesCount`          | 帖子数                           |
| `mediaCount`             | 媒体帖子数                       |
| `favouritesCount`        | 该账号给出的喜欢数               |
| `listedCount`            | 包含该账号的公开列表数           |
| `createdAt`              | 账号创建时间                     |
| `verified`               | X 是否报告该账号已认证           |
| `isBlueVerified`         | 账号是否有 X Blue 认证           |
| `verifiedType`           | 认证类别，例如 `Government`      |
| `profilePicture`         | 48 px 的头像图片 URL             |
| `profilePictureOriginal` | 同一张图片的原尺寸版本，可供下载 |
| `coverPicture`           | 横幅图片 URL                     |
| `pinnedTweetIds`         | 置顶帖子 ID                      |
| `professional`           | 专业账号类别&类型                |
| `accountBasedIn`         | X 尽力提供的国家或地区标签       |
| `connectedVia`           | 账号首次连接 X 的方式            |
| `usernameChanges`        | 用户名更改的次数&上次更改的时间  |
| `birthdate`              | 账号公开的生日部分               |
| `subscribersCount`       | 订阅者数，X 提供时才有           |
| `tipJar`                 | 公开的打赏链接                   |
| `protected`              | 账号是否保护其帖子               |
| `unavailable`            | 账号是否不可用                   |
| `sourceTarget`           | 你输入的用户名、ID 或 URL        |

数据集 schema 记录了其他所有字段，例如 `identityVerification`、`isAutomated`、`automatedBy`、`withheldInCountries` & `verificationReason`。

可选行沿用 Xquik REST 的响应结构。

| `resultType`              | 开启选项                   | 每行对应         |
| ------------------------- | -------------------------- | ---------------- |
| `profileTweet`            | `includeTweets`            | 帖子             |
| `profileReply`            | `includeReplies`           | 帖子或回复       |
| `profileMedia`            | `includeMedia`             | 媒体帖子         |
| `profileHighlight`        | `includeHighlights`        | 亮点帖子         |
| `profileFollower`         | `includeFollowers`         | 关注者           |
| `profileFollowing`        | `includeFollowing`         | 正在关注的账号   |
| `profileVerifiedFollower` | `includeVerifiedFollowers` | 已认证关注者     |
| `profileBioTranslation`   | `translateBioTo`           | 翻译后的简介     |
| `profileLive`             | `checkLiveNow`             | 已检查的个人资料 |

行中从不包含仅对查看者可见的状态，例如你是否关注或屏蔽了某个账号。

## 如何使用 X Profile Scraper 抓取个人资料数据？

刚接触 Apify？先[创建免费账号](https://console.apify.com/sign-up?fpr=xquik)。免费套餐不需要信用卡&每月提供 $5 可用额度。按每行 $0.00015 计算，不算平台用量，$5 最多可支付 33,000 行。然后回到这里&点击 Try for free。

在 Apify Console 中按以下步骤操作。

1. 打开[任务示例](#任务示例)或 Input 标签页。
2. 把用户名添加到 `twitterHandles`，把 URL 添加到 `startUrls`，或把 ID 添加到 `userIds`。
3. 开启你需要的资源，例如 `includeTweets`。
4. 设置 `maxItems` & 任意过滤条件，然后点击 Start。
5. 以 JSON、CSV、Excel 或 HTML 格式导出数据集。

下面每个示例都是完整的输入。

### 抓取多个个人资料

```json
{ "twitterHandles": ["nasa", "OpenAI", "apify"], "maxItems": 100 }
```

每个用户名返回 1 个个人资料行。用户名带不带 `@` 都可以。

### 粘贴个人资料 URL 或 ID

`startUrls` 中的每个 URL 可以写成普通字符串，也可以写成 `{ "url": "..." }` 对象。`userIds` 接受数字 X 用户 ID。

```json
{
  "startUrls": ["https://x.com/nasa", { "url": "https://x.com/OpenAI" }],
  "userIds": ["11348282"],
  "maxItems": 100
}
```

重复的用户名只读取 1 次。

### 添加帖子、回复&媒体

```json
{
  "twitterHandles": ["nasa"],
  "includeTweets": true,
  "includeMedia": true,
  "sinceDate": "2026-01-01",
  "maxItems": 500
}
```

`includeTweets` 对应个人资料的“帖子”标签页。`includeReplies` 对应它的“回复”标签页。`includeMedia` 对应它的“媒体”标签页。`includeHighlights` 按 X 的顺序添加它的“亮点”标签页中的帖子。没有亮点的个人资料不添加任何行。

### 只保留热门帖子

```json
{
  "twitterHandles": ["nasa"],
  "includeTweets": true,
  "minLikes": 1000,
  "mediaType": "videos",
  "maxItems": 200
}
```

帖子过滤条件作用于可选的帖子行。被过滤掉的行永远不会进入数据集，所以你从不为它们付费。

### 导出关注者&正在关注的账号

```json
{
  "twitterHandles": ["apify"],
  "includeFollowers": true,
  "minFollowers": 1000,
  "verifiedOnly": true,
  "maxItems": 1000
}
```

`includeFollowers`、`includeFollowing` & `includeVerifiedFollowers` 为每个账号添加 1 个个人资料行。个人资料过滤条件同时作用于这些行&主个人资料。

### 翻译简介

```json
{ "twitterHandles": ["nasa", "SpaceX"], "translateBioTo": "es" }
```

每条翻译是 1 个 `profileBioTranslation` 行，包含 `text`、`language` & `sourceLanguage`。没有简介的个人资料不添加行&不收费。

### 检查谁正在直播

```json
{ "twitterHandles": ["nasa", "SpaceX"], "checkLiveNow": true }
```

每次检查是 1 个 `profileLive` 行，包含 `live`、`userId`、`userName` & `broadcast`。`broadcast` 保存该个人资料最近的直播，无论正在直播还是已结束。没有直播时为 null。不存在的个人资料不添加行。

## 任务示例

你可以从 50 个公开任务中选择。每个任务都有设了上限的输入&对应的数据集视图。运行前可以修改任务。

- [获取 1 个 X 账号的个人资料卡片](https://apify.com/xquik/x-profile-scraper/examples/get-an-x-profile-card)
- [比较竞争品牌的个人资料](https://apify.com/xquik/x-profile-scraper/examples/compare-competitor-brand-profiles)
- [把数字用户 ID 解析为个人资料](https://apify.com/xquik/x-profile-scraper/examples/resolve-numeric-user-ids-to-profiles)
- [收集 1 个账号的近期帖子](https://apify.com/xquik/x-profile-scraper/examples/collect-recent-posts-from-an-account)
- [找出某个账号喜欢数最多的帖子](https://apify.com/xquik/x-profile-scraper/examples/find-an-accounts-most-liked-posts)
- [收集某个账号发布的视频](https://apify.com/xquik/x-profile-scraper/examples/collect-videos-from-an-account)
- [存档某个账号在 1 个日历年内的帖子](https://apify.com/xquik/x-profile-scraper/examples/archive-one-year-of-posts)
- [导出某个账号的关注者](https://apify.com/xquik/x-profile-scraper/examples/export-the-followers-of-an-account)
- [导出某家公司的已认证关注者](https://apify.com/xquik/x-profile-scraper/examples/export-verified-followers)
- [找出拥有 10,000 名及以上关注者的关注者](https://apify.com/xquik/x-profile-scraper/examples/find-influential-followers)
- [衡量 2 个设计工具的受众重合度](https://apify.com/xquik/x-profile-scraper/examples/measure-audience-overlap)
- [对 1 个账号做全面审计](https://apify.com/xquik/x-profile-scraper/examples/run-a-full-account-audit)

## 抓取 X 个人资料要花多少钱？

Xquik 的 X Profile Scraper 在所有 Apify 套餐上都按每个已交付行 $0.00015 收费。Apify 另行收取你的平台使用费。Xquik 对每个已交付的数据行收费 1 次。`diagnostics` 输出中的诊断信息免费。

需要更大的数据量时，请[选择 Apify 套餐](https://apify.com/pricing?fpr=xquik)，获得更多预付用量。

- 你不需要订阅 Xquik。
- 你无需支付单独的启动费、个人资料费或查询费。
- 过滤&去重都在计费前完成。你从不为被过滤或重复的行付费。
- 没有简介的个人资料不产生翻译费用。
- 不存在的个人资料不产生直播检查费用。
- Apify 的最高总费用设置会限制交付的行数。

遇到问题的运行或大型运行还会写入 `run-report` 记录。顺利完成的小型运行会跳过它&节省 Apify 用量。开启 `alwaysSaveRunRecords` 后，每次运行都会写入它。

要限制单次运行的花费，请看[运行选项](#运行选项)。

## 空运行、部分完成&停止的运行

Xquik 的 X Profile Scraper 会免费说明空运行、部分完成&停止的运行。运行状态会说明运行停止的原因。它还会统计已计费的结果&已读取的目标。

### 空结果

空运行的状态会提示你检查目标&过滤条件。被过滤掉的行永远不会占用你的结果上限。读取了所有目标&没有拿到任何行的运行不写入记录。它的状态会说明原因&需要修改的地方。

自 2024 年起，X 只向账号本人显示该账号喜欢过的帖子。对其他账号，`includeLikes` 不返回 `profileLike` 行。

### 部分完成的运行

提取中断时，会写入免费的 `partial` 诊断。已交付的行仍保留在数据集中。重试前，先查看 `availableResults`、`failedTargets`、`retryable` & `nextAction`。Actor 成功退出只说明结果已交付，不代表提取完整。

### 停止原因

运行状态会写明提前停止的每个原因。`stopCauses` 列出每个原因，并附上各自的 `message`、`retryable` & `nextAction`。原因包括 `target_not_found`、`target_suspended`、`target_failed`、`pagination_safety_limit` & `deadline_reached`。`target_suspended` 会写明被 X 冻结的账号。只有在其他原因让运行停止时，缺失或被冻结的目标才会列入其中。只要任何原因可重试，整个运行就是 `retryable`。

## 输入

Input 标签页列出了所有选项。`twitterHandles`、`startUrls` 或 `userIds` 中至少提供 1 项。其他字段都是可选的。

| 字段 | 作用 |
| --- | --- |
| `twitterHandles` | 用户名，带不带 `@` 都可以 |
| `startUrls` | `x.com` 或 `twitter.com` 上的个人资料 URL |
| `userIds` | 数字 X 用户 ID |
| `maxItems` | 整次运行交付行数的上限 |
| `maxItemsPerTarget` | 每个个人资料或资源的行数上限 |
| `includeTweets` | 添加“帖子”标签页 |
| `includeReplies` | 添加“回复”标签页 |
| `includeMedia` | 添加“媒体”标签页 |
| `includeHighlights` | 添加“亮点”标签页 |
| `includeLikes` | 添加喜欢过的帖子，X 不向其他账号显示这些帖子 |
| `includeFollowers` | 添加关注者 |
| `includeFollowing` | 添加正在关注的账号 |
| `includeVerifiedFollowers` | 添加已认证关注者 |
| `translateBioTo` | 按语言代码翻译每条简介，例如 `es` |
| `checkLiveNow` | 检查每个个人资料当前是否正在直播 |
| `sinceDate`, `untilDate` | 只保留日期范围内的帖子 |
| `language` | 只保留 1 种语言代码的帖子 |
| `mediaType` | 只保留含图片、视频、GIF、链接或不含媒体的帖子 |
| `minViews`, `minLikes` | 只保留查看数或喜欢数高于设定值的帖子 |
| `minReplies`, `minRetweets` | 只保留回复数或转帖数高于设定值的帖子 |
| `nativeRetweets` | 只保留原生转帖 |
| `verifiedOnly` | 只保留已认证的作者或个人资料 |
| `blueVerifiedOnly` | 只保留 X 标记为 Blue 认证的作者或个人资料 |
| `verifiedType` | 只保留 1 种认证类型的个人资料 |
| `minFollowers`, `maxFollowers` | 只保留受众规模在范围内的个人资料 |
| `minAccountAgeDays` | 只保留账号年龄至少达到该天数的个人资料 |
| `minFollowing`, `maxFollowing` | 只保留正在关注数在范围内的个人资料 |
| `minStatuses`, `maxStatuses` | 只保留帖子数在范围内的个人资料 |
| `hasWebsite`, `hasLocation` | 只保留填写了网站或位置的个人资料 |
| `hasEmail` | 只保留公开了邮箱的个人资料 |
| `businessEmailOnly` | 只保留邮箱不属于免费邮箱服务的个人资料 |
| `emailDomains` | 只保留邮箱属于这些域名的个人资料 |
| `bioContains` | 只保留简介包含其中 1 个词的个人资料 |
| `locationContains` | 只保留位置包含该文字的个人资料 |
| `usernameContains` | 只保留用户名包含该文字的个人资料 |
| `dedupeAcrossTargets` | 计费前删除在多个个人资料间重复的行 |

### 从其他个人资料 Actor 迁移

粘贴你已经在用的输入。Xquik 的 X Profile Scraper 能读取其他个人资料 Actor 的这些字段名。每一项先列出它们的字段，再列出映射到的字段。

- `profiles`、`userNames`、`usernames`、`handles`、`screenNames` 对应 `twitterHandles`。
- `urls`、`profileUrls` 对应 `startUrls`。
- `maxProfiles`、`maxResults` 对应 `maxItems`。
- `shouldScrapeFollowers`、`shouldScrapeFollowings` 对应 `includeFollowers`、`includeFollowing`。
- `requireEmail` 对应 `hasEmail`。
- `requireWebsite` 对应 `hasWebsite`。它会保留网站字段中有任意链接的个人资料&运行状态会说明这一点。
- `filterByBlueVerified` 对应 `blueVerifiedOnly`。`false` 会让运行在任何读取或计费前停止。
- `bioKeywords` 对应 `bioContains`。匹配其中任意 1 个词即可。
- 只含 1 个值的 `locationKeywords` 对应 `locationContains`。值更多时，运行会在任何读取或计费前停止。
- 列表形式的 `emailDomains` 对应 `emailDomains`。
- `outputEmail`、`resolveShortLinks` 不需要对应字段。每一行都带有它的邮箱 & X 的完整链接。
- `findEmails`、`extractEmails` 不需要对应字段。每一行都带有个人资料在 X 上公开的邮箱。运行状态会说明该 Actor 不读取链接的网站。
- `validateEmails` 不需要对应字段。运行状态会说明邮箱按公开的原样提供，因为该 Actor 不检查任何邮箱。

`category` 设为 `user_info` 时不改变任何行为。属于其他 Actor 职责的类别会让运行停止，例如 `tweets` 或 `followers`。这时运行不读取&不收取任何费用。提示信息会写明应使用的 Actor。同时设置别名&它的标准字段时，以标准字段的值为准。运行日志会写明被忽略的别名。

### 选择合适的输入

- 只要个人资料卡片时，填写用户名&关闭所有 `include` 选项。
- 要存档账号时，开启 `includeTweets`、`includeMedia` & `includeHighlights`，&设置 `sinceDate`。
- 要找热门内容时，在 `includeTweets` 的基础上加上 `minLikes` 或 `minViews`。
- 要建立潜在客户名单时，开启 `includeFollowers`，并搭配 `minFollowers` & `minAccountAgeDays`。
- 要分析受众重合度时，填写 2 个用户名，开启 `includeFollowers` & 设置 `dedupeAcrossTargets: false`。这样，共同关注者会出现在每个用户名下。

## 输出

每一行都是 JSON 对象。数据集 schema 为每个字段提供标题&说明，所以 AI Agent 无需猜测就能读取数据行。

示例使用样例值。实际结果反映实时数据。个人资料行如下所示。

```json
{
  "resultType": "profile",
  "sourceTarget": "sample_user",
  "id": "1234567890",
  "username": "sample_user",
  "name": "Sample User",
  "description": "Building tools for researchers.",
  "url": "https://example.com",
  "location": "Lisbon",
  "followers": 1200,
  "following": 310,
  "statusesCount": 4200,
  "verified": false,
  "createdAt": "Tue Mar 21 20:50:14 +0000 2017",
  "accountBasedInUnavailable": true
}
```

X 根据汇总的账号访问 IP 推断 `accountBasedIn`。这个标签不说明国籍、居住地、身份、注册地、发帖地点或确切位置。`observedAt` 记录获取时间。X 没有显示标签时，`accountBasedIn` 为 null。X 隐藏该标签时，行中改为带有 `accountBasedInUnavailable: true`。

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

- 用点号表示对象内的字段，例如 `accountBasedIn.value`。大小写&下划线都没有影响。
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

- 设置 Apify 的最高总费用，限制运行成本。把 `maxItems` 设得高一些，就能在预算内拿到尽可能多的行。
- 在 Apify API 中设置 `maxTotalChargeUsd`，或在 Console 中设置 Max cost per run。
- 把所有个人资料放进 1 次运行。每次运行都要向 Apify 支付相同的启动成本。
- `maxConcurrency` 设置同时处理的个人资料数量。默认值是最快且安全的设置。
- 需要 1 秒级检查&签名 webhook 时，请使用 Xquik 账号监控。启用的监控每秒检查 1 次。

每次运行都选择 `latest`，获取所有已发布的修复。已保存的任务&定时调度会保留各自的构建选择，所以请让它们保持在 `latest`。

## 相关 Xquik Actor

所有 Xquik Actor 都使用同一套提取引擎、先过滤后计费的规则&诊断功能。按你需要的数据选择对应的 Actor。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper) 从搜索、个人资料时间线、列表&帖子 ID 抓取帖子，提供 50 多个过滤条件&扁平导出。适合需要帖子数据但不做分析的场景。每行 $0.00015 起。
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

## 常见问题

先解答常见问题，再说明在哪里获取帮助。

### 我需要 X API 密钥或登录吗？

不需要。Xquik 的 X Profile Scraper 不需要 X API 密钥、登录或任何凭据。

### 1 次运行可以抓取多少个人资料？

你列出多少就抓取多少。`maxItems` & 你的 Apify 花费上限会限制行数。

### 可以把 X 个人资料导出为 CSV 或 Excel 吗？

可以。在 Storage 标签页中，以 JSON、CSV、Excel 或 HTML 格式导出数据集。

### 可以抓取 Twitter 用户的关注者吗？

可以。开启 `includeFollowers`、`includeFollowing` 或 `includeVerifiedFollowers`。每个账号是 1 行。

### 能获取个人资料的网站&位置吗？

可以。`url` 保存网站 & `location` 保存账号主人填写的文字。设置 `hasWebsite` & `hasLocation`，只保留填写了这些信息的个人资料。

### 可以抓取受保护的账号吗？

你会得到公开的个人资料行，其中 `protected: true`。X 只向获批的关注者显示受保护账号的帖子&关注者。

### 如何知道某个账号是否正在直播？

设置 `checkLiveNow: true`。每个个人资料都会得到 `profileLive` 行，包含 `live` & 它最近的直播。

### 能翻译简介吗？

能。把 `translateBioTo` 设为语言代码，例如 `es` 或 `pt-br`。没有简介的个人资料不添加行。

### 为什么 includeLikes 什么都不返回？

自 2024 年起，X 只向账号本人显示该账号喜欢过的帖子。其他账号都无法读取这些帖子，该 Actor 也不例外。

### 抓取 X 个人资料合法吗？

Xquik 的 X Profile Scraper 请求的是公开的 X 字段。结果可能包含个人数据。请确认用途合法&遵守适用的隐私规定。不确定时，请咨询专业律师。

### 为什么我的运行没有返回结果？

先查看运行状态。空运行的状态会提示你检查目标&过滤条件。出现需要注意的情况时，会生成免费的 `diagnostics` 输出。其中的 `stopCauses` 为每个原因给出可以照做的 `nextAction`。运行会列出它无法读取的每个输入&说明修正方法。

### 可以使用 API、定时调度&集成吗？

可以。你可以从 50 个公开任务或 Xquik REST API 中选择。[API 标签页](https://apify.com/xquik/x-profile-scraper/api) 提供 Python、JavaScript & cURL 示例。Apify [定时调度](https://docs.apify.com/platform/schedules) 可以按 cron 运行 Xquik 的 X Profile Scraper。Agent 使用 [Apify MCP](https://docs.apify.com/platform/integrations/mcp)。除非需要旧版构建，否则请使用 `latest`。

### 可以获得定制方案吗？

可以。在 [Issues 标签页](https://apify.com/xquik/x-profile-scraper/issues) 中说明你的需求。Xquik 还提供仪表盘、REST API、MCP 服务器 & webhook。在 Xquik 的 [Apify 主页](https://apify.com/xquik) 上可以找到它的网站。

### 在哪里获取帮助？

在 [Issues 标签页](https://apify.com/xquik/x-profile-scraper/issues) 提交 issue，并附上运行 ID。键值存储中的免费诊断信息会说明需要注意的运行。没有返回任何行的运行，会在状态中说明原因。
