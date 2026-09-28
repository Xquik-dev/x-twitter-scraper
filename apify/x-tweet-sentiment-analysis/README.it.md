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
i dati X più completi. X Tweet Sentiment Analysis di Xquik aggiunge
atteggiamento, intensità & sarcasmo a ogni post (tweet). La maggior parte degli
altri Actor Apify fa pagare prima di filtrare o deduplicare. Xquik fa pagare
solo i risultati consegnati, unici e conformi ai filtri. I costi AI sono inclusi
nel prezzo per post. Non ti servono account AI, token o chiavi.

Misura l'atteggiamento dietro i post di X (Twitter) & conserva i dati originali
del post. **X Tweet Sentiment Analysis with AI** di Xquik raccoglie i post
pertinenti. A ogni post aggiunge con AI una categoria di sentiment, un livello
di intensità & una probabilità di sarcasmo. Segui le reazioni a un lancio, una
campagna, un episodio o un personaggio pubblico. Separa le reazioni forti dalle
menzioni di passaggio.

- **Sentiment per post.** Ogni post riceve la sua categoria, così puoi
  verificare ogni risposta.
- **Intensità.** Un livello da 0 a 2 separa i post enfatici da quelli pacati.
- **Probabilità di sarcasmo.** Segnala i post in cui il testo letterale
  contraddice l'atteggiamento.
- **Record di origine completi.** Ogni riga conserva tutti i campi che il post
  rende disponibili.

> Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.
> "Twitter" e "X" sono marchi di X Corp.

## Come analizzare il sentiment dei tweet

1. Aggiungi termini di ricerca, nomi utente dei profili, URL o ID dei post.
2. Imposta `maxItems` & i filtri di estrazione che servono al tuo task.
3. Lascia vuoto `analysis.targets` per giudicare ogni post sul suo argomento.
   Per concentrarti su un brand, un prodotto o una persona, aggiungi i suoi nomi
   & alias.
4. Avvia l'esecuzione & apri il dataset.

```json
{
  "searchTerms": ["\"season finale\" lang:en"],
  "maxItems": 200,
  "analysis": { "context": "Reactions to the show, not spoilers." }
}
```

### Cosa risponde l'Actor

| Domanda   | Risposta                                                         |
| --------- | ---------------------------------------------------------------- |
| Sentiment | Positivo, negativo, misto, neutro o poco chiaro                  |
| Intensità | 0 menzione di passaggio, 1 atteggiamento chiaro, 2 tono enfatico |
| Sarcasmo  | Probabilità che il testo letterale contraddica l'atteggiamento   |

Con i target, il sentiment giudica l'atteggiamento verso di loro. Usa anche il
contesto di citazione o risposta che fornisci. Senza target giudica l'argomento
principale del post.

## Analizza il tuo testo

Incolla in `texts` le tue bozze, risposte, recensioni o note. X Tweet Sentiment
Analysis di Xquik le analizza. Non recupera nulla da X.

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

## Quanto costa analizzare il sentiment dei tweet?

X Tweet Sentiment Analysis di Xquik costa da $0.0003 per post analizzato. Non
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

Ogni risultato contiene `tweet` & `analysis`. Le risposte includono tipi,
versioni delle domande & probabilità disponibili. Una riga con un'analisi
fallita o saltata conserva il post raccolto & un `reason`. Il suo elenco di
risposte è vuoto.

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
principale, come `Top sentiment: positive in 3 of 5 results.` Un confronto senza
cambiamenti riporta `No change since the earlier run.` Anche le esecuzioni
grandi o con un problema scrivono `run-report`, come quelle con
`alwaysSaveRunRecords` attivo. `run-report` ripete il riepilogo sotto
`results.analysisSummary`.

Il riepilogo conta le righe analizzate, fallite & saltate. Somma l'engagement &
riassume ogni domanda.

- La suddivisione `sentiment` mostra quanti post rientrano in ogni
  atteggiamento.
- `engagementShares` pesa la stessa suddivisione per Mi piace, repost, risposte
  & citazioni.
- `top` elenca i 3 post con più engagement per ogni atteggiamento.
- Ogni riga elenca `sourceDomains`, gli hostname a cui rimanda.
- Ogni riga elenca i `cashtags` presenti nel testo, come `$NVDA`.
- Con `monitor.baselineDatasetId` impostato, il blocco `monitor` del riepilogo
  conta gli stati del confronto. Elenca fino a 50 righe cambiate.

Il riepilogo arrotonda i numeri a 4 decimali. Un'esecuzione vuota riporta
conteggi a 0 & medie `null`.

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
Ogni riga riceve poi un oggetto `monitor`. Il suo stato può essere:

- `first_run` senza baseline.
- `new_to_baseline` per i post che l'esecuzione precedente non aveva.
- `unchanged` o `changed` per i post che aveva.

`changes` elenca ogni decisione di sentiment, livello di intensità o sarcasmo
passata da `previous` a `current`. Le decisioni si confrontano per categoria,
livello di punteggio arrotondato o sì/no a 0,5. Una decisione conta come
cambiata solo quando si sposta in modo netto. I quasi pareggi tra esecuzioni
restano `unchanged`.

Una baseline sopra `maxBaselineRows`, o con impostazioni diverse, ferma
l'esecuzione prima della raccolta. L'esecuzione scrive poi una riga di
diagnostica. `maxBaselineRows` vale 100.000 di default.

## Esempi di task

Scegli tra 50 task pubblici. Ognuno parte da una ricerca reale in inglese & da
un `maxItems` limitato. Include target & contesto già pronti, più la vista
overview del dataset. Modifica la ricerca o i target prima di avviarlo.

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
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  monitora le menzioni del brand con rilevanza, sentiment & risposte sulla
  customer experience generate con AI, poi confronta le esecuzioni. Usalo
  quando osservi un brand nel tempo. Da $0.0003 per post analizzato.
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

No. X Tweet Sentiment Analysis di Xquik include i costi AI nel prezzo. Non ti
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
[scheda API](https://apify.com/xquik/x-tweet-sentiment-analysis/api) per esempi
in Python, JavaScript & cURL. Usa le
[pianificazioni](https://docs.apify.com/platform/schedules) di Apify per le
esecuzioni ricorrenti. Passa l'ID del dataset precedente come
`monitor.baselineDatasetId` per vedere cosa è cambiato. Le integrazioni di Apify
collegano le esecuzioni anche a webhook, Make, Zapier, n8n & Google Sheets.

### Dove trovo assistenza?

Apri una issue nella pagina dell'Actor o scrivi a support@xquik.com con l'ID
dell'esecuzione. La diagnostica gratuita nel key-value store spiega le
esecuzioni vuote, parziali o interrotte.
