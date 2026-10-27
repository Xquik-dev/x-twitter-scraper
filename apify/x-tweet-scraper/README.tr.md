[English](README.md) · [Español](README.es.md) · **Türkçe** ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer, Xquik MCP'yi kodlama ajanlarına bağlıyor](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Framer'ın Xquik scraper'larını Claude Code, Codex, Cursor & daha fazlasıyla nasıl kullandığını](https://youtu.be/4UOSpoOoC3Y?t=367)
6:07'den itibaren izle.

Xquik, en eksiksiz X verisini sunan, dünyanın en hızlı ve en ucuz X (Twitter)
scraper hizmetidir. Xquik'in X Tweet Scraper'ı gönderileri, yanıtları,
profilleri, Listeleri & aramaları 50'den fazla filtreyle toplar. Herkese açık
karşılaştırma testleri, gönderi kazıyan 12 Actor arasında en ucuz & en
hızlısının bu olduğunu kanıtlıyor.
[Aşağıdaki karşılaştırma testinin](#karşılaştırma-testi) gösterdiği gibi
satırları, medyan Actor'ın 2 katı alan taşır. Diğer Apify Actor'larının çoğu,
filtrelemeden veya tekilleştirmeden önce ücret alır. Xquik yalnızca teslim
edilen, benzersiz ve filtrene uyan sonuçlar için ücret alır.

Twitter API alternatifi olarak Twitter gönderilerini **her Apify planında teslim
edilen sonuç başına $0.00015'ten başlayan fiyatla** kazı. Apify, platform
kullanımını ayrıca faturalandırır. X girişi gerekmez & başlatma veya sorgu
ücreti de ödemezsin. Xquik tarafından geliştirildi.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## X Tweet Scraper ne yapar?

Xquik'in X Tweet Scraper'ı gönderileri, etkileşim metriklerini, yazarların
herkese açık profillerini & medyayı döndürür. URL'leri, kullanıcı adlarını,
Liste ID'lerini, gönderi ID'lerini & arama sorgularını 50'den fazla filtreyle
kabul eder.

### Temel özellikler

- Filtreler & tekilleştirme faturalamadan önce çalışır.
- Getirme, zaman akışı, Liste, arama & etkileşim modlarının hepsi 1 girdiyle
  çalışır.
- Gönderi ID girdilerinde sabit bir adet sınırı yok. Apify harcama & zaman aşımı
  ayarların yine geçerli.
- Çalıştırma günlükleri sayfa sürelerini `fetchDurationMs`,
  `processingDurationMs`, `pushDurationMs`, `statusDurationMs` &
  `fullPageDurationMs` alanlarında gösterir.
- Apify bir çalıştırmayı yeniden başlatırsa çalıştırma teslim edilen satırları &
  ilerlemeyi korur.

### Kullanım alanları

- Araştırmayı, zenginleştirmeyi, analizi & yapay zeka eğitimini gönderi başına
  daha çok alanla besle. Medyan zengin satırımızda 2026-09-29'da 63 alan vardı.
  Bu, diğer 11 Actor'ın medyanının 2 katı.
- Gönderilerdeki marka duygu durumunu takip et.
- Rakip gönderilerini & sektör terimlerini izle.
- Herkese açık konuşmalarda potansiyel müşteri bul.
- Araştırma için herkese açık veri kümeleri topla.
- Herkese açık etkileşimi yüksek gönderileri bul.

### X Tweet Scraper hangi verileri çıkarabilir?

| Alan                   | Açıklama                                                               |
| ---------------------- | ---------------------------------------------------------------------- |
| `id`                   | Gönderi ID'si                                                          |
| `text`                 | Tam metin, 25 bin karaktere kadar Note Tweet'ler dahil                 |
| `createdAt`            | X'in kendi zaman damgası metni                                         |
| `likeCount`            | Beğeni sayısı                                                          |
| `retweetCount`         | Yeniden gönderi sayısı                                                 |
| `replyCount`           | Yanıt sayısı                                                           |
| `quoteCount`           | Alıntı sayısı                                                          |
| `viewCount`            | Görüntülenme sayısı                                                    |
| `bookmarkCount`        | Yer işareti sayısı                                                     |
| `lang`                 | Gönderi dili                                                           |
| `url`                  | Gönderinin doğrudan bağlantısı                                         |
| `tweetUrl`             | Düz çıktıdaki gönderi URL'si takma adı                                 |
| `twitterUrl`           | Düz çıktıdaki `twitter.com` URL'si                                     |
| `author`               | Yazarın kullanıcı adı, biyografisi, web sitesi & sayıları              |
| `authorUsername`       | Düz çıktıdaki yazar kullanıcı adı                                      |
| `authorFollowers`      | Düz çıktıdaki yazar takipçi sayısı                                     |
| `authorUrl`            | Varsa düz çıktıdaki yazar web sitesi                                   |
| `authorDescription`    | Düz çıktıdaki yazar biyografisi metni                                  |
| `authorCoverPicture`   | Düz çıktıdaki yazar kapak görseli URL'si                               |
| `authorPinnedTweetIds` | Düz çıktıdaki yazarın sabitlenmiş gönderi ID'leri                      |
| `media`                | Ekli görseller, videolar, GIF'ler                                      |
| `mediaUrls`            | Düz çıktıdaki medya URL'leri                                           |
| `imageUrls`            | Düz çıktıdaki görsel URL'leri                                          |
| `videoUrls`            | Düz çıktıdaki video URL'leri                                           |
| `entities`             | Hashtag'ler, URL'ler, bahsetmeler ve video zaman damgaları             |
| `displayTextRange`     | Varsa X'in görünen metin aralığı                                       |
| `contentDisclosure`    | Varsa içerik beyanı metadata'sı                                        |
| `conversationControl`  | Yanıt kuralı ve herkese açık konuşma sahibi                            |
| `reactionContext`      | Bir tepkinin işaret ettiği herkese açık gönderi ve kullanıcı           |
| `subscriberBadge`      | Yanıtın yazarının abone olduğu içerik üreticisi                        |
| `limitedActions`       | Herkese açık etkileşim kısıtlamaları ve uyarıları                      |
| `isLimitedReply`       | Yanıtların kısıtlı olup olmadığı                                       |
| `isNoteTweet`          | Bunun bir Note Tweet (uzun gönderi) olup olmadığı                      |
| `isQuoteStatus`        | Bu gönderinin başka bir gönderiyi alıntılayıp alıntılamadığı           |
| `isRetweet`            | Bu satırın yeniden gönderi olup olmadığı, orijinali ekli               |
| `isPinned`             | Yazarın bu gönderiyi sabitleyip sabitlemediği. Yalnızca düz satırlarda |
| `isReply`              | Bu gönderinin bir yanıt olup olmadığı                                  |
| `quoted_tweet`         | Alıntılanan gönderi nesnesi (alıntıysa)                                |
| `conversationId`       | Gönderi dizisi/konuşma ID'si                                           |
| `resultType`           | Zengin, etkileşim & tanılama satırları için satır türü                 |
| `sourceTweetId`        | Makale ve etkileşim modları için kaynak gönderi ID'si                  |
| `article`              | `mode: "article"` içinde yapılandırılmış makale verisi                 |
| `translation`          | `mode: "translation"` içinde X'in çevirisi                             |
| `embed`                | `mode: "embed"` içinde gömme HTML'i & bağlantı                         |

İsteğe bağlı gönderi metadata'sında `authorUnavailable`, `card`,
`cashtagAttachments`, `communityId`, `communityName`, `communityNote`, `edit`,
`exclusiveContent`, `noteTweet` & `postCta` bulunur. `isTranslatable`, `place`,
`possiblySensitive` & `viewState` diğer herkese açık bağlamı tutar.
`previousCounts` düzenleme öncesi etkileşimi tutar. `tombstone` görünürlük
uyarılarını tutar. `unmentionedUserIds` konuşmadan ayrılan kullanıcıları
listeler. Alanların tam listesi için OpenAPI'ye bak.

Satır başına en çok veri için `outputVariant: "rich"` ayarla. Zengin satırlar
sona `hasCommunityNotes`, `quotedTweetPermalink`, `unavailableAuthorId` & medya
`sourceUser` alanlarını ekler. Legacy satırlar değişmeden kalır.

İç içe `author` nesneleri herkese açık profil alanlarını taşır. Bu alanlar
kimlik, sayılar, onay durumu, kullanılabilirlik, profesyonel veriler & profil
biyografilerini kapsar.

Yeniden gönderi satırlarında `isRetweet` değeri `true` olur. `text` alanı
orijinal gönderinin tamamını taşır. `retweeted_tweet` orijinal gönderiyi yazarı
& sayılarıyla tutar.

Gönderi satırları ayrıca `type`, `source`, `inReplyToId`, `inReplyToUserId`,
`inReplyToUsername` & `retweeted_tweet` alanlarını tutar. Alıntılanan & yeniden
gönderilen gönderiler her iç içe seviyede aynı alanları taşır.

Medya, kullanılabilirlik, geometri, etiket & video varyantı bilgisini taşır.
`watchNowUrl` & `visitSiteUrl` eylemlerini de taşır.

Satırlar asla yalnızca görüntüleyene ait durumu içermez. Actor takip, engelleme,
sessize alma, yer işareti, beğeni, yeniden gönderi, düzenleme izni & benzeri
görüntüleyen bayraklarını kaldırır. Ham çıktı da bunları atar.

## X Tweet Scraper ile tweet verisini nasıl kazırım?

Apify'da yeni misin? Önce
[ücretsiz bir hesap oluştur](https://console.apify.com/sign-up?fpr=xquik).
Ücretsiz plan kredi kartı istemez & her ay harcaman için $5 verir. Satır başına
$0.00015 fiyatla $5, platform kullanımı hariç 33.000 satıra kadar yeter. Sonra
buraya dön & Try for free düğmesine bas.

Apify Console'da aşağıdaki adımları izle.

1. Bir [görev örneğini](#görev-örnekleri) ya da Input sekmesini aç.
2. URL, kullanıcı adı, gönderi ID'si veya arama terimi ekle.
3. `maxItems` değerini & gereken filtreleri ayarla.
4. Start'a tıkla & çalıştırmanın bitmesini bekle.
5. Veri kümesini JSON, CSV, Excel veya HTML olarak dışa aktar.

Aşağıdaki her tarif, 1 kaynak için eksiksiz bir girdidir. Verine uyanı seç.

### URL yapıştır

Gönderi, profil, arama veya Liste URL'lerini istediğin gibi karıştırıp yapıştır.

```json
{
  "startUrls": [
    { "url": "https://x.com/jack/status/20" },
    { "url": "https://x.com/nasa" },
    { "url": "https://x.com/search?q=AI%20lang%3Aen" },
    { "url": "https://x.com/i/lists/1748648376080666720" }
  ],
  "maxItems": 500
}
```

Gönderi URL'leri o gönderileri tekrarsız & girdi sırasıyla döndürür. Profil
URL'leri hesabın gönderilerini döndürür. Arama URL'leri kendi sorgusunu
çalıştırır. Liste URL'leri Listenin gönderilerini döndürür. `maxItems`,
yapıştırdığın tüm URL'lerin toplam sonucunu sınırlar.

### Birden çok kullanıcı adı kazı

Kullanıcı adları, birçok `from:username` aramasının kısa yoludur.

```json
{ "twitterHandles": ["elonmusk", "nasa", "openai"], "maxItems": 100 }
```

Her kullanıcı adı o hesabın gönderilerini döndürür. Actor, tekrarlanan satırları
çıktıdan & faturalamadan önce kaldırır. Kullanıcı adlarını `@` ile ya da `@`
olmadan ekleyebilirsin. Kullanıcı adları & profil URL'leri, X'teki Gönderiler
sekmesi gibi yeniden gönderileri de tutar. Tarih veya filtre olsa bile bunları
tutar. Onları çıkarmak için `tweetTypes.excludeRetweets` ayarla.

### Gönderi ara

Search terms alanına 1 veya daha fazla sorgu yaz.

```json
{
  "searchTerms": ["from:elonmusk AI", "#bitcoin lang:en"],
  "maxItems": 1000,
  "queryType": "Latest"
}
```

`mode` değeri `tweet` veya `tweets` olup gönderi ID'si yoksa sorgular arama
olarak çalışır. Böylece geçerli `searchTerms` değerleri asla boş bir ID sonucu
döndürmez.

Bir hesabın geçmişini tarih aralığıyla toplamak da çalışır, örneğin
`from:elonmusk since:2026-01-01 until:2026-01-02`. Her terim kendi `searchTerm`
bilgisini korur. `maxItems`, tüm arama terimlerinin toplam sonucunu sınırlar.
Actor, dönen her gönderiyi `since:`, `until:` & Unix zamanı aralıklarına göre
kontrol eder. Filtreli aramalar eşleşme bulana veya X'te sonuç kalmayana kadar
okumaya devam eder.

`from:` içeren bir arama terimi, X aramasının döndürdüğünü döndürür. Bu yüzden
yeniden gönderileri dışarıda bırakır. Onları tutmak için
`include:nativeretweets` ekle. Yalnızca yeniden gönderiler için
`filter:nativeretweets` ekle.

### Gönderileri ID ile getir

```json
{ "tweetIds": ["20", "2082577277246972300"], "maxItems": 100 }
```

Sonuçlar girdi sırasını korur, tekrarları atar & yalnızca istediğin gönderileri
içerir. Getirme ayrıca `tweetId`, `tweetIDs`, `tweets`, `postIds`,
`lookupPostIds`, `tweetUrls` & `postUrls` alanlarını kabul eder.

Her öğe bir gönderi ID'si veya bir gönderi URL'si olur. Çalıştırma başka türden
bir öğeyi ücretsiz atlar & gerisini okur. Çalıştırmanın durumu atlanan öğeleri
sayar & günlüğü onları listeler.

Tüm ID'lerini 1 çalıştırmaya koy. Her çalıştırma Apify'a aynı başlatma
maliyetini öder. Çalıştırma başına 1 ID ile Apify kullanımı her gönderiye
yaklaşık $0.00008 ekler. 1 çalıştırmada 188 ID ile yaklaşık $0.000005 ekler.
5'ten az ID içeren bir çalıştırma bu ipucuyla biter.

### Etkileşim, gönderi dizisi & makale modları

Girdide başka hangi alanlar olursa olsun, çalıştırmanın neyi okuyacağını seçmek
için `mode` ayarla.

```json
{ "mode": "replies", "replyTweetIds": ["2082577277246972300"], "maxItems": 100 }
```

Gönderi & arama modları `tweet`, `tweets` & `search`. Profil modları
`profileTweets`, `profileReplies`, `profileMedia`, `profileLikes` &
`profileMentions`. `listTweets` Liste gönderilerini okur & `article` bir
gönderideki X makalesini okur. Tek bir gönderi için modlar `replies`, `quotes`,
`thread`, `retweeters`, `favoriters`, `translation` & `embed`.

`profileMentions`, her kullanıcı adından bahseden gönderileri en yeniden
başlayarak döndürür.

```json
{ "mode": "profileMentions", "twitterHandles": ["nasa"], "maxItems": 100 }
```

`profileTweets`, X'teki profilin Gönderiler sekmesini izler. Hesabın
gönderilerini, yeniden gönderilerini & kendi gönderilerine verdiği yanıtları
döndürür. Satırlar tarih sırasıyla gelir. Actor, başka hesaplara verilen
yanıtları faturalamadan önce atar. Diğer yazarlardan gelen konuşma bağlamını da
atar.

Yalnızca orijinal gönderiler için istemediğin türleri hariç tut.

```json
{
  "mode": "profileTweets",
  "twitterHandles": ["apify"],
  "tweetTypes": { "excludeReplies": true, "excludeRetweets": true },
  "maxItems": 100
}
```

`tweetTypes.excludeReplies`, `excludeRetweets` & `excludeQuotes` her kaynakta
çalışır. Bir arama bunları X'e `-filter:replies`, `-filter:nativeretweets` &
`-filter:quote` olarak gönderir. Profilde veya Listede bu satırları Actor
kendisi atar. Hariç tutulan satırlar asla veri kümesine ulaşmaz, bu yüzden onlar
için asla ödemezsin. `maxItems` sayısına da asla girmezler.

`profileReplies`, X'in Yanıtlar sekmesini izler. Hesabın kendi gönderilerini &
yanıtlarını döndürür. Actor, diğer yazarlardan gelen konuşma bağlamını dışarıda
bırakır. Yalnızca yanıtlardan oluşan sonuçlar için `filter:replies` veya bir
`to:` araması kullan.

Arama & sayfalı gönderi modları `time.since`, `time.until`, Unix zaman damgaları
& `lang` destekler. Bu modlar profildeki Gönderiler, Yanıtlar, Medya & Beğeniler
sekmelerini, Listeleri, yanıtları, alıntıları & gönderi dizilerini kapsar.
Karşılık gelen düz tarih operatörleri de çalışır. Actor her satırı faturalamadan
önce doğrular. Alt tarih sınırı dahildir. Üst sınır hariçtir. Tarih filtreleri,
kullanılabilir tarihi olmayan satırları dışarıda bırakır. Dil filtreleri, dili
eksik veya uyuşmayan satırları dışarıda bırakır. Filtrelenen satırlar asla sonuç
sınırını tüketmez.

`since` & `until` için aynı tarih boş bir aralık verir. 1 tam gün için `until`
değerini ertesi güne ayarla. Tarih aralıklı Liste çalıştırmaları eski günlere
hızla ulaşır. Alt sınırını geçince biterler. Listede çok eskiye giden aralıklar
birkaç yanıtı kaçırabilir. Gönderi filtreleri kullanıcı listelerine veya
doğrudan gönderi ya da makale getirmelerine uygulanmaz.

`time.withinTime` & `within_time` aynı modlarda çalışır. `7d` değeri, çalıştırma
okumaya başlamadan önceki son 7 günü tutar. 2006'dan öncesine uzanan bir aralık
her gönderiyi tutar.

`mode: "replies"` daha katıdır. Her gönderi satırının `inReplyToId` değeri
istenen gönderi ID'sine eşittir. İç içe konuşma yanıtları asla doğrudan yanıt
sayılmaz. X bildirdiğinden az yanıt gösterirse Actor bulduğu satırları tutar.
Sınırına ulaşılmadığında `diagnostics` içine 1 `replies-incomplete` kaydı ekler.
Çalıştırma, sınırına ulaşana veya X'te yanıt kalmayana kadar kısmi kalır.
`replyCoverage` yanıt sayılarını & kapsama ayrıntılarını bildirir. `maxItems`
değerini istediğin toplama ayarla, 1 yanıt hedefi için 25.000'in üstünde bile
olsa.

Makale satırlarında `resultType: "article"`, `sourceTweetId`, `article` & isteğe
bağlı `author` bulunur. Etkileşim kullanıcı satırlarında `resultType: "user"`,
`sourceTweetId` & `engagementMode` bulunur.

Yeniden gönderenler normal bir herkese açık etkileşim modu olarak çalışır.
Beğenenler modu garantili değildir. X beğenenleri yalnızca uygun gönderilerde
veya sahibinin görebildiği gönderilerde gösterebilir. Profil beğenileri de
garantili değildir, çünkü birçok herkese açık profilde okunabilir bir Beğeniler
sekmesi yok. X hiç kullanıcı veya beğenilen gönderi göstermezse çalıştırmanın
durumu bunu söyler. Gönderi satırlarında yer işareti sayısı olabilir. X, bir
gönderiyi hangi hesapların yer işaretlerine eklediğini göstermez.

### Gönderileri çevir & gömme HTML'ini al

`mode: "translation"` her gönderi için X'in çevirisini döndürür. `translateTo`
alanına `en`, `es`, `pt-br` veya `zh-tw` gibi bir dil kodu yaz. Varsayılan değer
`en`.

```json
{
  "mode": "translation",
  "tweetIds": ["2082577277246972300"],
  "translateTo": "es"
}
```

Her satırda `resultType: "translation"`, `sourceTweetId` & `translation`
bulunur. Bu nesne `language`, `sourceLanguage`, `text` & `entities` taşır.

`mode: "embed"` her gönderiyi bir web sitesine gömen HTML'i döndürür.

```json
{ "mode": "embed", "tweetIds": ["2082577277246972300"], "embedTheme": "dark" }
```

Her satırda `resultType: "embed"`, `sourceTweetId` & `embed` bulunur. Bu nesne
`url`, `authorName`, `authorUrl`, `html` & `width` taşır. `embedHideMedia`,
`embedHideThread` & `embedOmitScript` sırasıyla medyayı, üst gönderiyi veya
widget betiğini dışarıda bırakır.

İki mod da `tweetIds` içinde gönderi ID'lerini veya gönderi URL'lerini alır.
`startUrls` da gönderi URL'lerini alır. Her gönderi, normal satır fiyatıyla 1
satır verir. X'te olmayan bir gönderi satır vermez & ücretlendirilmez.

### X'teki en popüler gönderileri al

`mode: "topTweets"`, X'in 1 metriğe göre en üst sıraya koyduğu gönderileri X'in
Inspiration sayfasında gösterdiği gibi döndürür.

```json
{
  "mode": "topTweets",
  "topMetric": "views",
  "topWindow": "week",
  "topCountry": "US",
  "maxItems": 100
}
```

`topMetric` değeri `likes`, `replies`, `quotes`, `bookmarks`, `shares` veya
`views` olur. Varsayılanı `likes`. `topWindow` değeri `day`, `week` veya `month`
olur & varsayılanı `day`. X her seçim için en fazla 100 gönderi listeler. X'in
tamamı için `topCountry` alanını boş bırak. 1 dili tutmak için `lang` ayarla.
İkisi de ayarlıysa ülkeyi X seçer & dili Actor korur. Her satırda
`engagementMode: "topTweets"` bulunur & her gönderi gibi 1 sonuç ücreti tutar.

### Düz CSV satırları dışa aktar

Varsayılan iç içe JSON alanlarını koru ya da tabloya uygun sütunlar ekle.

```json
{ "searchTerms": ["from:nasa moon"], "maxItems": 100, "outputPreset": "flat" }
```

Düz çıktı `author` & `media` alanlarını değiştirmez. `authorUsername`,
`authorName`, `authorFollowers`, `tweetUrl`, `twitterUrl`, `mediaUrls`,
`imageUrls` & `videoUrls` gibi üst düzey alanlar ekler.

Her düz gönderi satırında `media` bulunur. Medyası olmayan bir gönderide bu
liste boştur. Böylece her satır, tabloda veya tipli bir pipeline'da aynı
anahtarlara sahip olur.

### Alan adlarını seç

Varsayılan olarak Legacy alan adları kullanılır. Zengin veya ham sonuçlar için
bir stil seç.

```json
{
  "searchTerms": ["from:nasa moon"],
  "maxItems": 100,
  "outputVariant": "rich",
  "fieldStyle": "snake_case"
}
```

Üst düzey & iç içe sonuç alanları için `camelCase` veya `snake_case` kullan. Düz
snake case çıktısında `author_username` & `media_urls` gibi alanlar bulunur.
`raw` altındaki güvenli kaynak anlık görüntüleri orijinal kaynak anahtarlarını
korur. Çakışan kaynak adları da veri kaybını önlemek için değişmeden kalır.

Legacy tanılamalar `resultType`, `actorVersion` & `replyCoverage` kullanır.
Zengin & ham çıktı `fieldStyle` ayarını her iç içe seviyede uygular. Örneğin
snake case `result_type`, `actor_version` & `reply_coverage` kullanır. Overview
veri kümesi görünümü iki stille de çalışır. Çalıştırmanın `fieldStyle` değerine
uyan Console görünümünü seç. `camelCase fields`, `camelCase` bekler.
`snake_case fields`, `snake_case` bekler. Görünümler yalnızca sütun seçer.
Depolanan veya dışa aktarılan veriyi asla yeniden adlandırmaz.

### Gelişmiş filtreleri birleştir

Kullanıcı, tarih, konum, medya & etkileşim filtrelerini birleştir.

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

İki X arama modunu 1 çalıştırmada kullanmak için `queryType: "Latest + Top"`
ayarla. Actor tekrarları faturalamadan önce kaldırır & sınırını iki moddan gelen
sonuçlarla doldurur. `Top` alaka düzeyine göre sıralar & her eşleşmeyi
döndürmez. Eşleşen her sorguyu `searchTerm` alanı olarak eklemek için
`includeSearchTerms: true` ayarla.

`lang` ayarladığında Actor dönen her gönderinin dilini doğrular. Uyuşmayanları
atlar & eşleşen gönderiler için okumaya devam eder.

## Görev örnekleri

50 herkese açık görevden birini seç. Her görevin sınırlı bir girdisi & uygun bir
veri kümesi görünümü var. Her görev gerçek bir arama veya hedefle açılır.
Çalıştırmadan önce düzenle.

- [Yapay zeka ajanları için güncel X gönderileri getir](https://apify.com/xquik/x-tweet-scraper/examples/search-x-posts-for-ai-agents)
- [RAG için bir X veri kümesi oluştur](https://apify.com/xquik/x-tweet-scraper/examples/build-x-rag-dataset)
- [RAG için bir X makalesi çıkar](https://apify.com/xquik/x-tweet-scraper/examples/extract-x-article-for-rag)
- [X'te yapay zeka arama görünürlüğünü izle](https://apify.com/xquik/x-tweet-scraper/examples/monitor-ai-search-visibility-on-x)
- [Twitter'da tarihe göre ara](https://apify.com/xquik/x-tweet-scraper/examples/search-twitter-by-date)
- [X'te yapay zeka ajanı araçlarını keşfet](https://apify.com/xquik/x-tweet-scraper/examples/discover-ai-agent-tools-on-x)
- [Yapay zeka ürünleri için geri bildirim topla](https://apify.com/xquik/x-tweet-scraper/examples/collect-ai-product-feedback)
- [X'te marka bahsetmelerini izle](https://apify.com/xquik/x-tweet-scraper/examples/monitor-brand-mentions-on-x)
- [Twitter verisini CSV'ye aktar](https://apify.com/xquik/x-tweet-scraper/examples/export-twitter-data-to-csv)
- [Bir OpenAI gönderisine gelen yanıtları topla](https://apify.com/xquik/x-tweet-scraper/examples/collect-replies-to-an-openai-post)
- [Eksiksiz bir Twitter gönderi dizisi çıkar](https://apify.com/xquik/x-tweet-scraper/examples/extract-complete-twitter-thread)
- [Elektrikli araç konuşmalarını topla](https://apify.com/xquik/x-tweet-scraper/examples/collect-electric-vehicle-conversations)

## Tweet kazımak ne kadar tutar?

Xquik'in X Tweet Scraper'ı her Apify planında teslim edilen satır başına
$0.00015 tutar. Apify, platform kullanımını ayrıca faturalandırır. Xquik, teslim
edilen her veri satırı için 1 kez ücret alır. Tanılamalar `diagnostics`
çıktısında ücretsizdir.

Daha fazla hacim için daha çok ön ödemeli kullanım içeren bir
[Apify planı seç](https://apify.com/pricing?fpr=xquik).

- Xquik aboneliği gerekmez.
- Ayrı bir başlatma veya sorgu ücreti ödemezsin. URL'ler & tekil gönderi
  getirmeleri de ücret eklemez.
- Filtreler & tekilleştirme faturalamadan önce çalışır. Filtrelenen veya
  tekrarlanan satırlar için asla ödemezsin.
- Girdisiz & geçersiz girdili çalıştırmalar, ücretsiz `diagnostics` çıktısına ne
  yapman gerektiğini söyleyen 1 kayıt yazar. Erken duran, bir hedefi atlayan ya
  da profil okumasındaki `lang` gibi kendi filtreleri her satırı çıkaran
  çalıştırmalar da bunu yapar.
- Her hedefi okuyup hiç satır alamayan bir çalıştırma kayıt yazmaz. Durumu
  nedenini & neyi değiştirmen gerektiğini söyler. `-is:retweet` gibi arama
  operatörlerinin dışarıda bıraktığı satırlar da kayıt yazmaz.

Sorun yaşayan veya büyük bir çalıştırma ayrıca bir `run-report` kaydı yazar. Bu
kayıttaki `estimatedChargeUsd`, Apify'ın canlı olay başına ödeme fiyatını
kullanır. Sorunlu çalıştırmalar, girdisiz ve geçersiz girdili çıkışlar dahil her
zaman `run-report` yazar. Sorunsuz biten küçük bir çalıştırma bu kaydı atlar &
Apify kullanımından tasarruf eder. Kaydı her çalıştırmada yazmak için
`alwaysSaveRunRecords` seçeneğini aç. Çalıştırma raporları `realRows` içindeki
veri satırlarını `diagnosticRows` içindeki tanılamalardan ayırır.

Bir çalıştırmanın harcamasını sınırlamak için
[Çalıştırma seçenekleri](#çalıştırma-seçenekleri) bölümüne bak.

## Karşılaştırma testi

Xquik'in X Tweet Scraper'ı, gönderi kazıyan diğer 11 Actor'ı maliyette & hızda
geride bıraktı. Medyan satırında 63 alan vardı, bu da diğerlerinin medyanının 2
katı.

- `xquik/x-tweet-scraper` işe yarar gönderi başına $0.000175, saniyede 39,2
  gönderi & satır başına 63 alanla 890 işe yarar gönderi teslim etti.
  [Çalıştırmayı gör](https://console.apify.com/view/runs/fflWVxHwYvtyHpAQX)
- `xquik/x-tweet-scraper` işe yarar gönderi başına $0.000176, saniyede 25,2
  gönderi & satır başına 63 alanla 883 işe yarar gönderi teslim etti.
  [Çalıştırmayı gör](https://console.apify.com/view/runs/EtSdBgkUcH4M1uicf)
- `xquik/x-tweet-scraper` işe yarar gönderi başına $0.000177, saniyede 25,7
  gönderi & satır başına 63 alanla 882 işe yarar gönderi teslim etti.
  [Çalıştırmayı gör](https://console.apify.com/view/runs/SK3ZWhPwzGJYoYQba)
- `xquik/x-tweet-scraper` işe yarar gönderi başına $0.000178, saniyede 26,9
  gönderi & satır başına 63 alanla 877 işe yarar gönderi teslim etti.
  [Çalıştırmayı gör](https://console.apify.com/view/runs/JRdbcigkBMCaFuH1W)
- `scrapesmith/twitter-x-scraper-tweets-profiles-replies` işe yarar gönderi
  başına $0.000185, saniyede 10,5 gönderi & satır başına 36 alanla 813 işe yarar
  gönderi teslim etti.
  [Çalıştırmayı gör](https://console.apify.com/view/runs/mIT1zf0xccCsYWO1E)
- `scrapesmith/twitter-x-scraper-tweets-profiles-replies` işe yarar gönderi
  başına $0.000187, saniyede 10,6 gönderi & satır başına 36 alanla 805 işe yarar
  gönderi teslim etti.
  [Çalıştırmayı gör](https://console.apify.com/view/runs/p1MUeElsamZUepTpm)
- `scrapesmith/twitter-x-scraper-tweets-profiles-replies` işe yarar gönderi
  başına $0.000187, saniyede 10,7 gönderi & satır başına 36 alanla 805 işe yarar
  gönderi teslim etti.
  [Çalıştırmayı gör](https://console.apify.com/view/runs/pQlQa0GMm7BWTUUOB)
- `kaitoeasyapi/twitter-x-data-tweet-scraper-pay-per-result-cheapest` işe yarar
  gönderi başına $0.000250, saniyede 9,1 gönderi & satır başına 46 alanla 880
  işe yarar gönderi teslim etti.
  [Çalıştırmayı gör](https://console.apify.com/view/runs/3Fn8yvqncsWdcw1I2)
- `scraper_one/x-posts-search` işe yarar gönderi başına $0.000314, saniyede 3,3
  gönderi & satır başına 14 alanla 804 işe yarar gönderi teslim etti.
  [Çalıştırmayı gör](https://console.apify.com/view/runs/M9TgeCLLKZlNTOrj0)
- `danek/twitter-scraper` işe yarar gönderi başına $0.000347, saniyede 5,0
  gönderi & satır başına 27 alanla 807 işe yarar gönderi teslim etti.
  [Çalıştırmayı gör](https://console.apify.com/view/runs/kyeJqCeaARxQPGM5W)
- `tweetapi/twitter-x-search-scraper` işe yarar gönderi başına $0.000374,
  saniyede 2,6 gönderi & satır başına 28 alanla 337 işe yarar gönderi teslim
  etti.
  [Çalıştırmayı gör](https://console.apify.com/view/runs/mxkP8EDAUVtCZdobb)
- `api-ninja/x-twitter-advanced-search` işe yarar gönderi başına $0.000430,
  saniyede 7,4 gönderi & satır başına 28 alanla 837 işe yarar gönderi teslim
  etti.
  [Çalıştırmayı gör](https://console.apify.com/view/runs/XAWKinvZyPNjCwrib)
- `apidojo/twitter-scraper-lite` işe yarar gönderi başına $0.000494, saniyede
  12,9 gönderi & satır başına 54 alanla 251 işe yarar gönderi teslim etti.
  [Çalıştırmayı gör](https://console.apify.com/view/runs/1t4XwmbQNTtwMJ0Ta)
- `apidojo/tweet-scraper` işe yarar gönderi başına $0.000832, saniyede 7,8
  gönderi & satır başına 55 alanla 481 işe yarar gönderi teslim etti.
  [Çalıştırmayı gör](https://console.apify.com/view/runs/PydoBgS1YRblg29bB)
- `xtdata/twitter-x-scraper` işe yarar gönderi başına $0.001168, saniyede 11,9
  gönderi & satır başına 67 alanla 1.378 işe yarar gönderi teslim etti.
  [Çalıştırmayı gör](https://console.apify.com/view/runs/U91dRXEvKvqu41aop)
- `seemuapps/x-tweet-scraper` işe yarar gönderi başına $0.001242, saniyede 6,9
  gönderi & satır başına 24 alanla 805 işe yarar gönderi teslim etti.
  [Çalıştırmayı gör](https://console.apify.com/view/runs/FstursEw43TbcipYU)
- `maximedupre/twitter-scraper` işe yarar gönderi başına $0.002846, saniyede 0,3
  gönderi & satır başına 31 alanla 46 işe yarar gönderi teslim etti.
  [Çalıştırmayı gör](https://console.apify.com/view/runs/Hs8irhEcAfWcQNc4w)

Her Actor aynı aramayı & filtreleri çalıştırdı. Diğer Actor'lar 2026-09-27'de
çalıştı. Xquik'in çalıştırmaları `outputVariant: "rich"` ayarladı &
2026-09-29'da çalıştı. Tüm çalıştırmalar Bronze katmanını kullandı. İşe yarar
gönderi, en az 10 beğenisi olan benzersiz, İngilizce ve orijinal bir gönderidir.
Maliyet, müşterinin işe yarar gönderi başına toplam harcamasıdır. Bizimkine
müşterilerimizin ödediği Apify kullanımı dahil. Satır başına alan, iç içe
olanlar dahil boş olmayan alanların medyan sayısıdır. Bir liste 1 alan sayılır.
Girdisini, günlüğünü & veri kümesini görmek için bir çalıştırmayı aç.

## Boş, kısmi & durdurulan çalıştırmalar

Xquik'in X Tweet Scraper'ı boş, kısmi & durdurulan çalıştırmaları ücretsiz
açıklar. Çalıştırma durumu, çalıştırmanın neden durduğunu söyler.
Ücretlendirilen sonuçları & okunan hedefleri de sayar.

### Boş sonuçlar

Yeni bir çalıştırmaya ödemeden önce boş sonucu incele. Raporlardaki & son
tanılamalardaki `filtering` nesnesi, filtrelerinin çıkardığı satırları sayar.
`serverFilteredRows`, `actorFilteredRows` & `pagesWithUnknownServerFiltering`
alanlarını oku. Filtrelenen satırlar için asla sonuç ücreti ödemezsin. Actor'ın
kendi filtreleri satır çıkardığında (`actorFilteredRows`) çalıştırma bu
sayılarla 1 tanılama yazar. Arama operatörlerinin dışarıda bıraktığı satırlar
(`serverFilteredRows`), zaman aralığının dışındaki gönderiler & hiç satır
almayan bir çalıştırma kayıt yazmaz. Çalıştırmanın durumu nedenini & daha geniş
bir arama gibi neyi değiştirmen gerektiğini söyler.

X'te sonuç kalmazsa çalıştırma sınırına ulaşmadan bitebilir. Bu durumda
`completionReason: "source_exhausted"` ile `outcome: "complete"` bildirir.
Kesilen çalıştırmalar kısmi sonuç durumunu & yeniden deneme yönergelerini korur.

### Kısmi çalıştırmalar

`failedSubtargets`, bir hatadan sonra duran sorguları & profil hedeflerini
sayar. Teslim edilen satırlar veri kümesinde kalır & faturaya girer. Hata asla
hedefin olmadığı anlamına gelmez. Bu çalıştırmalar
`completionReason: "partial_failure"` kullanır.

Kesilen bir çalıştırma ayrıca ücretsiz bir `partial` tanılaması yazar. Teslim
edilmiş sonuçlar olduğu gibi kalır. Tanılama `availableResults`,
`failedTargets`, `retryable` & `nextAction` alanlarını bildirir. Actor'ın
başarıyla bitmesi teslimatı doğrular. Tüm verinin çekildiğini doğrulamaz.

### Durma nedenleri

Durum metni, durmanın her nedenini söyler. Bulunamayan bir hesabı & takılan bir
aramayı olan bir çalıştırma ikisini de söyler. `stopCauses` her nedeni kendi
`message`, `retryable` & `nextAction` alanlarıyla listeler. Nedenler
`target_not_found`, `target_suspended`, `target_protected`,
`search_unavailable`, `likes_hidden`, `target_failed`,
`pagination_safety_limit`, `reply_reach` & `deadline_reached` olabilir.
Nedenlerden biri yeniden denenebiliyorsa çalıştırma da `retryable` olur.

### Bulunamayan & erişilemeyen hedefler

Bulunamayan veya korumalı bir hedef hata sayılmaz. X'te orada okunacak bir şey
yoktur. Çalıştırma diğer tüm hedefleri sonuna kadar okur. `outcome: "complete"`
bildirir. Tamamlanma nedeni okuduğu hedeflerden gelir, örneğin
`source_exhausted`. `failedSubtargets` bu hedefleri dışarıda bırakır. Durum
metni & ücretsiz bir `complete` tanılaması onları sayar. Başka satırı olmayan
bir çalıştırma bunun yerine bir `zero-output` tanılaması yazar.

X'in çalıştıramadığı bir arama hata sayılır. X böyle bir aramada "Something went
wrong" uyarısı gösterir. Çalıştırma bu aramayı yeniden denemeden hemen durdurur.
X'in gizlediği beğeniler de hata sayılır & okuma hemen durur. X bir gönderiyi
kimin beğendiğini yalnızca yazarına gösterir. Bir hesabın beğendiği gönderileri
de yalnızca o hesaba gösterir.

Tüm hatalar erişilemeyen hedeflerle ilgiliyse tanılamalar `retryable: false`
ayarlar. Hedef URL'lerini veya kullanıcı adlarını kontrol et & erişilebilir
herkese açık hesaplar seç. X'in çalıştıramadığı bir aramayı daralt veya
filtrelerini değiştir. Gizli beğeniler yerine yeniden gönderenleri, yanıtları
veya gönderileri oku. Diğer hatalar, bitmemiş hedefler için yeniden deneme
yönergesini korur.

Tanılama bu hedefleri `unavailableTargets` içinde listeler. Her kayıtta senin
girdiğin haliyle `target`, bir `reason` & bir `nextAction` bulunur. Neden
`not_found`, `list_not_found`, `suspended`, `protected`, `search_unavailable`
veya `likes_hidden` olur. `list_not_found`, X'in bulamadığı ve gizli olabilecek
bir listeyi işaret eder. Bir arama kaydında, kaldırılacak operatör gibi bir
`fix` de olabilir. Liste en fazla 100 kayıt tutar. Bu hedefleri girdinden çıkar.

### Güvenlik & süre sınırları

`completionReason: "pagination_safety_limit"` bir okuma hatası değildir.
Çalıştırma geçerli satırlarını tuttu. Sonra yeni sonuç getirmeyi bırakan bir
hedefi bitirdi. Çalıştırma, verinin eksik çekildiğini bildirir.
`failedSubtargets` değeri `0` kalır. Yalnızca teslim edilen satırlar için
ödersin.

Varsayılan Apify zaman aşımı `0` olduğu için çalıştırmaların süre sınırı yoktur.
Actor, üst sınırına ulaşana veya uygun veri bitene kadar devam eder. Yine de
sonlu bir Apify zaman aşımı ayarlayabilirsin. O zaman
`completionReason: "deadline_reached"` bu sınırın yaklaştığı anlamına gelir.
Actor satırları & raporu kaydeder, sonra sınırdan önce düzgünce çıkar. Teslim
edilen her satır için 1 kez ödersin.

## Girdi

Input sekmesi tüm seçenekleri listeler. `startUrls`, `twitterHandles`,
`listIds`, `tweetIds`, `searchTerms` veya `twitterContent` alanlarından en az
birini ver. Belgelenmiş takma adları da çalışır. Diğer tüm alanlar isteğe
bağlıdır.

Bunlardan her biri tek başına bir çalıştırma için yeterli.

- Start URLs alanına bir gönderi URL'si yapıştır.
- Bir profil URL'si yapıştır ya da kullanıcı adını X handles alanına ekle.
- Hesap geçmişi toplamak için arama terimi olarak
  `from:user since:YYYY-MM-DD until:YYYY-MM-DD` kullan.
- Start URLs alanına bir Liste URL'si yapıştır.
- Gelişmiş aramalar için `twitterContent` alanını `from:`, `since:`,
  `min_faves:` & `filter:media` gibi filtrelerle birleştir.

### Desteklenen başlıca arama operatörleri

| Operatör                 | Örnek                     | Amaç                                     |
| ------------------------ | ------------------------- | ---------------------------------------- |
| `from:`                  | `from:elonmusk`           | Yalnızca bu kullanıcının gönderileri     |
| `to:`                    | `to:OpenAI`               | Yalnızca bu kullanıcıya verilen yanıtlar |
| `@`                      | `@nasa`                   | Bu kullanıcıdan bahseden gönderiler      |
| `list:`                  | `list:123456`             | Liste üyelerinin gönderileri             |
| `lang:`                  | `lang:en`                 | Dile göre filtrele                       |
| `since:` / `until:`      | `since:2026-01-01`        | Tarih aralığı                            |
| `min_faves:`             | `min_faves:100`           | Etkileşim eşiği                          |
| `min_retweets:`          | `min_retweets:50`         | Yeniden gönderi eşiği                    |
| `filter:media`           | `filter:media`            | X medya arama operatörü                  |
| `filter:videos`          | `filter:videos`           | X video arama operatörü                  |
| `filter:images`          | `filter:images`           | X görsel arama operatörü                 |
| `filter:links`           | `filter:links`            | Yalnızca bağlantı içeren gönderiler      |
| `filter:replies`         | `filter:replies`          | Yalnızca yanıtlar                        |
| `filter:quote`           | `filter:quote`            | Yalnızca alıntılar                       |
| `filter:blue_verified`   | `filter:blue_verified`    | Yalnızca Premium kullanıcılar            |
| `-filter:replies`        | `-filter:replies`         | Yanıtlar hariç                           |
| `-filter:nativeretweets` | `-filter:nativeretweets`  | Yeniden gönderiler hariç                 |
| `-filter:quote`          | `-filter:quote`           | Alıntılar hariç                          |
| `OR`                     | `(from:nasa OR from:esa)` | İki terimden birine uyan gönderiler      |
| `#`                      | `#bitcoin lang:en`        | Bu hashtag'i içeren gönderiler           |

X artık `filter:vine`, `filter:consumer_video`, `filter:pro_video`,
`filter:news` veya `retweets_of:` ile arama yapmıyor. Bunlardan birini içeren
bir arama hemen biter. Ücretsiz bir tanılama düzeltmeyi söyler. Her sorguyu en
fazla 512 karakterde tut. X daha uzun sorguları aramaz.

Tarih aralıkları alt sınırı içerir & üst sınırı hariç tutar. Actor her gönderiyi
eklemeden veya ücretlendirmeden önce iki sınırı da kontrol eder.

Operatörlerin tam listesi için Xquik'in
[Twitter gelişmiş arama operatörleri](https://github.com/Xquik-dev/x-twitter-advanced-search)
sayfasına bak.

### Başka bir gönderi Actor'ından geçiş yap

Zaten kullandığın girdiyi yapıştır. Xquik'in X Tweet Scraper'ı, gönderi kazıyan
diğer Actor'ların kullandığı alan adlarını okur. Bunları kendi alanlarına eşler.
Belgelenmiş varsayılan yine kanonik adlardır. Bir takma ad asla bir alanı
düşürmez & ödediğin tutarı asla değiştirmez. Girdi formu yalnızca kanonik
alanları listeler, böylece kısa kalır. Takma adlar JSON, API, SDK, otomasyon &
kayıtlı görev girdilerinde çalışır.

Her satır önce zaten kullandığın alanları, sonra eşlendikleri alanı yazar.

- `startUrls`, `urls`, `tweetUrls`, `postUrls`, `profileUrls` ve `accountUrls`
  alanları `startUrls` alanına eşlenir.
- Tek metin olarak verilen `profileUrl` alanı `startUrls` alanına eşlenir.
- `tweetIds`, `tweetIDs`, `tweets`, `postIds`, `lookupPostIds`, `tweet_ids` veya
  tek metin olarak verilen `tweetId` alanları `tweetIds` alanına eşlenir.
- `twitterHandles`, `usernames`, `user_names`, `userNameList`, `handles`,
  `screenNames` ve `profileTweets` alanları `twitterHandles` alanına eşlenir.
- Tek metin olarak verilen `username`, `handle` ve `screenName` alanları
  `twitterHandles` alanına eşlenir.
- Liste olarak veya her satırda 1 arama olarak verilen `searchTerms`,
  `searchQueries`, `queries` ve `search` alanları `searchTerms` alanına eşlenir.
- `twitterContent`, `query` ve `searchQuery` alanları `twitterContent` alanına
  eşlenir.
- `maxItems`, `maxResults`, `max_results`, `resultsLimit`, `count`,
  `resultsCount`, `numberOfTweets`, `maxPosts`, `max_posts`, `max_items`,
  `maxTweets`, `tweetsDesired` ve `maxTotalTweets` alanları `maxItems` alanına
  eşlenir.
- `per_profile_limit` alanı `maxItemsPerTarget` alanına eşlenir.
- `sort` alanı `queryType` alanına eşlenir.
- `search_type`, `searchType`, `query_type` ve `search_sort` alanları, büyük
  veya küçük harfle yazılmış `Top` & `Latest` için `queryType` alanına eşlenir.
  `Media`, `Photos` & `Videos` değerleri `filter:media`, `filter:images` &
  `filter:videos` alanlarını açar.
- `tweetLanguage`, `language` ve `contentLanguage` alanları `lang` alanına
  eşlenir.
- `author` ve `fromUser` alanları `from` alanına eşlenir.
- `inReplyTo` ve `toUser` alanları `to` alanına eşlenir.
- `mentioning` alanı `@` alanına eşlenir.
- `start`, `startDate` ve `timeSince` alanları `since` alanına eşlenir.
- `end`, `endDate` ve `timeUntil` alanları `until` alanına eşlenir.
- Saniye olarak verilen `timeSinceUnix`, `sinceTime`, `timeUntilUnix` ve
  `untilTime` alanları `since_time` ve `until_time` alanlarına eşlenir.
- `timeWithinTime` ve `withinTime` alanları `within_time` alanına eşlenir.
- `timeWindowHours` ve `timeWindow` alanları saat & gün olarak `within_time`
  alanına eşlenir.
- `timeSinceId`, `sinceId`, `timeMaxId` ve `maxId` alanları `since_id` ve
  `max_id` alanlarına eşlenir.
- Google Search Scraper'daki `quickDateRange` alanı, çalıştırmanın
  başlangıcından geriye sayılarak `since_time` alanına eşlenir. Değeri örneğin
  `d7`, `w2`, `m1` veya `y` olabilir.
- `minimumFavorites`, `minLikes`, `min_likes`, `minFaves`, `engagementMinLikes`
  ve `Minimum_likes` alanları `min_faves` alanına eşlenir.
- `minimumRetweets`, `minRetweets` ve `engagementMinRetweets` alanları
  `min_retweets` alanına eşlenir.
- `minimumReplies`, `minReplies`, `engagementMinReplies` ve `Minimum_replies`
  alanları `min_replies` alanına eşlenir.
- `engagementMaxLikes`, `maxLikes`, `engagementMaxRetweets`, `maxRetweets` ve
  `engagementMaxReplies` alanları `engagement.maxLikes`,
  `engagement.maxRetweets` ve `engagement.maxReplies` alanlarına eşlenir.
- `onlyImage`, `onlyImages` ve `has_images` alanları `filter:images` alanına
  eşlenir.
- `onlyVideo`, `onlyVideos` ve `has_videos` alanları `filter:videos` alanına
  eşlenir.
- `onlyWithMedia` ve `mediaOnly` alanları `filter:media` alanına eşlenir.
- `onlyQuote` ve `onlyQuotes` alanları `filter:quote` alanına eşlenir.
- `onlyTwitterBlue`, `usersBlueVerifiedOnly`, `blue_verified_only` ve
  `onlyBlueVerified` alanları `filter:blue_verified` alanına eşlenir.
- `engagementHasEngagement` ve `hasEngagement` alanları `filter:has_engagement`
  alanına eşlenir.
- `mediaHasLinks`, `has_links` ve `requireLinks` alanları `filter:links` alanına
  eşlenir.
- `mediaHasMentions`, `has_mentions` ve `requireMentions` alanları
  `filter:mentions` alanına eşlenir.
- `mediaHasHashtags`, `has_hashtags` ve `requireHashtags` alanları
  `filter:hashtags` alanına eşlenir.
- `mediaNewsOnly` ve `mediaSafeContentOnly` alanları `filter:news` ve
  `filter:safe` alanlarına eşlenir.
- 1 tür içeren `mediaTypes` alanı o türün `filter:` alanına eşlenir.
- `mediaSubtype` alanı `filter:media`, `filter:images` veya `filter:videos`
  alanına eşlenir.
- `includeNativeRetweets` ve `includeRetweets` alanları `include:nativeretweets`
  alanına eşlenir.
- `excludeReplies`, `excludeRetweets`, false olarak ayarlanmış `includeRetweets`
  ve `tweetTypesExclude` alanları `tweetTypes.excludeReplies`,
  `tweetTypes.excludeRetweets` & `tweetTypes.excludeQuotes` alanlarına eşlenir.
- 1 tür içeren liste olarak verilen `tweetTypes` alanı `tweetTypes.replies`,
  `tweetTypes.quotes` veya `tweetTypes.nativeRetweets` alanına eşlenir.
- `tweetSubtype` alanı `tweetTypes.replies` veya `tweetTypes.quotes` alanına
  eşlenir. `self_threads`, `filter:self_threads` operatörünü ekler.
- `geotaggedNear` ve `geoNear` alanları `near` alanına eşlenir.
- `withinRadius`, `geoWithinRadius` ve `geoWithin` alanları `within` alanına
  eşlenir.
- `geoGeocode` alanı `geocode` alanına eşlenir.
- `tweetConversationId`, `tweetQuotedTweetId` ve `tweetQuotedUserId` alanları
  `conversation_id`, `quoted_tweet_id` ve `quoted_user_id` alanlarına eşlenir.
- `cardName` ve `tweetPollTypes` alanları `card_name` alanına eşlenir.
- `search_query` alanı `twitterContent` alanına eşlenir.
- `profile_urls` alanı bağlantılar için `startUrls`, kullanıcı adları için
  `twitterHandles` alanına eşlenir.
- `lookup_post_ids` veya tek metin olarak verilen `id` alanı `tweetIds` alanına
  eşlenir.
- Virgülle ayrılmış 1 liste olarak verilen `tweets` alanı `tweetIds` alanına
  eşlenir.

Bazı alanların burada karşılığı yok. Her biri, temsil ettiği X arama operatörünü
çalıştırmanın her aramasına ekler. Çalıştırma günlüğü, eklediği operatörleri en
başta listeler.

- `usersFromUsers`, `from_users`, `usersToUsers`, `to_users` ve
  `usersListMembers` alanları `from:`, `to:` & `list:` ekler. Birden çok değer
  alternatif olarak çalışır, örneğin `(from:a OR from:b)`.
- `usersMentionUsers` ve `mentioning_users` alanları `@name` ekler.
- `usersExcludeFromUsers` alanı `-from:` ekler.
- `onlyVerifiedUsers`, `usersVerifiedOnly` ve `verified_only` alanları
  `filter:verified` ekler.
- `placeObjectId`, `geoPlaceId`, `placeId` ve `place` alanları `place:` ekler.
- `cardDomain` alanı `card_domain:` ekler.
- `appsSources` ve `appsExcludeSources` alanları `source:` & `-source:` ekler.
- Her biri 1 değer içeren `contentKeywords`, `contentExactPhrases`,
  `contentHashtags` ve `contentCashtags` alanları kelimeyi, tırnak içindeki
  ifadeyi, `#tag` & `$tag` değerlerini ekler.
- `contentExcludeKeywords`, `contentExcludeHashtags`, `exclude_words` ve
  `hashtags_exclude` alanları `-word` & `-#tag` ekler.
- `all_words` & `exact_phrases` ile her kelime & her ifade eşleşmeli.
- `any_words` ve `hashtags_any` alanları `(#a OR #b)` gibi alternatifler ekler.
- `contentQuestionMarks` alanı `?` ekler.
- `contentEmoticons` alanı `positive` için `:)`, `negative` için `:(` ekler.
- `tweet_type` alanı `filter:replies`, `filter:retweets` & bunların `-filter:`
  biçimlerini ekler.

Kelimelerle yazılan modlar `mode` alanına eşlenir. `Advanced Search` değeri
`search`, `Get Tweet by ID` değeri `tweet`, `Get a Few Tweets` değeri `tweets`,
`Get Replies` değeri `replies`, `Get Quotes` değeri `quotes`, `Get Retweeters`
değeri `retweeters` & `Get Favoriters` değeri `favoriters` olur.

Yapıştırdığın girdi şöyle davranır.

- Her kaynak çalışır. URL, kullanıcı adı, arama terimi, Liste ID'si & gönderi
  ID'si içeren bir girdi hepsini çalıştırır. `maxItems` tüm çalıştırma için
  geçerlidir.
- `searchTerms` yanındaki bir arama sorgusu 1 terim daha olarak çalışır.
- `x.com/@name` biçiminde yazılan bir profil URL'si `x.com/name` gibi okunur.
- Bir takma adı & kanonik alanını birlikte ayarlarsan kanonik değer kazanır.
  Çalıştırma günlüğü kaybeden takma adı yazar.
- Çalıştırma günlüğü, Actor'ın yok saydığı her alanı yazar, örneğin
  `customMapFunction`. Actor asla bir alanı sessizce atmaz.
- Satır sınırı 1 veya daha büyük bir tam sayı olmalı. `maxResults: 0`,
  çalıştırmayı hiçbir şey okumadan veya ücretlendirmeden durdurur.
- `quickDateRange: "m1"` her kaynak türünde son 1 ayı okur. Aylar & yıllar
  takvime göre geriye sayılır. Değerde h, d, w, m veya y yoksa çalıştırma hiçbir
  şey okumadan veya ücretlendirmeden durur.
- Actor'da sayfa birimi yok. `maxPages` yerine `maxItems` kullan.
- Actor'da `userId` veya `user_ids` alanı yok. Kullanıcı ID'sini kullanıcı
  adının yazılacağı yere yaz. `twitterHandles` alanında, profil URL'lerinde &
  `from:` sonrasında çalışır.
- `from`, `min_faves`, `since_time` & `filter:images` gibi arama operatörü
  alanları zaten X'in adlarını kullanır. Eşleme gerektirmezler.
- Başka bir Actor'ın "hepsi" ya da "herhangi biri" diye tanımlamadığı bir liste
  1 değerle çalışır. Bu listeler `contentKeywords`, `contentExactPhrases`,
  `contentHashtags`, `contentCashtags`, `usersMentionUsers`, `mediaTypes` &
  `tweetTypes` alanlarıdır. Daha fazla değerde çalıştırma hiçbir şey okumadan
  veya ücretlendirmeden durur. Mesajı, bunları 1 arama terimi olarak nasıl
  yazacağını söyler.
- `People` veya `Lists` olarak ayarlanmış `search_type`, `followers` olarak
  ayarlanmış `source_mode`, bir `engagementLevel` ön ayarı &
  `Get Similar Tweets` modu, çalıştırmayı hiçbir şey okumadan veya
  ücretlendirmeden durdurur. Mesaj, kullanman gereken Actor'ı veya alanı söyler.
- `tweets` veya `info` olarak ayarlanmış `category` hiçbir şeyi değiştirmez.
  `followers`, `user_info` veya `replies` gibi başka bir Actor'ın işi
  çalıştırmayı durdurur. Çalıştırma hiçbir şey okumaz & ücretlendirmez. Mesaj o
  Actor'ı söyler.

### Console & API girdisi

Console formunda aşağıdaki kontroller var.

- Mode, Output Variant, Field Style, Output Preset & Sort By doğrulamalı açılır
  menülerdir.
- Start URLs & Profile URLs, metin veya `{ "url": "..." }` nesnesi kabul eder.
  JSON düzenleyicileri iki API biçimini de korur.
- Yapılandırılmış filtreler gruplu kontroller sunar, böylece iç içe JSON
  gerekmez.
- Form, bir filtre grubunun zaten kapsadığı düz operatörleri gizler. JSON, API,
  SDK, otomasyon & kayıtlı görev girdileri onları yine kabul eder.
- Max Items & Max Items Per Target, 1 veya daha büyük tam sayı kabul eder.
  Etkileşim eşikleri 0 veya daha büyük tam sayı kabul eder.

Yeni entegrasyonlarda kanonik alanları kullan. Yukarıdaki geçiş tablosundaki
takma adlar kullanılabilir kalır. `includeRaw`, `outputVariant: "raw"` için bir
takma addır. `compact` & `full` gibi eski `outputVariant` değerleri Legacy çıktı
olarak çalışmaya devam eder. Form bunları Legacy takma adları olarak etiketler.

## Çıktı

Her gönderi satırı, X'in sunduğu metadata'yı içeren bir JSON nesnesidir. Veri
kümesi & run-report şemaları her alana bir başlık, açıklama & örnek verir. Yapay
zeka ajanları bir alanın anlamını tahmin etmeden bunları okuyabilir.

Örnek değerler temsilidir. Çalıştırmaların X'ten canlı veri döndürür.

```json
{
  "id": "20",
  "text": "just setting up my twttr",
  "createdAt": "Tue Mar 21 20:50:14 +0000 2006",
  "retweetCount": 500,
  "replyCount": 120,
  "likeCount": 5000,
  "quoteCount": 80,
  "viewCount": 1200000,
  "bookmarkCount": 300,
  "lang": "en",
  "url": "https://x.com/jack/status/20",
  "author": {
    "id": "12",
    "username": "jack",
    "name": "jack",
    "followers": 6000000,
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
  "conversationId": "20"
}
```

Veri kümesini JSON, CSV, Excel veya HTML olarak dışa aktar.

## Çıktı sütunları

8 girdi, okunan her satırı biçimlendirir. Kod çalıştırmazlar & fiyatı
değiştirmezler.

| Alan                | Ne yapar                                                                        |
| ------------------- | ------------------------------------------------------------------------------- |
| `fields`            | Yalnızca bu alanları, yazdığın sıra & yazımla tut                               |
| `omitFields`        | Bu alanları çıkar & gerisini tut                                                |
| `renameFields`      | Bir alanı yeni adlı bir sütuna taşı                                             |
| `flatten`           | Her iç içe nesneyi üst düzey sütunlara çevir                                    |
| `fillMissingFields` | Tutulan bir alan satırda yoksa onu `null` ile doldur. Varsayılan olarak açık    |
| `joinFields`        | Bu listelerin her birini 1 metin değerine çevir                                 |
| `joinSeparator`     | Birleştirilen öğeler arasındaki metin. Varsayılan değer bir virgül & bir boşluk |
| `constantFields`    | Her satırda aynı metni taşıyan bir sütun ekle                                   |

- Bir nesnenin içindeki alan için nokta kullan, örneğin `author.id`. Harf
  büyüklüğü & alt çizgiler fark etmez.
- Her satır kendi `id` değerini tutar.
- `fields` kullanırsan satırda olmayan bir alan `null` olarak gelir. Böylece her
  satır aynı sütunlara sahip olur.
- Yanlış bir alan adı, çalıştırmayı hiçbir şey okumadan & ücretlendirmeden
  durdurur.
- Adlar kontrol edilemezse çalıştırma okumaya devam eder & görmediği adları
  sonunda listeler.
- Çalıştırma, başka bir Actor için yazılmış map fonksiyonunu veya jq filtresini
  yok sayar.

Hesaplanan bir sütunu eklemek için adını `fields` veya `renameFields` içine yaz.

| Sütun               | Formül                                                                             |
| ------------------- | ---------------------------------------------------------------------------------- |
| `totalEngagement`   | `likeCount` + `replyCount` + `retweetCount` + `quoteCount`. Eksik bir sayı 0 ekler |
| `engagementRate`    | `totalEngagement` × 100 ÷ yazarın `followers` değeri, 4 ondalık basamakla          |
| `engagementPerView` | `totalEngagement` × 100 ÷ `viewCount`, 4 ondalık basamakla                         |

Bu sayıları olmayan bir satırda `totalEngagement` değeri `null` olur. Böleni
eksik veya 0 olan bir oran `null` olur.

## Çalıştırma seçenekleri

- Çalıştırma maliyetini sınırlamak için Apify'ın maksimum toplam ücretini
  ayarla. O bütçenin izin verdiği en çok satırı almak için `maxItems` alanını
  boş bırak. Daha az gönderi istediğinde `maxItems` ayarla.
- Apify API'de `maxTotalChargeUsd`, Console'da Max cost per run ayarla. Apify bu
  sınırı Actor'a `ACTOR_MAX_TOTAL_CHARGE_USD` olarak iletir. Actor bunu
  faturalanabilir en yüksek satır sayısına çevirir.
- Birçok gönderiyi tek seferde getirmek için `tweetIds` gönder. Tek bir hesabın
  gönderilerini okumak için bir profil URL'si yapıştır.
- Çok sayıda sorguda her sonucu kendi arama terimiyle etiketlemek için
  `includeSearchTerms: true` ayarla.
- İki X arama modunu tek çalıştırmada kullanmak için `queryType: "Latest + Top"`
  ayarla. Tekilleştirme & sonuç sınırları ikisi için birlikte geçerlidir.
- 1 saniyelik kontroller & imzalı webhook'lar için Xquik hesap veya anahtar
  kelime izleyicilerini kullan. Etkin izleyiciler her saniye kontrol eder.

### Her zaman en güncel derlemeyi kullan

Yayınlanan tüm düzeltmeleri almak için her çalıştırmada `latest` seç.

Derleme seçmezsen Apify, Xquik'in X Tweet Scraper'ını varsayılan `latest`
derlemesiyle çalıştırır. Console çalıştırmaları & standart API örnekleri bu
varsayılanı devralır.

Kayıtlı görevler Actor varsayılanını geçersiz kılabilir. Zamanlamalar & görev
entegrasyonları bu seçimi yeniden kullanır. Her geçersiz kılmayı `latest` olarak
tut.

Apify tam derleme numaralarını `latest` sürümüne yönlendirmez. Sabitlediğin
numaraları `latest` ile değiştir. Tam bir derlemeyi yalnızca geçici bir geri
dönüş için ya da bir çalıştırmayı yeniden üretmek için kullan.

Apify'ın
[derleme etiketleri](https://docs.apify.com/platform/actors/development/builds-and-runs/builds),
[çalıştırma seçenekleri](https://docs.apify.com/platform/actors/running/runs-and-builds)
& [görev belgeleri](https://docs.apify.com/platform/actors/running/tasks)
sayfalarını oku.

## İlgili Xquik Actor'ları

Her Xquik Actor'ı aynı veri çekme motorunu, önce filtreleyen faturalandırmayı &
tanılamaları paylaşır. İhtiyacın olan veriye uyanı seç.

- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper) kullanıcı adı,
  ID veya URL'den profilleri, gönderilerini, yanıtlarını, medyasını &
  takipçilerini kazır. Aramalar yerine hesaplardan başladığında kullan. Satır
  başına $0.00015'ten başlar.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper) 25'ten fazla
  filtreyle gönderilerin altındaki yanıtları, yorumları & tüm konuşmaları kazır.
  Gönderilerin altındaki tartışmaya ihtiyacın olduğunda kullan. Satır başına
  $0.00015'ten başlar.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper) gönderi
  URL'leri veya ID'leri için toplu olarak yanıtları, alıntıları, yeniden
  gönderenleri & gönderi dizilerini kazır. Gönderilerle kimin etkileşime
  girdiğini ölçtüğünde kullan. Satır başına $0.00015'ten başlar.
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper)
  gönderileri alıntılayan gönderileri metin, medya, sayılar, yazarlar & 11
  filtreyle kazır. Gönderileri kimin alıntıladığını & ne dediğini incelediğinde
  kullan. Gönderi başına $0.00015'ten başlar.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper) takipçileri,
  takip edilenleri, Liste üyelerini, aboneleri & Topluluk üyelerini profil
  satırları olarak kazır. Kitle veya üye listelerine ihtiyacın olduğunda kullan.
  Profil başına $0.00015'ten başlar.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper)
  kullanıcı adı, biyografi & konuma göre kullanıcıları takipçi, onay işareti,
  hesap yaşı & konum filtreleriyle arar. Aramadan hesap listeleri oluşturduğunda
  kullan. Profil başına $0.00015'ten başlar.
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper)
  X'in "Account based in" etiketi, X'e nasıl bağlandıkları & kullanıcı adı
  değişiklikleriyle hesapların nerede bulunduğunu kontrol eder. Hesapların
  nerede bulunduğunu doğruladığında kullan. Hesap başına $0.00015'ten başlar.
- [X Email Scraper](https://apify.com/xquik/x-email-scraper) kullanıcı
  adlarından, takipçilerden veya kullanıcı aramalarından, hesapların
  profillerinde yayımladığı e-postaları, telefonları & bağlantıları alır.
  Profillerin yayımladığı e-postalara ihtiyacın olduğunda kullan. Profil başına
  $0.00015'ten başlar.
- [X List Scraper](https://apify.com/xquik/x-list-scraper) Liste URL'lerinden
  veya ID'lerinden Liste gönderilerini, üyelerini & takipçilerini kazır.
  Kaynaklarını özenle seçilmiş bir Liste belirlediğinde kullan. Satır başına
  $0.00015'ten başlar.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper) Topluluk
  bilgilerini, gönderilerini, aramalarını, üyelerini & moderatörlerini kazır.
  Kaynakların X Toplulukları olduğunda kullan. Satır başına $0.00015'ten başlar.
- [X Space Scraper](https://apify.com/xquik/x-space-scraper) Sohbet Odalarını
  anahtar kelimeyle bulur & başlıklarını, durumlarını, zamanlarını, dinleyici
  sayılarını, sunucularını & konuşmacılarını okur. Yayınları da URL veya ID ile
  okur. X'teki canlı ses & video yayınlarını takip ettiğinde kullan. Sohbet
  Odası veya yayın başına $0.00015'ten başlar.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper) sıralama, hacim,
  sorgu & WOEID ile konuma göre gerçek zamanlı gündemi kazır. Nerede neyin
  gündemde olduğunu takip ettiğinde kullan. Gündem başlığı başına $0.00015'ten
  başlar.
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper) X iş ilanlarını
  anahtar kelime, yer, çalışma şekli, kıdem & şirkete göre, maaş & başvuru
  bağlantılarıyla kazır. X'te yayımlanan iş ilanlarını topladığında kullan. İlan
  başına $0.00015'ten başlar.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper) uzun biçimli X
  Makalelerini kapak, yazar, tarih & metriklerle Markdown & metin olarak kazır.
  Gönderi değil, makale gövdesi gerektiğinde kullan. Makale başına $0.00015'ten
  başlar.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader) gönderilerden
  veya profillerden fotoğrafları, videoları & GIF'leri MP4 & metadata
  seçenekleriyle çıkarır veya depolar. Medya dosyalarının kendisine ihtiyacın
  olduğunda kullan. Medya satırı başına $0.00015'ten başlar.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring)
  marka bahsetmelerini yapay zeka destekli ilgi, duygu durumu & müşteri deneyimi
  cevaplarıyla izler & çalıştırmaları karşılaştırır. Bir markayı zaman içinde
  takip ettiğinde kullan. Analiz edilen gönderi başına $0.0003'ten başlar.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis)
  yapay zeka ile her gönderi için tutum, yoğunluk & alaycılık olasılığını
  etiketler. Herhangi bir konuda genel duygu durumuna ihtiyacın olduğunda
  kullan. Analiz edilen gönderi başına $0.0003'ten başlar.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)
  yapay zeka ile yükseliş, düşüş, nötr veya karışık duruşu, içerik türünü,
  kesinliği & varlık ilgisini etiketler. Hisse senedi, kripto veya alım satım
  konuşmalarını takip ettiğinde kullan. Analiz edilen gönderi başına $0.0003'ten
  başlar.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)
  haber gönderilerini yapay zeka ile biçim, kaynak atfı & konu ilgisine göre
  etiketler. Haberi yorumdan ayırdığında kullan. Analiz edilen gönderi başına
  $0.0003'ten başlar.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)
  yapay zeka ile her gönderi için kendi kategori, puan & evet/hayır sorularını
  cevaplar. Hazır analizler etiketlerine uymadığında kullan. Analiz edilen
  gönderi başına $0.0003'ten başlar.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)
  yapay zekanın 8 özellik cevabından her gönderi için 0 ile 100 arasında bir
  Viral Score & bir karar tahmin eder. Gönderilerin neden yayıldığını veya
  tutmadığını incelediğinde kullan. Analiz edilen gönderi başına $0.0003'ten
  başlar.
- [X (Twitter) Monitor](https://apify.com/xquik/x-twitter-monitor) hesapların
  her yeni tweet'ini, yanıtını, alıntısını, yeniden gönderisini & profil
  değişikliğini genelde X gösterdikten sonra 1 saniyeden kısa sürede yakalar.
  Anahtar kelime tweet'lerini & takipleri de yakalar. X bir tweet'i gösterir
  göstermez bildirim istediğinde kullan. monitor-hour başına $0.0045'ten başlar.

## SSS

Sık sorulan soruların cevapları, sonra da nereden yardım alacağın.

### X API anahtarı gerekir mi?

Hayır. X API anahtarı, giriş veya kimlik bilgisi gerekmez.

### Bir çalıştırmayı ne sınırlar?

Öğe sınırın & Apify harcama sınırın çalıştırmayı durdurur. Apify hesap &
platform sınırları yine geçerlidir.

### Ne kadar hızlı?

Xquik'in X Tweet Scraper'ı [karşılaştırma testinde](#karşılaştırma-testi)
saniyede 25,2 ile 39,2 arası işe yarar gönderi teslim etti. Çalışma süresi
girdine, sonuç sayısına & X'in erişilebilirliğine bağlıdır.

### X'in arama sekmesinin dışarıda bıraktığı gönderileri neden alıyorum?

X, eşleşen bazı gönderileri En Yeni sekmesinin dışında bırakır. Xquik'in X Tweet
Scraper'ı bu gönderileri de döndürür. Her gönderi, sorgun için gerçek bir X
arama sonucudur. Her gönderi için 1 kez ödersin.

### Hangi arama operatörleri çalışır?

X gelişmiş araması yazarları, alıcıları, bahsetmeleri, tarihleri, etkileşimi,
medyayı & konumu destekler. Örnekler için
[Desteklenen başlıca arama operatörleri](#desteklenen-başlıca-arama-operatörleri)
bölümüne bak.

### Bunu çalıştırmak için Apify API'yi kullanabilir miyim?

Evet. Python, JavaScript & cURL örnekleri için
[API sekmesine](https://apify.com/xquik/x-tweet-scraper/api) bak.

### Düzenli kazımaları zamanlayabilir miyim?

Evet. Xquik'in X Tweet Scraper'ını bir cron takvimiyle çalıştırmak için Apify'ın
yerleşik [zamanlama](https://docs.apify.com/platform/schedules) özelliğini
kullan.

### Bana özel bir çözüm alabilir miyim?

Evet. İhtiyacını
[Issues sekmesinde](https://apify.com/xquik/x-tweet-scraper/issues) anlat. Xquik
ayrıca bir panel, bir REST API, bir MCP sunucusu & webhook'lar sunar. Xquik'in
web sitesini [Apify profilinde](https://apify.com/xquik) bul.

### X verisini kazımak yasal mı?

Xquik'in X Tweet Scraper'ı herkese açık X alanlarını çeker. Sonuçlarda kişisel
veri olabilir. Amacının yasal olduğundan emin ol & sana uygulanan gizlilik
kurallarına uy. Emin değilsen yetkin bir hukukçuya danış.

### Nereden yardım alırım?

Çalıştırma ID'siyle
[Issues sekmesinde](https://apify.com/xquik/x-tweet-scraper/issues) bir issue
aç.
