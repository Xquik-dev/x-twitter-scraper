[English](README.md) · [Español](README.es.md) · **Türkçe** ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer, Xquik MCP'yi kodlama ajanlarına bağlıyor](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Framer'ın Xquik scraper'larını Claude Code, Codex, Cursor & daha fazlasıyla nasıl kullandığını](https://youtu.be/4UOSpoOoC3Y?t=367)
6:07'den itibaren izle.

Xquik, en eksiksiz X verisini sunan, dünyanın en hızlı ve en ucuz X (Twitter)
scraper hizmetidir. Xquik'in X Email Scraper'ı, hesapların kendi X profillerinde
yayımladığı e-postaları X çerezi veya giriş olmadan alır. Diğer Apify
Actor'larının çoğu, filtrelemeden veya tekilleştirmeden önce ücret alır. Xquik
yalnızca teslim edilen, benzersiz ve filtrene uyan sonuçlar için ücret alır.

Kullanıcı adlarını yapıştır, bir hesabın takipçilerini tara ya da X
kullanıcılarını ara & e-posta yayımlayan her profili e-posta en başta olacak
şekilde al. E-postası olmayan bir profil teslim edilmez & ücretlendirilmez.
**Teslim edilen satır başına $0.00015** ödersin & Apify platform kullanımını
ayrıca faturalandırır.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## Her satırdaki iletişim bilgileri

- Profilin yayımladığı ilk e-posta, küçük harfle.
- O e-postanın alan adı & e-postayı tutan profil alanı, yani biyografi, ad veya
  konum.
- Profilin her e-postası, "name [at] site [dot] com" diye yazılmış olsa bile.
- Profilin yayımladığı telefon numaraları, örneğin bir WhatsApp bağlantısı.
- Profilin web sitesi & biyografi bağlantıları, her biri LinkedIn, GitHub veya
  Telegram gibi ağıyla birlikte.
- Ad, biyografi, sayılar, onay durumu, tarihler & görsellerle herkese açık
  profilin tamamı.
- 1 çalıştırmada 3 kaynak, yani hesaplar, onların takipçileri veya takip
  ettikleri & kullanıcı aramaları.
- E-posta alan adı, iş e-postası, takipçi, hesap yaşı, biyografi & konuma göre
  filtreler.
- @ ile veya @ olmadan kullanıcı adları, `x.com` & `twitter.com` URL'leri &
  sayısal kullanıcı ID'leri.
- Faturalamadan önce tekilleştirme.
- Apify veri kümeleri üzerinden JSON, CSV, Excel, XML & RSS dışa aktarımları.
- Apify çalıştırmayı taşıdığında çalıştırma kayıtlı durumdan devam eder.

## X profillerinden e-postalar nasıl alınır

