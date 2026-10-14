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
liefert die vollständigsten X-Daten. X Community Scraper von Xquik sammelt
Community-Infos, Posts, Medien, Suchergebnisse, Mitglieder & Moderatoren &
findet Communities per Stichwort oder Thema. Die meisten anderen Apify Actors
rechnen ab, bevor sie filtern oder Duplikate entfernen. Xquik rechnet nur
gelieferte, eindeutige Ergebnisse ab, die zu deinen Filtern passen.

Sammle Infos, Posts (Tweets), Medien, Stichwort-Treffer, Mitglieder &
Moderatoren von Communities auf X (Twitter) aus Community-URLs oder -IDs. Finde
Communities per Stichwort oder Thema oder liste die, die X vorschlägt. Du zahlst
**$0.00015 pro geliefertem Datensatz**, & Apify berechnet die Plattformnutzung
separat. Du brauchst keinen X-API-Schlüssel & keinen Login.

> Xquik ist ein unabhängiger Drittanbieter-Dienst. Nicht verbunden mit X Corp.
> "Twitter" und "X" sind Marken von X Corp.

## Was macht X Community Scraper?

X Community Scraper von Xquik liest öffentliche Communities auf X (Twitter) aus
ihren URLs oder IDs. Er liefert für jede Community Infos, Posts, Medien,
Stichwort-Treffer, Mitglieder & Moderatoren. Er findet auch Communities per
Stichwort oder Thema & listet die, die X vorschlägt.

### Wichtigste Funktionen

- Lies viele Communities & Ressourcen in 1 Run.
- Hol dir Community-Infos mit Regeln, Beitrittsfrage, Ersteller, Admin & Thema.
- Sammle Posts, neueste zuerst, oder die Top-Posts, die X am höchsten einstuft.
- Sammle den Tab Medien oder durchsuche die Posts einer Community per Stichwort.
- Exportiere Mitglieder & Moderatoren oder finde Mitglieder per Name.
- Finde Communities per Stichwort oder Thema, mit vollständigen Datensätzen.
- Filtere Posts nach Datum, Sprache, Medien & Interaktionen.
- Filtere Mitglieder nach Reichweite, Account-Alter & Verifizierung.
- Filter & Duplikatentfernung laufen vor der Abrechnung.
- Runs behalten gelieferte Datensätze & Fortschritt, wenn Apify sie neu startet.

### Anwendungsfälle

- Erstelle Lead-Listen aus den Mitgliedern einer Nischen-Community.
- Verfolge Produktfeedback & Funktionswünsche in einer Nutzer-Community.
- Finde Launches, Stellenanzeigen & Finanzierungsnews unter Gründern.
- Vergleiche Communities nach Größe, Thema & Aktivität.
- Lies die Regeln einer Community, bevor du dort postest.
- Finde die Moderatoren einer Community & ihre Mitglieder mit den meisten
  Followern.
- Sammle Posts mit Bildern oder Videos für kreative Recherche.

### Welche Daten kann X Community Scraper extrahieren?

Community-Datensätze nutzen `resultType: "community"`. Das sind die wichtigsten
Felder:

| Feld              | Beschreibung                                     |
| ----------------- | ------------------------------------------------ |
| `id`              | Community-ID                                     |
| `name`            | Name der Community                               |
| `description`     | Beschreibung der Community                       |
| `url`             | URL der Community                                |
| `member_count`    | Anzahl der Mitglieder                            |
| `moderator_count` | Anzahl der Moderatoren                           |
| `rules`           | Regeln der Community                             |
| `question`        | Was die Community beim Beitritt fragt            |
| `primary_topic`   | Das Thema, dem X die Community zuordnet          |
| `searchTags`      | Tags, über die X die Community findet            |
| `creator`         | Das öffentliche Profil des Erstellers            |
| `admin`           | Das öffentliche Profil des Admins                |
| `membersFacepile` | Vorschau der Mitglieder auf der Community-Seite  |
| `is_nsfw`         | Ob die Community als sensibel markiert ist       |
| `banner`          | Banner-URL, Größe & Hauptfarben                  |
| `sourceTarget`    | URL, ID, Stichwort oder Thema aus deiner Eingabe |

