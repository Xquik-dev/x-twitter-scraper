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
au monde, avec les données X les plus complètes. X Reply Scraper collecte
les réponses, commentaires et conversations entières. Tous les autres
Actors Apify facturent avant de filtrer ou de dédupliquer. Xquik ne facture
que les résultats livrés, uniques et conformes aux filtres.

Scrapez les réponses X (Twitter) pour **$0.00015 par ligne livrée sur
chaque plan Apify**. Collez des URL de post, des ID de Tweet, des URL de
profil ou des noms d'utilisateur. Exportez les réponses, conversations,
auteurs, engagement, entités et URL de médias. Apify facture séparément
l'usage de sa plateforme. Vous n'avez besoin d'aucune connexion X.

Les filtres s'exécutent avant les écritures dans le dataset. Vous ne payez
que pour les lignes livrées.

>

## Extraction incomplète

Une extraction interrompue écrit un diagnostic `partial` gratuit. Les
résultats disponibles restent intacts. Consultez `availableResults`,
`failedTargets`, `retryable` et `nextAction` avant de relancer. Une sortie
d'Actor réussie confirme la livraison, pas l'extraction complète.

Xquik est un service tiers indépendant. Non affilié à X Corp.

> « Twitter » et « X » sont des marques déposées de X Corp.

## Que fait ce scraper de réponses Twitter ?

X Reply Scraper collecte les réponses publiques et les conversations de
commentaires. Il traite les posts uniques, les listes d'URL en masse, les
ID de Tweet et les fils de réponses d'utilisateur.

Utilisez-le pour l'analyse de sentiment, les retours clients, la recherche
communautaire, le classement de réponses, la découverte de prospects, la
revue de modération et les datasets de conversation.

### Comportement de collecte des réponses

- Le mode auto bascule les résultats directs incomplets vers la recherche
  de conversation.
- Les pages de réponse de Tweet automatiques demandent jusqu'à 300 lignes.
- Quatre stratégies couvrent les réponses directes, la recherche et le
  contexte de thread.
- Les entrées en masse acceptent des URL de post, des ID de Tweet, des
  profils et des noms d'utilisateur.
- Les cibles de profil combinent le fil et la recherche par auteur quand
  les deux s'appliquent.
- Les filtres et la suppression des doublons s'exécutent avant la
  facturation.
- La sortie prend en charge 4 modes de tri, 3 niveaux de détail et 3
  styles de champ.
- Chaque réponse conserve sa cible source, ses ID parents, son ID racine
  et sa profondeur.
- Les curseurs de continuation prennent en charge les rattrapages et les
  runs planifiés.
- Les runs vides écrivent 1 enregistrement gratuit dans `diagnostics`.
- Les logs de page et de cible incluent `fetchDurationMs`,
  `processingDurationMs`, `pushDurationMs`, `statusDurationMs`,
  `fullPageDurationMs` et `fullTargetDurationMs` sans répéter les entrées.
- Les points de contrôle préservent les réponses acceptées, la durée et
  les échecs après un redémarrage.

### Utilisez toujours la dernière build

Sélectionnez `latest` pour chaque run afin de recevoir tous les correctifs
publiés.

Si vous ne spécifiez aucune build, Apify utilise la valeur par défaut
`latest` de cet Actor. Les runs Console et les exemples d'API standard
héritent de cette valeur par défaut.

Les tâches sauvegardées peuvent remplacer la valeur par défaut de l'Actor.
Les plannings et intégrations de tâche réutilisent ce choix. Gardez chaque
remplacement réglé sur `latest`.

Apify ne redirige pas les numéros de build exacts vers `latest`. Remplacez
les numéros épinglés par `latest`. N'utilisez des builds exactes que pour
un retour en arrière temporaire.

## Démarrage rapide

Le formulaire initial cible une conversation publique vérifiée. Il renvoie
jusqu'à 25 lignes complètes et plates sur au plus 10 pages. Le mode auto
recherche l'ensemble de la conversation par défaut. La déduplication et
l'attribution de source restent activées.

### Scraper les réponses depuis une URL de post

```json
{
  "startUrls": [{ "url": "https://x.com/OpenAI/status/2082577277246972300" }],
  "maxItems": 100
}
```

### Scraper les réponses depuis des ID de Tweet

```json
{
  "tweetIds": ["2082577277246972300", "2083148725367783580"],
  "maxItemsPerTarget": 100,
  "maxItems": 10000
}
```

### Collecter la conversation imbriquée complète

