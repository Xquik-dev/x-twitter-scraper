[English](README.md) · [Español](README.es.md) · **Türkçe** ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer, Xquik MCP'yi kodlama ajanlarına bağlıyor](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Framer'ın Xquik scraper'larını Claude Code, Codex, Cursor & daha fazlasıyla nasıl kullandığını](https://youtu.be/4UOSpoOoC3Y?t=367)
6:07'den itibaren izle.

Xquik, en eksiksiz X verisini sunan, dünyanın en hızlı ve en ucuz X (Twitter)
scraper hizmetidir. Xquik'in X (Twitter) Tweet Classifier'ı her gönderide kendi
sorularını cevaplar. Etiket, puan veya evet/hayır cevabı iste. Diğer Apify
Actor'larının çoğu, filtrelemeden veya tekilleştirmeden önce ücret alır. Xquik
yalnızca teslim edilen, benzersiz ve filtrene uyan sonuçlar için ücret alır.
Yapay zeka maliyetleri gönderi başına fiyata dahildir. Yapay zeka hesabına,
token'a veya anahtara ihtiyacın yok.

X (Twitter) gönderilerini kendi sorularınla sınıflandır & orijinal gönderi
verisini sakla. Xquik'in **X Tweet Classifier with AI Analysis** Actor'ı eşleşen
gönderileri toplar. Her gönderi için 1 ile 8 arasında tipli soruyu cevaplar.
Destek taleplerini ayırmak için kategorileri, önceliklendirme için puanları &
ilgi için olasılıkları kullan. Hazır ayarlar marka izleme, şikayetler, rakipler,
satın alma niyeti, ürün geri bildirimi, haberler, duygu durumu & piyasa
duygusunu kapsar. Özel sorular bunların yerini alır.

- **Tipli cevaplar.** Cevaplarda olasılıklar, güven değeri & soru sürümleri
  bulunur.
- **Senin soruların, senin kategorilerin.** Her soru en fazla 255 kategori alır.
- **Eksiksiz kaynak kayıtları.** Her satır, gönderinin sunduğu tüm alanları
  tutar.
- **Önce filtreleyen faturalama.** Yalnızca analizi başarılı, benzersiz ve
  filtrene uyan gönderiler için ödersin.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## Tweet'ler özel sorularla nasıl sınıflandırılır

