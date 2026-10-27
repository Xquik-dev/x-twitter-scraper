[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
**Deutsch** · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer verbindet Xquik MCP mit Coding-Agents](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Sieh dir an, wie Framer Xquik-Scraper nutzt](https://youtu.be/4UOSpoOoC3Y?t=367),
mit Claude Code, Codex, Cursor & mehr, ab Minute 6:07.

Xquik ist weltweit der schnellste & günstigste Scraper-Dienst für X (Twitter) &
liefert die vollständigsten X-Daten. X Quote Tweets Scraper von Xquik sammelt
die Posts, die öffentliche X-Posts zitieren, ohne X-Cookies oder Login. Die
meisten anderen Apify Actors rechnen ab, bevor sie filtern oder Duplikate
entfernen. Xquik rechnet nur gelieferte, eindeutige Ergebnisse ab, die zu deinen
Filtern passen.

Füge Post-URLs oder Post-IDs ein & erhalte in 1 Run für jeden Post jedes Zitat,
das X bereitstellt. Jeder Datensatz enthält das Zitat, das vollständige
öffentliche Profil seines Autors & den zitierten Post. Du zahlst **$0.00015 pro
geliefertem Datensatz** & Apify berechnet die Plattformnutzung separat.

> Xquik ist ein unabhängiger Drittanbieter-Dienst. Nicht verbunden mit X Corp.
> "Twitter" und "X" sind Marken von X Corp.

## Zitat-Daten in jedem Datensatz

- Der vollständige Text des Zitats, sein Link, seine Sprache & seine
  Veröffentlichungszeit.
- Gefällt-mir-Angaben, Antworten, Reposts, Zitate, Aufrufe & Lesezeichen.
- Das vollständige öffentliche Profil des Autors mit Name, Bio, Followern,
  Verifizierung & mehr.
- Fotos, Videos & GIFs mit ihren Links.
- Hashtags, Erwähnungen & Links aus dem Text.
- Der zitierte Post selbst, in derselben Struktur.
- `sourceTarget`, der Post aus der Eingabe, den der Datensatz zitiert.
- `position`, der Platz des Datensatzes im Run, & `scrapedAt`, sein
  Lieferzeitpunkt.
- Viele Posts in 1 Run, jeder gelesen bis zum Ende dessen, was X bereitstellt.
- Die neuesten zuerst oder die Zitate, die X am höchsten einstuft.
- 11 Filter für Sprache, Datumsangaben, Medientyp, 6 Mindestwerte & verifizierte
  Autoren.
- 1 Datensatz pro Autor, wenn du Personen statt Posts brauchst.
- Post-URLs von `x.com` & `twitter.com` oder numerische Post-IDs.
- Duplikatentfernung vor der Abrechnung.
- Exporte als JSON, CSV, Excel, XML & RSS über Apify-Datasets.
- Runs laufen nach einer Apify-Migration mit gespeichertem Zustand weiter.

## So scrapst du Zitat-Posts

Neu bei Apify?
[Erstelle zuerst einen kostenlosen Account](https://console.apify.com/sign-up?fpr=xquik).
Der kostenlose Plan braucht keine Kreditkarte & gibt dir jeden Monat $5 zum
Ausgeben. Bei $0.00015 pro Post reichen $5 für bis zu 33.000 Posts, vor Abzug
der Plattformnutzung. Komm dann hierher zurück & klicke auf Try for free.

1. Öffne X Quote Tweets Scraper von Xquik in der Apify Console.
2. Füge Post-URLs in `startUrls` oder Post-IDs in `tweetIds` ein.
3. Setze `maxItems`, um die gelieferten Datensätze zu begrenzen, & klicke dann
   auf Start.
4. Lade das Dataset als JSON, CSV oder Excel herunter oder nutze die Apify-API.

Du gibst in keinem Schritt X-Cookies, einen Login oder einen API-Schlüssel ein.
Du nimmst keinen Seiten-Cursor von einem Run in den nächsten mit.

## Eingabe

`startUrls` nimmt jede Post-URL als einfachen String oder als Objekt
`{ "url": "..." }`. `tweetIds` nimmt Post-IDs & dort funktioniert auch eine
Post-URL.

```json
{
  "startUrls": [
    "https://x.com/OpenAI/status/2082577277246972300",
    { "url": "https://twitter.com/jack/status/20" }
  ],
  "tweetIds": ["2082201573976056245"],
  "maxItems": 1000
}
```

Sortierung, Filter & Obergrenzen stehen neben den Posts.

```json
{
  "tweetIds": ["2082577277246972300"],
  "sort": "top",
  "language": "en",
  "minLikes": 10,
  "sinceDate": "2026-10-01",
  "maxItemsPerTarget": 200,
  "uniqueAuthors": true
}
```

- `sort` ist `latest` für die neuesten Zitate zuerst oder `top` für die Zitate,
  die X am höchsten einstuft.
- `includeReplies` behält Antworten, die den Post zitieren, so wie die
  Zitate-Ansicht von X sie auflistet. Die Option ist an, solange du sie nicht
  ausschaltest.
- `uniqueAuthors` behält von jedem Autor das erste Zitat des Runs. Das Dataset
  enthält dann 1 Datensatz pro Autor, nicht pro Zitat. Du zahlst für die
  gelieferten Datensätze.
- `maxItems` begrenzt den ganzen Run & `maxItemsPerTarget` begrenzt jeden Post.
- Die Filter sind `language`, `sinceDate`, `untilDate`, `mediaType`, `minLikes`,
  `minReplies`, `minRetweets`, `minQuotes`, `minViews`, `minBookmarks` &
  `verifiedOnly`.

Nennt die Eingabe einen Post doppelt, liest der Run ihn nur einmal. `tweetUrls`,
`tweetId`, `tweets` & `tweet_id` funktionieren als andere Namen für die Posts.
Kleine Runs ohne Probleme überspringen `run-report` & sparen Apify-Nutzung.
Aktiviere `alwaysSaveRunRecords`, um ihn bei jedem Run zu schreiben.

## Ausgabe

Jedes Zitat ist 1 Datensatz im Dataset mit `id`, `url`, `text`, `createdAt`,
`lang`, `likeCount`, `replyCount`, `retweetCount`, `quoteCount`, `viewCount`,
`bookmarkCount`, `media`, `entities`, `author`, `quotedTweetId` &
`quoted_tweet`. Der Actor ergänzt `sourceTarget`, `position`, `scrapedAt` &
`resultType`. Fehlende Quellfelder bleiben weg. X Quote Tweets Scraper von Xquik
erfindet keine Werte.

Die Beispiele nutzen Musterwerte. Die Ergebnisse spiegeln Live-Daten wider. Ein
Datensatz sieht so aus.

```json
{
  "id": "1900000000000000001",
  "url": "https://x.com/sample_user/status/1900000000000000001",
  "text": "Worth a read. The second chart says it all.",
  "createdAt": "2026-10-11T09:00:00.000Z",
  "lang": "en",
  "likeCount": 42,
  "replyCount": 3,
  "retweetCount": 5,
  "quoteCount": 1,
  "viewCount": 1800,
  "bookmarkCount": 2,
  "author": {
    "id": "1234567890",
    "username": "sample_user",
    "name": "Sample User",
    "followers": 1200,
    "verified": true
  },
  "quotedTweetId": "1900000000000000000",
  "quoted_tweet": {
    "id": "1900000000000000000",
    "text": "Our new report is out."
  },
  "resultType": "quotes",
  "sourceTarget": "1900000000000000000",
  "position": 1,
  "scrapedAt": "2026-10-12T09:00:00.000Z"
}
```

`position` zählt gelieferte Datensätze ab 1, nach Filtern & Deduplizierung. Das
Dataset hat 2 Tabellenansichten. "Quote Tweets" zeigt jedes Zitat mit seinen
Zählern. "Quote Authors" zeigt, wer jeden Post zitiert hat, mit den
Profilfeldern des Autors als Spalten.

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

## Was X bereitstellt

2 Grenzen kommen von X & X Quote Tweets Scraper von Xquik nennt sie offen.

- Bei einem Post mit vielen Zitaten kann die X-Suche vor den ältesten stoppen.
  Ein Run liest jedes Zitat, das X bereitstellt, & stoppt dort.
- `top` ist das Ranking von X, nicht das von Xquik. Es ist keine Reihenfolge
  nach Gefällt-mir-Angaben. Ein späterer Datensatz kann mehr Gefällt-mir-Angaben
  haben als ein früherer.

## Was kostet es, Zitat-Posts zu scrapen?

Auf jedem Apify-Plan kostet ein gelieferter Datensatz $0.00015. Apify berechnet
deine Plattformnutzung separat.

Brauchst du mehr Volumen, dann
[wähle einen Apify-Plan](https://apify.com/pricing?fpr=xquik) mit mehr
vorausbezahlter Nutzung.

- 1 Gebühr pro geliefertem Datensatz. Diagnosen in `diagnostics` sind kostenlos.
- Keine Startgebühr.
- Ein Post, den es auf X nicht gibt, erzeugt keinen Datensatz & keine Gebühr.
- Filter & `uniqueAuthors` laufen vor der Abrechnung, also kostet ein
  verworfenes Zitat nichts.
- Die Deduplizierung läuft vor der Abrechnung.
- Die Apify-Einstellungen für die maximale Gesamtgebühr begrenzen die
  gelieferten Datensätze.

## Limits & Wiederherstellung

X Quote Tweets Scraper von Xquik liest viele Posts in 1 Run. Gelieferte
Datensätze & Fortschritt überstehen einen Apify-Neustart. Der Actor setzt kein
eigenes Zeitlimit. Er hält jedes Apify-Timeout ein, das du setzt.

Der Run-Status nennt die Posts, für die X keinen Treffer hat, & rät dir, URL
oder ID zu prüfen. Eine unterbrochene Extraktion schreibt eine kostenlose
`partial`-Diagnose. Verfügbare Ergebnisse bleiben erhalten. Lies
`availableResults`, `failedTargets`, `retryable` & `nextAction`, bevor du es
erneut versuchst. Ein erfolgreicher Actor-Abschluss bestätigt die Lieferung,
nicht die vollständige Extraktion.

Der Run-Status nennt jede Ursache für einen vorzeitigen Stopp. `stopCauses`
listet jede Ursache mit eigenen Feldern `message`, `retryable` & `nextAction`.
Der Run ist `retryable`, wenn mindestens 1 Ursache es ist.

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

Nein. X Quote Tweets Scraper von Xquik braucht weder X-Cookies noch einen
API-Schlüssel, einen Login oder Zugangsdaten. Jeder Abruf läuft auf der
Infrastruktur von Xquik.

### Kann ich die Zitate vieler Posts in 1 Run scrapen?

Ja. Füge so viele Post-URLs oder Post-IDs ein, wie du brauchst. `sourceTarget`
sagt in jedem Datensatz, welchen Post er zitiert.

### Wie viele Zitate kann 1 Run liefern?

Ein Run kann 100.000 Datensätze & mehr liefern. Erhöhe `maxItems` für einen
vollständigen Export über die 1.000, mit denen das Formular startet.

### Warum liefert ein Post mit vielen Zitaten weniger, als sein Zähler zeigt?

Bei einem Post mit vielen Zitaten kann die X-Suche vor den ältesten stoppen. Der
Run liefert jedes Zitat, das X bereitstellt. Der Zähler enthält auch Zitate von
privaten oder entfernten Accounts.

### Wie bekomme ich 1 Datensatz pro Person, die einen Post zitiert hat?

Aktiviere `uniqueAuthors`. Der Run behält das erste Zitat jedes Autors &
überspringt seine späteren ohne Gebühr.

### Ist es legal, Zitat-Posts zu scrapen?

X Quote Tweets Scraper von Xquik fragt öffentliche X-Posts ab. Ergebnisse können
personenbezogene Daten enthalten. Prüfe, ob dein Zweck rechtmäßig ist, & befolge
geltende Datenschutzregeln. Hol dir bei Unsicherheit qualifizierten Rechtsrat.

### Warum hat mein Run keine Ergebnisse geliefert?

Lies zuerst den Run-Status. Der Status eines leeren Runs sagt, ob X für einen
Post keinen Treffer hat oder ob der Post keine Zitate hat, die zu deinen Filtern
passen. Die kostenlose Ausgabe `diagnostics` erscheint, wenn etwas deine
Aufmerksamkeit braucht. Ihr Feld `stopCauses` gibt jeder Ursache eine
`nextAction`, der du folgen kannst.

### Kann ich die API, Zeitpläne & Integrationen nutzen?

Ja. Nutze die Apify-API oder die REST-API von Xquik. Im
[API-Tab](https://apify.com/xquik/x-quote-tweets-scraper/api) findest du
Beispiele für Python, JavaScript & cURL.
[Zeitpläne](https://docs.apify.com/platform/schedules) von Apify starten X Quote
Tweets Scraper von Xquik per Cron. Agents nutzen
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Nutze `latest`,
außer du brauchst einen älteren Build.

### Wo bekomme ich Hilfe?

Öffne im [Tab Issues](https://apify.com/xquik/x-quote-tweets-scraper/issues) ein
Issue mit der Run-ID. Kostenlose Diagnosen im Key-Value-Store erklären Runs, die
Aufmerksamkeit brauchen. Ein Run, der keinen Datensatz zurückbekommt, sagt in
seinem Status, warum.

### Kann ich eine individuelle Lösung bekommen?

Ja. Beschreibe im
[Tab Issues](https://apify.com/xquik/x-quote-tweets-scraper/issues), was du
brauchst. Xquik bietet außerdem ein Dashboard, eine REST-API, einen MCP-Server &
Webhooks. Die Website von Xquik findest du in seinem
[Apify-Profil](https://apify.com/xquik).
