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

Xquik ist der schnellste & günstigste X-(Twitter)-Scraper-Dienst der Welt mit
den umfassendsten X-Daten, und X (Twitter) Tweet Classifier beantwortet
deine eigenen Labels, Scores & Ja/Nein-Fragen für jeden Tweet. Jeder andere
Apify Actor berechnet, bevor gefiltert oder dedupliziert wird. Xquik
berechnet nur für gelieferte, eindeutige, filterkonforme Ergebnisse.

Die KI-Kosten sind im Preis pro Tweet enthalten. Du bezahlst keinen KI-Anbieter, kaufst keine Tokens & bringst keinen Schlüssel mit.

Klassifiziere X-(Twitter-)Beiträge mit deinen eigenen Fragen & behalte die
ursprünglichen Tweet-Daten. **X Tweet Classifier with AI Analysis** sammelt passende Tweets und beantwortet dann 1-8 typisierte
Fragen pro Beitrag: Kategorien für die Support-Triage, Scores für die
Priorisierung & Wahrscheinlichkeiten für die Relevanz. Voreinstellungen
decken Markenbeobachtung, Beschwerden, Wettbewerber, Kaufabsicht,
Produktfeedback, News, Sentiment & Marktsentiment ab; eigene Fragen
ersetzen sie.

- **Typisierte Antworten** mit Wahrscheinlichkeiten, Konfidenz &
  Fragenversionen.
- **Deine Fragen, deine Kategorien**: bis zu 255 Kategorien pro Frage.
- **Vollständige Quelldatensätze** für jedes Feld, das der Tweet
  offenlegt.
- **Filterbasierte Abrechnung**: Nur eindeutige, filterkonforme Tweets mit
  erfolgreicher Analyse werden berechnet.

## So klassifizierst du Tweets mit eigenen Fragen

1. Füge Tweet-URLs, Suchbegriffe, Profil-Handles oder Tweet-IDs hinzu.
2. Setze `maxItems` & die Extraktionsfilter, die deine Aufgabe braucht.
3. Trage deine Fragen unter `analysis.questions` ein, oder wähle eine
   Voreinstellung mit `analysis.preset`.
4. Führe den Actor aus & öffne das Dataset.

Unterstützte Modi sammeln Tweets, Suchen, Profilbeiträge, Listen,
Antworten, Zitate & Threads. Eigenständige Artikelextraktion und
Nutzerlisten sind keine Klassifizierungs-Eingaben.

```json
{
  "searchTerms": ["\"need a recommendation\" headphones lang:en"],
  "maxItems": 20,
  "analysis": {
    "questions": [
      {
        "id": "buying",
        "type": "probability",
        "version": "1",
        "instructions": "Does the author want to buy headphones?"
      }
    ],
    "targets": [{ "name": "headphones", "aliases": ["headset"] }],
    "context": "Exclude advertisements aimed at other buyers."
  }
}
```

### Fragen & Grenzen

Stelle 1-8 Fragen mit eindeutigen IDs, Anweisungen & Versionen bereit.

- `choice` nutzt 2-255 benannte `categories` mit Beschreibungen oder
  Null-Werten.
- `score` nutzt ein geordnetes `levels`-Array mit mindestens 2
  Beschreibungen.
- `probability` gibt einen Wert zwischen 0 & 1 zurück. Optionale
  `criteria` enthalten `yes`- & `no`-Beschreibungen.

Voreinstellungen: `brand`, `complaints`, `competitors`,
`purchase_intent`, `product_feedback`, `news`, `sentiment` & `market`.
`maxContextBytes` liegt standardmäßig bei 12.000 Byte; kleinere Limits
überspringen übergroßen Kontext ohne Kürzung. `concurrency` liegt
standardmäßig bei 4 & akzeptiert 1 bis 16. Jede Frage-Definition bleibt
innerhalb eines Kontingents von 8.000 Byte.

## Preise

