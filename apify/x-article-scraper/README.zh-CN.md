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
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">观看 Framer 如何将 Xquik 抓取工具与 Claude Code、Codex、Cursor 等配合使用，从 6:07 开始。</a>
</td></tr></table>

Xquik 是全球最快、最便宜的 X（Twitter）抓取工具服务，拥有最完整的 X 数据。X Article
Scraper 能将长篇 X Article 转换为 Markdown、纯文本、封面、作者、日期与指标。其他所有
Apify Actor 都会在过滤或去重之前就收费。Xquik 只为已交付、唯一且符合过滤条件的结果收费。

从帖子 URL 或数字 Tweet ID 提取长篇 X Article。无需 X API 密钥或登录。

## 输入参数

| 字段                   | 用途                                | 默认值   |
| --------------------- | ------------------------------------ | -------- |
| `startUrls`           | 公开 Article 帖子 URL                | 无       |
| `tweetIds`            | 数字 Article Tweet ID                | 无       |
| `maxItems`            | 全局已交付 Article 上限               | `100000` |
| `dedupeAcrossTargets` | 在计费前移除重复的 Article ID         | `true`   |
| `maxConcurrency`      | 并行独立 Article 读取数               | `100`    |

## 输出

Output 标签页打开 `Articles`。`Results` 链接到各行数据。`Run Report` 链接到计数、
完成情况、耗时与异常。

```json
{
  "markdown": "# Article title\n\nPlain Article text",
  "contents": [{ "type": "paragraph", "text": "Plain Article text" }]
}
```

各行还包含作者、来源、封面、时间与指标。可导出 JSON 或表格。

## 完成与计费

去重在计费前进行。按已交付的数据行付费，没有起始费用。每个 Apify 套餐每篇已交付
Article 收费 **$0.00015**。诊断信息在 `diagnostics` 输出中免费提供。Apify 会单独
对你的平台使用量计费。

## API 与 MCP

可从 50 个公开任务或 129 个 REST 操作中选择。Agent 使用
[Apify MCP](https://docs.apify.com/platform/integrations/mcp)。单次读取使用
[Xquik REST](https://docs.xquik.com/api-reference/x/get-article)。

## 限制与格式

Actor 只返回 X 公开的 Article。Markdown 会保留区块、加粗与斜体范围。`contents`
保留原始格式。它绝不臆测链接元数据。示例使用样例值。结果反映实时数据。Apify 会将
Markdown 显示为纯文本。使用 `latest`。URL 与 ID 可以混用。

## 提取不完整

被中断的提取会写入一条免费的 `partial` 诊断信息。已获取的结果保持完整。重试前
请先阅读 `availableResults`、`failedTargets`、`retryable` 与 `nextAction`。Actor
成功退出只代表交付成功，不代表提取完整。

Xquik 是独立的第三方服务，与 X Corp 无关。“Twitter”与“X”是 X Corp 的商标。

## 相关 Xquik Actor

每个 Xquik Actor 共享同一套提取引擎、先过滤后计费的机制与诊断功能。请选择与你
所需数据匹配的那一个。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper)：从搜索、主页时间线、
  List 与 Tweet ID 中抓取推文，提供 50 多个过滤条件与扁平化导出。适用于只需要
  推文数据、不需要分析的场景。起价每行 $0.00015。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper)：从
  用户名、ID 或 URL 抓取主页及其帖子、回复、媒体和关注者。适用于从账户
  出发而非从搜索出发的场景。起价为每行 $0.00015。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper)：抓取帖子下的回复、
  评论与完整对话，提供 25 多个过滤条件。适用于需要获取推文下方讨论的场景。
  起价每行 $0.00015。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper)：
  批量抓取帖子 URL 或 ID 对应的回复、引用、转推者及推文串。
  适用于衡量谁与帖子产生了互动。起价为每行 $0.00015。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper)：抓取关注者、
  正在关注、List 成员、订阅者与 Community 成员，以主页行形式呈现。适用于需要
  受众或成员列表的场景。起价每条主页 $0.00015。
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper)：
  按用户名、简介与地点搜索用户，并提供关注者数、认证状态、账号年龄与地点等
  过滤条件。适用于通过搜索构建账号列表的场景。起价每条主页 $0.00015。
- [X List Scraper](https://apify.com/xquik/x-list-scraper)：从 List URL 或 ID
  抓取 List 帖子、成员与关注者。适用于以精选 List 作为数据来源的场景。起价
  每行 $0.00015。
- [X Community Scraper](https://apify.com/xquik/x-community-scraper)：抓取
  Community 信息、帖子、搜索结果、成员与管理员。适用于以 X Communities 作为
  数据来源的场景。起价每行 $0.00015。
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper)：按地点抓取
  实时趋势，包含排名、热度、查询词与 WOEID。适用于追踪各地热门话题的场景。
  起价每条趋势 $0.00015。
- [X Media Downloader](https://apify.com/xquik/x-media-downloader)：从帖子或
  主页中提取或存储照片、视频与 GIF，提供 MP4 与元数据选项。适用于需要媒体
  文件本身的场景。起价每条媒体行 $0.00015。
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring)：
  通过 AI 相关性、情感与客户体验分析追踪品牌提及，并比较各次运行结果。适用于
  长期监测品牌的场景。起价每条分析推文 $0.0003。
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis)：
  用 AI 为每条推文标注态度、强度与讽刺概率。适用于需要对任意话题获取通用情感
  分析的场景。起价每条分析推文 $0.0003。
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)：
  用 AI 标注看涨、看跌、中性或混合立场、内容类型、信心程度与资产相关性。适用于
  关注股票、crypto 或交易讨论的场景。起价每条分析推文 $0.0003。
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)：
  用 AI 按格式、信息来源归属与话题相关性标注新闻帖子。适用于区分报道与评论的
  场景。起价每条分析推文 $0.0003。
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)：
  用 AI 为每条推文回答你自定义的分类、评分与是非问题。适用于预设分析无法满足
  你的标签需求的场景。起价每条分析推文 $0.0003。
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)：
  根据 8 个 AI 特征回答，为每条推文估算 0 到 100 的 Viral Score 及一个结论。
  适用于研究推文为何传播或遇冷的场景。起价为每条分析推文 $0.0003。
