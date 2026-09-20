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

Xquik è il servizio di scraping X (Twitter) più veloce & economico al mondo con
i dati X più completi. X Community Scraper raccoglie informazioni, post,
ricerche, membri & moderatori delle Community. Ogni altro Actor Apify addebita
costi prima di filtrare o deduplicare. Xquik addebita solo per i risultati
consegnati, unici e corrispondenti ai filtri.

Raccogli informazioni, post, corrispondenze per parole chiave, membri e
moderatori delle Community Twitter da URL o ID delle Community. Combina
risorse e Community in un unico run. Non serve una chiave API X né il login.

## Dati e filtri delle Community

- Metadati e regole delle Community quando X li espone.
- Post più recenti delle Community.
- Ricerca per parole chiave con ordinamento Latest o Top.
- Membri e moderatori delle Community.
- I filtri su post, membri e moderatori vengono applicati prima della
  fatturazione.
- Più Community e risorse per run.
- Limiti per risorsa e globali.
- Letture concorrenti con recupero del cursore salvato.
- L'Actor rimuove le righe duplicate prima della fatturazione.

## Input

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["info", "tweets", "members", "moderators"],
  "maxItems": 10000
}
```

Per la ricerca per parole chiave, includi `"search"` in `resources` e fornisci
`query`.

## Output

Le righe usano `community`, `communityTweet`, `communityMember` o
`communityModerator` come `resultType`. Ogni riga include `sourceTarget` per
la Community di input. L'Actor preserva i campi di origine & non inventa
valori.

## Prezzi

Ogni piano Apify costa **$0.00015 per riga consegnata**. Apify fattura
separatamente l'utilizzo della tua piattaforma.

- Un addebito per ogni riga di dati consegnata. La diagnostica è gratuita in
  `diagnostics`.
- Nessun costo di avvio, Community, risorsa o query.
- La deduplicazione avviene prima della fatturazione.

Usa `latest` a meno che non ti serva una build precedente. Scegli tra 50 task
pubblici o 129 operazioni Xquik REST. Gli esempi usano valori campione. I
risultati riflettono dati live.

## Paginazione e recupero

Le risorse delle Community indipendenti vengono eseguite in modo concorrente.
La paginazione resta ordinata all'interno di ogni lignaggio di cursore. Righe
accettate, stato di fatturazione, cursori e fingerprint di output
sopravvivono alla migrazione Apify. L'Actor non ha un timeout autoimposto.

L'Actor restituisce solo le Community pubbliche che X espone. I campi
disponibili variano in base alla Community.

## Estrazione incompleta

Un'estrazione interrotta scrive una diagnostica gratuita `partial`. I
risultati disponibili restano intatti. Leggi `availableResults`,
`failedTargets`, `retryable` e `nextAction` prima di riprovare. Un'uscita
riuscita dell'Actor conferma la consegna, non l'estrazione completa.

Xquik è un servizio di terze parti indipendente. Non è affiliato a X Corp.
"Twitter" e "X" sono marchi di X Corp.

## Actor Xquik correlati

Ogni Actor Xquik condivide lo stesso motore di estrazione, la fatturazione
basata sui filtri & la diagnostica. Scegli quello che corrisponde ai dati di
cui hai bisogno.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): estrae tweet da
  ricerche, timeline dei profili, List & ID tweet con oltre 50 filtri & export
  piatti. Usalo quando ti servono dati sui tweet senza analisi. Da $0.00015 per
  riga.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): estrae
  profili con i relativi post, risposte, media & follower da handle, ID o URL.
  Usalo quando parti dagli account invece che dalle ricerche. Da $0.00015 per
  riga.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): estrae risposte,
  commenti & intere conversazioni sotto i post con oltre 25 filtri. Usalo
  quando ti serve la discussione sotto i tweet. Da $0.00015 per riga.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): estrae
  risposte, citazioni, retweeter & thread per URL o ID di post in blocco.
  Usalo quando misuri chi ha interagito con i post. Da $0.00015 per riga.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): estrae
  follower, following, membri delle List, iscritti & membri delle Community
  come righe di profilo. Usalo quando ti servono liste di pubblico o membri.
  Da $0.00015 per profilo.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper):
  cerca utenti per handle, bio & posizione con filtri su follower, verifica,
  età & posizione. Usalo quando costruisci liste di account dalla ricerca. Da
  $0.00015 per profilo.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): estrae post,
  membri & follower delle List da URL o ID delle List. Usalo quando una List
  curata definisce le tue fonti. Da $0.00015 per riga.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): estrae
  tendenze in tempo reale per posizione con rank, volume, query & WOEID.
  Usalo quando tieni traccia di cosa è di tendenza e dove. Da $0.00015 per
  tendenza.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): estrae
  Article X lunghi come Markdown & testo con copertine, autori, date &
  metriche. Usalo quando ti servono i corpi degli articoli, non i tweet. Da
  $0.00015 per articolo.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): estrae o
  archivia foto, video & GIF da post o profili con opzioni MP4 & metadati.
  Usalo quando ti servono i file multimediali stessi. Da $0.00015 per riga
  multimediale.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  monitora le menzioni del brand con rilevanza, sentiment &
  risposte sulla customer experience generate con AI & confronta i run. Usalo
  quando osservi un brand nel tempo. Da $0.0003 per tweet analizzato.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  etichetta atteggiamento, intensità & probabilità di sarcasmo per ogni tweet
  con AI. Usalo quando ti serve il sentiment generale su qualsiasi argomento.
  Da $0.0003 per tweet analizzato.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  etichetta posizione rialzista, ribassista, neutra o mista, tipo di
  contenuto, convinzione & rilevanza dell'asset con AI. Usalo quando segui
  stock, crypto o discussioni di trading. Da $0.0003 per tweet analizzato.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  etichetta i post di notizie per formato, attribuzione della fonte &
  rilevanza dell'argomento con AI. Usalo quando separi il reporting dal
  commento. Da $0.0003 per tweet analizzato.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  risponde alle tue domande personalizzate di categoria, punteggio &
  sì/no per ogni tweet con AI. Usalo quando le analisi preimpostate non si
  adattano alle tue etichette. Da $0.0003 per tweet analizzato.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer):
  stima un Viral Score da 0 a 100 & un verdetto per ogni tweet da 8 risposte
  dell'IA sui tratti. Usalo quando studi perché i tweet si diffondono o
  falliscono. Da $0.0003 per tweet analizzato.
