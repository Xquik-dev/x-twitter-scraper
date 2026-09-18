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

Xquik, en eksiksiz X verisine sahip, dünyanın en hızlı ve en ucuz X (Twitter)
scraper hizmetidir. X (Twitter) Brand Monitoring with AI Analysis, marka bahsedilmelerini
ilgi, duygu durumu ve müşteri deneyimi yanıtlarıyla izler. Diğer tüm Apify
Actor'ları filtreleme veya tekilleştirmeden önce ücret alır. Xquik yalnızca
teslim edilen, benzersiz, filtreyle eşleşen sonuçlar için ücret alır.

Yapay zekâ maliyetleri tweet başına fiyata dahil. Yapay zekâ sağlayıcısına ödeme yapmazsın, token almazsın & anahtar getirmezsin.

X (Twitter)'da marka bahsedilmelerini izle ve çalıştırmalar arasındaki
duygu durumu değişikliklerini takip et. **X (Twitter) Brand Monitoring with AI Analysis**, eşleşen her tweet'i toplar, her gönderiye yapay zeka
destekli ilgi, duygu durumu ve müşteri deneyimi yanıtları ekler, ve
yanıtları neyin değiştiğini görmen için önceki bir veri kümesiyle
karşılaştırır. Orijinal tweet verisi her satırda kalır, bu yüzden dışa
aktarımlar, incelemeler ve takip analizleri ikinci bir kazımaya ihtiyaç
duymaz.

Bir markayı, ürün hattını veya kampanyayı şikayetler, övgüler ve satın alma
soruları için izlemek; destek ve pazarlama ekiplerini toplu puanlar yerine
gerçek gönderilerden bilgilendirmek; ve müşterilerin senin hakkında nasıl
konuştuğunun çalıştırma-üstü-çalıştırma geçmişini tutmak için kullan.

- **Kaynak tweet'in her alanı** yanıtların yanında kalır: metin, yazar,
  sayaçlar, medya, bağlantılar, alıntılanan ve yanıtlanan gönderiler.
- **Tipli yanıtlar**: bir ilgi olasılığı, olasılıklı bir duygu durumu
  kategorisi ve bir müşteri deneyimi kategorisi.
- **Değişim takibi**, olasılık gürültüsüne göre değil karara göre
  çalıştırmalar arasında.
- **Önce filtreleyen faturalandırma**: yalnızca başarılı analizli benzersiz,
  filtreyle eşleşen tweet'ler ücretlendirilir.

## X'te bir markayı nasıl izlerim

1. Arama terimleri (örneğin `"Acme headphones" lang:en"`), profil
   handle'ları, tweet URL'leri veya tweet ID'leri ekle.
2. `maxItems`'i ve tarih sınırları, minimum beğeni veya yanıt hariç tutma
   gibi görevinin ihtiyaç duyduğu çıkarma filtrelerini ayarla.
3. Marka isimlerini ve takma adlarını `analysis.targets` altına koy ve
   markayı `analysis.context`'te tanımla.
4. Actor'ı çalıştır, ardından sonraki karşılaştırman için veri kümesi
   ID'sini sakla.
5. Bir sonraki çalıştırmada, `monitor.baselineDatasetId`'yi o ID ile ekle.
   Yanıtların karşılaştırılabilir kalması için soruları, hedefleri, bağlamı
   ve bağlam sınırlarını değiştirmeden tut.

```json
{
  "searchTerms": ["\"Acme headphones\" lang:en"],
  "maxItems": 100,
  "analysis": {
    "targets": [{ "name": "Acme", "aliases": ["Acme headphones"] }],
    "context": "Consumer headphones & customer service."
  },
  "monitor": {
    "baselineDatasetId": "YOUR_PREVIOUS_DATASET_ID",
    "maxBaselineRows": 100000
  }
}
```

Hedefler sınıflandırmaya rehberlik eder. Arama sorguları oluşturmaz veya
ilgisiz tweet'leri otomatik olarak kaldırmaz, bu yüzden araştırmanla eşleşen
arama terimlerini ve filtreleri seç.

### Monitör neyi yanıtlar

| Soru                | Yanıt                                              |
| ---------------------- | ------------------------------------------------------ |
| Marka ilgisi           | Tweet'in hedefini tartışma olasılığı                    |
| Duygu durumu           | Olumlu, olumsuz, karışık, nötr veya belirsiz            |
| Müşteri deneyimi       | Müşteri, potansiyel müşteri, gözlemci veya belirsiz     |

Belirsiz aynı isimleri gözden geçirmek için ilgi olasılıklarını kullan.
Duygu durumu, yazarın hedefe yönelik ifade ettiği tutumu açıklar.

### Karşılaştırmalar nasıl çalışır

