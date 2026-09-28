<p align="center">
  <a href="README.md">English</a> ·
  <a href="README.es.md">Español</a> ·
  <a href="README.tr.md">Türkçe</a> ·
  <a href="README.zh-CN.md">简体中文</a> ·
  <a href="README.ja.md">日本語</a> ·
  <a href="README.ko.md">한국어</a> ·
  <strong>Deutsch</strong> ·
  <a href="README.fr.md">Français</a> ·
  <a href="README.it.md">Italiano</a>
</p>

<table align="center"><tr><td align="center">
<a href="https://youtu.be/4UOSpoOoC3Y?t=367"><img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" width="720" alt="Framer verbindet Xquik MCP mit Coding-Agents"></a><br>
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">Sieh dir an, wie Framer Xquik-Scraper mit Claude Code, Codex, Cursor und mehr nutzt, ab Minute 6:07.</a>
</td></tr></table>

Xquik ist weltweit der schnellste & günstigste Scraper-Dienst für X (Twitter) &
liefert die vollständigsten X-Daten. X (Twitter) News Monitor von Xquik sortiert
News-Posts nach Format, Quellenangabe & Relevanz. Die meisten anderen Apify
Actors rechnen ab, bevor sie filtern oder Duplikate entfernen. Xquik rechnet nur
gelieferte, eindeutige Ergebnisse ab, die zu deinen Filtern passen. Die
KI-Kosten sind im Preis pro Post enthalten. Du brauchst keinen KI-Account, keine
Tokens & keinen Schlüssel.

Sortiere News-Posts (Tweets) auf X (Twitter) nach Art & behalte die
Originaldaten jedes Posts. **X (Twitter) News Monitor with AI Analysis** von
Xquik sammelt Posts zu deinen Themen. Er ergänzt jeden Post mit KI um Antworten
zu Format, Quellenangabe & Relevanz. Trenne Berichterstattung von Kommentar &
Spekulation. Sieh, ob ein Post eine Quelle nennt oder verlinkt. Behalte nur
Posts über die Organisationen, Personen oder Themen, die du verfolgst.

- **Format.** Er unterscheidet Berichterstattung, Kommentar, Spekulation,
  Werbung & Satire.
- **Quellenangabe.** Er zeigt, ob eine Behauptung eine Quelle nennt, eine
  verlinkt, aus erster Hand stammt oder keine hat.
- **Relevanz.** Er trennt Posts über deine Ziele von Namensvettern.
- **Vollständige Quelldatensätze.** Jeder Datensatz behält jedes Feld, das der
  Post liefert, auch verlinkte Artikel, falls vorhanden.

> Xquik ist ein unabhängiger Drittanbieter-Dienst. Nicht verbunden mit X Corp.
> "Twitter" und "X" sind Marken von X Corp.

## So klassifizierst du News-Posts auf X

1. Füge Suchbegriffe wie `Nvidia earnings lang:en -filter:retweets`,
   Nutzernamen von News-Accounts oder Post-IDs hinzu.
2. Setze `maxItems` & Extraktionsfilter wie Datumsgrenzen, `filter:links` oder
   eine Mindestzahl an Reposts.
3. Trage die Organisationen, Personen oder Themen, die du verfolgst, mit ihren
   Aliassen unter `analysis.targets` ein. Grenze das Thema in
   `analysis.context` ein.
4. Starte den Run & öffne das Dataset.

```json
{
  "searchTerms": ["Nvidia earnings lang:en -filter:retweets"],
  "maxItems": 300,
  "analysis": {
    "targets": [{ "name": "Nvidia", "aliases": ["NVDA", "Jensen Huang"] }],
    "context": "Financial & product news about the chip maker."
  }
}
```

### Was der Actor beantwortet

| Frage         | Antwort                                                                            |
| ------------- | ---------------------------------------------------------------------------------- |
| Format        | Berichterstattung, Kommentar, Spekulation, Werbung, Satire, ohne Bezug oder unklar |
| Quellenangabe | Genannt, verlinkt, aus erster Hand, fehlend oder unklar                            |
| Relevanz      | Wahrscheinlichkeit, dass das berichtete Ereignis deine Ziele betrifft              |

Die Klassifizierung prüft keine Fakten. Eine genannte Quelle ist nicht
automatisch glaubwürdig. Die Quellenangabe beschreibt, was der Post darstellt.

