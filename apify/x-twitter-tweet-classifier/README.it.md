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
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">Guarda come Framer usa gli scraper Xquik con Claude Code, Codex, Cursor e altri, dal minuto 6:07.</a>
</td></tr></table>

Xquik è il servizio di scraping X (Twitter) più veloce ed economico al mondo,
con i dati X più completi. X (Twitter) Tweet Classifier risponde con le tue
etichette, punteggi e domande sì/no su ogni tweet. Ogni altro Actor Apify
addebita i costi prima di filtrare o deduplicare. Xquik addebita solo i
risultati consegnati, unici e conformi ai filtri. I costi dell'IA sono inclusi
nel prezzo per tweet. Non paghi alcun provider di IA, non compri token & non
porti alcuna chiave.

Classifica i post X (Twitter) con le tue domande e mantieni i dati originali del
tweet. **X Tweet Classifier with AI Analysis** raccoglie i tweet corrispondenti,
poi risponde a 1-8 domande tipizzate per post: categorie per lo smistamento del
supporto clienti, punteggi per la prioritizzazione e probabilità per la
pertinenza. I preset coprono monitoraggio del brand, reclami, concorrenti,
intenzione d'acquisto, feedback sul prodotto, notizie, sentiment & sentiment di
mercato. Le domande personalizzate li sostituiscono.

- **Risposte tipizzate** con probabilità, confidenza e versioni delle domande.
- **Le tue domande, le tue categorie.** Ogni domanda accetta fino a 255
  categorie.
- **Record sorgente completi** per ogni campo esposto dal tweet.
- **Fatturazione basata sui filtri.** Paghi solo i tweet unici, conformi ai
  filtri & con un'analisi riuscita.

## Come classificare i tweet con domande personalizzate

1. Aggiungi URL di tweet, termini di ricerca, handle di profilo o ID di
   tweet.
2. Imposta `maxItems` e i filtri di estrazione necessari al tuo task.
3. Aggiungi le tue domande in `analysis.questions`, oppure scegli un preset
   con `analysis.preset`.
4. Esegui l'Actor e apri il dataset.

Le modalità supportate raccolgono tweet, ricerche, post di profilo, List,
risposte, citazioni e thread. L'estrazione autonoma di articoli e le liste
utenti non sono input per la classificazione.

```json
{
  "searchTerms": ["\"need a recommendation\" headphones lang:en"],
  "maxItems": 20,
  "analysis": {
    "questions": [
      {
        "id": "buying",
        "type": "probability",
        "version": "1",
        "instructions": "Does the author want to buy headphones?"
      }
    ],
    "targets": [{ "name": "headphones", "aliases": ["headset"] }],
    "context": "Exclude advertisements aimed at other buyers."
  }
}
```

### Domande e limiti

Fornisci 1-8 domande con ID, istruzioni e versioni univoci.

- `choice` usa 2-255 `categories` con nome, con descrizioni o valori null.
- `score` usa un array ordinato `levels` con almeno 2 descrizioni.
- `probability` restituisce un valore tra 0 e 1. I `criteria` opzionali
  contengono descrizioni per `yes` e `no`.

Preset: `brand`, `complaints`, `competitors`, `purchase_intent`,
`product_feedback`, `news`, `sentiment` e `market`. `maxContextBytes` è
impostato di default a 12.000 byte. Un limite più piccolo salta il contesto
troppo grande senza troncarlo. `concurrency` è impostato di default a 4 e
accetta valori da 1 a 16. Ogni definizione di domanda resta entro una soglia di
8.000 byte.

## Prezzi

I costi dell'IA sono inclusi nel prezzo per tweet. Non paghi alcun provider di IA, non compri token & non porti alcuna chiave.

Da $0.0003 per tweet analizzato con successo, senza costo iniziale. Il prezzo
include la raccolta. La soglia per l'analisi è di 8 domande, 8.000 byte per
definizione di domanda & 12.000 byte di contesto per tweet. I filtri di
estrazione e la deduplicazione vengono eseguiti prima dell'analisi, quindi le
righe filtrate o duplicate non vengono mai analizzate né addebitate. Le analisi
fallite o saltate e le righe diagnostiche non comportano alcun addebito sul
risultato. Apify fattura separatamente l'utilizzo della piattaforma. La scheda
Pricing lo mostra.

## Esempi di input e output

L'input sopra è pronto all'uso. Le righe di output sono simili a questa
(abbreviata):

```json
{
  "tweet": { "id": "2100344867507327087", "text": "…", "likeCount": 6409 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      {
        "questionId": "topic",
        "type": "choice",
        "value": "ai_safety",
        "confidence": 0.93
      },
      {
        "questionId": "disclosure",
        "type": "probability",
        "probability": 0.97
      },
      {
        "questionId": "specificity",
        "type": "score",
        "value": 2,
        "confidence": 0.88
      }
    ]
  }
}
```

