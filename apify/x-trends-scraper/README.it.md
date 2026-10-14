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
i dati X più completi. X Trends Scraper di Xquik raccoglie le tendenze in tempo
reale per località, con posizione in classifica, volume & query. La maggior
parte degli altri Actor Apify fa pagare prima di filtrare o deduplicare. Xquik
fa pagare solo i risultati consegnati, unici e conformi ai filtri.

Estrai le tendenze attuali di X (Twitter) in molte località in 1 esecuzione.
Oppure leggi le tendenze passate dall'archivio delle tendenze di Twitter di
Xquik, che parte dal 2026-10-13 alle 02:20 UTC. Paghi **$0.00015 per riga
consegnata**. Apify fattura a parte l'uso della piattaforma. Non ti servono una
chiave API X né il login.

> Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.
> "Twitter" e "X" sono marchi di X Corp.

## Località & dati sulle tendenze

- Più paesi, città o WOEID, letti in parallelo.
- Fino a 50 tendenze attuali per ogni località.
- Tendenze passate dall'archivio delle tendenze di Twitter, per data & ora, dal
  2026-10-13.
- Un elenco di tutti i luoghi per cui X offre tendenze, con WOEID, paese & tipo.
- La ricerca di luoghi di X, con l'ID del luogo che la ricerca di post di X
  accetta.
- Gli hashflag di X, cioè le emoji personalizzate che X mostra dopo alcuni
  hashtag.
- Posizione in classifica, argomento, query, volume di post, URL di ricerca,
  WOEID & località di origine.
- Attribuzione della località su ogni riga.
- Etichette per le righe con hashtag & per il volume di post disponibile.
- Rimozione dei duplicati tra input equivalenti prima della fatturazione.
- Export JSON, CSV, Excel, XML & RSS tramite i dataset di Apify.
- Le esecuzioni riprendono dallo stato salvato dopo una migrazione di Apify.

## Come estrarre le tendenze di X

1. Apri X Trends Scraper di Xquik in Apify Console.
2. Inserisci i nomi delle località in `locations` o i WOEID numerici in
   `woeids`.
3. Imposta `maxTrendsPerLocation`, fino a 50 tendenze per ogni località.
4. Imposta `maxItems` per limitare le righe consegnate nell'intera esecuzione,
   poi fai clic su Start.
5. Scarica il dataset in JSON, CSV o Excel, oppure usa l'API di Apify.

## Input

Usa nomi di località, WOEID numerici o entrambi.

```json
{
  "locations": ["Worldwide", "United States", "Turkey"],
  "maxTrendsPerLocation": 50,
  "maxItems": 150
}
```

`locations` accetta qualsiasi paese o città per cui X offre tendenze, come
Worldwide, United States, Japan o London. Funzionano anche i codici paese di 2
lettere. Un nome per cui X non offre tendenze non restituisce righe & non costa
nulla. `woeids` accetta WOEID numerici.

Per vedere ogni nome & WOEID, attiva `listLocations`. L'esecuzione elenca allora
i luoghi per cui X offre tendenze, al posto delle tendenze.

```json
{ "listLocations": true, "country": "TR", "maxItems": 100 }
```

`country` accetta un nome o un codice di 2 lettere. `placeType` accetta
`country`, `town`, `worldwide` o `unknown`. `nameContains` tiene i luoghi il cui
nome contiene il tuo testo. Lascia vuoti tutti e 3 per elencare ogni luogo.

Per cercare i luoghi di X per nome, compila `placeSearchTerms`. L'esecuzione
restituisce allora luoghi al posto delle tendenze.

```json
{ "placeSearchTerms": ["New York"], "maxItems": 20 }
```

Ogni luogo ha l'`id` che la ricerca di post di X accetta come `place`. X ordina
i luoghi, quindi il loro ordine può cambiare da un'esecuzione all'altra. X
elenca fino a 20 luoghi per un nome, & meno per alcuni nomi, come New York.
L'esecuzione tiene solo i luoghi con il nome che hai scritto, quindi New Delhi
non restituisce righe & non costa nulla.

`maxItems` limita l'intera esecuzione & la riempie un termine alla volta, quindi
il primo termine può usarlo tutto. Imposta `maxItemsPerTarget` per dare a ogni
termine una quota uguale.

```json
{
  "placeSearchTerms": ["Paris", "Rome"],
  "maxItems": 20,
  "maxItemsPerTarget": 10
}
```

Per elencare gli hashflag di X, attiva `listHashflags`. Un hashflag è l'emoji
personalizzata che X mostra dopo un hashtag per un periodo stabilito.

```json
{ "listHashflags": true, "hashtagContains": "football" }
```

