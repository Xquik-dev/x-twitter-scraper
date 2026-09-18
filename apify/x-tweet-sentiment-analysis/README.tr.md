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
scraper hizmetidir. X Tweet Sentiment Analysis, her tweet'e tutum, yoğunluk
ve alaycılık ekler. Diğer tüm Apify Actor'ları filtreleme veya
tekilleştirmeden önce ücret alır. Xquik yalnızca teslim edilen, benzersiz,
filtreyle eşleşen sonuçlar için ücret alır.

Yapay zekâ maliyetleri tweet başına fiyata dahil. Yapay zekâ sağlayıcısına ödeme yapmazsın, token almazsın & anahtar getirmezsin.

X (Twitter) gönderilerinin arkasındaki tutumu ölç ve orijinal tweet verisini
sakla. **X Tweet Sentiment Analysis**, eşleşen tweet'leri toplar,
ardından her gönderiye yapay zeka destekli bir duygu durumu kategorisi, bir
yoğunluk seviyesi ve bir alaycılık olasılığı ekler. Bir lansmana, bir
kampanyaya, bir bölüme veya kamu figürüne verilen tepkileri takip et ve
yüksek sesli tepkileri geçici bahsedilmelerden ayır.

- **Gönderi başına duygu durumu**, denetleyemeyeceğin toplu bir puan değil.
- **Yoğunluk**, coşkulu gönderileri hafiflerden ayırır.
- **Alaycılık olasılığı**, gerçek anlamıyla ifadesi tutumla çelişen
  gönderileri işaretler.
- **Eksiksiz kaynak kayıtları**, tweet'in gösterdiği her alanla.

## Tweet duygu durumu nasıl analiz edilir

1. Arama terimleri, profil handle'ları, tweet URL'leri veya tweet ID'leri
   ekle.
2. `maxItems`'i ve görevinin ihtiyaç duyduğu çıkarma filtrelerini ayarla.
3. Her gönderiyi kendi konusuna göre değerlendirmek için `analysis.targets`'ı
   boş bırak, ya da tutumu bir markaya, ürüne veya kişiye odaklamak için
   isimler ve takma adlar ekle.
4. Actor'ı çalıştır ve veri kümesini aç.

```json
{
  "searchTerms": ["\"season finale\" lang:en"],
  "maxItems": 200,
  "analysis": { "context": "Reactions to the show, not spoilers." }
}
```

### Actor neyi yanıtlar

| Soru      | Yanıt                                                            |
| --------- | ------------------------------------------------------------------ |
| Duygu durumu | Olumlu, olumsuz, karışık, nötr veya belirsiz                     |
| Yoğunluk    | 0 geçici bahsetme, 1 net tutum, 2 coşkulu ifade                  |
| Alaycılık   | Gerçek anlamıyla ifadenin tutumla çelişme olasılığı                |

Hedefler sağlandığında, duygu durumu onlara yönelik tutumu değerlendirir ve
sağlanan alıntı veya yanıt bağlamını kullanır; aksi takdirde gönderinin ana
konusunu değerlendirir.

## Fiyatlandırma

Yapay zekâ maliyetleri tweet başına fiyata dahil. Yapay zekâ sağlayıcısına ödeme yapmazsın, token almazsın & anahtar getirmezsin.

Başlangıç ücreti olmadan, başarıyla analiz edilen tweet başına $0.0003'ten
başlar. Toplama dahildir ve belgelenen analiz ödeneği 8 soru, soru
tanımı başına 8.000 bayt ve tweet başına 12.000 bayt bağlamdır. Çıkarma
filtreleri ve tekilleştirme analizden önce çalışır, bu yüzden filtrelenmiş
ve tekrarlanan satırlar hiçbir zaman analiz edilmez veya ücretlendirilmez.
Başarısız ve atlanan analizler ile tanılama satırlarının sonuç ücreti yoktur.
Apify platform kullanımı Apify tarafından ayrıca faturalandırılır ve
Pricing sekmesinde görünür.

## Girdi ve çıktı örnekleri

Yukarıdaki girdi kopyalamaya hazırdır. Çıktı satırları şöyle görünür
(kısaltılmış):

```json
{
  "tweet": { "id": "2100493544842494265", "text": "…", "likeCount": 12 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      {
        "questionId": "sentiment",
        "type": "choice",
        "value": "positive",
        "confidence": 0.91
      },
      {
        "questionId": "intensity",
        "type": "score",
        "value": 2,
        "confidence": 0.8
      },
      { "questionId": "sarcasm", "type": "probability", "probability": 0.04 }
    ]
  }
}
```

Her sonuç `tweet` ve `analysis` içerir. Yanıtlar türleri, soru sürümlerini
ve mevcut olasılıkları içerir. Başarısız veya atlanan bir analiz, boş bir
yanıt listesi ve bir `reason` ile toplanan tweet'i korur. Anahtar-değer
deposundaki ücretsiz tanılamalar, geçersiz girdileri, eksik sonuçları ve
kesintiye uğrayan toplamayı açıklar, çalıştırma raporu ise toplanan
satırları, ücretlendirilen analizleri ve bekleyen ücretleri ayırır.

## Çalıştırma özeti ve düz yanıtlar

