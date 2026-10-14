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

## Migra da un altro Actor di sentiment

Usa 1 nome per impostazione quando adatti un input esistente.

| Nome dell'input esistente                           | Campo Xquik      |
| --------------------------------------------------- | ---------------- |
| `query`, `searchQuery`                              | `twitterContent` |
| `queries`, `searchQueries`, `search`                | `searchTerms`    |
| `handles`, `usernames`, `username`, `profileTweets` | `twitterHandles` |
| `tweetUrls`, `postUrls`, `urls`                     | `startUrls`      |
| `tweetIDs`, `tweet_ids`, `postIds`, `tweetId`       | `tweetIds`       |
| `maxTweets`, `maxResults`, `count`, `max_posts`     | `maxItems`       |
| `sort`                                              | `queryType`      |
| `tweetLanguage`, `language`                         | `lang`           |
| `startDate`, `endDate`                              | `since`, `until` |

L'Actor accetta direttamente questi nomi comuni. Legge anche i nomi dei filtri
di altri Actor di tweet. Un filtro senza campo qui diventa un operatore di
ricerca di X in ogni ricerca dell'esecuzione, & il log dell'esecuzione elenca
questi operatori all'inizio. Usa `Latest` o `Top` per `sort`. Mantieni i codici
lingua & i limiti di data. I limiti valgono per tutti i target insieme. Questo
input è pronto da avviare:

```json
{ "searchTerms": ["from:NASA"], "sort": "Latest", "maxItems": 5 }
```

Gli altri input vanno convertiti prima dell'esecuzione.

Inserisci un singolo `tweetUrl` in `startUrls`:

```json
{ "startUrls": ["https://x.com/NASA/status/2105727882588807607"] }
```

Metti `text`, `Texts`, stringhe di dataset o stringhe di file in `texts`:

```json
{ "texts": ["Support fixed my issue. Thank you."] }
```

Trasforma `hashtag` o `cashtag` in stringhe di ricerca:

```json
{ "searchTerms": ["#Artemis lang:en", "$AAPL lang:en"], "maxItems": 5 }
```

Sostituisci `minLikes`, `minReplies` & `minRetweets` con questi nomi di campo:

```json
{ "min_faves": 10, "min_replies": 2, "min_retweets": 3 }
```

I risultati conservano il record originale in `tweet` & le risposte in
`analysis.answers`. Associa le etichette positive, negative & neutre alle
categorie di sentiment corrispondenti. Mantieni `mixed` & `unclear` come
categorie separate. Altri punteggi di sentiment possono usare scale &
significati diversi. L'intensità di Xquik va da 0 a 2 & può includere decimali.
Il sarcasmo è una probabilità. La fiducia descrive la certezza di una risposta.

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

Scegli tra 50 task pubblici. Parti dall'esempio che corrisponde alla tua
domanda. La maggior parte dei task usa limiti bassi. Le 2 ricerche con date
richiedono 50 post. Apri un task per usare il suo input salvato. Gli input
pronti da copiare & i risultati osservati qui sotto ti aiutano a scegliere le
impostazioni.

Ogni riga riuscita restituisce sentiment, intensità & probabilità di sarcasmo.
Ognuna conserva il post originale o il testo fornito accanto alle risposte.
Questi esempi usano input in inglese & filtri di lingua. Un'etichetta di lingua
può comunque non cogliere il testo in un'altra lingua dentro un post o una
citazione.

Senza target, una risposta descrive l'argomento principale del post. La menzione
di una parola chiave può riguardare altro. Con più target, la risposta di
sentiment li descrive insieme. Non restituisce una risposta separata per ogni
target.

I Mi piace di un profilo possono essere nascosti. Se non sono disponibili, usa
le risposte o i post del profilo.

I risultati di ricerca possono includere annunci, promozioni, battute & testo
ripetuto. ID di post distinti non provano reazioni indipendenti o identità dei
clienti. Le frasi di opinione & i filtri di engagement selezionano un campione.
Esamina i post prima di contarli come feedback. L'analisi non verifica le loro
affermazioni.

### Input dei task testati