```json
{
  "tweetIds": ["2082577277246972300"],
  "collectionStrategy": "conversationSearch",
  "scope": "all",
  "maxDepth": 5,
  "sort": "oldest",
  "maxItems": 500
}
```

### Scraper le fil de réponses d'un utilisateur

```json
{ "usernames": ["OpenAI", "apify"], "maxItems": 10000 }
```

### Filtrer les réponses avant la facturation

```json
{
  "tweetIds": ["2082577277246972300"],
  "anyWords": ["API", "agent", "developer"],
  "excludeWords": ["airdrop", "giveaway"],
  "lang": "en",
  "minLikes": 2,
  "minViews": 100,
  "verifiedOnly": true,
  "maxItems": 10000
}
```

### Exporter des lignes plates adaptées au CSV

```json
{
  "tweetIds": ["2082577277246972300"],
  "outputMode": "full",
  "outputPreset": "flat",
  "fieldStyle": "camelCase",
  "maxItems": 100
}
```

Les valeurs d'exemple sont illustratives. Les réponses reflètent les
données source au moment du run.

## Préparation pour agents IA et MCP

Exécutez cet Actor via Apify MCP, des clients API, x402 ou Skyfire.

- Des permissions limitées protègent les données de compte Apify non
  liées.
- La facturation pay-per-event permet des coûts déterministes basés sur
  le résultat.
- Le mode standby reste désactivé pour la compatibilité avec le paiement
  agentique.
- Des schémas typés exposent les réponses, les rapports de run et les
  curseurs de continuation.
- Des valeurs par défaut bornées empêchent les runs d'agent illimités
  accidentels.
- Les modes stables `camelCase` et `snake_case` simplifient le chaînage
  d'outils.
- Les lignes de diagnostic incluent un statut, un message et une action
  de récupération.
- Les rapports de run incluent des résultats exacts, des raisons d'arrêt
  et des estimations de coût.

## Cibles de réponse et alias d'entrée

Utilisez les champs principaux ci-dessous.

| Entrée        | Objectif                                       |
| ------------- | ------------------------------------------------ |
| `startUrls`   | URL X mixtes de post et de profil                |
| `tweetIds`    | ID de post numériques                            |
| `usernames`   | Fils de profil avec recherche par auteur         |
| `startCursor` | Reprend une cible depuis un curseur source sauvegardé |

Le formulaire visuel affiche uniquement les contrôles canoniques. Les alias
de compatibilité restent disponibles en JSON, API, SDK, automatisation et
entrées de tâche sauvegardées. Les champs canoniques et alias explicites
conservent leur ordre de résolution existant quand ils sont combinés.

Les alias de compatibilité acceptent des entrées concurrentes courantes :

- Alias d'URL : `urls`, `tweetUrls`, `postUrls`, `profileUrls`
- Alias d'ID : `conversationIds`, `postIds`, `ids`, `tweetId`, `id`
- Alias de nom d'utilisateur : `twitterHandles`, `screenname`
- Alias de limite globale : `maxResults`, `max_results`, `resultsLimit`,
  `maxReplies`
- Alias par cible : `maxRepliesPerTweet`, `maxCommentsPerPost`
- Alias de recherche : `useSearch`
- Alias de réponse imbriquée : `includeNestedReplies`,
  `includeRepliesOfReplies`
- Alias de post d'origine : `includeOriginalTweet`
- Alias de sortie : `outputVariant`, `includeRaw`

Les cibles mal formées ou non prises en charge ne font pas échouer l'Actor.
Le run renvoie un diagnostic exploitable quand aucune cible valide ne
subsiste.

Les cibles de profil combinent la pagination par curseur avec la recherche
par auteur. L'Actor retire les lignes en double avant la sortie et la
facturation. Les curseurs hérités sauvegardés conservent la pagination
standard.

## Stratégies de couverture

### Complétion automatique

Utilisez `collectionStrategy: "auto"` pour la plupart des tâches. Les
portées complètes ou imbriquées démarrent avec une extraction de réponse
complète. La portée, la profondeur, le tri et les contrôles d'auteur
s'appliquent avant les limites de réponse. L'extraction inclut les
descendants sous les cibles non racines. Une extraction incomplète
préserve les lignes avant d'essayer la recherche de conversation et les
réponses directes. Les portées directes basculent vers la recherche en cas
de besoin. Les pages inachevées conservent leur continuation. Les
stratégies explicites ne basculent jamais.

