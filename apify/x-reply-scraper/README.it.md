[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · **Italiano**

[![Framer collega Xquik MCP agli agenti di coding](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Guarda come Framer usa gli scraper Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
con Claude Code, Codex, Cursor & altro, da 6:07.

Xquik è il servizio di scraping X (Twitter) più veloce & economico al mondo, con
i dati X più completi. X Reply Scraper di Xquik raccoglie risposte, commenti &
intere conversazioni. La maggior parte degli altri Actor Apify fa pagare prima
di filtrare o deduplicare. Xquik fa pagare solo i **risultati consegnati, unici
e conformi ai filtri**.

Estrai risposte & commenti di Twitter a **$0.00015 per riga consegnata** su ogni
piano Apify, & leggili senza un account X. Incolla URL di post, ID dei post, URL
di profili o nomi utente. Esporta risposte, conversazioni, autori, engagement,
entità & URL dei media. Apify fattura a parte il tuo uso della piattaforma. Non
ti serve il login a X. I filtri agiscono prima della scrittura nel dataset,
quindi paghi solo le righe consegnate.

> Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.
> "Twitter" e "X" sono marchi di X Corp.

## Cosa fa X Reply Scraper?

X Reply Scraper di Xquik raccoglie risposte pubbliche & conversazioni nei
commenti. Gestisce singoli post, elenchi di URL in blocco, ID dei post &
timeline delle risposte degli utenti.

### Funzionalità principali

- La modalità auto continua a raccogliere quando i risultati diretti sono
  incompleti.
- `collectionStrategy` definisce come l'Actor raccoglie le risposte.
- Gli input in blocco accettano URL di post, ID dei post, profili & nomi utente.
- Filtri & rimozione dei duplicati agiscono prima della fatturazione.
- L'output supporta 4 ordinamenti, 3 livelli di dettaglio & 3 stili di campo.
- Ogni risposta conserva target di origine, ID dei genitori, ID radice &
  profondità.
- I cursori di continuazione supportano recuperi di dati passati & esecuzioni
  pianificate.
- Le esecuzioni che richiedono attenzione scrivono 1 record gratuito in
  `diagnostics`. Un'esecuzione che legge ogni target & non trova risposte non ne
  scrive nessuno. Il suo stato dice perché.
- I log dell'esecuzione mostrano i tempi per pagina & per target in
  `fetchDurationMs`, `processingDurationMs`, `pushDurationMs`,
  `statusDurationMs`, `fullPageDurationMs` & `fullTargetDurationMs`.
- Le esecuzioni conservano risposte consegnate & progressi quando Apify le
  riavvia.

### Casi d'uso

- Misura sentiment & feedback dei clienti sotto i post di brand & prodotti.
- Classifica le risposte & i commenti con più Mi piace sotto un post virale.
- Trova lead che fanno domande o esprimono un bisogno nelle risposte pubbliche.
- Controlla le risposte per moderazione, spam & abusi.
- Ricostruisci intere conversazioni per ricerca & dataset di addestramento AI.
- Segui nel tempo come un account risponde ai suoi clienti.

### Quali dati può estrarre X Reply Scraper?

Gli schemi del dataset & del run-report descrivono ogni campo restituito. I
campi di testo, numerici & booleani riportano anche esempi per agenti &
integrazioni generate.

Ogni riga completa di risposta può includere questi campi principali.

| Campo               | Descrizione                                       |
| ------------------- | ------------------------------------------------- |
| `id`                | ID della risposta                                 |
| `text`              | Testo della risposta                              |
| `fullText`          | Testo lungo della risposta                        |
| `createdAt`         | Timestamp della risposta                          |
| `lang`              | Codice lingua di X                                |
| `url`               | URL diretto della risposta                        |
| `conversationId`    | ID della conversazione su X                       |
| `inReplyToId`       | ID del genitore diretto                           |
| `inReplyToUserId`   | ID dell'autore del genitore                       |
| `inReplyToUsername` | Nome utente del genitore                          |
| `likeCount`         | Mi piace                                          |
| `replyCount`        | Risposte figlie                                   |
| `retweetCount`      | Repost                                            |
| `quoteCount`        | Citazioni                                         |
| `viewCount`         | Visualizzazioni                                   |
| `bookmarkCount`     | Segnalibri                                        |
| `author`            | Metadati pubblici disponibili dell'autore         |
| `media`             | Immagini, video, GIF e varianti                   |
| `entities`          | Hashtag, cashtag, menzioni, URL & timestamp video |
| `quoted_tweet`      | Post citato, quando disponibile                   |
| `retweeted_tweet`   | Post originale del repost, quando disponibile     |

Le righe complete conservano anche i metadati di origine disponibili.

- I campi sul tipo di post sono `type`, `isReply`, `isQuoteStatus`,
  `isNoteTweet`, `isLimitedReply` & `isTranslatable`.
- I dettagli del testo sono `displayTextRange`, `noteTweet`, `article`, `card` &
  `cashtagAttachments`.
- Etichette & avvisi sono `contentDisclosure`, `communityNote`,
  `possiblySensitive`, `tombstone` & `exclusiveContent`.
- I dettagli della conversazione sono `conversationControl`, `limitedActions`,
  `subscriberBadge` & `unmentionedUserIds`.
- I campi di contesto sono `source`, `place`, `communityId`, `communityName`,
  `reactionContext` & `postCta`.
- I campi su modifiche & disponibilità sono `edit`, `previousCounts`,
  `viewState` & `authorUnavailable`.

Le righe piatte conservano la catena della conversazione, i dettagli di origine,
il tipo di risultato & la versione dello schema. Consulta OpenAPI per i campi
esatti.

## Come uso X Reply Scraper per estrarre le risposte?

Non usi ancora Apify?
[Crea prima un account gratuito](https://console.apify.com/sign-up?fpr=xquik).
Il piano gratuito non richiede carta di credito & offre $5 da spendere ogni
mese. A $0.00015 per riga, $5 coprono fino a 33.000 righe, senza contare l'uso
della piattaforma. Poi torna qui & premi Try for free.

1. Incolla URL di post, ID dei post, URL di profili o nomi utente.
2. Imposta `maxItems`, `scope` & i filtri che servono al tuo lavoro.
3. Avvia X Reply Scraper di Xquik & apri il dataset.

Il modulo arriva compilato con una conversazione pubblica che abbiamo testato.
Restituisce fino a 1.000 righe complete e piatte. Di default, la modalità auto
cerca nell'intera conversazione. Deduplicazione & attribuzione dell'origine
restano attive.

### Estrai le risposte da un URL di post

```json
{
  "startUrls": [{ "url": "https://x.com/OpenAI/status/2082577277246972300" }],
  "maxItems": 100
}
```

### Estrai le risposte dagli ID dei post

```json
{
  "tweetIds": ["2082577277246972300", "2083148725367783580"],
  "maxItemsPerTarget": 100,
  "maxItems": 10000
}
```

### Raccogli l'intera conversazione annidata

```json
{
  "tweetIds": ["2082577277246972300"],
  "collectionStrategy": "conversationSearch",
  "scope": "all",
  "maxDepth": 5,
  "sort": "oldest",
  "maxItems": 500
}
```

### Estrai la timeline delle risposte di un utente

```json
{ "usernames": ["OpenAI", "apify"], "maxItems": 10000 }
```

### Filtra le risposte prima della fatturazione

```json
{
  "tweetIds": ["2082577277246972300"],
  "anyWords": ["API", "agent", "developer"],
  "excludeWords": ["airdrop", "giveaway"],
  "lang": "en",
  "minLikes": 2,
  "minViews": 100,
  "verifiedOnly": true,
  "maxItems": 10000
}
```

### Esporta righe piatte adatte al CSV

```json
{
  "tweetIds": ["2082577277246972300"],
  "outputMode": "full",
  "outputPreset": "flat",
  "fieldStyle": "camelCase",
  "maxItems": 100
}
```

## Esempi di task

Scegli tra 50 task pubblici. Ognuno ha un input limitato & una vista del dataset
adatta. Modifica qualsiasi task prima di avviarlo.

- [Estrai le risposte ai post di X & i commenti di Twitter](https://apify.com/xquik/x-reply-scraper/examples/scrape-post-replies)
- [Estrai risposte di Twitter in blocco](https://apify.com/xquik/x-reply-scraper/examples/scrape-bulk-post-replies)
- [Ricostruisci una conversazione di risposte su Twitter](https://apify.com/xquik/x-reply-scraper/examples/rebuild-full-conversation)
- [Ordina le risposte di Twitter per Mi piace](https://apify.com/xquik/x-reply-scraper/examples/rank-most-liked-replies)
- [Estrai le risposte più recenti ai post](https://apify.com/xquik/x-reply-scraper/examples/collect-latest-replies)
- [Rimuovi lo spam dalle risposte di Twitter](https://apify.com/xquik/x-reply-scraper/examples/exclude-spam-keywords)
- [Estrai le risposte di Twitter in inglese](https://apify.com/xquik/x-reply-scraper/examples/collect-english-replies)
- [Estrai le risposte di Twitter degli account verificati](https://apify.com/xquik/x-reply-scraper/examples/collect-verified-replies)
- [Estrai le risposte di Twitter con media](https://apify.com/xquik/x-reply-scraper/examples/collect-media-replies)
- [Estrai la timeline delle risposte di un utente Twitter](https://apify.com/xquik/x-reply-scraper/examples/scrape-profile-replies)
- [Raccogli risposte di Twitter per agenti AI](https://apify.com/xquik/x-reply-scraper/examples/collect-replies-for-ai-agents)
- [Crea un dataset RAG di risposte di X](https://apify.com/xquik/x-reply-scraper/examples/build-x-reply-rag-dataset)
- [Archivia risposte di Twitter per gli LLM](https://apify.com/xquik/x-reply-scraper/examples/archive-replies-for-llm-processing)
- [Estrai lead dalle risposte di X per il CRM](https://apify.com/xquik/x-reply-scraper/examples/extract-reply-leads-for-crm)

## Quanto costa estrarre le risposte di X?

X Reply Scraper di Xquik costa $0.00015 per riga consegnata su ogni piano Apify.
Apify fattura a parte l'uso della piattaforma.

Per volumi maggiori,
[scegli un piano Apify](https://apify.com/pricing?fpr=xquik) con più uso
prepagato.

Xquik applica un addebito per ogni riga di dati consegnata. Le risposte rimosse
da filtri o deduplicazione non costano nulla. I record di diagnostica in
`diagnostics` sono gratuiti. Non ci sono costi di avvio, per URL, per query, per
paginazione o per filtro.

## Esecuzioni vuote, parziali & interrotte

X Reply Scraper di Xquik spiega gratis le esecuzioni vuote, parziali &
interrotte. Lo stato dell'esecuzione dice perché si è fermata. Conta anche i
risultati addebitati & i target letti. Un'esecuzione che legge ogni target & non
trova risposte non scrive alcun record. Il suo stato dice perché & cosa
cambiare.

### Estrazione incompleta

Un'esecuzione interrotta scrive una diagnostica `partial` gratuita. I risultati
disponibili restano intatti. Leggi `availableResults`, `failedTargets`,
`retryable` & `nextAction` prima di riprovare. Un'uscita riuscita dell'Actor
conferma la consegna, non l'estrazione completa.

Lo stato nomina ogni causa di un arresto anticipato. `stopCauses` elenca ogni
causa con i propri `message`, `retryable` & `nextAction`. Le cause sono
`target_not_found`, `target_failed`, `page_limit`, `reply_reach` &
`deadline_reached`. `reply_reach` significa che X ha fornito solo una parte di
un thread.

Un post o un account mancante non conta come errore. Lo stato lo nomina, come "X
has no match for 1 target." Entra in `stopCauses` solo se un'altra causa ha
fermato l'esecuzione. L'esecuzione è `retryable` quando lo è almeno una causa.

### Diagnostica

Le righe di dati riuscite usano `resultType: "reply"`. Un'esecuzione che
richiede attenzione scrive esattamente 1 record gratuito in `diagnostics`. Ne
sono esempi un input non valido, un target saltato o un arresto anticipato. Il
record spiega come risolvere il problema. Un'esecuzione che legge ogni target &
non trova risposte non ne scrive nessuno. Il suo stato dice perché.

Lo stato dell'esecuzione dice perché si è fermata. Conta anche i risultati
addebitati & i target letti. Le esecuzioni con un problema scrivono sempre
`run-report`, incluse le uscite senza input o con input non valido. Lo scrive
anche un'esecuzione grande. Un'esecuzione piccola senza problemi lo salta &
risparmia uso di Apify. Attiva `alwaysSaveRunRecords` per scriverlo a ogni
esecuzione.

Lo schema del report documenta completamento, fatturazione, errori & cursori
salvati. Il suo campo `version` riporta la versione esatta del codice sorgente
pubblicato dell'Actor.

Il campo `status` usa questi valori.

- `no-input`
- `invalid-input`
- `replies-incomplete`
- `zero-output`
- `aborted`
- `unexpected-error`

## Input

La scheda Input elenca ogni opzione. Indica almeno 1 URL di post, ID del post,
URL di profilo o nome utente. Tutti gli altri campi sono facoltativi.

### Target delle risposte & alias di input

Usa questi campi principali.

| Input         | Scopo                                    |
| ------------- | ---------------------------------------- |
| `startUrls`   | URL misti di post e profili di X         |
| `tweetIds`    | ID numerici dei post                     |
| `usernames`   | Timeline delle risposte dei profili      |
| `startCursor` | Riprende un target da un cursore salvato |

Il modulo di input mostra solo i controlli canonici. Gli alias di compatibilità
funzionano ancora negli input JSON, API, SDK, di automazione & dei task salvati.
Quando combini campi canonici & alias, vale il loro ordine di risoluzione
attuale.

Questi alias accettano i nomi di campo comuni di altri scraper.

- Gli alias URL sono `urls`, `tweetUrls`, `postUrls`, `profileUrls` &
  `twitterUrl` come stringa singola.
- Gli alias ID sono `conversationIds`, `postIds`, `ids`, `tweetId`, `id`.
- Gli alias del nome utente sono `twitterHandles`, `screenname`.
- Gli alias del limite globale sono `maxResults`, `max_results`, `resultsLimit`,
  `maxReplies`.
- Gli alias per target sono `maxRepliesPerTweet`, `maxCommentsPerPost`,
  `resultsPerCategory`.
- L'alias della ricerca è `useSearch`.
- Gli alias delle risposte annidate sono `includeNestedReplies`,
  `includeRepliesOfReplies`.
- L'alias della profondità è `depth` come `1`, `2` o `3` per `maxDepth`. `full`
  non mette alcun limite.
- L'alias dell'ambito è `onlyDirectReplies` per `scope: "direct"`.
- Gli alias del post originale sono `includeOriginalTweet`,
  `includeSourceTweet`. Con `includeSourceTweet`, `resultsPerCategory` limita le
  risposte & il post è 1 riga in più.
- L'alias dell'autore è `excludeOpSelfReplies` per `excludeOriginalAuthor`.
- Gli alias dell'ordinamento sono `sortBy` & `queryType` per `sort`. `top`,
  `newest` & `mostLiked` vengono letti come `relevance`, `latest` & `likes`.
- Gli alias dell'output sono `outputVariant`, `includeRaw`.

`category` impostato su `replies` non cambia nulla. Una categoria che è compito
di un altro Actor, come `retweets` o `info`, ferma l'esecuzione. Non legge & non
addebita nulla. Il messaggio nomina l'Actor da usare. Quando imposti uno di
questi alias & il suo campo canonico, vince il valore canonico. Il log
dell'esecuzione nomina l'alias scartato.

I target malformati o non supportati non fanno fallire l'Actor. Quando non resta
nessun target valido, l'esecuzione scrive una diagnostica con la correzione.

### Strategie di copertura

Scegli come l'Actor raccoglie le risposte. Auto va bene per la maggior parte dei
casi.

#### Completamento automatico

Usa `collectionStrategy: "auto"` per la maggior parte dei casi. Raccoglie ogni
risposta che riesce a raggiungere per il tuo ambito. I controlli di ambito,
profondità, ordinamento & autore agiscono prima dei tuoi limiti. Include le
risposte sotto target che non sono radice. Quando X nasconde parte di un thread,
lo stato dice quante risposte X nasconde. Gli altri valori di
`collectionStrategy` non cambiano mai modalità.

Un dato di copertura nella diagnostica non prova che X non abbia altre risposte.
Limiti, dati mancanti o errori possono lasciare incompleta un'esecuzione.

#### Risposte dirette

Usa `collectionStrategy: "replies"` per le risposte dirette nell'ordine di X.
Supporta i cursori salvati.

#### Ricerca nella conversazione

Usa `collectionStrategy: "conversationSearch"` per un'ampia copertura della
conversazione.

#### Contesto completo del thread

Usa `collectionStrategy: "thread"` per leggere il contesto della conversazione
di origine. Imposta `includeOriginalPost: true` per tenere il post radice a
profondità 0.

#### Risposte nascoste

La strategia predefinita `auto` aggiunge le risposte che l'autore del post ha
nascosto. Ognuna è una riga con `resultType: "hiddenReply"`, al solito prezzo
per riga, & conta per `maxItems`. L'esecuzione le legge solo quando il post
conta più risposte di quante ne mostri X, quindi un post senza risposte nascoste
non costa nulla in più. Imposta `includeHiddenReplies: false` per escluderle.

Usa `collectionStrategy: "hiddenReplies"` solo per le risposte nascoste. X le
elenca dalla più vecchia, con le risposte che hanno ricevuto. Un post senza
risposte nascoste non restituisce righe.

### Controlli delle risposte dirette & annidate

Usa `scope` per scegliere la forma del risultato.

| Valore   | Risultato                                          |
| -------- | -------------------------------------------------- |
| `direct` | Tiene le risposte di profondità 1                  |
| `nested` | Tiene le risposte alle risposte, da profondità 2   |
| `all`    | Tiene ogni risposta diretta e annidata disponibile |

Usa `maxDepth` per limitare l'annidamento. Quando X omette un antenato della
conversazione, il link al genitore può mancare. L'Actor conserva la migliore
profondità disponibile.

### Ordinamento

Usa `sort` con questi valori.

- `relevance` mantiene l'ordine di origine di X
- `latest` mette prima le più recenti
- `oldest` mette prima le più vecchie
- `likes` mette prima quelle con più Mi piace

La ricerca di X sottostima i Mi piace di alcune risposte più vecchie, quindi le
esecuzioni `likes` possono perderle.

I target di profilo raccolgono il numero richiesto di risultati unici e
filtrati, poi li ordinano. I target di post mantengono l'ordinamento globale.

Gli alias di compatibilità `sortBy` & `queryType` funzionano ancora.

### Filtri delle risposte

Tutti i filtri supportati agiscono prima della scrittura nel dataset.

#### Filtri di testo & entità

| Input            | Comportamento                            |
| ---------------- | ---------------------------------------- |
| `exactPhrase`    | Richiede una frase esatta                |
| `anyWords`       | Richiede almeno 1 parola o frase         |
| `excludeWords`   | Rimuove le parole o frasi corrispondenti |
| `keywordInclude` | Alias unito a `anyWords`                 |
| `keywordExclude` | Alias unito a `excludeWords`             |
| `hashtags`       | Richiede almeno 1 hashtag                |
| `cashtags`       | Richiede almeno 1 cashtag                |
| `mentioning`     | Richiede una @menzione                   |

#### Filtri per autore & lingua

| Input                   | Comportamento                               |
| ----------------------- | ------------------------------------------- |
| `fromUser`              | Tiene un solo autore di risposte            |
| `toUser`                | Tiene le risposte rivolte a un nome utente  |
| `lang`                  | Tiene un codice lingua di X                 |
| `verifiedOnly`          | Richiede un qualsiasi segnale di verifica   |
| `blueVerifiedOnly`      | Richiede la verifica X Premium              |
| `excludeOriginalAuthor` | Rimuove le risposte dell'autore a sé stesso |

#### Filtri di engagement

Usa `minLikes`, `minReplies`, `minRetweets`, `minQuotes`, `minViews` &
`minBookmarks`. L'alias `minFaves` corrisponde a `minLikes`.

#### Filtri per media & tempo

- Imposta `hasMediaOnly: true` per le risposte con media pubblici.
- Imposta `mediaType` su `any`, `image`, `video`, `gif` o `link`.
- Imposta `mediaType` su `none` per le risposte di solo testo, senza media né
  link.
- Imposta `since` per un timestamp di inizio incluso.
- Imposta `until` per un timestamp di fine escluso.
- Usa `sinceTime` & `untilTime` come alias di compatibilità.

## Output

Ogni riga di risposta è un oggetto JSON. Gli schemi del dataset & del run-report
descrivono ogni campo, così gli agenti AI possono leggere le righe senza tirare
a indovinare. Esporta il dataset in JSON, CSV, Excel o HTML.

### Metadati dell'autore

Gli autori annidati seguono il contratto dei profili pubblici. Il contratto
copre identità, conteggi, verifica, disponibilità, dati professionali &
biografie del profilo.

L'output piatto aggiunge `authorId`, `authorUsername`, `authorName`,
`authorFollowers`, `authorFollowing` & `authorVerified`.

### Metadati dei media

I media coprono disponibilità, geometria, tag & varianti video. Hanno anche le
azioni `watchNowUrl` & `visitSiteUrl`.

L'output piatto aggiunge `mediaUrls`.

### Esempio di output

Una riga di risposta ridotta ha questo aspetto.

```json
{
  "resultType": "reply",
  "id": "1881423000000000000",
  "url": "https://x.com/example/status/1881423000000000000",
  "text": "Thanks for sharing this update.",
  "createdAt": "2026-08-09T12:00:00.000Z",
  "lang": "en",
  "conversationId": "1881422000000000000",
  "rootTweetId": "1881422000000000000",
  "parentReplyId": "1881422000000000000",
  "depth": 1,
  "isDirectReply": true,
  "likeCount": 42,
  "replyCount": 3,
  "retweetCount": 5,
  "quoteCount": 2,
  "viewCount": 1000,
  "bookmarkCount": 7,
  "authorUsername": "example",
  "authorName": "Example User",
  "authorFollowers": 1000,
  "authorVerified": false,
  "mediaUrls": ["https://pbs.twimg.com/media/example.jpg"],
  "sourceTweetId": "1881422000000000000",
  "sourceTarget": "1881422000000000000"
}
```

I valori di esempio sono illustrativi. Le esecuzioni reali restituiscono dati
live.

### Modalità di output

Scegli quanto è larga ogni riga del dataset.

#### Compatta

Imposta `outputMode: "compact"` per un dataset più snello. Conserva i campi di
testo, conversazione, autore, engagement & media.

#### Completa

Imposta `outputMode: "full"` per conservare ogni campo pubblico supportato.

#### Rich

Imposta `outputMode: "rich"` per avere il massimo dei dati per riga. Le righe
rich conservano ogni colonna della modalità completa & aggiungono in fondo
`hasCommunityNotes`, `quotedTweetPermalink`, `unavailableAuthorId` &
`sourceUser` dei media.

#### Raw

Imposta `outputMode: "raw"` per aggiungere sotto `raw` una copia ripulita dei
dati di origine.

#### Annidata o piatta

Il layout predefinito `flat` conserva gli oggetti annidati & aggiunge campi
dell'autore per le tabelle. Imposta `outputPreset: "nested"` per omettere i
campi piatti aggiunti.

#### Nomi dei campi

Imposta `fieldStyle` su `source`, `camelCase` o `snake_case`. L'Actor evita di
sovrascrivere le chiavi di origine in conflitto.

## Colonne di output

8 input danno forma a ogni riga dopo che l'esecuzione la legge. Non eseguono
codice & non cambiano il prezzo.

| Campo               | Cosa fa                                                                        |
| ------------------- | ------------------------------------------------------------------------------ |
| `fields`            | Tiene solo questi campi, nell'ordine & con la grafia che scrivi                |
| `omitFields`        | Scarta questi campi & tiene il resto                                           |
| `renameFields`      | Sposta un campo in una colonna con un nuovo nome                               |
| `flatten`           | Trasforma ogni oggetto annidato in colonne di primo livello                    |
| `fillMissingFields` | Riempie con `null` un campo tenuto che manca in una riga. Attivo di default    |
| `joinFields`        | Trasforma ognuno di questi elenchi in 1 valore di testo                        |
| `joinSeparator`     | Testo tra gli elementi uniti. Il valore predefinito è una virgola & uno spazio |
| `constantFields`    | Aggiunge una colonna con lo stesso testo su ogni riga                          |

- Usa un punto per un campo dentro un oggetto, come `author.id`. Maiuscole &
  trattini bassi non contano.
- Ogni riga conserva il suo `id`.
- Con `fields`, un campo che manca in una riga arriva come `null`. Così ogni
  riga ha le stesse colonne.
- Un nome di campo sbagliato ferma l'esecuzione prima di leggere & non addebita
  nulla.
- Se i nomi non si possono controllare, l'esecuzione continua a leggere & elenca
  per ultimi i nomi che non ha visto.
- L'esecuzione ignora una funzione map o un filtro jq scritti per un altro
  Actor.

Per aggiungere una colonna calcolata, scrivine il nome in `fields` o
`renameFields`.

| Colonna             | Formula                                                                                  |
| ------------------- | ---------------------------------------------------------------------------------------- |
| `totalEngagement`   | `likeCount` + `replyCount` + `retweetCount` + `quoteCount`. Un conteggio mancante vale 0 |
| `engagementRate`    | `totalEngagement` × 100 ÷ i `followers` dell'autore, a 4 decimali                        |
| `engagementPerView` | `totalEngagement` × 100 ÷ `viewCount`, a 4 decimali                                      |

`totalEngagement` è `null` per una riga senza questi conteggi. Un tasso è `null`
quando il suo divisore manca o vale 0.

## Opzioni di esecuzione

### Limiti, fatturazione & continuazione

`maxItems` limita le righe consegnate nell'intera esecuzione.
`maxItemsPerTarget` limita ogni post o profilo.

Un'esecuzione può leggere molti target. Limiti, deduplicazione, attribuzione &
fatturazione restano esatti su tutti.

L'Actor rimuove le righe duplicate prima dell'output & della fatturazione.
Imposta `dedupeAcrossTargets: false` per tenere le righe duplicate che arrivano
da target diversi.

Dopo un'esecuzione fermata dal limite di pagine, leggi `next-cursors` dal
key-value store predefinito. Passa un cursore in `startCursor` per continuare
quel target.

#### Timeout di Apify

Il timeout predefinito di Apify è `0`, quindi le esecuzioni non hanno limite di
tempo. L'Actor continua finché raggiunge il limite o esaurisce i dati idonei.
Puoi comunque impostare un timeout finito su Apify. In quel caso
`completionReason: "deadline_reached"` indica che il limite è vicino. L'Actor
salva risposte & report, poi termina in modo pulito prima del limite. Le
risposte consegnate si pagano una volta. I target non finiti restano
riprendibili.

### Esempi API

Ogni esempio avvia X Reply Scraper di Xquik & restituisce gli elementi del
dataset. Sostituisci `<APIFY_API_TOKEN>` con il tuo token API di Apify.

#### JavaScript

```javascript
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: '<APIFY_API_TOKEN>' });
const run = await client
  .actor('xquik/x-reply-scraper')
  .call({
    tweetIds: ['2082577277246972300'],
    collectionStrategy: 'auto',
    scope: 'all',
    maxItems: 100,
  });

const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
```

#### Python

```python
from apify_client import ApifyClient

client = ApifyClient("<APIFY_API_TOKEN>")
run = client.actor("xquik/x-reply-scraper").call(run_input={
    "tweetIds": ["2082577277246972300"],
    "collectionStrategy": "auto",
    "scope": "all",
    "maxItems": 100,
})

for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
```

#### cURL

```bash
actor=xquik~x-reply-scraper
curl "https://api.apify.com/v2/acts/$actor/run-sync-get-dataset-items" \
  -X POST \
  -H "Authorization: Bearer <APIFY_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"tweetIds":["2082577277246972300"],"maxItems":100}'
```

### Automazione & integrazioni

Avvia X Reply Scraper di Xquik con pianificazioni, webhook o client API di
Apify. Collegalo a Make, Zapier, n8n, Google Sheets o a uno storage cloud. Gli
agenti possono chiamarlo tramite il
[server Apify MCP](https://docs.apify.com/platform/integrations/mcp).

I flussi di agenti idonei possono usare anche
[x402](https://docs.apify.com/integrations/x402) o
[Skyfire](https://docs.apify.com/integrations/skyfire).

Xquik offre anche 53 strumenti nella dashboard, un'API REST, webhook firmati &
un server MCP.

### Pronto per agenti AI & MCP

Avvia X Reply Scraper di Xquik tramite Apify MCP, client API, x402 o Skyfire.

- Permessi limitati proteggono i dati dell'account Apify non collegati.
- La fatturazione pay-per-event lega il costo ai risultati consegnati.
- La modalità standby resta spenta per compatibilità con i pagamenti agentici.
- Schemi tipizzati descrivono risposte, report di esecuzione & cursori di
  continuazione.
- Valori predefiniti limitati evitano esecuzioni di agenti senza limiti per
  errore.
- Le modalità stabili `camelCase` & `snake_case` semplificano il concatenamento
  degli strumenti.
- Le righe di diagnostica includono uno stato, un messaggio & un'azione di
  recupero.
- I report di esecuzione includono esiti esatti, motivi di arresto & stime degli
  addebiti.

### Usa sempre la build più recente

Scegli `latest` per ogni esecuzione, così ricevi tutte le correzioni pubblicate.

Se non indichi una build, Apify usa il default `latest` di questo Actor. Le
esecuzioni dalla Console & gli esempi API standard ereditano quel default.

I task salvati possono sovrascrivere il default dell'Actor. Pianificazioni &
integrazioni dei task riusano quella scelta. Tieni ogni override su `latest`.

Apify non reindirizza i numeri di build esatti a `latest`. Sostituisci i numeri
fissati con `latest`. Usa build esatte solo per rollback temporanei.

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
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper) estrae
  risposte, citazioni, utenti che hanno fatto repost & thread da URL o ID di
  post in blocco. Usalo quando misuri chi ha interagito con i post. Da $0.00015
  per riga.
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper)
  estrae i post che citano altri post, con testo, media, conteggi, autori & 11
  filtri. Usalo quando studi chi ha citato dei post & cosa ha detto. Da $0.00015
  per post.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper) estrae
  follower, following, membri delle liste, abbonati & membri delle community
  come righe di profilo. Usalo quando ti servono elenchi di pubblico o di
  membri. Da $0.00015 per profilo.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper) cerca
  utenti per nome utente, bio & posizione con filtri su follower, verifica, età
  & posizione. Usalo quando costruisci elenchi di account dalla ricerca. Da
  $0.00015 per profilo.
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper)
  verifica dove hanno sede gli account con l'etichetta "Posizione account" di X,
  il modo in cui si sono collegati a X & i cambi di nome utente. Usalo quando
  vuoi verificare dove hanno sede gli account. Da $0.00015 per account.
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
- [X Article Scraper](https://apify.com/xquik/x-article-scraper) estrae gli
  articoli lunghi di X come Markdown & testo, con copertine, autori, date &
  metriche. Usalo quando ti serve il corpo degli articoli, non i post. Da
  $0.00015 per articolo.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader) estrae o
  archivia foto, video & GIF da post o profili con opzioni MP4 & metadati. Usalo
  quando ti servono i file multimediali veri e propri. Da $0.00015 per riga di
  media.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring)
  monitora le menzioni del brand con rilevanza, sentiment & risposte sulla
  customer experience generate con AI & confronta le esecuzioni. Usalo quando
  osservi un brand nel tempo. Da $0.0003 per post analizzato.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis)
  etichetta atteggiamento, intensità & probabilità di sarcasmo di ogni post con
  AI. Usalo quando ti serve il sentiment generale su qualsiasi argomento. Da
  $0.0003 per post analizzato.
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

## FAQ

Le risposte alle domande più comuni, poi dove trovare assistenza.

### Come estraggo i commenti di un post?

Incolla l'URL del post in `startUrls` & fai clic su Start. X chiama i commenti
risposte, quindi ogni commento è 1 riga di risposta.

### Posso estrarre le risposte di molti post in una volta?

Sì. Incolla molti URL di post o ID dei post in 1 esecuzione. Ogni risposta
conserva il post di origine in `sourceTarget`.

### Include le risposte annidate?

Sì. Lo `scope` predefinito raccoglie risposte dirette & annidate. Imposta
`scope` su `direct` per le sole risposte al post. `maxDepth` limita la
profondità di un'esecuzione.

### Recupera le risposte nascoste dall'autore?

Sì. La strategia predefinita `auto` le aggiunge come righe `hiddenReply`.
Imposta `includeHiddenReplies: false` per saltarle.

### Posso ordinare le risposte per Mi piace o per data?

Sì. Imposta `sort` per ordinare le risposte per Mi piace o per mettere prima le
più recenti o le più vecchie.

### Posso esportare le risposte in CSV o Excel?

Sì. Esporta il dataset in CSV, Excel, JSON o HTML. L'output piatto tiene 1
risposta per riga, con i campi dell'autore accanto.

### Posso estrarre le risposte di un utente invece di quelle a un post?

Sì. Incolla un URL di profilo o un nome utente. L'esecuzione legge la timeline
delle risposte di quell'utente.

### Serve una chiave API X o il login?

No. Non ti servono chiave API X, login o credenziali. X Reply Scraper di Xquik
non chiede mai la tua password di X, i cookie o i token.

### È legale estrarre le risposte di X?

X Reply Scraper di Xquik raccoglie risposte pubbliche & non aggira gli account
protetti. Raccogli solo dati pubblici. Rispetta le leggi applicabili & le regole
della piattaforma.

I dataset di risposte possono contenere dati personali. Scegli uno scopo lecito.
Conserva i dati il meno possibile. Proteggi gli export. Rispetta le richieste di
cancellazione & di accesso, quando previsto. Nel dubbio, chiedi a un legale
qualificato.

### Perché la mia esecuzione ha meno risposte di quante ne mostra il post?

Quando X nasconde parte di un thread, lo stato dice quante risposte X nasconde.
`reply_reach` in `stopCauses` significa che X ha fornito solo una parte di un
thread. Anche filtri, deduplicazione, `scope`, `maxDepth` & i tuoi limiti
abbassano il conteggio.

### Posso usare l'API, le pianificazioni & le integrazioni?

Sì. La [scheda API](https://apify.com/xquik/x-reply-scraper/api) mostra esempi
in Python, JavaScript & cURL. Usa le
[pianificazioni](https://docs.apify.com/platform/schedules) di Apify per avviare
X Reply Scraper di Xquik con un cron. Si collega anche a Make, Zapier, n8n &
Google Sheets.

### Dove trovo assistenza?

Apri una issue nella
[scheda Issues](https://apify.com/xquik/x-reply-scraper/issues) con l'ID
dell'esecuzione.

### Posso avere una soluzione personalizzata?

Sì. Descrivi ciò che ti serve nella
[scheda Issues](https://apify.com/xquik/x-reply-scraper/issues). Xquik offre
anche una dashboard, un'API REST, un server MCP & webhook. Trovi il sito web di
Xquik sul suo [profilo Apify](https://apify.com/xquik).
