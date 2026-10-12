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
liefert die vollständigsten X-Daten. X Space Scraper von Xquik findet Spaces
nach Stichwort, Host oder Hashtag & liest Spaces & Broadcasts per URL oder ID.
Die meisten anderen Apify Actors rechnen ab, bevor sie filtern oder Duplikate
entfernen. Xquik rechnet nur gelieferte, eindeutige Ergebnisse ab.

Finde Twitter Spaces zu jedem Thema, live, geplant oder beendet. Du brauchst
keinen X-API-Schlüssel & keinen Login. Du zahlst **$0.00015 pro geliefertem
Space oder Broadcast**, & Apify berechnet die Plattformnutzung separat.

> Xquik ist ein unabhängiger Drittanbieter-Dienst. Nicht verbunden mit X Corp.
> "Twitter" und "X" sind Marken von X Corp.

## Space-Daten

- Titel, Status & die geplante Zeit, Start- & Endzeit jedes Space.
- Zahl der Live-Zuhörer, Wiedergaben der Aufzeichnung & die Accounts, die gerade
  im Space sind.
- Das öffentliche Profil des Hosts, Co-Hosts, Sprecher & die Zuhörer, die X
  auflistet.
- Einstellungen für Aufzeichnung, Clips & Sperre sowie der Post, der den Space
  ankündigt, mit Text, Zahlen & Autor.
- Posts, die Hosts & Sprecher im Space geteilt haben, mit Absender & Zeitpunkt.
- Die Aufzeichnung eines beendeten Space als HLS-Playlist-URL, mit
  `includeReplay`.
- Broadcasts per URL oder ID: Titel, Status, Zeiten, Zuschauerzahlen & Host.
- Duplikatentfernung vor der Abrechnung: Ein Space, den 2 Suchbegriffe finden,
  ist 1 Datensatz.

## So findest du X Spaces

1. Öffne X Space Scraper von Xquik in der Apify Console.
2. Gib Wörter, Hashtags oder X-Suchoperatoren in `searchTerms` ein.
3. Oder füge Space-URLs in `startUrls` oder Space-IDs in `spaceIds` ein.
4. Für Broadcasts füge ihre URLs in `startUrls` oder ihre IDs in `broadcastIds`
   ein.
5. Setze `maxItems`, um die gelieferten Datensätze zu begrenzen. Klicke dann auf
   Start.
6. Lade das Dataset als JSON, CSV oder Excel herunter oder nutze die Apify-API.

`startUrls` nimmt jede URL als einfachen String oder als Objekt
`{ "url": "..." }`:

```json
{
  "startUrls": [
    "https://x.com/i/spaces/1OGwblLjnQMKB",
    { "url": "https://x.com/i/broadcasts/1nGeLMWbkpaKX" }
  ]
}
```

## Eingabe

```json
{
  "searchTerms": ["bitcoin", "from:solana"],
  "queryType": "Latest",
  "maxItems": 1000
}
```

Ein Suchbegriff findet die Spaces, die passende Posts teilen. Er akzeptiert die
Operatoren der X-Suche:

| Ziel                                      | Suchbegriff        |
| ----------------------------------------- | ------------------ |
| Spaces zu einem Thema                     | `bitcoin`          |
| Spaces, die ein Account teilt             | `from:solana`      |
| Spaces unter einem Hashtag                | `#AI`              |
| Spaces in 1 Sprache                       | `startups lang:es` |
| Spaces, die Posts mit vielen Likes teilen | `nba min_faves:50` |

`queryType` legt fest, welche Posts vorne stehen: `Latest` für die neuesten,
`Top` für die mit dem meisten Engagement.

Lies Spaces, die du schon kennst, per URL oder ID:

```json
{
  "startUrls": [{ "url": "https://x.com/i/spaces/1OGwblLjnQMKB" }],
  "spaceIds": ["1OGwblLjnQMKB"]
}
```

