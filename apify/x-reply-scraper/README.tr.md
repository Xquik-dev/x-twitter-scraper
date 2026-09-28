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
scraper hizmetidir. Xquik'in X Reply Scraper'ı yanıtları, yorumları ve
konuşmaların tamamını toplar. Diğer Apify Actor'larının çoğu, filtrelemeden
veya tekilleştirmeden önce ücret alır. Xquik yalnızca **teslim edilen, benzersiz
ve filtrene uyan sonuçlar** için ücret alır.

X (Twitter) yanıtlarını her Apify planında **teslim edilen satır başına
$0.00015** ile kazı. Gönderi URL'si, gönderi ID'si, profil URL'si veya
kullanıcı adı yapıştır. Yanıtları, konuşmaları, yazarları, etkileşimi, entity
verilerini ve medya URL'lerini dışa aktar. Apify, platform kullanımını ayrıca
faturalandırır. X girişi gerekmez. Filtreler veri kümesine yazmadan önce
çalışır, bu yüzden yalnızca teslim edilen satırlar için ödersin.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## Bu Twitter yanıt scraper'ı ne yapar?

Xquik'in X Reply Scraper'ı herkese açık yanıtları ve yorum konuşmalarını
toplar. Tekil gönderilerle, toplu URL listeleriyle, gönderi ID'leriyle ve
kullanıcıların yanıt zaman akışlarıyla çalışır.

Duygu analizi, müşteri geri bildirimi ve topluluk araştırması için kullan.
Yanıt sıralama, potansiyel müşteri bulma, moderasyon incelemesi ve konuşma veri
kümeleri için de işe yarar.

### Yanıt toplama davranışı

- Auto modu, doğrudan sonuçlar eksik kaldığında toplamaya devam eder.
- `collectionStrategy`, farklı yanıt işleri için 4 mod sunar.
- Toplu girdiler gönderi URL'si, gönderi ID'si, profil ve kullanıcı adı kabul
  eder.
- Filtreler ve tekilleştirme faturalamadan önce çalışır.
- Çıktıda 4 sıralama modu, 3 ayrıntı düzeyi ve 3 alan stili var.
- Her yanıt kaynak hedefini, üst gönderi ID'lerini, kök ID'sini ve derinliğini
  korur.
- Devam imleçleri geçmişe dönük toplamayı ve zamanlanmış çalıştırmaları
  destekler.
- Boş çalıştırmalar `diagnostics` içine 1 ücretsiz kayıt yazar.
- Çalıştırma günlükleri sayfa ve hedef sürelerini `fetchDurationMs`,
  `processingDurationMs`, `pushDurationMs`, `statusDurationMs`,
  `fullPageDurationMs` ve `fullTargetDurationMs` alanlarında gösterir.
- Apify çalıştırmayı yeniden başlatırsa teslim edilen yanıtlar ve ilerleme
  korunur.

## X yanıtları nasıl kazınır

1. Gönderi URL'si, gönderi ID'si, profil URL'si veya kullanıcı adı yapıştır.
2. `maxItems`, `scope` ve işinin gerektirdiği filtreleri ayarla.
3. Xquik'in X Reply Scraper'ını çalıştır ve veri kümesini aç.

Önceden doldurulmuş form, çalıştığı doğrulanmış herkese açık bir konuşmayı
hedefler. En fazla 25 tam, düz satır döndürür. Auto modu varsayılan olarak
konuşmanın tamamını arar. Tekilleştirme ve kaynak bilgisi açık kalır.

### Gönderi URL'sinden yanıt kazı

```json
{
  "startUrls": [{ "url": "https://x.com/OpenAI/status/2082577277246972300" }],
  "maxItems": 100
}
```

### Gönderi ID'lerinden yanıt kazı

```json
{
  "tweetIds": ["2082577277246972300", "2083148725367783580"],
  "maxItemsPerTarget": 100,
  "maxItems": 10000
}
```

### İç içe konuşmanın tamamını topla

