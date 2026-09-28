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
i dati X più completi. X (Twitter) Brand Monitoring di Xquik segue le menzioni
del tuo brand con risposte su rilevanza, sentiment & customer experience. La
maggior parte degli altri Actor Apify fa pagare prima di filtrare o deduplicare.
Xquik fa pagare solo i risultati consegnati, unici e conformi ai filtri. I costi
AI sono inclusi nel prezzo per post. Non ti servono account AI, token o chiavi.

Monitora le menzioni del brand su X (Twitter) & segui come cambia il sentiment
tra un'esecuzione e l'altra. **X (Twitter) Brand Monitoring with AI Analysis**
di Xquik raccoglie ogni post (tweet) pertinente. Per ogni post risponde con AI a
domande su rilevanza, sentiment & customer experience. Confronta queste risposte
con un dataset precedente, così vedi cosa è cambiato. Ogni riga conserva i dati
originali del post. Export, revisioni & analisi successive non richiedono un
secondo scraping.

Osserva un brand, una linea di prodotti o una campagna per trovare lamentele,
apprezzamenti & domande d'acquisto. Aggiorna i team di supporto & marketing con
post reali. Conserva uno storico di come i clienti parlano di te, esecuzione
dopo esecuzione.

- **Ogni campo del post di origine.** Testo, autore, conteggi, media, link, post
  citati & post a cui risponde restano accanto alle risposte.
- **Risposte tipizzate.** Ogni riga ha una probabilità di rilevanza, una
  categoria di sentiment con probabilità & una categoria di customer
  experience.
- **Tracciamento dei cambiamenti.** Le esecuzioni si confrontano per decisione,
  quindi i piccoli scostamenti di probabilità non contano come cambiamenti.
- **Fatturazione dopo i filtri.** Paghi solo i post unici & conformi ai filtri
  con un'analisi riuscita.

> Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.
> "Twitter" e "X" sono marchi di X Corp.

## Come monitorare un brand su X

1. Aggiungi termini di ricerca, nomi utente dei profili, URL o ID dei post. Per
   esempio, cerca `(Sony OR "WH-1000XM5") headphones lang:en`.
2. Imposta `maxItems` & i filtri di estrazione che servono al tuo task. Alcuni
   esempi sono limiti di data, un minimo di Mi piace & l'esclusione delle
   risposte.
3. Inserisci i nomi & gli alias del tuo brand in `analysis.targets` & descrivi
   il brand in `analysis.context`.
4. Avvia l'esecuzione, poi conserva l'ID del dataset per il prossimo confronto.
5. Nell'esecuzione successiva, aggiungi `monitor.baselineDatasetId` con
   quell'ID. Lascia invariati domande, target, contesto & limiti di contesto,
   così le risposte restano confrontabili. Il confronto legge quel dataset,
   quindi funziona anche se quell'esecuzione ha saltato il riepilogo.

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

I target guidano la classificazione. Non creano query di ricerca & non
rimuovono i post non pertinenti. Scegli termini di ricerca & filtri adatti alla
tua analisi.

### Cosa risponde il monitor

| Domanda             | Risposta                                             |
| ------------------- | ---------------------------------------------------- |
| Rilevanza del brand | Probabilità che il post parli del tuo target         |
| Sentiment           | Positivo, negativo, misto, neutro o poco chiaro      |
| Customer experience | Cliente, potenziale cliente, osservatore o poco chiaro |

Usa le probabilità di rilevanza per controllare gli omonimi ambigui. Il
sentiment descrive l'atteggiamento espresso dall'autore verso il target.

### Come funzionano i confronti

| Stato del confronto    | Significato                                              |
| ---------------------- | -------------------------------------------------------- |
| `first_run`            | Nessuna baseline fornita                                 |
| `new_to_baseline`      | L'ID di questo post non era nella baseline               |
| `unchanged`            | Ogni decisione confrontabile coincide                    |
| `changed`              | Almeno 1 decisione è diversa                             |
| `not_comparable`       | Mancano metadati, ID o impostazioni corrispondenti       |
| `analysis_unavailable` | Questo post non ha un'analisi riuscita                   |

