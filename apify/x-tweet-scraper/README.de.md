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
den umfassendsten X-Daten. X Tweet Scraper sammelt Tweets, Antworten,
Profile, Listen & Suchen mit über 50 Filtern. Jeder andere Apify Actor
berechnet, bevor gefiltert oder dedupliziert wird. Xquik berechnet nur für
gelieferte, eindeutige, filterkonforme Ergebnisse.

Scrape öffentliche X-(Twitter-)Tweets für **ab $0.00015 pro geliefertem
Ergebnis auf jedem Apify-Plan**. Apify berechnet deine Plattformnutzung
separat. Kein X-Login, keine Start- oder Suchgebühr. Entwickelt von
[Xquik](https://xquik.com).

> Xquik ist ein unabhängiger Drittanbieter-Dienst. Nicht verbunden mit X
> Corp. „Twitter" und „X" sind Marken von X Corp.

## Was macht X Tweet Scraper?

X Tweet Scraper liefert Tweets, Interaktionskennzahlen, öffentliche
Autorenprofile und Medien. Er akzeptiert URLs, Handles, Listen-IDs,
Tweet-IDs und Suchanfragen mit über 50 Filtern.

### Kernverhalten

- Filter und Duplikatentfernung laufen vor der Abrechnung.
- Eine Eingabe unterstützt Lookups, Timelines, Listen, Suche und
  Interaktionsmodi.
- Tweet-ID-Eingaben haben keine feste Anzahlobergrenze. Apify-Ausgaben- und
  Zeitlimit-Einstellungen gelten.
- Automatische Such- und Zitatseiten fordern bis zu 300 Datensätze an.
- Gespeicherte Cursor behalten ihre ursprünglichen Seitenlimits und starten
  bei Ablauf neu.
- Profilmodi kombinieren Timeline und Autorensuche, wenn beides zutrifft.
- Seitenprotokolle enthalten `fetchDurationMs`, `processingDurationMs`,
  `pushDurationMs`, `statusDurationMs` und `fullPageDurationMs`, ohne Ziele
  zu wiederholen.
- Checkpoints erhalten akzeptierte Datensätze, Timing und Fehleranzahlen
  nach Neustarts.

### Immer den aktuellsten Build verwenden

Wähle `latest` für jeden Run, um alle veröffentlichten Fixes zu erhalten.

Wenn du keinen Build angibst, nutzt Apify den `latest`-Standard dieses
Actors. Console-Runs und Standard-API-Beispiele übernehmen diesen
Standard.

Gespeicherte Tasks können den Actor-Standard überschreiben. Zeitpläne und
Task-Integrationen übernehmen diese Wahl. Halte jede Überschreibung auf
`latest`.

Apify leitet fixierte Build-Nummern nicht automatisch auf `latest` um.
Ersetze fixierte Nummern durch `latest`. Nutze einen exakten Build nur für
vorübergehende Rollbacks oder Reproduzierbarkeit.

Lies Apifys
[Build-Tags](https://docs.apify.com/platform/actors/development/builds-and-runs/builds),
[Run-Optionen](https://docs.apify.com/platform/actors/running/runs-and-builds)
und [Task-Dokumentation](https://docs.apify.com/platform/actors/running/tasks).

## Task-Beispiele

Wähle aus 50 öffentlichen Tasks. Jeder hat eine begrenzte Eingabe und eine
passende Dataset-Ansicht. Jeder Task startet mit einer echten Suche oder
einem echten Ziel. Bearbeite ihn vor dem Ausführen.

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

### Welche Daten kann X Tweet Scraper extrahieren?

| Feld                     | Beschreibung                                                    |
| ------------------------- | ------------------------------------------------------------------ |
| `id`                      | Tweet-ID                                                            |
| `text`                    | Vollständiger Tweet-Text (inklusive Note Tweets bis zu 25.000 Zeichen) |
| `createdAt`               | X-nativer Zeitstempel-String                                        |
| `likeCount`                | Anzahl der Likes                                                    |
| `retweetCount`            | Anzahl der Retweets                                                 |
| `replyCount`              | Anzahl der Antworten                                                |
| `quoteCount`              | Anzahl der Zitat-Tweets                                             |
| `viewCount`               | Anzahl der Aufrufe                                                  |
| `bookmarkCount`           | Anzahl der Lesezeichen                                              |
| `lang`                    | Tweet-Sprache                                                       |
| `url`                     | Direkter Link zum Tweet                                             |
| `tweetUrl`                | Alias für die Tweet-URL in der flachen Ausgabe                      |
| `twitterUrl`               | Im twitter.com-Format formatierte URL in der flachen Ausgabe        |
| `author`                  | Verfügbare Autorenfelder (Nutzername, Bio, Website, Zähler)         |
| `authorUsername`           | Autoren-Handle in der flachen Ausgabe                               |
| `authorFollowers`          | Follower-Anzahl des Autors in der flachen Ausgabe                   |
| `authorUrl`                | Website des Autors in der flachen Ausgabe, sofern verfügbar         |
| `authorDescription`        | Bio-Text des Autors in der flachen Ausgabe                          |
| `authorCoverPicture`       | Banner-Bild-URL des Autors in der flachen Ausgabe                   |
| `authorPinnedTweetIds`     | Angeheftete Tweet-IDs des Autors in der flachen Ausgabe             |
| `media`                   | Angehängte Bilder, Videos, GIFs                                     |
| `mediaUrls`                | Medien-URLs in der flachen Ausgabe                                  |
| `imageUrls`                | Bild-URLs in der flachen Ausgabe                                    |
| `videoUrls`                | Video-URLs in der flachen Ausgabe                                   |
| `entities`                | Hashtags, URLs, Erwähnungen und Video-Zeitmarken                    |
| `displayTextRange`         | X-Anzeigetextbereich, sofern verfügbar                              |
| `contentDisclosure`        | Offenlegungsmetadaten, sofern verfügbar                             |
| `conversationControl`      | Antwortrichtlinie und öffentlicher Konversationsinhaber             |
| `reactionContext`          | Öffentlicher Beitrag und Nutzer, auf den eine Reaktion verweist     |
| `limitedActions`           | Öffentliche Interaktionseinschränkungen und Hinweise                |
| `isLimitedReply`           | Ob Antworten eingeschränkt sind                                     |
| `isNoteTweet`              | Ob es sich um einen Note Tweet (Langform-Beitrag) handelt           |
| `isQuoteStatus`            | Ob dieser Tweet einen anderen Tweet zitiert                         |
| `isRetweet`                | Ob dieser Datensatz ein Retweet ist, Original angehängt             |
| `isPinned`                 | Ob der Autor diesen Beitrag angeheftet hat, flache Zeilen           |
| `isReply`                  | Ob dieser Tweet eine Antwort ist                                    |
| `quoted_tweet`             | Zitiertes Tweet-Objekt (bei Zitat-Tweet)                            |
| `conversationId`           | Thread-/Konversations-ID                                            |
| `resultType`               | Datensatztyp für vollständige Datensätze, Interaktionsdatensätze und Diagnosen |
| `sourceTweetId`            | Quell-Tweet-ID für Artikel- und Interaktionsmodi                    |
| `article`                  | Strukturierte Artikeldaten in `mode: "article"`                     |

Optionale Tweet-Metadaten können `authorUnavailable`, `card`, `communityId`,
`communityNote`, `edit`, `exclusiveContent`, `noteTweet` und `postCta`
umfassen. `isTranslatable`, `place`, `possiblySensitive` und `viewState`
erhalten weiteren öffentlichen Kontext.
`previousCounts` erhält Interaktionswerte vor einer Bearbeitung.
`tombstone` erhält Hinweise. `unmentionedUserIds` listet Nutzer, die die
Konversation verlassen haben. Siehe OpenAPI für die genauen Felder.

Verschachtelte Autoren folgen dem öffentlichen Profilvertrag. Dieser deckt
Identität, Zähler, Verifizierung, Verfügbarkeit, professionelle Daten und
Profilbiografien ab.

Retweet-Datensätze setzen `isRetweet` auf `true`. Ihr `text` enthält den
vollständigen Originalbeitrag, und `retweeted_tweet` enthält den
Originalbeitrag mit Autor & Zählern.

Tweet-Datensätze erhalten außerdem `type`, `source`, `inReplyToId`,
`inReplyToUserId`, `inReplyToUsername` und `retweeted_tweet`. Zitierte und
repostete Tweets erhalten rekursiv dieselben unterstützten, sicheren
Felder.

Medien enthalten Verfügbarkeit, Geometrie, Tags, Video-Varianten,
`watchNowUrl` und `visitSiteUrl`-Aktionen.

Betrachterbezogener Status gehört zum Abrufkonto von Xquik, nicht zu
deinem Dataset. Follow-, Block-, Mute-, Lesezeichen-, Like-, Repost-,
Bearbeitungsberechtigungs- und ähnliche Betrachter-Flags werden immer
entfernt, auch aus der Rohausgabe.

## Was kostet es, Tweets zu scrapen?

Auf jedem Apify-Plan kostet es `$0.00015` pro geliefertem Datensatz. Apify
berechnet deine Plattformnutzung separat. Xquik berechnet eine Gebühr pro
geliefertem Datensatz. Diagnosen in der Ausgabe `diagnostics` sind
kostenlos.

Es gilt kein Xquik-Abonnement. Es gilt keine separate Start- oder
Suchgebühr. Jeder Run schreibt außerdem einen `run-report`-Datensatz mit
`estimatedChargeUsd`, berechnet aus dem Live-Pay-per-Event-Preis, den
Apify dem Actor offenlegt. Jedes Ergebnis schreibt `run-report`, auch
Abbrüche ohne Eingabe und mit ungültiger Eingabe. Run-Reports trennen
Datendatensätze in `realRows` und Diagnosen in `diagnosticRows`.

Verstehe leere Ergebnisse, bevor du für einen weiteren Run zahlst. Das
Objekt `filtering` trennt `serverFilteredRows` von `actorFilteredRows` in
Reports & finalen Diagnosen. Diese zählen abgelehnte Datensätze über
verarbeitete Seiten hinweg, einschließlich wiederholter Quelldatensätze.
`pagesWithUnknownServerFiltering` identifiziert Seiten ohne gültige
Server-Zählungen. Fehlende Zählungen bleiben Lücken. Gefilterte
Datensätze verursachen nie Ergebnisgebühren.

Quellerschöpfung kann die Extraktion unterhalb deiner angeforderten
Obergrenze abschließen. Diese Runs melden `outcome: "complete"` mit
`completionReason: "source_exhausted"`. Unterbrochene Runs behalten ihr
Teilergebnis & ihre Wiederholungsempfehlung.

`failedSubtargets` zählt Suchanfragen und Profilziele, die durch
Lesefehler gestoppt wurden. Paginierungs- und Zahlungsfehler erhalten
Teilergebnisse und unvollständige Cursor. Sie bedeuten nie, dass das Ziel
fehlt. Akzeptierte Datensätze bleiben Datendatensätze und zählen zur
Abrechnung. Diese Runs nutzen `completionReason: "partial_failure"`.
Schnelle serverseitige Paginierung folgt demselben Berichtsvertrag.

Eine unterbrochene Extraktion schreibt außerdem eine kostenlose
`partial`-Diagnose. Verfügbare Ergebnisse bleiben erhalten. Die Diagnose
meldet `availableResults`, `failedTargets`, `retryable` und `nextAction`.
Ein erfolgreicher Actor-Abschluss bestätigt die Lieferung, nicht die
vollständige Extraktion.

Der Statustext nennt jede Ursache für den Stopp. Ein Run mit einem fehlenden
Account & einer stockenden Suche nennt beide. `stopCauses` listet jede Ursache
mit eigenen Feldern `message`, `retryable` & `nextAction`. Die Ursachen sind
`target_not_found`, `target_protected`, `search_unavailable`, `likes_hidden`,
`target_failed`, `pagination_safety_limit`, `reply_reach` & `deadline_reached`.
Der Run ist `retryable`, wenn mindestens 1 Ursache es ist.

Geschützte oder fehlende Ziele zählen als Fehler, auch bei Runs mit gültigen
Ergebnissen. Das gilt auch für eine Suche, die X nicht ausführen kann. X.com
zeigt für eine solche Suche „Something went wrong". Der Run stoppt sie sofort
ohne Wiederholungen. Das gilt auch für Likes, die X verbirgt. X zeigt nur dem
Autor, wer einen Beitrag gelikt hat. Die gelikten Beiträge eines Accounts zeigt
X nur diesem Account. Wenn alle Fehler nicht verfügbare Ziele betreffen, setzen
Diagnosen `retryable: false`. Prüfe Ziel-URLs oder Nutzernamen & wähle
verfügbare öffentliche Accounts. Grenze eine Suche, die X nicht ausführen kann,
weiter ein oder ändere ihre Filter. Rufe statt verborgener Likes Retweeter,
Antworten oder Beiträge ab. Andere Fehler behalten die Wiederholungsempfehlung
für unvollständige Ziele.

Die Diagnose nennt diese Ziele in `unavailableTargets`. Jeder Eintrag hat das
`target`, so wie du es eingegeben hast, & einen `reason`: `not_found`,
`protected`, `search_unavailable` oder `likes_hidden`. Die Liste fasst bis zu
100 Einträge. Entferne sie aus der Eingabe, um einen vollständigen Run zu
erhalten.

`completionReason: "pagination_safety_limit"` ist kein Lesefehler. Es bedeutet,
dass die Paginierung gültige Datensätze behalten hat und dann ihr begrenztes
Sicherheitslimit erreicht hat. Latest-Suchen laufen durch leere Seiten weiter,
solange gültige Wiederherstellungs-Cursor vorhanden sind. Top-Suchen &
Konto-Fenster-Wiederherstellung können nach 10 aufeinanderfolgenden leeren
Seiten einen Checkpoint setzen. Meldet der Dienst eine stockende Paginierung,
behält der Run seine Zeilen & setzt für dieses Ziel sofort einen Checkpoint. Ein
Run mit Checkpoint meldet eine unvollständige Extraktion & behält fortsetzbare
Cursor. Eine finale Seite schließt die Paginierung auch nach
aufeinanderfolgenden leeren Seiten ab. `failedSubtargets` bleibt `0`. Du zahlst
nur für akzeptierte Dataset-Datensätze.

Das Standard-Apify-Zeitlimit ist `0`, Runs haben also kein Zeitlimit. Der
Actor läuft weiter, bis er die Obergrenze erreicht oder die verfügbaren Daten
aufbraucht. Ein Aufrufer kann dennoch ein endliches Apify-Zeitlimit
setzen. Dann bedeutet `completionReason: "deadline_reached"`, dass dieses
konfigurierte Limit nahe ist. Der Actor reserviert die letzten 15
Sekunden für Checkpoints, Datensätze, Reports und einen erfolgreichen
Abschluss. Gültige Datensätze bleiben geliefert und werden einmal
abgerechnet. Unvollständige Paginierung bleibt fortsetzbar.

- Starts, Suchen, URLs und einzelne Tweet-Lookups verursachen keine
  separate Gebühr.
- Der Actor entfernt Duplikate vor dem Schreiben oder Abrechnen von
  Datensätzen.
- Runs ohne Eingabe, mit ungültiger Eingabe und ohne Ausgabe schreiben 1
  verwertbaren Datensatz in die kostenlose Ausgabe `diagnostics`.

## Wie nutze ich X Tweet Scraper, um Tweet-Daten zu scrapen?

### 1. URLs direkt einfügen

Füge eine Mischung aus Tweet-, Profil-, Such- oder Listen-URLs ein:

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

Der Actor schlägt Tweet-URLs in gleichzeitigen Batches von bis zu 100 nach.
Teilweise erfolgreiche Antworten prüfen nicht aufgelöste IDs einmal erneut.
Die Batch-Ausgabe bleibt eindeutig und entspricht den angeforderten IDs.
Profil-URLs kombinieren die Profil-Timeline mit Autorensuche. Such-URLs
extrahieren die Suchanfrage. Listen-URLs nutzen den dedizierten
Listen-Pfad statt der generischen `list:`-Suche. `maxItems` begrenzt die
Ergebnisse über alle eingefügten URLs hinweg.

### 2. Handles in großen Mengen

Kurzform für viele `from:username`-Suchen:

```json
{ "twitterHandles": ["elonmusk", "nasa", "openai"], "maxItems": 100 }
```

Jedes Handle kombiniert Cursor-Paginierung mit Autorensuche. Der Actor entfernt
doppelte Datensätze vor Ausgabe und Abrechnung. Nutzernamen akzeptieren ein
optionales `@`-Präfix. Handles & Profil-URLs behalten Reposts, so wie der Tab
„Beiträge" auf X. Das gilt auch mit Datumsangaben oder Filtern. Setze
`tweetTypes.excludeRetweets`, um sie zu entfernen.

### 3. Tweets suchen

Setze das Feld **Search Terms** auf eine oder mehrere Suchanfragen:

```json
{
  "searchTerms": ["from:elonmusk AI", "#bitcoin lang:en"],
  "maxItems": 1000,
  "queryType": "Latest"
}
```

Wenn `mode` `tweet` oder `tweets` ohne Tweet-IDs ist, leitet die Eingabe
einer Suchanfrage zur Suche. Das verhindert, dass gültige `searchTerms`
einen leeren Lookup zurückgeben.

Einfache Konto-Backfills mit Datumsfenstern, wie
`from:elonmusk since:2026-01-01 until:2026-01-02`, nutzen eine begrenzte
Konto-Route. Aktuelle Fenster kombinieren die Profil-Timeline mit
Autorensuche. Historische Fenster nutzen exakte Suche. Kompatible,
benachbarte Fenster teilen sich einen Abruf und behalten ihre
ursprüngliche `searchTerm`-Zuordnung. `maxItems` begrenzt die Ergebnisse
über alle Suchbegriffe hinweg. Alle `since:`/`until:`- und
Unix-Zeit-Fenster verifizieren jeden zurückgegebenen Tweet. Gefilterte
Konto-Fenster lesen vollständige Quellseiten, bevor die Ausgabeobergrenze
angewendet wird. Gefilterte Seiten laufen weiter, bis passende Tweets
gefunden sind oder die Paginierung endet. Unabhängige Suchbegriffe laufen
gleichzeitig. Jeder Begriff behält eine geordnete Cursor-Paginierung für
konsistente Tiefe und Zuordnung. Konto-Fenster teilen sich einen Abruf
nur, wenn sie kompatibel sind.

Ein `from:`-Suchbegriff liefert, was die X-Suche liefert. Er lässt also Reposts
aus. Füge `include:nativeretweets` hinzu, um sie zu behalten. Nutze
`filter:nativeretweets`, um nur Reposts zu erhalten.

### 4. Tweets nach ID nachschlagen

```json
{ "tweetIds": ["1846987139428634858", "1858743654778892784"], "maxItems": 100 }
```

Der Actor verarbeitet 100 IDs pro Anfrage. Er führt Batches gleichzeitig
aus und schreibt jede abgeschlossene Gruppe einmal. Teilweise Antworten
prüfen nur nicht aufgelöste IDs erneut. Ergebnisse behalten die
Eingabereihenfolge, entfernen Duplikate und schließen nicht angeforderte
Tweets aus.

Akzeptierte Aliasse für denselben Lookup sind `tweetId`, `tweetIDs`,
`tweets`, `postIds`, `lookupPostIds`, `tweetUrls` und `postUrls`.

### 5. Explizite Interaktions-, Thread- und Artikelmodi

Nutze `mode`, wenn du unabhängig von anderen Eingabefeldern eine Route
willst:

```json
{ "mode": "replies", "replyTweetIds": ["1846987139428634858"], "maxItems": 100 }
```

Unterstützte explizite Modi: `tweet`, `tweets`, `search`,
`profileTweets`, `profileReplies`, `profileMedia`, `profileLikes`,
`listTweets`, `article`, `replies`, `quotes`, `thread`, `retweeters` und
`favoriters`.

`profileTweets` folgt dem Tab „Beiträge" des Profils auf X. Er gibt die
Beiträge des Accounts, seine Reposts & seine Antworten auf eigene Beiträge in
Datumsreihenfolge zurück. Antworten an andere Accounts & Konversationskontext
anderer Autoren fallen vor der Abrechnung weg.

Für nur originale Beiträge schließt du die Typen aus, die du nicht willst:

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
erreichen nie das Dataset. Du zahlst also nie für sie, & sie zählen nie zu
`maxItems`.

`profileReplies` folgt X' Tab „Mit Antworten". Er gibt vom Ziel verfasste
Profilbeiträge und Antworten zurück. Der Actor schließt Konversationskontext
anderer Autoren aus. Nutze `filter:replies` oder `to:`-Suche, wenn du nur
Antworten brauchst.

Such- und paginierte Tweet-Modi unterstützen `time.since`, `time.until`,
Unix-Zeitstempel & `lang`. Dazu gehören die Tabs „Beiträge", „Mit
Antworten", „Medien" und „Likes" von Profilen, Listen, Antworten, Zitate
& Threads. Passende flache Datumsoperatoren funktionieren ebenfalls. Der
Actor verifiziert jeden Datensatz vor der Abrechnung. Die untere
Datumsgrenze ist einschließend. Die obere ist ausschließend. Datumsfilter
schließen Datensätze ohne nutzbares Datum aus. Sprachfilter schließen
fehlende oder nicht passende Sprachen aus. Gefilterte Datensätze
verbrauchen nie deine angeforderte Ergebnisobergrenze. Ungeordnete
Ergebnisse paginieren weiter, wenn ältere Tweets vor passenden Ergebnissen
liegen. Ein Listen-Run mit Datumsfenster springt direkt zum Fenster. Ein Tag
vor 30 Tagen dauert also etwa so lange wie gestern. Für ein Fenster tief in
einer Liste kommen die Tweets aus der Listensuche von X. Sie lässt einige
Antworten aus, die die Listen-Timeline zeigt. Ein Listen-Run endet auch,
sobald 3 Seiten in Folge nur Tweets enthalten, die älter als deine untere
Datumsgrenze sind. Da die obere Grenze ausschließend ist, ergibt dasselbe
Datum für `since` & `until` ein leeres Fenster. Setze `until` auf den nächsten
Tag, um 1 vollen Tag zu erhalten. Tweet-Filter gelten nicht für Nutzerlisten
oder direkte Tweet-/Artikel-Lookups.

`time.withinTime` & `within_time` funktionieren in denselben Modi. Der Wert
`7d` behält die letzten 7 Tage, bevor der Run zu lesen beginnt. Ein Fenster,
das bis vor 2006 zurückreicht, behält jeden Beitrag.

`mode: "replies"` ist strenger. Er kombiniert direkte Timelines,
unterstützte Ranking-Modi, jedes vorwärtsgerichtete Cursor-Modul,
gekennzeichnete versteckte Inhaltszweige, an die gemeldete Antwortanzahl
angepasste Zeitpartitionen und Suche. Jeder Tweet-Datensatz hat
`inReplyToId` gleich der angeforderten Tweet-ID. Verschachtelte
Konversationsantworten zählen nie als direkte Antworten. Wenn X weniger
Antworten offenlegt, als gemeldet, behält der Actor die sicheren
Teildatensätze. Er fügt 1 `replies-incomplete`-Datensatz zu
`diagnostics` hinzu, wenn noch Kapazität übrig ist. Das Erreichen einer
Abdeckungsschwelle bedeutet nicht, dass die Extraktion abgeschlossen ist.
Der Run bleibt teilweise, bis dein Limit oder eine verifizierte
Quellerschöpfung erreicht ist. `replyCoverage` meldet Zählungen,
Strategien, Paginierungsauffälligkeiten, fehlende Felder und die
empfohlene Ausweichlösung. Der Actor beachtet vorübergehende
Wiederholungsverzögerungen, bevor er eine leere Ausgabe zurückgibt. Setze
`maxItems` auf deine angeforderte Gesamtzahl, auch für Gesamtzahlen über
25.000 für ein Antwortziel.

Artikel-Datensätze enthalten `resultType: "article"`, `sourceTweetId`,
`article` und optional `author`. Interaktions-Nutzer-Datensätze enthalten
`resultType: "user"`, `sourceTweetId` und `engagementMode`.

Retweeter sind ein normaler öffentlicher Interaktionsmodus. Favoriter
sind Best Effort: X legt liker-Nutzer möglicherweise nur für berechtigte
oder für den Besitzer sichtbare Beiträge offen. Profil-Likes sind
ebenfalls Best Effort, da viele öffentliche Profile keinen lesbaren
Likes-Tab offenlegen. Wenn X keine Nutzer oder gelikte Tweets offenlegt,
schreibt der Actor einen kostenlosen `diagnostics`-Datensatz. Lesezeichen-
Anzahlen können auf Tweet-Datensätzen erscheinen, aber X legt nicht die
konkreten Accounts offen, die einen Beitrag mit einem Lesezeichen
versehen haben.

### 6. Flache CSV-Ausgabe

Behalte die standardmäßig verschachtelten JSON-Felder, oder ergänze
tabellenfreundliche Spalten:

```json
{ "searchTerms": ["from:nasa moon"], "maxItems": 100, "outputPreset": "flat" }
```

Die flache Ausgabe behält `author` und `media` unverändert bei und ergänzt
auch oberste Felder wie `authorUsername`, `authorName`,
`authorFollowers`, `tweetUrl`, `twitterUrl`, `mediaUrls`, `imageUrls` und
`videoUrls`.

Jeder flache Tweet-Datensatz enthält `media`. Ein Tweet ohne Medien hat eine
leere Liste, sodass jeder Datensatz in einer Tabelle oder einer typisierten
Pipeline dieselben Schlüssel hat.

### 7. Feldbenennung wählen

Behalte standardmäßig Legacy-Feldnamen. Wähle einen Stil für vollständige
oder rohe Ergebnisdaten:

```json
{
  "searchTerms": ["from:nasa moon"],
  "maxItems": 100,
  "outputVariant": "rich",
  "fieldStyle": "snake_case"
}
```

Nutze `camelCase` oder `snake_case` für oberste und verschachtelte
Ergebnisfelder. Die flache Snake-Case-Ausgabe enthält Felder wie
`author_username` und `media_urls`. Sichere Quell-Snapshots unter `raw`
behalten ihre ursprünglichen Quellschlüssel. Kollidierende Quellnamen
bleiben ebenfalls unverändert, um Datenverlust zu vermeiden.

Legacy-Diagnosen nutzen `resultType`, `actorVersion` und `replyCoverage`.
Vollständige und rohe Ausgaben wenden `fieldStyle` rekursiv an. Snake
Case nutzt zum Beispiel `result_type`, `actor_version` und
`reply_coverage`. Die Overview-Dataset-Ansicht funktioniert mit beiden
Stilen. Wähle die Console-Ansicht passend zum `fieldStyle` des Runs.
„camelCase fields" erwartet `camelCase`. „snake_case fields" erwartet
`snake_case`. Ansichten wählen nur Spalten aus. Sie benennen gespeicherte
oder exportierte Daten nie um.

### 8. Erweiterte Filter

Kombiniere Nutzer-, Datums-, Standort-, Medien- und Interaktionsfilter:

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

Setze `queryType: "Latest + Top"`, um beide X-Suchmodi gleichzeitig
auszuführen. Der Actor dedupliziert vor der Abrechnung und füllt
ungenutzte Kapazität aus beiden Modi auf. `Top` ist relevanzsortiert und
nicht erschöpfend. Setze `includeSearchTerms: true`, um jedes passende
Ergebnis mit einem `searchTerm`-Feld zu kennzeichnen. Kurze
vorübergehende Leseausfälle erhalten einen zusätzlichen Versuch, bevor der
Actor eine Diagnose zurückgibt.

Wenn du `lang` setzt, verifiziert der Actor die Sprache jedes
zurückgegebenen Tweets. Er überspringt nicht passende Treffer und
paginiert weiter nach passenden Tweets.

### Von einem anderen Tweet-Actor migrieren

Füge die Eingabe ein, die du schon nutzt. X Tweet Scraper liest die Feldnamen,
die andere Tweet-Actors nutzen, & ordnet sie seinen eigenen Feldern zu.
Kanonische Namen bleiben der dokumentierte Standard. Ein Alias verwirft nie
ein Feld & ändert nie, was du zahlst. Das Eingabeformular listet nur
kanonische Felder, damit es kurz bleibt. Aliasse funktionieren in JSON, API,
SDK, Automatisierung & gespeicherten Task-Eingaben.

| Feld, das du schon nutzt                                                                                                                                               | X Tweet Scraper liest es als                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `startUrls`, `urls`, `tweetUrls`, `postUrls`, `profileUrls`, `accountUrls`                                                                                             | `startUrls`                                                              |
| `profileUrl` als 1 String                                                                                                                                              | `startUrls`                                                              |
| `tweetIds`, `tweetIDs`, `tweets`, `postIds`, `lookupPostIds`, `tweet_ids` oder `tweetId` als 1 String                                                                  | `tweetIds`                                                               |
| `twitterHandles`, `usernames`, `user_names`, `userNameList`, `handles`, `screenNames`, `profileTweets`                                                                 | `twitterHandles`                                                         |
| `username`, `handle`, `screenName` als 1 String                                                                                                                        | `twitterHandles`                                                         |
| `searchTerms`, `searchQueries`, `queries`, `search`, als Liste oder 1 Suche pro Zeile                                                                                  | `searchTerms`                                                            |
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

- Jede Quelle läuft. Eine Eingabe mit Start-URLs, Handles, Suchbegriffen,
  Listen-IDs & Tweet-IDs führt alle aus, & `maxItems` gilt für den gesamten
  Run.
- Eine Suchanfrage neben `searchTerms` läuft als 1 weiterer Begriff.
- Der Actor liest eine Profil-URL in der Form `x.com/@name` wie `x.com/name`.
- Wenn du einen Alias & sein kanonisches Feld setzt, gewinnt der kanonische
  Wert. Das Run-Protokoll nennt den Alias, der verloren hat.
- Das Run-Protokoll nennt jedes Feld, das der Actor nicht liest, etwa
  `customMapFunction`. Nichts wird ohne Hinweis verworfen.
- Eine Datensatz-Obergrenze muss eine ganze Zahl ab 1 sein. `maxResults: 0`
  stoppt den Run, bevor etwas abgerufen oder berechnet wird.
- `quickDateRange: "m1"` liest auf jeder Route den letzten Monat. Monate & Jahre
  zählen im Kalender zurück. Ein Wert ohne h, d, w, m oder y stoppt den Run,
  bevor etwas gelesen oder berechnet wird.
- Der Actor hat keine Seiteneinheit. Ersetze `maxPages` durch `maxItems`.
- Der Actor hat kein Nutzer-ID-Feld. Sende Handles oder Profil-URLs statt
  `userId` oder `user_ids`.
- Suchoperator-Felder wie `from`, `min_faves`, `since_time` & `filter:images`
  nutzen schon die Namen, die X nutzt. Sie brauchen also keine Zuordnung.

### Console- & API-Eingabe-UX

Die Console bietet folgende Steuerelemente:

- Mode, Output Variant, Field Style, Output Preset und Sort By sind
  validierte Auswahlfelder.
- Die Felder „Start URLs" und „Profile URLs" akzeptieren Strings oder
  `{ "url": "..." }`-Objekte. Ihre JSON-Editoren erhalten beide
  API-Formate.
- „Structured Filters" bietet gruppierte Steuerelemente ohne
  verschachteltes JSON.
- Kanonische Filtergruppen halten gleichwertige flache Operatoren aus dem
  Formular heraus. JSON, API, SDK, Automatisierung und gespeicherte
  Task-Eingaben akzeptieren sie weiterhin.
- „Max Items" und „Max Items Per Target" akzeptieren ganze Zahlen ab 1.
  Interaktionsschwellen akzeptieren ganze Zahlen ab 0.

Nutze kanonische Felder in neuen Integrationen. Die Aliasse aus der
Migrationstabelle oben bleiben verfügbar. `includeRaw` ist ein Alias für
`outputVariant: "raw"`.
Historische `outputVariant`-Werte wie `compact` und `full` bleiben
akzeptiert und nutzen die Legacy-Ausgabe. Das visuelle Formular
kennzeichnet sie als Legacy-Aliasse.

### Top unterstützte Suchoperatoren

| Operator                | Beispiel                | Zweck                          |
| ------------------------- | ------------------------- | --------------------------------- |
| `from:`                    | `from:elonmusk`            | Nur Tweets dieses Nutzers          |
| `to:`                       | `to:OpenAI`                 | Nur Antworten an diesen Nutzer     |
| `@`                         | `@nasa`                     | Tweets, die diesen Nutzer erwähnen |
| `list:`                     | `list:123456`               | Tweets von Listenmitgliedern       |
| `lang:`                     | `lang:en`                   | Filter nach Sprache                |
| `since:` / `until:`         | `since:2026-01-01`          | Datumsbereich                      |
| `min_faves:`                | `min_faves:100`             | Interaktionsschwelle               |
| `min_retweets:`             | `min_retweets:50`           | Retweet-Schwelle                   |
| `filter:media`              | `filter:media`              | X-Medien-Suchoperator               |
| `filter:videos`             | `filter:videos`             | X-Video-Suchoperator                |
| `filter:images`             | `filter:images`             | X-Bild-Suchoperator                 |
| `filter:links`              | `filter:links`              | Nur Tweets mit Links                |
| `filter:replies`            | `filter:replies`            | Nur Antwort-Tweets                  |
| `filter:quote`              | `filter:quote`              | Nur Zitat-Tweets                    |
| `filter:blue_verified`      | `filter:blue_verified`      | Nur Premium-Nutzer                  |

Datumsfenster nutzen eine einschließende untere und eine ausschließende
obere Grenze. Der Actor verifiziert beide Grenzen, bevor er einen Tweet
hinzufügt oder abrechnet.

Für die vollständige Operatorliste siehe
[Twitter Advanced Search](https://github.com/igorbrigadir/twitter-advanced-search).

## Eingabe

Siehe den Tab **Input** für die vollständige Liste der Optionen. Alle
Felder sind optional, außer mindestens eines von: `startUrls`,
`twitterHandles`, `listIds`, `tweetIds`, `searchTerms`, `twitterContent`,
oder deren dokumentierte Aliasse.

Beispiele:

- Füge eine Tweet-URL in Start-URLs ein.
- Füge eine Profil-URL ein oder ergänze den Nutzernamen zu X Handles. Der
  Actor kombiniert dessen Timeline mit Autorensuche.
- Nutze `from:user since:YYYY-MM-DD until:YYYY-MM-DD` als Suchbegriff für
  Konto-Backfills. Der Actor führt kompatible Fenster vor dem Abruf
  zusammen. Aktuelle Fenster kombinieren die Profil-Timeline mit
  Autorensuche. Historische Fenster nutzen exakte Suche.
- Füge eine Listen-URL in Start-URLs ein.
- Kombiniere `twitterContent` mit Filtern wie `from:`, `since:`,
  `min_faves:` und `filter:media` für erweiterte Suchen.

Der Scraper leitet Listen-URLs über den dedizierten Listen-Pfad statt der
generischen `list:ID`-Suche.

## Ausgabe

Jeder Tweet ist ein JSON-Objekt mit verfügbaren Metadaten:

Dataset- und Run-Report-Schemas enthalten Feldtitel, Beschreibungen und
Beispiele. Agents können sie prüfen, ohne die Feldbedeutung zu erraten.

Beispielwerte dienen nur der Veranschaulichung. Antworten spiegeln
Quelldaten zur Laufzeit wider.

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

Exportiere als JSON, CSV, Excel oder HTML aus dem Apify-Dataset.

## Run-Optionen

- Setze die maximale Apify-Gesamtgebühr, um die Run-Kosten zu begrenzen.
  Lass `maxItems` leer, um innerhalb dieses Budgets die maximale Anzahl
  Datensätze zu erhalten, oder setze `maxItems`, wenn du weniger Tweets
  willst.
- Setze `maxTotalChargeUsd` in der Apify-API oder „Max cost per run" in
  der Console. Apify legt dieses Limit dem Actor als
  `ACTOR_MAX_TOTAL_CHARGE_USD` offen, und der Actor rechnet es in die
  maximal abrechenbare Datensatzanzahl um.
- Übergib `tweetIds` für gleichzeitige Batches von 100 IDs. Füge eine
  Profil-URL ein, um den schnellen Nutzer-Timeline-Pfad zu nutzen.
- Setze `includeSearchTerms: true`, wenn du viele Suchanfragen ausführst,
  um jedes Ergebnis mit seinem Quell-Suchbegriff zu kennzeichnen.
- Setze `queryType: "Latest + Top"`, um beide X-Suchmodi gleichzeitig
  auszuführen. Deduplizierung und Ergebnisobergrenzen bleiben atomar.
- Nutze Xquik-Konto- oder Stichwort-Monitore für sekündliche Prüfungen
  und signierte Webhooks. Aktive Monitore prüfen jede Sekunde.

## Anwendungsfälle

- Verfolge die Markenstimmung über Tweets hinweg.
- Beobachte Wettbewerberbeiträge und Branchenbegriffe.
- Finde Interessenten in öffentlichen Konversationen.
- Sammle öffentliche Datasets für die Forschung.
- Finde Beiträge mit hoher öffentlicher Interaktion.

## Verantwortungsvoller Umgang mit Daten

Der Actor fragt öffentliche X-Felder ab. Ergebnisse können
personenbezogene Daten enthalten. Bestätige einen rechtmäßigen Zweck und
befolge geltende Datenschutzregeln. Frage bei Unsicherheit qualifizierte
Rechtsberatung.

## Verwandte Xquik Actors

Jeder Xquik Actor nutzt dieselbe Extraktions-Engine, filterbasierte
Abrechnung & Diagnosen. Wähle den, der zu deinen Daten passt.

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
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer):
  Schätzt für jeden Tweet einen Viral Score von 0 bis 100 & ein Urteil aus 8
  KI-Antworten zu Merkmalen. Nutze ihn, wenn du untersuchst, warum Tweets sich
  verbreiten oder floppen. Ab $0.0003 pro analysiertem Tweet.

## Brauchst du mehr als Scraping?

Xquik bietet außerdem 47 Dashboard-Tools, 129 REST-Operationen, signierte
Webhooks und einen MCP-Server.

- [API-Dokumentation](https://docs.xquik.com/introduction): Anleitungen zur
  REST-API
- [Search Tweets API](https://docs.xquik.com/api-reference/x/search-tweets):
  der Endpunkt, der diesen Actor antreibt
- [Batch Tweets API](https://docs.xquik.com/api-reference/x/batch-tweets):
  ruft bis zu 100 Tweets per ID ab
- [User Tweets API](https://docs.xquik.com/api-reference/x/user-tweets):
  ruft die Timeline eines Nutzers ab
- [MCP-Server](https://docs.xquik.com/mcp/overview): entdeckt unterstützte
  Tools
- [Webhooks](https://docs.xquik.com/webhooks/overview): signierte
  Ereigniszustellung
- [GitHub](https://github.com/Xquik-dev/x-twitter-scraper): Quellcode und
  Issue-Tracker

## FAQ

**Brauche ich einen X-API-Schlüssel?** Nein. Dieser Scraper nutzt seine
eigene Infrastruktur. Kein Login oder Zugangsdaten erforderlich.

**Was begrenzt einen Run?** Dein angefordertes Item-Limit und das
Apify-Ausgabenlimit stoppen den Run. Apify-Konto- und Plattformlimits
gelten weiterhin.

**Wie schnell ist es?** Die Laufzeit hängt von der Route, der
Ergebnisanzahl und der Verfügbarkeit der Quelle ab.

**Warum liefert eine Latest-Suche Beiträge, die der Latest-Tab von X nicht
zeigt?** X lässt einige passende Beiträge aus seiner offenen Latest-Liste weg
& liefert sie nur an eine Suche mit Zeitgrenzen. Dieser Actor liest eine
Latest-Suche als Zeitscheiben nebeneinander, also bekommt er beides. In einem
Test mit 100 Beiträgen für 1 Suchanfrage stimmten 83 mit den Beiträgen
überein, die 5 andere Scraper lieferten. 17 waren Beiträge, die X nur an die
zeitbegrenzten Suchen lieferte. Alle 17 lagen in derselben Zeitspanne. Jeder
Beitrag ist ein echtes X-Suchergebnis für deine Suchanfrage, & du zahlst für
jeden Beitrag 1 Mal.

**Welche Suchoperatoren funktionieren?** X Advanced Search
unterstützt Autoren, Empfänger, Erwähnungen, Daten, Interaktion, Medien
und Standort.

**Kann ich die Apify-API nutzen, um dies auszuführen?** Ja. Siehe den
[API-Tab](https://apify.com/xquik/x-tweet-scraper/api) für Python-,
JavaScript- und cURL-Beispiele.

**Kann ich wiederkehrende Scrapes planen?** Ja. Nutze Apifys integrierte
[Planung](https://docs.apify.com/platform/schedules), um diesen Actor
nach einem Zeitplan auszuführen.

**Wo melde ich Probleme?** Öffne ein Issue auf
[GitHub](https://github.com/Xquik-dev/x-twitter-scraper/issues) oder
nutze den Tab „Issues" auf der Actor-Seite.

**Kann ich eine individuelle Lösung bekommen?** Ja. Besuche
[xquik.com](https://xquik.com) oder lies die
[API-Dokumentation](https://docs.xquik.com/introduction) für das
Dashboard, die API, den MCP-Server und Webhooks.
