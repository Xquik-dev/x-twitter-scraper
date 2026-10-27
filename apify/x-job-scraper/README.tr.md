[English](README.md) · [Español](README.es.md) · **Türkçe** ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer, Xquik MCP'yi kodlama ajanlarına bağlıyor](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Framer'ın Xquik scraper'larını Claude Code, Codex, Cursor & daha fazlasıyla nasıl kullandığını](https://youtu.be/4UOSpoOoC3Y?t=367)
6:07'den itibaren izle.

Xquik, en eksiksiz X verisini sunan, dünyanın en hızlı ve en ucuz X (Twitter)
scraper hizmetidir. Xquik'in X Jobs Scraper'ı X'te yayımlanan iş ilanlarını
maaş, başvuru bağlantısı & tam açıklamalarıyla toplar. Diğer Apify Actor'larının
çoğu, filtrelemeden veya tekilleştirmeden önce ücret alır. Xquik yalnızca teslim
edilen, benzersiz ve filtrene uyan sonuçlar için ücret alır.

X iş ilanlarını 1 çalıştırmada anahtar kelime, yer, çalışma şekli, kıdem &
şirkete göre ara. **Teslim edilen satır başına $0.00015** ödersin & Apify
platform kullanımını ayrıca faturalandırır. X API anahtarına veya girişe
ihtiyacın yok.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## Aramalar & iş ilanı verisi

- 1 çalıştırmada aynı anda okunan birçok arama terimi.
- Yer, çalışma şekli, kıdem, istihdam türü & şirket filtreleri.
- Tam ilan olarak okunan iş ilanı URL'leri & ID'leri.
- Ada göre iş konumları, her biri `locationId` alanının kabul ettiği ID ile.
- Başlık, maaş aralığı, para birimi, başvuru bağlantısı, konum & işe alan hesap.
- Her satırda düz metin & Markdown olarak tam açıklama.
- Her satırda arama bilgisi.
- Aramalar arasında faturalamadan önce tekilleştirme.
- Apify veri kümeleri üzerinden JSON, CSV, Excel, XML & RSS dışa aktarımları.
- Apify çalıştırmayı taşıdığında çalıştırma kayıtlı durumdan devam eder.

## X iş ilanları nasıl kazınır