Aktiviere `includeReplay`, um die Aufzeichnung jedes beendeten Space zu
erhalten:

```json
{ "spaceIds": ["1OGwblLjnQMKB"], "includeReplay": true }
```

Der Datensatz enthält dann `replay` mit `url`, einer HLS-Playlist, sowie
`streamType` & `status`. Ein Space, der live, geplant oder ohne Aufzeichnung
ist, hat kein `replay`. Die Aufzeichnung kostet nichts extra.

Lies Broadcasts, die Live-Videos, die X unter `x.com/i/broadcasts` hostet, per
URL oder ID:

```json
{
  "startUrls": [{ "url": "https://x.com/i/broadcasts/1nGeLMWbkpaKX" }],
  "broadcastIds": ["1nGeLMWbkpaKX"]
}
```

Kleine Runs ohne Probleme überspringen `run-report` & sparen Apify-Nutzung.
Aktiviere `alwaysSaveRunRecords`, um ihn bei jedem Run zu schreiben.

## Ausgabe

Jeder Datensatz enthält 1 Space oder Broadcast & dessen Suchbegriff, URL oder ID
in `sourceTarget`. `resultType` ist `space` oder `broadcast`.

Die Beispiele zeigen Musterwerte. Echte Ergebnisse enthalten Live-Daten. Ein
Space-Datensatz sieht so aus:

```json
{
  "id": "1SampleSpace1",
  "title": "Sample Space about bitcoin",
  "state": "Ended",
  "startedAt": "2026-03-11T17:00:26.227Z",
  "endedAt": "2026-03-11T17:49:29.190Z",
  "totalLiveListeners": 841,
  "totalReplayWatched": 609,
  "isAvailableForReplay": true,
  "creator": { "username": "sample_host", "name": "Sample Host" },
  "admins": [{ "username": "sample_host", "name": "Sample Host" }],
  "speakers": [{ "username": "sample_speaker", "name": "Sample Speaker" }],
  "listeners": [],
  "sharings": [
    {
      "id": "2106511178339881415",
      "sharedAt": "2026-03-11T17:20:16.658Z",
      "sharedBy": { "username": "sample_speaker", "name": "Sample Speaker" },
      "tweet": { "id": "2105620368836706789", "text": "Sample shared post" }
    }
  ],
  "resultType": "space",
  "sourceTarget": "bitcoin"
}
```

`state` enthält 1 von 5 Werten, so wie X sie nennt:

| `state`      | Der Space                                          |
| ------------ | -------------------------------------------------- |
| `NotStarted` | Ist geplant & enthält `scheduledStart`.            |
| `Running`    | Ist gerade live.                                   |
| `Ended`      | Ist vorbei. Der Host hat ihn beendet.              |
| `TimedOut`   | Ist vorbei. X hat ihn geschlossen, nicht der Host. |
| `Canceled`   | War geplant & hat nie begonnen.                    |

Spaces mit `Ended` & `TimedOut` enthalten `endedAt`, & beide können eine
Aufzeichnung behalten. X zeigt einen Space für Abonnenten oder eine Community
nur dessen Publikum, deshalb liefern diese Spaces keinen Datensatz.

Ein Broadcast-Datensatz hat `resultType: "broadcast"` & sieht so aus:

```json
{
  "id": "1SampleBcast1",
  "title": "Sample launch broadcast",
  "state": "Ended",
  "startedAt": "2026-09-17T00:54:56.506Z",
  "endedAt": "2026-09-17T01:17:35.036Z",
  "totalWatched": 161758,
  "totalWatching": 21639,
  "width": 3840,
  "height": 2160,
  "creator": { "username": "sample_host", "name": "Sample Host" },
  "resultType": "broadcast",
  "sourceTarget": "1SampleBcast1"
}
```

## Was kostet es, X Spaces zu scrapen?

