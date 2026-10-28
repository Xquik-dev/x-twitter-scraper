[English](README.md) · [Español](README.es.md) · **Türkçe** ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer, Xquik MCP'yi kodlama ajanlarına bağlıyor](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Framer'ın Xquik scraper'larını Claude Code, Codex, Cursor & daha fazlasıyla nasıl kullandığını](https://youtu.be/4UOSpoOoC3Y?t=367)
6:07'den itibaren izle.

Xquik, en eksiksiz X verisini sunan, dünyanın en hızlı ve en ucuz X (Twitter)
scraper hizmetidir. Xquik'in X Quote Tweets Scraper'ı, herkese açık X
gönderilerini alıntılayan gönderileri X çerezi veya giriş olmadan toplar. Diğer
Apify Actor'larının çoğu, filtrelemeden veya tekilleştirmeden önce ücret alır.
Xquik yalnızca teslim edilen, benzersiz ve filtrene uyan sonuçlar için ücret
alır.

Gönderi URL'lerini veya gönderi ID'lerini yapıştır & 1 çalıştırmada X'in her
gönderi için sunduğu tüm alıntıları al. Her satırda alıntı, yazarının herkese
açık profilinin tamamı & alıntılanan gönderi bulunur. **Teslim edilen satır
başına $0.00015** ödersin & Apify platform kullanımını ayrıca faturalandırır.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## Neden X Quote Tweets Scraper kullanmalısın?

- **Kişi başına 1 satır.** `uniqueAuthors` seçeneğini aç & bir gönderiyi
  alıntılayan her kişiyi 1 kez gör. Aynı yazarın sonraki alıntıları ücretsizdir.
- **En yeni veya en popüler alıntılar.** Yeni alıntılar için `sort` alanını
  `latest`, X'in en üst sıraya koyduğu alıntılar için `top` yap.
- **11 alıntı filtresi.** Dile, tarihlere, medya türüne, onaylı yazarlara & 6
  minimum sayıya göre filtrele.
- **1 çalıştırmada birçok gönderi.** `x.com` veya `twitter.com` gönderi
  URL'lerini ya da gönderi ID'lerini yapıştır. Çalıştırmayı `maxItems` ile, her
  gönderiyi `maxItemsPerTarget` ile sınırla.
- **Dışa aktarıma hazır tablolar.** "Quote Tweets" her alıntıyı sayılarıyla
  listeler. "Quote Authors" her gönderiyi kimin alıntıladığını listeler. JSON,
  CSV, Excel, XML veya RSS olarak dışa aktar.

### Eksiksiz sonuçlar

- Her cevap, X'te bulunan en eksiksiz veriyi tutar.

### Doğru satırlar

- Dil filtreleri X'in etiketlediği her dilde çalışır.
- Dil, tarih & etkileşim filtreleri aldığın her satırda geçerlidir.
- Yeniden gönderiler orijinal metnin tamamını taşır.
- Satırdaki her ID birebir doğru kalır.
- Bahsetmeler, bağlantılar, hashtag'ler & vurgular metindeki yerleriyle eşleşir.
- Bilinmeyen bir sayı `unknownCounts` içinde listelenir, asla 0 gösterilmez.
- Onay rozetleri `x.com` üzerinde görünenle aynıdır.
- Satırlar yalnızca herkese açık veri tutar.
- Alıntı aramaları her gerçek alıntıyı döndürür, başka bir şey döndürmez.
- Reklamlar & tanıtılan içerikler satırlarına asla girmez.

### Güncel veri

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
- Küçük çalıştırmalar, maliyeti düşüren bir ipucuyla biter.

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
- Çıktı düz sütunlar & etkileşim toplamlarıyla tablolara hazırdır.
- Her çalıştırma neden bittiğini & yeniden denemen gerekip gerekmediğini söyler.

### Zengin veri

- Gönderi satırları Note Tweet metnini, düzenlemeleri, Topluluk Notlarını,
  erişim etiketlerini & yanıt kontrollerini taşır.
