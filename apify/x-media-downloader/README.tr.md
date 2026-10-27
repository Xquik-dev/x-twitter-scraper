[English](README.md) · [Español](README.es.md) · **Türkçe** ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer, Xquik MCP'yi kodlama ajanlarına bağlıyor](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Framer'ın Xquik scraper'larını Claude Code, Codex, Cursor & daha fazlasıyla nasıl kullandığını](https://youtu.be/4UOSpoOoC3Y?t=367)
6:07'den itibaren izle.

Xquik, en eksiksiz X verisini sunan, dünyanın en hızlı ve en ucuz X (Twitter)
scraper hizmetidir. Xquik'in X Media Downloader'ı gönderilerden & profillerden
fotoğrafları, videoları & GIF'leri çıkarır veya depolar. Diğer Apify
Actor'larının çoğu, filtrelemeden veya tekilleştirmeden önce ücret alır. Xquik
yalnızca teslim edilen, benzersiz ve filtrene uyan sonuçlar için ücret alır.

Twitter medyasını indir ya da gönderilerden & profillerin Medya sekmelerinden
doğrudan URL'leri çıkar. **Teslim edilen satır başına $0.00015** ödersin & Apify
platform kullanımını ayrıca faturalandırır. X API anahtarına veya girişe
ihtiyacın yok.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## Neden X Media Downloader kullanmalısın?

- **Her kaynaktan medya.** `sources` içinde gönderileri, profil Medya
  sekmelerini, yanıtları, alıntıları & gönderi dizilerini seç.
- **Dosyalar senin için saklanır.** Dosyaları kaydetmek & `storedMediaUrl`
  bağlantılarını almak için `downloadMedia` seçeneğini aç.
- **Yalnızca istediğin medya.** Profil medyasını türe, tarihe, dile,
  görüntülenmeye, beğeniye, yanıta veya yeniden gönderiye göre filtrele.
- **Tüm altyazılar 1 satırda.** Videolu bir gönderinin bütün altyazı izlerini
  almak için `includeSubtitles` seçeneğini aç.
- **Kullanıma hazır dışa aktarımlar.** Alanları tut, yeniden adlandır, düzleştir
  veya birleştir. Sonra JSON, CSV, Excel, XML veya RSS olarak dışa aktar.

### Eksiksiz sonuçlar

- Her cevap, X'te bulunan en eksiksiz veriyi tutar.

### Doğru satırlar

- Satırlar yalnızca herkese açık veri tutar.

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
- Her çalıştırma neden bittiğini & yeniden denemen gerekip gerekmediğini söyler.

### Zengin veri

- Medya varyantlar, alternatif metin, boyutlar & kullanılabilirlik nedenleriyle
  gelir.
- Video altyazıları zaman damgalı satırlarla gelir.

### Kalite kontrolleri

- X'in gösterdiği her alan ya sunulur, ya bilerek dışarıda bırakılır ya da
  olmadığı kanıtlanır.
- Xquik her okumayı X üzerinde canlı test eder.

## X Media Downloader hangi verileri çıkarabilir?

- Fotoğraflar, GIF'ler, MP4 kaliteleri & HLS oynatma listeleri.
- Videolu gönderilerin altyazıları, zaman damgalı satırlar & tam metinle
  birlikte.
- Metadata & doğrudan URL'ler.

## X medyası nasıl indirilir