Jede Ressource fügt Datensätze ihres eigenen Typs hinzu:

| `resultType`         | Ressource oder Eingabe      | 1 Datensatz pro          |
| -------------------- | --------------------------- | ------------------------ |
| `community`          | `info`, Stichwörter, Themen | Community                |
| `communityTweet`     | `tweets`, `search`          | Post                     |
| `communityMedia`     | `media`                     | Post mit Foto oder Video |
| `communityMember`    | `members`, `memberNames`    | Mitglied                 |
| `communityModerator` | `moderators`                | Moderator                |
| `communityTopic`     | `listTopics`                | Thema                    |

Post-Datensätze enthalten `text`, `createdAt`, `likeCount`, `replyCount`,
`retweetCount`, `viewCount`, `media` & das Profil `author`. Datensätze von
Mitgliedern & Moderatoren enthalten die Profilfelder, etwa `username`,
`followers`, `verified` & `communityRole`.

## Wie nutze ich X Community Scraper, um Community-Daten zu scrapen?

Folge diesen Schritten in der Apify Console:

1. Öffne ein [Task-Beispiel](#task-beispiele) oder den Input-Tab.
2. Füge Community-URLs in `startUrls` oder IDs in `communityIds` ein.
3. Wähle `resources` & ergänze Filter wie `sinceDate` oder `minLikes`.
4. Setze `maxItems` & klicke dann auf Start.
5. Exportiere das Dataset als JSON, CSV, Excel oder HTML.

Jedes Rezept unten ist eine vollständige Eingabe.

### Community-Infos & neueste Posts abrufen

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["info", "tweets"],
  "maxItems": 200
}
```

`startUrls` nimmt jede URL als einfachen String oder als Objekt
`{ "url": "..." }`:

```json
{
  "startUrls": [
    "https://x.com/i/communities/1493446837214187523",
    { "url": "https://x.com/i/communities/1493446837214187523" }
  ]
}
```

### Top-Posts sammeln

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["tweets"],
  "postsOrder": "Top",
  "minLikes": 50,
  "maxItems": 100
}
```

Setze `postsOrder` auf `Top` für die Posts, die X am höchsten einstuft. Füge
`"media"` zu `resources` hinzu, um den Tab Medien zu lesen.

### Posts einer Community durchsuchen

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["search"],
  "query": "pricing",
  "queryType": "Latest",
  "maxItems": 100
}
```

### Mitglieder & Moderatoren exportieren

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["members", "moderators"],
  "minFollowers": 1000,
  "maxItems": 1000
}
```

Mitgliederfilter gelten für Datensätze von Mitgliedern & Moderatoren. Gefilterte
Datensätze landen nie im Dataset, also zahlst du nie dafür.

### Mitglieder per Name finden

```json
{
  "communityIds": ["1493446837214187523"],
  "memberNames": ["marckohlbrugge"],
  "maxItems": 100
}
```

X prüft bis zu 10 passende Accounts pro Name, wie die Mitgliedersuche auf x.com.
Jedes gefundene Mitglied ist 1 Datensatz `communityMember` mit seiner
`communityRole`. Ein Run mit `memberNames` liest keine andere Ressource, außer
`resources` nennt sie.

### Communities per Stichwort oder Thema finden

```json
{
  "searchTerms": ["artificial intelligence"],
  "topics": ["Technology"],
  "maxItems": 100
}
```

Jede gefundene Community enthält ihre Regeln & die Profile von Ersteller, Admin
& Mitgliedern. Setze `includeDetails` auf `false` für einen schnelleren Run mit
dem kurzen Datensatz. Aktiviere `includeSuggested` für die Communities, die X
vorschlägt. Sie können sich je Run unterscheiden. Oder aktiviere `listTopics`
für jedes Thema & seine Unterthemen.

## Task-Beispiele

