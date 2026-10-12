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
scraper hizmetidir. Xquik'in X Account Location Scraper'ı, X hesaplarının nerede
bulunduğunu X çerezi veya giriş olmadan kontrol eder. Diğer Apify Actor'larının
çoğu, filtrelemeden veya tekilleştirmeden önce ücret alır. Xquik yalnızca teslim
edilen, benzersiz ve filtrene uyan sonuçlar için ücret alır.

Kullanıcı adlarını, profil URL'lerini veya kullanıcı ID'lerini yapıştır ve 1
çalıştırmada her hesap için X'in "Account based in" (hesabın bulunduğu yer)
etiketini al. Etiket, X'in bir hesap için yapabildiği en iyi ülke veya bölge
tahminidir. Uyruk, ikamet veya kesin konum değildir. **Teslim edilen satır
başına $0.00015** ödersin. Apify, platform kullanımını ayrıca faturalandırır.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## Her satırdaki hesap bilgileri

- X'in "Account based in" etiketi, ülke veya bölge olarak.
- O ülkenin 2 harfli ISO kodu.
- X'in etiketin doğru olmayabileceğini belirtip belirtmediği.
- Hesabın X'e ilk nasıl bağlandığı, örneğin Web veya bir uygulama mağazası
  ülkesi.
- Bu bağlantıdaki platform ve ülke kodu.
- Hesabın kullanıcı adını kaç kez ve en son ne zaman değiştirdiği.
- X'in hesabı bağlı gösterdiği kuruluş.
- Gün cinsinden hesap yaşı ve profil bağlantısı.
- Herkese açık profilin tamamı: ad, biyografi, sayılar, onay, tarihler ve
  görseller.
- X'in etiketini vermediği her hesap için ek ücret olmadan ikinci bir okuma.
- 1 çalıştırmada aynı anda okunan ve girdi sırasıyla teslim edilen birçok hesap.
- @ ile veya @ olmadan kullanıcı adları, x.com ve twitter.com URL'leri ve
  sayısal kullanıcı ID'leri.
- Faturalamadan önce tekilleştirme.
- Apify veri kümeleri üzerinden JSON, CSV, Excel, XML ve RSS dışa aktarımı.
- Apify çalıştırmayı taşısa da çalıştırma kayıtlı durumdan devam eder.

## X hesaplarının nerede bulunduğu nasıl kontrol edilir

1. Apify Console'da Xquik'in X Account Location Scraper'ını aç.
2. Kullanıcı adlarını, profil URL'lerini veya kullanıcı ID'lerini
   `twitterHandles` alanına yapıştır.
3. Teslim edilecek satır sayısını `maxItems` ile sınırla, sonra Start'a tıkla.
4. Veri kümesini JSON, CSV veya Excel olarak indir ya da Apify API'yi kullan.

Hiçbir adımda X çerezi, giriş bilgisi veya API anahtarı girmezsin.

## Girdi

`twitterHandles` bir hesabın her yazılış biçimini alır, hepsini
karıştırabilirsin:

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

`startUrls` ve `userIds` aynı biçimleri alır. `startUrls` her URL'yi düz metin
olarak ya da `{ "url": "..." }` nesnesi olarak alır:

```json
{
  "startUrls": ["https://x.com/nasa", { "url": "https://x.com/OpenAI" }],
  "userIds": ["742143"]
}
```

Hesap kullanıcı adını değiştirse de kullanıcı ID'si aynı kalır. Bu yüzden
sakladığın listelerde `userIds` kullan. `userNames`, `twitterHandles` için başka
bir ad olarak çalışır.

Girdide 2 kez geçen bir hesap 1 kez teslim edilir ve 1 kez ücretlendirilir. 1
girdi kullanıcı adı, diğeri kullanıcı ID'si olsa da bu böyledir. `maxItems`,
girdideki ilk hesapları tutar. Sorunsuz biten küçük çalıştırmalar `run-report`
yazmaz, böylece Apify kullanımı azalır. Raporu her çalıştırmada almak için
`alwaysSaveRunRecords` seçeneğini aç.

