[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
**Deutsch** · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer verbindet Xquik MCP mit Coding-Agents](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Sieh dir an, wie Framer Xquik-Scraper nutzt](https://youtu.be/4UOSpoOoC3Y?t=367),
mit Claude Code, Codex, Cursor & mehr, ab Minute 6:07.

Xquik ist weltweit der schnellste & günstigste Scraper-Dienst für X (Twitter) &
liefert die vollständigsten X-Daten. X Profile Scraper von Xquik sammelt
Profile, Posts, Antworten, Medien & Follower zu jedem Nutzernamen. Die meisten
anderen Apify Actors rechnen ab, bevor sie filtern oder Duplikate entfernen.
Xquik rechnet nur gelieferte, eindeutige Ergebnisse ab, die zu deinen Filtern
passen.

Schlage Twitter-Accounts in großen Mengen nach & lies Profile ohne X-Account.
Scrape Profile, Posts, Antworten, Medien & Follower auf X anhand von
Nutzernamen, IDs oder URLs. Du zahlst **$0.00015 pro geliefertem Datensatz** &
Apify berechnet die Plattformnutzung separat. Du brauchst weder einen
X-API-Schlüssel noch einen Login.

> Xquik ist ein unabhängiger Drittanbieter-Dienst. Nicht verbunden mit X Corp.
> "Twitter" und "X" sind Marken von X Corp.

## Was macht X Profile Scraper?

X Profile Scraper von Xquik liefert öffentliche Profile auf X (Twitter) anhand
von Nutzernamen, numerischen Nutzer-IDs oder Profil-URLs. Zu jedem Profil kannst
du seine Posts, Antworten, Medien, Highlights, Follower, gefolgten Accounts &
verifizierten Follower ergänzen. Er übersetzt außerdem Bios & prüft, wer gerade
live sendet.

### Anwendungsfälle

- Reichere Lead-Listen mit Bios, Websites, Standorten & Zielgruppengröße an.
- Vergleiche Accounts der Konkurrenz nach Followern, Posts & Verifizierung.
- Prüfe Creator nach Zielgruppe, Account-Alter & Interaktionen.
- Archiviere die Posts, Medien & Highlights eines Accounts.
- Erfasse das Netzwerk eines Accounts über seine Follower & gefolgten Accounts.
- Beobachte, ob Creator & Marken live senden.
- Lies Bios aus anderen Märkten in deiner eigenen Sprache.

## Warum X Profile Scraper nutzen?

- **Der ganze Account in 1 Run.** Gib Nutzernamen, IDs oder URLs an. Ergänze
  Posts, Antworten, Medien, Highlights, Follower, gefolgte Accounts oder
  verifizierte Follower als Datensätze.
- **Prüfung auf Live-Broadcasts.** `checkLiveNow` sagt, wer gerade live ist, mit
  seinem neuesten Broadcast.
- **Veröffentlichte Kontakte in jedem Datensatz.** `email` & `contactInfo`
  enthalten die E-Mails, Telefonnummern & Links, die ein Profil veröffentlicht.
  Behalte nur geschäftliche E-Mails oder Domains, die du auswählst.
- **Herkunft & Verlauf des Accounts.** `accountBasedIn` enthält die Länder- oder
  Regionsangabe von X. `usernameChanges` zeigt, wie oft sich ein Nutzername
  geändert hat.
- **Filter für Profile & Posts.** Filtere Profile nach Zielgruppengröße,
  Account-Alter & Verifizierung. Filtere Posts nach Datum, Sprache, Medien &
  Interaktionen.

### Vollständige Ergebnisse

- Der Account-Verlauf kommt vollständig zurück, alte Posts inklusive.
- Profil-Posts ohne Antworten behalten trotzdem die eigenen Threads des Autors.
- Profilabrufe enthalten den angehefteten Post, als angeheftet markiert.
- Exporte von Followern & gefolgten Accounts liefern vollständige Listen.
- Auch Exporte verifizierter Follower liefern vollständige Listen.
- Jedes Ergebnis enthält die vollständigsten Daten, die X dafür hat.

### Genaue Datensätze

- Reposts enthalten den vollständigen Originaltext.
- Jede ID in einem Datensatz bleibt exakt.
- Erwähnungen, Links, Hashtags & Hervorhebungen sitzen an der richtigen Stelle
  im Text.
- Verifizierungs-Badges stimmen mit dem überein, was `x.com` zeigt.
- Datensätze enthalten nur öffentliche Daten.
- Werbung & gesponserte Einträge landen nie in deinen Datensätzen.

### Aktuelle Daten

- Abrufe funktionieren weiter, wenn X Änderungen ausrollt.

### Tempo

- Eine langsame Seite hält deinen Run nicht auf.
- Abrufe enden, sobald ihre Datensätze ankommen.
- Hängende Actor-Aufrufe laufen von selbst wieder an.

### Faire Abrechnung

- Eine fehlerhafte Eingabe kostet nichts & sagt dir, was du korrigieren musst.
- Actors rechnen nur gelieferte, eindeutige, passende Datensätze ab.
- Ein Profil, das mehrere Ziele teilen, wird nur einmal berechnet.
- Ein neu gestarteter Run berechnet nie doppelt.
- Runs bleiben innerhalb deines Ausgabenlimits & schreiben trotzdem ihre
  Diagnosen.
- Kleine Runs enden mit einem Tipp, der Kosten senkt.

### Zuverlässigkeit

- Ein einzelner Fehler lässt deinen Run nicht scheitern.
- Ein Zeitlimit liefert die bereits gefundenen Datensätze samt Diagnosen.
- Actors überstehen kurze Xquik-Ausfälle.
- Actor-Runs überstehen Neustarts ohne Dopplungen.
- Ein fehlerhafter Datensatz lässt keinen Batch scheitern.
- Gestoppte Runs behalten ihre Datensätze & ihren Report.
- Ein Run, der nicht starten kann, erklärt trotzdem, warum.
- Der Support sieht genau, was eine Anfrage oder ein Run geliefert hat.

### Für Agents gebaut

- Actors akzeptieren Eingaben, die für andere Actors geschrieben sind.
- Die Ausgabe ist bereit für Tabellen, mit flachen Spalten & Interaktionssummen.
- Jeder Run sagt, warum er endete & ob du es erneut versuchen solltest.

### Umfangreiche Daten

- Post-Datensätze enthalten den Text von Note Tweets, Bearbeitungen, Community
  Notes, Reichweiten-Labels & Antworteinstellungen.
- Datensätze enthalten Quell-Apps, Medienzahlen & Daten professioneller
  Accounts.
- Medien kommen mit Varianten, Alt-Text, Größen & Gründen zur Verfügbarkeit.
- Posts & Bios lassen sich in deine Sprache übersetzen.

### Qualitätsprüfungen

- Jedes Feld, das X zeigt, wird geliefert, bewusst weggelassen oder ist
  nachweislich nicht vorhanden.
- Xquik testet jeden Abruf live gegen X.

## Welche Daten kann X Profile Scraper extrahieren?

Profil-Datensätze nutzen `resultType: "profile"`. Das sind die wichtigsten
Felder.

| Feld                     | Beschreibung                                                   |
| ------------------------ | -------------------------------------------------------------- |
| `id`                     | Numerische Nutzer-ID                                           |
| `username`               | Nutzername ohne `@`                                            |
| `name`                   | Anzeigename                                                    |
| `description`            | Bio-Text                                                       |
| `url`                    | Website in Profil-Datensätzen                                  |
| `location`               | Standort, den der Inhaber eingegeben hat                       |
| `email`                  | Erste E-Mail, die das Profil veröffentlicht                    |
| `contactInfo`            | E-Mails, Telefonnummern & Links, die das Profil veröffentlicht |
| `followers`              | Anzahl der Follower                                            |
| `following`              | Anzahl der gefolgten Accounts                                  |
| `statusesCount`          | Anzahl der Posts                                               |
| `mediaCount`             | Anzahl der Posts mit Medien                                    |
| `favouritesCount`        | Gefällt-mir-Angaben, die der Account vergeben hat              |
| `listedCount`            | Öffentliche Listen, die den Account enthalten                  |
| `createdAt`              | Erstellungszeitpunkt des Accounts                              |
| `verified`               | Ob X eine Verifizierung meldet                                 |
| `isBlueVerified`         | Ob der Account eine X-Blue-Verifizierung hat                   |
| `verifiedType`           | Verifizierungskategorie, etwa `Government`                     |
| `profilePicture`         | URL des Profilbilds in 48 px                                   |
| `profilePictureOriginal` | Dasselbe Bild in voller Größe, zum Herunterladen               |
| `coverPicture`           | URL des Bannerbilds                                            |
| `pinnedTweetIds`         | IDs der angehefteten Posts                                     |
| `professional`           | Kategorie & Typ des Professional-Accounts                      |
| `accountBasedIn`         | Unverbindliche Länder- oder Regionsangabe von X                |
| `connectedVia`           | Wie sich der Account zuerst mit X verbunden hat                |
| `usernameChanges`        | Wie oft sich der Nutzername geändert hat & wann zuletzt        |
| `birthdate`              | Teile des Geburtstags, die der Account öffentlich gemacht hat  |
| `subscribersCount`       | Anzahl der Abonnenten, wenn X sie liefert                      |
| `tipJar`                 | Öffentliche Trinkgeld-Links                                    |
| `protected`              | Ob der Account seine Posts schützt                             |
| `unavailable`            | Ob der Account nicht verfügbar ist                             |
| `sourceTarget`           | Der Nutzername, die ID oder die URL aus deiner Eingabe         |

Das Dataset-Schema dokumentiert jedes weitere Feld, etwa `identityVerification`,
`isAutomated`, `automatedBy`, `withheldInCountries` & `verificationReason`.

Optionale Datensätze behalten das Antwortformat der Xquik-REST-API.

| `resultType`              | Aktiviert durch            | 1 Datensatz pro        |
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

Datensätze enthalten nie Angaben, die nur der Betrachter sieht, etwa ob du einem
Account folgst oder ihn blockierst.

## Wie nutze ich X Profile Scraper, um Profildaten zu scrapen?

Neu bei Apify?
[Erstelle zuerst einen kostenlosen Account](https://console.apify.com/sign-up?fpr=xquik).
Der kostenlose Plan braucht keine Kreditkarte & gibt dir jeden Monat $5 zum
Ausgeben. Bei $0.00015 pro Datensatz reichen $5 für bis zu 33.000 Datensätze,
vor Abzug der Plattformnutzung. Komm dann hierher zurück & klicke auf Try for
free.

Folge diesen Schritten in der Apify Console.

1. Öffne ein [Task-Beispiel](#task-beispiele) oder den Tab Input.
2. Füge Nutzernamen in `twitterHandles`, URLs in `startUrls` oder IDs in
   `userIds` ein.
3. Aktiviere die Ressourcen, die du brauchst, etwa `includeTweets`.
4. Setze `maxItems` & beliebige Filter & klicke dann auf Start.
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
`{ "url": "..." }`. `userIds` nimmt numerische X-Nutzer-IDs.

```json
{
  "startUrls": ["https://x.com/nasa", { "url": "https://x.com/OpenAI" }],
  "userIds": ["11348282"],
  "maxItems": 100
}
```

Der Run liest einen wiederholten Nutzernamen nur einmal.

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

`includeTweets` folgt dem Tab Posts des Profils. `includeReplies` folgt seinem
Tab Antworten. `includeMedia` folgt seinem Tab Medien. `includeHighlights`
ergänzt die Posts in seinem Tab Highlights, in der Reihenfolge von X. Ein Profil
ohne Highlights ergänzt keine Datensätze.

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
- [Die Videos sammeln, die ein Account postet](https://apify.com/xquik/x-profile-scraper/examples/collect-videos-from-an-account)
- [1 Kalenderjahr eines Accounts archivieren](https://apify.com/xquik/x-profile-scraper/examples/archive-one-year-of-posts)
- [Die Follower eines Accounts exportieren](https://apify.com/xquik/x-profile-scraper/examples/export-the-followers-of-an-account)
- [Die verifizierten Follower eines Unternehmens exportieren](https://apify.com/xquik/x-profile-scraper/examples/export-verified-followers)
- [Follower mit 10.000 oder mehr Followern finden](https://apify.com/xquik/x-profile-scraper/examples/find-influential-followers)
- [Die Zielgruppen-Überschneidung von 2 Design-Tools messen](https://apify.com/xquik/x-profile-scraper/examples/measure-audience-overlap)
- [Ein vollständiges Audit eines Accounts durchführen](https://apify.com/xquik/x-profile-scraper/examples/run-a-full-account-audit)

## Was kostet es, X-Profile zu scrapen?

X Profile Scraper von Xquik kostet $0.00015 pro geliefertem Datensatz auf jedem
Apify-Plan. Apify berechnet deine Plattformnutzung separat. Xquik berechnet 1
Gebühr pro geliefertem Datensatz. Diagnosen in der Ausgabe `diagnostics` sind
kostenlos.

Brauchst du mehr Volumen, dann
[wähle einen Apify-Plan](https://apify.com/pricing?fpr=xquik) mit mehr
vorausbezahlter Nutzung.

- Du brauchst kein Xquik-Abo.
- Du zahlst keine separate Gebühr für Start, Profil oder Suchanfrage.
- Filter & Deduplizierung laufen vor der Abrechnung. Du zahlst nie für
  gefilterte oder doppelte Datensätze.
- Ein Profil ohne Bio verursacht keine Übersetzungsgebühr.
- Ein fehlendes Profil verursacht keine Gebühr für die Live-Prüfung.
- Die Apify-Einstellungen für die maximale Gesamtgebühr begrenzen die
  gelieferten Datensätze.

Ein Run mit einem Problem oder ein großer Run schreibt außerdem einen
`run-report`-Datensatz. Ein kleiner Run ohne Probleme überspringt ihn & spart
Apify-Nutzung. Aktiviere `alwaysSaveRunRecords`, um ihn bei jedem Run zu
schreiben.

Wie du die Ausgaben eines Runs begrenzt, steht unter
[Run-Optionen](#run-optionen).

## Leere, unvollständige & gestoppte Runs

X Profile Scraper von Xquik erklärt leere, unvollständige & gestoppte Runs
kostenlos. Der Run-Status nennt den Grund für den Stopp. Er zählt auch
berechnete Ergebnisse & gelesene Ziele.

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

### Stoppursachen

Der Run-Status nennt jede Ursache für einen vorzeitigen Stopp. `stopCauses`
listet jede Ursache mit eigenen Feldern `message`, `retryable` & `nextAction`.
Die Ursachen sind `target_not_found`, `target_suspended`, `target_failed`,
`pagination_safety_limit` & `deadline_reached`. `target_suspended` nennt die
Accounts, die X gesperrt hat. Ein fehlendes oder gesperrtes Ziel kommt nur auf
die Liste, wenn eine andere Ursache den Run gestoppt hat. Der Run ist
`retryable`, wenn mindestens 1 Ursache es ist.

## Eingabe

Der Tab Input listet jede Option. Gib mindestens 1 der Felder `twitterHandles`,
`startUrls` oder `userIds` an. Jedes andere Feld ist optional.

| Feld                           | Was es bewirkt                                                               |
| ------------------------------ | ---------------------------------------------------------------------------- |
| `twitterHandles`               | Nutzernamen, mit oder ohne `@`                                               |
| `startUrls`                    | Profil-URLs auf `x.com` oder `twitter.com`                                   |
| `userIds`                      | Numerische X-Nutzer-IDs                                                      |
| `maxItems`                     | Obergrenze für gelieferte Datensätze im ganzen Run                           |
| `maxItemsPerTarget`            | Obergrenze für Datensätze pro Profil oder Ressource                          |
| `includeTweets`                | Ergänzt den Tab Posts                                                        |
| `includeReplies`               | Ergänzt den Tab Antworten                                                    |
| `includeMedia`                 | Ergänzt den Tab Medien                                                       |
| `includeHighlights`            | Ergänzt den Tab Highlights                                                   |
| `includeLikes`                 | Ergänzt mit Gefällt mir markierte Posts, die X vor anderen Accounts verbirgt |
| `includeFollowers`             | Ergänzt Follower                                                             |
| `includeFollowing`             | Ergänzt gefolgte Accounts                                                    |
| `includeVerifiedFollowers`     | Ergänzt verifizierte Follower                                                |
| `translateBioTo`               | Übersetzt jede Bio in die Sprache eines Sprachcodes, etwa `es`               |
| `checkLiveNow`                 | Prüft, ob jedes Profil gerade live sendet                                    |
| `sinceDate`, `untilDate`       | Behält Posts in einem Zeitraum                                               |
| `language`                     | Behält Posts in 1 Sprachcode                                                 |
| `mediaType`                    | Behält Posts mit Bildern, Videos, GIFs, Links oder nichts davon              |
| `minViews`, `minLikes`         | Behält Posts über einer Zahl an Aufrufen oder Gefällt-mir-Angaben            |
| `minReplies`, `minRetweets`    | Behält Posts über einer Zahl an Antworten oder Reposts                       |
| `nativeRetweets`               | Behält nur native Reposts                                                    |
| `verifiedOnly`                 | Behält verifizierte Autoren oder Profile                                     |
| `blueVerifiedOnly`             | Behält Autoren oder Profile, die X als Blue-verifiziert markiert             |
| `verifiedType`                 | Behält Profile mit 1 Verifizierungstyp                                       |
| `minFollowers`, `maxFollowers` | Behält Profile in einem Bereich der Zielgruppengröße                         |
| `minAccountAgeDays`            | Behält Profile, die mindestens so viele Tage alt sind                        |
| `minFollowing`, `maxFollowing` | Behält Profile in einem Bereich gefolgter Accounts                           |
| `minStatuses`, `maxStatuses`   | Behält Profile in einem Bereich der Post-Anzahl                              |
| `hasWebsite`, `hasLocation`    | Behält Profile, die eine Website oder einen Standort angeben                 |
| `hasEmail`                     | Behält Profile, die eine E-Mail veröffentlichen                              |
| `businessEmailOnly`            | Behält Profile mit einer E-Mail außerhalb von Freemail-Diensten              |
| `emailDomains`                 | Behält Profile mit einer E-Mail unter diesen Domains                         |
| `bioContains`                  | Behält Profile, deren Bio 1 dieser Wörter enthält                            |
| `locationContains`             | Behält Profile, deren Standort diesen Text enthält                           |
| `usernameContains`             | Behält Profile, deren Nutzername diesen Text enthält                         |
| `dedupeAcrossTargets`          | Entfernt profilübergreifende Duplikate vor der Abrechnung                    |

### Von einem anderen Profil-Actor wechseln

Füge die Eingabe ein, die du schon nutzt. X Profile Scraper von Xquik liest
diese Feldnamen anderer Profil-Actors. Jede Zeile nennt ihre Felder, dann das
Feld, dem sie entsprechen.

- `profiles`, `userNames`, `usernames`, `handles`, `screenNames` entsprechen
  `twitterHandles`.
- `urls`, `profileUrls` entsprechen `startUrls`.
- `maxProfiles`, `maxResults` entsprechen `maxItems`.
- `shouldScrapeFollowers`, `shouldScrapeFollowings` entsprechen
  `includeFollowers`, `includeFollowing`.
- `requireEmail` entspricht `hasEmail`.
- `requireWebsite` entspricht `hasWebsite`. Es behält ein Profil mit einem
  beliebigen Link im Website-Feld & der Run-Status sagt das.
- `filterByBlueVerified` entspricht `blueVerifiedOnly`. `false` stoppt den Run,
  bevor er etwas liest oder berechnet.
- `bioKeywords` entspricht `bioContains`. Es genügt, wenn 1 seiner Begriffe
  passt.
- `locationKeywords` mit 1 Wert entspricht `locationContains`. Mehr Werte
  stoppen den Run, bevor er etwas liest oder berechnet.
- `emailDomains` als Liste entspricht `emailDomains`.
- `outputEmail`, `resolveShortLinks` brauchen kein Feld. Jeder Datensatz enthält
  seine E-Mails & die vollständigen Links von X.
- `findEmails`, `extractEmails` brauchen kein Feld. Datensätze enthalten die
  E-Mails, die ein Profil auf X veröffentlicht. Der Run-Status sagt, dass der
  Actor keine verlinkte Website liest.
- `validateEmails` braucht kein Feld. Der Run-Status sagt, dass E-Mails so
  kommen, wie sie veröffentlicht sind, weil der Actor kein Postfach prüft.

Steht `category` auf `user_info`, ändert sich nichts. Eine Kategorie, die die
Aufgabe eines anderen Actors ist, etwa `tweets` oder `followers`, stoppt den
Run. Er liest & berechnet nichts. Die Meldung nennt den Actor, den du nutzen
sollst. Setzt du einen Alias & sein kanonisches Feld, gewinnt der kanonische
Wert. Das Run-Log nennt den Alias, der verloren hat.

### Die richtigen Eingaben wählen

- Für eine reine Profilkarte gib Nutzernamen an & lass jede `include`-Option
  aus.
- Für ein Account-Archiv aktiviere `includeTweets`, `includeMedia` &
  `includeHighlights` & setze `sinceDate`.
- Für Top-Inhalte ergänze `includeTweets` um `minLikes` oder `minViews`.
- Für Lead-Listen aktiviere `includeFollowers` mit `minFollowers` &
  `minAccountAgeDays`.
- Für Zielgruppen-Überschneidungen gib 2 Nutzernamen an, aktiviere
  `includeFollowers` & setze `dedupeAcrossTargets: false`. Ein gemeinsamer
  Follower erscheint dann unter jedem Nutzernamen.

## Ausgabe

Jeder Datensatz ist ein JSON-Objekt. Das Dataset-Schema gibt jedem Feld einen
Titel & eine Beschreibung, also können KI-Agents Datensätze ohne Raten lesen.

Die Beispiele nutzen Musterwerte. Die Ergebnisse spiegeln Live-Daten wider. Ein
Profil-Datensatz sieht so aus.

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
Die Angabe nennt weder Staatsangehörigkeit, Wohnsitz oder Identität noch den Ort
der Registrierung, eines Posts oder den genauen Standort. `observedAt` hält den
Abrufzeitpunkt fest. `accountBasedIn` ist null, wenn X keine Angabe zeigt. Hält
X sie zurück, enthält der Datensatz stattdessen
`accountBasedInUnavailable: true`.

Exportiere das Dataset als JSON, CSV, Excel oder HTML.

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

- Nutze einen Punkt für ein Feld innerhalb eines Objekts, etwa
  `accountBasedIn.value`. Groß- und Kleinschreibung & Unterstriche spielen keine
  Rolle.
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

Jeder Xquik-Actor nutzt dieselbe Extraktions-Engine, dieselbe Abrechnung erst
nach dem Filtern & dieselben Diagnosen. Wähle den, der zu den Daten passt, die
du brauchst.

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

### Brauche ich einen X-API-Schlüssel oder einen Login?

Nein. X Profile Scraper von Xquik braucht weder einen X-API-Schlüssel noch einen
Login oder Zugangsdaten.

### Wie viele Profile kann ich in 1 Run scrapen?

So viele, wie du angibst. `maxItems` & dein Apify-Ausgabenlimit begrenzen die
Datensätze.

### Kann ich X-Profile als CSV oder Excel exportieren?

Ja. Exportiere das Dataset im Tab Storage als JSON, CSV, Excel oder HTML.

### Kann ich die Follower eines Twitter-Nutzers scrapen?

Ja. Aktiviere `includeFollowers`, `includeFollowing` oder
`includeVerifiedFollowers`. Jeder Account ist 1 Datensatz.

### Liefert er Website & Standort eines Profils?

Ja. `url` enthält die Website & `location` den Text, den der Inhaber eingegeben
hat. Setze `hasWebsite` & `hasLocation`, um nur Profile zu behalten, die sie
angeben.

### Kann ich geschützte Accounts scrapen?

Du bekommst den öffentlichen Profil-Datensatz mit `protected: true`. X zeigt die
Posts & Follower eines geschützten Accounts nur seinen bestätigten Followern.

### Woran erkenne ich, ob ein Account gerade live ist?

Setze `checkLiveNow: true`. Jedes Profil bekommt einen `profileLive`-Datensatz
mit `live` & seinem neuesten Broadcast.

### Kann er Bios übersetzen?

Ja. Setze `translateBioTo` auf einen Sprachcode, etwa `es` oder `pt-br`. Ein
Profil ohne Bio erzeugt keinen Datensatz.

### Warum liefert includeLikes nichts?

Seit 2024 zeigt X die mit Gefällt mir markierten Posts eines Accounts nur noch
diesem Account. Andere Accounts, auch dieser Actor, können sie nicht lesen.

### Ist es legal, X-Profile zu scrapen?

X Profile Scraper von Xquik fragt öffentliche X-Felder ab. Ergebnisse können
personenbezogene Daten enthalten. Prüfe, ob dein Zweck rechtmäßig ist, & befolge
geltende Datenschutzregeln. Hol dir bei Unsicherheit qualifizierten Rechtsrat.

### Warum hat mein Run keine Ergebnisse geliefert?

Lies zuerst den Run-Status. Der Status eines leeren Runs rät dir, Ziele & Filter
zu prüfen. Die kostenlose Ausgabe `diagnostics` erscheint, wenn etwas deine
Aufmerksamkeit braucht. Ihr Feld `stopCauses` gibt jeder Ursache eine
`nextAction`, der du folgen kannst. Der Run listet jede Eingabe, die er nicht
lesen kann, & sagt, wie du sie korrigierst.

### Kann ich die API, Zeitpläne & Integrationen nutzen?

Ja. Wähle aus 50 öffentlichen Tasks oder nutze die REST-API von Xquik. Im
[API-Tab](https://apify.com/xquik/x-profile-scraper/api) findest du Beispiele
für Python, JavaScript & cURL.
[Zeitpläne](https://docs.apify.com/platform/schedules) von Apify starten X
Profile Scraper von Xquik per Cron. Agents nutzen
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Nutze `latest`,
außer du brauchst einen älteren Build.

### Kann ich eine individuelle Lösung bekommen?

Ja. Beschreibe im
[Tab Issues](https://apify.com/xquik/x-profile-scraper/issues), was du brauchst.
Xquik bietet außerdem ein Dashboard, eine REST-API, einen MCP-Server & Webhooks.
Die Website von Xquik findest du in seinem
[Apify-Profil](https://apify.com/xquik).

### Wo bekomme ich Hilfe?

Öffne im [Tab Issues](https://apify.com/xquik/x-profile-scraper/issues) ein
Issue mit der Run-ID. Kostenlose Diagnosen im Key-Value-Store erklären Runs, die
Aufmerksamkeit brauchen. Ein Run, der keinen Datensatz zurückbekommt, sagt in
seinem Status, warum.
