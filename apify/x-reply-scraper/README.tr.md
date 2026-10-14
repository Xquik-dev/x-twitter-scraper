[English](README.md) · [Español](README.es.md) · **Türkçe** ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer, Xquik MCP'yi kodlama ajanlarına bağlıyor](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Framer'ın Xquik scraper'larını Claude Code, Codex, Cursor & daha fazlasıyla nasıl kullandığını](https://youtu.be/4UOSpoOoC3Y?t=367)
6:07'den itibaren izle.

Xquik, en eksiksiz X verisini sunan, dünyanın en hızlı ve en ucuz X (Twitter)
scraper hizmetidir. Xquik'in X Reply Scraper'ı yanıtları, yorumları &
konuşmaların tamamını toplar. Diğer Apify Actor'larının çoğu, filtrelemeden veya
tekilleştirmeden önce ücret alır. Xquik yalnızca **teslim edilen, benzersiz ve
filtrene uyan sonuçlar** için ücret alır.

Twitter yanıtlarını & yorumlarını her Apify planında **teslim edilen satır
başına $0.00015** fiyatla kazı & X hesabı olmadan oku. Gönderi URL'lerini,
gönderi ID'lerini, profil URL'lerini veya kullanıcı adlarını yapıştır.
Yanıtları, konuşmaları, yazarları, etkileşimi, entity verilerini & medya
URL'lerini dışa aktar. Apify, platform kullanımını ayrıca faturalandırır. X
girişine ihtiyacın yok. Filtreler veri kümesine yazmadan önce çalışır, bu yüzden
yalnızca teslim edilen satırlar için ödersin.

> Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
> "Twitter" ve "X", X Corp'un ticari markalarıdır.

## X Reply Scraper ne yapar?

Xquik'in X Reply Scraper'ı herkese açık yanıtları & yorum konuşmalarını toplar.
Tekil gönderilerle, toplu URL listeleriyle, gönderi ID'leriyle & kullanıcıların
yanıt zaman akışlarıyla çalışır.

### Temel özellikler

- Auto modu, doğrudan sonuçlar eksik kaldığında toplamaya devam eder.
- `collectionStrategy`, Actor'ın yanıtları nasıl toplayacağını belirler.
- Toplu girdiler gönderi URL'lerini, gönderi ID'lerini, profilleri & kullanıcı
  adlarını kabul eder.
- Filtreler & tekilleştirme faturalamadan önce çalışır.
- Çıktı 4 sıralama modunu, 3 ayrıntı düzeyini & 3 alan stilini destekler.
- Her yanıt kaynak hedefini, üst ID'lerini, kök ID'sini & derinliğini korur.
- Devam imleçleri geçmişe dönük toplamaları & zamanlanmış çalıştırmaları
  destekler.
- Dikkat gerektiren çalıştırmalar `diagnostics` içine 1 ücretsiz kayıt yazar.
  Her hedefi okuyup hiç yanıt bulamayan bir çalıştırma kayıt yazmaz. Nedenini
  durum metni söyler.
- Çalıştırma günlükleri sayfa & hedef sürelerini `fetchDurationMs`,
  `processingDurationMs`, `pushDurationMs`, `statusDurationMs`,
  `fullPageDurationMs` & `fullTargetDurationMs` alanlarında gösterir.
- Apify çalıştırmaları yeniden başlattığında teslim edilen yanıtlar & ilerleme
  korunur.

### Kullanım alanları

- Marka & ürün gönderilerinin altındaki duygu durumunu & müşteri geri
  bildirimini ölç.
- Viral bir gönderinin altındaki en çok beğenilen yanıtları & yorumları sırala.
- Herkese açık yanıtlarda soru soran veya bir ihtiyacını dile getiren potansiyel
  müşterileri bul.
- Yanıtları moderasyon, spam & kötüye kullanım açısından incele.
- Araştırma & yapay zeka eğitim veri kümeleri için konuşmaların tamamını yeniden
  oluştur.
- Bir hesabın müşterilerine zaman içinde nasıl yanıt verdiğini takip et.

### X Reply Scraper hangi verileri çekebilir?

Veri kümesi & run-report şemaları dönen her alanı açıklar. Metin, sayı & boolean
alanları ajanlar & üretilen entegrasyonlar için örnekler de taşır.

