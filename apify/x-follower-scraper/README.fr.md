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

Xquik est le service de scraping X (Twitter) le plus rapide et le moins cher
au monde, avec les données X les plus complètes. X Follower Scraper collecte
les abonnés, les comptes suivis, les membres de list, les abonnés et les
membres de community. Tous les autres Actors Apify facturent avant de
filtrer ou de dédupliquer. Xquik ne facture que les résultats livrés,
uniques et conformes aux filtres.

Scrapez les abonnés, les comptes suivis, les abonnés vérifiés, les membres
de List, les abonnés de List et les membres de Community sur X (Twitter)
pour **à partir de $0.00015 par profil livré sur chaque plan Apify**. Apify
facture séparément l'usage de sa plateforme. Aucune connexion X, ni frais de
démarrage, ni frais de requête.

>

## Extraction incomplète

Une extraction interrompue écrit un diagnostic `partial` gratuit. Les
résultats disponibles restent intacts. Consultez `availableResults`,
`failedTargets`, `retryable` et `nextAction` avant de relancer. Une sortie
d'Actor réussie confirme la livraison, pas l'extraction complète.

Xquik est un service tiers indépendant. Non affilié à X Corp.

> « Twitter » et « X » sont des marques déposées de X Corp.

## Que fait X Follower Scraper ?

X Follower Scraper renvoie les données de profil public disponibles pour
les abonnés, les comptes suivis, les Lists et les Communities. Chaque ligne
inclut sa cible source et sa relation.

### Comportement de base

- Les filtres et la suppression des doublons s'exécutent avant la
  facturation.
- Un run accepte des handles, des ID numériques, des URL et des chemins
  courts.
- Le mode fusion enregistre les profils partagés, les sources, les
  relations et `overlapCount`.
- Les curseurs automatiques demandent jusqu'à 300 profils par page.
- Les curseurs plus anciens conservent leur limite de 200 profils et
  redémarrent quand ils expirent.
- Les logs de page incluent `fetchDurationMs`, `processingDurationMs`,
  `pushDurationMs`, `statusDurationMs` et `fullPageDurationMs` sans répéter
  les cibles.
- Les points de contrôle préservent les lignes acceptées, la durée et les
  compteurs d'échec après un redémarrage.

## Exemples de tâches

Choisissez parmi 50 tâches publiques. Chacune a une entrée bornée et une vue
de dataset correspondante. Chaque tâche démarre avec une audience ou un
filtre réel. Modifiez-la avant de l'exécuter.

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

### Quelles données X Follower Scraper peut-il extraire ?

| Champ             | Description                                              |
| ----------------- | --------------------------------------------------------- |
| `id`              | ID X numérique de l'utilisateur                           |
| `username`        | Handle (sans `@`)                                          |
| `name`            | Nom affiché                                                |
| `description`     | Texte de la bio                                            |
| `followers`       | Nombre d'abonnés                                           |
| `following`       | Nombre de comptes suivis                                   |
| `statusesCount`   | Total de tweets publiés                                    |
| `mediaCount`      | Total de médias téléversés                                 |
| `favouritesCount` | Total de likes donnés                                      |
| `verified`        | Indicateur combiné Blue public ou vérifié historique       |
| `verifiedType`    | `blue`, `business`, `government` ou `none`                 |
| `location`        | Localisation autodéclarée                                  |
| `url`             | URL du site web depuis le profil                           |
| `profilePicture`  | URL de l'avatar (taille complète)                          |
| `coverPicture`    | URL de la bannière                                         |
| `createdAt`       | Chaîne d'horodatage de création du compte fournie par X    |
| `sourceTarget`    | Handle / ID à partir duquel ce profil a été scrapé         |
| `sourceRelation`  | Relation : `followers`, `following`, `list_members`, ...   |
| `sourceUrl`       | URL exacte sur laquelle le profil a été découvert          |
| `sourceTargets`   | Toutes les cibles ayant correspondu à ce profil en mode fusion |
| `sourceRelations` | Toutes les relations ayant correspondu à ce profil en mode fusion |
| `sourceUrls`      | Toutes les URL source ayant correspondu à ce profil en mode fusion |
| `overlapCount`    | Nombre de paires relation-cible correspondantes en mode fusion |
| `resultType`      | Type de ligne en mode de sortie complet et brut            |
| `raw`             | Copie sûre du profil source avant mise en forme spécifique à l'Actor |

