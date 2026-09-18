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
den umfassendsten X-Daten, und X Engagement Scraper sammelt Antworten,
Zitate, Retweeter, Liker & Threads zu jedem Beitrag. Jeder andere Apify Actor
berechnet, bevor gefiltert oder dedupliziert wird. Xquik berechnet nur für
gelieferte, eindeutige, filterkonforme Ergebnisse.

Sammle Twitter-Interaktionsdaten für einen oder mehrere X-Beiträge: Antworten,
Zitate, Retweeter, Liker und Thread-Kontext. Kein X-API-Schlüssel oder Login
erforderlich.

## Antworten, Zitate und Profile

- Beitrags-URLs und numerische Tweet-IDs.
- Direkte Antworten über alle verfügbaren Ergebnisseiten hinweg.
- Direkte und verschachtelte Antworten in 4 Sortierreihenfolgen.
- Details zum Quellbeitrag als auswählbarer Datensatz.
- Zitatbeiträge mit Text, Autoren, Medien und Kennzahlen.
- Retweeter- und Liker-Profile.
- Konversationskontext rund um jeden Quellbeitrag.
- Mehrere Interaktionstypen und Beiträge pro Run.
- Globale und ressourcenbezogene Obergrenzen.
- Zuordnung von Quellbeitrag und Interaktionstyp.
- Gleichzeitige Ressourcen mit gespeicherter Cursor-Wiederherstellung.

## Eingabe

```json
{
  "tweetIds": ["2082577277246972300"],
  "engagementTypes": ["replies", "quotes", "retweeters", "favoriters"],
  "maxItems": 10000
}
```

Lass `dedupeAcrossTargets` deaktiviert, um jede Quelle-Interaktionstyp-
Kombination zu behalten. Schalte es ein, um im gesamten Run einen Datensatz
pro Account zu behalten.

## Ausgabe

Datensätze nutzen `tweet`, `replies`, `completeReplies`, `quotes`,
`retweeters`, `favoriters` oder `thread` als `resultType`. `sourceTarget`
identifiziert die Quell-Tweet-ID. Tweet- und Profilfelder folgen den stabilen
Xquik-REST-Antwortformen.

`completeReplies` erhält jeden zurückgegebenen Datensatz. Der Run-Report
zählt `incompleteTargets` für teilweise Abdeckung. Filter laufen vor der
Actor-Abrechnung.

## Retweet-Zeitstempel

Setze `includeRetweetTimestamp` auf `true` für `retweeters`-Ergebnisse. Die
Spalte `retweetedAt` enthält den beobachteten Repost-Zeitpunkt in UTC.

Jede Abfrage prüft die neueste verfügbare Profilseite des Retweeters. Sie
gleicht den Account und den Quellbeitrag mit tatsächlichen Repost-Datensätzen
ab. Ältere, gelöschte oder nicht verfügbare Repost-Datensätze können den
Zeitstempel `null` lassen. Auch fehlgeschlagene Zeitstempel-Abfragen lassen
`null`; das Profil bleibt enthalten. Die Abfrage beweist nicht, dass ein
Account einen Beitrag nie reposted hat.

Zusätzliche Lesevorgänge erhöhen die Latenz. Lass diese Option für reine
Profilergebnisse deaktiviert. `createdAt` im Profil bleibt das
Erstellungsdatum des Accounts. Tweet-Datensätze führen `retweetedAt`, wenn
sie ein Repost-Ereignis enthalten. Ursprüngliche Beitragsdaten und
Scrape-Zeiten ersetzen niemals Repost-Zeiten. Ergebnispreise und die
Abrechnung gelieferter Datensätze bleiben unverändert.

## Preise

Auf jedem Apify-Plan kostet es **$0.00015 pro geliefertem Datensatz**. Apify
berechnet deine Plattformnutzung separat.

- Eine Gebühr pro geliefertem Datensatz. Diagnosen in `diagnostics` sind
  kostenlos.
- Keine Start-, Beitrags-, Interaktionstyp- oder Seitengebühr.
- Die Deduplizierung läuft vor der Abrechnung.

Verwende `latest`, außer du brauchst einen älteren Build. Wähle aus 50
öffentlichen Tasks oder 129 Xquik-REST-Operationen. Beispiele nutzen
Beispielwerte. Ergebnisse spiegeln Live-Daten.

## Wiederherstellung und Grenzen

Unabhängige Beitrags-Ressourcen-Paare laufen gleichzeitig. Die Cursor-Linie
bleibt geordnet. Akzeptierte Datensätze, Abrechnungsstatus, Cursor und
Fingerprints überstehen eine Apify-Migration. Der Actor hat kein eigenes
Zeitlimit.

## Unvollständige Extraktion

Eine unterbrochene Extraktion schreibt eine kostenlose `partial`-Diagnose.
Verfügbare Ergebnisse bleiben erhalten. Lies `availableResults`,
`failedTargets`, `retryable` und `nextAction`, bevor du es erneut versuchst.
Ein erfolgreicher Actor-Abschluss bestätigt die Lieferung, nicht die
vollständige Extraktion.

Xquik ist ein unabhängiger Drittanbieter-Dienst. Nicht verbunden mit X Corp.
„Twitter" und „X" sind Marken von X Corp.

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
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): Scrapt
  Follower, Gefolgte, Listenmitglieder, Abonnenten & Community-Mitglieder als
  Profil-Datensätze. Nutze ihn, wenn du Zielgruppen- oder Mitgliederlisten
  brauchst. Ab $0.00015 pro Profil.
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
