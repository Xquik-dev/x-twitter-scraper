[English](README.md) · [Español](README.es.md) · **Türkçe** ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer, Xquik MCP'yi kodlama ajanlarına bağlıyor](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Framer'ın Xquik scraper'larını Claude Code, Codex, Cursor & daha fazlasıyla nasıl kullandığını](https://youtu.be/4UOSpoOoC3Y?t=367)
6:07'den itibaren izle.

Xquik, en eksiksiz X verisini sunan, dünyanın en hızlı ve en ucuz X (Twitter)
scraper hizmetidir. Xquik'in X (Twitter) News Monitor Actor'ı haber
gönderilerini biçime, kaynak atfına & ilgiye göre ayırır. Diğer Apify
Actor'larının çoğu, filtrelemeden veya tekilleştirmeden önce ücret alır. Xquik
yalnızca teslim edilen, benzersiz ve filtrene uyan sonuçlar için ücret alır.
Yapay zeka maliyetleri gönderi başına fiyata dahildir. Yapay zeka hesabına,
token'a veya anahtara ihtiyacın yok.

X (Twitter) üzerindeki haber gönderilerini türüne göre ayır & orijinal gönderi
verisini sakla. Xquik'in **X (Twitter) News Monitor with AI Analysis** Actor'ı
konularınla ilgili gönderileri toplar. Her gönderiye yapay zeka destekli bir
biçim, kaynak atfı & ilgi cevabı ekler. Haberi yorumdan & spekülasyondan ayır.
Bir gönderinin kaynağı adıyla anıp anmadığını veya ona bağlantı verip
vermediğini gör. Yalnızca takip ettiğin kurumlar, kişiler veya konularla ilgili
gönderileri tut.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## Neden X (Twitter) News Monitor with AI Analysis kullanmalısın?

- **Haberi spekülasyondan ayır.** Haberi tutmak & spekülasyonu veya tanıtımı
  elemek için `format` cevabına göre filtrele.
- **Hangi kaynakların gösterildiğini gör.** `sourceDomains`, çalıştırma boyunca
  bağlantı verilen alan adlarını sayar.
- **Bağlantılı Makaleler de sayılır.** Bir X Makalesine bağlantı veren gönderi,
  Makale hakkında da cevap alır.
- **Hedef başına kapsam.** Her hedef kendi biçim & kaynak atfı dağılımını & en
  iyi gönderilerini alır.
- **Neyin değiştiğini gör.** Önceki bir çalıştırmanın veri kümesi ID'sini
  `monitor.baselineDatasetId` içine ekle. Böylece her satır hangi kararların
  değiştiğini gösterir.
- **Kendi metnini kontrol et.** Aynı cevapları almak için başlıkları veya
  taslakları `texts` içine yapıştır. Çalıştırma X'ten hiçbir şey çekmez.
- **Tabloya hazır cevaplar.** `Flat answers` görünümü & CSV veya Excel dışa
  aktarımları her soru için 1 sütun gösterir.
- **Hesap veya anahtar gerekmez.** Yapay zeka destekli analiz fiyata dahildir.
  Yapay zeka anahtarına, X API anahtarına veya girişe ihtiyacın yok.

### Eksiksiz sonuçlar

- Geniş tarih aralıkları eksiksiz & hızlı gelir.
- Hangi operatörleri birleştirirsen birleştir, aramalar her eşleşmeyi döndürür.
- Filtreli sayfalar sonuçlar bitene kadar dolu gelir.
- Her cevap, X'te bulunan en eksiksiz veriyi tutar.

### Doğru satırlar

- Arama sonuçları sorguna uyan her gönderiyi tutar, başka hiçbir şeyi tutmaz.
- Kelime & ifade eşleştirme her dilde & alfabede çalışır.
- Dil filtreleri X'in etiketlediği her dilde çalışır.
- Korumalı hesaplar & gizli Listeler boş bir sayfa değil, net bir cevap alır.
- Yeniden gönderiler orijinal metnin tamamını taşır.
- Satırdaki her ID birebir doğru kalır.
- Bahsetmeler, bağlantılar, hashtag'ler & vurgular metindeki yerleriyle eşleşir.
- Onay rozetleri `x.com` üzerinde görünenle aynıdır.
- Satırlar yalnızca herkese açık veri tutar.
- En yeniden başlayan sonuçlar tarih sırasıyla gelir.
- Aramalar sorguları X'te yazdığın gibi kabul eder.
- Yer aramaları 6 dildeki adlarla çalışır.
- Çalışamayan bir arama hemen hata verir & nasıl düzelteceğini söyler.
- Bir tarih, hangi yaygın biçimde yazılırsa yazılsın tek bir anlama gelir.
- Aramalar `since_id` & `max_id` sınırlarını kabul eder.
- Reklamlar & tanıtılan içerikler satırlarına asla girmez.

