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
scraper hizmetidir. Xquik'in X (Twitter) Stock & Crypto AI Trading Signals
Actor'ı gönderileri piyasa duruşuna çevirir. Her duruş, hisse kodu ve coin
başına yükseliş, düşüş, nötr veya karışık olur. Diğer Apify Actor'larının çoğu,
filtrelemeden veya tekilleştirmeden önce ücret alır. Xquik yalnızca teslim
edilen, benzersiz ve filtrene uyan sonuçlar için ücret alır. Yapay zeka
maliyetleri gönderi başına fiyata dahildir. Yapay zeka hesabı, token veya
anahtar gerekmez.

X (Twitter) üzerindeki hisse, kripto ve alım satım gönderilerinin ardındaki
duruşu oku. Xquik'in **X (Twitter) Stock & Crypto AI Trading Signals** Actor'ı
varlıklarınla ilgili gönderileri toplar. Her gönderiye yapay zeka destekli bir
duruş, içerik türü, kesinlik düzeyi ve varlık ilgisi ekler. Net tahminleri
çekinceli yorumlardan, analizi tanıtımdan ayır. Varlığının adını başka bir şey
için kullanan gönderileri yakala.

- **Gönderi başına duruş.** Her gönderi yükseliş, düşüş, nötr, karışık veya
  belirsiz olur.
- **İçerik türü.** Analizi, haberi, işlem fikirlerini, tanıtımı, mizahı ve
  soruları birbirinden ayırır.
- **Kesinlik.** Net tahminleri ve pozisyonları çekinceli yorumlardan ayırır.
- **İlgi.** Bir hisse kodunun veya şirket adının ilgisiz kullanımlarını elemene
  yardım eder.
- **Eksiksiz kaynak kayıtları.** Her satır, gönderinin sunduğu tüm alanları
  tutar.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## X'te piyasa duygusu nasıl analiz edilir

1. `$NVDA lang:en -filter:retweets` gibi arama terimleri, cashtag sorguları,
   profil kullanıcı adları veya gönderi ID'leri ekle.
2. `maxItems` değerini ve tarih sınırları ya da en az beğeni sayısı gibi veri
   çekme filtrelerini ayarla.
3. Varlık adlarını, hisse kodlarını ve takma adları `analysis.targets` altına
   yaz, varlığı `analysis.context` içinde anlat.
4. Çalıştırmayı başlat ve veri kümesini aç.

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

### Actor neyi cevaplar

| Soru     | Cevap                                                              |
| -------- | ------------------------------------------------------------------ |
| Duruş    | Yükseliş, düşüş, nötr, karışık veya belirsiz                       |
| İçerik   | Analiz, haber, işlem, tanıtım, mizah, soru veya belirsiz           |
| Kesinlik | 0 çekinceli yorum, 1 belirtilmiş görüş, 2 net tahmin veya pozisyon |
| İlgi     | Gönderinin hedeflerini yatırım varlığı olarak ele alma olasılığı   |

Duruş nötr veya belirsizse kesinlik her zaman 0 olur. Yönü olmayan bir gönderi
bir yönü net biçimde söyleyemez. Bu cevap tüm olasılığı 0 düzeyine koyar ve
duruşun güven değerini alır.

Cevaplar yazarların ne ifade ettiğini anlatır. Yatırım tavsiyesi değildir.
İddiaları, fiyatları veya resmi bildirimleri doğrulamaz.

## Kendi metnini analiz et

Kendi taslaklarını, yanıtlarını, değerlendirmelerini veya notlarını `texts`
alanına yapıştır. Xquik'in X (Twitter) Stock & Crypto AI Trading Signals Actor'ı
bunları analiz eder. X'ten hiçbir şey çekmez.

```json
{
  "texts": [
    "$NVDA guidance beat again. I am adding on any dip below 900.",
    "Not touching $BTC until the ETF flows turn positive."
  ]
}
```

- Her metin, bir gönderiyle aynı `analysis` cevaplarını içeren 1 satır olur.
- `tweet.id` değeri `text:1`, `text:2` diye devam eder. `tweet.type` değeri
  `text` olur.
- Analiz edilen her metin, analiz edilen bir gönderiyle aynı $0.0003 tutar.
- `texts` ayarlıysa çalıştırma yalnızca bu metinleri analiz eder. X hedeflerini
  ayrı çalıştır.

## X'te piyasa duygusunu analiz etmek ne kadar tutar?

