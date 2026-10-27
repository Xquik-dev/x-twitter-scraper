[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · **简体中文** · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer 将 Xquik MCP 连接到编程 Agent](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[观看 Framer 如何在 Claude Code、Codex、Cursor 等工具中使用 Xquik 抓取工具](https://youtu.be/4UOSpoOoC3Y?t=367)，从 6:07 开始。

Xquik 是全球最快、最便宜的 X（Twitter）抓取服务，X 数据也最完整。Xquik 的 X Account Location Scraper 查询 X 账号的所在地，不需要 X Cookie 或登录。其他大多数 Apify Actor 在过滤或去重之前就开始收费。Xquik 只对已交付、不重复且符合过滤条件的结果收费。

粘贴用户名、个人资料 URL 或用户 ID，1 次运行即可拿到每个账号在 X 上的“账号所在地”标签。这个标签是 X 尽力为账号给出的国家或地区。它不是国籍、居住地或确切位置。你需支付**每个已交付行 $0.00015**，Apify 另行收取平台使用费。

> Xquik 是独立的第三方服务，与 X Corp 无关联。
> “Twitter”和“X”是 X Corp 的商标。

## 为什么使用 X Account Location Scraper？

- **每个账号都有明确答案。** 每行都会说明 X 是显示了标签、没有标签，还是隐藏了标签。
- **按输入顺序返回行。** 多个账号按你列出的顺序返回。
- **任何账号格式都能粘贴。** 在 1 个列表中混合使用用户名、带 @ 的用户名、个人资料 URL & 用户 ID。长期保留的列表请用 `userIds`，因为用户改名后用户 ID 不变。
- **可直接用于表格的导出。** 用 `fields` & `flatten` 调整列。导出为 JSON、CSV、Excel、XML 或 RSS。

### 完整结果

- 每次返回的结果都包含 X 所能提供的最完整数据。

### 准确的数据行

- 行中的每个 ID 都精确无误。
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
- 每次运行都会说明结束原因&是否需要重试。

### 丰富的数据

- 账号所在地附带国家代码、准确性说明&用户名历史。

### 质量检查

- X 显示的每个字段，要么已提供，要么是有意省略，要么已证实不存在。
- Xquik 会针对 X 实时测试每一种读取。

## X Account Location Scraper 能提取哪些数据？

- X 的“账号所在地”标签，可能是国家，也可能是地区。
- 该国家的 2 位字母 ISO 代码。
- X 是否注明该标签可能不准确。
- 账号首次连接 X 的方式，例如 Web 或某个国家的应用商店。
- 该连接方式中的平台&国家代码。
- 账号更改用户名的次数&最近一次更改的时间。
- X 显示的该账号所关联的组织。
- 以天数表示的账号年龄&个人资料链接。
- 完整的公开个人资料，包含名称、简介、各项计数、认证状态、日期&图片。

## 如何查询 X 账号的所在地

刚接触 Apify？先[创建免费账号](https://console.apify.com/sign-up?fpr=xquik)。免费套餐不需要信用卡&每月提供 $5 可用额度。按每个账号 $0.00015 计算，不算平台用量，$5 最多可支付 33,000 个账号。然后回到这里&点击 Try for free。

1. 在 Apify Console 中打开 Xquik 的 X Account Location Scraper。
2. 把用户名、个人资料 URL 或用户 ID 粘贴到 `twitterHandles` 中。
3. 用 `maxItems` 设置交付行数的上限，然后点击 Start。
4. 以 JSON、CSV 或 Excel 格式下载数据集，或使用 Apify API。

整个过程中，你都不需要输入 X Cookie、登录信息或 API 密钥。

## 输入

`twitterHandles` 接受账号的每种写法，可以任意混用。

```json
{
  "twitterHandles": [
    "BBCWorld",
    "@OpenAI",
    "https://x.com/NASA",
    "https://twitter.com/github",
    "11348282"
  ],
  "maxItems": 1000
}
```

`startUrls` & `userIds` 接受同样的写法。`startUrls` 中的每个 URL 可以写成普通字符串，也可以写成 `{ "url": "..." }` 对象。

```json
{
  "startUrls": ["https://x.com/nasa", { "url": "https://x.com/OpenAI" }],
  "userIds": ["742143"]
}
```

账号更改用户名后，用户 ID 保持不变，所以需要长期保存的名单请用 `userIds`。`userNames` 可以作为 `twitterHandles` 的另一个名称使用。

输入中出现 2 次的账号只交付&收费 1 次，即使 1 条是用户名、另 1 条是用户 ID 也一样。`maxItems` 保留输入中排在最前面的账号。顺利完成的小型运行会跳过 `run-report` & 节省 Apify 用量。开启 `alwaysSaveRunRecords` 后，每次运行都会写入报告。

## 输出

每个账号是数据集中的 1 行。排在最前面的是 X 的“关于此账号”页面显示的内容，即 `accountBasedIn`、`accountBasedInUnavailable`、`accountBasedInAccurate`、`affiliateUsername`、`connectedVia`、`connectedViaAccurate` & `usernameChanges`。接着是完整的公开个人资料，包含 `id`、`username`、`name`、`description`、`followers`、`following`、`verified`、`verifiedType`、`createdAt`、`profilePicture` 等字段。该 Actor 根据个人资料推算出的 5 个字段排在最后。它们是 `accountBasedInCountryCode`、`connectedViaPlatform`、`connectedViaCountryCode`、`accountAgeDays` & `profileUrl`。来源缺少的字段不会出现，该 Actor 无法匹配的代码也不会出现。Xquik 的 X Account Location Scraper 从不编造值。

示例使用样例值。实际结果反映实时数据。数据行如下所示。

```json
{
  "accountBasedIn": {
    "value": "United Kingdom",
    "level": "country",
    "observedAt": "2026-10-12T09:00:00.000Z"
  },
  "accountBasedInAccurate": true,
  "affiliateUsername": "sample_org",
  "connectedVia": "Web",
  "usernameChanges": {
    "count": 1,
    "lastChangedAt": "2021-03-04T10:00:00.000Z"
  },
  "id": "1234567890",
  "username": "sample_user",
  "name": "Sample User",
  "followers": 1200,
  "verified": true,
  "createdAt": "2017-03-21T20:50:14.000Z",
  "accountBasedInCountryCode": "GB",
  "connectedViaPlatform": "web",
  "accountAgeDays": 3491,
  "profileUrl": "https://x.com/sample_user",
  "resultType": "profile",
  "sourceTarget": "sample_user"
}
```

每行可以区分 3 种情况。

| 行中包含 | 含义 | 该怎么做 |
| --- | --- | --- |
| 带 `value` 的 `accountBasedIn` | X 为该账号显示这个标签。 | 直接使用。 |
| `accountBasedIn: null` | X 没有为该账号显示标签。 | 无需操作。X 没有可显示的标签。 |
| `accountBasedInUnavailable: true` | X 在 2 次读取中都隐藏了标签。 | 稍后重新运行该账号。 |

X 隐藏标签时，运行会在交付该行前把这个账号再读取 1 次。这次重新读取免费。仍被隐藏的标签属于未知，而不是不存在。这样的行包含公开个人资料，但不含“关于此账号”字段，运行状态会统计这些账号的数量。3 种情况中的每种都是 1 个已交付行。

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

## 这个标签的含义

X 根据汇总的账号访问 IP 推断 `accountBasedIn`。这个标签不代表国籍、居住地、身份、注册地、发帖地点或确切位置。`level` 说明 X 显示的是国家，还是范围更大的地区。`observedAt` 记录获取时间。X 注明标签可能不准确时，`accountBasedInAccurate` 为 `false`。`connectedVia` 说明账号首次连接 X 的方式。X 注明其中的国家可能不准确时，`connectedViaAccurate` 为 `false`。`connectedViaPlatform` 的值是 `web`、`ios` 或 `android`。这 2 个国家代码来自 X 写出的名称，所以地区没有代码。X 为某些国家写出 2 个名称，例如 Türkiye & Turkey，它们得到相同的代码。`location` 是账号主人在个人资料中填写的文字，属于另一个字段。

## 查询 X 账号所在地要花多少钱？

所有 Apify 套餐的价格都是每个已交付行 $0.00015。Apify 另行收取你的平台使用费。

需要更大的数据量时，请[选择 Apify 套餐](https://apify.com/pricing?fpr=xquik)，获得更多预付用量。

- 每个已交付的数据行收费 1 次。`diagnostics` 中的诊断信息免费。
- 没有启动费或查询费。
- X 上不存在的账号不产生行&不收费。
- 被隐藏标签的再次读取不额外收费。
- 计费前先去重。
- Apify 的最高总费用设置会限制交付行数。

## 限制&恢复

Xquik 的 X Account Location Scraper 在 1 次运行中读取多个账号。已交付的行&进度在 Apify 重启后仍会保留。该 Actor 本身不设时间限制。它会遵守你设置的任何 Apify 超时。

运行状态会列出 X 上找不到匹配的账号&提示你检查用户名、ID 或 URL。它还会列出被冻结的账号。提取中断时，会写入免费的 `partial` 诊断。已获取的结果不受影响。重试前，先查看 `availableResults`、`failedTargets`、`retryable` & `nextAction`。Actor 成功退出说明结果已交付，不代表提取完整。

运行状态会写明提前停止的每个原因。`stopCauses` 列出每个原因，并附上各自的 `message`、`retryable` & `nextAction`。原因包括 `target_not_found`、`target_suspended`、`target_failed` & `deadline_reached`。只有在其他原因让运行停止时，缺失或被冻结的目标才会列入其中。只要任何原因可重试，整个运行就是 `retryable`。

## 相关 Xquik Actor

所有 Xquik Actor 都使用同一套提取引擎、先过滤后计费的规则&诊断功能。按你需要的数据选择对应的 Actor。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper) 从搜索、个人资料时间线、列表&帖子 ID 抓取帖子，提供 50 多个过滤条件&扁平导出。适合需要帖子数据但不做分析的场景。每行 $0.00015 起。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper) 从用户名、ID 或 URL 抓取个人资料，以及这些账号的帖子、回复、媒体&关注者。适合从账号而不是搜索入手的场景。每行 $0.00015 起。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper) 抓取帖子下的回复、评论&完整对话，提供 25 多个过滤条件。适合需要帖子下方讨论的场景。每行 $0.00015 起。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper) 按帖子 URL 或 ID 批量抓取回复、引用、转帖者&帖子串。适合衡量谁与帖子有过互动的场景。每行 $0.00015 起。
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper) 抓取帖子的引用帖子，包含文本、媒体、计数&作者，提供 11 个过滤条件。适合研究谁引用了帖子&说了什么的场景。每条帖子 $0.00015 起。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper) 抓取关注者、正在关注的账号、列表成员、订阅者&社群成员，输出为个人资料行。适合需要受众或成员名单的场景。每条个人资料 $0.00015 起。
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper) 按用户名、简介&位置搜索用户，可按关注者数、认证状态、账号年龄&位置过滤。适合通过搜索建立账号名单的场景。每条个人资料 $0.00015 起。
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

