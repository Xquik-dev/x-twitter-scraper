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
con i dati X più completi, e X User Search Scraper trova utenti per handle,
bio e posizione. Ogni altro Actor Apify addebita il costo prima di filtrare o
deduplicare. Xquik addebita solo i risultati consegnati, unici e conformi ai
filtri.

Cerca account Twitter per nome, argomento, bio o posizione. Nessuna chiave API X.

- Filtra per audience, post, età, verifica, sito web, posizione, bio e username.
- Riprendi una query da un cursore salvato. Le migrazioni preservano il lavoro accettato.

## Input

```json
{
  "searchTerms": ["artificial intelligence", "machine learning"],
  "minFollowers": 1000,
  "maxItems": 10000
}
```

## Output

Ogni riga contiene un profilo e la query di origine in `sourceTarget`.

## Prezzi

Ogni piano costa **$0.00015 per profilo consegnato**. Apify fattura l'uso della
piattaforma separatamente.

- Un addebito per ogni riga di dati consegnata. La diagnostica è gratuita in `diagnostics`.
- Nessun costo di avvio, query o pagina. Filtri e deduplicazione vengono eseguiti prima della fatturazione.

Scegli tra 50 task pubblici. 129 operazioni REST usano valori di esempio e dati live.

## Estrazione incompleta

Un'estrazione interrotta scrive una diagnostica `partial` gratuita. I risultati
disponibili restano intatti. Leggi `availableResults`, `failedTargets`,
`retryable` e `nextAction` prima di riprovare. Un'uscita riuscita dell'Actor
conferma la consegna, non l'estrazione completa.

Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.
"Twitter" e "X" sono marchi di X Corp.

## Actor Xquik correlati

Ogni Actor Xquik condivide lo stesso motore di estrazione, la fatturazione
filter-first e la diagnostica. Scegli quello che corrisponde ai dati di cui
hai bisogno.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): raccoglie tweet
  da ricerche, timeline di profilo, List e ID di tweet con oltre 50 filtri ed
  export piatti. Usalo quando ti servono dati sui tweet senza analisi. A
  partire da $0.00015 per riga.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): raccoglie
  profili più i loro post, risposte, media e Mi piace da handle, ID o URL.
  Usalo quando parti dagli account invece che dalle ricerche. A partire da
  $0.00015 per riga.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): raccoglie
  risposte, commenti e intere conversazioni sotto i post con oltre 25 filtri.
  Usalo quando ti serve la discussione sotto i tweet. A partire da $0.00015
  per riga.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper):
  raccoglie risposte, citazioni, chi ha retwittato, chi ha messo Mi piace e
  thread per URL o ID di post in blocco. Usalo quando misuri chi ha
  interagito con i post. A partire da $0.00015 per riga.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): raccoglie
  follower, following, membri di List, iscritti e membri di Community come
  righe profilo. Usalo quando ti servono liste di audience o membri. A
  partire da $0.00015 per profilo.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): raccoglie post,
  membri e follower di List da URL o ID di List. Usalo quando una List
  curata definisce le tue fonti. A partire da $0.00015 per riga.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper):
  raccoglie informazioni, post, ricerche, membri e moderatori di Community.
  Usalo quando le tue fonti sono X Community. A partire da $0.00015 per riga.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): raccoglie
  tendenze in tempo reale per posizione con rank, volume, query e WOEID.
  Usalo quando monitori cosa è di tendenza e dove. A partire da $0.00015 per
  tendenza.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): raccoglie
  articoli lunghi di X come Markdown e testo con copertine, autori, date e
  metriche. Usalo quando ti servono i corpi degli articoli, non i tweet. A
  partire da $0.00015 per articolo.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): estrae o
  archivia foto, video e GIF da post o profili con opzioni MP4 e metadati.
  Usalo quando ti servono i file media stessi. A partire da $0.00015 per riga
  media.
- [X (Twitter) Brand Monitoring](https://apify.com/xquik/x-twitter-brand-monitoring):
  monitora le menzioni del brand con rilevanza AI, sentiment e risposte
  sull'esperienza cliente, e confronta le esecuzioni. Usalo quando osservi un
  brand nel tempo. A partire da $0.0003 per tweet analizzato.
- [X Tweet Sentiment Analysis](https://apify.com/xquik/x-tweet-sentiment-analysis):
  etichetta atteggiamento, intensità e probabilità di sarcasmo per ogni tweet
  con l'AI. Usalo quando ti serve il sentiment generale su qualsiasi
  argomento. A partire da $0.0003 per tweet analizzato.
- [X (Twitter) Stock & Crypto Signal](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  etichetta posizione rialzista, ribassista, neutra o mista, tipo di
  contenuto, convinzione e rilevanza dell'asset con l'AI. Usalo quando segui
  stock, crypto o discussioni di trading. A partire da $0.0003 per tweet
  analizzato.
- [X (Twitter) News Monitor with AI](https://apify.com/xquik/x-twitter-news-monitor):
  etichetta i post di notizie per formato, attribuzione della fonte e
  rilevanza dell'argomento con l'AI. Usalo quando separi il reporting dal
  commento. A partire da $0.0003 per tweet analizzato.
- [X Tweet Classifier with AI](https://apify.com/xquik/x-twitter-tweet-classifier):
  risponde alle tue domande personalizzate di categoria, punteggio e sì/no
  per ogni tweet con l'AI. Usalo quando le analisi preimpostate non si
  adattano alle tue etichette. A partire da $0.0003 per tweet analizzato.
