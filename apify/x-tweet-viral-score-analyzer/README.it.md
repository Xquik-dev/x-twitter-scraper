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
i dati X più completi. X Tweet Viral Score Analyzer di Xquik valuta ogni post
(tweet). Aggiunge una stima del Viral Score & un verdetto. La maggior parte degli
altri Actor Apify fa pagare prima di filtrare o deduplicare. Xquik fa pagare
solo i risultati consegnati, unici e conformi ai filtri. I costi AI sono inclusi
nel prezzo per post. Non ti servono account AI, token o chiavi.

Scopri perché i post si diffondono o falliscono & conserva i dati originali del
post. **X Tweet Viral Score Analyzer with AI** di Xquik raccoglie i post
pertinenti. L'AI valuta 8 tratti di ogni post. L'Actor trasforma quelle risposte
in una stima del Viral Score & in un verdetto. Ogni riga conserva Mi piace,
repost, risposte & citazioni reali. Confronta ogni stima con ciò che è successo.

- **Viral Score per post.** Regole fisse & versionate calcolano ogni punteggio
  da 0 a 100.
- **8 risposte sui tratti.** Mostrano perché un post ha un punteggio alto o
  basso.
- **Blocchi rigidi.** Limitano i post che sembrano spam, ragebait o testo
  generico scritto da una macchina.
- **Record di origine completi.** Ogni riga conserva tutti i campi che il post
  rende disponibili.

Il Viral Score stima quanto funziona la formulazione. Non prevede Mi piace o
visualizzazioni. Non riproduce il modo in cui X classifica i post.

> Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.
> "Twitter" e "X" sono marchi di X Corp.

## Come controllare il viral score di un tweet

1. Aggiungi termini di ricerca, nomi utente dei profili, URL o ID dei post.
2. Imposta `maxItems` & i filtri di estrazione che servono al tuo task.
3. Descrivi il tuo pubblico in `analysis.context` o lascia il valore
   predefinito.
4. Avvia l'esecuzione & apri la vista `Viral Score` del dataset.

```json
{
  "searchTerms": ["from:NASA -filter:replies -filter:retweets"],
  "maxItems": 150,
  "analysis": { "context": "Space fans & general readers." }
}
```

### Cosa risponde l'Actor

| Domanda       | Risposta                                                                           |
| ------------- | ---------------------------------------------------------------------------------- |
| Gancio        | 0 nessun gancio, 1 apertura chiara, 2 apertura incisiva                            |
| Chiarezza     | 0 confuso, 1 richiede sforzo, 2 chiaro alla prima lettura                          |
| Informativo   | 0 niente di nuovo, 1 concetto già noto, 2 spunto utile                             |
| Divertente    | 0 non divertente, 1 un po' divertente, 2 abbastanza divertente da condividere      |
| Ragebait      | Probabilità che il post punti soprattutto a indignare                              |
| Scritto da AI | Probabilità che il testo sembri generico & scritto da una macchina                 |
| Spam          | Probabilità di spam, truffa, giveaway o engagement farming                         |
| Reazione      | Condividere, rispondere, mettere Mi piace, discutere o ignorare                    |

La risposta "Scritto da AI" giudica solo lo stile. Non stabilisce chi ha scritto
il post.

### Come funziona il Viral Score

Gancio, chiarezza, valore offerto & reazione attesa alzano il punteggio. Un
testo che sembra generico & scritto da una macchina lo abbassa.

I blocchi rigidi limitano il punteggio di probabile spam, ragebait & testo
generico da macchina. Il punteggio è un numero intero da 0 a 100.

| Verdetto      | Punteggio   |
| ------------- | ----------- |
| `send_it`     | da 70 a 100 |
| `edit_first`  | da 40 a 69  |
| `sleep_on_it` | da 0 a 39   |

`viral.weights` indica la versione di queste regole, come `viral_lite:1`. Cambia
ogni volta che cambiano le regole. Il punteggio è `null` dopo un'analisi fallita
o saltata. È `null` anche quando manca una risposta predefinita su un tratto. X
Tweet Viral Score Analyzer di Xquik non riempie mai un punteggio mancante con
una stima.