Apify'da yeni misin? Önce
[ücretsiz bir hesap oluştur](https://console.apify.com/sign-up?fpr=xquik).
Ücretsiz plan kredi kartı istemez & her ay harcaman için $5 verir. Profil başına
$0.00015 fiyatla $5, platform kullanımı hariç 33.000 profile kadar yeter. Sonra
buraya dön & Try for free düğmesine bas.

1. Apify Console'da Xquik'in X Email Scraper'ını aç.
2. Kullanıcı adlarını, profil URL'lerini veya kullanıcı ID'lerini
   `twitterHandles` alanına yapıştır ya da `searchTerms` ekle.
3. Bunun yerine her hesabın takipçilerini taramak için `expandFollowers`
   seçeneğini aç.
4. Teslim edilen satırları sınırlamak için `maxItems` ayarla, sonra Start
   düğmesine tıkla.
5. Veri kümesini JSON, CSV veya Excel olarak indir ya da Apify API'yi kullan.

Hiçbir adımda X çerezi, giriş bilgisi veya API anahtarı girmezsin.

## Girdi

`twitterHandles` bir hesabın her yazılış biçimini, istediğin karışımla alır.
Çalıştırma her hesabı kontrol eder & e-posta yayımlayanları teslim eder.

```json
{
  "twitterHandles": ["sample_user", "@sample_org", "https://x.com/sample_shop"],
  "maxItems": 1000
}
```

`startUrls` & `userIds` aynı biçimleri alır. `expandFollowers` açıkken
çalıştırma bunun yerine her hesabın takipçilerini okur & e-posta yayımlayanları
tutar. `expansionRelation`, `Followers` veya `Following` değerini seçer.

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
göre arar. Her terim 1 aramadır.

```json
{
  "searchTerms": ["booking", "founder"],
  "businessEmailOnly": true,
  "minFollowers": 1000
}
```

Yaklaşık her 400 takipçiden 1'i e-posta yayımlar, bu yüzden bir takipçi taraması
teslim ettiğinden çok daha fazla profil okur. `maxScan`, çalıştırmanın her
listede veya aramada okuduğu profilleri sınırlar. 10.000 ile başlar. Çalıştırma
bir listeyi bu sınırda durdurduğunda durumu kaç satır okuduğunu söyler & daha
fazlasını okumak için `maxScan` değerini artırırsın. Taranan profiller
ücretsizdir.

`emailDomains`, e-postası listelenen bir alan adında veya onun bir alt alan
adında olan profilleri tutar. `businessEmailOnly`, Gmail gibi ücretsiz web
postası dışında bir e-postası olan profilleri tutar. `minFollowers`,
`maxFollowers`, `minAccountAgeDays`, `verifiedOnly`, `hasWebsite`,
`hasLocation`, `bioContains` & `locationContains` profilleri daha da daraltır.
Her filtre faturalamadan önce uygulanır.

`searchQueries` & `keyword`, `searchTerms` için başka adlar olarak çalışır &
`maxFollowersPerHandle` de `maxScan` için başka bir ad olarak çalışır. Girdinin
2 kez belirttiği bir hesap 1 kez teslim edilir & 1 kez ücretlendirilir. Sorunsuz
biten küçük çalıştırmalar `run-report` kaydını atlar & Apify kullanımından
tasarruf eder. Kaydı her çalıştırmada yazmak için `alwaysSaveRunRecords`
seçeneğini aç.

### Başka bir e-posta Actor'ından geçiş yap

Zaten kullandığın girdiyi yapıştır. Xquik'in X Email Scraper'ı, diğer
Actor'ların aşağıdaki alan adlarını okur. Her satır önce onların alanlarını,
sonra eşlendikleri alanı yazar.

- `requireEmail` için alan gerekmez. Teslim edilen her profil bir e-posta
  yayımlar.
- `requireWebsite` alanı `hasWebsite` alanına eşlenir. Web sitesi alanında
  herhangi bir bağlantı olan profili tutar & çalıştırma durumu bunu söyler.
- `bioKeywords` alanı `bioContains` alanına eşlenir. Terimlerinden herhangi
  1'inin eşleşmesi yeter.
- 1 değerli `locationKeywords` alanı `locationContains` alanına eşlenir. Daha
  fazla değer çalıştırmayı hiçbir okuma veya ücret olmadan durdurur.
- Liste olarak verilen `emailDomains` alanı `emailDomains` alanına eşlenir.
- `outputEmail`, `resolveShortLinks` için alan gerekmez. Her satır kendi
  e-postalarını & X'in tam bağlantılarını taşır.
- `findEmails`, `extractEmails` için alan gerekmez. Satırlar, profilin X'te
  yayımladığı e-postaları taşır. Çalıştırma durumu, Actor'ın bağlantılı siteleri
  okumadığını söyler.
- `validateEmails` için alan gerekmez. Actor posta kutusu denetlemediği için
  çalıştırma durumu, e-postaların yayımlandığı gibi geldiğini söyler.

Bu adlardan birini & kanonik alanını birlikte ayarlarsan kanonik değer kazanır.
Çalıştırma günlüğü kaybeden alanı söyler.

## Çıktı

E-posta yayımlayan her profil 1 veri kümesi satırıdır. Önce `email`,
`emailDomain`, `emailSource` & `contactInfo` alanlarında iletişim bilgileri
gelir. Ardından `id`, `username`, `name`, `description`, `followers`,
`following`, `verified`, `verifiedType`, `createdAt`, `profilePicture` & daha
fazlasıyla herkese açık profilin tamamı gelir. Eksik kaynak alanları satırda yer
almaz. Xquik'in X Email Scraper'ı hiçbir değer uydurmaz.

Örneklerdeki değerler yalnızca örnektir. Sonuçlar canlı veriden gelir. Bir satır
şöyle görünür.

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
`profileFollower` & birinin takip ettiği bir hesap için `profileFollowing` olur.
`sourceTarget`, satırın geldiği hesabı veya arama terimini belirtir.

## E-posta ne anlama gelir

E-posta, hesabın kendi profilinde biyografisine, adına veya konumuna yazdığı bir
adrestir. Actor adresi hesabın yayımladığı gibi döndürür & küçük harfe çevirir.
Hiçbir şey adresin posta alıp almadığını kontrol etmez & hiçbir şey profilin
bağlantı verdiği web sitesini okumaz. Hesabın kendi yazımı farklıysa `writtenAs`
bu yazımı tutar, örneğin "jane [at] example [dot] org".

Telefon numarası yalnızca profil onu başka bir şey olamayacak bir biçimde
yazdığında görünür, örneğin bir WhatsApp bağlantısı ya da + ile başlayan bir
numara. Bir yıl, bir sayı veya bir fiyat asla telefon numarası olarak okunmaz.

## X profillerinden e-posta almak ne kadar tutar?

Her Apify planında teslim edilen satır başına $0.00015 ödersin. Apify, platform
kullanımını ayrıca faturalandırır.

Daha fazla hacim için daha çok ön ödemeli kullanım içeren bir
[Apify planı seç](https://apify.com/pricing?fpr=xquik).

- Teslim edilen her veri satırı için tek bir ücret. Tanılamalar `diagnostics`
  içinde ücretsizdir.
- Başlatma veya sorgulama ücreti yok.
- E-postası olmayan bir profil ne satır ne de ücret ekler.
- X'te bulunmayan bir hesap ne satır ne de ücret ekler.
- Tekilleştirme faturalamadan önce çalışır.
- Apify'ın maksimum toplam ücret ayarları teslim edilen satırları sınırlar.

Bir takipçi taraması az satır bulmak için bir süre çalışır, çünkü saniyede
yaklaşık 350 profil okur & yaklaşık 400 profilden 1'ini tutar. `maxScan` bu
süreyi sınırlar.

## Sınırlar & kurtarma

Xquik'in X Email Scraper'ı 1 çalıştırmada birçok hesabı, listeyi & aramayı okur.
Teslim edilen satırlar & ilerleme bir Apify yeniden başlatmasından sonra
korunur. Actor kendi başına süre sınırı eklemez. Ayarladığın her Apify zaman
aşımına uyar.

Çalıştırma durumu, X'te karşılığı bulunmayan hesapları adlarıyla belirtir &
kullanıcı adını, ID'yi veya URL'yi kontrol etmeni söyler. Askıya alınmış
hesapları da belirtir. Yarıda kesilen veri çekme ücretsiz bir `partial`
tanılaması yazar. Elde edilen sonuçlar olduğu gibi kalır. Yeniden denemeden önce
`availableResults`, `failedTargets`, `retryable` & `nextAction` alanlarını oku.
Actor'ın başarıyla bitmesi teslimatı doğrular, tüm verinin çekildiğini değil.

Çalıştırma durumu, erken durmanın her nedenini söyler. `stopCauses` her nedeni
kendi `message`, `retryable` & `nextAction` alanlarıyla listeler. Nedenler
`scan_limit`, `target_not_found`, `target_suspended`, `target_failed` &
`deadline_reached` olabilir. Bulunamayan veya askıya alınmış bir hedef ya da
`maxScan` sınırında durdurulan bir liste, `stopCauses` listesine yalnızca
çalıştırmayı başka bir neden durdurduysa girer. Nedenlerden biri yeniden
denenebiliyorsa çalıştırma da `retryable` olur.

Çalıştırmanın `maxScan` sınırında durdurduğu bir liste hiçbir çalıştırmayı erken
bitirmez. Satırı olan bir çalıştırma tamamlanır & durumu kaç satır okuduğunu &
`maxScan` değerini artırman gerektiğini söyler. Bunun için tanılama yazmaz,
böylece bir kayıt yazımından tasarruf edersin. Çalıştırma raporu bu tür
listeleri `scanLimitedTargets` içinde sayar.

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

Hayır. Xquik'in X Email Scraper'ı X çerezi, API anahtarı, giriş veya kimlik
bilgisi istemez. Her okuma Xquik'in altyapısında çalışır.

### E-postalar nereden gelir?

Profilin kendisinden, yani hesabın yazdığı biyografi, ad & konumdan gelir. Actor
hiçbir gönderiyi & bağlantılı hiçbir web sitesini okumaz, bu yüzden her e-posta
hesabın kendi X profilinde yayımladığı bir e-postadır.

### Actor bir e-postanın çalıştığını kontrol eder mi?

Hayır. Her adresi hesabın yayımladığı gibi döndürür. Hiçbir şey adresin posta
alıp almadığını kontrol etmez.

### Bir takipçi taraması neden az satır teslim etti?

Yaklaşık her 400 takipçiden 1'i e-posta yayımlar. Çalıştırma durumu, bir listede
kaç satır okunduğunu söyler. Bir listenin daha fazlasını okumak için `maxScan`
değerini artır ya da `searchTerms` alanında booking gibi kelimeler kullan. Bu
kelimeler çok daha fazla satır tutar.

### 1 çalıştırmada kaç profil kontrol edebilirim?

Yapıştırdığın kadar. Bir çalıştırma 100.000 satır & daha fazlasını döndürebilir.
Daha büyük bir liste için `maxItems` değerini formun başladığı 1.000'in üzerine
çıkar.

### X profillerinden e-posta toplamak yasal mı?

Xquik'in X Email Scraper'ı herkese açık X alanlarını çeker. Sonuçlar kişisel
veri içerir. Amacının yasal olduğundan emin ol, senin için geçerli gizlilik &
e-posta kurallarına uy & e-posta almak istemeyenlerin isteğine saygı göster.
Emin değilsen yetkin bir hukukçuya danış.

### Çalıştırmam neden sonuç döndürmedi?

Önce çalıştırma durumunu oku. Boş bir çalıştırmanın durumu, X'te karşılığı
bulunmayan her hesabın kullanıcı adını, ID'sini veya URL'sini kontrol etmeni
söyler. E-postası olmayan bir profil satır eklemez. Ücretsiz `diagnostics`
çıktısı, dikkat gerektiren bir şey olduğunda görünür. Bu çıktıdaki `stopCauses`
her neden için izleyeceğin bir `nextAction` verir.

### API'yi, zamanlamaları & entegrasyonları kullanabilir miyim?

Evet. Apify API'yi veya Xquik REST API'yi kullan.
[API sekmesinde](https://apify.com/xquik/x-email-scraper/api) Python, JavaScript
& cURL örnekleri var. Apify
[zamanlamaları](https://docs.apify.com/platform/schedules), Xquik'in X Email
Scraper'ını bir cron takvimiyle çalıştırır. Ajanlar
[Apify MCP](https://docs.apify.com/platform/integrations/mcp) kullanır. Eski bir
derlemeye ihtiyacın yoksa `latest` kullan.

### Nereden yardım alırım?

Çalıştırma ID'siyle
[Issues sekmesinde](https://apify.com/xquik/x-email-scraper/issues) bir issue
aç. Anahtar-değer deposundaki ücretsiz tanılamalar dikkat gerektiren
çalıştırmaları açıklar. Hiç satır almayan bir çalıştırma, nedenini durum
metninde söyler.

### Bana özel bir çözüm alabilir miyim?

Evet. İhtiyacını
[Issues sekmesinde](https://apify.com/xquik/x-email-scraper/issues) anlat. Xquik
ayrıca bir panel, bir REST API, bir MCP sunucusu & webhook'lar sunar. Xquik'in
web sitesini [Apify profilinde](https://apify.com/xquik) bul.
