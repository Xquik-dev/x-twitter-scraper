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
scraper hizmetidir. Xquik'in X (Twitter) Monitor Actor'ı, seçtiğin anahtar
kelimeler ve hesaplar için Twitter bildirimleri gönderir. Her saniye kontrol
eder. Her yeni gönderi, yanıt veya profil değişikliği saniyeler içinde Discord,
Telegram, Slack ya da webhook'una ulaşır. Diğer Apify Actor'larının çoğu,
filtrelemeden veya tekilleştirmeden önce ücret alır. Xquik yalnızca teslim
edilen ve benzersiz sonuçlar için ücret alır. Bu Actor'da da yalnızca bir
izlemenin çalıştığı saatler için ücret alır.

Hesapları veya anahtar kelimeleri yapıştır ve Start'a tıkla. İzleme hemen başlar
ve bildirimler çalıştırmalar arasında gelir. Ödediğin ücret **monitor-hour
başına $0.0045**. Olaylar ve bildirimler ücretsizdir. Apify, platform
kullanımını ayrıca faturalandırır.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## Twitter izleme neler gönderir

- İzlediğin hesapların yeni gönderileri, yanıtları, alıntıları ve yeniden
  gönderileri.
- Herhangi bir X arama operatörüyle, bir anahtar kelime aramasına uyan
  gönderiler.
- Silinen gönderiler, bir hesabın başlattığı canlı videolar ve Sohbet Odaları.
- Profil değişiklikleri: ad, kullanıcı adı, biyografi, profil fotoğrafı, kapak
  fotoğrafı, konum, bağlantı, onay işareti, koruma, sabitlenmiş gönderi ve
  erişilebilirlik.
- İzlenen her hesabın takip ettiği veya takipten çıktığı hesaplar.
- Olayın tamamı: yazarı, sayıları ve medyasıyla birlikte gönderi ya da
  değişiklik.
- Güncel kullanıcı adının yanında kalıcı X kullanıcı ID'si. Böylece adını
  değiştiren bir hesap izlemesini korur.
- Slack ve Discord'a kendi mesaj biçimlerinde, Telegram'a ve herhangi bir HTTPS
  webhook'una imzalı JSON olarak bildirimler.
- Her yeni bildirim kanalına bir test bildirimi. Kanalın cevabı çalıştırma
  durumunda görünür.
- Her olay, çalıştırmanın veri kümesinde ve izleme başına 1 geçmiş veri
  kümesinde.

## Twitter anahtar kelime bildirimleri nasıl kurulur

1. Apify Console'da Xquik'in X (Twitter) Monitor Actor'ını aç.
2. Kullanıcı adlarını `twitterHandles` alanına ya da X aramalarını `searchTerms`
   alanına yapıştır.
3. Bildirim gönderecek olayları seç. `newPosts` varsayılan olarak açıktır.
4. Webhook URL'lerini `webhookUrls` alanına yapıştır ya da `telegram` seçeneğini
   aç.
5. Start'a tıkla. İzleme o çalıştırmada başlar.
6. Actor'ı her saat aynı girdiyle çalıştıran bir zamanlama ekle.

Sonraki her çalıştırma, bir önceki çalıştırmadan bu yana izlenen saatleri
ücretlendirir. Yeni olayları kendi veri kümesine kaydeder ve hızla biter. 24
saat boyunca hiç çalıştırılmayan bir izleme duraklar. Bildirimlerin seni bundan
4 saat önce uyarır. Sonraki çalıştırma izlemeyi sürdürür ve önce ödenmemiş
saatleri ücretlendirir.

Aynı girdi aynı izlemeyi sürdürür. Değişen bir girdi izlemeyi günceller.
Kaydedilmiş bir görev 1 izlemedir. Görev yoksa izlemenin adını `monitorName`
belirler. Böylece 2 farklı ad, 2 izlemeyi birbirinden ayırır.

## Discord, Telegram ve Slack'te Twitter bildirimleri

- **Discord**: Bir kanalın webhook URL'sini `webhookUrls` alanına yapıştır. Her
  bildirim bir Discord mesajı olarak gelir. Barındırman gereken bir bot yoktur.
- **Telegram**: `telegram` seçeneğini aç. Çalıştırma durumu, Xquik'in Telegram
  botuna bir bağlantı verir. Bağlantıyı aç ve Start'a bas. Bildirimler o sohbete
  gelir.
- **Slack**: Bir incoming webhook URL'si yapıştır. Her bildirim bir Slack mesajı
  olarak gelir.
- **Herhangi bir uygulama**: Bir HTTPS URL'si yapıştır. Her bildirim imzalı JSON
  olarak gelir. Bu, veri kümesindeki olayın aynısıdır.

