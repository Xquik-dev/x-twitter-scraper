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
scraper hizmetidir. X Tweet Viral Score Analyzer, her tweet'e bir Viral Score
tahmini & bir karar ekler. Diğer tüm Apify Actor'ları filtreleme veya
tekilleştirmeden önce ücret alır. Xquik yalnızca teslim edilen, benzersiz,
filtreyle eşleşen sonuçlar için ücret alır. Yapay zekâ maliyetleri tweet
başına fiyata dahil. Yapay zekâ sağlayıcısına ödeme yapmazsın, token
almazsın & anahtar getirmezsin.

Tweet'lerin neden yayıldığını veya tutmadığını öğren ve orijinal tweet
verisini sakla. **X Tweet Viral Score Analyzer with AI**, eşleşen tweet'leri
toplar. Yapay zeka her gönderinin 8 özelliğini değerlendirir. Actor bu
yanıtları 0 ile 100 arasında bir Viral Score tahminine & bir karara çevirir.
Her satır gerçek beğenileri, yeniden paylaşımları, yanıtları & alıntıları
korur, böylece her tahmini gerçekte olanla karşılaştırabilirsin.

- **Gönderi başına Viral Score**, denetleyebileceğin sabit ve yayımlanmış
  ağırlıklardan gelir.
- **8 özellik yanıtı**, bir gönderinin neden yüksek veya düşük puan aldığını
  gösterir.
- **Katı sınırlar**, spam, öfke tuzağı veya sıradan makine metni gibi okunan
  gönderilerin puanını sınırlar.
- **Eksiksiz kaynak kayıtları**, tweet'in gösterdiği her alanla.

Viral Score, ifadenin ne kadar iyi işlediğine dair bir tahmindir. Beğenileri
veya görüntülenmeleri öngörmez. X'in gönderileri nasıl sıraladığını yeniden
üretmez.

## Bir tweet'in Viral Score'u nasıl kontrol edilir

1. Arama terimleri, profil handle'ları, tweet URL'leri veya tweet ID'leri
   ekle.
2. `maxItems`'i ve görevinin ihtiyaç duyduğu çıkarma filtrelerini ayarla.
3. Kitleni `analysis.context` içinde tanımla ya da varsayılanı bırak.
4. Actor'ı çalıştır ve `Viral Score` veri kümesi görünümünü aç.

```json
{
  "searchTerms": ["from:NASA -filter:replies -filter:retweets"],
  "maxItems": 150,
  "analysis": { "context": "Space fans & general readers." }
}
```

### Actor neyi yanıtlar

| Soru              | Yanıt                                                        |
| ----------------- | ------------------------------------------------------------ |
| Kanca             | 0 kanca yok, 1 net açılış, 2 keskin açılış                   |
| Netlik            | 0 kafa karıştırıcı, 1 çaba istiyor, 2 ilk okumada net        |
| Bilgilendirici    | 0 yeni bir şey yok, 1 bilinen bir nokta, 2 işe yarar çıkarım |
| Komik             | 0 komik değil, 1 hafif eğlenceli, 2 paylaşılacak kadar komik |
| Öfke tuzağı       | Gönderinin esas olarak öfke kışkırtma olasılığı              |
| Yapay zeka yazımı | Metnin sıradan makine metni gibi okunma olasılığı            |
| Spam              | Spam, dolandırıcılık, çekiliş veya etkileşim kasma olasılığı |
| Tepki             | Paylaş, yanıtla, beğen, tartış veya yok say                  |

Yapay zeka yazımı yanıtı yalnızca üslubu değerlendirir. Gönderiyi kimin
yazdığını belirlemez.

### Actor Viral Score'u nasıl hesaplar

Actor her 0-2 puanını 0 ile 1 arasında bir paya ölçekler. Ardından puan
ekler:

| Bölüm                                          | Puan             |
| ---------------------------------------------- | ---------------- |
| Kanca                                          | en fazla 30      |
| Netlik                                         | en fazla 20      |
| Getiri, bilgilendirici & komikten yüksek olanı | en fazla 30      |
| Tepki                                          | en fazla 20      |
| Yapay zeka yazımı olasılığı                    | eksi en fazla 15 |

Tepki, 20 puanının bir payını kazanır: paylaş 1, yanıtla 0,8, beğen 0,6,
tartış 0,4 & yok say 0. Ardından katı sınırlar puanı sınırlar. 0,7'den
itibaren spam olasılığı puanı 20'de sınırlar. 0,7'den itibaren öfke tuzağı
olasılığı 35'te sınırlar. 0,8'den itibaren yapay zeka yazımı olasılığı 60'ta
sınırlar. Actor sonucu tam sayıya yuvarlar.

