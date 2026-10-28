[English](README.md) · [Español](README.es.md) · **Türkçe** ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer, Xquik MCP'yi kodlama ajanlarına bağlıyor](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Framer'ın Xquik scraper'larını Claude Code, Codex, Cursor & daha fazlasıyla nasıl kullandığını](https://youtu.be/4UOSpoOoC3Y?t=367)
6:07'den itibaren izle.

Xquik, en eksiksiz X verisini sunan, dünyanın en hızlı ve en ucuz X (Twitter)
scraper hizmetidir. Xquik'in X Account Location Scraper'ı, X hesaplarının nerede
bulunduğunu X çerezi veya giriş olmadan kontrol eder. Diğer Apify Actor'larının
çoğu, filtrelemeden veya tekilleştirmeden önce ücret alır. Xquik yalnızca teslim
edilen, benzersiz ve filtrene uyan sonuçlar için ücret alır.

Kullanıcı adlarını, profil URL'lerini veya kullanıcı ID'lerini yapıştır & 1
çalıştırmada her hesap için X'in "Account based in" etiketini al. Etiket, X'in
bir hesap için yaptığı en iyi ülke veya bölge tahminidir. Uyruk, ikamet veya
kesin konum değildir. **Teslim edilen satır başına $0.00015** ödersin & Apify,
platform kullanımını ayrıca faturalandırır.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## Neden X Account Location Scraper kullanmalısın?

- **Her hesap için net bir cevap.** Her satır, X'in bir etiket gösterdiğini,
  etiket olmadığını ya da etiketi gizlediğini söyler.
- **Satırlar girdi sıranla gelir.** Birçok hesap, listelediğin sırayla geri
  döner.
- **Hesabı istediğin biçimde yapıştır.** Kullanıcı adlarını, @ ile başlayan
  adları, profil URL'lerini & kullanıcı ID'lerini 1 listede karıştır. Sakladığın
  listeler için `userIds` kullan, çünkü kullanıcı ID'si kullanıcı adı değişince
  de aynı kalır.
- **Tabloya hazır dışa aktarımlar.** Sütunları `fields` & `flatten` ile
  biçimlendir. JSON, CSV, Excel, XML veya RSS olarak dışa aktar.

### Eksiksiz sonuçlar

- Her cevap, X'te bulunan en eksiksiz veriyi tutar.

### Doğru satırlar

- Satırdaki her ID birebir doğru kalır.
- Onay rozetleri `x.com` üzerinde görünenle aynıdır.
- Satırlar yalnızca herkese açık veri tutar.
- Reklamlar & tanıtılan içerikler satırlarına asla girmez.

### Güncel veri

- X değişiklik yayınladığında da okumalar çalışmaya devam eder.

### Hız

- Yavaş bir sayfa çalıştırmanı bekletmez.
- Okumalar, satırları geldiği anda biter.
- Takılan Actor çağrıları kendi kendine toparlanır.

### Adil faturalama

- Hatalı girdi ücretsizdir & neyi düzelteceğini söyler.
- Actor'lar yalnızca teslim edilen, benzersiz & eşleşen satırlar için ücret
  alır.
- Birden çok hedefin paylaştığı bir profil 1 kez faturalanır.
- Yeniden başlatılan bir çalıştırma asla 2 kez ücret almaz.
- Çalıştırmalar harcama sınırının içinde kalır & tanılamalarını yine yazar.
- Küçük çalıştırmalar, maliyeti düşüren bir ipucuyla biter.

### Güvenilirlik

- Tek seferlik bir hata çalıştırmanı başarısız yapmaz.
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

- Hesap konumu ülke kodu, doğruluk notu & kullanıcı adı geçmişiyle gelir.

### Kalite kontrolleri

- X'in gösterdiği her alan ya sunulur, ya bilerek dışarıda bırakılır ya da
  olmadığı kanıtlanır.
- Xquik her okumayı X üzerinde canlı test eder.

## X Account Location Scraper hangi verileri çıkarabilir?

- X'in "Account based in" etiketi, ülke veya bölge olarak.
- O ülkenin 2 harfli ISO kodu.
- X'in etiketin doğru olmayabileceğini belirtip belirtmediği.
- Hesabın X'e ilk nasıl bağlandığı, örneğin Web veya bir uygulama mağazası
  ülkesi.
- Bu bağlantıdaki platform & ülke kodu.
- Hesabın kullanıcı adını kaç kez & en son ne zaman değiştirdiği.
- X'in hesabı bağlı gösterdiği kuruluş.
- Gün cinsinden hesap yaşı & profil bağlantısı.
- Ad, biyografi, sayılar, onay durumu, tarihler & görsellerle herkese açık
  profilin tamamı.

## X hesaplarının nerede bulunduğu nasıl kontrol edilir

