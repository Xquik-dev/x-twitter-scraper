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
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">Guarda come Framer usa gli scraper Xquik con Claude Code, Codex, Cursor e altri, da 6:07.</a>
</td></tr></table>

Xquik è il servizio di scraping X (Twitter) più veloce & economico al mondo con
i dati X più completi. X Follower Scraper raccoglie follower, following, membri
di List, iscritti & membri di community. Ogni altro Actor Apify addebita costi
prima di filtrare o deduplicare. Xquik addebita solo i risultati consegnati,
unici & conformi ai filtri.

Estrai follower, following, follower verificati, membri di List, iscritti a
List & membri di Community di X (Twitter) **a partire da $0.00015 per profilo
consegnato su ogni piano Apify**. Apify fattura l'uso della piattaforma
separatamente. Nessun login X, costo di avvio o costo per query.

>

## Estrazione incompleta

Un'estrazione interrotta scrive una diagnostica `partial` gratuita. I risultati
disponibili restano intatti. Leggi `availableResults`, `failedTargets`,
`retryable` e `nextAction` prima di riprovare. Un'uscita riuscita dell'Actor
conferma la consegna, non l'estrazione completa.

Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.

> "Twitter" e "X" sono marchi di X Corp.

## Cosa fa X Follower Scraper?

X Follower Scraper restituisce i dati di profilo pubblico disponibili per
follower, following, List & Community. Ogni riga include il proprio target di
origine & la relazione.

### Comportamento principale

- Filtri & rimozione dei duplicati vengono eseguiti prima della fatturazione.
- Un'esecuzione accetta handle, ID numerici, URL e percorsi brevi.
- La modalità merge registra profili condivisi, sorgenti, relazioni & `overlapCount`.
- I cursori automatici richiedono fino a 300 profili per pagina.
- I cursori più vecchi mantengono il limite di 200 profili & si riavviano alla scadenza.
- I log di pagina includono `fetchDurationMs`, `processingDurationMs`, `pushDurationMs`,
  `statusDurationMs` & `fullPageDurationMs` senza ripetere i target.
- I checkpoint conservano righe accettate, tempistiche & conteggi di errori dopo i riavvii.

## Esempi di task

Scegli tra 50 task pubblici. Ognuno ha un input limitato & una vista dataset
corrispondente. Ogni task si apre con un pubblico o un filtro reale. Modificalo
prima di eseguirlo.