| Karşılaştırma durumu    | Anlamı                                                       |
| -------------------------- | ---------------------------------------------------------------- |
| `first_run`                 | Bir temel değer sağlanmadı                                     |
| `new_to_baseline`           | Bu tweet ID'si temel değerde yoktu                              |
| `unchanged`                 | Karşılaştırılabilir her karar eşleşiyor                         |
| `changed`                   | En az 1 karar farklı                                            |
| `not_comparable`            | Gerekli metadata, ID'ler veya eşleştirme ayarları eksik          |
| `analysis_unavailable`      | Bu tweet'in başarılı bir analizi yok                            |

Yanıtlar karara göre karşılaştırılır: bir `choice` yanıtı kategorisine
göre, bir `score` yanıtı en yakın seviyesine göre ve bir `probability`
yanıtı 0,5'teki evet-ya-da-hayır kararına göre. Bir karar yalnızca yanıt
açıkça hareket ettiğinde değişmiş sayılır: önceki kategori 0,4 olasılığın
altına düşer, bir puan en az 0,6 seviye hareket eder veya bir evet/hayır
olasılığı eşikten en az 0,1 uzağa düşer. Çalıştırmalar arasındaki
yakın-berabere titremeler değişmemiş kalır. Aynı kararı koruyan değişimler
`unchanged` kalır, bu yüzden çalıştırmalar arasındaki model varyasyonu
raporunu doldurmaz. `changes`, `previous` ve `current` kararıyla her
değişen soruyu listeler. Değişimler model varyasyonunu, yeni bağlamı veya
düzenlenmiş kaynak veriyi yansıtabilir; değişen gerçekleri kanıtlamazlar ve
eksik bir tweet silinmeyi kanıtlamaz.

Temel değer sınırı varsayılan olarak 100.000 satırdır. Tekrarlanan tweet
ID'leri, yükleme hataları ve değişen veri kümesi boyutları, toplamadan önce
karşılaştırmayı durdurur; asla boş bir temel değere dönüşmezler.

## Fiyatlandırma

Yapay zekâ maliyetleri tweet başına fiyata dahil. Yapay zekâ sağlayıcısına ödeme yapmazsın, token almazsın & anahtar getirmezsin.

Başlangıç ücreti olmadan, başarıyla analiz edilen tweet başına $0.0003'ten
başlar. Toplama dahildir ve belgelenen analiz ödeneği 8 soru, soru tanımı
başına 8.000 bayt ve tweet başına 12.000 bayt bağlamdır. Çıkarma filtreleri
ve tekilleştirme analizden önce çalışır, bu yüzden filtrelenmiş ve
tekrarlanan satırlar hiçbir zaman analiz edilmez veya ücretlendirilmez.
Başarısız ve atlanan analizler ile tanılama satırlarının sonuç ücreti
yoktur. Apify platform kullanımı (işlem, depolama ve aktarım), planının
oranlarında Apify tarafından ayrıca faturalandırılır ve Pricing sekmesinde
görünür.

## Girdi ve çıktı örnekleri

Yukarıdaki girdi kopyalamaya hazırdır. Çıktı satırları şöyle görünür
(kısaltılmış):

```json
{
  "tweet": { "id": "2100344867507327087", "text": "…", "likeCount": 6409 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      { "questionId": "relevance", "type": "probability", "probability": 0.97 },
      {
        "questionId": "sentiment",
        "type": "choice",
        "value": "neutral",
        "confidence": 0.88
      },
      {
        "questionId": "experience",
        "type": "choice",
        "value": "observer",
        "confidence": 0.69
      }
    ]
  },
  "monitor": { "status": "unchanged", "changedQuestionIds": [], "changes": [] }
}
```

Her sonuç `tweet`, `analysis` ve `monitor` içerir. Yanıtlar türleri, soru
sürümlerini ve mevcut olasılıkları içerir. Eksik alıntı, yanıt, yazar ve
medya bağlamı, `analysis.contextAvailability` altında açık kalır. Başarısız
veya atlanan bir analiz, boş bir yanıt listesi ve bir `reason` ile toplanan
tweet'i korur. Anahtar-değer deposundaki ücretsiz tanılamalar, geçersiz
girdileri, eksik sonuçları ve kesintiye uğrayan toplamayı açıklar, çalıştırma
raporu ise toplanan satırları, ücretlendirilen analizleri ve bekleyen
ücretleri ayırır.

## Çalıştırma özeti ve düz yanıtlar

