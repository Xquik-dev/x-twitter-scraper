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

Xquik è lo scraper X (Twitter) più veloce ed economico al mondo, con i dati X
più completi, e X Reply Scraper raccoglie risposte, commenti e intere
conversazioni. Ogni altro Actor Apify addebita un costo prima di filtrare o
deduplicare. Xquik addebita solo i risultati consegnati, unici e conformi ai
filtri.

Estrai risposte X (Twitter) a **$0.00015 per riga consegnata su ogni piano
Apify**. Incolla URL di post, ID dei tweet, URL di profilo o username.
Esporta risposte, conversazioni, autori, engagement, entità e URL dei media.
Apify addebita separatamente l'utilizzo della piattaforma. Non serve alcun
login X.

I filtri vengono applicati prima della scrittura nel dataset. Paghi solo le
righe consegnate.

>

## Estrazione incompleta

Un'estrazione interrotta scrive una diagnostica gratuita `partial`. I
risultati disponibili restano intatti. Leggi `availableResults`,
`failedTargets`, `retryable` e `nextAction` prima di riprovare. Un'uscita
riuscita dell'Actor conferma la consegna, non l'estrazione completa.

Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.

> "Twitter" e "X" sono marchi di X Corp.

## Cosa fa questo scraper di risposte Twitter?

X Reply Scraper raccoglie risposte pubbliche e conversazioni di commenti.
Gestisce singoli post, elenchi di URL in blocco, ID dei tweet e timeline delle
risposte degli utenti.

Usalo per l'analisi del sentiment, il feedback dei clienti, la ricerca sulla
community, il ranking delle risposte, la ricerca di lead, la revisione della
moderazione e i dataset di conversazioni.

### Comportamento della raccolta delle risposte

- La modalità automatica passa dai risultati diretti incompleti alla ricerca
  per conversazione.
- Le pagine automatiche delle risposte ai tweet richiedono fino a 300 righe.
- Quattro strategie coprono risposte dirette, ricerca e contesto del thread.
- Gli input in blocco accettano URL di post, ID dei tweet, profili e
  username.
- I target di profilo combinano timeline e ricerca per autore quando
  entrambi si applicano.
- Filtri e rimozione dei duplicati vengono eseguiti prima della
  fatturazione.
- L'output supporta 4 modalità di ordinamento, 3 livelli di dettaglio e 3
  stili di campo.
- Ogni risposta conserva il target di origine, gli ID padre, l'ID radice e
  la profondità.
- I cursori di continuazione supportano backfill ed esecuzioni pianificate.
- Le esecuzioni vuote scrivono 1 record gratuito in `diagnostics`.
- I log di pagina e di target includono `fetchDurationMs`,
  `processingDurationMs`, `pushDurationMs`, `statusDurationMs`,
  `fullPageDurationMs` e `fullTargetDurationMs` senza ripetere gli input.
- I checkpoint conservano le risposte accettate, i tempi e gli errori dopo i
  riavvii.

### Usa sempre la build più recente

Seleziona `latest` per ogni esecuzione per ricevere tutte le correzioni
pubblicate.

Quando non viene specificata alcuna build, Apify usa il valore predefinito
`latest` di questo Actor. Le esecuzioni dalla console e gli esempi API
standard ereditano quel valore predefinito.

I task salvati possono sovrascrivere il valore predefinito dell'Actor. Le
pianificazioni e le integrazioni di task riutilizzano quella scelta. Mantieni
ogni sovrascrittura impostata su `latest`.

Apify non reindirizza i numeri di build esatti a `latest`. Sostituisci i
numeri fissati con `latest`. Usa build esatte solo per rollback temporanei.

## Avvio rapido

Il modulo iniziale ha come target una conversazione pubblica verificata.
Restituisce fino a 25 righe complete e piatte su un massimo di 10 pagine. La
modalità automatica cerca per impostazione predefinita nell'intera
conversazione. La deduplicazione e l'attribuzione della fonte restano
attive.

### Estrai risposte da un URL di post

```json
{
  "startUrls": [{ "url": "https://x.com/OpenAI/status/2082577277246972300" }],
  "maxItems": 100
}
```

### Estrai risposte da ID dei tweet

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

I valori di esempio sono illustrativi. Le risposte riflettono i dati di
origine al momento dell'esecuzione.

## Compatibilità con agenti AI e MCP

Esegui questo Actor tramite Apify MCP, client API, x402 o Skyfire.

- Permessi limitati proteggono i dati dell'account Apify non correlati.
- La fatturazione a evento supporta costi deterministici basati sui
  risultati.
- La modalità standby resta disabilitata per la compatibilità con i
  pagamenti agentici.
