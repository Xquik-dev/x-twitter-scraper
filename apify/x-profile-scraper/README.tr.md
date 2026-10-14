[English](README.md) · [Español](README.es.md) · **Türkçe** ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer, Xquik MCP'yi kodlama ajanlarına bağlıyor](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Framer'ın Xquik scraper'larını Claude Code, Codex, Cursor & daha fazlasıyla nasıl kullandığını](https://youtu.be/4UOSpoOoC3Y?t=367)
6:07'den itibaren izle.

Xquik, en eksiksiz X verisini sunan, dünyanın en hızlı ve en ucuz X (Twitter)
scraper hizmetidir. Xquik'in X Profile Scraper'ı her kullanıcı adı için
profilleri, gönderileri, yanıtları, medyayı & takipçileri toplar. Diğer Apify
Actor'larının çoğu, filtrelemeden veya tekilleştirmeden önce ücret alır. Xquik
yalnızca teslim edilen, benzersiz ve filtrene uyan sonuçlar için ücret alır.

Twitter hesaplarını toplu olarak sorgula & profilleri X hesabı olmadan oku.
Kullanıcı adlarından, ID'lerden veya URL'lerden X profillerini, gönderilerini,
yanıtlarını, medyasını & takipçilerini kazı. **Teslim edilen satır başına
$0.00015** ödersin & Apify platform kullanımını ayrıca faturalandırır. X API
anahtarına veya girişe ihtiyacın yok.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## X Profile Scraper ne yapar?

Xquik'in X Profile Scraper'ı kullanıcı adlarından, sayısal kullanıcı ID'lerinden
veya profil URL'lerinden herkese açık X (Twitter) profillerini döndürür. Her
profil kendi gönderilerini, yanıtlarını, medyasını, Öne Çıkanlarını,
takipçilerini, takip edilenlerini & onaylı takipçilerini ekleyebilir. Ayrıca
biyografileri çevirir & kimin şu an canlı yayında olduğunu kontrol eder.

### Temel özellikler

- Kullanıcı adı, ID veya URL ile 1 çalıştırmada birçok profil oku.
- Gönderileri, yanıtları, medyayı, Öne Çıkanları, takipçileri, takip edilenleri
  veya onaylı takipçileri ayrı satırlar olarak ekle.
- `translateBioTo` ile her biyografiyi kodunu verdiğin dile çevir.
- `checkLiveNow` ile her profilin şu an canlı yayında olup olmadığını kontrol
  et.
- Gönderileri tarih, dil, medya & etkileşime göre filtrele.
- Profilleri kitle büyüklüğü, hesap yaşı & onay durumuna göre filtrele.
- Filtreler & tekilleştirme faturalamadan önce çalışır.
- Apify çalıştırmaları yeniden başlattığında teslim edilen satırlar & ilerleme
  korunur.

### Kullanım alanları

- Potansiyel müşteri listelerini biyografi, web sitesi, konum & kitle
  büyüklüğüyle zenginleştir.
- Rakip hesapları takipçi, gönderi & onay durumuna göre karşılaştır.
- İçerik üreticilerini kitle, hesap yaşı & etkileşime göre değerlendir.
- Bir hesabın gönderilerini, medyasını & Öne Çıkanlarını arşivle.
- Takipçiler & takip edilenler üzerinden bir hesabın ağını çıkar.
- İçerik üreticilerinin & markaların canlı yayınlarını takip et.
- Başka pazarlardaki biyografileri kendi dilinde oku.

### X Profile Scraper hangi verileri çekebilir?

Profil satırları `resultType: "profile"` kullanır. Başlıca alanlar
aşağıdakilerdir.