Apri un task. La sua scheda Input ha campi visuali & JSON. Copia il JSON o
modifica i campi prima di avviarlo.
[Apify spiega gli input dei task](https://docs.apify.com/actors/running/tasks).

Le date dei test usano UTC. I risultati descrivono l'esecuzione registrata, non
una disponibilità garantita. Gli esempi con date da 50 post mostrano perché ID
unici non equivalgono a opinioni indipendenti.

#### Bozze di recensione del finale

[Season finale review texts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-season-finale-reactions)

Separa gli elogi dalle critiche nelle tue bozze di recensione del finale.
Osservati 3 testi forniti unici il 2026-10-01. Limite: 3. Sono i tuoi testi
illustrativi, non una ricerca sul pubblico.

#### Discussione sul lancio di un telefono

[September 2026 iPhone launch posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-iphone-launch-posts)

Esamina la discussione sul lancio in una finestra di date fissa di settembre.
Osservati 5 post unici il 2026-10-01. Limite: 5. Possono corrispondere sia
annunci sia opinioni personali.

#### Recensioni dello show dell'intervallo

[Halftime show review texts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-super-bowl-halftime-show)

Controlla giudizi misti e sarcasmo nelle tue recensioni dell'intervallo.
Osservati 3 testi forniti unici il 2026-10-01. Limite: 3. Sono le tue recensioni
illustrative, non reazioni dal vivo allo show.

#### Esperienze con le auto elettriche

[Electric car experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-new-electric-car)

Trova post sulla guida o sulla scelta di un'auto elettrica. Osservati 5 post
unici il 2026-10-01. Limite: 5. Le frasi personali possono corrispondere a
battute o racconti di seconda mano.

#### Discussione sui film

[Marvel movie discussion posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-marvel-movie-audiences)

Esamina la discussione sui film prima di selezionare i commenti del pubblico.
Osservati 5 post unici il 2026-10-01. Limite: 5. Marvel può corrispondere a usi
della parola non correlati.

#### Didascalie dei media di un'artista

[Taylor Swift media caption tone](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-taylor-swift-album-reactions)

Esamina le parole dell'artista accanto ai media recenti. Osservati 5 post unici
il 2026-10-01. Limite: 5. Le didascalie non possono descrivere tutto ciò che
immagini o video mostrano.

#### Thread sull'uscita di un gioco

[Game release update thread](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-video-game-launch)

Leggi un annuncio accanto alle risposte sui giochi concorrenti. Osservati 5 post
unici il 2026-10-01. Limite: 5. Il thread cita più giochi e include il suo post
di apertura.

#### Discussione sul lavoro da remoto

[Remote work discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-remote-work)

Confronta gli atteggiamenti espressi nella discussione sul lavoro da remoto.
Osservati 5 post unici il 2026-10-01. Limite: 5. Possono comparire annunci di
lavoro e opinioni ripetute.

#### Post sulle compagnie aeree

[Airline discussion posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-airline-passengers)

Esamina le menzioni delle compagnie aeree prima di scegliere il feedback sul
servizio. Osservati 5 post unici il 2026-10-01. Limite: 5. Una menzione non
prova che l'autore sia un passeggero.

#### Discussione sul football universitario

[College football discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-college-football-fans)

Separa le opinioni dei tifosi dalla promozione del football universitario.
Osservati 5 post unici il 2026-10-01. Limite: 5. Anteprime e promozioni possono
corrispondere accanto alle opinioni dei tifosi.

#### Discussione sui tassi di interesse

[Interest rate discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-interest-rates)

Esamina gli atteggiamenti su mercato e politiche intorno ai tassi di interesse.
Osservati 5 post unici il 2026-10-01. Limite: 5. L'argomento principale può
essere un politico o il mercato.

#### Discussione sui monopattini

[Electric scooter discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-electric-scooters)

Trova la discussione sui monopattini prima di scegliere il feedback di chi li
usa. Osservati 5 post unici il 2026-10-01. Limite: 5. Pubblicità, ricerche e
battute possono corrispondere accanto alle esperienze personali.

#### Esperienze al ristorante

[New restaurant experiences](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-restaurant-openings)

Esamina le formulazioni in prima persona sui nuovi ristoranti. Osservati 5 post
unici il 2026-10-01. Limite: 5. Le formulazioni personali possono comparire
anche in inviti o consigli.

#### Tono del feed di una lista pubblica

[Public list feed tone](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-ai-coding-assistants)

Esamina il tono dei post in una lista pubblica. Osservati 5 post unici il
2026-10-01. Limite: 5. I membri possono parlare di altri argomenti e fare repost
delle parole di un'altra persona.

#### Risposte del profilo di un dispositivo

[Google device profile reply tone](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-smart-home-device-owners)

Esamina i testi del profilo di un dispositivo, risposte incluse. Osservati 5
post unici il 2026-10-01. Limite: 5. Il contesto mancante del post padre può
limitare il significato di una risposta del profilo.

#### Allenamento per la maratona

[Marathon training discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-marathon-runners)

Trova gli atteggiamenti negli aggiornamenti sull'allenamento e nei piani per la
maratona. Osservati 5 post unici il 2026-10-01. Limite: 5. Piani e promozione
possono comparire accanto agli aggiornamenti dei runner.

#### Pianificazione di un viaggio

[Personal Tokyo trip posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-tourist-destinations)

Esamina piani di viaggio personali e racconti di viaggio. Osservati 5 post unici
il 2026-10-01. Limite: 5. Eventi con Tokyo nel nome possono corrispondere senza
descrivere un viaggio in Giappone.

#### Discussione sui prezzi dello streaming

[Netflix price discussion posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-streaming-price-increases)

Trova le preoccupazioni sul prezzo di Netflix prima di esaminare i motivi di
disdetta. Osservati 5 post unici il 2026-10-01. Limite: 5. Le frasi sul prezzo
selezionano preoccupazioni, non un campione rappresentativo di spettatori.

#### Acquisti di materiale scolastico

[August 2026 school supply posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-back-to-school-shoppers)

Esamina 50 post sul materiale scolastico in una finestra di agosto. Osservati 50
post unici il 2026-10-01. Limite: 50. Nella nostra revisione, i 50 ID
includevano 42 righe chiaramente pertinenti.

#### Ritardi dei treni

[Train delay experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-public-transit)

Trova lamentele ed esperienze legate ai treni in ritardo. Osservati 5 post unici
il 2026-10-01. Limite: 5. Le frasi personali possono non cogliere gli avvisi
ufficiali.

#### Discussione sul cibo per animali

[Pet food experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-pet-food-brands)

Esamina le menzioni del cibo per animali in una discussione più ampia sulla
cura. Osservati 5 post unici il 2026-10-01. Limite: 5. Le discussioni sulla cura
o veterinarie possono citare marche di cibo per inciso.

#### Post selezionati sui fantasy sport

[Fantasy sports post batch](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-fantasy-football-apps)

Analizza un gruppo selezionato di post sui fantasy sport. Osservati 2 post unici
il 2026-10-01. Limite: 2. Le etichette riguardano l'argomento di ogni post, non
automaticamente un'app.

#### Esperienze in caffetteria

[Coffee shop experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-coffee-shop-customers)

Trova i commenti sulle caffetterie prima di selezionare il feedback dei clienti.
Osservati 5 post unici il 2026-10-01. Limite: 5. Le lamentele degli autori
restano affermazioni non verificate.

#### Mercato immobiliare

[Housing market discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-housing-market)

Esamina opinioni e notizie sul mercato immobiliare. Osservati 5 post unici il
2026-10-01. Limite: 5. Notizie e opinioni possono riguardare aspetti diversi del
mercato.

#### Discussione sui tornei

[League of Legends tournament posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-esports-tournament-viewers)

Separa la discussione sul torneo dalla promozione di biglietti o partite.
Osservati 5 post unici il 2026-10-01. Limite: 5. Le pubblicità dei biglietti e
le cronache delle partite non sono opinioni degli spettatori.

#### Post di un editore di podcast

[Podcast publisher post tone](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-podcast-episodes)

Esamina i messaggi dell'editore del podcast. Osservati 5 post unici il
2026-10-01. Limite: 5. Il tono dell'editore non misura la soddisfazione degli
ascoltatori.

#### Confronti tra palestre

[Gym comparison review texts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-gym-memberships)

Controlla l'atteggiamento complessivo verso 2 palestre nelle tue recensioni.
Osservati 3 testi forniti unici il 2026-10-01. Limite: 3. Entrambi i target
condividono 1 risposta di sentiment per testo.

#### Noleggio auto

[Car rental experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-car-rental-customers)

Trova i commenti sul noleggio auto prima di esaminare i problemi del servizio.
Osservati 5 post unici il 2026-10-01. Limite: 5. Richieste e promozioni possono
corrispondere accanto ai racconti di chi noleggia.

#### Discussione sui campus

[University cost and campus posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-university-life)

Esamina la discussione sui campus prima di selezionare i post sui costi.
Osservati 5 post unici il 2026-10-01. Limite: 5. Notizie e critiche sui campus
non provano le esperienze degli studenti.

#### Organizzazione del matrimonio

[Personal wedding planning posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-wedding-planning-posts)

Trova le formulazioni in prima persona su piani e costi del matrimonio.
Osservati 5 post unici il 2026-10-01. Limite: 5. Storie, battute e accenni
casuali possono corrispondere accanto alle esperienze di organizzazione.

#### Esperienze di ricarica

[EV charging experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-ev-charging-experiences)

Esamina le esperienze di ricarica nella discussione sui veicoli elettrici.
Osservati 5 post unici il 2026-10-01. Limite: 5. La ricarica può essere
secondaria rispetto a un altro problema del veicolo.

#### Discussione sulla dichiarazione dei redditi

[Spring 2026 TurboTax filing posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-tax-filing-software)

Esamina la discussione sulla dichiarazione in una finestra di date fissa di
primavera. Osservati 5 post unici il 2026-10-01. Limite: 5. I post non
verificano le tariffe o le regole fiscali attuali.

#### Visite ai parchi a tema

[Theme park visit discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-theme-park-visitors)

Trova le menzioni dei parchi a tema prima di scegliere le reazioni alle visite.
Osservati 5 post unici il 2026-10-01. Limite: 5. I riferimenti casuali possono
corrispondere a post più lunghi su un altro argomento.

#### Spesa alimentare

[Grocery budget experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-grocery-prices)

Trova i commenti in prima persona sulla spesa alimentare. Osservati 5 post unici
il 2026-10-01. Limite: 5. Discussioni più ampie su politica, nutrizione o
creator possono citare la spesa alimentare.

#### Discussione sulle fotocamere

[Phone camera discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-phone-camera-reviews)

Esamina le menzioni della fotocamera accanto a foto, recensioni e annunci.
Osservati 5 post unici il 2026-10-01. Limite: 5. Le menzioni della fotocamera
possono essere casuali in altri annunci.

#### Post selezionato sulle sneaker

[A selected sneaker post](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-sneaker-drop-reactions)

Analizza un post noto senza una ricerca ampia per parola chiave. Osservato 1
post unico il 2026-10-01. Limite: 1. Questa didascalia selezionata non descrive
ogni dettaglio della sua immagine.

#### Chatbot di assistenza

[Support chatbot discussion posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-customer-support-chatbots)

Trova la discussione sui chatbot di assistenza prima di selezionare le lamentele
sul servizio. Osservati 5 post unici il 2026-10-01. Limite: 5. Possono
corrispondere anche bot di supporto emotivo e risposte delle aziende.

#### Discussione sui festival

[April 2026 Coachella discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-music-festival-attendees)

Esamina 50 post sul festival in una finestra di aprile. Osservati 50 post unici
il 2026-10-01. Limite: 50. I 50 ID includevano 47 righe pertinenti e testi di
notizie ripetuti.

#### Bollette dell'elettricità

[Electricity bill discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-electric-bills)

Esamina i costi personali dell'elettricità accanto alla discussione sulle
politiche. Osservati 5 post unici il 2026-10-01. Limite: 5. Le affermazioni
sulle politiche e le previsioni sui prezzi restano non verificate.

#### Cambi di roster nel basket

[NBA trade and signing discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-nba-trade-reactions)

Trova la discussione su scambi e ingaggi prima di scegliere le reazioni dei
tifosi. Osservati 5 post unici il 2026-10-01. Limite: 5. Altre notizie possono
citare giocatori o squadre per inciso.

#### Discussione sui soggiorni

[Airbnb stay discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-airbnb-stays)

Metti a fuoco gli atteggiamenti verso Airbnb nella discussione sui soggiorni.
Osservati 5 post unici il 2026-10-01. Limite: 5. Promozioni degli host e post
sull'app possono comparire accanto ai racconti degli ospiti.

#### Reazioni ai libri

[Book reading reaction posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-book-club-readers)

Esamina le reazioni alla lettura senza presumere l'appartenenza a un club del
libro. Osservati 5 post unici il 2026-10-01. Limite: 5. Possono corrispondere
sia confronti con i film sia opinioni personali di lettura.

#### Esperienze con i meal kit

[HelloFresh experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-meal-kit-services)

Trova i commenti sui meal kit prima di esaminare le esperienze con il prodotto.
Osservati 5 post unici il 2026-10-01. Limite: 5. Piani, pubblicità e racconti
personali più ampi possono citare il brand.

#### Discussione sulle gare

[Formula 1 race discussion posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-formula-one-race-weekends)

Esamina la discussione sulla gara accanto alle dichiarazioni di team e piloti.
Osservati 5 post unici il 2026-10-01. Limite: 5. Le dichiarazioni dei piloti
citate possono ripetersi in ID diversi.

#### Esperienze con le app di incontri

[Dating app experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-dating-app-experiences)

Trova esperienze con le app di incontri, commenti sui match e battute. Osservati
5 post unici il 2026-10-01. Limite: 5. Commenti sui match e battute non
verificano l'identità dei clienti.

#### Post sulle attese in aeroporto

[Airport wait and lounge posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-airport-travelers)

Esamina i commenti sulle attese in aeroporto accanto agli avvisi di viaggio.
Osservati 5 post unici il 2026-10-01. Limite: 5. Gli avvisi ufficiali possono
comparire accanto alle esperienze personali di attesa.

#### Discussione sulle mense scolastiche

[School lunch discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-school-lunch-programs)

Esamina post personali e dibattito sulle politiche per le mense scolastiche.
Osservati 5 post unici il 2026-10-01. Limite: 5. Tra gli autori possono esserci
istituzioni, non solo genitori.

#### Degustazione di birra

[Craft beer tasting posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-craft-beer-drinkers)

Trova le opinioni sulle degustazioni di birra prima di scegliere gli esempi di
recensione. Osservati 5 post unici il 2026-10-01. Limite: 5. Didascalie brevi
con link possono non avere contesto sufficiente per un atteggiamento chiaro.

#### Citazioni dell'annuncio di un attracco

[SpaceX docking announcement quotes](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-space-launches)

Esamina le citazioni di un annuncio di attracco dopo un orario fisso. Osservati
5 post unici il 2026-10-01. Limite: 5. Le citazioni possono essere inviti o
descrizioni neutre, non solo reazioni.

#### Risposte di compleanno

[NASA birthday replies](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-replies-to-a-news-post)

Esamina le risposte dirette a un post di compleanno. Osservati 5 post unici il
2026-10-01. Limite: 5. Il contesto mancante del post radice può limitare il
significato dell'analisi di una risposta.

Tieni `maxItems` basso mentre controlli i risultati. Un limite riduce l'output,
non la disponibilità. Se meno post soddisfano i criteri, controlla il report
dell'esecuzione prima di cambiare i filtri. Allarga 1 impostazione alla volta,
come le date o una soglia di engagement. Annota l'impostazione che hai cambiato.

Per le analisi fallite, controlla `analysis.reason` & riprova solo gli ID
interessati. Per le risposte incomplete, controlla la diagnostica gratuita prima
di considerarle complete. Le didascalie dei media non possono descrivere tutto
ciò che un'immagine o un video mostra. La mancanza del contesto di citazione o
risposta può rendere incerta una risposta.

## Actor Xquik correlati

Ogni Actor Xquik usa lo stesso motore di estrazione, fattura dopo i filtri &
offre la stessa diagnostica. Scegli quello adatto ai dati che ti servono.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper) estrae post da
  ricerche, timeline dei profili, liste & ID dei post con oltre 50 filtri &
  export piatti. Usalo quando ti servono dati sui post senza analisi. Da
  $0.00015 per riga.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper) estrae profili
  con i relativi post, risposte, media & follower da nomi utente, ID o URL.
  Usalo quando parti dagli account invece che dalle ricerche. Da $0.00015 per
  riga.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper) estrae risposte,
  commenti & intere conversazioni sotto i post con oltre 25 filtri. Usalo quando
  ti serve la discussione sotto i post. Da $0.00015 per riga.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper) estrae
  risposte, citazioni, utenti che hanno fatto repost & thread da URL o ID di
  post in blocco. Usalo quando misuri chi ha interagito con i post. Da $0.00015
  per riga.
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper)
  estrae i post che citano altri post, con testo, media, conteggi, autori & 11
  filtri. Usalo quando studi chi ha citato dei post & cosa ha detto. Da $0.00015
  per post.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper) estrae
  follower, following, membri & follower delle liste e membri delle community
  come righe di profilo. Usalo quando ti servono elenchi di pubblico o di
  membri. Da $0.00015 per profilo.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper) cerca
  utenti per nome utente, bio & posizione con filtri su follower, verifica, età
  & posizione. Usalo quando costruisci elenchi di account dalla ricerca. Da
  $0.00015 per profilo.
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper)
  verifica dove hanno sede gli account con l'etichetta "Posizione account" di X,
  il modo in cui si sono collegati a X & i cambi di nome utente. Usalo quando ti
  serve verificare dove hanno sede gli account. Da $0.00015 per account.
