[English](README.md) · [Español](README.es.md) · **Türkçe** ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer, Xquik MCP'yi kodlama ajanlarına bağlıyor](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Framer'ın Xquik scraper'larını Claude Code, Codex, Cursor & daha fazlasıyla nasıl kullandığını](https://youtu.be/4UOSpoOoC3Y?t=367)
6:07'den itibaren izle.

Xquik, en eksiksiz X verisini sunan, dünyanın en hızlı ve en ucuz X (Twitter)
scraper hizmetidir. Xquik'in X (Twitter) Post Tracker Actor'ı, seçtiğin
gönderilerin herkese açık sayılarını kaydeder. X çerezi veya giriş istemez.
Sonra yeniden çalıştır, her satır neyin değiştiğini gösterir. Diğer Apify
Actor'larının çoğu, filtrelemeden veya tekilleştirmeden önce ücret alır. Xquik
yalnızca teslim edilen ve benzersiz sonuçlar için ücret alır.

Gönderi URL'lerini veya Tweet ID'lerini yapıştır. Her çalıştırma, gönderi başına
1 anlık görüntü satırı kaydeder. Bir satırda o anki görüntülenme, beğeni,
yeniden gönderi, yanıt, alıntı ve yer işareti sayıları bulunur. Bir önceki anlık
görüntüden ve ilk anlık görüntüden bu yana olan değişim de satırdadır. **Teslim
edilen anlık görüntü başına $0.00015** ödersin. Apify, platform kullanımını
ayrıca faturalandırır.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## Neden X (Twitter) Post Tracker kullanmalısın?

- **Her satırda büyüme.** Her anlık görüntüde son ve ilk çalıştırmadan bu yana
  olan değişim var.
- **Veritabanı olmadan geçmiş.** Önceki bir çalıştırmanın veri kümesini ver. İlk
  anlık görüntü bir çalıştırmadan diğerine taşınır.
- **Gönderiyi istediğin biçimde yapıştır.** Gönderi URL'lerini ve Tweet
  ID'lerini 1 listede karıştırabilirsin.
- **Tabloya hazır dışa aktarımlar.** Sütunları `fields` ve `flatten` ile
  düzenle. JSON, CSV, Excel, XML veya RSS olarak dışa aktar.

## Neler alırsın

### Eksiksiz sonuçlar

- Her sonuç, X'te onun için bulunan en eksiksiz veriyi içerir.

### Doğru satırlar

- Bir gönderi ancak gerçekten ortadan kalktıysa eksik sayılır.
- Bir satırdaki her ID olduğu gibi kalır.
- Satırlarda yalnızca herkese açık veri bulunur.

### Güncel veri

- X bir değişiklik yayınladığında da okumalar çalışmaya devam eder.

### Hız

- X'in yavaş bir cevabı isteğini bekletmez.
- Actor'lar birçok kullanıcı adını, gönderiyi ve sorguyu aynı anda okur.
- Okumalar, satırları gelir gelmez biter.
- Takılan Actor çağrıları kendi kendine toparlanır.

### Adil faturalama

- Hatalı girdi hiçbir okumadan önce reddedildiği için sana hiçbir şeye mal
  olmaz.
- Actor'lar yalnızca teslim edilen, benzersiz ve filtrene uyan satırlar için
  ücret alır.
- Yeniden başlatılan bir çalıştırma asla 2 kez ücret almaz.
- Harcama sınırın bir satır sınırına dönüşür, tanılamalar yine de yazılır.
- Küçük çalıştırmalar, maliyeti düşüren bir ipucuyla biter.

### Güvenilirlik

- X'teki tek seferlik bir hata isteğini başarısız yapmaz.
- Süre dolduğunda o ana kadar bulunan satırlar tanılamalarla birlikte gelir.
- Actor'lar kısa Xquik kesintilerini atlatır.
- Actor çalıştırmaları yeniden başlatmaları tekrar olmadan atlatır.
- Tek bir hatalı satır bütün grubu batırmaz.
- Durdurulan çalıştırmalar satırlarını ve raporlarını korur.
- Başlayamayan bir çalıştırma bile nedenini açıklar.
- X tarafındaki sorunlar okumalarına ulaşmadan düzeltilir.
- Destek ekibi bir isteğin veya çalıştırmanın tam olarak ne döndürdüğünü
  görebilir.

### Ajanlar için yapıldı

- Actor'lar başka Actor'lar için yazılmış girdileri de kabul eder.
- Her çalıştırma neden bittiğini ve yeniden denemen gerekip gerekmediğini
  söyler.

### Zengin veri

- Her anlık görüntü satırı, her sayının önceki bir çalıştırmadan bu yana değişimini içerir.

