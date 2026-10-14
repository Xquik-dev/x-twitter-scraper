[English](README.md) · [Español](README.es.md) · **Türkçe** ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer, Xquik MCP'yi kodlama ajanlarına bağlıyor](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Framer'ın Xquik scraper'larını Claude Code, Codex, Cursor & daha fazlasıyla nasıl kullandığını](https://youtu.be/4UOSpoOoC3Y?t=367)
6:07'den itibaren izle.

Xquik, en eksiksiz X verisini sunan, dünyanın en hızlı ve en ucuz X (Twitter)
scraper hizmetidir. Xquik'in X Community Scraper'ı Topluluk bilgilerini,
gönderilerini, medyasını, aramalarını, üyelerini & moderatörlerini toplar &
anahtar kelime veya konuyla Topluluk bulur. Diğer Apify Actor'larının çoğu,
filtrelemeden veya tekilleştirmeden önce ücret alır. Xquik yalnızca teslim
edilen, benzersiz ve filtrene uyan sonuçlar için ücret alır.

Twitter Topluluklarının bilgilerini, gönderilerini, medyasını, anahtar kelime
eşleşmelerini, üyelerini & moderatörlerini Topluluk URL'lerinden veya
ID'lerinden topla. Toplulukları anahtar kelime veya konuyla bul ya da X'in
önerdiklerini listele. **Teslim edilen satır başına $0.00015** ödersin & Apify,
platform kullanımını ayrıca faturalandırır. X API anahtarı veya giriş gerekmez.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## X Community Scraper ne yapar?

Xquik'in X Community Scraper'ı herkese açık X (Twitter) Topluluklarını
URL'lerinden veya ID'lerinden okur. Her Topluluğun bilgilerini, gönderilerini,
medyasını, anahtar kelime eşleşmelerini, üyelerini & moderatörlerini döndürür.
Toplulukları anahtar kelime veya konuyla da bulur & X'in önerdiklerini listeler.

### Temel özellikler

- 1 çalıştırmada birçok Topluluğu & veri türünü oku.
- Topluluk bilgilerini kurallar, katılma sorusu, kurucu, yönetici & konuyla al.
- Gönderileri en yeniden başlayarak ya da X'in en üst sıraya koyduğu popüler
  gönderileri topla.
- Medya sekmesini topla ya da bir Topluluğun gönderilerinde anahtar kelimeyle
  ara.
- Üyeleri & moderatörleri dışa aktar ya da üyeleri adıyla bul.
- Toplulukları anahtar kelime veya konuyla, tam kayıtlarıyla birlikte bul.
- Gönderileri tarih, dil, medya & etkileşime göre filtrele.
- Üyeleri kitle büyüklüğü, hesap yaşı & onay durumuna göre filtrele.
- Filtreler & tekilleştirme faturalamadan önce çalışır.
- Apify bir çalıştırmayı yeniden başlatırsa çalıştırma teslim edilen satırları &
  ilerlemeyi korur.

### Kullanım alanları

- Niş bir Topluluğun üyelerinden potansiyel müşteri listeleri oluştur.
- Bir kullanıcı Topluluğundaki ürün geri bildirimlerini & özellik isteklerini
  takip et.
- Kurucular arasında lansmanları, işe alım gönderilerini & yatırım haberlerini
  bul.
- Toplulukları büyüklük, konu & etkinliğe göre karşılaştır.
- Bir Topluluğa gönderi paylaşmadan önce kurallarını oku.
- Bir Topluluğun moderatörlerini & en çok takip edilen üyelerini bul.
- Yaratıcı araştırma için görselli veya videolu gönderileri topla.

### X Community Scraper hangi verileri çıkarabilir?

Topluluk satırları `resultType: "community"` kullanır. Başlıca alanlar
aşağıdakilerdir.

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
| `banner`          | Kapak görseli URL'si, boyutu & ana renkleri     |
| `sourceTarget`    | Girdiğin URL, ID, anahtar kelime veya konu      |

Her veri türü kendi türünde satırlar ekler.