- Schemi tipizzati espongono risposte, report di esecuzione e cursori di
  continuazione.
- Valori predefiniti limitati prevengono esecuzioni agentiche accidentali
  senza limiti.
- Le modalità stabili `camelCase` e `snake_case` semplificano il
  concatenamento degli strumenti.
- Le righe diagnostiche includono uno stato, un messaggio e un'azione di
  recupero.
- I report di esecuzione includono esiti esatti, motivi di arresto e stime
  degli addebiti.

## Target delle risposte e alias di input

Usa i campi principali sotto elencati.

| Input         | Scopo                                            |
| ------------- | ------------------------------------------------- |
| `startUrls`   | URL misti di post e profili X                     |
| `tweetIds`    | ID numerici dei post                              |
| `usernames`   | Timeline di profilo con ricerca per autore         |
| `startCursor` | Riprendi un target da un cursore di origine salvato |

Il modulo visivo mostra solo i controlli canonici. Gli alias di
compatibilità restano disponibili in JSON, API, SDK, automazione e input di
task salvati. I campi canonici ed espliciti mantengono il loro ordine di
risoluzione esistente quando combinati.

Gli alias di compatibilità accettano input comuni della concorrenza:

- Alias URL: `urls`, `tweetUrls`, `postUrls`, `profileUrls`
- Alias ID: `conversationIds`, `postIds`, `ids`, `tweetId`, `id`
- Alias username: `twitterHandles`, `screenname`
- Alias limite globale: `maxResults`, `max_results`, `resultsLimit`,
  `maxReplies`
- Alias per target: `maxRepliesPerTweet`, `maxCommentsPerPost`
- Alias di ricerca: `useSearch`
- Alias risposte annidate: `includeNestedReplies`, `includeRepliesOfReplies`
- Alias post originale: `includeOriginalTweet`
- Alias output: `outputVariant`, `includeRaw`

I target malformati o non supportati non fanno fallire l'Actor. L'esecuzione
restituisce una diagnostica utile quando non resta alcun target valido.

I target di profilo combinano la paginazione tramite cursore con la ricerca
per autore. L'Actor rimuove le righe duplicate prima dell'output e della
fatturazione. I cursori legacy salvati mantengono la paginazione standard.

## Strategie di copertura

### Completamento automatico

Usa `collectionStrategy: "auto"` per la maggior parte dei lavori. Gli ambiti
completi o annidati iniziano con un'estrazione completa delle risposte. I
controlli di ambito, profondità, ordinamento e autore si applicano prima dei
limiti di risposta. L'estrazione include i discendenti sotto i target non
radice. L'estrazione incompleta conserva le righe prima di provare la
ricerca per conversazione e le risposte dirette. Gli ambiti diretti passano
alla ricerca quando necessario. Le pagine non completate mantengono la loro
continuazione. Le strategie esplicite non passano mai ad altre.

La soglia di copertura diagnostica non dimostra l'esaurimento della fonte.
Pagine bloccate, limiti, dati mancanti o errori mantengono il recupero
incompleto.

### Endpoint di risposta diretta

Usa `collectionStrategy: "replies"` per forzare la timeline di risposta di
X. Mantiene l'ordinamento della fonte e supporta i cursori.

### Ricerca per conversazione

Usa `collectionStrategy: "conversationSearch"` per una copertura ampia della
conversazione. L'Actor cerca tramite `conversation_id:<ID del tweet>`.

### Contesto completo del thread

Usa `collectionStrategy: "thread"` per leggere il contesto della
conversazione di origine. Imposta `includeOriginalPost: true` per mantenere
il post radice come profondità 0.

## Controlli delle risposte dirette e annidate

Usa `scope` per scegliere la forma del risultato.

| Valore   | Risultato                                                |
| -------- | ---------------------------------------------------------- |
| `direct` | Mantieni le risposte di profondità 1                       |
| `nested` | Mantieni le risposte alle risposte a profondità 2+         |
| `all`    | Mantieni ogni risposta diretta e annidata disponibile      |

Usa `maxDepth` per limitare l'annidamento. I link padre possono essere
assenti quando X omette un antenato della conversazione. L'Actor conserva la
migliore profondità disponibile.

## Ordinamento

Usa `sort` con questi valori:

- `relevance` mantiene l'ordine della fonte X
- `latest` ordina prima le più recenti
- `oldest` ordina prima le più vecchie
- `likes` ordina prima il conteggio più alto di Mi piace

I target di profilo raccolgono il conteggio di risultati unici e filtrati
richiesto prima di ordinarlo. I target di tweet mantengono l'ordinamento
globale.