Auf jedem Apify-Plan kostet ein gelieferter Space oder Broadcast $0.00015. Apify
berechnet deine Plattformnutzung separat.

- Eine Gebühr pro geliefertem Datensatz. Diagnosen in `diagnostics` sind
  kostenlos.
- Keine Gebühr für Start, Suchen oder Seiten.
- Die Deduplizierung läuft vor der Abrechnung.

## Limits & Wiederherstellung

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

Jeder Xquik-Actor nutzt dieselbe Extraktions-Engine, rechnet erst nach dem
Filtern ab & liefert dieselben Diagnosen. Wähle den, der zu deinen Daten passt.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): Scrapt Posts aus
  Suchen, Profil-Timelines, Listen & Post-IDs mit über 50 Filtern & flachen
  Exporten. Nutze ihn, wenn du Post-Daten ohne Analyse brauchst. Ab $0.00015 pro
  Datensatz.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): Scrapt Profile
  samt Posts, Antworten, Medien & Followern anhand von Nutzernamen, IDs oder
  URLs. Nutze ihn, wenn du von Accounts statt von Suchen ausgehst. Ab $0.00015
  pro Datensatz.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): Scrapt Antworten,
  Kommentare & ganze Konversationen unter Posts mit über 25 Filtern. Nutze ihn,
  wenn du die Diskussion unter Posts brauchst. Ab $0.00015 pro Datensatz.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): Scrapt
  Antworten, Zitate, Reposter & Threads zu Post-URLs oder -IDs in großen Mengen.
  Nutze ihn, wenn du misst, wer mit Posts interagiert hat. Ab $0.00015 pro
  Datensatz.
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper):
  Scrapt die Posts, die Posts zitieren, mit Text, Medien, Zahlen, Autoren & 11
  Filtern. Nutze ihn, wenn du untersuchst, wer Posts zitiert hat & was gesagt
  wurde. Ab $0.00015 pro Post.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): Scrapt
  Follower, gefolgte Accounts, Listenmitglieder, Abonnenten &
  Community-Mitglieder als Profil-Datensätze. Nutze ihn, wenn du Zielgruppen-
  oder Mitgliederlisten brauchst. Ab $0.00015 pro Profil.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper): Sucht
  Nutzer nach Nutzername, Bio & Standort mit Filtern für Follower,
  Verifizierung, Account-Alter & Standort. Nutze ihn, wenn du Account-Listen aus
  einer Suche aufbaust. Ab $0.00015 pro Profil.
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper):
  Prüft mit der X-Angabe "Account based in", der Art, wie sich ein Account mit X
  verbunden hat, & Benutzernamen-Änderungen, wo Accounts ansässig sind. Nutze
  ihn, wenn du prüfst, wo Accounts ansässig sind. Ab $0.00015 pro Account.
