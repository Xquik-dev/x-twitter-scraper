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
scraper hizmetidir. Xquik'in X Quote Tweets Scraper'ı, herkese açık X
gönderilerini alıntılayan gönderileri X çerezi veya giriş olmadan toplar. Diğer
Apify Actor'larının çoğu, filtrelemeden veya tekilleştirmeden önce ücret alır.
Xquik yalnızca teslim edilen, benzersiz ve filtrene uyan sonuçlar için ücret
alır.

Gönderi URL'lerini veya ID'lerini yapıştır ve 1 çalıştırmada X'in her gönderi
için sunduğu tüm alıntıları al. Her satırda alıntı, yazarının herkese açık
profilinin tamamı ve alıntılanan gönderi bulunur. **Teslim edilen satır başına
$0.00015** ödersin. Apify, platform kullanımını ayrıca faturalandırır.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## Her satırdaki alıntı verileri

- Alıntının tam metni, bağlantısı, dili ve paylaşılma zamanı.
- Beğeniler, yanıtlar, yeniden gönderiler, alıntılar, görüntülenmeler ve yer
  işaretleri.
- Yazarın herkese açık profilinin tamamı: ad, biyografi, takipçiler, onay ve
  daha fazlası.
- Bağlantılarıyla birlikte fotoğraflar, videolar ve GIF'ler.
- Metinde geçen hashtag'ler, bahsetmeler ve bağlantılar.
- Alıntılanan gönderinin kendisi, aynı biçimde.
- `sourceTarget`, satırın alıntıladığı girdi gönderisi.
- `position`, satırın çalıştırmadaki sırası ve `scrapedAt`, satırın teslim
  zamanı.
- 1 çalıştırmada, her biri X'in sunduklarının sonuna kadar okunan birçok
  gönderi.
- Önce en yeniler ya da X'in en üst sıraya koyduğu alıntılar.
- 11 filtre: dil, tarihler, medya türü, 6 minimum sayı ve onaylı yazarlar.
- Gönderi değil kişi istediğinde yazar başına 1 satır.
- x.com ve twitter.com gönderi URL'leri ya da sayısal gönderi ID'leri.
- Faturalamadan önce tekilleştirme.
- Apify veri kümeleri üzerinden JSON, CSV, Excel, XML ve RSS dışa aktarımı.
- Apify çalıştırmayı taşısa da çalıştırma kayıtlı durumdan devam eder.

## Alıntı tweet nasıl kazınır

1. Apify Console'da Xquik'in X Quote Tweets Scraper'ını aç.
2. Gönderi URL'lerini `startUrls` alanına ya da gönderi ID'lerini `tweetIds`
   alanına yapıştır.
3. Teslim edilecek satır sayısını `maxItems` ile sınırla, sonra Start'a tıkla.
4. Veri kümesini JSON, CSV veya Excel olarak indir ya da Apify API'yi kullan.

Hiçbir adımda X çerezi, giriş bilgisi veya API anahtarı girmezsin. Çalıştırmalar
arasında sayfa imleci taşımazsın.

## Girdi

`startUrls` her gönderi URL'sini düz metin olarak ya da `{ "url": "..." }`
nesnesi olarak alır. `tweetIds` gönderi ID'lerini alır, gönderi URL'si de orada
çalışır:

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

Sıralama, filtreler ve sınırlar gönderilerin yanına gelir:

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

- `sort` değeri, önce en yeni alıntılar için `latest`, X'in en üst sıraya
  koyduğu alıntılar için `top` olur.
- `includeReplies`, gönderiyi alıntılayan yanıtları X'in Alıntılar görünümünün
  listelediği gibi tutar. Sen kapatmadıkça açıktır.
- `uniqueAuthors`, her yazarın çalıştırmadaki ilk alıntısını tutar. Böylece veri
  kümesinde alıntı başına değil, yazar başına 1 satır bulunur. Teslim edilen
  satırlar için ödersin.
