[English](README.md) · [Español](README.es.md) · **Türkçe** ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer, Xquik MCP'yi kodlama ajanlarına bağlıyor](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Framer'ın Xquik scraper'larını Claude Code, Codex, Cursor & daha fazlasıyla nasıl kullandığını](https://youtu.be/4UOSpoOoC3Y?t=367)
6:07'den itibaren izle.

Xquik, en eksiksiz X verisini sunan, dünyanın en hızlı ve en ucuz X (Twitter)
scraper hizmetidir. Xquik'in X (Twitter) Stock & Crypto AI Trading Signals
Actor'ı gönderileri duruşlara çevirir. Her duruş, hisse kodu & coin başına
yükseliş, düşüş, nötr veya karışık olur. Diğer Apify Actor'larının çoğu,
filtrelemeden veya tekilleştirmeden önce ücret alır. Xquik yalnızca teslim
edilen, benzersiz ve filtrene uyan sonuçlar için ücret alır. Yapay zeka
maliyetleri gönderi başına fiyata dahildir. Yapay zeka hesabına, token'a veya
anahtara ihtiyacın yok.

X (Twitter) üzerindeki hisse, kripto & alım satım gönderilerinin ardındaki
duruşu oku. Xquik'in **X (Twitter) Stock & Crypto AI Trading Signals** Actor'ı
varlıklarınla ilgili gönderileri toplar. Her gönderiye yapay zeka destekli bir
duruş, içerik türü, kesinlik düzeyi & varlık ilgisi ekler. Net tahminleri
çekinceli yorumlardan & analizi tanıtımdan ayır. Varlığının adını başka bir şey
için kullanan gönderileri yakala.

- **Gönderi başına duruş.** Her gönderi yükseliş, düşüş, nötr, karışık veya
  belirsiz olur.
- **İçerik türü.** Analizi, haberi, işlem fikirlerini, tanıtımı, mizahı &
  soruları birbirinden ayırır.
- **Kesinlik.** Net tahminleri & pozisyonları çekinceli yorumlardan ayırır.
- **İlgi.** Bir hisse kodunun veya şirket adının ilgisiz kullanımlarını elemene
  yardım eder.
- **Eksiksiz kaynak kayıtları.** Her satır, gönderinin sunduğu tüm alanları
  tutar.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## X'te piyasa duygusu nasıl analiz edilir

