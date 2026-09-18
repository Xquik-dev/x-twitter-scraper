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
den umfassendsten X-Daten, und X Reply Scraper sammelt Antworten, Kommentare
& ganze Unterhaltungen. Jeder andere Apify Actor berechnet, bevor gefiltert
oder dedupliziert wird. Xquik berechnet nur für gelieferte, eindeutige,
filterkonforme Ergebnisse.

Scrape X-(Twitter-)Antworten für **$0.00015 pro gelieferten Datensatz auf
jedem Apify-Plan**. Füge Beitrags-URLs, Tweet-IDs, Profil-URLs oder
Nutzernamen ein. Exportiere Antworten, Konversationen, Autoren,
Interaktionen, Entitäten und Medien-URLs. Apify berechnet deine
Plattformnutzung separat. Kein X-Login erforderlich.

Filter laufen vor den Dataset-Schreibvorgängen. Du zahlst nur für gelieferte
Datensätze.

>

## Unvollständige Extraktion

Eine unterbrochene Extraktion schreibt eine kostenlose `partial`-Diagnose.
Verfügbare Ergebnisse bleiben erhalten. Lies `availableResults`,
`failedTargets`, `retryable` und `nextAction`, bevor du es erneut versuchst.
Ein erfolgreicher Actor-Abschluss bestätigt die Lieferung, nicht die
vollständige Extraktion.

Xquik ist ein unabhängiger Drittanbieter-Dienst. Nicht verbunden mit X Corp.

> „Twitter" und „X" sind Marken von X Corp.

## Was macht dieser Twitter-Antworten-Scraper?

X Reply Scraper sammelt öffentliche Antworten und Kommentar-Konversationen.
Er verarbeitet einzelne Beiträge, Massenlisten von URLs, Tweet-IDs und
Antwort-Timelines von Nutzern.

Nutze ihn für Sentiment-Analyse, Kundenfeedback, Community-Recherche,
Antwort-Ranking, Lead-Erkennung, Moderationsprüfung und
Konversations-Datasets.

### Verhalten bei der Antworten-Erfassung

- Der Auto-Modus wechselt bei unvollständigen direkten Ergebnissen zur
  Konversationssuche.
- Automatische Tweet-Antwortseiten fordern bis zu 300 Datensätze an.
- 4 Strategien decken direkte Antworten, Suche und Thread-Kontext ab.
- Massen-Eingaben akzeptieren Beitrags-URLs, Tweet-IDs, Profile und
  Nutzernamen.
- Profilziele kombinieren Timeline und Autorensuche, wenn beides zutrifft.
- Filter und Duplikatentfernung laufen vor der Abrechnung.
- Die Ausgabe unterstützt 4 Sortiermodi, 3 Detailstufen und 3 Feldstile.
- Jede Antwort behält ihr Quellziel, übergeordnete IDs, die Wurzel-ID und
  die Tiefe.
- Fortsetzungs-Cursor unterstützen Backfills und geplante Runs.
- Leere Runs schreiben 1 kostenlosen Datensatz in `diagnostics`.
- Seiten- und Zielprotokolle enthalten `fetchDurationMs`,
  `processingDurationMs`, `pushDurationMs`, `statusDurationMs`,
  `fullPageDurationMs` und `fullTargetDurationMs`, ohne Eingaben zu
  wiederholen.
- Checkpoints erhalten akzeptierte Antworten, Timing und Fehler nach
  Neustarts.

### Immer den aktuellsten Build verwenden

Wähle `latest` für jeden Run, um alle veröffentlichten Fixes zu erhalten.

Wenn kein Build angegeben ist, nutzt Apify den `latest`-Standard dieses
Actors. Console-Runs und Standard-API-Beispiele übernehmen diesen Standard.

Gespeicherte Tasks können den Actor-Standard überschreiben. Zeitpläne und
Task-Integrationen übernehmen diese Wahl. Halte jede Überschreibung auf
`latest`.

Apify leitet fixierte Build-Nummern nicht automatisch auf `latest` um.
Ersetze fixierte Nummern durch `latest`. Nutze exakte Builds nur für
vorübergehende Rollbacks.

## Schnellstart

Das erste Formular zielt auf eine verifizierte öffentliche Konversation. Es
gibt bis zu 25 vollständige, flache Datensätze über maximal 10 Seiten
zurück. Der Auto-Modus durchsucht standardmäßig die gesamte Konversation.
Deduplizierung und Quellzuordnung bleiben aktiviert.