- Satırlar kaynak uygulamaları, medya sayılarını & profesyonel hesap verilerini
  taşır.
- Medya varyantlar, alternatif metin, boyutlar & kullanılabilirlik nedenleriyle
  gelir.

### Kalite kontrolleri

- X'in gösterdiği her alan ya sunulur, ya bilerek dışarıda bırakılır ya da
  olmadığı kanıtlanır.
- Xquik her okumayı X üzerinde canlı test eder.

## X Quote Tweets Scraper hangi verileri çıkarabilir?

- Alıntının tam metni, bağlantısı, dili & paylaşılma zamanı.
- Beğeniler, yanıtlar, yeniden gönderiler, alıntılar, görüntülenmeler & yer
  işaretleri.
- Ad, biyografi, takipçiler, onay durumu & daha fazlasıyla yazarın herkese açık
  profilinin tamamı.
- Bağlantılarıyla birlikte fotoğraflar, videolar & GIF'ler.
- Metinde geçen hashtag'ler, bahsetmeler & bağlantılar.
- Alıntılanan gönderinin kendisi, aynı biçimde.
- `sourceTarget`, satırın alıntıladığı girdi gönderisi.
- `position`, satırın çalıştırmadaki sırası & `scrapedAt`, satırın teslim
  zamanı.

## Alıntı tweet nasıl kazınır

