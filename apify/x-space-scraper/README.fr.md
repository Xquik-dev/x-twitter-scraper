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
monde. Ses données X sont les plus complètes. X Space Scraper de Xquik trouve
des Spaces par mot-clé, hôte ou hashtag et lit des Spaces et des diffusions
(broadcasts) par URL ou par ID. La plupart des autres Actors Apify facturent
avant de filtrer ou de dédupliquer. Xquik facture seulement les résultats livrés
et uniques.

Trouvez des Spaces Twitter sur n'importe quel sujet, en direct, programmés ou
terminés. Vous n'avez besoin ni de clé API X ni de connexion. Vous payez
**$0.00015 par Space ou diffusion livré**, et Apify facture l'usage de la
plateforme à part.

> Xquik est un service tiers indépendant. Non affilié à X Corp.
> "Twitter" et "X" sont des marques déposées de X Corp.

## Données des Spaces

- Le titre, l'état et les heures de programmation, de début et de fin de chaque
  Space.
- Le nombre d'auditeurs en direct, les lectures du replay et les comptes
  présents dans le Space en ce moment.
- Le profil public de l'hôte, les co-hôtes, les intervenants et les auditeurs
  que X liste.
- Les réglages de replay, de clips et de verrouillage, ainsi que le post qui
  annonce le Space, avec son texte, ses compteurs et son auteur.
- Les posts que les hôtes et les intervenants ont partagés dans le Space, avec
  qui a partagé chacun et quand.
- L'enregistrement d'un Space terminé, sous forme d'URL de playlist HLS, avec
  `includeReplay`.
- Les diffusions par URL ou par ID : titre, état, heures, nombre de spectateurs
  et hôte.
- La suppression des doublons avant la facturation : un Space trouvé par 2
  termes de recherche donne 1 ligne.

## Comment trouver des Spaces X

1. Ouvrez X Space Scraper de Xquik dans Apify Console.
2. Saisissez des mots, des hashtags ou des opérateurs de recherche X dans
   `searchTerms`.
3. Ou collez des URL de Space dans `startUrls`, ou des ID de Space dans
   `spaceIds`.
4. Pour les diffusions, collez leurs URL dans `startUrls` ou leurs ID dans
   `broadcastIds`.
5. Réglez `maxItems` pour plafonner les lignes livrées, puis cliquez sur Start.
6. Téléchargez le dataset en JSON, CSV ou Excel, ou passez par l'API Apify.

`startUrls` accepte chaque URL comme simple chaîne ou comme objet
`{ "url": "..." }` :

```json
{
  "startUrls": [
    "https://x.com/i/spaces/1OGwblLjnQMKB",
    { "url": "https://x.com/i/broadcasts/1nGeLMWbkpaKX" }
  ]
}
```

## Entrée

```json
{
  "searchTerms": ["bitcoin", "from:solana"],
  "queryType": "Latest",
  "maxItems": 1000
}
```

Un terme de recherche trouve les Spaces que partagent les posts correspondants.
Il accepte les opérateurs de la recherche X :

| Objectif                                     | Terme de recherche |
| -------------------------------------------- | ------------------ |
| Des Spaces sur un sujet                      | `bitcoin`          |
| Des Spaces partagés par un compte            | `from:solana`      |
| Des Spaces sous un hashtag                   | `#AI`              |
| Des Spaces dans 1 langue                     | `startups lang:es` |
| Des Spaces partagés par des posts très aimés | `nba min_faves:50` |

`queryType` choisit quels posts passent en premier : `Latest` pour les plus
récents, `Top` pour les plus engageants.

Lisez des Spaces que vous connaissez déjà par URL ou par ID :

```json
{
  "startUrls": [{ "url": "https://x.com/i/spaces/1OGwblLjnQMKB" }],
  "spaceIds": ["1OGwblLjnQMKB"]
}
```

Activez `includeReplay` pour obtenir l'enregistrement de chaque Space terminé :

```json
{ "spaceIds": ["1OGwblLjnQMKB"], "includeReplay": true }
```

La ligne porte alors `replay` avec `url`, une playlist HLS, ainsi que
`streamType` et `status`. Un Space en direct, programmé ou sans enregistrement
n'a pas de `replay`. L'enregistrement ne coûte rien de plus.

Lisez des diffusions, la vidéo en direct que X héberge sur `x.com/i/broadcasts`,
par URL ou par ID :

```json
{
  "startUrls": [{ "url": "https://x.com/i/broadcasts/1nGeLMWbkpaKX" }],
  "broadcastIds": ["1nGeLMWbkpaKX"]
}
```

Les petits runs sans problème n'écrivent pas `run-report` et réduisent l'usage
Apify. Activez `alwaysSaveRunRecords` pour l'écrire à chaque run.

## Sortie

Chaque ligne contient 1 Space ou 1 diffusion et son terme de recherche, son URL
ou son ID dans `sourceTarget`. `resultType` vaut `space` ou `broadcast`.

