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

Xquik 是全球最快、最便宜的 X（Twitter）抓取服务，X 数据也最完整。Xquik 的 X User Search Scraper 按用户名、简介和位置查找用户。其他大多数 Apify Actor 在过滤或去重之前就开始收费。Xquik 只对已交付、不重复且符合过滤条件的结果收费。

按名称、话题、简介或位置进行 Twitter 用户搜索。无需 X API 密钥，也无需登录。费用为**每条已交付个人资料 $0.00015**，Apify 另行收取平台使用费。

> Xquik 是独立的第三方服务，与 X Corp 无关联。“Twitter”和“X”是 X Corp 的商标。

## 账号数据与过滤条件

- 可按受众、帖子、账号年龄、认证状态、网站、位置、简介和用户名过滤。
- 搜索自动补全模式：X 为每个搜索词建议的账号、话题、话题标签和 cashtag。
- 用 `startCursor` 中保存的游标继续 1 个查询。
- 迁移不会丢失已接受的结果。
- 计费前先过滤并去除重复项。

## 如何搜索 X 用户

1. 在 Apify Console 中打开 Xquik 的 X User Search Scraper。
2. 在 `searchTerms` 中输入名称、话题、简介或位置。
3. 添加 `minFollowers`、`verifiedOnly` 或 `locationContains` 等过滤条件。
4. 用 `maxItems` 设置交付个人资料的上限，然后点击 Start。
5. 以 JSON、CSV 或 Excel 格式下载数据集，或使用 Apify API。

## 输入

```json
{
  "searchTerms": ["artificial intelligence", "machine learning"],
  "minFollowers": 1000,
  "maxItems": 10000
}
```

顺利完成的小型运行会跳过 `run-report`，节省 Apify 用量。开启 `alwaysSaveRunRecords` 后，每次运行都会写入报告。

### 从其他用户搜索 Actor 迁移

直接粘贴你现在用的输入。Xquik 的 X User Search Scraper 能读取其他 Actor 的这些字段名。每一项先列出它们的字段，再列出映射到的字段：

- `requireEmail`、`requireWebsite`：`hasEmail`、`hasWebsite`
- `verification`：`any_verified` 设置 `verifiedOnly`，`blue_verified` 设置 `blueVerifiedOnly`，`business` 和 `government` 设置 `verifiedType`。`unverified` 会让运行在读取或计费前停止。
- `bioKeywords`：`bioContains`。只要匹配其中 1 个词即可。
- 只含 1 个值的 `locationKeywords`：`locationContains`。值更多时，运行会在读取或计费前停止。
- 列表形式的 `emailDomains`：`emailDomains`
- `outputEmail`、`resolveShortLinks`：不需要字段。每一行都包含它的邮箱和 X 的完整链接。
- `findEmails`、`extractEmails`：没有对应字段。每一行包含个人资料在 X 上公开的邮箱。运行状态会说明该 Actor 不读取链接的网站。
- `validateEmails`：没有对应字段。该 Actor 不验证邮箱，因此运行状态会说明邮箱按公开的原样提供。

同时设置其中一个名称和它的标准字段时，以标准字段的值为准。运行日志会写明被忽略的字段。

## 搜索自动补全

把 `mode` 设为 `autocomplete`，读取有人输入时 X 给出的建议。每个搜索词返回建议的账号、话题、话题标签和 cashtag。

```json
{
  "searchTerms": ["nasa", "$tsla"],
  "mode": "autocomplete",
  "suggestionTypes": ["users", "cashtags"],
  "maxItems": 100
}
```

- 搜索词以 `#` 开头查话题标签，以 `$` 开头查 cashtag。
- `suggestionTypes` 只保留你选择的类型。
- 每行在 `suggestionType` 中写明类型，在 `suggestion` 中给出要搜索的文本。
- cashtag 行带有 `price`、`marketCap` 和 `dailyChangePercent`。
- 个人资料过滤条件只作用于个人资料搜索。

