[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · **Français** · [Italiano](README.it.md)

[![Framer connecte Xquik MCP aux agents de codage](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Découvrez comment Framer utilise les scrapers Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
avec Claude Code, Codex, Cursor & d'autres outils, à partir de 6:07.

Xquik est le service de scraping X (Twitter) le plus rapide et le moins cher au
monde. Ses données X sont les plus complètes. X Follower Scraper de Xquik
collecte les abonnés, les abonnements, les membres de Liste, les abonnés de
Liste & les membres de Communauté. Des benchmarks publics prouvent qu'il est le
moins cher & le plus rapide de 10 Actors d'abonnés. Ses lignes complètes portent
2,5x plus de champs que celles de l'Actor médian, comme le montre le
[benchmark ci-dessous](#benchmark). La plupart des autres Actors Apify facturent
avant de filtrer ou de dédupliquer. Xquik facture seulement les résultats
livrés, uniques et conformes à vos filtres.

Exportez une liste d'abonnés Twitter avec les abonnements, les abonnés
certifiés, les membres de Liste, les abonnés de Liste & les membres de
Communauté. X Follower Scraper de Xquik coûte **à partir de $0.00015 par profil
livré sur chaque plan Apify**. Apify facture l'usage de la plateforme à part.
Vous n'avez besoin d'aucune connexion X, & Xquik n'ajoute pas de frais de
démarrage ni de requête.

> Xquik est un service tiers indépendant. Non affilié à X Corp. "Twitter" et "X"
> sont des marques déposées de X Corp.

## Que fait X Follower Scraper ?

X Follower Scraper de Xquik renvoie les données de profil publiques disponibles
pour les abonnés, les abonnements, les Listes & les Communautés. Chaque ligne
nomme sa cible source & sa relation.

### Comportement de base

- Les filtres & la suppression des doublons passent avant la facturation.
- Par défaut, un profil commun à plusieurs cibles apparaît & se facture une
  seule fois.
- 1 run accepte des noms d'utilisateur, des ID numériques, des URL & des chemins
  courts.
- Le mode fusion enregistre les profils communs, les sources, les relations &
  `overlapCount`.
- Les logs du run montrent la durée de chaque page dans `fetchDurationMs`,
  `processingDurationMs`, `pushDurationMs`, `statusDurationMs` &
  `fullPageDurationMs`.
- Les runs gardent les lignes livrées & la progression quand Apify les
  redémarre.

### Quelles données X Follower Scraper peut-il extraire ?

| Champ                    | Description                                                   |
| ------------------------ | ------------------------------------------------------------- |
| `id`                     | ID numérique de l'utilisateur X                               |
| `username`               | Nom d'utilisateur (sans `@`)                                  |
| `name`                   | Nom affiché                                                   |
| `description`            | Texte de la bio                                               |
| `followers`              | Nombre d'abonnés                                              |
| `following`              | Nombre d'abonnements                                          |
| `statusesCount`          | Total des posts publiés                                       |
| `mediaCount`             | Total des médias publiés                                      |
| `favouritesCount`        | Total des J'aime donnés                                       |
| `verified`               | Indicateur public combiné de certification Blue ou ancienne   |
| `verifiedType`           | `blue`, `business`, `government` ou `none`                    |
| `location`               | Localisation déclarée par le compte                           |
| `url`                    | URL du site web du profil                                     |
| `email`                  | Premier e-mail que le profil publie                           |
| `contactInfo`            | E-mails, téléphones & liens que le profil publie              |
| `profilePicture`         | URL de l'avatar en 48 px                                      |
| `profilePictureOriginal` | Le même avatar en taille réelle, à télécharger                |
| `coverPicture`           | URL de la bannière                                            |
| `createdAt`              | Date de création du compte, en texte, fournie par X           |
| `sourceTarget`           | Nom d'utilisateur ou ID d'où vous avez scrapé ce profil       |
| `sourceRelation`         | Relation, comme `followers` ou `list_members`                 |
| `sourceUrl`              | URL exacte où l'Actor a trouvé le profil                      |
| `sourceTargets`          | Toutes les cibles qui ont trouvé ce profil en mode fusion     |
| `sourceRelations`        | Toutes les relations qui ont trouvé ce profil en mode fusion  |
| `sourceUrls`             | Toutes les URL source qui ont trouvé ce profil en mode fusion |
| `overlapCount`           | Nombre de paires relation-cible trouvées en mode fusion       |
| `resultType`             | Type de ligne dans les modes de sortie full et raw            |
| `raw`                    | Profil source sûr, avant le formatage propre à l'Actor        |

Les lignes portent les champs de profil publics sur l'identité, les compteurs,
la certification, la disponibilité, les affiliés, les données professionnelles &
les biographies. L'attribution de la source, les entités & les ID des posts
épinglés restent disponibles. Consultez OpenAPI pour les champs exacts.

Réglez `outputMode: "raw"` ou `includeRaw: true` pour ajouter un champ `raw`. Il
contient une copie sûre du profil source. Le mode compact est le mode par
défaut.

Réglez `outputMode: "full"` pour obtenir le plus de données par ligne. Chaque
ligne garde jusqu'à 13 champs de liste quand X les envoie, comme `listedCount`,
`defaultProfileImage` & `advertiserAccountType`. Les lignes complètes les
placent à la fin. Les lignes compactes restent plus petites & coûtent moins cher
à stocker.

`verifiedOnly` accepte les profils publics certifiés Blue & ceux de l'ancienne
certification. Si les indicateurs de la source se contredisent, l'état certifié
l'emporte. `blueVerifiedOnly` garde les profils que X marque comme certifiés
Blue. X marque aussi en bleu de nombreux comptes d'entreprises & de
gouvernements. Réglez `verifiedType` pour garder 1 type de badge.

Les lignes n'incluent jamais d'état propre au compte qui consulte. Xquik retire
les indicateurs d'abonnement, de blocage, de masquage, de MP, de notification &
autres indicateurs de ce type. La sortie brute les retire aussi.

## Cas d'usage

- Enrichissez des prospects & créez des datasets de recherche avec plus de
  champs par profil. Notre ligne complète médiane avait 38 champs le 2026-09-29.
  C'est 2,5x la médiane de 9 autres Actors.
- Exportez les abonnés de concurrents pour la prospection.
- Comparez les audiences de votre compte, de vos concurrents & de personnalités
  publiques.
- Filtrez par nombre d'abonnés & par certification pour trouver les profils qui
  conviennent.
- Exportez les membres d'une Communauté X.
- Créez des datasets publics de réseaux sociaux pour la recherche.
- Segmentez des bases d'abonnés par mot-clé de bio, localisation ou type de
  profil.

## Comment utiliser X Follower Scraper pour scraper des données d'abonnés ?

Vous débutez sur Apify ?
[Créez d'abord un compte gratuit](https://console.apify.com/sign-up?fpr=xquik).
Le plan gratuit ne demande aucune carte bancaire & donne $5 à dépenser chaque
mois. À $0.00015 par profil, $5 couvrent jusqu'à 33 000 profils, hors usage de
la plateforme. Revenez ensuite ici & cliquez sur Try for free.

1. Ouvrez X Follower Scraper de Xquik dans Apify Console.
2. Ajoutez des URL de profil, de Liste ou de Communauté, des noms d'utilisateur
   X ou des ID numériques.
3. Choisissez une relation, comme `followers` ou `verified_followers`.
4. Réglez `maxItems` & d'éventuels filtres de profil.
5. Lancez le run.
6. Exportez le dataset en JSON, CSV, Excel ou HTML.

Chaque entrée ci-dessous est complète & couvre une tâche courante. Choisissez
celle qui correspond à vos données.

### Coller des URL de profil ou de Liste

Collez des URL de profil, de Liste ou de Communauté. Chaque URL fixe la relation
à scraper.

```json
{
  "startUrls": [
    { "url": "https://x.com/nasa/followers" },
    { "url": "https://x.com/spacex/verified_followers" },
    { "url": "https://x.com/elonmusk/following" },
    { "url": "https://x.com/i/lists/1748648376080666720/members" },
    { "url": "https://x.com/i/communities/1493446837214187523/members" }
  ],
  "maxItems": 5000
}
```

### Noms d'utilisateur en masse

`twitterHandles` est un raccourci pour de nombreuses cibles
`/<handle>/followers`. Les noms d'utilisateur fonctionnent avec ou sans `@`.

```json
{
  "twitterHandles": ["elonmusk", "nasa", "openai"],
  "relation": "followers",
  "maxItems": 1000
}
```

`relation` fixe ce qu'il faut scraper pour chaque nom d'utilisateur. Utilisez
`followers`, `following` ou `verified_followers`.

Utilisez `follower_ids` ou `following_ids` quand vous avez seulement besoin des
ID d'utilisateur. Chaque ligne contient 1 ID d'utilisateur, sa cible source & sa
relation, & une page contient jusqu'à 5 000 ID. Les filtres de profil ont besoin
des champs de profil, donc laissez-les vides pour ces 2 relations.

Utilisez `affiliates` pour les comptes qu'une organisation liste comme ses
affiliés, par exemple le personnel & les produits d'une entreprise. Chaque ligne
est un profil complet. Un compte sans affiliés ne renvoie aucune ligne.

Utilisez `subscriptions` pour les créateurs auxquels un compte a souscrit. Un
compte qui masque ses souscriptions ne renvoie aucune ligne.

Utilisez `similar` pour les comptes que X liste comme similaires à un compte.
Chaque ligne est un profil complet. X liste un petit ensemble de comptes & peut
le changer d'un run à l'autre.

La même entrée accepte aussi les alias `username`, `usernames` & `user_names`.

### Runs multi-relations

Réglez `relations` pour lire plusieurs relations des mêmes noms d'utilisateur.

```json
{
  "usernames": ["nasa"],
  "relations": ["followers", "following"],
  "maxItems": 1000
}
```

Des booléens comme `getFollowers`, `getFollowing`, `getVerifiedFollowers`,
`getListMembers`, `getListFollowers` & `getCommunityMembers` fonctionnent aussi.

### Scraper par ID numériques d'utilisateur, de Liste ou de Communauté

```json
{
  "userIds": ["44196397"],
  "listIds": ["1748648376080666720"],
  "communityIds": ["1493446837214187523"],
  "relation": "followers",
  "maxItemsPerTarget": 500,
  "maxItems": 1500
}
```

Les ID d'utilisateur numériques acceptent aussi les alias `twitterUserIds` &
`user_ids`.

`relation` s'applique aux ID d'utilisateur numériques. Les ID de Liste lisent
les membres par défaut. Les ID de Communauté lisent toujours les membres.
`maxItemsPerTarget` empêche la première grosse cible d'épuiser `maxItems`.

### Filtrer avant de payer

Ajoutez des filtres pour que seuls les profils conformes entrent dans votre
dataset.

```json
{
  "twitterHandles": ["openai"],
  "relation": "followers",
  "minFollowers": 1000,
  "verifiedOnly": true,
  "verifiedType": "business",
  "minStatuses": 100,
  "usernameContains": "ai",
  "bioContains": "founder, CEO",
  "locationContains": "San Francisco",
  "maxItems": 500
}
```

L'Actor peut examiner plus de profils qu'il n'en écrit. Vous payez seulement les
lignes qui passent tous les filtres & entrent dans votre dataset. Le dernier
statut d'un run filtré indique combien de profils il a examinés & combien sont
passés. Par défaut, un run filtré s'arrête à 100 000 profils examinés par liste.
Réglez `maxScan` pour en lire moins ou plus.

Séparez les variantes de `bioContains` par des virgules ou des retours à la
ligne. Un profil passe si sa bio contient l'un des termes fournis. La recherche
ignore la casse.

### Trouver les audiences communes

Utilisez le mode fusion pour comparer des concurrents, des Listes, des
Communautés ou des types de relation.

```json
{
  "twitterHandles": ["openai", "anthropicai", "GoogleDeepMind"],
  "relation": "followers",
  "dedupeMode": "merge",
  "maxItemsPerTarget": 5000,
  "maxItems": 15000
}
```

La sortie contient 1 ligne par profil unique. Les profils communs incluent
`sourceTargets`, `sourceRelations`, `sourceUrls`, `sourceTargetKeys` &
`overlapCount`. Triez par `overlapCount` ou exportez les lignes en CSV. Les
lignes suivent l'ordre de vos cibles. Gardez `maxItems` assez haut pour que
chaque cible ajoute des lignes. Quand `maxItems` arrête un run plus tôt, les
profils qu'il garde peuvent changer d'un run à l'autre. Utilisez
`maxItemsPerTarget` pour régler la profondeur de chaque compte.

### Vérifier qui suit qui

Listez des comptes source & cible pour vérifier les abonnements entre eux.

```json
{
  "followCheckSources": ["elonmusk", "@nasa"],
  "followCheckTargets": ["spacex", "https://x.com/i/user/11348282"]
}
```

Le run vérifie chaque source par rapport à chaque cible, donc cette entrée fait
4 vérifications. Chaque vérification donne 1 ligne & 1 résultat, au prix d'un
profil. Une ligne contient `isFollowing` (la source suit la cible) &
`isFollowedBy` (la cible la suit en retour), avec `sourceUsername`, `sourceId`,
`targetUsername` & `targetId` des 2 comptes. Les comptes acceptent des ID
d'utilisateur, des noms d'utilisateur avec ou sans `@`, ou des URL de profil. Un
nombre est un ID d'utilisateur. La vue Follow checks liste ces lignes.

### Formes d'URL acceptées

| URL                                         | Relation                      |
| ------------------------------------------- | ----------------------------- |
| `https://x.com/<handle>/followers`          | `followers`                   |
| `https://x.com/<handle>/verified_followers` | `verified_followers`          |
| `https://x.com/<handle>/following`          | `following`                   |
| `https://x.com/<handle>/affiliates`         | `affiliates`                  |
| `https://x.com/<handle>`                    | `relation`, sinon `followers` |
| `https://x.com/i/lists/<id>/members`        | `list_members`                |
| `https://x.com/i/lists/<id>/followers`      | `list_followers`              |
| `https://x.com/i/lists/<id>`                | `list_members`                |
| `https://x.com/i/communities/<id>/members`  | `community_members`           |
| `https://x.com/i/communities/<id>`          | `community_members`           |
| `<handle>/followers`                        | `followers`                   |
| `<handle>/following`                        | `following`                   |
| `<handle>/verified_followers`               | `verified_followers`          |
| `<handle>/affiliates`                       | `affiliates`                  |
| `lists/<id>/members`                        | `list_members`                |
| `lists/<id>/followers`                      | `list_followers`              |
| `communities/<id>/members`                  | `community_members`           |

Les URL `twitter.com` & `mobile.twitter.com` fonctionnent aussi partout. Les URL
sans `https://`, comme `x.com/nasa`, fonctionnent aussi.

## Exemples de tâches

Choisissez parmi 50 tâches publiques. Chacune a une entrée limitée & une vue de
dataset adaptée. Chaque tâche s'ouvre sur une vraie audience ou un vrai filtre.
Modifiez-la avant de la lancer.

- [Découvrez des créateurs d'IA parmi les abonnés d'OpenAI](https://apify.com/xquik/x-follower-scraper/examples/discover-ai-builders-in-openai-followers)
- [Créez un dataset d'audience X pour des agents IA](https://apify.com/xquik/x-follower-scraper/examples/build-agent-ready-x-audience-dataset)
- [Collectez des données d'audience X pour le RAG](https://apify.com/xquik/x-follower-scraper/examples/collect-x-audience-data-for-rag)
- [Trouvez des spécialistes du SEO pour l'IA sur X](https://apify.com/xquik/x-follower-scraper/examples/find-ai-seo-practitioners-on-x)
- [Vérifiez qui suit qui sur Twitter](https://apify.com/xquik/x-follower-scraper/examples/check-who-follows-who-on-twitter)
- [Exportez des abonnés Twitter en CSV](https://apify.com/xquik/x-follower-scraper/examples/export-twitter-followers-to-csv)
- [Analysez les abonnés communs de concurrents](https://apify.com/xquik/x-follower-scraper/examples/analyze-competitor-follower-overlap)
- [Trouvez des micro-influenceurs parmi des abonnés X](https://apify.com/xquik/x-follower-scraper/examples/find-micro-influencers-in-followers)
- [Exportez les membres d'une liste Twitter choisie](https://apify.com/xquik/x-follower-scraper/examples/export-curated-twitter-list-members)
- [Analysez les membres d'une Communauté X publique](https://apify.com/xquik/x-follower-scraper/examples/analyze-public-x-community-members)
- [Collectez des membres de Communauté pour des agents IA](https://apify.com/xquik/x-follower-scraper/examples/collect-community-members-for-ai-agents)
- [Créez des instantanés d'abonnés X reproductibles](https://apify.com/xquik/x-follower-scraper/examples/create-repeatable-follower-snapshots)

## Combien coûte le scraping des abonnés X ?

X Follower Scraper de Xquik coûte $0.00015 par profil livré sur chaque plan
Apify. Apify facture votre usage de la plateforme à part. Xquik facture une fois
par ligne de données livrée. Vous n'avez besoin d'aucun abonnement Xquik séparé,
& Xquik n'ajoute pas de frais de démarrage. Les démarrages, les cibles & le
choix de relation n'ajoutent pas de frais de requête séparés. Une vérification
d'abonnement compte comme 1 ligne au même prix.

Pour plus de volume,
[choisissez un plan Apify](https://apify.com/pricing?fpr=xquik) avec plus
d'usage prépayé.

Un run peut lire de nombreuses cibles. Les plafonds, la déduplication & la
facturation restent exacts sur toutes les cibles.

- Les filtres passent avant qu'un profil entre dans votre dataset, donc les
  lignes filtrées ne coûtent rien.
- Les filtres numériques sont `minFollowers`, `maxFollowers`, `minFollowing`,
  `maxFollowing`, `minStatuses`, `maxStatuses` & `minAccountAgeDays`.
- Les filtres de profil sont `verifiedOnly`, `blueVerifiedOnly`, `verifiedType`,
  `bioContains`, `locationContains`, `usernameContains`, `hasWebsite` &
  `hasLocation`.
- Les filtres d'e-mail sont `hasEmail`, `businessEmailOnly` & `emailDomains`.
  Ils gardent les lignes dont le profil publie un e-mail.
- L'Actor retire les répétitions entre cibles avant l'écriture. Réglez
  `dedupeAcrossTargets: false` pour les garder.
- Xquik ne facture jamais les lignes que le dataset rejette.
- Les diagnostics sont gratuits dans la sortie `diagnostics`.
- Les runs sans entrée, avec une entrée invalide & sans sortie écrivent 1
  enregistrement exploitable dans la sortie gratuite `diagnostics`.

Un run qui rencontre un problème, ou un gros run, écrit aussi un enregistrement
`run-report`. Son `estimatedChargeUsd` utilise le prix pay-per-event en vigueur
qu'Apify transmet à l'Actor. Un petit run sans problème ne l'écrit pas & réduit
l'usage Apify. Activez `alwaysSaveRunRecords` pour l'écrire à chaque run.

## Benchmark

X Follower Scraper de Xquik a battu 9 autres Actors d'abonnés sur le coût & la
vitesse. Sa ligne complète médiane avait 38 champs, soit 2,5x la médiane des
autres.

- `xquik/x-follower-scraper` a livré 1 000 profils utiles à $0.000155 par profil
  utile, avec 100,0 par seconde & 38 champs par ligne.
  [Voir le run](https://console.apify.com/view/runs/z5ELS2u5sgjuhAFHN)
- `xquik/x-follower-scraper` a livré 1 000 profils utiles à $0.000155 par profil
  utile, avec 77,9 par seconde & 38 champs par ligne.
  [Voir le run](https://console.apify.com/view/runs/Htim4jqodU6ZPjQiQ)
- `b2b_leads/X-Real-Time-Data` a livré 286 profils utiles à $0.000388 par profil
  utile, avec 3,1 par seconde & 21 champs par ligne.
  [Voir le run](https://console.apify.com/view/runs/IkQButA6cVz4ys4GM)
- `kaitoeasyapi/premium-x-follower-scraper-following-data` a livré 356 profils
  utiles à $0.000506 par profil utile, avec 21,9 par seconde & 50 champs par
  ligne. [Voir le run](https://console.apify.com/view/runs/cJgj15HLBA50LEUf0)
- `api-ninja/x-twitter-followers-scraper` a livré 350 profils utiles à $0.000809
  par profil utile, avec 7,0 par seconde & 8 champs par ligne.
  [Voir le run](https://console.apify.com/view/runs/XjJ4UPKAILSz0Droz)
- `altimis/scweet` a livré 332 profils utiles à $0.000922 par profil utile, avec
  1,1 par seconde & 21 champs par ligne.
  [Voir le run](https://console.apify.com/view/runs/qVGvT7TPAJEHCuR42)
- `apidojo/twitter-user-scraper` a livré 323 profils utiles à $0.001160 par
  profil utile, avec 7,3 par seconde & 25 champs par ligne.
  [Voir le run](https://console.apify.com/view/runs/Xnf7rh8jK6764gP1f)
- `atomus/twitter-scraper` a livré 323 profils utiles à $0.001272 par profil
  utile, avec 6,2 par seconde & 13 champs par ligne.
  [Voir le run](https://console.apify.com/view/runs/MWz1l0cTcfPcEnaiH)
- `practicaltools/cheap-simple-twitter-api` a livré 283 profils utiles à
  $0.002036 par profil utile, avec 6,5 par seconde & 4 champs par ligne.
  [Run 1](https://console.apify.com/view/runs/Zhvi7LsfpHdQNKcGb),
  [Run 2](https://console.apify.com/view/runs/IsJj4fa8pFUG7uhlK),
  [Run 3](https://console.apify.com/view/runs/2W7n8fpEqoxiXq6oX)
- `maximedupre/twitter-scraper` a livré 320 profils utiles à $0.002192 par
  profil utile, avec 2,1 par seconde & 15 champs par ligne.
  [Run 1](https://console.apify.com/view/runs/HblUkhgI2svp1LBGs),
  [Run 2](https://console.apify.com/view/runs/37yQFzgydzJoWfa39),
  [Run 3](https://console.apify.com/view/runs/mtBoKcocaM4BUzZmm)
- `seemuapps/x-followers-following-scraper` a livré 286 profils utiles à
  $0.003504 par profil utile, avec 3,9 par seconde & 9 champs par ligne.
  [Run 1](https://console.apify.com/view/runs/1r3je034X2qhFGgLj),
  [Run 2](https://console.apify.com/view/runs/dc4ztVP3n2eemgiNQ),
  [Run 3](https://console.apify.com/view/runs/gWPiBT00G7D9IJ0Cj)

Chaque Actor a lu les abonnés de NASA, SpaceX & esa. Les autres Actors ont
tourné le 2026-09-28. Les runs de Xquik ont réglé `outputMode: "full"` & ont
tourné le 2026-09-29. Tous les runs ont utilisé le niveau Bronze. Un profil
utile est unique, a 30 jours ou plus, 1 abonné ou plus & 1 post ou plus. Le coût
est la dépense totale du client par profil utile. Le nôtre inclut l'usage Apify
que payent nos clients. Une ligne avec 3 runs les additionne. Champs par ligne
est le nombre médian de champs non vides, champs imbriqués compris. Une liste
compte comme 1 champ. Ouvrez un run pour voir son entrée, son log & son dataset.

## Entrée

L'onglet Input liste chaque option. Ajoutez au moins 1 champ parmi `startUrls`,
`twitterHandles`, `userIds`, `listIds` ou `communityIds`, ou les 2 champs
`followCheckSources` & `followCheckTargets`. Leurs alias documentés comptent
aussi. Tous les autres champs sont facultatifs.

Essayez ces entrées.

- Ajoutez le nom d'utilisateur d'un concurrent à `twitterHandles` avec
  `relation: "followers"`.
- Collez `https://x.com/<handle>/verified_followers` dans Start URLs pour les
  profils certifiés.
- Collez une URL de Liste dans Start URLs pour auditer ses membres.
- Ajoutez 2 noms d'utilisateur ou plus. Un profil commun apparaît une fois, sous
  la cible qui le renvoie en premier. Cette cible peut changer d'un run à
  l'autre. Utilisez `dedupeMode: "merge"` pour avoir 1 ligne stable avec chaque
  cible correspondante. Réglez `dedupeAcrossTargets: false` pour garder 1 ligne
  par cible.

### Saisie dans la Console & via l'API

Le formulaire de la Console a ces contrôles.

- Le champ Start URLs accepte des chaînes d'URL ou des objets
  `{ "url": "..." }`. Son éditeur JSON garde les 2 formats de l'API.
- Relation, Output Mode & Dedupe Mode sont des listes déroulantes à choix fixes.
- Relations est une liste à choix multiples pour les runs multi-relations.
- Les limites de résultats acceptent des nombres entiers de 1 ou plus.
- Les filtres numériques de profil acceptent des nombres entiers de 0 ou plus.

Utilisez les champs canoniques dans les nouvelles intégrations. Les alias
fonctionnent toujours dans les entrées JSON, API, SDK, d'automatisation & de
tâche. `outputVariant` & `includeRaw` sont des alias d'Output Mode.
`dedupeAcrossTargets` est un alias de Dedupe Mode. Le formulaire visuel masque
les alias qui font doublon avec un contrôle canonique. Les entrées JSON
existantes & les entrées de tâche enregistrées avec des alias continuent de
fonctionner. Les entrées enregistrées avec `dedupeAcrossTargets: false` ou
`dedupeMode: "none"` gardent 1 ligne par cible.

### Migrer depuis un autre Actor d'abonnés

Collez l'entrée que vous utilisez déjà. X Follower Scraper de Xquik lit les noms
de champs des autres Actors d'abonnés X. Il les fait correspondre à ses propres
champs. Les noms canoniques restent la norme documentée. Un alias ne supprime
jamais un champ & ne change jamais ce que vous payez.

Chaque ligne nomme les champs que vous utilisez déjà, puis le champ auquel ils
correspondent.

- `twitterHandles`, `usernames`, `user_names`, `handles`, `userNameList`,
  `screenNames` correspondent à `twitterHandles`.
- `username`, `handle`, `screenName`, en une seule chaîne, correspondent à
  `twitterHandles`.
- `twitterUserIds`, `user_ids`, `userIdList` correspondent à `userIds`.
- `user_id`, `userId`, en une seule chaîne, correspondent à `userIds`.
- `startUrls`, `urls`, `targets`, `profileUrls`, `accountUrls` correspondent à
  `startUrls`.
- `profileUrl`, en une seule chaîne, correspond à `startUrls`.
- `getFollowers`, `getFollowing` correspondent à `relations`.
- `type` avec `followers` ou `following` correspond à `relation`.
- `relationship`, `relationshipType`, `listType`, `scrape_type` correspondent à
  `relation`.
- `relationships` correspond à `relations`.
- `mode` avec `followers`, `following` ou `both` correspond à `relation` ou
  `relations`.
- `category` avec `followers`, `following` ou `affiliates` correspond à
  `relation`.
- `profile_urls` correspond à `startUrls` pour les liens, à `twitterHandles`
  pour les noms d'utilisateur.
- `maxResults`, `max_results`, `resultsLimit`, `count`, `max_items`
  correspondent à `maxItems`.
- `per_profile_limit`, `maxItemsPerUser`, `maxUsersPerAccount`,
  `max_followers_per_user`, `max_following_per_user`, `follower_limit`
  correspondent à `maxItemsPerTarget`. 0 ne met aucun plafond par compte.
  `max_following_per_user` règle aussi `relation` sur `following`.
- `scrapeAllResults` ne met aucun plafond par cible.
- `minTweets` correspond à `minStatuses`.
- `includeRawUser` correspond à `includeRaw`.
- `outputVariant` correspond à `outputMode`.
- `requireEmail` correspond à `hasEmail`.
- `requireWebsite` correspond à `hasWebsite`. Il garde un profil avec n'importe
  quel lien dans son champ de site web, & le statut du run l'indique.
- `onlyVerified`, `blue_verified_only` correspondent à `blueVerifiedOnly`. Une
  entrée avec `source_mode` laisse `blue_verified_only` sans effet.
- Dans `verification`, `any_verified` règle `verifiedOnly`, `blue_verified`
  règle `blueVerifiedOnly`, `business` & `government` règlent `verifiedType`.
  `unverified` arrête le run avant toute lecture ou facturation.
- `bioKeywords` correspond à `bioContains`. 1 seul de ses termes suffit.
- `locationKeywords` avec 1 valeur correspond à `locationContains`. Avec plus de
  valeurs, le run s'arrête avant toute lecture ou facturation.
- `emailDomains` en liste correspond à `emailDomains`.
- `outputEmail`, `resolveShortLinks` ne demandent aucun champ. Chaque ligne
  contient ses e-mails & les liens complets de X.
- `findEmails`, `extractEmails` ne demandent aucun champ. Les lignes contiennent
  les e-mails qu'un profil publie sur X. Le statut du run indique que l'Actor ne
  lit aucun site lié.
- `validateEmails` ne demande aucun champ. Le statut du run indique que les
  e-mails arrivent tels que publiés, car l'Actor ne vérifie aucune boîte mail.

Une entrée collée se comporte ainsi.

- Une liste nommée avec d'autres mots se lit avec le nom que cet Actor lui
  donne. `followings`, `Verified Followers` & `verifiedFollowers` se lisent
  comme `following` & `verified_followers`, y compris dans `relation`.
- Si vous réglez un alias & son champ canonique, la valeur canonique l'emporte.
  Le log du run nomme l'alias écarté.
- Une liste que l'Actor ne lit pas, comme `mutuals`, arrête le run avant toute
  lecture ou facturation.
- Un mode qui relève d'un autre Actor arrête le run de la même façon.
  `source_mode` le fait pour `search` & `profiles`. `mode` le fait pour
  `profiles` & `all`. `category` le fait pour une tâche comme `tweets`,
  `user_info` ou `replies`. Le message nomme l'Actor à utiliser.

2 noms ont un autre sens ici. Dans certains Actors, `maxFollowers` &
`maxFollowing` plafonnent le nombre de lignes d'un run. Dans X Follower Scraper
de Xquik, ils filtrent les profils selon leur nombre d'abonnés & d'abonnements.
Utilisez `maxItems` pour plafonner les lignes. Un run qui règle `maxFollowers` &
aucun plafond de lignes indique dans son log & son dernier statut qu'il a filtré
des comptes. L'Actor n'a pas d'unité de page, donc remplacez `maxPages` par
`maxItems`.

### Utilisez toujours la dernière build

Les runs lancés depuis le Store utilisent la build `latest` de X Follower
Scraper de Xquik. Dans les appels API, omettez le choix de build ou passez
`build=latest`. Mettez à jour les tâches & les intégrations qui figent une build
plus ancienne. Une build figée ne change jamais d'elle-même.

## Sortie

Chaque profil est un objet JSON. Le mode compact renvoie les champs publics
normalisés, les champs de version de schéma & les métadonnées de source quand
elles existent.

Les schémas du dataset & du run-report décrivent chaque champ renvoyé. Les
champs primitifs portent aussi des exemples pour les agents & les intégrations
générées.

Les valeurs ci-dessous sont des exemples. Vos lignes portent les données en
direct au moment du run. Une ligne compacte ressemble à ceci.

```json
{
  "schemaVersion": 1,
  "_schema_version": 1,
  "id": "44196397",
  "username": "elonmusk",
  "name": "Elon Musk",
  "description": "...",
  "followers": 180000000,
  "following": 500,
  "statusesCount": 42000,
  "mediaCount": 3200,
  "favouritesCount": 120000,
  "verified": true,
  "verifiedType": "blue",
  "location": "...",
  "url": "https://...",
  "profilePicture": "https://..._normal.jpg",
  "profilePictureOriginal": "https://....jpg",
  "coverPicture": "https://...",
  "createdAt": "Tue Jun 02 20:12:29 +0000 2009",
  "sourceTarget": "nasa",
  "sourceRelation": "followers",
  "sourceUrl": "https://x.com/nasa/followers"
}
```

Le mode de déduplication fusion ajoute des champs de recoupement.

```json
{
  "schemaVersion": 1,
  "_schema_version": 1,
  "id": "44196397",
  "username": "elonmusk",
  "sourceTargets": ["nasa", "spacex"],
  "sourceRelations": ["followers"],
  "sourceUrls": [
    "https://x.com/nasa/followers",
    "https://x.com/spacex/followers"
  ],
  "sourceTargetKeys": ["followers:nasa", "followers:spacex"],
  "overlapCount": 2
}
```

Une ligne de vérification d'abonnement ressemble à ceci.

```json
{
  "id": "followCheck:elonmusk:spacex",
  "resultType": "followCheck",
  "source": "elonmusk",
  "target": "spacex",
  "sourceId": "44196397",
  "sourceUsername": "elonmusk",
  "targetId": "34743251",
  "targetUsername": "spacex",
  "isFollowing": true,
  "isFollowedBy": false,
  "schemaVersion": 1
}
```

Exportez le dataset Apify en JSON, CSV, Excel ou HTML.

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

## Options de run

Réglez `maxTotalChargeUsd` dans l'API Apify pour plafonner strictement la
dépense. Dans la Console, cette limite s'appelle Max cost per run. Apify
transmet cette limite à X Follower Scraper de Xquik sous la forme
`ACTOR_MAX_TOTAL_CHARGE_USD`. Il s'arrête avant d'accepter des lignes au-delà de
la limite. Laissez `maxItems` vide pour renvoyer autant de profils que le
plafond de dépense le permet. Réglez `maxItems` & `maxItemsPerTarget` seulement
si vous voulez moins de profils que le budget ne le permet.

- Combinez des filtres de profil, comme `minFollowers`, `verifiedType` &
  `bioContains`, pour réduire le dataset facturé.
- Par défaut, les runs gardent seulement les profils uniques entre cibles.
  Réglez `dedupeAcrossTargets: false` pour garder 1 ligne par cible.
- Réglez `dedupeMode: "merge"` pour avoir 1 ligne par profil avec chaque cible
  source correspondante.
- Réglez `outputMode: "full"` pour les champs de profil optionnels, quand ils
  existent. Ils incluent les ID des posts épinglés, les entités & les
  métadonnées du profil.
- Réglez `outputMode: "raw"` ou `includeRaw: true` pour inclure un objet `raw`
  nettoyé à côté des champs normalisés.
- Planifiez des runs répétés & gardez chaque dataset pour comparer les ID de
  profil. Les moniteurs Xquik émettent les événements de post & de profil pris
  en charge, pas les changements de listes d'abonnés.

## Runs vides, partiels & arrêtés

X Follower Scraper de Xquik explique les runs vides, partiels & arrêtés avec des
diagnostics gratuits. Une sortie réussie de l'Actor confirme la livraison, pas
une extraction complète.

Un run interrompu écrit un diagnostic `partial` gratuit. Les résultats déjà
livrés restent dans le dataset. Lisez `availableResults`, `failedTargets`,
`retryable` & `nextAction` avant de relancer.

Le statut du run dit pourquoi il s'est arrêté. Il compte aussi les résultats
facturés, les doublons ignorés & les cibles lues. Le statut nomme chaque cause
d'arrêt anticipé. `stopCauses` liste chaque cause avec ses propres `message`,
`retryable` & `nextAction`. Les causes sont `target_not_found`,
`target_suspended`, `target_protected`, `target_failed` & `deadline_reached`.
`target_suspended` nomme les comptes que X a suspendus. Un compte introuvable ou
suspendu n'entre dans la liste que si une autre cause a arrêté le run. Le run
est `retryable` dès qu'une cause l'est.

X garde privées les listes d'un compte protégé. Cette cible reçoit
`target_protected` dans 1 diagnostic gratuit, & le run lit les autres cibles.

`failedTargets` compte les cibles arrêtées après une erreur. Ces runs utilisent
`completionReason: "partial_failure"`. Leurs profils livrés restent des lignes
de données facturables.

Le timeout Apify par défaut est `0`, donc les runs n'ont pas de limite de temps.
Le run continue jusqu'au plafond ou jusqu'à la fin des profils. Vous pouvez
quand même régler un timeout fini. `completionReason: "deadline_reached"`
signifie alors que cette limite approche. Le run enregistre les profils & le
rapport, puis s'arrête proprement avant la limite. Les profils livrés sont
facturés une seule fois.

Les runs qui rencontrent un problème écrivent toujours `run-report`, y compris
les sorties sans entrée ou avec une entrée invalide. `run-report` a aussi un
champ `version` avec la version exacte de la source publiée de l'Actor.

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

### Ai-je besoin d'une clé API X ?

Non. Vous n'avez besoin ni de clé API X, ni de connexion, ni d'identifiants.

### Qu'est-ce qui limite un run ?

Votre limite d'éléments & votre limite de dépense Apify arrêtent le run. Les
limites de votre compte Apify & de la plateforme s'appliquent toujours.

### Quelle est sa vitesse ?

La vitesse de X Follower Scraper de Xquik dépend de la taille de la cible, des
filtres & de la disponibilité de X. Ses 2 runs de [benchmark](#benchmark) ont
atteint 77,9 & 100,0 profils utiles par seconde.

### Pourquoi mon run renvoie-t-il moins de lignes que ma limite ?

Les filtres comme `minFollowers`, `verifiedOnly` & `bioContains` s'appliquent
avant l'écriture. Assouplissez-les pour obtenir plus de résultats. Un run filtré
s'arrête aussi à 100 000 profils examinés par liste, sauf si vous réglez
`maxScan`. X Follower Scraper de Xquik retire aussi les répétitions entre
cibles.

### Combien d'abonnés puis-je scraper sur un seul compte ?

Autant que X en affiche pour ce compte. Le run continue jusqu'à votre plafond,
votre limite de dépense ou la fin de la liste. `maxItemsPerTarget` plafonne
seulement chaque cible. Un run filtré s'arrête à 100 000 profils examinés par
liste, sauf si vous réglez `maxScan`.

### L'Actor relance-t-il les échecs temporaires ?

Oui. Il se remet seul des erreurs temporaires de X. Après un échec définitif, le
run garde ses résultats partiels.

### Que se passe-t-il près de la limite de temps d'un run Apify ?

X Follower Scraper de Xquik n'ajoute aucune échéance plus courte. Avant votre
limite, il enregistre les profils, écrit le rapport & s'arrête. Les lignes qui
n'atteignent jamais le dataset ne coûtent rien.

### Puis-je reprendre là où je me suis arrêté ?

Pas encore. Un nouveau run sur la même cible repart du début.

### Puis-je utiliser l'API Apify pour lancer cet Actor ?

Oui. Consultez l'[onglet API](https://apify.com/xquik/x-follower-scraper/api)
pour des exemples en Python, JavaScript & cURL.

### Puis-je planifier des scrapings récurrents ?

Oui. Utilisez la [planification](https://docs.apify.com/platform/schedules)
intégrée d'Apify pour lancer cet Actor selon un cron. Comparez les datasets
enregistrés pour repérer les changements d'abonnés.

### Est-il légal de scraper des données X ?

X Follower Scraper de Xquik demande à X des champs de profil publics. Les
résultats peuvent contenir des données personnelles, dont des localisations
déclarées. Assurez-vous d'avoir une finalité licite & respectez les règles de
protection des données applicables. En cas de doute, demandez conseil à un
juriste qualifié.

### Où trouver de l'aide ?

Ouvrez une issue dans
l'[onglet Issues](https://apify.com/xquik/x-follower-scraper/issues) avec l'ID
du run.

### Où est la documentation de l'API ?

L'[onglet API](https://apify.com/xquik/x-follower-scraper/api) propose des
exemples en Python, JavaScript & cURL pour cet Actor. Trouvez le site web de
Xquik sur son [profil Apify](https://apify.com/xquik).
