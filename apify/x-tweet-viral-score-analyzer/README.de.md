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
den umfassendsten X-Daten. X Tweet Viral Score Analyzer ergänzt jeden Tweet
um eine Viral-Score-Schätzung & ein Urteil. Jeder andere Apify Actor
berechnet, bevor gefiltert oder dedupliziert wird. Xquik berechnet nur für
gelieferte, eindeutige, filterkonforme Ergebnisse. Die KI-Kosten sind im Preis
pro Tweet enthalten. Du bezahlst keinen KI-Anbieter, kaufst keine Tokens &
bringst keinen Schlüssel mit.

Finde heraus, warum Tweets sich verbreiten oder floppen, & behalte die
ursprünglichen Tweet-Daten. **X Tweet Viral Score Analyzer with AI** sammelt
passende Tweets. Die KI bewertet 8 Merkmale jedes Beitrags. Der Actor macht
aus diesen Antworten eine Viral-Score-Schätzung von 0 bis 100 & ein Urteil.
Jeder Datensatz behält echte Likes, Reposts, Antworten & Zitate, sodass du
jede Schätzung mit dem vergleichen kannst, was passiert ist.

- **Viral Score pro Beitrag** aus festen, veröffentlichten Gewichten, die du
  überprüfen kannst.
- **8 Antworten zu Merkmalen** zeigen, warum ein Beitrag hoch oder niedrig
  abschnitt.
- **Harte Stopps** deckeln Beiträge, die wie Spam, Ragebait oder generischer
  Maschinentext wirken.
- **Vollständige Quelldatensätze** mit jedem Feld, das der Tweet
  offenlegt.

Der Viral Score schätzt, wie gut die Formulierung funktioniert. Er sagt keine
Likes oder Aufrufe voraus. Er bildet nicht nach, wie X Beiträge rankt.

## So prüfst du den Viral Score eines Tweets

1. Füge Suchbegriffe, Profil-Handles, Tweet-URLs oder Tweet-IDs hinzu.
2. Setze `maxItems` & die Extraktionsfilter, die deine Aufgabe braucht.
3. Beschreibe deine Zielgruppe in `analysis.context` oder lass den
   Standardwert stehen.
4. Führe den Actor aus & öffne die Dataset-Ansicht `Viral Score`.

```json
{
  "searchTerms": ["from:NASA -filter:replies -filter:retweets"],
  "maxItems": 150,
  "analysis": { "context": "Space fans & general readers." }
}
```

### Was der Actor beantwortet

| Frage          | Antwort                                                                  |
| -------------- | ------------------------------------------------------------------------ |
| Hook           | 0 kein Hook, 1 klarer Einstieg, 2 scharfer Einstieg                      |
| Klarheit       | 0 verwirrend, 1 kostet Mühe, 2 beim ersten Lesen klar                    |
| Informativ     | 0 nichts Neues, 1 bekannter Punkt, 2 nützliche Erkenntnis                |
| Witzig         | 0 nicht witzig, 1 leicht amüsant, 2 witzig genug zum Teilen              |
| Ragebait       | Wahrscheinlichkeit, dass der Beitrag vor allem Empörung provoziert       |
| KI-geschrieben | Wahrscheinlichkeit, dass der Text wie generischer Maschinentext wirkt    |
| Spam           | Wahrscheinlichkeit für Spam, Betrug, Gewinnspiel oder Engagement-Farming |
| Reaktion       | Teilen, antworten, liken, streiten oder ignorieren                       |

Die Antwort „KI-geschrieben" beurteilt nur den Stil. Sie stellt nicht fest,
wer den Beitrag geschrieben hat.

### So berechnet der Actor den Viral Score

Der Actor skaliert jeden Score von 0-2 auf einen Anteil von 0 bis 1. Dann
addiert er Punkte:

| Teil                                              | Punkte          |
| ------------------------------------------------- | --------------- |
| Hook                                              | bis zu 30       |
| Klarheit                                          | bis zu 20       |
| Mehrwert, der höhere Wert aus informativ & witzig | bis zu 30       |
| Reaktion                                          | bis zu 20       |
| Wahrscheinlichkeit für KI-geschrieben             | minus bis zu 15 |

