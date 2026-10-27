[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · **Français** · [Italiano](README.it.md)

[![Framer connecte Xquik MCP aux agents de codage](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Découvrez comment Framer utilise les scrapers Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
avec Claude Code, Codex, Cursor & d'autres outils, à partir de 6:07.

Xquik est le service de scraping X (Twitter) le plus rapide et le moins cher au
monde. Ses données X sont les plus complètes. X Trends Scraper de Xquik collecte
les tendances en temps réel par lieu, avec le rang, le volume & la requête. La
plupart des autres Actors Apify facturent avant de filtrer ou de dédupliquer.
Xquik facture seulement les résultats livrés, uniques et conformes à vos
filtres.

Scrapez les tendances Twitter actuelles de nombreux lieux en 1 run. Ou lisez les
tendances passées dans l'archive des tendances Twitter de Xquik, qui commence le
2026-10-13 à 02:20 UTC. Vous payez **$0.00015 par ligne livrée**, & Apify
facture l'usage de la plateforme à part. Vous n'avez besoin ni de clé API X ni
de connexion.

> Xquik est un service tiers indépendant. Non affilié à X Corp. "Twitter" et "X"
> sont des marques déposées de X Corp.

## Lieux & données de tendances

- Plusieurs pays, villes ou WOEID, lus en parallèle.
- Jusqu'à 50 tendances actuelles par lieu.
- Les tendances passées de l'archive des tendances Twitter, par date & heure,
  depuis le 2026-10-13.
- La liste de tous les lieux pour lesquels X propose des tendances, avec leur
  WOEID, leur pays & leur type.
- La recherche de lieux X, avec l'ID de lieu que la recherche de posts X
  accepte.
- Les hashflags X, ces emojis personnalisés que X affiche après certains
  hashtags.
- Le rang, le sujet, la requête, le volume de posts, l'URL de recherche, le
  WOEID & le lieu source.
- Le lieu indiqué sur chaque ligne.
- Des indicateurs qui marquent les lignes de hashtag & les lignes qui ont un
  volume de posts.
- La suppression des doublons entre entrées équivalentes, avant la facturation.
- Des exports JSON, CSV, Excel, XML & RSS via les datasets Apify.
- Les runs reprennent depuis un état enregistré après une migration Apify.

## Comment scraper les tendances X

Vous débutez sur Apify ?
[Créez d'abord un compte gratuit](https://console.apify.com/sign-up?fpr=xquik).
Le plan gratuit ne demande aucune carte bancaire & donne $5 à dépenser chaque
mois. À $0.00015 par tendance, $5 couvrent jusqu'à 33 000 tendances, hors usage
de la plateforme. Revenez ensuite ici & cliquez sur Try for free.

1. Ouvrez X Trends Scraper de Xquik dans Apify Console.
2. Saisissez des noms de lieux dans `locations` ou des WOEID numériques dans
   `woeids`.
3. Réglez `maxTrendsPerLocation`, jusqu'à 50 tendances par lieu.
4. Réglez `maxItems` pour plafonner les lignes livrées de tout le run, puis
   cliquez sur Start.
5. Téléchargez le dataset en JSON, CSV ou Excel, ou utilisez l'API Apify.

## Entrée

Utilisez des noms de lieux, des WOEID numériques ou les deux.

```json
{
  "locations": ["Worldwide", "United States", "Turkey"],
  "maxTrendsPerLocation": 50,
  "maxItems": 150
}
```

`locations` accepte tout pays ou toute ville pour lesquels X propose des
tendances, comme Worldwide, United States, Japan ou London. Les codes pays à 2
lettres fonctionnent aussi. Un nom pour lequel X ne propose pas de tendances ne
renvoie aucune ligne & ne coûte rien. `woeids` accepte des WOEID numériques.

Pour voir tous les noms & WOEID, activez `listLocations`. Le run liste alors les
lieux pour lesquels X propose des tendances, à la place des tendances.

```json
{ "listLocations": true, "country": "TR", "maxItems": 100 }
```

`country` accepte un nom ou un code à 2 lettres. `placeType` accepte `country`,
`town`, `worldwide` ou `unknown`. `nameContains` garde les lieux dont le nom
contient votre texte. Laissez les 3 vides pour lister tous les lieux.

Pour chercher des lieux X par nom, remplissez `placeSearchTerms`. Le run renvoie
alors des lieux à la place des tendances.

```json
{ "placeSearchTerms": ["New York"], "maxItems": 20 }
```

Chaque lieu a l'`id` que la recherche de posts X accepte comme `place`. X classe
les lieux, donc leur ordre peut changer d'un run à l'autre. X liste jusqu'à 20
lieux pour un nom, & moins pour quelques noms, comme New York. Le run garde
seulement les lieux qui portent le nom saisi, donc New Delhi ne renvoie aucune
ligne & ne coûte rien.

`maxItems` plafonne tout le run & le remplit terme par terme, donc le premier
terme peut tout utiliser. Réglez `maxItemsPerTarget` pour donner à chaque terme
une part égale.

```json
{
  "placeSearchTerms": ["Paris", "Rome"],
  "maxItems": 20,
  "maxItemsPerTarget": 10
}
```

Pour lister les hashflags X, activez `listHashflags`. Un hashflag est l'emoji
personnalisé que X affiche après un hashtag pendant une durée définie.

```json
{ "listHashflags": true, "hashtagContains": "football" }
```

Le run liste les hashflags que X affiche en ce moment. Désactivez `activeOnly`
pour ajouter ceux qui sont terminés & ceux à venir. `hashtagContains` garde les
hashtags qui contiennent votre texte.

Pour voir ce qui était en tendance sur Twitter hier ou à tout moment passé,
remplissez `at`. Le run lit alors, pour chaque lieu, la liste enregistrée la
plus proche de ce moment.

```json
{ "locations": ["Turkey"], "at": "2026-10-13T14:00:00Z" }
```

`at` accepte une date comme 2026-10-13, une heure comme 2026-10-13T14:00:00Z ou
des secondes Unix. Une heure sans fuseau est en UTC. Xquik enregistre 12 listes
par heure pour chaque lieu & garde chacune 25 mois. L'historique des tendances
Twitter commence le 2026-10-13 à 02:20 UTC. Un moment à plus de 24 heures de
toute liste enregistrée ne renvoie aucune ligne & ne coûte rien.

`at` accepte aussi une durée avant le run, sous forme d'un nombre & de `s`, `m`,
`h` ou `d`. Avec `24h`, une planification quotidienne lit les tendances de la
veille à chaque run.

```json
{ "locations": ["Turkey"], "at": "24h" }
```

Pour une plage, remplissez `from` & `to`. Le run renvoie 1 liste enregistrée par
pas de `every`, comme `15m`, `1h` ou `1d`.

```json
{
  "locations": ["Turkey"],
  "from": "2026-10-13",
  "to": "2026-10-14",
  "every": "1h",
  "maxItems": 1200
}
```

Sans `to`, la plage se termine maintenant. Sans `every`, le run renvoie 1 liste
par heure. Un pas sans liste enregistrée ne renvoie aucune ligne. `from` & `to`
acceptent aussi des durées, donc `from` réglé sur `24h` lit les dernières 24
heures. `at` l'emporte sur `from` & `to`.

Un run lit 1 seul type de ligne. `listLocations` l'emporte sur `listHashflags`,
qui l'emporte sur `placeSearchTerms`. Sans aucun d'eux, le run lit les
tendances.

Les petits runs sans problème n'écrivent pas `run-report` & réduisent l'usage
Apify. Activez `alwaysSaveRunRecords` pour l'écrire à chaque run.

## Sortie

Chaque tendance donne 1 ligne de dataset. Les lignes portent `name`, `rank`,
`tweetVolume`, `query`, `url`, `woeid`, `sourceTarget` & `resultType`.
`sourceTarget` est le lieu tel que vous l'avez écrit. Les champs absents de la
source restent absents. X Trends Scraper de Xquik n'invente aucune valeur.

Les exemples utilisent des valeurs fictives. Les résultats reflètent les données
en direct. Une ligne de tendance ressemble à ceci.

```json
{
  "name": "#SampleTrend",
  "rank": 1,
  "tweetVolume": 12000,
  "isHashtag": true,
  "woeid": 1,
  "sourceTarget": "Worldwide"
}
```

Les lignes de `at` ou d'une plage portent aussi `capturedAt`, le moment où Xquik
a lu leur liste sur X. Les lignes de `at` portent en plus `requestedAt`, le
moment que vous avez demandé. Xquik n'estime ni l'un ni l'autre.

Avec `listLocations`, chaque lieu donne 1 ligne de dataset. Les lignes portent
`woeid`, `name`, `country`, `countryCode`, `placeType`, `placeTypeCode`,
`parentWoeid`, `url` & `resultType`. `url` est l'ancienne référence de X pour le
lieu & peut ne pas s'ouvrir. Une ligne de lieu de tendances ressemble à ceci.

```json
{
  "woeid": 2344116,
  "name": "Istanbul",
  "country": "Turkey",
  "countryCode": "TR",
  "placeType": "Town",
  "placeTypeCode": 7,
  "parentWoeid": 23424969,
  "resultType": "trendLocation"
}
```

Avec `placeSearchTerms`, chaque lieu donne 1 ligne de dataset. Les lignes
portent `id`, `name`, `fullName`, `country`, `countryCode`, `placeType`, `url`,
`centroid`, `boundingBox`, `attributes`, `containedWithin`, `sourceTarget` &
`resultType`. `centroid` contient la longitude, puis la latitude. Une ligne de
lieu ressemble à ceci.

```json
{
  "id": "0123456789abcdef",
  "name": "Sample City",
  "fullName": "Sample City, Sample Country",
  "country": "Sample Country",
  "countryCode": "US",
  "placeType": "city",
  "centroid": [-73.97, 40.78],
  "sourceTarget": "New York",
  "resultType": "place"
}
```

Avec `listHashflags`, chaque hashflag donne 1 ligne de dataset. Les lignes
portent `hashtag`, `assetUrl`, `startsAt`, `endsAt`, `isHashfettiEnabled`,
`animations` & `resultType`. Une ligne de hashflag ressemble à ceci.

```json
{
  "hashtag": "SampleHashtag",
  "assetUrl": "https://abs.twimg.com/hashflags/Sample/Sample.png",
  "startsAt": "2026-10-02T10:00:00.000Z",
  "endsAt": "2027-01-03T14:59:00.000Z",
  "isHashfettiEnabled": false,
  "animations": [],
  "resultType": "hashflag"
}
```

## Colonnes de sortie

8 champs d'entrée façonnent chaque ligne une fois que le run l'a lue. Ils
n'exécutent aucun code & ne changent pas le prix.

| Champ               | Rôle                                                                            |
| ------------------- | ------------------------------------------------------------------------------- |
| `fields`            | Garde seulement ces champs, dans l'ordre & avec l'orthographe que vous écrivez  |
| `omitFields`        | Retire ces champs & garde le reste                                              |
| `renameFields`      | Déplace un champ dans une colonne qui porte un nouveau nom                      |
| `flatten`           | Transforme chaque objet imbriqué en colonnes de premier niveau                  |
| `fillMissingFields` | Remplit avec `null` un champ gardé qui manque dans une ligne. Activé par défaut |
| `joinFields`        | Transforme chacune de ces listes en 1 valeur texte                              |
| `joinSeparator`     | Texte entre les éléments joints. Par défaut, une virgule & un espace            |
| `constantFields`    | Ajoute une colonne avec le même texte sur chaque ligne                          |

- Utilisez un point pour un champ placé dans un objet. La casse & les tirets bas
  ne comptent pas.
- Chaque ligne garde son `id`.
- Avec `fields`, un champ absent d'une ligne arrive avec la valeur `null`.
  Chaque ligne a alors les mêmes colonnes.
- Un nom de champ erroné arrête le run avant toute lecture & ne facture rien.
- Si le run ne peut pas vérifier les noms, il continue de lire & liste à la fin
  les noms qu'il n'a pas vus.
- Le run ignore une fonction map ou un filtre jq écrit pour un autre Actor.

## Combien coûte le scraping des tendances X ?

Sur chaque plan Apify, le prix est de $0.00015 par ligne livrée. Apify facture
votre usage de la plateforme à part.

Pour plus de volume,
[choisissez un plan Apify](https://apify.com/pricing?fpr=xquik) avec plus
d'usage prépayé.

- Une facturation par ligne de données livrée. Les diagnostics sont gratuits
  dans `diagnostics`.
- Une ligne de lieu de tendances, de lieu ou de hashflag coûte le même prix
  qu'une ligne de tendance.
- Pas de frais de démarrage, de requête ou de lieu.
- La déduplication passe avant la facturation.
- Les réglages de coût total maximal d'Apify plafonnent les lignes livrées.

## Limites & reprise

X Trends Scraper de Xquik lit de nombreux lieux en 1 run. Les lignes livrées &
la progression survivent à un redémarrage d'Apify. L'Actor n'ajoute aucune
limite de temps propre. Il respecte tout timeout Apify que vous réglez.

Une extraction interrompue écrit un diagnostic `partial` gratuit. Les résultats
disponibles restent intacts. Lisez `availableResults`, `failedTargets`,
`retryable` & `nextAction` avant de relancer. Une sortie réussie de l'Actor
confirme la livraison, pas une extraction complète.

Le statut du run nomme chaque cause d'arrêt anticipé. `stopCauses` liste chaque
cause avec ses propres `message`, `retryable` & `nextAction`. Les causes sont
`target_not_found`, `target_failed`, `pagination_safety_limit` &
`deadline_reached`. Une cible introuvable n'entre dans la liste que si une autre
cause a arrêté le run. Le run est `retryable` dès qu'une cause l'est.

## Actors Xquik associés

Tous les Actors Xquik partagent le même moteur d'extraction, la même facturation
après filtrage & les mêmes diagnostics. Choisissez celui qui correspond aux
données dont vous avez besoin.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper) scrape des posts
  depuis des recherches, des fils de profil, des Listes & des ID de post, avec
  plus de 50 filtres & des exports plats. Utilisez-le quand vous avez besoin de
  données de posts sans analyse. À partir de $0.00015 par ligne.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper) scrape des
  profils ainsi que leurs posts, réponses, médias & abonnés à partir de noms
  d'utilisateur, d'ID ou d'URL. Utilisez-le quand vous partez de comptes plutôt
  que de recherches. À partir de $0.00015 par ligne.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper) scrape des
  réponses, des commentaires & des conversations entières sous les posts, avec
  plus de 25 filtres. Utilisez-le quand vous avez besoin des échanges sous les
  posts. À partir de $0.00015 par ligne.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper) scrape en
  masse les réponses, citations, comptes qui ont reposté & fils de posts, à
  partir d'URL ou d'ID. Utilisez-le quand vous mesurez qui a interagi avec des
  posts. À partir de $0.00015 par ligne.
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper)
  scrape les posts qui citent des posts, avec le texte, les médias, les
  compteurs, les auteurs & 11 filtres. Utilisez-le quand vous étudiez qui a cité
  des posts & ce qu'ils ont dit. À partir de $0.00015 par post.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper) scrape les
  abonnés, les abonnements, les membres de Liste, les abonnés de Liste & les
  membres de Communauté sous forme de lignes de profil. Utilisez-le quand vous
  avez besoin de listes d'audience ou de membres. À partir de $0.00015 par
  profil.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper)
  recherche des comptes par nom d'utilisateur, bio & localisation, avec des
  filtres d'abonnés, de certification, d'ancienneté & de localisation.
  Utilisez-le quand vous créez des listes de comptes à partir d'une recherche. À
  partir de $0.00015 par profil.
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper)
  vérifie où sont basés les comptes avec le libellé "Account based in" de X, la
  mention "connected via" & les changements de nom d'utilisateur. Utilisez-le
  quand vous contrôlez où sont basés des comptes. À partir de $0.00015 par
  compte.
