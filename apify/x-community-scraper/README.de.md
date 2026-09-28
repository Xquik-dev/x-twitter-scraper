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
Community-Infos, Posts, Suchergebnisse, Mitglieder & Moderatoren. Die meisten
anderen Apify Actors rechnen ab, bevor sie filtern oder Duplikate entfernen.
Xquik rechnet nur gelieferte, eindeutige Ergebnisse ab, die zu deinen Filtern
passen.

Sammle Infos, Posts (Tweets), Stichwort-Treffer, Mitglieder & Moderatoren von
Communities auf X (Twitter) aus Community-URLs oder -IDs. Du zahlst **$0.00015
pro geliefertem Datensatz**, & Apify berechnet die Plattformnutzung separat. Du
brauchst keinen X-API-Schlüssel & keinen Login.

> Xquik ist ein unabhängiger Drittanbieter-Dienst. Nicht verbunden mit X Corp.
> "Twitter" und "X" sind Marken von X Corp.

## Community-Daten & Filter

- Metadaten & Regeln der Community, wenn X sie zeigt.
- Neueste Posts der Community.
- Stichwortsuche mit Sortierung nach Neueste oder Top.
- Mitglieder & Moderatoren der Community.
- Filter für Posts, Mitglieder & Moderatoren, die vor der Abrechnung laufen.
- Viele Communities & Ressourcen in 1 Run.
- Eine globale Obergrenze & eine Obergrenze pro Ressource.
- Runs laufen nach einem Apify-Neustart weiter.
- Duplikatentfernung vor der Abrechnung.

## So scrapst du X-Communities

1. Öffne X Community Scraper von Xquik in der Apify Console.
2. Füge Community-URLs in `startUrls` oder IDs in `communityIds` ein.
3. Wähle `resources` & ergänze Filter wie `sinceDate` oder `minLikes`.
4. Setze `maxItems`, um die gelieferten Datensätze zu begrenzen. Klicke dann
   auf Start.
5. Lade das Dataset als JSON, CSV oder Excel herunter oder nutze die Apify-API.

