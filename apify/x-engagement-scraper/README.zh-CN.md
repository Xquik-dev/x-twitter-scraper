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
<a href="https://youtu.be/4UOSpoOoC3Y?t=367"><img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" width="720" alt="Framer 将 Xquik MCP 连接到编码 Agent"></a><br>
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">观看 Framer 如何将 Xquik 抓取工具与 Claude Code、Codex、Cursor 等一起使用，从 6:07 开始。</a>
</td></tr></table>

Xquik 是速度最快、成本最低且数据最完整的 X（Twitter）抓取工具服务，X Engagement Scraper
可为任意帖子收集回复、引用推文、转推者、点赞者与推文串。其他 Apify Actor 都在筛选或去重之前收费。
Xquik 只对已交付、唯一且符合筛选条件的结果收费。

为一个或多个 X 帖子收集 Twitter 互动数据：回复、引用推文、转推者、点赞者与推文串上下文。
无需 X API 密钥或登录。

## 回复、引用推文与主页

- 支持帖子 URL 与数字推文 ID。
- 跨所有可用结果页获取直接回复。
- 支持 4 种排序方式的直接与嵌套回复。
- 将源帖子详情作为可选行返回。
- 引用推文包含文本、作者、媒体与指标。
- 转推者与点赞者主页。
- 源帖子周围的对话上下文。
- 单次运行支持多种互动类型与多个帖子。
- 支持全局与单资源上限。
- 提供源帖子与互动类型归因。
- 支持并发资源与已保存游标恢复。

## 输入参数

```json
{
  "tweetIds": ["2082577277246972300"],
  "engagementTypes": ["replies", "quotes", "retweeters", "favoriters"],
  "maxItems": 10000
}
```

关闭 `dedupeAcrossTargets` 以保留每个源与互动类型的配对。开启后每次运行每个账号只保留一行。

## 输出

行数据使用 `tweet`、`replies`、`completeReplies`、`quotes`、`retweeters`、`favoriters` 或
`thread` 作为 `resultType`。`sourceTarget` 标识源推文 ID。推文与主页字段遵循稳定的
Xquik REST 响应格式。

`completeReplies` 会保留每一条返回的行。运行报告会统计 `incompleteTargets` 以反映部分覆盖情况。
筛选在 Actor 计费之前进行。

## 转推时间戳

将 `includeRetweetTimestamp` 设为 `true` 可获取 `retweeters` 结果。`retweetedAt` 列包含
以 UTC 记录的观测转推时间。

每次查询都会检查转推者最新可用的主页页面，并将该账号与源帖子对照实际转推记录进行匹配。
较旧、已删除或不可用的转推记录可能导致时间戳为 `null`。查询失败时同样为 `null`；
该主页仍会被包含在结果中。此查询不能证明某账号从未转推过某条帖子。

额外的读取会增加延迟。仅需主页结果时请关闭此选项。主页的 `createdAt` 始终是账号创建日期。
含有转推事件的推文行会携带 `retweetedAt`。原帖发布时间与抓取时间不能替代转推时间。
结果价格与按交付行计费方式保持不变。

## 定价

所有 Apify 套餐均为 **每条交付行 $0.00015**。Apify 会单独计费你的平台使用量。

- 每条交付的数据行收费一次。`diagnostics` 中的诊断信息免费。
- 无启动费、帖子费、互动类型费或分页费。
- 去重在计费之前进行。

除非需要旧版本，否则请使用 `latest`。可从 50 个公开任务或 129 个 Xquik REST 操作中选择。
示例使用样本数据。结果反映实时数据。

## 恢复与限制

独立的帖子与资源配对会并发运行。游标顺序保持有序。已接受的行、计费状态、游标与指纹
在 Apify 迁移后依然保留。该 Actor 没有自设的超时限制。

## 未完成的提取

被中断的提取会写入一条免费的 `partial` 诊断记录。已获得的结果保持完整。重试前请先查看
`availableResults`、`failedTargets`、`retryable` 与 `nextAction`。Actor 成功退出只能确认已交付，
不代表提取已完成。

Xquik 是独立的第三方服务，与 X Corp 无关联。"Twitter" 与 "X" 是 X Corp 的商标。

## 相关 Xquik Actor

每个 Xquik Actor 共享相同的提取引擎与筛选优先的计费与诊断机制。请选择与你所需数据匹配的一款。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper)：从搜索、主页时间线、List 与推文 ID
  中抓取推文，提供 50 多种筛选条件与扁平化导出。适合只需要推文数据而无需分析的场景。
  起价每行 $0.00015。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper)：从用户名、ID 或 URL 抓取主页
  及其帖子、回复、媒体与点赞。适合从账号而非搜索开始的场景。起价每行 $0.00015。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper)：抓取帖子下的回复、评论与完整对话，
  提供 25 多种筛选条件。适合需要获取推文下方讨论内容的场景。起价每行 $0.00015。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper)：以主页行形式抓取关注者、
  关注对象、List 成员、订阅者与 Community 成员。适合需要受众或成员列表的场景。
  起价每个主页 $0.00015。
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper)：按用户名、简介与位置
  搜索用户，支持关注者数、认证状态、账号年龄与位置筛选。适合从搜索构建账号列表的场景。
  起价每个主页 $0.00015。
- [X List Scraper](https://apify.com/xquik/x-list-scraper)：从 List 的 URL 或 ID 抓取 List 帖子、
  成员与关注者。适合由精选 List 定义数据来源的场景。起价每行 $0.00015。
- [X Community Scraper](https://apify.com/xquik/x-community-scraper)：抓取 Community 信息、帖子、
  搜索结果、成员与管理员。适合数据来源为 X Community 的场景。起价每行 $0.00015。
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper)：按位置抓取实时趋势，包含排名、
  热度、搜索词与 WOEID。适合追踪各地热门话题的场景。起价每条趋势 $0.00015。
- [X Article Scraper](https://apify.com/xquik/x-article-scraper)：以 Markdown 与文本形式抓取长篇
  X Article，包含封面、作者、日期与指标。适合需要文章正文而非推文的场景。起价每篇文章 $0.00015。
- [X Media Downloader](https://apify.com/xquik/x-media-downloader)：从帖子或主页中提取或存储照片、
  视频与 GIF，提供 MP4 与元数据选项。适合需要媒体文件本身的场景。起价每条媒体行 $0.00015。
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring)：
  通过 AI 相关性、情感与客户体验回答追踪品牌提及，并对比多次运行结果。适合持续关注品牌动态的场景。
  起价每条分析推文 $0.0003。
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis)：通过 AI
  为每条推文标注态度、强度与讽刺概率。适合需要对任意话题进行通用情感分析的场景。
  起价每条分析推文 $0.0003。
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)：
  通过 AI 标注看涨、看跌、中性或混合立场、内容类型、信心程度与资产相关性。适合关注股票、加密货币
  或交易讨论的场景。起价每条分析推文 $0.0003。
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)：通过 AI
  按格式、来源归属与话题相关性标注新闻类帖子。适合区分报道与评论的场景。
  起价每条分析推文 $0.0003。
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)：
  通过 AI 为每条推文回答你自定义的分类、评分与是非问题。适合预设分析无法满足你自定义标签需求的场景。
  起价每条分析推文 $0.0003。
