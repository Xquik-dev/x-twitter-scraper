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

Xquik è il servizio di scraping per X (Twitter) più veloce ed economico al
mondo, con i dati X più completi. X (Twitter) Brand Monitoring monitora le
menzioni del tuo brand con rilevanza, sentiment e risposte sull'esperienza
cliente. Ogni altro Actor Apify addebita i costi prima di filtrare o
deduplicare. Xquik addebita solo i risultati consegnati, unici e che
corrispondono ai filtri. I costi dell'IA sono inclusi nel prezzo per tweet. Non
ti servono account IA, token o chiavi.

Monitora le menzioni del brand su X (Twitter) e traccia i cambiamenti di
sentiment tra un'esecuzione e l'altra. **X (Twitter) Brand Monitoring with AI
Analysis** raccoglie ogni tweet corrispondente. Risponde con l'AI alle domande
su rilevanza, sentiment & esperienza cliente per ogni post. Confronta queste
risposte con un dataset precedente, così vedi cosa è cambiato. Ogni riga
conserva i dati originali del tweet, quindi export, revisioni & analisi di
follow-up non richiedono un secondo scraping.

Osserva un brand, una linea di prodotti o una campagna alla ricerca di
lamentele, apprezzamenti & domande d'acquisto. Informa i team di supporto &
marketing con post reali. Mantieni una cronologia di come i clienti parlano di
te da un'esecuzione all'altra.

- **Ogni campo del tweet originale.** Testo, autore, conteggi, media, link, post
  citati & post a cui si risponde restano accanto alle risposte.
- **Risposte tipizzate.** Ogni riga ha una probabilità di rilevanza, una
  categoria di sentiment con probabilità & una categoria di esperienza cliente.
- **Tracciamento dei cambiamenti.** Le esecuzioni si confrontano per decisione,
  quindi i piccoli scostamenti di probabilità non contano come cambiamenti.
- **Fatturazione basata sui filtri.** Paghi solo i tweet unici, corrispondenti
  ai filtri, con un'analisi riuscita.

## Come monitorare un brand su X

1. Aggiungi termini di ricerca (ad esempio
   `(Sony OR "WH-1000XM5") headphones lang:en`), handle di profili, URL di
   tweet o ID di tweet.
2. Imposta `maxItems` e i filtri di estrazione richiesti dal tuo task, come
   limiti di data, un minimo di Mi piace o l'esclusione delle risposte.
3. Inserisci i nomi e gli alias del tuo brand in `analysis.targets` e descrivi
   il brand in `analysis.context`.
4. Esegui l'Actor, poi conserva l'ID del dataset per il prossimo confronto.
5. Nell'esecuzione successiva, aggiungi `monitor.baselineDatasetId` con
   quell'ID. Mantieni invariati domande, target, contesto e limiti di
   contesto in modo che le risposte restino confrontabili.

```json
{
  "searchTerms": ["(Sony OR \"WH-1000XM5\") headphones lang:en"],
  "maxItems": 100,
  "analysis": {
    "targets": [
      { "name": "Sony", "aliases": ["Sony headphones", "WH-1000XM5"] }
    ],
    "context": "Consumer headphones & customer service."
  },
  "monitor": {
    "baselineDatasetId": "YOUR_PREVIOUS_DATASET_ID",
    "maxBaselineRows": 100000
  }
}
```

I target guidano la classificazione. Non creano query di ricerca né rimuovono
automaticamente i tweet non pertinenti, quindi scegli termini di ricerca e
filtri adatti alla tua ricerca.

### Cosa risponde il monitor

| Domanda                | Risposta                                              |
| ----------------------- | ------------------------------------------------------ |
| Rilevanza del brand     | Probabilità che il tweet parli del tuo target          |
| Sentiment               | Positivo, negativo, misto, neutro o non chiaro         |
| Esperienza cliente      | Cliente, potenziale cliente, osservatore o non chiaro  |

Usa le probabilità di rilevanza per rivedere gli omonimi ambigui. Il sentiment
descrive l'atteggiamento espresso dall'autore verso il target.

### Come funzionano i confronti