## Eigenen Text analysieren

Füge eigene Entwürfe, Antworten, Rezensionen oder Notizen in `texts` ein.
X (Twitter) News Monitor von Xquik analysiert sie. Er ruft nichts von X ab.

```json
{
  "texts": [
    "Central bank holds rates at 4.5%, signals 2 cuts next year.",
    "I was at the port this morning. Cranes are idle & trucks are queued."
  ]
}
```

- Jeder Text wird zu 1 Datensatz mit denselben `analysis`-Antworten wie ein
  Post.
- `tweet.id` ist `text:1`, `text:2` usw. `tweet.type` ist `text`.
- Jeder analysierte Text kostet dieselben $0.0003 wie ein analysierter Post.
- Ist `texts` gesetzt, analysiert der Run nur diese Texte. Starte X-Ziele in
  einem eigenen Run.

## Was kostet es, News-Posts auf X zu klassifizieren?

X (Twitter) News Monitor von Xquik kostet ab $0.0003 pro analysiertem Post. Er
verlangt keine Startgebühr. Der Preis enthält Erfassung & KI-Kosten. Du brauchst
keinen KI-Account, keine Tokens & keinen Schlüssel. Der Preis deckt bis zu 8
Fragen & 64.000 Byte Kontext pro Post ab. Jede Frage-Definition darf bis zu
8.000 Byte nutzen.

Extraktionsfilter & Deduplizierung laufen vor der Analyse. Herausgefilterte oder
doppelte Datensätze zahlst du nie. Fehlgeschlagene Analysen, übersprungene
Analysen & Diagnose-Datensätze kosten keine Ergebnisgebühr. Apify berechnet die
Plattformnutzung für Rechenzeit, Speicher & Datentransfer separat, zu den
Preisen deines Plans. Der Tab Pricing zeigt sie.

## Eingabe- & Ausgabebeispiele

Die Eingabe oben kannst du direkt kopieren. Ein gekürzter Ausgabedatensatz sieht
so aus:

```json
{
  "tweet": { "id": "2100673144985993441", "text": "…", "retweetCount": 40 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      {
        "questionId": "format",
        "type": "choice",
        "value": "reporting",
        "confidence": 0.9
      },
      {
        "questionId": "attribution",
        "type": "choice",
        "value": "named",
        "confidence": 0.84
      },
      { "questionId": "relevance", "type": "probability", "probability": 0.98 }
    ]
  }
}
```

Jedes Ergebnis enthält `tweet` & `analysis`. Antworten enthalten Typen,
Fragenversionen & verfügbare Wahrscheinlichkeiten. Ein Datensatz mit
fehlgeschlagener oder übersprungener Analyse behält den gesammelten Post & einen
`reason`. Seine Antwortliste ist leer.

Verlinkt ein Post einen X-Artikel, ruft die Analyse auch diesen Artikel ab. Sie
ergänzt Titel, Vorschau & Textblöcke als Kontext.
`analysis.contextAvailability.article` meldet `text_blocks`, `summary` oder
`not_supplied`. `summary` bedeutet nur Titel & Vorschau.

Kostenlose Diagnosen im Key-Value-Store erklären ungültige Eingaben, fehlende
Ergebnisse & unterbrochene Erfassung. Der Run-Report trennt gesammelte
Datensätze, abgerechnete Analysen & ausstehende Gebühren.

## Run-Zusammenfassung & flache Antworten

Ein Run schreibt in 4 Fällen einen `analysis-summary`-Datensatz in seinen
Key-Value-Store:

- Er hat ein Problem oder ist groß.
- Er setzt `monitor` ohne `baselineDatasetId`, als erster Run einer Serie.
- Sein Vergleich findet einen geänderten, neuen oder nicht vergleichbaren Post.
- Er hat `alwaysSaveRunRecords` aktiviert.

Andere Runs überspringen den Datensatz. Ihr Status nennt die wichtigste Antwort,
etwa `Top format: reporting in 4 of 5 results.` Ein Vergleich ohne Änderung
meldet `No change since the earlier run.` Ein Run mit einem Problem oder ein
großer Run schreibt zusätzlich `run-report`. Das gilt auch für einen Run mit
aktiviertem `alwaysSaveRunRecords`. `run-report` wiederholt die Zusammenfassung
unter `results.analysisSummary`.

