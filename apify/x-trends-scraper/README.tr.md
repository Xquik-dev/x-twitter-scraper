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
scraper hizmetidir. Xquik'in X Trends Scraper'ı konuma göre gerçek zamanlı
gündemi sıra, hacim ve sorguyla toplar. Diğer Apify Actor'larının çoğu,
filtrelemeden veya tekilleştirmeden önce ücret alır. Xquik yalnızca teslim
edilen, benzersiz ve filtrene uyan sonuçlar için ücret alır.

Güncel Twitter gündemini (trendleri) 1 çalıştırmada birçok konumdan kazı.
**Teslim edilen satır başına $0.00015** ödersin. Apify, platform kullanımını
ayrıca faturalandırır. X API anahtarı ya da giriş gerekmez.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## Konumlar ve gündem verisi

- Aynı anda okunan birden çok ülke, şehir veya WOEID.
- Her konum için en fazla 50 güncel gündem başlığı.
- X'in gündem sunduğu her yerin WOEID'si, ülkesi ve türüyle listesi.
- X gönderi aramasının kabul ettiği yer ID'siyle X yer araması.
- X hashflag'leri: X'in bazı hashtag'lerden sonra gösterdiği özel emojiler.
- Sıra, konu, sorgu, gönderi hacmi, arama URL'si, WOEID ve kaynak konum.
- Her satırda konum bilgisi.
- Hashtag satırlarını ve gönderi hacmi olan satırları gösteren işaretler.
- Eşdeğer girdiler için faturalamadan önce tekilleştirme.
- Apify veri kümeleri üzerinden JSON, CSV, Excel, XML ve RSS dışa aktarımı.
- Apify çalıştırmayı taşısa da çalıştırma kayıtlı durumdan devam eder.

## X gündemi nasıl kazınır

1. Apify Console'da Xquik'in X Trends Scraper'ını aç.
2. Konum adlarını `locations` alanına ya da sayısal WOEID'leri `woeids` alanına
   gir.
3. `maxTrendsPerLocation` değerini ayarla. Her konum için en fazla 50 gündem
   başlığı alabilirsin.
4. Tüm çalıştırmada teslim edilecek satır sayısını `maxItems` ile sınırla, sonra
   Start'a tıkla.
5. Veri kümesini JSON, CSV veya Excel olarak indir ya da Apify API'yi kullan.

## Girdi

Konum adlarını, sayısal WOEID'leri veya ikisini birden kullan:

```json
{
  "locations": ["Worldwide", "United States", "Turkey"],
  "maxTrendsPerLocation": 50,
  "maxItems": 150
}
```

`locations`, X'in gündem sunduğu her ülkeyi veya şehri kabul eder, örneğin
Worldwide, United States, Japan veya London. 2 harfli ülke kodları da çalışır.
X'in gündem sunmadığı bir ad satır döndürmez ve ücret çıkarmaz. `woeids` sayısal
WOEID'leri kabul eder.

Her adı ve WOEID'yi görmek için `listLocations` seçeneğini aç. Çalıştırma o
zaman gündem yerine X'in gündem sunduğu yerleri listeler:

```json
{ "listLocations": true, "country": "TR", "maxItems": 100 }
```

`country` bir ad veya 2 harfli kod kabul eder. `placeType`; `country`, `town`,
`worldwide` veya `unknown` kabul eder. `nameContains`, adında senin metnin geçen
yerleri tutar. Her yeri listelemek için 3'ünü de boş bırak.

X yerlerini ada göre aramak için `placeSearchTerms` alanını doldur. Çalıştırma o
zaman gündem yerine yerleri döndürür:

```json
{ "placeSearchTerms": ["New York"], "maxItems": 20 }
```

Her yer, X gönderi aramasının `place` olarak kabul ettiği `id` değerini taşır.
Yerleri X sıralar, bu yüzden sıraları çalıştırmalar arasında değişebilir. X bir
ad için en fazla 20 yer listeler. New York gibi birkaç ad için daha azını
listeler. Çalıştırma yalnızca yazdığın adı taşıyan yerleri tutar. Bu yüzden New
Delhi satır döndürmez ve ücret çıkarmaz.

`maxItems` tüm çalıştırmayı sınırlar ve sınırı terim terim doldurur. Bu yüzden
ilk terim hepsini kullanabilir. Her terime eşit pay vermek için
`maxItemsPerTarget` ayarla:

```json
{
  "placeSearchTerms": ["Paris", "Rome"],
  "maxItems": 20,
  "maxItemsPerTarget": 10
}
```