一行建议数据如下：

```json
{
  "suggestionType": "user",
  "suggestion": "@sample_user",
  "username": "sample_user",
  "name": "Sample User",
  "verified": true,
  "sourceTarget": "sample"
}
```

## 输出

每行包含一条个人资料，`sourceTarget` 中记录它来自哪个查询。

示例使用样例值，实际结果来自实时数据。一行个人资料数据如下：

```json
{
  "username": "sample_user",
  "name": "Sample User",
  "description": "Sample bio about artificial intelligence",
  "followers": 2500,
  "verified": false,
  "sourceTarget": "artificial intelligence"
}
```

## 搜索 X 用户要花多少钱？

所有 Apify 套餐的价格都是每条已交付个人资料 $0.00015。搜索自动补全的建议按每个已交付行收取同样的价格。Apify 另行收取平台使用费。

- 每个已交付的数据行收费一次。`diagnostics` 中的诊断信息免费。
- 没有启动费、查询费或翻页费。
- 计费前先过滤和去重。

## 限制与恢复

提取中断时，会写入一条免费的 `partial` 诊断。已获取的结果不受影响。重试前，先查看 `availableResults`、`failedTargets`、`retryable` 和 `nextAction`。Actor 成功退出只说明结果已交付，不代表提取完整。

运行状态会写明提前停止的每个原因。`stopCauses` 列出每个原因，并附上各自的 `message`、`retryable` 和 `nextAction`。原因包括 `target_not_found`、`target_failed`、`pagination_safety_limit` 和 `deadline_reached`。只有在其他原因让运行停止时，缺失的目标才会一并列出。只要有一个原因可重试，整个运行就是 `retryable`。

## 相关 Xquik Actor