Le risposte si confrontano per decisione. Una risposta `choice` si confronta per
categoria. Una risposta `score` si confronta per il livello più vicino. Una
risposta `probability` si confronta per la decisione sì/no a 0,5. Una decisione
conta come cambiata solo quando si sposta in modo netto. I quasi pareggi tra
esecuzioni restano `unchanged`, come gli scostamenti che mantengono la stessa
decisione. Così le piccole differenze dell'AI tra esecuzioni non risultano come
cambiamenti.

`changes` elenca ogni domanda cambiata con la decisione `previous` & `current`.
I cambiamenti possono derivare da variazioni dell'AI, nuovo contesto o dati di
origine modificati. Non provano che i fatti siano cambiati. Un post assente non
prova una cancellazione.

Il limite della baseline, `maxBaselineRows`, vale 100.000 righe di default. ID
di post duplicati, errori di caricamento & dimensioni del dataset che cambiano
fermano il confronto prima della raccolta. Non diventano mai una baseline vuota.

## Analizza il tuo testo

Incolla in `texts` le tue bozze, risposte, recensioni o note. X (Twitter) Brand
Monitoring di Xquik le analizza. Non recupera nulla da X.

```json
{
  "texts": [
    "The new update is great, but sync still drops on mobile.",
    "Support fixed my issue in 10 minutes. Thank you."
  ]
}
```

- Ogni testo diventa 1 riga con le stesse risposte `analysis` di un post.
- `tweet.id` vale `text:1`, `text:2` e così via. `tweet.type` vale `text`.
- Ogni testo analizzato costa gli stessi $0.0003 di un post analizzato.
- Con `texts` impostato, l'esecuzione analizza solo quei testi. Avvia a parte i
  target di X.

## Quanto costa monitorare un brand su X?

X (Twitter) Brand Monitoring di Xquik costa da $0.0003 per post analizzato. Non
c'è costo di avvio. Il prezzo include la raccolta & i costi AI. Non ti servono
account AI, token o chiavi. Il prezzo copre fino a 8 domande & 64.000 byte di
contesto per post. Ogni definizione di domanda può usare fino a 8.000 byte.

I filtri di estrazione & la deduplicazione agiscono prima dell'analisi. Non
paghi mai le righe filtrate o duplicate. Le analisi fallite, le analisi saltate
& le righe di diagnostica non hanno addebiti sul risultato. Apify fattura a
parte l'uso della piattaforma per calcolo, storage & trasferimento, alle tariffe
del tuo piano. La scheda Pricing lo mostra.

## Esempi di input & output

L'input qui sopra è pronto da copiare. Una riga di output abbreviata ha questo
aspetto:

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

Ogni risultato contiene `tweet`, `analysis` & `monitor`. Le risposte includono
tipi, versioni delle domande & probabilità disponibili.
`analysis.contextAvailability` segnala il contesto mancante di citazione,
risposta, autore & media. Una riga con un'analisi fallita o saltata conserva il
post raccolto & un `reason`. Il suo elenco di risposte è vuoto.

La diagnostica gratuita nel key-value store spiega input non validi, risultati
mancanti & raccolte interrotte. Il report dell'esecuzione separa righe raccolte,
analisi addebitate & addebiti in sospeso.

## Riepilogo dell'esecuzione & risposte piatte

Un'esecuzione scrive un record `analysis-summary` nel suo key-value store in 4
casi:

- Incontra un problema o è grande.
- Imposta `monitor` senza `baselineDatasetId`, come prima esecuzione di una
  serie.
- Il suo confronto trova un post cambiato, nuovo o non confrontabile.
- Ha `alwaysSaveRunRecords` attivo.

