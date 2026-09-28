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
liefert die vollständigsten X-Daten. X (Twitter) Brand Monitoring von Xquik
verfolgt Erwähnungen deiner Marke mit Antworten zu Relevanz, Sentiment &
Kundenerfahrung. Die meisten anderen Apify Actors rechnen ab, bevor sie filtern
oder Duplikate entfernen. Xquik rechnet nur gelieferte, eindeutige Ergebnisse
ab, die zu deinen Filtern passen. Die KI-Kosten sind im Preis pro Post
enthalten. Du brauchst keinen KI-Account, keine Tokens & keinen Schlüssel.

Überwache Markenerwähnungen auf X (Twitter) & verfolge Änderungen im Sentiment
zwischen Runs. **X (Twitter) Brand Monitoring with AI Analysis** von Xquik
sammelt jeden passenden Post (Tweet). Es beantwortet mit KI für jeden Post
Fragen zu Relevanz, Sentiment & Kundenerfahrung. Es vergleicht diese Antworten
mit einem früheren Dataset. So siehst du, was sich geändert hat. Jeder
Datensatz behält die Originaldaten des Posts. Exporte, Prüfungen &
Folgeanalysen brauchen keinen zweiten Scrape.

Beobachte eine Marke, eine Produktlinie oder eine Kampagne auf Beschwerden, Lob
& Kauffragen. Informiere Support- & Marketing-Teams mit echten Posts. Halte
fest, wie Kunden von Run zu Run über dich sprechen.

- **Jedes Feld des Quellposts.** Text, Autor, Zähler, Medien, Links, zitierte &
  beantwortete Posts bleiben neben den Antworten.
- **Typisierte Antworten.** Jeder Datensatz hat eine
  Relevanz-Wahrscheinlichkeit, eine Sentiment-Kategorie mit
  Wahrscheinlichkeiten & eine Kategorie zur Kundenerfahrung.
- **Änderungsverfolgung.** Der Vergleich zwischen Runs prüft Entscheidungen.
  Kleine Verschiebungen der Wahrscheinlichkeit zählen also nicht als Änderung.
- **Abrechnung nach dem Filtern.** Du zahlst nur für eindeutige Posts mit
  erfolgreicher Analyse, die zu deinen Filtern passen.

> Xquik ist ein unabhängiger Drittanbieter-Dienst. Nicht verbunden mit X Corp.
> "Twitter" und "X" sind Marken von X Corp.

## So überwachst du eine Marke auf X

1. Füge Suchbegriffe, Nutzernamen von Profilen, Post-URLs oder Post-IDs hinzu.
   Suche zum Beispiel `(Sony OR "WH-1000XM5") headphones lang:en`.
2. Setze `maxItems` & die Extraktionsfilter, die deine Aufgabe braucht.
   Beispiele sind Datumsgrenzen, eine Mindestzahl an Gefällt-mir-Angaben & der
   Ausschluss von Antworten.
3. Trage deine Markennamen & Aliasse unter `analysis.targets` ein & beschreibe
   die Marke in `analysis.context`.
4. Starte den Run & notiere dir die Dataset-ID für den nächsten Vergleich.
5. Ergänze im nächsten Run `monitor.baselineDatasetId` mit dieser ID. Lass
   Fragen, Ziele, Kontext & Kontextgrenzen unverändert, damit die Antworten
   vergleichbar bleiben. Der Vergleich liest dieses Dataset. Er funktioniert
   also auch, wenn dieser Run seine Zusammenfassung übersprungen hat.

```json
{
  "searchTerms": ["(Sony OR \"WH-1000XM5\") headphones lang:en"],
  "maxItems": 100,
  "analysis": {
    "targets": [
      { "name": "Sony", "aliases": ["Sony headphones", "WH-1000XM5"] }
    ],
    "context": "Consumer headphones & customer service."
  },
  "monitor": {
    "baselineDatasetId": "YOUR_PREVIOUS_DATASET_ID",
    "maxBaselineRows": 100000
  }
}
```

Ziele steuern die Klassifizierung. Sie erstellen keine Suchanfragen & entfernen
keine irrelevanten Posts. Wähle Suchbegriffe & Filter, die zu deiner Recherche
passen.

### Was der Monitor beantwortet

| Frage           | Antwort                                               |
| --------------- | ----------------------------------------------------- |
| Markenrelevanz  | Wahrscheinlichkeit, dass der Post dein Ziel behandelt |
| Sentiment       | Positiv, negativ, gemischt, neutral oder unklar       |
| Kundenerfahrung | Kunde, Interessent, Beobachter oder unklar            |

Nutze die Relevanz-Wahrscheinlichkeiten, um mehrdeutige Namensvettern zu
prüfen. Sentiment beschreibt die Haltung, die der Autor gegenüber dem Ziel
ausdrückt.