| Karar         | Puan             |
| ------------- | ---------------- |
| `send_it`     | 70 ile 100 arası |
| `edit_first`  | 40 ile 69 arası  |
| `sleep_on_it` | 0 ile 39 arası   |

`viral.weights`, bu kuralların sürümünü adlandırır, örneğin `viral_lite:1`.
Bir ağırlık, sınır veya eşik her değiştiğinde sürümü artırırız. Analiz
başarısız olduğunda, Actor analizi atladığında veya varsayılan bir özellik
yanıtı eksik olduğunda puan `null` olur. Actor eksik bir puanı asla tahminle
doldurmaz.

## Algorithm Score tahmini

X, sıralama ağırlıklarını `xai-org/x-algorithm` deposunda,
`home-mixer/params/param.rs` dosyasında yayımladı. Actor bunlardan 4'ünü her
gönderinin herkese açık sayılarına uygular:

| Sayı             | Ağırlık |
| ---------------- | ------- |
| Beğeni           | 0,5     |
| Yanıt            | 5       |
| Yeniden paylaşım | 1       |
| Alıntı           | 5       |

`viral.algorithmWeightedSum`, her sayının kendi ağırlığıyla çarpımlarının
toplamıdır. `viral.algorithmScore` bu toplamı görüntülenmelere böler & 1.000
ile çarpar. Görüntülenme sayısı olmayan bir gönderi bunun yerine takipçileri
kullanır. `viral.algorithmBasis` böleni adlandırır: `views` veya `followers`.
Yalnızca aynı temele sahip puanları karşılaştır. `viral.weightsVersion`
ağırlıkları adlandırır, örneğin `x_algorithm_params:2026-09-18`.

Sınırlar:

- X her ağırlığı tek bir izleyici için öngördüğü bir olasılıkla çarpar. Actor
  gözlemlenen sayılarla çarpar. Sonuç bir tahmindir, X'in hesapladığı puan
  değildir.
- X, yer imleri veya görüntülenmeler için ağırlık yayımlamaz. Toplam ikisini
  de dışarıda bırakır.
- X bu 4 sinyalden fazlasını kullanır, örneğin gönderide kalma süresi &
  paylaşımlar. Herkese açık veri bunları göstermez.
- Bir gönderinin görüntülenmesi & takipçi sayısı yoksa puan `null` olur.
- Yapay zeka bu sayıları asla görmez. Yalnızca metni & bağlamı okur.

## Tahmin ve gerçekleşen

Actor her Viral Score'u gerçekte olanla karşılaştırır.
`viral.actualEngagementRate`,
`log10(1 + weighted sum per 1,000 followers)` değeridir. Logaritma, çok büyük
tek bir gönderinin etkisini sınırlar. Takipçi sayısı eksikse veya 0 ise oran
`null` olur.

Çalıştırma özetinin `viral.calibration` bloğu şunları bildirir:

- `comparedPosts`: Viral Score'u & gerçekleşen oranı olan gönderiler.
- `rankCorrelation`: -1 ile 1 arasında bir Spearman sıra korelasyonu. Yüksek
  puanların yüksek oranlarla birlikte gidip gitmediğine bakar.
- `calibrationScore`: korelasyonun 100 katı, alt sınırı 0.
- `overperformers` & `underperformers`: her biri en fazla 5 gönderi, tweet
  ID'si, URL, Viral Score, gerçekleşen oran & `gap` ile.

`gap`, standartlaştırılmış gerçekleşen oran eksi standartlaştırılmış Viral
Score'dur. Farkı 1 standart sapmaya ulaşan gönderi bir listeye girer.

Sınırlar:

- 10'dan az karşılaştırılan gönderi, `too_few_posts` nedeniyle `null` bir
  kalibrasyon verir. Aynı puanlar veya oranlar `no_variation` verir.
- Actor belleği sabit tutmak için oranları 0,1 genişliğinde dilimlere
  gruplar. Aynı dilimdeki gönderiler berabere sayılır, bu yüzden korelasyon
  yaklaşıktır.
- Kalibrasyon tek bir çalıştırmayı anlatır. Düşük bir puan, ifade tahmininin
  başarısız olduğunu değil, gönderilerin zamanlama, konu veya kitle açısından
  farklı olduğunu gösterebilir.
