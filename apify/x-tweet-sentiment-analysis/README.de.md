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
den umfassendsten X-Daten. X Tweet Sentiment Analysis ergänzt jeden Tweet
um Haltung, Intensität & Sarkasmus. Jeder andere Apify Actor berechnet, bevor
gefiltert oder dedupliziert wird. Xquik berechnet nur für gelieferte,
eindeutige, filterkonforme Ergebnisse. Die KI-Kosten sind im Preis pro Tweet
enthalten. Du bezahlst keinen KI-Anbieter, kaufst keine Tokens & bringst
keinen Schlüssel mit.

Miss die Haltung hinter X-(Twitter-)Beiträgen & behalte die ursprünglichen
Tweet-Daten. **X Tweet Sentiment Analysis with AI** sammelt passende Tweets
und ergänzt dann jeden Beitrag um eine KI-gestützte Sentiment-Kategorie, eine
Intensitätsstufe & eine Sarkasmus-Wahrscheinlichkeit. Verfolge Reaktionen auf
einen Launch, eine Kampagne, eine Episode oder eine öffentliche Person, &
trenne laute Reaktionen von beiläufigen Erwähnungen.

- **Sentiment pro Beitrag**, kein aggregierter Score, den du nicht
  überprüfen kannst.
- **Intensität** trennt emphatische Beiträge von milden.
- **Sarkasmus-Wahrscheinlichkeit** kennzeichnet Beiträge, deren
  wörtlicher Wortlaut der Haltung widerspricht.
- **Vollständige Quelldatensätze** mit jedem Feld, das der Tweet
  offenlegt.

## So analysierst du Tweet-Sentiment

1. Füge Suchbegriffe, Profil-Handles, Tweet-URLs oder Tweet-IDs hinzu.
2. Setze `maxItems` & die Extraktionsfilter, die deine Aufgabe braucht.
3. Lass `analysis.targets` leer, um jeden Beitrag für sich zu beurteilen,
   oder ergänze Namen & Aliasse, um die Haltung auf eine Marke, ein
   Produkt oder eine Person zu fokussieren.
4. Führe den Actor aus & öffne das Dataset.

```json
{
  "searchTerms": ["\"season finale\" lang:en"],
  "maxItems": 200,
  "analysis": { "context": "Reactions to the show, not spoilers." }
}
```

### Was der Actor beantwortet

| Frage      | Antwort                                                        |
| ----------- | ----------------------------------------------------------------- |
| Sentiment   | Positiv, negativ, gemischt, neutral oder unklar                    |
| Intensität  | 0 beiläufige Erwähnung, 1 klare Haltung, 2 emphatischer Wortlaut    |
| Sarkasmus   | Wahrscheinlichkeit, dass der wörtliche Wortlaut der Haltung widerspricht |

Wenn du Ziele angibst, beurteilt das Sentiment die Haltung ihnen
gegenüber & nutzt den Zitat- oder Antwortkontext, den du mitlieferst. Ohne
Ziele beurteilt es das Hauptthema des Beitrags.

## Preise

Die KI-Kosten sind im Preis pro Tweet enthalten. Du bezahlst keinen KI-Anbieter, kaufst keine Tokens & bringst keinen Schlüssel mit.

Ab $0.0003 pro erfolgreich analysiertem Tweet, ohne Startgebühr. Der
Preis enthält die Erfassung. Das Analyse-Kontingent umfasst 8
Fragen, 8.000 Byte pro Frage-Definition & 12.000 Byte Kontext pro Tweet.
Extraktionsfilter & Deduplizierung laufen vor der Analyse, sodass
herausgefilterte & doppelte Datensätze nie analysiert oder berechnet
werden. Fehlgeschlagene & übersprungene Analysen sowie Diagnose-Datensätze
verursachen keine Ergebnisgebühr. Apify berechnet die Plattformnutzung
separat. Der Tab "Pricing" zeigt sie.

## Eingabe- & Ausgabebeispiele

Die obige Eingabe ist kopierfertig. Ausgabedatensätze sehen so aus
(gekürzt):

