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
liefert die vollständigsten X-Daten. X Follower Scraper von Xquik sammelt
Follower, gefolgte Accounts, Listenmitglieder, Abonnenten &
Community-Mitglieder. Öffentliche Benchmarks belegen, dass er unter 10
Follower-Actors der günstigste & schnellste ist. Seine Datensätze
(`outputMode: "full"`) haben 2,5-mal so viele Felder wie beim Median-Actor. Das
zeigt der [Benchmark unten](#benchmark). Die meisten anderen Apify Actors
rechnen ab, bevor sie filtern oder Duplikate entfernen. Xquik rechnet nur
gelieferte, eindeutige Ergebnisse ab, die zu deinen Filtern passen.

Scrape auf X (Twitter) Follower, gefolgte Accounts, verifizierte Follower,
Listenmitglieder, Listen-Abonnenten & Community-Mitglieder. X Follower Scraper
von Xquik kostet **ab $0.00015 pro geliefertem Profil, auf jedem Apify-Plan**.
Apify berechnet die Plattformnutzung separat. Du brauchst keinen X-Login &
Xquik verlangt keine Start- oder Suchgebühr.

> Xquik ist ein unabhängiger Drittanbieter-Dienst. Nicht verbunden mit X Corp.
> "Twitter" und "X" sind Marken von X Corp.

## Was macht X Follower Scraper?

X Follower Scraper von Xquik liefert verfügbare öffentliche Profildaten zu
Followern, gefolgten Accounts, Listen & Communities. Jeder Datensatz nennt sein
Quellziel & seine Beziehung.

### So arbeitet der Actor

- Filter & Duplikatentfernung laufen vor der Abrechnung.
- Standardmäßig erscheint ein Profil aus mehreren Zielen nur einmal & kostet
  nur einmal.
- Ein Run akzeptiert Nutzernamen, numerische IDs, URLs & Kurzpfade.
- Der Merge-Modus erfasst gemeinsame Profile, Quellen, Beziehungen &
  `overlapCount`.
- Run-Logs zeigen die Seitenzeiten in `fetchDurationMs`, `processingDurationMs`,
  `pushDurationMs`, `statusDurationMs` & `fullPageDurationMs`.
- Startet Apify einen Run neu, bleiben gelieferte Datensätze & der Fortschritt
  erhalten.

### Welche Daten kann X Follower Scraper extrahieren?

| Feld              | Beschreibung                                                      |
| ----------------- | ----------------------------------------------------------------- |
| `id`              | Numerische X-Nutzer-ID                                            |
| `username`        | Nutzername (ohne `@`)                                             |
| `name`            | Anzeigename                                                       |
| `description`     | Bio-Text                                                          |
| `followers`       | Anzahl der Follower                                               |
| `following`       | Anzahl der gefolgten Accounts                                     |
| `statusesCount`   | Anzahl aller veröffentlichten Posts                               |
| `mediaCount`      | Anzahl aller hochgeladenen Medien                                 |
| `favouritesCount` | Anzahl aller vergebenen Gefällt-mir-Angaben                       |
| `verified`        | Kombiniertes Flag für öffentliche Blue- oder Legacy-Verifizierung |
| `verifiedType`    | `blue`, `business`, `government` oder `none`                      |
| `location`        | Selbst angegebener Standort                                       |
| `url`             | Website-URL aus dem Profil                                        |
| `profilePicture`  | Avatar-URL (volle Größe)                                          |
| `coverPicture`    | Banner-URL                                                        |
| `createdAt`       | Zeitstempel der Account-Erstellung als String von X               |
| `sourceTarget`    | Nutzername oder ID, von dem dieses Profil stammt                  |
| `sourceRelation`  | Beziehung: `followers`, `following`, `list_members`, ...          |
| `sourceUrl`       | Genaue URL, auf der der Actor das Profil gefunden hat             |
| `sourceTargets`   | Alle Ziele, die im Merge-Modus zu diesem Profil passen            |
| `sourceRelations` | Alle Beziehungen, die im Merge-Modus zu diesem Profil passen      |
| `sourceUrls`      | Alle Quell-URLs, die im Merge-Modus zu diesem Profil passen       |
| `overlapCount`    | Anzahl passender Paare aus Beziehung & Ziel im Merge-Modus        |
| `resultType`      | Datensatztyp in den Ausgabemodi full & raw                        |
| `raw`             | Sicheres Quellprofil vor der Actor-eigenen Formatierung           |

Datensätze folgen dem öffentlichen Profilschema. Es deckt Identität, Zähler,
Verifizierung, Verfügbarkeit, Affiliates, berufliche Daten & Bios ab.
Quellzuordnung, Entitäten & IDs angehefteter Posts bleiben verfügbar. Die
genauen Felder stehen in OpenAPI.

Setze `outputMode: "raw"` oder `includeRaw: true`, um ein Feld `raw`
hinzuzufügen. Es enthält eine sichere Kopie des Quellprofils. Standard ist der
kompakte Modus.

`verifiedOnly` akzeptiert öffentliche Profile mit Blue- oder
Legacy-Verifizierung. Widersprechen sich Quell-Flags, gewinnt der echte
Verifizierungsstatus.

Datensätze enthalten nie Angaben, die nur den Betrachter betreffen. Xquik
entfernt Flags für Folgen, Blockieren, Stummschalten, Direktnachrichten,
Mitteilungen & Ähnliches. Auch die Raw-Ausgabe enthält sie nicht.

## Anwendungsfälle

- Reichere Leads an & baue Forschungsdatasets mit mehr Feldern pro Profil. Am
  2026-09-29 hatte unsere Median-Zeile (`outputMode: "full"`) 38 Felder. Das ist
  das 2,5-Fache des Medians von 9 anderen Actors.
- Exportiere Follower von Wettbewerbern für die Lead-Recherche.
- Vergleiche die Zielgruppen deines Accounts, deiner Wettbewerber & öffentlicher
  Personen.
- Filtere nach Follower-Zahl & Verifizierung, um passende Profile zu finden.
- Exportiere Mitglieder von X-Communities.
- Baue öffentliche Datasets sozialer Netzwerke für die Forschung.
- Segmentiere Follower nach Stichwort in der Bio, Standort oder Profiltyp.

## Wie scrape ich Follower-Daten mit X Follower Scraper?

1. Öffne X Follower Scraper von Xquik in der Apify Console.
2. Füge Profil-, Listen- oder Community-URLs, X-Nutzernamen oder numerische IDs
   hinzu.
3. Wähle eine Beziehung, etwa `followers` oder `verified_followers`.
4. Setze `maxItems` & die Profilfilter, die du brauchst.
5. Starte den Run.
6. Exportiere das Dataset als JSON, CSV, Excel oder HTML.

Die Eingaben unten decken häufige Aufgaben ab.

### Profil- oder Listen-URLs einfügen

Füge Profil-, Listen- oder Community-URLs ein. Jede URL legt die Beziehung
fest, die der Actor scrapt:

```json
{
  "startUrls": [
    { "url": "https://x.com/nasa/followers" },
    { "url": "https://x.com/spacex/verified_followers" },
    { "url": "https://x.com/elonmusk/following" },
    { "url": "https://x.com/i/lists/1748648376080666720/members" },
    { "url": "https://x.com/i/communities/1493446837214187523/members" }
  ],
  "maxItems": 5000
}
```

### Viele Nutzernamen auf einmal

`twitterHandles` ist eine Kurzform für viele `/<handle>/followers`-Ziele.
Nutzernamen funktionieren mit oder ohne `@`:

```json
{
  "twitterHandles": ["elonmusk", "nasa", "openai"],
  "relation": "followers",
  "maxItems": 1000
}
```

`relation` legt fest, was der Actor für jeden Nutzernamen scrapt. Nutze
`followers`, `following` oder `verified_followers`.

Dieselbe Eingabe akzeptiert auch `username`, `usernames` & `user_names` als
Aliasse.

### Runs mit mehreren Beziehungen

Setze `relations`, um mehrere Beziehungen für dieselben Nutzernamen zu lesen:

```json
{
  "usernames": ["nasa"],
  "relations": ["followers", "following"],
  "maxItems": 1000
}
```

Auch Booleans wie `getFollowers`, `getFollowing`, `getVerifiedFollowers`,
`getListMembers`, `getListFollowers` & `getCommunityMembers` funktionieren.

### Nach numerischen Nutzer-, Listen- oder Community-IDs scrapen

```json
{
  "userIds": ["44196397"],
  "listIds": ["1748648376080666720"],
  "communityIds": ["1493446837214187523"],
  "relation": "followers",
  "maxItemsPerTarget": 500,
  "maxItems": 1500
}
```

Numerische Nutzer-IDs akzeptieren auch die Aliasse `twitterUserIds` &
`user_ids`.

`relation` gilt für numerische Nutzer-IDs. Listen-IDs liefern standardmäßig
Mitglieder. Community-IDs liefern immer Mitglieder. `maxItemsPerTarget`
verhindert, dass das erste große Ziel `maxItems` aufbraucht.

### Filtern, bevor du zahlst

Füge Filter hinzu, damit nur passende Profile in dein Dataset kommen:

```json
{
  "twitterHandles": ["openai"],
  "relation": "followers",
  "minFollowers": 1000,
  "verifiedOnly": true,
  "verifiedType": "business",
  "minStatuses": 100,
  "usernameContains": "ai",
  "bioContains": "founder, CEO",
  "locationContains": "San Francisco",
  "maxItems": 500
}
```

Der Actor prüft eventuell mehr Profile, als er schreibt. Du zahlst nur für
Datensätze, die jeden Filter bestehen & in dein Dataset kommen.

Trenne Alternativen für `bioContains` mit Kommas oder Zeilenumbrüchen. Ein
Profil besteht, wenn seine Bio einen der Begriffe enthält. Groß- &
Kleinschreibung spielen keine Rolle.

### Zielgruppen-Überschneidungen finden

Nutze den Merge-Modus, um Wettbewerber, Listen, Communities oder
Beziehungstypen zu vergleichen:

```json
{
  "twitterHandles": ["openai", "anthropicai", "GoogleDeepMind"],
  "relation": "followers",
  "dedupeMode": "merge",
  "maxItemsPerTarget": 5000,
  "maxItems": 15000
}
```

Die Ausgabe hat 1 Datensatz pro eindeutigem Profil. Gemeinsame Profile
enthalten `sourceTargets`, `sourceRelations`, `sourceUrls`, `sourceTargetKeys` &
`overlapCount`. Sortiere nach `overlapCount` oder exportiere die Datensätze als
CSV. Halte `maxItems` hoch genug, damit jedes Ziel Datensätze beiträgt. Mit
`maxItemsPerTarget` legst du die Tiefe pro Account fest.

### Akzeptierte URL-Formen

| URL                                         | Beziehung                                   |
| ------------------------------------------- | ------------------------------------------- |
| `https://x.com/<handle>/followers`          | `followers`                                 |
| `https://x.com/<handle>/verified_followers` | `verified_followers`                        |
| `https://x.com/<handle>/following`          | `following`                                 |
| `https://x.com/<handle>`                    | Standard-`relation` (followers, falls leer) |
| `https://x.com/i/lists/<id>/members`        | `list_members`                              |
| `https://x.com/i/lists/<id>/followers`      | `list_followers`                            |
| `https://x.com/i/lists/<id>`                | `list_members`                              |
| `https://x.com/i/communities/<id>/members`  | `community_members`                         |
| `https://x.com/i/communities/<id>`          | `community_members`                         |
| `<handle>/followers`                        | `followers`                                 |
| `<handle>/following`                        | `following`                                 |
| `<handle>/verified_followers`               | `verified_followers`                        |
| `lists/<id>/members`                        | `list_members`                              |
| `lists/<id>/followers`                      | `list_followers`                            |
| `communities/<id>/members`                  | `community_members`                         |

URLs mit `twitter.com` & `mobile.twitter.com` funktionieren ebenfalls überall.
Auch URLs ohne `https://` funktionieren, etwa `x.com/nasa`.

## Task-Beispiele

Wähle aus 50 öffentlichen Tasks. Jeder hat eine begrenzte Eingabe & eine
passende Dataset-Ansicht. Jeder Task startet mit einer echten Zielgruppe oder
einem echten Filter. Passe ihn an, bevor du ihn startest.

- [Discover AI builders in OpenAI followers](https://apify.com/xquik/x-follower-scraper/examples/discover-ai-builders-in-openai-followers)
- [Build an X audience dataset for AI agents](https://apify.com/xquik/x-follower-scraper/examples/build-agent-ready-x-audience-dataset)
- [Collect X audience data for RAG](https://apify.com/xquik/x-follower-scraper/examples/collect-x-audience-data-for-rag)
- [Find AI SEO practitioners on X](https://apify.com/xquik/x-follower-scraper/examples/find-ai-seo-practitioners-on-x)
- [Compare AI brand follower overlap](https://apify.com/xquik/x-follower-scraper/examples/compare-ai-brand-follower-overlap)
- [Export Twitter followers to CSV](https://apify.com/xquik/x-follower-scraper/examples/export-twitter-followers-to-csv)
- [Analyze competitor follower overlap](https://apify.com/xquik/x-follower-scraper/examples/analyze-competitor-follower-overlap)
- [Find micro-influencers in X followers](https://apify.com/xquik/x-follower-scraper/examples/find-micro-influencers-in-followers)
- [Export curated Twitter list members](https://apify.com/xquik/x-follower-scraper/examples/export-curated-twitter-list-members)
- [Analyze public X Community members](https://apify.com/xquik/x-follower-scraper/examples/analyze-public-x-community-members)
- [Collect Community members for AI agents](https://apify.com/xquik/x-follower-scraper/examples/collect-community-members-for-ai-agents)
- [Create repeatable X follower snapshots](https://apify.com/xquik/x-follower-scraper/examples/create-repeatable-follower-snapshots)

## Was kostet es, X-Follower zu scrapen?

X Follower Scraper von Xquik kostet $0.00015 pro geliefertem Profil, auf jedem
Apify-Plan. Apify berechnet deine Plattformnutzung separat. Xquik berechnet 1
Gebühr pro geliefertem Datensatz. Du brauchst kein separates Xquik-Abonnement
& Xquik verlangt keine Startgebühr. Starts, Ziele & die Wahl der Beziehung
kosten keine separate Suchgebühr.

Ein Run kann viele Ziele lesen. Limits, Deduplizierung, Zuordnung & Abrechnung
bleiben über alle Ziele exakt.

- Filter laufen, bevor ein Profil in dein Dataset kommt. Gefilterte Datensätze
  kosten also nichts.
- Zahlenfilter sind `minFollowers`, `maxFollowers`, `minFollowing`,
  `maxFollowing`, `minStatuses`, `maxStatuses` & `minAccountAgeDays`.
- Profilfilter sind `verifiedOnly`, `verifiedType`, `bioContains`,
  `locationContains`, `usernameContains`, `hasWebsite` & `hasLocation`.
- Der Actor entfernt Wiederholungen über Ziele hinweg vor dem Schreiben. Setze
  `dedupeAcrossTargets: false`, um sie zu behalten.
- Xquik berechnet nie Datensätze, die das Dataset ablehnt.
- Diagnosen in der Ausgabe `diagnostics` sind kostenlos.
- Runs ohne Eingabe, mit ungültiger Eingabe oder ohne Ausgabe schreiben 1
  Datensatz mit Handlungshinweis in die kostenlose Ausgabe `diagnostics`.

Ein Run mit einem Problem oder ein großer Run schreibt zusätzlich einen
`run-report`-Datensatz. Dessen `estimatedChargeUsd` nutzt den aktuellen
Pay-per-Event-Preis, den Apify an den Actor meldet. Ein kleiner Run ohne
Probleme überspringt ihn & spart Apify-Nutzung. Aktiviere
`alwaysSaveRunRecords`, um ihn bei jedem Run zu schreiben.

## Benchmark

X Follower Scraper von Xquik schlug 9 andere Follower-Actors bei Kosten & Tempo.
Sein Median-Datensatz (`outputMode: "full"`) hatte 38 Felder, das 2,5-Fache des
Medians der anderen.

| Actor                                                  | Nützliche Profile | Kosten pro nützlichem Profil | Nützliche Profile pro Sekunde | Felder pro Zeile | Öffentlicher Run                                                                                                                                                                               |
| ------------------------------------------------------ | ----------------: | ---------------------------: | ----------------------------: | ---------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| xquik/x-follower-scraper                               |             1.000 |                    $0.000155 |                         100.0 |               38 | [Run ansehen](https://console.apify.com/view/runs/z5ELS2u5sgjuhAFHN)                                                                                                                           |
| xquik/x-follower-scraper                               |             1.000 |                    $0.000155 |                          77.9 |               38 | [Run ansehen](https://console.apify.com/view/runs/Htim4jqodU6ZPjQiQ)                                                                                                                           |
| b2b_leads/X-Real-Time-Data                             |               286 |                    $0.000388 |                           3.1 |               21 | [Run ansehen](https://console.apify.com/view/runs/IkQButA6cVz4ys4GM)                                                                                                                           |
| kaitoeasyapi/premium-x-follower-scraper-following-data |               356 |                    $0.000506 |                          21.9 |               50 | [Run ansehen](https://console.apify.com/view/runs/cJgj15HLBA50LEUf0)                                                                                                                           |
| api-ninja/x-twitter-followers-scraper                  |               350 |                    $0.000809 |                           7.0 |                8 | [Run ansehen](https://console.apify.com/view/runs/XjJ4UPKAILSz0Droz)                                                                                                                           |
| altimis/scweet                                         |               332 |                    $0.000922 |                           1.1 |               21 | [Run ansehen](https://console.apify.com/view/runs/qVGvT7TPAJEHCuR42)                                                                                                                           |
| apidojo/twitter-user-scraper                           |               323 |                    $0.001160 |                           7.3 |               25 | [Run ansehen](https://console.apify.com/view/runs/Xnf7rh8jK6764gP1f)                                                                                                                           |
| atomus/twitter-scraper                                 |               323 |                    $0.001272 |                           6.2 |               13 | [Run ansehen](https://console.apify.com/view/runs/MWz1l0cTcfPcEnaiH)                                                                                                                           |
| practicaltools/cheap-simple-twitter-api                |               283 |                    $0.002036 |                           6.5 |                4 | [Run 1](https://console.apify.com/view/runs/Zhvi7LsfpHdQNKcGb), [Run 2](https://console.apify.com/view/runs/IsJj4fa8pFUG7uhlK), [Run 3](https://console.apify.com/view/runs/2W7n8fpEqoxiXq6oX) |
| maximedupre/twitter-scraper                            |               320 |                    $0.002192 |                           2.1 |               15 | [Run 1](https://console.apify.com/view/runs/HblUkhgI2svp1LBGs), [Run 2](https://console.apify.com/view/runs/37yQFzgydzJoWfa39), [Run 3](https://console.apify.com/view/runs/mtBoKcocaM4BUzZmm) |
| seemuapps/x-followers-following-scraper                |               286 |                    $0.003504 |                           3.9 |                9 | [Run 1](https://console.apify.com/view/runs/1r3je034X2qhFGgLj), [Run 2](https://console.apify.com/view/runs/dc4ztVP3n2eemgiNQ), [Run 3](https://console.apify.com/view/runs/gWPiBT00G7D9IJ0Cj) |

Jeder Actor las die Follower von NASA, SpaceX & esa. Die anderen Actors liefen
am 2026-09-28. Die Runs von Xquik setzten `outputMode: "full"` & liefen am
2026-09-29. Alle Runs liefen auf der Stufe Bronze. Ein nützliches Profil ist
eindeutig, 30+ Tage alt und hat 1+ Follower & 1+ Post. Kosten sind die
Gesamtausgaben des Kunden pro nützlichem Profil. Unsere enthalten die
Apify-Nutzung, die unsere Kunden zahlen. Eine Zeile mit 3 Runs addiert sie.
Felder pro Zeile ist der Median der nicht leeren Felder, verschachtelte
inklusive. Eine Liste zählt als 1 Feld. Öffne einen Run für Eingabe,
Run-Protokoll & Dataset.

## Eingabe

Der Tab Input listet alle Optionen. Gib mindestens eines dieser Felder an:
`startUrls`, `twitterHandles`, `userIds`, `listIds` oder `communityIds`. Ihre
dokumentierten Aliasse zählen auch. Alle anderen Felder sind optional.

Probiere diese Eingaben:

- Füge einen Nutzernamen eines Wettbewerbers mit `relation: "followers"` zu
  `twitterHandles` hinzu.
- Füge `https://x.com/<handle>/verified_followers` unter Start URLs ein, um
  verifizierte Profile zu erhalten.
- Füge eine Listen-URL unter Start URLs ein, um ihre Mitglieder zu prüfen.
- Füge mindestens 2 Nutzernamen hinzu. Ein gemeinsames Profil erscheint einmal,
  unter dem ersten Ziel. Nutze `dedupeMode: "merge"`, um 1 Datensatz mit jedem
  passenden Ziel zu behalten. Setze `dedupeAcrossTargets: false`, um 1 Datensatz
  pro Ziel zu behalten.

### Eingabe in Console & API

Das Console-Formular hat diese Steuerelemente:

- Das Feld Start URLs akzeptiert URL-Strings oder `{ "url": "..." }`-Objekte.
  Sein JSON-Editor unterstützt beide API-Formate.
- Relation, Output Mode & Dedupe Mode sind Auswahllisten mit festen Optionen.
- Relations ist eine Mehrfachauswahl für Runs mit mehreren Beziehungen.
- Ergebnislimits akzeptieren ganze Zahlen ab 1.
- Numerische Profilfilter akzeptieren ganze Zahlen ab 0.

Nutze kanonische Felder in neuen Integrationen. Aliasse funktionieren weiter in
JSON, API, SDK, Automatisierungen & Task-Eingaben. `outputVariant` &
`includeRaw` sind Aliasse für Output Mode. `dedupeAcrossTargets` ist ein Alias
für Dedupe Mode. Das visuelle Formular blendet Aliasse aus, die ein kanonisches
Steuerelement doppeln. Bestehende JSON- & gespeicherte Task-Eingaben mit
Aliassen funktionieren weiter. Gespeicherte Eingaben mit
`dedupeAcrossTargets: false` oder `dedupeMode: "none"` behalten 1 Datensatz pro
Ziel.

### Von einem anderen Follower-Actor wechseln

Füge die Eingabe ein, die du schon nutzt. X Follower Scraper von Xquik liest die
Feldnamen anderer Follower-Actors für X. Er ordnet sie seinen eigenen Feldern
zu. Kanonische Namen bleiben der dokumentierte Standard. Ein Alias verwirft nie
ein Feld & ändert nie, was du zahlst.

| Feld, das du schon nutzt                                                              | Xquik liest es als        |
| ------------------------------------------------------------------------------------- | ------------------------- |
| `twitterHandles`, `usernames`, `user_names`, `handles`, `userNameList`, `screenNames` | `twitterHandles`          |
| `username`, `handle`, `screenName` als einzelner String                               | `twitterHandles`          |
| `twitterUserIds`, `user_ids`, `userIdList`                                            | `userIds`                 |
| `user_id`, `userId` als einzelner String                                              | `userIds`                 |
| `startUrls`, `urls`, `targets`, `profileUrls`, `accountUrls`                          | `startUrls`               |
| `profileUrl` als einzelner String                                                     | `startUrls`               |
| `getFollowers`, `getFollowing`                                                        | `relations`               |
| `type` mit `followers` oder `following`                                               | `relation`                |
| `maxResults`, `max_results`, `resultsLimit`, `count`                                  | `maxItems`                |
| `scrapeAllResults`                                                                    | keine Obergrenze pro Ziel |

2 Namen bedeuten hier etwas anderes. In manchen Actors begrenzen `maxFollowers`
& `maxFollowing`, wie viele Datensätze ein Run liefert. In X Follower Scraper
von Xquik filtern sie Profile nach ihrer Zahl an Followern & gefolgten Accounts.
Nutze `maxItems`, um Datensätze zu begrenzen. Der Actor hat keine Seiteneinheit.
Ersetze also `maxPages` durch `maxItems`.

### Immer den neuesten Build verwenden

Runs aus dem Store nutzen für X Follower Scraper von Xquik den Build `latest`.
Lass bei API-Aufrufen die Build-Überschreibung weg oder übergib `build=latest`.
Aktualisiere Tasks & Integrationen, die einen älteren Build fixieren. Fixierte
Builds wechseln nie von selbst.

## Ausgabe

Jedes Profil ist ein JSON-Objekt. Der kompakte Modus liefert normalisierte
öffentliche Felder, Felder zur Schemaversion & Quellmetadaten, falls vorhanden.

Die Schemas für Dataset & Run-Report beschreiben jedes gelieferte Feld.
Primitive Felder enthalten auch Beispiele für Agents & generierte Integrationen.

Die Beispielwerte unten dienen nur zur Veranschaulichung. Deine Datensätze
enthalten Live-Daten zur Laufzeit. Ein kompakter Datensatz sieht so aus:

```json
{
  "schemaVersion": 1,
  "_schema_version": 1,
  "id": "44196397",
  "username": "elonmusk",
  "name": "Elon Musk",
  "description": "...",
  "followers": 180000000,
  "following": 500,
  "statusesCount": 42000,
  "mediaCount": 3200,
  "favouritesCount": 120000,
  "verified": true,
  "verifiedType": "blue",
  "location": "...",
  "url": "https://...",
  "profilePicture": "https://...",
  "coverPicture": "https://...",
  "createdAt": "Tue Jun 02 20:12:29 +0000 2009",
  "sourceTarget": "nasa",
  "sourceRelation": "followers",
  "sourceUrl": "https://x.com/nasa/followers"
}
```

Der Dedupe-Modus merge ergänzt Felder zur Überschneidung:

```json
{
  "schemaVersion": 1,
  "_schema_version": 1,
  "id": "44196397",
  "username": "elonmusk",
  "sourceTargets": ["nasa", "spacex"],
  "sourceRelations": ["followers"],
  "sourceUrls": [
    "https://x.com/nasa/followers",
    "https://x.com/spacex/followers"
  ],
  "sourceTargetKeys": ["followers:nasa", "followers:spacex"],
  "overlapCount": 2
}
```

Exportiere das Apify-Dataset als JSON, CSV, Excel oder HTML.

## Run-Optionen

Setze `maxTotalChargeUsd` in der Apify-API, um die Ausgaben hart zu begrenzen.
In der Console heißt dasselbe Limit Max cost per run. Apify gibt dieses Limit
als `ACTOR_MAX_TOTAL_CHARGE_USD` an X Follower Scraper von Xquik weiter. Er
stoppt, bevor er Datensätze über das Limit hinaus annimmt. Lass `maxItems` leer,
um so viele Profile zu erhalten, wie das Ausgabenlimit erlaubt. Setze `maxItems`
& `maxItemsPerTarget` nur, wenn du weniger Profile willst, als das Budget
erlaubt.

- Kombiniere Profilfilter wie `minFollowers`, `verifiedType` & `bioContains`,
  um das abgerechnete Dataset einzugrenzen.
- Standardmäßig behalten Runs nur eindeutige Profile über alle Ziele. Setze
  `dedupeAcrossTargets: false`, um 1 Datensatz pro Ziel zu behalten.
- Setze `dedupeMode: "merge"` für 1 Datensatz pro Profil mit jedem passenden
  Quellziel.
- Setze `outputMode: "full"` für optionale Profilfelder, falls vorhanden. Dazu
  gehören IDs angehefteter Posts, Entitäten & Profilmetadaten.
- Setze `outputMode: "raw"` oder `includeRaw: true`, um ein bereinigtes
  `raw`-Objekt neben den normalisierten Feldern zu erhalten.
- Plane wiederholte Runs & speichere jedes Dataset, um Profil-IDs zu
  vergleichen. Xquik-Monitore senden unterstützte Post- & Profilereignisse,
  keine Änderungen an Follower-Listen.

## Leere, unvollständige & gestoppte Runs

X Follower Scraper von Xquik erklärt leere, unvollständige & gestoppte Runs mit
kostenlosen Diagnosen. Ein erfolgreicher Actor-Abschluss bestätigt die
Lieferung, nicht die vollständige Extraktion.

Ein unterbrochener Run schreibt eine kostenlose `partial`-Diagnose. Bereits
gelieferte Ergebnisse bleiben im Dataset. Lies `availableResults`,
`failedTargets`, `retryable` & `nextAction`, bevor du es erneut versuchst.

Der Run-Status nennt den Grund für den Stopp. Er zählt auch berechnete
Ergebnisse, übersprungene Duplikate & gelesene Ziele. Der Status nennt jede
Ursache für einen vorzeitigen Stopp. `stopCauses` listet jede Ursache mit
eigenen Feldern `message`, `retryable` & `nextAction`. Die Ursachen sind
`target_not_found`, `target_protected`, `target_failed` & `deadline_reached`.
Ein fehlender Account kommt nur auf die Liste, wenn eine andere Ursache den Run
gestoppt hat. Der Run ist `retryable`, wenn mindestens 1 Ursache es ist.

X hält die Listen eines geschützten Accounts privat. Für dieses Ziel meldet 1
kostenlose Diagnose `target_protected`. Der Run liest die anderen Ziele weiter.

`failedTargets` zählt Ziele, die nach einem Fehler abgebrochen sind. Diese Runs
nutzen `completionReason: "partial_failure"`. Ihre gelieferten Profile bleiben
abrechenbare Datensätze.

Das Standard-Timeout von Apify ist `0`, Runs haben also kein Zeitlimit. Der Run
läuft weiter, bis er das Limit erreicht oder keine Profile mehr findet. Du
kannst trotzdem ein festes Timeout setzen. Dann bedeutet
`completionReason: "deadline_reached"`, dass dieses Limit nahe ist. Der Run
speichert Profile & Bericht. Dann beendet er sich sauber vor dem Limit.
Jedes gelieferte Profil kostet nur einmal.

Runs mit einem Problem schreiben immer `run-report`, auch bei Abbrüchen ohne
Eingabe oder mit ungültiger Eingabe. `run-report` hat außerdem ein Feld
`version` mit der exakten veröffentlichten Quellversion des Actors.

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
- [Followers API](https://docs.xquik.com/api-reference/x/followers): ruft die
  verfügbaren Follower eines Accounts ab
- [Following API](https://docs.xquik.com/api-reference/x/following): zeigt, wem
  ein Nutzer folgt
- [List Members API](https://docs.xquik.com/api-reference/x/list-members):
  exportiert Mitglieder einer öffentlichen X-Liste
- [MCP-Server](https://docs.xquik.com/mcp/overview): findet & startet
  unterstützte JSON- oder Text-Operationen
- [Webhooks](https://docs.xquik.com/webhooks/overview): empfängt unterstützte
  Post- & Profilereignisse

## FAQ

### Brauche ich einen X-API-Schlüssel?

Nein. Du brauchst keinen X-API-Schlüssel, keinen Login & keine Zugangsdaten.

### Was begrenzt einen Run?

Dein Ergebnislimit & dein Apify-Ausgabenlimit stoppen den Run. Die Limits deines
Apify-Accounts & der Plattform gelten weiterhin.

### Wie schnell ist der Actor?

Das Tempo von X Follower Scraper von Xquik hängt von der Zielgröße, den Filtern
& der Verfügbarkeit von X ab. Seine 2 Runs im [Benchmark](#benchmark) erreichten
77,9 & 100,0 nützliche Profile pro Sekunde.

### Warum liefert mein Run weniger Datensätze als `maxItems`?

Filter wie `minFollowers`, `verifiedOnly` & `bioContains` greifen vor dem
Schreiben. Lockere sie, um mehr Ergebnisse zu erhalten. X Follower Scraper von
Xquik entfernt außerdem Wiederholungen über Ziele hinweg.

### Wie viele Follower kann ich von einem einzelnen Account scrapen?

So viele, wie X für diesen Account zeigt. Der Run läuft bis zu deinem Limit,
deinem Ausgabenlimit oder dem Ende der Liste. `maxItemsPerTarget` begrenzt nur
jedes einzelne Ziel.

### Versucht der Actor es nach vorübergehenden Fehlern erneut?

Ja. Vorübergehende Fehler bei X fängt er selbst ab. Nach einem harten
Fehler behält der Run seine Teilergebnisse.

### Was passiert kurz vor dem Zeitlimit des Apify-Runs?

X Follower Scraper von Xquik setzt keine eigene, kürzere Frist. Vor deinem Limit
speichert er Profile, schreibt den Bericht & beendet sich. Datensätze, die nie
im Dataset ankommen, kosten nichts.

### Kann ich dort weitermachen, wo ich aufgehört habe?

Noch nicht. Ein neuer Run für dasselbe Ziel beginnt von vorn.

### Kann ich den Actor über die Apify-API starten?

Ja. Im [API-Tab](https://apify.com/xquik/x-follower-scraper/api) findest du
Beispiele für Python, JavaScript & cURL.

### Kann ich wiederkehrende Scrapes planen?

Ja. Nutze die integrierte
[Zeitplanung](https://docs.apify.com/platform/schedules) von Apify, um diesen
Actor per Cron zu starten. Vergleiche gespeicherte Datasets, um Änderungen bei
Followern zu finden.

### Ist es legal, X-Daten zu scrapen?

X Follower Scraper von Xquik fragt öffentliche Profilfelder von X ab. Ergebnisse
können personenbezogene Daten enthalten, auch selbst angegebene Standorte.
Prüfe, ob dein Zweck rechtmäßig ist. Befolge geltende Datenschutzregeln. Hol dir
bei Unsicherheit qualifizierten Rechtsrat.

### Wo bekomme ich Hilfe?

Öffne ein Issue im Tab Issues auf der Actor-Seite. Du kannst auch
support@xquik.com mit der Run-ID kontaktieren.

### Wo finde ich die API-Dokumentation?

Lies die [API-Dokumentation](https://docs.xquik.com/introduction).
