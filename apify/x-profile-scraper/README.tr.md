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
scraper hizmetidir. Xquik'in X Profile Scraper'ı her kullanıcı adı için
profilleri, gönderileri, yanıtları, medyayı ve takipçileri toplar. Diğer Apify
Actor'larının çoğu, filtrelemeden veya tekilleştirmeden önce ücret alır. Xquik
yalnızca teslim edilen, benzersiz ve filtrene uyan sonuçlar için ücret alır.

Kullanıcı adlarından, ID'lerden veya URL'lerden X profillerini, gönderilerini,
yanıtlarını, medyasını ve takipçilerini kazı. **Teslim edilen satır başına
$0.00015** ödersin. Apify, platform kullanımını ayrıca faturalandırır. X API
anahtarı ya da giriş gerekmez.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## X Profile Scraper ne yapar?

Xquik'in X Profile Scraper'ı kullanıcı adlarından, sayısal kullanıcı ID'lerinden
veya profil URL'lerinden herkese açık X (Twitter) profillerini döndürür. Her
profil kendi gönderilerini, yanıtlarını, medyasını, Öne Çıkanlarını,
takipçilerini, takip edilenlerini ve onaylı takipçilerini ekleyebilir. Ayrıca
biyografileri çevirir ve kimin şu an canlı yayında olduğunu kontrol eder.

### Temel özellikler

- Kullanıcı adı, ID veya URL ile 1 çalıştırmada birçok profil oku.
- Gönderileri, yanıtları, medyayı, Öne Çıkanları, takipçileri, takip edilenleri
  veya onaylı takipçileri ayrı satırlar olarak ekle.
- `translateBioTo` ile her biyografiyi kodunu verdiğin dile çevir.
- `checkLiveNow` ile her profilin şu an canlı yayında olup olmadığına bak.
- Gönderileri tarih, dil, medya ve etkileşime göre filtrele.
- Profilleri kitle büyüklüğü, hesap yaşı ve onay durumuna göre filtrele.
- Filtreler ve tekilleştirme faturalamadan önce çalışır.
- Apify çalıştırmayı yeniden başlatsa da teslim edilen satırlar ve ilerleme
  korunur.

### Kullanım alanları

- Potansiyel müşteri listelerini biyografi, web sitesi, konum ve kitle
  büyüklüğüyle zenginleştir.
- Rakip hesapları takipçi, gönderi ve onay durumuna göre karşılaştır.
- İçerik üreticilerini kitle, hesap yaşı ve etkileşime göre değerlendir.
- Bir hesabın gönderilerini, medyasını ve Öne Çıkanlarını arşivle.
- Takipçiler ve takip edilenler üzerinden bir hesabın ağını çıkar.
- İçerik üreticilerinin ve markaların canlı yayınlarını takip et.
- Başka pazarlardaki biyografileri kendi dilinde oku.

### X Profile Scraper hangi verileri çeker?

Profil satırları `resultType: "profile"` kullanır. Başlıca alanlar şunlar:

| Alan               | Açıklama                                              |
| ------------------ | ----------------------------------------------------- |
| `id`               | Sayısal kullanıcı ID'si                               |
| `username`         | `@` olmadan kullanıcı adı                             |
| `name`             | Görünen ad                                            |
| `description`      | Biyografi metni                                       |
| `url`              | Profil satırlarındaki web sitesi                      |
| `location`         | Hesap sahibinin yazdığı konum                         |
| `followers`        | Takipçi sayısı                                        |
| `following`        | Takip edilen sayısı                                   |
| `statusesCount`    | Gönderi sayısı                                        |
| `mediaCount`       | Medya gönderisi sayısı                                |
| `favouritesCount`  | Hesabın yaptığı beğeni sayısı                         |
| `listedCount`      | Hesabı içeren herkese açık Liste sayısı               |
| `createdAt`        | Hesabın oluşturulma zamanı                            |
| `verified`         | X'in hesabı onaylı gösterip göstermediği              |
| `isBlueVerified`   | Hesabın X Blue onayı olup olmadığı                    |
| `verifiedType`     | `Government` gibi onay kategorisi                     |
| `profilePicture`   | Profil fotoğrafı URL'si                               |
| `coverPicture`     | Kapak fotoğrafı URL'si                                |
| `pinnedTweetIds`   | Sabitlenmiş gönderi ID'leri                           |
| `professional`     | Profesyonel kategori ve tür                           |
| `accountBasedIn`   | X'in tahmine dayalı ülke veya bölge etiketi           |
| `connectedVia`     | Hesabın X'e ilk nasıl bağlandığı                      |
| `usernameChanges`  | Kullanıcı adının kaç kez ve en son ne zaman değiştiği |
| `birthdate`        | Hesabın herkese açtığı doğum tarihi bilgileri         |
| `subscribersCount` | Abone sayısı, X gönderiyorsa                          |
| `tipJar`           | Herkese açık bahşiş bağlantıları                      |
| `protected`        | Hesabın gönderilerini koruyup korumadığı              |
| `unavailable`      | Hesabın erişilemez olup olmadığı                      |
| `sourceTarget`     | Girdiğin kullanıcı adı, ID veya URL                   |

Veri kümesi şeması, `identityVerification`, `isAutomated`, `automatedBy`,
`withheldInCountries` ve `verificationReason` gibi diğer tüm alanları açıklar.

İsteğe bağlı satırlar Xquik REST yanıt biçimini korur:

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
yalnızca sana özel durumları içermez.

## Profil verisini kazımak için X Profile Scraper'ı nasıl kullanırım?

Apify Console'da şu adımları izle:

1. Bir [görev örneğini](#görev-örnekleri) veya Input sekmesini aç.
2. Kullanıcı adlarını `twitterHandles`, URL'leri `startUrls` veya ID'leri
   `userIds` alanına ekle.
3. `includeTweets` gibi ihtiyacın olan veri türlerini aç.
4. `maxItems` değerini ve istediğin filtreleri ayarla, sonra Start'a tıkla.
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
alır. `userIds` sayısal X kullanıcı ID'lerini alır:

```json
{
  "startUrls": ["https://x.com/nasa", { "url": "https://x.com/OpenAI" }],
  "userIds": ["11348282"],
  "maxItems": 100
}
```

2 kez yazdığın bir kullanıcı adı 1 kez okunur.

### Gönderi, yanıt ve medya ekle

```json
{
  "twitterHandles": ["nasa"],
  "includeTweets": true,
  "includeMedia": true,
  "sinceDate": "2026-01-01",
  "maxItems": 500
}
```

`includeTweets` profilin Gönderiler sekmesini okur. `includeReplies` Yanıtlar
sekmesini okur. `includeMedia` Medya sekmesini okur. `includeHighlights`, Öne
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
satırlar veri kümesine hiç ulaşmaz, bu yüzden onlar için hiç ödeme yapmazsın.

### Takipçileri ve takip edilenleri dışa aktar

```json
{
  "twitterHandles": ["apify"],
  "includeFollowers": true,
  "minFollowers": 1000,
  "verifiedOnly": true,
  "maxItems": 1000
}
```

`includeFollowers`, `includeFollowing` ve `includeVerifiedFollowers` her hesap
için 1 profil satırı ekler. Profil filtreleri hem bu satırlara hem de ana
profillere uygulanır.

### Biyografileri çevir

```json
{ "twitterHandles": ["nasa", "SpaceX"], "translateBioTo": "es" }
```

Her çeviri 1 `profileBioTranslation` satırıdır ve `text`, `language` ile
`sourceLanguage` alanlarını içerir. Biyografisi olmayan bir profil ne satır ne
de ücret ekler.

### Kimin şu an canlı yayında olduğunu kontrol et

```json
{ "twitterHandles": ["nasa", "SpaceX"], "checkLiveNow": true }
```

Her kontrol 1 `profileLive` satırıdır ve `live`, `userId`, `userName` ile
`broadcast` alanlarını içerir. `broadcast`, profilin canlı ya da bitmiş son
yayınını tutar. Yayın yoksa null olur. Bulunamayan bir profil satır eklemez.

## Görev örnekleri

50 herkese açık görev arasından seç. Her birinin sınırlı bir girdisi ve buna
uyan bir veri kümesi görünümü var. Çalıştırmadan önce görevi düzenle.

- [1 X hesabının profil kartını al](https://apify.com/xquik/x-profile-scraper/examples/get-an-x-profile-card)
- [Rakip markaların profillerini karşılaştır](https://apify.com/xquik/x-profile-scraper/examples/compare-competitor-brand-profiles)
- [Sayısal kullanıcı ID'lerini profillere dönüştür](https://apify.com/xquik/x-profile-scraper/examples/resolve-numeric-user-ids-to-profiles)
- [1 hesabın son gönderilerini topla](https://apify.com/xquik/x-profile-scraper/examples/collect-recent-posts-from-an-account)
- [Bir hesabın en çok beğenilen gönderilerini bul](https://apify.com/xquik/x-profile-scraper/examples/find-an-accounts-most-liked-posts)
- [Bir hesabın paylaştığı videoları topla](https://apify.com/xquik/x-profile-scraper/examples/collect-videos-from-an-account)
- [Bir hesabın 1 takvim yılını arşivle](https://apify.com/xquik/x-profile-scraper/examples/archive-one-year-of-posts)
- [Bir hesabın takipçilerini dışa aktar](https://apify.com/xquik/x-profile-scraper/examples/export-the-followers-of-an-account)
- [Bir şirketin onaylı takipçilerini dışa aktar](https://apify.com/xquik/x-profile-scraper/examples/export-verified-followers)
- [10.000 veya daha fazla takipçisi olan takipçileri bul](https://apify.com/xquik/x-profile-scraper/examples/find-influential-followers)
- [2 tasarım aracının kitle örtüşmesini ölç](https://apify.com/xquik/x-profile-scraper/examples/measure-audience-overlap)
- [1 hesabı baştan sona denetle](https://apify.com/xquik/x-profile-scraper/examples/run-a-full-account-audit)

## X profillerini kazımak ne kadar tutar?

Xquik'in X Profile Scraper'ı her Apify planında teslim edilen satır başına
$0.00015 tutar. Apify, platform kullanımını ayrıca faturalandırır. Xquik teslim
edilen her veri satırı için 1 kez ücret alır. Tanılamalar `diagnostics`
çıktısında ücretsizdir.

- Xquik aboneliğine ihtiyacın yok.
- Ayrı bir başlatma, profil veya sorgu ücreti ödemezsin.
- Filtreler ve tekilleştirme faturalamadan önce çalışır. Filtrelenen veya tekrar
  eden satırlar için hiç ödeme yapmazsın.
- Biyografisi olmayan bir profil çeviri ücreti eklemez.
- Bulunamayan bir profil canlı yayın kontrolü ücreti eklemez.
- Apify'ın maksimum toplam ücret ayarları teslim edilen satırları sınırlar.

Sorunla karşılaşan ya da büyük bir çalıştırma ayrıca bir `run-report` kaydı
yazar. Sorunsuz biten küçük bir çalıştırma bu kaydı yazmaz, böylece Apify
kullanımı azalır. Raporu her çalıştırmada almak için `alwaysSaveRunRecords`
seçeneğini aç.

Bir çalıştırmanın harcamasını sınırlamak için
[Çalıştırma seçenekleri](#çalıştırma-seçenekleri) bölümüne bak.

## Boş, kısmi ve durdurulan çalıştırmalar

Xquik'in X Profile Scraper'ı boş, kısmi ve durdurulan çalıştırmaları ücretsiz
açıklar. Çalıştırma durumu, çalıştırmanın neden durduğunu söyler. Ücretlendirilen
sonuçları ve okunan hedefleri de sayar.

### Boş sonuçlar

Boş bir çalıştırmanın durumu, hedeflerini ve filtrelerini kontrol etmeni söyler.
Filtrelenen satırlar sonuç sınırını hiç tüketmez. Her hedefi okuyup hiç satır
alamayan bir çalıştırma kayıt yazmaz. Durumu nedenini ve neyi değiştirmen
gerektiğini söyler.

X, 2024'ten beri bir hesabın beğendiği gönderileri yalnızca o hesaba
gösteriyor. `includeLikes` diğer hesaplar için `profileLike` satırı döndürmez.

### Kısmi çalıştırmalar

Veri çekme yarıda kesilirse Actor ücretsiz bir `partial` tanılaması yazar.
Teslim edilen satırlar veri kümesinde kalır. Yeniden denemeden önce
`availableResults`, `failedTargets`, `retryable` ve `nextAction` alanlarını oku.
Actor'ın başarıyla bitmesi teslimatı doğrular. Tüm verinin çekildiğini
doğrulamaz.

### Durma nedenleri

Çalıştırma durumu, erken durmanın her nedenini söyler. `stopCauses` her nedeni
kendi `message`, `retryable` ve `nextAction` alanlarıyla listeler. Nedenler
şunlardır: `target_not_found`, `target_suspended`, `target_failed`,
`pagination_safety_limit` ve `deadline_reached`. `target_suspended`, X'in askıya
aldığı hesapları belirtir. Bulunamayan veya askıya alınmış bir hedef, listeye
yalnızca çalıştırmayı başka bir neden durdurduysa girer. Nedenlerden biri
yeniden denenebiliyorsa çalıştırma da `retryable` olur.

## Girdi

Input sekmesi her seçeneği listeler. `twitterHandles`, `startUrls` veya
`userIds` alanlarından en az 1'ini doldur. Diğer tüm alanlar isteğe bağlıdır.

| Alan                           | Ne yapar                                                            |
| ------------------------------ | ------------------------------------------------------------------- |
| `twitterHandles`               | `@` ile veya `@` olmadan kullanıcı adları                           |
| `startUrls`                    | x.com veya twitter.com üzerindeki profil URL'leri                   |
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
| `checkLiveNow`                 | Her profilin şu an canlı yayında olup olmadığına bakar              |
| `sinceDate`, `untilDate`       | Bir tarih aralığındaki gönderileri tutar                            |
| `language`                     | 1 dil kodundaki gönderileri tutar                                   |
| `mediaType`                    | Görsel, video, GIF, bağlantı içeren veya medyasız gönderileri tutar |
| `minViews`, `minLikes`         | Görüntülenme veya beğeni sayısı eşiği aşan gönderileri tutar        |
| `minReplies`, `minRetweets`    | Yanıt veya yeniden gönderi sayısı eşiği aşan gönderileri tutar      |
| `nativeRetweets`               | Yalnızca doğrudan yeniden gönderileri tutar                         |
| `verifiedOnly`                 | Onaylı yazarları veya profilleri tutar                              |
| `minFollowers`, `maxFollowers` | Belirli bir kitle aralığındaki profilleri tutar                     |
| `minAccountAgeDays`            | En az bu kadar gün önce açılmış profilleri tutar                    |
| `hasWebsite`, `hasLocation` | Web sitesi veya konum belirten profilleri tutar |
| `bioContains` | Biyografisinde bu kelimelerden biri geçen profilleri tutar |
| `locationContains` | Konumunda bu metin geçen profilleri tutar |
| `dedupeAcrossTargets`          | Profiller arasında tekrar eden satırları faturalamadan önce çıkarır |

### Başka bir profil Actor'ından geçiş yap

Zaten kullandığın girdiyi yapıştır. Xquik'in X Profile Scraper'ı, diğer profil
Actor'larının şu alan adlarını okur. Her satır önce onların alanlarını, sonra
eşlendikleri alanı yazar:

- `profiles`, `userNames`, `usernames`, `handles`, `screenNames`:
  `twitterHandles`
- `urls`, `profileUrls`: `startUrls`
- `maxProfiles`, `maxResults`: `maxItems`
- `shouldScrapeFollowers`, `shouldScrapeFollowings`: `includeFollowers`,
  `includeFollowing`

`user_info` olarak ayarlanmış `category` hiçbir şeyi değiştirmez. `tweets` veya
`followers` gibi başka bir Actor'ın işi olan bir kategori çalıştırmayı durdurur.
Hiçbir şey okunmaz ve ücretlendirilmez. Mesaj, kullanman gereken Actor'ı yazar.
Bir takma adı ve kanonik alanını birlikte ayarlarsan kanonik değer geçerli olur.
Çalıştırma günlüğü geçersiz kalan takma adı yazar.

### Doğru girdileri seç

- Yalnızca profil kartı için kullanıcı adlarını gir ve tüm `include`
  seçeneklerini kapalı bırak.
- Hesap arşivi için `includeTweets`, `includeMedia` ve `includeHighlights`
  seçeneklerini aç, `sinceDate` değerini ayarla.
- En iyi içerik için `includeTweets` ile `minLikes` veya `minViews` kullan.
- Potansiyel müşteri listeleri için `includeFollowers` seçeneğini `minFollowers`
  ve `minAccountAgeDays` ile birlikte aç.
- Kitle örtüşmesi için 2 kullanıcı adı gir, `includeFollowers` seçeneğini aç ve
  `dedupeAcrossTargets: false` ayarla. Böylece ortak bir takipçi her kullanıcı
  adının altında görünür.

## Çıktı

Her satır bir JSON nesnesidir. Veri kümesi şeması her alana bir başlık ve
açıklama verir, böylece yapay zeka ajanları satırları tahmin etmeden okuyabilir.

Aşağıdaki değerler yalnızca örnektir. Gerçek sonuçlar canlı veriden gelir. Bir
profil satırı şöyle görünür:

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
belirtmez. `observedAt` verinin alındığı zamanı kaydeder. X etiket
göstermiyorsa `accountBasedIn` null olur. X etiketi gizliyorsa satırda bunun
yerine `accountBasedInUnavailable: true` bulunur.

Veri kümesini JSON, CSV, Excel veya HTML olarak dışa aktar.

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
- 1 saniyelik kontroller ve imzalı webhook'lar için Xquik hesap monitörlerini
  kullan. Aktif monitörler her saniye kontrol eder.

Yayımlanan her düzeltmeyi almak için her çalıştırmada `latest` seç. Kayıtlı
görevler ve zamanlamalar kendi derleme seçimlerini korur, bu yüzden onları da
`latest` üzerinde tut.

## İlgili Xquik Actor'ları

Her Xquik Actor'ı aynı veri çekme motorunu, önce filtreleyen faturalandırmayı ve
tanılamaları paylaşır. İhtiyacın olan veriye uyanı seç.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): Aramalardan,
  profil zaman akışlarından, Listelerden ve gönderi ID'lerinden 50'den fazla
  filtre ve düz dışa aktarımla gönderi kazır. Analiz değil, yalnızca gönderi
  verisi gerektiğinde kullan. Satır başına $0.00015'ten başlar.
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

## Kazımadan fazlasına mı ihtiyacın var?

Xquik ayrıca 53 panel aracı, bir REST API, imzalı webhook'lar ve bir MCP
sunucusu sunar.

- [API belgeleri](https://docs.xquik.com/introduction): REST API kılavuzları
- [Profile Lookup API](https://docs.xquik.com/api-reference/x/twitter-profile-lookup):
  herkese açık 1 profili al
- [User Tweets API](https://docs.xquik.com/api-reference/x/user-tweets): bir
  kullanıcının gönderilerini al
- [Followers API](https://docs.xquik.com/api-reference/x/followers): bir hesabın
  takipçilerini al
- [Bio Translation API](https://docs.xquik.com/api-reference/x/user-bio-translation):
  bir profil biyografisini çevir
- [Live Status API](https://docs.xquik.com/api-reference/x/user-live-status):
  bir kullanıcının canlı yayında olup olmadığını kontrol et
- [MCP sunucusu](https://docs.xquik.com/mcp/overview): desteklenen araçları
  keşfet
- [Webhook'lar](https://docs.xquik.com/webhooks/overview): imzalı olay teslimi

## SSS

Sık sorulan soruların cevapları, sonra da nereden yardım alacağın.

### X API anahtarı veya giriş gerekir mi?

Hayır. Xquik'in X Profile Scraper'ı X API anahtarı, giriş ya da kimlik bilgisi
istemez.

### 1 çalıştırmada kaç profil kazıyabilirim?

Listelediğin kadar. Satır sayısını `maxItems` ve Apify harcama sınırın belirler.

### X profillerini CSV veya Excel olarak dışa aktarabilir miyim?

Evet. Veri kümesini Storage sekmesinden JSON, CSV, Excel veya HTML olarak dışa
aktar.

### Bir Twitter kullanıcısının takipçilerini kazıyabilir miyim?

Evet. `includeFollowers`, `includeFollowing` veya `includeVerifiedFollowers`
seçeneğini aç. Her hesap 1 satırdır.

### Profilin web sitesini ve konumunu alıyor mu?

Evet. `url` web sitesini, `location` ise hesap sahibinin yazdığı metni tutar.
Sadece bunları belirten profilleri tutmak için `hasWebsite` ve `hasLocation` değerlerini aç.

### Korumalı hesapları kazıyabilir miyim?

Herkese açık profil satırını `protected: true` ile alırsın. X, korumalı bir
hesabın gönderilerini ve takipçilerini yalnızca onayladığı takipçilere gösterir.

### Bir hesabın şu an canlı yayında olup olmadığını nasıl anlarım?

`checkLiveNow: true` ayarla. Her profil, `live` alanını ve son yayınını içeren
bir `profileLive` satırı alır.

### Biyografileri çevirebilir mi?

Evet. `translateBioTo` alanına `es` veya `pt-br` gibi bir dil kodu gir.
Biyografisi olmayan bir profil satır eklemez.

### includeLikes neden hiçbir şey döndürmüyor?

X, 2024'ten beri bir hesabın beğendiği gönderileri yalnızca o hesaba
gösteriyor. Bu Actor dahil diğer hesaplar bunları okuyamaz.

### X profillerini kazımak yasal mı?

Xquik'in X Profile Scraper'ı herkese açık X alanlarını çeker. Sonuçlarda
kişisel veri olabilir. Amacının yasal olduğundan emin ol ve geçerli gizlilik
kurallarına uy. Emin değilsen yetkin bir hukukçuya danış.

### Çalıştırmam neden sonuç döndürmedi?

Önce çalıştırma durumunu oku. Boş bir çalıştırmanın durumu, hedeflerini ve
filtrelerini kontrol etmeni söyler. Ücretsiz `diagnostics` çıktısı, ilgilenmen
gereken bir şey olduğunda görünür. Buradaki `stopCauses` her neden için
izleyeceğin bir `nextAction` verir. Çalıştırma okuyamadığı her girdiyi listeler
ve nasıl düzelteceğini söyler.

### API'yi, zamanlamaları ve entegrasyonları kullanabilir miyim?

Evet. 50 herkese açık görevden birini veya Xquik REST API'yi seç.
[API sekmesinde](https://apify.com/xquik/x-profile-scraper/api) Python,
JavaScript ve cURL örnekleri var. Apify
[zamanlamaları](https://docs.apify.com/platform/schedules), Xquik'in X Profile
Scraper'ını bir cron takvimiyle çalıştırır. Ajanlar
[Apify MCP](https://docs.apify.com/platform/integrations/mcp) kullanır. Eski bir
derlemeye ihtiyacın yoksa `latest` derlemesini kullan.

### Bana özel bir çözüm alabilir miyim?

Evet. [xquik.com](https://xquik.com) adresini ziyaret et ya da
[API belgelerini](https://docs.xquik.com/introduction) oku. Bu kaynaklar paneli,
API'yi, MCP sunucusunu ve webhook'ları anlatır.

### Nereden yardım alırım?

Actor sayfasında bir issue aç ya da çalıştırma ID'siyle <support@xquik.com>
adresine yaz. Anahtar-değer deposundaki ücretsiz tanılamalar ilgilenmen gereken
çalıştırmaları açıklar. Hiç satır alamayan bir çalıştırma nedenini durumunda
söyler.