- `maxItems` tüm çalıştırmayı, `maxItemsPerTarget` ise her gönderiyi sınırlar.
- Filtreler şunlardır: `language`, `sinceDate`, `untilDate`, `mediaType`,
  `minLikes`, `minReplies`, `minRetweets`, `minQuotes`, `minViews`,
  `minBookmarks` ve `verifiedOnly`.

Girdide 2 kez geçen bir gönderi 1 kez okunur. `tweetUrls`, `tweetId`, `tweets`
ve `tweet_id`, gönderiler için başka adlar olarak çalışır. Sorunsuz biten küçük
çalıştırmalar `run-report` yazmaz, böylece Apify kullanımı azalır. Raporu her
çalıştırmada almak için `alwaysSaveRunRecords` seçeneğini aç.

## Çıktı

Her alıntı 1 veri kümesi satırıdır ve şu alanları taşır: `id`, `url`, `text`,
`createdAt`, `lang`, `likeCount`, `replyCount`, `retweetCount`, `quoteCount`,
`viewCount`, `bookmarkCount`, `media`, `entities`, `author`, `quotedTweetId` ve
`quoted_tweet`. Actor `sourceTarget`, `position`, `scrapedAt` ve `resultType`
alanlarını ekler. Eksik kaynak alanları satıra eklenmez. Xquik'in X Quote Tweets
Scraper'ı hiçbir değer uydurmaz.

Aşağıdaki değerler yalnızca örnektir. Gerçek sonuçlar canlı veriden gelir. Bir
satır şöyle görünür:

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

`position`, teslim edilen satırları filtrelerden ve tekilleştirmeden sonra 1'den
başlayarak sayar. Veri kümesinin 2 tablo görünümü var. "Quote Tweets" her
alıntıyı sayılarıyla gösterir. "Quote Authors" her gönderiyi kimin
alıntıladığını gösterir ve yazarın profil alanlarını sütun olarak verir.

## X ne sunar

2 sınır X'ten gelir ve Xquik'in X Quote Tweets Scraper'ı bunları açıkça söyler:

- Çok büyük bir gönderinin alıntılarının ne kadar geriye gittiğini X araması
  belirler. Çalıştırma, X'in sunduğu her alıntıyı okur ve orada durur.
- `top`, Xquik'in değil X'in sıralamasıdır. Beğeni sayısına göre bir sıralama
  değildir. Sonraki bir satırın beğenisi önceki bir satırınkinden fazla
  olabilir.

## Alıntı tweet kazımak ne kadar tutar?

Her Apify planında teslim edilen satır başına $0.00015 ödersin. Apify, platform
kullanımını ayrıca faturalandırır.

- Teslim edilen her veri satırı için 1 kez ödersin. Tanılamalar `diagnostics`
  içinde ücretsizdir.
- Başlatma ücreti yok.
- X'te bulunmayan bir gönderi satır eklemez ve ücret çıkarmaz.
- Filtreler ve `uniqueAuthors` faturalamadan önce çalışır, bu yüzden elenen bir
  alıntı ücret çıkarmaz.
- Tekilleştirme faturalamadan önce çalışır.
- Apify'ın maksimum toplam ücret ayarları teslim edilen satırları sınırlar.

## Sınırlar ve kurtarma

Xquik'in X Quote Tweets Scraper'ı 1 çalıştırmada birçok gönderiyi okur. Apify
çalıştırmayı yeniden başlatsa da teslim edilen satırlar ve ilerleme korunur.
Actor kendi başına süre sınırı eklemez. Ayarladığın Apify zaman aşımına uyar.

Çalıştırma durumu, X'te karşılığı bulunmayan gönderileri belirtir ve URL'yi veya
ID'yi kontrol etmeni söyler. Çalıştırma yarıda kesilirse Actor ücretsiz bir
`partial` tanılaması yazar. Elde edilen sonuçlar olduğu gibi kalır. Yeniden
denemeden önce `availableResults`, `failedTargets`, `retryable` ve `nextAction`
alanlarını oku. Actor'ın başarıyla bitmesi teslimatı doğrular. Tüm verinin
çekildiğini doğrulamaz.

