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
monde. Ses données X sont les plus complètes. X Community Scraper de Xquik
collecte les infos, les posts, les médias, les recherches, les membres et les
modérateurs d'une Communauté. Il trouve aussi des Communautés par mot-clé ou par
sujet. La plupart des autres Actors Apify facturent avant de filtrer ou de
dédupliquer. Xquik facture seulement les résultats livrés, uniques et conformes
à vos filtres.

Collectez les infos, les posts, les médias, les résultats par mot-clé, les
membres et les modérateurs d'une Communauté X (Twitter) à partir d'URL ou d'ID
de Communauté. Trouvez des Communautés par mot-clé ou par sujet, ou listez
celles que X suggère. Vous payez **$0.00015 par ligne livrée**, et Apify facture
l'usage de la plateforme à part. Vous n'avez besoin ni de clé API X ni de
connexion.

> Xquik est un service tiers indépendant. Non affilié à X Corp.
> "Twitter" et "X" sont des marques déposées de X Corp.

## Que fait X Community Scraper ?

X Community Scraper de Xquik lit les Communautés X (Twitter) publiques à partir
de leurs URL ou de leurs ID. Il renvoie les infos, les posts, les médias, les
résultats par mot-clé, les membres et les modérateurs de chaque Communauté. Il
trouve aussi des Communautés par mot-clé ou par sujet, et liste celles que X
suggère.

### Fonctionnalités clés

- Lisez de nombreuses Communautés et ressources en 1 run.
- Obtenez les infos d'une Communauté avec ses règles, sa question d'adhésion,
  son créateur, son admin et son sujet.
- Collectez les posts du plus récent au plus ancien, ou les posts Top que X
  classe le plus haut.
- Collectez l'onglet Médias, ou cherchez dans les posts d'une Communauté par
  mot-clé.
- Exportez les membres et les modérateurs, ou trouvez des membres par nom.
- Trouvez des Communautés par mot-clé ou par sujet, avec leur fiche complète.
- Filtrez les posts par date, langue, média et engagement.
- Filtrez les membres par taille d'audience, ancienneté du compte et
  certification.
- Les filtres et la suppression des doublons s'appliquent avant la facturation.
- Les runs gardent les lignes livrées et leur progression quand Apify les
  redémarre.

### Cas d'usage

- Créez des listes de prospects à partir des membres d'une Communauté de niche.
- Suivez les retours produit et les demandes de fonctionnalités dans une
  Communauté d'utilisateurs.
- Repérez les lancements, les posts de recrutement et les annonces de levée de
  fonds parmi les fondateurs.
- Comparez des Communautés par taille, sujet et activité.
- Lisez les règles d'une Communauté avant d'y publier.
- Trouvez les modérateurs et les membres les plus suivis d'une Communauté.
- Collectez des posts avec images ou vidéos pour vos recherches créatives.

### Quelles données X Community Scraper peut-il extraire ?

Les lignes de Communauté utilisent `resultType: "community"`. Voici les
principaux champs.

| Champ             | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| `id`              | ID de la Communauté                                          |
| `name`            | Nom de la Communauté                                         |
| `description`     | Description de la Communauté                                 |
| `url`             | URL de la Communauté                                         |
| `member_count`    | Nombre de membres                                            |
| `moderator_count` | Nombre de modérateurs                                        |
| `rules`           | Règles de la Communauté                                      |
| `question`        | Question posée aux nouveaux membres                          |
| `primary_topic`   | Sujet sous lequel X classe la Communauté                     |
| `searchTags`      | Tags par lesquels X trouve la Communauté                     |
| `creator`         | Profil public du créateur                                    |
| `admin`           | Profil public de l'admin                                     |
| `membersFacepile` | Membres que X affiche en aperçu sur la page de la Communauté |
| `is_nsfw`         | Si la Communauté est marquée comme sensible                  |
| `banner`          | URL, taille et couleurs principales de la bannière           |
| `sourceTarget`    | L'URL, l'ID, le mot-clé ou le sujet que vous avez saisi      |

Chaque ressource ajoute des lignes de son propre type.

| `resultType`         | Ressource ou entrée       | Une ligne par            |
| -------------------- | ------------------------- | ------------------------ |
| `community`          | `info`, mots-clés, sujets | Communauté               |
| `communityTweet`     | `tweets`, `search`        | Post                     |
| `communityMedia`     | `media`                   | Post avec photo ou vidéo |
| `communityMember`    | `members`, `memberNames`  | Membre                   |
| `communityModerator` | `moderators`              | Modérateur               |
| `communityTopic`     | `listTopics`              | Sujet                    |