Die Reaktion erhält einen Anteil ihrer 20 Punkte: Teilen 1, Antworten 0,8,
Liken 0,6, Streiten 0,4 & Ignorieren 0. Danach deckeln harte Stopps den Score.
Eine Spam-Wahrscheinlichkeit ab 0,7 deckelt ihn bei 20. Eine
Ragebait-Wahrscheinlichkeit ab 0,7 deckelt ihn bei 35. Eine
Wahrscheinlichkeit für KI-geschrieben ab 0,8 deckelt ihn bei 60. Der Actor
rundet das Ergebnis auf eine ganze Zahl.

| Urteil        | Score      |
| ------------- | ---------- |
| `send_it`     | 70 bis 100 |
| `edit_first`  | 40 bis 69  |
| `sleep_on_it` | 0 bis 39   |

`viral.weights` nennt die Version dieser Regeln, etwa `viral_lite:1`. Wir
erhöhen sie, sobald sich ein Gewicht, ein Stopp oder ein Schwellenwert ändert.
Der Score ist `null`, wenn die Analyse fehlgeschlagen ist, der Actor sie
übersprungen hat oder eine Standardantwort zu einem Merkmal fehlt. Der Actor
füllt einen fehlenden Score nie mit einer Vermutung.

## Algorithm-Score-Schätzung

X hat seine Ranking-Gewichte im Repository `xai-org/x-algorithm` in der Datei
`home-mixer/params/param.rs` veröffentlicht. Der Actor wendet 4 davon auf die
öffentlichen Zähler jedes Beitrags an:

| Zähler  | Gewicht |
| ------- | ------- |
| Like    | 0,5     |
| Antwort | 5       |
| Repost  | 1       |
| Zitat   | 5       |

`viral.algorithmWeightedSum` ist die Summe aus jedem Zähler mal seinem
Gewicht. `viral.algorithmScore` teilt diese Summe durch die Aufrufe &
multipliziert sie mit 1.000. Ein Beitrag ohne Aufrufzahl nutzt stattdessen die
Follower. `viral.algorithmBasis` nennt den Divisor, `views` oder `followers`.
Vergleiche nur Scores mit derselben Basis. `viral.weightsVersion` nennt die
Gewichte, etwa `x_algorithm_params:2026-09-18`.

Grenzen:

- X multipliziert jedes Gewicht mit einer Wahrscheinlichkeit, die es für
  einen einzelnen Betrachter vorhersagt. Der Actor multipliziert mit
  beobachteten Zählern. Das Ergebnis ist eine Schätzung, nicht der Score, den
  X berechnet.
- X veröffentlicht kein Gewicht für Lesezeichen oder Aufrufe. Die Summe lässt
  beide weg.
- X nutzt mehr Signale als diese 4, etwa Verweildauer & geteilte Beiträge.
  Öffentliche Daten zeigen sie nicht.
- Der Score ist `null`, wenn ein Beitrag keine Aufrufe & keine Follower-Zahl
  hat.
- Die KI sieht diese Zähler nie. Sie liest nur den Text & den Kontext.

## Geschätzt gegenüber tatsächlich

Der Actor vergleicht jeden Viral Score mit dem, was passiert ist.
`viral.actualEngagementRate` ist
`log10(1 + weighted sum per 1,000 followers)`. Der Logarithmus begrenzt die
Wirkung eines einzelnen sehr großen Beitrags. Die Rate ist `null`, wenn die
Follower-Zahl fehlt oder 0 ist.

Der Block `viral.calibration` der Run-Zusammenfassung meldet:

- `comparedPosts`: Beiträge mit einem Viral Score & einer tatsächlichen Rate.
- `rankCorrelation`: eine Spearman-Rangkorrelation von -1 bis 1. Sie fragt,
  ob höhere Scores mit höheren Raten einhergingen.
- `calibrationScore`: 100 mal die Korrelation, mindestens 0.
- `overperformers` & `underperformers`: jeweils bis zu 5 Beiträge mit
  Tweet-ID, URL, Viral Score, tatsächlicher Rate & `gap`.

`gap` ist die standardisierte tatsächliche Rate minus der standardisierte
Viral Score. Ein Beitrag kommt in eine Liste, wenn sein Gap 1
Standardabweichung erreicht.

Grenzen:

- Weniger als 10 verglichene Beiträge ergeben eine `null`-Kalibrierung mit dem
  Grund `too_few_posts`. Identische Scores oder Raten ergeben `no_variation`.
