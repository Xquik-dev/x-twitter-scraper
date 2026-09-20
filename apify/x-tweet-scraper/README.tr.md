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
scraper hizmetidir. X Tweet Scraper, tweet'leri, yanıtları, profilleri,
listeleri ve aramaları 50'den fazla filtreyle toplar. Diğer tüm Apify
Actor'ları filtreleme veya tekilleştirmeden önce ücret alır. Xquik yalnızca
teslim edilen, benzersiz, filtreyle eşleşen sonuçlar için ücret alır.

Herkese açık X (Twitter) tweet'lerini **her Apify planında teslim edilen
sonuç başına $0.00015'ten başlayarak** kazı. Apify, platform kullanımını
ayrıca faturalandırır. X girişi, başlangıç ücreti veya sorgu ücreti yok.
[Xquik](https://xquik.com) tarafından geliştirildi.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## X Tweet Scraper ne yapar?

X Tweet Scraper, tweet'leri, etkileşim metriklerini, herkese açık yazar
profillerini ve medyayı döndürür. 50'den fazla filtreyle URL'leri,
handle'ları, Liste ID'lerini, Tweet ID'lerini ve arama sorgularını kabul
eder.

### Temel davranış

- Filtreler ve tekrar kaldırma faturalamadan önce çalışır.
- Tek bir girdi aramaları, zaman akışlarını, Listeleri, arama ve etkileşim
  modlarını destekler.
- Tweet ID girdilerinin sabit bir sayı üst sınırı yoktur. Apify harcama ve
  zaman aşımı ayarları uygulanır.
- Otomatik arama ve alıntı sayfaları 300'e kadar satır ister.
- Kaydedilmiş imleçler orijinal sayfa sınırlarını korur ve süresi
  dolduğunda yeniden başlar.
- Profil modları, her ikisi de geçerli olduğunda zaman akışını ve yazar
  aramasını birleştirir.
- Sayfa günlükleri, hedefleri tekrarlamadan `fetchDurationMs`,
  `processingDurationMs`, `pushDurationMs`, `statusDurationMs` ve
  `fullPageDurationMs` içerir.
- Kontrol noktaları, yeniden başlatmalardan sonra kabul edilen satırları,
  zamanlamayı ve hata sayılarını korur.

### Her zaman en güncel yapıyı kullan

Tüm yayınlanmış düzeltmeleri almak için her çalıştırmada `latest`'i seç.

Yapı belirtmezsen Apify bu Actor'ın `latest` varsayılanını kullanır.
Console çalıştırmaları ve standart API örnekleri bu varsayılanı devralır.

Kaydedilmiş görevler Actor varsayılanını geçersiz kılabilir. Zamanlamalar ve
görev entegrasyonları bu seçimi yeniden kullanır. Her geçersiz kılmayı
`latest` olarak tut.

Apify, tam yapı numaralarını `latest`'e yönlendirmez. Sabitlenmiş numaraları
`latest` ile değiştir. Sabit bir yapıyı yalnızca geçici geri alma veya
tekrarlanabilirlik için kullan.

Apify'ın
[yapı etiketlerini](https://docs.apify.com/platform/actors/development/builds-and-runs/builds),
[çalıştırma seçeneklerini](https://docs.apify.com/platform/actors/running/runs-and-builds)
ve [görev dokümantasyonunu](https://docs.apify.com/platform/actors/running/tasks)
oku.

## Görev örnekleri

50 herkese açık görevden seç. Her birinin sınırlı bir girdisi ve eşleşen bir
veri kümesi görünümü vardır. Her görev gerçek bir arama veya hedefle açılır.
Çalıştırmadan önce düzenle.

- [Fetch fresh X posts for AI agents](https://apify.com/xquik/x-tweet-scraper/examples/search-x-posts-for-ai-agents)
- [Build an X dataset for RAG](https://apify.com/xquik/x-tweet-scraper/examples/build-x-rag-dataset)
- [Extract an X article for RAG](https://apify.com/xquik/x-tweet-scraper/examples/extract-x-article-for-rag)
- [Monitor AI search visibility on X](https://apify.com/xquik/x-tweet-scraper/examples/monitor-ai-search-visibility-on-x)
- [Track AI SEO and generative engine optimization](https://apify.com/xquik/x-tweet-scraper/examples/track-generative-engine-optimization-talk)
- [Discover AI agent tools on X](https://apify.com/xquik/x-tweet-scraper/examples/discover-ai-agent-tools-on-x)
- [Collect AI product feedback](https://apify.com/xquik/x-tweet-scraper/examples/collect-ai-product-feedback)
- [Monitor brand mentions on X](https://apify.com/xquik/x-tweet-scraper/examples/monitor-brand-mentions-on-x)
- [Export Twitter data to CSV](https://apify.com/xquik/x-tweet-scraper/examples/export-twitter-data-to-csv)
- [Collect replies to an OpenAI post](https://apify.com/xquik/x-tweet-scraper/examples/collect-replies-to-an-openai-post)
- [Extract a complete Twitter thread](https://apify.com/xquik/x-tweet-scraper/examples/extract-complete-twitter-thread)
- [Collect Spanish AI conversations](https://apify.com/xquik/x-tweet-scraper/examples/collect-spanish-ai-conversations)

### X Tweet Scraper hangi verileri çıkarabilir?

| Alan                    | Açıklama                                                    |
| ------------------------ | ------------------------------------------------------------- |
| `id`                     | Tweet ID'si                                                   |
| `text`                   | Tam tweet metni (25 bin karaktere kadar Note Tweet'ler dahil)  |
| `createdAt`              | X'in yerel zaman damgası dizesi                               |
| `likeCount`              | Beğeni sayısı                                                 |
| `retweetCount`           | Retweet sayısı                                                |
| `replyCount`             | Yanıt sayısı                                                  |
| `quoteCount`             | Alıntı tweet sayısı                                           |
| `viewCount`              | Görüntülenme sayısı                                           |
| `bookmarkCount`          | Yer imi sayısı                                                |
| `lang`                   | Tweet dili                                                    |
| `url`                    | Tweet'e doğrudan bağlantı                                     |
| `tweetUrl`               | Düz çıktı tweet URL'si takma adı                              |
| `twitterUrl`             | Düz çıktı twitter.com biçimli URL                             |
| `author`                 | Mevcut yazar alanları (kullanıcı adı, biyografi, web sitesi, sayaçlar) |
| `authorUsername`         | Düz çıktı yazar handle'ı                                       |
| `authorFollowers`        | Düz çıktı yazar takipçi sayısı                                 |
| `authorUrl`              | Mevcut olduğunda düz çıktı yazar web sitesi                    |
| `authorDescription`      | Düz çıktı yazar biyografi metni                                |
| `authorCoverPicture`     | Düz çıktı yazar kapak görseli URL'si                           |
| `authorPinnedTweetIds`   | Düz çıktı yazar sabitlenmiş tweet ID'leri                      |
| `media`                  | Eklenen görseller, videolar, GIF'ler                          |
| `mediaUrls`              | Düz çıktı medya URL'leri                                       |
| `imageUrls`              | Düz çıktı görsel URL'leri                                      |
| `videoUrls`              | Düz çıktı video URL'leri                                       |
| `entities`               | Hashtag'ler, URL'ler, bahsetmeler ve video zaman damgaları     |
| `displayTextRange`       | Mevcut olduğunda X görüntü metni aralığı                       |
| `contentDisclosure`      | Mevcut olduğunda ifşa metadata'sı                              |
| `conversationControl`    | Yanıt politikası ve herkese açık konuşma sahibi                |
| `reactionContext`        | Bir tepkinin referans verdiği herkese açık gönderi ve kullanıcı |
| `limitedActions`         | Herkese açık etkileşim kısıtlamaları ve istemleri              |
| `isLimitedReply`         | Yanıtların sınırlı olup olmadığı                               |
| `isNoteTweet`            | Bunun bir Note Tweet (uzun biçimli gönderi) olup olmadığı      |
| `isQuoteStatus`          | Bu tweet'in başka bir tweet'i alıntılayıp alıntılamadığı       |
| `isRetweet`              | Bu satırın retweet olup olmadığı, orijinali ekli               |
| `isPinned`               | Yazar bu gönderiyi sabitledi mi, düz satırlar                  |
| `isReply`                | Bu tweet'in bir yanıt olup olmadığı                            |
| `quoted_tweet`           | Alıntılanan tweet nesnesi (alıntı tweet ise)                   |
| `conversationId`         | Thread/konuşma ID'si                                           |
| `resultType`             | Zengin satırlar, etkileşim satırları ve tanılamalar için satır türü |
| `sourceTweetId`          | Makale ve etkileşim modları için kaynak tweet ID'si            |
| `article`                | `mode: "article"` içinde yapılandırılmış makale verisi         |

İsteğe bağlı tweet metadata'sı `card`, `communityId`, `communityNote`,
`edit`, `noteTweet` ve `postCta` içerebilir. `isTranslatable`, `place`,
`possiblySensitive` ve `viewState`, diğer herkese açık bağlamı korur.
`previousCounts`, düzenleme öncesi etkileşimi korur. `tombstone`,
bildirimleri korur. `unmentionedUserIds`, konuşmayı terk eden kullanıcıları
listeler. Tam alanlar için OpenAPI'a bak.

İç içe yazarlar herkese açık profil sözleşmesini izler. Bu sözleşme kimliği,
sayaçları, doğrulamayı, kullanılabilirliği, profesyonel verileri ve profil
biyografilerini kapsar.

Retweet satırları `isRetweet` değerini `true` yapar. `text` alanı orijinal
gönderinin tamamını taşır, `retweeted_tweet` ise orijinal gönderiyi yazarı &
sayaçlarıyla birlikte tutar.

Tweet satırları ayrıca `type`, `source`, `inReplyToId`, `inReplyToUserId`,
`inReplyToUsername` ve `retweeted_tweet`'i korur. Alıntılanan ve yeniden
paylaşılan tweet'ler aynı desteklenen güvenli alanları özyinelemeli olarak
korur.

Medya, kullanılabilirlik, geometri, etiketler, video varyantları,
`watchNowUrl` ve `visitSiteUrl` eylemlerini içerir.

Görüntüleyene özgü durum, veri kümene değil Xquik'in getirme hesabına
aittir. Takip etme, engelleme, sessize alma, yer imi, beğeni, yeniden
paylaşma, düzenleme izni ve benzeri görüntüleyen işaretleri, ham çıktı dahil
her zaman kaldırılır.

## Tweet kazımanın maliyeti nedir?

Her Apify planında teslim edilen satır başına `$0.00015` ücret alınır. Apify,
platform kullanımını ayrıca faturalandırır. Xquik, teslim edilen veri satırı
başına bir ücret uygular. Tanılamalar `diagnostics` çıktısında ücretsizdir.

Xquik aboneliği uygulanmaz. Ayrı bir başlangıç veya sorgu ücreti
uygulanmaz. Her çalıştırma ayrıca, Apify'ın Actor'a gösterdiği canlı olay
başına ödeme fiyatından hesaplanan `estimatedChargeUsd` ile bir
`run-report` kaydı yazar. Girdisiz ve geçersiz girdi çıkışları dahil her
sonuç `run-report` yazar. Çalıştırma raporları veri satırlarını `realRows`
içinde ve tanılamaları `diagnosticRows` içinde ayırır.

Başka bir çalıştırmaya harcama yapmadan önce boş sonuçları anla.
`filtering` nesnesi, raporlarda ve son tanılamalarda `serverFilteredRows`'u
`actorFilteredRows`'tan ayırır. Bunlar, tekrarlanan kaynak satırları dahil
işlenen sayfalar genelinde reddedilen satırları sayar.
`pagesWithUnknownServerFiltering`, geçerli sunucu sayıları olmayan
sayfaları belirler. Eksik sayılar boşluk olarak kalır. Filtrelenen satırlar
asla sonuç ücreti gerektirmez.

Kaynak tükenmesi, çıkarmayı istediğin sınırın altında tamamlayabilir. Bu
çalıştırmalar `completionReason: "source_exhausted"` ile
`outcome: "complete"` raporlar. Kesintiye uğrayan çalıştırmalar kısmi
sonuçlarını ve yeniden deneme rehberliğini korur.

`failedSubtargets`, okuma hataları tarafından durdurulan sorguları ve
profil hedeflerini sayar. Sayfalama ve ödeme hataları kısmi satırları ve
tamamlanmamış imleçleri korur. Bunlar asla hedefin eksik olduğu anlamına
gelmez. Kabul edilen satırlar veri satırları olarak kalır ve faturalamaya
dahil edilir. Bu çalıştırmalar `completionReason: "partial_failure"`
kullanır. Hızlı sunucu taraflı sayfalama aynı raporlama sözleşmesini izler.

Kesintiye uğrayan çıkarma ayrıca ücretsiz bir `partial` tanılaması yazar.
Mevcut sonuçlar bozulmadan kalır. Tanılama `availableResults`,
`failedTargets`, `retryable` ve `nextAction`'ı bildirir. Başarılı bir Actor
çıkışı teslimatı doğrular, eksiksiz çıkarmayı değil.

Korunan veya eksik hedefler, geçerli sonuçları olan çalıştırmalar dahil
hata olarak sayılır. Tüm hatalar kullanılamayan hedeflerle ilgili
olduğunda tanılamalar `retryable: false` ayarlar. Hedef URL'lerini veya
kullanıcı adlarını kontrol et ve kullanılabilir herkese açık hesapları seç.
Diğer hatalar, tamamlanmamış hedefler için yeniden deneme rehberliğini
korur.

Tanılama bu hedefleri `unavailableTargets` içinde adlandırır. Her kayıtta
senin girdiğin haliyle `target` ve bir `reason` bulunur, `not_found` veya
`protected`. Liste en fazla 100 kayıt tutar. Eksiksiz bir çalıştırma için
onları girdiden çıkar.

`completionReason: "pagination_safety_limit"` bir okuma hatası değildir. Bu,
sayfalamanın geçerli satırları koruduğu, ardından sınırlı güvenlik
sınırına ulaştığı anlamına gelir. En Yeni aramalar, geçerli kurtarma
imleçleri kaldığı sürece boş sayfalar boyunca devam eder. En Popüler
aramalar ve hesap penceresi kurtarma, 10 ardışık boş sayfadan sonra kontrol
noktasına alınabilir. Hizmet bir çalıştırmanın ortasında durmuş sayfalama
bildirirse çalıştırma 31 saniye bekler ve aynı sayfayı 1 kez daha ister.
Sonra yeni gönderilerle devam eder veya tamamlanmış olarak biter. İkinci bir
duraklama aramayı kontrol noktasına alır. Kontrol noktasına alınan bir
çalıştırma eksik çıkarma bildirir ve devam ettirilebilir imleçleri korur.
Ardışık boş sayfalardan
sonra bile bir terminal sayfası sayfalamayı tamamlar. `failedSubtargets` `0`
olarak kalır. Yalnızca kabul edilen veri kümesi satırları için ödersin.

Varsayılan Apify zaman aşımı `0`'dır, bu yüzden çalıştırmaların zaman
sınırı yoktur. Actor, üst sınıra ulaşana veya uygun veriyi bitirene kadar
devam eder. Çağıran yine de sonlu bir Apify zaman aşımı ayarlayabilir. O zaman
`completionReason: "deadline_reached"`, o yapılandırılmış sınırın
yaklaştığı anlamına gelir. Actor, kontrol noktaları, satırlar, raporlar ve
başarılı bir çıkış için son 15 saniyeyi tutar. Geçerli satırlar teslim
edilmiş kalır ve bir kez faturalandırılır. Tamamlanmamış sayfalama devam
ettirilebilir kalır.

- Başlangıçlar, sorgular, URL'ler ve tekil Tweet aramaları ayrı bir ücret
  eklemez.
- Actor, satırları yazmadan veya faturalamadan önce tekrarları kaldırır.
- Girdisiz, geçersiz girdi ve sıfır çıktılı çalıştırmalar, ücretsiz
  `diagnostics` çıktısına 1 uygulanabilir kayıt yazar.

## X Tweet Scraper'ı tweet verisi kazımak için nasıl kullanırım?

### 1. URL'leri doğrudan yapıştır

Tweet, profil, arama veya liste URL'lerinin karışımını yapıştır:

```json
{
  "startUrls": [
    { "url": "https://x.com/elonmusk/status/1846987139428634858" },
    { "url": "https://x.com/nasa" },
    { "url": "https://x.com/search?q=AI%20lang%3Aen" },
    { "url": "https://x.com/i/lists/1748648376080666720" }
  ],
  "maxItems": 500
}
```

Actor, tweet URL'lerini 100'e kadar eşzamanlı gruplar halinde arar. Kısmi
başarılı yanıtlar, çözülmemiş ID'leri bir kez yeniden kontrol eder. Grup çıktısı
benzersiz kalır ve istenen ID'lerle eşleşir. Profil URL'leri, profil zaman
akışını yazar aramasıyla birleştirir. Arama URL'leri sorguyu çıkarır. Liste
URL'leri, genel `list:` araması yerine özel liste yolunu kullanır.
`maxItems`, yapıştırılan tüm URL'ler genelinde sonuçları sınırlar.

### 2. Toplu handle'lar

Birçok `from:username` araması için kısayol:

```json
{ "twitterHandles": ["elonmusk", "nasa", "openai"], "maxItems": 100 }
```

Her handle, imleç sayfalamasını yazar aramasıyla birleştirir. Actor,
çıktı ve faturalamadan önce tekrarlanan satırları kaldırır. Kullanıcı
adları isteğe bağlı bir `@` önekini kabul eder.

### 3. Tweet ara

**Search Terms** alanına bir veya daha fazla sorgu ayarla:

```json
{
  "searchTerms": ["from:elonmusk AI", "#bitcoin lang:en"],
  "maxItems": 1000,
  "queryType": "Latest"
}
```

`mode`, Tweet ID'leri olmadan `tweet` veya `tweets` ise, sorgu girdisi
Search'e yönlendirilir. Bu, geçerli `searchTerms`'in boş bir arama
döndürmesini önler.

`from:elonmusk since:2026-01-01 until:2026-01-02` gibi tarih pencereli düz
hesap geriye dönük doldurmaları, sınırlı bir hesap rotası kullanır. Güncel
pencereler, profil zaman akışını yazar aramasıyla birleştirir. Geçmişe
dönük pencereler tam arama kullanır. Uyumlu bitişik pencereler tek bir
alımı paylaşır ve orijinal `searchTerm` atıflarını korur. `maxItems`, tüm
arama terimleri genelinde sonuçları sınırlar. Tüm `since:`/`until:` ve
unix zamanlı pencereler döndürülen her tweet'i doğrular. Filtrelenmiş
hesap pencereleri, çıktı üst sınırını uygulamadan önce tam kaynak
sayfalarını okur. Filtrelenmiş sayfalar, eşleşen tweet'ler veya sayfalama
bitene kadar devam eder. Bağımsız arama terimleri eşzamanlı çalışır. Her
terim, tutarlı derinlik ve atıf için sıralı imleç sayfalamasını korur.
Hesap pencereleri yalnızca uyumlu olduklarında tek bir alımı paylaşır.

### 4. Tweet'leri ID'ye göre ara

```json
{ "tweetIds": ["1846987139428634858", "1858743654778892784"], "maxItems": 100 }
```

Actor, istek başına 100 ID işler. Grupları eşzamanlı çalıştırır ve her
tamamlanan grubu bir kez yazar. Kısmi yanıtlar yalnızca çözülmemiş ID'leri
yeniden kontrol eder. Sonuçlar girdi sırasını korur, tekrarları kaldırır ve
istenmeyen tweet'leri hariç tutar.

Aynı arama için kabul edilen takma adlar arasında `tweetId`, `tweetIDs`,
`tweets`, `postIds`, `lookupPostIds`, `tweetUrls` ve `postUrls` bulunur.

### 5. Açık etkileşim, thread ve makale modları

Diğer girdi alanlarından bağımsız olarak tek bir rota istediğinde `mode`'u
kullan:

```json
{ "mode": "replies", "replyTweetIds": ["1846987139428634858"], "maxItems": 100 }
```

Desteklenen açık modlar: `tweet`, `tweets`, `search`, `profileTweets`,
`profileReplies`, `profileMedia`, `profileLikes`, `listTweets`, `article`,
`replies`, `quotes`, `thread`, `retweeters` ve `favoriters`.

`profileTweets`, X'teki profil Posts sekmesini izler. Hesabın gönderilerini,
repost'larını ve kendi gönderilerine verdiği yanıtları tarih sırasıyla
döndürür. Başka hesaplara verilen yanıtlar ve diğer yazarlardan gelen konuşma
bağlamı faturalamadan önce çıkarılır.

Yalnızca orijinal gönderiler için istemediğin türleri hariç tut:

```json
{
  "mode": "profileTweets",
  "twitterHandles": ["apify"],
  "tweetTypes": { "excludeReplies": true, "excludeRetweets": true },
  "maxItems": 100
}
```

`tweetTypes.excludeReplies`, `excludeRetweets` ve `excludeQuotes` her kaynakta
çalışır. Bir arama bunları X'e `-filter:replies`, `-filter:nativeretweets` ve
`-filter:quote` olarak gönderir. Bir profilde veya bir Listede Actor bu
satırları kendisi atar. Hariç tutulan satırlar veri kümesine asla ulaşmaz. Bu
yüzden onlar için asla ödemezsin ve `maxItems` sayısına asla dahil olmazlar.

`profileReplies`, X'in With Replies sekmesini izler. Hedefin yazdığı profil
gönderilerini ve yanıtlarını döndürür. Actor, diğer yazarlardan gelen konuşma
bağlamını hariç tutar. Yalnızca yanıt sonuçlarına ihtiyacın olduğunda
`filter:replies` veya `to:` aramasını kullan.

Arama ve sayfalanmış Tweet modları `time.since`, `time.until`, Unix zaman
damgalarını ve `lang`'i destekler. Bunlar profil Posts, With Replies,
Media, Likes, Listeler, yanıtlar, alıntılar ve thread'leri içerir. Eşleşen
düz tarih operatörleri de çalışır. Actor, faturalamadan önce her satırı
doğrular. Alt tarih sınırı kapsayıcıdır. Üst sınır hariç tutucudur. Tarih
filtreleri, kullanılabilir tarihi olmayan satırları hariç tutar. Dil
filtreleri, eksik veya uyuşmayan dilleri hariç tutar. Filtrelenen satırlar
asla istenen sonuç sınırını tüketmez. Sıralanmamış sonuçlar, eşleşen
sonuçlardan önce daha eski Tweet'ler geldiğinde sayfalamaya devam eder.
Tarih penceresi olan bir Liste çalıştırması doğrudan pencereye atlar. Bu
yüzden 30 gün önceki bir gün, dün kadar sürer. Bir Listenin derinlerindeki bir
pencere için Tweet'ler X'in Liste aramasından gelir. Bu arama, Liste zaman
akışının gösterdiği birkaç yanıtı dışarıda bırakır. Bir Liste çalıştırması,
art arda 3 sayfa yalnızca alt tarih sınırından eski Tweet'ler içerdiğinde de
biter. Üst sınır hariç tutucu olduğu için `since` ve `until` için aynı tarih
boş bir penceredir. 1 tam gün almak için `until` değerini sonraki güne ayarla.
Tweet filtreleri kullanıcı listelerine veya doğrudan Tweet/makale
aramalarına uygulanmaz.

`mode: "replies"` daha katıdır. Doğrudan zaman akışlarını, desteklenen
sıralama modlarını, her ileri imleç modülünü, etiketlenmiş gizli içerik
dallarını, bildirilen yanıt sayısına göre ölçeklenen zaman bölümlerini ve
aramayı birleştirir. Her tweet satırının `inReplyToId`'si istenen tweet
ID'sine eşittir. İç içe konuşma yanıtları asla doğrudan yanıt olarak
sayılmaz. X, bildirilenden daha az yanıt gösteriyorsa Actor, güvenli kısmi
satırları korur. Kapasite kaldığında `diagnostics`'e 1
`replies-incomplete` kaydı ekler. Bir kapsama eşiğine ulaşmak, çıkarmanın
tamamlandığı anlamına gelmez. Çalıştırma, sınırına veya doğrulanmış kaynak
tükenmesine kadar kısmi kalır. `replyCoverage`, sayıları, stratejileri,
sayfalama anormalliklerini, eksik alanları ve önerilen yedek planı
bildirir. Actor, sıfır çıktı döndürmeden önce geçici yeniden deneme
gecikmelerine uyar. Bir yanıt hedefi için 25.000'in üzerindeki toplamlar
dahil, `maxItems`'i istediğin toplama ayarla.

Makale satırları `resultType: "article"`, `sourceTweetId`, `article` ve
isteğe bağlı `author` içerir. Etkileşim kullanıcı satırları
`resultType: "user"`, `sourceTweetId` ve `engagementMode` içerir.

Retweet edenler normal bir herkese açık etkileşim modu olarak kalır.
Beğenenler elden geldiğincedir: X yalnızca uygun veya sahibi tarafından
görünür kılınan gönderiler için beğenen kullanıcıları gösterebilir. Profil
beğenileri de elden geldiğincedir çünkü birçok herkese açık profil okunabilir
bir Likes sekmesi göstermez. X kullanıcıları veya beğenilen tweet'leri
göstermezse Actor ücretsiz bir `diagnostics` kaydı yazar. Yer imi sayıları
tweet satırlarında görünebilir, ancak X bir gönderiyi yer imlerine ekleyen
belirli hesapları göstermez.

### 6. Düz CSV çıktısı

Varsayılan iç içe JSON alanlarını koru veya elektronik tablo dostu sütunlar
ekle:

```json
{ "searchTerms": ["from:nasa moon"], "maxItems": 100, "outputPreset": "flat" }
```

Düz çıktı, `author` ve `media`'yı değiştirmeden korur ve ayrıca
`authorUsername`, `authorName`, `authorFollowers`, `tweetUrl`,
`twitterUrl`, `mediaUrls`, `imageUrls` ve `videoUrls` gibi üst düzey alanlar
ekler.

Her düz tweet satırı `media` taşır. Medyası olmayan bir tweet boş bir liste
alır, böylece her satır bir e-tabloda veya tipli bir pipeline'da aynı
anahtarlara sahip olur.

### 7. Alan adlandırmasını seç

Varsayılan olarak eski alan adlarını koru. Zengin veya ham sonuç verisi
için bir stil seç:

```json
{
  "searchTerms": ["from:nasa moon"],
  "maxItems": 100,
  "outputVariant": "rich",
  "fieldStyle": "snake_case"
}
```

Üst düzey ve iç içe sonuç alanları için `camelCase` veya `snake_case`
kullan. Düz snake case çıktısı, `author_username` ve `media_urls` gibi
alanlar içerir. `raw` altındaki güvenli kaynak anlık görüntüleri orijinal
kaynak anahtarlarını korur. Çakışan kaynak adları da veri kaybını önlemek
için değiştirilmeden kalır.

Eski tanılamalar `resultType`, `actorVersion` ve `replyCoverage` kullanır.
Zengin ve ham çıktı, `fieldStyle`'ı özyinelemeli olarak uygular. Örneğin
snake case, `result_type`, `actor_version` ve `reply_coverage` kullanır.
Overview veri kümesi görünümü her iki stille de çalışır. Çalıştırmanın
`fieldStyle`'ıyla eşleşen Console görünümünü seç. `camelCase fields`,
`camelCase` bekler. `snake_case fields`, `snake_case` bekler. Görünümler
yalnızca sütun seçer. Depolanan veya dışa aktarılan veriyi asla yeniden
adlandırmaz.

### 8. Gelişmiş filtreler

Kullanıcı, tarih, konum, medya ve etkileşim filtrelerini birleştir:

```json
{
  "twitterContent": "AI",
  "from": "elonmusk",
  "since": "2026-01-01_00:00:00_UTC",
  "until": "2026-03-01_00:00:00_UTC",
  "lang": "en",
  "filter:media": true,
  "min_faves": 1000,
  "maxItems": 500
}
```

Her iki X arama modunu eşzamanlı çalıştırmak için
`queryType: "Latest + Top"` ayarla. Actor, faturalamadan önce
tekilleştirir ve kullanılmayan kapasiteyi her iki moddan da geriye doldurur.
`Top`, ilgiye göre sıralanır ve kapsamlı değildir. Her eşleşen sorguyu bir
`searchTerm` alanı olarak eklemek için `includeSearchTerms: true` ayarla.
Kısa geçici okuma kesintileri, Actor bir tanılama döndürmeden önce bir
ekstra yeniden deneme alır.

`lang`'i ayarladığında Actor, döndürülen her tweet'in dilini doğrular.
Uyuşmazlıkları atlar ve eşleşen tweet'ler için sayfalamaya devam eder.

### Başka bir tweet Actor'ından geçiş yap

Zaten kullandığın girdiyi yapıştır. X Tweet Scraper, diğer tweet Actor'larının
kullandığı alan adlarını okur ve kendi alanlarına eşler. Kanonik adlar
belgelenen varsayılan olarak kalır. Bir takma ad asla bir alanı düşürmez ve
ödediğin tutarı asla değiştirmez. Girdi formu yalnızca kanonik alanları
listeler, böylece kısa kalır. Takma adlar JSON, API, SDK, otomasyon ve kayıtlı
görev girdilerinde çalışır.

| Zaten kullandığın alan                                                                                             | X Tweet Scraper bunu şöyle okur                                          |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `startUrls`, `urls`, `tweetUrls`, `postUrls`, `profileUrls`                                                        | `startUrls`                                                              |
| `tweetIds`, `tweetIDs`, `tweets`, `postIds`, `lookupPostIds` veya tek string olarak `tweetId`                      | `tweetIds`                                                               |
| `twitterHandles`, `usernames`                                                                                      | `twitterHandles`                                                         |
| `twitterContent`, `query`, `searchQuery`                                                                           | `twitterContent`                                                         |
| `maxItems`, `maxResults`, `max_results`, `resultsLimit`, `resultsCount`, `numberOfTweets`, `maxPosts`, `max_posts` | `maxItems`                                                               |
| `sort`                                                                                                             | `queryType`                                                              |
| `tweetLanguage`                                                                                                    | `lang`                                                                   |
| `author`, `inReplyTo`, `mentioning`                                                                                | `from`, `to`, `@`                                                        |
| `start`, `end`                                                                                                     | `since`, `until`                                                         |
| `minimumRetweets`, `minimumFavorites`, `minimumReplies`                                                            | `min_retweets`, `min_faves`, `min_replies`                               |
| `onlyImage`, `onlyVideo`, `onlyQuote`, `onlyTwitterBlue`                                                           | `filter:images`, `filter:videos`, `filter:quote`, `filter:blue_verified` |
| `geotaggedNear`, `withinRadius`                                                                                    | `near`, `within`                                                         |

Yapıştırılan bir girdi şöyle davranır:

- Her kaynak çalışır. Başlangıç URL'leri, handle'lar, arama terimleri, Liste
  ID'leri ve tweet ID'leri içeren bir girdi hepsini çalıştırır ve `maxItems`
  tüm çalıştırma için geçerlidir.
- `searchTerms` yanındaki bir arama sorgusu 1 terim daha olarak çalışır.
- Bir takma adı ve kanonik alanını birlikte ayarlarsan kanonik değer kazanır.
  Çalıştırma günlüğü kaybeden takma adı adlandırır.
- Çalıştırma günlüğü, Actor'ın okumadığı her alanı adlandırır, örneğin
  `customMapFunction`. Hiçbir şey haber verilmeden atılmaz.
- Satır sınırı 1 veya daha büyük bir tam sayı olmalıdır. `maxResults: 0`,
  herhangi bir şey getirilmeden veya ücretlendirilmeden önce çalıştırmayı
  durdurur.
- `from`, `min_faves`, `since_time` ve `filter:images` gibi arama operatörü
  alanları zaten X'in kullandığı adları kullanır. Bu yüzden eşleme gerekmez.

### Console ve API girdi deneyimi

Console şu kontrolleri gösterir:

- Mode, Output Variant, Field Style, Output Preset ve Sort By doğrulanmış
  seçim alanlarıdır.
- Start URLs ve Profile URLs alanları dizeleri veya `{ "url": "..." }`
  nesnelerini kabul eder. JSON düzenleyicileri her iki API biçimini de
  korur.
- Structured Filters, iç içe JSON olmadan gruplanmış kontroller gösterir.
- Kanonik filtre grupları, eşdeğer düz operatörleri formun dışında tutar.
  JSON, API, SDK, otomasyon ve kaydedilmiş görev girdileri onları hâlâ
  kabul eder.
- Max Items ve Max Items Per Target, 1 veya daha büyük tam sayıları kabul
  eder. Etkileşim eşikleri 0 veya daha büyük tam sayıları kabul eder.

Yeni entegrasyonlarda kanonik alanları kullan. Yukarıdaki geçiş tablosundaki
takma adlar kullanılabilir kalır. `includeRaw`, `outputVariant: "raw"` için
bir takma addır.
`compact` ve `full` gibi tarihsel `outputVariant` değerleri kabul edilmeye
devam eder ve Legacy çıktıyı kullanır. Görsel form onları Legacy takma
adları olarak etiketler.

### En çok desteklenen arama operatörleri

| Operatör               | Örnek                  | Amaç                          |
| ------------------------ | ------------------------ | -------------------------------- |
| `from:`                  | `from:elonmusk`          | Yalnızca bu kullanıcının tweet'leri |
| `to:`                    | `to:OpenAI`              | Yalnızca bu kullanıcıya yanıtlar |
| `@`                      | `@nasa`                  | Bu kullanıcıdan bahseden tweet'ler |
| `list:`                  | `list:123456`            | Liste üyelerinden tweet'ler       |
| `lang:`                  | `lang:en`                | Dile göre filtrele                |
| `since:` / `until:`      | `since:2026-01-01`       | Tarih aralığı                     |
| `min_faves:`             | `min_faves:100`          | Etkileşim eşiği                   |
| `min_retweets:`          | `min_retweets:50`        | Retweet eşiği                     |
| `filter:media`           | `filter:media`           | X medya arama operatörü          |
| `filter:videos`          | `filter:videos`          | X video arama operatörü          |
| `filter:images`          | `filter:images`          | X görsel arama operatörü         |
| `filter:links`           | `filter:links`           | Yalnızca bağlantılı tweet'ler    |
| `filter:replies`         | `filter:replies`         | Yalnızca yanıt tweet'leri         |
| `filter:quote`           | `filter:quote`           | Yalnızca alıntı tweet'leri        |
| `filter:blue_verified`   | `filter:blue_verified`   | Yalnızca Premium kullanıcılar     |

Tarih pencereleri kapsayıcı bir alt sınır ve hariç tutucu bir üst sınır
kullanır. Actor, her tweet'i eklemeden veya ücretlendirmeden önce her iki
sınırı da doğrular.

Tam operatör listesi için
[Twitter Advanced Search](https://github.com/igorbrigadir/twitter-advanced-search)'a
bak.

## Girdi

Tam seçenek listesi için **Input** sekmesine bak. Şunlardan en az biri
hariç tüm alanlar isteğe bağlıdır: `startUrls`, `twitterHandles`,
`listIds`, `tweetIds`, `searchTerms`, `twitterContent`, ya da bunların
belgelenmiş takma adları.

Örnekler:

- Start URLs'e bir tweet URL'si yapıştır.
- Bir profil URL'si yapıştır veya kullanıcı adını X Handles'a ekle. Actor,
  zaman akışını yazar aramasıyla birleştirir.
- Hesap geriye dönük doldurmaları için Search Term olarak
  `from:user since:YYYY-MM-DD until:YYYY-MM-DD` kullan. Actor, alımdan
  önce uyumlu pencereleri birleştirir. Güncel pencereler profil zaman
  akışını yazar aramasıyla birleştirir. Geçmişe dönük pencereler tam arama
  kullanır.
- Start URLs'e bir liste URL'si yapıştır.
- Gelişmiş aramalar için `twitterContent`'i `from:`, `since:`,
  `min_faves:` ve `filter:media` gibi filtrelerle birleştir.

Scraper, liste URL'lerini genel `list:ID` araması yerine özel liste yolu
üzerinden yönlendirir.

## Çıktı

Her tweet, mevcut metadata içeren bir JSON nesnesidir:

Veri kümesi ve run-report şemaları alan başlıklarını, açıklamalarını ve
örneklerini içerir. Ajanlar, alan anlamını tahmin etmeden bunları
inceleyebilir.

Örnek değerler açıklayıcıdır. Yanıtlar çalıştırma zamanındaki kaynak veriyi
yansıtır.

```json
{
  "id": "1846987139428634858",
  "text": "The future of AI is...",
  "createdAt": "Sun Mar 15 12:00:00 +0000 2026",
  "retweetCount": 500,
  "replyCount": 120,
  "likeCount": 5000,
  "quoteCount": 80,
  "viewCount": 1200000,
  "bookmarkCount": 300,
  "lang": "en",
  "url": "https://x.com/elonmusk/status/1846987139428634858",
  "author": {
    "id": "44196397",
    "username": "elonmusk",
    "name": "Elon Musk",
    "followers": 180000000,
    "verified": true
  },
  "media": [{ "type": "photo", "url": "https://..." }],
  "entities": {
    "hashtags": [{ "text": "AI" }],
    "urls": [],
    "user_mentions": []
  },
  "isNoteTweet": false,
  "isQuoteStatus": false,
  "isReply": false,
  "conversationId": "1846987139428634858"
}
```

Apify veri kümesinden JSON, CSV, Excel veya HTML olarak dışa aktar.

## Çalıştırma seçenekleri

- Çalıştırma maliyetini sınırlamak için Apify maksimum toplam ücretini
  ayarla. O bütçe içinde maksimum satır için `maxItems`'i boş bırak, ya da
  daha az tweet istediğinde `maxItems`'i ayarla.
- Apify API'sinde `maxTotalChargeUsd`'yi veya Console'da Max cost per run'ı
  ayarla. Apify bu sınırı Actor'a `ACTOR_MAX_TOTAL_CHARGE_USD` olarak
  gösterir ve Actor bunu maksimum faturalandırılabilir satır sayısına
  çevirir.
- Eşzamanlı 100-ID grupları için `tweetIds`'i geçir. Hızlı kullanıcı zaman
  akışı yolunu kullanmak için bir profil URL'si yapıştır.
- Birçok sorgu çalıştırırken her sonucu kaynak arama terimiyle etiketlemek
  için `includeSearchTerms: true` ayarla.
- Her iki X arama modunu eşzamanlı çalıştırmak için
  `queryType: "Latest + Top"` ayarla. Tekilleştirme ve sonuç üst sınırları
  atomik kalır.
- 1 saniyelik kontroller ve imzalı webhook'lar için Xquik hesap veya
  anahtar kelime monitörlerini kullan. Aktif monitörler her saniye kontrol
  eder.

## Kullanım örnekleri

- Tweet'ler genelinde marka duygu durumunu takip et.
- Rakip gönderilerini ve sektör terimlerini izle.
- Herkese açık konuşmalarda potansiyel müşteriler bul.
- Araştırma için herkese açık veri kümeleri topla.
- Yüksek herkese açık etkileşimli gönderileri bul.

## Veri sorumluluğu

Actor, herkese açık X alanlarını ister. Sonuçlar kişisel veri içerebilir.
Yasal bir amaç doğrula ve geçerli gizlilik kurallarına uy. Belirsizlik
durumunda yetkin bir hukuk danışmanına sor.

## İlgili Xquik Actor'ları

Her Xquik Actor'ı aynı çıkarma motorunu, önce filtreleyen faturalandırmayı ve
tanılamaları paylaşır. İhtiyacın olan veriye uyanı seç.

- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): Handle, ID
  veya URL'den profilleri, gönderilerini, yanıtlarını, medyasını ve
  takipçilerini kazır. Aramalar yerine hesaplardan başladığında kullan. Satır
  başına $0.00015'ten başlar.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): 25'ten fazla
  filtreyle gönderilerin altındaki yanıtları, yorumları ve tüm konuşmaları
  kazır. Tweet'lerin altındaki tartışmaya ihtiyacın olduğunda kullan. Satır
  başına $0.00015'ten başlar.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): Gönderi
  URL'leri veya ID'leri için toplu olarak yanıtları, alıntıları, retweet
  edenleri ve thread'leri kazır. Gönderilerle kimin etkileşime
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
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer):
  Yapay zekanın 8 özellik yanıtından her tweet için 0 ile 100 arasında bir
  Viral Score ve bir karar tahmin eder. Tweet'lerin neden yayıldığını veya
  tutmadığını incelediğinde kullan. Analiz edilen tweet başına $0.0003'ten
  başlar.

## Kazımadan fazlasına mı ihtiyacın var?

Xquik ayrıca 47 dashboard aracı, 129 REST işlemi, imzalı webhook'lar ve bir
MCP sunucusu sağlar.

- [API dokümantasyonu](https://docs.xquik.com/introduction): REST API
  kılavuzları
- [Search Tweets API](https://docs.xquik.com/api-reference/x/search-tweets):
  bu Actor'ı çalıştıran uç nokta
- [Batch Tweets API](https://docs.xquik.com/api-reference/x/batch-tweets):
  ID'ye göre 100'e kadar tweet getir
- [User Tweets API](https://docs.xquik.com/api-reference/x/user-tweets): bir
  kullanıcının zaman akışını al
- [MCP sunucusu](https://docs.xquik.com/mcp/overview): desteklenen araçları
  keşfet
- [Webhooks](https://docs.xquik.com/webhooks/overview): imzalı olay teslimatı
- [GitHub](https://github.com/Xquik-dev/x-twitter-scraper): kaynak kod ve
  sorun takibi

## SSS

**X API anahtarına ihtiyacım var mı?** Hayır. Bu scraper kendi
altyapısını kullanır. Giriş veya kimlik bilgisi gerekmez.

**Bir çalıştırmayı ne sınırlar?** İstediğin öğe sınırı ve Apify harcama
sınırı çalıştırmayı durdurur. Apify hesap ve platform sınırları hâlâ
geçerlidir.

**Ne kadar hızlı?** Çalışma süresi rotaya, sonuç sayısına ve üst akış
kullanılabilirliğine bağlıdır.

**En Yeni araması neden X'in En Yeni sekmesinde görünmeyen gönderiler
döndürüyor?** X, eşleşen bazı gönderileri açık En Yeni listesinin dışında
bırakır ve onları yalnızca zaman sınırları olan bir aramaya döndürür. Bu Actor
bir En Yeni aramasını yan yana zaman dilimleri olarak okur, böylece ikisini de
alır. 1 sorgu için 100 gönderilik bir testte 83 gönderi, diğer 5 scraper'ın
döndürdüğü gönderilerle eşleşti. 17 gönderiyi ise X yalnızca zaman sınırlı
aramalara döndürdü. 17 gönderinin hepsi aynı zaman aralığının içindeydi. Her
gönderi, sorgun için gerçek bir X arama sonucudur ve her gönderi için 1 kez
ödersin.

**Hangi arama operatörleri çalışıyor?** X gelişmiş araması yazarları,
alıcıları, bahsetmeleri, tarihleri, etkileşimi, medyayı ve konumu destekler.

**Bunu çalıştırmak için Apify API'yi kullanabilir miyim?** Evet. Python,
JavaScript ve cURL örnekleri için
[API sekmesine](https://apify.com/xquik/x-tweet-scraper/api) bak.

**Tekrarlayan kazımalar planlayabilir miyim?** Evet. Bu Actor'ı bir cron
üzerinde çalıştırmak için Apify'ın yerleşik
[zamanlamasını](https://docs.apify.com/platform/schedules) kullan.

**Sorunları nereye bildiririm?** [GitHub](https://github.com/Xquik-dev/x-twitter-scraper/issues)'da
bir sorun aç veya bu Actor'ın sayfasındaki Issues sekmesini kullan.

**Özel bir çözüm alabilir miyim?** Evet. Dashboard, API, MCP sunucusu ve
webhook'lar için [xquik.com](https://xquik.com)'u ziyaret et veya
[API dokümanlarını](https://docs.xquik.com/introduction) oku.