### Güncel veri

- X değişiklik yayınladığında da okumalar çalışmaya devam eder.

### Hız

- Yavaş bir sayfa çalıştırmanı bekletmez.
- Aramalar yoğun konularda da hızlı kalır.
- Her sonraki sayfa hızlı gelir.
- Okumalar, satırları geldiği anda biter.
- Takılan Actor çağrıları kendi kendine toparlanır.

### Adil faturalama

- Hatalı girdi ücretsizdir & neyi düzelteceğini söyler.
- Yapay zeka analizi yalnızca analiz ettiği gönderiler için ücret alır.
- Actor'lar yalnızca teslim edilen, benzersiz & eşleşen satırlar için ücret
  alır.
- Yeniden başlatılan bir çalıştırma asla 2 kez ücret almaz.
- Çalıştırmalar harcama sınırının içinde kalır & tanılamalarını yine yazar.
- Yapay zeka Actor'ları başarısız veya atlanan analizler için ücret almaz.

### Güvenilirlik

- Tek seferlik bir hata çalıştırmanı başarısız yapmaz.
- Sayfalama bir sayfadan diğerine tutarlı kalır.
- Sayfalama asla sonsuz döngüye girmez.
- Süre dolduğunda o ana kadar bulunan satırlar tanılamalarla birlikte döner.
- Actor'lar kısa Xquik kesintilerini atlatır.
- Actor çalıştırmaları yeniden başlatılınca satırları tekrarlamadan devam eder.
- Tek bir hatalı satır bütün grubu bozmaz.
- Durdurulan çalıştırmalar satırlarını & raporlarını korur.
- Başlayamayan bir çalıştırma bile nedenini açıklar.
- Destek ekibi bir isteğin veya çalıştırmanın tam olarak ne döndürdüğünü
  görebilir.

### Ajanlar için tasarlandı

- Actor'lar başka Actor'lar için yazılmış girdileri kabul eder.
- Her çalıştırma neden bittiğini & yeniden denemen gerekip gerekmediğini söyler.

### Zengin veri

- Gönderi satırları Note Tweet metnini, düzenlemeleri, Topluluk Notlarını,
  erişim etiketlerini & yanıt kontrollerini taşır.
- Satırlar kaynak uygulamaları, medya sayılarını & profesyonel hesap verilerini
  taşır.
- Medya varyantlar, alternatif metin, boyutlar & kullanılabilirlik nedenleriyle
  gelir.
- Yapay zeka cevapları olasılıklar, güven değeri & bir soru sürümü taşır.
- Analiz çalıştırmaları arasındaki değişiklikler küçük dalgalanmalarla tersine
  dönmez.

### Kalite kontrolleri

- X'in gösterdiği her alan ya sunulur, ya bilerek dışarıda bırakılır ya da
  olmadığı kanıtlanır.
- Xquik her okumayı X üzerinde canlı test eder.

## X (Twitter) News Monitor with AI Analysis hangi verileri döndürür?

- **Biçim.** Haberi, yorumu, spekülasyonu, tanıtımı & hicvi birbirinden ayırır.
- **Atıf.** Bir iddianın kaynağını adıyla mı andığını, bağlantısını mı
  verdiğini, ilk elden mi olduğunu yoksa hiç kaynağı mı olmadığını gösterir.
- **İlgi.** Hedeflerinle ilgili gönderileri adaşlarından ayırır.
- **Eksiksiz kaynak kayıtları.** Her satır, varsa bağlantılı makaleler dahil,
  gönderinin sunduğu tüm alanları tutar.

## X'te haber gönderileri nasıl sınıflandırılır

