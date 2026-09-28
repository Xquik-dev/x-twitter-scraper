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
scraper hizmetidir. Xquik'in X (Twitter) Brand Monitoring'i markandan bahseden
gönderileri ilgi, duygu durumu ve müşteri deneyimi cevaplarıyla izler. Diğer
Apify Actor'larının çoğu, filtrelemeden veya tekilleştirmeden önce ücret alır.
Xquik yalnızca teslim edilen, benzersiz ve filtrene uyan sonuçlar için ücret
alır. Yapay zeka maliyetleri gönderi başına fiyata dahildir. Yapay zeka hesabı,
token veya anahtar gerekmez.

X (Twitter) üzerinde markandan bahseden gönderileri izle. Duygu durumundaki
değişimleri çalıştırmalar arasında takip et. Xquik'in **X (Twitter) Brand
Monitoring with AI Analysis** Actor'ı eşleşen her gönderiyi toplar. Her gönderi
için ilgi, duygu durumu ve müşteri deneyimi sorularını yapay zeka ile cevaplar.
Bu cevapları önceki bir veri kümesiyle karşılaştırır, böylece neyin değiştiğini
görürsün. Her satır orijinal gönderi verisini tutar. Dışa aktarma, inceleme ve
sonraki analizler için ikinci bir kazıma gerekmez.

Bir markayı, ürün hattını veya kampanyayı şikayetler, övgüler ve satın alma
soruları için izle. Destek ve pazarlama ekiplerini gerçek gönderilerle
bilgilendir. Her çalıştırmayla müşterilerin senden nasıl söz ettiğinin geçmişini
biriktir.

- **Kaynak gönderinin tüm alanları.** Metin, yazar, sayılar, medya, bağlantılar,
  alıntılanan ve yanıtlanan gönderiler cevapların yanında kalır.
- **Tipli cevaplar.** Her satırda bir ilgi olasılığı, olasılıklarıyla bir duygu
  durumu kategorisi ve bir müşteri deneyimi kategorisi bulunur.
- **Değişiklik takibi.** Çalıştırmalar karara göre karşılaştırılır, bu yüzden
  küçük olasılık kaymaları değişiklik sayılmaz.
- **Önce filtreleyen faturalama.** Yalnızca analizi başarılı, benzersiz ve
  filtrene uyan gönderiler için ödersin.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## X'te bir marka nasıl izlenir

1. Arama terimi, profil kullanıcı adı, gönderi URL'si veya gönderi ID'si ekle.
   Örneğin `(Sony OR "WH-1000XM5") headphones lang:en` araması yap.
2. `maxItems` değerini ve işinin gerektirdiği veri çekme filtrelerini ayarla.
   Tarih sınırları, en az beğeni sayısı ve yanıtları hariç tutma bunlara
   örnektir.
3. Marka adlarını ve takma adlarını `analysis.targets` altına yaz, markayı
   `analysis.context` içinde anlat.
4. Çalıştırmayı başlat, sonra veri kümesi ID'sini bir sonraki karşılaştırma için
   sakla.
5. Bir sonraki çalıştırmada bu ID ile `monitor.baselineDatasetId` ekle. Cevaplar
   karşılaştırılabilir kalsın diye soruları, hedefleri, bağlamı ve bağlam
   sınırlarını değiştirme. Karşılaştırma o veri kümesini okur, bu yüzden o
   çalıştırma özetini atlamış olsa bile çalışır.

```json
{
  "searchTerms": ["(Sony OR \"WH-1000XM5\") headphones lang:en"],
  "maxItems": 100,
  "analysis": {
    "targets": [
      { "name": "Sony", "aliases": ["Sony headphones", "WH-1000XM5"] }
    ],
    "context": "Consumer headphones & customer service."
  },
  "monitor": {
    "baselineDatasetId": "YOUR_PREVIOUS_DATASET_ID",
    "maxBaselineRows": 100000
  }
}
```

