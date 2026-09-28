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

Xquik 是全球最快、最便宜的 X（Twitter）抓取服务，X 数据也最完整。Xquik 的 X Article Scraper 把长篇 X 文章转换为 Markdown 和纯文本，还会附上封面、作者、日期和指标。其他大多数 Apify Actor 在过滤或去重之前就开始收费。Xquik 只对已交付、不重复且符合过滤条件的结果收费。

从帖子 URL 或数字帖子 ID 提取长篇 X 文章。费用为**每篇已交付文章 $0.00015**，Apify 另行收取平台使用费。无需 X API 密钥，也无需登录。

> Xquik 是独立的第三方服务，与 X Corp 无关联。“Twitter”和“X”是 X Corp 的商标。

## 文章数据与格式

- Markdown 保留区块、粗体和斜体范围。
- `contents` 区块保留原始格式。
- 同一次运行可以混用帖子 URL 和数字帖子 ID。
- 计费前去除重复项。

Xquik 的 X Article Scraper 从不猜测链接元数据。Apify 会把 Markdown 显示为纯文本。

## 如何抓取 X 文章

1. 在 Apify Console 中打开 Xquik 的 X Article Scraper。
2. 把文章的帖子 URL 粘贴到 `startUrls`，或把帖子 ID 粘贴到 `tweetIds`。
3. 用 `maxItems` 设置交付文章的上限，然后点击 Start。
4. 以 JSON、CSV 或 Excel 格式下载数据集，或使用 Apify API。

## 输入

| 字段 | 用途 | 默认值 |
| --- | --- | --- |
| `startUrls` | 公开文章的帖子 URL | 无 |
| `tweetIds` | 文章的数字帖子 ID | 无 |
| `maxItems` | 已交付文章的全局上限 | `100000` |
| `dedupeAcrossTargets` | 计费前移除重复的文章 ID | `true` |
| `maxConcurrency` | 并行读取的独立文章数 | `100` |
| `alwaysSaveRunRecords` | 每次运行都保存 `run-report` | `false` |

## 输出

Output 标签页会打开 `Articles`。`Results` 链接到数据行。`Run Report` 链接到计数、完成情况、耗时和异常。运行遇到问题或规模较大时，会写入这份报告。顺利完成的小型运行则在运行状态中给出计数。开启 `alwaysSaveRunRecords` 后，每次运行都会写入报告。

示例使用样例值，实际结果来自实时数据。一行文章数据包含以下字段：

```json
{
  "markdown": "# Article title\n\nPlain Article text",
  "contents": [{ "type": "paragraph", "text": "Plain Article text" }]
}
```

数据行还包含作者、来源、封面、时间和指标。可以导出为 JSON 或表格。

## 抓取 X 文章要花多少钱？

所有 Apify 套餐的价格都是每篇已交付文章 $0.00015。Apify 另行收取平台使用费。

- 每个已交付的数据行收费一次。`diagnostics` 中的诊断信息免费。
- 没有启动费。
- 计费前先去重。

## 限制与恢复

Xquik 的 X Article Scraper 只返回 X 公开展示的文章。

提取中断时，会写入一条免费的 `partial` 诊断。已获取的结果不受影响。重试前，先查看 `availableResults`、`failedTargets`、`retryable` 和 `nextAction`。Actor 成功退出只说明结果已交付，不代表提取完整。

运行状态会写明提前停止的每个原因。`stopCauses` 列出每个原因，并附上各自的 `message`、`retryable` 和 `nextAction`。原因包括 `target_not_found`、`target_failed`、`pagination_safety_limit` 和 `deadline_reached`。只有在其他原因让运行停止时，缺失的目标才会列入 `stopCauses`。只要有一个原因可重试，整个运行就是 `retryable`。

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
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper)：按位置抓取实时趋势，附带排名、帖子量、查询词和 WOEID。适合追踪各地热门话题的场景。每条趋势 $0.00015 起。
- [X Media Downloader](https://apify.com/xquik/x-media-downloader)：从帖子或个人资料提取或存储照片、视频和 GIF，可选 MP4 和元数据。适合需要媒体文件本身的场景。每条媒体行 $0.00015 起。
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring)：追踪品牌提及，用 AI 判断相关性和情感、回答客户体验问题，并比较各次运行。适合长期关注一个品牌的场景。每条已分析帖子 $0.0003 起。
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis)：用 AI 为每条帖子标注态度、强度和讽刺概率。适合了解任意话题整体情感的场景。每条已分析帖子 $0.0003 起。
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)：用 AI 标注看涨、看跌、中性或混合立场，以及内容类型、信心程度和资产相关性。适合关注股票、加密货币或交易讨论的场景。每条已分析帖子 $0.0003 起。
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)：用 AI 按形式、来源标注和话题相关性标注新闻帖子。适合区分新闻报道和评论的场景。每条已分析帖子 $0.0003 起。
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)：用 AI 为每条帖子回答你自定义的分类、评分和是非问题。适合预设分析不符合你的标签的场景。每条已分析帖子 $0.0003 起。
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)：根据 8 个 AI 特征答案，为每条帖子估算 0 到 100 的 Viral Score 和结论。适合研究帖子为何走红或遇冷的场景。每条已分析帖子 $0.0003 起。

## 常见问题

### 我需要 X API 密钥或登录吗？

不需要。Xquik 的 X Article Scraper 不需要 X API 密钥、登录或任何凭据。

### 抓取 X 文章合法吗？

Xquik 的 X Article Scraper 请求的是公开的 X 字段。结果可能包含个人数据。请确认用途合法，并遵守适用的隐私规定。不确定时，请咨询专业律师。

### 为什么我的运行没有返回结果？

先打开免费的 `diagnostics` 输出。空运行的状态会提示你检查目标和过滤条件。`stopCauses` 为每个原因给出下一步操作 `nextAction`。运行会提示它无法读取的链接，并说明修正方法。Xquik 的 X Article Scraper 只返回 X 公开展示的文章。

### 可以使用 API、定时调度和集成吗？

可以。你可以从 50 个公开任务或 129 个 Xquik REST 操作中选择。[API 标签页](https://apify.com/xquik/x-article-scraper/api) 提供 Python、JavaScript 和 cURL 示例。Apify [定时调度](https://docs.apify.com/platform/schedules) 可以按 cron 运行 Xquik 的 X Article Scraper。Agent 可以通过 [Apify MCP](https://docs.apify.com/platform/integrations/mcp) 调用它。读取单篇文章可以用 [Xquik REST](https://docs.xquik.com/api-reference/x/get-article)。除非需要旧构建，否则请使用 `latest`。

### 在哪里获取帮助？

在 Actor 页面提交 issue，或带上运行 ID 联系 support@xquik.com。键值存储中的免费诊断信息会说明运行为何为空、不完整或被中断。

### 可以获得定制方案吗？

可以。访问 [xquik.com](https://xquik.com) 或阅读 [API 文档](https://docs.xquik.com/introduction)。这些资料介绍了仪表盘、API、MCP 服务器和 webhook。
