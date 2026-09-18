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
scraper hizmetidir. X Reply Scraper, yanıtları, yorumları ve tüm konuşmaları
toplar. Diğer tüm Apify Actor'ları filtreleme veya tekilleştirmeden önce
ücret alır. Xquik yalnızca teslim edilen, benzersiz, filtreyle eşleşen
sonuçlar için ücret alır.

X (Twitter) yanıtlarını **her Apify planında teslim edilen satır başına
$0.00015'e** kazı. Gönderi URL'lerini, Tweet ID'lerini, profil URL'lerini
veya kullanıcı adlarını yapıştır. Yanıtları, konuşmaları, yazarları,
etkileşimi, varlıkları ve medya URL'lerini dışa aktar. Apify, platform
kullanımını ayrıca faturalandırır. X girişi gerekmez.

Filtreler veri kümesi yazımlarından önce çalışır. Yalnızca teslim edilen
satırlar için ödeme yaparsın.

>

## Eksik çıkarma

Kesintiye uğrayan çıkarma ücretsiz bir `partial` tanılaması yazar. Mevcut
sonuçlar bozulmadan kalır. Yeniden denemeden önce `availableResults`,
`failedTargets`, `retryable` ve `nextAction` alanlarını oku. Başarılı bir Actor
çıkışı teslimatı doğrular, eksiksiz çıkarmayı değil.

Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.

> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## Bu Twitter yanıt scraper'ı ne yapar?

X Reply Scraper, herkese açık yanıtları ve yorum konuşmalarını toplar. Tek
gönderileri, toplu URL listelerini, Tweet ID'lerini ve kullanıcı yanıt zaman
akışlarını işler.

Duygu analizi, müşteri geri bildirimi, topluluk araştırması, yanıt
sıralaması, potansiyel müşteri keşfi, moderasyon incelemesi ve konuşma veri
kümeleri için kullan.

### Yanıt toplama davranışı

- Otomatik mod, eksik doğrudan sonuçları konuşma aramasına geçirir.
- Otomatik Tweet yanıt sayfaları 300'e kadar satır ister.
- Dört strateji doğrudan yanıtları, aramayı ve thread bağlamını kapsar.
- Toplu girdiler gönderi URL'lerini, Tweet ID'lerini, profilleri ve kullanıcı
  adlarını kabul eder.
- Her ikisi de geçerli olduğunda profil hedefleri zaman akışını ve yazar
  aramasını birleştirir.
- Filtreler ve tekrar kaldırma faturalamadan önce çalışır.
- Çıktı 4 sıralama modunu, 3 detay seviyesini ve 3 alan stilini destekler.
- Her yanıt kaynak hedefini, üst ID'lerini, kök ID'sini ve derinliğini
  korur.
- Devam imleçleri geriye dönük doldurmaları ve zamanlanmış çalıştırmaları
  destekler.
- Boş çalıştırmalar `diagnostics`'e 1 ücretsiz kayıt yazar.
- Sayfa ve hedef günlükleri, girdileri tekrarlamadan `fetchDurationMs`,
  `processingDurationMs`, `pushDurationMs`, `statusDurationMs`,
  `fullPageDurationMs` ve `fullTargetDurationMs` içerir.
- Kontrol noktaları, yeniden başlatmalardan sonra kabul edilen yanıtları,
  zamanlamayı ve hataları korur.

### Her zaman en güncel yapıyı kullan

Tüm yayınlanmış düzeltmeleri almak için her çalıştırmada `latest`'i seç.

Yapı belirtilmediğinde Apify bu Actor'ın `latest` varsayılanını kullanır.
Console çalıştırmaları ve standart API örnekleri bu varsayılanı devralır.

Kaydedilmiş görevler Actor varsayılanını geçersiz kılabilir. Zamanlamalar ve
görev entegrasyonları bu seçimi yeniden kullanır. Her geçersiz kılmayı
`latest` olarak tut.

Apify, tam yapı numaralarını `latest`'e yönlendirmez. Sabitlenmiş numaraları
`latest` ile değiştir. Sabit yapıları yalnızca geçici geri almalar için
kullan.

## Hızlı başlangıç