Le altre esecuzioni saltano il record. Il loro stato nomina la risposta
principale, come `Top sentiment: negative in 2 of 5 results.` Un confronto
senza cambiamenti riporta `No change since the earlier run.` Anche le esecuzioni
grandi o con un problema scrivono `run-report`, come quelle con
`alwaysSaveRunRecords` attivo. `run-report` ripete il riepilogo sotto
`results.analysisSummary`.

Il riepilogo conta le righe analizzate, fallite & saltate. Somma l'engagement &
riassume ogni domanda.

- `targets` riporta menzioni, share of voice & engagement per ogni brand o
  alias.
- Ogni voce di `targets` ha `top`, le sue 3 menzioni con più engagement per
  ogni categoria di risposta. Usalo per gli avvisi sulle menzioni negative &
  positive più forti.
- Ogni voce di `targets` ha `choices`, la suddivisione delle risposte tra i post
  che citano quel brand.
- Il blocco `sentiment` elenca sotto `top` le 3 menzioni positive & negative con
  più engagement.
- `relevance` conta le menzioni che parlano davvero del brand.
- `monitor.changedRows` elenca i post con decisioni cambiate rispetto alla
  baseline. Inviali a un webhook o a un avviso.
- Con `monitor.baselineDatasetId` impostato, il blocco `monitor` conta gli stati
  del confronto. Elenca fino a 50 righe cambiate.
- Ogni riga elenca `sourceDomains`, gli hostname a cui rimanda.

Il riepilogo arrotonda i numeri a 4 decimali. Un'esecuzione vuota riporta
conteggi a 0 & medie `null`.

Ogni riga di risultato riporta anche `answers`, una mappa piatta con l'ID della
domanda come chiave. Ogni valore è la categoria, il punteggio o la probabilità
scelti. La vista `Flat answers` del dataset & gli export CSV o Excel mostrano 1
colonna per domanda. Le colonne stanno accanto al post, quindi i fogli di
calcolo non devono leggere JSON. Le righe fallite & saltate riportano una mappa
vuota.

## Esempi di task

Scegli tra 50 task pubblici. Ognuno parte da una ricerca reale in inglese & da
un `maxItems` limitato. Include target & contesto già pronti, più la vista
overview del dataset. Modifica la ricerca o i target prima di avviarlo.

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

Gli altri task, nella pagina dell'Actor, coprono altri brand, argomenti &
mercati.

## Actor Xquik correlati

Ogni Actor Xquik usa lo stesso motore di estrazione, fattura dopo i filtri &
offre la stessa diagnostica. Scegli quello adatto ai dati che ti servono.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): estrae post da
  ricerche, timeline dei profili, liste & ID dei post con oltre 50 filtri &
  export piatti. Usalo quando ti servono dati sui post senza analisi. Da
  $0.00015 per riga.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): estrae
  profili con i relativi post, risposte, media & follower da nomi utente, ID o
  URL. Usalo quando parti dagli account invece che dalle ricerche. Da $0.00015
  per riga.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): estrae risposte,
  commenti & intere conversazioni sotto i post con oltre 25 filtri. Usalo
  quando ti serve la discussione sotto i post. Da $0.00015 per riga.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): estrae
  risposte, citazioni, utenti che hanno fatto repost & thread da URL o ID di
  post in blocco. Usalo quando misuri chi ha interagito con i post. Da $0.00015
  per riga.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): estrae
  follower, following, membri & follower delle liste e membri delle community
  come righe di profilo. Usalo quando ti servono elenchi di pubblico o di
  membri. Da $0.00015 per profilo.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper):
  cerca utenti per nome utente, bio & posizione con filtri su follower,
  verifica, età & posizione. Usalo quando costruisci elenchi di account dalla
  ricerca. Da $0.00015 per profilo.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): estrae post,
  membri & follower delle liste da URL o ID delle liste. Usalo quando una lista
  curata definisce le tue fonti. Da $0.00015 per riga.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): estrae
  informazioni, post, ricerche, membri & moderatori delle community. Usalo
  quando le tue fonti sono community di X. Da $0.00015 per riga.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): estrae le
  tendenze in tempo reale per località con posizione in classifica, volume,
  query & WOEID. Usalo quando segui cosa è di tendenza e dove. Da $0.00015 per
  tendenza.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): raccoglie
  gli articoli lunghi di X come Markdown & testo, con copertine, autori, date &
  metriche. Usalo quando ti serve il corpo degli articoli, non i post. Da
  $0.00015 per articolo.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): estrae o
  archivia foto, video & GIF da post o profili con opzioni MP4 & metadati.
  Usalo quando ti servono i file multimediali veri e propri. Da $0.00015 per
  riga di media.
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
  risponde con AI alle tue domande di categoria, punteggio & sì/no su ogni
  post. Usalo quando le analisi preimpostate non si adattano alle tue
  etichette. Da $0.0003 per post analizzato.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer):
  stima un Viral Score da 0 a 100 & un verdetto per ogni post da 8 risposte AI
  sui suoi tratti. Usalo quando studi perché i post si diffondono o falliscono.
  Da $0.0003 per post analizzato.