L'esecuzione elenca gli hashflag che X mostra ora. Disattiva `activeOnly` per
aggiungere quelli terminati & quelli in arrivo. `hashtagContains` tiene gli
hashtag che contengono il tuo testo.

Per vedere cosa era in tendenza su Twitter ieri o in qualsiasi momento passato,
compila `at`. L'esecuzione legge allora, per ogni località, l'elenco salvato più
vicino a quel momento.

```json
{ "locations": ["Turkey"], "at": "2026-10-13T14:00:00Z" }
```

`at` accetta una data come 2026-10-13, un orario come 2026-10-13T14:00:00Z o i
secondi Unix. Un orario senza fuso è in UTC. Xquik salva 12 elenchi all'ora per
ogni località & conserva ciascuno per 25 mesi. Lo storico delle tendenze di
Twitter parte dal 2026-10-13 alle 02:20 UTC. Un momento a più di 24 ore da ogni
elenco salvato non restituisce righe & non costa nulla.

`at` accetta anche un intervallo prima dell'esecuzione, come un numero & `s`,
`m`, `h` o `d`. Con `24h`, una pianificazione giornaliera legge le tendenze di
ieri a ogni esecuzione.

```json
{ "locations": ["Turkey"], "at": "24h" }
```

Per un intervallo, compila `from` & `to`. L'esecuzione restituisce 1 elenco
salvato per ogni passo di `every`, come `15m`, `1h` o `1d`.

```json
{
  "locations": ["Turkey"],
  "from": "2026-10-13",
  "to": "2026-10-14",
  "every": "1h",
  "maxItems": 1200
}
```

Senza `to`, l'intervallo finisce adesso. Senza `every`, l'esecuzione restituisce
1 elenco all'ora. Un passo senza elenco salvato non restituisce righe. Anche
`from` & `to` accettano intervalli, quindi `from` impostato a `24h` legge le
ultime 24 ore. `at` prevale su `from` & `to`.

Un'esecuzione legge 1 tipo di riga. `listLocations` prevale su `listHashflags`,
che prevale su `placeSearchTerms`. Senza nessuno di questi, l'esecuzione legge
le tendenze.

Le esecuzioni piccole senza problemi saltano `run-report` & risparmiano uso di
Apify. Attiva `alwaysSaveRunRecords` per scriverlo a ogni esecuzione.

## Output

Ogni tendenza è 1 riga del dataset. Le righe riportano `name`, `rank`,
`tweetVolume`, `query`, `url`, `woeid`, `sourceTarget` & `resultType`.
`sourceTarget` è la località come l'hai scritta. I campi di origine mancanti
restano assenti. X Trends Scraper di Xquik non inventa valori.

Gli esempi usano valori fittizi. I risultati contengono dati live. Una riga di
tendenza ha questo aspetto.

```json
{
  "name": "#SampleTrend",
  "rank": 1,
  "tweetVolume": 12000,
  "isHashtag": true,
  "woeid": 1,
  "sourceTarget": "Worldwide"
}
```

Le righe di `at` o di un intervallo riportano anche `capturedAt`, il momento in
cui Xquik ha letto il loro elenco da X. Le righe di `at` riportano inoltre
`requestedAt`, il momento che hai chiesto. Xquik non stima nessuno dei 2.

Con `listLocations`, ogni luogo è 1 riga del dataset. Le righe riportano
`woeid`, `name`, `country`, `countryCode`, `placeType`, `placeTypeCode`,
`parentWoeid`, `url` & `resultType`. `url` è il riferimento legacy di X per il
luogo & potrebbe non aprirsi. Una riga di località di tendenza ha questo
aspetto.

```json
{
  "woeid": 2344116,
  "name": "Istanbul",
  "country": "Turkey",
  "countryCode": "TR",
  "placeType": "Town",
  "placeTypeCode": 7,
  "parentWoeid": 23424969,
  "resultType": "trendLocation"
}
```

Con `placeSearchTerms`, ogni luogo è 1 riga del dataset. Le righe riportano
`id`, `name`, `fullName`, `country`, `countryCode`, `placeType`, `url`,
`centroid`, `boundingBox`, `attributes`, `containedWithin`, `sourceTarget` &
`resultType`. `centroid` contiene la longitudine, poi la latitudine. Una riga di
luogo ha questo aspetto.

```json
{
  "id": "0123456789abcdef",
  "name": "Sample City",
  "fullName": "Sample City, Sample Country",
  "country": "Sample Country",
  "countryCode": "US",
  "placeType": "city",
  "centroid": [-73.97, 40.78],
  "sourceTarget": "New York",
  "resultType": "place"
}
```

