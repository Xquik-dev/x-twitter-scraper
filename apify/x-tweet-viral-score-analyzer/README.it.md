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
con i dati X più completi. X Tweet Viral Score Analyzer aggiunge una stima del
Viral Score & un verdetto a ogni tweet. Ogni altro Actor Apify addebita il costo
prima di filtrare o deduplicare. Xquik addebita solo i risultati consegnati,
unici e conformi ai filtri. I costi dell'IA sono inclusi nel prezzo per tweet.
Non ti servono account IA, token o chiavi.

Scopri perché i tweet si diffondono o falliscono & mantieni i dati originali
del tweet. **X Tweet Viral Score Analyzer with AI** raccoglie i tweet
corrispondenti. L'IA valuta 8 tratti di ogni post. L'Actor trasforma quelle
risposte in una stima del Viral Score da 0 a 100 & in un verdetto. Ogni riga
mantiene Mi piace, repost, risposte & citazioni reali, così puoi confrontare
ogni stima con ciò che è successo.

- **Viral Score per post** da regole fisse e versionate.
- **8 risposte sui tratti** mostrano perché un post ha un punteggio alto o
  basso.
- **Stop rigidi** limitano i post che sembrano spam, ragebait o testo generico
  scritto da una macchina.
- **Record sorgente completi** con ogni campo che il tweet espone.

Il Viral Score è una stima di quanto funziona la formulazione. Non prevede
Mi piace o visualizzazioni. Non riproduce il modo in cui X classifica i post.

## Come controllare il viral score di un tweet

1. Aggiungi termini di ricerca, handle di profilo, URL di tweet o ID di tweet.
2. Imposta `maxItems` e i filtri di estrazione di cui il tuo task ha bisogno.
3. Descrivi il tuo pubblico in `analysis.context`, oppure lascia il valore
   predefinito.
4. Esegui l'Actor & apri la vista dataset `Viral Score`.

```json
{
  "searchTerms": ["from:NASA -filter:replies -filter:retweets"],
  "maxItems": 150,
  "analysis": { "context": "Space fans & general readers." }
}
```

### A cosa risponde l'Actor

| Domanda       | Risposta                                                                           |
| ------------- | ---------------------------------------------------------------------------------- |
| Gancio        | 0 nessun gancio, 1 apertura chiara, 2 apertura incisiva                            |
| Chiarezza     | 0 confuso, 1 richiede sforzo, 2 chiaro alla prima lettura                          |
| Informativo   | 0 niente di nuovo, 1 concetto già noto, 2 spunto utile                             |
| Divertente    | 0 non divertente, 1 leggermente divertente, 2 abbastanza divertente da condividere |
| Ragebait      | Probabilità che il post provochi soprattutto indignazione                          |
| Scritto da IA | Probabilità che il testo sembri un testo generico scritto da una macchina          |
| Spam          | Probabilità di spam, truffa, giveaway o engagement farming                         |
| Reazione      | Condividere, rispondere, mettere Mi piace, discutere o ignorare                    |

La risposta Scritto da IA giudica solo lo stile. Non stabilisce chi ha scritto
il post.

### Come funziona il Viral Score

Gancio, chiarezza, valore offerto e reazione attesa alzano il punteggio. Un
testo che sembra una copia generica da macchina lo abbassa.

I blocchi rigidi limitano il punteggio di probabile spam, ragebait e copia
generica da macchina. Il punteggio è un numero intero da 0 a 100.

| Verdetto      | Punteggio   |
| ------------- | ----------- |
| `send_it`     | da 70 a 100 |
| `edit_first`  | da 40 a 69  |
| `sleep_on_it` | da 0 a 39   |

`viral.weights` indica la versione di queste regole, ad esempio `viral_lite:1`.
Cambia ogni volta che cambiano le regole. Il punteggio è `null` quando l'analisi
è fallita, l'Actor l'ha saltata o manca una risposta di tratto predefinita.
L'Actor non riempie mai un punteggio mancante con una stima.

## Stima dell'Algorithm Score

X ha pubblicato i suoi pesi di ranking nel repository `xai-org/x-algorithm`,
file `home-mixer/params/param.rs`. L'Actor ne applica 4 ai conteggi pubblici
di ogni post:

| Conteggio | Peso |
| --------- | ---- |
| Mi piace  | 0,5  |
| Risposta  | 5    |
| Repost    | 1    |
| Citazione | 5    |

