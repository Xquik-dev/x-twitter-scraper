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
i dati X più completi. X Profile Scraper di Xquik raccoglie profili, post,
risposte, media & follower di qualsiasi nome utente. La maggior parte degli
altri Actor Apify fa pagare prima di filtrare o deduplicare. Xquik fa pagare
solo i risultati consegnati, unici e conformi ai filtri.

Consulta account Twitter in blocco & leggi i profili senza un account X. Estrai
profili, post, risposte, media & follower di X da nomi utente, ID o URL. Paghi
**$0.00015 per riga consegnata**. Apify fattura a parte l'uso della piattaforma.
Non ti servono una chiave API X né il login.

> Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.
> "Twitter" e "X" sono marchi di X Corp.

## Cosa fa X Profile Scraper?

X Profile Scraper di Xquik restituisce profili pubblici di X (Twitter) da nomi
utente, ID utente numerici o URL di profilo. Ogni profilo può aggiungere i suoi
post, risposte, media, post In evidenza, follower, following & follower
verificati. Traduce anche le bio & verifica chi è in diretta ora.

### Funzionalità principali

- Leggi molti profili in 1 esecuzione da nomi utente, ID o URL.
- Aggiungi post, risposte, media, post In evidenza, follower, following o
  follower verificati come righe separate.
- Traduci ogni bio con `translateBioTo`, indicando un codice lingua.
- Verifica se ogni profilo è in diretta ora con `checkLiveNow`.
- Filtra i post per data, lingua, media & interazioni.
- Filtra i profili per dimensione del pubblico, età dell'account & verifica.
- I filtri & la rimozione dei duplicati avvengono prima della fatturazione.
- Le esecuzioni conservano le righe consegnate & i progressi quando Apify le
  riavvia.

### Casi d'uso

- Arricchisci liste di lead con bio, siti web, posizioni & dimensione del
  pubblico.
- Confronta gli account dei concorrenti per follower, post & verifica.
- Valuta i creator per pubblico, età dell'account & interazioni.
- Archivia post, media & post In evidenza di un account.
- Mappa la rete di un account attraverso i suoi follower & following.
- Tieni d'occhio creator & brand per non perdere le loro dirette.
- Leggi nella tua lingua le bio di altri mercati.

### Quali dati può estrarre X Profile Scraper?

Le righe di profilo usano `resultType: "profile"`. Questi sono i campi
principali.

| Campo              | Descrizione                                        |
| ------------------ | -------------------------------------------------- |
| `id`               | ID utente numerico                                 |
| `username`         | Nome utente senza `@`                              |
| `name`             | Nome visualizzato                                  |
| `description`      | Testo della bio                                    |
| `url`              | Sito web nelle righe di profilo                    |
| `location`         | Posizione indicata dall'utente                     |
| `followers`        | Numero di follower                                 |
| `following`        | Numero di account seguiti                          |
| `statusesCount`    | Numero di post                                     |
| `mediaCount`       | Numero di post con media                           |
| `favouritesCount`  | Mi piace messi dall'account                        |
| `listedCount`      | Liste pubbliche che includono l'account            |
| `createdAt`        | Data di creazione dell'account                     |
| `verified`         | Se X segnala la verifica                           |
| `isBlueVerified`   | Se l'account ha la verifica X Blue                 |
| `verifiedType`     | Categoria di verifica, come `Government`           |
| `profilePicture`   | URL dell'immagine del profilo                      |
| `coverPicture`     | URL dell'immagine di intestazione                  |
| `pinnedTweetIds`   | ID dei post fissati                                |
| `professional`     | Categoria & tipo professionale                     |
| `accountBasedIn`   | Etichetta di paese o regione stimata da X          |
| `connectedVia`     | Come l'account si è collegato a X la prima volta   |
| `usernameChanges`  | Numero di cambi del nome utente & data dell'ultimo |
| `birthdate`        | Parti della data di nascita rese pubbliche         |
| `subscribersCount` | Numero di abbonati, quando X lo invia              |
| `tipJar`           | Link pubblici per le mance                         |
| `protected`        | Se l'account protegge i suoi post                  |
| `unavailable`      | Se l'account non è disponibile                     |
| `sourceTarget`     | Il nome utente, l'ID o l'URL che hai inserito      |