Her yeni bildirim kanalı, onu ekleyen çalıştırmada bir test bildirimi alır.
Durum sayfası bildirimin ulaşıp ulaşmadığını söyler.

## Girdi

| Alan                                 | Ne yapar                                                                     |
| ------------------------------------ | ---------------------------------------------------------------------------- |
| `twitterHandles`                     | @ ile veya @ olmadan kullanıcı adları ya da x.com profil URL'leri.           |
| `searchTerms`                        | `"x api" lang:en` gibi X aramaları. Her arama 1 izlemedir.                   |
| `monitorName`                        | Kaydedilmiş görevi olmayan çalıştırmalarda izlemeye ad verir.                |
| `newPosts`                           | Orijinal gönderiler. Varsayılan olarak açık.                                 |
| `replies`, `quotes`, `reposts`       | Bu gönderi türleri.                                                          |
| `deletedPosts`, `liveVideos`         | Hesapların silinen gönderileri, canlı videoları ve Sohbet Odaları.           |
| `profileChanges`, `followingChanges` | Hesapların profil ve takip değişiklikleri.                                   |
| `eventTypes`                         | Onay kutularının yerine geçen tam olay türleri.                              |
| `webhookUrls`                        | HTTPS URL'leri, her satıra 1 tane. Actor, Slack ve Discord URL'lerini tanır. |
| `telegram`                           | Bildirimleri, çalıştırmanın verdiği bir bağlantıyla Telegram'a gönderir.     |
| `since`                              | Son 30 gün içindeki bir tarihten bu yana saklanan olayları 1 kez kaydeder.   |
| `stop`                               | İzlemeyi durdurur ve bildirimleri kapatır.                                   |

Hesaplar ve anahtar kelimeler izleme başına toplam 100'e kadar çıkabilir.
Anahtar kelimeler yalnızca gönderi olayları gönderir. Telegram için kullanıcı
adı veya sohbet ID'si gerekmez. Çalıştırma durumu bir bağlantı verir. Bağlantıyı
aç ve Start'a bas. Bildirimler o sohbete gelir.

Kopyalamaya hazır girdiler:

```json
{ "twitterHandles": ["NASA", "SpaceX"], "newPosts": true, "replies": true }
```

```json
{
  "searchTerms": ["\"your brand\" -from:yourbrand"],
  "webhookUrls": "https://hooks.slack.com/services/T000/B000/XXXX",
  "monitorName": "brand-mentions"
}
```

```json
{ "twitterHandles": ["elonmusk"], "profileChanges": true, "telegram": true }
```

## Çıktı

Her çalıştırma 4 çıktı döndürür.

- **Durum sayfası**, yani `STATUS.html` kaydı: izlemenin neyi izlediği, her
  bildirim kanalı, fatura ve sonraki adım. Output sekmesi bu sayfayı gösterir.
- **Durum kaydı**, yani `STATUS` kaydı: aynı durumun JSON hali.
- **Yeni olaylar**: çalıştırmanın veri kümesi. Yeni olaylar en eskiden
  başlayarak sıralanır, en sonda 1 durum satırı yer alır.
- **Tanılamalar**: Actor bunları yalnızca ilgilenmen gereken bir şey olduğunda
  yazar.

Bir olay satırı, olayın Xquik'in REST API'sinde sunulan halinin tüm alanlarıyla
birebir aynısıdır:

```json
{
  "resultType": "event",
  "id": "981",
  "type": "tweet.new",
  "occurredAt": "2026-10-13T09:00:01.000Z",
  "monitorId": "2944",
  "monitorType": "account",
  "username": "NASA",
  "xUserId": "11348282",
  "data": { "tweetId": "1977000000000000000", "text": "Liftoff!" }
}
```

Örnek değerler yapıyı gösterir. Canlı veri farklıdır.

Durum kaydı `state`, `targets`, `destinations`, `eventsSaved`, `pendingEvents`,
`hoursCharged`, `chargedUsd`, `hoursOwed`, `paidThrough`, `pausesAt`,
`historyDataset`, `notices` ve `nextStep` alanlarını tutar. X'te bulunmayan bir
hedef bunu kendi `message` alanında söyler ve izleme geri kalan hedefleri izler.
Yeni bir genel webhook, imzalama anahtarını yalnızca 1 kez ve yalnızca durum
kaydında gösterir.

Hesabındaki geçmiş veri kümesi, izlemenin her olayını birer kez tutar. Adı
`x-monitor-` ile başlar.

## Yapay zeka ajanları için