Les lignes suivent le contrat de profil public. Il couvre l'identité, les
compteurs, la vérification, la disponibilité, les affiliations, les données
professionnelles et les biographies. L'attribution de source, les entités et
les ID de tweet épinglé restent disponibles. Consultez l'OpenAPI pour la
liste exacte des champs.

Réglez `outputMode: "raw"` ou `includeRaw: true` pour inclure une copie
`raw` du profil source sûr. Le mode compact reste la valeur par défaut.

`verifiedOnly` accepte les profils Blue publics et vérifiés historiques. Des
indicateurs source contradictoires ne laissent jamais une valeur fausse
masquer un état de vérification vrai.

L'état relatif au visualiseur appartient au compte de récupération de Xquik,
pas à votre dataset. Les indicateurs de suivi, blocage, mise en sourdine,
DM, notification et autres indicateurs relatifs au visualiseur sont toujours
retirés, y compris de la sortie brute.

## Combien coûte le scraping des abonnés X ?

Chaque plan Apify coûte `$0.00015` par profil livré. Apify facture
séparément l'usage de sa plateforme. Xquik applique une facturation par
ligne de donnée livrée. Les diagnostics sont gratuits dans la sortie
`diagnostics`. Aucun abonnement Xquik séparé ne s'applique. Aucun frais de
démarrage ne s'applique. Chaque run écrit un enregistrement `run-report`
avec `estimatedChargeUsd` calculé à partir du prix pay-per-event en temps
réel qu'Apify expose à l'Actor. Chaque issue de run écrit `run-report`, y
compris les sorties sans entrée et avec entrée invalide. Son champ
`version` indique la version exacte du code source publié de l'Actor.

`failedTargets` compte les cibles arrêtées après un échec de lecture. Les
profils acceptés restent des lignes de donnée facturables. Ces runs
utilisent `completionReason: "partial_failure"`. La pagination rapide
côté serveur suit le même contrat de reporting.

Le délai d'expiration Apify par défaut est `0`. Les runs n'ont pas de
limite de temps. L'Actor suit chaque curseur en direct jusqu'au plafond ou
jusqu'à la fin de la source. Un appelant peut néanmoins fixer un délai fini.
Alors `completionReason: "deadline_reached"` signifie que cette limite est
proche. L'Actor réserve les 15 dernières secondes pour les points de
contrôle, les lignes, les rapports et une sortie propre. Les profils
valides restent livrés et facturés une seule fois. La pagination inachevée
reste reprenable.

Les cibles indépendantes s'exécutent en parallèle. Chaque cible conserve
une pagination de curseur ordonnée. Les écritures de dataset gardent les
plafonds, la déduplication, l'attribution et la facturation atomiques.

- Les démarrages, cibles et sélections de relation n'ajoutent aucun frais
  de requête séparé.
- Les filtres (`minFollowers`, `verifiedOnly`, `bioContains`,
  `locationContains`, `minFollowing`, `maxFollowing`, `minStatuses`,
  `maxStatuses`, `minAccountAgeDays`, `verifiedType`, `usernameContains`,
  `hasWebsite`, `hasLocation`) s'exécutent avant qu'un profil n'entre dans
  votre dataset.
- Avec `dedupeAcrossTargets: true`, l'Actor retire les répétitions avant
  l'écriture.
- Les lignes rejetées par le dataset ne sont pas facturées.
- Les runs sans entrée, avec entrée invalide et sans sortie écrivent 1
  enregistrement exploitable dans la sortie `diagnostics` gratuite.

Réglez `maxTotalChargeUsd` dans l'API Apify, ou « Max cost per run » dans la
Console, pour plafonner strictement les dépenses. Apify expose cette limite
à l'Actor sous la forme `ACTOR_MAX_TOTAL_CHARGE_USD`, et l'Actor s'arrête
avant d'accepter des lignes au-delà. Laissez `maxItems` vide pour que le run
renvoie autant de profils que le plafond de dépense le permet. Ne réglez
`maxItems` que lorsque vous voulez un plafond de résultats plus petit que
celui autorisé par le budget.