Apify'da yeni misin? Önce
[ücretsiz bir hesap oluştur](https://console.apify.com/sign-up?fpr=xquik).
Ücretsiz plan kredi kartı istemez & her ay harcaman için $5 verir. Medya satırı
başına $0.00015 fiyatla $5, platform kullanımı hariç 33.000 medya satırına kadar
yeter. Sonra buraya dön & Try for free düğmesine bas.

1. Apify Console'da Xquik'in X Media Downloader'ını aç.
2. Kullanıcı adlarını `twitterHandles` alanına ya da gönderi URL'lerini
   `startUrls` alanına ekle.
3. `sources` seç & dosyaları depolamak için `downloadMedia` seçeneğini aç.
4. Teslim edilen satırları sınırlamak için `maxItems` ayarla, sonra Start
   düğmesine tıkla.
5. Veri kümesini JSON, CSV veya Excel olarak indir ya da Apify API'yi kullan.

`startUrls` & `profileUrls` her URL'yi düz metin olarak ya da `{ "url": "..." }`
nesnesi olarak alır.

```json
{ "profileUrls": ["https://x.com/nasa", { "url": "https://x.com/OpenAI" }] }
```

`profileUrls` & `tweetIds` de hedef olarak çalışır.

## Girdi

```json
{
  "twitterHandles": ["OpenAI"],
  "sources": ["profiles"],
  "downloadMedia": true,
  "maxItems": 10000
}
```

Tek bir hedef yeterli. Dosyaları depolamak için `downloadMedia` seçeneğini aç.
80 MB'tan büyük dosyalar yalnızca URL olarak kalır.

`tweetIds` veya `startUrls` içindeki gönderilerin altyazılarını almak için
`includeSubtitles` seçeneğini aç. Videosunda altyazı olan her gönderi, tüm
altyazı parçalarıyla 1 satır ekler. Videosu veya altyazısı olmayan bir gönderi
ne satır ne de ücret ekler.

```json
{ "tweetIds": ["2104593672624886205"], "includeSubtitles": true }
```

Sorunsuz biten küçük çalıştırmalar `run-report` kaydını atlar & Apify
kullanımından tasarruf eder. Raporu her çalıştırmada yazmak için
`alwaysSaveRunRecords` seçeneğini aç.

## Çıktı

Satırlarda kullanılabilirlik, metadata & eylem URL'leri bulunur. Depolanan
satırlar ayrıca `storedMediaUrl` & `downloadStatus: "stored"` ekler. **Stored
Media Files** depolanan kayıtları açar.

Örnekler örnek değerler kullanır. Sonuçlar canlı veriyi yansıtır. Bir fotoğraf
satırı şöyle görünür.

```json
{
  "type": "photo",
  "width": 1200,
  "height": 675,
  "altText": "Sample alt text",
  "sourceTarget": "OpenAI"
}
```

Bir altyazı satırında `resultType: "subtitles"` & `tracks` içinde altyazı
parçaları bulunur.

```json
{
  "resultType": "subtitles",
  "tweetId": "2104593672624886205",
  "tracks": [
    {
      "language": "en",
      "name": "Sample captions.srt",
      "autoGenerated": false,
      "url": "https://video.twimg.com/subtitles/sample.vtt",
      "text": "Sample caption text.",
      "cues": [{ "startMs": 0, "endMs": 3370, "text": "Sample caption text." }]
    }
  ]
}
```

X sesi kendisi yazıya döktüyse `autoGenerated` değeri `true` olur. `url`,
parçanın WebVTT dosyasına bağlantı verir. Medya filtreleri altyazı satırlarını
çıkarmaz. `downloadMedia` açıkken bir altyazı satırında
`downloadStatus: "url-only"` bulunur.

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

## X medyasını indirmek ne kadar tutar?

Her Apify planında teslim edilen satır başına $0.00015 ödersin. Apify, platform
kullanımını ayrıca faturalandırır.

Daha fazla hacim için daha çok ön ödemeli kullanım içeren bir
[Apify planı seç](https://apify.com/pricing?fpr=xquik).

- Teslim edilen her veri satırı için tek bir ücret. Tanılamalar `diagnostics`
  içinde ücretsizdir.
- Bir altyazı satırı, kaç parça içerirse içersin 1 satırdır.
- Başlatma, URL, dosya veya kalite ücreti yok.
- Tekilleştirme faturalamadan önce çalışır.

## Sınırlar & kurtarma

Veri çekme yarıda kesilirse Actor ücretsiz bir `partial` tanılaması yazar. Elde
edilen sonuçlar olduğu gibi kalır. Yeniden denemeden önce `availableResults`,
`failedTargets`, `retryable` & `nextAction` alanlarını oku. Actor'ın başarıyla
bitmesi teslimatı doğrular, tüm verinin çekildiğini değil.

Çalıştırma durumu, erken durmanın her nedenini söyler. `stopCauses` her nedeni
kendi `message`, `retryable` & `nextAction` alanlarıyla listeler. Nedenler
`target_not_found`, `target_suspended`, `target_failed`,
`pagination_safety_limit`, `reply_reach` & `deadline_reached` olabilir.
`target_suspended`, X'in askıya aldığı hesapları belirtir. `reply_reach`, X'in
bir yanıt konuşmasının yalnızca bir kısmını sunduğu anlamına gelir. Bulunamayan
veya askıya alınmış bir hedef, listeye yalnızca çalıştırmayı başka bir neden
durdurduysa girer. Nedenlerden biri yeniden denenebiliyorsa çalıştırma da
`retryable` olur.

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

Hayır. Xquik'in X Media Downloader'ı X API anahtarı, giriş veya kimlik bilgisi
istemez.

### X medyasını indirmek yasal mı?

Xquik'in X Media Downloader'ı herkese açık X alanlarını çeker. Sonuçlarda
kişisel veri olabilir. Amacının yasal olduğundan emin ol & geçerli gizlilik
kurallarına uy. Emin değilsen yetkin bir hukukçuya danış.

### Çalıştırmam neden sonuç döndürmedi?

Önce çalıştırma durumunu oku. Boş bir çalıştırmanın durumu, hedeflerini &
filtrelerini kontrol etmeni söyler. Ücretsiz `diagnostics` çıktısı, dikkat
gerektiren bir şey olduğunda görünür. Bu çıktıdaki `stopCauses` her neden için
izleyeceğin bir `nextAction` verir. Çalıştırma okuyamadığı her girdiyi listeler
& nasıl düzelteceğini söyler.

### API'yi, zamanlamaları & entegrasyonları kullanabilir miyim?

Evet. 50 herkese açık görevden birini veya Xquik REST API'yi seç.
[API sekmesinde](https://apify.com/xquik/x-media-downloader/api) Python,
JavaScript & cURL örnekleri var. Apify
[zamanlamaları](https://docs.apify.com/platform/schedules), Xquik'in X Media
Downloader'ını bir cron takvimiyle çalıştırır. Ajanlar
[Apify MCP](https://docs.apify.com/platform/integrations/mcp) kullanır. Eski bir
derlemeye ihtiyacın yoksa `latest` kullan.

### Nereden yardım alırım?

Çalıştırma ID'siyle
[Issues sekmesinde](https://apify.com/xquik/x-media-downloader/issues) bir issue
aç. Anahtar-değer deposundaki ücretsiz tanılamalar dikkat gerektiren
çalıştırmaları açıklar. Hiç satır almayan bir çalıştırma, nedenini durum
metninde söyler.

### Bana özel bir çözüm alabilir miyim?

Evet. İhtiyacını
[Issues sekmesinde](https://apify.com/xquik/x-media-downloader/issues) anlat.
Xquik ayrıca bir panel, bir REST API, bir MCP sunucusu & webhook'lar sunar.
Xquik'in web sitesini [Apify profilinde](https://apify.com/xquik) bul.
