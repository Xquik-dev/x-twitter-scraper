[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · **Italiano**

[![Framer collega Xquik MCP agli agenti di coding](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Guarda come Framer usa gli scraper Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
con Claude Code, Codex, Cursor & altro, da 6:07.

Xquik è il servizio di scraping X (Twitter) più veloce & economico al mondo, con
i dati X più completi. X (Twitter) Post Tracker di Xquik registra i conteggi
pubblici dei post che scegli. Non richiede cookie di X né login. Eseguilo di
nuovo più tardi, & ogni riga mostra cosa è cambiato. La maggior parte degli
altri Actor Apify fa pagare prima di filtrare o deduplicare. Xquik fa pagare
solo i risultati consegnati e unici.

Incolla URL di post o ID di tweet. Ogni esecuzione salva 1 riga di rilevazione
per post. Una riga contiene visualizzazioni, Mi piace, repost, risposte,
citazioni & segnalibri in quel momento. Contiene anche la variazione dalla
rilevazione precedente & dalla prima. Paghi **$0.00015 per rilevazione
consegnata**, & Apify fattura a parte l'uso della piattaforma.

> Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.
> "Twitter" e "X" sono marchi di X Corp.

## Perché usare X (Twitter) Post Tracker?

- **La crescita in ogni riga.** Ogni rilevazione contiene la variazione
  dall'ultima & dalla prima esecuzione.
- **Uno storico senza database.** Passa il dataset di un'esecuzione precedente.
  La prima rilevazione passa da un'esecuzione all'altra.
- **Incolla i post in qualsiasi forma.** Mescola URL di post & ID di tweet in 1
  lista.
- **Export pronti per i fogli di calcolo.** Dai forma alle colonne con `fields`
  & `flatten`. Esporta in JSON, CSV, Excel, XML o RSS.

## Cosa ottieni

### Risultati completi

- Ogni risultato contiene i dati più completi che X ha a riguardo.

### Righe accurate

- Un post risulta mancante solo quando non esiste più.
- Ogni ID in una riga resta esatto.
- Le righe contengono solo dati pubblici.

### Dati aggiornati

- Le letture continuano a funzionare quando X introduce modifiche.

### Velocità

- Una risposta lenta di X non blocca la tua richiesta.
- Gli Actor leggono molti handle, post & query insieme.
- Le letture finiscono appena arrivano le loro righe.
- Le chiamate agli Actor bloccate si riprendono da sole.

### Fatturazione equa

- Un input non valido non costa nulla, perché viene rifiutato prima di qualsiasi
  lettura.
- Gli Actor fanno pagare solo righe consegnate, uniche & che corrispondono ai
  filtri.
- Un'esecuzione riavviata non addebita mai 2 volte.
- Un tetto di spesa diventa un tetto di righe, & la diagnostica viene comunque
  scritta.
- Le esecuzioni piccole finiscono con un consiglio che riduce i costi.

### Affidabilità

- Un errore occasionale di X non fa fallire la tua richiesta.
- Una scadenza restituisce le righe già trovate, con la diagnostica.
- Gli Actor superano brevi interruzioni di Xquik.
- Le esecuzioni degli Actor sopravvivono ai riavvii senza ripetizioni.
- Una riga difettosa non affonda un intero lotto.
- Le esecuzioni fermate conservano le loro righe & il loro report.
- Un'esecuzione che non riesce a partire spiega comunque il motivo.
- I problemi dal lato di X vengono risolti prima di raggiungere le tue letture.
- L'assistenza può vedere esattamente cosa ha restituito una richiesta o
  un'esecuzione.

### Pensato per gli agenti

- Gli Actor accettano input scritti per altri Actor.
- Ogni esecuzione dice perché è terminata & se conviene riprovare.

### Dati dettagliati

- Ogni riga di rilevazione contiene la variazione di ogni conteggio rispetto a un'esecuzione precedente.

### Controlli di qualità

- Ogni campo che X mostra viene fornito, escluso di proposito o dimostrato
  assente.
- Ogni lettura viene verificata dal vivo ogni ora.

## Quali dati può estrarre X (Twitter) Post Tracker?

- Visualizzazioni, Mi piace, repost, risposte, citazioni & segnalibri di ogni
  post.
- L'ora di ogni rilevazione, in `capturedAt`.
- La prima rilevazione di ogni post, con ora & conteggi.
- La rilevazione precedente, dal dataset dell'esecuzione precedente.
- La variazione di ogni conteggio dalla rilevazione precedente.
- La variazione di ogni conteggio dalla prima rilevazione.
- Il testo del post, la data, il link & l'autore.
- Molti post in 1 esecuzione, consegnati nell'ordine dell'input.
- Export JSON, CSV, Excel, XML & RSS tramite i dataset di Apify.

## Come tracciare le metriche dei post di X nel tempo

Sei nuovo su Apify? Prima
[crea un account gratuito](https://console.apify.com/sign-up?fpr=xquik). Il
piano gratuito non richiede carta di credito & ti dà $5 da spendere ogni mese. A
$0.00015 per rilevazione, $5 bastano per fino a 33.000 rilevazioni prima
dell'uso della piattaforma. Poi torna qui & premi Try for free.

1. Apri X (Twitter) Post Tracker di Xquik in Apify Console.
2. Incolla URL di post o ID di tweet in `tweetIds`.
3. Lascia vuoto `previousDatasetId` alla prima esecuzione, poi fai clic su
   Start.
4. All'esecuzione successiva, scegli il dataset della prima esecuzione in
   `previousDatasetId`.
5. Scarica il dataset in JSON, CSV o Excel, o usa l'API di Apify.

In nessun passaggio inserisci cookie di X, dati di login o una chiave API.

## Input

`tweetIds` accetta ID di tweet & URL di post, in qualsiasi combinazione.

```json
{
  "tweetIds": [
    "2102882545427714266",
    "https://x.com/OpenAI/status/2082577277246972300",
    "20"
  ],
  "maxItems": 1000
}
```

`startUrls` accetta gli stessi URL di post. Indica ognuno come semplice stringa
o come oggetto `{ "url": "..." }`.

`previousDatasetId` indica il dataset di un'esecuzione precedente di questo
Actor. Il modulo ti permette di sceglierlo tra i tuoi dataset. L'Actor legge
soltanto quel dataset. Lascialo vuoto alla prima esecuzione.

```json
{
  "tweetIds": ["2102882545427714266", "20"],
  "previousDatasetId": "<dataset ID of an earlier run>"
}
```

Un post che l'input nomina 2 volte riceve 1 riga. `maxItems` tiene i primi post
dell'input. Le esecuzioni piccole senza problemi saltano `run-report` & fanno
risparmiare uso di Apify. Attiva `alwaysSaveRunRecords` per scriverlo a ogni
esecuzione.

## Eseguilo con una pianificazione

Le [pianificazioni](https://docs.apify.com/platform/schedules) di Apify avviano
l'Actor con un cron, per esempio ogni ora.

1. Esegui l'Actor una volta con i tuoi post & senza `previousDatasetId`.
2. Crea una pianificazione per l'Actor in Apify Console.
3. Dai alla pianificazione lo stesso input `tweetIds`.
4. Imposta `previousDatasetId` sul dataset della prima esecuzione.

Ogni esecuzione pianificata confronta poi i suoi conteggi con quel dataset. Per
confrontare ogni esecuzione con quella prima, avvia le esecuzioni con l'API di
Apify. Passa il `defaultDatasetId` dell'ultima esecuzione come
`previousDatasetId`. La prima rilevazione continua a passare avanti, quindi
`changeSinceFirst` continua a contare dal giorno 1. Un post assente dall'ultima
esecuzione avvia un nuovo `firstSnapshot` in quella successiva.

Se un'esecuzione non salva rilevazioni, passa il dataset dell'esecuzione precedente.

## Output

Ogni post è 1 riga del dataset per esecuzione. Una riga inizia con `postId`,
`url`, `text`, `createdAt` & `author`. Poi vengono `capturedAt` & i 6 conteggi,
`viewCount`, `likeCount`, `retweetCount`, `replyCount`, `quoteCount` &
`bookmarkCount`. Seguono `firstSnapshot`, `previousSnapshot`,
`changeSincePrevious` & `changeSinceFirst`. Un conteggio pari a 0 può
significare che X non l'ha riportato.

Gli esempi usano valori di prova. I risultati riflettono dati in tempo reale. La
riga di una seconda esecuzione si presenta così.

```json
{
  "postId": "2102882545427714266",
  "url": "https://x.com/NASA/status/2102882545427714266",
  "text": "Welcome to the Artemis Accords, Croatia",
  "createdAt": "Wed Sep 23 22:07:23 +0000 2026",
  "author": { "id": "11348282", "username": "NASA", "name": "NASA" },
  "capturedAt": "2026-10-28T09:00:00.000Z",
  "viewCount": 1291231,
  "likeCount": 9043,
  "retweetCount": 772,
  "replyCount": 207,
  "quoteCount": 100,
  "bookmarkCount": 661,
  "firstSnapshot": {
    "capturedAt": "2026-10-25T09:00:00.000Z",
    "viewCount": 500000,
    "likeCount": 5000,
    "retweetCount": 500,
    "replyCount": 150,
    "quoteCount": 50,
    "bookmarkCount": 400
  },
  "previousSnapshot": {
    "capturedAt": "2026-10-27T09:00:00.000Z",
    "viewCount": 1200000,
    "likeCount": 9000,
    "retweetCount": 770,
    "replyCount": 205,
    "quoteCount": 99,
    "bookmarkCount": 640
  },
  "changeSincePrevious": {
    "viewCount": 91231,
    "likeCount": 43,
    "retweetCount": 2,
    "replyCount": 2,
    "quoteCount": 1,
    "bookmarkCount": 21
  },
  "changeSinceFirst": {
    "viewCount": 791231,
    "likeCount": 4043,
    "retweetCount": 272,
    "replyCount": 57,
    "quoteCount": 50,
    "bookmarkCount": 261
  },
  "resultType": "snapshot",
  "sourceTarget": "2102882545427714266"
}
```

Una riga distingue 3 casi.

| La riga contiene                              | Significato                                         |
| --------------------------------------------- | --------------------------------------------------- |
| `previousSnapshot: null`                      | Il dataset precedente non ha righe per questo post. |
| `previousSnapshot` con conteggi               | La riga si confronta con quella rilevazione.        |
| Un conteggio `null` in un campo di variazione | Alla riga precedente manca quel conteggio.          |

Alla prima esecuzione, `firstSnapshot` contiene l'ora & i conteggi della riga
stessa. Entrambi i campi di variazione restano `null` fino a un'esecuzione
successiva.

## Colonne di output

8 input danno forma a ogni riga dopo che l'esecuzione l'ha letta. Non eseguono
codice & non cambiano il prezzo.

| Campo               | Cosa fa                                                                                       |
| ------------------- | --------------------------------------------------------------------------------------------- |
| `fields`            | Tiene solo questi campi, nell'ordine & con la grafia che scrivi                               |
| `omitFields`        | Toglie questi campi & tiene il resto                                                          |
| `renameFields`      | Sposta un campo in una colonna con un nuovo nome                                              |
| `flatten`           | Trasforma ogni oggetto annidato in colonne di primo livello                                   |
| `fillMissingFields` | Riempie con `null` un campo tenuto che manca in una riga. Attivo per impostazione predefinita |
| `joinFields`        | Trasforma ognuna di queste liste in 1 valore di testo                                         |
| `joinSeparator`     | Testo tra gli elementi uniti. Il predefinito è una virgola & uno spazio                       |
| `constantFields`    | Aggiunge una colonna con lo stesso testo in ogni riga                                         |

- Usa un punto per un campo dentro un oggetto, come
  `changeSinceFirst.viewCount`.
- Appiattisci `changeSincePrevious` per avere 1 colonna per conteggio.
- Un nome di campo sbagliato ferma l'esecuzione prima della lettura & non
  addebita nulla.
- L'esecuzione ignora una funzione map o un filtro jq scritti per un altro
  Actor.

## Quanto costa tracciare i post di X?

Con ogni piano Apify, una rilevazione consegnata costa $0.00015. Apify fattura a
parte il tuo uso della piattaforma.

Per volumi maggiori,
[scegli un piano Apify](https://apify.com/pricing?fpr=xquik) con più uso
prepagato.

- Un addebito per ogni riga di rilevazione consegnata. La diagnostica è gratuita
  in `diagnostics`.
- Nessuna tariffa di avvio & nessuna tariffa per leggere il dataset precedente.
- L'esecuzione rimuove i post duplicati prima della fatturazione.
- Un post che X non ha non aggiunge righe né addebiti.
- Un dataset che l'esecuzione non riesce a leggere la ferma & non addebita
  nulla.
- Le impostazioni di addebito totale massimo di Apify limitano le righe
  consegnate.

## Limiti & recupero

X (Twitter) Post Tracker di Xquik legge molti post in 1 esecuzione. Le righe
consegnate & i progressi sopravvivono a un riavvio di Apify. L'Actor non
aggiunge un proprio limite di tempo. Rispetta qualsiasi timeout di Apify che
imposti.

Lo stato dell'esecuzione conta i post per cui X non ha corrispondenze. Un
dataset precedente può contenere fino a 100.000 righe. Un dataset che
l'esecuzione non riesce a leggere la ferma prima di leggere qualsiasi post. Lo
stato ti chiede allora di scegliere il dataset di un'esecuzione precedente. Le
esecuzioni interrotte scrivono una diagnostica `partial` gratuita. Leggi
`nextAction` prima di riprovare.

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
  follower, following, membri delle liste, abbonati & membri delle community
  come righe di profilo. Usalo quando ti servono elenchi di pubblico o di
  membri. Da $0.00015 per profilo.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper) cerca
  utenti per nome utente, bio & posizione con filtri su follower, verifica, età
  & posizione. Usalo quando costruisci elenchi di account dalla ricerca. Da
  $0.00015 per profilo.
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper)
  verifica dove hanno sede gli account con l'etichetta "Posizione account" di X,
  il modo in cui si sono collegati a X & i cambi di nome utente. Usalo quando
  vuoi verificare dove hanno sede gli account. Da $0.00015 per account.
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
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper) estrae le
  tendenze in tempo reale per località con posizione in classifica, volume,
  query & WOEID. Usalo quando segui cosa è di tendenza e dove. Da $0.00015 per
  tendenza.
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper) estrae le offerte di
  lavoro di X per parola chiave, luogo, modalità di lavoro, livello di
  esperienza & azienda, con stipendi & link di candidatura. Usalo quando
  raccogli le offerte di lavoro pubblicate su X. Da $0.00015 per offerta.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper) estrae gli
  articoli lunghi di X come Markdown & testo, con copertine, autori, date &
  metriche. Usalo quando ti serve il corpo degli articoli, non i post. Da
  $0.00015 per articolo.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader) estrae o
  archivia foto, video & GIF da post o profili con opzioni MP4 & metadati. Usalo
  quando ti servono i file multimediali veri e propri. Da $0.00015 per riga di
  media.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring)
  monitora le menzioni del brand con rilevanza, sentiment & risposte sulla
  customer experience generate con AI & confronta le esecuzioni. Usalo quando
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
- [X (Twitter) Monitor](https://apify.com/xquik/x-twitter-monitor) rileva ogni
  nuovo tweet, risposta, citazione, repost & cambio di profilo degli account, di
  solito in meno di un secondo da quando X lo mostra, più i tweet per parola
  chiave & i follow. Usalo quando ti servono avvisi appena X mostra un tweet. Da
  $0.0045 per monitor-hour.

## FAQ

Le risposte alle domande più comuni, poi dove trovare assistenza.

### Servono cookie di X, una chiave API o il login?

No. X (Twitter) Post Tracker di Xquik non richiede cookie di X, chiave API,
login o credenziali.

### Quale dataset scelgo in `previousDatasetId`?

Scegli il dataset di un'esecuzione precedente di questo Actor. La sua riga più
recente per ogni post diventa `previousSnapshot`. L'Actor salta le righe di
altri Actor & la diagnostica.

### La prima rilevazione resta valida dopo molte esecuzioni?

Sì. Ogni riga porta `firstSnapshot`. Concatena ogni esecuzione a quella prima, &
la prima rilevazione resta la stessa.

### Posso tracciare un post che qualcuno ha eliminato?

No. Un post che X non ha non aggiunge righe né addebiti. Lo stato
dell'esecuzione lo conta.

### È legale tracciare i post di X?

X (Twitter) Post Tracker di Xquik richiede campi pubblici di X. I risultati
possono contenere dati personali. Verifica di avere uno scopo lecito & rispetta
le norme sulla privacy applicabili. Nel dubbio, chiedi a un legale qualificato.

### Posso usare l'API, le pianificazioni & le integrazioni?

Sì. Usa l'API di Apify o l'API REST di Xquik. La
[scheda API](https://apify.com/xquik/x-twitter-post-tracker/api) ha esempi in
Python, JavaScript & cURL. Le
[pianificazioni](https://docs.apify.com/platform/schedules) di Apify eseguono X
Post Tracker di Xquik con un cron. Gli agenti usano
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Usa `latest`, a
meno che non ti serva una build precedente.

### Dove trovo assistenza?

Apri una issue nella
[scheda Issues](https://apify.com/xquik/x-twitter-post-tracker/issues) con l'ID
dell'esecuzione. La diagnostica gratuita nel key-value store spiega le
esecuzioni che richiedono attenzione.

### Posso avere una soluzione personalizzata?

Sì. Descrivi ciò che ti serve nella
[scheda Issues](https://apify.com/xquik/x-twitter-post-tracker/issues). Xquik
offre anche una dashboard, un'API REST, un server MCP & webhook. Trovi il sito
web di Xquik sul suo [profilo Apify](https://apify.com/xquik).
