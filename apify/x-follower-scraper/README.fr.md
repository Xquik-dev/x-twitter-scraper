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
monde. Ses données X sont les plus complètes. X Follower Scraper de Xquik
collecte les abonnés, les abonnements, les membres de Liste, les abonnés de
Liste et les membres de Communauté. Des benchmarks publics prouvent qu'il est le
moins cher et le plus rapide de 10 Actors d'abonnés. Ses lignes
(`outputMode: "full"`) portent 2,5x plus de champs que celles de l'Actor médian,
comme le montre le [benchmark ci-dessous](#benchmark). La plupart des autres
Actors Apify facturent avant de filtrer ou de dédupliquer. Xquik facture
seulement les résultats livrés, uniques et conformes à vos filtres.

Scrapez les abonnés, les abonnements, les abonnés certifiés, les membres de
Liste, les abonnés de Liste et les membres de Communauté sur X (Twitter). X
Follower Scraper de Xquik coûte **à partir de $0.00015 par profil livré sur
chaque plan Apify**. Apify facture l'usage de la plateforme à part. Vous n'avez
pas besoin de connexion X, et Xquik ne facture pas de frais de démarrage ni de
requête.

> Xquik est un service tiers indépendant. Non affilié à X Corp.
> "Twitter" et "X" sont des marques déposées de X Corp.

## Que fait X Follower Scraper ?

X Follower Scraper de Xquik renvoie les données de profil publiques disponibles
pour les abonnés, les abonnements, les Listes et les Communautés. Chaque ligne
nomme sa cible source et sa relation.

### Comportement de base

- Les filtres et la suppression des doublons passent avant la facturation.
- Par défaut, un profil commun à plusieurs cibles apparaît et se facture une
  seule fois.
- Un même run accepte des noms d'utilisateur, des ID numériques, des URL et des
  chemins courts.
- Le mode fusion enregistre les profils communs, les sources, les relations et
  `overlapCount`.
- Les logs du run montrent la durée de chaque page dans `fetchDurationMs`,
  `processingDurationMs`, `pushDurationMs`, `statusDurationMs` et
  `fullPageDurationMs`.
- Les runs gardent les lignes livrées et la progression quand Apify les
  redémarre.

### Quelles données X Follower Scraper peut-il extraire ?

| Champ             | Description                                                   |
| ----------------- | ------------------------------------------------------------- |
| `id`              | ID numérique de l'utilisateur X                               |
| `username`        | Nom d'utilisateur (sans `@`)                                  |
| `name`            | Nom affiché                                                   |
| `description`     | Texte de la bio                                               |
| `followers`       | Nombre d'abonnés                                              |
| `following`       | Nombre d'abonnements                                          |
| `statusesCount`   | Total des posts publiés                                       |
| `mediaCount`      | Total des médias publiés                                      |
| `favouritesCount` | Total des J'aime donnés                                       |
| `verified`        | Indicateur public combiné de certification Blue ou ancienne   |
| `verifiedType`    | `blue`, `business`, `government` ou `none`                    |
| `location`        | Localisation déclarée par le compte                           |
| `url`             | URL du site web du profil                                     |
| `profilePicture`  | URL de l'avatar (taille réelle)                               |
| `coverPicture`    | URL de la bannière                                            |
| `createdAt`       | Date de création du compte, en texte, fournie par X           |
| `sourceTarget`    | Nom d'utilisateur ou ID d'où vient ce profil                  |
| `sourceRelation`  | Relation : `followers`, `following`, `list_members`, ...      |
| `sourceUrl`       | URL exacte où l'Actor a trouvé le profil                      |
| `sourceTargets`   | Toutes les cibles qui ont trouvé ce profil en mode fusion     |
| `sourceRelations` | Toutes les relations qui ont trouvé ce profil en mode fusion  |
| `sourceUrls`      | Toutes les URL source qui ont trouvé ce profil en mode fusion |
| `overlapCount`    | Nombre de paires relation-cible trouvées en mode fusion       |
| `resultType`      | Type de ligne dans les modes de sortie full et raw            |
| `raw`             | Profil source sûr, avant le formatage propre à l'Actor        |

Les lignes suivent le contrat de profil public. Il couvre l'identité, les
compteurs, la certification, la disponibilité, les affiliés, les données
professionnelles et les biographies. L'attribution de la source, les entités et
les ID des posts épinglés restent disponibles. Consultez OpenAPI pour la liste
exacte des champs.

Réglez `outputMode: "raw"` ou `includeRaw: true` pour ajouter un champ `raw`. Il
contient une copie sûre du profil source. Le mode compact est le mode par
défaut.

`verifiedOnly` accepte les profils publics certifiés Blue ou par l'ancienne
certification. Si les indicateurs de la source se contredisent, l'état certifié
l'emporte.

Les lignes n'incluent jamais d'état propre au compte qui consulte. Xquik retire
les indicateurs d'abonnement, de blocage, de masquage, de MP, de notification et
autres indicateurs de ce type. La sortie brute les retire aussi.

## Cas d'usage

- Enrichir des prospects & créer des datasets de recherche avec plus de champs
  par profil. Le 2026-09-29, notre ligne médiane (`outputMode: "full"`) avait 38
  champs. C'est 2,5x la médiane de 9 autres Actors.
- Exportez les abonnés de concurrents pour la prospection.
- Comparez les audiences de votre compte, de vos concurrents et de personnalités
  publiques.
- Filtrez par nombre d'abonnés et par certification pour trouver les bons
  profils.
- Exportez les membres d'une Communauté X.
- Créez des datasets publics de réseaux sociaux pour la recherche.
- Segmentez des bases d'abonnés par mot-clé de bio, localisation ou type de
  profil.

## Comment utiliser X Follower Scraper pour scraper des données d'abonnés ?

1. Ouvrez X Follower Scraper de Xquik dans Apify Console.
2. Ajoutez des URL de profil, de Liste ou de Communauté, des noms d'utilisateur
   X ou des ID numériques.
3. Choisissez une relation, comme `followers` ou `verified_followers`.
4. Réglez `maxItems` et d'éventuels filtres de profil.
5. Lancez le run.
6. Exportez le dataset en JSON, CSV, Excel ou HTML.

Les entrées ci-dessous couvrent les cas courants.

### Coller des URL de profil ou de Liste

Collez des URL de profil, de Liste ou de Communauté. Chaque URL fixe la relation
à scraper :

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
`/<handle>/followers`. Les noms d'utilisateur fonctionnent avec ou sans `@` :

```json
{
  "twitterHandles": ["elonmusk", "nasa", "openai"],
  "relation": "followers",
  "maxItems": 1000
}
```

`relation` fixe ce qu'il faut scraper pour chaque nom d'utilisateur. Utilisez
`followers`, `following` ou `verified_followers`.

La même entrée accepte aussi les alias `username`, `usernames` et `user_names`.

### Runs multi-relations

Réglez `relations` pour lire plusieurs relations des mêmes noms d'utilisateur :

```json
{
  "usernames": ["nasa"],
  "relations": ["followers", "following"],
  "maxItems": 1000
}
```

Des booléens comme `getFollowers`, `getFollowing`, `getVerifiedFollowers`,
`getListMembers`, `getListFollowers` et `getCommunityMembers` fonctionnent
aussi.

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

Les ID d'utilisateur numériques acceptent aussi les alias `twitterUserIds` et
`user_ids`.

`relation` s'applique aux ID d'utilisateur numériques. Les ID de Liste lisent
les membres par défaut. Les ID de Communauté lisent toujours les membres.
`maxItemsPerTarget` empêche la première grosse cible d'épuiser `maxItems`.

### Filtrer avant de payer

Ajoutez des filtres pour que seuls les profils conformes entrent dans votre
dataset :

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
lignes qui passent tous les filtres et entrent dans votre dataset.

Séparez les variantes de `bioContains` par des virgules ou des retours à la
ligne. Un profil passe si sa bio contient l'un des termes fournis. La recherche
ignore la casse.

### Trouver les audiences communes

Utilisez le mode fusion pour comparer des concurrents, des Listes, des
Communautés ou des types de relation :

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
`sourceTargets`, `sourceRelations`, `sourceUrls`, `sourceTargetKeys` et
`overlapCount`. Triez par `overlapCount` ou exportez les lignes en CSV. Gardez
`maxItems` assez haut pour que chaque cible ajoute des lignes. Utilisez
`maxItemsPerTarget` pour régler la profondeur de chaque compte.

### Formes d'URL acceptées

| URL                                         | Relation                                       |
| ------------------------------------------- | ---------------------------------------------- |
| `https://x.com/<handle>/followers`          | `followers`                                    |
| `https://x.com/<handle>/verified_followers` | `verified_followers`                           |
| `https://x.com/<handle>/following`          | `following`                                    |
| `https://x.com/<handle>`                    | `relation` par défaut (followers si non réglé) |
| `https://x.com/i/lists/<id>/members`        | `list_members`                                 |
| `https://x.com/i/lists/<id>/followers`      | `list_followers`                               |
| `https://x.com/i/lists/<id>`                | `list_members`                                 |
| `https://x.com/i/communities/<id>/members`  | `community_members`                            |
| `https://x.com/i/communities/<id>`          | `community_members`                            |
| `<handle>/followers`                        | `followers`                                    |
| `<handle>/following`                        | `following`                                    |
| `<handle>/verified_followers`               | `verified_followers`                           |
| `lists/<id>/members`                        | `list_members`                                 |
| `lists/<id>/followers`                      | `list_followers`                               |
| `communities/<id>/members`                  | `community_members`                            |

Les URL `twitter.com` et `mobile.twitter.com` fonctionnent aussi partout. Les
URL sans `https://`, comme `x.com/nasa`, fonctionnent aussi.

## Exemples de tâches

Choisissez parmi 50 tâches publiques. Chacune a une entrée limitée et une vue de
dataset adaptée. Chaque tâche s'ouvre sur une vraie audience ou un vrai filtre.
Modifiez-la avant de la lancer.

- [Discover AI builders in OpenAI followers](https://apify.com/xquik/x-follower-scraper/examples/discover-ai-builders-in-openai-followers)
- [Build an X audience dataset for AI agents](https://apify.com/xquik/x-follower-scraper/examples/build-agent-ready-x-audience-dataset)
- [Collect X audience data for RAG](https://apify.com/xquik/x-follower-scraper/examples/collect-x-audience-data-for-rag)
- [Find AI SEO practitioners on X](https://apify.com/xquik/x-follower-scraper/examples/find-ai-seo-practitioners-on-x)
- [Compare AI brand follower overlap](https://apify.com/xquik/x-follower-scraper/examples/compare-ai-brand-follower-overlap)
- [Export Twitter followers to CSV](https://apify.com/xquik/x-follower-scraper/examples/export-twitter-followers-to-csv)
- [Analyze competitor follower overlap](https://apify.com/xquik/x-follower-scraper/examples/analyze-competitor-follower-overlap)
- [Find micro-influencers in X followers](https://apify.com/xquik/x-follower-scraper/examples/find-micro-influencers-in-followers)
- [Export curated Twitter list members](https://apify.com/xquik/x-follower-scraper/examples/export-curated-twitter-list-members)
- [Analyze public X Community members](https://apify.com/xquik/x-follower-scraper/examples/analyze-public-x-community-members)
- [Collect Community members for AI agents](https://apify.com/xquik/x-follower-scraper/examples/collect-community-members-for-ai-agents)
- [Create repeatable X follower snapshots](https://apify.com/xquik/x-follower-scraper/examples/create-repeatable-follower-snapshots)

## Combien coûte le scraping des abonnés X ?

X Follower Scraper de Xquik coûte $0.00015 par profil livré sur chaque plan
Apify. Apify facture l'usage de votre plateforme à part. Xquik facture une fois
par ligne de données livrée. Vous n'avez besoin d'aucun abonnement Xquik séparé,
et Xquik ne facture pas le démarrage. Les démarrages, les cibles et le choix de
relation ne sont pas facturés comme des requêtes à part.

Un run peut lire de nombreuses cibles. Les plafonds, la déduplication,
l'attribution et la facturation restent exacts sur toutes les cibles.

- Les filtres passent avant qu'un profil entre dans votre dataset, donc les
  lignes filtrées ne coûtent rien.
- Les filtres numériques sont `minFollowers`, `maxFollowers`, `minFollowing`,
  `maxFollowing`, `minStatuses`, `maxStatuses` et `minAccountAgeDays`.
- Les filtres de profil sont `verifiedOnly`, `verifiedType`, `bioContains`,
  `locationContains`, `usernameContains`, `hasWebsite` et `hasLocation`.
- L'Actor retire les répétitions entre cibles avant l'écriture. Réglez
  `dedupeAcrossTargets: false` pour les garder.
- Xquik ne facture jamais les lignes que le dataset rejette.
- Les diagnostics sont gratuits dans la sortie `diagnostics`.
- Les runs sans entrée, avec une entrée invalide ou sans sortie écrivent 1
  enregistrement exploitable dans la sortie gratuite `diagnostics`.

Un run qui rencontre un problème, ou un gros run, écrit aussi un enregistrement
`run-report`. Son `estimatedChargeUsd` utilise le prix pay-per-event en vigueur
qu'Apify transmet à l'Actor. Un petit run sans problème ne l'écrit pas et réduit
l'usage Apify. Activez `alwaysSaveRunRecords` pour l'écrire à chaque run.

## Benchmark

X Follower Scraper de Xquik a battu 9 autres Actors d'abonnés sur le coût et la
vitesse. Sa ligne médiane (`outputMode: "full"`) avait 38 champs, soit 2,5x la
médiane des autres.

| Actor                                                  | Profils utiles | Coût par profil utile | Profils utiles par seconde | Champs par ligne | Run public                                                                                                                                                                                     |
| ------------------------------------------------------ | -------------: | --------------------: | -------------------------: | ---------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| xquik/x-follower-scraper                               |           1000 |             $0.000155 |                      100.0 |               38 | [Voir le run](https://console.apify.com/view/runs/z5ELS2u5sgjuhAFHN)                                                                                                                           |
| xquik/x-follower-scraper                               |           1000 |             $0.000155 |                       77.9 |               38 | [Voir le run](https://console.apify.com/view/runs/Htim4jqodU6ZPjQiQ)                                                                                                                           |
| b2b_leads/X-Real-Time-Data                             |            286 |             $0.000388 |                        3.1 |               21 | [Voir le run](https://console.apify.com/view/runs/IkQButA6cVz4ys4GM)                                                                                                                           |
| kaitoeasyapi/premium-x-follower-scraper-following-data |            356 |             $0.000506 |                       21.9 |               50 | [Voir le run](https://console.apify.com/view/runs/cJgj15HLBA50LEUf0)                                                                                                                           |
| api-ninja/x-twitter-followers-scraper                  |            350 |             $0.000809 |                        7.0 |                8 | [Voir le run](https://console.apify.com/view/runs/XjJ4UPKAILSz0Droz)                                                                                                                           |
| altimis/scweet                                         |            332 |             $0.000922 |                        1.1 |               21 | [Voir le run](https://console.apify.com/view/runs/qVGvT7TPAJEHCuR42)                                                                                                                           |
| apidojo/twitter-user-scraper                           |            323 |             $0.001160 |                        7.3 |               25 | [Voir le run](https://console.apify.com/view/runs/Xnf7rh8jK6764gP1f)                                                                                                                           |
| atomus/twitter-scraper                                 |            323 |             $0.001272 |                        6.2 |               13 | [Voir le run](https://console.apify.com/view/runs/MWz1l0cTcfPcEnaiH)                                                                                                                           |
| practicaltools/cheap-simple-twitter-api                |            283 |             $0.002036 |                        6.5 |                4 | [Run 1](https://console.apify.com/view/runs/Zhvi7LsfpHdQNKcGb), [Run 2](https://console.apify.com/view/runs/IsJj4fa8pFUG7uhlK), [Run 3](https://console.apify.com/view/runs/2W7n8fpEqoxiXq6oX) |
| maximedupre/twitter-scraper                            |            320 |             $0.002192 |                        2.1 |               15 | [Run 1](https://console.apify.com/view/runs/HblUkhgI2svp1LBGs), [Run 2](https://console.apify.com/view/runs/37yQFzgydzJoWfa39), [Run 3](https://console.apify.com/view/runs/mtBoKcocaM4BUzZmm) |
| seemuapps/x-followers-following-scraper                |            286 |             $0.003504 |                        3.9 |                9 | [Run 1](https://console.apify.com/view/runs/1r3je034X2qhFGgLj), [Run 2](https://console.apify.com/view/runs/dc4ztVP3n2eemgiNQ), [Run 3](https://console.apify.com/view/runs/gWPiBT00G7D9IJ0Cj) |

Chaque Actor a lu les abonnés de NASA, SpaceX & esa. Les autres Actors ont
tourné le 2026-09-28. Les runs de Xquik ont utilisé `outputMode: "full"` le
2026-09-29. Tous les runs ont utilisé le niveau Bronze. Un profil utile est
unique, a 30+ jours, 1+ abonné & 1+ post. Le coût est la dépense totale du
client par profil utile. Le nôtre inclut l'usage Apify que payent nos clients.
Une ligne avec 3 runs les additionne. Champs par ligne est la médiane des champs
non vides, champs imbriqués compris. Une liste compte comme 1 champ. Ouvrez un
run pour voir son entrée, son log & son dataset.

## Entrée

L'onglet Input liste chaque option. Ajoutez au moins 1 champ parmi `startUrls`,
`twitterHandles`, `userIds`, `listIds` ou `communityIds`. Leurs alias documentés
comptent aussi. Tous les autres champs sont facultatifs.

Essayez ces entrées :

- Ajoutez le nom d'utilisateur d'un concurrent à `twitterHandles` avec
  `relation: "followers"`.
- Collez `https://x.com/<handle>/verified_followers` dans Start URLs pour les
  profils certifiés.
- Collez une URL de Liste dans Start URLs pour auditer ses membres.
- Ajoutez 2 noms d'utilisateur ou plus. Un profil commun apparaît une fois, sous
  la première cible. Utilisez `dedupeMode: "merge"` pour garder 1 ligne avec
  chaque cible correspondante. Réglez `dedupeAcrossTargets: false` pour garder 1
  ligne par cible.

### Saisie dans la Console et via l'API

Le formulaire de la Console a ces contrôles :

- Le champ Start URLs accepte des chaînes d'URL ou des objets
  `{ "url": "..." }`. Son éditeur JSON garde les 2 formats de l'API.
- Relation, Output Mode et Dedupe Mode sont des listes déroulantes à choix
  fixes.
- Relations est une liste à choix multiples pour les runs multi-relations.
- Les limites de résultats acceptent des nombres entiers de 1 ou plus.
- Les filtres numériques de profil acceptent des nombres entiers de 0 ou plus.

Utilisez les champs canoniques dans les nouvelles intégrations. Les alias
fonctionnent toujours dans les entrées JSON, API, SDK, d'automatisation et de
tâche. `outputVariant` et `includeRaw` sont des alias d'Output Mode.
`dedupeAcrossTargets` est un alias de Dedupe Mode. Le formulaire visuel masque
les alias qui font doublon avec un contrôle canonique. Les entrées JSON
existantes et les entrées de tâche enregistrées avec des alias continuent de
fonctionner. Les entrées enregistrées avec `dedupeAcrossTargets: false` ou
`dedupeMode: "none"` gardent 1 ligne par cible.

### Migrer depuis un autre Actor d'abonnés

Collez l'entrée que vous utilisez déjà. X Follower Scraper de Xquik lit les noms
de champs des autres Actors d'abonnés X. Il les fait correspondre à ses propres
champs. Les noms canoniques restent la norme documentée. Un alias ne supprime
jamais un champ et ne change jamais ce que vous payez.

| Champ que vous utilisez déjà                                                          | Xquik le lit comme      |
| ------------------------------------------------------------------------------------- | ----------------------- |
| `twitterHandles`, `usernames`, `user_names`, `handles`, `userNameList`, `screenNames` | `twitterHandles`        |
| `username`, `handle`, `screenName`, en une seule chaîne                               | `twitterHandles`        |
| `twitterUserIds`, `user_ids`, `userIdList`                                            | `userIds`               |
| `user_id`, `userId`, en une seule chaîne                                              | `userIds`               |
| `startUrls`, `urls`, `targets`, `profileUrls`, `accountUrls`                          | `startUrls`             |
| `profileUrl`, en une seule chaîne                                                     | `startUrls`             |
| `getFollowers`, `getFollowing`                                                        | `relations`             |
| `type` avec `followers` ou `following`                                                | `relation`              |
| `maxResults`, `max_results`, `resultsLimit`, `count`                                  | `maxItems`              |
| `scrapeAllResults`                                                                    | aucun plafond par cible |

2 noms ont un autre sens ici. Dans certains Actors, `maxFollowers` et
`maxFollowing` plafonnent le nombre de lignes d'un run. Dans X Follower Scraper
de Xquik, ils filtrent les profils selon leur nombre d'abonnés et d'abonnements.
Utilisez `maxItems` pour plafonner les lignes. L'Actor n'a pas d'unité de page,
donc remplacez `maxPages` par `maxItems`.

### Utilisez toujours la dernière build

Les runs lancés depuis le Store utilisent la build `latest` de X Follower
Scraper de Xquik. Dans les appels API, omettez le choix de build ou passez
`build=latest`. Mettez à jour les tâches et les intégrations qui figent une
build plus ancienne. Une build figée ne change jamais d'elle-même.

## Sortie

Chaque profil est un objet JSON. Le mode compact renvoie les champs publics
normalisés, les champs de version de schéma et les métadonnées de source quand
elles existent.

Les schémas du dataset et du run-report décrivent chaque champ renvoyé. Les
champs primitifs portent aussi des exemples pour les agents et les intégrations
générées.

Les valeurs ci-dessous sont des exemples. Vos lignes portent les données en
direct au moment du run. Une ligne compacte ressemble à ceci :

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
  "profilePicture": "https://...",
  "coverPicture": "https://...",
  "createdAt": "Tue Jun 02 20:12:29 +0000 2009",
  "sourceTarget": "nasa",
  "sourceRelation": "followers",
  "sourceUrl": "https://x.com/nasa/followers"
}
```

Le mode de dédoublonnage fusion ajoute des champs de recoupement :

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

Exportez le dataset Apify en JSON, CSV, Excel ou HTML.

## Options de run

Réglez `maxTotalChargeUsd` dans l'API Apify pour plafonner strictement la
dépense. Dans la Console, cette limite s'appelle Max cost per run. Apify
transmet cette limite à X Follower Scraper de Xquik sous la forme
`ACTOR_MAX_TOTAL_CHARGE_USD`. Il s'arrête avant d'accepter des lignes au-delà de
la limite. Laissez `maxItems` vide pour renvoyer autant de profils que le
plafond de dépense le permet. Réglez `maxItems` et `maxItemsPerTarget` seulement
si vous voulez moins de profils que le budget ne le permet.

- Combinez des filtres de profil, comme `minFollowers`, `verifiedType` et
  `bioContains`, pour réduire le dataset facturé.
- Par défaut, les runs gardent seulement les profils uniques entre cibles.
  Réglez `dedupeAcrossTargets: false` pour garder 1 ligne par cible.
- Réglez `dedupeMode: "merge"` pour avoir 1 ligne par profil avec chaque cible
  source correspondante.
- Réglez `outputMode: "full"` pour les champs de profil optionnels, quand ils
  existent. Ils incluent les ID des posts épinglés, les entités et les
  métadonnées du profil.
- Réglez `outputMode: "raw"` ou `includeRaw: true` pour inclure un objet `raw`
  nettoyé à côté des champs normalisés.
- Planifiez des runs répétés et gardez chaque dataset pour comparer les ID de
  profil. Les moniteurs Xquik émettent les événements de post et de profil pris
  en charge, pas les changements de listes d'abonnés.

## Runs vides, partiels et arrêtés

X Follower Scraper de Xquik explique les runs vides, partiels et arrêtés avec
des diagnostics gratuits. Une sortie réussie de l'Actor confirme la livraison,
pas une extraction complète.

Un run interrompu écrit un diagnostic `partial` gratuit. Les résultats déjà
livrés restent dans le dataset. Lisez `availableResults`, `failedTargets`,
`retryable` et `nextAction` avant de relancer.

Le statut du run dit pourquoi il s'est arrêté. Il compte aussi les résultats
facturés, les doublons ignorés et les cibles lues. Le statut nomme chaque cause
d'arrêt anticipé. `stopCauses` liste chaque cause avec ses propres `message`,
`retryable` et `nextAction`. Les causes sont `target_not_found`,
`target_protected`, `target_failed` et `deadline_reached`. Un compte introuvable
n'entre dans la liste que si une autre cause a arrêté le run. Le run est
`retryable` dès qu'une cause l'est.

X garde privées les listes d'un compte protégé. Cette cible reçoit
`target_protected` dans 1 diagnostic gratuit, et le run lit les autres cibles.

`failedTargets` compte les cibles arrêtées après une erreur. Ces runs utilisent
`completionReason: "partial_failure"`. Leurs profils livrés restent des lignes
de données facturables.

Le timeout Apify par défaut est `0`, donc les runs n'ont pas de limite de temps.
Le run continue jusqu'au plafond ou jusqu'à la fin des profils. Vous pouvez
quand même régler un timeout. `completionReason: "deadline_reached"` signifie
alors que cette limite approche. Le run enregistre les profils et le rapport,
puis s'arrête proprement avant la limite. Xquik facture une seule fois chaque
profil livré.

Les runs qui rencontrent un problème écrivent toujours `run-report`, y compris
les sorties sans entrée ou avec une entrée invalide. `run-report` a aussi un
champ `version` avec la version exacte de la source publiée de l'Actor.

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
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper) : scrape les
  tendances en temps réel par lieu, avec rang, volume, requête et WOEID.
  Utilisez-le pour suivre les tendances de chaque lieu. À partir de
  $0.00015 par tendance.
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

## Besoin de plus que du scraping ?

Xquik propose aussi 47 outils de tableau de bord, 129 opérations REST, des
webhooks signés et un serveur MCP.

- [Documentation de l'API](https://docs.xquik.com/introduction) : guides de
  l'API REST
- [Followers API](https://docs.xquik.com/api-reference/x/followers) : obtenez
  les abonnés disponibles d'un compte
- [Following API](https://docs.xquik.com/api-reference/x/following) : obtenez
  les comptes qu'un utilisateur suit
- [List Members API](https://docs.xquik.com/api-reference/x/list-members) :
  exportez les membres d'une Liste X publique
- [Serveur MCP](https://docs.xquik.com/mcp/overview) : découvrez et lancez les
  opérations JSON ou texte prises en charge
- [Webhooks](https://docs.xquik.com/webhooks/overview) : recevez les événements
  de post et de profil pris en charge

## FAQ

### Ai-je besoin d'une clé API X ?

Non. Vous n'avez besoin ni de clé API X, ni de connexion, ni d'identifiants.

### Qu'est-ce qui limite un run ?

Votre limite d'éléments et votre limite de dépense Apify arrêtent le run. Les
limites de votre compte Apify et de la plateforme s'appliquent toujours.

### Quelle est sa vitesse ?

La vitesse de X Follower Scraper de Xquik dépend de la taille de la cible, des
filtres et de la disponibilité de X. Ses 2 runs de [benchmark](#benchmark) ont
atteint 77,9 et 100,0 profils utiles par seconde.

### Pourquoi mon run renvoie-t-il moins de lignes que `maxItems` ?

Les filtres comme `minFollowers`, `verifiedOnly` et `bioContains` s'appliquent
avant l'écriture. Assouplissez-les pour obtenir plus de résultats. X Follower
Scraper de Xquik retire aussi les répétitions entre cibles.

### Combien d'abonnés puis-je scraper sur un seul compte ?

Autant que X en affiche pour ce compte. Le run continue jusqu'à votre plafond,
votre limite de dépense ou la fin de la liste. `maxItemsPerTarget` plafonne
seulement chaque cible.

### L'Actor relance-t-il les échecs temporaires ?

Oui. Il se remet seul des erreurs temporaires de X. Après un échec définitif, le
run garde ses résultats partiels.

### Que se passe-t-il près de la limite de temps d'un run Apify ?

X Follower Scraper de Xquik n'ajoute aucune échéance plus courte. Avant votre
limite, il enregistre les profils, écrit le rapport et s'arrête. Les lignes qui
n'atteignent jamais le dataset ne coûtent rien.

### Puis-je reprendre là où je me suis arrêté ?

Pas encore. Un nouveau run sur la même cible repart du début.

### Puis-je utiliser l'API Apify pour lancer cet Actor ?

Oui. L'[onglet API](https://apify.com/xquik/x-follower-scraper/api) propose des
exemples en Python, JavaScript et cURL.

### Puis-je planifier des scrapings récurrents ?

Oui. Utilisez la [planification](https://docs.apify.com/platform/schedules)
intégrée d'Apify pour lancer cet Actor selon un cron. Comparez les datasets
enregistrés pour repérer les changements d'abonnés.

### Est-il légal de scraper des données X ?

X Follower Scraper de Xquik collecte des champs de profil publics de X. Les
résultats peuvent contenir des données personnelles, dont des localisations
déclarées. Assurez-vous d'avoir une finalité licite et respectez les règles de
protection des données applicables. En cas de doute, demandez conseil à un
juriste qualifié.

### Où trouver de l'aide ?

Ouvrez une issue dans l'onglet Issues de la page de l'Actor. Vous pouvez aussi
écrire à support@xquik.com avec l'ID du run.

### Où est la documentation de l'API ?

Lisez la [documentation de l'API](https://docs.xquik.com/introduction).
