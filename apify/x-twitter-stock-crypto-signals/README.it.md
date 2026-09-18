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
con i dati X più completi, e X (Twitter) Stock & Crypto Signal
trasforma i tweet in posizioni rialziste, ribassiste, neutre o miste per ogni
titolo o moneta. Ogni altro Actor Apify addebita i costi prima di filtrare o
deduplicare. Xquik addebita solo i risultati consegnati, unici e conformi ai
filtri.

I costi dell'IA sono inclusi nel prezzo per tweet. Non paghi alcun provider di IA, non compri token & non porti alcuna chiave.

Leggi il sentiment dietro i post su azioni, criptovalute e trading su X
(Twitter) e mantieni i dati originali del tweet. **X (Twitter) Stock & Crypto Signal** raccoglie post sui tuoi titoli o asset, poi aggiunge a
ogni post una posizione, un tipo di contenuto, un livello di convinzione e una
pertinenza dell'asset generati dall'IA. Separa le dichiarazioni ferme dalle
osservazioni caute, l'analisi dalla promozione e i post sul tuo asset dagli usi
non correlati del suo nome.

- **Posizione per post**: rialzista, ribassista, neutra, mista o non chiara.
- **Tipo di contenuto** distingue analisi, notizie, idee di trading,
  promozione, umorismo e domande.
- **Convinzione** separa le dichiarazioni e le posizioni ferme dalle
  osservazioni caute.
- **Pertinenza** filtra gli usi non correlati di un titolo o nome societario.
- **Record sorgente completi** per ogni campo esposto dal tweet.

## Come analizzare il sentiment di mercato su X

1. Aggiungi termini di ricerca come `$NVDA lang:en -filter:retweets`, query con
   cashtag, handle di profilo o ID di tweet.
2. Imposta `maxItems` e i filtri di estrazione come limiti di data o Mi piace
   minimi.
3. Inserisci nomi di asset, ticker e alias in `analysis.targets` e descrivi
   l'asset in `analysis.context`.
4. Esegui l'Actor e apri il dataset.

```json
{
  "searchTerms": ["$NVDA lang:en -filter:retweets"],
  "maxItems": 500,
  "analysis": {
    "targets": [{ "name": "Nvidia", "aliases": ["NVDA", "$NVDA"] }],
    "context": "The chip maker as a listed stock."
  }
}
```

### A cosa risponde l'Actor

| Domanda    | Risposta                                                       |
| ---------- | --------------------------------------------------------------- |
| Posizione  | Rialzista, ribassista, neutra, mista o non chiara                |
| Contenuto  | Analisi, notizia, trade, promozione, umorismo, domanda o non chiaro |
| Convinzione | 0 osservazione cauta, 1 opinione dichiarata, 2 dichiarazione o posizione ferma |
| Pertinenza | Probabilità che il post tratti i tuoi target come asset          |

Le risposte descrivono ciò che gli autori esprimono. Non sono consulenza
finanziaria e non verificano affermazioni, prezzi o comunicazioni ufficiali.

## Prezzi

I costi dell'IA sono inclusi nel prezzo per tweet. Non paghi alcun provider di IA, non compri token & non porti alcuna chiave.

Da $0.0003 per tweet analizzato con successo, senza costo iniziale. La
raccolta è inclusa e la soglia documentata per l'analisi è di 8 domande, 8.000
byte per definizione di domanda e 12.000 byte di contesto per tweet. I filtri
di estrazione e la deduplicazione vengono eseguiti prima dell'analisi, quindi
le righe filtrate o duplicate non vengono mai analizzate né addebitate. Le
analisi fallite o saltate e le righe diagnostiche non comportano alcun
addebito sul risultato. L'utilizzo della piattaforma Apify viene fatturato
separatamente da Apify e compare nella scheda Pricing.

## Esempi di input e output

L'input sopra è pronto all'uso. Le righe di output sono simili a questa
(abbreviata):