| Alan                     | Açıklama                                                  |
| ------------------------ | --------------------------------------------------------- |
| `id`                     | Sayısal kullanıcı ID'si                                   |
| `username`               | `@` olmadan kullanıcı adı                                 |
| `name`                   | Görünen ad                                                |
| `description`            | Biyografi metni                                           |
| `url`                    | Profil satırlarındaki web sitesi                          |
| `location`               | Hesap sahibinin yazdığı konum                             |
| `email`                  | Profilin yayımladığı ilk e-posta                          |
| `contactInfo`            | Profilin yayımladığı e-postalar, telefonlar & bağlantılar |
| `followers`              | Takipçi sayısı                                            |
| `following`              | Takip edilen sayısı                                       |
| `statusesCount`          | Gönderi sayısı                                            |
| `mediaCount`             | Medya gönderisi sayısı                                    |
| `favouritesCount`        | Hesabın yaptığı beğeniler                                 |
| `listedCount`            | Hesabı içeren herkese açık Listeler                       |
| `createdAt`              | Hesabın oluşturulma zamanı                                |
| `verified`               | X'in hesabı onaylı gösterip göstermediği                  |
| `isBlueVerified`         | Hesabın X Blue onayı olup olmadığı                        |
| `verifiedType`           | `Government` gibi onay kategorisi                         |
| `profilePicture`         | 48 px boyutunda profil fotoğrafı URL'si                   |
| `profilePictureOriginal` | İndirmek için aynı fotoğrafın tam boyutu                  |
| `coverPicture`           | Kapak fotoğrafı URL'si                                    |
| `pinnedTweetIds`         | Sabitlenmiş gönderi ID'leri                               |
| `professional`           | Profesyonel kategori & tür                                |
| `accountBasedIn`         | X'in tahmine dayalı ülke veya bölge etiketi               |
| `connectedVia`           | Hesabın X'e ilk nasıl bağlandığı                          |
| `usernameChanges`        | Kullanıcı adının ne sıklıkla & en son ne zaman değiştiği  |
| `birthdate`              | Hesabın herkese açtığı doğum günü bilgileri               |
| `subscribersCount`       | X gönderiyorsa abone sayısı                               |
| `tipJar`                 | Herkese açık bahşiş bağlantıları                          |
| `protected`              | Hesabın gönderilerini koruyup korumadığı                  |
| `unavailable`            | Hesabın erişilemez olup olmadığı                          |
| `sourceTarget`           | Girdiğin kullanıcı adı, ID veya URL                       |

Veri kümesi şeması `identityVerification`, `isAutomated`, `automatedBy`,
`withheldInCountries` & `verificationReason` gibi diğer tüm alanları açıklar.

İsteğe bağlı satırlar Xquik REST yanıt biçimini korur.

| `resultType`              | Açan seçenek               | Her satır             |
| ------------------------- | -------------------------- | --------------------- |
| `profileTweet`            | `includeTweets`            | Gönderi               |
| `profileReply`            | `includeReplies`           | Gönderi veya yanıt    |
| `profileMedia`            | `includeMedia`             | Medya gönderisi       |
| `profileHighlight`        | `includeHighlights`        | Öne çıkarılan gönderi |
| `profileFollower`         | `includeFollowers`         | Takipçi               |
| `profileFollowing`        | `includeFollowing`         | Takip edilen hesap    |
| `profileVerifiedFollower` | `includeVerifiedFollowers` | Onaylı takipçi        |
| `profileBioTranslation`   | `translateBioTo`           | Çevrilmiş biyografi   |
| `profileLive`             | `checkLiveNow`             | Kontrol edilen profil |

Satırlar, bir hesabı takip edip etmediğin ya da engelleyip engellemediğin gibi
yalnızca sana görünen durumları asla içermez.

## Profil verisini kazımak için X Profile Scraper'ı nasıl kullanırım?

