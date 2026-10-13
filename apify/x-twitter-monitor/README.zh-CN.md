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

Xquik 是全球最快、最便宜的 X（Twitter）抓取服务，X 数据也最完整。Xquik 的 X (Twitter) Monitor 针对你选择的账号和关键词发送 Twitter 提醒。它会捕获被监控账号的每一条新推文、回复、引用、转帖和个人资料变更。在 X 显示之后，它通常不到一秒就能捕获每一项。对于关键词，它会捕获 X 最新搜索结果中出现的每一条新推文。它还会捕获关注动态和关注者。每个事件都会以提醒的形式送达 Discord、Telegram、Slack 或你的 webhook。其他大多数 Apify Actor 在过滤或去重之前就开始收费。Xquik 只对已交付且不重复的结果收费，在这里也只对监控运行的小时数收费。

粘贴账号或关键词，然后点击 Start。监控立即开始，提醒会在运行之间送达。费用为**每个 monitor-hour $0.0045**。事件和提醒免费，Apify 另行收取平台使用费。

> Xquik 是独立的第三方服务，与 X Corp 无关联。“Twitter”和“X”是 X Corp 的商标。

## Twitter 监控会发送什么

- 你监控的账号发布的每一条新推文、回复、引用和转帖，通常在 X 显示后不到一秒就能捕获。
- 你的关键词在 X 最新搜索结果中出现的每一条新推文，支持任意 X 搜索运算符。
- 已删除的推文，以及账号开启的直播视频和空间。
- 个人资料变更，例如显示名称、用户名、简介、头像、横幅、位置、网站、认证状态、保护状态、置顶推文和可用状态，同样通常在 X 显示后不到一秒就能捕获。
- 每个被监控账号关注或取消关注的账号。
- 每个被监控账号新增和失去的关注者，在 `eventTypes` 中选择。
- 包含提及、话题标签、媒体、链接或投票的推文，以及长推文，在 `eventTypes` 中选择。
- 完整事件，也就是包含作者、计数和媒体的推文，或具体的变更。
- 当前用户名旁附上永久不变的 X 用户 ID，所以账号改名后仍保留它的监控。
- 发到 Slack 和 Discord 的提醒使用各自的消息格式，也可发到 Telegram，或以签名 JSON 发到任意 HTTPS webhook。
- 向每个新的 webhook、Slack 或 Discord URL 发送 1 条测试提醒，响应显示在运行状态中。点击 Start 后，Telegram 会在聊天中确认。
- 每个事件都会写入本次运行的数据集，以及每个已保存任务或监控名称各自的 1 个历史数据集。

## 如何设置 Twitter 关键词提醒

1. 在 Apify Console 中打开 Xquik 的 X (Twitter) Monitor。
2. 把用户名粘贴到 `twitterHandles`，或把 X 搜索粘贴到 `searchTerms`。
3. 选择会发送提醒的事件。新推文、回复、引用和转帖默认开启。
4. 把 webhook URL 粘贴到 `webhookUrls`，或开启 `telegram`。
5. 点击 Start。监控在这次运行中开始。
6. 添加一个定时调度，每小时用相同的输入运行该 Actor。

之后的每次运行都会对上次运行以来监控的小时数收费。它把新事件保存到自己的数据集，并很快结束。24 小时没有运行的监控会暂停。暂停前 4 小时，你的提醒会发出警告。下一次运行会恢复监控，并先收取未付的小时数。

相同的输入会继续同一组监控。修改输入会更新这组监控。1 个已保存的任务保存 1 组监控。没有任务时，由 `monitorName` 为这组监控命名，所以 2 个名称会让 2 组监控彼此分开。

## 在 Discord、Telegram 和 Slack 中接收 Twitter 提醒

- **Discord。** 把频道的 webhook URL 粘贴到 `webhookUrls`。每条提醒都以 Discord 消息送达，无需托管机器人。
- **Telegram。** 开启 `telegram`。运行状态会给出 Xquik Telegram 机器人的链接。打开链接并点击 Start，提醒就会发到那个聊天。
- **Slack。** 粘贴一个 Incoming Webhook URL。每条提醒都以 Slack 消息送达。
- **任意应用。** 粘贴一个 HTTPS URL。每条提醒都以签名 JSON 送达，内容与数据集中的事件相同。

每个新的 webhook、Slack 或 Discord URL 都会在添加它的那次运行中收到 1 条测试提醒，状态页面会显示它是否送达。Telegram 不发送测试提醒。点击 Start 后，机器人会在聊天中回复，下一次运行会显示 Telegram 已连接。

## 输入

