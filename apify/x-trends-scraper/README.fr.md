<p align="center">
  <a href="README.md">English</a> ·
  <a href="README.es.md">Español</a> ·
  <a href="README.tr.md">Türkçe</a> ·
  <a href="README.zh-CN.md">简体中文</a> ·
  <a href="README.ja.md">日本語</a> ·
  <a href="README.ko.md">한국어</a> ·
  <a href="README.de.md">Deutsch</a> ·
  <strong>Français</strong> ·
  <a href="README.it.md">Italiano</a>
</p>

<table align="center"><tr><td align="center">
<a href="https://youtu.be/4UOSpoOoC3Y?t=367"><img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" width="720" alt="Framer connecte Xquik MCP aux agents de codage"></a><br>
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">Découvrez comment Framer utilise les scrapers Xquik avec Claude Code, Codex, Cursor et d'autres outils, à partir de 6:07.</a>
</td></tr></table>

Xquik est le service de scraping X (Twitter) le plus rapide et le moins cher au
monde. Ses données X sont les plus complètes. X Trends Scraper de Xquik collecte
les tendances en temps réel par lieu, avec le rang, le volume et la requête. La
plupart des autres Actors Apify facturent avant de filtrer ou de dédupliquer.
Xquik facture seulement les résultats livrés, uniques et conformes à vos
filtres.

Scrapez les tendances Twitter (X) actuelles de nombreux lieux en 1 run. Vous
payez **$0.00015 par ligne livrée**, et Apify facture l'usage de la plateforme à
part. Vous n'avez besoin ni de clé API X ni de connexion.

> Xquik est un service tiers indépendant. Non affilié à X Corp.
> "Twitter" et "X" sont des marques déposées de X Corp.

## Lieux et données de tendances

- Plusieurs pays, villes ou WOEID, lus en parallèle.
- Jusqu'à 50 tendances actuelles par lieu.
- La liste de tous les lieux pour lesquels X propose des tendances, avec leur
  WOEID, leur pays et leur type.
- La recherche de lieux X, avec l'ID de lieu que la recherche de posts X
  accepte.
- Les hashflags X : les emojis personnalisés que X affiche après certains
  hashtags.
- Le rang, le sujet, la requête, le volume de posts, l'URL de recherche, le
  WOEID et le lieu source.
- Le lieu indiqué sur chaque ligne.
- Des libellés pour les lignes de hashtag et pour le volume de posts disponible.
- La suppression des doublons entre entrées équivalentes, avant la facturation.
- Des exports JSON, CSV, Excel, XML et RSS via les datasets Apify.
- Les runs reprennent depuis un état enregistré après une migration Apify.

## Comment scraper les tendances X

1. Ouvrez X Trends Scraper de Xquik dans Apify Console.
2. Saisissez des noms de lieux dans `locations` ou des WOEID numériques dans
   `woeids`.
3. Réglez `maxTrendsPerLocation`, jusqu'à 50 tendances par lieu.
4. Réglez `maxItems` pour plafonner les lignes livrées de tout le run, puis
   cliquez sur Start.
5. Téléchargez le dataset en JSON, CSV ou Excel, ou passez par l'API Apify.

## Entrée

Utilisez des noms de lieux, des WOEID numériques ou les deux :

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
renvoie aucune ligne et ne coûte rien. `woeids` accepte des WOEID numériques.

Pour voir tous les noms et WOEID, activez `listLocations`. Le run liste alors
les lieux pour lesquels X propose des tendances, à la place des tendances :

```json
{ "listLocations": true, "country": "TR", "maxItems": 100 }
```

`country` accepte un nom ou un code à 2 lettres. `placeType` accepte `country`,
`town`, `worldwide` ou `unknown`. `nameContains` garde les lieux dont le nom
contient votre texte. Laissez les 3 vides pour lister tous les lieux.

Pour chercher des lieux X par nom, remplissez `placeSearchTerms`. Le run renvoie
alors des lieux à la place des tendances :

```json
{ "placeSearchTerms": ["New York"], "maxItems": 20 }
```

Chaque lieu a l'`id` que la recherche de posts X accepte comme `place`. X classe
les lieux, donc leur ordre peut changer d'un run à l'autre. X liste jusqu'à 20
lieux pour un nom, et moins pour quelques noms, comme New York. Le run garde
seulement les lieux qui portent le nom saisi, donc New Delhi ne renvoie aucune
ligne et ne coûte rien.

`maxItems` plafonne tout le run et le remplit terme par terme, donc le premier
terme peut tout utiliser. Réglez `maxItemsPerTarget` pour donner à chaque terme
une part égale :

```json
{
  "placeSearchTerms": ["Paris", "Rome"],
  "maxItems": 20,
  "maxItemsPerTarget": 10
}
```

Pour lister les hashflags X, activez `listHashflags`. Un hashflag est l'emoji
personnalisé que X affiche après un hashtag pendant une durée définie :

```json
{ "listHashflags": true, "hashtagContains": "football" }
```

