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
den umfassendsten X-Daten, und X Follower Scraper sammelt Follower, Gefolgte,
Listenmitglieder, Abonnenten & Community-Mitglieder. Jeder andere Apify Actor
berechnet, bevor gefiltert oder dedupliziert wird. Xquik berechnet nur für
gelieferte, eindeutige, filterkonforme Ergebnisse.

Scrape X-(Twitter-)Follower, Gefolgte, verifizierte Follower,
Listenmitglieder, Listenabonnenten und Community-Mitglieder für **ab
$0.00015 pro geliefertem Profil auf jedem Apify-Plan**. Apify berechnet die
Plattformnutzung separat. Kein X-Login, keine Start- oder Suchgebühr.

>

## Unvollständige Extraktion

Eine unterbrochene Extraktion schreibt eine kostenlose `partial`-Diagnose.
Verfügbare Ergebnisse bleiben erhalten. Lies `availableResults`,
`failedTargets`, `retryable` und `nextAction`, bevor du es erneut versuchst.
Ein erfolgreicher Actor-Abschluss bestätigt die Lieferung, nicht die
vollständige Extraktion.

Xquik ist ein unabhängiger Drittanbieter-Dienst. Nicht verbunden mit X Corp.

> „Twitter" und „X" sind Marken von X Corp.

## Was macht X Follower Scraper?

X Follower Scraper liefert verfügbare öffentliche Profildaten für Follower,
Gefolgte, Listen und Communities. Jeder Datensatz enthält sein Quellziel und
seine Beziehung.

### Kernverhalten

- Filter und Duplikatentfernung laufen vor der Abrechnung.
- Ein Run akzeptiert Handles, numerische IDs, URLs und Kurzpfade.
- Der Merge-Modus erfasst gemeinsame Profile, Quellen, Beziehungen und
  `overlapCount`.
- Automatische Cursor fordern bis zu 300 Profile pro Seite an.
- Ältere Cursor behalten ihr 200-Profil-Limit und starten bei Ablauf neu.
- Seitenprotokolle enthalten `fetchDurationMs`, `processingDurationMs`,
  `pushDurationMs`, `statusDurationMs` und `fullPageDurationMs`, ohne Ziele
  zu wiederholen.
- Checkpoints erhalten akzeptierte Datensätze, Timing und Fehleranzahlen
  nach Neustarts.

## Task-Beispiele

Wähle aus 50 öffentlichen Tasks. Jeder hat eine begrenzte Eingabe und eine
passende Dataset-Ansicht. Jeder Task startet mit einer echten Zielgruppe oder
einem echten Filter. Bearbeite ihn vor dem Ausführen.

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

### Welche Daten kann X Follower Scraper extrahieren?

| Feld              | Beschreibung                                                |
| ----------------- | ------------------------------------------------------------ |
| `id`              | Numerische X-Nutzer-ID                                        |
| `username`        | Handle (ohne `@`)                                             |
| `name`            | Anzeigename                                                   |
| `description`     | Bio-Text                                                       |
| `followers`       | Follower-Anzahl                                                |
| `following`       | Anzahl der Gefolgten                                           |
| `statusesCount`   | Insgesamt veröffentlichte Tweets                               |
| `mediaCount`      | Insgesamt hochgeladene Medien                                  |
| `favouritesCount` | Insgesamt vergebene Likes                                      |
| `verified`        | Kombiniertes Flag für öffentliche Blue- oder Legacy-Verifizierung |
| `verifiedType`    | `blue`, `business`, `government` oder `none`                  |
| `location`        | Selbst angegebener Standort                                    |
| `url`             | Website-URL aus dem Profil                                     |
| `profilePicture`  | Avatar-URL (volle Größe)                                       |
| `coverPicture`    | Banner-URL                                                     |
| `createdAt`       | Zeitstempel der Kontoerstellung als String von X                |
| `sourceTarget`    | Handle/ID, aus dem dieses Profil gescrapt wurde                |
| `sourceRelation`  | Beziehung: `followers`, `following`, `list_members`, ...       |
| `sourceUrl`       | Exakte URL, auf der das Profil gefunden wurde                  |
| `sourceTargets`   | Alle Ziele, die dieses Profil im Merge-Modus getroffen haben    |
| `sourceRelations` | Alle Beziehungen, die dieses Profil im Merge-Modus getroffen haben |
| `sourceUrls`      | Alle Quell-URLs, die dieses Profil im Merge-Modus getroffen haben |
| `overlapCount`    | Anzahl der übereinstimmenden Beziehung-Ziel-Paare im Merge-Modus |
| `resultType`      | Datensatztyp in vollständigen und Rohausgabe-Modi              |
| `raw`             | Sicheres Quellprofil vor Actor-spezifischer Formatierung        |

