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
liefert die vollständigsten X-Daten. X Tweet Sentiment Analysis von Xquik
ergänzt jeden Post (Tweet) um Haltung, Intensität & Sarkasmus. Die meisten
anderen Apify Actors rechnen ab, bevor sie filtern oder Duplikate entfernen.
Xquik rechnet nur gelieferte, eindeutige Ergebnisse ab, die zu deinen Filtern
passen. Die KI-Kosten sind im Preis pro Post enthalten. Du brauchst keinen
KI-Account, keine Tokens & keinen Schlüssel.

Miss die Haltung hinter Posts auf X (Twitter) & behalte die Originaldaten jedes
Posts. **X Tweet Sentiment Analysis with AI** von Xquik sammelt passende Posts.
Der Actor ergänzt jeden Post mit KI um eine Sentiment-Kategorie, eine
Intensitätsstufe & eine Sarkasmus-Wahrscheinlichkeit. Verfolge Reaktionen auf
einen Launch, eine Kampagne, eine Episode oder eine öffentliche Person. Trenne
laute Reaktionen von beiläufigen Erwähnungen.

- **Sentiment pro Post.** Jeder Post bekommt seine eigene Kategorie. So kannst
  du jede Antwort prüfen.
- **Intensität.** Eine Stufe von 0 bis 2 trennt nachdrückliche Posts von
  milden.
- **Sarkasmus-Wahrscheinlichkeit.** Sie markiert Posts, deren Wortlaut der
  Haltung widerspricht.
- **Vollständige Quelldatensätze.** Jeder Datensatz behält jedes Feld, das der
  Post liefert.

> Xquik ist ein unabhängiger Drittanbieter-Dienst. Nicht verbunden mit X Corp.
> "Twitter" und "X" sind Marken von X Corp.

## So analysierst du das Sentiment von Tweets

1. Füge Suchbegriffe, Nutzernamen von Profilen, Post-URLs oder Post-IDs hinzu.
2. Setze `maxItems` & die Extraktionsfilter, die deine Aufgabe braucht.
3. Lass `analysis.targets` leer, damit der Actor jeden Post nach seinem eigenen
   Thema beurteilt. Willst du dich auf eine Marke, ein Produkt oder eine Person
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

| Frage      | Antwort                                                             |
| ---------- | ------------------------------------------------------------------- |
| Sentiment  | Positiv, negativ, gemischt, neutral oder unklar                     |
| Intensität | 0 beiläufige Erwähnung, 1 klare Haltung, 2 nachdrücklicher Wortlaut |
| Sarkasmus  | Wahrscheinlichkeit, dass der Wortlaut der Haltung widerspricht      |

Mit Zielen beurteilt das Sentiment die Haltung ihnen gegenüber. Es nutzt auch
den Kontext aus Zitat oder Antwort, den du mitlieferst. Ohne Ziele beurteilt es
das Hauptthema des Posts.

## Eigenen Text analysieren

Füge eigene Entwürfe, Antworten, Rezensionen oder Notizen in `texts` ein.
X Tweet Sentiment Analysis von Xquik analysiert sie. Der Actor ruft nichts von X
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
- `tweet.id` ist `text:1`, `text:2` usw. `tweet.type` ist `text`.
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
anderer Tweet-Actors. Ein Filter ohne eigenes Feld wird zu einem X-Suchoperator
in jeder Suche des Runs, & das Run-Log listet diese Operatoren am Anfang. Nutze
`Latest` oder `Top` für `sort`. Behalte Sprachcodes & Datumsgrenzen bei. Limits
gelten für alle Ziele zusammen. Diese Eingabe ist startbereit:

```json
{ "searchTerms": ["from:NASA"], "sort": "Latest", "maxItems": 5 }
```

Andere Eingaben musst du vor dem Run umwandeln.

Packe eine einzelne `tweetUrl` in `startUrls`:

```json
{ "startUrls": ["https://x.com/NASA/status/2105727882588807607"] }
```

Lege `text`, `Texts`, Dataset-Strings oder Datei-Strings in `texts` ab:

```json
{ "texts": ["Support fixed my issue. Thank you."] }
```

Mache aus `hashtag` oder `cashtag` Such-Strings:

```json
{ "searchTerms": ["#Artemis lang:en", "$AAPL lang:en"], "maxItems": 5 }
```

