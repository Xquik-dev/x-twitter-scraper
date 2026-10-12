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
scraper hizmetidir. Xquik'in X Tweet Sentiment Analysis'i her gönderiye
(tweet'e) tutum, yoğunluk ve alaycılık bilgisi ekler. Diğer Apify Actor'larının
çoğu, filtrelemeden veya tekilleştirmeden önce ücret alır. Xquik yalnızca
teslim edilen, benzersiz ve filtrene uyan sonuçlar için ücret alır. Yapay zeka
maliyetleri gönderi başına fiyata dahildir. Yapay zeka hesabı, token veya
anahtar gerekmez.

X (Twitter) gönderilerinin ardındaki tutumu ölç, orijinal gönderi verisini de
sakla. Xquik'in **X Tweet Sentiment Analysis with AI** Actor'ı eşleşen
gönderileri toplar. Her gönderiye yapay zeka destekli bir duygu durumu
kategorisi, yoğunluk düzeyi ve alaycılık olasılığı ekler. Bir lansmana,
kampanyaya, bölüme veya tanınmış bir kişiye gelen tepkileri takip et. Güçlü
tepkileri geçerken yapılan bahsetmelerden ayır.

- **Gönderi başına duygu durumu.** Her gönderi kendi kategorisini alır, böylece
  her cevabı denetleyebilirsin.
- **Yoğunluk.** 0 ile 2 arasındaki bir düzey, vurgulu gönderileri ılımlı
  olanlardan ayırır.
- **Alaycılık olasılığı.** Sözcükleri tutumla çelişen gönderileri işaretler.
- **Eksiksiz kaynak kayıtları.** Her satır, gönderinin sunduğu tüm alanları
  tutar.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## Tweet duygu analizi nasıl yapılır

1. Arama terimi, profil kullanıcı adı, gönderi URL'si veya gönderi ID'si ekle.
2. `maxItems` değerini ve işinin gerektirdiği veri çekme filtrelerini ayarla.
3. Her gönderiyi kendi konusuna göre değerlendirmek için `analysis.targets`
   alanını boş bırak. Bir markaya, ürüne veya kişiye odaklanmak için onun
   adlarını ve takma adlarını ekle.
4. Çalıştırmayı başlat ve veri kümesini aç.

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
| Alaycılık    | Sözcüklerin tutumla çelişme olasılığı                 |

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
- `tweet.id` değeri `text:1`, `text:2` diye devam eder. `tweet.type` değeri
  `text` olur.
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
bir X arama operatörüne dönüşür ve çalıştırma günlüğü bu operatörleri en başta
listeler. `sort` için `Latest` veya `Top` kullan. Dil kodlarını ve tarih
sınırlarını koru. Sınırlar tüm hedeflerin toplamı için geçerlidir. Bu girdi
çalıştırmaya hazır:

```json
{ "searchTerms": ["from:NASA"], "sort": "Latest", "maxItems": 5 }
```

Diğer girdileri çalıştırmadan önce dönüştürmen gerekir.

Tek bir `tweetUrl` değerini `startUrls` içine sar:

```json
{ "startUrls": ["https://x.com/NASA/status/2105727882588807607"] }
```

`text`, `Texts`, veri kümesi metinlerini veya dosya metinlerini `texts` içine
koy:

```json
{ "texts": ["Support fixed my issue. Thank you."] }
```

`hashtag` veya `cashtag` değerini arama metnine çevir:

```json
{ "searchTerms": ["#Artemis lang:en", "$AAPL lang:en"], "maxItems": 5 }
```

`minLikes`, `minReplies` ve `minRetweets` yerine şu alan adlarını kullan:

```json
{ "min_faves": 10, "min_replies": 2, "min_retweets": 3 }
```

Sonuçlar orijinal kaydı `tweet` içinde, cevapları `analysis.answers` içinde
tutar. Olumlu, olumsuz ve nötr etiketleri eşleşen duygu durumu kategorilerine
eşle. `mixed` ve `unclear` kategorilerini ayrı tut. Diğer duygu puanları farklı
ölçekler ve anlamlar kullanabilir. Xquik'in yoğunluğu 0 ile 2 arasındadır ve
ondalık içerebilir. Alaycılık bir olasılıktır. Güven, bir cevabın ne kadar kesin
olduğunu anlatır.

## Tweet duygu analizi ne kadar tutar?

Xquik'in X Tweet Sentiment Analysis'i analiz edilen gönderi başına $0.0003'ten
başlar. Başlatma ücreti almaz. Fiyata toplama ve yapay zeka maliyetleri
dahildir. Yapay zeka hesabı, token veya anahtar gerekmez. Fiyat gönderi başına
en fazla 8 soruyu ve 64.000 bayt bağlamı kapsar. Her soru tanımı en fazla 8.000
bayt olabilir.

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
`Top sentiment: positive in 3 of 5 results.` Değişiklik bulmayan bir
karşılaştırma `No change since the earlier run.` yazar. Sorunla karşılaşan veya
büyük bir çalıştırma `run-report` da yazar. `alwaysSaveRunRecords` açık olan
bir çalıştırma da yazar. `run-report` özeti `results.analysisSummary` altında
tekrarlar.

Özet analiz edilen, başarısız ve atlanan satırları sayar. Etkileşimi toplar ve
her soruyu özetler.

- `sentiment` dağılımı, her tutuma kaç gönderinin düştüğünü gösterir.
- `engagementShares` aynı dağılımı beğeni, yeniden gönderi, yanıt ve alıntıya
  göre ağırlıklandırır.
- `top` her tutum için en çok etkileşim alan 3 gönderiyi listeler.
- Her satır, bağlantı verdiği alan adlarını `sourceDomains` içinde listeler.
- Her satır, metnindeki `$NVDA` gibi `cashtags` değerlerini listeler.
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

`changes`, `previous` değerinden `current` değerine geçen her duygu durumu,
yoğunluk düzeyi veya alaycılık kararını listeler. Kararlar kategoriye,
yuvarlanmış puan düzeyine veya 0,5'teki evet/hayır eşiğine göre karşılaştırılır.
Bir karar yalnızca belirgin biçimde değiştiğinde değişmiş sayılır. Çalıştırmalar
arasındaki küçük farklar `unchanged` kalır.

`maxBaselineRows` değerini aşan veya farklı ayarlardan gelen bir temel
çalıştırma, çalıştırmayı toplamadan önce durdurur. Çalıştırma sonra bir
tanılama satırı yazar. `maxBaselineRows` varsayılan olarak 100.000'dir.

## Görev örnekleri

50 herkese açık görevden birini seç. Sorduğun soruya uyan örnekle başla.
Görevlerin çoğu küçük sınırlar kullanır. Tarihli 2 arama 50 gönderi ister.
Kayıtlı girdisini kullanmak için bir görevi aç. Aşağıdaki kopyalanmaya hazır
girdiler ve gözlemlenen sonuç sayıları ayar seçmene yardım eder.

Her başarılı satır duygu durumu, yoğunluk ve alaycılık olasılığı döndürür. Her
biri orijinal gönderisini veya verdiğin metni cevapların yanında tutar. Bu
örnekler İngilizce girdiler ve dil filtreleri kullanır. Bir dil etiketi yine de
bir gönderi veya alıntı içindeki başka dildeki metni kaçırabilir.

Hedef yoksa cevap gönderinin ana konusunu anlatır. Bir anahtar kelimenin geçmesi
başka bir şeyle ilgili olabilir. Birden çok hedef varsa duygu durumu cevabı
hepsini birlikte anlatır. Her hedef için ayrı bir cevap döndürmez.

Profil beğenileri gizli olabilir. Erişilemiyorsa profil yanıtlarını veya
gönderilerini kullan.

Arama sonuçlarında duyurular, tanıtımlar, şakalar ve tekrarlanan metinler
olabilir. Farklı gönderi ID'leri bağımsız tepkileri veya müşteri kimliklerini
kanıtlamaz. Görüş ifadeleri ve etkileşim filtreleri bir örneklem seçer.
Gönderileri geri bildirim saymadan önce incele. Analiz, gönderilerdeki iddiaları
doğrulamaz.

### Test edilmiş görev girdileri

Bir görevi aç. Input sekmesinde görsel alanlar ve JSON bulunur. Başlatmadan önce
JSON'unu kopyala veya alanları değiştir.
[Apify görev girdilerini açıklar](https://docs.apify.com/actors/running/tasks).

Test tarihleri UTC kullanır. Sonuç sayıları kaydedilen çalıştırmayı anlatır,
garantili bir miktarı değil. 50 gönderilik tarihli örnekler, benzersiz ID'lerin
neden bağımsız görüşlerle aynı olmadığını gösterir.

#### Sezon finali değerlendirme taslakları

[Season finale review texts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-season-finale-reactions)

Sezon finali değerlendirme taslaklarında övgüyü eleştiriden ayır. Verdiğin 3
benzersiz metni 2026-10-01 tarihinde gözlemledik. Sınır: 3. Bunlar kendi örnek
metinlerin, izleyici araştırması değil.

#### Telefon lansmanı tartışması

[September 2026 iPhone launch posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-iphone-launch-posts)

Lansman tartışmasını sabit bir eylül tarih aralığında incele. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınır: 5. Hem duyurular hem kişisel
görüşler eşleşebilir.

#### Devre arası gösterisi değerlendirmeleri

[Halftime show review texts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-super-bowl-halftime-show)

Devre arası değerlendirmelerinde karışık yargıları ve alaycılığı kontrol et.
Verdiğin 3 benzersiz metni 2026-10-01 tarihinde gözlemledik. Sınır: 3. Bunlar
kendi örnek değerlendirmelerin, canlı gösteri tepkileri değil.

#### Elektrikli araba deneyimleri

[Electric car experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-new-electric-car)

Elektrikli araba kullanmak veya seçmekle ilgili gönderileri bul. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınır: 5. Kişisel ifadeler şakalarla
veya ikinci elden anlatımlarla eşleşebilir.

#### Film tartışması

[Marvel movie discussion posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-marvel-movie-audiences)

İzleyici yorumlarını seçmeden önce film tartışmasını incele. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınır: 5. Marvel, kelimenin ilgisiz
kullanımlarıyla eşleşebilir.

#### Sanatçının medya açıklamaları

[Taylor Swift media caption tone](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-taylor-swift-album-reactions)

Sanatçının son medyaların yanındaki ifadelerini incele. 2026-10-01 tarihinde 5
benzersiz gönderi gözlemledik. Sınır: 5. Açıklamalar görsellerde veya videolarda
gösterilen her şeyi anlatamaz.

#### Oyun çıkışı gönderi dizisi

[Game release update thread](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-video-game-launch)

Bir duyuruyu rakip oyunlarla ilgili yanıtların yanında oku. 2026-10-01 tarihinde
5 benzersiz gönderi gözlemledik. Sınır: 5. Gönderi dizisi birkaç oyundan
bahseder ve açılış gönderisini içerir.

#### Uzaktan çalışma tartışması

[Remote work discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-remote-work)

Uzaktan çalışma tartışmasında ifade edilen tutumları karşılaştır. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınır: 5. İş ilanları ve tekrarlanan
görüşler çıkabilir.

#### Havayolu gönderileri

[Airline discussion posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-airline-passengers)

Hizmet geri bildirimi seçmeden önce havayolu bahsetmelerini incele. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınır: 5. Bir bahsetme, yazarın yolcu
olduğunu kanıtlamaz.

#### Kolej futbolu tartışması

[College football discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-college-football-fans)

Taraftar görüşlerini kolej futbolu tanıtımından ayır. 2026-10-01 tarihinde 5
benzersiz gönderi gözlemledik. Sınır: 5. Taraftar görüşlerinin yanında ön
incelemeler ve tanıtımlar da eşleşebilir.

#### Faiz oranı tartışması

[Interest rate discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-interest-rates)

Faiz oranlarıyla ilgili piyasa ve politika tutumlarını incele. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınır: 5. Ana konu bir siyasetçi veya
piyasa olabilir.

#### Scooter tartışması

[Electric scooter discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-electric-scooters)

Sürücü geri bildirimi seçmeden önce scooter tartışmasını bul. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınır: 5. Kişisel deneyimlerin
yanında reklamlar, araştırmalar ve şakalar da eşleşebilir.

#### Restoran deneyimleri

[New restaurant experiences](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-restaurant-openings)

Yeni restoranlarla ilgili birinci ağızdan ifadeleri incele. 2026-10-01 tarihinde
5 benzersiz gönderi gözlemledik. Sınır: 5. Kişisel ifadeler davetlerde veya
önerilerde de geçebilir.

#### Herkese açık Liste akışının tonu

[Public list feed tone](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-ai-coding-assistants)

Herkese açık bir Listedeki gönderilerin tonunu incele. 2026-10-01 tarihinde 5
benzersiz gönderi gözlemledik. Sınır: 5. Üyeler başka konuları tartışabilir ve
başkasının ifadelerini yeniden gönderebilir.

#### Cihaz profili yanıtları

[Google device profile reply tone](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-smart-home-device-owners)

Yanıtlar dahil, bir cihaz profilinin ifadelerini incele. 2026-10-01 tarihinde 5
benzersiz gönderi gözlemledik. Sınır: 5. Eksik üst gönderi bağlamı bir profil
yanıtının anlamını sınırlayabilir.

#### Maraton antrenmanı

[Marathon training discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-marathon-runners)

Antrenman güncellemelerindeki ve maraton planlarındaki tutumları bul. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınır: 5. Koşucu güncellemelerinin
yanında planlar ve tanıtımlar çıkabilir.

#### Gezi planlama

[Personal Tokyo trip posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-tourist-destinations)

Kişisel gezi planlarını ve seyahat hikayelerini incele. 2026-10-01 tarihinde 5
benzersiz gönderi gözlemledik. Sınır: 5. Adında Tokyo geçen etkinlikler bir
Japonya gezisini anlatmadan eşleşebilir.

#### Yayın platformu fiyat tartışması

[Netflix price discussion posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-streaming-price-increases)

İptal nedenlerini incelemeden önce Netflix fiyat kaygılarını bul. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınır: 5. Fiyat ifadeleri kaygıları
seçer, temsili bir izleyici örneklemini değil.

#### Okul malzemesi alışverişi

[August 2026 school supply posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-back-to-school-shoppers)

Bir ağustos aralığındaki 50 okul malzemesi gönderisini incele. 2026-10-01
tarihinde 50 benzersiz gönderi gözlemledik. Sınır: 50. İncelememizde 50 ID'nin
42'si açıkça ilgili satırdı.

#### Tren gecikmeleri

[Train delay experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-public-transit)

Geciken trenlerle ilgili şikayetleri ve deneyimleri bul. 2026-10-01 tarihinde 5
benzersiz gönderi gözlemledik. Sınır: 5. Kişisel ifadeler resmi duyuruları
kaçırabilir.

#### Evcil hayvan maması tartışması

[Pet food experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-pet-food-brands)

Daha geniş bakım tartışması içindeki evcil hayvan maması bahsetmelerini incele.
2026-10-01 tarihinde 5 benzersiz gönderi gözlemledik. Sınır: 5. Bakım veya
veteriner tartışmaları mama markalarından tesadüfen bahsedebilir.

#### Seçilmiş fantezi spor gönderileri

[Fantasy sports post batch](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-fantasy-football-apps)

Seçilmiş bir grup fantezi spor gönderisini analiz et. 2026-10-01 tarihinde 2
benzersiz gönderi gözlemledik. Sınır: 2. Etiketler her gönderinin konusuyla
ilgilidir, otomatik olarak bir uygulamayla değil.

#### Kahve dükkanı deneyimleri

[Coffee shop experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-coffee-shop-customers)

Müşteri geri bildirimi seçmeden önce kahve dükkanı yorumlarını bul. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınır: 5. Yazar şikayetleri
doğrulanmamış beyanlar olarak kalır.

#### Konut piyasası

[Housing market discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-housing-market)

Konut piyasasıyla ilgili görüşleri ve haberleri incele. 2026-10-01 tarihinde 5
benzersiz gönderi gözlemledik. Sınır: 5. Haberler ve görüşler farklı piyasa
konularıyla ilgili olabilir.

#### Turnuva tartışması

[League of Legends tournament posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-esports-tournament-viewers)

Turnuva tartışmasını bilet veya maç tanıtımından ayır. 2026-10-01 tarihinde 5
benzersiz gönderi gözlemledik. Sınır: 5. Bilet reklamları ve maç raporları
izleyici görüşü değildir.

#### Podcast yayıncısı gönderileri

[Podcast publisher post tone](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-podcast-episodes)

Podcast yayıncısının kendi mesajlarını incele. 2026-10-01 tarihinde 5 benzersiz
gönderi gözlemledik. Sınır: 5. Yayıncının tonu dinleyici memnuniyetini ölçmez.

#### Spor salonu karşılaştırmaları

[Gym comparison review texts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-gym-memberships)

Değerlendirmelerinde 2 spor salonuna karşı ortak tutumu kontrol et. Verdiğin 3
benzersiz metni 2026-10-01 tarihinde gözlemledik. Sınır: 3. İki hedef her
metinde 1 duygu durumu cevabını paylaşır.

#### Araç kiralama

[Car rental experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-car-rental-customers)

Hizmet kaygılarını incelemeden önce araç kiralama yorumlarını bul. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınır: 5. Kiralayanların
anlatımlarının yanında sorular ve tanıtımlar da eşleşebilir.

#### Kampüs tartışması

[University cost and campus posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-university-life)

Maliyetle ilgili gönderileri seçmeden önce kampüs tartışmasını incele.
2026-10-01 tarihinde 5 benzersiz gönderi gözlemledik. Sınır: 5. Kampüs haberleri
ve eleştiriler öğrenci deneyimlerini kanıtlamaz.

#### Düğün planlama

[Personal wedding planning posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-wedding-planning-posts)

Düğün planları ve maliyetleriyle ilgili birinci ağızdan ifadeleri bul.
2026-10-01 tarihinde 5 benzersiz gönderi gözlemledik. Sınır: 5. Planlama
deneyimlerinin yanında hikayeler, şakalar ve tesadüfi ifadeler de eşleşebilir.

#### Şarj deneyimleri

[EV charging experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-ev-charging-experiences)

Elektrikli araç tartışması içindeki şarj deneyimlerini incele. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınır: 5. Şarj, araçla ilgili başka
bir kaygının yanında ikincil kalabilir.

#### Vergi beyannamesi tartışması

[Spring 2026 TurboTax filing posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-tax-filing-software)

Beyanname tartışmasını sabit bir ilkbahar tarih aralığında incele. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınır: 5. Gönderiler güncel ücretleri
veya vergi kurallarını doğrulamaz.

#### Tema parkı ziyaretleri

[Theme park visit discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-theme-park-visitors)

Ziyaret tepkilerini seçmeden önce tema parkı bahsetmelerini bul. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınır: 5. Tesadüfi göndermeler başka
bir konudaki uzun gönderilerle eşleşebilir.

#### Market harcamaları

[Grocery budget experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-grocery-prices)

Market harcamalarıyla ilgili birinci ağızdan yorumları bul. 2026-10-01 tarihinde
5 benzersiz gönderi gözlemledik. Sınır: 5. Daha geniş siyaset, beslenme veya
içerik üreticisi tartışmaları market harcamalarından bahsedebilir.

#### Kamera tartışması

[Phone camera discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-phone-camera-reviews)

Kamera bahsetmelerini fotoğrafların, değerlendirmelerin ve duyuruların yanında
incele. 2026-10-01 tarihinde 5 benzersiz gönderi gözlemledik. Sınır: 5. Kamera
bahsetmeleri başka duyurularda tesadüfi olabilir.

#### Seçilmiş spor ayakkabı gönderisi

[A selected sneaker post](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-sneaker-drop-reactions)

Geniş bir anahtar kelime araması yapmadan bilinen bir gönderiyi analiz et.
2026-10-01 tarihinde 1 benzersiz gönderi gözlemledik. Sınır: 1. Seçilen bu
açıklama görselinin her ayrıntısını anlatmaz.

#### Destek sohbet botları

[Support chatbot discussion posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-customer-support-chatbots)

Hizmet şikayetlerini seçmeden önce destek sohbet botu tartışmasını bul.
2026-10-01 tarihinde 5 benzersiz gönderi gözlemledik. Sınır: 5. Duygusal destek
botları ve işletme yanıtları da eşleşebilir.

#### Festival tartışması

[April 2026 Coachella discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-music-festival-attendees)

Bir nisan aralığındaki 50 festival gönderisini incele. 2026-10-01 tarihinde 50
benzersiz gönderi gözlemledik. Sınır: 50. 50 ID'de 47 ilgili satır ve
tekrarlanan haber metni vardı.

#### Elektrik faturaları

[Electricity bill discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-electric-bills)

Kişisel elektrik maliyetlerini politika tartışmasının yanında incele. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınır: 5. Politika iddiaları ve fiyat
tahminleri doğrulanmamış kalır.

#### Basketbol kadro değişiklikleri

[NBA trade and signing discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-nba-trade-reactions)

Taraftar tepkilerini seçmeden önce takas ve imza tartışmasını bul. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınır: 5. Başka haberler oyunculardan
veya takımlardan tesadüfen bahsedebilir.

#### Konaklama tartışması

[Airbnb stay discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-airbnb-stays)

Konaklama tartışması içinde Airbnb'ye karşı tutumlara odaklan. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınır: 5. Misafir hikayelerinin
yanında ev sahibi tanıtımları ve uygulama gönderileri çıkabilir.

#### Kitap tepkileri

[Book reading reaction posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-book-club-readers)

Kitap kulübü üyeliği varsaymadan okuma tepkilerini incele. 2026-10-01 tarihinde
5 benzersiz gönderi gözlemledik. Sınır: 5. Hem film karşılaştırmaları hem
kişisel okuma görüşleri eşleşebilir.

#### Yemek kiti deneyimleri

[HelloFresh experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-meal-kit-services)

Ürün deneyimlerini incelemeden önce yemek kiti yorumlarını bul. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınır: 5. Planlar, reklamlar ve daha
geniş kişisel hikayeler markadan bahsedebilir.

#### Yarış tartışması

[Formula 1 race discussion posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-formula-one-race-weekends)

Yarış tartışmasını takım ve pilot açıklamalarının yanında incele. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınır: 5. Alıntılanan pilot
açıklamaları farklı ID'lerde tekrarlanabilir.

#### Flört uygulaması deneyimleri

[Dating app experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-dating-app-experiences)

Flört uygulaması deneyimlerini, eşleşme yorumlarını ve şakaları bul. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınır: 5. Eşleşme yorumları ve
şakalar müşteri kimliklerini doğrulamaz.

#### Havalimanı bekleme gönderileri

[Airport wait and lounge posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-airport-travelers)

Havalimanı bekleme yorumlarını seyahat duyurularının yanında incele. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınır: 5. Kişisel bekleme
deneyimlerinin yanında resmi duyurular çıkabilir.

#### Okul yemeği tartışması

[School lunch discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-school-lunch-programs)

Okul yemekleriyle ilgili kişisel gönderileri ve politika tartışmasını incele.
2026-10-01 tarihinde 5 benzersiz gönderi gözlemledik. Sınır: 5. Yazarlar
arasında yalnızca veliler değil, kurumlar da olabilir.

#### Bira tadımı

[Craft beer tasting posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-craft-beer-drinkers)

Değerlendirme örnekleri seçmeden önce bira tadımı görüşlerini bul. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınır: 5. Bağlantılı kısa
açıklamalarda net bir tutum için yeterli bağlam olmayabilir.

#### Kenetlenme duyurusu alıntıları

[SpaceX docking announcement quotes](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-space-launches)

Tek bir kenetlenme duyurusunun sabit bir zamandan sonraki alıntılarını incele.
2026-10-01 tarihinde 5 benzersiz gönderi gözlemledik. Sınır: 5. Alıntılar
yalnızca tepki değil, davet veya nötr betimleme de olabilir.

#### Doğum günü yanıtları

[NASA birthday replies](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-replies-to-a-news-post)

Tek bir doğum günü gönderisine gelen doğrudan yanıtları incele. 2026-10-01
tarihinde 5 benzersiz gönderi gözlemledik. Sınır: 5. Eksik kök gönderi bağlamı
bir yanıtın cevabının anlamını sınırlayabilir.

Sonuçları incelerken `maxItems` değerini küçük tut. Bir sınır çıktıyı kısıtlar,
mevcut miktarı değil. Daha az gönderi uygunsa filtrelerini değiştirmeden önce
çalıştırma raporuna bak. Her seferinde 1 ayarı genişlet, örneğin tarihleri veya
bir etkileşim alt sınırını. Değiştirdiğin ayarı kaydet.

Başarısız analizlerde `analysis.reason` alanına bak ve yalnızca etkilenen
ID'leri yeniden dene. Eksik yanıtlarda, tamam demeden önce ücretsiz tanılamaya
bak. Medya açıklamaları bir görselde veya videoda gösterilen her şeyi anlatamaz.
Eksik alıntı veya yanıt bağlamı bir cevabı belirsiz kılabilir.

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
- [X Space Scraper](https://apify.com/xquik/x-space-scraper): Sohbet Odalarını
  anahtar kelimeyle bulur; başlıklarını, durumlarını, zamanlarını, dinleyici
  sayılarını, sunucularını ve konuşmacılarını okur. Yayınları da URL veya ID ile
  okur. X'teki canlı ses ve video yayınlarını takip ettiğinde kullan. Sohbet
  Odası veya yayın başına $0.00015'ten başlar.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): Sıralama,
  hacim, sorgu ve WOEID ile konuma göre gerçek zamanlı gündemi kazır. Nerede
  neyin gündemde olduğunu takip ettiğinde kullan. Gündem başlığı başına
  $0.00015'ten başlar.
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper): X iş ilanlarını
  anahtar kelime, yer, çalışma şekli, kıdem ve şirkete göre maaş ve başvuru
  bağlantılarıyla kazır. X'te yayımlanan iş ilanlarını topladığında kullan. İlan
  başına $0.00015'ten başlar.
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

`analysis.status` değeri `failed` veya `skipped` olur. Actor gönderiyi topladı
ve teslim etti, ama yapay zeka analizi tamamlanmadı. `analysis.reason` nedeni
belirtir. `context_limit`, bağlamının ve hedeflerinin gönderiye yer bırakmadığı
anlamına gelir. `service_unavailable`, analiz hizmetine kısa bir süre
erişilemediği anlamına gelir. Bu satırların sonuç ücreti yok. `analysis.context`
alanını kısalt ya da etkilenen ID'leri yeniden çalıştır.

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
[API sekmesine](https://apify.com/xquik/x-tweet-sentiment-analysis/api) bak.
Düzenli çalıştırmalar için Apify
[zamanlamalarını](https://docs.apify.com/platform/schedules) kullan. Neyin
değiştiğini görmek için önceki veri kümesi ID'sini `monitor.baselineDatasetId`
olarak gönder. Apify entegrasyonları çalıştırmaları webhook'lara, Make, Zapier,
n8n ve Google Sheets'e de bağlar.

### Nereden yardım alırım?

Actor sayfasında bir issue aç ya da çalıştırma ID'siyle support@xquik.com
adresine yaz. Anahtar-değer deposundaki ücretsiz tanılamalar boş, kısmi veya
kesilen çalıştırmaları açıklar.
