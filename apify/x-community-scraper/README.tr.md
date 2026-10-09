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
scraper hizmetidir. Xquik'in X Community Scraper'ı Topluluk bilgilerini,
gönderilerini, medyasını, aramalarını, üyelerini ve moderatörlerini toplar,
anahtar kelime veya konuyla da Topluluk bulur. Diğer Apify Actor'larının çoğu,
filtrelemeden veya tekilleştirmeden önce ücret alır. Xquik yalnızca teslim
edilen, benzersiz ve filtrene uyan sonuçlar için ücret alır.

Twitter Topluluklarının bilgilerini, gönderilerini, medyasını, anahtar kelime
eşleşmelerini, üyelerini ve moderatörlerini Topluluk URL'lerinden veya
ID'lerinden topla. Toplulukları anahtar kelime veya konuyla bul ya da X'in
önerdiklerini listele. **Teslim edilen satır başına $0.00015** ödersin. Apify,
platform kullanımını ayrıca faturalandırır. X API anahtarı ya da giriş gerekmez.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## X Community Scraper ne yapar?

Xquik'in X Community Scraper'ı herkese açık X (Twitter) Topluluklarını
URL'lerinden veya ID'lerinden okur. Her Topluluğun bilgilerini, gönderilerini,
medyasını, anahtar kelime eşleşmelerini, üyelerini ve moderatörlerini döndürür.
Toplulukları anahtar kelime veya konuyla da bulur ve X'in önerdiklerini listeler.

### Temel özellikler

- 1 çalıştırmada birçok Topluluğu ve veri türünü oku.
- Topluluk bilgilerini kural, katılma sorusu, kurucu, yönetici ve konuyla al.
- En yeni gönderileri ya da X'in en üste koyduğu popüler gönderileri topla.
- Medya sekmesini topla ya da Topluluk gönderilerinde anahtar kelimeyle ara.
- Üyeleri ve moderatörleri dışa aktar ya da üyeleri adıyla bul.
- Toplulukları anahtar kelime veya konuyla, tam kayıtlarıyla birlikte bul.
- Gönderileri tarih, dil, medya ve etkileşime göre filtrele.
- Üyeleri kitle büyüklüğü, hesap yaşı ve onay durumuna göre filtrele.
- Filtreleme ve tekilleştirme faturalamadan önce çalışır.
- Apify çalıştırmayı yeniden başlatsa da teslim edilen satırlar ve ilerleme
  korunur.

### Kullanım alanları

- Niş bir Topluluğun üyelerinden potansiyel müşteri listeleri oluştur.
- Bir kullanıcı Topluluğundaki ürün geri bildirimlerini ve özellik isteklerini
  takip et.
- Kurucuların lansman, işe alım ve yatırım haberlerini bul.
- Toplulukları büyüklük, konu ve etkinliğe göre karşılaştır.
- Bir Topluluğa gönderi paylaşmadan önce kurallarını oku.
- Bir Topluluğun moderatörlerini ve en çok takip edilen üyelerini bul.
- Yaratıcı araştırma için görselli veya videolu gönderileri topla.

### X Community Scraper hangi verileri çıkarabilir?

Topluluk satırlarında `resultType: "community"` kullanılır. Başlıca alanlar
şunlardır:

| Alan              | Açıklama                                        |
| ----------------- | ----------------------------------------------- |
| `id`              | Topluluk ID'si                                  |
| `name`            | Topluluk adı                                    |
| `description`     | Topluluk açıklaması                             |
| `url`             | Topluluk URL'si                                 |
| `member_count`    | Üye sayısı                                      |
| `moderator_count` | Moderatör sayısı                                |
| `rules`           | Topluluk kuralları                              |
| `question`        | Topluluğun katılan kullanıcıya sorduğu soru     |
| `primary_topic`   | X'in Topluluğu sınıflandırdığı konu             |
| `searchTags`      | X'in Topluluğu bulmak için kullandığı etiketler |
| `creator`         | Kurucunun herkese açık profili                  |
| `admin`           | Yöneticinin herkese açık profili                |
| `membersFacepile` | X'in Topluluk sayfasında önizlediği üyeler      |
| `is_nsfw`         | Topluluğun hassas olarak işaretli olup olmadığı |
| `banner`          | Kapak görseli URL'si, boyutu ve ana renkleri    |
| `sourceTarget`    | Girdiğin URL, ID, anahtar kelime veya konu      |