Datensätze folgen dem öffentlichen Profilvertrag. Dieser deckt Identität,
Zähler, Verifizierung, Verfügbarkeit, Affiliates, professionelle Daten und
Biografien ab. Quellzuordnung, Entitäten und angeheftete Tweet-IDs bleiben
verfügbar. Siehe OpenAPI für die genauen Felder.

Setze `outputMode: "raw"` oder `includeRaw: true`, um eine `raw`-Kopie des
sicheren Quellprofils einzuschließen. Der kompakte Modus bleibt der
Standard.

`verifiedOnly` akzeptiert öffentliche Blue- und Legacy-verifizierte Profile.
Widersprüchliche Quell-Flags lassen niemals einen falschen Wert einen
tatsächlichen Verifizierungsstatus verdecken.

Betrachterbezogener Status gehört zum Abrufkonto von Xquik, nicht zu deinem
Dataset. Follow-, Block-, Mute-, DM-, Benachrichtigungs- und ähnliche
Betrachter-Flags werden immer entfernt, auch aus der Rohausgabe.

## Was kostet es, X-Follower zu scrapen?

Auf jedem Apify-Plan kostet es `$0.00015` pro geliefertem Profil. Apify
berechnet deine Plattformnutzung separat. Xquik berechnet eine Gebühr pro
geliefertem Datensatz. Diagnosen in der Ausgabe `diagnostics` sind kostenlos.
Es gilt kein separates Xquik-Abonnement. Es gilt keine Startgebühr. Jeder
Run schreibt einen `run-report`-Datensatz mit `estimatedChargeUsd`,
berechnet aus dem Live-Pay-per-Event-Preis, den Apify dem Actor offenlegt.
Jedes Ergebnis schreibt `run-report`, auch Abbrüche ohne Eingabe und mit
ungültiger Eingabe. Das Feld `version` darin gibt die exakte veröffentlichte
Actor-Quellversion an.

`failedTargets` zählt Ziele, die nach einem Lesefehler abgebrochen wurden.
Akzeptierte Profile bleiben abrechenbare Datensätze. Diese Runs nutzen
`completionReason: "partial_failure"`. Schnelle serverseitige Paginierung
folgt demselben Berichtsvertrag.

Das Standard-Apify-Zeitlimit ist `0`. Runs haben kein Zeitlimit. Der Actor
folgt jedem Live-Cursor bis zur Obergrenze oder zum Ende der Quelle. Ein
Aufrufer kann dennoch ein endliches Zeitlimit setzen. Dann bedeutet
`completionReason: "deadline_reached"`, dass dieses Limit nahe ist. Der
Actor reserviert die letzten 15 Sekunden für Checkpoints, Datensätze,
Reports und einen sauberen Abschluss. Gültige Profile bleiben geliefert und
werden einmal abgerechnet. Unvollständige Paginierung bleibt fortsetzbar.

Unabhängige Ziele laufen gleichzeitig. Jedes Ziel behält eine geordnete
Cursor-Paginierung. Dataset-Schreibvorgänge halten Obergrenzen,
Deduplizierung, Zuordnung und Abrechnung atomar.

- Starts, Ziele und Beziehungsauswahl verursachen keine separate
  Suchgebühr.
- Filter (`minFollowers`, `verifiedOnly`, `bioContains`, `locationContains`,
  `minFollowing`, `maxFollowing`, `minStatuses`, `maxStatuses`,
  `minAccountAgeDays`, `verifiedType`, `usernameContains`, `hasWebsite`,
  `hasLocation`) laufen, bevor ein Profil in dein Dataset gelangt.
