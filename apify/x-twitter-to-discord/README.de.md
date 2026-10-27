[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
**Deutsch** · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer verbindet Xquik MCP mit Coding-Agents](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Sieh dir an, wie Framer Xquik-Scraper nutzt](https://youtu.be/4UOSpoOoC3Y?t=367),
mit Claude Code, Codex, Cursor & mehr, ab Minute 6:07.

Xquik ist weltweit der schnellste & günstigste Scraper-Dienst für X (Twitter) &
liefert die vollständigsten X-Daten. X (Twitter) to Discord Bot von Xquik sendet
jeden neuen Tweet, jede Antwort, jedes Zitat & jeden Repost der Accounts, die du
auswählst, in deinen Discord-Kanal. Meist erfasst er jedes davon in weniger als
einer Sekunde, nachdem X es zeigt. Die meisten anderen Apify Actors rechnen ab,
bevor sie filtern oder Duplikate entfernen. Xquik rechnet nur gelieferte,
eindeutige Ergebnisse ab, & hier nur die Stunden, in denen ein Monitor
beobachtet.

Füge eine Discord-Webhook-URL & die zu beobachtenden Accounts ein, dann klicke
auf Start. Alerts kommen zwischen den Runs in deinem Kanal an, ohne Bot, den du
hosten oder einladen musst. Du zahlst **$0.0045 pro monitor-hour**. Events &
Alerts sind kostenlos, & Apify berechnet die Plattformnutzung separat.

> Xquik ist ein unabhängiger Drittanbieter-Dienst. Nicht verbunden mit X Corp.
> "Twitter" und "X" sind Marken von X Corp.

## Was der Twitter-zu-Discord-Bot sendet

- Jeder neue Tweet, jede Antwort, jedes Zitat & jeder Repost der Accounts, die
  du beobachtest, meist in weniger als einer Sekunde erfasst, nachdem X sie
  zeigt.
- Jeder neue Tweet, den die X-Suche unter Neueste für dein Stichwort zeigt, mit
  jedem X-Suchoperator.
- Live-Videos, Spaces, gelöschte Tweets, Profiländerungen, Follows & Follower,
  wenn du sie aktivierst.
- Jeder Alert als Discord-Nachricht, die den Account & das Event nennt, den Text
  des Tweets enthält & auf den Tweet auf X verlinkt. Keine Erwähnung in einem
  Tweet benachrichtigt jemanden.
- Eine Testnachricht an jede neue Discord-URL, mit deren Antwort im Run-Status.
- Jedes Event im Dataset des Runs & in 1 Verlaufs-Dataset pro gespeichertem Task
  oder Monitor-Namen.

## So sendest du Tweets an Discord

Monitoring braucht einen kostenpflichtigen Apify-Plan.
[Wähle einen Plan](https://apify.com/pricing?fpr=xquik), komm dann hierher
zurück & klicke auf Try for free.

1. Öffne in Discord die Einstellungen deines Kanals, dann Integrationen, dann
   Webhooks.
2. Erstelle einen Webhook & kopiere seine URL.
3. Öffne X (Twitter) to Discord Bot von Xquik in der Apify Console & füge die
   URL in `discordWebhookUrl` ein.
4. Füge Nutzernamen in `twitterHandles` oder X-Suchen in `searchTerms` ein.
5. Klicke auf Start. Das Monitoring beginnt in diesem Run, & der Kanal bekommt
   eine Testnachricht.
6. Füge einen Zeitplan hinzu, der den Actor jede Stunde mit derselben Eingabe
   startet.

Jeder spätere Run berechnet die beobachteten Stunden seit dem vorherigen Run. Er
speichert die neuen Events in seinem Dataset & endet schnell. Ein Monitor ohne
Run für 24 Stunden pausiert. Dein Kanal bekommt 4 Stunden vorher eine Warnung.
Der nächste Run setzt ihn fort & berechnet zuerst die offenen Stunden.

## Eingabe

| Feld                                                    | Funktion                                                                            |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `discordWebhookUrl`                                     | Die Webhook-URL deines Discord-Kanals.                                              |
| `twitterHandles`                                        | Nutzernamen mit oder ohne @ oder Profil-URLs von `x.com`, 1 pro Zeile.              |
| `searchTerms`                                           | X-Suchen wie `"x api" lang:en`. Jede Suche ist 1 Monitor.                           |
| `monitorName`                                           | Benennt diese Gruppe von Accounts & Stichwörtern, für Runs ohne gespeicherten Task. |
| `newPosts`, `replies`, `quotes`, `reposts`              | Neue Tweets, Antworten, zitierte Tweets & Reposts. Standardmäßig aktiv.             |
| `deletedPosts`, `liveVideos`                            | Gelöschte Tweets, Live-Videos & Spaces von Accounts.                                |
| `profileChanges`, `followingChanges`, `followerChanges` | Profiländerungen, Follows & Follower von Accounts.                                  |
| `eventTypes`                                            | Genaue Event-Typen, die die Checkboxen ersetzen.                                    |
| `webhookUrls`, `telegram`                               | Slack, jeder HTTPS-Webhook oder Telegram, neben Discord.                            |
| `since`                                                 | Speichert 1-mal die aufbewahrten Events seit einem Datum der letzten 30 Tage.       |
| `stop`                                                  | Stoppt den Monitor & schaltet Alerts ab.                                            |

1 Eingabe nimmt bis zu 100 Accounts & Stichwörter auf. Stichwörter senden nur
Tweet-Events. Ein Run ohne Discord-URL beobachtet trotzdem & speichert neue
Events in seinem Dataset, & sein Status sagt dir, dass du eine Webhook-URL
hinzufügen sollst.

Diese Eingaben sind kopierfertig.

```json
{
  "discordWebhookUrl": "https://discord.com/api/webhooks/000/XXXX",
  "twitterHandles": ["NASA"]
}
```

```json
{
  "discordWebhookUrl": "https://discord.com/api/webhooks/000/XXXX",
  "searchTerms": ["\"your game\" -from:yourstudio"],
  "monitorName": "game-mentions"
}
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
liefert, mit jedem Feld. Der Status-Eintrag enthält `state`, `targets`,
`destinations`, `eventsSaved`, `hoursCharged`, `paidThrough`, `pausesAt`,
`nextStep`, `nextStepAction` & `nextStepUrl`, so wie X (Twitter) to Discord Bot
sie zeigt.

Das Verlaufs-Dataset in deinem Account enthält jedes Event des Monitors, jedes
1-mal. Sein Name beginnt mit `x-monitor-`.

## Für KI-Agents

1 Aufruf ist die ganze API. Jeder Aufruf startet oder aktualisiert den Monitor,
berechnet die beobachteten Stunden seit dem vorherigen Aufruf & gibt nur Neues
zurück. Kein Aufruf berechnet eine Stunde 2-mal. Ein Aufruf, der einen Monitor
startet oder aktualisiert, endet schnell, innerhalb der Zeit, die Apifys MCP
wartet. Ein Stopp dauert etwa eine halbe Minute, weil er zuerst die letzten
Events sammelt.

Diese Eingabe startet einen Monitor oder setzt ihn fort.

```json
{
  "discordWebhookUrl": "https://discord.com/api/webhooks/000/XXXX",
  "twitterHandles": ["NASA"],
  "monitorName": "agent-demo"
}
```

Das Dataset des Runs enthält die neuen Events, dann 1 Datensatz mit `resultType`
`status`. Sein `state` sagt, ob der Monitor beobachtet, & `nextStep` sagt, was
als Nächstes zu tun ist. Um einen Monitor zu prüfen, rufe den Actor erneut mit
derselben Eingabe auf. Das ändert nichts & berechnet nur bereits beobachtete
Stunden.

Ein Monitor braucht mindestens 1-mal alle 24 Stunden einen Run, um weiter zu
beobachten. Apifys MCP-Server hat kein Zeitplan-Tool, also kannst du keinen
Zeitplan anlegen. Bitte den Nutzer, auf der Seite in `nextStepUrl` einen
Apify-Zeitplan hinzuzufügen. Er startet den Actor jede Stunde mit derselben
Eingabe. Stoppe ihn mit derselben Eingabe & `"stop": true`.

## Was kostet ein Twitter-zu-Discord-Bot?

Auf jedem kostenpflichtigen Apify-Plan kostet eine monitor-hour $0.0045. 1
Account oder Stichwort ist 1 Monitor. Apify berechnet deine Plattformnutzung
separat.

- 1 Account, 30 Tage lang an Discord gesendet, kostet etwa $3.24.
- 5 Accounts für 30 Tage kosten etwa $16.20.
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
zeigt er die 5 neuesten Tweets deines ersten Accounts.

## Limits & Wiederherstellung

- 1 Eingabe nimmt bis zu 100 Accounts & Stichwörter auf. Nutze 2 Tasks für mehr.
- Bis zu 10 Webhook-URLs pro Eingabe, plus Telegram.
- Events bleiben 30 Tage gespeichert, also kann `since` sie in dieser Zeit
  erneut speichern.
- Ein Run, der früh stoppt, lässt seine Events für den nächsten Run liegen.
  Keins geht verloren.
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
- [X (Twitter) Monitor](https://apify.com/xquik/x-twitter-monitor) erfasst jeden
  neuen Tweet, jede Antwort, jedes Zitat, jeden Repost & jede Profiländerung von
  Accounts, meist in weniger als einer Sekunde, nachdem X sie zeigt, dazu
  Stichwort-Tweets & Follows. Nutze ihn, wenn du Alerts brauchst, sobald X einen
  Tweet zeigt. Ab $0.0045 pro monitor-hour.

## FAQ

Antworten auf häufige Fragen, danach, wo du Hilfe bekommst.

### Brauche ich X-Cookies, einen API-Schlüssel oder einen Login?

Nein. X (Twitter) to Discord Bot von Xquik braucht keine X-Cookies, keinen
API-Schlüssel, keinen Login & keine Zugangsdaten. Jede Prüfung läuft auf der
Infrastruktur von Xquik.

### Muss ich einen Bot hosten oder einladen?

Nein. Discord postet jeden Alert über den Webhook deines Kanals. Auf deiner
Seite läuft nichts, & niemand muss etwas auf den Server einladen.

### Wie schnell kommen Tweets in Discord an?

Xquik erfasst einen neuen Tweet, eine Antwort, ein Zitat oder einen Repost eines
beobachteten Accounts meist in weniger als einer Sekunde, nachdem X sie zeigt.
Der Tweet erreicht Discord meist etwa eine Sekunde, nachdem X ihn zeigt. Alerts
warten nie auf einen Run.

### Kann ich Tweets zu Stichwörtern an Discord senden?

Ja. Füge X-Suchen in `searchTerms` ein. Jeder neue Tweet, den die X-Suche unter
Neueste für sie zeigt, erreicht den Kanal.

### Kann ich in mehr als 1 Kanal posten?

Ja. Trage die Webhook-URLs der anderen Kanäle in `webhookUrls` ein, bis zu 10
pro Eingabe.

### Warum sagt der Run, dass Monitoring einen kostenpflichtigen Plan braucht?

Monitore laufen zwischen den Runs, den ganzen Tag. Deshalb brauchen sie einen
kostenpflichtigen Apify-Plan. Führe ein Upgrade durch & starte den Run dann
erneut mit derselben Eingabe.

### Was passiert, wenn ich den Monitor stoppe?

Der Run stoppt jedes Ziel & schaltet Alerts ab. Er berechnet die bis dahin
beobachteten Stunden. Dann wartet er etwa eine halbe Minute auf die neuesten
Events & speichert sie, damit keins zurückbleibt. Bereits aufbewahrte Events
bleiben 30 Tage lang lesbar.

### Kann ich die API, Zeitpläne & Integrationen nutzen?

Ja. Nutze die Apify-API oder die REST-API von Xquik. Der
[API-Tab](https://apify.com/xquik/x-twitter-to-discord/api) enthält Beispiele
für Python, JavaScript & cURL.
Apify-[Zeitpläne](https://docs.apify.com/platform/schedules) halten den Monitor
am Laufen. Agents nutzen
[Apify MCP](https://docs.apify.com/platform/integrations/mcp).

### Ist es legal, X-Accounts zu überwachen?

X (Twitter) to Discord Bot von Xquik fragt öffentliche X-Daten ab. Ergebnisse
können personenbezogene Daten enthalten. Prüfe, ob dein Zweck rechtmäßig ist.
Befolge die Datenschutzregeln, die für dich gelten. Hol dir bei Unsicherheit
qualifizierten Rechtsrat.

### Wo bekomme ich Hilfe?

Öffne im [Issues-Tab](https://apify.com/xquik/x-twitter-to-discord/issues) ein
Issue mit der Run-ID. Die Statusseite erklärt jeden Run, & kostenlose Diagnosen
decken Runs ab, die Aufmerksamkeit brauchen.

### Kann ich eine individuelle Lösung bekommen?

Ja. Beschreibe im
[Issues-Tab](https://apify.com/xquik/x-twitter-to-discord/issues), was du
brauchst. Xquik bietet auch ein Dashboard, eine REST-API, einen MCP-Server &
Webhooks. Die Website von Xquik findest du auf seinem
[Apify-Profil](https://apify.com/xquik).