- [X Email Scraper](https://apify.com/xquik/x-email-scraper) récupère les
  e-mails, téléphones & liens que les comptes publient sur leur profil, à partir
  de noms d'utilisateur, d'abonnés ou de recherches d'utilisateurs. Utilisez-le
  quand vous avez besoin des e-mails que les profils publient. À partir de
  $0.00015 par profil.
- [X List Scraper](https://apify.com/xquik/x-list-scraper) scrape les posts,
  membres & abonnés d'une Liste à partir d'URL ou d'ID de Liste. Utilisez-le
  quand une Liste choisie définit vos sources. À partir de $0.00015 par ligne.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper) scrape les
  infos, posts, recherches, membres & modérateurs d'une Communauté. Utilisez-le
  quand vos sources sont des Communautés X. À partir de $0.00015 par ligne.
- [X Space Scraper](https://apify.com/xquik/x-space-scraper) trouve des Spaces
  par mot-clé & lit leurs titres, états, heures, nombres d'auditeurs, hôtes &
  intervenants. Il lit aussi des diffusions par URL ou par ID. Utilisez-le quand
  vous suivez l'audio & la vidéo en direct sur X. À partir de $0.00015 par Space
  ou diffusion.
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper) scrape les offres
  d'emploi X par mot-clé, lieu, mode de travail, niveau d'expérience &
  entreprise, avec salaires & liens de candidature. Utilisez-le quand vous
  collectez des offres d'emploi publiées sur X. À partir de $0.00015 par offre.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper) scrape les
  Articles X longs en Markdown & en texte, avec couvertures, auteurs, dates &
  métriques. Utilisez-le quand vous avez besoin du corps des articles, pas des
  posts. À partir de $0.00015 par article.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader) extrait ou
  stocke des photos, vidéos & GIF à partir de posts ou de profils, avec des
  options MP4 & de métadonnées. Utilisez-le quand vous avez besoin des fichiers
  médias eux-mêmes. À partir de $0.00015 par ligne média.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring)
  suit les mentions de marque avec des réponses IA de pertinence, de sentiment &
  d'expérience client & compare les runs. Utilisez-le quand vous surveillez une
  marque dans le temps. À partir de $0.0003 par post analysé.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis)
  attribue par IA une attitude, une intensité & une probabilité de sarcasme à
  chaque post. Utilisez-le quand vous avez besoin du sentiment général sur
  n'importe quel sujet. À partir de $0.0003 par post analysé.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)
  attribue par IA une orientation haussière, baissière, neutre ou mixte, un type
  de contenu, une conviction & une pertinence d'actif. Utilisez-le quand vous
  suivez les actions, la crypto ou les discussions de trading. À partir de
  $0.0003 par post analysé.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)
  étiquette par IA les posts d'actualité selon leur format, leur attribution de
  source & leur pertinence de sujet. Utilisez-le quand vous séparez le reportage
  du commentaire. À partir de $0.0003 par post analysé.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)
  répond par IA à vos propres questions de catégorie, de score & de oui/non pour
  chaque post. Utilisez-le quand les analyses prédéfinies ne correspondent pas à
  vos étiquettes. À partir de $0.0003 par post analysé.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)
  estime un Viral Score de 0 à 100 & un verdict pour chaque post, à partir des
  réponses de l'IA sur 8 traits. Utilisez-le quand vous étudiez pourquoi des
  posts se propagent ou font un flop. À partir de $0.0003 par post analysé.