X hashflag'lerini listelemek için `listHashflags` seçeneğini aç. Hashflag, X'in
bir hashtag'den sonra belirli bir süre gösterdiği özel emojidir:

```json
{ "listHashflags": true, "hashtagContains": "football" }
```

Çalıştırma, X'in şu anda gösterdiği hashflag'leri listeler. Bitmiş ve yaklaşan
hashflag'leri eklemek için `activeOnly` seçeneğini kapat. `hashtagContains`,
senin metnini içeren hashtag'leri tutar.

Bir çalıştırma 1 tür satır okur. `listLocations`, `listHashflags` seçeneğinden,
o da `placeSearchTerms` alanından önce gelir. Hiçbiri yoksa çalıştırma gündemi
okur.

Sorunsuz biten küçük çalıştırmalar `run-report` yazmaz, böylece Apify kullanımı
azalır. Raporu her çalıştırmada almak için `alwaysSaveRunRecords` seçeneğini aç.

## Çıktı

Her gündem başlığı 1 veri kümesi satırıdır. Satırlarda `name`, `rank`,
`tweetVolume`, `query`, `url`, `woeid`, `sourceTarget` ve `resultType` bulunur.
`sourceTarget`, senin yazdığın haliyle konumdur. Eksik kaynak alanları satıra
eklenmez. Xquik'in X Trends Scraper'ı hiçbir değer uydurmaz.

Aşağıdaki değerler yalnızca örnektir. Gerçek sonuçlar canlı veriden gelir. Bir
gündem satırı şöyle görünür:

```json
{
  "name": "#SampleTrend",
  "rank": 1,
  "tweetVolume": 12000,
  "isHashtag": true,
  "woeid": 1,
  "sourceTarget": "Worldwide"
}
```

`listLocations` ile her yer 1 veri kümesi satırıdır. Satırlarda `woeid`, `name`,
`country`, `countryCode`, `placeType`, `placeTypeCode`, `parentWoeid`, `url` ve
`resultType` bulunur. `url`, X'in yer için eski referansıdır ve açılmayabilir.
Bir gündem konumu satırı şöyle görünür:

```json
{
  "woeid": 2344116,
  "name": "Istanbul",
  "country": "Turkey",
  "countryCode": "TR",
  "placeType": "Town",
  "placeTypeCode": 7,
  "parentWoeid": 23424969,
  "resultType": "trendLocation"
}
```

`placeSearchTerms` ile her yer 1 veri kümesi satırıdır. Satırlarda `id`, `name`,
`fullName`, `country`, `countryCode`, `placeType`, `url`, `centroid`,
`boundingBox`, `attributes`, `containedWithin`, `sourceTarget` ve `resultType`
bulunur. `centroid` önce boylamı, sonra enlemi tutar. Bir yer satırı şöyle
görünür:

```json
{
  "id": "0123456789abcdef",
  "name": "Sample City",
  "fullName": "Sample City, Sample Country",
  "country": "Sample Country",
  "countryCode": "US",
  "placeType": "city",
  "centroid": [-73.97, 40.78],
  "sourceTarget": "New York",
  "resultType": "place"
}
```

`listHashflags` ile her hashflag 1 veri kümesi satırıdır. Satırlarda `hashtag`,
`assetUrl`, `startsAt`, `endsAt`, `isHashfettiEnabled`, `animations` ve
`resultType` bulunur. Bir hashflag satırı şöyle görünür:

```json
{
  "hashtag": "SampleHashtag",
  "assetUrl": "https://abs.twimg.com/hashflags/Sample/Sample.png",
  "startsAt": "2026-10-02T10:00:00.000Z",
  "endsAt": "2027-01-03T14:59:00.000Z",
  "isHashfettiEnabled": false,
  "animations": [],
  "resultType": "hashflag"
}
```

## X gündemini kazımak ne kadar tutar?

Her Apify planında teslim edilen satır başına $0.00015 ödersin. Apify, platform
kullanımını ayrıca faturalandırır.

- Teslim edilen her veri satırı için 1 kez ödersin. Tanılamalar `diagnostics`
  içinde ücretsizdir.
- Bir gündem konumu, yer veya hashflag satırı bir gündem satırıyla aynı tutar.
- Başlatma, sorgu veya konum ücreti yok.
- Tekilleştirme faturalamadan önce çalışır.
- Apify'ın maksimum toplam ücret ayarları teslim edilen satırları sınırlar.

## Sınırlar ve kurtarma

