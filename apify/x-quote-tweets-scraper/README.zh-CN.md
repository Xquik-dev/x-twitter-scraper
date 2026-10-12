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

Xquik 是全球最快、最便宜的 X（Twitter）抓取服务，X 数据也最完整。Xquik 的 X Quote Tweets Scraper 收集引用了公开 X 帖子的帖子，无需 X Cookie，也无需登录。其他大多数 Apify Actor 在过滤或去重之前就开始收费。Xquik 只对已交付、不重复且符合过滤条件的结果收费。

粘贴帖子 URL 或帖子 ID，1 次运行即可拿到 X 为每条帖子提供的全部引用帖子。每行包含引用帖子、其作者的完整公开个人资料和被引用的帖子。费用为**每个已交付行 $0.00015**，Apify 另行收取平台使用费。

> Xquik 是独立的第三方服务，与 X Corp 无关联。“Twitter”和“X”是 X Corp 的商标。

## 每行都包含的引用数据

- 引用帖子的完整正文、链接、语言和发帖时间。
- 喜欢数、回复数、转帖数、引用数、查看次数和书签数。
- 作者的完整公开个人资料：名称、简介、关注者数、认证状态等。
- 照片、视频和 GIF，以及它们的链接。
- 正文中的话题标签、提及和链接。
- 被引用的帖子本身，结构相同。
- `sourceTarget`，即该行引用的输入帖子。
- `position` 是该行在运行中的位置，`scrapedAt` 是它的交付时间。
- 1 次运行可读取多条帖子，每条都读完 X 提供的全部内容。
- 最新的排在前面，或 X 排名最高的引用帖子排在前面。
- 11 个过滤条件：语言、日期、媒体类型、6 项最低数量和已认证作者。
- 想要的是人而不是帖子时，每位作者 1 行。
- x.com 和 twitter.com 的帖子 URL，或数字帖子 ID。
- 计费前去除重复项。
- 通过 Apify 数据集导出 JSON、CSV、Excel、XML 和 RSS。
- Apify 迁移后，运行会从保存的状态继续。

## 如何抓取引用帖子

1. 在 Apify Console 中打开 Xquik 的 X Quote Tweets Scraper。
2. 把帖子 URL 粘贴到 `startUrls`，或把帖子 ID 粘贴到 `tweetIds`。
3. 用 `maxItems` 设置交付行数的上限，然后点击 Start。
4. 以 JSON、CSV 或 Excel 格式下载数据集，或使用 Apify API。

整个过程中，你都不需要输入 X Cookie、登录信息或 API 密钥。各次运行之间，你也不用传递翻页游标。

## 输入

`startUrls` 中的每个帖子 URL 可以写成普通字符串，也可以写成 `{ "url": "..." }` 对象。`tweetIds` 接受帖子 ID，也可以填帖子 URL：

```json
{
  "startUrls": [
    "https://x.com/OpenAI/status/2082577277246972300",
    { "url": "https://twitter.com/jack/status/20" }
  ],
  "tweetIds": ["2082201573976056245"],
  "maxItems": 1000
}
```

排序、过滤条件和上限与帖子写在一起：

```json
{
  "tweetIds": ["2082577277246972300"],
  "sort": "top",
  "language": "en",
  "minLikes": 10,
  "sinceDate": "2026-10-01",
  "maxItemsPerTarget": 200,
  "uniqueAuthors": true
}
```

- `sort` 设为 `latest` 时，最新的引用帖子排在前面。设为 `top` 时，返回 X 排名最高的引用帖子。
- `includeReplies` 保留引用了该帖子的回复，与 X 的“引用”页面列出的一致。只要你不关闭，它就是开启的。
- `uniqueAuthors` 保留每位作者在这次运行中的第 1 条引用帖子。这样，数据集中每位作者占 1 行，而不是每条引用帖子占 1 行。你按已交付的行付费。
- `maxItems` 为整个运行设置上限，`maxItemsPerTarget` 为每条帖子设置上限。
- 过滤条件包括 `language`、`sinceDate`、`untilDate`、`mediaType`、`minLikes`、`minReplies`、`minRetweets`、`minQuotes`、`minViews`、`minBookmarks` 和 `verifiedOnly`。