- Bei `dedupeAcrossTargets: true` werden Duplikate vor dem Schreiben
  entfernt.
- Vom Dataset abgelehnte Datensätze werden nicht abgerechnet.
- Runs ohne Eingabe, mit ungültiger Eingabe und ohne Ausgabe schreiben 1
  verwertbaren Datensatz in die kostenlose Ausgabe `diagnostics`.

Setze `maxTotalChargeUsd` in der Apify-API oder „Max cost per run" in der
Console, um die Ausgaben hart zu begrenzen. Apify legt dieses Limit dem
Actor als `ACTOR_MAX_TOTAL_CHARGE_USD` offen, und der Actor stoppt, bevor er
Datensätze darüber hinaus akzeptiert. Lass `maxItems` leer, damit der Run so
viele Profile zurückgibt, wie das Budget erlaubt. Setze `maxItems` nur,
wenn du eine kleinere Ergebnisobergrenze als das Budget willst.

## Wie nutze ich X Follower Scraper, um Follower-Daten zu scrapen?

### 1. Profil- oder Listen-URLs einfügen

Füge Profil-, Listen- oder Community-URLs ein. Der Scraper leitet jede URL
zu ihrer Beziehung:

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

### 2. Handles in großen Mengen

Kurzform für viele `/<handle>/followers`-Ziele. Nutzernamen akzeptieren `@`
oder kein Präfix:

```json
{
  "twitterHandles": ["elonmusk", "nasa", "openai"],
  "relation": "followers",
  "maxItems": 1000
}
```

Setze `relation` auf `followers`, `following` oder `verified_followers`, um
festzulegen, was für jedes Handle gescrapt wird.

Akzeptierte Aliasse für dieselbe Eingabe sind `username`, `usernames` und
`user_names`.

### 3. Runs mit mehreren Beziehungen

```json
{
  "usernames": ["nasa"],
  "relations": ["followers", "following"],
  "maxItems": 1000
}
```

Du kannst auch Booleans wie `getFollowers`, `getFollowing`,
`getVerifiedFollowers`, `getListMembers`, `getListFollowers` und
`getCommunityMembers` verwenden.

### 4. Nach numerischen Nutzer-, Listen- oder Community-IDs scrapen

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

Akzeptierte Aliasse für numerische Nutzer-IDs sind `twitterUserIds` und
`user_ids`.

`relation` gilt für numerische Nutzer-IDs. Listen-IDs verwenden standardmäßig
Mitglieder. Community-IDs verwenden immer Mitglieder. `maxItemsPerTarget`
verhindert, dass das erste große Ziel die globale Obergrenze aufbraucht.

### 5. Filtern, bevor du zahlst

Wende Filter an, damit nur passende Profile in dein Dataset gelangen:

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

Der Actor kann mehr Profile prüfen, als er schreibt. Du zahlst nur für
Datensätze, die jeden Filter bestehen und in dein Dataset gelangen.

Trenne Alternativen für `bioContains` mit Kommas oder Zeilenumbrüchen. Ein
Profil besteht, wenn seine Bio einen der angegebenen Begriffe enthält. Der
Abgleich achtet nicht auf Groß-/Kleinschreibung.

### 6. Zielgruppenüberschneidungen finden

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

Die Ausgabe enthält einen Datensatz pro eindeutigem Profil. Gemeinsame
Profile enthalten `sourceTargets`, `sourceRelations`, `sourceUrls`,
`sourceTargetKeys` und `overlapCount`, sodass du nach Überschneidung
sortieren oder direkt nach CSV exportieren kannst. Halte `maxItems` hoch
genug, damit jedes Ziel Datensätze beiträgt; nutze `maxItemsPerTarget`, um
die Tiefe pro Account zu steuern.

### Akzeptierte URL-Formen