## Comment utiliser X Follower Scraper pour scraper des données d'abonnés ?

### 1. Collez des URL de profil ou de list

Collez des URL de profil, de List ou de Community. Le scraper route chaque
URL vers sa relation :

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

### 2. Handles en masse

Raccourci pour de nombreuses cibles `/<handle>/followers`. Les noms
d'utilisateur acceptent `@` ou aucun préfixe :

```json
{
  "twitterHandles": ["elonmusk", "nasa", "openai"],
  "relation": "followers",
  "maxItems": 1000
}
```

Réglez `relation` sur `followers`, `following` ou `verified_followers`
pour choisir la relation que l'Actor scrape pour chaque handle.

Les alias acceptés pour la même entrée incluent `username`, `usernames` et
`user_names`.

### 3. Runs multi-relations

```json
{
  "usernames": ["nasa"],
  "relations": ["followers", "following"],
  "maxItems": 1000
}
```

Vous pouvez aussi utiliser des booléens tels que `getFollowers`,
`getFollowing`, `getVerifiedFollowers`, `getListMembers`,
`getListFollowers` et `getCommunityMembers`.

### 4. Scraper par ID numériques d'utilisateur, de list ou de community

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

Les alias acceptés pour les ID d'utilisateur numériques incluent
`twitterUserIds` et `user_ids`.

`relation` s'applique aux ID d'utilisateur numériques. Les ID de List
utilisent par défaut les membres. Les ID de Community utilisent toujours
les membres. `maxItemsPerTarget` empêche la première grande cible de
consommer la limite globale.

### 5. Filtrer avant de payer

Appliquez des filtres pour que seuls les profils correspondants entrent
dans votre dataset :

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

L'Actor peut inspecter plus de profils qu'il n'en écrit. Vous ne payez que
pour les lignes qui passent tous les filtres et entrent dans votre dataset.

Séparez les alternatives de `bioContains` par des virgules ou des retours à
la ligne. Un profil passe quand sa bio contient l'un des termes fournis. La
correspondance ne tient pas compte de la casse.

### 6. Trouver un chevauchement d'audience

Utilisez le mode fusion pour comparer des concurrents, des lists, des
communities ou des types de relation :

```json
{
  "twitterHandles": ["openai", "anthropicai", "GoogleDeepMind"],
  "relation": "followers",
  "dedupeMode": "merge",
  "maxItemsPerTarget": 5000,
  "maxItems": 15000
}
```

La sortie contient une ligne par profil unique. Les profils partagés
incluent `sourceTargets`, `sourceRelations`, `sourceUrls`,
`sourceTargetKeys` et `overlapCount`, afin que vous puissiez trier par
chevauchement ou exporter directement en CSV. Gardez `maxItems` assez
élevé pour que chaque cible contribue des lignes. Utilisez
`maxItemsPerTarget` pour contrôler la profondeur par compte.

### Formes d'URL acceptées

| URL                                          | Relation                                     |
| --------------------------------------------- | --------------------------------------------- |
| `https://x.com/<handle>/followers`            | `followers`                                   |
| `https://x.com/<handle>/verified_followers`   | `verified_followers`                          |
| `https://x.com/<handle>/following`            | `following`                                   |
| `https://x.com/<handle>`                      | `relation` par défaut (followers si non réglé) |
| `https://x.com/i/lists/<id>/members`          | `list_members`                                |
| `https://x.com/i/lists/<id>/followers`        | `list_followers`                              |
| `https://x.com/i/lists/<id>`                  | `list_members`                                |
| `https://x.com/i/communities/<id>/members`    | `community_members`                           |
| `https://x.com/i/communities/<id>`            | `community_members`                           |
| `<handle>/followers`                          | `followers`                                   |
| `<handle>/following`                          | `following`                                   |
| `<handle>/verified_followers`                 | `verified_followers`                          |
| `lists/<id>/members`                          | `list_members`                                |
| `lists/<id>/followers`                        | `list_followers`                              |
| `communities/<id>/members`                    | `community_members`                           |