### So funktionieren Vergleiche

| Vergleichsstatus       | Bedeutung                                                |
| ---------------------- | -------------------------------------------------------- |
| `first_run`            | Es gab keine Baseline                                    |
| `new_to_baseline`      | Diese Post-ID fehlte in der Baseline                     |
| `unchanged`            | Jede vergleichbare Entscheidung stimmt überein           |
| `changed`              | Mindestens 1 Entscheidung weicht ab                      |
| `not_comparable`       | Nötige Metadaten, IDs oder passende Einstellungen fehlen |
| `analysis_unavailable` | Dieser Post hat keine erfolgreiche Analyse               |

Der Actor vergleicht Antworten nach Entscheidung. Eine `choice`-Antwort
vergleicht er nach ihrer Kategorie. Eine `score`-Antwort vergleicht er nach
ihrer nächstgelegenen Stufe. Eine `probability`-Antwort vergleicht er nach ihrer
Ja/Nein-Entscheidung bei 0,5. Eine Entscheidung zählt nur als geändert, wenn
sie sich deutlich bewegt. Knappe Fälle zwischen Runs bleiben `unchanged`. Das
gilt auch für Verschiebungen, die dieselbe Entscheidung behalten. Kleine
KI-Unterschiede zwischen Runs erscheinen also nicht als Änderungen.

`changes` listet jede geänderte Frage mit ihrer Entscheidung `previous` &
`current`. Änderungen können von KI-Schwankungen, neuem Kontext oder
bearbeiteten Quelldaten kommen. Sie beweisen keine geänderten Fakten. Ein
fehlender Post beweist auch keine Löschung.

Das Baseline-Limit `maxBaselineRows` liegt standardmäßig bei 100.000
Datensätzen. Doppelte Post-IDs, Ladefehler & sich ändernde Dataset-Größen
stoppen den Vergleich vor der Erfassung. Sie werden nie zu einer leeren
Baseline.

## Eigenen Text analysieren

Füge eigene Entwürfe, Antworten, Rezensionen oder Notizen in `texts` ein.
X (Twitter) Brand Monitoring von Xquik analysiert sie. Es ruft nichts von X ab.

```json
{
  "texts": [
    "The new update is great, but sync still drops on mobile.",
    "Support fixed my issue in 10 minutes. Thank you."
  ]
}
```

- Jeder Text wird zu 1 Datensatz mit denselben `analysis`-Antworten wie ein
  Post.
- `tweet.id` ist `text:1`, `text:2` usw. `tweet.type` ist `text`.
- Jeder analysierte Text kostet dieselben $0.0003 wie ein analysierter Post.
- Ist `texts` gesetzt, analysiert der Run nur diese Texte. Starte X-Ziele in
  einem eigenen Run.

## Was kostet es, eine Marke auf X zu überwachen?

