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

Xquik, en eksiksiz X verisine sahip, dünyanın en hızlı ve en ucuz X (Twitter)
scraper hizmetidir. X Follower Scraper, takipçileri, takip edilenleri, liste
üyelerini, aboneleri ve topluluk üyelerini toplar. Diğer tüm Apify Actor'ları
filtreleme veya tekilleştirmeden önce ücret alır. Xquik yalnızca teslim
edilen, benzersiz, filtreyle eşleşen sonuçlar için ücret alır.

X (Twitter) takipçilerini, takip edilenleri, doğrulanmış takipçileri, Liste
üyelerini, Liste abonelerini ve Topluluk üyelerini **her Apify planında
teslim edilen profil başına $0.00015'ten başlayarak** kazı. Apify, platform
kullanımını ayrıca faturalandırır. X girişi, başlangıç ücreti veya sorgu
ücreti yok.

>

## Eksik çıkarma

Kesintiye uğrayan çıkarma ücretsiz bir `partial` tanılaması yazar. Mevcut
sonuçlar bozulmadan kalır. Yeniden denemeden önce `availableResults`,
`failedTargets`, `retryable` ve `nextAction` alanlarını oku. Başarılı bir Actor
çıkışı teslimatı doğrular, eksiksiz çıkarmayı değil.

Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.

> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## X Follower Scraper ne yapar?

X Follower Scraper, takipçiler, takip edilenler, Listeler ve Topluluklar için
mevcut herkese açık profil verisini döndürür. Her satır kaynak hedefini ve
ilişkisini içerir.

### Temel davranış

- Filtreler ve tekrar kaldırma faturalamadan önce çalışır.
- Bir çalıştırma handle'ları, sayısal ID'leri, URL'leri ve kısa yolları kabul
  eder.
- Birleştirme modu paylaşılan profilleri, kaynakları, ilişkileri ve
  `overlapCount`'u kaydeder.
- Otomatik imleçler sayfa başına 300'e kadar profil ister.
- Eski imleçler 200 profil sınırını korur ve süresi dolduğunda yeniden
  başlar.
- Sayfa günlükleri, hedefleri tekrarlamadan `fetchDurationMs`,
  `processingDurationMs`, `pushDurationMs`, `statusDurationMs` ve
  `fullPageDurationMs` içerir.
- Kontrol noktaları, yeniden başlatmalardan sonra kabul edilen satırları,
  zamanlamayı ve hata sayılarını korur.

## Görev örnekleri

50 herkese açık görevden seç. Her birinin sınırlı bir girdisi ve eşleşen bir
veri kümesi görünümü vardır. Her görev gerçek bir kitle veya filtreyle açılır.
Çalıştırmadan önce düzenle.

