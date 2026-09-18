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
den umfassendsten X-Daten, und X (Twitter) Brand Monitoring with AI Analysis verfolgt
Markenerwähnungen mit Relevanz, Sentiment & Antworten zur Kundenerfahrung.
Jeder andere Apify Actor berechnet, bevor gefiltert oder dedupliziert wird.
Xquik berechnet nur für gelieferte, eindeutige, filterkonforme Ergebnisse.

Die KI-Kosten sind im Preis pro Tweet enthalten. Du bezahlst keinen KI-Anbieter, kaufst keine Tokens & bringst keinen Schlüssel mit.

Verfolge Markenerwähnungen auf X (Twitter) & beobachte Sentiment-Änderungen
zwischen Runs. **X (Twitter) Brand Monitoring with AI Analysis** sammelt
jeden passenden Tweet, ergänzt jeden Beitrag um KI-gestützte Relevanz-,
Sentiment- & Kundenerfahrungs-Antworten, & vergleicht die Antworten mit
einem früheren Dataset, damit du siehst, was sich geändert hat.
Ursprüngliche Tweet-Daten bleiben in jedem Datensatz, sodass Exporte,
Überprüfungen & Folgeanalysen keinen zweiten Scrape brauchen.

Nutze es, um eine Marke, eine Produktlinie oder eine Kampagne auf
Beschwerden, Lob & Kaufanfragen zu beobachten; um Support- & Marketing-Teams
mit echten Beiträgen statt Aggregat-Scores zu briefen; & um eine
runübergreifende Historie zu führen, wie Kunden über dich sprechen.

- **Jedes Feld des Quell-Tweets** bleibt neben den Antworten erhalten: Text,
  Autor, Zähler, Medien, Links, zitierte & beantwortete Beiträge.
- **Typisierte Antworten**: eine Relevanz-Wahrscheinlichkeit, eine
  Sentiment-Kategorie mit Wahrscheinlichkeiten & eine
  Kundenerfahrungs-Kategorie.
- **Änderungsverfolgung** zwischen Runs nach Entscheidung, nicht nach
  Wahrscheinlichkeitsrauschen.
- **Filterbasierte Abrechnung**: Nur eindeutige, filterkonforme Tweets mit
  erfolgreicher Analyse werden berechnet.

## So überwachst du eine Marke auf X

1. Füge Suchbegriffe hinzu (zum Beispiel `"Acme headphones" lang:en`),
   Profil-Handles, Tweet-URLs oder Tweet-IDs.
2. Setze `maxItems` & die Extraktionsfilter, die deine Aufgabe braucht, wie
   Datumsgrenzen, Mindest-Likes oder Ausschluss von Antworten.
3. Trage deine Markennamen & Aliasse unter `analysis.targets` ein & beschreibe
   die Marke in `analysis.context`.
4. Führe den Actor aus, dann behalte die Dataset-ID für deinen nächsten
   Vergleich.
5. Ergänze im nächsten Run `monitor.baselineDatasetId` mit dieser ID. Halte
   Fragen, Ziele, Kontext & Kontextgrenzen unverändert, damit die Antworten
   vergleichbar bleiben.

```json
{
  "searchTerms": ["\"Acme headphones\" lang:en"],
  "maxItems": 100,
  "analysis": {
    "targets": [{ "name": "Acme", "aliases": ["Acme headphones"] }],
    "context": "Consumer headphones & customer service."
  },
  "monitor": {
    "baselineDatasetId": "YOUR_PREVIOUS_DATASET_ID",
    "maxBaselineRows": 100000
  }
}
```

Ziele leiten die Klassifizierung. Sie erstellen keine Suchanfragen und
entfernen keine irrelevanten Tweets automatisch, daher wähle Suchbegriffe &
Filter, die zu deiner Recherche passen.

### Was der Monitor beantwortet

| Frage                | Antwort                                                    |
| --------------------- | -------------------------------------------------------------- |
| Markenrelevanz         | Wahrscheinlichkeit, dass der Tweet dein Ziel behandelt          |
| Sentiment              | Positiv, negativ, gemischt, neutral oder unklar                 |
| Kundenerfahrung        | Kunde, Interessent, Beobachter oder unklar                      |

Nutze Relevanz-Wahrscheinlichkeiten, um mehrdeutige Namensvettern zu
überprüfen. Sentiment beschreibt die vom Autor ausgedrückte Haltung
gegenüber dem Ziel.

### Wie Vergleiche funktionieren

| Vergleichsstatus         | Bedeutung                                                     |
| -------------------------- | ------------------------------------------------------------------ |
| `first_run`                 | Keine Baseline wurde angegeben                                     |
| `new_to_baseline`           | Diese Tweet-ID fehlte in der Baseline                               |
| `unchanged`                 | Jede vergleichbare Entscheidung stimmt überein                     |
| `changed`                   | Mindestens 1 Entscheidung weicht ab                                 |
| `not_comparable`            | Erforderliche Metadaten, IDs oder Abgleichseinstellungen fehlen     |
| `analysis_unavailable`      | Dieser Tweet hat keine erfolgreiche Analyse                         |

Antworten werden nach Entscheidung verglichen: eine `choice`-Antwort nach
ihrer Kategorie, eine `score`-Antwort nach ihrer nächstgelegenen Stufe & eine
`probability`-Antwort nach ihrer Ja/Nein-Entscheidung bei 0,5. Eine
Entscheidung zählt nur als geändert, wenn sich die Antwort deutlich
verschiebt: die frühere Kategorie fällt unter eine Wahrscheinlichkeit von
0,4, ein Score bewegt sich um mindestens 0,6 Stufen, oder eine
Ja/Nein-Wahrscheinlichkeit landet mindestens 0,1 vom Schwellenwert entfernt.
Fast unentschiedenes Rauschen zwischen Runs bleibt unverändert.
Verschiebungen, die dieselbe Entscheidung behalten, bleiben `unchanged`,
sodass Modellschwankungen zwischen Runs deinen Report nicht überfluten.
`changes` listet jede geänderte Frage mit ihrer `previous`- &
`current`-Entscheidung. Änderungen können Modellschwankungen, neuen Kontext
oder bearbeitete Quelldaten widerspiegeln; sie beweisen keine geänderten
Fakten, & ein fehlender Tweet beweist keine Löschung.

