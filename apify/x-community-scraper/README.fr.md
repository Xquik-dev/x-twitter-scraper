[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · **Français** · [Italiano](README.it.md)

[![Framer connecte Xquik MCP aux agents de codage](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Découvrez comment Framer utilise les scrapers Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
avec Claude Code, Codex, Cursor & d'autres outils, à partir de 6:07.

Xquik est le service de scraping X (Twitter) le plus rapide et le moins cher au
monde. Ses données X sont les plus complètes. X Community Scraper de Xquik
collecte les infos, posts, médias, recherches, membres & modérateurs des
Communautés, & trouve des Communautés par mot-clé ou par sujet. La plupart des
autres Actors Apify facturent avant de filtrer ou de dédupliquer. Xquik facture
seulement les résultats livrés, uniques et conformes à vos filtres.

Collectez les infos, posts, médias, résultats par mot-clé, membres & modérateurs
de Communautés Twitter à partir de leurs URL ou de leurs ID. Trouvez des
Communautés par mot-clé ou par sujet, ou listez celles que X suggère. Vous payez
**$0.00015 par ligne livrée**, & Apify facture l'usage de la plateforme à part.
Vous n'avez besoin ni de clé API X ni de connexion.

> Xquik est un service tiers indépendant. Non affilié à X Corp. "Twitter" et "X"
> sont des marques déposées de X Corp.

## Que fait X Community Scraper ?

X Community Scraper de Xquik lit les Communautés X (Twitter) publiques à partir
de leurs URL ou de leurs ID. Il renvoie les infos, les posts, les médias, les
résultats par mot-clé, les membres & les modérateurs de chaque Communauté. Il
trouve aussi des Communautés par mot-clé ou par sujet, & liste celles que X
suggère.

### Fonctionnalités clés

- Lisez de nombreuses Communautés & ressources en 1 run.
- Obtenez les infos d'une Communauté avec ses règles, sa question d'adhésion,
  son créateur, son admin & son sujet.
- Collectez les posts du plus récent au plus ancien, ou les posts Top que X
  classe le plus haut.
- Collectez l'onglet Médias, ou cherchez dans les posts d'une Communauté par
  mot-clé.
- Exportez les membres & les modérateurs, ou trouvez des membres par nom.
- Trouvez des Communautés par mot-clé ou par sujet, avec leur fiche complète.
- Filtrez les posts par date, langue, média & engagement.
- Filtrez les membres par taille d'audience, ancienneté du compte &
  certification.
- Les filtres & la suppression des doublons passent avant la facturation.
- Les runs gardent les lignes livrées & leur progression quand Apify les
  redémarre.

### Cas d'usage

- Créez des listes de prospects à partir des membres d'une Communauté de niche.
- Suivez les retours produit & les demandes de fonctionnalités dans une
  Communauté d'utilisateurs.
- Repérez les lancements, les posts de recrutement & les annonces de levée de
  fonds parmi les fondateurs.
- Comparez des Communautés par taille, sujet & activité.
- Lisez les règles d'une Communauté avant d'y publier.
- Trouvez les modérateurs & les membres les plus suivis d'une Communauté.
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
| `question`        | Ce que la Communauté demande à un utilisateur qui la rejoint |
| `primary_topic`   | Sujet sous lequel X classe la Communauté                     |
| `searchTags`      | Tags par lesquels X trouve la Communauté                     |
| `creator`         | Profil public du créateur                                    |
| `admin`           | Profil public de l'admin                                     |
| `membersFacepile` | Membres que X affiche en aperçu sur la page de la Communauté |
| `is_nsfw`         | Indique si la Communauté est marquée comme sensible          |
| `banner`          | URL, taille & couleurs principales de la bannière            |
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
`retweetCount`, `viewCount`, `media` & le profil `author`. Les lignes de membre
& de modérateur contiennent les champs de profil, comme `username`, `followers`,
`verified` & `communityRole`. Elles contiennent aussi `email` & `contactInfo`,
les e-mails, téléphones & liens que publie chaque profil.

## Comment utiliser X Community Scraper pour scraper des données de Communauté ?

Vous débutez sur Apify ?
[Créez d'abord un compte gratuit](https://console.apify.com/sign-up?fpr=xquik).
Le plan gratuit ne demande aucune carte bancaire & donne $5 à dépenser chaque
mois. À $0.00015 par ligne, $5 couvrent jusqu'à 33 000 lignes, hors usage de la
plateforme. Revenez ensuite ici & cliquez sur Try for free.

Suivez ces étapes dans Apify Console.

1. Ouvrez un [exemple de tâche](#exemples-de-tâches) ou l'onglet Input.
2. Collez des URL de Communauté dans `startUrls` ou des ID dans `communityIds`.
3. Choisissez `resources` & ajoutez des filtres, comme `sinceDate` ou
   `minLikes`.
4. Réglez `maxItems`, puis cliquez sur Start.
5. Exportez le dataset en JSON, CSV, Excel ou HTML.

Chaque recette ci-dessous est une entrée complète.

### Obtenir les infos & les posts récents d'une Communauté

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

### Exporter les membres & les modérateurs

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["members", "moderators"],
  "minFollowers": 1000,
  "maxItems": 1000
}
```

Les filtres de membres s'appliquent aux lignes de membre & de modérateur. Les
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
membres de X. Chaque membre trouvé donne 1 ligne `communityMember` avec son
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

Chaque Communauté trouvée porte ses règles ainsi que les profils de son
créateur, de son admin & de ses membres. Réglez `includeDetails` sur `false`
pour un run plus rapide avec la fiche courte. Activez `includeSuggested` pour
les Communautés que X suggère, qui peuvent changer d'un run à l'autre, ou
`listTopics` pour tous les sujets & leurs sous-sujets.

## Exemples de tâches

Choisissez parmi 50 tâches publiques. Chacune a une entrée limitée & une vue de
dataset adaptée. Modifiez une tâche avant de la lancer.

- [Obtenir un aperçu d'une Communauté X](https://apify.com/xquik/x-community-scraper/examples/get-an-x-community-overview)
- [Obtenir les détails d'une Communauté X avec ses posts récents](https://apify.com/xquik/x-community-scraper/examples/get-community-details-with-recent-posts)
- [Trouver les meilleurs posts sur la technologie dans une Communauté X](https://apify.com/xquik/x-community-scraper/examples/find-top-technology-posts-in-a-community)
- [Exporter les membres d'une Communauté X](https://apify.com/xquik/x-community-scraper/examples/export-x-community-members)
- [Exporter les membres certifiés d'une Communauté X](https://apify.com/xquik/x-community-scraper/examples/export-verified-community-members)
- [Lister les modérateurs d'une Communauté X](https://apify.com/xquik/x-community-scraper/examples/list-x-community-moderators)
- [Comparer des Communautés de développeurs par taille & par sujet](https://apify.com/xquik/x-community-scraper/examples/compare-developer-communities-by-size)
- [Lire le règlement d'une Communauté X avant de publier](https://apify.com/xquik/x-community-scraper/examples/read-community-rules-before-you-post)
- [Trouver des posts de levée de fonds dans une Communauté de startups](https://apify.com/xquik/x-community-scraper/examples/find-funding-posts-in-a-startup-community)
- [Trouver des posts de recrutement dans une Communauté d'ingénierie logicielle](https://apify.com/xquik/x-community-scraper/examples/find-hiring-posts-in-a-software-community)
- [Trouver les membres d'une Communauté de startups ayant une large audience](https://apify.com/xquik/x-community-scraper/examples/find-startup-community-members-with-big-audiences)
- [Auditer une petite Communauté X de bout en bout](https://apify.com/xquik/x-community-scraper/examples/audit-a-small-community-end-to-end)

## Combien coûte le scraping de Communautés X ?

X Community Scraper de Xquik coûte $0.00015 par ligne livrée sur chaque plan
Apify. Apify facture votre usage de la plateforme à part. Xquik facture une fois
par ligne de données livrée. Les diagnostics sont gratuits dans la sortie
`diagnostics`.

Pour plus de volume,
[choisissez un plan Apify](https://apify.com/pricing?fpr=xquik) avec plus
d'usage prépayé.

- Vous n'avez besoin d'aucun abonnement Xquik.
- Vous ne payez pas de frais séparés de démarrage, de Communauté, de ressource
  ou de requête.
- Une Communauté trouvée coûte 1 ligne, avec ou sans sa fiche complète.
- Les filtres & la déduplication passent avant la facturation. Vous ne payez
  jamais les lignes filtrées ou en double.
- Les réglages de coût total maximal d'Apify plafonnent les lignes livrées.

Un run qui rencontre un problème, ou un gros run, écrit aussi un enregistrement
`run-report`. Un petit run sans problème ne l'écrit pas & réduit l'usage Apify.
Activez `alwaysSaveRunRecords` pour l'écrire à chaque run.

Pour plafonner ce qu'un run peut dépenser, consultez les
[options de run](#options-de-run).

## Runs vides, partiels & arrêtés

X Community Scraper de Xquik explique gratuitement les runs vides, partiels &
arrêtés. Le statut du run dit pourquoi il s'est arrêté. Il compte aussi les
résultats facturés & les cibles lues.

### Résultats vides

Le statut d'un run vide vous invite à vérifier vos cibles & vos filtres. Les
lignes filtrées n'entament jamais votre limite de résultats. Un run qui lit
chaque cible sans récupérer aucune ligne n'écrit aucun enregistrement. Son
statut indique pourquoi & ce qu'il faut changer. L'Actor renvoie seulement les
Communautés publiques que X expose. Les champs disponibles varient selon la
Communauté.

### Runs partiels

Une extraction interrompue écrit un diagnostic `partial` gratuit. Les lignes
livrées restent dans le dataset. Lisez `availableResults`, `failedTargets`,
`retryable` & `nextAction` avant de relancer. Une sortie réussie de l'Actor
confirme la livraison, pas une extraction complète.

### Causes d'arrêt

Le statut du run nomme chaque cause d'arrêt anticipé. `stopCauses` liste chaque
cause avec ses propres `message`, `retryable` & `nextAction`. Les causes sont
`target_not_found`, `target_failed`, `pagination_safety_limit` &
`deadline_reached`. Une cible introuvable n'entre dans la liste que si une autre
cause a arrêté le run. Le run est `retryable` dès qu'une cause l'est. L'Actor
n'ajoute aucune limite de temps propre.

## Entrée

L'onglet Input liste chaque option. Indiquez des URL ou des ID de Communauté,
des mots-clés, des sujets, ou activez `includeSuggested` ou `listTopics`. Tous
les autres champs sont facultatifs.

| Champ                          | Rôle                                                                   |
| ------------------------------ | ---------------------------------------------------------------------- |
| `startUrls`                    | URL de Communauté sur `x.com`                                          |
| `communityIds`                 | ID numériques de Communauté                                            |
| `resources`                    | `info`, `tweets`, `media`, `search`, `members`, `moderators`           |
| `query`                        | Mot-clé pour la ressource `search`                                     |
| `queryType`                    | Ordre `Latest` ou `Top` pour la recherche par mot-clé                  |
| `postsOrder`                   | Ordre `Latest` ou `Top` pour les posts                                 |
| `memberNames`                  | Noms ou noms d'utilisateur à trouver parmi les membres                 |
| `searchTerms`                  | Mots-clés pour trouver des Communautés                                 |
| `topics`                       | Noms ou ID de sujets, comme `Technology`                               |
| `includeSuggested`             | Ajoute les Communautés que X suggère de rejoindre                      |
| `listTopics`                   | Ajoute chaque sujet de Communauté & ses sous-sujets                    |
| `includeDetails`               | Ajoute la fiche complète aux Communautés trouvées par mot-clé ou sujet |
| `maxItems`                     | Plafond de lignes livrées sur tout le run                              |
| `maxItemsPerTarget`            | Plafond de lignes pour chaque ressource de Communauté                  |
| `sinceDate`, `untilDate`       | Garde les posts d'une plage de dates                                   |
| `language`                     | Garde les posts dans 1 code de langue                                  |
| `mediaType`                    | Garde les posts avec images, vidéos, GIF, liens ou sans rien           |
| `minViews`, `minLikes`         | Garde les posts au-dessus d'un nombre de vues ou de J'aime             |
| `minReplies`, `minRetweets`    | Garde les posts au-dessus d'un nombre de réponses ou de reposts        |
| `nativeRetweets`               | Garde seulement les reposts natifs                                     |
| `verifiedOnly`                 | Garde les auteurs, membres ou modérateurs certifiés                    |
| `minFollowers`, `maxFollowers` | Garde les membres dans une fourchette d'audience                       |
| `minAccountAgeDays`            | Garde les membres dont le compte a au moins ce nombre de jours         |
| `blueVerifiedOnly`             | Garde les auteurs ou membres que X marque comme certifiés Blue         |
| `verifiedType`                 | Garde les membres avec 1 type de certification                         |
| `minFollowing`, `maxFollowing` | Garde les membres dans une fourchette d'abonnements                    |
| `minStatuses`, `maxStatuses`   | Garde les membres dans une fourchette de nombre de posts               |
| `hasWebsite`, `hasLocation`    | Garde les membres qui indiquent un site web ou une localisation        |
| `hasEmail`                     | Garde les membres qui publient un e-mail                               |
| `businessEmailOnly`            | Garde les membres avec un e-mail hors messagerie gratuite              |
| `emailDomains`                 | Garde les membres avec un e-mail sur ces domaines                      |
| `bioContains`                  | Garde les membres dont la bio contient 1 de ces mots                   |
| `locationContains`             | Garde les membres dont la localisation contient ce texte               |
| `usernameContains`             | Garde les membres dont le nom d'utilisateur contient ce texte          |
| `dedupeAcrossTargets`          | Retire les lignes répétées entre Communautés avant la facturation      |

### Migrer depuis un autre Actor de Communautés

Les noms `ranking` & `sort` fonctionnent comme `postsOrder`. `Top` ou
`Relevance` lit les posts Top. Si vous réglez l'un d'eux & `postsOrder`, la
valeur de `postsOrder` l'emporte. Le log du run nomme le champ écarté.

### Choisir les bonnes entrées

- Pour un aperçu rapide, gardez les ressources par défaut `info` & `tweets`.
- Pour des listes de prospects, choisissez `members` avec `minFollowers` &
  `verifiedOnly`.
- Pour la recherche produit, choisissez `search` avec une `query` comme `bug` ou
  `pricing`.
- Pour la recherche créative, choisissez `media` & réglez `mediaType`.
- Pour découvrir des Communautés, envoyez `searchTerms` ou `topics` sans ID.

## Sortie

Chaque ligne est un objet JSON. Chaque ligne inclut `sourceTarget` pour la
Communauté, le mot-clé ou le sujet d'entrée. X Community Scraper de Xquik garde
les champs source & n'invente aucune valeur. Le schéma du dataset donne à chaque
champ un titre & une description.

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

Nommez une colonne calculée dans `fields` ou `renameFields` pour l'ajouter.

| Colonne             | Formule                                                                                 |
| ------------------- | --------------------------------------------------------------------------------------- |
| `totalEngagement`   | `likeCount` + `replyCount` + `retweetCount` + `quoteCount`. Un compteur absent ajoute 0 |
| `engagementRate`    | `totalEngagement` × 100 ÷ les `followers` de l'auteur, à 4 décimales                    |
| `engagementPerView` | `totalEngagement` × 100 ÷ `viewCount`, à 4 décimales                                    |

`totalEngagement` vaut `null` pour une ligne sans ces compteurs. Un taux vaut
`null` quand son diviseur manque ou vaut 0.

## Options de run

- Réglez le coût total maximal d'Apify pour plafonner le coût du run. Laissez
  `maxItems` élevé pour obtenir le plus de lignes possible dans ce budget.
- Réglez `maxTotalChargeUsd` dans l'API Apify, ou Max cost per run dans la
  Console.
- Mettez toutes vos Communautés dans 1 run. Chaque run paie à Apify le même coût
  de démarrage.
- `maxItemsPerTarget` plafonne les lignes de chaque ressource de Communauté.
- `maxConcurrency` fixe le nombre de ressources de Communauté lues en même
  temps. La valeur par défaut est le réglage sûr le plus rapide.

Choisissez `latest` pour chaque run afin d'obtenir chaque correctif publié. Les
tâches & les planifications enregistrées gardent leur propre choix de build,
donc laissez-le sur `latest`.

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
- [X Space Scraper](https://apify.com/xquik/x-space-scraper) trouve des Spaces
  par mot-clé & lit leurs titres, états, heures, nombres d'auditeurs, hôtes &
  intervenants. Il lit aussi des diffusions par URL ou par ID. Utilisez-le quand
  vous suivez l'audio & la vidéo en direct sur X. À partir de $0.00015 par Space
  ou diffusion.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper) scrape les
  tendances en temps réel par lieu, avec rang, volume, requête & WOEID.
  Utilisez-le quand vous suivez les tendances de chaque lieu. À partir de
  $0.00015 par tendance.
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

## FAQ

Les réponses aux questions fréquentes, puis où trouver de l'aide.

### Ai-je besoin d'une clé API X ou d'une connexion ?

Non. X Community Scraper de Xquik n'a besoin ni de clé API X, ni de connexion,
ni d'identifiants.

### Comment trouver l'ID d'une Communauté ?

Ouvrez la Communauté sur X. L'ID est le nombre qui suit `/i/communities/` dans
l'URL. Vous pouvez aussi coller l'URL entière dans `startUrls`.

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

Autant que vous en listez. `maxItems` & votre limite de dépense Apify plafonnent
les lignes.

### Lit-il les Communautés privées ?

Non. X Community Scraper de Xquik renvoie seulement les Communautés publiques
que X expose.

### Est-il légal de scraper des Communautés X ?

X Community Scraper de Xquik demande à X des champs publics. Les résultats
peuvent contenir des données personnelles. Assurez-vous d'avoir une finalité
licite & respectez les règles de protection des données applicables. En cas de
doute, demandez conseil à un juriste qualifié.

### Pourquoi mon run n'a-t-il renvoyé aucun résultat ?

Lisez d'abord le statut du run. Le statut d'un run vide vous invite à vérifier
vos cibles & vos filtres. La sortie gratuite `diagnostics` apparaît quand
quelque chose demande votre attention. Son `stopCauses` donne à chaque cause une
`nextAction` à suivre. Le run liste chaque entrée qu'il ne peut pas lire &
indique comment la corriger.

### Puis-je utiliser l'API, les planifications & les intégrations ?

Oui. Choisissez parmi 50 tâches publiques ou l'API REST de Xquik.
L'[onglet API](https://apify.com/xquik/x-community-scraper/api) propose des
exemples en Python, JavaScript & cURL. Les
[planifications](https://docs.apify.com/platform/schedules) Apify lancent X
Community Scraper de Xquik selon un cron. Les agents passent par
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Utilisez
`latest`, sauf si vous avez besoin d'une build plus ancienne.

### Puis-je obtenir une solution sur mesure ?

Oui. Décrivez votre besoin dans
l'[onglet Issues](https://apify.com/xquik/x-community-scraper/issues). Xquik
propose aussi un tableau de bord, une API REST, un serveur MCP & des webhooks.
Trouvez le site web de Xquik sur son [profil Apify](https://apify.com/xquik).

### Où trouver de l'aide ?

Ouvrez une issue dans
l'[onglet Issues](https://apify.com/xquik/x-community-scraper/issues) avec l'ID
du run. Les diagnostics gratuits du key-value store expliquent les runs qui
demandent votre attention. Un run qui ne récupère aucune ligne en indique la
raison dans son statut.