Les exemples utilisent des valeurs fictives. Les résultats reflètent les données
en direct. Une ligne de Space ressemble à ceci :

```json
{
  "id": "1SampleSpace1",
  "title": "Sample Space about bitcoin",
  "state": "Ended",
  "startedAt": "2026-03-11T17:00:26.227Z",
  "endedAt": "2026-03-11T17:49:29.190Z",
  "totalLiveListeners": 841,
  "totalReplayWatched": 609,
  "isAvailableForReplay": true,
  "creator": { "username": "sample_host", "name": "Sample Host" },
  "admins": [{ "username": "sample_host", "name": "Sample Host" }],
  "speakers": [{ "username": "sample_speaker", "name": "Sample Speaker" }],
  "listeners": [],
  "sharings": [
    {
      "id": "2106511178339881415",
      "sharedAt": "2026-03-11T17:20:16.658Z",
      "sharedBy": { "username": "sample_speaker", "name": "Sample Speaker" },
      "tweet": { "id": "2105620368836706789", "text": "Sample shared post" }
    }
  ],
  "resultType": "space",
  "sourceTarget": "bitcoin"
}
```

`state` contient 1 valeur parmi 5, telles que X les nomme :

| `state`      | Le Space                                 |
| ------------ | ---------------------------------------- |
| `NotStarted` | Est programmé et porte `scheduledStart`. |
| `Running`    | Est en direct en ce moment.              |
| `Ended`      | Est terminé. Son hôte l'a terminé.       |
| `TimedOut`   | Est terminé. X l'a fermé, pas son hôte.  |
| `Canceled`   | Était programmé et n'a jamais commencé.  |

Les Spaces `Ended` et `TimedOut` portent `endedAt`, et les deux peuvent garder
un enregistrement. X montre un Space réservé aux abonnés ou à une Communauté
seulement à son public, donc ces Spaces ne renvoient aucune ligne.

Une ligne de diffusion a `resultType: "broadcast"` et ressemble à ceci :

```json
{
  "id": "1SampleBcast1",
  "title": "Sample launch broadcast",
  "state": "Ended",
  "startedAt": "2026-09-17T00:54:56.506Z",
  "endedAt": "2026-09-17T01:17:35.036Z",
  "totalWatched": 161758,
  "totalWatching": 21639,
  "width": 3840,
  "height": 2160,
  "creator": { "username": "sample_host", "name": "Sample Host" },
  "resultType": "broadcast",
  "sourceTarget": "1SampleBcast1"
}
```

## Combien coûte le scraping de Spaces X ?

Le prix est de $0.00015 par Space ou diffusion livré sur chaque plan Apify.
Apify facture votre usage de la plateforme à part.

- Une facturation par ligne de données livrée. Les diagnostics sont gratuits
  dans `diagnostics`.
- Pas de frais de démarrage, de recherche ou de page.
- La déduplication a lieu avant la facturation.

## Limites et reprise

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

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper) scrape des posts
  (tweets) depuis des recherches, des fils de profil, des Listes et des ID de
  post, avec plus de 50 filtres et des exports plats. Utilisez-le quand vous
  avez besoin de données de posts sans analyse. À partir de $0.00015 par ligne.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper) scrape des
  profils ainsi que leurs posts, réponses, médias et abonnés à partir de noms
  d'utilisateur, d'ID ou d'URL. Utilisez-le quand vous partez de comptes plutôt
  que de recherches. À partir de $0.00015 par ligne.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper) scrape des
  réponses, des commentaires et des conversations entières sous les posts avec
  plus de 25 filtres. Utilisez-le quand vous avez besoin des échanges sous les
  posts. À partir de $0.00015 par ligne.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper) scrape en
  masse les réponses, citations, comptes qui ont reposté et discussions de
  posts, à partir d'URL ou d'ID. Utilisez-le pour mesurer qui a interagi avec
  des posts. À partir de $0.00015 par ligne.
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper)
  scrape les posts qui citent des posts, avec le texte, les médias, les
  compteurs, les auteurs et 11 filtres. Utilisez-le quand vous étudiez qui a
  cité des posts et ce qu'ils ont dit. À partir de $0.00015 par post.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper) scrape les
  abonnés, les abonnements, les membres et abonnés de Liste et les membres de
  Communauté sous forme de lignes de profil. Utilisez-le quand vous avez besoin
  de listes d'audience ou de membres. À partir de $0.00015 par profil.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper)
  recherche des comptes par nom d'utilisateur, bio et localisation, avec des
  filtres d'abonnés, de certification, d'ancienneté et de localisation.
  Utilisez-le pour créer des listes de comptes à partir d'une recherche. À
  partir de $0.00015 par profil.
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper)
  vérifie où sont basés les comptes avec le libellé "Account based in" de X, la
  façon dont ils se sont connectés à X et leurs changements de nom
  d'utilisateur. Utilisez-le quand vous vérifiez où sont basés des comptes. À
  partir de $0.00015 par compte.