Con `listHashflags`, ogni hashflag è 1 riga del dataset. Le righe riportano
`hashtag`, `assetUrl`, `startsAt`, `endsAt`, `isHashfettiEnabled`, `animations`
& `resultType`. Una riga di hashflag ha questo aspetto.

```json
{
  "hashtag": "SampleHashtag",
  "assetUrl": "https://abs.twimg.com/hashflags/Sample/Sample.png",
  "startsAt": "2026-10-02T10:00:00.000Z",
  "endsAt": "2027-01-03T14:59:00.000Z",
  "isHashfettiEnabled": false,
  "animations": [],
  "resultType": "hashflag"
}
```

## Quanto costa estrarre le tendenze di X?

Su ogni piano Apify paghi $0.00015 per riga consegnata. Apify fattura a parte il
tuo uso della piattaforma.

- Un addebito per ogni riga di dati consegnata. La diagnostica in `diagnostics`
  è gratuita.
- Una riga di località di tendenza, luogo o hashflag costa quanto una riga di
  tendenza.
- Nessun costo di avvio, per query o per località.
- La deduplicazione avviene prima della fatturazione.
- Le impostazioni di Apify sull'addebito massimo totale limitano le righe
  consegnate.

## Limiti & recupero

X Trends Scraper di Xquik legge molte località in 1 esecuzione. Le righe
consegnate & i progressi restano dopo un riavvio di Apify. L'Actor non aggiunge
un limite di tempo proprio. Rispetta qualsiasi timeout di Apify che imposti.

Un'estrazione interrotta scrive una diagnostica `partial` gratuita. I risultati
disponibili restano intatti. Leggi `availableResults`, `failedTargets`,
`retryable` & `nextAction` prima di riprovare. Un'uscita riuscita dell'Actor
conferma la consegna, non l'estrazione completa.

Lo stato dell'esecuzione nomina ogni causa di un arresto anticipato.
`stopCauses` elenca ogni causa con i propri `message`, `retryable` &
`nextAction`. Le cause sono `target_not_found`, `target_failed`,
`pagination_safety_limit` & `deadline_reached`. Un target mancante entra
nell'elenco solo se un'altra causa ha fermato l'esecuzione. L'esecuzione è
`retryable` quando lo è almeno una causa.

## Actor Xquik correlati

Ogni Actor Xquik usa lo stesso motore di estrazione, fattura dopo i filtri &
offre la stessa diagnostica. Scegli quello adatto ai dati che ti servono.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper) estrae post da
  ricerche, timeline dei profili, liste & ID dei post con oltre 50 filtri &
  export piatti. Usalo quando ti servono dati sui post senza analisi. Da
  $0.00015 per riga.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper) estrae profili
  con i relativi post, risposte, media & follower da nomi utente, ID o URL.
  Usalo quando parti dagli account invece che dalle ricerche. Da $0.00015 per
  riga.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper) estrae risposte,
  commenti & intere conversazioni sotto i post con oltre 25 filtri. Usalo quando
  ti serve la discussione sotto i post. Da $0.00015 per riga.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper) estrae
  risposte, citazioni, utenti che hanno fatto repost & thread da URL o ID di
  post in blocco. Usalo quando misuri chi ha interagito con i post. Da $0.00015
  per riga.
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper)
  estrae i post che citano altri post, con testo, media, conteggi, autori & 11
  filtri. Usalo quando studi chi ha citato dei post & cosa ha detto. Da $0.00015
  per post.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper) estrae
  follower, following, membri & follower delle liste e membri delle community
  come righe di profilo. Usalo quando ti servono elenchi di pubblico o di
  membri. Da $0.00015 per profilo.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper) cerca
  utenti per nome utente, bio & posizione con filtri su follower, verifica, età
  & posizione. Usalo quando costruisci elenchi di account dalla ricerca. Da
  $0.00015 per profilo.
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper)
  verifica dove hanno sede gli account con l'etichetta "Posizione account" di X,
  il modo in cui si sono collegati a X & i cambi di nome utente. Usalo quando ti
  serve verificare dove hanno sede gli account. Da $0.00015 per account.