Apify'da yeni misin? Önce
[ücretsiz bir hesap oluştur](https://console.apify.com/sign-up?fpr=xquik).
Ücretsiz plan kredi kartı istemez & her ay harcaman için $5 verir. İlan başına
$0.00015 fiyatla $5, platform kullanımı hariç 33.000 ilana kadar yeter. Sonra
buraya dön & Try for free düğmesine bas.

1. Apify Console'da Xquik'in X Jobs Scraper'ını aç.
2. İş unvanlarını veya becerileri `searchTerms` alanına ya da iş ilanı
   URL'lerini `startUrls` alanına gir.
3. Aramayı `location`, `locationType`, `seniority` veya `company` ile daralt.
4. Teslim edilen satırları sınırlamak için `maxItems` ayarla, sonra Start
   düğmesine tıkla.
5. Veri kümesini JSON, CSV veya Excel olarak indir ya da Apify API'yi kullan.

`startUrls` her URL'yi düz metin olarak ya da `{ "url": "..." }` nesnesi olarak
alır.

```json
{
  "startUrls": [
    "https://x.com/i/jobs/1899202395210649861",
    { "url": "https://x.com/i/jobs/1899202395210649861" }
  ]
}
```

## Girdi

Filtrelerle anahtar kelimeye göre ara.

```json
{
  "searchTerms": ["software engineer", "data scientist"],
  "location": "Berlin",
  "locationType": ["remote", "hybrid"],
  "seniority": ["senior", "lead"],
  "maxItems": 200
}
```

`locationType`, `onsite`, `remote` & `hybrid` değerlerini kabul eder.
`seniority`, `intern`, `entry_level`, `junior`, `mid_level`, `senior`, `lead`,
`manager` & `executive` değerlerini kabul eder. `employmentType`, `full_time`,
`full_time_contract`, `part_time` & `contract_to_hire` değerlerini kabul eder.
Her filtre, seçtiğin değerlerden herhangi birine uyan ilanları tutar.

Bildiğin ilanları URL veya ID ile oku.

```json
{
  "startUrls": [{ "url": "https://x.com/i/jobs/1899202395210649861" }],
  "jobIds": ["1828221151962898435"]
}
```

`location` bir yer adı kabul eder. `locationId` ise bunun yerine 1 kesin yeri
sabitler, örneğin West New York yerine New York City.

Yer ID'lerini ada göre bul. `locationSearchTerms` içeren bir çalıştırma, iş
ilanları yerine yerleri listeler.

```json
{ "locationSearchTerms": ["New York"], "maxItems": 20 }
```

Sorunsuz biten küçük çalıştırmalar `run-report` kaydını atlar & Apify
kullanımından tasarruf eder. Raporu her çalıştırmada yazmak için
`alwaysSaveRunRecords` seçeneğini aç.

## Çıktı

Her iş ilanı, `id`, `title`, `url`, `applyUrl`, `location`, maaş alanları &
`account` içeren 1 veri kümesi satırıdır. Her satırda ayrıca `description`,
`descriptionMarkdown`, `locationType`, `employmentType`, `seniorityLevel`,
`jobFunction`, `team`, `postedAt` & `company` bulunur. Yalnızca liste
alanlarıyla daha hızlı bir çalıştırma için `includeDetails` değerini `false`
yap. İş ilanı URL'lerinden gelen satırlar her zaman tam ilanı taşır. Eksik
kaynak alanları satırda yer almaz. Xquik'in X Jobs Scraper'ı hiçbir değer
uydurmaz.

Örnekler örnek değerler kullanır. Sonuçlar canlı veriyi yansıtır. Bir iş ilanı
satırı şöyle görünür.

```json
{
  "id": "1899202395210649861",
  "title": "Engineer",
  "url": "https://x.com/i/jobs/1899202395210649861",
  "applyUrl": "https://example.com/careers/engineer",
  "location": "United States",
  "locationType": "remote",
  "employmentType": "full_time",
  "seniorityLevel": "lead",
  "formattedSalary": "Starting at $225K",
  "salaryMin": 225000,
  "salaryCurrencyCode": "USD",
  "salaryInterval": "annually",
  "account": { "username": "example", "verified": true },
  "sourceTarget": "software engineer",
  "resultType": "job"
}
```

Her iş konumu, `locationId` alanının kabul ettiği `id` ile 1 satırdır.

```json
{
  "id": "1720462281920696805",
  "name": "New York City, NY",
  "sourceTarget": "New York",
  "resultType": "jobLocation"
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

## X iş ilanlarını kazımak ne kadar tutar?

Her Apify planında teslim edilen satır başına $0.00015 ödersin. Apify, platform
kullanımını ayrıca faturalandırır.

Daha fazla hacim için daha çok ön ödemeli kullanım içeren bir
[Apify planı seç](https://apify.com/pricing?fpr=xquik).

- Teslim edilen her veri satırı için tek bir ücret. Tanılamalar `diagnostics`
  içinde ücretsizdir.
- Başlatma, arama veya iş ilanı URL'si ücreti yok.
- Tam açıklamalar için ek ücret yok.
- Tekilleştirme faturalamadan önce çalışır.
- Apify'ın maksimum toplam ücret ayarları teslim edilen satırları sınırlar.

## Sınırlar & kurtarma

Xquik'in X Jobs Scraper'ı 1 çalıştırmada birçok aramayı & iş ilanı URL'sini
okur. Teslim edilen satırlar & ilerleme bir Apify yeniden başlatmasından sonra
korunur. Actor kendi başına süre sınırı eklemez. Ayarladığın her Apify zaman
aşımına uyar.

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
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper) sıralama, hacim,
  sorgu & WOEID ile konuma göre gerçek zamanlı gündemi kazır. Nerede neyin
  gündemde olduğunu takip ettiğinde kullan. Gündem başlığı başına $0.00015'ten
  başlar.
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

Hayır. Xquik'in X Jobs Scraper'ı X API anahtarı, giriş veya kimlik bilgisi
istemez.

### X iş ilanlarını kazımak yasal mı?

Xquik'in X Jobs Scraper'ı herkese açık X alanlarını çeker. Sonuçlarda kişisel
veri olabilir. Amacının yasal olduğundan emin ol & geçerli gizlilik kurallarına
uy. Emin değilsen yetkin bir hukukçuya danış.

### Çalıştırmam neden sonuç döndürmedi?

Önce çalıştırma durumunu oku. Boş bir çalıştırmanın durumu, arama terimlerini &
filtrelerini kontrol etmeni söyler. Ücretsiz `diagnostics` çıktısı, dikkat
gerektiren bir şey olduğunda görünür. Bu çıktıdaki `stopCauses` her neden için
izleyeceğin bir `nextAction` verir. Actor'ın tanımadığı bir filtre değeri,
çalıştırmayı herhangi bir ücretten önce durdurur & kullanacağın değerleri
söyler.

### API'yi, zamanlamaları & entegrasyonları kullanabilir miyim?

Evet. Apify API'yi veya Xquik REST API'yi kullan.
[API sekmesinde](https://apify.com/xquik/x-job-scraper/api) Python, JavaScript &
cURL örnekleri var. Apify
[zamanlamaları](https://docs.apify.com/platform/schedules), Xquik'in X Jobs
Scraper'ını bir cron takvimiyle çalıştırır. Ajanlar
[Apify MCP](https://docs.apify.com/platform/integrations/mcp) kullanır. Eski bir
derlemeye ihtiyacın yoksa `latest` kullan.

### Nereden yardım alırım?

Çalıştırma ID'siyle
[Issues sekmesinde](https://apify.com/xquik/x-job-scraper/issues) bir issue aç.
Anahtar-değer deposundaki ücretsiz tanılamalar dikkat gerektiren çalıştırmaları
açıklar. Hiç satır almayan bir çalıştırma, nedenini durum metninde söyler.

### Bana özel bir çözüm alabilir miyim?

Evet. İhtiyacını
[Issues sekmesinde](https://apify.com/xquik/x-job-scraper/issues) anlat. Xquik
ayrıca bir panel, bir REST API, bir MCP sunucusu & webhook'lar sunar. Xquik'in
web sitesini [Apify profilinde](https://apify.com/xquik) bul.