Başlangıç formu doğrulanmış herkese açık bir konuşmayı hedefler. En fazla 10
sayfa üzerinde 25 tam, düz satıra kadar döndürür. Otomatik mod varsayılan
olarak tüm konuşmayı arar. Tekilleştirme ve kaynak atfı açık kalır.

### Bir gönderi URL'sinden yanıtları kazı

```json
{
  "startUrls": [{ "url": "https://x.com/OpenAI/status/2082577277246972300" }],
  "maxItems": 100
}
```

### Tweet ID'lerinden yanıtları kazı

```json
{
  "tweetIds": ["2082577277246972300", "2083148725367783580"],
  "maxItemsPerTarget": 100,
  "maxItems": 10000
}
```

### Tam iç içe konuşmayı topla

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

### Faturalamadan önce yanıtları filtrele

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

### Düz, CSV dostu satırları dışa aktar

```json
{
  "tweetIds": ["2082577277246972300"],
  "outputMode": "full",
  "outputPreset": "flat",
  "fieldStyle": "camelCase",
  "maxItems": 100
}
```

Örnek değerler açıklayıcıdır. Yanıtlar çalıştırma zamanındaki kaynak veriyi
yansıtır.

## Yapay zeka ajanı ve MCP hazırlığı

Bu Actor'ı Apify MCP, API istemcileri, x402 veya Skyfire üzerinden çalıştır.

- Sınırlı izinler ilgisiz Apify hesap verilerini korur.
- Olay başına ödeme faturalandırması, deterministik sonuç tabanlı
  maliyetleri destekler.
- Ajan tabanlı ödeme uyumluluğu için bekleme modu devre dışı kalır.
- Tipli şemalar yanıtları, çalıştırma raporlarını ve devam imleçlerini
  gösterir.
- Sınırlı varsayılanlar kazara sınırsız ajan çalıştırmalarını önler.
- Kararlı `camelCase` ve `snake_case` modları araç zincirlemesini basitleştirir.
- Tanılama satırları bir durum, mesaj ve kurtarma eylemi içerir.
- Çalıştırma raporları tam sonuçları, durma nedenlerini ve ücret tahminlerini
  içerir.

## Yanıt hedefleri ve girdi takma adları

Aşağıdaki birincil alanları kullan.

| Girdi          | Amaç                                             |
| --------------- | -------------------------------------------------- |
| `startUrls`      | Karışık X gönderi ve profil URL'leri              |
| `tweetIds`       | Sayısal gönderi ID'leri                            |
| `usernames`      | Yazar aramalı profil zaman akışları                |
| `startCursor`    | Kaydedilen bir kaynak imleçten bir hedefe devam et |

Görsel form yalnızca kanonik kontrolleri gösterir. Uyumluluk takma adları
JSON, API, SDK, otomasyon ve kaydedilmiş görev girdilerinde kullanılabilir
kalır. Açık kanonik ve takma ad alanları, birlikte kullanıldığında mevcut
çözümleme sırasını korur.

Uyumluluk takma adları yaygın rakip girdileri kabul eder:

- URL takma adları: `urls`, `tweetUrls`, `postUrls`, `profileUrls`
- ID takma adları: `conversationIds`, `postIds`, `ids`, `tweetId`, `id`
- Kullanıcı adı takma adları: `twitterHandles`, `screenname`
- Genel sınır takma adları: `maxResults`, `max_results`, `resultsLimit`,
  `maxReplies`
- Hedef başına takma adlar: `maxRepliesPerTweet`, `maxCommentsPerPost`
- Arama takma adı: `useSearch`
- İç içe yanıt takma adları: `includeNestedReplies`,
  `includeRepliesOfReplies`
- Orijinal gönderi takma adı: `includeOriginalTweet`
- Çıktı takma adları: `outputVariant`, `includeRaw`

Bozuk veya desteklenmeyen hedefler Actor'ı başarısız kılmaz. Hiçbir geçerli
hedef kalmadığında çalıştırma uygulanabilir bir tanılama döndürür.