Ogni risultato contiene `tweet` e `analysis`. Le risposte includono tipi,
versioni delle domande e le probabilità disponibili. Un'analisi fallita o
saltata mantiene il tweet raccolto con un elenco di risposte vuoto e un
`reason`. Le diagnostiche gratuite nel key-value store spiegano input non
validi, risultati mancanti e raccolte interrotte, e il report dell'esecuzione
separa le righe raccolte, le analisi addebitate e gli addebiti in sospeso.

## Riepilogo dell'esecuzione e risposte in formato piatto

Ogni esecuzione scrive un record `analysis-summary` nel proprio key-value store
e lo ripete sotto `results.analysisSummary` nel report dell'esecuzione. Conta le
righe analizzate, fallite e saltate, somma l'engagement e riassume ogni domanda.
Ogni domanda personalizzata ottiene il proprio blocco: conteggi e quote per
categoria per le domande a scelta, media e conteggi per livello per le domande a
punteggio, conteggi di sì e no per le domande sì/no. Il riepilogo arrotonda i
numeri a 4 decimali. Un'esecuzione vuota riporta conteggi zero & medie `null`.
Passa `analysis.preset` con `brand`, `complaints`, `purchase_intent`,
`product_feedback`, `competitors`, `sentiment`, `market` o `news` per eseguire
una lente integrata al posto di domande personalizzate. Il riepilogo riporta poi
quella lente per domanda. Ogni riga elenca `sourceDomains`, gli host a cui
rimanda, & i `cashtags` come `$NVDA` trovati nel testo. Con
`monitor.baselineDatasetId` impostato, il blocco `monitor` del riepilogo conta
gli stati di confronto & elenca fino a 50 righe modificate.

Ogni riga di risultato include anche `answers`, una mappa piatta dall'ID
della domanda alla categoria, al punteggio o alla probabilità scelti. La
vista dataset `Flat answers` e le esportazioni CSV o Excel mostrano una
colonna per domanda accanto al tweet, così i fogli di calcolo non richiedono
il parsing del JSON. Le righe fallite o saltate contengono una mappa vuota.

## Confronto con un'esecuzione precedente

Passa `monitor.baselineDatasetId`, l'ID del dataset di un'esecuzione precedente
completata con le stesse impostazioni di analisi. Ogni riga ottiene quindi un
oggetto `monitor`. Il suo stato è `first_run` senza baseline, `new_to_baseline`
per i tweet che l'esecuzione precedente non aveva, & `unchanged` o `changed` per
i tweet che aveva già. `changes` elenca ogni decisione per una qualsiasi delle
tue domande passata da `previous` a `current`. Le decisioni si confrontano per
categoria, livello di punteggio arrotondato, o sì/no a 0,5. Una decisione conta
come cambiata in tre casi. La categoria precedente scende sotto 0,4 di
probabilità. Un punteggio si sposta di almeno 0,6 livelli. Una probabilità sì/no
si colloca ad almeno 0,1 dalla soglia. Le oscillazioni minime tra esecuzioni
restano invariate. Le baseline sopra `maxBaselineRows` (predefinito 100.000) o
con impostazioni diverse interrompono l'esecuzione prima della raccolta con una
riga diagnostica.

## Esempi di task

Scegli tra 50 task pubblici. Ognuno parte da una ricerca reale in inglese con
un `maxItems` limitato, domande personalizzate già pronte e la vista dataset
generale. Modifica la ricerca o le domande prima di eseguire.