### Antworten aus einer Beitrags-URL scrapen

```json
{
  "startUrls": [{ "url": "https://x.com/OpenAI/status/2082577277246972300" }],
  "maxItems": 100
}
```

### Antworten aus Tweet-IDs scrapen

```json
{
  "tweetIds": ["2082577277246972300", "2083148725367783580"],
  "maxItemsPerTarget": 100,
  "maxItems": 10000
}
```

### Die vollständige verschachtelte Konversation sammeln

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

Beispielwerte dienen nur der Veranschaulichung. Antworten spiegeln
Quelldaten zur Laufzeit wider.

## KI-Agent- & MCP-Kompatibilität

Führe diesen Actor über Apify MCP, API-Clients, x402 oder Skyfire aus.

- Begrenzte Berechtigungen schützen nicht betroffene Apify-Kontodaten.
- Pay-per-Event-Abrechnung unterstützt deterministische, ergebnisbasierte
  Kosten.
- Der Standby-Modus bleibt für die Kompatibilität mit agentenbasierten
  Zahlungen deaktiviert.
- Typisierte Schemas legen Antworten, Run-Reports und
  Fortsetzungs-Cursor offen.
- Begrenzte Standardwerte verhindern versehentliche, unbegrenzte
  Agent-Runs.
- Stabile `camelCase`- und `snake_case`-Modi vereinfachen die
  Tool-Verkettung.
- Diagnose-Datensätze enthalten einen Status, eine Meldung und eine
  Empfehlung zur Behebung.
- Run-Reports enthalten exakte Ergebnisse, Abbruchgründe und
  Kostenschätzungen.

## Antwortziele & Eingabe-Aliasse

Nutze die folgenden primären Felder.

| Eingabe        | Zweck                                              |
| -------------- | ---------------------------------------------------- |
| `startUrls`    | Gemischte X-Beitrags- und Profil-URLs                 |
| `tweetIds`     | Numerische Beitrags-IDs                               |
| `usernames`    | Profil-Timelines mit Autorensuche                     |
| `startCursor`  | Setzt ein Ziel von einem gespeicherten Quell-Cursor fort |

Das visuelle Formular zeigt nur kanonische Steuerelemente.
Kompatibilitätsaliasse bleiben in JSON, API, SDK, Automatisierung und
gespeicherten Task-Eingaben verfügbar. Explizite kanonische und
Alias-Felder behalten ihre bestehende Auflösungsreihenfolge, wenn sie
kombiniert werden.

Kompatibilitätsaliasse akzeptieren gängige Eingaben von Wettbewerbern:

- URL-Aliasse: `urls`, `tweetUrls`, `postUrls`, `profileUrls`
- ID-Aliasse: `conversationIds`, `postIds`, `ids`, `tweetId`, `id`
- Nutzernamen-Aliasse: `twitterHandles`, `screenname`
- Aliasse für die globale Obergrenze: `maxResults`, `max_results`,
  `resultsLimit`, `maxReplies`
- Aliasse pro Ziel: `maxRepliesPerTweet`, `maxCommentsPerPost`
- Such-Alias: `useSearch`
- Aliasse für verschachtelte Antworten: `includeNestedReplies`,
  `includeRepliesOfReplies`
- Alias für den ursprünglichen Beitrag: `includeOriginalTweet`
- Ausgabe-Aliasse: `outputVariant`, `includeRaw`

Fehlerhafte oder nicht unterstützte Ziele lassen den Actor nicht
fehlschlagen. Der Run gibt eine verwertbare Diagnose zurück, wenn kein
gültiges Ziel übrig bleibt.

Profilziele kombinieren Cursor-Paginierung mit Autorensuche. Der Actor
entfernt doppelte Datensätze vor Ausgabe und Abrechnung. Gespeicherte
Legacy-Cursor behalten die Standard-Paginierung.

## Abdeckungsstrategien

### Auto complete

Nutze `collectionStrategy: "auto"` für die meisten Aufgaben. Vollständige
oder verschachtelte Bereiche beginnen mit vollständiger Antworten-
Extraktion. Bereich, Tiefe, Sortierung und Autoren-Steuerelemente greifen
vor Antwortlimits. Die Extraktion umfasst Nachkommen unterhalb von
Nicht-Wurzel-Zielen. Bei unvollständiger Extraktion bleiben Datensätze
erhalten, bevor Konversationssuche & direkte Antworten versucht werden.
Direkte Bereiche fallen bei Bedarf auf die Suche zurück. Unvollständige
Seiten behalten ihre Fortsetzung. Explizite Strategien wechseln nie.

