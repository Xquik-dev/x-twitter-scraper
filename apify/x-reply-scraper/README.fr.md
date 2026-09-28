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
monde. Ses données X sont les plus complètes. X Reply Scraper de Xquik collecte
les réponses, les commentaires et des conversations entières. La plupart des
autres Actors Apify facturent avant de filtrer ou de dédupliquer. Xquik facture
seulement les **résultats livrés, uniques et conformes à vos filtres**.

Scrapez les réponses X (Twitter) pour **$0.00015 par ligne livrée** sur chaque
plan Apify. Collez des URL de posts, des ID de post, des URL de profil ou des
noms d'utilisateur. Exportez les réponses, les conversations, les auteurs,
l'engagement, les entités et les URL des médias. Apify facture l'usage de votre
plateforme à part. Vous n'avez pas besoin de connexion X. Les filtres passent
avant l'écriture dans le dataset, donc vous payez seulement les lignes livrées.

> Xquik est un service tiers indépendant. Non affilié à X Corp.
> "Twitter" et "X" sont des marques déposées de X Corp.

## Que fait ce scraper de réponses Twitter ?

X Reply Scraper de Xquik collecte les réponses publiques et les conversations de
commentaires. Il traite les posts seuls, les listes d'URL en masse, les ID de
post et les fils de réponses des comptes.

Utilisez-le pour l'analyse de sentiment, les retours clients et l'étude des
communautés en ligne. Il sert aussi au classement des réponses, à la recherche
de prospects, à la revue de modération et aux datasets de conversations.

### Comportement de collecte des réponses

- Le mode auto continue la collecte quand les résultats directs sont
  incomplets.
- `collectionStrategy` propose 4 modes pour différents besoins.
- Les entrées en masse acceptent des URL de posts, des ID de post, des profils
  et des noms d'utilisateur.
- Les filtres et la suppression des doublons passent avant la facturation.
- La sortie propose 4 modes de tri, 3 niveaux de détail et 3 styles de champs.
- Chaque réponse garde sa cible source, les ID de ses parents, l'ID racine et sa
  profondeur.
- Les curseurs de reprise facilitent la récupération d'historique et les runs
  planifiés.
- Les runs vides écrivent 1 enregistrement gratuit dans `diagnostics`.
- Les logs du run montrent la durée par page et par cible dans
  `fetchDurationMs`, `processingDurationMs`, `pushDurationMs`,
  `statusDurationMs`, `fullPageDurationMs` et `fullTargetDurationMs`.
- Les runs gardent les réponses livrées et la progression quand Apify les
  redémarre.

## Comment scraper des réponses X

1. Collez des URL de posts, des ID de post, des URL de profil ou des noms
   d'utilisateur.
2. Réglez `maxItems`, `scope` et les filtres utiles à votre besoin.
3. Lancez X Reply Scraper de Xquik et ouvrez le dataset.

Le formulaire prérempli cible une conversation publique vérifiée. Il renvoie
jusqu'à 25 lignes complètes et plates. Le mode auto cherche dans toute la
conversation par défaut. La déduplication et l'attribution de la source restent
activées.

### Scraper les réponses d'une URL de post

```json
{
  "startUrls": [{ "url": "https://x.com/OpenAI/status/2082577277246972300" }],
  "maxItems": 100
}
```

### Scraper les réponses à partir d'ID de post

```json
{
  "tweetIds": ["2082577277246972300", "2083148725367783580"],
  "maxItemsPerTarget": 100,
  "maxItems": 10000
}
```

### Collecter toute la conversation imbriquée

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

### Scraper le fil de réponses d'un compte

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

## Combien coûte le scraping de réponses X ?

X Reply Scraper de Xquik coûte $0.00015 par ligne livrée sur chaque plan Apify.
Apify facture l'usage de la plateforme à part.