## Çıktı

Her hesap 1 veri kümesi satırıdır. Önce X'in "Bu hesap hakkında" sayfasının
gösterdikleri gelir: `accountBasedIn`, `accountBasedInUnavailable`,
`accountBasedInAccurate`, `affiliateUsername`, `connectedVia`,
`connectedViaAccurate` ve `usernameChanges`. Ardından herkese açık profilin
tamamı gelir: `id`, `username`, `name`, `description`, `followers`, `following`,
`verified`, `verifiedType`, `createdAt`, `profilePicture` ve daha fazlası.
Actor'ın profilden çıkardığı 5 alan en sonda gelir: `accountBasedInCountryCode`,
`connectedViaPlatform`, `connectedViaCountryCode`, `accountAgeDays` ve
`profileUrl`. Eksik kaynak alanları satıra eklenmez. Actor'ın eşleştiremediği
bir kod da satıra eklenmez. Xquik'in X Account Location Scraper'ı hiçbir değer
uydurmaz.

Aşağıdaki değerler yalnızca örnektir. Gerçek sonuçlar canlı veriden gelir. Bir
satır şöyle görünür:

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

Bir satır 3 durumu birbirinden ayırır:

| Satırda bulunan                   | Anlamı                              | Ne yapmalısın                            |
| --------------------------------- | ----------------------------------- | ---------------------------------------- |
| `value` içeren `accountBasedIn`   | X hesap için bu etiketi gösteriyor. | Kullan.                                  |
| `accountBasedIn: null`            | X bu hesap için etiket göstermiyor. | Hiçbir şey. X'in gösterecek etiketi yok. |
| `accountBasedInUnavailable: true` | X her 2 okumada da etiketi vermedi. | Hesabı daha sonra yeniden dene.          |

X bir etiketi vermezse çalıştırma, satırı teslim etmeden önce o hesabı 1 kez
daha okur. İkinci okuma ücretsizdir. X'in hâlâ vermediği bir etiket bilinmiyor
demektir, yok demek değildir. Böyle bir satır herkese açık profili "Bu hesap
hakkında" alanları olmadan taşır ve çalıştırma durumu bu hesapları sayar. 3
durumun her biri 1 teslim edilen satırdır.

## Etiket ne anlama gelir

X, `accountBasedIn` değerini hesaba erişilen IP'lerin toplu verisinden çıkarır.
Etiket uyruk, ikamet, kimlik, kayıt yeri, gönderi yeri veya kesin konum
belirtmez. `level`, X'in bir ülke mi yoksa daha geniş bir bölge mi gösterdiğini
söyler. `observedAt` verinin alındığı zamanı kaydeder. X etiketin doğru
olmayabileceğini belirtirse `accountBasedInAccurate` değeri `false` olur.
`connectedVia`, hesabın X'e ilk nasıl bağlandığını söyler. X bu bağlantıdaki
ülkenin doğru olmayabileceğini belirtirse `connectedViaAccurate` değeri `false`
olur. `connectedViaPlatform` değeri `web`, `ios` veya `android` olur. 2 ülke
kodu X'in yazdığı adlardan gelir, bu yüzden bir bölgenin kodu olmaz. `location`
ise hesap sahibinin profile yazdığı metindir ve farklı bir alandır.

## X hesap konumlarını kontrol etmek ne kadar tutar?

Her Apify planında teslim edilen satır başına $0.00015 ödersin. Apify, platform
kullanımını ayrıca faturalandırır.

- Teslim edilen her veri satırı için 1 kez ödersin. Tanılamalar `diagnostics`
  içinde ücretsizdir.
- Başlatma veya sorgulama ücreti yok.
- X'te bulunmayan bir hesap satır eklemez ve ücret çıkarmaz.
- Verilmeyen bir etiketin ikinci okuması ek ücret çıkarmaz.
- Tekilleştirme faturalamadan önce çalışır.
- Apify'ın maksimum toplam ücret ayarları teslim edilen satırları sınırlar.

