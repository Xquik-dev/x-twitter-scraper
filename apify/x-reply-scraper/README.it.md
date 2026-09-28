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
i dati X più completi. X Reply Scraper di Xquik raccoglie risposte, commenti &
intere conversazioni. La maggior parte degli altri Actor Apify fa pagare prima
di filtrare o deduplicare. Xquik fa pagare solo i **risultati consegnati, unici
e conformi ai filtri**.

Estrai le risposte di X (Twitter) a **$0.00015 per riga consegnata** su ogni
piano Apify. Incolla URL di post, ID dei post (Tweet ID), URL di profili o nomi
utente. Esporta risposte, conversazioni, autori, engagement, entità & URL dei
media. Apify fattura a parte il tuo uso della piattaforma. Non ti serve il login
a X. I filtri agiscono prima della scrittura nel dataset, quindi paghi solo le
righe consegnate.

> Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.
> "Twitter" e "X" sono marchi di X Corp.

## Cosa fa questo scraper di risposte Twitter?

X Reply Scraper di Xquik raccoglie risposte pubbliche & conversazioni nei
commenti. Gestisce singoli post, elenchi di URL in blocco, ID dei post &
timeline delle risposte degli utenti.

Usalo per analisi del sentiment, feedback dei clienti & ricerca sulle
community. Altri usi sono ranking delle risposte, ricerca di lead, revisione
della moderazione & dataset di conversazioni.

### Comportamento della raccolta delle risposte

- La modalità auto continua a raccogliere quando i risultati diretti sono
  incompleti.
- `collectionStrategy` offre 4 modalità per esigenze diverse sulle risposte.
- Gli input in blocco accettano URL di post, ID dei post, profili & nomi utente.
- Filtri & rimozione dei duplicati agiscono prima della fatturazione.
- L'output supporta 4 ordinamenti, 3 livelli di dettaglio & 3 stili di campo.
- Ogni risposta conserva target di origine, ID dei genitori, ID radice &
  profondità.
- I cursori di continuazione supportano recuperi di dati passati & esecuzioni
  pianificate.
- Le esecuzioni vuote scrivono 1 record gratuito in `diagnostics`.
- I log dell'esecuzione mostrano i tempi per pagina & per target in
  `fetchDurationMs`, `processingDurationMs`, `pushDurationMs`,
  `statusDurationMs`, `fullPageDurationMs` & `fullTargetDurationMs`.
- Le esecuzioni conservano risposte consegnate & progressi quando Apify le
  riavvia.

## Come estrarre le risposte di X

1. Incolla URL di post, ID dei post, URL di profili o nomi utente.
2. Imposta `maxItems`, `scope` & i filtri che servono al tuo lavoro.
3. Avvia X Reply Scraper di Xquik & apri il dataset.

Il modulo precompilato punta a una conversazione pubblica verificata.
Restituisce fino a 25 righe complete & piatte. Di default, la modalità auto
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

## Quanto costa estrarre le risposte di X?

X Reply Scraper di Xquik costa $0.00015 per riga consegnata su ogni piano Apify.
Apify fattura a parte l'uso della piattaforma.

Xquik applica un addebito per ogni riga di dati consegnata. Le risposte rimosse
da filtri o deduplicazione non costano nulla. I record di diagnostica in
`diagnostics` sono gratuiti. Non ci sono costi di avvio, per URL, per query, per
paginazione o per filtro.

## Esempi di task pubblici

Scegli tra 50 task pubblici. Ognuno ha un input limitato & una vista del dataset
adatta. Modifica qualsiasi task prima di avviarlo.

Parti da questi esempi:

- [Collect replies for AI agents](https://apify.com/xquik/x-reply-scraper/examples/collect-replies-for-ai-agents)
- [Build an X reply RAG dataset](https://apify.com/xquik/x-reply-scraper/examples/build-x-reply-rag-dataset)
- [Archive replies for LLM processing](https://apify.com/xquik/x-reply-scraper/examples/archive-replies-for-llm-processing)
- [Extract reply leads for CRM](https://apify.com/xquik/x-reply-scraper/examples/extract-reply-leads-for-crm)

## Pronto per agenti AI & MCP

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

## Target delle risposte & alias di input

Usa questi campi principali.

| Input         | Scopo                                     |
| ------------- | ----------------------------------------- |
| `startUrls`   | URL misti di post & profili di X          |
| `tweetIds`    | ID numerici dei post                      |
| `usernames`   | Timeline delle risposte dei profili       |
| `startCursor` | Riprende un target da un cursore salvato  |

Il modulo di input mostra solo i controlli canonici. Gli alias di compatibilità
funzionano ancora negli input JSON, API, SDK, di automazione & dei task salvati.
Quando combini campi canonici & alias, vale il loro ordine di risoluzione
attuale.

Questi alias accettano i nomi di campo comuni di altri scraper:

- Alias URL: `urls`, `tweetUrls`, `postUrls`, `profileUrls`
- Alias ID: `conversationIds`, `postIds`, `ids`, `tweetId`, `id`
- Alias nome utente: `twitterHandles`, `screenname`
- Alias limite globale: `maxResults`, `max_results`, `resultsLimit`,
  `maxReplies`
- Alias per target: `maxRepliesPerTweet`, `maxCommentsPerPost`
- Alias ricerca: `useSearch`
- Alias risposte annidate: `includeNestedReplies`, `includeRepliesOfReplies`
- Alias post originale: `includeOriginalTweet`
- Alias output: `outputVariant`, `includeRaw`

I target malformati o non supportati non fanno fallire l'Actor. Quando non resta
nessun target valido, l'esecuzione scrive una diagnostica con la correzione.

## Strategie di copertura

### Completamento automatico

Usa `collectionStrategy: "auto"` per la maggior parte dei casi. Raccoglie ogni
risposta che riesce a raggiungere per il tuo `scope`. I controlli di ambito,
profondità, ordinamento & autore agiscono prima dei tuoi limiti. Include le
risposte sotto target che non sono radice. Quando X nasconde parte di un thread,
lo stato dice quante risposte X nasconde. Gli altri valori di
`collectionStrategy` non cambiano mai modalità.

Un dato di copertura nella diagnostica non prova che X non abbia altre risposte.
Limiti, dati mancanti o errori possono lasciare incompleta un'esecuzione.

### Risposte dirette

Usa `collectionStrategy: "replies"` per le risposte dirette nell'ordine di X.
Supporta i cursori salvati.

### Ricerca nella conversazione

Usa `collectionStrategy: "conversationSearch"` per un'ampia copertura della
conversazione.

### Contesto completo del thread

Usa `collectionStrategy: "thread"` per leggere il contesto della conversazione
di origine. Imposta `includeOriginalPost: true` per tenere il post radice a
profondità 0.

## Controlli delle risposte dirette & annidate

Usa `scope` per scegliere la forma del risultato.

| Valore   | Risultato                                          |
| -------- | -------------------------------------------------- |
| `direct` | Tiene le risposte di profondità 1                  |
| `nested` | Tiene le risposte alle risposte, da profondità 2   |
| `all`    | Tiene ogni risposta diretta & annidata disponibile |

Usa `maxDepth` per limitare l'annidamento. Quando X omette un antenato della
conversazione, il link al genitore può mancare. L'Actor conserva la migliore
profondità disponibile.

## Ordinamento

Usa `sort` con questi valori:

- `relevance` mantiene l'ordine di origine di X
- `latest` mette prima le più recenti
- `oldest` mette prima le più vecchie
- `likes` mette prima quelle con più Mi piace

I target di profilo raccolgono il numero richiesto di risultati unici & filtrati,
poi li ordinano. I target di post mantengono l'ordinamento globale.

Gli alias di compatibilità `sortBy` & `queryType` funzionano ancora.

## Filtri delle risposte

Tutti i filtri supportati agiscono prima della scrittura nel dataset.

### Filtri di testo & entità

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

### Filtri per autore & lingua

| Input                   | Comportamento                                 |
| ----------------------- | --------------------------------------------- |
| `fromUser`              | Tiene un solo autore di risposte              |
| `toUser`                | Tiene le risposte rivolte a un nome utente    |
| `lang`                  | Tiene un codice lingua di X                   |
| `verifiedOnly`          | Richiede un qualsiasi segnale di verifica     |
| `blueVerifiedOnly`      | Richiede la verifica X Premium                |
| `excludeOriginalAuthor` | Rimuove le risposte dell'autore a sé stesso   |

### Filtri di engagement

Usa `minLikes`, `minReplies`, `minRetweets`, `minQuotes`, `minViews` &
`minBookmarks`. L'alias `minFaves` corrisponde a `minLikes`.

### Filtri per media & tempo

- Imposta `hasMediaOnly: true` per le risposte con media pubblici.
- Imposta `mediaType` su `any`, `image`, `video`, `gif` o `link`.
- Imposta `since` per un timestamp di inizio incluso.
- Imposta `until` per un timestamp di fine escluso.
- Usa `sinceTime` & `untilTime` come alias di compatibilità.

## Campi di output

Gli schemi del dataset & del run-report descrivono ogni campo restituito. I
campi primitivi riportano anche esempi per agenti & integrazioni generate.

Ogni riga completa di risposta può includere questi campi principali:

| Campo               | Descrizione                                         |
| ------------------- | --------------------------------------------------- |
| `id`                | ID della risposta                                   |
| `text`              | Testo della risposta                                |
| `fullText`          | Testo lungo della risposta                          |
| `createdAt`         | Timestamp della risposta                            |
| `lang`              | Codice lingua di X                                  |
| `url`               | URL diretto della risposta                          |
| `conversationId`    | ID della conversazione su X                         |
| `inReplyToId`       | ID del genitore diretto                             |
| `inReplyToUserId`   | ID dell'autore del genitore                         |
| `inReplyToUsername` | Nome utente del genitore                            |
| `likeCount`         | Mi piace                                            |
| `replyCount`        | Risposte figlie                                     |
| `retweetCount`      | Repost                                              |
| `quoteCount`        | Citazioni                                           |
| `viewCount`         | Visualizzazioni                                     |
| `bookmarkCount`     | Segnalibri                                          |
| `author`            | Metadati pubblici disponibili dell'autore           |
| `media`             | Immagini, video, GIF & varianti                     |
| `entities`          | Hashtag, cashtag, menzioni, URL & timestamp video   |
| `quoted_tweet`      | Post citato, quando disponibile                     |
| `retweeted_tweet`   | Post originale del repost, quando disponibile       |

Le righe complete conservano anche i metadati di origine disponibili:

- I campi sul tipo di post sono `type`, `isReply`, `isQuoteStatus`,
  `isNoteTweet`, `isLimitedReply` & `isTranslatable`.
- I dettagli del testo sono `displayTextRange`, `noteTweet`, `article` & `card`.
- Etichette & avvisi sono `contentDisclosure`, `communityNote`,
  `possiblySensitive`, `tombstone` & `exclusiveContent`.
- I dettagli della conversazione sono `conversationControl`, `limitedActions` &
  `unmentionedUserIds`.
- I campi di contesto sono `source`, `place`, `communityId`, `reactionContext` &
  `postCta`.
- I campi su modifiche & disponibilità sono `edit`, `previousCounts`,
  `viewState` & `authorUnavailable`.

Le righe piatte conservano la catena della conversazione, i dettagli di origine,
il tipo di risultato & la versione dello schema. Consulta OpenAPI per i campi
esatti.

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

Una riga di risposta ridotta ha questo aspetto:

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

## Modalità di output

### Compatta

Imposta `outputMode: "compact"` per un dataset più snello. Conserva i campi di
testo, conversazione, autore, engagement & media.

### Completa

Imposta `outputMode: "full"` per conservare ogni campo pubblico supportato.

### Raw

Imposta `outputMode: "raw"` per aggiungere sotto `raw` una copia ripulita dei
dati di origine.

### Annidata o piatta

Il layout predefinito `flat` conserva gli oggetti annidati & aggiunge campi
dell'autore per le tabelle. Imposta `outputPreset: "nested"` per omettere i
campi piatti aggiunti.

### Nomi dei campi

Imposta `fieldStyle` su `source`, `camelCase` o `snake_case`. L'Actor evita di
sovrascrivere le chiavi di origine in conflitto.

## Limiti, fatturazione & continuazione

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

### Timeout di Apify

Il timeout predefinito di Apify è `0`, quindi le esecuzioni non hanno limite di
tempo. L'Actor continua finché raggiunge il limite o esaurisce i dati idonei.
Puoi comunque impostare un timeout finito su Apify. In quel caso
`completionReason: "deadline_reached"` indica che il limite è vicino. L'Actor
salva risposte & report, poi termina in modo pulito prima del limite. Le
risposte consegnate si pagano una volta. I target non finiti restano
riprendibili.

## Estrazione incompleta

Un'esecuzione interrotta scrive una diagnostica `partial` gratuita. I risultati
disponibili restano intatti. Leggi `availableResults`, `failedTargets`,
`retryable` & `nextAction` prima di riprovare. Un'uscita riuscita dell'Actor
conferma la consegna, non l'estrazione completa.

Lo stato nomina ogni causa di un arresto anticipato. `stopCauses` elenca ogni
causa con i propri `message`, `retryable` & `nextAction`. Le cause sono
`target_not_found`, `target_failed`, `page_limit`, `reply_reach` &
`deadline_reached`. `reply_reach` significa che X ha fornito solo una parte di
un thread.

Un post o un account mancante non conta come errore. Lo stato lo nomina, come
"X has no match for 1 target." Entra in `stopCauses` solo se un'altra causa ha
fermato l'esecuzione. L'esecuzione è `retryable` quando lo è almeno una causa.

## Diagnostica

Le righe di dati riuscite usano `resultType: "reply"`. Le esecuzioni che
terminano senza dati scrivono esattamente 1 record gratuito in `diagnostics`. Il
record spiega come risolvere il problema.

Lo stato dell'esecuzione dice perché si è fermata. Conta anche i risultati
addebitati & i target letti. Le esecuzioni con un problema scrivono sempre
`run-report`, incluse le uscite senza input o con input non valido. Lo scrive
anche un'esecuzione grande. Un'esecuzione piccola senza problemi lo salta &
risparmia uso di Apify. Attiva `alwaysSaveRunRecords` per scriverlo a ogni
esecuzione.

Lo schema del report documenta completamento, fatturazione, errori & cursori
salvati. Il suo campo `version` riporta la versione esatta del codice sorgente
pubblicato dell'Actor.

Il campo `status` usa questi valori:

- `no-input`
- `invalid-input`
- `replies-incomplete`
- `zero-output`
- `aborted`
- `unexpected-error`

## Esempi API

Ogni esempio avvia X Reply Scraper di Xquik & restituisce gli elementi del
dataset. Sostituisci `<APIFY_API_TOKEN>` con il tuo token API di Apify.

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
actor=xquik~x-reply-scraper
curl "https://api.apify.com/v2/acts/$actor/run-sync-get-dataset-items" \
  -X POST \
  -H "Authorization: Bearer <APIFY_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"tweetIds":["2082577277246972300"],"maxItems":100}'
```

## Automazione & integrazioni

Avvia X Reply Scraper di Xquik con pianificazioni, webhook o client API di Apify.
Collegalo a Make, Zapier, n8n, Google Sheets o a uno storage cloud. Gli agenti
possono chiamarlo tramite il
[server Apify MCP](https://docs.apify.com/platform/integrations/mcp).

I flussi di agenti idonei possono usare anche
[x402](https://docs.apify.com/integrations/x402) o
[Skyfire](https://docs.apify.com/integrations/skyfire).

Xquik offre anche 47 strumenti nella dashboard, 129 operazioni REST, webhook
firmati & un server MCP.

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

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): estrae post da
  ricerche, timeline dei profili, liste & ID dei post con oltre 50 filtri &
  export piatti. Usalo quando ti servono dati sui post senza analisi. Da
  $0.00015 per riga.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): estrae
  profili con i relativi post, risposte, media & follower da nomi utente, ID o
  URL. Usalo quando parti dagli account invece che dalle ricerche. Da $0.00015
  per riga.
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

## FAQ

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

### Perché la mia esecuzione ha restituito meno risposte di quelle mostrate dal post?

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

Apri una issue nella pagina dell'Actor o scrivi a
[support@xquik.com](mailto:support@xquik.com) con l'ID dell'esecuzione.

### Posso avere una soluzione personalizzata?

Sì. Visita [xquik.com](https://xquik.com) o leggi la
[documentazione API](https://docs.xquik.com/introduction). Xquik offre una
dashboard, un'API REST, un server MCP & webhook.
