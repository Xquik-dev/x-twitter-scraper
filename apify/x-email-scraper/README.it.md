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
i dati X più completi. X Email Scraper di Xquik ottiene le email che gli account
pubblicano sui propri profili X, senza cookie di X né login. La maggior parte
degli altri Actor Apify fa pagare prima di filtrare o deduplicare. Xquik fa
pagare solo i risultati consegnati, unici e conformi ai filtri.

Incolla nomi utente, scansiona i follower di un account o cerca utenti di X &
ottieni ogni profilo che pubblica un'email, con l'email per prima. Un profilo
senza email non viene consegnato & non costa nulla. Paghi **$0.00015 per riga
consegnata**. Apify fattura a parte l'uso della piattaforma.

> Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.
> "Twitter" e "X" sono marchi di X Corp.

## Dati di contatto su ogni riga

- La prima email che il profilo pubblica, in minuscolo.
- Il dominio di quell'email & il campo del profilo che la contiene, cioè bio,
  nome o posizione.
- Ogni email del profilo, anche quando è scritta come "name [at] site [dot]
  com".
- I numeri di telefono che il profilo pubblica, ad esempio un link WhatsApp.
- Il sito web & i link della bio del profilo, ognuno con la sua rete, ad esempio
  LinkedIn, GitHub o Telegram.
- Il profilo pubblico completo, con nome, bio, conteggi, verifica, date &
  immagini.
- 3 fonti in 1 esecuzione, cioè account, i loro follower o following, & ricerche
  di utenti.
- Filtri per dominio email, email aziendale, follower, età dell'account, bio &
  posizione.
- Nomi utente con o senza @, URL di x.com & twitter.com & ID utente numerici.
- Rimozione dei duplicati prima della fatturazione.
- Export JSON, CSV, Excel, XML & RSS tramite i dataset di Apify.
- Le esecuzioni riprendono dallo stato salvato dopo una migrazione di Apify.

## Come ottenere le email dai profili X

1. Apri X Email Scraper di Xquik in Apify Console.
2. Incolla nomi utente, URL di profilo o ID utente in `twitterHandles`, oppure
   aggiungi `searchTerms`.
3. Attiva `expandFollowers` per scansionare invece i follower di ogni account.
4. Imposta `maxItems` per limitare le righe consegnate, poi fai clic su Start.
5. Scarica il dataset in JSON, CSV o Excel, oppure usa l'API di Apify.

In nessun passaggio inserisci cookie di X, dati di login o una chiave API.

## Input

`twitterHandles` accetta ogni forma di un account, in qualsiasi combinazione.
L'esecuzione controlla ogni account & consegna quelli che pubblicano un'email.

```json
{
  "twitterHandles": ["sample_user", "@sample_org", "https://x.com/sample_shop"],
  "maxItems": 1000
}
```

`startUrls` & `userIds` accettano le stesse forme. Con `expandFollowers`,
l'esecuzione legge invece i follower di ogni account & tiene quelli che
pubblicano un'email. `expansionRelation` sceglie `Followers` o `Following`.

```json
{
  "twitterHandles": ["sample_org"],
  "expandFollowers": true,
  "expansionRelation": "Followers",
  "maxScan": 10000,
  "emailDomains": "example.com, example.org"
}
```

`searchTerms` cerca utenti di X per nome, nome utente o parole della bio. Ogni
termine è 1 ricerca.

```json
{
  "searchTerms": ["booking", "founder"],
  "businessEmailOnly": true,
  "minFollowers": 1000
}
```

Circa 1 follower su 400 pubblica un'email, quindi una scansione dei follower
legge molti più profili di quanti ne consegna. `maxScan` limita i profili che
l'esecuzione legge per ogni elenco o ricerca. Parte da 10.000. Lo stato
dell'esecuzione dice quante righe ha letto quando ferma lì un elenco, & tu alzi
`maxScan` per leggere oltre. I profili scansionati sono gratuiti.

`emailDomains` tiene i profili con un'email su un dominio elencato o su un suo
sottodominio. `businessEmailOnly` tiene i profili con un'email fuori dalle
webmail gratuite, come Gmail. `minFollowers`, `maxFollowers`,
`minAccountAgeDays`, `verifiedOnly`, `hasWebsite`, `hasLocation`, `bioContains`
& `locationContains` restringono ancora i profili. Ogni filtro agisce prima
della fatturazione.