- [X Email Scraper](https://apify.com/xquik/x-email-scraper) ottiene le email, i
  numeri di telefono & i link che gli account pubblicano sui propri profili, da
  nomi utente, follower o ricerche di utenti. Usalo quando ti servono le email
  che i profili pubblicano. Da $0.00015 per profilo.
- [X List Scraper](https://apify.com/xquik/x-list-scraper) estrae post, membri &
  follower delle liste da URL o ID delle liste. Usalo quando una lista curata
  definisce le tue fonti. Da $0.00015 per riga.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper) estrae
  informazioni, post, ricerche, membri & moderatori delle community. Usalo
  quando le tue fonti sono community di X. Da $0.00015 per riga.
- [X Space Scraper](https://apify.com/xquik/x-space-scraper) trova gli Spazi per
  parola chiave & ne legge titoli, stati, orari, numero di ascoltatori, host &
  relatori. Legge anche le trasmissioni tramite URL o ID. Usalo quando segui
  audio & video in diretta su X. Da $0.00015 per Spazio o trasmissione.
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper) estrae le offerte di
  lavoro di X per parola chiave, luogo, modalità di lavoro, livello di
  esperienza & azienda, con stipendi & link di candidatura. Usalo quando
  raccogli le offerte di lavoro pubblicate su X. Da $0.00015 per offerta.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper) raccoglie gli
  articoli lunghi di X come Markdown & testo, con copertine, autori, date &
  metriche. Usalo quando ti serve il corpo degli articoli, non i post. Da
  $0.00015 per articolo.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader) estrae o
  archivia foto, video & GIF da post o profili con opzioni MP4 & metadati. Usalo
  quando ti servono i file multimediali veri e propri. Da $0.00015 per riga di
  media.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring)
  monitora le menzioni del brand con rilevanza, sentiment & risposte sulla
  customer experience generate con AI, poi confronta le esecuzioni. Usalo quando
  osservi un brand nel tempo. Da $0.0003 per post analizzato.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis)
  etichetta atteggiamento, intensità & probabilità di sarcasmo di ogni post con
  AI. Usalo quando ti serve il sentiment generale su qualsiasi argomento. Da
  $0.0003 per post analizzato.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)
  etichetta con AI la posizione rialzista, ribassista, neutra o mista, il tipo
  di contenuto, la convinzione & la rilevanza per l'asset. Usalo quando segui
  azioni, crypto o discussioni di trading. Da $0.0003 per post analizzato.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)
  etichetta con AI i post di notizie per formato, attribuzione della fonte &
  rilevanza dell'argomento. Usalo quando separi le notizie dai commenti. Da
  $0.0003 per post analizzato.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)
  risponde con AI alle tue domande di categoria, punteggio & sì/no su ogni post.
  Usalo quando le analisi preimpostate non si adattano alle tue etichette. Da
  $0.0003 per post analizzato.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)
  stima un Viral Score da 0 a 100 & un verdetto per ogni post da 8 risposte AI
  sui suoi tratti. Usalo quando studi perché i post si diffondono o falliscono.
  Da $0.0003 per post analizzato.

## FAQ

Le risposte alle domande più comuni, poi dove trovare assistenza.

### Serve una chiave API X o il login?

No. X Trends Scraper di Xquik non richiede chiave API X, login o credenziali.

### È legale estrarre le tendenze di X?

X Trends Scraper di Xquik raccoglie campi pubblici di X. I risultati possono
contenere dati personali. Verifica di avere uno scopo lecito & rispetta le
norme sulla privacy applicabili. Nel dubbio, chiedi a un legale qualificato.

### Perché la mia esecuzione non ha restituito risultati?

Apri prima l'output gratuito `diagnostics`. Lo stato di un'esecuzione vuota ti
dice di controllare target & filtri. `stopCauses` assegna a ogni causa un
`nextAction` da seguire. Una località per cui X non offre tendenze non
restituisce righe. Attiva `listLocations` per vedere i nomi che X accetta.

### Posso estrarre lo storico delle tendenze di Twitter?

Sì, dal 2026-10-13 alle 02:20 UTC. Compila `at` per 1 momento passato, oppure
`from` & `to` per un intervallo. In una pianificazione, usa un intervallo come
`24h`. Ogni riga riporta `capturedAt`, il momento del suo elenco salvato.

### Posso usare l'API, le pianificazioni & le integrazioni?

Sì. Scegli tra 50 task pubblici o l'API REST di Xquik. La
[scheda API](https://apify.com/xquik/x-trends-scraper/api) ha esempi in Python,
JavaScript & cURL. Le
[pianificazioni](https://docs.apify.com/platform/schedules) di Apify avviano X
Trends Scraper di Xquik con un cron. Gli agenti usano
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Usa `latest`, a
meno che non ti serva una build precedente.

### Dove trovo assistenza?

Apri una issue nella pagina dell'Actor o scrivi a support@xquik.com con l'ID
dell'esecuzione. La diagnostica gratuita nel key-value store spiega le
esecuzioni vuote, parziali o interrotte.

### Posso avere una soluzione personalizzata?

Sì. Visita [xquik.com](https://xquik.com) o leggi la
[documentazione API](https://docs.xquik.com/introduction). Copre dashboard, API,
server MCP & webhook.
