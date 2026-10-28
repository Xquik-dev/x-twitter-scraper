[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
**Deutsch** · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer verbindet Xquik MCP mit Coding-Agents](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Sieh dir an, wie Framer Xquik-Scraper nutzt](https://youtu.be/4UOSpoOoC3Y?t=367),
mit Claude Code, Codex, Cursor & mehr, ab Minute 6:07.

Xquik ist weltweit der schnellste & günstigste Scraper-Dienst für X (Twitter) &
liefert die vollständigsten X-Daten. X (Twitter) Monitor von Xquik sendet
Twitter-Alerts für die Accounts & Stichwörter, die du auswählst. Er erfasst
jeden neuen Tweet, jede Antwort, jedes Zitat, jeden Repost & jede Profiländerung
eines beobachteten Accounts. Meist erfasst er jedes davon in weniger als einer
Sekunde, nachdem X es zeigt. Für ein Stichwort erfasst er jeden neuen Tweet, den
die X-Suche unter Neueste zeigt. Er erfasst auch Follows & Follower. Jedes Event
erreicht Discord, Telegram, Slack oder deinen Webhook als Alert. Die meisten
anderen Apify Actors rechnen ab, bevor sie filtern oder Duplikate entfernen.
Xquik rechnet nur gelieferte, eindeutige Ergebnisse ab, & hier nur die Stunden,
in denen ein Monitor beobachtet.

Füge Accounts oder Stichwörter ein & klicke auf Start. Das Monitoring startet
sofort, & Alerts kommen zwischen den Runs an. Du zahlst **$0.0045 pro
monitor-hour**. Events & Alerts sind kostenlos, & Apify berechnet die
Plattformnutzung separat.

> Xquik ist ein unabhängiger Drittanbieter-Dienst. Nicht verbunden mit X Corp.
> "Twitter" und "X" sind Marken von X Corp.

## Warum X (Twitter) Monitor nutzen?

- **Alerts dort, wo dein Team arbeitet.** Discord & Slack bekommen ihr eigenes
  Nachrichtenformat, ohne Bot, den du hosten musst. Telegram braucht keine
  Chat-ID, & jeder HTTPS-Webhook bekommt das vollständige Event.
- **Du weißt, dass deine Alerts funktionieren.** Jede neue Webhook-, Slack- oder
  Discord-URL bekommt einen Test-Alert. Der Run-Status sagt, ob er angekommen
  ist. Telegram bestätigt im Chat, wenn du auf Start tippst.
- **Beobachte Accounts & Themen zusammen.** 1 Eingabe nimmt bis zu 100 Accounts
  & X-Suchen auf. Eine Suche nach einem @Nutzernamen erfasst Erwähnungen dieses
  Accounts.
- **Hol verpasste Events nach.** `since` speichert Events ab jedem Datum der
  letzten 30 Tage erneut.
- **Du weißt, dass der Monitor beobachtet.** Die Statusseite jedes Runs sagt es
  & zeigt 1 nächsten Schritt mit einem Button.
- **Keine stillen Pausen.** Deine Alerts warnen dich 4 Stunden, bevor ein
  Monitor ohne Runs pausiert. Der nächste Run setzt ihn fort.
- **Kein X-Account nötig.** Du teilst nie deinen X-Login oder einen
  API-Schlüssel.

### Genaue Datensätze

- Reposts enthalten den vollständigen Originaltext.
- Jede ID in einem Datensatz bleibt exakt.
- Erwähnungen, Links, Hashtags & Hervorhebungen sitzen an der richtigen Stelle
  im Text.
- Verifizierungs-Badges stimmen mit dem überein, was `x.com` zeigt.
- Datensätze enthalten nur öffentliche Daten.
- Werbung & gesponserte Einträge landen nie in deinen Datensätzen.
- Monitore melden nur echte Löschungen & Unfollows.
- Alerts zu Profiländerungen springen nicht hin & her.

### Aktuelle Daten

- Account-Monitore sehen Änderungen innerhalb von etwa einer Sekunde.
- Stichwort-Monitore erfassen jeden passenden Post.
- Monitore verpassen keine Posts.
- Ein Monitor, der in Rückstand gerät, holt nach, was er verpasst hat.
- Live-Videos & Spaces lösen ein Event aus, wenn sie starten.
- Abrufe funktionieren weiter, wenn X Änderungen ausrollt.

### Tempo

- Eine langsame Seite hält deinen Run nicht auf.
- Hängende Actor-Aufrufe laufen von selbst wieder an.

### Faire Abrechnung

- Monitore haben 1 festen Stundenpreis, Events & Webhooks inklusive.
- Monitor-Actors berechnen nur die Stunden, in denen ein Monitor beobachtet hat.

### Zuverlässigkeit

- Ein einzelner Fehler lässt deinen Run nicht scheitern.
- Actors überstehen kurze Xquik-Ausfälle.
- Actor-Runs überstehen Neustarts ohne Dopplungen.
- Gestoppte Runs behalten ihre Datensätze & ihren Report.
- Ein Run, der nicht starten kann, erklärt trotzdem, warum.
- Webhooks sind signiert & gegen Replays geschützt.
- Ein Webhook, der ausgefallen war, bekommt seine Events trotzdem, bis zu 7 Tage
  lang.
- Neue Events kommen pünktlich an, auch nachdem dein Webhook ausgefallen war.
- Webhooks gehen nie an private oder lokale Hosts.
- Chat-Alerts kommen in der richtigen Reihenfolge an, ohne an Rate-Limits zu
  stoßen.
- Der Support sieht genau, was eine Anfrage oder ein Run geliefert hat.

### Für Agents gebaut

- Actors akzeptieren Eingaben, die für andere Actors geschrieben sind.
- Jeder Run sagt, warum er endete & ob du es erneut versuchen solltest.

### Umfangreiche Daten

- Post-Datensätze enthalten den Text von Note Tweets, Bearbeitungen, Community
  Notes, Reichweiten-Labels & Antworteinstellungen.
- Datensätze enthalten Quell-Apps, Medienzahlen & Daten professioneller
  Accounts.
- Medien kommen mit Varianten, Alt-Text, Größen & Gründen zur Verfügbarkeit.

### Qualitätsprüfungen

- Jedes Feld, das X zeigt, wird geliefert, bewusst weggelassen oder ist
  nachweislich nicht vorhanden.
- Xquik testet jeden Abruf live gegen X.
- Actor-READMEs, Schemas & echte Ausgaben nennen dieselben Felder.

## Welche Daten sendet X (Twitter) Monitor?

- Jeder neue Tweet, jede Antwort, jedes Zitat & jeder Repost der Accounts, die
  du beobachtest, meist in weniger als einer Sekunde erfasst, nachdem X sie
  zeigt.
- Jeder neue Tweet, den die X-Suche unter Neueste für dein Stichwort zeigt, mit
  jedem X-Suchoperator.
- Gelöschte Tweets, Live-Videos & Spaces, die ein Account startet.
- Profiländerungen wie Anzeigename, Nutzername, Bio, Profilbild, Bannerbild,
  Standort, Website, Verifizierung, Schutzstatus, angehefteter Tweet &
  Verfügbarkeit, ebenfalls meist in weniger als einer Sekunde erfasst, nachdem X
  sie zeigt.
- Accounts, denen jeder beobachtete Account folgt oder entfolgt.
- Neue & verlorene Follower jedes beobachteten Accounts.
- Tweets mit Erwähnungen, Hashtags, Medien, Links oder Umfragen & lange Tweets,
  in `eventTypes`.
- Das vollständige Event, also der Tweet mit Autor, Zahlen & Medien oder die
  Änderung.
- Die dauerhafte X-Nutzer-ID neben dem aktuellen Nutzernamen, damit ein
  umbenannter Account seinen Monitor behält.
- Jedes Event im Dataset des Runs & in 1 Verlaufs-Dataset pro gespeichertem Task
  oder Monitor-Namen.

## So richtest du Twitter-Alerts für Stichwörter ein

Monitoring braucht einen kostenpflichtigen Apify-Plan.
[Wähle einen Plan](https://apify.com/pricing?fpr=xquik), komm dann hierher
zurück & klicke auf Try for free.

1. Öffne X (Twitter) Monitor von Xquik in der Apify Console.
2. Füge Nutzernamen in `twitterHandles` oder X-Suchen in `searchTerms` ein.
3. Wähle die Events, die einen Alert senden. Neue Tweets, Antworten, Zitate &
   Reposts sind standardmäßig aktiv.
4. Füge Webhook-URLs in `webhookUrls` ein oder aktiviere `telegram`.
5. Klicke auf Start. Das Monitoring beginnt in diesem Run.
6. Füge einen Zeitplan hinzu, der den Actor jede Stunde mit derselben Eingabe
   startet.

Jeder spätere Run berechnet die beobachteten Stunden seit dem vorherigen Run. Er
speichert die neuen Events in seinem Dataset & endet schnell. Ein Monitor ohne
Run für 24 Stunden pausiert. Deine Alerts warnen dich 4 Stunden vorher. Der
nächste Run setzt ihn fort & berechnet zuerst die offenen Stunden.

Dieselbe Eingabe setzt dieselben Monitore fort. Eine geänderte Eingabe
aktualisiert sie. Ein gespeicherter Task hält 1 Gruppe von Monitoren. Ohne Task
benennt `monitorName` die Gruppe, also halten 2 Namen 2 Gruppen auseinander.

## Twitter-Alerts in Discord, Telegram & Slack

- **Discord.** Füge die Webhook-URL eines Kanals in `webhookUrls` ein. Jeder
  Alert kommt als Discord-Nachricht an, ohne Bot, den du hosten musst.
- **Telegram.** Aktiviere `telegram`. Der Run-Status gibt dir einen Link zum
  Telegram-Bot von Xquik. Öffne ihn & tippe auf Start, dann kommen Alerts in
  diesem Chat an.
- **Slack.** Füge eine Incoming-Webhook-URL ein. Jeder Alert kommt als
  Slack-Nachricht an.
- **Jede App.** Füge eine HTTPS-URL ein. Jeder Alert kommt als signiertes JSON
  an, als dasselbe Event, das das Dataset enthält.

Jede neue Webhook-, Slack- oder Discord-URL bekommt in dem Run, der sie
hinzufügt, einen Test-Alert, & die Statusseite zeigt, ob er angekommen ist.
Telegram sendet keinen Test-Alert. Der Bot antwortet im Chat, wenn du auf Start
tippst, & der nächste Run zeigt Telegram als verbunden.

## Eingabe

| Feld                                 | Funktion                                                                            |
| ------------------------------------ | ----------------------------------------------------------------------------------- |
| `twitterHandles`                     | Nutzernamen mit oder ohne @ oder Profil-URLs von `x.com`, 1 pro Zeile.              |
| `searchTerms`                        | X-Suchen wie `"x api" lang:en`. Jede Suche ist 1 Monitor.                           |
| `monitorName`                        | Benennt diese Gruppe von Accounts & Stichwörtern, für Runs ohne gespeicherten Task. |
| `newPosts`                           | Jeder neue Tweet. Standardmäßig aktiv.                                              |
| `replies`, `quotes`, `reposts`       | Antworten, zitierte Tweets & Reposts. Standardmäßig aktiv.                          |
| `deletedPosts`, `liveVideos`         | Gelöschte Tweets, Live-Videos & Spaces von Accounts.                                |
| `profileChanges`, `followingChanges` | Profiländerungen, Follows & Unfollows von Accounts.                                 |
| `followerChanges`                    | Neue & verlorene Follower von Accounts.                                             |
| `eventTypes`                         | Genaue Event-Typen, die die Checkboxen ersetzen, etwa Follower-Änderungen & Medien. |
| `webhookUrls`                        | HTTPS-URLs, 1 pro Zeile. Der Actor erkennt Slack- & Discord-URLs.                   |
| `telegram`                           | Sendet Alerts an Telegram über einen Link, den der Run dir gibt.                    |
| `since`                              | Speichert 1-mal die aufbewahrten Events seit einem Datum der letzten 30 Tage.       |
| `stop`                               | Stoppt den Monitor & schaltet Alerts ab.                                            |

1 Eingabe nimmt bis zu 100 Accounts & Stichwörter auf. Stichwörter senden nur
Tweet-Events. Setze eine Wortgruppe in Anführungszeichen, damit sie genau passt,
wie bei `"x api"`. Ohne Anführungszeichen können die Wörter überall in einem
Tweet stehen. Um Erwähnungen eines Accounts zu erfassen, füge das Stichwort
`@username` hinzu. Telegram braucht keinen Nutzernamen & keine Chat-ID. Der
Run-Status gibt dir einen Link. Öffne ihn & tippe auf Start, dann kommen Alerts
in diesem Chat an.

Diese Eingaben sind kopierfertig.

```json
{ "twitterHandles": ["NASA", "SpaceX"], "reposts": false }
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

- **Statusseite**, der Eintrag `STATUS.html`. Sie zeigt, ob der Monitor
  beobachtet, den einzigen nächsten Schritt mit einem Button, was der Run
  gespeichert & berechnet hat, die Ziele & jeden Alert-Empfänger. Der Tab Output
  zeigt sie.
- **Status-Eintrag**, der Eintrag `STATUS`. Er enthält denselben Status als
  JSON.
- **Neue Events**, das Dataset des Runs. Es enthält jedes neue Event, das
  älteste zuerst, & 1 Status-Datensatz am Ende.
- **Diagnosen**, die der Actor nur schreibt, wenn etwas deine Aufmerksamkeit
  braucht.

Ein Event-Datensatz ist das Event genau so, wie die REST-API von Xquik es
liefert, mit jedem Feld.

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
`pendingEvents`, `hoursCharged`, `chargedUsd`, `chargeConfirmed`, `hoursOwed`,
`paidThrough`, `pausesAt`, `historyDataset`, `notices`, `nextStep`,
`nextStepAction` & `nextStepUrl`. Ein Ziel, das es auf X nicht gibt, sagt das in
seiner `message`, & der Monitor beobachtet den Rest. Ein neuer generischer
Webhook zeigt sein Signatur-Secret 1-mal, nur im Status-Eintrag.

Das Verlaufs-Dataset in deinem Account enthält jedes Event des Monitors, jedes
1-mal. Sein Name beginnt mit `x-monitor-`.

## Für KI-Agents

1 Aufruf ist die ganze API. Jeder Aufruf startet oder aktualisiert den Monitor,
berechnet die beobachteten Stunden seit dem vorherigen Aufruf & gibt nur Neues
zurück. Kein Aufruf berechnet eine Stunde 2-mal. Ein Aufruf, der einen Monitor
startet oder aktualisiert, endet schnell, innerhalb der Zeit, die Apifys MCP
wartet. Ein Stopp dauert etwa eine halbe Minute, weil er zuerst die letzten
Events sammelt. Lies sein Ergebnis aus dem Run, wenn dein Tool nicht mehr
wartet.

Diese Eingabe startet einen Monitor oder setzt ihn fort.

```json
{
  "twitterHandles": ["NASA"],
  "searchTerms": ["\"x api\" lang:en"],
  "monitorName": "agent-demo"
}
```

Ein Aufruf gibt 2 Dinge zurück.

- Das Dataset des Runs enthält die neuen Events, dann 1 Datensatz mit
  `resultType` `status`. Sein `state` sagt, ob der Monitor beobachtet, &
  `nextStep` sagt, was als Nächstes zu tun ist. `nextStepAction` nennt die Art
  des Schritts, etwa `add_schedule`, & `nextStepUrl` ist die Seite dafür.
- Der Eintrag `STATUS` enthält denselben Status, mit einem Signatur-Secret, wenn
  der Aufruf einen Webhook erstellt hat.

Um einen Monitor zu prüfen, rufe den Actor erneut mit derselben Eingabe auf. Das
ändert nichts & berechnet nur bereits beobachtete Stunden. Der Aufruf gibt den
Status & die neuen Events zurück.

Ein Monitor braucht mindestens 1-mal alle 24 Stunden einen Run, um weiter zu
beobachten. Apifys MCP-Server hat kein Zeitplan-Tool, also kannst du keinen
Zeitplan anlegen. Bitte den Nutzer, auf der Seite in `nextStepUrl` einen
Apify-Zeitplan hinzuzufügen. Er startet den Actor jede Stunde mit derselben
Eingabe. Oder rufe den Actor selbst von einem beliebigen Timer erneut auf.
Stoppe ihn mit derselben Eingabe & `"stop": true`.

Der Actor liest auch die Namen, die Agents raten, etwa `handles` & `usernames`,
& der Run-Status sagt, wie er sie gelesen hat.

## Was kostet ein Twitter-Monitor?

Auf jedem kostenpflichtigen Apify-Plan kostet eine monitor-hour $0.0045. 1
Account oder Stichwort ist 1 Monitor. Eine Eingabe mit 2 Accounts & 1 Stichwort
kostet 3 monitor-hours pro Stunde. Apify berechnet deine Plattformnutzung
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

Monitoring braucht einen
[kostenpflichtigen Apify-Plan](https://apify.com/pricing?fpr=xquik). Auf dem
kostenlosen Plan startet ein Run keinen Monitor & berechnet nichts. Stattdessen
zeigt er die 5 neuesten Tweets deines ersten Accounts, damit du siehst, was
Alerts enthalten würden.

## Limits & Wiederherstellung

- 1 Eingabe nimmt bis zu 100 Accounts & Stichwörter auf. Nutze 2 Tasks für mehr.
- Bis zu 10 Webhook-URLs pro Eingabe, plus Telegram.
- Events bleiben 30 Tage gespeichert, also kann `since` sie in dieser Zeit
  erneut speichern.
- Ein Run, der früh stoppt, lässt seine Events für den nächsten Run liegen.
  Keins geht verloren.
- Ein Run, der zwischen seiner Stundenreservierung & seiner Abrechnung endet,
  berechnet nichts. Diese Stunden gelten als bezahlt & bleiben kostenlos.
- Jeder Run schreibt 1 kostenlosen Status-Datensatz, also ist sein Dataset nie
  leer.
- Jeder Monitor-Actor von Xquik berechnet denselben Stundenpreis. Ein Run
  bezahlt die ältesten offenen Stunden all deiner Monitore, egal welcher Actor
  sie beobachtet hat.

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

## FAQ

Antworten auf häufige Fragen, danach, wo du Hilfe bekommst.

### Brauche ich X-Cookies, einen API-Schlüssel oder einen Login?

Nein. X (Twitter) Monitor von Xquik braucht keine X-Cookies, keinen
API-Schlüssel, keinen Login & keine Zugangsdaten. Jede Prüfung läuft auf der
Infrastruktur von Xquik.

### Wie überwache ich einen Twitter-Account?

Füge seinen Nutzernamen in `twitterHandles` ein, wähle die gewünschten Events &
füge einen Alert-Empfänger hinzu. Xquik erfasst jeden neuen Tweet meist in
weniger als einer Sekunde, nachdem X ihn zeigt, & jedes Event bleibt im Dataset.

### Kann er Krypto-Accounts & Coin-Erwähnungen überwachen?

Ja. Füge die Accounts hinzu, denen du folgst, oder eine Stichwortsuche wie ein
Cashtag oder eine Contract-Adresse. Neue Tweets dieser Accounts & passende
Tweets erreichen Discord oder Telegram als Alerts.

### Wie schnell kommen Alerts an?

Xquik erfasst einen neuen Tweet, eine Antwort, ein Zitat, einen Repost oder eine
Profiländerung eines beobachteten Accounts meist in weniger als einer Sekunde,
nachdem X sie zeigt. Der Alert zu einem Tweet erreicht dich meist etwa eine
Sekunde, nachdem X ihn zeigt. Alerts warten nie auf einen Run.

### Warum sagt der Run, dass Monitoring einen kostenpflichtigen Plan braucht?

Monitore laufen zwischen den Runs, den ganzen Tag. Deshalb brauchen sie einen
kostenpflichtigen Apify-Plan. Führe ein Upgrade durch & starte den Run dann
erneut mit derselben Eingabe.

### Was passiert, wenn ich den Monitor stoppe?

Der Run stoppt jedes Ziel & schaltet Alerts ab. Er berechnet die bis dahin
beobachteten Stunden. Dann wartet er etwa eine halbe Minute auf die neuesten
Events & speichert sie, damit keins zurückbleibt. Bereits aufbewahrte Events
bleiben 30 Tage lang lesbar.

### Wie prüfe ich eine Webhook-Signatur?

Ein neuer generischer Webhook bekommt ein Signatur-Secret, das 1-mal im Eintrag
`STATUS` erscheint. Xquik signiert jede Zustellung damit, so wie bei seinen
REST-Webhooks.

### Kann ich die API, Zeitpläne & Integrationen nutzen?

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

Öffne im [Issues-Tab](https://apify.com/xquik/x-twitter-monitor/issues) ein
Issue mit der Run-ID. Die Statusseite erklärt jeden Run, & kostenlose Diagnosen
decken Runs ab, die Aufmerksamkeit brauchen.

### Kann ich eine individuelle Lösung bekommen?

Ja. Beschreibe im
[Issues-Tab](https://apify.com/xquik/x-twitter-monitor/issues), was du brauchst.
Xquik bietet auch ein Dashboard, eine REST-API, einen MCP-Server & Webhooks. Die
Website von Xquik findest du auf seinem [Apify-Profil](https://apify.com/xquik).