Le seuil de couverture du diagnostic ne prouve pas l'épuisement de la
source. Des pages bloquées, des limites, des données manquantes ou des
erreurs laissent la récupération incomplète.

### Point de terminaison de réponse directe

Utilisez `collectionStrategy: "replies"` pour forcer le fil de réponses de
X. Cela conserve l'ordre source et prend en charge les curseurs.

### Recherche de conversation

Utilisez `collectionStrategy: "conversationSearch"` pour une large
couverture de conversation. L'Actor recherche par
`conversation_id:<ID de Tweet>`.

### Contexte de thread complet

Utilisez `collectionStrategy: "thread"` pour lire le contexte de la
conversation source. Réglez `includeOriginalPost: true` pour conserver le
post racine en profondeur 0.

## Contrôles de réponse directe et imbriquée

Utilisez `scope` pour choisir la forme du résultat.

| Valeur   | Résultat                                            |
| -------- | ----------------------------------------------------- |
| `direct` | Conserve les réponses de profondeur 1                 |
| `nested` | Conserve les réponses aux réponses en profondeur 2+   |
| `all`    | Conserve chaque réponse directe et imbriquée disponible |

Utilisez `maxDepth` pour borner l'imbrication. Les liens parents peuvent
être absents quand X omet un ancêtre de conversation. L'Actor préserve la
meilleure profondeur disponible.

## Tri

Utilisez `sort` avec ces valeurs :

- `relevance` préserve l'ordre source de X
- `latest` trie du plus récent au plus ancien
- `oldest` trie du plus ancien au plus récent
- `likes` trie par nombre de likes le plus élevé en premier

Les cibles de profil collectent le nombre de résultats uniques et filtrés
demandé avant de le trier. Les cibles de Tweet conservent le tri global.

Les alias de compatibilité `sortBy` et `queryType` restent pris en charge.

## Filtres de réponse

Tous les filtres pris en charge s'exécutent avant les écritures dans le
dataset.

### Filtres de texte et d'entité

| Entrée           | Comportement                          |
| ------------------ | ---------------------------------------- |
| `exactPhrase`      | Exige une phrase exacte                  |
| `anyWords`         | Exige au moins 1 mot ou phrase           |
| `excludeWords`     | Retire les mots ou phrases correspondants |
| `keywordInclude`   | Alias fusionné avec `anyWords`           |
| `keywordExclude`   | Alias fusionné avec `excludeWords`       |
| `hashtags`         | Exige au moins 1 hashtag                 |
| `cashtags`         | Exige au moins 1 cashtag                 |
| `mentioning`       | Exige une mention `@`                    |

### Filtres d'auteur et de langue

| Entrée                    | Comportement                             |
| --------------------------- | ------------------------------------------- |
| `fromUser`                  | Conserve un auteur de réponse              |
| `toUser`                    | Conserve les réponses adressées à un nom d'utilisateur |
| `lang`                      | Conserve un code de langue X                |
| `verifiedOnly`              | Exige tout signal de vérification public   |
| `blueVerifiedOnly`          | Exige la vérification X Premium            |
| `excludeOriginalAuthor`     | Retire les auto-réponses de l'auteur source |

### Filtres d'engagement

Utilisez `minLikes`, `minReplies`, `minRetweets`, `minQuotes`, `minViews`
et `minBookmarks`. L'alias `minFaves` correspond à `minLikes`.

### Filtres de médias et de temps

- Réglez `hasMediaOnly: true` pour les réponses avec des médias publics.
- Réglez `mediaType` sur `any`, `image`, `video`, `gif` ou `link`.
- Réglez `since` pour un horodatage de début inclusif.
- Réglez `until` pour un horodatage de fin exclusif.
- Utilisez `sinceTime` et `untilTime` comme alias de compatibilité.

## Limites, facturation et continuation

`maxItems` limite les lignes livrées sur l'ensemble du run.
`maxItemsPerTarget` limite chaque post ou profil.

Les cibles indépendantes s'exécutent en parallèle. Chaque cible conserve
une pagination de curseur ordonnée. Les écritures de dataset gardent les
plafonds, la déduplication, l'attribution et la facturation atomiques.

L'Actor retire les doublons avant la facturation. Réglez
`dedupeAcrossTargets: false` pour préserver les lignes en double
provenant de cibles différentes.

Après un run limité en pages, lisez `next-cursors` dans le key-value
store par défaut. Passez un curseur via `startCursor` pour continuer
cette cible.

## Champs de sortie

Les schémas de dataset et de run-report décrivent chaque champ renvoyé.
Les champs primitifs incluent aussi des exemples pour les agents et les
intégrations générées.

