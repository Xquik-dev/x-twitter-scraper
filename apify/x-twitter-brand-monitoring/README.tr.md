[English](README.md) · [Español](README.es.md) · **Türkçe** ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer, Xquik MCP'yi kodlama ajanlarına bağlıyor](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Framer'ın Xquik scraper'larını Claude Code, Codex, Cursor & daha fazlasıyla nasıl kullandığını](https://youtu.be/4UOSpoOoC3Y?t=367)
6:07'den itibaren izle.

Xquik, en eksiksiz X verisini sunan, dünyanın en hızlı ve en ucuz X (Twitter)
scraper hizmetidir. Xquik'in X (Twitter) Brand Monitoring'i markandan bahseden
gönderileri ilgi, duygu durumu & müşteri deneyimi cevaplarıyla izler. Diğer
Apify Actor'larının çoğu, filtrelemeden veya tekilleştirmeden önce ücret alır.
Xquik yalnızca teslim edilen, benzersiz ve filtrene uyan sonuçlar için ücret
alır. Yapay zeka maliyetleri gönderi başına fiyata dahildir. Yapay zeka
hesabına, token'a veya anahtara ihtiyacın yok.

X (Twitter) üzerinde markandan bahseden gönderileri izle & duygu durumundaki
değişimleri çalıştırmalar arasında takip et. Xquik'in **X (Twitter) Brand
Monitoring with AI Analysis** Actor'ı eşleşen her gönderiyi toplar. Her gönderi
için ilgi, duygu durumu & müşteri deneyimi sorularını yapay zeka ile cevaplar.
Bu cevapları önceki bir veri kümesiyle karşılaştırır, böylece neyin değiştiğini
görürsün. Her satır orijinal gönderi verisini tutar. Dışa aktarımlar,
incelemeler & sonraki analizler için ikinci bir kazıma gerekmez.

Bir markayı, bir ürün hattını veya bir kampanyayı şikayetler, övgüler & satın
alma soruları için izle. Destek & pazarlama ekiplerini gerçek gönderilerle
bilgilendir. Müşterilerin senden nasıl söz ettiğinin geçmişini her çalıştırmada
biriktir.

- **Kaynak gönderinin tüm alanları.** Metin, yazar, sayılar, medya, bağlantılar,
  alıntılanan & yanıtlanan gönderiler cevapların yanında kalır.
- **Tipli cevaplar.** Her satırda bir ilgi olasılığı, olasılıklarıyla bir duygu
  durumu kategorisi & bir müşteri deneyimi kategorisi bulunur.
- **Değişiklik takibi.** Çalıştırmalar karara göre karşılaştırılır, bu yüzden
  küçük olasılık kaymaları değişiklik sayılmaz.
- **Önce filtreleyen faturalama.** Yalnızca analizi başarılı, benzersiz ve
  filtrene uyan gönderiler için ödersin.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## X'te bir marka nasıl izlenir