- [Discover AI builders in OpenAI followers](https://apify.com/xquik/x-follower-scraper/examples/discover-ai-builders-in-openai-followers)
- [Build an X audience dataset for AI agents](https://apify.com/xquik/x-follower-scraper/examples/build-agent-ready-x-audience-dataset)
- [Collect X audience data for RAG](https://apify.com/xquik/x-follower-scraper/examples/collect-x-audience-data-for-rag)
- [Find AI SEO practitioners on X](https://apify.com/xquik/x-follower-scraper/examples/find-ai-seo-practitioners-on-x)
- [Compare AI brand follower overlap](https://apify.com/xquik/x-follower-scraper/examples/compare-ai-brand-follower-overlap)
- [Export Twitter followers to CSV](https://apify.com/xquik/x-follower-scraper/examples/export-twitter-followers-to-csv)
- [Analyze competitor follower overlap](https://apify.com/xquik/x-follower-scraper/examples/analyze-competitor-follower-overlap)
- [Find micro-influencers in X followers](https://apify.com/xquik/x-follower-scraper/examples/find-micro-influencers-in-followers)
- [Export curated Twitter list members](https://apify.com/xquik/x-follower-scraper/examples/export-curated-twitter-list-members)
- [Analyze public X Community members](https://apify.com/xquik/x-follower-scraper/examples/analyze-public-x-community-members)
- [Collect Community members for AI agents](https://apify.com/xquik/x-follower-scraper/examples/collect-community-members-for-ai-agents)
- [Create repeatable X follower snapshots](https://apify.com/xquik/x-follower-scraper/examples/create-repeatable-follower-snapshots)

### X Follower Scraper hangi verileri çıkarabilir?

| Alan               | Açıklama                                                |
| ------------------ | -------------------------------------------------------- |
| `id`                | Sayısal X kullanıcı ID'si                                |
| `username`          | Handle (`@` olmadan)                                     |
| `name`              | Görünen ad                                               |
| `description`       | Biyografi metni                                          |
| `followers`         | Takipçi sayısı                                           |
| `following`         | Takip edilen sayısı                                      |
| `statusesCount`     | Toplam gönderilen tweet                                  |
| `mediaCount`        | Toplam yüklenen medya                                    |
| `favouritesCount`   | Toplam verilen beğeni                                    |
| `verified`          | Birleşik herkese açık Blue veya eski doğrulama işareti   |
| `verifiedType`      | `blue`, `business`, `government` veya `none`             |
| `location`          | Kendi bildirdiği konum                                   |
| `url`               | Profilden web sitesi URL'si                              |
| `profilePicture`    | Avatar URL'si (tam boyut)                                |
| `coverPicture`      | Kapak görseli URL'si                                     |
| `createdAt`         | X'ten hesap oluşturma zaman damgası dizesi               |
| `sourceTarget`      | Bu profili kazıdığın handle/ID                           |
| `sourceRelation`    | İlişki: `followers`, `following`, `list_members`, ...    |
| `sourceUrl`         | Profilin keşfedildiği tam URL                            |
| `sourceTargets`     | Birleştirme modunda bu profille eşleşen tüm hedefler     |
| `sourceRelations`   | Birleştirme modunda bu profille eşleşen tüm ilişkiler    |
| `sourceUrls`        | Birleştirme modunda bu profille eşleşen tüm kaynak URL'ler |
| `overlapCount`      | Birleştirme modunda eşleşen ilişki-hedef çifti sayısı    |
| `resultType`        | Full ve raw çıktı modlarında satır türü                  |
| `raw`               | Actor'a özgü biçimlendirmeden önceki güvenli kaynak profil |

Satırlar herkese açık profil sözleşmesini izler. Bu sözleşme kimliği,
sayaçları, doğrulamayı, kullanılabilirliği, iştirakleri, profesyonel verileri
ve biyografileri kapsar. Kaynak atfı, varlıklar ve sabitlenmiş tweet ID'leri
kullanılabilir kalır. Tam alanlar için OpenAPI'a bak.

Güvenli kaynak profilin bir `raw` kopyasını eklemek için `outputMode: "raw"`
veya `includeRaw: true` ayarla. Kompakt mod varsayılan olarak kalır.

`verifiedOnly`, herkese açık Blue ve eski doğrulanmış profilleri kabul eder.
Çelişen kaynak işaretleri, yanlış bir değerin gerçek bir doğrulama durumunu
gizlemesine asla izin vermez.

Görüntüleyene özgü durum, veri kümene değil Xquik'in getirme hesabına aittir.
Takip etme, engelleme, sessize alma, DM, bildirim ve benzeri görüntüleyen
işaretleri, ham çıktı dahil her zaman kaldırılır.

## X takipçilerini kazımanın maliyeti nedir?

Her Apify planında teslim edilen profil başına `$0.00015` ücret alınır. Apify,
platform kullanımını ayrıca faturalandırır. Xquik, teslim edilen veri satırı
başına bir ücret uygular. Tanılamalar `diagnostics` çıktısında ücretsizdir.
Ayrı bir Xquik aboneliği gerekmez. Başlangıç ücreti uygulanmaz. Her
çalıştırma, Apify'ın Actor'a gösterdiği canlı olay başına ödeme fiyatından
hesaplanan `estimatedChargeUsd` ile bir `run-report` kaydı yazar. Girdisiz ve
geçersiz girdi çıkışları dahil her sonuç `run-report` yazar. `version` alanı
yayınlanmış tam Actor kaynak sürümünü bildirir.

`failedTargets`, bir okuma hatasından sonra duran hedefleri sayar. Kabul
edilen profiller faturalandırılabilir veri satırları olarak kalır. Bu
çalıştırmalar `completionReason: "partial_failure"` kullanır. Hızlı
sunucu taraflı sayfalama aynı raporlama sözleşmesini izler.

Varsayılan Apify zaman aşımı `0`'dır. Çalıştırmaların zaman sınırı yoktur.
Actor, üst sınıra veya kaynak sona erene kadar her canlı imleci takip eder.
Çağıran yine de sonlu bir zaman aşımı ayarlayabilir. O zaman
`completionReason: "deadline_reached"`, o sınırın yaklaştığı anlamına gelir.
Actor, kontrol noktaları, satırlar, raporlar ve temiz bir çıkış için son 15
saniyeyi ayırır. Geçerli profiller teslim edilmiş kalır ve bir kez
faturalandırılır. Tamamlanmamış sayfalama devam ettirilebilir kalır.

Bağımsız hedefler eşzamanlı çalışır. Her hedef sıralı imleç sayfalamasını
korur. Veri kümesi yazımları üst sınırları, tekilleştirmeyi, atfı ve
faturalamayı atomik tutar.

- Başlangıçlar, hedefler ve ilişki seçimi ayrı bir sorgu ücreti eklemez.
- Filtreler (`minFollowers`, `verifiedOnly`, `bioContains`,
  `locationContains`, `minFollowing`, `maxFollowing`, `minStatuses`,
  `maxStatuses`, `minAccountAgeDays`, `verifiedType`, `usernameContains`,
  `hasWebsite`, `hasLocation`), bir profil veri kümene girmeden önce çalışır.
- `dedupeAcrossTargets: true` ile Actor tekrarları yazmadan önce kaldırır.
- Veri kümesi tarafından reddedilen satırlar faturalandırılmaz.
- Girdisiz, geçersiz girdi ve sıfır çıktılı çalıştırmalar, ücretsiz
  `diagnostics` çıktısına 1 uygulanabilir kayıt yazar.

Harcamayı sabit bir üst sınıra oturtmak için Apify API'sinde
`maxTotalChargeUsd`'yi veya Console'da Max cost per run'ı ayarla. Apify bu
sınırı Actor'a `ACTOR_MAX_TOTAL_CHARGE_USD` olarak gösterir ve Actor, bunun
ötesinde satır kabul etmeden önce durur. Bütçenin izin verdiği kadar profil
döndürmesi için `maxItems`'i boş bırak. `maxItems`'i yalnızca bütçenin izin
vereceğinden daha küçük bir sonuç üst sınırı istediğinde ayarla.

## X Follower Scraper'ı takipçi verisi kazımak için nasıl kullanırım?

### 1. Profil veya liste URL'lerini yapıştır

Profil, Liste veya Topluluk URL'lerini yapıştır. Scraper her URL'yi
ilişkisine yönlendirir:

```json
{
  "startUrls": [
    { "url": "https://x.com/nasa/followers" },
    { "url": "https://x.com/spacex/verified_followers" },
    { "url": "https://x.com/elonmusk/following" },
    { "url": "https://x.com/i/lists/1748648376080666720/members" },
    { "url": "https://x.com/i/communities/1493446837214187523/members" }
  ],
  "maxItems": 5000
}
```

### 2. Toplu handle'lar

Birçok `/<handle>/followers` hedefi için kısayol. Kullanıcı adları `@` ile
veya öneksiz kabul edilir:

```json
{
  "twitterHandles": ["elonmusk", "nasa", "openai"],
  "relation": "followers",
  "maxItems": 1000
}
```

Actor'ın her handle için kazıyacağı ilişkiyi seçmek üzere `relation`'ı
`followers`, `following` veya `verified_followers` olarak ayarla.

Aynı girdi için kabul edilen takma adlar arasında `username`, `usernames` ve
`user_names` bulunur.

### 3. Çoklu ilişki çalıştırmaları

```json
{
  "usernames": ["nasa"],
  "relations": ["followers", "following"],
  "maxItems": 1000
}
```

`getFollowers`, `getFollowing`, `getVerifiedFollowers`, `getListMembers`,
`getListFollowers` ve `getCommunityMembers` gibi booleanları da
kullanabilirsin.

### 4. Sayısal kullanıcı, liste veya topluluk ID'leriyle kazı

```json
{
  "userIds": ["44196397"],
  "listIds": ["1748648376080666720"],
  "communityIds": ["1493446837214187523"],
  "relation": "followers",
  "maxItemsPerTarget": 500,
  "maxItems": 1500
}
```

Sayısal kullanıcı ID'leri için kabul edilen takma adlar arasında
`twitterUserIds` ve `user_ids` bulunur.

`relation`, sayısal kullanıcı ID'lerine uygulanır. Liste ID'leri varsayılan
olarak üyeleri kullanır. Topluluk ID'leri her zaman üyeleri kullanır.
`maxItemsPerTarget`, ilk büyük hedefin genel sınırı tüketmesini önler.

### 5. Ödeme yapmadan önce filtrele

Yalnızca eşleşen profillerin veri kümene girmesi için filtreler uygula:

```json
{
  "twitterHandles": ["openai"],
  "relation": "followers",
  "minFollowers": 1000,
  "verifiedOnly": true,
  "verifiedType": "business",
  "minStatuses": 100,
  "usernameContains": "ai",
  "bioContains": "founder, CEO",
  "locationContains": "San Francisco",
  "maxItems": 500
}
```

Actor, yazdığından daha fazla profil inceleyebilir. Yalnızca her filtreyi
geçen ve veri kümene giren satırlar için ödeme yaparsın.

`bioContains` alternatiflerini virgül veya yeni satırla ayır. Bir profil,
biyografisi sağlanan terimlerden herhangi birini içerdiğinde geçer. Eşleşme
büyük/küçük harfe duyarsız kalır.

### 6. Kitle örtüşmesi bul

Rakipleri, listeleri, toplulukları veya ilişki türlerini karşılaştırmak için
birleştirme modunu kullan:

```json
{
  "twitterHandles": ["openai", "anthropicai", "GoogleDeepMind"],
  "relation": "followers",
  "dedupeMode": "merge",
  "maxItemsPerTarget": 5000,
  "maxItems": 15000
}
```

Çıktı, benzersiz profil başına bir satır içerir. Paylaşılan profiller
`sourceTargets`, `sourceRelations`, `sourceUrls`, `sourceTargetKeys` ve
`overlapCount` içerir, böylece örtüşmeye göre sıralayabilir veya doğrudan
CSV'ye aktarabilirsin. Her hedefin satır katkısı yapabilmesi için
`maxItems`'i yeterince yüksek tut. Hesap başına derinliği kontrol etmek için
`maxItemsPerTarget`'i kullan.

### Kabul edilen URL biçimleri

| URL                                         | İlişki                                    |
| -------------------------------------------- | ------------------------------------------ |
| `https://x.com/<handle>/followers`           | `followers`                                |
| `https://x.com/<handle>/verified_followers`  | `verified_followers`                       |
| `https://x.com/<handle>/following`           | `following`                                |
| `https://x.com/<handle>`                     | varsayılan `relation` (ayarlanmamışsa followers) |
| `https://x.com/i/lists/<id>/members`         | `list_members`                             |
| `https://x.com/i/lists/<id>/followers`       | `list_followers`                           |
| `https://x.com/i/lists/<id>`                 | `list_members`                             |
| `https://x.com/i/communities/<id>/members`   | `community_members`                        |
| `https://x.com/i/communities/<id>`           | `community_members`                        |
| `<handle>/followers`                         | `followers`                                |
| `<handle>/following`                         | `following`                                |
| `<handle>/verified_followers`                | `verified_followers`                       |
| `lists/<id>/members`                         | `list_members`                             |
| `lists/<id>/followers`                       | `list_followers`                           |
| `communities/<id>/members`                   | `community_members`                        |

`twitter.com` ve `mobile.twitter.com` her yerde ayrıca kabul edilir.

## Girdi

Tam seçenek listesi için **Input** sekmesine bak. Şunlardan en az biri hariç
tüm alanlar isteğe bağlıdır: `startUrls`, `twitterHandles`, `userIds`,
`listIds` veya `communityIds`, ya da bunların belgelenmiş takma adları.

Örnekler:

- `twitterHandles`'a `relation: "followers"` ile bir rakip handle ekle.
- Doğrulanmış profiller için Start URLs'e
  `https://x.com/<handle>/verified_followers` yapıştır.
- Üyelerini denetlemek için Start URLs'e bir liste URL'si yapıştır.
- 2 veya daha fazla handle ekle. Yalnızca ilk eşleşen profil satırını tutmak
  için `dedupeMode: "first"` ayarla, ya da tüm eşleşen kaynak hedeflerle tek
  bir satır tutmak için `dedupeMode: "merge"` kullan.

### Console ve API girdi deneyimi

Console şu kontrolleri gösterir:

- Start URLs alanı, URL dizelerini veya `{ "url": "..." }` nesnelerini kabul
  eder. JSON düzenleyicisi her iki API biçimini de korur.
- Relation, Output Mode ve Dedupe Mode doğrulanmış seçim alanlarıdır.
- Relations, çoklu ilişki çalıştırmaları için doğrulanmış bir çoklu seçim
  alanıdır.
- Sonuç sınırları 1 veya daha büyük tam sayıları kabul eder.
- Sayısal profil filtreleri 0 veya daha büyük tam sayıları kabul eder.

Yeni entegrasyonlarda kanonik alanları kullan. Uyumluluk takma adları JSON,
API, SDK, otomasyon ve görev girdilerinde kullanılabilir kalır. Buna Output
Mode takma adları olarak `outputVariant` ve `includeRaw` da dahildir. Ayrıca
bir Dedupe Mode takma adı olarak `dedupeAcrossTargets`'i de içerir. Görsel
form, kanonik bir kontrolü tekrarlayan takma adları gizler. Mevcut JSON ve
kaydedilmiş görev girdileri güncel davranışlarını korur.

### Her zaman en güncel yapıyı kullan

Store çalıştırmaları Actor'ın `latest` yapı yapılandırmasını kullanır. API
istemcileri yapı geçersiz kılmasını atlamalı veya `build=latest` geçmelidir.
Eski bir yapıya sabitlenmiş Görevleri ve entegrasyonları güncelle. Sabitlenmiş
yapılar asla otomatik olarak taşınmaz.

## Çıktı

Her profil bir JSON nesnesidir. Kompakt mod, normalleştirilmiş herkese açık
alanları, şema sürümü alanlarını ve mevcut olduğunda kaynak metadata'yı
döndürür:

Veri kümesi ve run-report şemaları döndürülen her alanı açıklar. Temel
alanlar ayrıca ajanlar ve üretilen entegrasyonlar için örnekler içerir.

Örnek değerler açıklayıcıdır. Yanıtlar çalıştırma zamanındaki kaynak veriyi
yansıtır.

```json
{
  "schemaVersion": 1,
  "_schema_version": 1,
  "id": "44196397",
  "username": "elonmusk",
  "name": "Elon Musk",
  "description": "...",
  "followers": 180000000,
  "following": 500,
  "statusesCount": 42000,
  "mediaCount": 3200,
  "favouritesCount": 120000,
  "verified": true,
  "verifiedType": "blue",
  "location": "...",
  "url": "https://...",
  "profilePicture": "https://...",
  "coverPicture": "https://...",
  "createdAt": "Tue Jun 02 20:12:29 +0000 2009",
  "sourceTarget": "nasa",
  "sourceRelation": "followers",
  "sourceUrl": "https://x.com/nasa/followers"
}
```

Birleştirme tekilleştirme modu örtüşme alanları ekler:

```json
{
  "schemaVersion": 1,
  "_schema_version": 1,
  "id": "44196397",
  "username": "elonmusk",
  "sourceTargets": ["nasa", "spacex"],
  "sourceRelations": ["followers"],
  "sourceUrls": [
    "https://x.com/nasa/followers",
    "https://x.com/spacex/followers"
  ],
  "sourceTargetKeys": ["followers:nasa", "followers:spacex"],
  "overlapCount": 2
}
```

Apify veri kümesinden JSON, CSV, Excel veya HTML olarak dışa aktar.

## Çalıştırma seçenekleri

- Çalıştırma maliyetini sınırlamak için Apify maksimum toplam ücretini
  ayarla. O bütçe içinde maksimum satır için `maxItems`'i boş bırak, ya da
  daha az profil istediğinde `maxItems` ve `maxItemsPerTarget`'i ayarla.
- Faturalandırılan veri kümesini daraltmak için `minFollowers`,
  `verifiedOnly`, `verifiedType`, `minStatuses`, `usernameContains`,
  `bioContains`, `locationContains`, `hasWebsite` ve `hasLocation`'ı
  birleştir.
- Tüm hedefler genelinde yalnızca benzersiz profiller elde etmek için birden
  fazla rakip handle kazırken `dedupeMode: "first"` ayarla.
- Her eşleşen kaynak hedefin eklendiği profil başına tek satır elde etmek
  için `dedupeMode: "merge"` ayarla.
- Mevcut olduğunda sabitlenmiş tweet ID'leri, varlıklar ve profil metadata'sı
  gibi isteğe bağlı profil alanları elde etmek için `outputMode: "full"`
  ayarla.
- Normalleştirilmiş alanların yanında sanitize edilmiş bir `raw` nesnesi
  eklemek için `outputMode: "raw"` veya `includeRaw: true` ayarla.
- Profil ID'lerini karşılaştırmak için tekrarlayan Actor çalıştırmaları
  planla ve her veri kümesini sakla. Xquik monitörleri desteklenen tweet ve
  profil olaylarını yayınlar, takipçi listesi değişikliklerini değil.

## Kullanım örnekleri

- Potansiyel müşteri araştırması için rakip takipçilerini dışa aktar.
- Hesabın, rakiplerin ve kamu figürlerinin kitlelerini karşılaştır.
- Eşleşen profilleri bulmak için takipçi sayısını ve doğrulamayı filtrele.
- İlgili X Topluluklarının üyelerini dışa aktar.
- Araştırma için herkese açık sosyal ağ veri kümeleri oluştur.
- Takipçi tabanlarını biyografi anahtar kelimesine, konuma veya profil
  türüne göre segmentlere ayır.

## Veri sorumluluğu

Actor, herkese açık X profil alanlarını ister. Sonuçlar, kendi bildirilen
konumlar dahil kişisel veri içerebilir. Yasal bir amaç doğrula ve geçerli
gizlilik kurallarına uy. Belirsizlik durumunda yetkin bir hukuk danışmanına
sor.

## İlgili Xquik Actor'ları

Her Xquik Actor'ı aynı çıkarma motorunu, önce filtreleyen faturalandırmayı ve
tanılamaları paylaşır. İhtiyacın olan veriye uyanı seç.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): Aramalardan,
  profil zaman akışlarından, Listelerden ve tweet ID'lerinden 50'den fazla
  filtre ve düz dışa aktarımla tweet kazır. Analiz değil sadece tweet verisi
  gerektiğinde kullan. Satır başına $0.00015'ten başlar.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): Handle, ID
  veya URL'den profilleri, gönderilerini, yanıtlarını, medyasını ve
  beğenilerini kazır. Aramalar yerine hesaplardan başladığında kullan. Satır
  başına $0.00015'ten başlar.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): 25'ten fazla
  filtreyle gönderilerin altındaki yanıtları, yorumları ve tüm konuşmaları
  kazır. Tweet'lerin altındaki tartışmaya ihtiyacın olduğunda kullan. Satır
  başına $0.00015'ten başlar.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): Gönderi
  URL'leri veya ID'leri için toplu olarak yanıtları, alıntıları, retweet
  edenleri, beğenenleri ve thread'leri kazır. Gönderilerle kimin etkileşime
  girdiğini ölçtüğünde kullan. Satır başına $0.00015'ten başlar.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper):
  Handle, biyografi ve konuma göre kullanıcıları takipçi, doğrulama, hesap
  yaşı ve konum filtreleriyle arar. Aramadan hesap listeleri oluşturduğunda
  kullan. Profil başına $0.00015'ten başlar.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): Liste URL'lerinden
  veya ID'lerinden Liste gönderilerini, üyelerini ve takipçilerini kazır.
  Kaynaklarını küratörlü bir Liste belirlediğinde kullan. Satır başına
  $0.00015'ten başlar.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): Topluluk
  bilgilerini, gönderilerini, aramalarını, üyelerini ve moderatörlerini kazır.
  Kaynakların X Toplulukları olduğunda kullan. Satır başına $0.00015'ten başlar.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): Sıralama,
  hacim, sorgu ve WOEID ile konuma göre gerçek zamanlı trendleri kazır. Nerede
  neyin trend olduğunu takip ettiğinde kullan. Trend başına $0.00015'ten başlar.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): Uzun biçimli
  X Makalelerini kapak, yazar, tarih ve metriklerle Markdown ve metin olarak
  kazır. Tweet değil makale gövdesi gerektiğinde kullan. Makale başına
  $0.00015'ten başlar.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): Gönderilerden
  veya profillerden fotoğrafları, videoları ve GIF'leri MP4 ve metadata
  seçenekleriyle çıkarır veya depolar. Medya dosyalarının kendisine ihtiyacın
  olduğunda kullan. Medya satırı başına $0.00015'ten başlar.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  Yapay zeka destekli ilgi, duygu durumu ve müşteri deneyimi yanıtlarıyla marka
  bahsedilmelerini izler ve çalıştırmaları karşılaştırır. Bir markayı zaman
  içinde takip ettiğinde kullan. Analiz edilen tweet başına $0.0003'ten başlar.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  Yapay zeka ile her tweet için tutum, yoğunluk ve alaycılık olasılığını
  etiketler. Herhangi bir konuda genel duygu durumuna ihtiyacın olduğunda
  kullan. Analiz edilen tweet başına $0.0003'ten başlar.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  Yapay zeka ile yükseliş, düşüş, nötr veya karışık duruşu, içerik türünü,
  kesinliği ve varlık ilgisini etiketler. Hisse senedi, kripto veya alım satım
  konuşmalarını takip ettiğinde kullan. Analiz edilen tweet başına $0.0003'ten
  başlar.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  Yapay zeka ile haber gönderilerini biçim, kaynak atfı ve konu ilgisine göre
  etiketler. Haberi yorumdan ayırdığında kullan. Analiz edilen tweet başına
  $0.0003'ten başlar.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  Yapay zeka ile her tweet için kendi kategori, puan ve evet/hayır sorularını
  yanıtlar. Hazır analizler etiketlerine uymadığında kullan. Analiz edilen
  tweet başına $0.0003'ten başlar.

## Kazımadan fazlasına mı ihtiyacın var?

Xquik ayrıca 47 dashboard aracı, 129 REST işlemi, imzalı webhook'lar ve bir
MCP sunucusu sağlar.

- [API dokümantasyonu](https://docs.xquik.com/introduction): REST API
  kılavuzları
- [Followers API](https://docs.xquik.com/api-reference/x/followers): bir
  hesabın mevcut takipçilerini getir
- [Following API](https://docs.xquik.com/api-reference/x/following): bir
  kullanıcının kimleri takip ettiğini al
- [List Members API](https://docs.xquik.com/api-reference/x/list-members):
  herkese açık bir X listesinden üyeleri dışa aktar
- [MCP sunucusu](https://docs.xquik.com/mcp/overview): desteklenen JSON veya
  metin işlemlerini keşfet ve çalıştır
- [Webhooks](https://docs.xquik.com/webhooks/overview): desteklenen Tweet ve
  profil olaylarını al

## SSS

**X API anahtarına ihtiyacım var mı?** Hayır. Bu scraper kendi
altyapısını kullanır. Giriş veya kimlik bilgisi gerekmez.

**Bir çalıştırmayı ne sınırlar?** İstediğin öğe sınırı ve Apify harcama
sınırı çalıştırmayı durdurur. Apify hesap ve platform sınırları hâlâ
geçerlidir.

**Ne kadar hızlı?** Çalışma süresi hedef boyutuna, filtrelere ve üst akış
kullanılabilirliğine bağlıdır. Derin filtrelenmiş çalıştırmalar Console
ilerlemesini her 5 sayfada bir kontrol noktasına alır. Bu, sayfa
getirmeleri arasındaki veri dışı trafiği azaltır.

**Neden çalıştırmam `maxItems`'ten daha az satır döndürüyor?** `minFollowers`,
`verifiedOnly` ve `bioContains` gibi filtreler yazmadan önce uygulanır.
Daha fazla sonuç döndürmek için filtreleri gevşet.

**Tek bir hesaptan kaç takipçi kazıyabilirim?** X, büyük hesapları
gruplar halinde sayfalar. Daha fazla sayfa getirmek için Apify'ın
çalıştırma süresi sınırını artır. `maxItemsPerTarget` yalnızca her hedefi
sınırlar.

**Actor geçici hataları yeniden dener mi?** Evet. Zaman aşımları, 429 ve
5xx yanıtları için sayfa başına en fazla 3 deneme yapar. Mevcut olduğunda
`Retry-After`'a uyar. Aksi takdirde üstel geri çekilme kullanır. Kalıcı
hatalar kısmi sonuçları korur.

**Apify çalıştırma süresi sınırına yaklaşınca ne olur?** Actor daha kısa
bir çalıştırma son tarihi eklemez. Apify'ın yapılandırılmış sınırını kullanır
ve sonlandırma için son 15 saniyeyi ayırır. Profilleri boşaltır, sayfalamayı
kontrol noktasına alır, raporu yazar ve çıkar. Veri kümesi tarafından kabul
edilmeyen satırlar faturalandırılmaz.

**Kaldığım yerden devam edebilir miyim?** Devam imleci girdisi henüz
sunulmuyor. Aynı hedefi yeniden çalıştırmak, ilk mevcut sayfasından başlar.

**Bunu çalıştırmak için Apify API'yi kullanabilir miyim?** Evet. Python,
JavaScript ve cURL örnekleri için
[API sekmesine](https://apify.com/xquik/x-follower-scraper/api) bak.

**Tekrarlayan kazımalar planlayabilir miyim?** Evet. Bu Actor'ı bir cron
üzerinde çalıştırmak için Apify'ın yerleşik
[zamanlamasını](https://docs.apify.com/platform/schedules) kullan. Takipçi
değişikliklerini bulmak için kaydedilmiş veri kümelerini karşılaştır.

**Sorunları nereye bildiririm?** Bu Actor'ın sayfasındaki Issues sekmesini
kullan.

**API dokümanları nerede?** [API dokümantasyonunu](https://docs.xquik.com/introduction)
oku.