`twitter.com` et `mobile.twitter.com` sont aussi acceptés partout.

## Entrée

Consultez l'onglet **Input** pour la liste complète des options. Tous les
champs sont optionnels, sauf au moins un parmi : `startUrls`,
`twitterHandles`, `userIds`, `listIds` ou `communityIds`, ou leurs alias
documentés.

Exemples :

- Ajoutez un handle concurrent à `twitterHandles` avec
  `relation: "followers"`.
- Collez `https://x.com/<handle>/verified_followers` dans Start URLs pour
  les profils vérifiés.
- Collez une URL de list dans Start URLs pour auditer ses membres.
- Ajoutez 2 handles ou plus. Réglez `dedupeMode: "first"` pour ne garder
  que la première ligne de profil correspondante, ou utilisez
  `dedupeMode: "merge"` pour garder une ligne avec toutes les cibles source
  correspondantes.

### UX d'entrée Console et API

La Console expose ces contrôles :

- Le champ Start URLs accepte des chaînes d'URL ou des objets
  `{ "url": "..." }`. Son éditeur JSON préserve les deux formats d'API.
- Relation, Output Mode et Dedupe Mode sont des sélecteurs validés.
- Relations est un sélecteur multiple validé pour les runs
  multi-relations.
- Les limites de résultat acceptent des nombres entiers à partir de 1.
- Les filtres de profil numériques acceptent des nombres entiers à partir
  de 0.

Utilisez les champs canoniques dans les nouvelles intégrations. Les alias
de compatibilité restent disponibles en JSON, API, SDK, automatisation et
entrées de tâche. Cela inclut `outputVariant` et `includeRaw` comme alias
d'Output Mode. Cela inclut aussi `dedupeAcrossTargets` comme alias de
Dedupe Mode. Le formulaire visuel masque les alias qui dupliquent un
contrôle canonique. Les entrées JSON et de tâche sauvegardées existantes
conservent leur comportement actuel.

### Utilisez toujours la dernière build

Les runs de Store utilisent la configuration de build `latest` de l'Actor.
Les clients API doivent omettre le remplacement de build ou passer
`build=latest`. Mettez à jour les Tasks et intégrations qui épinglent une
build plus ancienne. Les builds épinglées ne bougent jamais
automatiquement.

## Sortie

Chaque profil est un objet JSON. Le mode compact renvoie des champs publics
normalisés, des champs de version de schéma et des métadonnées source
quand elles sont disponibles :

Les schémas de dataset et de run-report décrivent chaque champ renvoyé. Les
champs primitifs incluent aussi des exemples pour les agents et les
intégrations générées.

Les valeurs d'exemple sont illustratives. Les réponses reflètent les
données source au moment du run.

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

Le mode fusion de déduplication ajoute des champs de chevauchement :

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

Exportez en JSON, CSV, Excel ou HTML depuis le dataset Apify.

## Options de run

- Réglez la charge totale maximale Apify pour plafonner le coût du run.
  Laissez `maxItems` vide pour obtenir le maximum de lignes dans ce budget,
  ou réglez `maxItems` et `maxItemsPerTarget` quand vous voulez moins de
  profils.
- Combinez `minFollowers`, `verifiedOnly`, `verifiedType`, `minStatuses`,
  `usernameContains`, `bioContains`, `locationContains`, `hasWebsite` et
  `hasLocation` pour restreindre le dataset facturé.
- Réglez `dedupeMode: "first"` quand vous scrapez plusieurs handles
  concurrents pour n'obtenir que des profils uniques sur toutes les
  cibles.
- Réglez `dedupeMode: "merge"` pour obtenir une ligne par profil avec
  chaque cible source correspondante attachée.
- Réglez `outputMode: "full"` pour obtenir des champs de profil optionnels
  tels que les ID de tweet épinglé, les entités et les métadonnées de
  profil, quand disponibles.
- Réglez `outputMode: "raw"` ou `includeRaw: true` pour inclure un objet
  `raw` assaini aux côtés des champs normalisés.
- Planifiez des runs d'Actor répétés et stockez chaque dataset pour
  comparer les ID de profil. Les monitors Xquik émettent les événements de
  tweet et de profil pris en charge, pas les changements de liste
  d'abonnés.

