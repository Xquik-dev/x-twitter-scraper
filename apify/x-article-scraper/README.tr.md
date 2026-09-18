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

# X Article Scraper | $0.00015/Article | Pay-Per-Result

<table align="center"><tr><td align="center">
<a href="https://youtu.be/4UOSpoOoC3Y?t=367"><img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" width="720" alt="Framer, Xquik MCP'yi kodlama ajanlarına bağlıyor"></a><br>
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">Framer'ın Xquik scraper'larını Claude Code, Codex, Cursor ve daha fazlasıyla nasıl kullandığını 6:07'den itibaren izle.</a>
</td></tr></table>

Xquik, en eksiksiz X verisine sahip, dünyanın en hızlı ve en ucuz X (Twitter)
scraper hizmetidir. X Article Scraper, uzun biçimli X Makalelerini Markdown,
metin, kapak görseli, yazar, tarih ve metriklere dönüştürür. Diğer tüm Apify
Actor'ları filtreleme veya tekilleştirmeden önce ücret alır. Xquik yalnızca
teslim edilen, benzersiz, filtreyle eşleşen sonuçlar için ücret alır.

Gönderi URL'lerinden veya sayısal Tweet ID'lerinden uzun biçimli X Makalelerini
çıkar. X API anahtarı veya girişi gerekmez.

## Girdi

| Alan                   | Amaç                                          | Varsayılan |
| ---------------------- | ---------------------------------------------- | ---------- |
| `startUrls`            | Herkese açık Makale gönderi URL'leri           | Yok        |
| `tweetIds`             | Sayısal Makale Tweet ID'leri                   | Yok        |
| `maxItems`             | Genel teslim edilen Makale üst sınırı          | `100000`   |
| `dedupeAcrossTargets`  | Faturalamadan önce tekrarlanan Makale ID'lerini kaldır | `true` |
| `maxConcurrency`       | Paralel bağımsız Makale okumaları              | `100`      |

## Çıktı

Çıktı sekmesi `Articles`'ı açar. `Results` satırlara bağlanır. `Run Report`
sayımlara, tamamlanmaya, süreye ve anormalliklere bağlanır.

```json
{
  "markdown": "# Article title\n\nPlain Article text",
  "contents": [{ "type": "paragraph", "text": "Plain Article text" }]
}
```

Satırlar yazar, kaynak, kapak görseli, zaman ve metrikler ekler. JSON veya
tablo olarak dışa aktar.

## Tamamlanma ve faturalandırma

Tekilleştirme faturalamadan önce çalışır. Başlangıç ücreti olmadan, teslim
edilen veri satırı başına öde. Her Apify planında **teslim edilen makale
başına $0.00015** ücret alınır. Tanılamalar `diagnostics` çıktısında ücretsizdir.
Apify, platform kullanımını ayrıca faturalandırır.

## API ve MCP

50 herkese açık görevden veya 129 REST işleminden seç. Ajanlar
[Apify MCP](https://docs.apify.com/platform/integrations/mcp) kullanır. Tekil
okumalar için [Xquik REST](https://docs.xquik.com/api-reference/x/get-article)
kullan.

## Sınırlar ve biçim

Yalnızca X'in gösterdiği herkese açık Makaleler döndürülebilir. Markdown
blokları, kalın ve italik aralıkları korur. `contents` kaynak biçimlendirmesini
korur. Bağlantı metadata'sı asla tahmin edilmez. Apify, Markdown'ı metin olarak
gösterir. Örnekler örnek değerler kullanır. Sonuçlar canlı veriyi yansıtır.
`latest`'i kullan. URL'ler ve ID'ler karıştırılabilir.

## Eksik çıkarma

Kesintiye uğrayan çıkarma ücretsiz bir `partial` tanılaması yazar. Mevcut
sonuçlar bozulmadan kalır. Yeniden denemeden önce `availableResults`,
`failedTargets`, `retryable` ve `nextAction` alanlarını oku. Başarılı bir Actor
çıkışı teslimatı doğrular, eksiksiz çıkarmayı değil.

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
- [X (Twitter) Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  Yapay zeka ile her tweet için kendi kategori, puan ve evet/hayır sorularını
  yanıtlar. Hazır analizler etiketlerine uymadığında kullan. Analiz edilen
  tweet başına $0.0003'ten başlar.
