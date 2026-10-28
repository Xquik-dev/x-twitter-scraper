[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
**Deutsch** · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer verbindet Xquik MCP mit Coding-Agents](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Sieh dir an, wie Framer Xquik-Scraper nutzt](https://youtu.be/4UOSpoOoC3Y?t=367),
mit Claude Code, Codex, Cursor & mehr, ab Minute 6:07.

Xquik ist weltweit der schnellste & günstigste Scraper-Dienst für X (Twitter) &
liefert die vollständigsten X-Daten. X (Twitter) Post Tracker von Xquik
speichert die öffentlichen Zahlen der Posts, die du auswählst. Er braucht keine
X-Cookies & keinen Login. Starte ihn später erneut, & jede Zeile zeigt, was sich
geändert hat. Die meisten anderen Apify Actors rechnen ab, bevor sie filtern
oder Duplikate entfernen. Xquik rechnet nur gelieferte, eindeutige Ergebnisse
ab.

Füge Post-URLs oder Tweet-IDs ein. Jeder Run speichert 1 Snapshot-Zeile pro
Post. Eine Zeile enthält Aufrufe, Likes, Reposts, Antworten, Zitate &
Lesezeichen zu diesem Zeitpunkt. Sie enthält auch die Änderung seit dem
vorherigen Snapshot & seit dem ersten. Du zahlst **$0.00015 pro geliefertem
Snapshot**, & Apify berechnet die Plattformnutzung separat.

> Xquik ist ein unabhängiger Drittanbieter-Dienst. Nicht verbunden mit X Corp.
> "Twitter" und "X" sind Marken von X Corp.

## Warum X (Twitter) Post Tracker nutzen?

- **Wachstum in jeder Zeile.** Jeder Snapshot enthält die Änderung seit dem
  letzten & dem ersten Run.
- **Verlauf ohne Datenbank.** Übergib das Dataset eines früheren Runs. Der erste
  Snapshot wird von Run zu Run weitergetragen.
- **Posts in jeder Form einfügen.** Mische Post-URLs & Tweet-IDs in 1 Liste.
- **Exporte, bereit für Tabellen.** Forme Spalten mit `fields` & `flatten`.
  Exportiere JSON, CSV, Excel, XML oder RSS.

## Was du bekommst

### Vollständige Ergebnisse

- Jedes Ergebnis enthält die vollständigsten Daten, die X dafür hat.

### Genaue Zeilen

- Ein Post gilt nur dann als fehlend, wenn er wirklich weg ist.
- Jede ID in einer Zeile bleibt exakt.
- Zeilen enthalten nur öffentliche Daten.

### Aktuelle Daten

- Abrufe funktionieren weiter, wenn X Änderungen ausrollt.

### Geschwindigkeit

- Eine langsame Antwort von X hält deine Anfrage nicht auf.
- Actors lesen viele Handles, Posts & Suchanfragen gleichzeitig.
- Abrufe enden, sobald ihre Zeilen ankommen.
- Hängende Actor-Aufrufe erholen sich von selbst.

### Faire Abrechnung

- Fehlerhafte Eingaben kosten nichts, weil sie vor jedem Abruf abgelehnt werden.
- Actors berechnen nur gelieferte, eindeutige, passende Zeilen.
- Ein neu gestarteter Run rechnet nie doppelt ab.
- Ein Ausgabenlimit wird zum Zeilenlimit, & Diagnosen werden trotzdem
  geschrieben.
- Kleine Runs enden mit einem Tipp, der Kosten senkt.

### Zuverlässigkeit

- Ein einmaliger Fehler bei X lässt deine Anfrage nicht scheitern.
- Eine Frist liefert die bereits gefundenen Zeilen mit Diagnosen.
- Actors überstehen kurze Ausfälle von Xquik.
- Actor-Runs überstehen Neustarts ohne Wiederholungen.
- Eine fehlerhafte Zeile bringt keinen Batch zu Fall.
- Gestoppte Runs behalten ihre Zeilen & ihren Bericht.
- Ein Run, der nicht starten kann, erklärt trotzdem, warum.
- Probleme auf der Seite von X werden behoben, bevor sie deine Abrufe erreichen.
- Der Support sieht genau, was eine Anfrage oder ein Run geliefert hat.

### Für Agents gebaut

- Actors akzeptieren Eingaben, die für andere Actors geschrieben sind.
- Jeder Run sagt, warum er endete & ob sich ein neuer Versuch lohnt.

### Umfangreiche Daten

- Jede Snapshot-Zeile enthält die Änderung jeder Zahl seit einem früheren Run.

### Qualitätsprüfungen

- Jedes Feld, das X zeigt, wird geliefert, bewusst weggelassen oder als nicht
  vorhanden belegt.
- Jeder Abruf wird stündlich live geprüft.

## Welche Daten kann X (Twitter) Post Tracker extrahieren?

- Aufrufe, Likes, Reposts, Antworten, Zitate & Lesezeichen jedes Posts.
- Die Zeit jedes Snapshots, in `capturedAt`.
- Der erste Snapshot jedes Posts, mit Zeit & Zahlen.
- Der vorherige Snapshot, aus dem Dataset des früheren Runs.
- Die Änderung jeder Zahl seit dem vorherigen Snapshot.
- Die Änderung jeder Zahl seit dem ersten Snapshot.
- Der Text des Posts, sein Datum, sein Link & sein Autor.
- Viele Posts in 1 Run, geliefert in der Reihenfolge der Eingabe.
- Exporte als JSON, CSV, Excel, XML & RSS über Apify-Datasets.

## So verfolgst du X-Post-Metriken über die Zeit

Neu bei Apify?
[Erstelle zuerst ein kostenloses Konto](https://console.apify.com/sign-up?fpr=xquik).
Der kostenlose Plan braucht keine Kreditkarte & gibt dir jeden Monat $5 zum
Ausgeben. Bei $0.00015 pro Snapshot reichen $5 für bis zu 33.000 Snapshots vor
der Plattformnutzung. Komm dann hierher zurück & klicke auf Try for free.

1. Öffne X (Twitter) Post Tracker von Xquik in der Apify Console.
2. Füge Post-URLs oder Tweet-IDs in `tweetIds` ein.
3. Lass `previousDatasetId` beim ersten Run leer & klicke dann auf Start.
4. Wähle beim nächsten Run das Dataset des ersten Runs in `previousDatasetId`.
5. Lade das Dataset als JSON, CSV oder Excel herunter, oder nutze die Apify-API.

Du gibst in keinem Schritt X-Cookies, Login-Daten oder einen API-Schlüssel ein.

## Eingabe

`tweetIds` nimmt Tweet-IDs & Post-URLs, in beliebiger Mischung.

```json
{
  "tweetIds": [
    "2102882545427714266",
    "https://x.com/OpenAI/status/2082577277246972300",
    "20"
  ],
  "maxItems": 1000
}
```

`startUrls` nimmt dieselben Post-URLs. Gib jede als einfachen String oder als
Objekt `{ "url": "..." }` an.

`previousDatasetId` nennt das Dataset eines früheren Runs dieses Actors. Im
Formular wählst du es aus deinen Datasets aus. Der Actor liest dieses Dataset
nur. Lass es beim ersten Run leer.

```json
{
  "tweetIds": ["2102882545427714266", "20"],
  "previousDatasetId": "<dataset ID of an earlier run>"
}
```

Ein Post, den die Eingabe zweimal nennt, bekommt 1 Zeile. `maxItems` behält die
ersten Posts der Eingabe. Kleine Runs ohne Probleme überspringen `run-report` &
sparen Apify-Nutzung. Aktiviere `alwaysSaveRunRecords`, damit er bei jedem Run
geschrieben wird.

## Per Zeitplan ausführen

Apify-[Zeitpläne](https://docs.apify.com/platform/schedules) starten den Actor
per Cron, etwa jede Stunde.

1. Starte den Actor einmal mit deinen Posts & ohne `previousDatasetId`.
2. Erstelle in der Apify Console einen Zeitplan für den Actor.
3. Gib dem Zeitplan dieselbe Eingabe in `tweetIds`.
4. Setze `previousDatasetId` auf das Dataset des ersten Runs.

Jeder geplante Run vergleicht dann seine Zahlen mit diesem Dataset. Um jeden Run
mit dem vorherigen zu vergleichen, starte Runs über die Apify-API. Übergib die
`defaultDatasetId` des letzten Runs als `previousDatasetId`. Der erste Snapshot
wird weiter mitgeführt, also zählt `changeSinceFirst` weiter ab Tag 1. Ein Post,
der im letzten Run fehlte, beginnt im nächsten einen neuen `firstSnapshot`.

Speichert ein Run keine Snapshots, übergib das Dataset des Runs davor.

## Ausgabe

Jeder Post ist 1 Dataset-Zeile pro Run. Eine Zeile beginnt mit `postId`, `url`,
`text`, `createdAt` & `author`. Dann folgen `capturedAt` & die 6 Zahlen
`viewCount`, `likeCount`, `retweetCount`, `replyCount`, `quoteCount` &
`bookmarkCount`. Danach folgen `firstSnapshot`, `previousSnapshot`,
`changeSincePrevious` & `changeSinceFirst`. Eine Zahl von 0 kann bedeuten, dass
X sie nicht gemeldet hat.

Die Beispiele nutzen Beispielwerte. Ergebnisse zeigen Live-Daten. Die Zeile
eines zweiten Runs sieht so aus.

```json
{
  "postId": "2102882545427714266",
  "url": "https://x.com/NASA/status/2102882545427714266",
  "text": "Welcome to the Artemis Accords, Croatia",
  "createdAt": "Wed Sep 23 22:07:23 +0000 2026",
  "author": { "id": "11348282", "username": "NASA", "name": "NASA" },
  "capturedAt": "2026-10-28T09:00:00.000Z",
  "viewCount": 1291231,
  "likeCount": 9043,
  "retweetCount": 772,
  "replyCount": 207,
  "quoteCount": 100,
  "bookmarkCount": 661,
  "firstSnapshot": {
    "capturedAt": "2026-10-25T09:00:00.000Z",
    "viewCount": 500000,
    "likeCount": 5000,
    "retweetCount": 500,
    "replyCount": 150,
    "quoteCount": 50,
    "bookmarkCount": 400
  },
  "previousSnapshot": {
    "capturedAt": "2026-10-27T09:00:00.000Z",
    "viewCount": 1200000,
    "likeCount": 9000,
    "retweetCount": 770,
    "replyCount": 205,
    "quoteCount": 99,
    "bookmarkCount": 640
  },
  "changeSincePrevious": {
    "viewCount": 91231,
    "likeCount": 43,
    "retweetCount": 2,
    "replyCount": 2,
    "quoteCount": 1,
    "bookmarkCount": 21
  },
  "changeSinceFirst": {
    "viewCount": 791231,
    "likeCount": 4043,
    "retweetCount": 272,
    "replyCount": 57,
    "quoteCount": 50,
    "bookmarkCount": 261
  },
  "resultType": "snapshot",
  "sourceTarget": "2102882545427714266"
}
```

Eine Zeile unterscheidet 3 Fälle.

| Die Zeile enthält                       | Bedeutung                                           |
| --------------------------------------- | --------------------------------------------------- |
| `previousSnapshot: null`                | Das frühere Dataset hat keine Zeile zu diesem Post. |
| `previousSnapshot` mit Zahlen           | Die Zeile vergleicht mit diesem Snapshot.           |
| Eine Zahl `null` in einem Änderungsfeld | Der früheren Zeile fehlt diese Zahl.                |

Bei einem ersten Run enthält `firstSnapshot` die eigene Zeit & die eigenen
Zahlen der Zeile. Beide Änderungsfelder bleiben `null` bis zu einem späteren
Run.

## Ausgabespalten

8 Eingaben formen jede Zeile, nachdem der Run sie gelesen hat. Sie führen keinen
Code aus & ändern keinen Preis.

| Feld                | Was es tut                                                                        |
| ------------------- | --------------------------------------------------------------------------------- |
| `fields`            | Behält nur diese Felder, in der Reihenfolge & Schreibweise, die du angibst        |
| `omitFields`        | Entfernt diese Felder & behält den Rest                                           |
| `renameFields`      | Verschiebt ein Feld in eine Spalte mit neuem Namen                                |
| `flatten`           | Macht aus jedem verschachtelten Objekt Spalten auf oberster Ebene                 |
| `fillMissingFields` | Füllt ein behaltenes Feld, das einer Zeile fehlt, mit `null`. Standardmäßig aktiv |
| `joinFields`        | Macht aus jeder dieser Listen 1 Textwert                                          |
| `joinSeparator`     | Text zwischen verbundenen Einträgen. Standard ist ein Komma & ein Leerzeichen     |
| `constantFields`    | Fügt eine Spalte mit demselben Text in jeder Zeile hinzu                          |

- Nutze einen Punkt für ein Feld in einem Objekt, etwa
  `changeSinceFirst.viewCount`.
- Löse `changeSincePrevious` auf, um 1 Spalte pro Zahl zu bekommen.
- Ein falscher Feldname stoppt den Run vor dem Abruf & kostet nichts.
- Der Run ignoriert eine Map-Funktion oder einen jq-Filter, die für einen
  anderen Actor geschrieben wurden.

## Was kostet das Verfolgen von X-Posts?

In jedem Apify-Plan kostet ein gelieferter Snapshot $0.00015. Apify berechnet
deine Plattformnutzung separat.

Für mehr Volumen [wähle einen Apify-Plan](https://apify.com/pricing?fpr=xquik)
mit mehr vorausbezahlter Nutzung.

- 1 Abrechnung pro gelieferter Snapshot-Zeile. Diagnosen sind in `diagnostics`
  kostenlos.
- Keine Startgebühr & keine Gebühr für das Lesen des früheren Datasets.
- Der Run entfernt doppelte Posts vor der Abrechnung.
- Ein Post, den X nicht hat, fügt keine Zeile & keine Kosten hinzu.
- Ein Dataset, das der Run nicht lesen kann, stoppt den Run & kostet nichts.
- Die Einstellungen für die maximale Gesamtgebühr in Apify begrenzen die
  gelieferten Zeilen.

## Limits & Wiederherstellung

X (Twitter) Post Tracker von Xquik liest viele Posts in 1 Run. Gelieferte Zeilen
& Fortschritt überstehen einen Neustart durch Apify. Der Actor setzt kein
eigenes Zeitlimit. Er respektiert jedes Apify-Timeout, das du setzt.

Der Run-Status zählt die Posts, zu denen X keinen Treffer hat. Ein früheres
Dataset kann bis zu 100.000 Zeilen enthalten. Ein Dataset, das der Run nicht
lesen kann, stoppt ihn vor jedem Post-Abruf. Der Status sagt dann, dass du das
Dataset eines früheren Runs wählen sollst. Unterbrochene Runs schreiben eine
kostenlose Diagnose `partial`. Lies `nextAction`, bevor du es erneut versuchst.

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

### Brauche ich X-Cookies, einen API-Schlüssel oder einen Login?

Nein. X (Twitter) Post Tracker von Xquik braucht keine X-Cookies, keinen
API-Schlüssel, keinen Login & keine Zugangsdaten.

### Welches Dataset wähle ich in `previousDatasetId`?

Wähle das Dataset eines früheren Runs dieses Actors. Seine neueste Zeile zu
jedem Post wird zu `previousSnapshot`. Der Actor überspringt Zeilen anderer
Actors & Diagnosen.

### Bleibt der erste Snapshot über viele Runs erhalten?

Ja. Jede Zeile trägt `firstSnapshot`. Verkette jeden Run mit dem vorherigen, &
der erste Snapshot bleibt gleich.

### Kann ich einen Post verfolgen, den jemand gelöscht hat?

Nein. Ein Post, den X nicht hat, fügt keine Zeile & keine Kosten hinzu. Der
Run-Status zählt ihn.

### Ist es legal, X-Posts zu verfolgen?

X (Twitter) Post Tracker von Xquik fragt öffentliche X-Felder ab. Ergebnisse
können personenbezogene Daten enthalten. Prüfe, ob dein Zweck rechtmäßig ist.
Befolge die geltenden Datenschutzregeln. Hol dir bei Unsicherheit qualifizierten
Rechtsrat.

### Kann ich die API, Zeitpläne & Integrationen nutzen?

Ja. Nutze die Apify-API oder die REST-API von Xquik. Der
[API-Tab](https://apify.com/xquik/x-twitter-post-tracker/api) enthält Beispiele
für Python, JavaScript & cURL.
Apify-[Zeitpläne](https://docs.apify.com/platform/schedules) führen X Post
Tracker von Xquik per Cron aus. Agents nutzen
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Nutze `latest`,
außer du brauchst einen älteren Build.

### Wo bekomme ich Hilfe?

Öffne im [Issues-Tab](https://apify.com/xquik/x-twitter-post-tracker/issues) ein
Issue mit der Run-ID. Kostenlose Diagnosen im Key-Value-Store erklären Runs, die
Aufmerksamkeit brauchen.

### Kann ich eine individuelle Lösung bekommen?

Ja. Beschreibe im
[Issues-Tab](https://apify.com/xquik/x-twitter-post-tracker/issues), was du
brauchst. Xquik bietet auch ein Dashboard, eine REST-API, einen MCP-Server &
Webhooks. Die Website von Xquik findest du auf seinem
[Apify-Profil](https://apify.com/xquik).
