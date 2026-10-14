[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) · **简体中文** · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer 将 Xquik MCP 连接到编程 Agent](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[观看 Framer 如何在 Claude Code、Codex、Cursor 等工具中使用 Xquik 抓取工具](https://youtu.be/4UOSpoOoC3Y?t=367)，从 6:07 开始。

Xquik 是全球最快、最便宜的 X（Twitter）抓取服务，X 数据也最完整。Xquik 的 X Tweet Sentiment Analysis 为每条帖子加上态度、强度&讽刺判断。其他大多数 Apify Actor 在过滤或去重之前就开始收费。Xquik 只对已交付、不重复且符合过滤条件的结果收费。AI 费用已包含在每条帖子的价格中。你不需要 AI 账号、token 或密钥。

衡量 X（Twitter）帖子背后的态度&保留原始帖子数据。Xquik 的 **X Tweet Sentiment Analysis with AI** 收集匹配的帖子。它用 AI 为每条帖子加上情感类别、强度等级&讽刺概率。你可以追踪某次发布、某场营销活动、某集节目或某位公众人物引发的反应。把强烈反应和随口提及区分开。

- **每条帖子单独判断情感。** 每条帖子都有自己的类别，你可以逐条核查答案。
- **强度。** 0 到 2 的等级区分措辞强烈的帖子和语气温和的帖子。
- **讽刺概率。** 它标记字面措辞与实际态度相反的帖子。
- **完整的原始记录。** 每行都保留该帖子公开的所有字段。

> Xquik 是独立的第三方服务，与 X Corp 无关联。
> “Twitter”和“X”是 X Corp 的商标。

## 如何分析帖子情感

刚接触 Apify？先[创建免费账号](https://console.apify.com/sign-up?fpr=xquik)。免费套餐不需要信用卡&每月提供 $5 可用额度。按每条已分析帖子 $0.0003 计算，不算平台用量，$5 最多可支付 16,000 条已分析帖子。然后回到这里&点击 Try for free。

1. 添加搜索词、个人资料用户名、帖子 URL 或帖子 ID。
2. 设置 `maxItems` & 任务需要的提取过滤条件。
3. `analysis.targets` 留空时，按每条帖子自己的主题判断。要聚焦某个品牌、产品或人物，添加它的名称&别名。
4. 开始运行&打开数据集。

```json
{
  "searchTerms": ["\"season finale\" lang:en"],
  "maxItems": 200,
  "analysis": { "context": "Reactions to the show, not spoilers." }
}
```

### 该 Actor 回答什么

| 问题 | 答案                                     |
| ---- | ---------------------------------------- |
| 情感 | 积极、消极、混合、中性或不明确           |
| 强度 | 0 为随口提及，1 为明确表态，2 为措辞强烈 |
| 讽刺 | 字面措辞与实际态度相反的概率             |

设置目标时，情感判断的是对这些目标的态度。它还会使用你提供的引用或回复上下文。没有目标时，它判断帖子的主要主题。

## 分析你自己的文本

把你自己的草稿、回复、评价或笔记粘贴到 `texts` 中。Xquik 的 X Tweet Sentiment Analysis 会分析这些文本。它不会从 X 获取任何内容。

```json
{
  "texts": [
    "The new update is great, but sync still drops on mobile.",
    "Support fixed my issue in 10 minutes. Thank you."
  ]
}
```

- 每段文本生成 1 行，`analysis` 答案与帖子相同。
- `tweet.id` 依次为 `text:1`、`text:2` & 后续编号，`tweet.type` 则为 `text`。
- 每段已分析文本的费用与每条已分析帖子相同，都是 $0.0003。
- 设置 `texts` 后，运行只分析这些文本。X 目标请另外运行。

## 从其他情感分析 Actor 迁移

改写已有输入时，每项设置只用 1 个名称。

| 已有的输入名称                                      | Xquik 字段       |
| --------------------------------------------------- | ---------------- |
| `query`、`searchQuery`                              | `twitterContent` |
| `queries`、`searchQueries`、`search`                | `searchTerms`    |
| `handles`、`usernames`、`username`、`profileTweets` | `twitterHandles` |
| `tweetUrls`、`postUrls`、`urls`                     | `startUrls`      |
| `tweetIDs`、`tweet_ids`、`postIds`、`tweetId`       | `tweetIds`       |
| `maxTweets`、`maxResults`、`count`、`max_posts`     | `maxItems`       |
| `sort`                                              | `queryType`      |
| `tweetLanguage`、`language`                         | `lang`           |
| `startDate`、`endDate`                              | `since`、`until` |

该 Actor 直接接受这些常见名称。它还能读取其他帖子抓取 Actor 的过滤字段名。在这里没有对应字段的过滤条件，会成为本次运行每次搜索中的 X 搜索运算符，运行日志会在开头列出这些运算符。`sort` 请用 `Latest` 或 `Top`。语言代码&日期边界保持不变。上限作用于所有目标。下面的输入可以直接运行。

```json
{ "searchTerms": ["from:NASA"], "sort": "Latest", "maxItems": 5 }
```

其他输入需要在运行前转换。

把单个 `tweetUrl` 放进 `startUrls`。

```json
{ "startUrls": ["https://x.com/NASA/status/2105727882588807607"] }
```

把 `text`、`Texts`、数据集字符串或文件字符串放进 `texts`。

```json
{ "texts": ["Support fixed my issue. Thank you."] }
```

把 `hashtag` 或 `cashtag` 改成搜索字符串。

```json
{ "searchTerms": ["#Artemis lang:en", "$AAPL lang:en"], "maxItems": 5 }
```

把 `minLikes`、`minReplies` & `minRetweets` 换成这些字段名。

```json
{ "min_faves": 10, "min_replies": 2, "min_retweets": 3 }
```

结果把原始记录保存在 `tweet` 中&把答案保存在 `analysis.answers` 中。把积极、消极&中性标签对应到相应的情感类别。`mixed` & `unclear` 保留为单独的类别。其他情感分数可能使用不同的量表&含义。Xquik 的强度范围是 0 到 2，可能带小数。讽刺是概率。置信度描述答案的确定程度。

## 分析帖子情感要花多少钱？

Xquik 的 X Tweet Sentiment Analysis 每条已分析帖子 $0.0003 起。它不收启动费。价格包含收集 & AI 费用。你不需要 AI 账号、token 或密钥。这个价格涵盖每条帖子最多 8 个问题 & 64,000 字节的上下文。每个问题定义最多可用 8,000 字节。

需要更大的数据量时，请[选择 Apify 套餐](https://apify.com/pricing?fpr=xquik)，获得更多预付用量。

提取过滤&去重在分析之前进行。你从不为被过滤掉的行或重复行付费。失败的分析、跳过的分析&诊断行不产生结果费用。Apify 会按你套餐的费率，另行收取计算、存储&传输的平台使用费。Pricing 标签页会显示这部分费用。

## 输入&输出示例

上面的输入可以直接复制使用。省略部分内容的输出行如下所示。

```json
{
  "tweet": { "id": "2100493544842494265", "text": "…", "likeCount": 12 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      {
        "questionId": "sentiment",
        "type": "choice",
        "value": "positive",
        "confidence": 0.91
      },
      {
        "questionId": "intensity",
        "type": "score",
        "value": 2,
        "confidence": 0.8
      },
      { "questionId": "sarcasm", "type": "probability", "probability": 0.04 }
    ]
  }
}
```

每条结果都包含 `tweet` & `analysis`。答案包括类型、问题版本&可用的概率。分析失败或被跳过的行会保留已收集的帖子 & `reason`。它的答案列表为空。

键值存储中的免费诊断信息会说明无效输入、缺失结果&中断的收集。运行报告把已收集的行、已收费的分析&待收取的费用分开列出。

## 运行摘要&扁平答案

运行在以下 3 种情况下，会向它的键值存储写入 `analysis-summary` 记录。

- 运行遇到问题或规模较大。
- 比较发现了已变化、新增或无法比较的帖子。
- 开启了 `alwaysSaveRunRecords`。

其他运行会跳过这条记录，包括系列中的首次运行。它们的状态会写明占比最高的答案，例如 `Top sentiment is positive in 3 of 5 results.`。没有变化的比较会显示 `No change since the earlier run.`。运行遇到问题或规模较大时，还会写入 `run-report`。开启 `alwaysSaveRunRecords` 的运行也会写入。`run-report` 会在 `results.analysisSummary` 下重复这份摘要。

摘要统计已分析、失败&跳过的行。它汇总互动数据&总结每个问题。

- `sentiment` 分布显示每种态度下各有多少条帖子。
- `engagementShares` 按喜欢、转帖、回复&引用对同一分布加权。
- `top` 列出每种态度下互动最多的 3 条帖子。
- 每行都列出 `sourceDomains`，即它链接到的主机名。
- 每行都列出文本中出现的 `cashtags`，例如 `$NVDA`。
- 设置 `monitor.baselineDatasetId` 时，摘要的 `monitor` 块会统计比较状态。它最多列出 50 个已变化的行。

摘要把数字四舍五入到 4 位小数。空运行会报告为 0 的计数&为 `null` 的平均值。

每个结果行还带有 `answers`，即以问题 ID 为键的扁平映射。每个值是所选的类别、分数或概率。`Flat answers` 数据集视图 & CSV 或 Excel 导出会为每个问题显示 1 列。这些列就在帖子旁边，所以电子表格不需要解析 JSON。失败&跳过的行带有空映射。

## 与之前的运行比较

传入 `monitor.baselineDatasetId`，即之前某次已完成、分析设置相同的运行的数据集 ID。比较会读取那次运行的行。即使那次运行跳过了摘要，比较也能进行。之后每行都会多出 `monitor` 对象。它的状态取以下值。

- 没有基线时为 `first_run`。
- 之前的运行中没有的帖子为 `new_to_baseline`。
- 之前的运行中已有的帖子为 `unchanged` 或 `changed`。

`changes` 列出从 `previous` 变为 `current` 的每个情感、强度等级或讽刺判断。判断按类别、四舍五入后的分数等级，或以 0.5 为界的是/否结论来比较。只有判断明显变化时，才算已变化。不同运行之间接近持平的结果仍为 `unchanged`。

基线超过 `maxBaselineRows` 或来自不同设置时，运行会在收集前停止。运行随后写入诊断行。`maxBaselineRows` 默认为 100,000。

## 任务示例

你可以从 50 个公开任务中选择。先从与你的问题相符的示例开始。大多数任务使用较小的上限。2 个带日期的搜索请求 50 条帖子。打开任务即可使用它保存的输入。下面可直接复制的输入&观察到的产出能帮你选择设置。

每个成功的行都返回情感、强度&讽刺概率。每行都在答案旁保留原始帖子或自备文本。这些示例使用英文输入&语言过滤条件。语言标签仍可能漏掉帖子或引用中的其他语言文本。

没有目标时，答案描述的是帖子的主要主题。提到关键词的帖子可能在谈别的事。有多个目标时，情感答案把它们放在一起描述。它不会为每个目标单独返回答案。

个人资料的喜欢可能被隐藏。无法获取时，改用个人资料的回复或帖子。

搜索结果可能包含公告、推广、玩笑&重复文本。不同的帖子 ID 不能证明反应相互独立，也不能证明客户身份。观点短语&互动过滤条件选出的只是样本。把帖子算作反馈前，请先查看它们。分析不核实帖子中的说法。

### 测试过的任务输入

打开任务。它的 Input 标签页有可视化字段 & JSON。开始前，可以复制它的 JSON 或修改字段。[Apify 讲解了任务输入](https://docs.apify.com/actors/running/tasks)。

测试日期采用 UTC。产出描述的是记录下来的那次运行，不是保证能获取的数量。带日期的 50 条帖子示例说明了为什么不重复的 ID 不等于独立的观点。

#### 季终集评价草稿

[季终集评价文本](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-season-finale-reactions)

在你的季终集评价草稿中区分赞扬和批评。2026-10-01 观察到 3 段不重复的自备文本。上限为 3。这些是你自己的示例文本，不是受众调研。

#### 手机发布讨论

[2026 年 9 月 iPhone 发布帖子](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-iphone-launch-posts)

查看 9 月固定日期窗口内的发布讨论。2026-10-01 观察到 5 条不重复的帖子。上限为 5。公告和个人观点都可能匹配。

#### 中场秀评价

[中场秀评价文本](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-super-bowl-halftime-show)

检查你的中场秀评价中褒贬混合的判断和讽刺。2026-10-01 观察到 3 段不重复的自备文本。上限为 3。这些是你自己的示例评价，不是演出现场的反应。

#### 电动车体验

[电动车体验帖子](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-new-electric-car)

查找关于驾驶或选购电动车的帖子。2026-10-01 观察到 5 条不重复的帖子。上限为 5。个人化短语可能匹配到玩笑或转述的经历。

#### 电影讨论

[漫威电影讨论帖子](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-marvel-movie-audiences)

挑选观众评论前，先查看电影讨论。2026-10-01 观察到 5 条不重复的帖子。上限为 5。Marvel 这个词可能匹配到无关的用法。

#### 艺人媒体配文

[Taylor Swift 媒体配文的语气](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-taylor-swift-album-reactions)

对照近期媒体查看这位艺人的措辞。2026-10-01 观察到 5 条不重复的帖子。上限为 5。配文无法描述图片或视频中展示的全部内容。

#### 游戏发售帖子串

[游戏发售更新帖子串](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-video-game-launch)

对照关于竞品游戏的回应阅读公告。2026-10-01 观察到 5 条不重复的帖子。上限为 5。这个帖子串提到多款游戏，并包含它的首帖。

#### 远程办公讨论

[远程办公讨论](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-remote-work)

比较远程办公讨论中表达的态度。2026-10-01 观察到 5 条不重复的帖子。上限为 5。可能出现招聘广告和重复的观点。

#### 航空公司帖子

[航空公司讨论帖子](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-airline-passengers)

挑选服务反馈前，先查看提到航空公司的帖子。2026-10-01 观察到 5 条不重复的帖子。上限为 5。提到航空公司不能证明作者是乘客。

#### 大学橄榄球讨论

[大学橄榄球讨论](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-college-football-fans)

把球迷观点和大学橄榄球推广区分开。2026-10-01 观察到 5 条不重复的帖子。上限为 5。除球迷观点外，赛事预告和推广也可能匹配。

#### 利率讨论

[利率讨论](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-interest-rates)

查看围绕利率的市场态度和政策态度。2026-10-01 观察到 5 条不重复的帖子。上限为 5。主要主题可能是某位政治人物，也可能是市场。

#### 滑板车讨论

[电动滑板车讨论](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-electric-scooters)

挑选骑行者反馈前，先查找滑板车讨论。2026-10-01 观察到 5 条不重复的帖子。上限为 5。除个人体验外，广告、研究和玩笑也可能匹配。

#### 餐厅体验

[新餐厅体验](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-restaurant-openings)

查看关于新餐厅的第一人称措辞。2026-10-01 观察到 5 条不重复的帖子。上限为 5。个人措辞也可能出现在邀请或推荐中。

#### 公开列表信息流的语气

[公开列表信息流的语气](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-ai-coding-assistants)

查看某个公开列表中帖子的语气。2026-10-01 观察到 5 条不重复的帖子。上限为 5。成员可能讨论其他主题，也可能转帖别人的文字。

#### 设备账号的回复

[Google 设备账号回复的语气](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-smart-home-device-owners)

查看某个设备账号的措辞，包括回复。2026-10-01 观察到 5 条不重复的帖子。上限为 5。缺少上级帖子的上下文，可能让人难以判断个人资料回复的含义。

#### 马拉松训练

[马拉松训练讨论](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-marathon-runners)

从训练动态和马拉松计划中找出态度。2026-10-01 观察到 5 条不重复的帖子。上限为 5。除跑者动态外，还可能出现计划和推广。

#### 行程规划

[个人东京旅行帖子](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-tourist-destinations)

查看个人行程计划和旅行故事。2026-10-01 观察到 5 条不重复的帖子。上限为 5。名称带 Tokyo 的活动可能匹配，但并不描述日本之旅。

#### 流媒体价格讨论

[Netflix 价格讨论帖子](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-streaming-price-increases)

查看退订原因前，先查找对 Netflix 价格的担忧。2026-10-01 观察到 5 条不重复的帖子。上限为 5。价格短语选出的是担忧，不是有代表性的观众样本。

#### 学习用品采购

[2026 年 8 月学习用品帖子](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-back-to-school-shoppers)

查看 8 月窗口内的 50 条学习用品帖子。2026-10-01 观察到 50 条不重复的帖子。上限为 50。经我们查看，这 50 个 ID 中有 42 行明显相关。

#### 火车晚点

[火车晚点经历帖子](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-public-transit)

查找与火车晚点有关的抱怨和经历。2026-10-01 观察到 5 条不重复的帖子。上限为 5。个人化短语可能漏掉官方通知。

#### 宠物食品讨论

[宠物食品体验帖子](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-pet-food-brands)

在更广泛的宠物护理讨论中查看提到宠物食品的帖子。2026-10-01 观察到 5 条不重复的帖子。上限为 5。护理或兽医讨论可能顺带提到食品品牌。

#### 选定的梦幻体育帖子

[梦幻体育帖子批次](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-fantasy-football-apps)

分析选定的梦幻体育帖子批次。2026-10-01 观察到 2 条不重复的帖子。上限为 2。标签针对每条帖子的主题，不一定是某个应用。

#### 咖啡店体验

[咖啡店体验帖子](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-coffee-shop-customers)

挑选顾客反馈前，先查找关于咖啡店的评论。2026-10-01 观察到 5 条不重复的帖子。上限为 5。作者的抱怨仍是未经核实的说法。

#### 住房市场

[住房市场讨论](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-housing-market)

查看关于住房市场的观点和新闻。2026-10-01 观察到 5 条不重复的帖子。上限为 5。新闻和观点可能涉及不同的市场问题。

#### 赛事讨论

[League of Legends 赛事帖子](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-esports-tournament-viewers)

把赛事讨论和门票或比赛推广区分开。2026-10-01 观察到 5 条不重复的帖子。上限为 5。门票广告和比赛报道不是观众观点。

#### 播客发布方帖子

[播客发布方帖子的语气](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-podcast-episodes)

查看播客发布方自己的宣传内容。2026-10-01 观察到 5 条不重复的帖子。上限为 5。发布方的语气不能衡量听众满意度。

#### 健身房对比

[健身房对比评价文本](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-gym-memberships)

检查你的评价中对 2 家健身房的综合态度。2026-10-01 观察到 3 段不重复的自备文本。上限为 3。每段文本中，2 个目标共用 1 个情感答案。

#### 租车

[租车体验帖子](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-car-rental-customers)

查看服务问题前，先查找关于租车的评论。2026-10-01 观察到 5 条不重复的帖子。上限为 5。除租车者的讲述外，咨询和推广也可能匹配。

#### 校园讨论

[大学费用和校园帖子](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-university-life)

挑选与费用有关的帖子前，先查看校园讨论。2026-10-01 观察到 5 条不重复的帖子。上限为 5。校园新闻和批评不能证明学生的亲身经历。

#### 婚礼筹备

[个人婚礼筹备帖子](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-wedding-planning-posts)

查找关于婚礼计划和费用的第一人称措辞。2026-10-01 观察到 5 条不重复的帖子。上限为 5。除筹备经历外，故事、玩笑和顺带提及的措辞也可能匹配。

#### 充电体验

[电动车充电体验帖子](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-ev-charging-experiences)

在电动车讨论中查看充电体验。2026-10-01 观察到 5 条不重复的帖子。上限为 5。充电可能只是另一个车辆问题的次要话题。

#### 报税讨论

[2026 年春季 TurboTax 报税帖子](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-tax-filing-software)

查看春季固定日期窗口内的报税讨论。2026-10-01 观察到 5 条不重复的帖子。上限为 5。帖子不能核实当前的费用或税务规定。

#### 主题公园游玩

[主题公园游玩讨论](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-theme-park-visitors)

挑选游玩反应前，先查找提到主题公园的帖子。2026-10-01 观察到 5 条不重复的帖子。上限为 5。顺带的提及可能匹配到谈论其他主题的较长帖子。

#### 食品杂货支出

[食品杂货预算经历帖子](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-grocery-prices)

查找关于食品杂货支出的第一人称评论。2026-10-01 观察到 5 条不重复的帖子。上限为 5。更广泛的政治、营养或创作者讨论也可能提到食品杂货支出。

#### 相机讨论

[手机相机讨论](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-phone-camera-reviews)

对照照片、评测和公告查看提到相机的帖子。2026-10-01 观察到 5 条不重复的帖子。上限为 5。在其他公告中，相机可能只是顺带提及。

#### 选定的运动鞋帖子

[选定的运动鞋帖子](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-sneaker-drop-reactions)

分析已知的帖子，不做宽泛的关键词搜索。2026-10-01 观察到 1 条不重复的帖子。上限为 1。这条选定的配文没有描述图片的每个细节。

#### 客服聊天机器人

[客服聊天机器人讨论帖子](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-customer-support-chatbots)

挑选服务投诉前，先查找关于客服聊天机器人的讨论。2026-10-01 观察到 5 条不重复的帖子。上限为 5。情感支持机器人和企业回应也可能匹配。

#### 音乐节讨论

[2026 年 4 月 Coachella 讨论](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-music-festival-attendees)

查看 4 月窗口内的 50 条音乐节帖子。2026-10-01 观察到 50 条不重复的帖子。上限为 50。这 50 个 ID 中有 47 行相关，还有重复的新闻稿。

#### 电费账单

[电费账单讨论](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-electric-bills)

对照政策讨论查看个人电费支出。2026-10-01 观察到 5 条不重复的帖子。上限为 5。政策说法和价格预测仍未经核实。

#### 篮球阵容变动

[NBA 交易和签约讨论](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-nba-trade-reactions)

挑选球迷反应前，先查找交易和签约讨论。2026-10-01 观察到 5 条不重复的帖子。上限为 5。其他报道可能顺带提到球员或球队。

#### 住宿讨论

[Airbnb 住宿讨论](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-airbnb-stays)

在住宿讨论中聚焦对 Airbnb 的态度。2026-10-01 观察到 5 条不重复的帖子。上限为 5。除房客故事外，还可能出现房东推广和应用相关的帖子。

#### 读书反应

[读书反应帖子](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-book-club-readers)

查看读书反应，不预设作者是读书会成员。2026-10-01 观察到 5 条不重复的帖子。上限为 5。与电影的比较和个人阅读观点都可能匹配。

#### 食材包体验

[HelloFresh 体验帖子](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-meal-kit-services)

查看产品体验前，先查找关于食材包的评论。2026-10-01 观察到 5 条不重复的帖子。上限为 5。计划、广告和更广泛的个人故事都可能提到这个品牌。

#### 比赛讨论

[Formula 1 比赛讨论帖子](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-formula-one-race-weekends)

对照车队和车手的声明查看比赛讨论。2026-10-01 观察到 5 条不重复的帖子。上限为 5。被引用的车手声明可能在不同 ID 中重复出现。

#### 约会应用体验

[约会应用体验帖子](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-dating-app-experiences)

查找约会应用的体验、关于配对的言论和玩笑。2026-10-01 观察到 5 条不重复的帖子。上限为 5。关于配对的言论和玩笑不能核实客户身份。

#### 机场等候帖子

[机场等候和休息室帖子](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-airport-travelers)

对照出行通知查看关于机场等候的评论。2026-10-01 观察到 5 条不重复的帖子。上限为 5。除个人等候经历外，还可能出现官方通知。

#### 学校午餐讨论

[学校午餐讨论](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-school-lunch-programs)

查看关于学校午餐的个人帖子和政策辩论。2026-10-01 观察到 5 条不重复的帖子。上限为 5。作者可能包括机构，不只是家长。

#### 啤酒品鉴

[精酿啤酒品鉴帖子](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-craft-beer-drinkers)

挑选评价示例前，先查找啤酒品鉴观点。2026-10-01 观察到 5 条不重复的帖子。上限为 5。只带链接的简短配文可能缺少足够的上下文，无法判断明确的态度。

#### 对接公告的引用

[SpaceX 对接公告的引用](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-space-launches)

查看某个固定时间之后对 1 则对接公告的引用。2026-10-01 观察到 5 条不重复的帖子。上限为 5。引用可能是邀请或中性描述，不只是反应。

#### 生日帖子的回复

[NASA 生日帖子的回复](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-replies-to-a-news-post)

查看对 1 条生日帖子的直接回复。2026-10-01 观察到 5 条不重复的帖子。上限为 5。缺少根帖子的上下文，可能让人难以判断回复答案的含义。

检查结果时，把 `maxItems` 设得小一些。上限限制的是输出，不是可获取的数量。如果符合条件的帖子较少，修改过滤条件前先查看运行报告。每次只放宽 1 项设置，例如日期或互动下限。记下你改动的设置。

分析失败时，查看 `analysis.reason` & 只重试受影响的 ID。如果某条帖子的回复看起来不完整，请查看免费的诊断行。X 显示的回复少于它统计的数量时，诊断行会写明。媒体配文无法描述图片或视频中展示的全部内容。缺少引用或回复的上下文，可能让答案不确定。

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
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals) 用 AI 标注看涨、看跌、中性或混合立场，以及内容类型、信心程度&资产相关性。适合关注股票、加密货币或交易讨论的场景。每条已分析帖子 $0.0003 起。
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor) 用 AI 按形式、来源标注&话题相关性标注新闻帖子。适合区分新闻报道和评论的场景。每条已分析帖子 $0.0003 起。
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier) 用 AI 为每条帖子回答你自定义的分类、评分&是非问题。适合预设分析不符合你的标签的场景。每条已分析帖子 $0.0003 起。
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer) 根据 8 个 AI 特征答案，为每条帖子估算 0 到 100 的 Viral Score & 结论。适合研究帖子为何走红或遇冷的场景。每条已分析帖子 $0.0003 起。

## 常见问题&支持

先解答常见问题，再说明在哪里获取帮助。

### 我需要 AI 账号、X API 密钥或登录吗？

不需要。Xquik 的 X Tweet Sentiment Analysis 的价格已包含 AI 费用。你不需要 AI 账号、token 或密钥。你也不需要 X API 密钥、登录或凭据。

### 可以使用自己的问题吗？

可以。自定义的 `analysis.questions` 会替换默认问题。可以发送 1 到 8 个 `choice`、`score` 或 `probability` 问题。选择题接受 2 到 255 个类别。评分题至少需要 2 个有序等级。要比较的多次运行请保持问题不变。

### 为什么某行返回时分析失败或被跳过？

`analysis.status` 为 `failed` 或 `skipped`。该 Actor 已收集&交付这条帖子，但 AI 分析没有完成。`analysis.reason` 会写明原因。`context_limit` 表示你的上下文&目标没有给帖子留出空间。`service_unavailable` 表示分析服务曾短暂不可用。这些行不产生结果费用。请缩短 `analysis.context`，或重新运行受影响的 ID。

帖子超过 `maxContextBytes` 时，该 Actor 仍会分析它。它先截断被引用&被回复的帖子，再截断这条帖子本身。这时 `analysis.contextAvailability.postText` 为 `truncated`。要保留更多文本，可以把 `maxContextBytes` 提高到最多 64,000。

### 分析会核实事实吗？

不会。答案描述帖子表达了什么&帖子如何表述。概率表示 AI 的置信度，不代表事实。重要的分类结果请对照原始帖子核查，每行都保留了原帖。

### 支持哪些语言？

提取支持 X 提供的所有语言。我们先在英文客户场景中验证分析。其他支持的语言返回结构相同的答案。在每种语言中，`unclear` 类别&概率都会反映不确定性。

### 如何控制成本？

过滤、去重 & `maxItems` 都在分析之前生效。你只为不重复且符合过滤条件的帖子付费。使用精确的搜索运算符、日期范围&互动下限。大规模运行前，先用较小的 `maxItems` 检查答案质量。

### 分析 X 数据合法吗？

该 Actor 请求的是公开的 X 字段。结果可能包含个人数据。请确认用途合法&遵守适用的隐私规定。不确定时，请咨询专业律师。

### 可以使用 API、定时调度&集成吗？

可以。[API 标签页](https://apify.com/xquik/x-tweet-sentiment-analysis/api) 提供 Python、JavaScript & cURL 示例。用 Apify [定时调度](https://docs.apify.com/platform/schedules) 定期运行。把上次的数据集 ID 作为 `monitor.baselineDatasetId` 传入，就能看到变化。Apify 集成还能把运行连接到 webhook、Make、Zapier、n8n & Google Sheets。

### 在哪里获取帮助？

在 [Issues 标签页](https://apify.com/xquik/x-tweet-sentiment-analysis/issues) 提交 issue，并附上运行 ID。键值存储中的免费诊断信息会说明需要注意的运行。没有返回任何行的运行，会在状态中说明原因。
