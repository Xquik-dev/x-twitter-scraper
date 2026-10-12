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

Xquik 是全球最快、最便宜的 X（Twitter）抓取服务，X 数据也最完整。Xquik 的 X Email Scraper 获取账号在自己的 X 个人资料上公开的邮箱，无需 X Cookie，也无需登录。其他大多数 Apify Actor 在过滤或去重之前就开始收费。Xquik 只对已交付、不重复且符合过滤条件的结果收费。

粘贴用户名、扫描某个账号的关注者或搜索 X 用户，即可拿到每个公开了邮箱的个人资料，邮箱排在最前面。没有邮箱的个人资料不会交付，也不收费。费用为**每个已交付行 $0.00015**，Apify 另行收取平台使用费。

> Xquik 是独立的第三方服务，与 X Corp 无关联。“Twitter”和“X”是 X Corp 的商标。

## 每行都包含的联系方式

- 个人资料公开的第一个邮箱，已转为小写。
- 该邮箱的域名，以及它所在的个人资料字段：简介、名称或位置。
- 个人资料中的每个邮箱，包括写成“name [at] site [dot] com”的邮箱。
- 个人资料公开的电话号码，例如 WhatsApp 链接。
- 个人资料的网站和简介中的链接，每个链接都注明所属平台，例如 LinkedIn、GitHub 或 Telegram。
- 完整的公开个人资料：名称、简介、各项数量、认证状态、日期和图片。
- 1 次运行可使用 3 种来源：账号、账号的关注者或正在关注的账号，以及用户搜索。
- 可按邮箱域名、企业邮箱、关注者数、账号年龄、简介和位置过滤。
- 带或不带 @ 的用户名、x.com 和 twitter.com 的 URL，以及数字用户 ID。
- 计费前去除重复项。
- 通过 Apify 数据集导出 JSON、CSV、Excel、XML 和 RSS。
- Apify 迁移后，运行会从保存的状态继续。

## 如何从 X 个人资料获取邮箱

1. 在 Apify Console 中打开 Xquik 的 X Email Scraper。
2. 把用户名、个人资料 URL 或用户 ID 粘贴到 `twitterHandles` 中，或添加 `searchTerms`。
3. 开启 `expandFollowers`，改为扫描每个账号的关注者。
4. 用 `maxItems` 设置交付行数的上限，然后点击 Start。
5. 以 JSON、CSV 或 Excel 格式下载数据集，或使用 Apify API。

整个过程中，你都不需要输入 X Cookie、登录信息或 API 密钥。

## 输入

`twitterHandles` 接受账号的每一种写法，可以任意混用。运行会检查每个账号，并交付公开了邮箱的账号：

```json
{
  "twitterHandles": ["sample_user", "@sample_org", "https://x.com/sample_shop"],
  "maxItems": 1000
}
```

`startUrls` 和 `userIds` 接受同样的写法。开启 `expandFollowers` 后，运行会改为读取每个账号的关注者，并保留其中公开了邮箱的账号。用 `expansionRelation` 选择 `Followers` 或 `Following`：

```json
{
  "twitterHandles": ["sample_org"],
  "expandFollowers": true,
  "expansionRelation": "Followers",
  "maxScan": 10000,
  "emailDomains": "example.com, example.org"
}
```

`searchTerms` 按名称、用户名或简介中的词搜索 X 用户。每个搜索词是 1 次搜索：

```json
{
  "searchTerms": ["booking", "founder"],
  "businessEmailOnly": true,
  "minFollowers": 1000
}
```

大约每 400 个关注者中有 1 个公开邮箱，所以扫描关注者时，读取的个人资料远多于交付的个人资料。`maxScan` 限制运行在每个名单或每次搜索中读取的个人资料数。它的默认值是 10,000。运行在这里停止读取某个名单时，运行状态会说明读取了多少行，你可以调高 `maxScan` 继续往下读。扫描的个人资料免费。

`emailDomains` 只保留邮箱属于所列域名或其子域名的个人资料。`businessEmailOnly` 只保留邮箱不属于 Gmail 等免费邮箱服务的个人资料。`minFollowers`、`maxFollowers`、`minAccountAgeDays`、`verifiedOnly`、`hasWebsite`、`hasLocation`、`bioContains` 和 `locationContains` 进一步缩小个人资料的范围。所有过滤条件都在计费前生效。

`searchQueries` 和 `keyword` 是 `searchTerms` 的其他名称，`maxFollowersPerHandle` 是 `maxScan` 的另一个名称，用法相同。输入中出现 2 次的账号只交付 1 次、收费 1 次。顺利完成的小型运行会跳过 `run-report`，节省 Apify 用量。开启 `alwaysSaveRunRecords` 后，每次运行都会写入报告。

### 从其他邮箱 Actor 迁移

直接粘贴你现在用的输入。Xquik 的 X Email Scraper 能读取其他 Actor 的这些字段名。每一项先列出它们的字段，再列出映射到的字段：

