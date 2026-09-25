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

Xquik 是速度最快、成本最低且数据最完整的 X（Twitter）抓取工具服务。X Trends Scraper
可按位置收集实时趋势，包含排名、热度与搜索词。其他 Apify Actor 都在筛选或去重之前收费。
Xquik 只对已交付、唯一且符合筛选条件的结果收费。

在一次运行中抓取多个地区的当前 Twitter 趋势。导出排名、话题、搜索词、推文热度、搜索 URL、
WOEID 与来源位置。无需 X API 密钥或登录。

## 位置与趋势数据

- 支持并发运行多个国家或 WOEID。
- 每个位置最多返回 50 条当前趋势。
- 每一行都保留位置归因。
- 标注话题标签行以及推文热度是否可用。
- 计费前会对等效输入去重。
- 通过 Apify 数据集导出 JSON、CSV、Excel、XML 与 RSS。
- 在 Apify 迁移后从已保存状态恢复。

## 输入参数

可使用位置名称、数字 WOEID 或两者结合：

```json
{
  "locations": ["Worldwide", "United States", "Turkey"],
  "maxTrendsPerLocation": 50,
  "maxItems": 150
}
```

支持的快捷位置包括 Worldwide、United States、United Kingdom、Turkey、Brazil、Canada、
France、Germany、India、Indonesia、Japan、Mexico 与 Australia。其他受支持位置请使用
`woeids`。

## 输出

每条趋势为数据集中的一行，包含 `name`、`rank`、`tweetVolume`、`query`、`url`、`woeid`、
`sourceTarget` 与 `resultType`。缺失的来源字段会保持为空。Actor 不会虚构任何值。

## 定价

所有 Apify 套餐均为 **每条交付行 $0.00015**。Apify 会单独计费你的平台使用量。

- 每条交付的数据行收费一次。`diagnostics` 中的诊断信息免费。
- 无启动费、查询费或位置费。
- Actor 会在计费前去除重复项。
- Apify 的最大总费用设置会限制交付行数。

除非需要旧版本，否则请使用 `latest`。可从 50 个公开任务或 129 个 Xquik REST 操作中选择。
示例使用样本数据。结果反映实时数据。

## 恢复与限制

独立位置会并发运行。游标状态、已接受的行、计费状态与输出指纹在 Apify 迁移后依然保留。
该 Actor 没有自设的运行超时限制。调用方提供的 Apify 超时设置仍会被遵守。

## 未完成的提取

被中断的提取会写入一条免费的 `partial` 诊断记录。已获得的结果保持完整。重试前请先查看
`availableResults`、`failedTargets`、`retryable` 与 `nextAction`。Actor 成功退出只能确认已交付，
不代表提取已完成。

状态消息会写明运行提前停止的每个原因。`stopCauses` 会列出每个原因及其各自的 `message`、`retryable`
与 `nextAction`。原因的取值为 `target_not_found`、`target_failed`、`pagination_safety_limit` 与
`deadline_reached`。只有当其他原因导致运行停止时，不存在的目标才会出现在列表中。
只要任一原因可重试，整个运行就会标记为 `retryable`。

Xquik 是独立的第三方服务，与 X Corp 无关联。"Twitter" 与 "X" 是 X Corp 的商标。

## 相关 Xquik Actor

每个 Xquik Actor 共享相同的提取引擎与筛选优先的计费与诊断机制。请选择与你所需数据匹配的一款。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper)：从搜索、主页时间线、List 与推文 ID
  中抓取推文，提供 50 多种筛选条件与扁平化导出。适合只需要推文数据而无需分析的场景。
  起价每行 $0.00015。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper)：从
  用户名、ID 或 URL 抓取主页及其帖子、回复、媒体和关注者。适用于从账户
  出发而非从搜索出发的场景。起价为每行 $0.00015。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper)：抓取帖子下的回复、评论与完整对话，
  提供 25 多种筛选条件。适合需要获取推文下方讨论内容的场景。起价每行 $0.00015。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper)：
  批量抓取帖子 URL 或 ID 对应的回复、引用、转推者及推文串。
  适用于衡量谁与帖子产生了互动。起价为每行 $0.00015。
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
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)：
  根据 8 个 AI 特征回答，为每条推文估算 0 到 100 的 Viral Score 及一个结论。
  适用于研究推文为何传播或遇冷的场景。起价为每条分析推文 $0.0003。
