[English](README.md) · [Español](README.es.md) · **Türkçe** ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer, Xquik MCP'yi kodlama ajanlarına bağlıyor](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Framer'ın Xquik scraper'larını Claude Code, Codex, Cursor & daha fazlasıyla nasıl kullandığını](https://youtu.be/4UOSpoOoC3Y?t=367)
6:07'den itibaren izle.

Xquik, en eksiksiz X verisini sunan, dünyanın en hızlı ve en ucuz X (Twitter)
scraper hizmetidir. Xquik'in X Tweet Sentiment Analysis'i her gönderiye tutum,
yoğunluk & alaycılık bilgisi ekler. Diğer Apify Actor'larının çoğu,
filtrelemeden veya tekilleştirmeden önce ücret alır. Xquik yalnızca teslim
edilen, benzersiz ve filtrene uyan sonuçlar için ücret alır. Yapay zeka
maliyetleri gönderi başına fiyata dahildir. Yapay zeka hesabı, token veya
anahtar gerekmez.

X (Twitter) gönderilerinin ardındaki tutumu ölç & orijinal gönderi verisini
koru. Xquik'in **X Tweet Sentiment Analysis with AI** Actor'ı eşleşen
gönderileri toplar. Her gönderiye yapay zeka destekli bir duygu durumu
kategorisi, yoğunluk düzeyi & alaycılık olasılığı ekler. Bir lansmana,
kampanyaya, bölüme veya tanınmış bir kişiye gelen tepkileri takip et. Güçlü
tepkileri geçerken yapılan bahsetmelerden ayır.

- **Gönderi başına duygu durumu.** Her gönderi kendi kategorisini alır, böylece
  her cevabı denetleyebilirsin.
- **Yoğunluk.** 0 ile 2 arasındaki bir düzey, vurgulu gönderileri ılımlı
  olanlardan ayırır.
- **Alaycılık olasılığı.** Düz anlamı tutumla çelişen gönderileri işaretler.
- **Eksiksiz kaynak kayıtları.** Her satır, gönderinin sunduğu tüm alanları
  tutar.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## Tweet duygu analizi nasıl yapılır

