[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · **Italiano**

[![Framer collega Xquik MCP agli agenti di coding](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Guarda come Framer usa gli scraper Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
con Claude Code, Codex, Cursor & altro, da 6:07.

Xquik è il servizio di scraping X (Twitter) più veloce & economico al mondo, con
i dati X più completi. X (Twitter) Follower Tracker di Xquik mostra i follower
nuovi & persi degli account che scegli, & chi iniziano o smettono di seguire.
Ogni avviso contiene il profilo completo dell'altro account. La maggior parte
degli altri Actor Apify fa pagare prima di filtrare o deduplicare. Xquik fa
pagare solo i risultati consegnati e unici, & qui solo le ore in cui un monitor
sorveglia.

Incolla gli account da tracciare & fai clic su Start. Gli avvisi arrivano tra
un'esecuzione e l'altra. Paghi **$0.0045 per monitor-hour**. Eventi & avvisi
sono gratuiti, & Apify fattura a parte l'uso della piattaforma.

> Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.
> "Twitter" e "X" sono marchi di X Corp.

## Perché usare X (Twitter) Follower Tracker?

- **Vedi chi ha smesso di seguirti.** Ogni avviso di follower perso indica
  l'account, anche se X lo ha sospeso.
- **Traccia qualsiasi account pubblico.** Sorveglia il tuo account, quello di un
  concorrente o quello di un cliente.
- **Nessun avviso per i vecchi follower.** La prima esecuzione prende ogni
  elenco così com'è. Ti avvisano solo le modifiche successive.
- **Avvisi nella tua app di chat.** Inviali su Telegram, Discord o Slack.
  Telegram non richiede un ID chat. Anche qualsiasi webhook HTTPS riceve
  l'evento completo.
- **Verifica che gli avvisi funzionino.** Ogni nuovo URL di webhook, Slack o
  Discord riceve un avviso di prova. Lo stato dell'esecuzione dice se è
  arrivato.
- **Controlla che il monitor sia attivo.** La pagina di stato di ogni esecuzione
  lo conferma & mostra 1 passo successivo con un pulsante.
- **Nessuna pausa silenziosa.** Ricevi un avviso 4 ore prima che un monitor
  senza esecuzioni vada in pausa. L'esecuzione successiva lo riprende.
- **Nessun account X necessario.** Non condividi mai il tuo login X né una
  chiave API.

### Righe accurate

- Ogni ID in una riga resta esatto.
- I badge di verifica corrispondono a quelli che mostra `x.com`.
- Le righe contengono solo dati pubblici.
- Annunci & contenuti sponsorizzati non arrivano mai nelle tue righe.
- I monitor segnalano solo eliminazioni & unfollow reali.

### Dati aggiornati

- Le letture continuano a funzionare quando X rilascia modifiche.

### Velocità

- Una pagina lenta non blocca la tua esecuzione.
- Le chiamate agli Actor che si bloccano riprendono da sole.

### Fatturazione equa

- I monitor hanno 1 prezzo orario fisso, eventi & webhook inclusi.
- Gli Actor di monitoraggio fanno pagare solo le ore in cui un monitor ha
  sorvegliato.

### Affidabilità

- Un errore isolato non fa fallire la tua esecuzione.
- Gli Actor resistono ai brevi disservizi di Xquik.
- Le esecuzioni degli Actor superano i riavvii senza ripetere nulla.
- Le esecuzioni interrotte conservano le loro righe & il loro report.
- Un'esecuzione che non riesce a partire spiega comunque perché.
- I webhook sono firmati & protetti dai replay.
- Un webhook rimasto offline riceve comunque i suoi eventi, fino a 7 giorni.
- I nuovi eventi arrivano puntuali, anche dopo che il tuo webhook è stato
  offline.
- I webhook non partono mai verso host privati o locali.
- Gli avvisi in chat arrivano in ordine senza superare i limiti di frequenza.
- Il supporto può vedere esattamente cosa ha restituito una richiesta o
  un'esecuzione.

### Pensato per gli agenti

- Gli Actor accettano input scritti per altri Actor.
- Ogni esecuzione dice perché è finita & se conviene riprovare.

### Controlli di qualità

- Ogni campo che X mostra è fornito, escluso di proposito o dimostrato assente.
- Xquik testa ogni lettura dal vivo su X.
- README, schemi & output reali degli Actor usano gli stessi nomi dei campi.

## Quali dati invia X (Twitter) Follower Tracker?

- Nuovi follower, cioè gli account che iniziano a seguire ogni account che
  sorvegli.
- Follower persi, cioè gli account che lasciano i suoi follower.
- Nuovi follow & unfollow, cioè gli account che inizia o smette di seguire.
- Ogni avviso con il profilo completo dell'altro account, come nome, bio &
  numero di follower.
- Ogni evento nel dataset dell'esecuzione & in 1 dataset di cronologia.

## Come tracciare i follower di Twitter

Il monitoraggio richiede un piano Apify a pagamento.
[Scegli un piano](https://apify.com/pricing?fpr=xquik), poi torna qui & premi
Try for free.

1. Apri X (Twitter) Follower Tracker di Xquik in Apify Console.
2. Incolla nomi utente in `twitterHandles`.
3. Attiva `telegram`, o incolla un URL di webhook Discord o Slack in
   `webhookUrls`.
4. Fai clic su Start. Il tracciamento inizia in quell'esecuzione.
5. Aggiungi una pianificazione che esegua l'Actor ogni ora, con lo stesso input.

Ogni esecuzione successiva addebita le ore sorvegliate dall'esecuzione
precedente & salva i nuovi eventi nel suo dataset. Un monitor senza esecuzioni
per 24 ore va in pausa. I tuoi avvisi ti avvertono 4 ore prima. L'esecuzione
successiva lo riprende & addebita prima le ore non pagate.

## Cosa vede il tracker

- Nuovi follower & nuovi follow di qualsiasi account pubblico.
- Follower persi sugli account con fino a 100.000 follower, & unfollow sugli
  account che seguono fino a 100.000 account. Oltre, tra i 5.000 più recenti.
- Un follower perso in fondo a un elenco grande può arrivare più tardi di un
  nuovo follower, perché Xquik controlla l'intero elenco meno spesso dei suoi
  follower più recenti.
- Un follower il cui account viene sospeso o rimosso da X conta anche come
  perso.
- Un account che se ne va & torna può contare di nuovo come nuovo follower.
- La prima esecuzione prende ogni elenco così com'è, quindi nessun follower
  esistente conta come nuovo.
- Un account protetto nasconde i suoi elenchi, quindi non invia nulla.

## Input

| Campo              | Cosa fa                                                                      |
| ------------------ | ---------------------------------------------------------------------------- |
| `twitterHandles`   | Nomi utente con o senza @, o URL di profili `x.com`, 1 per riga.             |
| `monitorName`      | Dà il nome a questo gruppo di account, per le esecuzioni senza task salvato. |
| `followerChanges`  | Follower nuovi & persi. Attivo per impostazione predefinita.                 |
| `followingChanges` | Nuovi follow & unfollow. Attivo per impostazione predefinita.                |
| `webhookUrls`      | URL HTTPS, 1 per riga. L'Actor riconosce gli URL di Slack & Discord.         |
| `telegram`         | Invia gli avvisi su Telegram tramite un link che ti dà l'esecuzione.         |
| `stop`             | Ferma il monitor & disattiva gli avvisi.                                     |

1 input accetta fino a 100 account. Telegram non richiede nome utente né ID
della chat. Lo stato dell'esecuzione ti dà un link. Aprilo & premi Start, & gli
avvisi arrivano in quella chat. Il modulo nasconde gli eventi di tweet di X
(Twitter) Monitor, & un input che li invia funziona comunque.

Questi input sono pronti da copiare.

```json
{ "twitterHandles": ["NASA"], "telegram": true }
```

```json
{
  "twitterHandles": ["yourhandle"],
  "followingChanges": false,
  "webhookUrls": "https://hooks.slack.com/services/T000/B000/XXXX"
}
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
con ogni campo. Il record di stato contiene `state`, `targets`, `destinations`,
`eventsSaved`, `hoursCharged`, `paidThrough`, `pausesAt`, `nextStep`,
`nextStepAction` & `nextStepUrl`, come li mostra X (Twitter) Follower Tracker.

Il dataset di cronologia nel tuo account conserva ogni evento del monitor,
ognuno 1 volta. Il suo nome inizia con `x-monitor-`.

## Per agenti AI

1 chiamata è tutta l'API. Ogni chiamata avvia o aggiorna il monitor, addebita le
ore sorvegliate dalla chiamata precedente & restituisce solo ciò che è nuovo.
Nessuna chiamata addebita un'ora 2 volte. Una chiamata che avvia o aggiorna un
monitor termina in fretta, entro il tempo di attesa dell'MCP di Apify. Uno stop
richiede circa mezzo minuto, perché prima raccoglie gli ultimi eventi.

Questo input avvia o continua un monitor.

```json
{ "twitterHandles": ["NASA"], "monitorName": "agent-demo" }
```

Il dataset dell'esecuzione contiene i nuovi eventi, poi 1 riga con `resultType`
`status`. Il suo `state` dice se il monitor sorveglia, & `nextStep` dice cosa
fare dopo. Per controllare un monitor, chiama di nuovo l'Actor con lo stesso
input. Non cambia nulla & addebita solo ore già sorvegliate.

Un monitor ha bisogno di un'esecuzione almeno 1 volta ogni 24 ore per continuare
a sorvegliare. Il server MCP di Apify non ha uno strumento per le
pianificazioni, quindi non puoi aggiungerne una. Chiedi all'utente di aggiungere
una pianificazione Apify nella pagina indicata da `nextStepUrl`. La
pianificazione esegue l'Actor ogni ora con lo stesso input. Fermalo con lo
stesso input & `"stop": true`.

## Quanto costa un tracker dei follower di Twitter?

Su ogni piano Apify a pagamento, una monitor-hour costa $0.0045. 1 account è 1
monitor. Apify fattura a parte il tuo uso della piattaforma.

- 1 account tracciato per 30 giorni costa circa $3.24.
- 10 account tracciati per 30 giorni costano circa $32.40.
- Eventi & avvisi sono gratuiti, qualunque sia il loro numero.
- Nessun costo di avvio. Un'esecuzione addebita solo ore già sorvegliate.
- Un target che X non ha non sorveglia nulla & non costa nulla.
- Il tuo costo massimo per esecuzione limita ogni addebito. Le ore oltre il
  limite aspettano l'esecuzione successiva.

Una pianificazione oraria tiene basso l'uso di Apify rispetto alle ore che paga.
Esecuzioni ogni pochi minuti aggiungono uso & non cambiano nulla per gli avvisi,
che arrivano comunque tra un'esecuzione e l'altra.

Il monitoraggio richiede un
[piano Apify a pagamento](https://apify.com/pricing?fpr=xquik). Sul piano
gratuito, un'esecuzione non avvia alcun monitor & non addebita nulla. Mostra
invece i 5 tweet più recenti del tuo primo account.

## Limiti & recupero

- 1 input accetta fino a 100 account. Usa 2 task per averne di più.
- Fino a 10 URL di webhook per input, più Telegram.
- Gli eventi restano 30 giorni, quindi `since` può salvarli di nuovo entro quel
  periodo.
- Un'esecuzione che si ferma prima lascia i suoi eventi all'esecuzione
  successiva. Nessuno va perso.
- Ogni esecuzione scrive 1 riga di stato gratuita, quindi il suo dataset non è
  mai vuoto.
- Ogni Actor di monitoraggio di Xquik addebita lo stesso prezzo orario.
  Un'esecuzione paga le ore non pagate più vecchie di tutti i tuoi monitor,
  qualunque Actor li abbia sorvegliati.

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

### Servono cookie di X, una chiave API o il login?

No. X (Twitter) Follower Tracker di Xquik non richiede cookie di X, chiave API,
login o credenziali. Ogni controllo avviene sull'infrastruttura di Xquik.

### Posso vedere chi ha lasciato i miei follower su X?

Sì. Sorveglia il tuo account pubblico. Ogni account che lascia i suoi follower
invia un avviso di follower perso con il suo profilo completo. Questo include un
unfollow & un account che X sospende o rimuove.

### Può mostrare chi segue un account?

Sì. `followingChanges` è attivo per impostazione predefinita, quindi ogni
account che l'account sorvegliato inizia o smette di seguire invia un avviso.

### Funziona con account che hanno milioni di follower?

Indica i nuovi follower di qualsiasi account pubblico. Indica i follower persi
sugli account con fino a 100.000 follower. Oltre, tra i 5.000 più recenti.

### Invia anche tweet?

No, per impostazione predefinita. Attiva gli eventi di tweet tramite
`eventTypes`, o usa X (Twitter) Monitor per i tweet.

### Perché l'esecuzione dice che il monitoraggio richiede un piano a pagamento?

I monitor lavorano tra un'esecuzione e l'altra, tutto il giorno. Per questo
richiedono un piano Apify a pagamento. Passa a un piano superiore, poi esegui di
nuovo con lo stesso input.

### Cosa succede quando fermo il monitor?

L'esecuzione ferma ogni target & disattiva gli avvisi. Addebita le ore
sorvegliate fino a quel momento. Poi aspetta circa mezzo minuto gli eventi più
recenti & li salva, così nessuno resta indietro. Gli eventi già conservati
restano leggibili per 30 giorni.

### Posso usare l'API, le pianificazioni & le integrazioni?

Sì. Usa l'API di Apify o l'API REST di Xquik. La
[scheda API](https://apify.com/xquik/x-twitter-follower-tracker/api) ha esempi
in Python, JavaScript & cURL. Le
[pianificazioni](https://docs.apify.com/platform/schedules) di Apify tengono
attivo il monitor. Gli agenti usano
[Apify MCP](https://docs.apify.com/platform/integrations/mcp).

### È legale monitorare account X?

X (Twitter) Follower Tracker di Xquik raccoglie dati pubblici di X. I risultati
possono contenere dati personali. Verifica di avere uno scopo lecito & rispetta
le norme sulla privacy che valgono per te. Nel dubbio, chiedi a un legale
qualificato.

### Dove trovo assistenza?

Apri una issue nella
[scheda Issues](https://apify.com/xquik/x-twitter-follower-tracker/issues) con
l'ID dell'esecuzione. La pagina di stato spiega ogni esecuzione, & la
diagnostica gratuita copre le esecuzioni che richiedono attenzione.

### Posso avere una soluzione personalizzata?

Sì. Descrivi ciò che ti serve nella
[scheda Issues](https://apify.com/xquik/x-twitter-follower-tracker/issues).
Xquik offre anche una dashboard, un'API REST, un server MCP & webhook. Trovi il
sito web di Xquik sul suo [profilo Apify](https://apify.com/xquik).