| Stato del confronto     | Significato                                                |
| ------------------------ | ------------------------------------------------------------ |
| `first_run`              | Non è stata fornita nessuna baseline                          |
| `new_to_baseline`        | Questo ID tweet era assente dalla baseline                    |
| `unchanged`               | Ogni decisione confrontabile corrisponde                     |
| `changed`                 | Almeno 1 decisione è diversa                                  |
| `not_comparable`         | Mancano metadati, ID o impostazioni di corrispondenza richiesti |
| `analysis_unavailable`   | Questo tweet non ha un'analisi riuscita                       |

Le risposte si confrontano per decisione. Una risposta di tipo `choice` si
confronta per categoria. Una risposta di tipo `score` si confronta per il
livello più vicino. Una risposta di tipo `probability` si confronta per la
decisione sì/no a 0,5. Una decisione conta come cambiata solo quando si sposta
in modo netto. Le quasi parità tra esecuzioni restano `unchanged`, & così gli
spostamenti che mantengono la stessa decisione. La variazione del modello tra
esecuzioni non riempie il tuo report. `changes` elenca ogni domanda cambiata con
la sua decisione `previous` & `current`. I cambiamenti possono derivare da
variazioni del modello, nuovo contesto o dati sorgente modificati. Non
dimostrano fatti cambiati, & un tweet assente non dimostra una cancellazione.

Il limite della baseline è di default 100.000 righe. ID tweet duplicati, errori
di caricamento e dimensioni del dataset che cambiano interrompono il confronto
prima della raccolta. Non diventano mai una baseline vuota.

## Analizza il tuo testo

Incolla il tuo testo in `texts`: bozze, risposte, recensioni o note. L'Actor
lo analizza & non recupera nulla da X.

```json
{
  "texts": [
    "The new update is great, but sync still drops on mobile.",
    "Support fixed my issue in 10 minutes. Thank you."
  ]
}
```

- Ogni testo diventa 1 riga con le stesse risposte `analysis` di un tweet.
- `tweet.id` è `text:1`, `text:2` & così via, & `tweet.type` è `text`.
- Ogni testo analizzato costa gli stessi $0.0003 di un tweet analizzato.
- Con `texts` impostato, l'esecuzione analizza solo quei testi. Esegui i
  target X separatamente.

## Prezzi

I costi dell'IA sono inclusi nel prezzo per tweet. Non ti servono account IA,
token o chiavi.

A partire da $0.0003 per tweet analizzato con successo, senza costo di avvio. Il
prezzo include la raccolta. La soglia per l'analisi è di 8 domande, 8.000 byte
per definizione di domanda & 12.000 byte di contesto per tweet. I filtri di
estrazione & la deduplicazione vengono eseguiti prima dell'analisi, quindi non
paghi mai le righe filtrate o duplicate. Le analisi fallite, le analisi saltate
& le righe diagnostiche non comportano addebiti sul risultato. Apify fattura
separatamente l'utilizzo della piattaforma per calcolo, storage & trasferimento,
alle tariffe del tuo piano. La scheda Pricing lo mostra.

## Esempi di input e output

L'input sopra è pronto all'uso. Le righe di output hanno questo aspetto
(abbreviato):

```json
{
  "tweet": { "id": "2100344867507327087", "text": "…", "likeCount": 6409 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      { "questionId": "relevance", "type": "probability", "probability": 0.97 },
      {
        "questionId": "sentiment",
        "type": "choice",
        "value": "neutral",
        "confidence": 0.88
      },
      {
        "questionId": "experience",
        "type": "choice",
        "value": "observer",
        "confidence": 0.69
      }
    ]
  },
  "monitor": { "status": "unchanged", "changedQuestionIds": [], "changes": [] }
}
```

Ogni risultato contiene `tweet`, `analysis` e `monitor`. Le risposte
includono tipi, versioni delle domande e le probabilità disponibili. Il
contesto mancante su citazioni, risposte, autore e media resta esplicito
sotto `analysis.contextAvailability`. Un'analisi fallita o saltata conserva
il tweet raccolto con un elenco di risposte vuoto e un `reason`. Le
diagnostiche gratuite nel key-value store spiegano input non validi,
risultati mancanti e raccolte interrotte, e il report dell'esecuzione separa
le righe raccolte, le analisi addebitate e gli addebiti in sospeso.

## Riepilogo dell'esecuzione e risposte in formato piatto

Ogni esecuzione scrive un record `analysis-summary` nel proprio key-value store
e lo ripete sotto `results.analysisSummary` nel report dell'esecuzione. Conta le
righe analizzate, fallite e saltate, somma l'engagement e riepiloga ogni
domanda.