`searchQueries` & `keyword` funzionano come altri nomi di `searchTerms`, &
`maxFollowersPerHandle` come altro nome di `maxScan`. Un account che l'input
nomina 2 volte viene consegnato & addebitato 1 volta sola. Le esecuzioni piccole
senza problemi saltano `run-report` & risparmiano uso di Apify. Attiva
`alwaysSaveRunRecords` per scriverlo a ogni esecuzione.

### Migra da un altro Actor di email

Incolla l'input che usi già. X Email Scraper di Xquik legge questi nomi di campo
di altri Actor. Ogni voce elenca i loro campi, poi il campo a cui corrispondono.

- `requireEmail` non richiede alcun campo. Ogni profilo consegnato pubblica
  un'email.
- `requireWebsite` corrisponde a `hasWebsite`. Tiene un profilo con qualsiasi
  link nel campo del sito web, & lo stato dell'esecuzione lo dice.
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

## Output

Ogni profilo che pubblica un'email è 1 riga del dataset. Per primi vengono i
dati di contatto, in `email`, `emailDomain`, `emailSource` & `contactInfo`.
Segue il profilo pubblico completo, con `id`, `username`, `name`, `description`,
`followers`, `following`, `verified`, `verifiedType`, `createdAt`,
`profilePicture` & altro. I campi di origine mancanti restano assenti. X Email
Scraper di Xquik non inventa valori.

Gli esempi usano valori fittizi. I risultati contengono dati live. Una riga ha
questo aspetto.

```json
{
  "email": "press@example.com",
  "emailDomain": "example.com",
  "emailSource": "bio",
  "contactInfo": {
    "emails": [
      {
        "value": "press@example.com",
        "domain": "example.com",
        "source": "bio"
      },
      {
        "value": "jane@example.org",
        "domain": "example.org",
        "source": "bio",
        "writtenAs": "jane [at] example [dot] org"
      }
    ],
    "phones": [
      {
        "value": "+14155550123",
        "source": "bio",
        "writtenAs": "+1 (415) 555-0123"
      }
    ],
    "links": [
      { "url": "https://example.com", "network": "website", "source": "url" }
    ]
  },
  "id": "1234567890",
  "username": "sample_user",
  "name": "Sample User",
  "description": "Press: press@example.com",
  "followers": 1200,
  "verified": true,
  "createdAt": "2017-03-21T20:50:14.000Z",
  "resultType": "profile",
  "sourceTarget": "sample_user"
}
```

`resultType` è `profile` per un account o un risultato di ricerca,
`profileFollower` per un follower & `profileFollowing` per un account che
qualcuno segue. `sourceTarget` nomina l'account o il termine di ricerca da cui
proviene la riga.

## Cosa significa l'email

Un'email è un indirizzo che l'account ha scritto sul proprio profilo, nella bio,
nel nome o nella posizione. L'Actor lo restituisce così come l'account lo ha
pubblicato & lo mette in minuscolo. Nulla verifica che l'indirizzo riceva posta,
& nulla legge il sito web a cui un profilo rimanda. `writtenAs` contiene la
grafia usata dall'account quando è diversa, come in "jane [at] example [dot]
org".

Un numero di telefono compare solo quando il profilo lo scrive in una forma che
non può essere nient'altro, come un link WhatsApp o un numero che inizia con +.
L'Actor non legge mai un anno, un conteggio o un prezzo come numero di telefono.

## Quanto costa ottenere le email dai profili X?

Su ogni piano Apify paghi $0.00015 per riga consegnata. Apify fattura a parte il
tuo uso della piattaforma.

- Un addebito per ogni riga di dati consegnata. La diagnostica in `diagnostics`
  è gratuita.
- Nessun costo di avvio o per ricerca.
- Un profilo senza email non aggiunge righe né addebiti.
- Un account che X non ha non aggiunge righe né addebiti.
- La deduplicazione avviene prima della fatturazione.
- Le impostazioni di Apify sull'addebito massimo totale limitano le righe
  consegnate.

Una scansione dei follower impiega un po' per trovare poche righe, perché legge
circa 350 profili al secondo & ne tiene circa 1 su 400. `maxScan` limita quel
tempo.

## Limiti & recupero