Die diagnostische Abdeckungsschwelle beweist keine vollständige
Quellerschöpfung. Stockende Seiten, Limits, fehlende Daten oder Fehler
lassen die Wiederherstellung unvollständig.

### Direkter Antworten-Endpunkt

Nutze `collectionStrategy: "replies"`, um X' Antworten-Timeline zu
erzwingen. Dies behält die Quellreihenfolge bei und unterstützt Cursor.

### Konversationssuche

Nutze `collectionStrategy: "conversationSearch"` für breite
Konversationsabdeckung. Der Actor sucht nach
`conversation_id:<Tweet-ID>`.

### Vollständiger Thread-Kontext

Nutze `collectionStrategy: "thread"`, um den Quell-Konversationskontext zu
lesen. Setze `includeOriginalPost: true`, um den Wurzelbeitrag als Tiefe 0
zu behalten.

## Steuerung direkter & verschachtelter Antworten

Nutze `scope`, um die Ergebnisform zu wählen.

| Wert     | Ergebnis                                              |
| -------- | -------------------------------------------------------- |
| `direct` | Behält Antworten der Tiefe 1                              |
| `nested` | Behält Antworten auf Antworten ab Tiefe 2                 |
| `all`    | Behält jede verfügbare direkte und verschachtelte Antwort |

Nutze `maxDepth`, um die Verschachtelung zu begrenzen. Übergeordnete Links
können fehlen, wenn X einen Konversations-Vorfahren auslässt. Der Actor
behält die bestmöglich verfügbare Tiefe.

## Sortierung

Nutze `sort` mit diesen Werten:

- `relevance` behält die X-Quellreihenfolge bei
- `latest` sortiert neueste zuerst
- `oldest` sortiert älteste zuerst
- `likes` sortiert nach höchster Like-Anzahl zuerst

Profilziele sammeln die angeforderte, eindeutige, gefilterte
Ergebnisanzahl, bevor sie sortiert wird. Tweet-Ziele behalten die globale
Sortierung.

Die Kompatibilitätsaliasse `sortBy` und `queryType` bleiben unterstützt.

## Antwortfilter

Alle unterstützten Filter laufen vor den Dataset-Schreibvorgängen.

### Text- & Entitätsfilter

| Eingabe          | Verhalten                              |
| ---------------- | ----------------------------------------- |
| `exactPhrase`    | Erfordert eine exakte Phrase               |
| `anyWords`       | Erfordert mindestens 1 Wort oder Phrase    |
| `excludeWords`   | Entfernt passende Wörter oder Phrasen      |
| `keywordInclude` | Alias, zusammengeführt mit `anyWords`      |
| `keywordExclude` | Alias, zusammengeführt mit `excludeWords`  |
| `hashtags`       | Erfordert mindestens 1 Hashtag             |
| `cashtags`       | Erfordert mindestens 1 Cashtag             |
| `mentioning`     | Erfordert eine @-Erwähnung                 |

### Autoren- & Sprachfilter

| Eingabe                  | Verhalten                                  |
| ------------------------- | ---------------------------------------------- |
| `fromUser`                | Behält einen Antwort-Autor                      |
| `toUser`                  | Behält Antworten an einen Nutzernamen           |
| `lang`                    | Behält einen X-Sprachcode                       |
| `verifiedOnly`            | Erfordert ein öffentliches Verifizierungssignal |
| `blueVerifiedOnly`        | Erfordert eine X-Premium-Verifizierung          |
| `excludeOriginalAuthor`   | Entfernt Selbstantworten des Quellautors        |

### Interaktionsfilter

Nutze `minLikes`, `minReplies`, `minRetweets`, `minQuotes`, `minViews` und
`minBookmarks`. Der Alias `minFaves` verweist auf `minLikes`.

### Medien- & Zeitfilter

- Setze `hasMediaOnly: true` für Antworten mit öffentlichen Medien.
- Setze `mediaType` auf `any`, `image`, `video`, `gif` oder `link`.
- Setze `since` für einen einschließenden Startzeitstempel.
- Setze `until` für einen ausschließenden Endzeitstempel.
- Nutze `sinceTime` und `untilTime` als Kompatibilitätsaliasse.

## Grenzen, Abrechnung & Fortsetzung

`maxItems` begrenzt gelieferte Datensätze über den gesamten Run. Über
`maxItemsPerTarget` wird jeder Beitrag oder jedes Profil begrenzt.