- [Discover AI builders in OpenAI followers](https://apify.com/xquik/x-follower-scraper/examples/discover-ai-builders-in-openai-followers)
- [Build an X audience dataset for AI agents](https://apify.com/xquik/x-follower-scraper/examples/build-agent-ready-x-audience-dataset)
- [Collect X audience data for RAG](https://apify.com/xquik/x-follower-scraper/examples/collect-x-audience-data-for-rag)
- [Find AI SEO practitioners on X](https://apify.com/xquik/x-follower-scraper/examples/find-ai-seo-practitioners-on-x)
- [Compare AI brand follower overlap](https://apify.com/xquik/x-follower-scraper/examples/compare-ai-brand-follower-overlap)
- [Export Twitter followers to CSV](https://apify.com/xquik/x-follower-scraper/examples/export-twitter-followers-to-csv)
- [Analyze competitor follower overlap](https://apify.com/xquik/x-follower-scraper/examples/analyze-competitor-follower-overlap)
- [Find micro-influencers in X followers](https://apify.com/xquik/x-follower-scraper/examples/find-micro-influencers-in-followers)
- [Export curated Twitter list members](https://apify.com/xquik/x-follower-scraper/examples/export-curated-twitter-list-members)
- [Analyze public X Community members](https://apify.com/xquik/x-follower-scraper/examples/analyze-public-x-community-members)
- [Collect Community members for AI agents](https://apify.com/xquik/x-follower-scraper/examples/collect-community-members-for-ai-agents)
- [Create repeatable X follower snapshots](https://apify.com/xquik/x-follower-scraper/examples/create-repeatable-follower-snapshots)

### Quali dati può estrarre X Follower Scraper?

| Campo             | Descrizione                                             |
| ----------------- | ------------------------------------------------------- |
| `id`              | ID numerico dell'utente X                               |
| `username`        | Handle (senza `@`)                                      |
| `name`            | Nome visualizzato                                       |
| `description`     | Testo della bio                                         |
| `followers`       | Numero di follower                                      |
| `following`       | Numero di following                                     |
| `statusesCount`   | Totale tweet pubblicati                                 |
| `mediaCount`      | Totale media caricati                                   |
| `favouritesCount` | Totale "Mi piace" assegnati                             |
| `verified`        | Flag combinato di verifica Blue pubblica o legacy       |
| `verifiedType`    | `blue`, `business`, `government` o `none`               |
| `location`        | Località autodichiarata                                 |
| `url`             | URL del sito web dal profilo                             |
| `profilePicture`  | URL dell'avatar (formato completo)                       |
| `coverPicture`    | URL del banner                                           |
| `createdAt`       | Stringa del timestamp di creazione dell'account da X     |
| `sourceTarget`    | Handle / ID da cui è stato estratto questo profilo       |
| `sourceRelation`  | Relazione: `followers`, `following`, `list_members`, ... |
| `sourceUrl`       | URL esatto su cui è stato trovato il profilo             |
| `sourceTargets`   | Tutti i target che corrispondono a questo profilo in modalità merge |
| `sourceRelations` | Tutte le relazioni che corrispondono a questo profilo in modalità merge |
| `sourceUrls`      | Tutti gli URL di origine che corrispondono a questo profilo in modalità merge |
| `overlapCount`    | Numero di coppie relazione-target corrispondenti in modalità merge |
| `resultType`      | Tipo di riga nelle modalità di output full & raw          |
| `raw`             | Profilo sorgente sicuro prima della formattazione specifica dell'Actor |

Le righe seguono il contratto del profilo pubblico. Copre identità, conteggi,
verifica, disponibilità, affiliati, dati professionali & biografie.
L'attribuzione della sorgente, le entità & gli ID dei tweet fissati restano
disponibili. Consulta OpenAPI per i campi esatti.

Imposta `outputMode: "raw"` o `includeRaw: true` per includere una copia `raw`
del profilo sorgente sicuro. La modalità compatta resta quella predefinita.

`verifiedOnly` accetta profili con verifica Blue pubblica & legacy. I flag di
origine in conflitto non permettono mai a un valore falso di nascondere uno
stato di verifica vero.

Lo stato relativo al visualizzatore appartiene all'account di fetch di Xquik,
non al tuo dataset. I flag di follow, blocco, silenziamento, DM, notifica &
simili relativi al visualizzatore vengono sempre rimossi, anche dall'output raw.

## Quanto costa estrarre i follower di X?

Ogni piano Apify costa `$0.00015` per profilo consegnato. Apify fattura l'uso
della tua piattaforma separatamente. Xquik applica un addebito per ogni riga di
dati consegnata. Le diagnostiche sono gratuite nell'output `diagnostics`.
Non si applica alcun abbonamento Xquik separato. Non si applica alcun costo di
avvio. Ogni esecuzione scrive un record `run-report` con `estimatedChargeUsd`
calcolato dal prezzo pay-per-event in tempo reale che Apify espone all'Actor.
Ogni esito scrive `run-report`, inclusi gli esiti senza input & con input non
valido. Il campo `version` riporta la versione esatta della sorgente
dell'Actor pubblicata.

`failedTargets` conta i target che si sono interrotti dopo un errore di
lettura. I profili accettati restano righe di dati fatturabili. Queste
esecuzioni usano `completionReason: "partial_failure"`. La paginazione rapida
lato server segue lo stesso contratto di reportistica.

Il timeout predefinito di Apify è `0`. Le esecuzioni non hanno limite di tempo.
L'Actor segue ogni cursore attivo fino al limite o alla fine della sorgente.
Un chiamante può comunque impostare un timeout finito. In tal caso
`completionReason: "deadline_reached"` significa che quel limite è vicino.
L'Actor riserva gli ultimi 15 secondi per checkpoint, righe, report & un'uscita
pulita. I profili validi restano consegnati & vengono fatturati una sola
volta. La paginazione non terminata resta ripristinabile.

I target indipendenti vengono eseguiti in concorrenza. Ogni target mantiene una
paginazione ordinata per cursore. Le scritture nel dataset mantengono atomici
limiti, deduplicazione, attribuzione & fatturazione.

- Avvii, target & selezione della relazione non aggiungono alcun costo di
  query separato.
- I filtri (`minFollowers`, `verifiedOnly`, `bioContains`, `locationContains`,
  `minFollowing`, `maxFollowing`, `minStatuses`, `maxStatuses`,
  `minAccountAgeDays`, `verifiedType`, `usernameContains`, `hasWebsite`,
  `hasLocation`) vengono applicati prima che un profilo entri nel tuo dataset.
- Con `dedupeAcrossTargets: true`, l'Actor rimuove i duplicati prima della
  scrittura.
- Le righe rifiutate dal dataset non vengono fatturate.
- Le esecuzioni senza input, con input non valido & senza output scrivono 1
  record utile nell'output gratuito `diagnostics`.

Imposta `maxTotalChargeUsd` nell'API Apify, o "Max cost per run" in Console,
per impostare un tetto massimo di spesa. Apify espone quel limite all'Actor
come `ACTOR_MAX_TOTAL_CHARGE_USD`, e l'Actor si ferma prima di accettare righe
oltre quel limite. Lascia `maxItems` vuoto per lasciare che l'esecuzione
restituisca il maggior numero possibile di profili entro il budget. Imposta
`maxItems` solo quando vuoi un limite di risultati più piccolo di quanto il
budget consentirebbe.

## Come uso X Follower Scraper per estrarre i dati dei follower?

### 1. Incolla URL di profilo o di List

Incolla URL di profilo, List o Community. Lo scraper instrada ogni URL alla
propria relazione:

```json
{
  "startUrls": [
    { "url": "https://x.com/nasa/followers" },
    { "url": "https://x.com/spacex/verified_followers" },
    { "url": "https://x.com/elonmusk/following" },
    { "url": "https://x.com/i/lists/1748648376080666720/members" },
    { "url": "https://x.com/i/communities/1493446837214187523/members" }
  ],
  "maxItems": 5000
}
```

### 2. Handle in blocco

Scorciatoia per molti target `/<handle>/followers`. Gli username accettano `@`
o nessun prefisso:

```json
{
  "twitterHandles": ["elonmusk", "nasa", "openai"],
  "relation": "followers",
  "maxItems": 1000
}
```

Imposta `relation` su `followers`, `following` o `verified_followers` per
scegliere la relazione che l'Actor estrae per ogni handle.

Gli alias accettati per lo stesso input includono `username`, `usernames` &
`user_names`.

### 3. Esecuzioni multi-relazione

```json
{
  "usernames": ["nasa"],
  "relations": ["followers", "following"],
  "maxItems": 1000
}
```

Puoi anche usare booleani come `getFollowers`, `getFollowing`,
`getVerifiedFollowers`, `getListMembers`, `getListFollowers` &
`getCommunityMembers`.

### 4. Estrai tramite ID numerici di utente, List o community

```json
{
  "userIds": ["44196397"],
  "listIds": ["1748648376080666720"],
  "communityIds": ["1493446837214187523"],
  "relation": "followers",
  "maxItemsPerTarget": 500,
  "maxItems": 1500
}
```

Gli alias accettati per gli ID numerici utente includono `twitterUserIds` &
`user_ids`.

`relation` si applica agli ID numerici utente. Gli ID di List usano i membri
per impostazione predefinita. Gli ID di Community usano sempre i membri.
`maxItemsPerTarget` impedisce che il primo target grande consumi il limite
globale.

### 5. Filtra prima di pagare

Applica filtri in modo che solo i profili corrispondenti entrino nel tuo
dataset:

```json
{
  "twitterHandles": ["openai"],
  "relation": "followers",
  "minFollowers": 1000,
  "verifiedOnly": true,
  "verifiedType": "business",
  "minStatuses": 100,
  "usernameContains": "ai",
  "bioContains": "founder, CEO",
  "locationContains": "San Francisco",
  "maxItems": 500
}
```

L'Actor può ispezionare più profili di quanti ne scriva. Paghi solo per le
righe che superano ogni filtro & entrano nel tuo dataset.

Separa le alternative di `bioContains` con virgole o nuove righe. Un profilo
passa quando la sua bio contiene uno qualsiasi dei termini forniti. La
corrispondenza non distingue maiuscole/minuscole.

### 6. Trova la sovrapposizione di pubblico

Usa la modalità merge per confrontare concorrenti, List, community o tipi di
relazione:

```json
{
  "twitterHandles": ["openai", "anthropicai", "GoogleDeepMind"],
  "relation": "followers",
  "dedupeMode": "merge",
  "maxItemsPerTarget": 5000,
  "maxItems": 15000
}
```

L'output contiene una riga per profilo unico. I profili condivisi includono
`sourceTargets`, `sourceRelations`, `sourceUrls`, `sourceTargetKeys` &
`overlapCount`, così puoi ordinare per sovrapposizione o esportare direttamente
in CSV. Mantieni `maxItems` sufficientemente alto da lasciare che ogni target
contribuisca con righe. Usa `maxItemsPerTarget` per controllare la profondità
per account.

### Formati URL accettati

| URL                                         | Relazione                                |
| ------------------------------------------- | ----------------------------------------- |
| `https://x.com/<handle>/followers`          | `followers`                               |
| `https://x.com/<handle>/verified_followers` | `verified_followers`                      |
| `https://x.com/<handle>/following`          | `following`                               |
| `https://x.com/<handle>`                    | `relation` predefinita (followers se non impostata) |
| `https://x.com/i/lists/<id>/members`        | `list_members`                            |
| `https://x.com/i/lists/<id>/followers`      | `list_followers`                          |
| `https://x.com/i/lists/<id>`                | `list_members`                            |
| `https://x.com/i/communities/<id>/members`  | `community_members`                       |
| `https://x.com/i/communities/<id>`          | `community_members`                       |
| `<handle>/followers`                        | `followers`                               |
| `<handle>/following`                        | `following`                               |
| `<handle>/verified_followers`               | `verified_followers`                      |
| `lists/<id>/members`                        | `list_members`                            |
| `lists/<id>/followers`                      | `list_followers`                          |
| `communities/<id>/members`                  | `community_members`                       |

Sono accettati ovunque anche `twitter.com` & `mobile.twitter.com`.

## Input

Consulta la scheda **Input** per l'elenco completo delle opzioni. Tutti i campi
sono facoltativi tranne almeno uno tra: `startUrls`, `twitterHandles`,
`userIds`, `listIds` o `communityIds`, o i loro alias documentati.

Esempi:

- Aggiungi un handle concorrente a `twitterHandles` con `relation: "followers"`.
- Incolla `https://x.com/<handle>/verified_followers` in Start URLs per i
  profili verificati.
- Incolla un URL di List in Start URLs per verificarne i membri.
- Aggiungi 2+ handle. Imposta `dedupeMode: "first"` per mantenere solo la prima
  riga di profilo corrispondente, oppure usa `dedupeMode: "merge"` per
  mantenere una riga con tutti i target di origine corrispondenti.

### UX di input Console & API

La Console espone questi controlli:

- Il campo Start URLs accetta stringhe URL oppure oggetti `{ "url": "..." }`.
  Il suo editor JSON conserva entrambi i formati API.
- Relation, Output Mode & Dedupe Mode sono select validati.
- Relations è un multi-select validato per esecuzioni multi-relazione.
- I limiti di risultato accettano numeri interi maggiori o uguali a 1.
- I filtri numerici di profilo accettano numeri interi maggiori o uguali a 0.

Usa i campi canonici nelle nuove integrazioni. Gli alias di compatibilità
restano disponibili in JSON, API, SDK, automazione & input dei task. Questo
include `outputVariant` & `includeRaw` come alias di Output Mode. Include anche
`dedupeAcrossTargets` come alias di Dedupe Mode. Il modulo visuale nasconde gli
alias che duplicano un controllo canonico. Gli input JSON esistenti & i task
salvati mantengono il loro comportamento attuale.

### Migra da un altro Actor di follower

Incolla l'input che usi già. X Follower Scraper legge i nomi dei campi usati
dagli altri Actor di follower X & li mappa sui propri campi. I nomi canonici
restano il default documentato. Un alias non scarta mai un campo & non cambia
mai quanto paghi.

| Campo che usi già                                                                     | X Follower Scraper lo legge come |
| ------------------------------------------------------------------------------------- | -------------------------------- |
| `twitterHandles`, `usernames`, `user_names`, `handles`, `userNameList`, `screenNames` | `twitterHandles`                 |
| `username`, `handle`, `screenName`, come stringa singola                              | `twitterHandles`                 |
| `twitterUserIds`, `user_ids`, `userIdList`                                            | `userIds`                        |
| `user_id`, `userId`, come stringa singola                                             | `userIds`                        |
| `startUrls`, `urls`, `targets`, `profileUrls`, `accountUrls`                          | `startUrls`                      |
| `profileUrl`, come stringa singola                                                    | `startUrls`                      |
| `getFollowers`, `getFollowing`                                                        | `relations`                      |
| `type` con `followers` o `following`                                                  | `relation`                       |
| `maxResults`, `max_results`, `resultsLimit`, `count`                                  | `maxItems`                       |
| `scrapeAllResults`                                                                    | nessun limite per target         |

2 nomi qui significano altro. In alcuni Actor `maxFollowers` & `maxFollowing`
limitano quante righe recupera un'esecuzione. In X Follower Scraper filtrano
i profili in base ai loro conteggi di follower & following. Usa `maxItems`
per limitare le righe. X Follower Scraper non ha un'unità pagina, quindi
sostituisci `maxPages` con `maxItems`.

### Usa sempre la build più recente

Le esecuzioni Store usano la configurazione di build `latest` dell'Actor. I
client API dovrebbero omettere l'override di build o passare `build=latest`.
Aggiorna i Task & le integrazioni che fissano una build più vecchia. Le build
fissate non si aggiornano mai automaticamente.

## Output

Ogni profilo è un oggetto JSON. La modalità compatta restituisce campi
pubblici normalizzati, campi di versione dello schema & metadati di origine
quando disponibili:

Gli schemi di dataset & run-report descrivono ogni campo restituito. I campi
primitivi includono anche esempi per agenti & integrazioni generate.

I valori di esempio sono illustrativi. Le risposte riflettono i dati di
origine al momento dell'esecuzione.

```json
{
  "schemaVersion": 1,
  "_schema_version": 1,
  "id": "44196397",
  "username": "elonmusk",
  "name": "Elon Musk",
  "description": "...",
  "followers": 180000000,
  "following": 500,
  "statusesCount": 42000,
  "mediaCount": 3200,
  "favouritesCount": 120000,
  "verified": true,
  "verifiedType": "blue",
  "location": "...",
  "url": "https://...",
  "profilePicture": "https://...",
  "coverPicture": "https://...",
  "createdAt": "Tue Jun 02 20:12:29 +0000 2009",
  "sourceTarget": "nasa",
  "sourceRelation": "followers",
  "sourceUrl": "https://x.com/nasa/followers"
}
```

La modalità dedupe merge aggiunge campi di sovrapposizione:

```json
{
  "schemaVersion": 1,
  "_schema_version": 1,
  "id": "44196397",
  "username": "elonmusk",
  "sourceTargets": ["nasa", "spacex"],
  "sourceRelations": ["followers"],
  "sourceUrls": [
    "https://x.com/nasa/followers",
    "https://x.com/spacex/followers"
  ],
  "sourceTargetKeys": ["followers:nasa", "followers:spacex"],
  "overlapCount": 2
}
```

Esporta come JSON, CSV, Excel o HTML dal dataset Apify.

## Opzioni di esecuzione

- Imposta il costo massimo totale Apify per limitare il costo dell'esecuzione.
  Lascia `maxItems` vuoto per il massimo di righe entro quel budget, oppure
  imposta `maxItems` & `maxItemsPerTarget` quando vuoi meno profili.
- Combina `minFollowers`, `verifiedOnly`, `verifiedType`, `minStatuses`,
  `usernameContains`, `bioContains`, `locationContains`, `hasWebsite` &
  `hasLocation` per restringere il dataset fatturato.
- Imposta `dedupeMode: "first"` quando estrai più handle concorrenti per
  ottenere solo profili unici tra tutti i target.
- Imposta `dedupeMode: "merge"` per ottenere una riga per profilo con ogni
  target di origine corrispondente allegato.
- Imposta `outputMode: "full"` per ottenere campi di profilo facoltativi come
  ID di tweet fissati, entità & metadati di profilo quando disponibili.
- Imposta `outputMode: "raw"` o `includeRaw: true` per includere un oggetto
  `raw` sanificato insieme ai campi normalizzati.
- Pianifica esecuzioni ripetute dell'Actor & archivia ogni dataset per
  confrontare gli ID di profilo. I monitoraggi Xquik emettono eventi
  supportati su tweet & profili, non modifiche alle liste di follower.

## Casi d'uso

- Esporta i follower dei concorrenti per la ricerca di lead.
- Confronta i pubblici tra il tuo account, i concorrenti & personaggi pubblici.
- Filtra numero di follower & verifica per trovare profili corrispondenti.
- Esporta i membri di Community X rilevanti.
- Costruisci dataset pubblici di rete sociale per la ricerca.
- Segmenta le basi di follower per parola chiave della bio, località o tipo di
  profilo.

## Responsabilità sui dati

L'Actor richiede campi di profilo X pubblici. I risultati possono contenere
dati personali, incluse le località autodichiarate. Verifica uno scopo lecito
& rispetta le norme sulla privacy applicabili. Chiedi a un consulente
qualificato in caso di dubbio.

## Actor Xquik correlati

Ogni Actor Xquik condivide lo stesso motore di estrazione, la fatturazione
filter-first & le diagnostiche. Scegli quello che corrisponde ai dati di cui
hai bisogno.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): estrae tweet
  da ricerche, timeline di profilo, List & ID di tweet con oltre 50 filtri &
  esportazioni piatte. Usalo quando ti servono dati sui tweet senza analisi. A
  partire da $0.00015 per riga.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): estrae
  profili con i relativi post, risposte, media & follower da handle, ID o URL.
  Usalo quando parti dagli account invece che dalle ricerche. Da $0.00015 per
  riga.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): estrae risposte,
  commenti & intere conversazioni sotto i post con oltre 25 filtri. Usalo
  quando ti serve la discussione sotto i tweet. A partire da $0.00015 per riga.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): estrae
  risposte, citazioni, retweeter & thread per URL o ID di post in blocco.
  Usalo quando misuri chi ha interagito con i post. Da $0.00015 per riga.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper):
  cerca utenti per handle, bio & località con filtri su follower, verifica,
  età & località. Usalo quando costruisci liste di account dalla ricerca. A
  partire da $0.00015 per profilo.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): estrae post,
  membri & follower di List da URL o ID di List. Usalo quando una List curata
  definisce le tue sorgenti. A partire da $0.00015 per riga.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): estrae
  informazioni, post, ricerche, membri & moderatori di Community. Usalo quando
  le tue sorgenti sono Community X. A partire da $0.00015 per riga.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): estrae
  trend in tempo reale per località con rank, volume, query & WOEID. Usalo
  quando monitori cosa è di tendenza & dove. A partire da $0.00015 per trend.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): estrae
  X Article lunghi come Markdown & testo con copertine, autori, date &
  metriche. Usalo quando ti servono i corpi degli articoli, non i tweet. A
  partire da $0.00015 per articolo.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): estrae o
  archivia foto, video & GIF da post o profili con opzioni MP4 & metadati.
  Usalo quando ti servono i file multimediali stessi. A partire da $0.00015
  per riga multimediale.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  monitora le menzioni del brand con rilevanza AI, sentiment & risposte sulla
  customer experience & confronta le esecuzioni. Usalo quando osservi un brand
  nel tempo. A partire da $0.0003 per tweet analizzato.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  etichetta atteggiamento, intensità & probabilità di sarcasmo per ogni tweet
  con l'AI. Usalo quando ti serve il sentiment generale su qualsiasi
  argomento. A partire da $0.0003 per tweet analizzato.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  etichetta posizione rialzista, ribassista, neutra o mista, tipo di
  contenuto, convinzione & rilevanza dell'asset con l'AI. Usalo quando segui
  stock, crypto o discussioni di trading. A partire da $0.0003 per tweet
  analizzato.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  etichetta i post di notizie per formato, attribuzione della fonte &
  rilevanza dell'argomento con l'AI. Usalo quando separi la cronaca dal
  commento. A partire da $0.0003 per tweet analizzato.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  risponde alle tue domande personalizzate di categoria, punteggio & sì/no per
  ogni tweet con l'AI. Usalo quando le analisi predefinite non si adattano
  alle tue etichette. A partire da $0.0003 per tweet analizzato.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer):
  stima un Viral Score da 0 a 100 & un verdetto per ogni tweet da 8 risposte
  dell'IA sui tratti. Usalo quando studi perché i tweet si diffondono o
  falliscono. Da $0.0003 per tweet analizzato.

## Ti serve più dello scraping?

Xquik offre anche 47 strumenti da dashboard, 129 operazioni REST, webhook
firmati & un server MCP.

- [API documentation](https://docs.xquik.com/introduction): guide API REST
- [Followers API](https://docs.xquik.com/api-reference/x/followers): recupera
  i follower disponibili di un account
- [Following API](https://docs.xquik.com/api-reference/x/following): scopri
  chi segue un utente
- [List Members API](https://docs.xquik.com/api-reference/x/list-members):
  esporta i membri di una List X pubblica
- [MCP server](https://docs.xquik.com/mcp/overview): scopri ed esegui le
  operazioni JSON o testuali supportate
- [Webhooks](https://docs.xquik.com/webhooks/overview): ricevi gli eventi
  supportati su tweet & profili

## FAQ

**Mi serve una chiave API X?** No. Questo scraper usa la propria
infrastruttura. Non sono richiesti login o credenziali.

**Cosa limita un'esecuzione?** Il limite di elementi richiesto & il limite di
spesa Apify fermano l'esecuzione. Si applicano comunque i limiti di account &
piattaforma Apify.

**Quanto è veloce?** Il tempo di esecuzione dipende dalla dimensione del
target, dai filtri & dalla disponibilità a monte. Le esecuzioni filtrate in
profondità salvano il progresso in Console ogni 5 pagine. Questo riduce il
traffico non dati tra il recupero delle pagine.

**Perché la mia esecuzione restituisce meno righe di `maxItems`?** Filtri come
`minFollowers`, `verifiedOnly` & `bioContains` vengono applicati prima delle
scritture. Allenta i filtri per ottenere più risultati.

**Quanti follower posso estrarre da un singolo account?** X pagina gli account
grandi a lotti. Aumenta il limite di tempo di esecuzione di Apify per recuperare
più pagine. `maxItemsPerTarget` limita solo ogni singolo target.

**L'Actor ritenta i fallimenti temporanei?** Sì. Effettua fino a 3 tentativi
per pagina per timeout, 429 & risposte 5xx. Rispetta `Retry-After` quando
presente. Altrimenti usa un backoff esponenziale. I fallimenti gravi
conservano i risultati parziali.

**Cosa succede vicino al limite di tempo di esecuzione di Apify?** L'Actor non
aggiunge alcuna scadenza di esecuzione più breve. Usa il limite configurato di
Apify & mantiene gli ultimi 15 secondi per la finalizzazione. Scarica i
profili, salva i checkpoint di paginazione, scrive il report & esce. Le righe
non accettate dal dataset non vengono fatturate.

**Posso riprendere da dove avevo interrotto?** L'input del cursore di ripresa
non è ancora esposto. Rieseguire lo stesso target parte dalla sua prima
pagina disponibile.

**Posso usare l'API Apify per eseguirlo?** Sì. Consulta la
[API tab](https://apify.com/xquik/x-follower-scraper/api) per esempi in
Python, JavaScript & cURL.

**Posso pianificare estrazioni ricorrenti?** Sì. Usa la funzione di
[scheduling](https://docs.apify.com/platform/schedules) integrata in Apify per
eseguire questo Actor su un cron. Confronta i dataset archiviati per trovare
le variazioni dei follower.

**Dove segnalo problemi?** Usa la scheda Issues su questa pagina dell'Actor.

**Dove sono i documenti API?** Leggi la
[API documentation](https://docs.xquik.com/introduction).
