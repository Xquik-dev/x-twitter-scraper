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

Xquik è il servizio di scraping X (Twitter) più veloce ed economico al mondo,
con i dati X più completi. X Tweet Sentiment Analysis aggiunge atteggiamento,
intensità & sarcasmo a ogni tweet. Ogni altro Actor Apify addebita il costo
prima di filtrare o deduplicare. Xquik addebita solo i risultati consegnati,
unici e conformi ai filtri. I costi dell'IA sono inclusi nel prezzo per tweet.
Non ti servono account IA, token o chiavi.

Misura l'atteggiamento dietro i post di X (Twitter) e mantieni i dati
originali del tweet. **X Tweet Sentiment Analysis with AI** raccoglie i tweet
corrispondenti, poi aggiunge a ogni post una categoria di sentiment basata
sull'AI, un livello di intensità e una probabilità di sarcasmo. Traccia le
reazioni a un lancio, una campagna, un episodio o un personaggio pubblico, e
separa le reazioni forti dalle menzioni di passaggio.

- **Sentiment per post**, non un punteggio aggregato che non puoi verificare.
- **Intensità** separa i post enfatici da quelli lievi.
- **Probabilità di sarcasmo** segnala i post il cui testo letterale contraddice
  l'atteggiamento.
- **Record sorgente completi** con ogni campo che il tweet espone.

## Come analizzare il sentiment dei tweet

1. Aggiungi termini di ricerca, handle di profilo, URL di tweet o ID di tweet.
2. Imposta `maxItems` e i filtri di estrazione di cui il tuo task ha bisogno.
3. Lascia `analysis.targets` vuoto per giudicare ogni post sul proprio
   argomento, oppure aggiungi nomi e alias per concentrare l'atteggiamento su
   un brand, un prodotto o una persona.
4. Esegui l'Actor e apri il dataset.

```json
{
  "searchTerms": ["\"season finale\" lang:en"],
  "maxItems": 200,
  "analysis": { "context": "Reactions to the show, not spoilers." }
}
```

### A cosa risponde l'Actor

| Domanda   | Risposta                                                       |
| --------- | --------------------------------------------------------------- |
| Sentiment | Positivo, negativo, misto, neutro o poco chiaro                 |
| Intensità | 0 menzione di passaggio, 1 atteggiamento chiaro, 2 formulazione enfatica |
| Sarcasmo  | Probabilità che il testo letterale contraddica l'atteggiamento |

Quando fornisci dei target, il sentiment giudica l'atteggiamento nei loro
confronti & usa il contesto di citazione o risposta che fornisci. Senza
target giudica l'argomento principale del post.

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

A partire da $0.0003 per tweet analizzato con successo, senza costo di avvio.
Il prezzo include la raccolta. L'allowance di analisi è di 8 domande,
8.000 byte per definizione di domanda e 12.000 byte di contesto per tweet. I
filtri di estrazione e la deduplicazione vengono eseguiti prima dell'analisi,
quindi le righe filtrate e duplicate non vengono mai analizzate né
addebitate. Le analisi fallite o saltate e le righe di diagnostica non
comportano alcun addebito sul risultato. Apify fattura separatamente l'uso
della piattaforma. La scheda Pricing lo mostra.

## Esempi di input e output

L'input sopra è pronto per la copia. Le righe di output hanno questo aspetto
(abbreviato):

```json
{
  "tweet": { "id": "2100493544842494265", "text": "…", "likeCount": 12 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      {
        "questionId": "sentiment",
        "type": "choice",
        "value": "positive",
        "confidence": 0.91
      },
      {
        "questionId": "intensity",
        "type": "score",
        "value": 2,
        "confidence": 0.8
      },
      { "questionId": "sarcasm", "type": "probability", "probability": 0.04 }
    ]
  }
}
```

Ogni risultato contiene `tweet` e `analysis`. Le risposte includono tipi,
versioni delle domande e probabilità disponibili. Un'analisi fallita o
saltata mantiene il tweet raccolto con un elenco di risposte vuoto e un
`reason`. Diagnostiche gratuite nel key-value store spiegano input non
validi, risultati mancanti e raccolte interrotte, e il rapporto di
esecuzione separa le righe raccolte, le analisi addebitate e gli addebiti in
sospeso.

## Riepilogo dell'esecuzione e risposte piatte

