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

Xquik 是全球最快、最便宜的 X（Twitter）抓取服务，X 数据也最完整。Xquik 的 X Profile Scraper 可以为任意用户名收集个人资料、帖子、回复、媒体和关注者。其他大多数 Apify Actor 在过滤或去重之前就开始收费。Xquik 只对已交付、不重复且符合过滤条件的结果收费。

用用户名、ID 或 URL 抓取 X 个人资料、帖子、回复、媒体和关注者。费用为**每个已交付行 $0.00015**，Apify 另行收取平台使用费。无需 X API 密钥，也无需登录。

> Xquik 是独立的第三方服务，与 X Corp 无关联。“Twitter”和“X”是 X Corp 的商标。

## 个人资料与时间线

- 简介、各项计数、认证状态、账号主人填写的位置、网站和媒体。
- X 尽力提供的公开“账号所在地”（Account based in）标签，有则返回。
- 个人资料“帖子”和“回复”标签页中的行，覆盖所有可用结果页。
- 可选媒体、关注者、正在关注的账号或已认证关注者。
- 可选帖子可按日期、媒体、认证状态、是否转帖和指标过滤。
- 可选个人资料可按受众、活跃度、账号年龄和公开元数据过滤。
- 计费前去除重复项。

## 如何抓取 X 个人资料

1. 在 Apify Console 中打开 Xquik 的 X Profile Scraper。
2. 把用户名添加到 `twitterHandles`，把 URL 添加到 `startUrls`，或把 ID 添加到 `userIds`。
3. 开启 `includeTweets` 或 `includeFollowers` 等资源。
4. 用 `maxItems` 设置交付行数的上限，然后点击 Start。
5. 以 JSON、CSV 或 Excel 格式下载数据集，或使用 Apify API。

## 输入

```json
{
  "twitterHandles": ["OpenAI", "apify"],
  "includeTweets": true,
  "includeReplies": false,
  "maxItems": 10000
}
```

1 个目标就够了。全局 `maxItems` 上限同时计入个人资料和所选资源。

顺利完成的小型运行会跳过 `run-report`，节省 Apify 用量。开启 `alwaysSaveRunRecords` 后，每次运行都会写入报告。

## 输出

个人资料行使用 `resultType: "profile"`。可选行使用 `profileTweet`、`profileReply`、`profileMedia`、`profileFollower`、`profileFollowing` 或 `profileVerifiedFollower`。每行都保留 `sourceTarget`。公开字段沿用 Xquik REST 的响应结构。

X 根据汇总的账号访问 IP 推断 `accountBasedIn`。这个标签不代表国籍、居住地、身份、注册地、发帖地点或确切位置。`observedAt` 记录获取时间。X 没有显示标签时，`accountBasedIn` 为 null。X 隐藏该标签时，行中改为 `accountBasedInUnavailable: true`。

自 2024 年起，X 只向账号本人显示该账号喜欢过的帖子。对其他账号，`includeLikes` 不会返回 `profileLike` 行。

示例使用样例值，实际结果来自实时数据。一行个人资料数据如下：

```json
{
  "resultType": "profile",
  "sourceTarget": "sample_user",
  "username": "sample_user",
  "name": "Sample User",
  "followers": 1200,
  "verified": false,
  "accountBasedInUnavailable": true
}
```

## 抓取 X 个人资料要花多少钱？

所有 Apify 套餐的价格都是每个已交付行 $0.00015。Apify 另行收取平台使用费。

- 每个已交付的数据行收费一次。`diagnostics` 中的诊断信息免费。
- 没有启动费、个人资料费或查询费。
- 计费前先去重。
- Apify 的最高总费用设置会限制交付行数。

## 限制与恢复

Xquik 的 X Profile Scraper 在 1 次运行中读取多个个人资料。你设置的每个过滤条件都作用于时间线行。已交付的行和进度在 Apify 重启后仍会保留。

提取中断时，会写入一条免费的 `partial` 诊断。已获取的结果不受影响。重试前，先查看 `availableResults`、`failedTargets`、`retryable` 和 `nextAction`。Actor 成功退出只说明结果已交付，不代表提取完整。

运行状态会写明提前停止的每个原因。`stopCauses` 列出每个原因，并附上各自的 `message`、`retryable` 和 `nextAction`。原因包括 `target_not_found`、`target_failed`、`pagination_safety_limit` 和 `deadline_reached`。只有在其他原因让运行停止时，缺失的目标才会列入 `stopCauses`。只要有一个原因可重试，整个运行就是 `retryable`。

## 相关 Xquik Actor

所有 Xquik Actor 都使用同一套提取引擎、先过滤后计费的规则和诊断功能。按你需要的数据选择对应的 Actor。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper)：从搜索、个人资料时间线、列表和帖子 ID 抓取帖子，提供 50 多个过滤条件和扁平导出。适合只要帖子数据、不做分析的场景。每行 $0.00015 起。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper)：抓取帖子下的回复、评论和完整对话，提供 25 多个过滤条件。适合需要帖子下方讨论的场景。每行 $0.00015 起。
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

不需要。Xquik 的 X Profile Scraper 不需要 X API 密钥、登录或任何凭据。

### 抓取 X 个人资料合法吗？

Xquik 的 X Profile Scraper 请求的是公开的 X 字段。结果可能包含个人数据。请确认用途合法，并遵守适用的隐私规定。不确定时，请咨询专业律师。

### 为什么我的运行没有返回结果？

先打开免费的 `diagnostics` 输出。空运行的状态会提示你检查目标和过滤条件。`stopCauses` 为每个原因给出下一步操作 `nextAction`。运行会列出它无法读取的每个输入，并说明修正方法。X 隐藏了喜欢记录，所以对其他账号，`includeLikes` 不会返回 `profileLike` 行。

### 可以使用 API、定时调度和集成吗？

可以。你可以从 50 个公开任务或 129 个 Xquik REST 操作中选择。[API 标签页](https://apify.com/xquik/x-profile-scraper/api) 提供 Python、JavaScript 和 cURL 示例。Apify [定时调度](https://docs.apify.com/platform/schedules) 可以按 cron 运行 Xquik 的 X Profile Scraper。Agent 可以通过 [Apify MCP](https://docs.apify.com/platform/integrations/mcp) 调用它。除非需要旧构建，否则请使用 `latest`。

### 在哪里获取帮助？

在 Actor 页面提交 issue，或带上运行 ID 联系 support@xquik.com。键值存储中的免费诊断信息会说明运行为何为空、不完整或被中断。

### 可以获得定制方案吗？

可以。访问 [xquik.com](https://xquik.com) 或阅读 [API 文档](https://docs.xquik.com/introduction)。这些资料介绍了仪表盘、API、MCP 服务器和 webhook。