- Der Actor gruppiert Raten in 0,1 breite Buckets, um den Speicherbedarf
  konstant zu halten. Beiträge in einem Bucket zählen als gleichrangig, daher
  ist die Korrelation ein Näherungswert.
- Die Kalibrierung beschreibt einen Run. Ein niedriger Wert kann bedeuten,
  dass sich die Beiträge in Timing, Thema oder Zielgruppe unterscheiden, nicht
  dass die Schätzung der Formulierung versagt hat.
- Junge Beiträge haben noch nicht alle Interaktionen gesammelt. Vergleiche
  Beiträge ähnlichen Alters.

## Account-Report

Der Block `viral.accounts` der Run-Zusammenfassung meldet jedes Autoren-Handle:

- Anzahl der Beiträge, durchschnittlicher Viral Score & durchschnittliche
  tatsächliche Interaktionsrate.
- Der beste & der schlechteste Beitrag nach Viral Score, mit Tweet-ID & URL.
- Durchschnittlicher Viral Score pro Bucket: Posting-Stunde in UTC,
  Textlängenband, hat Medien, hat Link & Selbst-Thread.

Textlängenbänder sind `short` bis 80 Zeichen, `medium` bis 200, `long` bis 280
& `extended` darüber. Ein Selbst-Thread-Beitrag antwortet seinem eigenen Autor.

Grenzen:

- Der Report listet die 50 Handles mit den meisten bewerteten Beiträgen.
- Der Actor verfolgt die ersten 1.000 Handles eines Runs. `untrackedPosts`
  zählt bewertete Beiträge späterer Handles & Beiträge ohne Handle.
- Ein Bucket mit wenigen Beiträgen sagt wenig aus. Prüfe `posts`, bevor du
  Durchschnitte vergleichst.
- Buckets zeigen, was in diesem Run zusammen auftrat. Sie zeigen keine Ursache.

## Rangliste

Der Block `viral.leaderboard` der Run-Zusammenfassung reiht die Handles des
Account-Reports. `byViralScore` reiht nach durchschnittlichem Viral Score.
`byActualEngagementRate` reiht nach durchschnittlicher tatsächlicher Rate. Jede
Liste enthält bis zu 20 Handles mit `rank`, `posts` & `average`.

Grenzen:

- Ein Handle braucht mindestens 3 bewertete Beiträge für einen Rang.
- Die Raten-Liste überspringt Handles ohne Follower-Zahl.
- Bei Gleichstand entscheiden mehr Beiträge, dann der Handle-Name.
- Die Rangliste deckt die Beiträge eines Runs ab, nicht die gesamte Historie
  eines Accounts.

## Entwurf bewerten, bevor du postest

Füge deinen eigenen Text in `texts` ein. Der Actor bewertet ihn & ruft nichts
von X ab.

```json
{
  "texts": [
    "We shipped dark mode today. Try it and tell us what breaks.",
    "5 things we learned from 1,000 support tickets."
  ],
  "analysis": { "context": "Developers who use our app." }
}
```

- Jeder Text wird zu 1 Datensatz mit `viralScore`, `viralVerdict` &
  `viral.stops`.
- `tweet.id` ist `text:1`, `text:2` & so weiter, & `tweet.type` ist `text`.
- Ein Entwurf hat noch keine Likes oder Aufrufe, daher bleibt
  `viral.algorithmScore` `null`.
- Jeder analysierte Text kostet dieselben $0.0003 wie ein analysierter Tweet.
- Ist `texts` gesetzt, analysiert der Run nur diese Texte. Führe X-Ziele
  separat aus.

## Preise

Die KI-Kosten sind im Preis pro Tweet enthalten. Du bezahlst keinen KI-Anbieter, kaufst keine Tokens & bringst keinen Schlüssel mit.