Her tam yanıt satırında aşağıdaki temel alanlar olabilir.

| Alan                | Açıklama                                                               |
| ------------------- | ---------------------------------------------------------------------- |
| `id`                | Yanıt ID'si                                                            |
| `text`              | Yanıt metni                                                            |
| `fullText`          | Uzun yanıt metni                                                       |
| `createdAt`         | Yanıt zaman damgası                                                    |
| `lang`              | X dil kodu                                                             |
| `url`               | Yanıtın doğrudan URL'si                                                |
| `conversationId`    | X konuşma ID'si                                                        |
| `inReplyToId`       | Doğrudan üst gönderinin ID'si                                          |
| `inReplyToUserId`   | Üst gönderi yazarının ID'si                                            |
| `inReplyToUsername` | Üst gönderi yazarının kullanıcı adı                                    |
| `likeCount`         | Beğeniler                                                              |
| `replyCount`        | Alt yanıtlar                                                           |
| `retweetCount`      | Yeniden gönderiler                                                     |
| `quoteCount`        | Alıntılar                                                              |
| `viewCount`         | Görüntülenmeler                                                        |
| `bookmarkCount`     | Yer işaretleri                                                         |
| `author`            | Erişilebilen herkese açık yazar metadata'sı                            |
| `media`             | Görseller, videolar, GIF'ler ve varyantlar                             |
| `entities`          | Hashtag'ler, cashtag'ler, bahsetmeler, URL'ler & video zaman damgaları |
| `quoted_tweet`      | Varsa alıntılanan gönderi                                              |
| `retweeted_tweet`   | Varsa yeniden gönderilen gönderi                                       |

Tam satırlar erişilebilen kaynak metadata'sını da tutar.

- Gönderi türü alanları `type`, `isReply`, `isQuoteStatus`, `isNoteTweet`,
  `isLimitedReply` & `isTranslatable`.
- Metin ayrıntıları `displayTextRange`, `noteTweet`, `article`, `card` &
  `cashtagAttachments`.
- Etiketler & uyarılar `contentDisclosure`, `communityNote`,
  `possiblySensitive`, `tombstone` & `exclusiveContent`.
- Konuşma ayrıntıları `conversationControl`, `limitedActions`, `subscriberBadge`
  & `unmentionedUserIds`.
- Bağlam alanları `source`, `place`, `communityId`, `communityName`,
  `reactionContext` & `postCta`.
- Düzenleme & kullanılabilirlik alanları `edit`, `previousCounts`, `viewState` &
  `authorUnavailable`.

Düz satırlar konuşmadaki üst gönderi zincirini, kaynak ayrıntılarını, sonuç
türünü & şema sürümünü tutar. Alanların tam listesi için OpenAPI'ye bak.

## Yanıtları kazımak için X Reply Scraper'ı nasıl kullanırım?

