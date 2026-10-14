[English](README.md) · [Español](README.es.md) · **Türkçe** ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer, Xquik MCP'yi kodlama ajanlarına bağlıyor](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Framer'ın Xquik scraper'larını Claude Code, Codex, Cursor & daha fazlasıyla nasıl kullandığını](https://youtu.be/4UOSpoOoC3Y?t=367)
6:07'den itibaren izle.

Xquik, en eksiksiz X verisini sunan, dünyanın en hızlı ve en ucuz X (Twitter)
scraper hizmetidir. Xquik'in X Follower Scraper'ı takipçileri, takip edilenleri,
liste üyelerini, aboneleri & topluluk üyelerini toplar. Herkese açık
karşılaştırma testleri, takipçi kazıyan 10 Actor arasında en ucuz & en
hızlısının bu olduğunu kanıtlıyor.
[Aşağıdaki karşılaştırma testinin](#karşılaştırma-testi) gösterdiği gibi tam
satırları, medyan Actor'ın 2,5 katı alan taşır. Diğer Apify Actor'larının çoğu,
filtrelemeden veya tekilleştirmeden önce ücret alır. Xquik yalnızca teslim
edilen, benzersiz ve filtrene uyan sonuçlar için ücret alır.

Twitter takipçi listesini takip edilenler, onaylı takipçiler, Liste üyeleri,
Liste aboneleri & Topluluk üyeleriyle birlikte dışa aktar. Xquik'in X Follower
Scraper'ı **her Apify planında teslim edilen profil başına $0.00015'ten
başlar**. Apify, platform kullanımını ayrıca faturalandırır. X girişi gerekmez &
Xquik başlatma veya sorgu ücreti de eklemez.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## X Follower Scraper ne yapar?

Xquik'in X Follower Scraper'ı takipçiler, takip edilenler, Listeler &
Topluluklar için erişilebilen herkese açık profil verisini döndürür. Her satır
kaynak hedefini & ilişkisini belirtir.

### Temel davranış

- Filtreler & tekilleştirme faturalamadan önce çalışır.
- Varsayılan olarak birden çok hedefin paylaştığı bir profil 1 kez görünür & 1
  kez ücretlenir.
- 1 çalıştırma kullanıcı adı, sayısal ID, URL & kısa yol kabul eder.
- Birleştirme modu ortak profilleri, kaynakları, ilişkileri & `overlapCount`
  değerini kaydeder.
- Çalıştırma günlükleri sayfa sürelerini `fetchDurationMs`,
  `processingDurationMs`, `pushDurationMs`, `statusDurationMs` &
  `fullPageDurationMs` alanlarında gösterir.
- Apify bir çalıştırmayı yeniden başlatırsa çalıştırma teslim edilen satırları &
  ilerlemeyi korur.

### X Follower Scraper hangi verileri çıkarabilir?

| Alan                     | Açıklama                                                    |
| ------------------------ | ----------------------------------------------------------- |
| `id`                     | Sayısal X kullanıcı ID'si                                   |
| `username`               | Kullanıcı adı (`@` olmadan)                                 |
| `name`                   | Görünen ad                                                  |
| `description`            | Biyografi metni                                             |
| `followers`              | Takipçi sayısı                                              |
| `following`              | Takip edilen sayısı                                         |
| `statusesCount`          | Paylaşılan toplam gönderi                                   |
| `mediaCount`             | Yüklenen toplam medya                                       |
| `favouritesCount`        | Verilen toplam beğeni                                       |
| `verified`               | Herkese açık Blue veya eski onay işaretinin birleşik değeri |
| `verifiedType`           | `blue`, `business`, `government` veya `none`                |
| `location`               | Kullanıcının kendi yazdığı konum                            |
| `url`                    | Profildeki web sitesi URL'si                                |
| `email`                  | Profilin yayımladığı ilk e-posta                            |
| `contactInfo`            | Profilin yayımladığı e-postalar, telefonlar & bağlantılar   |
| `profilePicture`         | 48 px boyutunda profil fotoğrafı URL'si                     |
| `profilePictureOriginal` | Aynı profil fotoğrafının indirmek için tam boyutu           |
| `coverPicture`           | Kapak fotoğrafı URL'si                                      |
| `createdAt`              | X'ten gelen hesap oluşturma zaman damgası metni             |
| `sourceTarget`           | Bu profili kazıdığın kullanıcı adı / ID                     |
| `sourceRelation`         | `followers` veya `list_members` gibi ilişki                 |
| `sourceUrl`              | Profilin bulunduğu tam URL                                  |
| `sourceTargets`          | Birleştirme modunda bu profille eşleşen tüm hedefler        |
| `sourceRelations`        | Birleştirme modunda bu profille eşleşen tüm ilişkiler       |
| `sourceUrls`             | Birleştirme modunda bu profille eşleşen tüm kaynak URL'leri |
| `overlapCount`           | Birleştirme modunda eşleşen ilişki-hedef çifti sayısı       |
| `resultType`             | Full ve raw çıktı modlarında satır türü                     |
| `raw`                    | Actor'a özgü biçimlendirmeden önceki güvenli kaynak profil  |

Satırlar kimlik, sayılar, onay durumu, kullanılabilirlik, bağlı hesaplar,
profesyonel veriler & biyografiler için herkese açık profil alanlarını taşır.
Kaynak bilgisi, entity verileri & sabitlenmiş gönderi ID'leri de gelmeye devam
eder. Alanların tam listesi için OpenAPI'ye bak.

`raw` alanı eklemek için `outputMode: "raw"` veya `includeRaw: true` ayarla. Bu
alan kaynak profilin güvenli bir kopyasını tutar. Varsayılan mod kompakt moddur.

Satır başına en çok veri için `outputMode: "full"` ayarla. Satırlar, X'in
takipçi & takip edilen listelerinde gönderdiği `listedCount`,
`defaultProfileImage` & `advertiserAccountType` gibi en fazla 13 ek profil
alanını da taşır. Tam satırlar bunları sona koyar. Kompakt satırlar daha küçük
kalır & depolaması daha ucuzdur.

`verifiedOnly`, herkese açık Blue & eski onaylı profilleri kabul eder. X'in onay
bayraklarından biri bile öyle diyorsa profil onaylı sayılır. `blueVerifiedOnly`,
X'in Blue onaylı olarak işaretlediği profilleri tutar. X birçok şirket & devlet
hesabını da Blue olarak işaretler. 1 rozet türünü tutmak için `verifiedType`
ayarla.

Satırlar asla yalnızca görüntüleyene ait durumu içermez. Xquik takip, engelleme,
sessize alma, DM, bildirim & benzeri görüntüleyen bayraklarını kaldırır. Ham
çıktı da bunları atar.

## Kullanım alanları

- Potansiyel müşteri verisini zenginleştir & profil başına daha çok alanla
  araştırma veri kümeleri oluştur. Medyan tam satırımızda 2026-09-29'da 38 alan
  vardı. Bu, diğer 9 Actor'ın medyanının 2,5 katı.
- Potansiyel müşteri araştırması için rakiplerin takipçilerini dışa aktar.
- Kendi hesabının, rakiplerinin & tanınmış kişilerin kitlelerini karşılaştır.
- Uygun profilleri bulmak için takipçi sayısına & onay durumuna göre filtrele.
- X Topluluk üyelerini dışa aktar.
- Araştırma için herkese açık sosyal ağ veri kümeleri oluştur.
- Takipçi kitlelerini biyografi kelimesine, konuma veya profil türüne göre ayır.

## X Follower Scraper ile takipçi verisini nasıl kazırım?

Apify'da yeni misin? Önce
[ücretsiz bir hesap oluştur](https://console.apify.com/sign-up?fpr=xquik).
Ücretsiz plan kredi kartı istemez & her ay harcaman için $5 verir. Profil başına
$0.00015 fiyatla $5, platform kullanımı hariç 33.000 profile kadar yeter. Sonra
buraya dön & Try for free düğmesine bas.

1. Apify Console'da Xquik'in X Follower Scraper'ını aç.
2. Profil, Liste veya Topluluk URL'leri, X kullanıcı adları ya da sayısal ID'ler
   ekle.
3. `followers` veya `verified_followers` gibi bir ilişki seç.
4. `maxItems` değerini & gereken profil filtrelerini ayarla.
5. Çalıştırmayı başlat.
6. Veri kümesini JSON, CSV, Excel veya HTML olarak dışa aktar.

Aşağıdaki her girdi eksiksizdir & sık yapılan bir işi kapsar. Verine uyanı seç.

### Profil veya liste URL'si yapıştır

Profil, Liste veya Topluluk URL'lerini yapıştır. Her URL, kazınacak ilişkiyi
belirler.

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

### Toplu kullanıcı adları

`twitterHandles`, birçok `/<handle>/followers` hedefinin kısa yoludur. Kullanıcı
adları `@` ile ya da `@` olmadan çalışır.

```json
{
  "twitterHandles": ["elonmusk", "nasa", "openai"],
  "relation": "followers",
  "maxItems": 1000
}
```

`relation`, her kullanıcı adı için neyin kazınacağını belirler. `followers`,
`following` veya `verified_followers` kullan.

Yalnızca kullanıcı ID'leri gerektiğinde `follower_ids` veya `following_ids`
kullan. Her satır 1 kullanıcı ID'sini, kaynak hedefini & ilişkisini tutar & bir
sayfa en fazla 5.000 ID tutar. Profil filtreleri profil alanlarına ihtiyaç
duyar, bu yüzden bu 2 ilişkide onları boş bırak.

Bir kuruluşun bağlı hesabı olarak listelediği hesaplar için `affiliates` kullan,
örneğin bir şirketin çalışanları & ürünleri. Her satır tam bir profildir. Bağlı
hesabı olmayan bir hesap satır döndürmez.

Bir hesabın abone olduğu içerik üreticileri için `subscriptions` kullan.
Aboneliklerini gizleyen bir hesap satır döndürmez.

X'in bir hesaba benzer olarak listelediği hesaplar için `similar` kullan. Her
satır tam bir profildir. X kısa bir hesap listesi verir & bu listeyi
çalıştırmalar arasında değiştirebilir.

Aynı girdi `username`, `usernames` & `user_names` takma adlarını da kabul eder.

### Çok ilişkili çalıştırmalar

Aynı kullanıcı adları için birden çok ilişkiyi okumak istediğinde `relations`
ayarla.

```json
{
  "usernames": ["nasa"],
  "relations": ["followers", "following"],
  "maxItems": 1000
}
```

`getFollowers`, `getFollowing`, `getVerifiedFollowers`, `getListMembers`,
`getListFollowers` & `getCommunityMembers` gibi boolean alanlar da çalışır.

### Sayısal kullanıcı, liste veya topluluk ID'siyle kazı

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

Sayısal kullanıcı ID'leri `twitterUserIds` & `user_ids` takma adlarını da kabul
eder.

`relation` sayısal kullanıcı ID'lerine uygulanır. Liste ID'leri varsayılan
olarak üyeleri okur. Topluluk ID'leri her zaman üyeleri okur.
`maxItemsPerTarget`, ilk büyük hedefin `maxItems` sınırını tüketmesini önler.

### Ödemeden önce filtrele

Veri kümene yalnızca uyan profillerin girmesi için filtre ekle.

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

Actor yazdığından daha çok profili inceleyebilir. Yalnızca tüm filtreleri geçip
veri kümene giren satırlar için ödersin. Filtreli bir çalıştırmanın son durumu
kaç profili kontrol ettiğini & kaçının geçtiğini söyler. Filtreli bir çalıştırma
varsayılan olarak liste başına 100.000 taranan profilde durur. Daha az veya daha
çok okumak için `maxScan` ayarla.

`bioContains` seçeneklerini virgülle veya yeni satırla ayır. Biyografisinde
verdiğin terimlerden herhangi biri geçen profil filtreyi geçer. Eşleşme harf
büyüklüğüne bakmaz.

### Kitle örtüşmesini bul

Rakipleri, listeleri, toplulukları veya ilişki türlerini karşılaştırmak için
birleştirme modunu kullan.

```json
{
  "twitterHandles": ["openai", "anthropicai", "GoogleDeepMind"],
  "relation": "followers",
  "dedupeMode": "merge",
  "maxItemsPerTarget": 5000,
  "maxItems": 15000
}
```

Çıktıda her benzersiz profil için 1 satır olur. Ortak profillerde
`sourceTargets`, `sourceRelations`, `sourceUrls`, `sourceTargetKeys` &
`overlapCount` bulunur. `overlapCount` alanına göre sırala ya da satırları CSV
olarak dışa aktar. Satırlar hedef sıranı izler. Her hedefin satır ekleyebilmesi
için `maxItems` değerini yeterince yüksek tut. `maxItems` bir çalıştırmayı erken
bitirirse tuttuğu profiller çalıştırmalar arasında değişebilir. Her hesabın
derinliğini `maxItemsPerTarget` ile ayarla.

### Kimin kimi takip ettiğini kontrol et

Aralarındaki takipleri kontrol etmek için kaynak & hedef hesapları listele.

```json
{
  "followCheckSources": ["elonmusk", "@nasa"],
  "followCheckTargets": ["spacex", "https://x.com/i/user/11348282"]
}
```

Çalıştırma her kaynağı her hedefle karşılaştırır, bu yüzden bu girdi 4 kontrol
yapar. Her kontrol, profil fiyatıyla 1 satır & 1 sonuçtur. Bir satırda
`isFollowing` (kaynak hedefi takip ediyor) & `isFollowedBy` (hedef geri takip
ediyor) bulunur. Satır ayrıca iki hesabın `sourceUsername`, `sourceId`,
`targetUsername` & `targetId` alanlarını taşır. Hesap olarak kullanıcı ID'si,
`@` ile ya da `@` olmadan kullanıcı adı veya profil URL'si verebilirsin. Bir
sayı, kullanıcı ID'si sayılır. Follow checks görünümü bu satırları listeler.

### Kabul edilen URL biçimleri

| URL                                         | İlişki                        |
| ------------------------------------------- | ----------------------------- |
| `https://x.com/<handle>/followers`          | `followers`                   |
| `https://x.com/<handle>/verified_followers` | `verified_followers`          |
| `https://x.com/<handle>/following`          | `following`                   |
| `https://x.com/<handle>/affiliates`         | `affiliates`                  |
| `https://x.com/<handle>`                    | `relation`, yoksa `followers` |
| `https://x.com/i/lists/<id>/members`        | `list_members`                |
| `https://x.com/i/lists/<id>/followers`      | `list_followers`              |
| `https://x.com/i/lists/<id>`                | `list_members`                |
| `https://x.com/i/communities/<id>/members`  | `community_members`           |
| `https://x.com/i/communities/<id>`          | `community_members`           |
| `<handle>/followers`                        | `followers`                   |
| `<handle>/following`                        | `following`                   |
| `<handle>/verified_followers`               | `verified_followers`          |
| `<handle>/affiliates`                       | `affiliates`                  |
| `lists/<id>/members`                        | `list_members`                |
| `lists/<id>/followers`                      | `list_followers`              |
| `communities/<id>/members`                  | `community_members`           |

`twitter.com` & `mobile.twitter.com` URL'leri de her yerde çalışır. `x.com/nasa`
gibi `https://` olmadan yazılan URL'ler de çalışır.

## Görev örnekleri

50 herkese açık görevden birini seç. Her görevin sınırlı bir girdisi & uygun bir
veri kümesi görünümü var. Her görev gerçek bir kitle veya filtreyle açılır.
Çalıştırmadan önce düzenle.

- [OpenAI takipçileri arasında yapay zeka geliştiricilerini keşfet](https://apify.com/xquik/x-follower-scraper/examples/discover-ai-builders-in-openai-followers)
- [Yapay zeka ajanları için bir X kitle veri kümesi oluştur](https://apify.com/xquik/x-follower-scraper/examples/build-agent-ready-x-audience-dataset)
- [RAG için X kitle verisi topla](https://apify.com/xquik/x-follower-scraper/examples/collect-x-audience-data-for-rag)
- [X'te yapay zeka SEO uzmanlarını bul](https://apify.com/xquik/x-follower-scraper/examples/find-ai-seo-practitioners-on-x)
- [Twitter'da kimin kimi takip ettiğini kontrol et](https://apify.com/xquik/x-follower-scraper/examples/check-who-follows-who-on-twitter)
- [Twitter takipçilerini CSV'ye aktar](https://apify.com/xquik/x-follower-scraper/examples/export-twitter-followers-to-csv)
- [Rakiplerin takipçi örtüşmesini analiz et](https://apify.com/xquik/x-follower-scraper/examples/analyze-competitor-follower-overlap)
- [X takipçileri arasında mikro fenomenleri bul](https://apify.com/xquik/x-follower-scraper/examples/find-micro-influencers-in-followers)
- [Özenle seçilmiş Twitter listelerinin üyelerini dışa aktar](https://apify.com/xquik/x-follower-scraper/examples/export-curated-twitter-list-members)
- [Herkese açık X Topluluk üyelerini analiz et](https://apify.com/xquik/x-follower-scraper/examples/analyze-public-x-community-members)
- [Yapay zeka ajanları için Topluluk üyelerini topla](https://apify.com/xquik/x-follower-scraper/examples/collect-community-members-for-ai-agents)
- [Tekrarlanabilir X takipçi anlık görüntüleri oluştur](https://apify.com/xquik/x-follower-scraper/examples/create-repeatable-follower-snapshots)

## X takipçilerini kazımak ne kadar tutar?

Xquik'in X Follower Scraper'ı her Apify planında teslim edilen profil başına
$0.00015 tutar. Apify, platform kullanımını ayrıca faturalandırır. Xquik, teslim
edilen her veri satırı için 1 kez ücret alır. Ayrı bir Xquik aboneliği gerekmez
& Xquik başlatma ücreti eklemez. Başlatmalar, hedefler & ilişki seçimi ayrı bir
sorgu ücreti eklemez. Bir takip kontrolü aynı fiyatla 1 satırdır.

Daha fazla hacim için daha çok ön ödemeli kullanım içeren bir
[Apify planı seç](https://apify.com/pricing?fpr=xquik).

Tek bir çalıştırma birçok hedefi okuyabilir. Sınırlar, tekilleştirme &
faturalama tüm hedeflerde doğru kalır.

- Filtreler bir profil veri kümene girmeden önce çalışır, bu yüzden filtrelenen
  satırlar ücretsizdir.
- Sayı filtreleri `minFollowers`, `maxFollowers`, `minFollowing`,
  `maxFollowing`, `minStatuses`, `maxStatuses` & `minAccountAgeDays`
  alanlarıdır.
- Profil filtreleri `verifiedOnly`, `blueVerifiedOnly`, `verifiedType`,
  `bioContains`, `locationContains`, `usernameContains`, `hasWebsite` &
  `hasLocation` alanlarıdır.
- E-posta filtreleri `hasEmail`, `businessEmailOnly` & `emailDomains`
  alanlarıdır. Profili bir e-posta yayımlayan satırları tutarlar.
- Actor, hedefler arasındaki tekrarları yazmadan önce kaldırır. Onları tutmak
  için `dedupeAcrossTargets: false` ayarla.
- Xquik, veri kümesinin reddettiği satırları asla faturalamaz.
- Tanılamalar `diagnostics` çıktısında ücretsizdir.
- Girdisiz, geçersiz girdili & sıfır çıktılı çalıştırmalar, ücretsiz
  `diagnostics` çıktısına ne yapman gerektiğini söyleyen 1 kayıt yazar.

Sorun yaşayan veya büyük bir çalıştırma ayrıca bir `run-report` kaydı yazar. Bu
kayıttaki `estimatedChargeUsd`, Apify'ın Actor'a bildirdiği canlı olay başına
ödeme fiyatını kullanır. Sorunsuz biten küçük bir çalıştırma bu kaydı atlar &
Apify kullanımından tasarruf eder. Kaydı her çalıştırmada yazmak için
`alwaysSaveRunRecords` seçeneğini aç.

## Karşılaştırma testi

Xquik'in X Follower Scraper'ı, takipçi kazıyan diğer 9 Actor'ı maliyette & hızda
geride bıraktı. Medyan tam satırında 38 alan vardı, bu da diğerlerinin
medyanının 2,5 katı.

- `xquik/x-follower-scraper` işe yarar profil başına $0.000155, saniyede 100,0
  profil & satır başına 38 alanla 1.000 işe yarar profil teslim etti.
  [Çalıştırmayı gör](https://console.apify.com/view/runs/z5ELS2u5sgjuhAFHN)
- `xquik/x-follower-scraper` işe yarar profil başına $0.000155, saniyede 77,9
  profil & satır başına 38 alanla 1.000 işe yarar profil teslim etti.
  [Çalıştırmayı gör](https://console.apify.com/view/runs/Htim4jqodU6ZPjQiQ)
- `b2b_leads/X-Real-Time-Data` işe yarar profil başına $0.000388, saniyede 3,1
  profil & satır başına 21 alanla 286 işe yarar profil teslim etti.
  [Çalıştırmayı gör](https://console.apify.com/view/runs/IkQButA6cVz4ys4GM)
- `kaitoeasyapi/premium-x-follower-scraper-following-data` işe yarar profil
  başına $0.000506, saniyede 21,9 profil & satır başına 50 alanla 356 işe yarar
  profil teslim etti.
  [Çalıştırmayı gör](https://console.apify.com/view/runs/cJgj15HLBA50LEUf0)
- `api-ninja/x-twitter-followers-scraper` işe yarar profil başına $0.000809,
  saniyede 7,0 profil & satır başına 8 alanla 350 işe yarar profil teslim etti.
  [Çalıştırmayı gör](https://console.apify.com/view/runs/XjJ4UPKAILSz0Droz)
- `altimis/scweet` işe yarar profil başına $0.000922, saniyede 1,1 profil &
  satır başına 21 alanla 332 işe yarar profil teslim etti.
  [Çalıştırmayı gör](https://console.apify.com/view/runs/qVGvT7TPAJEHCuR42)
- `apidojo/twitter-user-scraper` işe yarar profil başına $0.001160, saniyede 7,3
  profil & satır başına 25 alanla 323 işe yarar profil teslim etti.
  [Çalıştırmayı gör](https://console.apify.com/view/runs/Xnf7rh8jK6764gP1f)
- `atomus/twitter-scraper` işe yarar profil başına $0.001272, saniyede 6,2
  profil & satır başına 13 alanla 323 işe yarar profil teslim etti.
  [Çalıştırmayı gör](https://console.apify.com/view/runs/MWz1l0cTcfPcEnaiH)
- `practicaltools/cheap-simple-twitter-api` işe yarar profil başına $0.002036,
  saniyede 6,5 profil & satır başına 4 alanla 283 işe yarar profil teslim etti.
  [Çalıştırma 1](https://console.apify.com/view/runs/Zhvi7LsfpHdQNKcGb),
  [Çalıştırma 2](https://console.apify.com/view/runs/IsJj4fa8pFUG7uhlK),
  [Çalıştırma 3](https://console.apify.com/view/runs/2W7n8fpEqoxiXq6oX)
- `maximedupre/twitter-scraper` işe yarar profil başına $0.002192, saniyede 2,1
  profil & satır başına 15 alanla 320 işe yarar profil teslim etti.
  [Çalıştırma 1](https://console.apify.com/view/runs/HblUkhgI2svp1LBGs),
  [Çalıştırma 2](https://console.apify.com/view/runs/37yQFzgydzJoWfa39),
  [Çalıştırma 3](https://console.apify.com/view/runs/mtBoKcocaM4BUzZmm)
- `seemuapps/x-followers-following-scraper` işe yarar profil başına $0.003504,
  saniyede 3,9 profil & satır başına 9 alanla 286 işe yarar profil teslim etti.
  [Çalıştırma 1](https://console.apify.com/view/runs/1r3je034X2qhFGgLj),
  [Çalıştırma 2](https://console.apify.com/view/runs/dc4ztVP3n2eemgiNQ),
  [Çalıştırma 3](https://console.apify.com/view/runs/gWPiBT00G7D9IJ0Cj)

Her Actor NASA, SpaceX & esa'nın takipçilerini okudu. Diğer Actor'lar
2026-09-28'de çalıştı. Xquik'in çalıştırmaları `outputMode: "full"` ayarladı &
2026-09-29'da çalıştı. Tüm çalıştırmalar Bronze katmanını kullandı. İşe yarar
profil benzersizdir, en az 30 günlüktür, en az 1 takipçisi & en az 1 gönderisi
vardır. Maliyet, müşterinin işe yarar profil başına toplam harcamasıdır.
Bizimkine müşterilerimizin ödediği Apify kullanımı dahil. 3 çalıştırması olan
bir satır bunları toplar. Satır başına alan, iç içe olanlar dahil boş olmayan
alanların medyan sayısıdır. Bir liste 1 alan sayılır. Girdisini, günlüğünü &
veri kümesini görmek için bir çalıştırmayı aç.

## Girdi

Input sekmesi tüm seçenekleri listeler. `startUrls`, `twitterHandles`,
`userIds`, `listIds` veya `communityIds` alanlarından en az 1 tanesini ya da
`followCheckSources` & `followCheckTargets` alanlarının ikisini birden ekle.
Belgelenmiş takma adları da sayılır. Diğer tüm alanlar isteğe bağlıdır.

Aşağıdaki girdileri dene.

- `relation: "followers"` ile `twitterHandles` alanına bir rakibin kullanıcı
  adını ekle.
- Onaylı profiller için Start URLs alanına
  `https://x.com/<handle>/verified_followers` yapıştır.
- Üyelerini incelemek için Start URLs alanına bir liste URL'si yapıştır.
- 2 veya daha fazla kullanıcı adı ekle. Ortak bir profil, onu ilk döndüren
  hedefin altında 1 kez görünür. Bu hedef çalıştırmalar arasında değişebilir.
  Eşleşen tüm hedeflerle 1 sabit satır için `dedupeMode: "merge"` kullan. Hedef
  başına 1 satır tutmak için `dedupeAcrossTargets: false` ayarla.

### Console & API girdisi

Console formunda aşağıdaki kontroller var.

- Start URLs alanı URL metni veya `{ "url": "..." }` nesnesi kabul eder. JSON
  düzenleyicisi iki API biçimini de korur.
- Relation, Output Mode & Dedupe Mode sabit seçenekli listelerdir.
- Relations, çok ilişkili çalıştırmalar için çoklu seçim listesidir.
- Sonuç sınırları 1 veya daha büyük tam sayı kabul eder.
- Sayısal profil filtreleri 0 veya daha büyük tam sayı kabul eder.

Yeni entegrasyonlarda kanonik alanları kullan. Takma adlar JSON, API, SDK,
otomasyon & görev girdilerinde yine çalışır. `outputVariant` & `includeRaw`,
Output Mode takma adlarıdır. `dedupeAcrossTargets`, bir Dedupe Mode takma
adıdır. Görsel form, kanonik bir kontrolün tekrarı olan takma adları gizler.
Takma ad içeren mevcut JSON & kayıtlı görev girdileri çalışmaya devam eder.
`dedupeAcrossTargets: false` veya `dedupeMode: "none"` içeren kayıtlı girdiler
hedef başına 1 satır tutar.

### Başka bir takipçi Actor'ından geçiş yap

Zaten kullandığın girdiyi yapıştır. Xquik'in X Follower Scraper'ı, takipçi
kazıyan diğer X Actor'larının kullandığı alan adlarını okur. Bunları kendi
alanlarına eşler. Belgelenmiş varsayılan yine kanonik adlardır. Bir takma ad
asla bir alanı düşürmez & ödediğin tutarı asla değiştirmez.

Her satır önce zaten kullandığın alanları, sonra eşlendikleri alanı yazar.

- `twitterHandles`, `usernames`, `user_names`, `handles`, `userNameList` ve
  `screenNames` alanları `twitterHandles` alanına eşlenir.
- Tek metin olarak verilen `username`, `handle` ve `screenName` alanları
  `twitterHandles` alanına eşlenir.
- `twitterUserIds`, `user_ids` ve `userIdList` alanları `userIds` alanına
  eşlenir.
- Tek metin olarak verilen `user_id` ve `userId` alanları `userIds` alanına
  eşlenir.
- `startUrls`, `urls`, `targets`, `profileUrls` ve `accountUrls` alanları
  `startUrls` alanına eşlenir.
- Tek metin olarak verilen `profileUrl` alanı `startUrls` alanına eşlenir.
- `getFollowers` ve `getFollowing` alanları `relations` alanına eşlenir.
- `followers` veya `following` değerli `type` alanı `relation` alanına eşlenir.
- `relationship`, `relationshipType`, `listType` ve `scrape_type` alanları
  `relation` alanına eşlenir.
- `relationships` alanı `relations` alanına eşlenir.
- `followers`, `following` veya `both` değerli `mode` alanı `relation` veya
  `relations` alanına eşlenir.
- `followers`, `following` veya `affiliates` değerli `category` alanı `relation`
  alanına eşlenir.
- `profile_urls` alanı bağlantılar için `startUrls`, kullanıcı adları için
  `twitterHandles` alanına eşlenir.
- `maxResults`, `max_results`, `resultsLimit`, `count` ve `max_items` alanları
  `maxItems` alanına eşlenir.
- `per_profile_limit`, `maxItemsPerUser`, `maxUsersPerAccount`,
  `max_followers_per_user`, `max_following_per_user` ve `follower_limit`
  alanları `maxItemsPerTarget` alanına eşlenir. 0, hesap başına sınır koymaz.
  `max_following_per_user` ayrıca `relation` alanını `following` yapar.
- `scrapeAllResults` hedef başına sınır koymaz.
- `minTweets` alanı `minStatuses` alanına eşlenir.
- `includeRawUser` alanı `includeRaw` alanına eşlenir.
- `outputVariant` alanı `outputMode` alanına eşlenir.
- `requireEmail` alanı `hasEmail` alanına eşlenir.
- `requireWebsite` alanı `hasWebsite` alanına eşlenir. Web sitesi alanında
  herhangi bir bağlantı olan profili tutar & çalıştırma durumu bunu söyler.
- `onlyVerified` ve `blue_verified_only` alanları `blueVerifiedOnly` alanına
  eşlenir. `source_mode` içeren bir girdide `blue_verified_only` etkisiz kalır.
- `verification` alanında `any_verified` değeri `verifiedOnly` alanını,
  `blue_verified` değeri `blueVerifiedOnly` alanını, `business` & `government`
  değerleri `verifiedType` alanını ayarlar. `unverified` çalıştırmayı hiçbir şey
  okumadan veya ücretlendirmeden durdurur.
- `bioKeywords` alanı `bioContains` alanına eşlenir. Terimlerinden herhangi 1
  tanesinin eşleşmesi yeter.
- 1 değerli `locationKeywords` alanı `locationContains` alanına eşlenir. Daha
  fazla değer çalıştırmayı hiçbir şey okumadan veya ücretlendirmeden durdurur.
- Liste olarak verilen `emailDomains` alanı `emailDomains` alanına eşlenir.
- `outputEmail` ve `resolveShortLinks` için alan gerekmez. Her satır kendi
  e-postalarını & X'in tam bağlantılarını taşır.
- `findEmails` ve `extractEmails` için alan gerekmez. Satırlar, profilin X'te
  yayımladığı e-postaları taşır. Çalıştırma durumu, Actor'ın bağlantılı hiçbir
  siteyi okumadığını söyler.
- `validateEmails` için alan gerekmez. Actor hiçbir posta kutusunu denetlemediği
  için çalıştırma durumu, e-postaların yayımlandığı gibi geldiğini söyler.

Yapıştırdığın girdi şöyle davranır.

- Başka kelimelerle adlandırılan bir liste, bu Actor'ın ona verdiği ad olarak
  okunur. `followings`, `Verified Followers` & `verifiedFollowers`, `relation`
  içinde de `following` & `verified_followers` olarak okunur.
- Bir takma adı & kanonik alanını birlikte ayarlarsan kanonik değer kazanır.
  Çalıştırma günlüğü kaybeden takma adı yazar.
- Actor'ın okumadığı bir liste, örneğin `mutuals`, çalıştırmayı hiçbir şey
  okumadan veya ücretlendirmeden durdurur.
- Başka bir Actor'ın işi olan bir mod da çalıştırmayı aynı şekilde durdurur.
  `source_mode` bunu `search` & `profiles` için yapar. `mode` bunu `profiles` &
  `all` için yapar. `category` bunu `tweets`, `user_info` veya `replies` gibi
  bir iş için yapar. Mesaj, kullanman gereken Actor'ı söyler.

2 ad burada başka bir anlama gelir. Bazı Actor'larda `maxFollowers` &
`maxFollowing`, bir çalıştırmanın kaç satır döndüreceğini sınırlar. Xquik'in X
Follower Scraper'ında ise profilleri takipçi & takip edilen sayılarına göre
filtreler. Satırları sınırlamak için `maxItems` kullan. `maxFollowers` ayarlayıp
satır sınırı koymayan bir çalıştırma, günlüğünde & son durumunda hesapları
filtrelediğini söyler. Actor'da sayfa birimi yok, bu yüzden `maxPages` yerine
`maxItems` kullan.

### Her zaman en güncel derlemeyi kullan

Store çalıştırmaları Xquik'in X Follower Scraper'ının `latest` derlemesini
kullanır. API çağrılarında derleme seçimini atla ya da `build=latest` gönder.
Eski bir derlemeye sabitlenmiş görevleri & entegrasyonları güncelle. Sabitlenmiş
derlemeler asla kendiliğinden değişmez.

## Çıktı

Her profil bir JSON nesnesidir. Kompakt mod normalize edilmiş herkese açık
alanları, şema sürümü alanlarını & varsa kaynak metadata'sını döndürür.

Veri kümesi & run-report şemaları dönen her alanı açıklar. Basit alanlar,
ajanlar & üretilen entegrasyonlar için örnekler de taşır.

Aşağıdaki örnek değerler temsilidir. Satırların çalıştırma anındaki canlı veriyi
taşır. Kompakt bir satır şöyle görünür.

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
  "profilePicture": "https://..._normal.jpg",
  "profilePictureOriginal": "https://....jpg",
  "coverPicture": "https://...",
  "createdAt": "Tue Jun 02 20:12:29 +0000 2009",
  "sourceTarget": "nasa",
  "sourceRelation": "followers",
  "sourceUrl": "https://x.com/nasa/followers"
}
```

Tekilleştirmenin birleştirme modu örtüşme alanları ekler.

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

Bir takip kontrolü satırı şöyle görünür.

```json
{
  "id": "followCheck:elonmusk:spacex",
  "resultType": "followCheck",
  "source": "elonmusk",
  "target": "spacex",
  "sourceId": "44196397",
  "sourceUsername": "elonmusk",
  "targetId": "34743251",
  "targetUsername": "spacex",
  "isFollowing": true,
  "isFollowedBy": false,
  "schemaVersion": 1
}
```

Apify veri kümesini JSON, CSV, Excel veya HTML olarak dışa aktar.

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

## Çalıştırma seçenekleri

Harcamaya kesin bir sınır koymak için Apify API'de `maxTotalChargeUsd` ayarla.
Console'da aynı sınırın adı Max cost per run. Apify bu sınırı Xquik'in X
Follower Scraper'ına `ACTOR_MAX_TOTAL_CHARGE_USD` olarak iletir. Actor, sınırı
aşan satırları kabul etmeden önce durur. Harcama sınırının izin verdiği kadar
profil almak için `maxItems` alanını boş bırak. `maxItems` & `maxItemsPerTarget`
değerlerini yalnızca bütçenin izin verdiğinden daha az profil istediğinde
ayarla.

- Faturalanan veri kümesini daraltmak için `minFollowers`, `verifiedType` &
  `bioContains` gibi profil filtrelerini birleştir.
- Varsayılan olarak çalıştırmalar hedefler arasında yalnızca benzersiz
  profilleri tutar. Hedef başına 1 satır tutmak için
  `dedupeAcrossTargets: false` ayarla.
- Eşleşen tüm kaynak hedefleriyle profil başına 1 satır için
  `dedupeMode: "merge"` ayarla.
- Varsa isteğe bağlı profil alanları için `outputMode: "full"` ayarla. Bunlar
  sabitlenmiş gönderi ID'lerini, entity verilerini & profil metadata'sını
  kapsar.
- Normalize alanların yanına temizlenmiş bir `raw` nesnesi eklemek için
  `outputMode: "raw"` veya `includeRaw: true` ayarla.
- Tekrarlanan çalıştırmalar zamanla & profil ID'lerini karşılaştırmak için her
  veri kümesini sakla. Xquik izleyicileri desteklenen gönderi & profil
  olaylarını gönderir, takipçi listesi değişikliklerini göndermez.

## Boş, kısmi & durdurulan çalıştırmalar

Xquik'in X Follower Scraper'ı boş, kısmi & durdurulan çalıştırmaları ücretsiz
tanılamalarla açıklar. Actor'ın başarıyla bitmesi teslimatı doğrular, tüm
verinin çekildiğini değil.

Kesilen bir çalıştırma ücretsiz bir `partial` tanılaması yazar. Teslim edilmiş
sonuçlar veri kümesinde kalır. Yeniden denemeden önce `availableResults`,
`failedTargets`, `retryable` & `nextAction` alanlarını oku.

Çalıştırma durumu, çalıştırmanın neden durduğunu söyler. Ücretlendirilen
sonuçları, atlanan tekrarları & okunan hedefleri de sayar. Durum, erken durmanın
her nedenini söyler. `stopCauses` her nedeni kendi `message`, `retryable` &
`nextAction` alanlarıyla listeler. Nedenler `target_not_found`,
`target_suspended`, `target_protected`, `target_failed` & `deadline_reached`
olabilir. `target_suspended`, X'in askıya aldığı hesapları belirtir. Bulunamayan
veya askıya alınan bir hesap, listeye yalnızca çalıştırmayı başka bir neden
durdurduysa girer. Nedenlerden biri yeniden denenebiliyorsa çalıştırma da
`retryable` olur.

X, korumalı bir hesabın listelerini gizli tutar. O hedef 1 ücretsiz tanılamada
`target_protected` alır & çalıştırma diğer hedefleri okur.

`failedTargets`, bir hatadan sonra duran hedefleri sayar. Bu çalıştırmalar
`completionReason: "partial_failure"` kullanır. Teslim ettikleri profiller
faturalanabilir veri satırları olarak kalır.

Varsayılan Apify zaman aşımı `0` olduğu için çalıştırmaların süre sınırı yoktur.
Çalıştırma üst sınıra ulaşana veya profiller bitene kadar devam eder. Yine de
sonlu bir zaman aşımı ayarlayabilirsin. O zaman
`completionReason: "deadline_reached"` bu sınırın yaklaştığı anlamına gelir.
Çalıştırma profilleri & raporu kaydeder, sonra sınırdan önce düzgünce çıkar.
Teslim edilen profiller 1 kez faturalanır.

Sorunlu çalıştırmalar, girdisiz ve geçersiz girdili çıkışlar dahil her zaman
`run-report` yazar. `run-report` ayrıca yayımlanan Actor kaynağının tam sürümünü
taşıyan bir `version` alanı içerir.

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

### X API anahtarı gerekir mi?

Hayır. X API anahtarı, giriş veya kimlik bilgisi gerekmez.

### Bir çalıştırmayı ne sınırlar?

Öğe sınırın & Apify harcama sınırın çalıştırmayı durdurur. Apify hesap &
platform sınırları yine geçerlidir.

### Ne kadar hızlı?

Xquik'in X Follower Scraper'ının hızı hedef büyüklüğüne, filtrelere & X'in
erişilebilirliğine bağlıdır. 2 [karşılaştırma testi](#karşılaştırma-testi)
çalıştırması saniyede 77,9 & 100,0 işe yarar profile ulaştı.

### Çalıştırmam neden sınırımdan az satır döndürüyor?

`minFollowers`, `verifiedOnly` & `bioContains` gibi filtreler yazmadan önce
uygulanır. Daha çok sonuç almak için onları gevşet. Filtreli bir çalıştırma,
`maxScan` ayarlamadıkça liste başına 100.000 taranan profilde de durur. Xquik'in
X Follower Scraper'ı hedefler arasındaki tekrarları da kaldırır.

### Tek bir hesaptan kaç takipçi kazıyabilirim?

X o hesap için kaç tane gösteriyorsa o kadar. Çalıştırma, üst sınırına, harcama
sınırına veya listenin sonuna kadar devam eder. `maxItemsPerTarget` yalnızca her
hedefi ayrı ayrı sınırlar. Filtreli bir çalıştırma, `maxScan` ayarlamadıkça
liste başına 100.000 taranan profilde durur.

### Actor geçici hataları yeniden dener mi?

Evet. Geçici X hatalarından kendiliğinden toparlanır. Kalıcı bir hatadan sonra
çalıştırma kısmi sonuçlarını korur.

### Apify çalıştırma süresi sınırına yaklaşınca ne olur?

Xquik'in X Follower Scraper'ı kendi başına daha kısa bir süre sınırı eklemez.
Sınırından önce profilleri kaydeder, raporu yazar & çıkar. Veri kümesine hiç
ulaşmayan satırlar ücretsizdir.

### Kaldığım yerden devam edebilir miyim?

Henüz değil. Aynı hedefteki yeni bir çalıştırma baştan başlar.

### Bunu çalıştırmak için Apify API'yi kullanabilir miyim?

Evet. Python, JavaScript & cURL örnekleri için
[API sekmesine](https://apify.com/xquik/x-follower-scraper/api) bak.

### Düzenli kazımaları zamanlayabilir miyim?

Evet. Bu Actor'ı bir cron takvimiyle çalıştırmak için Apify'ın yerleşik
[zamanlama](https://docs.apify.com/platform/schedules) özelliğini kullan.
Takipçi değişikliklerini bulmak için saklanan veri kümelerini karşılaştır.

### X verisini kazımak yasal mı?

Xquik'in X Follower Scraper'ı herkese açık X profil alanlarını çeker.
Sonuçlarda, kullanıcının kendi yazdığı konumlar dahil kişisel veri olabilir.
Amacının yasal olduğundan emin ol & geçerli gizlilik kurallarına uy. Emin
değilsen yetkin bir hukukçuya danış.

### Nereden yardım alırım?

Çalıştırma ID'siyle
[Issues sekmesinde](https://apify.com/xquik/x-follower-scraper/issues) bir issue
aç.

### API belgeleri nerede?

[API sekmesinde](https://apify.com/xquik/x-follower-scraper/api) bu Actor için
Python, JavaScript & cURL örnekleri var. Xquik'in web sitesini
[Apify profilinde](https://apify.com/xquik) bul.
