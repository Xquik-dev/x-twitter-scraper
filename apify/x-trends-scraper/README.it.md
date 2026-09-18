<p align="center">
  <a href="README.md">English</a> ·
  <a href="README.es.md">Español</a> ·
  <a href="README.tr.md">Türkçe</a> ·
  <a href="README.zh-CN.md">简体中文</a> ·
  <a href="README.ja.md">日本語</a> ·
  <a href="README.ko.md">한국어</a> ·
  <a href="README.de.md">Deutsch</a> ·
  <a href="README.fr.md">Français</a> ·
  <strong>Italiano</strong>
</p>

<table align="center"><tr><td align="center">
<a href="https://youtu.be/4UOSpoOoC3Y?t=367"><img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" width="720" alt="Framer collega Xquik MCP agli agenti di coding"></a><br>
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">Guarda come Framer usa gli scraper Xquik con Claude Code, Codex, Cursor e altro, da 6:07.</a>
</td></tr></table>

Xquik è il servizio di scraping X (Twitter) più veloce ed economico al mondo,
con i dati X più completi, e X Trends Scraper raccoglie tendenze in tempo
reale per località con posizione, volume e query. Ogni altro Actor Apify
addebita l'importo prima di filtrare o deduplicare. Xquik addebita solo i
risultati consegnati, unici e corrispondenti ai filtri.

Estrai le tendenze attuali di Twitter in molte località in un'unica
esecuzione. Esporta posizione, argomento, query, volume dei tweet, URL di
ricerca, WOEID e località di origine. Non servono chiave API X né login.

## Località e dati sulle tendenze

- Esegui più paesi o WOEID in parallelo.
- Restituisci fino a 50 tendenze attuali per località.
- Conserva l'attribuzione della località su ogni riga.
- Etichetta le righe hashtag e indica se il volume dei tweet è disponibile.
- Deduplica gli input equivalenti prima della fatturazione.
- Esporta JSON, CSV, Excel, XML e RSS tramite i dataset di Apify.
- Riprendi dallo stato salvato dopo una migrazione di Apify.

## Input

Usa nomi di località, WOEID numerici o entrambi:

```json
{
  "locations": ["Worldwide", "United States", "Turkey"],
  "maxTrendsPerLocation": 50,
  "maxItems": 150
}
```

Le scorciatoie supportate includono Worldwide, United States, United
Kingdom, Turkey, Brazil, Canada, France, Germany, India, Indonesia, Japan,
Mexico e Australia. Usa `woeids` per qualsiasi altra località supportata.

## Output

Ogni tendenza è una riga del dataset con `name`, `rank`, `tweetVolume`,
`query`, `url`, `woeid`, `sourceTarget` e `resultType`. I campi di origine
mancanti restano assenti invece di essere inventati.

## Prezzi

Ogni piano Apify costa **$0.00015 per riga consegnata**. Apify fattura
separatamente l'utilizzo della tua piattaforma.

- Un addebito per ogni riga di dati consegnata. La diagnostica è gratuita in
  `diagnostics`.
- Nessun costo di avvio, query o località.
- I duplicati vengono rimossi prima della fatturazione.
- Le impostazioni di addebito massimo totale di Apify limitano le righe
  consegnate.

Usa `latest` a meno che non ti serva una build precedente. Scegli tra 50
task pubblici o 129 operazioni REST di Xquik. Gli esempi usano valori
campione. I risultati riflettono dati in tempo reale.

## Ripristino e limiti

Le località indipendenti vengono eseguite in parallelo. Lo stato del
cursore, le righe accettate, lo stato di fatturazione e le impronte di
output sopravvivono alla migrazione di Apify. L'Actor non ha un timeout di
esecuzione autoimposto. Un timeout di Apify fornito dal chiamante resta
rispettato.

## Estrazione incompleta