Apify'da yeni misin? Önce
[ücretsiz bir hesap oluştur](https://console.apify.com/sign-up?fpr=xquik).
Ücretsiz plan kredi kartı istemez & her ay harcaman için $5 verir. Hesap başına
$0.00015 fiyatla $5, platform kullanımı hariç 33.000 hesaba kadar yeter. Sonra
buraya dön & Try for free düğmesine bas.

1. Apify Console'da Xquik'in X Account Location Scraper'ını aç.
2. Kullanıcı adlarını, profil URL'lerini veya kullanıcı ID'lerini
   `twitterHandles` alanına yapıştır.
3. Teslim edilen satırları sınırlamak için `maxItems` ayarla, sonra Start'a
   tıkla.
4. Veri kümesini JSON, CSV veya Excel olarak indir ya da Apify API'yi kullan.

Hiçbir adımda X çerezi, giriş bilgisi veya API anahtarı girmezsin.

## Girdi

`twitterHandles` bir hesabın her yazılış biçimini, istediğin karışımla alır.

```json
{
  "twitterHandles": [
    "BBCWorld",
    "@OpenAI",
    "https://x.com/NASA",
    "https://twitter.com/github",
    "11348282"
  ],
  "maxItems": 1000
}
```

`startUrls` & `userIds` aynı biçimleri alır. `startUrls` her URL'yi düz metin
olarak ya da `{ "url": "..." }` nesnesi olarak alır.

```json
{
  "startUrls": ["https://x.com/nasa", { "url": "https://x.com/OpenAI" }],
  "userIds": ["742143"]
}
```

Bir hesap kullanıcı adını değiştirse de kullanıcı ID'si aynı kalır, bu yüzden
sakladığın listelerde `userIds` kullan. `userNames`, `twitterHandles` için başka
bir ad olarak çalışır.

Girdide 2 kez geçen bir hesap 1 kez teslim edilir & 1 kez ücretlendirilir. 1
kayıt kullanıcı adı & diğeri kullanıcı ID'si olduğunda da böyledir. `maxItems`,
girdideki ilk hesapları tutar. Sorunsuz biten küçük çalıştırmalar `run-report`
kaydını atlar & Apify kullanımından tasarruf eder. Raporu her çalıştırmada
yazmak için `alwaysSaveRunRecords` seçeneğini aç.

## Çıktı

Her hesap 1 veri kümesi satırıdır. Önce X'in "Bu hesap hakkında" sayfasının
gösterdikleri gelir. Bunlar `accountBasedIn`, `accountBasedInUnavailable`,
`accountBasedInAccurate`, `affiliateUsername`, `connectedVia`,
`connectedViaAccurate` & `usernameChanges` alanlarıdır. Ardından `id`,
`username`, `name`, `description`, `followers`, `following`, `verified`,
`verifiedType`, `createdAt`, `profilePicture` & daha fazlasıyla herkese açık
profilin tamamı gelir. En sonda Actor'ın profilden çıkardığı 5 alan gelir.
Bunlar `accountBasedInCountryCode`, `connectedViaPlatform`,
`connectedViaCountryCode`, `accountAgeDays` & `profileUrl` alanlarıdır. Eksik
kaynak alanları satırda yer almaz & Actor'ın eşleştiremediği bir kod da dışarıda
kalır. Xquik'in X Account Location Scraper'ı hiçbir değer uydurmaz.

Örneklerdeki değerler yalnızca örnektir. Sonuçlar canlı veriden gelir. Bir satır
şöyle görünür.

```json
{
  "accountBasedIn": {
    "value": "United Kingdom",
    "level": "country",
    "observedAt": "2026-10-12T09:00:00.000Z"
  },
  "accountBasedInAccurate": true,
  "affiliateUsername": "sample_org",
  "connectedVia": "Web",
  "usernameChanges": {
    "count": 1,
    "lastChangedAt": "2021-03-04T10:00:00.000Z"
  },
  "id": "1234567890",
  "username": "sample_user",
  "name": "Sample User",
  "followers": 1200,
  "verified": true,
  "createdAt": "2017-03-21T20:50:14.000Z",
  "accountBasedInCountryCode": "GB",
  "connectedViaPlatform": "web",
  "accountAgeDays": 3491,
  "profileUrl": "https://x.com/sample_user",
  "resultType": "profile",
  "sourceTarget": "sample_user"
}
```

Bir satır 3 durumu birbirinden ayırır.

| Satırda bulunan                   | Anlamı                              | Ne yapmalısın                            |
| --------------------------------- | ----------------------------------- | ---------------------------------------- |
| `value` içeren `accountBasedIn`   | X hesap için bu etiketi gösteriyor. | Kullan.                                  |
| `accountBasedIn: null`            | X bu hesap için etiket göstermiyor. | Hiçbir şey. X'in gösterecek etiketi yok. |
| `accountBasedInUnavailable: true` | X iki okumada da etiketi vermedi.   | Hesabı daha sonra yeniden çalıştır.      |

X bir etiketi vermezse çalıştırma, satırı teslim etmeden önce o hesabı 1 kez
daha okur. İkinci okuma ücretsizdir. Hâlâ verilmeyen bir etiket yok değil,
bilinmiyor demektir. Böyle bir satır herkese açık profili "Bu hesap hakkında"
alanları olmadan taşır & çalıştırma durumu bu hesapları sayar. 3 durumun her
biri teslim edilen 1 satırdır.

## Çıktı sütunları

8 girdi, okunan her satırı biçimlendirir. Kod çalıştırmazlar & fiyatı
değiştirmezler.

| Alan                | Ne yapar                                                                        |
| ------------------- | ------------------------------------------------------------------------------- |
| `fields`            | Yalnızca bu alanları, yazdığın sıra & yazımla tut                               |
| `omitFields`        | Bu alanları çıkar & gerisini tut                                                |
| `renameFields`      | Bir alanı yeni adlı bir sütuna taşı                                             |
| `flatten`           | Her iç içe nesneyi üst düzey sütunlara çevir                                    |
| `fillMissingFields` | Tutulan bir alan satırda yoksa onu `null` ile doldur. Varsayılan olarak açık    |
| `joinFields`        | Bu listelerin her birini 1 metin değerine çevir                                 |
| `joinSeparator`     | Birleştirilen öğeler arasındaki metin. Varsayılan değer bir virgül & bir boşluk |
| `constantFields`    | Her satırda aynı metni taşıyan bir sütun ekle                                   |

- Bir nesnenin içindeki alan için nokta kullan, örneğin `accountBasedIn.value`.
  Harf büyüklüğü & alt çizgiler fark etmez.
- Her satır kendi `id` değerini tutar.
- `fields` kullanırsan satırda olmayan bir alan `null` olarak gelir. Böylece her
  satır aynı sütunlara sahip olur.
- Yanlış bir alan adı, çalıştırmayı hiçbir şey okumadan & ücretlendirmeden
  durdurur.
- Adlar kontrol edilemezse çalıştırma okumaya devam eder & görmediği adları
  sonunda listeler.
- Çalıştırma, başka bir Actor için yazılmış map fonksiyonunu veya jq filtresini
  yok sayar.

## Etiket ne anlama gelir

X, `accountBasedIn` değerini hesaba erişilen IP'lerin toplu verisinden çıkarır.
Etiket uyruk, ikamet, kimlik, kayıt yeri, gönderi yeri veya kesin konum
belirtmez. `level`, X'in bir ülke mi yoksa daha geniş bir bölge mi gösterdiğini
söyler. `observedAt` verinin alındığı zamanı kaydeder. X etiketin doğru
olmayabileceğini belirtirse `accountBasedInAccurate` değeri `false` olur.
`connectedVia` hesabın X'e ilk nasıl bağlandığını söyler & X bu bağlantıdaki
ülkenin doğru olmayabileceğini belirtirse `connectedViaAccurate` değeri `false`
olur. `connectedViaPlatform` değeri `web`, `ios` veya `android` olur. 2 ülke
kodu X'in yazdığı adlardan gelir, bu yüzden bir bölgenin kodu olmaz. X bazı
ülkeler için Türkiye & Turkey gibi 2 ad yazar & ikisi de aynı kodu verir.
`location` ise hesap sahibinin profile yazdığı metindir & farklı bir alandır.

## X hesap konumlarını kontrol etmek ne kadar tutar?

Her Apify planında teslim edilen satır başına $0.00015 ödersin. Apify, platform
kullanımını ayrıca faturalandırır.

Daha fazla hacim için daha çok ön ödemeli kullanım içeren bir
[Apify planı seç](https://apify.com/pricing?fpr=xquik).

- Teslim edilen her veri satırı için 1 kez ücret alınır. Tanılamalar
  `diagnostics` içinde ücretsizdir.
- Başlatma veya sorgulama ücreti yok.
- X'te bulunmayan bir hesap satır eklemez & ücretlendirilmez.
- Verilmeyen bir etiketin ikinci okuması ek ücret getirmez.
- Tekilleştirme faturalamadan önce çalışır.
- Apify'ın maksimum toplam ücret ayarları teslim edilen satırları sınırlar.

## Sınırlar & kurtarma

Xquik'in X Account Location Scraper'ı 1 çalıştırmada birçok hesabı okur. Teslim
edilen satırlar & ilerleme Apify yeniden başlatmasından sonra korunur. Actor
kendi başına bir süre sınırı eklemez. Ayarladığın her Apify zaman aşımına uyar.

Çalıştırma durumu, X'te karşılığı bulunmayan hesapları adlarıyla belirtir &
kullanıcı adını, ID'yi veya URL'yi kontrol etmeni söyler. Askıya alınmış
hesapları da belirtir. Veri çekme yarıda kesilirse Actor ücretsiz bir `partial`
tanılaması yazar. Elde edilen sonuçlar olduğu gibi kalır. Yeniden denemeden önce
`availableResults`, `failedTargets`, `retryable` & `nextAction` alanlarını oku.
Actor'ın başarıyla bitmesi teslimatı doğrular, tüm verinin çekildiğini değil.

Çalıştırma durumu, erken durmanın her nedenini söyler. `stopCauses` her nedeni
kendi `message`, `retryable` & `nextAction` alanlarıyla listeler. Nedenler
`target_not_found`, `target_suspended`, `target_failed` & `deadline_reached`
olabilir. Bulunamayan veya askıya alınmış bir hedef, listeye yalnızca
çalıştırmayı başka bir neden durdurduysa girer. Nedenlerden biri yeniden
denenebiliyorsa çalıştırma da `retryable` olur.

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

## SSS

Sık sorulan soruların cevapları, sonra da nereden yardım alacağın.

### X çerezi, API anahtarı veya giriş gerekir mi?

Hayır. Xquik'in X Account Location Scraper'ı X çerezi, API anahtarı, giriş veya
kimlik bilgisi istemez. Her okuma Xquik'in altyapısında çalışır.

### Etiket hesap sahibinin nerede yaşadığını gösterir mi?

Hayır. Etiket, X'in hesap için yaptığı en iyi tahmindir. Uyruk, ikamet veya
kesin konum belirtmez & X'in kendisi de bazı etiketleri doğru olmayabilir diye
işaretler.

### Bir satırda neden `accountBasedInUnavailable` yazıyor?

X, çalıştırmanın iki okumasında da etiketi vermedi. Etiket yok değil,
bilinmiyor. Etiketi almak için hesabı daha sonra yeniden çalıştır.
`accountBasedIn: null` ise farklıdır. X o hesap için etiket göstermiyor.

### 1 çalıştırmada kaç hesap kontrol edebilirim?

Yapıştırdığın kadar. Bir çalıştırma 100.000 satır & daha fazlasını döndürebilir.
Daha büyük bir liste için `maxItems` değerini formun başlangıçtaki 1.000
değerinin üzerine çıkar.

### X hesaplarının nerede bulunduğunu kontrol etmek yasal mı?

Xquik'in X Account Location Scraper'ı herkese açık X alanlarını çeker.
Sonuçlarda kişisel veri olabilir. Amacının yasal olduğundan emin ol & geçerli
gizlilik kurallarına uy. Emin değilsen yetkin bir hukukçuya danış.

### Çalıştırmam neden sonuç döndürmedi?

Önce çalıştırma durumunu oku. Boş bir çalıştırmanın durumu, X'te karşılığı
bulunmayan her hesabın kullanıcı adını, ID'sini veya URL'sini kontrol etmeni
söyler. Ücretsiz `diagnostics` çıktısı, dikkat gerektiren bir şey olduğunda
görünür. Bu çıktıdaki `stopCauses` her neden için izleyeceğin bir `nextAction`
verir.

### API'yi, zamanlamaları & entegrasyonları kullanabilir miyim?

Evet. Apify API'yi veya Xquik REST API'yi kullan.
[API sekmesinde](https://apify.com/xquik/x-account-location-scraper/api) Python,
JavaScript & cURL örnekleri var. Apify
[zamanlamaları](https://docs.apify.com/platform/schedules), Xquik'in X Account
Location Scraper'ını bir cron takvimiyle çalıştırır. Ajanlar
[Apify MCP](https://docs.apify.com/platform/integrations/mcp) kullanır. Eski bir
derlemeye ihtiyacın yoksa `latest` kullan.

### Nereden yardım alırım?

Çalıştırma ID'siyle
[Issues sekmesinde](https://apify.com/xquik/x-account-location-scraper/issues)
bir issue aç. Anahtar-değer deposundaki ücretsiz tanılamalar dikkat gerektiren
çalıştırmaları açıklar. Hiç satır almayan bir çalıştırma, nedenini durum
metninde söyler.

### Bana özel bir çözüm alabilir miyim?

Evet. İhtiyacını
[Issues sekmesinde](https://apify.com/xquik/x-account-location-scraper/issues)
anlat. Xquik ayrıca bir panel, bir REST API, bir MCP sunucusu & webhook'lar
sunar. Xquik'in web sitesini [Apify profilinde](https://apify.com/xquik) bul.