Die Zusammenfassung zählt analysierte, fehlgeschlagene & übersprungene
Datensätze. Sie summiert Interaktionen & fasst jede Frage zusammen.

- Die Aufteilung `format` trennt Berichterstattung von Kommentar, Spekulation,
  Werbung & Satire.
- `attribution` zählt genannte, verlinkte, fehlende Quellen & solche aus erster
  Hand.
- `relevance` zählt Posts zu jedem Ziel.
- `targets` nennt die Erwähnungen pro Ziel. Das Feld `top` jedes Ziels listet
  seine Posts mit den meisten Interaktionen pro Antwortkategorie.
- Jeder Eintrag in `targets` hat `choices`, die Verteilung nach Format &
  Quellenangabe für Posts zu diesem Ziel.
- `sourceDomains` zählt die verlinkten Domains im ganzen Run.
- `monitor.changedRows` listet Posts, deren Entscheidungen sich seit der
  Baseline geändert haben.
- Jeder Datensatz listet `sourceDomains`, die Hostnamen, auf die er verlinkt.
- Jeder Datensatz listet `cashtags` aus seinem Text, etwa `$NVDA`.
- Ist `monitor.baselineDatasetId` gesetzt, zählt der Block `monitor` der
  Zusammenfassung die Vergleichsstatus. Er listet bis zu 50 geänderte
  Datensätze.

Jeder Ergebnisdatensatz enthält außerdem `answers`, eine flache Zuordnung mit
der Frage-ID als Schlüssel. Jeder Wert ist die gewählte Kategorie, der Score
oder die Wahrscheinlichkeit. Die Dataset-Ansicht `Flat answers` & CSV- oder
Excel-Exporte zeigen 1 Spalte pro Frage. Die Spalten stehen neben dem Post,
Tabellen brauchen also kein JSON-Parsing. Fehlgeschlagene & übersprungene
Datensätze enthalten eine leere Zuordnung.

## Mit einem früheren Run vergleichen

Übergib `monitor.baselineDatasetId`, die Dataset-ID eines abgeschlossenen
früheren Runs mit denselben Analyseeinstellungen. Der Vergleich liest die
Datensätze dieses Runs. Er funktioniert auch, wenn dieser Run seine
Zusammenfassung übersprungen hat. Jeder Datensatz erhält dann ein
`monitor`-Objekt. Sein Status kann so lauten:

- `first_run` ohne Baseline.
- `new_to_baseline` für Posts, die der frühere Run nicht hatte.
- `unchanged` oder `changed` für Posts, die er hatte.

`changes` listet jede Entscheidung zu Format, Quellenangabe oder Relevanz, die
sich von `previous` zu `current` bewegt hat. Der Vergleich nutzt die Kategorie,
die gerundete Score-Stufe oder Ja/Nein bei 0,5. Eine Entscheidung zählt nur als
geändert, wenn sie sich deutlich bewegt. Knappe Fälle zwischen Runs bleiben
`unchanged`.

Eine Baseline über `maxBaselineRows` oder mit anderen Einstellungen stoppt den
Run vor der Erfassung. Der Run schreibt dann einen Diagnose-Datensatz.
`maxBaselineRows` steht standardmäßig auf 100.000.

## Task-Beispiele

Wähle aus 50 öffentlichen Tasks. Jeder startet mit einer echten englischen Suche
& einem begrenzten `maxItems`. Er enthält fertige Ziele, Kontext & die
Dataset-Ansicht Overview. Passe Suche oder Ziele an, bevor du startest.

- [Classify Nvidia news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-nvidia-news-posts-on-x)
- [Classify X Article news posts](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-x-article-news-posts)
- [Classify OpenAI news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-openai-news-posts-on-x)
- [Classify Apple news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-apple-news-posts-on-x)
- [Classify Tesla news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-tesla-news-posts-on-x)
- [Classify SpaceX news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-spacex-news-posts-on-x)
- [Classify Boeing news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-boeing-news-posts-on-x)
- [Classify Pfizer news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-pfizer-news-posts-on-x)
- [Classify Moderna news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-moderna-news-posts-on-x)
- [Classify ExxonMobil news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-exxon-news-posts-on-x)
- [Classify Federal Reserve news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-federal-reserve-news-posts-on-x)
- [Classify European Central Bank news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-european-central-bank-news-posts-on-x)
- [Classify Bank of England news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-bank-of-england-news-posts-on-x)

