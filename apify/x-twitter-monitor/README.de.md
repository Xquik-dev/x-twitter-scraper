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
liefert die vollständigsten X-Daten. X (Twitter) Monitor von Xquik sendet
Twitter-Alerts für die Stichwörter & Accounts, die du auswählst. Er prüft jede
Sekunde, & jeder neue Post, jede Antwort oder jede Profiländerung erreicht
Discord, Telegram, Slack oder deinen Webhook in Sekunden. Die meisten anderen
Apify Actors rechnen ab, bevor sie filtern oder Duplikate entfernen. Xquik
rechnet nur gelieferte, eindeutige Ergebnisse ab, & hier nur die Stunden, in
denen ein Monitor beobachtet.

Füge Accounts oder Stichwörter ein & klicke auf Start. Das Monitoring startet
sofort, & Alerts kommen zwischen den Runs an. Du zahlst **$0.0045 pro
monitor-hour**. Events & Alerts sind kostenlos, & Apify berechnet die
Plattformnutzung separat.

> Xquik ist ein unabhängiger Drittanbieter-Dienst. Nicht verbunden mit X Corp.
> "Twitter" und "X" sind Marken von X Corp.

## Was der Twitter-Monitor sendet

- Neue Posts, Antworten, Zitate & Reposts der Accounts, die du beobachtest.
- Posts, die zu einer Stichwortsuche passen, mit jedem X-Suchoperator.
- Gelöschte Posts, Live-Videos & Spaces, die ein Account startet.
- Profiländerungen: Name, Nutzername, Bio, Profilbild, Bannerbild, Standort,
  Link, Verifizierung, Schutzstatus, angehefteter Post & Verfügbarkeit.
- Accounts, denen jeder beobachtete Account folgt oder entfolgt.
- Das vollständige Event: der Post mit Autor, Zahlen & Medien oder die Änderung.
- Die dauerhafte X-Nutzer-ID neben dem aktuellen Nutzernamen, damit ein
  umbenannter Account seinen Monitor behält.
- Alerts an Slack & Discord in deren eigenem Nachrichtenformat, an Telegram & an
  jeden HTTPS-Webhook als signiertes JSON.
- Ein Test-Alert an jeden neuen Empfänger, mit dessen Antwort im Run-Status.
- Jedes Event im Dataset des Runs & in 1 Verlaufs-Dataset pro Monitor.

## So richtest du Twitter-Alerts für Stichwörter ein

1. Öffne X (Twitter) Monitor von Xquik in der Apify Console.
2. Füge Nutzernamen in `twitterHandles` oder X-Suchen in `searchTerms` ein.
3. Wähle die Events, die einen Alert senden. `newPosts` ist standardmäßig aktiv.
4. Füge Webhook-URLs in `webhookUrls` ein oder aktiviere `telegram`.
5. Klicke auf Start. Das Monitoring beginnt in diesem Run.
6. Füge einen Zeitplan hinzu, der den Actor jede Stunde mit derselben Eingabe
   startet.

Jeder spätere Run berechnet die beobachteten Stunden seit dem vorherigen Run. Er
speichert die neuen Events in seinem Dataset & endet schnell. Ein Monitor ohne
Run für 24 Stunden pausiert. Deine Alerts warnen dich 4 Stunden vorher. Der
nächste Run setzt ihn fort & berechnet zuerst die offenen Stunden.

Dieselbe Eingabe setzt denselben Monitor fort. Eine geänderte Eingabe
aktualisiert ihn. Ein gespeicherter Task ist 1 Monitor. Ohne Task benennt
`monitorName` den Monitor, also halten 2 Namen 2 Monitore auseinander.

## Twitter-Alerts in Discord, Telegram & Slack

- **Discord**: Füge die Webhook-URL eines Kanals in `webhookUrls` ein. Jeder
  Alert kommt als Discord-Nachricht an, ohne Bot, den du hosten musst.
- **Telegram**: Aktiviere `telegram`. Der Run-Status gibt dir einen Link zum
  Telegram-Bot von Xquik. Öffne ihn & tippe auf Start, dann kommen Alerts in
  diesem Chat an.
- **Slack**: Füge eine Incoming-Webhook-URL ein. Jeder Alert kommt als
  Slack-Nachricht an.
- **Jede App**: Füge eine HTTPS-URL ein. Jeder Alert kommt als signiertes JSON
  an, als dasselbe Event, das das Dataset enthält.