- [X Email Scraper](https://apify.com/xquik/x-email-scraper): Holt die E-Mails,
  Telefonnummern & Links, die Accounts in ihren Profilen veröffentlichen, anhand
  von Nutzernamen, Followern oder Nutzersuchen. Nutze ihn, wenn du die E-Mails
  brauchst, die Profile veröffentlichen. Ab $0.00015 pro Profil.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): Scrapt Posts,
  Mitglieder & Follower von Listen aus Listen-URLs oder -IDs. Nutze ihn, wenn
  eine kuratierte Liste deine Quellen festlegt. Ab $0.00015 pro Datensatz.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): Scrapt
  Community-Infos, Posts, Suchen, Mitglieder & Moderatoren. Nutze ihn, wenn
  deine Quellen X-Communities sind. Ab $0.00015 pro Datensatz.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): Scrapt
  Echtzeit-Trends nach Standort mit Rang, Volumen, Suchbegriff & WOEID. Nutze
  ihn, wenn du verfolgst, was wo gerade angesagt ist. Ab $0.00015 pro Trend.
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper): Scrapt
  X-Stellenanzeigen nach Stichwort, Ort, Arbeitsmodell, Karrierestufe &
  Unternehmen, mit Gehältern & Bewerbungslinks. Nutze ihn, wenn du auf X
  veröffentlichte Stellen sammelst. Ab $0.00015 pro Job.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): Scrapt lange
  X-Artikel als Markdown & Text mit Titelbildern, Autoren, Daten & Kennzahlen.
  Nutze ihn, wenn du Artikeltexte statt Posts brauchst. Ab $0.00015 pro Artikel.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): Extrahiert
  oder speichert Fotos, Videos & GIFs aus Posts oder Profilen mit MP4- &
  Metadaten-Optionen. Nutze ihn, wenn du die Mediendateien selbst brauchst. Ab
  $0.00015 pro Medien-Datensatz.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  Verfolgt Markenerwähnungen mit KI-Relevanz, Sentiment & Antworten zur
  Kundenerfahrung & vergleicht Runs. Nutze ihn, wenn du eine Marke über längere
  Zeit beobachtest. Ab $0.0003 pro analysiertem Post.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  Kennzeichnet Haltung, Intensität & Sarkasmus-Wahrscheinlichkeit für jeden Post
  mit KI. Nutze ihn, wenn du allgemeines Sentiment zu einem Thema brauchst. Ab
  $0.0003 pro analysiertem Post.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  Kennzeichnet bullische, bärische, neutrale oder gemischte Haltung, Inhaltstyp,
  Überzeugungsgrad & Asset-Relevanz mit KI. Nutze ihn, wenn du Aktien, Krypto
  oder Trading-Talk verfolgst. Ab $0.0003 pro analysiertem Post.
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

## FAQ

Antworten auf häufige Fragen, danach, wo du Hilfe bekommst.

### Brauche ich einen X-API-Schlüssel oder Login?

Nein. X Space Scraper von Xquik braucht keinen X-API-Schlüssel, keinen Login &
keine Zugangsdaten.

### Kann ich Spaces finden, die gerade live sind?

Ja. Suche mit `queryType` auf `Latest` & behalte dann die Datensätze, deren
`state` den Wert `Running` hat. Datensätze mit `NotStarted` sind geplant &
enthalten `scheduledStart`.

### Ist es legal, X Spaces zu scrapen?

X Space Scraper von Xquik fragt öffentliche X-Felder ab. Ergebnisse können
personenbezogene Daten enthalten. Prüfe, ob dein Zweck rechtmäßig ist. Befolge
geltende Datenschutzregeln. Hol dir bei Unsicherheit qualifizierten Rechtsrat.

### Warum hat mein Run keine Ergebnisse geliefert?

Öffne zuerst die kostenlose Ausgabe `diagnostics`. Der Status eines leeren Runs
rät dir, deine Ziele zu prüfen. `stopCauses` gibt jeder Ursache eine
`nextAction`, der du folgen kannst.

### Kann ich API, Zeitpläne & Integrationen nutzen?

Ja. Nutze die Apify-API oder die REST-API von Xquik. Der
[API-Tab](https://apify.com/xquik/x-space-scraper/api) enthält Beispiele für
Python, JavaScript & cURL.
Apify-[Zeitpläne](https://docs.apify.com/platform/schedules) starten X Space
Scraper von Xquik per Cron. Agents nutzen
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Nutze `latest`,
außer du brauchst einen älteren Build.

### Wo bekomme ich Hilfe?

Öffne ein Issue auf der Actor-Seite oder schreib mit der Run-ID an
support@xquik.com. Kostenlose Diagnosen im Key-Value-Store erklären leere,
unvollständige oder unterbrochene Runs.

### Kann ich eine individuelle Lösung bekommen?

Ja. Besuche [xquik.com](https://xquik.com) oder lies die
[API-Dokumentation](https://docs.xquik.com/introduction). Sie deckt Dashboard,
API, MCP-Server & Webhooks ab.