Apify'da yeni misin? Önce
[ücretsiz bir hesap oluştur](https://console.apify.com/sign-up?fpr=xquik).
Ücretsiz plan kredi kartı istemez & her ay harcaman için $5 verir. Analiz edilen
gönderi başına $0.0003 fiyatla $5, platform kullanımı hariç analiz edilen 16.000
gönderiye kadar yeter. Sonra buraya dön & Try for free düğmesine bas.

1. Arama terimleri, profil kullanıcı adları, gönderi URL'leri veya gönderi
   ID'leri ekle.
2. `maxItems` değerini & işinin gerektirdiği veri çekme filtrelerini ayarla.
3. Her gönderiyi kendi konusuna göre değerlendirmek için `analysis.targets`
   alanını boş bırak. Bir markaya, ürüne veya kişiye odaklanmak için onun
   adlarını & takma adlarını ekle.
4. Çalıştırmayı başlat & veri kümesini aç.

```json
{
  "searchTerms": ["\"season finale\" lang:en"],
  "maxItems": 200,
  "analysis": { "context": "Reactions to the show, not spoilers." }
}
```

### Actor neyi cevaplar

| Soru         | Cevap                                                 |
| ------------ | ----------------------------------------------------- |
| Duygu durumu | Olumlu, olumsuz, karışık, nötr veya belirsiz          |
| Yoğunluk     | 0 geçerken bahsetme, 1 net bir tutum, 2 vurgulu ifade |
| Alaycılık    | Düz anlamın tutumla çelişme olasılığı                 |

Hedef verirsen duygu durumu, hedeflere karşı tutumu değerlendirir. Verdiğin
alıntı veya yanıt bağlamını da kullanır. Hedef yoksa gönderinin ana konusunu
değerlendirir.

## Kendi metnini analiz et

Kendi taslaklarını, yanıtlarını, değerlendirmelerini veya notlarını `texts`
alanına yapıştır. Xquik'in X Tweet Sentiment Analysis'i bunları analiz eder.
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

## Başka bir duygu analizi Actor'ından geçiş yap

Mevcut bir girdiyi uyarlarken her ayar için 1 ad kullan.

| Mevcut girdi adı                                    | Xquik alanı      |
| --------------------------------------------------- | ---------------- |
| `query`, `searchQuery`                              | `twitterContent` |
| `queries`, `searchQueries`, `search`                | `searchTerms`    |
| `handles`, `usernames`, `username`, `profileTweets` | `twitterHandles` |
| `tweetUrls`, `postUrls`, `urls`                     | `startUrls`      |
| `tweetIDs`, `tweet_ids`, `postIds`, `tweetId`       | `tweetIds`       |
| `maxTweets`, `maxResults`, `count`, `max_posts`     | `maxItems`       |
| `sort`                                              | `queryType`      |
| `tweetLanguage`, `language`                         | `lang`           |
| `startDate`, `endDate`                              | `since`, `until` |

Actor bu yaygın adları doğrudan kabul eder. Diğer gönderi Actor'larının filtre
adlarını da okur. Burada alanı olmayan bir filtre, çalıştırmanın her aramasında
bir X arama operatörüne dönüşür & çalıştırma günlüğü bu operatörleri en başta
listeler. `sort` için `Latest` veya `Top` kullan. Dil kodlarını & tarih
sınırlarını koru. Sınırlar tüm hedefler genelinde geçerlidir. Bu girdi
çalıştırmaya hazır.

```json
{ "searchTerms": ["from:NASA"], "sort": "Latest", "maxItems": 5 }
```

Diğer girdileri çalıştırmadan önce dönüştürmen gerekir.

Tek bir `tweetUrl` değerini `startUrls` içine sar.

```json
{ "startUrls": ["https://x.com/NASA/status/2105727882588807607"] }
```

`text`, `Texts`, veri kümesi metinlerini veya dosya metinlerini `texts` içine
koy.

```json
{ "texts": ["Support fixed my issue. Thank you."] }
```

`hashtag` veya `cashtag` değerini arama metnine çevir.

```json
{ "searchTerms": ["#Artemis lang:en", "$AAPL lang:en"], "maxItems": 5 }
```

`minLikes`, `minReplies` & `minRetweets` yerine aşağıdaki alan adlarını kullan.

```json
{ "min_faves": 10, "min_replies": 2, "min_retweets": 3 }
```

Sonuçlar orijinal kaydı `tweet` içinde & cevapları `analysis.answers` içinde
tutar. Olumlu, olumsuz & nötr etiketleri eşleşen duygu durumu kategorilerine
eşle. `mixed` & `unclear` kategorilerini ayrı tut. Diğer duygu puanları farklı
ölçekler & anlamlar kullanabilir. Xquik'in yoğunluğu 0 ile 2 arasındadır &
ondalık içerebilir. Alaycılık bir olasılıktır. Güven, bir cevabın ne kadar kesin
olduğunu anlatır.

## Tweet duygu analizi ne kadar tutar?

Xquik'in X Tweet Sentiment Analysis'i analiz edilen gönderi başına $0.0003'ten
başlar. Başlatma ücreti almaz. Fiyata toplama & yapay zeka maliyetleri dahildir.
Yapay zeka hesabı, token veya anahtar gerekmez. Fiyat gönderi başına en fazla 8
soruyu & 64.000 bayt bağlamı kapsar. Her soru tanımı en fazla 8.000 bayt
olabilir.

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
  "tweet": { "id": "2100493544842494265", "text": "…", "likeCount": 12 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      {
        "questionId": "sentiment",
        "type": "choice",
        "value": "positive",
        "confidence": 0.91
      },
      {
        "questionId": "intensity",
        "type": "score",
        "value": 2,
        "confidence": 0.8
      },
      { "questionId": "sarcasm", "type": "probability", "probability": 0.04 }
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

Diğer çalıştırmalar, bir serinin ilk çalıştırması dahil, bu kaydı atlar.
Durumları en önemli cevabı söyler, örneğin
`Top sentiment is positive in 3 of 5 results.` Değişiklik bulmayan bir
karşılaştırma `No change since the earlier run.` yazar. Sorunla karşılaşan veya
büyük bir çalıştırma `run-report` da yazar. `alwaysSaveRunRecords` açık olan bir
çalıştırma da yazar. `run-report` özeti `results.analysisSummary` altında
tekrarlar.

Özet analiz edilen, başarısız & atlanan satırları sayar. Etkileşimi toplar & her
soruyu özetler.

- `sentiment` dağılımı, her tutuma kaç gönderinin düştüğünü gösterir.
- `engagementShares` aynı dağılımı beğeni, yeniden gönderi, yanıt & alıntıya
  göre ağırlıklandırır.
- `top` her tutum için en çok etkileşim alan 3 gönderiyi listeler.
- Her satır, bağlantı verdiği alan adlarını `sourceDomains` içinde listeler.
- Her satır, metninde bulunan `$NVDA` gibi `cashtags` değerlerini listeler.
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

`changes`, `previous` değerinden `current` değerine geçen her duygu durumu,
yoğunluk düzeyi veya alaycılık kararını listeler. Kararlar kategoriye,
yuvarlanmış puan düzeyine veya 0,5 eşiğindeki evet/hayır cevabına göre
karşılaştırılır. Bir karar yalnızca belirgin biçimde değiştiğinde değişmiş
sayılır. Çalıştırmalar arasındaki neredeyse eşit sonuçlar `unchanged` kalır.

`maxBaselineRows` değerini aşan veya farklı ayarlardan gelen bir temel
çalıştırma, çalıştırmayı toplamadan önce durdurur. Çalıştırma o zaman bir
tanılama satırı yazar. `maxBaselineRows` varsayılan olarak 100.000'dir.

## Görev örnekleri

50 herkese açık görevden birini seç. Sorduğun soruya uyan örnekle başla.
Görevlerin çoğu küçük sınırlar kullanır. Tarihli 2 arama 50 gönderi ister.
Kayıtlı girdisini kullanmak için bir görevi aç. Aşağıdaki kopyalanmaya hazır
girdiler & gözlemlenen sonuç sayıları ayar seçmene yardım eder.

Her başarılı satır duygu durumu, yoğunluk & alaycılık olasılığı döndürür. Her
biri orijinal gönderisini veya verdiğin metni cevapların yanında tutar. Bu
örnekler İngilizce girdiler & dil filtreleri kullanır. Bir dil etiketi yine de
bir gönderi veya alıntı içindeki başka dildeki metni kaçırabilir.

Hedef yoksa cevap gönderinin ana konusunu anlatır. Bir anahtar kelimenin geçmesi
başka bir şeyle ilgili olabilir. Birden çok hedef varsa duygu durumu cevabı
hepsini birlikte anlatır. Her hedef için ayrı bir cevap döndürmez.

Profil beğenileri gizli olabilir. Erişilemiyorsa profil yanıtlarını veya
gönderilerini kullan.

Arama sonuçlarında duyurular, tanıtımlar, şakalar & tekrarlanan metinler
olabilir. Farklı gönderi ID'leri bağımsız tepkileri veya müşteri kimliklerini
kanıtlamaz. Görüş ifadeleri & etkileşim filtreleri bir örneklem seçer.
Gönderileri geri bildirim saymadan önce incele. Analiz, gönderilerdeki iddiaları
doğrulamaz.

### Test edilmiş görev girdileri

Bir görevi aç. Input sekmesinde görsel alanlar & JSON bulunur. Başlatmadan önce
JSON'unu kopyala veya alanları değiştir.
[Apify görev girdilerini açıklar](https://docs.apify.com/actors/running/tasks).

Test tarihleri UTC kullanır. Sonuç sayıları garantili bir miktarı değil,
kaydedilen çalıştırmayı anlatır. 50 gönderilik tarihli örnekler, benzersiz
ID'lerin neden bağımsız görüşlerden farklı olduğunu gösterir.

#### Sezon finali değerlendirme taslakları

[Sezon finali değerlendirme metinleri](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-season-finale-reactions)

Sezon finali değerlendirme taslaklarında övgüyü eleştiriden ayır. 2026-10-01
tarihinde verdiğin 3 benzersiz metni gözlemledik. Sınırı 3 olarak ayarladık.
Bunlar izleyici araştırması değil, kendi örnek metinlerin.

#### Telefon lansmanı tartışması

[Eylül 2026 iPhone lansmanı gönderileri](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-iphone-launch-posts)

Lansman tartışmasını sabit bir eylül tarih aralığında incele. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık. Hem
duyurular hem kişisel görüşler eşleşebilir.

#### Devre arası gösterisi değerlendirmeleri

[Devre arası gösterisi değerlendirme metinleri](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-super-bowl-halftime-show)

Devre arası değerlendirmelerinde karışık yargıları ve alaycılığı kontrol et.
2026-10-01 tarihinde verdiğin 3 benzersiz metni gözlemledik. Sınırı 3 olarak
ayarladık. Bunlar canlı gösteri tepkileri değil, kendi örnek değerlendirmelerin.

#### Elektrikli araba deneyimleri

[Elektrikli araba deneyimi gönderileri](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-new-electric-car)

Elektrikli araba kullanmak veya seçmekle ilgili gönderileri bul. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık. Kişisel
ifadeler şakalarla veya ikinci elden anlatımlarla eşleşebilir.

#### Film tartışması

[Marvel filmi tartışma gönderileri](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-marvel-movie-audiences)

İzleyici yorumlarını seçmeden önce film tartışmasını incele. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık. Marvel,
kelimenin ilgisiz kullanımlarıyla eşleşebilir.

#### Sanatçının medya açıklamaları

[Taylor Swift medya açıklamalarının tonu](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-taylor-swift-album-reactions)

Sanatçının son paylaştığı medyanın yanındaki ifadelerini incele. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık.
Açıklamalar görsellerde veya videolarda gösterilen her şeyi anlatamaz.

#### Oyun çıkışı gönderi dizisi

[Oyun çıkışı güncelleme dizisi](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-video-game-launch)

Bir duyuruyu rakip oyunlarla ilgili yanıtların yanında oku. 2026-10-01 tarihinde
5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık. Gönderi dizisi
birkaç oyundan bahseder ve açılış gönderisini içerir.

#### Uzaktan çalışma tartışması

[Uzaktan çalışma tartışması](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-remote-work)

Uzaktan çalışma tartışmasında ifade edilen tutumları karşılaştır. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık. İş
ilanları ve tekrarlanan görüşler çıkabilir.

#### Havayolu gönderileri

[Havayolu tartışma gönderileri](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-airline-passengers)

Hizmet geri bildirimi seçmeden önce havayolu bahsetmelerini incele. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık. Bir
bahsetme, yazarın yolcu olduğunu kanıtlamaz.

#### Kolej futbolu tartışması

[Kolej futbolu tartışması](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-college-football-fans)

Taraftar görüşlerini kolej futbolu tanıtımından ayır. 2026-10-01 tarihinde 5
benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık. Taraftar görüşlerinin
yanında ön incelemeler ve tanıtımlar da eşleşebilir.

#### Faiz oranı tartışması

[Faiz oranı tartışması](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-interest-rates)

Faiz oranlarıyla ilgili piyasa ve politika tutumlarını incele. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık. Ana konu
bir siyasetçi veya piyasa olabilir.

#### Scooter tartışması

[Elektrikli scooter tartışması](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-electric-scooters)

Sürücü geri bildirimi seçmeden önce scooter tartışmasını bul. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık. Kişisel
deneyimlerin yanında reklamlar, araştırmalar ve şakalar da eşleşebilir.

#### Restoran deneyimleri

[Yeni restoran deneyimleri](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-restaurant-openings)

Yeni restoranlarla ilgili birinci ağızdan ifadeleri incele. 2026-10-01 tarihinde
5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık. Kişisel ifadeler
davetlerde veya önerilerde de geçebilir.

#### Herkese açık liste akışının tonu

[Herkese açık liste akışının tonu](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-ai-coding-assistants)

Herkese açık bir Listedeki gönderilerin tonunu incele. 2026-10-01 tarihinde 5
benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık. Üyeler başka konuları
tartışabilir ve başka birinin ifadelerini yeniden gönderebilir.

#### Cihaz profili yanıtları

[Google cihaz profili yanıtlarının tonu](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-smart-home-device-owners)

Yanıtlar dahil, bir cihaz profilinin ifadelerini incele. 2026-10-01 tarihinde 5
benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık. Eksik üst gönderi
bağlamı, bir profil yanıtının anlamını sınırlayabilir.

#### Maraton antrenmanı

[Maraton antrenmanı tartışması](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-marathon-runners)

Antrenman güncellemelerindeki ve maraton planlarındaki tutumları bul. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık. Koşucu
güncellemelerinin yanında planlar ve tanıtımlar çıkabilir.

#### Gezi planlama

[Kişisel Tokyo gezisi gönderileri](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-tourist-destinations)

Kişisel gezi planlarını ve seyahat hikayelerini incele. 2026-10-01 tarihinde 5
benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık. Adında Tokyo geçen
etkinlikler bir Japonya gezisini anlatmadan eşleşebilir.

#### Yayın platformu fiyat tartışması

[Netflix fiyat tartışması gönderileri](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-streaming-price-increases)

İptal nedenlerini incelemeden önce Netflix fiyat kaygılarını bul. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık. Fiyat
ifadeleri temsili bir izleyici örneklemini değil, kaygıları seçer.

#### Okul malzemesi alışverişi

[Ağustos 2026 okul malzemesi gönderileri](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-back-to-school-shoppers)

Bir ağustos aralığındaki 50 okul malzemesi gönderisini incele. 2026-10-01
tarihinde 50 benzersiz gönderi gözlemledik. Sınırı 50 olarak ayarladık.
İncelememizde 50 ID'nin 42'si açıkça ilgili satırdı.

#### Tren gecikmeleri

[Tren gecikmesi deneyimi gönderileri](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-public-transit)

Geciken trenlerle ilgili şikayetleri ve deneyimleri bul. 2026-10-01 tarihinde 5
benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık. Kişisel ifadeler resmi
duyuruları kaçırabilir.

#### Evcil hayvan maması tartışması

[Evcil hayvan maması deneyimi gönderileri](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-pet-food-brands)

Daha geniş bakım tartışması içindeki evcil hayvan maması bahsetmelerini incele.
2026-10-01 tarihinde 5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık.
Bakım veya veteriner tartışmaları mama markalarından tesadüfen bahsedebilir.

#### Seçilmiş fantezi spor gönderileri

[Fantezi spor gönderisi grubu](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-fantasy-football-apps)

Seçilmiş bir grup fantezi spor gönderisini analiz et. 2026-10-01 tarihinde 2
benzersiz gönderi gözlemledik. Sınırı 2 olarak ayarladık. Etiketler otomatik
olarak bir uygulamayla değil, her gönderinin konusuyla ilgilidir.

#### Kahve dükkanı deneyimleri

[Kahve dükkanı deneyimi gönderileri](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-coffee-shop-customers)

Müşteri geri bildirimi seçmeden önce kahve dükkanı yorumlarını bul. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık. Yazar
şikayetleri doğrulanmamış beyanlar olarak kalır.

#### Konut piyasası

[Konut piyasası tartışması](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-housing-market)

Konut piyasasıyla ilgili görüşleri ve haberleri incele. 2026-10-01 tarihinde 5
benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık. Haberler ve görüşler
farklı piyasa konularıyla ilgili olabilir.

#### Turnuva tartışması

[League of Legends turnuvası gönderileri](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-esports-tournament-viewers)

Turnuva tartışmasını bilet veya maç tanıtımından ayır. 2026-10-01 tarihinde 5
benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık. Bilet reklamları ve
maç raporları izleyici görüşü değildir.

#### Podcast yayıncısı gönderileri

[Podcast yayıncısı gönderilerinin tonu](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-podcast-episodes)

Podcast yayıncısının kendi mesajlarını incele. 2026-10-01 tarihinde 5 benzersiz
gönderi gözlemledik. Sınırı 5 olarak ayarladık. Yayıncının tonu dinleyici
memnuniyetini ölçmez.

#### Spor salonu karşılaştırmaları

[Spor salonu karşılaştırma metinleri](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-gym-memberships)

Değerlendirmelerinde 2 spor salonuna karşı ortak tutumu kontrol et. 2026-10-01
tarihinde verdiğin 3 benzersiz metni gözlemledik. Sınırı 3 olarak ayarladık. İki
hedef her metinde 1 duygu durumu cevabını paylaşır.

#### Araç kiralama

[Araç kiralama deneyimi gönderileri](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-car-rental-customers)

Hizmet kaygılarını incelemeden önce araç kiralama yorumlarını bul. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık.
Kiralayanların anlatımlarının yanında sorular ve tanıtımlar da eşleşebilir.

#### Kampüs tartışması

[Üniversite maliyeti ve kampüs gönderileri](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-university-life)

Maliyetle ilgili gönderileri seçmeden önce kampüs tartışmasını incele.
2026-10-01 tarihinde 5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık.
Kampüs haberleri ve eleştiriler öğrenci deneyimlerini kanıtlamaz.

#### Düğün planlama

[Kişisel düğün planlama gönderileri](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-wedding-planning-posts)

Düğün planları ve maliyetleriyle ilgili birinci ağızdan ifadeleri bul.
2026-10-01 tarihinde 5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık.
Planlama deneyimlerinin yanında hikayeler, şakalar ve tesadüfi ifadeler de
eşleşebilir.

#### Şarj deneyimleri

[Elektrikli araç şarj deneyimi gönderileri](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-ev-charging-experiences)

Elektrikli araç tartışması içindeki şarj deneyimlerini incele. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık. Şarj,
araçla ilgili başka bir kaygının yanında ikincil kalabilir.

#### Vergi beyannamesi tartışması

[İlkbahar 2026 TurboTax beyanname gönderileri](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-tax-filing-software)

Beyanname tartışmasını sabit bir ilkbahar tarih aralığında incele. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık. Gönderiler
güncel ücretleri veya vergi kurallarını doğrulamaz.

#### Tema parkı ziyaretleri

[Tema parkı ziyareti tartışması](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-theme-park-visitors)

Ziyaret tepkilerini seçmeden önce tema parkı bahsetmelerini bul. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık. Tesadüfi
göndermeler, başka bir konudaki uzun gönderilerle eşleşebilir.

#### Market harcamaları

[Market bütçesi deneyimi gönderileri](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-grocery-prices)

Market harcamalarıyla ilgili birinci ağızdan yorumları bul. 2026-10-01 tarihinde
5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık. Daha geniş siyaset,
beslenme veya içerik üreticisi tartışmaları market harcamalarından bahsedebilir.

#### Kamera tartışması

[Telefon kamerası tartışması](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-phone-camera-reviews)

Kamera bahsetmelerini fotoğrafların, değerlendirmelerin ve duyuruların yanında
incele. 2026-10-01 tarihinde 5 benzersiz gönderi gözlemledik. Sınırı 5 olarak
ayarladık. Kamera bahsetmeleri başka duyurularda tesadüfi olabilir.

#### Seçilmiş spor ayakkabı gönderisi

[Seçilmiş bir spor ayakkabı gönderisi](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-sneaker-drop-reactions)

Geniş bir anahtar kelime araması yapmadan bilinen bir gönderiyi analiz et.
2026-10-01 tarihinde 1 benzersiz gönderi gözlemledik. Sınırı 1 olarak ayarladık.
Seçilen bu açıklama, görselinin her ayrıntısını anlatmaz.

#### Destek sohbet botları

[Destek sohbet botu tartışma gönderileri](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-customer-support-chatbots)

Hizmet şikayetlerini seçmeden önce destek sohbet botu tartışmasını bul.
2026-10-01 tarihinde 5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık.
Duygusal destek botları ve işletme yanıtları da eşleşebilir.

#### Festival tartışması

[Nisan 2026 Coachella tartışması](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-music-festival-attendees)

Bir nisan aralığındaki 50 festival gönderisini incele. 2026-10-01 tarihinde 50
benzersiz gönderi gözlemledik. Sınırı 50 olarak ayarladık. 50 ID'de 47 ilgili
satır ve tekrarlanan haber metni vardı.

#### Elektrik faturaları

[Elektrik faturası tartışması](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-electric-bills)

Kişisel elektrik maliyetlerini politika tartışmasının yanında incele. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık. Politika
iddiaları ve fiyat tahminleri doğrulanmamış kalır.

#### Basketbol kadro değişiklikleri

[NBA takas ve imza tartışması](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-nba-trade-reactions)

Taraftar tepkilerini seçmeden önce takas ve imza tartışmasını bul. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık. Başka
haberler oyunculardan veya takımlardan tesadüfen bahsedebilir.

#### Konaklama tartışması

[Airbnb konaklama tartışması](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-airbnb-stays)

Konaklama tartışması içinde Airbnb'ye karşı tutumlara odaklan. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık. Misafir
hikayelerinin yanında ev sahibi tanıtımları ve uygulama gönderileri çıkabilir.

#### Kitap tepkileri

[Kitap okuma tepkisi gönderileri](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-book-club-readers)

Kitap kulübü üyeliği varsaymadan okuma tepkilerini incele. 2026-10-01 tarihinde
5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık. Hem film
karşılaştırmaları hem kişisel okuma görüşleri eşleşebilir.

#### Yemek kiti deneyimleri

[HelloFresh deneyimi gönderileri](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-meal-kit-services)

Ürün deneyimlerini incelemeden önce yemek kiti yorumlarını bul. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık. Planlar,
reklamlar ve daha geniş kişisel hikayeler markadan bahsedebilir.

#### Yarış tartışması

[Formula 1 yarışı tartışma gönderileri](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-formula-one-race-weekends)

Yarış tartışmasını takım ve pilot açıklamalarının yanında incele. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık.
Alıntılanan pilot açıklamaları farklı ID'lerde tekrarlanabilir.

#### Flört uygulaması deneyimleri

[Flört uygulaması deneyimi gönderileri](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-dating-app-experiences)

Flört uygulaması deneyimlerini, eşleşme yorumlarını ve şakaları bul. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık. Eşleşme
yorumları ve şakalar müşteri kimliklerini doğrulamaz.

#### Havalimanı bekleme gönderileri

[Havalimanı bekleme ve lounge gönderileri](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-airport-travelers)

Havalimanı bekleme yorumlarını seyahat duyurularının yanında incele. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık. Kişisel
bekleme deneyimlerinin yanında resmi duyurular çıkabilir.

#### Okul yemeği tartışması

[Okul yemeği tartışması](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-school-lunch-programs)

Okul yemekleriyle ilgili kişisel gönderileri ve politika tartışmasını incele.
2026-10-01 tarihinde 5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık.
Yazarlar arasında yalnızca veliler değil, kurumlar da olabilir.

#### Bira tadımı

[Zanaat birası tadımı gönderileri](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-craft-beer-drinkers)

Değerlendirme örnekleri seçmeden önce bira tadımı görüşlerini bul. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık. Bağlantılı
kısa açıklamalarda net bir tutum için yeterli bağlam olmayabilir.

#### Kenetlenme duyurusu alıntıları

[SpaceX kenetlenme duyurusu alıntıları](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-space-launches)

Tek bir kenetlenme duyurusunun sabit bir zamandan sonraki alıntılarını incele.
2026-10-01 tarihinde 5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık.
Alıntılar yalnızca tepki değil, davet veya nötr betimleme de olabilir.

#### Doğum günü yanıtları

[NASA doğum günü yanıtları](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-replies-to-a-news-post)

Tek bir doğum günü gönderisine gelen doğrudan yanıtları incele. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınırı 5 olarak ayarladık. Eksik kök
gönderi bağlamı, bir yanıtın cevabının anlamını sınırlayabilir.

Sonuçları incelerken `maxItems` değerini küçük tut. Sınır mevcut veriyi değil,
çıktıyı sınırlar. Daha az gönderi uygunsa filtrelerini değiştirmeden önce
çalıştırma raporunu kontrol et. Tarihler veya etkileşim alt sınırı gibi her
seferinde 1 ayarı genişlet. Değiştirdiğin ayarın kaydını tut.

Başarısız analizlerde `analysis.reason` alanını incele & yalnızca etkilenen
ID'leri yeniden dene. Bir gönderinin yanıtları eksik görünüyorsa ücretsiz
tanılama satırını oku. Bu satır, X'in saydığından az yanıt gösterdiği durumları
söyler. Medya açıklamaları bir görselde veya videoda gösterilen her şeyi
anlatamaz. Eksik alıntı veya yanıt bağlamı bir cevabı belirsiz yapabilir.

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
- [X (Twitter) Monitor](https://apify.com/xquik/x-twitter-monitor) hesapların
  her yeni tweet'ini, yanıtını, alıntısını, yeniden gönderisini & profil
  değişikliğini genelde X gösterdikten sonra 1 saniyeden kısa sürede yakalar.
  Anahtar kelime tweet'lerini & takipleri de yakalar. X bir tweet'i gösterir
  göstermez bildirim istediğinde kullan. monitor-hour başına $0.0045'ten başlar.

## SSS & destek

Sık sorulan soruların cevapları, sonra da nereden yardım alacağın.

### Yapay zeka hesabı, X API anahtarı veya giriş gerekir mi?

Hayır. Xquik'in X Tweet Sentiment Analysis'i yapay zeka maliyetlerini fiyatına
katar. Yapay zeka hesabı, token veya anahtar gerekmez. X API anahtarı, giriş
veya kimlik bilgisi de gerekmez.

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
[API sekmesine](https://apify.com/xquik/x-tweet-sentiment-analysis/api) bak.
Düzenli çalıştırmalar için Apify
[zamanlamalarını](https://docs.apify.com/platform/schedules) kullan. Neyin
değiştiğini görmek için önceki veri kümesi ID'sini `monitor.baselineDatasetId`
olarak gönder. Apify entegrasyonları da çalıştırmaları webhook'lara, Make,
Zapier, n8n & Google Sheets'e bağlar.

### Nereden yardım alırım?

Çalıştırma ID'siyle
[Issues sekmesinde](https://apify.com/xquik/x-tweet-sentiment-analysis/issues)
bir issue aç. Anahtar-değer deposundaki ücretsiz tanılamalar dikkat gerektiren
çalıştırmaları açıklar. Hiç satır almayan bir çalıştırma, nedenini durum
metninde söyler.