Ogni esecuzione scrive un record `analysis-summary` nel proprio key-value
store e lo ripete sotto `results.analysisSummary` nel rapporto di
esecuzione. Conta le righe analizzate, fallite e saltate, somma
l'engagement e riassume ogni domanda. La suddivisione `sentiment` mostra
quanti tweet rientrano in ogni atteggiamento. `engagementShares` mostra la
stessa suddivisione con ogni tweet pesato in base ai suoi Mi piace, retweet,
risposte & citazioni. `top` elenca i tre tweet più coinvolgenti per
atteggiamento. Il riepilogo arrotonda i numeri a 4 decimali. Un'esecuzione
vuota riporta conteggi a zero & medie `null`. Ogni riga elenca
`sourceDomains`, i nomi host a cui rimanda, & `cashtags` come `$NVDA`
trovati nel testo. Con `monitor.baselineDatasetId` impostato, il blocco
`monitor` del riepilogo conta gli stati di confronto & elenca fino a 50
righe modificate.

Ogni riga di risultato porta anche `answers`, una mappa piatta dall'ID
domanda alla categoria, al punteggio o alla probabilità scelti. La vista
dataset `Flat answers` e gli export CSV o Excel mostrano una colonna per
domanda accanto al tweet, così i fogli di calcolo non necessitano di parsing
JSON. Le righe fallite o saltate portano una mappa vuota.

## Confronta con un'esecuzione precedente

Passa `monitor.baselineDatasetId`, l'ID dataset di un'esecuzione precedente
completata con le stesse impostazioni di analisi. Ogni riga guadagna allora un
oggetto `monitor`. Il suo stato è `first_run` senza baseline, `new_to_baseline`
per i tweet che l'esecuzione precedente non aveva, & `unchanged` o `changed` per
i tweet che aveva. `changes` elenca ogni decisione di sentiment, livello di
intensità o sarcasmo che si è spostata da `previous` a `current`. Le decisioni
si confrontano per categoria, livello di punteggio arrotondato o sì/no a 0,5.
Una decisione conta come cambiata solo quando si sposta in modo netto. Le
oscillazioni quasi pari tra le esecuzioni restano invariate. Le baseline sopra
`maxBaselineRows` (predefinito 100.000) o con impostazioni diverse interrompono
l'esecuzione prima della raccolta con una riga di diagnostica.

## Esempi di task

Scegli tra 50 task pubblici. Ognuno parte da una ricerca reale in inglese
con un `maxItems` limitato, target e contesto già pronti, e la vista
dataset overview. Modifica la ricerca o i target prima di eseguire.

- [Sentiment of season finale reactions](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-season-finale-reactions)
- [Sentiment of iPhone launch posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-iphone-launch-posts)
- [Sentiment of the Super Bowl halftime show](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-super-bowl-halftime-show)
- [Sentiment toward a new electric car model](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-new-electric-car)
- [Sentiment of Marvel movie audiences](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-marvel-movie-audiences)
- [Sentiment of Taylor Swift album reactions](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-taylor-swift-album-reactions)
- [Sentiment of a video game launch](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-video-game-launch)
- [Sentiment about remote work](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-remote-work)
- [Sentiment of airline passengers](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-airline-passengers)
- [Sentiment of college football fans](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-college-football-fans)
- [Sentiment about interest rate decisions](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-interest-rates)
- [Sentiment toward electric scooters](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-electric-scooters)

I task rimanenti coprono altri brand, argomenti e mercati nella pagina
dell'Actor.

## Actor Xquik correlati