Apify'da yeni misin? Önce
[ücretsiz bir hesap oluştur](https://console.apify.com/sign-up?fpr=xquik).
Ücretsiz plan kredi kartı istemez & her ay harcaman için $5 verir. Analiz edilen
gönderi başına $0.0003 fiyatla $5, platform kullanımı hariç analiz edilen 16.000
gönderiye kadar yeter. Sonra buraya dön & Try for free düğmesine bas.

1. `Nvidia earnings lang:en -filter:retweets` gibi arama terimleri, haber
   hesaplarının kullanıcı adlarını veya gönderi ID'lerini ekle.
2. `maxItems` değerini & tarih sınırları, `filter:links` ya da en az yeniden
   gönderi sayısı gibi veri çekme filtrelerini ayarla.
3. Takip ettiğin kurumları, kişileri veya konuları takma adlarıyla birlikte
   `analysis.targets` altına yaz. Konuyu `analysis.context` içinde daralt.
4. Çalıştırmayı başlat & veri kümesini aç.

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

### Actor neyi cevaplar

- Biçim haber, yorum, spekülasyon, tanıtım, hiciv, ilgisiz veya belirsiz
  olabilir.
- Atıf adlandırılmış, bağlantılı, ilk elden, yok veya belirsiz olabilir.
- İlgi, aktarılan olayın hedeflerinle ilgili olma olasılığıdır.

Sınıflandırma doğruluk kontrolü yapmaz. Bir kaynağın adını vermek onu güvenilir
yapmaz. Atıf, gönderinin neyi sunduğunu anlatır.

## Kendi metnini analiz et

Kendi taslaklarını, yanıtlarını, değerlendirmelerini veya notlarını `texts`
alanına yapıştır. Xquik'in X (Twitter) News Monitor Actor'ı bunları analiz eder.
X'ten hiçbir şey çekmez.

```json
{
  "texts": [
    "Central bank holds rates at 4.5%, signals 2 cuts next year.",
    "I was at the port this morning. Cranes are idle & trucks are queued."
  ]
}
```

- Her metin, bir gönderiyle aynı `analysis` cevaplarını içeren 1 satır olur.
- `tweet.id` değeri `text:1`, `text:2` diye sürer & `tweet.type` değeri `text`
  olur.
- Analiz edilen her metin, analiz edilen bir gönderiyle aynı $0.0003 tutar.
- `texts` ayarlıysa çalıştırma yalnızca bu metinleri analiz eder. X hedeflerini
  ayrı çalıştır.

## X'te haber gönderilerini sınıflandırmak ne kadar tutar?

Xquik'in X (Twitter) News Monitor Actor'ı analiz edilen gönderi başına
$0.0003'ten başlar. Başlatma ücreti almaz. Fiyata toplama & yapay zeka
maliyetleri dahildir. Yapay zeka hesabına, token'a veya anahtara ihtiyacın yok.
Fiyat gönderi başına en fazla 8 soruyu & 64.000 bayt bağlamı kapsar. Her soru
tanımı en fazla 8.000 bayt kullanabilir.

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

Her sonuçta `tweet` & `analysis` bulunur. Cevaplarda türler, soru sürümleri &
varsa olasılıklar yer alır. Analizi başarısız olan veya atlanan bir satır,
toplanan gönderiyi & bir `reason` alanını tutar. Cevap listesi boştur.

Bir gönderi bir X Makalesine bağlantı veriyorsa analiz o makaleyi de çeker.
Başlığı, önizlemeyi & metin bloklarını bağlam olarak ekler.
`analysis.contextAvailability.article`, `text_blocks`, `summary` veya
`not_supplied` bildirir. `summary` yalnızca başlık & önizleme demektir.

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
`Top format is reporting in 4 of 5 results.` Değişiklik bulmayan bir
karşılaştırma `No change since the earlier run.` yazar. Sorunla karşılaşan veya
büyük bir çalıştırma `run-report` da yazar. `alwaysSaveRunRecords` açık olan bir
çalıştırma da yazar. `run-report` özeti `results.analysisSummary` altında
tekrarlar.

Özet analiz edilen, başarısız & atlanan satırları sayar. Etkileşimi toplar & her
soruyu özetler.

- `format` dağılımı haberi yorumdan, spekülasyondan, tanıtımdan & hicivden
  ayırır.
- `attribution` adlandırılmış, bağlantılı, ilk elden & olmayan kaynakları sayar.
- `relevance` her hedefle ilgili gönderileri sayar.
- `targets` hedef başına bahsetmeleri verir. Her hedefin `top` alanı, her cevap
  kategorisi için en çok etkileşim alan gönderilerini listeler.
- Her `targets` kaydında `choices` bulunur. Bu alan, o hedefle ilgili
  gönderilerin biçim & atıf dağılımını verir.
- `sourceDomains`, çalıştırma boyunca bağlantı verilen alan adlarını sayar.
- `monitor.changedRows`, temel veri kümesinden bu yana kararları değişen
  gönderileri listeler.
- Her satır, bağlantı verdiği alan adlarını `sourceDomains` içinde listeler.
- Her satır, metninde bulunan `$NVDA` gibi `cashtags` değerlerini listeler.
- `monitor.baselineDatasetId` ayarlıysa özetin `monitor` bloğu karşılaştırma
  durumlarını sayar. En fazla 50 değişen satırı listeler.

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

`changes`, `previous` değerinden `current` değerine geçen her biçim, atıf veya
ilgi kararını listeler. Kararlar kategoriye, yuvarlanmış puan düzeyine veya
0,5'teki evet/hayır eşiğine göre karşılaştırılır. Bir karar yalnızca belirgin
biçimde değiştiğinde değişmiş sayılır. Çalıştırmalar arasında eşiğe çok yakın
kalan sonuçlar `unchanged` kalır.

`maxBaselineRows` değerini aşan veya farklı ayarlardan gelen bir temel
çalıştırma, çalıştırmayı toplamadan önce durdurur. Çalıştırma o zaman bir
tanılama satırı yazar. `maxBaselineRows` varsayılan olarak 100.000'dir.

## Görev örnekleri

50 herkese açık görevden birini seç. Her görev gerçek bir İngilizce aramayla &
sınırlı bir `maxItems` ile başlar. Hazır hedefler, bağlam & genel bakış veri
kümesi görünümü içerir. Çalıştırmadan önce aramayı veya hedefleri düzenle.

- [X'teki Nvidia haber gönderilerini sınıflandır](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-nvidia-news-posts-on-x)
- [X Makalesi haber gönderilerini sınıflandır](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-x-article-news-posts)
- [X'teki OpenAI haber gönderilerini sınıflandır](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-openai-news-posts-on-x)
- [X'teki Apple haber gönderilerini sınıflandır](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-apple-news-posts-on-x)
- [X'teki Tesla haber gönderilerini sınıflandır](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-tesla-news-posts-on-x)
- [X'teki SpaceX haber gönderilerini sınıflandır](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-spacex-news-posts-on-x)
- [X'teki Boeing haber gönderilerini sınıflandır](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-boeing-news-posts-on-x)
- [X'teki Pfizer haber gönderilerini sınıflandır](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-pfizer-news-posts-on-x)
- [X'teki Moderna haber gönderilerini sınıflandır](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-moderna-news-posts-on-x)
- [X'teki ExxonMobil haber gönderilerini sınıflandır](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-exxon-news-posts-on-x)
- [X'teki Federal Reserve haber gönderilerini sınıflandır](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-federal-reserve-news-posts-on-x)
- [X'teki European Central Bank haber gönderilerini sınıflandır](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-european-central-bank-news-posts-on-x)
- [X'teki Bank of England haber gönderilerini sınıflandır](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-bank-of-england-news-posts-on-x)

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
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)
  yapay zeka ile yükseliş, düşüş, nötr veya karışık duruşu, içerik türünü,
  kesinliği & varlık ilgisini etiketler. Hisse senedi, kripto veya alım satım
  konuşmalarını takip ettiğinde kullan. Analiz edilen gönderi başına $0.0003'ten
  başlar.
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

Hayır. Xquik'in X (Twitter) News Monitor Actor'ı yapay zeka maliyetlerini
fiyatına dahil eder. Yapay zeka hesabına, token'a veya anahtara ihtiyacın yok. X
API anahtarına, girişe veya kimlik bilgisine de ihtiyacın yok.

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
[API sekmesine](https://apify.com/xquik/x-twitter-news-monitor/api) bak. Düzenli
çalıştırmalar için Apify
[zamanlamalarını](https://docs.apify.com/platform/schedules) kullan. Neyin
değiştiğini görmek için önceki veri kümesi ID'sini `monitor.baselineDatasetId`
olarak gönder. Apify entegrasyonları da çalıştırmaları webhook'lara, Make,
Zapier, n8n & Google Sheets'e bağlar.

### Nereden yardım alırım?

Çalıştırma ID'siyle
[Issues sekmesinde](https://apify.com/xquik/x-twitter-news-monitor/issues) bir
issue aç. Anahtar-değer deposundaki ücretsiz tanılamalar dikkat gerektiren
çalıştırmaları açıklar. Hiç satır almayan bir çalıştırma, nedenini durum
metninde söyler.
