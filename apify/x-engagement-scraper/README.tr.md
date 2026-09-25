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
scraper hizmetidir. X Engagement Scraper, herhangi bir gönderi için yanıtları,
alıntıları, retweet edenleri ve thread'leri toplar. Diğer tüm Apify Actor'ları
filtreleme veya tekilleştirmeden önce ücret alır. Xquik yalnızca teslim edilen,
benzersiz, filtreyle eşleşen sonuçlar için ücret alır.

Bir veya daha fazla X gönderisi için Twitter etkileşim verisini topla: yanıtlar,
alıntılar, retweet edenler ve thread bağlamı. X API anahtarı veya girişi
gerekmez.

## Yanıtlar, alıntılar ve profiller

- Gönderi URL'leri ve sayısal Tweet ID'leri.
- Mevcut sonuç sayfaları genelinde doğrudan yanıtlar.
- 4 sıralama düzeninde doğrudan ve iç içe yanıtlar.
- Seçilebilir bir satır olarak kaynak gönderi ayrıntıları.
- Metin, yazar, medya ve metriklerle alıntı gönderileri.
- Retweet eden profiller.
- Her kaynak gönderi etrafındaki konuşma bağlamı.
- Bir çalıştırmada birden fazla etkileşim türü ve gönderi.
- Genel ve kaynak başına üst sınırlar.
- Kaynak gönderi ve etkileşim türü atfı.
- Çalıştırmalar, Apify yeniden başlatmasından sonra kaldıkları yerden devam
  eder.

## Girdi

```json
{
  "tweetIds": ["2082577277246972300"],
  "engagementTypes": ["replies", "quotes", "retweeters"],
  "maxItems": 10000
}
```

X, 2024'te bir gönderiyi kimlerin beğendiğini göstermeyi bıraktı. `favoriters`
türü satır döndürmez. Satırsız bir çalıştırma bu nedeni tanılamasında belirtir.

Her kaynak ve etkileşim eşleşmesini korumak için `dedupeAcrossTargets`'ı kapalı
tut. Çalıştırma genelinde hesap başına tek satır tutmak için aç.

## Çıktı

Satırlar `resultType` olarak `tweet`, `replies`, `completeReplies`, `quotes`,
`retweeters`, `favoriters` veya `thread` kullanır. `sourceTarget`, kaynak Tweet
ID'sini belirtir. Tweet ve profil alanları kararlı Xquik REST yanıt biçimlerini
izler.

`completeReplies`, döndürülen her satırı korur. Çalıştırma raporu kısmi
kapsama için `incompleteTargets`'ı sayar. Filtreler Actor faturalamasından
önce çalışır.

## Retweet zaman damgaları

`retweeters` sonuçları için `includeRetweetTimestamp`'i `true` olarak ayarla.
`retweetedAt` sütunu, gözlemlenen yeniden paylaşım zamanını UTC olarak içerir.

Actor, X o yeniden paylaşımı hâlâ gösteriyorsa paylaşım zamanını bulur. Eski,
silinmiş veya kullanılamayan yeniden paylaşımlar zaman damgasını `null` bırakır.
Profil çıktıda kalır. `null` değeri, bir hesabın bir gönderiyi hiç yeniden
paylaşmadığını kanıtlamaz.

Bu seçenek çalıştırmaları yavaşlatır. Yalnızca profil sonuçları için kapalı
bırak. Profil `createdAt` alanı hesap oluşturma tarihi olarak kalır. Tweet
satırları bir yeniden paylaşım olayı içerdiğinde `retweetedAt` taşır. Orijinal
gönderi tarihleri ve kazıma zamanları asla yeniden paylaşım zamanlarının yerini
almaz. Sonuç fiyatları ve teslim edilen satır faturalaması değişmeden kalır.

## Fiyatlandırma

Her Apify planında **teslim edilen satır başına $0.00015** ücret alınır. Apify,
platform kullanımını ayrıca faturalandırır.

- Teslim edilen veri satırı başına bir ücret. Tanılamalar `diagnostics`
  içinde ücretsizdir.
- Başlangıç, gönderi, etkileşim türü veya sayfa ücreti yok.
- Tekilleştirme faturalamadan önce çalışır.

Daha eski bir yapıya ihtiyacın olmadıkça `latest`'i kullan. 50 herkese açık
görevden veya 129 Xquik REST işleminden seç. Örnekler örnek değerler kullanır.
Sonuçlar canlı veriyi yansıtır.

## Kurtarma ve sınırlar

Tek bir çalıştırma birçok gönderiyi ve etkileşim türünü okuyabilir. Teslim
edilen satırlar ve ilerleme, Apify yeniden başlatmasından sonra korunur. Actor
kendi zaman sınırını eklemez.

## Eksik çıkarma

Kesintiye uğrayan çıkarma ücretsiz bir `partial` tanılaması yazar. Mevcut
sonuçlar bozulmadan kalır. Yeniden denemeden önce `availableResults`,
`failedTargets`, `retryable` ve `nextAction` alanlarını oku. Başarılı bir Actor
çıkışı teslimatı doğrular, eksiksiz çıkarmayı değil.

Durum metni, çalıştırmayı erken durduran her nedeni belirtir. `stopCauses`, her
nedeni kendi `message`, `retryable` ve `nextAction` alanlarıyla listeler. Olası
nedenler şunlar: `target_not_found`, `target_failed`, `pagination_safety_limit`,
`reply_reach` ve `deadline_reached`. `reply_reach`, X'in yanıt thread'inin
sadece bir kısmını verdiğini gösterir. Bulunamayan bir hedef, listeye sadece
başka bir neden çalıştırmayı durdurduğunda girer. Nedenlerden en az biri yeniden
denenebilirse çalıştırma da `retryable` olur.

Xquik bağımsız bir üçüncü taraf hizmetidir. X Corp ile bağlantılı değildir.
"Twitter" ve "X", X Corp'un ticari markalarıdır.

## İlgili Xquik Actor'ları

Her Xquik Actor'ı aynı çıkarma motorunu, önce filtreleyen faturalandırmayı ve
tanılamaları paylaşır. İhtiyacın olan veriye uyanı seç.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): Aramalardan,
  profil zaman akışlarından, Listelerden ve tweet ID'lerinden 50'den fazla
  filtre ve düz dışa aktarımla tweet kazır. Analiz değil sadece tweet verisi
  gerektiğinde kullan. Satır başına $0.00015'ten başlar.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): Handle, ID
  veya URL'den profilleri, gönderilerini, yanıtlarını, medyasını ve
  takipçilerini kazır. Aramalar yerine hesaplardan başladığında kullan. Satır
  başına $0.00015'ten başlar.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): 25'ten fazla
  filtreyle gönderilerin altındaki yanıtları, yorumları ve tüm konuşmaları
  kazır. Tweet'lerin altındaki tartışmaya ihtiyacın olduğunda kullan. Satır
  başına $0.00015'ten başlar.
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
