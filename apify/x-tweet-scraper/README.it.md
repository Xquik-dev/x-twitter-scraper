[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · **Italiano**

[![Framer collega Xquik MCP agli agenti di coding](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Guarda come Framer usa gli scraper Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
con Claude Code, Codex, Cursor & altro, da 6:07.

Xquik è il servizio di scraping X (Twitter) più veloce & economico al mondo, con
i dati X più completi. X Tweet Scraper di Xquik raccoglie post, risposte,
profili, liste & ricerche con oltre 50 filtri. I benchmark pubblici dimostrano
che è il più economico & veloce tra 12 Actor che estraggono post. Le sue righe
hanno 2x i campi dell'Actor mediano, come mostra il
[benchmark qui sotto](#benchmark). La maggior parte degli altri Actor Apify fa
pagare prima di filtrare o deduplicare. Xquik fa pagare solo i risultati
consegnati, unici e conformi ai filtri.

Estrai i tweet di Twitter **da $0.00015 per risultato consegnato su ogni piano
Apify**, un'alternativa all'API di Twitter. Apify fattura a parte l'uso della
piattaforma. Non ti serve il login a X & non paghi costi di avvio o per query.
Creato da Xquik.

> Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.
> "Twitter" e "X" sono marchi di X Corp.

## Cosa fa X Tweet Scraper?

X Tweet Scraper di Xquik restituisce post, metriche di engagement, profili
pubblici degli autori & media. Accetta URL, nomi utente, ID delle liste, ID dei
post & query di ricerca con oltre 50 filtri.

### Casi d'uso

- Alimenta ricerca, arricchimento, analisi & addestramento AI con testo, autori,
  media & metriche dei post.
- Segui il sentiment del brand nei post.
- Monitora i post dei concorrenti & i termini del settore.
- Trova potenziali clienti nelle conversazioni pubbliche.
- Raccogli dataset pubblici per la ricerca.
- Trova post con un alto engagement pubblico.

## Perché usare X Tweet Scraper?

- **Ricerca 13,6x più veloce.** La ricerca per parola chiave è stata 13,6x più
  veloce del più veloce tra altri 4 Actor di tweet. La ricerca filtrata è stata
  4,3x più veloce, & la timeline di un utente circa 3x. Il
  [benchmark](README.md#benchmark) si è svolto il 2026-10-15 & il 2026-10-16.
- **Il costo più basso per tweet utile.** Ha avuto il costo più basso per tweet
  utile in tutti e 3 i test del [benchmark](README.md#benchmark).
- **Più campi per tweet.** La sua riga mediana nella ricerca per parola chiave
  aveva 67 campi. È 1,3x la mediana degli altri Actor nel
  [benchmark](README.md#benchmark).
- **Ogni fonte in 1 esecuzione.** Combina ID dei post, nomi utente, liste,
  ricerche & URL in 1 input. Imposta `mode` per risposte, citazioni, thread,
  menzioni, retweeter o articoli.
- **Trova i migliori tweet di X.** `mode: "topTweets"` restituisce i tweet che X
  classifica più in alto per 1 metrica, come le visualizzazioni. Restringili a
  un giorno, una settimana o un mese & a un paese.
- **Codice di incorporamento per ogni tweet.** `mode: "embed"` restituisce
  l'HTML che mostra un tweet sul tuo sito.
- **Nessun limite agli ID dei post.** Cerca qualsiasi numero di ID dei post in 1
  esecuzione. Le righe tornano nell'ordine del tuo input. Valgono comunque il
  tuo limite di spesa & il timeout.
- **Latest & Top in 1 esecuzione.** Imposta `queryType` su `Latest + Top` per
  avere entrambi gli ordinamenti di ricerca. Paghi ogni tweet una sola volta.

### Risultati completi

- I grandi intervalli di date tornano completi & in fretta.
- Le ricerche restituiscono ogni risultato, qualunque operatore combini.
- La cronologia dell'account torna completa, compresi i post vecchi.
- Le esportazioni del profilo conservano ogni post dei thread dell'autore.
- Le letture dei profili includono il post fissato, segnato come fissato.
- Gli elenchi dei migliori tweet tornano in modo affidabile.
- Le pagine filtrate tornano piene finché i risultati non finiscono.
- Ogni risultato riporta i dati più completi che X ha a disposizione.

### Righe accurate

- I risultati di ricerca contengono ogni post che corrisponde alla tua query &
  nient'altro.
- La ricerca di parole & frasi funziona in ogni lingua & alfabeto.
- I filtri di lingua funzionano con ogni lingua che X assegna ai post.
- Un post risulta mancante solo quando non esiste più.
- Account protetti & liste private ricevono un esito chiaro, non una pagina
  vuota.
- I repost riportano il testo originale completo.
- Ogni ID in una riga resta esatto.
- Menzioni, link, hashtag & evidenziazioni restano allineati al testo.
- Un conteggio non noto compare in `unknownCounts`, mai come 0.
- I badge di verifica corrispondono a quelli che mostra `x.com`.
- Le righe contengono solo dati pubblici.
- Le ricerche di citazioni restituiscono ogni citazione reale & nient'altro.
- Gli export delle risposte contengono solo risposte dirette, in un ordine
  verificato.
- I risultati dal più recente arrivano in ordine cronologico.
- Le ricerche accettano le query come le scriveresti su X.
- Le ricerche di luoghi funzionano con nomi in 6 lingue.
- Una ricerca che non può partire fallisce subito & dice come correggerla.
- Una data ha un solo significato in qualsiasi formato comune.
- Le ricerche accettano i limiti `since_id` & `max_id`.
- Annunci & contenuti sponsorizzati non arrivano mai nelle tue righe.

### Dati aggiornati

- Le letture continuano a funzionare quando X rilascia modifiche.

### Velocità

- Una pagina lenta non blocca la tua esecuzione.
- Le ricerche restano veloci sugli argomenti molto attivi.
- Ogni pagina successiva arriva in fretta.
- Le letture finiscono appena arrivano le loro righe.
- Le chiamate agli Actor che si bloccano riprendono da sole.

### Fatturazione equa

- Un input errato non costa nulla & ti dice cosa correggere.
- Un ID di post elencato due volte in un lotto si paga una sola volta.
- Gli Actor fanno pagare solo le righe consegnate, uniche & conformi ai filtri.
- Un'esecuzione riavviata non addebita mai due volte.
- Le esecuzioni restano entro il tuo limite di spesa & scrivono comunque la loro
  diagnostica.
- Le esecuzioni piccole finiscono con un consiglio per spendere meno.

### Affidabilità

- Un errore isolato non fa fallire la tua esecuzione.
- La paginazione resta coerente da una pagina all'altra.
- La paginazione non va mai in loop infinito.
- Quando scade il tempo, ricevi le righe già trovate con la diagnostica.
- Gli Actor resistono ai brevi disservizi di Xquik.
- Le esecuzioni degli Actor superano i riavvii senza ripetere nulla.
- Una riga errata non fa fallire il lotto.
- Le esecuzioni interrotte conservano le loro righe & il loro report.
- Un'esecuzione che non riesce a partire spiega comunque perché.
- `stopCauses`, `failedSubtargets` & `unavailableTargets` spiegano nel dettaglio
  gli errori parziali.
- Il supporto può vedere esattamente cosa ha restituito una richiesta o
  un'esecuzione.

### Pensato per gli agenti

- Gli Actor accettano input scritti per altri Actor.
- L'output è pronto per i fogli di calcolo, con colonne piatte & totali di
  engagement.
- Ogni esecuzione dice perché è finita & se conviene riprovare.

### Dati ricchi

- Le righe dei post riportano il testo dei Note Tweet, modifiche, Note della
  community, etichette di visibilità & regole di risposta.
- Le righe riportano app di origine, conteggi dei media & dati degli account
  professionali.
- I media arrivano con varianti, testo alternativo, dimensioni & motivi di
  disponibilità.
- Vedi quando ogni account ha fatto repost di un post.
- Post & bio si possono tradurre nella tua lingua.

### Controlli di qualità

- Ogni campo che X mostra è fornito, escluso di proposito o dimostrato assente.
- Xquik testa ogni lettura dal vivo su X.

## Quali dati può estrarre X Tweet Scraper?

| Campo                  | Descrizione                                                    |
| ---------------------- | -------------------------------------------------------------- |
| `id`                   | ID del post                                                    |
| `text`                 | Testo completo, inclusi i Note Tweet fino a 25k caratteri      |
| `createdAt`            | Stringa di data & ora nativa di X                              |
| `likeCount`            | Numero di Mi piace                                             |
| `retweetCount`         | Numero di repost                                               |
| `replyCount`           | Numero di risposte                                             |
| `quoteCount`           | Numero di post di citazione                                    |
| `viewCount`            | Numero di visualizzazioni                                      |
| `bookmarkCount`        | Numero di segnalibri                                           |
| `lang`                 | Lingua del post                                                |
| `url`                  | Link diretto al post                                           |
| `tweetUrl`             | Alias dell'URL del post nell'output piatto                     |
| `twitterUrl`           | URL `twitter.com` nell'output piatto                           |
| `author`               | Nome utente, bio, sito web & conteggi dell'autore              |
| `authorUsername`       | Nome utente dell'autore nell'output piatto                     |
| `authorFollowers`      | Numero di follower dell'autore nell'output piatto              |
| `authorUrl`            | Sito web dell'autore nell'output piatto, quando disponibile    |
| `authorDescription`    | Testo della bio dell'autore nell'output piatto                 |
| `authorCoverPicture`   | URL del banner dell'autore nell'output piatto                  |
| `authorPinnedTweetIds` | ID dei post fissati dall'autore nell'output piatto             |
| `media`                | Immagini, video, GIF allegati                                  |
| `mediaUrls`            | URL dei media nell'output piatto                               |
| `imageUrls`            | URL delle immagini nell'output piatto                          |
| `videoUrls`            | URL dei video nell'output piatto                               |
| `entities`             | Hashtag, URL, menzioni e timestamp dei video                   |
| `displayTextRange`     | Intervallo del testo visualizzato da X, quando disponibile     |
| `contentDisclosure`    | Metadati di disclosure, quando disponibili                     |
| `conversationControl`  | Regole di risposta e proprietario della conversazione pubblica |
| `reactionContext`      | Post pubblico e utente a cui si riferisce una reazione         |
| `subscriberBadge`      | Creator a cui è abbonato l'autore della risposta               |
| `limitedActions`       | Limiti e avvisi pubblici sulle interazioni                     |
| `isLimitedReply`       | Se le risposte sono limitate                                   |
| `isNoteTweet`          | Se è un Note Tweet (post lungo)                                |
| `isQuoteStatus`        | Se questo post cita un altro post                              |
| `isRetweet`            | Se la riga è un repost, con l'originale allegato               |
| `isPinned`             | Se l'autore ha fissato questo post. Solo nelle righe piatte    |
| `isReply`              | Se questo post è una risposta                                  |
| `quoted_tweet`         | Oggetto del post citato (se è una citazione)                   |
| `conversationId`       | ID del thread o della conversazione                            |
| `resultType`           | Tipo di riga per righe rich, di engagement & di diagnostica    |
| `sourceTweetId`        | ID del post di origine nelle modalità articolo ed engagement   |
| `article`              | Dati strutturati dell'articolo in `mode: "article"`            |
| `translation`          | Traduzione di X in `mode: "translation"`                       |
| `embed`                | HTML di incorporamento & link in `mode: "embed"`               |

I metadati facoltativi del post includono `authorUnavailable`, `card`,
`cashtagAttachments`, `communityId`, `communityName`, `communityNote`, `edit`,
`exclusiveContent`, `noteTweet` & `postCta`. `isTranslatable`, `place`,
`possiblySensitive` & `viewState` conservano altro contesto pubblico.
`previousCounts` conserva l'engagement prima della modifica. `tombstone`
conserva gli avvisi di visibilità. `unmentionedUserIds` elenca gli utenti che
hanno lasciato la conversazione. Consulta OpenAPI per i campi esatti.

Imposta `outputVariant: "rich"` per avere il massimo dei dati per riga. Le righe
rich aggiungono in fondo `hasCommunityNotes`, `quotedTweetPermalink`,
`unavailableAuthorId` & `sourceUser` dei media. Le righe legacy restano
invariate.

Gli oggetti `author` annidati riportano i campi pubblici del profilo. Coprono
identità, conteggi, verifica, disponibilità, dati professionali & biografie del
profilo.

Le righe di repost impostano `isRetweet` su `true`. Il loro `text` riporta il
post originale per intero. `retweeted_tweet` contiene il post originale con il
suo autore & i suoi conteggi.

Le righe dei post conservano anche `type`, `source`, `inReplyToId`,
`inReplyToUserId`, `inReplyToUsername` & `retweeted_tweet`. I post citati & i
repost riportano gli stessi campi a ogni livello di annidamento.

I media riportano disponibilità, geometria, tag & varianti video. Riportano
anche le azioni `watchNowUrl` & `visitSiteUrl`.

Le righe non includono mai stati visibili solo a chi guarda. L'Actor rimuove gli
indicatori di chi guarda per follow, blocco, silenziamento, segnalibro, Mi
piace, repost, permesso di modifica & simili. Anche l'output raw li elimina.

## Come uso X Tweet Scraper per estrarre dati dai tweet?

Non usi ancora Apify?
[Crea prima un account gratuito](https://console.apify.com/sign-up?fpr=xquik).
Il piano gratuito non richiede carta di credito & offre $5 da spendere ogni
mese. A $0.00015 per riga, $5 coprono fino a 33.000 righe, senza contare l'uso
della piattaforma. Poi torna qui & premi Try for free.

Segui questi passaggi in Apify Console.

1. Apri un [esempio di task](#esempi-di-task) o la scheda Input.
2. Aggiungi URL, nomi utente, ID dei post o termini di ricerca.
3. Imposta `maxItems` & i filtri che ti servono.
4. Fai clic su Start & aspetta che l'esecuzione finisca.
5. Esporta il dataset in JSON, CSV, Excel o HTML.

Ogni ricetta qui sotto è un input completo per 1 fonte. Scegli quella adatta ai
tuoi dati.

### Incolla gli URL

Incolla un mix qualsiasi di URL di post, profili, ricerche o liste.

```json
{
  "startUrls": [
    { "url": "https://x.com/jack/status/20" },
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

I nomi utente fanno da scorciatoia per molte ricerche `from:username`.

```json
{ "twitterHandles": ["elonmusk", "nasa", "openai"], "maxItems": 100 }
```

Ogni nome utente restituisce i post di quell'account. L'Actor rimuove le righe
duplicate prima dell'output & della fatturazione. Puoi aggiungere i nomi utente
con o senza `@`. Nomi utente & URL dei profili conservano i repost, come fa la
scheda Post su X. Li conservano anche con date o filtri. Imposta
`tweetTypes.excludeRetweets` per escluderli.

### Cerca i post

Inserisci 1 o più query nel campo Search terms.

```json
{
  "searchTerms": ["from:elonmusk AI", "#bitcoin lang:en"],
  "maxItems": 1000,
  "queryType": "Latest"
}
```

Con `mode` impostato su `tweet` o `tweets` & senza ID dei post, le query vengono
eseguite come ricerca. Così i `searchTerms` validi non restituiscono mai una
ricerca per ID vuota.

Funziona anche il recupero dello storico di un account con finestre di date,
come `from:elonmusk since:2026-01-01 until:2026-01-02`. Ogni termine conserva la
propria attribuzione `searchTerm`. `maxItems` limita i risultati su tutti i
termini di ricerca. L'Actor controlla ogni post restituito rispetto alle
finestre `since:`, `until:` & in tempo Unix. Le ricerche filtrate continuano a
leggere finché trovano corrispondenze o X non ha più risultati.

Un termine di ricerca `from:` restituisce ciò che restituisce la ricerca di X,
quindi esclude i repost. Aggiungi `include:nativeretweets` per tenerli, oppure
`filter:nativeretweets` per avere solo i repost.

### Cerca i post per ID

```json
{ "tweetIds": ["20", "2082577277246972300"], "maxItems": 100 }
```

I risultati mantengono l'ordine del tuo input, eliminano i duplicati & includono
solo i post richiesti. La ricerca per ID accetta anche `tweetId`, `tweetIDs`,
`tweets`, `postIds`, `lookupPostIds`, `tweetUrls` & `postUrls`.

Ogni voce è un ID o un URL di un post. L'esecuzione salta senza addebito ogni
altra voce & legge il resto. Il suo stato conta le voci saltate & il suo log le
elenca.

Metti tutti i tuoi ID in 1 esecuzione. Ogni esecuzione paga ad Apify lo stesso
costo di avvio. Con 1 ID per esecuzione, l'uso di Apify aggiunge circa $0.00008
a ogni post. Con 188 ID in 1 esecuzione, aggiunge circa $0.000005. Un'esecuzione
con meno di 5 ID termina con questo consiglio.

### Modalità engagement, thread & articolo

Imposta `mode` per scegliere cosa legge l'esecuzione, qualunque altro campo
contenga l'input.

```json
{ "mode": "replies", "replyTweetIds": ["2082577277246972300"], "maxItems": 100 }
```

Le modalità per post & ricerche sono `tweet`, `tweets` & `search`. Le modalità
per i profili sono `profileTweets`, `profileReplies`, `profileMedia`,
`profileLikes` & `profileMentions`. `listTweets` legge i post di una lista &
`article` legge l'articolo di X contenuto in un post. Le modalità per un singolo
post sono `replies`, `quotes`, `thread`, `retweeters`, `favoriters`,
`translation` & `embed`.

`profileMentions` restituisce i post che menzionano ogni nome utente, dal più
recente.

```json
{ "mode": "profileMentions", "twitterHandles": ["nasa"], "maxItems": 100 }
```

`profileTweets` segue la scheda Post del profilo su X. Restituisce i post
dell'account, i suoi repost & le sue risposte ai propri post. Le righe arrivano
in ordine di data. L'Actor scarta le risposte ad altri account prima della
fatturazione. Scarta anche il contesto di conversazione di altri autori.

Per avere solo i post originali, escludi i tipi che non vuoi.

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
dell'account stesso. L'Actor esclude il contesto di conversazione di altri
autori. Usa `filter:replies` o una ricerca `to:` per avere solo risposte.

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
totale che vuoi, anche oltre 25.000 per 1 target di risposte.

Le righe degli articoli includono `resultType: "article"`, `sourceTweetId`,
`article` & un `author` facoltativo. Le righe utente di engagement includono
`resultType: "user"`, `sourceTweetId` & `engagementMode`.

La modalità retweeters funziona come una normale modalità di engagement
pubblico. La modalità favoriters funziona al meglio delle possibilità. X può
mostrare chi ha messo Mi piace solo sui post idonei o visibili al proprietario.
Anche i Mi piace del profilo funzionano al meglio delle possibilità, perché
molti profili pubblici non hanno una scheda Mi piace leggibile. Se X non mostra
utenti o post con Mi piace, lo stato dell'esecuzione lo dice. Le righe dei post
possono riportare il numero di segnalibri. X non mostra quali account hanno
salvato un post nei segnalibri.

### Traduci i post & ottieni l'HTML di incorporamento

`mode: "translation"` restituisce la traduzione di X di ogni post. Imposta
`translateTo` su un codice lingua come `en`, `es`, `pt-br` o `zh-tw`. Il valore
predefinito è `en`.

```json
{
  "mode": "translation",
  "tweetIds": ["2082577277246972300"],
  "translateTo": "es"
}
```

Ogni riga ha `resultType: "translation"`, `sourceTweetId` & `translation`.
Questo oggetto contiene `language`, `sourceLanguage`, `text` & `entities`.

`mode: "embed"` restituisce l'HTML che incorpora ogni post in un sito web.

```json
{ "mode": "embed", "tweetIds": ["2082577277246972300"], "embedTheme": "dark" }
```

Ogni riga ha `resultType: "embed"`, `sourceTweetId` & `embed`. Questo oggetto
contiene `url`, `authorName`, `authorUrl`, `html` & `width`. `embedHideMedia`,
`embedHideThread` & `embedOmitScript` escludono i media, il post a cui risponde
o lo script del widget.

Entrambe le modalità accettano ID dei post o URL dei post in `tweetIds`. Anche
`startUrls` accetta URL dei post. Ogni post dà 1 riga al prezzo abituale per
riga. Un post che X non ha non produce righe & non costa nulla.

### Ottieni i migliori post su X

`mode: "topTweets"` restituisce i post che X classifica più in alto per 1
metrica, come li mostra la pagina Inspiration di X.

```json
{
  "mode": "topTweets",
  "topMetric": "views",
  "topWindow": "week",
  "topCountry": "US",
  "maxItems": 100
}
```

`topMetric` vale `likes`, `replies`, `quotes`, `bookmarks`, `shares` o `views`.
Il valore predefinito è `likes`. `topWindow` vale `day`, `week` o `month`, & il
valore predefinito è `day`. X elenca fino a 100 post per ogni scelta. Lascia
vuoto `topCountry` per tutto X. Imposta `lang` per tenere 1 lingua. Con entrambi
impostati, X sceglie il paese & l'Actor tiene la lingua. Ogni riga ha
`engagementMode: "topTweets"` & costa 1 risultato, come qualsiasi post.

### Esporta righe CSV piatte

Tieni i campi JSON annidati predefiniti, oppure aggiungi colonne adatte ai fogli
di calcolo.

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
risultati rich o raw.

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

Combina filtri su utente, data, posizione, media & engagement.

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

- [Ottieni post recenti di X per agenti AI](https://apify.com/xquik/x-tweet-scraper/examples/search-x-posts-for-ai-agents)
- [Crea un dataset di X per RAG](https://apify.com/xquik/x-tweet-scraper/examples/build-x-rag-dataset)
- [Estrai un articolo di X per RAG](https://apify.com/xquik/x-tweet-scraper/examples/extract-x-article-for-rag)
- [Monitora la visibilità nella ricerca AI su X](https://apify.com/xquik/x-tweet-scraper/examples/monitor-ai-search-visibility-on-x)
- [Cerca su Twitter per data](https://apify.com/xquik/x-tweet-scraper/examples/search-twitter-by-date)
- [Scopri strumenti per agenti AI su X](https://apify.com/xquik/x-tweet-scraper/examples/discover-ai-agent-tools-on-x)
- [Raccogli feedback sui prodotti AI](https://apify.com/xquik/x-tweet-scraper/examples/collect-ai-product-feedback)
- [Monitora le menzioni del brand su X](https://apify.com/xquik/x-tweet-scraper/examples/monitor-brand-mentions-on-x)
- [Esporta i dati di Twitter in CSV](https://apify.com/xquik/x-tweet-scraper/examples/export-twitter-data-to-csv)
- [Raccogli le risposte a un post di OpenAI](https://apify.com/xquik/x-tweet-scraper/examples/collect-replies-to-an-openai-post)
- [Estrai un thread completo di Twitter](https://apify.com/xquik/x-tweet-scraper/examples/extract-complete-twitter-thread)
- [Raccogli conversazioni sui veicoli elettrici](https://apify.com/xquik/x-tweet-scraper/examples/collect-electric-vehicle-conversations)

## Quanto costa estrarre i tweet?

X Tweet Scraper di Xquik costa $0.00015 per riga consegnata su ogni piano Apify.
Apify fattura a parte il tuo uso della piattaforma. Xquik applica un addebito
per ogni riga di dati consegnata. La diagnostica è gratuita nell'output
`diagnostics`.

Per volumi maggiori,
[scegli un piano Apify](https://apify.com/pricing?fpr=xquik) con più uso
prepagato.

- Non ti serve un abbonamento Xquik.
- Non paghi costi separati di avvio o per query. Nemmeno URL & ricerche di
  singoli post aggiungono costi.
- Filtri & deduplicazione agiscono prima della fatturazione. Non paghi mai le
  righe filtrate o duplicate.
- Le esecuzioni senza input & con input non valido scrivono 1 record con
  l'azione da fare nell'output gratuito `diagnostics`. Lo fanno anche le
  esecuzioni che si fermano prima, saltano un target o i cui filtri interni,
  come `lang` nella lettura di un profilo, rimuovono ogni riga.
- Un'esecuzione che legge ogni target & non riceve nessuna riga non scrive
  record. Il suo stato dice perché & cosa cambiare. Anche le righe escluse dai
  tuoi operatori di ricerca, come `-is:retweet`, non scrivono record.

Anche un'esecuzione che incontra un problema, o un'esecuzione grande, scrive un
record `run-report`. Il suo `estimatedChargeUsd` usa il prezzo pay-per-event
aggiornato di Apify. Le esecuzioni con un problema scrivono sempre `run-report`,
incluse le uscite senza input e con input non valido. Un'esecuzione piccola
senza problemi lo salta & risparmia uso di Apify. Attiva `alwaysSaveRunRecords`
per scriverlo a ogni esecuzione. I report dell'esecuzione separano le righe di
dati in `realRows` dalla diagnostica in `diagnosticRows`.

Per fissare un tetto alla spesa di un'esecuzione, vedi
[Opzioni di esecuzione](#opzioni-di-esecuzione).

## Benchmark

X Tweet Scraper di Xquik ha battuto altri 11 Actor che estraggono post su costo
& velocità. La sua riga mediana aveva 63 campi, 2x la mediana degli altri.

- `xquik/x-tweet-scraper` ha consegnato 890 tweet utili a $0.000175 per tweet
  utile, con 39,2 al secondo & 63 campi per riga.
  [Vedi esecuzione](https://console.apify.com/view/runs/fflWVxHwYvtyHpAQX)
- `xquik/x-tweet-scraper` ha consegnato 883 tweet utili a $0.000176 per tweet
  utile, con 25,2 al secondo & 63 campi per riga.
  [Vedi esecuzione](https://console.apify.com/view/runs/EtSdBgkUcH4M1uicf)
- `xquik/x-tweet-scraper` ha consegnato 882 tweet utili a $0.000177 per tweet
  utile, con 25,7 al secondo & 63 campi per riga.
  [Vedi esecuzione](https://console.apify.com/view/runs/SK3ZWhPwzGJYoYQba)
- `xquik/x-tweet-scraper` ha consegnato 877 tweet utili a $0.000178 per tweet
  utile, con 26,9 al secondo & 63 campi per riga.
  [Vedi esecuzione](https://console.apify.com/view/runs/JRdbcigkBMCaFuH1W)
- `scrapesmith/twitter-x-scraper-tweets-profiles-replies` ha consegnato 813
  tweet utili a $0.000185 per tweet utile, con 10,5 al secondo & 36 campi per
  riga. [Vedi esecuzione](https://console.apify.com/view/runs/mIT1zf0xccCsYWO1E)
- `scrapesmith/twitter-x-scraper-tweets-profiles-replies` ha consegnato 805
  tweet utili a $0.000187 per tweet utile, con 10,6 al secondo & 36 campi per
  riga. [Vedi esecuzione](https://console.apify.com/view/runs/p1MUeElsamZUepTpm)
- `scrapesmith/twitter-x-scraper-tweets-profiles-replies` ha consegnato 805
  tweet utili a $0.000187 per tweet utile, con 10,7 al secondo & 36 campi per
  riga. [Vedi esecuzione](https://console.apify.com/view/runs/pQlQa0GMm7BWTUUOB)
- `kaitoeasyapi/twitter-x-data-tweet-scraper-pay-per-result-cheapest` ha
  consegnato 880 tweet utili a $0.000250 per tweet utile, con 9,1 al secondo &
  46 campi per riga.
  [Vedi esecuzione](https://console.apify.com/view/runs/3Fn8yvqncsWdcw1I2)
- `scraper_one/x-posts-search` ha consegnato 804 tweet utili a $0.000314 per
  tweet utile, con 3,3 al secondo & 14 campi per riga.
  [Vedi esecuzione](https://console.apify.com/view/runs/M9TgeCLLKZlNTOrj0)
- `danek/twitter-scraper` ha consegnato 807 tweet utili a $0.000347 per tweet
  utile, con 5,0 al secondo & 27 campi per riga.
  [Vedi esecuzione](https://console.apify.com/view/runs/kyeJqCeaARxQPGM5W)
- `tweetapi/twitter-x-search-scraper` ha consegnato 337 tweet utili a $0.000374
  per tweet utile, con 2,6 al secondo & 28 campi per riga.
  [Vedi esecuzione](https://console.apify.com/view/runs/mxkP8EDAUVtCZdobb)
- `api-ninja/x-twitter-advanced-search` ha consegnato 837 tweet utili a
  $0.000430 per tweet utile, con 7,4 al secondo & 28 campi per riga.
  [Vedi esecuzione](https://console.apify.com/view/runs/XAWKinvZyPNjCwrib)
- `apidojo/twitter-scraper-lite` ha consegnato 251 tweet utili a $0.000494 per
  tweet utile, con 12,9 al secondo & 54 campi per riga.
  [Vedi esecuzione](https://console.apify.com/view/runs/1t4XwmbQNTtwMJ0Ta)
- `apidojo/tweet-scraper` ha consegnato 481 tweet utili a $0.000832 per tweet
  utile, con 7,8 al secondo & 55 campi per riga.
  [Vedi esecuzione](https://console.apify.com/view/runs/PydoBgS1YRblg29bB)
- `xtdata/twitter-x-scraper` ha consegnato 1.378 tweet utili a $0.001168 per
  tweet utile, con 11,9 al secondo & 67 campi per riga.
  [Vedi esecuzione](https://console.apify.com/view/runs/U91dRXEvKvqu41aop)
- `seemuapps/x-tweet-scraper` ha consegnato 805 tweet utili a $0.001242 per
  tweet utile, con 6,9 al secondo & 24 campi per riga.
  [Vedi esecuzione](https://console.apify.com/view/runs/FstursEw43TbcipYU)
- `maximedupre/twitter-scraper` ha consegnato 46 tweet utili a $0.002846 per
  tweet utile, con 0,3 al secondo & 31 campi per riga.
  [Vedi esecuzione](https://console.apify.com/view/runs/Hs8irhEcAfWcQNc4w)

Ogni Actor ha eseguito la stessa ricerca & gli stessi filtri. Gli altri Actor
sono stati eseguiti il 2026-09-27. Le esecuzioni di Xquik hanno impostato
`outputVariant: "rich"` & sono state eseguite il 2026-09-29. Tutte le esecuzioni
hanno usato il livello Bronze. Un tweet utile è un post originale unico in
inglese con 10+ Mi piace. Il costo è la spesa totale del cliente per tweet
utile. Il nostro include l'uso di Apify che pagano i nostri clienti. Campi per
riga è la mediana dei campi non vuoti, inclusi quelli annidati. Un elenco conta
come 1 campo. Apri un'esecuzione per vederne input, log & dataset.

## Esecuzioni vuote, parziali & interrotte

X Tweet Scraper di Xquik spiega gratis le esecuzioni vuote, parziali &
interrotte. Lo stato dell'esecuzione dice perché si è fermata. Conta anche i
risultati addebitati & i target letti.

### Risultati vuoti

Controlla un risultato vuoto prima di pagare un'altra esecuzione. L'oggetto
`filtering` nei report & nella diagnostica finale conta le righe rimosse dai
tuoi filtri. Leggi `serverFilteredRows`, `actorFilteredRows` &
`pagesWithUnknownServerFiltering`. Non paghi mai addebiti sui risultati per le
righe filtrate. Un'esecuzione scrive 1 diagnostica con questi conteggi quando i
filtri dell'Actor hanno rimosso delle righe (`actorFilteredRows`). Le righe
escluse dai tuoi operatori di ricerca (`serverFilteredRows`), i post fuori dalla
tua finestra temporale & un'esecuzione che non ha ricevuto nessuna riga non
scrivono record. Lo stato dell'esecuzione dice perché & cosa cambiare, per
esempio una ricerca più ampia.

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
`target_not_found`, `target_suspended`, `target_protected`,
`search_unavailable`, `likes_hidden`, `target_failed`,
`pagination_safety_limit`, `reply_reach` & `deadline_reached`. L'esecuzione è
`retryable` quando lo è almeno una causa.

### Target mancanti & non disponibili

Un target mancante o protetto non è un errore. Lì X non ha nulla da leggere.
L'esecuzione legge fino in fondo tutti gli altri target. Riporta
`outcome: "complete"`. Il suo motivo di completamento viene dai target letti,
come `source_exhausted`. `failedSubtargets` esclude quei target. Il testo dello
stato & una diagnostica `complete` gratuita li contano. Un'esecuzione senza
altre righe scrive invece una diagnostica `zero-output`.

Una ricerca che X non riesce a eseguire conta come errore. Per una ricerca così
X mostra "Something went wrong". L'esecuzione la ferma subito, senza nuovi
tentativi. Anche i Mi piace che X nasconde contano come errori & si fermano
subito. X mostra chi ha messo Mi piace a un post solo al suo autore. Mostra i
post a cui un account ha messo Mi piace solo a quell'account.

Quando tutti gli errori riguardano target non disponibili, la diagnostica
imposta `retryable: false`. Controlla gli URL o i nomi utente dei target &
scegli account pubblici disponibili. Restringi una ricerca che X non riesce a
eseguire o cambiane i filtri. Al posto dei Mi piace nascosti, leggi utenti che
hanno fatto repost, risposte o post. Gli altri errori conservano le indicazioni
per riprovare i target non finiti.

La diagnostica nomina quei target in `unavailableTargets`. Ogni voce ha il
`target` come lo hai inserito, un `reason` & un `nextAction`. Il motivo è
`not_found`, `list_not_found`, `suspended`, `protected`, `search_unavailable` o
`likes_hidden`. `list_not_found` indica una lista che X non ha trovato, forse
perché privata. Una voce di ricerca può avere anche un `fix`, come l'operatore
da rimuovere. L'elenco contiene fino a 100 voci. Rimuovi quei target dal tuo
input.

### Limiti di sicurezza & di tempo

`completionReason: "pagination_safety_limit"` non è un errore di lettura.
L'esecuzione ha tenuto le righe valide. Poi ha chiuso un target che non
restituiva più risultati nuovi. L'esecuzione segnala un'estrazione incompleta.
`failedSubtargets` resta `0`. Paghi solo le righe consegnate.

Il timeout predefinito di Apify è `0`, quindi le esecuzioni non hanno limite di
tempo. L'Actor continua finché raggiunge il tuo limite o esaurisce i dati
idonei. Puoi comunque impostare un timeout finito su Apify. In quel caso
`completionReason: "deadline_reached"` indica che il limite è vicino. L'Actor
salva righe & report, poi termina in modo pulito prima del limite. Paghi ogni
riga consegnata una sola volta.

## Input

La scheda Input elenca ogni opzione. Indica almeno uno tra `startUrls`,
`twitterHandles`, `listIds`, `tweetIds`, `searchTerms` o `twitterContent`.
Funzionano anche i loro alias documentati. Tutti gli altri campi sono
facoltativi.

Ognuna di queste opzioni basta per un'esecuzione.

- Incolla l'URL di un post in Start URLs.
- Incolla l'URL di un profilo, oppure aggiungi il nome utente in X handles.
- Usa `from:user since:YYYY-MM-DD until:YYYY-MM-DD` come termine di ricerca per
  recuperare lo storico di un account.
- Incolla l'URL di una lista in Start URLs.
- Combina `twitterContent` con filtri come `from:`, `since:`, `min_faves:` &
  `filter:media` per ricerche avanzate.

### Principali operatori di ricerca supportati

| Operatore                | Esempio                   | Scopo                                        |
| ------------------------ | ------------------------- | -------------------------------------------- |
| `from:`                  | `from:elonmusk`           | Solo post di questo utente                   |
| `to:`                    | `to:OpenAI`               | Solo risposte a questo utente                |
| `@`                      | `@nasa`                   | Menzioni di questo utente                    |
| `list:`                  | `list:123456`             | Post dei membri della lista                  |
| `lang:`                  | `lang:en`                 | Filtra per lingua                            |
| `since:` / `until:`      | `since:2026-01-01`        | Intervallo di date                           |
| `min_faves:`             | `min_faves:100`           | Soglia di engagement                         |
| `min_retweets:`          | `min_retweets:50`         | Soglia di repost                             |
| `filter:media`           | `filter:media`            | Operatore di ricerca di X per i media        |
| `filter:videos`          | `filter:videos`           | Operatore di ricerca di X per i video        |
| `filter:images`          | `filter:images`           | Operatore di ricerca di X per le immagini    |
| `filter:links`           | `filter:links`            | Solo post con link                           |
| `filter:replies`         | `filter:replies`          | Solo risposte                                |
| `filter:quote`           | `filter:quote`            | Solo post di citazione                       |
| `filter:blue_verified`   | `filter:blue_verified`    | Solo utenti Premium                          |
| `-filter:replies`        | `-filter:replies`         | Nessuna risposta                             |
| `-filter:nativeretweets` | `-filter:nativeretweets`  | Nessun repost                                |
| `-filter:quote`          | `-filter:quote`           | Nessun post di citazione                     |
| `OR`                     | `(from:nasa OR from:esa)` | Post che corrispondono a uno dei due termini |
| `#`                      | `#bitcoin lang:en`        | Post con questo hashtag                      |

X non cerca più `filter:vine`, `filter:consumer_video`, `filter:pro_video`,
`filter:news` o `retweets_of:`. Una ricerca con uno di questi termina subito.
Una diagnostica gratuita indica la correzione. Tieni ogni query entro 512
caratteri. X non cerca oltre.

Le finestre di date includono il limite inferiore & escludono quello superiore.
L'Actor controlla entrambi i limiti prima di aggiungere o addebitare ogni post.

Per l'elenco completo degli operatori, consulta gli
[operatori di ricerca avanzata di Twitter](https://github.com/Xquik-dev/x-twitter-advanced-search)
di Xquik.

### Migra da un altro Actor di tweet

Incolla l'input che usi già. X Tweet Scraper di Xquik legge i nomi dei campi
usati da altri Actor che estraggono post. Li converte nei propri campi. I nomi
canonici restano il default documentato. Un alias non scarta mai un campo & non
cambia mai quanto paghi. Il modulo di input elenca solo i campi canonici, così
resta breve. Gli alias funzionano negli input JSON, API, SDK, di automazione &
dei task salvati.

Ogni riga nomina i campi che usi già, poi il campo a cui corrispondono.

- `startUrls`, `urls`, `tweetUrls`, `postUrls`, `profileUrls`, `accountUrls`
  corrispondono a `startUrls`.
- `profileUrl`, come stringa singola, corrisponde a `startUrls`.
- `tweetIds`, `tweetIDs`, `tweets`, `postIds`, `lookupPostIds`, `tweet_ids`, o
  `tweetId` come stringa singola corrispondono a `tweetIds`.
- `twitterHandles`, `usernames`, `user_names`, `userNameList`, `handles`,
  `screenNames`, `profileTweets` corrispondono a `twitterHandles`.
- `username`, `handle`, `screenName`, come stringa singola, corrispondono a
  `twitterHandles`.
- `searchTerms`, `searchQueries`, `queries`, `search`, come elenco o 1 ricerca
  per riga, corrispondono a `searchTerms`.
- `twitterContent`, `query`, `searchQuery` corrispondono a `twitterContent`.
- `maxItems`, `maxResults`, `max_results`, `resultsLimit`, `count`,
  `resultsCount`, `numberOfTweets`, `maxPosts`, `max_posts`, `max_items`,
  `maxTweets`, `tweetsDesired`, `maxTotalTweets` corrispondono a `maxItems`.
- `per_profile_limit` corrisponde a `maxItemsPerTarget`.
- `sort` corrisponde a `queryType`.
- `search_type`, `searchType`, `query_type`, `search_sort` corrispondono a
  `queryType` per `Top` & `Latest`, con maiuscole o minuscole. `Media`, `Photos`
  & `Videos` attivano `filter:media`, `filter:images` & `filter:videos`.
- `tweetLanguage`, `language`, `contentLanguage` corrispondono a `lang`.
- `author`, `fromUser` corrispondono a `from`.
- `inReplyTo`, `toUser` corrispondono a `to`.
- `mentioning` corrisponde a `@`.
- `start`, `startDate`, `timeSince` corrispondono a `since`.
- `end`, `endDate`, `timeUntil` corrispondono a `until`.
- `timeSinceUnix`, `sinceTime`, `timeUntilUnix`, `untilTime`, in secondi,
  corrispondono a `since_time`, `until_time`.
- `timeWithinTime`, `withinTime` corrispondono a `within_time`.
- `timeWindowHours`, `timeWindow` corrispondono a `within_time`, in ore & in
  giorni.
- `timeSinceId`, `sinceId`, `timeMaxId`, `maxId` corrispondono a `since_id`,
  `max_id`.
- `quickDateRange` del Google Search Scraper, come `d7`, `w2`, `m1` o `y`,
  corrisponde a `since_time`, contato a ritroso dall'avvio dell'esecuzione.
- `minimumFavorites`, `minLikes`, `min_likes`, `minFaves`, `engagementMinLikes`,
  `Minimum_likes` corrispondono a `min_faves`.
- `minimumRetweets`, `minRetweets`, `engagementMinRetweets` corrispondono a
  `min_retweets`.
- `minimumReplies`, `minReplies`, `engagementMinReplies`, `Minimum_replies`
  corrispondono a `min_replies`.
- `engagementMaxLikes`, `maxLikes`, `engagementMaxRetweets`, `maxRetweets`,
  `engagementMaxReplies` corrispondono a `engagement.maxLikes`,
  `engagement.maxRetweets`, `engagement.maxReplies`.
- `onlyImage`, `onlyImages`, `has_images` corrispondono a `filter:images`.
- `onlyVideo`, `onlyVideos`, `has_videos` corrispondono a `filter:videos`.
- `onlyWithMedia`, `mediaOnly` corrispondono a `filter:media`.
- `onlyQuote`, `onlyQuotes` corrispondono a `filter:quote`.
- `onlyTwitterBlue`, `usersBlueVerifiedOnly`, `blue_verified_only`,
  `onlyBlueVerified` corrispondono a `filter:blue_verified`.
- `engagementHasEngagement`, `hasEngagement` corrispondono a
  `filter:has_engagement`.
- `mediaHasLinks`, `has_links`, `requireLinks` corrispondono a `filter:links`.
- `mediaHasMentions`, `has_mentions`, `requireMentions` corrispondono a
  `filter:mentions`.
- `mediaHasHashtags`, `has_hashtags`, `requireHashtags` corrispondono a
  `filter:hashtags`.
- `mediaNewsOnly`, `mediaSafeContentOnly` corrispondono a `filter:news`,
  `filter:safe`.
- `mediaTypes`, con 1 tipo, corrisponde al campo `filter:` di quel tipo.
- `mediaSubtype` corrisponde a `filter:media`, `filter:images` o
  `filter:videos`.
- `includeNativeRetweets`, `includeRetweets` corrispondono a
  `include:nativeretweets`.
- `excludeReplies`, `excludeRetweets`, `includeRetweets` impostato su false,
  `tweetTypesExclude` corrispondono a `tweetTypes.excludeReplies`,
  `tweetTypes.excludeRetweets` & `tweetTypes.excludeQuotes`.
- `tweetTypes` come elenco con 1 tipo corrisponde a `tweetTypes.replies`,
  `tweetTypes.quotes` o `tweetTypes.nativeRetweets`.
- `tweetSubtype` corrisponde a `tweetTypes.replies` o `tweetTypes.quotes`.
  `self_threads` aggiunge l'operatore `filter:self_threads`.
- `geotaggedNear`, `geoNear` corrispondono a `near`.
- `withinRadius`, `geoWithinRadius`, `geoWithin` corrispondono a `within`.
- `geoGeocode` corrisponde a `geocode`.
- `tweetConversationId`, `tweetQuotedTweetId`, `tweetQuotedUserId` corrispondono
  a `conversation_id`, `quoted_tweet_id`, `quoted_user_id`.
- `cardName`, `tweetPollTypes` corrispondono a `card_name`.
- `search_query` corrisponde a `twitterContent`.
- `profile_urls` corrisponde a `startUrls` per i link, a `twitterHandles` per i
  nomi utente.
- `lookup_post_ids`, o `id` come stringa singola, corrispondono a `tweetIds`.
- `tweets` come 1 elenco separato da virgole corrisponde a `tweetIds`.

Alcuni campi non hanno qui un campo corrispondente. Ognuno aggiunge a ogni
ricerca dell'esecuzione l'operatore di ricerca di X che rappresenta. Il log
dell'esecuzione elenca all'inizio gli operatori aggiunti.

- `usersFromUsers`, `from_users`, `usersToUsers`, `to_users`, `usersListMembers`
  aggiungono `from:`, `to:` & `list:`. Più valori vengono eseguiti come
  alternative, come `(from:a OR from:b)`.
- `usersMentionUsers`, `mentioning_users` aggiungono `@name`.
- `usersExcludeFromUsers` aggiunge `-from:`.
- `onlyVerifiedUsers`, `usersVerifiedOnly`, `verified_only` aggiungono
  `filter:verified`.
- `placeObjectId`, `geoPlaceId`, `placeId`, `place` aggiungono `place:`.
- `cardDomain` aggiunge `card_domain:`.
- `appsSources`, `appsExcludeSources` aggiungono `source:` & `-source:`.
- `contentKeywords`, `contentExactPhrases`, `contentHashtags`,
  `contentCashtags`, ciascuno con 1 valore, aggiungono la parola, la frase tra
  virgolette, `#tag` & `$tag`.
- `contentExcludeKeywords`, `contentExcludeHashtags`, `exclude_words`,
  `hashtags_exclude` aggiungono `-word` & `-#tag`.
- Con `all_words` & `exact_phrases`, ogni parola & ogni frase deve
  corrispondere.
- `any_words`, `hashtags_any` aggiungono alternative, come `(#a OR #b)`.
- `contentQuestionMarks` aggiunge `?`.
- `contentEmoticons` aggiunge `:)` per `positive`, `:(` per `negative`.
- `tweet_type` aggiunge `filter:replies`, `filter:retweets` & le loro forme
  `-filter:`.

Le modalità scritte a parole corrispondono a `mode`. `Advanced Search`
corrisponde a `search`, `Get Tweet by ID` a `tweet`, `Get a Few Tweets` a
`tweets`, `Get Replies` a `replies`, `Get Quotes` a `quotes`, `Get Retweeters` a
`retweeters` & `Get Favoriters` a `favoriters`.

Un input incollato si comporta così.

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
- L'Actor non ha un campo `userId` o `user_ids`. Metti l'ID utente dove andrebbe
  un nome utente. Funziona in `twitterHandles`, negli URL dei profili & dopo
  `from:`.
- I campi degli operatori di ricerca come `from`, `min_faves`, `since_time` &
  `filter:images` usano già i nomi di X. Non serve convertirli.
- Un elenco che un altro Actor non definisce come «tutti i valori» o «uno
  qualsiasi» viene eseguito con 1 valore. Questi elenchi sono `contentKeywords`,
  `contentExactPhrases`, `contentHashtags`, `contentCashtags`,
  `usersMentionUsers`, `mediaTypes` & `tweetTypes`. Con più valori l'esecuzione
  si ferma prima di leggere o addebitare qualcosa. Il suo messaggio spiega come
  scriverli come 1 termine di ricerca.
- `search_type` impostato su `People` o `Lists`, `source_mode` impostato su
  `followers`, un preset di `engagementLevel` & la modalità `Get Similar Tweets`
  fermano l'esecuzione prima di leggere o addebitare qualcosa. Il messaggio
  nomina l'Actor o il campo da usare.
- `category` impostato su `tweets` o `info` non cambia nulla. Il compito di un
  altro Actor, come `followers`, `user_info` o `replies`, ferma l'esecuzione.
  Non legge & non addebita nulla. Il messaggio nomina quell'Actor.

### Input da Console & API

Il modulo della Console ha questi controlli.

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
  "id": "20",
  "text": "just setting up my twttr",
  "createdAt": "Tue Mar 21 20:50:14 +0000 2006",
  "retweetCount": 500,
  "replyCount": 120,
  "likeCount": 5000,
  "quoteCount": 80,
  "viewCount": 1200000,
  "bookmarkCount": 300,
  "lang": "en",
  "url": "https://x.com/jack/status/20",
  "author": {
    "id": "12",
    "username": "jack",
    "name": "jack",
    "followers": 6000000,
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
  "conversationId": "20"
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
  di X in un'esecuzione. Deduplicazione & limiti dei risultati valgono per
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
le
[opzioni di esecuzione](https://docs.apify.com/platform/actors/running/runs-and-builds)
& la
[documentazione dei task](https://docs.apify.com/platform/actors/running/tasks).

## Actor Xquik correlati

Ogni Actor Xquik usa lo stesso motore di estrazione, fattura dopo i filtri &
offre la stessa diagnostica. Scegli quello adatto ai dati che ti servono.

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
- [X (Twitter) Monitor](https://apify.com/xquik/x-twitter-monitor) rileva ogni
  nuovo tweet, risposta, citazione, repost & cambio di profilo degli account, di
  solito in meno di un secondo da quando X lo mostra, più i tweet per parola
  chiave & i follow. Usalo quando ti servono avvisi appena X mostra un tweet. Da
  $0.0045 per monitor-hour.

## FAQ

Le risposte alle domande più comuni, poi dove trovare assistenza.

### Serve una chiave API X?

No. Non ti servono chiave API X, login o credenziali.

### Cosa limita un'esecuzione?

Il tuo limite di elementi & il tuo limite di spesa su Apify fermano
l'esecuzione. Restano validi i limiti dell'account & della piattaforma Apify.

### Quanto è veloce?

Nel [benchmark](#benchmark), X Tweet Scraper di Xquik ha consegnato da 25,2 a
39,2 tweet utili al secondo. Il tempo di esecuzione dipende dal tuo input, dal
numero di risultati & dalla disponibilità di X.

### Le ricerche restituiscono ogni post corrispondente?

Sì, finché i risultati non finiscono o raggiungi `maxItems`. I risultati
contengono solo post che corrispondono alla tua query. Paghi ogni post una sola
volta.

### Quali operatori di ricerca funzionano?

La ricerca avanzata di X supporta autori, destinatari, menzioni, date,
engagement, media & posizione. Consulta i
[principali operatori di ricerca supportati](#principali-operatori-di-ricerca-supportati)
per gli esempi.

### Posso usare l'API di Apify per avviarlo?

Sì. Consulta la [scheda API](https://apify.com/xquik/x-tweet-scraper/api) per
esempi in Python, JavaScript & cURL.

### Posso pianificare estrazioni ricorrenti?

Sì. Usa la [pianificazione](https://docs.apify.com/platform/schedules) integrata
di Apify per avviare X Tweet Scraper di Xquik con un cron.

### Posso avere una soluzione personalizzata?

Sì. Descrivi ciò che ti serve nella
[scheda Issues](https://apify.com/xquik/x-tweet-scraper/issues). Xquik offre
anche una dashboard, un'API REST, un server MCP & webhook. Trovi il sito web di
Xquik sul suo [profilo Apify](https://apify.com/xquik).

### È legale estrarre i dati di X?

X Tweet Scraper di Xquik raccoglie campi pubblici di X. I risultati possono
contenere dati personali. Verifica di avere uno scopo lecito & rispetta le norme
sulla privacy che valgono per te. Nel dubbio, chiedi a un legale qualificato.

### Dove trovo assistenza?

Apri una issue nella
[scheda Issues](https://apify.com/xquik/x-tweet-scraper/issues) con l'ID
dell'esecuzione.
