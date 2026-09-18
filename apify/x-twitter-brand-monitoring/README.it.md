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
mondo, con i dati X più completi, e X (Twitter) Brand Monitoring monitora le
menzioni del tuo brand con rilevanza, sentiment e risposte sull'esperienza
cliente. Ogni altro Actor Apify addebita i costi prima di filtrare o
deduplicare. Xquik addebita solo i risultati consegnati, unici e che
corrispondono ai filtri.

I costi dell'IA sono inclusi nel prezzo per tweet. Non paghi alcun provider di IA, non compri token & non porti alcuna chiave.

Monitora le menzioni del brand su X (Twitter) e traccia i cambiamenti di
sentiment tra un'esecuzione e l'altra. **X (Twitter) Brand Monitoring** raccoglie ogni tweet corrispondente, aggiunge a ogni post risposte
basate su AI su rilevanza, sentiment ed esperienza cliente, e confronta le
risposte con un dataset precedente per mostrarti cosa è cambiato. I dati
originali del tweet restano in ogni riga, quindi export, revisioni e analisi
di follow-up non richiedono un secondo scraping.

Usalo per osservare un brand, una linea di prodotti o una campagna alla
ricerca di lamentele, apprezzamenti e domande d'acquisto; per informare i team
di supporto e marketing con post reali invece che con punteggi aggregati; e
per mantenere una cronologia, esecuzione dopo esecuzione, di come i clienti
parlano di te.

- **Ogni campo del tweet originale** resta accanto alle risposte: testo,
  autore, conteggi, media, link, post citati e a cui si risponde.
- **Risposte tipizzate**: una probabilità di rilevanza, una categoria di
  sentiment con probabilità e una categoria di esperienza cliente.
- **Tracciamento dei cambiamenti** tra esecuzioni per decisione, non per
  rumore di probabilità.
- **Fatturazione basata sui filtri**: vengono addebitati solo i tweet unici,
  corrispondenti ai filtri, con analisi riuscita.

## Come monitorare un brand su X