输入中出现 2 次的帖子只读取 1 次。`tweetUrls`、`tweetId`、`tweets` 和 `tweet_id` 是帖子输入的其他名称，用法相同。顺利完成的小型运行会跳过 `run-report`，节省 Apify 用量。开启 `alwaysSaveRunRecords` 后，每次运行都会写入报告。

## 输出

每条引用帖子是数据集中的 1 行，包含 `id`、`url`、`text`、`createdAt`、`lang`、`likeCount`、`replyCount`、`retweetCount`、`quoteCount`、`viewCount`、`bookmarkCount`、`media`、`entities`、`author`、`quotedTweetId` 和 `quoted_tweet`。Actor 会添加 `sourceTarget`、`position`、`scrapedAt` 和 `resultType`。来源缺少的字段不会出现。Xquik 的 X Quote Tweets Scraper 不编造任何值。

示例使用样例值，实际结果来自实时数据。一行数据如下：

```json
{
  "id": "1900000000000000001",
  "url": "https://x.com/sample_user/status/1900000000000000001",
  "text": "Worth a read. The second chart says it all.",
  "createdAt": "2026-10-11T09:00:00.000Z",
  "lang": "en",
  "likeCount": 42,
  "replyCount": 3,
  "retweetCount": 5,
  "quoteCount": 1,
  "viewCount": 1800,
  "bookmarkCount": 2,
  "author": {
    "id": "1234567890",
    "username": "sample_user",
    "name": "Sample User",
    "followers": 1200,
    "verified": true
  },
  "quotedTweetId": "1900000000000000000",
  "quoted_tweet": {
    "id": "1900000000000000000",
    "text": "Our new report is out."
  },
  "resultType": "quotes",
  "sourceTarget": "1900000000000000000",
  "position": 1,
  "scrapedAt": "2026-10-12T09:00:00.000Z"
}
```

`position` 在过滤和去重之后，从 1 开始为已交付的行计数。数据集有 2 个表格视图。“Quote Tweets”显示每条引用帖子及其各项数量。“Quote Authors”显示谁引用了每条帖子，并把作者的个人资料字段作为列。

## X 提供的内容

有 2 项限制来自 X，Xquik 的 X Quote Tweets Scraper 会明确说明：

- 对于引用量非常大的帖子，X 的搜索决定引用帖子能追溯到多早。运行会读取 X 提供的每条引用帖子，然后停止。
- `top` 是 X 的排名，不是 Xquik 的排名。它不是按喜欢数排序。排在后面的行，喜欢数可能比前面的行多。

## 抓取引用帖子要花多少钱？

所有 Apify 套餐的价格都是每个已交付行 $0.00015。Apify 另行收取平台使用费。

- 每个已交付的数据行收费一次。`diagnostics` 中的诊断信息免费。
- 没有启动费。
- X 上不存在的帖子不添加行，也不收费。
- 过滤条件和 `uniqueAuthors` 在计费前生效，所以被排除的引用帖子不收费。
- 计费前先去重。
- Apify 的最高总费用设置会限制交付行数。

## 限制与恢复

Xquik 的 X Quote Tweets Scraper 在 1 次运行中读取多条帖子。已交付的行和进度在 Apify 重启后仍会保留。该 Actor 本身不设时间限制，会遵守你设置的任何 Apify 超时。

运行状态会列出 X 上找不到匹配的帖子，并提示你检查 URL 或 ID。提取中断时，会写入一条免费的 `partial` 诊断。已获取的结果不受影响。重试前，先查看 `availableResults`、`failedTargets`、`retryable` 和 `nextAction`。Actor 成功退出只说明结果已交付，不代表提取完整。

运行状态会写明提前停止的每个原因。`stopCauses` 列出每个原因，并附上各自的 `message`、`retryable` 和 `nextAction`。只要有一个原因可重试，整个运行就是 `retryable`。

