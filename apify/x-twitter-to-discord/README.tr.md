[English](README.md) · [Español](README.es.md) · **Türkçe** ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer, Xquik MCP'yi kodlama ajanlarına bağlıyor](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Framer'ın Xquik scraper'larını Claude Code, Codex, Cursor & daha fazlasıyla nasıl kullandığını](https://youtu.be/4UOSpoOoC3Y?t=367)
6:07'den itibaren izle.

Xquik, en eksiksiz X verisini sunan, dünyanın en hızlı ve en ucuz X (Twitter)
scraper hizmetidir. Xquik'in X (Twitter) to Discord Bot Actor'ı, seçtiğin
hesapların her yeni tweet'ini, yanıtını, alıntısını ve yeniden gönderisini
Discord kanalına gönderir. Her birini genellikle X gösterdikten sonra bir
saniyeden kısa sürede yakalar. Diğer Apify Actor'larının çoğu, filtrelemeden
veya tekilleştirmeden önce ücret alır. Xquik yalnızca teslim edilen ve benzersiz
sonuçlar için ücret alır. Bu Actor'da da yalnızca bir izlemenin çalıştığı
saatler için ücret alır.

Bir Discord webhook URL'si ve izlenecek hesapları yapıştır, sonra Start'a tıkla.
Bildirimler çalıştırmalar arasında kanalına gelir. Barındırman ya da davet etmen
gereken bir bot yoktur. Ödediğin ücret **monitor-hour başına $0.0045**. Olaylar
ve bildirimler ücretsizdir. Apify, platform kullanımını ayrıca faturalandırır.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## Twitter'dan Discord'a bot neler gönderir

- İzlediğin hesapların, X gösterdikten sonra genellikle bir saniyeden kısa
  sürede yakalanan her yeni tweet'i, yanıtı, alıntısı ve yeniden gönderisi.
- Herhangi bir X arama operatörüyle, anahtar kelimen için X aramasının En son
  sekmesinde görünen her yeni tweet.
- Açtığında canlı videolar, Sohbet Odaları, silinen tweet'ler, profil
  değişiklikleri, takipler ve takipçiler.
- Her bildirim bir Discord mesajı olarak gelir. Mesaj hesabı ve olayı belirtir,
  tweet'in metnini içerir ve X'teki tweet'e bağlantı verir. Tweet'teki hiçbir
  bahsetme kimseye bildirim göndermez.
- Her yeni Discord URL'sine bir test mesajı. Cevabı çalıştırma durumunda
  görünür.
- Her olay, çalıştırmanın veri kümesinde ve kaydedilmiş görev ya da izleme adı
  başına 1 geçmiş veri kümesinde.

## Tweet'ler Discord'a nasıl gönderilir