`viral.algorithmWeightedSum` è la somma di ogni conteggio moltiplicato per il
suo peso. `viral.algorithmScore` divide quella somma per le visualizzazioni &
moltiplica per 1.000. Un post senza conteggio di visualizzazioni usa invece i
follower. `viral.algorithmBasis` indica il divisore, `views` o `followers`.
Confronta solo punteggi con la stessa base. `viral.weightsVersion` indica i
pesi, come `x_algorithm_params:2026-09-18`.

Limiti:

- X moltiplica ogni peso per una probabilità che prevede per un singolo
  spettatore. L'Actor moltiplica per i conteggi osservati. Il risultato è una
  stima, non il punteggio che X calcola.
- X non pubblica alcun peso per segnalibri o visualizzazioni. La somma li
  esclude entrambi.
- X usa più segnali di questi 4, come il tempo di permanenza & le
  condivisioni. I dati pubblici non li mostrano.
- Il punteggio è `null` quando un post non ha visualizzazioni & nessun
  conteggio di follower.
- L'IA non vede mai questi conteggi. Legge solo il testo & il contesto.

## Previsto contro reale

L'Actor confronta ogni Viral Score con ciò che è successo.
`viral.actualEngagementRate` è `log10(1 + weighted sum per 1,000 followers)`.
Il logaritmo limita l'effetto di un singolo post molto grande. Il tasso è
`null` quando il conteggio di follower manca o è 0.

Il blocco `viral.calibration` del riepilogo dell'esecuzione riporta:

- `comparedPosts`: i post con un Viral Score & un tasso reale.
- `rankCorrelation`: una correlazione per ranghi di Spearman da -1 a 1. Chiede
  se a punteggi più alti corrispondono tassi più alti.
- `calibrationScore`: 100 volte la correlazione, con minimo 0.
- `overperformers` & `underperformers`: fino a 5 post ciascuno, con ID del
  tweet, URL, Viral Score, tasso reale & `gap`.

`gap` è il tasso reale standardizzato meno il Viral Score standardizzato. Un
post entra in un elenco quando il suo gap raggiunge 1 deviazione standard.

Limiti:

- Meno di 10 post confrontati danno una calibrazione `null` con il motivo
  `too_few_posts`. Punteggi o tassi identici danno `no_variation`.
- La correlazione è approssimata.
- La calibrazione descrive una sola esecuzione. Un punteggio basso può
  significare che i post differiscono per tempistica, argomento o pubblico,
  non che la stima sulla formulazione ha fallito.
- I post recenti non hanno finito di raccogliere engagement. Confronta post
  di età simile.

## Report degli account

Il blocco `viral.accounts` del riepilogo dell'esecuzione riporta ogni handle
di autore:

- Numero di post, Viral Score medio & tasso medio di engagement reale.
- Il post migliore & il peggiore per Viral Score, con ID del tweet & URL.
- Viral Score medio per fascia: ora di pubblicazione in UTC, banda di
  lunghezza del testo, con media, con link & self-thread.

Le bande di lunghezza del testo sono `short` fino a 80 caratteri, `medium`
fino a 200, `long` fino a 280 & `extended` oltre. Un post self-thread risponde
al proprio autore.

Limiti:

- Il report elenca i 50 handle con più post valutati.
- L'Actor segue i primi 1.000 handle di un'esecuzione. `untrackedPosts` conta
  i post valutati degli handle successivi & i post senza handle.
- Una fascia con pochi post dice poco. Controlla `posts` prima di confrontare
  le medie.
- Le fasce mostrano cosa è andato insieme in questa esecuzione. Non mostrano
  la causa.

## Classifica

Il blocco `viral.leaderboard` del riepilogo dell'esecuzione classifica gli
handle del report degli account. `byViralScore` classifica per Viral Score
medio. `byActualEngagementRate` classifica per tasso reale medio. Ogni elenco
contiene fino a 20 handle con `rank`, `posts` & `average`.

Limiti:

- Un handle ha bisogno di almeno 3 post valutati per entrare in classifica.
- L'elenco dei tassi salta gli handle senza conteggio di follower.
- A parità, decide prima il numero maggiore di post, poi il nome dell'handle.
- La classifica copre i post di una sola esecuzione, non l'intera storia di
  un account.

## Valuta una bozza prima di pubblicare

Incolla il tuo testo in `texts`. L'Actor lo valuta & non recupera nulla da X.

