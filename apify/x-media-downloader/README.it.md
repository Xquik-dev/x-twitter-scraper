[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · **Italiano**

[![Framer collega Xquik MCP agli agenti di coding](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Guarda come Framer usa gli scraper Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
con Claude Code, Codex, Cursor & altro, da 6:07.

Xquik è il servizio di scraping X (Twitter) più veloce & economico al mondo, con
i dati X più completi. X Media Downloader di Xquik estrae o archivia foto, video
& GIF da post & profili. La maggior parte degli altri Actor Apify fa pagare
prima di filtrare o deduplicare. Xquik fa pagare solo i risultati consegnati,
unici e conformi ai filtri.

Scarica i media di Twitter o estrai gli URL diretti da post & schede Media dei
profili. Paghi **$0.00015 per riga consegnata**, & Apify fattura a parte l'uso
della piattaforma. Non ti servono una chiave API X né il login.

> Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.
> "Twitter" e "X" sono marchi di X Corp.

## Perché usare X Media Downloader?

- **Media da ogni fonte.** Scegli in `sources` post, schede Media dei profili,
  risposte, citazioni & thread.
- **File salvati per te.** Attiva `downloadMedia` per salvare i file & ottenere
  i link `storedMediaUrl`.
- **Solo i media che vuoi.** Filtra i media dei profili per tipo, data, lingua,
  visualizzazioni, Mi piace, risposte o repost.
- **Tutti i sottotitoli in 1 riga.** Attiva `includeSubtitles` per ottenere ogni
  traccia di sottotitoli di un post con video.
- **Export pronti all'uso.** Tieni, rinomina, appiattisci o unisci i campi, poi
  esporta in JSON, CSV, Excel, XML o RSS.

### Risultati completi

- Ogni risultato riporta i dati più completi che X ha a disposizione.

### Righe accurate

- Le righe contengono solo dati pubblici.

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
- Le esecuzioni piccole finiscono con un consiglio per spendere meno.

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

### Dati ricchi

- I media arrivano con varianti, testo alternativo, dimensioni & motivi di
  disponibilità.
- I sottotitoli dei video arrivano con segmenti temporizzati.

### Controlli di qualità

- Ogni campo che X mostra è fornito, escluso di proposito o dimostrato assente.
- Xquik testa ogni lettura dal vivo su X.

## Quali dati può estrarre X Media Downloader?

- Foto, GIF, qualità MP4 & playlist HLS.
- Sottotitoli dei post con video, con segmenti temporizzati & testo completo.
- Metadati & URL diretti.

## Come scaricare i media di X

Non usi ancora Apify?
[Crea prima un account gratuito](https://console.apify.com/sign-up?fpr=xquik).
Il piano gratuito non richiede carta di credito & offre $5 da spendere ogni
mese. A $0.00015 per riga di media, $5 coprono fino a 33.000 righe di media,
senza contare l'uso della piattaforma. Poi torna qui & premi Try for free.

1. Apri X Media Downloader di Xquik in Apify Console.
2. Aggiungi i nomi utente in `twitterHandles` o gli URL dei post in `startUrls`.
3. Scegli `sources` & attiva `downloadMedia` per archiviare i file.
4. Imposta `maxItems` per limitare le righe consegnate, poi fai clic su Start.
5. Scarica il dataset in JSON, CSV o Excel, oppure usa l'API di Apify.

`startUrls` & `profileUrls` accettano ogni URL come stringa semplice o come
oggetto `{ "url": "..." }`.

```json
{ "profileUrls": ["https://x.com/nasa", { "url": "https://x.com/OpenAI" }] }
```

Anche `profileUrls` & `tweetIds` funzionano come target.

## Input

```json
{
  "twitterHandles": ["OpenAI"],
  "sources": ["profiles"],
  "downloadMedia": true,
  "maxItems": 10000
}
```

Basta un target. Attiva `downloadMedia` per archiviare i file. I file oltre 80
MB restano solo come URL.

Attiva `includeSubtitles` per ottenere i sottotitoli dei post in `tweetIds` o
`startUrls`. Ogni post con video sottotitolato aggiunge 1 riga con tutte le
tracce dei sottotitoli. Un post senza video o sottotitoli non aggiunge righe &
non costa nulla.

```json
{ "tweetIds": ["2104593672624886205"], "includeSubtitles": true }
```

Le esecuzioni piccole senza problemi saltano `run-report` & risparmiano uso di
Apify. Attiva `alwaysSaveRunRecords` per scriverlo a ogni esecuzione.

## Output

Le righe includono disponibilità, metadati & URL di azione. Le righe archiviate
aggiungono `storedMediaUrl` & `downloadStatus: "stored"`. **Stored Media Files**
apre i record archiviati.

Gli esempi usano valori fittizi. I risultati contengono dati live. Una riga di
foto ha questo aspetto.

```json
{
  "type": "photo",
  "width": 1200,
  "height": 675,
  "altText": "Sample alt text",
  "sourceTarget": "OpenAI"
}
```

Una riga di sottotitoli ha `resultType: "subtitles"` & le sue tracce di
sottotitoli in `tracks`.

```json
{
  "resultType": "subtitles",
  "tweetId": "2104593672624886205",
  "tracks": [
    {
      "language": "en",
      "name": "Sample captions.srt",
      "autoGenerated": false,
      "url": "https://video.twimg.com/subtitles/sample.vtt",
      "text": "Sample caption text.",
      "cues": [{ "startMs": 0, "endMs": 3370, "text": "Sample caption text." }]
    }
  ]
}
```

`autoGenerated` è `true` quando X ha trascritto l'audio da sé. `url` rimanda al
file WebVTT della traccia. I filtri dei media non tolgono le righe di
sottotitoli. Con `downloadMedia` attivo, una riga di sottotitoli ha
`downloadStatus: "url-only"`.

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

## Quanto costa scaricare i media di X?

Su ogni piano Apify paghi $0.00015 per riga consegnata. Apify fattura a parte il
tuo uso della piattaforma.

Per volumi maggiori,
[scegli un piano Apify](https://apify.com/pricing?fpr=xquik) con più uso
prepagato.

- Un addebito per ogni riga di dati consegnata. La diagnostica in `diagnostics`
  è gratuita.
- Una riga di sottotitoli vale 1 riga, qualunque sia il numero di tracce.
- Nessun costo di avvio, per URL, per file o per qualità.
- La deduplicazione avviene prima della fatturazione.

## Limiti & recupero

Un'estrazione interrotta scrive una diagnostica `partial` gratuita. I risultati
disponibili restano intatti. Leggi `availableResults`, `failedTargets`,
`retryable` & `nextAction` prima di riprovare. Un'uscita riuscita dell'Actor
conferma la consegna, non l'estrazione completa.

Lo stato dell'esecuzione nomina ogni causa di un arresto anticipato.
`stopCauses` elenca ogni causa con i propri `message`, `retryable` &
`nextAction`. Le cause sono `target_not_found`, `target_suspended`,
`target_failed`, `pagination_safety_limit`, `reply_reach` & `deadline_reached`.
`target_suspended` nomina gli account che X ha sospeso. `reply_reach` significa
che X ha fornito solo una parte di un thread di risposte. Un target mancante o
sospeso entra nell'elenco solo se un'altra causa ha fermato l'esecuzione.
L'esecuzione è `retryable` quando lo è almeno una causa.

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

No. X Media Downloader di Xquik non richiede chiave API X, login o credenziali.

### È legale scaricare i media di X?

X Media Downloader di Xquik raccoglie campi pubblici di X. I risultati possono
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
[scheda API](https://apify.com/xquik/x-media-downloader/api) ha esempi in
Python, JavaScript & cURL. Le
[pianificazioni](https://docs.apify.com/platform/schedules) di Apify avviano X
Media Downloader di Xquik con un cron. Gli agenti usano
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Usa `latest`, a
meno che non ti serva una build precedente.

### Dove trovo assistenza?

Apri una issue nella
[scheda Issues](https://apify.com/xquik/x-media-downloader/issues) con l'ID
dell'esecuzione. La diagnostica gratuita nel key-value store spiega le
esecuzioni che richiedono attenzione. Un'esecuzione che non riceve nessuna riga
ne spiega il motivo nel suo stato.

### Posso avere una soluzione personalizzata?

Sì. Descrivi ciò che ti serve nella
[scheda Issues](https://apify.com/xquik/x-media-downloader/issues). Xquik offre
anche una dashboard, un'API REST, un server MCP & webhook. Trovi il sito web di
Xquik sul suo [profilo Apify](https://apify.com/xquik).