- Yeni gönderiler etkileşim toplamayı bitirmemiştir. Benzer yaştaki
  gönderileri karşılaştır.

## Hesap raporu

Çalıştırma özetinin `viral.accounts` bloğu her yazar handle'ını bildirir:

- Gönderi sayısı, ortalama Viral Score & ortalama gerçekleşen etkileşim oranı.
- Viral Score'a göre en iyi & en kötü gönderi, tweet ID'si & URL ile.
- Dilim başına ortalama Viral Score: UTC paylaşım saati, metin uzunluğu bandı,
  medya var, bağlantı var & kendi thread'i.

Metin uzunluğu bantları şöyledir: 80 karaktere kadar `short`, 200'e kadar
`medium`, 280'e kadar `long` & üzeri `extended`. Kendi thread'indeki bir
gönderi kendi yazarına yanıt verir.

Sınırlar:

- Rapor, en çok puanlanmış gönderisi olan 50 handle'ı listeler.
- Actor bir çalıştırmanın ilk 1.000 handle'ını takip eder. `untrackedPosts`,
  sonraki handle'ların puanlanmış gönderilerini & handle'sız gönderileri
  sayar.
- Az gönderili bir dilim pek bir şey söylemez. Ortalamaları karşılaştırmadan
  önce `posts` değerine bak.
- Dilimler bu çalıştırmada nelerin birlikte gittiğini gösterir. Nedenselliği
  göstermez.

## Lider tablosu

Çalıştırma özetinin `viral.leaderboard` bloğu, hesap raporundaki handle'ları
sıralar. `byViralScore` ortalama Viral Score'a göre sıralar.
`byActualEngagementRate` ortalama gerçekleşen orana göre sıralar. Her liste
`rank`, `posts` & `average` ile en fazla 20 handle tutar.

Sınırlar:

- Bir handle'ın sıralamaya girmesi için en az 3 puanlanmış gönderisi olmalı.
- Oran listesi, takipçi sayısı olmayan handle'ları atlar.
- Eşitliği önce daha fazla gönderi, sonra handle adı bozar.
- Lider tablosu bir hesabın tüm geçmişini değil, tek bir çalıştırmanın
  gönderilerini kapsar.

## Paylaşmadan önce bir taslağı puanla

Kendi metnini `texts` alanına yapıştır. Actor metni puanlar & X'ten hiçbir
şey getirmez.

```json
{
  "texts": [
    "We shipped dark mode today. Try it and tell us what breaks.",
    "5 things we learned from 1,000 support tickets."
  ],
  "analysis": { "context": "Developers who use our app." }
}
```

- Her metin `viralScore`, `viralVerdict` & `viral.stops` içeren 1 satır olur.
- `tweet.id` değeri `text:1`, `text:2` & devamı şeklindedir, `tweet.type` ise
  `text` olur.
- Bir taslağın henüz beğenisi veya görüntülenmesi yoktur, bu yüzden
  `viral.algorithmScore` `null` kalır.
- Analiz edilen her metin, analiz edilen bir tweet gibi $0.0003 tutar.
- `texts` ayarlıyken çalıştırma yalnızca o metinleri analiz eder. X hedeflerini
  ayrı çalıştır.

## Fiyatlandırma

Yapay zekâ maliyetleri tweet başına fiyata dahil. Yapay zekâ sağlayıcısına ödeme yapmazsın, token almazsın & anahtar getirmezsin.

Başlangıç ücreti olmadan, başarıyla analiz edilen tweet başına $0.0003'ten
başlar. Fiyat toplamayı & Viral Score'u içerir. Analiz ödeneği 8 soru, soru
tanımı başına 8.000 bayt ve tweet başına 12.000 bayt bağlamdır. Çıkarma
filtreleri ve tekilleştirme analizden önce çalışır, bu yüzden filtrelenmiş
ve tekrarlanan satırlar hiçbir zaman analiz edilmez veya ücretlendirilmez.
Başarısız ve atlanan analizler ile tanılama satırlarının sonuç ücreti yoktur.
Apify, platform kullanımını ayrıca faturalandırır. Pricing sekmesi bunu
gösterir.

## Girdi ve çıktı örnekleri

Yukarıdaki girdi kopyalamaya hazırdır. Çıktı satırları şöyle görünür
(kısaltılmış):

