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
i dati X più completi. X Account Location Scraper di Xquik controlla dove hanno
sede gli account X, senza cookie di X né login. La maggior parte degli altri
Actor Apify fa pagare prima di filtrare o deduplicare. Xquik fa pagare solo i
risultati consegnati, unici e conformi ai filtri.

Incolla nomi utente, URL di profilo o ID utente & ottieni l'etichetta "Posizione
account" di X per ogni account in 1 esecuzione. L'etichetta è la migliore stima
di X del paese o della regione di un account. Non è nazionalità, residenza o
posizione esatta. Paghi **$0.00015 per riga consegnata**. Apify fattura a parte
l'uso della piattaforma.

> Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.
> "Twitter" e "X" sono marchi di X Corp.

## Dati dell'account su ogni riga

- L'etichetta "Posizione account" di X, come paese o regione.
- Il codice ISO di 2 lettere di quel paese.
- Se X segnala che l'etichetta potrebbe non essere accurata.
- Come l'account si è collegato a X la prima volta, ad esempio Web o il paese di
  un app store.
- La piattaforma & il codice paese di quella connessione.
- Quante volte l'account ha cambiato nome utente & quando l'ha fatto l'ultima
  volta.
- L'organizzazione a cui X mostra che l'account è affiliato.
- L'età dell'account in giorni & un link al suo profilo.
- Il profilo pubblico completo, con nome, bio, conteggi, verifica, date &
  immagini.
- Una seconda lettura di ogni account di cui X trattiene l'etichetta, senza
  costi aggiuntivi.
- Molti account in 1 esecuzione, letti in parallelo & consegnati nell'ordine
  dell'input.
- Nomi utente con o senza @, URL di x.com & twitter.com & ID utente numerici.
- Rimozione dei duplicati prima della fatturazione.
- Export JSON, CSV, Excel, XML & RSS tramite i dataset di Apify.
- Le esecuzioni riprendono dallo stato salvato dopo una migrazione di Apify.

## Come controllare dove hanno sede gli account X

1. Apri X Account Location Scraper di Xquik in Apify Console.
2. Incolla nomi utente, URL di profilo o ID utente in `twitterHandles`.
3. Imposta `maxItems` per limitare le righe consegnate, poi fai clic su Start.
4. Scarica il dataset in JSON, CSV o Excel, oppure usa l'API di Apify.

In nessun passaggio inserisci cookie di X, dati di login o una chiave API.

## Input

`twitterHandles` accetta ogni forma di un account, in qualsiasi combinazione.

```json
{
  "twitterHandles": [
    "BBCWorld",
    "@OpenAI",
    "https://x.com/NASA",
    "https://twitter.com/github",
    "11348282"
  ],
  "maxItems": 1000
}
```

`startUrls` & `userIds` accettano le stesse forme. `startUrls` accetta ogni URL
come stringa semplice o come oggetto `{ "url": "..." }`.

```json
{
  "startUrls": ["https://x.com/nasa", { "url": "https://x.com/OpenAI" }],
  "userIds": ["742143"]
}
```

Un ID utente resta lo stesso quando un account cambia nome utente, quindi usa
`userIds` per gli elenchi che conservi. `userNames` funziona come altro nome di
`twitterHandles`.

Un account che l'input nomina 2 volte viene consegnato & addebitato 1 volta
sola, anche quando 1 voce è il suo nome utente & l'altra il suo ID utente.
`maxItems` tiene i primi account dell'input. Le esecuzioni piccole senza
problemi saltano `run-report` & risparmiano uso di Apify. Attiva
`alwaysSaveRunRecords` per scriverlo a ogni esecuzione.

## Output

