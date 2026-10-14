[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · **Italiano**

[![Framer collega Xquik MCP agli agenti di coding](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Guarda come Framer usa gli scraper Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
con Claude Code, Codex, Cursor & altro, da 6:07.

Xquik è il servizio di scraping X (Twitter) più veloce & economico al mondo, con
i dati X più completi. X List Scraper di Xquik raccoglie dettagli, post, membri
& follower delle liste, & trova le liste per parola chiave. La maggior parte
degli altri Actor Apify fa pagare prima di filtrare o deduplicare. Xquik fa
pagare solo i risultati consegnati, unici e conformi ai filtri.

Estrai dettagli, post, membri & follower da URL di liste di X o da ID numerici
delle liste, oppure trova liste pubbliche con termini di ricerca. Paghi
**$0.00015 per riga consegnata**, & Apify fattura a parte l'uso della
piattaforma. Non ti servono una chiave API X né il login.

> Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.
> "Twitter" e "X" sono marchi di X Corp.

## Dati & filtri delle liste

- Dettagli della lista, con nome, descrizione, numero di membri & di follower,
  data di creazione, banner & profilo pubblico del proprietario.
- Post delle liste con testo, autore, metriche, media & timestamp.
- Membri & follower delle liste.
- Ricerca di liste per parola chiave. Ogni riga è 1 lista con proprietario,
  numero di membri & numero di follower.
- Risposte opzionali nei post delle liste.
- Filtri su date, orario Unix, lingua, media, engagement, verifica & profili.
- Filtri sui profili per membri & follower, come `minFollowers`, `hasEmail` &
  `bioContains`.
- Le liste pubbliche che un account ha creato o in cui compare, dal suo nome
  utente o dall'URL del profilo.
- Più liste & tipi di risorsa in 1 esecuzione.
- Un limite globale & un limite per ogni risorsa della lista o termine di
  ricerca.
- Le esecuzioni riprendono dopo una migrazione di Apify.
- Rimozione dei duplicati prima della fatturazione.

## Come estrarre le liste di X

Non usi ancora Apify?
[Crea prima un account gratuito](https://console.apify.com/sign-up?fpr=xquik).
Il piano gratuito non richiede carta di credito & offre $5 da spendere ogni
mese. A $0.00015 per riga, $5 coprono fino a 33.000 righe, senza contare l'uso
della piattaforma. Poi torna qui & premi Try for free.

1. Apri X List Scraper di Xquik in Apify Console.
2. Incolla gli URL delle liste in `startUrls` o gli ID numerici in `listIds`.
   Per trovare liste, aggiungi invece parole chiave a `searchTerms`.
3. Scegli `resources` & aggiungi filtri come `sinceDate` o `minLikes`.
4. Imposta `maxItems` per limitare le righe consegnate, poi fai clic su Start.
5. Scarica il dataset in JSON, CSV o Excel, oppure usa l'API di Apify.

`startUrls` accetta ogni URL come stringa semplice o come oggetto
`{ "url": "..." }`.

```json
{
  "startUrls": [
    "https://x.com/i/lists/1748648376080666720",
    { "url": "https://x.com/nasa" }
  ]
}
```

## Input

```json
{
  "listIds": ["1748648376080666720"],
  "resources": ["info", "tweets", "members", "followers"],
  "includeReplies": false,
  "maxItems": 10000
}
```

Per trovare liste per parola chiave, invia termini di ricerca.

```json
{ "searchTerms": ["space news", "climate science"], "maxItemsPerTarget": 50 }
```

Le esecuzioni piccole senza problemi saltano `run-report` & risparmiano uso di
Apify. Attiva `alwaysSaveRunRecords` per scriverlo a ogni esecuzione.

## Output

Ogni riga imposta `resultType` su `list`, `listTweet`, `listMember` o
`listFollower`. `sourceTarget` conserva l'ID della lista di input, oppure il
termine di ricerca che ha trovato una riga `list`. Una riga `list` contiene i
dettagli di una lista, 1 per lista. Le altre righe usano il formato stabile di
Xquik per post o profili.

Le righe di membri & follower riportano `email` & `contactInfo`. Contengono le
email, i telefoni & i link che ogni profilo pubblica.

### Le liste di un account

Aggiungi nomi utente a `twitterHandles`, o URL di profili a `startUrls`, per
elencare le liste pubbliche di ogni account.

```json
{ "twitterHandles": ["verge"], "accountLists": ["created", "memberships"] }
```

`created` elenca le liste che l'account ha creato & `memberships` le liste che
lo contengono. Ogni lista è 1 riga con `resultType` `createdList` o
`listMembership`, `sourceTarget` impostato sul nome utente, & `id`, `name`,
`description`, `memberCount`, `subscriberCount`, `createdAt`, `bannerUrl` & il
profilo `owner`. X mostra una lista privata solo al suo proprietario, quindi le
liste private restano fuori.

Le liste create da ogni account vengono prima di quelle in cui compare. L'Actor
legge gli account in parallelo, quindi le righe di account diversi arrivano man
mano che vengono lette. Raggruppale per `sourceTarget`.

Una riga è 1 account & 1 lista. Una lista condivisa da 2 dei tuoi account dà 2
righe, 1 sotto ciascuno. Paghi ogni riga. `dedupeAcrossTargets` non rimuove mai
queste righe.

Gli esempi usano valori fittizi. I risultati contengono dati live. Una riga con
i dettagli di una lista ha questo aspetto.

```json
{
  "resultType": "list",
  "sourceTarget": "4143408",
  "id": "4143408",
  "name": "NASA Centers",
  "description": "NASA has 10 centers http://www.nasa.gov/about/sites",
  "memberCount": 11,
  "subscriberCount": 859,
  "createdAt": "2009-12-02T22:41:02.000Z",
  "owner": { "username": "NASA", "name": "NASA" }
}
```

Una riga di membro della lista ha questo aspetto.

```json
{
  "resultType": "listMember",
  "sourceTarget": "1748648376080666720",
  "username": "sample_user",
  "name": "Sample User",
  "followers": 1200,
  "verified": false
}
```

Una riga `list` da un termine di ricerca ha questo aspetto.

```json
{
  "resultType": "list",
  "sourceTarget": "space news",
  "id": "1000000000000000001",
  "name": "Sample Space News",
  "description": "Sample accounts that post space news.",
  "url": "https://x.com/i/lists/1000000000000000001",
  "memberCount": 35,
  "subscriberCount": 76,
  "owner": { "username": "sample_user", "name": "Sample User" }
}
```

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

## Quanto costa estrarre le liste di X?

Su ogni piano Apify paghi $0.00015 per riga consegnata. Apify fattura a parte il
tuo uso della piattaforma.

Per volumi maggiori,
[scegli un piano Apify](https://apify.com/pricing?fpr=xquik) con più uso
prepagato.

- Un addebito per ogni riga di dati consegnata. La diagnostica in `diagnostics`
  è gratuita.
- Nessun costo di avvio, per lista o per risorsa.
- La deduplicazione avviene prima della fatturazione.

## Limiti & recupero

X List Scraper di Xquik legge molte liste & risorse in 1 esecuzione. Le righe
consegnate & i progressi restano dopo un riavvio di Apify. L'Actor non aggiunge
un limite di tempo proprio.

Un'estrazione interrotta scrive una diagnostica `partial` gratuita. I risultati
disponibili restano intatti. Leggi `availableResults`, `failedTargets`,
`retryable` & `nextAction` prima di riprovare. Un'uscita riuscita dell'Actor
conferma la consegna, non l'estrazione completa.

Lo stato dell'esecuzione nomina ogni causa di un arresto anticipato.
`stopCauses` elenca ogni causa con i propri `message`, `retryable` &
`nextAction`. Le cause sono `target_not_found`, `target_failed`,
`pagination_safety_limit` & `deadline_reached`. Un target mancante entra
nell'elenco solo se un'altra causa ha fermato l'esecuzione. L'esecuzione è
`retryable` quando lo è almeno una causa.

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

### Serve una chiave API X o il login?

No. X List Scraper di Xquik non richiede chiave API X, login o credenziali.

### È legale estrarre le liste di X?

X List Scraper di Xquik raccoglie campi pubblici di X. I risultati possono
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
[scheda API](https://apify.com/xquik/x-list-scraper/api) ha esempi in Python,
JavaScript & cURL. Le
[pianificazioni](https://docs.apify.com/platform/schedules) di Apify avviano X
List Scraper di Xquik con un cron. Gli agenti usano
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Usa `latest`, a
meno che non ti serva una build precedente.

### Dove trovo assistenza?

Apri una issue nella
[scheda Issues](https://apify.com/xquik/x-list-scraper/issues) con l'ID
dell'esecuzione. La diagnostica gratuita nel key-value store spiega le
esecuzioni che richiedono attenzione. Un'esecuzione che non riceve nessuna riga
ne spiega il motivo nel suo stato.

### Posso avere una soluzione personalizzata?

Sì. Descrivi ciò che ti serve nella
[scheda Issues](https://apify.com/xquik/x-list-scraper/issues). Xquik offre
anche una dashboard, un'API REST, un server MCP & webhook. Trovi il sito web di
Xquik sul suo [profilo Apify](https://apify.com/xquik).