Xquik'in X (Twitter) Stock & Crypto AI Trading Signals Actor'ı analiz edilen
gönderi başına $0.0003'ten başlar. Başlatma ücreti almaz. Fiyata toplama ve
yapay zeka maliyetleri dahildir. Yapay zeka hesabı, token veya anahtar gerekmez.
Fiyat gönderi başına en fazla 8 soruyu ve 64.000 bayt bağlamı kapsar. Her soru
tanımı en fazla 8.000 bayt olabilir.

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
`Top stance: bullish in 3 of 5 results.` Değişiklik bulmayan bir karşılaştırma
`No change since the earlier run.` yazar. Sorunla karşılaşan veya büyük bir
çalıştırma `run-report` da yazar. `alwaysSaveRunRecords` açık olan bir
çalıştırma da yazar. `run-report` özeti `results.analysisSummary` altında
tekrarlar.

Özet analiz edilen, başarısız ve atlanan satırları sayar. Etkileşimi toplar ve
her soruyu özetler.

- `cashtags`, `$NVDA` gibi her cashtag için duruşu sayar. Her varlığın yükseliş
  oranı `choices.stance` alanından gelir.
- Her `cashtags` kaydında yükseliş ve düşüş sayılarını veren bir `signal` alanı
  da var. Puanı -1 ile 1 arasındadır. Puan, yükseliş ve düşüş sayıları
  arasındaki farkın satır sayısına bölümüdür.
- `stance` bloğu etkileşim ağırlıklı dağılımı ve en çok etkileşim alan yükseliş
  ve düşüş gönderilerini ekler.
- `conviction` ortalamayı ve etkileşim ağırlıklı ortalamayı bildirir.
- `monitor.changedRows`, temel veri kümesinden bu yana duruşu değişen
  gönderileri listeler.
- Her satır, bağlantı verdiği alan adlarını `sourceDomains` içinde listeler.
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

`changes`, `previous` değerinden `current` değerine geçen her duruşu, içerik
türünü veya kesinlik düzeyini listeler. Kararlar kategoriye, yuvarlanmış puan
düzeyine veya 0,5'teki evet/hayır eşiğine göre karşılaştırılır. Bir karar
yalnızca belirgin biçimde değiştiğinde değişmiş sayılır. Çalıştırmalar
arasındaki küçük farklar `unchanged` kalır.

`maxBaselineRows` değerini aşan veya farklı ayarlardan gelen bir temel
çalıştırma, çalıştırmayı toplamadan önce durdurur. Çalıştırma sonra bir
tanılama satırı yazar. `maxBaselineRows` varsayılan olarak 100.000'dir.

## Görev örnekleri

50 herkese açık görevden birini seç. Her görev gerçek bir İngilizce aramayla ve
sınırlı bir `maxItems` ile başlar. Hazır hedefler, bağlam ve genel bakış veri
kümesi görünümü içerir. Çalıştırmadan önce aramayı veya hedefleri düzenle.

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
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  Yapay zeka ile her gönderi için tutum, yoğunluk ve alaycılık olasılığını
  etiketler. Herhangi bir konuda genel duygu durumuna ihtiyacın olduğunda
  kullan. Analiz edilen gönderi başına $0.0003'ten başlar.
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

Hayır. Xquik'in X (Twitter) Stock & Crypto AI Trading Signals Actor'ı yapay
zeka maliyetlerini fiyatına katar. Yapay zeka hesabı, token veya anahtar
gerekmez. X API anahtarı, giriş veya kimlik bilgisi de gerekmez.

### Birden çok hisse kodunu tek çalıştırmada takip edebilir miyim?

Evet. Her varlığı hisse kodları ve takma adlarıyla `analysis.targets` altına
yaz. Arama terimlerini birleştir. İlgi cevapları, hangi gönderilerin
hedeflerini yatırım varlığı olarak ele aldığını söyler.

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
[API sekmesine](https://apify.com/xquik/x-twitter-stock-crypto-signals/api) bak.
Düzenli çalıştırmalar için Apify
[zamanlamalarını](https://docs.apify.com/platform/schedules) kullan. Neyin
değiştiğini görmek için önceki veri kümesi ID'sini `monitor.baselineDatasetId`
olarak gönder. Apify entegrasyonları çalıştırmaları webhook'lara, Make, Zapier,
n8n ve Google Sheets'e de bağlar.

### Nereden yardım alırım?

Actor sayfasında bir issue aç ya da çalıştırma ID'siyle support@xquik.com
adresine yaz. Anahtar-değer deposundaki ücretsiz tanılamalar boş, kısmi veya
kesilen çalıştırmaları açıklar.
