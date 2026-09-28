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
scraper hizmetidir. Xquik'in X Tweet Sentiment Analysis'i her gönderiye
(tweet'e) tutum, yoğunluk ve alaycılık bilgisi ekler. Diğer Apify Actor'larının
çoğu, filtrelemeden veya tekilleştirmeden önce ücret alır. Xquik yalnızca
teslim edilen, benzersiz ve filtrene uyan sonuçlar için ücret alır. Yapay zeka
maliyetleri gönderi başına fiyata dahildir. Yapay zeka hesabı, token veya
anahtar gerekmez.

X (Twitter) gönderilerinin ardındaki tutumu ölç, orijinal gönderi verisini de
sakla. Xquik'in **X Tweet Sentiment Analysis with AI** Actor'ı eşleşen
gönderileri toplar. Her gönderiye yapay zeka destekli bir duygu durumu
kategorisi, yoğunluk düzeyi ve alaycılık olasılığı ekler. Bir lansmana,
kampanyaya, bölüme veya tanınmış bir kişiye gelen tepkileri takip et. Güçlü
tepkileri geçerken yapılan bahsetmelerden ayır.

- **Gönderi başına duygu durumu.** Her gönderi kendi kategorisini alır, böylece
  her cevabı denetleyebilirsin.
- **Yoğunluk.** 0 ile 2 arasındaki bir düzey, vurgulu gönderileri ılımlı
  olanlardan ayırır.
- **Alaycılık olasılığı.** Sözcükleri tutumla çelişen gönderileri işaretler.
- **Eksiksiz kaynak kayıtları.** Her satır, gönderinin sunduğu tüm alanları
  tutar.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## Tweet duygu analizi nasıl yapılır

1. Arama terimi, profil kullanıcı adı, gönderi URL'si veya gönderi ID'si ekle.
2. `maxItems` değerini ve işinin gerektirdiği veri çekme filtrelerini ayarla.
3. Her gönderiyi kendi konusuna göre değerlendirmek için `analysis.targets`
   alanını boş bırak. Bir markaya, ürüne veya kişiye odaklanmak için onun
   adlarını ve takma adlarını ekle.
4. Çalıştırmayı başlat ve veri kümesini aç.

```json
{
  "searchTerms": ["\"season finale\" lang:en"],
  "maxItems": 200,
  "analysis": { "context": "Reactions to the show, not spoilers." }
}
```

### Actor neyi cevaplar

| Soru         | Cevap                                                 |
| ------------ | ----------------------------------------------------- |
| Duygu durumu | Olumlu, olumsuz, karışık, nötr veya belirsiz          |
| Yoğunluk     | 0 geçerken bahsetme, 1 net bir tutum, 2 vurgulu ifade |
| Alaycılık    | Sözcüklerin tutumla çelişme olasılığı                 |

Hedef verirsen duygu durumu, hedeflere karşı tutumu değerlendirir. Verdiğin
alıntı veya yanıt bağlamını da kullanır. Hedef yoksa gönderinin ana konusunu
değerlendirir.

## Kendi metnini analiz et

Kendi taslaklarını, yanıtlarını, değerlendirmelerini veya notlarını `texts`
alanına yapıştır. Xquik'in X Tweet Sentiment Analysis'i bunları analiz eder.
X'ten hiçbir şey çekmez.

```json
{
  "texts": [
    "The new update is great, but sync still drops on mobile.",
    "Support fixed my issue in 10 minutes. Thank you."
  ]
}
```

- Her metin, bir gönderiyle aynı `analysis` cevaplarını içeren 1 satır olur.
- `tweet.id` değeri `text:1`, `text:2` diye devam eder. `tweet.type` değeri
  `text` olur.
- Analiz edilen her metin, analiz edilen bir gönderiyle aynı $0.0003 tutar.
- `texts` ayarlıysa çalıştırma yalnızca bu metinleri analiz eder. X hedeflerini
  ayrı çalıştır.

## Tweet duygu analizi ne kadar tutar?

Xquik'in X Tweet Sentiment Analysis'i analiz edilen gönderi başına $0.0003'ten
başlar. Başlatma ücreti almaz. Fiyata toplama ve yapay zeka maliyetleri
dahildir. Yapay zeka hesabı, token veya anahtar gerekmez. Fiyat gönderi başına
en fazla 8 soruyu ve 64.000 bayt bağlamı kapsar. Her soru tanımı en fazla 8.000
bayt olabilir.

Veri çekme filtreleri ve tekilleştirme analizden önce çalışır. Filtrelenen veya
tekrarlanan satırlar için asla ödemezsin. Başarısız analizlerin, atlanan
analizlerin ve tanılama satırlarının sonuç ücreti yok. Apify işlem, depolama ve
aktarım kullanımını planının ücretleriyle ayrıca faturalandırır. Pricing
sekmesi bunu gösterir.

## Girdi ve çıktı örnekleri

Yukarıdaki girdiyi olduğu gibi kopyalayabilirsin. Kısaltılmış bir çıktı satırı
şöyle görünür:

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

Her sonuçta `tweet` ve `analysis` bulunur. Cevaplarda türler, soru sürümleri ve
varsa olasılıklar yer alır. Analizi başarısız olan veya atlanan bir satır,
toplanan gönderiyi ve bir `reason` alanını tutar. Cevap listesi boştur.

Anahtar-değer deposundaki ücretsiz tanılamalar geçersiz girdileri, eksik
sonuçları ve kesilen toplamayı açıklar. Çalıştırma raporu toplanan satırları,
ücretlendirilen analizleri ve bekleyen ücretleri ayrı tutar.

## Çalıştırma özeti ve düz cevaplar

Bir çalıştırma 4 durumda anahtar-değer deposuna bir `analysis-summary` kaydı
yazar:

- Bir sorunla karşılaşırsa veya büyükse.
- Bir serinin ilk çalıştırması olarak `monitor` alanını `baselineDatasetId`
  olmadan ayarlarsa.
- Karşılaştırması değişen, yeni veya karşılaştırılamayan bir gönderi bulursa.
- `alwaysSaveRunRecords` açıksa.

Diğer çalıştırmalar bu kaydı atlar. Durumları en önemli cevabı söyler, örneğin
`Top sentiment: positive in 3 of 5 results.` Değişiklik bulmayan bir
karşılaştırma `No change since the earlier run.` yazar. Sorunla karşılaşan veya
büyük bir çalıştırma `run-report` da yazar. `alwaysSaveRunRecords` açık olan
bir çalıştırma da yazar. `run-report` özeti `results.analysisSummary` altında
tekrarlar.

Özet analiz edilen, başarısız ve atlanan satırları sayar. Etkileşimi toplar ve
her soruyu özetler.

- `sentiment` dağılımı, her tutuma kaç gönderinin düştüğünü gösterir.
- `engagementShares` aynı dağılımı beğeni, yeniden gönderi, yanıt ve alıntıya
  göre ağırlıklandırır.
- `top` her tutum için en çok etkileşim alan 3 gönderiyi listeler.
- Her satır, bağlantı verdiği alan adlarını `sourceDomains` içinde listeler.
- Her satır, metnindeki `$NVDA` gibi `cashtags` değerlerini listeler.
- `monitor.baselineDatasetId` ayarlıysa özetin `monitor` bloğu karşılaştırma
  durumlarını sayar. En fazla 50 değişen satırı listeler.

Özet sayıları 4 ondalık basamağa yuvarlar. Boş bir çalıştırma 0 sayılar ve
`null` ortalamalar bildirir.

Her sonuç satırı ayrıca soru ID'sine göre anahtarlanmış düz bir eşlem olan
`answers` alanını taşır. Her değer seçilen kategori, puan veya olasılıktır.
`Flat answers` veri kümesi görünümü ve CSV ya da Excel dışa aktarımları her soru
için 1 sütun gösterir. Sütunlar gönderinin yanında durur, bu yüzden tablolarda
JSON ayrıştırmaya gerek kalmaz. Başarısız ve atlanan satırlarda eşlem boştur.

## Önceki bir çalıştırmayla karşılaştır

Aynı analiz ayarlarıyla tamamlanmış önceki bir çalıştırmanın veri kümesi ID'sini
`monitor.baselineDatasetId` olarak gönder. Karşılaştırma o çalıştırmanın
satırlarını okur. O çalıştırma özetini atlamış olsa bile çalışır. Ardından her
satıra bir `monitor` nesnesi eklenir. Durumu şunlardan biri olabilir:

- Temel çalıştırma yoksa `first_run`.
- Önceki çalıştırmada olmayan gönderiler için `new_to_baseline`.
- Önceki çalıştırmada olan gönderiler için `unchanged` veya `changed`.

`changes`, `previous` değerinden `current` değerine geçen her duygu durumu,
yoğunluk düzeyi veya alaycılık kararını listeler. Kararlar kategoriye,
yuvarlanmış puan düzeyine veya 0,5'teki evet/hayır eşiğine göre karşılaştırılır.
Bir karar yalnızca belirgin biçimde değiştiğinde değişmiş sayılır. Çalıştırmalar
arasındaki küçük farklar `unchanged` kalır.

`maxBaselineRows` değerini aşan veya farklı ayarlardan gelen bir temel
çalıştırma, çalıştırmayı toplamadan önce durdurur. Çalıştırma sonra bir
tanılama satırı yazar. `maxBaselineRows` varsayılan olarak 100.000'dir.

## Görev örnekleri

50 herkese açık görevden birini seç. Her görev gerçek bir İngilizce aramayla ve
sınırlı bir `maxItems` ile başlar. Hazır hedefler, bağlam ve genel bakış veri
kümesi görünümü içerir. Çalıştırmadan önce aramayı veya hedefleri düzenle.

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

Kalan görevler Actor sayfasında daha çok markayı, konuyu ve pazarı kapsar.

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
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): Sıralama,
  hacim, sorgu ve WOEID ile konuma göre gerçek zamanlı gündemi kazır. Nerede
  neyin gündemde olduğunu takip ettiğinde kullan. Gündem başlığı başına
  $0.00015'ten başlar.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): Uzun biçimli
  X Makalelerini kapak, yazar, tarih ve metriklerle Markdown ve metin olarak
  kazır. Gönderi değil, makale gövdesi gerektiğinde kullan. Makale başına
  $0.00015'ten başlar.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): Gönderilerden
  veya profillerden fotoğrafları, videoları ve GIF'leri MP4 ve metadata
  seçenekleriyle çıkarır veya depolar. Medya dosyalarının kendisine ihtiyacın
  olduğunda kullan. Medya satırı başına $0.00015'ten başlar.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  Markadan bahseden gönderileri yapay zeka destekli ilgi, duygu durumu ve
  müşteri deneyimi cevaplarıyla izler. Çalıştırmaları da karşılaştırır. Bir
  markayı zaman içinde takip ettiğinde kullan. Analiz edilen gönderi başına
  $0.0003'ten başlar.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  Yapay zeka ile yükseliş, düşüş, nötr veya karışık duruşu, içerik türünü,
  kesinliği ve varlık ilgisini etiketler. Hisse senedi, kripto veya alım satım
  konuşmalarını takip ettiğinde kullan. Analiz edilen gönderi başına
  $0.0003'ten başlar.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  Yapay zeka ile haber gönderilerini biçim, kaynak atfı ve konu ilgisine göre
  etiketler. Haberi yorumdan ayırdığında kullan. Analiz edilen gönderi başına
  $0.0003'ten başlar.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  Yapay zeka ile her gönderi için kendi kategori, puan ve evet/hayır
  sorularını cevaplar. Hazır analizler etiketlerine uymadığında kullan. Analiz
  edilen gönderi başına $0.0003'ten başlar.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer):
  Yapay zekanın 8 özellik cevabından her gönderi için 0 ile 100 arasında bir
  Viral Score ve bir karar tahmin eder. Gönderilerin neden yayıldığını veya
  tutmadığını incelediğinde kullan. Analiz edilen gönderi başına $0.0003'ten
  başlar.