```json
{
  "texts": [
    "We shipped dark mode today. Try it and tell us what breaks.",
    "5 things we learned from 1,000 support tickets."
  ],
  "analysis": { "context": "Developers who use our app." }
}
```

- Ogni testo diventa 1 riga con `viralScore`, `viralVerdict` & `viral.stops`.
- `tweet.id` è `text:1`, `text:2` & così via, & `tweet.type` è `text`.
- Una bozza non ha ancora Mi piace o visualizzazioni, quindi
  `viral.algorithmScore` resta `null`.
- Ogni testo analizzato costa gli stessi $0.0003 di un tweet analizzato.
- Con `texts` impostato, l'esecuzione analizza solo quei testi. Esegui i
  target X separatamente.

## Prezzi

I costi dell'IA sono inclusi nel prezzo per tweet. Non ti servono account IA,
token o chiavi.

A partire da $0.0003 per tweet analizzato con successo, senza costo di avvio.
Il prezzo include la raccolta & il Viral Score. L'allowance di analisi è di
8 domande, 8.000 byte per definizione di domanda e 12.000 byte di contesto
per tweet. I filtri di estrazione e la deduplicazione vengono eseguiti prima
dell'analisi, quindi le righe filtrate e duplicate non vengono mai analizzate
né addebitate. Le analisi fallite o saltate e le righe di diagnostica non
comportano alcun addebito sul risultato. Apify fattura separatamente l'uso
della piattaforma. La scheda Pricing lo mostra.

## Esempi di input e output

L'input sopra è pronto per la copia. Le righe di output hanno questo aspetto
(abbreviato):

```json
{
  "tweet": { "id": "2100493544842494265", "text": "...", "likeCount": 12 },
  "viral": {
    "score": 74,
    "verdict": "send_it",
    "weights": "viral_lite:1",
    "stops": [],
    "algorithmScore": 8.5,
    "algorithmBasis": "views",
    "algorithmWeightedSum": 17,
    "actualEngagementRate": 0.7202,
    "weightsVersion": "x_algorithm_params:2026-09-18"
  },
  "viralScore": 74,
  "viralVerdict": "send_it",
  "viralAlgorithmScore": 8.5,
  "viralActualEngagementRate": 0.7202,
  "analysis": {
    "status": "succeeded",
    "answers": [
      { "questionId": "hook", "type": "score", "value": 2, "confidence": 0.84 },
      { "questionId": "spam", "type": "probability", "probability": 0.03 },
      {
        "questionId": "reaction",
        "type": "choice",
        "value": "share",
        "confidence": 0.7
      }
    ]
  }
}
```

Ogni risultato contiene `tweet`, `analysis` & `viral`. Le risposte includono
tipi, versioni delle domande e probabilità disponibili. `viral.stops` elenca
gli stop rigidi che hanno limitato il punteggio. Un'analisi fallita o saltata
mantiene il tweet raccolto con un elenco di risposte vuoto, un `reason` & un
punteggio `null`. Diagnostiche gratuite nel key-value store spiegano input
non validi, risultati mancanti e raccolte interrotte. Il rapporto di
esecuzione separa le righe raccolte, le analisi addebitate e gli addebiti in
sospeso.

## Riepilogo dell'esecuzione e risposte piatte

Ogni esecuzione scrive un record `analysis-summary` nel proprio key-value
store e lo ripete sotto `results.analysisSummary` nel rapporto di
esecuzione. Conta le righe analizzate, fallite e saltate, somma
l'engagement e riassume ogni domanda. Il suo blocco `viral` riporta
`averageScore`, il conteggio di ogni verdetto & quante righe l'Actor ha
valutato o lasciato senza punteggio. Lo stesso blocco contiene `calibration`,
`accounts` & `leaderboard`, descritti sopra. Le domande a punteggio riportano
una media & una media pesata per engagement. La suddivisione `reaction`
mostra quanti tweet rientrano in ogni reazione, & `top` elenca i tre tweet
più coinvolgenti per reazione. Un'esecuzione vuota riporta conteggi a zero &
una media `null`. Ogni riga elenca `sourceDomains`, i nomi host a cui
rimanda, & `cashtags` come `$NVDA` trovati nel testo. Con
`monitor.baselineDatasetId` impostato, il blocco `monitor` del riepilogo
conta gli stati di confronto & elenca fino a 50 righe modificate.