Apify'da yeni misin? Önce
[ücretsiz bir hesap oluştur](https://console.apify.com/sign-up?fpr=xquik).
Ücretsiz plan kredi kartı istemez & her ay harcaman için $5 verir. Analiz edilen
gönderi başına $0.0003 fiyatla $5, platform kullanımı hariç analiz edilen 16.000
gönderiye kadar yeter. Sonra buraya dön & Try for free düğmesine bas.

1. Gönderi URL'leri, arama terimleri, profil kullanıcı adları veya gönderi
   ID'leri ekle.
2. `maxItems` değerini & işinin gerektirdiği veri çekme filtrelerini ayarla.
3. Sorularını `analysis.questions` altına ekle ya da `analysis.preset` ile bir
   hazır ayar seç. İkisi de yoksa çalıştırma `sentiment` hazır ayarını kullanır.
4. Çalıştırmayı başlat & veri kümesini aç.

Desteklenen modlar gönderileri, aramaları, profil gönderilerini, Listeleri,
yanıtları, alıntıları & gönderi dizilerini toplar. Tek başına makale çekme &
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

### Sorular & sınırlar

Benzersiz ID'leri, talimatları & sürümleri olan 1 ile 8 arasında soru ver.

- `choice`, açıklamaları veya null değerleri olan 2 ile 255 arasında
  adlandırılmış `categories` kullanır.
- `score`, en az 2 açıklama içeren sıralı bir `levels` dizisi kullanır.
- `probability`, 0 ile 1 arasında bir değer döndürür. İsteğe bağlı `criteria`
  alanında `yes` & `no` açıklamaları bulunur.

Hazır ayarlar `brand`, `complaints`, `competitors`, `purchase_intent`,
`product_feedback`, `news`, `sentiment` & `market` değerleridir.
`maxContextBytes` varsayılan olarak 64.000 bayttır. Daha küçük bir sınır uzun
gönderileri sığacak kadar kısaltır & `truncated` olarak işaretler. `concurrency`
varsayılan olarak 16'dır & 1 ile 16 arasında değer alır. Her soru tanımı en
fazla 8.000 bayt kullanabilir.

## Kendi metnini analiz et

Kendi taslaklarını, yanıtlarını, değerlendirmelerini veya notlarını `texts`
alanına yapıştır. Xquik'in X Tweet Classifier'ı bunları analiz eder. X'ten
hiçbir şey çekmez.

```json
{
  "texts": [
    "The new update is great, but sync still drops on mobile.",
    "Support fixed my issue in 10 minutes. Thank you."
  ]
}
```

- Her metin, bir gönderiyle aynı `analysis` cevaplarını içeren 1 satır olur.
- `tweet.id` değeri `text:1`, `text:2` diye sürer & `tweet.type` değeri `text`
  olur.
- Analiz edilen her metin, analiz edilen bir gönderiyle aynı $0.0003 tutar.
- `texts` ayarlıysa çalıştırma yalnızca bu metinleri analiz eder. X hedeflerini
  ayrı çalıştır.

## Tweet sınıflandırmak ne kadar tutar?

Xquik'in X Tweet Classifier'ı analiz edilen gönderi başına $0.0003'ten başlar.
Başlatma ücreti almaz. Fiyata toplama & yapay zeka maliyetleri dahildir. Yapay
zeka hesabına, token'a veya anahtara ihtiyacın yok. Fiyat gönderi başına en
fazla 8 soruyu & 64.000 bayt bağlamı kapsar. Her soru tanımı en fazla 8.000 bayt
kullanabilir.

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
en sık verilen cevabı söyler, örneğin
`Top sentiment is positive in 3 of 5 results.` Değişiklik bulmayan bir
karşılaştırma `No change since the earlier run.` yazar. Sorunla karşılaşan veya
büyük bir çalıştırma `run-report` da yazar. `alwaysSaveRunRecords` açık olan bir
çalıştırma da yazar. `run-report` özeti `results.analysisSummary` altında
tekrarlar.

Özet analiz edilen, başarısız & atlanan satırları sayar. Etkileşimi toplar & her
soruyu özetler. Her özel soru kendi bloğunu alır.

- Seçim sorusu kategori sayılarını & paylarını bildirir.
- Puan sorusu ortalamasını & düzey sayılarını bildirir.
- Evet/hayır sorusu evet & hayır sayılarını bildirir.
- Her satır, bağlantı verdiği alan adlarını `sourceDomains` içinde listeler.
- Her satır, metninde bulunan `$NVDA` gibi `cashtags` değerlerini listeler.
- `monitor.baselineDatasetId` ayarlıysa özetin `monitor` bloğu karşılaştırma
  durumlarını sayar. En fazla 50 değişen satırı listeler.

Özet sayıları 4 ondalık basamağa yuvarlar. Boş bir çalıştırma 0 değerli sayılar
& `null` ortalamalar bildirir.

Özel sorular yerine yerleşik bir hazır ayar çalıştırmak için `analysis.preset`
ayarla. `brand`, `complaints`, `purchase_intent`, `product_feedback`,
`competitors`, `sentiment`, `market` veya `news` değerlerini kabul eder. Özet bu
durumda o hazır ayarın her sorusunu bildirir.

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

`changes`, sorularından herhangi biri için `previous` değerinden `current`
değerine geçen her kararı listeler. Kararlar kategoriye, yuvarlanmış puan
düzeyine veya 0,5'teki evet/hayır eşiğine göre karşılaştırılır. Bir karar
yalnızca belirgin biçimde değiştiğinde değişmiş sayılır. Çalıştırmalar arasında
eşiğe çok yakın kalan sonuçlar `unchanged` kalır.

`maxBaselineRows` değerini aşan veya farklı ayarlardan gelen bir temel
çalıştırma, çalıştırmayı toplamadan önce durdurur. Çalıştırma o zaman bir
tanılama satırı yazar. `maxBaselineRows` varsayılan olarak 100.000'dir.

## Görev örnekleri

50 herkese açık görevden birini seç. Her görev gerçek bir İngilizce aramayla &
sınırlı bir `maxItems` ile başlar. Hazır özel sorular & genel bakış veri kümesi
görünümü içerir. Çalıştırmadan önce aramayı veya soruları düzenle.

- [X'teki müşteri destek taleplerini önceliklendir](https://apify.com/xquik/x-twitter-tweet-classifier/examples/triage-support-requests-on-x)
- [X gönderilerinden satış adaylarını puanla](https://apify.com/xquik/x-twitter-tweet-classifier/examples/score-sales-leads-from-x-posts)
- [X'teki hizmet kesintisi bildirimlerini tespit et](https://apify.com/xquik/x-twitter-tweet-classifier/examples/detect-outage-reports-on-x)
- [X'teki işe alım sinyallerini sınıflandır](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-hiring-signals-on-x)
- [X'teki ürün özelliği taleplerini etiketle](https://apify.com/xquik/x-twitter-tweet-classifier/examples/tag-feature-requests-on-x)
- [Uygulama geri bildirimini mağaza yorumları gibi sınıflandır](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-app-store-style-feedback)
- [X'teki dolandırıcılık ve sahtekarlık uyarılarını tespit et](https://apify.com/xquik/x-twitter-tweet-classifier/examples/detect-scam-warnings-on-x)
- [Etkinliğe katılım niyetini sınıflandır](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-event-attendance-intent)
- [Restoran yorumu sinyallerini çıkar](https://apify.com/xquik/x-twitter-tweet-classifier/examples/extract-restaurant-review-signals)
- [Kripto tanıtımını analizden ayır](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-crypto-scam-vs-analysis)
- [İkna amaçlı siyasi gönderileri sınıflandır](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-political-ad-style-posts)
- [Abonelik iptali riski sinyallerini tespit et](https://apify.com/xquik/x-twitter-tweet-classifier/examples/detect-churn-risk-signals)

Kalan görevler Actor sayfasında daha çok iş akışını kapsar.

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
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)
  yapay zeka ile yükseliş, düşüş, nötr veya karışık duruşu, içerik türünü,
  kesinliği & varlık ilgisini etiketler. Hisse senedi, kripto veya alım satım
  konuşmalarını takip ettiğinde kullan. Analiz edilen gönderi başına $0.0003'ten
  başlar.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)
  haber gönderilerini yapay zeka ile biçim, kaynak atfı & konu ilgisine göre
  etiketler. Haberi yorumdan ayırdığında kullan. Analiz edilen gönderi başına
  $0.0003'ten başlar.
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

Hayır. Xquik'in X Tweet Classifier'ı yapay zeka maliyetlerini fiyatına dahil
eder. Yapay zeka hesabına, token'a veya anahtara ihtiyacın yok. X API
anahtarına, girişe veya kimlik bilgisine de ihtiyacın yok.

### Soru sürümleri önemli mi?

Evet. Her cevap, sorusuna verdiğin `version` değerini saklar. Soruları zamanla
iyileştirdiğinde hangi ifadenin hangi sonucu verdiğini ayırt edebilirsin.

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
[API sekmesine](https://apify.com/xquik/x-twitter-tweet-classifier/api) bak.
Düzenli çalıştırmalar için Apify
[zamanlamalarını](https://docs.apify.com/platform/schedules) kullan. Neyin
değiştiğini görmek için önceki veri kümesi ID'sini `monitor.baselineDatasetId`
olarak gönder. Apify entegrasyonları da çalıştırmaları webhook'lara, Make,
Zapier, n8n & Google Sheets'e bağlar.

### Nereden yardım alırım?

Çalıştırma ID'siyle
[Issues sekmesinde](https://apify.com/xquik/x-twitter-tweet-classifier/issues)
bir issue aç. Anahtar-değer deposundaki ücretsiz tanılamalar dikkat gerektiren
çalıştırmaları açıklar. Hiç satır almayan bir çalıştırma, nedenini durum
metninde söyler.
