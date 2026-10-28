[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
**Deutsch** · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer verbindet Xquik MCP mit Coding-Agents](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Sieh dir an, wie Framer Xquik-Scraper nutzt](https://youtu.be/4UOSpoOoC3Y?t=367),
mit Claude Code, Codex, Cursor & mehr, ab Minute 6:07.

Xquik ist weltweit der schnellste & günstigste Scraper-Dienst für X (Twitter) &
liefert die vollständigsten X-Daten. X Jobs Scraper von Xquik sammelt auf X
veröffentlichte Stellenanzeigen mit Gehältern, Bewerbungslinks & vollständigen
Beschreibungen. Die meisten anderen Apify Actors rechnen ab, bevor sie filtern
oder Duplikate entfernen. Xquik rechnet nur gelieferte, eindeutige Ergebnisse
ab, die zu deinen Filtern passen.

Durchsuche X-Jobs nach Stichwort, Ort, Arbeitsmodell, Karrierestufe &
Unternehmen in 1 Run. Du zahlst **$0.00015 pro geliefertem Datensatz** & Apify
berechnet die Plattformnutzung separat. Du brauchst weder einen X-API-Schlüssel
noch einen Login.

> Xquik ist ein unabhängiger Drittanbieter-Dienst. Nicht verbunden mit X Corp.
> "Twitter" und "X" sind Marken von X Corp.

## Warum X Jobs Scraper nutzen?

- **Nur die Jobs, die du willst.** Filtere nach Ort, Arbeitsmodell,
  Karrierestufe, Anstellungsart & Unternehmen.
- **Genau der Ort, den du meinst.** `locationId` legt 1 Ort fest, etwa New York
  City statt West New York.
- **Bekannte Jobs per Link.** Füge Job-URLs oder IDs ein, um jede vollständige
  Anzeige zu erhalten.
- **Beschreibungen ohne Aufpreis.** Ein Datensatz mit vollständiger Beschreibung
  kostet so viel wie eine einfache Anzeige.
- **Sofort nutzbare Exporte.** Behalte Felder, benenne sie um, mache sie flach
  oder füge sie zusammen. Exportiere dann JSON, CSV, Excel, XML oder RSS.

### Vollständige Ergebnisse

- Jedes Ergebnis enthält die vollständigsten Daten, die X dafür hat.

### Genaue Datensätze

- Datensätze enthalten nur öffentliche Daten.

### Aktuelle Daten

- Abrufe funktionieren weiter, wenn X Änderungen ausrollt.

### Tempo

- Eine langsame Seite hält deinen Run nicht auf.
- Abrufe enden, sobald ihre Datensätze ankommen.
- Hängende Actor-Aufrufe laufen von selbst wieder an.

### Faire Abrechnung

- Eine fehlerhafte Eingabe kostet nichts & sagt dir, was du korrigieren musst.
- Actors rechnen nur gelieferte, eindeutige, passende Datensätze ab.
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
- Jeder Run sagt, warum er endete & ob du es erneut versuchen solltest.

### Qualitätsprüfungen

- Jedes Feld, das X zeigt, wird geliefert, bewusst weggelassen oder ist
  nachweislich nicht vorhanden.
- Xquik testet jeden Abruf live gegen X.

## Welche Daten kann X Jobs Scraper extrahieren?

- Job-Standorte nach Name, jeweils mit der ID, die `locationId` annimmt.
- Titel, Gehaltsspanne, Währung, Bewerbungslink, Standort & einstellender
  Account.
- Vollständige Beschreibungen als Klartext & Markdown in jedem Datensatz.
- Suchzuordnung in jedem Datensatz.

## So scrapst du X-Jobs

Neu bei Apify?
[Erstelle zuerst einen kostenlosen Account](https://console.apify.com/sign-up?fpr=xquik).
Der kostenlose Plan braucht keine Kreditkarte & gibt dir jeden Monat $5 zum
Ausgeben. Bei $0.00015 pro Job reichen $5 für bis zu 33.000 Jobs, vor Abzug der
Plattformnutzung. Komm dann hierher zurück & klicke auf Try for free.

1. Öffne X Jobs Scraper von Xquik in der Apify Console.
2. Gib Jobtitel oder Fähigkeiten in `searchTerms` oder Job-URLs in `startUrls`
   ein.
3. Grenze die Suche mit `location`, `locationType`, `seniority` oder `company`
   ein.
4. Setze `maxItems`, um die gelieferten Datensätze zu begrenzen, & klicke dann
   auf Start.
5. Lade das Dataset als JSON, CSV oder Excel herunter oder nutze die Apify-API.

`startUrls` akzeptiert jede URL als einfachen String oder als Objekt
`{ "url": "..." }`.

```json
{
  "startUrls": [
    "https://x.com/i/jobs/1899202395210649861",
    { "url": "https://x.com/i/jobs/1899202395210649861" }
  ]
}
```

## Eingabe

Suche per Stichwort mit Filtern.

```json
{
  "searchTerms": ["software engineer", "data scientist"],
  "location": "Berlin",
  "locationType": ["remote", "hybrid"],
  "seniority": ["senior", "lead"],
  "maxItems": 200
}
```

`locationType` akzeptiert `onsite`, `remote` & `hybrid`. `seniority` akzeptiert
`intern`, `entry_level`, `junior`, `mid_level`, `senior`, `lead`, `manager` &
`executive`. `employmentType` akzeptiert `full_time`, `full_time_contract`,
`part_time` & `contract_to_hire`. Jeder Filter behält Jobs, die zu einem der
gewählten Werte passen.

Lies bekannte Jobs per URL oder ID.

```json
{
  "startUrls": [{ "url": "https://x.com/i/jobs/1899202395210649861" }],
  "jobIds": ["1828221151962898435"]
}
```

`location` akzeptiert einen Ortsnamen. `locationId` legt stattdessen 1 exakten
Ort fest, etwa New York City statt West New York.

Finde Orts-IDs nach Name. Ein Run mit `locationSearchTerms` listet Orte statt
Jobs.

```json
{ "locationSearchTerms": ["New York"], "maxItems": 20 }
```

Kleine Runs ohne Probleme überspringen `run-report` & sparen Apify-Nutzung.
Aktiviere `alwaysSaveRunRecords`, um ihn bei jedem Run zu schreiben.

## Ausgabe

Jeder Job ist 1 Datensatz im Dataset mit `id`, `title`, `url`, `applyUrl`,
`location`, den Gehaltsfeldern & `account`. Jeder Datensatz enthält außerdem
`description`, `descriptionMarkdown`, `locationType`, `employmentType`,
`seniorityLevel`, `jobFunction`, `team`, `postedAt` & `company`. Setze
`includeDetails` auf `false` für einen schnelleren Run nur mit den
Listenfeldern. Datensätze aus Job-URLs enthalten immer die vollständige Anzeige.
Fehlende Quellfelder bleiben weg. X Jobs Scraper von Xquik erfindet keine Werte.

Die Beispiele nutzen Musterwerte. Die Ergebnisse spiegeln Live-Daten wider. Ein
Job-Datensatz sieht so aus.

```json
{
  "id": "1899202395210649861",
  "title": "Engineer",
  "url": "https://x.com/i/jobs/1899202395210649861",
  "applyUrl": "https://example.com/careers/engineer",
  "location": "United States",
  "locationType": "remote",
  "employmentType": "full_time",
  "seniorityLevel": "lead",
  "formattedSalary": "Starting at $225K",
  "salaryMin": 225000,
  "salaryCurrencyCode": "USD",
  "salaryInterval": "annually",
  "account": { "username": "example", "verified": true },
  "sourceTarget": "software engineer",
  "resultType": "job"
}
```

Jeder Job-Standort ist 1 Datensatz mit der `id`, die `locationId` annimmt.

```json
{
  "id": "1720462281920696805",
  "name": "New York City, NY",
  "sourceTarget": "New York",
  "resultType": "jobLocation"
}
```

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

## Was kostet es, X-Jobs zu scrapen?

Auf jedem Apify-Plan kostet ein gelieferter Datensatz $0.00015. Apify berechnet
deine Plattformnutzung separat.

Brauchst du mehr Volumen, dann
[wähle einen Apify-Plan](https://apify.com/pricing?fpr=xquik) mit mehr
vorausbezahlter Nutzung.

- 1 Gebühr pro geliefertem Datensatz. Diagnosen in `diagnostics` sind kostenlos.
- Keine Gebühr für Start, Suche oder Job-URL.
- Vollständige Beschreibungen kosten nichts extra.
- Die Deduplizierung läuft vor der Abrechnung.
- Die Apify-Einstellungen für die maximale Gesamtgebühr begrenzen die
  gelieferten Datensätze.

## Limits & Wiederherstellung

X Jobs Scraper von Xquik liest viele Suchen & Job-URLs in 1 Run. Gelieferte
Datensätze & Fortschritt überstehen einen Apify-Neustart. Der Actor setzt kein
eigenes Zeitlimit. Er hält jedes Apify-Timeout ein, das du setzt.

Eine unterbrochene Extraktion schreibt eine kostenlose `partial`-Diagnose.
Verfügbare Ergebnisse bleiben erhalten. Lies `availableResults`,
`failedTargets`, `retryable` & `nextAction`, bevor du es erneut versuchst. Ein
erfolgreicher Actor-Abschluss bestätigt die Lieferung, nicht die vollständige
Extraktion.

Der Run-Status nennt jede Ursache für einen vorzeitigen Stopp. `stopCauses`
listet jede Ursache mit eigenen Feldern `message`, `retryable` & `nextAction`.
Die Ursachen sind `target_not_found`, `target_failed`, `pagination_safety_limit`
& `deadline_reached`. Ein fehlendes Ziel kommt nur auf die Liste, wenn eine
andere Ursache den Run gestoppt hat. Der Run ist `retryable`, wenn mindestens 1
Ursache es ist.

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

Nein. X Jobs Scraper von Xquik braucht weder einen X-API-Schlüssel noch einen
Login oder Zugangsdaten.

### Ist es legal, X-Jobs zu scrapen?

X Jobs Scraper von Xquik fragt öffentliche X-Felder ab. Ergebnisse können
personenbezogene Daten enthalten. Prüfe, ob dein Zweck rechtmäßig ist, & befolge
geltende Datenschutzregeln. Hol dir bei Unsicherheit qualifizierten Rechtsrat.

### Warum hat mein Run keine Ergebnisse geliefert?

Lies zuerst den Run-Status. Der Status eines leeren Runs rät dir, Suchbegriffe &
Filter zu prüfen. Die kostenlose Ausgabe `diagnostics` erscheint, wenn etwas
deine Aufmerksamkeit braucht. Ihr Feld `stopCauses` gibt jeder Ursache eine
`nextAction`, der du folgen kannst. Ein Filterwert, den der Actor nicht kennt,
stoppt den Run vor jeder Gebühr & nennt die gültigen Werte.

### Kann ich die API, Zeitpläne & Integrationen nutzen?

Ja. Nutze die Apify-API oder die REST-API von Xquik. Im
[API-Tab](https://apify.com/xquik/x-job-scraper/api) findest du Beispiele für
Python, JavaScript & cURL.
[Zeitpläne](https://docs.apify.com/platform/schedules) von Apify starten X Jobs
Scraper von Xquik per Cron. Agents nutzen
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Nutze `latest`,
außer du brauchst einen älteren Build.

### Wo bekomme ich Hilfe?

Öffne im [Tab Issues](https://apify.com/xquik/x-job-scraper/issues) ein Issue
mit der Run-ID. Kostenlose Diagnosen im Key-Value-Store erklären Runs, die
Aufmerksamkeit brauchen. Ein Run, der keinen Datensatz zurückbekommt, sagt in
seinem Status, warum.

### Kann ich eine individuelle Lösung bekommen?

Ja. Beschreibe im [Tab Issues](https://apify.com/xquik/x-job-scraper/issues),
was du brauchst. Xquik bietet außerdem ein Dashboard, eine REST-API, einen
MCP-Server & Webhooks. Die Website von Xquik findest du in seinem
[Apify-Profil](https://apify.com/xquik).