## 相关 Xquik Actor

所有 Xquik Actor 都使用同一套提取引擎、先过滤后计费的规则和诊断功能。按你需要的数据选择对应的 Actor。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper)：从搜索、个人资料时间线、列表和帖子 ID 抓取帖子，提供 50 多个过滤条件和扁平导出。适合只要帖子数据、不做分析的场景。每行 $0.00015 起。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper)：从用户名、ID 或 URL 抓取个人资料，以及这些账号的帖子、回复、媒体和关注者。适合从账号而不是搜索入手的场景。每行 $0.00015 起。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper)：抓取帖子下的回复、评论和完整对话，提供 25 多个过滤条件。适合需要帖子下方讨论的场景。每行 $0.00015 起。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper)：按帖子 URL 或 ID 批量抓取回复、引用、转帖者和帖子串。适合衡量谁与帖子有过互动的场景。每行 $0.00015 起。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper)：抓取关注者、正在关注的账号、列表成员、订阅者和社群成员，输出为个人资料行。适合需要受众或成员名单的场景。每条个人资料 $0.00015 起。
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper)：按用户名、简介和位置搜索用户，可按关注者数、认证状态、账号年龄和位置过滤。适合通过搜索建立账号名单的场景。每条个人资料 $0.00015 起。
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

### 我需要 X Cookie、API 密钥或登录吗？

不需要。Xquik 的 X Quote Tweets Scraper 不需要 X Cookie、API 密钥、登录或任何凭据。每次读取都在 Xquik 的基础设施上运行。

### 1 次运行可以为多条帖子抓取引用帖子吗？

可以。需要多少帖子 URL 或帖子 ID，就粘贴多少。每行的 `sourceTarget` 说明它引用的是哪条帖子。

### 1 次运行可以返回多少条引用帖子？

1 次运行可以返回 100,000 行以上。要完整导出时，把 `maxItems` 调到表单默认的 1,000 以上。

### 为什么引用量巨大的帖子返回的引用帖子比计数器显示的少？

对于引用量非常大的帖子，X 的搜索决定引用帖子能追溯到多早。运行会交付 X 提供的每条引用帖子。计数器还包含来自私密账号或已被移除账号的引用帖子。

### 如何让每个引用了帖子的人只占 1 行？

开启 `uniqueAuthors`。运行会保留每位作者的第 1 条引用帖子，跳过他们之后的引用帖子，且不收费。

### 抓取引用帖子合法吗？

Xquik 的 X Quote Tweets Scraper 请求的是公开的 X 帖子。结果可能包含个人数据。请确认用途合法，并遵守适用的隐私规定。不确定时，请咨询专业律师。

### 为什么我的运行没有返回结果？

先查看运行状态。空运行的状态会说明，是 X 上找不到匹配的帖子，还是该帖子没有符合你过滤条件的引用帖子。出现需要注意的问题时，会生成免费的 `diagnostics` 输出。其中的 `stopCauses` 为每个原因给出下一步操作 `nextAction`。

### 可以使用 API、定时调度和集成吗？

可以。请使用 Apify API 或 Xquik REST API。[API 标签页](https://apify.com/xquik/x-quote-tweets-scraper/api) 提供 Python、JavaScript 和 cURL 示例。Apify [定时调度](https://docs.apify.com/platform/schedules) 可以按 cron 运行 Xquik 的 X Quote Tweets Scraper。Agent 可以通过 [Apify MCP](https://docs.apify.com/platform/integrations/mcp) 调用它。除非需要旧构建，否则请使用 `latest`。

### 在哪里获取帮助？

在 Actor 页面提交 issue，或带上运行 ID 联系 <support@xquik.com>。键值存储中的免费诊断信息会说明需要注意的运行。没有拿到任何行的运行会在状态中说明原因。

### 可以获得定制方案吗？

可以。访问 [xquik.com](https://xquik.com) 或阅读 [API 文档](https://docs.xquik.com/introduction)。这些资料介绍了仪表盘、API、MCP 服务器和 webhook。