Ab $0.0003 pro erfolgreich analysiertem Tweet, ohne Startgebühr. Der
Preis enthält die Erfassung & den Viral Score. Das Analyse-Kontingent umfasst
8 Fragen, 8.000 Byte pro Frage-Definition & 12.000 Byte Kontext pro Tweet.
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
  "tweet": { "id": "2100493544842494265", "text": "...", "likeCount": 12 },
  "viral": {
    "score": 74,
    "verdict": "send_it",
    "weights": "viral_lite:1",
    "stops": [],
    "algorithmScore": 8.5,
    "algorithmBasis": "views",
    "algorithmWeightedSum": 17,
    "actualEngagementRate": 0.7202,
    "weightsVersion": "x_algorithm_params:2026-09-18"
  },
  "viralScore": 74,
  "viralVerdict": "send_it",
  "viralAlgorithmScore": 8.5,
  "viralActualEngagementRate": 0.7202,
  "analysis": {
    "status": "succeeded",
    "answers": [
      { "questionId": "hook", "type": "score", "value": 2, "confidence": 0.84 },
      { "questionId": "spam", "type": "probability", "probability": 0.03 },
      {
        "questionId": "reaction",
        "type": "choice",
        "value": "share",
        "confidence": 0.7
      }
    ]
  }
}
```

Jedes Ergebnis enthält `tweet`, `analysis` & `viral`. Antworten enthalten
Typen, Fragenversionen & verfügbare Wahrscheinlichkeiten. `viral.stops` listet
die harten Stopps, die den Score gedeckelt haben. Eine fehlgeschlagene
oder übersprungene Analyse behält den gesammelten Tweet mit einer leeren
Antwortliste, einem `reason` & einem `null`-Score. Kostenlose Diagnosen im
Key-Value-Store erklären ungültige Eingaben, fehlende Ergebnisse &
unterbrochene Erfassung. Der Run-Report trennt gesammelte Datensätze,
abgerechnete Analysen & ausstehende Gebühren.

## Run-Zusammenfassung & flache Antworten

Jeder Run schreibt einen `analysis-summary`-Datensatz in seinen
Key-Value-Store & wiederholt ihn unter `results.analysisSummary` im
Run-Report. Er zählt analysierte, fehlgeschlagene & übersprungene
Datensätze, summiert Interaktionen und fasst jede Frage zusammen. Sein
`viral`-Block meldet `averageScore`, die Anzahl jedes Urteils & wie viele
Datensätze der Actor bewertet oder unbewertet gelassen hat. Derselbe Block
enthält `calibration`, `accounts` & `leaderboard`, die oben beschrieben sind.
Score-Fragen melden einen Mittelwert & einen nach Interaktionen gewichteten
Mittelwert. Die Aufteilung `reaction` zeigt, wie viele Tweets in welche
Reaktion fallen, & `top` listet die drei am stärksten interagierten Tweets pro
Reaktion. Ein leerer Run meldet Nullwerte & einen `null`-Durchschnitt. Jeder
Datensatz listet `sourceDomains`, die Hostnamen, auf die er verlinkt, &
`cashtags` wie `$NVDA` aus seinem Text. Ist `monitor.baselineDatasetId`
gesetzt, zählt der `monitor`-Block der Zusammenfassung Vergleichsstatus &
listet bis zu 50 geänderte Datensätze.

Jeder Ergebnisdatensatz führt außerdem `viralScore`, `viralVerdict`,
`viralAlgorithmScore`, `viralActualEngagementRate` & `answers`, eine flache
Zuordnung von Frage-ID zu gewählter Kategorie, Score oder Wahrscheinlichkeit.
Die Dataset-Ansicht `Viral Score` sowie CSV- oder Excel-Exporte zeigen diese
Spalten neben dem Tweet, sodass Tabellenkalkulationen kein JSON parsen müssen.
Fehlgeschlagene & übersprungene Datensätze führen eine leere Zuordnung.

## Mit einem früheren Run vergleichen

Übergib `monitor.baselineDatasetId`, die Dataset-ID eines abgeschlossenen
früheren Runs mit denselben Analyseeinstellungen. Jeder Datensatz erhält
dann ein `monitor`-Objekt. Sein Status ist `first_run` ohne Baseline,
`new_to_baseline` für Tweets, die der frühere Run nicht hatte, &
`unchanged` oder `changed` für Tweets, die er hatte. `changes` listet
jede Merkmal-Entscheidung, die sich von `previous` zu `current` geändert
hat. Entscheidungen werden nach Kategorie, gerundeter Score-Stufe oder
Ja/Nein bei 0,5 verglichen. Eine Entscheidung zählt in drei Fällen als
geändert. Die frühere Kategorie fällt unter eine Wahrscheinlichkeit von 0,4.
Ein Score bewegt sich um mindestens 0,6 Stufen. Eine
Ja/Nein-Wahrscheinlichkeit landet mindestens 0,1 vom Schwellenwert entfernt.
Fast unentschiedenes Rauschen zwischen Runs bleibt unverändert. Baselines über
`maxBaselineRows` (Standard: 100.000) oder aus abweichenden Einstellungen
stoppen den Run vor der Erfassung mit einem Diagnose-Datensatz.

## Task-Beispiele

Wähle aus 50 öffentlichen Tasks. Jeder startet mit einer echten
englischen Suche mit begrenztem `maxItems` & der Dataset-Ansicht
`Viral Score`. Manche ergänzen Zielgruppen-Kontext. Bearbeite die Suche oder
den Kontext vor dem Ausführen.

- [Viral score of AI startup launch tweets](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-ai-startup-launch-tweets)
- [Viral score of SaaS founder build in public posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-saas-founder-build-in-public-posts)
- [Viral score of Product Hunt launch posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-product-hunt-launch-posts)
- [Viral score of Developer tool announcements](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-developer-tool-announcements)
- [Viral score of Open source release posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-open-source-release-posts)
- [Viral score of Crypto project announcements](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-crypto-project-announcements)
- [Viral score of Parenting humor posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-parenting-humor-posts)
- [Viral score of Office humor posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-office-humor-posts)
- [Viral score of Pet photo captions](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-pet-photo-captions)
- [Viral score audit of NASA posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-nasa-posts)
- [Viral score audit of Duolingo posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-duolingo-posts)
- [Viral score audit of Wendy's posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-wendys-posts)

Die übrigen Tasks decken weitere Themen & Marken-Accounts auf der
Actor-Seite ab.

## FAQ & Support

### Bedeutet ein hoher Score, dass ein Tweet viral geht?

Nein. Der Score schätzt, wie gut die Formulierung bei allgemeinen Lesern
funktioniert. Timing, Zielgruppengröße, Medien & Glück entscheiden ebenfalls
über die Reichweite. Vergleiche Scores mit den echten Interaktionszahlen in
jedem Datensatz, bevor du dich auf sie verlässt.

### Kann ich eigene Fragen nutzen?

Ja. Eigene `analysis.questions` ersetzen die Standardwerte: 1-8
`choice`-, `score`- oder `probability`-Fragen mit 2-255 Kategorien oder
mindestens 2 geordneten Stufen. Der Viral Score braucht alle 8
Standardfragen, daher lassen eigene Fragen ihn auf `null`.

### Warum kam ein Datensatz mit `analysis.status` `failed` oder `skipped` zurück?

Der Actor hat den Tweet gesammelt & geliefert, aber die KI-Analyse
wurde nicht abgeschlossen. `analysis.reason` nennt die Ursache, etwa
`context_limit`, wenn der Tweet & sein Kontext `maxContextBytes`
überschreiten, oder `service_unavailable` nach Wiederholungsversuchen.
Diese Datensätze verursachen keine Ergebnisgebühr & erhalten keinen Score.
Erhöhe `maxContextBytes` (bis zu 12.000) oder führe die betroffenen IDs erneut
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

## Verwandte Xquik Actors

Jeder Xquik Actor nutzt dieselbe Extraktions-Engine, filterbasierte
Abrechnung & Diagnosen. Wähle den, der zu deinen Daten passt.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): Scrapt Tweets
  aus Suchen, Profil-Timelines, Listen & Tweet-IDs mit über 50 Filtern &
  flachen Exporten. Nutze ihn, wenn du Tweet-Daten ohne Analyse brauchst. Ab
  $0.00015 pro Datensatz.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): Scrapt
  Profile samt Beiträgen, Antworten, Medien & Followern anhand von Handles, IDs
  oder URLs. Nutze ihn, wenn du von Accounts statt von Suchen ausgehst. Ab
  $0.00015 pro Datensatz.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): Scrapt
  Antworten, Kommentare & ganze Unterhaltungen unter Beiträgen mit über 25
  Filtern. Nutze ihn, wenn du die Diskussion unter Tweets brauchst. Ab
  $0.00015 pro Datensatz.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): Scrapt
  Antworten, Zitate, Retweeter & Threads zu Beitrags-URLs oder -IDs in
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
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  Beantwortet deine eigenen Kategorie-, Score- & Ja/Nein-Fragen für jeden
  Tweet mit KI. Nutze ihn, wenn die vorgefertigten Analysen nicht zu deinen
  Labels passen. Ab $0.0003 pro analysiertem Tweet.