Gli alias di compatibilità `sortBy` e `queryType` restano supportati.

## Filtri delle risposte

Tutti i filtri supportati vengono applicati prima della scrittura nel
dataset.

### Filtri di testo ed entità

| Input            | Comportamento                                |
| ---------------- | --------------------------------------------- |
| `exactPhrase`    | Richiede una frase esatta                    |
| `anyWords`       | Richiede almeno 1 parola o frase             |
| `excludeWords`   | Rimuove le parole o frasi corrispondenti      |
| `keywordInclude` | Alias unito con `anyWords`                   |
| `keywordExclude` | Alias unito con `excludeWords`               |
| `hashtags`       | Richiede almeno 1 hashtag                    |
| `cashtags`       | Richiede almeno 1 cashtag                    |
| `mentioning`     | Richiede una @menzione                       |

### Filtri per autore e lingua

| Input                   | Comportamento                                     |
| ----------------------- | --------------------------------------------------- |
| `fromUser`              | Mantieni un autore di risposta                     |
| `toUser`                | Mantieni le risposte indirizzate a un username     |
| `lang`                  | Mantieni un codice lingua X                        |
| `verifiedOnly`          | Richiede qualsiasi segnale di verifica pubblica     |
| `blueVerifiedOnly`      | Richiede la verifica X Premium                     |
| `excludeOriginalAuthor` | Rimuove le auto-risposte dell'autore di origine    |

### Filtri di engagement

Usa `minLikes`, `minReplies`, `minRetweets`, `minQuotes`, `minViews` e
`minBookmarks`. L'alias `minFaves` corrisponde a `minLikes`.

### Filtri di media e tempo

- Imposta `hasMediaOnly: true` per le risposte con media pubblici.
- Imposta `mediaType` su `any`, `image`, `video`, `gif` o `link`.
- Imposta `since` per un timestamp di inizio inclusivo.
- Imposta `until` per un timestamp di fine esclusivo.
- Usa `sinceTime` e `untilTime` come alias di compatibilità.

## Limiti, fatturazione e continuazione

`maxItems` limita le righe consegnate nell'intera esecuzione.
`maxItemsPerTarget` limita ogni post o profilo.

I target indipendenti vengono eseguiti in parallelo. Ogni target mantiene la
paginazione ordinata tramite cursore. Le scritture nel dataset mantengono
atomici limiti, deduplicazione, attribuzione e fatturazione.

L'Actor rimuove i duplicati prima della fatturazione. Imposta
`dedupeAcrossTargets: false` per conservare le righe duplicate provenienti
da target diversi.

Dopo un'esecuzione limitata dalle pagine, leggi `next-cursors` dallo store
predefinito chiave-valore. Passa un cursore tramite `startCursor` per
continuare quel target.

## Campi di output

Gli schemi del dataset e del report di esecuzione descrivono ogni campo
restituito. I campi primitivi includono anche esempi per agenti e
integrazioni generate.

Ogni riga completa di risposta può includere questi campi principali:

| Campo               | Descrizione                                                |
| ------------------- | ------------------------------------------------------------ |
| `id`                | ID della risposta                                            |
| `text`              | Testo della risposta                                         |
| `fullText`          | Testo esteso della risposta                                  |
| `createdAt`         | Timestamp della risposta                                     |
| `lang`              | Codice lingua X                                              |
| `url`               | URL diretto della risposta                                   |
| `conversationId`    | ID della conversazione X                                     |
| `inReplyToId`       | ID padre immediato                                           |
| `inReplyToUserId`   | ID dell'autore padre                                         |
| `inReplyToUsername` | Username padre                                               |
| `likeCount`         | Mi piace                                                     |
| `replyCount`        | Risposte figlie                                              |
| `retweetCount`      | Retweet                                                      |
| `quoteCount`        | Citazioni                                                    |
| `viewCount`         | Visualizzazioni                                              |
| `bookmarkCount`     | Segnalibri                                                   |
| `author`            | Metadati pubblici disponibili dell'autore                    |
| `media`             | Immagini, video, GIF e varianti                              |
| `entities`          | Hashtag, cashtag, menzioni, URL e timestamp video             |
| `quoted_tweet`      | Post citato, quando disponibile                              |
| `retweeted_tweet`   | Post repostato, quando disponibile                           |

Le righe complete conservano anche i metadati di origine disponibili. Questi
includono `isNoteTweet`, `isReply`, `isLimitedReply`, `isQuoteStatus`,
`source`, `type`, `displayTextRange`, `contentDisclosure`,
`conversationControl`, `article`, `limitedActions`, `reactionContext`,
`card`, `communityId`, `communityNote`, `edit`, `isTranslatable`,
`noteTweet`, `place`, `postCta`, `possiblySensitive`, `previousCounts`,
`tombstone`, `unmentionedUserIds` e `viewState`.