API'nin tamamı 1 çağrıdır. Her çağrı izlemeyi başlatır veya günceller, bir
önceki çağrıdan bu yana izlenen saatleri ücretlendirir ve yalnızca yeni olanı
döndürür. Hiçbir çağrı aynı saati 2 kez ücretlendirmez. Çağrılar hızla biter ve
Apify'ın MCP'sinin beklediği süreyi aşmaz.

Bir izlemeyi başlat veya sürdür:

```json
{
  "twitterHandles": ["NASA"],
  "searchTerms": ["\"x api\" lang:en"],
  "replies": true,
  "monitorName": "agent-demo"
}
```

Bir çağrının döndürdükleri:

- Çalıştırmanın veri kümesi önce yeni olayları, sonra `resultType` değeri
  `status` olan 1 satırı tutar. Bu satırdaki `state` izlemenin çalışıp
  çalışmadığını, `nextStep` ise sonra ne yapacağını söyler.
- `STATUS` kaydı aynı durumu tutar. Çağrı bir webhook oluşturduysa imzalama
  anahtarını da içerir.

Çalışır halde tut: Ajanından, Actor'ı her saat aynı girdiyle çalıştıran bir
Apify zamanlaması oluşturmasını iste. Actor'ı en az 24 saatte 1 çağıran herhangi
bir zamanlayıcı da işe yarar. Durdurmak için aynı girdiyi `"stop": true` ile
gönder.

Actor, ajanların tahmin ettiği `handles` ve `usernames` gibi adları da okur.
Çalıştırma durumu bunları nasıl okuduğunu söyler.

## Twitter izleme ne kadar tutar?

Her ücretli Apify planında monitor-hour başına $0.0045 ödersin. 1 hesap veya
anahtar kelime 1 izlemedir. Apify, platform kullanımını ayrıca faturalandırır.

- 30 gün izlenen 1 hesap yaklaşık $3.24 tutar.
- 30 gün izlenen 10 hesap ve 2 anahtar kelime yaklaşık $38.88 tutar.
- Kaç tane gelirse gelsin olaylar ve bildirimler ücretsizdir.
- Başlatma ücreti yok. Bir çalıştırma yalnızca izlenmiş saatleri ücretlendirir.
- X'te bulunmayan bir hedef hiçbir şey izlemez ve ücret tutmaz.
- Çalıştırma başına maksimum maliyetin her ücreti sınırlar. Bunu aşan saatler
  sonraki çalıştırmayı bekler.

Saatlik bir zamanlama, Apify kullanımını ödediği saatlere göre küçük tutar.
Birkaç dakikada bir yapılan çalıştırmalar kullanımı artırır ve bildirimlerde
hiçbir şeyi değiştirmez. Bildirimler zaten çalıştırmalar arasında gelir.

İzleme için ücretli bir Apify planı gerekir. Ücretsiz planda bir çalıştırma
izleme başlatmaz ve ücret almaz. Bunun yerine ilk hesabının en son 5 gönderisini
gösterir. Böylece bildirimlerin ne içereceğini görebilirsin.

## Sınırlar ve kurtarma

- Hesaplar ve anahtar kelimeler izleme başına toplam 100'e kadar çıkabilir. Daha
  fazlası için 2 görev kullan.
- İzleme başına en fazla 10 webhook URL'si, artı Telegram.
- Olaylar 30 gün saklanır. Bu süre içinde `since` onları yeniden kaydedebilir.
- Erken duran bir çalıştırma olaylarını sonraki çalıştırmaya bırakır. Hiçbiri
  kaybolmaz.
- Saat rezervasyonu ile ücretlendirme arasında biten bir çalıştırma ücret almaz.
  O saatler ödenmiş sayılır ve ücretsiz kalır.
- Her çalıştırma 1 ücretsiz durum satırı yazar. Bu yüzden veri kümesi hiçbir
  zaman boş kalmaz.

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
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper):
  Gönderileri alıntılayan gönderileri metin, medya, sayılar, yazarlar ve 11
  filtreyle kazır. Gönderileri kimin alıntıladığını ve ne dediğini incelemek
  istediğinde kullan. Gönderi başına $0.00015'ten başlar.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): Takipçileri,
  takip edilenleri, Liste üyelerini, aboneleri ve Topluluk üyelerini profil
  satırları olarak kazır. Kitle veya üye listelerine ihtiyacın olduğunda kullan.
  Profil başına $0.00015'ten başlar.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper):
  Kullanıcı adı, biyografi ve konuma göre kullanıcıları takipçi, onay işareti,
  hesap yaşı ve konum filtreleriyle arar. Aramadan hesap listeleri
  oluşturduğunda kullan. Profil başına $0.00015'ten başlar.
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper):
  X'in "Account based in" etiketi, X'e nasıl bağlandıkları ve kullanıcı adı
  değişiklikleriyle hesapların nerede bulunduğunu kontrol eder. Hesapların
  nerede bulunduğunu doğrulaman gerektiğinde kullan. Hesap başına $0.00015'ten
  başlar.