Her veri türü kendi türünde satırlar ekler:

| `resultType`         | Veri türü veya girdi               | Her satır bir                   |
| -------------------- | ---------------------------------- | ------------------------------- |
| `community`          | `info`, anahtar kelimeler, konular | Topluluk                        |
| `communityTweet`     | `tweets`, `search`                 | Gönderi                         |
| `communityMedia`     | `media`                            | Fotoğraflı veya videolu gönderi |
| `communityMember`    | `members`, `memberNames`           | Üye                             |
| `communityModerator` | `moderators`                       | Moderatör                       |
| `communityTopic`     | `listTopics`                       | Konu                            |

Gönderi satırlarında `text`, `createdAt`, `likeCount`, `replyCount`,
`retweetCount`, `viewCount`, `media` ve `author` profili bulunur. Üye ve
moderatör satırlarında `username`, `followers`, `verified` ve `communityRole`
gibi profil alanları bulunur.

## Topluluk verilerini kazımak için X Community Scraper'ı nasıl kullanırım?

Apify Console'da şu adımları izle:

1. Bir [görev örneğini](#görev-örnekleri) ya da Input sekmesini aç.
2. Topluluk URL'lerini `startUrls` alanına ya da ID'leri `communityIds` alanına
   yapıştır.
3. `resources` seç ve `sinceDate` veya `minLikes` gibi filtreler ekle.
4. `maxItems` değerini ayarla, sonra Start'a tıkla.
5. Veri kümesini JSON, CSV, Excel veya HTML olarak dışa aktar.

Aşağıdaki her örnek eksiksiz bir girdidir.

### Topluluk bilgilerini ve son gönderileri al

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["info", "tweets"],
  "maxItems": 200
}
```

`startUrls` her URL'yi düz metin olarak ya da `{ "url": "..." }` nesnesi olarak
alır:

```json
{
  "startUrls": [
    "https://x.com/i/communities/1493446837214187523",
    { "url": "https://x.com/i/communities/1493446837214187523" }
  ]
}
```

### Popüler gönderileri topla

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["tweets"],
  "postsOrder": "Top",
  "minLikes": 50,
  "maxItems": 100
}
```

X'in en üst sıraya koyduğu gönderiler için `postsOrder` değerini `Top` yap.
Medya sekmesi için `resources` listesine `"media"` ekle.

### Bir Topluluğun gönderilerinde ara

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["search"],
  "query": "pricing",
  "queryType": "Latest",
  "maxItems": 100
}
```

### Üyeleri ve moderatörleri dışa aktar

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["members", "moderators"],
  "minFollowers": 1000,
  "maxItems": 1000
}
```

Üye filtreleri üye ve moderatör satırlarına uygulanır. Filtrelenen satırlar veri
kümesine hiç ulaşmaz, bu yüzden onlar için asla ödeme yapmazsın.

### Üyeleri adıyla bul

```json
{
  "communityIds": ["1493446837214187523"],
  "memberNames": ["marckohlbrugge"],
  "maxItems": 100
}
```

x.com'daki üye aramasında olduğu gibi X, her ad için en fazla 10 eşleşen hesabı
kontrol eder. Bulunan her üye, `communityRole` değeriyle birlikte 1
`communityMember` satırıdır. `memberNames` içeren bir çalıştırma, `resources`
içinde belirtilmedikçe başka veri türü okumaz.

### Toplulukları anahtar kelime veya konuyla bul