Le righe piatte mantengono l'ascendenza della conversazione, i dettagli di
origine, il tipo di risultato e la versione dello schema. Consulta l'OpenAPI
per i campi esatti.

### Metadati dell'autore

Gli autori annidati seguono il contratto del profilo pubblico. Copre
identità, conteggi, verifica, disponibilità, dati professionali e biografie
del profilo.

L'output piatto aggiunge `authorId`, `authorUsername`, `authorName`,
`authorFollowers`, `authorFollowing` e `authorVerified`.

### Metadati dei media

I media includono disponibilità, geometria, tag, varianti video,
`watchNowUrl` e azioni `visitSiteUrl`.

L'output piatto aggiunge `mediaUrls`.

## Modalità di output

### Compatta

Imposta `outputMode: "compact"` per ridurre l'ampiezza del dataset.
Conserva i campi di testo, conversazione, autore, engagement e media.

### Completa

Imposta `outputMode: "full"` per conservare ogni campo pubblico supportato.

### Raw

Imposta `outputMode: "raw"` per aggiungere uno snapshot della fonte
sanificato sotto `raw`.

### Annidata o piatta

Il layout predefinito `flat` mantiene gli oggetti annidati e aggiunge campi
dell'autore per le tabelle. Imposta `outputPreset: "nested"` per omettere i
campi piatti aggiunti.

### Denominazione dei campi

Imposta `fieldStyle` su `source`, `camelCase` o `snake_case`. L'Actor evita
di sovrascrivere le chiavi di origine in conflitto.

## Diagnostica

Le righe di dati riuscite usano `resultType: "reply"`. Le uscite senza dati
scrivono esattamente 1 record gratuito in `diagnostics` con una correzione
attuabile.

Ogni esito scrive `run-report`, incluse le uscite senza input e con input
non valido. Lo schema del report documenta completamento, fatturazione,
errori e cursori salvati. Il suo campo `version` riporta la versione esatta
della fonte pubblicata dell'Actor.

I possibili stati includono:

- `no-input`
- `invalid-input`
- `replies-incomplete`
- `zero-output`
- `aborted`
- `unexpected-error`

## Quanto costa?

Ogni piano Apify costa **$0.00015 per riga consegnata**. Equivale a
`$0.00015` per riga. Apify addebita separatamente l'utilizzo della
piattaforma.

Xquik applica un addebito per ogni riga di dati consegnata. Le diagnostiche
sono gratuite in `diagnostics`. Non si applica alcuna commissione di avvio,
URL, query, paginazione, filtro o proxy.

Il timeout predefinito di Apify è `0`, quindi le esecuzioni non hanno limite
di tempo. L'Actor continua fino al raggiungimento del limite o
all'esaurimento dei dati idonei. Chi effettua la chiamata può comunque
impostare un timeout Apify finito. In quel caso
`completionReason: "deadline_reached"` significa che quel limite configurato
è vicino. L'Actor riserva gli ultimi 15 secondi per checkpoint, righe,
report e un'uscita riuscita. Le risposte già raccolte restano consegnate e
vengono fatturate una sola volta. La paginazione non completata resta
ripristinabile.

## Esempi di task pubblici

Scegli tra 50 task pubblici. Ognuno ha un input limitato e una vista dataset
corrispondente. Modifica qualsiasi task prima di eseguirlo.

Inizia con questi esempi:

- [Collect replies for AI agents](https://apify.com/xquik/x-reply-scraper/examples/collect-replies-for-ai-agents)
- [Build an X reply RAG dataset](https://apify.com/xquik/x-reply-scraper/examples/build-x-reply-rag-dataset)
- [Archive replies for LLM processing](https://apify.com/xquik/x-reply-scraper/examples/archive-replies-for-llm-processing)
- [Extract reply leads for CRM](https://apify.com/xquik/x-reply-scraper/examples/extract-reply-leads-for-crm)

## Esempio API

### JavaScript

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

### Python

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

### cURL

```bash
curl "https://api.apify.com/v2/acts/xquik~x-reply-scraper/run-sync-get-dataset-items" \
  -X POST \
  -H "Authorization: Bearer <APIFY_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"tweetIds":["2082577277246972300"],"maxItems":100}'
```

## Automazione e integrazioni

Esegui l'Actor tramite pianificazioni Apify, webhook, client API, Make,
Zapier, n8n, Google Sheets, storage cloud o il
[server Apify MCP](https://docs.apify.com/platform/integrations/mcp).

I flussi di lavoro agentici idonei possono usare anche
[x402](https://docs.apify.com/integrations/x402) o
[Skyfire](https://docs.apify.com/integrations/skyfire).

Xquik fornisce anche 47 strumenti da dashboard, 129 operazioni REST, webhook
firmati e un server MCP.

## Uso responsabile

Raccogli solo dati pubblici. Rispetta le leggi applicabili e le regole della
piattaforma.

I dataset di risposte possono contenere dati personali. Scegli uno scopo
lecito. Riduci al minimo la conservazione. Proteggi le esportazioni. Rispetta
le richieste di cancellazione e di accesso quando previsto.

L'Actor non aggira gli account protetti. Non richiede password, cookie di
sessione o token di autenticazione X dei clienti.

## Actor Xquik correlati

Ogni Actor Xquik condivide lo stesso motore di estrazione, la fatturazione
basata sui filtri e la diagnostica. Scegli quello che corrisponde ai dati di
cui hai bisogno.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): estrae tweet
  da ricerche, timeline di profilo, List e ID dei tweet con oltre 50 filtri
  ed esportazioni piatte. Usalo quando hai bisogno di dati sui tweet senza
  analisi. Da $0.00015 per riga.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): estrae
  profili con i relativi post, risposte, media e Mi piace da handle, ID o
  URL. Usalo quando parti dagli account invece che dalle ricerche. Da
  $0.00015 per riga.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper):
  estrae risposte, citazioni, chi ha fatto retweet, chi ha messo Mi piace e
  thread per URL o ID di post in blocco. Usalo quando misuri chi ha
  interagito con i post. Da $0.00015 per riga.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): estrae
  follower, seguiti, membri di List, iscritti e membri di Community come
  righe di profilo. Usalo quando hai bisogno di elenchi di audience o
  membri. Da $0.00015 per profilo.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper):
  cerca utenti per handle, bio e posizione con filtri per follower, verifica,
  età e posizione. Usalo quando crei elenchi di account dalla ricerca. Da
  $0.00015 per profilo.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): estrae post,
  membri e follower di List da URL o ID di List. Usalo quando una List
  curata definisce le tue fonti. Da $0.00015 per riga.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): estrae
  informazioni, post, ricerche, membri e moderatori di Community. Usalo
  quando le tue fonti sono le Community X. Da $0.00015 per riga.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): estrae
  tendenze in tempo reale per posizione con rank, volume, query e WOEID.
  Usalo quando monitori cosa è di tendenza e dove. Da $0.00015 per
  tendenza.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): estrae
  Articoli X di formato lungo come Markdown e testo con copertine, autori,
  date e metriche. Usalo quando hai bisogno del corpo degli articoli, non
  dei tweet. Da $0.00015 per articolo.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): estrae o
  archivia foto, video e GIF da post o profili con opzioni MP4 e metadati.
  Usalo quando hai bisogno dei file multimediali stessi. Da $0.00015 per
  riga di media.
- [X (Twitter) Brand Monitoring](https://apify.com/xquik/x-twitter-brand-monitoring):
  monitora le menzioni del brand con rilevanza AI, sentiment e risposte
  sull'esperienza cliente, e confronta le esecuzioni. Usalo quando osservi
  un brand nel tempo. Da $0.0003 per tweet analizzato.
- [X Tweet Sentiment Analysis](https://apify.com/xquik/x-tweet-sentiment-analysis):
  etichetta atteggiamento, intensità e probabilità di sarcasmo per ogni
  tweet con l'AI. Usalo quando hai bisogno del sentiment generale su
  qualsiasi argomento. Da $0.0003 per tweet analizzato.
- [X (Twitter) Stock & Crypto Signal](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  etichetta posizione rialzista, ribassista, neutra o mista, tipo di
  contenuto, convinzione e rilevanza dell'asset con l'AI. Usalo quando segui
  discorsi su stock, crypto o trading. Da $0.0003 per tweet analizzato.
- [X (Twitter) News Monitor with AI](https://apify.com/xquik/x-twitter-news-monitor):
  etichetta i post di notizie per formato, attribuzione della fonte e
  rilevanza del tema con l'AI. Usalo quando separi la cronaca dal
  commento. Da $0.0003 per tweet analizzato.
- [X Tweet Classifier with AI](https://apify.com/xquik/x-twitter-tweet-classifier):
  risponde alle tue categorie, punteggi e domande sì/no personalizzate per
  ogni tweet con l'AI. Usalo quando le analisi preimpostate non si adattano
  alle tue etichette. Da $0.0003 per tweet analizzato.
