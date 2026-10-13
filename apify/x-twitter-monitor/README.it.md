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
i dati X più completi. X (Twitter) Monitor di Xquik invia avvisi Twitter per gli
account & le parole chiave che scegli. Rileva ogni nuovo tweet, risposta,
citazione, repost & modifica del profilo di un account sorvegliato. Di solito
rileva ciascuno in meno di un secondo da quando X lo mostra. Per una parola
chiave, rileva ogni nuovo tweet che mostra la ricerca Più recenti di X. Rileva
anche follow & follower. Ogni evento arriva su Discord, Telegram, Slack o sul
tuo webhook come avviso. La maggior parte degli altri Actor Apify fa pagare
prima di filtrare o deduplicare. Xquik fa pagare solo i risultati consegnati e
unici, & qui solo le ore in cui un monitor sorveglia.

Incolla account o parole chiave & fai clic su Start. Il monitoraggio parte
subito, & gli avvisi arrivano tra un'esecuzione e l'altra. Paghi **$0.0045 per
monitor-hour**. Eventi & avvisi sono gratuiti, & Apify fattura a parte l'uso
della piattaforma.

> Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.
> "Twitter" e "X" sono marchi di X Corp.

## Cosa invia il monitor di Twitter

- Ogni nuovo tweet, risposta, citazione & repost degli account che sorvegli, di
  solito rilevato in meno di un secondo da quando X lo mostra.
- Ogni nuovo tweet che la ricerca Più recenti di X mostra per la tua parola
  chiave, con qualsiasi operatore di ricerca di X.
- Tweet eliminati, video in diretta & Spazi che un account avvia.
- Modifiche del profilo, come nome visualizzato, nome utente, bio, foto del
  profilo, immagine di intestazione, posizione, sito web, verifica, protezione,
  tweet fissato & disponibilità, anche queste di solito rilevate in meno di un
  secondo da quando X le mostra.
- Gli account che ogni account sorvegliato segue o smette di seguire.
- Follower nuovi & persi di ogni account sorvegliato, in `eventTypes`.
- Tweet con menzioni, hashtag, media, link o sondaggi, & tweet lunghi, in
  `eventTypes`.
- L'evento completo, cioè il tweet con autore, conteggi & media, oppure la
  modifica.
- L'ID utente X permanente accanto al nome utente attuale, così un account
  rinominato mantiene il suo monitor.
- Avvisi su Slack & Discord nel loro formato di messaggio, su Telegram & su
  qualsiasi webhook HTTPS come JSON firmato.
- Un avviso di prova a ogni nuovo URL di webhook, Slack o Discord, con la sua
  risposta nello stato dell'esecuzione. Telegram conferma nella chat quando
  premi Start.
- Ogni evento nel dataset dell'esecuzione & in 1 dataset di cronologia per task
  salvato o nome del monitor.

## Come configurare gli avvisi Twitter per parole chiave

1. Apri X (Twitter) Monitor di Xquik in Apify Console.
2. Incolla nomi utente in `twitterHandles`, o ricerche X in `searchTerms`.
3. Scegli gli eventi che inviano un avviso. Nuovi tweet, risposte, citazioni &
   repost sono attivi per impostazione predefinita.
4. Incolla URL di webhook in `webhookUrls`, o attiva `telegram`.
5. Fai clic su Start. Il monitoraggio inizia in quell'esecuzione.
6. Aggiungi una pianificazione che esegua l'Actor ogni ora, con lo stesso input.

Ogni esecuzione successiva addebita le ore sorvegliate dall'esecuzione
precedente. Salva i nuovi eventi nel suo dataset & termina in fretta. Un monitor
senza esecuzioni per 24 ore va in pausa. I tuoi avvisi ti avvertono 4 ore prima.
L'esecuzione successiva lo riprende & addebita prima le ore non pagate.

Lo stesso input continua gli stessi monitor. Un input modificato li aggiorna. Un
task salvato mantiene 1 gruppo di monitor. Senza task, `monitorName` dà il nome
al gruppo, quindi 2 nomi tengono separati 2 gruppi.

## Avvisi Twitter su Discord, Telegram & Slack

- **Discord.** Incolla l'URL del webhook di un canale in `webhookUrls`. Ogni
  avviso arriva come messaggio Discord, senza bot da ospitare.