| URL                                          | Beziehung                                 |
| --------------------------------------------- | ------------------------------------------ |
| `https://x.com/<handle>/followers`            | `followers`                                |
| `https://x.com/<handle>/verified_followers`   | `verified_followers`                       |
| `https://x.com/<handle>/following`            | `following`                                |
| `https://x.com/<handle>`                      | Standard-`relation` (followers, falls leer) |
| `https://x.com/i/lists/<id>/members`          | `list_members`                             |
| `https://x.com/i/lists/<id>/followers`        | `list_followers`                           |
| `https://x.com/i/lists/<id>`                  | `list_members`                             |
| `https://x.com/i/communities/<id>/members`    | `community_members`                        |
| `https://x.com/i/communities/<id>`            | `community_members`                        |
| `<handle>/followers`                          | `followers`                                |
| `<handle>/following`                          | `following`                                |
| `<handle>/verified_followers`                 | `verified_followers`                       |
| `lists/<id>/members`                          | `list_members`                             |
| `lists/<id>/followers`                        | `list_followers`                           |
| `communities/<id>/members`                    | `community_members`                        |

`twitter.com` und `mobile.twitter.com` werden ebenfalls überall akzeptiert.

## Eingabe

Siehe den Tab **Input** für die vollständige Liste der Optionen. Alle Felder
sind optional, außer mindestens eines von: `startUrls`, `twitterHandles`,
`userIds`, `listIds` oder `communityIds`, oder deren dokumentierte Aliasse.

Beispiele:

- Füge ein Wettbewerber-Handle zu `twitterHandles` mit
  `relation: "followers"` hinzu.
- Füge `https://x.com/<handle>/verified_followers` in Start-URLs ein, um
  verifizierte Profile zu erhalten.
- Füge eine Listen-URL in Start-URLs ein, um deren Mitglieder zu prüfen.
- Füge 2 oder mehr Handles hinzu. Setze `dedupeMode: "first"`, um nur den
  ersten passenden Profil-Datensatz zu behalten, oder nutze
  `dedupeMode: "merge"`, um einen Datensatz mit allen passenden Quellzielen
  zu behalten.

### Console- & API-Eingabe-UX

Die Console bietet folgende Steuerelemente:

- Das Feld „Start URLs" akzeptiert URL-Strings oder
  `{ "url": "..." }`-Objekte. Sein JSON-Editor erhält beide API-Formate.
- Relation, Output Mode und Dedupe Mode sind validierte Auswahlfelder.
- Relations ist ein validiertes Mehrfachauswahlfeld für Runs mit mehreren
  Beziehungen.
- Ergebnisobergrenzen akzeptieren ganze Zahlen ab 1.
- Numerische Profilfilter akzeptieren ganze Zahlen ab 0.

Nutze kanonische Felder in neuen Integrationen. Kompatibilitätsaliasse
bleiben in JSON, API, SDK, Automatisierung und Task-Eingaben verfügbar. Dazu
gehören `outputVariant` und `includeRaw` als Aliasse für Output Mode. Ebenso
`dedupeAcrossTargets` als Alias für Dedupe Mode. Das visuelle Formular blendet
Aliasse aus, die ein kanonisches Steuerelement duplizieren. Bestehende
JSON- und gespeicherte Task-Eingaben behalten ihr aktuelles Verhalten.

### Immer den aktuellsten Build verwenden

Store-Runs nutzen die `latest`-Build-Konfiguration des Actors. API-Clients
sollten die Build-Überschreibung weglassen oder `build=latest` übergeben.
Aktualisiere Tasks und Integrationen, die einen älteren Build fixieren.
Fixierte Builds bewegen sich nie automatisch.

## Ausgabe

Jedes Profil ist ein JSON-Objekt. Der kompakte Modus gibt normalisierte
öffentliche Felder, Schemaversionsfelder und Quellmetadaten zurück, sofern
verfügbar:

Dataset- und Run-Report-Schemas beschreiben jedes zurückgegebene Feld.
Primitive Felder enthalten auch Beispiele für Agents und generierte
Integrationen.

Beispielwerte dienen nur der Veranschaulichung. Antworten spiegeln
Quelldaten zur Laufzeit wider.

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

Der Merge-Dedupe-Modus fügt Überschneidungsfelder hinzu:

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

Exportiere als JSON, CSV, Excel oder HTML aus dem Apify-Dataset.

## Run-Optionen