Unabhängige Ziele laufen gleichzeitig. Jedes Ziel behält eine geordnete
Cursor-Paginierung. Dataset-Schreibvorgänge halten Obergrenzen,
Deduplizierung, Zuordnung und Abrechnung atomar.

Der Actor entfernt Duplikate vor der Abrechnung. Setze
`dedupeAcrossTargets: false`, um doppelte Datensätze aus verschiedenen
Zielen zu behalten.

Lies nach einem seitenbegrenzten Run `next-cursors` aus dem Standard-
Key-Value-Store. Übergib einen Cursor über `startCursor`, um dieses Ziel
fortzusetzen.

## Ausgabefelder

Dataset- und Run-Report-Schemas beschreiben jedes zurückgegebene Feld.
Primitive Felder enthalten auch Beispiele für Agents und generierte
Integrationen.

Jeder vollständige Antwort-Datensatz kann diese Kernfelder enthalten:

| Feld                 | Beschreibung                                            |
| --------------------- | -------------------------------------------------------- |
| `id`                  | Antwort-ID                                                |
| `text`                | Antworttext                                               |
| `fullText`            | Langform-Antworttext                                      |
| `createdAt`           | Zeitstempel der Antwort                                   |
| `lang`                | X-Sprachcode                                              |
| `url`                 | Direkte Antwort-URL                                       |
| `conversationId`      | X-Konversations-ID                                        |
| `inReplyToId`         | Unmittelbare übergeordnete ID                             |
| `inReplyToUserId`     | ID des übergeordneten Autors                              |
| `inReplyToUsername`   | Nutzername des übergeordneten Autors                      |
| `likeCount`           | Likes                                                     |
| `replyCount`          | Untergeordnete Antworten                                  |
| `retweetCount`        | Reposts                                                   |
| `quoteCount`          | Zitate                                                    |
| `viewCount`           | Aufrufe                                                   |
| `bookmarkCount`       | Lesezeichen                                                |
| `author`              | Verfügbare öffentliche Autorenmetadaten                    |
| `media`               | Bilder, Videos, GIFs und Varianten                         |
| `entities`            | Hashtags, Cashtags, Erwähnungen, URLs und Video-Zeitmarken |
| `quoted_tweet`        | Zitierter Beitrag, sofern verfügbar                        |
| `retweeted_tweet`     | Repostierter Beitrag, sofern verfügbar                     |

Vollständige Datensätze erhalten außerdem verfügbare Quellmetadaten. Dazu
gehören `isNoteTweet`, `isReply`, `isLimitedReply`, `isQuoteStatus`,
`source`, `type`, `displayTextRange`, `contentDisclosure`,
`conversationControl`, `article`, `limitedActions`, `reactionContext`,
`card`, `communityId`, `communityNote`, `edit`, `isTranslatable`,
`noteTweet`, `place`, `postCta`, `possiblySensitive`, `previousCounts`,
`tombstone`, `unmentionedUserIds` und `viewState`.

Flache Datensätze behalten Konversationsabstammung, Quelldetails,
Ergebnistyp und Schemaversion. Siehe OpenAPI für die genauen Felder.

### Autorenmetadaten

Verschachtelte Autoren folgen dem öffentlichen Profilvertrag. Dieser deckt
Identität, Zähler, Verifizierung, Verfügbarkeit, professionelle Daten und
Profilbiografien ab.

Die flache Ausgabe ergänzt `authorId`, `authorUsername`, `authorName`,
`authorFollowers`, `authorFollowing` und `authorVerified`.

### Medienmetadaten

Medien enthalten Verfügbarkeit, Geometrie, Tags, Video-Varianten,
`watchNowUrl` und `visitSiteUrl`-Aktionen.

Die flache Ausgabe ergänzt `mediaUrls`.

## Ausgabemodi

### Kompakt

Setze `outputMode: "compact"`, um die Dataset-Breite zu reduzieren. Dies
erhält Text-, Konversations-, Autoren-, Interaktions- und Medienfelder.

### Vollständig

Setze `outputMode: "full"`, um jedes unterstützte öffentliche Feld zu
erhalten.

### Roh

Setze `outputMode: "raw"`, um einen bereinigten Quell-Snapshot unter `raw`
hinzuzufügen.

### Verschachtelt oder flach

Das Standardlayout `flat` behält verschachtelte Objekte bei und ergänzt
Autorenfelder für Tabellen. Setze `outputPreset: "nested"`, um die
zusätzlichen flachen Felder auszulassen.