| 字段                                 | 作用                                                         |
| ------------------------------------ | ------------------------------------------------------------ |
| `twitterHandles`                     | 带或不带 @ 的用户名，或 x.com 个人资料 URL，每行 1 个。      |
| `searchTerms`                        | X 搜索，例如 `"x api" lang:en`。每个搜索是 1 个监控。        |
| `monitorName`                        | 在没有已保存任务的运行中，为这组账号和关键词命名。           |
| `newPosts`                           | 每一条新推文。默认开启。                                     |
| `replies`, `quotes`, `reposts`       | 回复、引用推文和转帖。默认开启。                             |
| `deletedPosts`, `liveVideos`         | 账号的已删除推文、直播视频和空间。                           |
| `profileChanges`, `followingChanges` | 账号的个人资料变更、关注和取消关注。                         |
| `eventTypes`                         | 精确的事件类型，会取代复选框，例如关注者变更和媒体。         |
| `webhookUrls`                        | HTTPS URL，每行 1 个。Actor 会识别 Slack 和 Discord 的 URL。 |
| `telegram`                           | 通过运行给出的链接，把提醒发送到 Telegram。                  |
| `since`                              | 把过去 30 天内某个日期以来保留的事件保存 1 次。              |
| `stop`                               | 停止监控并关闭提醒。                                         |

1 个输入最多包含 100 个账号和关键词。关键词只发送推文事件。把短语放在引号中可以精确匹配，例如 `"x api"`。不加引号时，这些词可以出现在推文的任意位置。要捕获对某个账号的提及，请添加关键词 `@username`。Telegram 不需要用户名或聊天 ID。运行状态会给出一个链接。打开链接并点击 Start，提醒就会发到那个聊天。

以下输入可直接复制。

```json
{ "twitterHandles": ["NASA", "SpaceX"], "reposts": false }
```

```json
{
  "searchTerms": ["\"your brand\" -from:yourbrand"],
  "webhookUrls": "https://hooks.slack.com/services/T000/B000/XXXX",
  "monitorName": "brand-mentions"
}
```

```json
{ "twitterHandles": ["elonmusk"], "profileChanges": true, "telegram": true }
```

## 输出

每次运行返回 4 项输出。

- **状态页面**，即 `STATUS.html` 记录。它显示监控是否在运行、带按钮的唯一下一步、本次运行保存和收费的内容、监控目标和每个提醒渠道。Output 标签页会显示它。
- **状态记录**，即 `STATUS` 记录。它以 JSON 格式保存同一状态。
- **新事件**，即本次运行的数据集。它按从旧到新的顺序列出每个新事件，最后是 1 行状态。
- **诊断**，只在出现需要注意的问题时写入。

一行事件就是 Xquik REST API 提供的原样事件，包含所有字段。

```json
{
  "resultType": "event",
  "id": "981",
  "type": "tweet.new",
  "occurredAt": "2026-10-13T09:00:01.000Z",
  "monitorId": "2944",
  "monitorType": "account",
  "username": "NASA",
  "xUserId": "11348282",
  "data": { "tweetId": "1977000000000000000", "text": "Liftoff!" }
}
```

示例值只展示结构，实时数据会有所不同。

状态记录包含 `state`、`targets`、`destinations`、`eventsSaved`、`pendingEvents`、`hoursCharged`、`chargedUsd`、`chargeConfirmed`、`hoursOwed`、`paidThrough`、`pausesAt`、`historyDataset`、`notices`、`nextStep`、`nextStepAction` 和 `nextStepUrl`。X 上不存在的目标会在其 `message` 中说明，监控会继续监控其余目标。新的通用 webhook 只显示 1 次签名密钥，而且只显示在状态记录中。

你账号中的历史数据集保存该监控的每个事件，每个事件只保存 1 次。它的名称以 `x-monitor-` 开头。

## 面向 AI Agent

1 次调用就是全部 API。每次调用都会启动或更新监控，对上次调用以来监控的小时数收费，并只返回新内容。任何调用都不会对同一小时收费 2 次。启动或更新监控的调用很快结束，不会超出 Apify MCP 的等待时间。停止大约需要半分钟，因为它会先收集最后的事件。如果你的工具不再等待，请从这次运行中读取结果。

以下输入会启动或继续一个监控。

```json
{
  "twitterHandles": ["NASA"],
  "searchTerms": ["\"x api\" lang:en"],
  "monitorName": "agent-demo"
}
```

一次调用返回 2 项内容。

- 本次运行的数据集先列出新事件，再列出 1 行 `resultType` 为 `status` 的数据。其中 `state` 说明监控是否在运行，`nextStep` 说明下一步该做什么。`nextStepAction` 说明步骤的类型，例如 `add_schedule`，`nextStepUrl` 是执行这一步的页面。
- `STATUS` 记录包含同样的状态。如果这次调用创建了 webhook，还会包含签名密钥。

要检查监控，用相同的输入再次调用该 Actor。这不会改变任何设置，只对已经监控的小时数收费。它会返回状态和新事件。