## Cas d'usage

- Exporter les abonnés concurrents pour la recherche de prospects.
- Comparer les audiences entre votre compte, vos concurrents et des
  personnalités publiques.
- Filtrer le nombre d'abonnés et la vérification pour trouver des profils
  correspondants.
- Exporter les membres de X Communities pertinentes.
- Construire des datasets de réseau social public pour la recherche.
- Segmenter les bases d'abonnés par mot-clé de bio, localisation ou type
  de profil.

## Responsabilité sur les données

L'Actor demande des champs de profil X publics. Les résultats peuvent
contenir des données personnelles, y compris des localisations
autodéclarées. Confirmez un objectif licite et suivez les règles de
confidentialité applicables. Consultez un conseil juridique qualifié en
cas de doute.

## Actors Xquik associés

Chaque Actor Xquik partage le même moteur d'extraction, la même facturation
au filtre et les mêmes diagnostics. Choisissez celui qui correspond aux
données dont vous avez besoin.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper) : scrape des
  tweets depuis des recherches, des fils de profil, des Lists et des ID de
  tweet avec plus de 50 filtres et des exports plats. Utilisez-le quand vous
  avez besoin de données de tweet sans analyse. À partir de $0.00015 par
  ligne.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper) : scrape
  des profils ainsi que leurs posts, réponses, médias et likes à partir de
  handles, d'ID ou d'URL. Utilisez-le quand vous partez de comptes plutôt
  que de recherches. À partir de $0.00015 par ligne.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper) : scrape des
  réponses, des commentaires et des conversations entières sous les posts
  avec plus de 25 filtres. Utilisez-le quand vous avez besoin de la
  discussion sous les tweets. À partir de $0.00015 par ligne.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper) :
  scrape les réponses, citations, personnes ayant reposté, personnes ayant
  aimé et threads pour des URL ou ID de post en masse. Utilisez-le pour
  mesurer qui s'est engagé avec des posts. À partir de $0.00015 par ligne.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper) :
  recherche des utilisateurs par handle, bio et localisation avec des
  filtres d'abonnés, de vérification, d'ancienneté et de localisation.
  Utilisez-le pour créer des listes de comptes à partir d'une recherche. À
  partir de $0.00015 par profil.
- [X List Scraper](https://apify.com/xquik/x-list-scraper) : scrape les
  posts, membres et abonnés d'une List à partir d'URL ou d'ID de List.
  Utilisez-le quand une List organisée définit vos sources. À partir de
  $0.00015 par ligne.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper) :
  scrape les infos, posts, recherches, membres et modérateurs d'une
  Community. Utilisez-le quand vos sources sont des X Communities. À
  partir de $0.00015 par ligne.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper) : scrape les
  tendances en temps réel par localisation avec rang, volume, requête et
  WOEID. Utilisez-le pour suivre ce qui est tendance où. À partir de
  $0.00015 par tendance.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper) : scrape
  des X Articles longs en Markdown et texte avec couvertures, auteurs,
  dates et métriques. Utilisez-le quand vous avez besoin du corps des
  articles, pas des tweets. À partir de $0.00015 par article.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader) :
  extrait ou stocke des photos, vidéos et GIFs à partir de posts ou de
  profils, avec des options MP4 et de métadonnées. Utilisez-le quand vous
  avez besoin des fichiers médias eux-mêmes. À partir de $0.00015 par
  ligne média.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring) :
  suit les mentions de marque avec pertinence, sentiment et réponses sur
  l'expérience client par IA, et compare les runs. Utilisez-le pour
  surveiller une marque dans le temps. À partir de $0.0003 par tweet
  analysé.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis) :
  attribue une attitude, une intensité et une probabilité de sarcasme à
  chaque tweet par IA. Utilisez-le pour un sentiment général sur n'importe
  quel sujet. À partir de $0.0003 par tweet analysé.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals) :
  attribue une position haussière, baissière, neutre ou mixte, un type de
  contenu, une conviction et une pertinence d'actif par IA. Utilisez-le
  pour suivre les actions, la crypto ou les discussions de trading. À
  partir de $0.0003 par tweet analysé.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor) :
  attribue un format, une attribution de source et une pertinence de sujet
  aux posts d'actualité par IA. Utilisez-le pour séparer le reportage du
  commentaire. À partir de $0.0003 par tweet analysé.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier) :
  répond à vos propres questions de catégorie, de score et de oui/non pour
  chaque tweet par IA. Utilisez-le quand les analyses prédéfinies ne
  correspondent pas à vos étiquettes. À partir de $0.0003 par tweet
  analysé.