Apify'da yeni misin? Önce
[ücretsiz bir hesap oluştur](https://console.apify.com/sign-up?fpr=xquik).
Ücretsiz plan kredi kartı istemez & her ay harcaman için $5 verir. Satır başına
$0.00015 fiyatla $5, platform kullanımı hariç 33.000 satıra kadar yeter. Sonra
buraya dön & Try for free düğmesine bas.

1. Gönderi URL'lerini, gönderi ID'lerini, profil URL'lerini veya kullanıcı
   adlarını yapıştır.
2. `maxItems`, `scope` & işinin gerektirdiği filtreleri ayarla.
3. Xquik'in X Reply Scraper'ını çalıştır & veri kümesini aç.

Form, test ettiğimiz herkese açık bir konuşmayla dolu gelir. En fazla 1.000 tam,
düz satır döndürür. Auto modu varsayılan olarak konuşmanın tamamını arar.
Tekilleştirme & kaynak bilgisi açık kalır.

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

### Yanıtları faturalamadan önce filtrele

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

## Görev örnekleri

50 herkese açık görevden birini seç. Her görevin sınırlı bir girdisi & uygun bir
veri kümesi görünümü var. Çalıştırmadan önce istediğin görevi düzenle.

- [X gönderi yanıtlarını & Twitter yorumlarını kazı](https://apify.com/xquik/x-reply-scraper/examples/scrape-post-replies)
- [Twitter yanıtlarını toplu kazı](https://apify.com/xquik/x-reply-scraper/examples/scrape-bulk-post-replies)
- [Bir Twitter yanıt konuşmasını yeniden oluştur](https://apify.com/xquik/x-reply-scraper/examples/rebuild-full-conversation)
- [Twitter yanıtlarını beğeniye göre sırala](https://apify.com/xquik/x-reply-scraper/examples/rank-most-liked-replies)
- [En yeni gönderi yanıtlarını kazı](https://apify.com/xquik/x-reply-scraper/examples/collect-latest-replies)
- [Twitter yanıtlarından spam'i temizle](https://apify.com/xquik/x-reply-scraper/examples/exclude-spam-keywords)
- [İngilizce Twitter yanıtlarını kazı](https://apify.com/xquik/x-reply-scraper/examples/collect-english-replies)
- [Onaylı hesapların Twitter yanıtlarını kazı](https://apify.com/xquik/x-reply-scraper/examples/collect-verified-replies)
- [Medya içeren Twitter yanıtlarını kazı](https://apify.com/xquik/x-reply-scraper/examples/collect-media-replies)
- [Bir kullanıcının Twitter yanıt zaman akışını kazı](https://apify.com/xquik/x-reply-scraper/examples/scrape-profile-replies)
- [Yapay zeka ajanları için Twitter yanıtları topla](https://apify.com/xquik/x-reply-scraper/examples/collect-replies-for-ai-agents)
- [X yanıtlarından bir RAG veri kümesi oluştur](https://apify.com/xquik/x-reply-scraper/examples/build-x-reply-rag-dataset)
- [Twitter yanıtlarını LLM'ler için arşivle](https://apify.com/xquik/x-reply-scraper/examples/archive-replies-for-llm-processing)
- [CRM için X yanıtlarından potansiyel müşteri çıkar](https://apify.com/xquik/x-reply-scraper/examples/extract-reply-leads-for-crm)

## X yanıtlarını kazımak ne kadar tutar?

Xquik'in X Reply Scraper'ı her Apify planında teslim edilen satır başına
$0.00015 tutar. Apify, platform kullanımını ayrıca faturalandırır.

Daha fazla hacim için daha çok ön ödemeli kullanım içeren bir
[Apify planı seç](https://apify.com/pricing?fpr=xquik).

Xquik, teslim edilen her veri satırı için tek bir ücret alır. Filtrelerinin veya
tekilleştirmenin çıkardığı yanıtlar ücretsizdir. `diagnostics` içindeki tanılama
kayıtları ücretsizdir. Başlatma, URL, sorgu, sayfalama veya filtre ücreti yok.

## Boş, kısmi & durdurulan çalıştırmalar

Xquik'in X Reply Scraper'ı boş, kısmi & durdurulan çalıştırmaları ücretsiz
açıklar. Çalıştırma durumu, çalıştırmanın neden durduğunu söyler.
Ücretlendirilen sonuçları & okunan hedefleri de sayar. Her hedefi okuyup hiç
yanıt bulamayan bir çalıştırma kayıt yazmaz. Durum metni nedenini & neyi
değiştirmen gerektiğini söyler.

### Eksik veri çekme

Kesilen bir çalıştırma ücretsiz bir `partial` tanılaması yazar. Elde edilen
sonuçlar olduğu gibi kalır. Yeniden denemeden önce `availableResults`,
`failedTargets`, `retryable` & `nextAction` alanlarını oku. Actor'ın başarıyla
bitmesi teslimatı doğrular, tüm verinin çekildiğini değil.

Durum, erken durmanın her nedenini söyler. `stopCauses` her nedeni kendi
`message`, `retryable` & `nextAction` alanlarıyla listeler. Nedenler
`target_not_found`, `target_failed`, `page_limit`, `reply_reach` &
`deadline_reached` olabilir. `reply_reach`, X'in konuşmanın yalnızca bir kısmını
sunduğu anlamına gelir.

Bulunamayan bir gönderi veya hesap hata sayılmaz. Durum bunu belirtir, örneğin
"X has no match for 1 target." Bu hedef `stopCauses` listesine yalnızca
çalıştırmayı başka bir neden durdurduysa girer. Nedenlerden biri yeniden
denenebiliyorsa çalıştırma da `retryable` olur.

### Tanılamalar

Başarılı veri satırları `resultType: "reply"` kullanır. Dikkat gerektiren bir
çalıştırma `diagnostics` içine tam olarak 1 ücretsiz kayıt yazar. Geçersiz bir
girdi, atlanan bir hedef veya erken bir durma buna örnektir. Kayıt, sorunu nasıl
çözeceğini söyler. Her hedefi okuyup hiç yanıt bulamayan bir çalıştırma kayıt
yazmaz. Nedenini durum metni söyler.

Çalıştırma durumu, çalıştırmanın neden durduğunu söyler. Ücretlendirilen
sonuçları & okunan hedefleri de sayar. Sorunlu çalıştırmalar, girdisiz ve
geçersiz girdili çıkışlar dahil, her zaman `run-report` yazar. Büyük bir
çalıştırma da bu kaydı yazar. Sorunsuz biten küçük bir çalıştırma kaydı atlar &
Apify kullanımından tasarruf eder. Kaydı her çalıştırmada yazmak için
`alwaysSaveRunRecords` seçeneğini aç.

Rapor şeması tamamlanmayı, faturalamayı, hataları & kayıtlı imleçleri belgeler.
`version` alanı, yayımlanan Actor kaynağının tam sürümünü bildirir.

`status` alanı aşağıdaki değerleri kullanır.

- `no-input`
- `invalid-input`
- `replies-incomplete`
- `zero-output`
- `aborted`
- `unexpected-error`

## Girdi

Input sekmesi tüm seçenekleri listeler. En az 1 gönderi URL'si, gönderi ID'si,
profil URL'si veya kullanıcı adı ver. Diğer tüm alanlar isteğe bağlıdır.

### Yanıt hedefleri & girdi takma adları

Aşağıdaki ana alanları kullan.

| Girdi         | Amaç                                         |
| ------------- | -------------------------------------------- |
| `startUrls`   | Karışık X gönderi ve profil URL'leri         |
| `tweetIds`    | Sayısal gönderi ID'leri                      |
| `usernames`   | Profil yanıt zaman akışları                  |
| `startCursor` | Tek bir hedefe kayıtlı bir imleçten devam et |

Girdi formu yalnızca kanonik kontrolleri gösterir. Uyumluluk takma adları JSON,
API, SDK, otomasyon & kayıtlı görev girdilerinde yine çalışır. Kanonik & takma
ad alanlarını birlikte kullanırsan mevcut çözümleme sırası geçerli olur.

Bu takma adlar diğer scraper'lardaki yaygın alan adlarını kabul eder.

- URL takma adları `urls`, `tweetUrls`, `postUrls`, `profileUrls` & tek bir
  metin olarak `twitterUrl` alanlarıdır.
- ID takma adları `conversationIds`, `postIds`, `ids`, `tweetId`, `id`
  alanlarıdır.
- Kullanıcı adı takma adları `twitterHandles`, `screenname` alanlarıdır.
- Genel sınır takma adları `maxResults`, `max_results`, `resultsLimit`,
  `maxReplies` alanlarıdır.
- Hedef başına takma adlar `maxRepliesPerTweet`, `maxCommentsPerPost`,
  `resultsPerCategory` alanlarıdır.
- Arama takma adı `useSearch` alanıdır.
- İç içe yanıt takma adları `includeNestedReplies`, `includeRepliesOfReplies`
  alanlarıdır.
- Derinlik takma adı, `maxDepth` için `1`, `2` veya `3` değerini alan `depth`
  alanıdır. `full` sınır koymaz.
- Kapsam takma adı, `scope: "direct"` için `onlyDirectReplies` alanıdır.
- Orijinal gönderi takma adları `includeOriginalTweet`, `includeSourceTweet`
  alanlarıdır. `includeSourceTweet` ile `resultsPerCategory` yanıtları sınırlar
  & gönderi fazladan 1 satır olur.
- Yazar takma adı, `excludeOriginalAuthor` için `excludeOpSelfReplies` alanıdır.
- Sıralama takma adları, `sort` için `sortBy` & `queryType` alanlarıdır. `top`,
  `newest` & `mostLiked`, `relevance`, `latest` & `likes` olarak okunur.
- Çıktı takma adları `outputVariant`, `includeRaw` alanlarıdır.

`category` değerini `replies` yapmak hiçbir şeyi değiştirmez. `retweets` veya
`info` gibi başka bir Actor'ın işi olan bir kategori çalıştırmayı durdurur.
Çalıştırma hiçbir şey okumaz & ücretlendirmez. Mesaj, kullanman gereken Actor'ı
söyler. Bu takma adlardan birini & kanonik alanını birlikte ayarlarsan kanonik
değer kazanır. Çalıştırma günlüğü kaybeden takma adı söyler.

Bozuk veya desteklenmeyen hedefler Actor'ı başarısız kılmaz. Geçerli hedef
kalmazsa çalıştırma düzeltmeyi söyleyen bir tanılama yazar.

### Kapsama stratejileri

Actor'ın yanıtları nasıl toplayacağını seç. Auto çoğu işe uyar.

#### Otomatik tam toplama

Çoğu iş için `collectionStrategy: "auto"` kullan. Seçtiğin kapsamda ulaşabildiği
her yanıtı toplar. Kapsam, derinlik, sıralama & yazar kontrolleri sınırlarından
önce uygulanır. Kök olmayan hedeflerin altındaki yanıtları da içerir. X
konuşmanın bir kısmını gizlerse durum metni, X'in kaç yanıtı gizlediğini söyler.
Diğer `collectionStrategy` değerleri asla mod değiştirmez.

Tanılamalardaki bir kapsama değeri, X'te başka yanıt olmadığını kanıtlamaz.
Sınırlar, eksik veri veya hatalar bir çalıştırmayı eksik bırakabilir.

#### Doğrudan yanıtlar

Doğrudan yanıtları X'in kendi sırasıyla almak için
`collectionStrategy: "replies"` kullan. Kayıtlı imleçleri destekler.

#### Konuşma araması

Konuşmayı geniş kapsamak için `collectionStrategy: "conversationSearch"` kullan.

#### Tam konuşma bağlamı

Kaynak konuşmanın bağlamını okumak için `collectionStrategy: "thread"` kullan.
Kök gönderiyi derinlik 0 olarak tutmak için `includeOriginalPost: true` ayarla.

#### Gizlenen yanıtlar

Varsayılan `auto` stratejisi, gönderi yazarının gizlediği yanıtları ekler. Her
biri `resultType: "hiddenReply"` içeren bir satırdır, normal satır fiyatıyla
ücretlenir & `maxItems` sınırına sayılır. Çalıştırma bunları yalnızca
gönderideki yanıt sayısı X'in gösterdiğinden fazlaysa okur, bu yüzden gizlenen
yanıtı olmayan bir gönderi ek ücret getirmez. Bunları dışarıda bırakmak için
`includeHiddenReplies: false` ayarla.

Yalnızca gizlenen yanıtlar için `collectionStrategy: "hiddenReplies"` kullan. X
bunları, onlara verilen yanıtlarla birlikte en eskiden başlayarak listeler.
Gizlenen yanıtı olmayan bir gönderi satır döndürmez.

### Doğrudan & iç içe yanıt kontrolleri

Sonucun biçimini seçmek için `scope` kullan.

| Değer    | Sonuç                                                      |
| -------- | ---------------------------------------------------------- |
| `direct` | Derinlik 1'deki yanıtları tutar                            |
| `nested` | Derinlik 2 ve üstündeki, yanıtlara verilen yanıtları tutar |
| `all`    | Erişilebilen tüm doğrudan ve iç içe yanıtları tutar        |

İç içeliği sınırlamak için `maxDepth` kullan. X konuşmadaki bir üst gönderiyi
göstermezse üst bağlantı eksik kalabilir. Actor erişebildiği en iyi derinliği
korur.

### Sıralama

`sort` alanını aşağıdaki değerlerle kullan.

- `relevance` X'in kaynak sırasını korur
- `latest` en yeniyi öne alır
- `oldest` en eskiyi öne alır
- `likes` en çok beğenileni öne alır

X araması bazı eski yanıtlardaki beğenileri eksik sayar, bu yüzden `likes`
çalıştırmaları onları kaçırabilir.

Profil hedefleri istediğin sayıda benzersiz, filtrelenmiş sonucu toplar, sonra
onları sıralar. Gönderi hedefleri genel sıralamayı korur.

`sortBy` & `queryType` uyumluluk takma adları hâlâ çalışır.

### Yanıt filtreleri

Desteklenen tüm filtreler veri kümesine yazmadan önce çalışır.

#### Metin & entity filtreleri

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

#### Yazar & dil filtreleri

| Girdi                   | Davranış                                          |
| ----------------------- | ------------------------------------------------- |
| `fromUser`              | Tek bir yanıt yazarını tutar                      |
| `toUser`                | Tek bir kullanıcı adına verilen yanıtları tutar   |
| `lang`                  | Tek bir X dil kodunu tutar                        |
| `verifiedOnly`          | Herhangi bir herkese açık onay işareti gerektirir |
| `blueVerifiedOnly`      | X Premium onayı gerektirir                        |
| `excludeOriginalAuthor` | Kaynak yazarın kendine verdiği yanıtları çıkarır  |

#### Etkileşim filtreleri

`minLikes`, `minReplies`, `minRetweets`, `minQuotes`, `minViews` &
`minBookmarks` kullan. `minFaves` takma adı `minLikes` alanına eşlenir.

#### Medya & zaman filtreleri

- Herkese açık medyası olan yanıtlar için `hasMediaOnly: true` ayarla.
- `mediaType` değerini `any`, `image`, `video`, `gif` veya `link` yap.
- Medya veya bağlantı içermeyen metin yanıtları için `mediaType` değerini `none`
  yap.
- Dahil olan bir başlangıç zamanı için `since` ayarla.
- Hariç tutulan bir bitiş zamanı için `until` ayarla.
- `sinceTime` & `untilTime` alanlarını uyumluluk takma adı olarak kullan.

## Çıktı

Her yanıt satırı bir JSON nesnesidir. Veri kümesi & run-report şemaları her
alanı açıklar, böylece yapay zeka ajanları satırları tahmin yürütmeden okur.
Veri kümesini JSON, CSV, Excel veya HTML olarak dışa aktar.

### Yazar metadata'sı

İç içe yazarlar herkese açık profil sözleşmesine uyar. Bu sözleşme kimliği,
sayıları, onay durumunu, kullanılabilirliği, profesyonel verileri & profil
biyografilerini kapsar.

Düz çıktı `authorId`, `authorUsername`, `authorName`, `authorFollowers`,
`authorFollowing` & `authorVerified` alanlarını ekler.

### Medya metadata'sı

Medya bilgisi kullanılabilirliği, geometriyi, etiketleri & video varyantlarını
kapsar. `watchNowUrl` & `visitSiteUrl` eylemlerini de içerir.

Düz çıktı `mediaUrls` alanını ekler.

### Çıktı örneği

Kısaltılmış bir yanıt satırı şöyle görünür.

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

Örnek değerler yalnızca gösterim amaçlıdır. Gerçek çalıştırmalar canlı veri
döndürür.

### Çıktı modları

Her veri kümesi satırının ne kadar geniş olacağını seç.

#### Kompakt

Daha dar bir veri kümesi için `outputMode: "compact"` ayarla. Bu mod metin,
konuşma, yazar, etkileşim & medya alanlarını tutar.

#### Tam

Desteklenen tüm herkese açık alanları tutmak için `outputMode: "full"` ayarla.

#### Zengin

Satır başına en çok veri için `outputMode: "rich"` ayarla. Zengin satırlar tam
moddaki her sütunu tutar & sona `hasCommunityNotes`, `quotedTweetPermalink`,
`unavailableAuthorId` & medyanın `sourceUser` alanını ekler.

#### Ham

`raw` altına temizlenmiş bir kaynak anlık görüntüsü eklemek için
`outputMode: "raw"` ayarla.

#### İç içe veya düz

Varsayılan `flat` düzeni iç içe nesneleri korur & tablolar için yazar alanları
ekler. Eklenen düz alanları çıkarmak için `outputPreset: "nested"` ayarla.

#### Alan adlandırma

`fieldStyle` değerini `source`, `camelCase` veya `snake_case` yap. Actor,
çakışan kaynak anahtarlarının üzerine yazmaktan kaçınır.

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

- Bir nesnenin içindeki alan için nokta kullan, örneğin `author.id`. Harf
  büyüklüğü & alt çizgiler fark etmez.
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

### Sınırlar, faturalama & devam

`maxItems` tüm çalıştırmadaki teslim edilen satırları sınırlar.
`maxItemsPerTarget` her gönderiyi veya profili ayrı sınırlar.

Tek bir çalıştırma birçok hedefi okuyabilir. Sınırlar, tekilleştirme, kaynak
bilgisi & faturalama tüm hedeflerde kesin kalır.

Actor, tekrarlanan satırları çıktıdan & faturalamadan önce kaldırır. Farklı
hedeflerden gelen tekrarlanan satırları tutmak için `dedupeAcrossTargets: false`
ayarla.

Sayfa sınırına takılan bir çalıştırmadan sonra varsayılan anahtar-değer
deposundan `next-cursors` kaydını oku. O hedefe devam etmek için bir imleci
`startCursor` ile gönder.

#### Apify zaman aşımı

Varsayılan Apify zaman aşımı `0` olduğu için çalıştırmaların süre sınırı yoktur.
Actor üst sınıra ulaşana veya uygun veri bitene kadar devam eder. Yine de sonlu
bir Apify zaman aşımı ayarlayabilirsin. O zaman
`completionReason: "deadline_reached"` bu sınırın yaklaştığını gösterir. Actor
yanıtları & raporu kaydeder, sonra sınırdan önce düzgünce çıkar. Teslim edilen
yanıtlar 1 kez ücretlenir. Bitmemiş hedeflere sonra devam edebilirsin.

### API örnekleri

Her örnek Xquik'in X Reply Scraper'ını çalıştırır & veri kümesi öğelerini
döndürür. `<APIFY_API_TOKEN>` yerine kendi Apify API token'ını yaz.

#### JavaScript

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

#### Python

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

#### cURL

```bash
actor=xquik~x-reply-scraper
curl "https://api.apify.com/v2/acts/$actor/run-sync-get-dataset-items" \
  -X POST \
  -H "Authorization: Bearer <APIFY_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"tweetIds":["2082577277246972300"],"maxItems":100}'
```

### Otomasyon & entegrasyonlar

Xquik'in X Reply Scraper'ını Apify zamanlamaları, webhook'lar veya API
istemcileri üzerinden çalıştır. Onu Make, Zapier, n8n, Google Sheets veya bulut
depolamaya bağla. Ajanlar onu
[Apify MCP sunucusu](https://docs.apify.com/platform/integrations/mcp) üzerinden
çağırabilir.

Uygun ajan iş akışları [x402](https://docs.apify.com/integrations/x402) veya
[Skyfire](https://docs.apify.com/integrations/skyfire) da kullanabilir.

Xquik ayrıca 53 panel aracı, bir REST API, imzalı webhook'lar & bir MCP sunucusu
sunar.

### Yapay zeka ajanı & MCP hazırlığı

Xquik'in X Reply Scraper'ını Apify MCP, API istemcileri, x402 veya Skyfire
üzerinden çalıştır.

- Sınırlı izinler, ilgisiz Apify hesap verilerini korur.
- Olay başına ödeme, maliyeti teslim edilen sonuçlara bağlar.
- Ajan ödemeleriyle uyum için Standby modu kapalı kalır.
- Tipli şemalar yanıtları, çalıştırma raporlarını & devam imleçlerini tanımlar.
- Sınırlı varsayılanlar, ajanların yanlışlıkla sınırsız çalıştırma başlatmasını
  önler.
- Sabit `camelCase` & `snake_case` modları araç zincirlemeyi kolaylaştırır.
- Tanılama satırlarında bir durum, bir mesaj & bir kurtarma adımı bulunur.
- Çalıştırma raporlarında kesin sonuçlar, durma nedenleri & ücret tahminleri
  bulunur.

### Her zaman en güncel derlemeyi kullan

Yayımlanan tüm düzeltmeleri almak için her çalıştırmada `latest` seç.

Derleme belirtmezsen Apify bu Actor'ın varsayılan `latest` derlemesini kullanır.
Console çalıştırmaları & standart API örnekleri bu varsayılanı devralır.

Kayıtlı görevler Actor varsayılanını geçersiz kılabilir. Zamanlamalar & görev
entegrasyonları bu seçimi yeniden kullanır. Her geçersiz kılmayı `latest` olarak
tut.

Apify tam derleme numaralarını `latest` sürümüne yönlendirmez. Sabitlenmiş
numaraları `latest` ile değiştir. Tam derlemeleri yalnızca geçici geri dönüşler
için kullan.

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

### Bir gönderinin yorumlarını nasıl kazırım?

Gönderi URL'sini `startUrls` alanına yapıştır & Start düğmesine tıkla. X
yorumlara yanıt der, bu yüzden her yorum 1 yanıt satırıdır.

### Birçok gönderinin yanıtlarını tek seferde kazıyabilir miyim?

Evet. 1 çalıştırmaya birçok gönderi URL'si veya gönderi ID'si yapıştır. Her
yanıt, kaynak gönderiyi `sourceTarget` alanında tutar.

### İç içe yanıtları da içerir mi?

Evet. Varsayılan `scope` doğrudan & iç içe yanıtları toplar. Yalnızca gönderiye
verilen yanıtlar için `scope` değerini `direct` yap. `maxDepth`, bir
çalıştırmanın ne kadar derine ineceğini sınırlar.

### Yazarın gizlediği yanıtları da alır mı?

Evet. Varsayılan `auto` stratejisi bunları `hiddenReply` satırları olarak ekler.
Bunları atlamak için `includeHiddenReplies: false` ayarla.

### Yanıtları beğeniye veya tarihe göre sıralayabilir miyim?

Evet. Yanıtları beğeniye göre sıralamak ya da en yeniyi veya en eskiyi öne almak
için `sort` ayarla.

### Yanıtları CSV veya Excel olarak dışa aktarabilir miyim?

Evet. Veri kümesini CSV, Excel, JSON veya HTML olarak dışa aktar. Düz çıktı her
satırda 1 yanıtı, yanında yazar alanlarıyla tutar.

### Bir gönderinin değil de bir kullanıcının yanıtlarını kazıyabilir miyim?

Evet. Bir profil URL'si veya kullanıcı adı yapıştır. Çalıştırma o kullanıcının
yanıt zaman akışını okur.

### X API anahtarı veya giriş gerekir mi?

Hayır. X API anahtarına, girişe veya kimlik bilgisine ihtiyacın yok. Xquik'in X
Reply Scraper'ı X şifreni, çerezlerini veya token'larını asla istemez.

### X yanıtlarını kazımak yasal mı?

Xquik'in X Reply Scraper'ı herkese açık yanıtları toplar & korumalı hesapları
aşmaz. Yalnızca herkese açık veri topla. Geçerli yasalara & platform kurallarına
uy.

Yanıt veri kümelerinde kişisel veri olabilir. Yasal bir amaç seç. Veriyi
gereğinden uzun saklama. Dışa aktarımları koru. Gerektiğinde silme & erişim
taleplerini yerine getir. Emin değilsen yetkin bir hukukçuya danış.

### Çalıştırmam neden gönderide görünenden az yanıt döndürdü?

X konuşmanın bir kısmını gizlerse durum metni, X'in kaç yanıtı gizlediğini
söyler. `stopCauses` içindeki `reply_reach`, X'in konuşmanın yalnızca bir
kısmını sunduğu anlamına gelir. Filtreler, tekilleştirme, `scope`, `maxDepth` &
sınırların da sayıyı düşürür.

### API'yi, zamanlamaları & entegrasyonları kullanabilir miyim?

Evet. [API sekmesi](https://apify.com/xquik/x-reply-scraper/api) Python,
JavaScript & cURL örnekleri gösterir. Xquik'in X Reply Scraper'ını bir cron
takvimiyle çalıştırmak için Apify
[zamanlamalarını](https://docs.apify.com/platform/schedules) kullan. Make,
Zapier, n8n & Google Sheets'e de bağlanır.

### Nereden yardım alırım?

Çalıştırma ID'siyle
[Issues sekmesinde](https://apify.com/xquik/x-reply-scraper/issues) bir issue
aç.

### Bana özel bir çözüm alabilir miyim?

Evet. İhtiyacını
[Issues sekmesinde](https://apify.com/xquik/x-reply-scraper/issues) anlat. Xquik
ayrıca bir panel, bir REST API, bir MCP sunucusu & webhook'lar sunar. Xquik'in
web sitesini [Apify profilinde](https://apify.com/xquik) bul.