```json
{
  "searchTerms": ["artificial intelligence"],
  "topics": ["Technology"],
  "maxItems": 100
}
```

Bulunan her Topluluk kurallarını, kurucusunu, yönetici ve üye profillerini
taşır. Kısa kayıtla daha hızlı bir çalıştırma için `includeDetails` değerini
`false` yap. X'in önerdiği Topluluklar için `includeSuggested` seçeneğini aç.
Bunlar her çalıştırmada değişebilir. Her konu ve alt konuları için `listTopics`
seçeneğini aç.

## Görev örnekleri

50 herkese açık görevden birini seç. Her görevin sınırlı bir girdisi ve buna
uygun bir veri kümesi görünümü var. Bir görevi çalıştırmadan önce düzenle.

- [Bir X Topluluğuna genel bakış al](https://apify.com/xquik/x-community-scraper/examples/get-an-x-community-overview)
- [Bir X Topluluğunun ayrıntılarını son gönderileriyle al](https://apify.com/xquik/x-community-scraper/examples/get-community-details-with-recent-posts)
- [Bir X Topluluğundaki popüler teknoloji gönderilerini bul](https://apify.com/xquik/x-community-scraper/examples/find-top-technology-posts-in-a-community)
- [X Topluluğu üyelerini dışa aktar](https://apify.com/xquik/x-community-scraper/examples/export-x-community-members)
- [Bir X Topluluğunun onaylanmış üyelerini dışa aktar](https://apify.com/xquik/x-community-scraper/examples/export-verified-community-members)
- [Bir X Topluluğunun moderatörlerini listele](https://apify.com/xquik/x-community-scraper/examples/list-x-community-moderators)
- [Geliştirici Topluluklarını büyüklük ve konuya göre karşılaştır](https://apify.com/xquik/x-community-scraper/examples/compare-developer-communities-by-size)
- [Gönderi paylaşmadan önce bir X Topluluğunun kurallarını oku](https://apify.com/xquik/x-community-scraper/examples/read-community-rules-before-you-post)
- [Bir girişim Topluluğundaki yatırım gönderilerini bul](https://apify.com/xquik/x-community-scraper/examples/find-funding-posts-in-a-startup-community)
- [Bir yazılım mühendisliği Topluluğundaki işe alım gönderilerini bul](https://apify.com/xquik/x-community-scraper/examples/find-hiring-posts-in-a-software-community)
- [Büyük kitlesi olan girişim Topluluğu üyelerini bul](https://apify.com/xquik/x-community-scraper/examples/find-startup-community-members-with-big-audiences)
- [Küçük bir X Topluluğunu baştan sona incele](https://apify.com/xquik/x-community-scraper/examples/audit-a-small-community-end-to-end)

## X Topluluklarını kazımak ne kadar tutar?

Xquik'in X Community Scraper'ı her Apify planında teslim edilen satır başına
$0.00015 tutar. Apify, platform kullanımını ayrıca faturalandırır. Xquik, teslim
edilen her veri satırı için 1 kez ücret alır. Tanılamalar `diagnostics`
çıktısında ücretsizdir.

- Xquik aboneliği gerekmez.
- Ayrı bir başlatma, Topluluk, veri türü veya sorgu ücreti ödemezsin.
- Bulunan bir Topluluk, tam kaydı olsun olmasın 1 satır tutar.
- Filtreleme ve tekilleştirme faturalamadan önce çalışır. Filtrelenen veya
  tekrar eden satırlar için asla ödeme yapmazsın.
- Apify'daki maksimum toplam ücret ayarları teslim edilen satırları sınırlar.

Sorun yaşayan ya da büyük bir çalıştırma ayrıca bir `run-report` kaydı yazar.
Sorunsuz biten küçük bir çalıştırma bu kaydı yazmaz, böylece Apify kullanımı
azalır. Kaydı her çalıştırmada yazmak için `alwaysSaveRunRecords` seçeneğini aç.

Bir çalıştırmanın harcamasını sınırlamak için
[Çalıştırma seçenekleri](#çalıştırma-seçenekleri) bölümüne bak.

## Boş, kısmi ve durdurulan çalıştırmalar

Xquik'in X Community Scraper'ı boş, kısmi ve durdurulan çalıştırmaları ücretsiz
açıklar. Çalıştırma durumu, çalıştırmanın neden durduğunu söyler. Ücretlendirilen
sonuçları ve okunan hedefleri de sayar.

### Boş sonuçlar

Boş bir çalıştırmanın durumu, hedeflerini ve filtrelerini kontrol etmeni söyler.
Filtrelenen satırlar sonuç sınırını asla tüketmez. Her hedefi okuyup hiç satır
alamayan bir çalıştırma kayıt yazmaz. Durumu, nedenini ve neyi değiştirmen
gerektiğini söyler. Actor yalnızca X'in gösterdiği herkese açık Toplulukları
döndürür. Erişilebilen alanlar Topluluğa göre değişir.

### Kısmi çalıştırmalar

Veri çekme yarıda kesilirse Actor ücretsiz bir `partial` tanılaması yazar.
Teslim edilen satırlar veri kümesinde kalır. Yeniden denemeden önce
`availableResults`, `failedTargets`, `retryable` ve `nextAction` alanlarını oku.
Actor'ın başarıyla bitmesi teslimatı doğrular. Tüm verinin çekildiğini
doğrulamaz.

### Durma nedenleri

Çalıştırma durumu, erken durmanın her nedenini söyler. `stopCauses` her nedeni
kendi `message`, `retryable` ve `nextAction` alanlarıyla listeler. Nedenler
şunlardır: `target_not_found`, `target_failed`, `pagination_safety_limit` ve
`deadline_reached`. Bulunamayan bir hedef, listeye yalnızca çalıştırmayı başka
bir neden durdurduysa girer. Nedenlerden biri yeniden denenebiliyorsa çalıştırma
da `retryable` olur. Actor kendi başına süre sınırı eklemez.

## Girdi

Input sekmesi tüm seçenekleri listeler. Topluluk URL'leri, ID'leri, anahtar
kelimeler veya konular gir ya da `includeSuggested` veya `listTopics` seçeneğini
aç. Diğer tüm alanlar isteğe bağlıdır.

| Alan                           | Ne yapar                                                              |
| ------------------------------ | --------------------------------------------------------------------- |
| `startUrls`                    | x.com'daki Topluluk URL'leri                                          |
| `communityIds`                 | Sayısal Topluluk ID'leri                                              |
| `resources`                    | `info`, `tweets`, `media`, `search`, `members`, `moderators`          |
| `query`                        | `search` veri türü için anahtar kelime                                |
| `queryType`                    | Anahtar kelime araması için `Latest` veya `Top` sıralaması            |
| `postsOrder`                   | Gönderiler için `Latest` veya `Top` sıralaması                        |
| `memberNames`                  | Üyeler arasında aranacak adlar veya kullanıcı adları                  |
| `searchTerms`                  | Topluluk bulmak için anahtar kelimeler                                |
| `topics`                       | `Technology` gibi konu adları veya ID'leri                            |
| `includeSuggested`             | X'in katılmanı önerdiği Toplulukları ekler                            |
| `listTopics`                   | Her Topluluk konusunu ve alt konularını ekler                         |
| `includeDetails`               | Anahtar kelime veya konuyla bulunan Topluluklara tam kayıt ekler      |
| `maxItems`                     | Tüm çalıştırmada teslim edilecek satır sınırı                         |
| `maxItemsPerTarget`            | Her Topluluk veri türü için satır sınırı                              |
| `sinceDate`, `untilDate`       | Bir tarih aralığındaki gönderileri tutar                              |
| `language`                     | 1 dil kodundaki gönderileri tutar                                     |
| `mediaType`                    | Görsel, video, GIF, bağlantı içeren veya medyasız gönderileri tutar   |
| `minViews`, `minLikes`         | Bir görüntülenme veya beğeni sayısının üstündeki gönderileri tutar    |
| `minReplies`, `minRetweets`    | Bir yanıt veya yeniden gönderi sayısının üstündeki gönderileri tutar  |
| `nativeRetweets`               | Yalnızca doğrudan yeniden gönderileri tutar                           |
| `verifiedOnly`                 | Onaylanmış yazarları, üyeleri veya moderatörleri tutar                |
| `minFollowers`, `maxFollowers` | Bir takipçi aralığındaki üyeleri tutar                                |
| `minAccountAgeDays`            | Hesabı en az bu kadar günlük olan üyeleri tutar                       |
| `dedupeAcrossTargets`          | Topluluklar arasında tekrar eden satırları faturalamadan önce çıkarır |

### Doğru girdileri seç

- Hızlı bir bakış için varsayılan `info` ve `tweets` veri türlerini koru.
- Potansiyel müşteri listeleri için `minFollowers` ve `verifiedOnly` ile
  `members` seç.
- Ürün araştırması için `bug` veya `pricing` gibi bir `query` ile `search` seç.
- Yaratıcı araştırma için `media` seç ve `mediaType` ayarla.
- Topluluk keşfetmek için ID vermeden `searchTerms` veya `topics` gönder.

## Çıktı

Her satır bir JSON nesnesidir. Her satırda girdideki Topluluk, anahtar kelime
veya konu için `sourceTarget` bulunur. Xquik'in X Community Scraper'ı kaynak
alanlarını korur ve hiçbir değer uydurmaz. Veri kümesi şeması her alana bir
başlık ve açıklama verir.

Aşağıdaki değerler yalnızca örnektir. Gerçek sonuçlar canlı veriden gelir. Bir
Topluluk bilgi satırı şöyle görünür:

```json
{
  "resultType": "community",
  "sourceTarget": "1493446837214187523",
  "id": "1493446837214187523",
  "name": "Sample Community",
  "description": "A place to share what you build.",
  "member_count": 1200,
  "moderator_count": 4,
  "primary_topic": "Technology"
}
```

Veri kümesini JSON, CSV, Excel veya HTML olarak dışa aktar.

## Çalıştırma seçenekleri

- Çalıştırma maliyetini sınırlamak için Apify'da maksimum toplam ücreti ayarla.
  Bütçenin izin verdiği en fazla satırı almak için `maxItems` değerini yüksek
  bırak.
- Apify API'de `maxTotalChargeUsd` değerini, Console'da ise Max cost per run
  ayarını kullan.
- Tüm Topluluklarını 1 çalıştırmaya koy. Her çalıştırma Apify'a aynı başlatma
  maliyetini öder.
- `maxItemsPerTarget` her Topluluk veri türünün satırlarını sınırlar.
- `maxConcurrency` aynı anda kaç Topluluk veri türünün çalışacağını belirler.
  Varsayılan değer en hızlı güvenli ayardır.

Yayımlanan her düzeltmeyi almak için her çalıştırmada `latest` derlemesini seç.
Kayıtlı görevler ve zamanlamalar kendi derleme seçimini korur. Bu seçimi
`latest` olarak bırak.

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
- [Topluluk Bilgisi API'si](https://docs.xquik.com/api-reference/x/community-info):
  1 Topluluğun kaydını al
- [Topluluk Gönderileri API'si](https://docs.xquik.com/api-reference/x/community-tweets):
  bir Topluluğun gönderilerini al
- [Topluluk Üyeleri API'si](https://docs.xquik.com/api-reference/x/community-members):
  bir Topluluğun üyelerini dışa aktar
- [Topluluk Bulma API'si](https://docs.xquik.com/api-reference/x/community-find):
  anahtar kelimeyle Topluluk bul
- [MCP sunucusu](https://docs.xquik.com/mcp/overview): desteklenen araçları
  keşfet
- [Webhook'lar](https://docs.xquik.com/webhooks/overview): imzalı olay teslimatı

## SSS

Sık sorulan soruların cevapları, sonra da nereden yardım alacağın.

### X API anahtarı veya giriş gerekir mi?

Hayır. Xquik'in X Community Scraper'ı X API anahtarı, giriş ya da kimlik
bilgisi istemez.

### Bir Topluluğun ID'sini nasıl bulurum?

Topluluğu x.com'da aç. ID, URL'de `/i/communities/` kısmından sonraki sayıdır.
URL'nin tamamını `startUrls` alanına da yapıştırabilirsin.

### X Topluluğu üyelerini CSV veya Excel olarak dışa aktarabilir miyim?

Evet. `members` veri türünü seç, sonra veri kümesini CSV, Excel, JSON veya HTML
olarak dışa aktar.

### ID'sini bilmeden bir Topluluk bulabilir miyim?

Evet. Anahtar kelimeleri `searchTerms` alanında ya da konuları `topics` alanında
gönder. Bulunan her Topluluk, tam kaydıyla 1 satırdır.

### Bir Topluluğun popüler gönderilerini alabilir miyim?

Evet. `postsOrder` değerini `Top` yap. Yalnızca en popüler gönderileri tutmak
için `minLikes` veya `minViews` ekle.

### 1 çalıştırmada kaç Topluluk kazıyabilirim?

Listelediğin kadar. Satır sayısını `maxItems` ve Apify harcama sınırın belirler.

### Gizli Toplulukları okur mu?

Hayır. Xquik'in X Community Scraper'ı yalnızca X'in gösterdiği herkese açık
Toplulukları döndürür.

### X Topluluklarını kazımak yasal mı?

Xquik'in X Community Scraper'ı herkese açık X alanlarını çeker. Sonuçlarda
kişisel veri olabilir. Amacının yasal olduğundan emin ol ve geçerli gizlilik
kurallarına uy. Emin değilsen yetkin bir hukukçuya danış.

### Çalıştırmam neden sonuç döndürmedi?

Önce çalıştırma durumunu oku. Boş bir çalıştırmanın durumu, hedeflerini ve
filtrelerini kontrol etmeni söyler. Ücretsiz `diagnostics` çıktısı, ilgilenmen
gereken bir şey olduğunda görünür. Çıktıdaki `stopCauses` her neden için
izleyeceğin bir `nextAction` verir. Çalıştırma okuyamadığı her girdiyi listeler
ve nasıl düzelteceğini söyler.

### API'yi, zamanlamaları ve entegrasyonları kullanabilir miyim?

Evet. 50 herkese açık görevden birini veya Xquik REST API'yi seç.
[API sekmesinde](https://apify.com/xquik/x-community-scraper/api) Python,
JavaScript ve cURL örnekleri var. Apify
[zamanlamaları](https://docs.apify.com/platform/schedules), Xquik'in X Community
Scraper'ını bir cron takvimiyle çalıştırır. Ajanlar
[Apify MCP](https://docs.apify.com/platform/integrations/mcp) kullanır. Eski bir
derlemeye ihtiyacın yoksa `latest` derlemesini kullan.

### Bana özel bir çözüm alabilir miyim?

Evet. [xquik.com](https://xquik.com) adresini ziyaret et ya da
[API belgelerini](https://docs.xquik.com/introduction) oku. Bu kaynaklar paneli,
API'yi, MCP sunucusunu ve webhook'ları anlatır.

### Nereden yardım alırım?

Actor sayfasında bir issue aç ya da çalıştırma ID'siyle <support@xquik.com>
adresine yaz. Anahtar-değer deposundaki ücretsiz tanılamalar, ilgilenmen gereken
çalıştırmaları açıklar. Hiç satır almayan bir çalıştırma nedenini durumunda
söyler.
