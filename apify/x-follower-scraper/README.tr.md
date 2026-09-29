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
scraper hizmetidir. Xquik'in X Follower Scraper'ı takipçileri, takip edilenleri,
Liste üyelerini, aboneleri ve Topluluk üyelerini toplar. Herkese açık
karşılaştırma testleri, takipçi kazıyan 10 Actor arasında en ucuz ve en
hızlısının bu olduğunu kanıtlıyor. [Aşağıdaki karşılaştırma
testinin](#karşılaştırma-testi) gösterdiği gibi satırları
(`outputMode: "full"`), medyan Actor'ın 2,5 katı alan taşır. Diğer Apify
Actor'larının çoğu, filtrelemeden veya tekilleştirmeden önce ücret alır. Xquik
yalnızca teslim edilen, benzersiz ve filtrene uyan sonuçlar için ücret alır.

X (Twitter) takipçilerini, takip edilenleri, onaylı takipçileri, Liste
üyelerini, Liste abonelerini ve Topluluk üyelerini kazı. Xquik'in X Follower
Scraper'ı **her Apify planında teslim edilen profil başına $0.00015'ten
başlar**. Apify, platform kullanımını ayrıca faturalandırır. X girişi gerekmez,
Xquik başlatma veya sorgu ücreti de eklemez.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## X Follower Scraper ne yapar?

Xquik'in X Follower Scraper'ı takipçiler, takip edilenler, Listeler ve
Topluluklar için erişilebilen herkese açık profil verisini döndürür. Her satır
kaynak hedefini ve ilişkisini belirtir.

### Temel davranış

- Filtreler ve tekilleştirme faturalamadan önce çalışır.
- Varsayılan olarak birden çok hedefte çıkan bir profil 1 kez görünür ve 1 kez
  ücretlenir.
- Tek bir çalıştırma kullanıcı adı, sayısal ID, URL ve kısa yol kabul eder.
- Birleştirme modu ortak profilleri, kaynakları, ilişkileri ve `overlapCount`
  değerini kaydeder.
- Çalıştırma günlükleri sayfa sürelerini `fetchDurationMs`,
  `processingDurationMs`, `pushDurationMs`, `statusDurationMs` ve
  `fullPageDurationMs` alanlarında gösterir.
- Apify çalıştırmayı yeniden başlatırsa teslim edilen satırlar ve ilerleme
  korunur.

### X Follower Scraper hangi verileri çıkarabilir?

| Alan              | Açıklama                                                    |
| ----------------- | ----------------------------------------------------------- |
| `id`              | Sayısal X kullanıcı ID'si                                   |
| `username`        | Kullanıcı adı (`@` olmadan)                                 |
| `name`            | Görünen ad                                                  |
| `description`     | Biyografi metni                                             |
| `followers`       | Takipçi sayısı                                              |
| `following`       | Takip edilen sayısı                                         |
| `statusesCount`   | Paylaşılan toplam gönderi                                   |
| `mediaCount`      | Yüklenen toplam medya                                       |
| `favouritesCount` | Verilen toplam beğeni                                       |
| `verified`        | Herkese açık Blue veya eski onay işaretinin birleşik değeri |
| `verifiedType`    | `blue`, `business`, `government` veya `none`                |
| `location`        | Kullanıcının yazdığı konum                                  |
| `url`             | Profildeki web sitesi URL'si                                |
| `profilePicture`  | Profil fotoğrafı URL'si (tam boyut)                         |
| `coverPicture`    | Kapak fotoğrafı URL'si                                      |
| `createdAt`       | X'ten gelen hesap oluşturma zaman damgası metni             |
| `sourceTarget`    | Bu profili kazıdığın kullanıcı adı / ID                     |
| `sourceRelation`  | İlişki: `followers`, `following`, `list_members`, ...       |
| `sourceUrl`       | Profilin bulunduğu tam URL                                  |
| `sourceTargets`   | Birleştirme modunda bu profille eşleşen tüm hedefler        |
| `sourceRelations` | Birleştirme modunda bu profille eşleşen tüm ilişkiler       |
| `sourceUrls`      | Birleştirme modunda bu profille eşleşen tüm kaynak URL'leri |
| `overlapCount`    | Birleştirme modunda eşleşen ilişki-hedef çifti sayısı       |
| `resultType`      | Full ve raw çıktı modlarında satır türü                     |
| `raw`             | Actor'a özgü biçimlendirmeden önceki güvenli kaynak profil  |

Satırlar herkese açık profil sözleşmesine uyar. Bu sözleşme kimlik, sayılar,
onay durumu, kullanılabilirlik, bağlı hesaplar, profesyonel veriler ve
biyografileri kapsar. Kaynak bilgisi, entity verileri ve sabitlenmiş gönderi
ID'leri de gelir. Alanların tam listesi için OpenAPI'ye bak.

`raw` alanı eklemek için `outputMode: "raw"` veya `includeRaw: true` ayarla. Bu
alan kaynak profilin güvenli bir kopyasını tutar. Varsayılan mod kompakttır.

`verifiedOnly`, herkese açık Blue ve eski onaylı profilleri kabul eder. Kaynak
bayrakları çelişirse gerçek onay durumu geçerli olur.

Satırlar yalnızca görüntüleyene ait durumu asla içermez. Xquik takip,
engelleme, sessize alma, Direkt Mesaj, bildirim ve benzeri görüntüleyen
bayraklarını kaldırır. Ham çıktı da bunları atar.

## Kullanım örnekleri

- Potansiyel müşteri verisini zenginleştir & profil başına daha çok alanla
  araştırma veri kümeleri kur. Medyan satırımızda (`outputMode: "full"`)
  2026-09-29'da 38 alan vardı. Bu, 9 başka Actor'ın medyanının 2,5 katı.
- Rakiplerin takipçilerini potansiyel müşteri araştırması için dışa aktar.
- Kendi hesabının, rakiplerinin ve tanınmış kişilerin kitlelerini karşılaştır.
- Uygun profilleri bulmak için takipçi sayısına ve onay durumuna göre filtrele.
- X Topluluk üyelerini dışa aktar.
- Araştırma için herkese açık sosyal ağ veri kümeleri oluştur.
- Takipçi kitlelerini biyografi kelimesine, konuma veya profil türüne göre ayır.

## X Follower Scraper ile takipçi verisi nasıl kazınır?

1. Apify Console'da Xquik'in X Follower Scraper'ını aç.
2. Profil, Liste veya Topluluk URL'si, X kullanıcı adı ya da sayısal ID ekle.
3. `followers` veya `verified_followers` gibi bir ilişki seç.
4. `maxItems` değerini ve gereken profil filtrelerini ayarla.
5. Çalıştırmayı başlat.
6. Veri kümesini JSON, CSV, Excel veya HTML olarak dışa aktar.

Aşağıdaki girdiler sık yapılan işleri kapsar.

### Profil veya Liste URL'si yapıştır

Profil, Liste veya Topluluk URL'lerini yapıştır. Her URL, kazınacak ilişkiyi
belirler:

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

`twitterHandles`, birçok `/<handle>/followers` hedefinin kısa yoludur.
Kullanıcı adlarını `@` ile ya da `@` olmadan yazabilirsin:

```json
{
  "twitterHandles": ["elonmusk", "nasa", "openai"],
  "relation": "followers",
  "maxItems": 1000
}
```

`relation`, her kullanıcı adı için neyin kazınacağını belirler. `followers`,
`following` veya `verified_followers` kullan.

Aynı girdi `username`, `usernames` ve `user_names` takma adlarını da kabul
eder.

### Çok ilişkili çalıştırmalar

Aynı kullanıcı adları için birden çok ilişkiyi okumak istiyorsan `relations`
ayarla:

```json
{
  "usernames": ["nasa"],
  "relations": ["followers", "following"],
  "maxItems": 1000
}
```

`getFollowers`, `getFollowing`, `getVerifiedFollowers`, `getListMembers`,
`getListFollowers` ve `getCommunityMembers` gibi boolean alanlar da çalışır.

### Sayısal kullanıcı, Liste veya Topluluk ID'siyle kazı

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

Sayısal kullanıcı ID'leri `twitterUserIds` ve `user_ids` takma adlarını da
kabul eder.

`relation` sayısal kullanıcı ID'lerine uygulanır. Liste ID'leri varsayılan
olarak üyeleri okur. Topluluk ID'leri her zaman üyeleri okur.
`maxItemsPerTarget`, ilk büyük hedefin `maxItems` sınırının tamamını
tüketmesini önler.

### Ödemeden önce filtrele

Veri kümene yalnızca uyan profillerin girmesi için filtre ekle:

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
veri kümene giren satırlar için ödersin.

`bioContains` seçeneklerini virgülle veya yeni satırla ayır. Biyografisinde
verdiğin terimlerden biri geçen profil filtreyi geçer. Eşleşme büyük ve küçük
harfe bakmaz.

### Kitle örtüşmesini bul

Rakipleri, Listeleri, Toplulukları veya ilişki türlerini karşılaştırmak için
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

Çıktıda her benzersiz profil için 1 satır olur. Ortak profillerde
`sourceTargets`, `sourceRelations`, `sourceUrls`, `sourceTargetKeys` ve
`overlapCount` bulunur. `overlapCount` alanına göre sırala ya da satırları CSV
olarak dışa aktar. Her hedefin satır ekleyebilmesi için `maxItems` değerini
yeterince yüksek tut. Her hesabın derinliğini `maxItemsPerTarget` ile ayarla.

### Kabul edilen URL biçimleri

| URL                                         | İlişki                                           |
| ------------------------------------------- | ------------------------------------------------ |
| `https://x.com/<handle>/followers`          | `followers`                                      |
| `https://x.com/<handle>/verified_followers` | `verified_followers`                             |
| `https://x.com/<handle>/following`          | `following`                                      |
| `https://x.com/<handle>`                    | varsayılan `relation` (ayarlanmamışsa followers) |
| `https://x.com/i/lists/<id>/members`        | `list_members`                                   |
| `https://x.com/i/lists/<id>/followers`      | `list_followers`                                 |
| `https://x.com/i/lists/<id>`                | `list_members`                                   |
| `https://x.com/i/communities/<id>/members`  | `community_members`                              |
| `https://x.com/i/communities/<id>`          | `community_members`                              |
| `<handle>/followers`                        | `followers`                                      |
| `<handle>/following`                        | `following`                                      |
| `<handle>/verified_followers`               | `verified_followers`                             |
| `lists/<id>/members`                        | `list_members`                                   |
| `lists/<id>/followers`                      | `list_followers`                                 |
| `communities/<id>/members`                  | `community_members`                              |

`twitter.com` ve `mobile.twitter.com` URL'leri de her yerde çalışır.
`x.com/nasa` gibi `https://` olmadan yazılan URL'ler de çalışır.

## Görev örnekleri

50 herkese açık görevden birini seç. Her görevin sınırlı bir girdisi ve uygun
bir veri kümesi görünümü var. Her görev gerçek bir kitle veya filtreyle açılır.
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

## X takipçilerini kazımak ne kadar tutar?

Xquik'in X Follower Scraper'ı her Apify planında teslim edilen profil başına
$0.00015 tutar. Apify, platform kullanımını ayrıca faturalandırır. Xquik,
teslim edilen her veri satırı için 1 kez ücret alır. Ayrı bir Xquik aboneliği
gerekmez, Xquik başlatma ücreti de eklemez. Başlatma, hedef ve ilişki seçimi
ayrı bir sorgu ücreti getirmez.

Tek bir çalıştırma birçok hedefi okuyabilir. Sınırlar, tekilleştirme, kaynak
bilgisi ve faturalama tüm hedeflerde doğru kalır.

- Filtreler profil veri kümene girmeden önce çalışır, bu yüzden filtrelenen
  satırlar ücretsizdir.
- Sayı filtreleri `minFollowers`, `maxFollowers`, `minFollowing`,
  `maxFollowing`, `minStatuses`, `maxStatuses` ve `minAccountAgeDays`
  alanlarıdır.
- Profil filtreleri `verifiedOnly`, `verifiedType`, `bioContains`,
  `locationContains`, `usernameContains`, `hasWebsite` ve `hasLocation`
  alanlarıdır.
- Actor, hedefler arasındaki tekrarları yazmadan önce kaldırır. Onları tutmak
  için `dedupeAcrossTargets: false` ayarla.
- Xquik, veri kümesinin reddettiği satırları asla faturalamaz.
- Tanılamalar `diagnostics` çıktısında ücretsizdir.
- Girdisiz, geçersiz girdili ve sıfır çıktılı çalıştırmalar, ücretsiz
  `diagnostics` çıktısına ne yapman gerektiğini söyleyen 1 kayıt yazar.

Sorun yaşayan veya büyük bir çalıştırma ayrıca bir `run-report` kaydı yazar.
Bu kayıttaki `estimatedChargeUsd`, Apify'ın Actor'a bildirdiği canlı olay
başına ödeme fiyatını kullanır. Sorunsuz biten küçük bir çalıştırma bu kaydı
atlar, böylece Apify kullanımı azalır. Kaydı her çalıştırmada almak için
`alwaysSaveRunRecords` seçeneğini aç.

## Karşılaştırma testi

Xquik'in X Follower Scraper'ı, takipçi kazıyan diğer 9 Actor'ı maliyette ve
hızda geride bıraktı. Medyan satırında (`outputMode: "full"`) 38 alan vardı. Bu,
diğerlerinin medyanının 2,5 katı.

| Actor                                                  | İşe yarar profil | İşe yarar profil başına maliyet | Saniyede işe yarar profil | Satır başına alan | Herkese açık çalıştırma                                                                                                                                                                                             |
| ------------------------------------------------------ | ---------------: | ------------------------------: | ------------------------: | ----------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| xquik/x-follower-scraper                               |            1.000 |                       $0.000155 |                     100.0 |                38 | [Çalıştırmayı gör](https://console.apify.com/view/runs/z5ELS2u5sgjuhAFHN)                                                                                                                                           |
| xquik/x-follower-scraper                               |            1.000 |                       $0.000155 |                      77.9 |                38 | [Çalıştırmayı gör](https://console.apify.com/view/runs/Htim4jqodU6ZPjQiQ)                                                                                                                                           |
| b2b_leads/X-Real-Time-Data                             |              286 |                       $0.000388 |                       3.1 |                21 | [Çalıştırmayı gör](https://console.apify.com/view/runs/IkQButA6cVz4ys4GM)                                                                                                                                           |
| kaitoeasyapi/premium-x-follower-scraper-following-data |              356 |                       $0.000506 |                      21.9 |                50 | [Çalıştırmayı gör](https://console.apify.com/view/runs/cJgj15HLBA50LEUf0)                                                                                                                                           |
| api-ninja/x-twitter-followers-scraper                  |              350 |                       $0.000809 |                       7.0 |                 8 | [Çalıştırmayı gör](https://console.apify.com/view/runs/XjJ4UPKAILSz0Droz)                                                                                                                                           |
| altimis/scweet                                         |              332 |                       $0.000922 |                       1.1 |                21 | [Çalıştırmayı gör](https://console.apify.com/view/runs/qVGvT7TPAJEHCuR42)                                                                                                                                           |
| apidojo/twitter-user-scraper                           |              323 |                       $0.001160 |                       7.3 |                25 | [Çalıştırmayı gör](https://console.apify.com/view/runs/Xnf7rh8jK6764gP1f)                                                                                                                                           |
| atomus/twitter-scraper                                 |              323 |                       $0.001272 |                       6.2 |                13 | [Çalıştırmayı gör](https://console.apify.com/view/runs/MWz1l0cTcfPcEnaiH)                                                                                                                                           |
| practicaltools/cheap-simple-twitter-api                |              283 |                       $0.002036 |                       6.5 |                 4 | [Çalıştırma 1](https://console.apify.com/view/runs/Zhvi7LsfpHdQNKcGb), [Çalıştırma 2](https://console.apify.com/view/runs/IsJj4fa8pFUG7uhlK), [Çalıştırma 3](https://console.apify.com/view/runs/2W7n8fpEqoxiXq6oX) |
| maximedupre/twitter-scraper                            |              320 |                       $0.002192 |                       2.1 |                15 | [Çalıştırma 1](https://console.apify.com/view/runs/HblUkhgI2svp1LBGs), [Çalıştırma 2](https://console.apify.com/view/runs/37yQFzgydzJoWfa39), [Çalıştırma 3](https://console.apify.com/view/runs/mtBoKcocaM4BUzZmm) |
| seemuapps/x-followers-following-scraper                |              286 |                       $0.003504 |                       3.9 |                 9 | [Çalıştırma 1](https://console.apify.com/view/runs/1r3je034X2qhFGgLj), [Çalıştırma 2](https://console.apify.com/view/runs/dc4ztVP3n2eemgiNQ), [Çalıştırma 3](https://console.apify.com/view/runs/gWPiBT00G7D9IJ0Cj) |

Her Actor NASA, SpaceX & esa'nın takipçilerini okudu. Diğer Actor'lar
2026-09-28'de çalıştı. Xquik'in çalıştırmaları 2026-09-29'da
`outputMode: "full"` ile çalıştı. Tüm çalıştırmalar Bronze katmanındaydı. İşe
yarar profil benzersizdir, en az 30 günlüktür, en az 1 takipçisi & 1 gönderisi
vardır. Maliyet, müşterinin işe yarar profil başına toplam harcamasıdır.
Bizimkine müşterilerimizin ödediği Apify kullanımı dahil. 3 çalıştırmalı bir
satır, hepsini toplar. Satır başına alan, boş olmayan alanların medyan
sayısıdır, iç içe olanlar dahil. Bir liste 1 alan sayılır. Girdisini, günlüğünü
& veri kümesini görmek için bir çalıştırmayı aç.

## Girdi

Input sekmesi tüm seçenekleri listeler. `startUrls`, `twitterHandles`,
`userIds`, `listIds` veya `communityIds` alanlarından en az 1 tanesini doldur.
Belgelenmiş takma adları da sayılır. Diğer tüm alanlar isteğe bağlıdır.

Şu girdileri dene:

- `relation: "followers"` ile `twitterHandles` alanına bir rakibin kullanıcı
  adını ekle.
- Onaylı profiller için Start URLs alanına
  `https://x.com/<handle>/verified_followers` yapıştır.
- Üyelerini incelemek için Start URLs alanına bir Liste URL'si yapıştır.
- 2 veya daha fazla kullanıcı adı ekle. Ortak bir profil ilk hedefin altında 1
  kez görünür. Eşleşen tüm hedeflerle 1 satır tutmak için
  `dedupeMode: "merge"` kullan. Hedef başına 1 satır tutmak için
  `dedupeAcrossTargets: false` ayarla.

### Console ve API girdisi

Console formunda şu kontroller var:

- Start URLs alanı URL metni veya `{ "url": "..." }` nesnesi kabul eder. JSON
  düzenleyicisi iki API biçimini de korur.
- Relation, Output Mode ve Dedupe Mode sabit seçenekli listelerdir.
- Relations, çok ilişkili çalıştırmalar için çoklu seçim listesidir.
- Sonuç sınırları 1 veya daha büyük tam sayı kabul eder.
- Sayısal profil filtreleri 0 veya daha büyük tam sayı kabul eder.

Yeni entegrasyonlarda kanonik alanları kullan. Takma adlar JSON, API, SDK,
otomasyon ve görev girdilerinde yine çalışır. `outputVariant` ve `includeRaw`,
Output Mode takma adlarıdır. `dedupeAcrossTargets`, bir Dedupe Mode takma
adıdır. Görsel form, kanonik bir kontrolün tekrarı olan takma adları gizler.
Takma ad içeren mevcut JSON ve kayıtlı görev girdileri çalışmaya devam eder.
`dedupeAcrossTargets: false` veya `dedupeMode: "none"` içeren kayıtlı girdiler
hedef başına 1 satır tutar.

### Başka bir takipçi Actor'ından geçiş yap

Zaten kullandığın girdiyi yapıştır. Xquik'in X Follower Scraper'ı, takipçi
kazıyan diğer X Actor'larının kullandığı alan adlarını okur. Bunları kendi
alanlarına eşler. Belgelenmiş varsayılan yine kanonik adlardır. Bir takma ad
asla bir alanı düşürmez ve ödediğin tutarı değiştirmez.

| Zaten kullandığın alan                                                                | Xquik bunu şöyle okur  |
| ------------------------------------------------------------------------------------- | ---------------------- |
| `twitterHandles`, `usernames`, `user_names`, `handles`, `userNameList`, `screenNames` | `twitterHandles`       |
| tek metin olarak `username`, `handle`, `screenName`                                   | `twitterHandles`       |
| `twitterUserIds`, `user_ids`, `userIdList`                                            | `userIds`              |
| tek metin olarak `user_id`, `userId`                                                  | `userIds`              |
| `startUrls`, `urls`, `targets`, `profileUrls`, `accountUrls`                          | `startUrls`            |
| tek metin olarak `profileUrl`                                                         | `startUrls`            |
| `getFollowers`, `getFollowing`                                                        | `relations`            |
| `followers` veya `following` değerli `type`                                           | `relation`             |
| `maxResults`, `max_results`, `resultsLimit`, `count`                                  | `maxItems`             |
| `scrapeAllResults`                                                                    | hedef başına sınır yok |

2 ad burada başka anlama gelir. Bazı Actor'larda `maxFollowers` ve
`maxFollowing`, bir çalıştırmanın döndürdüğü satır sayısını sınırlar. Xquik'in
X Follower Scraper'ında ise profilleri takipçi ve takip edilen sayılarına göre
filtreler. Satırları sınırlamak için `maxItems` kullan. Actor'da sayfa birimi
yok, bu yüzden `maxPages` yerine `maxItems` kullan.

### Her zaman en güncel derlemeyi kullan

Xquik'in X Follower Scraper'ı, Store çalıştırmalarında `latest` derlemesiyle
çalışır. API çağrılarında derleme seçimini boş bırak ya da `build=latest`
gönder. Eski bir derlemeye sabitlenmiş görevleri ve entegrasyonları güncelle.
Sabitlenmiş derlemeler kendiliğinden değişmez.

## Çıktı

Her profil bir JSON nesnesidir. Kompakt mod normalize edilmiş herkese açık
alanları, şema sürümü alanlarını ve varsa kaynak metadata'sını döndürür.

Veri kümesi ve run-report şemaları dönen her alanı açıklar. Basit alanlarda
ajanlar ve üretilen entegrasyonlar için örnekler de var.

Aşağıdaki değerler yalnızca örnektir. Satırların çalıştırma anındaki canlı
veriyi taşır. Kompakt bir satır şöyle görünür:

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

Birleştirme modu örtüşme alanları ekler:

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

Apify veri kümesini JSON, CSV, Excel veya HTML olarak dışa aktar.

## Çalıştırma seçenekleri

Harcamaya kesin bir sınır koymak için Apify API'de `maxTotalChargeUsd` ayarla.
Console'da aynı sınırın adı Max cost per run. Apify bu sınırı Xquik'in X
Follower Scraper'ına `ACTOR_MAX_TOTAL_CHARGE_USD` olarak iletir. Actor, sınırı
aşan satırları kabul etmeden önce durur. Harcama sınırının izin verdiği kadar
profil almak için `maxItems` alanını boş bırak. `maxItems` ve
`maxItemsPerTarget` değerlerini yalnızca bütçenin izin verdiğinden daha az
profil istiyorsan ayarla.

- Faturalanan veri kümesini daraltmak için `minFollowers`, `verifiedType` ve
  `bioContains` gibi profil filtrelerini birleştir.
- Varsayılan olarak çalıştırmalar hedefler arasında yalnızca benzersiz
  profilleri tutar. Hedef başına 1 satır tutmak için
  `dedupeAcrossTargets: false` ayarla.
- Her profil için eşleşen tüm kaynak hedefleriyle 1 satır almak için
  `dedupeMode: "merge"` ayarla.
- Varsa isteğe bağlı profil alanları için `outputMode: "full"` ayarla. Bunlar
  sabitlenmiş gönderi ID'lerini, entity verilerini ve profil metadata'sını
  kapsar.
- Normalize alanların yanına temizlenmiş bir `raw` nesnesi eklemek için
  `outputMode: "raw"` veya `includeRaw: true` ayarla.
- Tekrarlanan çalıştırmalar planla ve profil ID'lerini karşılaştırmak için her
  veri kümesini sakla. Xquik izlemeleri desteklenen gönderi ve profil olaylarını
  gönderir, takipçi listesi değişikliklerini göndermez.

## Boş, kısmi ve durdurulan çalıştırmalar

Xquik'in X Follower Scraper'ı boş, kısmi ve durdurulan çalıştırmaları ücretsiz
tanılamalarla açıklar. Actor'ın başarıyla bitmesi teslimatı doğrular. Tüm
verinin çekildiğini doğrulamaz.

Kesilen bir çalıştırma ücretsiz bir `partial` tanılaması yazar. Teslim edilmiş
sonuçlar veri kümesinde kalır. Yeniden denemeden önce `availableResults`,
`failedTargets`, `retryable` ve `nextAction` alanlarını oku.

Çalıştırma durumu, çalıştırmanın neden durduğunu söyler. Ücretlendirilen
sonuçları, atlanan tekrarları ve okunan hedefleri de sayar. Durum, erken
durmanın her nedenini söyler. `stopCauses` her nedeni kendi `message`,
`retryable` ve `nextAction` alanlarıyla listeler. Nedenler şunlardır:
`target_not_found`, `target_protected`, `target_failed` ve `deadline_reached`.
Bulunamayan bir hesap, listeye yalnızca çalıştırmayı başka bir neden
durdurduysa girer. Nedenlerden biri `retryable` ise çalıştırma da `retryable`
olur.

X, korumalı bir hesabın listelerini gizli tutar. Bu hedef 1 ücretsiz tanılamada
`target_protected` alır. Çalıştırma diğer hedefleri okumaya devam eder.

`failedTargets`, bir hatadan sonra duran hedefleri sayar. Bu çalıştırmalar
`completionReason: "partial_failure"` kullanır. Teslim ettikleri profiller
faturalanan veri satırı olarak kalır.

Varsayılan Apify zaman aşımı `0` olduğu için çalıştırmaların süre sınırı yoktur.
Çalıştırma, üst sınıra ulaşana veya profil bitene kadar devam eder. Yine de
sonlu bir zaman aşımı ayarlayabilirsin. O zaman
`completionReason: "deadline_reached"` bu sınırın yaklaştığını gösterir.
Çalıştırma profilleri ve raporu kaydeder, sonra sınırdan önce düzgünce çıkar.
Teslim edilen profiller 1 kez ücretlenir.

Sorunlu çalıştırmalar her zaman `run-report` yazar. Girdisiz ve geçersiz
girdili çıkışlar da buna dahil. `run-report` içinde yayımlanan Actor kaynağının
tam sürümünü veren bir `version` alanı da var.

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
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): Sıralama,
  hacim, sorgu ve WOEID ile konuma göre gerçek zamanlı gündemi kazır. Nerede
  neyin gündemde olduğunu takip ettiğinde kullan. Gündem başlığı başına
  $0.00015'ten başlar.
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

## Kazımadan fazlası mı lazım?

Xquik ayrıca 47 panel aracı, 129 REST işlemi, imzalı webhook'lar ve bir MCP
sunucusu sunar.

- [API belgeleri](https://docs.xquik.com/introduction): REST API kılavuzları
- [Followers API](https://docs.xquik.com/api-reference/x/followers): bir
  hesabın erişilebilen takipçilerini al
- [Following API](https://docs.xquik.com/api-reference/x/following): bir
  kullanıcının kimleri takip ettiğini al
- [List Members API](https://docs.xquik.com/api-reference/x/list-members):
  herkese açık bir X Listesinin üyelerini dışa aktar
- [MCP sunucusu](https://docs.xquik.com/mcp/overview): desteklenen JSON veya
  metin işlemlerini keşfet ve çalıştır
- [Webhooks](https://docs.xquik.com/webhooks/overview): desteklenen gönderi ve
  profil olaylarını al

## SSS

### X API anahtarı gerekir mi?

Hayır. X API anahtarı, giriş veya kimlik bilgisi gerekmez.

### Bir çalıştırmayı ne sınırlar?

Öğe sınırın ve Apify harcama sınırın çalıştırmayı durdurur. Apify hesap ve
platform sınırları yine geçerlidir.

### Ne kadar hızlı?

Xquik'in X Follower Scraper'ında hız, hedef büyüklüğüne, filtrelere ve X'in
erişim durumuna bağlıdır. Actor'ın 2 [karşılaştırma testi](#karşılaştırma-testi)
çalıştırması saniyede 77,9 ve 100,0 işe yarar profile ulaştı.

### Çalıştırmam neden `maxItems` değerinden az satır döndürüyor?

`minFollowers`, `verifiedOnly` ve `bioContains` gibi filtreler yazmadan önce
uygulanır. Daha çok sonuç için onları gevşet. Xquik'in X Follower Scraper'ı
hedefler arasındaki tekrarları da kaldırır.

### Tek bir hesaptan kaç takipçi kazıyabilirim?

X o hesap için kaç tane gösteriyorsa o kadar. Çalıştırma, üst sınırına,
harcama sınırına veya listenin sonuna kadar devam eder. `maxItemsPerTarget`
yalnızca her hedefi ayrı ayrı sınırlar.

### Actor geçici hataları yeniden dener mi?

Evet. Geçici X hatalarından kendiliğinden toparlanır. Kalıcı bir hatadan sonra
çalıştırma kısmi sonuçlarını korur.

### Apify çalıştırma süresi sınırına yaklaşınca ne olur?

Xquik'in X Follower Scraper'ı kendi başına daha kısa bir süre sınırı eklemez.
Sınırından önce profilleri kaydeder, raporu yazar ve çıkar. Veri kümesine
ulaşmayan satırlar ücretsizdir.

### Kaldığım yerden devam edebilir miyim?

Henüz değil. Aynı hedefte yeni bir çalıştırma baştan başlar.

### Bunu Apify API ile çalıştırabilir miyim?

Evet. Python, JavaScript ve cURL örnekleri için
[API sekmesine](https://apify.com/xquik/x-follower-scraper/api) bak.

### Düzenli kazıma planlayabilir miyim?

Evet. Bu Actor'ı bir cron takvimiyle çalıştırmak için Apify'ın yerleşik
[zamanlama](https://docs.apify.com/platform/schedules) özelliğini kullan.
Takipçi değişikliklerini bulmak için kayıtlı veri kümelerini karşılaştır.

### X verisini kazımak yasal mı?

Xquik'in X Follower Scraper'ı herkese açık X profil alanlarını çeker.
Sonuçlarda, kullanıcının yazdığı konumlar dahil kişisel veri olabilir. Amacının
yasal olduğundan emin ol ve geçerli gizlilik kurallarına uy. Emin değilsen
yetkin bir hukukçuya danış.

### Nereden yardım alırım?

Actor sayfasındaki Issues sekmesinde bir issue aç. Çalıştırma ID'siyle
support@xquik.com adresine de yazabilirsin.

### API belgeleri nerede?

[API belgelerini](https://docs.xquik.com/introduction) oku.
