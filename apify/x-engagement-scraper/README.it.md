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
i dati X più completi. X Engagement Scraper di Xquik raccoglie risposte,
citazioni, utenti che hanno fatto repost & thread di qualsiasi post. La maggior
parte degli altri Actor Apify fa pagare prima di filtrare o deduplicare. Xquik
fa pagare solo i risultati consegnati, unici e conformi ai filtri.

Raccogli risposte, citazioni, utenti che hanno fatto repost (retweet) & contesto
del thread di 1 o più post di X. Paghi **$0.00015 per riga consegnata**. Apify
fattura a parte l'uso della piattaforma. Non ti servono una chiave API X né il
login.

> Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.
> "Twitter" e "X" sono marchi di X Corp.

## Risposte, citazioni & profili

- URL di post & ID numerici dei post (Tweet ID).
- Risposte dirette su tutte le pagine di risultati disponibili.
- Risposte dirette & annidate in 4 ordinamenti.
- Dettagli del post di origine come riga selezionabile.
- Post di citazione con testo, autori, media & metriche.
- Profili degli utenti che hanno fatto repost.
- Contesto della conversazione attorno a ogni post di origine.
- Più tipi di engagement & più post in 1 esecuzione.
- Un limite globale & un limite per ogni risorsa di engagement.
- Attribuzione del post di origine & del tipo di engagement.
- Le esecuzioni riprendono dopo un riavvio di Apify.

## Come estrarre l'engagement dei post di X

1. Apri X Engagement Scraper di Xquik in Apify Console.
2. Incolla gli URL dei post in `startUrls` o gli ID numerici in `tweetIds`.
3. Scegli `engagementTypes` & aggiungi filtri come `minLikes` o `language`.
4. Imposta `maxItems` per limitare le righe consegnate, poi fai clic su Start.
5. Scarica il dataset in JSON, CSV o Excel, oppure usa l'API di Apify.

## Input

```json
{
  "tweetIds": ["2082577277246972300"],
  "engagementTypes": ["replies", "quotes", "retweeters"],
  "maxItems": 10000
}
```

Nel 2024 X ha smesso di mostrare chi mette Mi piace a un post. Il tipo
`favoriters` non restituisce righe. Un'esecuzione senza righe indica questo
motivo nella sua diagnostica.

Di default, ogni account o post compare una volta per tipo di engagement, con 1
addebito. Imposta `dedupeAcrossTargets` su `false` per tenere una riga per ogni
post di origine. Lo stato dell'esecuzione conta i duplicati saltati senza
addebito.

Le esecuzioni piccole senza problemi saltano `run-report` & risparmiano uso di
Apify. Attiva `alwaysSaveRunRecords` per scriverlo a ogni esecuzione.

## Output

Ogni riga imposta `resultType` su `tweet`, `replies`, `completeReplies`,
`quotes`, `retweeters`, `favoriters` o `thread`. `sourceTarget` contiene l'ID
del post di origine. I campi di post & profilo seguono il formato stabile
dell'API REST di Xquik.

`completeReplies` conserva ogni riga restituita. Il report dell'esecuzione conta
la copertura parziale in `incompleteTargets`. I filtri agiscono prima della
fatturazione.

Gli esempi usano valori fittizi. I risultati contengono dati live. Una riga di
risposta ha questo aspetto:

```json
{
  "resultType": "replies",
  "sourceTarget": "2082577277246972300",
  "inReplyToId": "2082577277246972300",
  "username": "sample_user",
  "text": "Sample reply text",
  "likeCount": 12
}
```

## Orario dei repost (retweet)

Imposta `includeRetweetTimestamp` su `true` per i risultati `retweeters`. La
colonna `retweetedAt` contiene l'orario osservato del repost in UTC.

X Engagement Scraper di Xquik trova l'orario del repost quando X mostra ancora
quel repost. I repost più vecchi, eliminati o non disponibili lasciano l'orario
a `null`. Il profilo resta nell'output. Un valore `null` non prova che un
account non abbia mai fatto repost di un post.

Questa opzione rallenta le esecuzioni. Lasciala spenta se ti servono solo i
profili. Il `createdAt` del profilo resta la data di creazione dell'account. Le
righe di post riportano `retweetedAt` quando contengono un evento di repost. Le
date dei post originali & gli orari di scraping non sostituiscono mai gli orari
dei repost. I prezzi dei risultati & la fatturazione per riga consegnata non
cambiano.

## Quanto costa estrarre l'engagement dei post di X?

Su ogni piano Apify paghi $0.00015 per riga consegnata. Apify fattura a parte il
tuo uso della piattaforma.

- Un addebito per ogni riga di dati consegnata. La diagnostica in `diagnostics`
  è gratuita.
- Nessun costo di avvio, per post, per tipo di engagement o per pagina.
- La deduplicazione avviene prima della fatturazione.

## Limiti & recupero

X Engagement Scraper di Xquik legge molti post & tipi di engagement in 1
esecuzione. Le righe consegnate & i progressi restano dopo un riavvio di Apify.
L'Actor non aggiunge un limite di tempo proprio.

Un'estrazione interrotta scrive una diagnostica `partial` gratuita. I risultati
disponibili restano intatti. Leggi `availableResults`, `failedTargets`,
`retryable` & `nextAction` prima di riprovare. Un'uscita riuscita dell'Actor
conferma la consegna, non l'estrazione completa.