Apify'da yeni misin? Önce
[ücretsiz bir hesap oluştur](https://console.apify.com/sign-up?fpr=xquik).
Ücretsiz plan kredi kartı istemez & her ay harcaman için $5 verir. Gönderi
başına $0.00015 fiyatla $5, platform kullanımı hariç 33.000 gönderiye kadar
yeter. Sonra buraya dön & Try for free düğmesine bas.

1. Apify Console'da Xquik'in X Quote Tweets Scraper'ını aç.
2. Gönderi URL'lerini `startUrls` alanına ya da gönderi ID'lerini `tweetIds`
   alanına yapıştır.
3. Teslim edilen satırları sınırlamak için `maxItems` ayarla, sonra Start
   düğmesine tıkla.
4. Veri kümesini JSON, CSV veya Excel olarak indir ya da Apify API'yi kullan.

Hiçbir adımda X çerezi, giriş bilgisi veya API anahtarı girmezsin. Çalıştırmalar
arasında sayfa imleci taşımazsın.

## Girdi

`startUrls` her gönderi URL'sini düz metin olarak ya da `{ "url": "..." }`
nesnesi olarak alır. `tweetIds` gönderi ID'lerini alır & gönderi URL'si de orada
çalışır.

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

Sıralama, filtreler & sınırlar gönderilerin yanına gelir.

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

- `sort` değeri, önce en yeni alıntılar için `latest` ya da X'in en üst sıraya
  koyduğu alıntılar için `top` olur.
- `includeReplies`, gönderiyi alıntılayan yanıtları X'in Alıntılar görünümünün
  listelediği gibi tutar. Sen kapatmadıkça açıktır.
- `uniqueAuthors`, her yazarın çalıştırmadaki ilk alıntısını tutar. Böylece veri
  kümesinde alıntı başına değil, yazar başına 1 satır bulunur. Teslim edilen
  satırlar için ödersin.
- `maxItems` tüm çalıştırmayı & `maxItemsPerTarget` her gönderiyi sınırlar.
- Filtreler `language`, `sinceDate`, `untilDate`, `mediaType`, `minLikes`,
  `minReplies`, `minRetweets`, `minQuotes`, `minViews`, `minBookmarks` &
  `verifiedOnly` alanlarıdır.

Girdinin 2 kez belirttiği bir gönderi 1 kez okunur. `tweetUrls`, `tweetId`,
`tweets` & `tweet_id`, gönderiler için başka adlar olarak çalışır. Sorunsuz
biten küçük çalıştırmalar `run-report` kaydını atlar & Apify kullanımından
tasarruf eder. Kaydı her çalıştırmada yazmak için `alwaysSaveRunRecords`
seçeneğini aç.

## Çıktı

Her alıntı, `id`, `url`, `text`, `createdAt`, `lang`, `likeCount`, `replyCount`,
`retweetCount`, `quoteCount`, `viewCount`, `bookmarkCount`, `media`, `entities`,
`author`, `quotedTweetId` & `quoted_tweet` alanlarını içeren 1 veri kümesi
satırıdır. Actor `sourceTarget`, `position`, `scrapedAt` & `resultType`
alanlarını ekler. Eksik kaynak alanları satırda yer almaz. Xquik'in X Quote
Tweets Scraper'ı hiçbir değer uydurmaz.

Örneklerdeki değerler yalnızca örnektir. Sonuçlar canlı veriden gelir. Bir satır
şöyle görünür.

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

`position`, teslim edilen satırları filtrelerden & tekilleştirmeden sonra 1'den
başlayarak sayar. Veri kümesinin 2 tablo görünümü var. "Quote Tweets" her
alıntıyı sayılarıyla gösterir. "Quote Authors" her gönderiyi kimin
alıntıladığını, yazarın profil alanları sütunlar halinde olacak şekilde
gösterir.

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

Hesaplanan bir sütunu eklemek için adını `fields` veya `renameFields` içine yaz.

| Sütun               | Formül                                                                             |
| ------------------- | ---------------------------------------------------------------------------------- |
| `totalEngagement`   | `likeCount` + `replyCount` + `retweetCount` + `quoteCount`. Eksik bir sayı 0 ekler |
| `engagementRate`    | `totalEngagement` × 100 ÷ yazarın `followers` değeri, 4 ondalık basamakla          |
| `engagementPerView` | `totalEngagement` × 100 ÷ `viewCount`, 4 ondalık basamakla                         |

Bu sayıları olmayan bir satırda `totalEngagement` değeri `null` olur. Böleni
eksik veya 0 olan bir oran `null` olur.

## X ne sunar

2 sınır X'ten gelir & Xquik'in X Quote Tweets Scraper'ı bunları açıkça söyler.

- Çok alıntı alan bir gönderide X araması en eski alıntılardan önce durabilir.
  Çalıştırma, X'in sunduğu her alıntıyı okur & orada durur.
- `top`, Xquik'in değil X'in sıralamasıdır. Beğeni sayısına göre bir sıralama
  değildir. Sonraki bir satırın beğenisi önceki bir satırınkinden fazla
  olabilir.

## Alıntı tweet kazımak ne kadar tutar?

Her Apify planında teslim edilen satır başına $0.00015 ödersin. Apify, platform
kullanımını ayrıca faturalandırır.

Daha fazla hacim için daha çok ön ödemeli kullanım içeren bir
[Apify planı seç](https://apify.com/pricing?fpr=xquik).

- Teslim edilen her veri satırı için tek bir ücret. Tanılamalar `diagnostics`
  içinde ücretsizdir.
- Başlatma ücreti yok.
- X'te bulunmayan bir gönderi ne satır ne de ücret ekler.
- Filtreler & `uniqueAuthors` faturalamadan önce çalışır, bu yüzden elenen bir
  alıntı ücretsizdir.
- Tekilleştirme faturalamadan önce çalışır.
- Apify'ın maksimum toplam ücret ayarları teslim edilen satırları sınırlar.

## Sınırlar & kurtarma

Xquik'in X Quote Tweets Scraper'ı 1 çalıştırmada birçok gönderiyi okur. Teslim
edilen satırlar & ilerleme bir Apify yeniden başlatmasından sonra korunur. Actor
kendi başına süre sınırı eklemez. Ayarladığın her Apify zaman aşımına uyar.

Çalıştırma durumu, X'te karşılığı bulunmayan gönderileri adlarıyla belirtir &
URL'yi veya ID'yi kontrol etmeni söyler. Yarıda kesilen veri çekme ücretsiz bir
`partial` tanılaması yazar. Elde edilen sonuçlar olduğu gibi kalır. Yeniden
denemeden önce `availableResults`, `failedTargets`, `retryable` & `nextAction`
alanlarını oku. Actor'ın başarıyla bitmesi teslimatı doğrular, tüm verinin
çekildiğini değil.

Çalıştırma durumu, erken durmanın her nedenini söyler. `stopCauses` her nedeni
kendi `message`, `retryable` & `nextAction` alanlarıyla listeler. Nedenlerden
biri yeniden denenebiliyorsa çalıştırma da `retryable` olur.

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

Hayır. Xquik'in X Quote Tweets Scraper'ı X çerezi, API anahtarı, giriş veya
kimlik bilgisi istemez. Her okuma Xquik'in altyapısında çalışır.

### 1 çalıştırmada birçok gönderinin alıntılarını kazıyabilir miyim?

Evet. İhtiyacın kadar gönderi URL'si veya gönderi ID'si yapıştır. Her satırın
`sourceTarget` alanı, satırın hangi gönderiyi alıntıladığını söyler.

### 1 çalıştırma kaç alıntı döndürebilir?

Bir çalıştırma 100.000 satır & daha fazlasını döndürebilir. Tam bir dışa aktarım
için `maxItems` değerini formun başladığı 1.000'in üzerine çıkar.

### Çok alıntı alan bir gönderi neden sayacının gösterdiğinden az alıntı döndürür?

Çok alıntı alan bir gönderide X araması en eski alıntılardan önce durabilir.
Çalıştırma, X'in sunduğu her alıntıyı teslim eder. Sayaç, gizli veya kaldırılmış
hesapların alıntılarını da içerir.

### Bir gönderiyi alıntılayan her kişi için nasıl 1 satır alırım?

`uniqueAuthors` seçeneğini aç. Çalıştırma her yazarın ilk alıntısını tutar &
sonrakileri ücretlendirmeden atlar.

### Alıntı tweet kazımak yasal mı?

Xquik'in X Quote Tweets Scraper'ı herkese açık X gönderilerini çeker. Sonuçlarda
kişisel veri olabilir. Amacının yasal olduğundan emin ol & geçerli gizlilik
kurallarına uy. Emin değilsen yetkin bir hukukçuya danış.

### Çalıştırmam neden sonuç döndürmedi?

Önce çalıştırma durumunu oku. Boş bir çalıştırmanın durumu, gönderinin X'te
karşılığı mı olmadığını yoksa filtrelerinle eşleşen alıntısı mı olmadığını
söyler. Ücretsiz `diagnostics` çıktısı, dikkat gerektiren bir şey olduğunda
görünür. Bu çıktıdaki `stopCauses` her neden için izleyeceğin bir `nextAction`
verir.

### API'yi, zamanlamaları & entegrasyonları kullanabilir miyim?

Evet. Apify API'yi veya Xquik REST API'yi kullan.
[API sekmesinde](https://apify.com/xquik/x-quote-tweets-scraper/api) Python,
JavaScript & cURL örnekleri var. Apify
[zamanlamaları](https://docs.apify.com/platform/schedules), Xquik'in X Quote
Tweets Scraper'ını bir cron takvimiyle çalıştırır. Ajanlar
[Apify MCP](https://docs.apify.com/platform/integrations/mcp) kullanır. Eski bir
derlemeye ihtiyacın yoksa `latest` kullan.

### Nereden yardım alırım?

Çalıştırma ID'siyle
[Issues sekmesinde](https://apify.com/xquik/x-quote-tweets-scraper/issues) bir
issue aç. Anahtar-değer deposundaki ücretsiz tanılamalar dikkat gerektiren
çalıştırmaları açıklar. Hiç satır almayan bir çalıştırma, nedenini durum
metninde söyler.

### Bana özel bir çözüm alabilir miyim?

Evet. İhtiyacını
[Issues sekmesinde](https://apify.com/xquik/x-quote-tweets-scraper/issues)
anlat. Xquik ayrıca bir panel, bir REST API, bir MCP sunucusu & webhook'lar
sunar. Xquik'in web sitesini [Apify profilinde](https://apify.com/xquik) bul.
