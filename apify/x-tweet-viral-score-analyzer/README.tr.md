[English](README.md) · [Español](README.es.md) · **Türkçe** ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer, Xquik MCP'yi kodlama ajanlarına bağlıyor](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Framer'ın Xquik scraper'larını Claude Code, Codex, Cursor & daha fazlasıyla nasıl kullandığını](https://youtu.be/4UOSpoOoC3Y?t=367)
6:07'den itibaren izle.

Xquik, en eksiksiz X verisini sunan, dünyanın en hızlı ve en ucuz X (Twitter)
scraper hizmetidir. Xquik'in X Tweet Viral Score Analyzer'ı her gönderiyi
puanlar. Her birine bir Viral Score tahmini & bir karar ekler. Diğer Apify
Actor'larının çoğu, filtrelemeden veya tekilleştirmeden önce ücret alır. Xquik
yalnızca teslim edilen, benzersiz ve filtrene uyan sonuçlar için ücret alır.
Yapay zeka maliyetleri gönderi başına fiyata dahildir. Yapay zeka hesabı, token
veya anahtar gerekmez.

Gönderilerin neden yayıldığını veya tutmadığını öğren & orijinal gönderi
verisini koru. Xquik'in **X Tweet Viral Score Analyzer with AI** Actor'ı eşleşen
gönderileri toplar. Yapay zeka her gönderinin 8 özelliğini puanlar. Actor bu
cevapları bir Viral Score tahminine & bir karara çevirir. Her satır gerçek
beğenileri, yeniden gönderileri, yanıtları & alıntıları korur. Her tahmini
gerçekte olanla karşılaştır.

- **Gönderi başına Viral Score.** Sabit, sürümlü kurallar her puanı 0 ile 100
  arasında hesaplar.
- **8 özellik cevabı.** Bir gönderinin neden yüksek veya düşük puan aldığını
  gösterir.
- **Kesin sınırlar.** Spam, öfke yemi veya sıradan makine metni gibi okunan
  gönderilerin puanını sınırlar.
- **Eksiksiz kaynak kayıtları.** Her satır, gönderinin sunduğu tüm alanları
  tutar.

Viral Score, ifadenin ne kadar işe yaradığını tahmin eder. Beğeni veya
görüntülenme öngörmez. X'in gönderileri nasıl sıraladığını da yeniden üretmez.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## Bir tweet'in viral puanı nasıl kontrol edilir