## SSS ve destek

### Yapay zeka hesabı, X API anahtarı veya giriş gerekir mi?

Hayır. Xquik'in X Tweet Sentiment Analysis'i yapay zeka maliyetlerini fiyatına
katar. Yapay zeka hesabı, token veya anahtar gerekmez. X API anahtarı, giriş
veya kimlik bilgisi de gerekmez.

### Kendi sorularımı kullanabilir miyim?

Evet. Özel `analysis.questions` varsayılan soruların yerini alır. 1 ile 8
arasında `choice`, `score` veya `probability` sorusu gönder. Seçim soruları 2
ile 255 arasında kategori kabul eder. Puan sorularında en az 2 sıralı düzey
olmalı. Karşılaştırmak istediğin çalıştırmalarda aynı soruları kullan.

### Bir satır neden `analysis.status` değeri `failed` veya `skipped` olarak döndü?

Actor gönderiyi topladı ve teslim etti, ama yapay zeka analizi tamamlanmadı.
`analysis.reason` nedeni belirtir. `context_limit`, bağlamının ve hedeflerinin
gönderiye yer bırakmadığı anlamına gelir. `service_unavailable`, analiz
hizmetine kısa bir süre erişilemediği anlamına gelir. Bu satırların sonuç ücreti
yok. `analysis.context` alanını kısalt ya da etkilenen ID'leri yeniden
çalıştır.