- [Triage customer support requests on X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/triage-support-requests-on-x)
- [Score sales leads from X posts](https://apify.com/xquik/x-twitter-tweet-classifier/examples/score-sales-leads-from-x-posts)
- [Detect service outage reports on X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/detect-outage-reports-on-x)
- [Classify hiring signals on X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-hiring-signals-on-x)
- [Tag product feature requests on X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/tag-feature-requests-on-x)
- [Classify app feedback like store reviews](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-app-store-style-feedback)
- [Detect scam and fraud warnings on X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/detect-scam-warnings-on-x)
- [Classify event attendance intent](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-event-attendance-intent)
- [Extract restaurant review signals](https://apify.com/xquik/x-twitter-tweet-classifier/examples/extract-restaurant-review-signals)
- [Separate crypto promotion from analysis](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-crypto-scam-vs-analysis)
- [Classify persuasive political posts](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-political-ad-style-posts)
- [Detect subscription churn risk signals](https://apify.com/xquik/x-twitter-tweet-classifier/examples/detect-churn-risk-signals)

I task rimanenti coprono altri flussi di lavoro nella pagina dell'Actor.

## Actor Xquik correlati

Ogni Actor Xquik condivide lo stesso motore di estrazione, la fatturazione
basata sui filtri e le diagnostiche. Scegli quello adatto ai dati di cui hai
bisogno.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): Raccoglie
  tweet da ricerche, timeline di profilo, List e ID di tweet con oltre 50
  filtri ed esportazioni piatte. Usalo quando ti servono dati sui tweet senza
  analisi. Da $0.00015 per riga.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): Raccoglie
  profili con i relativi post, risposte, media e Mi piace da handle, ID o
  URL. Usalo quando parti dagli account invece che dalle ricerche. Da
  $0.00015 per riga.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): Raccoglie
  risposte, commenti e intere conversazioni sotto i post con oltre 25 filtri.
  Usalo quando ti serve la discussione sotto i tweet. Da $0.00015 per riga.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper):
  Raccoglie risposte, citazioni, chi ha fatto retweet, chi ha messo Mi piace e
  thread per URL o ID di post in blocco. Usalo quando misuri chi ha
  interagito con i post. Da $0.00015 per riga.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper):
  Raccoglie follower, following, membri di List, iscritti e membri di
  Community come righe di profilo. Usalo quando ti servono liste di pubblico o
  membri. Da $0.00015 per profilo.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper):
  Cerca utenti per handle, bio e posizione con filtri per follower, verifica,
  età e posizione. Usalo quando costruisci liste di account dalla ricerca. Da
  $0.00015 per profilo.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): Raccoglie post,
  membri e follower di List da URL o ID di List. Usalo quando una List
  curata definisce le tue fonti. Da $0.00015 per riga.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper):
  Raccoglie informazioni, post, ricerche, membri e moderatori di Community.
  Usalo quando le tue fonti sono X Communities. Da $0.00015 per riga.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): Raccoglie
  tendenze in tempo reale per posizione con rank, volume, query e WOEID.
  Usalo quando monitori cosa è di tendenza e dove. Da $0.00015 per tendenza.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): Raccoglie
  gli X Article in formato lungo come Markdown e testo con copertine, autori,
  date e metriche. Usalo quando ti servono i corpi degli articoli, non i
  tweet. Da $0.00015 per articolo.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): Estrae o
  archivia foto, video e GIF da post o profili con opzioni MP4 e metadati.
  Usalo quando ti servono i file media stessi. Da $0.00015 per riga media.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  Monitora le menzioni del brand con pertinenza, sentiment e risposte sulla
  customer experience generate dall'IA e confronta le esecuzioni. Usalo
  quando segui un brand nel tempo. Da $0.0003 per tweet analizzato.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  Etichetta atteggiamento, intensità e probabilità di sarcasmo per ogni tweet
  con l'IA. Usalo quando ti serve un sentiment generale su qualsiasi
  argomento. Da $0.0003 per tweet analizzato.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  Etichetta posizione rialzista, ribassista, neutra o mista, tipo di
  contenuto, convinzione e pertinenza dell'asset con l'IA. Usalo quando segui
  azioni, criptovalute o discussioni di trading. Da $0.0003 per tweet
  analizzato.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  Etichetta i post di notizie per formato, attribuzione della fonte e
  pertinenza dell'argomento con l'IA. Usalo quando separi il giornalismo dal
  commento. Da $0.0003 per tweet analizzato.

## FAQ e supporto

### Le versioni delle domande contano?

Sì. Ogni risposta memorizza la `version` che assegni alla sua domanda. Quando
affini le domande nel tempo, puoi capire quale formulazione ha prodotto un
risultato.

### Perché una riga è tornata con `analysis.status` su `failed` o `skipped`?

L'Actor ha raccolto & consegnato il tweet, ma l'analisi IA non si è completata.
`analysis.reason` indica la causa, come `context_limit` quando il tweet e il suo
contesto superano `maxContextBytes`, oppure `service_unavailable` dopo i
tentativi. Queste righe non comportano alcun addebito sul risultato. Aumenta
`maxContextBytes` (fino a 12.000) o riesegui gli ID interessati.

### L'analisi verifica i fatti?

No. Le risposte descrivono ciò che il post esprime & come il post lo formula. Le
probabilità esprimono la fiducia del modello, non la verità. Rivedi le
classificazioni importanti confrontandole con il tweet originale, che ogni riga
conserva.

### Quali lingue funzionano?

L'estrazione supporta ogni lingua servita da X. Validiamo l'analisi prima sugli
scenari clienti in inglese. Le altre lingue supportate restituiscono risposte
con la stessa struttura. Le categorie `unclear` & le probabilità mostrano
l'incertezza in ogni lingua.

### Come limito i costi?

Filtri, deduplicazione e `maxItems` vengono eseguiti prima dell'analisi, quindi
l'Actor analizza & addebita solo i tweet unici e conformi ai filtri. Usa
operatori di ricerca precisi, limiti di data e soglie minime di engagement, e
inizia con un `maxItems` piccolo per verificare la qualità delle risposte prima
di un'esecuzione ampia.

### Dove ricevo assistenza?

Apri un problema nella pagina dell'Actor o contatta support@xquik.com con
l'ID dell'esecuzione. Le diagnostiche gratuite nel key-value store spiegano
le esecuzioni vuote, parziali o interrotte.

Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.
"Twitter" e "X" sono marchi di X Corp.
