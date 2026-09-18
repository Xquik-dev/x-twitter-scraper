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

# X Engagement Scraper | $0.00015/Row | Pay-Per-Result

<table align="center"><tr><td align="center">
<a href="https://youtu.be/4UOSpoOoC3Y?t=367"><img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" width="720" alt="Framer collega Xquik MCP agli agenti di coding"></a><br>
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">Guarda come Framer usa gli scraper Xquik con Claude Code, Codex, Cursor e altro, da 6:07.</a>
</td></tr></table>

Xquik è il servizio di scraping X (Twitter) più veloce ed economico al mondo,
con i dati X più completi, e X Engagement Scraper raccoglie risposte,
citazioni, chi ha retwittato, chi ha messo Mi piace e thread per qualsiasi
post. Ogni altro Actor Apify addebita il costo prima di filtrare o
deduplicare. Xquik addebita solo i risultati consegnati, unici e conformi ai
filtri.

Raccogli dati di engagement Twitter per uno o più post X: risposte,
citazioni, chi ha retwittato, chi ha messo Mi piace e contesto del thread.
Non serve una chiave API X né il login.

## Risposte, citazioni e profili

- URL dei post e ID numerici dei Tweet.
- Risposte dirette su tutte le pagine di risultati disponibili.
- Risposte dirette e annidate in 4 ordini di ordinamento.
- Dettagli del post sorgente come riga selezionabile.
- Post di citazione con testo, autori, media e metriche.
- Profili di chi ha retwittato e di chi ha messo Mi piace.
- Contesto della conversazione attorno a ogni post sorgente.
- Più tipi di engagement e post per esecuzione.
- Limiti globali e per risorsa.
- Attribuzione del post sorgente e del tipo di engagement.
- Risorse concorrenti con recupero da cursore salvato.

## Input

```json
{
  "tweetIds": ["2082577277246972300"],
  "engagementTypes": ["replies", "quotes", "retweeters", "favoriters"],
  "maxItems": 10000
}
```

Lascia `dedupeAcrossTargets` disattivato per mantenere ogni abbinamento tra
sorgente ed engagement. Attivalo per mantenere una riga per account
nell'intera esecuzione.

## Output

Le righe usano `tweet`, `replies`, `completeReplies`, `quotes`,
`retweeters`, `favoriters` o `thread` come `resultType`. `sourceTarget`
identifica l'ID del Tweet sorgente. I campi di tweet e profilo seguono le
forme di risposta REST stabili di Xquik.

`completeReplies` conserva ogni riga restituita. Il rapporto di esecuzione
conta `incompleteTargets` per la copertura parziale. I filtri vengono
eseguiti prima della fatturazione dell'Actor.

## Timestamp dei retweet

Imposta `includeRetweetTimestamp` su `true` per i risultati `retweeters`. La
colonna `retweetedAt` contiene l'orario osservato della ripubblicazione in
UTC.

Ogni verifica controlla la pagina profilo più recente disponibile di chi ha
retwittato. Confronta l'account e il post sorgente con i record di
ripubblicazione effettivi. Record di ripubblicazione più vecchi, eliminati o
non disponibili possono lasciare il timestamp `null`. Anche le verifiche del
timestamp fallite lasciano `null`; il profilo resta incluso. La verifica non
dimostra che un account non abbia mai ripubblicato un post.

Le letture extra aumentano la latenza. Lascia questa opzione disattivata per
i risultati solo profilo. `createdAt` del profilo resta la data di
creazione dell'account. Le righe dei tweet portano `retweetedAt` quando
contengono un evento di ripubblicazione. Le date del post originale e gli
orari di scraping non sostituiscono mai gli orari di ripubblicazione. I
prezzi dei risultati e la fatturazione per riga consegnata restano
invariati.

## Prezzi

Ogni piano Apify costa **$0.00015 per riga consegnata**. Apify fattura l'uso
della tua piattaforma separatamente.

- Un addebito per ogni riga di dati consegnata. La diagnostica è gratuita in `diagnostics`.
- Nessun costo di avvio, post, tipo di engagement o pagina.
- La deduplicazione viene eseguita prima della fatturazione.

Usa `latest` a meno che tu non abbia bisogno di una build più vecchia.
Scegli tra 50 task pubblici o 129 operazioni REST Xquik. Gli esempi usano
valori campione. I risultati riflettono dati live.

## Recupero e limiti

Le coppie indipendenti post-risorsa vengono eseguite in concorrenza. La
sequenza dei cursori resta ordinata. Righe accettate, stato di fatturazione,
cursori e fingerprint sopravvivono alla migrazione Apify. L'Actor non ha
timeout autoimposto.

## Estrazione incompleta

Un'estrazione interrotta scrive una diagnostica `partial` gratuita. I
risultati disponibili restano intatti. Leggi `availableResults`,
`failedTargets`, `retryable` e `nextAction` prima di riprovare. Un'uscita
riuscita dell'Actor conferma la consegna, non l'estrazione completa.

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
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): raccoglie
  follower, following, membri di List, iscritti e membri di Community come
  righe profilo. Usalo quando ti servono liste di audience o membri. A
  partire da $0.00015 per profilo.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper):
  cerca utenti per handle, bio e posizione con filtri per follower,
  verifica, età e posizione. Usalo quando costruisci liste di account a
  partire da una ricerca. A partire da $0.00015 per profilo.
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
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  monitora le menzioni del brand con rilevanza AI, sentiment e risposte
  sull'esperienza cliente, e confronta le esecuzioni. Usalo quando osservi un
  brand nel tempo. A partire da $0.0003 per tweet analizzato.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  etichetta atteggiamento, intensità e probabilità di sarcasmo per ogni tweet
  con l'AI. Usalo quando ti serve il sentiment generale su qualsiasi
  argomento. A partire da $0.0003 per tweet analizzato.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  etichetta posizione rialzista, ribassista, neutra o mista, tipo di
  contenuto, convinzione e rilevanza dell'asset con l'AI. Usalo quando segui
  stock, crypto o discussioni di trading. A partire da $0.0003 per tweet
  analizzato.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  etichetta i post di notizie per formato, attribuzione della fonte e
  rilevanza dell'argomento con l'AI. Usalo quando separi il reporting dal
  commento. A partire da $0.0003 per tweet analizzato.
- [X (Twitter) Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  risponde alle tue domande personalizzate di categoria, punteggio e sì/no
  per ogni tweet con l'AI. Usalo quando le analisi preimpostate non si
  adattano alle tue etichette. A partire da $0.0003 per tweet analizzato.