### Kalite kontrolleri

- X'in gösterdiği her alan ya sunulur, ya bilerek dışarıda bırakılır ya da
  olmadığı kanıtlanır.
- Her okuma her saat canlı olarak test edilir.

## X (Twitter) Post Tracker hangi verileri çıkarabilir?

- Her gönderinin görüntülenme, beğeni, yeniden gönderi, yanıt, alıntı ve yer
  işareti sayıları.
- Her anlık görüntünün zamanı, `capturedAt` alanında.
- Her gönderinin ilk anlık görüntüsü, zamanı ve sayılarıyla birlikte.
- Önceki çalıştırmanın veri kümesinden gelen bir önceki anlık görüntü.
- Her sayının bir önceki anlık görüntüden bu yana değişimi.
- Her sayının ilk anlık görüntüden bu yana değişimi.
- Gönderinin metni, tarihi, bağlantısı ve yazarı.
- 1 çalıştırmada girdi sırasıyla teslim edilen birçok gönderi.
- Apify veri kümeleri üzerinden JSON, CSV, Excel, XML ve RSS dışa aktarımı.

## X gönderi metrikleri zaman içinde nasıl takip edilir

Apify'da yeni misin? Önce
[ücretsiz bir hesap oluştur](https://console.apify.com/sign-up?fpr=xquik).
Ücretsiz plan kredi kartı istemez ve her ay harcaman için $5 verir. Anlık
görüntü başına $0.00015 ile $5, platform kullanımından önce 33.000 anlık
görüntüye kadar yeter. Sonra buraya dön ve Try for free'ye bas.

1. Apify Console'da Xquik'in X (Twitter) Post Tracker Actor'ını aç.
2. Gönderi URL'lerini veya Tweet ID'lerini `tweetIds` alanına yapıştır.
3. İlk çalıştırmada `previousDatasetId` alanını boş bırak, sonra Start'a tıkla.
4. Sonraki çalıştırmada `previousDatasetId` alanında ilk çalıştırmanın veri
   kümesini seç.
5. Veri kümesini JSON, CSV veya Excel olarak indir ya da Apify API'yi kullan.

Hiçbir adımda X çerezi, giriş bilgisi veya API anahtarı girmezsin.

## Girdi

`tweetIds`, Tweet ID'lerini ve gönderi URL'lerini istediğin karışımla alır.

```json
{
  "tweetIds": [
    "2102882545427714266",
    "https://x.com/OpenAI/status/2082577277246972300",
    "20"
  ],
  "maxItems": 1000
}
```

`startUrls` aynı gönderi URL'lerini alır. Her birini düz metin olarak ya da
`{ "url": "..." }` nesnesi olarak ver.

`previousDatasetId`, bu Actor'ın önceki bir çalıştırmasının veri kümesini
belirtir. Formda onu kendi veri kümelerinin arasından seçebilirsin. Actor bu
veri kümesini yalnızca okur. İlk çalıştırmada boş bırak.

```json
{
  "tweetIds": ["2102882545427714266", "20"],
  "previousDatasetId": "<dataset ID of an earlier run>"
}
```

Girdide 2 kez geçen bir gönderi 1 satır alır. `maxItems`, girdideki ilk
gönderileri tutar. Sorunsuz biten küçük çalıştırmalar `run-report` yazmaz ve
Apify kullanımından tasarruf eder. Her çalıştırmada yazılması için
`alwaysSaveRunRecords` seçeneğini aç.

## Zamanlamayla çalıştır

Apify [zamanlamaları](https://docs.apify.com/platform/schedules) Actor'ı bir
cron takvimiyle, örneğin her saat başlatır.

1. Actor'ı gönderilerinle ve `previousDatasetId` olmadan 1 kez çalıştır.
2. Apify Console'da Actor için bir zamanlama oluştur.
3. Zamanlamaya aynı `tweetIds` girdisini ver.
4. `previousDatasetId` alanına ilk çalıştırmanın veri kümesini koy.

Böylece her zamanlanmış çalıştırma kendi sayılarını o veri kümesiyle
karşılaştırır. Her çalıştırmayı bir öncekiyle karşılaştırmak istersen
çalıştırmaları Apify API ile başlat. Son çalıştırmanın `defaultDatasetId`
değerini `previousDatasetId` olarak ver. İlk anlık görüntü yine taşınır, bu
yüzden `changeSinceFirst` 1. günden saymaya devam eder. Son çalıştırmada olmayan
bir gönderi, sonrakinde yeni bir `firstSnapshot` başlatır.

Bir çalıştırma hiç anlık görüntü kaydetmezse, ondan önceki çalıştırmanın veri kümesini ver.

## Çıktı

Her gönderi, çalıştırma başına 1 veri kümesi satırıdır. Satır `postId`, `url`,
`text`, `createdAt` ve `author` ile başlar. Sonra `capturedAt` ve 6 sayı gelir,
yani `viewCount`, `likeCount`, `retweetCount`, `replyCount`, `quoteCount` ve
`bookmarkCount`. Ardından `firstSnapshot`, `previousSnapshot`,
`changeSincePrevious` ve `changeSinceFirst` gelir. 0 olan bir sayı, X'in onu
bildirmediği anlamına gelebilir.

Örneklerde örnek değerler var. Sonuçlar canlı veriyi yansıtır. İkinci bir
çalıştırmanın satırı şöyle görünür.

```json
{
  "postId": "2102882545427714266",
  "url": "https://x.com/NASA/status/2102882545427714266",
  "text": "Welcome to the Artemis Accords, Croatia",
  "createdAt": "Wed Sep 23 22:07:23 +0000 2026",
  "author": { "id": "11348282", "username": "NASA", "name": "NASA" },
  "capturedAt": "2026-10-28T09:00:00.000Z",
  "viewCount": 1291231,
  "likeCount": 9043,
  "retweetCount": 772,
  "replyCount": 207,
  "quoteCount": 100,
  "bookmarkCount": 661,
  "firstSnapshot": {
    "capturedAt": "2026-10-25T09:00:00.000Z",
    "viewCount": 500000,
    "likeCount": 5000,
    "retweetCount": 500,
    "replyCount": 150,
    "quoteCount": 50,
    "bookmarkCount": 400
  },
  "previousSnapshot": {
    "capturedAt": "2026-10-27T09:00:00.000Z",
    "viewCount": 1200000,
    "likeCount": 9000,
    "retweetCount": 770,
    "replyCount": 205,
    "quoteCount": 99,
    "bookmarkCount": 640
  },
  "changeSincePrevious": {
    "viewCount": 91231,
    "likeCount": 43,
    "retweetCount": 2,
    "replyCount": 2,
    "quoteCount": 1,
    "bookmarkCount": 21
  },
  "changeSinceFirst": {
    "viewCount": 791231,
    "likeCount": 4043,
    "retweetCount": 272,
    "replyCount": 57,
    "quoteCount": 50,
    "bookmarkCount": 261
  },
  "resultType": "snapshot",
  "sourceTarget": "2102882545427714266"
}
```

Bir satır 3 durumu birbirinden ayırır.

| Satırda ne var                          | Anlamı                                           |
| --------------------------------------- | ------------------------------------------------ |
| `previousSnapshot: null`                | Önceki veri kümesinde bu gönderi için satır yok. |
| Sayılarıyla birlikte `previousSnapshot` | Satır o anlık görüntüyle karşılaştırılır.        |
| Bir değişim alanında `null` bir sayı    | Önceki satırda o sayı yok.                       |

İlk çalıştırmada `firstSnapshot`, satırın kendi zamanını ve sayılarını içerir.
Sonraki bir çalıştırmaya kadar 2 değişim alanı da `null` kalır.

## Çıktı sütunları

8 girdi, çalıştırma her satırı okuduktan sonra ona şekil verir. Kod
çalıştırmazlar ve fiyatı değiştirmezler.

| Alan                | Ne yapar                                                                              |
| ------------------- | ------------------------------------------------------------------------------------- |
| `fields`            | Yalnızca bu alanları, yazdığın sırayla ve yazdığın gibi tutar                         |
| `omitFields`        | Bu alanları çıkarır, gerisini tutar                                                   |
| `renameFields`      | Bir alanı yeni adlı bir sütuna taşır                                                  |
| `flatten`           | Her iç içe nesneyi en üst düzey sütunlara çevirir                                     |
| `fillMissingFields` | Bir satırda eksik olan, tutulan bir alanı `null` ile doldurur. Varsayılan olarak açık |
| `joinFields`        | Bu listelerin her birini 1 metin değerine çevirir                                     |
| `joinSeparator`     | Birleştirilen öğelerin arasındaki metin. Varsayılanı bir virgül ve bir boşluk         |
| `constantFields`    | Her satırda aynı metni taşıyan bir sütun ekler                                        |

- Bir nesnenin içindeki alan için nokta kullan, örneğin
  `changeSinceFirst.viewCount`.
- Her sayı için 1 sütun almak istersen `changeSincePrevious` alanını düzleştir.
- Yanlış bir alan adı, çalıştırmayı okumadan önce durdurur ve ücret almaz.
- Çalıştırma, başka bir Actor için yazılmış bir map fonksiyonunu veya jq
  filtresini yok sayar.

## X gönderilerini takip etmek ne kadar tutar?

Her Apify planında teslim edilen anlık görüntü başına $0.00015 ödersin. Apify,
platform kullanımını ayrıca faturalandırır.

Daha fazla hacim için daha fazla ön ödemeli kullanım sunan bir
[Apify planı seç](https://apify.com/pricing?fpr=xquik).

- Teslim edilen her anlık görüntü satırı için 1 ücret. `diagnostics` içindeki
  tanılamalar ücretsizdir.
- Başlangıç ücreti yok, önceki veri kümesini okumak için de ücret yok.
- Çalıştırma, faturalamadan önce yinelenen gönderileri çıkarır.
- X'te olmayan bir gönderi ne satır ne de ücret ekler.
- Çalıştırmanın okuyamadığı bir veri kümesi çalıştırmayı durdurur ve ücret
  almaz.
- Apify'daki maksimum toplam ücret ayarları teslim edilen satırları sınırlar.

## Sınırlar & kurtarma

Xquik'in X (Twitter) Post Tracker Actor'ı 1 çalıştırmada birçok gönderi okur.
Apify çalıştırmayı yeniden başlatsa da teslim edilen satırlar ve ilerleme
korunur. Actor kendine ait bir süre sınırı eklemez. Apify'da belirlediğin her
zaman aşımına uyar.

Çalıştırma durumu, X'te karşılığı olmayan gönderileri sayar. Önceki bir veri
kümesi en fazla 100.000 satır içerebilir. Çalıştırmanın okuyamadığı bir veri
kümesi, hiçbir gönderi okunmadan çalıştırmayı durdurur. Durum o zaman önceki bir
çalıştırmanın veri kümesini seçmeni söyler. Yarıda kalan çalıştırmalar ücretsiz
bir `partial` tanılaması yazar. Yeniden denemeden önce `nextAction` alanını oku.

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

### X çerezi, API anahtarı veya giriş gerekir mi?

Hayır. Xquik'in X (Twitter) Post Tracker Actor'ı X çerezi, API anahtarı, giriş
ya da kimlik bilgisi istemez.

### `previousDatasetId` alanında hangi veri kümesini seçeyim?

Bu Actor'ın önceki bir çalıştırmasının veri kümesini seç. O veri kümesinde her
gönderinin en yeni satırı `previousSnapshot` olur. Actor, başka Actor'ların
satırlarını ve tanılamaları atlar.

### İlk anlık görüntü birçok çalıştırma boyunca korunur mu?

Evet. Her satır `firstSnapshot` taşır. Her çalıştırmayı bir öncekine bağla, ilk
anlık görüntü hep aynı kalır.

### Birinin sildiği bir gönderiyi takip edebilir miyim?

Hayır. X'te olmayan bir gönderi ne satır ne de ücret ekler. Çalıştırma durumu
onu sayar.

### X gönderilerini takip etmek yasal mı?

Xquik'in X (Twitter) Post Tracker Actor'ı herkese açık X alanlarını çeker.
Sonuçlarda kişisel veri olabilir. Amacının yasal olduğundan emin ol ve geçerli
gizlilik kurallarına uy. Emin değilsen yetkin bir hukukçuya danış.

### API'yi, zamanlamaları & entegrasyonları kullanabilir miyim?

Evet. Apify API'yi veya Xquik REST API'yi kullan.
[API sekmesinde](https://apify.com/xquik/x-twitter-post-tracker/api) Python,
JavaScript ve cURL örnekleri var. Apify
[zamanlamaları](https://docs.apify.com/platform/schedules), Xquik'in X Post
Tracker Actor'ını bir cron takvimiyle çalıştırır. Ajanlar
[Apify MCP](https://docs.apify.com/platform/integrations/mcp) kullanır. Eski bir
derlemeye ihtiyacın yoksa `latest` derlemesini kullan.

### Nereden yardım alırım?

[Issues sekmesinde](https://apify.com/xquik/x-twitter-post-tracker/issues)
çalıştırma ID'siyle bir issue aç. Anahtar-değer deposundaki ücretsiz tanılamalar
ilgilenmen gereken çalıştırmaları açıklar.

### Bana özel bir çözüm alabilir miyim?

Evet. Neye ihtiyacın olduğunu
[Issues sekmesinde](https://apify.com/xquik/x-twitter-post-tracker/issues)
anlat. Xquik ayrıca bir panel, bir REST API, bir MCP sunucusu ve webhook'lar
sunar. Xquik'in web sitesini [Apify profilinde](https://apify.com/xquik)
bulabilirsin.