## Stima dell'Algorithm Score

X ha pubblicato i suoi pesi di ranking nel repository `xai-org/x-algorithm`,
file `home-mixer/params/param.rs`. X Tweet Viral Score Analyzer di Xquik ne
applica 4 ai conteggi pubblici di ogni post:

| Conteggio | Peso |
| --------- | ---- |
| Mi piace  | 0.5  |
| Risposta  | 5    |
| Repost    | 1    |
| Citazione | 5    |

`viral.algorithmWeightedSum` è la somma di ogni conteggio per il suo peso.
`viral.algorithmScore` divide quella somma per le visualizzazioni & la
moltiplica per 1.000. Un post senza conteggio delle visualizzazioni usa invece i
follower. `viral.algorithmBasis` indica il divisore, `views` o `followers`.
Confronta solo punteggi con la stessa base. `viral.weightsVersion` indica i
pesi, come `x_algorithm_params:2026-09-18`.

La stima ha questi limiti:

- X moltiplica ogni peso per una probabilità che prevede per un singolo
  utente. L'Actor moltiplica per i conteggi osservati. Il risultato è una
  stima, non il punteggio che calcola X.
- X non pubblica pesi per segnalibri o visualizzazioni. La somma li esclude
  entrambi.
- X usa altri segnali oltre a questi 4, come il tempo di permanenza & le
  condivisioni. I dati pubblici non li mostrano.
- Il punteggio è `null` quando un post non ha visualizzazioni né conteggio dei
  follower.
- L'AI non vede mai questi conteggi. Legge solo il testo & il contesto.

## Previsto contro reale

X Tweet Viral Score Analyzer di Xquik confronta ogni Viral Score con ciò che è
successo. `viral.actualEngagementRate` è
`log10(1 + weighted sum per 1,000 followers)`. Il logaritmo limita l'effetto di
un singolo post molto grande. Il tasso è `null` quando il conteggio dei follower
manca o è 0.

Il blocco `viral.calibration` del riepilogo dell'esecuzione riporta questi
campi:

- `comparedPosts` conta i post con un Viral Score & un tasso reale.
- `rankCorrelation` è una correlazione per ranghi di Spearman da -1 a 1. Mostra
  se a punteggi più alti sono corrisposti tassi più alti.
- `calibrationScore` è 100 volte la correlazione, con minimo 0.
- `overperformers` & `underperformers` elencano fino a 5 post ciascuno. Ognuno
  riporta ID del post, URL, Viral Score, tasso reale & `gap`.

`gap` è il tasso reale standardizzato meno il Viral Score standardizzato. Un
post entra in un elenco quando il suo gap raggiunge 1 deviazione standard.

La calibrazione ha questi limiti:

- Con meno di 10 post confrontati la calibrazione è `null`, con il motivo
  `too_few_posts`. Punteggi o tassi identici danno `no_variation`.
- La correlazione è approssimata.
- La calibrazione descrive una sola esecuzione. Un punteggio basso può voler
  dire che i post differiscono per orario, argomento o pubblico. Non prova che
  la stima sulla formulazione abbia fallito.
- I post recenti non hanno finito di raccogliere engagement. Confronta post di
  età simile.

## Report degli account

Il blocco `viral.accounts` del riepilogo dell'esecuzione riporta ogni nome
utente degli autori:

- Numero di post, Viral Score medio & tasso medio di engagement reale.
- Il post migliore & il peggiore per Viral Score, con ID del post & URL.
- Viral Score medio per fascia. Le fasce sono ora di pubblicazione in UTC,
  lunghezza del testo, presenza di media, presenza di link & self-thread.

Le fasce di lunghezza del testo sono `short`, `medium`, `long` & `extended`.
`short` arriva a 80 caratteri, `medium` a 200 & `long` a 280. `extended` copre
i testi più lunghi. Un post self-thread risponde al proprio autore.

Il report ha questi limiti:

- Il report elenca i 50 nomi utente con più post valutati.
- Il report segue i primi 1.000 nomi utente di un'esecuzione. `untrackedPosts`
  conta i post valutati dei nomi utente successivi & i post senza nome utente.