Lo stato dell'esecuzione nomina ogni causa di un arresto anticipato.
`stopCauses` elenca ogni causa con i propri `message`, `retryable` &
`nextAction`. Le cause sono `target_not_found`, `target_failed`,
`pagination_safety_limit`, `reply_reach` & `deadline_reached`. `reply_reach`
significa che X ha fornito solo una parte di un thread di risposte. Un target
mancante entra nell'elenco solo se un'altra causa ha fermato l'esecuzione.
L'esecuzione è `retryable` quando lo è almeno una causa.

## Actor Xquik correlati

Ogni Actor Xquik usa lo stesso motore di estrazione, fattura dopo i filtri &
offre la stessa diagnostica. Scegli quello adatto ai dati che ti servono.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): estrae post da
  ricerche, timeline dei profili, liste & ID dei post con oltre 50 filtri &
  export piatti. Usalo quando ti servono dati sui post senza analisi. Da
  $0.00015 per riga.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): estrae
  profili con i relativi post, risposte, media & follower da nomi utente, ID o
  URL. Usalo quando parti dagli account invece che dalle ricerche. Da $0.00015
  per riga.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): estrae risposte,
  commenti & intere conversazioni sotto i post con oltre 25 filtri. Usalo
  quando ti serve la discussione sotto i post. Da $0.00015 per riga.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): estrae
  follower, following, membri & follower delle liste e membri delle community
  come righe di profilo. Usalo quando ti servono elenchi di pubblico o di
  membri. Da $0.00015 per profilo.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper):
  cerca utenti per nome utente, bio & posizione con filtri su follower,
  verifica, età & posizione. Usalo quando costruisci elenchi di account dalla
  ricerca. Da $0.00015 per profilo.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): estrae post,
  membri & follower delle liste da URL o ID delle liste. Usalo quando una lista
  curata definisce le tue fonti. Da $0.00015 per riga.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): estrae
  informazioni, post, ricerche, membri & moderatori delle community. Usalo
  quando le tue fonti sono community di X. Da $0.00015 per riga.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): estrae le
  tendenze in tempo reale per località con posizione in classifica, volume,
  query & WOEID. Usalo quando segui cosa è di tendenza e dove. Da $0.00015 per
  tendenza.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): raccoglie
  gli articoli lunghi di X come Markdown & testo, con copertine, autori, date &
  metriche. Usalo quando ti serve il corpo degli articoli, non i post. Da
  $0.00015 per articolo.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): estrae o
  archivia foto, video & GIF da post o profili con opzioni MP4 & metadati.
  Usalo quando ti servono i file multimediali veri e propri. Da $0.00015 per
  riga di media.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  monitora le menzioni del brand con rilevanza, sentiment & risposte sulla
  customer experience generate con AI, poi confronta le esecuzioni. Usalo
  quando osservi un brand nel tempo. Da $0.0003 per post analizzato.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  etichetta atteggiamento, intensità & probabilità di sarcasmo di ogni post con
  AI. Usalo quando ti serve il sentiment generale su qualsiasi argomento. Da
  $0.0003 per post analizzato.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  etichetta con AI la posizione rialzista, ribassista, neutra o mista, il tipo
  di contenuto, la convinzione & la rilevanza per l'asset. Usalo quando segui
  azioni, crypto o discussioni di trading. Da $0.0003 per post analizzato.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  etichetta con AI i post di notizie per formato, attribuzione della fonte &
  rilevanza dell'argomento. Usalo quando separi le notizie dai commenti. Da
  $0.0003 per post analizzato.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  risponde con AI alle tue domande di categoria, punteggio & sì/no su ogni
  post. Usalo quando le analisi preimpostate non si adattano alle tue
  etichette. Da $0.0003 per post analizzato.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer):
  stima un Viral Score da 0 a 100 & un verdetto per ogni post da 8 risposte AI
  sui suoi tratti. Usalo quando studi perché i post si diffondono o falliscono.
  Da $0.0003 per post analizzato.

## FAQ

### Serve una chiave API X o il login?

No. X Engagement Scraper di Xquik non richiede chiave API X, login o
credenziali.

### È legale estrarre i dati di engagement di X?

X Engagement Scraper di Xquik raccoglie campi pubblici di X. I risultati possono
contenere dati personali. Verifica di avere uno scopo lecito & rispetta le
norme sulla privacy applicabili. Nel dubbio, chiedi a un legale qualificato.

### Perché la mia esecuzione non ha restituito risultati?

Apri prima l'output gratuito `diagnostics`. Lo stato di un'esecuzione vuota ti
dice di controllare target & filtri. `stopCauses` assegna a ogni causa un
`nextAction` da seguire. L'esecuzione elenca ogni input che non riesce a leggere
& spiega come correggerlo. Nel 2024 X ha smesso di mostrare chi mette Mi piace a
un post, quindi `favoriters` non restituisce righe.

### Posso usare l'API, le pianificazioni & le integrazioni?

Sì. Scegli tra 50 task pubblici o 129 operazioni REST di Xquik. La
[scheda API](https://apify.com/xquik/x-engagement-scraper/api) ha esempi in
Python, JavaScript & cURL. Le
[pianificazioni](https://docs.apify.com/platform/schedules) di Apify avviano X
Engagement Scraper di Xquik con un cron. Gli agenti usano
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Usa `latest`, a
meno che non ti serva una build precedente.

### Dove trovo assistenza?

Apri una issue nella pagina dell'Actor o scrivi a support@xquik.com con l'ID
dell'esecuzione. La diagnostica gratuita nel key-value store spiega le
esecuzioni vuote, parziali o interrotte.

### Posso avere una soluzione personalizzata?

Sì. Visita [xquik.com](https://xquik.com) o leggi la
[documentazione API](https://docs.xquik.com/introduction). Copre dashboard, API,
server MCP & webhook.