Ersetze `minLikes`, `minReplies` & `minRetweets` durch diese Feldnamen:

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
Du brauchst keinen KI-Account, keine Tokens & keinen Schlüssel. Der Preis deckt
bis zu 8 Fragen & 64.000 Byte Kontext pro Post ab. Jede Frage-Definition darf
bis zu 8.000 Byte nutzen.

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

Ein Run schreibt in 4 Fällen einen `analysis-summary`-Datensatz in seinen
Key-Value-Store:

- Er hat ein Problem oder ist groß.
- Er setzt `monitor` ohne `baselineDatasetId`, als erster Run einer Serie.
- Sein Vergleich findet einen geänderten, neuen oder nicht vergleichbaren Post.
- Er hat `alwaysSaveRunRecords` aktiviert.

Andere Runs überspringen den Datensatz. Ihr Status nennt die wichtigste Antwort,
etwa `Top sentiment: positive in 3 of 5 results.` Ein Vergleich ohne Änderung
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
`monitor`-Objekt. Sein Status kann so lauten:

- `first_run` ohne Baseline.
- `new_to_baseline` für Posts, die der frühere Run nicht hatte.
- `unchanged` oder `changed` für Posts, die er hatte.

`changes` listet jede Entscheidung zu Sentiment, Intensität oder Sarkasmus, die
sich von `previous` zu `current` bewegt hat. Der Vergleich nutzt die Kategorie,
die gerundete Score-Stufe oder Ja/Nein bei 0,5. Eine Entscheidung zählt nur als
geändert, wenn sie sich deutlich bewegt. Knappe Fälle zwischen Runs bleiben
`unchanged`.

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