İzleme için ücretli bir Apify planı gerekir.
[Bir plan seç](https://apify.com/pricing?fpr=xquik), sonra buraya dön ve Try for
free düğmesine bas.

1. Discord'da kanalının ayarlarını, sonra Entegrasyonlar'ı, sonra Webhook'lar'ı
   aç.
2. Bir webhook oluştur ve URL'sini kopyala.
3. Apify Console'da Xquik'in X (Twitter) to Discord Bot Actor'ını aç ve URL'yi
   `discordWebhookUrl` alanına yapıştır.
4. Kullanıcı adlarını `twitterHandles` alanına ya da X aramalarını `searchTerms`
   alanına yapıştır.
5. Start'a tıkla. İzleme o çalıştırmada başlar ve kanal bir test mesajı alır.
6. Actor'ı her saat aynı girdiyle çalıştıran bir zamanlama ekle.

Sonraki her çalıştırma, bir önceki çalıştırmadan bu yana izlenen saatleri
ücretlendirir. Yeni olayları kendi veri kümesine kaydeder ve hızla biter. 24
saat boyunca hiç çalıştırılmayan bir izleme duraklar. Kanalın bundan 4 saat önce
bir uyarı alır. Sonraki çalıştırma izlemeyi sürdürür ve önce ödenmemiş saatleri
ücretlendirir.

## Girdi

| Alan                                                    | Ne yapar                                                                                  |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `discordWebhookUrl`                                     | Discord kanalının webhook URL'si.                                                         |
| `twitterHandles`                                        | @ ile veya @ olmadan kullanıcı adları ya da `x.com` profil URL'leri, her satıra 1 tane.   |
| `searchTerms`                                           | `"x api" lang:en` gibi X aramaları. Her arama 1 izlemedir.                                |
| `monitorName`                                           | Kaydedilmiş görevi olmayan çalıştırmalarda bu hesap ve anahtar kelime grubuna ad verir.   |
| `newPosts`, `replies`, `quotes`, `reposts`              | Yeni tweet'ler, yanıtlar, alıntı tweet'ler ve yeniden gönderiler. Varsayılan olarak açık. |
| `deletedPosts`, `liveVideos`                            | Hesapların silinen tweet'leri, canlı videoları ve Sohbet Odaları.                         |
| `profileChanges`, `followingChanges`, `followerChanges` | Hesapların profil değişiklikleri, takipleri ve takipçileri.                               |
| `eventTypes`                                            | Onay kutularının yerine geçen tam olay türleri.                                           |
| `webhookUrls`, `telegram`                               | Discord'un yanında Slack, herhangi bir HTTPS webhook'u veya Telegram.                     |
| `since`                                                 | Son 30 gün içindeki bir tarihten bu yana saklanan olayları 1 kez kaydeder.                |
| `stop`                                                  | İzlemeyi durdurur ve bildirimleri kapatır.                                                |

1 girdi en fazla 100 hesap ve anahtar kelime alır. Anahtar kelimeler yalnızca
tweet olayları gönderir. Discord URL'si olmayan bir çalıştırma yine de izler ve
yeni olayları veri kümesine kaydeder. Durumu da bir webhook URL'si eklemeni
söyler.

Bu girdiler kopyalamaya hazır.

```json
{
  "discordWebhookUrl": "https://discord.com/api/webhooks/000/XXXX",
  "twitterHandles": ["NASA"]
}
```

```json
{
  "discordWebhookUrl": "https://discord.com/api/webhooks/000/XXXX",
  "searchTerms": ["\"your game\" -from:yourstudio"],
  "monitorName": "game-mentions"
}
```

## Çıktı

Her çalıştırma 4 çıktı döndürür.

- **Durum sayfası**, yani `STATUS.html` kaydı. İzlemenin çalışıp çalışmadığını,
  bir düğmeyle birlikte atılacak tek sonraki adımı, çalıştırmanın neyi kaydedip
  ne kadar ücret aldığını, hedefleri ve her bildirim kanalını gösterir. Output
  sekmesi bu sayfayı gösterir.
- **Durum kaydı**, yani `STATUS` kaydı. Aynı durumu JSON olarak tutar.
- **Yeni olaylar**, yani çalıştırmanın veri kümesi. Yeni olaylar en eskiden
  başlayarak sıralanır, en sonda 1 durum satırı yer alır.
- **Tanılamalar**, yani Actor'ın yalnızca ilgilenmen gereken bir şey olduğunda
  yazdığı kayıtlar.

Bir olay satırı, olayın Xquik'in REST API'sinde sunulan halinin tüm alanlarıyla
birebir aynısıdır. Durum kaydı `state`, `targets`, `destinations`,
`eventsSaved`, `hoursCharged`, `paidThrough`, `pausesAt`, `nextStep`,
`nextStepAction` ve `nextStepUrl` alanlarını, X (Twitter) to Discord Bot
Actor'ının gösterdiği şekilde tutar.

Hesabındaki geçmiş veri kümesi, izlemenin her olayını birer kez tutar. Adı
`x-monitor-` ile başlar.

## Yapay zeka ajanları için

API'nin tamamı 1 çağrıdır. Her çağrı izlemeyi başlatır veya günceller, bir
önceki çağrıdan bu yana izlenen saatleri ücretlendirir ve yalnızca yeni olanı
döndürür. Hiçbir çağrı aynı saati 2 kez ücretlendirmez. İzlemeyi başlatan veya
güncelleyen bir çağrı hızla biter ve Apify'ın MCP'sinin beklediği süreyi aşmaz.
Durdurma yarım dakika kadar sürer, çünkü önce son olayları toplar.

Bu girdi bir izlemeyi başlatır veya sürdürür.

```json
{
  "discordWebhookUrl": "https://discord.com/api/webhooks/000/XXXX",
  "twitterHandles": ["NASA"],
  "monitorName": "agent-demo"
}
```

Çalıştırmanın veri kümesi önce yeni olayları, sonra `resultType` değeri `status`
olan 1 satırı tutar. Bu satırdaki `state` izlemenin çalışıp çalışmadığını,
`nextStep` ise sonra ne yapacağını söyler. Bir izlemeyi kontrol etmek için
Actor'ı aynı girdiyle yeniden çağır. Bu hiçbir şeyi değiştirmez ve yalnızca
izlenmiş saatleri ücretlendirir.

Bir izlemenin çalışmayı sürdürmesi için en az 24 saatte 1 çalıştırma gerekir.
Apify'ın MCP sunucusunda zamanlama aracı yok, bu yüzden zamanlama ekleyemezsin.
Kullanıcıdan `nextStepUrl` içindeki sayfada bir Apify zamanlaması eklemesini
iste. Bu zamanlama Actor'ı her saat aynı girdiyle çalıştırır. Durdurmak için
aynı girdiyi `"stop": true` ile gönder.

## Twitter'dan Discord'a bot ne kadar tutar?

Her ücretli Apify planında monitor-hour başına $0.0045 ödersin. 1 hesap veya
anahtar kelime 1 izlemedir. Apify, platform kullanımını ayrıca faturalandırır.

- 30 gün boyunca Discord'a gönderilen 1 hesap yaklaşık $3.24 tutar.
- 30 gün boyunca 5 hesap yaklaşık $16.20 tutar.
- Kaç tane gelirse gelsin olaylar ve bildirimler ücretsizdir.
- Başlatma ücreti yok. Bir çalıştırma yalnızca izlenmiş saatleri ücretlendirir.
- X'te bulunmayan bir hedef hiçbir şey izlemez ve ücret tutmaz.
- Çalıştırma başına maksimum maliyetin her ücreti sınırlar. Bunu aşan saatler
  sonraki çalıştırmayı bekler.

Saatlik bir zamanlama, Apify kullanımını ödediği saatlere göre küçük tutar.
Birkaç dakikada bir yapılan çalıştırmalar kullanımı artırır ve bildirimlerde
hiçbir şeyi değiştirmez. Bildirimler zaten çalıştırmalar arasında gelir.

İzleme için [ücretli bir Apify planı](https://apify.com/pricing?fpr=xquik)
gerekir. Ücretsiz planda bir çalıştırma izleme başlatmaz ve ücret almaz. Bunun
yerine ilk hesabının en son 5 tweet'ini gösterir.

## Sınırlar & kurtarma

- 1 girdi en fazla 100 hesap ve anahtar kelime alır. Daha fazlası için 2 görev
  kullan.
- Girdi başına en fazla 10 webhook URL'si, artı Telegram.
- Olaylar 30 gün saklanır. Bu süre içinde `since` onları yeniden kaydedebilir.
- Erken duran bir çalıştırma olaylarını sonraki çalıştırmaya bırakır. Hiçbiri
  kaybolmaz.
- Her çalıştırma 1 ücretsiz durum satırı yazar. Bu yüzden veri kümesi hiçbir
  zaman boş kalmaz.
- Xquik'in tüm izleme Actor'ları aynı saat ücretini alır. Bir çalıştırma, hangi
  Actor izlemiş olursa olsun tüm izlemelerinin en eski ödenmemiş saatlerini
  öder.

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
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)
  yapay zekanın 8 özellik cevabından her gönderi için 0 ile 100 arasında bir
  Viral Score & bir karar tahmin eder. Gönderilerin neden yayıldığını veya
  tutmadığını incelediğinde kullan. Analiz edilen gönderi başına $0.0003'ten
  başlar.

## SSS

Sık sorulan soruların cevapları, sonra da nereden yardım alacağın.

### X çerezi, API anahtarı veya giriş gerekir mi?

Hayır. Xquik'in X (Twitter) to Discord Bot Actor'ı X çerezi, API anahtarı, giriş
ya da kimlik bilgisi istemez. Her kontrol Xquik'in altyapısında çalışır.

### Bir bot barındırmam veya davet etmem gerekir mi?

Hayır. Discord her bildirimi kanalının webhook'u üzerinden yayınlar. Senin
tarafında hiçbir şey çalışmaz ve kimsenin sunucuya bir şey davet etmesi
gerekmez.

### Tweet'ler Discord'a ne kadar hızlı ulaşır?

Xquik, izlenen bir hesabın yeni tweet'ini, yanıtını, alıntısını veya yeniden
gönderisini, X gösterdikten sonra genellikle bir saniyeden kısa sürede yakalar.
Bildirimler olaylar geldikçe gider ve hiçbir zaman bir çalıştırmayı beklemez.

### Anahtar kelime tweet'lerini Discord'a gönderebilir miyim?

Evet. X aramalarını `searchTerms` alanına ekle. X aramasının En son sekmesinde
bu aramalar için görünen her yeni tweet kanala ulaşır.

### 1'den fazla kanala gönderebilir miyim?

Evet. Diğer kanalların webhook URL'lerini `webhookUrls` alanına koy. Her girdi
en fazla 10 URL alır.

### Çalıştırma neden izleme için ücretli plan gerektiğini söylüyor?

İzlemeler çalıştırmaların arasında, gün boyu çalışır. Bu yüzden ücretli bir
Apify planı gerekir. Planını yükselt, sonra aynı girdiyle yeniden çalıştır.

### İzlemeyi durdurunca ne olur?

Çalıştırma tüm hedefleri durdurur ve bildirimleri kapatır. O ana kadar izlenen
saatleri ücretlendirir. Sonra en yeni olaylar için yarım dakika kadar bekler ve
onları kaydeder, böylece hiçbiri geride kalmaz. Önceden saklanan olaylar 30 gün
boyunca okunabilir kalır.

### API'yi, zamanlamaları & entegrasyonları kullanabilir miyim?

Evet. Apify API'yi veya Xquik REST API'yi kullan.
[API sekmesinde](https://apify.com/xquik/x-twitter-to-discord/api) Python,
JavaScript ve cURL örnekleri var. Apify
[zamanlamaları](https://docs.apify.com/platform/schedules) izlemeyi çalışır
halde tutar. Ajanlar
[Apify MCP](https://docs.apify.com/platform/integrations/mcp) kullanır.

### X hesaplarını izlemek yasal mı?

Xquik'in X (Twitter) to Discord Bot Actor'ı herkese açık X verisini çeker.
Sonuçlarda kişisel veri olabilir. Amacının yasal olduğundan emin ol ve sana
uygulanan gizlilik kurallarına uy. Emin değilsen yetkin bir hukukçuya danış.

### Nereden yardım alırım?

[Issues sekmesinde](https://apify.com/xquik/x-twitter-to-discord/issues)
çalıştırma ID'siyle bir issue aç. Durum sayfası her çalıştırmayı açıklar.
Ücretsiz tanılamalar da ilgilenmen gereken çalıştırmaları kapsar.

### Bana özel bir çözüm alabilir miyim?

Evet. Neye ihtiyacın olduğunu
[Issues sekmesinde](https://apify.com/xquik/x-twitter-to-discord/issues) anlat.
Xquik ayrıca bir panel, bir REST API, bir MCP sunucusu ve webhook'lar sunar.
Xquik'in web sitesini [Apify profilinde](https://apify.com/xquik) bulabilirsin.