Çalıştırma durumu, erken durmanın her nedenini söyler. `stopCauses` her nedeni
kendi `message`, `retryable` ve `nextAction` alanlarıyla listeler. Nedenlerden
biri yeniden denenebiliyorsa çalıştırma da `retryable` olur.

## İlgili Xquik Actor'ları

Her Xquik Actor'ı aynı veri çekme motorunu, önce filtreleyen faturalandırmayı ve
tanılamaları paylaşır. İhtiyacın olan veriye uyanı seç.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): Aramalardan,
  profil zaman akışlarından, Listelerden ve gönderi ID'lerinden 50'den fazla
  filtre ve düz dışa aktarımla gönderi kazır. Analiz değil, yalnızca gönderi
  verisi gerektiğinde kullan. Satır başına $0.00015'ten başlar.
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
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper):
  X'in "Account based in" etiketi, X'e nasıl bağlandıkları ve kullanıcı adı
  değişiklikleriyle hesapların nerede bulunduğunu kontrol eder. Hesapların
  nerede bulunduğunu doğrulaman gerektiğinde kullan. Hesap başına $0.00015'ten
  başlar.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): Liste URL'lerinden
  veya ID'lerinden Liste gönderilerini, üyelerini ve takipçilerini kazır.
  Kaynaklarını özenle seçilmiş bir Liste belirlediğinde kullan. Satır başına
  $0.00015'ten başlar.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): Topluluk
  bilgilerini, gönderilerini, aramalarını, üyelerini ve moderatörlerini kazır.
  Kaynakların X Toplulukları olduğunda kullan. Satır başına $0.00015'ten başlar.
- [X Space Scraper](https://apify.com/xquik/x-space-scraper): Sohbet Odalarını
  anahtar kelimeyle bulur; başlıklarını, durumlarını, zamanlarını, dinleyici
  sayılarını, sunucularını ve konuşmacılarını okur. Yayınları da URL veya ID ile
  okur. X'teki canlı ses ve video yayınlarını takip ettiğinde kullan. Sohbet
  Odası veya yayın başına $0.00015'ten başlar.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): Sıralama, hacim,
  sorgu ve WOEID ile konuma göre gerçek zamanlı gündemi kazır. Nerede neyin
  gündemde olduğunu takip ettiğinde kullan. Gündem başlığı başına $0.00015'ten
  başlar.
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper): X iş ilanlarını
  anahtar kelime, yer, çalışma şekli, kıdem ve şirkete göre maaş ve başvuru
  bağlantılarıyla kazır. X'te yayımlanan iş ilanlarını topladığında kullan. İlan
  başına $0.00015'ten başlar.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): Uzun biçimli X
  Makalelerini kapak, yazar, tarih ve metriklerle Markdown ve metin olarak
  kazır. Gönderi değil, makale gövdesi gerektiğinde kullan. Makale başına
  $0.00015'ten başlar.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader):
  Gönderilerden veya profillerden fotoğrafları, videoları ve GIF'leri MP4 ve
  metadata seçenekleriyle çıkarır veya depolar. Medya dosyalarının kendisine
  ihtiyacın olduğunda kullan. Medya satırı başına $0.00015'ten başlar.
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
  konuşmalarını takip ettiğinde kullan. Analiz edilen gönderi başına $0.0003'ten
  başlar.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  Yapay zeka ile haber gönderilerini biçim, kaynak atfı ve konu ilgisine göre
  etiketler. Haberi yorumdan ayırdığında kullan. Analiz edilen gönderi başına
  $0.0003'ten başlar.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  Yapay zeka ile her gönderi için kendi kategori, puan ve evet/hayır sorularını
  cevaplar. Hazır analizler etiketlerine uymadığında kullan. Analiz edilen
  gönderi başına $0.0003'ten başlar.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer):
  Yapay zekanın 8 özellik cevabından her gönderi için 0 ile 100 arasında bir
  Viral Score ve bir karar tahmin eder. Gönderilerin neden yayıldığını veya
  tutmadığını incelediğinde kullan. Analiz edilen gönderi başına $0.0003'ten
  başlar.

