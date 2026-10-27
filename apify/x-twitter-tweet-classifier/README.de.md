[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
**Deutsch** · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer verbindet Xquik MCP mit Coding-Agents](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Sieh dir an, wie Framer Xquik-Scraper nutzt](https://youtu.be/4UOSpoOoC3Y?t=367),
mit Claude Code, Codex, Cursor & mehr, ab Minute 6:07.

Xquik ist weltweit der schnellste & günstigste Scraper-Dienst für X (Twitter) &
liefert die vollständigsten X-Daten. X (Twitter) Tweet Classifier von Xquik
beantwortet deine eigenen Fragen zu jedem Post. Frag nach Labels, Scores oder
Ja/Nein-Antworten. Die meisten anderen Apify Actors rechnen ab, bevor sie
filtern oder Duplikate entfernen. Xquik rechnet nur gelieferte, eindeutige
Ergebnisse ab, die zu deinen Filtern passen. Die KI-Kosten sind im Preis pro
Post enthalten. Du brauchst weder einen KI-Account noch Tokens oder einen
Schlüssel.

Klassifiziere Posts auf X (Twitter) mit deinen eigenen Fragen & behalte die
Originaldaten jedes Posts. **X Tweet Classifier with AI Analysis** von Xquik
sammelt passende Posts. Er beantwortet 1 bis 8 typisierte Fragen pro Post. Nutze
Kategorien für die Support-Triage, Scores für die Priorisierung &
Wahrscheinlichkeiten für die Relevanz. Vorlagen decken Markenbeobachtung,
Beschwerden, Wettbewerber, Kaufabsicht, Produktfeedback, News, Sentiment &
Marktsentiment ab. Eigene Fragen ersetzen sie.

- **Typisierte Antworten.** Antworten enthalten Wahrscheinlichkeiten, Konfidenz
  & Fragenversionen.
- **Deine Fragen, deine Kategorien.** Jede Frage nimmt bis zu 255 Kategorien
  auf.
- **Vollständige Quelldatensätze.** Jeder Datensatz behält jedes Feld, das der
  Post liefert.
- **Abrechnung erst nach dem Filtern.** Du zahlst nur für eindeutige Posts mit
  erfolgreicher Analyse, die zu deinen Filtern passen.

> Xquik ist ein unabhängiger Drittanbieter-Dienst. Nicht verbunden mit X Corp.
> "Twitter" und "X" sind Marken von X Corp.

## So klassifizierst du Tweets mit eigenen Fragen

Neu bei Apify?
[Erstelle zuerst einen kostenlosen Account](https://console.apify.com/sign-up?fpr=xquik).
Der kostenlose Plan braucht keine Kreditkarte & gibt dir jeden Monat $5 zum
Ausgeben. Bei $0.0003 pro analysiertem Post reichen $5 für bis zu 16.000
analysierte Posts, vor Abzug der Plattformnutzung. Komm dann hierher zurück &
klicke auf Try for free.

1. Füge Post-URLs, Suchbegriffe, Nutzernamen von Profilen oder Post-IDs hinzu.
2. Setze `maxItems` & die Extraktionsfilter, die deine Aufgabe braucht.
3. Trage deine Fragen unter `analysis.questions` ein oder wähle eine Vorlage mit
   `analysis.preset`. Fehlt beides, nutzt der Run die Vorlage `sentiment`.
4. Starte den Run & öffne das Dataset.

Die unterstützten Modi sammeln Posts, Suchen, Profil-Posts, Listen, Antworten,
Zitate & Threads. Die eigenständige Artikel-Extraktion & Nutzerlisten sind keine
Eingaben für die Klassifizierung.

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

### Fragen & Limits

Gib 1 bis 8 Fragen mit eindeutigen IDs, Anweisungen & Versionen an.

- `choice` nutzt 2 bis 255 benannte `categories` mit Beschreibungen oder
  Null-Werten.
- `score` nutzt ein geordnetes `levels`-Array mit mindestens 2 Beschreibungen.
- `probability` liefert einen Wert zwischen 0 & 1. Optionale `criteria`
  enthalten Beschreibungen für `yes` & `no`.

Die Vorlagen sind `brand`, `complaints`, `competitors`, `purchase_intent`,
`product_feedback`, `news`, `sentiment` & `market`. `maxContextBytes` liegt
standardmäßig bei 64.000 Byte. Ein kleineres Limit kürzt lange Posts passend &
markiert sie als `truncated`. `concurrency` liegt standardmäßig bei 16 &
akzeptiert 1 bis 16. Jede Frage-Definition darf bis zu 8.000 Byte nutzen.

## Eigenen Text analysieren

Füge eigene Entwürfe, Antworten, Rezensionen oder Notizen in `texts` ein. X
Tweet Classifier von Xquik analysiert sie. Er ruft nichts von X ab.

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
- `tweet.id` ist `text:1`, `text:2` & so weiter, & `tweet.type` ist `text`.
- Jeder analysierte Text kostet dieselben $0.0003 wie ein analysierter Post.
- Ist `texts` gesetzt, analysiert der Run nur diese Texte. Starte X-Ziele in
  einem eigenen Run.

## Was kostet es, Tweets zu klassifizieren?

X Tweet Classifier von Xquik kostet ab $0.0003 pro analysiertem Post. Er
verlangt keine Startgebühr. Der Preis enthält Erfassung & KI-Kosten. Du brauchst
weder einen KI-Account noch Tokens oder einen Schlüssel. Der Preis deckt bis zu
8 Fragen & 64.000 Byte Kontext pro Post ab. Jede Frage-Definition darf bis zu
8.000 Byte nutzen.

Brauchst du mehr Volumen, dann
[wähle einen Apify-Plan](https://apify.com/pricing?fpr=xquik) mit mehr
vorausbezahlter Nutzung.

Extraktionsfilter & Deduplizierung laufen vor der Analyse. Herausgefilterte oder
doppelte Datensätze zahlst du nie. Fehlgeschlagene Analysen, übersprungene
Analysen & Diagnose-Datensätze kosten keine Ergebnisgebühr. Apify berechnet die
Plattformnutzung für Rechenzeit, Speicher & Datentransfer separat, zu den
Preisen deines Plans. Der Tab Pricing zeigt sie.

## Eingabe- & Ausgabebeispiele

Die Eingabe oben kannst du direkt kopieren. Ein gekürzter Ausgabedatensatz sieht
so aus.

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
Fragenversionen & verfügbare Wahrscheinlichkeiten. Ein Datensatz mit
fehlgeschlagener oder übersprungener Analyse behält den gesammelten Post & einen
`reason`. Seine Antwortliste ist leer.

Kostenlose Diagnosen im Key-Value-Store erklären ungültige Eingaben, fehlende
Ergebnisse & unterbrochene Erfassung. Der Run-Report trennt gesammelte
Datensätze, abgerechnete Analysen & ausstehende Gebühren.

## Run-Zusammenfassung & flache Antworten

Ein Run schreibt in 3 Fällen einen `analysis-summary`-Datensatz in seinen
Key-Value-Store.

- Er hat ein Problem oder ist groß.
- Sein Vergleich findet einen geänderten, neuen oder nicht vergleichbaren Post.
- Er hat `alwaysSaveRunRecords` aktiviert.

Andere Runs überspringen den Datensatz, auch der erste Run einer Serie. Ihr
Status nennt die häufigste Antwort, etwa
`Top sentiment is positive in 3 of 5 results.` Ein Vergleich ohne Änderung
meldet `No change since the earlier run.` Ein Run mit einem Problem oder ein
großer Run schreibt außerdem `run-report`. Das gilt auch für einen Run mit
aktiviertem `alwaysSaveRunRecords`. `run-report` wiederholt die Zusammenfassung
unter `results.analysisSummary`.

Die Zusammenfassung zählt analysierte, fehlgeschlagene & übersprungene
Datensätze. Sie summiert Interaktionen & fasst jede Frage zusammen. Jede eigene
Frage bekommt einen eigenen Block.

- Eine Choice-Frage meldet Zählwerte & Anteile der Kategorien.
- Eine Score-Frage meldet ihren Mittelwert & die Zählwerte der Stufen.
- Eine Ja/Nein-Frage meldet die Zählwerte für Ja & Nein.
- Jeder Datensatz listet `sourceDomains`, die Hostnamen, auf die er verlinkt.
- Jeder Datensatz listet die `cashtags` aus seinem Text, etwa `$NVDA`.
- Ist `monitor.baselineDatasetId` gesetzt, zählt der Block `monitor` der
  Zusammenfassung die Vergleichsstatus. Er listet bis zu 50 geänderte
  Datensätze.

Die Zusammenfassung rundet Zahlen auf 4 Nachkommastellen. Ein leerer Run meldet
Zählwerte von 0 & `null`-Mittelwerte.

Setze `analysis.preset`, um statt eigener Fragen eine eingebaute Vorlage zu
nutzen. Das Feld akzeptiert `brand`, `complaints`, `purchase_intent`,
`product_feedback`, `competitors`, `sentiment`, `market` oder `news`. Die
Zusammenfassung meldet dann jede Frage dieser Vorlage.

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
`monitor`-Objekt. Sein Status nimmt diese Werte an.

- `first_run` ohne Baseline.
- `new_to_baseline` für Posts, die der frühere Run nicht hatte.
- `unchanged` oder `changed` für Posts, die er hatte.

`changes` listet jede Entscheidung zu einer deiner Fragen, die sich von
`previous` zu `current` bewegt hat. Der Vergleich nutzt die Kategorie, die
gerundete Score-Stufe oder Ja/Nein bei 0,5. Eine Entscheidung zählt nur als
geändert, wenn sie sich deutlich bewegt. Knappe Fälle zwischen Runs bleiben
`unchanged`.

Eine Baseline über `maxBaselineRows` oder mit anderen Einstellungen stoppt den
Run vor der Erfassung. Der Run schreibt dann einen Diagnose-Datensatz.
`maxBaselineRows` steht standardmäßig auf 100.000.

## Task-Beispiele

Wähle aus 50 öffentlichen Tasks. Jeder startet mit einer echten englischen Suche
& einem begrenzten `maxItems`. Er enthält fertige eigene Fragen & die
Dataset-Ansicht Overview. Passe Suche oder Fragen an, bevor du startest.

- [Kundensupport-Anfragen auf X sortieren](https://apify.com/xquik/x-twitter-tweet-classifier/examples/triage-support-requests-on-x)
- [Sales-Leads aus X-Posts bewerten](https://apify.com/xquik/x-twitter-tweet-classifier/examples/score-sales-leads-from-x-posts)
- [Meldungen zu Dienstausfällen auf X erkennen](https://apify.com/xquik/x-twitter-tweet-classifier/examples/detect-outage-reports-on-x)
- [Signale für Neueinstellungen auf X klassifizieren](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-hiring-signals-on-x)
- [Feature-Wünsche zu Produkten auf X kennzeichnen](https://apify.com/xquik/x-twitter-tweet-classifier/examples/tag-feature-requests-on-x)
- [App-Feedback wie Store-Bewertungen klassifizieren](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-app-store-style-feedback)
- [Warnungen vor Scams und Betrug auf X erkennen](https://apify.com/xquik/x-twitter-tweet-classifier/examples/detect-scam-warnings-on-x)
- [Absicht zur Teilnahme an Events klassifizieren](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-event-attendance-intent)
- [Signale aus Restaurant-Bewertungen extrahieren](https://apify.com/xquik/x-twitter-tweet-classifier/examples/extract-restaurant-review-signals)
- [Krypto-Werbung von Analysen trennen](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-crypto-scam-vs-analysis)
- [Politische Posts mit Überzeugungsabsicht klassifizieren](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-political-ad-style-posts)
- [Signale für ein Kündigungsrisiko bei Abos erkennen](https://apify.com/xquik/x-twitter-tweet-classifier/examples/detect-churn-risk-signals)

Die übrigen Tasks auf der Actor-Seite decken weitere Workflows ab.

## Verwandte Xquik-Actors

Jeder Xquik-Actor nutzt dieselbe Extraktions-Engine, dieselbe Abrechnung erst
nach dem Filtern & dieselben Diagnosen. Wähle den, der zu den Daten passt, die
du brauchst.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper) scrapt Posts aus
  Suchen, Profil-Timelines, Listen & Post-IDs mit über 50 Filtern & flachen
  Exporten. Nutze ihn, wenn du Post-Daten ohne Analyse brauchst. Ab $0.00015 pro
  Datensatz.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper) scrapt Profile
  samt Posts, Antworten, Medien & Followern anhand von Nutzernamen, IDs oder
  URLs. Nutze ihn, wenn du von Accounts statt von Suchen ausgehst. Ab $0.00015
  pro Datensatz.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper) scrapt Antworten,
  Kommentare & ganze Konversationen unter Posts mit über 25 Filtern. Nutze ihn,
  wenn du die Diskussion unter Posts brauchst. Ab $0.00015 pro Datensatz.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper) scrapt
  Antworten, Zitate, Reposter & Threads zu Post-URLs oder -IDs in großen Mengen.
  Nutze ihn, wenn du misst, wer mit Posts interagiert hat. Ab $0.00015 pro
  Datensatz.
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper)
  scrapt die Zitate von Posts mit Text, Medien, Zählern, Autoren & 11 Filtern.
  Nutze ihn, wenn du untersuchst, wer Posts zitiert hat & was diese Accounts
  gesagt haben. Ab $0.00015 pro Post.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper) scrapt
  Follower, gefolgte Accounts, Listenmitglieder, Abonnenten &
  Community-Mitglieder als Profil-Datensätze. Nutze ihn, wenn du Zielgruppen-
  oder Mitgliederlisten brauchst. Ab $0.00015 pro Profil.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper) sucht
  Nutzer nach Nutzername, Bio & Standort mit Filtern für Follower,
  Verifizierung, Account-Alter & Standort. Nutze ihn, wenn du Account-Listen aus
  einer Suche aufbaust. Ab $0.00015 pro Profil.
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper)
  prüft, wo Accounts ansässig sind, mit der X-Angabe "Account based in", der
  Verbindungsart zu X & Änderungen des Nutzernamens. Nutze ihn, wenn du prüfst,
  wo Accounts ansässig sind. Ab $0.00015 pro Account.
- [X Email Scraper](https://apify.com/xquik/x-email-scraper) holt die E-Mails,
  Telefonnummern & Links, die Accounts in ihren Profilen veröffentlichen, anhand
  von Nutzernamen, Followern oder Nutzersuchen. Nutze ihn, wenn du die E-Mails
  brauchst, die Profile veröffentlichen. Ab $0.00015 pro Profil.
- [X List Scraper](https://apify.com/xquik/x-list-scraper) scrapt Posts,
  Mitglieder & Follower von Listen aus Listen-URLs oder -IDs. Nutze ihn, wenn
  eine kuratierte Liste deine Quellen festlegt. Ab $0.00015 pro Datensatz.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper) scrapt
  Community-Infos, Posts, Suchen, Mitglieder & Moderatoren. Nutze ihn, wenn
  deine Quellen X-Communities sind. Ab $0.00015 pro Datensatz.
- [X Space Scraper](https://apify.com/xquik/x-space-scraper) findet Spaces nach
  Stichwort & liest ihre Titel, Status, Zeiten, Zuhörerzahlen, Hosts & Sprecher.
  Er liest auch Broadcasts per URL oder ID. Nutze ihn, wenn du Live-Audio &
  Live-Video auf X verfolgst. Ab $0.00015 pro Space oder Broadcast.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper) scrapt
  Echtzeit-Trends nach Standort mit Rang, Volumen, Suchbegriff & WOEID. Nutze
  ihn, wenn du verfolgst, was wo gerade angesagt ist. Ab $0.00015 pro Trend.
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper) scrapt
  X-Stellenanzeigen nach Stichwort, Ort, Arbeitsmodell, Karrierestufe &
  Unternehmen, mit Gehältern & Bewerbungslinks. Nutze ihn, wenn du auf X
  veröffentlichte Stellen sammelst. Ab $0.00015 pro Job.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper) scrapt lange
  X-Artikel als Markdown & Text mit Titelbildern, Autoren, Daten & Kennzahlen.
  Nutze ihn, wenn du Artikeltexte statt Posts brauchst. Ab $0.00015 pro Artikel.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader) extrahiert
  oder speichert Fotos, Videos & GIFs aus Posts oder Profilen mit MP4- &
  Metadaten-Optionen. Nutze ihn, wenn du die Mediendateien selbst brauchst. Ab
  $0.00015 pro Medien-Datensatz.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring)
  verfolgt Markenerwähnungen mit KI-Relevanz, Sentiment & Antworten zur
  Kundenerfahrung & vergleicht Runs. Nutze ihn, wenn du eine Marke über längere
  Zeit beobachtest. Ab $0.0003 pro analysiertem Post.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis)
  kennzeichnet Haltung, Intensität & Sarkasmus-Wahrscheinlichkeit für jeden Post
  mit KI. Nutze ihn, wenn du allgemeines Sentiment zu einem beliebigen Thema
  brauchst. Ab $0.0003 pro analysiertem Post.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)
  kennzeichnet bullische, bärische, neutrale oder gemischte Haltung, Inhaltstyp,
  Überzeugungsgrad & Asset-Relevanz mit KI. Nutze ihn, wenn du Aktien, Krypto
  oder Trading-Talk verfolgst. Ab $0.0003 pro analysiertem Post.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)
  kennzeichnet News-Posts nach Format, Quellenangabe & Themenrelevanz mit KI.
  Nutze ihn, wenn du Berichterstattung von Kommentaren trennst. Ab $0.0003 pro
  analysiertem Post.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)
  schätzt für jeden Post einen Viral Score von 0 bis 100 & ein Urteil aus 8
  KI-Antworten zu Merkmalen. Nutze ihn, wenn du untersuchst, warum Posts sich
  verbreiten oder floppen. Ab $0.0003 pro analysiertem Post.