Xquik'in X Trends Scraper'ı 1 çalıştırmada birçok konumu okur. Apify
çalıştırmayı yeniden başlatsa da teslim edilen satırlar ve ilerleme korunur.
Actor kendi başına süre sınırı eklemez. Ayarladığın Apify zaman aşımına uyar.

Çalıştırma yarıda kesilirse Actor ücretsiz bir `partial` tanılaması yazar. Elde
edilen sonuçlar olduğu gibi kalır. Yeniden denemeden önce `availableResults`,
`failedTargets`, `retryable` ve `nextAction` alanlarını oku. Actor'ın başarıyla
bitmesi teslimatı doğrular. Tüm verinin çekildiğini doğrulamaz.

Çalıştırma durumu, erken durmanın her nedenini söyler. `stopCauses` her nedeni
kendi `message`, `retryable` ve `nextAction` alanlarıyla listeler. Nedenler
şunlardır: `target_not_found`, `target_failed`, `pagination_safety_limit` ve
`deadline_reached`. Bulunamayan bir hedef, listeye yalnızca çalıştırmayı başka
bir neden durdurduysa girer. Nedenlerden biri yeniden denenebiliyorsa çalıştırma
da `retryable` olur.

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
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper):
  Gönderileri alıntılayan gönderileri metin, medya, sayılar, yazarlar ve 11
  filtreyle kazır. Gönderileri kimin alıntıladığını ve ne dediğini incelemek
  istediğinde kullan. Gönderi başına $0.00015'ten başlar.
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
- [X Email Scraper](https://apify.com/xquik/x-email-scraper): Kullanıcı
  adlarından, takipçilerden veya kullanıcı aramalarından, hesapların
  profillerinde yayımladığı e-postaları, telefonları ve bağlantıları alır.
  Profillerin yayımladığı e-postalara ihtiyacın olduğunda kullan. Profil başına
  $0.00015'ten başlar.
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
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper): X iş ilanlarını
  anahtar kelime, yer, çalışma şekli, kıdem ve şirkete göre maaş ve başvuru
  bağlantılarıyla kazır. X'te yayımlanan iş ilanlarını topladığında kullan. İlan
  başına $0.00015'ten başlar.
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

## SSS

Sık sorulan soruların cevapları, sonra da nereden yardım alacağın.

### X API anahtarı veya giriş gerekir mi?

Hayır. Xquik'in X Trends Scraper'ı X API anahtarı, giriş ya da kimlik bilgisi
istemez.

### X gündemini kazımak yasal mı?

Xquik'in X Trends Scraper'ı herkese açık X alanlarını çeker. Sonuçlarda kişisel
veri olabilir. Amacının yasal olduğundan emin ol ve geçerli gizlilik kurallarına
uy. Emin değilsen yetkin bir hukukçuya danış.

### Çalıştırmam neden sonuç döndürmedi?

Önce ücretsiz `diagnostics` çıktısını aç. Boş bir çalıştırmanın durumu,
hedeflerini ve filtrelerini kontrol etmeni söyler. `stopCauses` her neden için
izleyeceğin bir `nextAction` verir. X'in gündem sunmadığı bir konum satır
döndürmez. X'in kabul ettiği adları görmek için `listLocations` seçeneğini aç.

### API'yi, zamanlamaları ve entegrasyonları kullanabilir miyim?

Evet. 50 herkese açık görevden birini veya Xquik REST API'yi seç.
[API sekmesinde](https://apify.com/xquik/x-trends-scraper/api) Python,
JavaScript ve cURL örnekleri var. Apify
[zamanlamaları](https://docs.apify.com/platform/schedules), Xquik'in X Trends
Scraper'ını bir cron takvimiyle çalıştırır. Ajanlar
[Apify MCP](https://docs.apify.com/platform/integrations/mcp) kullanır. Eski bir
derlemeye ihtiyacın yoksa `latest` derlemesini kullan.

### Nereden yardım alırım?

Actor sayfasında bir issue aç ya da çalıştırma ID'siyle support@xquik.com
adresine yaz. Anahtar-değer deposundaki ücretsiz tanılamalar boş, kısmi veya
kesilen çalıştırmaları açıklar.

### Bana özel bir çözüm alabilir miyim?

Evet. [xquik.com](https://xquik.com) adresini ziyaret et ya da
[API belgelerini](https://docs.xquik.com/introduction) oku. Bu kaynaklar paneli,
API'yi, MCP sunucusunu ve webhook'ları anlatır.
