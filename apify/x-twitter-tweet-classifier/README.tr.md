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
scraper hizmetidir. X (Twitter) Tweet Classifier, her tweet'te kendi
etiketlerini, puanlarını ve evet/hayır sorularını yanıtlar. Diğer tüm Apify
Actor'ları filtreleme veya tekilleştirmeden önce ücret alır. Xquik yalnızca
teslim edilen, benzersiz, filtreyle eşleşen sonuçlar için ücret alır. Yapay zekâ
maliyetleri tweet başına fiyata dahil. Yapay zekâ hesabına, token'a veya
anahtara ihtiyacın yok.

X (Twitter) gönderilerini kendi sorularınla sınıflandır ve orijinal tweet
verisini sakla. **X Tweet Classifier with AI Analysis**, eşleşen tweet'leri
toplar, ardından gönderi başına 1-8 tipli soruyu yanıtlar: destek
önceliklendirmesi için kategoriler, önceliklendirme için puanlar ve ilgi için
olasılıklar. Hazır ayarlar marka izleme, şikayetler, rakipler, satın alma
niyeti, ürün geri bildirimi, haberler, duygu durumu & piyasa duyarlılığını
kapsar. Özel sorular bunların yerini alır.

- **Tipli yanıtlar**, olasılıklar, güven ve soru sürümleriyle.
- **Kendi soruların, kendi kategorilerin.** Her soru 255'e kadar kategori alır.
- **Eksiksiz kaynak kayıtları**, tweet'in gösterdiği her alan için.
- **Önce filtreleyen faturalandırma.** Yalnızca analizi başarılı olan benzersiz,
  filtreyle eşleşen tweet'ler için ödersin.

## Özel sorularla tweet'ler nasıl sınıflandırılır

1. Tweet URL'leri, arama terimleri, profil handle'ları veya tweet ID'leri
   ekle.
2. `maxItems`'i ve görevinin ihtiyaç duyduğu çıkarma filtrelerini ayarla.
3. Sorularını `analysis.questions` altına ekle, ya da `analysis.preset` ile
   hazır bir ayar seç.
4. Actor'ı çalıştır ve veri kümesini aç.

Desteklenen modlar tweet'leri, aramaları, profil gönderilerini, Listeleri,
yanıtları, alıntıları ve thread'leri toplar. Bağımsız makale çıkarma ve
kullanıcı listeleri sınıflandırma girdisi değildir.

```json
{
  "searchTerms": ["\"need a recommendation\" headphones lang:en"],
  "maxItems": 20,
  "analysis": {
    "questions": [
      {
        "id": "buying",
        "type": "probability",
        "version": "1",
        "instructions": "Does the author want to buy headphones?"
      }
    ],
    "targets": [{ "name": "headphones", "aliases": ["headset"] }],
    "context": "Exclude advertisements aimed at other buyers."
  }
}
```

### Sorular ve sınırlar

Benzersiz ID'leri, talimatları ve sürümleri olan 1-8 soru sağla.

- `choice`, açıklamalı veya null değerli 2-255 adlandırılmış `categories`
  kullanır.
- `score`, en az 2 açıklama içeren sıralı bir `levels` dizisi kullanır.
- `probability`, 0 ile 1 arasında bir değer döndürür. İsteğe bağlı
  `criteria`, `yes` ve `no` açıklamaları içerir.

Hazır ayarlar: `brand`, `complaints`, `competitors`, `purchase_intent`,
`product_feedback`, `news`, `sentiment` ve `market`. `maxContextBytes`
varsayılan olarak 12.000 bayttır. Daha küçük bir sınır, kesme yapmadan aşırı
büyük bağlamı atlar. `concurrency` varsayılan olarak 16'dır ve 1 ile 16 arasını
kabul eder. Her soru tanımı 8.000 baytlık bir ödenek içinde kalır.

## Kendi metnini analiz et

Kendi metnini `texts` alanına yapıştır: taslaklar, yanıtlar, değerlendirmeler
veya notlar. Actor metni analiz eder & X'ten hiçbir şey getirmez.