Profil hedefleri, imleç sayfalamasını yazar aramasıyla birleştirir. Actor,
çıktı ve faturalamadan önce tekrarlanan satırları kaldırır. Kaydedilmiş eski
imleçler standart sayfalamayı korur.

## Kapsama stratejileri

### Otomatik tam kapsama

Çoğu iş için `collectionStrategy: "auto"` kullan. Full veya nested kapsamlar
tam yanıt çıkarmayla başlar. Kapsam, derinlik, sıralama ve yazar kontrolleri
yanıt sınırlarından önce uygulanır. Çıkarma, kök olmayan hedeflerin
altındaki alt öğeleri içerir. Eksik çıkarma, konuşma araması ve doğrudan
yanıtları denemeden önce satırları korur. Doğrudan kapsamlar gerektiğinde
aramaya geri döner. Tamamlanmamış sayfalar devamlılıklarını korur. Açık
stratejiler asla değişmez.

Tanılama kapsama eşiği, kaynak tükenmesini kanıtlamaz. Durmuş sayfalar,
sınırlar, eksik veri veya hatalar kurtarmayı eksik bırakır.

### Doğrudan yanıt uç noktası

X'in yanıt zaman akışını zorlamak için `collectionStrategy: "replies"`
kullan. Bu, kaynak sıralamasını korur ve imleçleri destekler.

### Konuşma araması

Geniş konuşma kapsaması için `collectionStrategy: "conversationSearch"`
kullan. Actor, `conversation_id:<Tweet ID>` ile arar.

### Tam thread bağlamı

Kaynak konuşma bağlamını okumak için `collectionStrategy: "thread"` kullan.
Kök gönderiyi derinlik 0 olarak tutmak için `includeOriginalPost: true`
ayarla.

## Doğrudan ve iç içe yanıt kontrolleri

Sonuç şeklini seçmek için `scope`'u kullan.

| Değer    | Sonuç                                          |
| -------- | ------------------------------------------------ |
| `direct` | Derinlik 1 yanıtlarını tut                       |
| `nested` | Derinlik 2 ve üzeri yanıtlara yanıtları tut       |
| `all`    | Mevcut tüm doğrudan ve iç içe yanıtı tut          |

Yuvalamayı sınırlamak için `maxDepth`'i kullan. X bir konuşma atasını
atladığında üst bağlantıları eksik olabilir. Actor mevcut en iyi derinliği
korur.

## Sıralama

Şu değerlerle `sort`'u kullan:

- `relevance` X kaynak sırasını korur
- `latest` en yeniden en eskiye sıralar
- `oldest` en eskiden en yeniye sıralar
- `likes` en yüksek beğeni sayısını önce sıralar

Profil hedefleri, sıralamadan önce istenen benzersiz, filtrelenmiş sonuç
sayısını toplar. Tweet hedefleri genel sıralamayı korur.

`sortBy` ve `queryType` uyumluluk takma adları desteklenmeye devam eder.

## Yanıt filtreleri

Desteklenen tüm filtreler veri kümesi yazımlarından önce çalışır.

### Metin ve varlık filtreleri

| Girdi              | Davranış                                |
| -------------------- | ------------------------------------------ |
| `exactPhrase`         | Bir tam ifade gerektir                    |
| `anyWords`            | En az 1 kelime veya ifade gerektir        |
| `excludeWords`        | Eşleşen kelimeleri veya ifadeleri kaldır  |
| `keywordInclude`      | `anyWords` ile birleştirilmiş takma ad    |
| `keywordExclude`      | `excludeWords` ile birleştirilmiş takma ad |
| `hashtags`            | En az 1 hashtag gerektir                  |
| `cashtags`            | En az 1 cashtag gerektir                  |
| `mentioning`          | Bir @bahsetme gerektir                    |

### Yazar ve dil filtreleri

| Girdi                    | Davranış                                    |
| -------------------------- | ---------------------------------------------- |
| `fromUser`                  | Tek bir yanıt yazarını tut                    |
| `toUser`                    | Bir kullanıcı adına yönelik yanıtları tut     |
| `lang`                      | Tek bir X dil kodunu tut                      |
| `verifiedOnly`              | Herhangi bir herkese açık doğrulama işareti gerektir |
| `blueVerifiedOnly`          | X Premium doğrulaması gerektir                |
| `excludeOriginalAuthor`     | Kaynak yazarın kendi yanıtlarını kaldır       |