监控至少每 24 小时需要运行 1 次，才能继续监控。Apify 的 MCP 服务器没有定时调度工具，所以你无法添加调度。请让用户在 `nextStepUrl` 中的页面上添加一个 Apify 定时调度，它会每小时用相同的输入运行该 Actor。也可以由你从任意定时器再次调用该 Actor。用相同的输入加上 `"stop": true` 即可停止。

该 Actor 也能读取 Agent 常猜的字段名，例如 `handles` 和 `usernames`，运行状态会说明它如何读取这些字段。

## Twitter 监控要花多少钱？

所有 Apify 付费套餐的价格都是每个 monitor-hour $0.0045。1 个账号或关键词就是 1 个监控。包含 2 个账号和 1 个关键词的输入，每小时花费 3 个 monitor-hour。Apify 另行收取平台使用费。

- 监控 1 个账号 30 天，约 $3.24。
- 监控 10 个账号和 2 个关键词 30 天，约 $38.88。
- 事件和提醒免费，无论收到多少。
- 没有启动费。运行只对已经监控的小时数收费。
- X 上不存在的目标不会被监控，也不收费。
- 每次运行的最高费用会限制每笔收费。超出的小时数会留到下一次运行。

与它支付的监控小时数相比，每小时运行一次的定时调度产生的 Apify 用量很小。每隔几分钟运行一次会增加用量，但对提醒没有任何影响，因为提醒本来就在运行之间送达。

监控需要 Apify 付费套餐。在免费套餐中，运行不会启动监控，也不收费。它会改为显示你第一个账号最新的 5 条推文，让你看到提醒会包含什么内容。

## 限制与恢复

- 1 个输入最多包含 100 个账号和关键词。需要更多时，请使用 2 个任务。
- 每个输入最多 10 个 webhook URL，另外还可以加上 Telegram。
- 事件保留 30 天，所以在此期间可以用 `since` 重新保存。
- 提前停止的运行会把它的事件留给下一次运行，不会丢失任何事件。
- 如果运行在预留小时数之后、收费之前结束，则不收费。这些小时数视为已付，而且免费。
- 每次运行都会写入 1 行免费的状态行，所以它的数据集永远不会为空。

## 相关 Xquik Actor

所有 Xquik Actor 都使用同一套提取引擎、先过滤后计费的规则和诊断功能。按你需要的数据选择对应的 Actor。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper) 从搜索、个人资料时间线、列表和帖子 ID 抓取帖子，提供 50 多个过滤条件和扁平导出。适合只要帖子数据、不做分析的场景。每行 $0.00015 起。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper) 从用户名、ID 或 URL 抓取个人资料，以及这些账号的帖子、回复、媒体和关注者。适合从账号而不是搜索入手的场景。每行 $0.00015 起。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper) 抓取帖子下的回复、评论和完整对话，提供 25 多个过滤条件。适合需要帖子下方讨论的场景。每行 $0.00015 起。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper) 按帖子 URL 或 ID 批量抓取回复、引用、转帖者和帖子串。适合衡量谁与帖子有过互动的场景。每行 $0.00015 起。
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper) 抓取引用帖子的帖子，包含文本、媒体、计数和作者，提供 11 个过滤条件。适合研究谁引用了帖子以及说了什么的场景。每条帖子 $0.00015 起。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper) 抓取关注者、正在关注的账号、列表成员、订阅者和社群成员，输出为个人资料行。适合需要受众或成员名单的场景。每条个人资料 $0.00015 起。
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper) 按用户名、简介和位置搜索用户，可按关注者数、认证状态、账号年龄和位置过滤。适合通过搜索建立账号名单的场景。每条个人资料 $0.00015 起。
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper) 通过 X 的“账号所在地”标签、账号连接 X 的方式和用户名更改记录，查看账号所在的位置。适合核实账号所在地的场景。每个账号 $0.00015 起。
- [X Email Scraper](https://apify.com/xquik/x-email-scraper) 从用户名、关注者或用户搜索获取账号在个人资料上公开的邮箱、电话和链接。适合需要个人资料上公开的邮箱的场景。每条个人资料 $0.00015 起。
- [X List Scraper](https://apify.com/xquik/x-list-scraper) 从列表 URL 或 ID 抓取列表帖子、成员和关注者。适合用精选列表确定来源的场景。每行 $0.00015 起。
- [X Community Scraper](https://apify.com/xquik/x-community-scraper) 抓取社群信息、帖子、搜索结果、成员和版主。适合来源是 X 社群的场景。每行 $0.00015 起。
- [X Space Scraper](https://apify.com/xquik/x-space-scraper) 按关键词查找空间，读取标题、状态、时间、听众数、主持人和发言人，也可按 URL 或 ID 读取直播。适合追踪 X 上实时音频和视频的场景。每个空间或直播 $0.00015 起。
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper) 按位置抓取实时趋势，附带排名、帖子量、查询词和 WOEID。适合追踪各地热门话题的场景。每条趋势 $0.00015 起。
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper) 按关键词、地点、办公方式、职级和公司抓取 X 职位，附带薪资和申请链接。适合收集发布在 X 上的职位空缺的场景。每个职位 $0.00015 起。
- [X Article Scraper](https://apify.com/xquik/x-article-scraper) 把长篇 X 文章抓取为 Markdown 和纯文本，附带封面、作者、日期和指标。适合需要文章正文而不是帖子的场景。每篇文章 $0.00015 起。
- [X Media Downloader](https://apify.com/xquik/x-media-downloader) 从帖子或个人资料提取或存储照片、视频和 GIF，可选 MP4 和元数据。适合需要媒体文件本身的场景。每条媒体行 $0.00015 起。
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring) 追踪品牌提及，用 AI 判断相关性和情感、回答客户体验问题，并比较各次运行。适合长期关注一个品牌的场景。每条已分析帖子 $0.0003 起。
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis) 用 AI 为每条帖子标注态度、强度和讽刺概率。适合了解任意话题整体情感的场景。每条已分析帖子 $0.0003 起。
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals) 用 AI 标注看涨、看跌、中性或混合立场，以及内容类型、信心程度和资产相关性。适合关注股票、加密货币或交易讨论的场景。每条已分析帖子 $0.0003 起。
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor) 用 AI 按形式、来源标注和话题相关性标注新闻帖子。适合区分新闻报道和评论的场景。每条已分析帖子 $0.0003 起。
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier) 用 AI 为每条帖子回答你自定义的分类、评分和是非问题。适合预设分析不符合你的标签的场景。每条已分析帖子 $0.0003 起。
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer) 根据 8 个 AI 特征答案，为每条帖子估算 0 到 100 的 Viral Score 和结论。适合研究帖子为何走红或遇冷的场景。每条已分析帖子 $0.0003 起。