Öffne einen Task. Sein Tab Input hat visuelle Felder & JSON. Kopiere das JSON
oder ändere die Felder vor dem Start.
[Apify erklärt Task-Eingaben](https://docs.apify.com/actors/running/tasks).

Die Datumsangaben der Tests nutzen UTC. Die Ausbeute beschreibt den
aufgezeichneten Run, keine garantierte Menge. Die datierten Beispiele mit 50
Posts zeigen, warum eindeutige IDs keine unabhängigen Meinungen sind.

#### Rezensionsentwürfe zum Finale

[Season finale review texts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-season-finale-reactions)

Trenne Lob von Kritik in deinen Rezensionsentwürfen zum Finale. Der Run am
2026-10-01 ergab 3 eindeutige übergebene Texte. Obergrenze: 3. Das sind deine
eigenen Beispieltexte, keine Publikumsforschung.

#### Diskussion zum Smartphone-Launch

[September 2026 iPhone launch posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-iphone-launch-posts)

Prüfe die Launch-Diskussion in einem festen Datumsfenster im September. Der Run
am 2026-10-01 ergab 5 eindeutige Posts. Obergrenze: 5. Ankündigungen und
persönliche Meinungen können beide Treffer sein.

#### Rezensionen zur Halbzeitshow

[Halftime show review texts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-super-bowl-halftime-show)

Prüfe gemischte Urteile und Sarkasmus in deinen Rezensionen zur Halbzeitshow.
Der Run am 2026-10-01 ergab 3 eindeutige übergebene Texte. Obergrenze: 3. Das
sind deine eigenen Beispielrezensionen, keine Live-Reaktionen auf die Show.

#### Erfahrungen mit Elektroautos

[Electric car experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-new-electric-car)

Finde Posts über das Fahren oder die Wahl eines Elektroautos. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Obergrenze: 5. Persönliche Formulierungen
können auch auf Witze oder Berichte aus zweiter Hand passen.

#### Filmdiskussion

[Marvel movie discussion posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-marvel-movie-audiences)

Prüfe die Filmdiskussion, bevor du Publikumskommentare auswählst. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Obergrenze: 5. Marvel kann auch auf andere
Verwendungen des Wortes passen.

#### Begleittexte zu Medien einer Künstlerin

[Taylor Swift media caption tone](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-taylor-swift-album-reactions)

Prüfe den Wortlaut der Künstlerin neben aktuellen Medien. Der Run am 2026-10-01
ergab 5 eindeutige Posts. Obergrenze: 5. Begleittexte können nicht alles
beschreiben, was Bilder oder Videos zeigen.

#### Thread zu einem Spiele-Release

[Game release update thread](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-video-game-launch)

Lies eine Ankündigung neben Antworten über konkurrierende Spiele. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Obergrenze: 5. Der Thread erwähnt mehrere
Spiele und enthält seinen Eröffnungspost.

#### Diskussion über Remote-Arbeit

[Remote work discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-remote-work)

Vergleiche Haltungen in der Diskussion über Remote-Arbeit. Der Run am 2026-10-01
ergab 5 eindeutige Posts. Obergrenze: 5. Stellenanzeigen und wiederholte
Meinungen können auftauchen.

#### Posts über Airlines

[Airline discussion posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-airline-passengers)

Prüfe Airline-Erwähnungen, bevor du Service-Feedback auswählst. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Obergrenze: 5. Eine Erwähnung belegt nicht,
dass der Autor Passagier ist.

#### Diskussion über College Football

[College football discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-college-football-fans)

Trenne Fan-Meinungen von Werbung für College Football. Der Run am 2026-10-01
ergab 5 eindeutige Posts. Obergrenze: 5. Vorschauen und Werbung können neben
Fan-Meinungen Treffer sein.

#### Diskussion über Zinsen

[Interest rate discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-interest-rates)

Prüfe Haltungen zu Markt und Politik rund um Zinsen. Der Run am 2026-10-01 ergab
5 eindeutige Posts. Obergrenze: 5. Das Hauptthema kann ein Politiker oder der
Markt sein.

#### Diskussion über Scooter

[Electric scooter discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-electric-scooters)

Finde die Scooter-Diskussion, bevor du Fahrer-Feedback auswählst. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Obergrenze: 5. Anzeigen, Studien und Witze
können neben persönlichen Erfahrungen Treffer sein.

#### Erfahrungen mit Restaurants

[New restaurant experiences](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-restaurant-openings)

Prüfe Formulierungen in der Ich-Form über neue Restaurants. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Obergrenze: 5. Persönliche Formulierungen
können auch in Einladungen oder Empfehlungen vorkommen.

#### Ton im Feed einer öffentlichen Liste

[Public list feed tone](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-ai-coding-assistants)

Prüfe den Ton der Posts in einer öffentlichen Liste. Der Run am 2026-10-01 ergab
5 eindeutige Posts. Obergrenze: 5. Mitglieder können über andere Themen sprechen
und den Wortlaut einer anderen Person reposten.

#### Antworten eines Geräteprofils

[Google device profile reply tone](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-smart-home-device-owners)

Prüfe den Wortlaut eines Geräteprofils, einschließlich Antworten. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Obergrenze: 5. Fehlt der Kontext des
übergeordneten Posts, kann eine Profil-Antwort weniger aussagen.

#### Marathontraining

[Marathon training discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-marathon-runners)

Finde Haltungen in Trainings-Updates und Marathonplänen. Der Run am 2026-10-01
ergab 5 eindeutige Posts. Obergrenze: 5. Pläne und Werbung können neben Updates
von Läufern auftauchen.

#### Reiseplanung

[Personal Tokyo trip posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-tourist-destinations)

Prüfe persönliche Reisepläne und Reiseberichte. Der Run am 2026-10-01 ergab 5
eindeutige Posts. Obergrenze: 5. Events mit Tokyo im Namen können Treffer sein,
ohne eine Japanreise zu beschreiben.

#### Diskussion über Streaming-Preise

[Netflix price discussion posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-streaming-price-increases)

Finde Bedenken zu Netflix-Preisen, bevor du Kündigungsgründe prüfst. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Obergrenze: 5. Preisformulierungen wählen
Bedenken aus, keine repräsentative Zuschauer-Stichprobe.

#### Einkauf von Schulbedarf

[August 2026 school supply posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-back-to-school-shoppers)

Prüfe 50 Posts über Schulbedarf in einem August-Fenster. Der Run am 2026-10-01
ergab 50 eindeutige Posts. Obergrenze: 50. Die 50 IDs enthielten in unserer
Prüfung 42 Datensätze mit klarem Themenbezug.

#### Zugverspätungen

[Train delay experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-public-transit)

Finde Beschwerden und Erfahrungen mit verspäteten Zügen. Der Run am 2026-10-01
ergab 5 eindeutige Posts. Obergrenze: 5. Persönliche Formulierungen finden
offizielle Meldungen eventuell nicht.

#### Diskussion über Tierfutter

[Pet food experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-pet-food-brands)

Prüfe Tierfutter-Erwähnungen in der breiteren Diskussion über Tierpflege. Der
Run am 2026-10-01 ergab 5 eindeutige Posts. Obergrenze: 5. Diskussionen über
Pflege oder Tiermedizin können Futtermarken beiläufig erwähnen.

#### Ausgewählte Fantasy-Sport-Posts

[Fantasy sports post batch](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-fantasy-football-apps)

Analysiere eine ausgewählte Gruppe von Fantasy-Sport-Posts. Der Run am
2026-10-01 ergab 2 eindeutige Posts. Obergrenze: 2. Labels betreffen das Thema
jedes Posts, nicht automatisch eine App.

#### Erfahrungen mit Cafés

[Coffee shop experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-coffee-shop-customers)

Finde Kommentare zu Cafés, bevor du Kunden-Feedback auswählst. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Obergrenze: 5. Beschwerden von Autoren
bleiben ungeprüfte Aussagen.

#### Immobilienmarkt

[Housing market discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-housing-market)

Prüfe Meinungen und Nachrichten zum Immobilienmarkt. Der Run am 2026-10-01 ergab
5 eindeutige Posts. Obergrenze: 5. Nachrichten und Meinungen können verschiedene
Marktthemen betreffen.

#### Turnierdiskussion

[League of Legends tournament posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-esports-tournament-viewers)

Trenne die Turnierdiskussion von Werbung für Tickets oder Matches. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Obergrenze: 5. Ticketanzeigen und
Spielberichte sind keine Zuschauermeinungen.

#### Posts eines Podcast-Herausgebers

[Podcast publisher post tone](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-podcast-episodes)

Prüfe die eigene Kommunikation des Podcast-Herausgebers. Der Run am 2026-10-01
ergab 5 eindeutige Posts. Obergrenze: 5. Der Ton des Herausgebers misst keine
Hörerzufriedenheit.

#### Fitnessstudio-Vergleiche

[Gym comparison review texts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-gym-memberships)

Prüfe die gemeinsame Haltung gegenüber 2 Fitnessstudios in deinen Rezensionen.
Der Run am 2026-10-01 ergab 3 eindeutige übergebene Texte. Obergrenze: 3. Beide
Ziele teilen sich 1 Sentiment-Antwort pro Text.

#### Mietwagen

[Car rental experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-car-rental-customers)

Finde Kommentare zu Mietwagen, bevor du Service-Probleme prüfst. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Obergrenze: 5. Anfragen und Werbung können
neben Berichten von Mietern Treffer sein.

#### Campus-Diskussion

[University cost and campus posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-university-life)

Prüfe die Campus-Diskussion, bevor du Posts zu Kosten auswählst. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Obergrenze: 5. Campus-Nachrichten und
Kritik belegen keine Erfahrungen von Studierenden.

#### Hochzeitsplanung

[Personal wedding planning posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-wedding-planning-posts)

Finde Formulierungen in der Ich-Form über Hochzeitspläne und Kosten. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Obergrenze: 5. Geschichten, Witze und
beiläufige Formulierungen können neben Planungserfahrungen Treffer sein.

#### Ladeerfahrungen

[EV charging experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-ev-charging-experiences)

Prüfe Ladeerfahrungen in der Diskussion über Elektrofahrzeuge. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Obergrenze: 5. Das Laden kann gegenüber
einem anderen Fahrzeugthema zweitrangig sein.

#### Diskussion über Steuererklärungen

[Spring 2026 TurboTax filing posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-tax-filing-software)

Prüfe die Diskussion über Steuererklärungen in einem festen Datumsfenster im
Frühjahr. Der Run am 2026-10-01 ergab 5 eindeutige Posts. Obergrenze: 5. Posts
belegen keine aktuellen Gebühren oder Steuerregeln.

#### Freizeitpark-Besuche

[Theme park visit discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-theme-park-visitors)

Finde Freizeitpark-Erwähnungen, bevor du Reaktionen auf Besuche auswählst. Der
Run am 2026-10-01 ergab 5 eindeutige Posts. Obergrenze: 5. Längere Posts über
ein anderes Thema können durch beiläufige Erwähnungen Treffer sein.

#### Ausgaben für Lebensmittel

[Grocery budget experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-grocery-prices)

Finde Kommentare in der Ich-Form über Ausgaben für Lebensmittel. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Obergrenze: 5. Breitere Diskussionen über
Politik, Ernährung oder Creator können Ausgaben für Lebensmittel erwähnen.

#### Kamera-Diskussion

[Phone camera discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-phone-camera-reviews)

Prüfe Kamera-Erwähnungen neben Fotos, Rezensionen und Ankündigungen. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Obergrenze: 5. Kamera-Erwähnungen können in
anderen Ankündigungen beiläufig sein.

#### Ausgewählter Sneaker-Post

[A selected sneaker post](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-sneaker-drop-reactions)

Analysiere einen bekannten Post ohne breite Stichwortsuche. Der Run am
2026-10-01 ergab 1 eindeutigen Post. Obergrenze: 1. Dieser ausgewählte
Begleittext beschreibt nicht jedes Detail seines Bildes.

#### Support-Chatbots

[Support chatbot discussion posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-customer-support-chatbots)

Finde die Diskussion über Support-Chatbots, bevor du Service-Beschwerden
auswählst. Der Run am 2026-10-01 ergab 5 eindeutige Posts. Obergrenze: 5. Bots
für emotionale Unterstützung und Antworten von Unternehmen können auch Treffer
sein.

#### Festival-Diskussion

[April 2026 Coachella discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-music-festival-attendees)

Prüfe 50 Festival-Posts in einem April-Fenster. Der Run am 2026-10-01 ergab 50
eindeutige Posts. Obergrenze: 50. Die 50 IDs enthielten 47 Datensätze mit
Themenbezug und wiederholte Nachrichtentexte.

#### Stromrechnungen

[Electricity bill discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-electric-bills)

Prüfe persönliche Stromkosten neben der politischen Diskussion. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Obergrenze: 5. Politische Behauptungen und
Preisprognosen bleiben ungeprüft.

#### Kaderwechsel im Basketball

[NBA trade and signing discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-nba-trade-reactions)

Finde die Diskussion über Trades und Verpflichtungen, bevor du Fan-Reaktionen
auswählst. Der Run am 2026-10-01 ergab 5 eindeutige Posts. Obergrenze: 5. Andere
Meldungen können Spieler oder Teams beiläufig erwähnen.

#### Diskussion über Aufenthalte

[Airbnb stay discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-airbnb-stays)

Konzentriere dich in der Diskussion über Aufenthalte auf Haltungen gegenüber
Airbnb. Der Run am 2026-10-01 ergab 5 eindeutige Posts. Obergrenze: 5. Werbung
von Gastgebern und App-Posts können neben Berichten von Gästen auftauchen.

#### Reaktionen auf Bücher

[Book reading reaction posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-book-club-readers)

Prüfe Lesereaktionen, ohne eine Mitgliedschaft im Buchclub anzunehmen. Der Run
am 2026-10-01 ergab 5 eindeutige Posts. Obergrenze: 5. Filmvergleiche und
persönliche Meinungen zu Büchern können beide Treffer sein.

#### Erfahrungen mit Kochboxen

[HelloFresh experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-meal-kit-services)

Finde Kommentare zu Kochboxen, bevor du Produkterfahrungen prüfst. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Obergrenze: 5. Pläne, Anzeigen und breitere
persönliche Geschichten können die Marke erwähnen.

#### Renndiskussion

[Formula 1 race discussion posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-formula-one-race-weekends)

Prüfe die Renndiskussion neben Aussagen von Teams und Fahrern. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Obergrenze: 5. Zitierte Fahreraussagen
können sich über verschiedene IDs wiederholen.

#### Erfahrungen mit Dating-Apps

[Dating app experience posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-dating-app-experiences)

Finde Erfahrungen mit Dating-Apps, Bemerkungen zu Matches und Witze. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Obergrenze: 5. Bemerkungen zu Matches und
Witze belegen keine Kundenidentitäten.

#### Posts über Wartezeiten am Flughafen

[Airport wait and lounge posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-airport-travelers)

Prüfe Kommentare zu Wartezeiten am Flughafen neben Reisehinweisen. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Obergrenze: 5. Offizielle Hinweise können
neben persönlichen Warteerfahrungen auftauchen.

#### Diskussion über Schulessen

[School lunch discussion](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-school-lunch-programs)

Prüfe persönliche Posts und die politische Debatte über Schulessen. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Obergrenze: 5. Autoren können auch
Institutionen sein, nicht nur Eltern.

#### Bierverkostung

[Craft beer tasting posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-craft-beer-drinkers)

Finde Meinungen aus Bierverkostungen, bevor du Rezensionsbeispiele auswählst.
Der Run am 2026-10-01 ergab 5 eindeutige Posts. Obergrenze: 5. Knappen
Begleittexten mit Link kann der Kontext für eine klare Haltung fehlen.

#### Zitate einer Docking-Ankündigung

[SpaceX docking announcement quotes](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-space-launches)

Prüfe Zitate einer Docking-Ankündigung nach einem festen Zeitpunkt. Der Run am
2026-10-01 ergab 5 eindeutige Posts. Obergrenze: 5. Zitate können Einladungen
oder neutrale Beschreibungen sein, nicht nur Reaktionen.

#### Antworten auf einen Geburtstagspost

[NASA birthday replies](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-replies-to-a-news-post)

Prüfe direkte Antworten auf einen Geburtstagspost. Der Run am 2026-10-01 ergab 5
eindeutige Posts. Obergrenze: 5. Fehlt der Kontext des Ausgangsposts, kann das
Analyseergebnis einer Antwort weniger aussagen.

Halte `maxItems` klein, während du Ergebnisse prüfst. Eine Obergrenze begrenzt
die Ausgabe, nicht die verfügbare Menge. Gibt es weniger passende Posts, prüfe
den Run-Report, bevor du deine Filter änderst. Lockere 1 Einstellung nach der
anderen, etwa Datumsangaben oder einen Mindestwert für Interaktionen. Notiere
die Einstellung, die du geändert hast.

Prüfe bei fehlgeschlagenen Analysen `analysis.reason` & wiederhole nur die
betroffenen IDs. Prüfe bei unvollständigen Antworten die kostenlose Diagnose,
bevor du sie als vollständig wertest. Begleittexte zu Medien können nicht alles
beschreiben, was ein Bild oder Video zeigt. Fehlender Zitat- oder Antwortkontext
kann ein Analyseergebnis unsicher machen.

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
- [X Space Scraper](https://apify.com/xquik/x-space-scraper): Findet Spaces nach
  Stichwort & liest ihre Titel, Status, Zeiten, Zuhörerzahlen, Hosts & Sprecher.
  Liest auch Broadcasts per URL oder ID. Nutze ihn, wenn du Live-Audio &
  Live-Video auf X verfolgst. Ab $0.00015 pro Space oder Broadcast.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): Scrapt
  Echtzeit-Trends nach Standort mit Rang, Volumen, Suchbegriff & WOEID. Nutze
  ihn, wenn du verfolgst, was wo gerade angesagt ist. Ab $0.00015 pro Trend.
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper): Scrapt
  X-Stellenanzeigen nach Stichwort, Ort, Arbeitsmodell, Karrierestufe &
  Unternehmen, mit Gehältern & Bewerbungslinks. Nutze ihn, wenn du auf X
  veröffentlichte Stellen sammelst. Ab $0.00015 pro Job.
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