- `targets` riporta menzioni, quota di voce & engagement per brand o alias.
- Ogni voce di `targets` ha `top`, le sue tre menzioni con più engagement per
  categoria di risposta. Usalo per creare avvisi sulle menzioni negative &
  positive più forti.
- Ogni voce di `targets` ha `choices`, la ripartizione delle risposte tra i
  tweet che menzionano quel brand.
- Il blocco `sentiment` elenca sotto `top` le tre menzioni positive & negative
  con più engagement.
- `relevance` conta le menzioni che riguardano il brand.
- `monitor.changedRows` elenca i tweet le cui decisioni sono cambiate rispetto
  alla baseline. Inviali a un webhook o a un avviso.
- Con `monitor.baselineDatasetId` impostato, il blocco `monitor` conta gli stati
  di confronto & elenca fino a 50 righe cambiate.
- Ogni riga elenca `sourceDomains`, gli host a cui rimanda.

Il riepilogo arrotonda i numeri a 4 decimali. Un'esecuzione vuota riporta
conteggi zero & medie `null`.

Ogni riga di risultato porta anche `answers`, una mappa piatta dall'ID della
domanda alla categoria, al punteggio o alla probabilità scelti. La vista
dataset `Flat answers` e gli export CSV o Excel mostrano una colonna per
domanda accanto al tweet, così i fogli di calcolo non richiedono il parsing
JSON. Le righe fallite e saltate portano una mappa vuota.

## Esempi di task

Scegli tra 50 task pubblici. Ognuno parte da una ricerca reale in inglese con
un `maxItems` limitato, target e contesto già pronti, e la vista dataset
overview. Modifica la ricerca o i target prima di eseguire.

- [Monitor Nike brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-nike-brand-mentions-on-x)
- [Monitor Starbucks brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-starbucks-brand-mentions-on-x)
- [Monitor Tesla brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-tesla-brand-mentions-on-x)
- [Monitor Spotify brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-spotify-brand-mentions-on-x)
- [Monitor Netflix brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-netflix-brand-mentions-on-x)
- [Monitor Airbnb brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-airbnb-brand-mentions-on-x)
- [Monitor Uber brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-uber-brand-mentions-on-x)
- [Monitor Peloton brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-peloton-brand-mentions-on-x)
- [Monitor Shopify brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-shopify-brand-mentions-on-x)
- [Monitor Notion brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-notion-brand-mentions-on-x)
- [Monitor Duolingo brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-duolingo-brand-mentions-on-x)
- [Monitor Lululemon brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-lululemon-brand-mentions-on-x)

I restanti task coprono altri brand, argomenti e mercati nella pagina
dell'Actor.

## Actor Xquik correlati