Apify'da yeni misin? Önce
[ücretsiz bir hesap oluştur](https://console.apify.com/sign-up?fpr=xquik).
Ücretsiz plan kredi kartı istemez & her ay harcaman için $5 verir. Satır başına
$0.00015 fiyatla $5, platform kullanımı hariç 33.000 satıra kadar yeter. Sonra
buraya dön & Try for free düğmesine bas.

Apify Console'da aşağıdaki adımları izle.

1. Bir [görev örneğini](#görev-örnekleri) veya Input sekmesini aç.
2. Kullanıcı adlarını `twitterHandles`, URL'leri `startUrls` veya ID'leri
   `userIds` alanına ekle.
3. `includeTweets` gibi ihtiyacın olan veri türlerini aç.
4. `maxItems` değerini & istediğin filtreleri ayarla, sonra Start düğmesine
   tıkla.
5. Veri kümesini JSON, CSV, Excel veya HTML olarak dışa aktar.

Aşağıdaki her tarif eksiksiz bir girdidir.

### Birçok profili kazı

```json
{ "twitterHandles": ["nasa", "OpenAI", "apify"], "maxItems": 100 }
```

Her kullanıcı adı 1 profil satırı döndürür. Kullanıcı adları `@` ile de `@`
olmadan da çalışır.

### Profil URL'lerini veya ID'lerini yapıştır

`startUrls` her URL'yi düz metin olarak ya da `{ "url": "..." }` nesnesi olarak
alır. `userIds` sayısal X kullanıcı ID'lerini alır.

```json
{
  "startUrls": ["https://x.com/nasa", { "url": "https://x.com/OpenAI" }],
  "userIds": ["11348282"],
  "maxItems": 100
}
```

Çalıştırma, tekrarlanan bir kullanıcı adını 1 kez okur.

### Gönderi, yanıt & medya ekle

```json
{
  "twitterHandles": ["nasa"],
  "includeTweets": true,
  "includeMedia": true,
  "sinceDate": "2026-01-01",
  "maxItems": 500
}
```

`includeTweets` profilin Gönderiler sekmesini izler. `includeReplies` Yanıtlar
sekmesini izler. `includeMedia` Medya sekmesini izler. `includeHighlights`, Öne
Çıkanlar sekmesindeki gönderileri X'in sırasıyla ekler. Öne çıkanı olmayan bir
profil satır eklemez.

### Yalnızca popüler gönderileri tut

```json
{
  "twitterHandles": ["nasa"],
  "includeTweets": true,
  "minLikes": 1000,
  "mediaType": "videos",
  "maxItems": 200
}
```

Gönderi filtreleri isteğe bağlı gönderi satırlarına uygulanır. Filtrelenen
satırlar veri kümesine hiç ulaşmaz, bu yüzden onlar için asla ödemezsin.

### Takipçileri & takip edilenleri dışa aktar

```json
{
  "twitterHandles": ["apify"],
  "includeFollowers": true,
  "minFollowers": 1000,
  "verifiedOnly": true,
  "maxItems": 1000
}
```

`includeFollowers`, `includeFollowing` & `includeVerifiedFollowers` her hesap
için 1 profil satırı ekler. Profil filtreleri bu satırlara & ana profillere
uygulanır.

### Biyografileri çevir

```json
{ "twitterHandles": ["nasa", "SpaceX"], "translateBioTo": "es" }
```

Her çeviri, `text`, `language` & `sourceLanguage` alanlarını içeren 1
`profileBioTranslation` satırıdır. Biyografisi olmayan bir profil ne satır ne de
ücret ekler.

### Kimin şu an canlı yayında olduğunu kontrol et

```json
{ "twitterHandles": ["nasa", "SpaceX"], "checkLiveNow": true }
```

Her kontrol, `live`, `userId`, `userName` & `broadcast` alanlarını içeren 1
`profileLive` satırıdır. `broadcast`, profilin canlı ya da bitmiş son yayınını
tutar veya null olur. Bulunamayan bir profil satır eklemez.

## Görev örnekleri

50 herkese açık görevden birini seç. Her görevin sınırlı bir girdisi & uygun bir
veri kümesi görünümü var. Çalıştırmadan önce görevi düzenle.

- [Bir X hesabının profil kartını al](https://apify.com/xquik/x-profile-scraper/examples/get-an-x-profile-card)
- [Rakip markaların profillerini karşılaştır](https://apify.com/xquik/x-profile-scraper/examples/compare-competitor-brand-profiles)
- [Sayısal kullanıcı ID'lerini profillere dönüştür](https://apify.com/xquik/x-profile-scraper/examples/resolve-numeric-user-ids-to-profiles)
- [Bir hesabın son gönderilerini topla](https://apify.com/xquik/x-profile-scraper/examples/collect-recent-posts-from-an-account)
- [Bir hesabın en çok beğenilen gönderilerini bul](https://apify.com/xquik/x-profile-scraper/examples/find-an-accounts-most-liked-posts)
- [Bir hesabın paylaştığı videoları topla](https://apify.com/xquik/x-profile-scraper/examples/collect-videos-from-an-account)
- [Bir hesabın bir takvim yılını arşivle](https://apify.com/xquik/x-profile-scraper/examples/archive-one-year-of-posts)
- [Bir hesabın takipçilerini dışa aktar](https://apify.com/xquik/x-profile-scraper/examples/export-the-followers-of-an-account)
- [Bir şirketin onaylı takipçilerini dışa aktar](https://apify.com/xquik/x-profile-scraper/examples/export-verified-followers)
- [10.000 veya daha fazla takipçisi olan takipçileri bul](https://apify.com/xquik/x-profile-scraper/examples/find-influential-followers)
- [2 tasarım aracının kitle örtüşmesini ölç](https://apify.com/xquik/x-profile-scraper/examples/measure-audience-overlap)
- [Bir hesabı baştan sona denetle](https://apify.com/xquik/x-profile-scraper/examples/run-a-full-account-audit)

## X profillerini kazımak ne kadar tutar?

Xquik'in X Profile Scraper'ı her Apify planında teslim edilen satır başına
$0.00015 tutar. Apify, platform kullanımını ayrıca faturalandırır. Xquik, teslim
edilen her veri satırı için tek bir ücret alır. Tanılamalar `diagnostics`
çıktısında ücretsizdir.

Daha fazla hacim için daha çok ön ödemeli kullanım içeren bir
[Apify planı seç](https://apify.com/pricing?fpr=xquik).

- Xquik aboneliğine ihtiyacın yok.
- Ayrı bir başlatma, profil veya sorgu ücreti ödemezsin.
- Filtreler & tekilleştirme faturalamadan önce çalışır. Filtrelenen veya
  tekrarlanan satırlar için asla ödemezsin.
- Biyografisi olmayan bir profil çeviri ücreti eklemez.
- Bulunamayan bir profil canlı yayın kontrolü ücreti eklemez.
- Apify'ın maksimum toplam ücret ayarları teslim edilen satırları sınırlar.

Sorunla karşılaşan bir çalıştırma veya büyük bir çalıştırma ayrıca bir
`run-report` kaydı yazar. Sorunsuz biten küçük bir çalıştırma bu kaydı atlar &
Apify kullanımından tasarruf eder. Kaydı her çalıştırmada yazmak için
`alwaysSaveRunRecords` seçeneğini aç.

Bir çalıştırmanın harcamasını sınırlamak için
[Çalıştırma seçenekleri](#çalıştırma-seçenekleri) bölümüne bak.

## Boş, kısmi & durdurulan çalıştırmalar

Xquik'in X Profile Scraper'ı boş, kısmi & durdurulan çalıştırmaları ücretsiz
açıklar. Çalıştırma durumu, çalıştırmanın neden durduğunu söyler.
Ücretlendirilen sonuçları & okunan hedefleri de sayar.

### Boş sonuçlar

Boş bir çalıştırmanın durumu, hedeflerini & filtrelerini kontrol etmeni söyler.
Filtrelenen satırlar sonuç sınırını asla tüketmez. Her hedefi okuyup hiç satır
alamayan bir çalıştırma kayıt yazmaz. Durumu, nedenini & neyi değiştirmen
gerektiğini söyler.

X, 2024'ten beri bir hesabın beğendiği gönderileri yalnızca o hesaba gösteriyor.
`includeLikes` diğer hesaplar için `profileLike` satırı döndürmez.

### Kısmi çalıştırmalar

Yarıda kesilen veri çekme ücretsiz bir `partial` tanılaması yazar. Teslim edilen
satırlar veri kümesinde kalır. Yeniden denemeden önce `availableResults`,
`failedTargets`, `retryable` & `nextAction` alanlarını oku. Actor'ın başarıyla
bitmesi teslimatı doğrular, tüm verinin çekildiğini değil.

### Durma nedenleri

Çalıştırma durumu, erken durmanın her nedenini söyler. `stopCauses` her nedeni
kendi `message`, `retryable` & `nextAction` alanlarıyla listeler. Nedenler
`target_not_found`, `target_suspended`, `target_failed`,
`pagination_safety_limit` & `deadline_reached` olabilir. `target_suspended`,
X'in askıya aldığı hesapları belirtir. Bulunamayan veya askıya alınmış bir
hedef, listeye yalnızca çalıştırmayı başka bir neden durdurduysa girer.
Nedenlerden biri yeniden denenebiliyorsa çalıştırma da `retryable` olur.

## Girdi

Input sekmesi her seçeneği listeler. `twitterHandles`, `startUrls` veya
`userIds` alanlarından en az 1'ini doldur. Diğer tüm alanlar isteğe bağlıdır.

| Alan                           | Ne yapar                                                            |
| ------------------------------ | ------------------------------------------------------------------- |
| `twitterHandles`               | `@` ile veya `@` olmadan kullanıcı adları                           |
| `startUrls`                    | `x.com` veya `twitter.com` üzerindeki profil URL'leri               |
| `userIds`                      | Sayısal X kullanıcı ID'leri                                         |
| `maxItems`                     | Tüm çalıştırmada teslim edilecek satır sınırı                       |
| `maxItemsPerTarget`            | Her profil veya veri türü için satır sınırı                         |
| `includeTweets`                | Gönderiler sekmesini ekler                                          |
| `includeReplies`               | Yanıtlar sekmesini ekler                                            |
| `includeMedia`                 | Medya sekmesini ekler                                               |
| `includeHighlights`            | Öne Çıkanlar sekmesini ekler                                        |
| `includeLikes`                 | Beğenilen gönderileri ekler, X bunları diğer hesaplardan gizler     |
| `includeFollowers`             | Takipçileri ekler                                                   |
| `includeFollowing`             | Takip edilen hesapları ekler                                        |
| `includeVerifiedFollowers`     | Onaylı takipçileri ekler                                            |
| `translateBioTo`               | Her biyografiyi `es` gibi kodu verilen dile çevirir                 |
| `checkLiveNow`                 | Her profilin şu an canlı yayında olup olmadığını kontrol eder       |
| `sinceDate`, `untilDate`       | Bir tarih aralığındaki gönderileri tutar                            |
| `language`                     | 1 dil kodundaki gönderileri tutar                                   |
| `mediaType`                    | Görsel, video, GIF, bağlantı içeren veya medyasız gönderileri tutar |
| `minViews`, `minLikes`         | Görüntülenme veya beğeni sayısı eşiği aşan gönderileri tutar        |
| `minReplies`, `minRetweets`    | Yanıt veya yeniden gönderi sayısı eşiği aşan gönderileri tutar      |
| `nativeRetweets`               | Yalnızca doğrudan yeniden gönderileri tutar                         |
| `verifiedOnly`                 | Onaylı yazarları veya profilleri tutar                              |
| `blueVerifiedOnly`             | X'in Blue onaylı işaretlediği yazarları veya profilleri tutar       |
| `verifiedType`                 | 1 onay türüne sahip profilleri tutar                                |
| `minFollowers`, `maxFollowers` | Bir kitle aralığındaki profilleri tutar                             |
| `minAccountAgeDays`            | En az bu kadar günlük profilleri tutar                              |
| `minFollowing`, `maxFollowing` | Bir takip edilen aralığındaki profilleri tutar                      |
| `minStatuses`, `maxStatuses`   | Bir gönderi sayısı aralığındaki profilleri tutar                    |
| `hasWebsite`, `hasLocation`    | Web sitesi veya konum belirten profilleri tutar                     |
| `hasEmail`                     | E-posta yayımlayan profilleri tutar                                 |
| `businessEmailOnly`            | Ücretsiz posta hizmetleri dışında e-postası olan profilleri tutar   |
| `emailDomains`                 | Bu alan adlarında e-postası olan profilleri tutar                   |
| `bioContains`                  | Biyografisinde bu kelimelerden 1'i geçen profilleri tutar           |
| `locationContains`             | Konumunda bu metin geçen profilleri tutar                           |
| `usernameContains`             | Kullanıcı adında bu metin geçen profilleri tutar                    |
| `dedupeAcrossTargets`          | Profiller arasında tekrarlanan satırları faturalamadan önce çıkarır |

### Başka bir profil Actor'ından geçiş yap

Zaten kullandığın girdiyi yapıştır. Xquik'in X Profile Scraper'ı, diğer profil
Actor'larının aşağıdaki alan adlarını okur. Her satır önce onların alanlarını,
sonra eşlendikleri alanı yazar.

- `profiles`, `userNames`, `usernames`, `handles`, `screenNames` alanları
  `twitterHandles` alanına eşlenir.
- `urls`, `profileUrls` alanları `startUrls` alanına eşlenir.
- `maxProfiles`, `maxResults` alanları `maxItems` alanına eşlenir.
- `shouldScrapeFollowers`, `shouldScrapeFollowings` alanları `includeFollowers`,
  `includeFollowing` alanlarına eşlenir.
- `requireEmail` alanı `hasEmail` alanına eşlenir.
- `requireWebsite` alanı `hasWebsite` alanına eşlenir. Web sitesi alanında
  herhangi bir bağlantı olan profili tutar & çalıştırma durumu bunu söyler.
- `filterByBlueVerified` alanı `blueVerifiedOnly` alanına eşlenir. `false`
  çalıştırmayı hiçbir okuma veya ücret olmadan durdurur.
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

`category` değerini `user_info` yapmak hiçbir şeyi değiştirmez. `tweets` veya
`followers` gibi başka bir Actor'ın işi olan bir kategori çalıştırmayı durdurur.
Çalıştırma hiçbir şey okumaz & ücretlendirmez. Mesaj, kullanman gereken Actor'ı
söyler. Bir takma adı & kanonik alanını birlikte ayarlarsan kanonik değer
kazanır. Çalıştırma günlüğü kaybeden takma adı söyler.

### Doğru girdileri seç

- Yalnızca profil kartı için kullanıcı adlarını ver & her `include` seçeneğini
  kapalı bırak.
- Bir hesap arşivi için `includeTweets`, `includeMedia` & `includeHighlights`
  seçeneklerini aç & `sinceDate` ayarla.
- En iyi içerik için `includeTweets` ile birlikte `minLikes` veya `minViews`
  ekle.
- Potansiyel müşteri listeleri için `includeFollowers` seçeneğini `minFollowers`
  & `minAccountAgeDays` ile aç.
- Kitle örtüşmesi için 2 kullanıcı adı ver, `includeFollowers` seçeneğini aç &
  `dedupeAcrossTargets: false` ayarla. Böylece ortak bir takipçi her kullanıcı
  adının altında görünür.

## Çıktı

Her satır bir JSON nesnesidir. Veri kümesi şeması her alana bir başlık &
açıklama verir, böylece yapay zeka ajanları satırları tahmin yürütmeden okur.

Örnekler örnek değerler kullanır. Sonuçlar canlı veriyi yansıtır. Bir profil
satırı şöyle görünür.

```json
{
  "resultType": "profile",
  "sourceTarget": "sample_user",
  "id": "1234567890",
  "username": "sample_user",
  "name": "Sample User",
  "description": "Building tools for researchers.",
  "url": "https://example.com",
  "location": "Lisbon",
  "followers": 1200,
  "following": 310,
  "statusesCount": 4200,
  "verified": false,
  "createdAt": "Tue Mar 21 20:50:14 +0000 2017",
  "accountBasedInUnavailable": true
}
```

X, `accountBasedIn` değerini hesaba erişilen IP'lerin toplu verisinden çıkarır.
Etiket uyruk, ikamet, kimlik, kayıt yeri, gönderi yeri veya kesin konum
belirtmez. `observedAt` verinin alındığı zamanı kaydeder. X etiket göstermiyorsa
`accountBasedIn` null olur. X etiketi gizliyorsa satırda bunun yerine
`accountBasedInUnavailable: true` bulunur.

Veri kümesini JSON, CSV, Excel veya HTML olarak dışa aktar.

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

Hesaplanan bir sütunu eklemek için adını `fields` veya `renameFields` içine yaz.

| Sütun               | Formül                                                                             |
| ------------------- | ---------------------------------------------------------------------------------- |
| `totalEngagement`   | `likeCount` + `replyCount` + `retweetCount` + `quoteCount`. Eksik bir sayı 0 ekler |
| `engagementRate`    | `totalEngagement` × 100 ÷ yazarın `followers` değeri, 4 ondalık basamakla          |
| `engagementPerView` | `totalEngagement` × 100 ÷ `viewCount`, 4 ondalık basamakla                         |

Bu sayıları olmayan bir satırda `totalEngagement` değeri `null` olur. Böleni
eksik veya 0 olan bir oran `null` olur.

## Çalıştırma seçenekleri

- Çalıştırma maliyetini sınırlamak için Apify'ın maksimum toplam ücret ayarını
  kullan. Bu bütçenin izin verdiği en fazla satırı almak için `maxItems`
  değerini yüksek bırak.
- Apify API'de `maxTotalChargeUsd` değerini, Console'da ise Max cost per run
  ayarını belirle.
- Tüm profillerini 1 çalıştırmaya koy. Her çalıştırma Apify'a aynı başlatma
  maliyetini öder.
- `maxConcurrency` aynı anda kaç profilin işleneceğini belirler. Varsayılan
  değer en hızlı güvenli ayardır.
- 1 saniyelik kontroller & imzalı webhook'lar için Xquik hesap monitörlerini
  kullan. Aktif monitörler her saniye kontrol eder.

Yayımlanan her düzeltmeyi almak için her çalıştırmada `latest` seç. Kayıtlı
görevler & zamanlamalar kendi derleme seçimlerini korur, bu yüzden onları da
`latest` üzerinde tut.

## İlgili Xquik Actor'ları

Her Xquik Actor'ı aynı veri çekme motorunu, önce filtreleyen faturalandırmayı &
tanılamaları paylaşır. İhtiyacın olan veriye uyanı seç.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper) aramalardan, profil
  zaman akışlarından, Listelerden & gönderi ID'lerinden 50'den fazla filtre &
  düz dışa aktarımla gönderi kazır. Analiz olmadan gönderi verisi gerektiğinde
  kullan. Satır başına $0.00015'ten başlar.
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

### X API anahtarı veya giriş gerekir mi?

Hayır. Xquik'in X Profile Scraper'ı X API anahtarı, giriş veya kimlik bilgisi
istemez.

### 1 çalıştırmada kaç profil kazıyabilirim?

Listelediğin kadar. Satır sayısını `maxItems` & Apify harcama sınırın belirler.

### X profillerini CSV veya Excel olarak dışa aktarabilir miyim?

Evet. Veri kümesini Storage sekmesinden JSON, CSV, Excel veya HTML olarak dışa
aktar.

### Bir Twitter kullanıcısının takipçilerini kazıyabilir miyim?

Evet. `includeFollowers`, `includeFollowing` veya `includeVerifiedFollowers`
seçeneğini aç. Her hesap 1 satırdır.

### Profilin web sitesini & konumunu alıyor mu?

Evet. `url` web sitesini, `location` ise hesap sahibinin yazdığı metni tutar.
Yalnızca bunları belirten profilleri tutmak için `hasWebsite` & `hasLocation`
ayarla.

### Korumalı hesapları kazıyabilir miyim?

Herkese açık profil satırını `protected: true` ile alırsın. X, korumalı bir
hesabın gönderilerini & takipçilerini yalnızca onaylı takipçilerine gösterir.

### Bir hesabın şu an canlı yayında olup olmadığını nasıl anlarım?

`checkLiveNow: true` ayarla. Her profil, `live` alanını & son yayınını içeren
bir `profileLive` satırı alır.

### Biyografileri çevirebilir mi?

Evet. `translateBioTo` değerini `es` veya `pt-br` gibi bir dil kodu yap.
Biyografisi olmayan bir profil satır eklemez.

### includeLikes neden hiçbir şey döndürmüyor?

X, 2024'ten beri bir hesabın beğendiği gönderileri yalnızca o hesaba gösteriyor.
Bu Actor dahil diğer hesaplar bunları okuyamaz.

### X profillerini kazımak yasal mı?

Xquik'in X Profile Scraper'ı herkese açık X alanlarını çeker. Sonuçlarda kişisel
veri olabilir. Amacının yasal olduğundan emin ol & geçerli gizlilik kurallarına
uy. Emin değilsen yetkin bir hukukçuya danış.

### Çalıştırmam neden sonuç döndürmedi?

Önce çalıştırma durumunu oku. Boş bir çalıştırmanın durumu, hedeflerini &
filtrelerini kontrol etmeni söyler. Ücretsiz `diagnostics` çıktısı, dikkat
gerektiren bir şey olduğunda görünür. Bu çıktıdaki `stopCauses` her neden için
izleyeceğin bir `nextAction` verir. Çalıştırma okuyamadığı her girdiyi listeler
& nasıl düzelteceğini söyler.

### API'yi, zamanlamaları & entegrasyonları kullanabilir miyim?

Evet. 50 herkese açık görevden birini veya Xquik REST API'yi seç.
[API sekmesinde](https://apify.com/xquik/x-profile-scraper/api) Python,
JavaScript & cURL örnekleri var. Apify
[zamanlamaları](https://docs.apify.com/platform/schedules), Xquik'in X Profile
Scraper'ını bir cron takvimiyle çalıştırır. Ajanlar
[Apify MCP](https://docs.apify.com/platform/integrations/mcp) kullanır. Eski bir
derlemeye ihtiyacın yoksa `latest` kullan.

### Bana özel bir çözüm alabilir miyim?

Evet. İhtiyacını
[Issues sekmesinde](https://apify.com/xquik/x-profile-scraper/issues) anlat.
Xquik ayrıca bir panel, bir REST API, bir MCP sunucusu & webhook'lar sunar.
Xquik'in web sitesini [Apify profilinde](https://apify.com/xquik) bul.

### Nereden yardım alırım?

Çalıştırma ID'siyle
[Issues sekmesinde](https://apify.com/xquik/x-profile-scraper/issues) bir issue
aç. Anahtar-değer deposundaki ücretsiz tanılamalar dikkat gerektiren
çalıştırmaları açıklar. Hiç satır almayan bir çalıştırma, nedenini durum
metninde söyler.