Jeder neue Empfänger bekommt in dem Run, der ihn hinzufügt, einen Test-Alert.
Die Statusseite zeigt, ob er angekommen ist.

## Eingabe

| Feld                                 | Funktion                                                                      |
| ------------------------------------ | ----------------------------------------------------------------------------- |
| `twitterHandles`                     | Nutzernamen mit oder ohne @ oder Profil-URLs von x.com.                       |
| `searchTerms`                        | X-Suchen wie `"x api" lang:en`. Jede Suche ist 1 Monitor.                     |
| `monitorName`                        | Benennt den Monitor bei Runs ohne gespeicherten Task.                         |
| `newPosts`                           | Originale Posts. Standardmäßig aktiv.                                         |
| `replies`, `quotes`, `reposts`       | Diese Post-Typen.                                                             |
| `deletedPosts`, `liveVideos`         | Gelöschte Posts, Live-Videos & Spaces von Accounts.                           |
| `profileChanges`, `followingChanges` | Profil- & Following-Änderungen von Accounts.                                  |
| `eventTypes`                         | Genaue Event-Typen, die die Checkboxen ersetzen.                              |
| `webhookUrls`                        | HTTPS-URLs, 1 pro Zeile. Der Actor erkennt Slack- & Discord-URLs.             |
| `telegram`                           | Sendet Alerts an Telegram über einen Link, den der Run dir gibt.              |
| `since`                              | Speichert 1-mal die aufbewahrten Events seit einem Datum der letzten 30 Tage. |
| `stop`                               | Stoppt den Monitor & schaltet Alerts ab.                                      |

Accounts & Stichwörter ergeben zusammen bis zu 100 pro Monitor. Stichwörter
senden nur Post-Events. Telegram braucht keinen Nutzernamen & keine Chat-ID. Der
Run-Status gibt dir einen Link. Öffne ihn & tippe auf Start, dann kommen Alerts
in diesem Chat an.

Kopierfertige Eingaben:

```json
{ "twitterHandles": ["NASA", "SpaceX"], "newPosts": true, "replies": true }
```

```json
{
  "searchTerms": ["\"your brand\" -from:yourbrand"],
  "webhookUrls": "https://hooks.slack.com/services/T000/B000/XXXX",
  "monitorName": "brand-mentions"
}
```

```json
{ "twitterHandles": ["elonmusk"], "profileChanges": true, "telegram": true }
```

## Ausgabe

Jeder Run liefert 4 Ausgaben.

- **Statusseite**, der Eintrag `STATUS.html`: was der Monitor beobachtet, jeder
  Alert-Empfänger, die Abrechnung & der nächste Schritt. Der Tab Output zeigt
  sie.
- **Status-Eintrag**, der Eintrag `STATUS`: derselbe Status als JSON.
- **Neue Events**: das Dataset des Runs, mit jedem neuen Event, das älteste
  zuerst, & 1 Status-Datensatz am Ende.
- **Diagnosen**: Der Actor schreibt sie nur, wenn etwas deine Aufmerksamkeit
  braucht.

Ein Event-Datensatz ist das Event genau so, wie die REST-API von Xquik es
liefert, mit jedem Feld:

```json
{
  "resultType": "event",
  "id": "981",
  "type": "tweet.new",
  "occurredAt": "2026-10-13T09:00:01.000Z",
  "monitorId": "2944",
  "monitorType": "account",
  "username": "NASA",
  "xUserId": "11348282",
  "data": { "tweetId": "1977000000000000000", "text": "Liftoff!" }
}
```

Die Beispielwerte zeigen die Struktur. Live-Daten weichen ab.

Der Status-Eintrag enthält `state`, `targets`, `destinations`, `eventsSaved`,
`pendingEvents`, `hoursCharged`, `chargedUsd`, `hoursOwed`, `paidThrough`,
`pausesAt`, `historyDataset`, `notices` & `nextStep`. Ein Ziel, das es auf X
nicht gibt, sagt das in seiner `message`, & der Monitor beobachtet den Rest. Ein
neuer generischer Webhook zeigt sein Signatur-Secret 1-mal, nur im
Status-Eintrag.

Das Verlaufs-Dataset in deinem Account enthält jedes Event des Monitors, jedes
1-mal. Sein Name beginnt mit `x-monitor-`.

## Für KI-Agents