X Email Scraper di Xquik legge molti account, elenchi & ricerche in 1
esecuzione. Le righe consegnate & i progressi restano dopo un riavvio di Apify.
L'Actor non aggiunge un limite di tempo proprio. Rispetta qualsiasi timeout di
Apify che imposti.

Lo stato dell'esecuzione nomina gli account per cui X non ha corrispondenze & ti
dice di controllare nome utente, ID o URL. Nomina anche gli account sospesi.
Un'estrazione interrotta scrive una diagnostica `partial` gratuita. I risultati
disponibili restano intatti. Leggi `availableResults`, `failedTargets`,
`retryable` & `nextAction` prima di riprovare. Un'uscita riuscita dell'Actor
conferma la consegna, non l'estrazione completa.

Lo stato dell'esecuzione nomina ogni causa di un arresto anticipato.
`stopCauses` elenca ogni causa con i propri `message`, `retryable` &
`nextAction`. Le cause sono `scan_limit`, `target_not_found`,
`target_suspended`, `target_failed` & `deadline_reached`. Un target mancante o
sospeso o un elenco fermato a `maxScan` entra nell'elenco solo se un'altra causa
ha fermato l'esecuzione. L'esecuzione è `retryable` quando lo è almeno una
causa.

Un elenco che l'esecuzione ferma a `maxScan` non chiude in anticipo nessuna
esecuzione. Un'esecuzione con righe termina, & il suo stato dice quante righe ha
letto & di alzare `maxScan`. Non scrive alcuna diagnostica per questo, così
risparmi la scrittura di un record. Un report dell'esecuzione conta questi
elenchi in `scanLimitedTargets`.

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
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper)
  verifica dove hanno sede gli account con l'etichetta "Posizione account" di X,
  il modo in cui si sono collegati a X & i cambi di nome utente. Usalo quando ti
  serve verificare dove hanno sede gli account. Da $0.00015 per account.
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

No. X Email Scraper di Xquik non richiede cookie di X, chiave API, login o
credenziali. Ogni lettura avviene sull'infrastruttura di Xquik.

### Da dove vengono le email?

Vengono dal profilo stesso, cioè dalla bio, dal nome & dalla posizione che
l'account ha scritto. L'Actor non legge nessun post né nessun sito web
collegato, quindi ogni email è un indirizzo che l'account ha pubblicato sul
proprio profilo X.

### L'Actor verifica che un'email funzioni?

No. Restituisce ogni indirizzo così come l'account lo ha pubblicato. Nulla
verifica che l'indirizzo riceva posta.

### Perché una scansione dei follower ha consegnato poche righe?

Circa 1 follower su 400 pubblica un'email. Lo stato dell'esecuzione dice quante
righe ha letto di un elenco. Alza `maxScan` per leggere più a fondo un elenco,
oppure usa `searchTerms` con parole come booking, che tengono molte più righe.

### Quanti profili posso controllare in 1 esecuzione?

Tutti quelli che incolli. Un'esecuzione può restituire 100.000 righe & oltre.
Per un elenco più grande, porta `maxItems` sopra le 1.000 con cui parte il
modulo.

### È legale raccogliere email dai profili X?

X Email Scraper di Xquik raccoglie campi pubblici di X. I risultati contengono
dati personali. Verifica di avere uno scopo lecito, segui le norme su privacy &
email che si applicano a te & rispetta gli opt-out. Nel dubbio, chiedi a un
legale qualificato.

### Perché la mia esecuzione non ha restituito risultati?

Leggi prima lo stato dell'esecuzione. Lo stato di un'esecuzione vuota ti dice di
controllare nome utente, ID o URL di ogni account per cui X non ha
corrispondenze. Un profilo senza email non aggiunge righe. L'output gratuito
`diagnostics` compare quando qualcosa richiede attenzione. Il suo `stopCauses`
assegna a ogni causa un `nextAction` da seguire.

### Posso usare l'API, le pianificazioni & le integrazioni?

Sì. Usa l'API di Apify o l'API REST di Xquik. La
[scheda API](https://apify.com/xquik/x-email-scraper/api) ha esempi in Python,
JavaScript & cURL. Le
[pianificazioni](https://docs.apify.com/platform/schedules) di Apify avviano X
Email Scraper di Xquik con un cron. Gli agenti usano
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