Wähle aus 50 öffentlichen Tasks. Jeder hat eine begrenzte Eingabe & eine
passende Dataset-Ansicht. Bearbeite einen Task, bevor du ihn startest.

- [Überblick über eine X-Community abrufen](https://apify.com/xquik/x-community-scraper/examples/get-an-x-community-overview)
- [Details einer X-Community mit neuesten Posts abrufen](https://apify.com/xquik/x-community-scraper/examples/get-community-details-with-recent-posts)
- [Top-Posts zu Technologie in einer X-Community finden](https://apify.com/xquik/x-community-scraper/examples/find-top-technology-posts-in-a-community)
- [Mitglieder einer X-Community exportieren](https://apify.com/xquik/x-community-scraper/examples/export-x-community-members)
- [Verifizierte Mitglieder einer X-Community exportieren](https://apify.com/xquik/x-community-scraper/examples/export-verified-community-members)
- [Moderatoren einer X-Community auflisten](https://apify.com/xquik/x-community-scraper/examples/list-x-community-moderators)
- [Entwickler-Communities nach Größe & Thema vergleichen](https://apify.com/xquik/x-community-scraper/examples/compare-developer-communities-by-size)
- [Regeln einer X-Community vor dem Posten lesen](https://apify.com/xquik/x-community-scraper/examples/read-community-rules-before-you-post)
- [Finanzierungsposts in einer Startup-Community finden](https://apify.com/xquik/x-community-scraper/examples/find-funding-posts-in-a-startup-community)
- [Stellenanzeigen in einer Software-Engineering-Community finden](https://apify.com/xquik/x-community-scraper/examples/find-hiring-posts-in-a-software-community)
- [Mitglieder einer Startup-Community mit großer Reichweite finden](https://apify.com/xquik/x-community-scraper/examples/find-startup-community-members-with-big-audiences)
- [Eine kleine X-Community komplett prüfen](https://apify.com/xquik/x-community-scraper/examples/audit-a-small-community-end-to-end)

## Was kostet es, X-Communities zu scrapen?

X Community Scraper von Xquik kostet auf jedem Apify-Plan $0.00015 pro
geliefertem Datensatz. Apify berechnet deine Plattformnutzung separat. Xquik
erhebt 1 Gebühr pro geliefertem Datensatz. Diagnosen in der Ausgabe
`diagnostics` sind kostenlos.

- Du brauchst kein Xquik-Abo.
- Du zahlst keine separate Gebühr für Start, Communities, Ressourcen oder
  Suchanfragen.
- Eine gefundene Community kostet 1 Datensatz, mit oder ohne vollständige
  Details.
- Filter & Deduplizierung laufen vor der Abrechnung. Du zahlst nie für
  gefilterte oder doppelte Datensätze.
- Die Apify-Einstellung für maximale Gesamtkosten begrenzt die gelieferten
  Datensätze.

Ein Run mit Problemen oder ein großer Run schreibt zusätzlich einen Eintrag
`run-report`. Ein kleiner Run ohne Probleme überspringt ihn & spart
Apify-Nutzung. Aktiviere `alwaysSaveRunRecords`, um ihn bei jedem Run zu
schreiben.

Unter [Run-Optionen](#run-optionen) steht, wie du die Kosten eines Runs
begrenzt.

## Leere, unvollständige & gestoppte Runs

X Community Scraper von Xquik erklärt leere, unvollständige & gestoppte Runs
kostenlos. Der Run-Status nennt den Grund für den Stopp. Er zählt auch
abgerechnete Ergebnisse & gelesene Ziele.

### Leere Ergebnisse

Der Status eines leeren Runs rät dir, Ziele & Filter zu prüfen. Gefilterte
Datensätze verbrauchen nie dein Ergebnislimit. Ein Run, der jedes Ziel liest &
keinen Datensatz zurückbekommt, schreibt keinen Eintrag. Sein Status nennt den
Grund & sagt, was du ändern solltest. Der Actor liefert nur öffentliche
Communities, die X zeigt. Die verfügbaren Felder variieren je nach Community.

### Unvollständige Runs

Eine unterbrochene Extraktion schreibt eine kostenlose `partial`-Diagnose.
Gelieferte Datensätze bleiben im Dataset. Lies `availableResults`,
`failedTargets`, `retryable` & `nextAction`, bevor du es erneut versuchst. Ein
erfolgreicher Actor-Abschluss bestätigt die Lieferung, nicht die vollständige
Extraktion.

### Stoppursachen

Der Run-Status nennt jede Ursache für einen vorzeitigen Stopp. `stopCauses`
listet jede Ursache mit eigenen Feldern `message`, `retryable` & `nextAction`.
Die Ursachen sind `target_not_found`, `target_failed`, `pagination_safety_limit`
& `deadline_reached`. Ein fehlendes Ziel kommt nur auf die Liste, wenn eine
andere Ursache den Run gestoppt hat. Der Run ist `retryable`, wenn mindestens 1
Ursache es ist. Der Actor setzt kein eigenes Zeitlimit.

## Eingabe

Der Input-Tab listet jede Option. Gib Community-URLs oder -IDs, Stichwörter
oder Themen an oder aktiviere `includeSuggested` oder `listTopics`. Jedes andere
Feld ist optional.

| Feld                           | Funktion                                                           |
| ------------------------------ | ------------------------------------------------------------------ |
| `startUrls`                    | Community-URLs auf x.com                                           |
| `communityIds`                 | Numerische Community-IDs                                           |
| `resources`                    | `info`, `tweets`, `media`, `search`, `members`, `moderators`       |
| `query`                        | Stichwort für die Ressource `search`                               |
| `queryType`                    | Reihenfolge `Latest` oder `Top` für die Stichwortsuche             |
| `postsOrder`                   | Reihenfolge `Latest` oder `Top` für Posts                          |
| `memberNames`                  | Namen oder Nutzernamen für die Mitgliedersuche                     |
| `searchTerms`                  | Stichwörter, um Communities zu finden                              |
| `topics`                       | Themennamen oder -IDs, etwa `Technology`                           |
| `includeSuggested`             | Ergänzt die Communities, die X zum Beitreten vorschlägt            |
| `listTopics`                   | Ergänzt jedes Community-Thema & seine Unterthemen                  |
| `includeDetails`               | Ergänzt Details zu per Stichwort oder Thema gefundenen Communities |
| `maxItems`                     | Obergrenze für gelieferte Datensätze im ganzen Run                 |
| `maxItemsPerTarget`            | Obergrenze für Datensätze pro Community-Ressource                  |
| `sinceDate`, `untilDate`       | Behält Posts in einem Zeitraum                                     |
| `language`                     | Behält Posts mit 1 Sprachcode                                      |
| `mediaType`                    | Behält Posts mit Bildern, Videos, GIFs, Links oder ohne Medien     |
| `minViews`, `minLikes`         | Behält Posts über einer Zahl an Aufrufen oder Likes                |
| `minReplies`, `minRetweets`    | Behält Posts über einer Zahl an Antworten oder Reposts             |
| `nativeRetweets`               | Behält nur native Reposts                                          |
| `verifiedOnly`                 | Behält verifizierte Autoren, Mitglieder oder Moderatoren           |
| `minFollowers`, `maxFollowers` | Behält Mitglieder in einem Reichweitenbereich                      |
| `minAccountAgeDays`            | Behält Mitglieder, deren Account mindestens so viele Tage alt ist  |
| `dedupeAcrossTargets`          | Entfernt Duplikate über Communities hinweg vor der Abrechnung      |

### Von einem anderen Community-Actor wechseln

Die Namen `ranking` & `sort` funktionieren wie `postsOrder`. `Top` oder
`Relevance` liest die Top-Posts. Setzt du einen davon & `postsOrder`, gewinnt
der Wert in `postsOrder`. Das Run-Log nennt das Feld, das verloren hat.

### Die richtigen Eingaben wählen

- Für einen schnellen Überblick behalte die Standard-Ressourcen `info` &
  `tweets`.
- Für Lead-Listen wähle `members` mit `minFollowers` & `verifiedOnly`.
- Für Produktrecherche wähle `search` mit einer `query` wie `bug` oder `pricing`.
- Für kreative Recherche wähle `media` & setze `mediaType`.
- Um Communities zu entdecken, sende `searchTerms` oder `topics` ohne IDs.

## Ausgabe

Jeder Datensatz ist ein JSON-Objekt. Jeder Datensatz enthält `sourceTarget` für
die eingegebene Community, das Stichwort oder das Thema. X Community Scraper von
Xquik behält die Quellfelder & erfindet keine Werte. Das Dataset-Schema gibt
jedem Feld einen Titel & eine Beschreibung.

Die Beispiele zeigen Musterwerte. Echte Ergebnisse enthalten Live-Daten. Ein
Datensatz mit Community-Infos sieht so aus:

```json
{
  "resultType": "community",
  "sourceTarget": "1493446837214187523",
  "id": "1493446837214187523",
  "name": "Sample Community",
  "description": "A place to share what you build.",
  "member_count": 1200,
  "moderator_count": 4,
  "primary_topic": "Technology"
}
```

Exportiere das Dataset als JSON, CSV, Excel oder HTML.

## Run-Optionen

- Setze die maximalen Gesamtkosten von Apify, um die Run-Kosten zu begrenzen.
  Lass `maxItems` hoch, um so viele Datensätze zu erhalten, wie das Budget
  erlaubt.
- Setze `maxTotalChargeUsd` in der Apify-API oder Max cost per run in der
  Console.
- Pack alle deine Communities in 1 Run. Jeder Run zahlt Apify dieselben
  Startkosten.
- `maxItemsPerTarget` begrenzt die Datensätze jeder Community-Ressource.
- `maxConcurrency` legt fest, wie viele Community-Ressourcen gleichzeitig
  laufen. Der Standardwert ist die schnellste sichere Einstellung.

Wähle `latest` für jeden Run, um jeden veröffentlichten Fix zu erhalten.
Gespeicherte Tasks & Zeitpläne behalten ihre eigene Build-Wahl, also lass sie
auf `latest`.

## Verwandte Xquik-Actors

Jeder Xquik-Actor nutzt dieselbe Extraktions-Engine, rechnet erst nach dem
Filtern ab & liefert dieselben Diagnosen. Wähle den, der zu deinen Daten passt.

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
  scrapt die Posts, die Posts zitieren, mit Text, Medien, Zahlen, Autoren & 11
  Filtern. Nutze ihn, wenn du untersuchst, wer Posts zitiert hat & was gesagt
  wurde. Ab $0.00015 pro Post.
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
  Verbindungsart zu X & Benutzernamen-Änderungen. Nutze ihn, wenn du prüfst, wo
  Accounts ansässig sind. Ab $0.00015 pro Account.
- [X Email Scraper](https://apify.com/xquik/x-email-scraper) holt die E-Mails,
  Telefonnummern & Links, die Accounts in ihren Profilen veröffentlichen, anhand
  von Nutzernamen, Followern oder Nutzersuchen. Nutze ihn, wenn du die E-Mails
  brauchst, die Profile veröffentlichen. Ab $0.00015 pro Profil.
- [X List Scraper](https://apify.com/xquik/x-list-scraper) scrapt Posts,
  Mitglieder & Follower von Listen aus Listen-URLs oder -IDs. Nutze ihn, wenn
  eine kuratierte Liste deine Quellen festlegt. Ab $0.00015 pro Datensatz.
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
  mit KI. Nutze ihn, wenn du allgemeines Sentiment zu einem Thema brauchst. Ab
  $0.0003 pro analysiertem Post.
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

## Brauchst du mehr als Scraping?

Xquik bietet außerdem 53 Dashboard-Tools, eine REST-API, signierte Webhooks &
einen MCP-Server.

- [API-Dokumentation](https://docs.xquik.com/introduction): Anleitungen zur
  REST-API
- [API für Community-Infos](https://docs.xquik.com/api-reference/x/community-info):
  Datensatz von 1 Community abrufen
- [API für Community-Posts](https://docs.xquik.com/api-reference/x/community-tweets):
  Posts einer Community abrufen
- [API für Community-Mitglieder](https://docs.xquik.com/api-reference/x/community-members):
  Mitglieder einer Community exportieren
- [API zum Finden von Communities](https://docs.xquik.com/api-reference/x/community-find):
  Communities per Stichwort finden
- [MCP-Server](https://docs.xquik.com/mcp/overview): unterstützte Tools entdecken
- [Webhooks](https://docs.xquik.com/webhooks/overview): signierte
  Event-Zustellung

## FAQ

Antworten auf häufige Fragen, danach, wo du Hilfe bekommst.

### Brauche ich einen X-API-Schlüssel oder Login?

Nein. X Community Scraper von Xquik braucht keinen X-API-Schlüssel, keinen
Login & keine Zugangsdaten.

### Wie finde ich die ID einer Community?

Öffne die Community auf x.com. Die ID ist die Zahl nach `/i/communities/` in
der URL. Du kannst auch die ganze URL in `startUrls` einfügen.

### Kann ich Mitglieder einer X-Community als CSV oder Excel exportieren?

Ja. Wähle die Ressource `members` & exportiere dann das Dataset als CSV, Excel,
JSON oder HTML.

### Kann ich eine Community ohne ihre ID finden?

Ja. Sende Stichwörter in `searchTerms` oder Themen in `topics`. Jede gefundene
Community ist 1 Datensatz mit vollständigen Details.

### Kann ich die Top-Posts einer Community abrufen?

Ja. Setze `postsOrder` auf `Top`. Ergänze `minLikes` oder `minViews`, um nur
die beliebtesten Posts zu behalten.

### Wie viele Communities kann ich in 1 Run scrapen?

So viele, wie du angibst. `maxItems` & dein Apify-Ausgabenlimit begrenzen die
Datensätze.

### Liest der Actor private Communities?

Nein. X Community Scraper von Xquik liefert nur öffentliche Communities, die X
zeigt.

### Ist es legal, X-Communities zu scrapen?

X Community Scraper von Xquik fragt öffentliche X-Felder ab. Ergebnisse können
personenbezogene Daten enthalten. Prüfe, ob dein Zweck rechtmäßig ist. Befolge
geltende Datenschutzregeln. Hol dir bei Unsicherheit qualifizierten Rechtsrat.

### Warum hat mein Run keine Ergebnisse geliefert?

Lies zuerst den Run-Status. Der Status eines leeren Runs rät dir, Ziele & Filter
zu prüfen. Die kostenlose Ausgabe `diagnostics` erscheint, wenn etwas deine
Aufmerksamkeit braucht. Ihr Feld `stopCauses` gibt jeder Ursache eine
`nextAction`, der du folgen kannst. Der Run listet jede Eingabe, die er nicht
lesen kann, & sagt, wie du sie korrigierst.

### Kann ich API, Zeitpläne & Integrationen nutzen?

Ja. Wähle aus 50 öffentlichen Tasks oder der REST-API von Xquik. Der
[API-Tab](https://apify.com/xquik/x-community-scraper/api) enthält Beispiele
für Python, JavaScript & cURL.
Apify-[Zeitpläne](https://docs.apify.com/platform/schedules) starten
X Community Scraper von Xquik per Cron. Agents nutzen
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Nutze `latest`,
außer du brauchst einen älteren Build.

### Kann ich eine individuelle Lösung bekommen?

Ja. Besuche [xquik.com](https://xquik.com) oder lies die
[API-Dokumentation](https://docs.xquik.com/introduction). Sie deckt Dashboard,
API, MCP-Server & Webhooks ab.

### Wo bekomme ich Hilfe?

Öffne ein Issue auf der Actor-Seite oder schreib mit der Run-ID an
<support@xquik.com>. Kostenlose Diagnosen im Key-Value-Store erklären Runs, die
Aufmerksamkeit brauchen. Ein Run ohne Datensätze nennt den Grund in seinem
Status.