## Besoin de plus que du scraping ?

Xquik fournit aussi 47 outils de tableau de bord, 129 opérations REST, des
webhooks signés et un serveur MCP.

- [Documentation de l'API](https://docs.xquik.com/introduction) : guides
  de l'API REST
- [API Followers](https://docs.xquik.com/api-reference/x/followers) :
  récupère les abonnés disponibles d'un compte
- [API Following](https://docs.xquik.com/api-reference/x/following) :
  obtient qui un utilisateur suit
- [API List Members](https://docs.xquik.com/api-reference/x/list-members) :
  exporte les membres d'une list X publique
- [Serveur MCP](https://docs.xquik.com/mcp/overview) : découvrez et
  exécutez les opérations JSON ou texte prises en charge
- [Webhooks](https://docs.xquik.com/webhooks/overview) : recevez les
  événements de tweet et de profil pris en charge

## FAQ

**Ai-je besoin d'une clé API X ?** Non. Ce scraper utilise sa propre
infrastructure. Aucune connexion ni identifiant requis.

**Qu'est-ce qui limite un run ?** Votre limite d'éléments demandée et
votre limite de dépense Apify arrêtent le run. Les limites de compte et de
plateforme Apify s'appliquent toujours.

**Quelle est sa vitesse ?** Le temps d'exécution dépend de la taille de la
cible, des filtres et de la disponibilité en amont. Les runs filtrés en
profondeur enregistrent un point de contrôle dans la Console toutes les 5
pages. Cela réduit le trafic non lié aux données entre les récupérations
de page.

**Pourquoi mon run renvoie-t-il moins de lignes que `maxItems` ?** Des
filtres tels que `minFollowers`, `verifiedOnly` et `bioContains`
s'appliquent avant l'écriture. Assouplissez les filtres pour obtenir plus
de résultats.

**Combien d'abonnés puis-je scraper depuis un seul compte ?** X pagine les
grands comptes par lots. Augmentez la limite de temps de run d'Apify pour
récupérer plus de pages. `maxItemsPerTarget` ne plafonne que chaque cible.

**L'Actor relance-t-il les échecs temporaires ?** Oui. Il fait jusqu'à 3
tentatives par page pour les délais d'attente, les 429 et les réponses
5xx. Il respecte `Retry-After` quand présent. Sinon, il utilise un
backoff exponentiel. Les échecs définitifs préservent les résultats
partiels.

**Que se passe-t-il près de la limite de temps de run Apify ?** L'Actor
n'ajoute pas de délai de run plus court. Il utilise la limite configurée
d'Apify et garde les 15 dernières secondes pour la finalisation. Il vide
les profils, enregistre un point de contrôle de la pagination, écrit le
rapport et sort. Les lignes non acceptées par le dataset ne sont pas
facturées.

**Puis-je reprendre là où je m'étais arrêté ?** L'entrée de curseur de
reprise n'est pas encore exposée. Relancer la même cible démarre depuis sa
première page disponible.

**Puis-je utiliser l'API Apify pour l'exécuter ?** Oui. Consultez
l'[onglet API](https://apify.com/xquik/x-follower-scraper/api) pour des
exemples en Python, JavaScript et cURL.

**Puis-je planifier des scrapes récurrents ?** Oui. Utilisez la
[planification](https://docs.apify.com/platform/schedules) intégrée
d'Apify pour exécuter cet Actor sur un cron. Comparez les datasets
stockés pour trouver les changements d'abonnés.

**Où signaler un problème ?** Utilisez l'onglet Issues sur la page de cet
Actor.

**Où sont les documents de l'API ?** Lisez la
[documentation de l'API](https://docs.xquik.com/introduction).