Ogni riga di risultato porta anche `viralScore`, `viralVerdict`,
`viralAlgorithmScore`, `viralActualEngagementRate` & `answers`, una mappa
piatta dall'ID domanda alla categoria, al punteggio o alla probabilità
scelti. La vista dataset `Viral Score` e gli export CSV o Excel mostrano
queste colonne accanto al tweet, così i fogli di calcolo non necessitano di
parsing JSON. Le righe fallite o saltate portano una mappa vuota.

## Confronta con un'esecuzione precedente

Passa `monitor.baselineDatasetId`, l'ID dataset di un'esecuzione precedente
completata con le stesse impostazioni di analisi. Ogni riga guadagna allora un
oggetto `monitor`. Il suo stato è `first_run` senza baseline, `new_to_baseline`
per i tweet che l'esecuzione precedente non aveva, & `unchanged` o `changed` per
i tweet che aveva. `changes` elenca ogni decisione su un tratto che si è
spostata da `previous` a `current`. Le decisioni si confrontano per categoria,
livello di punteggio arrotondato o sì/no a 0,5. Una decisione conta come
cambiata solo quando si sposta in modo netto. Le oscillazioni quasi pari tra le
esecuzioni restano invariate. Le baseline sopra `maxBaselineRows` (predefinito
100.000) o con impostazioni diverse interrompono l'esecuzione prima della
raccolta con una riga di diagnostica.

## Esempi di task

Scegli tra 50 task pubblici. Ognuno parte da una ricerca reale in inglese
con un `maxItems` limitato & la vista dataset `Viral Score`. Alcuni
aggiungono il contesto sul pubblico. Modifica la ricerca o il contesto prima
di eseguire.

- [Viral score of AI startup launch tweets](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-ai-startup-launch-tweets)
- [Viral score of SaaS founder build in public posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-saas-founder-build-in-public-posts)
- [Viral score of Product Hunt launch posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-product-hunt-launch-posts)
- [Viral score of Developer tool announcements](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-developer-tool-announcements)
- [Viral score of Open source release posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-open-source-release-posts)
- [Viral score of Crypto project announcements](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-crypto-project-announcements)
- [Viral score of Parenting humor posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-parenting-humor-posts)
- [Viral score of Office humor posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-office-humor-posts)
- [Viral score of Pet photo captions](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-pet-photo-captions)
- [Viral score audit of NASA posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-nasa-posts)
- [Viral score audit of Duolingo posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-duolingo-posts)
- [Viral score audit of Wendy's posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-wendys-posts)

I task rimanenti coprono altri argomenti & account di brand nella pagina
dell'Actor.

## FAQ e supporto

### Un punteggio alto significa che un tweet diventerà virale?

No. Il punteggio stima quanto funziona la formulazione per un lettore
generico. Anche tempistica, dimensione del pubblico, media & fortuna decidono
la portata. Confronta i punteggi con i conteggi reali di engagement di ogni
riga prima di farci affidamento.

### Posso usare le mie domande personalizzate?

Sì. Le `analysis.questions` personalizzate sostituiscono quelle predefinite:
da 1 a 8 domande `choice`, `score` o `probability` con da 2 a 255 categorie o
almeno 2 livelli ordinati. Il Viral Score richiede tutte le 8 domande
predefinite, quindi le domande personalizzate lo lasciano `null`.

### Perché una riga è tornata con `analysis.status` `failed` o `skipped`?

L'Actor ha raccolto & consegnato il tweet, ma l'analisi AI non si è completata.
`analysis.reason` indica la causa, come `context_limit` quando il tweet e il suo
contesto superano `maxContextBytes`, oppure `service_unavailable` quando il
servizio di analisi è momentaneamente non disponibile. Queste righe non
comportano alcun addebito sul risultato & non hanno punteggio. Aumenta
`maxContextBytes` (fino a 12.000) o riesegui gli ID interessati.

### L'analisi verifica i fatti?

No. Le risposte descrivono ciò che il post esprime & come il post lo
formula. Le probabilità esprimono la fiducia del modello, non la verità. Rivedi le
classificazioni importanti confrontandole con il tweet originale, che ogni
riga conserva.

### Quali lingue funzionano?

L'estrazione supporta ogni lingua servita da X. Validiamo l'analisi prima
sugli scenari clienti in inglese. Le altre lingue supportate restituiscono
risposte con la stessa struttura.

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
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  etichetta atteggiamento, intensità e probabilità di sarcasmo per ogni
  tweet con l'AI. Usalo quando ti serve il sentiment generale su qualsiasi
  argomento. A partire da $0.0003 per tweet analizzato.
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
