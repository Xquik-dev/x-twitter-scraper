[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
**Deutsch** · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer verbindet Xquik MCP mit Coding-Agents](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Sieh dir an, wie Framer Xquik-Scraper nutzt](https://youtu.be/4UOSpoOoC3Y?t=367),
mit Claude Code, Codex, Cursor & mehr, ab Minute 6:07.

Xquik ist weltweit der schnellste & günstigste Scraper-Dienst für X (Twitter) &
liefert die vollständigsten X-Daten. X Follower Scraper von Xquik sammelt
Follower, gefolgte Accounts, Listenmitglieder, Abonnenten &
Community-Mitglieder. Öffentliche Benchmarks belegen, dass er unter 10
Follower-Actors der günstigste & schnellste ist. Seine Datensätze im Modus full
haben 2,5-mal so viele Felder wie die des Median-Actors, wie der
[Benchmark unten](#benchmark) zeigt. Die meisten anderen Apify Actors rechnen
ab, bevor sie filtern oder Duplikate entfernen. Xquik rechnet nur gelieferte,
eindeutige Ergebnisse ab, die zu deinen Filtern passen.

Exportiere eine Twitter-Follower-Liste mit gefolgten Accounts, verifizierten
Followern, Listenmitgliedern, Listen-Abonnenten & Community-Mitgliedern. X
Follower Scraper von Xquik kostet **ab $0.00015 pro geliefertem Profil auf jedem
Apify-Plan**. Apify berechnet die Plattformnutzung separat. Du brauchst keinen
X-Login, & Xquik verlangt keine Start- oder Abfragegebühr.

> Xquik ist ein unabhängiger Drittanbieter-Dienst. Nicht verbunden mit X Corp.
> "Twitter" und "X" sind Marken von X Corp.

## Was macht X Follower Scraper?

X Follower Scraper von Xquik liefert verfügbare öffentliche Profildaten zu
Followern, gefolgten Accounts, Listen & Communities. Jeder Datensatz nennt sein
Quellziel & seine Beziehung.

### Grundlegendes Verhalten

- Filter & Duplikatentfernung laufen vor der Abrechnung.
- Standardmäßig erscheint ein Profil, das mehrere Ziele teilen, nur einmal &
  wird nur einmal berechnet.
- 1 Run akzeptiert Nutzernamen, numerische IDs, URLs & Kurzpfade.
- Der Merge-Modus erfasst gemeinsame Profile, Quellen, Beziehungen &
  `overlapCount`.
- Run-Logs zeigen die Seitenzeiten in `fetchDurationMs`, `processingDurationMs`,
  `pushDurationMs`, `statusDurationMs` & `fullPageDurationMs`.
- Runs behalten gelieferte Datensätze & ihren Fortschritt, wenn Apify sie neu
  startet.

### Welche Daten kann X Follower Scraper extrahieren?

| Feld                     | Beschreibung                                                      |
| ------------------------ | ----------------------------------------------------------------- |
| `id`                     | Numerische X-Nutzer-ID                                            |
| `username`               | Nutzername (ohne `@`)                                             |
| `name`                   | Anzeigename                                                       |
| `description`            | Bio-Text                                                          |
| `followers`              | Anzahl der Follower                                               |
| `following`              | Anzahl der gefolgten Accounts                                     |
| `statusesCount`          | Anzahl aller veröffentlichten Posts                               |
| `mediaCount`             | Anzahl aller hochgeladenen Medien                                 |
| `favouritesCount`        | Anzahl aller vergebenen Gefällt-mir-Angaben                       |
| `verified`               | Kombiniertes Flag für öffentliche Blue- oder Legacy-Verifizierung |
| `verifiedType`           | `blue`, `business`, `government` oder `none`                      |
| `location`               | Selbst angegebener Standort                                       |
| `url`                    | Website-URL aus dem Profil                                        |
| `email`                  | Erste E-Mail, die das Profil veröffentlicht                       |
| `contactInfo`            | E-Mails, Telefonnummern & Links, die das Profil veröffentlicht    |
| `profilePicture`         | Avatar-URL in 48 px                                               |
| `profilePictureOriginal` | Derselbe Avatar in voller Größe, zum Herunterladen                |
| `coverPicture`           | Banner-URL                                                        |
| `createdAt`              | Zeitstempel der Account-Erstellung als String von X               |
| `sourceTarget`           | Nutzername oder ID, von dem du dieses Profil gescrapt hast        |
| `sourceRelation`         | Beziehung, etwa `followers` oder `list_members`                   |
| `sourceUrl`              | Genaue URL, auf der der Actor das Profil gefunden hat             |
| `sourceTargets`          | Alle Ziele, die im Merge-Modus zu diesem Profil passten           |
| `sourceRelations`        | Alle Beziehungen, die im Merge-Modus zu diesem Profil passten     |
| `sourceUrls`             | Alle Quell-URLs, die im Merge-Modus zu diesem Profil passten      |
| `overlapCount`           | Anzahl passender Paare aus Beziehung & Ziel im Merge-Modus        |
| `resultType`             | Datensatztyp in den Ausgabemodi full und raw                      |
| `raw`                    | Sicheres Quellprofil vor der Actor-eigenen Formatierung           |

Datensätze enthalten öffentliche Profilfelder zu Identität, Zählern,
Verifizierung, Verfügbarkeit, Affiliates, beruflichen Daten & Bios.
Quellzuordnung, Entitäten & IDs angehefteter Posts bleiben verfügbar. Die
genauen Felder stehen in OpenAPI.

Setze `outputMode: "raw"` oder `includeRaw: true`, um ein Feld `raw`
hinzuzufügen. Es enthält eine sichere Kopie des Quellprofils. Standard ist der
kompakte Modus.

Setze `outputMode: "full"` für die meisten Daten pro Datensatz. Datensätze
enthalten außerdem bis zu 13 zusätzliche Profilfelder, die X in Listen von
Followern & gefolgten Accounts sendet, etwa `listedCount`, `defaultProfileImage`
& `advertiserAccountType`. Datensätze im Modus full stellen sie ans Ende.
Kompakte Datensätze bleiben kleiner & kosten weniger Speicher.

`verifiedOnly` akzeptiert öffentliche Profile mit Blue- & Legacy-Verifizierung.
Ein Profil gilt als verifiziert, wenn eines der Verifizierungs-Flags von X das
sagt. `blueVerifiedOnly` behält die Profile, die X als Blue-verifiziert
markiert. X markiert auch viele Unternehmens- & Behördenkonten blau. Setze
`verifiedType`, um 1 Badge-Typ zu behalten.

Datensätze enthalten nie Angaben, die nur den Betrachter betreffen. Xquik
entfernt Betrachter-Flags wie Folgen, Blockieren, Stummschalten,
Direktnachrichten, Mitteilungen & Ähnliches. Auch die Raw-Ausgabe verwirft sie.

## Anwendungsfälle

- Reichere Leads an & baue Forschungsdatasets mit mehr Feldern pro Profil. Am
  2026-09-29 hatte unser Median-Datensatz im Modus full 38 Felder. Das ist das
  2,5-Fache des Medians von 9 anderen Actors.
- Exportiere Follower von Wettbewerbern für die Lead-Recherche.
- Vergleiche die Zielgruppen deines Accounts, deiner Wettbewerber & öffentlicher
  Personen.
- Filtere nach Follower-Zahl & Verifizierung, um passende Profile zu finden.
- Exportiere Mitglieder von X-Communities.
- Baue öffentliche Datasets sozialer Netzwerke für die Forschung.
- Segmentiere Follower nach Stichwort in der Bio, Standort oder Profiltyp.

## Wie scrape ich Follower-Daten mit X Follower Scraper?

Neu bei Apify?
[Erstelle zuerst einen kostenlosen Account](https://console.apify.com/sign-up?fpr=xquik).
Der kostenlose Plan braucht keine Kreditkarte & gibt dir jeden Monat $5 zum
Ausgeben. Bei $0.00015 pro Profil reichen $5 für bis zu 33.000 Profile, vor
Abzug der Plattformnutzung. Komm dann hierher zurück & klicke auf Try for free.

1. Öffne X Follower Scraper von Xquik in der Apify Console.
2. Füge Profil-, Listen- oder Community-URLs, X-Nutzernamen oder numerische IDs
   hinzu.
3. Wähle eine Beziehung, etwa `followers` oder `verified_followers`.
4. Setze `maxItems` & beliebige Profilfilter.
5. Starte den Run.
6. Exportiere das Dataset als JSON, CSV, Excel oder HTML.

Jede Eingabe unten ist vollständig & deckt eine häufige Aufgabe ab. Wähle die,
die zu deinen Daten passt.

### Profil- oder Listen-URLs einfügen

Füge Profil-, Listen- oder Community-URLs ein. Jede URL legt die Beziehung fest,
die der Actor scrapt.

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
Nutzernamen funktionieren mit oder ohne `@`.

```json
{
  "twitterHandles": ["elonmusk", "nasa", "openai"],
  "relation": "followers",
  "maxItems": 1000
}
```

`relation` legt fest, was der Actor für jeden Nutzernamen scrapt. Nutze
`followers`, `following` oder `verified_followers`.

Nutze `follower_ids` oder `following_ids`, wenn du nur Nutzer-IDs brauchst.
Jeder Datensatz enthält 1 Nutzer-ID, ihr Quellziel & ihre Beziehung, & eine
Seite fasst bis zu 5.000 IDs. Profilfilter brauchen Profilfelder, lass sie also
für diese 2 Beziehungen leer.

Nutze `affiliates` für die Accounts, die eine Organisation als ihre Affiliates
listet, etwa Mitarbeitende & Produkte eines Unternehmens. Jeder Datensatz ist
ein vollständiges Profil. Ein Account ohne Affiliates liefert keine Datensätze.

Nutze `subscriptions` für die Creator, die ein Account abonniert hat. Ein
Account, der seine Abonnements verbirgt, liefert keine Datensätze.

Nutze `similar` für die Accounts, die X als ähnlich zu einem Account listet.
Jeder Datensatz ist ein vollständiges Profil. X listet eine kleine Auswahl an
Accounts & kann sie zwischen Runs ändern.

Dieselbe Eingabe akzeptiert auch `username`, `usernames` & `user_names` als
Aliasse.

### Runs mit mehreren Beziehungen

Setze `relations`, um mehrere Beziehungen für dieselben Nutzernamen zu lesen.

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

Füge Filter hinzu, damit nur passende Profile in dein Dataset kommen.

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
Datensätze, die jeden Filter bestehen & in dein Dataset kommen. Der letzte
Status eines gefilterten Runs sagt, wie viele Profile er geprüft hat & wie viele
bestanden haben. Ein gefilterter Run stoppt standardmäßig nach 100.000
gescannten Profilen pro Liste. Setze `maxScan`, um weniger oder mehr zu lesen.

Trenne Alternativen für `bioContains` mit Kommas oder Zeilenumbrüchen. Ein
Profil besteht, wenn seine Bio einen der angegebenen Begriffe enthält. Groß- und
Kleinschreibung spielen keine Rolle.

### Zielgruppen-Überschneidungen finden

Nutze den Merge-Modus, um Wettbewerber, Listen, Communities oder Beziehungstypen
zu vergleichen.

```json
{
  "twitterHandles": ["openai", "anthropicai", "GoogleDeepMind"],
  "relation": "followers",
  "dedupeMode": "merge",
  "maxItemsPerTarget": 5000,
  "maxItems": 15000
}
```

Die Ausgabe hat 1 Datensatz pro eindeutigem Profil. Gemeinsame Profile enthalten
`sourceTargets`, `sourceRelations`, `sourceUrls`, `sourceTargetKeys` &
`overlapCount`. Sortiere nach `overlapCount` oder exportiere die Datensätze als
CSV. Die Datensätze folgen der Reihenfolge deiner Ziele. Halte `maxItems` hoch
genug, damit jedes Ziel Datensätze beiträgt. Beendet `maxItems` einen Run
vorzeitig, können sich die behaltenen Profile zwischen Runs ändern. Mit
`maxItemsPerTarget` legst du die Tiefe pro Account fest.

### Prüfen, wer wem folgt

Liste Quell- & Ziel-Accounts auf, um die Follows zwischen ihnen zu prüfen.

```json
{
  "followCheckSources": ["elonmusk", "@nasa"],
  "followCheckTargets": ["spacex", "https://x.com/i/user/11348282"]
}
```

Der Run prüft jede Quelle gegen jedes Ziel, diese Eingabe ergibt also 4
Prüfungen. Jede Prüfung ist 1 Datensatz & 1 Ergebnis zum Profilpreis. Ein
Datensatz enthält `isFollowing` (die Quelle folgt dem Ziel) & `isFollowedBy`
(das Ziel folgt zurück), mit `sourceUsername`, `sourceId`, `targetUsername` &
`targetId` beider Accounts. Accounts akzeptieren Nutzer-IDs, Nutzernamen mit
oder ohne `@` oder Profil-URLs. Eine Zahl ist eine Nutzer-ID. Die Ansicht Follow
checks listet diese Datensätze.

### Akzeptierte URL-Formen

| URL                                         | Beziehung                     |
| ------------------------------------------- | ----------------------------- |
| `https://x.com/<handle>/followers`          | `followers`                   |
| `https://x.com/<handle>/verified_followers` | `verified_followers`          |
| `https://x.com/<handle>/following`          | `following`                   |
| `https://x.com/<handle>/affiliates`         | `affiliates`                  |
| `https://x.com/<handle>`                    | `relation`, sonst `followers` |
| `https://x.com/i/lists/<id>/members`        | `list_members`                |
| `https://x.com/i/lists/<id>/followers`      | `list_followers`              |
| `https://x.com/i/lists/<id>`                | `list_members`                |
| `https://x.com/i/communities/<id>/members`  | `community_members`           |
| `https://x.com/i/communities/<id>`          | `community_members`           |
| `<handle>/followers`                        | `followers`                   |
| `<handle>/following`                        | `following`                   |
| `<handle>/verified_followers`               | `verified_followers`          |
| `<handle>/affiliates`                       | `affiliates`                  |
| `lists/<id>/members`                        | `list_members`                |
| `lists/<id>/followers`                      | `list_followers`              |
| `communities/<id>/members`                  | `community_members`           |

URLs mit `twitter.com` & `mobile.twitter.com` funktionieren ebenfalls überall.
Auch URLs ohne `https://` funktionieren, etwa `x.com/nasa`.

## Task-Beispiele

Wähle aus 50 öffentlichen Tasks. Jeder hat eine begrenzte Eingabe & eine
passende Dataset-Ansicht. Jeder Task startet mit einer echten Zielgruppe oder
einem echten Filter. Passe ihn an, bevor du ihn startest.

- [Entdecke KI-Entwickler unter den Followern von OpenAI](https://apify.com/xquik/x-follower-scraper/examples/discover-ai-builders-in-openai-followers)
- [Erstelle ein X-Zielgruppen-Dataset für KI-Agents](https://apify.com/xquik/x-follower-scraper/examples/build-agent-ready-x-audience-dataset)
- [Sammle X-Zielgruppendaten für RAG](https://apify.com/xquik/x-follower-scraper/examples/collect-x-audience-data-for-rag)
- [Finde KI-SEO-Praktiker auf X](https://apify.com/xquik/x-follower-scraper/examples/find-ai-seo-practitioners-on-x)
- [Prüfe, wer wem auf Twitter folgt](https://apify.com/xquik/x-follower-scraper/examples/check-who-follows-who-on-twitter)
- [Exportiere Twitter-Follower als CSV](https://apify.com/xquik/x-follower-scraper/examples/export-twitter-followers-to-csv)
- [Analysiere Follower-Überschneidungen mit Wettbewerbern](https://apify.com/xquik/x-follower-scraper/examples/analyze-competitor-follower-overlap)
- [Finde Mikro-Influencer unter X-Followern](https://apify.com/xquik/x-follower-scraper/examples/find-micro-influencers-in-followers)
- [Exportiere Mitglieder kuratierter Twitter-Listen](https://apify.com/xquik/x-follower-scraper/examples/export-curated-twitter-list-members)
- [Analysiere Mitglieder öffentlicher X-Communities](https://apify.com/xquik/x-follower-scraper/examples/analyze-public-x-community-members)
- [Sammle Community-Mitglieder für KI-Agents](https://apify.com/xquik/x-follower-scraper/examples/collect-community-members-for-ai-agents)
- [Erstelle wiederholbare Snapshots von X-Followern](https://apify.com/xquik/x-follower-scraper/examples/create-repeatable-follower-snapshots)

## Was kostet es, X-Follower zu scrapen?

X Follower Scraper von Xquik kostet $0.00015 pro geliefertem Profil auf jedem
Apify-Plan. Apify berechnet deine Plattformnutzung separat. Xquik berechnet 1
Gebühr pro geliefertem Datensatz. Du brauchst kein separates Xquik-Abonnement, &
Xquik verlangt keine Startgebühr. Starts, Ziele & die Wahl der Beziehung kosten
keine separate Abfragegebühr. Eine Follow-Prüfung ist 1 Datensatz zum selben
Preis.

Brauchst du mehr Volumen, dann
[wähle einen Apify-Plan](https://apify.com/pricing?fpr=xquik) mit mehr
vorausbezahlter Nutzung.

1 Run kann viele Ziele lesen. Limits, Deduplizierung & Abrechnung bleiben über
alle Ziele exakt.

- Filter laufen, bevor ein Profil in dein Dataset kommt, gefilterte Datensätze
  kosten also nichts.
- Zahlenfilter sind `minFollowers`, `maxFollowers`, `minFollowing`,
  `maxFollowing`, `minStatuses`, `maxStatuses` & `minAccountAgeDays`.
- Profilfilter sind `verifiedOnly`, `blueVerifiedOnly`, `verifiedType`,
  `bioContains`, `locationContains`, `usernameContains`, `hasWebsite` &
  `hasLocation`.
- E-Mail-Filter sind `hasEmail`, `businessEmailOnly` & `emailDomains`. Sie
  behalten Datensätze, deren Profil eine E-Mail veröffentlicht.
- Der Actor entfernt Wiederholungen über Ziele hinweg vor dem Schreiben. Setze
  `dedupeAcrossTargets: false`, um sie zu behalten.
- Xquik berechnet nie Datensätze, die das Dataset ablehnt.
- Diagnosen in der Ausgabe `diagnostics` sind kostenlos.
- Runs ohne Eingabe, mit ungültiger Eingabe & ohne Ausgabe schreiben 1 Eintrag
  mit Handlungshinweis in die kostenlose Ausgabe `diagnostics`.

Ein Run mit einem Problem oder ein großer Run schreibt zusätzlich einen
`run-report`-Eintrag. Dessen `estimatedChargeUsd` nutzt den aktuellen
Pay-per-Event-Preis, den Apify dem Actor bereitstellt. Ein kleiner Run ohne
Probleme überspringt ihn & spart Apify-Nutzung. Aktiviere
`alwaysSaveRunRecords`, um ihn bei jedem Run zu schreiben.

## Benchmark

X Follower Scraper von Xquik schlug 9 andere Follower-Actors bei Kosten & Tempo.
Sein Median-Datensatz im Modus full hatte 38 Felder, das 2,5-Fache des Medians
der anderen.

- `xquik/x-follower-scraper` lieferte 1.000 nützliche Profile zu $0.000155 pro
  nützlichem Profil, mit 100,0 pro Sekunde & 38 Feldern pro Datensatz.
  [Run ansehen](https://console.apify.com/view/runs/z5ELS2u5sgjuhAFHN)
- `xquik/x-follower-scraper` lieferte 1.000 nützliche Profile zu $0.000155 pro
  nützlichem Profil, mit 77,9 pro Sekunde & 38 Feldern pro Datensatz.
  [Run ansehen](https://console.apify.com/view/runs/Htim4jqodU6ZPjQiQ)
- `b2b_leads/X-Real-Time-Data` lieferte 286 nützliche Profile zu $0.000388 pro
  nützlichem Profil, mit 3,1 pro Sekunde & 21 Feldern pro Datensatz.
  [Run ansehen](https://console.apify.com/view/runs/IkQButA6cVz4ys4GM)
- `kaitoeasyapi/premium-x-follower-scraper-following-data` lieferte 356
  nützliche Profile zu $0.000506 pro nützlichem Profil, mit 21,9 pro Sekunde &
  50 Feldern pro Datensatz.
  [Run ansehen](https://console.apify.com/view/runs/cJgj15HLBA50LEUf0)
- `api-ninja/x-twitter-followers-scraper` lieferte 350 nützliche Profile zu
  $0.000809 pro nützlichem Profil, mit 7,0 pro Sekunde & 8 Feldern pro
  Datensatz.
  [Run ansehen](https://console.apify.com/view/runs/XjJ4UPKAILSz0Droz)
- `altimis/scweet` lieferte 332 nützliche Profile zu $0.000922 pro nützlichem
  Profil, mit 1,1 pro Sekunde & 21 Feldern pro Datensatz.
  [Run ansehen](https://console.apify.com/view/runs/qVGvT7TPAJEHCuR42)
- `apidojo/twitter-user-scraper` lieferte 323 nützliche Profile zu $0.001160 pro
  nützlichem Profil, mit 7,3 pro Sekunde & 25 Feldern pro Datensatz.
  [Run ansehen](https://console.apify.com/view/runs/Xnf7rh8jK6764gP1f)
- `atomus/twitter-scraper` lieferte 323 nützliche Profile zu $0.001272 pro
  nützlichem Profil, mit 6,2 pro Sekunde & 13 Feldern pro Datensatz.
  [Run ansehen](https://console.apify.com/view/runs/MWz1l0cTcfPcEnaiH)
- `practicaltools/cheap-simple-twitter-api` lieferte 283 nützliche Profile zu
  $0.002036 pro nützlichem Profil, mit 6,5 pro Sekunde & 4 Feldern pro
  Datensatz. [Run 1](https://console.apify.com/view/runs/Zhvi7LsfpHdQNKcGb),
  [Run 2](https://console.apify.com/view/runs/IsJj4fa8pFUG7uhlK),
  [Run 3](https://console.apify.com/view/runs/2W7n8fpEqoxiXq6oX)
- `maximedupre/twitter-scraper` lieferte 320 nützliche Profile zu $0.002192 pro
  nützlichem Profil, mit 2,1 pro Sekunde & 15 Feldern pro Datensatz.
  [Run 1](https://console.apify.com/view/runs/HblUkhgI2svp1LBGs),
  [Run 2](https://console.apify.com/view/runs/37yQFzgydzJoWfa39),
  [Run 3](https://console.apify.com/view/runs/mtBoKcocaM4BUzZmm)
- `seemuapps/x-followers-following-scraper` lieferte 286 nützliche Profile zu
  $0.003504 pro nützlichem Profil, mit 3,9 pro Sekunde & 9 Feldern pro
  Datensatz. [Run 1](https://console.apify.com/view/runs/1r3je034X2qhFGgLj),
  [Run 2](https://console.apify.com/view/runs/dc4ztVP3n2eemgiNQ),
  [Run 3](https://console.apify.com/view/runs/gWPiBT00G7D9IJ0Cj)

Jeder Actor las die Follower von NASA, SpaceX & esa. Die anderen Actors liefen
am 2026-09-28. Die Runs von Xquik setzten `outputMode: "full"` & liefen am
2026-09-29. Alle Runs nutzten die Stufe Bronze. Ein nützliches Profil ist
eindeutig & 30+ Tage alt, mit 1+ Follower & 1+ Post. Kosten sind die
Gesamtausgaben des Kunden pro nützlichem Profil. Unsere enthalten die
Apify-Nutzung, die unsere Kunden zahlen. Ein Eintrag mit 3 Runs zählt alle 3
zusammen. Felder pro Datensatz ist der Median der nicht leeren Felder,
verschachtelte inklusive. Eine Liste zählt als 1 Feld. Öffne einen Run für seine
Eingabe, sein Log & sein Dataset.

## Eingabe

Der Tab Input listet jede Option. Gib mindestens 1 der Felder `startUrls`,
`twitterHandles`, `userIds`, `listIds` oder `communityIds` an, oder beide Felder
`followCheckSources` & `followCheckTargets`. Ihre dokumentierten Aliasse zählen
auch. Jedes andere Feld ist optional.

Probiere diese Eingaben.

- Füge einen Nutzernamen eines Wettbewerbers mit `relation: "followers"` zu
  `twitterHandles` hinzu.
- Füge `https://x.com/<handle>/verified_followers` unter Start URLs ein, um
  verifizierte Profile zu erhalten.
- Füge eine Listen-URL unter Start URLs ein, um ihre Mitglieder zu prüfen.
- Füge 2+ Nutzernamen hinzu. Ein gemeinsames Profil erscheint einmal, unter dem
  Ziel, das es zuerst liefert. Dieses Ziel kann sich zwischen Runs ändern. Nutze
  `dedupeMode: "merge"` für 1 stabilen Datensatz mit jedem passenden Ziel. Setze
  `dedupeAcrossTargets: false`, um 1 Datensatz pro Ziel zu behalten.

### Eingabe in Console & API

Das Console-Formular hat diese Steuerelemente.

- Das Feld Start URLs akzeptiert URL-Strings oder `{ "url": "..." }`-Objekte.
  Sein JSON-Editor behält beide API-Formate.
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
Feldnamen, die andere Follower-Actors für X nutzen. Er ordnet sie seinen eigenen
Feldern zu. Kanonische Namen bleiben der dokumentierte Standard. Ein Alias
verwirft nie ein Feld & ändert nie, was du zahlst.

Jede Zeile nennt die Felder, die du schon nutzt, dann das Feld, dem sie
zugeordnet werden.

- `twitterHandles`, `usernames`, `user_names`, `handles`, `userNameList`,
  `screenNames` werden `twitterHandles` zugeordnet.
- `username`, `handle`, `screenName` als einzelner String werden
  `twitterHandles` zugeordnet.
- `twitterUserIds`, `user_ids`, `userIdList` werden `userIds` zugeordnet.
- `user_id`, `userId` als einzelner String werden `userIds` zugeordnet.
- `startUrls`, `urls`, `targets`, `profileUrls`, `accountUrls` werden
  `startUrls` zugeordnet.
- `profileUrl` als einzelner String wird `startUrls` zugeordnet.
- `getFollowers`, `getFollowing` werden `relations` zugeordnet.
- `type` mit `followers` oder `following` wird `relation` zugeordnet.
- `relationship`, `relationshipType`, `listType`, `scrape_type` werden
  `relation` zugeordnet.
- `relationships` wird `relations` zugeordnet.
- `mode` mit `followers`, `following` oder `both` wird `relation` oder
  `relations` zugeordnet.
- `category` mit `followers`, `following` oder `affiliates` wird `relation`
  zugeordnet.
- `profile_urls` wird bei Links `startUrls` zugeordnet, bei Nutzernamen
  `twitterHandles`.
- `maxResults`, `max_results`, `resultsLimit`, `count`, `max_items` werden
  `maxItems` zugeordnet.
- `per_profile_limit`, `maxItemsPerUser`, `maxUsersPerAccount`,
  `max_followers_per_user`, `max_following_per_user`, `follower_limit` werden
  `maxItemsPerTarget` zugeordnet. 0 setzt keine Obergrenze pro Account.
  `max_following_per_user` setzt außerdem `relation` auf `following`.
- `scrapeAllResults` setzt keine Obergrenze pro Ziel.
- `minTweets` wird `minStatuses` zugeordnet.
- `includeRawUser` wird `includeRaw` zugeordnet.
- `outputVariant` wird `outputMode` zugeordnet.
- `requireEmail` wird `hasEmail` zugeordnet.
- `requireWebsite` wird `hasWebsite` zugeordnet. Es behält ein Profil mit einem
  beliebigen Link im Website-Feld, & der Run-Status sagt das.
- `onlyVerified`, `blue_verified_only` werden `blueVerifiedOnly` zugeordnet. In
  einer Eingabe mit `source_mode` bleibt `blue_verified_only` ohne Wirkung.
- In `verification` setzt `any_verified` das Feld `verifiedOnly`,
  `blue_verified` setzt `blueVerifiedOnly`, `business` & `government` setzen
  `verifiedType`. `unverified` stoppt den Run vor jedem Lesen & jeder Gebühr.
- `bioKeywords` wird `bioContains` zugeordnet. Es genügt, wenn 1 seiner Begriffe
  passt.
- `locationKeywords` mit 1 Wert wird `locationContains` zugeordnet. Mehr Werte
  stoppen den Run vor jedem Lesen & jeder Gebühr.
- `emailDomains` als Liste wird `emailDomains` zugeordnet.
- `outputEmail`, `resolveShortLinks` brauchen kein Feld. Jeder Datensatz enthält
  seine E-Mails & die vollständigen Links von X.
- `findEmails`, `extractEmails` brauchen kein Feld. Datensätze enthalten die
  E-Mails, die ein Profil auf X veröffentlicht. Der Run-Status sagt, dass der
  Actor keine verlinkte Website liest.
- `validateEmails` braucht kein Feld. Der Run-Status sagt, dass E-Mails so
  kommen, wie sie veröffentlicht sind, weil der Actor kein Postfach prüft.

So verhält sich eine eingefügte Eingabe.

- Eine Liste, die mit anderen Worten benannt ist, liest der Actor unter seinem
  eigenen Namen dafür. `followings`, `Verified Followers` & `verifiedFollowers`
  liest er als `following` & `verified_followers`, auch in `relation`.
- Setzt du einen Alias & sein kanonisches Feld, gewinnt der kanonische Wert. Das
  Run-Log nennt den Alias, der verloren hat.
- Eine Liste, die der Actor nicht liest, etwa `mutuals`, stoppt den Run vor
  jedem Lesen & jeder Gebühr.
- Ein Modus, der die Aufgabe eines anderen Actors ist, stoppt den Run genauso.
  `source_mode` tut das bei `search` & `profiles`. `mode` tut das bei `profiles`
  & `all`. `category` tut das bei einer Aufgabe wie `tweets`, `user_info` oder
  `replies`. Die Meldung nennt den Actor, den du nutzen sollst.

2 Namen bedeuten hier etwas anderes. In manchen Actors begrenzen `maxFollowers`
& `maxFollowing`, wie viele Datensätze ein Run liefert. In X Follower Scraper
von Xquik filtern sie Profile nach ihrer Zahl an Followern & gefolgten Accounts.
Nutze `maxItems`, um Datensätze zu begrenzen. Ein Run, der `maxFollowers` &
keine Obergrenze für Datensätze setzt, sagt in seinem Log & letzten Status, dass
er Accounts gefiltert hat. Der Actor hat keine Seiteneinheit, ersetze also
`maxPages` durch `maxItems`.

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
enthalten Live-Daten zur Laufzeit. Ein kompakter Datensatz sieht so aus.

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
  "profilePicture": "https://..._normal.jpg",
  "profilePictureOriginal": "https://....jpg",
  "coverPicture": "https://...",
  "createdAt": "Tue Jun 02 20:12:29 +0000 2009",
  "sourceTarget": "nasa",
  "sourceRelation": "followers",
  "sourceUrl": "https://x.com/nasa/followers"
}
```

Der Dedupe-Modus merge ergänzt Felder zur Überschneidung.

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

Ein Datensatz einer Follow-Prüfung sieht so aus.

```json
{
  "id": "followCheck:elonmusk:spacex",
  "resultType": "followCheck",
  "source": "elonmusk",
  "target": "spacex",
  "sourceId": "44196397",
  "sourceUsername": "elonmusk",
  "targetId": "34743251",
  "targetUsername": "spacex",
  "isFollowing": true,
  "isFollowedBy": false,
  "schemaVersion": 1
}
```

Exportiere das Apify-Dataset als JSON, CSV, Excel oder HTML.

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

- Nutze einen Punkt für ein Feld innerhalb eines Objekts. Groß- und
  Kleinschreibung & Unterstriche spielen keine Rolle.
- Jeder Datensatz behält seine `id`.
- Mit `fields` kommt ein Feld, das einem Datensatz fehlt, als `null` an. Jeder
  Datensatz hat dann dieselben Spalten.
- Ein falscher Feldname stoppt den Run vor dem Lesen & kostet nichts.
- Lassen sich die Namen nicht prüfen, liest der Run weiter & listet nicht
  gefundene Namen am Ende.
- Der Run ignoriert eine Map-Funktion oder einen jq-Filter, die für einen
  anderen Actor geschrieben sind.

## Run-Optionen

Setze `maxTotalChargeUsd` in der Apify-API, um die Ausgaben hart zu begrenzen.
In der Console heißt dasselbe Limit Max cost per run. Apify gibt dieses Limit
als `ACTOR_MAX_TOTAL_CHARGE_USD` an X Follower Scraper von Xquik weiter. Er
stoppt, bevor er Datensätze über das Limit hinaus annimmt. Lass `maxItems` leer,
um so viele Profile zu erhalten, wie das Ausgabenlimit erlaubt. Setze `maxItems`
& `maxItemsPerTarget` nur, wenn du weniger Profile willst, als das Budget
erlaubt.

- Kombiniere Profilfilter wie `minFollowers`, `verifiedType` & `bioContains`, um
  das abgerechnete Dataset einzugrenzen.
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

Der Run-Status sagt, warum der Run gestoppt hat. Er zählt auch berechnete
Ergebnisse, übersprungene Duplikate & gelesene Ziele. Der Status nennt jede
Ursache für einen vorzeitigen Stopp. `stopCauses` listet jede Ursache mit
eigenen Feldern `message`, `retryable` & `nextAction`. Die Ursachen sind
`target_not_found`, `target_suspended`, `target_protected`, `target_failed` &
`deadline_reached`. `target_suspended` nennt die Accounts, die X gesperrt hat.
Ein fehlender oder gesperrter Account kommt nur auf die Liste, wenn eine andere
Ursache den Run gestoppt hat. Der Run ist `retryable`, wenn mindestens 1 Ursache
es ist.

X hält die Listen eines geschützten Accounts privat. Dieses Ziel erhält
`target_protected` in 1 kostenlosen Diagnose, & der Run liest die anderen Ziele.

`failedTargets` zählt Ziele, die nach einem Fehler gestoppt haben. Diese Runs
nutzen `completionReason: "partial_failure"`. Ihre gelieferten Profile bleiben
abrechenbare Datensätze.

Das Standard-Timeout von Apify ist `0`, Runs haben also kein Zeitlimit. Der Run
läuft weiter, bis er das Limit erreicht oder keine Profile mehr findet. Du
kannst trotzdem ein festes Timeout setzen. Dann bedeutet
`completionReason: "deadline_reached"`, dass dieses Limit nahe ist. Der Run
speichert Profile & den Bericht & beendet sich dann sauber vor dem Limit.
Gelieferte Profile werden einmal berechnet.

Runs mit einem Problem schreiben immer `run-report`, auch bei Abbrüchen ohne
Eingabe und mit ungültiger Eingabe. `run-report` hat außerdem ein Feld `version`
mit der exakten veröffentlichten Quellversion des Actors.

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

## FAQ

Antworten auf häufige Fragen, danach, wo du Hilfe bekommst.

### Brauche ich einen X-API-Schlüssel?

Nein. Du brauchst keinen X-API-Schlüssel, keinen Login oder Zugangsdaten.

### Was begrenzt einen Run?

Dein Ergebnislimit & dein Apify-Ausgabenlimit stoppen den Run. Die Limits deines
Apify-Accounts & der Plattform gelten weiterhin.

### Wie schnell ist der Actor?

Das Tempo von X Follower Scraper von Xquik hängt von der Zielgröße, den Filtern
& der Verfügbarkeit von X ab. Seine 2 Runs im [Benchmark](#benchmark) erreichten
77,9 & 100,0 nützliche Profile pro Sekunde.

### Warum liefert mein Run weniger Datensätze als mein Limit?

Filter wie `minFollowers`, `verifiedOnly` & `bioContains` greifen vor dem
Schreiben. Lockere sie, um mehr Ergebnisse zu erhalten. Ein gefilterter Run
stoppt auch nach 100.000 gescannten Profilen pro Liste, außer du setzt
`maxScan`. X Follower Scraper von Xquik entfernt außerdem Wiederholungen über
Ziele hinweg.

### Wie viele Follower kann ich von einem einzelnen Account scrapen?

So viele, wie X für diesen Account zeigt. Der Run läuft bis zu deinem Limit,
deinem Ausgabenlimit oder dem Ende der Liste. `maxItemsPerTarget` begrenzt nur
jedes einzelne Ziel. Ein gefilterter Run stoppt nach 100.000 gescannten Profilen
pro Liste, außer du setzt `maxScan`.

### Versucht der Actor es nach vorübergehenden Fehlern erneut?

Ja. Er erholt sich selbst von vorübergehenden Fehlern bei X. Nach einem harten
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
Prüfe, ob dein Zweck rechtmäßig ist, & befolge geltende Datenschutzregeln. Hol
dir bei Unsicherheit qualifizierten Rechtsrat.

### Wo bekomme ich Hilfe?

Öffne im [Tab Issues](https://apify.com/xquik/x-follower-scraper/issues) ein
Issue mit der Run-ID.

### Wo finde ich die API-Dokumentation?

Der [API-Tab](https://apify.com/xquik/x-follower-scraper/api) enthält Beispiele
für Python, JavaScript & cURL für diesen Actor. Die Website von Xquik findest du
in seinem [Apify-Profil](https://apify.com/xquik).
