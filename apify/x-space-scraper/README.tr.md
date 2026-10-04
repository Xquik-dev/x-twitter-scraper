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
scraper hizmetidir. Xquik'in X Space Scraper'ı Sohbet Odalarını anahtar kelime,
sunucu veya hashtag ile bulur ve URL ya da ID ile okur. Diğer Apify
Actor'larının çoğu, filtrelemeden veya tekilleştirmeden önce ücret alır. Xquik
yalnızca teslim edilen ve benzersiz sonuçlar için ücret alır.

Her konuda canlı, planlanmış veya bitmiş Twitter Sohbet Odalarını (Spaces) bul.
X API anahtarı ya da giriş gerekmez. **Teslim edilen Sohbet Odası başına
$0.00015** ödersin. Apify, platform kullanımını ayrıca faturalandırır.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## Sohbet Odası verisi

- Her Sohbet Odasının başlığı, durumu ve planlanan, başlangıç ve bitiş
  zamanları.
- Canlı dinleyici sayısı, kayıt dinlenme sayısı ve şu anda Sohbet Odasında olan
  hesaplar.
- Sunucunun herkese açık profili, yardımcı sunucular, konuşmacılar ve X'in
  listelediği dinleyiciler.
- Kayıt, klip ve kilit ayarları ile Sohbet Odasını duyuran gönderi.
- Faturalamadan önce tekilleştirme: 2 arama teriminin bulduğu bir Sohbet Odası 1
  satırdır.

## X Sohbet Odaları nasıl bulunur

1. Apify Console'da Xquik'in X Space Scraper'ını aç.
2. Kelimeleri, hashtag'leri veya X arama operatörlerini `searchTerms` alanına
   gir.
3. Ya da Sohbet Odası URL'lerini `startUrls` alanına, Sohbet Odası ID'lerini
   `spaceIds` alanına yapıştır.
4. Teslim edilecek Sohbet Odası sayısını `maxItems` ile sınırla, sonra Start'a
   tıkla.
5. Veri kümesini JSON, CSV veya Excel olarak indir ya da Apify API'yi kullan.

## Girdi

```json
{
  "searchTerms": ["bitcoin", "from:solana"],
  "queryType": "Latest",
  "maxItems": 1000
}
```

Bir arama terimi, eşleşen gönderilerin paylaştığı Sohbet Odalarını bulur. X
aramasının aldığı operatörleri alır:

| Amaç                                                 | Arama terimi       |
| ---------------------------------------------------- | ------------------ |
| Bir konu hakkındaki Sohbet Odaları                   | `bitcoin`          |
| Bir hesabın paylaştığı Sohbet Odaları                | `from:solana`      |
| Bir hashtag altındaki Sohbet Odaları                 | `#AI`              |
| 1 dildeki Sohbet Odaları                             | `startups lang:es` |
| Çok beğenilen gönderilerin paylaştığı Sohbet Odaları | `nba min_faves:50` |

`queryType` hangi gönderilerin öne çıkacağını seçer: en yeniler için `Latest`,
en çok etkileşim alanlar için `Top`.

Zaten bildiğin Sohbet Odalarını URL veya ID ile oku:

```json
{
  "startUrls": [{ "url": "https://x.com/i/spaces/1OGwblLjnQMKB" }],
  "spaceIds": ["1OGwblLjnQMKB"]
}
```

Sorunsuz biten küçük çalıştırmalar `run-report` yazmaz, böylece Apify kullanımı
azalır. Raporu her çalıştırmada almak için `alwaysSaveRunRecords` seçeneğini aç.

## Çıktı

Her satırda 1 Sohbet Odası ve `sourceTarget` içinde arama terimi, URL'si veya
ID'si bulunur.