Un'estrazione interrotta scrive una diagnostica `partial` gratuita. I
risultati disponibili restano intatti. Leggi `availableResults`,
`failedTargets`, `retryable` e `nextAction` prima di riprovare. Un'uscita
riuscita dell'Actor conferma la consegna, non l'estrazione completa.

Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.
"Twitter" e "X" sono marchi di X Corp.

## Actor Xquik correlati

Ogni Actor Xquik condivide lo stesso motore di estrazione, la fatturazione
basata sui filtri e la diagnostica. Scegli quello che corrisponde ai dati di
cui hai bisogno.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): estrae tweet da
  ricerche, timeline dei profili, Liste e ID dei tweet con oltre 50 filtri ed
  esportazioni piatte. Usalo quando ti servono dati sui tweet senza analisi.
  Da $0.00015 per riga.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): estrae
  profili con i relativi post, risposte, media e Mi piace da handle, ID o
  URL. Usalo quando parti dagli account anziché dalle ricerche. Da $0.00015
  per riga.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): estrae
  risposte, commenti e intere conversazioni sotto i post con oltre 25
  filtri. Usalo quando ti serve la discussione sotto i tweet. Da $0.00015
  per riga.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper):
  estrae risposte, citazioni, retweeter, chi mette Mi piace e thread per URL
  o ID di post in blocco. Usalo quando misuri chi ha interagito con i post.
  Da $0.00015 per riga.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): estrae
  follower, following, membri delle Liste, iscritti e membri delle Community
  come righe di profilo. Usalo quando ti servono liste di pubblico o membri.
  Da $0.00015 per profilo.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper):
  cerca utenti per handle, bio e posizione con filtri su follower,
  verifica, età e posizione. Usalo quando costruisci liste di account dalla
  ricerca. Da $0.00015 per profilo.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): estrae post,
  membri e follower di una Lista da URL o ID delle Liste. Usalo quando una
  Lista curata definisce le tue fonti. Da $0.00015 per riga.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): estrae
  informazioni, post, ricerche, membri e moderatori delle Community. Usalo
  quando le tue fonti sono le Community X. Da $0.00015 per riga.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): estrae
  Articoli X lunghi come Markdown e testo con copertine, autori, date e
  metriche. Usalo quando ti servono i corpi degli articoli, non i tweet. Da
  $0.00015 per articolo.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): estrae o
  archivia foto, video e GIF da post o profili con opzioni MP4 e metadati.
  Usalo quando ti servono i file media stessi. Da $0.00015 per riga media.
- [X (Twitter) Brand Monitoring](https://apify.com/xquik/x-twitter-brand-monitoring):
  monitora le menzioni del brand con rilevanza, sentiment e risposte sulla
  customer experience generate dall'IA e confronta le esecuzioni. Usalo
  quando osservi un brand nel tempo. Da $0.0003 per tweet analizzato.
- [X Tweet Sentiment Analysis](https://apify.com/xquik/x-tweet-sentiment-analysis):
  etichetta atteggiamento, intensità e probabilità di sarcasmo per ogni
  tweet con l'IA. Usalo quando ti serve un sentiment generale su qualsiasi
  argomento. Da $0.0003 per tweet analizzato.
- [X (Twitter) Stock & Crypto Signal](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  etichetta posizione rialzista, ribassista, neutra o mista, tipo di
  contenuto, convinzione e rilevanza dell'asset con l'IA. Usalo quando segui
  discussioni su azioni, crypto o trading. Da $0.0003 per tweet analizzato.
- [X (Twitter) News Monitor with AI](https://apify.com/xquik/x-twitter-news-monitor):
  etichetta i post di news per formato, attribuzione della fonte e
  rilevanza del tema con l'IA. Usalo quando separi il reporting dal
  commento. Da $0.0003 per tweet analizzato.
- [X Tweet Classifier with AI](https://apify.com/xquik/x-twitter-tweet-classifier):
  risponde alle tue domande personalizzate su categoria, punteggio e sì/no
  per ogni tweet con l'IA. Usalo quando le analisi preimpostate non si
  adattano alle tue etichette. Da $0.0003 per tweet analizzato.