- `requireEmail`：不需要字段。每个已交付的个人资料都公开了邮箱。
- `requireWebsite`：`hasWebsite`。它会保留网站字段中有任意链接的个人资料，运行状态会说明这一点。
- `bioKeywords`：`bioContains`。只要匹配其中 1 个词即可。
- 只含 1 个值的 `locationKeywords`：`locationContains`。值更多时，运行会在读取或计费前停止。
- 列表形式的 `emailDomains`：`emailDomains`
- `outputEmail`、`resolveShortLinks`：不需要字段。每一行都包含它的邮箱和 X 的完整链接。
- `findEmails`、`extractEmails`：没有对应字段。每一行包含个人资料在 X 上公开的邮箱。运行状态会说明该 Actor 不读取链接的网站。
- `validateEmails`：没有对应字段。该 Actor 不验证邮箱，因此运行状态会说明邮箱按公开的原样提供。

同时设置其中一个名称和它的标准字段时，以标准字段的值为准。运行日志会写明被忽略的字段。

## 输出

每个公开了邮箱的个人资料是数据集中的 1 行。排在最前面的是联系方式：`email`、`emailDomain`、`emailSource` 和 `contactInfo`。接着是完整的公开个人资料，包含 `id`、`username`、`name`、`description`、`followers`、`following`、`verified`、`verifiedType`、`createdAt`、`profilePicture` 等字段。来源缺少的字段不会出现。Xquik 的 X Email Scraper 不编造任何值。

示例使用样例值，实际结果来自实时数据。一行数据如下：

```json
{
  "email": "press@example.com",
  "emailDomain": "example.com",
  "emailSource": "bio",
  "contactInfo": {
    "emails": [
      {
        "value": "press@example.com",
        "domain": "example.com",
        "source": "bio"
      },
      {
        "value": "jane@example.org",
        "domain": "example.org",
        "source": "bio",
        "writtenAs": "jane [at] example [dot] org"
      }
    ],
    "phones": [
      {
        "value": "+14155550123",
        "source": "bio",
        "writtenAs": "+1 (415) 555-0123"
      }
    ],
    "links": [
      { "url": "https://example.com", "network": "website", "source": "url" }
    ]
  },
  "id": "1234567890",
  "username": "sample_user",
  "name": "Sample User",
  "description": "Press: press@example.com",
  "followers": 1200,
  "verified": true,
  "createdAt": "2017-03-21T20:50:14.000Z",
  "resultType": "profile",
  "sourceTarget": "sample_user"
}
```

`resultType` 对账号或搜索结果是 `profile`，对关注者是 `profileFollower`，对正在关注的账号是 `profileFollowing`。`sourceTarget` 写明该行来自哪个账号或搜索词。

## 邮箱的含义

邮箱是账号写在自己个人资料中的地址，位于简介、名称或位置中。该 Actor 按账号公开的原样返回邮箱，并转为小写。没有任何环节检查这个地址能否收信，也没有任何环节读取个人资料链接的网站。账号自己的写法不同时，`writtenAs` 保存这种写法，例如“jane [at] example [dot] org”。

只有当个人资料用不可能是其他内容的形式写出电话号码时，电话号码才会出现，例如 WhatsApp 链接或以 + 开头的号码。年份、数量或价格绝不会被读成电话号码。

## 从 X 个人资料获取邮箱要花多少钱？

所有 Apify 套餐的价格都是每个已交付行 $0.00015。Apify 另行收取平台使用费。

- 每个已交付的数据行收费一次。`diagnostics` 中的诊断信息免费。
- 没有启动费或查询费。
- 没有邮箱的个人资料不添加行，也不收费。
- X 上不存在的账号不添加行，也不收费。
- 计费前先去重。
- Apify 的最高总费用设置会限制交付行数。

扫描关注者要运行一段时间，才能找到为数不多的行，因为它每秒读取约 350 个个人资料，每 400 个中大约保留 1 个。`maxScan` 限定这段时间。

## 限制与恢复

Xquik 的 X Email Scraper 在 1 次运行中读取多个账号、名单和搜索。已交付的行和进度在 Apify 重启后仍会保留。该 Actor 本身不设时间限制，会遵守你设置的任何 Apify 超时。

运行状态会列出 X 上找不到匹配的账号，并提示你检查用户名、ID 或 URL。它还会列出被冻结的账号。提取中断时，会写入一条免费的 `partial` 诊断。已获取的结果不受影响。重试前，先查看 `availableResults`、`failedTargets`、`retryable` 和 `nextAction`。Actor 成功退出只说明结果已交付，不代表提取完整。

运行状态会写明提前停止的每个原因。`stopCauses` 列出每个原因，并附上各自的 `message`、`retryable` 和 `nextAction`。原因包括 `scan_limit`、`target_not_found`、`target_suspended`、`target_failed` 和 `deadline_reached`。只有在其他原因让运行停止时，缺失或被冻结的目标，或在 `maxScan` 处停止读取的名单，才会一并列出。只要有一个原因可重试，整个运行就是 `retryable`。

