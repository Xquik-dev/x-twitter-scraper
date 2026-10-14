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
liefert die vollständigsten X-Daten. X Profile Scraper von Xquik sammelt
Profile, Posts, Antworten, Medien & Follower zu jedem Nutzernamen. Die meisten
anderen Apify Actors rechnen ab, bevor sie filtern oder Duplikate entfernen.
Xquik rechnet nur gelieferte, eindeutige Ergebnisse ab, die zu deinen Filtern
passen.

Schlage Twitter-Accounts in großen Mengen nach & lies Profile ohne X-Account.
Scrape Profile, Posts, Antworten, Medien & Follower auf X anhand von
Nutzernamen, IDs oder URLs. Du zahlst **$0.00015 pro geliefertem Datensatz**, &
Apify berechnet die Plattformnutzung separat. Du brauchst keinen X-API-Schlüssel
& keinen Login.

> Xquik ist ein unabhängiger Drittanbieter-Dienst. Nicht verbunden mit X Corp.
> "Twitter" und "X" sind Marken von X Corp.

## Was macht X Profile Scraper?

X Profile Scraper von Xquik liefert öffentliche Profile auf X (Twitter) anhand
von Nutzernamen, numerischen Nutzer-IDs oder Profil-URLs. Zu jedem Profil kannst
du Posts, Antworten, Medien, Highlights, Follower, gefolgte Accounts &
verifizierte Follower ergänzen. Der Scraper übersetzt außerdem Bios & prüft, wer
gerade live sendet.

### Wichtigste Funktionen

- Lies viele Profile in 1 Run aus Nutzernamen, IDs oder URLs.
- Ergänze Posts, Antworten, Medien, Highlights, Follower, gefolgte Accounts oder
  verifizierte Follower als eigene Datensätze.
- Übersetze jede Bio mit `translateBioTo` in eine Sprache deiner Wahl.
- Prüfe mit `checkLiveNow`, ob jedes Profil gerade live sendet.
- Filtere Posts nach Datum, Sprache, Medien & Interaktionen.
- Filtere Profile nach Zielgruppengröße, Account-Alter & Verifizierung.
- Filter & Duplikatentfernung laufen vor der Abrechnung.
- Gelieferte Datensätze & Fortschritt überstehen einen Apify-Neustart.

### Anwendungsfälle

- Reichere Lead-Listen mit Bios, Websites, Standorten & Zielgruppengröße an.
- Vergleiche Accounts der Konkurrenz nach Followern, Posts & Verifizierung.
- Prüfe Creator nach Zielgruppe, Account-Alter & Interaktionen.
- Archiviere Posts, Medien & Highlights eines Accounts.
- Erfasse das Netzwerk eines Accounts über seine Follower & gefolgten Accounts.
- Beobachte, ob Creator & Marken live senden.
- Lies Bios aus anderen Märkten in deiner eigenen Sprache.

### Welche Daten kann X Profile Scraper extrahieren?

Profil-Datensätze nutzen `resultType: "profile"`. Die wichtigsten Felder:

| Feld               | Beschreibung                                            |
| ------------------ | ------------------------------------------------------- |
| `id`               | Numerische Nutzer-ID                                    |
| `username`         | Nutzername ohne `@`                                     |
| `name`             | Anzeigename                                             |
| `description`      | Bio-Text                                                |
| `url`              | Website in Profil-Datensätzen                           |
| `location`         | Vom Inhaber angegebener Standort                        |
| `followers`        | Anzahl der Follower                                     |
| `following`        | Anzahl der gefolgten Accounts                           |
| `statusesCount`    | Anzahl der Posts                                        |
| `mediaCount`       | Anzahl der Posts mit Medien                             |
| `favouritesCount`  | Gefällt-mir-Angaben, die der Account vergeben hat       |
| `listedCount`      | Öffentliche Listen, die den Account enthalten           |
| `createdAt`        | Erstellungszeitpunkt des Accounts                       |
| `verified`         | Ob X eine Verifizierung meldet                          |
| `isBlueVerified`   | Ob der Account eine X-Blue-Verifizierung hat            |
| `verifiedType`     | Verifizierungskategorie, etwa `Government`              |
| `profilePicture`   | URL des Profilbilds                                     |
| `coverPicture`     | URL des Bannerbilds                                     |
| `pinnedTweetIds`   | IDs der angehefteten Posts                              |
| `professional`     | Kategorie & Typ des Professional-Accounts               |
| `accountBasedIn`   | Unverbindliche Länder- oder Regionsangabe von X         |
| `connectedVia`     | Wie sich der Account zuerst mit X verbunden hat         |
| `usernameChanges`  | Wie oft sich der Nutzername geändert hat & wann zuletzt |
| `birthdate`        | Öffentlich gemachte Teile des Geburtsdatums             |
| `subscribersCount` | Anzahl der Abonnenten, wenn X sie liefert               |
| `tipJar`           | Öffentliche Trinkgeld-Links                             |
| `protected`        | Ob der Account seine Posts schützt                      |
| `unavailable`      | Ob der Account nicht verfügbar ist                      |
| `sourceTarget`     | Nutzername, ID oder URL aus deiner Eingabe              |

Das Dataset-Schema dokumentiert alle weiteren Felder, etwa
`identityVerification`, `isAutomated`, `automatedBy`, `withheldInCountries` &
`verificationReason`.

Optionale Datensätze behalten das Response-Format der Xquik-REST-API:

| `resultType`              | Aktiviert durch            | Ein Datensatz pro      |
| ------------------------- | -------------------------- | ---------------------- |
| `profileTweet`            | `includeTweets`            | Post                   |
| `profileReply`            | `includeReplies`           | Post oder Antwort      |
| `profileMedia`            | `includeMedia`             | Post mit Medien        |
| `profileHighlight`        | `includeHighlights`        | Post in den Highlights |
| `profileFollower`         | `includeFollowers`         | Follower               |
| `profileFollowing`        | `includeFollowing`         | Gefolgter Account      |
| `profileVerifiedFollower` | `includeVerifiedFollowers` | Verifizierter Follower |
| `profileBioTranslation`   | `translateBioTo`           | Übersetzte Bio         |
| `profileLive`             | `checkLiveNow`             | Geprüftes Profil       |

Datensätze enthalten nie Angaben, die nur aus deiner Sicht gelten, etwa ob du
einem Account folgst oder ihn blockierst.

## Wie nutze ich X Profile Scraper, um Profildaten zu scrapen?

Folge diesen Schritten in der Apify Console:

1. Öffne ein [Task-Beispiel](#task-beispiele) oder den Input-Tab.
2. Füge Nutzernamen in `twitterHandles`, URLs in `startUrls` oder IDs in
   `userIds` ein.
3. Aktiviere die Ressourcen, die du brauchst, etwa `includeTweets`.
4. Setze `maxItems` & gewünschte Filter, dann klicke auf Start.
5. Exportiere das Dataset als JSON, CSV, Excel oder HTML.

Jedes der folgenden Rezepte ist eine vollständige Eingabe.

### Viele Profile scrapen

```json
{ "twitterHandles": ["nasa", "OpenAI", "apify"], "maxItems": 100 }
```

Jeder Nutzername liefert 1 Profil-Datensatz. Nutzernamen funktionieren mit oder
ohne `@`.

### Profil-URLs oder IDs einfügen

`startUrls` nimmt jede URL als einfachen String oder als Objekt
`{ "url": "..." }`. `userIds` nimmt numerische X-Nutzer-IDs:

```json
{
  "startUrls": ["https://x.com/nasa", { "url": "https://x.com/OpenAI" }],
  "userIds": ["11348282"],
  "maxItems": 100
}
```

Gibst du einen Nutzernamen 2-mal an, liest der Scraper ihn nur 1-mal.

### Posts, Antworten & Medien ergänzen

```json
{
  "twitterHandles": ["nasa"],
  "includeTweets": true,
  "includeMedia": true,
  "sinceDate": "2026-01-01",
  "maxItems": 500
}
```

`includeTweets` folgt dem Tab Posts des Profils. `includeReplies` folgt dem Tab
Antworten. `includeMedia` folgt dem Tab Medien. `includeHighlights` ergänzt die
Posts im Tab Highlights, in der Reihenfolge von X. Ein Profil ohne Highlights
ergänzt keine Datensätze.

### Nur beliebte Posts behalten

```json
{
  "twitterHandles": ["nasa"],
  "includeTweets": true,
  "minLikes": 1000,
  "mediaType": "videos",
  "maxItems": 200
}
```

Post-Filter gelten für optionale Post-Datensätze. Gefilterte Datensätze landen
nie im Dataset, also zahlst du nie dafür.

### Follower & gefolgte Accounts exportieren

```json
{
  "twitterHandles": ["apify"],
  "includeFollowers": true,
  "minFollowers": 1000,
  "verifiedOnly": true,
  "maxItems": 1000
}
```

`includeFollowers`, `includeFollowing` & `includeVerifiedFollowers` ergänzen 1
Profil-Datensatz pro Account. Profil-Filter gelten für diese Datensätze & für
die Hauptprofile.

### Bios übersetzen

```json
{ "twitterHandles": ["nasa", "SpaceX"], "translateBioTo": "es" }
```

Jede Übersetzung ist 1 `profileBioTranslation`-Datensatz mit `text`, `language`
& `sourceLanguage`. Ein Profil ohne Bio erzeugt keinen Datensatz & keine Gebühr.

### Prüfen, wer gerade live ist

```json
{ "twitterHandles": ["nasa", "SpaceX"], "checkLiveNow": true }
```

Jede Prüfung ist 1 `profileLive`-Datensatz mit `live`, `userId`, `userName` &
`broadcast`. `broadcast` enthält den neuesten Broadcast des Profils, live oder
beendet, oder null. Ein fehlendes Profil erzeugt keinen Datensatz.

## Task-Beispiele

Wähle aus 50 öffentlichen Tasks. Jeder hat eine begrenzte Eingabe & eine
passende Dataset-Ansicht. Passe einen Task an, bevor du ihn startest.

- [Die Profilkarte eines X-Accounts abrufen](https://apify.com/xquik/x-profile-scraper/examples/get-an-x-profile-card)
- [Die Profile konkurrierender Marken vergleichen](https://apify.com/xquik/x-profile-scraper/examples/compare-competitor-brand-profiles)
- [Numerische Nutzer-IDs in Profile auflösen](https://apify.com/xquik/x-profile-scraper/examples/resolve-numeric-user-ids-to-profiles)
- [Die neuesten Posts eines Accounts sammeln](https://apify.com/xquik/x-profile-scraper/examples/collect-recent-posts-from-an-account)
- [Die Posts eines Accounts mit den meisten Gefällt-mir-Angaben finden](https://apify.com/xquik/x-profile-scraper/examples/find-an-accounts-most-liked-posts)
- [Die Videos eines Accounts sammeln](https://apify.com/xquik/x-profile-scraper/examples/collect-videos-from-an-account)
- [1 Kalenderjahr eines Accounts archivieren](https://apify.com/xquik/x-profile-scraper/examples/archive-one-year-of-posts)
- [Die Follower eines Accounts exportieren](https://apify.com/xquik/x-profile-scraper/examples/export-the-followers-of-an-account)
- [Die verifizierten Follower eines Unternehmens exportieren](https://apify.com/xquik/x-profile-scraper/examples/export-verified-followers)
- [Follower mit 10.000 oder mehr Followern finden](https://apify.com/xquik/x-profile-scraper/examples/find-influential-followers)
- [Die Zielgruppen-Überschneidung von 2 Design-Tools messen](https://apify.com/xquik/x-profile-scraper/examples/measure-audience-overlap)
- [Ein vollständiges Audit eines Accounts durchführen](https://apify.com/xquik/x-profile-scraper/examples/run-a-full-account-audit)

## Was kostet es, X-Profile zu scrapen?

X Profile Scraper von Xquik kostet auf jedem Apify-Plan $0.00015 pro geliefertem
Datensatz. Apify berechnet deine Plattformnutzung separat. Xquik erhebt 1 Gebühr
pro geliefertem Datensatz. Diagnosen in der Ausgabe `diagnostics` sind
kostenlos.

- Du brauchst kein Xquik-Abo.
- Du zahlst keine separate Gebühr für Start, Profile oder Suchanfragen.
- Filter & Deduplizierung laufen vor der Abrechnung. Du zahlst nie für
  gefilterte oder doppelte Datensätze.
- Ein Profil ohne Bio verursacht keine Übersetzungsgebühr.
- Ein fehlendes Profil verursacht keine Gebühr für die Live-Prüfung.
- Die Apify-Einstellung für die maximale Gesamtgebühr begrenzt die gelieferten
  Datensätze.

Ein Run mit Problemen oder ein großer Run schreibt zusätzlich einen
`run-report`-Eintrag. Ein kleiner Run ohne Probleme überspringt ihn & spart
Apify-Nutzung. Aktiviere `alwaysSaveRunRecords`, um ihn bei jedem Run zu
schreiben.

Um die Kosten eines Runs zu begrenzen, lies [Run-Optionen](#run-optionen).

## Leere, unvollständige & gestoppte Runs

X Profile Scraper von Xquik erklärt leere, unvollständige & gestoppte Runs
kostenlos. Der Run-Status sagt, warum der Run angehalten hat. Er zählt außerdem
abgerechnete Ergebnisse & gelesene Ziele.

### Leere Ergebnisse

Der Status eines leeren Runs rät dir, Ziele & Filter zu prüfen. Gefilterte
Datensätze verbrauchen nie dein Ergebnislimit. Ein Run, der jedes Ziel liest &
keinen Datensatz zurückbekommt, schreibt keinen Eintrag. Sein Status sagt, warum
& was du ändern solltest.

Seit 2024 zeigt X die mit Gefällt mir markierten Posts eines Accounts nur noch
diesem Account. `includeLikes` liefert für andere Accounts keine
`profileLike`-Datensätze.

### Unvollständige Runs

Eine unterbrochene Extraktion schreibt eine kostenlose `partial`-Diagnose.
Gelieferte Datensätze bleiben im Dataset. Lies `availableResults`,
`failedTargets`, `retryable` & `nextAction`, bevor du es erneut versuchst. Ein
erfolgreicher Actor-Abschluss bestätigt die Lieferung, nicht die vollständige
Extraktion.

### Stopp-Ursachen

Der Run-Status nennt jede Ursache für einen vorzeitigen Stopp. `stopCauses`
listet jede Ursache mit eigenen Feldern `message`, `retryable` & `nextAction`.
Die Ursachen sind `target_not_found`, `target_suspended`, `target_failed`,
`pagination_safety_limit` & `deadline_reached`. `target_suspended` nennt die
Accounts, die X gesperrt hat. Ein fehlendes oder gesperrtes Ziel kommt nur auf
die Liste, wenn eine andere Ursache den Run gestoppt hat. Der Run ist
`retryable`, wenn mindestens 1 Ursache es ist.

## Eingabe

Der Input-Tab zeigt jede Option. Gib mindestens 1 von `twitterHandles`,
`startUrls` oder `userIds` an. Alle anderen Felder sind optional.

| Feld                           | Funktion                                                        |
| ------------------------------ | --------------------------------------------------------------- |
| `twitterHandles`               | Nutzernamen, mit oder ohne `@`                                  |
| `startUrls`                    | Profil-URLs auf x.com oder twitter.com                          |
| `userIds`                      | Numerische X-Nutzer-IDs                                         |
| `maxItems`                     | Obergrenze für gelieferte Datensätze im ganzen Run              |
| `maxItemsPerTarget`            | Obergrenze für Datensätze pro Profil oder Ressource             |
| `includeTweets`                | Ergänzt den Tab Posts                                           |
| `includeReplies`               | Ergänzt den Tab Antworten                                       |
| `includeMedia`                 | Ergänzt den Tab Medien                                          |
| `includeHighlights`            | Ergänzt den Tab Highlights                                      |
| `includeLikes`                 | Ergänzt den Tab Gefällt mir, den X anderen nicht zeigt          |
| `includeFollowers`             | Ergänzt Follower                                                |
| `includeFollowing`             | Ergänzt gefolgte Accounts                                       |
| `includeVerifiedFollowers`     | Ergänzt verifizierte Follower                                   |
| `translateBioTo`               | Übersetzt jede Bio in eine Sprache, etwa `es`                   |
| `checkLiveNow`                 | Prüft, ob jedes Profil gerade live sendet                       |
| `sinceDate`, `untilDate`       | Behält Posts in einem Zeitraum                                  |
| `language`                     | Behält Posts in 1 Sprache, als Sprachcode                       |
| `mediaType`                    | Behält Posts mit Bildern, Videos, GIFs, Links oder nichts davon |
| `minViews`, `minLikes`         | Behält Posts ab einer Zahl an Aufrufen oder Gefällt-mir-Angaben |
| `minReplies`, `minRetweets`    | Behält Posts ab einer Zahl an Antworten oder Reposts            |
| `nativeRetweets`               | Behält nur native Reposts                                       |
| `verifiedOnly`                 | Behält verifizierte Autoren oder Profile                        |
| `blueVerifiedOnly`             | Behält Autoren & Profile, die X als Blue-verifiziert markiert   |
| `minFollowers`, `maxFollowers` | Behält Profile in einem Follower-Bereich                        |
| `minAccountAgeDays`            | Behält Profile, die mindestens so viele Tage alt sind           |
| `hasWebsite`, `hasLocation` | Behält Profile, die eine Website oder einen Ort angeben |
| `bioContains` | Behält Profile, deren Bio eines dieser Wörter enthält |
| `locationContains` | Behält Profile, deren Ort diesen Text enthält |
| `dedupeAcrossTargets`          | Entfernt profilübergreifende Duplikate vor der Abrechnung       |

### Von einem anderen Profil-Actor wechseln

Füge die Eingabe ein, die du schon nutzt. X Profile Scraper von Xquik liest
diese Feldnamen anderer Profil-Actors. Jede Zeile nennt ihre Felder, dann das
Feld, dem der Actor sie zuordnet:

- `profiles`, `userNames`, `usernames`, `handles`, `screenNames`:
  `twitterHandles`
- `urls`, `profileUrls`: `startUrls`
- `maxProfiles`, `maxResults`: `maxItems`
- `shouldScrapeFollowers`, `shouldScrapeFollowings`: `includeFollowers`,
  `includeFollowing`
- `requireEmail`: `hasEmail`
- `requireWebsite`: `hasWebsite`. Der Filter behält ein Profil mit einem
  beliebigen Link im Website-Feld, & der Run-Status sagt das.
- `filterByBlueVerified`: `blueVerifiedOnly`. `false` stoppt den Run, bevor er
  etwas liest oder berechnet.
- `bioKeywords`: `bioContains`. Es genügt, wenn 1 der Begriffe passt.
- `locationKeywords` mit 1 Wert: `locationContains`. Mehr Werte stoppen den Run,
  bevor er etwas liest oder berechnet.
- `emailDomains` als Liste: `emailDomains`
- `outputEmail`, `resolveShortLinks`: kein Feld nötig. Jeder Datensatz enthält
  seine E-Mails & die vollständigen Links von X.
- `findEmails`, `extractEmails`: kein Feld. Datensätze enthalten die E-Mails,
  die ein Profil auf X veröffentlicht. Der Run-Status sagt, dass der Actor keine
  verlinkte Website liest.
- `validateEmails`: kein Feld. Der Run-Status sagt, dass E-Mails so kommen, wie
  sie veröffentlicht sind, weil der Actor kein Postfach prüft.

`category` auf `user_info` ändert nichts. Eine Kategorie, die die Aufgabe eines
anderen Actors ist, etwa `tweets` oder `followers`, stoppt den Run. Er liest &
berechnet nichts. Die Meldung nennt den Actor, den du nutzen sollst. Setzt du
einen Alias & sein kanonisches Feld, gewinnt der kanonische Wert. Das Run-Log
nennt den Alias, der verloren hat.

### Die richtigen Eingaben wählen

- Für reine Profilkarten gib Nutzernamen an & lass jede `include`-Option aus.
- Für ein Account-Archiv aktiviere `includeTweets`, `includeMedia` &
  `includeHighlights` & setze `sinceDate`.
- Für Top-Inhalte kombiniere `includeTweets` mit `minLikes` oder `minViews`.
- Für Lead-Listen aktiviere `includeFollowers` mit `minFollowers` &
  `minAccountAgeDays`.
- Für Zielgruppen-Überschneidungen gib 2 Nutzernamen an, aktiviere
  `includeFollowers` & setze `dedupeAcrossTargets: false`. Ein gemeinsamer
  Follower erscheint dann unter jedem Nutzernamen.

## Ausgabe

Jeder Datensatz ist ein JSON-Objekt. Das Dataset-Schema gibt jedem Feld einen
Titel & eine Beschreibung, damit KI-Agents Datensätze ohne Raten lesen können.

Die Beispiele zeigen Musterwerte. Echte Ergebnisse enthalten Live-Daten. Ein
Profil-Datensatz sieht so aus:

```json
{
  "resultType": "profile",
  "sourceTarget": "sample_user",
  "id": "1234567890",
  "username": "sample_user",
  "name": "Sample User",
  "description": "Building tools for researchers.",
  "url": "https://example.com",
  "location": "Lisbon",
  "followers": 1200,
  "following": 310,
  "statusesCount": 4200,
  "verified": false,
  "createdAt": "Tue Mar 21 20:50:14 +0000 2017",
  "accountBasedInUnavailable": true
}
```

X leitet `accountBasedIn` aus aggregierten IP-Adressen der Account-Zugriffe ab.
Die Angabe sagt nichts über Staatsangehörigkeit, Wohnsitz, Identität,
Registrierung, Posts oder den genauen Standort. `observedAt` hält den
Abrufzeitpunkt fest. `accountBasedIn` ist null, wenn X keine Angabe zeigt.
Hält X sie zurück, enthält der Datensatz stattdessen
`accountBasedInUnavailable: true`.

Exportiere das Dataset als JSON, CSV, Excel oder HTML.

## Run-Optionen

- Setze die maximale Gesamtgebühr in Apify, um die Kosten eines Runs zu
  begrenzen. Lass `maxItems` hoch, um die meisten Datensätze zu bekommen, die
  dieses Budget erlaubt.
- Setze `maxTotalChargeUsd` in der Apify-API oder Max cost per run in der
  Console.
- Pack alle deine Profile in 1 Run. Jeder Run zahlt Apify dieselben Startkosten.
- `maxConcurrency` legt fest, wie viele Profile gleichzeitig laufen. Der
  Standardwert ist die schnellste sichere Einstellung.
- Nutze Account-Monitore von Xquik für Prüfungen im 1-Sekunden-Takt & signierte
  Webhooks. Aktive Monitore prüfen jede Sekunde.

Wähle `latest` für jeden Run, um jeden veröffentlichten Fix zu bekommen.
Gespeicherte Tasks & Zeitpläne behalten ihre eigene Build-Auswahl, also lass sie
auf `latest`.

## Verwandte Xquik-Actors

Jeder Xquik-Actor nutzt dieselbe Extraktions-Engine, rechnet erst nach dem
Filtern ab & liefert dieselben Diagnosen. Wähle den, der zu deinen Daten passt.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper) scrapt Posts aus
  Suchen, Profil-Timelines, Listen & Post-IDs mit über 50 Filtern & flachen
  Exporten. Nutze ihn, wenn du Post-Daten ohne Analyse brauchst. Ab $0.00015 pro
  Datensatz.
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

- [API-Dokumentation](https://docs.xquik.com/introduction): REST-API-Anleitungen
- [API für Profilabfragen](https://docs.xquik.com/api-reference/x/twitter-profile-lookup):
  ruft 1 öffentliches Profil ab
- [API für Nutzer-Posts](https://docs.xquik.com/api-reference/x/user-tweets):
  ruft die Posts eines Nutzers ab
- [Follower-API](https://docs.xquik.com/api-reference/x/followers): ruft die
  Follower eines Accounts ab
- [API für Bio-Übersetzungen](https://docs.xquik.com/api-reference/x/user-bio-translation):
  übersetzt die Bio eines Profils
- [API für den Live-Status](https://docs.xquik.com/api-reference/x/user-live-status):
  prüft, ob ein Nutzer live ist
- [MCP-Server](https://docs.xquik.com/mcp/overview): listet unterstützte Tools
- [Webhooks](https://docs.xquik.com/webhooks/overview): signierte Zustellung von
  Events

## FAQ

Antworten auf häufige Fragen, danach, wo du Hilfe bekommst.

### Brauche ich einen X-API-Schlüssel oder Login?

Nein. X Profile Scraper von Xquik braucht keinen X-API-Schlüssel, keinen Login &
keine Zugangsdaten.

### Wie viele Profile kann ich in 1 Run scrapen?

So viele, wie du angibst. `maxItems` & dein Apify-Ausgabenlimit begrenzen die
Datensätze.

### Kann ich X-Profile als CSV oder Excel exportieren?

Ja. Exportiere das Dataset im Storage-Tab als JSON, CSV, Excel oder HTML.

### Kann ich die Follower eines Twitter-Nutzers scrapen?

Ja. Aktiviere `includeFollowers`, `includeFollowing` oder
`includeVerifiedFollowers`. Jeder Account ist 1 Datensatz.

### Liefert der Scraper Website & Standort eines Profils?

Ja. `url` enthält die Website & `location` den vom Inhaber eingegebenen Text.
Setze `hasWebsite` & `hasLocation`, um nur Profile zu behalten, die sie angeben.

### Kann ich geschützte Accounts scrapen?

Du bekommst den öffentlichen Profil-Datensatz mit `protected: true`. X zeigt
Posts & Follower eines geschützten Accounts nur seinen bestätigten Followern.

### Woran erkenne ich, ob ein Account gerade live ist?

Setze `checkLiveNow: true`. Jedes Profil bekommt einen `profileLive`-Datensatz
mit `live` & seinem neuesten Broadcast.

### Kann der Scraper Bios übersetzen?

Ja. Setze `translateBioTo` auf einen Sprachcode wie `es` oder `pt-br`. Ein
Profil ohne Bio erzeugt keinen Datensatz.

### Warum liefert includeLikes nichts?

Seit 2024 zeigt X die mit Gefällt mir markierten Posts eines Accounts nur noch
diesem Account. Andere Accounts, auch dieser Actor, können sie nicht lesen.

### Ist es legal, X-Profile zu scrapen?

X Profile Scraper von Xquik fragt öffentliche X-Felder ab. Ergebnisse können
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
[API-Tab](https://apify.com/xquik/x-profile-scraper/api) enthält Beispiele für
Python, JavaScript & cURL.
Apify-[Zeitpläne](https://docs.apify.com/platform/schedules) starten
X Profile Scraper von Xquik per Cron. Agents nutzen
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Nutze `latest`,
außer du brauchst einen älteren Build.

### Kann ich eine individuelle Lösung bekommen?

Ja. Besuche [xquik.com](https://xquik.com) oder lies die
[API-Dokumentation](https://docs.xquik.com/introduction). Sie deckt Dashboard,
API, MCP-Server & Webhooks ab.

### Wo bekomme ich Hilfe?

Öffne ein Issue auf der Actor-Seite oder schreib mit der Run-ID an
<support@xquik.com>. Kostenlose Diagnosen im Key-Value-Store erklären Runs, die
Aufmerksamkeit brauchen. Ein Run ohne Datensätze sagt in seinem Status, warum.
