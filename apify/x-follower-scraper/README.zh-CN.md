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
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">观看 Framer 如何在 Claude Code、Codex、Cursor 等工具中使用 Xquik 抓取工具，从 6:07 开始。</a>
</td></tr></table>

Xquik 是全球速度最快、成本最低的 X（Twitter）抓取服务，拥有最完整的 X 数据，X Follower Scraper 可收集关注者、关注对象、列表成员、订阅者与社群成员。其他所有 Apify Actor 都会在过滤或去重之前收费。Xquik 只对已交付、唯一且符合过滤条件的结果收费。

在每个 Apify 套餐上，以**每个交付的主页低至 $0.00015** 的价格抓取 X（Twitter）关注者、关注对象、已验证关注者、List 成员、List 订阅者和 Community 成员。Apify 会单独收取平台使用费。无需 X 登录、无启动费、无查询费。

>

## 未完成的提取

被中断的提取会写入一份免费的 `partial` 诊断记录。已获取的结果保持完整。重试前请先读取 `availableResults`、`failedTargets`、`retryable` 和 `nextAction`。Actor 成功退出只表示已交付，不代表提取已完成。

Xquik 是独立的第三方服务，与 X Corp 没有关联。

> "Twitter" 和 "X" 是 X Corp 的商标。

## X Follower Scraper 能做什么？

X Follower Scraper 返回关注者、关注对象、Lists 和 Communities 的可用公开主页数据。每一行都包含其来源目标和关系。

### 核心行为

- 过滤和去重在计费之前执行。
- 一次运行可接受用户名、数字 ID、URL 和短路径。
- 合并模式会记录共享主页、来源、关系及 `overlapCount`。
- 自动游标每页最多请求 300 个主页。
- 旧版游标保持 200 个主页的限制，过期后会重新开始。
- 分页日志包含 `fetchDurationMs`、`processingDurationMs`、`pushDurationMs`、`statusDurationMs` 和 `fullPageDurationMs`，不会重复目标。
- 检查点会在重启后保留已接受的行、计时和失败次数。

## 任务示例

可从 50 个公开任务中选择。每个任务都有明确的输入范围和对应的数据集视图。每个任务都会以一个真实的受众或过滤条件开始。运行前可先编辑。

