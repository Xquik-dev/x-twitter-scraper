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
scraper hizmetidir. Xquik'in X Email Scraper'ı, hesapların kendi X profillerinde
yayımladığı e-postaları X çerezi veya giriş olmadan alır. Diğer Apify
Actor'larının çoğu, filtrelemeden veya tekilleştirmeden önce ücret alır. Xquik
yalnızca teslim edilen, benzersiz ve filtrene uyan sonuçlar için ücret alır.

Kullanıcı adlarını yapıştır, bir hesabın takipçilerini tara ya da X
kullanıcılarını ara. E-posta yayımlayan her profili alırsın ve e-posta en başta
gelir. E-postası olmayan bir profil teslim edilmez ve ücret çıkarmaz. **Teslim
edilen satır başına $0.00015** ödersin. Apify, platform kullanımını ayrıca
faturalandırır.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## Her satırdaki iletişim bilgileri

- Profilin yayımladığı ilk e-posta, küçük harfle.
- O e-postanın alan adı ve e-postanın bulunduğu profil alanı: biyografi, ad veya
  konum.
- Profildeki her e-posta, "name [at] site [dot] com" biçiminde yazılmış olsa da.
- Profilin yayımladığı telefon numaraları, örneğin bir WhatsApp bağlantısı.
- Profilin web sitesi ve biyografi bağlantıları, her biri LinkedIn, GitHub veya
  Telegram gibi ağıyla birlikte.
- Herkese açık profilin tamamı: ad, biyografi, sayılar, onay, tarihler ve
  görseller.
- 1 çalıştırmada 3 kaynak: hesaplar, bu hesapların takipçileri veya takip
  ettikleri ve kullanıcı aramaları.
- E-posta alan adı, iş e-postası, takipçi, hesap yaşı, biyografi ve konuma göre
  filtreler.
- @ ile veya @ olmadan kullanıcı adları, x.com ve twitter.com URL'leri ve
  sayısal kullanıcı ID'leri.
- Faturalamadan önce tekilleştirme.
- Apify veri kümeleri üzerinden JSON, CSV, Excel, XML ve RSS dışa aktarımı.
- Apify çalıştırmayı taşısa da çalıştırma kayıtlı durumdan devam eder.

## X profillerinden e-postalar nasıl alınır

1. Apify Console'da Xquik'in X Email Scraper'ını aç.
2. Kullanıcı adlarını, profil URL'lerini veya kullanıcı ID'lerini
   `twitterHandles` alanına yapıştır ya da `searchTerms` ekle.
3. Bunun yerine her hesabın takipçilerini taramak için `expandFollowers`
   seçeneğini aç.
4. Teslim edilecek satır sayısını `maxItems` ile sınırla, sonra Start'a tıkla.
5. Veri kümesini JSON, CSV veya Excel olarak indir ya da Apify API'yi kullan.

Hiçbir adımda X çerezi, giriş bilgisi veya API anahtarı girmezsin.

## Girdi

`twitterHandles` bir hesabın her yazılış biçimini alır, hepsini
karıştırabilirsin. Çalıştırma her hesabı kontrol eder ve e-posta yayımlayanları
teslim eder:

```json
{
  "twitterHandles": ["sample_user", "@sample_org", "https://x.com/sample_shop"],
  "maxItems": 1000
}
```

`startUrls` ve `userIds` aynı biçimleri alır. `expandFollowers` açıkken
çalıştırma bunun yerine her hesabın takipçilerini okur ve e-posta yayımlayanları
tutar. `expansionRelation`, `Followers` veya `Following` değerini seçer:

```json
{
  "twitterHandles": ["sample_org"],
  "expandFollowers": true,
  "expansionRelation": "Followers",
  "maxScan": 10000,
  "emailDomains": "example.com, example.org"
}
```

`searchTerms`, X kullanıcılarını ad, kullanıcı adı veya biyografi kelimelerine
göre arar. Her terim 1 aramadır:

```json
{
  "searchTerms": ["booking", "founder"],
  "businessEmailOnly": true,
  "minFollowers": 1000
}
```