Aşağıdaki değerler yalnızca örnektir. Gerçek sonuçlar canlı veriden gelir. Bir
Sohbet Odası satırı şöyle görünür:

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
  "resultType": "space",
  "sourceTarget": "bitcoin"
}
```

`state`, X'in adlandırdığı şekliyle 5 değerden 1'ini taşır:

| `state`      | Sohbet Odası                         |
| ------------ | ------------------------------------ |
| `NotStarted` | Planlandı ve `scheduledStart` taşır. |
| `Running`    | Şu anda canlı.                       |
| `Ended`      | Bitti. Sunucusu bitirdi.             |
| `TimedOut`   | Bitti. Sunucusu değil, X kapattı.    |
| `Canceled`   | Planlandı ama hiç başlamadı.         |

`Ended` ve `TimedOut` Sohbet Odaları `endedAt` taşır ve ikisi de kayıt
tutabilir. X, abonelere veya bir Topluluğa özel Sohbet Odasını yalnızca o
kitleye gösterir, bu yüzden bu Sohbet Odaları satır döndürmez.

## X Sohbet Odalarını kazımak ne kadar tutar?

Her Apify planında teslim edilen Sohbet Odası başına $0.00015 ödersin. Apify,
platform kullanımını ayrıca faturalandırır.

- Teslim edilen her veri satırı için 1 kez ödersin. Tanılamalar `diagnostics`
  içinde ücretsizdir.
- Başlatma, arama veya sayfa ücreti yok.
- Tekilleştirme faturalamadan önce çalışır.

## Sınırlar ve kurtarma

Çalıştırma yarıda kesilirse Actor ücretsiz bir `partial` tanılaması yazar. Elde
edilen sonuçlar olduğu gibi kalır. Yeniden denemeden önce `availableResults`,
`failedTargets`, `retryable` ve `nextAction` alanlarını oku. Actor'ın başarıyla
bitmesi teslimatı doğrular. Tüm verinin çekildiğini doğrulamaz.

Çalıştırma durumu, erken durmanın her nedenini söyler. `stopCauses` her nedeni
kendi `message`, `retryable` ve `nextAction` alanlarıyla listeler. Nedenler
şunlardır: `target_not_found`, `target_failed`, `pagination_safety_limit` ve
`deadline_reached`. Bulunamayan bir hedef, listeye yalnızca çalıştırmayı başka
bir neden durdurduysa girer. Nedenlerden biri `retryable` ise çalıştırma da
`retryable` olur.

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
- [X List Scraper](https://apify.com/xquik/x-list-scraper): Liste URL'lerinden
  veya ID'lerinden Liste gönderilerini, üyelerini ve takipçilerini kazır.
  Kaynaklarını özenle seçilmiş bir Liste belirlediğinde kullan. Satır başına
  $0.00015'ten başlar.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): Topluluk
  bilgilerini, gönderilerini, aramalarını, üyelerini ve moderatörlerini kazır.
  Kaynakların X Toplulukları olduğunda kullan. Satır başına $0.00015'ten başlar.
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

Sık sorulan soruların cevapları, ardından nereden yardım alacağın.

### X API anahtarı veya giriş gerekir mi?

Hayır. Xquik'in X Space Scraper'ı X API anahtarı, giriş ya da kimlik bilgisi
istemez.

### Şu anda canlı olan Sohbet Odalarını bulabilir miyim?

Evet. `queryType` değerini `Latest` yaparak ara, sonra `state` değeri `Running`
olan satırları tut. `NotStarted` satırları planlanmıştır ve `scheduledStart`
taşır.

### X Sohbet Odalarını kazımak yasal mı?

Xquik'in X Space Scraper'ı herkese açık X alanlarını çeker. Sonuçlarda kişisel
veri olabilir. Amacının yasal olduğundan emin ol ve geçerli gizlilik kurallarına
uy. Emin değilsen yetkin bir hukukçuya danış.

### Çalıştırmam neden sonuç döndürmedi?

Önce ücretsiz `diagnostics` çıktısını aç. Boş bir çalıştırmanın durumu,
hedeflerini kontrol etmeni söyler. `stopCauses` her neden için izleyeceğin bir
`nextAction` verir.

### API'yi, zamanlamaları ve entegrasyonları kullanabilir miyim?

Evet. Apify API'yi veya Xquik REST API'yi kullan.
[API sekmesinde](https://apify.com/xquik/x-space-scraper/api) Python, JavaScript
ve cURL örnekleri var. Apify
[zamanlamaları](https://docs.apify.com/platform/schedules), Xquik'in X Space
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