Xquik facture une fois par ligne de données livrée. Les réponses que vos filtres
ou la déduplication retirent ne coûtent rien. Les enregistrements de diagnostic
dans `diagnostics` sont gratuits. Xquik ne facture ni le démarrage, ni les URL,
ni les requêtes, ni la pagination, ni les filtres.

## Exemples de tâches publiques

Choisissez parmi 50 tâches publiques. Chacune a une entrée limitée et une vue de
dataset adaptée. Modifiez n'importe quelle tâche avant de la lancer.

Commencez par ces exemples :

- [Collect replies for AI agents](https://apify.com/xquik/x-reply-scraper/examples/collect-replies-for-ai-agents)
- [Build an X reply RAG dataset](https://apify.com/xquik/x-reply-scraper/examples/build-x-reply-rag-dataset)
- [Archive replies for LLM processing](https://apify.com/xquik/x-reply-scraper/examples/archive-replies-for-llm-processing)
- [Extract reply leads for CRM](https://apify.com/xquik/x-reply-scraper/examples/extract-reply-leads-for-crm)

## Prêt pour les agents IA et MCP

Lancez X Reply Scraper de Xquik via Apify MCP, des clients API, x402 ou Skyfire.

- Des permissions limitées protègent les autres données de votre compte Apify.
- La facturation pay-per-event lie le coût aux résultats livrés.
- Le mode Standby reste désactivé pour garantir la compatibilité avec les
  paiements agentiques.
- Des schémas typés décrivent les réponses, les rapports de run et les curseurs
  de reprise.
- Des valeurs par défaut bornées évitent qu'un agent lance par accident un run
  sans limite.
- Les modes stables `camelCase` et `snake_case` simplifient l'enchaînement
  d'outils.
- Les lignes de diagnostic incluent un statut, un message et une action de
  reprise.
- Les rapports de run incluent les résultats exacts, les raisons d'arrêt et les
  estimations de coût.

## Cibles de réponses et alias d'entrée

Utilisez ces champs principaux.

| Entrée        | Rôle                                           |
| ------------- | ---------------------------------------------- |
| `startUrls`   | URL mixtes de posts et de profils X            |
| `tweetIds`    | ID de post numériques                          |
| `usernames`   | Fils de réponses des profils                   |
| `startCursor` | Reprendre 1 cible depuis un curseur enregistré |

Le formulaire d'entrée montre seulement les contrôles canoniques. Les alias de
compatibilité fonctionnent toujours dans les entrées JSON, API, SDK,
d'automatisation et de tâches enregistrées. Si vous combinez champs canoniques
et alias, leur ordre de résolution habituel s'applique.

Ces alias acceptent les noms de champs courants d'autres scrapers :

- Alias d'URL : `urls`, `tweetUrls`, `postUrls`, `profileUrls`
- Alias d'ID : `conversationIds`, `postIds`, `ids`, `tweetId`, `id`
- Alias de nom d'utilisateur : `twitterHandles`, `screenname`
- Alias de limite globale : `maxResults`, `max_results`, `resultsLimit`,
  `maxReplies`
- Alias par cible : `maxRepliesPerTweet`, `maxCommentsPerPost`
- Alias de recherche : `useSearch`
- Alias de réponses imbriquées : `includeNestedReplies`,
  `includeRepliesOfReplies`
- Alias de post d'origine : `includeOriginalTweet`
- Alias de sortie : `outputVariant`, `includeRaw`

Des cibles mal formées ou non prises en charge ne font pas échouer l'Actor.
Quand il ne reste aucune cible valide, le run écrit un diagnostic avec la
correction.

## Stratégies de couverture

### Mode auto complet

Utilisez `collectionStrategy: "auto"` dans la plupart des cas. Il collecte
chaque réponse qu'il peut atteindre dans votre périmètre. Les contrôles de
périmètre, de profondeur, de tri et d'auteur s'appliquent avant vos limites. Il
inclut les réponses situées sous des cibles qui ne sont pas la racine. Quand X
masque une partie d'une discussion, le statut indique combien de réponses X
masque. Les autres valeurs de `collectionStrategy` ne changent jamais de mode.

Un chiffre de couverture dans les diagnostics ne prouve pas que X n'a plus de
réponses. Des limites, des données manquantes ou des erreurs peuvent laisser un
run incomplet.

### Réponses directes

Utilisez `collectionStrategy: "replies"` pour les réponses directes, dans
l'ordre de X. Ce mode accepte les curseurs enregistrés.

### Recherche de conversation

Utilisez `collectionStrategy: "conversationSearch"` pour couvrir largement la
conversation.

### Contexte complet de la discussion

Utilisez `collectionStrategy: "thread"` pour lire le contexte de la conversation
source. Réglez `includeOriginalPost: true` pour garder le post racine à la
profondeur 0.

## Contrôles des réponses directes et imbriquées

Utilisez `scope` pour choisir la forme du résultat.

| Valeur   | Résultat                                               |
| -------- | ------------------------------------------------------ |
| `direct` | Garder les réponses de profondeur 1                    |
| `nested` | Garder les réponses aux réponses, profondeur 2 ou plus |
| `all`    | Garder chaque réponse directe ou imbriquée disponible  |

Utilisez `maxDepth` pour limiter l'imbrication. Quand X omet un ancêtre de la
conversation, le lien vers le parent peut manquer. L'Actor garde la meilleure
profondeur disponible.

## Tri

Utilisez `sort` avec ces valeurs :

- `relevance` garde l'ordre source de X
- `latest` trie du plus récent au plus ancien
- `oldest` trie du plus ancien au plus récent
- `likes` trie par nombre de J'aime, du plus haut au plus bas

Les cibles de profil collectent le nombre demandé de résultats uniques et
filtrés, puis les trient. Les cibles de post gardent un tri global.

Les alias de compatibilité `sortBy` et `queryType` fonctionnent toujours.

## Filtres de réponses

Tous les filtres pris en charge passent avant l'écriture dans le dataset.

### Filtres de texte et d'entités

| Entrée           | Comportement                            |
| ---------------- | --------------------------------------- |
| `exactPhrase`    | Exiger une expression exacte            |
| `anyWords`       | Exiger au moins 1 mot ou expression     |
| `excludeWords`   | Retirer les mots ou expressions trouvés |
| `keywordInclude` | Alias fusionné avec `anyWords`          |
| `keywordExclude` | Alias fusionné avec `excludeWords`      |
| `hashtags`       | Exiger au moins 1 hashtag               |
| `cashtags`       | Exiger au moins 1 cashtag               |
| `mentioning`     | Exiger une @mention                     |

### Filtres d'auteur et de langue

| Entrée                  | Comportement                                         |
| ----------------------- | ---------------------------------------------------- |
| `fromUser`              | Garder un seul auteur de réponse                     |
| `toUser`                | Garder les réponses adressées à un nom d'utilisateur |
| `lang`                  | Garder un code de langue X                           |
| `verifiedOnly`          | Exiger un signal public de certification             |
| `blueVerifiedOnly`      | Exiger la certification X Premium                    |
| `excludeOriginalAuthor` | Retirer les auto-réponses de l'auteur source         |

### Filtres d'engagement

Utilisez `minLikes`, `minReplies`, `minRetweets`, `minQuotes`, `minViews` et
`minBookmarks`. L'alias `minFaves` correspond à `minLikes`.

### Filtres de médias et de temps

- Réglez `hasMediaOnly: true` pour les réponses avec des médias publics.
- Réglez `mediaType` sur `any`, `image`, `video`, `gif` ou `link`.
- Réglez `since` pour un horodatage de début inclus.
- Réglez `until` pour un horodatage de fin exclu.
- Utilisez `sinceTime` et `untilTime` comme alias de compatibilité.

## Champs de sortie

Les schémas du dataset et du run-report décrivent chaque champ renvoyé. Les
champs primitifs portent aussi des exemples pour les agents et les intégrations
générées.

Chaque ligne de réponse complète peut inclure ces champs principaux :

| Champ               | Description                                            |
| ------------------- | ------------------------------------------------------ |
| `id`                | ID de la réponse                                       |
| `text`              | Texte de la réponse                                    |
| `fullText`          | Texte long de la réponse                               |
| `createdAt`         | Horodatage de la réponse                               |
| `lang`              | Code de langue X                                       |
| `url`               | URL directe de la réponse                              |
| `conversationId`    | ID de la conversation X                                |
| `inReplyToId`       | ID du parent direct                                    |
| `inReplyToUserId`   | ID de l'auteur du parent                               |
| `inReplyToUsername` | Nom d'utilisateur du parent                            |
| `likeCount`         | J'aime                                                 |
| `replyCount`        | Réponses enfants                                       |
| `retweetCount`      | Reposts                                                |
| `quoteCount`        | Citations                                              |
| `viewCount`         | Vues                                                   |
| `bookmarkCount`     | Signets                                                |
| `author`            | Métadonnées publiques disponibles de l'auteur          |
| `media`             | Images, vidéos, GIF et variantes                       |
| `entities`          | Hashtags, cashtags, mentions, URL et horodatages vidéo |
| `quoted_tweet`      | Post cité, quand il est disponible                     |
| `retweeted_tweet`   | Post reposté, quand il est disponible                  |

Les lignes complètes gardent aussi les métadonnées de source disponibles :

- Les champs de type de post sont `type`, `isReply`, `isQuoteStatus`,
  `isNoteTweet`, `isLimitedReply` et `isTranslatable`.
- Les détails du texte sont `displayTextRange`, `noteTweet`, `article` et
  `card`.
- Les libellés et avis sont `contentDisclosure`, `communityNote`,
  `possiblySensitive`, `tombstone` et `exclusiveContent`.
- Les détails de conversation sont `conversationControl`, `limitedActions` et
  `unmentionedUserIds`.
- Les champs de contexte sont `source`, `place`, `communityId`,
  `reactionContext` et `postCta`.
- Les champs de modification et de disponibilité sont `edit`, `previousCounts`,
  `viewState` et `authorUnavailable`.

Les lignes plates gardent l'ascendance de la conversation, les détails de la
source, le type de résultat et la version du schéma. Consultez OpenAPI pour la
liste exacte des champs.

### Métadonnées de l'auteur

Les auteurs imbriqués suivent le contrat de profil public. Il couvre l'identité,
les compteurs, la certification, la disponibilité, les données professionnelles
et les biographies de profil.

La sortie plate ajoute `authorId`, `authorUsername`, `authorName`,
`authorFollowers`, `authorFollowing` et `authorVerified`.

### Métadonnées des médias

Les médias couvrent la disponibilité, les dimensions, les tags et les variantes
vidéo. Ils ont aussi les actions `watchNowUrl` et `visitSiteUrl`.

La sortie plate ajoute `mediaUrls`.

### Exemple de sortie

Une ligne de réponse abrégée ressemble à ceci :

```json
{
  "resultType": "reply",
  "id": "1881423000000000000",
  "url": "https://x.com/example/status/1881423000000000000",
  "text": "Thanks for sharing this update.",
  "createdAt": "2026-08-09T12:00:00.000Z",
  "lang": "en",
  "conversationId": "1881422000000000000",
  "rootTweetId": "1881422000000000000",
  "parentReplyId": "1881422000000000000",
  "depth": 1,
  "isDirectReply": true,
  "likeCount": 42,
  "replyCount": 3,
  "retweetCount": 5,
  "quoteCount": 2,
  "viewCount": 1000,
  "bookmarkCount": 7,
  "authorUsername": "example",
  "authorName": "Example User",
  "authorFollowers": 1000,
  "authorVerified": false,
  "mediaUrls": ["https://pbs.twimg.com/media/example.jpg"],
  "sourceTweetId": "1881422000000000000",
  "sourceTarget": "1881422000000000000"
}
```

Les valeurs sont des exemples. Les vrais runs renvoient des données en direct.

## Modes de sortie

### Compact

Réglez `outputMode: "compact"` pour un dataset plus léger. Il garde les champs
de texte, de conversation, d'auteur, d'engagement et de médias.

### Full

Réglez `outputMode: "full"` pour garder chaque champ public pris en charge.

### Raw

Réglez `outputMode: "raw"` pour ajouter un instantané nettoyé de la source sous
`raw`.

### Imbriqué ou plat

La disposition `flat` par défaut garde les objets imbriqués et ajoute des champs
d'auteur pour les tableaux. Réglez `outputPreset: "nested"` pour omettre ces
champs plats ajoutés.

### Nommage des champs

Réglez `fieldStyle` sur `source`, `camelCase` ou `snake_case`. L'Actor évite
d'écraser les clés source en conflit.

## Limites, facturation et reprise

`maxItems` limite les lignes livrées sur tout le run. `maxItemsPerTarget` limite
chaque post ou profil.

Un run peut lire de nombreuses cibles. Les plafonds, la déduplication,
l'attribution et la facturation restent exacts sur toutes les cibles.

L'Actor retire les lignes en double avant la sortie et la facturation. Réglez
`dedupeAcrossTargets: false` pour garder les lignes en double issues de cibles
différentes.

Après un run limité en pages, lisez `next-cursors` dans le key-value store par
défaut. Passez un curseur dans `startCursor` pour continuer cette cible.

### Timeout Apify

Le timeout Apify par défaut est `0`, donc les runs n'ont pas de limite de temps.
L'Actor continue jusqu'au plafond ou jusqu'à la fin des données éligibles. Vous
pouvez quand même régler un timeout Apify.
`completionReason: "deadline_reached"` signifie alors que cette limite approche.
L'Actor enregistre les réponses et le rapport, puis s'arrête proprement avant la
limite. Xquik facture une seule fois chaque réponse livrée. Vous pouvez
reprendre les cibles inachevées.

## Extraction incomplète

Un run interrompu écrit un diagnostic `partial` gratuit. Les résultats
disponibles restent intacts. Lisez `availableResults`, `failedTargets`,
`retryable` et `nextAction` avant de relancer. Une sortie réussie de l'Actor
confirme la livraison, pas une extraction complète.

Le statut nomme chaque cause d'arrêt anticipé. `stopCauses` liste chaque cause
avec ses propres `message`, `retryable` et `nextAction`. Les causes sont
`target_not_found`, `target_failed`, `page_limit`, `reply_reach` et
`deadline_reached`. `reply_reach` signifie que X n'a renvoyé qu'une partie d'une
discussion.

Un post ou un compte introuvable ne compte pas comme un échec. Le statut le
nomme, par exemple "X has no match for 1 target." Il n'entre dans `stopCauses`
que si une autre cause a arrêté le run. Le run est `retryable` dès qu'une cause
l'est.

## Diagnostics

Les lignes de données réussies utilisent `resultType: "reply"`. Les runs qui se
terminent sans données écrivent exactement 1 enregistrement gratuit dans
`diagnostics`. Cet enregistrement indique comment corriger le problème.

Le statut du run dit pourquoi il s'est arrêté. Il compte aussi les résultats
facturés et les cibles lues. Les runs qui rencontrent un problème écrivent
toujours `run-report`, y compris les sorties sans entrée ou avec une entrée
invalide. Un gros run l'écrit aussi. Un petit run sans problème ne l'écrit pas
et réduit l'usage Apify. Activez `alwaysSaveRunRecords` pour l'écrire à chaque
run.

Le schéma du rapport documente l'achèvement, la facturation, les échecs et les
curseurs enregistrés. Son champ `version` donne la version exacte de la source
publiée de l'Actor.

Le champ `status` utilise ces valeurs :

- `no-input`
- `invalid-input`
- `replies-incomplete`
- `zero-output`
- `aborted`
- `unexpected-error`

## Exemples d'API

Chaque exemple lance X Reply Scraper de Xquik et renvoie les éléments du
dataset. Remplacez `<APIFY_API_TOKEN>` par votre jeton d'API Apify.

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
actor=xquik~x-reply-scraper
curl "https://api.apify.com/v2/acts/$actor/run-sync-get-dataset-items" \
  -X POST \
  -H "Authorization: Bearer <APIFY_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"tweetIds":["2082577277246972300"],"maxItems":100}'
```

## Automatisation et intégrations

Lancez X Reply Scraper de Xquik via les planifications Apify, des webhooks ou
des clients API. Connectez-le à Make, Zapier, n8n, Google Sheets ou un stockage
cloud. Les agents peuvent l'appeler via le
[serveur Apify MCP](https://docs.apify.com/platform/integrations/mcp).

Les workflows d'agents éligibles peuvent aussi utiliser
[x402](https://docs.apify.com/integrations/x402) ou
[Skyfire](https://docs.apify.com/integrations/skyfire).

Xquik propose aussi 47 outils de tableau de bord, 129 opérations REST, des
webhooks signés et un serveur MCP.

### Utilisez toujours la dernière build

Choisissez `latest` pour chaque run afin d'obtenir tous les correctifs publiés.

Si vous ne précisez aucune build, Apify utilise la build `latest` par défaut de
cet Actor. Les runs de la Console et les exemples d'API standard héritent de ce
défaut.

Les tâches enregistrées peuvent remplacer ce défaut. Les planifications et les
intégrations de tâches reprennent ce choix. Réglez chaque remplacement sur
`latest`.

Apify ne redirige pas les numéros de build exacts vers `latest`. Remplacez les
numéros figés par `latest`. Utilisez une build exacte seulement pour un retour
arrière temporaire.

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

## FAQ

### Ai-je besoin d'une clé API X ou d'une connexion ?

Non. Vous n'avez besoin ni de clé API X, ni de connexion, ni d'identifiants. X
Reply Scraper de Xquik ne demande jamais votre mot de passe X, vos cookies ou
vos jetons.

### Est-il légal de scraper des réponses X ?

X Reply Scraper de Xquik collecte des réponses publiques et ne contourne pas les
comptes protégés. Collectez seulement des données publiques. Respectez les lois
applicables et les règles des plateformes.

Les datasets de réponses peuvent contenir des données personnelles. Choisissez
une finalité licite. Limitez la durée de conservation. Protégez vos exports.
Respectez les demandes de suppression et d'accès quand la loi l'exige. En cas de
doute, demandez conseil à un juriste qualifié.

### Pourquoi mon run a-t-il renvoyé moins de réponses que le post n'en affiche ?

Quand X masque une partie d'une discussion, le statut indique combien de
réponses X masque. `reply_reach` dans `stopCauses` signifie que X n'a renvoyé
qu'une partie d'une discussion. Les filtres, la déduplication, `scope`,
`maxDepth` et vos limites réduisent aussi le nombre.

### Puis-je utiliser l'API, les planifications et les intégrations ?

Oui. L'[onglet API](https://apify.com/xquik/x-reply-scraper/api) montre des
exemples en Python, JavaScript et cURL. Utilisez les
[planifications](https://docs.apify.com/platform/schedules) Apify pour lancer X
Reply Scraper de Xquik selon un cron. Il se connecte aussi à Make, Zapier, n8n
et Google Sheets.

### Où trouver de l'aide ?

Ouvrez une issue sur la page de l'Actor ou écrivez à
[support@xquik.com](mailto:support@xquik.com) avec l'ID du run.

### Puis-je obtenir une solution sur mesure ?

Oui. Rendez-vous sur [xquik.com](https://xquik.com) ou lisez la
[documentation de l'API](https://docs.xquik.com/introduction). Xquik propose un
tableau de bord, une API REST, un serveur MCP et des webhooks.