- Una fascia con pochi post dice poco. Controlla `posts` prima di confrontare
  le medie.
- Le fasce mostrano cosa è andato insieme in questa esecuzione. Non mostrano la
  causa.

## Classifica

Il blocco `viral.leaderboard` del riepilogo dell'esecuzione mette in classifica
i nomi utente del report degli account. `byViralScore` ordina per Viral Score
medio. `byActualEngagementRate` ordina per tasso reale medio. Ogni elenco
contiene fino a 20 nomi utente con `rank`, `posts` & `average`.

La classifica ha questi limiti:

- Un nome utente entra in classifica solo con almeno 3 post valutati.
- L'elenco dei tassi salta i nomi utente senza conteggio dei follower.
- A parità decide il numero di post, poi il nome utente.
- La classifica copre i post di una sola esecuzione, non l'intera storia di un
  account.

## Valuta una bozza prima di pubblicare

Incolla il tuo testo in `texts`. X Tweet Viral Score Analyzer di Xquik lo valuta
& non recupera nulla da X.

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
- `tweet.id` vale `text:1`, `text:2` e così via. `tweet.type` vale `text`.
- Una bozza non ha ancora Mi piace o visualizzazioni, quindi
  `viral.algorithmScore` resta `null`.
- Ogni testo analizzato costa gli stessi $0.0003 di un post analizzato.
- Con `texts` impostato, l'esecuzione analizza solo quei testi. Avvia a parte i
  target di X.

## Quanto costa controllare il viral score?

X Tweet Viral Score Analyzer di Xquik costa da $0.0003 per post analizzato. Non
c'è costo di avvio. Il prezzo include la raccolta, i costi AI & il Viral Score.
Non ti servono account AI, token o chiavi. Il prezzo copre fino a 8 domande &
64.000 byte di contesto per post. Ogni definizione di domanda può usare fino a
8.000 byte.

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
tipi, versioni delle domande & probabilità disponibili. `viral.stops` elenca i
blocchi rigidi che hanno limitato il punteggio. Una riga con un'analisi fallita
o saltata conserva il post raccolto & un `reason`. Il suo elenco di risposte è
vuoto & il suo punteggio è `null`.

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
principale, come `Average Viral Score: 64.` Un confronto senza cambiamenti
riporta `No change since the earlier run.` Anche le esecuzioni grandi o con un
problema scrivono `run-report`, come quelle con `alwaysSaveRunRecords` attivo.
`run-report` ripete il riepilogo sotto `results.analysisSummary`.

Il riepilogo conta le righe analizzate, fallite & saltate. Somma l'engagement &
riassume ogni domanda.

- Il blocco `viral` riporta `averageScore` & il conteggio di ogni verdetto.
  Conta anche le righe con & senza punteggio.
- Lo stesso blocco contiene `calibration`, `accounts` & `leaderboard`, descritti
  sopra.
- Le domande a punteggio riportano una media & una media pesata per
  engagement.
- La suddivisione `reaction` mostra quanti post rientrano in ogni reazione.
- `top` elenca i 3 post con più engagement per ogni reazione.
- Ogni riga elenca `sourceDomains`, gli hostname a cui rimanda.
- Ogni riga elenca i `cashtags` presenti nel testo, come `$NVDA`.
- Con `monitor.baselineDatasetId` impostato, il blocco `monitor` del riepilogo
  conta gli stati del confronto. Elenca fino a 50 righe cambiate.

Un'esecuzione vuota riporta conteggi a 0 & una media `null`.

Ogni riga di risultato riporta anche `viralScore`, `viralVerdict`,
`viralAlgorithmScore` & `viralActualEngagementRate`. Riporta anche `answers`,
una mappa piatta con l'ID della domanda come chiave. Ogni valore è la categoria,
il punteggio o la probabilità scelti. La vista `Viral Score` del dataset & gli
export CSV o Excel mostrano queste colonne. Stanno accanto al post, quindi i
fogli di calcolo non devono leggere JSON. Le righe fallite & saltate riportano
una mappa vuota.