Apify'da yeni misin? Önce
[ücretsiz bir hesap oluştur](https://console.apify.com/sign-up?fpr=xquik).
Ücretsiz plan kredi kartı istemez & her ay harcaman için $5 verir. Analiz edilen
gönderi başına $0.0003 fiyatla $5, platform kullanımı hariç analiz edilen 16.000
gönderiye kadar yeter. Sonra buraya dön & Try for free düğmesine bas.

1. `$NVDA lang:en -filter:retweets` gibi arama terimleri, cashtag sorguları,
   profil kullanıcı adları veya gönderi ID'leri ekle.
2. `maxItems` değerini & tarih sınırları ya da en az beğeni sayısı gibi veri
   çekme filtrelerini ayarla.
3. Varlık adlarını, hisse kodlarını & takma adları `analysis.targets` altına yaz
   & varlığı `analysis.context` içinde anlat.
4. Çalıştırmayı başlat & veri kümesini aç.

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

Duruş nötr veya belirsiz olduğunda kesinlik her zaman 0 olur. Yönü olmayan bir
gönderi bir yönü net biçimde söyleyemez. Bu cevap tüm olasılığı 0 düzeyine koyar
& duruşun güven değerini alır.

Cevaplar yazarların ne ifade ettiğini anlatır. Yatırım tavsiyesi değildir &
iddiaları, fiyatları veya resmi bildirimleri doğrulamaz.

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
- `tweet.id` değeri `text:1`, `text:2` diye sürer & `tweet.type` değeri `text`
  olur.
- Analiz edilen her metin, analiz edilen bir gönderiyle aynı $0.0003 tutar.
- `texts` ayarlıysa çalıştırma yalnızca bu metinleri analiz eder. X hedeflerini
  ayrı çalıştır.

## X'te piyasa duygusunu analiz etmek ne kadar tutar?

Xquik'in X (Twitter) Stock & Crypto AI Trading Signals Actor'ı analiz edilen
gönderi başına $0.0003'ten başlar. Başlatma ücreti almaz. Fiyata toplama & yapay
zeka maliyetleri dahildir. Yapay zeka hesabına, token'a veya anahtara ihtiyacın
yok. Fiyat gönderi başına en fazla 8 soruyu & 64.000 bayt bağlamı kapsar. Her
soru tanımı en fazla 8.000 bayt kullanabilir.

Daha fazla hacim için daha çok ön ödemeli kullanım içeren bir
[Apify planı seç](https://apify.com/pricing?fpr=xquik).

Veri çekme filtreleri & tekilleştirme analizden önce çalışır. Filtrelenen veya
tekrarlanan satırlar için asla ödemezsin. Başarısız analizlerin, atlanan
analizlerin & tanılama satırlarının sonuç ücreti yok. Apify işlem, depolama &
aktarım için platform kullanımını planının ücretleriyle ayrıca faturalandırır.
Pricing sekmesi bunu gösterir.

## Girdi & çıktı örnekleri

Yukarıdaki girdiyi olduğu gibi kopyalayabilirsin. Kısaltılmış bir çıktı satırı
şöyle görünür.

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

Her sonuçta `tweet` & `analysis` bulunur. Cevaplarda türler, soru sürümleri &
varsa olasılıklar yer alır. Analizi başarısız olan veya atlanan bir satır,
toplanan gönderiyi & bir `reason` alanını tutar. Cevap listesi boştur.

Anahtar-değer deposundaki ücretsiz tanılamalar geçersiz girdileri, eksik
sonuçları & kesilen toplamayı açıklar. Çalıştırma raporu toplanan satırları,
ücretlendirilen analizleri & bekleyen ücretleri ayrı tutar.

## Çalıştırma özeti & düz cevaplar

Bir çalıştırma 3 durumda kendi anahtar-değer deposuna bir `analysis-summary`
kaydı yazar.

- Bir sorunla karşılaşırsa veya büyükse.
- Karşılaştırması değişen, yeni veya karşılaştırılamayan bir gönderi bulursa.
- `alwaysSaveRunRecords` açıksa.

Bir serinin ilk çalıştırması dahil diğer çalıştırmalar bu kaydı atlar. Durumları
en sık verilen cevabı söyler, örneğin `Top stance is bullish in 3 of 5 results.`
Değişiklik bulmayan bir karşılaştırma `No change since the earlier run.` yazar.
Sorunla karşılaşan veya büyük bir çalıştırma `run-report` da yazar.
`alwaysSaveRunRecords` açık olan bir çalıştırma da yazar. `run-report` özeti
`results.analysisSummary` altında tekrarlar.

Özet analiz edilen, başarısız & atlanan satırları sayar. Etkileşimi toplar & her
soruyu özetler.

- `cashtags`, `$NVDA` gibi her cashtag için duruşu sayar. Her varlığın yükseliş
  oranı `choices.stance` alanından gelir.
- Her `cashtags` kaydı, yükseliş & düşüş sayılarıyla bir `signal` alanı ekler.
  Puanı -1 ile 1 arasındadır. Puan, yükseliş sayısından düşüş sayısının
  çıkarılıp satır sayısına bölünmesiyle bulunur.
- `stance` bloğu etkileşim ağırlıklı dağılımı & en çok etkileşim alan yükseliş &
  düşüş gönderilerini ekler.
- `conviction` ortalamayı & etkileşim ağırlıklı ortalamayı bildirir.
- `monitor.changedRows`, temel veri kümesinden bu yana duruşu değişen
  gönderileri listeler.
- Her satır, bağlantı verdiği alan adlarını `sourceDomains` içinde listeler.
- `monitor.baselineDatasetId` ayarlıysa özetin `monitor` bloğu karşılaştırma
  durumlarını sayar. En fazla 50 değişen satırı listeler.

Özet sayıları 4 ondalık basamağa yuvarlar. Boş bir çalıştırma 0 değerli sayılar
& `null` ortalamalar bildirir.

Her sonuç satırı ayrıca soru ID'sine göre anahtarlanmış düz bir eşlem olan
`answers` alanını taşır. Her değer seçilen kategori, puan veya olasılıktır.
`Flat answers` veri kümesi görünümü & CSV ya da Excel dışa aktarımları her soru
için 1 sütun gösterir. Sütunlar gönderinin yanında durur, bu yüzden tablolarda
JSON ayrıştırmaya gerek kalmaz. Başarısız & atlanan satırlarda eşlem boştur.

## Önceki bir çalıştırmayla karşılaştır

Aynı analiz ayarlarıyla tamamlanmış önceki bir çalıştırmanın veri kümesi ID'sini
`monitor.baselineDatasetId` olarak gönder. Karşılaştırma o çalıştırmanın
satırlarını okur. O çalıştırma özetini atlamış olsa bile çalışır. Ardından her
satıra bir `monitor` nesnesi eklenir. Bu nesnenin durumu aşağıdaki değerleri
alır.

- Temel çalıştırma yoksa `first_run`.
- Önceki çalıştırmada olmayan gönderiler için `new_to_baseline`.
- Önceki çalıştırmada olan gönderiler için `unchanged` veya `changed`.

`changes`, `previous` değerinden `current` değerine geçen her duruşu, içerik
türünü veya kesinlik düzeyini listeler. Kararlar kategoriye, yuvarlanmış puan
düzeyine veya 0,5'teki evet/hayır eşiğine göre karşılaştırılır. Bir karar
yalnızca belirgin biçimde değiştiğinde değişmiş sayılır. Çalıştırmalar arasında
eşiğe çok yakın kalan sonuçlar `unchanged` kalır.

`maxBaselineRows` değerini aşan veya farklı ayarlardan gelen bir temel
çalıştırma, çalıştırmayı toplamadan önce durdurur. Çalıştırma o zaman bir
tanılama satırı yazar. `maxBaselineRows` varsayılan olarak 100.000'dir.

## Görev örnekleri

50 herkese açık görevden birini seç. Her görev gerçek bir İngilizce aramayla &
sınırlı bir `maxItems` ile başlar. Hazır hedefler, bağlam & genel bakış veri
kümesi görünümü içerir. Çalıştırmadan önce aramayı veya hedefleri düzenle.

- [X'te Nvidia (NVDA) piyasa duygusu](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/nvda-market-sentiment-on-x)
- [X'te Tesla (TSLA) piyasa duygusu](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/tsla-market-sentiment-on-x)
- [X'te Apple (AAPL) piyasa duygusu](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/aapl-market-sentiment-on-x)
- [X'te Amazon (AMZN) piyasa duygusu](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/amzn-market-sentiment-on-x)
- [X'te Microsoft (MSFT) piyasa duygusu](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/msft-market-sentiment-on-x)
- [X'te Alphabet (GOOGL) piyasa duygusu](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/googl-market-sentiment-on-x)
- [X'te Meta (META) piyasa duygusu](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/meta-market-sentiment-on-x)
- [X'te AMD (AMD) piyasa duygusu](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/amd-market-sentiment-on-x)
- [X'te Palantir (PLTR) piyasa duygusu](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/pltr-market-sentiment-on-x)
- [X'te Coinbase (COIN) piyasa duygusu](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/coin-market-sentiment-on-x)
- [X'te Strategy (MSTR) piyasa duygusu](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/mstr-market-sentiment-on-x)
- [X'te Robinhood (HOOD) piyasa duygusu](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/hood-market-sentiment-on-x)

Kalan görevler Actor sayfasında daha çok markayı, konuyu & pazarı kapsar.

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
- [X Space Scraper](https://apify.com/xquik/x-space-scraper) Sohbet Odalarını
  anahtar kelimeyle bulur & başlıklarını, durumlarını, zamanlarını, dinleyici
  sayılarını, sunucularını & konuşmacılarını okur. Yayınları da URL veya ID ile
  okur. X'teki canlı ses & video yayınlarını takip ettiğinde kullan. Sohbet
  Odası veya yayın başına $0.00015'ten başlar.
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
- [X (Twitter) Monitor](https://apify.com/xquik/x-twitter-monitor) hesapların
  her yeni tweet'ini, yanıtını, alıntısını, yeniden gönderisini & profil
  değişikliğini genelde X gösterdikten sonra 1 saniyeden kısa sürede yakalar.
  Anahtar kelime tweet'lerini & takipleri de yakalar. X bir tweet'i gösterir
  göstermez bildirim istediğinde kullan. monitor-hour başına $0.0045'ten başlar.

## SSS & destek

Sık sorulan soruların cevapları, sonra da nereden yardım alacağın.

### Yapay zeka hesabı, X API anahtarı veya giriş gerekir mi?

Hayır. Xquik'in X (Twitter) Stock & Crypto AI Trading Signals Actor'ı yapay zeka
maliyetlerini fiyatına dahil eder. Yapay zeka hesabına, token'a veya anahtara
ihtiyacın yok. X API anahtarına, girişe veya kimlik bilgisine de ihtiyacın yok.

### Birden çok hisse kodunu tek çalıştırmada takip edebilir miyim?

Evet. Her varlığı hisse kodları & takma adlarıyla `analysis.targets` altına yaz.
Arama terimlerini birleştir. İlgi cevapları, hangi gönderilerin hedeflerini
yatırım varlığı olarak ele aldığını söyler.

### Bir satır neden başarısız veya atlanan bir analizle döndü?

`analysis.status` değeri `failed` veya `skipped` olur. Actor gönderiyi topladı &
teslim etti, ama yapay zeka analizi tamamlanmadı. `analysis.reason` nedeni
belirtir. `context_limit`, bağlamının & hedeflerinin gönderiye yer bırakmadığı
anlamına gelir. `service_unavailable`, analiz hizmetine kısa bir süre
erişilemediği anlamına gelir. Bu satırların sonuç ücreti yok. `analysis.context`
alanını kısalt ya da etkilenen ID'leri yeniden çalıştır.

Actor, `maxContextBytes` değerinden uzun bir gönderiyi yine de analiz eder. Önce
alıntılanan & yanıtlanan gönderileri, sonra gönderinin kendisini kısaltır. Bu
durumda `analysis.contextAvailability.postText` değeri `truncated` olur. Daha
çok metin tutmak için `maxContextBytes` değerini 64.000'e kadar yükselt.

### Analiz doğruluk kontrolü yapar mı?

Hayır. Cevaplar, gönderinin ne ifade ettiğini & bunu nasıl çerçevelediğini
anlatır. Olasılıklar yapay zekanın güvenini gösterir, doğruluğu değil. Önemli
sınıflandırmaları, her satırda duran orijinal gönderiyle karşılaştır.

### Hangi diller çalışır?

Veri çekme, X'in sunduğu her dili destekler. Analizi önce İngilizce müşteri
senaryolarında doğruluyoruz. Desteklenen diğer diller aynı yapıda cevap
döndürür. `unclear` kategorileri & olasılıklar her dilde belirsizliği gösterir.

### Maliyeti nasıl sınırlarım?

Filtreler, tekilleştirme & `maxItems` analizden önce çalışır. Yalnızca benzersiz
ve filtrene uyan gönderiler için ödersin. Kesin arama operatörleri, tarih
sınırları & etkileşim alt sınırları kullan. Büyük bir çalıştırmadan önce cevap
kalitesini görmek için küçük bir `maxItems` ile başla.

### X verisini analiz etmek yasal mı?

Actor herkese açık X alanlarını çeker. Sonuçlarda kişisel veri olabilir.
Amacının yasal olduğundan emin ol & geçerli gizlilik kurallarına uy. Emin
değilsen yetkin bir hukukçuya danış.

### API'yi, zamanlamaları & entegrasyonları kullanabilir miyim?

Evet. Python, JavaScript & cURL örnekleri için
[API sekmesine](https://apify.com/xquik/x-twitter-stock-crypto-signals/api) bak.
Düzenli çalıştırmalar için Apify
[zamanlamalarını](https://docs.apify.com/platform/schedules) kullan. Neyin
değiştiğini görmek için önceki veri kümesi ID'sini `monitor.baselineDatasetId`
olarak gönder. Apify entegrasyonları da çalıştırmaları webhook'lara, Make,
Zapier, n8n & Google Sheets'e bağlar.

### Nereden yardım alırım?

Çalıştırma ID'siyle
[Issues sekmesinde](https://apify.com/xquik/x-twitter-stock-crypto-signals/issues)
bir issue aç. Anahtar-değer deposundaki ücretsiz tanılamalar dikkat gerektiren
çalıştırmaları açıklar. Hiç satır almayan bir çalıştırma, nedenini durum
metninde söyler.
