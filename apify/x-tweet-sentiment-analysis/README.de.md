[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
**Deutsch** · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer verbindet Xquik MCP mit Coding-Agents](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Sieh dir an, wie Framer Xquik-Scraper nutzt](https://youtu.be/4UOSpoOoC3Y?t=367),
mit Claude Code, Codex, Cursor & mehr, ab Minute 6:07.

Xquik ist weltweit der schnellste & günstigste Scraper-Dienst für X (Twitter) &
liefert die vollständigsten X-Daten. X Tweet Sentiment Analysis von Xquik
ergänzt jeden Post um Haltung, Intensität & Sarkasmus. Die meisten anderen Apify
Actors rechnen ab, bevor sie filtern oder Duplikate entfernen. Xquik rechnet nur
gelieferte, eindeutige Ergebnisse ab, die zu deinen Filtern passen. Die
KI-Kosten sind im Preis pro Post enthalten. Du brauchst keinen KI-Account, keine
Tokens oder Schlüssel.

Miss die Haltung hinter Posts auf X (Twitter) & behalte die Originaldaten jedes
Posts. **X Tweet Sentiment Analysis with AI** von Xquik sammelt passende Posts.
Der Actor ergänzt jeden Post um eine KI-gestützte Sentiment-Kategorie, eine
Intensitätsstufe & eine Sarkasmus-Wahrscheinlichkeit. Verfolge Reaktionen auf
einen Launch, eine Kampagne, eine Episode oder eine öffentliche Person. Trenne
laute Reaktionen von beiläufigen Erwähnungen.

> Xquik ist ein unabhängiger Drittanbieter-Dienst. Nicht verbunden mit X Corp.
> "Twitter" und "X" sind Marken von X Corp.

## Warum X Tweet Sentiment Analysis with AI nutzen?

- **Sentiment gegenüber deiner Marke.** Füge eine Marke, ein Produkt oder eine
  Person zu `analysis.targets` hinzu. Die Antworten bewerten dann die Haltung
  dazu.
- **Gewichte Reaktionen nach Interaktion.** `engagementShares` gewichtet die
  Sentiment-Verteilung nach Gefällt-mir-Angaben, Reposts, Antworten & Zitaten.
  `top` listet die 3 Tweets mit den meisten Interaktionen pro Haltung.
- **Sieh, was sich geändert hat.** Trage die Dataset-ID eines früheren Runs in
  `monitor.baselineDatasetId` ein. Jeder Datensatz zeigt dann, welche Antworten
  sich geändert haben.
- **Analysiere eigenen Text.** Füge Entwürfe, Rezensionen oder Antworten in
  `texts` ein, um dieselben Antworten zu erhalten. Der Run ruft nichts von X ab.
- **Tabellentaugliche Antworten.** Die Ansicht `Flat answers` & Exporte als CSV
  oder Excel zeigen 1 Spalte pro Frage.
- **Stelle eigene Fragen.** Ersetze die Standardfragen durch bis zu 8 Fragen in
  `analysis.questions`.
- **Keine Accounts oder Schlüssel.** Der Preis enthält die KI-gestützte Analyse.
  Du brauchst keinen KI-Schlüssel, keinen X-API-Schlüssel & keinen Login.

### Vollständige Ergebnisse

- Große Datumsbereiche kommen vollständig & schnell zurück.
- Suchen liefern jeden Treffer, egal welche Operatoren du kombinierst.
- Gefilterte Seiten kommen voll zurück, bis die Ergebnisse ausgehen.
- Jedes Ergebnis enthält die vollständigsten Daten, die X dafür hat.

### Genaue Datensätze

- Suchergebnisse enthalten jeden Post, der zu deiner Suchanfrage passt, & sonst
  nichts.
- Die Suche nach Wörtern & Phrasen funktioniert in jeder Sprache & Schrift.
- Sprachfilter funktionieren für jede Sprache, die X zuordnet.
- Geschützte Accounts & private Listen bekommen eine klare Antwort statt einer
  leeren Seite.
- Reposts enthalten den vollständigen Originaltext.
- Jede ID in einem Datensatz bleibt exakt.
- Erwähnungen, Links, Hashtags & Hervorhebungen sitzen an der richtigen Stelle
  im Text.
- Verifizierungs-Badges stimmen mit dem überein, was `x.com` zeigt.
- Datensätze enthalten nur öffentliche Daten.
- Ergebnisse mit den neuesten zuerst bleiben über alle Seiten hinweg in echter
  Datumsreihenfolge.
- Suchen akzeptieren Anfragen so, wie du sie auf X eintippen würdest.
- Ortssuchen funktionieren mit Namen in 6 Sprachen.
- Eine Suche, die nicht laufen kann, schlägt sofort fehl & sagt, wie du sie
  korrigierst.
- Ein Datum bedeutet in jeder gängigen Schreibweise dasselbe.
- Suchen akzeptieren die Grenzen `since_id` & `max_id`.
- Werbung & gesponserte Einträge landen nie in deinen Datensätzen.

### Aktuelle Daten

- Abrufe funktionieren weiter, wenn X Änderungen ausrollt.

### Tempo

- Eine langsame Seite hält deinen Run nicht auf.
- Suchen bleiben bei stark diskutierten Themen schnell.
- Jede nächste Seite kommt schnell an.
- Abrufe enden, sobald ihre Datensätze ankommen.
- Hängende Actor-Aufrufe laufen von selbst wieder an.

### Faire Abrechnung

- Eine fehlerhafte Eingabe kostet nichts & sagt dir, was du korrigieren musst.
- Die KI-Analyse berechnet nur die Posts, die sie analysiert hat.
- Actors rechnen nur gelieferte, eindeutige, passende Datensätze ab.
- Ein neu gestarteter Run berechnet nie doppelt.
- Runs bleiben innerhalb deines Ausgabenlimits & schreiben trotzdem ihre
  Diagnosen.
- KI-Actors berechnen keine fehlgeschlagenen oder übersprungenen Analysen.

### Zuverlässigkeit

- Ein einzelner Fehler lässt deinen Run nicht scheitern.
- Die Paginierung bleibt von Seite zu Seite konsistent.
- Die Paginierung läuft nie in eine Endlosschleife.
- Ein Zeitlimit liefert die bereits gefundenen Datensätze samt Diagnosen.
- Actors überstehen kurze Xquik-Ausfälle.
- Actor-Runs überstehen Neustarts ohne Dopplungen.
- Ein fehlerhafter Datensatz lässt keinen Batch scheitern.
- Gestoppte Runs behalten ihre Datensätze & ihren Report.
- Ein Run, der nicht starten kann, erklärt trotzdem, warum.
- Der Support sieht genau, was eine Anfrage oder ein Run geliefert hat.

### Für Agents gebaut

- Actors akzeptieren Eingaben, die für andere Actors geschrieben sind.
- Jeder Run sagt, warum er endete & ob du es erneut versuchen solltest.

### Umfangreiche Daten

- Post-Datensätze enthalten den Text von Note Tweets, Bearbeitungen, Community
  Notes, Reichweiten-Labels & Antworteinstellungen.
- Datensätze enthalten Quell-Apps, Medienzahlen & Daten professioneller
  Accounts.
- Medien kommen mit Varianten, Alt-Text, Größen & Gründen zur Verfügbarkeit.
- KI-Antworten enthalten Wahrscheinlichkeiten, Konfidenz & eine Fragenversion.
- Bloßes Rauschen gilt zwischen Analyse-Runs nicht als Änderung.

### Qualitätsprüfungen

- Jedes Feld, das X zeigt, wird geliefert, bewusst weggelassen oder ist
  nachweislich nicht vorhanden.
- Xquik testet jeden Abruf live gegen X.

## Welche Daten liefert X Tweet Sentiment Analysis with AI?

- **Sentiment pro Post.** Jeder Post bekommt seine eigene Kategorie, so kannst
  du jede Antwort prüfen.
- **Intensität.** Eine Stufe von 0 bis 2 trennt nachdrückliche Posts von milden.
- **Sarkasmus-Wahrscheinlichkeit.** Sie markiert Posts, deren wörtliche
  Formulierung der Haltung widerspricht.
- **Vollständige Quelldatensätze.** Jeder Datensatz behält jedes Feld, das der
  Post liefert.

## So analysierst du das Sentiment von Tweets

Neu bei Apify?
[Erstelle zuerst einen kostenlosen Account](https://console.apify.com/sign-up?fpr=xquik).
Der kostenlose Plan braucht keine Kreditkarte & gibt dir jeden Monat $5 zum
Ausgeben. Bei $0.0003 pro analysiertem Post reichen $5 für bis zu 16.000
analysierte Posts, vor Abzug der Plattformnutzung. Komm dann hierher zurück &
klicke auf Try for free.

1. Füge Suchbegriffe, Nutzernamen von Profilen, Post-URLs oder Post-IDs hinzu.
2. Setze `maxItems` & die Extraktionsfilter, die deine Aufgabe braucht.
3. Lass `analysis.targets` leer, um jeden Post nach seinem eigenen Thema zu
   beurteilen. Willst du dich auf eine Marke, ein Produkt oder eine Person
   konzentrieren, ergänze ihre Namen & Aliasse.
4. Starte den Run & öffne das Dataset.

```json
{
  "searchTerms": ["\"season finale\" lang:en"],
  "maxItems": 200,
  "analysis": { "context": "Reactions to the show, not spoilers." }
}
```

### Was der Actor beantwortet

| Frage      | Antwort                                                                      |
| ---------- | ---------------------------------------------------------------------------- |
| Sentiment  | Positiv, negativ, gemischt, neutral oder unklar                              |
| Intensität | 0 beiläufige Erwähnung, 1 klare Haltung, 2 nachdrückliche Formulierung       |
| Sarkasmus  | Wahrscheinlichkeit, dass die wörtliche Formulierung der Haltung widerspricht |

Mit Zielen beurteilt das Sentiment die Haltung ihnen gegenüber. Es nutzt auch
den Kontext aus Zitat oder Antwort, den du mitlieferst. Ohne Ziele beurteilt es
das Hauptthema des Posts.

## Eigenen Text analysieren

Füge eigene Entwürfe, Antworten, Rezensionen oder Notizen in `texts` ein. X
Tweet Sentiment Analysis von Xquik analysiert sie. Der Actor ruft nichts von X
ab.

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

## Von einem anderen Sentiment-Actor wechseln

Nutze 1 Namen pro Einstellung, wenn du eine vorhandene Eingabe anpasst.

| Vorhandener Eingabename                             | Xquik-Feld       |
| --------------------------------------------------- | ---------------- |
| `query`, `searchQuery`                              | `twitterContent` |
| `queries`, `searchQueries`, `search`                | `searchTerms`    |
| `handles`, `usernames`, `username`, `profileTweets` | `twitterHandles` |
| `tweetUrls`, `postUrls`, `urls`                     | `startUrls`      |
| `tweetIDs`, `tweet_ids`, `postIds`, `tweetId`       | `tweetIds`       |
| `maxTweets`, `maxResults`, `count`, `max_posts`     | `maxItems`       |
| `sort`                                              | `queryType`      |
| `tweetLanguage`, `language`                         | `lang`           |
| `startDate`, `endDate`                              | `since`, `until` |

Der Actor akzeptiert diese gängigen Namen direkt. Er liest auch die Filternamen
anderer Tweet-Actors. Ein Filter ohne eigenes Feld hier wird in jeder Suche des
Runs zu einem X-Suchoperator, & das Run-Log listet diese Operatoren am Anfang.
Nutze `Latest` oder `Top` für `sort`. Behalte Sprachcodes & Datumsgrenzen bei.
Limits gelten für alle Ziele zusammen. Diese Eingabe ist startbereit.

```json
{ "searchTerms": ["from:NASA"], "sort": "Latest", "maxItems": 5 }
```

Andere Eingaben musst du vor dem Run umwandeln.

Packe eine einzelne `tweetUrl` in `startUrls`.

```json
{ "startUrls": ["https://x.com/NASA/status/2105727882588807607"] }
```

Lege `text`, `Texts`, Dataset-Strings oder Datei-Strings in `texts` ab.

```json
{ "texts": ["Support fixed my issue. Thank you."] }
```

Mache aus `hashtag` oder `cashtag` Such-Strings.

```json
{ "searchTerms": ["#Artemis lang:en", "$AAPL lang:en"], "maxItems": 5 }
```

Ersetze `minLikes`, `minReplies` & `minRetweets` durch diese Feldnamen.

```json
{ "min_faves": 10, "min_replies": 2, "min_retweets": 3 }
```

Ergebnisse behalten den Originaldatensatz in `tweet` & die Antworten in
`analysis.answers`. Ordne positive, negative & neutrale Labels den passenden
Sentiment-Kategorien zu. Behalte `mixed` & `unclear` als eigene Kategorien.
Andere Sentiment-Scores können andere Skalen & Bedeutungen nutzen. Die
Intensität von Xquik reicht von 0 bis 2 & kann Dezimalstellen enthalten.
Sarkasmus ist eine Wahrscheinlichkeit. Die Konfidenz beschreibt, wie sicher eine
Antwort ist.

## Was kostet es, das Sentiment von Tweets zu analysieren?

X Tweet Sentiment Analysis von Xquik kostet ab $0.0003 pro analysiertem Post.
Der Actor verlangt keine Startgebühr. Der Preis enthält Erfassung & KI-Kosten.
Du brauchst keinen KI-Account, keine Tokens oder Schlüssel. Der Preis deckt bis
zu 8 Fragen & 64.000 Byte Kontext pro Post ab. Jede Frage-Definition darf bis zu
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

Andere Runs überspringen diesen Datensatz, auch der erste Run einer Serie. Ihr
Status nennt die wichtigste Antwort, etwa
`Top sentiment is positive in 3 of 5 results.` Ein Vergleich ohne Änderung
meldet `No change since the earlier run.` Ein Run mit einem Problem oder ein
großer Run schreibt zusätzlich `run-report`. Das gilt auch für einen Run mit
aktiviertem `alwaysSaveRunRecords`. `run-report` wiederholt die Zusammenfassung
unter `results.analysisSummary`.

Die Zusammenfassung zählt analysierte, fehlgeschlagene & übersprungene
Datensätze. Sie summiert Interaktionen & fasst jede Frage zusammen.

- Die Aufteilung `sentiment` zeigt, wie viele Posts auf jede Haltung entfallen.
- `engagementShares` gewichtet dieselbe Aufteilung nach Gefällt-mir-Angaben,
  Reposts, Antworten & Zitaten.
- `top` listet die 3 Posts mit den meisten Interaktionen pro Haltung.
- Jeder Datensatz listet `sourceDomains`, die Hostnamen, auf die er verlinkt.
- Jeder Datensatz listet `cashtags` aus seinem Text, etwa `$NVDA`.
- Ist `monitor.baselineDatasetId` gesetzt, zählt der Block `monitor` der
  Zusammenfassung die Vergleichsstatus. Er listet bis zu 50 geänderte
  Datensätze.

Die Zusammenfassung rundet Zahlen auf 4 Nachkommastellen. Ein leerer Run meldet
Zählwerte von 0 & `null`-Mittelwerte.

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

`changes` listet jede Entscheidung zu Sentiment, Intensitätsstufe oder
Sarkasmus, die sich von `previous` zu `current` bewegt hat. Entscheidungen
werden nach Kategorie, gerundeter Score-Stufe oder Ja/Nein bei 0,5 verglichen.
Eine Entscheidung zählt nur als geändert, wenn sie sich deutlich bewegt. Knappe
Fälle zwischen Runs bleiben `unchanged`.

Eine Baseline über `maxBaselineRows` oder mit anderen Einstellungen stoppt den
Run vor der Erfassung. Der Run schreibt dann einen Diagnose-Datensatz.
`maxBaselineRows` steht standardmäßig auf 100.000.

## Task-Beispiele

Wähle aus 50 öffentlichen Tasks. Starte mit dem Beispiel, das zu deiner Frage
passt. Die meisten Tasks nutzen kleine Obergrenzen. Die 2 datierten Suchen
fordern 50 Posts an. Öffne einen Task, um seine gespeicherte Eingabe zu nutzen.
Die kopierfertigen Eingaben & die beobachtete Ausbeute unten helfen dir bei der
Wahl der Einstellungen.

Jeder erfolgreiche Datensatz liefert Sentiment, Intensität &
Sarkasmus-Wahrscheinlichkeit. Jeder behält seinen Originalpost oder den
übergebenen Text neben den Antworten. Diese Beispiele nutzen englische Eingaben
& Sprachfilter. Ein Sprachlabel kann anderssprachigen Text in einem Post oder
Zitat trotzdem übersehen.

Ohne Ziele beschreibt eine Antwort das Hauptthema des Posts. Eine
Stichwort-Erwähnung kann etwas anderes betreffen. Bei mehreren Zielen beschreibt
die Sentiment-Antwort sie gemeinsam. Sie liefert keine eigene Antwort für jedes
Ziel.

Die Gefällt-mir-Angaben eines Profils können verborgen sein. Nutze die Antworten
oder Posts des Profils, wenn sie nicht verfügbar sind.

Suchergebnisse können Ankündigungen, Werbung, Witze & wiederholten Text
enthalten. Unterschiedliche Post-IDs belegen keine unabhängigen Reaktionen oder
Kundenidentitäten. Meinungsphrasen & Interaktionsfilter wählen eine Stichprobe
aus. Prüfe die Posts, bevor du sie als Feedback zählst. Die Analyse prüft ihre
Behauptungen nicht.

### Getestete Task-Eingaben

Öffne einen Task. Sein Tab Input hat visuelle Felder & JSON. Kopiere sein JSON
oder ändere die Felder vor dem Start.
[Apify erklärt Task-Eingaben](https://docs.apify.com/actors/running/tasks).

Die Datumsangaben der Tests nutzen UTC. Die Ausbeute beschreibt den
aufgezeichneten Run, keine garantierte Menge. Die datierten Beispiele mit 50
Posts zeigen, warum sich eindeutige IDs von unabhängigen Meinungen
unterscheiden.

#### Rezensionsentwürfe zum Finale

[Rezensionstexte zum Staffelfinale](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-season-finale-reactions)

Trenne Lob von Kritik in deinen Rezensionsentwürfen zum Finale. Der Run am
2026-10-01 ergab 3 eindeutige übergebene Texte. Die Obergrenze lag bei 3. Das
sind deine eigenen Beispieltexte, keine Publikumsforschung.

#### Diskussion zum Smartphone-Launch

[Posts zum iPhone-Launch im September 2026](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-iphone-launch-posts)

Prüfe die Launch-Diskussion in einem festen Datumsfenster im September. Der Run
am 2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag bei 5. Ankündigungen
und persönliche Meinungen können beide Treffer sein.

#### Rezensionen zur Halbzeitshow

[Rezensionstexte zur Halbzeitshow](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-super-bowl-halftime-show)

Prüfe gemischte Urteile und Sarkasmus in deinen Rezensionen zur Halbzeitshow.
Der Run am 2026-10-01 ergab 3 eindeutige übergebene Texte. Die Obergrenze lag
bei 3. Das sind deine eigenen Beispielrezensionen, keine Live-Reaktionen auf die
Show.

#### Erfahrungen mit Elektroautos

[Posts über Erfahrungen mit Elektroautos](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-new-electric-car)

Finde Posts über das Fahren oder die Wahl eines Elektroautos. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag bei 5. Persönliche
Formulierungen können auch auf Witze oder Berichte aus zweiter Hand passen.

#### Filmdiskussion

[Posts zur Diskussion über Marvel-Filme](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-marvel-movie-audiences)

Prüfe die Filmdiskussion, bevor du Publikumskommentare auswählst. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag bei 5. Marvel kann auch
auf Verwendungen des Wortes passen, die nichts damit zu tun haben.

#### Begleittexte zu Medien einer Künstlerin

[Ton der Medien-Begleittexte von Taylor Swift](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-taylor-swift-album-reactions)

Prüfe den Wortlaut der Künstlerin neben aktuellen Medien. Der Run am 2026-10-01
ergab 5 eindeutige Posts. Die Obergrenze lag bei 5. Begleittexte können nicht
alles beschreiben, was Bilder oder Videos zeigen.

#### Thread zu einem Spiele-Release

[Update-Thread zu einem Spiele-Release](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-video-game-launch)

Lies eine Ankündigung neben Antworten über konkurrierende Spiele. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag bei 5. Der Thread
erwähnt mehrere Spiele und enthält seinen Eröffnungspost.

#### Diskussion über Remote-Arbeit

[Diskussion über Remote-Arbeit](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-remote-work)

Vergleiche Haltungen, die in der Diskussion über Remote-Arbeit geäußert werden.
Der Run am 2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag bei 5.
Stellenanzeigen und wiederholte Meinungen können auftauchen.

#### Posts über Airlines

[Posts zur Diskussion über Airlines](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-airline-passengers)

Prüfe Airline-Erwähnungen, bevor du Service-Feedback auswählst. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag bei 5. Eine Erwähnung
belegt nicht, dass der Autor Passagier ist.

#### Diskussion über College Football

[Diskussion über College Football](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-college-football-fans)

Trenne Fan-Meinungen von Werbung für College Football. Der Run am 2026-10-01
ergab 5 eindeutige Posts. Die Obergrenze lag bei 5. Vorschauen und Werbung
können neben Fan-Meinungen Treffer sein.

#### Diskussion über Zinsen

[Diskussion über Zinsen](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-interest-rates)

Prüfe Haltungen zu Markt und Politik rund um Zinsen. Der Run am 2026-10-01 ergab
5 eindeutige Posts. Die Obergrenze lag bei 5. Das Hauptthema kann ein Politiker
oder der Markt sein.

#### Diskussion über Scooter

[Diskussion über E-Scooter](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-electric-scooters)

Finde die Scooter-Diskussion, bevor du Fahrer-Feedback auswählst. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag bei 5. Anzeigen, Studien
und Witze können neben persönlichen Erfahrungen Treffer sein.

#### Erfahrungen mit Restaurants

[Erfahrungen mit neuen Restaurants](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-restaurant-openings)

Prüfe Formulierungen in der Ich-Form über neue Restaurants. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag bei 5. Persönliche
Formulierungen können auch in Einladungen oder Empfehlungen vorkommen.

#### Ton im Feed einer öffentlichen Liste

[Ton im Feed einer öffentlichen Liste](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-ai-coding-assistants)

Prüfe den Ton der Posts in einer öffentlichen Liste. Der Run am 2026-10-01 ergab
5 eindeutige Posts. Die Obergrenze lag bei 5. Mitglieder können über andere
Themen sprechen und den Wortlaut einer anderen Person reposten.

#### Antworten eines Geräteprofils

[Ton der Antworten eines Google-Geräteprofils](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-smart-home-device-owners)

Prüfe den Wortlaut eines Geräteprofils, einschließlich Antworten. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag bei 5. Fehlender Kontext
des übergeordneten Posts kann einschränken, was eine Profil-Antwort bedeutet.

#### Marathontraining

[Diskussion über Marathontraining](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-marathon-runners)

Finde Haltungen in Trainings-Updates und Marathonplänen. Der Run am 2026-10-01
ergab 5 eindeutige Posts. Die Obergrenze lag bei 5. Pläne und Werbung können
neben Updates von Läufern auftauchen.

#### Reiseplanung

[Persönliche Posts über eine Tokio-Reise](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-tourist-destinations)

Prüfe persönliche Reisepläne und Reiseberichte. Der Run am 2026-10-01 ergab 5
eindeutige Posts. Die Obergrenze lag bei 5. Events mit Tokyo im Namen können
Treffer sein, ohne eine Japanreise zu beschreiben.

#### Diskussion über Streaming-Preise

[Posts zur Diskussion über Netflix-Preise](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-streaming-price-increases)

Finde Bedenken zu Netflix-Preisen, bevor du Kündigungsgründe prüfst. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag bei 5.
Preisformulierungen wählen Bedenken aus, keine repräsentative Stichprobe von
Zuschauern.

#### Einkauf von Schulbedarf

[Posts über Schulbedarf im August 2026](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-back-to-school-shoppers)

Prüfe 50 Posts über Schulbedarf in einem August-Fenster. Der Run am 2026-10-01
ergab 50 eindeutige Posts. Die Obergrenze lag bei 50. Die 50 IDs enthielten in
unserer Prüfung 42 Datensätze mit klarem Themenbezug.

#### Zugverspätungen

[Posts über Erfahrungen mit Zugverspätungen](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-public-transit)

Finde Beschwerden und Erfahrungen mit verspäteten Zügen. Der Run am 2026-10-01
ergab 5 eindeutige Posts. Die Obergrenze lag bei 5. Persönliche Formulierungen
können offizielle Meldungen verfehlen.

#### Diskussion über Tierfutter

[Posts über Erfahrungen mit Tierfutter](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-pet-food-brands)

Prüfe Tierfutter-Erwähnungen in der breiteren Diskussion über Tierpflege. Der
Run am 2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag bei 5.
Diskussionen über Pflege oder Tiermedizin können Futtermarken beiläufig
erwähnen.

#### Ausgewählte Fantasy-Sport-Posts

[Gruppe von Fantasy-Sport-Posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-fantasy-football-apps)

Analysiere eine ausgewählte Gruppe von Fantasy-Sport-Posts. Der Run am
2026-10-01 ergab 2 eindeutige Posts. Die Obergrenze lag bei 2. Labels betreffen
das Thema jedes Posts, nicht automatisch eine App.

#### Erfahrungen mit Cafés

[Posts über Erfahrungen mit Cafés](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-coffee-shop-customers)

Finde Kommentare zu Cafés, bevor du Kunden-Feedback auswählst. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag bei 5. Beschwerden von
Autoren bleiben ungeprüfte Aussagen.

#### Immobilienmarkt

[Diskussion über den Immobilienmarkt](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-housing-market)

Prüfe Meinungen und Nachrichten zum Immobilienmarkt. Der Run am 2026-10-01 ergab
5 eindeutige Posts. Die Obergrenze lag bei 5. Nachrichten und Meinungen können
verschiedene Marktthemen betreffen.

#### Turnierdiskussion

[Posts über ein League-of-Legends-Turnier](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-esports-tournament-viewers)

Trenne die Turnierdiskussion von Werbung für Tickets oder Matches. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag bei 5. Ticketanzeigen
und Spielberichte sind keine Zuschauermeinungen.

#### Posts eines Podcast-Herausgebers

[Ton der Posts eines Podcast-Herausgebers](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-podcast-episodes)

Prüfe die eigene Kommunikation des Podcast-Herausgebers. Der Run am 2026-10-01
ergab 5 eindeutige Posts. Die Obergrenze lag bei 5. Der Ton des Herausgebers
misst nicht die Zufriedenheit der Hörer.

#### Fitnessstudio-Vergleiche

[Rezensionstexte mit Fitnessstudio-Vergleichen](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-gym-memberships)

Prüfe die gemeinsame Haltung gegenüber 2 Fitnessstudios in deinen Rezensionen.
Der Run am 2026-10-01 ergab 3 eindeutige übergebene Texte. Die Obergrenze lag
bei 3. Beide Ziele teilen sich 1 Sentiment-Antwort pro Text.

#### Mietwagen

[Posts über Erfahrungen mit Mietwagen](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-car-rental-customers)

Finde Kommentare zu Mietwagen, bevor du Service-Probleme prüfst. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag bei 5. Anfragen und
Werbung können neben Berichten von Mietern Treffer sein.

#### Campus-Diskussion

[Posts über Studienkosten und Campus](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-university-life)

Prüfe die Campus-Diskussion, bevor du Posts zu Kosten auswählst. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag bei 5.
Campus-Nachrichten und Kritik belegen keine Erfahrungen von Studierenden.

#### Hochzeitsplanung

[Persönliche Posts zur Hochzeitsplanung](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-wedding-planning-posts)

Finde Formulierungen in der Ich-Form über Hochzeitspläne und Kosten. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag bei 5. Geschichten,
Witze und beiläufige Formulierungen können neben Planungserfahrungen Treffer
sein.

#### Ladeerfahrungen

[Posts über Erfahrungen beim Laden von E-Autos](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-ev-charging-experiences)

Prüfe Ladeerfahrungen in der Diskussion über Elektrofahrzeuge. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag bei 5. Das Laden kann
gegenüber einem anderen Fahrzeugthema zweitrangig sein.

#### Diskussion über Steuererklärungen

[Posts über Steuererklärungen mit TurboTax im Frühjahr 2026](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-tax-filing-software)

Prüfe die Diskussion über Steuererklärungen in einem festen Datumsfenster im
Frühjahr. Der Run am 2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag
bei 5. Posts belegen keine aktuellen Gebühren oder Steuerregeln.

#### Freizeitpark-Besuche

[Diskussion über Freizeitpark-Besuche](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-theme-park-visitors)

Finde Freizeitpark-Erwähnungen, bevor du Reaktionen auf Besuche auswählst. Der
Run am 2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag bei 5. Beiläufige
Erwähnungen können längere Posts über ein anderes Thema zu Treffern machen.

#### Ausgaben für Lebensmittel

[Posts über Erfahrungen mit dem Lebensmittelbudget](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-grocery-prices)

Finde Kommentare in der Ich-Form über Ausgaben für Lebensmittel. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag bei 5. Breitere
Diskussionen über Politik, Ernährung oder Creator können Ausgaben für
Lebensmittel erwähnen.

#### Kamera-Diskussion

[Diskussion über Smartphone-Kameras](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-phone-camera-reviews)

Prüfe Kamera-Erwähnungen neben Fotos, Rezensionen und Ankündigungen. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag bei 5.
Kamera-Erwähnungen können in anderen Ankündigungen beiläufig sein.

#### Ausgewählter Sneaker-Post

[Ein ausgewählter Sneaker-Post](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-sneaker-drop-reactions)

Analysiere einen bekannten Post ohne breite Stichwortsuche. Der Run am
2026-10-01 ergab 1 eindeutigen Post. Die Obergrenze lag bei 1. Dieser
ausgewählte Begleittext beschreibt nicht jedes Detail seines Bildes.

#### Support-Chatbots

[Posts zur Diskussion über Support-Chatbots](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-customer-support-chatbots)

Finde die Diskussion über Support-Chatbots, bevor du Service-Beschwerden
auswählst. Der Run am 2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag
bei 5. Bots für emotionale Unterstützung und Antworten von Unternehmen können
auch Treffer sein.

#### Festival-Diskussion

[Diskussion über Coachella im April 2026](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-music-festival-attendees)

Prüfe 50 Festival-Posts in einem April-Fenster. Der Run am 2026-10-01 ergab 50
eindeutige Posts. Die Obergrenze lag bei 50. Die 50 IDs enthielten 47 Datensätze
mit Themenbezug und wiederholte Nachrichtentexte.

#### Stromrechnungen

[Diskussion über Stromrechnungen](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-electric-bills)

Prüfe persönliche Stromkosten neben der politischen Diskussion. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag bei 5. Politische
Behauptungen und Preisprognosen bleiben ungeprüft.

#### Kaderwechsel im Basketball

[Diskussion über NBA-Trades und Verpflichtungen](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-nba-trade-reactions)

Finde die Diskussion über Trades und Verpflichtungen, bevor du Fan-Reaktionen
auswählst. Der Run am 2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag
bei 5. Andere Meldungen können Spieler oder Teams beiläufig erwähnen.

#### Diskussion über Aufenthalte

[Diskussion über Airbnb-Aufenthalte](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-airbnb-stays)

Richte den Fokus in der Diskussion über Aufenthalte auf Haltungen gegenüber
Airbnb. Der Run am 2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag
bei 5. Werbung von Gastgebern und App-Posts können neben Berichten von Gästen
auftauchen.

#### Reaktionen auf Bücher

[Posts mit Reaktionen auf Bücher](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-book-club-readers)

Prüfe Lesereaktionen, ohne eine Mitgliedschaft im Buchclub anzunehmen. Der Run
am 2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag bei 5. Filmvergleiche
und persönliche Lesemeinungen können beide Treffer sein.

#### Erfahrungen mit Kochboxen

[Posts über Erfahrungen mit HelloFresh](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-meal-kit-services)

Finde Kommentare zu Kochboxen, bevor du Produkterfahrungen prüfst. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag bei 5. Pläne, Anzeigen
und breitere persönliche Geschichten können die Marke erwähnen.

#### Renndiskussion

[Posts zur Diskussion über Formel-1-Rennen](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-formula-one-race-weekends)

Prüfe die Renndiskussion neben Aussagen von Teams und Fahrern. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag bei 5. Zitierte
Fahreraussagen können sich über verschiedene IDs wiederholen.

#### Erfahrungen mit Dating-Apps

[Posts über Erfahrungen mit Dating-Apps](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-dating-app-experiences)

Finde Erfahrungen mit Dating-Apps, Bemerkungen zu Matches und Witze. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag bei 5. Bemerkungen zu
Matches und Witze belegen keine Kundenidentitäten.

#### Posts über Wartezeiten am Flughafen

[Posts über Wartezeiten und Lounges am Flughafen](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-airport-travelers)

Prüfe Kommentare zu Wartezeiten am Flughafen neben Reisehinweisen. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag bei 5. Offizielle
Hinweise können neben persönlichen Warteerfahrungen auftauchen.

#### Diskussion über Schulessen

[Diskussion über Schulessen](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-school-lunch-programs)

Prüfe persönliche Posts und die politische Debatte über Schulessen. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag bei 5. Autoren können
auch Institutionen sein, nicht nur Eltern.

#### Bierverkostung

[Posts über Craft-Beer-Verkostungen](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-craft-beer-drinkers)

Finde Meinungen aus Bierverkostungen, bevor du Rezensionsbeispiele auswählst.
Der Run am 2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag bei 5.
Knappen Begleittexten mit Link kann der Kontext für eine klare Haltung fehlen.

#### Zitate einer Docking-Ankündigung

[Zitate einer Docking-Ankündigung von SpaceX](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-space-launches)

Prüfe Zitate einer einzelnen Docking-Ankündigung nach einem festen Zeitpunkt.
Der Run am 2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag bei 5. Zitate
können Einladungen oder neutrale Beschreibungen sein, nicht nur Reaktionen.

#### Antworten auf einen Geburtstagspost

[Antworten auf einen Geburtstagspost der NASA](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-replies-to-a-news-post)

Prüfe direkte Antworten auf einen einzelnen Geburtstagspost. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Die Obergrenze lag bei 5. Fehlender Kontext
des Ausgangsposts kann einschränken, was die Analyse einer Antwort aussagt.

Halte `maxItems` klein, während du Ergebnisse prüfst. Eine Obergrenze begrenzt
die Ausgabe, nicht die verfügbare Menge. Passen weniger Posts, prüfe den
Run-Report, bevor du deine Filter änderst. Lockere 1 Einstellung nach der
anderen, etwa Datumsangaben oder einen Mindestwert für Interaktionen. Notiere,
welche Einstellung du geändert hast.

Prüfe bei fehlgeschlagenen Analysen `analysis.reason` & wiederhole nur die
betroffenen IDs. Wenn die Antworten auf einen Post unvollständig wirken, lies
den kostenlosen Diagnose-Datensatz. Er sagt, wann X weniger Antworten gezeigt
hat, als es zählt. Begleittexte zu Medien können nicht alles beschreiben, was
ein Bild oder Video zeigt. Fehlender Zitat- oder Antwortkontext kann ein
Analyseergebnis unsicher machen.

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
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)
  kennzeichnet bullische, bärische, neutrale oder gemischte Haltung, Inhaltstyp,
  Überzeugungsgrad & Asset-Relevanz mit KI. Nutze ihn, wenn du Aktien, Krypto
  oder Trading-Talk verfolgst. Ab $0.0003 pro analysiertem Post.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)
  kennzeichnet News-Posts nach Format, Quellenangabe & Themenrelevanz mit KI.
  Nutze ihn, wenn du Berichterstattung von Kommentaren trennst. Ab $0.0003 pro
  analysiertem Post.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)
  beantwortet deine eigenen Kategorie-, Score- & Ja/Nein-Fragen für jeden Post
  mit KI. Nutze ihn, wenn die vorgefertigten Analysen nicht zu deinen Labels
  passen. Ab $0.0003 pro analysiertem Post.
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