Die KI-Kosten sind im Preis pro Tweet enthalten. Du bezahlst keinen KI-Anbieter, kaufst keine Tokens & bringst keinen Schlüssel mit.

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
  "tweet": { "id": "2100344867507327087", "text": "…", "likeCount": 6409 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      {
        "questionId": "topic",
        "type": "choice",
        "value": "ai_safety",
        "confidence": 0.93
      },
      {
        "questionId": "disclosure",
        "type": "probability",
        "probability": 0.97
      },
      {
        "questionId": "specificity",
        "type": "score",
        "value": 2,
        "confidence": 0.88
      }
    ]
  }
}
```

Jedes Ergebnis enthält `tweet` & `analysis`. Antworten enthalten Typen,
Fragenversionen & verfügbare Wahrscheinlichkeiten. Eine fehlgeschlagene
oder übersprungene Analyse behält den gesammelten Tweet mit einer leeren
Antwortliste & einem `reason`. Kostenlose Diagnosen im Key-Value-Store
erklären ungültige Eingaben, fehlende Ergebnisse & unterbrochene
Erfassung, & der Run-Report trennt gesammelte Datensätze, abgerechnete
Analysen & ausstehende Gebühren.

## Run-Zusammenfassung & flache Antworten

Jeder Run schreibt einen `analysis-summary`-Datensatz in seinen
Key-Value-Store & wiederholt ihn unter `results.analysisSummary` im
Run-Report. Er zählt analysierte, fehlgeschlagene & übersprungene
Datensätze, summiert Interaktionen und fasst jede Frage zusammen. Jede
eigene Frage erhält ihren eigenen Block: Kategoriezählungen & -anteile für
Choice-Fragen, Mittelwert & Stufenzählungen für Score-Fragen,
Ja- & Nein-Zählungen für Ja/Nein-Fragen. Zahlen sind auf 4
Nachkommastellen gerundet; leere Runs melden Nullwerte &
`null`-Mittelwerte. Übergib `analysis.preset` mit `brand`, `complaints`,
`purchase_intent`, `product_feedback`, `competitors`, `sentiment`,
`market` oder `news`, um eine eingebaute Linse statt eigener Fragen zu
nutzen; die Zusammenfassung meldet dann diese Linse pro Frage. Jeder
Datensatz listet außerdem `sourceDomains`, die Hostnamen, auf die er
verlinkt, `cashtags` wie `$NVDA`, die in seinem Text gefunden wurden, und
der `monitor`-Block der Zusammenfassung zählt Vergleichsstatus & listet
bis zu 50 geänderte Datensätze, wenn `monitor.baselineDatasetId` gesetzt
ist.

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
jede Entscheidung für eine deiner Fragen listet, die sich von `previous`
zu `current` geändert hat. Entscheidungen werden nach Kategorie,
gerundeter Score-Stufe oder Ja/Nein bei 0,5 verglichen, und eine
Entscheidung zählt nur als geändert, wenn sich die Antwort deutlich
verschiebt: die frühere Kategorie fällt unter eine Wahrscheinlichkeit von
0,4, ein Score bewegt sich um mindestens 0,6 Stufen, oder eine
Ja/Nein-Wahrscheinlichkeit landet mindestens 0,1 vom Schwellenwert
entfernt. Fast unentschiedenes Rauschen zwischen Runs bleibt unverändert.
Baselines über `maxBaselineRows` (Standard: 100.000) oder aus
abweichenden Einstellungen stoppen den Run vor der Erfassung mit einem
Diagnose-Datensatz.

## Task-Beispiele

Wähle aus 50 öffentlichen Tasks. Jeder startet mit einer echten
englischen Suche mit begrenztem `maxItems`, vorgefertigten eigenen Fragen
& der Übersichts-Dataset-Ansicht. Bearbeite die Suche oder die Fragen vor
dem Ausführen.

- [Triage customer support requests on X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/triage-support-requests-on-x)
- [Score sales leads from X posts](https://apify.com/xquik/x-twitter-tweet-classifier/examples/score-sales-leads-from-x-posts)
- [Detect service outage reports on X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/detect-outage-reports-on-x)
- [Classify hiring signals on X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-hiring-signals-on-x)
- [Tag product feature requests on X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/tag-feature-requests-on-x)
- [Classify app feedback like store reviews](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-app-store-style-feedback)
- [Detect scam and fraud warnings on X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/detect-scam-warnings-on-x)
- [Classify event attendance intent](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-event-attendance-intent)
- [Extract restaurant review signals](https://apify.com/xquik/x-twitter-tweet-classifier/examples/extract-restaurant-review-signals)
- [Separate crypto promotion from analysis](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-crypto-scam-vs-analysis)
- [Classify persuasive political posts](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-political-ad-style-posts)
- [Detect subscription churn risk signals](https://apify.com/xquik/x-twitter-tweet-classifier/examples/detect-churn-risk-signals)

Die übrigen Tasks decken weitere Workflows auf der Actor-Seite ab.

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
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  Kennzeichnet News-Beiträge nach Format, Quellenangabe & Themenrelevanz mit
  KI. Nutze ihn, wenn du Berichterstattung von Kommentaren trennst. Ab
  $0.0003 pro analysiertem Tweet.

## FAQ & Support

### Sind Frageversionen wichtig?

Ja. Die `version`, die du jeder Frage gibst, wird bei jeder Antwort
gespeichert, sodass du erkennen kannst, welcher Wortlaut ein Ergebnis
erzeugt hat, wenn du Fragen im Lauf der Zeit verfeinerst.

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