- **Telegram.** Attiva `telegram`. Lo stato dell'esecuzione ti dà un link al bot
  Telegram di Xquik. Aprilo & premi Start, & gli avvisi arrivano in quella chat.
- **Slack.** Incolla l'URL di un webhook in entrata. Ogni avviso arriva come
  messaggio Slack.
- **Qualsiasi app.** Incolla un URL HTTPS. Ogni avviso arriva come JSON firmato,
  lo stesso evento che contiene il dataset.

Ogni nuovo URL di webhook, Slack o Discord riceve un avviso di prova
nell'esecuzione che lo aggiunge, & la pagina di stato dice se è arrivato.
Telegram non invia avvisi di prova. Il bot risponde nella chat quando premi
Start, & l'esecuzione successiva mostra Telegram come collegato.

## Input

| Campo                                | Cosa fa                                                                                         |
| ------------------------------------ | ----------------------------------------------------------------------------------------------- |
| `twitterHandles`                     | Nomi utente con o senza @, o URL di profili x.com, 1 per riga.                                  |
| `searchTerms`                        | Ricerche X, come `"x api" lang:en`. Ogni ricerca è 1 monitor.                                   |
| `monitorName`                        | Dà il nome a questo gruppo di account & parole chiave, per le esecuzioni senza task salvato.    |
| `newPosts`                           | Ogni nuovo tweet. Attivo per impostazione predefinita.                                          |
| `replies`, `quotes`, `reposts`       | Risposte, tweet di citazione & repost. Attivi per impostazione predefinita.                     |
| `deletedPosts`, `liveVideos`         | Tweet eliminati, video in diretta & Spazi degli account.                                        |
| `profileChanges`, `followingChanges` | Modifiche del profilo, follow & unfollow degli account.                                         |
| `eventTypes`                         | Tipi di evento esatti, che sostituiscono le caselle, come le variazioni dei follower & i media. |
| `webhookUrls`                        | URL HTTPS, 1 per riga. L'Actor riconosce gli URL di Slack & Discord.                            |
| `telegram`                           | Invia gli avvisi su Telegram tramite un link che ti dà l'esecuzione.                            |
| `since`                              | Salva 1 volta gli eventi conservati da una data negli ultimi 30 giorni.                         |
| `stop`                               | Ferma il monitor & disattiva gli avvisi.                                                        |

1 input accetta fino a 100 account & parole chiave. Le parole chiave inviano
solo eventi di tweet. Metti una frase tra virgolette per trovarla esatta, come
in `"x api"`. Senza virgolette, le parole possono comparire in qualsiasi punto
di un tweet. Per rilevare le menzioni di un account, aggiungi la parola chiave
`@username`. Telegram non richiede nome utente né ID della chat. Lo stato
dell'esecuzione ti dà un link. Aprilo & premi Start, & gli avvisi arrivano in
quella chat.

Questi input sono pronti da copiare.

```json
{ "twitterHandles": ["NASA", "SpaceX"], "reposts": false }
```

```json
{
  "searchTerms": ["\"your brand\" -from:yourbrand"],
  "webhookUrls": "https://hooks.slack.com/services/T000/B000/XXXX",
  "monitorName": "brand-mentions"
}
```

```json
{ "twitterHandles": ["elonmusk"], "profileChanges": true, "telegram": true }
```

## Output

Ogni esecuzione restituisce 4 output.

- **Pagina di stato**, il record `STATUS.html`. Mostra se il monitor sorveglia,
  l'unico passo successivo con un pulsante, cosa ha salvato & addebitato
  l'esecuzione, i target & ogni destinazione degli avvisi. La scheda Output la
  mostra.
- **Record di stato**, il record `STATUS`. Contiene lo stesso stato in JSON.
- **Nuovi eventi**, il dataset dell'esecuzione. Contiene ogni nuovo evento, dal
  più vecchio, & 1 riga di stato alla fine.
- **Diagnostica**, che l'Actor scrive solo quando qualcosa richiede attenzione.

Una riga evento è l'evento esattamente come lo restituisce l'API REST di Xquik,
con ogni campo.