- [X (Twitter) Monitor](https://apify.com/xquik/x-twitter-monitor) capte chaque
  nouveau tweet, réponse, citation, repost & changement de profil des comptes,
  généralement en moins d'une seconde après son affichage sur X, ainsi que les
  tweets par mot-clé & les follows. Utilisez-le quand vous voulez une alerte dès
  que X affiche un tweet. À partir de $0.0045 par monitor-hour.

## FAQ

Les réponses aux questions fréquentes, puis où trouver de l'aide.

### Ai-je besoin d'une clé API X ou d'une connexion ?

Non. X Trends Scraper de Xquik n'a besoin d'aucune clé API X, d'aucune connexion
ni d'aucun identifiant.

### Est-il légal de scraper les tendances X ?

X Trends Scraper de Xquik demande à X des champs publics. Les résultats peuvent
contenir des données personnelles. Assurez-vous d'avoir une finalité licite &
respectez les règles de protection des données applicables. En cas de doute,
demandez conseil à un juriste qualifié.

### Pourquoi mon run n'a-t-il renvoyé aucun résultat ?

Lisez d'abord le statut du run. Le statut d'un run vide vous invite à vérifier
vos cibles & vos filtres. La sortie gratuite `diagnostics` apparaît quand
quelque chose demande votre attention. Son `stopCauses` donne à chaque cause une
`nextAction` à suivre. Un lieu pour lequel X ne propose pas de tendances ne
renvoie aucune ligne. Activez `listLocations` pour voir les noms que X accepte.

### Puis-je scraper l'historique des tendances Twitter ?

Oui, depuis le 2026-10-13 à 02:20 UTC. Remplissez `at` pour 1 moment passé, ou
`from` & `to` pour une plage. Avec une planification, indiquez une durée comme
`24h`. Chaque ligne a `capturedAt`, l'heure de sa liste enregistrée.

### Puis-je utiliser l'API, les planifications & les intégrations ?

Oui. Choisissez parmi 50 tâches publiques ou utilisez l'API REST de Xquik.
L'[onglet API](https://apify.com/xquik/x-trends-scraper/api) contient des
exemples en Python, JavaScript & cURL. Les
[planifications](https://docs.apify.com/platform/schedules) Apify lancent X
Trends Scraper de Xquik selon un cron. Les agents utilisent
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Utilisez `latest`
sauf si vous avez besoin d'une build plus ancienne.

### Où trouver de l'aide ?

Ouvrez une issue dans
l'[onglet Issues](https://apify.com/xquik/x-trends-scraper/issues) avec l'ID du
run. Les diagnostics gratuits du key-value store expliquent les runs qui
demandent votre attention. Un run qui ne récupère aucune ligne en indique la
raison dans son statut.

### Puis-je obtenir une solution sur mesure ?

Oui. Décrivez votre besoin dans
l'[onglet Issues](https://apify.com/xquik/x-trends-scraper/issues). Xquik
propose aussi un tableau de bord, une API REST, un serveur MCP & des webhooks.
Trouvez le site web de Xquik sur son [profil Apify](https://apify.com/xquik).