Die übrigen Tasks auf der Actor-Seite decken weitere Marken, Themen & Märkte ab.

## Verwandte Xquik-Actors

Jeder Xquik-Actor nutzt dieselbe Extraktions-Engine, rechnet erst nach dem
Filtern ab & liefert dieselben Diagnosen. Wähle den, der zu deinen Daten passt.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): Scrapt Posts aus
  Suchen, Profil-Timelines, Listen & Post-IDs mit über 50 Filtern & flachen
  Exporten. Nutze ihn, wenn du Post-Daten ohne Analyse brauchst. Ab $0.00015
  pro Datensatz.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): Scrapt
  Profile samt Posts, Antworten, Medien & Followern anhand von Nutzernamen, IDs
  oder URLs. Nutze ihn, wenn du von Accounts statt von Suchen ausgehst. Ab
  $0.00015 pro Datensatz.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): Scrapt
  Antworten, Kommentare & ganze Konversationen unter Posts mit über 25 Filtern.
  Nutze ihn, wenn du die Diskussion unter Posts brauchst. Ab $0.00015 pro
  Datensatz.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): Scrapt
  Antworten, Zitate, Reposter & Threads zu Post-URLs oder -IDs in großen
  Mengen. Nutze ihn, wenn du misst, wer mit Posts interagiert hat. Ab $0.00015
  pro Datensatz.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): Scrapt
  Follower, gefolgte Accounts, Listenmitglieder, Abonnenten &
  Community-Mitglieder als Profil-Datensätze. Nutze ihn, wenn du Zielgruppen-
  oder Mitgliederlisten brauchst. Ab $0.00015 pro Profil.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper):
  Sucht Nutzer nach Nutzername, Bio & Standort mit Filtern für Follower,
  Verifizierung, Account-Alter & Standort. Nutze ihn, wenn du Account-Listen
  aus einer Suche aufbaust. Ab $0.00015 pro Profil.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): Scrapt Posts,
  Mitglieder & Follower von Listen aus Listen-URLs oder -IDs. Nutze ihn, wenn
  eine kuratierte Liste deine Quellen festlegt. Ab $0.00015 pro Datensatz.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): Scrapt
  Community-Infos, Posts, Suchen, Mitglieder & Moderatoren. Nutze ihn, wenn
  deine Quellen X-Communities sind. Ab $0.00015 pro Datensatz.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): Scrapt
  Echtzeit-Trends nach Standort mit Rang, Volumen, Suchbegriff & WOEID. Nutze
  ihn, wenn du verfolgst, was wo gerade angesagt ist. Ab $0.00015 pro Trend.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): Scrapt
  lange X-Artikel als Markdown & Text mit Titelbildern, Autoren, Daten &
  Kennzahlen. Nutze ihn, wenn du Artikeltexte statt Posts brauchst. Ab
  $0.00015 pro Artikel.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader):
  Extrahiert oder speichert Fotos, Videos & GIFs aus Posts oder Profilen mit
  MP4- & Metadaten-Optionen. Nutze ihn, wenn du die Mediendateien selbst
  brauchst. Ab $0.00015 pro Medien-Datensatz.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  Verfolgt Markenerwähnungen mit KI-Relevanz, Sentiment & Antworten zur
  Kundenerfahrung & vergleicht Runs. Nutze ihn, wenn du eine Marke über längere
  Zeit beobachtest. Ab $0.0003 pro analysiertem Post.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  Kennzeichnet Haltung, Intensität & Sarkasmus-Wahrscheinlichkeit für jeden
  Post mit KI. Nutze ihn, wenn du allgemeines Sentiment zu einem Thema
  brauchst. Ab $0.0003 pro analysiertem Post.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  Kennzeichnet bullische, bärische, neutrale oder gemischte Haltung,
  Inhaltstyp, Überzeugungsgrad & Asset-Relevanz mit KI. Nutze ihn, wenn du
  Aktien, Krypto oder Trading-Talk verfolgst. Ab $0.0003 pro analysiertem Post.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  Beantwortet deine eigenen Kategorie-, Score- & Ja/Nein-Fragen für jeden Post
  mit KI. Nutze ihn, wenn die vorgefertigten Analysen nicht zu deinen Labels
  passen. Ab $0.0003 pro analysiertem Post.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer):
  Schätzt für jeden Post einen Viral Score von 0 bis 100 & ein Urteil aus 8
  KI-Antworten zu Merkmalen. Nutze ihn, wenn du untersuchst, warum Posts sich
  verbreiten oder floppen. Ab $0.0003 pro analysiertem Post.

