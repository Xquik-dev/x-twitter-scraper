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

# X (Twitter) News Monitor with AI Analysis | $0.3/1K Tweets

<table align="center"><tr><td align="center">
<a href="https://youtu.be/4UOSpoOoC3Y?t=367"><img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" width="720" alt="Framer verbindet Xquik MCP mit Coding-Agents"></a><br>
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">Sieh dir an, wie Framer Xquik-Scraper mit Claude Code, Codex, Cursor und mehr nutzt, ab Minute 6:07.</a>
</td></tr></table>

Xquik ist der schnellste & günstigste X-(Twitter)-Scraper-Dienst der Welt mit
den umfassendsten X-Daten, und X (Twitter) News Monitor sortiert News-Beiträge
nach Format, Quellenangabe & Relevanz. Jeder andere Apify Actor berechnet,
bevor gefiltert oder dedupliziert wird. Xquik berechnet nur für gelieferte,
eindeutige, filterkonforme Ergebnisse.

Sortiere News-Beiträge auf X (Twitter) danach, was sie sind, & behalte die
ursprünglichen Tweet-Daten. **X (Twitter) News Monitor with AI Analysis**
sammelt Beiträge zu deinen Themen, ergänzt dann jeden Beitrag um eine
KI-gestützte Format-, Quellenangabe- & Relevanz-Antwort. Trenne
Berichterstattung von Kommentar & Spekulation, sieh, ob eine Quelle genannt
oder verlinkt ist, & behalte nur Beiträge, die die Organisationen, Personen
oder Themen betreffen, die du verfolgst.

- **Format** unterscheidet Berichterstattung, Kommentar, Spekulation,
  Werbung & Satire.
- **Quellenangabe** zeigt, ob eine Behauptung eine Quelle nennt, eine
  verlinkt, aus erster Hand stammt oder keine hat.
- **Relevanz** behält Beiträge zu deinen Zielen & verwirft Namensvettern.
- **Vollständige Quelldatensätze** für jedes Feld, das der Tweet
  offenlegt, einschließlich verlinkter Artikel, sofern verfügbar.

## So klassifizierst du News-Beiträge auf X

1. Füge Suchbegriffe wie `Nvidia earnings lang:en -filter:retweets`,
   Handles von News-Accounts oder Tweet-IDs hinzu.
2. Setze `maxItems` & Extraktionsfilter wie Datumsgrenzen, `filter:news`
   oder Mindest-Reposts.
3. Trage die Organisationen, Personen oder Themen, die du verfolgst, &
   deren Aliasse unter `analysis.targets` ein, & grenze das Thema in
   `analysis.context` ein.
4. Führe den Actor aus & öffne das Dataset.

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

| Frage         | Antwort                                                               |
| -------------- | -------------------------------------------------------------------------- |
| Format          | Berichterstattung, Kommentar, Spekulation, Werbung, Satire, nicht verwandt oder unklar |
| Quellenangabe   | Genannt, verlinkt, aus erster Hand, fehlend oder unklar                     |
| Relevanz        | Wahrscheinlichkeit, dass das berichtete Ereignis deine Ziele betrifft       |

Die Klassifizierung prüft keine Fakten. Eine genannte Quelle ist keine
glaubwürdige Quelle; die Quellenangabe beschreibt, was der Beitrag darstellt.

## Preise

Ab $0.0003 pro erfolgreich analysiertem Tweet, ohne Startgebühr. Die
Erfassung ist enthalten, & das dokumentierte Analyse-Kontingent umfasst 8
Fragen, 8.000 Byte pro Frage-Definition & 12.000 Byte Kontext pro Tweet.
Extraktionsfilter & Deduplizierung laufen vor der Analyse, sodass
herausgefilterte & doppelte Datensätze nie analysiert oder berechnet
werden. Fehlgeschlagene & übersprungene Analysen sowie Diagnose-Datensätze
verursachen keine Ergebnisgebühr. Die Apify-Plattformnutzung wird separat
von Apify berechnet & erscheint im Tab „Pricing".