- [Discover AI builders in OpenAI followers](https://apify.com/xquik/x-follower-scraper/examples/discover-ai-builders-in-openai-followers)
- [Build an X audience dataset for AI agents](https://apify.com/xquik/x-follower-scraper/examples/build-agent-ready-x-audience-dataset)
- [Collect X audience data for RAG](https://apify.com/xquik/x-follower-scraper/examples/collect-x-audience-data-for-rag)
- [Find AI SEO practitioners on X](https://apify.com/xquik/x-follower-scraper/examples/find-ai-seo-practitioners-on-x)
- [Compare AI brand follower overlap](https://apify.com/xquik/x-follower-scraper/examples/compare-ai-brand-follower-overlap)
- [Export Twitter followers to CSV](https://apify.com/xquik/x-follower-scraper/examples/export-twitter-followers-to-csv)
- [Analyze competitor follower overlap](https://apify.com/xquik/x-follower-scraper/examples/analyze-competitor-follower-overlap)
- [Find micro-influencers in X followers](https://apify.com/xquik/x-follower-scraper/examples/find-micro-influencers-in-followers)
- [Export curated Twitter list members](https://apify.com/xquik/x-follower-scraper/examples/export-curated-twitter-list-members)
- [Analyze public X Community members](https://apify.com/xquik/x-follower-scraper/examples/analyze-public-x-community-members)
- [Collect Community members for AI agents](https://apify.com/xquik/x-follower-scraper/examples/collect-community-members-for-ai-agents)
- [Create repeatable X follower snapshots](https://apify.com/xquik/x-follower-scraper/examples/create-repeatable-follower-snapshots)

### X Follower Scraper 能抓取哪些数据？

| 字段              | 说明                                             |
| ----------------- | ------------------------------------------------------- |
| `id`              | X 用户的数字 ID                                       |
| `username`        | 用户名（不含 `@`）                                    |
| `name`            | 显示名称                                                |
| `description`     | 简介文本                                                |
| `followers`       | 关注者数量                                          |
| `following`       | 关注对象数量                                          |
| `statusesCount`   | 发布的推文总数                                     |
| `mediaCount`      | 上传的媒体总数                                     |
| `favouritesCount` | 点赞总数                                       |
| `verified`        | 综合的公开 Blue 或旧版认证标记            |
| `verifiedType`    | `blue`、`business`、`government` 或 `none`             |
| `location`        | 自行填写的所在地                                          |
| `url`             | 主页中的网站 URL                                          |
| `profilePicture`  | 头像 URL（原始尺寸）                                  |
| `coverPicture`    | 背景图 URL                                                |
| `createdAt`       | X 提供的账号创建时间字符串                                |
| `sourceTarget`    | 抓取该主页所对应的用户名/ID                                |
| `sourceRelation`  | 关系类型：`followers`、`following`、`list_members` 等 |
| `sourceUrl`       | 发现该主页的确切 URL                                |
| `sourceTargets`   | 合并模式下匹配该主页的所有目标     |
| `sourceRelations` | 合并模式下匹配该主页的所有关系类型   |
| `sourceUrls`      | 合并模式下匹配该主页的所有来源 URL |
| `overlapCount`    | 合并模式下匹配的“关系-目标”组合数量  |
| `resultType`      | full 与 raw 输出模式下的行类型                                |
| `raw`             | 未经 Actor 特定格式化处理的安全源主页数据                    |

行数据遵循公开主页数据契约，涵盖身份信息、计数、认证、可用性、关联账号、职业信息和简介。来源归属、实体信息和置顶推文 ID 也保持可用。确切字段请参见 OpenAPI。

设置 `outputMode: "raw"` 或 `includeRaw: true` 可包含一份安全源主页数据的 `raw` 副本。精简模式仍为默认设置。

`verifiedOnly` 同时接受公开 Blue 认证和旧版认证主页。当来源标记出现冲突时，绝不会让某个 false 值掩盖真实的认证状态。

与查看者相关的状态属于 Xquik 的抓取账号，而非你的数据集。关注、屏蔽、静音、私信、通知等与查看者相关的标记始终会被移除，raw 输出也不例外。

## 抓取 X 关注者需要多少费用？

在每个 Apify 套餐上，每个交付的主页收费 `$0.00015`。Apify 会单独收取你的平台使用费。Xquik 对每条交付的数据行收取一次费用。`diagnostics` 输出中的诊断记录是免费的。无需另外订阅 Xquik。无启动费。每次运行都会写入一条 `run-report` 记录，其中的 `estimatedChargeUsd` 是根据 Apify 向 Actor 提供的实时按事件计费价格计算得出的。每种结果都会写入 `run-report`，包括无输入和输入无效的退出情况。其 `version` 字段记录了确切发布的 Actor 源码版本。

`failedTargets` 统计因读取失败而停止的目标数量。已接受的主页仍属于可计费的数据行。这些运行使用 `completionReason: "partial_failure"`。快速的服务端分页遵循相同的报告契约。

Apify 默认超时时间为 `0`，运行没有时间限制。Actor 会持续跟进每个实时游标，直到达到上限或来源结束。调用方仍可设置有限的超时时间，此时 `completionReason: "deadline_reached"` 表示即将达到该限制。Actor 会保留最后 15 秒用于处理检查点、数据行、报告和干净退出。有效主页仍会被交付并只计费一次。未完成的分页仍可继续。

独立的目标会并发运行。每个目标都保持有序的游标分页。数据集写入会原子性地保持上限、去重、归属和计费的一致性。

- 启动、目标和关系选择不会额外收取查询费用。
- 过滤条件（`minFollowers`、`verifiedOnly`、`bioContains`、`locationContains`、`minFollowing`、`maxFollowing`、`minStatuses`、`maxStatuses`、`minAccountAgeDays`、`verifiedType`、`usernameContains`、`hasWebsite`、`hasLocation`）会在主页进入数据集之前执行。
- 设置 `dedupeAcrossTargets: true` 后，重复项会在写入前被移除。
- 被数据集拒绝的行不会计费。
- 无输入、输入无效及零输出的运行，会向免费的 `diagnostics` 输出写入 1 条可供参考的记录。

在 Apify API 中设置 `maxTotalChargeUsd`，或在 Console 中设置“Max cost per run”，可为花费设置硬性上限。Apify 会将该限制以 `ACTOR_MAX_TOTAL_CHARGE_USD` 的形式提供给 Actor，Actor 会在接受超出该限制的数据行之前停止。将 `maxItems` 留空，可让运行在预算允许的范围内返回尽可能多的主页。只有当你希望结果数量小于预算所允许的上限时，才需要设置 `maxItems`。

## 如何使用 X Follower Scraper 抓取关注者数据？

### 1. 粘贴主页或列表 URL

粘贴主页、List 或 Community 的 URL。抓取工具会将每个 URL 路由到对应的关系类型：

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

### 2. 批量用户名

针对多个 `/<handle>/followers` 目标的简写方式。用户名可以带 `@` 前缀，也可以不带：

```json
{
  "twitterHandles": ["elonmusk", "nasa", "openai"],
  "relation": "followers",
  "maxItems": 1000
}
```

将 `relation` 设置为 `followers`、`following` 或 `verified_followers`，可切换所有用户名抓取的内容。

同一输入接受的别名包括 `username`、`usernames` 和 `user_names`。

### 3. 多关系运行

```json
{
  "usernames": ["nasa"],
  "relations": ["followers", "following"],
  "maxItems": 1000
}
```

你也可以使用布尔字段，例如 `getFollowers`、`getFollowing`、`getVerifiedFollowers`、`getListMembers`、`getListFollowers` 和 `getCommunityMembers`。

### 4. 按数字用户、列表或社群 ID 抓取

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

数字用户 ID 接受的别名包括 `twitterUserIds` 和 `user_ids`。

`relation` 适用于数字用户 ID。List ID 默认使用成员关系。Community ID 始终使用成员关系。`maxItemsPerTarget` 可防止第一个大目标占用全局上限。

### 5. 先过滤，再付费

应用过滤条件，只让符合条件的主页进入数据集：

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

Actor 可能会检查比写入数量更多的主页。你只需为通过所有过滤条件并进入数据集的行付费。

`bioContains` 的多个备选词之间用逗号或换行分隔。只要简介中包含任意一个所提供的词，该主页就会通过。匹配不区分大小写。

### 6. 查找受众重叠

使用合并模式比较竞争对手、列表、社群或关系类型：

```json
{
  "twitterHandles": ["openai", "anthropicai", "GoogleDeepMind"],
  "relation": "followers",
  "dedupeMode": "merge",
  "maxItemsPerTarget": 5000,
  "maxItems": 15000
}
```

输出中每个唯一主页对应一行。共享主页会包含 `sourceTargets`、`sourceRelations`、`sourceUrls`、`sourceTargetKeys` 和 `overlapCount`，方便你按重叠度排序或直接导出为 CSV。将 `maxItems` 设置得足够高，可让每个目标都贡献结果行；使用 `maxItemsPerTarget` 控制每个账号的抓取深度。

### 支持的 URL 格式

| URL                                         | 关系                                |
| ------------------------------------------- | ---------------------------------------- |
| `https://x.com/<handle>/followers`          | `followers`                             |
| `https://x.com/<handle>/verified_followers` | `verified_followers`                    |
| `https://x.com/<handle>/following`          | `following`                             |
| `https://x.com/<handle>`                    | 默认 `relation`（未设置时为 followers） |
| `https://x.com/i/lists/<id>/members`        | `list_members`                          |
| `https://x.com/i/lists/<id>/followers`      | `list_followers`                        |
| `https://x.com/i/lists/<id>`                | `list_members`                          |
| `https://x.com/i/communities/<id>/members`  | `community_members`                     |
| `https://x.com/i/communities/<id>`          | `community_members`                     |
| `<handle>/followers`                        | `followers`                             |
| `<handle>/following`                        | `following`                             |
| `<handle>/verified_followers`               | `verified_followers`                    |
| `lists/<id>/members`                        | `list_members`                          |
| `lists/<id>/followers`                      | `list_followers`                        |
| `communities/<id>/members`                  | `community_members`                     |

`twitter.com` 和 `mobile.twitter.com` 在任何位置也同样被接受。

## 输入

完整选项列表请参见 **Input** 标签页。所有字段均为可选，但必须至少提供以下之一：`startUrls`、`twitterHandles`、`userIds`、`listIds` 或 `communityIds`，或其对应的别名。

示例：

- 在 `twitterHandles` 中加入某个竞争对手的用户名，并设置 `relation: "followers"`。
- 将 `https://x.com/<handle>/verified_followers` 粘贴到 Start URLs 中以获取已验证主页。
- 将 List 的 URL 粘贴到 Start URLs 中以审查其成员。
- 添加 2 个或以上用户名。设置 `dedupeMode: "first"` 只保留首个匹配的主页行，或使用 `dedupeMode: "merge"` 保留一行并附带所有匹配的来源目标。

### Console 与 API 输入体验

Console 提供以下控件：

- Start URLs 字段既接受 URL 字符串，也接受 `{ "url": "..." }` 对象。其 JSON 编辑器同时支持这两种 API 格式。
- Relation、Output Mode 和 Dedupe Mode 均为经过校验的下拉选择项。
- Relations 是用于多关系运行的多选校验字段。
- 结果数量上限接受大于等于 1 的整数。
- 数字类型的主页过滤条件接受大于等于 0 的整数。

新的集成请使用规范字段名。兼容性别名在 JSON、API、SDK、自动化和任务输入中仍然可用，包括作为 Output Mode 别名的 `outputVariant` 和 `includeRaw`，以及作为 Dedupe Mode 别名的 `dedupeAcrossTargets`。可视化表单会隐藏与规范控件重复的别名。现有的 JSON 和已保存的任务输入会保持当前行为不变。

### 始终使用最新构建

Store 运行使用 Actor 的 `latest` 构建配置。API 客户端应省略构建覆盖参数，或传入 `build=latest`。请更新固定了旧版构建的 Tasks 和集成。固定的构建版本不会自动更新。

## 输出

每个主页都是一个 JSON 对象。精简模式返回规范化的公开字段、模式版本字段，以及可用时的来源元数据：

数据集和 run-report 的模式定义了每个返回字段。基础类型字段还为智能体和自动生成的集成提供了示例值。

示例值仅供参考，实际响应以运行时的源数据为准。

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

合并去重模式会附加重叠字段：

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

可从 Apify 数据集导出为 JSON、CSV、Excel 或 HTML。

## 运行选项

- 设置 Apify 的最大总费用以限制运行成本。将 `maxItems` 留空可在该预算内获得最多的行数，或设置 `maxItems` 和 `maxItemsPerTarget` 以获得较少的主页数量。
- 组合使用 `minFollowers`、`verifiedOnly`、`verifiedType`、`minStatuses`、`usernameContains`、`bioContains`、`locationContains`、`hasWebsite` 和 `hasLocation`，缩小计费数据集的范围。
- 抓取多个竞争对手的用户名时，设置 `dedupeMode: "first"` 可在所有目标中只获取唯一主页。
- 设置 `dedupeMode: "merge"` 可为每个主页获取一行，并附带所有匹配的来源目标。
- 设置 `outputMode: "full"` 可在可用时获取可选的主页字段，例如置顶推文 ID、实体信息和主页元数据。
- 设置 `outputMode: "raw"` 或 `includeRaw: true`，可在规范化字段之外附加一个经过脱敏处理的 `raw` 对象。
- 安排 Actor 定期重复运行，并存储每次的数据集以比较主页 ID。Xquik 的监控功能只发出受支持的推文和主页事件，不发出关注者列表变化事件。

## 使用场景

- 导出竞争对手的关注者用于潜在客户调研。
- 比较你的账号、竞争对手和公众人物之间的受众。
- 通过关注者数量和认证状态过滤，找到符合条件的主页。
- 导出相关 X Community 的成员。
- 构建用于研究的公开社交网络数据集。
- 按简介关键词、所在地或主页类型细分关注者群体。

## 数据责任

该 Actor 请求的是公开的 X 主页字段。结果中可能包含个人数据，包括自行填写的所在地信息。请确认使用目的合法，并遵守适用的隐私规定。如有疑问，请咨询专业法律顾问。

## 相关 Xquik Actor

每个 Xquik Actor 都共享相同的抓取引擎，采用先过滤后计费与诊断机制。请选择与你所需数据相匹配的那一个。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper)：从搜索、主页时间线、List 和推文 ID 抓取推文，提供 50 多种过滤条件和扁平化导出。适合在不需要分析的情况下获取推文数据。每行低至 $0.00015。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper)：从用户名、ID 或 URL 抓取主页及其帖子、回复、媒体和点赞。适合从账号而非搜索出发的场景。每行低至 $0.00015。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper)：抓取帖子下的回复、评论及完整对话，提供 25 多种过滤条件。适合需要获取帖子下方讨论内容的场景。每行低至 $0.00015。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper)：批量抓取帖子 URL 或 ID 对应的回复、引用推文、转推者、点赞者和推文串。适合衡量谁与帖子产生了互动。每行低至 $0.00015。
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper)：按用户名、简介和所在地搜索用户，并提供关注者数、认证状态、账号年龄和所在地过滤条件。适合根据搜索结果构建账号列表。每个主页低至 $0.00015。
- [X List Scraper](https://apify.com/xquik/x-list-scraper)：从 List 的 URL 或 ID 抓取 List 帖子、成员和关注者。适合由精选 List 定义数据来源的场景。每行低至 $0.00015。
- [X Community Scraper](https://apify.com/xquik/x-community-scraper)：抓取 Community 信息、帖子、搜索结果、成员和管理员。适合以 X Community 为数据来源的场景。每行低至 $0.00015。
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper)：按地点抓取实时趋势，包含排名、热度、查询词和 WOEID。适合追踪各地正在流行的话题。每条趋势低至 $0.00015。
- [X Article Scraper](https://apify.com/xquik/x-article-scraper)：以 Markdown 和文本形式抓取长篇 X Articles，包含封面、作者、日期和指标数据。适合需要获取文章正文而非推文的场景。每篇文章低至 $0.00015。
- [X Media Downloader](https://apify.com/xquik/x-media-downloader)：从帖子或主页提取或存储照片、视频和 GIF，提供 MP4 和元数据选项。适合需要获取媒体文件本身的场景。每条媒体记录低至 $0.00015。
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring)：跟踪品牌提及，提供 AI 相关性、情感和客户体验方面的回答，并比较各次运行结果。适合长期观察某个品牌的场景。每条已分析推文低至 $0.0003。
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis)：使用 AI 为每条推文标注态度、强度和讽刺概率。适合需要针对任意主题获取整体情感的场景。每条已分析推文低至 $0.0003。
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)：使用 AI 标注看涨、看跌、中性或混合立场、内容类型、信心程度和资产相关性。适合关注股票、加密货币或交易讨论的场景。每条已分析推文低至 $0.0003。
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)：使用 AI 按格式、来源归属和主题相关性标注新闻类帖子。适合将报道内容与评论区分开的场景。每条已分析推文低至 $0.0003。
- [X (Twitter) Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)：使用 AI 为每条推文回答你自定义的分类、评分和是/否问题。适合预设分析无法满足你的标签需求的场景。每条已分析推文低至 $0.0003。

## 需要抓取以外的功能？

Xquik 还提供 47 个仪表盘工具、129 个 REST 操作、签名 webhook 以及一个 MCP 服务器。

- [API documentation](https://docs.xquik.com/introduction)：REST API 指南
- [Followers API](https://docs.xquik.com/api-reference/x/followers)：获取某账号的可用关注者
- [Following API](https://docs.xquik.com/api-reference/x/following)：获取某用户关注的对象
- [List Members API](https://docs.xquik.com/api-reference/x/list-members)：导出公开 X 列表的成员
- [MCP server](https://docs.xquik.com/mcp/overview)：发现并运行受支持的 JSON 或文本操作
- [Webhooks](https://docs.xquik.com/webhooks/overview)：接收受支持的推文和主页事件

## 常见问题

**我需要 X API 密钥吗？** 不需要。该抓取工具使用自有基础设施，无需登录或凭证。

**什么会限制一次运行？** 你设置的条目数量上限和 Apify 支出上限会停止运行。Apify 账号和平台限制依然适用。

**速度有多快？** 运行时长取决于目标规模、过滤条件和上游可用性。深度过滤的运行每 5 页会在 Console 中记录一次进度检查点，从而减少页面抓取之间的非数据流量。

**为什么我的运行返回的行数比 `maxItems` 少？** `minFollowers`、`verifiedOnly`、`bioContains` 等过滤条件会在写入前生效。放宽过滤条件可获得更多结果。

**从单个账号最多能抓取多少关注者？** X 会以批次的形式对大账号进行分页。提高 Apify 的运行时长限制可获取更多页面。`maxItemsPerTarget` 只会限制单个目标的数量。

**Actor 会重试临时性失败吗？** 会。针对超时、429 和 5xx 响应，每页最多重试 3 次。如果响应中包含 `Retry-After`，会遵循该值；否则会使用指数退避策略。硬性失败会保留已获取的部分结果。

**接近 Apify 运行时长限制时会发生什么？** Actor 不会设置更短的运行截止时间，而是使用 Apify 配置的限制，并保留最后 15 秒用于收尾。它会刷新主页数据、保存分页检查点、写入报告并退出。未被数据集接受的行不会计费。

**我可以从上次中断的地方继续吗？** 目前尚未开放恢复游标的输入方式。重新运行相同目标会从其第一个可用页面开始。

**我可以使用 Apify API 运行它吗？** 可以。Python、JavaScript 和 cURL 示例请参见 [API tab](https://apify.com/xquik/x-follower-scraper/api)。

**我可以安排定期抓取吗？** 可以。使用 Apify 内置的[调度功能](https://docs.apify.com/platform/schedules)按 cron 计划运行该 Actor，并比较存储的数据集以发现关注者变化。

**在哪里报告问题？** 请使用该 Actor 页面上的 Issues 标签页。

**API 文档在哪里？** 请阅读 [API documentation](https://docs.xquik.com/introduction)。