X (Twitter) Brand Monitoring von Xquik kostet ab $0.0003 pro analysiertem Post.
Es verlangt keine Startgebühr. Der Preis enthält Erfassung & KI-Kosten. Du
brauchst keinen KI-Account, keine Tokens & keinen Schlüssel. Der Preis deckt bis
zu 8 Fragen & 64.000 Byte Kontext pro Post ab. Jede Frage-Definition darf bis zu
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
  "tweet": { "id": "2100344867507327087", "text": "…", "likeCount": 6409 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      { "questionId": "relevance", "type": "probability", "probability": 0.97 },
      {
        "questionId": "sentiment",
        "type": "choice",
        "value": "neutral",
        "confidence": 0.88
      },
      {
        "questionId": "experience",
        "type": "choice",
        "value": "observer",
        "confidence": 0.69
      }
    ]
  },
  "monitor": { "status": "unchanged", "changedQuestionIds": [], "changes": [] }
}
```

Jedes Ergebnis enthält `tweet`, `analysis` & `monitor`. Antworten enthalten
Typen, Fragenversionen & verfügbare Wahrscheinlichkeiten.
`analysis.contextAvailability` meldet fehlenden Kontext zu Zitat, Antwort, Autor
& Medien. Ein Datensatz mit fehlgeschlagener oder übersprungener Analyse behält
den gesammelten Post & einen `reason`. Seine Antwortliste ist leer.

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
etwa `Top sentiment: negative in 2 of 5 results.` Ein Vergleich ohne Änderung
meldet `No change since the earlier run.` Ein Run mit einem Problem oder ein
großer Run schreibt zusätzlich `run-report`. Das gilt auch für einen Run mit
aktiviertem `alwaysSaveRunRecords`. `run-report` wiederholt die Zusammenfassung
unter `results.analysisSummary`.

Die Zusammenfassung zählt analysierte, fehlgeschlagene & übersprungene
Datensätze. Sie summiert Interaktionen & fasst jede Frage zusammen.

- `targets` meldet Erwähnungen, Share of Voice & Interaktionen pro Marke oder
  Alias.
- Jeder Eintrag in `targets` hat `top`, seine 3 Erwähnungen mit den meisten
  Interaktionen pro Antwortkategorie. Nutze es für Alarme zu den stärksten
  negativen & positiven Erwähnungen.
- Jeder Eintrag in `targets` hat `choices`, die Verteilung der Antworten unter
  Posts, die diese Marke erwähnen.
- Der Block `sentiment` listet unter `top` die 3 positiven & negativen
  Erwähnungen mit den meisten Interaktionen.
- `relevance` zählt die Erwähnungen, die wirklich die Marke betreffen.
- `monitor.changedRows` listet Posts, deren Entscheidungen sich seit der
  Baseline geändert haben. Sende sie an einen Webhook oder einen Alarm.
- Ist `monitor.baselineDatasetId` gesetzt, zählt der Block `monitor` die
  Vergleichsstatus. Er listet bis zu 50 geänderte Datensätze.
- Jeder Datensatz listet `sourceDomains`, die Hostnamen, auf die er verlinkt.

Die Zusammenfassung rundet Zahlen auf 4 Nachkommastellen. Ein leerer Run meldet
Zählwerte von 0 & `null`-Mittelwerte.

Jeder Ergebnisdatensatz enthält außerdem `answers`, eine flache Zuordnung mit
der Frage-ID als Schlüssel. Jeder Wert ist die gewählte Kategorie, der Score
oder die Wahrscheinlichkeit. Die Dataset-Ansicht `Flat answers` & CSV- oder
Excel-Exporte zeigen 1 Spalte pro Frage. Die Spalten stehen neben dem Post,
Tabellen brauchen also kein JSON-Parsing. Fehlgeschlagene & übersprungene
Datensätze enthalten eine leere Zuordnung.

## Task-Beispiele

Wähle aus 50 öffentlichen Tasks. Jeder startet mit einer echten englischen Suche
& einem begrenzten `maxItems`. Er enthält fertige Ziele, Kontext & die
Dataset-Ansicht Overview. Passe Suche oder Ziele an, bevor du startest.

- [Monitor Nike brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-nike-brand-mentions-on-x)
- [Monitor Starbucks brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-starbucks-brand-mentions-on-x)
- [Monitor Tesla brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-tesla-brand-mentions-on-x)
- [Monitor Spotify brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-spotify-brand-mentions-on-x)
- [Monitor Netflix brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-netflix-brand-mentions-on-x)
- [Monitor Airbnb brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-airbnb-brand-mentions-on-x)
- [Monitor Uber brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-uber-brand-mentions-on-x)
- [Monitor Peloton brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-peloton-brand-mentions-on-x)
- [Monitor Shopify brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-shopify-brand-mentions-on-x)
- [Monitor Notion brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-notion-brand-mentions-on-x)
- [Monitor Duolingo brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-duolingo-brand-mentions-on-x)
- [Monitor Lululemon brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-lululemon-brand-mentions-on-x)

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
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  Kennzeichnet Haltung, Intensität & Sarkasmus-Wahrscheinlichkeit für jeden
  Post mit KI. Nutze ihn, wenn du allgemeines Sentiment zu einem Thema
  brauchst. Ab $0.0003 pro analysiertem Post.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  Kennzeichnet bullische, bärische, neutrale oder gemischte Haltung,
  Inhaltstyp, Überzeugungsgrad & Asset-Relevanz mit KI. Nutze ihn, wenn du
  Aktien, Krypto oder Trading-Talk verfolgst. Ab $0.0003 pro analysiertem Post.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  Kennzeichnet News-Posts nach Format, Quellenangabe & Themenrelevanz mit KI.
  Nutze ihn, wenn du Berichterstattung von Kommentaren trennst. Ab $0.0003 pro
  analysiertem Post.
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

Nein. X (Twitter) Brand Monitoring von Xquik enthält die KI-Kosten im Preis. Du
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

Ja. Im [API-Tab](https://apify.com/xquik/x-twitter-brand-monitoring/api)
findest du Beispiele für Python, JavaScript & cURL. Nutze
Apify-[Zeitpläne](https://docs.apify.com/platform/schedules) für wiederkehrende
Runs. Übergib die vorherige Dataset-ID als `monitor.baselineDatasetId`, um
Änderungen zu sehen. Apify-Integrationen verbinden Runs auch mit Webhooks, Make,
Zapier, n8n & Google Sheets.

### Wo bekomme ich Hilfe?

Öffne ein Issue auf der Actor-Seite oder schreib mit der Run-ID an
support@xquik.com. Kostenlose Diagnosen im Key-Value-Store erklären leere,
unvollständige oder unterbrochene Runs.