- [X Email Scraper](https://apify.com/xquik/x-email-scraper) ottiene le email, i
  numeri di telefono & i link che gli account pubblicano sui propri profili, da
  nomi utente, follower o ricerche di utenti. Usalo quando ti servono le email
  che i profili pubblicano. Da $0.00015 per profilo.
- [X List Scraper](https://apify.com/xquik/x-list-scraper) estrae post, membri &
  follower delle liste da URL o ID delle liste. Usalo quando una lista curata
  definisce le tue fonti. Da $0.00015 per riga.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper) estrae
  informazioni, post, ricerche, membri & moderatori delle community. Usalo
  quando le tue fonti sono community di X. Da $0.00015 per riga.
- [X Space Scraper](https://apify.com/xquik/x-space-scraper) trova gli Spazi per
  parola chiave & ne legge titoli, stati, orari, numero di ascoltatori, host &
  relatori. Legge anche le trasmissioni tramite URL o ID. Usalo quando segui
  audio & video in diretta su X. Da $0.00015 per Spazio o trasmissione.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper) estrae le
  tendenze in tempo reale per località con posizione in classifica, volume,
  query & WOEID. Usalo quando segui cosa è di tendenza e dove. Da $0.00015 per
  tendenza.
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper) estrae le offerte di
  lavoro di X per parola chiave, luogo, modalità di lavoro, livello di
  esperienza & azienda, con stipendi & link di candidatura. Usalo quando
  raccogli le offerte di lavoro pubblicate su X. Da $0.00015 per offerta.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper) raccoglie gli
  articoli lunghi di X come Markdown & testo, con copertine, autori, date &
  metriche. Usalo quando ti serve il corpo degli articoli, non i post. Da
  $0.00015 per articolo.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader) estrae o
  archivia foto, video & GIF da post o profili con opzioni MP4 & metadati. Usalo
  quando ti servono i file multimediali veri e propri. Da $0.00015 per riga di
  media.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring)
  monitora le menzioni del brand con rilevanza, sentiment & risposte sulla
  customer experience generate con AI, poi confronta le esecuzioni. Usalo quando
  osservi un brand nel tempo. Da $0.0003 per post analizzato.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)
  etichetta con AI la posizione rialzista, ribassista, neutra o mista, il tipo
  di contenuto, la convinzione & la rilevanza per l'asset. Usalo quando segui
  azioni, crypto o discussioni di trading. Da $0.0003 per post analizzato.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)
  etichetta con AI i post di notizie per formato, attribuzione della fonte &
  rilevanza dell'argomento. Usalo quando separi le notizie dai commenti. Da
  $0.0003 per post analizzato.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)
  risponde con AI alle tue domande di categoria, punteggio & sì/no su ogni post.
  Usalo quando le analisi preimpostate non si adattano alle tue etichette. Da
  $0.0003 per post analizzato.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)
  stima un Viral Score da 0 a 100 & un verdetto per ogni post da 8 risposte AI
  sui suoi tratti. Usalo quando studi perché i post si diffondono o falliscono.
  Da $0.0003 per post analizzato.

## FAQ & supporto

Le risposte alle domande più comuni, poi dove trovare assistenza.

### Serve un account AI, una chiave API X o il login?

No. X Tweet Sentiment Analysis di Xquik include i costi AI nel prezzo. Non ti
servono account AI, token o chiavi. Non ti servono nemmeno chiave API X, login o
credenziali.

### Posso usare le mie domande?

Sì. Le `analysis.questions` personalizzate sostituiscono quelle predefinite.
Invia da 1 a 8 domande `choice`, `score` o `probability`. Le domande a scelta
accettano da 2 a 255 categorie. Le domande a punteggio richiedono almeno 2
livelli ordinati. Usa le stesse domande nelle esecuzioni che vuoi confrontare.

### Perché una riga è tornata con un'analisi fallita o saltata?

`analysis.status` vale `failed` o `skipped`. L'Actor ha raccolto & consegnato il
post, ma l'analisi AI non si è completata. `analysis.reason` indica la causa.
`context_limit` significa che contesto & target non lasciano spazio al post.
`service_unavailable` significa che il servizio di analisi era momentaneamente
non disponibile. Queste righe non hanno addebiti sul risultato. Accorcia
`analysis.context` o riavvia gli ID interessati.

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