```json
{
  "tweetIds": ["2082577277246972300"],
  "collectionStrategy": "conversationSearch",
  "scope": "all",
  "maxDepth": 5,
  "sort": "oldest",
  "maxItems": 500
}
```

### Bir kullanıcının yanıt zaman akışını kazı

```json
{ "usernames": ["OpenAI", "apify"], "maxItems": 10000 }
```

### Yanıtları faturadan önce filtrele

```json
{
  "tweetIds": ["2082577277246972300"],
  "anyWords": ["API", "agent", "developer"],
  "excludeWords": ["airdrop", "giveaway"],
  "lang": "en",
  "minLikes": 2,
  "minViews": 100,
  "verifiedOnly": true,
  "maxItems": 10000
}
```

### Düz, CSV'ye uygun satırlar dışa aktar

```json
{
  "tweetIds": ["2082577277246972300"],
  "outputMode": "full",
  "outputPreset": "flat",
  "fieldStyle": "camelCase",
  "maxItems": 100
}
```

## X yanıtlarını kazımak ne kadar tutar?

Xquik'in X Reply Scraper'ı her Apify planında teslim edilen satır başına
$0.00015 tutar. Apify, platform kullanımını ayrıca faturalandırır.

Xquik, teslim edilen her veri satırı için 1 kez ücret alır. Filtrelerinin veya
tekilleştirmenin çıkardığı yanıtlar ücretsizdir. `diagnostics` içindeki
tanılama kayıtları ücretsizdir. Başlatma, URL, sorgu, sayfalama veya filtre
ücreti yok.

## Herkese açık görev örnekleri

50 herkese açık görevden birini seç. Her görevin sınırlı bir girdisi ve uygun
bir veri kümesi görünümü var. Çalıştırmadan önce istediğin görevi düzenle.

Şu örneklerle başla:

- [Collect replies for AI agents](https://apify.com/xquik/x-reply-scraper/examples/collect-replies-for-ai-agents)
- [Build an X reply RAG dataset](https://apify.com/xquik/x-reply-scraper/examples/build-x-reply-rag-dataset)
- [Archive replies for LLM processing](https://apify.com/xquik/x-reply-scraper/examples/archive-replies-for-llm-processing)
- [Extract reply leads for CRM](https://apify.com/xquik/x-reply-scraper/examples/extract-reply-leads-for-crm)

## Yapay zeka ajanı ve MCP hazırlığı

Xquik'in X Reply Scraper'ını Apify MCP, API istemcileri, x402 veya Skyfire
üzerinden çalıştır.

- Sınırlı izinler, ilgisiz Apify hesap verilerini korur.
- Olay başına ödeme, maliyeti teslim edilen sonuçlara bağlar.
- Ajan ödemeleriyle uyum için Standby modu kapalı kalır.
- Tipli şemalar yanıtları, çalıştırma raporlarını ve devam imleçlerini tanımlar.
- Sınırlı varsayılanlar, ajanların yanlışlıkla sınırsız çalıştırma başlatmasını
  önler.
- Sabit `camelCase` ve `snake_case` modları araç zincirlemeyi kolaylaştırır.
- Tanılama satırlarında bir durum, bir mesaj ve bir kurtarma adımı bulunur.
- Çalıştırma raporlarında kesin sonuçlar, durma nedenleri ve ücret tahminleri
  bulunur.

## Yanıt hedefleri ve girdi takma adları

Şu ana alanları kullan.

| Girdi         | Amaç                                     |
| ------------- | ---------------------------------------- |
| `startUrls`   | Karışık X gönderi ve profil URL'leri     |
| `tweetIds`    | Sayısal gönderi ID'leri                  |
| `usernames`   | Profil yanıt zaman akışları              |
| `startCursor` | Tek bir hedefe kayıtlı imleçten devam et |

Girdi formu yalnızca kanonik kontrolleri gösterir. Uyumluluk takma adları JSON,
API, SDK, otomasyon ve kayıtlı görev girdilerinde yine çalışır. Kanonik
alanlarla takma adları birlikte kullanırsan mevcut öncelik sırası geçerli olur.

Bu takma adlar diğer scraper'lardaki yaygın alan adlarını kabul eder:

- URL takma adları: `urls`, `tweetUrls`, `postUrls`, `profileUrls`
- ID takma adları: `conversationIds`, `postIds`, `ids`, `tweetId`, `id`
- Kullanıcı adı takma adları: `twitterHandles`, `screenname`
- Genel sınır takma adları: `maxResults`, `max_results`, `resultsLimit`,
  `maxReplies`
- Hedef başına takma adlar: `maxRepliesPerTweet`, `maxCommentsPerPost`
- Arama takma adı: `useSearch`
- İç içe yanıt takma adları: `includeNestedReplies`, `includeRepliesOfReplies`
- Orijinal gönderi takma adı: `includeOriginalTweet`
- Çıktı takma adları: `outputVariant`, `includeRaw`

Bozuk veya desteklenmeyen hedefler Actor'ı başarısız kılmaz. Geçerli hedef
kalmazsa çalıştırma düzeltmeyi söyleyen bir tanılama yazar.

## Kapsama stratejileri

### Otomatik tam toplama

Çoğu iş için `collectionStrategy: "auto"` kullan. Seçtiğin kapsamda ulaşabildiği
her yanıtı toplar. Kapsam, derinlik, sıralama ve yazar kontrolleri sınırlarından
önce uygulanır. Kök olmayan hedeflerin altındaki yanıtları da içerir. X
konuşmanın bir kısmını gizlerse durum metni, kaç yanıtın gizlendiğini söyler.
Diğer `collectionStrategy` değerleri asla mod değiştirmez.

Tanılamalardaki kapsama oranı, X'te başka yanıt olmadığını kanıtlamaz.
Sınırlar, eksik veri veya hatalar bir çalıştırmayı eksik bırakabilir.

### Doğrudan yanıtlar

Doğrudan yanıtları X'in kendi sırasıyla almak için
`collectionStrategy: "replies"` kullan. Kayıtlı imleçleri destekler.

### Konuşma araması

Konuşmayı geniş kapsamak için `collectionStrategy: "conversationSearch"` kullan.

### Tam konuşma bağlamı

Kaynak konuşmanın bağlamını okumak için `collectionStrategy: "thread"` kullan.
Kök gönderiyi derinlik 0 olarak tutmak için `includeOriginalPost: true` ayarla.

## Doğrudan ve iç içe yanıt kontrolleri

Sonucun biçimini seçmek için `scope` kullan.

| Değer    | Sonuç                                                      |
| -------- | ---------------------------------------------------------- |
| `direct` | Derinlik 1 yanıtları tutar                                 |
| `nested` | Derinlik 2 ve üstündeki, yanıtlara verilen yanıtları tutar |
| `all`    | Erişilebilen tüm doğrudan ve iç içe yanıtları tutar        |

İç içeliği sınırlamak için `maxDepth` kullan. X konuşmadaki bir üst gönderiyi
göstermezse üst bağlantı eksik kalabilir. Actor erişebildiği en iyi derinliği
korur.

## Sıralama

`sort` alanını şu değerlerle kullan:

- `relevance` X'in kaynak sırasını korur
- `latest` en yeniyi öne alır
- `oldest` en eskiyi öne alır
- `likes` en çok beğeni alanı öne alır

Profil hedefleri istediğin sayıda benzersiz, filtrelenmiş sonucu toplar, sonra
sıralar. Gönderi hedeflerinde genel sıralama korunur.

`sortBy` ve `queryType` uyumluluk takma adları da çalışır.

## Yanıt filtreleri

Desteklenen tüm filtreler veri kümesine yazmadan önce çalışır.

### Metin ve entity filtreleri

| Girdi            | Davranış                              |
| ---------------- | ------------------------------------- |
| `exactPhrase`    | Birebir bir ifade gerektirir          |
| `anyWords`       | En az 1 kelime veya ifade gerektirir  |
| `excludeWords`   | Eşleşen kelime veya ifadeleri çıkarır |
| `keywordInclude` | `anyWords` ile birleşen takma ad      |
| `keywordExclude` | `excludeWords` ile birleşen takma ad  |
| `hashtags`       | En az 1 hashtag gerektirir            |
| `cashtags`       | En az 1 cashtag gerektirir            |
| `mentioning`     | Bir @bahsetme gerektirir              |

### Yazar ve dil filtreleri

| Girdi                   | Davranış                                          |
| ----------------------- | ------------------------------------------------- |
| `fromUser`              | Tek bir yanıt yazarını tutar                      |
| `toUser`                | Tek bir kullanıcı adına verilen yanıtları tutar   |
| `lang`                  | Tek bir X dil kodunu tutar                        |
| `verifiedOnly`          | Herhangi bir herkese açık onay işareti gerektirir |
| `blueVerifiedOnly`      | X Premium onayı gerektirir                        |
| `excludeOriginalAuthor` | Kaynak yazarın kendine verdiği yanıtları çıkarır  |

### Etkileşim filtreleri

`minLikes`, `minReplies`, `minRetweets`, `minQuotes`, `minViews` ve
`minBookmarks` kullan. `minFaves` takma adı `minLikes` alanına eşlenir.

### Medya ve zaman filtreleri

- Herkese açık medyası olan yanıtlar için `hasMediaOnly: true` ayarla.
- `mediaType` değerini `any`, `image`, `video`, `gif` veya `link` yap.
- Dahil olan bir başlangıç zamanı için `since` ayarla.
- Hariç tutulan bir bitiş zamanı için `until` ayarla.
- `sinceTime` ve `untilTime` alanlarını uyumluluk takma adı olarak kullan.

## Çıktı alanları

Veri kümesi ve run-report şemaları dönen her alanı açıklar. Basit alanlarda
ajanlar ve üretilen entegrasyonlar için örnekler de var.

Her tam yanıt satırında şu temel alanlar olabilir:

| Alan                | Açıklama                                                                |
| ------------------- | ----------------------------------------------------------------------- |
| `id`                | Yanıt ID'si                                                             |
| `text`              | Yanıt metni                                                             |
| `fullText`          | Uzun yanıt metni                                                        |
| `createdAt`         | Yanıt zaman damgası                                                     |
| `lang`              | X dil kodu                                                              |
| `url`               | Yanıtın doğrudan URL'si                                                 |
| `conversationId`    | X konuşma ID'si                                                         |
| `inReplyToId`       | Doğrudan üst gönderinin ID'si                                           |
| `inReplyToUserId`   | Üst gönderi yazarının ID'si                                             |
| `inReplyToUsername` | Üst gönderi yazarının kullanıcı adı                                     |
| `likeCount`         | Beğeniler                                                               |
| `replyCount`        | Alt yanıtlar                                                            |
| `retweetCount`      | Yeniden gönderiler                                                      |
| `quoteCount`        | Alıntılar                                                               |
| `viewCount`         | Görüntülenmeler                                                         |
| `bookmarkCount`     | Yer işaretleri                                                          |
| `author`            | Erişilebilen herkese açık yazar metadata'sı                             |
| `media`             | Görseller, videolar, GIF'ler ve varyantlar                              |
| `entities`          | Hashtag'ler, cashtag'ler, bahsetmeler, URL'ler ve video zaman damgaları |
| `quoted_tweet`      | Varsa alıntılanan gönderi                                               |
| `retweeted_tweet`   | Varsa yeniden gönderilen gönderi                                        |

Tam satırlar erişilebilen kaynak metadata'sını da tutar:

- Gönderi türü alanları `type`, `isReply`, `isQuoteStatus`, `isNoteTweet`,
  `isLimitedReply` ve `isTranslatable`.
- Metin ayrıntıları `displayTextRange`, `noteTweet`, `article` ve `card`.
- Etiketler ve uyarılar `contentDisclosure`, `communityNote`,
  `possiblySensitive`, `tombstone` ve `exclusiveContent`.
- Konuşma ayrıntıları `conversationControl`, `limitedActions` ve
  `unmentionedUserIds`.
- Bağlam alanları `source`, `place`, `communityId`, `reactionContext` ve
  `postCta`.
- Düzenleme ve kullanılabilirlik alanları `edit`, `previousCounts`, `viewState`
  ve `authorUnavailable`.

Düz satırlar konuşmadaki üst gönderi zincirini, kaynak ayrıntılarını, sonuç
türünü ve şema sürümünü tutar. Alanların tam listesi için OpenAPI'ye bak.

### Yazar metadata'sı

İç içe yazarlar herkese açık profil sözleşmesine uyar. Bu sözleşme kimlik,
sayılar, onay durumu, kullanılabilirlik, profesyonel veriler ve profil
biyografisini kapsar.

Düz çıktı `authorId`, `authorUsername`, `authorName`, `authorFollowers`,
`authorFollowing` ve `authorVerified` ekler.

### Medya metadata'sı

Medya; kullanılabilirlik, geometri, etiket ve video varyantı bilgisini kapsar.
`watchNowUrl` ve `visitSiteUrl` eylemleri de var.

Düz çıktı `mediaUrls` ekler.

### Çıktı örneği

Kısaltılmış bir yanıt satırı şöyle görünür:

```json
{
  "resultType": "reply",
  "id": "1881423000000000000",
  "url": "https://x.com/example/status/1881423000000000000",
  "text": "Thanks for sharing this update.",
  "createdAt": "2026-08-09T12:00:00.000Z",
  "lang": "en",
  "conversationId": "1881422000000000000",
  "rootTweetId": "1881422000000000000",
  "parentReplyId": "1881422000000000000",
  "depth": 1,
  "isDirectReply": true,
  "likeCount": 42,
  "replyCount": 3,
  "retweetCount": 5,
  "quoteCount": 2,
  "viewCount": 1000,
  "bookmarkCount": 7,
  "authorUsername": "example",
  "authorName": "Example User",
  "authorFollowers": 1000,
  "authorVerified": false,
  "mediaUrls": ["https://pbs.twimg.com/media/example.jpg"],
  "sourceTweetId": "1881422000000000000",
  "sourceTarget": "1881422000000000000"
}
```

Bu değerler yalnızca örnektir. Gerçek çalıştırmalar canlı veri döndürür.

## Çıktı modları

### Kompakt

Daha dar bir veri kümesi için `outputMode: "compact"` ayarla. Metin, konuşma,
yazar, etkileşim ve medya alanlarını tutar.

### Tam

Desteklenen tüm herkese açık alanları tutmak için `outputMode: "full"` ayarla.

### Ham

`raw` altına temizlenmiş bir kaynak anlık görüntüsü eklemek için
`outputMode: "raw"` ayarla.

### İç içe veya düz

Varsayılan `flat` düzeni iç içe nesneleri korur ve tablolar için yazar alanları
ekler. Eklenen düz alanları çıkarmak için `outputPreset: "nested"` ayarla.

### Alan adlandırma

`fieldStyle` değerini `source`, `camelCase` veya `snake_case` yap. Actor
çakışan kaynak anahtarlarının üzerine yazmaktan kaçınır.

## Sınırlar, faturalama ve devam

`maxItems` tüm çalıştırmadaki teslim edilen satırları sınırlar.
`maxItemsPerTarget` her gönderiyi veya profili ayrı sınırlar.

Tek bir çalıştırma birçok hedefi okuyabilir. Sınırlar, tekilleştirme, kaynak
bilgisi ve faturalama tüm hedeflerde doğru kalır.

Actor, tekrarlanan satırları çıktıdan ve faturadan önce kaldırır. Farklı
hedeflerden gelen tekrarlanan satırları tutmak için
`dedupeAcrossTargets: false` ayarla.

Sayfa sınırına takılan bir çalıştırmadan sonra varsayılan anahtar-değer
deposundan `next-cursors` kaydını oku. O hedefe devam etmek için bir imleci
`startCursor` ile gönder.

### Apify zaman aşımı

Varsayılan Apify zaman aşımı `0` olduğu için çalıştırmaların süre sınırı yoktur.
Actor, üst sınıra ulaşana veya uygun veri bitene kadar devam eder. Yine de
sonlu bir Apify zaman aşımı ayarlayabilirsin. O zaman
`completionReason: "deadline_reached"` bu sınırın yaklaştığını gösterir. Actor
yanıtları ve raporu kaydeder, sonra sınırdan önce düzgünce çıkar. Teslim edilen
yanıtlar 1 kez ücretlenir. Bitmemiş hedeflere sonra devam edebilirsin.

## Eksik veri çekme

Kesilen bir çalıştırma ücretsiz bir `partial` tanılaması yazar. Elde edilen
sonuçlar olduğu gibi kalır. Yeniden denemeden önce `availableResults`,
`failedTargets`, `retryable` ve `nextAction` alanlarını oku. Actor'ın başarıyla
bitmesi teslimatı doğrular. Tüm verinin çekildiğini doğrulamaz.

Durum, erken durmanın her nedenini söyler. `stopCauses` her nedeni kendi
`message`, `retryable` ve `nextAction` alanlarıyla listeler. Nedenler
şunlardır: `target_not_found`, `target_failed`, `page_limit`, `reply_reach` ve
`deadline_reached`. `reply_reach`, X'in konuşmanın yalnızca bir kısmını
sunduğu anlamına gelir.

Bulunamayan bir gönderi veya hesap hata sayılmaz. Durum bunu belirtir, örneğin
"X has no match for 1 target." Bu hedef `stopCauses` listesine yalnızca
çalıştırmayı başka bir neden durdurduysa girer. Nedenlerden biri `retryable`
ise çalıştırma da `retryable` olur.

## Tanılamalar

Başarılı veri satırları `resultType: "reply"` kullanır. Veri olmadan biten
çalıştırmalar `diagnostics` içine tam olarak 1 ücretsiz kayıt yazar. Kayıt,
sorunu nasıl çözeceğini söyler.

Çalıştırma durumu, çalıştırmanın neden durduğunu söyler. Ücretlendirilen
sonuçları ve okunan hedefleri de sayar. Sorunlu çalıştırmalar her zaman
`run-report` yazar. Girdisiz ve geçersiz girdili çıkışlar da buna dahil. Büyük
bir çalıştırma da bu kaydı yazar. Sorunsuz biten küçük bir çalıştırma kaydı
atlar, böylece Apify kullanımı azalır. Kaydı her çalıştırmada almak için
`alwaysSaveRunRecords` seçeneğini aç.

Rapor şeması tamamlanmayı, faturalamayı, hataları ve kayıtlı imleçleri
belgeler. `version` alanı yayımlanan Actor kaynağının tam sürümünü bildirir.

`status` alanı şu değerleri kullanır:

- `no-input`
- `invalid-input`
- `replies-incomplete`
- `zero-output`
- `aborted`
- `unexpected-error`

## API örnekleri

Her örnek Xquik'in X Reply Scraper'ını çalıştırır ve veri kümesi öğelerini
döndürür. `<APIFY_API_TOKEN>` yerine kendi Apify API token'ını yaz.

### JavaScript

```javascript
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: '<APIFY_API_TOKEN>' });
const run = await client
  .actor('xquik/x-reply-scraper')
  .call({
    tweetIds: ['2082577277246972300'],
    collectionStrategy: 'auto',
    scope: 'all',
    maxItems: 100,
  });

const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
```

### Python

```python
from apify_client import ApifyClient

client = ApifyClient("<APIFY_API_TOKEN>")
run = client.actor("xquik/x-reply-scraper").call(run_input={
    "tweetIds": ["2082577277246972300"],
    "collectionStrategy": "auto",
    "scope": "all",
    "maxItems": 100,
})

for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
```

### cURL

```bash
actor=xquik~x-reply-scraper
curl "https://api.apify.com/v2/acts/$actor/run-sync-get-dataset-items" \
  -X POST \
  -H "Authorization: Bearer <APIFY_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"tweetIds":["2082577277246972300"],"maxItems":100}'
```

## Otomasyon ve entegrasyonlar

Xquik'in X Reply Scraper'ını Apify zamanlamaları, webhook'lar veya API
istemcileri üzerinden çalıştır. Make, Zapier, n8n, Google Sheets veya bulut
depolamaya bağla. Ajanlar onu
[Apify MCP sunucusu](https://docs.apify.com/platform/integrations/mcp)
üzerinden çağırabilir.

Uygun ajan iş akışları [x402](https://docs.apify.com/integrations/x402) veya
[Skyfire](https://docs.apify.com/integrations/skyfire) da kullanabilir.

Xquik ayrıca 47 panel aracı, 129 REST işlemi, imzalı webhook'lar ve bir MCP
sunucusu sunar.

### Her zaman en güncel derlemeyi kullan

Yayınlanan tüm düzeltmeleri almak için her çalıştırmada `latest` seç.

Derleme belirtmezsen Apify bu Actor'ın varsayılan `latest` derlemesini kullanır.
Console çalıştırmaları ve standart API örnekleri bu varsayılanı kullanır.

Kayıtlı görevler Actor varsayılanını geçersiz kılabilir. Zamanlamalar ve görev
entegrasyonları bu seçimi kullanır. Her geçersiz kılmayı `latest` olarak tut.

Apify tam derleme numaralarını `latest` sürümüne yönlendirmez. Sabitlediğin
numaraları `latest` ile değiştir. Tam derlemeleri yalnızca geçici geri dönüşler
için kullan.

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

## SSS

### X API anahtarı veya giriş gerekir mi?

Hayır. X API anahtarı, giriş veya kimlik bilgisi gerekmez. Xquik'in X Reply
Scraper'ı X şifreni, çerezlerini veya token'larını asla istemez.

### X yanıtlarını kazımak yasal mı?

Xquik'in X Reply Scraper'ı herkese açık yanıtları toplar ve korumalı hesapları
aşmaz. Yalnızca herkese açık veri topla. Geçerli yasalara ve platform
kurallarına uy.

Yanıt veri kümelerinde kişisel veri olabilir. Yasal bir amaç seç. Veriyi
gereğinden uzun saklama. Dışa aktarımları koru. Gerektiğinde silme ve erişim
taleplerini yerine getir. Emin değilsen yetkin bir hukukçuya danış.

### Çalıştırmam neden gönderide görünenden az yanıt döndürdü?

X konuşmanın bir kısmını gizlerse durum metni, kaç yanıtın gizlendiğini söyler.
`stopCauses` içindeki `reply_reach`, X'in konuşmanın yalnızca bir kısmını
sunduğu anlamına gelir. Filtreler, tekilleştirme, `scope`, `maxDepth` ve
sınırların da sayıyı düşürür.

### API'yi, zamanlamaları ve entegrasyonları kullanabilir miyim?

Evet. [API sekmesi](https://apify.com/xquik/x-reply-scraper/api) Python,
JavaScript ve cURL örnekleri gösterir. Xquik'in X Reply Scraper'ını bir cron
takvimiyle çalıştırmak için Apify
[zamanlamalarını](https://docs.apify.com/platform/schedules) kullan. Make,
Zapier, n8n ve Google Sheets'e de bağlanır.

### Nereden yardım alırım?

Actor sayfasında bir issue aç ya da çalıştırma ID'siyle
[support@xquik.com](mailto:support@xquik.com) adresine yaz.

### Bana özel bir çözüm alabilir miyim?

Evet. [xquik.com](https://xquik.com) adresini ziyaret et ya da
[API belgelerini](https://docs.xquik.com/introduction) oku. Xquik bir panel,
bir REST API, bir MCP sunucusu ve webhook'lar sunar.