1 Aufruf ist die ganze API. Jeder Aufruf startet oder aktualisiert den Monitor,
berechnet die beobachteten Stunden seit dem vorherigen Aufruf & gibt nur Neues
zurück. Kein Aufruf berechnet eine Stunde 2-mal. Aufrufe enden schnell,
innerhalb der Zeit, die Apifys MCP wartet.

Einen Monitor starten oder fortsetzen:

```json
{
  "twitterHandles": ["NASA"],
  "searchTerms": ["\"x api\" lang:en"],
  "replies": true,
  "monitorName": "agent-demo"
}
```

Was ein Aufruf zurückgibt:

- Das Dataset des Runs enthält die neuen Events, dann 1 Datensatz mit
  `resultType` `status`. Sein `state` sagt, ob der Monitor beobachtet, &
  `nextStep` sagt, was als Nächstes zu tun ist.
- Der Eintrag `STATUS` enthält denselben Status, mit einem Signatur-Secret, wenn
  der Aufruf einen Webhook erstellt hat.

So läuft er weiter: Bitte deinen Agent, einen Apify-Zeitplan zu erstellen, der
den Actor jede Stunde mit derselben Eingabe startet. Jeder Timer, der ihn
mindestens 1-mal alle 24 Stunden aufruft, funktioniert auch. Stoppe ihn mit
derselben Eingabe & `"stop": true`.

Der Actor liest auch die Namen, die Agents raten, etwa `handles` & `usernames`,
& der Run-Status sagt, wie er sie gelesen hat.

## Was kostet ein Twitter-Monitor?

Auf jedem kostenpflichtigen Apify-Plan kostet eine monitor-hour $0.0045. 1
Account oder Stichwort ist 1 Monitor. Apify berechnet deine Plattformnutzung
separat.

- 1 Account, 30 Tage lang beobachtet, kostet etwa $3.24.
- 10 Accounts & 2 Stichwörter, 30 Tage lang beobachtet, kosten etwa $38.88.
- Events & Alerts sind kostenlos, egal wie viele ankommen.
- Keine Startgebühr. Ein Run berechnet nur bereits beobachtete Stunden.
- Ein Ziel, das es auf X nicht gibt, beobachtet nichts & kostet nichts.
- Deine maximalen Kosten pro Run begrenzen jede Abrechnung. Stunden darüber
  warten auf den nächsten Run.

Ein stündlicher Zeitplan hält die Apify-Nutzung klein im Vergleich zu den
Stunden, die er bezahlt. Runs alle paar Minuten erhöhen die Nutzung & ändern
nichts an den Alerts, die ohnehin zwischen den Runs ankommen.

Monitoring braucht einen kostenpflichtigen Apify-Plan. Auf dem kostenlosen Plan
startet ein Run keinen Monitor & berechnet nichts. Stattdessen zeigt er die 5
neuesten Posts deines ersten Accounts, damit du siehst, was Alerts enthalten
würden.

## Limits & Wiederherstellung

- Accounts & Stichwörter ergeben zusammen bis zu 100 pro Monitor. Nutze 2 Tasks
  für mehr.
- Bis zu 10 Webhook-URLs pro Monitor, plus Telegram.
- Events bleiben 30 Tage gespeichert, also kann `since` sie in dieser Zeit
  erneut speichern.
- Ein Run, der früh stoppt, lässt seine Events für den nächsten Run liegen.
  Keins geht verloren.
- Ein Run, der zwischen seiner Stundenreservierung & seiner Abrechnung endet,
  berechnet nichts. Diese Stunden gelten als bezahlt & bleiben kostenlos.