```json
{
  "texts": [
    "The new update is great, but sync still drops on mobile.",
    "Support fixed my issue in 10 minutes. Thank you."
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
  "tweet": { "id": "2100344867507327087", "text": "…", "likeCount": 6409 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      {
        "questionId": "topic",
        "type": "choice",
        "value": "ai_safety",
        "confidence": 0.93
      },
      {
        "questionId": "disclosure",
        "type": "probability",
        "probability": 0.97
      },
      {
        "questionId": "specificity",
        "type": "score",
        "value": 2,
        "confidence": 0.88
      }
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
Her özel soru kendi bloğunu alır: choice soruları için kategori sayıları ve
payları, score soruları için ortalama ve seviye sayıları, evet/hayır soruları
için evet ve hayır sayıları. Özet, sayıları 4 ondalık basamağa yuvarlar. Boş bir
çalıştırma sıfır sayım & `null` ortalama bildirir. Özel sorular yerine yerleşik
bir mercek çalıştırmak için `analysis.preset`'i `brand`, `complaints`,
`purchase_intent`, `product_feedback`, `competitors`, `sentiment`, `market` veya
`news` ile geçir. Özet daha sonra bu merceği soru başına bildirir. Her satır,
bağlantı verdiği ana bilgisayar adlarını `sourceDomains`'te & metninde bulunan
`$NVDA` gibi `cashtags`'i listeler. `monitor.baselineDatasetId` ayarlıyken
özetin `monitor` bloğu karşılaştırma durumlarını sayar & 50'ye kadar değişen
satırı listeler.

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
veya `changed` olur. `changes`, `previous`'tan `current`'a taşınan sorularından
herhangi biri için hareket eden her kararı listeler. Kararlar kategoriye,
yuvarlanmış puan seviyesine veya 0,5'te evet/hayır'a göre karşılaştırılır. Bir
karar yalnızca belirgin biçimde değiştiğinde değişmiş sayılır. Çalıştırmalar
arasındaki yakın-berabere titremeler değişmemiş kalır. `maxBaselineRows`'un
(varsayılan 100.000) üzerindeki veya farklı ayarlardan gelen temel değerler,
toplamadan önce bir tanılama satırıyla çalıştırmayı durdurur.

## Görev örnekleri

50 herkese açık görevden seç. Her biri sınırlı bir `maxItems`, hazır özel
sorular ve genel bakış veri kümesi görünümüyle gerçek bir İngilizce aramayla
başlar. Çalıştırmadan önce aramayı veya soruları düzenle.

- [Triage customer support requests on X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/triage-support-requests-on-x)
- [Score sales leads from X posts](https://apify.com/xquik/x-twitter-tweet-classifier/examples/score-sales-leads-from-x-posts)
- [Detect service outage reports on X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/detect-outage-reports-on-x)
- [Classify hiring signals on X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-hiring-signals-on-x)
- [Tag product feature requests on X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/tag-feature-requests-on-x)
- [Classify app feedback like store reviews](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-app-store-style-feedback)
- [Detect scam and fraud warnings on X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/detect-scam-warnings-on-x)
- [Classify event attendance intent](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-event-attendance-intent)
- [Extract restaurant review signals](https://apify.com/xquik/x-twitter-tweet-classifier/examples/extract-restaurant-review-signals)
- [Separate crypto promotion from analysis](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-crypto-scam-vs-analysis)
- [Classify persuasive political posts](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-political-ad-style-posts)
- [Detect subscription churn risk signals](https://apify.com/xquik/x-twitter-tweet-classifier/examples/detect-churn-risk-signals)

Kalan görevler, Actor sayfasında daha fazla iş akışını kapsar.

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
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  Yapay zeka ile yükseliş, düşüş, nötr veya karışık duruşu, içerik türünü,
  kesinliği ve varlık ilgisini etiketler. Hisse senedi, kripto veya alım satım
  konuşmalarını takip ettiğinde kullan. Analiz edilen tweet başına $0.0003'ten
  başlar.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  Yapay zeka ile haber gönderilerini biçim, kaynak atfı ve konu ilgisine göre
  etiketler. Haberi yorumdan ayırdığında kullan. Analiz edilen tweet başına
  $0.0003'ten başlar.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer):
  Yapay zekanın 8 özellik yanıtından her tweet için 0 ile 100 arasında bir
  Viral Score ve bir karar tahmin eder. Tweet'lerin neden yayıldığını veya
  tutmadığını incelediğinde kullan. Analiz edilen tweet başına $0.0003'ten
  başlar.

## SSS ve destek

### Soru sürümleri önemli mi?

Evet. Her yanıt, sorusuna verdiğin `version` değerini saklar. Soruları zaman
içinde geliştirdiğinde hangi ifadenin bir sonucu ürettiğini anlayabilirsin.

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