### 我需要 X Cookie、API 密钥或登录吗？

不需要。Xquik 的 X Account Location Scraper 不需要 X Cookie、API 密钥、登录或凭据。每次读取都在 Xquik 的基础设施上运行。

### 这个标签能说明账号主人住在哪里吗？

不能。它是 X 尽力为账号给出的标签。它不代表国籍、居住地或确切位置，X 自己也把部分标签标为可能不准确。

### 为什么某行显示 `accountBasedInUnavailable`？

X 在这次运行的 2 次读取中都隐藏了标签。这个标签属于未知，而不是不存在。稍后重新运行该账号，就能拿到这个标签。`accountBasedIn: null` 则不同。X 没有为该账号显示标签。

### 1 次运行可以查询多少个账号？

你粘贴多少就查询多少。1 次运行可以返回 100,000 行甚至更多。名单更大时，把 `maxItems` 调到表单初始的 1,000 以上。

### 查询 X 账号的所在地合法吗？

Xquik 的 X Account Location Scraper 请求的是公开的 X 字段。结果可能包含个人数据。请确认用途合法&遵守适用的隐私规定。不确定时，请咨询专业律师。

### 为什么我的运行没有返回结果？

先查看运行状态。对 X 上找不到匹配的每个账号，空运行的状态会提示你检查它的用户名、ID 或 URL。出现需要注意的情况时，会生成免费的 `diagnostics` 输出。其中的 `stopCauses` 为每个原因给出可以照做的 `nextAction`。

### 可以使用 API、定时调度&集成吗？

可以。请使用 Apify API 或 Xquik REST API。[API 标签页](https://apify.com/xquik/x-account-location-scraper/api) 提供 Python、JavaScript & cURL 示例。Apify [定时调度](https://docs.apify.com/platform/schedules) 可以按 cron 运行 Xquik 的 X Account Location Scraper。Agent 可以使用 [Apify MCP](https://docs.apify.com/platform/integrations/mcp)。除非需要旧构建，否则请使用 `latest`。

### 在哪里获取帮助？

在 [Issues 标签页](https://apify.com/xquik/x-account-location-scraper/issues) 提交 issue，并附上运行 ID。键值存储中的免费诊断信息会说明需要注意的运行。没有返回任何行的运行，会在状态中说明原因。

### 可以获得定制方案吗？

可以。在 [Issues 标签页](https://apify.com/xquik/x-account-location-scraper/issues) 中说明你的需求。Xquik 还提供仪表盘、REST API、MCP 服务器 & webhook。在 Xquik 的 [Apify 主页](https://apify.com/xquik) 上可以找到它的网站。
