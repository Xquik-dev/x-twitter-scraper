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
i dati X più completi. X Article Scraper di Xquik trasforma gli articoli lunghi
di X in Markdown & testo. Aggiunge copertine, autori, date & metriche. La
maggior parte degli altri Actor Apify fa pagare prima di filtrare o deduplicare.
Xquik fa pagare solo i risultati consegnati, unici e conformi ai filtri.

Estrai gli articoli lunghi di X da URL di post o da ID numerici dei post (Tweet
ID). Paghi **$0.00015 per articolo consegnato**. Apify fattura a parte l'uso
della piattaforma. Non ti servono una chiave API X né il login.

> Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.
> "Twitter" e "X" sono marchi di X Corp.

## Dati & formato degli articoli

- Markdown che conserva blocchi, grassetto & corsivo.
- Blocchi `contents` che mantengono la formattazione originale.
- URL di post & ID numerici dei post nella stessa esecuzione.
- Rimozione dei duplicati prima della fatturazione.

X Article Scraper di Xquik non inventa mai i metadati dei link. Apify mostra il
Markdown come testo.

## Come estrarre gli articoli di X

1. Apri X Article Scraper di Xquik in Apify Console.
2. Incolla gli URL dei post degli articoli in `startUrls` o gli ID in `tweetIds`.
3. Imposta `maxItems` per limitare gli articoli consegnati, poi fai clic su
   Start.
4. Scarica il dataset in JSON, CSV o Excel, oppure usa l'API di Apify.

## Input

| Campo                  | Scopo                                               | Predefinito |
| ---------------------- | --------------------------------------------------- | ----------- |
| `startUrls`            | URL pubblici dei post degli articoli                | Nessuno     |
| `tweetIds`             | ID numerici dei post degli articoli                 | Nessuno     |
| `maxItems`             | Limite globale di articoli consegnati               | `100000`    |
| `dedupeAcrossTargets`  | Rimuove gli ID ripetuti prima della fatturazione    | `true`      |
| `maxConcurrency`       | Letture di articoli indipendenti in parallelo       | `100`       |
| `alwaysSaveRunRecords` | Salva `run-report` a ogni esecuzione                | `false`     |

## Output

La scheda Output apre `Articles`. `Results` rimanda alle righe. `Run Report`
rimanda a conteggi, completamento, durata & anomalie. Le esecuzioni grandi o con
un problema scrivono il report. Un'esecuzione piccola senza problemi riporta
invece i conteggi nel suo stato. Attiva `alwaysSaveRunRecords` per scriverlo a
ogni esecuzione.

Gli esempi usano valori fittizi. I risultati contengono dati live. Una riga di
articolo include questi campi:

```json
{
  "markdown": "# Article title\n\nPlain Article text",
  "contents": [{ "type": "paragraph", "text": "Plain Article text" }]
}
```

Le righe aggiungono autore, fonte, copertina, orario & metriche. Esporta in JSON
o in tabelle.

## Quanto costa estrarre gli articoli di X?

Su ogni piano Apify paghi $0.00015 per articolo consegnato. Apify fattura a
parte il tuo uso della piattaforma.

- Un addebito per ogni riga di dati consegnata. La diagnostica in `diagnostics`
  è gratuita.
- Nessun costo di avvio.
- La deduplicazione avviene prima della fatturazione.

## Limiti & recupero

X Article Scraper di Xquik restituisce solo gli articoli pubblici che X mostra.

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
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): estrae
  risposte, citazioni, utenti che hanno fatto repost & thread da URL o ID di
  post in blocco. Usalo quando misuri chi ha interagito con i post. Da $0.00015
  per riga.
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

No. X Article Scraper di Xquik non richiede chiave API X, login o credenziali.

### È legale estrarre gli articoli di X?

X Article Scraper di Xquik raccoglie campi pubblici di X. I risultati possono
contenere dati personali. Verifica di avere uno scopo lecito & rispetta le
norme sulla privacy applicabili. Nel dubbio, chiedi a un legale qualificato.

### Perché la mia esecuzione non ha restituito risultati?

Apri prima l'output gratuito `diagnostics`. Lo stato di un'esecuzione vuota ti
dice di controllare target & filtri. `stopCauses` assegna a ogni causa un
`nextAction` da seguire. L'esecuzione segnala i link che non riesce a leggere &
spiega come correggerli. X Article Scraper di Xquik restituisce solo gli
articoli pubblici che X mostra.

### Posso usare l'API, le pianificazioni & le integrazioni?

Sì. Scegli tra 50 task pubblici o 129 operazioni REST di Xquik. La
[scheda API](https://apify.com/xquik/x-article-scraper/api) ha esempi in Python,
JavaScript & cURL. Le [pianificazioni](https://docs.apify.com/platform/schedules)
di Apify avviano X Article Scraper di Xquik con un cron. Gli agenti usano
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Le letture
singole usano [Xquik REST](https://docs.xquik.com/api-reference/x/get-article).
Usa `latest`, a meno che non ti serva una build precedente.

### Dove trovo assistenza?

Apri una issue nella pagina dell'Actor o scrivi a support@xquik.com con l'ID
dell'esecuzione. La diagnostica gratuita nel key-value store spiega le
esecuzioni vuote, parziali o interrotte.

### Posso avere una soluzione personalizzata?

Sì. Visita [xquik.com](https://xquik.com) o leggi la
[documentazione API](https://docs.xquik.com/introduction). Copre dashboard, API,
server MCP & webhook.