Antworten auf häufige Fragen, danach, wo du Hilfe bekommst.

### Brauche ich einen KI-Account, einen X-API-Schlüssel oder einen Login?

Nein. X Tweet Sentiment Analysis von Xquik enthält die KI-Kosten im Preis. Du
brauchst keinen KI-Account, keine Tokens & keinen Schlüssel. Du brauchst auch
keinen X-API-Schlüssel, keinen Login & keine Zugangsdaten.

### Kann ich eigene Fragen nutzen?

Ja. Eigene `analysis.questions` ersetzen die Standardfragen. Sende 1 bis 8
Fragen vom Typ `choice`, `score` oder `probability`. Choice-Fragen akzeptieren 2
bis 255 Kategorien. Score-Fragen brauchen mindestens 2 geordnete Stufen.
Behalte dieselben Fragen in allen Runs, die du vergleichen willst.

### Warum hat ein Datensatz eine fehlgeschlagene oder übersprungene Analyse?

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

Ja. Im [API-Tab](https://apify.com/xquik/x-tweet-sentiment-analysis/api)
findest du Beispiele für Python, JavaScript & cURL. Nutze
Apify-[Zeitpläne](https://docs.apify.com/platform/schedules) für wiederkehrende
Runs. Übergib die vorherige Dataset-ID als `monitor.baselineDatasetId`, um
Änderungen zu sehen. Apify-Integrationen verbinden Runs auch mit Webhooks, Make,
Zapier, n8n & Google Sheets.

### Wo bekomme ich Hilfe?

Öffne ein Issue auf der Actor-Seite oder schreib mit der Run-ID an
support@xquik.com. Kostenlose Diagnosen im Key-Value-Store erklären leere,
unvollständige oder unterbrochene Runs.
