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

# X (Twitter) News Monitor with AI Analysis | $0.3/1K Tweets

<table align="center"><tr><td align="center">
<a href="https://youtu.be/4UOSpoOoC3Y?t=367"><img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" width="720" alt="Framer, Xquik MCP'yi kodlama ajanlarına bağlıyor"></a><br>
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">Framer'ın Xquik scraper'larını Claude Code, Codex, Cursor ve daha fazlasıyla nasıl kullandığını 6:07'den itibaren izle.</a>
</td></tr></table>

Xquik, en eksiksiz X verisine sahip, dünyanın en hızlı ve en ucuz X (Twitter)
scraper hizmetidir. X (Twitter) News Monitor, haber gönderilerini biçim,
kaynak atfı ve ilgiye göre sıralar. Diğer tüm Apify Actor'ları filtreleme
veya tekilleştirmeden önce ücret alır. Xquik yalnızca teslim edilen,
benzersiz, filtreyle eşleşen sonuçlar için ücret alır.

X (Twitter)'daki haber gönderilerini ne olduklarına göre sırala ve orijinal
tweet verisini sakla. **X (Twitter) News Monitor with AI Analysis**,
konularınla ilgili gönderileri toplar, ardından her gönderiye yapay zeka
destekli bir biçim, kaynak atfı ve ilgi yanıtı ekler. Haberciliği yorum ve
spekülasyondan ayır, bir kaynağın adlandırılıp adlandırılmadığını veya
bağlantı verilip verilmediğini gör, ve yalnızca izlediğin kuruluşlar,
kişiler veya konularla ilgili gönderileri sakla.

- **Biçim**, haberciliği, yorumu, spekülasyonu, tanıtımı ve hicvi birbirinden
  ayırır.
- **Atıf**, bir iddianın bir kaynağı adlandırıp adlandırmadığını, bağlantı
  verip vermediğini, ilk elden mi yoksa hiç mi olmadığını gösterir.
- **İlgi**, hedeflerinle ilgili gönderileri saklar ve aynı isimleri
  düşürür.
- **Eksiksiz kaynak kayıtları**, mevcut olduğunda bağlantılı makaleler
  dahil tweet'in gösterdiği her alan için.

## X'te haber gönderileri nasıl sınıflandırılır

1. `Nvidia earnings lang:en -filter:retweets` gibi arama terimleri, haber
   hesabı handle'ları veya tweet ID'leri ekle.
2. `maxItems`'i ve tarih sınırları, `filter:news` veya minimum yeniden
   paylaşım gibi çıkarma filtrelerini ayarla.
3. İzlediğin kuruluşları, kişileri veya konuları ve onların takma adlarını
   `analysis.targets` altına koy, ve konuyu `analysis.context`'te
   daralt.
4. Actor'ı çalıştır ve veri kümesini aç.

```json
{
  "searchTerms": ["Nvidia earnings lang:en -filter:retweets"],
  "maxItems": 300,
  "analysis": {
    "targets": [{ "name": "Nvidia", "aliases": ["NVDA", "Jensen Huang"] }],
    "context": "Financial & product news about the chip maker."
  }
}
```

### Actor neyi yanıtlar

| Soru        | Yanıt                                                                       |
| ------------- | ------------------------------------------------------------------------------ |
| Biçim         | Haberler, yorum, spekülasyon, tanıtım, hiciv, ilgisiz veya belirsiz            |
| Atıf          | Adlandırılmış, bağlantılı, ilk elden, yok veya belirsiz                         |
| İlgi          | Bildirilen olayın hedeflerinle ilgili olma olasılığı                            |

Sınıflandırma gerçekleri doğrulamaz. Adlandırılmış bir kaynak, güvenilir
bir kaynak değildir; atıf, gönderinin ne sunduğunu açıklar.

## Fiyatlandırma

Başlangıç ücreti olmadan, başarıyla analiz edilen tweet başına $0.0003'ten
başlar. Toplama dahildir ve belgelenen analiz ödeneği 8 soru, soru tanımı
başına 8.000 bayt ve tweet başına 12.000 bayt bağlamdır. Çıkarma filtreleri
ve tekilleştirme analizden önce çalışır, bu yüzden filtrelenmiş ve
tekrarlanan satırlar hiçbir zaman analiz edilmez veya ücretlendirilmez.
Başarısız ve atlanan analizler ile tanılama satırlarının sonuç ücreti
yoktur. Apify platform kullanımı Apify tarafından ayrıca faturalandırılır
ve Pricing sekmesinde görünür.

## Girdi ve çıktı örnekleri

Yukarıdaki girdi kopyalamaya hazırdır. Çıktı satırları şöyle görünür
(kısaltılmış):

```json
{
  "tweet": { "id": "2100673144985993441", "text": "…", "retweetCount": 40 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      {
        "questionId": "format",
        "type": "choice",
        "value": "reporting",
        "confidence": 0.9
      },
      {
        "questionId": "attribution",
        "type": "choice",
        "value": "named",
        "confidence": 0.84
      },
      { "questionId": "relevance", "type": "probability", "probability": 0.98 }
    ]
  }
}
```