Yaklaşık her 400 takipçiden 1'i e-posta yayımlar. Bu yüzden bir takipçi
taraması, teslim ettiğinden çok daha fazla profil okur. `maxScan`, çalıştırmanın
her listede veya aramada okuduğu profilleri sınırlar. 10.000 ile başlar.
Çalıştırma bir listeyi bu sınırda durdurursa çalıştırma durumu kaç satır
okuduğunu söyler. Daha fazlasını okumak için `maxScan` değerini artır. Taranan
profiller ücretsizdir.

`emailDomains`, e-postası listelediğin bir alan adında veya onun bir alt alan
adında olan profilleri tutar. `businessEmailOnly`, Gmail gibi ücretsiz e-posta
hizmetleri dışında bir e-postası olan profilleri tutar. `minFollowers`,
`maxFollowers`, `minAccountAgeDays`, `verifiedOnly`, `hasWebsite`,
`hasLocation`, `bioContains` ve `locationContains` profilleri daha da daraltır.
Her filtre faturalamadan önce çalışır.

`searchQueries` ve `keyword`, `searchTerms` için başka adlar olarak çalışır.
`maxFollowersPerHandle` de `maxScan` için başka bir ad olarak çalışır. Girdide 2
kez geçen bir hesap 1 kez teslim edilir ve 1 kez ücretlendirilir. Sorunsuz biten
küçük çalıştırmalar `run-report` yazmaz, böylece Apify kullanımı azalır. Raporu
her çalıştırmada almak için `alwaysSaveRunRecords` seçeneğini aç.

### Başka bir e-posta Actor'ından geçiş yap

Zaten kullandığın girdiyi yapıştır. Xquik'in X Email Scraper'ı, diğer
Actor'ların şu alan adlarını okur. Her satır önce onların alanlarını, sonra
eşlendikleri alanı yazar:

- `requireEmail`: alan gerekmez. Teslim edilen her profil e-posta yayımlar.
- `requireWebsite`: `hasWebsite`. Web sitesi alanında herhangi bir bağlantı olan
  profili tutar ve çalıştırma durumu bunu söyler.
- `bioKeywords`: `bioContains`. Terimlerinden 1 tanesinin eşleşmesi yeter.
- 1 değerli `locationKeywords`: `locationContains`. Daha fazla değer
  çalıştırmayı hiçbir okuma veya ücret olmadan durdurur.
- liste olarak `emailDomains`: `emailDomains`
- `outputEmail`, `resolveShortLinks`: alan gerekmez. Her satır kendi
  e-postalarını ve X'in tam bağlantılarını taşır.
- `findEmails`, `extractEmails`: alan yok. Satırlar, profilin X'te yayımladığı
  e-postaları taşır. Çalıştırma durumu, Actor'ın bağlantılı siteleri okumadığını
  söyler.
- `validateEmails`: alan yok. Actor posta kutusu denetlemediği için çalıştırma
  durumu, e-postaların yayımlandığı gibi geldiğini söyler.

Bu adlardan birini ve kanonik alanını birlikte ayarlarsan kanonik değer geçerli
olur. Çalıştırma günlüğü geçersiz kalan alanı yazar.

## Çıktı

E-posta yayımlayan her profil 1 veri kümesi satırıdır. Önce iletişim bilgileri
gelir: `email`, `emailDomain`, `emailSource` ve `contactInfo`. Ardından herkese
açık profilin tamamı gelir: `id`, `username`, `name`, `description`,
`followers`, `following`, `verified`, `verifiedType`, `createdAt`,
`profilePicture` ve daha fazlası. Eksik kaynak alanları satıra eklenmez.
Xquik'in X Email Scraper'ı hiçbir değer uydurmaz.

Aşağıdaki değerler yalnızca örnektir. Gerçek sonuçlar canlı veriden gelir. Bir
satır şöyle görünür:

```json
{
  "email": "press@example.com",
  "emailDomain": "example.com",
  "emailSource": "bio",
  "contactInfo": {
    "emails": [
      {
        "value": "press@example.com",
        "domain": "example.com",
        "source": "bio"
      },
      {
        "value": "jane@example.org",
        "domain": "example.org",
        "source": "bio",
        "writtenAs": "jane [at] example [dot] org"
      }
    ],
    "phones": [
      {
        "value": "+14155550123",
        "source": "bio",
        "writtenAs": "+1 (415) 555-0123"
      }
    ],
    "links": [
      { "url": "https://example.com", "network": "website", "source": "url" }
    ]
  },
  "id": "1234567890",
  "username": "sample_user",
  "name": "Sample User",
  "description": "Press: press@example.com",
  "followers": 1200,
  "verified": true,
  "createdAt": "2017-03-21T20:50:14.000Z",
  "resultType": "profile",
  "sourceTarget": "sample_user"
}
```

`resultType` bir hesap veya arama sonucu için `profile`, bir takipçi için
`profileFollower`, takip edilen bir hesap için `profileFollowing` olur.
`sourceTarget`, satırın geldiği hesabı veya arama terimini belirtir.

## E-posta ne anlama gelir

E-posta, hesabın kendi profilinde biyografisine, adına veya konumuna yazdığı bir
adrestir. Actor adresi hesabın yayımladığı gibi döndürür ve küçük harfe çevirir.
Actor, adresin posta alıp almadığını kontrol etmez. Profilin bağlantı verdiği
web sitesini de okumaz. Hesabın kendi yazımı farklıysa `writtenAs` bu yazımı
tutar, örneğin "jane [at] example [dot] org".

Telefon numarası yalnızca profil onu başka bir şey olamayacak bir biçimde
yazdığında görünür, örneğin bir WhatsApp bağlantısı ya da + ile başlayan bir
numara. Actor bir yılı, bir sayıyı veya bir fiyatı asla telefon numarası olarak
okumaz.

## X profillerinden e-posta almak ne kadar tutar?

Her Apify planında teslim edilen satır başına $0.00015 ödersin. Apify, platform
kullanımını ayrıca faturalandırır.

- Teslim edilen her veri satırı için 1 kez ödersin. Tanılamalar `diagnostics`
  içinde ücretsizdir.
- Başlatma veya sorgulama ücreti yok.
- E-postası olmayan bir profil satır eklemez ve ücret çıkarmaz.
- X'te bulunmayan bir hesap satır eklemez ve ücret çıkarmaz.
- Tekilleştirme faturalamadan önce çalışır.
- Apify'ın maksimum toplam ücret ayarları teslim edilen satırları sınırlar.

Bir takipçi taraması az satır bulmak için bir süre çalışır. Çünkü saniyede
yaklaşık 350 profil okur ve yaklaşık 400 profilden 1'ini tutar. `maxScan` bu
süreyi sınırlar.

## Sınırlar ve kurtarma

Xquik'in X Email Scraper'ı 1 çalıştırmada birçok hesabı, listeyi ve aramayı
okur. Apify çalıştırmayı yeniden başlatsa da teslim edilen satırlar ve ilerleme
korunur. Actor kendi başına süre sınırı eklemez. Ayarladığın Apify zaman aşımına
uyar.

Çalıştırma durumu, X'te karşılığı bulunmayan hesapları adlarıyla belirtir ve
kullanıcı adını, ID'yi veya URL'yi kontrol etmeni söyler. Askıya alınmış
hesapları da belirtir. Çalıştırma yarıda kesilirse Actor ücretsiz bir `partial`
tanılaması yazar. Elde edilen sonuçlar olduğu gibi kalır. Yeniden denemeden önce
`availableResults`, `failedTargets`, `retryable` ve `nextAction` alanlarını oku.
Actor'ın başarıyla bitmesi teslimatı doğrular. Tüm verinin çekildiğini
doğrulamaz.

