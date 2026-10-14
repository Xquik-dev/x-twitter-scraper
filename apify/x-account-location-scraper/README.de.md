[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
**Deutsch** · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer verbindet Xquik MCP mit Coding-Agents](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Sieh dir an, wie Framer Xquik-Scraper nutzt](https://youtu.be/4UOSpoOoC3Y?t=367),
mit Claude Code, Codex, Cursor & mehr, ab Minute 6:07.

Xquik ist weltweit der schnellste & günstigste Scraper-Dienst für X (Twitter) &
liefert die vollständigsten X-Daten. X Account Location Scraper von Xquik prüft,
wo X-Accounts ansässig sind, ohne X-Cookies oder Login. Die meisten anderen
Apify Actors rechnen ab, bevor sie filtern oder Duplikate entfernen. Xquik
rechnet nur gelieferte, eindeutige Ergebnisse ab, die zu deinen Filtern passen.

Füge Nutzernamen, Profil-URLs oder Nutzer-IDs ein & erhalte in 1 Run für jeden
Account die X-Angabe "Account based in". Die Angabe ist die bestmögliche
Einschätzung von X zum Land oder zur Region eines Accounts. Sie nennt keine
Staatsangehörigkeit, keinen Wohnsitz oder genauen Standort. Du zahlst **$0.00015
pro geliefertem Datensatz**, & Apify berechnet die Plattformnutzung separat.

> Xquik ist ein unabhängiger Drittanbieter-Dienst. Nicht verbunden mit X Corp.
> "Twitter" und "X" sind Marken von X Corp.

## Account-Details in jedem Datensatz

- Die X-Angabe "Account based in", als Land oder Region.
- Der ISO-Code dieses Landes mit 2 Buchstaben.
- Ob X darauf hinweist, dass die Angabe ungenau sein kann.
- Wie sich der Account zuerst mit X verbunden hat, etwa über Web oder das Land
  eines App-Stores.
- Die Plattform & der Ländercode dieser Verbindung.
- Wie oft der Account seinen Nutzernamen geändert hat, & wann zuletzt.
- Die Organisation, mit der der Account laut X verbunden ist.
- Das Alter des Accounts in Tagen & ein Link zu seinem Profil.
- Das vollständige öffentliche Profil mit Name, Bio, Zählern, Verifizierung,
  Daten & Bildern.
- Ein zweiter Abruf jedes Accounts, dessen Angabe X zurückhält, ohne Aufpreis.
- Viele Accounts in 1 Run, parallel gelesen & in Eingabereihenfolge geliefert.
- Nutzernamen mit oder ohne @, URLs von `x.com` & `twitter.com` & numerische
  Nutzer-IDs.
- Duplikatentfernung vor der Abrechnung.
- Exporte als JSON, CSV, Excel, XML & RSS über Apify-Datasets.
- Runs laufen nach einer Apify-Migration aus dem gespeicherten Zustand weiter.

## So prüfst du, wo X-Accounts ansässig sind

Neu bei Apify?
[Erstelle zuerst einen kostenlosen Account](https://console.apify.com/sign-up?fpr=xquik).
Der kostenlose Plan braucht keine Kreditkarte & gibt dir jeden Monat $5 zum
Ausgeben. Bei $0.00015 pro Account reichen $5 für bis zu 33.000 Accounts, vor
Abzug der Plattformnutzung. Komm dann hierher zurück & klicke auf Try for free.

1. Öffne X Account Location Scraper von Xquik in der Apify Console.
2. Füge Nutzernamen, Profil-URLs oder Nutzer-IDs in `twitterHandles` ein.
3. Setze `maxItems`, um die gelieferten Datensätze zu begrenzen, & klicke dann
   auf Start.
4. Lade das Dataset als JSON, CSV oder Excel herunter, oder nutze die Apify-API.

Du gibst in keinem Schritt X-Cookies, einen Login oder einen API-Schlüssel ein.

## Eingabe

`twitterHandles` nimmt jede Form eines Accounts an, in beliebiger Mischung.

```json
{
  "twitterHandles": [
    "BBCWorld",
    "@OpenAI",
    "https://x.com/NASA",
    "https://twitter.com/github",
    "11348282"
  ],
  "maxItems": 1000
}
```

`startUrls` & `userIds` nehmen dieselben Formen an. `startUrls` nimmt jede URL
als einfachen String oder als Objekt `{ "url": "..." }`.

```json
{
  "startUrls": ["https://x.com/nasa", { "url": "https://x.com/OpenAI" }],
  "userIds": ["742143"]
}
```

Eine Nutzer-ID bleibt gleich, wenn ein Account seinen Nutzernamen ändert, nutze
`userIds` also für Listen, die du behältst. `userNames` funktioniert als anderer
Name für `twitterHandles`.

Ein Account, den die Eingabe doppelt nennt, wird einmal geliefert & abgerechnet,
auch wenn 1 Eintrag sein Nutzername & der andere seine Nutzer-ID ist. `maxItems`
behält die ersten Accounts der Eingabe. Kleine Runs ohne Probleme überspringen
`run-report` & sparen Apify-Nutzung. Aktiviere `alwaysSaveRunRecords`, um ihn
bei jedem Run zu schreiben.

## Ausgabe

Jeder Account ist 1 Datensatz im Dataset. Zuerst kommt, was die Seite "Über
diesen Account" von X zeigt, in `accountBasedIn`, `accountBasedInUnavailable`,
`accountBasedInAccurate`, `affiliateUsername`, `connectedVia`,
`connectedViaAccurate` & `usernameChanges`. Danach folgt das vollständige
öffentliche Profil mit `id`, `username`, `name`, `description`, `followers`,
`following`, `verified`, `verifiedType`, `createdAt`, `profilePicture` & mehr.
Zuletzt kommen 5 Felder, die der Actor aus dem Profil ableitet. Es sind
`accountBasedInCountryCode`, `connectedViaPlatform`, `connectedViaCountryCode`,
`accountAgeDays` & `profileUrl`. Fehlende Quellfelder bleiben weg, & ein Code,
den der Actor nicht zuordnen kann, fehlt ebenfalls. X Account Location Scraper
von Xquik erfindet keine Werte.

Die Beispiele nutzen Musterwerte. Die Ergebnisse spiegeln Live-Daten wider. Ein
Datensatz sieht so aus.

```json
{
  "accountBasedIn": {
    "value": "United Kingdom",
    "level": "country",
    "observedAt": "2026-10-12T09:00:00.000Z"
  },
  "accountBasedInAccurate": true,
  "affiliateUsername": "sample_org",
  "connectedVia": "Web",
  "usernameChanges": {
    "count": 1,
    "lastChangedAt": "2021-03-04T10:00:00.000Z"
  },
  "id": "1234567890",
  "username": "sample_user",
  "name": "Sample User",
  "followers": 1200,
  "verified": true,
  "createdAt": "2017-03-21T20:50:14.000Z",
  "accountBasedInCountryCode": "GB",
  "connectedViaPlatform": "web",
  "accountAgeDays": 3491,
  "profileUrl": "https://x.com/sample_user",
  "resultType": "profile",
  "sourceTarget": "sample_user"
}
```

Ein Datensatz unterscheidet 3 Fälle.

| Der Datensatz enthält              | Das bedeutet                                        | Was du tust                                    |
| ---------------------------------- | --------------------------------------------------- | ---------------------------------------------- |
| `accountBasedIn` mit einem `value` | X zeigt diese Angabe für den Account.               | Nutze sie.                                     |
| `accountBasedIn: null`             | X zeigt für diesen Account keine Angabe.            | Nichts. X hat keine, die es zeigen kann.       |
| `accountBasedInUnavailable: true`  | X hat die Angabe bei beiden Abrufen zurückgehalten. | Starte später einen neuen Run für den Account. |

Hält X eine Angabe zurück, liest der Run diesen Account 1 weiteres Mal, bevor er
den Datensatz liefert. Der zweite Abruf ist kostenlos. Eine Angabe, die X weiter
zurückhält, ist unbekannt. Das heißt nicht, dass es keine gibt. Ein solcher
Datensatz enthält das öffentliche Profil ohne die Felder aus "Über diesen
Account", & der Run-Status zählt diese Accounts. Jeder der 3 Fälle ist 1
gelieferter Datensatz.

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

## Was die Angabe bedeutet

X leitet `accountBasedIn` aus aggregierten IP-Adressen der Account-Zugriffe ab.
Die Angabe sagt nichts über Staatsangehörigkeit, Wohnsitz, Identität,
Registrierung, Posts oder den genauen Standort. `level` sagt, ob X ein Land oder
eine größere Region zeigt. `observedAt` hält den Abrufzeitpunkt fest.
`accountBasedInAccurate` ist `false`, wenn X darauf hinweist, dass die Angabe
ungenau sein kann. `connectedVia` sagt, wie sich der Account zuerst mit X
verbunden hat, & `connectedViaAccurate` ist `false`, wenn X darauf hinweist,
dass das zugehörige Land ungenau sein kann. `connectedViaPlatform` ist `web`,
`ios` oder `android`. Die 2 Ländercodes stammen aus den Namen, die X schreibt,
eine Region hat also keinen. X schreibt für manche Länder 2 Namen, etwa Türkiye
& Turkey, & beide ergeben denselben Code. `location` ist der Text, den der
Account-Inhaber ins Profil geschrieben hat, & damit ein anderes Feld.

## Was kostet es, X-Account-Standorte zu prüfen?

Auf jedem Apify-Plan kostet ein gelieferter Datensatz $0.00015. Apify berechnet
deine Plattformnutzung separat.

Brauchst du mehr Volumen, dann
[wähle einen Apify-Plan](https://apify.com/pricing?fpr=xquik) mit mehr
vorausbezahlter Nutzung.

- 1 Gebühr pro geliefertem Datensatz. Diagnosen in `diagnostics` sind kostenlos.
- Keine Start- oder Abrufgebühr.
- Ein Account, den X nicht hat, ergibt keinen Datensatz & keine Gebühr.
- Der zweite Abruf einer zurückgehaltenen Angabe kostet nichts extra.
- Die Deduplizierung läuft vor der Abrechnung.
- Die Apify-Einstellungen für die maximale Gesamtgebühr begrenzen die
  gelieferten Datensätze.

## Limits & Wiederherstellung

X Account Location Scraper von Xquik liest viele Accounts in 1 Run. Gelieferte
Datensätze & Fortschritt überstehen einen Apify-Neustart. Der Actor setzt kein
eigenes Zeitlimit. Er hält jedes Apify-Timeout ein, das du setzt.

Der Run-Status nennt die Accounts, für die X keinen Treffer hat, & rät dir,
Nutzername, ID oder URL zu prüfen. Er nennt auch gesperrte Accounts. Eine
unterbrochene Extraktion schreibt eine kostenlose `partial`-Diagnose. Verfügbare
Ergebnisse bleiben erhalten. Lies `availableResults`, `failedTargets`,
`retryable` & `nextAction`, bevor du es erneut versuchst. Ein erfolgreicher
Actor-Abschluss bestätigt die Lieferung, nicht die vollständige Extraktion.

Der Run-Status nennt jede Ursache für einen vorzeitigen Stopp. `stopCauses`
listet jede Ursache mit eigenen Feldern `message`, `retryable` & `nextAction`.
Die Ursachen sind `target_not_found`, `target_suspended`, `target_failed` &
`deadline_reached`. Ein fehlendes oder gesperrtes Ziel kommt nur auf die Liste,
wenn eine andere Ursache den Run gestoppt hat. Der Run ist `retryable`, wenn
mindestens 1 Ursache es ist.

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
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper) scrapt
  Follower, gefolgte Accounts, Listenmitglieder, Abonnenten &
  Community-Mitglieder als Profil-Datensätze. Nutze ihn, wenn du Zielgruppen-
  oder Mitgliederlisten brauchst. Ab $0.00015 pro Profil.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper) sucht
  Nutzer nach Nutzername, Bio & Standort mit Filtern für Follower,
  Verifizierung, Account-Alter & Standort. Nutze ihn, wenn du Account-Listen aus
  einer Suche aufbaust. Ab $0.00015 pro Profil.
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

### Brauche ich X-Cookies, einen API-Schlüssel oder einen Login?

Nein. X Account Location Scraper von Xquik braucht keine X-Cookies, keinen
API-Schlüssel, keinen Login oder Zugangsdaten. Jeder Abruf läuft auf der
Infrastruktur von Xquik.

### Zeigt die Angabe, wo der Account-Inhaber wohnt?

Nein. Sie ist die bestmögliche Einschätzung von X für den Account. Sie nennt
keine Staatsangehörigkeit, keinen Wohnsitz oder genauen Standort, & X selbst
kennzeichnet manche Angaben als möglicherweise ungenau.

### Warum steht in einem Datensatz `accountBasedInUnavailable`?

X hat die Angabe bei beiden Abrufen des Runs zurückgehalten. Die Angabe ist
unbekannt. Das heißt nicht, dass es keine gibt. Starte später einen neuen Run
für den Account, um sie zu erhalten. `accountBasedIn: null` ist etwas anderes. X
zeigt für diesen Account keine Angabe.

### Wie viele Accounts kann ich in 1 Run prüfen?

So viele, wie du einfügst. Ein Run kann 100.000 Datensätze & mehr liefern.
Erhöhe `maxItems` für eine größere Liste über die 1.000, mit denen das Formular
startet.

### Ist es legal zu prüfen, wo X-Accounts ansässig sind?

X Account Location Scraper von Xquik fragt öffentliche X-Felder ab. Ergebnisse
können personenbezogene Daten enthalten. Prüfe, ob dein Zweck rechtmäßig ist, &
befolge geltende Datenschutzregeln. Hol dir bei Unsicherheit qualifizierten
Rechtsrat.

### Warum hat mein Run keine Ergebnisse geliefert?

Lies zuerst den Run-Status. Der Status eines leeren Runs rät dir, Nutzername, ID
oder URL jedes Accounts zu prüfen, für den X keinen Treffer hat. Die kostenlose
Ausgabe `diagnostics` erscheint, wenn etwas deine Aufmerksamkeit braucht. Ihr
Feld `stopCauses` gibt jeder Ursache eine `nextAction`, der du folgen kannst.

### Kann ich die API, Zeitpläne & Integrationen nutzen?

Ja. Nutze die Apify-API oder die REST-API von Xquik. Der
[API-Tab](https://apify.com/xquik/x-account-location-scraper/api) enthält
Beispiele für Python, JavaScript & cURL.
[Zeitpläne](https://docs.apify.com/platform/schedules) von Apify starten X
Account Location Scraper von Xquik per Cron. Agents nutzen
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Nutze `latest`,
außer du brauchst einen älteren Build.

### Wo bekomme ich Hilfe?

Öffne im [Tab Issues](https://apify.com/xquik/x-account-location-scraper/issues)
ein Issue mit der Run-ID. Kostenlose Diagnosen im Key-Value-Store erklären Runs,
die Aufmerksamkeit brauchen. Ein Run, der keinen Datensatz zurückbekommt, sagt
in seinem Status, warum.

### Kann ich eine individuelle Lösung bekommen?

Ja. Beschreibe im
[Tab Issues](https://apify.com/xquik/x-account-location-scraper/issues), was du
brauchst. Xquik bietet außerdem ein Dashboard, eine REST-API, einen MCP-Server &
Webhooks. Die Website von Xquik findest du in seinem
[Apify-Profil](https://apify.com/xquik).