## Eingabe- & Ausgabebeispiele

Die obige Eingabe ist kopierfertig. Ausgabedatensätze sehen so aus
(gekürzt):

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
Fragenversionen & verfügbare Wahrscheinlichkeiten. Wenn ein Beitrag einen
X-Artikel verlinkt, ruft die Analyse dessen Titel, Vorschau & Textblöcke
als Kontext ab, und `analysis.contextAvailability.article` meldet
`text_blocks`, `summary` (nur Titel & Vorschau) oder `not_supplied`. Eine
fehlgeschlagene oder übersprungene Analyse behält den gesammelten Tweet mit
einer leeren Antwortliste & einem `reason`. Kostenlose Diagnosen im
Key-Value-Store erklären ungültige Eingaben, fehlende Ergebnisse &
unterbrochene Erfassung, & der Run-Report trennt gesammelte Datensätze,
abgerechnete Analysen & ausstehende Gebühren.

## Run-Zusammenfassung & flache Antworten

Jeder Run schreibt einen `analysis-summary`-Datensatz in seinen
Key-Value-Store & wiederholt ihn unter `results.analysisSummary` im
Run-Report. Er zählt analysierte, fehlgeschlagene & übersprungene
Datensätze, summiert Interaktionen und fasst jede Frage zusammen. Die
Aufteilung `format` trennt Berichterstattung von Kommentar, Spekulation,
Werbung & Satire; `attribution` zählt genannte, verlinkte, aus erster Hand
stammende & fehlende Quellen; `relevance` zählt Beiträge zu jedem Ziel, wobei
`targets` die Erwähnungen pro Ziel angibt und der `top`-Eintrag jedes Ziels
dessen am stärksten interagierte Beiträge pro Antwortkategorie listet.
Zahlen sind auf 4 Nachkommastellen gerundet; leere Runs melden Nullwerte &
`null`-Mittelwerte. `sourceDomains` zählt verlinkte Domains über den Run
hinweg, jeder `targets`-Eintrag führt `choices` mit der Format- &
Quellenangabe-Aufteilung für Beiträge zu diesem Ziel, und
`monitor.changedRows` listet Beiträge, deren Entscheidungen sich seit der
Baseline geändert haben. Jeder Datensatz listet außerdem `sourceDomains`,
die Hostnamen, auf die er verlinkt, `cashtags` wie `$NVDA`, die in seinem
Text gefunden wurden, und der `monitor`-Block der Zusammenfassung zählt
Vergleichsstatus & listet bis zu 50 geänderte Datensätze, wenn
`monitor.baselineDatasetId` gesetzt ist.

Jeder Ergebnisdatensatz führt außerdem `answers`, eine flache Zuordnung
von Frage-ID zu gewählter Kategorie, Score oder Wahrscheinlichkeit. Die
Dataset-Ansicht „Flat answers" sowie CSV- oder Excel-Exporte zeigen eine
Spalte pro Frage neben dem Tweet, sodass Tabellenkalkulationen kein JSON
parsen müssen. Fehlgeschlagene & übersprungene Datensätze führen eine
leere Zuordnung.

## Mit einem früheren Run vergleichen

Übergib `monitor.baselineDatasetId`, die Dataset-ID eines abgeschlossenen
früheren Runs mit denselben Analyseeinstellungen, und jeder Datensatz
erhält ein `monitor`-Objekt: `first_run` ohne Baseline,
`new_to_baseline` für Tweets, die der frühere Run nicht hatte,
`unchanged` oder `changed` für Tweets, die er hatte, mit `changes`, das
jede Format-, Quellenangabe- oder Relevanz-Entscheidung listet, die sich
von `previous` zu `current` geändert hat. Entscheidungen werden nach
Kategorie, gerundeter Score-Stufe oder Ja/Nein bei 0,5 verglichen, und
eine Entscheidung zählt nur als geändert, wenn sich die Antwort deutlich
verschiebt: die frühere Kategorie fällt unter eine Wahrscheinlichkeit von
0,4, ein Score bewegt sich um mindestens 0,6 Stufen, oder eine
Ja/Nein-Wahrscheinlichkeit landet mindestens 0,1 vom Schwellenwert entfernt.
Fast unentschiedenes Rauschen zwischen Runs bleibt unverändert. Baselines
über `maxBaselineRows` (Standard: 100.000) oder aus abweichenden
Einstellungen stoppen den Run vor der Erfassung mit einem
Diagnose-Datensatz.