Les lignes de post contiennent `text`, `createdAt`, `likeCount`, `replyCount`,
`retweetCount`, `viewCount`, `media` et le profil `author`. Les lignes de membre
et de modérateur contiennent les champs de profil, comme `username`,
`followers`, `verified` et `communityRole`.

## Comment utiliser X Community Scraper pour scraper des données de Communauté ?

Suivez ces étapes dans Apify Console.

1. Ouvrez un [exemple de tâche](#exemples-de-tâches) ou l'onglet Input.
2. Collez des URL de Communauté dans `startUrls` ou des ID dans `communityIds`.
3. Choisissez `resources` et ajoutez des filtres comme `sinceDate` ou
   `minLikes`.
4. Réglez `maxItems`, puis cliquez sur Start.
5. Exportez le dataset en JSON, CSV, Excel ou HTML.

Chaque recette ci-dessous est une entrée complète.

### Obtenir les infos et les posts récents d'une Communauté

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["info", "tweets"],
  "maxItems": 200
}
```

`startUrls` accepte chaque URL comme simple chaîne ou comme objet
`{ "url": "..." }`.

```json
{
  "startUrls": [
    "https://x.com/i/communities/1493446837214187523",
    { "url": "https://x.com/i/communities/1493446837214187523" }
  ]
}
```

### Collecter les posts Top

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["tweets"],
  "postsOrder": "Top",
  "minLikes": 50,
  "maxItems": 100
}
```

Réglez `postsOrder` sur `Top` pour les posts que X classe le plus haut. Ajoutez
`"media"` à `resources` pour l'onglet Médias.

### Chercher dans les posts d'une Communauté

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["search"],
  "query": "pricing",
  "queryType": "Latest",
  "maxItems": 100
}
```

### Exporter les membres et les modérateurs

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["members", "moderators"],
  "minFollowers": 1000,
  "maxItems": 1000
}
```

Les filtres de membres s'appliquent aux lignes de membre et de modérateur. Les
lignes filtrées n'atteignent jamais le dataset, donc vous ne les payez jamais.

### Trouver des membres par nom

```json
{
  "communityIds": ["1493446837214187523"],
  "memberNames": ["marckohlbrugge"],
  "maxItems": 100
}
```

X vérifie jusqu'à 10 comptes correspondants par nom, comme la recherche de
membres de x.com. Chaque membre trouvé donne 1 ligne `communityMember` avec son
`communityRole`. Un run avec `memberNames` ne lit aucune autre ressource, sauf
si `resources` la nomme.

### Trouver des Communautés par mot-clé ou par sujet

```json
{
  "searchTerms": ["artificial intelligence"],
  "topics": ["Technology"],
  "maxItems": 100
}
```

Chaque Communauté trouvée porte ses règles et les profils de son créateur, de
ses admins et de ses membres. Réglez `includeDetails` sur `false` pour un run
plus rapide avec la fiche courte. Activez `includeSuggested` pour les
Communautés que X suggère, qui peuvent changer d'un run à l'autre, ou
`listTopics` pour tous les sujets et leurs sous-sujets.

## Exemples de tâches

Choisissez parmi 50 tâches publiques. Chacune a une entrée limitée et une vue de
dataset adaptée. Modifiez une tâche avant de la lancer.