- [X Email Scraper](https://apify.com/xquik/x-email-scraper): Kullanıcı
  adlarından, takipçilerden veya kullanıcı aramalarından, hesapların
  profillerinde yayımladığı e-postaları, telefonları ve bağlantıları alır.
  Profillerin yayımladığı e-postalara ihtiyacın olduğunda kullan. Profil başına
  $0.00015'ten başlar.
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
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  Yapay zeka ile her gönderi için tutum, yoğunluk ve alaycılık olasılığını
  etiketler. Herhangi bir konuda genel duygu durumuna ihtiyacın olduğunda
  kullan. Analiz edilen gönderi başına $0.0003'ten başlar.
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

## SSS

Sık sorulan soruların cevapları, sonra da nereden yardım alacağın.

### X çerezi, API anahtarı veya giriş gerekir mi?

Hayır. Xquik'in X (Twitter) Monitor Actor'ı X çerezi, API anahtarı, giriş ya da
kimlik bilgisi istemez. Her kontrol Xquik'in altyapısında çalışır.

### Bir Twitter hesabını nasıl izlerim?

Hesabın kullanıcı adını `twitterHandles` alanına yapıştır, istediğin olayları
seç ve bir bildirim kanalı ekle. Her yeni gönderi saniyeler içinde sana ulaşır.
Her olay da veri kümesinde kalır.

### Kripto hesaplarını ve coin'lerin geçtiği gönderileri izleyebilir mi?

Evet. Takip ettiğin hesapları ya da cashtag veya kontrat adresi gibi bir anahtar
kelime aramasını ekle. Eşleşen gönderiler saniyeler içinde Discord'a veya
Telegram'a ulaşır.

### Bildirimler ne kadar hızlı gelir?

Xquik her saniye kontrol eder ve her olayı saniyeler içinde gönderir.
Bildirimler hiçbir zaman bir çalıştırmayı beklemez.

### Çalıştırma neden izleme için ücretli plan gerektiğini söylüyor?

İzlemeler çalıştırmaların arasında, gün boyu çalışır. Bu yüzden ücretli bir
Apify planı gerekir. Planını yükselt, sonra aynı girdiyle yeniden çalıştır.

### İzlemeyi durdurunca ne olur?

Çalıştırma tüm hedefleri durdurur ve bildirimleri kapatır. O ana kadar izlenen
saatleri ücretlendirir. Önceden saklanan olaylar 30 gün boyunca okunabilir
kalır.

### Bir webhook imzasını nasıl doğrularım?

Yeni bir genel webhook bir imzalama anahtarı alır. Anahtar `STATUS` kaydında
yalnızca 1 kez görünür. Xquik her teslimatı bu anahtarla imzalar, tıpkı REST
webhook'larında olduğu gibi.

### API'yi, zamanlamaları ve entegrasyonları kullanabilir miyim?

Evet. Apify API'yi veya Xquik REST API'yi kullan.
[API sekmesinde](https://apify.com/xquik/x-twitter-monitor/api) Python,
JavaScript ve cURL örnekleri var. Apify
[zamanlamaları](https://docs.apify.com/platform/schedules) izlemeyi çalışır
halde tutar. Ajanlar
[Apify MCP](https://docs.apify.com/platform/integrations/mcp) kullanır.

### X hesaplarını izlemek yasal mı?

Xquik'in X (Twitter) Monitor Actor'ı herkese açık X verisini çeker. Sonuçlarda
kişisel veri olabilir. Amacının yasal olduğundan emin ol ve sana uygulanan
gizlilik kurallarına uy. Emin değilsen yetkin bir hukukçuya danış.

### Nereden yardım alırım?

Actor sayfasında bir issue aç ya da çalıştırma ID'siyle <support@xquik.com>
adresine yaz. Durum sayfası her çalıştırmayı açıklar. Ücretsiz tanılamalar da
ilgilenmen gereken çalıştırmaları kapsar.

### Bana özel bir çözüm alabilir miyim?

Evet. [xquik.com](https://xquik.com) adresini ziyaret et ya da
[API belgelerini](https://docs.xquik.com/introduction) oku. Bu kaynaklar paneli,
API'yi, MCP sunucusunu ve webhook'ları anlatır.