### Etkileşim filtreleri

`minLikes`, `minReplies`, `minRetweets`, `minQuotes`, `minViews` ve
`minBookmarks`'ı kullan. `minFaves` takma adı `minLikes`'a eşlenir.

### Medya ve zaman filtreleri

- Herkese açık medyalı yanıtlar için `hasMediaOnly: true` ayarla.
- `mediaType`'i `any`, `image`, `video`, `gif` veya `link` olarak ayarla.
- Kapsayıcı bir başlangıç zaman damgası için `since` ayarla.
- Hariç tutucu bir bitiş zaman damgası için `until` ayarla.
- `sinceTime` ve `untilTime`'ı uyumluluk takma adları olarak kullan.

## Sınırlar, faturalandırma ve devam

`maxItems`, çalıştırma genelinde teslim edilen satırları sınırlar.
`maxItemsPerTarget`, her gönderiyi veya profili sınırlar.

Bağımsız hedefler eşzamanlı çalışır. Her hedef sıralı imleç sayfalamasını
korur. Veri kümesi yazımları üst sınırları, tekilleştirmeyi, atfı ve
faturalamayı atomik tutar.

Actor, tekrarları faturalamadan önce kaldırır. Farklı hedeflerden gelen
tekrarlanan satırları korumak için `dedupeAcrossTargets: false` ayarla.

Sayfa sınırlı bir çalıştırmadan sonra varsayılan anahtar-değer deposundan
`next-cursors`'ı oku. O hedefe devam etmek için `startCursor` aracılığıyla
bir imleç geçir.

## Çıktı alanları

Veri kümesi ve run-report şemaları döndürülen her alanı açıklar. Temel
alanlar ayrıca ajanlar ve üretilen entegrasyonlar için örnekler içerir.

Her tam yanıt satırı şu temel alanları içerebilir:

| Alan                | Açıklama                                                |
| -------------------- | ---------------------------------------------------------- |
| `id`                  | Yanıt ID'si                                               |
| `text`                | Yanıt metni                                               |
| `fullText`            | Uzun biçimli yanıt metni                                  |
| `createdAt`           | Yanıt zaman damgası                                       |
| `lang`                | X dil kodu                                                |
| `url`                 | Doğrudan yanıt URL'si                                     |
| `conversationId`      | X konuşma ID'si                                            |
| `inReplyToId`         | Doğrudan üst ID                                            |
| `inReplyToUserId`     | Üst yazar ID'si                                            |
| `inReplyToUsername`   | Üst kullanıcı adı                                          |
| `likeCount`           | Beğeni                                                    |
| `replyCount`          | Alt yanıtlar                                               |
| `retweetCount`        | Yeniden paylaşımlar                                        |
| `quoteCount`          | Alıntılar                                                 |
| `viewCount`           | Görüntülenme                                              |
| `bookmarkCount`       | Yer imleri                                                |
| `author`              | Mevcut herkese açık yazar metadata'sı                       |
| `media`               | Görseller, videolar, GIF'ler ve varyantlar                 |
| `entities`            | Hashtag'ler, cashtag'ler, bahsetmeler, URL'ler ve video zaman damgaları |
| `quoted_tweet`        | Mevcut olduğunda alıntılanan gönderi                        |
| `retweeted_tweet`     | Mevcut olduğunda yeniden paylaşılan gönderi                 |

Tam satırlar ayrıca mevcut kaynak metadata'sını korur. Buna `isNoteTweet`,
`isReply`, `isLimitedReply`, `isQuoteStatus`, `source`, `type`,
`displayTextRange`, `contentDisclosure`, `conversationControl`, `article`,
`limitedActions`, `reactionContext`, `card`, `communityId`, `communityNote`,
`edit`, `isTranslatable`, `noteTweet`, `place`, `postCta`,
`possiblySensitive`, `previousCounts`, `tombstone`, `unmentionedUserIds` ve
`viewState` dahildir.