- Jeder Run schreibt 1 kostenlosen Status-Datensatz, also ist sein Dataset nie
  leer.

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
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper):
  Scrapt die Posts, die Posts zitieren, mit Text, Medien, Zahlen, Autoren & 11
  Filtern. Nutze ihn, wenn du untersuchst, wer Posts zitiert hat & was gesagt
  wurde. Ab $0.00015 pro Post.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): Scrapt
  Follower, gefolgte Accounts, Listenmitglieder, Abonnenten &
  Community-Mitglieder als Profil-Datensätze. Nutze ihn, wenn du Zielgruppen-
  oder Mitgliederlisten brauchst. Ab $0.00015 pro Profil.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper):
  Sucht Nutzer nach Nutzername, Bio & Standort mit Filtern für Follower,
  Verifizierung, Account-Alter & Standort. Nutze ihn, wenn du Account-Listen
  aus einer Suche aufbaust. Ab $0.00015 pro Profil.
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
- [X Space Scraper](https://apify.com/xquik/x-space-scraper): Findet Spaces nach
  Stichwort & liest ihre Titel, Status, Zeiten, Zuhörerzahlen, Hosts & Sprecher.
  Liest auch Broadcasts per URL oder ID. Nutze ihn, wenn du Live-Audio &
  Live-Video auf X verfolgst. Ab $0.00015 pro Space oder Broadcast.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): Scrapt
  Echtzeit-Trends nach Standort mit Rang, Volumen, Suchbegriff & WOEID. Nutze
  ihn, wenn du verfolgst, was wo gerade angesagt ist. Ab $0.00015 pro Trend.
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper): Scrapt
  X-Stellenanzeigen nach Stichwort, Ort, Arbeitsmodell, Karrierestufe &
  Unternehmen, mit Gehältern & Bewerbungslinks. Nutze ihn, wenn du auf X
  veröffentlichte Stellen sammelst. Ab $0.00015 pro Job.
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

Antworten auf häufige Fragen, danach, wo du Hilfe bekommst.

### Brauche ich X-Cookies, einen API-Schlüssel oder einen Login?

Nein. X (Twitter) Monitor von Xquik braucht keine X-Cookies, keinen
API-Schlüssel, keinen Login & keine Zugangsdaten. Jede Prüfung läuft auf der
Infrastruktur von Xquik.

### Wie überwache ich einen Twitter-Account?

Füge seinen Nutzernamen in `twitterHandles` ein, wähle die gewünschten Events &
füge einen Alert-Empfänger hinzu. Jeder neue Post erreicht dich in Sekunden, &
jedes Event bleibt im Dataset.

### Kann er Krypto-Accounts & Coin-Erwähnungen überwachen?

Ja. Füge die Accounts hinzu, denen du folgst, oder eine Stichwortsuche wie ein
Cashtag oder eine Contract-Adresse. Passende Posts erreichen Discord oder
Telegram in Sekunden.

### Wie schnell kommen Alerts an?

Xquik prüft jede Sekunde & sendet jedes Event in Sekunden. Alerts warten nie auf
einen Run.

### Warum sagt der Run, dass Monitoring einen kostenpflichtigen Plan braucht?

Monitore laufen zwischen den Runs, den ganzen Tag. Deshalb brauchen sie einen
kostenpflichtigen Apify-Plan. Führe ein Upgrade durch & starte den Run dann
erneut mit derselben Eingabe.

### Was passiert, wenn ich den Monitor stoppe?

Der Run stoppt jedes Ziel & schaltet Alerts ab. Er berechnet die bis dahin
beobachteten Stunden. Bereits aufbewahrte Events bleiben 30 Tage lang lesbar.

### Wie prüfe ich eine Webhook-Signatur?

Ein neuer generischer Webhook bekommt ein Signatur-Secret, das 1-mal im Eintrag
`STATUS` erscheint. Xquik signiert jede Zustellung damit, so wie bei seinen
REST-Webhooks.

### Kann ich API, Zeitpläne & Integrationen nutzen?

Ja. Nutze die Apify-API oder die REST-API von Xquik. Der
[API-Tab](https://apify.com/xquik/x-twitter-monitor/api) enthält Beispiele für
Python, JavaScript & cURL.
Apify-[Zeitpläne](https://docs.apify.com/platform/schedules) halten den Monitor
am Laufen. Agents nutzen
[Apify MCP](https://docs.apify.com/platform/integrations/mcp).

### Ist es legal, X-Accounts zu überwachen?

X (Twitter) Monitor von Xquik fragt öffentliche X-Daten ab. Ergebnisse können
personenbezogene Daten enthalten. Prüfe, ob dein Zweck rechtmäßig ist. Befolge
die Datenschutzregeln, die für dich gelten. Hol dir bei Unsicherheit
qualifizierten Rechtsrat.

### Wo bekomme ich Hilfe?

Öffne ein Issue auf der Actor-Seite oder schreib mit der Run-ID an
<support@xquik.com>. Die Statusseite erklärt jeden Run, & kostenlose Diagnosen
decken Runs ab, die Aufmerksamkeit brauchen.

### Kann ich eine individuelle Lösung bekommen?

Ja. Besuche [xquik.com](https://xquik.com) oder lies die
[API-Dokumentation](https://docs.xquik.com/introduction). Sie deckt Dashboard,
API, MCP-Server & Webhooks ab.