- Setze die maximale Apify-Gesamtgebühr, um die Run-Kosten zu begrenzen.
  Lass `maxItems` leer, um innerhalb dieses Budgets die maximale Anzahl
  Datensätze zu erhalten, oder setze `maxItems` und `maxItemsPerTarget`,
  wenn du weniger Profile willst.
- Kombiniere `minFollowers`, `verifiedOnly`, `verifiedType`, `minStatuses`,
  `usernameContains`, `bioContains`, `locationContains`, `hasWebsite` und
  `hasLocation`, um das abgerechnete Dataset einzugrenzen.
- Setze `dedupeMode: "first"`, wenn du mehrere Wettbewerber-Handles scrapst,
  um nur eindeutige Profile über alle Ziele hinweg zu erhalten.
- Setze `dedupeMode: "merge"`, um einen Datensatz pro Profil mit jedem
  passenden Quellziel zu erhalten.
- Setze `outputMode: "full"`, um optionale Profilfelder wie angeheftete
  Tweet-IDs, Entitäten und Profilmetadaten zu erhalten, sofern verfügbar.
- Setze `outputMode: "raw"` oder `includeRaw: true`, um ein bereinigtes
  `raw`-Objekt neben normalisierten Feldern einzuschließen.
- Plane wiederkehrende Actor-Runs und speichere jedes Dataset, um Profil-IDs
  zu vergleichen. Xquik-Monitore senden unterstützte Tweet- und
  Profilereignisse, keine Änderungen an Follower-Listen.

## Anwendungsfälle

- Exportiere Wettbewerber-Follower für die Lead-Recherche.
- Vergleiche Zielgruppen über deinen Account, Wettbewerber und öffentliche
  Personen hinweg.
- Filtere nach Follower-Anzahl und Verifizierung, um passende Profile zu
  finden.
- Exportiere Mitglieder relevanter X-Communities.
- Baue öffentliche Social-Network-Datasets für die Forschung auf.
- Segmentiere Follower-Basen nach Bio-Stichwort, Standort oder Profiltyp.

## Verantwortungsvoller Umgang mit Daten