Düz satırlar konuşma soyunu, kaynak ayrıntılarını, sonuç türünü ve şema
sürümünü korur. Tam alanlar için OpenAPI'a bak.

### Yazar metadata'sı

İç içe yazarlar herkese açık profil sözleşmesini izler. Bu sözleşme
kimliği, sayaçları, doğrulamayı, kullanılabilirliği, profesyonel verileri ve
profil biyografilerini kapsar.

Düz çıktı `authorId`, `authorUsername`, `authorName`, `authorFollowers`,
`authorFollowing` ve `authorVerified` ekler.

### Medya metadata'sı

Medya, kullanılabilirlik, geometri, etiketler, video varyantları,
`watchNowUrl` ve `visitSiteUrl` eylemlerini içerir.

Düz çıktı `mediaUrls` ekler.

## Çıktı modları

### Kompakt

Veri kümesi genişliğini azaltmak için `outputMode: "compact"` ayarla. Metin,
konuşma, yazar, etkileşim ve medya alanlarını korur.

### Full

Desteklenen her herkese açık alanı korumak için `outputMode: "full"` ayarla.

### Raw

`raw` altında sanitize edilmiş bir kaynak anlık görüntüsü eklemek için
`outputMode: "raw"` ayarla.

### İç içe veya düz

Varsayılan `flat` düzeni iç içe nesneleri korur ve tablolar için yazar
alanları ekler. Eklenen düz alanları atlamak için `outputPreset: "nested"`
ayarla.

### Alan adlandırması

`fieldStyle`'ı `source`, `camelCase` veya `snake_case` olarak ayarla. Actor,
çakışan kaynak anahtarlarının üzerine yazmaktan kaçınır.

## Tanılamalar

Başarılı veri satırları `resultType: "reply"` kullanır. Veri dışı çıkışlar,
uygulanabilir bir düzeltmeyle `diagnostics`'e tam olarak 1 ücretsiz kayıt
yazar.

Girdisiz ve geçersiz girdi çıkışları dahil her sonuç `run-report` yazar.
Rapor şeması tamamlanmayı, faturalamayı, hataları ve kaydedilmiş imleçleri
belgeler. `version` alanı yayınlanmış tam Actor kaynak sürümünü bildirir.

Olası durumlar arasında şunlar bulunur:

- `no-input`
- `invalid-input`
- `replies-incomplete`
- `zero-output`
- `aborted`
- `unexpected-error`

## Maliyeti ne kadar?

Her Apify planında **teslim edilen satır başına $0.00015** ücret alınır. Bu,
satır başına `$0.00015`'e eşittir. Apify, platform kullanımını ayrıca
faturalandırır.

Xquik, teslim edilen veri satırı başına bir ücret uygular. Tanılamalar
`diagnostics` içinde ücretsizdir. Başlangıç, URL, sorgu, sayfalama, filtre
veya proxy ücreti uygulanmaz.

Varsayılan Apify zaman aşımı `0`'dır, bu yüzden çalıştırmaların zaman
sınırı yoktur. Actor, üst sınıra veya uygun veri tükenene kadar devam eder.
Çağıran yine de sonlu bir Apify zaman aşımı ayarlayabilir. O zaman
`completionReason: "deadline_reached"`, o yapılandırılmış sınırın yaklaştığı
anlamına gelir. Actor, kontrol noktaları, satırlar, raporlar ve başarılı bir
çıkış için son 15 saniyeyi tutar. Zaten toplanan yanıtlar teslim edilmiş
kalır ve bir kez faturalandırılır. Tamamlanmamış sayfalama devam
ettirilebilir kalır.

## Herkese açık görev örnekleri

50 herkese açık görevden seç. Her birinin sınırlı bir girdisi ve eşleşen bir
veri kümesi görünümü vardır. Çalıştırmadan önce herhangi bir görevi düzenle.

Şu örneklerle başla:

- [Collect replies for AI agents](https://apify.com/xquik/x-reply-scraper/examples/collect-replies-for-ai-agents)
- [Build an X reply RAG dataset](https://apify.com/xquik/x-reply-scraper/examples/build-x-reply-rag-dataset)
- [Archive replies for LLM processing](https://apify.com/xquik/x-reply-scraper/examples/archive-replies-for-llm-processing)
- [Extract reply leads for CRM](https://apify.com/xquik/x-reply-scraper/examples/extract-reply-leads-for-crm)

## API örneği

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
curl "https://api.apify.com/v2/acts/xquik~x-reply-scraper/run-sync-get-dataset-items" \
  -X POST \
  -H "Authorization: Bearer <APIFY_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"tweetIds":["2082577277246972300"],"maxItems":100}'
```

## Otomasyon ve entegrasyonlar

Actor'ı Apify zamanlamaları, webhook'lar, API istemcileri, Make, Zapier,
n8n, Google Sheets, bulut depolama veya
[Apify MCP sunucusu](https://docs.apify.com/platform/integrations/mcp)
üzerinden çalıştır.

Uygun ajan iş akışları ayrıca
[x402](https://docs.apify.com/integrations/x402) veya
[Skyfire](https://docs.apify.com/integrations/skyfire)'ı da kullanabilir.

Xquik ayrıca 47 dashboard aracı, 129 REST işlemi, imzalı webhook'lar ve bir
MCP sunucusu sağlar.

## Sorumlu kullanım

Yalnızca herkese açık veri topla. Geçerli yasalara ve platform kurallarına
uy.

Yanıt veri kümeleri kişisel veri içerebilir. Yasal bir amaç seç. Saklamayı
en aza indir. Dışa aktarımları koru. Gerekli olduğunda silme ve erişim
taleplerine uy.

Actor, korunan hesapları atlamaz. Müşteri X şifrelerini, oturum
çerezlerini veya kimlik doğrulama token'larını istemez.

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
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): Gönderi
  URL'leri veya ID'leri için toplu olarak yanıtları, alıntıları, retweet
  edenleri, beğenenleri ve thread'leri kazır. Gönderilerle kimin etkileşime
  girdiğini ölçtüğünde kullan. Satır başına $0.00015'ten başlar.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): Takipçileri,
  takip edilenleri, Liste üyelerini, aboneleri ve Topluluk üyelerini profil
  satırları olarak kazır. Kitle veya üye listelerine ihtiyacın olduğunda kullan.
  Profil başına $0.00015'ten başlar.
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
- [X (Twitter) Brand Monitoring](https://apify.com/xquik/x-twitter-brand-monitoring):
  Yapay zeka destekli ilgi, duygu durumu ve müşteri deneyimi yanıtlarıyla marka
  bahsedilmelerini izler ve çalıştırmaları karşılaştırır. Bir markayı zaman
  içinde takip ettiğinde kullan. Analiz edilen tweet başına $0.0003'ten başlar.
- [X Tweet Sentiment Analysis](https://apify.com/xquik/x-tweet-sentiment-analysis):
  Yapay zeka ile her tweet için tutum, yoğunluk ve alaycılık olasılığını
  etiketler. Herhangi bir konuda genel duygu durumuna ihtiyacın olduğunda
  kullan. Analiz edilen tweet başına $0.0003'ten başlar.
- [X (Twitter) Stock & Crypto Signal](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  Yapay zeka ile yükseliş, düşüş, nötr veya karışık duruşu, içerik türünü,
  kesinliği ve varlık ilgisini etiketler. Hisse senedi, kripto veya alım satım
  konuşmalarını takip ettiğinde kullan. Analiz edilen tweet başına $0.0003'ten
  başlar.
- [X (Twitter) News Monitor with AI](https://apify.com/xquik/x-twitter-news-monitor):
  Yapay zeka ile haber gönderilerini biçim, kaynak atfı ve konu ilgisine göre
  etiketler. Haberi yorumdan ayırdığında kullan. Analiz edilen tweet başına
  $0.0003'ten başlar.
- [X Tweet Classifier with AI](https://apify.com/xquik/x-twitter-tweet-classifier):
  Yapay zeka ile her tweet için kendi kategori, puan ve evet/hayır sorularını
  yanıtlar. Hazır analizler etiketlerine uymadığında kullan. Analiz edilen
  tweet başına $0.0003'ten başlar.
