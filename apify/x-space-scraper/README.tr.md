[English](README.md) · [Español](README.es.md) · **Türkçe** ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer, Xquik MCP'yi kodlama ajanlarına bağlıyor](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Framer'ın Xquik scraper'larını Claude Code, Codex, Cursor & daha fazlasıyla nasıl kullandığını](https://youtu.be/4UOSpoOoC3Y?t=367)
6:07'den itibaren izle.

Xquik, en eksiksiz X verisini sunan, dünyanın en hızlı ve en ucuz X (Twitter)
scraper hizmetidir. Xquik'in X Space Scraper'ı Sohbet Odalarını anahtar kelime,
sunucu veya hashtag ile bulur & Sohbet Odalarını ve yayınları URL ya da ID ile
okur. Diğer Apify Actor'larının çoğu, filtrelemeden veya tekilleştirmeden önce
ücret alır. Xquik yalnızca teslim edilen ve benzersiz sonuçlar için ücret alır.

Her konuda canlı, planlanmış veya bitmiş Twitter Sohbet Odalarını bul. X API
anahtarına veya girişe ihtiyacın yok. **Teslim edilen Sohbet Odası veya yayın
başına $0.00015** ödersin & Apify platform kullanımını ayrıca faturalandırır.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## Sohbet Odası verisi

- Her Sohbet Odasının başlığı, durumu & planlanan, başlangıç ve bitiş zamanları.
- Canlı dinleyici sayısı, kayıt dinlenme sayısı & şu anda Sohbet Odasında olan
  hesaplar.
- Sunucunun herkese açık profili, yardımcı sunucular, konuşmacılar & X'in
  listelediği dinleyiciler.
- Kayıt, klip & kilit ayarları, ayrıca Sohbet Odasını duyuran gönderi, metni,
  sayıları & yazarıyla birlikte.
- Sunucuların & konuşmacıların Sohbet Odasında paylaştığı gönderiler, her birini
  kimin & ne zaman paylaştığıyla birlikte.
- `includeReplay` ile bitmiş bir Sohbet Odasının kaydı, bir HLS oynatma listesi
  URL'si olarak.
- URL veya ID ile okunan yayınlar, başlık, durum, zamanlar, izlenme sayıları &
  sunucuyla birlikte.
- Faturalamadan önce tekilleştirme. 2 arama teriminin bulduğu bir Sohbet Odası 1
  satırdır.

## X Sohbet Odaları nasıl bulunur

