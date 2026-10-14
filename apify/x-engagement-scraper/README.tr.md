[English](README.md) · [Español](README.es.md) · **Türkçe** ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer, Xquik MCP'yi kodlama ajanlarına bağlıyor](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Framer'ın Xquik scraper'larını Claude Code, Codex, Cursor & daha fazlasıyla nasıl kullandığını](https://youtu.be/4UOSpoOoC3Y?t=367)
6:07'den itibaren izle.

Xquik, en eksiksiz X verisini sunan, dünyanın en hızlı ve en ucuz X (Twitter)
scraper hizmetidir. Xquik'in X Engagement Scraper'ı her gönderi için yanıtları,
alıntıları, yeniden gönderenleri & gönderi dizilerini toplar. Diğer Apify
Actor'larının çoğu, filtrelemeden veya tekilleştirmeden önce ücret alır. Xquik
yalnızca teslim edilen, benzersiz ve filtrene uyan sonuçlar için ücret alır.

1 veya daha fazla X gönderisi için Twitter yanıtlarını, alıntılarını, yeniden
gönderenlerini & gönderi dizisi bağlamını topla. **Teslim edilen satır başına
$0.00015** ödersin & Apify platform kullanımını ayrıca faturalandırır. X API
anahtarına veya girişe ihtiyacın yok.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## Yanıtlar, alıntılar & profiller

- Gönderi URL'leri & sayısal gönderi ID'leri.
- Erişilebilen tüm sonuç sayfalarındaki doğrudan yanıtlar.
- 4 sıralama seçeneğiyle doğrudan & iç içe yanıtlar.
- Seçilebilir bir satır olarak kaynak gönderi ayrıntıları.
- Metin, yazar, medya & metriklerle alıntı gönderiler.
- Yeniden gönderen profilleri.
- Her kaynak gönderinin çevresindeki konuşma bağlamı.
- 1 çalıştırmada birçok etkileşim türü & gönderi.
- Genel bir sınır & her etkileşim türü için ayrı bir sınır.
- Kaynak gönderi & etkileşim türü bilgisi.
- Apify yeniden başlattığında çalıştırmalar kaldığı yerden devam eder.

## X gönderi etkileşimi nasıl kazınır