| `resultType`         | Veri türü veya girdi               | Her satır bir                   |
| -------------------- | ---------------------------------- | ------------------------------- |
| `community`          | `info`, anahtar kelimeler, konular | Topluluk                        |
| `communityTweet`     | `tweets`, `search`                 | Gönderi                         |
| `communityMedia`     | `media`                            | Fotoğraflı veya videolu gönderi |
| `communityMember`    | `members`, `memberNames`           | Üye                             |
| `communityModerator` | `moderators`                       | Moderatör                       |
| `communityTopic`     | `listTopics`                       | Konu                            |

Gönderi satırlarında `text`, `createdAt`, `likeCount`, `replyCount`,
`retweetCount`, `viewCount`, `media` & `author` profili bulunur. Üye & moderatör
satırlarında `username`, `followers`, `verified` & `communityRole` gibi profil
alanları bulunur. Bu satırlar ayrıca her profilin yayımladığı e-postaları,
telefonları & bağlantıları içeren `email` & `contactInfo` alanlarını taşır.

## X Community Scraper ile Topluluk verisini nasıl kazırım?

Apify'da yeni misin? Önce
[ücretsiz bir hesap oluştur](https://console.apify.com/sign-up?fpr=xquik).
Ücretsiz plan kredi kartı istemez & her ay harcaman için $5 verir. Satır başına
$0.00015 fiyatla $5, platform kullanımı hariç 33.000 satıra kadar yeter. Sonra
buraya dön & Try for free düğmesine bas.

Apify Console'da aşağıdaki adımları izle.

1. Bir [görev örneğini](#görev-örnekleri) ya da Input sekmesini aç.
2. Topluluk URL'lerini `startUrls` alanına ya da ID'leri `communityIds` alanına
   yapıştır.
3. `resources` seç & `sinceDate` veya `minLikes` gibi filtreler ekle.
4. `maxItems` değerini ayarla, sonra Start'a tıkla.
5. Veri kümesini JSON, CSV, Excel veya HTML olarak dışa aktar.

Aşağıdaki her tarif eksiksiz bir girdidir.

### Topluluk bilgilerini & son gönderileri al

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["info", "tweets"],
  "maxItems": 200
}
```

`startUrls` her URL'yi düz metin olarak ya da `{ "url": "..." }` nesnesi olarak
alır.

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

### Üyeleri & moderatörleri dışa aktar

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["members", "moderators"],
  "minFollowers": 1000,
  "maxItems": 1000
}
```

Üye filtreleri üye & moderatör satırlarına uygulanır. Filtrelenen satırlar asla
veri kümesine ulaşmaz, bu yüzden onlar için asla ödemezsin.

### Üyeleri adıyla bul

```json
{
  "communityIds": ["1493446837214187523"],
  "memberNames": ["marckohlbrugge"],
  "maxItems": 100
}
```

X, kendi üye aramasında olduğu gibi her ad için en fazla 10 eşleşen hesabı
kontrol eder. Bulunan her üye, `communityRole` değeriyle 1 `communityMember`
satırı olur. `memberNames` içeren bir çalıştırma, `resources` içinde
belirtilmedikçe başka bir veri türü okumaz.

### Toplulukları anahtar kelime veya konuyla bul

```json
{
  "searchTerms": ["artificial intelligence"],
  "topics": ["Technology"],
  "maxItems": 100
}
```

Bulunan her Topluluk kurallarını, kurucusunu, yöneticisini & üye profillerini
taşır. Kısa kayıtla daha hızlı bir çalıştırma için `includeDetails` değerini
`false` yap. X'in önerdiği Topluluklar için `includeSuggested` seçeneğini aç. Bu
öneriler her çalıştırmada farklı olabilir. Her konu & alt konuları için ise
`listTopics` seçeneğini aç.

## Görev örnekleri

50 herkese açık görevden birini seç. Her görevin sınırlı bir girdisi & uygun bir
veri kümesi görünümü var. Bir görevi çalıştırmadan önce düzenle.

- [Bir X Topluluğuna genel bakış al](https://apify.com/xquik/x-community-scraper/examples/get-an-x-community-overview)
- [Bir X Topluluğunun ayrıntılarını son gönderileriyle al](https://apify.com/xquik/x-community-scraper/examples/get-community-details-with-recent-posts)
- [Bir X Topluluğundaki popüler teknoloji gönderilerini bul](https://apify.com/xquik/x-community-scraper/examples/find-top-technology-posts-in-a-community)
- [X Topluluğu üyelerini dışa aktar](https://apify.com/xquik/x-community-scraper/examples/export-x-community-members)
- [Bir X Topluluğunun onaylı üyelerini dışa aktar](https://apify.com/xquik/x-community-scraper/examples/export-verified-community-members)
- [Bir X Topluluğunun moderatörlerini listele](https://apify.com/xquik/x-community-scraper/examples/list-x-community-moderators)
- [Geliştirici Topluluklarını büyüklük & konuya göre karşılaştır](https://apify.com/xquik/x-community-scraper/examples/compare-developer-communities-by-size)
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

Daha fazla hacim için daha çok ön ödemeli kullanım içeren bir
[Apify planı seç](https://apify.com/pricing?fpr=xquik).

- Xquik aboneliği gerekmez.
- Ayrı bir başlatma, Topluluk, veri türü veya sorgu ücreti ödemezsin.
- Bulunan bir Topluluk, tam kaydıyla ya da tam kaydı olmadan 1 satır tutar.
- Filtreler & tekilleştirme faturalamadan önce çalışır. Filtrelenen veya
  tekrarlanan satırlar için asla ödemezsin.
- Apify'ın maksimum toplam ücret ayarları teslim edilen satırları sınırlar.

Sorun yaşayan veya büyük bir çalıştırma ayrıca bir `run-report` kaydı yazar.
Sorunsuz biten küçük bir çalıştırma bu kaydı atlar & Apify kullanımından
tasarruf eder. Kaydı her çalıştırmada yazmak için `alwaysSaveRunRecords`
seçeneğini aç.

Bir çalıştırmanın harcamasını sınırlamak için
[Çalıştırma seçenekleri](#çalıştırma-seçenekleri) bölümüne bak.

## Boş, kısmi & durdurulan çalıştırmalar

Xquik'in X Community Scraper'ı boş, kısmi & durdurulan çalıştırmaları ücretsiz
açıklar. Çalıştırma durumu, çalıştırmanın neden durduğunu söyler.
Ücretlendirilen sonuçları & okunan hedefleri de sayar.

### Boş sonuçlar

Boş bir çalıştırmanın durumu, hedeflerini & filtrelerini kontrol etmeni söyler.
Filtrelenen satırlar asla sonuç sınırını tüketmez. Her hedefi okuyup hiç satır
alamayan bir çalıştırma kayıt yazmaz. Durumu nedenini & neyi değiştirmen
gerektiğini söyler. Actor yalnızca X'in gösterdiği herkese açık Toplulukları
döndürür. Erişilebilen alanlar Topluluğa göre değişir.

### Kısmi çalıştırmalar

Veri çekme yarıda kesilirse Actor ücretsiz bir `partial` tanılaması yazar.
Teslim edilen satırlar veri kümesinde kalır. Yeniden denemeden önce
`availableResults`, `failedTargets`, `retryable` & `nextAction` alanlarını oku.
Actor'ın başarıyla bitmesi teslimatı doğrular, tüm verinin çekildiğini değil.

### Durma nedenleri

Çalıştırma durumu, erken durmanın her nedenini söyler. `stopCauses` her nedeni
kendi `message`, `retryable` & `nextAction` alanlarıyla listeler. Nedenler
`target_not_found`, `target_failed`, `pagination_safety_limit` &
`deadline_reached` olabilir. Bulunamayan bir hedef, listeye yalnızca
çalıştırmayı başka bir neden durdurduysa girer. Nedenlerden biri yeniden
denenebiliyorsa çalıştırma da `retryable` olur. Actor kendi başına bir süre
sınırı eklemez.

## Girdi

Input sekmesi tüm seçenekleri listeler. Topluluk URL'leri ya da ID'leri, anahtar
kelimeler veya konular ver ya da `includeSuggested` veya `listTopics` seçeneğini
aç. Diğer tüm alanlar isteğe bağlıdır.

| Alan                           | Ne yapar                                                                       |
| ------------------------------ | ------------------------------------------------------------------------------ |
| `startUrls`                    | `x.com` üzerindeki Topluluk URL'leri                                           |
| `communityIds`                 | Sayısal Topluluk ID'leri                                                       |
| `resources`                    | `info`, `tweets`, `media`, `search`, `members`, `moderators`                   |
| `query`                        | `search` veri türü için anahtar kelime                                         |
| `queryType`                    | Anahtar kelime araması için `Latest` veya `Top` sıralaması                     |
| `postsOrder`                   | Gönderiler için `Latest` veya `Top` sıralaması                                 |
| `memberNames`                  | Üyeler arasında aranacak adlar veya kullanıcı adları                           |
| `searchTerms`                  | Topluluk bulmak için anahtar kelimeler                                         |
| `topics`                       | `Technology` gibi konu adları veya ID'leri                                     |
| `includeSuggested`             | X'in katılmanı önerdiği Toplulukları ekler                                     |
| `listTopics`                   | Her Topluluk konusunu & alt konularını ekler                                   |
| `includeDetails`               | Anahtar kelime veya konuyla bulunan Topluluklara tam kayıt ekler               |
| `maxItems`                     | Tüm çalıştırmada teslim edilen satırların sınırı                               |
| `maxItemsPerTarget`            | Her Topluluk veri türü için satır sınırı                                       |
| `sinceDate`, `untilDate`       | Bir tarih aralığındaki gönderileri tutar                                       |
| `language`                     | 1 dil kodundaki gönderileri tutar                                              |
| `mediaType`                    | Görsel, video, GIF, bağlantı içeren veya hiçbirini içermeyen gönderileri tutar |
| `minViews`, `minLikes`         | Bir görüntülenme veya beğeni sayısının üstündeki gönderileri tutar             |
| `minReplies`, `minRetweets`    | Bir yanıt veya yeniden gönderi sayısının üstündeki gönderileri tutar           |
| `nativeRetweets`               | Yalnızca yerel yeniden gönderileri tutar                                       |
| `verifiedOnly`                 | Onaylı yazarları, üyeleri veya moderatörleri tutar                             |
| `minFollowers`, `maxFollowers` | Bir kitle aralığındaki üyeleri tutar                                           |
| `minAccountAgeDays`            | En az bu kadar günlük üyeleri tutar                                            |
| `blueVerifiedOnly`             | X'in Blue onaylı olarak işaretlediği yazarları veya üyeleri tutar              |
| `verifiedType`                 | 1 onay türüne sahip üyeleri tutar                                              |
| `minFollowing`, `maxFollowing` | Bir takip edilen sayısı aralığındaki üyeleri tutar                             |
| `minStatuses`, `maxStatuses`   | Bir gönderi sayısı aralığındaki üyeleri tutar                                  |
| `hasWebsite`, `hasLocation`    | Web sitesi veya konum belirten üyeleri tutar                                   |
| `hasEmail`                     | E-posta yayımlayan üyeleri tutar                                               |
| `businessEmailOnly`            | Ücretsiz e-posta servisleri dışında e-postası olan üyeleri tutar               |
| `emailDomains`                 | Bu alan adlarında e-postası olan üyeleri tutar                                 |
| `bioContains`                  | Biyografisinde bu kelimelerden biri geçen üyeleri tutar                        |
| `locationContains`             | Konumunda bu metin geçen üyeleri tutar                                         |
| `usernameContains`             | Kullanıcı adında bu metin geçen üyeleri tutar                                  |
| `dedupeAcrossTargets`          | Topluluklar arasında tekrarlanan satırları faturalamadan önce çıkarır          |

### Başka bir topluluk Actor'ından geçiş yap

`ranking` & `sort` adları `postsOrder` gibi çalışır. `Top` veya `Relevance`,
popüler gönderileri okur. Bunlardan birini & `postsOrder` alanını birlikte
ayarlarsan `postsOrder` içindeki değer kazanır. Çalıştırma günlüğü kaybeden
alanı yazar.

### Doğru girdileri seç

- Hızlı bir bakış için varsayılan `info` & `tweets` veri türlerini koru.
- Potansiyel müşteri listeleri için `minFollowers` & `verifiedOnly` ile
  `members` seç.
- Ürün araştırması için `bug` veya `pricing` gibi bir `query` ile `search` seç.
- Yaratıcı araştırma için `media` seç & `mediaType` ayarla.
- Topluluk keşfetmek için ID vermeden `searchTerms` veya `topics` gönder.

## Çıktı

Her satır bir JSON nesnesidir. Her satırda girdideki Topluluk, anahtar kelime
veya konu için `sourceTarget` bulunur. Xquik'in X Community Scraper'ı kaynak
alanlarını korur & hiçbir değer uydurmaz. Veri kümesi şeması her alana bir
başlık & açıklama verir.

Örneklerdeki değerler temsilidir. Sonuçlar canlı veriyi yansıtır. Bir Topluluk
bilgi satırı şöyle görünür.

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

- Bir nesnenin içindeki alan için nokta kullan. Harf büyüklüğü & alt çizgiler
  fark etmez.
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

- Çalıştırma maliyetini sınırlamak için Apify'ın maksimum toplam ücretini
  ayarla. O bütçenin izin verdiği en çok satırı almak için `maxItems` değerini
  yüksek bırak.
- Apify API'de `maxTotalChargeUsd`, Console'da Max cost per run ayarla.
- Tüm Topluluklarını 1 çalıştırmaya koy. Her çalıştırma Apify'a aynı başlatma
  maliyetini öder.
- `maxItemsPerTarget` her Topluluk veri türünün satırlarını sınırlar.
- `maxConcurrency` aynı anda kaç Topluluk veri türünün çalışacağını belirler.
  Varsayılan değer en hızlı güvenli ayardır.

Yayınlanan tüm düzeltmeleri almak için her çalıştırmada `latest` seç. Kayıtlı
görevler & zamanlamalar kendi derleme seçimini korur, bu yüzden onu `latest`
olarak tut.

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

Hayır. Xquik'in X Community Scraper'ı X API anahtarı, giriş veya kimlik bilgisi
istemez.

### Bir Topluluğun ID'sini nasıl bulurum?

Topluluğu X'te aç. ID, URL'de `/i/communities/` kısmından sonraki sayıdır.
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

Listelediğin kadar. `maxItems` & Apify harcama sınırın satırları sınırlar.

### Gizli Toplulukları okur mu?

Hayır. Xquik'in X Community Scraper'ı yalnızca X'in gösterdiği herkese açık
Toplulukları döndürür.

### X Topluluklarını kazımak yasal mı?

Xquik'in X Community Scraper'ı herkese açık X alanlarını çeker. Sonuçlarda
kişisel veri olabilir. Amacının yasal olduğundan emin ol & geçerli gizlilik
kurallarına uy. Emin değilsen yetkin bir hukukçuya danış.

### Çalıştırmam neden sonuç döndürmedi?

Önce çalıştırma durumunu oku. Boş bir çalıştırmanın durumu, hedeflerini &
filtrelerini kontrol etmeni söyler. Ücretsiz `diagnostics` çıktısı, dikkat
gerektiren bir şey olduğunda görünür. Bu çıktıdaki `stopCauses` her neden için
izleyeceğin bir `nextAction` verir. Çalıştırma okuyamadığı her girdiyi listeler
& nasıl düzelteceğini söyler.

### API'yi, zamanlamaları & entegrasyonları kullanabilir miyim?

Evet. 50 herkese açık görevden birini veya Xquik REST API'yi seç.
[API sekmesinde](https://apify.com/xquik/x-community-scraper/api) Python,
JavaScript & cURL örnekleri var. Apify
[zamanlamaları](https://docs.apify.com/platform/schedules), Xquik'in X Community
Scraper'ını bir cron takvimiyle çalıştırır. Ajanlar
[Apify MCP](https://docs.apify.com/platform/integrations/mcp) kullanır. Eski bir
derlemeye ihtiyacın yoksa `latest` kullan.

### Bana özel bir çözüm alabilir miyim?

Evet. İhtiyacını
[Issues sekmesinde](https://apify.com/xquik/x-community-scraper/issues) anlat.
Xquik ayrıca bir panel, bir REST API, bir MCP sunucusu & webhook'lar sunar.
Xquik'in web sitesini [Apify profilinde](https://apify.com/xquik) bul.

### Nereden yardım alırım?

Çalıştırma ID'siyle
[Issues sekmesinde](https://apify.com/xquik/x-community-scraper/issues) bir
issue aç. Anahtar-değer deposundaki ücretsiz tanılamalar dikkat gerektiren
çalıştırmaları açıklar. Hiç satır almayan bir çalıştırma, nedenini durum
metninde söyler.