```json
{
  "tweet": { "id": "2100493544842494265", "text": "…", "likeCount": 12 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      {
        "questionId": "sentiment",
        "type": "choice",
        "value": "positive",
        "confidence": 0.91
      },
      {
        "questionId": "intensity",
        "type": "score",
        "value": 2,
        "confidence": 0.8
      },
      { "questionId": "sarcasm", "type": "probability", "probability": 0.04 }
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
Datensätze, summiert Interaktionen und fasst jede Frage zusammen. Die
Aufteilung `sentiment` zeigt, wie viele Tweets in welche Haltung fallen.
`engagementShares` zeigt dieselbe Aufteilung, wobei jeder Tweet nach seinen
Likes, Retweets, Antworten & Zitaten gewichtet ist. `top` listet die drei
am stärksten interagierten Tweets pro Haltung. Die Zusammenfassung rundet
Zahlen auf 4 Nachkommastellen. Ein leerer Run meldet Nullwerte &
`null`-Mittelwerte. Jeder Datensatz listet `sourceDomains`, die Hostnamen,
auf die er verlinkt, & `cashtags` wie `$NVDA` aus seinem Text. Ist
`monitor.baselineDatasetId` gesetzt, zählt der `monitor`-Block der
Zusammenfassung Vergleichsstatus & listet bis zu 50 geänderte Datensätze.

Jeder Ergebnisdatensatz führt außerdem `answers`, eine flache Zuordnung
von Frage-ID zu gewählter Kategorie, Score oder Wahrscheinlichkeit. Die
Dataset-Ansicht „Flat answers" sowie CSV- oder Excel-Exporte zeigen eine
Spalte pro Frage neben dem Tweet, sodass Tabellenkalkulationen kein JSON
parsen müssen. Fehlgeschlagene & übersprungene Datensätze führen eine
leere Zuordnung.

## Mit einem früheren Run vergleichen

Übergib `monitor.baselineDatasetId`, die Dataset-ID eines abgeschlossenen
früheren Runs mit denselben Analyseeinstellungen. Jeder Datensatz erhält
dann ein `monitor`-Objekt. Sein Status ist `first_run` ohne Baseline,
`new_to_baseline` für Tweets, die der frühere Run nicht hatte, &
`unchanged` oder `changed` für Tweets, die er hatte. `changes` listet
jede Sentiment-, Intensitätsstufen- oder Sarkasmus-Entscheidung, die sich
von `previous` zu `current` geändert hat. Entscheidungen werden nach
Kategorie, gerundeter Score-Stufe oder Ja/Nein bei 0,5 verglichen. Eine
Entscheidung zählt in drei Fällen als geändert. Die frühere Kategorie
fällt unter eine Wahrscheinlichkeit von 0,4. Ein Score bewegt sich um
mindestens 0,6 Stufen. Eine Ja/Nein-Wahrscheinlichkeit landet mindestens
0,1 vom Schwellenwert entfernt. Fast unentschiedenes Rauschen zwischen Runs
bleibt unverändert. Baselines über `maxBaselineRows` (Standard: 100.000)
oder aus abweichenden Einstellungen stoppen den Run vor der Erfassung mit
einem Diagnose-Datensatz.

## Task-Beispiele

Wähle aus 50 öffentlichen Tasks. Jeder startet mit einer echten
englischen Suche mit begrenztem `maxItems`, vorgefertigten Zielen &
Kontext, & der Übersichts-Dataset-Ansicht. Bearbeite die Suche oder die
Ziele vor dem Ausführen.

- [Sentiment of season finale reactions](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-season-finale-reactions)
- [Sentiment of iPhone launch posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-iphone-launch-posts)
- [Sentiment of the Super Bowl halftime show](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-super-bowl-halftime-show)
- [Sentiment toward a new electric car model](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-new-electric-car)
- [Sentiment of Marvel movie audiences](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-marvel-movie-audiences)
- [Sentiment of Taylor Swift album reactions](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-taylor-swift-album-reactions)
- [Sentiment of a video game launch](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-video-game-launch)
- [Sentiment about remote work](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-remote-work)
- [Sentiment of airline passengers](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-airline-passengers)
- [Sentiment of college football fans](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-college-football-fans)
- [Sentiment about interest rate decisions](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-interest-rates)
- [Sentiment toward electric scooters](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-electric-scooters)

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
`choice`-, `score`- oder `probability`-Fragen mit 2-255 Kategorien oder
mindestens 2 geordneten Stufen.

### Warum kam ein Datensatz mit `analysis.status` `failed` oder `skipped` zurück?

Der Actor hat den Tweet gesammelt & geliefert, aber die KI-Analyse
wurde nicht abgeschlossen. `analysis.reason` nennt die Ursache, etwa
`context_limit`, wenn der Tweet & sein Kontext `maxContextBytes`
überschreiten, oder `service_unavailable` nach Wiederholungsversuchen.
Diese Datensätze verursachen keine Ergebnisgebühr. Erhöhe
`maxContextBytes` (bis zu 12.000) oder führe die betroffenen IDs erneut
aus.

### Prüft die Analyse Fakten?

Nein. Antworten beschreiben, was der Beitrag ausdrückt & wie der Beitrag
es formuliert. Wahrscheinlichkeiten drücken die Modellsicherheit aus,
nicht die Wahrheit. Überprüfe wichtige Einstufungen anhand des
ursprünglichen Tweets, den jeder Datensatz behält.

### Welche Sprachen funktionieren?

Die Extraktion unterstützt jede Sprache, die X anbietet. Wir validieren
die Analyse zuerst an englischsprachigen Kundenszenarien. Andere
unterstützte Sprachen liefern Antworten mit derselben Struktur.
`unclear`-Kategorien & Wahrscheinlichkeiten zeigen Unsicherheit in jeder
Sprache.

### Wie begrenze ich die Kosten?

Filter, Deduplizierung & `maxItems` laufen vor der Analyse, sodass der
Actor nur eindeutige, filterkonforme Tweets analysiert & berechnet. Nutze
präzise Suchoperatoren, Datumsgrenzen & Interaktionsuntergrenzen, & starte
mit einem kleinen `maxItems`, um die Antwortqualität vor einem großen
Run zu prüfen.

### Wo bekomme ich Hilfe?

Öffne ein Issue auf der Actor-Seite oder kontaktiere
support@xquik.com mit der Run-ID. Kostenlose Diagnosen im
Key-Value-Store erklären leere, teilweise oder unterbrochene Runs.

Xquik ist ein unabhängiger Drittanbieter-Dienst. Nicht verbunden mit X Corp.
„Twitter" und „X" sind Marken von X Corp.