Ogni Actor Xquik condivide lo stesso motore di estrazione, la fatturazione
filter-first e la diagnostica. Scegli quello che corrisponde ai dati di cui
hai bisogno.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): raccoglie tweet
  da ricerche, timeline di profilo, List e ID di tweet con oltre 50 filtri ed
  export piatti. Usalo quando ti servono dati sui tweet senza analisi. A
  partire da $0.00015 per riga.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): estrae
  profili con i relativi post, risposte, media & follower da handle, ID o URL.
  Usalo quando parti dagli account invece che dalle ricerche. Da $0.00015 per
  riga.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): raccoglie
  risposte, commenti e intere conversazioni sotto i post con oltre 25 filtri.
  Usalo quando ti serve la discussione sotto i tweet. A partire da $0.00015
  per riga.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): estrae
  risposte, citazioni, retweeter & thread per URL o ID di post in blocco.
  Usalo quando misuri chi ha interagito con i post. Da $0.00015 per riga.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): raccoglie
  follower, following, membri di List, iscritti e membri di Community come
  righe profilo. Usalo quando ti servono liste di audience o membri. A
  partire da $0.00015 per profilo.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper):
  cerca utenti per handle, bio e posizione con filtri per follower,
  verifica, età e posizione. Usalo quando costruisci liste di account a
  partire da una ricerca. A partire da $0.00015 per profilo.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): raccoglie post,
  membri e follower di List da URL o ID di List. Usalo quando una List
  curata definisce le tue fonti. A partire da $0.00015 per riga.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper):
  raccoglie informazioni, post, ricerche, membri e moderatori di Community.
  Usalo quando le tue fonti sono X Community. A partire da $0.00015 per riga.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): raccoglie
  tendenze in tempo reale per posizione con rank, volume, query e WOEID.
  Usalo quando monitori cosa è di tendenza e dove. A partire da $0.00015 per
  tendenza.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): raccoglie
  articoli lunghi di X come Markdown e testo con copertine, autori, date e
  metriche. Usalo quando ti servono i corpi degli articoli, non i tweet. A
  partire da $0.00015 per articolo.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): estrae o
  archivia foto, video e GIF da post o profili con opzioni MP4 e metadati.
  Usalo quando ti servono i file media stessi. A partire da $0.00015 per riga
  media.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  monitora le menzioni del brand con rilevanza AI, sentiment e risposte
  sull'esperienza cliente, e confronta le esecuzioni. Usalo quando osservi un
  brand nel tempo. A partire da $0.0003 per tweet analizzato.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  etichetta posizione rialzista, ribassista, neutra o mista, tipo di
  contenuto, convinzione e rilevanza dell'asset con l'AI. Usalo quando segui
  stock, crypto o discussioni di trading. A partire da $0.0003 per tweet
  analizzato.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  etichetta i post di notizie per formato, attribuzione della fonte e
  rilevanza dell'argomento con l'AI. Usalo quando separi il reporting dal
  commento. A partire da $0.0003 per tweet analizzato.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  risponde alle tue domande personalizzate di categoria, punteggio e sì/no
  per ogni tweet con l'AI. Usalo quando le analisi preimpostate non si
  adattano alle tue etichette. A partire da $0.0003 per tweet analizzato.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer):
  stima un Viral Score da 0 a 100 & un verdetto per ogni tweet da 8 risposte
  dell'IA sui tratti. Usalo quando studi perché i tweet si diffondono o
  falliscono. Da $0.0003 per tweet analizzato.

## FAQ e supporto

### Posso usare le mie domande personalizzate?

Sì. Le `analysis.questions` personalizzate sostituiscono quelle predefinite:
da 1 a 8 domande `choice`, `score` o `probability` con da 2 a 255 categorie o
almeno 2 livelli ordinati.

### Perché una riga è tornata con `analysis.status` `failed` o `skipped`?

L'Actor ha raccolto & consegnato il tweet, ma l'analisi AI non si è completata.
`analysis.reason` indica la causa, come `context_limit` quando il tweet e il suo
contesto superano `maxContextBytes`, oppure `service_unavailable` quando il
servizio di analisi è momentaneamente non disponibile. Queste righe non
comportano alcun addebito sul risultato. Aumenta `maxContextBytes` (fino a
12.000) o riesegui gli ID interessati.

### L'analisi verifica i fatti?

No. Le risposte descrivono ciò che il post esprime & come il post lo
formula. Le probabilità esprimono la fiducia del modello, non la verità. Rivedi le
classificazioni importanti confrontandole con il tweet originale, che ogni
riga conserva.

### Quali lingue funzionano?

L'estrazione supporta ogni lingua servita da X. Validiamo l'analisi prima
sugli scenari clienti in inglese. Le altre lingue supportate restituiscono
risposte con la stessa struttura. Le categorie `unclear` & le probabilità
mostrano l'incertezza in ogni lingua.

### Come limito il costo?

Filtri, deduplicazione e `maxItems` vengono eseguiti prima dell'analisi,
quindi l'Actor analizza & addebita solo i tweet unici e conformi ai
filtri. Usa operatori di ricerca precisi, limiti di data e soglie di
engagement, e inizia con un `maxItems` piccolo per verificare la qualità
delle risposte prima di un'esecuzione grande.

### Dove ottengo aiuto?

Apri un problema nella pagina dell'Actor o contatta support@xquik.com con
l'ID dell'esecuzione. Diagnostiche gratuite nel key-value store spiegano le
esecuzioni vuote, parziali o interrotte.

Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.
"Twitter" e "X" sono marchi di X Corp.