1. Aggiungi termini di ricerca (ad esempio `"Acme headphones" lang:en`),
   handle di profili, URL di tweet o ID di tweet.
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
  "searchTerms": ["\"Acme headphones\" lang:en"],
  "maxItems": 100,
  "analysis": {
    "targets": [{ "name": "Acme", "aliases": ["Acme headphones"] }],
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

Le risposte si confrontano per decisione: una risposta di tipo `choice` per
categoria, una risposta di tipo `score` per il livello più vicino e una
risposta di tipo `probability` per la decisione sì/no a 0,5. Una decisione
conta come cambiata solo quando la risposta si sposta chiaramente: la
categoria precedente scende sotto lo 0,4 di probabilità, un punteggio si
sposta di almeno 0,6 livelli, oppure una probabilità sì/no si colloca ad
almeno 0,1 dalla soglia. Le oscillazioni minime da quasi parità tra
esecuzioni restano invariate. Gli spostamenti che mantengono la stessa
decisione restano `unchanged`, così la variazione del modello tra esecuzioni
non intasa il tuo report. `changes` elenca ogni domanda cambiata con la sua
decisione `previous` e `current`. I cambiamenti possono riflettere variazioni
del modello, nuovo contesto o dati sorgente modificati; non dimostrano fatti
cambiati, e un tweet assente non dimostra una cancellazione.

Il limite della baseline è di default 100.000 righe. ID tweet duplicati,
errori di caricamento e dimensioni del dataset che cambiano interrompono il
confronto prima della raccolta; non diventano mai una baseline vuota.

## Prezzi

I costi dell'IA sono inclusi nel prezzo per tweet. Non paghi alcun provider di IA, non compri token & non porti alcuna chiave.

A partire da $0.0003 per tweet analizzato con successo, senza costo di
avvio. La raccolta è inclusa, e la soglia documentata per l'analisi è di 8
domande, 8.000 byte per definizione di domanda e 12.000 byte di contesto per
tweet. I filtri di estrazione e la deduplicazione vengono eseguiti prima
dell'analisi, quindi le righe filtrate e i duplicati non vengono mai
analizzati né addebitati. Le analisi fallite o saltate e le righe diagnostiche
non comportano addebiti sul risultato. L'utilizzo della piattaforma Apify
(calcolo, storage e trasferimento) viene fatturato separatamente da Apify
alle tariffe del tuo piano e appare nella scheda Pricing.

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

Ogni esecuzione scrive un record `analysis-summary` nel proprio key-value
store e lo ripete sotto `results.analysisSummary` nel report
dell'esecuzione. Conta le righe analizzate, fallite e saltate, somma
l'engagement e riepiloga ogni domanda. `targets` riporta menzioni, quota di
voce ed engagement per brand o alias, e il campo `top` di ogni voce elenca le
tre menzioni più coinvolgenti per categoria di risposta, così le menzioni
negative e positive più forti di ogni brand sono pronte per gli avvisi. Il
blocco `sentiment` elenca le tre menzioni positive e negative più
coinvolgenti sotto `top`, pronte per gli avvisi, e `relevance` conta le
menzioni che riguardano il brand. I numeri sono arrotondati a 4 decimali; le
esecuzioni vuote riportano conteggi zero e medie `null`. Ogni voce di
`targets` porta anche `choices`, la ripartizione delle risposte tra i tweet
che menzionano quel brand, e `monitor.changedRows` elenca i tweet le cui
decisioni sono cambiate rispetto alla baseline, pronti per un webhook o un
avviso. Ogni riga elenca anche `sourceDomains`, gli host a cui rimanda, e il
blocco `monitor` del riepilogo conta gli stati di confronto ed elenca fino a
50 righe cambiate quando è impostato `monitor.baselineDatasetId`.

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
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): Estrae
  profili insieme ai loro post, risposte, media e Mi piace da handle, ID o
  URL. Usalo quando parti dagli account invece che dalle ricerche. A partire
  da $0.00015 per riga.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): Estrae
  risposte, commenti e intere conversazioni sotto i post con oltre 25 filtri.
  Usalo quando ti serve la discussione sotto i tweet. A partire da $0.00015
  per riga.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper):
  Estrae risposte, citazioni, chi ha retwittato, chi ha messo Mi piace e i
  thread per URL o ID di post in blocco. Usalo quando misuri chi ha
  interagito con i post. A partire da $0.00015 per riga.
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
- [X Tweet Sentiment Analysis](https://apify.com/xquik/x-tweet-sentiment-analysis):
  Etichetta atteggiamento, intensità e probabilità di sarcasmo per ogni
  tweet con l'AI. Usalo quando ti serve il sentiment generale su qualsiasi
  argomento. A partire da $0.0003 per tweet analizzato.
- [X (Twitter) Stock & Crypto Signal](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  Etichetta posizione rialzista, ribassista, neutra o mista, tipo di
  contenuto, convinzione e rilevanza dell'asset con l'AI. Usalo quando segui
  discorsi su azioni, criptovalute o trading. A partire da $0.0003 per tweet
  analizzato.
- [X (Twitter) News Monitor with AI](https://apify.com/xquik/x-twitter-news-monitor):
  Etichetta i post di news per formato, attribuzione della fonte e rilevanza
  dell'argomento con l'AI. Usalo quando separi la cronaca dal commento. A
  partire da $0.0003 per tweet analizzato.
- [X Tweet Classifier with AI](https://apify.com/xquik/x-twitter-tweet-classifier):
  Risponde alle tue domande personalizzate di categoria, punteggio e sì/no
  per ogni tweet con l'AI. Usalo quando le analisi preimpostate non si
  adattano alle tue etichette. A partire da $0.0003 per tweet analizzato.

## FAQ e supporto

### Posso usare le mie domande personalizzate?

Sì. `analysis.questions` personalizzate sostituiscono quelle predefinite: da
1 a 8 domande di tipo `choice`, `score` o `probability`. Le domande di tipo
choice accettano da 2 a 255 categorie; i punteggi usano almeno 2 livelli
ordinati. Mantieni le stesse domande tra le esecuzioni che vuoi confrontare.

### Perché una riga è tornata con `analysis.status` su `failed` o `skipped`?

Il tweet è stato raccolto e consegnato, ma l'analisi basata su AI non si è
completata. `analysis.reason` indica la causa, ad esempio `context_limit`
quando il tweet e il suo contesto superano `maxContextBytes`, oppure
`service_unavailable` dopo diversi tentativi. Queste righe non comportano
addebiti sul risultato. Aumenta `maxContextBytes` (fino a 12.000) oppure
riesegui gli ID interessati.

### L'analisi verifica i fatti?

No. Le risposte descrivono cosa esprime il post e come è formulato. Le
probabilità esprimono la fiducia del modello, non la verità. Rivedi le
classificazioni importanti confrontandole con il tweet originale, che ogni
riga conserva.

### Quali lingue funzionano?

L'estrazione supporta ogni lingua servita da X. L'analisi è validata prima
sugli scenari clienti in inglese; le altre lingue supportate restituiscono
risposte con la stessa struttura, e l'incertezza resta esplicita tramite le
categorie e le probabilità `unclear`.

### Come limito i costi?

Filtri, deduplicazione e `maxItems` vengono eseguiti prima dell'analisi,
quindi vengono analizzati e addebitati solo i tweet unici e corrispondenti
ai filtri. Usa operatori di ricerca precisi, limiti di data e soglie minime
di engagement, e inizia con un `maxItems` piccolo per verificare la qualità
delle risposte prima di un'esecuzione ampia.

### Dove trovo assistenza?

Apri un issue nella pagina dell'Actor oppure contatta support@xquik.com con
l'ID dell'esecuzione. Le diagnostiche gratuite nel key-value store spiegano
le esecuzioni vuote, parziali o interrotte.

Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.
"Twitter" e "X" sono marchi di X Corp.
