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
i dati X più completi. X Tweet Scraper di Xquik raccoglie post (tweet),
risposte, profili, liste & ricerche con oltre 50 filtri. I benchmark pubblici
dimostrano che è il più economico & veloce tra 12 Actor che estraggono post. Le
sue righe hanno 2x i campi dell'Actor mediano, come mostra il
[benchmark qui sotto](#benchmark). La maggior parte degli altri Actor Apify fa
pagare prima di filtrare o deduplicare. Xquik fa pagare solo i risultati
consegnati, unici e conformi ai filtri.

Estrai i post pubblici di X (Twitter) **da $0.00015 per risultato consegnato su
ogni piano Apify**. Apify fattura a parte l'uso della piattaforma. Non ti serve
il login a X & non paghi costi di avvio o per query. Creato da
[Xquik](https://xquik.com).

> Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.
> "Twitter" e "X" sono marchi di X Corp.

## Cosa fa X Tweet Scraper?

X Tweet Scraper di Xquik restituisce post, metriche di engagement, profili
pubblici degli autori & media. Accetta URL, nomi utente, ID delle liste, ID dei
post & query di ricerca con oltre 50 filtri.

### Funzioni principali

- Filtri & rimozione dei duplicati agiscono prima della fatturazione.
- Un solo input supporta ricerche per ID, timeline, liste, ricerca & modalità
  di engagement.
- Gli input con ID dei post non hanno un limite fisso di quantità. Valgono
  comunque le tue impostazioni di spesa & timeout su Apify.
- I log dell'esecuzione mostrano i tempi di ogni pagina in `fetchDurationMs`,
  `processingDurationMs`, `pushDurationMs`, `statusDurationMs` &
  `fullPageDurationMs`.
- Le esecuzioni conservano righe consegnate & progressi quando Apify le
  riavvia.

### Casi d'uso

- Alimentare ricerca, arricchimento, analisi & addestramento IA con più campi
  per tweet. Il 2026-09-29 la nostra riga mediana aveva 63 campi. È 2x la
  mediana di altri 11 Actor.
- Segui il sentiment del brand nei post.
- Monitora i post dei concorrenti & i termini del tuo settore.
- Trova potenziali clienti nelle conversazioni pubbliche.
- Raccogli dataset pubblici per la ricerca.
- Trova post con un alto engagement pubblico.

### Quali dati può estrarre X Tweet Scraper?

| Campo                  | Descrizione                                                         |
| ---------------------- | ------------------------------------------------------------------- |
| `id`                   | ID del post                                                         |
| `text`                 | Testo completo del post (inclusi i Note Tweet fino a 25k caratteri) |
| `createdAt`            | Stringa di data & ora nativa di X                                   |
| `likeCount`            | Numero di Mi piace                                                  |
| `retweetCount`         | Numero di repost                                                    |
| `replyCount`           | Numero di risposte                                                  |
| `quoteCount`           | Numero di post di citazione                                         |
| `viewCount`            | Numero di visualizzazioni                                           |
| `bookmarkCount`        | Numero di segnalibri                                                |
| `lang`                 | Lingua del post                                                     |
| `url`                  | Link diretto al post                                                |
| `tweetUrl`             | Alias dell'URL del post nell'output piatto                          |
| `twitterUrl`           | URL in formato twitter.com nell'output piatto                       |
| `author`               | Campi disponibili dell'autore (nome utente, bio, sito, conteggi)    |
| `authorUsername`       | Nome utente dell'autore nell'output piatto                          |
| `authorFollowers`      | Numero di follower dell'autore nell'output piatto                   |
| `authorUrl`            | Sito web dell'autore nell'output piatto, quando disponibile         |
| `authorDescription`    | Testo della bio dell'autore nell'output piatto                      |
| `authorCoverPicture`   | URL del banner dell'autore nell'output piatto                       |
| `authorPinnedTweetIds` | ID dei post fissati dall'autore nell'output piatto                  |
| `media`                | Immagini, video & GIF allegati                                      |
| `mediaUrls`            | URL dei media nell'output piatto                                    |
| `imageUrls`            | URL delle immagini nell'output piatto                               |
| `videoUrls`            | URL dei video nell'output piatto                                    |
| `entities`             | Hashtag, URL, menzioni & timestamp dei video                        |
| `displayTextRange`     | Intervallo del testo visualizzato da X, quando disponibile          |
| `contentDisclosure`    | Metadati di disclosure, quando disponibili                          |
| `conversationControl`  | Regole di risposta & proprietario della conversazione pubblica      |
| `reactionContext`      | Post pubblico & utente a cui si riferisce una reazione              |
| `limitedActions`       | Limiti & avvisi pubblici sulle interazioni                          |
| `isLimitedReply`       | Se le risposte sono limitate                                        |
| `isNoteTweet`          | Se è un Note Tweet (post lungo)                                     |
| `isQuoteStatus`        | Se questo post cita un altro post                                   |
| `isRetweet`            | Se la riga è un repost, con l'originale allegato                    |
| `isPinned`             | Se l'autore ha fissato questo post (righe piatte)                   |
| `isReply`              | Se questo post è una risposta                                       |
| `quoted_tweet`         | Oggetto del post citato (se è una citazione)                        |
| `conversationId`       | ID del thread o della conversazione                                 |
| `resultType`           | Tipo di riga per righe rich, righe di engagement & diagnostica      |
| `sourceTweetId`        | ID del post di origine nelle modalità articolo & engagement         |
| `article`              | Dati strutturati dell'articolo in `mode: "article"`                 |

I metadati facoltativi del post includono `authorUnavailable`, `card`,
`communityId`, `communityNote`, `edit`, `exclusiveContent`, `noteTweet` &
`postCta`. `isTranslatable`, `place`, `possiblySensitive` & `viewState`
conservano altro contesto pubblico. `previousCounts` conserva l'engagement prima
della modifica. `tombstone` conserva gli avvisi di visibilità.
`unmentionedUserIds` elenca gli utenti che hanno lasciato la conversazione.
Consulta OpenAPI per i campi esatti.

Gli oggetti `author` annidati riportano i campi pubblici del profilo. Coprono
identità, conteggi, verifica, disponibilità, dati professionali & biografie del
profilo.

Le righe di repost impostano `isRetweet` su `true`. Il loro `text` riporta il
post originale per intero. `retweeted_tweet` contiene il post originale con
autore & conteggi.

Le righe dei post conservano anche `type`, `source`, `inReplyToId`,
`inReplyToUserId`, `inReplyToUsername` & `retweeted_tweet`. I post citati & i
repost riportano gli stessi campi a ogni livello di annidamento.

I media riportano disponibilità, geometria, tag & varianti video. Riportano
anche le azioni `watchNowUrl` & `visitSiteUrl`.

Le righe non includono mai stati visibili solo a chi guarda. L'Actor rimuove gli
indicatori di follow, blocco, silenziamento, segnalibro, Mi piace, repost,
permesso di modifica & simili. Anche l'output raw li elimina.

## Come uso X Tweet Scraper per estrarre dati dai tweet?

Segui questi passaggi in Apify Console:

1. Apri un [esempio di task](#esempi-di-task) o la scheda Input.
2. Aggiungi URL, nomi utente, ID dei post o termini di ricerca.
3. Imposta `maxItems` & i filtri che ti servono.
4. Fai clic su Start & aspetta che l'esecuzione finisca.
5. Esporta il dataset in JSON, CSV, Excel o HTML.

Le ricette qui sotto mostrano l'input per ogni fonte.

### Incolla gli URL

Incolla un mix qualsiasi di URL di post, profili, ricerche o liste:

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

Gli URL dei post restituiscono quei post, senza duplicati & nell'ordine del tuo
input. Gli URL dei profili restituiscono i post dell'account. Gli URL di ricerca
eseguono la loro query. Gli URL delle liste restituiscono i post della lista.
`maxItems` limita i risultati su tutti gli URL incollati.

### Estrai molti nomi utente

I nomi utente fanno da scorciatoia per molte ricerche `from:username`:

```json
{ "twitterHandles": ["elonmusk", "nasa", "openai"], "maxItems": 100 }
```

Ogni nome utente restituisce i post di quell'account. L'Actor rimuove le righe
duplicate prima dell'output & della fatturazione. Puoi aggiungere i nomi utente
con o senza `@`. Nomi utente & URL dei profili conservano i repost, come la
scheda Post su X. Li conservano anche con date o filtri. Imposta
`tweetTypes.excludeRetweets` per escluderli.

### Cerca i post

Inserisci una o più query nel campo Search terms:

```json
{
  "searchTerms": ["from:elonmusk AI", "#bitcoin lang:en"],
  "maxItems": 1000,
  "queryType": "Latest"
}
```

Con `mode` impostato su `tweet` o `tweets` & senza ID dei post, le query
diventano una ricerca. Così i `searchTerms` validi non restituiscono mai una
ricerca per ID vuota.

Puoi anche recuperare lo storico di un account con una finestra di date, come
`from:elonmusk since:2026-01-01 until:2026-01-02`. Ogni termine conserva la
propria attribuzione `searchTerm`. `maxItems` limita i risultati su tutti i
termini di ricerca. L'Actor controlla ogni post restituito rispetto alle
finestre `since:`, `until:` & in tempo Unix. Le ricerche filtrate continuano a
leggere finché trovano corrispondenze o X non ha più risultati.

Un termine di ricerca `from:` restituisce ciò che restituisce la ricerca di X,
quindi esclude i repost. Aggiungi `include:nativeretweets` per tenerli, oppure
`filter:nativeretweets` per avere solo i repost.

### Cerca i post per ID

```json
{ "tweetIds": ["1846987139428634858", "1858743654778892784"], "maxItems": 100 }
```

I risultati mantengono l'ordine del tuo input, eliminano i duplicati & includono
solo i post richiesti. La ricerca per ID accetta anche `tweetId`, `tweetIDs`,
`tweets`, `postIds`, `lookupPostIds`, `tweetUrls` & `postUrls`.

### Modalità engagement, thread & articolo

Imposta `mode` per forzare un percorso, qualunque altro campo contenga l'input:

```json
{ "mode": "replies", "replyTweetIds": ["1846987139428634858"], "maxItems": 100 }
```

Le modalità per post & ricerche sono `tweet`, `tweets` & `search`. Le modalità
per i profili sono `profileTweets`, `profileReplies`, `profileMedia` &
`profileLikes`. `listTweets` legge i post di una lista, mentre `article` legge
l'articolo di X contenuto in un post. Le modalità per un singolo post sono
`replies`, `quotes`, `thread`, `retweeters` & `favoriters`.

`profileTweets` segue la scheda Post del profilo su X. Restituisce i post
dell'account, i suoi repost & le sue risposte ai propri post. Le righe arrivano
in ordine di data. L'Actor scarta le risposte ad altri account prima della
fatturazione. Scarta anche il contesto di conversazione di altri autori.

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
`-filter:nativeretweets` & `-filter:quote`. Su un profilo o una lista, l'Actor
scarta quelle righe da solo. Le righe escluse non arrivano mai nel dataset,
quindi non le paghi mai. Non contano nemmeno per `maxItems`.

`profileReplies` segue la scheda Risposte di X. Restituisce i post & le risposte
dell'account. L'Actor esclude il contesto di conversazione di altri autori. Usa
`filter:replies` o una ricerca `to:` per avere solo risposte.

Le modalità di ricerca & quelle paginate per i post supportano `time.since`,
`time.until`, timestamp Unix & `lang`. Tra queste ci sono Post, Risposte, Media
& Mi piace del profilo, liste, risposte, citazioni & thread. Funzionano anche
gli operatori di data piatti corrispondenti. L'Actor verifica ogni riga prima
della fatturazione. Il limite inferiore della data è incluso. Il limite
superiore è escluso. I filtri di data escludono le righe senza date
utilizzabili. I filtri di lingua escludono lingue mancanti o diverse. Le righe
filtrate non consumano mai il tuo limite di risultati.

La stessa data per `since` & `until` dà una finestra vuota. Imposta `until` al
giorno dopo per avere 1 giorno intero. Le esecuzioni su una lista con una
finestra di date raggiungono in fretta i giorni più vecchi. Terminano appena
superano il tuo limite inferiore. Le finestre molto indietro in una lista
possono perdere qualche risposta. I filtri sui post non valgono per gli elenchi
di utenti né per le ricerche dirette di post o articoli.

`time.withinTime` & `within_time` funzionano nelle stesse modalità. Il valore
`7d` tiene gli ultimi 7 giorni prima che l'esecuzione inizi a leggere. Una
finestra che risale a prima del 2006 tiene tutti i post.

`mode: "replies"` è più rigorosa. Ogni riga di post ha `inReplyToId` uguale
all'ID del post richiesto. Le risposte annidate nella conversazione non contano
mai come risposte dirette. Se X mostra meno risposte di quante ne dichiara,
l'Actor tiene le righe trovate. Aggiunge 1 record `replies-incomplete` a
`diagnostics` quando il tuo limite non è raggiunto. L'esecuzione resta parziale
finché raggiunge il tuo limite o X non ha più risposte. `replyCoverage` riporta
il numero di risposte & i dettagli della copertura. Imposta `maxItems` sul
totale che vuoi, anche oltre 25.000 per un singolo target di risposte.

Le righe degli articoli includono `resultType: "article"`, `sourceTweetId`,
`article` & un `author` facoltativo. Le righe utente di engagement includono
`resultType: "user"`, `sourceTweetId` & `engagementMode`.

`retweeters` funziona come una normale modalità di engagement pubblico.
`favoriters` funziona al meglio delle possibilità. X può mostrare chi ha messo
Mi piace solo sui post idonei o visibili all'autore. Anche i Mi piace del
profilo funzionano al meglio, perché molti profili pubblici non hanno una scheda
Mi piace leggibile. Se X non mostra utenti o post con Mi piace, l'Actor scrive un
record `diagnostics` gratuito. Le righe dei post possono riportare il numero di
segnalibri. X non mostra quali account hanno salvato un post nei segnalibri.

### Esporta righe CSV piatte

Tieni i campi JSON annidati predefiniti, oppure aggiungi colonne adatte ai fogli
di calcolo:

```json
{ "searchTerms": ["from:nasa moon"], "maxItems": 100, "outputPreset": "flat" }
```

L'output piatto lascia invariati `author` & `media`. Aggiunge campi di primo
livello come `authorUsername`, `authorName`, `authorFollowers`, `tweetUrl`,
`twitterUrl`, `mediaUrls`, `imageUrls` & `videoUrls`.

Ogni riga piatta di post riporta `media`. Un post senza media ha un elenco
vuoto. Così ogni riga ha le stesse chiavi in un foglio di calcolo o in una
pipeline tipizzata.

### Scegli i nomi dei campi

I nomi dei campi legacy sono quelli predefiniti. Scegli uno stile per i
risultati rich o raw:

```json
{
  "searchTerms": ["from:nasa moon"],
  "maxItems": 100,
  "outputVariant": "rich",
  "fieldStyle": "snake_case"
}
```

Usa `camelCase` o `snake_case` per i campi dei risultati di primo livello &
annidati. L'output piatto in snake case include campi come `author_username` &
`media_urls`. Le copie sicure dei dati di origine sotto `raw` conservano le loro
chiavi originali. Anche i nomi di origine in conflitto restano invariati, per
non perdere dati.

La diagnostica legacy usa `resultType`, `actorVersion` & `replyCoverage`.
L'output rich & raw applica `fieldStyle` a ogni livello di annidamento. Per
esempio, lo snake case usa `result_type`, `actor_version` & `reply_coverage`. La
vista Overview del dataset funziona con entrambi gli stili. Scegli la vista
della Console che corrisponde al `fieldStyle` dell'esecuzione.
`camelCase fields` si aspetta `camelCase`. `snake_case fields` si aspetta
`snake_case`. Le viste scelgono solo le colonne. Non rinominano mai i dati
salvati o esportati.

### Combina filtri avanzati

Combina filtri su utente, data, posizione, media & engagement:

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

Imposta `queryType: "Latest + Top"` per usare entrambe le modalità di ricerca di
X in 1 esecuzione. L'Actor rimuove i duplicati prima della fatturazione &
riempie il tuo limite con l'una o l'altra modalità. `Top` ordina per pertinenza
& non restituisce ogni corrispondenza. Imposta `includeSearchTerms: true` per
allegare ogni query corrispondente come campo `searchTerm`.

Quando imposti `lang`, l'Actor verifica la lingua di ogni post restituito. Salta
quelli diversi & continua a leggere per trovare post corrispondenti.

## Esempi di task

Scegli tra 50 task pubblici. Ognuno ha un input limitato & una vista del dataset
adatta. Ogni task parte da una ricerca o da un target reale. Modificalo prima di
avviarlo.

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
- [Collect electric vehicle conversations](https://apify.com/xquik/x-tweet-scraper/examples/collect-electric-vehicle-conversations)

## Quanto costa estrarre i tweet?

X Tweet Scraper di Xquik costa $0.00015 per riga consegnata su ogni piano Apify.
Apify fattura a parte il tuo uso della piattaforma. Xquik applica un addebito
per ogni riga di dati consegnata. La diagnostica nell'output `diagnostics` è
gratuita.

- Non ti serve un abbonamento Xquik.
- Non paghi costi separati di avvio o per query. Nemmeno URL & ricerche di un
  singolo post aggiungono costi.
- Filtri & deduplicazione agiscono prima della fatturazione. Non paghi mai le
  righe filtrate o duplicate.
- Le esecuzioni senza input, con input non valido o senza output scrivono 1
  record con le azioni da fare nell'output gratuito `diagnostics`.

Anche le esecuzioni grandi o con un problema scrivono un record `run-report`. Il
suo `estimatedChargeUsd` usa il prezzo pay-per-event aggiornato di Apify. Le
esecuzioni con un problema scrivono sempre `run-report`, incluse le uscite senza
input o con input non valido. Un'esecuzione piccola senza problemi lo salta &
risparmia uso di Apify. Attiva `alwaysSaveRunRecords` per scriverlo a ogni
esecuzione. I report separano le righe di dati in `realRows` dalla diagnostica
in `diagnosticRows`.

Per fissare un tetto alla spesa di un'esecuzione, vedi
[Opzioni di esecuzione](#opzioni-di-esecuzione).

## Benchmark

Su costo & velocità, X Tweet Scraper di Xquik ha battuto altri 11 Actor che
estraggono post. La sua riga mediana aveva 63 campi, 2x la mediana degli altri.

| Actor                                                             | Tweet utili | Costo per tweet utile | Tweet utili al secondo | Campi per riga | Esecuzione pubblica                                                      |
| ----------------------------------------------------------------- | ----------: | --------------------: | ---------------------: | -------------: | ------------------------------------------------------------------------ |
| xquik/x-tweet-scraper                                             |         890 |             $0.000175 |                   39.2 |             63 | [Vedi esecuzione](https://console.apify.com/view/runs/fflWVxHwYvtyHpAQX) |
| xquik/x-tweet-scraper                                             |         883 |             $0.000176 |                   25.2 |             63 | [Vedi esecuzione](https://console.apify.com/view/runs/EtSdBgkUcH4M1uicf) |
| xquik/x-tweet-scraper                                             |         882 |             $0.000177 |                   25.7 |             63 | [Vedi esecuzione](https://console.apify.com/view/runs/SK3ZWhPwzGJYoYQba) |
| xquik/x-tweet-scraper                                             |         877 |             $0.000178 |                   26.9 |             63 | [Vedi esecuzione](https://console.apify.com/view/runs/JRdbcigkBMCaFuH1W) |
| scrapesmith/twitter-x-scraper-tweets-profiles-replies             |         813 |             $0.000185 |                   10.5 |             36 | [Vedi esecuzione](https://console.apify.com/view/runs/mIT1zf0xccCsYWO1E) |
| scrapesmith/twitter-x-scraper-tweets-profiles-replies             |         805 |             $0.000187 |                   10.6 |             36 | [Vedi esecuzione](https://console.apify.com/view/runs/p1MUeElsamZUepTpm) |
| scrapesmith/twitter-x-scraper-tweets-profiles-replies             |         805 |             $0.000187 |                   10.7 |             36 | [Vedi esecuzione](https://console.apify.com/view/runs/pQlQa0GMm7BWTUUOB) |
| kaitoeasyapi/twitter-x-data-tweet-scraper-pay-per-result-cheapest |         880 |             $0.000250 |                    9.1 |             46 | [Vedi esecuzione](https://console.apify.com/view/runs/3Fn8yvqncsWdcw1I2) |
| scraper_one/x-posts-search                                        |         804 |             $0.000314 |                    3.3 |             14 | [Vedi esecuzione](https://console.apify.com/view/runs/M9TgeCLLKZlNTOrj0) |
| danek/twitter-scraper                                             |         807 |             $0.000347 |                    5.0 |             27 | [Vedi esecuzione](https://console.apify.com/view/runs/kyeJqCeaARxQPGM5W) |
| tweetapi/twitter-x-search-scraper                                 |         337 |             $0.000374 |                    2.6 |             28 | [Vedi esecuzione](https://console.apify.com/view/runs/mxkP8EDAUVtCZdobb) |
| api-ninja/x-twitter-advanced-search                               |         837 |             $0.000430 |                    7.4 |             28 | [Vedi esecuzione](https://console.apify.com/view/runs/XAWKinvZyPNjCwrib) |
| apidojo/twitter-scraper-lite                                      |         251 |             $0.000494 |                   12.9 |             54 | [Vedi esecuzione](https://console.apify.com/view/runs/1t4XwmbQNTtwMJ0Ta) |
| apidojo/tweet-scraper                                             |         481 |             $0.000832 |                    7.8 |             55 | [Vedi esecuzione](https://console.apify.com/view/runs/PydoBgS1YRblg29bB) |
| xtdata/twitter-x-scraper                                          |       1.378 |             $0.001168 |                   11.9 |             67 | [Vedi esecuzione](https://console.apify.com/view/runs/U91dRXEvKvqu41aop) |
| seemuapps/x-tweet-scraper                                         |         805 |             $0.001242 |                    6.9 |             24 | [Vedi esecuzione](https://console.apify.com/view/runs/FstursEw43TbcipYU) |
| maximedupre/twitter-scraper                                       |          46 |             $0.002846 |                    0.3 |             31 | [Vedi esecuzione](https://console.apify.com/view/runs/Hs8irhEcAfWcQNc4w) |

Ogni Actor ha eseguito la stessa ricerca con gli stessi filtri. Gli altri Actor
sono stati eseguiti il 2026-09-27. Le esecuzioni di Xquik hanno usato
`outputVariant: "rich"` il 2026-09-29. Tutte le esecuzioni hanno usato il
livello Bronze. Un tweet utile è un post originale unico in inglese con 10+
like. Il costo è la spesa totale del cliente per tweet utile. Il nostro include
l'uso di Apify che pagano i nostri clienti. Campi per riga è la mediana dei
campi non vuoti, inclusi quelli annidati. Una lista conta come 1 campo. Apri
un'esecuzione per vedere input, log & dataset.

## Esecuzioni vuote, parziali & interrotte

X Tweet Scraper di Xquik spiega gratis le esecuzioni vuote, parziali &
interrotte. Lo stato dell'esecuzione dice perché si è fermata. Conta anche i
risultati addebitati & i target letti.

### Risultati vuoti

Controlla un risultato vuoto prima di pagare un'altra esecuzione. L'oggetto
`filtering` nei report & nella diagnostica finale conta le righe rimosse dai
tuoi filtri. Leggi `serverFilteredRows`, `actorFilteredRows` &
`pagesWithUnknownServerFiltering`. Non paghi mai addebiti sui risultati per le
righe filtrate.

Un'esecuzione può finire sotto il tuo limite quando X non ha altri risultati.
Riporta `outcome: "complete"` con `completionReason: "source_exhausted"`. Le
esecuzioni interrotte conservano il loro esito parziale & le indicazioni per
riprovare.

### Esecuzioni parziali

`failedSubtargets` conta le query & i target di profilo che si sono fermati dopo
un errore. Le righe consegnate restano nel dataset & contano per la
fatturazione. Un errore non significa mai che il target manchi. Queste
esecuzioni usano `completionReason: "partial_failure"`.

Un'esecuzione interrotta scrive anche una diagnostica `partial` gratuita. I
risultati già consegnati restano intatti. La diagnostica riporta
`availableResults`, `failedTargets`, `retryable` & `nextAction`. Un'uscita
riuscita dell'Actor conferma la consegna. Non conferma l'estrazione completa.

### Cause di arresto

Il testo dello stato nomina ogni causa dell'arresto. Un'esecuzione con un
account mancante & una ricerca bloccata le cita entrambe. `stopCauses` elenca
ogni causa con i propri `message`, `retryable` & `nextAction`. Le cause sono
`target_not_found`, `target_protected`, `search_unavailable`, `likes_hidden`,
`target_failed`, `pagination_safety_limit`, `reply_reach` & `deadline_reached`.
L'esecuzione è `retryable` quando lo è almeno una causa.

### Target mancanti & non disponibili

Un target mancante o protetto non è un errore. Lì X non ha nulla da leggere.
L'esecuzione legge fino in fondo tutti gli altri target. Riporta
`outcome: "complete"`. Il suo motivo di completamento viene dai target letti,
come `source_exhausted`. `failedSubtargets` esclude quei target. Il testo dello
stato & una diagnostica `complete` gratuita li contano. Un'esecuzione senza
altre righe scrive invece una diagnostica `zero-output`.

Una ricerca che X non riesce a eseguire conta come errore. Per una ricerca così
X.com mostra "Something went wrong". L'esecuzione la ferma subito, senza nuovi
tentativi. Anche i Mi piace che X nasconde contano come errori & si fermano
subito. X mostra chi ha messo Mi piace a un post solo al suo autore. Mostra i
post a cui un account ha messo Mi piace solo a quell'account.

Quando tutti gli errori riguardano target non disponibili, la diagnostica imposta
`retryable: false`. Controlla gli URL o i nomi utente dei target & scegli account
pubblici disponibili. Restringi una ricerca che X non riesce a eseguire o
cambiane i filtri. Al posto dei Mi piace nascosti, leggi utenti che hanno fatto
repost, risposte o post. Gli altri errori conservano le indicazioni per
riprovare i target non finiti.

La diagnostica nomina quei target in `unavailableTargets`. Ogni voce ha il
`target` come lo hai inserito, un `reason` & un `nextAction`. Il motivo è
`not_found`, `protected`, `search_unavailable` o `likes_hidden`. Una voce di
ricerca può avere anche un `fix`, come l'operatore da rimuovere. L'elenco
contiene fino a 100 voci. Rimuovi quei target dal tuo input.

### Limiti di sicurezza & di tempo

`completionReason: "pagination_safety_limit"` non è un errore di lettura.
L'esecuzione ha tenuto le righe valide. Poi ha chiuso un target che non
restituiva più risultati nuovi. L'esecuzione segnala un'estrazione incompleta.
`failedSubtargets` resta `0`. Paghi solo le righe consegnate.

Il timeout predefinito di Apify è `0`, quindi le esecuzioni non hanno limite di
tempo. L'Actor continua finché raggiunge il tuo limite o esaurisce i dati
idonei. Puoi comunque impostare un timeout finito su Apify. In quel caso
`completionReason: "deadline_reached"` indica che il limite è vicino. L'Actor
salva righe & report, poi termina in modo pulito prima del limite. Paghi una
volta ogni riga consegnata.

## Input

La scheda Input elenca ogni opzione. Indica almeno uno tra `startUrls`,
`twitterHandles`, `listIds`, `tweetIds`, `searchTerms` o `twitterContent`.
Funzionano anche i loro alias documentati. Tutti gli altri campi sono
facoltativi.

Esempi:

- Incolla l'URL di un post in Start URLs.
- Incolla l'URL di un profilo o aggiungi il nome utente in X handles.
- Usa `from:user since:YYYY-MM-DD until:YYYY-MM-DD` come termine di ricerca per
  recuperare lo storico di un account.
- Incolla l'URL di una lista in Start URLs.
- Combina `twitterContent` con filtri come `from:`, `since:`, `min_faves:` &
  `filter:media` per ricerche avanzate.

### Principali operatori di ricerca supportati

| Operatore              | Esempio                | Scopo                                     |
| ---------------------- | ---------------------- | ----------------------------------------- |
| `from:`                | `from:elonmusk`        | Solo post di questo utente                |
| `to:`                  | `to:OpenAI`            | Solo risposte a questo utente             |
| `@`                    | `@nasa`                | Post che menzionano questo utente         |
| `list:`                | `list:123456`          | Post dei membri della lista               |
| `lang:`                | `lang:en`              | Filtra per lingua                         |
| `since:` / `until:`    | `since:2026-01-01`     | Intervallo di date                        |
| `min_faves:`           | `min_faves:100`        | Soglia di engagement                      |
| `min_retweets:`        | `min_retweets:50`      | Soglia di repost                          |
| `filter:media`         | `filter:media`         | Operatore di ricerca di X per i media     |
| `filter:videos`        | `filter:videos`        | Operatore di ricerca di X per i video     |
| `filter:images`        | `filter:images`        | Operatore di ricerca di X per le immagini |
| `filter:links`         | `filter:links`         | Solo post con link                        |
| `filter:replies`       | `filter:replies`       | Solo risposte                             |
| `filter:quote`         | `filter:quote`         | Solo post di citazione                    |
| `filter:blue_verified` | `filter:blue_verified` | Solo utenti Premium                       |

X non cerca più con `filter:vine`, `filter:consumer_video`, `filter:pro_video`,
`filter:news` o `retweets_of:`. Una ricerca con uno di questi termina subito.
Una diagnostica gratuita indica la correzione. Tieni ogni query entro 512
caratteri. X non cerca oltre.

Le finestre di date includono il limite inferiore & escludono quello superiore.
L'Actor controlla entrambi i limiti prima di aggiungere o addebitare ogni post.

Per l'elenco completo degli operatori, vedi
[Twitter Advanced Search](https://github.com/igorbrigadir/twitter-advanced-search).

### Migra da un altro Actor di tweet

Incolla l'input che usi già. X Tweet Scraper di Xquik legge i nomi dei campi
usati da altri Actor che estraggono post. Li converte nei propri campi. I nomi
canonici restano quelli documentati di default. Un alias non scarta mai un campo
& non cambia mai quanto paghi. Il modulo di input elenca solo i campi canonici,
così resta breve. Gli alias funzionano negli input JSON, API, SDK, di
automazione & dei task salvati.

| Campo che usi già                                                                                                                                                      | Xquik lo legge come                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `startUrls`, `urls`, `tweetUrls`, `postUrls`, `profileUrls`, `accountUrls`                                                                                             | `startUrls`                                                              |
| `profileUrl`, come stringa singola                                                                                                                                     | `startUrls`                                                              |
| `tweetIds`, `tweetIDs`, `tweets`, `postIds`, `lookupPostIds`, `tweet_ids`, o `tweetId` come stringa singola                                                            | `tweetIds`                                                               |
| `twitterHandles`, `usernames`, `user_names`, `userNameList`, `handles`, `screenNames`, `profileTweets`                                                                 | `twitterHandles`                                                         |
| `username`, `handle`, `screenName`, come stringa singola                                                                                                               | `twitterHandles`                                                         |
| `searchTerms`, `searchQueries`, `queries`, `search`, come elenco o 1 ricerca per riga                                                                                  | `searchTerms`                                                            |
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

- Ogni fonte viene eseguita. Un input con URL, nomi utente, termini di ricerca,
  ID delle liste & ID dei post li esegue tutti. `maxItems` vale per l'intera
  esecuzione.
- Una query di ricerca accanto a `searchTerms` viene eseguita come 1 termine in
  più.
- Un URL di profilo scritto come `x.com/@name` viene letto come `x.com/name`.
- Quando imposti un alias & il suo campo canonico, vince il valore canonico. Il
  log dell'esecuzione nomina l'alias scartato.
- Il log dell'esecuzione nomina ogni campo che l'Actor ignora, come
  `customMapFunction`. L'Actor non scarta mai un campo in silenzio.
- Un limite di righe deve essere un numero intero da 1 in su. `maxResults: 0`
  ferma l'esecuzione prima di leggere o addebitare qualcosa.
- `quickDateRange: "m1"` legge l'ultimo mese su ogni percorso. Mesi & anni si
  contano a ritroso sul calendario. Senza h, d, w, m o y, l'esecuzione si ferma
  prima di leggere o addebitare qualcosa.
- L'Actor non ha un'unità pagina. Sostituisci `maxPages` con `maxItems`.
- L'Actor non ha un campo per l'ID utente. Invia nomi utente o URL di profili al
  posto di `userId` o `user_ids`.
- I campi degli operatori di ricerca come `from`, `min_faves`, `since_time` &
  `filter:images` usano già i nomi di X. Non serve convertirli.

### Input da Console & API

Il modulo della Console ha questi controlli:

- Mode, Output Variant, Field Style, Output Preset & Sort By sono menu a tendina
  validati.
- Start URLs & Profile URLs accettano stringhe o oggetti `{ "url": "..." }`. I
  loro editor JSON conservano entrambi i formati API.
- I filtri strutturati offrono controlli raggruppati, così non ti serve JSON
  annidato.
- Il modulo nasconde gli operatori piatti già coperti da un gruppo di filtri.
  Gli input JSON, API, SDK, di automazione & dei task salvati li accettano
  comunque.
- Max Items & Max Items Per Target accettano numeri interi da 1 in su. Le soglie
  di engagement accettano numeri interi da 0 in su.

Usa i campi canonici nelle nuove integrazioni. Gli alias della tabella di
migrazione qui sopra restano disponibili. `includeRaw` è un alias di
`outputVariant: "raw"`. I vecchi valori di `outputVariant` come `compact` &
`full` funzionano ancora come output Legacy. Il modulo li etichetta come alias
Legacy.

## Output

Ogni riga di post è un oggetto JSON con i metadati che X rende disponibili. Gli
schemi del dataset & del run-report danno a ogni campo un titolo, una
descrizione & un esempio. Gli agenti AI possono leggerli senza tirare a
indovinare il significato di un campo.

I valori di esempio sono illustrativi. Le tue esecuzioni restituiscono dati live
da X.

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

Esporta il dataset in JSON, CSV, Excel o HTML.

## Opzioni di esecuzione

- Imposta l'addebito massimo totale di Apify per limitare il costo
  dell'esecuzione. Lascia vuoto `maxItems` per avere tutte le righe che il
  budget consente. Imposta `maxItems` quando vuoi meno post.
- Imposta `maxTotalChargeUsd` nell'API di Apify, oppure Max cost per run in
  Console. Apify passa quel limite all'Actor come `ACTOR_MAX_TOTAL_CHARGE_USD`.
  L'Actor lo converte nel numero massimo di righe fatturabili.
- Passa `tweetIds` per cercare molti post in una volta. Incolla l'URL di un
  profilo per leggere i post di un account.
- Con molte query, imposta `includeSearchTerms: true` per etichettare ogni
  risultato con il suo termine di ricerca.
- Imposta `queryType: "Latest + Top"` per usare entrambe le modalità di ricerca
  di X in 1 esecuzione. Deduplicazione & limiti dei risultati valgono per
  entrambe.
- Usa i monitor di Xquik per account o parole chiave per controlli ogni secondo
  & webhook firmati. I monitor attivi controllano ogni secondo.

### Usa sempre la build più recente

Scegli `latest` per ogni esecuzione, così ricevi ogni correzione pubblicata.

Se non scegli una build, Apify avvia X Tweet Scraper di Xquik con il suo default
`latest`. Le esecuzioni dalla Console & gli esempi API standard ereditano quel
default.

I task salvati possono sovrascrivere il default dell'Actor. Pianificazioni &
integrazioni dei task riusano quella scelta. Tieni ogni override su `latest`.

Apify non reindirizza i numeri di build esatti a `latest`. Sostituisci i numeri
fissati con `latest`. Usa una build esatta solo per un rollback temporaneo o per
riprodurre un'esecuzione.

Leggi su Apify i
[tag di build](https://docs.apify.com/platform/actors/development/builds-and-runs/builds),
le [opzioni di esecuzione](https://docs.apify.com/platform/actors/running/runs-and-builds)
& la [documentazione dei task](https://docs.apify.com/platform/actors/running/tasks).

## Actor Xquik correlati

Ogni Actor Xquik usa lo stesso motore di estrazione, fattura dopo i filtri &
offre la stessa diagnostica. Scegli quello adatto ai dati che ti servono.

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
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer):
  stima un Viral Score da 0 a 100 & un verdetto per ogni post da 8 risposte AI
  sui suoi tratti. Usalo quando studi perché i post si diffondono o falliscono.
  Da $0.0003 per post analizzato.

## Ti serve più dello scraping?

Xquik offre anche 47 strumenti nella dashboard, 129 operazioni REST, webhook
firmati & un server MCP.

- [Documentazione API](https://docs.xquik.com/introduction): guide all'API REST
- [Search Tweets API](https://docs.xquik.com/api-reference/x/search-tweets):
  cerca post via REST
- [Batch Tweets API](https://docs.xquik.com/api-reference/x/batch-tweets):
  recupera fino a 100 post per ID
- [User Tweets API](https://docs.xquik.com/api-reference/x/user-tweets): ottieni
  la timeline di un utente
- [Server MCP](https://docs.xquik.com/mcp/overview): scopri gli strumenti
  supportati
- [Webhook](https://docs.xquik.com/webhooks/overview): consegna firmata degli
  eventi
- [GitHub](https://github.com/Xquik-dev/x-twitter-scraper): codice sorgente &
  segnalazione dei problemi

## FAQ

### Serve una chiave API X?

No. Non ti servono chiave API X, login o credenziali.

### Cosa limita un'esecuzione?

Il tuo limite di elementi & il tuo limite di spesa su Apify fermano
l'esecuzione. Restano validi i limiti dell'account & della piattaforma Apify.

### Quanto è veloce?

Nel [benchmark](#benchmark), X Tweet Scraper di Xquik ha consegnato da 25,2 a
39,2 post utili al secondo. Il tempo di esecuzione dipende dal tuo input, dal
numero di risultati & dalla disponibilità di X.

### Perché una ricerca Latest restituisce post che la scheda Più recenti di X non mostra?

X lascia fuori dalla scheda Più recenti alcuni post che corrispondono. X Tweet
Scraper di Xquik restituisce anche quei post. Ogni post è un vero risultato
della ricerca di X per la tua query. Paghi ogni post una sola volta.

### Quali operatori di ricerca funzionano?

La ricerca avanzata di X supporta autori, destinatari, menzioni, date,
engagement, media & posizione. Consulta
[Principali operatori di ricerca supportati](#principali-operatori-di-ricerca-supportati)
per gli esempi.

### Posso usare l'API di Apify per avviarlo?

Sì. Consulta la [scheda API](https://apify.com/xquik/x-tweet-scraper/api) per
esempi in Python, JavaScript & cURL.

### Posso pianificare estrazioni ricorrenti?

Sì. Usa la [pianificazione](https://docs.apify.com/platform/schedules) integrata
di Apify per avviare X Tweet Scraper di Xquik con un cron.

### Posso avere una soluzione personalizzata?

Sì. Visita [xquik.com](https://xquik.com) o leggi la
[documentazione API](https://docs.xquik.com/introduction) per dashboard, API,
server MCP & webhook.

### È legale estrarre i dati di X?

X Tweet Scraper di Xquik raccoglie campi pubblici di X. I risultati possono
contenere dati personali. Verifica di avere uno scopo lecito & rispetta le norme
sulla privacy che valgono per te. Nel dubbio, chiedi a un legale qualificato.

### Dove trovo assistenza?

Apri una issue nella scheda Issues della pagina dell'Actor o su
[GitHub](https://github.com/Xquik-dev/x-twitter-scraper/issues). Puoi anche
scrivere a support@xquik.com con l'ID dell'esecuzione.
