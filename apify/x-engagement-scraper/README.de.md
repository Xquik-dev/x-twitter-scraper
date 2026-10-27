[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
**Deutsch** · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer verbindet Xquik MCP mit Coding-Agents](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Sieh dir an, wie Framer Xquik-Scraper nutzt](https://youtu.be/4UOSpoOoC3Y?t=367),
mit Claude Code, Codex, Cursor & mehr, ab Minute 6:07.

Xquik ist weltweit der schnellste & günstigste Scraper-Dienst für X (Twitter) &
liefert die vollständigsten X-Daten. X Engagement Scraper von Xquik sammelt
Antworten, Zitate, Reposter & Threads zu jedem Post. Die meisten anderen Apify
Actors rechnen ab, bevor sie filtern oder Duplikate entfernen. Xquik rechnet nur
gelieferte, eindeutige Ergebnisse ab, die zu deinen Filtern passen.

Sammle Twitter-Antworten, Zitate, Reposter & Thread-Kontext zu 1 oder mehreren
X-Posts. Du zahlst **$0.00015 pro geliefertem Datensatz** & Apify berechnet die
Plattformnutzung separat. Du brauchst weder einen X-API-Schlüssel noch einen
Login.

> Xquik ist ein unabhängiger Drittanbieter-Dienst. Nicht verbunden mit X Corp.
> "Twitter" und "X" sind Marken von X Corp.

## Warum X Engagement Scraper nutzen?

- **Prüfe, wer repostet hat.** Erfahre, ob jeder Account in `repostCheckUsers`
  jeden Post repostet hat.
- **Nur die Antworten, die du brauchst.** Wähle direkte oder verschachtelte
  Antworten, eine Antworttiefe & ein Zeitfenster.
- **Leads aus Repostern.** Filtere Reposter nach `minFollowers`, `hasEmail` oder
  `bioContains`. Datensätze enthalten die E-Mails, Telefonnummern & Links, die
  jedes Profil veröffentlicht.
- **Alle Interaktionstypen in 1 Run.** Füge Post-URLs oder Post-IDs ein. Mische
  Antworten, Zitate, Reposter & Thread-Kontext.
- **Lege deine Datensatz-Limits fest.** Begrenze den Run mit `maxItems` & jeden
  Interaktionstyp eines Posts mit `maxItemsPerTarget`.
- **Interaktionsraten inklusive.** Nenne `engagementRate` oder
  `engagementPerView` in `fields`, um die Spalte hinzuzufügen.

### Vollständige Ergebnisse

- Jedes Ergebnis enthält die vollständigsten Daten, die X dafür hat.

### Genaue Datensätze

- Reposts enthalten den vollständigen Originaltext.
- Jede ID in einem Datensatz bleibt exakt.
- Erwähnungen, Links, Hashtags & Hervorhebungen sitzen an der richtigen Stelle
  im Text.
- Ein unbekannter Zähler steht in `unknownCounts` & erscheint nie als 0.
- Verifizierungs-Badges stimmen mit dem überein, was `x.com` zeigt.
- Datensätze enthalten nur öffentliche Daten.
- Zitat-Suchen liefern jedes echte Zitat & sonst nichts.
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
- Du siehst, wann jeder Account einen Post repostet hat.

### Qualitätsprüfungen

- Jedes Feld, das X zeigt, wird geliefert, bewusst weggelassen oder ist
  nachweislich nicht vorhanden.
- Xquik testet jeden Abruf live gegen X.

## Welche Daten kann X Engagement Scraper extrahieren?

- Direkte Antworten über die verfügbaren Ergebnisseiten.
- Direkte & verschachtelte Antworten in 4 Sortierreihenfolgen.
- Details zum Quellpost als wählbarer Datensatz.
- Zitate mit Text, Autoren, Medien & Kennzahlen.
- Profile der Reposter.
- Konversationskontext rund um jeden Quellpost.
- Zuordnung zu Quellpost & Interaktionstyp.

## So scrapst du Interaktionen mit X-Posts

Neu bei Apify?
[Erstelle zuerst einen kostenlosen Account](https://console.apify.com/sign-up?fpr=xquik).
Der kostenlose Plan braucht keine Kreditkarte & gibt dir jeden Monat $5 zum
Ausgeben. Bei $0.00015 pro Datensatz reichen $5 für bis zu 33.000 Datensätze,
vor Abzug der Plattformnutzung. Komm dann hierher zurück & klicke auf Try for
free.

1. Öffne X Engagement Scraper von Xquik in der Apify Console.
2. Füge Post-URLs in `startUrls` oder numerische Post-IDs in `tweetIds` ein.
3. Wähle `engagementTypes` & ergänze Filter wie `minLikes` oder `language`.
4. Setze `maxItems`, um die gelieferten Datensätze zu begrenzen, & klicke dann
   auf Start.
5. Lade das Dataset als JSON, CSV oder Excel herunter oder nutze die Apify-API.

`startUrls` akzeptiert jede URL als einfachen String oder als Objekt
`{ "url": "..." }`.

```json
{
  "startUrls": [
    "https://x.com/OpenAI/status/2082577277246972300",
    { "url": "https://x.com/jack/status/20" }
  ]
}
```

## Eingabe

```json
{
  "tweetIds": ["2082577277246972300"],
  "engagementTypes": ["replies", "quotes", "retweeters"],
  "maxItems": 10000
}
```

X zeigt seit 2024 nicht mehr, wer einen Post mit Gefällt mir markiert hat. Der
Typ `favoriters` liefert keine Datensätze. Ein Run ohne Datensätze nennt diesen
Grund in seiner Diagnose.

Standardmäßig erscheint jeder Account oder Post einmal pro Interaktionstyp, mit
1 Gebühr. Setze `dedupeAcrossTargets` auf `false`, um für jeden Quellpost einen
Datensatz zu behalten. Der Run-Status zählt die Duplikate, die er kostenlos
übersprungen hat.

Kleine Runs ohne Probleme überspringen `run-report` & sparen Apify-Nutzung.
Aktiviere `alwaysSaveRunRecords`, um ihn bei jedem Run zu schreiben.

### Von einem anderen Engagement-Actor wechseln

Der Actor liest diese Feldnamen anderer Engagement-Actors.

- `urls` entspricht `startUrls`.
- `category` entspricht `engagementTypes`. Der Actor liest `replies`,
  `retweets`, `info` & `checkRetweet` als `replies`, `retweeters`, `tweet` &
  `repostCheck`.
- `resultsPerCategory` entspricht `maxItemsPerTarget`.
- `retweetCheckUsername` entspricht `repostCheckUsers`.

Eine `category`, die die Aufgabe eines anderen Actors ist, etwa `followers` oder
`tweets`, stoppt den Run. Er liest & berechnet nichts. Die Meldung nennt den
Actor, den du nutzen sollst. Setzt du einen dieser Namen & sein kanonisches
Feld, gewinnt der kanonische Wert. Das Run-Log nennt das Feld, das verloren hat.

## Ausgabe

Jeder Datensatz setzt `resultType` auf `tweet`, `replies`, `completeReplies`,
`quotes`, `retweeters`, `favoriters`, `thread` oder `repostCheck`.
`sourceTarget` enthält die ID des Quellposts. Post- & Profilfelder folgen den
stabilen Antwortformaten der Xquik-REST-API.

`completeReplies` behält jeden gelieferten Datensatz. Der Run-Report zählt
unvollständige Abdeckung in `incompleteTargets`. Filter laufen vor der
Abrechnung.

Für Reposter & Liker gilt jeder Profilfilter, etwa `minFollowers`, `hasEmail` &
`bioContains`. Ihre Datensätze enthalten `email` & `contactInfo`, also die
E-Mails, Telefonnummern & Links, die jedes Profil veröffentlicht.

Die Beispiele nutzen Musterwerte. Die Ergebnisse spiegeln Live-Daten wider. Ein
Antwort-Datensatz sieht so aus.

```json
{
  "resultType": "replies",
  "sourceTarget": "2082577277246972300",
  "inReplyToId": "2082577277246972300",
  "username": "sample_user",
  "text": "Sample reply text",
  "likeCount": 12
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

Nenne eine berechnete Spalte in `fields` oder `renameFields`, um sie
hinzuzufügen.

| Spalte              | Formel                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------------ |
| `totalEngagement`   | `likeCount` + `replyCount` + `retweetCount` + `quoteCount`. Ein fehlender Zähler addiert 0 |
| `engagementRate`    | `totalEngagement` × 100 ÷ die `followers` des Autors, auf 4 Nachkommastellen               |
| `engagementPerView` | `totalEngagement` × 100 ÷ `viewCount`, auf 4 Nachkommastellen                              |

`totalEngagement` ist `null` bei einem Datensatz ohne diese Zähler. Eine Rate
ist `null`, wenn ihr Divisor fehlt oder 0 ist.

## Repost-Prüfung

Füge `repostCheck` zu `engagementTypes` hinzu & liste Accounts in
`repostCheckUsers`, um zu erfahren, ob jeder Account jeden Post repostet hat.

```json
{
  "tweetIds": ["2098439298617856319"],
  "engagementTypes": ["repostCheck"],
  "repostCheckUsers": ["discord", "nasa"]
}
```

Jede Prüfung ist 1 Datensatz mit `isRetweeted`, `retweetedAt`, `retweetId`,
`checkedPosts` & `complete`. Seine `id` ist `repostCheck:<post ID>:<account>`.
Die Prüfung liest die neuesten Posts jedes Accounts. Ein Repost, der älter ist
als diese Posts, erscheint als `false` mit `complete: false`.

Ein Run nur mit `repostCheck`- & `tweet`-Datensätzen behält deine
Eingabereihenfolge. Auf jeden Post folgen seine Accounts in der Reihenfolge, in
der du sie angegeben hast.

## Retweet-Zeitstempel

Setze `includeRetweetTimestamp` auf `true` für Ergebnisse vom Typ `retweeters`.
Die Spalte `retweetedAt` enthält den beobachteten Zeitpunkt des Retweets in UTC.

X Engagement Scraper von Xquik findet den Zeitpunkt des Retweets, solange X
diesen Retweet noch zeigt. Bei älteren, gelöschten oder nicht verfügbaren
Retweets bleibt der Zeitstempel `null`. Das Profil bleibt in der Ausgabe. Ein
`null`-Wert beweist nicht, dass ein Account einen Post nie retweetet hat.

Diese Option macht Runs langsamer. Lass sie aus, wenn du nur Profile brauchst.
`createdAt` im Profil bleibt das Erstellungsdatum des Accounts. Post-Datensätze
enthalten `retweetedAt`, wenn sie ein Retweet-Ereignis enthalten. Das
Originaldatum des Posts & die Scrape-Zeit ersetzen nie den Zeitpunkt des
Retweets. Ergebnispreise & die Abrechnung pro geliefertem Datensatz bleiben
gleich.

## Was kostet es, Interaktionen mit X-Posts zu scrapen?

Auf jedem Apify-Plan kostet ein gelieferter Datensatz $0.00015. Apify berechnet
deine Plattformnutzung separat.

Brauchst du mehr Volumen, dann
[wähle einen Apify-Plan](https://apify.com/pricing?fpr=xquik) mit mehr
vorausbezahlter Nutzung.

- 1 Gebühr pro geliefertem Datensatz. Diagnosen in `diagnostics` sind kostenlos.
- Keine Gebühr für Start, Post, Interaktionstyp oder Seite.
- Die Deduplizierung läuft vor der Abrechnung.

## Limits & Wiederherstellung

X Engagement Scraper von Xquik liest viele Posts & Interaktionstypen in 1 Run.
Gelieferte Datensätze & Fortschritt überstehen einen Apify-Neustart. Der Actor
setzt kein eigenes Zeitlimit.

Eine unterbrochene Extraktion schreibt eine kostenlose `partial`-Diagnose.
Verfügbare Ergebnisse bleiben erhalten. Lies `availableResults`,
`failedTargets`, `retryable` & `nextAction`, bevor du es erneut versuchst. Ein
erfolgreicher Actor-Abschluss bestätigt die Lieferung, nicht die vollständige
Extraktion.

Der Run-Status nennt jede Ursache für einen vorzeitigen Stopp. `stopCauses`
listet jede Ursache mit eigenen Feldern `message`, `retryable` & `nextAction`.
Die Ursachen sind `target_not_found`, `target_failed`,
`pagination_safety_limit`, `reply_reach` & `deadline_reached`. `reply_reach`
bedeutet, dass X nur einen Teil eines Antwort-Threads geliefert hat. Ein
fehlendes Ziel kommt nur auf die Liste, wenn eine andere Ursache den Run
gestoppt hat. Der Run ist `retryable`, wenn mindestens 1 Ursache es ist.

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

Nein. X Engagement Scraper von Xquik braucht weder einen X-API-Schlüssel noch
einen Login oder Zugangsdaten.

### Ist es legal, Interaktionsdaten von X zu scrapen?

X Engagement Scraper von Xquik fragt öffentliche X-Felder ab. Ergebnisse können
personenbezogene Daten enthalten. Prüfe, ob dein Zweck rechtmäßig ist, & befolge
geltende Datenschutzregeln. Hol dir bei Unsicherheit qualifizierten Rechtsrat.

### Warum hat mein Run keine Ergebnisse geliefert?

Lies zuerst den Run-Status. Der Status eines leeren Runs rät dir, Ziele & Filter
zu prüfen. Die kostenlose Ausgabe `diagnostics` erscheint, wenn etwas deine
Aufmerksamkeit braucht. Ihr Feld `stopCauses` gibt jeder Ursache eine
`nextAction`, der du folgen kannst. Der Run listet jede Eingabe, die er nicht
lesen kann, & sagt, wie du sie korrigierst. X zeigt seit 2024 nicht mehr, wer
einen Post mit Gefällt mir markiert hat, also liefert `favoriters` keine
Datensätze.

### Kann ich die API, Zeitpläne & Integrationen nutzen?

Ja. Wähle aus 50 öffentlichen Tasks oder nutze die REST-API von Xquik. Im
[API-Tab](https://apify.com/xquik/x-engagement-scraper/api) findest du Beispiele
für Python, JavaScript & cURL.
[Zeitpläne](https://docs.apify.com/platform/schedules) von Apify starten X
Engagement Scraper von Xquik per Cron. Agents nutzen
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Nutze `latest`,
außer du brauchst einen älteren Build.

### Wo bekomme ich Hilfe?

Öffne im [Tab Issues](https://apify.com/xquik/x-engagement-scraper/issues) ein
Issue mit der Run-ID. Kostenlose Diagnosen im Key-Value-Store erklären Runs, die
Aufmerksamkeit brauchen. Ein Run, der keinen Datensatz zurückbekommt, sagt in
seinem Status, warum.

### Kann ich eine individuelle Lösung bekommen?

Ja. Beschreibe im
[Tab Issues](https://apify.com/xquik/x-engagement-scraper/issues), was du
brauchst. Xquik bietet außerdem ein Dashboard, eine REST-API, einen MCP-Server &
Webhooks. Die Website von Xquik findest du in seinem
[Apify-Profil](https://apify.com/xquik).
