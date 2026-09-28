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
i dati X più completi. X Follower Scraper di Xquik raccoglie follower,
following, membri & follower delle liste e membri delle community. I benchmark
pubblici dimostrano che è il più economico & veloce tra 10 Actor di follower. Le
sue righe hanno 1,9x i campi dell'Actor mediano, come mostra il
[benchmark qui sotto](#benchmark). La maggior parte degli altri Actor Apify fa
pagare prima di filtrare o deduplicare. Xquik fa pagare solo i risultati
consegnati, unici e conformi ai filtri.

Estrai da X (Twitter) follower, following, follower verificati, membri delle
liste, follower delle liste & membri delle community. X Follower Scraper di
Xquik costa **da $0.00015 per profilo consegnato su ogni piano Apify**. Apify
fattura a parte l'uso della piattaforma. Non ti serve il login a X & Xquik non
aggiunge costi di avvio o per query.

> Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.
> "Twitter" e "X" sono marchi di X Corp.

## Cosa fa X Follower Scraper?

X Follower Scraper di Xquik restituisce i dati pubblici disponibili dei profili
per follower, following, liste & community. Ogni riga indica il target di
origine & la relazione.

### Comportamento principale

- Filtri & rimozione dei duplicati agiscono prima della fatturazione.
- Di default, un profilo condiviso da più target compare & si paga una volta.
- Un'esecuzione accetta nomi utente, ID numerici, URL & percorsi brevi.
- La modalità merge registra profili condivisi, origini, relazioni &
  `overlapCount`.
- I log dell'esecuzione mostrano i tempi di ogni pagina in `fetchDurationMs`,
  `processingDurationMs`, `pushDurationMs`, `statusDurationMs` &
  `fullPageDurationMs`.
- Le esecuzioni conservano righe consegnate & progressi quando Apify le
  riavvia.

### Quali dati può estrarre X Follower Scraper?

| Campo             | Descrizione                                                     |
| ----------------- | --------------------------------------------------------------- |
| `id`              | ID numerico dell'utente X                                       |
| `username`        | Nome utente (senza `@`)                                         |
| `name`            | Nome visualizzato                                               |
| `description`     | Testo della bio                                                 |
| `followers`       | Numero di follower                                              |
| `following`       | Numero di following                                             |
| `statusesCount`   | Totale dei post pubblicati                                      |
| `mediaCount`      | Totale dei media caricati                                       |
| `favouritesCount` | Totale dei Mi piace messi                                       |
| `verified`        | Indicatore combinato di verifica pubblica Blue o legacy         |
| `verifiedType`    | `blue`, `business`, `government` o `none`                       |
| `location`        | Posizione indicata dall'utente                                  |
| `url`             | URL del sito web dal profilo                                    |
| `profilePicture`  | URL dell'avatar (dimensione piena)                              |
| `coverPicture`    | URL del banner                                                  |
| `createdAt`       | Stringa di X con data & ora di creazione dell'account           |
| `sourceTarget`    | Nome utente / ID da cui hai estratto questo profilo             |
| `sourceRelation`  | Relazione: `followers`, `following`, `list_members`, ...        |
| `sourceUrl`       | URL esatto in cui è stato trovato il profilo                    |
| `sourceTargets`   | Tutti i target che corrispondono al profilo in modalità merge   |
| `sourceRelations` | Tutte le relazioni che corrispondono al profilo in modalità merge |
| `sourceUrls`      | Tutti gli URL di origine del profilo in modalità merge          |
| `overlapCount`    | Numero di coppie relazione-target corrispondenti in modalità merge |
| `resultType`      | Tipo di riga nelle modalità di output full & raw                |
| `raw`             | Profilo di origine sicuro, prima della formattazione dell'Actor |

Le righe seguono il contratto dei profili pubblici. Il contratto copre
identità, conteggi, verifica, disponibilità, affiliati, dati professionali &
biografie. Restano
disponibili attribuzione dell'origine, entità & ID dei post fissati. Consulta
OpenAPI per i campi esatti.

Imposta `outputMode: "raw"` o `includeRaw: true` per aggiungere un campo `raw`.
Contiene una copia sicura del profilo di origine. La modalità compatta è quella
predefinita.

`verifiedOnly` accetta i profili con verifica pubblica Blue & legacy. Se gli
indicatori di origine sono in conflitto, vince lo stato di verifica vero.

Le righe non includono mai stati visibili solo a chi guarda. Xquik rimuove gli
indicatori di follow, blocco, silenziamento, Messaggi Diretti, notifiche &
simili. Anche l'output raw li elimina.

## Casi d'uso

- Arricchisci i lead & crea dataset di ricerca con più campi per profilo. Il
  2026-09-28 la nostra riga mediana aveva 28 campi. È 1,9x la mediana di altri 9
  Actor.
- Esporta i follower dei concorrenti per cercare lead.
- Confronta il pubblico del tuo account, dei concorrenti & di personaggi
  pubblici.
- Filtra per numero di follower & verifica per trovare i profili giusti.
- Esporta i membri delle community di X.
- Crea dataset pubblici di reti sociali per la ricerca.
- Segmenta i follower per parola chiave nella bio, posizione o tipo di profilo.

## Come uso X Follower Scraper per estrarre i dati dei follower?

1. Apri X Follower Scraper di Xquik in Apify Console.
2. Aggiungi URL di profili, liste o community, nomi utente di X o ID numerici.
3. Scegli una relazione, come `followers` o `verified_followers`.
4. Imposta `maxItems` & gli eventuali filtri sui profili.
5. Avvia l'esecuzione.
6. Esporta il dataset in JSON, CSV, Excel o HTML.

Gli input qui sotto coprono i casi più comuni.

### Incolla URL di profili o liste

Incolla URL di profili, liste o community. Ogni URL imposta la relazione da
estrarre:

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

### Nomi utente in blocco

`twitterHandles` è una scorciatoia per molti target `/<handle>/followers`. I
nomi utente funzionano con o senza `@`:

```json
{
  "twitterHandles": ["elonmusk", "nasa", "openai"],
  "relation": "followers",
  "maxItems": 1000
}
```

`relation` stabilisce cosa estrarre per ogni nome utente. Usa `followers`,
`following` o `verified_followers`.

Lo stesso input accetta anche gli alias `username`, `usernames` & `user_names`.

### Esecuzioni con più relazioni

Imposta `relations` per leggere più relazioni degli stessi nomi utente:

```json
{
  "usernames": ["nasa"],
  "relations": ["followers", "following"],
  "maxItems": 1000
}
```

Funzionano anche booleani come `getFollowers`, `getFollowing`,
`getVerifiedFollowers`, `getListMembers`, `getListFollowers` &
`getCommunityMembers`.

### Estrai con ID numerici di utenti, liste o community

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

Gli ID numerici degli utenti accettano anche gli alias `twitterUserIds` &
`user_ids`.

`relation` vale per gli ID numerici degli utenti. Gli ID delle liste usano i
membri di default. Gli ID delle community usano sempre i membri.
`maxItemsPerTarget` evita che il primo target grande esaurisca `maxItems`.

### Filtra prima di pagare

Aggiungi filtri, così nel tuo dataset entrano solo i profili che corrispondono:

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

L'Actor può esaminare più profili di quanti ne scrive. Paghi solo le righe che
superano ogni filtro & entrano nel tuo dataset.

Separa le alternative di `bioContains` con virgole o a capo. Un profilo passa
quando la sua bio contiene almeno uno dei termini. Il confronto ignora
maiuscole & minuscole.

### Trova la sovrapposizione di pubblico

Usa la modalità merge per confrontare concorrenti, liste, community o tipi di
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

L'output ha 1 riga per ogni profilo unico. I profili condivisi includono
`sourceTargets`, `sourceRelations`, `sourceUrls`, `sourceTargetKeys` &
`overlapCount`. Ordina per `overlapCount` o esporta le righe in CSV. Tieni
`maxItems` abbastanza alto perché ogni target aggiunga righe. Usa
`maxItemsPerTarget` per impostare la profondità di ogni account.

### Formati URL accettati

| URL                                         | Relazione                                        |
| ------------------------------------------- | ------------------------------------------------ |
| `https://x.com/<handle>/followers`          | `followers`                                      |
| `https://x.com/<handle>/verified_followers` | `verified_followers`                             |
| `https://x.com/<handle>/following`          | `following`                                      |
| `https://x.com/<handle>`                    | `relation` predefinita (followers se non impostata) |
| `https://x.com/i/lists/<id>/members`        | `list_members`                                   |
| `https://x.com/i/lists/<id>/followers`      | `list_followers`                                 |
| `https://x.com/i/lists/<id>`                | `list_members`                                   |
| `https://x.com/i/communities/<id>/members`  | `community_members`                              |
| `https://x.com/i/communities/<id>`          | `community_members`                              |
| `<handle>/followers`                        | `followers`                                      |
| `<handle>/following`                        | `following`                                      |
| `<handle>/verified_followers`               | `verified_followers`                             |
| `lists/<id>/members`                        | `list_members`                                   |
| `lists/<id>/followers`                      | `list_followers`                                 |
| `communities/<id>/members`                  | `community_members`                              |

Funzionano ovunque anche gli URL `twitter.com` & `mobile.twitter.com`. Vanno
bene anche gli URL senza `https://`, come `x.com/nasa`.

## Esempi di task

Scegli tra 50 task pubblici. Ognuno ha un input limitato & una vista del dataset
adatta. Ogni task parte da un pubblico o da un filtro reale. Modificalo prima di
avviarlo.

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

## Quanto costa estrarre i follower di X?

X Follower Scraper di Xquik costa $0.00015 per profilo consegnato su ogni piano
Apify. Apify fattura a parte il tuo uso della piattaforma. Xquik applica un
addebito per ogni riga di dati consegnata. Non ti serve un abbonamento Xquik
separato & Xquik non aggiunge costi di avvio. Avvii, target & scelta della
relazione non aggiungono costi di query separati.

Un'esecuzione può leggere molti target. Limiti, deduplicazione, attribuzione &
fatturazione restano esatti su tutti.

- I filtri agiscono prima che un profilo entri nel tuo dataset, quindi le righe
  filtrate non costano nulla.
- I filtri numerici sono `minFollowers`, `maxFollowers`, `minFollowing`,
  `maxFollowing`, `minStatuses`, `maxStatuses` & `minAccountAgeDays`.
- I filtri sui profili sono `verifiedOnly`, `verifiedType`, `bioContains`,
  `locationContains`, `usernameContains`, `hasWebsite` & `hasLocation`.
- L'Actor rimuove i duplicati tra i target prima di scrivere. Imposta
  `dedupeAcrossTargets: false` per tenerli.
- Xquik non fattura mai le righe che il dataset rifiuta.
- La diagnostica nell'output `diagnostics` è gratuita.
- Le esecuzioni senza input, con input non valido o senza output scrivono 1
  record con le azioni da fare nell'output gratuito `diagnostics`.

Anche le esecuzioni grandi o con un problema scrivono un record `run-report`. Il
suo `estimatedChargeUsd` usa il prezzo pay-per-event aggiornato che Apify
comunica all'Actor. Un'esecuzione piccola senza problemi lo salta & risparmia
uso di Apify. Attiva `alwaysSaveRunRecords` per scriverlo a ogni esecuzione.

## Benchmark

X Follower Scraper di Xquik ha battuto altri 9 Actor di follower su costo &
velocità. La sua riga mediana aveva 28 campi, 1,9x la mediana degli altri.

| Actor                                                  | Profili utili | Costo per profilo utile | Profili utili al secondo | Campi per riga | Esecuzione pubblica                                                                                                                                                                                                 |
| ------------------------------------------------------ | ------------: | ----------------------: | -----------------------: | -------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| xquik/x-follower-scraper                               |         1.000 |               $0.000155 |                     68.5 |             27 | [Vedi esecuzione](https://console.apify.com/view/runs/X8Vnx8Ytuk5AzWiK7)                                                                                                                                            |
| xquik/x-follower-scraper                               |           999 |               $0.000155 |                     38.4 |             28 | [Vedi esecuzione](https://console.apify.com/view/runs/lPqjfUn8767FpIDis)                                                                                                                                            |
| b2b_leads/X-Real-Time-Data                             |           286 |               $0.000388 |                      3.1 |             21 | [Vedi esecuzione](https://console.apify.com/view/runs/IkQButA6cVz4ys4GM)                                                                                                                                            |
| kaitoeasyapi/premium-x-follower-scraper-following-data |           356 |               $0.000506 |                     21.9 |             50 | [Vedi esecuzione](https://console.apify.com/view/runs/cJgj15HLBA50LEUf0)                                                                                                                                            |
| api-ninja/x-twitter-followers-scraper                  |           350 |               $0.000809 |                      7.0 |              8 | [Vedi esecuzione](https://console.apify.com/view/runs/XjJ4UPKAILSz0Droz)                                                                                                                                            |
| altimis/scweet                                         |           332 |               $0.000922 |                      1.1 |             21 | [Vedi esecuzione](https://console.apify.com/view/runs/qVGvT7TPAJEHCuR42)                                                                                                                                            |
| apidojo/twitter-user-scraper                           |           323 |               $0.001160 |                      7.3 |             25 | [Vedi esecuzione](https://console.apify.com/view/runs/Xnf7rh8jK6764gP1f)                                                                                                                                            |
| atomus/twitter-scraper                                 |           323 |               $0.001272 |                      6.2 |             13 | [Vedi esecuzione](https://console.apify.com/view/runs/MWz1l0cTcfPcEnaiH)                                                                                                                                            |
| practicaltools/cheap-simple-twitter-api                |           283 |               $0.002036 |                      6.5 |              4 | [Esecuzione 1](https://console.apify.com/view/runs/Zhvi7LsfpHdQNKcGb), [Esecuzione 2](https://console.apify.com/view/runs/IsJj4fa8pFUG7uhlK), [Esecuzione 3](https://console.apify.com/view/runs/2W7n8fpEqoxiXq6oX) |
| maximedupre/twitter-scraper                            |           320 |               $0.002192 |                      2.1 |             15 | [Esecuzione 1](https://console.apify.com/view/runs/HblUkhgI2svp1LBGs), [Esecuzione 2](https://console.apify.com/view/runs/37yQFzgydzJoWfa39), [Esecuzione 3](https://console.apify.com/view/runs/mtBoKcocaM4BUzZmm) |
| seemuapps/x-followers-following-scraper                |           286 |               $0.003504 |                      3.9 |              9 | [Esecuzione 1](https://console.apify.com/view/runs/1r3je034X2qhFGgLj), [Esecuzione 2](https://console.apify.com/view/runs/dc4ztVP3n2eemgiNQ), [Esecuzione 3](https://console.apify.com/view/runs/gWPiBT00G7D9IJ0Cj) |

Ogni Actor ha letto i follower di NASA, SpaceX & esa il 2026-09-28. Tutte le
esecuzioni hanno usato il livello Bronze. Un profilo utile è unico, ha 30+
giorni, 1+ follower & 1+ post. Il costo è la spesa totale del cliente per
profilo utile. Il nostro include l'uso di Apify che pagano i nostri clienti. Una
riga con 3 esecuzioni le somma. Campi per riga è la mediana dei campi non vuoti,
inclusi quelli annidati. Una lista conta come 1 campo. Apri un'esecuzione per
vedere input, log & dataset.

## Input

La scheda Input elenca ogni opzione. Aggiungi almeno 1 tra `startUrls`,
`twitterHandles`, `userIds`, `listIds` o `communityIds`. Valgono anche i loro
alias documentati. Tutti gli altri campi sono facoltativi.

Prova questi input:

- Aggiungi il nome utente di un concorrente a `twitterHandles` con
  `relation: "followers"`.
- Incolla `https://x.com/<handle>/verified_followers` in Start URLs per i
  profili verificati.
- Incolla l'URL di una lista in Start URLs per controllarne i membri.
- Aggiungi 2 o più nomi utente. Un profilo condiviso compare una volta, sotto il
  primo target. Usa `dedupeMode: "merge"` per tenere 1 riga con ogni target
  corrispondente. Imposta `dedupeAcrossTargets: false` per tenere 1 riga per
  target.

### Input da Console & API

Il modulo della Console ha questi controlli:

- Il campo Start URLs accetta stringhe URL o oggetti `{ "url": "..." }`. Il suo
  editor JSON conserva entrambi i formati API.
- Relation, Output Mode & Dedupe Mode sono elenchi a scelta con opzioni fisse.
- Relations è un elenco a scelta multipla per le esecuzioni con più relazioni.
- I limiti dei risultati accettano numeri interi da 1 in su.
- I filtri numerici sui profili accettano numeri interi da 0 in su.

Usa i campi canonici nelle nuove integrazioni. Gli alias funzionano ancora negli
input JSON, API, SDK, di automazione & dei task. `outputVariant` & `includeRaw`
sono alias di Output Mode. `dedupeAcrossTargets` è un alias di Dedupe Mode. Il
modulo visuale nasconde gli alias che duplicano un controllo canonico. Gli input
JSON esistenti & quelli dei task salvati con alias continuano a funzionare. Gli
input salvati con `dedupeAcrossTargets: false` o `dedupeMode: "none"` tengono 1
riga per target.

### Migra da un altro Actor di follower

Incolla l'input che usi già. X Follower Scraper di Xquik legge i nomi dei campi
usati da altri Actor di follower di X. Li converte nei propri campi. I nomi
canonici restano quelli documentati di default. Un alias non scarta mai un campo
& non cambia mai quanto paghi.

| Campo che usi già                                                                     | Xquik lo legge come      |
| ------------------------------------------------------------------------------------- | ------------------------ |
| `twitterHandles`, `usernames`, `user_names`, `handles`, `userNameList`, `screenNames` | `twitterHandles`         |
| `username`, `handle`, `screenName`, come stringa singola                              | `twitterHandles`         |
| `twitterUserIds`, `user_ids`, `userIdList`                                            | `userIds`                |
| `user_id`, `userId`, come stringa singola                                             | `userIds`                |
| `startUrls`, `urls`, `targets`, `profileUrls`, `accountUrls`                          | `startUrls`              |
| `profileUrl`, come stringa singola                                                    | `startUrls`              |
| `getFollowers`, `getFollowing`                                                        | `relations`              |
| `type` con `followers` o `following`                                                  | `relation`               |
| `maxResults`, `max_results`, `resultsLimit`, `count`                                  | `maxItems`               |
| `scrapeAllResults`                                                                    | nessun limite per target |

Qui 2 nomi hanno un altro significato. In alcuni Actor `maxFollowers` &
`maxFollowing` limitano quante righe restituisce un'esecuzione. In X Follower
Scraper di Xquik filtrano i profili per numero di follower & di following. Usa
`maxItems` per limitare le righe. L'Actor non ha un'unità pagina, quindi
sostituisci `maxPages` con `maxItems`.

### Usa sempre la build più recente

Le esecuzioni dallo Store usano la build `latest` di X Follower Scraper di
Xquik. Nelle chiamate API, ometti l'override della build o passa
`build=latest`. Aggiorna i Task & le integrazioni che fissano una build più
vecchia. Le build fissate non si aggiornano mai da sole.

## Output

Ogni profilo è un oggetto JSON. La modalità compatta restituisce campi pubblici
normalizzati, campi di versione dello schema & metadati di origine, quando
disponibili.

Gli schemi del dataset & del run-report descrivono ogni campo restituito. I
campi primitivi riportano anche esempi per agenti & integrazioni generate.

I valori di esempio qui sotto sono illustrativi. Le tue righe riportano dati
live al momento dell'esecuzione. Una riga compatta ha questo aspetto:

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

La modalità dedupe merge aggiunge i campi di sovrapposizione:

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

Esporta il dataset Apify in JSON, CSV, Excel o HTML.

## Opzioni di esecuzione

Imposta `maxTotalChargeUsd` nell'API di Apify per fissare un tetto di spesa. In
Console lo stesso limite si chiama Max cost per run. Apify passa quel limite a X
Follower Scraper di Xquik come `ACTOR_MAX_TOTAL_CHARGE_USD`. L'Actor si ferma
prima di accettare righe oltre il limite. Lascia vuoto `maxItems` per ottenere
tutti i profili che il tetto di spesa consente. Imposta `maxItems` &
`maxItemsPerTarget` solo se vuoi meno profili di quanti ne consente il budget.

- Combina filtri sui profili come `minFollowers`, `verifiedType` &
  `bioContains` per restringere il dataset fatturato.
- Di default, le esecuzioni tengono solo i profili unici tra i target. Imposta
  `dedupeAcrossTargets: false` per tenere 1 riga per target.
- Imposta `dedupeMode: "merge"` per avere 1 riga per profilo con ogni target di
  origine corrispondente.
- Imposta `outputMode: "full"` per i campi facoltativi del profilo, quando
  disponibili. Includono ID dei post fissati, entità & metadati del profilo.
- Imposta `outputMode: "raw"` o `includeRaw: true` per includere un oggetto
  `raw` ripulito accanto ai campi normalizzati.
- Pianifica esecuzioni ripetute & archivia ogni dataset per confrontare gli ID
  dei profili. I monitor di Xquik emettono eventi supportati su post & profili,
  non le variazioni degli elenchi di follower.

## Esecuzioni vuote, parziali & interrotte

X Follower Scraper di Xquik spiega le esecuzioni vuote, parziali & interrotte
con una diagnostica gratuita. Un'uscita riuscita dell'Actor conferma la
consegna, non l'estrazione completa.

Un'esecuzione interrotta scrive una diagnostica `partial` gratuita. I risultati
già consegnati restano nel dataset. Leggi `availableResults`, `failedTargets`,
`retryable` & `nextAction` prima di riprovare.

Lo stato dell'esecuzione dice perché si è fermata. Conta anche i risultati
addebitati, i duplicati saltati & i target letti. Lo stato nomina ogni causa di
un arresto anticipato. `stopCauses` elenca ogni causa con i propri `message`,
`retryable` & `nextAction`. Le cause sono `target_not_found`,
`target_protected`, `target_failed` & `deadline_reached`. Un account mancante
entra nell'elenco solo se un'altra causa ha fermato l'esecuzione. L'esecuzione è
`retryable` quando lo è almeno una causa.

X mantiene privati gli elenchi di follower & following di un account protetto.
Quel target riceve `target_protected` in 1 diagnostica gratuita & l'esecuzione
legge gli altri target.

`failedTargets` conta i target che si sono fermati dopo un errore. Queste
esecuzioni usano `completionReason: "partial_failure"`. I loro profili
consegnati restano righe di dati fatturabili.

Il timeout predefinito di Apify è `0`, quindi le esecuzioni non hanno limite di
tempo. L'esecuzione continua finché raggiunge il limite o esaurisce i profili.
Puoi comunque impostare un timeout finito. In quel caso
`completionReason: "deadline_reached"` indica che il limite è vicino.
L'esecuzione salva profili & report, poi termina in modo pulito prima del
limite. I profili consegnati si pagano una volta.

Le esecuzioni con un problema scrivono sempre `run-report`, incluse le uscite
senza input o con input non valido. `run-report` ha anche un campo `version`
con la versione esatta del codice sorgente pubblicato dell'Actor.

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
- [Followers API](https://docs.xquik.com/api-reference/x/followers): ottieni i
  follower disponibili di un account
- [Following API](https://docs.xquik.com/api-reference/x/following): scopri chi
  segue un utente
- [List Members API](https://docs.xquik.com/api-reference/x/list-members):
  esporta i membri di una lista pubblica di X
- [Server MCP](https://docs.xquik.com/mcp/overview): trova & avvia le operazioni
  JSON o di testo supportate
- [Webhook](https://docs.xquik.com/webhooks/overview): ricevi gli eventi
  supportati su post & profili

## FAQ

### Serve una chiave API X?

No. Non ti servono chiave API X, login o credenziali.

### Cosa limita un'esecuzione?

Il tuo limite di elementi & il tuo limite di spesa su Apify fermano
l'esecuzione. Restano validi i limiti dell'account & della piattaforma Apify.

### Quanto è veloce?

La velocità di X Follower Scraper di Xquik dipende da dimensione del target,
filtri & disponibilità di X. Le sue 2 esecuzioni del [benchmark](#benchmark)
hanno raggiunto 38,4 & 68,5 profili utili al secondo.

### Perché la mia esecuzione restituisce meno righe di `maxItems`?

Filtri come `minFollowers`, `verifiedOnly` & `bioContains` agiscono prima della
scrittura. Allentali per ottenere più risultati. X Follower Scraper di Xquik
rimuove anche i duplicati tra i target.

### Quanti follower posso estrarre da un singolo account?

Tutti quelli che X mostra per quell'account. L'esecuzione continua fino al tuo
limite, al tuo limite di spesa o alla fine dell'elenco. `maxItemsPerTarget`
limita solo ogni singolo target.

### L'Actor riprova dopo errori temporanei?

Sì. Si riprende da solo dagli errori temporanei di X. Dopo un errore grave,
l'esecuzione conserva i risultati parziali.

### Cosa succede vicino al limite di tempo di Apify?

X Follower Scraper di Xquik non aggiunge una scadenza propria più breve. Prima
del tuo limite salva i profili, scrive il report & termina. Le righe che non
arrivano nel dataset non costano nulla.

### Posso riprendere da dove avevo interrotto?

Non ancora. Una nuova esecuzione sullo stesso target riparte dall'inizio.

### Posso usare l'API di Apify per avviarlo?

Sì. Consulta la [scheda API](https://apify.com/xquik/x-follower-scraper/api) per
esempi in Python, JavaScript & cURL.

### Posso pianificare estrazioni ricorrenti?

Sì. Usa la [pianificazione](https://docs.apify.com/platform/schedules) integrata
di Apify per avviare questo Actor con un cron. Confronta i dataset archiviati
per trovare le variazioni dei follower.

### È legale estrarre i dati di X?

X Follower Scraper di Xquik raccoglie campi pubblici dei profili di X. I
risultati possono contenere dati personali, incluse le posizioni indicate dagli
utenti. Verifica di avere uno scopo lecito & rispetta le norme sulla privacy
applicabili. Nel dubbio, chiedi a un legale qualificato.

### Dove trovo assistenza?

Apri una issue nella scheda Issues della pagina dell'Actor. Puoi anche scrivere
a support@xquik.com con l'ID dell'esecuzione.

### Dove trovo la documentazione API?

Leggi la [documentazione API](https://docs.xquik.com/introduction).