Hedefler sınıflandırmaya yön verir. Arama sorgusu oluşturmaz, ilgisiz
gönderileri de çıkarmaz. Araştırmana uyan arama terimleri ve filtreler seç.

### İzleme neyi cevaplar

| Soru             | Cevap                                               |
| ---------------- | --------------------------------------------------- |
| Marka ilgisi     | Gönderinin hedefini konu alma olasılığı             |
| Duygu durumu     | Olumlu, olumsuz, karışık, nötr veya belirsiz        |
| Müşteri deneyimi | Müşteri, potansiyel müşteri, gözlemci veya belirsiz |

Başka şeylerle karışabilecek adları incelemek için ilgi olasılıklarını kullan.
Duygu durumu, yazarın hedefe karşı ifade ettiği tutumu anlatır.

### Karşılaştırma nasıl çalışır

| Karşılaştırma durumu   | Anlamı                                              |
| ---------------------- | --------------------------------------------------- |
| `first_run`            | Temel veri kümesi verilmedi                         |
| `new_to_baseline`      | Bu gönderi ID'si temel veri kümesinde yoktu         |
| `unchanged`            | Karşılaştırılabilen tüm kararlar aynı               |
| `changed`              | En az 1 karar farklı                                |
| `not_comparable`       | Gerekli metadata, ID'ler veya eşleşen ayarlar eksik |
| `analysis_unavailable` | Bu gönderinin başarılı bir analizi yok              |

Karşılaştırma karara bakar. `choice` cevabında kategoriye, `score` cevabında en
yakın düzeye bakar. `probability` cevabında 0,5'teki evet/hayır kararına bakar.
Bir karar yalnızca belirgin biçimde değiştiğinde değişmiş sayılır. Eşiğe çok
yakın sonuçlar ve kararı değiştirmeyen kaymalar `unchanged` kalır. Böylece
çalıştırmalar arasındaki küçük yapay zeka farkları değişiklik olarak görünmez.

`changes`, değişen her soruyu `previous` ve `current` kararıyla listeler.
Değişiklikler yapay zeka farklarından, yeni bağlamdan veya düzenlenmiş kaynak
veriden gelebilir. Olguların değiştiğini kanıtlamaz. Eksik bir gönderi de
silindiğini kanıtlamaz.

Temel veri kümesi sınırı olan `maxBaselineRows` varsayılan olarak 100.000
satırdır. Tekrarlanan gönderi ID'leri, yükleme hataları ve değişen veri kümesi
boyutları karşılaştırmayı toplamadan önce durdurur. Bunlar asla boş bir temel
veri kümesine dönüşmez.

## Kendi metnini analiz et

Kendi taslaklarını, yanıtlarını, değerlendirmelerini veya notlarını `texts`
alanına yapıştır. Xquik'in X (Twitter) Brand Monitoring'i bunları analiz eder.
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

## X'te bir markayı izlemek ne kadar tutar?

Xquik'in X (Twitter) Brand Monitoring'i analiz edilen gönderi başına
$0.0003'ten başlar. Başlatma ücreti almaz. Fiyata toplama ve yapay zeka
maliyetleri dahildir. Yapay zeka hesabı, token veya anahtar gerekmez. Fiyat
gönderi başına en fazla 8 soruyu ve 64.000 bayt bağlamı kapsar. Her soru tanımı
en fazla 8.000 bayt olabilir.

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

Her sonuçta `tweet`, `analysis` ve `monitor` bulunur. Cevaplarda türler, soru
sürümleri ve varsa olasılıklar yer alır. `analysis.contextAvailability`, eksik
alıntı, yanıt, yazar ve medya bağlamını bildirir. Analizi başarısız olan veya
atlanan bir satır, toplanan gönderiyi ve bir `reason` alanını tutar. Cevap
listesi boştur.

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
`Top sentiment: negative in 2 of 5 results.` Değişiklik bulmayan bir
karşılaştırma `No change since the earlier run.` yazar. Sorunla karşılaşan veya
büyük bir çalıştırma `run-report` da yazar. `alwaysSaveRunRecords` açık olan
bir çalıştırma da yazar. `run-report` özeti `results.analysisSummary` altında
tekrarlar.