- [X (Twitter) Monitor](https://apify.com/xquik/x-twitter-monitor) erfasst jeden
  neuen Tweet, jede Antwort, jedes Zitat, jeden Repost & jede Profiländerung von
  Accounts, meist in weniger als einer Sekunde, nachdem X sie zeigt, dazu
  Stichwort-Tweets & Follows. Nutze ihn, wenn du Alerts brauchst, sobald X einen
  Tweet zeigt. Ab $0.0045 pro monitor-hour.

## FAQ & Support

Antworten auf häufige Fragen, danach, wo du Hilfe bekommst.

### Brauche ich einen KI-Account, einen X-API-Schlüssel oder einen Login?

Nein. X Tweet Classifier von Xquik enthält die KI-Kosten im Preis. Du brauchst
weder einen KI-Account noch Tokens oder einen Schlüssel. Du brauchst auch weder
einen X-API-Schlüssel noch einen Login oder Zugangsdaten.

### Spielen Fragenversionen eine Rolle?

Ja. Jede Antwort speichert die `version`, die du ihrer Frage gibst. Verfeinerst
du Fragen mit der Zeit, erkennst du, welche Formulierung ein Ergebnis erzeugt
hat.

### Warum kam ein Datensatz mit fehlgeschlagener oder übersprungener Analyse zurück?

`analysis.status` ist `failed` oder `skipped`. Der Actor hat den Post gesammelt
& geliefert, aber die KI-Analyse lief nicht zu Ende. `analysis.reason` nennt die
Ursache. `context_limit` bedeutet, dass dein Kontext & deine Ziele keinen Platz
für den Post lassen. `service_unavailable` bedeutet, dass der Analysedienst kurz
nicht erreichbar war. Diese Datensätze kosten keine Ergebnisgebühr. Kürze
`analysis.context` oder starte einen neuen Run für die betroffenen IDs.

Der Actor analysiert auch einen Post, der länger als `maxContextBytes` ist. Er
kürzt zuerst zitierte & beantwortete Posts, dann den Post selbst.
`analysis.contextAvailability.postText` ist dann `truncated`. Erhöhe
`maxContextBytes` auf bis zu 64.000, um mehr Text zu behalten.

### Prüft die Analyse Fakten?

Nein. Antworten beschreiben, was der Post ausdrückt & wie der Post es darstellt.
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
Daten enthalten. Prüfe, ob dein Zweck rechtmäßig ist, & befolge geltende
Datenschutzregeln. Hol dir bei Unsicherheit qualifizierten Rechtsrat.

### Kann ich die API, Zeitpläne & Integrationen nutzen?

Ja. Im [API-Tab](https://apify.com/xquik/x-twitter-tweet-classifier/api) findest
du Beispiele für Python, JavaScript & cURL. Nutze
[Zeitpläne](https://docs.apify.com/platform/schedules) von Apify für
wiederkehrende Runs. Übergib die vorherige Dataset-ID als
`monitor.baselineDatasetId`, um zu sehen, was sich geändert hat.
Apify-Integrationen verbinden Runs auch mit Webhooks, Make, Zapier, n8n & Google
Sheets.

### Wo bekomme ich Hilfe?

Öffne im [Tab Issues](https://apify.com/xquik/x-twitter-tweet-classifier/issues)
ein Issue mit der Run-ID. Kostenlose Diagnosen im Key-Value-Store erklären Runs,
die Aufmerksamkeit brauchen. Ein Run, der keinen Datensatz zurückbekommt, sagt
in seinem Status, warum.