Her çalıştırma, anahtar-değer deposuna bir `analysis-summary` kaydı yazar ve
çalıştırma raporunda `results.analysisSummary` altında tekrarlar. Analiz
edilen, başarısız ve atlanan satırları sayar, etkileşimi toplar ve her
soruyu özetler. `targets`, marka veya takma ad başına bahsedilmeleri, ses
payını ve etkileşimi bildirir, ve her girişin `top`'u yanıt kategorisi
başına en çok etkileşim alan üç bahsedilmeyi listeler, bu yüzden her
markanın en güçlü olumsuz ve olumlu bahsedilmeleri uyarılara hazır olur.
`sentiment` bloğu, `top` altında en çok etkileşim alan üç olumlu ve olumsuz
bahsedilmeyi listeler, uyarılara hazır, ve `relevance` markayla ilgili
bahsedilmeleri sayar. Sayılar 4 ondalık basamağa yuvarlanır; boş
çalıştırmalar sıfır sayım ve `null` ortalama bildirir. Her `targets` girişi
ayrıca o markadan bahseden tweet'ler arasındaki yanıt bölünmesi olan
`choices`'ı taşır, ve `monitor.changedRows`, kararları temel değerden bu
yana hareket eden tweet'leri listeler, bir webhook veya uyarıya hazır. Her
satır ayrıca bağlantı verdiği ana bilgisayar adlarını `sourceDomains`'te
listeler ve özetin `monitor` bloğu, `monitor.baselineDatasetId`
ayarlandığında karşılaştırma durumlarını sayar ve 50'ye kadar değişen
satırı listeler.

Her sonuç satırı ayrıca `answers`'ı da taşır; bu, soru ID'sinden seçilen
kategoriye, puana veya olasılığa düz bir eşlemedir. `Flat answers` veri
kümesi görünümü ve CSV veya Excel dışa aktarımları, tweet'in yanında soru
başına bir sütun gösterir, böylece elektronik tablolar JSON ayrıştırmasına
ihtiyaç duymaz. Başarısız ve atlanan satırlar boş bir eşleme taşır.

## Görev örnekleri

50 herkese açık görevden seç. Her biri sınırlı bir `maxItems`, hazır
hedefler ve bağlam ile gerçek bir İngilizce aramayla başlar, ve genel bakış
veri kümesi görünümüyle gelir. Çalıştırmadan önce aramayı veya hedefleri
düzenle.

- [Monitor Nike brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-nike-brand-mentions-on-x)
- [Monitor Starbucks brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-starbucks-brand-mentions-on-x)
- [Monitor Tesla brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-tesla-brand-mentions-on-x)
- [Monitor Spotify brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-spotify-brand-mentions-on-x)
- [Monitor Netflix brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-netflix-brand-mentions-on-x)
- [Monitor Airbnb brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-airbnb-brand-mentions-on-x)
- [Monitor Uber brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-uber-brand-mentions-on-x)
- [Monitor Peloton brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-peloton-brand-mentions-on-x)
- [Monitor Shopify brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-shopify-brand-mentions-on-x)
- [Monitor Notion brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-notion-brand-mentions-on-x)
- [Monitor Duolingo brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-duolingo-brand-mentions-on-x)
- [Monitor Lululemon brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-lululemon-brand-mentions-on-x)

Kalan görevler, Actor sayfasında daha fazla marka, konu ve pazarı kapsar.

## İlgili Xquik Actor'ları

