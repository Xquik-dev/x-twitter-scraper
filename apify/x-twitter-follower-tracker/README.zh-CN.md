[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · **简体中文** · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer 将 Xquik MCP 连接到编程 Agent](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[观看 Framer 如何在 Claude Code、Codex、Cursor 等工具中使用 Xquik 抓取工具](https://youtu.be/4UOSpoOoC3Y?t=367)，从 6:07 开始。

Xquik 是全球最快、最便宜的 X（Twitter）抓取服务，X 数据也最完整。Xquik 的 X (Twitter) Follower Tracker 会显示你选择的账号新增和失去的关注者，以及它们关注或取消关注了谁。每条提醒都包含另一个账号的完整资料。其他大多数 Apify Actor 在过滤或去重之前就开始收费。Xquik 只对已交付且不重复的结果收费，在这里也只对监控运行的小时数收费。

粘贴要追踪的账号，然后点击 Start。提醒会在运行之间送达。费用为**每个 monitor-hour $0.0045**。事件和提醒免费，Apify 另行收取平台使用费。

> Xquik 是独立的第三方服务，与 X Corp 无关联。
> “Twitter”和“X”是 X Corp 的商标。

## 为什么使用 X (Twitter) Follower Tracker？

- **看到谁取消关注了你。** 每条失去关注者的提醒都会写明账号，即使该账号已被 X 冻结。
- **追踪任意公开账号。** 监控你自己的账号、竞争对手的账号或客户的账号。
- **老关注者不会触发提醒。** 第 1 次运行按现状记录每份名单。只有之后的变化才会提醒你。
- **在你的聊天应用中接收提醒。** 把提醒发送到 Telegram、Discord 或 Slack。Telegram 不需要聊天 ID。任意 HTTPS webhook 也会收到完整事件。
- **确认提醒能送达。** 每个新的 webhook、Slack 或 Discord URL 都会收到 1 条测试提醒。运行状态会说明它是否送达。
- **确认监控正在工作。** 每次运行的状态页面都会说明这一点，并给出 1 个带按钮的下一步操作。
- **不会悄无声息地暂停。** 没有运行的监控暂停前 4 小时，你的提醒会发出警告。下一次运行会恢复它。
- **不需要 X 账号。** 你无需提供 X 登录信息或 API 密钥。

### 准确的数据行

- 行中的每个 ID 都精确无误。
- 认证徽章与 `x.com` 上显示的一致。
- 行中只包含公开数据。
- 广告&推广条目绝不会进入你的数据行。
- 监控只报告真实的删除和取消关注。

### 数据保持最新

- X 发布改动后，读取仍能正常进行。

### 速度

- 单个慢页面不会拖慢整个运行。
- 卡住的 Actor 调用会自动恢复。

### 公平计费

- 监控只有 1 个固定的小时价格，事件和 webhook 都已包含在内。
- 监控 Actor 只对监控运行的小时数计费。

### 可靠性

- 偶发错误不会让运行失败。
- Xquik 短暂中断不会让 Actor 失败。
- Actor 运行在重启后继续，且不会重复。
- 已停止的运行会保留它的行&报告。
- 无法启动的运行也会说明原因。
- Webhook 带有签名，并能防重放。
- 宕机的 webhook 在最多 7 天内仍会收到它的事件。
- 即使你的 webhook 宕机过，新事件也会按时送达。
- Webhook 绝不会发往私有或本地主机。
- 聊天提醒按顺序送达，不会触发速率限制。
- 支持团队能准确看到某个请求或运行返回了什么。

### 为 Agent 设计

- Actor 接受为其他 Actor 编写的输入。
- 每次运行都会说明结束原因&是否需要重试。

### 质量检查

- X 显示的每个字段，要么已提供，要么是有意省略，要么已证实不存在。
- Xquik 会针对 X 实时测试每一种读取。
- Actor 的 README、schema 和实际输出使用相同的字段名。

## X (Twitter) Follower Tracker 会发送哪些数据？

- 新增关注者，即开始关注你监控的每个账号的账号。
- 失去的关注者，即离开它关注者列表的账号。
- 新关注和取消关注，即它开始或停止关注的账号。
- 每条提醒都附带另一个账号的完整资料，例如名称、简介和关注者数。
- 每个事件都会写入本次运行的数据集和 1 个历史数据集。

## 如何追踪 Twitter 关注者

监控需要 Apify 付费套餐。[选择套餐](https://apify.com/pricing?fpr=xquik)，然后回到这里点击 Try for free。

1. 在 Apify Console 中打开 Xquik 的 X (Twitter) Follower Tracker。
2. 把用户名粘贴到 `twitterHandles`。
3. 开启 `telegram`，或把 Discord 或 Slack 的 webhook URL 粘贴到 `webhookUrls`。
4. 点击 Start。追踪在这次运行中开始。
5. 添加一个定时调度，每小时用相同的输入运行该 Actor。

之后的每次运行都会对上次运行以来监控的小时数收费，并把新事件保存到自己的数据集。24 小时没有运行的监控会暂停。暂停前 4 小时，你的提醒会发出警告。下一次运行会恢复监控，并先收取未付的小时数。

## 追踪器能看到什么

- 任意公开账号的新增关注者和新关注。
- 关注者不超过 100,000 的账号的失去的关注者，以及关注不超过 100,000 个账号的账号的取消关注。超过这个数量时，在最新的 5,000 个中查看。
- 大型列表深处的失去的关注者可能比新增关注者更晚送达，因为 Xquik 检查整个列表的频率低于检查最新关注者的频率。
- 账号被 X 冻结或移除的关注者也算作失去的关注者。
- 离开后又回来的账号可能再次算作新增关注者。
- 第一次运行会按现状记录每个列表，所以现有的关注者都不会算作新增。
- 受保护的账号会隐藏它的列表，所以不会发送任何内容。

## 输入

| 字段 | 作用 |
| --- | --- |
| `twitterHandles` | 带或不带 @ 的用户名，或 `x.com` 个人资料 URL，每行 1 个。 |
| `monitorName` | 在没有已保存任务的运行中，为这组账号命名。 |
| `followerChanges` | 新增和失去的关注者。默认开启。 |
| `followingChanges` | 新关注和取消关注。默认开启。 |
| `webhookUrls` | HTTPS URL，每行 1 个。Actor 会识别 Slack 和 Discord 的 URL。 |
| `telegram` | 通过运行给出的链接，把提醒发送到 Telegram。 |
| `stop` | 停止监控并关闭提醒。 |

1 个输入最多包含 100 个账号。Telegram 不需要用户名或聊天 ID。运行状态会给出一个链接。打开链接并点击 Start，提醒就会发到那个聊天。表单隐藏了 X (Twitter) Monitor 的推文事件，发送这些事件的输入仍然有效。

以下输入可直接复制。

```json
{ "twitterHandles": ["xquikcom"], "telegram": true }
```

```json
{
  "twitterHandles": ["yourhandle"],
  "followingChanges": false,
  "webhookUrls": "https://hooks.slack.com/services/T000/B000/XXXX"
}
```

## 输出

每次运行返回 4 项输出。

- **状态页面**，即 `STATUS.html` 记录。它显示监控是否在运行、带按钮的唯一下一步、本次运行保存和收费的内容、监控目标和每个提醒渠道。Output 标签页会显示它。
- **状态记录**，即 `STATUS` 记录。它以 JSON 格式保存同一状态。
- **新事件**，即本次运行的数据集。它按从旧到新的顺序列出每个新事件，最后是 1 行状态。
- **诊断**，只在出现需要注意的问题时写入。

一行事件就是 Xquik REST API 提供的原样事件，包含所有字段。状态记录包含 `state`、`targets`、`destinations`、`eventsSaved`、`hoursCharged`、`paidThrough`、`pausesAt`、`nextStep`、`nextStepAction` 和 `nextStepUrl`，与 X (Twitter) Follower Tracker 显示的一致。

你账号中的历史数据集保存该监控的每个事件，每个事件只保存 1 次。它的名称以 `x-monitor-` 开头。

## 面向 AI Agent

1 次调用就是全部 API。每次调用都会启动或更新监控，对上次调用以来监控的小时数收费，并只返回新内容。任何调用都不会对同一小时收费 2 次。启动或更新监控的调用很快结束，不会超出 Apify MCP 的等待时间。停止大约需要半分钟，因为它会先收集最后的事件。

以下输入会启动或继续一个监控。

```json
{ "twitterHandles": ["xquikcom"], "monitorName": "agent-demo" }
```

本次运行的数据集先列出新事件，再列出 1 行 `resultType` 为 `status` 的数据。其中 `state` 说明监控是否在运行，`nextStep` 说明下一步该做什么。要检查监控，用相同的输入再次调用该 Actor。这不会改变任何设置，只对已经监控的小时数收费。

监控至少每 24 小时需要运行 1 次，才能继续监控。Apify 的 MCP 服务器没有定时调度工具，所以你无法添加调度。请让用户在 `nextStepUrl` 中的页面上添加一个 Apify 定时调度，它会每小时用相同的输入运行该 Actor。用相同的输入加上 `"stop": true` 即可停止。

## Twitter 关注者追踪器要花多少钱？

所有 Apify 付费套餐的价格都是每个 monitor-hour $0.0045。1 个账号就是 1 个监控。Apify 另行收取平台使用费。

- 追踪 1 个账号 30 天，约 $3.24。
- 追踪 10 个账号 30 天，约 $32.40。
- 事件和提醒免费，无论收到多少。
- 没有启动费。运行只对已经监控的小时数收费。
- X 上不存在的目标不会被监控，也不收费。
- 每次运行的最高费用会限制每笔收费。超出的小时数会留到下一次运行。

与它支付的监控小时数相比，每小时运行一次的定时调度产生的 Apify 用量很小。每隔几分钟运行一次会增加用量，但对提醒没有任何影响，因为提醒本来就在运行之间送达。

监控需要 [Apify 付费套餐](https://apify.com/pricing?fpr=xquik)。在免费套餐中，运行不会启动监控，也不收费。它会改为显示你第一个账号最新的 5 条推文。

## 限制&恢复

- 1 个输入最多包含 100 个账号。需要更多时，请使用 2 个任务。
- 每个输入最多 10 个 webhook URL，另外还可以加上 Telegram。
- 事件保留 30 天，所以在此期间可以用 `since` 重新保存。
- 提前停止的运行会把它的事件留给下一次运行，不会丢失任何事件。
- 每次运行都会写入 1 行免费的状态行，所以它的数据集永远不会为空。
- Xquik 的每个监控 Actor 都按相同的小时价格收费。一次运行会支付你所有监控中最早的未付小时数，无论是哪个 Actor 监控的。

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

不需要。Xquik 的 X (Twitter) Follower Tracker 不需要 X Cookie、API 密钥、登录或任何凭据。每次检查都在 Xquik 的基础设施上运行。

### 能看到谁离开了我在 X 上的关注者列表吗？

能。监控你自己的公开账号。每个离开其关注者列表的账号都会发送一条失去的关注者提醒，附带完整资料。这包括取消关注的账号，以及被 X 冻结或移除的账号。

### 能显示一个账号关注了谁吗？

能。`followingChanges` 默认开启，所以被监控账号开始或停止关注的每个账号都会发送提醒。

### 对拥有数百万关注者的账号有效吗？

它会列出任意公开账号的新增关注者。失去的关注者会在关注者不超过 100,000 的账号上列出。超过这个数量时，在最新的 5,000 个中查看。

### 它也发送推文吗？

默认不发送。通过 `eventTypes` 开启推文事件，或用 X (Twitter) Monitor 获取推文。

### 为什么运行提示监控需要付费套餐？

监控在运行之间全天运行，所以需要 Apify 付费套餐。升级后，用相同的输入再次运行。

### 停止监控后会怎样？

这次运行会停止所有目标并关闭提醒。它会对截至此时监控的小时数收费。然后它会等待大约半分钟，保存最新的事件，确保没有遗漏。已保留的事件在 30 天内仍可读取。

### 可以使用 API、定时调度&集成吗？

可以。请使用 Apify API 或 Xquik REST API。[API 标签页](https://apify.com/xquik/x-twitter-follower-tracker/api) 提供 Python、JavaScript 和 cURL 示例。Apify [定时调度](https://docs.apify.com/platform/schedules) 可以让监控持续运行。Agent 可以通过 [Apify MCP](https://docs.apify.com/platform/integrations/mcp) 调用它。

### 监控 X 账号合法吗？

Xquik 的 X (Twitter) Follower Tracker 请求的是公开的 X 数据。结果可能包含个人数据。请确认用途合法，并遵守适用于你的隐私规定。不确定时，请咨询专业律师。

### 在哪里获取帮助？

在 [Issues 标签页](https://apify.com/xquik/x-twitter-follower-tracker/issues) 提交 issue，并附上运行 ID。状态页面会解释每次运行，免费诊断信息则覆盖需要注意的运行。

### 可以获得定制方案吗？

可以。请在 [Issues 标签页](https://apify.com/xquik/x-twitter-follower-tracker/issues) 说明你的需求。Xquik 还提供仪表盘、REST API、MCP 服务器和 webhook。你可以在 Xquik 的 [Apify 资料页](https://apify.com/xquik) 找到它的网站。