## Eingabe

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["info", "tweets", "members", "moderators"],
  "maxItems": 10000
}
```

Für die Stichwortsuche füge `"search"` zu `resources` hinzu & setze `query`.

Kleine Runs ohne Probleme überspringen `run-report` & sparen Apify-Nutzung.
Aktiviere `alwaysSaveRunRecords`, um ihn bei jedem Run zu schreiben.

## Ausgabe

Jeder Datensatz setzt `resultType` auf `community`, `communityTweet`,
`communityMember` oder `communityModerator`. Jeder Datensatz enthält
`sourceTarget` für die eingegebene Community. X Community Scraper von Xquik
behält die Quellfelder & erfindet keine Werte.

Die Beispiele zeigen Musterwerte. Echte Ergebnisse enthalten Live-Daten. Ein
Datensatz mit Community-Infos sieht so aus:

```json
{
  "resultType": "community",
  "sourceTarget": "1493446837214187523",
  "name": "Sample Community",
  "member_count": 1200,
  "moderator_count": 4
}
```

## Was kostet es, X-Communities zu scrapen?

Auf jedem Apify-Plan kostet ein gelieferter Datensatz $0.00015. Apify berechnet
deine Plattformnutzung separat.

- Eine Gebühr pro geliefertem Datensatz. Diagnosen in `diagnostics` sind
  kostenlos.
- Keine Gebühr für Start, Communities, Ressourcen oder Suchanfragen.
- Die Deduplizierung läuft vor der Abrechnung.

## Limits & Wiederherstellung

X Community Scraper von Xquik liest viele Communities & Ressourcen in 1 Run.
Gelieferte Datensätze & Fortschritt überstehen einen Apify-Neustart. Der Actor
setzt kein eigenes Zeitlimit. Er liefert nur öffentliche Communities, die X
zeigt. Die verfügbaren Felder variieren je nach Community.

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
  Exporten. Nutze ihn, wenn du Post-Daten ohne Analyse brauchst. Ab $0.00015
  pro Datensatz.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): Scrapt
  Profile samt Posts, Antworten, Medien & Followern anhand von Nutzernamen, IDs
  oder URLs. Nutze ihn, wenn du von Accounts statt von Suchen ausgehst. Ab
  $0.00015 pro Datensatz.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): Scrapt
  Antworten, Kommentare & ganze Konversationen unter Posts mit über 25 Filtern.
  Nutze ihn, wenn du die Diskussion unter Posts brauchst. Ab $0.00015 pro
  Datensatz.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): Scrapt
  Antworten, Zitate, Reposter & Threads zu Post-URLs oder -IDs in großen
  Mengen. Nutze ihn, wenn du misst, wer mit Posts interagiert hat. Ab $0.00015
  pro Datensatz.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): Scrapt
  Follower, gefolgte Accounts, Listenmitglieder, Abonnenten &
  Community-Mitglieder als Profil-Datensätze. Nutze ihn, wenn du Zielgruppen-
  oder Mitgliederlisten brauchst. Ab $0.00015 pro Profil.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper):
  Sucht Nutzer nach Nutzername, Bio & Standort mit Filtern für Follower,
  Verifizierung, Account-Alter & Standort. Nutze ihn, wenn du Account-Listen
  aus einer Suche aufbaust. Ab $0.00015 pro Profil.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): Scrapt Posts,
  Mitglieder & Follower von Listen aus Listen-URLs oder -IDs. Nutze ihn, wenn
  eine kuratierte Liste deine Quellen festlegt. Ab $0.00015 pro Datensatz.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): Scrapt
  Echtzeit-Trends nach Standort mit Rang, Volumen, Suchbegriff & WOEID. Nutze
  ihn, wenn du verfolgst, was wo gerade angesagt ist. Ab $0.00015 pro Trend.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): Scrapt
  lange X-Artikel als Markdown & Text mit Titelbildern, Autoren, Daten &
  Kennzahlen. Nutze ihn, wenn du Artikeltexte statt Posts brauchst. Ab
  $0.00015 pro Artikel.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader):
  Extrahiert oder speichert Fotos, Videos & GIFs aus Posts oder Profilen mit
  MP4- & Metadaten-Optionen. Nutze ihn, wenn du die Mediendateien selbst
  brauchst. Ab $0.00015 pro Medien-Datensatz.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  Verfolgt Markenerwähnungen mit KI-Relevanz, Sentiment & Antworten zur
  Kundenerfahrung & vergleicht Runs. Nutze ihn, wenn du eine Marke über längere
  Zeit beobachtest. Ab $0.0003 pro analysiertem Post.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  Kennzeichnet Haltung, Intensität & Sarkasmus-Wahrscheinlichkeit für jeden
  Post mit KI. Nutze ihn, wenn du allgemeines Sentiment zu einem Thema
  brauchst. Ab $0.0003 pro analysiertem Post.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  Kennzeichnet bullische, bärische, neutrale oder gemischte Haltung,
  Inhaltstyp, Überzeugungsgrad & Asset-Relevanz mit KI. Nutze ihn, wenn du
  Aktien, Krypto oder Trading-Talk verfolgst. Ab $0.0003 pro analysiertem Post.
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

### Brauche ich einen X-API-Schlüssel oder Login?

Nein. X Community Scraper von Xquik braucht keinen X-API-Schlüssel, keinen
Login & keine Zugangsdaten.

### Ist es legal, X-Communities zu scrapen?

X Community Scraper von Xquik fragt öffentliche X-Felder ab. Ergebnisse können
personenbezogene Daten enthalten. Prüfe, ob dein Zweck rechtmäßig ist. Befolge
geltende Datenschutzregeln. Hol dir bei Unsicherheit qualifizierten Rechtsrat.

### Warum hat mein Run keine Ergebnisse geliefert?

Öffne zuerst die kostenlose Ausgabe `diagnostics`. Der Status eines leeren Runs
rät dir, Ziele & Filter zu prüfen. `stopCauses` gibt jeder Ursache eine
`nextAction`, der du folgen kannst. Der Run listet jede Eingabe, die er nicht
lesen kann, & sagt, wie du sie korrigierst. X Community Scraper von Xquik
liefert nur öffentliche Communities, die X zeigt.

### Kann ich API, Zeitpläne & Integrationen nutzen?

Ja. Wähle aus 50 öffentlichen Tasks oder 129 REST-Operationen von Xquik. Der
[API-Tab](https://apify.com/xquik/x-community-scraper/api) enthält Beispiele
für Python, JavaScript & cURL.
Apify-[Zeitpläne](https://docs.apify.com/platform/schedules) starten
X Community Scraper von Xquik per Cron. Agents nutzen
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