Der Actor fragt öffentliche X-Profilfelder ab. Ergebnisse können
personenbezogene Daten enthalten, einschließlich selbst angegebener
Standorte. Bestätige einen rechtmäßigen Zweck und befolge geltende
Datenschutzregeln. Frage bei Unsicherheit qualifizierte Rechtsberatung.

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
- [X (Twitter) Brand Monitoring](https://apify.com/xquik/x-twitter-brand-monitoring):
  Verfolgt Markenerwähnungen mit KI-Relevanz, Sentiment & Antworten zur
  Kundenerfahrung & vergleicht Runs. Nutze ihn, wenn du eine Marke über Zeit
  beobachtest. Ab $0.0003 pro analysiertem Tweet.
- [X Tweet Sentiment Analysis](https://apify.com/xquik/x-tweet-sentiment-analysis):
  Kennzeichnet Haltung, Intensität & Sarkasmus-Wahrscheinlichkeit für jeden
  Tweet mit KI. Nutze ihn, wenn du allgemeines Sentiment zu einem Thema
  brauchst. Ab $0.0003 pro analysiertem Tweet.
- [X (Twitter) Stock & Crypto Signal](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  Kennzeichnet bullische, bärische, neutrale oder gemischte Haltung,
  Inhaltstyp, Überzeugungsgrad & Asset-Relevanz mit KI. Nutze ihn, wenn du
  Aktien, Krypto oder Trading-Talk verfolgst. Ab $0.0003 pro analysiertem
  Tweet.
- [X (Twitter) News Monitor with AI](https://apify.com/xquik/x-twitter-news-monitor):
  Kennzeichnet News-Beiträge nach Format, Quellenangabe & Themenrelevanz mit
  KI. Nutze ihn, wenn du Berichterstattung von Kommentaren trennst. Ab
  $0.0003 pro analysiertem Tweet.
- [X Tweet Classifier with AI](https://apify.com/xquik/x-twitter-tweet-classifier):
  Beantwortet deine eigenen Kategorie-, Score- & Ja/Nein-Fragen für jeden
  Tweet mit KI. Nutze ihn, wenn die vorgefertigten Analysen nicht zu deinen
  Labels passen. Ab $0.0003 pro analysiertem Tweet.

## Brauchst du mehr als Scraping?

Xquik bietet außerdem 47 Dashboard-Tools, 129 REST-Operationen, signierte
Webhooks und einen MCP-Server.

- [API-Dokumentation](https://docs.xquik.com/introduction): Anleitungen zur
  REST-API
- [Followers API](https://docs.xquik.com/api-reference/x/followers): ruft
  die verfügbaren Follower eines Accounts ab
- [Following API](https://docs.xquik.com/api-reference/x/following): zeigt,
  wem ein Nutzer folgt
- [List Members API](https://docs.xquik.com/api-reference/x/list-members):
  exportiert Mitglieder einer öffentlichen X-Liste
- [MCP-Server](https://docs.xquik.com/mcp/overview): entdeckt und führt
  unterstützte JSON- oder Text-Operationen aus
- [Webhooks](https://docs.xquik.com/webhooks/overview): empfängt
  unterstützte Tweet- und Profilereignisse

## FAQ

**Brauche ich einen X-API-Schlüssel?** Nein. Dieser Scraper nutzt seine
eigene Infrastruktur. Kein Login oder Zugangsdaten erforderlich.

**Was begrenzt einen Run?** Dein angefordertes Item-Limit und das
Apify-Ausgabenlimit stoppen den Run. Apify-Konto- und Plattformlimits
gelten weiterhin.

**Wie schnell ist es?** Die Laufzeit hängt von der Zielgröße, den Filtern
und der Verfügbarkeit der Quelle ab. Tief gefilterte Runs checkpointen den
Console-Fortschritt alle 5 Seiten. Das reduziert Nicht-Daten-Traffic
zwischen den Seitenabrufen.

**Warum liefert mein Run weniger Datensätze als `maxItems`?** Filter wie
`minFollowers`, `verifiedOnly` und `bioContains` greifen vor dem Schreiben.
Lockere die Filter, um mehr Ergebnisse zu erhalten.

**Wie viele Follower kann ich von einem einzelnen Account scrapen?** X
paginiert große Accounts in Batches. Erhöhe das Apify-Zeitlimit für den Run,
um mehr Seiten abzurufen. `maxItemsPerTarget` begrenzt nur jedes einzelne
Ziel.

**Wiederholt der Actor vorübergehende Fehler?** Ja. Er unternimmt bis zu 3
Versuche pro Seite bei Timeouts, 429- und 5xx-Antworten. Er beachtet
`Retry-After`, sofern vorhanden. Andernfalls nutzt er exponentiellen
Backoff. Harte Fehler erhalten Teilergebnisse.

**Was passiert kurz vor dem Apify-Zeitlimit für den Run?** Der Actor fügt
kein kürzeres eigenes Zeitlimit hinzu. Er nutzt das von Apify konfigurierte
Limit und reserviert die letzten 15 Sekunden für den Abschluss. Er schreibt
Profile, checkpointet die Paginierung, schreibt den Report und beendet sich.
Vom Dataset nicht akzeptierte Datensätze werden nicht abgerechnet.

**Kann ich dort fortsetzen, wo ich aufgehört habe?** Eine Cursor-Eingabe
zur Fortsetzung ist noch nicht verfügbar. Ein erneuter Run desselben Ziels
startet bei dessen erster verfügbarer Seite.

**Kann ich die Apify-API nutzen, um dies auszuführen?** Ja. Siehe den
[API-Tab](https://apify.com/xquik/x-follower-scraper/api) für
Python-, JavaScript- und cURL-Beispiele.

**Kann ich wiederkehrende Scrapes planen?** Ja. Nutze Apifys integrierte
[Planung](https://docs.apify.com/platform/schedules), um diesen Actor nach
einem Zeitplan auszuführen. Vergleiche gespeicherte Datasets, um
Follower-Änderungen zu finden.

**Wo melde ich Probleme?** Nutze den Tab „Issues" auf der Actor-Seite.

**Wo finde ich die API-Dokumentation?** Lies die
[API-Dokumentation](https://docs.xquik.com/introduction).
