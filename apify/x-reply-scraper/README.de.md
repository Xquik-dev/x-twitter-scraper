[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
**Deutsch** · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer verbindet Xquik MCP mit Coding-Agents](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Sieh dir an, wie Framer Xquik-Scraper nutzt](https://youtu.be/4UOSpoOoC3Y?t=367),
mit Claude Code, Codex, Cursor & mehr, ab Minute 6:07.

Xquik ist weltweit der schnellste & günstigste Scraper-Dienst für X (Twitter) &
liefert die vollständigsten X-Daten. X Reply Scraper von Xquik sammelt
Antworten, Kommentare & ganze Konversationen. Die meisten anderen Apify Actors
rechnen ab, bevor sie filtern oder Duplikate entfernen. Xquik berechnet nur
**gelieferte, eindeutige Ergebnisse, die zu deinen Filtern passen**.

Scrape Antworten & Kommentare auf Twitter für **$0.00015 pro geliefertem
Datensatz** auf jedem Apify-Plan & lies sie ohne X-Account. Füge Post-URLs,
Post-IDs, Profil-URLs oder Nutzernamen ein. Exportiere Antworten,
Konversationen, Autoren, Interaktionen, Entitäten & Medien-URLs. Apify berechnet
deine Plattformnutzung separat. Du brauchst keinen X-Login. Filter laufen, bevor
der Actor ins Dataset schreibt, also zahlst du nur für gelieferte Datensätze.

> Xquik ist ein unabhängiger Drittanbieter-Dienst. Nicht verbunden mit X Corp.
> "Twitter" und "X" sind Marken von X Corp.

## Was macht X Reply Scraper?

X Reply Scraper von Xquik sammelt öffentliche Antworten &
Kommentar-Konversationen. Er verarbeitet einzelne Posts, lange URL-Listen,
Post-IDs & Antwort-Timelines von Nutzern.

### Wichtige Funktionen

- Der Auto-Modus sammelt weiter, wenn direkte Ergebnisse unvollständig sind.
- `collectionStrategy` legt fest, wie der Actor Antworten sammelt.
- Eingaben in großen Mengen akzeptieren Post-URLs, Post-IDs, Profile &
  Nutzernamen.
- Filter & Duplikatentfernung laufen vor der Abrechnung.
- Die Ausgabe unterstützt 4 Sortiermodi, 3 Detailstufen & 3 Feldstile.
- Jede Antwort behält ihr Quellziel, die IDs der übergeordneten Posts, die ID
  des Ausgangsposts & ihre Tiefe.
- Fortsetzungs-Cursor unterstützen das Nachholen älterer Daten & geplante Runs.
- Runs, die Aufmerksamkeit brauchen, schreiben 1 kostenlosen Datensatz in
  `diagnostics`. Ein Run, der jedes Ziel liest & keine Antwort findet, schreibt
  keinen. Sein Status sagt, warum.
- Run-Logs zeigen Seiten- & Zielzeiten in `fetchDurationMs`,
  `processingDurationMs`, `pushDurationMs`, `statusDurationMs`,
  `fullPageDurationMs` & `fullTargetDurationMs`.
- Runs behalten gelieferte Antworten & ihren Fortschritt, wenn Apify sie neu
  startet.

### Anwendungsfälle

- Miss Sentiment & Kundenfeedback unter Posts zu Marken & Produkten.
- Erstelle eine Rangliste der Antworten & Kommentare mit den meisten
  Gefällt-mir-Angaben unter einem viralen Post.
- Finde Leads, die in öffentlichen Antworten Fragen stellen oder einen Bedarf
  nennen.
- Prüfe Antworten zur Moderation sowie auf Spam & Missbrauch.
- Rekonstruiere ganze Konversationen für Forschung & KI-Trainings-Datasets.
- Verfolge, wie ein Account seinen Kunden über längere Zeit antwortet.

### Welche Daten kann X Reply Scraper extrahieren?

Die Schemas für Dataset & Run-Report beschreiben jedes gelieferte Feld. Text-,
Zahlen- & Boolean-Felder enthalten auch Beispiele für Agents & generierte
Integrationen.

Jeder vollständige Antwort-Datensatz kann diese Kernfelder enthalten.

| Feld                | Beschreibung                                             |
| ------------------- | -------------------------------------------------------- |
| `id`                | Antwort-ID                                               |
| `text`              | Antworttext                                              |
| `fullText`          | Langer Antworttext                                       |
| `createdAt`         | Zeitstempel der Antwort                                  |
| `lang`              | X-Sprachcode                                             |
| `url`               | Direkte URL der Antwort                                  |
| `conversationId`    | Konversations-ID von X                                   |
| `inReplyToId`       | ID des direkt übergeordneten Posts                       |
| `inReplyToUserId`   | ID des übergeordneten Autors                             |
| `inReplyToUsername` | Nutzername des übergeordneten Autors                     |
| `likeCount`         | Gefällt-mir-Angaben                                      |
| `replyCount`        | Antworten darauf                                         |
| `retweetCount`      | Reposts                                                  |
| `quoteCount`        | Zitate                                                   |
| `viewCount`         | Aufrufe                                                  |
| `bookmarkCount`     | Lesezeichen                                              |
| `author`            | Verfügbare öffentliche Autorenmetadaten                  |
| `media`             | Bilder, Videos, GIFs und Varianten                       |
| `entities`          | Hashtags, Cashtags, Erwähnungen, URLs & Video-Zeitmarken |
| `quoted_tweet`      | Zitierter Post, falls vorhanden                          |
| `retweeted_tweet`   | Reposteter Post, falls vorhanden                         |

Vollständige Datensätze behalten außerdem verfügbare Quellmetadaten.

- Felder zum Post-Typ sind `type`, `isReply`, `isQuoteStatus`, `isNoteTweet`,
  `isLimitedReply` & `isTranslatable`.
- Textdetails sind `displayTextRange`, `noteTweet`, `article`, `card` &
  `cashtagAttachments`.
- Labels & Hinweise sind `contentDisclosure`, `communityNote`,
  `possiblySensitive`, `tombstone` & `exclusiveContent`.
- Konversationsdetails sind `conversationControl`, `limitedActions`,
  `subscriberBadge` & `unmentionedUserIds`.
- Kontextfelder sind `source`, `place`, `communityId`, `communityName`,
  `reactionContext` & `postCta`.
- Felder zu Bearbeitung & Verfügbarkeit sind `edit`, `previousCounts`,
  `viewState` & `authorUnavailable`.

Flache Datensätze behalten die Vorgänger in der Konversation, Quelldetails,
Ergebnistyp & Schemaversion. Die genauen Felder stehen in OpenAPI.

## Wie nutze ich X Reply Scraper, um Antworten zu scrapen?

Neu bei Apify?
[Erstelle zuerst einen kostenlosen Account](https://console.apify.com/sign-up?fpr=xquik).
Der kostenlose Plan braucht keine Kreditkarte & gibt dir jeden Monat $5 zum
Ausgeben. Bei $0.00015 pro Datensatz reichen $5 für bis zu 33.000 Datensätze,
vor Abzug der Plattformnutzung. Komm dann hierher zurück & klicke auf Try for
free.

1. Füge Post-URLs, Post-IDs, Profil-URLs oder Nutzernamen ein.
2. Setze `maxItems`, `scope` & die Filter, die deine Aufgabe braucht.
3. Starte X Reply Scraper von Xquik & öffne das Dataset.

Das Formular ist mit einer öffentlichen Konversation vorausgefüllt, die wir
getestet haben. Es liefert bis zu 1.000 vollständige, flache Datensätze. Der
Auto-Modus durchsucht standardmäßig die ganze Konversation. Deduplizierung &
Quellzuordnung bleiben aktiv.

### Antworten aus einer Post-URL scrapen

```json
{
  "startUrls": [{ "url": "https://x.com/OpenAI/status/2082577277246972300" }],
  "maxItems": 100
}
```

### Antworten aus Post-IDs scrapen

```json
{
  "tweetIds": ["2082577277246972300", "2083148725367783580"],
  "maxItemsPerTarget": 100,
  "maxItems": 10000
}
```

### Die ganze verschachtelte Konversation sammeln

```json
{
  "tweetIds": ["2082577277246972300"],
  "collectionStrategy": "conversationSearch",
  "scope": "all",
  "maxDepth": 5,
  "sort": "oldest",
  "maxItems": 500
}
```

### Die Antwort-Timeline eines Nutzers scrapen

```json
{ "usernames": ["OpenAI", "apify"], "maxItems": 10000 }
```

### Antworten vor der Abrechnung filtern

```json
{
  "tweetIds": ["2082577277246972300"],
  "anyWords": ["API", "agent", "developer"],
  "excludeWords": ["airdrop", "giveaway"],
  "lang": "en",
  "minLikes": 2,
  "minViews": 100,
  "verifiedOnly": true,
  "maxItems": 10000
}
```

### Flache, CSV-taugliche Datensätze exportieren

```json
{
  "tweetIds": ["2082577277246972300"],
  "outputMode": "full",
  "outputPreset": "flat",
  "fieldStyle": "camelCase",
  "maxItems": 100
}
```

## Task-Beispiele

Wähle aus 50 öffentlichen Tasks. Jeder hat eine begrenzte Eingabe & eine
passende Dataset-Ansicht. Passe jeden Task an, bevor du ihn startest.

- [Antworten auf X-Posts & Twitter-Kommentare scrapen](https://apify.com/xquik/x-reply-scraper/examples/scrape-post-replies)
- [Twitter-Antworten in großen Mengen scrapen](https://apify.com/xquik/x-reply-scraper/examples/scrape-bulk-post-replies)
- [Eine Konversation aus Twitter-Antworten rekonstruieren](https://apify.com/xquik/x-reply-scraper/examples/rebuild-full-conversation)
- [Twitter-Antworten nach Gefällt-mir-Angaben ordnen](https://apify.com/xquik/x-reply-scraper/examples/rank-most-liked-replies)
- [Die neuesten Antworten auf Posts scrapen](https://apify.com/xquik/x-reply-scraper/examples/collect-latest-replies)
- [Spam aus Twitter-Antworten entfernen](https://apify.com/xquik/x-reply-scraper/examples/exclude-spam-keywords)
- [Englische Twitter-Antworten scrapen](https://apify.com/xquik/x-reply-scraper/examples/collect-english-replies)
- [Verifizierte Twitter-Antworten scrapen](https://apify.com/xquik/x-reply-scraper/examples/collect-verified-replies)
- [Twitter-Antworten mit Medien scrapen](https://apify.com/xquik/x-reply-scraper/examples/collect-media-replies)
- [Die Antwort-Timeline eines Twitter-Nutzers scrapen](https://apify.com/xquik/x-reply-scraper/examples/scrape-profile-replies)
- [Twitter-Antworten für KI-Agents sammeln](https://apify.com/xquik/x-reply-scraper/examples/collect-replies-for-ai-agents)
- [Ein RAG-Dataset aus X-Antworten aufbauen](https://apify.com/xquik/x-reply-scraper/examples/build-x-reply-rag-dataset)
- [Twitter-Antworten für LLMs archivieren](https://apify.com/xquik/x-reply-scraper/examples/archive-replies-for-llm-processing)
- [Leads aus X-Antworten für dein CRM extrahieren](https://apify.com/xquik/x-reply-scraper/examples/extract-reply-leads-for-crm)

## Was kostet es, Antworten auf X zu scrapen?

X Reply Scraper von Xquik kostet $0.00015 pro geliefertem Datensatz auf jedem
Apify-Plan. Apify berechnet die Plattformnutzung separat.

Brauchst du mehr Volumen, dann
[wähle einen Apify-Plan](https://apify.com/pricing?fpr=xquik) mit mehr
vorausbezahlter Nutzung.

Xquik berechnet 1 Gebühr pro geliefertem Datensatz. Antworten, die deine Filter
oder die Deduplizierung entfernen, kosten nichts. Diagnose-Datensätze in
`diagnostics` sind kostenlos. Es fällt keine Gebühr für Start, URL, Suchanfrage,
Paginierung oder Filter an.

## Leere, unvollständige & gestoppte Runs

X Reply Scraper von Xquik erklärt leere, unvollständige & gestoppte Runs
kostenlos. Der Run-Status nennt den Grund für den Stopp. Er zählt auch
berechnete Ergebnisse & gelesene Ziele. Ein Run, der jedes Ziel liest & keine
Antwort findet, schreibt keinen Datensatz. Sein Status sagt, warum & was du
ändern solltest.

### Unvollständige Extraktion

Ein unterbrochener Run schreibt eine kostenlose `partial`-Diagnose. Verfügbare
Ergebnisse bleiben erhalten. Lies `availableResults`, `failedTargets`,
`retryable` & `nextAction`, bevor du es erneut versuchst. Ein erfolgreicher
Actor-Abschluss bestätigt die Lieferung, nicht die vollständige Extraktion.

Der Status nennt jede Ursache für einen vorzeitigen Stopp. `stopCauses` listet
jede Ursache mit eigenen Feldern `message`, `retryable` & `nextAction`. Die
Ursachen sind `target_not_found`, `target_failed`, `page_limit`, `reply_reach` &
`deadline_reached`. `reply_reach` bedeutet, dass X nur einen Teil eines Threads
geliefert hat.

Ein fehlender Post oder Account zählt nicht als Fehler. Der Status nennt ihn,
etwa "X has no match for 1 target." In `stopCauses` erscheint er nur, wenn eine
andere Ursache den Run gestoppt hat. Der Run ist `retryable`, wenn mindestens 1
Ursache es ist.

### Diagnosen

Erfolgreiche Datensätze nutzen `resultType: "reply"`. Ein Run, der
Aufmerksamkeit braucht, schreibt genau 1 kostenlosen Datensatz in `diagnostics`.
Beispiele sind eine ungültige Eingabe, ein übersprungenes Ziel oder ein
vorzeitiger Stopp. Der Datensatz sagt, wie du das Problem behebst. Ein Run, der
jedes Ziel liest & keine Antwort findet, schreibt keinen. Sein Status sagt,
warum.

Der Run-Status nennt den Grund für den Stopp. Er zählt auch berechnete
Ergebnisse & gelesene Ziele. Runs mit einem Problem schreiben immer
`run-report`, auch bei Abbrüchen ohne Eingabe und mit ungültiger Eingabe. Ein
großer Run schreibt ihn ebenfalls. Ein kleiner Run ohne Probleme überspringt ihn
& spart Apify-Nutzung. Aktiviere `alwaysSaveRunRecords`, um ihn bei jedem Run zu
schreiben.

Das Report-Schema dokumentiert Abschluss, Abrechnung, Fehler & gespeicherte
Cursor. Sein Feld `version` nennt die exakte veröffentlichte Quellversion des
Actors.

Das Feld `status` nutzt diese Werte.

- `no-input`
- `invalid-input`
- `replies-incomplete`
- `zero-output`
- `aborted`
- `unexpected-error`

## Eingabe

Der Tab Input listet jede Option. Gib mindestens 1 Post-URL, Post-ID, Profil-URL
oder 1 Nutzernamen an. Jedes andere Feld ist optional.

### Antwortziele & Eingabe-Aliasse

Nutze diese Hauptfelder.

| Eingabe       | Zweck                                           |
| ------------- | ----------------------------------------------- |
| `startUrls`   | Gemischte Post- und Profil-URLs von X           |
| `tweetIds`    | Numerische Post-IDs                             |
| `usernames`   | Antwort-Timelines von Profilen                  |
| `startCursor` | Setzt 1 Ziel ab einem gespeicherten Cursor fort |

Das Eingabeformular zeigt nur kanonische Steuerelemente. Kompatibilitätsaliasse
funktionieren weiter in JSON, API, SDK, Automatisierungen & gespeicherten
Task-Eingaben. Kombinierst du kanonische Felder & Aliasse, gilt ihre bestehende
Rangfolge.

Diese Aliasse akzeptieren gängige Feldnamen anderer Scraper.

- URL-Aliasse sind `urls`, `tweetUrls`, `postUrls`, `profileUrls` & `twitterUrl`
  als einzelner String.
- ID-Aliasse sind `conversationIds`, `postIds`, `ids`, `tweetId`, `id`.
- Nutzernamen-Aliasse sind `twitterHandles`, `screenname`.
- Aliasse für das globale Limit sind `maxResults`, `max_results`,
  `resultsLimit`, `maxReplies`.
- Aliasse pro Ziel sind `maxRepliesPerTweet`, `maxCommentsPerPost`,
  `resultsPerCategory`.
- Der Such-Alias ist `useSearch`.
- Aliasse für verschachtelte Antworten sind `includeNestedReplies`,
  `includeRepliesOfReplies`.
- Der Alias für die Tiefe ist `depth` als `1`, `2` oder `3` für `maxDepth`.
  `full` setzt kein Limit.
- Der Alias für den Umfang ist `onlyDirectReplies` für `scope: "direct"`.
- Aliasse für den Originalpost sind `includeOriginalTweet`,
  `includeSourceTweet`. Mit `includeSourceTweet` begrenzt `resultsPerCategory`
  die Antworten & der Post ist 1 Datensatz mehr.
- Der Alias für den Autor ist `excludeOpSelfReplies` für
  `excludeOriginalAuthor`.
- Aliasse für die Sortierung sind `sortBy` & `queryType` für `sort`. Der Actor
  liest `top`, `newest` & `mostLiked` als `relevance`, `latest` & `likes`.
- Ausgabe-Aliasse sind `outputVariant`, `includeRaw`.

Steht `category` auf `replies`, ändert sich nichts. Eine Kategorie, die die
Aufgabe eines anderen Actors ist, etwa `retweets` oder `info`, stoppt den Run.
Er liest & berechnet nichts. Die Meldung nennt den Actor, den du nutzen sollst.
Setzt du einen dieser Aliasse & sein kanonisches Feld, gewinnt der kanonische
Wert. Das Run-Log nennt den Alias, der verloren hat.

Fehlerhafte oder nicht unterstützte Ziele lassen den Actor nicht scheitern.
Bleibt kein gültiges Ziel übrig, schreibt der Run eine Diagnose mit der Lösung.

### Abdeckungsstrategien

Wähle, wie der Actor Antworten sammelt. Auto passt für die meisten Aufgaben.

#### Automatisch vollständig

Nutze `collectionStrategy: "auto"` für die meisten Aufgaben. Die Strategie
sammelt jede Antwort, die sie für deinen Umfang erreicht. Steuerungen für
Umfang, Tiefe, Sortierung & Autor gelten vor deinen Limits. Sie erfasst auch
Antworten unter Zielen, die keine Ausgangsposts sind. Verbirgt X einen Teil
eines Threads, nennt der Status, wie viele Antworten X verbirgt. Die anderen
Werte von `collectionStrategy` wechseln nie den Modus.

Ein Abdeckungswert in den Diagnosen beweist nicht, dass X keine weiteren
Antworten hat. Limits, fehlende Daten oder Fehler können einen Run unvollständig
lassen.

#### Direkte Antworten

Nutze `collectionStrategy: "replies"` für direkte Antworten in der Reihenfolge
von X. Die Strategie unterstützt gespeicherte Cursor.

#### Konversationssuche

Nutze `collectionStrategy: "conversationSearch"` für eine breite Abdeckung der
Konversation.

#### Vollständiger Thread-Kontext

Nutze `collectionStrategy: "thread"`, um den Kontext der Quellkonversation zu
lesen. Setze `includeOriginalPost: true`, um den Ausgangspost als Tiefe 0 zu
behalten.

#### Ausgeblendete Antworten

Die Standardstrategie `auto` ergänzt die Antworten, die der Autor des Posts
ausgeblendet hat. Jede davon ist ein Datensatz mit `resultType: "hiddenReply"`
zum üblichen Preis pro Datensatz & zählt zu `maxItems`. Der Run liest sie nur,
wenn der Post mehr Antworten zählt, als X anzeigt, also kostet ein Post ohne
ausgeblendete Antworten nichts extra. Setze `includeHiddenReplies: false`, um
sie wegzulassen.

Nutze `collectionStrategy: "hiddenReplies"` nur für die ausgeblendeten
Antworten. X listet die ältesten zuerst, zusammen mit den Antworten darauf. Ein
Post ohne ausgeblendete Antworten liefert keine Datensätze.

### Direkte & verschachtelte Antworten steuern

Mit `scope` wählst du die Form des Ergebnisses.

| Wert     | Ergebnis                                                  |
| -------- | --------------------------------------------------------- |
| `direct` | Behält Antworten der Tiefe 1                              |
| `nested` | Behält Antworten auf Antworten ab Tiefe 2                 |
| `all`    | Behält jede verfügbare direkte und verschachtelte Antwort |

Mit `maxDepth` begrenzt du die Verschachtelung. Lässt X einen Vorgänger in der
Konversation aus, kann der Link zum übergeordneten Post fehlen. Der Actor behält
die beste verfügbare Tiefe.

### Sortierung

Nutze `sort` mit diesen Werten.

- `relevance` behält die Quellreihenfolge von X
- `latest` sortiert die neuesten zuerst
- `oldest` sortiert die ältesten zuerst
- `likes` sortiert die meisten Gefällt-mir-Angaben zuerst

Die X-Suche zählt bei manchen älteren Antworten zu wenige Gefällt-mir-Angaben,
also können Runs mit `likes` diese Antworten übersehen.

Profilziele sammeln die angefragte Zahl eindeutiger, gefilterter Ergebnisse &
sortieren sie dann. Post-Ziele behalten die globale Sortierung.

Die Kompatibilitätsaliasse `sortBy` & `queryType` funktionieren weiter.

### Antwortfilter

Alle unterstützten Filter laufen, bevor der Actor ins Dataset schreibt.

#### Text- & Entitätsfilter

| Eingabe          | Verhalten                                      |
| ---------------- | ---------------------------------------------- |
| `exactPhrase`    | Verlangt 1 exakte Phrase                       |
| `anyWords`       | Verlangt mindestens 1 Wort oder 1 Phrase       |
| `excludeWords`   | Entfernt passende Wörter oder Phrasen          |
| `keywordInclude` | Alias, wird mit `anyWords` zusammengeführt     |
| `keywordExclude` | Alias, wird mit `excludeWords` zusammengeführt |
| `hashtags`       | Verlangt mindestens 1 Hashtag                  |
| `cashtags`       | Verlangt mindestens 1 Cashtag                  |
| `mentioning`     | Verlangt eine @-Erwähnung                      |

#### Autoren- & Sprachfilter

| Eingabe                 | Verhalten                                            |
| ----------------------- | ---------------------------------------------------- |
| `fromUser`              | Behält Antworten von 1 Autor                         |
| `toUser`                | Behält Antworten an 1 Nutzernamen                    |
| `lang`                  | Behält 1 X-Sprachcode                                |
| `verifiedOnly`          | Verlangt irgendein öffentliches Verifizierungssignal |
| `blueVerifiedOnly`      | Verlangt eine Verifizierung über X Premium           |
| `excludeOriginalAuthor` | Entfernt Selbstantworten des Quellautors             |

#### Interaktionsfilter

Nutze `minLikes`, `minReplies`, `minRetweets`, `minQuotes`, `minViews` &
`minBookmarks`. Der Alias `minFaves` entspricht `minLikes`.

#### Medien- & Zeitfilter

- Setze `hasMediaOnly: true` für Antworten mit öffentlichen Medien.
- Setze `mediaType` auf `any`, `image`, `video`, `gif` oder `link`.
- Setze `mediaType` auf `none` für Textantworten ohne Medien oder Links.
- Setze `since` für einen inklusiven Startzeitpunkt.
- Setze `until` für einen exklusiven Endzeitpunkt.
- Nutze `sinceTime` & `untilTime` als Kompatibilitätsaliasse.

## Ausgabe

Jeder Antwort-Datensatz ist ein JSON-Objekt. Die Schemas für Dataset &
Run-Report beschreiben jedes Feld, also können KI-Agents Datensätze ohne Raten
lesen. Exportiere das Dataset als JSON, CSV, Excel oder HTML.

### Autorenmetadaten

Verschachtelte Autoren folgen dem öffentlichen Profilschema. Es deckt Identität,
Zähler, Verifizierung, Verfügbarkeit, berufliche Daten & Profil-Bios ab.

Die flache Ausgabe ergänzt `authorId`, `authorUsername`, `authorName`,
`authorFollowers`, `authorFollowing` & `authorVerified`.

### Medienmetadaten

Medien decken Verfügbarkeit, Geometrie, Tags & Video-Varianten ab. Dazu kommen
die Aktionen `watchNowUrl` & `visitSiteUrl`.

Die flache Ausgabe ergänzt `mediaUrls`.

### Beispielausgabe

Ein gekürzter Antwort-Datensatz sieht so aus.

```json
{
  "resultType": "reply",
  "id": "1881423000000000000",
  "url": "https://x.com/example/status/1881423000000000000",
  "text": "Thanks for sharing this update.",
  "createdAt": "2026-08-09T12:00:00.000Z",
  "lang": "en",
  "conversationId": "1881422000000000000",
  "rootTweetId": "1881422000000000000",
  "parentReplyId": "1881422000000000000",
  "depth": 1,
  "isDirectReply": true,
  "likeCount": 42,
  "replyCount": 3,
  "retweetCount": 5,
  "quoteCount": 2,
  "viewCount": 1000,
  "bookmarkCount": 7,
  "authorUsername": "example",
  "authorName": "Example User",
  "authorFollowers": 1000,
  "authorVerified": false,
  "mediaUrls": ["https://pbs.twimg.com/media/example.jpg"],
  "sourceTweetId": "1881422000000000000",
  "sourceTarget": "1881422000000000000"
}
```

Die Beispielwerte dienen nur zur Veranschaulichung. Echte Runs liefern
Live-Daten.

### Ausgabemodi

Wähle, wie breit jeder Datensatz im Dataset ist.

#### Kompakt

Setze `outputMode: "compact"` für ein schmaleres Dataset. Es behält Felder zu
Text, Konversation, Autor, Interaktion & Medien.

#### Vollständig

Setze `outputMode: "full"`, um jedes unterstützte öffentliche Feld zu behalten.

#### Rich

Setze `outputMode: "rich"` für die meisten Daten pro Datensatz. Rich-Datensätze
behalten jede Spalte des Modus full & ergänzen am Ende `hasCommunityNotes`,
`quotedTweetPermalink`, `unavailableAuthorId` & `sourceUser` für Medien.

#### Raw

Setze `outputMode: "raw"`, um unter `raw` einen bereinigten Quell-Snapshot
hinzuzufügen.

#### Verschachtelt oder flach

Das Standardlayout `flat` behält verschachtelte Objekte & ergänzt Autorenfelder
für Tabellen. Setze `outputPreset: "nested"`, um die zusätzlichen flachen Felder
wegzulassen.

#### Feldnamen

Setze `fieldStyle` auf `source`, `camelCase` oder `snake_case`. Der Actor
vermeidet es, kollidierende Quellschlüssel zu überschreiben.

## Ausgabespalten

8 Eingaben formen jeden Datensatz, nachdem der Run ihn gelesen hat. Sie führen
keinen Code aus & ändern den Preis nicht.

| Feld                | Was es bewirkt                                                                        |
| ------------------- | ------------------------------------------------------------------------------------- |
| `fields`            | Behält nur diese Felder, in der Reihenfolge & Schreibweise, die du angibst            |
| `omitFields`        | Entfernt diese Felder & behält den Rest                                               |
| `renameFields`      | Verschiebt ein Feld in eine Spalte mit neuem Namen                                    |
| `flatten`           | Macht aus jedem verschachtelten Objekt Spalten auf oberster Ebene                     |
| `fillMissingFields` | Füllt ein behaltenes Feld, das einem Datensatz fehlt, mit `null`. Standardmäßig aktiv |
| `joinFields`        | Macht aus jeder dieser Listen 1 Textwert                                              |
| `joinSeparator`     | Text zwischen verbundenen Einträgen. Standard ist ein Komma & ein Leerzeichen         |
| `constantFields`    | Fügt eine Spalte mit demselben Text in jedem Datensatz hinzu                          |

- Nutze einen Punkt für ein Feld innerhalb eines Objekts, etwa `author.id`.
  Groß- und Kleinschreibung & Unterstriche spielen keine Rolle.
- Jeder Datensatz behält seine `id`.
- Mit `fields` kommt ein Feld, das einem Datensatz fehlt, als `null` an. Jeder
  Datensatz hat dann dieselben Spalten.
- Ein falscher Feldname stoppt den Run vor dem Lesen & kostet nichts.
- Lassen sich die Namen nicht prüfen, liest der Run weiter & listet nicht
  gefundene Namen am Ende.
- Der Run ignoriert eine Map-Funktion oder einen jq-Filter, die für einen
  anderen Actor geschrieben sind.

Nenne eine berechnete Spalte in `fields` oder `renameFields`, um sie
hinzuzufügen.

| Spalte              | Formel                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------------ |
| `totalEngagement`   | `likeCount` + `replyCount` + `retweetCount` + `quoteCount`. Ein fehlender Zähler addiert 0 |
| `engagementRate`    | `totalEngagement` × 100 ÷ die `followers` des Autors, auf 4 Nachkommastellen               |
| `engagementPerView` | `totalEngagement` × 100 ÷ `viewCount`, auf 4 Nachkommastellen                              |

`totalEngagement` ist `null` bei einem Datensatz ohne diese Zähler. Eine Rate
ist `null`, wenn ihr Divisor fehlt oder 0 ist.

## Run-Optionen

### Limits, Abrechnung & Fortsetzung

`maxItems` begrenzt die gelieferten Datensätze im ganzen Run.
`maxItemsPerTarget` begrenzt jeden Post oder jedes Profil.

1 Run kann viele Ziele lesen. Limits, Deduplizierung, Zuordnung & Abrechnung
bleiben über alle Ziele exakt.

Der Actor entfernt doppelte Datensätze vor Ausgabe & Abrechnung. Setze
`dedupeAcrossTargets: false`, um doppelte Datensätze aus verschiedenen Zielen zu
behalten.

Lies nach einem Run, den ein Seitenlimit gestoppt hat, `next-cursors` aus dem
Standard-Key-Value-Store. Übergib 1 Cursor über `startCursor`, um dieses Ziel
fortzusetzen.

#### Apify-Timeout

Das Standard-Timeout von Apify ist `0`, also haben Runs kein Zeitlimit. Der
Actor läuft weiter, bis er die Obergrenze erreicht oder keine passenden Daten
mehr findet. Du kannst trotzdem ein festes Apify-Timeout setzen. Dann bedeutet
`completionReason: "deadline_reached"`, dass dieses Limit nahe ist. Der Actor
speichert Antworten & den Bericht & beendet sich dann sauber vor dem Limit. Jede
gelieferte Antwort kostet nur einmal. Nicht abgeschlossene Ziele lassen sich
fortsetzen.

### API-Beispiele

Jedes Beispiel startet X Reply Scraper von Xquik & liefert die Dataset-Einträge.
Ersetze `<APIFY_API_TOKEN>` durch deinen Apify-API-Token.

#### JavaScript

```javascript
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: '<APIFY_API_TOKEN>' });
const run = await client
  .actor('xquik/x-reply-scraper')
  .call({
    tweetIds: ['2082577277246972300'],
    collectionStrategy: 'auto',
    scope: 'all',
    maxItems: 100,
  });

const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
```

#### Python

```python
from apify_client import ApifyClient

client = ApifyClient("<APIFY_API_TOKEN>")
run = client.actor("xquik/x-reply-scraper").call(run_input={
    "tweetIds": ["2082577277246972300"],
    "collectionStrategy": "auto",
    "scope": "all",
    "maxItems": 100,
})

for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
```

#### cURL

```bash
actor=xquik~x-reply-scraper
curl "https://api.apify.com/v2/acts/$actor/run-sync-get-dataset-items" \
  -X POST \
  -H "Authorization: Bearer <APIFY_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"tweetIds":["2082577277246972300"],"maxItems":100}'
```

### Automatisierung & Integrationen

Starte X Reply Scraper von Xquik über Apify-Zeitpläne, Webhooks oder
API-Clients. Verbinde ihn mit Make, Zapier, n8n, Google Sheets oder
Cloud-Speicher. Agents können ihn über den
[Apify-MCP-Server](https://docs.apify.com/platform/integrations/mcp) aufrufen.

Berechtigte Agent-Workflows können auch
[x402](https://docs.apify.com/integrations/x402) oder
[Skyfire](https://docs.apify.com/integrations/skyfire) nutzen.

Xquik bietet außerdem 53 Dashboard-Tools, eine REST-API, signierte Webhooks &
einen MCP-Server.

### Bereit für KI-Agents & MCP

Starte X Reply Scraper von Xquik über Apify MCP, API-Clients, x402 oder Skyfire.

- Eingeschränkte Berechtigungen schützen andere Daten in deinem Apify-Account.
- Pay-per-Event-Abrechnung koppelt die Kosten an gelieferte Ergebnisse.
- Der Standby-Modus bleibt aus, damit Agent-Zahlungen funktionieren.
- Typisierte Schemas beschreiben Antworten, Run-Reports & Fortsetzungs-Cursor.
- Begrenzte Standardwerte verhindern versehentliche Agent-Runs ohne Limit.
- Stabile Modi `camelCase` & `snake_case` erleichtern das Verketten von Tools.
- Diagnose-Datensätze enthalten einen Status, eine Meldung & einen Schritt zur
  Behebung.
- Run-Reports enthalten exakte Ergebnisse, Stoppgründe & Kostenschätzungen.

### Immer den neuesten Build verwenden

Wähle `latest` für jeden Run, um alle veröffentlichten Fixes zu erhalten.

Gibst du keinen Build an, nutzt Apify den Standard `latest` dieses Actors.
Console-Runs & Standard-API-Beispiele übernehmen diesen Standard.

Gespeicherte Tasks können den Actor-Standard überschreiben. Zeitpläne &
Task-Integrationen übernehmen diese Wahl. Setze jede Überschreibung auf
`latest`.

Apify leitet exakte Build-Nummern nicht auf `latest` um. Ersetze fixierte
Nummern durch `latest`. Nutze exakte Builds nur für vorübergehende Rollbacks.

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

## FAQ

Antworten auf häufige Fragen, danach, wo du Hilfe bekommst.

### Wie scrape ich die Kommentare unter einem Post?

Füge die Post-URL in `startUrls` ein & klicke auf Start. X nennt Kommentare
Antworten, also ist jeder Kommentar 1 Antwort-Datensatz.

### Kann ich Antworten von vielen Posts auf einmal scrapen?

Ja. Füge viele Post-URLs oder Post-IDs in 1 Run ein. Jede Antwort behält den
Quellpost in `sourceTarget`.

### Sind verschachtelte Antworten enthalten?

Ja. Der Standardwert von `scope` sammelt direkte & verschachtelte Antworten.
Setze `scope` auf `direct`, wenn du nur Antworten auf den Post willst.
`maxDepth` begrenzt, wie tief ein Run geht.

### Liefert er Antworten, die der Autor ausgeblendet hat?

Ja. Die Standardstrategie `auto` ergänzt sie als `hiddenReply`-Datensätze. Setze
`includeHiddenReplies: false`, um sie zu überspringen.

### Kann ich Antworten nach Gefällt-mir-Angaben oder Datum sortieren?

Ja. Setze `sort`, um Antworten nach Gefällt-mir-Angaben zu ordnen oder die
neuesten oder ältesten zuerst zu listen.

### Kann ich Antworten als CSV oder Excel exportieren?

Ja. Exportiere das Dataset als CSV, Excel, JSON oder HTML. Die flache Ausgabe
enthält 1 Antwort pro Zeile mit den Autorenfeldern daneben.

### Kann ich die Antworten eines Nutzers statt die eines Posts scrapen?

Ja. Füge eine Profil-URL oder einen Nutzernamen ein. Der Run liest die
Antwort-Timeline dieses Nutzers.

### Brauche ich einen X-API-Schlüssel oder einen Login?

Nein. Du brauchst weder einen X-API-Schlüssel noch einen Login oder
Zugangsdaten. X Reply Scraper von Xquik fragt nie nach deinem X-Passwort, deinen
Cookies oder Tokens.

### Ist es legal, Antworten auf X zu scrapen?

X Reply Scraper von Xquik sammelt öffentliche Antworten & umgeht keine
geschützten Accounts. Sammle nur öffentliche Daten. Befolge geltende Gesetze &
Plattformregeln.

Antwort-Datasets können personenbezogene Daten enthalten. Wähle einen
rechtmäßigen Zweck. Speichere Daten so kurz wie möglich. Schütze Exporte.
Bearbeite Lösch- & Auskunftsanfragen, wo es vorgeschrieben ist. Hol dir bei
Unsicherheit qualifizierten Rechtsrat.

### Warum liefert mein Run weniger Antworten, als der Post anzeigt?

Verbirgt X einen Teil eines Threads, nennt der Status, wie viele Antworten X
verbirgt. `reply_reach` in `stopCauses` bedeutet, dass X nur einen Teil eines
Threads geliefert hat. Auch Filter, Deduplizierung, `scope`, `maxDepth` & deine
Limits senken die Zahl.

### Kann ich die API, Zeitpläne & Integrationen nutzen?

Ja. Im [API-Tab](https://apify.com/xquik/x-reply-scraper/api) findest du
Beispiele für Python, JavaScript & cURL. Nutze
[Zeitpläne](https://docs.apify.com/platform/schedules) von Apify, um X Reply
Scraper von Xquik per Cron zu starten. Er verbindet sich auch mit Make, Zapier,
n8n & Google Sheets.

### Wo bekomme ich Hilfe?

Öffne im [Tab Issues](https://apify.com/xquik/x-reply-scraper/issues) ein Issue
mit der Run-ID.

### Kann ich eine individuelle Lösung bekommen?

Ja. Beschreibe im [Tab Issues](https://apify.com/xquik/x-reply-scraper/issues),
was du brauchst. Xquik bietet außerdem ein Dashboard, eine REST-API, einen
MCP-Server & Webhooks. Die Website von Xquik findest du in seinem
[Apify-Profil](https://apify.com/xquik).
