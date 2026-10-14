[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · **Français** · [Italiano](README.it.md)

[![Framer connecte Xquik MCP aux agents de codage](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Découvrez comment Framer utilise les scrapers Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
avec Claude Code, Codex, Cursor & d'autres outils, à partir de 6:07.

Xquik est le service de scraping X (Twitter) le plus rapide et le moins cher au
monde. Ses données X sont les plus complètes. X Reply Scraper de Xquik collecte
les réponses, les commentaires & des conversations entières. La plupart des
autres Actors Apify facturent avant de filtrer ou de dédupliquer. Xquik facture
seulement les **résultats livrés, uniques et conformes à vos filtres**.

Scrapez les réponses & commentaires Twitter pour **$0.00015 par ligne livrée**
sur chaque plan Apify, & lisez-les sans compte X. Collez des URL de posts, des
ID de post, des URL de profil ou des noms d'utilisateur. Exportez les réponses,
les conversations, les auteurs, l'engagement, les entités & les URL des médias.
Apify facture votre usage de la plateforme à part. Vous n'avez besoin d'aucune
connexion X. Les filtres passent avant l'écriture dans le dataset, donc vous
payez seulement les lignes livrées.

> Xquik est un service tiers indépendant. Non affilié à X Corp. "Twitter" et "X"
> sont des marques déposées de X Corp.

## Que fait X Reply Scraper ?

X Reply Scraper de Xquik collecte les réponses publiques & les conversations de
commentaires. Il traite les posts seuls, les listes d'URL en masse, les ID de
post & les fils de réponses des comptes.

### Fonctionnalités clés

- Le mode auto continue la collecte quand les résultats directs sont incomplets.
- `collectionStrategy` règle la façon dont l'Actor collecte les réponses.
- Les entrées en masse acceptent des URL de posts, des ID de post, des profils &
  des noms d'utilisateur.
- Les filtres & la suppression des doublons passent avant la facturation.
- La sortie propose 4 modes de tri, 3 niveaux de détail & 3 styles de champs.
- Chaque réponse garde sa cible source, les ID de ses parents, l'ID racine & sa
  profondeur.
- Les curseurs de reprise prennent en charge le rattrapage d'historique & les
  runs planifiés.
- Les runs qui demandent votre attention écrivent 1 enregistrement gratuit dans
  `diagnostics`. Un run qui lit chaque cible & ne trouve aucune réponse n'en
  écrit aucun. Son statut explique pourquoi.
- Les logs du run montrent la durée par page & par cible dans `fetchDurationMs`,
  `processingDurationMs`, `pushDurationMs`, `statusDurationMs`,
  `fullPageDurationMs` & `fullTargetDurationMs`.
- Les runs gardent les réponses livrées & la progression quand Apify les
  redémarre.

### Cas d'usage

- Mesurez le sentiment & les retours clients sous les posts de marques & de
  produits.
- Classez les réponses & les commentaires qui ont le plus de J'aime sous un post
  viral.
- Trouvez des prospects qui posent des questions ou expriment un besoin dans des
  réponses publiques.
- Examinez les réponses pour la modération, le spam & les abus.
- Reconstituez des conversations entières pour la recherche & les datasets
  d'entraînement d'IA.
- Suivez dans le temps la façon dont un compte répond à ses clients.

### Quelles données X Reply Scraper peut-il extraire ?

Les schémas du dataset & du run-report décrivent chaque champ renvoyé. Les
champs texte, numériques & booléens portent aussi des exemples pour les agents &
les intégrations générées.

Chaque ligne de réponse complète peut inclure ces champs principaux.

| Champ               | Description                                           |
| ------------------- | ----------------------------------------------------- |
| `id`                | ID de la réponse                                      |
| `text`              | Texte de la réponse                                   |
| `fullText`          | Texte long de la réponse                              |
| `createdAt`         | Horodatage de la réponse                              |
| `lang`              | Code de langue X                                      |
| `url`               | URL directe de la réponse                             |
| `conversationId`    | ID de la conversation X                               |
| `inReplyToId`       | ID du parent direct                                   |
| `inReplyToUserId`   | ID de l'auteur du parent                              |
| `inReplyToUsername` | Nom d'utilisateur du parent                           |
| `likeCount`         | J'aime                                                |
| `replyCount`        | Réponses enfants                                      |
| `retweetCount`      | Reposts                                               |
| `quoteCount`        | Citations                                             |
| `viewCount`         | Vues                                                  |
| `bookmarkCount`     | Signets                                               |
| `author`            | Métadonnées publiques disponibles de l'auteur         |
| `media`             | Images, vidéos, GIF et variantes                      |
| `entities`          | Hashtags, cashtags, mentions, URL & horodatages vidéo |
| `quoted_tweet`      | Post cité, quand il est disponible                    |
| `retweeted_tweet`   | Post reposté, quand il est disponible                 |

Les lignes complètes gardent aussi les métadonnées de source disponibles.

- Les champs de type de post sont `type`, `isReply`, `isQuoteStatus`,
  `isNoteTweet`, `isLimitedReply` & `isTranslatable`.
- Les détails du texte sont `displayTextRange`, `noteTweet`, `article`, `card` &
  `cashtagAttachments`.
- Les libellés & avis sont `contentDisclosure`, `communityNote`,
  `possiblySensitive`, `tombstone` & `exclusiveContent`.
- Les détails de conversation sont `conversationControl`, `limitedActions`,
  `subscriberBadge` & `unmentionedUserIds`.
- Les champs de contexte sont `source`, `place`, `communityId`, `communityName`,
  `reactionContext` & `postCta`.
- Les champs de modification & de disponibilité sont `edit`, `previousCounts`,
  `viewState` & `authorUnavailable`.

Les lignes plates gardent l'ascendance de la conversation, les détails de la
source, le type de résultat & la version du schéma. Consultez OpenAPI pour la
liste exacte des champs.

## Comment utiliser X Reply Scraper pour scraper des réponses ?

Vous débutez sur Apify ?
[Créez d'abord un compte gratuit](https://console.apify.com/sign-up?fpr=xquik).
Le plan gratuit ne demande aucune carte bancaire & donne $5 à dépenser chaque
mois. À $0.00015 par ligne, $5 couvrent jusqu'à 33 000 lignes, hors usage de la
plateforme. Revenez ensuite ici & cliquez sur Try for free.

1. Collez des URL de posts, des ID de post, des URL de profil ou des noms
   d'utilisateur.
2. Réglez `maxItems`, `scope` & les filtres utiles à votre besoin.
3. Lancez X Reply Scraper de Xquik & ouvrez le dataset.

Le formulaire prérempli cible une conversation publique vérifiée. Il renvoie
jusqu'à 1 000 lignes complètes et plates. Le mode auto cherche dans toute la
conversation par défaut. La déduplication & l'attribution de la source restent
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

## Exemples de tâches

Choisissez parmi 50 tâches publiques. Chacune a une entrée limitée & une vue de
dataset adaptée. Modifiez n'importe quelle tâche avant de la lancer.

- [Scraper les réponses aux posts X & les commentaires Twitter](https://apify.com/xquik/x-reply-scraper/examples/scrape-post-replies)
- [Scraper des réponses Twitter en masse](https://apify.com/xquik/x-reply-scraper/examples/scrape-bulk-post-replies)
- [Reconstituer une conversation de réponses Twitter](https://apify.com/xquik/x-reply-scraper/examples/rebuild-full-conversation)
- [Classer les réponses Twitter par J'aime](https://apify.com/xquik/x-reply-scraper/examples/rank-most-liked-replies)
- [Scraper les dernières réponses à un post](https://apify.com/xquik/x-reply-scraper/examples/collect-latest-replies)
- [Retirer le spam des réponses Twitter](https://apify.com/xquik/x-reply-scraper/examples/exclude-spam-keywords)
- [Scraper les réponses Twitter en anglais](https://apify.com/xquik/x-reply-scraper/examples/collect-english-replies)
- [Scraper les réponses Twitter de comptes certifiés](https://apify.com/xquik/x-reply-scraper/examples/collect-verified-replies)
- [Scraper les réponses Twitter avec médias](https://apify.com/xquik/x-reply-scraper/examples/collect-media-replies)
- [Scraper le fil de réponses Twitter d'un compte](https://apify.com/xquik/x-reply-scraper/examples/scrape-profile-replies)
- [Collecter des réponses Twitter pour les agents IA](https://apify.com/xquik/x-reply-scraper/examples/collect-replies-for-ai-agents)
- [Créer un dataset RAG de réponses X](https://apify.com/xquik/x-reply-scraper/examples/build-x-reply-rag-dataset)
- [Archiver des réponses Twitter pour les LLM](https://apify.com/xquik/x-reply-scraper/examples/archive-replies-for-llm-processing)
- [Extraire des prospects des réponses X pour un CRM](https://apify.com/xquik/x-reply-scraper/examples/extract-reply-leads-for-crm)

## Combien coûte le scraping de réponses X ?

X Reply Scraper de Xquik coûte $0.00015 par ligne livrée sur chaque plan Apify.
Apify facture l'usage de la plateforme à part.

Pour plus de volume,
[choisissez un plan Apify](https://apify.com/pricing?fpr=xquik) avec plus
d'usage prépayé.

Xquik facture une fois par ligne de données livrée. Les réponses que vos filtres
ou la déduplication retirent ne coûtent rien. Les enregistrements de diagnostic
dans `diagnostics` sont gratuits. Xquik ne facture ni le démarrage, ni les URL,
ni les requêtes, ni la pagination, ni les filtres.

## Runs vides, partiels & arrêtés

X Reply Scraper de Xquik explique gratuitement les runs vides, partiels &
arrêtés. Le statut du run dit pourquoi il s'est arrêté. Il compte aussi les
résultats facturés & les cibles lues. Un run qui lit chaque cible & ne trouve
aucune réponse n'écrit aucun enregistrement. Son statut explique pourquoi & ce
qu'il faut changer.

### Extraction incomplète

Un run interrompu écrit un diagnostic `partial` gratuit. Les résultats
disponibles restent intacts. Lisez `availableResults`, `failedTargets`,
`retryable` & `nextAction` avant de relancer. Une sortie réussie de l'Actor
confirme la livraison, pas une extraction complète.

Le statut nomme chaque cause d'arrêt anticipé. `stopCauses` liste chaque cause
avec ses propres `message`, `retryable` & `nextAction`. Les causes sont
`target_not_found`, `target_failed`, `page_limit`, `reply_reach` &
`deadline_reached`. `reply_reach` signifie que X n'a renvoyé qu'une partie d'une
discussion.

Un post ou un compte introuvable ne compte pas comme un échec. Le statut le
nomme, par exemple "X has no match for 1 target." Il n'entre dans `stopCauses`
que si une autre cause a arrêté le run. Le run est `retryable` dès qu'une cause
l'est.

### Diagnostics

Les lignes de données réussies utilisent `resultType: "reply"`. Un run qui
demande votre attention écrit exactement 1 enregistrement gratuit dans
`diagnostics`. C'est le cas d'une entrée invalide, d'une cible ignorée ou d'un
arrêt anticipé. L'enregistrement indique comment corriger le problème. Un run
qui lit chaque cible & ne trouve aucune réponse n'en écrit aucun. Son statut
explique pourquoi.

Le statut du run dit pourquoi il s'est arrêté. Il compte aussi les résultats
facturés & les cibles lues. Les runs qui rencontrent un problème écrivent
toujours `run-report`, y compris les sorties sans entrée ou avec une entrée
invalide. Un gros run l'écrit aussi. Un petit run sans problème ne l'écrit pas &
réduit l'usage Apify. Activez `alwaysSaveRunRecords` pour l'écrire à chaque run.

Le schéma du rapport documente l'achèvement, la facturation, les échecs & les
curseurs enregistrés. Son champ `version` donne la version exacte de la source
publiée de l'Actor.

Le champ `status` utilise ces valeurs.

- `no-input`
- `invalid-input`
- `replies-incomplete`
- `zero-output`
- `aborted`
- `unexpected-error`

## Entrée

L'onglet Input liste toutes les options. Indiquez au moins 1 URL de post, ID de
post, URL de profil ou nom d'utilisateur. Tous les autres champs sont
facultatifs.

### Cibles de réponses & alias d'entrée

Utilisez ces champs principaux.

| Entrée        | Rôle                                           |
| ------------- | ---------------------------------------------- |
| `startUrls`   | URL mixtes de posts et de profils X            |
| `tweetIds`    | ID de post numériques                          |
| `usernames`   | Fils de réponses des profils                   |
| `startCursor` | Reprendre 1 cible depuis un curseur enregistré |

Le formulaire d'entrée montre seulement les contrôles canoniques. Les alias de
compatibilité fonctionnent toujours dans les entrées JSON, API, SDK,
d'automatisation & de tâches enregistrées. Si vous combinez des champs
canoniques & des alias, leur ordre de résolution habituel s'applique.

Ces alias acceptent les noms de champs courants d'autres scrapers.

- Les alias d'URL sont `urls`, `tweetUrls`, `postUrls`, `profileUrls` &
  `twitterUrl` en une seule chaîne.
- Les alias d'ID sont `conversationIds`, `postIds`, `ids`, `tweetId`, `id`.
- Les alias de nom d'utilisateur sont `twitterHandles`, `screenname`.
- Les alias de limite globale sont `maxResults`, `max_results`, `resultsLimit`,
  `maxReplies`.
- Les alias par cible sont `maxRepliesPerTweet`, `maxCommentsPerPost`,
  `resultsPerCategory`.
- L'alias de recherche est `useSearch`.
- Les alias de réponses imbriquées sont `includeNestedReplies`,
  `includeRepliesOfReplies`.
- L'alias de profondeur est `depth` avec `1`, `2` ou `3` pour `maxDepth`. `full`
  ne met aucune limite.
- L'alias de portée est `onlyDirectReplies` pour `scope: "direct"`.
- Les alias de post d'origine sont `includeOriginalTweet`, `includeSourceTweet`.
  Avec `includeSourceTweet`, `resultsPerCategory` plafonne les réponses & le
  post compte pour 1 ligne de plus.
- L'alias d'auteur est `excludeOpSelfReplies` pour `excludeOriginalAuthor`.
- Les alias de tri sont `sortBy` & `queryType` pour `sort`. `top`, `newest` &
  `mostLiked` se lisent comme `relevance`, `latest` & `likes`.
- Les alias de sortie sont `outputVariant`, `includeRaw`.

`category` réglé sur `replies` ne change rien. Une catégorie qui relève d'un
autre Actor, comme `retweets` ou `info`, arrête le run. Il ne lit & ne facture
rien. Le message nomme l'Actor à utiliser. Si vous réglez l'un de ces alias &
son champ canonique, la valeur canonique l'emporte. Le log du run nomme l'alias
écarté.

Des cibles mal formées ou non prises en charge ne font pas échouer l'Actor.
Quand il ne reste aucune cible valide, le run écrit un diagnostic avec la
correction.

### Stratégies de couverture

Choisissez comment l'Actor collecte les réponses. Le mode auto convient à la
plupart des cas.

#### Mode auto complet

Utilisez `collectionStrategy: "auto"` dans la plupart des cas. Il collecte
chaque réponse qu'il peut atteindre dans votre périmètre. Les contrôles de
périmètre, de profondeur, de tri & d'auteur s'appliquent avant vos limites. Il
inclut les réponses situées sous des cibles qui ne sont pas la racine. Quand X
masque une partie d'une discussion, le statut indique combien de réponses X
masque. Les autres valeurs de `collectionStrategy` ne changent jamais de mode.

Un chiffre de couverture dans les diagnostics ne prouve pas que X n'a plus de
réponses. Des limites, des données manquantes ou des erreurs peuvent laisser un
run incomplet.

#### Réponses directes

Utilisez `collectionStrategy: "replies"` pour les réponses directes, dans
l'ordre de X. Ce mode accepte les curseurs enregistrés.

#### Recherche de conversation

Utilisez `collectionStrategy: "conversationSearch"` pour couvrir largement la
conversation.

#### Contexte complet de la discussion

Utilisez `collectionStrategy: "thread"` pour lire le contexte de la conversation
source. Réglez `includeOriginalPost: true` pour garder le post racine à la
profondeur 0.

#### Réponses masquées

La stratégie `auto` par défaut ajoute les réponses que l'auteur du post a
masquées. Chacune devient une ligne avec `resultType: "hiddenReply"`, au prix
habituel d'une ligne, & compte dans `maxItems`. Le run les lit seulement quand
le post compte plus de réponses que X n'en affiche. Un post sans réponses
masquées ne coûte donc rien de plus. Réglez `includeHiddenReplies: false` pour
les exclure.

Utilisez `collectionStrategy: "hiddenReplies"` pour obtenir seulement les
réponses masquées. X les liste de la plus ancienne à la plus récente, avec les
réponses qui leur sont adressées. Un post sans réponses masquées ne renvoie
aucune ligne.

### Contrôles des réponses directes & imbriquées

Utilisez `scope` pour choisir la forme du résultat.

| Valeur   | Résultat                                                      |
| -------- | ------------------------------------------------------------- |
| `direct` | Garder les réponses de profondeur 1                           |
| `nested` | Garder les réponses aux réponses, à la profondeur 2 ou plus   |
| `all`    | Garder toutes les réponses directes et imbriquées disponibles |

Utilisez `maxDepth` pour limiter l'imbrication. Quand X omet un ancêtre de la
conversation, le lien vers le parent peut manquer. L'Actor garde la meilleure
profondeur disponible.

### Tri

Utilisez `sort` avec ces valeurs.

- `relevance` garde l'ordre source de X
- `latest` trie du plus récent au plus ancien
- `oldest` trie du plus ancien au plus récent
- `likes` trie par nombre de J'aime, du plus élevé au plus bas

La recherche X sous-estime les J'aime de certaines réponses anciennes, donc les
runs `likes` peuvent les manquer.

Les cibles de profil collectent le nombre demandé de résultats uniques et
filtrés, puis les trient. Les cibles de post gardent un tri global.

Les alias de compatibilité `sortBy` & `queryType` fonctionnent toujours.

### Filtres de réponses

Tous les filtres pris en charge passent avant l'écriture dans le dataset.

#### Filtres de texte & d'entités

| Entrée           | Comportement                            |
| ---------------- | --------------------------------------- |
| `exactPhrase`    | Exiger 1 expression exacte              |
| `anyWords`       | Exiger au moins 1 mot ou 1 expression   |
| `excludeWords`   | Retirer les mots ou expressions trouvés |
| `keywordInclude` | Alias fusionné avec `anyWords`          |
| `keywordExclude` | Alias fusionné avec `excludeWords`      |
| `hashtags`       | Exiger au moins 1 hashtag               |
| `cashtags`       | Exiger au moins 1 cashtag               |
| `mentioning`     | Exiger une @mention                     |

#### Filtres d'auteur & de langue

| Entrée                  | Comportement                                              |
| ----------------------- | --------------------------------------------------------- |
| `fromUser`              | Garder 1 seul auteur de réponse                           |
| `toUser`                | Garder les réponses adressées à 1 nom d'utilisateur       |
| `lang`                  | Garder 1 code de langue X                                 |
| `verifiedOnly`          | Exiger un signal public de certification, quel qu'il soit |
| `blueVerifiedOnly`      | Exiger la certification X Premium                         |
| `excludeOriginalAuthor` | Retirer les auto-réponses de l'auteur source              |

#### Filtres d'engagement

Utilisez `minLikes`, `minReplies`, `minRetweets`, `minQuotes`, `minViews` &
`minBookmarks`. L'alias `minFaves` correspond à `minLikes`.

#### Filtres de médias & de temps

- Réglez `hasMediaOnly: true` pour les réponses avec des médias publics.
- Réglez `mediaType` sur `any`, `image`, `video`, `gif` ou `link`.
- Réglez `mediaType` sur `none` pour les réponses texte sans médias ni liens.
- Réglez `since` pour un horodatage de début inclus.
- Réglez `until` pour un horodatage de fin exclu.
- Utilisez `sinceTime` & `untilTime` comme alias de compatibilité.

## Sortie

Chaque ligne de réponse est un objet JSON. Les schémas du dataset & du
run-report décrivent chaque champ, donc les agents IA peuvent lire les lignes
sans deviner. Exportez le dataset en JSON, CSV, Excel ou HTML.

### Métadonnées de l'auteur

Les auteurs imbriqués suivent le contrat de profil public. Il couvre l'identité,
les compteurs, la certification, la disponibilité, les données professionnelles
& les biographies de profil.

La sortie plate ajoute `authorId`, `authorUsername`, `authorName`,
`authorFollowers`, `authorFollowing` & `authorVerified`.

### Métadonnées des médias

Les médias couvrent la disponibilité, les dimensions, les tags & les variantes
vidéo. Ils ont aussi les actions `watchNowUrl` & `visitSiteUrl`.

La sortie plate ajoute `mediaUrls`.

### Exemple de sortie

Une ligne de réponse abrégée ressemble à ceci.

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

### Modes de sortie

Choisissez la largeur de chaque ligne du dataset.

#### Compact

Réglez `outputMode: "compact"` pour un dataset plus étroit. Il garde les champs
de texte, de conversation, d'auteur, d'engagement & de médias.

#### Full

Réglez `outputMode: "full"` pour garder chaque champ public pris en charge.

#### Rich

Réglez `outputMode: "rich"` pour obtenir le plus de données par ligne. Les
lignes riches gardent toutes les colonnes du mode full & ajoutent à la fin
`hasCommunityNotes`, `quotedTweetPermalink`, `unavailableAuthorId` & le
`sourceUser` des médias.

#### Raw

Réglez `outputMode: "raw"` pour ajouter un instantané nettoyé de la source sous
`raw`.

#### Imbriqué ou plat

La disposition `flat` par défaut garde les objets imbriqués & ajoute des champs
d'auteur pour les tableaux. Réglez `outputPreset: "nested"` pour omettre ces
champs plats ajoutés.

#### Nommage des champs

Réglez `fieldStyle` sur `source`, `camelCase` ou `snake_case`. L'Actor évite
d'écraser les clés source en conflit.

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

- Utilisez un point pour un champ placé dans un objet, comme `author.id`. La
  casse & les tirets bas ne comptent pas.
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

### Limites, facturation & reprise

`maxItems` limite les lignes livrées sur tout le run. `maxItemsPerTarget` limite
chaque post ou profil.

Un run peut lire de nombreuses cibles. Les plafonds, la déduplication,
l'attribution & la facturation restent exacts sur toutes ces cibles.

L'Actor retire les lignes en double avant la sortie & la facturation. Réglez
`dedupeAcrossTargets: false` pour garder les lignes en double issues de cibles
différentes.

Après un run limité en pages, lisez `next-cursors` dans le key-value store par
défaut. Passez 1 curseur dans `startCursor` pour continuer cette cible.

#### Timeout Apify

Le timeout Apify par défaut est `0`, donc les runs n'ont pas de limite de temps.
L'Actor continue jusqu'à atteindre le plafond ou épuiser les données éligibles.
Vous pouvez quand même régler un timeout Apify fini.
`completionReason: "deadline_reached"` signifie alors que cette limite approche.
L'Actor enregistre les réponses & le rapport, puis s'arrête proprement avant la
limite. Chaque réponse livrée est facturée une seule fois. Vous pouvez reprendre
les cibles inachevées.

### Exemples d'API

Chaque exemple lance X Reply Scraper de Xquik & renvoie les éléments du dataset.
Remplacez `<APIFY_API_TOKEN>` par votre jeton d'API Apify.

#### JavaScript

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

#### Python

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

#### cURL

```bash
actor=xquik~x-reply-scraper
curl "https://api.apify.com/v2/acts/$actor/run-sync-get-dataset-items" \
  -X POST \
  -H "Authorization: Bearer <APIFY_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"tweetIds":["2082577277246972300"],"maxItems":100}'
```

### Automatisation & intégrations

Lancez X Reply Scraper de Xquik via les planifications Apify, des webhooks ou
des clients API. Connectez-le à Make, Zapier, n8n, Google Sheets ou un stockage
cloud. Les agents peuvent l'appeler via le
[serveur Apify MCP](https://docs.apify.com/platform/integrations/mcp).

Les workflows d'agents éligibles peuvent aussi utiliser
[x402](https://docs.apify.com/integrations/x402) ou
[Skyfire](https://docs.apify.com/integrations/skyfire).

Xquik propose aussi 53 outils de tableau de bord, une API REST, des webhooks
signés & un serveur MCP.

### Prêt pour les agents IA & MCP

Lancez X Reply Scraper de Xquik via Apify MCP, des clients API, x402 ou Skyfire.

- Des permissions limitées protègent les autres données de votre compte Apify.
- La facturation pay-per-event lie le coût aux résultats livrés.
- Le mode Standby reste désactivé pour rester compatible avec les paiements
  agentiques.
- Des schémas typés décrivent les réponses, les rapports de run & les curseurs
  de reprise.
- Des valeurs par défaut bornées évitent qu'un agent lance par accident un run
  sans limite.
- Les modes stables `camelCase` & `snake_case` simplifient l'enchaînement
  d'outils.
- Les lignes de diagnostic incluent un statut, un message & une action de
  reprise.
- Les rapports de run incluent les résultats exacts, les raisons d'arrêt & les
  estimations de frais.

### Utilisez toujours la dernière build

Choisissez `latest` pour chaque run afin d'obtenir tous les correctifs publiés.

Si vous ne précisez aucune build, Apify utilise la build `latest` par défaut de
cet Actor. Les runs de la Console & les exemples d'API standard héritent de ce
défaut.

Les tâches enregistrées peuvent remplacer ce défaut de l'Actor. Les
planifications & les intégrations de tâches reprennent ce choix. Réglez chaque
remplacement sur `latest`.

Apify ne redirige pas les numéros de build exacts vers `latest`. Remplacez les
numéros figés par `latest`. Utilisez une build exacte seulement pour un retour
arrière temporaire.

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

### Comment scraper les commentaires d'un post ?

Collez l'URL du post dans `startUrls` & cliquez sur Start. X appelle les
commentaires des réponses, donc chaque commentaire correspond à 1 ligne de
réponse.

### Puis-je scraper les réponses de nombreux posts à la fois ?

Oui. Collez de nombreuses URL de posts ou ID de post dans 1 run. Chaque réponse
garde le post source dans `sourceTarget`.

### Inclut-il les réponses imbriquées ?

Oui. Le `scope` par défaut collecte les réponses directes & imbriquées. Réglez
`scope` sur `direct` pour les seules réponses au post. `maxDepth` limite la
profondeur d'un run.

### Récupère-t-il les réponses que l'auteur a masquées ?

Oui. La stratégie `auto` par défaut les ajoute sous forme de lignes
`hiddenReply`. Réglez `includeHiddenReplies: false` pour les ignorer.

### Puis-je trier les réponses par J'aime ou par date ?

Oui. Réglez `sort` pour classer les réponses par J'aime, ou pour lister d'abord
les plus récentes ou les plus anciennes.

### Puis-je exporter les réponses en CSV ou Excel ?

Oui. Exportez le dataset en CSV, Excel, JSON ou HTML. La sortie plate garde 1
réponse par ligne, avec les champs d'auteur à côté.

### Puis-je scraper les réponses d'un compte plutôt que celles d'un post ?

Oui. Collez une URL de profil ou un nom d'utilisateur. Le run lit le fil de
réponses de ce compte.

### Ai-je besoin d'une clé API X ou d'une connexion ?

Non. Vous n'avez besoin d'aucune clé API X, d'aucune connexion ni d'aucun
identifiant. X Reply Scraper de Xquik ne demande jamais votre mot de passe X,
vos cookies ou vos jetons.

### Est-il légal de scraper des réponses X ?

X Reply Scraper de Xquik collecte des réponses publiques & ne contourne pas les
comptes protégés. Collectez seulement des données publiques. Respectez les lois
applicables & les règles de la plateforme.

Les datasets de réponses peuvent contenir des données personnelles. Choisissez
une finalité licite. Limitez la durée de conservation. Protégez les exports.
Respectez les demandes de suppression & d'accès quand la loi l'exige. En cas de
doute, demandez conseil à un juriste qualifié.

### Pourquoi mon run a-t-il renvoyé moins de réponses que le post n'en affiche ?

Quand X masque une partie d'une discussion, le statut indique combien de
réponses X masque. `reply_reach` dans `stopCauses` signifie que X n'a renvoyé
qu'une partie d'une discussion. Les filtres, la déduplication, `scope`,
`maxDepth` & vos limites réduisent aussi ce nombre.

### Puis-je utiliser l'API, les planifications & les intégrations ?

Oui. L'[onglet API](https://apify.com/xquik/x-reply-scraper/api) montre des
exemples en Python, JavaScript & cURL. Utilisez les
[planifications](https://docs.apify.com/platform/schedules) Apify pour lancer X
Reply Scraper de Xquik selon un cron. Il se connecte aussi à Make, Zapier, n8n &
Google Sheets.

### Où trouver de l'aide ?

Ouvrez une issue dans
l'[onglet Issues](https://apify.com/xquik/x-reply-scraper/issues) avec l'ID du
run.

### Puis-je obtenir une solution sur mesure ?

Oui. Décrivez votre besoin dans
l'[onglet Issues](https://apify.com/xquik/x-reply-scraper/issues). Xquik propose
aussi un tableau de bord, une API REST, un serveur MCP & des webhooks. Trouvez
le site web de Xquik sur son [profil Apify](https://apify.com/xquik).