### Feldbenennung

Setze `fieldStyle` auf `source`, `camelCase` oder `snake_case`. Der Actor
überschreibt keine kollidierenden Quellschlüssel.

## Diagnosen

Erfolgreiche Datendatensätze nutzen `resultType: "reply"`. Nicht-Daten-
Abschlüsse schreiben genau 1 kostenlosen Datensatz in `diagnostics` mit
einer verwertbaren Empfehlung.

Jedes Ergebnis schreibt `run-report`, auch Abbrüche ohne Eingabe und mit
ungültiger Eingabe. Das Report-Schema dokumentiert Abschluss, Abrechnung,
Fehler und gespeicherte Cursor. Das Feld `version` darin gibt die exakte
veröffentlichte Actor-Quellversion an.

Mögliche Status umfassen:

- `no-input`
- `invalid-input`
- `replies-incomplete`
- `zero-output`
- `aborted`
- `unexpected-error`

## Was kostet es?

Auf jedem Apify-Plan kostet es **$0.00015 pro geliefertem Datensatz**. Das
entspricht `$0.00015` pro Datensatz. Apify berechnet die Plattformnutzung
separat.

Xquik berechnet eine Gebühr pro geliefertem Datensatz. Diagnosen in
`diagnostics` sind kostenlos. Keine Start-, URL-, Such-, Paginierungs-,
Filter- oder Proxy-Gebühr.

Das Standard-Apify-Zeitlimit ist `0`, Runs haben also kein Zeitlimit. Der
Actor läuft weiter, bis die Obergrenze erreicht oder die verfügbaren Daten
erschöpft sind. Ein Aufrufer kann dennoch ein endliches Apify-Zeitlimit
setzen. Dann bedeutet `completionReason: "deadline_reached"`, dass dieses
konfigurierte Limit nahe ist. Der Actor reserviert die letzten 15 Sekunden
für Checkpoints, Datensätze, Reports und einen erfolgreichen Abschluss.
Bereits gesammelte Antworten bleiben geliefert und werden einmal
abgerechnet. Unvollständige Paginierung bleibt fortsetzbar.

## Öffentliche Task-Beispiele

Wähle aus 50 öffentlichen Tasks. Jeder hat eine begrenzte Eingabe und eine
passende Dataset-Ansicht. Bearbeite jeden Task vor dem Ausführen.

Starte mit diesen Beispielen:

- [Collect replies for AI agents](https://apify.com/xquik/x-reply-scraper/examples/collect-replies-for-ai-agents)
- [Build an X reply RAG dataset](https://apify.com/xquik/x-reply-scraper/examples/build-x-reply-rag-dataset)
- [Archive replies for LLM processing](https://apify.com/xquik/x-reply-scraper/examples/archive-replies-for-llm-processing)
- [Extract reply leads for CRM](https://apify.com/xquik/x-reply-scraper/examples/extract-reply-leads-for-crm)

## API-Beispiel

### JavaScript

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

### Python

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

### cURL

```bash
curl "https://api.apify.com/v2/acts/xquik~x-reply-scraper/run-sync-get-dataset-items" \
  -X POST \
  -H "Authorization: Bearer <APIFY_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"tweetIds":["2082577277246972300"],"maxItems":100}'
```

## Automatisierung & Integrationen

Führe den Actor über Apify-Zeitpläne, Webhooks, API-Clients, Make, Zapier,
n8n, Google Sheets, Cloud-Speicher oder den
[Apify-MCP-Server](https://docs.apify.com/platform/integrations/mcp) aus.

Berechtigte Agent-Workflows können auch
[x402](https://docs.apify.com/integrations/x402) oder
[Skyfire](https://docs.apify.com/integrations/skyfire) nutzen.

Xquik bietet außerdem 47 Dashboard-Tools, 129 REST-Operationen, signierte
Webhooks und einen MCP-Server.

## Verantwortungsvolle Nutzung

Sammle nur öffentliche Daten. Befolge geltende Gesetze und
Plattformregeln.

Antwort-Datasets können personenbezogene Daten enthalten. Wähle einen
rechtmäßigen Zweck. Minimiere die Aufbewahrung. Schütze Exporte. Beachte
Lösch- und Auskunftsanfragen, wo erforderlich.

Der Actor umgeht keine geschützten Accounts. Er fragt keine
X-Passwörter, Sitzungs-Cookies oder Authentifizierungs-Token von Kunden ab.

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
