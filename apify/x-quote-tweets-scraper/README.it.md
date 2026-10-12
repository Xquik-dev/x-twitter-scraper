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

Xquik è il servizio di scraping X (Twitter) più veloce & economico al mondo, con
i dati X più completi. X Quote Tweets Scraper di Xquik raccoglie i post che
citano post pubblici di X, senza cookie di X né login. La maggior parte degli
altri Actor Apify fa pagare prima di filtrare o deduplicare. Xquik fa pagare
solo i risultati consegnati, unici e conformi ai filtri.

Incolla URL di post o ID di post & ottieni ogni citazione che X fornisce per
ciascun post in 1 esecuzione. Ogni riga contiene la citazione, il profilo
pubblico completo del suo autore & il post citato. Paghi **$0.00015 per riga
consegnata**. Apify fattura a parte l'uso della piattaforma.

> Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.
> "Twitter" e "X" sono marchi di X Corp.

## Dati della citazione su ogni riga

- Il testo completo, il link, la lingua & l'ora di pubblicazione della
  citazione.
- Mi piace, risposte, repost, citazioni, visualizzazioni & segnalibri.
- Il profilo pubblico completo dell'autore: nome, bio, follower, verifica &
  altro.
- Foto, video & GIF con i relativi link.
- Hashtag, menzioni & link presenti nel testo.
- Il post citato stesso, nella stessa forma.
- `sourceTarget`, il post dell'input che la riga cita.
- `position`, il posto della riga nell'esecuzione, & `scrapedAt`, il momento
  della sua consegna.
- Molti post in 1 esecuzione, ognuno letto fino alla fine di ciò che X fornisce.
- Prima le più recenti, oppure le citazioni che X classifica più in alto.
- 11 filtri: lingua, date, tipo di media, 6 conteggi minimi & autori verificati.
- 1 riga per autore quando vuoi persone, non post.
- URL di post di x.com & twitter.com, oppure ID di post numerici.
- Rimozione dei duplicati prima della fatturazione.
- Export JSON, CSV, Excel, XML & RSS tramite i dataset di Apify.
- Le esecuzioni riprendono dallo stato salvato dopo una migrazione di Apify.

## Come estrarre le citazioni dei post

1. Apri X Quote Tweets Scraper di Xquik in Apify Console.
2. Incolla URL di post in `startUrls` o ID di post in `tweetIds`.
3. Imposta `maxItems` per limitare le righe consegnate, poi fai clic su Start.
4. Scarica il dataset in JSON, CSV o Excel, oppure usa l'API di Apify.

In nessun passaggio inserisci cookie di X, dati di login o una chiave API. Non
porti alcun cursore di pagina da un'esecuzione all'altra.

## Input

`startUrls` accetta ogni URL di post come stringa semplice o come oggetto
`{ "url": "..." }`. `tweetIds` accetta ID di post, & lì funziona anche un URL di
post:

```json
{
  "startUrls": [
    "https://x.com/OpenAI/status/2082577277246972300",
    { "url": "https://twitter.com/jack/status/20" }
  ],
  "tweetIds": ["2082201573976056245"],
  "maxItems": 1000
}
```

Ordine, filtri & limiti vanno accanto ai post:

```json
{
  "tweetIds": ["2082577277246972300"],
  "sort": "top",
  "language": "en",
  "minLikes": 10,
  "sinceDate": "2026-10-01",
  "maxItemsPerTarget": 200,
  "uniqueAuthors": true
}
```

- `sort` è `latest` per avere prima le citazioni più recenti, oppure `top` per
  le citazioni che X classifica più in alto.
- `includeReplies` tiene le risposte che citano il post, come le elenca la vista
  Citazioni di X. È attivo se non lo disattivi.
- `uniqueAuthors` tiene la prima citazione di ogni autore nell'esecuzione. Il
  dataset contiene allora 1 riga per autore, non per citazione. Paghi le righe
  consegnate.
