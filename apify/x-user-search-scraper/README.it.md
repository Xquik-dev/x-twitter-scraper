[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · **Italiano**

[![Framer collega Xquik MCP agli agenti di coding](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Guarda come Framer usa gli scraper Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
con Claude Code, Codex, Cursor & altro, da 6:07.

Xquik è il servizio di scraping X (Twitter) più veloce & economico al mondo, con
i dati X più completi. X User Search Scraper di Xquik trova utenti per nome
utente, bio & posizione. La maggior parte degli altri Actor Apify fa pagare
prima di filtrare o deduplicare. Xquik fa pagare solo i risultati consegnati,
unici e conformi ai filtri.

Fai una ricerca di utenti Twitter per nome, argomento, bio o posizione. Non ti
servono una chiave API X né il login. Paghi **$0.00015 per profilo consegnato**,
& Apify fattura a parte l'uso della piattaforma.

> Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.
> "Twitter" e "X" sono marchi di X Corp.

## Perché usare X User Search Scraper?

- **Prezzi nei suggerimenti di cashtag.** In modalità `autocomplete`, le righe
  dei cashtag riportano `price`, `marketCap` & `dailyChangePercent`.
- **Solo account raggiungibili.** Tieni i profili che pubblicano un'email,
  un'email aziendale o un sito web. `emailDomains` tiene le email dei domini che
  elenchi.
- **Restringi al tuo pubblico.** Filtra per follower, post, età dell'account,
  verifica, posizione, bio & nome utente.
- **Riprendi da dove ti eri fermato.** Passa un cursore salvato in `startCursor`
  per continuare 1 query.

### Risultati completi

- Ogni risultato riporta i dati più completi che X ha a disposizione.

### Righe accurate

- Ogni ID in una riga resta esatto.
- I badge di verifica corrispondono a quelli che mostra `x.com`.
- Le righe contengono solo dati pubblici.
- Annunci & contenuti sponsorizzati non arrivano mai nelle tue righe.

### Dati aggiornati

- Le letture continuano a funzionare quando X rilascia modifiche.

### Velocità

- Una pagina lenta non blocca la tua esecuzione.
- Le letture finiscono appena arrivano le loro righe.
- Le chiamate agli Actor che si bloccano riprendono da sole.

### Fatturazione equa

- Un input errato non costa nulla & ti dice cosa correggere.
- Gli Actor fanno pagare solo le righe consegnate, uniche & conformi ai filtri.
- Un'esecuzione riavviata non addebita mai due volte.
- Le esecuzioni restano entro il tuo limite di spesa & scrivono comunque la loro
  diagnostica.

### Affidabilità

- Un errore isolato non fa fallire la tua esecuzione.
- Quando scade il tempo, ricevi le righe già trovate con la diagnostica.
- Gli Actor resistono ai brevi disservizi di Xquik.
- Le esecuzioni degli Actor superano i riavvii senza ripetere nulla.
- Una riga errata non fa fallire il lotto.
- Le esecuzioni interrotte conservano le loro righe & il loro report.
- Un'esecuzione che non riesce a partire spiega comunque perché.
- Il supporto può vedere esattamente cosa ha restituito una richiesta o
  un'esecuzione.

### Pensato per gli agenti

- Gli Actor accettano input scritti per altri Actor.
- Ogni esecuzione dice perché è finita & se conviene riprovare.

### Controlli di qualità

- Ogni campo che X mostra è fornito, escluso di proposito o dimostrato assente.
- Xquik testa ogni lettura dal vivo su X.

## Quali dati può estrarre X User Search Scraper?

- Il profilo pubblico di ogni account trovato, con nome, bio, conteggi &
  verifica.
- `sourceTarget`, il termine di ricerca che ha trovato il profilo.
- `email` & `contactInfo` con le email, i telefoni & i link che ogni profilo
  pubblica.
- `mode: "autocomplete"`, con gli account, gli argomenti, gli hashtag & i
  cashtag che X suggerisce per ogni termine di ricerca.

## Come cercare utenti su X

Non usi ancora Apify?
[Crea prima un account gratuito](https://console.apify.com/sign-up?fpr=xquik).
Il piano gratuito non richiede carta di credito & offre $5 da spendere ogni
mese. A $0.00015 per profilo, $5 coprono fino a 33.000 profili, senza contare
l'uso della piattaforma. Poi torna qui & premi Try for free.

1. Apri X User Search Scraper di Xquik in Apify Console.
2. Inserisci nomi, argomenti, bio o posizioni in `searchTerms`.
3. Aggiungi filtri come `minFollowers`, `verifiedOnly` o `locationContains`.
4. Imposta `maxItems` per limitare i profili consegnati, poi fai clic su Start.
5. Scarica il dataset in JSON, CSV o Excel, oppure usa l'API di Apify.

## Input

```json
{
  "searchTerms": ["artificial intelligence", "machine learning"],
  "minFollowers": 1000,
  "maxItems": 10000
}
```

Le esecuzioni piccole senza problemi saltano `run-report` & risparmiano uso di
Apify. Attiva `alwaysSaveRunRecords` per scriverlo a ogni esecuzione.

### Migra da un altro Actor di ricerca utenti

Incolla l'input che usi già. X User Search Scraper di Xquik legge questi nomi di
campo di altri Actor. Ogni voce elenca i loro campi, poi il campo a cui
corrispondono.

- `requireEmail`, `requireWebsite` corrispondono a `hasEmail`, `hasWebsite`.
- In `verification`, `any_verified` imposta `verifiedOnly`, `blue_verified`
  imposta `blueVerifiedOnly`, `business` & `government` impostano
  `verifiedType`. `unverified` ferma l'esecuzione prima di leggere o addebitare
  qualcosa.
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

Quando imposti uno di questi nomi & il suo campo canonico, vince il valore
canonico. Il log dell'esecuzione nomina il campo scartato.

## Completamento automatico della ricerca

Imposta `mode` su `autocomplete` per leggere cosa suggerisce X mentre qualcuno
scrive. Ogni termine di ricerca restituisce account, argomenti, hashtag &
cashtag suggeriti.

```json
{
  "searchTerms": ["nasa", "$tsla"],
  "mode": "autocomplete",
  "suggestionTypes": ["users", "cashtags"],
  "maxItems": 100
}
```

- Inizia un termine con `#` per gli hashtag o con `$` per i cashtag.
- `suggestionTypes` tiene solo i tipi che scegli.
- Ogni riga indica il suo `suggestionType` & il testo da cercare in
  `suggestion`.
- Una riga di cashtag riporta `price`, `marketCap` & `dailyChangePercent`.
- I filtri sui profili valgono solo per `mode: "search"`.

Una riga di suggerimento ha questo aspetto.

```json
{
  "suggestionType": "user",
  "suggestion": "@sample_user",
  "username": "sample_user",
  "name": "Sample User",
  "verified": true,
  "sourceTarget": "sample"
}
```

## Output

Ogni riga contiene un profilo & la query di origine in `sourceTarget`.

Gli esempi usano valori fittizi. I risultati contengono dati live. Una riga di
profilo ha questo aspetto.

```json
{
  "username": "sample_user",
  "name": "Sample User",
  "description": "Sample bio about artificial intelligence",
  "followers": 2500,
  "verified": false,
  "sourceTarget": "artificial intelligence"
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

## Quanto costa cercare utenti su X?

Su ogni piano Apify paghi $0.00015 per profilo consegnato. Un suggerimento di
completamento automatico costa lo stesso per riga consegnata. Apify fattura a
parte il tuo uso della piattaforma.

Per volumi maggiori,
[scegli un piano Apify](https://apify.com/pricing?fpr=xquik) con più uso
prepagato.

- Un addebito per ogni riga di dati consegnata. La diagnostica in `diagnostics`
  è gratuita.
- Nessun costo di avvio, per query o per pagina.
- Filtri & deduplicazione avvengono prima della fatturazione.

## Limiti & recupero

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

### Serve una chiave API X o il login?

No. X User Search Scraper di Xquik non richiede chiave API X, login o
credenziali.

### È legale estrarre gli account di X?

X User Search Scraper di Xquik raccoglie campi pubblici di X. I risultati
possono contenere dati personali. Verifica di avere uno scopo lecito & rispetta
le norme sulla privacy applicabili. Nel dubbio, chiedi a un legale qualificato.

### Perché la mia esecuzione non ha restituito risultati?

Leggi prima lo stato dell'esecuzione. Lo stato di un'esecuzione vuota ti dice di
controllare target & filtri. L'output gratuito `diagnostics` compare quando
qualcosa richiede attenzione. Il suo `stopCauses` assegna a ogni causa un
`nextAction` da seguire.

### Posso usare l'API, le pianificazioni & le integrazioni?

Sì. Scegli tra 50 task pubblici o l'API REST di Xquik. La
[scheda API](https://apify.com/xquik/x-user-search-scraper/api) ha esempi in
Python, JavaScript & cURL. Le
[pianificazioni](https://docs.apify.com/platform/schedules) di Apify avviano X
User Search Scraper di Xquik con un cron. Gli agenti usano
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Usa `latest`, a
meno che non ti serva una build precedente.

### Dove trovo assistenza?

Apri una issue nella
[scheda Issues](https://apify.com/xquik/x-user-search-scraper/issues) con l'ID
dell'esecuzione. La diagnostica gratuita nel key-value store spiega le
esecuzioni che richiedono attenzione. Un'esecuzione che non riceve nessuna riga
ne spiega il motivo nel suo stato.

### Posso avere una soluzione personalizzata?

Sì. Descrivi ciò che ti serve nella
[scheda Issues](https://apify.com/xquik/x-user-search-scraper/issues). Xquik
offre anche una dashboard, un'API REST, un server MCP & webhook. Trovi il sito
web di Xquik sul suo [profilo Apify](https://apify.com/xquik).
