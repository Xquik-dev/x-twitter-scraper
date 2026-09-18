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

# X (Twitter) News Monitor with AI Analysis | $0.3/1K Tweets

<table align="center"><tr><td align="center">
<a href="https://youtu.be/4UOSpoOoC3Y?t=367"><img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" width="720" alt="Framer collega Xquik MCP agli agenti di coding"></a><br>
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">Guarda come Framer usa gli scraper Xquik con Claude Code, Codex, Cursor e altro, da 6:07.</a>
</td></tr></table>

Xquik è il servizio di scraping per X (Twitter) più veloce ed economico al
mondo, con i dati X più completi, e X (Twitter) News Monitor ordina i post di
news per formato, attribuzione della fonte e rilevanza. Ogni altro Actor
Apify addebita i costi prima di filtrare o deduplicare. Xquik addebita solo i
risultati consegnati, unici e che corrispondono ai filtri.

Ordina i post di news su X (Twitter) in base a cosa sono e conserva i dati
originali del tweet. **X (Twitter) News Monitor with AI Analysis** raccoglie
i post sui tuoi argomenti, poi aggiunge a ogni post una risposta basata su AI
su formato, attribuzione della fonte e rilevanza. Separa la cronaca dal
commento e dalla speculazione, verifica se una fonte è nominata o collegata,
e mantieni solo i post che riguardano le organizzazioni, le persone o gli
argomenti che segui.

- **Il formato** distingue cronaca, commento, speculazione, promozione e
  satira.
- **L'attribuzione** mostra se un'affermazione nomina una fonte, ne collega
  una, è di prima mano o non ne ha nessuna.
- **La rilevanza** mantiene i post sui tuoi target ed elimina gli omonimi.
- **Record sorgente completi** per ogni campo esposto dal tweet, inclusi gli
  articoli collegati quando disponibili.

## Come classificare i post di news su X

1. Aggiungi termini di ricerca come `Nvidia earnings lang:en
   -filter:retweets`, handle di account di news o ID di tweet.
2. Imposta `maxItems` e filtri di estrazione come limiti di data,
   `filter:news` o un minimo di repost.
3. Inserisci le organizzazioni, le persone o gli argomenti che segui e i
   loro alias in `analysis.targets`, e restringi l'argomento in
   `analysis.context`.
4. Esegui l'Actor e apri il dataset.

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

| Domanda      | Risposta                                                                 |
| ------------ | -------------------------------------------------------------------------- |
| Formato      | Cronaca, commento, speculazione, promozione, satira, non correlato o non chiaro |
| Attribuzione | Nominata, collegata, di prima mano, assente o non chiara                   |
| Rilevanza    | Probabilità che l'evento riportato riguardi i tuoi target                  |

La classificazione non verifica i fatti. Una fonte nominata non è una fonte
credibile; l'attribuzione descrive ciò che il post presenta.

## Prezzi

A partire da $0.0003 per tweet analizzato con successo, senza costo di
avvio. La raccolta è inclusa, e la soglia documentata per l'analisi è di 8
domande, 8.000 byte per definizione di domanda e 12.000 byte di contesto per
tweet. I filtri di estrazione e la deduplicazione vengono eseguiti prima
dell'analisi, quindi le righe filtrate e i duplicati non vengono mai
analizzati né addebitati. Le analisi fallite o saltate e le righe
diagnostiche non comportano addebiti sul risultato. L'utilizzo della
piattaforma Apify viene fatturato separatamente da Apify e appare nella
scheda Pricing.

## Esempi di input e output

L'input sopra è pronto all'uso. Le righe di output hanno questo aspetto
(abbreviato):

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

Ogni risultato contiene `tweet` e `analysis`. Le risposte includono tipi,
versioni delle domande e le probabilità disponibili. Quando un post collega
un X Article, l'analisi recupera il titolo, l'anteprima e i blocchi di testo
di quell'articolo come contesto, e `analysis.contextAvailability.article`
riporta `text_blocks`, `summary` (solo titolo e anteprima) o
`not_supplied`. Un'analisi fallita o saltata conserva il tweet raccolto con
un elenco di risposte vuoto e un `reason`. Le diagnostiche gratuite nel
key-value store spiegano input non validi, risultati mancanti e raccolte
interrotte, e il report dell'esecuzione separa le righe raccolte, le analisi
addebitate e gli addebiti in sospeso.

## Riepilogo dell'esecuzione e risposte in formato piatto