## FAQ & supporto

### Serve un account AI, una chiave API X o il login?

No. X (Twitter) Brand Monitoring di Xquik include i costi AI nel prezzo. Non ti
servono account AI, token o chiavi. Non ti servono nemmeno chiave API X, login o
credenziali.

### Posso usare le mie domande?

Sì. Le `analysis.questions` personalizzate sostituiscono quelle predefinite.
Invia da 1 a 8 domande `choice`, `score` o `probability`. Le domande `choice`
accettano da 2 a 255 categorie. Le domande `score` richiedono almeno 2 livelli
ordinati. Usa le stesse domande nelle esecuzioni che vuoi confrontare.

### Perché una riga ha `analysis.status` `failed` o `skipped`?

L'Actor ha raccolto & consegnato il post, ma l'analisi AI non si è completata.
`analysis.reason` indica la causa. `context_limit` significa che contesto &
target non lasciano spazio al post. `service_unavailable` significa che il
servizio di analisi era momentaneamente non disponibile. Queste righe non hanno
addebiti sul risultato. Accorcia `analysis.context` o riavvia gli ID
interessati.

L'Actor analizza comunque un post più lungo di `maxContextBytes`. Taglia prima
i post citati & quelli a cui risponde, poi il post stesso.
`analysis.contextAvailability.postText` diventa quindi `truncated`. Alza
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
post unici & conformi ai filtri. Usa operatori di ricerca precisi, limiti di
data & soglie di engagement. Parti con un `maxItems` piccolo per verificare la
qualità delle risposte prima di un'esecuzione grande.

### È legale analizzare i dati di X?

L'Actor raccoglie campi pubblici di X. I risultati possono contenere dati
personali. Verifica di avere uno scopo lecito & rispetta le norme sulla privacy
applicabili. Nel dubbio, chiedi a un legale qualificato.

### Posso usare l'API, le pianificazioni & le integrazioni?

Sì. Consulta la
[scheda API](https://apify.com/xquik/x-twitter-brand-monitoring/api) per esempi
in Python, JavaScript & cURL. Usa le
[pianificazioni](https://docs.apify.com/platform/schedules) di Apify per le
esecuzioni ricorrenti. Passa l'ID del dataset precedente come
`monitor.baselineDatasetId` per vedere cosa è cambiato. Le integrazioni di Apify
collegano le esecuzioni anche a webhook, Make, Zapier, n8n & Google Sheets.

### Dove trovo assistenza?

Apri una issue nella pagina dell'Actor o scrivi a support@xquik.com con l'ID
dell'esecuzione. La diagnostica gratuita nel key-value store spiega le
esecuzioni vuote, parziali o interrotte.