```json
{
  "tweet": { "id": "2100692112916574711", "text": "…", "likeCount": 31 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      {
        "questionId": "stance",
        "type": "choice",
        "value": "bullish",
        "confidence": 0.86
      },
      {
        "questionId": "content",
        "type": "choice",
        "value": "analysis",
        "confidence": 0.79
      },
      {
        "questionId": "conviction",
        "type": "score",
        "value": 1,
        "confidence": 0.7
      },
      { "questionId": "relevance", "type": "probability", "probability": 0.95 }
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

Ogni esecuzione scrive un record `analysis-summary` nel proprio key-value
store e lo ripete sotto `results.analysisSummary` nel report dell'esecuzione.
Conta le righe analizzate, fallite e saltate, somma l'engagement e riassume
ogni domanda. `cashtags` conta la posizione per cashtag come `$NVDA`, quindi il
rapporto rialzista per asset deriva da `choices.stance`. Il blocco `stance`
aggiunge la ripartizione ponderata per engagement e i post rialzisti e
ribassisti con più engagement; `conviction` riporta la media e la media
ponderata per engagement. I numeri sono arrotondati a 4 decimali; le
esecuzioni vuote riportano conteggi zero e medie `null`. Ogni voce di
`cashtags` aggiunge `signal`: conteggio rialzista, conteggio ribassista e un
punteggio da -1 a 1 calcolato come (rialzisti - ribassisti) / righe, e
`monitor.changedRows` elenca i tweet la cui posizione è cambiata rispetto alla
baseline. Ogni riga elenca anche `sourceDomains`, gli host a cui rimanda, e il
blocco `monitor` del riepilogo conta gli stati di confronto ed elenca fino a
50 righe modificate quando `monitor.baselineDatasetId` è impostato.

Ogni riga di risultato include anche `answers`, una mappa piatta dall'ID della
domanda alla categoria, al punteggio o alla probabilità scelti. La vista
dataset `Flat answers` e le esportazioni CSV o Excel mostrano una colonna per
domanda accanto al tweet, così i fogli di calcolo non richiedono il parsing
del JSON. Le righe fallite o saltate contengono una mappa vuota.

## Confronto con un'esecuzione precedente

Passa `monitor.baselineDatasetId`, l'ID del dataset di un'esecuzione
precedente completata con le stesse impostazioni di analisi, e ogni riga
ottiene un oggetto `monitor`: `first_run` senza baseline, `new_to_baseline`
per i tweet che l'esecuzione precedente non aveva, `unchanged` o `changed` per
i tweet che aveva già, con `changes` che elenca ogni posizione, tipo di
contenuto o livello di convinzione passato da `previous` a `current`. Le
decisioni si confrontano per categoria, livello di punteggio arrotondato, o
sì/no a 0,5, e una decisione conta come cambiata solo quando la risposta si
sposta chiaramente: la categoria precedente scende sotto 0,4 di probabilità,
un punteggio si sposta di almeno 0,6 livelli, oppure una probabilità sì/no si
colloca ad almeno 0,1 dalla soglia. Le oscillazioni minime tra esecuzioni
restano invariate. Le baseline sopra `maxBaselineRows` (predefinito 100.000) o
con impostazioni diverse interrompono l'esecuzione prima della raccolta con
una riga diagnostica.

## Esempi di task

Scegli tra 50 task pubblici. Ognuno parte da una ricerca reale in inglese con
un `maxItems` limitato, target e contesto già pronti, e la vista dataset
generale. Modifica la ricerca o i target prima di eseguire.

- [Nvidia (NVDA) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/nvda-market-sentiment-on-x)
- [Tesla (TSLA) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/tsla-market-sentiment-on-x)
- [Apple (AAPL) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/aapl-market-sentiment-on-x)
- [Amazon (AMZN) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/amzn-market-sentiment-on-x)
- [Microsoft (MSFT) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/msft-market-sentiment-on-x)
- [Alphabet (GOOGL) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/googl-market-sentiment-on-x)
- [Meta (META) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/meta-market-sentiment-on-x)
- [AMD (AMD) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/amd-market-sentiment-on-x)
- [Palantir (PLTR) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/pltr-market-sentiment-on-x)
- [Coinbase (COIN) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/coin-market-sentiment-on-x)
- [Strategy (MSTR) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/mstr-market-sentiment-on-x)
- [Robinhood (HOOD) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/hood-market-sentiment-on-x)

I task rimanenti coprono altri brand, argomenti e mercati nella pagina
dell'Actor.

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
- [X (Twitter) Brand Monitoring](https://apify.com/xquik/x-twitter-brand-monitoring):
  Monitora le menzioni del brand con pertinenza, sentiment e risposte sulla
  customer experience generate dall'IA e confronta le esecuzioni. Usalo
  quando segui un brand nel tempo. Da $0.0003 per tweet analizzato.
- [X Tweet Sentiment Analysis](https://apify.com/xquik/x-tweet-sentiment-analysis):
  Etichetta atteggiamento, intensità e probabilità di sarcasmo per ogni tweet
  con l'IA. Usalo quando ti serve un sentiment generale su qualsiasi
  argomento. Da $0.0003 per tweet analizzato.
- [X (Twitter) News Monitor with AI](https://apify.com/xquik/x-twitter-news-monitor):
  Etichetta i post di notizie per formato, attribuzione della fonte e
  pertinenza dell'argomento con l'IA. Usalo quando separi il giornalismo dal
  commento. Da $0.0003 per tweet analizzato.
- [X Tweet Classifier with AI](https://apify.com/xquik/x-twitter-tweet-classifier):
  Risponde alle tue domande personalizzate su categoria, punteggio e sì/no
  per ogni tweet con l'IA. Usalo quando le analisi predefinite non si
  adattano alle tue etichette. Da $0.0003 per tweet analizzato.

## FAQ e supporto

### Posso monitorare più titoli in un'unica esecuzione?

Sì. Elenca ogni asset in `analysis.targets` con i suoi ticker e alias, e
combina i termini di ricerca. Le risposte sulla pertinenza ti dicono quali
post trattano i tuoi target come asset.

### Perché una riga è tornata con `analysis.status` su `failed` o `skipped`?

Il tweet è stato raccolto e consegnato, ma l'analisi generata dall'IA non è
stata completata. `analysis.reason` indica la causa, come `context_limit`
quando il tweet e il suo contesto superano `maxContextBytes`, oppure
`service_unavailable` dopo i tentativi. Queste righe non comportano alcun
addebito sul risultato. Aumenta `maxContextBytes` (fino a 12.000) o riesegui
gli ID interessati.

### L'analisi verifica i fatti?

No. Le risposte descrivono ciò che il post esprime e come è formulato. Le
probabilità esprimono la fiducia del modello, non la verità. Rivedi le
classificazioni importanti confrontandole con il tweet originale, che ogni
riga conserva.

### Quali lingue funzionano?

L'estrazione supporta ogni lingua servita da X. L'analisi è validata prima
sugli scenari clienti in inglese; le altre lingue supportate restituiscono
risposte con la stessa struttura, e l'incertezza resta esplicita attraverso
le categorie e le probabilità `unclear`.

### Come limito i costi?

Filtri, deduplicazione e `maxItems` vengono eseguiti prima dell'analisi,
quindi solo i tweet unici e conformi ai filtri vengono analizzati e
addebitati. Usa operatori di ricerca precisi, limiti di data e soglie minime
di engagement, e inizia con un `maxItems` piccolo per verificare la qualità
delle risposte prima di un'esecuzione ampia.

### Dove ricevo assistenza?

Apri un problema nella pagina dell'Actor o contatta support@xquik.com con
l'ID dell'esecuzione. Le diagnostiche gratuite nel key-value store spiegano
le esecuzioni vuote, parziali o interrotte.

Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.
"Twitter" e "X" sono marchi di X Corp.