Her çalıştırma, anahtar-değer deposuna bir `analysis-summary` kaydı yazar ve
çalıştırma raporunda `results.analysisSummary` altında tekrarlar. Analiz
edilen, başarısız ve atlanan satırları sayar, etkileşimi toplar ve her
soruyu özetler. `sentiment` bölünmesi, kaç tweet'in her tutuma düştüğünü
gösterir ve `engagementShares` altında, her tweet beğenileri, retweet'leri,
yanıtları ve alıntılarıyla ağırlıklandırıldığında bu bölünmenin nasıl
değiştiğini gösterir. `top`, her tutum için en çok etkileşim alan üç tweet'i
listeler. Sayılar 4 ondalık basamağa yuvarlanır; boş çalıştırmalar sıfır
sayım ve `null` ortalama bildirir. Her satır ayrıca bağlantı verdiği ana
bilgisayar adlarını `sourceDomains`'te, metninde bulunan `$NVDA` gibi
`cashtags`'i listeler ve özetin `monitor` bloğu, `monitor.baselineDatasetId`
ayarlandığında karşılaştırma durumlarını sayar ve 50'ye kadar değişen satırı
listeler.

Her sonuç satırı ayrıca `answers`'ı da taşır; bu, soru ID'sinden seçilen
kategoriye, puana veya olasılığa düz bir eşlemedir. `Flat answers` veri
kümesi görünümü ve CSV veya Excel dışa aktarımları, tweet'in yanında soru
başına bir sütun gösterir, böylece elektronik tablolar JSON ayrıştırmasına
ihtiyaç duymaz. Başarısız ve atlanan satırlar boş bir eşleme taşır.

## Önceki bir çalıştırmayla karşılaştır

Aynı analiz ayarlarına sahip tamamlanmış önceki bir çalıştırmanın veri
kümesi ID'si olan `monitor.baselineDatasetId`'yi geçir, ve her satır bir
`monitor` nesnesi kazanır: bir temel değer olmadan `first_run`, önceki
çalıştırmada bulunmayan tweet'ler için `new_to_baseline`, sahip olduğu
tweet'ler için `unchanged` veya `changed`, `changes` ise `previous`'tan
`current`'a taşınan her duygu durumu, yoğunluk seviyesi veya alaycılık
kararını listeler. Kararlar kategoriye, yuvarlanmış puan seviyesine veya
0,5'te evet/hayır'a göre karşılaştırılır ve bir karar yalnızca yanıt açıkça
hareket ettiğinde değişmiş sayılır: önceki kategori 0,4 olasılığın altına
düşer, bir puan en az 0,6 seviye hareket eder veya bir evet/hayır olasılığı
eşikten en az 0,1 uzağa düşer. Çalıştırmalar arasındaki yakın-berabere
titremeler değişmemiş kalır. `maxBaselineRows`'un (varsayılan 100.000)
üzerindeki veya farklı ayarlardan gelen temel değerler, toplamadan önce bir
tanılama satırıyla çalıştırmayı durdurur.

## Görev örnekleri

50 herkese açık görevden seç. Her biri sınırlı bir `maxItems`, hazır
hedefler ve bağlam ile gerçek bir İngilizce aramayla başlar, ve genel bakış
veri kümesi görünümüyle gelir. Çalıştırmadan önce aramayı veya hedefleri
düzenle.

- [Sentiment of season finale reactions](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-season-finale-reactions)
- [Sentiment of iPhone launch posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-iphone-launch-posts)
- [Sentiment of the Super Bowl halftime show](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-super-bowl-halftime-show)
- [Sentiment toward a new electric car model](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-new-electric-car)
- [Sentiment of Marvel movie audiences](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-marvel-movie-audiences)
- [Sentiment of Taylor Swift album reactions](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-taylor-swift-album-reactions)
- [Sentiment of a video game launch](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-video-game-launch)
- [Sentiment about remote work](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-remote-work)
- [Sentiment of airline passengers](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-airline-passengers)
- [Sentiment of college football fans](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-college-football-fans)
- [Sentiment about interest rate decisions](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-interest-rates)
- [Sentiment toward electric scooters](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-electric-scooters)

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
- [X (Twitter) Brand Monitoring](https://apify.com/xquik/x-twitter-brand-monitoring):
  Yapay zeka destekli ilgi, duygu durumu ve müşteri deneyimi yanıtlarıyla marka
  bahsedilmelerini izler ve çalıştırmaları karşılaştırır. Bir markayı zaman
  içinde takip ettiğinde kullan. Analiz edilen tweet başına $0.0003'ten başlar.
- [X (Twitter) Stock & Crypto Signal](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  Yapay zeka ile yükseliş, düşüş, nötr veya karışık duruşu, içerik türünü,
  kesinliği ve varlık ilgisini etiketler. Hisse senedi, kripto veya alım satım
  konuşmalarını takip ettiğinde kullan. Analiz edilen tweet başına $0.0003'ten
  başlar.
- [X (Twitter) News Monitor with AI](https://apify.com/xquik/x-twitter-news-monitor):
  Yapay zeka ile haber gönderilerini biçim, kaynak atfı ve konu ilgisine göre
  etiketler. Haberi yorumdan ayırdığında kullan. Analiz edilen tweet başına
  $0.0003'ten başlar.
- [X Tweet Classifier with AI](https://apify.com/xquik/x-twitter-tweet-classifier):
  Yapay zeka ile her tweet için kendi kategori, puan ve evet/hayır sorularını
  yanıtlar. Hazır analizler etiketlerine uymadığında kullan. Analiz edilen
  tweet başına $0.0003'ten başlar.

## SSS ve destek

### Kendi sorularımı kullanabilir miyim?

Evet. Özel `analysis.questions`, varsayılanların yerini alır: 2-255
kategorili veya en az 2 sıralı seviyeli, 1-8 `choice`, `score` veya
`probability` sorusu.

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
