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
scraper hizmetidir. X (Twitter) Stock & Crypto AI Trading Signals, tweet'leri
her hisse ve para birimi için yükseliş, düşüş, nötr veya karışık duruşlara
dönüştürür. Diğer tüm Apify Actor'ları filtreleme veya tekilleştirmeden önce
ücret alır. Xquik yalnızca teslim edilen, benzersiz, filtreyle eşleşen sonuçlar
için ücret alır. Yapay zekâ maliyetleri tweet başına fiyata dahil. Yapay zekâ
hesabına, token'a veya anahtara ihtiyacın yok.

X (Twitter)'daki hisse senedi, kripto ve alım satım gönderilerinin arkasındaki
duruşu oku ve orijinal tweet verisini sakla. **X (Twitter) Stock & Crypto AI
Trading Signals**, hisselerinle veya varlıklarınla ilgili gönderileri toplar.
Ardından her gönderiye yapay zeka destekli bir duruş, içerik türü, kesinlik
seviyesi & varlık ilgisi ekler. Kesin çağrıları korunaklı sözlerden, analizi
tanıtımdan, ve varlığınla ilgili gönderileri isminin ilgisiz kullanımlarından
ayır.

- **Gönderi başına duruş.** Her gönderi yükseliş, düşüş, nötr, karışık veya
  belirsiz olur.
- **İçerik türü**, analizi, haberleri, alım satım fikirlerini, tanıtımı, mizahı
  ve soruları birbirinden ayırır.
- **Kesinlik**, kesin çağrıları ve pozisyonları korunaklı sözlerden ayırır.
- **İlgi**, bir hisse senedi veya şirket isminin ilgisiz kullanımlarını
  filtreler.
- **Eksiksiz kaynak kayıtları**, tweet'in gösterdiği her alan için.

## X'te piyasa duyarlılığı nasıl analiz edilir

1. `$NVDA lang:en -filter:retweets` gibi arama terimleri, cashtag sorguları,
   profil handle'ları veya tweet ID'leri ekle.
2. `maxItems`'i ve tarih sınırları veya minimum beğeni gibi çıkarma
   filtrelerini ayarla.
3. Varlık isimlerini, hisse kodlarını ve takma adları `analysis.targets`
   altına koy ve varlığı `analysis.context`'te tanımla.
4. Actor'ı çalıştır ve veri kümesini aç.

```json
{
  "searchTerms": ["$NVDA lang:en -filter:retweets"],
  "maxItems": 500,
  "analysis": {
    "targets": [{ "name": "Nvidia", "aliases": ["NVDA", "$NVDA"] }],
    "context": "The chip maker as a listed stock."
  }
}
```

### Actor neyi yanıtlar

| Soru         | Yanıt                                                          |
| -------------- | ------------------------------------------------------------------ |
| Duruş           | Yükseliş, düşüş, nötr, karışık veya belirsiz                       |
| İçerik          | Analiz, haber, alım satım, tanıtım, mizah, soru veya belirsiz      |
| Kesinlik        | 0 korunaklı söz, 1 belirtilmiş görüş, 2 kesin çağrı veya pozisyon  |
| İlgi            | Gönderinin hedeflerini varlık olarak ele alma olasılığı            |

Yanıtlar, yazarların ifade ettiklerini açıklar. Yatırım tavsiyesi değildir
ve iddiaları, fiyatları veya dosyalamaları doğrulamaz.

## Kendi metnini analiz et

Kendi metnini `texts` alanına yapıştır: taslaklar, yanıtlar, değerlendirmeler
veya notlar. Actor metni analiz eder & X'ten hiçbir şey getirmez.

```json
{
  "texts": [
    "$NVDA guidance beat again. I am adding on any dip below 900.",
    "Not touching $BTC until the ETF flows turn positive."
  ]
}
```

- Her metin, bir tweet ile aynı `analysis` yanıtlarını taşıyan 1 satır olur.
- `tweet.id` değeri `text:1`, `text:2` & devamı şeklindedir, `tweet.type` ise
  `text` olur.
- Analiz edilen her metin, analiz edilen bir tweet gibi $0.0003 tutar.
- `texts` ayarlıyken çalıştırma yalnızca o metinleri analiz eder. X hedeflerini
  ayrı çalıştır.

## Fiyatlandırma

Yapay zekâ maliyetleri tweet başına fiyata dahil. Yapay zekâ hesabına, token'a
veya anahtara ihtiyacın yok.

Başlangıç ücreti olmadan, başarıyla analiz edilen tweet başına $0.0003'ten
başlar. Fiyata toplama dahil. Analiz ödeneği 8 soru, soru tanımı başına 8.000
bayt & tweet başına 12.000 bayt bağlamdır. Çıkarma filtreleri ve tekilleştirme
analizden önce çalışır, bu yüzden filtrelenmiş ve tekrarlanan satırlar hiçbir
zaman analiz edilmez veya ücretlendirilmez. Başarısız ve atlanan analizler ile
tanılama satırlarının sonuç ücreti yoktur. Apify, platform kullanımını ayrıca
faturalandırır. Pricing sekmesi bunu gösterir.