- [Obtenir un aperçu d'une Communauté X](https://apify.com/xquik/x-community-scraper/examples/get-an-x-community-overview)
- [Obtenir les détails d'une Communauté X avec ses posts récents](https://apify.com/xquik/x-community-scraper/examples/get-community-details-with-recent-posts)
- [Trouver les meilleurs posts sur la technologie dans une Communauté X](https://apify.com/xquik/x-community-scraper/examples/find-top-technology-posts-in-a-community)
- [Exporter les membres d'une Communauté X](https://apify.com/xquik/x-community-scraper/examples/export-x-community-members)
- [Exporter les membres certifiés d'une Communauté X](https://apify.com/xquik/x-community-scraper/examples/export-verified-community-members)
- [Lister les modérateurs d'une Communauté X](https://apify.com/xquik/x-community-scraper/examples/list-x-community-moderators)
- [Comparer des Communautés de développeurs par taille et par sujet](https://apify.com/xquik/x-community-scraper/examples/compare-developer-communities-by-size)
- [Lire le règlement d'une Communauté X avant de publier](https://apify.com/xquik/x-community-scraper/examples/read-community-rules-before-you-post)
- [Trouver des posts de levée de fonds dans une Communauté de startups](https://apify.com/xquik/x-community-scraper/examples/find-funding-posts-in-a-startup-community)
- [Trouver des posts de recrutement dans une Communauté d'ingénierie logicielle](https://apify.com/xquik/x-community-scraper/examples/find-hiring-posts-in-a-software-community)
- [Trouver les membres d'une Communauté de startups ayant une large audience](https://apify.com/xquik/x-community-scraper/examples/find-startup-community-members-with-big-audiences)
- [Auditer une petite Communauté X de bout en bout](https://apify.com/xquik/x-community-scraper/examples/audit-a-small-community-end-to-end)

## Combien coûte le scraping de Communautés X ?

X Community Scraper de Xquik coûte $0.00015 par ligne livrée sur chaque plan
Apify. Apify facture votre usage de la plateforme à part. Xquik applique une
seule facturation par ligne de données livrée. Les diagnostics sont gratuits
dans la sortie `diagnostics`.

- Vous n'avez besoin d'aucun abonnement Xquik.
- Vous ne payez pas de frais séparés de démarrage, de Communauté, de ressource
  ou de requête.
- Une Communauté trouvée coûte 1 ligne, avec ou sans sa fiche complète.
- Les filtres et la déduplication s'appliquent avant la facturation. Vous ne
  payez jamais les lignes filtrées ou en double.
- Les réglages de coût total maximal d'Apify plafonnent les lignes livrées.

Un run qui rencontre un problème, ou un grand run, écrit aussi un enregistrement
`run-report`. Un petit run sans problème s'en passe et réduit l'usage Apify.
Activez `alwaysSaveRunRecords` pour l'écrire à chaque run.

Pour plafonner les dépenses d'un run, consultez les
[Options de run](#options-de-run).

## Runs vides, partiels et arrêtés

X Community Scraper de Xquik explique gratuitement les runs vides, partiels et
arrêtés. Le statut du run indique pourquoi il s'est arrêté. Il compte aussi les
résultats facturés et les cibles lues.

### Résultats vides

Le statut d'un run vide vous invite à vérifier vos cibles et vos filtres. Les
lignes filtrées n'entament jamais votre limite de résultats. Un run qui lit
chaque cible sans récupérer aucune ligne n'écrit aucun enregistrement. Son
statut indique pourquoi et ce qu'il faut changer. L'Actor renvoie seulement les
Communautés publiques accessibles sur X. Les champs disponibles varient selon la
Communauté.

### Runs partiels

Une extraction interrompue écrit un diagnostic `partial` gratuit. Les lignes
livrées restent dans le dataset. Lisez `availableResults`, `failedTargets`,
`retryable` et `nextAction` avant de relancer. Une sortie réussie de l'Actor
confirme la livraison, pas une extraction complète.

### Causes d'arrêt

Le statut du run nomme chaque cause d'arrêt anticipé. `stopCauses` liste chaque
cause avec ses propres `message`, `retryable` et `nextAction`. Les causes sont
`target_not_found`, `target_failed`, `pagination_safety_limit` et
`deadline_reached`. Une cible introuvable n'entre dans la liste que si une autre
cause a arrêté le run. Le run est `retryable` dès qu'une cause l'est. L'Actor
n'ajoute aucune limite de temps.

## Entrée

L'onglet Input liste toutes les options. Indiquez des URL ou des ID de
Communauté, des mots-clés ou des sujets, ou activez `includeSuggested` ou
`listTopics`. Tous les autres champs sont facultatifs.

| Champ                          | Ce qu'il fait                                                          |
| ------------------------------ | ---------------------------------------------------------------------- |
| `startUrls`                    | URL de Communauté sur x.com                                            |
| `communityIds`                 | ID numériques de Communauté                                            |
| `resources`                    | `info`, `tweets`, `media`, `search`, `members`, `moderators`           |
| `query`                        | Mot-clé pour la ressource `search`                                     |
| `queryType`                    | Ordre `Latest` ou `Top` pour la recherche par mot-clé                  |
| `postsOrder`                   | Ordre `Latest` ou `Top` pour les posts                                 |
| `memberNames`                  | Noms ou noms d'utilisateur à trouver parmi les membres                 |
| `searchTerms`                  | Mots-clés pour trouver des Communautés                                 |
| `topics`                       | Noms ou ID de sujets, comme `Technology`                               |
| `includeSuggested`             | Ajoute les Communautés que X suggère de rejoindre                      |
| `listTopics`                   | Ajoute tous les sujets de Communauté et leurs sous-sujets              |
| `includeDetails`               | Ajoute la fiche complète aux Communautés trouvées par mot-clé ou sujet |
| `maxItems`                     | Plafond de lignes livrées sur tout le run                              |
| `maxItemsPerTarget`            | Plafond de lignes pour chaque ressource de Communauté                  |
| `sinceDate`, `untilDate`       | Garde les posts d'une plage de dates                                   |
| `language`                     | Garde les posts dans 1 code de langue                                  |
| `mediaType`                    | Garde les posts avec images, vidéos, GIF, liens, ou sans rien          |
| `minViews`, `minLikes`         | Garde les posts au-dessus d'un nombre de vues ou de J'aime             |
| `minReplies`, `minRetweets`    | Garde les posts au-dessus d'un nombre de réponses ou de reposts        |
| `nativeRetweets`               | Garde seulement les reposts natifs                                     |
| `verifiedOnly`                 | Garde les auteurs, membres ou modérateurs certifiés                    |
| `minFollowers`, `maxFollowers` | Garde les membres dans une fourchette d'audience                       |
| `minAccountAgeDays`            | Garde les membres dont le compte a au moins ce nombre de jours         |
| `dedupeAcrossTargets`          | Retire les lignes répétées entre Communautés avant facturation         |

### Migrer depuis un autre Actor de Communautés

Les noms `ranking` et `sort` fonctionnent comme `postsOrder`. `Top` ou
`Relevance` lit les posts les mieux classés. Si vous réglez l'un d'eux et
`postsOrder`, la valeur de `postsOrder` l'emporte. Le log du run nomme le champ
écarté.

### Choisir les bonnes entrées

- Pour un aperçu rapide, gardez les ressources par défaut `info` et `tweets`.
- Pour des listes de prospects, choisissez `members` avec `minFollowers` et
  `verifiedOnly`.
- Pour la recherche produit, choisissez `search` avec une `query` comme `bug` ou
  `pricing`.
- Pour la recherche créative, choisissez `media` et réglez `mediaType`.
- Pour découvrir des Communautés, envoyez `searchTerms` ou `topics` sans ID.

## Sortie

Chaque ligne est un objet JSON. Chaque ligne inclut `sourceTarget` pour la
Communauté, le mot-clé ou le sujet d'entrée. X Community Scraper de Xquik garde
les champs source et n'invente aucune valeur. Le schéma du dataset donne à
chaque champ un titre et une description.

Les exemples utilisent des valeurs fictives. Les résultats reflètent les données
en direct. Une ligne d'infos de Communauté ressemble à ceci.

```json
{
  "resultType": "community",
  "sourceTarget": "1493446837214187523",
  "id": "1493446837214187523",
  "name": "Sample Community",
  "description": "A place to share what you build.",
  "member_count": 1200,
  "moderator_count": 4,
  "primary_topic": "Technology"
}
```

Exportez le dataset en JSON, CSV, Excel ou HTML.

## Options de run

- Réglez le coût total maximal d'Apify pour plafonner le coût du run. Laissez
  `maxItems` élevé pour obtenir le plus de lignes possible dans ce budget.
- Réglez `maxTotalChargeUsd` dans l'API Apify, ou Max cost per run dans Apify
  Console.
- Mettez toutes vos Communautés dans 1 run. Chaque run paie à Apify le même coût
  de démarrage.
- `maxItemsPerTarget` plafonne les lignes de chaque ressource de Communauté.
- `maxConcurrency` fixe le nombre de ressources de Communauté lues en même
  temps. La valeur par défaut est le réglage sûr le plus rapide.

Sélectionnez `latest` pour chaque run afin d'obtenir chaque correctif publié.
Les tâches et les planifications enregistrées gardent leur propre choix de
build, donc laissez-le sur `latest`.

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
- [X Space Scraper](https://apify.com/xquik/x-space-scraper) trouve des Spaces
  par mot-clé et lit leurs titres, états, heures, nombres d'auditeurs, hôtes et
  intervenants. Il lit aussi des diffusions par URL ou par ID. Utilisez-le quand
  vous suivez l'audio et la vidéo en direct sur X. À partir de $0.00015 par
  Space ou diffusion.
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

## Besoin de plus que du scraping ?

Xquik propose aussi 53 outils de tableau de bord, une API REST, des webhooks
signés et un serveur MCP.

- La [documentation de l'API](https://docs.xquik.com/introduction) réunit les
  guides de l'API REST.
- L'[API d'infos de Communauté](https://docs.xquik.com/api-reference/x/community-info)
  renvoie la fiche d'une Communauté.
- L'[API des posts de Communauté](https://docs.xquik.com/api-reference/x/community-tweets)
  renvoie les posts d'une Communauté.
- L'[API des membres de Communauté](https://docs.xquik.com/api-reference/x/community-members)
  exporte les membres d'une Communauté.
- L'[API de recherche de Communautés](https://docs.xquik.com/api-reference/x/community-find)
  trouve des Communautés par mot-clé.
- Avec le [serveur MCP](https://docs.xquik.com/mcp/overview), découvrez les
  outils pris en charge.
- Les [webhooks](https://docs.xquik.com/webhooks/overview) livrent des
  événements signés.

## FAQ

Les réponses aux questions fréquentes, puis où trouver de l'aide.

### Ai-je besoin d'une clé API X ou d'une connexion ?

Non. X Community Scraper de Xquik n'a besoin ni de clé API X, ni de connexion,
ni d'identifiants.

### Comment trouver l'ID d'une Communauté ?

Ouvrez la Communauté sur x.com. L'ID est le nombre qui suit `/i/communities/`
dans l'URL. Vous pouvez aussi coller l'URL entière dans `startUrls`.

### Puis-je exporter les membres d'une Communauté X en CSV ou Excel ?

Oui. Choisissez la ressource `members`, puis exportez le dataset en CSV, Excel,
JSON ou HTML.

### Puis-je trouver une Communauté sans son ID ?

Oui. Envoyez des mots-clés dans `searchTerms` ou des sujets dans `topics`.
Chaque Communauté trouvée donne 1 ligne avec sa fiche complète.

### Puis-je obtenir les posts Top d'une Communauté ?

Oui. Réglez `postsOrder` sur `Top`. Ajoutez `minLikes` ou `minViews` pour garder
seulement les posts les plus populaires.

### Combien de Communautés puis-je scraper en 1 run ?

Autant que vous en listez. `maxItems` et votre limite de dépenses Apify
plafonnent les lignes.

### Lit-il les Communautés privées ?

Non. X Community Scraper de Xquik renvoie seulement les Communautés publiques
accessibles sur X.

### Est-il légal de scraper des Communautés X ?

X Community Scraper de Xquik collecte des champs publics de X. Les résultats
peuvent contenir des données personnelles. Assurez-vous d'avoir une finalité
licite et respectez les règles de protection des données applicables. En cas de
doute, demandez conseil à un juriste qualifié.

### Pourquoi mon run n'a-t-il renvoyé aucun résultat ?

Lisez d'abord le statut du run. Le statut d'un run vide vous invite à vérifier
vos cibles et vos filtres. La sortie gratuite `diagnostics` apparaît quand
quelque chose demande votre attention. Son `stopCauses` donne à chaque cause une
`nextAction` à suivre. Le run liste chaque entrée qu'il ne peut pas lire et
indique comment la corriger.

### Puis-je utiliser l'API, les planifications et les intégrations ?

Oui. Choisissez parmi 50 tâches publiques ou l'API REST de Xquik.
L'[onglet API](https://apify.com/xquik/x-community-scraper/api) propose des
exemples en Python, JavaScript et cURL. Les
[planifications](https://docs.apify.com/platform/schedules) Apify lancent X
Community Scraper de Xquik selon un cron. Les agents passent par
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Utilisez
`latest`, sauf si vous avez besoin d'une build plus ancienne.

### Puis-je obtenir une solution sur mesure ?

Oui. Rendez-vous sur [xquik.com](https://xquik.com) ou lisez la
[documentation de l'API](https://docs.xquik.com/introduction). Elle couvre le
tableau de bord, l'API, le serveur MCP et les webhooks.

### Où trouver de l'aide ?

Ouvrez une issue sur la page de l'Actor ou écrivez à <support@xquik.com> avec
l'ID du run. Les diagnostics gratuits du key-value store expliquent les runs qui
demandent votre attention. Un run qui ne récupère aucune ligne en indique la
raison dans son statut.