Le run liste les hashflags que X affiche en ce moment. Désactivez `activeOnly`
pour ajouter ceux qui sont terminés et ceux à venir. `hashtagContains` garde les
hashtags qui contiennent votre texte.

Un run lit 1 seul type de ligne. `listLocations` l'emporte sur `listHashflags`,
qui l'emporte sur `placeSearchTerms`. Sans aucun d'eux, le run lit les
tendances.

Les petits runs sans problème n'écrivent pas `run-report` et réduisent l'usage
Apify. Activez `alwaysSaveRunRecords` pour l'écrire à chaque run.

## Sortie

Chaque tendance donne 1 ligne de dataset. Les lignes portent `name`, `rank`,
`tweetVolume`, `query`, `url`, `woeid`, `sourceTarget` et `resultType`.
`sourceTarget` est le lieu tel que vous l'avez écrit. Les champs absents de la
source restent absents. X Trends Scraper de Xquik n'invente aucune valeur.

Les exemples utilisent des valeurs fictives. Les résultats reflètent les données
en direct. Une ligne de tendance ressemble à ceci :

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

Avec `listLocations`, chaque lieu donne 1 ligne de dataset. Les lignes portent
`woeid`, `name`, `country`, `countryCode`, `placeType`, `placeTypeCode`,
`parentWoeid`, `url` et `resultType`. `url` est l'ancienne référence de X pour
le lieu et peut ne pas s'ouvrir. Une ligne de lieu de tendances ressemble à
ceci :

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
`centroid`, `boundingBox`, `attributes`, `containedWithin`, `sourceTarget` et
`resultType`. `centroid` contient la longitude, puis la latitude. Une ligne de
lieu ressemble à ceci :

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
`animations` et `resultType`. Une ligne de hashflag ressemble à ceci :

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

## Combien coûte le scraping des tendances X ?

Le prix est de $0.00015 par ligne livrée sur chaque plan Apify. Apify facture
votre usage de la plateforme à part.

- Une facturation par ligne de données livrée. Les diagnostics sont gratuits
  dans `diagnostics`.
- Une ligne de lieu de tendances, de lieu ou de hashflag coûte le même prix
  qu'une ligne de tendance.
- Pas de frais de démarrage, de requête ou de lieu.
- La déduplication a lieu avant la facturation.
- Les réglages de coût total maximal d'Apify plafonnent les lignes livrées.

## Limites et reprise

X Trends Scraper de Xquik lit de nombreux lieux en 1 run. Un redémarrage d'Apify
ne fait perdre ni les lignes livrées ni la progression. L'Actor n'ajoute aucune
limite de temps. Il respecte tout timeout Apify que vous réglez.

Une extraction interrompue écrit un diagnostic `partial` gratuit. Les résultats
disponibles restent intacts. Lisez `availableResults`, `failedTargets`,
`retryable` et `nextAction` avant de relancer. Une sortie réussie de l'Actor
confirme la livraison, pas une extraction complète.

Le statut du run nomme chaque cause d'arrêt anticipé. `stopCauses` liste chaque
cause avec ses propres `message`, `retryable` et `nextAction`. Les causes sont
`target_not_found`, `target_failed`, `pagination_safety_limit` et
`deadline_reached`. Une cible introuvable n'entre dans la liste que si une autre
cause a arrêté le run. Le run est `retryable` dès qu'une cause l'est.

## Actors Xquik associés

Tous les Actors Xquik partagent le même moteur d'extraction, la même facturation
après filtrage et les mêmes diagnostics. Choisissez celui qui correspond aux
données dont vous avez besoin.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper) : scrape des
  posts (tweets) depuis des recherches, des fils de profil, des Listes et des ID
  de post, avec plus de 50 filtres et des exports plats. Utilisez-le quand vous
  avez besoin de données de posts sans analyse. À partir de $0.00015 par
  ligne.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper) : scrape
  des profils ainsi que leurs posts, réponses, médias et abonnés à partir de
  noms d'utilisateur, d'ID ou d'URL. Utilisez-le quand vous partez de comptes
  plutôt que de recherches. À partir de $0.00015 par ligne.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper) : scrape des
  réponses, des commentaires et des conversations entières sous les posts
  avec plus de 25 filtres. Utilisez-le quand vous avez besoin des échanges
  sous les posts. À partir de $0.00015 par ligne.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper) :
  scrape en masse les réponses, citations, comptes qui ont reposté et
  discussions de posts, à partir d'URL ou d'ID. Utilisez-le pour mesurer qui a
  interagi avec des posts. À partir de $0.00015 par ligne.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper) : scrape
  les abonnés, les abonnements, les membres et abonnés de Liste et les
  membres de Communauté sous forme de lignes de profil. Utilisez-le quand
  vous avez besoin de listes d'audience ou de membres. À partir de
  $0.00015 par profil.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper) :
  recherche des comptes par nom d'utilisateur, bio et localisation, avec des
  filtres d'abonnés, de certification, d'ancienneté et de localisation.
  Utilisez-le pour créer des listes de comptes à partir d'une recherche. À
  partir de $0.00015 par profil.