## Girdi ve çıktı örnekleri

Yukarıdaki girdi kopyalamaya hazırdır. Çıktı satırları şöyle görünür
(kısaltılmış):

```json
{
  "tweet": { "id": "2100692112916574711", "text": "…", "likeCount": 31 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      {
        "questionId": "stance",
        "type": "choice",
        "value": "bullish",
        "confidence": 0.86
      },
      {
        "questionId": "content",
        "type": "choice",
        "value": "analysis",
        "confidence": 0.79
      },
      {
        "questionId": "conviction",
        "type": "score",
        "value": 1,
        "confidence": 0.7
      },
      { "questionId": "relevance", "type": "probability", "probability": 0.95 }
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
çalıştırma raporunda `results.analysisSummary` altında tekrarlar. Analiz edilen,
başarısız ve atlanan satırları sayar, etkileşimi toplar ve her soruyu özetler.
`cashtags`, `$NVDA` gibi cashtag başına duruşu sayar, bu yüzden varlık başına
yükseliş oranı `choices.stance`'ten gelir. `stance` bloğu, etkileşim ağırlıklı
bölünmeyi ve en çok etkileşim alan yükseliş ve düşüş gönderilerini ekler.
`conviction`, ortalamayı & etkileşim ağırlıklı ortalamayı bildirir. Özet,
sayıları 4 ondalık basamağa yuvarlar. Boş bir çalıştırma sıfır sayım & `null`
ortalama bildirir. Her `cashtags` girişi `signal` ekler. `signal` bir yükseliş
sayısı, bir düşüş sayısı & -1 ile 1 arası bir puan içerir. Puan, (yükseliş -
düşüş) / satır değerine eşittir. `monitor.changedRows`, duruşu temel değerden bu
yana hareket eden tweet'leri listeler. Her satır, bağlantı verdiği ana
bilgisayar adlarını `sourceDomains`'te listeler. `monitor.baselineDatasetId`
ayarlıyken özetin `monitor` bloğu karşılaştırma durumlarını sayar & 50'ye kadar
değişen satırı listeler.

Her sonuç satırı ayrıca `answers`'ı da taşır. Bu, soru ID'sinden seçilen
kategoriye, puana veya olasılığa düz bir eşlemedir. `Flat answers` veri kümesi
görünümü ve CSV veya Excel dışa aktarımları, tweet'in yanında soru başına bir
sütun gösterir, böylece elektronik tablolar JSON ayrıştırmasına ihtiyaç duymaz.
Başarısız ve atlanan satırlar boş bir eşleme taşır.

## Önceki bir çalıştırmayla karşılaştır

Aynı analiz ayarlarına sahip tamamlanmış önceki bir çalıştırmanın veri kümesi
ID'si olan `monitor.baselineDatasetId`'yi geçir. Böylece her satır bir `monitor`
nesnesi kazanır. Durumu, temel değer yoksa `first_run`, önceki çalıştırmada
bulunmayan tweet'ler için `new_to_baseline` & bulunan tweet'ler için `unchanged`
veya `changed` olur. `changes`, `previous`'tan `current`'a taşınan her duruş,
içerik türü veya kesinlik seviyesini listeler. Kararlar kategoriye, yuvarlanmış
puan seviyesine veya 0,5'te evet/hayır'a göre karşılaştırılır. Bir karar
yalnızca belirgin biçimde değiştiğinde değişmiş sayılır. Çalıştırmalar
arasındaki yakın-berabere titremeler değişmemiş kalır. `maxBaselineRows`'un
(varsayılan 100.000) üzerindeki veya farklı ayarlardan gelen temel değerler,
toplamadan önce bir tanılama satırıyla çalıştırmayı durdurur.

## Görev örnekleri

50 herkese açık görevden seç. Her biri sınırlı bir `maxItems`, hazır
hedefler ve bağlam ile gerçek bir İngilizce aramayla başlar, ve genel bakış
veri kümesi görünümüyle gelir. Çalıştırmadan önce aramayı veya hedefleri
düzenle.

- [Nvidia (NVDA) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/nvda-market-sentiment-on-x)
- [Tesla (TSLA) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/tsla-market-sentiment-on-x)
- [Apple (AAPL) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/aapl-market-sentiment-on-x)
- [Amazon (AMZN) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/amzn-market-sentiment-on-x)
- [Microsoft (MSFT) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/msft-market-sentiment-on-x)
- [Alphabet (GOOGL) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/googl-market-sentiment-on-x)
- [Meta (META) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/meta-market-sentiment-on-x)
- [AMD (AMD) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/amd-market-sentiment-on-x)
- [Palantir (PLTR) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/pltr-market-sentiment-on-x)
- [Coinbase (COIN) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/coin-market-sentiment-on-x)
- [Strategy (MSTR) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/mstr-market-sentiment-on-x)
- [Robinhood (HOOD) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/hood-market-sentiment-on-x)

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
  takipçilerini kazır. Aramalar yerine hesaplardan başladığında kullan. Satır
  başına $0.00015'ten başlar.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): 25'ten fazla
  filtreyle gönderilerin altındaki yanıtları, yorumları ve tüm konuşmaları
  kazır. Tweet'lerin altındaki tartışmaya ihtiyacın olduğunda kullan. Satır
  başına $0.00015'ten başlar.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): Gönderi
  URL'leri veya ID'leri için toplu olarak yanıtları, alıntıları, retweet
  edenleri ve thread'leri kazır. Gönderilerle kimin etkileşime
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
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  Yapay zeka destekli ilgi, duygu durumu ve müşteri deneyimi yanıtlarıyla marka
  bahsedilmelerini izler ve çalıştırmaları karşılaştırır. Bir markayı zaman
  içinde takip ettiğinde kullan. Analiz edilen tweet başına $0.0003'ten başlar.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  Yapay zeka ile her tweet için tutum, yoğunluk ve alaycılık olasılığını
  etiketler. Herhangi bir konuda genel duygu durumuna ihtiyacın olduğunda
  kullan. Analiz edilen tweet başına $0.0003'ten başlar.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  Yapay zeka ile haber gönderilerini biçim, kaynak atfı ve konu ilgisine göre
  etiketler. Haberi yorumdan ayırdığında kullan. Analiz edilen tweet başına
  $0.0003'ten başlar.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  Yapay zeka ile her tweet için kendi kategori, puan ve evet/hayır sorularını
  yanıtlar. Hazır analizler etiketlerine uymadığında kullan. Analiz edilen
  tweet başına $0.0003'ten başlar.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer):
  Yapay zekanın 8 özellik yanıtından her tweet için 0 ile 100 arasında bir
  Viral Score ve bir karar tahmin eder. Tweet'lerin neden yayıldığını veya
  tutmadığını incelediğinde kullan. Analiz edilen tweet başına $0.0003'ten
  başlar.

## SSS ve destek

### Tek bir çalıştırmada birkaç hisse kodunu takip edebilir miyim?

Evet. Her varlığı hisse kodları ve takma adlarıyla `analysis.targets`
altında listele, ve arama terimlerini birleştir. İlgi yanıtları, hangi
gönderilerin hedeflerini varlık olarak ele aldığını söyler.

### Bir satır neden `analysis.status`'u `failed` veya `skipped` olarak döndü?

Actor tweet'i topladı & teslim etti, ancak yapay zeka analizi tamamlanmadı.
`analysis.reason`, tweet ve bağlamı `maxContextBytes`'ı aştığında
`context_limit` veya analiz hizmeti kısa süre kullanılamadığında
`service_unavailable` gibi nedeni adlandırır. Bu satırların sonuç ücreti yoktur.
`maxContextBytes`'ı (12.000'e kadar) artır veya etkilenen ID'leri yeniden
çalıştır.

### Analiz gerçekleri doğrular mı?

Hayır. Yanıtlar, gönderinin neyi ifade ettiğini & bunu nasıl çerçevelediğini
açıklar. Olasılıklar model güvenini ifade eder, gerçeği değil. Önemli
sınıflandırmaları, her satırın koruduğu orijinal tweet'e karşı gözden geçir.

### Hangi diller çalışır?

Çıkarma, X'in sunduğu her dili destekler. Analizi önce İngilizce müşteri
senaryolarında doğruluyoruz. Diğer desteklenen diller aynı yapıda yanıtlar
döndürür. `unclear` kategorileri & olasılıklar belirsizliği her dilde gösterir.

### Maliyeti nasıl sınırlarım?

Filtreler, tekilleştirme ve `maxItems` analizden önce çalışır, bu yüzden Actor
yalnızca benzersiz, filtreyle eşleşen tweet'leri analiz eder & ücretlendirir.
Kesin arama operatörleri, tarih sınırları ve etkileşim tabanları kullan, ve
büyük bir çalıştırmadan önce yanıt kalitesini kontrol etmek için küçük bir
`maxItems` ile başla.

### Yardımı nereden alırım?

Actor sayfasında bir sorun aç veya çalıştırma ID'siyle
support@xquik.com ile iletişime geç. Anahtar-değer deposundaki ücretsiz
tanılamalar boş, kısmi veya kesintiye uğramış çalıştırmaları açıklar.

Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
"Twitter" ve "X", X Corp'un ticari markalarıdır.