Ogni account è 1 riga del dataset. Per primo viene ciò che mostra la pagina
"Info sull'account" di X, in `accountBasedIn`, `accountBasedInUnavailable`,
`accountBasedInAccurate`, `affiliateUsername`, `connectedVia`,
`connectedViaAccurate` & `usernameChanges`. Segue il profilo pubblico completo,
con `id`, `username`, `name`, `description`, `followers`, `following`,
`verified`, `verifiedType`, `createdAt`, `profilePicture` & altro. Per ultimi
vengono 5 campi che l'Actor ricava dal profilo. Sono
`accountBasedInCountryCode`, `connectedViaPlatform`, `connectedViaCountryCode`,
`accountAgeDays` & `profileUrl`. I campi di origine mancanti restano assenti, &
un codice che l'Actor non riesce ad abbinare resta fuori. X Account Location
Scraper di Xquik non inventa valori.

Gli esempi usano valori fittizi. I risultati contengono dati live. Una riga ha
questo aspetto.

```json
{
  "accountBasedIn": {
    "value": "United Kingdom",
    "level": "country",
    "observedAt": "2026-10-12T09:00:00.000Z"
  },
  "accountBasedInAccurate": true,
  "affiliateUsername": "sample_org",
  "connectedVia": "Web",
  "usernameChanges": {
    "count": 1,
    "lastChangedAt": "2021-03-04T10:00:00.000Z"
  },
  "id": "1234567890",
  "username": "sample_user",
  "name": "Sample User",
  "followers": 1200,
  "verified": true,
  "createdAt": "2017-03-21T20:50:14.000Z",
  "accountBasedInCountryCode": "GB",
  "connectedViaPlatform": "web",
  "accountAgeDays": 3491,
  "profileUrl": "https://x.com/sample_user",
  "resultType": "profile",
  "sourceTarget": "sample_user"
}
```

Una riga distingue 3 casi.

| La riga contiene                  | Significa                                           | Cosa fare                            |
| --------------------------------- | --------------------------------------------------- | ------------------------------------ |
| `accountBasedIn` con un `value`   | X mostra questa etichetta per l'account.            | Usala.                               |
| `accountBasedIn: null`            | X non mostra alcuna etichetta per questo account.   | Niente. X non ne ha una da mostrare. |
| `accountBasedInUnavailable: true` | X ha trattenuto l'etichetta in entrambe le letture. | Riesegui l'account più tardi.        |

Quando X trattiene un'etichetta, l'esecuzione legge quell'account 1 altra volta
prima di consegnare la riga. La seconda lettura è gratuita. Un'etichetta ancora
trattenuta è sconosciuta, non assente. Una riga così riporta il profilo pubblico
senza i campi di "Info sull'account", & lo stato dell'esecuzione conta questi
account. Ognuno dei 3 casi è 1 riga consegnata.

## Cosa significa l'etichetta

X deduce `accountBasedIn` dagli IP aggregati di accesso all'account. L'etichetta
non indica nazionalità, residenza, identità, iscrizione, post o posizione
esatta. `level` dice se X mostra un paese o una regione più ampia. `observedAt`
registra il momento del recupero. `accountBasedInAccurate` è `false` quando X
segnala che l'etichetta potrebbe non essere accurata. `connectedVia` dice come
l'account si è collegato a X la prima volta, & `connectedViaAccurate` è `false`
quando X segnala che il suo paese potrebbe non essere accurato.
`connectedViaPlatform` è `web`, `ios` o `android`. I 2 codici paese derivano dai
nomi che X scrive, quindi una regione non ne ha. `location` è il testo che il
proprietario dell'account ha scritto nel profilo, ed è un campo diverso.

## Quanto costa controllare la posizione degli account X?

Su ogni piano Apify paghi $0.00015 per riga consegnata. Apify fattura a parte il
tuo uso della piattaforma.

- Un addebito per ogni riga di dati consegnata. La diagnostica in `diagnostics`
  è gratuita.
- Nessun costo di avvio o per ricerca.
- Un account che X non ha non aggiunge righe né addebiti.
- La seconda lettura di un'etichetta trattenuta non costa nulla in più.
- La deduplicazione avviene prima della fatturazione.
- Le impostazioni di Apify sull'addebito massimo totale limitano le righe
  consegnate.

## Limiti & recupero

X Account Location Scraper di Xquik legge molti account in 1 esecuzione. Le
righe consegnate & i progressi restano dopo un riavvio di Apify. L'Actor non
aggiunge un limite di tempo proprio. Rispetta qualsiasi timeout di Apify che
imposti.