Ogni Actor Xquik condivide lo stesso motore di estrazione, la fatturazione
basata sui filtri e le diagnostiche. Scegli quello che corrisponde ai dati di
cui hai bisogno.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): Estrae tweet da
  ricerche, timeline dei profili, List e ID di tweet con oltre 50 filtri ed
  export in formato piatto. Usalo quando ti servono dati sui tweet senza
  analisi. A partire da $0.00015 per riga.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): estrae
  profili con i relativi post, risposte, media & follower da handle, ID o URL.
  Usalo quando parti dagli account invece che dalle ricerche. Da $0.00015 per
  riga.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): Estrae
  risposte, commenti e intere conversazioni sotto i post con oltre 25 filtri.
  Usalo quando ti serve la discussione sotto i tweet. A partire da $0.00015
  per riga.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): estrae
  risposte, citazioni, retweeter & thread per URL o ID di post in blocco.
  Usalo quando misuri chi ha interagito con i post. Da $0.00015 per riga.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): Estrae
  follower, seguiti, membri di List, iscritti e membri di Community come
  righe di profilo. Usalo quando ti servono liste di pubblico o membri. A
  partire da $0.00015 per profilo.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper):
  Cerca utenti per handle, bio e posizione con filtri su follower,
  verifica, età e posizione. Usalo quando costruisci liste di account a
  partire da una ricerca. A partire da $0.00015 per profilo.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): Estrae post,
  membri e follower delle List da URL o ID di List. Usalo quando le tue fonti
  sono definite da una List curata. A partire da $0.00015 per riga.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): Estrae
  informazioni, post, ricerche, membri e moderatori delle Community. Usalo
  quando le tue fonti sono le Community di X. A partire da $0.00015 per riga.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): Estrae
  tendenze in tempo reale per posizione con classifica, volume, query e
  WOEID. Usalo quando tieni traccia di cosa è di tendenza e dove. A partire
  da $0.00015 per tendenza.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): Estrae
  X Article lunghi in Markdown e testo con copertine, autori, date e
  metriche. Usalo quando ti servono i corpi degli articoli, non i tweet. A
  partire da $0.00015 per articolo.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): Estrae o
  archivia foto, video e GIF da post o profili con opzioni MP4 e metadati.
  Usalo quando ti servono i file media stessi. A partire da $0.00015 per
  riga media.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  Etichetta atteggiamento, intensità e probabilità di sarcasmo per ogni
  tweet con l'AI. Usalo quando ti serve il sentiment generale su qualsiasi
  argomento. A partire da $0.0003 per tweet analizzato.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  Etichetta posizione rialzista, ribassista, neutra o mista, tipo di
  contenuto, convinzione e rilevanza dell'asset con l'AI. Usalo quando segui
  discorsi su azioni, criptovalute o trading. A partire da $0.0003 per tweet
  analizzato.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  Etichetta i post di news per formato, attribuzione della fonte e rilevanza
  dell'argomento con l'AI. Usalo quando separi la cronaca dal commento. A
  partire da $0.0003 per tweet analizzato.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  Risponde alle tue domande personalizzate di categoria, punteggio e sì/no
  per ogni tweet con l'AI. Usalo quando le analisi preimpostate non si
  adattano alle tue etichette. A partire da $0.0003 per tweet analizzato.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer):
  stima un Viral Score da 0 a 100 & un verdetto per ogni tweet da 8 risposte
  dell'IA sui tratti. Usalo quando studi perché i tweet si diffondono o
  falliscono. Da $0.0003 per tweet analizzato.

## FAQ e supporto

### Posso usare le mie domande personalizzate?

Sì. `analysis.questions` personalizzate sostituiscono quelle predefinite. Invia
da 1 a 8 domande di tipo `choice`, `score` o `probability`. Le domande di tipo
choice accettano da 2 a 255 categorie. I punteggi usano almeno 2 livelli
ordinati. Mantieni le stesse domande tra le esecuzioni che vuoi confrontare.

### Perché una riga è tornata con `analysis.status` su `failed` o `skipped`?

L'Actor ha raccolto & consegnato il tweet, ma l'analisi AI non si è completata.
`analysis.reason` indica la causa, ad esempio `context_limit` quando il tweet e
il suo contesto superano `maxContextBytes`, oppure `service_unavailable` quando
il servizio di analisi è momentaneamente non disponibile. Queste righe non
comportano addebiti sul risultato. Aumenta `maxContextBytes` (fino a 12.000)
oppure riesegui gli ID interessati.

### L'analisi verifica i fatti?

No. Le risposte descrivono cosa esprime il post & come il post lo formula. Le
probabilità esprimono la fiducia del modello, non la verità. Rivedi le
classificazioni importanti confrontandole con il tweet originale, che ogni riga
conserva.

### Quali lingue funzionano?

L'estrazione supporta ogni lingua servita da X. Validiamo l'analisi prima sugli
scenari clienti in inglese. Le altre lingue supportate restituiscono risposte
con la stessa struttura. Le categorie `unclear` & le probabilità mostrano
l'incertezza in ogni lingua.

### Come limito i costi?

Filtri, deduplicazione & `maxItems` vengono eseguiti prima dell'analisi, quindi
l'Actor analizza & addebita solo i tweet unici e corrispondenti ai filtri. Usa
operatori di ricerca precisi, limiti di data & soglie minime di engagement, &
inizia con un `maxItems` piccolo per verificare la qualità delle risposte prima
di un'esecuzione ampia.

### Dove trovo assistenza?

Apri un issue nella pagina dell'Actor oppure contatta support@xquik.com con
l'ID dell'esecuzione. Le diagnostiche gratuite nel key-value store spiegano
le esecuzioni vuote, parziali o interrotte.

Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.
"Twitter" e "X" sono marchi di X Corp.