```json
{
  "tweet": { "id": "2100493544842494265", "text": "...", "likeCount": 12 },
  "viral": {
    "score": 74,
    "verdict": "send_it",
    "weights": "viral_lite:1",
    "stops": [],
    "algorithmScore": 8.5,
    "algorithmBasis": "views",
    "algorithmWeightedSum": 17,
    "actualEngagementRate": 0.7202,
    "weightsVersion": "x_algorithm_params:2026-09-18"
  },
  "viralScore": 74,
  "viralVerdict": "send_it",
  "viralAlgorithmScore": 8.5,
  "viralActualEngagementRate": 0.7202,
  "analysis": {
    "status": "succeeded",
    "answers": [
      { "questionId": "hook", "type": "score", "value": 2, "confidence": 0.84 },
      { "questionId": "spam", "type": "probability", "probability": 0.03 },
      {
        "questionId": "reaction",
        "type": "choice",
        "value": "share",
        "confidence": 0.7
      }
    ]
  }
}
```

Her sonuç `tweet`, `analysis` ve `viral` içerir. Yanıtlar türleri, soru
sürümlerini ve mevcut olasılıkları içerir. `viral.stops`, puanı sınırlayan
katı sınırları listeler. Başarısız veya atlanan bir analiz, boş bir yanıt
listesi, bir `reason` ve `null` bir puan ile toplanan tweet'i korur.
Anahtar-değer deposundaki ücretsiz tanılamalar, geçersiz girdileri, eksik
sonuçları ve kesintiye uğrayan toplamayı açıklar. Çalıştırma raporu toplanan
satırları, ücretlendirilen analizleri ve bekleyen ücretleri ayırır.

## Çalıştırma özeti ve düz yanıtlar

Her çalıştırma, anahtar-değer deposuna bir `analysis-summary` kaydı yazar ve
çalıştırma raporunda `results.analysisSummary` altında tekrarlar. Analiz
edilen, başarısız ve atlanan satırları sayar, etkileşimi toplar ve her
soruyu özetler. `viral` bloğu `averageScore` değerini, her kararın sayısını &
Actor'ın kaç satırı puanladığını veya puansız bıraktığını bildirir. Aynı blok,
yukarıda anlatılan `calibration`, `accounts` & `leaderboard` bloklarını
tutar. Puan soruları bir ortalama & etkileşim ağırlıklı bir ortalama
bildirir. `reaction` bölünmesi, kaç tweet'in her tepkiye düştüğünü gösterir &
`top`, her tepki için en çok etkileşim alan üç tweet'i listeler. Boş bir
çalıştırma sıfır sayım & `null` bir ortalama bildirir. Her satır, bağlantı
verdiği ana bilgisayar adlarını `sourceDomains`'te & metninde bulunan `$NVDA`
gibi `cashtags`'i listeler. `monitor.baselineDatasetId` ayarlıysa özetin
`monitor` bloğu karşılaştırma durumlarını sayar & 50'ye kadar değişen satırı
listeler.

Her sonuç satırı ayrıca `viralScore`, `viralVerdict`, `viralAlgorithmScore`,
`viralActualEngagementRate` & `answers`'ı da taşır. `answers`, soru ID'sinden
seçilen kategoriye, puana veya olasılığa düz bir eşlemedir. `Viral Score`
veri kümesi görünümü ve CSV veya Excel dışa aktarımları, bu sütunları
tweet'in yanında gösterir, böylece elektronik tablolar JSON ayrıştırmasına
ihtiyaç duymaz. Başarısız ve atlanan satırlar boş bir eşleme taşır.

## Önceki bir çalıştırmayla karşılaştır

Aynı analiz ayarlarına sahip tamamlanmış önceki bir çalıştırmanın veri
kümesi ID'si olan `monitor.baselineDatasetId`'yi geçir. O zaman her satır bir
`monitor` nesnesi kazanır. Durumu, bir temel değer olmadan `first_run`,
önceki çalıştırmada bulunmayan tweet'ler için `new_to_baseline` & sahip
olduğu tweet'ler için `unchanged` veya `changed` olur. `changes`,
`previous`'tan `current`'a taşınan her özellik kararını listeler. Kararlar
kategoriye, yuvarlanmış puan seviyesine veya 0,5'te evet/hayır'a göre
karşılaştırılır. Bir karar üç durumda değişmiş sayılır. Önceki kategori 0,4
olasılığın altına düşer. Bir puan en az 0,6 seviye hareket eder. Bir
evet/hayır olasılığı eşikten en az 0,1 uzağa düşer. Çalıştırmalar arasındaki
yakın-berabere titremeler değişmemiş kalır. `maxBaselineRows`'un (varsayılan
100.000) üzerindeki veya farklı ayarlardan gelen temel değerler, toplamadan
önce bir tanılama satırıyla çalıştırmayı durdurur.