Apify'da yeni misin? Önce
[ücretsiz bir hesap oluştur](https://console.apify.com/sign-up?fpr=xquik).
Ücretsiz plan kredi kartı istemez & her ay harcaman için $5 verir. Sohbet Odası
veya yayın başına $0.00015 fiyatla $5, platform kullanımı hariç bunlardan 33.000
tanesine kadar yeter. Sonra buraya dön & Try for free düğmesine bas.

1. Apify Console'da Xquik'in X Space Scraper'ını aç.
2. Kelimeleri, hashtag'leri veya X arama operatörlerini `searchTerms` alanına
   gir.
3. Ya da Sohbet Odası URL'lerini `startUrls` alanına veya Sohbet Odası ID'lerini
   `spaceIds` alanına yapıştır.
4. Yayınlar için URL'lerini `startUrls` alanına ya da ID'lerini `broadcastIds`
   alanına yapıştır.
5. Teslim edilen satırları sınırlamak için `maxItems` ayarla, sonra Start
   düğmesine tıkla.
6. Veri kümesini JSON, CSV veya Excel olarak indir ya da Apify API'yi kullan.

`startUrls` her URL'yi düz metin olarak ya da `{ "url": "..." }` nesnesi olarak
alır.

```json
{
  "startUrls": [
    "https://x.com/i/spaces/1OGwblLjnQMKB",
    { "url": "https://x.com/i/broadcasts/1nGeLMWbkpaKX" }
  ]
}
```

## Girdi

```json
{
  "searchTerms": ["bitcoin", "from:solana"],
  "queryType": "Latest",
  "maxItems": 1000
}
```

Bir arama terimi, eşleşen gönderilerin paylaştığı Sohbet Odalarını bulur. X
aramasının kabul ettiği operatörleri kabul eder.

| Amaç                                                 | Arama terimi       |
| ---------------------------------------------------- | ------------------ |
| Bir konu hakkındaki Sohbet Odaları                   | `bitcoin`          |
| Bir hesabın paylaştığı Sohbet Odaları                | `from:solana`      |
| Bir hashtag altındaki Sohbet Odaları                 | `#AI`              |
| 1 dildeki Sohbet Odaları                             | `startups lang:es` |
| Çok beğenilen gönderilerin paylaştığı Sohbet Odaları | `nba min_faves:50` |

`queryType` hangi gönderilerin önde geleceğini seçer. `Latest` en yenileri,
`Top` en çok etkileşim alanları öne koyar.

`Live` şu anda yayında olan Sohbet Odalarını, `Upcoming` ise planlanmış olanları
listeler. İkisi de X'in kendi Sohbet Odası aramasını okur. Bu arama, Sohbet
Odası başlıklarındaki kelimeleri eşleştirir & operatör almaz.

```json
{ "searchTerms": ["bitcoin"], "queryType": "Live" }
```

Zaten bildiğin Sohbet Odalarını URL veya ID ile oku.

```json
{
  "startUrls": [{ "url": "https://x.com/i/spaces/1OGwblLjnQMKB" }],
  "spaceIds": ["1OGwblLjnQMKB"]
}
```

Bitmiş her Sohbet Odasının kaydını almak için `includeReplay` seçeneğini aç.

```json
{ "spaceIds": ["1OGwblLjnQMKB"], "includeReplay": true }
```

Satır o zaman bir HLS oynatma listesi olan `url` ile `streamType` & `status`
alanlarını içeren bir `replay` taşır. Canlı, planlanmış veya kaydı olmayan bir
Sohbet Odasında `replay` olmaz. Kayıt için ek ücret ödemezsin.

X'in `x.com/i/broadcasts` adresinde barındırdığı canlı videoları, yani
yayınları, URL veya ID ile oku.

```json
{
  "startUrls": [{ "url": "https://x.com/i/broadcasts/1nGeLMWbkpaKX" }],
  "broadcastIds": ["1nGeLMWbkpaKX"]
}
```

Sorunsuz biten küçük çalıştırmalar `run-report` kaydını atlar & Apify
kullanımından tasarruf eder. Raporu her çalıştırmada yazmak için
`alwaysSaveRunRecords` seçeneğini aç.

## Çıktı

Her satırda 1 Sohbet Odası veya yayın & `sourceTarget` içinde onun arama terimi,
URL'si veya ID'si bulunur. `resultType`, `space` veya `broadcast` olur.

Örnekler örnek değerler kullanır. Sonuçlar canlı veriyi yansıtır. Bir Sohbet
Odası satırı şöyle görünür.

```json
{
  "id": "1SampleSpace1",
  "title": "Sample Space about bitcoin",
  "state": "Ended",
  "startedAt": "2026-03-11T17:00:26.227Z",
  "endedAt": "2026-03-11T17:49:29.190Z",
  "totalLiveListeners": 841,
  "totalReplayWatched": 609,
  "isAvailableForReplay": true,
  "creator": { "username": "sample_host", "name": "Sample Host" },
  "admins": [{ "username": "sample_host", "name": "Sample Host" }],
  "speakers": [{ "username": "sample_speaker", "name": "Sample Speaker" }],
  "listeners": [],
  "sharings": [
    {
      "id": "2106511178339881415",
      "sharedAt": "2026-03-11T17:20:16.658Z",
      "sharedBy": { "username": "sample_speaker", "name": "Sample Speaker" },
      "tweet": { "id": "2105620368836706789", "text": "Sample shared post" }
    }
  ],
  "resultType": "space",
  "sourceTarget": "bitcoin"
}
```

`state`, X'in adlandırdığı şekliyle 5 değerden 1'ini taşır.

| `state`      | Sohbet Odası                        |
| ------------ | ----------------------------------- |
| `NotStarted` | Planlandı & `scheduledStart` taşır. |
| `Running`    | Şu anda canlı.                      |
| `Ended`      | Bitti. Sunucusu bitirdi.            |
| `TimedOut`   | Bitti. Sunucusu değil, X kapattı.   |
| `Canceled`   | Planlandı ama hiç başlamadı.        |

`Ended` & `TimedOut` Sohbet Odaları `endedAt` taşır & ikisi de kayıt tutabilir.
X, abonelere veya bir Topluluğa özel bir Sohbet Odasını yalnızca o kitleye
gösterir, bu yüzden bu Sohbet Odaları satır döndürmez.

Bir yayın satırında `resultType: "broadcast"` bulunur & satır şöyle görünür.

```json
{
  "id": "1SampleBcast1",
  "title": "Sample launch broadcast",
  "state": "Ended",
  "startedAt": "2026-09-17T00:54:56.506Z",
  "endedAt": "2026-09-17T01:17:35.036Z",
  "totalWatched": 161758,
  "totalWatching": 21639,
  "width": 3840,
  "height": 2160,
  "creator": { "username": "sample_host", "name": "Sample Host" },
  "resultType": "broadcast",
  "sourceTarget": "1SampleBcast1"
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

## X Sohbet Odalarını kazımak ne kadar tutar?

Her Apify planında teslim edilen Sohbet Odası veya yayın başına $0.00015
ödersin. Apify, platform kullanımını ayrıca faturalandırır.

Daha fazla hacim için daha çok ön ödemeli kullanım içeren bir
[Apify planı seç](https://apify.com/pricing?fpr=xquik).

- Teslim edilen her veri satırı için tek bir ücret. Tanılamalar `diagnostics`
  içinde ücretsizdir.
- Başlatma, arama veya sayfa ücreti yok.
- Tekilleştirme faturalamadan önce çalışır.

## Sınırlar & kurtarma

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

Hayır. Xquik'in X Space Scraper'ı X API anahtarı, giriş veya kimlik bilgisi
istemez.

### Şu anda canlı olan Sohbet Odalarını bulabilir miyim?

Evet. `queryType` değerini `Live` yap & `bitcoin` gibi bir arama terimi ekle.
Her satır şu anda yayında olan bir Sohbet Odasıdır. `Upcoming` planlanmış Sohbet
Odalarını listeler. Bunlar `scheduledStart` taşır.

### X Sohbet Odalarını kazımak yasal mı?

Xquik'in X Space Scraper'ı herkese açık X alanlarını çeker. Sonuçlarda kişisel
veri olabilir. Amacının yasal olduğundan emin ol & geçerli gizlilik kurallarına
uy. Emin değilsen yetkin bir hukukçuya danış.

### Çalıştırmam neden sonuç döndürmedi?

Önce çalıştırma durumunu oku. Boş bir çalıştırmanın durumu, hedeflerini kontrol
etmeni söyler. Ücretsiz `diagnostics` çıktısı, dikkat gerektiren bir şey
olduğunda görünür. Bu çıktıdaki `stopCauses` her neden için izleyeceğin bir
`nextAction` verir.

### API'yi, zamanlamaları & entegrasyonları kullanabilir miyim?

Evet. Apify API'yi veya Xquik REST API'yi kullan.
[API sekmesinde](https://apify.com/xquik/x-space-scraper/api) Python, JavaScript
& cURL örnekleri var. Apify
[zamanlamaları](https://docs.apify.com/platform/schedules), Xquik'in X Space
Scraper'ını bir cron takvimiyle çalıştırır. Ajanlar
[Apify MCP](https://docs.apify.com/platform/integrations/mcp) kullanır. Eski bir
derlemeye ihtiyacın yoksa `latest` kullan.

### Nereden yardım alırım?

Çalıştırma ID'siyle
[Issues sekmesinde](https://apify.com/xquik/x-space-scraper/issues) bir issue
aç. Anahtar-değer deposundaki ücretsiz tanılamalar dikkat gerektiren
çalıştırmaları açıklar. Hiç satır almayan bir çalıştırma, nedenini durum
metninde söyler.

### Bana özel bir çözüm alabilir miyim?

Evet. İhtiyacını
[Issues sekmesinde](https://apify.com/xquik/x-space-scraper/issues) anlat. Xquik
ayrıca bir panel, bir REST API, bir MCP sunucusu & webhook'lar sunar. Xquik'in
web sitesini [Apify profilinde](https://apify.com/xquik) bul.