Nein. X Tweet Sentiment Analysis von Xquik enthält die KI-Kosten im Preis. Du
brauchst keinen KI-Account, keine Tokens oder Schlüssel. Du brauchst auch keinen
X-API-Schlüssel, keinen Login oder Zugangsdaten.

### Kann ich eigene Fragen nutzen?

Ja. Eigene `analysis.questions` ersetzen die Standardfragen. Sende 1 bis 8
Fragen vom Typ `choice`, `score` oder `probability`. Choice-Fragen akzeptieren 2
bis 255 Kategorien. Score-Fragen brauchen mindestens 2 geordnete Stufen. Behalte
dieselben Fragen in allen Runs, die du vergleichen willst.

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

Ja. Im [API-Tab](https://apify.com/xquik/x-tweet-sentiment-analysis/api) findest
du Beispiele für Python, JavaScript & cURL. Nutze
[Zeitpläne](https://docs.apify.com/platform/schedules) von Apify für
wiederkehrende Runs. Übergib die vorherige Dataset-ID als
`monitor.baselineDatasetId`, um zu sehen, was sich geändert hat.
Apify-Integrationen verbinden Runs auch mit Webhooks, Make, Zapier, n8n & Google
Sheets.

### Wo bekomme ich Hilfe?

Öffne im [Tab Issues](https://apify.com/xquik/x-tweet-sentiment-analysis/issues)
ein Issue mit der Run-ID. Kostenlose Diagnosen im Key-Value-Store erklären Runs,
die Aufmerksamkeit brauchen. Ein Run, der keinen Datensatz zurückbekommt, sagt
in seinem Status, warum.