## Görev örnekleri

50 herkese açık görevden seç. Her biri sınırlı bir `maxItems` ile gerçek bir
İngilizce aramayla başlar & `Viral Score` veri kümesi görünümüyle gelir.
Bazıları kitle bağlamı ekler. Çalıştırmadan önce aramayı veya bağlamı
düzenle.

- [Viral score of AI startup launch tweets](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-ai-startup-launch-tweets)
- [Viral score of SaaS founder build in public posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-saas-founder-build-in-public-posts)
- [Viral score of Product Hunt launch posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-product-hunt-launch-posts)
- [Viral score of Developer tool announcements](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-developer-tool-announcements)
- [Viral score of Open source release posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-open-source-release-posts)
- [Viral score of Crypto project announcements](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-crypto-project-announcements)
- [Viral score of Parenting humor posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-parenting-humor-posts)
- [Viral score of Office humor posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-office-humor-posts)
- [Viral score of Pet photo captions](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-pet-photo-captions)
- [Viral score audit of NASA posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-nasa-posts)
- [Viral score audit of Duolingo posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-duolingo-posts)
- [Viral score audit of Wendy's posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-wendys-posts)

Kalan görevler, Actor sayfasında daha fazla konu ve marka hesabını kapsar.

## SSS ve destek

### Yüksek puan, bir tweet'in viral olacağı anlamına mı gelir?

Hayır. Puan, ifadenin genel bir okur için ne kadar iyi işlediğini tahmin
eder. Zamanlama, kitle büyüklüğü, medya & şans da erişimi belirler. Puanlara
güvenmeden önce onları her satırdaki gerçek etkileşim sayılarıyla
karşılaştır.

### Kendi sorularımı kullanabilir miyim?

Evet. Özel `analysis.questions`, varsayılanların yerini alır: 2-255
kategorili veya en az 2 sıralı seviyeli, 1-8 `choice`, `score` veya
`probability` sorusu. Viral Score 8 varsayılan sorunun hepsine ihtiyaç duyar,
bu yüzden özel sorular onu `null` bırakır.

### Bir satır neden `analysis.status`'u `failed` veya `skipped` olarak döndü?

Actor tweet'i topladı & teslim etti, ancak yapay zeka analizi
tamamlanmadı. `analysis.reason`, tweet ve bağlamı `maxContextBytes`'ı
aştığında `context_limit` veya yeniden denemelerden sonra
`service_unavailable` gibi nedeni adlandırır. Bu satırların sonuç ücreti &
puanı yoktur. `maxContextBytes`'ı (12.000'e kadar) artır veya etkilenen
ID'leri yeniden çalıştır.

### Analiz gerçekleri doğrular mı?

Hayır. Yanıtlar, gönderinin ne ifade ettiğini & bunu nasıl çerçevelediğini
açıklar. Olasılıklar model güvenini ifade eder, gerçeği değil. Önemli
sınıflandırmaları, her satırın koruduğu orijinal tweet'e karşı gözden
geçir.

### Hangi diller çalışır?

Çıkarma, X'in sunduğu her dili destekler. Analizi önce İngilizce müşteri
senaryolarında doğruluyoruz. Diğer desteklenen diller aynı yapıda yanıtlar
döndürür.

### Maliyeti nasıl sınırlarım?

Filtreler, tekilleştirme & `maxItems` analizden önce çalışır, bu yüzden
Actor yalnızca benzersiz, filtreyle eşleşen tweet'leri analiz eder &
ücretlendirir. Kesin arama operatörleri, tarih sınırları ve etkileşim
tabanları kullan, ve büyük bir çalıştırmadan önce yanıt kalitesini
kontrol etmek için küçük bir `maxItems` ile başla.

### Yardımı nereden alırım?

Actor sayfasında bir sorun aç veya çalıştırma ID'siyle
support@xquik.com ile iletişime geç. Anahtar-değer deposundaki ücretsiz
tanılamalar boş, kısmi veya kesintiye uğramış çalıştırmaları açıklar.

Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
"Twitter" ve "X", X Corp'un ticari markalarıdır.

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
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  Yapay zeka ile her tweet için kendi kategori, puan ve evet/hayır sorularını
  yanıtlar. Hazır analizler etiketlerine uymadığında kullan. Analiz edilen
  tweet başına $0.0003'ten başlar.
