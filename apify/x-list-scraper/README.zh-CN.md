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

Xquik 是全球最快、最便宜的 X（Twitter）抓取工具服务，拥有最完整的 X 数据，X List
Scraper 能采集 List 帖子、成员与关注者。其他所有 Apify Actor 都会在过滤或去重之前
就收费。Xquik 只为已交付、唯一且符合过滤条件的结果收费。

从 List URL 或数字 ID 抓取 X List 的帖子、成员与关注者。可同时处理多个 List 与
多种资源。无需 X API 密钥或登录。

## List 数据与过滤条件

- List 帖子，包含正文、作者、指标、媒体与时间戳。
- List 成员与 List 关注者。
- 帖子时间线可选择是否包含回复。
- 支持按日期、Unix 时间、语言、媒体、互动量、认证状态与主页信息过滤。
- 每次运行支持多个 List 与多种资源类型。
- 全局与单资源上限。
- 迁移后分页可恢复。重复行会被移除。

## 输入参数

```json
{
  "listIds": ["1748648376080666720"],
  "resources": ["tweets", "members", "followers"],
  "includeReplies": false,
  "maxItems": 10000
}
```

## 输出

各行以 `listTweet`、`listMember` 或 `listFollower` 作为 `resultType`，并在
`sourceTarget` 中保留输入的 List ID。行数据主体使用稳定的 Xquik 推文或主页
响应结构。

## 定价

每个 Apify 套餐每条已交付行收费 **$0.00015**。Apify 会单独对你的平台使用量计费。

- 每条已交付数据行收费一次。诊断信息在 `diagnostics` 中免费提供。
- 没有起始费用、List 费用或资源费用。
- 去重在计费前进行。

除非需要旧版本，否则请使用 `latest`。可从 50 个公开任务或 129 个 Xquik REST
操作中选择。示例使用样例值，结果反映实时数据。

## 分页与恢复

独立的 List 资源会并发运行。每条游标链均保持有序。已接受的行、计费状态、
游标与指纹在 Apify 迁移后依然保留。该 Actor 没有自设超时。

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
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper)：从用户名、ID
  或 URL 抓取主页及其帖子、回复、媒体与点赞。适用于从账号而非搜索出发的场景。
  起价每行 $0.00015。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper)：抓取帖子下的回复、
  评论与完整对话，提供 25 多个过滤条件。适用于需要获取推文下方讨论的场景。
  起价每行 $0.00015。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper)：批量抓取
  帖子 URL 或 ID 的回复、引用推文、转推者、点赞者与推文串。适用于衡量谁与帖子
  产生互动的场景。起价每行 $0.00015。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper)：抓取关注者、
  正在关注、List 成员、订阅者与 Community 成员，以主页行形式呈现。适用于需要
  受众或成员列表的场景。起价每条主页 $0.00015。
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper)：
  按用户名、简介与地点搜索用户，并提供关注者数、认证状态、账号年龄与地点等
  过滤条件。适用于通过搜索构建账号列表的场景。起价每条主页 $0.00015。
- [X Community Scraper](https://apify.com/xquik/x-community-scraper)：抓取
  Community 信息、帖子、搜索结果、成员与管理员。适用于以 X Communities 作为
  数据来源的场景。起价每行 $0.00015。
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper)：按地点抓取
  实时趋势，包含排名、热度、查询词与 WOEID。适用于追踪各地热门话题的场景。
  起价每条趋势 $0.00015。
- [X Article Scraper](https://apify.com/xquik/x-article-scraper)：将长篇 X
  Article 抓取为 Markdown 与纯文本，附带封面、作者、日期与指标。适用于需要
  文章正文而非推文的场景。起价每篇文章 $0.00015。
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