Apify'da yeni misin? Önce
[ücretsiz bir hesap oluştur](https://console.apify.com/sign-up?fpr=xquik).
Ücretsiz plan kredi kartı istemez & her ay harcaman için $5 verir. Analiz edilen
gönderi başına $0.0003 fiyatla $5, platform kullanımı hariç analiz edilen 16.000
gönderiye kadar yeter. Sonra buraya dön & Try for free düğmesine bas.

1. Arama terimleri, profil kullanıcı adları, gönderi URL'leri veya gönderi
   ID'leri ekle. Örneğin `(Sony OR "WH-1000XM5") headphones lang:en` araması
   yap.
2. `maxItems` değerini & işinin gerektirdiği veri çekme filtrelerini ayarla.
   Tarih sınırları, en az beğeni sayısı & yanıtları hariç tutma bunlara
   örnektir.
3. Marka adlarını & takma adlarını `analysis.targets` altına yaz & markayı
   `analysis.context` içinde anlat.
4. Çalıştırmayı başlat, sonra veri kümesi ID'sini bir sonraki karşılaştırman
   için sakla.
5. Bir sonraki çalıştırmada bu ID ile `monitor.baselineDatasetId` ekle. Cevaplar
   karşılaştırılabilir kalsın diye soruları, hedefleri, bağlamı & bağlam
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

Hedefler sınıflandırmaya yön verir. Arama sorgusu oluşturmaz veya ilgisiz
gönderileri çıkarmazlar. Araştırmana uyan arama terimleri & filtreler seç.

### İzleme neyi cevaplar

| Soru             | Cevap                                               |
| ---------------- | --------------------------------------------------- |
| Marka ilgisi     | Gönderinin hedefini konu alma olasılığı             |
| Duygu durumu     | Olumlu, olumsuz, karışık, nötr veya belirsiz        |
| Müşteri deneyimi | Müşteri, potansiyel müşteri, gözlemci veya belirsiz |

Markanla karışabilecek adaşları incelemek için ilgi olasılıklarını kullan. Duygu
durumu, yazarın hedefe karşı ifade ettiği tutumu anlatır.

### Karşılaştırma nasıl çalışır

| Karşılaştırma durumu   | Anlamı                                      |
| ---------------------- | ------------------------------------------- |
| `first_run`            | Temel veri kümesi verilmedi                 |
| `new_to_baseline`      | Bu gönderi ID'si temel veri kümesinde yoktu |
| `unchanged`            | Karşılaştırılabilen her karar aynı          |
| `changed`              | En az 1 karar farklı                        |
| `not_comparable`       | Metadata, ID'ler veya eşleşen ayarlar eksik |
| `analysis_unavailable` | Bu gönderinin başarılı bir analizi yok      |

Cevaplar karara göre karşılaştırılır. `choice` cevabı kategorisine göre
karşılaştırılır. `score` cevabı en yakın düzeyine göre karşılaştırılır.
`probability` cevabı 0,5'teki evet/hayır kararına göre karşılaştırılır. Bir
karar yalnızca belirgin biçimde değiştiğinde değişmiş sayılır. Çalıştırmalar
arasında eşiğe çok yakın kalan sonuçlar `unchanged` kalır & kararı değiştirmeyen
kaymalar da öyle. Böylece çalıştırmalar arasındaki küçük yapay zeka farkları
değişiklik olarak görünmez.

`changes`, değişen her soruyu `previous` & `current` kararıyla listeler.
Değişiklikler yapay zeka farklarından, yeni bağlamdan veya düzenlenmiş kaynak
veriden gelebilir. Olguların değiştiğini kanıtlamazlar & eksik bir gönderi de
silindiğini kanıtlamaz.

Temel veri kümesi sınırı olan `maxBaselineRows` varsayılan olarak 100.000
satırdır. Tekrarlanan gönderi ID'leri, yükleme hataları & değişen veri kümesi
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
- `tweet.id` değeri `text:1`, `text:2` diye sürer & `tweet.type` değeri `text`
  olur.
- Analiz edilen her metin, analiz edilen bir gönderiyle aynı $0.0003 tutar.
- `texts` ayarlıysa çalıştırma yalnızca bu metinleri analiz eder. X hedeflerini
  ayrı çalıştır.

## X'te bir markayı izlemek ne kadar tutar?

Xquik'in X (Twitter) Brand Monitoring'i analiz edilen gönderi başına $0.0003'ten
başlar. Başlatma ücreti almaz. Fiyata toplama & yapay zeka maliyetleri dahildir.
Yapay zeka hesabına, token'a veya anahtara ihtiyacın yok. Fiyat gönderi başına
en fazla 8 soruyu & 64.000 bayt bağlamı kapsar. Her soru tanımı en fazla 8.000
bayt kullanabilir.

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

Her sonuçta `tweet`, `analysis` & `monitor` bulunur. Cevaplarda türler, soru
sürümleri & varsa olasılıklar yer alır. `analysis.contextAvailability`, eksik
alıntı, yanıt, yazar & medya bağlamını bildirir. Analizi başarısız olan veya
atlanan bir satır, toplanan gönderiyi & bir `reason` alanını tutar. Cevap
listesi boştur.

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
`Top sentiment is negative in 2 of 5 results.` Değişiklik bulmayan bir
karşılaştırma `No change since the earlier run.` yazar. Sorunla karşılaşan veya
büyük bir çalıştırma `run-report` da yazar. `alwaysSaveRunRecords` açık olan bir
çalıştırma da yazar. `run-report` özeti `results.analysisSummary` altında
tekrarlar.

Özet analiz edilen, başarısız & atlanan satırları sayar. Etkileşimi toplar & her
soruyu özetler.

- `targets`, marka veya takma ad başına bahsetmeleri, ses payını & etkileşimi
  bildirir.
- Her `targets` kaydında `top` bulunur. Bu alan her cevap kategorisi için en çok
  etkileşim alan 3 bahsetmeyi tutar. En güçlü olumsuz & olumlu bahsetmeler için
  uyarı kurmakta kullan.
- Her `targets` kaydında `choices` bulunur. Bu alan, o markadan bahseden
  gönderiler arasındaki cevap dağılımını verir.
- `sentiment` bloğu, `top` altında en çok etkileşim alan 3 olumlu & olumsuz
  bahsetmeyi listeler.
- `relevance`, markayı konu alan bahsetmeleri sayar.
- `monitor.changedRows`, temel veri kümesinden bu yana kararları değişen
  gönderileri listeler. Bunları bir webhook'a veya uyarıya gönder.
- `monitor.baselineDatasetId` ayarlıysa `monitor` bloğu karşılaştırma
  durumlarını sayar. En fazla 50 değişen satırı listeler.
- Her satır, bağlantı verdiği alan adlarını `sourceDomains` içinde listeler.

Özet sayıları 4 ondalık basamağa yuvarlar. Boş bir çalıştırma 0 değerli sayılar
& `null` ortalamalar bildirir.

Her sonuç satırı ayrıca soru ID'sine göre anahtarlanmış düz bir eşlem olan
`answers` alanını taşır. Her değer seçilen kategori, puan veya olasılıktır.
`Flat answers` veri kümesi görünümü & CSV ya da Excel dışa aktarımları her soru
için 1 sütun gösterir. Sütunlar gönderinin yanında durur, bu yüzden tablolarda
JSON ayrıştırmaya gerek kalmaz. Başarısız & atlanan satırlarda eşlem boştur.

## Görev örnekleri

50 herkese açık görevden birini seç. Her görev gerçek bir İngilizce aramayla &
sınırlı bir `maxItems` ile başlar. Hazır hedefler, bağlam & genel bakış veri
kümesi görünümü içerir. Çalıştırmadan önce aramayı veya hedefleri düzenle.

- [X'te Nike marka bahsetmelerini izle](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-nike-brand-mentions-on-x)
- [X'te Starbucks marka bahsetmelerini izle](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-starbucks-brand-mentions-on-x)
- [X'te Tesla marka bahsetmelerini izle](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-tesla-brand-mentions-on-x)
- [X'te Spotify marka bahsetmelerini izle](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-spotify-brand-mentions-on-x)
- [X'te Netflix marka bahsetmelerini izle](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-netflix-brand-mentions-on-x)
- [X'te Airbnb marka bahsetmelerini izle](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-airbnb-brand-mentions-on-x)
- [X'te Uber marka bahsetmelerini izle](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-uber-brand-mentions-on-x)
- [X'te Peloton marka bahsetmelerini izle](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-peloton-brand-mentions-on-x)
- [X'te Shopify marka bahsetmelerini izle](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-shopify-brand-mentions-on-x)
- [X'te Notion marka bahsetmelerini izle](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-notion-brand-mentions-on-x)
- [X'te Duolingo marka bahsetmelerini izle](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-duolingo-brand-mentions-on-x)
- [X'te Lululemon marka bahsetmelerini izle](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-lululemon-brand-mentions-on-x)

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
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)
  yapay zeka ile her gönderi için kendi kategori, puan & evet/hayır sorularını
  cevaplar. Hazır analizler etiketlerine uymadığında kullan. Analiz edilen
  gönderi başına $0.0003'ten başlar.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)
  yapay zekanın 8 özellik cevabından her gönderi için 0 ile 100 arasında bir
  Viral Score & bir karar tahmin eder. Gönderilerin neden yayıldığını veya
  tutmadığını incelediğinde kullan. Analiz edilen gönderi başına $0.0003'ten
  başlar.

## SSS & destek

Sık sorulan soruların cevapları, sonra da nereden yardım alacağın.

### Yapay zeka hesabı, X API anahtarı veya giriş gerekir mi?

Hayır. Xquik'in X (Twitter) Brand Monitoring'i yapay zeka maliyetlerini fiyatına
dahil eder. Yapay zeka hesabına, token'a veya anahtara ihtiyacın yok. X API
anahtarına, girişe veya kimlik bilgisine de ihtiyacın yok.

### Kendi sorularımı kullanabilir miyim?

Evet. Özel `analysis.questions` varsayılan soruların yerini alır. 1 ile 8
arasında `choice`, `score` veya `probability` sorusu gönder. Seçim soruları 2
ile 255 arasında kategori kabul eder. Puan sorularında en az 2 sıralı düzey
olmalı. Karşılaştırmak istediğin çalıştırmalarda aynı soruları kullan.

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
[API sekmesine](https://apify.com/xquik/x-twitter-brand-monitoring/api) bak.
Düzenli çalıştırmalar için Apify
[zamanlamalarını](https://docs.apify.com/platform/schedules) kullan. Neyin
değiştiğini görmek için önceki veri kümesi ID'sini `monitor.baselineDatasetId`
olarak gönder. Apify entegrasyonları da çalıştırmaları webhook'lara, Make,
Zapier, n8n & Google Sheets'e bağlar.

### Nereden yardım alırım?

Çalıştırma ID'siyle
[Issues sekmesinde](https://apify.com/xquik/x-twitter-brand-monitoring/issues)
bir issue aç. Anahtar-değer deposundaki ücretsiz tanılamalar dikkat gerektiren
çalıştırmaları açıklar. Hiç satır almayan bir çalıştırma, nedenini durum
metninde söyler.
