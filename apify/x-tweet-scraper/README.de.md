[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
**Deutsch** · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer verbindet Xquik MCP mit Coding-Agents](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Sieh dir an, wie Framer Xquik-Scraper nutzt](https://youtu.be/4UOSpoOoC3Y?t=367),
mit Claude Code, Codex, Cursor & mehr, ab Minute 6:07.

Xquik ist weltweit der schnellste & günstigste Scraper-Dienst für X (Twitter) &
liefert die vollständigsten X-Daten. X Tweet Scraper von Xquik sammelt Posts,
Antworten, Profile, Listen & Suchergebnisse mit über 50 Filtern. Öffentliche
Benchmarks belegen, dass er unter 12 Tweet-Actors der günstigste & schnellste
ist. Seine Datensätze haben 2-mal so viele Felder wie die des Median-Actors, wie
der [Benchmark unten](#benchmark) zeigt. Die meisten anderen Apify Actors
rechnen ab, bevor sie filtern oder Duplikate entfernen. Xquik rechnet nur
gelieferte, eindeutige Ergebnisse ab, die zu deinen Filtern passen.

Scrape Tweets auf Twitter **ab $0.00015 pro geliefertem Ergebnis auf jedem
Apify-Plan**, als Alternative zur Twitter API. Apify berechnet die
Plattformnutzung separat. Du brauchst keinen X-Login & zahlst keine Start- oder
Abfragegebühr. Entwickelt von Xquik.

> Xquik ist ein unabhängiger Drittanbieter-Dienst. Nicht verbunden mit X Corp.
> "Twitter" und "X" sind Marken von X Corp.

## Was macht X Tweet Scraper?

X Tweet Scraper von Xquik liefert Posts, Interaktionskennzahlen, öffentliche
Autorenprofile & Medien. Er akzeptiert URLs, Nutzernamen, Listen-IDs, Post-IDs &
Suchanfragen mit über 50 Filtern.

### Anwendungsfälle

- Versorge Forschung, Anreicherung, Analysen & KI-Training mit Post-Texten,
  Autoren, Medien & Kennzahlen.
- Verfolge die Stimmung zu Marken über viele Posts.
- Beobachte Posts von Wettbewerbern & Begriffe deiner Branche.
- Finde potenzielle Kunden in öffentlichen Konversationen.
- Sammle öffentliche Datasets für die Forschung.
- Finde Posts mit hoher öffentlicher Interaktion.

## Warum X Tweet Scraper nutzen?

- **13,6-mal schnellere Suche.** Die Stichwortsuche lief 13,6-mal schneller als
  der schnellste von 4 anderen Tweet-Actors. Die gefilterte Suche lief 4,3-mal
  schneller, & eine Nutzer-Timeline etwa 3-mal. Der [Benchmark](README.md#benchmark) lief
  am 2026-10-15 & 2026-10-16.
- **Die niedrigsten Kosten pro nützlichem Tweet.** Er kostete in allen 3 Tests
  des [Benchmarks](README.md#benchmark) am wenigsten pro nützlichem Tweet.
- **Mehr Felder pro Tweet.** Sein Median-Datensatz der Stichwortsuche hatte 67
  Felder. Das ist das 1,3-Fache des Medians der anderen Actors im
  [Benchmark](README.md#benchmark).
- **Alle Quellen in 1 Run.** Mische Post-IDs, Nutzernamen, Listen, Suchen & URLs
  in 1 Eingabe. Setze `mode` für Antworten, Zitate, Threads, Erwähnungen,
  Reposter oder Artikel.
- **Finde die Top-Tweets auf X.** `mode: "topTweets"` liefert die Tweets, die X
  für 1 Kennzahl am höchsten einstuft, etwa Aufrufe. Grenze sie auf einen Tag,
  eine Woche oder einen Monat & ein Land ein.
- **Einbettungscode für jeden Tweet.** `mode: "embed"` liefert das HTML, das
  einen Tweet auf deiner Website zeigt.
- **Keine Obergrenze für Post-IDs.** Ruf beliebig viele Post-IDs in 1 Run ab.
  Datensätze kommen in deiner Eingabereihenfolge zurück. Dein Ausgabenlimit &
  dein Timeout gelten weiterhin.
- **Latest & Top in 1 Run.** Setze `queryType` auf `Latest + Top` für beide
  Suchreihenfolgen. Du zahlst für jeden Tweet nur einmal.

### Vollständige Ergebnisse

- Große Datumsbereiche kommen vollständig & schnell zurück.
- Suchen liefern jeden Treffer, egal welche Operatoren du kombinierst.
- Der Account-Verlauf kommt vollständig zurück, alte Posts inklusive.
- Profil-Posts ohne Antworten behalten trotzdem die eigenen Threads des Autors.
- Profilabrufe enthalten den angehefteten Post, als angeheftet markiert.
- Listen der Top-Tweets kommen zuverlässig zurück.
- Gefilterte Seiten kommen voll zurück, bis die Ergebnisse ausgehen.
- Jedes Ergebnis enthält die vollständigsten Daten, die X dafür hat.

### Genaue Datensätze

- Suchergebnisse enthalten jeden Post, der zu deiner Suchanfrage passt, & sonst
  nichts.
- Die Suche nach Wörtern & Phrasen funktioniert in jeder Sprache & Schrift.
- Sprachfilter funktionieren für jede Sprache, die X zuordnet.
- Ein Post gilt nur dann als fehlend, wenn er weg ist.
- Geschützte Accounts & private Listen bekommen eine klare Antwort statt einer
  leeren Seite.
- Reposts enthalten den vollständigen Originaltext.
- Jede ID in einem Datensatz bleibt exakt.
- Erwähnungen, Links, Hashtags & Hervorhebungen sitzen an der richtigen Stelle
  im Text.
- Ein unbekannter Zähler steht in `unknownCounts` & erscheint nie als 0.
- Verifizierungs-Badges stimmen mit dem überein, was `x.com` zeigt.
- Datensätze enthalten nur öffentliche Daten.
- Zitat-Suchen liefern jedes echte Zitat & sonst nichts.
- Antwort-Exporte enthalten nur direkte Antworten, in einer geprüften
  Reihenfolge.
- Ergebnisse mit den neuesten zuerst bleiben über alle Seiten hinweg in echter
  Datumsreihenfolge.
- Suchen akzeptieren Anfragen so, wie du sie auf X eintippen würdest.
- Ortssuchen funktionieren mit Namen in 6 Sprachen.
- Eine Suche, die nicht laufen kann, schlägt sofort fehl & sagt, wie du sie
  korrigierst.
- Ein Datum bedeutet in jeder gängigen Schreibweise dasselbe.
- Suchen akzeptieren die Grenzen `since_id` & `max_id`.
- Werbung & gesponserte Einträge landen nie in deinen Datensätzen.

### Aktuelle Daten

- Abrufe funktionieren weiter, wenn X Änderungen ausrollt.

### Tempo

- Eine langsame Seite hält deinen Run nicht auf.
- Suchen bleiben bei stark diskutierten Themen schnell.
- Jede nächste Seite kommt schnell an.
- Abrufe enden, sobald ihre Datensätze ankommen.
- Hängende Actor-Aufrufe laufen von selbst wieder an.

### Faire Abrechnung

- Eine fehlerhafte Eingabe kostet nichts & sagt dir, was du korrigieren musst.
- Eine Post-ID, die in einem Batch doppelt steht, wird nur einmal berechnet.
- Actors rechnen nur gelieferte, eindeutige, passende Datensätze ab.
- Ein neu gestarteter Run berechnet nie doppelt.
- Runs bleiben innerhalb deines Ausgabenlimits & schreiben trotzdem ihre
  Diagnosen.
- Kleine Runs enden mit einem Tipp, der Kosten senkt.

### Zuverlässigkeit

- Ein einzelner Fehler lässt deinen Run nicht scheitern.
- Die Paginierung bleibt von Seite zu Seite konsistent.
- Die Paginierung läuft nie in eine Endlosschleife.
- Ein Zeitlimit liefert die bereits gefundenen Datensätze samt Diagnosen.
- Actors überstehen kurze Xquik-Ausfälle.
- Actor-Runs überstehen Neustarts ohne Dopplungen.
- Ein fehlerhafter Datensatz lässt keinen Batch scheitern.
- Gestoppte Runs behalten ihre Datensätze & ihren Report.
- Ein Run, der nicht starten kann, erklärt trotzdem, warum.
- `stopCauses`, `failedSubtargets` & `unavailableTargets` beschreiben Teilfehler
  genau.
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
- Posts & Bios lassen sich in deine Sprache übersetzen.

### Qualitätsprüfungen

- Jedes Feld, das X zeigt, wird geliefert, bewusst weggelassen oder ist
  nachweislich nicht vorhanden.
- Xquik testet jeden Abruf live gegen X.

## Welche Daten kann X Tweet Scraper extrahieren?

| Feld                   | Beschreibung                                                        |
| ---------------------- | ------------------------------------------------------------------- |
| `id`                   | Post-ID                                                             |
| `text`                 | Vollständiger Text, inklusive Note Tweets bis 25.000 Zeichen        |
| `createdAt`            | Nativer X-Zeitstempel als String                                    |
| `likeCount`            | Anzahl der Gefällt-mir-Angaben                                      |
| `retweetCount`         | Anzahl der Reposts                                                  |
| `replyCount`           | Anzahl der Antworten                                                |
| `quoteCount`           | Anzahl der Zitate                                                   |
| `viewCount`            | Anzahl der Aufrufe                                                  |
| `bookmarkCount`        | Anzahl der Lesezeichen                                              |
| `lang`                 | Sprache des Posts                                                   |
| `url`                  | Direkter Link zum Post                                              |
| `tweetUrl`             | Alias der Post-URL in der flachen Ausgabe                           |
| `twitterUrl`           | `twitter.com`-URL in der flachen Ausgabe                            |
| `author`               | Nutzername, Bio, Website & Zähler des Autors                        |
| `authorUsername`       | Nutzername des Autors in der flachen Ausgabe                        |
| `authorFollowers`      | Follower-Anzahl des Autors in der flachen Ausgabe                   |
| `authorUrl`            | Website des Autors in der flachen Ausgabe, falls vorhanden          |
| `authorDescription`    | Bio-Text des Autors in der flachen Ausgabe                          |
| `authorCoverPicture`   | URL des Bannerbilds des Autors in der flachen Ausgabe               |
| `authorPinnedTweetIds` | IDs der angehefteten Posts des Autors in der flachen Ausgabe        |
| `media`                | Angehängte Bilder, Videos, GIFs                                     |
| `mediaUrls`            | Medien-URLs in der flachen Ausgabe                                  |
| `imageUrls`            | Bild-URLs in der flachen Ausgabe                                    |
| `videoUrls`            | Video-URLs in der flachen Ausgabe                                   |
| `entities`             | Hashtags, URLs, Erwähnungen und Video-Zeitmarken                    |
| `displayTextRange`     | Anzeigetextbereich von X, falls vorhanden                           |
| `contentDisclosure`    | Offenlegungsmetadaten, falls vorhanden                              |
| `conversationControl`  | Antworteinstellung und öffentlicher Inhaber der Konversation        |
| `reactionContext`      | Öffentlicher Post und Nutzer, auf die eine Reaktion verweist        |
| `subscriberBadge`      | Creator, den der Autor der Antwort abonniert hat                    |
| `limitedActions`       | Öffentliche Interaktionsbeschränkungen und Hinweise                 |
| `isLimitedReply`       | Ob Antworten eingeschränkt sind                                     |
| `isNoteTweet`          | Ob es ein Note Tweet ist (langer Post)                              |
| `isQuoteStatus`        | Ob dieser Post einen anderen Post zitiert                           |
| `isRetweet`            | Ob dieser Datensatz ein Repost ist, mit angehängtem Original        |
| `isPinned`             | Ob der Autor diesen Post angeheftet hat. Nur in flachen Datensätzen |
| `isReply`              | Ob dieser Post eine Antwort ist                                     |
| `quoted_tweet`         | Objekt des zitierten Posts (bei einem Zitat)                        |
| `conversationId`       | Thread- oder Konversations-ID                                       |
| `resultType`           | Datensatztyp für Rich-, Interaktions- & Diagnose-Datensätze         |
| `sourceTweetId`        | ID des Quellposts für Artikel- und Interaktionsmodi                 |
| `article`              | Strukturierte Artikeldaten in `mode: "article"`                     |
| `translation`          | Übersetzung von X in `mode: "translation"`                          |
| `embed`                | Einbettungs-HTML & Link in `mode: "embed"`                          |

Optionale Post-Metadaten umfassen `authorUnavailable`, `card`,
`cashtagAttachments`, `communityId`, `communityName`, `communityNote`, `edit`,
`exclusiveContent`, `noteTweet` & `postCta`. `isTranslatable`, `place`,
`possiblySensitive` & `viewState` enthalten weiteren öffentlichen Kontext.
`previousCounts` enthält die Interaktionswerte vor einer Bearbeitung.
`tombstone` enthält Hinweise zur Sichtbarkeit. `unmentionedUserIds` listet
Nutzer, die die Konversation verlassen haben. Die genauen Felder stehen in
OpenAPI.

Setze `outputVariant: "rich"` für die meisten Daten pro Datensatz.
Rich-Datensätze ergänzen am Ende `hasCommunityNotes`, `quotedTweetPermalink`,
`unavailableAuthorId` & `sourceUser` für Medien. Legacy-Datensätze bleiben
unverändert.

Verschachtelte `author`-Objekte enthalten öffentliche Profilfelder. Sie decken
Identität, Zähler, Verifizierung, Verfügbarkeit, berufliche Daten & Profil-Bios
ab.

Repost-Datensätze setzen `isRetweet` auf `true`. Ihr `text` enthält den
Originalpost vollständig. `retweeted_tweet` enthält den Originalpost mit seinem
Autor & seinen Zählern.

Post-Datensätze enthalten außerdem `type`, `source`, `inReplyToId`,
`inReplyToUserId`, `inReplyToUsername` & `retweeted_tweet`. Zitierte & repostete
Posts haben auf jeder Verschachtelungsebene dieselben Felder.

Medien enthalten Verfügbarkeit, Geometrie, Tags & Video-Varianten. Sie enthalten
auch die Aktionen `watchNowUrl` & `visitSiteUrl`.

Datensätze enthalten nie Angaben, die nur den Betrachter betreffen. Der Actor
entfernt Betrachter-Flags wie Folgen, Blockieren, Stummschalten, Lesezeichen,
Gefällt mir, Repost, Bearbeitungsrecht & Ähnliches. Auch die Raw-Ausgabe
verwirft sie.

## Wie scrape ich Tweet-Daten mit X Tweet Scraper?

Neu bei Apify?
[Erstelle zuerst einen kostenlosen Account](https://console.apify.com/sign-up?fpr=xquik).
Der kostenlose Plan braucht keine Kreditkarte & gibt dir jeden Monat $5 zum
Ausgeben. Bei $0.00015 pro Datensatz reichen $5 für bis zu 33.000 Datensätze,
vor Abzug der Plattformnutzung. Komm dann hierher zurück & klicke auf Try for
free.

Folge diesen Schritten in der Apify Console.

1. Öffne ein [Task-Beispiel](#task-beispiele) oder den Tab Input.
2. Füge URLs, Nutzernamen, Post-IDs oder Suchbegriffe hinzu.
3. Setze `maxItems` & die Filter, die du brauchst.
4. Klicke auf Start & warte, bis der Run fertig ist.
5. Exportiere das Dataset als JSON, CSV, Excel oder HTML.

Jedes Beispiel unten ist eine vollständige Eingabe für 1 Quelle. Wähle das, das
zu deinen Daten passt.

### URLs einfügen

Füge eine beliebige Mischung aus Post-, Profil-, Such- oder Listen-URLs ein.

```json
{
  "startUrls": [
    { "url": "https://x.com/jack/status/20" },
    { "url": "https://x.com/nasa" },
    { "url": "https://x.com/search?q=AI%20lang%3Aen" },
    { "url": "https://x.com/i/lists/1748648376080666720" }
  ],
  "maxItems": 500
}
```

Post-URLs liefern genau diese Posts, ohne Duplikate & in deiner
Eingabereihenfolge. Profil-URLs liefern die Posts des Accounts. Such-URLs führen
ihre Suchanfrage aus. Listen-URLs liefern die Posts der Liste. `maxItems`
begrenzt die Ergebnisse über alle eingefügten URLs.

### Viele Nutzernamen scrapen

Nutzernamen sind eine Kurzform für viele `from:username`-Suchen.

```json
{ "twitterHandles": ["elonmusk", "nasa", "openai"], "maxItems": 100 }
```

Jeder Nutzername liefert die Posts dieses Accounts. Der Actor entfernt doppelte
Datensätze vor Ausgabe & Abrechnung. Du kannst Nutzernamen mit oder ohne `@`
angeben. Nutzernamen & Profil-URLs behalten Reposts, wie der Tab Posts auf X.
Sie behalten sie auch mit Datum oder Filtern. Setze
`tweetTypes.excludeRetweets`, um sie zu entfernen.

### Posts suchen

Trage 1 oder mehrere Suchanfragen in das Feld Search terms ein.

```json
{
  "searchTerms": ["from:elonmusk AI", "#bitcoin lang:en"],
  "maxItems": 1000,
  "queryType": "Latest"
}
```

Steht `mode` auf `tweet` oder `tweets` & fehlen Post-IDs, laufen Suchanfragen
als Suche. Gültige `searchTerms` liefern dann nie einen leeren Abruf.

Mit Datumsfenstern holst du auch ältere Posts eines Accounts, etwa
`from:elonmusk since:2026-01-01 until:2026-01-02`. Jeder Begriff behält seine
eigene `searchTerm`-Zuordnung. `maxItems` begrenzt die Ergebnisse über alle
Suchbegriffe. Der Actor prüft jeden gelieferten Post gegen `since:`, `until:` &
Unix-Zeitfenster. Gefilterte Suchen lesen weiter, bis sie Treffer finden oder X
keine Ergebnisse mehr hat.

Ein `from:`-Suchbegriff liefert, was die X-Suche liefert. Reposts fehlen daher.
Füge `include:nativeretweets` hinzu, um sie zu behalten, oder
`filter:nativeretweets`, um nur Reposts zu erhalten.

### Posts nach ID abrufen

```json
{ "tweetIds": ["20", "2082577277246972300"], "maxItems": 100 }
```

Die Ergebnisse behalten deine Eingabereihenfolge, verwerfen Duplikate &
enthalten nur die Posts, die du angefragt hast. Der Abruf akzeptiert auch
`tweetId`, `tweetIDs`, `tweets`, `postIds`, `lookupPostIds`, `tweetUrls` &
`postUrls`.

Jeder Eintrag ist eine Post-ID oder eine Post-URL. Der Run überspringt jeden
anderen Eintrag kostenlos & liest den Rest. Sein Status zählt die übersprungenen
Einträge & sein Log listet sie.

Packe alle deine IDs in 1 Run. Jeder Run zahlt Apify dieselben Startkosten. Mit
1 ID pro Run kommen durch die Apify-Nutzung etwa $0.00008 pro Post dazu. Mit 188
IDs in 1 Run sind es etwa $0.000005. Ein Run mit weniger als 5 IDs endet mit
diesem Tipp.

### Interaktions-, Thread- & Artikelmodi

Setze `mode`, um festzulegen, was der Run liest, egal welche anderen Felder die
Eingabe enthält.

```json
{ "mode": "replies", "replyTweetIds": ["2082577277246972300"], "maxItems": 100 }
```

Post- & Suchmodi sind `tweet`, `tweets` & `search`. Profilmodi sind
`profileTweets`, `profileReplies`, `profileMedia`, `profileLikes` &
`profileMentions`. `listTweets` liest die Posts einer Liste, & `article` liest
den X-Artikel in einem Post. Modi für einen einzelnen Post sind `replies`,
`quotes`, `thread`, `retweeters`, `favoriters`, `translation` & `embed`.

`profileMentions` liefert die Posts, die jeden Nutzernamen erwähnen, neueste
zuerst.

```json
{ "mode": "profileMentions", "twitterHandles": ["nasa"], "maxItems": 100 }
```

`profileTweets` folgt dem Tab Posts im Profil auf X. Er liefert die Posts des
Accounts, seine Reposts & seine Antworten auf eigene Posts. Die Datensätze
kommen nach Datum sortiert. Der Actor verwirft Antworten an andere Accounts vor
der Abrechnung. Er verwirft auch Konversationskontext anderer Autoren.

Willst du nur Originalposts, schließe die Typen aus, die du nicht willst.

```json
{
  "mode": "profileTweets",
  "twitterHandles": ["apify"],
  "tweetTypes": { "excludeReplies": true, "excludeRetweets": true },
  "maxItems": 100
}
```

`tweetTypes.excludeReplies`, `excludeRetweets` & `excludeQuotes` funktionieren
bei jeder Quelle. Eine Suche sendet sie als `-filter:replies`,
`-filter:nativeretweets` & `-filter:quote` an X. Bei einem Profil oder einer
Liste verwirft der Actor diese Datensätze selbst. Ausgeschlossene Datensätze
erreichen nie das Dataset, du zahlst also nie für sie. Sie zählen auch nie zu
`maxItems`.

`profileReplies` folgt dem Tab Antworten auf X. Er liefert die eigenen Posts &
Antworten des Accounts. Der Actor schließt Konversationskontext anderer Autoren
aus. Nutze `filter:replies` oder eine `to:`-Suche, wenn du nur Antworten willst.

Such- & paginierte Post-Modi unterstützen `time.since`, `time.until`,
Unix-Zeitstempel & `lang`. Dazu gehören die Profil-Tabs Posts, Antworten, Medien
& Gefällt mir sowie Listen, Antworten, Zitate & Threads. Passende flache
Datumsoperatoren funktionieren auch. Der Actor prüft jeden Datensatz vor der
Abrechnung. Die untere Datumsgrenze ist inklusiv. Die obere Grenze ist exklusiv.
Datumsfilter schließen Datensätze ohne verwendbares Datum aus. Sprachfilter
schließen fehlende oder abweichende Sprachen aus. Gefilterte Datensätze
verbrauchen nie dein Ergebnislimit.

Dasselbe Datum für `since` & `until` ergibt ein leeres Fenster. Setze `until`
auf den nächsten Tag, um 1 vollen Tag zu erhalten. Listen-Runs mit Datumsfenster
erreichen ältere Tage schnell. Sie enden, sobald sie deine untere Grenze
passieren. Bei Fenstern weit zurück in einer Liste können einzelne Antworten
fehlen. Post-Filter gelten nicht für Nutzerlisten oder direkte Abrufe von Posts
oder Artikeln.

`time.withinTime` & `within_time` funktionieren in denselben Modi. Der Wert `7d`
behält die letzten 7 Tage, bevor der Run zu lesen beginnt. Ein Fenster, das vor
2006 zurückreicht, behält jeden Post.

`mode: "replies"` ist strenger. Bei jedem Post-Datensatz entspricht
`inReplyToId` der angefragten Post-ID. Verschachtelte Antworten in der
Konversation zählen nie als direkte Antworten. Zeigt X weniger Antworten, als es
meldet, behält der Actor die gefundenen Datensätze. Ist dein Limit nicht
erreicht, fügt er 1 `replies-incomplete`-Eintrag zu `diagnostics` hinzu. Der Run
bleibt unvollständig, bis er dein Limit erreicht oder X keine Antworten mehr
hat. `replyCoverage` meldet Antwortzahlen & Details zur Abdeckung. Setze
`maxItems` auf die gewünschte Gesamtzahl, auch über 25.000 für 1 Antwortziel.

Artikel-Datensätze enthalten `resultType: "article"`, `sourceTweetId`, `article`
& optional `author`. Nutzer-Datensätze aus Interaktionsmodi enthalten
`resultType: "user"`, `sourceTweetId` & `engagementMode`.

Reposter funktionieren als normaler öffentlicher Interaktionsmodus. Liker
liefert der Actor nach bestem Bemühen. X zeigt Liker eventuell nur bei
berechtigten Posts oder nur dem Inhaber des Posts. Auch die Gefällt-mir-Angaben
eines Profils liefert er nach bestem Bemühen, denn viele öffentliche Profile
haben keinen lesbaren Tab Gefällt mir. Zeigt X keine Nutzer oder mit Gefällt mir
markierten Posts, sagt der Status des Runs das. Post-Datensätze können
Lesezeichen-Zahlen enthalten. X zeigt nicht, welche Accounts einen Post als
Lesezeichen gespeichert haben.

### Posts übersetzen & Einbettungs-HTML abrufen

`mode: "translation"` liefert die Übersetzung von X für jeden Post. Setze
`translateTo` auf einen Sprachcode wie `en`, `es`, `pt-br` oder `zh-tw`. Der
Standard ist `en`.

```json
{
  "mode": "translation",
  "tweetIds": ["2082577277246972300"],
  "translateTo": "es"
}
```

Jeder Datensatz hat `resultType: "translation"`, `sourceTweetId` &
`translation`. Dieses Objekt enthält `language`, `sourceLanguage`, `text` &
`entities`.

`mode: "embed"` liefert das HTML, das jeden Post auf einer Website einbettet.

```json
{ "mode": "embed", "tweetIds": ["2082577277246972300"], "embedTheme": "dark" }
```

Jeder Datensatz hat `resultType: "embed"`, `sourceTweetId` & `embed`. Dieses
Objekt enthält `url`, `authorName`, `authorUrl`, `html` & `width`.
`embedHideMedia`, `embedHideThread` & `embedOmitScript` lassen Medien, den
übergeordneten Post oder das Widget-Skript weg.

Beide Modi nehmen Post-IDs oder Post-URLs in `tweetIds`. `startUrls` nimmt
ebenfalls Post-URLs. Jeder Post ergibt 1 Datensatz zum üblichen Preis pro
Datensatz. Ein Post, den X nicht hat, ergibt keinen Datensatz & keine Gebühr.

### Die Top-Posts auf X abrufen

`mode: "topTweets"` liefert die Posts, die X nach 1 Kennzahl am höchsten
einstuft, so wie die Inspiration-Seite von X sie zeigt.

```json
{
  "mode": "topTweets",
  "topMetric": "views",
  "topWindow": "week",
  "topCountry": "US",
  "maxItems": 100
}
```

`topMetric` ist `likes`, `replies`, `quotes`, `bookmarks`, `shares` oder
`views`. Der Standard ist `likes`. `topWindow` ist `day`, `week` oder `month`, &
der Standard ist `day`. X listet bis zu 100 Posts pro Auswahl. Lass `topCountry`
leer für ganz X. Setze `lang`, um 1 Sprache zu behalten. Sind beide gesetzt,
wählt X das Land & der Actor behält die Sprache. Jeder Datensatz hat
`engagementMode: "topTweets"` & kostet 1 Ergebnis, wie jeder Post.

### Flache CSV-Datensätze exportieren

Behalte die verschachtelten JSON-Standardfelder oder ergänze tabellenfreundliche
Spalten.

```json
{ "searchTerms": ["from:nasa moon"], "maxItems": 100, "outputPreset": "flat" }
```

Die flache Ausgabe lässt `author` & `media` unverändert. Sie ergänzt Felder auf
oberster Ebene wie `authorUsername`, `authorName`, `authorFollowers`,
`tweetUrl`, `twitterUrl`, `mediaUrls`, `imageUrls` & `videoUrls`.

Jeder flache Post-Datensatz enthält `media`. Ein Post ohne Medien hat eine leere
Liste. So hat jeder Datensatz dieselben Schlüssel in einer Tabelle oder einer
typisierten Pipeline.

### Feldnamen wählen

Standard sind die Legacy-Feldnamen. Wähle einen Stil für Rich- oder
Raw-Ergebnisse.

```json
{
  "searchTerms": ["from:nasa moon"],
  "maxItems": 100,
  "outputVariant": "rich",
  "fieldStyle": "snake_case"
}
```

Nutze `camelCase` oder `snake_case` für Ergebnisfelder auf oberster &
verschachtelter Ebene. Die flache Snake-Case-Ausgabe enthält Felder wie
`author_username` & `media_urls`. Sichere Quell-Snapshots unter `raw` behalten
ihre ursprünglichen Quellschlüssel. Kollidierende Quellnamen bleiben ebenfalls
unverändert, damit keine Daten verloren gehen.

Legacy-Diagnosen nutzen `resultType`, `actorVersion` & `replyCoverage`. Rich- &
Raw-Ausgaben wenden `fieldStyle` auf jeder Verschachtelungsebene an. Snake Case
nutzt zum Beispiel `result_type`, `actor_version` & `reply_coverage`. Die
Dataset-Ansicht Overview funktioniert mit beiden Stilen. Wähle die
Console-Ansicht, die zum `fieldStyle` des Runs passt. `camelCase fields`
erwartet `camelCase`. `snake_case fields` erwartet `snake_case`. Ansichten
wählen nur Spalten aus. Sie benennen gespeicherte oder exportierte Daten nie um.

### Erweiterte Filter kombinieren

Kombiniere Filter für Nutzer, Datum, Standort, Medien & Interaktion.

```json
{
  "twitterContent": "AI",
  "from": "elonmusk",
  "since": "2026-01-01_00:00:00_UTC",
  "until": "2026-03-01_00:00:00_UTC",
  "lang": "en",
  "filter:media": true,
  "min_faves": 1000,
  "maxItems": 500
}
```

Setze `queryType: "Latest + Top"`, um beide X-Suchmodi in 1 Run zu nutzen. Der
Actor entfernt Duplikate vor der Abrechnung & füllt dein Limit aus beiden Modi.
`Top` sortiert nach Relevanz & liefert nicht jeden Treffer. Setze
`includeSearchTerms: true`, um jede passende Suchanfrage als Feld `searchTerm`
anzuhängen.

Setzt du `lang`, prüft der Actor die Sprache jedes gelieferten Posts. Er
überspringt abweichende Posts & liest weiter, bis er passende findet.

## Task-Beispiele

Wähle aus 50 öffentlichen Tasks. Jeder hat eine begrenzte Eingabe & eine
passende Dataset-Ansicht. Jeder Task startet mit einer echten Suche oder einem
echten Ziel. Passe ihn an, bevor du ihn startest.

- [Hol aktuelle X-Posts für KI-Agents](https://apify.com/xquik/x-tweet-scraper/examples/search-x-posts-for-ai-agents)
- [Erstelle ein X-Dataset für RAG](https://apify.com/xquik/x-tweet-scraper/examples/build-x-rag-dataset)
- [Extrahiere einen X-Artikel für RAG](https://apify.com/xquik/x-tweet-scraper/examples/extract-x-article-for-rag)
- [Beobachte die Sichtbarkeit in der KI-Suche auf X](https://apify.com/xquik/x-tweet-scraper/examples/monitor-ai-search-visibility-on-x)
- [Durchsuche Twitter nach Datum](https://apify.com/xquik/x-tweet-scraper/examples/search-twitter-by-date)
- [Entdecke Tools für KI-Agents auf X](https://apify.com/xquik/x-tweet-scraper/examples/discover-ai-agent-tools-on-x)
- [Sammle Feedback zu KI-Produkten](https://apify.com/xquik/x-tweet-scraper/examples/collect-ai-product-feedback)
- [Beobachte Markenerwähnungen auf X](https://apify.com/xquik/x-tweet-scraper/examples/monitor-brand-mentions-on-x)
- [Exportiere Twitter-Daten als CSV](https://apify.com/xquik/x-tweet-scraper/examples/export-twitter-data-to-csv)
- [Sammle Antworten auf einen Post von OpenAI](https://apify.com/xquik/x-tweet-scraper/examples/collect-replies-to-an-openai-post)
- [Extrahiere einen vollständigen Twitter-Thread](https://apify.com/xquik/x-tweet-scraper/examples/extract-complete-twitter-thread)
- [Sammle Konversationen über Elektroautos](https://apify.com/xquik/x-tweet-scraper/examples/collect-electric-vehicle-conversations)

## Was kostet es, Tweets zu scrapen?

X Tweet Scraper von Xquik kostet $0.00015 pro geliefertem Datensatz auf jedem
Apify-Plan. Apify berechnet deine Plattformnutzung separat. Xquik berechnet 1
Gebühr pro geliefertem Datensatz. Diagnosen in der Ausgabe `diagnostics` sind
kostenlos.

Brauchst du mehr Volumen, dann
[wähle einen Apify-Plan](https://apify.com/pricing?fpr=xquik) mit mehr
vorausbezahlter Nutzung.

- Du brauchst kein Xquik-Abonnement.
- Du zahlst keine separate Start- oder Abfragegebühr. Auch URLs & einzelne
  Post-Abrufe kosten keine Gebühr.
- Filter & Deduplizierung laufen vor der Abrechnung. Gefilterte oder doppelte
  Datensätze zahlst du nie.
- Runs ohne Eingabe & mit ungültiger Eingabe schreiben 1 Eintrag mit
  Handlungshinweis in die kostenlose Ausgabe `diagnostics`. Das gilt auch für
  Runs, die früh stoppen, ein Ziel überspringen oder deren eigene Filter jeden
  Datensatz entfernen, etwa `lang` beim Lesen eines Profils.
- Ein Run, der jedes Ziel liest & keinen Datensatz zurückbekommt, schreibt
  keinen Eintrag. Sein Status sagt, warum & was du ändern solltest. Auch für
  Datensätze, die deine Suchoperatoren ausschließen, etwa `-is:retweet`,
  entsteht kein Eintrag.

Ein Run mit einem Problem oder ein großer Run schreibt zusätzlich einen
`run-report`-Eintrag. Dessen `estimatedChargeUsd` nutzt den aktuellen
Pay-per-Event-Preis von Apify. Runs mit einem Problem schreiben immer
`run-report`, auch bei Abbrüchen ohne Eingabe und mit ungültiger Eingabe. Ein
kleiner Run ohne Probleme überspringt ihn & spart Apify-Nutzung. Aktiviere
`alwaysSaveRunRecords`, um ihn bei jedem Run zu schreiben. Run-Reports trennen
Datensätze mit Daten in `realRows` von Diagnosen in `diagnosticRows`.

Wie du die Ausgaben eines Runs begrenzt, steht unter
[Run-Optionen](#run-optionen).

## Benchmark

X Tweet Scraper von Xquik schlug 11 andere Tweet-Actors bei Kosten & Tempo. Sein
Median-Datensatz hatte 63 Felder, das 2-Fache des Medians der anderen.

- `xquik/x-tweet-scraper` lieferte 890 nützliche Posts zu $0.000175 pro
  nützlichem Post, mit 39,2 pro Sekunde & 63 Feldern pro Datensatz.
  [Run ansehen](https://console.apify.com/view/runs/fflWVxHwYvtyHpAQX)
- `xquik/x-tweet-scraper` lieferte 883 nützliche Posts zu $0.000176 pro
  nützlichem Post, mit 25,2 pro Sekunde & 63 Feldern pro Datensatz.
  [Run ansehen](https://console.apify.com/view/runs/EtSdBgkUcH4M1uicf)
- `xquik/x-tweet-scraper` lieferte 882 nützliche Posts zu $0.000177 pro
  nützlichem Post, mit 25,7 pro Sekunde & 63 Feldern pro Datensatz.
  [Run ansehen](https://console.apify.com/view/runs/SK3ZWhPwzGJYoYQba)
- `xquik/x-tweet-scraper` lieferte 877 nützliche Posts zu $0.000178 pro
  nützlichem Post, mit 26,9 pro Sekunde & 63 Feldern pro Datensatz.
  [Run ansehen](https://console.apify.com/view/runs/JRdbcigkBMCaFuH1W)
- `scrapesmith/twitter-x-scraper-tweets-profiles-replies` lieferte 813 nützliche
  Posts zu $0.000185 pro nützlichem Post, mit 10,5 pro Sekunde & 36 Feldern pro
  Datensatz.
  [Run ansehen](https://console.apify.com/view/runs/mIT1zf0xccCsYWO1E)
- `scrapesmith/twitter-x-scraper-tweets-profiles-replies` lieferte 805 nützliche
  Posts zu $0.000187 pro nützlichem Post, mit 10,6 pro Sekunde & 36 Feldern pro
  Datensatz.
  [Run ansehen](https://console.apify.com/view/runs/p1MUeElsamZUepTpm)
- `scrapesmith/twitter-x-scraper-tweets-profiles-replies` lieferte 805 nützliche
  Posts zu $0.000187 pro nützlichem Post, mit 10,7 pro Sekunde & 36 Feldern pro
  Datensatz.
  [Run ansehen](https://console.apify.com/view/runs/pQlQa0GMm7BWTUUOB)
- `kaitoeasyapi/twitter-x-data-tweet-scraper-pay-per-result-cheapest` lieferte
  880 nützliche Posts zu $0.000250 pro nützlichem Post, mit 9,1 pro Sekunde & 46
  Feldern pro Datensatz.
  [Run ansehen](https://console.apify.com/view/runs/3Fn8yvqncsWdcw1I2)
- `scraper_one/x-posts-search` lieferte 804 nützliche Posts zu $0.000314 pro
  nützlichem Post, mit 3,3 pro Sekunde & 14 Feldern pro Datensatz.
  [Run ansehen](https://console.apify.com/view/runs/M9TgeCLLKZlNTOrj0)
- `danek/twitter-scraper` lieferte 807 nützliche Posts zu $0.000347 pro
  nützlichem Post, mit 5,0 pro Sekunde & 27 Feldern pro Datensatz.
  [Run ansehen](https://console.apify.com/view/runs/kyeJqCeaARxQPGM5W)
- `tweetapi/twitter-x-search-scraper` lieferte 337 nützliche Posts zu $0.000374
  pro nützlichem Post, mit 2,6 pro Sekunde & 28 Feldern pro Datensatz.
  [Run ansehen](https://console.apify.com/view/runs/mxkP8EDAUVtCZdobb)
- `api-ninja/x-twitter-advanced-search` lieferte 837 nützliche Posts zu
  $0.000430 pro nützlichem Post, mit 7,4 pro Sekunde & 28 Feldern pro Datensatz.
  [Run ansehen](https://console.apify.com/view/runs/XAWKinvZyPNjCwrib)
- `apidojo/twitter-scraper-lite` lieferte 251 nützliche Posts zu $0.000494 pro
  nützlichem Post, mit 12,9 pro Sekunde & 54 Feldern pro Datensatz.
  [Run ansehen](https://console.apify.com/view/runs/1t4XwmbQNTtwMJ0Ta)
- `apidojo/tweet-scraper` lieferte 481 nützliche Posts zu $0.000832 pro
  nützlichem Post, mit 7,8 pro Sekunde & 55 Feldern pro Datensatz.
  [Run ansehen](https://console.apify.com/view/runs/PydoBgS1YRblg29bB)
- `xtdata/twitter-x-scraper` lieferte 1.378 nützliche Posts zu $0.001168 pro
  nützlichem Post, mit 11,9 pro Sekunde & 67 Feldern pro Datensatz.
  [Run ansehen](https://console.apify.com/view/runs/U91dRXEvKvqu41aop)
- `seemuapps/x-tweet-scraper` lieferte 805 nützliche Posts zu $0.001242 pro
  nützlichem Post, mit 6,9 pro Sekunde & 24 Feldern pro Datensatz.
  [Run ansehen](https://console.apify.com/view/runs/FstursEw43TbcipYU)
- `maximedupre/twitter-scraper` lieferte 46 nützliche Posts zu $0.002846 pro
  nützlichem Post, mit 0,3 pro Sekunde & 31 Feldern pro Datensatz.
  [Run ansehen](https://console.apify.com/view/runs/Hs8irhEcAfWcQNc4w)

Jeder Actor lief mit derselben Suche & denselben Filtern. Die anderen Actors
liefen am 2026-09-27. Die Runs von Xquik setzten `outputVariant: "rich"` &
liefen am 2026-09-29. Alle Runs nutzten die Stufe Bronze. Ein nützlicher Post
ist ein eindeutiger englischer Originalpost mit 10+ Likes. Kosten sind die
Gesamtausgaben des Kunden pro nützlichem Post. Unsere enthalten die
Apify-Nutzung, die unsere Kunden zahlen. Felder pro Datensatz ist der Median der
nicht leeren Felder, verschachtelte inklusive. Eine Liste zählt als 1 Feld.
Öffne einen Run für seine Eingabe, sein Log & sein Dataset.

## Leere, unvollständige & gestoppte Runs

X Tweet Scraper von Xquik erklärt leere, unvollständige & gestoppte Runs
kostenlos. Der Run-Status sagt, warum der Run gestoppt hat. Er zählt auch
berechnete Ergebnisse & gelesene Ziele.

### Leere Ergebnisse

Prüfe ein leeres Ergebnis, bevor du für einen weiteren Run zahlst. Das Objekt
`filtering` in Berichten & finalen Diagnosen zählt die Datensätze, die deine
Filter entfernt haben. Lies `serverFilteredRows`, `actorFilteredRows` &
`pagesWithUnknownServerFiltering`. Für gefilterte Datensätze zahlst du nie
Ergebnisgebühren. Ein Run schreibt 1 Diagnose mit diesen Zahlen, wenn die
eigenen Filter des Actors Datensätze entfernt haben (`actorFilteredRows`).
Datensätze, die deine Suchoperatoren ausschließen (`serverFilteredRows`), Posts
außerhalb deines Zeitfensters & ein Run ganz ohne Datensatz schreiben keinen
Eintrag. Der Status sagt dann, warum & was du ändern solltest, etwa eine
breitere Suche.

Ein Run kann unter deinem Limit enden, wenn X keine Ergebnisse mehr hat. Er
meldet dann `outcome: "complete"` mit `completionReason: "source_exhausted"`.
Unterbrochene Runs behalten ihr Teilergebnis & ihre Hinweise zur Wiederholung.

### Unvollständige Runs

`failedSubtargets` zählt Suchanfragen & Profilziele, die nach einem Fehler
gestoppt haben. Gelieferte Datensätze bleiben im Dataset & zählen zur
Abrechnung. Ein Fehler bedeutet nie, dass das Ziel fehlt. Diese Runs nutzen
`completionReason: "partial_failure"`.

Ein unterbrochener Run schreibt außerdem eine kostenlose `partial`-Diagnose.
Bereits gelieferte Ergebnisse bleiben erhalten. Die Diagnose meldet
`availableResults`, `failedTargets`, `retryable` & `nextAction`. Ein
erfolgreicher Actor-Abschluss bestätigt die Lieferung. Er bestätigt keine
vollständige Extraktion.

### Stoppursachen

Der Statustext nennt jede Ursache für den Stopp. Ein Run mit einem fehlenden
Account & einer stockenden Suche nennt beide. `stopCauses` listet jede Ursache
mit eigenen Feldern `message`, `retryable` & `nextAction`. Die Ursachen sind
`target_not_found`, `target_suspended`, `target_protected`,
`search_unavailable`, `likes_hidden`, `target_failed`,
`pagination_safety_limit`, `reply_reach` & `deadline_reached`. Der Run ist
`retryable`, wenn mindestens 1 Ursache es ist.

### Fehlende & nicht verfügbare Ziele

Ein fehlendes oder geschütztes Ziel ist kein Fehler. X hat dort nichts zu lesen.
Der Run liest jedes andere Ziel bis zum Ende. Er meldet `outcome: "complete"`.
Sein Abschlussgrund stammt von den gelesenen Zielen, etwa `source_exhausted`.
`failedSubtargets` lässt diese Ziele weg. Der Statustext & eine kostenlose
`complete`-Diagnose zählen sie. Ein Run ohne andere Datensätze schreibt
stattdessen eine `zero-output`-Diagnose.

Eine Suche, die X nicht ausführen kann, zählt als Fehler. X zeigt für eine
solche Suche "Etwas ist schiefgelaufen". Der Run stoppt sie sofort ohne
Wiederholung. Gefällt-mir-Angaben, die X verbirgt, zählen ebenfalls als Fehler &
stoppen sofort. X zeigt nur dem Autor, wer seinen Post mit Gefällt mir markiert
hat. Die mit Gefällt mir markierten Posts eines Accounts zeigt X nur diesem
Account.

Betreffen alle Fehler nicht verfügbare Ziele, setzen die Diagnosen
`retryable: false`. Prüfe Ziel-URLs oder Nutzernamen & wähle verfügbare
öffentliche Accounts. Grenze eine Suche, die X nicht ausführen kann, ein oder
ändere ihre Filter. Lies Reposter, Antworten oder Posts statt verborgener
Gefällt-mir-Angaben. Andere Fehler behalten Hinweise zur Wiederholung für nicht
abgeschlossene Ziele.

Die Diagnose nennt diese Ziele in `unavailableTargets`. Jeder Eintrag hat das
`target` so, wie du es eingegeben hast, einen `reason` & eine `nextAction`. Der
Grund ist `not_found`, `list_not_found`, `suspended`, `protected`,
`search_unavailable` oder `likes_hidden`. `list_not_found` markiert eine Liste,
die X nicht gefunden hat & die privat sein kann. Ein Sucheintrag kann auch einen
`fix` haben, etwa den Operator, den du entfernen sollst. Die Liste fasst bis zu
100 Einträge. Entferne diese Ziele aus deiner Eingabe.

### Sicherheits- & Zeitlimits

`completionReason: "pagination_safety_limit"` ist kein Lesefehler. Der Run hat
seine gültigen Datensätze behalten. Danach hat er ein Ziel beendet, das keine
neuen Ergebnisse mehr lieferte. Der Run meldet eine unvollständige Extraktion.
`failedSubtargets` bleibt `0`. Du zahlst nur für gelieferte Datensätze.

Das Standard-Timeout von Apify ist `0`, Runs haben also kein Zeitlimit. Der
Actor läuft weiter, bis er dein Limit erreicht oder keine passenden Daten mehr
findet. Du kannst trotzdem ein festes Apify-Timeout setzen. Dann bedeutet
`completionReason: "deadline_reached"`, dass dieses Limit nahe ist. Der Actor
speichert Datensätze & den Bericht & beendet sich dann sauber vor dem Limit. Du
zahlst einmal für jeden gelieferten Datensatz.

## Eingabe

Der Tab Input listet jede Option. Gib mindestens eines der Felder `startUrls`,
`twitterHandles`, `listIds`, `tweetIds`, `searchTerms` oder `twitterContent` an.
Ihre dokumentierten Aliasse funktionieren auch. Jedes andere Feld ist optional.

Jede dieser Eingaben reicht für einen Run.

- Füge eine Post-URL unter Start URLs ein.
- Füge eine Profil-URL ein oder trage den Nutzernamen unter X handles ein.
- Nutze `from:user since:YYYY-MM-DD until:YYYY-MM-DD` als Suchbegriff, um ältere
  Posts eines Accounts zu holen.
- Füge eine Listen-URL unter Start URLs ein.
- Kombiniere `twitterContent` mit Filtern wie `from:`, `since:`, `min_faves:` &
  `filter:media` für erweiterte Suchen.

### Die wichtigsten unterstützten Suchoperatoren

| Operator                 | Beispiel                  | Zweck                                          |
| ------------------------ | ------------------------- | ---------------------------------------------- |
| `from:`                  | `from:elonmusk`           | Nur Posts dieses Nutzers                       |
| `to:`                    | `to:OpenAI`               | Nur Antworten an diesen Nutzer                 |
| `@`                      | `@nasa`                   | Erwähnungen dieses Nutzers                     |
| `list:`                  | `list:123456`             | Posts von Listenmitgliedern                    |
| `lang:`                  | `lang:en`                 | Filter nach Sprache                            |
| `since:` / `until:`      | `since:2026-01-01`        | Datumsbereich                                  |
| `min_faves:`             | `min_faves:100`           | Schwelle für Interaktionen                     |
| `min_retweets:`          | `min_retweets:50`         | Schwelle für Reposts                           |
| `filter:media`           | `filter:media`            | X-Suchoperator für Medien                      |
| `filter:videos`          | `filter:videos`           | X-Suchoperator für Videos                      |
| `filter:images`          | `filter:images`           | X-Suchoperator für Bilder                      |
| `filter:links`           | `filter:links`            | Nur Posts mit Links                            |
| `filter:replies`         | `filter:replies`          | Nur Antworten                                  |
| `filter:quote`           | `filter:quote`            | Nur Zitate                                     |
| `filter:blue_verified`   | `filter:blue_verified`    | Nur Premium-Nutzer                             |
| `-filter:replies`        | `-filter:replies`         | Keine Antworten                                |
| `-filter:nativeretweets` | `-filter:nativeretweets`  | Keine Reposts                                  |
| `-filter:quote`          | `-filter:quote`           | Keine Zitate                                   |
| `OR`                     | `(from:nasa OR from:esa)` | Posts, die zu einem der beiden Begriffe passen |
| `#`                      | `#bitcoin lang:en`        | Posts mit diesem Hashtag                       |

X sucht nicht mehr nach `filter:vine`, `filter:consumer_video`,
`filter:pro_video`, `filter:news` oder `retweets_of:`. Eine Suche mit einem
davon endet sofort. Eine kostenlose Diagnose nennt die Lösung. Halte jede
Suchanfrage bei höchstens 512 Zeichen. Mehr durchsucht X nicht.

Datumsfenster schließen die untere Grenze ein & die obere aus. Der Actor prüft
beide Grenzen, bevor er einen Post hinzufügt oder abrechnet.

Die vollständige Operatorliste findest du in den
[Twitter advanced search operators](https://github.com/Xquik-dev/x-twitter-advanced-search)
von Xquik.

### Von einem anderen Tweet-Actor wechseln

Füge die Eingabe ein, die du schon nutzt. X Tweet Scraper von Xquik liest die
Feldnamen, die andere Tweet-Actors nutzen. Er ordnet sie seinen eigenen Feldern
zu. Kanonische Namen bleiben der dokumentierte Standard. Ein Alias verwirft nie
ein Feld & ändert nie, was du zahlst. Das Eingabeformular listet nur kanonische
Felder, damit es kurz bleibt. Aliasse funktionieren in JSON, API, SDK,
Automatisierungen & gespeicherten Task-Eingaben.

Jede Zeile nennt die Felder, die du schon nutzt, dann das Feld, dem sie
zugeordnet werden.

- `startUrls`, `urls`, `tweetUrls`, `postUrls`, `profileUrls`, `accountUrls`
  werden `startUrls` zugeordnet.
- `profileUrl` als einzelner String wird `startUrls` zugeordnet.
- `tweetIds`, `tweetIDs`, `tweets`, `postIds`, `lookupPostIds`, `tweet_ids` oder
  `tweetId` als einzelner String werden `tweetIds` zugeordnet.
- `twitterHandles`, `usernames`, `user_names`, `userNameList`, `handles`,
  `screenNames`, `profileTweets` werden `twitterHandles` zugeordnet.
- `username`, `handle`, `screenName` als einzelner String werden
  `twitterHandles` zugeordnet.
- `searchTerms`, `searchQueries`, `queries`, `search` als Liste oder mit 1 Suche
  pro Zeile werden `searchTerms` zugeordnet.
- `twitterContent`, `query`, `searchQuery` werden `twitterContent` zugeordnet.
- `maxItems`, `maxResults`, `max_results`, `resultsLimit`, `count`,
  `resultsCount`, `numberOfTweets`, `maxPosts`, `max_posts`, `max_items`,
  `maxTweets`, `tweetsDesired`, `maxTotalTweets` werden `maxItems` zugeordnet.
- `per_profile_limit` wird `maxItemsPerTarget` zugeordnet.
- `sort` wird `queryType` zugeordnet.
- `search_type`, `searchType`, `query_type`, `search_sort` werden für `Top` &
  `Latest` in jeder Schreibweise `queryType` zugeordnet. `Media`, `Photos` &
  `Videos` schalten `filter:media`, `filter:images` & `filter:videos` ein.
- `tweetLanguage`, `language`, `contentLanguage` werden `lang` zugeordnet.
- `author`, `fromUser` werden `from` zugeordnet.
- `inReplyTo`, `toUser` werden `to` zugeordnet.
- `mentioning` wird `@` zugeordnet.
- `start`, `startDate`, `timeSince` werden `since` zugeordnet.
- `end`, `endDate`, `timeUntil` werden `until` zugeordnet.
- `timeSinceUnix`, `sinceTime`, `timeUntilUnix`, `untilTime` in Sekunden werden
  `since_time`, `until_time` zugeordnet.
- `timeWithinTime`, `withinTime` werden `within_time` zugeordnet.
- `timeWindowHours`, `timeWindow` werden `within_time` zugeordnet, als Stunden &
  als Tage.
- `timeSinceId`, `sinceId`, `timeMaxId`, `maxId` werden `since_id`, `max_id`
  zugeordnet.
- `quickDateRange` aus dem Google Search Scraper, etwa `d7`, `w2`, `m1` oder
  `y`, wird `since_time` zugeordnet, ab dem Run-Start zurückgerechnet.
- `minimumFavorites`, `minLikes`, `min_likes`, `minFaves`, `engagementMinLikes`,
  `Minimum_likes` werden `min_faves` zugeordnet.
- `minimumRetweets`, `minRetweets`, `engagementMinRetweets` werden
  `min_retweets` zugeordnet.
- `minimumReplies`, `minReplies`, `engagementMinReplies`, `Minimum_replies`
  werden `min_replies` zugeordnet.
- `engagementMaxLikes`, `maxLikes`, `engagementMaxRetweets`, `maxRetweets`,
  `engagementMaxReplies` werden `engagement.maxLikes`, `engagement.maxRetweets`,
  `engagement.maxReplies` zugeordnet.
- `onlyImage`, `onlyImages`, `has_images` werden `filter:images` zugeordnet.
- `onlyVideo`, `onlyVideos`, `has_videos` werden `filter:videos` zugeordnet.
- `onlyWithMedia`, `mediaOnly` werden `filter:media` zugeordnet.
- `onlyQuote`, `onlyQuotes` werden `filter:quote` zugeordnet.
- `onlyTwitterBlue`, `usersBlueVerifiedOnly`, `blue_verified_only`,
  `onlyBlueVerified` werden `filter:blue_verified` zugeordnet.
- `engagementHasEngagement`, `hasEngagement` werden `filter:has_engagement`
  zugeordnet.
- `mediaHasLinks`, `has_links`, `requireLinks` werden `filter:links` zugeordnet.
- `mediaHasMentions`, `has_mentions`, `requireMentions` werden `filter:mentions`
  zugeordnet.
- `mediaHasHashtags`, `has_hashtags`, `requireHashtags` werden `filter:hashtags`
  zugeordnet.
- `mediaNewsOnly`, `mediaSafeContentOnly` werden `filter:news`, `filter:safe`
  zugeordnet.
- `mediaTypes` mit 1 Typ wird dem `filter:`-Feld dieses Typs zugeordnet.
- `mediaSubtype` wird `filter:media`, `filter:images` oder `filter:videos`
  zugeordnet.
- `includeNativeRetweets`, `includeRetweets` werden `include:nativeretweets`
  zugeordnet.
- `excludeReplies`, `excludeRetweets`, `includeRetweets` auf false,
  `tweetTypesExclude` werden `tweetTypes.excludeReplies`,
  `tweetTypes.excludeRetweets` & `tweetTypes.excludeQuotes` zugeordnet.
- `tweetTypes` als Liste mit 1 Typ wird `tweetTypes.replies`,
  `tweetTypes.quotes` oder `tweetTypes.nativeRetweets` zugeordnet.
- `tweetSubtype` wird `tweetTypes.replies` oder `tweetTypes.quotes` zugeordnet.
  `self_threads` fügt den Operator `filter:self_threads` hinzu.
- `geotaggedNear`, `geoNear` werden `near` zugeordnet.
- `withinRadius`, `geoWithinRadius`, `geoWithin` werden `within` zugeordnet.
- `geoGeocode` wird `geocode` zugeordnet.
- `tweetConversationId`, `tweetQuotedTweetId`, `tweetQuotedUserId` werden
  `conversation_id`, `quoted_tweet_id`, `quoted_user_id` zugeordnet.
- `cardName`, `tweetPollTypes` werden `card_name` zugeordnet.
- `search_query` wird `twitterContent` zugeordnet.
- `profile_urls` wird bei Links `startUrls` zugeordnet, bei Nutzernamen
  `twitterHandles`.
- `lookup_post_ids` oder `id` als einzelner String werden `tweetIds` zugeordnet.
- `tweets` als 1 kommagetrennte Liste wird `tweetIds` zugeordnet.

Manche Felder haben hier kein eigenes Feld. Jedes fügt jeder Suche des Runs den
X-Suchoperator hinzu, für den es steht. Das Run-Log listet die hinzugefügten
Operatoren am Anfang.

- `usersFromUsers`, `from_users`, `usersToUsers`, `to_users`, `usersListMembers`
  fügen `from:`, `to:` & `list:` hinzu. Mehrere Werte laufen als Alternativen,
  etwa `(from:a OR from:b)`.
- `usersMentionUsers`, `mentioning_users` fügen `@name` hinzu.
- `usersExcludeFromUsers` fügt `-from:` hinzu.
- `onlyVerifiedUsers`, `usersVerifiedOnly`, `verified_only` fügen
  `filter:verified` hinzu.
- `placeObjectId`, `geoPlaceId`, `placeId`, `place` fügen `place:` hinzu.
- `cardDomain` fügt `card_domain:` hinzu.
- `appsSources`, `appsExcludeSources` fügen `source:` & `-source:` hinzu.
- `contentKeywords`, `contentExactPhrases`, `contentHashtags`, `contentCashtags`
  fügen mit jeweils 1 Wert das Wort, die Phrase in Anführungszeichen, `#tag` &
  `$tag` hinzu.
- `contentExcludeKeywords`, `contentExcludeHashtags`, `exclude_words`,
  `hashtags_exclude` fügen `-word` & `-#tag` hinzu.
- Mit `all_words` & `exact_phrases` muss jedes Wort & jede Phrase passen.
- `any_words`, `hashtags_any` fügen Alternativen hinzu, etwa `(#a OR #b)`.
- `contentQuestionMarks` fügt `?` hinzu.
- `contentEmoticons` fügt `:)` für `positive` hinzu, `:(` für `negative`.
- `tweet_type` fügt `filter:replies`, `filter:retweets` & ihre `-filter:`-Formen
  hinzu.

In Worten benannte Modi werden `mode` zugeordnet. `Advanced Search` wird zu
`search`, `Get Tweet by ID` zu `tweet`, `Get a Few Tweets` zu `tweets`,
`Get Replies` zu `replies`, `Get Quotes` zu `quotes`, `Get Retweeters` zu
`retweeters` & `Get Favoriters` zu `favoriters`.

So verhält sich eine eingefügte Eingabe.

- Jede Quelle läuft. Eine Eingabe mit URLs, Nutzernamen, Suchbegriffen,
  Listen-IDs & Post-IDs führt alle aus. `maxItems` gilt für den gesamten Run.
- Eine Suchanfrage neben `searchTerms` läuft als 1 weiterer Begriff.
- Eine Profil-URL der Form `x.com/@name` liest der Actor wie `x.com/name`.
- Setzt du einen Alias & sein kanonisches Feld, gewinnt der kanonische Wert. Das
  Run-Log nennt den Alias, der verloren hat.
- Das Run-Log nennt jedes Feld, das der Actor ignoriert, etwa
  `customMapFunction`. Der Actor verwirft nie still ein Feld.
- Eine Obergrenze für Datensätze muss eine ganze Zahl ab 1 sein. `maxResults: 0`
  stoppt den Run, bevor er etwas liest oder berechnet.
- `quickDateRange: "m1"` liest auf jeder Route den letzten Monat. Monate & Jahre
  zählen im Kalender zurück. Fehlt h, d, w, m oder y, stoppt der Run vor jedem
  Lesen & jeder Gebühr.
- Der Actor hat keine Seiteneinheit. Ersetze `maxPages` durch `maxItems`.
- Der Actor hat kein Feld `userId` oder `user_ids`. Setze eine Nutzer-ID dort
  ein, wo ein Nutzername steht. Das geht in `twitterHandles`, in Profil-URLs &
  nach `from:`.
- Suchoperator-Felder wie `from`, `min_faves`, `since_time` & `filter:images`
  nutzen schon die Namen von X. Sie brauchen keine Zuordnung.
- Eine Liste, die ein anderer Actor weder all-of noch any-of nennt, läuft mit 1
  Wert. Diese Listen sind `contentKeywords`, `contentExactPhrases`,
  `contentHashtags`, `contentCashtags`, `usersMentionUsers`, `mediaTypes` &
  `tweetTypes`. Bei mehr Werten stoppt der Run vor jedem Lesen & jeder Gebühr.
  Seine Meldung sagt, wie du sie als 1 Suchbegriff schreibst.
- `search_type` auf `People` oder `Lists`, `source_mode` auf `followers`, ein
  `engagementLevel`-Preset & der Modus `Get Similar Tweets` stoppen den Run vor
  jedem Lesen & jeder Gebühr. Die Meldung nennt den Actor oder das Feld, das du
  nutzen sollst.
- `category` auf `tweets` oder `info` ändert nichts. Die Aufgabe eines anderen
  Actors, etwa `followers`, `user_info` oder `replies`, stoppt den Run. Er liest
  & berechnet nichts. Die Meldung nennt diesen Actor.

### Eingabe in Console & API

Das Console-Formular hat diese Steuerelemente.

- Mode, Output Variant, Field Style, Output Preset & Sort By sind validierte
  Auswahllisten.
- Start URLs & Profile URLs akzeptieren Strings oder `{ "url": "..." }`-Objekte.
  Ihre JSON-Editoren behalten beide API-Formate.
- Strukturierte Filter bieten gruppierte Steuerelemente, du brauchst also kein
  verschachteltes JSON.
- Das Formular blendet flache Operatoren aus, die eine Filtergruppe schon
  abdeckt. JSON, API, SDK, Automatisierungen & gespeicherte Task-Eingaben
  akzeptieren sie weiterhin.
- Max Items & Max Items Per Target akzeptieren ganze Zahlen ab 1.
  Interaktionsschwellen akzeptieren ganze Zahlen ab 0.

Nutze kanonische Felder in neuen Integrationen. Die Aliasse aus der
Migrationstabelle oben bleiben verfügbar. `includeRaw` ist ein Alias für
`outputVariant: "raw"`. Ältere `outputVariant`-Werte wie `compact` & `full`
funktionieren weiter als Legacy-Ausgabe. Das Formular kennzeichnet sie als
Legacy-Aliasse.

## Ausgabe

Jeder Post-Datensatz ist ein JSON-Objekt mit den Metadaten, die X bereitstellt.
Die Schemas für Dataset & Run-Report geben jedem Feld einen Titel, eine
Beschreibung & ein Beispiel. KI-Agents können sie lesen, ohne zu raten, was ein
Feld bedeutet.

Die Beispielwerte dienen nur zur Veranschaulichung. Deine Runs liefern
Live-Daten von X.

```json
{
  "id": "20",
  "text": "just setting up my twttr",
  "createdAt": "Tue Mar 21 20:50:14 +0000 2006",
  "retweetCount": 500,
  "replyCount": 120,
  "likeCount": 5000,
  "quoteCount": 80,
  "viewCount": 1200000,
  "bookmarkCount": 300,
  "lang": "en",
  "url": "https://x.com/jack/status/20",
  "author": {
    "id": "12",
    "username": "jack",
    "name": "jack",
    "followers": 6000000,
    "verified": true
  },
  "media": [{ "type": "photo", "url": "https://..." }],
  "entities": {
    "hashtags": [{ "text": "AI" }],
    "urls": [],
    "user_mentions": []
  },
  "isNoteTweet": false,
  "isQuoteStatus": false,
  "isReply": false,
  "conversationId": "20"
}
```

Exportiere das Dataset als JSON, CSV, Excel oder HTML.

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

- Nutze einen Punkt für ein Feld innerhalb eines Objekts, etwa `author.id`.
  Groß- und Kleinschreibung & Unterstriche spielen keine Rolle.
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

## Run-Optionen

- Setze in Apify die maximale Gesamtgebühr, um die Run-Kosten zu begrenzen. Lass
  `maxItems` leer, um so viele Datensätze zu erhalten, wie das Budget erlaubt.
  Setze `maxItems`, wenn du weniger Posts willst.
- Setze `maxTotalChargeUsd` in der Apify-API oder Max cost per run in der
  Console. Apify gibt dieses Limit als `ACTOR_MAX_TOTAL_CHARGE_USD` an den Actor
  weiter. Der Actor rechnet es in die maximale Zahl abrechenbarer Datensätze um.
- Übergib `tweetIds`, um viele Posts auf einmal abzurufen. Füge eine Profil-URL
  ein, um die Posts eines Accounts zu lesen.
- Setze bei vielen Suchanfragen `includeSearchTerms: true`, um jedes Ergebnis
  mit seinem Suchbegriff zu kennzeichnen.
- Setze `queryType: "Latest + Top"`, um beide X-Suchmodi in 1 Run zu nutzen.
  Deduplizierung & Ergebnislimits gelten für beide gemeinsam.
- Nutze Account- oder Stichwort-Monitore von Xquik für Prüfungen im
  1-Sekunden-Takt & signierte Webhooks. Aktive Monitore prüfen jede Sekunde.

### Immer den neuesten Build verwenden

Wähle `latest` für jeden Run, um jeden veröffentlichten Fix zu erhalten.

Wählst du keinen Build, startet Apify X Tweet Scraper von Xquik mit dem Standard
`latest`. Console-Runs & Standard-API-Beispiele übernehmen diesen Standard.

Gespeicherte Tasks können den Actor-Standard überschreiben. Zeitpläne &
Task-Integrationen übernehmen diese Wahl. Setze jede Überschreibung auf
`latest`.

Apify leitet exakte Build-Nummern nicht auf `latest` um. Ersetze fixierte
Nummern durch `latest`. Nutze einen exakten Build nur für einen vorübergehenden
Rollback oder um einen Run zu reproduzieren.

Lies die Apify-Dokumentation zu
[Build-Tags](https://docs.apify.com/platform/actors/development/builds-and-runs/builds),
[Run-Optionen](https://docs.apify.com/platform/actors/running/runs-and-builds) &
[Tasks](https://docs.apify.com/platform/actors/running/tasks).

## Verwandte Xquik-Actors

Jeder Xquik-Actor nutzt dieselbe Extraktions-Engine, dieselbe Abrechnung erst
nach dem Filtern & dieselben Diagnosen. Wähle den, der zu den Daten passt, die
du brauchst.

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

### Brauche ich einen X-API-Schlüssel?

Nein. Du brauchst keinen X-API-Schlüssel, keinen Login oder Zugangsdaten.

### Was begrenzt einen Run?

Dein Ergebnislimit & dein Apify-Ausgabenlimit stoppen den Run. Die Limits deines
Apify-Accounts & der Plattform gelten weiterhin.

### Wie schnell ist der Actor?

X Tweet Scraper von Xquik lieferte im [Benchmark](#benchmark) 25,2 bis 39,2
nützliche Posts pro Sekunde. Die Laufzeit hängt von deiner Eingabe, der
Ergebniszahl & der Verfügbarkeit von X ab.

### Liefern Suchen jeden passenden Post?

Ja, bis die Treffer ausgehen oder du `maxItems` erreichst. Die Ergebnisse
enthalten nur Posts, die zu deiner Suchanfrage passen. Du zahlst jeden Post nur
einmal.

### Welche Suchoperatoren funktionieren?

Die erweiterte Suche von X unterstützt Autoren, Empfänger, Erwähnungen, Daten,
Interaktion, Medien & Standort. Beispiele findest du unter
[Die wichtigsten unterstützten Suchoperatoren](#die-wichtigsten-unterstützten-suchoperatoren).

### Kann ich den Actor über die Apify-API starten?

Ja. Im [API-Tab](https://apify.com/xquik/x-tweet-scraper/api) findest du
Beispiele für Python, JavaScript & cURL.

### Kann ich wiederkehrende Scrapes planen?

Ja. Nutze die integrierte
[Zeitplanung](https://docs.apify.com/platform/schedules) von Apify, um X Tweet
Scraper von Xquik per Cron zu starten.

### Kann ich eine individuelle Lösung bekommen?

Ja. Beschreibe im [Tab Issues](https://apify.com/xquik/x-tweet-scraper/issues),
was du brauchst. Xquik bietet außerdem ein Dashboard, eine REST-API, einen
MCP-Server & Webhooks. Die Website von Xquik findest du in seinem
[Apify-Profil](https://apify.com/xquik).

### Ist es legal, X-Daten zu scrapen?

X Tweet Scraper von Xquik fragt öffentliche X-Felder ab. Ergebnisse können
personenbezogene Daten enthalten. Prüfe, ob dein Zweck rechtmäßig ist, & befolge
die Datenschutzregeln, die für dich gelten. Hol dir bei Unsicherheit
qualifizierten Rechtsrat.

### Wo bekomme ich Hilfe?

Öffne im [Tab Issues](https://apify.com/xquik/x-tweet-scraper/issues) ein Issue
mit der Run-ID.