Her sonuç `tweet` ve `analysis` içerir. Yanıtlar türleri, soru sürümlerini
ve mevcut olasılıkları içerir. Bir gönderi bir X Makalesine bağlantı
verdiğinde analiz, o makalenin başlığını, önizlemesini ve metin bloklarını
bağlam olarak alır, ve `analysis.contextAvailability.article`,
`text_blocks`, `summary` (yalnızca başlık ve önizleme) veya
`not_supplied` bildirir. Başarısız veya atlanan bir analiz, boş bir yanıt
listesi ve bir `reason` ile toplanan tweet'i korur. Anahtar-değer
deposundaki ücretsiz tanılamalar, geçersiz girdileri, eksik sonuçları ve
kesintiye uğrayan toplamayı açıklar, çalıştırma raporu ise toplanan
satırları, ücretlendirilen analizleri ve bekleyen ücretleri ayırır.

## Çalıştırma özeti ve düz yanıtlar

Her çalıştırma, anahtar-değer deposuna bir `analysis-summary` kaydı yazar ve
çalıştırma raporunda `results.analysisSummary` altında tekrarlar. Analiz
edilen, başarısız ve atlanan satırları sayar, etkileşimi toplar ve her
soruyu özetler. `format` bölünmesi, haberciliği yorumdan, spekülasyondan,
tanıtımdan ve hicivden ayırır; `attribution`, adlandırılmış, bağlantılı,
ilk elden ve olmayan kaynakları sayar; `relevance`, her hedefle ilgili
gönderileri sayar, `targets` hedef başına bahsedilmeleri verir ve her
hedefin `top`'u yanıt kategorisi başına en çok etkileşim alan
gönderilerini listeler. Sayılar 4 ondalık basamağa yuvarlanır; boş
çalıştırmalar sıfır sayım ve `null` ortalama bildirir. `sourceDomains`,
çalıştırma genelindeki bağlantılı alan adlarını sayar, her `targets`
girişi o hedefle ilgili gönderiler için biçim ve atıf bölünmesiyle
`choices`'ı taşır, ve `monitor.changedRows`, kararları temel değerden bu
yana hareket eden gönderileri listeler. Her satır ayrıca bağlantı verdiği
ana bilgisayar adlarını `sourceDomains`'te, metninde bulunan `$NVDA` gibi
`cashtags`'i listeler ve özetin `monitor` bloğu, `monitor.baselineDatasetId`
ayarlandığında karşılaştırma durumlarını sayar ve 50'ye kadar değişen
satırı listeler.

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
`current`'a taşınan her biçim, atıf veya ilgi kararını listeler. Kararlar
kategoriye, yuvarlanmış puan seviyesine veya 0,5'te evet/hayır'a göre
karşılaştırılır ve bir karar yalnızca yanıt açıkça hareket ettiğinde
değişmiş sayılır: önceki kategori 0,4 olasılığın altına düşer, bir puan en
az 0,6 seviye hareket eder veya bir evet/hayır olasılığı eşikten en az 0,1
uzağa düşer. Çalıştırmalar arasındaki yakın-berabere titremeler değişmemiş
kalır. `maxBaselineRows`'un (varsayılan 100.000) üzerindeki veya farklı
ayarlardan gelen temel değerler, toplamadan önce bir tanılama satırıyla
çalıştırmayı durdurur.

## Görev örnekleri

50 herkese açık görevden seç. Her biri sınırlı bir `maxItems`, hazır
hedefler ve bağlam ile gerçek bir İngilizce aramayla başlar, ve genel bakış
veri kümesi görünümüyle gelir. Çalıştırmadan önce aramayı veya hedefleri
düzenle.

- [Classify Nvidia news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-nvidia-news-posts-on-x)
- [Classify X Article news posts](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-x-article-news-posts)
- [Classify OpenAI news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-openai-news-posts-on-x)
- [Classify Apple news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-apple-news-posts-on-x)
- [Classify Tesla news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-tesla-news-posts-on-x)
- [Classify SpaceX news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-spacex-news-posts-on-x)
- [Classify Boeing news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-boeing-news-posts-on-x)
- [Classify Pfizer news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-pfizer-news-posts-on-x)
- [Classify Moderna news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-moderna-news-posts-on-x)
- [Classify ExxonMobil news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-exxon-news-posts-on-x)
- [Classify Federal Reserve news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-federal-reserve-news-posts-on-x)
- [Classify European Central Bank news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-european-central-bank-news-posts-on-x)
- [Classify Bank of England news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-bank-of-england-news-posts-on-x)

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
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  Yapay zeka destekli ilgi, duygu durumu ve müşteri deneyimi yanıtlarıyla marka
  bahsedilmelerini izler ve çalıştırmaları karşılaştırır. Bir markayı zaman
  içinde takip ettiğinde kullan. Analiz edilen tweet başına $0.0003'ten başlar.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  Yapay zeka ile her tweet için tutum, yoğunluk ve alaycılık olasılığını
  etiketler. Herhangi bir konuda genel duygu durumuna ihtiyacın olduğunda
  kullan. Analiz edilen tweet başına $0.0003'ten başlar.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  Yapay zeka ile yükseliş, düşüş, nötr veya karışık duruşu, içerik türünü,
  kesinliği ve varlık ilgisini etiketler. Hisse senedi, kripto veya alım satım
  konuşmalarını takip ettiğinde kullan. Analiz edilen tweet başına $0.0003'ten
  başlar.
- [X (Twitter) Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
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