## Confronta con un'esecuzione precedente

Passa `monitor.baselineDatasetId`, l'ID del dataset di un'esecuzione precedente
completata con le stesse impostazioni di analisi. Il confronto legge le righe di
quell'esecuzione. Funziona anche se quell'esecuzione ha saltato il riepilogo.
Ogni riga riceve poi un oggetto `monitor`. Il suo stato può essere:

- `first_run` senza baseline.
- `new_to_baseline` per i post che l'esecuzione precedente non aveva.
- `unchanged` o `changed` per i post che aveva.

`changes` elenca ogni decisione sui tratti passata da `previous` a `current`.
Le decisioni si confrontano per categoria, livello di punteggio arrotondato o
sì/no a 0,5. Una decisione conta come cambiata solo quando si sposta in modo
netto. I quasi pareggi tra esecuzioni restano `unchanged`.

Una baseline sopra `maxBaselineRows`, o con impostazioni diverse, ferma
l'esecuzione prima della raccolta. L'esecuzione scrive poi una riga di
diagnostica. `maxBaselineRows` vale 100.000 di default.

## Esempi di task

Scegli tra 50 task pubblici. Ognuno parte da una ricerca reale in inglese & da
un `maxItems` limitato. Usa la vista `Viral Score` del dataset. Alcuni
aggiungono il contesto sul pubblico. Modifica la ricerca o il contesto prima di
avviarlo.

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

Gli altri task, nella pagina dell'Actor, coprono altri argomenti & account di
brand.

## FAQ & supporto

### Serve un account AI, una chiave API X o il login?

No. X Tweet Viral Score Analyzer di Xquik include i costi AI nel prezzo. Non ti
servono account AI, token o chiavi. Non ti servono nemmeno chiave API X, login o
credenziali.

### Un punteggio alto significa che un tweet diventerà virale?

No. Il punteggio stima quanto funziona la formulazione per un lettore generico.
Anche orario, dimensione del pubblico, media & fortuna decidono la diffusione.
Confronta i punteggi con i conteggi reali di engagement di ogni riga prima di
fidarti.

### Posso usare le mie domande?

Sì. Le `analysis.questions` personalizzate sostituiscono quelle predefinite.
Invia da 1 a 8 domande `choice`, `score` o `probability`. Le domande `choice`
accettano da 2 a 255 categorie. Le domande `score` richiedono almeno 2 livelli
ordinati. Il Viral Score richiede tutte le 8 domande predefinite, quindi con
domande personalizzate resta `null`.

### Perché una riga ha `analysis.status` `failed` o `skipped`?

L'Actor ha raccolto & consegnato il post, ma l'analisi AI non si è completata.
`analysis.reason` indica la causa. `context_limit` significa che contesto &
target non lasciano spazio al post. `service_unavailable` significa che il
servizio di analisi era momentaneamente non disponibile. Queste righe non hanno
addebiti sul risultato né punteggio. Accorcia `analysis.context` o riavvia gli
ID interessati.

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
risposte con la stessa struttura.

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
[scheda API](https://apify.com/xquik/x-tweet-viral-score-analyzer/api) per
esempi in Python, JavaScript & cURL. Usa le
[pianificazioni](https://docs.apify.com/platform/schedules) di Apify per le
esecuzioni ricorrenti. Passa l'ID del dataset precedente come
`monitor.baselineDatasetId` per vedere cosa è cambiato. Le integrazioni di Apify
collegano le esecuzioni anche a webhook, Make, Zapier, n8n & Google Sheets.

### Dove trovo assistenza?

Apri una issue nella pagina dell'Actor o scrivi a support@xquik.com con l'ID
dell'esecuzione. La diagnostica gratuita nel key-value store spiega le
esecuzioni vuote, parziali o interrotte.

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
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  monitora le menzioni del brand con rilevanza, sentiment & risposte sulla
  customer experience generate con AI, poi confronta le esecuzioni. Usalo
  quando osservi un brand nel tempo. Da $0.0003 per post analizzato.
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
