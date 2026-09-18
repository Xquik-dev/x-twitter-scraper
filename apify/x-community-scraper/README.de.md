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
den umfassendsten X-Daten, und X Community Scraper sammelt Community-Infos,
Beiträge, Suchen, Mitglieder & Moderatoren. Jeder andere Apify Actor berechnet,
bevor gefiltert oder dedupliziert wird. Xquik berechnet nur für gelieferte,
eindeutige, filterkonforme Ergebnisse.

Sammle Twitter-Community-Infos, Beiträge, Stichwort-Treffer, Mitglieder und
Moderatoren aus Community-URLs oder -IDs. Mische Ressourcen und Communities in
einem Run. Kein X-API-Schlüssel oder Login erforderlich.

## Community-Daten und Filter

- Community-Metadaten und -Regeln, sofern X sie offenlegt.
- Neueste Community-Beiträge.
- Stichwortsuche mit Sortierung nach Neueste oder Top.
- Community-Mitglieder und -Moderatoren.
- Filter für Beiträge, Mitglieder und Moderatoren laufen vor der Abrechnung.
- Mehrere Communities und Ressourcen pro Run.
- Obergrenzen pro Ressource und global.
- Gleichzeitige Lesevorgänge mit gespeicherter Cursor-Wiederherstellung.
- Doppelte Datensätze werden vor der Abrechnung entfernt.

## Eingabe

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["info", "tweets", "members", "moderators"],
  "maxItems": 10000
}
```

Für die Stichwortsuche füge `"search"` zu `resources` hinzu und gib `query`
an.

## Ausgabe

Datensätze nutzen `community`, `communityTweet`, `communityMember` oder
`communityModerator` als `resultType`. Jeder Datensatz enthält `sourceTarget`
für die eingegebene Community. Quellfelder bleiben unverändert, ohne
erfundene Werte.

## Preise

Auf jedem Apify-Plan kostet es **$0.00015 pro geliefertem Datensatz**. Apify
berechnet deine Plattformnutzung separat.

- Eine Gebühr pro geliefertem Datensatz. Diagnosen in `diagnostics` sind
  kostenlos.
- Keine Start-, Community-, Ressourcen- oder Suchgebühr.
- Die Deduplizierung läuft vor der Abrechnung.

Verwende `latest`, außer du brauchst einen älteren Build. Wähle aus 50
öffentlichen Tasks oder 129 Xquik-REST-Operationen. Beispiele nutzen
Beispielwerte. Ergebnisse spiegeln Live-Daten.

## Paginierung und Wiederherstellung

Unabhängige Community-Ressourcen laufen gleichzeitig. Die Paginierung bleibt
innerhalb jeder Cursor-Linie geordnet. Akzeptierte Datensätze, Abrechnungs-
status, Cursor und Ausgabe-Fingerprints überstehen eine Apify-Migration. Der
Actor hat kein eigenes Zeitlimit.

Es können nur öffentliche Communities zurückgegeben werden, die X offenlegt.
Die verfügbaren Felder variieren je nach Community.

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
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): Scrapt
  Antworten, Zitate, Retweeter, Liker & Threads zu Beitrags-URLs oder -IDs in
  großen Mengen. Nutze ihn, wenn du misst, wer mit Beiträgen interagiert hat.
  Ab $0.00015 pro Datensatz.
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
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  Verfolgt Markenerwähnungen mit KI-Relevanz, Sentiment & Antworten zur
  Kundenerfahrung & vergleicht Runs. Nutze ihn, wenn du eine Marke über Zeit
  beobachtest. Ab $0.0003 pro analysiertem Tweet.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  Kennzeichnet Haltung, Intensität & Sarkasmus-Wahrscheinlichkeit für jeden
  Tweet mit KI. Nutze ihn, wenn du allgemeines Sentiment zu einem Thema
  brauchst. Ab $0.0003 pro analysiertem Tweet.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  Kennzeichnet bullische, bärische, neutrale oder gemischte Haltung,
  Inhaltstyp, Überzeugungsgrad & Asset-Relevanz mit KI. Nutze ihn, wenn du
  Aktien, Krypto oder Trading-Talk verfolgst. Ab $0.0003 pro analysiertem
  Tweet.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  Kennzeichnet News-Beiträge nach Format, Quellenangabe & Themenrelevanz mit
  KI. Nutze ihn, wenn du Berichterstattung von Kommentaren trennst. Ab
  $0.0003 pro analysiertem Tweet.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  Beantwortet deine eigenen Kategorie-, Score- & Ja/Nein-Fragen für jeden
  Tweet mit KI. Nutze ihn, wenn die vorgefertigten Analysen nicht zu deinen
  Labels passen. Ab $0.0003 pro analysiertem Tweet.