Her Xquik Actor'ı aynı çıkarma motorunu, önce filtreleyen faturalandırmayı ve
tanılamaları paylaşır. İhtiyacın olan veriye uyanı seç.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): Aramalardan,
  profil zaman akışlarından, Listelerden ve tweet ID'lerinden 50'den fazla
  filtre ve düz dışa aktarımla tweet kazır. Analiz değil sadece tweet verisi
  gerektiğinde kullan. Satır başına $0.00015'ten başlar.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): Handle, ID
  veya URL'den profilleri, gönderilerini, yanıtlarını, medyasını ve
  beğenilerini kazır. Aramalar yerine hesaplardan başladığında kullan. Satır
  başına $0.00015'ten başlar.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): 25'ten fazla
  filtreyle gönderilerin altındaki yanıtları, yorumları ve tüm konuşmaları
  kazır. Tweet'lerin altındaki tartışmaya ihtiyacın olduğunda kullan. Satır
  başına $0.00015'ten başlar.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): Gönderi
  URL'leri veya ID'leri için toplu olarak yanıtları, alıntıları, retweet
  edenleri, beğenenleri ve thread'leri kazır. Gönderilerle kimin etkileşime
  girdiğini ölçtüğünde kullan. Satır başına $0.00015'ten başlar.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): Takipçileri,
  takip edilenleri, Liste üyelerini, aboneleri ve Topluluk üyelerini profil
  satırları olarak kazır. Kitle veya üye listelerine ihtiyacın olduğunda kullan.
  Profil başına $0.00015'ten başlar.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper):
  Handle, biyografi ve konuma göre kullanıcıları takipçi, doğrulama, hesap
  yaşı ve konum filtreleriyle arar. Aramadan hesap listeleri oluşturduğunda
  kullan. Profil başına $0.00015'ten başlar.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): Liste URL'lerinden
  veya ID'lerinden Liste gönderilerini, üyelerini ve takipçilerini kazır.
  Kaynaklarını küratörlü bir Liste belirlediğinde kullan. Satır başına
  $0.00015'ten başlar.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): Topluluk
  bilgilerini, gönderilerini, aramalarını, üyelerini ve moderatörlerini kazır.
  Kaynakların X Toplulukları olduğunda kullan. Satır başına $0.00015'ten başlar.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): Sıralama,
  hacim, sorgu ve WOEID ile konuma göre gerçek zamanlı trendleri kazır. Nerede
  neyin trend olduğunu takip ettiğinde kullan. Trend başına $0.00015'ten başlar.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): Uzun biçimli
  X Makalelerini kapak, yazar, tarih ve metriklerle Markdown ve metin olarak
  kazır. Tweet değil makale gövdesi gerektiğinde kullan. Makale başına
  $0.00015'ten başlar.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): Gönderilerden
  veya profillerden fotoğrafları, videoları ve GIF'leri MP4 ve metadata
  seçenekleriyle çıkarır veya depolar. Medya dosyalarının kendisine ihtiyacın
  olduğunda kullan. Medya satırı başına $0.00015'ten başlar.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  Yapay zeka ile her tweet için tutum, yoğunluk ve alaycılık olasılığını
  etiketler. Herhangi bir konuda genel duygu durumuna ihtiyacın olduğunda
  kullan. Analiz edilen tweet başına $0.0003'ten başlar.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  Yapay zeka ile yükseliş, düşüş, nötr veya karışık duruşu, içerik türünü,
  kesinliği ve varlık ilgisini etiketler. Hisse senedi, kripto veya alım satım
  konuşmalarını takip ettiğinde kullan. Analiz edilen tweet başına $0.0003'ten
  başlar.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  Yapay zeka ile haber gönderilerini biçim, kaynak atfı ve konu ilgisine göre
  etiketler. Haberi yorumdan ayırdığında kullan. Analiz edilen tweet başına
  $0.0003'ten başlar.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  Yapay zeka ile her tweet için kendi kategori, puan ve evet/hayır sorularını
  yanıtlar. Hazır analizler etiketlerine uymadığında kullan. Analiz edilen
  tweet başına $0.0003'ten başlar.

## SSS ve destek

### Kendi sorularımı kullanabilir miyim?

Evet. Özel `analysis.questions`, varsayılanların yerini alır: 1-8
`choice`, `score` veya `probability` sorusu. Choice soruları 2-255
kategori kabul eder; score soruları en az 2 sıralı seviye kullanır.
Karşılaştırmak istediğin çalıştırmalar genelinde aynı soruları koru.

### Bir satır neden `analysis.status`'u `failed` veya `skipped` olarak döndü?

Tweet toplandı ve teslim edildi, ancak yapay zeka destekli analiz
tamamlanmadı. `analysis.reason`, tweet ve bağlamı `maxContextBytes`'ı
aştığında `context_limit` veya yeniden denemelerden sonra
`service_unavailable` gibi nedeni adlandırır. Bu satırların sonuç ücreti
yoktur. `maxContextBytes`'ı (12.000'e kadar) artır veya etkilenen ID'leri
yeniden çalıştır.

### Analiz gerçekleri doğrular mı?

Hayır. Yanıtlar, gönderinin ne ifade ettiğini ve nasıl çerçevelendiğini
açıklar. Olasılıklar model güvenini ifade eder, gerçeği değil. Önemli
sınıflandırmaları, her satırın koruduğu orijinal tweet'e karşı gözden
geçir.

### Hangi diller çalışır?

Çıkarma, X'in sunduğu her dili destekler. Analiz önce İngilizce müşteri
senaryolarında doğrulanır; diğer desteklenen diller aynı yapıda yanıtlar
döndürür ve belirsizlik `unclear` kategorileri ve olasılıklar aracılığıyla
açık kalır.

### Maliyeti nasıl sınırlarım?

Filtreler, tekilleştirme ve `maxItems` analizden önce çalışır, bu yüzden
yalnızca benzersiz, filtreyle eşleşen tweet'ler analiz edilir ve
ücretlendirilir. Kesin arama operatörleri, tarih sınırları ve etkileşim
tabanları kullan, ve büyük bir çalıştırmadan önce yanıt kalitesini
kontrol etmek için küçük bir `maxItems` ile başla.

### Yardımı nereden alırım?

Actor sayfasında bir sorun aç veya çalıştırma ID'siyle
support@xquik.com ile iletişime geç. Anahtar-değer deposundaki ücretsiz
tanılamalar boş, kısmi veya kesintiye uğramış çalıştırmaları açıklar.

Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
"Twitter" ve "X", X Corp'un ticari markalarıdır.
