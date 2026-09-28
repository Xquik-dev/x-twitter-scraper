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
liefert die vollständigsten X-Daten. X Tweet Scraper von Xquik sammelt Posts
(Tweets), Antworten, Profile, Listen & Suchergebnisse mit über 50 Filtern.
Öffentliche Benchmarks belegen, dass er unter 12 Actors für X-Posts der
günstigste & schnellste ist. Seine Datensätze haben 2-mal so viele Felder wie
beim Median-Actor. Das zeigt der [Benchmark unten](#benchmark). Die meisten
anderen Apify Actors rechnen ab, bevor sie filtern oder Duplikate entfernen.
Xquik rechnet nur gelieferte, eindeutige Ergebnisse ab, die zu deinen Filtern
passen.

Scrape öffentliche Posts auf X (Twitter) **ab $0.00015 pro geliefertem Ergebnis,
auf jedem Apify-Plan**. Apify berechnet die Plattformnutzung separat. Du
brauchst keinen X-Login & zahlst keine Start- oder Suchgebühr. Entwickelt von
[Xquik](https://xquik.com).

> Xquik ist ein unabhängiger Drittanbieter-Dienst. Nicht verbunden mit X Corp.
> "Twitter" und "X" sind Marken von X Corp.

## Was macht X Tweet Scraper?

X Tweet Scraper von Xquik liefert Posts, Interaktionskennzahlen, öffentliche
Autorenprofile & Medien. Er akzeptiert URLs, Nutzernamen, Listen-IDs, Post-IDs &
Suchanfragen mit über 50 Filtern.

### Wichtige Funktionen

- Filter & Duplikatentfernung laufen vor der Abrechnung.
- Eine Eingabe deckt Einzelabrufe, Timelines, Listen, Suche & Interaktionsmodi
  ab.
- Eingaben mit Post-IDs haben keine feste Obergrenze. Deine Einstellungen für
  Apify-Ausgaben & Timeout gelten weiterhin.
- Run-Logs zeigen die Seitenzeiten in `fetchDurationMs`, `processingDurationMs`,
  `pushDurationMs`, `statusDurationMs` & `fullPageDurationMs`.
- Startet Apify einen Run neu, bleiben gelieferte Datensätze & der Fortschritt
  erhalten.

### Anwendungsfälle

- Versorge Forschung, Anreicherung, Analysen & KI-Training mit mehr Feldern pro
  Tweet. Am 2026-09-27 hatte unsere Median-Zeile 63 Felder. Das ist das 2-Fache
  des Medians von 11 anderen Actors.
- Verfolge die Stimmung zu deiner Marke über viele Posts.
- Beobachte Posts von Wettbewerbern & Begriffe deiner Branche.
- Finde potenzielle Kunden in öffentlichen Konversationen.
- Sammle öffentliche Datasets für die Forschung.
- Finde Posts mit hoher öffentlicher Interaktion.

### Welche Daten kann X Tweet Scraper extrahieren?

| Feld                   | Beschreibung                                                      |
| ---------------------- | ----------------------------------------------------------------- |
| `id`                   | Post-ID                                                           |
| `text`                 | Vollständiger Posttext (inklusive Note Tweets bis 25.000 Zeichen) |
| `createdAt`            | Nativer X-Zeitstempel als String                                  |
| `likeCount`            | Anzahl der Gefällt-mir-Angaben                                    |
| `retweetCount`         | Anzahl der Reposts                                                |
| `replyCount`           | Anzahl der Antworten                                              |
| `quoteCount`           | Anzahl der Zitate                                                 |
| `viewCount`            | Anzahl der Aufrufe                                                |
| `bookmarkCount`        | Anzahl der Lesezeichen                                            |
| `lang`                 | Sprache des Posts                                                 |
| `url`                  | Direkter Link zum Post                                            |
| `tweetUrl`             | Alias der Post-URL in der flachen Ausgabe                         |
| `twitterUrl`           | URL im twitter.com-Format in der flachen Ausgabe                  |
| `author`               | Verfügbare Autorenfelder (Nutzername, Bio, Website, Zähler)       |
| `authorUsername`       | Nutzername des Autors in der flachen Ausgabe                      |
| `authorFollowers`      | Follower-Anzahl des Autors in der flachen Ausgabe                 |
| `authorUrl`            | Website des Autors in der flachen Ausgabe, falls vorhanden        |
| `authorDescription`    | Bio-Text des Autors in der flachen Ausgabe                        |
| `authorCoverPicture`   | URL des Bannerbilds des Autors in der flachen Ausgabe             |
| `authorPinnedTweetIds` | IDs der angehefteten Posts des Autors in der flachen Ausgabe      |
| `media`                | Angehängte Bilder, Videos, GIFs                                   |
| `mediaUrls`            | Medien-URLs in der flachen Ausgabe                                |
| `imageUrls`            | Bild-URLs in der flachen Ausgabe                                  |
| `videoUrls`            | Video-URLs in der flachen Ausgabe                                 |
| `entities`             | Hashtags, URLs, Erwähnungen & Video-Zeitmarken                    |
| `displayTextRange`     | Anzeigetextbereich von X, falls vorhanden                         |
| `contentDisclosure`    | Offenlegungsmetadaten, falls vorhanden                            |
| `conversationControl`  | Antworteinstellung & öffentlicher Inhaber der Konversation        |
| `reactionContext`      | Öffentlicher Post & Nutzer, auf die eine Reaktion verweist        |
| `limitedActions`       | Öffentliche Interaktionsbeschränkungen & Hinweise                 |
| `isLimitedReply`       | Ob Antworten eingeschränkt sind                                   |
| `isNoteTweet`          | Ob es ein Note Tweet ist (langer Post)                            |
| `isQuoteStatus`        | Ob dieser Post einen anderen Post zitiert                         |
| `isRetweet`            | Ob dieser Datensatz ein Repost ist, mit angehängtem Original      |
| `isPinned`             | Ob der Autor diesen Post angeheftet hat, in flachen Datensätzen   |
| `isReply`              | Ob dieser Post eine Antwort ist                                   |
| `quoted_tweet`         | Objekt des zitierten Posts (bei einem Zitat)                      |
| `conversationId`       | Thread- oder Konversations-ID                                     |
| `resultType`           | Datensatztyp für Rich-, Interaktions- & Diagnose-Datensätze       |
| `sourceTweetId`        | ID des Quellposts für Artikel- & Interaktionsmodi                 |
| `article`              | Strukturierte Artikeldaten in `mode: "article"`                   |

Optionale Post-Metadaten umfassen `authorUnavailable`, `card`, `communityId`,
`communityNote`, `edit`, `exclusiveContent`, `noteTweet` & `postCta`.
`isTranslatable`, `place`, `possiblySensitive` & `viewState` enthalten weiteren
öffentlichen Kontext. `previousCounts` enthält die Interaktionswerte vor einer
Bearbeitung. `tombstone` enthält Hinweise zur Sichtbarkeit. `unmentionedUserIds`
listet Nutzer, die die Konversation verlassen haben. Die genauen Felder stehen
in OpenAPI.

Verschachtelte `author`-Objekte enthalten öffentliche Profilfelder. Sie decken
Identität, Zähler, Verifizierung, Verfügbarkeit, berufliche Daten & Profil-Bios
ab.

Repost-Datensätze setzen `isRetweet` auf `true`. Ihr `text` enthält den
Originalpost vollständig. `retweeted_tweet` enthält den Originalpost mit Autor &
Zählern.

Post-Datensätze enthalten außerdem `type`, `source`, `inReplyToId`,
`inReplyToUserId`, `inReplyToUsername` & `retweeted_tweet`. Zitierte &
repostete Posts haben auf jeder Verschachtelungsebene dieselben Felder.

Medien enthalten Verfügbarkeit, Geometrie, Tags & Video-Varianten. Dazu kommen
die Aktionen `watchNowUrl` & `visitSiteUrl`.

Datensätze enthalten nie Angaben, die nur den Betrachter betreffen. Der Actor
entfernt Flags für Folgen, Blockieren, Stummschalten, Lesezeichen, Gefällt mir,
Repost, Bearbeitungsrechte & Ähnliches. Auch die Raw-Ausgabe enthält sie nicht.

## Wie scrape ich Tweet-Daten mit X Tweet Scraper?

So gehst du in der Apify Console vor:

1. Öffne ein [Task-Beispiel](#task-beispiele) oder den Tab Input.
2. Füge URLs, Nutzernamen, Post-IDs oder Suchbegriffe hinzu.
3. Setze `maxItems` & die Filter, die du brauchst.
4. Klicke auf Start & warte, bis der Run fertig ist.
5. Exportiere das Dataset als JSON, CSV, Excel oder HTML.

Die Beispiele unten zeigen die Eingabe für jede Quelle.

### URLs einfügen

Füge eine beliebige Mischung aus Post-, Profil-, Such- oder Listen-URLs ein:

```json
{
  "startUrls": [
    { "url": "https://x.com/elonmusk/status/1846987139428634858" },
    { "url": "https://x.com/nasa" },
    { "url": "https://x.com/search?q=AI%20lang%3Aen" },
    { "url": "https://x.com/i/lists/1748648376080666720" }
  ],
  "maxItems": 500
}
```

Post-URLs liefern genau diese Posts, ohne Duplikate & in deiner
Eingabereihenfolge. Profil-URLs liefern die Posts des Accounts. Such-URLs führen
ihre Suchanfrage aus. Listen-URLs liefern die Posts der Liste. `maxItems`
begrenzt die Ergebnisse über alle eingefügten URLs.

### Viele Nutzernamen scrapen

Nutzernamen sind eine Kurzform für viele `from:username`-Suchen:

```json
{ "twitterHandles": ["elonmusk", "nasa", "openai"], "maxItems": 100 }
```

Jeder Nutzername liefert die Posts dieses Accounts. Der Actor entfernt doppelte
Datensätze vor Ausgabe & Abrechnung. Du kannst Nutzernamen mit oder ohne `@`
angeben. Nutzernamen & Profil-URLs behalten Reposts, wie der Tab Posts auf X.
Das gilt auch mit Datum oder Filtern. Setze `tweetTypes.excludeRetweets`, um sie
zu entfernen.

### Posts suchen

Trage 1 oder mehrere Suchanfragen in das Feld Search terms ein:

```json
{
  "searchTerms": ["from:elonmusk AI", "#bitcoin lang:en"],
  "maxItems": 1000,
  "queryType": "Latest"
}
```

Steht `mode` auf `tweet` oder `tweets` & fehlen Post-IDs, laufen Suchanfragen
als Suche. Gültige `searchTerms` liefern dann nie einen leeren Abruf.

Mit Datumsfenstern holst du auch ältere Posts eines Accounts, etwa
`from:elonmusk since:2026-01-01 until:2026-01-02`. Jeder Begriff behält seine
eigene `searchTerm`-Zuordnung. `maxItems` begrenzt die Ergebnisse über alle
Suchbegriffe. Der Actor prüft jeden gelieferten Post gegen `since:`, `until:` &
Unix-Zeitfenster. Gefilterte Suchen lesen weiter, bis sie Treffer finden oder X
keine Ergebnisse mehr hat.

Ein `from:`-Suchbegriff liefert, was die X-Suche liefert. Reposts fehlen also.
Füge `include:nativeretweets` hinzu, um sie zu behalten. Mit
`filter:nativeretweets` erhältst du nur Reposts.

### Posts nach ID abrufen

```json
{ "tweetIds": ["1846987139428634858", "1858743654778892784"], "maxItems": 100 }
```

Die Ergebnisse behalten deine Eingabereihenfolge & enthalten keine Duplikate.
Sie enthalten nur die Posts, die du angefragt hast. Der Abruf akzeptiert auch
`tweetId`, `tweetIDs`, `tweets`, `postIds`, `lookupPostIds`, `tweetUrls` &
`postUrls`.

### Interaktions-, Thread- & Artikelmodi

Setze `mode`, um eine feste Route zu erzwingen. Andere Felder der Eingabe
ändern daran nichts:

```json
{ "mode": "replies", "replyTweetIds": ["1846987139428634858"], "maxItems": 100 }
```

Post- & Suchmodi sind `tweet`, `tweets` & `search`. Profilmodi sind
`profileTweets`, `profileReplies`, `profileMedia` & `profileLikes`.
`listTweets` liest die Posts einer Liste & `article` liest den X-Artikel in
einem Post. Modi für einen einzelnen Post sind `replies`, `quotes`, `thread`,
`retweeters` & `favoriters`.

`profileTweets` folgt dem Tab Posts im Profil auf X. Er liefert die Posts des
Accounts, seine Reposts & seine Antworten auf eigene Posts. Die Datensätze
kommen nach Datum sortiert. Der Actor verwirft Antworten an andere Accounts vor
der Abrechnung. Er verwirft auch Konversationskontext anderer Autoren.

Willst du nur Originalposts, schließe die anderen Typen aus:

```json
{
  "mode": "profileTweets",
  "twitterHandles": ["apify"],
  "tweetTypes": { "excludeReplies": true, "excludeRetweets": true },
  "maxItems": 100
}
```

`tweetTypes.excludeReplies`, `excludeRetweets` & `excludeQuotes` funktionieren
bei jeder Quelle. Eine Suche sendet sie als `-filter:replies`,
`-filter:nativeretweets` & `-filter:quote` an X. Bei einem Profil oder einer
Liste verwirft der Actor diese Datensätze selbst. Ausgeschlossene Datensätze
erreichen nie das Dataset, du zahlst also nie für sie. Sie zählen auch nie zu
`maxItems`.

`profileReplies` folgt dem Tab Antworten auf X. Er liefert die eigenen Posts &
Antworten des Accounts. Der Actor schließt Konversationskontext anderer Autoren
aus. Nutze `filter:replies` oder eine `to:`-Suche, wenn du nur Antworten willst.

Such- & paginierte Post-Modi unterstützen `time.since`, `time.until`,
Unix-Zeitstempel & `lang`. Dazu gehören die Profil-Tabs Posts, Antworten, Medien
& Gefällt mir. Dazu gehören auch Listen sowie Antworten, Zitate & Threads eines
Posts. Passende flache Datumsoperatoren funktionieren auch. Der Actor prüft
jeden Datensatz vor der Abrechnung. Die untere Datumsgrenze ist inklusiv. Die
obere Grenze ist exklusiv. Datumsfilter schließen Datensätze ohne verwendbares
Datum aus. Sprachfilter schließen fehlende oder abweichende Sprachen aus.
Gefilterte Datensätze verbrauchen nie dein Ergebnislimit.

Dasselbe Datum für `since` & `until` ergibt ein leeres Fenster. Setze `until`
auf den nächsten Tag, um 1 vollen Tag zu erhalten. Listen-Runs mit Datumsfenster
erreichen ältere Tage schnell. Sie enden, sobald sie deine untere Grenze
passieren. Bei Fenstern weit zurück in einer Liste können einzelne Antworten
fehlen. Post-Filter gelten nicht für Nutzerlisten oder direkte Abrufe von Posts
oder Artikeln.

`time.withinTime` & `within_time` funktionieren in denselben Modi. Der Wert `7d`
behält die letzten 7 Tage, bevor der Run zu lesen beginnt. Ein Fenster, das vor
2006 zurückreicht, behält jeden Post.

`mode: "replies"` ist strenger. Bei jedem Post-Datensatz entspricht
`inReplyToId` der angefragten Post-ID. Verschachtelte Antworten in der
Konversation zählen nie als direkte Antworten. Zeigt X weniger Antworten, als es
meldet, behält der Actor die gefundenen Datensätze. Ist dein Limit nicht
erreicht, schreibt er 1 `replies-incomplete`-Eintrag in `diagnostics`. Der Run
bleibt unvollständig, bis er dein Limit erreicht oder X keine Antworten mehr
hat. `replyCoverage` meldet Antwortzahlen & Details zur Abdeckung. Setze
`maxItems` auf die gewünschte Gesamtzahl, auch über 25.000 für 1 Antwortziel.

Artikel-Datensätze enthalten `resultType: "article"`, `sourceTweetId`, `article`
& optional `author`. Nutzer-Datensätze aus Interaktionen enthalten
`resultType: "user"`, `sourceTweetId` & `engagementMode`.

Reposter ruft der Actor wie jede andere öffentliche Interaktion ab. Wer einen
Post mit Gefällt mir markiert hat, liefert er nur, wenn X es zeigt. X zeigt das
eventuell nur bei berechtigten Posts oder nur dem Inhaber des Posts. Auch die
Gefällt-mir-Angaben eines Profils liefert er nur, soweit möglich. Viele
öffentliche Profile haben keinen lesbaren Tab Gefällt mir. Zeigt X keine Nutzer
oder mit Gefällt mir markierten Posts, schreibt der Actor einen kostenlosen
`diagnostics`-Datensatz. Post-Datensätze können Lesezeichen-Zahlen enthalten. X
zeigt aber nicht, welche Accounts einen Post als Lesezeichen gespeichert haben.

### Flache CSV-Datensätze exportieren

Behalte die verschachtelten JSON-Standardfelder oder ergänze tabellenfreundliche
Spalten:

```json
{ "searchTerms": ["from:nasa moon"], "maxItems": 100, "outputPreset": "flat" }
```

Die flache Ausgabe lässt `author` & `media` unverändert. Sie ergänzt Felder auf
oberster Ebene wie `authorUsername`, `authorName`, `authorFollowers`,
`tweetUrl`, `twitterUrl`, `mediaUrls`, `imageUrls` & `videoUrls`.

Jeder flache Post-Datensatz enthält `media`. Ein Post ohne Medien hat eine leere
Liste. So hat jeder Datensatz dieselben Schlüssel, in einer Tabelle wie in einer
typisierten Pipeline.

### Feldnamen wählen

Standard sind die Legacy-Feldnamen. Wähle einen Stil für Rich- oder
Raw-Ergebnisse:

```json
{
  "searchTerms": ["from:nasa moon"],
  "maxItems": 100,
  "outputVariant": "rich",
  "fieldStyle": "snake_case"
}
```

Nutze `camelCase` oder `snake_case` für Ergebnisfelder auf oberster &
verschachtelter Ebene. Die flache Snake-Case-Ausgabe enthält Felder wie
`author_username` & `media_urls`. Sichere Quell-Snapshots unter `raw` behalten
ihre ursprünglichen Quellschlüssel. Kollidierende Quellnamen bleiben ebenfalls
unverändert, damit keine Daten verloren gehen.

Legacy-Diagnosen nutzen `resultType`, `actorVersion` & `replyCoverage`. Rich- &
Raw-Ausgaben wenden `fieldStyle` auf jeder Verschachtelungsebene an. Snake Case
nutzt zum Beispiel `result_type`, `actor_version` & `reply_coverage`. Die
Dataset-Ansicht Overview funktioniert mit beiden Stilen. Wähle die
Console-Ansicht, die zum `fieldStyle` des Runs passt. `camelCase fields`
erwartet `camelCase`. `snake_case fields` erwartet `snake_case`. Ansichten
wählen nur Spalten aus. Sie benennen gespeicherte oder exportierte Daten nie um.

### Erweiterte Filter kombinieren

Kombiniere Filter für Nutzer, Datum, Standort, Medien & Interaktion:

```json
{
  "twitterContent": "AI",
  "from": "elonmusk",
  "since": "2026-01-01_00:00:00_UTC",
  "until": "2026-03-01_00:00:00_UTC",
  "lang": "en",
  "filter:media": true,
  "min_faves": 1000,
  "maxItems": 500
}
```

Setze `queryType: "Latest + Top"`, um beide X-Suchmodi in einem Run zu nutzen.
Der Actor entfernt Duplikate vor der Abrechnung & füllt dein Limit aus beiden
Modi. `Top` sortiert nach Relevanz & liefert nicht jeden Treffer. Setze
`includeSearchTerms: true`, um jede passende Suchanfrage als Feld `searchTerm`
anzuhängen.

Setzt du `lang`, prüft der Actor die Sprache jedes gelieferten Posts. Er
überspringt abweichende Posts & liest weiter, bis er passende findet.

## Task-Beispiele

Wähle aus 50 öffentlichen Tasks. Jeder hat eine begrenzte Eingabe & eine
passende Dataset-Ansicht. Jeder Task startet mit einer echten Suche oder einem
echten Ziel. Passe ihn an, bevor du ihn startest.

- [Fetch fresh X posts for AI agents](https://apify.com/xquik/x-tweet-scraper/examples/search-x-posts-for-ai-agents)
- [Build an X dataset for RAG](https://apify.com/xquik/x-tweet-scraper/examples/build-x-rag-dataset)
- [Extract an X article for RAG](https://apify.com/xquik/x-tweet-scraper/examples/extract-x-article-for-rag)
- [Monitor AI search visibility on X](https://apify.com/xquik/x-tweet-scraper/examples/monitor-ai-search-visibility-on-x)
- [Track AI SEO and generative engine optimization](https://apify.com/xquik/x-tweet-scraper/examples/track-generative-engine-optimization-talk)
- [Discover AI agent tools on X](https://apify.com/xquik/x-tweet-scraper/examples/discover-ai-agent-tools-on-x)
- [Collect AI product feedback](https://apify.com/xquik/x-tweet-scraper/examples/collect-ai-product-feedback)
- [Monitor brand mentions on X](https://apify.com/xquik/x-tweet-scraper/examples/monitor-brand-mentions-on-x)
- [Export Twitter data to CSV](https://apify.com/xquik/x-tweet-scraper/examples/export-twitter-data-to-csv)
- [Collect replies to an OpenAI post](https://apify.com/xquik/x-tweet-scraper/examples/collect-replies-to-an-openai-post)
- [Extract a complete Twitter thread](https://apify.com/xquik/x-tweet-scraper/examples/extract-complete-twitter-thread)
- [Collect Spanish AI conversations](https://apify.com/xquik/x-tweet-scraper/examples/collect-spanish-ai-conversations)

## Was kostet es, Tweets zu scrapen?

X Tweet Scraper von Xquik kostet $0.00015 pro geliefertem Datensatz, auf jedem
Apify-Plan. Apify berechnet deine Plattformnutzung separat. Xquik berechnet 1
Gebühr pro geliefertem Datensatz. Diagnosen in der Ausgabe `diagnostics` sind
kostenlos.

- Du brauchst kein Xquik-Abonnement.
- Du zahlst keine separate Start- oder Suchgebühr. Auch URLs & einzelne
  Post-Abrufe kosten keine Extragebühr.
- Filter & Deduplizierung laufen vor der Abrechnung. Gefilterte oder doppelte
  Datensätze zahlst du nie.
- Runs ohne Eingabe, mit ungültiger Eingabe oder ohne Ausgabe schreiben 1
  Datensatz mit Handlungshinweis in die kostenlose Ausgabe `diagnostics`.

Ein Run mit einem Problem oder ein großer Run schreibt zusätzlich einen
`run-report`-Datensatz. Dessen `estimatedChargeUsd` nutzt den aktuellen
Pay-per-Event-Preis von Apify. Runs mit einem Problem schreiben immer
`run-report`, auch bei Abbrüchen ohne Eingabe oder mit ungültiger Eingabe. Ein
kleiner Run ohne Probleme überspringt ihn & spart Apify-Nutzung. Aktiviere
`alwaysSaveRunRecords`, um ihn bei jedem Run zu schreiben. Run-Reports trennen
Datensätze mit Daten in `realRows` von Diagnosen in `diagnosticRows`.

Wie du die Ausgaben eines Runs begrenzt, steht unter
[Run-Optionen](#run-optionen).

## Benchmark

X Tweet Scraper von Xquik schlug 11 andere Actors für Posts bei Kosten & Tempo.
Sein Median-Datensatz hatte 63 Felder, das 2-Fache des Medians der anderen.

| Actor                                                             | Nützliche Tweets | Kosten pro nützlichem Tweet | Nützliche Tweets pro Sekunde | Felder pro Zeile | Öffentlicher Run                                                     |
| ----------------------------------------------------------------- | ---------------: | --------------------------: | ---------------------------: | ---------------: | -------------------------------------------------------------------- |
| xquik/x-tweet-scraper                                             |              882 |                   $0.000177 |                         27.0 |               63 | [Run ansehen](https://console.apify.com/view/runs/JJfsKql7EdiXsSX3T) |
| xquik/x-tweet-scraper                                             |              868 |                   $0.000179 |                         27.4 |               63 | [Run ansehen](https://console.apify.com/view/runs/58ye04whvCP63nmmW) |
| xquik/x-tweet-scraper                                             |              869 |                   $0.000179 |                         25.8 |               63 | [Run ansehen](https://console.apify.com/view/runs/ytoTpYCca2MShp4gh) |
| xquik/x-tweet-scraper                                             |              879 |                   $0.000177 |                         29.1 |               63 | [Run ansehen](https://console.apify.com/view/runs/CrJLYvAIG0Ji666rr) |
| scrapesmith/twitter-x-scraper-tweets-profiles-replies             |              813 |                   $0.000185 |                         10.5 |               36 | [Run ansehen](https://console.apify.com/view/runs/mIT1zf0xccCsYWO1E) |
| scrapesmith/twitter-x-scraper-tweets-profiles-replies             |              805 |                   $0.000187 |                         10.6 |               36 | [Run ansehen](https://console.apify.com/view/runs/p1MUeElsamZUepTpm) |
| scrapesmith/twitter-x-scraper-tweets-profiles-replies             |              805 |                   $0.000187 |                         10.7 |               36 | [Run ansehen](https://console.apify.com/view/runs/pQlQa0GMm7BWTUUOB) |
| kaitoeasyapi/twitter-x-data-tweet-scraper-pay-per-result-cheapest |              880 |                   $0.000250 |                          9.1 |               46 | [Run ansehen](https://console.apify.com/view/runs/3Fn8yvqncsWdcw1I2) |
| scraper_one/x-posts-search                                        |              804 |                   $0.000314 |                          3.3 |               14 | [Run ansehen](https://console.apify.com/view/runs/M9TgeCLLKZlNTOrj0) |
| danek/twitter-scraper                                             |              807 |                   $0.000347 |                          5.0 |               27 | [Run ansehen](https://console.apify.com/view/runs/kyeJqCeaARxQPGM5W) |
| tweetapi/twitter-x-search-scraper                                 |              337 |                   $0.000374 |                          2.6 |               28 | [Run ansehen](https://console.apify.com/view/runs/mxkP8EDAUVtCZdobb) |
| api-ninja/x-twitter-advanced-search                               |              837 |                   $0.000430 |                          7.4 |               28 | [Run ansehen](https://console.apify.com/view/runs/XAWKinvZyPNjCwrib) |
| apidojo/twitter-scraper-lite                                      |              251 |                   $0.000494 |                         12.9 |               54 | [Run ansehen](https://console.apify.com/view/runs/1t4XwmbQNTtwMJ0Ta) |
| apidojo/tweet-scraper                                             |              481 |                   $0.000832 |                          7.8 |               55 | [Run ansehen](https://console.apify.com/view/runs/PydoBgS1YRblg29bB) |
| xtdata/twitter-x-scraper                                          |            1.378 |                   $0.001168 |                         11.9 |               67 | [Run ansehen](https://console.apify.com/view/runs/U91dRXEvKvqu41aop) |
| seemuapps/x-tweet-scraper                                         |              805 |                   $0.001242 |                          6.9 |               24 | [Run ansehen](https://console.apify.com/view/runs/FstursEw43TbcipYU) |
| maximedupre/twitter-scraper                                       |               46 |                   $0.002846 |                          0.3 |               31 | [Run ansehen](https://console.apify.com/view/runs/Hs8irhEcAfWcQNc4w) |

Jeder Actor lief am 2026-09-27 mit derselben Suche & denselben Filtern. Alle
Runs liefen auf der Stufe Bronze. Ein nützlicher Tweet ist ein eindeutiger
englischer Originalpost mit 10+ Likes. Kosten sind die Gesamtausgaben des Kunden
pro nützlichem Tweet. Unsere enthalten die Apify-Nutzung, die unsere Kunden
zahlen. Felder pro Zeile ist der Median der nicht leeren Felder, verschachtelte
inklusive. Eine Liste zählt als 1 Feld. Öffne einen Run für Eingabe,
Run-Protokoll & Dataset.

## Leere, unvollständige & gestoppte Runs

X Tweet Scraper von Xquik erklärt leere, unvollständige & gestoppte Runs
kostenlos. Der Run-Status nennt den Grund für den Stopp. Er zählt auch
berechnete Ergebnisse & gelesene Ziele.

### Leere Ergebnisse

Prüfe ein leeres Ergebnis, bevor du für einen weiteren Run zahlst. Das Objekt
`filtering` in Berichten & finalen Diagnosen zählt die Datensätze, die deine
Filter entfernt haben. Lies `serverFilteredRows`, `actorFilteredRows` &
`pagesWithUnknownServerFiltering`. Für gefilterte Datensätze zahlst du nie
Ergebnisgebühren.

Ein Run kann unter deinem Limit enden, wenn X keine Ergebnisse mehr hat. Er
meldet dann `outcome: "complete"` mit `completionReason: "source_exhausted"`.
Unterbrochene Runs behalten ihr Teilergebnis & ihre Hinweise zur Wiederholung.

### Unvollständige Runs

`failedSubtargets` zählt Suchanfragen & Profilziele, die nach einem Fehler
abgebrochen sind. Gelieferte Datensätze bleiben im Dataset & zählen zur
Abrechnung. Ein Fehler bedeutet nie, dass das Ziel fehlt. Diese Runs nutzen
`completionReason: "partial_failure"`.

Ein unterbrochener Run schreibt außerdem eine kostenlose `partial`-Diagnose.
Bereits gelieferte Ergebnisse bleiben erhalten. Die Diagnose meldet
`availableResults`, `failedTargets`, `retryable` & `nextAction`. Ein
erfolgreicher Actor-Abschluss bestätigt die Lieferung. Er bestätigt keine
vollständige Extraktion.

### Stoppursachen

Der Statustext nennt jede Ursache für den Stopp. Ein Run mit einem fehlenden
Account & einer stockenden Suche nennt beide. `stopCauses` listet jede Ursache
mit eigenen Feldern `message`, `retryable` & `nextAction`. Die Ursachen sind
`target_not_found`, `target_protected`, `search_unavailable`, `likes_hidden`,
`target_failed`, `pagination_safety_limit`, `reply_reach` & `deadline_reached`.
Der Run ist `retryable`, wenn mindestens 1 Ursache es ist.

### Fehlende & nicht verfügbare Ziele

Ein fehlendes oder geschütztes Ziel ist kein Fehler. Dort gibt es nichts zu
lesen. Der Run liest jedes andere Ziel bis zum Ende. Er meldet
`outcome: "complete"`. Sein Abschlussgrund stammt von den gelesenen Zielen, etwa
`source_exhausted`. `failedSubtargets` lässt diese Ziele weg. Der Statustext &
eine kostenlose `complete`-Diagnose zählen sie. Ein Run ohne andere Datensätze
schreibt stattdessen eine `zero-output`-Diagnose.

Eine Suche, die X nicht ausführen kann, zählt als Fehler. X.com meldet dann
"Etwas ist schiefgelaufen". Der Run stoppt diese Suche sofort ohne Wiederholung.
Gefällt-mir-Angaben, die X verbirgt, zählen ebenfalls als Fehler & stoppen
sofort. X zeigt nur dem Autor, wer seinen Post mit Gefällt mir markiert hat. Die
mit Gefällt mir markierten Posts eines Accounts sieht nur dieser Account.

Betreffen alle Fehler nicht verfügbare Ziele, setzen die Diagnosen
`retryable: false`. Prüfe Ziel-URLs oder Nutzernamen & wähle verfügbare
öffentliche Accounts. Grenze eine Suche, die X nicht ausführen kann, ein oder
ändere ihre Filter. Lies statt verborgener Gefällt-mir-Angaben lieber Reposter,
Antworten oder Posts. Andere Fehler behalten Hinweise zur Wiederholung für
nicht abgeschlossene Ziele.

Die Diagnose nennt diese Ziele in `unavailableTargets`. Jeder Eintrag hat das
`target` so, wie du es eingegeben hast, einen `reason` & eine `nextAction`. Der
Grund ist `not_found`, `protected`, `search_unavailable` oder `likes_hidden`.
Ein Sucheintrag kann auch einen `fix` haben, etwa den Operator, den du entfernen
sollst. Die Liste fasst bis zu 100 Einträge. Entferne diese Ziele aus deiner
Eingabe.

### Sicherheits- & Zeitlimits

`completionReason: "pagination_safety_limit"` ist kein Lesefehler. Der Run hat
seine gültigen Datensätze behalten. Danach hat er ein Ziel beendet, das keine
neuen Ergebnisse mehr lieferte. Der Run meldet eine unvollständige Extraktion.
`failedSubtargets` bleibt `0`. Du zahlst nur für gelieferte Datensätze.

Das Standard-Timeout von Apify ist `0`, Runs haben also kein Zeitlimit. Der
Actor läuft weiter, bis er dein Limit erreicht oder keine passenden Daten mehr
findet. Du kannst trotzdem ein festes Apify-Timeout setzen. Dann bedeutet
`completionReason: "deadline_reached"`, dass dieses Limit nahe ist. Der Actor
speichert Datensätze & Bericht. Dann beendet er sich sauber vor dem Limit. Du
zahlst jeden gelieferten Datensatz einmal.

## Eingabe

Der Tab Input listet alle Optionen. Gib mindestens eines dieser Felder an:
`startUrls`, `twitterHandles`, `listIds`, `tweetIds`, `searchTerms` oder
`twitterContent`. Ihre dokumentierten Aliasse funktionieren auch. Alle anderen
Felder sind optional.

Beispiele:

- Füge eine Post-URL unter Start URLs ein.
- Füge eine Profil-URL ein oder trage den Nutzernamen unter X handles ein.
- Nutze `from:user since:YYYY-MM-DD until:YYYY-MM-DD` als Suchbegriff, um ältere
  Posts eines Accounts zu holen.
- Füge eine Listen-URL unter Start URLs ein.
- Kombiniere `twitterContent` mit Filtern wie `from:`, `since:`, `min_faves:` &
  `filter:media` für erweiterte Suchen.

### Die wichtigsten Suchoperatoren

| Operator               | Beispiel               | Zweck                             |
| ---------------------- | ---------------------- | --------------------------------- |
| `from:`                | `from:elonmusk`        | Nur Posts dieses Nutzers          |
| `to:`                  | `to:OpenAI`            | Nur Antworten an diesen Nutzer    |
| `@`                    | `@nasa`                | Posts, die diesen Nutzer erwähnen |
| `list:`                | `list:123456`          | Posts von Listenmitgliedern       |
| `lang:`                | `lang:en`              | Filter nach Sprache               |
| `since:` / `until:`    | `since:2026-01-01`     | Datumsbereich                     |
| `min_faves:`           | `min_faves:100`        | Schwelle für Interaktionen        |
| `min_retweets:`        | `min_retweets:50`      | Schwelle für Reposts              |
| `filter:media`         | `filter:media`         | X-Suchoperator für Medien         |
| `filter:videos`        | `filter:videos`        | X-Suchoperator für Videos         |
| `filter:images`        | `filter:images`        | X-Suchoperator für Bilder         |
| `filter:links`         | `filter:links`         | Nur Posts mit Links               |
| `filter:replies`       | `filter:replies`       | Nur Antworten                     |
| `filter:quote`         | `filter:quote`         | Nur Zitate                        |
| `filter:blue_verified` | `filter:blue_verified` | Nur Premium-Nutzer                |

X sucht nicht mehr mit `filter:vine`, `filter:consumer_video`,
`filter:pro_video`, `filter:news` oder `retweets_of:`. Eine Suche mit einem
davon endet sofort. Eine kostenlose Diagnose nennt die Lösung. Jede Suchanfrage
darf höchstens 512 Zeichen lang sein. Längere Anfragen durchsucht X nicht.

Datumsfenster schließen die untere Grenze ein & die obere aus. Der Actor prüft
beide Grenzen, bevor er einen Post hinzufügt oder abrechnet.

Die vollständige Operatorliste findest du unter
[Twitter Advanced Search](https://github.com/igorbrigadir/twitter-advanced-search).

### Von einem anderen Tweet-Actor wechseln

Füge die Eingabe ein, die du schon nutzt. X Tweet Scraper von Xquik liest die
Feldnamen, die andere Actors dieser Art nutzen. Er ordnet sie seinen eigenen
Feldern zu. Kanonische Namen bleiben der dokumentierte Standard. Ein Alias
verwirft nie ein Feld & ändert nie, was du zahlst. Das Eingabeformular listet
nur kanonische Felder, damit es kurz bleibt. Aliasse funktionieren in JSON, API,
SDK, Automatisierungen & gespeicherten Task-Eingaben.

| Feld, das du schon nutzt                                                                                                                                               | Xquik liest es als                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `startUrls`, `urls`, `tweetUrls`, `postUrls`, `profileUrls`, `accountUrls`                                                                                             | `startUrls`                                                              |
| `profileUrl` als einzelner String                                                                                                                                      | `startUrls`                                                              |
| `tweetIds`, `tweetIDs`, `tweets`, `postIds`, `lookupPostIds`, `tweet_ids` oder `tweetId` als einzelner String                                                          | `tweetIds`                                                               |
| `twitterHandles`, `usernames`, `user_names`, `userNameList`, `handles`, `screenNames`, `profileTweets`                                                                 | `twitterHandles`                                                         |
| `username`, `handle`, `screenName` als einzelner String                                                                                                                | `twitterHandles`                                                         |
| `searchTerms`, `searchQueries`, `queries`, `search` als Liste oder 1 Suche pro Zeile                                                                                   | `searchTerms`                                                            |
| `twitterContent`, `query`, `searchQuery`                                                                                                                               | `twitterContent`                                                         |
| `maxItems`, `maxResults`, `max_results`, `resultsLimit`, `count`, `resultsCount`, `numberOfTweets`, `maxPosts`, `max_posts`, `max_items`, `maxTweets`, `tweetsDesired` | `maxItems`                                                               |
| `sort`                                                                                                                                                                 | `queryType`                                                              |
| `tweetLanguage`, `language`                                                                                                                                            | `lang`                                                                   |
| `author`, `inReplyTo`, `mentioning`                                                                                                                                    | `from`, `to`, `@`                                                        |
| `start`, `startDate`, `end`, `endDate`                                                                                                                                 | `since`, `until`                                                         |
| `minimumRetweets`, `minimumFavorites`, `minimumReplies`                                                                                                                | `min_retweets`, `min_faves`, `min_replies`                               |
| `onlyImage`, `onlyVideo`, `onlyQuote`, `onlyTwitterBlue`                                                                                                               | `filter:images`, `filter:videos`, `filter:quote`, `filter:blue_verified` |
| `geotaggedNear`, `withinRadius`                                                                                                                                        | `near`, `within`                                                         |
| `quickDateRange` aus dem Google Search Scraper, etwa `d7`, `w2`, `m1` oder `y`                                                                                         | `since_time`, ab dem Run-Start zurückgerechnet                           |

So verhält sich eine eingefügte Eingabe:

- Jede Quelle läuft. Eine Eingabe mit URLs, Nutzernamen, Suchbegriffen,
  Listen-IDs & Post-IDs führt alle aus. `maxItems` gilt für den gesamten Run.
- Eine Suchanfrage neben `searchTerms` läuft als 1 weiterer Begriff.
- Eine Profil-URL der Form `x.com/@name` liest der Actor wie `x.com/name`.
- Setzt du einen Alias & sein kanonisches Feld, gewinnt der kanonische Wert.
  Das Run-Log nennt den Alias, der verloren hat.
- Das Run-Log nennt jedes Feld, das der Actor ignoriert, etwa
  `customMapFunction`. Der Actor verwirft nie still ein Feld.
- Eine Obergrenze für Datensätze muss eine ganze Zahl ab 1 sein.
  `maxResults: 0` stoppt den Run, bevor er etwas liest oder berechnet.
- `quickDateRange: "m1"` liest auf jeder Route den letzten Monat. Monate & Jahre
  zählen im Kalender zurück. Fehlt h, d, w, m oder y, stoppt der Run, bevor er
  etwas liest oder berechnet.
- Der Actor hat keine Seiteneinheit. Ersetze `maxPages` durch `maxItems`.
- Der Actor hat kein Feld für Nutzer-IDs. Sende Nutzernamen oder Profil-URLs
  statt `userId` oder `user_ids`.
- Suchoperator-Felder wie `from`, `min_faves`, `since_time` & `filter:images`
  nutzen schon die Namen von X. Sie brauchen keine Zuordnung.

### Eingabe in Console & API

Das Console-Formular hat diese Steuerelemente:

- Mode, Output Variant, Field Style, Output Preset & Sort By sind validierte
  Auswahllisten.
- Start URLs & Profile URLs akzeptieren Strings oder `{ "url": "..." }`-Objekte.
  Ihre JSON-Editoren unterstützen beide API-Formate.
- Strukturierte Filter bieten gruppierte Steuerelemente, du brauchst also kein
  verschachteltes JSON.
- Das Formular blendet flache Operatoren aus, die eine Filtergruppe schon
  abdeckt. JSON, API, SDK, Automatisierungen & gespeicherte Task-Eingaben
  akzeptieren sie weiterhin.
- Max Items & Max Items Per Target akzeptieren ganze Zahlen ab 1.
  Interaktionsschwellen akzeptieren ganze Zahlen ab 0.

Nutze kanonische Felder in neuen Integrationen. Die Aliasse aus der
Migrationstabelle oben bleiben verfügbar. `includeRaw` ist ein Alias für
`outputVariant: "raw"`. Ältere `outputVariant`-Werte wie `compact` & `full`
funktionieren weiter als Legacy-Ausgabe. Das Formular kennzeichnet sie als
Legacy-Aliasse.

## Ausgabe

Jeder Post-Datensatz ist ein JSON-Objekt mit den Metadaten, die X bereitstellt.
Die Schemas für Dataset & Run-Report geben jedem Feld einen Titel, eine
Beschreibung & ein Beispiel. KI-Agents können sie lesen, ohne die Bedeutung
eines Felds zu raten.

Die Beispielwerte dienen nur zur Veranschaulichung. Deine Runs liefern
Live-Daten von X.

```json
{
  "id": "1846987139428634858",
  "text": "The future of AI is...",
  "createdAt": "Sun Mar 15 12:00:00 +0000 2026",
  "retweetCount": 500,
  "replyCount": 120,
  "likeCount": 5000,
  "quoteCount": 80,
  "viewCount": 1200000,
  "bookmarkCount": 300,
  "lang": "en",
  "url": "https://x.com/elonmusk/status/1846987139428634858",
  "author": {
    "id": "44196397",
    "username": "elonmusk",
    "name": "Elon Musk",
    "followers": 180000000,
    "verified": true
  },
  "media": [{ "type": "photo", "url": "https://..." }],
  "entities": {
    "hashtags": [{ "text": "AI" }],
    "urls": [],
    "user_mentions": []
  },
  "isNoteTweet": false,
  "isQuoteStatus": false,
  "isReply": false,
  "conversationId": "1846987139428634858"
}
```

Exportiere das Dataset als JSON, CSV, Excel oder HTML.

## Run-Optionen

- Setze in Apify die maximale Gesamtgebühr, um die Run-Kosten zu begrenzen.
  Lass `maxItems` leer, um so viele Datensätze zu erhalten, wie das Budget
  erlaubt. Setze `maxItems`, wenn du weniger Posts willst.
- Setze `maxTotalChargeUsd` in der Apify-API oder Max cost per run in der
  Console. Apify gibt dieses Limit als `ACTOR_MAX_TOTAL_CHARGE_USD` an den Actor
  weiter. Der Actor rechnet es in die maximale Zahl abrechenbarer Datensätze um.
- Übergib `tweetIds`, um viele Posts auf einmal abzurufen. Füge eine Profil-URL
  ein, um die Posts eines Accounts zu lesen.
- Setze bei vielen Suchanfragen `includeSearchTerms: true`, um jedes Ergebnis
  mit seinem Suchbegriff zu kennzeichnen.
- Setze `queryType: "Latest + Top"`, um beide X-Suchmodi in einem Run zu nutzen.
  Deduplizierung & Ergebnislimits gelten für beide gemeinsam.
- Nutze Account- oder Stichwort-Monitore von Xquik für Prüfungen im
  Sekundentakt & signierte Webhooks. Aktive Monitore prüfen jede Sekunde.

### Immer den neuesten Build verwenden

Wähle `latest` für jeden Run, um jeden veröffentlichten Fix zu erhalten.

Wählst du keinen Build, startet Apify X Tweet Scraper von Xquik mit dem Standard
`latest`. Console-Runs & Standard-API-Beispiele übernehmen diesen Standard.

Gespeicherte Tasks können den Actor-Standard überschreiben. Zeitpläne &
Task-Integrationen übernehmen diese Wahl. Setze jede Überschreibung auf
`latest`.

Apify leitet exakte Build-Nummern nicht auf `latest` um. Ersetze fixierte
Nummern durch `latest`. Nutze einen exakten Build nur für einen vorübergehenden
Rollback oder um einen Run zu reproduzieren.

Mehr dazu steht in der Apify-Dokumentation zu
[Build-Tags](https://docs.apify.com/platform/actors/development/builds-and-runs/builds),
[Run-Optionen](https://docs.apify.com/platform/actors/running/runs-and-builds) &
[Tasks](https://docs.apify.com/platform/actors/running/tasks).

## Verwandte Xquik-Actors

Jeder Xquik-Actor nutzt dieselbe Extraktions-Engine, rechnet erst nach dem
Filtern ab & liefert dieselben Diagnosen. Wähle den, der zu deinen Daten passt.

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

## Brauchst du mehr als Scraping?

Xquik bietet außerdem 47 Dashboard-Tools, 129 REST-Operationen, signierte
Webhooks & einen MCP-Server.

- [API-Dokumentation](https://docs.xquik.com/introduction): Anleitungen zur
  REST-API
- [Search Tweets API](https://docs.xquik.com/api-reference/x/search-tweets):
  sucht Posts per REST
- [Batch Tweets API](https://docs.xquik.com/api-reference/x/batch-tweets): ruft
  bis zu 100 Posts per ID ab
- [User Tweets API](https://docs.xquik.com/api-reference/x/user-tweets): ruft
  die Timeline eines Nutzers ab
- [MCP-Server](https://docs.xquik.com/mcp/overview): zeigt die unterstützten
  Tools
- [Webhooks](https://docs.xquik.com/webhooks/overview): signierte Zustellung von
  Ereignissen
- [GitHub](https://github.com/Xquik-dev/x-twitter-scraper): Quellcode &
  Issue-Tracker

## FAQ

### Brauche ich einen X-API-Schlüssel?

Nein. Du brauchst keinen X-API-Schlüssel, keinen Login & keine Zugangsdaten.

### Was begrenzt einen Run?

Dein Ergebnislimit & dein Apify-Ausgabenlimit stoppen den Run. Die Limits deines
Apify-Accounts & der Plattform gelten weiterhin.

### Wie schnell ist der Actor?

X Tweet Scraper von Xquik lieferte im [Benchmark](#benchmark) 25,8 bis 29,1
nützliche Posts pro Sekunde. Die Laufzeit hängt von deiner Eingabe, der
Ergebniszahl & der Verfügbarkeit von X ab.

### Warum zeigt eine Latest-Suche Posts, die im Tab Neueste auf X fehlen?

X lässt einige passende Posts aus dem Tab Neueste weg. X Tweet Scraper von
Xquik liefert auch diese Posts. Jeder Post ist ein echtes X-Suchergebnis für
deine Suchanfrage. Du zahlst jeden Post nur einmal.

### Welche Suchoperatoren funktionieren?

Die erweiterte Suche von X unterstützt Autoren, Empfänger, Erwähnungen, Daten,
Interaktion, Medien & Standort. Beispiele findest du unter
[Die wichtigsten Suchoperatoren](#die-wichtigsten-suchoperatoren).

### Kann ich den Actor über die Apify-API starten?

Ja. Im [API-Tab](https://apify.com/xquik/x-tweet-scraper/api) findest du
Beispiele für Python, JavaScript & cURL.

### Kann ich wiederkehrende Scrapes planen?

Ja. Nutze die integrierte
[Zeitplanung](https://docs.apify.com/platform/schedules) von Apify, um
X Tweet Scraper von Xquik per Cron zu starten.

### Kann ich eine individuelle Lösung bekommen?

Ja. Besuche [xquik.com](https://xquik.com) oder lies die
[API-Dokumentation](https://docs.xquik.com/introduction) zu Dashboard, API,
MCP-Server & Webhooks.

### Ist es legal, X-Daten zu scrapen?

X Tweet Scraper von Xquik fragt öffentliche X-Felder ab. Ergebnisse können
personenbezogene Daten enthalten. Prüfe, ob dein Zweck rechtmäßig ist. Befolge
die Datenschutzregeln, die für dich gelten. Hol dir bei Unsicherheit
qualifizierten Rechtsrat.

### Wo bekomme ich Hilfe?

Öffne ein Issue im Tab Issues auf der Actor-Seite oder auf
[GitHub](https://github.com/Xquik-dev/x-twitter-scraper/issues). Du kannst auch
support@xquik.com mit der Run-ID kontaktieren.