## Task-Beispiele

Wähle aus 50 öffentlichen Tasks. Jeder startet mit einer echten
englischen Suche mit begrenztem `maxItems`, vorgefertigten Zielen &
Kontext, & der Übersichts-Dataset-Ansicht. Bearbeite die Suche oder die
Ziele vor dem Ausführen.

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

Die übrigen Tasks decken weitere Marken, Themen & Märkte auf der
Actor-Seite ab.

## Verwandte Xquik Actors

Jeder Xquik Actor nutzt dieselbe Extraktions-Engine, filterbasierte
Abrechnung & Diagnosen. Wähle den, der zu deinen Daten passt.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): Scrapt Tweets
  aus Suchen, Profil-Timelines, Listen & Tweet-IDs mit über 50 Filtern &
  flachen Exporten. Nutze ihn, wenn du Tweet-Daten ohne Analyse brauchst. Ab
  $0.00015 pro Datensatz.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): Scrapt
  Profile samt Beiträgen, Antworten, Medien & Likes anhand von Handles, IDs
  oder URLs. Nutze ihn, wenn du von Accounts statt von Suchen ausgehst. Ab
  $0.00015 pro Datensatz.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): Scrapt
  Antworten, Kommentare & ganze Unterhaltungen unter Beiträgen mit über 25
  Filtern. Nutze ihn, wenn du die Diskussion unter Tweets brauchst. Ab
  $0.00015 pro Datensatz.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): Scrapt
  Antworten, Zitate, Retweeter, Liker & Threads zu Beitrags-URLs oder -IDs in
  großen Mengen. Nutze ihn, wenn du misst, wer mit Beiträgen interagiert hat.
  Ab $0.00015 pro Datensatz.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): Scrapt
  Follower, Gefolgte, Listenmitglieder, Abonnenten & Community-Mitglieder als
  Profil-Datensätze. Nutze ihn, wenn du Zielgruppen- oder Mitgliederlisten
  brauchst. Ab $0.00015 pro Profil.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper):
  Sucht Nutzer nach Handle, Bio & Standort mit Filtern für Follower,
  Verifizierung, Kontoalter & Standort. Nutze ihn, wenn du Account-Listen aus
  einer Suche aufbaust. Ab $0.00015 pro Profil.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): Scrapt
  Listenbeiträge, -mitglieder & -follower aus Listen-URLs oder -IDs. Nutze
  ihn, wenn eine kuratierte Liste deine Quellen festlegt. Ab $0.00015 pro
  Datensatz.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): Scrapt
  Community-Infos, Beiträge, Suchen, Mitglieder & Moderatoren. Nutze ihn,
  wenn deine Quellen X-Communities sind. Ab $0.00015 pro Datensatz.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): Scrapt
  Echtzeit-Trends nach Standort mit Rang, Volumen, Suchbegriff & WOEID. Nutze
  ihn, wenn du verfolgst, was wo gerade angesagt ist. Ab $0.00015 pro Trend.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): Scrapt
  lange X-Artikel als Markdown & Text mit Titelbildern, Autoren, Daten &
  Kennzahlen. Nutze ihn, wenn du Artikeltexte statt Tweets brauchst. Ab
  $0.00015 pro Artikel.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader):
  Extrahiert oder speichert Fotos, Videos & GIFs aus Beiträgen oder Profilen
  mit MP4- & Metadaten-Optionen. Nutze ihn, wenn du die Mediendateien selbst
  brauchst. Ab $0.00015 pro Medien-Datensatz.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  Verfolgt Markenerwähnungen mit KI-Relevanz, Sentiment & Antworten zur
  Kundenerfahrung & vergleicht Runs. Nutze ihn, wenn du eine Marke über Zeit
  beobachtest. Ab $0.0003 pro analysiertem Tweet.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  Kennzeichnet Haltung, Intensität & Sarkasmus-Wahrscheinlichkeit für jeden
  Tweet mit KI. Nutze ihn, wenn du allgemeines Sentiment zu einem Thema
  brauchst. Ab $0.0003 pro analysiertem Tweet.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  Kennzeichnet bullische, bärische, neutrale oder gemischte Haltung,
  Inhaltstyp, Überzeugungsgrad & Asset-Relevanz mit KI. Nutze ihn, wenn du
  Aktien, Krypto oder Trading-Talk verfolgst. Ab $0.0003 pro analysiertem
  Tweet.