## FAQ & Support

### Brauche ich einen KI-Account, einen X-API-Schlüssel oder einen Login?

Nein. X (Twitter) News Monitor von Xquik enthält die KI-Kosten im Preis. Du
brauchst keinen KI-Account, keine Tokens & keinen Schlüssel. Du brauchst auch
keinen X-API-Schlüssel, keinen Login & keine Zugangsdaten.

### Kann ich eigene Fragen nutzen?

Ja. Eigene `analysis.questions` ersetzen die Standardfragen. Sende 1 bis 8
Fragen vom Typ `choice`, `score` oder `probability`. Choice-Fragen akzeptieren 2
bis 255 Kategorien. Score-Fragen brauchen mindestens 2 geordnete Stufen.
Behalte dieselben Fragen in allen Runs, die du vergleichen willst.

### Warum kam ein Datensatz mit `analysis.status` `failed` oder `skipped` zurück?

Der Actor hat den Post gesammelt & geliefert, aber die KI-Analyse lief nicht zu
Ende. `analysis.reason` nennt die Ursache. `context_limit` bedeutet, dass dein
Kontext & deine Ziele keinen Platz für den Post lassen. `service_unavailable`
bedeutet, dass der Analysedienst kurz nicht erreichbar war. Diese Datensätze
kosten keine Ergebnisgebühr. Kürze `analysis.context` oder starte einen
neuen Run für die betroffenen IDs.

Der Actor analysiert auch einen Post, der länger als `maxContextBytes` ist. Er
kürzt zuerst zitierte & beantwortete Posts, dann den Post selbst.
`analysis.contextAvailability.postText` ist dann `truncated`. Erhöhe
`maxContextBytes` auf bis zu 64.000, um mehr Text zu behalten.

### Prüft die Analyse Fakten?

Nein. Antworten beschreiben, was der Post ausdrückt & wie er es darstellt.
Wahrscheinlichkeiten drücken die Sicherheit der KI aus, nicht die Wahrheit.
Prüfe wichtige Einstufungen am Originalpost, den jeder Datensatz behält.

### Welche Sprachen funktionieren?

Die Extraktion unterstützt jede Sprache, die X anbietet. Wir validieren die
Analyse zuerst an englischsprachigen Kundenszenarien. Andere unterstützte
Sprachen liefern Antworten mit derselben Struktur. `unclear`-Kategorien &
Wahrscheinlichkeiten zeigen Unsicherheit in jeder Sprache.

### Wie begrenze ich die Kosten?

Filter, Deduplizierung & `maxItems` laufen vor der Analyse. Du zahlst nur für
eindeutige Posts, die zu deinen Filtern passen. Nutze präzise Suchoperatoren,
Datumsgrenzen & Mindestwerte für Interaktionen. Starte mit einem kleinen
`maxItems`, um die Qualität der Antworten vor einem großen Run zu prüfen.

### Ist es legal, X-Daten zu analysieren?

Der Actor fragt öffentliche X-Felder ab. Ergebnisse können personenbezogene
Daten enthalten. Prüfe, ob dein Zweck rechtmäßig ist. Befolge geltende
Datenschutzregeln. Hol dir bei Unsicherheit qualifizierten Rechtsrat.

### Kann ich API, Zeitpläne & Integrationen nutzen?

Ja. Im [API-Tab](https://apify.com/xquik/x-twitter-news-monitor/api) findest du
Beispiele für Python, JavaScript & cURL. Nutze
Apify-[Zeitpläne](https://docs.apify.com/platform/schedules) für wiederkehrende
Runs. Übergib die vorherige Dataset-ID als `monitor.baselineDatasetId`, um
Änderungen zu sehen. Apify-Integrationen verbinden Runs auch mit Webhooks, Make,
Zapier, n8n & Google Sheets.

### Wo bekomme ich Hilfe?

Öffne ein Issue auf der Actor-Seite oder schreib mit der Run-ID an
support@xquik.com. Kostenlose Diagnosen im Key-Value-Store erklären leere,
unvollständige oder unterbrochene Runs.