## SSS

Sık sorulan soruların cevapları, sonra da nereden yardım alacağın.

### X çerezi, API anahtarı veya giriş gerekir mi?

Hayır. Xquik'in X Quote Tweets Scraper'ı X çerezi, API anahtarı, giriş ya da
kimlik bilgisi istemez. Her okuma Xquik'in altyapısında çalışır.

### 1 çalıştırmada birçok gönderinin alıntılarını kazıyabilir miyim?

Evet. İhtiyacın kadar gönderi URL'si veya ID'si yapıştır. Her satırın
`sourceTarget` alanı, satırın hangi gönderiyi alıntıladığını söyler.

### 1 çalıştırma kaç alıntı döndürebilir?

Bir çalıştırma 100.000 satır ve daha fazlasını döndürebilir. Tam bir dışa
aktarım için `maxItems` değerini formun başladığı 1.000'in üzerine çıkar.

### Dev bir gönderi neden sayacının gösterdiğinden az alıntı döndürür?

Çok büyük bir gönderinin alıntılarının ne kadar geriye gittiğini X araması
belirler. Çalıştırma, X'in sunduğu her alıntıyı teslim eder. Sayaç, gizli veya
kaldırılmış hesapların alıntılarını da içerir.

### Bir gönderiyi alıntılayan her kişi için nasıl 1 satır alırım?

`uniqueAuthors` seçeneğini aç. Çalıştırma her yazarın ilk alıntısını tutar ve
sonrakileri ücretsiz atlar.

### Alıntı tweet kazımak yasal mı?

Xquik'in X Quote Tweets Scraper'ı herkese açık X gönderilerini çeker. Sonuçlarda
kişisel veri olabilir. Amacının yasal olduğundan emin ol ve geçerli gizlilik
kurallarına uy. Emin değilsen yetkin bir hukukçuya danış.

### Çalıştırmam neden sonuç döndürmedi?

Önce çalıştırma durumunu oku. Boş bir çalıştırmanın durumu, gönderinin X'te
karşılığı mı olmadığını yoksa filtrelerinle eşleşen alıntısı mı olmadığını
söyler. Ücretsiz `diagnostics` çıktısı, ilgilenmen gereken bir şey olduğunda
görünür. Buradaki `stopCauses` her neden için izleyeceğin bir `nextAction`
verir.

### API'yi, zamanlamaları ve entegrasyonları kullanabilir miyim?

Evet. Apify API'yi veya Xquik REST API'yi kullan.
[API sekmesinde](https://apify.com/xquik/x-quote-tweets-scraper/api) Python,
JavaScript ve cURL örnekleri var. Apify
[zamanlamaları](https://docs.apify.com/platform/schedules), Xquik'in X Quote
Tweets Scraper'ını bir cron takvimiyle çalıştırır. Ajanlar
[Apify MCP](https://docs.apify.com/platform/integrations/mcp) kullanır. Eski bir
derlemeye ihtiyacın yoksa `latest` derlemesini kullan.

### Nereden yardım alırım?

Actor sayfasında bir issue aç ya da çalıştırma ID'siyle <support@xquik.com>
adresine yaz. Anahtar-değer deposundaki ücretsiz tanılamalar ilgilenmen gereken
çalıştırmaları açıklar. Hiç satır alamayan bir çalıştırma nedenini durumunda
söyler.

### Bana özel bir çözüm alabilir miyim?

Evet. [xquik.com](https://xquik.com) adresini ziyaret et ya da
[API belgelerini](https://docs.xquik.com/introduction) oku. Bu kaynaklar paneli,
API'yi, MCP sunucusunu ve webhook'ları anlatır.
