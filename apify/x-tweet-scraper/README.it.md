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

Xquik è il servizio di scraping X (Twitter) più veloce & economico al mondo,
con i dati X più completi. X Tweet Scraper raccoglie tweet, risposte, profili,
liste & ricerche con oltre 50 filtri. Ogni altro Actor Apify addebita il costo
prima di filtrare o deduplicare. Xquik addebita solo i risultati consegnati,
unici & corrispondenti ai filtri.

Estrai tweet pubblici di X (Twitter) a partire da **$0.00015 per risultato
consegnato su ogni piano Apify**. Apify fattura l'uso della piattaforma
separatamente. Nessun login X, costo di avvio o costo per query. Realizzato da
[Xquik](https://xquik.com).

> Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.
> "Twitter" e "X" sono marchi di X Corp.

## Cosa fa X Tweet Scraper?

X Tweet Scraper restituisce tweet, metriche di coinvolgimento, profili pubblici
degli autori e contenuti multimediali. Accetta URL, handle, ID di liste, ID di
tweet e query di ricerca con oltre 50 filtri.

### Comportamento principale

- Filtri e rimozione dei duplicati vengono eseguiti prima della fatturazione.
- Un solo input supporta ricerche mirate, timeline, liste, ricerca e modalità
  di coinvolgimento.
- Gli input con ID tweet non hanno un limite di conteggio fisso. Si applicano
  le impostazioni di spesa e timeout di Apify.
- I log dell'esecuzione mostrano i tempi di ogni pagina in `fetchDurationMs`,
  `processingDurationMs`, `pushDurationMs`, `statusDurationMs` e
  `fullPageDurationMs`.
- Se Apify riavvia l'esecuzione, le righe consegnate e i progressi restano
  salvati.

### Usa sempre la build più recente

Seleziona `latest` per ogni esecuzione per ricevere tutte le correzioni
pubblicate.

Se non specifichi alcuna build, Apify usa il valore predefinito
`latest` di questo Actor. Le esecuzioni dalla Console e gli esempi API
standard ereditano questo valore predefinito.

I task salvati possono sovrascrivere il valore predefinito dell'Actor. Le
pianificazioni e le integrazioni dei task riutilizzano questa scelta. Mantieni
ogni override impostato su `latest`.

Apify non reindirizza i numeri di build esatti a `latest`. Sostituisci i
numeri fissati con `latest`. Usa una build esatta solo per un rollback
temporaneo o per la riproducibilità.

Leggi la documentazione Apify su
[tag di build](https://docs.apify.com/platform/actors/development/builds-and-runs/builds),
[opzioni di esecuzione](https://docs.apify.com/platform/actors/running/runs-and-builds)
e [documentazione dei task](https://docs.apify.com/platform/actors/running/tasks).

## Esempi di task

Scegli tra 50 task pubblici. Ognuno ha un input limitato e una vista dataset
corrispondente. Ogni task si apre con una ricerca o un target reale. Modificalo
prima di eseguirlo.

- [Fetch fresh X posts for AI agents](https://apify.com/xquik/x-tweet-scraper/examples/search-x-posts-for-ai-agents)
- [Build an X dataset for RAG](https://apify.com/xquik/x-tweet-scraper/examples/build-x-rag-dataset)
- [Extract an X article for RAG](https://apify.com/xquik/x-tweet-scraper/examples/extract-x-article-for-rag)
- [Monitor AI search visibility on X](https://apify.com/xquik/x-tweet-scraper/examples/monitor-ai-search-visibility-on-x)
- [Track AI SEO and generative engine optimization](https://apify.com/xquik/x-tweet-scraper/examples/track-generative-engine-optimization-talk)
- [Discover AI agent tools on X](https://apify.com/xquik/x-tweet-scraper/examples/discover-ai-agent-tools-on-x)
- [Collect AI product feedback](https://apify.com/xquik/x-tweet-scraper/examples/collect-ai-product-feedback)
- [Monitor brand mentions on X](https://apify.com/xquik/x-tweet-scraper/examples/monitor-brand-mentions-on-x)
- [Export Twitter data to CSV](https://apify.com/xquik/x-tweet-scraper/examples/export-twitter-data-to-csv)
- [Collect replies to an OpenAI post](https://apify.com/xquik/x-tweet-scraper/examples/collect-replies-to-an-openai-post)
- [Extract a complete Twitter thread](https://apify.com/xquik/x-tweet-scraper/examples/extract-complete-twitter-thread)
- [Collect Spanish AI conversations](https://apify.com/xquik/x-tweet-scraper/examples/collect-spanish-ai-conversations)

### Quali dati può estrarre X Tweet Scraper?

| Campo                  | Descrizione                                               |
| ---------------------- | ---------------------------------------------------------- |
| `id`                   | ID del tweet                                                |
| `text`                 | Testo completo del tweet (inclusi i Note Tweet fino a 25k caratteri) |
| `createdAt`            | Stringa timestamp nativa di X                                |
| `likeCount`            | Numero di Mi piace                                           |
| `retweetCount`         | Numero di retweet                                            |
| `replyCount`           | Numero di risposte                                           |
| `quoteCount`           | Numero di citazioni                                          |
| `viewCount`            | Numero di visualizzazioni                                    |
| `bookmarkCount`        | Numero di segnalibri                                         |
| `lang`                 | Lingua del tweet                                             |
| `url`                  | Link diretto al tweet                                        |
| `tweetUrl`             | Alias dell'URL del tweet nell'output piatto                  |
| `twitterUrl`           | URL in formato twitter.com nell'output piatto                |
| `author`               | Campi disponibili dell'autore (username, bio, sito, conteggi) |
| `authorUsername`       | Handle dell'autore nell'output piatto                         |
| `authorFollowers`      | Numero di follower dell'autore nell'output piatto             |
| `authorUrl`            | Sito web dell'autore nell'output piatto, quando disponibile   |
| `authorDescription`    | Testo della bio dell'autore nell'output piatto                |
| `authorCoverPicture`   | URL dell'immagine di copertina dell'autore nell'output piatto |
| `authorPinnedTweetIds` | ID dei tweet fissati dall'autore nell'output piatto           |
| `media`                | Immagini, video, GIF allegati                                 |
| `mediaUrls`            | URL dei contenuti multimediali nell'output piatto              |
| `imageUrls`            | URL delle immagini nell'output piatto                          |
| `videoUrls`            | URL dei video nell'output piatto                                |
| `entities`             | Hashtag, URL, menzioni e timestamp video                        |
| `displayTextRange`     | Intervallo di testo visualizzato da X, quando disponibile        |
| `contentDisclosure`    | Metadati di disclosure, quando disponibili                       |
| `conversationControl`  | Politica delle risposte e proprietario della conversazione pubblica |
| `reactionContext`      | Post pubblico e utente a cui fa riferimento una reazione          |
| `limitedActions`       | Restrizioni e prompt di interazione pubblica                     |
| `isLimitedReply`       | Se le risposte sono limitate                                     |
| `isNoteTweet`          | Se si tratta di un Note Tweet (post lungo)                        |
| `isQuoteStatus`        | Se questo tweet cita un altro tweet                               |
| `isRetweet`            | Se questa riga è un retweet, con l'originale allegato             |
| `isPinned`             | Se l'autore ha fissato questo post, righe piatte                  |
| `isReply`              | Se questo tweet è una risposta                                    |
| `quoted_tweet`         | Oggetto del tweet citato (se è una citazione)                     |
| `conversationId`       | ID del thread/conversazione                                       |
| `resultType`           | Tipo di riga per risultati rich, righe di coinvolgimento e diagnostica |
| `sourceTweetId`        | ID del tweet sorgente per le modalità articolo e coinvolgimento    |
| `article`              | Dati strutturati dell'articolo in `mode: "article"`                |

I metadati opzionali del tweet possono includere `authorUnavailable`, `card`,
`communityId`, `communityNote`, `edit`, `exclusiveContent`, `noteTweet` e
`postCta`. `isTranslatable`, `place`, `possiblySensitive` e `viewState`
conservano altro contesto pubblico. `previousCounts` conserva il coinvolgimento
pre-modifica. `tombstone` conserva gli avvisi. `unmentionedUserIds` elenca gli
utenti che hanno lasciato la conversazione. Consulta l'OpenAPI per i campi
esatti.

Gli autori annidati seguono il contratto del profilo pubblico. Copre identità,
conteggi, verifica, disponibilità, dati professionali e biografie del profilo.

Le righe dei retweet impostano `isRetweet` su `true`. Il loro `text` riporta il
post originale per intero, e `retweeted_tweet` contiene il post originale con
autore & conteggi.

Le righe dei tweet conservano anche `type`, `source`, `inReplyToId`,
`inReplyToUserId`, `inReplyToUsername` e `retweeted_tweet`. I tweet citati e
ripubblicati conservano ricorsivamente gli stessi campi sicuri supportati.

I contenuti multimediali includono disponibilità, geometria, tag, varianti
video, `watchNowUrl` e azioni `visitSiteUrl`.

Le righe non includono mai stati relativi al viewer. Gli indicatori di follow,
blocco, silenziamento, segnalibro, like, repost, permesso di modifica e simili
vengono sempre rimossi, anche dall'output raw.

## Quanto costa estrarre tweet?

Ogni piano Apify costa `$0.00015` per riga consegnata. Apify fattura l'uso
della tua piattaforma separatamente. Xquik applica un addebito per ogni riga
di dati consegnata. La diagnostica è gratuita nell'output `diagnostics`.

Non si applica alcun abbonamento Xquik. Non si applica alcun costo di avvio o
di query separato. Ogni esecuzione scrive anche un record `run-report` con
`estimatedChargeUsd` calcolato dal prezzo pay-per-event live che Apify espone
all'Actor. Ogni esito scrive `run-report`, incluse le uscite senza input e con
input non valido. I run report separano le righe di dati in `realRows` e la
diagnostica in `diagnosticRows`.

Capisci i risultati vuoti prima di spendere per un'altra esecuzione. L'oggetto
`filtering` nei report e nella diagnostica finale conta le righe rimosse dai
tuoi filtri. Consulta `serverFilteredRows`, `actorFilteredRows` e
`pagesWithUnknownServerFiltering`. Le righe filtrate non generano mai addebiti
per risultato.

L'esaurimento della sorgente può completare l'estrazione al di sotto del limite
richiesto. Queste esecuzioni riportano `outcome: "complete"` con
`completionReason: "source_exhausted"`. Le esecuzioni interrotte conservano il
loro esito parziale e le indicazioni per il retry.

`failedSubtargets` conta le query e i target di profilo interrotti dopo un
errore. Le righe consegnate restano nel dataset e contano per la fatturazione.
Un errore non significa mai che il target manchi. Queste esecuzioni usano
`completionReason: "partial_failure"`.

L'estrazione interrotta scrive anche una diagnostica gratuita `partial`. I
risultati disponibili restano intatti. La diagnostica riporta
`availableResults`, `failedTargets`, `retryable` e `nextAction`. Un'uscita
dell'Actor riuscita conferma la consegna, non l'estrazione completa.

Il messaggio di stato nomina ogni causa dell'interruzione. Un'esecuzione con un
account mancante & una ricerca bloccata riporta entrambe le cause. `stopCauses`
elenca ogni causa con i propri `message`, `retryable` & `nextAction`. Le cause
sono `target_not_found`, `target_protected`, `search_unavailable`,
`likes_hidden`, `target_failed`, `pagination_safety_limit`, `reply_reach` &
`deadline_reached`. L'esecuzione è `retryable` quando lo è almeno una causa.

I target protetti o mancanti contano come errori, anche in esecuzioni con
risultati validi. Conta anche una ricerca che X non può eseguire. X.com mostra
"Something went wrong" per una ricerca simile. L'esecuzione la ferma subito,
senza retry. Contano anche i Mi piace che X nasconde. X mostra chi ha messo Mi
piace a un post solo al suo autore. E mostra solo a un account i post a cui ha
messo Mi piace. Quando tutti gli errori riguardano target non disponibili, la
diagnostica imposta `retryable: false`. Controlla gli URL o gli username target
& scegli account pubblici disponibili. Restringi una ricerca che X non può
eseguire o cambiane i filtri. Al posto dei Mi piace nascosti, leggi retweeter,
risposte o post. Gli altri errori conservano le indicazioni per il retry per i
target non completati.

La diagnostica nomina questi target in `unavailableTargets`. Ogni voce ha il
`target` come lo hai inserito & un `reason`: `not_found`, `protected`,
`search_unavailable` o `likes_hidden`. La lista contiene fino a 100 voci.
Rimuovili dall'input per ottenere un'esecuzione completa.

`completionReason: "pagination_safety_limit"` non è un errore di lettura.
L'esecuzione ha mantenuto le righe valide, poi ha chiuso un target che non
restituiva più nuovi risultati. L'esecuzione segnala un'estrazione incompleta.
`failedSubtargets` resta `0`. Paghi solo le righe consegnate.

Il timeout Apify predefinito è `0`, quindi le esecuzioni non hanno limite di
tempo. L'Actor continua finché non raggiunge il limite o esaurisce i dati
idonei. Puoi comunque impostare un timeout Apify finito. In tal caso
`completionReason: "deadline_reached"` significa che quel limite è vicino.
L'Actor salva le righe e il report, poi termina correttamente prima del limite.
Le righe consegnate vengono fatturate una sola volta.

- Avvii, query, URL e ricerche di singoli tweet non aggiungono un costo
  separato.
- L'Actor rimuove i duplicati prima di scrivere o fatturare le righe.
- Le esecuzioni senza input, con input non valido e con output pari a zero
  scrivono 1 record utile nell'output gratuito `diagnostics`.

## Come uso X Tweet Scraper per estrarre dati dai tweet?

### 1. Incolla direttamente gli URL

Incolla una combinazione di URL di tweet, profili, ricerche o liste:

```json
{
  "startUrls": [
    { "url": "https://x.com/elonmusk/status/1846987139428634858" },
    { "url": "https://x.com/nasa" },
    { "url": "https://x.com/search?q=AI%20lang%3Aen" },
    { "url": "https://x.com/i/lists/1748648376080666720" }
  ],
  "maxItems": 500
}
```

Gli URL dei tweet restituiscono quei tweet, senza duplicati e nell'ordine del
tuo input. Gli URL di profilo restituiscono i post dell'account. Gli URL di
ricerca eseguono la loro query. Gli URL di lista restituiscono i post della
Lista. `maxItems` limita i risultati su tutti gli URL incollati.

### 2. Handle in blocco

Scorciatoia per molte ricerche `from:username`:

```json
{ "twitterHandles": ["elonmusk", "nasa", "openai"], "maxItems": 100 }
```

Ogni handle restituisce i post di quell'account. L'Actor rimuove le righe
duplicate prima dell'output e della fatturazione. Gli username accettano un
prefisso `@` opzionale. Handle & URL di profilo mantengono i repost, come fa la
scheda Post su X. Vale anche con date o filtri. Imposta
`tweetTypes.excludeRetweets` per escluderli.

### 3. Cerca tweet

Imposta il campo **Search Terms** con una o più query:

```json
{
  "searchTerms": ["from:elonmusk AI", "#bitcoin lang:en"],
  "maxItems": 1000,
  "queryType": "Latest"
}
```

Se `mode` è `tweet` o `tweets` senza ID tweet, l'input della query viene
instradato alla ricerca. Questo evita che `searchTerms` validi restituiscano
una ricerca mirata vuota.

Funzionano anche i backfill di account con finestre di date, come
`from:elonmusk since:2026-01-01 until:2026-01-02`. Ogni termine mantiene la
propria attribuzione `searchTerm`. `maxItems` limita i risultati su tutti i
termini di ricerca. L'Actor verifica ogni tweet restituito rispetto alle
finestre `since:`, `until:` e in tempo Unix. Le ricerche filtrate continuano a
leggere finché trovano corrispondenze o X non ha più risultati.

Un termine di ricerca `from:` restituisce ciò che restituisce la ricerca di X.
Quindi esclude i repost. Aggiungi `include:nativeretweets` per mantenerli, o
`filter:nativeretweets` per avere solo repost.

### 4. Cerca tweet per ID

```json
{ "tweetIds": ["1846987139428634858", "1858743654778892784"], "maxItems": 100 }
```

I risultati mantengono l'ordine del tuo input, rimuovono i duplicati e includono
solo i tweet richiesti.

Gli alias accettati per la stessa ricerca includono `tweetId`, `tweetIDs`,
`tweets`, `postIds`, `lookupPostIds`, `tweetUrls` e `postUrls`.

### 5. Modalità esplicite di coinvolgimento, thread e articolo

Usa `mode` quando vuoi un percorso specifico, indipendentemente dagli altri
campi di input:

```json
{ "mode": "replies", "replyTweetIds": ["1846987139428634858"], "maxItems": 100 }
```

Modalità esplicite supportate: `tweet`, `tweets`, `search`, `profileTweets`,
`profileReplies`, `profileMedia`, `profileLikes`, `listTweets`, `article`,
`replies`, `quotes`, `thread`, `retweeters` e `favoriters`.

`profileTweets` segue la scheda Post del profilo su X. Restituisce i post
dell'account, i suoi repost & le sue risposte ai propri post, in ordine di
data. Le risposte ad altri account & il contesto di conversazione di altri
autori vengono esclusi prima della fatturazione.

Per avere solo i post originali, escludi i tipi che non vuoi:

```json
{
  "mode": "profileTweets",
  "twitterHandles": ["apify"],
  "tweetTypes": { "excludeReplies": true, "excludeRetweets": true },
  "maxItems": 100
}
```

`tweetTypes.excludeReplies`, `excludeRetweets` & `excludeQuotes` funzionano su
ogni fonte. Una ricerca li invia a X come `-filter:replies`,
`-filter:nativeretweets` & `-filter:quote`. Su un profilo o una lista l'Actor
scarta quelle righe da solo. Le righe escluse non raggiungono mai il dataset,
quindi non le paghi mai, & non contano mai per `maxItems`.

`profileReplies` segue la scheda Con risposte di X. Restituisce post e
risposte del profilo scritti dal target. L'Actor esclude il contesto di
conversazione di altri autori. Usa `filter:replies` o la ricerca `to:` quando ti
servono solo le risposte.

Le modalità di ricerca e i tweet paginati supportano `time.since`, `time.until`,
timestamp Unix e `lang`. Includono Post del profilo, With Replies, Media, Likes,
Liste, risposte, citazioni e thread. Funzionano anche gli operatori di data flat
corrispondenti. L'Actor verifica ogni riga prima della fatturazione. Il limite
inferiore della data è incluso. Il limite superiore è escluso. I filtri di data
escludono le righe senza date utilizzabili. I filtri di lingua escludono lingue
mancanti o non corrispondenti. Le righe filtrate non consumano mai il limite di
risultati richiesto. Le esecuzioni di Lista con una finestra di date raggiungono
in fretta i giorni meno recenti. Terminano dopo aver superato il tuo limite
inferiore. Le finestre molto indietro in una Lista possono perdere alcune
risposte. Poiché il limite superiore è escluso, la stessa data per `since` e
`until` è una finestra vuota. Imposta `until` al giorno successivo per ottenere
1 giorno completo. I filtri dei tweet non si applicano agli elenchi di utenti né
alle ricerche dirette di tweet o articoli.

`time.withinTime` & `within_time` funzionano nelle stesse modalità. Il valore
`7d` conserva gli ultimi 7 giorni prima che l'esecuzione inizi a leggere. Una
finestra che risale a prima del 2006 conserva tutti i post.

`mode: "replies"` è più rigorosa. Ogni riga di tweet ha `inReplyToId` uguale
all'ID del tweet richiesto. Le risposte annidate nella conversazione non contano
mai come risposte dirette. Se X mostra meno risposte di quelle che riporta,
l'Actor conserva le righe trovate. Aggiunge 1 record `replies-incomplete` a
`diagnostics` quando il tuo limite non è raggiunto. L'esecuzione resta parziale
finché non raggiunge il tuo limite o X non ha più risposte. `replyCoverage`
riporta i conteggi delle risposte e i dettagli di copertura. Imposta `maxItems`
sul totale richiesto, inclusi totali superiori a 25.000 per un singolo target di
risposte.

Le righe degli articoli includono `resultType: "article"`, `sourceTweetId`,
`article` e `author` opzionale. Le righe utente di coinvolgimento includono
`resultType: "user"`, `sourceTweetId` ed `engagementMode`.

I retweeter restano una normale modalità di coinvolgimento pubblico. I
favoriter sono best effort: X potrebbe esporre gli utenti che hanno messo Mi
piace solo per post idonei o visibili al proprietario. Anche i Mi piace del
profilo sono best effort perché molti profili pubblici non espongono una
scheda Mi piace leggibile. Se X non espone utenti o tweet apprezzati, l'Actor
scrive un record `diagnostics` gratuito. I conteggi dei segnalibri possono
comparire nelle righe dei tweet, ma X non espone gli account specifici che
hanno salvato un post.

### 6. Output CSV piatto

Mantieni i campi JSON annidati predefiniti, oppure aggiungi colonne adatte ai
fogli di calcolo:

```json
{ "searchTerms": ["from:nasa moon"], "maxItems": 100, "outputPreset": "flat" }
```

L'output piatto mantiene invariati `author` e `media` e aggiunge anche campi
di primo livello come `authorUsername`, `authorName`, `authorFollowers`,
`tweetUrl`, `twitterUrl`, `mediaUrls`, `imageUrls` e `videoUrls`.

Ogni riga piatta di tweet riporta `media`. Un tweet senza media ha una lista
vuota, quindi ogni riga ha le stesse chiavi in un foglio di calcolo o in una
pipeline tipizzata.

### 7. Seleziona la denominazione dei campi

Mantieni i nomi dei campi legacy per impostazione predefinita. Seleziona uno
stile per dati di risultato rich o raw:

```json
{
  "searchTerms": ["from:nasa moon"],
  "maxItems": 100,
  "outputVariant": "rich",
  "fieldStyle": "snake_case"
}
```

Usa `camelCase` o `snake_case` per i campi dei risultati di primo livello e
annidati. L'output flat in snake case include campi come `author_username` e
`media_urls`. Gli snapshot sicuri della sorgente in `raw` conservano le
chiavi originali della sorgente. Anche i nomi della sorgente in conflitto
restano invariati per evitare la perdita di dati.

La diagnostica legacy usa `resultType`, `actorVersion` e `replyCoverage`.
L'output rich e raw applica `fieldStyle` ricorsivamente. Ad esempio, lo snake
case usa `result_type`, `actor_version` e `reply_coverage`. La vista dataset
Overview funziona con entrambi gli stili. Scegli la vista Console
corrispondente al `fieldStyle` dell'esecuzione. `camelCase fields` si aspetta
`camelCase`. `snake_case fields` si aspetta `snake_case`. Le viste
selezionano solo le colonne. Non rinominano mai i dati memorizzati o
esportati.

### 8. Filtri avanzati

Combina filtri di utente, data, posizione, media e coinvolgimento:

```json
{
  "twitterContent": "AI",
  "from": "elonmusk",
  "since": "2026-01-01_00:00:00_UTC",
  "until": "2026-03-01_00:00:00_UTC",
  "lang": "en",
  "filter:media": true,
  "min_faves": 1000,
  "maxItems": 500
}
```

Imposta `queryType: "Latest + Top"` per usare entrambe le modalità di ricerca X
in un'unica esecuzione. L'Actor rimuove i duplicati prima della fatturazione e
riempie il tuo limite con l'una o l'altra modalità. `Top` è ordinato per
pertinenza e non è esaustivo. Imposta `includeSearchTerms: true` per allegare
ogni query corrispondente come campo `searchTerm`.

Quando imposti `lang`, l'Actor verifica la lingua di ogni tweet restituito.
Salta le corrispondenze mancate e continua la paginazione per i tweet
corrispondenti.

### Migra da un altro Actor di tweet

Incolla l'input che usi già. X Tweet Scraper legge i nomi dei campi che usano
gli altri Actor di tweet & li mappa sui propri campi. I nomi canonici restano
il default documentato. Un alias non scarta mai un campo & non cambia mai
quanto paghi. Il form di input elenca solo i campi canonici, quindi resta
breve. Gli alias funzionano negli input JSON, API, SDK, di automazione & dei
task salvati.

| Campo che usi già                                                                                                                                                      | X Tweet Scraper lo legge come                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `startUrls`, `urls`, `tweetUrls`, `postUrls`, `profileUrls`, `accountUrls`                                                                                             | `startUrls`                                                              |
| `profileUrl` come 1 stringa                                                                                                                                            | `startUrls`                                                              |
| `tweetIds`, `tweetIDs`, `tweets`, `postIds`, `lookupPostIds`, `tweet_ids`, o `tweetId` come 1 stringa                                                                  | `tweetIds`                                                               |
| `twitterHandles`, `usernames`, `user_names`, `userNameList`, `handles`, `screenNames`, `profileTweets`                                                                 | `twitterHandles`                                                         |
| `username`, `handle`, `screenName` come 1 stringa                                                                                                                      | `twitterHandles`                                                         |
| `searchTerms`, `searchQueries`, `queries`, `search`, come lista o 1 ricerca per riga                                                                                   | `searchTerms`                                                            |
| `twitterContent`, `query`, `searchQuery`                                                                                                                               | `twitterContent`                                                         |
| `maxItems`, `maxResults`, `max_results`, `resultsLimit`, `count`, `resultsCount`, `numberOfTweets`, `maxPosts`, `max_posts`, `max_items`, `maxTweets`, `tweetsDesired` | `maxItems`                                                               |
| `sort`                                                                                                                                                                 | `queryType`                                                              |
| `tweetLanguage`, `language`                                                                                                                                            | `lang`                                                                   |
| `author`, `inReplyTo`, `mentioning`                                                                                                                                    | `from`, `to`, `@`                                                        |
| `start`, `startDate`, `end`, `endDate`                                                                                                                                 | `since`, `until`                                                         |
| `minimumRetweets`, `minimumFavorites`, `minimumReplies`                                                                                                                | `min_retweets`, `min_faves`, `min_replies`                               |
| `onlyImage`, `onlyVideo`, `onlyQuote`, `onlyTwitterBlue`                                                                                                               | `filter:images`, `filter:videos`, `filter:quote`, `filter:blue_verified` |
| `geotaggedNear`, `withinRadius`                                                                                                                                        | `near`, `within`                                                         |
| `quickDateRange` del Google Search Scraper, come `d7`, `w2`, `m1` o `y`                                                                                                | `since_time`, contato a ritroso dall'avvio dell'esecuzione               |

Come si comporta un input incollato:

- Ogni fonte viene eseguita. Un input con URL di avvio, handle, termini di
  ricerca, ID di lista & ID di tweet li esegue tutti, & `maxItems` si applica
  all'intera esecuzione.
- Una query di ricerca accanto a `searchTerms` viene eseguita come 1 termine
  in più.
- L'Actor legge un URL di profilo nel formato `x.com/@name` come `x.com/name`.
- Quando imposti un alias & il suo campo canonico, vince il valore canonico.
  Il log dell'esecuzione nomina l'alias che ha perso.
- Il log dell'esecuzione nomina ogni campo che l'Actor non legge, come
  `customMapFunction`. Niente viene scartato senza avviso.
- Un limite di righe deve essere un numero intero pari a 1 o più.
  `maxResults: 0` ferma l'esecuzione prima di recuperare o addebitare
  qualcosa.
- `quickDateRange: "m1"` legge l'ultimo mese su ogni percorso. Mesi & anni si
  contano a ritroso sul calendario. Un valore senza h, d, w, m o y ferma
  l'esecuzione prima di leggere o addebitare qualcosa.
- L'Actor non ha un'unità di pagina. Sostituisci `maxPages` con `maxItems`.
- L'Actor non ha un campo per l'ID utente. Invia handle o URL di profilo al
  posto di `userId` o `user_ids`.
- I campi degli operatori di ricerca come `from`, `min_faves`, `since_time` &
  `filter:images` usano già i nomi che usa X, quindi non serve alcuna
  mappatura.

### UX di input Console e API

La Console espone questi controlli:

- Mode, Output Variant, Field Style, Output Preset e Sort By sono select
  validate.
- I campi Start URLs e Profile URLs accettano stringhe o oggetti
  `{ "url": "..." }`. I loro editor JSON conservano entrambi i formati API.
- Structured Filters espone controlli raggruppati senza JSON annidato.
- I gruppi di filtri canonici tengono gli operatori piatti equivalenti fuori
  dal form. Gli input JSON, API, SDK, di automazione e dei task salvati li
  accettano comunque.
- Max Items e Max Items Per Target accettano numeri interi pari o superiori a
  1. Le soglie di coinvolgimento accettano numeri interi pari o superiori a
  0.

Usa i campi canonici nelle nuove integrazioni. Gli alias della tabella di
migrazione qui sopra restano disponibili. `includeRaw` è un alias di
`outputVariant: "raw"`. I valori
storici di `outputVariant` come `compact` e `full` restano accettati e usano
l'output Legacy. Il form visivo li etichetta come alias Legacy.

### Principali operatori di ricerca supportati

| Operatore               | Esempio                | Scopo                              |
| ---------------------- | ----------------------- | ----------------------------------- |
| `from:`                | `from:elonmusk`         | Solo tweet di questo utente          |
| `to:`                  | `to:OpenAI`             | Solo risposte a questo utente        |
| `@`                    | `@nasa`                 | Tweet che menzionano questo utente   |
| `list:`                | `list:123456`           | Tweet dei membri della lista         |
| `lang:`                | `lang:en`               | Filtra per lingua                    |
| `since:` / `until:`    | `since:2026-01-01`      | Intervallo di date                   |
| `min_faves:`           | `min_faves:100`         | Soglia di coinvolgimento             |
| `min_retweets:`        | `min_retweets:50`       | Soglia di retweet                    |
| `filter:media`         | `filter:media`          | Operatore di ricerca media di X      |
| `filter:videos`        | `filter:videos`         | Operatore di ricerca video di X      |
| `filter:images`        | `filter:images`         | Operatore di ricerca immagini di X   |
| `filter:links`         | `filter:links`          | Solo tweet con link                  |
| `filter:replies`       | `filter:replies`        | Solo tweet di risposta               |
| `filter:quote`         | `filter:quote`          | Solo citazioni                       |
| `filter:blue_verified` | `filter:blue_verified`  | Solo utenti Premium                  |

Le finestre di date usano un limite inferiore incluso e un limite superiore
escluso. L'Actor verifica entrambi i limiti prima di aggiungere o addebitare
ogni tweet.

Per l'elenco completo degli operatori, vedi
[Twitter Advanced Search](https://github.com/igorbrigadir/twitter-advanced-search).

## Input

Consulta la scheda **Input** per l'elenco completo delle opzioni. Tutti i
campi sono opzionali tranne almeno uno tra: `startUrls`, `twitterHandles`,
`listIds`, `tweetIds`, `searchTerms`, `twitterContent` o i loro alias
documentati.

Esempi:

- Incolla un URL di tweet in Start URLs.
- Incolla un URL di profilo o aggiungi lo username a X Handles.
- Usa `from:user since:YYYY-MM-DD until:YYYY-MM-DD` come termine di ricerca per
  i backfill di account.
- Incolla un URL di lista in Start URLs.
- Combina `twitterContent` con filtri come `from:`, `since:`, `min_faves:` e
  `filter:media` per ricerche avanzate.

## Output

Ogni tweet è un oggetto JSON con i metadati disponibili:

Gli schemi del dataset e del run-report includono titoli, descrizioni ed
esempi dei campi. Gli agenti possono ispezionarli senza indovinare il
significato dei campi.

I valori di esempio sono illustrativi. Le risposte riflettono i dati sorgente
al momento dell'esecuzione.

```json
{
  "id": "1846987139428634858",
  "text": "The future of AI is...",
  "createdAt": "Sun Mar 15 12:00:00 +0000 2026",
  "retweetCount": 500,
  "replyCount": 120,
  "likeCount": 5000,
  "quoteCount": 80,
  "viewCount": 1200000,
  "bookmarkCount": 300,
  "lang": "en",
  "url": "https://x.com/elonmusk/status/1846987139428634858",
  "author": {
    "id": "44196397",
    "username": "elonmusk",
    "name": "Elon Musk",
    "followers": 180000000,
    "verified": true
  },
  "media": [{ "type": "photo", "url": "https://..." }],
  "entities": {
    "hashtags": [{ "text": "AI" }],
    "urls": [],
    "user_mentions": []
  },
  "isNoteTweet": false,
  "isQuoteStatus": false,
  "isReply": false,
  "conversationId": "1846987139428634858"
}
```

Esporta come JSON, CSV, Excel o HTML dal dataset Apify.

## Opzioni di esecuzione

- Imposta la spesa massima totale Apify per limitare il costo
  dell'esecuzione. Lascia `maxItems` vuoto per ottenere il massimo numero di
  righe entro quel budget, oppure imposta `maxItems` quando vuoi meno tweet.
- Imposta `maxTotalChargeUsd` nell'API Apify, oppure Max cost per run nella
  Console. Apify espone quel limite all'Actor come
  `ACTOR_MAX_TOTAL_CHARGE_USD`, e l'Actor lo converte nel numero massimo di
  righe fatturabili.
- Passa `tweetIds` per cercare molti tweet in una volta. Incolla un URL di
  profilo per leggere i post di un account.
- Imposta `includeSearchTerms: true` quando esegui molte query per etichettare
  ogni risultato con il termine di ricerca di origine.
- Imposta `queryType: "Latest + Top"` per usare entrambe le modalità di ricerca
  X in un'unica esecuzione. Deduplicazione e limiti dei risultati valgono per
  entrambe.
- Usa i monitor Xquik per account o parole chiave per controlli ogni secondo
  e webhook firmati. I monitor attivi controllano ogni secondo.

## Casi d'uso

- Monitorare il sentiment del brand nei tweet.
- Monitorare i post dei concorrenti e i termini di settore.
- Trovare prospect nelle conversazioni pubbliche.
- Raccogliere dataset pubblici per la ricerca.
- Trovare post con un alto coinvolgimento pubblico.

## Responsabilità sui dati

L'Actor richiede campi pubblici di X. I risultati possono contenere dati
personali. Verifica una finalità lecita e segui le norme sulla privacy
applicabili. Rivolgiti a un consulente qualificato in caso di dubbi.

## Actor Xquik correlati

Ogni Actor Xquik condivide lo stesso motore di estrazione, la fatturazione
basata sui filtri e la diagnostica. Scegli quello che corrisponde ai dati di
cui hai bisogno.

- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): estrae
  profili con i relativi post, risposte, media & follower da handle, ID o URL.
  Usalo quando parti dagli account invece che dalle ricerche. Da $0.00015 per
  riga.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): estrae
  risposte, commenti & intere conversazioni sotto i post con oltre 25 filtri.
  Usalo quando ti serve la discussione sotto i tweet. Da $0.00015 per riga.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): estrae
  risposte, citazioni, retweeter & thread per URL o ID di post in blocco.
  Usalo quando misuri chi ha interagito con i post. Da $0.00015 per riga.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): estrae
  follower, following, membri di liste, iscritti & membri di community come
  righe profilo. Usalo quando ti servono elenchi di audience o membri. Da
  $0.00015 per profilo.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper):
  cerca utenti per handle, bio & posizione con filtri su follower,
  verifica, età & posizione. Usalo quando costruisci elenchi di account dalla
  ricerca. Da $0.00015 per profilo.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): estrae post,
  membri & follower delle liste da URL o ID di liste. Usalo quando una lista
  curata definisce le tue fonti. Da $0.00015 per riga.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): estrae
  informazioni, post, ricerche, membri & moderatori delle community. Usalo
  quando le tue fonti sono le Community di X. Da $0.00015 per riga.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): estrae
  tendenze in tempo reale per posizione con rank, volume, query & WOEID.
  Usalo quando monitori cosa è di tendenza e dove. Da $0.00015 per tendenza.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): estrae
  X Article lunghi come Markdown & testo con copertine, autori, date &
  metriche. Usalo quando ti servono i corpi degli articoli, non i tweet. Da
  $0.00015 per articolo.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): estrae o
  archivia foto, video & GIF da post o profili con opzioni MP4 & metadati.
  Usalo quando ti servono i file multimediali stessi. Da $0.00015 per riga
  multimediale.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  monitora le menzioni del brand con rilevanza, sentiment & risposte sulla
  customer experience generate dall'IA & confronta le esecuzioni. Usalo
  quando osservi un brand nel tempo. Da $0.0003 per tweet analizzato.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  etichetta atteggiamento, intensità & probabilità di sarcasmo per ogni tweet
  con l'IA. Usalo quando ti serve il sentiment generale su qualsiasi
  argomento. Da $0.0003 per tweet analizzato.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  etichetta posizione rialzista, ribassista, neutra o mista, tipo di
  contenuto, convinzione & rilevanza dell'asset con l'IA. Usalo quando segui
  discussioni su azioni, crypto o trading. Da $0.0003 per tweet analizzato.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  etichetta i post di notizie per formato, attribuzione della fonte &
  rilevanza dell'argomento con l'IA. Usalo quando separi il reporting dal
  commento. Da $0.0003 per tweet analizzato.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  risponde alle tue domande personalizzate su categoria, punteggio & sì/no
  per ogni tweet con l'IA. Usalo quando le analisi preimpostate non si
  adattano alle tue etichette. Da $0.0003 per tweet analizzato.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer):
  stima un Viral Score da 0 a 100 & un verdetto per ogni tweet da 8 risposte
  dell'IA sui tratti. Usalo quando studi perché i tweet si diffondono o
  falliscono. Da $0.0003 per tweet analizzato.

## Ti serve più dello scraping?

Xquik offre anche 47 strumenti dashboard, 129 operazioni REST, webhook firmati
& un server MCP.

- [Documentazione API](https://docs.xquik.com/introduction): guide REST API
- [Search Tweets API](https://docs.xquik.com/api-reference/x/search-tweets):
  cerca tweet via REST
- [Batch Tweets API](https://docs.xquik.com/api-reference/x/batch-tweets):
  recupera fino a 100 tweet per ID
- [User Tweets API](https://docs.xquik.com/api-reference/x/user-tweets):
  ottieni la timeline di un utente
- [Server MCP](https://docs.xquik.com/mcp/overview): scopri gli strumenti
  supportati
- [Webhook](https://docs.xquik.com/webhooks/overview): consegna di eventi
  firmata
- [GitHub](https://github.com/Xquik-dev/x-twitter-scraper): codice sorgente e
  tracker delle issue

## FAQ

**Mi serve una chiave API X?** No. Non ti servono chiave API X, login o
credenziali.

**Cosa limita un'esecuzione?** Il limite di elementi richiesto e il limite di
spesa Apify fermano l'esecuzione. Si applicano comunque i limiti dell'account
e della piattaforma Apify.

**Quanto è veloce?** Il tempo di esecuzione dipende dal tuo input, dal numero di
risultati e dalla disponibilità di X.

**Perché una ricerca Latest restituisce post che la scheda Latest di X non
mostra?** X lascia fuori dalla scheda Latest alcuni post corrispondenti. Questo
Actor restituisce anche quei post. Ogni post è un vero risultato di ricerca X
per la tua query e paghi ogni post una sola volta.

**Quali operatori di ricerca funzionano?** La ricerca avanzata di X
supporta autori, destinatari, menzioni, date, coinvolgimento, media & posizione.

**Posso usare l'API Apify per eseguirlo?** Sì. Consulta la
[scheda API](https://apify.com/xquik/x-tweet-scraper/api) per esempi in
Python, JavaScript & cURL.

**Posso pianificare estrazioni ricorrenti?** Sì. Usa la
[pianificazione](https://docs.apify.com/platform/schedules) integrata di
Apify per eseguire questo Actor secondo un cron.

**Dove segnalo i problemi?** Apri una issue su
[GitHub](https://github.com/Xquik-dev/x-twitter-scraper/issues) oppure usa la
scheda Issues su questa pagina dell'Actor.

**Posso ottenere una soluzione personalizzata?** Sì. Visita
[xquik.com](https://xquik.com) o leggi la
[documentazione API](https://docs.xquik.com/introduction) per la dashboard,
l'API, il server MCP & i webhook.