## 常见问题

先解答常见问题，再说明在哪里获取帮助。

### 我需要 X Cookie、API 密钥或登录吗？

不需要。Xquik 的 X (Twitter) Monitor 不需要 X Cookie、API 密钥、登录或任何凭据。每次检查都在 Xquik 的基础设施上运行。

### 如何监控一个 Twitter 账号？

把它的用户名粘贴到 `twitterHandles`，选择你想要的事件，再添加一个提醒渠道。Xquik 通常在 X 显示后不到一秒就能捕获每条新推文，每个事件也会保留在数据集中。

### 能监控加密货币账号和币种提及吗？

可以。添加你关注的账号，或添加关键词搜索，例如 cashtag 或合约地址。这些账号的新推文和匹配的推文会以提醒的形式送达 Discord 或 Telegram。

### 提醒多快送达？

Xquik 通常在 X 显示后不到一秒就能捕获被监控账号的新推文、回复、引用、转帖或个人资料变更。提醒会随事件到达而发出，从不等待运行。

### 为什么运行提示监控需要付费套餐？

监控在运行之间全天运行，所以需要 Apify 付费套餐。升级后，用相同的输入再次运行。

### 停止监控后会怎样？

这次运行会停止所有目标并关闭提醒。它会对截至此时监控的小时数收费。然后它会等待大约半分钟，保存最新的事件，确保没有遗漏。已保留的事件在 30 天内仍可读取。

### 如何验证 webhook 签名？

新的通用 webhook 会获得一个签名密钥，只在 `STATUS` 记录中显示 1 次。Xquik 用它为每次推送签名，方式与 Xquik 的 REST webhook 相同。

### 可以使用 API、定时调度和集成吗？

可以。请使用 Apify API 或 Xquik REST API。[API 标签页](https://apify.com/xquik/x-twitter-monitor/api) 提供 Python、JavaScript 和 cURL 示例。Apify [定时调度](https://docs.apify.com/platform/schedules) 可以让监控持续运行。Agent 可以通过 [Apify MCP](https://docs.apify.com/platform/integrations/mcp) 调用它。

### 监控 X 账号合法吗？

Xquik 的 X (Twitter) Monitor 请求的是公开的 X 数据。结果可能包含个人数据。请确认用途合法，并遵守适用于你的隐私规定。不确定时，请咨询专业律师。

### 在哪里获取帮助？

在 Actor 页面提交 issue，或带上运行 ID 联系 <support@xquik.com>。状态页面会解释每次运行，免费诊断信息则覆盖需要注意的运行。

### 可以获得定制方案吗？

可以。访问 [xquik.com](https://xquik.com) 或阅读 [API 文档](https://docs.xquik.com/introduction)。这些资料介绍了仪表盘、API、MCP 服务器和 webhook。