```json
{
  "resultType": "event",
  "id": "981",
  "type": "tweet.new",
  "occurredAt": "2026-10-13T09:00:01.000Z",
  "monitorId": "2944",
  "monitorType": "account",
  "username": "NASA",
  "xUserId": "11348282",
  "data": { "tweetId": "1977000000000000000", "text": "Liftoff!" }
}
```

I valori di esempio mostrano la struttura. I dati live sono diversi.

Il record di stato contiene `state`, `targets`, `destinations`, `eventsSaved`,
`pendingEvents`, `hoursCharged`, `chargedUsd`, `chargeConfirmed`, `hoursOwed`,
`paidThrough`, `pausesAt`, `historyDataset`, `notices`, `nextStep`,
`nextStepAction` & `nextStepUrl`. Un target che X non ha lo indica nel suo
`message`, & il monitor sorveglia il resto. Un nuovo webhook generico mostra il
suo segreto di firma 1 sola volta, solo nel record di stato.

Il dataset di cronologia nel tuo account conserva ogni evento del monitor,
ognuno 1 volta. Il suo nome inizia con `x-monitor-`.

## Per agenti AI

1 chiamata è tutta l'API. Ogni chiamata avvia o aggiorna il monitor, addebita le
ore sorvegliate dalla chiamata precedente & restituisce solo ciò che è nuovo.
Nessuna chiamata addebita un'ora 2 volte. Una chiamata che avvia o aggiorna un
monitor termina in fretta, entro il tempo di attesa dell'MCP di Apify. Uno stop
richiede circa mezzo minuto, perché prima raccoglie gli ultimi eventi. Leggi il
suo risultato dall'esecuzione quando il tuo strumento smette di aspettare.

Questo input avvia o continua un monitor.

```json
{
  "twitterHandles": ["NASA"],
  "searchTerms": ["\"x api\" lang:en"],
  "monitorName": "agent-demo"
}
```

Una chiamata restituisce 2 cose.

- Il dataset dell'esecuzione contiene i nuovi eventi, poi 1 riga con
  `resultType` `status`. Il suo `state` dice se il monitor sorveglia, &
  `nextStep` dice cosa fare dopo. `nextStepAction` indica il tipo di passo, come
  `add_schedule`, & `nextStepUrl` è la pagina per farlo.
- Il record `STATUS` contiene lo stesso stato, con un segreto di firma quando la
  chiamata ha creato un webhook.

Per controllare un monitor, chiama di nuovo l'Actor con lo stesso input. Non
cambia nulla & addebita solo ore già sorvegliate. Restituisce lo stato & i nuovi
eventi.

Un monitor ha bisogno di un'esecuzione almeno 1 volta ogni 24 ore per continuare
a sorvegliare. Il server MCP di Apify non ha uno strumento per le
pianificazioni, quindi non puoi aggiungerne una. Chiedi all'utente di aggiungere
una pianificazione Apify nella pagina indicata da `nextStepUrl`. La
pianificazione esegue l'Actor ogni ora con lo stesso input. Oppure chiama di
nuovo tu l'Actor da qualsiasi timer. Fermalo con lo stesso input &
`"stop": true`.

L'Actor legge anche i nomi che gli agenti indovinano, come `handles` &
`usernames`, & lo stato dell'esecuzione dice come li ha letti.

## Quanto costa un monitor di Twitter?

Su ogni piano Apify a pagamento, una monitor-hour costa $0.0045. 1 account o
parola chiave è 1 monitor. Un input con 2 account & 1 parola chiave costa 3
monitor-hour ogni ora. Apify fattura a parte il tuo uso della piattaforma.

- 1 account sorvegliato per 30 giorni costa circa $3.24.
- 10 account & 2 parole chiave sorvegliati per 30 giorni costano circa $38.88.
- Eventi & avvisi sono gratuiti, qualunque sia il loro numero.
- Nessun costo di avvio. Un'esecuzione addebita solo ore già sorvegliate.
- Un target che X non ha non sorveglia nulla & non costa nulla.
- Il tuo costo massimo per esecuzione limita ogni addebito. Le ore oltre il
  limite aspettano l'esecuzione successiva.

Una pianificazione oraria tiene basso l'uso di Apify rispetto alle ore che paga.
Esecuzioni ogni pochi minuti aggiungono uso & non cambiano nulla per gli avvisi,
che arrivano comunque tra un'esecuzione e l'altra.