所有 Xquik Actor 都使用同一套提取引擎、先过滤后计费的规则和诊断功能。按你需要的数据选择对应的 Actor。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper)：从搜索、个人资料时间线、列表和帖子 ID 抓取帖子，提供 50 多个过滤条件和扁平导出。适合只要帖子数据、不做分析的场景。每行 $0.00015 起。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper)：从用户名、ID 或 URL 抓取个人资料，以及这些账号的帖子、回复、媒体和关注者。适合从账号而不是搜索入手的场景。每行 $0.00015 起。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper)：抓取帖子下的回复、评论和完整对话，提供 25 多个过滤条件。适合需要帖子下方讨论的场景。每行 $0.00015 起。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper)：按帖子 URL 或 ID 批量抓取回复、引用、转帖者和帖子串。适合衡量谁与帖子有过互动的场景。每行 $0.00015 起。
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper)：抓取引用帖子的帖子，包含文本、媒体、计数和作者，提供 11 个过滤条件。适合研究谁引用了帖子以及说了什么的场景。每条帖子 $0.00015 起。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper)：抓取关注者、正在关注的账号、列表成员、订阅者和社群成员，输出为个人资料行。适合需要受众或成员名单的场景。每条个人资料 $0.00015 起。
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper)：通过 X 的“账号所在地”标签、账号连接 X 的方式和用户名更改记录，查看账号所在的位置。适合核实账号所在地的场景。每个账号 $0.00015 起。
- [X Email Scraper](https://apify.com/xquik/x-email-scraper)：从用户名、关注者或用户搜索获取账号在个人资料上公开的邮箱、电话和链接。适合需要个人资料上公开的邮箱的场景。每条个人资料 $0.00015 起。
- [X List Scraper](https://apify.com/xquik/x-list-scraper)：从列表 URL 或 ID 抓取列表帖子、成员和关注者。适合用精选列表确定来源的场景。每行 $0.00015 起。
- [X Community Scraper](https://apify.com/xquik/x-community-scraper)：抓取社群信息、帖子、搜索结果、成员和版主。适合来源是 X 社群的场景。每行 $0.00015 起。
- [X Space Scraper](https://apify.com/xquik/x-space-scraper)：按关键词查找空间，读取标题、状态、时间、听众数、主持人和发言人，也可按 URL 或 ID 读取直播。适合追踪 X 上实时音频和视频的场景。每个空间或直播 $0.00015 起。
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper)：按位置抓取实时趋势，附带排名、帖子量、查询词和 WOEID。适合追踪各地热门话题的场景。每条趋势 $0.00015 起。
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper)：按关键词、地点、办公方式、职级和公司抓取 X 职位，附带薪资和申请链接。适合收集发布在 X 上的职位空缺的场景。每个职位 $0.00015 起。
- [X Article Scraper](https://apify.com/xquik/x-article-scraper)：把长篇 X 文章抓取为 Markdown 和纯文本，附带封面、作者、日期和指标。适合需要文章正文而不是帖子的场景。每篇文章 $0.00015 起。
- [X Media Downloader](https://apify.com/xquik/x-media-downloader)：从帖子或个人资料提取或存储照片、视频和 GIF，可选 MP4 和元数据。适合需要媒体文件本身的场景。每条媒体行 $0.00015 起。
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring)：追踪品牌提及，用 AI 判断相关性和情感、回答客户体验问题，并比较各次运行。适合长期关注一个品牌的场景。每条已分析帖子 $0.0003 起。
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis)：用 AI 为每条帖子标注态度、强度和讽刺概率。适合了解任意话题整体情感的场景。每条已分析帖子 $0.0003 起。
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)：用 AI 标注看涨、看跌、中性或混合立场，以及内容类型、信心程度和资产相关性。适合关注股票、加密货币或交易讨论的场景。每条已分析帖子 $0.0003 起。
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)：用 AI 按形式、来源标注和话题相关性标注新闻帖子。适合区分新闻报道和评论的场景。每条已分析帖子 $0.0003 起。
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)：用 AI 为每条帖子回答你自定义的分类、评分和是非问题。适合预设分析不符合你的标签的场景。每条已分析帖子 $0.0003 起。
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)：根据 8 个 AI 特征答案，为每条帖子估算 0 到 100 的 Viral Score 和结论。适合研究帖子为何走红或遇冷的场景。每条已分析帖子 $0.0003 起。

## 常见问题

先解答常见问题，再说明在哪里获取帮助。

### 我需要 X API 密钥或登录吗？

不需要。Xquik 的 X User Search Scraper 不需要 X API 密钥、登录或任何凭据。

### 抓取 X 账号合法吗？

Xquik 的 X User Search Scraper 请求的是公开的 X 字段。结果可能包含个人数据。请确认用途合法，并遵守适用的隐私规定。不确定时，请咨询专业律师。

### 为什么我的运行没有返回结果？

先打开免费的 `diagnostics` 输出。空运行的状态会提示你检查目标和过滤条件。`stopCauses` 为每个原因给出下一步操作 `nextAction`。

### 可以使用 API、定时调度和集成吗？

可以。你可以从 50 个公开任务或 Xquik REST API 中选择。[API 标签页](https://apify.com/xquik/x-user-search-scraper/api) 提供 Python、JavaScript 和 cURL 示例。Apify [定时调度](https://docs.apify.com/platform/schedules) 可以按 cron 运行 Xquik 的 X User Search Scraper。Agent 可以通过 [Apify MCP](https://docs.apify.com/platform/integrations/mcp) 调用它。除非需要旧构建，否则请使用 `latest`。

### 在哪里获取帮助？

在 Actor 页面提交 issue，或带上运行 ID 联系 support@xquik.com。键值存储中的免费诊断信息会说明运行为何为空、不完整或被中断。

### 可以获得定制方案吗？

可以。访问 [xquik.com](https://xquik.com) 或阅读 [API 文档](https://docs.xquik.com/introduction)。这些资料介绍了仪表盘、API、MCP 服务器和 webhook。