Das Baseline-Limit liegt standardmäßig bei 100.000 Datensätzen. Doppelte
Tweet-IDs, Ladefehler & sich ändernde Dataset-Größen stoppen den Vergleich
vor der Erfassung; sie werden nie zu einer leeren Baseline.

## Preise

Die KI-Kosten sind im Preis pro Tweet enthalten. Du bezahlst keinen KI-Anbieter, kaufst keine Tokens & bringst keinen Schlüssel mit.

Ab $0.0003 pro erfolgreich analysiertem Tweet, ohne Startgebühr. Die
Erfassung ist enthalten, & das dokumentierte Analyse-Kontingent umfasst 8
Fragen, 8.000 Byte pro Frage-Definition & 12.000 Byte Kontext pro Tweet.
Extraktionsfilter & Deduplizierung laufen vor der Analyse, sodass
herausgefilterte & doppelte Datensätze nie analysiert oder berechnet
werden. Fehlgeschlagene & übersprungene Analysen sowie Diagnose-Datensätze
verursachen keine Ergebnisgebühr. Die Apify-Plattformnutzung (Rechenleistung,
Speicher & Transfer) wird zu den Sätzen deines Plans separat von Apify
berechnet & erscheint im Tab „Pricing".

## Eingabe- & Ausgabebeispiele

Die obige Eingabe ist kopierfertig. Ausgabedatensätze sehen so aus
(gekürzt):

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
Typen, Fragenversionen & verfügbare Wahrscheinlichkeiten. Fehlender Zitat-,
Antwort-, Autoren- & Medienkontext bleibt unter
`analysis.contextAvailability` explizit sichtbar. Eine fehlgeschlagene oder
übersprungene Analyse behält den gesammelten Tweet mit einer leeren
Antwortliste & einem `reason`. Kostenlose Diagnosen im Key-Value-Store
erklären ungültige Eingaben, fehlende Ergebnisse & unterbrochene Erfassung,
& der Run-Report trennt gesammelte Datensätze, abgerechnete Analysen &
ausstehende Gebühren.

## Run-Zusammenfassung & flache Antworten

Jeder Run schreibt einen `analysis-summary`-Datensatz in seinen
Key-Value-Store & wiederholt ihn unter `results.analysisSummary` im
Run-Report. Er zählt analysierte, fehlgeschlagene & übersprungene
Datensätze, summiert Interaktionen und fasst jede Frage zusammen.
`targets` meldet Erwähnungen, Share of Voice & Interaktion pro Marke oder
Alias, und der `top`-Eintrag jedes Ziels listet dessen drei am stärksten
interagierte Erwähnungen pro Antwortkategorie, sodass die stärksten
negativen & positiven Erwähnungen jeder Marke für Alarme bereitstehen. Der
`sentiment`-Block listet unter `top` die drei am stärksten interagierten
positiven & negativen Erwähnungen, bereit für Alarme, und `relevance`
zählt Erwähnungen, die die Marke betreffen. Zahlen sind auf 4
Nachkommastellen gerundet; leere Runs melden Nullwerte & `null`-Mittelwerte.
Jeder `targets`-Eintrag führt außerdem `choices`, die Antwortaufteilung
unter Tweets, die diese Marke erwähnen, und `monitor.changedRows` listet
Tweets, deren Entscheidungen sich seit der Baseline geändert haben, bereit
für einen Webhook oder Alarm. Jeder Datensatz listet außerdem
`sourceDomains`, die Hostnamen, auf die er verlinkt, und der
`monitor`-Block der Zusammenfassung zählt Vergleichsstatus & listet bis zu
50 geänderte Datensätze, wenn `monitor.baselineDatasetId` gesetzt ist.

Jeder Ergebnisdatensatz führt außerdem `answers`, eine flache Zuordnung
von Frage-ID zu gewählter Kategorie, Score oder Wahrscheinlichkeit. Die
Dataset-Ansicht „Flat answers" sowie CSV- oder Excel-Exporte zeigen eine
Spalte pro Frage neben dem Tweet, sodass Tabellenkalkulationen kein JSON
parsen müssen. Fehlgeschlagene & übersprungene Datensätze führen eine
leere Zuordnung.

## Task-Beispiele

Wähle aus 50 öffentlichen Tasks. Jeder startet mit einer echten
englischen Suche mit begrenztem `maxItems`, vorgefertigten Zielen &
Kontext, & der Übersichts-Dataset-Ansicht. Bearbeite die Suche oder die
Ziele vor dem Ausführen.

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
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  Beantwortet deine eigenen Kategorie-, Score- & Ja/Nein-Fragen für jeden
  Tweet mit KI. Nutze ihn, wenn die vorgefertigten Analysen nicht zu deinen
  Labels passen. Ab $0.0003 pro analysiertem Tweet.

## FAQ & Support

### Kann ich eigene Fragen nutzen?

Ja. Eigene `analysis.questions` ersetzen die Standardwerte: 1-8
`choice`-, `score`- oder `probability`-Fragen. Choice-Fragen akzeptieren
2-255 Kategorien; Scores nutzen mindestens 2 geordnete Stufen. Halte
dieselben Fragen über Runs hinweg, die du vergleichen willst.

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
