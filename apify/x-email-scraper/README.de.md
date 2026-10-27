[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
**Deutsch** · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer verbindet Xquik MCP mit Coding-Agents](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Sieh dir an, wie Framer Xquik-Scraper nutzt](https://youtu.be/4UOSpoOoC3Y?t=367),
mit Claude Code, Codex, Cursor & mehr, ab Minute 6:07.

Xquik ist weltweit der schnellste & günstigste Scraper-Dienst für X (Twitter) &
liefert die vollständigsten X-Daten. X Email Scraper von Xquik holt die E-Mails,
die Accounts in ihren eigenen X-Profilen veröffentlichen, ohne X-Cookies oder
Login. Die meisten anderen Apify Actors rechnen ab, bevor sie filtern oder
Duplikate entfernen. Xquik rechnet nur gelieferte, eindeutige Ergebnisse ab, die
zu deinen Filtern passen.

Füge Nutzernamen ein, scanne die Follower eines Accounts oder suche X-Nutzer &
erhalte jedes Profil, das eine E-Mail veröffentlicht, mit der E-Mail an erster
Stelle. Ein Profil ohne E-Mail wird nicht geliefert & kostet nichts. Du zahlst
**$0.00015 pro geliefertem Datensatz** & Apify berechnet die Plattformnutzung
separat.

> Xquik ist ein unabhängiger Drittanbieter-Dienst. Nicht verbunden mit X Corp.
> "Twitter" und "X" sind Marken von X Corp.

## Warum X Email Scraper nutzen?

- **E-Mails aus ganzen Zielgruppen.** Durchsuche die Follower oder gefolgten
  Accounts eines Accounts & behalte Profile mit E-Mail. `maxScan` legt fest, wie
  viele Profile jeder Scan liest.
- **Zahle nur für gefundene E-Mails.** Ein Profil ohne E-Mail kostet nichts.
  Auch durchsuchte Profile sind kostenlos.
- **Nur die Leads, die du willst.** Behalte E-Mails deiner Domains oder
  überspringe kostenlose Webmail-Adressen. Filtere nach Followern,
  Account-Alter, Bio & Standort.
- **3 Quellen in 1 Run.** Mische Nutzernamen, Profil-URLs, Nutzer-IDs,
  Follower-Scans & Nutzersuchen.
- **Lead-Listen, bereit zum Export.** Exportiere Datensätze als JSON, CSV,
  Excel, XML oder RSS.

### Vollständige Ergebnisse

- Jedes Ergebnis enthält die vollständigsten Daten, die X dafür hat.

### Genaue Datensätze

- Jede ID in einem Datensatz bleibt exakt.
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
- Jeder Run sagt, warum er endete & ob du es erneut versuchen solltest.

### Umfangreiche Daten

- Kurzlinks werden aufgelöst, & Listen-Datensätze können vollständige Profile
  enthalten.
- Profile liefern E-Mails, Telefonnummern & Links, nach Netzwerk markiert.

### Qualitätsprüfungen

- Jedes Feld, das X zeigt, wird geliefert, bewusst weggelassen oder ist
  nachweislich nicht vorhanden.
- Xquik testet jeden Abruf live gegen X.

## Welche Daten kann X Email Scraper extrahieren?

- Die erste E-Mail, die das Profil veröffentlicht, in Kleinbuchstaben.
- Die Domain dieser E-Mail & das Profilfeld, in dem sie steht, also Bio, Name
  oder Standort.
- Jede E-Mail des Profils, auch wenn sie als "name [at] site [dot] com"
  geschrieben ist.
- Telefonnummern, die das Profil veröffentlicht, etwa als WhatsApp-Link.
- Die Website & die Bio-Links des Profils, jeweils mit ihrem Netzwerk, etwa
  LinkedIn, GitHub oder Telegram.
- Das vollständige öffentliche Profil mit Name, Bio, Zählern, Verifizierung,
  Datumsangaben & Bildern.

## So holst du E-Mails aus X-Profilen

Neu bei Apify?
[Erstelle zuerst einen kostenlosen Account](https://console.apify.com/sign-up?fpr=xquik).
Der kostenlose Plan braucht keine Kreditkarte & gibt dir jeden Monat $5 zum
Ausgeben. Bei $0.00015 pro Profil reichen $5 für bis zu 33.000 Profile, vor
Abzug der Plattformnutzung. Komm dann hierher zurück & klicke auf Try for free.

1. Öffne X Email Scraper von Xquik in der Apify Console.
2. Füge Nutzernamen, Profil-URLs oder Nutzer-IDs in `twitterHandles` ein oder
   ergänze `searchTerms`.
3. Aktiviere `expandFollowers`, um stattdessen die Follower jedes Accounts zu
   scannen.
4. Setze `maxItems`, um die gelieferten Datensätze zu begrenzen, & klicke dann
   auf Start.
5. Lade das Dataset als JSON, CSV oder Excel herunter oder nutze die Apify-API.

Du gibst in keinem Schritt X-Cookies, einen Login oder einen API-Schlüssel ein.

## Eingabe

`twitterHandles` nimmt jede Schreibweise eines Accounts an, auch gemischt. Der
Run prüft jeden Account & liefert die, die eine E-Mail veröffentlichen.

```json
{
  "twitterHandles": ["sample_user", "@sample_org", "https://x.com/sample_shop"],
  "maxItems": 1000
}
```

`startUrls` & `userIds` nehmen dieselben Schreibweisen an. Mit `expandFollowers`
liest der Run stattdessen die Follower jedes Accounts & behält die, die eine
E-Mail veröffentlichen. `expansionRelation` wählt `Followers` oder `Following`.

```json
{
  "twitterHandles": ["sample_org"],
  "expandFollowers": true,
  "expansionRelation": "Followers",
  "maxScan": 10000,
  "emailDomains": "example.com, example.org"
}
```

`searchTerms` sucht X-Nutzer nach Name, Nutzername oder Wörtern in der Bio.
Jeder Begriff ist 1 Suche.

```json
{
  "searchTerms": ["booking", "founder"],
  "businessEmailOnly": true,
  "minFollowers": 1000
}
```

Etwa 1 von 400 Followern veröffentlicht eine E-Mail, also liest ein
Follower-Scan weit mehr Profile, als er liefert. `maxScan` begrenzt die Profile,
die der Run aus jeder Liste oder Suche liest. Der Wert startet bei 10.000.
Stoppt der Run eine Liste dort, sagt der Run-Status, wie viele Datensätze er
gelesen hat, & du erhöhst `maxScan`, um weiterzulesen. Gescannte Profile sind
kostenlos.

`emailDomains` behält Profile mit einer E-Mail unter einer gelisteten Domain
oder einer ihrer Subdomains. `businessEmailOnly` behält Profile mit einer E-Mail
außerhalb kostenloser Webmail-Dienste wie Gmail. `minFollowers`, `maxFollowers`,
`minAccountAgeDays`, `verifiedOnly`, `hasWebsite`, `hasLocation`, `bioContains`
& `locationContains` grenzen die Profile weiter ein. Jeder Filter gilt vor der
Abrechnung.

`searchQueries` & `keyword` funktionieren als andere Namen für `searchTerms` &
`maxFollowersPerHandle` als anderer Name für `maxScan`. Nennt die Eingabe einen
Account doppelt, liefert & berechnet der Run ihn nur einmal. Kleine Runs ohne
Probleme überspringen `run-report` & sparen Apify-Nutzung. Aktiviere
`alwaysSaveRunRecords`, um ihn bei jedem Run zu schreiben.

### Von einem anderen E-Mail-Actor wechseln

Füge die Eingabe ein, die du schon nutzt. X Email Scraper von Xquik liest diese
Feldnamen anderer Actors. Jede Zeile nennt ihre Felder, dann das Feld, dem sie
entsprechen.

- `requireEmail` braucht kein Feld. Jedes gelieferte Profil veröffentlicht eine
  E-Mail.
- `requireWebsite` entspricht `hasWebsite`. Es behält ein Profil mit einem
  beliebigen Link im Website-Feld & der Run-Status sagt das.
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

Setzt du einen dieser Namen & sein kanonisches Feld, gewinnt der kanonische
Wert. Das Run-Log nennt das Feld, das verloren hat.

## Ausgabe

Jedes Profil, das eine E-Mail veröffentlicht, ist 1 Datensatz im Dataset. Zuerst
kommen die Kontaktdaten in `email`, `emailDomain`, `emailSource` &
`contactInfo`. Danach folgt das vollständige öffentliche Profil mit `id`,
`username`, `name`, `description`, `followers`, `following`, `verified`,
`verifiedType`, `createdAt`, `profilePicture` & mehr. Fehlende Quellfelder
bleiben weg. X Email Scraper von Xquik erfindet keine Werte.

Die Beispiele nutzen Musterwerte. Die Ergebnisse spiegeln Live-Daten wider. Ein
Datensatz sieht so aus.

```json
{
  "email": "press@example.com",
  "emailDomain": "example.com",
  "emailSource": "bio",
  "contactInfo": {
    "emails": [
      {
        "value": "press@example.com",
        "domain": "example.com",
        "source": "bio"
      },
      {
        "value": "jane@example.org",
        "domain": "example.org",
        "source": "bio",
        "writtenAs": "jane [at] example [dot] org"
      }
    ],
    "phones": [
      {
        "value": "+14155550123",
        "source": "bio",
        "writtenAs": "+1 (415) 555-0123"
      }
    ],
    "links": [
      { "url": "https://example.com", "network": "website", "source": "url" }
    ]
  },
  "id": "1234567890",
  "username": "sample_user",
  "name": "Sample User",
  "description": "Press: press@example.com",
  "followers": 1200,
  "verified": true,
  "createdAt": "2017-03-21T20:50:14.000Z",
  "resultType": "profile",
  "sourceTarget": "sample_user"
}
```

`resultType` ist `profile` für einen Account oder ein Suchergebnis,
`profileFollower` für einen Follower & `profileFollowing` für einen Account, dem
jemand folgt. `sourceTarget` nennt den Account oder den Suchbegriff, von dem der
Datensatz stammt.

## Was die E-Mail bedeutet

Eine E-Mail ist eine Adresse, die der Account in sein eigenes Profil geschrieben
hat, also in die Bio, den Namen oder den Standort. Der Actor liefert sie so, wie
der Account sie veröffentlicht hat, & schreibt sie klein. Nichts prüft, ob die
Adresse E-Mails empfängt, & nichts liest die Website, auf die ein Profil
verlinkt. `writtenAs` enthält die eigene Schreibweise des Accounts, wenn sie
abweicht, etwa "jane [at] example [dot] org".

Eine Telefonnummer erscheint nur, wenn das Profil sie in einer Form schreibt,
die nichts anderes sein kann, etwa als WhatsApp-Link oder als Nummer, die mit +
beginnt. Der Actor liest eine Jahreszahl, eine Anzahl oder einen Preis nie als
Telefonnummer.

## Was kostet es, E-Mails aus X-Profilen zu holen?

Auf jedem Apify-Plan kostet ein gelieferter Datensatz $0.00015. Apify berechnet
deine Plattformnutzung separat.

Brauchst du mehr Volumen, dann
[wähle einen Apify-Plan](https://apify.com/pricing?fpr=xquik) mit mehr
vorausbezahlter Nutzung.

- 1 Gebühr pro geliefertem Datensatz. Diagnosen in `diagnostics` sind kostenlos.
- Keine Gebühr für Start oder Abfrage.
- Ein Profil ohne E-Mail erzeugt keinen Datensatz & keine Gebühr.
- Ein Account, den es auf X nicht gibt, erzeugt keinen Datensatz & keine Gebühr.
- Die Deduplizierung läuft vor der Abrechnung.
- Die Apify-Einstellungen für die maximale Gesamtgebühr begrenzen die
  gelieferten Datensätze.

Ein Follower-Scan läuft eine Weile, um wenige Datensätze zu finden, weil er etwa
350 Profile pro Sekunde liest & etwa 1 von 400 behält. `maxScan` begrenzt diese
Zeit.

## Limits & Wiederherstellung

X Email Scraper von Xquik liest viele Accounts, Listen & Suchen in 1 Run.
Gelieferte Datensätze & Fortschritt überstehen einen Apify-Neustart. Der Actor
setzt kein eigenes Zeitlimit. Er hält jedes Apify-Timeout ein, das du setzt.

Der Run-Status nennt die Accounts, für die X keinen Treffer hat, & rät dir,
Nutzername, ID oder URL zu prüfen. Er nennt auch gesperrte Accounts. Eine
unterbrochene Extraktion schreibt eine kostenlose `partial`-Diagnose. Verfügbare
Ergebnisse bleiben erhalten. Lies `availableResults`, `failedTargets`,
`retryable` & `nextAction`, bevor du es erneut versuchst. Ein erfolgreicher
Actor-Abschluss bestätigt die Lieferung, nicht die vollständige Extraktion.

Der Run-Status nennt jede Ursache für einen vorzeitigen Stopp. `stopCauses`
listet jede Ursache mit eigenen Feldern `message`, `retryable` & `nextAction`.
Die Ursachen sind `scan_limit`, `target_not_found`, `target_suspended`,
`target_failed` & `deadline_reached`. Ein fehlendes oder gesperrtes Ziel oder
eine bei `maxScan` gestoppte Liste kommt nur auf die Liste, wenn eine andere
Ursache den Run gestoppt hat. Der Run ist `retryable`, wenn mindestens 1 Ursache
es ist.

Eine Liste, die der Run bei `maxScan` stoppt, beendet keinen Run vorzeitig. Ein
Run mit Datensätzen läuft zu Ende & sein Status sagt, wie viele Datensätze er
gelesen hat & dass du `maxScan` erhöhen sollst. Dafür schreibt er keine
Diagnose, was dir einen Schreibvorgang spart. Ein Run-Report zählt solche Listen
in `scanLimitedTargets`.

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

Nein. X Email Scraper von Xquik braucht weder X-Cookies noch einen
API-Schlüssel, einen Login oder Zugangsdaten. Jeder Abruf läuft auf der
Infrastruktur von Xquik.

### Woher kommen die E-Mails?

Sie stammen aus dem Profil selbst, also aus der Bio, dem Namen & dem Standort,
die der Account geschrieben hat. Der Actor liest keinen Post & keine verlinkte
Website, also hat der Account jede E-Mail in seinem eigenen X-Profil
veröffentlicht.

### Prüft der Actor, ob eine E-Mail funktioniert?

Nein. Er liefert jede Adresse so, wie der Account sie veröffentlicht hat. Nichts
prüft, ob die Adresse E-Mails empfängt.

### Warum hat ein Follower-Scan nur wenige Datensätze geliefert?

Etwa 1 von 400 Followern veröffentlicht eine E-Mail. Der Run-Status sagt, wie
viele Datensätze der Run gelesen hat. Erhöhe `maxScan`, um eine Liste weiter zu
lesen, oder nutze `searchTerms` mit Wörtern wie booking, die weit mehr
Datensätze behalten.

### Wie viele Profile kann ich in 1 Run prüfen?

So viele, wie du einfügst. Ein Run kann 100.000 Datensätze & mehr liefern.
Erhöhe `maxItems` für eine größere Liste über die 1.000, mit denen das Formular
startet.

### Ist es legal, E-Mails aus X-Profilen zu sammeln?

X Email Scraper von Xquik fragt öffentliche X-Felder ab. Ergebnisse enthalten
personenbezogene Daten. Prüfe, ob dein Zweck rechtmäßig ist, befolge die
Datenschutz- & E-Mail-Regeln, die für dich gelten, & respektiere Opt-outs. Hol
dir bei Unsicherheit qualifizierten Rechtsrat.

### Warum hat mein Run keine Ergebnisse geliefert?

Lies zuerst den Run-Status. Der Status eines leeren Runs rät dir, Nutzername, ID
oder URL jedes Accounts zu prüfen, für den X keinen Treffer hat. Ein Profil ohne
E-Mail erzeugt keinen Datensatz. Die kostenlose Ausgabe `diagnostics` erscheint,
wenn etwas deine Aufmerksamkeit braucht. Ihr Feld `stopCauses` gibt jeder
Ursache eine `nextAction`, der du folgen kannst.

### Kann ich die API, Zeitpläne & Integrationen nutzen?

Ja. Nutze die Apify-API oder die REST-API von Xquik. Im
[API-Tab](https://apify.com/xquik/x-email-scraper/api) findest du Beispiele für
Python, JavaScript & cURL.
[Zeitpläne](https://docs.apify.com/platform/schedules) von Apify starten X Email
Scraper von Xquik per Cron. Agents nutzen
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Nutze `latest`,
außer du brauchst einen älteren Build.

### Wo bekomme ich Hilfe?

Öffne im [Tab Issues](https://apify.com/xquik/x-email-scraper/issues) ein Issue
mit der Run-ID. Kostenlose Diagnosen im Key-Value-Store erklären Runs, die
Aufmerksamkeit brauchen. Ein Run, der keinen Datensatz zurückbekommt, sagt in
seinem Status, warum.

### Kann ich eine individuelle Lösung bekommen?

Ja. Beschreibe im [Tab Issues](https://apify.com/xquik/x-email-scraper/issues),
was du brauchst. Xquik bietet außerdem ein Dashboard, eine REST-API, einen
MCP-Server & Webhooks. Die Website von Xquik findest du in seinem
[Apify-Profil](https://apify.com/xquik).