运行在 `maxScan` 处停止读取的名单不会让任何运行提前结束。有行的运行会正常完成，它的状态会说明读取了多少行，并提示你调高 `maxScan`。它不会为此写入诊断，为你省下 1 次记录写入。运行报告会在 `scanLimitedTargets` 中统计这类名单。

## 相关 Xquik Actor

所有 Xquik Actor 都使用同一套提取引擎、先过滤后计费的规则和诊断功能。按你需要的数据选择对应的 Actor。

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper)：从搜索、个人资料时间线、列表和帖子 ID 抓取帖子，提供 50 多个过滤条件和扁平导出。适合只要帖子数据、不做分析的场景。每行 $0.00015 起。
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper)：从用户名、ID 或 URL 抓取个人资料，以及这些账号的帖子、回复、媒体和关注者。适合从账号而不是搜索入手的场景。每行 $0.00015 起。
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper)：抓取帖子下的回复、评论和完整对话，提供 25 多个过滤条件。适合需要帖子下方讨论的场景。每行 $0.00015 起。
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper)：按帖子 URL 或 ID 批量抓取回复、引用、转帖者和帖子串。适合衡量谁与帖子有过互动的场景。每行 $0.00015 起。
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper)：抓取引用帖子的帖子，包含文本、媒体、计数和作者，提供 11 个过滤条件。适合研究谁引用了帖子以及说了什么的场景。每条帖子 $0.00015 起。
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper)：抓取关注者、正在关注的账号、列表成员、订阅者和社群成员，输出为个人资料行。适合需要受众或成员名单的场景。每条个人资料 $0.00015 起。
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper)：按用户名、简介和位置搜索用户，可按关注者数、认证状态、账号年龄和位置过滤。适合通过搜索建立账号名单的场景。每条个人资料 $0.00015 起。
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper)：通过 X 的“账号所在地”标签、账号连接 X 的方式和用户名更改记录，查看账号所在的位置。适合核实账号所在地的场景。每个账号 $0.00015 起。
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

不需要。Xquik 的 X Email Scraper 不需要 X Cookie、API 密钥、登录或任何凭据。每次读取都在 Xquik 的基础设施上运行。

### 这些邮箱来自哪里？

来自个人资料本身：账号填写的简介、名称和位置。该 Actor 不读取帖子，也不读取链接的网站，所以每个邮箱都是账号在自己的 X 个人资料上公开的。

### 该 Actor 会检查邮箱是否有效吗？

不会。它按账号公开的原样返回每个地址。没有任何环节检查这个地址能否收信。

### 为什么扫描关注者只交付了很少的行？

大约每 400 个关注者中有 1 个公开邮箱。运行状态会说明每个名单读取了多少行。调高 `maxScan`，可以在名单中继续往下读。也可以在 `searchTerms` 中使用 booking 这类词，保留的行会多得多。

### 1 次运行可以检查多少个个人资料？

你粘贴多少就检查多少。1 次运行可以返回 100,000 行以上。名单更大时，把 `maxItems` 调到表单默认的 1,000 以上。

### 从 X 个人资料收集邮箱合法吗？

Xquik 的 X Email Scraper 请求的是公开的 X 字段。结果包含个人数据。请确认用途合法，遵守适用于你的隐私和电子邮件规定，并尊重退订请求。不确定时，请咨询专业律师。

### 为什么我的运行没有返回结果？

先查看运行状态。对 X 上找不到匹配的每个账号，空运行的状态会提示你检查它的用户名、ID 或 URL。没有邮箱的个人资料不添加行。出现需要注意的问题时，会生成免费的 `diagnostics` 输出。其中的 `stopCauses` 为每个原因给出下一步操作 `nextAction`。

### 可以使用 API、定时调度和集成吗？

可以。请使用 Apify API 或 Xquik REST API。[API 标签页](https://apify.com/xquik/x-email-scraper/api) 提供 Python、JavaScript 和 cURL 示例。Apify [定时调度](https://docs.apify.com/platform/schedules) 可以按 cron 运行 Xquik 的 X Email Scraper。Agent 可以通过 [Apify MCP](https://docs.apify.com/platform/integrations/mcp) 调用它。除非需要旧构建，否则请使用 `latest`。

### 在哪里获取帮助？

在 Actor 页面提交 issue，或带上运行 ID 联系 <support@xquik.com>。键值存储中的免费诊断信息会说明需要注意的运行。没有拿到任何行的运行会在状态中说明原因。

### 可以获得定制方案吗？

可以。访问 [xquik.com](https://xquik.com) 或阅读 [API 文档](https://docs.xquik.com/introduction)。这些资料介绍了仪表盘、API、MCP 服务器和 webhook。
