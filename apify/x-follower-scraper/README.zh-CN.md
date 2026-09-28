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

Xquik 是全球最快、最便宜的 X（Twitter）抓取服务，X 数据也最完整。Xquik 的 X Follower Scraper 收集关注者、正在关注的账号、列表成员、订阅者和社群成员。公开基准测试证明，它是 10 个关注者 Actor 中最便宜、最快的。它每行的字段数是各 Actor 中位数的 1.9 倍，详见[下方基准测试](#基准测试)。其他大多数 Apify Actor 在过滤或去重之前就开始收费。Xquik 只对已交付、不重复且符合过滤条件的结果收费。

抓取 X（Twitter）的关注者、正在关注的账号、已认证关注者、列表成员、列表订阅者和社群成员。Xquik 的 X Follower Scraper **在所有 Apify 套餐上均为每条已交付个人资料 $0.00015 起**。Apify 另行收取平台使用费。无需登录 X，Xquik 也不收启动费或查询费。

> Xquik 是独立的第三方服务，与 X Corp 无关联。“Twitter”和“X”是 X Corp 的商标。

## X Follower Scraper 能做什么？

Xquik 的 X Follower Scraper 返回关注者、正在关注的账号、列表和社群中可获取的公开个人资料数据。每行都标明来源目标和关系。

### 核心行为

- 过滤和去重在计费前完成。
- 默认情况下，多个目标共有的个人资料只出现一次，只收费一次。
- 1 次运行可以同时接受用户名、数字 ID、URL 和短路径。
- 合并模式会记录共同的个人资料、来源、关系和 `overlapCount`。
- 运行日志在 `fetchDurationMs`、`processingDurationMs`、`pushDurationMs`、`statusDurationMs` 和 `fullPageDurationMs` 中显示每页耗时。
- Apify 重启运行后，已交付的行和进度都会保留。

### X Follower Scraper 能提取哪些数据？

| 字段 | 说明 |
| --- | --- |
| `id` | 数字 X 用户 ID |
| `username` | 用户名（不含 `@`） |
| `name` | 显示名称 |
| `description` | 简介 |
| `followers` | 关注者数 |
| `following` | 正在关注数 |
| `statusesCount` | 发布的帖子总数 |
| `mediaCount` | 上传的媒体总数 |
| `favouritesCount` | 喜欢过的帖子总数 |
| `verified` | 公开的 Blue 认证或旧版认证的合并标记 |
| `verifiedType` | `blue`、`business`、`government` 或 `none` |
| `location` | 用户自填的位置 |
| `url` | 个人资料中的网站 URL |
| `profilePicture` | 头像 URL（原尺寸） |
| `coverPicture` | 横幅 URL |
| `createdAt` | X 提供的账号创建时间戳字符串 |
| `sourceTarget` | 抓取到这条个人资料的用户名或 ID |
| `sourceRelation` | 关系：`followers`、`following`、`list_members` 等 |
| `sourceUrl` | 发现这条个人资料的确切 URL |
| `sourceTargets` | 合并模式下匹配这条个人资料的所有目标 |
| `sourceRelations` | 合并模式下匹配这条个人资料的所有关系 |
| `sourceUrls` | 合并模式下匹配这条个人资料的所有来源 URL |
| `overlapCount` | 合并模式下匹配的关系与目标组合数 |
| `resultType` | full 和 raw 输出模式中的行类型 |
| `raw` | 经 Actor 专属格式处理前的安全源个人资料 |

数据行遵循公开个人资料的约定，涵盖身份、计数、认证、可用性、关联账号、职业信息和简介。来源标注、实体和置顶帖子 ID 仍然可用。具体字段见 OpenAPI。

设置 `outputMode: "raw"` 或 `includeRaw: true` 可以添加 `raw` 字段，其中保存源个人资料的安全副本。默认为精简模式。

`verifiedOnly` 接受公开的 Blue 认证和旧版认证个人资料。来源标记互相冲突时，按已认证处理。

数据行从不包含仅对查看者可见的状态。Xquik 会移除关注、屏蔽、隐藏、私信、通知等查看者标记。原始输出同样不含这些标记。

## 使用场景

- 用每个主页更多的字段补全潜在客户数据并构建研究数据集。我们的中位数行在 2026-09-28 有 28 个字段。这是其他 9 个 Actor 中位数的 1.9 倍。
- 导出竞争对手的关注者，用于潜在客户研究。
- 比较你的账号、竞争对手和公众人物的受众。
- 按关注者数和认证状态过滤，找到符合条件的个人资料。
- 导出 X 社群成员。
- 构建用于研究的公开社交网络数据集。
- 按简介关键词、位置或个人资料类型细分关注者群体。

## 如何用 X Follower Scraper 抓取关注者数据？

1. 在 Apify Console 中打开 Xquik 的 X Follower Scraper。
2. 添加个人资料、列表或社群 URL、X 用户名或数字 ID。
3. 选择一种关系，例如 `followers` 或 `verified_followers`。
4. 设置 `maxItems` 和需要的个人资料过滤条件。
5. 开始运行。
6. 以 JSON、CSV、Excel 或 HTML 格式导出数据集。

下面的输入涵盖常见任务。

### 粘贴个人资料或列表 URL

粘贴个人资料、列表或社群 URL。每个 URL 决定要抓取的关系：

```json
{
  "startUrls": [
    { "url": "https://x.com/nasa/followers" },
    { "url": "https://x.com/spacex/verified_followers" },
    { "url": "https://x.com/elonmusk/following" },
    { "url": "https://x.com/i/lists/1748648376080666720/members" },
    { "url": "https://x.com/i/communities/1493446837214187523/members" }
  ],
  "maxItems": 5000
}
```

### 批量用户名

`twitterHandles` 是多个 `/<handle>/followers` 目标的简写。用户名带不带 `@` 都可以：

```json
{
  "twitterHandles": ["elonmusk", "nasa", "openai"],
  "relation": "followers",
  "maxItems": 1000
}
```

`relation` 决定每个用户名要抓取什么。可以用 `followers`、`following` 或 `verified_followers`。

同一输入还接受 `username`、`usernames` 和 `user_names` 作为别名。

### 多关系运行

设置 `relations`，为同一批用户名读取多种关系：

```json
{
  "usernames": ["nasa"],
  "relations": ["followers", "following"],
  "maxItems": 1000
}
```

`getFollowers`、`getFollowing`、`getVerifiedFollowers`、`getListMembers`、`getListFollowers` 和 `getCommunityMembers` 等布尔值也可以用。

### 按数字用户、列表或社群 ID 抓取

```json
{
  "userIds": ["44196397"],
  "listIds": ["1748648376080666720"],
  "communityIds": ["1493446837214187523"],
  "relation": "followers",
  "maxItemsPerTarget": 500,
  "maxItems": 1500
}
```

数字用户 ID 也接受 `twitterUserIds` 和 `user_ids` 别名。

`relation` 作用于数字用户 ID。列表 ID 默认抓取成员。社群 ID 始终抓取成员。`maxItemsPerTarget` 可以防止第一个大目标用完 `maxItems`。

### 付费前先过滤

添加过滤条件，只让符合条件的个人资料进入数据集：

```json
{
  "twitterHandles": ["openai"],
  "relation": "followers",
  "minFollowers": 1000,
  "verifiedOnly": true,
  "verifiedType": "business",
  "minStatuses": 100,
  "usernameContains": "ai",
  "bioContains": "founder, CEO",
  "locationContains": "San Francisco",
  "maxItems": 500
}
```

该 Actor 检查的个人资料可能多于写入的数量。你只为通过所有过滤条件并进入数据集的行付费。

`bioContains` 的多个候选词用逗号或换行分隔。简介包含任一词语的个人资料即可通过。匹配不区分大小写。

### 找出受众重叠

用合并模式比较竞争对手、列表、社群或关系类型：

```json
{
  "twitterHandles": ["openai", "anthropicai", "GoogleDeepMind"],
  "relation": "followers",
  "dedupeMode": "merge",
  "maxItemsPerTarget": 5000,
  "maxItems": 15000
}
```

输出中每个不重复的个人资料占 1 行。共同的个人资料包含 `sourceTargets`、`sourceRelations`、`sourceUrls`、`sourceTargetKeys` 和 `overlapCount`。可以按 `overlapCount` 排序，或把行导出为 CSV。`maxItems` 要设得足够高，让每个目标都能加入行。用 `maxItemsPerTarget` 设置每个账号的抓取深度。

### 支持的 URL 格式

| URL | 关系 |
| --- | --- |
| `https://x.com/<handle>/followers` | `followers` |
| `https://x.com/<handle>/verified_followers` | `verified_followers` |
| `https://x.com/<handle>/following` | `following` |
| `https://x.com/<handle>` | 默认 `relation`（未设置时为 followers） |
| `https://x.com/i/lists/<id>/members` | `list_members` |
| `https://x.com/i/lists/<id>/followers` | `list_followers` |
| `https://x.com/i/lists/<id>` | `list_members` |
| `https://x.com/i/communities/<id>/members` | `community_members` |
| `https://x.com/i/communities/<id>` | `community_members` |
| `<handle>/followers` | `followers` |
| `<handle>/following` | `following` |
| `<handle>/verified_followers` | `verified_followers` |
| `lists/<id>/members` | `list_members` |
| `lists/<id>/followers` | `list_followers` |
| `communities/<id>/members` | `community_members` |

`twitter.com` 和 `mobile.twitter.com` 的 URL 同样处处可用。不带 `https://` 的 URL 也可以，例如 `x.com/nasa`。

## 任务示例

你可以从 50 个公开任务中选择。每个任务都有设了上限的输入和对应的数据集视图。每个任务打开时都带有一个真实的受众或过滤条件，运行前可以先修改。

- [在 OpenAI 关注者中发现 AI 开发者](https://apify.com/xquik/x-follower-scraper/examples/discover-ai-builders-in-openai-followers)
- [为 AI Agent 构建 X 受众数据集](https://apify.com/xquik/x-follower-scraper/examples/build-agent-ready-x-audience-dataset)
- [为 RAG 收集 X 受众数据](https://apify.com/xquik/x-follower-scraper/examples/collect-x-audience-data-for-rag)
- [在 X 上寻找 AI SEO 从业者](https://apify.com/xquik/x-follower-scraper/examples/find-ai-seo-practitioners-on-x)
- [比较 AI 品牌的关注者重叠](https://apify.com/xquik/x-follower-scraper/examples/compare-ai-brand-follower-overlap)
- [把 Twitter 关注者导出为 CSV](https://apify.com/xquik/x-follower-scraper/examples/export-twitter-followers-to-csv)
- [分析竞争对手的关注者重叠](https://apify.com/xquik/x-follower-scraper/examples/analyze-competitor-follower-overlap)
- [在 X 关注者中寻找微型网红](https://apify.com/xquik/x-follower-scraper/examples/find-micro-influencers-in-followers)
- [导出精选 Twitter 列表的成员](https://apify.com/xquik/x-follower-scraper/examples/export-curated-twitter-list-members)
- [分析公开 X 社群的成员](https://apify.com/xquik/x-follower-scraper/examples/analyze-public-x-community-members)
- [为 AI Agent 收集社群成员](https://apify.com/xquik/x-follower-scraper/examples/collect-community-members-for-ai-agents)
- [创建可重复的 X 关注者快照](https://apify.com/xquik/x-follower-scraper/examples/create-repeatable-follower-snapshots)

## 抓取 X 关注者要花多少钱？

Xquik 的 X Follower Scraper 在所有 Apify 套餐上都按每条已交付个人资料 $0.00015 收费。Apify 另行收取平台使用费。Xquik 对每个已交付的数据行收费一次。不需要单独订阅 Xquik，Xquik 也不收启动费。启动、目标和关系选择都不另收查询费。

1 次运行可以读取多个目标。上限、去重、来源标注和计费在所有目标之间都保持准确。

- 过滤在个人资料进入数据集之前进行，所以被过滤的行不收费。
- 数字过滤条件有 `minFollowers`、`maxFollowers`、`minFollowing`、`maxFollowing`、`minStatuses`、`maxStatuses` 和 `minAccountAgeDays`。
- 个人资料过滤条件有 `verifiedOnly`、`verifiedType`、`bioContains`、`locationContains`、`usernameContains`、`hasWebsite` 和 `hasLocation`。
- 该 Actor 在写入前移除跨目标的重复项。设置 `dedupeAcrossTargets: false` 可以保留它们。
- Xquik 从不对数据集拒收的行计费。
- `diagnostics` 输出中的诊断信息免费。
- 没有输入、输入无效和零输出的运行，会向免费的 `diagnostics` 输出写入 1 条说明下一步做法的记录。

运行遇到问题或规模较大时，还会写入一条 `run-report` 记录。其中的 `estimatedChargeUsd` 使用 Apify 向 Actor 提供的实时按事件计费价格。顺利完成的小型运行会跳过它，节省 Apify 用量。开启 `alwaysSaveRunRecords` 后，每次运行都会写入。

## 基准测试

Xquik 的 X Follower Scraper 在成本和速度上胜过其他 9 个关注者 Actor。它的中位数行有 28 个字段，是其他 Actor 中位数的 1.9 倍。

| Actor                                                  | 有用主页 | 每个有用主页成本 | 每秒有用主页 | 每行字段数 | 公开运行                                                                                                                                                                                          |
| ------------------------------------------------------ | -------: | ---------------: | -----------: | ---------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| xquik/x-follower-scraper                               |    1,000 |        $0.000155 |         68.5 |         27 | [查看运行](https://console.apify.com/view/runs/X8Vnx8Ytuk5AzWiK7)                                                                                                                                 |
| xquik/x-follower-scraper                               |      999 |        $0.000155 |         38.4 |         28 | [查看运行](https://console.apify.com/view/runs/lPqjfUn8767FpIDis)                                                                                                                                 |
| b2b_leads/X-Real-Time-Data                             |      286 |        $0.000388 |          3.1 |         21 | [查看运行](https://console.apify.com/view/runs/IkQButA6cVz4ys4GM)                                                                                                                                 |
| kaitoeasyapi/premium-x-follower-scraper-following-data |      356 |        $0.000506 |         21.9 |         50 | [查看运行](https://console.apify.com/view/runs/cJgj15HLBA50LEUf0)                                                                                                                                 |
| api-ninja/x-twitter-followers-scraper                  |      350 |        $0.000809 |          7.0 |          8 | [查看运行](https://console.apify.com/view/runs/XjJ4UPKAILSz0Droz)                                                                                                                                 |
| altimis/scweet                                         |      332 |        $0.000922 |          1.1 |         21 | [查看运行](https://console.apify.com/view/runs/qVGvT7TPAJEHCuR42)                                                                                                                                 |
| apidojo/twitter-user-scraper                           |      323 |        $0.001160 |          7.3 |         25 | [查看运行](https://console.apify.com/view/runs/Xnf7rh8jK6764gP1f)                                                                                                                                 |
| atomus/twitter-scraper                                 |      323 |        $0.001272 |          6.2 |         13 | [查看运行](https://console.apify.com/view/runs/MWz1l0cTcfPcEnaiH)                                                                                                                                 |
| practicaltools/cheap-simple-twitter-api                |      283 |        $0.002036 |          6.5 |          4 | [运行 1](https://console.apify.com/view/runs/Zhvi7LsfpHdQNKcGb), [运行 2](https://console.apify.com/view/runs/IsJj4fa8pFUG7uhlK), [运行 3](https://console.apify.com/view/runs/2W7n8fpEqoxiXq6oX) |
| maximedupre/twitter-scraper                            |      320 |        $0.002192 |          2.1 |         15 | [运行 1](https://console.apify.com/view/runs/HblUkhgI2svp1LBGs), [运行 2](https://console.apify.com/view/runs/37yQFzgydzJoWfa39), [运行 3](https://console.apify.com/view/runs/mtBoKcocaM4BUzZmm) |
| seemuapps/x-followers-following-scraper                |      286 |        $0.003504 |          3.9 |          9 | [运行 1](https://console.apify.com/view/runs/1r3je034X2qhFGgLj), [运行 2](https://console.apify.com/view/runs/dc4ztVP3n2eemgiNQ), [运行 3](https://console.apify.com/view/runs/gWPiBT00G7D9IJ0Cj) |

每个 Actor 都在 2026-09-28 读取了 NASA、SpaceX 和 esa 的关注者。
所有运行都使用 Bronze 等级。
有用主页是唯一的，账号至少 30 天，至少有 1 个关注者和 1 条帖子。
成本是客户为每个有用主页支付的总费用。
我们的成本包含客户支付的 Apify 平台使用费。
含 3 次运行的行会把它们相加。
每行字段数是非空字段数的中位数，包括嵌套字段。
一个列表计为 1 个字段。
打开一次运行，即可查看其输入、日志和数据集。

## 输入

Input 标签页列出了所有选项。至少添加 `startUrls`、`twitterHandles`、`userIds`、`listIds` 或 `communityIds` 中的 1 个。文档中列出的别名也算。其他字段都是可选的。

可以试试这些输入：

- 把竞争对手的用户名加到 `twitterHandles`，并设置 `relation: "followers"`。
- 把 `https://x.com/<handle>/verified_followers` 粘贴到 Start URLs，获取已认证的个人资料。
- 把列表 URL 粘贴到 Start URLs，查看它的成员。
- 添加 2 个或更多用户名。共同的个人资料只出现一次，归在第一个目标下。用 `dedupeMode: "merge"` 保留 1 行，并列出所有匹配的目标。设置 `dedupeAcrossTargets: false`，每个目标各保留 1 行。

### Console 与 API 输入

Console 表单有以下控件：

- Start URLs 字段接受 URL 字符串或 `{ "url": "..." }` 对象。它的 JSON 编辑器保留两种 API 格式。
- Relation、Output Mode 和 Dedupe Mode 是有固定选项的选择列表。
- Relations 是用于多关系运行的多选列表。
- 结果上限接受大于等于 1 的整数。
- 数字个人资料过滤条件接受大于等于 0 的整数。

新的集成请使用标准字段。别名在 JSON、API、SDK、自动化和任务输入中仍然有效。`outputVariant` 和 `includeRaw` 是 Output Mode 的别名。`dedupeAcrossTargets` 是 Dedupe Mode 的别名。可视化表单会隐藏与标准控件重复的别名。已有的使用别名的 JSON 和已保存任务输入仍然有效。设置了 `dedupeAcrossTargets: false` 或 `dedupeMode: "none"` 的已保存输入，每个目标各保留 1 行。

### 从其他关注者 Actor 迁移

直接粘贴你现在用的输入。Xquik 的 X Follower Scraper 能读取其他 X 关注者 Actor 使用的字段名，并映射到自己的字段。标准名称仍是文档中的默认写法。别名从不丢弃字段，也不改变你的费用。

| 你现在用的字段 | Xquik 读取为 |
| --- | --- |
| `twitterHandles`、`usernames`、`user_names`、`handles`、`userNameList`、`screenNames` | `twitterHandles` |
| 单个字符串形式的 `username`、`handle`、`screenName` | `twitterHandles` |
| `twitterUserIds`、`user_ids`、`userIdList` | `userIds` |
| 单个字符串形式的 `user_id`、`userId` | `userIds` |
| `startUrls`、`urls`、`targets`、`profileUrls`、`accountUrls` | `startUrls` |
| 单个字符串形式的 `profileUrl` | `startUrls` |
| `getFollowers`、`getFollowing` | `relations` |
| 值为 `followers` 或 `following` 的 `type` | `relation` |
| `maxResults`、`max_results`、`resultsLimit`、`count` | `maxItems` |
| `scrapeAllResults` | 不设单目标上限 |

有 2 个字段名在这里含义不同。在一些 Actor 中，`maxFollowers` 和 `maxFollowing` 限制一次运行返回的行数。在 Xquik 的 X Follower Scraper 中，它们按关注者数和正在关注数过滤个人资料。要限制行数，请用 `maxItems`。该 Actor 没有“页”这个单位，所以请把 `maxPages` 换成 `maxItems`。

### 始终使用最新构建

从 Apify Store 发起的运行使用 Xquik 的 X Follower Scraper 的 `latest` 构建。调用 API 时，不要覆盖构建，或传入 `build=latest`。请更新固定了旧构建的任务和集成。固定的构建不会自动更新。

## 输出

每条个人资料都是一个 JSON 对象。精简模式返回规范化的公开字段、schema 版本字段，以及可获取的来源元数据。

数据集和运行报告的 schema 描述了每个返回字段。基础字段还附有示例，方便 Agent 和自动生成的集成使用。

下面的示例值仅作说明，你的数据行是运行时的实时数据。一行精简数据如下：

```json
{
  "schemaVersion": 1,
  "_schema_version": 1,
  "id": "44196397",
  "username": "elonmusk",
  "name": "Elon Musk",
  "description": "...",
  "followers": 180000000,
  "following": 500,
  "statusesCount": 42000,
  "mediaCount": 3200,
  "favouritesCount": 120000,
  "verified": true,
  "verifiedType": "blue",
  "location": "...",
  "url": "https://...",
  "profilePicture": "https://...",
  "coverPicture": "https://...",
  "createdAt": "Tue Jun 02 20:12:29 +0000 2009",
  "sourceTarget": "nasa",
  "sourceRelation": "followers",
  "sourceUrl": "https://x.com/nasa/followers"
}
```

合并去重模式会加上重叠字段：

```json
{
  "schemaVersion": 1,
  "_schema_version": 1,
  "id": "44196397",
  "username": "elonmusk",
  "sourceTargets": ["nasa", "spacex"],
  "sourceRelations": ["followers"],
  "sourceUrls": [
    "https://x.com/nasa/followers",
    "https://x.com/spacex/followers"
  ],
  "sourceTargetKeys": ["followers:nasa", "followers:spacex"],
  "overlapCount": 2
}
```

可以把 Apify 数据集导出为 JSON、CSV、Excel 或 HTML。

## 运行选项

在 Apify API 中设置 `maxTotalChargeUsd`，可以为花费设硬上限。在 Console 中，同一限额叫 Max cost per run。Apify 会把这个限额以 `ACTOR_MAX_TOTAL_CHARGE_USD` 传给 Xquik 的 X Follower Scraper。它会在接受超出限额的行之前停止。`maxItems` 留空，即可在花费上限内返回尽可能多的个人资料。只有想要的个人资料少于预算允许的数量时，才设置 `maxItems` 和 `maxItemsPerTarget`。

- 组合 `minFollowers`、`verifiedType` 和 `bioContains` 等个人资料过滤条件，缩小计费的数据集。
- 默认情况下，运行只保留跨目标不重复的个人资料。设置 `dedupeAcrossTargets: false`，每个目标各保留 1 行。
- 设置 `dedupeMode: "merge"`，每条个人资料 1 行，并列出所有匹配的来源目标。
- 设置 `outputMode: "full"`，获取可选的个人资料字段（如有），包括置顶帖子 ID、实体和个人资料元数据。
- 设置 `outputMode: "raw"` 或 `includeRaw: true`，在规范化字段旁加入经过清理的 `raw` 对象。
- 定期运行并保存每个数据集，比较个人资料 ID。Xquik 监控会发出支持的帖子和个人资料事件，不会发出关注者名单的变化。

## 空运行、部分完成和停止的运行

Xquik 的 X Follower Scraper 用免费诊断说明运行为何为空、部分完成或停止。Actor 成功退出只说明结果已交付，不代表提取完整。

中断的运行会写入一条免费的 `partial` 诊断。已交付的结果留在数据集中。重试前，先查看 `availableResults`、`failedTargets`、`retryable` 和 `nextAction`。

运行状态会说明运行为何停止，并统计已计费的结果、跳过的重复项和已读取的目标。状态会写明提前停止的每个原因。`stopCauses` 列出每个原因，并附上各自的 `message`、`retryable` 和 `nextAction`。原因包括 `target_not_found`、`target_protected`、`target_failed` 和 `deadline_reached`。只有在其他原因让运行停止时，不存在的账号才会列入 `stopCauses`。只要有一个原因可重试，整个运行就是 `retryable`。

X 不公开受保护账号的关注关系名单。这类目标会在 1 条免费诊断中标为 `target_protected`，运行会继续读取其他目标。

`failedTargets` 统计出错后停止的目标。这类运行使用 `completionReason: "partial_failure"`。已交付的个人资料仍是计费的数据行。

Apify 默认超时为 `0`，所以运行没有时间限制。运行会一直进行，直到达到上限或没有更多个人资料。你仍然可以设置有限的超时。这时 `completionReason: "deadline_reached"` 表示快到时限了。运行会保存个人资料和报告，然后在时限前正常退出。已交付的个人资料只计费一次。

出现问题的运行总会写入 `run-report`，包括没有输入和输入无效时的退出。`run-report` 还有一个 `version` 字段，给出已发布 Actor 源码的确切版本。

## 相关 Xquik Actor

所有 Xquik Actor 都使用同一套提取引擎、先过滤后计费的规则和诊断功能。按你需要的数据选择对应的 Actor。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper)：从搜索、个人资料时间线、列表和帖子 ID 抓取帖子，提供 50 多个过滤条件和扁平导出。适合只要帖子数据、不做分析的场景。每行 $0.00015 起。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper)：从用户名、ID 或 URL 抓取个人资料，以及这些账号的帖子、回复、媒体和关注者。适合从账号而不是搜索入手的场景。每行 $0.00015 起。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper)：抓取帖子下的回复、评论和完整对话，提供 25 多个过滤条件。适合需要帖子下方讨论的场景。每行 $0.00015 起。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper)：按帖子 URL 或 ID 批量抓取回复、引用、转帖者和帖子串。适合衡量谁与帖子有过互动的场景。每行 $0.00015 起。
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
- [Followers API](https://docs.xquik.com/api-reference/x/followers)：获取账号可获取的关注者
- [Following API](https://docs.xquik.com/api-reference/x/following)：获取某个用户正在关注的账号
- [List Members API](https://docs.xquik.com/api-reference/x/list-members)：导出公开 X 列表的成员
- [MCP 服务器](https://docs.xquik.com/mcp/overview)：查看并运行支持的 JSON 或文本操作
- [Webhooks](https://docs.xquik.com/webhooks/overview)：接收支持的帖子和个人资料事件

## 常见问题

### 我需要 X API 密钥吗？

不需要。你不需要 X API 密钥、登录或任何凭据。

### 什么会限制一次运行？

你设置的结果上限和 Apify 支出上限会让运行停止。Apify 账号和平台限制仍然适用。

### 它有多快？

Xquik 的 X Follower Scraper 的速度取决于目标规模、过滤条件和 X 的可用性。它的 2 次[基准测试](#基准测试)运行分别达到每秒 38.4 和 68.5 条有效个人资料。

### 为什么运行返回的行少于 `maxItems`？

`minFollowers`、`verifiedOnly` 和 `bioContains` 等过滤条件在写入前生效。放宽它们可以返回更多结果。Xquik 的 X Follower Scraper 还会移除跨目标的重复项。

### 单个账号最多能抓取多少关注者？

X 为该账号显示多少，就能抓取多少。运行会一直进行，直到达到你的上限、花费上限或名单末尾。`maxItemsPerTarget` 只限制每个目标。

### 该 Actor 会重试临时失败吗？

会。它会自动从 X 的临时错误中恢复。遇到无法恢复的失败时，运行会保留部分结果。

### 接近 Apify 运行时限时会怎样？

Xquik 的 X Follower Scraper 本身不设更短的截止时间。在你的时限到达前，它会保存个人资料、写入报告并退出。没有进入数据集的行不收费。

### 可以从上次中断的地方继续吗？

暂时不行。对同一目标发起新运行时，会从头开始。

### 可以用 Apify API 运行它吗？

可以。[API 标签页](https://apify.com/xquik/x-follower-scraper/api) 提供 Python、JavaScript 和 cURL 示例。

### 可以定期自动抓取吗？

可以。用 Apify 内置的[定时调度](https://docs.apify.com/platform/schedules)，按 cron 运行该 Actor。比较保存的数据集，就能找出关注者的变化。

### 抓取 X 数据合法吗？

Xquik 的 X Follower Scraper 请求的是公开的 X 个人资料字段。结果可能包含个人数据，包括用户自填的位置。请确认用途合法，并遵守适用的隐私规定。不确定时，请咨询专业律师。

### 在哪里获取帮助？

在 Actor 页面的 Issues 标签页提交 issue。也可以带上运行 ID 联系 support@xquik.com。

### API 文档在哪里？

请阅读 [API 文档](https://docs.xquik.com/introduction)。