Lo stato dell'esecuzione nomina gli account per cui X non ha corrispondenze & ti
dice di controllare nome utente, ID o URL. Nomina anche gli account sospesi.
Un'estrazione interrotta scrive una diagnostica `partial` gratuita. I risultati
disponibili restano intatti. Leggi `availableResults`, `failedTargets`,
`retryable` & `nextAction` prima di riprovare. Un'uscita riuscita dell'Actor
conferma la consegna, non l'estrazione completa.

Lo stato dell'esecuzione nomina ogni causa di un arresto anticipato.
`stopCauses` elenca ogni causa con i propri `message`, `retryable` &
`nextAction`. Le cause sono `target_not_found`, `target_suspended`,
`target_failed` & `deadline_reached`. Un target mancante o sospeso entra
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
  follower, following, membri & follower delle liste e membri delle community
  come righe di profilo. Usalo quando ti servono elenchi di pubblico o di
  membri. Da $0.00015 per profilo.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper) cerca
  utenti per nome utente, bio & posizione con filtri su follower, verifica, età
  & posizione. Usalo quando costruisci elenchi di account dalla ricerca. Da
  $0.00015 per profilo.
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

### Servono cookie di X, una chiave API o il login?

No. X Account Location Scraper di Xquik non richiede cookie di X, chiave API,
login o credenziali. Ogni lettura avviene sull'infrastruttura di Xquik.

### L'etichetta mostra dove vive il proprietario dell'account?

No. È la migliore stima di X per l'account. Non indica nazionalità, residenza o
posizione esatta, & X stessa segnala alcune etichette come potenzialmente
inaccurate.

### Perché una riga riporta `accountBasedInUnavailable`?

X ha trattenuto l'etichetta in entrambe le letture dell'esecuzione. L'etichetta
è sconosciuta, non assente. Riesegui l'account più tardi per ottenerla.
`accountBasedIn: null` è diverso. X non mostra alcuna etichetta per
quell'account.

### Quanti account posso controllare in 1 esecuzione?

Tutti quelli che incolli. Un'esecuzione può restituire 100.000 righe & oltre.
Per un elenco più grande, porta `maxItems` sopra le 1.000 con cui parte il
modulo.

### È legale controllare dove hanno sede gli account X?

X Account Location Scraper di Xquik raccoglie campi pubblici di X. I risultati
possono contenere dati personali. Verifica di avere uno scopo lecito & rispetta
le norme sulla privacy applicabili. Nel dubbio, chiedi a un legale qualificato.

### Perché la mia esecuzione non ha restituito risultati?

Leggi prima lo stato dell'esecuzione. Lo stato di un'esecuzione vuota ti dice di
controllare nome utente, ID o URL di ogni account per cui X non ha
corrispondenze. L'output gratuito `diagnostics` compare quando qualcosa richiede
attenzione. Il suo `stopCauses` assegna a ogni causa un `nextAction` da seguire.

### Posso usare l'API, le pianificazioni & le integrazioni?

Sì. Usa l'API di Apify o l'API REST di Xquik. La
[scheda API](https://apify.com/xquik/x-account-location-scraper/api) ha esempi
in Python, JavaScript & cURL. Le
[pianificazioni](https://docs.apify.com/platform/schedules) di Apify avviano X
Account Location Scraper di Xquik con un cron. Gli agenti usano
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Usa `latest`, a
meno che non ti serva una build precedente.

### Dove trovo assistenza?

Apri una issue nella pagina dell'Actor o scrivi a <support@xquik.com> con l'ID
dell'esecuzione. La diagnostica gratuita nel key-value store spiega le
esecuzioni che richiedono attenzione. Un'esecuzione che non riceve alcuna riga
dice perché nel suo stato.

### Posso avere una soluzione personalizzata?

Sì. Visita [xquik.com](https://xquik.com) o leggi la
[documentazione API](https://docs.xquik.com/introduction). Copre dashboard, API,
server MCP & webhook.
