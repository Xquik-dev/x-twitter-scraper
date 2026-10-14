[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · **Italiano**

[![Framer collega Xquik MCP agli agenti di coding](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Guarda come Framer usa gli scraper Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
con Claude Code, Codex, Cursor & altro, da 6:07.

Xquik è il servizio di scraping X (Twitter) più veloce & economico al mondo, con
i dati X più completi. X (Twitter) News Monitor di Xquik ordina i post di
notizie per formato, attribuzione della fonte & rilevanza. La maggior parte
degli altri Actor Apify fa pagare prima di filtrare o deduplicare. Xquik fa
pagare solo i risultati consegnati, unici e conformi ai filtri. I costi AI sono
inclusi nel prezzo per post. Non ti servono account AI, token o chiavi.

Ordina per tipo i post di notizie su X (Twitter) & conserva i dati originali del
post. **X (Twitter) News Monitor with AI Analysis** di Xquik raccoglie i post
sui tuoi argomenti. A ogni post aggiunge con AI una risposta su formato,
attribuzione della fonte & rilevanza. Separa la cronaca dal commento & dalla
speculazione. Verifica se un post nomina una fonte o la linka. Tieni solo i post
sulle organizzazioni, le persone o gli argomenti che segui.

- **Formato.** Distingue cronaca, commento, speculazione, promozione & satira.
- **Attribuzione.** Mostra se un'affermazione nomina una fonte, la linka, è di
  prima mano o non ne ha.
- **Rilevanza.** Distingue i post sui tuoi target dagli omonimi.
- **Record di origine completi.** Ogni riga conserva tutti i campi che il post
  rende disponibili, inclusi gli articoli linkati quando ci sono.

> Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.
> "Twitter" e "X" sono marchi di X Corp.

## Come classificare i post di notizie su X

Non usi ancora Apify?
[Crea prima un account gratuito](https://console.apify.com/sign-up?fpr=xquik).
Il piano gratuito non richiede carta di credito & offre $5 da spendere ogni
mese. A $0.0003 per post analizzato, $5 coprono fino a 16.000 post analizzati,
senza contare l'uso della piattaforma. Poi torna qui & premi Try for free.

1. Aggiungi termini di ricerca come `Nvidia earnings lang:en -filter:retweets`,
   nomi utente di account di notizie o ID dei post.
2. Imposta `maxItems` & filtri di estrazione come limiti di data, `filter:links`
   o un minimo di repost.
3. Inserisci in `analysis.targets` le organizzazioni, le persone o gli argomenti
   che segui, con i loro alias. Restringi l'argomento in `analysis.context`.
4. Avvia l'esecuzione & apri il dataset.

```json
{
  "searchTerms": ["Nvidia earnings lang:en -filter:retweets"],
  "maxItems": 300,
  "analysis": {
    "targets": [{ "name": "Nvidia", "aliases": ["NVDA", "Jensen Huang"] }],
    "context": "Financial & product news about the chip maker."
  }
}
```

### Cosa risponde l'Actor

- Il formato è cronaca, commento, speculazione, promozione, satira, non
  pertinente o poco chiaro.
- L'attribuzione è nominata, linkata, di prima mano, assente o poco chiara.
- La rilevanza è la probabilità che l'evento riportato riguardi i tuoi target.

La classificazione non verifica i fatti. Nominare una fonte non la rende
credibile. L'attribuzione descrive ciò che il post presenta.

## Analizza il tuo testo

Incolla in `texts` le tue bozze, risposte, recensioni o note. X (Twitter) News
Monitor di Xquik le analizza. Non recupera nulla da X.

```json
{
  "texts": [
    "Central bank holds rates at 4.5%, signals 2 cuts next year.",
    "I was at the port this morning. Cranes are idle & trucks are queued."
  ]
}
```

- Ogni testo diventa 1 riga con le stesse risposte `analysis` di un post.
- `tweet.id` vale `text:1`, `text:2` & così via, & `tweet.type` vale `text`.
- Ogni testo analizzato costa gli stessi $0.0003 di un post analizzato.
- Con `texts` impostato, l'esecuzione analizza solo quei testi. Avvia a parte i
  target di X.

## Quanto costa classificare i post di notizie su X?

X (Twitter) News Monitor di Xquik costa da $0.0003 per post analizzato. Non c'è
costo di avvio. Il prezzo include la raccolta & i costi AI. Non ti servono
account AI, token o chiavi. Il prezzo copre fino a 8 domande & 64.000 byte di
contesto per post. Ogni definizione di domanda può usare fino a 8.000 byte.

Per volumi maggiori,
[scegli un piano Apify](https://apify.com/pricing?fpr=xquik) con più uso
prepagato.

I filtri di estrazione & la deduplicazione agiscono prima dell'analisi. Non
paghi mai le righe filtrate o duplicate. Le analisi fallite, le analisi saltate
& le righe di diagnostica non hanno addebiti sul risultato. Apify fattura a
parte l'uso della piattaforma per calcolo, storage & trasferimento, alle tariffe
del tuo piano. La scheda Pricing lo mostra.

## Esempi di input & output

L'input qui sopra è pronto da copiare. Una riga di output abbreviata ha questo
aspetto.

```json
{
  "tweet": { "id": "2100673144985993441", "text": "…", "retweetCount": 40 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      {
        "questionId": "format",
        "type": "choice",
        "value": "reporting",
        "confidence": 0.9
      },
      {
        "questionId": "attribution",
        "type": "choice",
        "value": "named",
        "confidence": 0.84
      },
      { "questionId": "relevance", "type": "probability", "probability": 0.98 }
    ]
  }
}
```

Ogni risultato contiene `tweet` & `analysis`. Le risposte includono tipi,
versioni delle domande & probabilità disponibili. Una riga con un'analisi
fallita o saltata conserva il post raccolto & un `reason`. Il suo elenco di
risposte è vuoto.

Quando un post linka un articolo di X, l'analisi recupera anche quell'articolo.
Aggiunge titolo, anteprima & blocchi di testo come contesto.
`analysis.contextAvailability.article` riporta `text_blocks`, `summary` o
`not_supplied`. `summary` indica solo titolo & anteprima.

La diagnostica gratuita nel key-value store spiega input non validi, risultati
mancanti & raccolte interrotte. Il report dell'esecuzione separa righe raccolte,
analisi addebitate & addebiti in sospeso.

## Riepilogo dell'esecuzione & risposte piatte

Un'esecuzione scrive un record `analysis-summary` nel suo key-value store in 3
casi.

- Incontra un problema o è grande.
- Il suo confronto trova un post cambiato, nuovo o non confrontabile.
- Ha `alwaysSaveRunRecords` attivo.

Le altre esecuzioni saltano il record, compresa la prima esecuzione di una
serie. Il loro stato nomina la risposta principale, come
`Top format is reporting in 4 of 5 results.` Un confronto senza cambiamenti
riporta `No change since the earlier run.` Anche un'esecuzione che incontra un
problema o è grande scrive `run-report`. Lo stesso vale per un'esecuzione con
`alwaysSaveRunRecords` attivo. `run-report` ripete il riepilogo sotto
`results.analysisSummary`.

Il riepilogo conta le righe analizzate, fallite & saltate. Somma l'engagement &
riassume ogni domanda.

- La suddivisione `format` separa la cronaca da commento, speculazione,
  promozione & satira.
- `attribution` conta le fonti nominate, linkate, di prima mano & assenti.
- `relevance` conta i post su ogni target.
- `targets` indica le menzioni per target. Il `top` di ogni target elenca i suoi
  post con più engagement per ogni categoria di risposta.
- Ogni voce di `targets` ha `choices`, la suddivisione per formato &
  attribuzione dei post su quel target.
- `sourceDomains` conta i domini linkati in tutta l'esecuzione.
- `monitor.changedRows` elenca i post con decisioni cambiate rispetto alla
  baseline.
- Ogni riga elenca `sourceDomains`, gli hostname a cui rimanda.
- Ogni riga elenca i `cashtags` presenti nel testo, come `$NVDA`.
- Con `monitor.baselineDatasetId` impostato, il blocco `monitor` del riepilogo
  conta gli stati del confronto. Elenca fino a 50 righe cambiate.

Ogni riga di risultato riporta anche `answers`, una mappa piatta con l'ID della
domanda come chiave. Ogni valore è la categoria, il punteggio o la probabilità
scelti. La vista `Flat answers` del dataset & gli export CSV o Excel mostrano 1
colonna per domanda. Le colonne stanno accanto al post, quindi i fogli di
calcolo non devono leggere JSON. Le righe fallite & saltate riportano una mappa
vuota.

## Confronta con un'esecuzione precedente

Passa `monitor.baselineDatasetId`, l'ID del dataset di un'esecuzione precedente
completata con le stesse impostazioni di analisi. Il confronto legge le righe di
quell'esecuzione. Funziona anche se quell'esecuzione ha saltato il riepilogo.
Ogni riga riceve poi un oggetto `monitor`. Il suo stato assume questi valori.

- `first_run` senza baseline.
- `new_to_baseline` per i post che l'esecuzione precedente non aveva.
- `unchanged` o `changed` per i post che aveva.

`changes` elenca ogni decisione di formato, attribuzione o rilevanza passata da
`previous` a `current`. Le decisioni si confrontano per categoria, livello di
punteggio arrotondato o sì/no a 0,5. Una decisione conta come cambiata solo
quando si sposta in modo netto. I quasi pareggi tra esecuzioni restano
`unchanged`.

Una baseline sopra `maxBaselineRows`, o con impostazioni diverse, ferma
l'esecuzione prima della raccolta. L'esecuzione scrive poi una riga di
diagnostica. `maxBaselineRows` vale 100.000 di default.

## Esempi di task

Scegli tra 50 task pubblici. Ognuno parte da una ricerca reale in inglese & da
un `maxItems` limitato. Include target già pronti, contesto & la vista overview
del dataset. Modifica la ricerca o i target prima di avviarlo.

- [Classifica su X i post di notizie su Nvidia](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-nvidia-news-posts-on-x)
- [Classifica i post di notizie con articoli di X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-x-article-news-posts)
- [Classifica su X i post di notizie su OpenAI](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-openai-news-posts-on-x)
- [Classifica su X i post di notizie su Apple](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-apple-news-posts-on-x)
- [Classifica su X i post di notizie su Tesla](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-tesla-news-posts-on-x)
- [Classifica su X i post di notizie su SpaceX](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-spacex-news-posts-on-x)
- [Classifica su X i post di notizie su Boeing](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-boeing-news-posts-on-x)
- [Classifica su X i post di notizie su Pfizer](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-pfizer-news-posts-on-x)
- [Classifica su X i post di notizie su Moderna](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-moderna-news-posts-on-x)
- [Classifica su X i post di notizie su ExxonMobil](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-exxon-news-posts-on-x)
- [Classifica su X i post di notizie sulla Federal Reserve](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-federal-reserve-news-posts-on-x)
- [Classifica su X i post di notizie sulla Banca centrale europea](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-european-central-bank-news-posts-on-x)
- [Classifica su X i post di notizie sulla Bank of England](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-bank-of-england-news-posts-on-x)

Gli altri task, nella pagina dell'Actor, coprono altri brand, argomenti &
mercati.

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
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)
  risponde con AI alle tue domande di categoria, punteggio & sì/no su ogni post.
  Usalo quando le analisi preimpostate non si adattano alle tue etichette. Da
  $0.0003 per post analizzato.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)
  stima un Viral Score da 0 a 100 & un verdetto per ogni post da 8 risposte AI
  sui suoi tratti. Usalo quando studi perché i post si diffondono o falliscono.
  Da $0.0003 per post analizzato.

## FAQ & supporto

Le risposte alle domande più comuni, poi dove trovare assistenza.

### Serve un account AI, una chiave API X o il login?

No. X (Twitter) News Monitor di Xquik include i costi AI nel prezzo. Non ti
servono account AI, token o chiavi. Non ti servono nemmeno chiave API X, login o
credenziali.

### Posso usare le mie domande?

Sì. Le `analysis.questions` personalizzate sostituiscono quelle predefinite.
Invia da 1 a 8 domande `choice`, `score` o `probability`. Le domande a scelta
accettano da 2 a 255 categorie. Le domande a punteggio richiedono almeno 2
livelli ordinati. Usa le stesse domande nelle esecuzioni che vuoi confrontare.

### Perché una riga è tornata con un'analisi fallita o saltata?

`analysis.status` vale `failed` o `skipped`. L'Actor ha raccolto & consegnato il
post, ma l'analisi AI non si è completata. `analysis.reason` indica la causa.
`context_limit` significa che il tuo contesto & i tuoi target non lasciano
spazio al post. `service_unavailable` significa che il servizio di analisi era
momentaneamente non disponibile. Queste righe non hanno addebiti sul risultato.
Accorcia `analysis.context` o esegui di nuovo gli ID interessati.

L'Actor analizza comunque un post più lungo di `maxContextBytes`. Taglia prima i
post citati & quelli a cui risponde, poi il post stesso.
`analysis.contextAvailability.postText` vale allora `truncated`. Alza
`maxContextBytes` fino a 64.000 per conservare più testo.

### L'analisi verifica i fatti?

No. Le risposte descrivono cosa esprime il post & come lo presenta. Le
probabilità esprimono la fiducia dell'AI, non la verità. Controlla le
classificazioni importanti sul post originale, che ogni riga conserva.

### Quali lingue funzionano?

L'estrazione supporta ogni lingua servita da X. Validiamo l'analisi prima sugli
scenari dei clienti in inglese. Le altre lingue supportate restituiscono
risposte con la stessa struttura. Le categorie `unclear` & le probabilità
mostrano l'incertezza in ogni lingua.

### Come limito il costo?

Filtri, deduplicazione & `maxItems` agiscono prima dell'analisi. Paghi solo i
post unici e conformi ai filtri. Usa operatori di ricerca precisi, limiti di
data & soglie di engagement. Parti con un `maxItems` piccolo per verificare la
qualità delle risposte prima di un'esecuzione grande.

### È legale analizzare i dati di X?

L'Actor raccoglie campi pubblici di X. I risultati possono contenere dati
personali. Verifica di avere uno scopo lecito & rispetta le norme sulla privacy
applicabili. Nel dubbio, chiedi a un legale qualificato.

### Posso usare l'API, le pianificazioni & le integrazioni?

Sì. Consulta la [scheda API](https://apify.com/xquik/x-twitter-news-monitor/api)
per esempi in Python, JavaScript & cURL. Usa le
[pianificazioni](https://docs.apify.com/platform/schedules) di Apify per le
esecuzioni ricorrenti. Passa l'ID del dataset precedente come
`monitor.baselineDatasetId` per vedere cosa è cambiato. Le integrazioni di Apify
collegano le esecuzioni anche a webhook, Make, Zapier, n8n & Google Sheets.

### Dove trovo assistenza?

Apri una issue nella
[scheda Issues](https://apify.com/xquik/x-twitter-news-monitor/issues) con l'ID
dell'esecuzione. La diagnostica gratuita nel key-value store spiega le
esecuzioni che richiedono attenzione. Un'esecuzione che non riceve nessuna riga
ne spiega il motivo nel suo stato.