Lo schema del dataset documenta ogni altro campo, come `identityVerification`,
`isAutomated`, `automatedBy`, `withheldInCountries` & `verificationReason`.

Le righe opzionali mantengono il formato delle risposte dell'API REST di Xquik.

| `resultType`              | Attivato da                | Una riga per        |
| ------------------------- | -------------------------- | ------------------- |
| `profileTweet`            | `includeTweets`            | Post                |
| `profileReply`            | `includeReplies`           | Post o risposta     |
| `profileMedia`            | `includeMedia`             | Post con media      |
| `profileHighlight`        | `includeHighlights`        | Post in evidenza    |
| `profileFollower`         | `includeFollowers`         | Follower            |
| `profileFollowing`        | `includeFollowing`         | Account seguito     |
| `profileVerifiedFollower` | `includeVerifiedFollowers` | Follower verificato |
| `profileBioTranslation`   | `translateBioTo`           | Bio tradotta        |
| `profileLive`             | `checkLiveNow`             | Profilo controllato |

Le righe non includono mai stati visibili solo a chi legge, ad esempio se segui
o blocchi un account.

## Come uso X Profile Scraper per estrarre i dati dei profili?

Segui questi passaggi in Apify Console.

1. Apri un [esempio di task](#esempi-di-task) o la scheda Input.
2. Aggiungi i nomi utente in `twitterHandles`, gli URL in `startUrls` o gli ID
   in `userIds`.
3. Attiva le risorse che ti servono, come `includeTweets`.
4. Imposta `maxItems` & gli eventuali filtri, poi fai clic su Start.
5. Esporta il dataset in JSON, CSV, Excel o HTML.

Ogni ricetta qui sotto è un input completo.

### Estrai molti profili

```json
{ "twitterHandles": ["nasa", "OpenAI", "apify"], "maxItems": 100 }
```

Ogni nome utente restituisce 1 riga di profilo. I nomi utente funzionano con o
senza `@`.

### Incolla URL o ID di profili

`startUrls` accetta ogni URL come stringa semplice o come oggetto
`{ "url": "..." }`. `userIds` accetta ID utente numerici di X.

```json
{
  "startUrls": ["https://x.com/nasa", { "url": "https://x.com/OpenAI" }],
  "userIds": ["11348282"],
  "maxItems": 100
}
```

Un nome utente indicato 2 volte viene letto 1 volta sola.

### Aggiungi post, risposte & media

```json
{
  "twitterHandles": ["nasa"],
  "includeTweets": true,
  "includeMedia": true,
  "sinceDate": "2026-01-01",
  "maxItems": 500
}
```

`includeTweets` segue la scheda Post del profilo. `includeReplies` segue la sua
scheda Risposte. `includeMedia` segue la sua scheda Media. `includeHighlights`
aggiunge i post della sua scheda In evidenza, nell'ordine di X. Un profilo senza
post in evidenza non aggiunge righe.

### Tieni solo i post popolari

```json
{
  "twitterHandles": ["nasa"],
  "includeTweets": true,
  "minLikes": 1000,
  "mediaType": "videos",
  "maxItems": 200
}
```

I filtri sui post valgono per le righe di post opzionali. Le righe filtrate non
arrivano mai nel dataset, quindi non le paghi mai.

### Esporta follower & following

```json
{
  "twitterHandles": ["apify"],
  "includeFollowers": true,
  "minFollowers": 1000,
  "verifiedOnly": true,
  "maxItems": 1000
}
```

`includeFollowers`, `includeFollowing` & `includeVerifiedFollowers` aggiungono
1 riga di profilo per account. I filtri sui profili valgono per queste righe &
per i profili principali.

### Traduci le bio

```json
{ "twitterHandles": ["nasa", "SpaceX"], "translateBioTo": "es" }
```

Ogni traduzione è 1 riga `profileBioTranslation` con `text`, `language` &
`sourceLanguage`. Un profilo senza bio non aggiunge righe né addebiti.

### Controlla chi è in diretta ora

```json
{ "twitterHandles": ["nasa", "SpaceX"], "checkLiveNow": true }
```

Ogni controllo è 1 riga `profileLive` con `live`, `userId`, `userName` &
`broadcast`. `broadcast` contiene l'ultima trasmissione del profilo, in diretta
o conclusa, oppure null. Un profilo mancante non aggiunge righe.

## Esempi di task

Scegli tra 50 task pubblici. Ognuno ha un input limitato & una vista del dataset
corrispondente. Modifica un task prima di avviarlo.

- [Ottieni la scheda profilo di un account X](https://apify.com/xquik/x-profile-scraper/examples/get-an-x-profile-card)
- [Confronta i profili di brand concorrenti](https://apify.com/xquik/x-profile-scraper/examples/compare-competitor-brand-profiles)
- [Converti ID utente numerici in profili](https://apify.com/xquik/x-profile-scraper/examples/resolve-numeric-user-ids-to-profiles)
- [Raccogli i post recenti di un account](https://apify.com/xquik/x-profile-scraper/examples/collect-recent-posts-from-an-account)
- [Trova i post di un account con più Mi piace](https://apify.com/xquik/x-profile-scraper/examples/find-an-accounts-most-liked-posts)
- [Raccogli i video pubblicati da un account](https://apify.com/xquik/x-profile-scraper/examples/collect-videos-from-an-account)
- [Archivia 1 anno solare di un account](https://apify.com/xquik/x-profile-scraper/examples/archive-one-year-of-posts)
- [Esporta i follower di un account](https://apify.com/xquik/x-profile-scraper/examples/export-the-followers-of-an-account)
- [Esporta i follower verificati di un'azienda](https://apify.com/xquik/x-profile-scraper/examples/export-verified-followers)
- [Trova i follower con 10.000 o più follower](https://apify.com/xquik/x-profile-scraper/examples/find-influential-followers)
- [Misura la sovrapposizione del pubblico di 2 strumenti di design](https://apify.com/xquik/x-profile-scraper/examples/measure-audience-overlap)
- [Esegui un audit completo di un account](https://apify.com/xquik/x-profile-scraper/examples/run-a-full-account-audit)

## Quanto costa estrarre i profili di X?

X Profile Scraper di Xquik costa $0.00015 per riga consegnata su ogni piano
Apify. Apify fattura a parte il tuo uso della piattaforma. Xquik applica un
addebito per ogni riga di dati consegnata. La diagnostica nell'output
`diagnostics` è gratuita.

- Non ti serve un abbonamento Xquik.
- Non paghi costi separati di avvio, per profilo o per query.
- I filtri & la deduplicazione avvengono prima della fatturazione. Non paghi mai
  righe filtrate o duplicate.
- Un profilo senza bio non aggiunge addebiti di traduzione.
- Un profilo mancante non aggiunge addebiti per il controllo della diretta.
- Le impostazioni di Apify sull'addebito massimo totale limitano le righe
  consegnate.

Un'esecuzione che incontra un problema, o un'esecuzione grande, scrive anche un
record `run-report`. Un'esecuzione piccola senza problemi lo salta & risparmia
uso di Apify. Attiva `alwaysSaveRunRecords` per scriverlo a ogni esecuzione.

Per limitare quanto può spendere un'esecuzione, consulta
[Opzioni di esecuzione](#opzioni-di-esecuzione).

## Esecuzioni vuote, parziali & interrotte

X Profile Scraper di Xquik spiega gratis le esecuzioni vuote, parziali &
interrotte. Lo stato dell'esecuzione dice perché si è fermata. Conta anche i
risultati addebitati & i target letti.

### Risultati vuoti

Lo stato di un'esecuzione vuota ti dice di controllare target & filtri. Le righe
filtrate non consumano mai il tuo limite di risultati. Un'esecuzione che legge
ogni target & non ottiene righe non scrive alcun record. Il suo stato dice
perché & cosa cambiare.

Dal 2024 X mostra i post a cui un account ha messo Mi piace solo a
quell'account. `includeLikes` non restituisce righe `profileLike` per gli altri
account.

### Esecuzioni parziali

Un'estrazione interrotta scrive una diagnostica `partial` gratuita. Le righe
consegnate restano nel dataset. Leggi `availableResults`, `failedTargets`,
`retryable` & `nextAction` prima di riprovare. Un'uscita riuscita dell'Actor
conferma la consegna, non l'estrazione completa.

### Cause di arresto

Lo stato dell'esecuzione nomina ogni causa di un arresto anticipato.
`stopCauses` elenca ogni causa con i propri `message`, `retryable` &
`nextAction`. Le cause sono `target_not_found`, `target_suspended`,
`target_failed`, `pagination_safety_limit` & `deadline_reached`.
`target_suspended` nomina gli account che X ha sospeso. Un target mancante o
sospeso entra nell'elenco solo se un'altra causa ha fermato l'esecuzione.
L'esecuzione è `retryable` quando lo è almeno una causa.

## Input

La scheda Input elenca ogni opzione. Indica almeno 1 tra `twitterHandles`,
`startUrls` o `userIds`. Tutti gli altri campi sono opzionali.

| Campo                          | Cosa fa                                                         |
| ------------------------------ | --------------------------------------------------------------- |
| `twitterHandles`               | Nomi utente, con o senza `@`                                    |
| `startUrls`                    | URL di profili su x.com o twitter.com                           |
| `userIds`                      | ID utente numerici di X                                         |
| `maxItems`                     | Limite di righe consegnate in tutta l'esecuzione                |
| `maxItemsPerTarget`            | Limite di righe per ogni profilo o risorsa                      |
| `includeTweets`                | Aggiunge la scheda Post                                         |
| `includeReplies`               | Aggiunge la scheda Risposte                                     |
| `includeMedia`                 | Aggiunge la scheda Media                                        |
| `includeHighlights`            | Aggiunge la scheda In evidenza                                  |
| `includeLikes`                 | Aggiunge i post con Mi piace, che X nasconde agli altri account |
| `includeFollowers`             | Aggiunge i follower                                             |
| `includeFollowing`             | Aggiunge gli account seguiti                                    |
| `includeVerifiedFollowers`     | Aggiunge i follower verificati                                  |
| `translateBioTo`               | Traduce ogni bio in una lingua, con un codice come `es`         |
| `checkLiveNow`                 | Verifica se ogni profilo è in diretta ora                       |
| `sinceDate`, `untilDate`       | Tiene i post in un intervallo di date                           |
| `language`                     | Tiene i post di 1 lingua, indicata dal codice                   |
| `mediaType`                    | Tiene i post con immagini, video, GIF, link o senza media       |
| `minViews`, `minLikes`         | Tiene i post sopra un numero di visualizzazioni o Mi piace      |
| `minReplies`, `minRetweets`    | Tiene i post sopra un numero di risposte o repost               |
| `nativeRetweets`               | Tiene solo i repost nativi                                      |
| `verifiedOnly`                 | Tiene autori o profili verificati                               |
| `blueVerifiedOnly`             | Tiene autori o profili che X segna come verificati Blue         |
| `minFollowers`, `maxFollowers` | Tiene i profili in una fascia di pubblico                       |
| `minAccountAgeDays`            | Tiene i profili con almeno questa età in giorni                 |
| `hasWebsite`, `hasLocation` | Tiene i profili che indicano un sito web o una località |
| `bioContains` | Tiene i profili la cui bio contiene 1 di queste parole |
| `locationContains` | Tiene i profili la cui località contiene questo testo |
| `dedupeAcrossTargets`          | Elimina le righe ripetute tra profili prima della fatturazione  |

### Migra da un altro Actor di profili

Incolla l'input che usi già. X Profile Scraper di Xquik legge questi nomi di
campo di altri Actor di profili. Ogni voce elenca i loro campi, poi il campo a
cui corrispondono.

- `profiles`, `userNames`, `usernames`, `handles`, `screenNames` corrispondono a
  `twitterHandles`.
- `urls`, `profileUrls` corrispondono a `startUrls`.
- `maxProfiles`, `maxResults` corrispondono a `maxItems`.
- `shouldScrapeFollowers`, `shouldScrapeFollowings` corrispondono a
  `includeFollowers`, `includeFollowing`.
- `requireEmail` corrisponde a `hasEmail`.
- `requireWebsite` corrisponde a `hasWebsite`. Tiene un profilo con qualsiasi
  link nel campo del sito web, & lo stato dell'esecuzione lo dice.
- `filterByBlueVerified` corrisponde a `blueVerifiedOnly`. `false` ferma
  l'esecuzione prima di leggere o addebitare qualcosa.
- `bioKeywords` corrisponde a `bioContains`. Basta che corrisponda 1 dei
  termini.
- `locationKeywords` con 1 valore corrisponde a `locationContains`. Con più
  valori l'esecuzione si ferma prima di leggere o addebitare qualcosa.
- `emailDomains` come elenco corrisponde a `emailDomains`.
- `outputEmail`, `resolveShortLinks` non richiedono alcun campo. Ogni riga
  contiene le sue email & i link completi di X.
- `findEmails`, `extractEmails` non richiedono alcun campo. Le righe contengono
  le email che un profilo pubblica su X. Lo stato dell'esecuzione dice che
  l'Actor non legge nessun sito collegato.
- `validateEmails` non richiede alcun campo. Lo stato dell'esecuzione dice che
  le email arrivano così come sono pubblicate, perché l'Actor non verifica
  nessuna casella.

`category` impostato su `user_info` non cambia nulla. Una categoria che è
compito di un altro Actor, come `tweets` o `followers`, ferma l'esecuzione. Non
legge & non addebita nulla. Il messaggio nomina l'Actor da usare. Quando imposti
un alias & il suo campo canonico, vince il valore canonico. Il log
dell'esecuzione nomina l'alias scartato.

### Scegli gli input giusti

- Per la sola scheda profilo, indica i nomi utente & lascia disattivata ogni
  opzione `include`.
- Per archiviare un account, attiva `includeTweets`, `includeMedia` &
  `includeHighlights`, poi imposta `sinceDate`.
- Per i contenuti migliori, aggiungi `minLikes` o `minViews` a `includeTweets`.
- Per le liste di lead, attiva `includeFollowers` con `minFollowers` &
  `minAccountAgeDays`.
- Per la sovrapposizione del pubblico, indica 2 nomi utente, attiva
  `includeFollowers` & imposta `dedupeAcrossTargets: false`. Così un follower in
  comune compare sotto ogni nome utente.

## Output

Ogni riga è un oggetto JSON. Lo schema del dataset dà a ogni campo un titolo &
una descrizione, così gli agenti AI leggono le righe senza tirare a indovinare.

Gli esempi usano valori fittizi. I risultati contengono dati live. Una riga di
profilo ha questo aspetto.

```json
{
  "resultType": "profile",
  "sourceTarget": "sample_user",
  "id": "1234567890",
  "username": "sample_user",
  "name": "Sample User",
  "description": "Building tools for researchers.",
  "url": "https://example.com",
  "location": "Lisbon",
  "followers": 1200,
  "following": 310,
  "statusesCount": 4200,
  "verified": false,
  "createdAt": "Tue Mar 21 20:50:14 +0000 2017",
  "accountBasedInUnavailable": true
}
```

X deduce `accountBasedIn` dagli IP aggregati di accesso all'account. L'etichetta
non indica nazionalità, residenza, identità, iscrizione, post o posizione
esatta. `observedAt` registra il momento del recupero. `accountBasedIn` è null
quando X non mostra l'etichetta. Quando X la trattiene, la riga riporta invece
`accountBasedInUnavailable: true`.

Esporta il dataset in JSON, CSV, Excel o HTML.

## Opzioni di esecuzione

- Imposta l'addebito massimo totale di Apify per limitare il costo
  dell'esecuzione. Lascia `maxItems` alto per ottenere tutte le righe che il
  budget consente.
- Imposta `maxTotalChargeUsd` nell'API di Apify, o Max cost per run in Console.
- Metti tutti i tuoi profili in 1 esecuzione. Ogni esecuzione paga ad Apify lo
  stesso costo di avvio.
- `maxConcurrency` imposta quanti profili vengono elaborati in contemporanea. Il
  valore predefinito è l'impostazione sicura più veloce.
- Usa i monitor degli account di Xquik per controlli ogni secondo & webhook
  firmati. I monitor attivi controllano ogni secondo.

Seleziona `latest` per ogni esecuzione per ricevere ogni correzione pubblicata.
I task salvati & le pianificazioni mantengono la propria scelta di build, quindi
lasciala su `latest`.

## Actor Xquik correlati

Ogni Actor Xquik usa lo stesso motore di estrazione, fattura dopo i filtri &
offre la stessa diagnostica. Scegli quello adatto ai dati che ti servono.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper) estrae post da
  ricerche, timeline dei profili, liste & ID dei post con oltre 50 filtri &
  export piatti. Usalo quando ti servono dati sui post senza analisi. Da
  $0.00015 per riga.
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

### Serve una chiave API X o il login?

No. X Profile Scraper di Xquik non richiede chiave API X, login o credenziali.

### Quanti profili posso estrarre in 1 esecuzione?

Tutti quelli che elenchi. `maxItems` & il tuo limite di spesa su Apify limitano
le righe.

### Posso esportare i profili di X in CSV o Excel?

Sì. Esporta il dataset in JSON, CSV, Excel o HTML dalla scheda Storage.

### Posso estrarre i follower di un utente Twitter?

Sì. Attiva `includeFollowers`, `includeFollowing` o
`includeVerifiedFollowers`. Ogni account è 1 riga.

### Ottiene il sito web & la posizione di un profilo?

Sì. `url` contiene il sito web & `location` contiene il testo scritto
dall'utente.
Imposta `hasWebsite` & `hasLocation` per tenere solo i profili che li indicano.

### Posso estrarre gli account protetti?

Ottieni la riga di profilo pubblica, con `protected: true`. X mostra i post & i
follower di un account protetto solo ai suoi follower approvati.

### Come faccio a sapere se un account è in diretta ora?

Imposta `checkLiveNow: true`. Ogni profilo riceve una riga `profileLive` con
`live` & la sua ultima trasmissione.

### Può tradurre le bio?

Sì. Imposta `translateBioTo` su un codice lingua, come `es` o `pt-br`. Un
profilo senza bio non aggiunge righe.

### Perché includeLikes non restituisce nulla?

Dal 2024 X mostra i post a cui un account ha messo Mi piace solo a
quell'account. Gli altri account, compreso questo Actor, non possono leggerli.

### È legale estrarre i profili di X?

X Profile Scraper di Xquik raccoglie campi pubblici di X. I risultati possono
contenere dati personali. Verifica di avere uno scopo lecito & rispetta le
norme sulla privacy applicabili. Nel dubbio, chiedi a un legale qualificato.

### Perché la mia esecuzione non ha restituito risultati?

Leggi prima lo stato dell'esecuzione. Lo stato di un'esecuzione vuota ti dice di
controllare target & filtri. L'output gratuito `diagnostics` compare quando
qualcosa richiede attenzione. Il suo `stopCauses` assegna a ogni causa un
`nextAction` da seguire. L'esecuzione elenca ogni input che non riesce a leggere
& spiega come correggerlo.

### Posso usare l'API, le pianificazioni & le integrazioni?

Sì. Scegli tra 50 task pubblici o l'API REST di Xquik. La
[scheda API](https://apify.com/xquik/x-profile-scraper/api) ha esempi in Python,
JavaScript & cURL. Le
[pianificazioni](https://docs.apify.com/platform/schedules) di Apify avviano X
Profile Scraper di Xquik con un cron. Gli agenti usano
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Usa `latest`, a
meno che non ti serva una build precedente.

### Posso avere una soluzione personalizzata?

Sì. Visita [xquik.com](https://xquik.com) o leggi la
[documentazione API](https://docs.xquik.com/introduction). Copre dashboard, API,
server MCP & webhook.

### Dove trovo assistenza?

Apri una issue nella pagina dell'Actor o scrivi a <support@xquik.com> con l'ID
dell'esecuzione. La diagnostica gratuita nel key-value store spiega le
esecuzioni che richiedono attenzione. Un'esecuzione che non ottiene righe ne
indica il motivo nel suo stato.
