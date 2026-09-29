<p align="center">
  <a href="README.md">English</a> ·
  <a href="README.es.md">Español</a> ·
  <strong>Türkçe</strong> ·
  <a href="README.zh-CN.md">简体中文</a> ·
  <a href="README.ja.md">日本語</a> ·
  <a href="README.ko.md">한국어</a> ·
  <a href="README.de.md">Deutsch</a> ·
  <a href="README.fr.md">Français</a> ·
  <a href="README.it.md">Italiano</a>
</p>

<table align="center"><tr><td align="center">
<a href="https://youtu.be/4UOSpoOoC3Y?t=367"><img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" width="720" alt="Framer, Xquik MCP'yi kodlama ajanlarına bağlıyor"></a><br>
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">Framer'ın Xquik scraper'larını Claude Code, Codex, Cursor ve daha fazlasıyla nasıl kullandığını 6:07'den itibaren izle.</a>
</td></tr></table>

Xquik, en eksiksiz X verisini sunan, dünyanın en hızlı ve en ucuz X (Twitter)
scraper hizmetidir. Xquik'in X Tweet Scraper'ı gönderileri (tweet'leri),
yanıtları, profilleri, Listeleri ve aramaları 50'den fazla filtreyle toplar.
Herkese açık karşılaştırma testleri, gönderi kazıyan 12 Actor arasında en ucuz
ve en hızlısının bu olduğunu kanıtlıyor.
[Aşağıdaki karşılaştırma testinin](#karşılaştırma-testi) gösterdiği gibi
satırları, medyan Actor'ın 2 katı alan taşır. Diğer Apify Actor'larının çoğu,
filtrelemeden veya tekilleştirmeden önce ücret alır. Xquik yalnızca teslim
edilen, benzersiz ve filtrene uyan sonuçlar için ücret alır.

Herkese açık X (Twitter) gönderilerini **her Apify planında teslim edilen sonuç
başına $0.00015'ten başlayan fiyatla** kazı. Apify, platform kullanımını ayrıca
faturalandırır. X girişi gerekmez, başlatma veya sorgu ücreti de ödemezsin.
Geliştiren: [Xquik](https://xquik.com).

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## X Tweet Scraper ne yapar?

Xquik'in X Tweet Scraper'ı gönderileri, etkileşim metriklerini, yazarların
herkese açık profillerini ve medyayı döndürür. URL, kullanıcı adı, Liste ID'si,
gönderi ID'si ve arama sorgusu kabul eder. 50'den fazla filtre sunar.

### Temel özellikler

- Filtreler ve tekilleştirme faturalamadan önce çalışır.
- Tek bir girdi ID ile getirme, zaman akışı, Liste, arama ve etkileşim
  modlarını destekler.
- Gönderi ID girdilerinde sabit bir adet sınırı yok. Apify harcama ve zaman
  aşımı ayarların yine geçerli.
- Çalıştırma günlükleri sayfa sürelerini `fetchDurationMs`,
  `processingDurationMs`, `pushDurationMs`, `statusDurationMs` ve
  `fullPageDurationMs` alanlarında gösterir.
- Apify çalıştırmayı yeniden başlatırsa teslim edilen satırlar ve ilerleme
  korunur.

### Kullanım örnekleri

- Araştırma, zenginleştirme, analiz & yapay zekâ eğitimini tweet başına daha çok
  alanla besle. Medyan satırımızda 2026-09-29'da 63 alan vardı. Bu, 11 başka
  Actor'ın medyanının 2 katı.
- Gönderilerdeki marka duygu durumunu takip et.
- Rakip gönderilerini ve sektör terimlerini izle.
- Herkese açık konuşmalarda potansiyel müşteri bul.
- Araştırma için herkese açık veri kümeleri topla.
- Yüksek etkileşim alan herkese açık gönderileri bul.

### X Tweet Scraper hangi verileri çıkarabilir?

| Alan                   | Açıklama                                                                    |
| ---------------------- | --------------------------------------------------------------------------- |
| `id`                   | Gönderi ID'si                                                               |
| `text`                 | Gönderinin tam metni (25 bin karaktere kadar Note Tweet'ler dahil)          |
| `createdAt`            | X'in kendi zaman damgası metni                                              |
| `likeCount`            | Beğeni sayısı                                                               |
| `retweetCount`         | Yeniden gönderi sayısı                                                      |
| `replyCount`           | Yanıt sayısı                                                                |
| `quoteCount`           | Alıntı sayısı                                                               |
| `viewCount`            | Görüntülenme sayısı                                                         |
| `bookmarkCount`        | Yer işareti sayısı                                                          |
| `lang`                 | Gönderi dili                                                                |
| `url`                  | Gönderinin doğrudan bağlantısı                                              |
| `tweetUrl`             | Düz çıktıdaki gönderi URL'si takma adı                                      |
| `twitterUrl`           | Düz çıktıdaki twitter.com biçimli URL                                       |
| `author`               | Erişilebilen yazar alanları (kullanıcı adı, biyografi, web sitesi, sayılar) |
| `authorUsername`       | Düz çıktıdaki yazar kullanıcı adı                                           |
| `authorFollowers`      | Düz çıktıdaki yazar takipçi sayısı                                          |
| `authorUrl`            | Varsa düz çıktıdaki yazar web sitesi                                        |
| `authorDescription`    | Düz çıktıdaki yazar biyografisi                                             |
| `authorCoverPicture`   | Düz çıktıdaki yazar kapak görseli URL'si                                    |
| `authorPinnedTweetIds` | Düz çıktıdaki yazarın sabitlenmiş gönderi ID'leri                           |
| `media`                | Ekli görseller, videolar, GIF'ler                                           |
| `mediaUrls`            | Düz çıktıdaki medya URL'leri                                                |
| `imageUrls`            | Düz çıktıdaki görsel URL'leri                                               |
| `videoUrls`            | Düz çıktıdaki video URL'leri                                                |
| `entities`             | Hashtag'ler, URL'ler, bahsetmeler ve video zaman damgaları                  |
| `displayTextRange`     | Varsa X'in görünen metin aralığı                                            |
| `contentDisclosure`    | Varsa içerik beyanı metadata'sı                                             |
| `conversationControl`  | Yanıt kuralı ve herkese açık konuşma sahibi                                 |
| `reactionContext`      | Bir tepkinin işaret ettiği herkese açık gönderi ve kullanıcı                |
| `limitedActions`       | Herkese açık etkileşim kısıtlamaları ve uyarıları                           |
| `isLimitedReply`       | Yanıtların kısıtlı olup olmadığı                                            |
| `isNoteTweet`          | Bunun bir Note Tweet (uzun gönderi) olup olmadığı                           |
| `isQuoteStatus`        | Bu gönderinin başka bir gönderiyi alıntılayıp alıntılamadığı                |
| `isRetweet`            | Bu satırın yeniden gönderi olup olmadığı, orijinali ekli                    |
| `isPinned`             | Yazarın bu gönderiyi sabitleyip sabitlemediği, düz satırlarda               |
| `isReply`              | Bu gönderinin bir yanıt olup olmadığı                                       |
| `quoted_tweet`         | Alıntılanan gönderi nesnesi (alıntıysa)                                     |
| `conversationId`       | Gönderi dizisi/konuşma ID'si                                                |
| `resultType`           | Zengin satırlar, etkileşim satırları ve tanılamalar için satır türü         |
| `sourceTweetId`        | Makale ve etkileşim modları için kaynak gönderi ID'si                       |
| `article`              | `mode: "article"` içinde yapılandırılmış makale verisi                      |

İsteğe bağlı gönderi metadata'sında `authorUnavailable`, `card`, `communityId`,
`communityNote`, `edit`, `exclusiveContent`, `noteTweet` ve `postCta` bulunur.
`isTranslatable`, `place`, `possiblySensitive` ve `viewState` diğer herkese açık
bağlamı tutar. `previousCounts` düzenleme öncesi etkileşimi tutar. `tombstone`
görünürlük uyarılarını tutar. `unmentionedUserIds` konuşmadan ayrılan
kullanıcıları listeler. Alanların tam listesi için OpenAPI'ye bak.

İç içe `author` nesneleri herkese açık profil alanlarını taşır. Bu alanlar
kimlik, sayılar, onay durumu, kullanılabilirlik, profesyonel veriler ve profil
biyografisini kapsar.

Yeniden gönderi satırlarında `isRetweet` değeri `true` olur. `text` alanı
orijinal gönderinin tamamını taşır. `retweeted_tweet` orijinal gönderiyi yazarı
ve sayılarıyla tutar.

Gönderi satırları ayrıca `type`, `source`, `inReplyToId`, `inReplyToUserId`,
`inReplyToUsername` ve `retweeted_tweet` alanlarını tutar. Alıntılanan ve
yeniden gönderilen gönderiler her iç içe seviyede aynı alanları taşır.

Medya; kullanılabilirlik, geometri, etiket ve video varyantı bilgisini taşır.
`watchNowUrl` ve `visitSiteUrl` eylemlerini de taşır.

Satırlar yalnızca görüntüleyene ait durumu asla içermez. Actor takip, engelleme,
sessize alma, yer işareti, beğeni, yeniden gönderi, düzenleme izni ve benzeri
görüntüleyen bayraklarını kaldırır. Ham çıktı da bunları atar.

## X Tweet Scraper ile tweet verisi nasıl kazınır?

Apify Console'da şu adımları izle:

1. Bir [görev örneği](#görev-örnekleri) ya da Input sekmesini aç.
2. URL, kullanıcı adı, gönderi ID'si veya arama terimi ekle.
3. `maxItems` değerini ve gereken filtreleri ayarla.
4. Start'a tıkla ve çalıştırmanın bitmesini bekle.
5. Veri kümesini JSON, CSV, Excel veya HTML olarak dışa aktar.

Aşağıdaki tarifler her kaynağın girdisini gösterir.

### URL yapıştır

Gönderi, profil, arama veya Liste URL'lerini karışık yapıştırabilirsin:

```json
{
  "startUrls": [
    { "url": "https://x.com/elonmusk/status/1846987139428634858" },
    { "url": "https://x.com/nasa" },
    { "url": "https://x.com/search?q=AI%20lang%3Aen" },
    { "url": "https://x.com/i/lists/1748648376080666720" }
  ],
  "maxItems": 500
}
```

Gönderi URL'leri o gönderileri tekrarsız ve girdi sırasıyla döndürür. Profil
URL'leri hesabın gönderilerini döndürür. Arama URL'leri kendi sorgusunu
çalıştırır. Liste URL'leri Listenin gönderilerini döndürür. `maxItems`,
yapıştırdığın tüm URL'lerin toplam sonucunu sınırlar.

### Birden çok kullanıcı adı kazı

Kullanıcı adları, birçok `from:username` aramasının kısa yoludur:

```json
{ "twitterHandles": ["elonmusk", "nasa", "openai"], "maxItems": 100 }
```

Her kullanıcı adı o hesabın gönderilerini döndürür. Actor, tekrarlanan satırları
çıktıdan ve faturadan önce kaldırır. Kullanıcı adlarını `@` ile ya da `@`
olmadan ekleyebilirsin. Kullanıcı adları ve profil URL'leri, X'teki Gönderiler
sekmesi gibi yeniden gönderileri de getirir. Tarih veya filtre olsa bile bunları
tutar. Onları çıkarmak için `tweetTypes.excludeRetweets` ayarını aç.

### Gönderi ara

Search terms alanına 1 veya daha fazla sorgu yaz:

```json
{
  "searchTerms": ["from:elonmusk AI", "#bitcoin lang:en"],
  "maxItems": 1000,
  "queryType": "Latest"
}
```

`mode` değeri `tweet` veya `tweets` olup gönderi ID'si yoksa sorgular arama
olarak çalışır. Böylece geçerli `searchTerms` değerleri boş bir ID sonucuna
düşmez.

Bir hesabın geçmişini tarih aralığıyla toplamak da mümkün, örneğin
`from:elonmusk since:2026-01-01 until:2026-01-02`. Her terim kendi `searchTerm`
bilgisini korur. `maxItems`, tüm arama terimlerinin toplam sonucunu sınırlar.
Actor, dönen her gönderiyi `since:`, `until:` ve Unix zamanı aralıklarına göre
kontrol eder. Filtreli aramalar eşleşme bulana veya X'te sonuç kalmayana kadar
okumaya devam eder.

`from:` içeren bir arama terimi, X aramasının döndürdüğünü döndürür. Bu yüzden
yeniden gönderileri dışarıda bırakır. Onları tutmak için
`include:nativeretweets` ekle. Yalnızca yeniden gönderiler için
`filter:nativeretweets` kullan.

### Gönderileri ID ile getir

```json
{ "tweetIds": ["1846987139428634858", "1858743654778892784"], "maxItems": 100 }
```

Sonuçlar girdi sırasını korur, tekrarları atar ve yalnızca istediğin gönderileri
içerir. Bu sorgu `tweetId`, `tweetIDs`, `tweets`, `postIds`, `lookupPostIds`,
`tweetUrls` ve `postUrls` alanlarını da kabul eder.

### Etkileşim, gönderi dizisi ve makale modları

Girdideki diğer alanlardan bağımsız olarak tek bir modu seçmek için `mode`
ayarla:

```json
{ "mode": "replies", "replyTweetIds": ["1846987139428634858"], "maxItems": 100 }
```

Gönderi ve arama modları `tweet`, `tweets` ve `search`. Profil modları
`profileTweets`, `profileReplies`, `profileMedia` ve `profileLikes`.
`listTweets` Liste gönderilerini okur. `article` ise bir gönderideki X
makalesini okur. Tek bir gönderi için modlar `replies`, `quotes`, `thread`,
`retweeters` ve `favoriters`.

`profileTweets`, X'teki profilin Gönderiler sekmesini izler. Hesabın
gönderilerini, yeniden gönderilerini ve kendi gönderilerine verdiği yanıtları
döndürür. Satırlar tarih sırasıyla gelir. Actor, başka hesaplara verilen
yanıtları faturalamadan önce atar. Diğer yazarlardan gelen konuşma bağlamını da
atar.

Yalnızca orijinal gönderiler için istemediğin türleri hariç tut:

```json
{
  "mode": "profileTweets",
  "twitterHandles": ["apify"],
  "tweetTypes": { "excludeReplies": true, "excludeRetweets": true },
  "maxItems": 100
}
```

`tweetTypes.excludeReplies`, `excludeRetweets` ve `excludeQuotes` her kaynakta
çalışır. Bir arama bunları X'e `-filter:replies`, `-filter:nativeretweets` ve
`-filter:quote` olarak gönderir. Profilde veya Listede bu satırları Actor
kendisi atar. Hariç tutulan satırlar veri kümesine ulaşmaz, bu yüzden onlar için
ödeme yapmazsın. `maxItems` sayısına da girmezler.

`profileReplies`, X'in Yanıtlar sekmesini izler. Hesabın kendi gönderilerini ve
yanıtlarını döndürür. Actor, diğer yazarlardan gelen konuşma bağlamını dışarıda
bırakır. Yalnızca yanıt istiyorsan `filter:replies` veya bir `to:` araması
kullan.

Arama ve sayfalı gönderi modları `time.since`, `time.until`, Unix zaman
damgaları ve `lang` destekler. Bu modlar profildeki Gönderiler, Yanıtlar, Medya
ve Beğeniler sekmelerini, Listeleri, yanıtları, alıntıları ve gönderi dizilerini
kapsar. Karşılık gelen düz tarih operatörleri de çalışır. Actor her satırı
faturalamadan önce doğrular. Alt tarih sınırı dahildir. Üst sınır hariçtir.
Tarih filtreleri, kullanılabilir tarihi olmayan satırları dışarıda bırakır. Dil
filtreleri, dili eksik veya uyuşmayan satırları dışarıda bırakır. Filtrelenen
satırlar sonuç sınırından düşmez.

`since` ve `until` için aynı tarih boş bir aralık verir. 1 tam gün için `until`
değerini ertesi güne ayarla. Tarih aralıklı Liste çalıştırmaları eski günlere
hızla ulaşır. Belirlediğin alt sınırı geçince biterler. Listede çok eskiye giden
aralıklar birkaç yanıtı kaçırabilir. Gönderi filtreleri kullanıcı listelerine ve
doğrudan gönderi veya makale getirmelerine uygulanmaz.

`time.withinTime` ve `within_time` aynı modlarda çalışır. `7d` değeri,
çalıştırma okumaya başlamadan önceki son 7 günü tutar. 2006'dan öncesine uzanan
bir aralık her gönderiyi tutar.

`mode: "replies"` daha katıdır. Her gönderi satırının `inReplyToId` değeri
istenen gönderi ID'sine eşittir. İç içe konuşma yanıtları asla doğrudan yanıt
sayılmaz. X bildirdiğinden az yanıt gösterirse Actor bulduğu satırları tutar.
Sınırına ulaşılmadıysa `diagnostics` içine 1 `replies-incomplete` kaydı ekler.
Çalıştırma, sınırına ulaşana veya X'te yanıt kalmayana kadar kısmi kalır.
`replyCoverage` yanıt sayılarını ve kapsama ayrıntılarını bildirir. `maxItems`
değerini istediğin toplama ayarla. Tek bir yanıt hedefi için 25.000'in üstü de
olur.

Makale satırlarında `resultType: "article"`, `sourceTweetId`, `article` ve
isteğe bağlı `author` bulunur. Etkileşim kullanıcı satırlarında
`resultType: "user"`, `sourceTweetId` ve `engagementMode` bulunur.

Yeniden gönderenler normal bir herkese açık etkileşim modudur. Beğenenler modu
garantili değildir. X beğenenleri yalnızca uygun gönderilerde veya sahibinin
görebildiği gönderilerde gösterebilir. Profil beğenileri de garantili değildir,
çünkü birçok herkese açık profilde okunabilir bir Beğeniler sekmesi yok. X hiç
kullanıcı veya beğenilen gönderi göstermezse Actor ücretsiz bir `diagnostics`
kaydı yazar. Gönderi satırlarında yer işareti sayısı olabilir. X, bir gönderiyi
hangi hesapların yer işaretlerine eklediğini göstermez.

### Düz CSV satırları dışa aktar

Varsayılan iç içe JSON alanlarını koru ya da tabloya uygun sütunlar ekle:

```json
{ "searchTerms": ["from:nasa moon"], "maxItems": 100, "outputPreset": "flat" }
```

Düz çıktı `author` ve `media` alanlarını değiştirmez. `authorUsername`,
`authorName`, `authorFollowers`, `tweetUrl`, `twitterUrl`, `mediaUrls`,
`imageUrls` ve `videoUrls` gibi üst düzey alanlar ekler.

Her düz gönderi satırında `media` bulunur. Medyası olmayan bir gönderide bu
liste boştur. Böylece her satır, tabloda veya tipli bir pipeline'da aynı
anahtarlara sahip olur.

### Alan adlarını seç

Varsayılan olarak eski alan adları kullanılır. Zengin veya ham sonuçlar için bir
stil seç:

```json
{
  "searchTerms": ["from:nasa moon"],
  "maxItems": 100,
  "outputVariant": "rich",
  "fieldStyle": "snake_case"
}
```

Üst düzey ve iç içe sonuç alanları için `camelCase` veya `snake_case` kullan.
Düz snake case çıktısında `author_username` ve `media_urls` gibi alanlar olur.
`raw` altındaki güvenli kaynak anlık görüntüleri orijinal kaynak anahtarlarını
korur. Çakışan kaynak adları da veri kaybı olmasın diye değişmeden kalır.

Eski tanılamalar `resultType`, `actorVersion` ve `replyCoverage` kullanır.
Zengin ve ham çıktı `fieldStyle` ayarını her iç içe seviyede uygular. Örneğin
snake case `result_type`, `actor_version` ve `reply_coverage` kullanır. Overview
veri kümesi görünümü iki stille de çalışır. Çalıştırmanın `fieldStyle` değerine
uyan Console görünümünü seç. `camelCase fields`, `camelCase` bekler.
`snake_case fields`, `snake_case` bekler. Görünümler yalnızca sütun seçer.
Depolanan veya dışa aktarılan veriyi asla yeniden adlandırmaz.

### Gelişmiş filtreleri birleştir

Kullanıcı, tarih, konum, medya ve etkileşim filtrelerini birleştir:

```json
{
  "twitterContent": "AI",
  "from": "elonmusk",
  "since": "2026-01-01_00:00:00_UTC",
  "until": "2026-03-01_00:00:00_UTC",
  "lang": "en",
  "filter:media": true,
  "min_faves": 1000,
  "maxItems": 500
}
```

İki X arama modunu tek çalıştırmada kullanmak için `queryType: "Latest + Top"`
ayarla. Actor tekrarları faturalamadan önce kaldırır ve sınırını iki moddan
gelen sonuçlarla doldurur. `Top` alaka düzeyine göre sıralar ve her eşleşmeyi
döndürmez. Eşleşen her sorguyu `searchTerm` alanı olarak eklemek için
`includeSearchTerms: true` ayarla.

`lang` ayarladığında Actor dönen her gönderinin dilini doğrular. Uyuşmayanları
atlar ve eşleşen gönderiler için okumaya devam eder.

## Görev örnekleri

50 herkese açık görevden birini seç. Her görevin sınırlı bir girdisi ve uygun
bir veri kümesi görünümü var. Her görev gerçek bir arama veya hedefle açılır.
Çalıştırmadan önce düzenle.

- [Fetch fresh X posts for AI agents](https://apify.com/xquik/x-tweet-scraper/examples/search-x-posts-for-ai-agents)
- [Build an X dataset for RAG](https://apify.com/xquik/x-tweet-scraper/examples/build-x-rag-dataset)
- [Extract an X article for RAG](https://apify.com/xquik/x-tweet-scraper/examples/extract-x-article-for-rag)
- [Monitor AI search visibility on X](https://apify.com/xquik/x-tweet-scraper/examples/monitor-ai-search-visibility-on-x)
- [Track AI SEO and generative engine optimization](https://apify.com/xquik/x-tweet-scraper/examples/track-generative-engine-optimization-talk)
- [Discover AI agent tools on X](https://apify.com/xquik/x-tweet-scraper/examples/discover-ai-agent-tools-on-x)
- [Collect AI product feedback](https://apify.com/xquik/x-tweet-scraper/examples/collect-ai-product-feedback)
- [Monitor brand mentions on X](https://apify.com/xquik/x-tweet-scraper/examples/monitor-brand-mentions-on-x)
- [Export Twitter data to CSV](https://apify.com/xquik/x-tweet-scraper/examples/export-twitter-data-to-csv)
- [Collect replies to an OpenAI post](https://apify.com/xquik/x-tweet-scraper/examples/collect-replies-to-an-openai-post)
- [Extract a complete Twitter thread](https://apify.com/xquik/x-tweet-scraper/examples/extract-complete-twitter-thread)
- [Collect electric vehicle conversations](https://apify.com/xquik/x-tweet-scraper/examples/collect-electric-vehicle-conversations)

## Tweet kazımak ne kadar tutar?

Xquik'in X Tweet Scraper'ı her Apify planında teslim edilen satır başına
$0.00015 tutar. Apify, platform kullanımını ayrıca faturalandırır. Xquik,
teslim edilen her veri satırı için 1 kez ücret alır. Tanılamalar `diagnostics`
çıktısında ücretsizdir.

- Xquik aboneliği gerekmez.
- Ayrı bir başlatma veya sorgu ücreti ödemezsin. URL'ler ve tekil gönderi
  getirmeleri de ücret eklemez.
- Filtreler ve tekilleştirme faturalamadan önce çalışır. Filtrelenen veya
  tekrarlanan satırlar için asla ödemezsin.
- Girdisiz, geçersiz girdili ve sıfır çıktılı çalıştırmalar, ücretsiz
  `diagnostics` çıktısına ne yapman gerektiğini söyleyen 1 kayıt yazar.

Sorun yaşayan veya büyük bir çalıştırma ayrıca bir `run-report` kaydı yazar.
Bu kayıttaki `estimatedChargeUsd`, Apify'ın canlı olay başına ödeme fiyatını
kullanır. Sorunlu çalıştırmalar her zaman `run-report` yazar. Girdisiz ve
geçersiz girdili çıkışlar da buna dahil. Sorunsuz biten küçük bir çalıştırma bu
kaydı atlar, böylece Apify kullanımı azalır. Kaydı her çalıştırmada almak için
`alwaysSaveRunRecords` seçeneğini aç. Çalıştırma raporları veri satırlarını
`realRows`, tanılamaları `diagnosticRows` içinde ayrı tutar.

Bir çalıştırmanın harcamasını sınırlamak için
[Çalıştırma seçenekleri](#çalıştırma-seçenekleri) bölümüne bak.

## Karşılaştırma testi

Xquik'in X Tweet Scraper'ı, gönderi kazıyan diğer 11 Actor'ı maliyette ve hızda
geride bıraktı. Medyan satırında 63 alan vardı. Bu, diğerlerinin medyanının 2
katı.

| Actor                                                             | İşe yarar tweet | İşe yarar tweet başına maliyet | Saniyede işe yarar tweet | Satır başına alan | Herkese açık çalıştırma                                                   |
| ----------------------------------------------------------------- | --------------: | -----------------------------: | -----------------------: | ----------------: | ------------------------------------------------------------------------- |
| xquik/x-tweet-scraper                                             |             890 |                      $0.000175 |                     39.2 |                63 | [Çalıştırmayı gör](https://console.apify.com/view/runs/fflWVxHwYvtyHpAQX) |
| xquik/x-tweet-scraper                                             |             883 |                      $0.000176 |                     25.2 |                63 | [Çalıştırmayı gör](https://console.apify.com/view/runs/EtSdBgkUcH4M1uicf) |
| xquik/x-tweet-scraper                                             |             882 |                      $0.000177 |                     25.7 |                63 | [Çalıştırmayı gör](https://console.apify.com/view/runs/SK3ZWhPwzGJYoYQba) |
| xquik/x-tweet-scraper                                             |             877 |                      $0.000178 |                     26.9 |                63 | [Çalıştırmayı gör](https://console.apify.com/view/runs/JRdbcigkBMCaFuH1W) |
| scrapesmith/twitter-x-scraper-tweets-profiles-replies             |             813 |                      $0.000185 |                     10.5 |                36 | [Çalıştırmayı gör](https://console.apify.com/view/runs/mIT1zf0xccCsYWO1E) |
| scrapesmith/twitter-x-scraper-tweets-profiles-replies             |             805 |                      $0.000187 |                     10.6 |                36 | [Çalıştırmayı gör](https://console.apify.com/view/runs/p1MUeElsamZUepTpm) |
| scrapesmith/twitter-x-scraper-tweets-profiles-replies             |             805 |                      $0.000187 |                     10.7 |                36 | [Çalıştırmayı gör](https://console.apify.com/view/runs/pQlQa0GMm7BWTUUOB) |
| kaitoeasyapi/twitter-x-data-tweet-scraper-pay-per-result-cheapest |             880 |                      $0.000250 |                      9.1 |                46 | [Çalıştırmayı gör](https://console.apify.com/view/runs/3Fn8yvqncsWdcw1I2) |
| scraper_one/x-posts-search                                        |             804 |                      $0.000314 |                      3.3 |                14 | [Çalıştırmayı gör](https://console.apify.com/view/runs/M9TgeCLLKZlNTOrj0) |
| danek/twitter-scraper                                             |             807 |                      $0.000347 |                      5.0 |                27 | [Çalıştırmayı gör](https://console.apify.com/view/runs/kyeJqCeaARxQPGM5W) |
| tweetapi/twitter-x-search-scraper                                 |             337 |                      $0.000374 |                      2.6 |                28 | [Çalıştırmayı gör](https://console.apify.com/view/runs/mxkP8EDAUVtCZdobb) |
| api-ninja/x-twitter-advanced-search                               |             837 |                      $0.000430 |                      7.4 |                28 | [Çalıştırmayı gör](https://console.apify.com/view/runs/XAWKinvZyPNjCwrib) |
| apidojo/twitter-scraper-lite                                      |             251 |                      $0.000494 |                     12.9 |                54 | [Çalıştırmayı gör](https://console.apify.com/view/runs/1t4XwmbQNTtwMJ0Ta) |
| apidojo/tweet-scraper                                             |             481 |                      $0.000832 |                      7.8 |                55 | [Çalıştırmayı gör](https://console.apify.com/view/runs/PydoBgS1YRblg29bB) |
| xtdata/twitter-x-scraper                                          |           1.378 |                      $0.001168 |                     11.9 |                67 | [Çalıştırmayı gör](https://console.apify.com/view/runs/U91dRXEvKvqu41aop) |
| seemuapps/x-tweet-scraper                                         |             805 |                      $0.001242 |                      6.9 |                24 | [Çalıştırmayı gör](https://console.apify.com/view/runs/FstursEw43TbcipYU) |
| maximedupre/twitter-scraper                                       |              46 |                      $0.002846 |                      0.3 |                31 | [Çalıştırmayı gör](https://console.apify.com/view/runs/Hs8irhEcAfWcQNc4w) |

Her Actor aynı aramayı aynı filtrelerle yaptı. Diğer Actor'lar 2026-09-27'de
çalıştı. Xquik'in çalıştırmaları 2026-09-29'da `outputVariant: "rich"` ile
çalıştı. Tüm çalıştırmalar Bronze katmanındaydı. İşe yarar tweet; benzersiz,
İngilizce, orijinal ve en az 10 beğenili bir gönderidir. Maliyet, müşterinin işe
yarar tweet başına toplam harcamasıdır. Bizimkine müşterilerimizin ödediği Apify
kullanımı dahil. Satır başına alan, boş olmayan alanların medyan sayısıdır, iç
içe olanlar dahil. Bir liste 1 alan sayılır. Girdisini, günlüğünü & veri
kümesini görmek için bir çalıştırmayı aç.

## Boş, kısmi ve durdurulan çalıştırmalar

Xquik'in X Tweet Scraper'ı boş, kısmi ve durdurulan çalıştırmaları ücretsiz
açıklar. Çalıştırma durumu, çalıştırmanın neden durduğunu söyler.
Ücretlendirilen sonuçları ve okunan hedefleri de sayar.

### Boş sonuçlar

Yeni bir çalıştırmaya para vermeden önce boş sonucu incele. Raporlardaki ve son
tanılamalardaki `filtering` nesnesi, filtrelerinin çıkardığı satırları sayar.
`serverFilteredRows`, `actorFilteredRows` ve `pagesWithUnknownServerFiltering`
alanlarını oku. Filtrelenen satırlar için asla sonuç ücreti ödemezsin.

X'te sonuç kalmazsa çalıştırma, belirlediğin sınıra ulaşmadan bitebilir. Bu
durumda `completionReason: "source_exhausted"` ile `outcome: "complete"`
bildirir. Kesilen çalıştırmalar kısmi sonuç durumunu ve yeniden deneme
yönergelerini korur.

### Kısmi çalıştırmalar

`failedSubtargets`, bir hatadan sonra duran sorguları ve profil hedeflerini
sayar. Teslim edilen satırlar veri kümesinde kalır ve faturaya girer. Hata,
hedefin olmadığı anlamına gelmez. Bu çalıştırmalar
`completionReason: "partial_failure"` kullanır.

Kesilen bir çalıştırma ayrıca ücretsiz bir `partial` tanılaması yazar. Teslim
edilmiş sonuçlar olduğu gibi kalır. Tanılama `availableResults`,
`failedTargets`, `retryable` ve `nextAction` alanlarını bildirir. Actor'ın
başarıyla bitmesi teslimatı doğrular. Tüm verinin çekildiğini doğrulamaz.

### Durma nedenleri

Durum metni, durmanın her nedenini söyler. Hem bulunamayan bir hesap hem takılan
bir arama varsa ikisini de yazar. `stopCauses` her nedeni kendi `message`,
`retryable` ve `nextAction` alanlarıyla listeler. Nedenler şunlardır:
`target_not_found`, `target_protected`, `search_unavailable`, `likes_hidden`,
`target_failed`, `pagination_safety_limit`, `reply_reach` ve `deadline_reached`.
Nedenlerden biri `retryable` ise çalıştırma da `retryable` olur.

### Bulunamayan ve erişilemeyen hedefler

Bulunamayan veya korumalı bir hedef hata sayılmaz. X'te orada okunacak bir şey
yoktur. Çalıştırma diğer tüm hedefleri sonuna kadar okur. `outcome: "complete"`
bildirir. Tamamlanma nedeni okuduğu hedeflerden gelir, örneğin
`source_exhausted`. `failedSubtargets` bu hedefleri saymaz. Durum metni ve
ücretsiz bir `complete` tanılaması onları sayar. Başka satırı olmayan bir
çalıştırma bunun yerine `zero-output` tanılaması yazar.

X'in çalıştıramadığı bir arama hata sayılır. X.com böyle bir aramada "Bir şeyler
ters gitti" uyarısı gösterir. Çalıştırma bu aramayı yeniden denemeden hemen
durdurur. X'in gizlediği beğeniler de hata sayılır ve okuma hemen durur. X bir
gönderiyi kimin beğendiğini yalnızca yazarına gösterir. Bir hesabın beğendiği
gönderileri de yalnızca o hesaba gösterir.

Tüm hatalar erişilemeyen hedeflerle ilgiliyse tanılamalar `retryable: false`
yazar. Hedef URL'lerini veya kullanıcı adlarını kontrol et ve erişilebilir
herkese açık hesaplar seç. X'in çalıştıramadığı bir aramayı daralt veya
filtrelerini değiştir. Gizli beğeniler yerine yeniden gönderenleri, yanıtları
veya gönderileri oku. Diğer hatalarda bitmemiş hedefler için yeniden deneme
yönergesi kalır.

Tanılama bu hedefleri `unavailableTargets` içinde listeler. Her kayıtta senin
yazdığın haliyle `target`, bir `reason` ve bir `nextAction` bulunur. Neden
`not_found`, `protected`, `search_unavailable` veya `likes_hidden` olur. Bir
arama kaydında, kaldırman gereken operatör gibi bir `fix` de olabilir. Liste en
fazla 100 kayıt tutar. Bu hedefleri girdinden çıkar.

### Güvenlik ve süre sınırları

`completionReason: "pagination_safety_limit"` bir okuma hatası değildir.
Çalıştırma geçerli satırlarını tuttu. Sonra yeni sonuç getirmeyi bırakan bir
hedefi bitirdi. Çalıştırma, verinin eksik çekildiğini bildirir.
`failedSubtargets` `0` kalır. Yalnızca teslim edilen satırlar için ödersin.

Varsayılan Apify zaman aşımı `0` olduğu için çalıştırmaların süre sınırı yoktur.
Actor, üst sınırına ulaşana veya uygun veri bitene kadar devam eder. Yine de
sonlu bir Apify zaman aşımı ayarlayabilirsin. O zaman
`completionReason: "deadline_reached"` bu sınırın yaklaştığını gösterir. Actor
satırları ve raporu kaydeder, sonra sınırdan önce düzgünce çıkar. Teslim edilen
her satır için 1 kez ödersin.

## Girdi

Input sekmesi tüm seçenekleri listeler. `startUrls`, `twitterHandles`,
`listIds`, `tweetIds`, `searchTerms` veya `twitterContent` alanlarından en az
birini doldur. Belgelenmiş takma adları da çalışır. Diğer tüm alanlar isteğe
bağlıdır.

Örnekler:

- Start URLs alanına bir gönderi URL'si yapıştır.
- Bir profil URL'si yapıştır ya da kullanıcı adını X handles alanına ekle.
- Hesap geçmişi toplamak için arama terimi olarak
  `from:user since:YYYY-MM-DD until:YYYY-MM-DD` kullan.
- Start URLs alanına bir Liste URL'si yapıştır.
- Gelişmiş aramalar için `twitterContent` alanını `from:`, `since:`,
  `min_faves:` ve `filter:media` gibi filtrelerle birleştir.

### Desteklenen başlıca arama operatörleri

| Operatör               | Örnek                  | Amaç                                     |
| ---------------------- | ---------------------- | ---------------------------------------- |
| `from:`                | `from:elonmusk`        | Yalnızca bu kullanıcının gönderileri     |
| `to:`                  | `to:OpenAI`            | Yalnızca bu kullanıcıya verilen yanıtlar |
| `@`                    | `@nasa`                | Bu kullanıcıdan bahseden gönderiler      |
| `list:`                | `list:123456`          | Liste üyelerinin gönderileri             |
| `lang:`                | `lang:en`              | Dile göre filtrele                       |
| `since:` / `until:`    | `since:2026-01-01`     | Tarih aralığı                            |
| `min_faves:`           | `min_faves:100`        | Etkileşim eşiği                          |
| `min_retweets:`        | `min_retweets:50`      | Yeniden gönderi eşiği                    |
| `filter:media`         | `filter:media`         | X medya arama operatörü                  |
| `filter:videos`        | `filter:videos`        | X video arama operatörü                  |
| `filter:images`        | `filter:images`        | X görsel arama operatörü                 |
| `filter:links`         | `filter:links`         | Yalnızca bağlantı içeren gönderiler      |
| `filter:replies`       | `filter:replies`       | Yalnızca yanıtlar                        |
| `filter:quote`         | `filter:quote`         | Yalnızca alıntılar                       |
| `filter:blue_verified` | `filter:blue_verified` | Yalnızca Premium kullanıcılar            |

X artık `filter:vine`, `filter:consumer_video`, `filter:pro_video`,
`filter:news` veya `retweets_of:` ile arama yapmıyor. Bunlardan birini içeren
bir arama hemen biter. Ücretsiz bir tanılama düzeltmeyi söyler. Her sorguyu en
fazla 512 karakterde tut. X daha uzun sorguları aramaz.

Tarih aralıkları alt sınırı içerir, üst sınırı içermez. Actor her gönderiyi
eklemeden veya ücretlendirmeden önce iki sınırı da kontrol eder.

Operatörlerin tam listesi için
[Twitter Advanced Search](https://github.com/igorbrigadir/twitter-advanced-search)
sayfasına bak.

### Başka bir gönderi Actor'ından geçiş yap

Zaten kullandığın girdiyi yapıştır. Xquik'in X Tweet Scraper'ı, gönderi kazıyan
diğer Actor'ların kullandığı alan adlarını okur. Bunları kendi alanlarına eşler.
Belgelenmiş varsayılan yine kanonik adlardır. Bir takma ad asla bir alanı
düşürmez ve ödediğin tutarı değiştirmez. Girdi formu yalnızca kanonik alanları
listeler, böylece kısa kalır. Takma adlar JSON, API, SDK, otomasyon ve kayıtlı
görev girdilerinde çalışır.

| Zaten kullandığın alan                                                                                                                                                 | Xquik bunu şöyle okur                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `startUrls`, `urls`, `tweetUrls`, `postUrls`, `profileUrls`, `accountUrls`                                                                                             | `startUrls`                                                              |
| tek metin olarak `profileUrl`                                                                                                                                          | `startUrls`                                                              |
| `tweetIds`, `tweetIDs`, `tweets`, `postIds`, `lookupPostIds`, `tweet_ids` veya tek metin olarak `tweetId`                                                              | `tweetIds`                                                               |
| `twitterHandles`, `usernames`, `user_names`, `userNameList`, `handles`, `screenNames`, `profileTweets`                                                                 | `twitterHandles`                                                         |
| tek metin olarak `username`, `handle`, `screenName`                                                                                                                    | `twitterHandles`                                                         |
| `searchTerms`, `searchQueries`, `queries`, `search`, liste olarak veya her satırda 1 arama                                                                             | `searchTerms`                                                            |
| `twitterContent`, `query`, `searchQuery`                                                                                                                               | `twitterContent`                                                         |
| `maxItems`, `maxResults`, `max_results`, `resultsLimit`, `count`, `resultsCount`, `numberOfTweets`, `maxPosts`, `max_posts`, `max_items`, `maxTweets`, `tweetsDesired` | `maxItems`                                                               |
| `sort`                                                                                                                                                                 | `queryType`                                                              |
| `tweetLanguage`, `language`                                                                                                                                            | `lang`                                                                   |
| `author`, `inReplyTo`, `mentioning`                                                                                                                                    | `from`, `to`, `@`                                                        |
| `start`, `startDate`, `end`, `endDate`                                                                                                                                 | `since`, `until`                                                         |
| `minimumRetweets`, `minimumFavorites`, `minimumReplies`                                                                                                                | `min_retweets`, `min_faves`, `min_replies`                               |
| `onlyImage`, `onlyVideo`, `onlyQuote`, `onlyTwitterBlue`                                                                                                               | `filter:images`, `filter:videos`, `filter:quote`, `filter:blue_verified` |
| `geotaggedNear`, `withinRadius`                                                                                                                                        | `near`, `within`                                                         |
| Google Search Scraper'daki `quickDateRange`, örneğin `d7`, `w2`, `m1` veya `y`                                                                                         | `since_time`, çalıştırmanın başlangıcından geriye sayılır                |

Yapıştırdığın girdi şöyle davranır:

- Her kaynak çalışır. URL, kullanıcı adı, arama terimi, Liste ID'si ve gönderi
  ID'si içeren bir girdi hepsini çalıştırır. `maxItems` tüm çalıştırma için
  geçerlidir.
- `searchTerms` yanındaki bir arama sorgusu 1 terim daha olarak çalışır.
- Actor, `x.com/@name` biçimindeki bir profil URL'sini `x.com/name` gibi okur.
- Bir takma adı ve kanonik alanını birlikte ayarlarsan kanonik değer geçerli
  olur. Çalıştırma günlüğü geçersiz kalan takma adı yazar.
- Çalıştırma günlüğü, Actor'ın yok saydığı her alanı yazar, örneğin
  `customMapFunction`. Actor hiçbir alanı sessizce atmaz.
- Satır sınırı 1 veya daha büyük bir tam sayı olmalı. `maxResults: 0`,
  çalıştırmayı hiçbir şey okumadan veya ücretlendirmeden durdurur.
- `quickDateRange: "m1"` her modda son 1 ayı okur. Aylar ve yıllar takvime göre
  geriye sayılır. Değerde h, d, w, m veya y yoksa çalıştırma hiçbir okuma veya
  ücret olmadan durur.
- Actor'da sayfa birimi yok. `maxPages` yerine `maxItems` kullan.
- Actor'da kullanıcı ID alanı yok. `userId` veya `user_ids` yerine kullanıcı adı
  ya da profil URL'si gönder.
- `from`, `min_faves`, `since_time` ve `filter:images` gibi arama operatörü
  alanları zaten X'in adlarını kullanır. Eşleme gerektirmez.

### Console ve API girdisi

Console formunda şu kontroller var:

- Mode, Output Variant, Field Style, Output Preset ve Sort By doğrulamalı açılır
  menülerdir.
- Start URLs ve Profile URLs, metin veya `{ "url": "..." }` nesnesi kabul eder.
  JSON düzenleyicileri iki API biçimini de korur.
- Yapılandırılmış filtreler gruplu kontroller sunar, iç içe JSON yazman
  gerekmez.
- Form, bir filtre grubunun zaten kapsadığı düz operatörleri gizler. JSON, API,
  SDK, otomasyon ve kayıtlı görev girdileri onları yine kabul eder.
- Max Items ve Max Items Per Target, 1 veya daha büyük tam sayı kabul eder.
  Etkileşim eşikleri 0 veya daha büyük tam sayı kabul eder.

Yeni entegrasyonlarda kanonik alanları kullan. Yukarıdaki geçiş tablosundaki
takma adlar kullanılmaya devam eder. `includeRaw`, `outputVariant: "raw"` için
bir takma addır. `compact` ve `full` gibi eski `outputVariant` değerleri Legacy
çıktı olarak çalışmaya devam eder. Form bunları Legacy takma adları olarak
gösterir.

## Çıktı

Her gönderi satırı, X'in sunduğu metadata'yı içeren bir JSON nesnesidir. Veri
kümesi ve run-report şemaları her alana bir başlık, açıklama ve örnek verir.
Yapay zeka ajanları bir alanın anlamını tahmin etmeden bunları okuyabilir.

Aşağıdaki değerler yalnızca örnektir. Çalıştırmaların X'ten canlı veri döndürür.

```json
{
  "id": "1846987139428634858",
  "text": "The future of AI is...",
  "createdAt": "Sun Mar 15 12:00:00 +0000 2026",
  "retweetCount": 500,
  "replyCount": 120,
  "likeCount": 5000,
  "quoteCount": 80,
  "viewCount": 1200000,
  "bookmarkCount": 300,
  "lang": "en",
  "url": "https://x.com/elonmusk/status/1846987139428634858",
  "author": {
    "id": "44196397",
    "username": "elonmusk",
    "name": "Elon Musk",
    "followers": 180000000,
    "verified": true
  },
  "media": [{ "type": "photo", "url": "https://..." }],
  "entities": {
    "hashtags": [{ "text": "AI" }],
    "urls": [],
    "user_mentions": []
  },
  "isNoteTweet": false,
  "isQuoteStatus": false,
  "isReply": false,
  "conversationId": "1846987139428634858"
}
```

Veri kümesini JSON, CSV, Excel veya HTML olarak dışa aktar.

## Çalıştırma seçenekleri

- Çalıştırma maliyetini sınırlamak için Apify'ın maksimum toplam ücretini
  ayarla. O bütçenin izin verdiği en çok satırı almak için `maxItems` alanını
  boş bırak. Daha az gönderi istiyorsan `maxItems` ayarla.
- Apify API'de `maxTotalChargeUsd`, Console'da Max cost per run ayarını kullan.
  Apify bu sınırı Actor'a `ACTOR_MAX_TOTAL_CHARGE_USD` olarak iletir. Actor
  bunu faturalanabilir en yüksek satır sayısına çevirir.
- Birçok gönderiyi tek seferde getirmek için `tweetIds` gönder. Tek bir hesabın
  gönderilerini okumak için profil URL'si yapıştır.
- Çok sayıda sorguda her sonucu kendi arama terimiyle etiketlemek için
  `includeSearchTerms: true` ayarla.
- İki X arama modunu tek çalıştırmada kullanmak için
  `queryType: "Latest + Top"` ayarla. Tekilleştirme ve sonuç sınırları iki mod
  için birlikte geçerlidir.
- 1 saniyelik kontroller ve imzalı webhook'lar için Xquik hesap veya anahtar
  kelime izlemelerini kullan. Etkin izlemeler her saniye kontrol eder.

### Her zaman en güncel derlemeyi kullan

Yayınlanan tüm düzeltmeleri almak için her çalıştırmada `latest` seç.

Derleme seçmezsen Apify, Xquik'in X Tweet Scraper'ını varsayılan `latest`
derlemesiyle çalıştırır. Console çalıştırmaları ve standart API örnekleri bu
varsayılanı kullanır.

Kayıtlı görevler Actor varsayılanını geçersiz kılabilir. Zamanlamalar ve görev
entegrasyonları bu seçimi kullanır. Her geçersiz kılmayı `latest` olarak tut.

Apify tam derleme numaralarını `latest` sürümüne yönlendirmez. Sabitlediğin
numaraları `latest` ile değiştir. Tam bir derlemeyi yalnızca geçici bir geri
dönüş ya da bir çalıştırmayı yeniden üretmek için kullan.

Apify'ın
[derleme etiketleri](https://docs.apify.com/platform/actors/development/builds-and-runs/builds),
[çalıştırma seçenekleri](https://docs.apify.com/platform/actors/running/runs-and-builds)
ve [görev belgeleri](https://docs.apify.com/platform/actors/running/tasks)
sayfalarını oku.

## İlgili Xquik Actor'ları

Her Xquik Actor'ı aynı veri çekme motorunu, önce filtreleyen faturalandırmayı ve
tanılamaları paylaşır. İhtiyacın olan veriye uyanı seç.

- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): Kullanıcı adı,
  ID veya URL'den profilleri, gönderilerini, yanıtlarını, medyasını ve
  takipçilerini kazır. Aramalar yerine hesaplardan başladığında kullan. Satır
  başına $0.00015'ten başlar.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): 25'ten fazla
  filtreyle gönderilerin altındaki yanıtları, yorumları ve tüm konuşmaları
  kazır. Gönderilerin altındaki tartışmaya ihtiyacın olduğunda kullan. Satır
  başına $0.00015'ten başlar.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): Gönderi
  URL'leri veya ID'leri için toplu olarak yanıtları, alıntıları, yeniden
  gönderenleri ve gönderi dizilerini kazır. Gönderilerle kimin etkileşime
  girdiğini ölçtüğünde kullan. Satır başına $0.00015'ten başlar.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): Takipçileri,
  takip edilenleri, Liste üyelerini, aboneleri ve Topluluk üyelerini profil
  satırları olarak kazır. Kitle veya üye listelerine ihtiyacın olduğunda kullan.
  Profil başına $0.00015'ten başlar.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper):
  Kullanıcı adı, biyografi ve konuma göre kullanıcıları takipçi, onay, hesap
  yaşı ve konum filtreleriyle arar. Aramadan hesap listeleri oluşturduğunda
  kullan. Profil başına $0.00015'ten başlar.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): Liste URL'lerinden
  veya ID'lerinden Liste gönderilerini, üyelerini ve takipçilerini kazır.
  Kaynaklarını özenle seçilmiş bir Liste belirlediğinde kullan. Satır başına
  $0.00015'ten başlar.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): Topluluk
  bilgilerini, gönderilerini, aramalarını, üyelerini ve moderatörlerini kazır.
  Kaynakların X Toplulukları olduğunda kullan. Satır başına $0.00015'ten başlar.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): Sıralama,
  hacim, sorgu ve WOEID ile konuma göre gerçek zamanlı gündemi kazır. Nerede
  neyin gündemde olduğunu takip ettiğinde kullan. Gündem başlığı başına
  $0.00015'ten başlar.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): Uzun biçimli
  X Makalelerini kapak, yazar, tarih ve metriklerle Markdown ve metin olarak
  kazır. Gönderi değil, makale gövdesi gerektiğinde kullan. Makale başına
  $0.00015'ten başlar.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): Gönderilerden
  veya profillerden fotoğrafları, videoları ve GIF'leri MP4 ve metadata
  seçenekleriyle çıkarır veya depolar. Medya dosyalarının kendisine ihtiyacın
  olduğunda kullan. Medya satırı başına $0.00015'ten başlar.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  Markadan bahseden gönderileri yapay zeka destekli ilgi, duygu durumu ve
  müşteri deneyimi cevaplarıyla izler. Çalıştırmaları da karşılaştırır. Bir
  markayı zaman içinde takip ettiğinde kullan. Analiz edilen gönderi başına
  $0.0003'ten başlar.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  Yapay zeka ile her gönderi için tutum, yoğunluk ve alaycılık olasılığını
  etiketler. Herhangi bir konuda genel duygu durumuna ihtiyacın olduğunda
  kullan. Analiz edilen gönderi başına $0.0003'ten başlar.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  Yapay zeka ile yükseliş, düşüş, nötr veya karışık duruşu, içerik türünü,
  kesinliği ve varlık ilgisini etiketler. Hisse senedi, kripto veya alım satım
  konuşmalarını takip ettiğinde kullan. Analiz edilen gönderi başına
  $0.0003'ten başlar.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  Yapay zeka ile haber gönderilerini biçim, kaynak atfı ve konu ilgisine göre
  etiketler. Haberi yorumdan ayırdığında kullan. Analiz edilen gönderi başına
  $0.0003'ten başlar.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  Yapay zeka ile her gönderi için kendi kategori, puan ve evet/hayır
  sorularını cevaplar. Hazır analizler etiketlerine uymadığında kullan. Analiz
  edilen gönderi başına $0.0003'ten başlar.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer):
  Yapay zekanın 8 özellik cevabından her gönderi için 0 ile 100 arasında bir
  Viral Score ve bir karar tahmin eder. Gönderilerin neden yayıldığını veya
  tutmadığını incelediğinde kullan. Analiz edilen gönderi başına $0.0003'ten
  başlar.

## Kazımadan fazlası mı lazım?

Xquik ayrıca 47 panel aracı, 129 REST işlemi, imzalı webhook'lar ve bir MCP
sunucusu sunar.

- [API belgeleri](https://docs.xquik.com/introduction): REST API kılavuzları
- [Search Tweets API](https://docs.xquik.com/api-reference/x/search-tweets):
  REST ile gönderi ara
- [Batch Tweets API](https://docs.xquik.com/api-reference/x/batch-tweets): ID
  ile 100'e kadar gönderi getir
- [User Tweets API](https://docs.xquik.com/api-reference/x/user-tweets): bir
  kullanıcının zaman akışını al
- [MCP sunucusu](https://docs.xquik.com/mcp/overview): desteklenen araçları
  keşfet
- [Webhooks](https://docs.xquik.com/webhooks/overview): imzalı olay teslimatı
- [GitHub](https://github.com/Xquik-dev/x-twitter-scraper): kaynak kod ve sorun
  takibi

## SSS

### X API anahtarı gerekir mi?

Hayır. X API anahtarı, giriş veya kimlik bilgisi gerekmez.

### Bir çalıştırmayı ne sınırlar?

Öğe sınırın ve Apify harcama sınırın çalıştırmayı durdurur. Apify hesap ve
platform sınırları yine geçerlidir.

### Ne kadar hızlı?

Xquik'in X Tweet Scraper'ı [karşılaştırma testinde](#karşılaştırma-testi)
saniyede 25,2 ile 39,2 arası işe yarar gönderi teslim etti. Çalışma süresi
girdine, sonuç sayısına ve X'in erişim durumuna bağlıdır.

### Latest araması neden X'in En Yeni sekmesinde görünmeyen gönderiler döndürüyor?

X, eşleşen bazı gönderileri En Yeni sekmesine koymaz. Xquik'in X Tweet
Scraper'ı bu gönderileri de döndürür. Her gönderi, sorgun için gerçek bir X
arama sonucudur. Her gönderi için 1 kez ödersin.

### Hangi arama operatörleri çalışır?

X gelişmiş araması yazar, alıcı, bahsetme, tarih, etkileşim, medya ve konum
destekler. Örnekler için
[Desteklenen başlıca arama operatörleri](#desteklenen-başlıca-arama-operatörleri)
bölümüne bak.

### Bunu Apify API ile çalıştırabilir miyim?

Evet. Python, JavaScript ve cURL örnekleri için
[API sekmesine](https://apify.com/xquik/x-tweet-scraper/api) bak.

### Düzenli kazıma planlayabilir miyim?

Evet. Xquik'in X Tweet Scraper'ını bir cron takvimiyle çalıştırmak için Apify'ın
yerleşik [zamanlama](https://docs.apify.com/platform/schedules) özelliğini
kullan.

### Bana özel bir çözüm alabilir miyim?

Evet. Panel, API, MCP sunucusu ve webhook'lar için
[xquik.com](https://xquik.com) adresini ziyaret et ya da
[API belgelerini](https://docs.xquik.com/introduction) oku.

### X verisini kazımak yasal mı?

Xquik'in X Tweet Scraper'ı herkese açık X alanlarını çeker. Sonuçlarda kişisel
veri olabilir. Amacının yasal olduğundan emin ol ve sana uygulanan gizlilik
kurallarına uy. Emin değilsen yetkin bir hukukçuya danış.

### Nereden yardım alırım?

Actor sayfasındaki Issues sekmesinde ya da
[GitHub](https://github.com/Xquik-dev/x-twitter-scraper/issues) üzerinde bir
issue aç. Çalıştırma ID'siyle support@xquik.com adresine de yazabilirsin.