- [X (Twitter) Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  Beantwortet deine eigenen Kategorie-, Score- & Ja/Nein-Fragen für jeden
  Tweet mit KI. Nutze ihn, wenn die vorgefertigten Analysen nicht zu deinen
  Labels passen. Ab $0.0003 pro analysiertem Tweet.

## FAQ & Support

### Kann ich eigene Fragen nutzen?

Ja. Eigene `analysis.questions` ersetzen die Standardwerte: 1-8
`choice`-, `score`- oder `probability`-Fragen mit 2-255 Kategorien oder
mindestens 2 geordneten Stufen.

### Warum kam ein Datensatz mit `analysis.status` `failed` oder `skipped` zurück?

Der Tweet wurde gesammelt & geliefert, aber die KI-gestützte Analyse
wurde nicht abgeschlossen. `analysis.reason` nennt die Ursache, etwa
`context_limit`, wenn der Tweet & sein Kontext `maxContextBytes`
überschreiten, oder `service_unavailable` nach Wiederholungsversuchen.
Diese Datensätze verursachen keine Ergebnisgebühr. Erhöhe
`maxContextBytes` (bis zu 12.000) oder führe die betroffenen IDs erneut
aus.

### Prüft die Analyse Fakten?

Nein. Antworten beschreiben, was der Beitrag ausdrückt & wie er
formuliert ist. Wahrscheinlichkeiten drücken die Modellsicherheit aus,
nicht die Wahrheit. Überprüfe wichtige Einstufungen anhand des
ursprünglichen Tweets, den jeder Datensatz behält.

### Welche Sprachen funktionieren?

Die Extraktion unterstützt jede Sprache, die X anbietet. Die Analyse ist
zuerst an englischsprachigen Kundenszenarien validiert; andere
unterstützte Sprachen liefern Antworten mit derselben Struktur, &
Unsicherheit bleibt durch `unclear`-Kategorien & Wahrscheinlichkeiten
explizit.

### Wie begrenze ich die Kosten?

Filter, Deduplizierung & `maxItems` laufen vor der Analyse, sodass nur
eindeutige, filterkonforme Tweets analysiert & berechnet werden. Nutze
präzise Suchoperatoren, Datumsgrenzen & Interaktionsuntergrenzen, & starte
mit einem kleinen `maxItems`, um die Antwortqualität vor einem großen
Run zu prüfen.

### Wo bekomme ich Hilfe?

Öffne ein Issue auf der Actor-Seite oder kontaktiere
support@xquik.com mit der Run-ID. Kostenlose Diagnosen im
Key-Value-Store erklären leere, teilweise oder unterbrochene Runs.

Xquik ist ein unabhängiger Drittanbieter-Dienst. Nicht verbunden mit X Corp.
„Twitter" und „X" sind Marken von X Corp.