- `maxItems` limita l'intera esecuzione & `maxItemsPerTarget` limita ogni post.
- I filtri sono `language`, `sinceDate`, `untilDate`, `mediaType`, `minLikes`,
  `minReplies`, `minRetweets`, `minQuotes`, `minViews`, `minBookmarks` &
  `verifiedOnly`.

Un post che l'input nomina 2 volte viene letto 1 volta sola. `tweetUrls`,
`tweetId`, `tweets` & `tweet_id` funzionano come altri nomi per i post. Le
esecuzioni piccole senza problemi saltano `run-report` & risparmiano uso di
Apify. Attiva `alwaysSaveRunRecords` per scriverlo a ogni esecuzione.

## Output

Ogni citazione è 1 riga del dataset con `id`, `url`, `text`, `createdAt`,
`lang`, `likeCount`, `replyCount`, `retweetCount`, `quoteCount`, `viewCount`,
`bookmarkCount`, `media`, `entities`, `author`, `quotedTweetId` &
`quoted_tweet`. L'Actor aggiunge `sourceTarget`, `position`, `scrapedAt` &
`resultType`. I campi di origine mancanti restano assenti. X Quote Tweets
Scraper di Xquik non inventa valori.

Gli esempi usano valori fittizi. I risultati contengono dati live. Una riga ha
questo aspetto:

```json
{
  "id": "1900000000000000001",
  "url": "https://x.com/sample_user/status/1900000000000000001",
  "text": "Worth a read. The second chart says it all.",
  "createdAt": "2026-10-11T09:00:00.000Z",
  "lang": "en",
  "likeCount": 42,
  "replyCount": 3,
  "retweetCount": 5,
  "quoteCount": 1,
  "viewCount": 1800,
  "bookmarkCount": 2,
  "author": {
    "id": "1234567890",
    "username": "sample_user",
    "name": "Sample User",
    "followers": 1200,
    "verified": true
  },
  "quotedTweetId": "1900000000000000000",
  "quoted_tweet": {
    "id": "1900000000000000000",
    "text": "Our new report is out."
  },
  "resultType": "quotes",
  "sourceTarget": "1900000000000000000",
  "position": 1,
  "scrapedAt": "2026-10-12T09:00:00.000Z"
}
```

`position` conta le righe consegnate a partire da 1, dopo i filtri & la
deduplicazione. Il dataset ha 2 viste a tabella. "Quote Tweets" mostra ogni
citazione con i suoi conteggi. "Quote Authors" mostra chi ha citato ogni post,
con i campi del profilo dell'autore come colonne.

## Cosa fornisce X

2 limiti vengono da X, & X Quote Tweets Scraper di Xquik li dichiara in modo
chiaro:

- La ricerca di X decide quanto indietro arrivano le citazioni di un post molto
  grande. Un'esecuzione legge ogni citazione che X fornisce & si ferma lì.
- `top` è la classifica di X, non di Xquik. Non è un ordine per numero di Mi
  piace. Una riga successiva può avere più Mi piace di una precedente.

## Quanto costa estrarre le citazioni dei post?

Su ogni piano Apify paghi $0.00015 per riga consegnata. Apify fattura a parte il
tuo uso della piattaforma.

- Un addebito per ogni riga di dati consegnata. La diagnostica in `diagnostics`
  è gratuita.
- Nessun costo di avvio.
- Un post che X non ha non aggiunge righe né addebiti.
- I filtri & `uniqueAuthors` agiscono prima della fatturazione, quindi una
  citazione scartata non costa nulla.
- La deduplicazione avviene prima della fatturazione.
- Le impostazioni di Apify sull'addebito massimo totale limitano le righe
  consegnate.

## Limiti & recupero

X Quote Tweets Scraper di Xquik legge molti post in 1 esecuzione. Le righe
consegnate & i progressi restano dopo un riavvio di Apify. L'Actor non aggiunge
un limite di tempo proprio. Rispetta qualsiasi timeout di Apify che imposti.