Actor, `maxContextBytes` değerinden uzun bir gönderiyi de analiz eder. Önce
alıntılanan ve yanıtlanan gönderileri, sonra gönderinin kendisini kısaltır. Bu
durumda `analysis.contextAvailability.postText` değeri `truncated` olur. Daha
çok metin tutmak için `maxContextBytes` değerini 64.000'e kadar yükselt.

### Analiz doğruluk kontrolü yapar mı?

Hayır. Cevaplar, gönderinin ne ifade ettiğini ve bunu nasıl çerçevelediğini
anlatır. Olasılıklar yapay zekanın güvenini gösterir, doğruluğu değil. Önemli
sınıflandırmaları her satırda duran orijinal gönderiyle karşılaştır.

### Hangi diller çalışır?

Veri çekme, X'in sunduğu her dili destekler. Analizi önce İngilizce müşteri
senaryolarında doğruluyoruz. Desteklenen diğer diller aynı yapıda cevap
döndürür. `unclear` kategorileri ve olasılıklar her dilde belirsizliği gösterir.

### Maliyeti nasıl sınırlarım?

Filtreler, tekilleştirme ve `maxItems` analizden önce çalışır. Yalnızca
benzersiz ve filtrene uyan gönderiler için ödersin. Kesin arama operatörleri,
tarih sınırları ve etkileşim alt sınırları kullan. Büyük bir çalıştırmadan önce
cevap kalitesini görmek için küçük bir `maxItems` ile başla.

### X verisini analiz etmek yasal mı?

Actor herkese açık X alanlarını çeker. Sonuçlarda kişisel veri olabilir.
Amacının yasal olduğundan emin ol ve geçerli gizlilik kurallarına uy. Emin
değilsen yetkin bir hukukçuya danış.

### API'yi, zamanlamaları ve entegrasyonları kullanabilir miyim?

Evet. Python, JavaScript ve cURL örnekleri için
[API sekmesine](https://apify.com/xquik/x-tweet-sentiment-analysis/api) bak.
Düzenli çalıştırmalar için Apify
[zamanlamalarını](https://docs.apify.com/platform/schedules) kullan. Neyin
değiştiğini görmek için önceki veri kümesi ID'sini `monitor.baselineDatasetId`
olarak gönder. Apify entegrasyonları çalıştırmaları webhook'lara, Make, Zapier,
n8n ve Google Sheets'e de bağlar.

### Nereden yardım alırım?

Actor sayfasında bir issue aç ya da çalıştırma ID'siyle support@xquik.com
adresine yaz. Anahtar-değer deposundaki ücretsiz tanılamalar boş, kısmi veya
kesilen çalıştırmaları açıklar.
