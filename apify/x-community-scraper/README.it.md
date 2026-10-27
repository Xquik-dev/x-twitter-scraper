[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · **Italiano**

[![Framer collega Xquik MCP agli agenti di coding](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Guarda come Framer usa gli scraper Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
con Claude Code, Codex, Cursor & altro, da 6:07.

Xquik è il servizio di scraping X (Twitter) più veloce & economico al mondo, con
i dati X più completi. X Community Scraper di Xquik raccoglie informazioni,
post, media, ricerche, membri & moderatori delle community, & trova le community
per parola chiave o argomento. La maggior parte degli altri Actor Apify fa
pagare prima di filtrare o deduplicare. Xquik fa pagare solo i risultati
consegnati, unici e conformi ai filtri.

Raccogli informazioni, post, media, risultati per parola chiave, membri &
moderatori delle community di Twitter da URL o ID delle community. Trova le
community per parola chiave o argomento, oppure elenca quelle che X suggerisce.
Paghi **$0.00015 per riga consegnata** & Apify fattura a parte l'uso della
piattaforma. Non ti servono una chiave API X né il login.

> Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.
> "Twitter" e "X" sono marchi di X Corp.

## Cosa fa X Community Scraper?

X Community Scraper di Xquik legge le community pubbliche di X (Twitter) dai
loro URL o ID. Restituisce informazioni, post, media, risultati per parola
chiave, membri & moderatori di ogni community. Trova anche le community per
parola chiave o argomento, & elenca quelle che X suggerisce.

### Funzionalità principali

- Leggi molte community & risorse in 1 esecuzione.
- Ottieni le informazioni della community con regole, domanda di adesione,
  creatore, amministratore & argomento.
- Raccogli i post dal più recente, oppure i post Top che X classifica più in
  alto.
- Raccogli la scheda Media, oppure cerca per parola chiave nei post di una
  community.
- Esporta membri & moderatori, oppure trova membri per nome.
- Trova community per parola chiave o argomento, con i loro record completi.
- Filtra i post per data, lingua, media & engagement.
- Filtra i membri per dimensione del pubblico, età dell'account & verifica.
- Filtri & rimozione dei duplicati agiscono prima della fatturazione.
- Le esecuzioni conservano righe consegnate & progressi quando Apify le riavvia.

### Casi d'uso

- Crea elenchi di lead dai membri di una community di nicchia.
- Segui feedback sul prodotto & richieste di funzionalità in una community di
  utenti.
- Trova lanci, post di assunzioni & notizie sui finanziamenti tra i fondatori.
- Confronta le community per dimensione, argomento & attività.
- Leggi le regole di una community prima di pubblicarci.
- Trova i moderatori & i membri più seguiti di una community.
- Raccogli post con immagini o video per la ricerca creativa.

### Quali dati può estrarre X Community Scraper?

Le righe delle community usano `resultType: "community"`. Questi sono i campi
principali.

| Campo             | Descrizione                                                     |
| ----------------- | --------------------------------------------------------------- |
| `id`              | ID della community                                              |
| `name`            | Nome della community                                            |
| `description`     | Descrizione della community                                     |
| `url`             | URL della community                                             |
| `member_count`    | Numero di membri                                                |
| `moderator_count` | Numero di moderatori                                            |
| `rules`           | Regole della community                                          |
| `question`        | La domanda che la community pone a chi si unisce                |
| `primary_topic`   | L'argomento sotto cui X classifica la community                 |
| `searchTags`      | I tag con cui X trova la community                              |
| `creator`         | Il profilo pubblico del creatore                                |
| `admin`           | Il profilo pubblico dell'amministratore                         |
| `membersFacepile` | I membri che X mostra in anteprima sulla pagina della community |
| `is_nsfw`         | Se la community è contrassegnata come sensibile                 |
| `banner`          | URL, dimensioni & colori principali del banner                  |
| `sourceTarget`    | L'URL, l'ID, la parola chiave o l'argomento che hai inserito    |

Ogni risorsa aggiunge righe del proprio tipo.

| `resultType`         | Risorsa o input                  | 1 riga per            |
| -------------------- | -------------------------------- | --------------------- |
| `community`          | `info`, parole chiave, argomenti | Community             |
| `communityTweet`     | `tweets`, `search`               | Post                  |
| `communityMedia`     | `media`                          | Post con foto o video |
| `communityMember`    | `members`, `memberNames`         | Membro                |
| `communityModerator` | `moderators`                     | Moderatore            |
| `communityTopic`     | `listTopics`                     | Argomento             |

Le righe dei post contengono `text`, `createdAt`, `likeCount`, `replyCount`,
`retweetCount`, `viewCount`, `media` & il profilo `author`. Le righe di membri &
moderatori contengono i campi del profilo, come `username`, `followers`,
`verified` & `communityRole`. Contengono anche `email` & `contactInfo`, cioè le
email, i numeri di telefono & i link che ogni profilo pubblica.

## Come uso X Community Scraper per estrarre i dati delle community?

Non usi ancora Apify?
[Crea prima un account gratuito](https://console.apify.com/sign-up?fpr=xquik).
Il piano gratuito non richiede carta di credito & offre $5 da spendere ogni
mese. A $0.00015 per riga, $5 coprono fino a 33.000 righe, senza contare l'uso
della piattaforma. Poi torna qui & premi Try for free.

Segui questi passaggi in Apify Console.

1. Apri un [esempio di task](#esempi-di-task) o la scheda Input.
2. Incolla gli URL delle community in `startUrls` o gli ID in `communityIds`.
3. Scegli `resources` & aggiungi filtri, come `sinceDate` o `minLikes`.
4. Imposta `maxItems`, poi fai clic su Start.
5. Esporta il dataset in JSON, CSV, Excel o HTML.

Ogni ricetta qui sotto è un input completo.

### Ottieni le informazioni della community & i post recenti

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["info", "tweets"],
  "maxItems": 200
}
```

`startUrls` accetta ogni URL come stringa semplice o come oggetto
`{ "url": "..." }`.

```json
{
  "startUrls": [
    "https://x.com/i/communities/1493446837214187523",
    { "url": "https://x.com/i/communities/1493446837214187523" }
  ]
}
```

### Raccogli i post Top

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["tweets"],
  "postsOrder": "Top",
  "minLikes": 50,
  "maxItems": 100
}
```

Imposta `postsOrder` su `Top` per i post che X classifica più in alto. Aggiungi
`"media"` a `resources` per la scheda Media.

### Cerca nei post di una community

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["search"],
  "query": "pricing",
  "queryType": "Latest",
  "maxItems": 100
}
```

### Esporta membri & moderatori

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["members", "moderators"],
  "minFollowers": 1000,
  "maxItems": 1000
}
```

I filtri sui membri si applicano alle righe di membri & moderatori. Le righe
filtrate non arrivano mai nel dataset, quindi non le paghi mai.

### Trova membri per nome

```json
{
  "communityIds": ["1493446837214187523"],
  "memberNames": ["marckohlbrugge"],
  "maxItems": 100
}
```

X controlla fino a 10 account corrispondenti per nome, come fa la ricerca dei
membri di X. Ogni membro trovato è 1 riga `communityMember` con il suo
`communityRole`. Un'esecuzione con `memberNames` non legge altre risorse, a meno
che `resources` non le indichi.

### Trova community per parola chiave o argomento

```json
{
  "searchTerms": ["artificial intelligence"],
  "topics": ["Technology"],
  "maxItems": 100
}
```

Ogni community trovata riporta le sue regole & i profili di creatore,
amministratore & membri. Imposta `includeDetails` su `false` per un'esecuzione
più veloce con il record breve. Attiva `includeSuggested` per le community che X
suggerisce, che possono cambiare a ogni esecuzione, oppure `listTopics` per ogni
argomento & i suoi sottoargomenti.

## Esempi di task

Scegli tra 50 task pubblici. Ognuno ha un input limitato & una vista del dataset
adatta. Modifica un task prima di avviarlo.

- [Ottieni una panoramica di una community di X](https://apify.com/xquik/x-community-scraper/examples/get-an-x-community-overview)
- [Ottieni i dettagli di una community di X con i post recenti](https://apify.com/xquik/x-community-scraper/examples/get-community-details-with-recent-posts)
- [Trova i migliori post sulla tecnologia in una community di X](https://apify.com/xquik/x-community-scraper/examples/find-top-technology-posts-in-a-community)
- [Esporta i membri di una community di X](https://apify.com/xquik/x-community-scraper/examples/export-x-community-members)
- [Esporta i membri verificati di una community di X](https://apify.com/xquik/x-community-scraper/examples/export-verified-community-members)
- [Elenca i moderatori di una community di X](https://apify.com/xquik/x-community-scraper/examples/list-x-community-moderators)
- [Confronta le community di sviluppatori per dimensione & argomento](https://apify.com/xquik/x-community-scraper/examples/compare-developer-communities-by-size)
- [Leggi il regolamento di una community di X prima di pubblicare](https://apify.com/xquik/x-community-scraper/examples/read-community-rules-before-you-post)
- [Trova post sui finanziamenti in una community di startup](https://apify.com/xquik/x-community-scraper/examples/find-funding-posts-in-a-startup-community)
- [Trova post di assunzioni in una community di ingegneria del software](https://apify.com/xquik/x-community-scraper/examples/find-hiring-posts-in-a-software-community)
- [Trova membri di community di startup con un ampio pubblico](https://apify.com/xquik/x-community-scraper/examples/find-startup-community-members-with-big-audiences)
- [Analizza da cima a fondo una piccola community di X](https://apify.com/xquik/x-community-scraper/examples/audit-a-small-community-end-to-end)

## Quanto costa estrarre le community di X?

X Community Scraper di Xquik costa $0.00015 per riga consegnata su ogni piano
Apify. Apify fattura a parte il tuo uso della piattaforma. Xquik applica un
addebito per ogni riga di dati consegnata. La diagnostica è gratuita nell'output
`diagnostics`.

Per volumi maggiori,
[scegli un piano Apify](https://apify.com/pricing?fpr=xquik) con più uso
prepagato.

- Non ti serve un abbonamento Xquik.
- Non paghi costi separati di avvio, per community, per risorsa o per query.
- Una community trovata costa 1 riga, con o senza il suo record completo.
- Filtri & deduplicazione agiscono prima della fatturazione. Non paghi mai le
  righe filtrate o duplicate.
- Le impostazioni di addebito massimo totale di Apify limitano le righe
  consegnate.

Anche un'esecuzione che incontra un problema, o un'esecuzione grande, scrive un
record `run-report`. Un'esecuzione piccola senza problemi lo salta & risparmia
uso di Apify. Attiva `alwaysSaveRunRecords` per scriverlo a ogni esecuzione.

Per fissare un tetto alla spesa di un'esecuzione, vedi
[Opzioni di esecuzione](#opzioni-di-esecuzione).

## Esecuzioni vuote, parziali & interrotte

X Community Scraper di Xquik spiega gratis le esecuzioni vuote, parziali &
interrotte. Lo stato dell'esecuzione dice perché si è fermata. Conta anche i
risultati addebitati & i target letti.

### Risultati vuoti

Lo stato di un'esecuzione vuota ti dice di controllare target & filtri. Le righe
filtrate non consumano mai il tuo limite di risultati. Un'esecuzione che legge
ogni target & non riceve nessuna riga non scrive record. Il suo stato dice
perché & cosa cambiare. L'Actor restituisce solo le community pubbliche che X
espone. I campi disponibili variano da community a community.

### Esecuzioni parziali

Un'estrazione interrotta scrive una diagnostica `partial` gratuita. Le righe
consegnate restano nel dataset. Leggi `availableResults`, `failedTargets`,
`retryable` & `nextAction` prima di riprovare. Un'uscita riuscita dell'Actor
conferma la consegna, non l'estrazione completa.

### Cause di arresto

Lo stato dell'esecuzione nomina ogni causa di un arresto anticipato.
`stopCauses` elenca ogni causa con i propri `message`, `retryable` &
`nextAction`. Le cause sono `target_not_found`, `target_failed`,
`pagination_safety_limit` & `deadline_reached`. Un target mancante entra
nell'elenco solo se un'altra causa ha fermato l'esecuzione. L'esecuzione è
`retryable` quando lo è almeno una causa. L'Actor non aggiunge un limite di
tempo proprio.

## Input

La scheda Input elenca ogni opzione. Indica URL o ID delle community, parole
chiave, argomenti, oppure attiva `includeSuggested` o `listTopics`. Tutti gli
altri campi sono facoltativi.

| Campo                          | Cosa fa                                                                         |
| ------------------------------ | ------------------------------------------------------------------------------- |
| `startUrls`                    | URL delle community su `x.com`                                                  |
| `communityIds`                 | ID numerici delle community                                                     |
| `resources`                    | `info`, `tweets`, `media`, `search`, `members`, `moderators`                    |
| `query`                        | Parola chiave per la risorsa `search`                                           |
| `queryType`                    | Ordine `Latest` o `Top` per la ricerca per parola chiave                        |
| `postsOrder`                   | Ordine `Latest` o `Top` per i post                                              |
| `memberNames`                  | Nomi o nomi utente da trovare tra i membri                                      |
| `searchTerms`                  | Parole chiave con cui trovare le community                                      |
| `topics`                       | Nomi o ID di argomenti, come `Technology`                                       |
| `includeSuggested`             | Aggiunge le community a cui X suggerisce di unirsi                              |
| `listTopics`                   | Aggiunge ogni argomento delle community & i suoi sottoargomenti                 |
| `includeDetails`               | Aggiunge i record completi alle community trovate per parola chiave o argomento |
| `maxItems`                     | Limite di righe consegnate sull'intera esecuzione                               |
| `maxItemsPerTarget`            | Limite di righe per ogni risorsa della community                                |
| `sinceDate`, `untilDate`       | Tiene i post dentro un intervallo di date                                       |
| `language`                     | Tiene i post in 1 codice lingua                                                 |
| `mediaType`                    | Tiene i post con immagini, video, GIF, link o nessuno di questi                 |
| `minViews`, `minLikes`         | Tiene i post sopra un numero di visualizzazioni o di Mi piace                   |
| `minReplies`, `minRetweets`    | Tiene i post sopra un numero di risposte o di repost                            |
| `nativeRetweets`               | Tiene solo i repost nativi                                                      |
| `verifiedOnly`                 | Tiene autori, membri o moderatori verificati                                    |
| `minFollowers`, `maxFollowers` | Tiene i membri dentro un intervallo di pubblico                                 |
| `minAccountAgeDays`            | Tiene i membri con un account di almeno questo numero di giorni                 |
| `blueVerifiedOnly`             | Tiene autori o membri che X segna come verificati Blue                          |
| `verifiedType`                 | Tiene i membri con 1 tipo di verifica                                           |
| `minFollowing`, `maxFollowing` | Tiene i membri dentro un intervallo di following                                |
| `minStatuses`, `maxStatuses`   | Tiene i membri dentro un intervallo di numero di post                           |
| `hasWebsite`, `hasLocation`    | Tiene i membri che indicano un sito web o una posizione                         |
| `hasEmail`                     | Tiene i membri che pubblicano un'email                                          |
| `businessEmailOnly`            | Tiene i membri con un'email fuori dai servizi di posta gratuiti                 |
| `emailDomains`                 | Tiene i membri con un'email su questi domini                                    |
| `bioContains`                  | Tiene i membri la cui bio contiene 1 di queste parole                           |
| `locationContains`             | Tiene i membri la cui posizione contiene questo testo                           |
| `usernameContains`             | Tiene i membri il cui nome utente contiene questo testo                         |
| `dedupeAcrossTargets`          | Elimina le righe ripetute tra community prima della fatturazione                |

### Migra da un altro Actor di community

I nomi `ranking` & `sort` funzionano come `postsOrder`. `Top` o `Relevance`
legge i post Top. Quando imposti uno di questi & `postsOrder`, vince il valore
di `postsOrder`. Il log dell'esecuzione nomina il campo scartato.

### Scegli gli input giusti

- Per uno sguardo rapido, mantieni le risorse predefinite `info` & `tweets`.
- Per gli elenchi di lead, scegli `members` con `minFollowers` & `verifiedOnly`.
- Per la ricerca sul prodotto, scegli `search` con una `query` come `bug` o
  `pricing`.
- Per la ricerca creativa, scegli `media` & imposta `mediaType`.
- Per scoprire community, invia `searchTerms` o `topics` senza ID.

## Output

Ogni riga è un oggetto JSON. Ogni riga include `sourceTarget` per la community,
la parola chiave o l'argomento di input. X Community Scraper di Xquik conserva i
campi di origine & non inventa valori. Lo schema del dataset assegna a ogni
campo un titolo & una descrizione.

Gli esempi usano valori fittizi. I risultati contengono dati live. Una riga di
informazioni sulla community ha questo aspetto.

```json
{
  "resultType": "community",
  "sourceTarget": "1493446837214187523",
  "id": "1493446837214187523",
  "name": "Sample Community",
  "description": "A place to share what you build.",
  "member_count": 1200,
  "moderator_count": 4,
  "primary_topic": "Technology"
}
```

Esporta il dataset in JSON, CSV, Excel o HTML.

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

- Usa un punto per un campo dentro un oggetto. Maiuscole & trattini bassi non
  contano.
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

- Imposta l'addebito massimo totale di Apify per limitare il costo
  dell'esecuzione. Tieni `maxItems` alto per avere tutte le righe che il budget
  consente.
- Imposta `maxTotalChargeUsd` nell'API di Apify, oppure Max cost per run in
  Console.
- Metti tutte le tue community in 1 esecuzione. Ogni esecuzione paga ad Apify lo
  stesso costo di avvio.
- `maxItemsPerTarget` limita le righe di ogni risorsa della community.
- `maxConcurrency` imposta quante risorse delle community vengono eseguite
  insieme. Il valore predefinito è l'impostazione sicura più veloce.

Scegli `latest` per ogni esecuzione, così ricevi ogni correzione pubblicata. I
task salvati & le pianificazioni conservano la propria scelta di build, quindi
lasciala su `latest`.

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
- [X (Twitter) Monitor](https://apify.com/xquik/x-twitter-monitor) rileva ogni
  nuovo tweet, risposta, citazione, repost & cambio di profilo degli account, di
  solito in meno di un secondo da quando X lo mostra, più i tweet per parola
  chiave & i follow. Usalo quando ti servono avvisi appena X mostra un tweet. Da
  $0.0045 per monitor-hour.

## FAQ

Le risposte alle domande più comuni, poi dove trovare assistenza.

### Serve una chiave API X o il login?

No. X Community Scraper di Xquik non richiede chiave API X, login o credenziali.

### Come trovo l'ID di una community?

Apri la community su X. L'ID è il numero dopo `/i/communities/` nell'URL. Puoi
anche incollare l'URL completo in `startUrls`.

### Posso esportare i membri di una community di X in CSV o Excel?

Sì. Scegli la risorsa `members`, poi esporta il dataset in CSV, Excel, JSON o
HTML.

### Posso trovare una community senza il suo ID?

Sì. Invia parole chiave in `searchTerms` o argomenti in `topics`. Ogni community
trovata è 1 riga con il suo record completo.

### Posso ottenere i post Top di una community?

Sì. Imposta `postsOrder` su `Top`. Aggiungi `minLikes` o `minViews` per tenere
solo i post più popolari.

### Quante community posso estrarre in 1 esecuzione?

Tutte quelle che elenchi. `maxItems` & il tuo limite di spesa su Apify limitano
le righe.

### Legge le community private?

No. X Community Scraper di Xquik restituisce solo le community pubbliche che X
espone.

### È legale estrarre le community di X?

X Community Scraper di Xquik raccoglie campi pubblici di X. I risultati possono
contenere dati personali. Verifica di avere uno scopo lecito & rispetta le norme
sulla privacy applicabili. Nel dubbio, chiedi a un legale qualificato.

### Perché la mia esecuzione non ha restituito risultati?

Leggi prima lo stato dell'esecuzione. Lo stato di un'esecuzione vuota ti dice di
controllare target & filtri. L'output gratuito `diagnostics` compare quando
qualcosa richiede attenzione. Il suo `stopCauses` assegna a ogni causa un
`nextAction` da seguire. L'esecuzione elenca ogni input che non riesce a leggere
& spiega come correggerlo.

### Posso usare l'API, le pianificazioni & le integrazioni?

Sì. Scegli tra 50 task pubblici o l'API REST di Xquik. La
[scheda API](https://apify.com/xquik/x-community-scraper/api) ha esempi in
Python, JavaScript & cURL. Le
[pianificazioni](https://docs.apify.com/platform/schedules) di Apify avviano X
Community Scraper di Xquik con un cron. Gli agenti usano
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Usa `latest`, a
meno che non ti serva una build precedente.

### Posso avere una soluzione personalizzata?

Sì. Descrivi ciò che ti serve nella
[scheda Issues](https://apify.com/xquik/x-community-scraper/issues). Xquik offre
anche una dashboard, un'API REST, un server MCP & webhook. Trovi il sito web di
Xquik sul suo [profilo Apify](https://apify.com/xquik).

### Dove trovo assistenza?

Apri una issue nella
[scheda Issues](https://apify.com/xquik/x-community-scraper/issues) con l'ID
dell'esecuzione. La diagnostica gratuita nel key-value store spiega le
esecuzioni che richiedono attenzione. Un'esecuzione che non riceve nessuna riga
ne spiega il motivo nel suo stato.