Chaque ligne de réponse complète peut inclure ces champs principaux :

| Champ                | Description                                              |
| --------------------- | ---------------------------------------------------------- |
| `id`                  | ID de réponse                                              |
| `text`                | Texte de la réponse                                        |
| `fullText`            | Texte de réponse long format                               |
| `createdAt`           | Horodatage de la réponse                                   |
| `lang`                | Code de langue X                                           |
| `url`                 | URL directe de la réponse                                  |
| `conversationId`      | ID de conversation X                                       |
| `inReplyToId`         | ID du parent immédiat                                      |
| `inReplyToUserId`     | ID de l'auteur parent                                       |
| `inReplyToUsername`   | Nom d'utilisateur parent                                    |
| `likeCount`           | Likes                                                       |
| `replyCount`          | Réponses enfants                                            |
| `retweetCount`        | Reposts                                                     |
| `quoteCount`          | Citations                                                   |
| `viewCount`           | Vues                                                        |
| `bookmarkCount`       | Signets                                                     |
| `author`              | Métadonnées d'auteur publiques disponibles                  |
| `media`               | Images, vidéos, GIFs et variantes                           |
| `entities`            | Hashtags, cashtags, mentions, URL et horodatages vidéo       |
| `quoted_tweet`        | Post cité, quand disponible                                 |
| `retweeted_tweet`     | Post reposté, quand disponible                              |

Les lignes complètes préservent aussi les métadonnées source disponibles.
Cela inclut `isNoteTweet`, `isReply`, `isLimitedReply`, `isQuoteStatus`,
`source`, `type`, `displayTextRange`, `contentDisclosure`,
`conversationControl`, `article`, `limitedActions`, `reactionContext`,
`card`, `communityId`, `communityNote`, `edit`, `isTranslatable`,
`noteTweet`, `place`, `postCta`, `possiblySensitive`, `previousCounts`,
`tombstone`, `unmentionedUserIds` et `viewState`.

Les lignes plates conservent l'ascendance de conversation, les détails
source, le type de résultat et la version de schéma. Consultez l'OpenAPI
pour la liste exacte des champs.

### Métadonnées d'auteur

Les auteurs imbriqués suivent le contrat de profil public. Il couvre
l'identité, les compteurs, la vérification, la disponibilité, les données
professionnelles et les biographies de profil.

La sortie plate ajoute `authorId`, `authorUsername`, `authorName`,
`authorFollowers`, `authorFollowing` et `authorVerified`.

### Métadonnées de médias

Les médias incluent la disponibilité, la géométrie, les tags, les
variantes vidéo, `watchNowUrl` et les actions `visitSiteUrl`.

La sortie plate ajoute `mediaUrls`.

## Modes de sortie

### Compact

Réglez `outputMode: "compact"` pour réduire la largeur du dataset. Il
préserve le texte, la conversation, l'auteur, l'engagement et les champs
de médias.

### Complet

Réglez `outputMode: "full"` pour préserver chaque champ public pris en
charge.

### Brut

Réglez `outputMode: "raw"` pour ajouter un instantané source assaini sous
`raw`.

### Imbriqué ou plat

La mise en page `flat` par défaut conserve les objets imbriqués et ajoute
des champs d'auteur pour les tableaux. Réglez `outputPreset: "nested"`
pour omettre les champs plats ajoutés.

### Nommage des champs

Réglez `fieldStyle` sur `source`, `camelCase` ou `snake_case`. L'Actor
évite d'écraser les clés source en collision.

## Diagnostics

Les lignes de donnée réussies utilisent `resultType: "reply"`. Les sorties
sans donnée écrivent exactement 1 enregistrement gratuit dans
`diagnostics` avec une correction exploitable.

Chaque issue de run écrit `run-report`, y compris les sorties sans entrée
et avec entrée invalide. Le schéma du rapport documente l'achèvement, la
facturation, les échecs et les curseurs sauvegardés. Son champ `version`
indique la version exacte du code source publié de l'Actor.

Les statuts possibles incluent :

- `no-input`
- `invalid-input`
- `replies-incomplete`
- `zero-output`
- `aborted`
- `unexpected-error`

## Combien ça coûte ?

Chaque plan Apify coûte **$0.00015 par ligne livrée**. Cela équivaut à
`$0.00015` par ligne. Apify facture séparément l'usage de sa plateforme.