Özet analiz edilen, başarısız ve atlanan satırları sayar. Etkileşimi toplar ve
her soruyu özetler.

- `targets`, marka veya takma ad başına bahsetmeleri, ses payını ve etkileşimi
  bildirir.
- Her `targets` kaydında `top` bulunur. Bu alan her cevap kategorisi için en
  çok etkileşim alan 3 bahsetmeyi tutar. En güçlü olumsuz ve olumlu bahsetmeler
  için uyarı kurmakta kullan.
- Her `targets` kaydında `choices` bulunur. Bu alan, o markadan bahseden
  gönderiler arasındaki cevap dağılımını verir.
- `sentiment` bloğu, `top` altında en çok etkileşim alan 3 olumlu ve olumsuz
  bahsetmeyi listeler.
- `relevance`, markayı konu alan bahsetmeleri sayar.
- `monitor.changedRows`, temel veri kümesinden bu yana kararları değişen
  gönderileri listeler. Bunları bir webhook'a veya uyarıya gönder.
- `monitor.baselineDatasetId` ayarlıysa `monitor` bloğu karşılaştırma
  durumlarını sayar. En fazla 50 değişen satırı listeler.
- Her satır, bağlantı verdiği alan adlarını `sourceDomains` içinde listeler.

Özet sayıları 4 ondalık basamağa yuvarlar. Boş bir çalıştırma 0 sayılar ve
`null` ortalamalar bildirir.

Her sonuç satırı ayrıca soru ID'sine göre anahtarlanmış düz bir eşlem olan
`answers` alanını taşır. Her değer seçilen kategori, puan veya olasılıktır.
`Flat answers` veri kümesi görünümü ve CSV ya da Excel dışa aktarımları her soru
için 1 sütun gösterir. Sütunlar gönderinin yanında durur, bu yüzden tablolarda
JSON ayrıştırmaya gerek kalmaz. Başarısız ve atlanan satırlarda eşlem boştur.

## Görev örnekleri

50 herkese açık görevden birini seç. Her görev gerçek bir İngilizce aramayla ve
sınırlı bir `maxItems` ile başlar. Hazır hedefler, bağlam ve genel bakış veri
kümesi görünümü içerir. Çalıştırmadan önce aramayı veya hedefleri düzenle.

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
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  Yapay zeka ile her gönderi için tutum, yoğunluk ve alaycılık olasılığını
  etiketler. Herhangi bir konuda genel duygu durumuna ihtiyacın olduğunda
  kullan. Analiz edilen gönderi başına $0.0003'ten başlar.
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

Hayır. Xquik'in X (Twitter) Brand Monitoring'i yapay zeka maliyetlerini
fiyatına katar. Yapay zeka hesabı, token veya anahtar gerekmez. X API anahtarı,
giriş veya kimlik bilgisi de gerekmez.

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
[API sekmesine](https://apify.com/xquik/x-twitter-brand-monitoring/api) bak.
Düzenli çalıştırmalar için Apify
[zamanlamalarını](https://docs.apify.com/platform/schedules) kullan. Neyin
değiştiğini görmek için önceki veri kümesi ID'sini `monitor.baselineDatasetId`
olarak gönder. Apify entegrasyonları çalıştırmaları webhook'lara, Make, Zapier,
n8n ve Google Sheets'e de bağlar.

### Nereden yardım alırım?

Actor sayfasında bir issue aç ya da çalıştırma ID'siyle support@xquik.com
adresine yaz. Anahtar-değer deposundaki ücretsiz tanılamalar boş, kısmi veya
kesilen çalıştırmaları açıklar.