Lo stato dell'esecuzione nomina i post per cui X non ha corrispondenze & ti dice
di controllare URL o ID. Un'estrazione interrotta scrive una diagnostica
`partial` gratuita. I risultati disponibili restano intatti. Leggi
`availableResults`, `failedTargets`, `retryable` & `nextAction` prima di
riprovare. Un'uscita riuscita dell'Actor conferma la consegna, non l'estrazione
completa.

Lo stato dell'esecuzione nomina ogni causa di un arresto anticipato.
`stopCauses` elenca ogni causa con i propri `message`, `retryable` &
`nextAction`. L'esecuzione è `retryable` quando lo è almeno una causa.

## Actor Xquik correlati

Ogni Actor Xquik usa lo stesso motore di estrazione, fattura dopo i filtri &
offre la stessa diagnostica. Scegli quello adatto ai dati che ti servono.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): estrae post da
  ricerche, timeline dei profili, liste & ID dei post con oltre 50 filtri &
  export piatti. Usalo quando ti servono dati sui post senza analisi. Da
  $0.00015 per riga.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): estrae profili
  con i relativi post, risposte, media & follower da nomi utente, ID o URL.
  Usalo quando parti dagli account invece che dalle ricerche. Da $0.00015 per
  riga.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): estrae risposte,
  commenti & intere conversazioni sotto i post con oltre 25 filtri. Usalo quando
  ti serve la discussione sotto i post. Da $0.00015 per riga.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): estrae
  risposte, citazioni, utenti che hanno fatto repost & thread da URL o ID di
  post in blocco. Usalo quando misuri chi ha interagito con i post. Da $0.00015
  per riga.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): estrae
  follower, following, membri & follower delle liste e membri delle community
  come righe di profilo. Usalo quando ti servono elenchi di pubblico o di
  membri. Da $0.00015 per profilo.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper): cerca
  utenti per nome utente, bio & posizione con filtri su follower, verifica, età
  & posizione. Usalo quando costruisci elenchi di account dalla ricerca. Da
  $0.00015 per profilo.
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper):
  verifica dove hanno sede gli account con l'etichetta "Posizione account" di X,
  il modo in cui si sono collegati a X & i cambi di nome utente. Usalo quando ti
  serve verificare dove hanno sede gli account. Da $0.00015 per account.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): estrae post, membri
  & follower delle liste da URL o ID delle liste. Usalo quando una lista curata
  definisce le tue fonti. Da $0.00015 per riga.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): estrae
  informazioni, post, ricerche, membri & moderatori delle community. Usalo
  quando le tue fonti sono community di X. Da $0.00015 per riga.
- [X Space Scraper](https://apify.com/xquik/x-space-scraper): trova gli Spazi
  per parola chiave & ne legge titoli, stati, orari, numero di ascoltatori, host
  & relatori. Legge anche le trasmissioni tramite URL o ID. Usalo quando segui
  audio & video in diretta su X. Da $0.00015 per Spazio o trasmissione.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): estrae le
  tendenze in tempo reale per località con posizione in classifica, volume,
  query & WOEID. Usalo quando segui cosa è di tendenza e dove. Da $0.00015 per
  tendenza.
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper): estrae le offerte di
  lavoro di X per parola chiave, luogo, modalità di lavoro, livello di
  esperienza & azienda, con stipendi & link di candidatura. Usalo quando
  raccogli le offerte di lavoro pubblicate su X. Da $0.00015 per offerta.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): raccoglie gli
  articoli lunghi di X come Markdown & testo, con copertine, autori, date &
  metriche. Usalo quando ti serve il corpo degli articoli, non i post. Da
  $0.00015 per articolo.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): estrae o
  archivia foto, video & GIF da post o profili con opzioni MP4 & metadati. Usalo
  quando ti servono i file multimediali veri e propri. Da $0.00015 per riga di
  media.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  monitora le menzioni del brand con rilevanza, sentiment & risposte sulla
  customer experience generate con AI, poi confronta le esecuzioni. Usalo quando
  osservi un brand nel tempo. Da $0.0003 per post analizzato.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  etichetta atteggiamento, intensità & probabilità di sarcasmo di ogni post con
  AI. Usalo quando ti serve il sentiment generale su qualsiasi argomento. Da
  $0.0003 per post analizzato.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  etichetta con AI la posizione rialzista, ribassista, neutra o mista, il tipo
  di contenuto, la convinzione & la rilevanza per l'asset. Usalo quando segui
  azioni, crypto o discussioni di trading. Da $0.0003 per post analizzato.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  etichetta con AI i post di notizie per formato, attribuzione della fonte &
  rilevanza dell'argomento. Usalo quando separi le notizie dai commenti. Da
  $0.0003 per post analizzato.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  risponde con AI alle tue domande di categoria, punteggio & sì/no su ogni post.
  Usalo quando le analisi preimpostate non si adattano alle tue etichette. Da
  $0.0003 per post analizzato.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer):
  stima un Viral Score da 0 a 100 & un verdetto per ogni post da 8 risposte AI
  sui suoi tratti. Usalo quando studi perché i post si diffondono o falliscono.
  Da $0.0003 per post analizzato.