Ogni esecuzione scrive un record `analysis-summary` nel proprio key-value
store e lo ripete sotto `results.analysisSummary` nel report
dell'esecuzione. Conta le righe analizzate, fallite e saltate, somma
l'engagement e riepiloga ogni domanda. La ripartizione `format` separa la
cronaca da commento, speculazione, promozione e satira; `attribution` conta
le fonti nominate, collegate, di prima mano e assenti; `relevance` conta i
post relativi a ciascun target, con `targets` che indica le menzioni per
target e il campo `top` di ogni target che elenca i suoi post più
coinvolgenti per categoria di risposta. I numeri sono arrotondati a 4
decimali; le esecuzioni vuote riportano conteggi zero e medie `null`.
`sourceDomains` conta i domini collegati nell'intera esecuzione, ogni voce
di `targets` porta `choices` con la ripartizione di formato e attribuzione
per i post relativi a quel target, e `monitor.changedRows` elenca i post le
cui decisioni sono cambiate rispetto alla baseline. Ogni riga elenca anche
`sourceDomains`, gli host a cui rimanda, i `cashtags` come `$NVDA` trovati
nel suo testo, e il blocco `monitor` del riepilogo conta gli stati di
confronto ed elenca fino a 50 righe cambiate quando è impostato
`monitor.baselineDatasetId`.

Ogni riga di risultato porta anche `answers`, una mappa piatta dall'ID della
domanda alla categoria, al punteggio o alla probabilità scelti. La vista
dataset `Flat answers` e gli export CSV o Excel mostrano una colonna per
domanda accanto al tweet, così i fogli di calcolo non richiedono il parsing
JSON. Le righe fallite e saltate portano una mappa vuota.

## Confronto con un'esecuzione precedente

Passa `monitor.baselineDatasetId`, l'ID del dataset di un'esecuzione
precedente completata con le stesse impostazioni di analisi, e ogni riga
acquisisce un oggetto `monitor`: `first_run` senza una baseline,
`new_to_baseline` per i tweet che l'esecuzione precedente non aveva,
`unchanged` o `changed` per i tweet che aveva, con `changes` che elenca ogni
decisione su formato, attribuzione o rilevanza che è passata da `previous` a
`current`. Le decisioni si confrontano per categoria, livello di punteggio
arrotondato, o sì/no a 0,5, e una decisione conta come cambiata solo quando
la risposta si sposta chiaramente: la categoria precedente scende sotto lo
0,4 di probabilità, un punteggio si sposta di almeno 0,6 livelli, oppure una
probabilità sì/no si colloca ad almeno 0,1 dalla soglia. Le oscillazioni
minime da quasi parità tra esecuzioni restano invariate. Le baseline che
superano `maxBaselineRows` (default 100.000) o provenienti da impostazioni
diverse interrompono l'esecuzione prima della raccolta con una riga
diagnostica.

## Esempi di task

Scegli tra 50 task pubblici. Ognuno parte da una ricerca reale in inglese con
un `maxItems` limitato, target e contesto già pronti, e la vista dataset
overview. Modifica la ricerca o i target prima di eseguire.

- [Classify Nvidia news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-nvidia-news-posts-on-x)
- [Classify X Article news posts](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-x-article-news-posts)
- [Classify OpenAI news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-openai-news-posts-on-x)
- [Classify Apple news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-apple-news-posts-on-x)
- [Classify Tesla news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-tesla-news-posts-on-x)
- [Classify SpaceX news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-spacex-news-posts-on-x)
- [Classify Boeing news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-boeing-news-posts-on-x)
- [Classify Pfizer news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-pfizer-news-posts-on-x)
- [Classify Moderna news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-moderna-news-posts-on-x)
- [Classify ExxonMobil news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-exxon-news-posts-on-x)
- [Classify Federal Reserve news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-federal-reserve-news-posts-on-x)
- [Classify European Central Bank news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-european-central-bank-news-posts-on-x)
- [Classify Bank of England news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-bank-of-england-news-posts-on-x)

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
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  Monitora le menzioni del brand con risposte AI su rilevanza, sentiment ed
  esperienza cliente e confronta le esecuzioni. Usalo quando osservi un
  brand nel tempo. A partire da $0.0003 per tweet analizzato.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  Etichetta atteggiamento, intensità e probabilità di sarcasmo per ogni
  tweet con l'AI. Usalo quando ti serve il sentiment generale su qualsiasi
  argomento. A partire da $0.0003 per tweet analizzato.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  Etichetta posizione rialzista, ribassista, neutra o mista, tipo di
  contenuto, convinzione e rilevanza dell'asset con l'AI. Usalo quando segui
  discorsi su azioni, criptovalute o trading. A partire da $0.0003 per tweet
  analizzato.
- [X (Twitter) Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  Risponde alle tue domande personalizzate di categoria, punteggio e sì/no
  per ogni tweet con l'AI. Usalo quando le analisi preimpostate non si
  adattano alle tue etichette. A partire da $0.0003 per tweet analizzato.

## FAQ e supporto

### Posso usare le mie domande personalizzate?

Sì. `analysis.questions` personalizzate sostituiscono quelle predefinite: da
1 a 8 domande di tipo `choice`, `score` o `probability` con 2-255 categorie o
almeno 2 livelli ordinati.

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