Il monitoraggio richiede un piano Apify a pagamento. Sul piano gratuito,
un'esecuzione non avvia alcun monitor & non addebita nulla. Mostra invece i 5
tweet più recenti del tuo primo account, così vedi cosa conterrebbero gli
avvisi.

## Limiti & recupero

- 1 input accetta fino a 100 account & parole chiave. Usa 2 task per averne di
  più.
- Fino a 10 URL di webhook per input, più Telegram.
- Gli eventi restano 30 giorni, quindi `since` può salvarli di nuovo entro quel
  periodo.
- Un'esecuzione che si ferma prima lascia i suoi eventi all'esecuzione
  successiva. Nessuno va perso.
- Un'esecuzione che termina tra la prenotazione delle ore & il loro addebito non
  addebita nulla. Quelle ore restano pagate & gratuite.
- Ogni esecuzione scrive 1 riga di stato gratuita, quindi il suo dataset non è
  mai vuoto.

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

No. X (Twitter) Monitor di Xquik non richiede cookie di X, chiave API, login o
credenziali. Ogni controllo avviene sull'infrastruttura di Xquik.

### Come monitoro un account Twitter?

Incolla il suo nome utente in `twitterHandles`, scegli gli eventi che vuoi &
aggiungi una destinazione per gli avvisi. Di solito Xquik rileva ogni nuovo
tweet in meno di un secondo da quando X lo mostra, & ogni evento resta nel
dataset.

### Può monitorare account crypto & menzioni di coin?

Sì. Aggiungi gli account che segui, o una ricerca per parola chiave come un
cashtag o un indirizzo di contratto. I loro nuovi tweet & i tweet corrispondenti
arrivano su Discord o Telegram come avvisi.

### Quanto velocemente arrivano gli avvisi?

Di solito Xquik rileva un nuovo tweet, una risposta, una citazione, un repost o
una modifica del profilo di un account sorvegliato in meno di un secondo da
quando X lo mostra. Gli avvisi partono man mano che arrivano gli eventi & non
aspettano mai un'esecuzione.

### Perché l'esecuzione dice che il monitoraggio richiede un piano a pagamento?

I monitor lavorano tra un'esecuzione e l'altra, tutto il giorno. Per questo
richiedono un piano Apify a pagamento. Passa a un piano superiore, poi esegui di
nuovo con lo stesso input.

### Cosa succede quando fermo il monitor?

L'esecuzione ferma ogni target & disattiva gli avvisi. Addebita le ore
sorvegliate fino a quel momento. Poi aspetta circa mezzo minuto gli eventi più
recenti & li salva, così nessuno resta indietro. Gli eventi già conservati
restano leggibili per 30 giorni.

### Come verifico la firma di un webhook?

Un nuovo webhook generico riceve un segreto di firma, mostrato 1 sola volta nel
record `STATUS`. Xquik firma ogni consegna con questo segreto, come per i suoi
webhook REST.

### Posso usare l'API, le pianificazioni & le integrazioni?

Sì. Usa l'API di Apify o l'API REST di Xquik. La
[scheda API](https://apify.com/xquik/x-twitter-monitor/api) ha esempi in Python,
JavaScript & cURL. Le
[pianificazioni](https://docs.apify.com/platform/schedules) di Apify tengono
attivo il monitor. Gli agenti usano
[Apify MCP](https://docs.apify.com/platform/integrations/mcp).

### È legale monitorare account X?

X (Twitter) Monitor di Xquik raccoglie dati pubblici di X. I risultati possono
contenere dati personali. Verifica di avere uno scopo lecito & rispetta le norme
sulla privacy che valgono per te. Nel dubbio, chiedi a un legale qualificato.

### Dove trovo assistenza?

Apri una issue nella pagina dell'Actor o scrivi a <support@xquik.com> con l'ID
dell'esecuzione. La pagina di stato spiega ogni esecuzione, & la diagnostica
gratuita copre le esecuzioni che richiedono attenzione.

### Posso avere una soluzione personalizzata?

Sì. Visita [xquik.com](https://xquik.com) o leggi la
[documentazione API](https://docs.xquik.com/introduction). Copre dashboard, API,
server MCP & webhook.