Apify'da yeni misin? Önce
[ücretsiz bir hesap oluştur](https://console.apify.com/sign-up?fpr=xquik).
Ücretsiz plan kredi kartı istemez & her ay harcaman için $5 verir. Analiz edilen
gönderi başına $0.0003 fiyatla $5, platform kullanımı hariç analiz edilen 16.000
gönderiye kadar yeter. Sonra buraya dön & Try for free düğmesine bas.

1. Arama terimleri, profil kullanıcı adları, gönderi URL'leri veya gönderi
   ID'leri ekle.
2. `maxItems` değerini & işinin gerektirdiği veri çekme filtrelerini ayarla.
3. Kitleni `analysis.context` içinde anlat ya da varsayılanı bırak.
4. Çalıştırmayı başlat & `Viral Score` veri kümesi görünümünü aç.

```json
{
  "searchTerms": ["from:NASA -filter:replies -filter:retweets"],
  "maxItems": 150,
  "analysis": { "context": "Space fans & general readers." }
}
```

### Actor neyi cevaplar

| Soru              | Cevap                                                            |
| ----------------- | ---------------------------------------------------------------- |
| Kanca             | 0 kanca yok, 1 net bir açılış, 2 keskin bir açılış               |
| Netlik            | 0 kafa karıştırıcı, 1 çaba istiyor, 2 ilk okumada net            |
| Bilgi değeri      | 0 yeni bir şey yok, 1 bilinen bir nokta, 2 işe yarar bir çıkarım |
| Mizah             | 0 komik değil, 1 biraz eğlenceli, 2 paylaşılacak kadar komik     |
| Öfke yemi         | Gönderinin esas olarak öfke kışkırtma olasılığı                  |
| Yapay zeka yazımı | Metnin sıradan makine metni gibi okunma olasılığı                |
| Spam              | Spam, dolandırıcılık, çekiliş veya etkileşim kasma olasılığı     |
| Tepki             | Paylaşma, yanıtlama, beğenme, tartışma veya görmezden gelme      |

Yapay zeka yazımı cevabı yalnızca üslubu değerlendirir. Gönderiyi kimin
yazdığını belirlemez.

### Viral puan nasıl çalışır

Kanca, netlik, sağladığı fayda & beklenen tepki puanı yükseltir. Sıradan makine
metni gibi okunan ifadeler puanı düşürür.

Kesin sınırlar olası spam, öfke yemi & sıradan makine metninin puanını sınırlar.
Puan 0 ile 100 arasında bir tam sayıdır.

| Karar         | Puan             |
| ------------- | ---------------- |
| `send_it`     | 70 ile 100 arası |
| `edit_first`  | 40 ile 69 arası  |
| `sleep_on_it` | 0 ile 39 arası   |

`viral.weights` bu kuralların sürümünü belirtir, örneğin `viral_lite:1`.
Kurallar her değiştiğinde bu değer de değişir. Başarısız veya atlanan bir
analizden sonra puan `null` olur. Varsayılan bir özellik cevabı eksikse de
`null` olur. Xquik'in X Tweet Viral Score Analyzer'ı eksik bir puanı asla
tahminle doldurmaz.

## Algoritma puanı tahmini

X, sıralama ağırlıklarını `xai-org/x-algorithm` deposundaki
`home-mixer/params/param.rs` dosyasında yayımladı. Xquik'in X Tweet Viral Score
Analyzer'ı bunlardan 4'ünü her gönderinin herkese açık sayılarına uygular.

| Sayı            | Ağırlık |
| --------------- | ------- |
| Beğeni          | 0,66    |
| Yanıt           | 5       |
| Yeniden gönderi | 1       |
| Alıntı          | 5       |

`viral.algorithmWeightedSum`, her sayının ağırlığıyla çarpımlarının toplamıdır.
`viral.algorithmScore` bu toplamı görüntülenmeye böler & 1.000 ile çarpar.
Görüntülenme sayısı olmayan bir gönderi bunun yerine takipçi sayısını kullanır.
`viral.algorithmBasis` böleni `views` veya `followers` olarak belirtir. Puanları
yalnızca aynı temelle karşılaştır. `viral.weightsVersion` ağırlıkları belirtir,
örneğin `x_algorithm_params:2026-10-14`.

Tahminin aşağıdaki sınırları var.

- X her ağırlığı, tek bir izleyici için öngördüğü bir olasılıkla çarpar. Actor
  gözlenen sayılarla çarpar. Sonuç X'in hesapladığı puan değil, bir tahmindir.
- X yer işaretleri veya görüntülenmeler için ağırlık yayımlamaz. Toplam ikisini
  de dışarıda bırakır.
- X bu 4 sinyalden fazlasını kullanır, örneğin gönderide kalma süresi &
  paylaşımlar. Herkese açık veri bunları göstermez.
- Bir gönderinin görüntülenmesi & takipçi sayısı yoksa puan `null` olur.
- Yapay zeka bu sayıları asla görmez. Yalnızca metni & bağlamı okur.

## Tahmine karşı gerçekleşen

Xquik'in X Tweet Viral Score Analyzer'ı her Viral Score'u gerçekte olanla
karşılaştırır. `viral.actualEngagementRate`,
`log10(1 + weighted sum per 1,000 followers)` değeridir. Logaritma, çok büyük
tek bir gönderinin etkisini sınırlar. Takipçi sayısı eksikse veya 0 ise oran
`null` olur.

Çalıştırma özetinin `viral.calibration` bloğu aşağıdaki alanları bildirir.

- `comparedPosts`, Viral Score'u & gerçekleşen oranı olan gönderileri sayar.
- `rankCorrelation`, -1 ile 1 arasında bir Spearman sıra korelasyonudur. Yüksek
  puanların yüksek oranlarla birlikte gidip gitmediğini gösterir.
- `calibrationScore`, korelasyonun 100 katıdır & en düşük 0 olur.
- `overperformers` & `underperformers` en fazla 5'er gönderi listeler. Her
  birinde gönderi ID'si, URL, Viral Score, gerçekleşen oran & `gap` bulunur.

`gap`, standartlaştırılmış gerçekleşen oran eksi standartlaştırılmış Viral
Score'dur. Farkı 1 standart sapmaya ulaşan gönderi listeye girer.

Kalibrasyonun aşağıdaki sınırları var.

- 10'dan az karşılaştırılan gönderi, `too_few_posts` nedeniyle `null` bir
  kalibrasyon verir. Aynı puanlar veya oranlar `no_variation` verir.
- Korelasyon yaklaşıktır.
- Kalibrasyon tek bir çalıştırmayı anlatır. Düşük bir puan, gönderilerin
  zamanlama, konu veya kitle bakımından farklı olduğu anlamına gelebilir. İfade
  tahmininin başarısız olduğunu kanıtlamaz.
- Yeni gönderiler etkileşim toplamayı bitirmemiştir. Benzer yaştaki gönderileri
  karşılaştır.

## Hesap raporu

Çalıştırma özetinin `viral.accounts` bloğu her yazar kullanıcı adı için
aşağıdakileri bildirir.

- Gönderi sayısı, ortalama Viral Score & ortalama gerçekleşen etkileşim oranı.
- Viral Score'a göre gönderi ID'si & URL ile en iyi & en kötü gönderi.
- Dilim başına ortalama Viral Score. Dilimler UTC paylaşım saati, metin uzunluğu
  bandı, medya varlığı, bağlantı varlığı & kendi gönderi dizisidir.

Metin uzunluğu bantları `short`, `medium`, `long` & `extended`. `short` 80
karakterde, `medium` 200'de & `long` 280'de biter. `extended` daha uzun
metinleri kapsar. Kendi gönderi dizisindeki bir gönderi, kendi yazarına yanıt
verir.

Raporun aşağıdaki sınırları var.

- Rapor, en çok puanlanmış gönderisi olan 50 kullanıcı adını listeler.
- Rapor bir çalıştırmanın ilk 1.000 kullanıcı adını izler. `untrackedPosts`,
  sonraki kullanıcı adlarının puanlanmış gönderilerini & kullanıcı adı olmayan
  gönderileri sayar.
- Az gönderili bir dilim pek bir şey söylemez. Ortalamaları karşılaştırmadan
  önce `posts` değerine bak.
- Dilimler bu çalıştırmada nelerin birlikte görüldüğünü gösterir. Nedeni
  göstermez.

## Lider tablosu

Çalıştırma özetinin `viral.leaderboard` bloğu, hesap raporundaki kullanıcı
adlarını sıralar. `byViralScore` ortalama Viral Score'a göre sıralar.
`byActualEngagementRate` ortalama gerçekleşen orana göre sıralar. Her liste
`rank`, `posts` & `average` ile en fazla 20 kullanıcı adı tutar.

Lider tablosunun aşağıdaki sınırları var.

- Bir kullanıcı adının sıralamaya girmesi için en az 3 puanlanmış gönderisi
  olmalı.
- Oran listesi, takipçi sayısı olmayan kullanıcı adlarını atlar.
- Eşitliği önce daha çok gönderi, sonra kullanıcı adı bozar.
- Lider tablosu bir hesabın tüm geçmişini değil, tek bir çalıştırmanın
  gönderilerini kapsar.

## Paylaşmadan önce bir taslağı puanla

Kendi metnini `texts` alanına yapıştır. Xquik'in X Tweet Viral Score Analyzer'ı
metni puanlar & X'ten hiçbir şey çekmez.

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
- `tweet.id` değeri `text:1`, `text:2` diye sürer & `tweet.type` değeri `text`
  olur.
- Taslağın henüz beğenisi veya görüntülenmesi yok, bu yüzden
  `viral.algorithmScore` değeri `null` kalır.
- Analiz edilen her metin, analiz edilen bir gönderiyle aynı $0.0003 tutar.
- `texts` ayarlıysa çalıştırma yalnızca bu metinleri analiz eder. X hedeflerini
  ayrı çalıştır.

## Viral puanları kontrol etmek ne kadar tutar?

Xquik'in X Tweet Viral Score Analyzer'ı analiz edilen gönderi başına $0.0003'ten
başlar. Başlatma ücreti almaz. Fiyata toplama, yapay zeka maliyetleri & Viral
Score dahildir. Yapay zeka hesabı, token veya anahtar gerekmez. Fiyat gönderi
başına en fazla 8 soruyu & 64.000 bayt bağlamı kapsar. Her soru tanımı en fazla
8.000 bayt olabilir.

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
  "tweet": { "id": "2100493544842494265", "text": "...", "likeCount": 12 },
  "viral": {
    "score": 74,
    "verdict": "send_it",
    "weights": "viral_lite:1",
    "stops": [],
    "algorithmScore": 9.46,
    "algorithmBasis": "views",
    "algorithmWeightedSum": 18.92,
    "actualEngagementRate": 0.7582,
    "weightsVersion": "x_algorithm_params:2026-10-14"
  },
  "viralScore": 74,
  "viralVerdict": "send_it",
  "viralAlgorithmScore": 9.46,
  "viralActualEngagementRate": 0.7582,
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

Her sonuçta `tweet`, `analysis` & `viral` bulunur. Cevaplarda türler, soru
sürümleri & varsa olasılıklar yer alır. `viral.stops`, puanı sınırlayan kesin
sınırları listeler. Analizi başarısız olan veya atlanan bir satır, toplanan
gönderiyi & bir `reason` alanını tutar. Cevap listesi boştur & puanı `null`
olur.

Anahtar-değer deposundaki ücretsiz tanılamalar geçersiz girdileri, eksik
sonuçları & kesilen toplamayı açıklar. Çalıştırma raporu toplanan satırları,
ücretlendirilen analizleri & bekleyen ücretleri ayrı tutar.

## Çalıştırma özeti & düz cevaplar

Bir çalıştırma 3 durumda kendi anahtar-değer deposuna bir `analysis-summary`
kaydı yazar.

- Bir sorunla karşılaşırsa veya büyükse.
- Karşılaştırması değişen, yeni veya karşılaştırılamayan bir gönderi bulursa.
- `alwaysSaveRunRecords` açıksa.

Diğer çalıştırmalar, bir serinin ilk çalıştırması dahil, bu kaydı atlar.
Durumları en önemli cevabı söyler, örneğin `Average Viral Score is 64.`
Değişiklik bulmayan bir karşılaştırma `No change since the earlier run.` yazar.
Sorunla karşılaşan veya büyük bir çalıştırma `run-report` da yazar.
`alwaysSaveRunRecords` açık olan bir çalıştırma da yazar. `run-report` özeti
`results.analysisSummary` altında tekrarlar.

Özet analiz edilen, başarısız & atlanan satırları sayar. Etkileşimi toplar & her
soruyu özetler.

- `viral` bloğu `averageScore` değerini & her kararın sayısını bildirir.
  Puanlanan & puanlanmayan satırları da sayar.
- Aynı blok yukarıda anlatılan `calibration`, `accounts` & `leaderboard`
  alanlarını tutar.
- Puan soruları bir ortalama & etkileşim ağırlıklı bir ortalama bildirir.
- `reaction` dağılımı, her tepkiye kaç gönderinin düştüğünü gösterir.
- `top` her tepki için en çok etkileşim alan 3 gönderiyi listeler.
- Her satır, bağlantı verdiği alan adlarını `sourceDomains` içinde listeler.
- Her satır, metninde bulunan `$NVDA` gibi `cashtags` değerlerini listeler.
- `monitor.baselineDatasetId` ayarlıysa özetin `monitor` bloğu karşılaştırma
  durumlarını sayar. En fazla 50 değişen satırı listeler.

Boş bir çalıştırma 0 değerli sayılar & `null` bir ortalama bildirir.

Her sonuç satırı ayrıca `viralScore`, `viralVerdict`, `viralAlgorithmScore` &
`viralActualEngagementRate` taşır. Soru ID'sine göre anahtarlanmış düz bir eşlem
olan `answers` alanını da taşır. Her değer seçilen kategori, puan veya
olasılıktır. `Viral Score` veri kümesi görünümü & CSV ya da Excel dışa
aktarımları bu sütunları gösterir. Sütunlar gönderinin yanında durur, bu yüzden
tablolarda JSON ayrıştırmaya gerek kalmaz. Başarısız & atlanan satırlarda eşlem
boştur.

## Önceki bir çalıştırmayla karşılaştır

Aynı analiz ayarlarıyla tamamlanmış önceki bir çalıştırmanın veri kümesi ID'sini
`monitor.baselineDatasetId` olarak gönder. Karşılaştırma o çalıştırmanın
satırlarını okur. O çalıştırma özetini atlamış olsa bile çalışır. Ardından her
satıra bir `monitor` nesnesi eklenir. Bu nesnenin durumu aşağıdaki değerleri
alır.

- Temel çalıştırma yoksa `first_run`.
- Önceki çalıştırmada olmayan gönderiler için `new_to_baseline`.
- Önceki çalıştırmada olan gönderiler için `unchanged` veya `changed`.

`changes`, `previous` değerinden `current` değerine geçen her özellik kararını
listeler. Kararlar kategoriye, yuvarlanmış puan düzeyine veya 0,5 eşiğindeki
evet/hayır cevabına göre karşılaştırılır. Bir karar yalnızca belirgin biçimde
değiştiğinde değişmiş sayılır. Çalıştırmalar arasındaki neredeyse eşit sonuçlar
`unchanged` kalır.

`maxBaselineRows` değerini aşan veya farklı ayarlardan gelen bir temel
çalıştırma, çalıştırmayı toplamadan önce durdurur. Çalıştırma o zaman bir
tanılama satırı yazar. `maxBaselineRows` varsayılan olarak 100.000'dir.

## Görev örnekleri

50 herkese açık görevden birini seç. Her görev gerçek bir İngilizce aramayla &
sınırlı bir `maxItems` ile başlar. `Viral Score` veri kümesi görünümünü
kullanır. Bazıları kitle bağlamı ekler. Çalıştırmadan önce aramayı veya bağlamı
düzenle.

- [Yapay zeka girişimi lansman gönderilerinin viral puanı](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-ai-startup-launch-tweets)
- [SaaS kurucularının build in public gönderilerinin viral puanı](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-saas-founder-build-in-public-posts)
- [Product Hunt lansman gönderilerinin viral puanı](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-product-hunt-launch-posts)
- [Geliştirici aracı duyurularının viral puanı](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-developer-tool-announcements)
- [Açık kaynak sürüm gönderilerinin viral puanı](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-open-source-release-posts)
- [Kripto proje duyurularının viral puanı](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-crypto-project-announcements)
- [Ebeveynlik mizahı gönderilerinin viral puanı](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-parenting-humor-posts)
- [Ofis mizahı gönderilerinin viral puanı](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-office-humor-posts)
- [Evcil hayvan fotoğrafı açıklamalarının viral puanı](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-pet-photo-captions)
- [NASA gönderilerinin viral puan denetimi](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-nasa-posts)
- [Duolingo gönderilerinin viral puan denetimi](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-duolingo-posts)
- [Wendy's gönderilerinin viral puan denetimi](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-wendys-posts)

Kalan görevler Actor sayfasında daha çok konuyu & marka hesabını kapsar.

## SSS & destek

Sık sorulan soruların cevapları, sonra da nereden yardım alacağın.

### Yapay zeka hesabı, X API anahtarı veya giriş gerekir mi?

Hayır. Xquik'in X Tweet Viral Score Analyzer'ı yapay zeka maliyetlerini fiyatına
katar. Yapay zeka hesabı, token veya anahtar gerekmez. X API anahtarı, giriş
veya kimlik bilgisi de gerekmez.

### Yüksek puan, gönderinin viral olacağı anlamına mı gelir?

Hayır. Puan, ifadenin genel bir okur için ne kadar işe yaradığını tahmin eder.
Erişimi zamanlama, kitle büyüklüğü, medya & şans da belirler. Puanlara
güvenmeden önce onları her satırdaki gerçek etkileşim sayılarıyla karşılaştır.

### Kendi sorularımı kullanabilir miyim?

Evet. Özel `analysis.questions` varsayılan soruların yerini alır. 1 ile 8
arasında `choice`, `score` veya `probability` sorusu gönder. Seçim soruları 2
ile 255 arasında kategori kabul eder. Puan sorularında en az 2 sıralı düzey
olmalı. Viral Score varsayılan 8 sorunun hepsine ihtiyaç duyar, bu yüzden özel
sorularla `null` kalır.

### Bir satır neden başarısız veya atlanan bir analizle döndü?

`analysis.status` değeri `failed` veya `skipped` olur. Actor gönderiyi topladı &
teslim etti, ama yapay zeka analizi tamamlanmadı. `analysis.reason` nedeni
belirtir. `context_limit`, bağlamının & hedeflerinin gönderiye yer bırakmadığı
anlamına gelir. `service_unavailable`, analiz hizmetine kısa bir süre
erişilemediği anlamına gelir. Bu satırların sonuç ücreti & puanı yok.
`analysis.context` alanını kısalt ya da etkilenen ID'leri yeniden çalıştır.

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
döndürür.

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
[API sekmesine](https://apify.com/xquik/x-tweet-viral-score-analyzer/api) bak.
Düzenli çalıştırmalar için Apify
[zamanlamalarını](https://docs.apify.com/platform/schedules) kullan. Neyin
değiştiğini görmek için önceki veri kümesi ID'sini `monitor.baselineDatasetId`
olarak gönder. Apify entegrasyonları da çalıştırmaları webhook'lara, Make,
Zapier, n8n & Google Sheets'e bağlar.

### Nereden yardım alırım?

Çalıştırma ID'siyle
[Issues sekmesinde](https://apify.com/xquik/x-tweet-viral-score-analyzer/issues)
bir issue aç. Anahtar-değer deposundaki ücretsiz tanılamalar dikkat gerektiren
çalıştırmaları açıklar. Hiç satır almayan bir çalıştırma, nedenini durum
metninde söyler.

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
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)
  yapay zeka ile her gönderi için kendi kategori, puan & evet/hayır sorularını
  cevaplar. Hazır analizler etiketlerine uymadığında kullan. Analiz edilen
  gönderi başına $0.0003'ten başlar.
- [X (Twitter) Monitor](https://apify.com/xquik/x-twitter-monitor) hesapların
  her yeni tweet'ini, yanıtını, alıntısını, yeniden gönderisini & profil
  değişikliğini genelde X gösterdikten sonra 1 saniyeden kısa sürede yakalar.
  Anahtar kelime tweet'lerini & takipleri de yakalar. X bir tweet'i gösterir
  göstermez bildirim istediğinde kullan. monitor-hour başına $0.0045'ten başlar.