Çalıştırma durumu, erken durmanın her nedenini söyler. `stopCauses` her nedeni
kendi `message`, `retryable` ve `nextAction` alanlarıyla listeler. Nedenler
şunlardır: `scan_limit`, `target_not_found`, `target_suspended`, `target_failed`
ve `deadline_reached`. Çalıştırmanın `maxScan` sınırında durdurduğu bir liste
`scan_limit` nedenidir ve çalıştırma raporu bu listeleri `scanLimitedTargets`
içinde sayar. Bulunamayan veya askıya alınmış bir hedef, listeye yalnızca
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
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper):
  Gönderileri alıntılayan gönderileri metin, medya, sayılar, yazarlar ve 11
  filtreyle kazır. Gönderileri kimin alıntıladığını ve ne dediğini incelemek
  istediğinde kullan. Gönderi başına $0.00015'ten başlar.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): Takipçileri,
  takip edilenleri, Liste üyelerini, aboneleri ve Topluluk üyelerini profil
  satırları olarak kazır. Kitle veya üye listelerine ihtiyacın olduğunda kullan.
  Profil başına $0.00015'ten başlar.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper):
  Kullanıcı adı, biyografi ve konuma göre kullanıcıları takipçi, onay, hesap
  yaşı ve konum filtreleriyle arar. Aramadan hesap listeleri oluşturduğunda
  kullan. Profil başına $0.00015'ten başlar.
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper):
  X'in "Account based in" etiketi, X'e nasıl bağlandıkları ve kullanıcı adı
  değişiklikleriyle hesapların nerede bulunduğunu kontrol eder. Hesapların
  nerede bulunduğunu doğrulaman gerektiğinde kullan. Hesap başına $0.00015'ten
  başlar.
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

Hayır. Xquik'in X Email Scraper'ı X çerezi, API anahtarı, giriş ya da kimlik
bilgisi istemez. Her okuma Xquik'in altyapısında çalışır.

### E-postalar nereden gelir?

Profilin kendisinden: hesabın yazdığı biyografi, ad ve konumdan. Actor hiçbir
gönderiyi ve bağlantılı hiçbir web sitesini okumaz. Bu yüzden her e-posta,
hesabın kendi X profilinde yayımladığı bir e-postadır.

### Actor bir e-postanın çalıştığını kontrol eder mi?

Hayır. Her adresi hesabın yayımladığı gibi döndürür. Adresin posta alıp
almadığını kontrol etmez.

### Takipçi taraması neden az satır teslim etti?

Yaklaşık her 400 takipçiden 1'i e-posta yayımlar. Çalıştırma durumu,
çalıştırmanın bir listede kaç satır okuduğunu söyler. Bir listenin daha
fazlasını okumak için `maxScan` değerini artır ya da `searchTerms` alanında
booking gibi kelimeler kullan. Böyle kelimeler çok daha fazla satır tutar.

### 1 çalıştırmada kaç profil kontrol edebilirim?

Yapıştırdığın kadar. Bir çalıştırma 100.000 satır ve daha fazlasını
döndürebilir. Daha büyük bir liste için `maxItems` değerini formun başladığı
1.000'in üzerine çıkar.

### X profillerinden e-posta toplamak yasal mı?

Xquik'in X Email Scraper'ı herkese açık X alanlarını çeker. Sonuçlar kişisel
veri içerir. Amacının yasal olduğundan emin ol. Senin için geçerli gizlilik ve
e-posta kurallarına uy, e-posta almak istemeyenlerin talebini de yerine getir.
Emin değilsen yetkin bir hukukçuya danış.

### Çalıştırmam neden sonuç döndürmedi?

Önce çalıştırma durumunu oku. Boş bir çalıştırmanın durumu, X'te karşılığı
bulunmayan her hesabın kullanıcı adını, ID'sini veya URL'sini kontrol etmeni
söyler. E-postası olmayan bir profil satır eklemez. Ücretsiz `diagnostics`
çıktısı, ilgilenmen gereken bir şey olduğunda görünür. Buradaki `stopCauses` her
neden için izleyeceğin bir `nextAction` verir.

### API'yi, zamanlamaları ve entegrasyonları kullanabilir miyim?

Evet. Apify API'yi veya Xquik REST API'yi kullan.
[API sekmesinde](https://apify.com/xquik/x-email-scraper/api) Python, JavaScript
ve cURL örnekleri var. Apify
[zamanlamaları](https://docs.apify.com/platform/schedules), Xquik'in X Email
Scraper'ını bir cron takvimiyle çalıştırır. Ajanlar
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