- [X List Scraper](https://apify.com/xquik/x-list-scraper) : scrape les
  posts, membres et abonnés d'une Liste à partir d'URL ou d'ID de Liste.
  Utilisez-le quand une Liste choisie définit vos sources. À partir de
  $0.00015 par ligne.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper) :
  scrape les infos, posts, recherches, membres et modérateurs d'une
  Communauté. Utilisez-le quand vos sources sont des Communautés X. À
  partir de $0.00015 par ligne.
- [X Space Scraper](https://apify.com/xquik/x-space-scraper) : trouve des Spaces
  par mot-clé et lit leurs titres, états, heures, nombres d'auditeurs, hôtes et
  intervenants. Lit aussi des diffusions par URL ou par ID. Utilisez-le quand
  vous suivez l'audio et la vidéo en direct sur X. À partir de $0.00015 par
  Space ou diffusion.
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper) : scrape les offres
  d'emploi X par mot-clé, lieu, mode de travail, niveau d'expérience et
  entreprise, avec salaires et liens de candidature. Utilisez-le quand vous
  collectez des offres d'emploi publiées sur X. À partir de $0.00015 par offre.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper) : scrape
  les Articles X longs en Markdown et en texte, avec couvertures, auteurs,
  dates et métriques. Utilisez-le quand vous avez besoin du corps des
  Articles, pas des posts. À partir de $0.00015 par article.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader) :
  extrait ou stocke des photos, vidéos et GIF à partir de posts ou de
  profils, avec des options MP4 et de métadonnées. Utilisez-le quand vous
  avez besoin des fichiers médias eux-mêmes. À partir de $0.00015 par
  ligne média.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring) :
  suit les mentions de marque avec pertinence, sentiment et réponses sur
  l'expérience client par IA, et compare les runs. Utilisez-le pour surveiller
  une marque dans le temps. À partir de $0.0003 par post analysé.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis) :
  attribue une attitude, une intensité et une probabilité de sarcasme à chaque
  post par IA. Utilisez-le pour un sentiment général sur n'importe quel sujet. À
  partir de $0.0003 par post analysé.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals) :
  attribue une orientation haussière, baissière, neutre ou mixte, un type de
  contenu, une conviction et une pertinence d'actif par IA. Utilisez-le pour
  suivre les actions, la crypto ou les discussions de trading. À partir de
  $0.0003 par post analysé.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor) :
  attribue un format, une attribution de source et une pertinence de sujet aux
  posts d'actualité par IA. Utilisez-le pour séparer le reportage du
  commentaire. À partir de $0.0003 par post analysé.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier) :
  répond à vos propres questions de catégorie, de score et de oui/non pour
  chaque post par IA. Utilisez-le quand les analyses prédéfinies ne
  correspondent pas à vos étiquettes. À partir de $0.0003 par post analysé.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer) :
  estime un Viral Score de 0 à 100 et un verdict pour chaque post à partir de 8
  critères notés par IA. Utilisez-le quand vous étudiez pourquoi des posts
  percent ou font un flop. À partir de $0.0003 par post analysé.

## FAQ

Les réponses aux questions fréquentes, puis où trouver de l'aide.

### Ai-je besoin d'une clé API X ou d'une connexion ?

Non. X Trends Scraper de Xquik n'a besoin ni de clé API X, ni de connexion, ni
d'identifiants.

### Est-il légal de scraper les tendances X ?

X Trends Scraper de Xquik collecte des champs publics de X. Les résultats
peuvent contenir des données personnelles. Assurez-vous d'avoir une finalité
licite et respectez les règles de protection des données applicables. En cas de
doute, demandez conseil à un juriste qualifié.

### Pourquoi mon run n'a-t-il renvoyé aucun résultat ?

Ouvrez d'abord la sortie gratuite `diagnostics`. Le statut d'un run vide vous
invite à vérifier vos cibles et vos filtres. `stopCauses` donne à chaque cause
une `nextAction` à suivre. Un lieu pour lequel X ne propose pas de tendances ne
renvoie aucune ligne. Activez `listLocations` pour voir les noms que X accepte.

### Puis-je utiliser l'API, les planifications et les intégrations ?

Oui. Choisissez parmi 50 tâches publiques ou l'API REST de Xquik.
L'[onglet API](https://apify.com/xquik/x-trends-scraper/api) propose des
exemples en Python, JavaScript et cURL. Les
[planifications](https://docs.apify.com/platform/schedules) Apify lancent X
Trends Scraper de Xquik selon un cron. Les agents passent par
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Utilisez
`latest`, sauf si vous avez besoin d'une build plus ancienne.

### Où trouver de l'aide ?

Ouvrez une issue sur la page de l'Actor ou écrivez à support@xquik.com avec l'ID
du run. Les diagnostics gratuits du key-value store expliquent les runs vides,
partiels ou interrompus.

### Puis-je obtenir une solution sur mesure ?

Oui. Rendez-vous sur [xquik.com](https://xquik.com) ou lisez la
[documentation de l'API](https://docs.xquik.com/introduction). Elle couvre le
tableau de bord, l'API, le serveur MCP et les webhooks.