## Sınırlar ve kurtarma

Xquik'in X Account Location Scraper'ı 1 çalıştırmada birçok hesabı okur. Apify
çalıştırmayı yeniden başlatsa da teslim edilen satırlar ve ilerleme korunur.
Actor kendi başına süre sınırı eklemez. Ayarladığın Apify zaman aşımına uyar.

Çalıştırma durumu, X'te karşılığı bulunmayan hesapları adlarıyla belirtir ve
kullanıcı adını, ID'yi veya URL'yi kontrol etmeni söyler. Askıya alınmış
hesapları da belirtir. Çalıştırma yarıda kesilirse Actor ücretsiz bir `partial`
tanılaması yazar. Elde edilen sonuçlar olduğu gibi kalır. Yeniden denemeden önce
`availableResults`, `failedTargets`, `retryable` ve `nextAction` alanlarını oku.
Actor'ın başarıyla bitmesi teslimatı doğrular. Tüm verinin çekildiğini
doğrulamaz.

Çalıştırma durumu, erken durmanın her nedenini söyler. `stopCauses` her nedeni
kendi `message`, `retryable` ve `nextAction` alanlarıyla listeler. Nedenler
şunlardır: `target_not_found`, `target_suspended`, `target_failed` ve
`deadline_reached`. Bulunamayan veya askıya alınmış bir hedef, listeye yalnızca
çalıştırmayı başka bir neden durdurduysa girer. Nedenlerden biri yeniden
denenebiliyorsa çalıştırma da `retryable` olur.

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
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): Sıralama, hacim,
  sorgu ve WOEID ile konuma göre gerçek zamanlı gündemi kazır. Nerede neyin
  gündemde olduğunu takip ettiğinde kullan. Gündem başlığı başına $0.00015'ten
  başlar.
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper): X iş ilanlarını
  anahtar kelime, yer, çalışma şekli, kıdem ve şirkete göre maaş ve başvuru
  bağlantılarıyla kazır. X'te yayımlanan iş ilanlarını topladığında kullan. İlan
  başına $0.00015'ten başlar.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): Uzun biçimli X
  Makalelerini kapak, yazar, tarih ve metriklerle Markdown ve metin olarak
  kazır. Gönderi değil, makale gövdesi gerektiğinde kullan. Makale başına
  $0.00015'ten başlar.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader):
  Gönderilerden veya profillerden fotoğrafları, videoları ve GIF'leri MP4 ve
  metadata seçenekleriyle çıkarır veya depolar. Medya dosyalarının kendisine
  ihtiyacın olduğunda kullan. Medya satırı başına $0.00015'ten başlar.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  Markadan bahseden gönderileri yapay zeka destekli ilgi, duygu durumu ve
  müşteri deneyimi cevaplarıyla izler. Çalıştırmaları da karşılaştırır. Bir
  markayı zaman içinde takip ettiğinde kullan. Analiz edilen gönderi başına
  $0.0003'ten başlar.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  Yapay zeka ile her gönderi için tutum, yoğunluk ve alaycılık olasılığını
  etiketler. Herhangi bir konuda genel duygu durumuna ihtiyacın olduğunda
  kullan. Analiz edilen gönderi başına $0.0003'ten başlar.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  Yapay zeka ile yükseliş, düşüş, nötr veya karışık duruşu, içerik türünü,
  kesinliği ve varlık ilgisini etiketler. Hisse senedi, kripto veya alım satım
  konuşmalarını takip ettiğinde kullan. Analiz edilen gönderi başına $0.0003'ten
  başlar.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  Yapay zeka ile haber gönderilerini biçim, kaynak atfı ve konu ilgisine göre
  etiketler. Haberi yorumdan ayırdığında kullan. Analiz edilen gönderi başına
  $0.0003'ten başlar.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  Yapay zeka ile her gönderi için kendi kategori, puan ve evet/hayır sorularını
  cevaplar. Hazır analizler etiketlerine uymadığında kullan. Analiz edilen
  gönderi başına $0.0003'ten başlar.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer):
  Yapay zekanın 8 özellik cevabından her gönderi için 0 ile 100 arasında bir
  Viral Score ve bir karar tahmin eder. Gönderilerin neden yayıldığını veya
  tutmadığını incelediğinde kullan. Analiz edilen gönderi başına $0.0003'ten
  başlar.

