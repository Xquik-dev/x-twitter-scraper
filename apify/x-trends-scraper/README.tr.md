[English](README.md) · [Español](README.es.md) · **Türkçe** ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer, Xquik MCP'yi kodlama ajanlarına bağlıyor](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Framer'ın Xquik scraper'larını Claude Code, Codex, Cursor & daha fazlasıyla nasıl kullandığını](https://youtu.be/4UOSpoOoC3Y?t=367)
6:07'den itibaren izle.

Xquik, en eksiksiz X verisini sunan, dünyanın en hızlı ve en ucuz X (Twitter)
scraper hizmetidir. Xquik'in X Trends Scraper'ı konuma göre gerçek zamanlı
gündemi sıra, hacim & sorguyla toplar. Diğer Apify Actor'larının çoğu,
filtrelemeden veya tekilleştirmeden önce ücret alır. Xquik yalnızca teslim
edilen, benzersiz ve filtrene uyan sonuçlar için ücret alır.

Güncel Twitter gündemini 1 çalıştırmada birçok konumdan kazı. Ya da geçmiş
gündemi Xquik'in 2026-10-13 02:20 UTC'de başlayan Twitter gündem arşivinden oku.
**Teslim edilen satır başına $0.00015** ödersin & Apify platform kullanımını
ayrıca faturalandırır. X API anahtarına veya girişe ihtiyacın yok.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## Neden X Trends Scraper kullanmalısın?

- **Aralığa göre gündem geçmişi.** Her adım için 1 gündem listesi almak üzere
  `from`, `to` & `every` alanlarını ayarla.
- **Her gün dünün gündemi.** `at` alanı `24h` olduğunda günlük bir zamanlama
  dünün gündemini okur.
- **WOEID'ler, yer ID'leri & hashflag'ler.** `listLocations` veya
  `listHashflags` seçeneğini aç ya da `placeSearchTerms` alanını doldur.
- **Kesin kayıt zamanları.** Geçmiş satırlar, X'in listeyi gösterdiği anı
  `capturedAt` içinde taşır.
- **Kullanıma hazır dışa aktarımlar.** Alanları tut, yeniden adlandır, düzleştir
  veya birleştir. Sonra JSON, CSV, Excel, XML veya RSS olarak dışa aktar.

### Eksiksiz sonuçlar

- Her cevap, X'te bulunan en eksiksiz veriyi tutar.

### Doğru satırlar

- Satırlar yalnızca herkese açık veri tutar.

### Güncel veri

- 2026-10-13'ten beri geçmişteki herhangi bir anın gündemini oku.
- X değişiklik yayınladığında da okumalar çalışmaya devam eder.

### Hız

- Yavaş bir sayfa çalıştırmanı bekletmez.
- Okumalar, satırları geldiği anda biter.
- Takılan Actor çağrıları kendi kendine toparlanır.

### Adil faturalama

- Hatalı girdi ücretsizdir & neyi düzelteceğini söyler.
- Actor'lar yalnızca teslim edilen, benzersiz & eşleşen satırlar için ücret
  alır.
- Yeniden başlatılan bir çalıştırma asla 2 kez ücret almaz.
- Çalıştırmalar harcama sınırının içinde kalır & tanılamalarını yine yazar.

### Güvenilirlik

- Tek seferlik bir hata çalıştırmanı başarısız yapmaz.
- Süre dolduğunda o ana kadar bulunan satırlar tanılamalarla birlikte döner.
- Actor'lar kısa Xquik kesintilerini atlatır.
- Actor çalıştırmaları yeniden başlatılınca satırları tekrarlamadan devam eder.
- Tek bir hatalı satır bütün grubu bozmaz.
- Durdurulan çalıştırmalar satırlarını & raporlarını korur.
- Başlayamayan bir çalıştırma bile nedenini açıklar.
- Destek ekibi bir isteğin veya çalıştırmanın tam olarak ne döndürdüğünü
  görebilir.

### Ajanlar için tasarlandı

- Actor'lar başka Actor'lar için yazılmış girdileri kabul eder.
- Her çalıştırma neden bittiğini & yeniden denemen gerekip gerekmediğini söyler.

### Zengin veri

- Yer adına, ülkeye veya bölge ID'sine göre gündem. Tanıtılan gündem başlıkları
  işaretlidir.

### Kalite kontrolleri

- X'in gösterdiği her alan ya sunulur, ya bilerek dışarıda bırakılır ya da
  olmadığı kanıtlanır.
- Xquik her okumayı X üzerinde canlı test eder.

## X Trends Scraper hangi verileri çıkarabilir?