- [X Email Scraper](https://apify.com/xquik/x-email-scraper) récupère les
  e-mails, téléphones et liens que les comptes publient sur leur profil, à
  partir de noms d'utilisateur, d'abonnés ou de recherches d'utilisateurs.
  Utilisez-le quand vous avez besoin des e-mails que les profils publient. À
  partir de $0.00015 par profil.
- [X List Scraper](https://apify.com/xquik/x-list-scraper) scrape les posts,
  membres et abonnés d'une Liste à partir d'URL ou d'ID de Liste. Utilisez-le
  quand une Liste choisie définit vos sources. À partir de $0.00015 par ligne.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper) scrape les
  infos, posts, recherches, membres et modérateurs d'une Communauté. Utilisez-le
  quand vos sources sont des Communautés X. À partir de $0.00015 par ligne.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper) scrape les
  tendances en temps réel par lieu, avec rang, volume, requête et WOEID.
  Utilisez-le pour suivre les tendances de chaque lieu. À partir de $0.00015 par
  tendance.
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper) scrape les offres
  d'emploi X par mot-clé, lieu, mode de travail, niveau d'expérience et
  entreprise, avec salaires et liens de candidature. Utilisez-le quand vous
  collectez des offres d'emploi publiées sur X. À partir de $0.00015 par offre.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper) scrape les
  Articles X longs en Markdown et en texte, avec couvertures, auteurs, dates et
  métriques. Utilisez-le quand vous avez besoin du corps des Articles, pas des
  posts. À partir de $0.00015 par article.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader) extrait ou
  stocke des photos, vidéos et GIF à partir de posts ou de profils, avec des
  options MP4 et de métadonnées. Utilisez-le quand vous avez besoin des fichiers
  médias eux-mêmes. À partir de $0.00015 par ligne média.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring)
  suit les mentions de marque avec pertinence, sentiment et réponses sur
  l'expérience client par IA, et compare les runs. Utilisez-le pour surveiller
  une marque dans le temps. À partir de $0.0003 par post analysé.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis)
  attribue une attitude, une intensité et une probabilité de sarcasme à chaque
  post par IA. Utilisez-le pour un sentiment général sur n'importe quel sujet. À
  partir de $0.0003 par post analysé.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)
  attribue une orientation haussière, baissière, neutre ou mixte, un type de
  contenu, une conviction et une pertinence d'actif par IA. Utilisez-le pour
  suivre les actions, la crypto ou les discussions de trading. À partir de
  $0.0003 par post analysé.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)
  attribue un format, une attribution de source et une pertinence de sujet aux
  posts d'actualité par IA. Utilisez-le pour séparer le reportage du
  commentaire. À partir de $0.0003 par post analysé.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)
  répond à vos propres questions de catégorie, de score et de oui/non pour
  chaque post par IA. Utilisez-le quand les analyses prédéfinies ne
  correspondent pas à vos étiquettes. À partir de $0.0003 par post analysé.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)
  estime un Viral Score de 0 à 100 et un verdict pour chaque post à partir de 8
  critères notés par IA. Utilisez-le quand vous étudiez pourquoi des posts
  percent ou font un flop. À partir de $0.0003 par post analysé.

## FAQ

Les réponses aux questions fréquentes, puis où trouver de l'aide.

### Ai-je besoin d'une clé API X ou d'une connexion ?

Non. X Space Scraper de Xquik n'a besoin ni de clé API X, ni de connexion, ni
d'identifiants.

### Puis-je trouver des Spaces en direct en ce moment ?

Oui. Lancez la recherche avec `queryType` réglé sur `Latest`, puis gardez les
lignes dont `state` vaut `Running`. Les lignes `NotStarted` sont programmées et
portent `scheduledStart`.

### Est-il légal de scraper des Spaces X ?

X Space Scraper de Xquik collecte des champs publics de X. Les résultats peuvent
contenir des données personnelles. Assurez-vous d'avoir une finalité licite et
respectez les règles de protection des données applicables. En cas de doute,
demandez conseil à un juriste qualifié.

### Pourquoi mon run n'a-t-il renvoyé aucun résultat ?

Ouvrez d'abord la sortie gratuite `diagnostics`. Le statut d'un run vide vous
invite à vérifier vos cibles. `stopCauses` donne à chaque cause une `nextAction`
à suivre.

### Puis-je utiliser l'API, les planifications et les intégrations ?

Oui. Utilisez l'API Apify ou l'API REST de Xquik.
L'[onglet API](https://apify.com/xquik/x-space-scraper/api) propose des exemples
en Python, JavaScript et cURL. Les
[planifications](https://docs.apify.com/platform/schedules) Apify lancent X
Space Scraper de Xquik selon un cron. Les agents passent par
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