## FAQ

Le risposte alle domande più comuni, poi dove trovare assistenza.

### Servono cookie di X, una chiave API o il login?

No. X Quote Tweets Scraper di Xquik non richiede cookie di X, chiave API, login
o credenziali. Ogni lettura avviene sull'infrastruttura di Xquik.

### Posso estrarre le citazioni di molti post in 1 esecuzione?

Sì. Incolla tutti gli URL di post o gli ID di post che ti servono. Il
`sourceTarget` di ogni riga dice quale post cita.

### Quante citazioni può restituire 1 esecuzione?

Un'esecuzione può restituire 100.000 righe & oltre. Per un export completo,
porta `maxItems` sopra le 1.000 con cui parte il modulo.

### Perché un post enorme restituisce meno citazioni di quante ne mostra il suo contatore?

La ricerca di X decide quanto indietro arrivano le citazioni di un post molto
grande. L'esecuzione consegna ogni citazione che X fornisce. Il contatore
include anche le citazioni di account privati o rimossi.

### Come ottengo 1 riga per ogni persona che ha citato un post?

Attiva `uniqueAuthors`. L'esecuzione tiene la prima citazione di ogni autore &
salta le successive senza addebito.

### È legale estrarre le citazioni dei post?

X Quote Tweets Scraper di Xquik raccoglie post pubblici di X. I risultati
possono contenere dati personali. Verifica di avere uno scopo lecito & rispetta
le norme sulla privacy applicabili. Nel dubbio, chiedi a un legale qualificato.

### Perché la mia esecuzione non ha restituito risultati?

Leggi prima lo stato dell'esecuzione. Lo stato di un'esecuzione vuota dice se X
non ha corrispondenze per un post o se il post non ha citazioni conformi ai tuoi
filtri. L'output gratuito `diagnostics` compare quando qualcosa richiede
attenzione. Il suo `stopCauses` assegna a ogni causa un `nextAction` da seguire.

### Posso usare l'API, le pianificazioni & le integrazioni?

Sì. Usa l'API di Apify o l'API REST di Xquik. La
[scheda API](https://apify.com/xquik/x-quote-tweets-scraper/api) ha esempi in
Python, JavaScript & cURL. Le
[pianificazioni](https://docs.apify.com/platform/schedules) di Apify avviano X
Quote Tweets Scraper di Xquik con un cron. Gli agenti usano
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Usa `latest`, a
meno che non ti serva una build precedente.

### Dove trovo assistenza?

Apri una issue nella pagina dell'Actor o scrivi a <support@xquik.com> con l'ID
dell'esecuzione. La diagnostica gratuita nel key-value store spiega le
esecuzioni che richiedono attenzione. Un'esecuzione che non riceve alcuna riga
dice perché nel suo stato.

### Posso avere una soluzione personalizzata?

Sì. Visita [xquik.com](https://xquik.com) o leggi la
[documentazione API](https://docs.xquik.com/introduction). Copre dashboard, API,
server MCP & webhook.