- Her konum için en fazla 50 güncel gündem başlığı.
- X'in gündem sunduğu her yerin WOEID'si, ülkesi & türüyle bir listesi.
- X gönderi aramasının kabul ettiği yer ID'siyle X yer araması.
- X hashflag'leri, yani X'in bazı hashtag'lerden sonra gösterdiği özel emojiler.
- Sıra, konu, sorgu, gönderi hacmi, arama URL'si, WOEID & kaynak konum.
- Her satırda konum bilgisi.
- Hashtag satırlarını & gönderi hacmi olan satırları işaretleyen bayraklar.

## X gündemi nasıl kazınır

Apify'da yeni misin? Önce
[ücretsiz bir hesap oluştur](https://console.apify.com/sign-up?fpr=xquik).
Ücretsiz plan kredi kartı istemez & her ay harcaman için $5 verir. Gündem
başlığı başına $0.00015 fiyatla $5, platform kullanımı hariç 33.000 gündem
başlığına kadar yeter. Sonra buraya dön & Try for free düğmesine bas.

1. Apify Console'da Xquik'in X Trends Scraper'ını aç.
2. Konum adlarını `locations` alanına veya sayısal WOEID'leri `woeids` alanına
   gir.
3. `maxTrendsPerLocation` değerini her konum için en fazla 50 gündem başlığı
   olacak şekilde ayarla.
4. Tüm çalıştırmada teslim edilen satırları sınırlamak için `maxItems` ayarla,
   sonra Start düğmesine tıkla.
5. Veri kümesini JSON, CSV veya Excel olarak indir ya da Apify API'yi kullan.

## Girdi

Konum adlarını, sayısal WOEID'leri veya ikisini birden kullan.

```json
{
  "locations": ["Worldwide", "United States", "Turkey"],
  "maxTrendsPerLocation": 50,
  "maxItems": 150
}
```

`locations`, X'in gündem sunduğu her ülkeyi veya şehri kabul eder, örneğin
Worldwide, United States, Japan veya London. 2 harfli ülke kodları da çalışır.
X'in gündem sunmadığı bir ad satır döndürmez & ücretlendirilmez. `woeids`
sayısal WOEID'leri kabul eder.

Her adı & WOEID'yi görmek için `listLocations` seçeneğini aç. Çalıştırma o zaman
gündem yerine X'in gündem sunduğu yerleri listeler.

```json
{ "listLocations": true, "country": "TR", "maxItems": 100 }
```

`country` bir ad veya 2 harfli kod kabul eder. `placeType`, `country`, `town`,
`worldwide` veya `unknown` kabul eder. `nameContains`, adında senin metnin geçen
yerleri tutar. Her yeri listelemek için 3'ünü de boş bırak.

X yerlerini ada göre aramak için `placeSearchTerms` alanını doldur. Çalıştırma o
zaman gündem yerine yerleri döndürür.

```json
{ "placeSearchTerms": ["New York"], "maxItems": 20 }
```

Her yer, X gönderi aramasının `place` olarak kabul ettiği `id` değerini taşır.
Yerleri X sıralar, bu yüzden sıraları çalıştırmalar arasında değişebilir. X bir
ad için en fazla 20 yer listeler & New York gibi birkaç ad için daha azını
listeler. Çalıştırma yalnızca yazdığın adı taşıyan yerleri tutar, bu yüzden New
Delhi satır döndürmez & ücretlendirilmez.

`maxItems` tüm çalıştırmayı sınırlar & sınırı terim terim doldurur, bu yüzden
ilk terim hepsini kullanabilir. Her terime eşit pay vermek için
`maxItemsPerTarget` ayarla.

```json
{
  "placeSearchTerms": ["Paris", "Rome"],
  "maxItems": 20,
  "maxItemsPerTarget": 10
}
```

X hashflag'lerini listelemek için `listHashflags` seçeneğini aç. Hashflag, X'in
bir hashtag'den sonra belirli bir süre gösterdiği özel emojidir.

```json
{ "listHashflags": true, "hashtagContains": "football" }
```

Çalıştırma, X'in şu anda gösterdiği hashflag'leri listeler. Bitmiş & yaklaşan
hashflag'leri eklemek için `activeOnly` seçeneğini kapat. `hashtagContains`,
senin metnini içeren hashtag'leri tutar.

Twitter'da dün ya da geçmişteki herhangi bir anda neyin gündemde olduğunu görmek
için `at` alanını doldur. Çalıştırma o zaman her konum için o ana en yakın
kayıtlı listeyi okur.

```json
{ "locations": ["Turkey"], "at": "2026-10-13T14:00:00Z" }
```

`at`, 2026-10-13 gibi bir tarih, 2026-10-13T14:00:00Z gibi bir saat ya da Unix
saniyesi alır. Saat dilimi olmayan bir saat UTC sayılır. Xquik her konum için
saatte 12 liste kaydeder & her listeyi 25 ay saklar. Twitter gündem geçmişi
2026-10-13 02:20 UTC'de başlar. Kayıtlı her listeden 24 saatten fazla uzak bir
an satır döndürmez & ücretlendirilmez.

`at`, çalıştırmadan geriye doğru bir süreyi de bir sayı & `s`, `m`, `h` veya `d`
olarak alır. `24h` ile günlük bir zamanlama her çalıştırmada dünün gündemini
okur.

```json
{ "locations": ["Turkey"], "at": "24h" }
```

Bir aralık için `from` & `to` alanlarını doldur. Çalıştırma, `15m`, `1h` veya
`1d` gibi her `every` adımı için 1 kayıtlı liste döndürür.

```json
{
  "locations": ["Turkey"],
  "from": "2026-10-13",
  "to": "2026-10-14",
  "every": "1h",
  "maxItems": 1200
}
```

`to` yoksa aralık şimdi biter. `every` yoksa çalıştırma saatte 1 liste döndürür.
Kayıtlı listesi olmayan bir adım satır döndürmez. `from` & `to` da süre alır, bu
yüzden `24h` olarak ayarlanan `from` son 24 saati okur. `at`, `from` & `to`
alanlarından önce gelir.

Bir çalıştırma 1 tür satır okur. `listLocations`, `listHashflags` seçeneğinden
önce gelir, o da `placeSearchTerms` alanından önce gelir. Hiçbiri yoksa
çalıştırma gündemi okur.

Sorunsuz biten küçük çalıştırmalar `run-report` kaydını atlar & Apify
kullanımından tasarruf eder. Raporu her çalıştırmada yazmak için
`alwaysSaveRunRecords` seçeneğini aç.

## Çıktı

Her gündem başlığı 1 veri kümesi satırıdır. Satırlarda `name`, `rank`,
`tweetVolume`, `query`, `url`, `woeid`, `sourceTarget` & `resultType` bulunur.
`sourceTarget`, konumun senin yazdığın halidir. Eksik kaynak alanları satırda
yer almaz. Xquik'in X Trends Scraper'ı hiçbir değer uydurmaz.

Örnekler örnek değerler kullanır. Sonuçlar canlı veriyi yansıtır. Bir gündem
satırı şöyle görünür.

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

`at` veya bir aralıkla gelen satırlarda, Xquik'in o listeyi X'ten okuduğu an
olan `capturedAt` da bulunur. `at` satırlarında, senin istediğin an olan
`requestedAt` da bulunur. Xquik ikisini de tahmin etmez.

`listLocations` ile her yer 1 veri kümesi satırıdır. Satırlarda `woeid`, `name`,
`country`, `countryCode`, `placeType`, `placeTypeCode`, `parentWoeid`, `url` &
`resultType` bulunur. `url`, X'in yer için eski referansıdır & açılmayabilir.
Bir gündem konumu satırı şöyle görünür.

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
`boundingBox`, `attributes`, `containedWithin`, `sourceTarget` & `resultType`
bulunur. `centroid` önce boylamı, sonra enlemi tutar. Bir yer satırı şöyle
görünür.

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
`assetUrl`, `startsAt`, `endsAt`, `isHashfettiEnabled`, `animations` &
`resultType` bulunur. Bir hashflag satırı şöyle görünür.

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

- Bir nesnenin içindeki alan için nokta kullan. Harf büyüklüğü & alt çizgiler
  fark etmez.
- Her satır kendi `id` değerini tutar.
- `fields` kullanırsan satırda olmayan bir alan `null` olarak gelir. Böylece her
  satır aynı sütunlara sahip olur.
- Yanlış bir alan adı, çalıştırmayı hiçbir şey okumadan & ücretlendirmeden
  durdurur.
- Adlar kontrol edilemezse çalıştırma okumaya devam eder & görmediği adları
  sonunda listeler.
- Çalıştırma, başka bir Actor için yazılmış map fonksiyonunu veya jq filtresini
  yok sayar.

## X gündemini kazımak ne kadar tutar?

Her Apify planında teslim edilen satır başına $0.00015 ödersin. Apify, platform
kullanımını ayrıca faturalandırır.

Daha fazla hacim için daha çok ön ödemeli kullanım içeren bir
[Apify planı seç](https://apify.com/pricing?fpr=xquik).

- Teslim edilen her veri satırı için tek bir ücret. Tanılamalar `diagnostics`
  içinde ücretsizdir.
- Bir gündem konumu, yer veya hashflag satırı bir gündem satırıyla aynı tutar.
- Başlatma, sorgu veya konum ücreti yok.
- Tekilleştirme faturalamadan önce çalışır.
- Apify'ın maksimum toplam ücret ayarları teslim edilen satırları sınırlar.

## Sınırlar & kurtarma

Xquik'in X Trends Scraper'ı 1 çalıştırmada birçok konumu okur. Teslim edilen
satırlar & ilerleme bir Apify yeniden başlatmasından sonra korunur. Actor kendi
başına süre sınırı eklemez. Ayarladığın her Apify zaman aşımına uyar.

Veri çekme yarıda kesilirse Actor ücretsiz bir `partial` tanılaması yazar. Elde
edilen sonuçlar olduğu gibi kalır. Yeniden denemeden önce `availableResults`,
`failedTargets`, `retryable` & `nextAction` alanlarını oku. Actor'ın başarıyla
bitmesi teslimatı doğrular, tüm verinin çekildiğini değil.

Çalıştırma durumu, erken durmanın her nedenini söyler. `stopCauses` her nedeni
kendi `message`, `retryable` & `nextAction` alanlarıyla listeler. Nedenler
`target_not_found`, `target_failed`, `pagination_safety_limit` &
`deadline_reached` olabilir. Bulunamayan bir hedef, listeye yalnızca
çalıştırmayı başka bir neden durdurduysa girer. Nedenlerden biri yeniden
denenebiliyorsa çalıştırma da `retryable` olur.

## İlgili Xquik Actor'ları

Her Xquik Actor'ı aynı veri çekme motorunu, önce filtreleyen faturalandırmayı &
tanılamaları paylaşır. İhtiyacın olan veriye uyanı seç.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper) aramalardan, profil
  zaman akışlarından, Listelerden & gönderi ID'lerinden 50'den fazla filtre &
  düz dışa aktarımla gönderi kazır. Analiz olmadan gönderi verisi gerektiğinde
  kullan. Satır başına $0.00015'ten başlar.
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

### X API anahtarı veya giriş gerekir mi?

Hayır. Xquik'in X Trends Scraper'ı X API anahtarı, giriş veya kimlik bilgisi
istemez.

### X gündemini kazımak yasal mı?

Xquik'in X Trends Scraper'ı herkese açık X alanlarını çeker. Sonuçlarda kişisel
veri olabilir. Amacının yasal olduğundan emin ol & geçerli gizlilik kurallarına
uy. Emin değilsen yetkin bir hukukçuya danış.

### Çalıştırmam neden sonuç döndürmedi?

Önce çalıştırma durumunu oku. Boş bir çalıştırmanın durumu, hedeflerini &
filtrelerini kontrol etmeni söyler. Ücretsiz `diagnostics` çıktısı, dikkat
gerektiren bir şey olduğunda görünür. Bu çıktıdaki `stopCauses` her neden için
izleyeceğin bir `nextAction` verir. X'in gündem sunmadığı bir konum satır
döndürmez. X'in kabul ettiği adları görmek için `listLocations` seçeneğini aç.

### Geçmiş Twitter gündemini kazıyabilir miyim?

Evet, 2026-10-13 02:20 UTC'den beri. Geçmişteki 1 an için `at` alanını, bir
aralık için `from` & `to` alanlarını doldur. Bir zamanlamada `24h` gibi bir süre
yaz. Her satırda, kayıtlı listesinin zamanı olan `capturedAt` bulunur.

### API'yi, zamanlamaları & entegrasyonları kullanabilir miyim?

Evet. 50 herkese açık görevden birini veya Xquik REST API'yi seç.
[API sekmesinde](https://apify.com/xquik/x-trends-scraper/api) Python,
JavaScript & cURL örnekleri var. Apify
[zamanlamaları](https://docs.apify.com/platform/schedules), Xquik'in X Trends
Scraper'ını bir cron takvimiyle çalıştırır. Ajanlar
[Apify MCP](https://docs.apify.com/platform/integrations/mcp) kullanır. Eski bir
derlemeye ihtiyacın yoksa `latest` kullan.

### Nereden yardım alırım?

Çalıştırma ID'siyle
[Issues sekmesinde](https://apify.com/xquik/x-trends-scraper/issues) bir issue
aç. Anahtar-değer deposundaki ücretsiz tanılamalar dikkat gerektiren
çalıştırmaları açıklar. Hiç satır almayan bir çalıştırma, nedenini durum
metninde söyler.

### Bana özel bir çözüm alabilir miyim?

Evet. İhtiyacını
[Issues sekmesinde](https://apify.com/xquik/x-trends-scraper/issues) anlat.
Xquik ayrıca bir panel, bir REST API, bir MCP sunucusu & webhook'lar sunar.
Xquik'in web sitesini [Apify profilinde](https://apify.com/xquik) bul.