## SSS

Sık sorulan soruların cevapları, sonra da nereden yardım alacağın.

### X çerezi, API anahtarı veya giriş gerekir mi?

Hayır. Xquik'in X Account Location Scraper'ı X çerezi, API anahtarı, giriş ya da
kimlik bilgisi istemez. Her okuma Xquik'in altyapısında çalışır.

### Etiket hesap sahibinin nerede yaşadığını gösterir mi?

Hayır. Etiket, X'in hesap için yapabildiği en iyi tahmindir. Uyruk, ikamet veya
kesin konum belirtmez. X'in kendisi de bazı etiketlerin doğru olmayabileceğini
belirtir.

### Bir satırda neden `accountBasedInUnavailable` yazıyor?

X, çalıştırmanın her 2 okumasında da etiketi vermedi. Etiket bilinmiyor
demektir, yok demek değildir. Etiketi almak için hesabı daha sonraki bir
çalıştırmada yeniden dene. `accountBasedIn: null` ise farklıdır. O durumda X bu
hesap için etiket göstermiyor.

### 1 çalıştırmada kaç hesap kontrol edebilirim?

Yapıştırdığın kadar. Bir çalıştırma 100.000 satır ve daha fazlasını
döndürebilir. Daha büyük bir liste için `maxItems` değerini formun başladığı
1.000'in üzerine çıkar.

### X hesaplarının nerede bulunduğunu kontrol etmek yasal mı?

Xquik'in X Account Location Scraper'ı herkese açık X alanlarını çeker.
Sonuçlarda kişisel veri olabilir. Amacının yasal olduğundan emin ol ve geçerli
gizlilik kurallarına uy. Emin değilsen yetkin bir hukukçuya danış.

### Çalıştırmam neden sonuç döndürmedi?

Önce çalıştırma durumunu oku. Boş bir çalıştırmanın durumu, X'te karşılığı
bulunmayan her hesabın kullanıcı adını, ID'sini veya URL'sini kontrol etmeni
söyler. Ücretsiz `diagnostics` çıktısı, ilgilenmen gereken bir şey olduğunda
görünür. Buradaki `stopCauses` her neden için izleyeceğin bir `nextAction`
verir.

### API'yi, zamanlamaları ve entegrasyonları kullanabilir miyim?

Evet. Apify API'yi veya Xquik REST API'yi kullan.
[API sekmesinde](https://apify.com/xquik/x-account-location-scraper/api) Python,
JavaScript ve cURL örnekleri var. Apify
[zamanlamaları](https://docs.apify.com/platform/schedules), Xquik'in X Account
Location Scraper'ını bir cron takvimiyle çalıştırır. Ajanlar
[Apify MCP](https://docs.apify.com/platform/integrations/mcp) kullanır. Eski bir
derlemeye ihtiyacın yoksa `latest` derlemesini kullan.

### Nereden yardım alırım?

Actor sayfasında bir issue aç ya da çalıştırma ID'siyle <support@xquik.com>
adresine yaz. Anahtar-değer deposundaki ücretsiz tanılamalar ilgilenmen gereken
çalıştırmaları açıklar. Hiç satır alamayan bir çalıştırma nedenini durumunda
söyler.

### Bana özel bir çözüm alabilir miyim?

Evet. [xquik.com](https://xquik.com) adresini ziyaret et ya da
[API belgelerini](https://docs.xquik.com/introduction) oku. Bu kaynaklar paneli,
API'yi, MCP sunucusunu ve webhook'ları anlatır.