Xquik applique une facturation par ligne de donnée livrée. Les diagnostics
sont gratuits dans `diagnostics`. Aucun frais de démarrage, d'URL, de
requête, de pagination, de filtre ou de proxy ne s'applique.

Le délai d'expiration Apify par défaut est `0`, donc les runs n'ont pas de
limite de temps. L'Actor continue jusqu'à ce qu'il atteigne le plafond ou
épuise les données éligibles. Un appelant peut néanmoins fixer un
délai Apify fini. Alors `completionReason: "deadline_reached"` signifie
que cette limite configurée est proche. L'Actor garde les 15 dernières
secondes pour les points de contrôle, les lignes, les rapports et une
sortie réussie. Les réponses déjà collectées restent livrées et facturées
une seule fois. La pagination inachevée reste reprenable.

## Exemples de tâches publiques

Choisissez parmi 50 tâches publiques. Chacune a une entrée bornée et une
vue de dataset correspondante. Modifiez toute tâche avant de l'exécuter.

Commencez avec ces exemples :

- [Collect replies for AI agents](https://apify.com/xquik/x-reply-scraper/examples/collect-replies-for-ai-agents)
- [Build an X reply RAG dataset](https://apify.com/xquik/x-reply-scraper/examples/build-x-reply-rag-dataset)
- [Archive replies for LLM processing](https://apify.com/xquik/x-reply-scraper/examples/archive-replies-for-llm-processing)
- [Extract reply leads for CRM](https://apify.com/xquik/x-reply-scraper/examples/extract-reply-leads-for-crm)

## Exemple d'API

### JavaScript

```javascript
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: '<APIFY_API_TOKEN>' });
const run = await client
  .actor('xquik/x-reply-scraper')
  .call({
    tweetIds: ['2082577277246972300'],
    collectionStrategy: 'auto',
    scope: 'all',
    maxItems: 100,
  });

const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
```

### Python

```python
from apify_client import ApifyClient

client = ApifyClient("<APIFY_API_TOKEN>")
run = client.actor("xquik/x-reply-scraper").call(run_input={
    "tweetIds": ["2082577277246972300"],
    "collectionStrategy": "auto",
    "scope": "all",
    "maxItems": 100,
})

for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
```

### cURL

```bash
curl "https://api.apify.com/v2/acts/xquik~x-reply-scraper/run-sync-get-dataset-items" \
  -X POST \
  -H "Authorization: Bearer <APIFY_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"tweetIds":["2082577277246972300"],"maxItems":100}'
```

## Automatisation et intégrations

Exécutez l'Actor via les plannings Apify, des webhooks, des clients API,
Make, Zapier, n8n, Google Sheets, du stockage cloud ou le
[serveur Apify MCP](https://docs.apify.com/platform/integrations/mcp).

Les workflows d'agent éligibles peuvent aussi utiliser
[x402](https://docs.apify.com/integrations/x402) ou
[Skyfire](https://docs.apify.com/integrations/skyfire).

Xquik fournit aussi 47 outils de tableau de bord, 129 opérations REST, des
webhooks signés et un serveur MCP.

## Usage responsable

Ne collectez que des données publiques. Suivez les lois et les règles de
plateforme applicables.

Les datasets de réponse peuvent contenir des données personnelles. Choisissez
un objectif licite. Minimisez la conservation. Protégez les exports.
Respectez les demandes de suppression et d'accès quand la loi l'exige.

L'Actor ne contourne pas les comptes protégés. Il ne demande pas les mots
de passe, les cookies de session ou les jetons d'authentification X des
clients.

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
  des profils ainsi que leurs posts, réponses, médias et abonnés à partir de
  handles, d'ID ou d'URL. Utilisez-le quand vous partez de comptes plutôt
  que de recherches. À partir de $0.00015 par ligne.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper) :
  scrape les réponses, citations, personnes ayant reposté et threads pour
  des URL ou ID de post en masse. Utilisez-le pour mesurer qui s'est engagé avec des posts. À partir de $0.00015 par ligne.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper) : scrape
  les abonnés, les comptes suivis, les membres de List, les abonnés de List
  et les membres de Community sous forme de lignes de profil. Utilisez-le
  quand vous avez besoin de listes d'audience ou de membres. À partir de
  $0.00015 par profil.
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
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer) :
  estime un Viral Score de 0 à 100 et un verdict pour chaque tweet à partir
  de 8 réponses d'IA sur ses traits. Utilisez-le quand vous étudiez pourquoi
  des tweets se propagent ou échouent. À partir de $0.0003 par tweet
  analysé.