Apify'da yeni misin? Önce
[ücretsiz bir hesap oluştur](https://console.apify.com/sign-up?fpr=xquik).
Ücretsiz plan kredi kartı istemez & her ay harcaman için $5 verir. Satır başına
$0.00015 fiyatla $5, platform kullanımı hariç 33.000 satıra kadar yeter. Sonra
buraya dön & Try for free düğmesine bas.

1. Apify Console'da Xquik'in X Engagement Scraper'ını aç.
2. Gönderi URL'lerini `startUrls` alanına ya da sayısal gönderi ID'lerini
   `tweetIds` alanına yapıştır.
3. `engagementTypes` seç & `minLikes` veya `language` gibi filtreler ekle.
4. Teslim edilen satırları sınırlamak için `maxItems` ayarla, sonra Start
   düğmesine tıkla.
5. Veri kümesini JSON, CSV veya Excel olarak indir ya da Apify API'yi kullan.

`startUrls` her URL'yi düz metin olarak ya da `{ "url": "..." }` nesnesi olarak
alır.

```json
{
  "startUrls": [
    "https://x.com/OpenAI/status/2082577277246972300",
    { "url": "https://x.com/jack/status/20" }
  ]
}
```

## Girdi

```json
{
  "tweetIds": ["2082577277246972300"],
  "engagementTypes": ["replies", "quotes", "retweeters"],
  "maxItems": 10000
}
```

X, bir gönderiyi kimlerin beğendiğini 2024'te göstermeyi bıraktı. `favoriters`
türü satır döndürmez. Satırsız bir çalıştırma bu nedeni tanılamasında belirtir.

Varsayılan olarak her hesap veya gönderi, etkileşim türü başına 1 kez görünür &
1 kez ücretlenir. Her kaynak gönderi için ayrı bir satır tutmak için
`dedupeAcrossTargets` değerini `false` yap. Çalıştırma durumu, ücretsiz atladığı
tekrarları sayar.

Sorunsuz biten küçük çalıştırmalar `run-report` kaydını atlar & Apify
kullanımından tasarruf eder. Raporu her çalıştırmada yazmak için
`alwaysSaveRunRecords` seçeneğini aç.

### Başka bir etkileşim Actor'ından geçiş yap

Actor, diğer etkileşim Actor'larının aşağıdaki alan adlarını okur.

- `urls` alanı `startUrls` alanına eşlenir.
- `category` alanı `engagementTypes` alanına eşlenir. `replies`, `retweets`,
  `info` & `checkRetweet`, `replies`, `retweeters`, `tweet` & `repostCheck`
  olarak okunur.
- `resultsPerCategory` alanı `maxItemsPerTarget` alanına eşlenir.
- `retweetCheckUsername` alanı `repostCheckUsers` alanına eşlenir.

`followers` veya `tweets` gibi başka bir Actor'ın işi olan bir `category`
çalıştırmayı durdurur. Çalıştırma hiçbir şey okumaz & ücretlendirmez. Mesaj,
kullanman gereken Actor'ı söyler. Bu adlardan birini & kanonik alanını birlikte
ayarlarsan kanonik değer kazanır. Çalıştırma günlüğü kaybeden alanı söyler.

## Çıktı

Her satırın `resultType` değeri `tweet`, `replies`, `completeReplies`, `quotes`,
`retweeters`, `favoriters`, `thread` veya `repostCheck` olur. `sourceTarget`
kaynak gönderi ID'sini tutar. Gönderi & profil alanları sabit Xquik REST yanıt
biçimlerini izler.

`completeReplies` dönen her satırı tutar. Çalıştırma raporu kısmi kapsamayı
`incompleteTargets` içinde sayar. Filtreler faturalamadan önce çalışır.

Yeniden gönderenler & beğenenler `minFollowers`, `hasEmail` & `bioContains` gibi
her profil filtresini kabul eder. Satırlarında, her profilin yayımladığı
e-postaları, telefonları & bağlantıları içeren `email` & `contactInfo` alanları
bulunur.

Örnekler örnek değerler kullanır. Sonuçlar canlı veriyi yansıtır. Bir yanıt
satırı şöyle görünür.

```json
{
  "resultType": "replies",
  "sourceTarget": "2082577277246972300",
  "inReplyToId": "2082577277246972300",
  "username": "sample_user",
  "text": "Sample reply text",
  "likeCount": 12
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

Hesaplanan bir sütunu eklemek için adını `fields` veya `renameFields` içine yaz.

| Sütun               | Formül                                                                             |
| ------------------- | ---------------------------------------------------------------------------------- |
| `totalEngagement`   | `likeCount` + `replyCount` + `retweetCount` + `quoteCount`. Eksik bir sayı 0 ekler |
| `engagementRate`    | `totalEngagement` × 100 ÷ yazarın `followers` değeri, 4 ondalık basamakla          |
| `engagementPerView` | `totalEngagement` × 100 ÷ `viewCount`, 4 ondalık basamakla                         |

Bu sayıları olmayan bir satırda `totalEngagement` değeri `null` olur. Böleni
eksik veya 0 olan bir oran `null` olur.

## Yeniden gönderi kontrolü

Her hesabın her gönderiyi yeniden gönderip göndermediğini öğrenmek için
`engagementTypes` listesine `repostCheck` ekle & hesapları `repostCheckUsers`
içinde listele.

```json
{
  "tweetIds": ["2098439298617856319"],
  "engagementTypes": ["repostCheck"],
  "repostCheckUsers": ["discord", "nasa"]
}
```

Her kontrol, `isRetweeted`, `retweetedAt`, `retweetId`, `checkedPosts` &
`complete` alanlarını içeren 1 satırdır. `id` değeri
`repostCheck:<post ID>:<account>` olur. Kontrol her hesabın en yeni
gönderilerini okur. Bu gönderilerden eski bir yeniden gönderi `complete: false`
ile `false` olarak okunur.

Yalnızca `repostCheck` & `tweet` satırlarından oluşan bir çalıştırma girdi
sıranı korur. Her gönderinin ardından, listelediğin sırayla hesapları gelir.

## Yeniden gönderi zaman damgaları

`retweeters` sonuçları için `includeRetweetTimestamp` değerini `true` yap.
`retweetedAt` sütunu, gözlenen yeniden gönderme zamanını UTC olarak tutar.

Xquik'in X Engagement Scraper'ı, X o yeniden gönderiyi hâlâ gösteriyorsa yeniden
gönderme zamanını bulur. Eski, silinmiş veya erişilemeyen yeniden gönderilerde
zaman damgası `null` kalır. Profil çıktıda kalır. `null` değer, hesabın
gönderiyi hiç yeniden göndermediğini kanıtlamaz.

Bu seçenek çalıştırmaları yavaşlatır. Yalnızca profil sonuçları için kapalı
bırak. Profildeki `createdAt` hesabın oluşturulma tarihi olarak kalır. Gönderi
satırları bir yeniden gönderme olayı içeriyorsa `retweetedAt` taşır. Orijinal
gönderi tarihleri & kazıma zamanları asla yeniden gönderme zamanının yerine
geçmez. Sonuç fiyatları & teslim edilen satır faturalaması aynı kalır.

## X gönderi etkileşimini kazımak ne kadar tutar?

Her Apify planında teslim edilen satır başına $0.00015 ödersin. Apify, platform
kullanımını ayrıca faturalandırır.

Daha fazla hacim için daha çok ön ödemeli kullanım içeren bir
[Apify planı seç](https://apify.com/pricing?fpr=xquik).

- Teslim edilen her veri satırı için tek bir ücret. Tanılamalar `diagnostics`
  içinde ücretsizdir.
- Başlatma, gönderi, etkileşim türü veya sayfa ücreti yok.
- Tekilleştirme faturalamadan önce çalışır.

## Sınırlar & kurtarma

Xquik'in X Engagement Scraper'ı 1 çalıştırmada birçok gönderiyi & etkileşim
türünü okur. Teslim edilen satırlar & ilerleme bir Apify yeniden başlatmasından
sonra korunur. Actor kendi başına süre sınırı eklemez.

Veri çekme yarıda kesilirse Actor ücretsiz bir `partial` tanılaması yazar. Elde
edilen sonuçlar olduğu gibi kalır. Yeniden denemeden önce `availableResults`,
`failedTargets`, `retryable` & `nextAction` alanlarını oku. Actor'ın başarıyla
bitmesi teslimatı doğrular, tüm verinin çekildiğini değil.

Çalıştırma durumu, erken durmanın her nedenini söyler. `stopCauses` her nedeni
kendi `message`, `retryable` & `nextAction` alanlarıyla listeler. Nedenler
`target_not_found`, `target_failed`, `pagination_safety_limit`, `reply_reach` &
`deadline_reached` olabilir. `reply_reach`, X'in bir yanıt konuşmasının yalnızca
bir kısmını sunduğu anlamına gelir. Bulunamayan bir hedef, listeye yalnızca
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

## SSS

Sık sorulan soruların cevapları, sonra da nereden yardım alacağın.

### X API anahtarı veya giriş gerekir mi?

Hayır. Xquik'in X Engagement Scraper'ı X API anahtarı, giriş veya kimlik bilgisi
istemez.

### X etkileşim verisini kazımak yasal mı?

Xquik'in X Engagement Scraper'ı herkese açık X alanlarını çeker. Sonuçlarda
kişisel veri olabilir. Amacının yasal olduğundan emin ol & geçerli gizlilik
kurallarına uy. Emin değilsen yetkin bir hukukçuya danış.

### Çalıştırmam neden sonuç döndürmedi?

Önce çalıştırma durumunu oku. Boş bir çalıştırmanın durumu, hedeflerini &
filtrelerini kontrol etmeni söyler. Ücretsiz `diagnostics` çıktısı, dikkat
gerektiren bir şey olduğunda görünür. Bu çıktıdaki `stopCauses` her neden için
izleyeceğin bir `nextAction` verir. Çalıştırma okuyamadığı her girdiyi listeler
& nasıl düzelteceğini söyler. X, bir gönderiyi kimlerin beğendiğini 2024'te
göstermeyi bıraktı, bu yüzden `favoriters` satır döndürmez.

### API'yi, zamanlamaları & entegrasyonları kullanabilir miyim?

Evet. 50 herkese açık görevden birini veya Xquik REST API'yi seç.
[API sekmesinde](https://apify.com/xquik/x-engagement-scraper/api) Python,
JavaScript & cURL örnekleri var. Apify
[zamanlamaları](https://docs.apify.com/platform/schedules), Xquik'in X
Engagement Scraper'ını bir cron takvimiyle çalıştırır. Ajanlar
[Apify MCP](https://docs.apify.com/platform/integrations/mcp) kullanır. Eski bir
derlemeye ihtiyacın yoksa `latest` kullan.

### Nereden yardım alırım?

Çalıştırma ID'siyle
[Issues sekmesinde](https://apify.com/xquik/x-engagement-scraper/issues) bir
issue aç. Anahtar-değer deposundaki ücretsiz tanılamalar dikkat gerektiren
çalıştırmaları açıklar. Hiç satır almayan bir çalıştırma, nedenini durum
metninde söyler.

### Bana özel bir çözüm alabilir miyim?

Evet. İhtiyacını
[Issues sekmesinde](https://apify.com/xquik/x-engagement-scraper/issues) anlat.
Xquik ayrıca bir panel, bir REST API, bir MCP sunucusu & webhook'lar sunar.
Xquik'in web sitesini [Apify profilinde](https://apify.com/xquik) bul.
