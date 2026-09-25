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
au monde, avec les données X les plus complètes. X Tweet Scraper collecte
les tweets, réponses, profils, lists et recherches avec plus de 50 filtres.
Tous les autres Actors Apify facturent avant de filtrer ou de dédupliquer.
Xquik ne facture que les résultats livrés, uniques et conformes aux filtres.

Scrapez des tweets X (Twitter) publics pour **à partir de $0.00015 par
résultat livré sur chaque plan Apify**. Apify facture séparément l'usage de
sa plateforme. Aucune connexion X, ni frais de démarrage, ni frais de
requête. Construit par [Xquik](https://xquik.com).

> Xquik est un service tiers indépendant. Non affilié à X Corp.
> « Twitter » et « X » sont des marques déposées de X Corp.

## Que fait X Tweet Scraper ?

X Tweet Scraper renvoie des tweets, des métriques d'engagement, des profils
d'auteur publics et des médias. Il accepte des URL, des handles, des ID de
List, des ID de Tweet et des requêtes de recherche avec plus de 50 filtres.

### Comportement de base

- Les filtres et la suppression des doublons s'exécutent avant la
  facturation.
- Une entrée prend en charge les lookups, les fils, les Lists, la
  recherche et les modes d'engagement.
- Les entrées d'ID de Tweet n'ont pas de plafond de nombre fixe. Les
  paramètres de dépense et de délai Apify s'appliquent.
- Les journaux du run affichent la durée de chaque page dans `fetchDurationMs`,
  `processingDurationMs`, `pushDurationMs`, `statusDurationMs` et
  `fullPageDurationMs`.
- Si Apify redémarre un run, les lignes livrées et la progression sont
  conservées.

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
les numéros épinglés par `latest`. N'utilisez une build exacte que pour un
retour en arrière temporaire ou de la reproductibilité.

Lisez la documentation Apify sur les
[tags de build](https://docs.apify.com/platform/actors/development/builds-and-runs/builds),
les [options de run](https://docs.apify.com/platform/actors/running/runs-and-builds)
et la [documentation des tâches](https://docs.apify.com/platform/actors/running/tasks).

## Exemples de tâches

Choisissez parmi 50 tâches publiques. Chacune a une entrée bornée et une
vue de dataset correspondante. Chaque tâche démarre avec une recherche ou
une cible réelle. Modifiez-la avant de l'exécuter.

- [Fetch fresh X posts for AI agents](https://apify.com/xquik/x-tweet-scraper/examples/search-x-posts-for-ai-agents)
- [Build an X dataset for RAG](https://apify.com/xquik/x-tweet-scraper/examples/build-x-rag-dataset)
- [Extract an X article for RAG](https://apify.com/xquik/x-tweet-scraper/examples/extract-x-article-for-rag)
- [Monitor AI search visibility on X](https://apify.com/xquik/x-tweet-scraper/examples/monitor-ai-search-visibility-on-x)
- [Track AI SEO and generative engine optimization](https://apify.com/xquik/x-tweet-scraper/examples/track-generative-engine-optimization-talk)
- [Discover AI agent tools on X](https://apify.com/xquik/x-tweet-scraper/examples/discover-ai-agent-tools-on-x)
- [Collect AI product feedback](https://apify.com/xquik/x-tweet-scraper/examples/collect-ai-product-feedback)
- [Monitor brand mentions on X](https://apify.com/xquik/x-tweet-scraper/examples/monitor-brand-mentions-on-x)
- [Export Twitter data to CSV](https://apify.com/xquik/x-tweet-scraper/examples/export-twitter-data-to-csv)
- [Collect replies to an OpenAI post](https://apify.com/xquik/x-tweet-scraper/examples/collect-replies-to-an-openai-post)
- [Extract a complete Twitter thread](https://apify.com/xquik/x-tweet-scraper/examples/extract-complete-twitter-thread)
- [Collect Spanish AI conversations](https://apify.com/xquik/x-tweet-scraper/examples/collect-spanish-ai-conversations)

### Quelles données X Tweet Scraper peut-il extraire ?

| Champ                    | Description                                                     |
| -------------------------- | ------------------------------------------------------------------ |
| `id`                       | ID du tweet                                                        |
| `text`                     | Texte complet du tweet (y compris les Note Tweets jusqu'à 25 000 caractères) |
| `createdAt`                | Chaîne d'horodatage native X                                       |
| `likeCount`                | Nombre de likes                                                    |
| `retweetCount`             | Nombre de retweets                                                 |
| `replyCount`               | Nombre de réponses                                                 |
| `quoteCount`               | Nombre de citations                                                |
| `viewCount`                | Nombre de vues                                                     |
| `bookmarkCount`            | Nombre de signets                                                  |
| `lang`                     | Langue du tweet                                                    |
| `url`                      | Lien direct vers le tweet                                          |
| `tweetUrl`                 | Alias d'URL de tweet en sortie plate                               |
| `twitterUrl`               | URL au format twitter.com en sortie plate                          |
| `author`                   | Champs d'auteur disponibles (nom d'utilisateur, bio, site, compteurs) |
| `authorUsername`           | Handle de l'auteur en sortie plate                                 |
| `authorFollowers`          | Nombre d'abonnés de l'auteur en sortie plate                       |
| `authorUrl`                | Site web de l'auteur en sortie plate, quand disponible             |
| `authorDescription`        | Texte de bio de l'auteur en sortie plate                           |
| `authorCoverPicture`       | URL de l'image de bannière de l'auteur en sortie plate             |
| `authorPinnedTweetIds`     | ID des tweets épinglés de l'auteur en sortie plate                 |
| `media`                    | Images, vidéos, GIFs attachés                                      |
| `mediaUrls`                | URL de médias en sortie plate                                      |
| `imageUrls`                | URL d'images en sortie plate                                       |
| `videoUrls`                | URL de vidéos en sortie plate                                      |
| `entities`                 | Hashtags, URL, mentions et horodatages vidéo                       |
| `displayTextRange`         | Plage de texte d'affichage X, quand disponible                     |
| `contentDisclosure`        | Métadonnées de divulgation, quand disponibles                      |
| `conversationControl`      | Politique de réponse et propriétaire public de la conversation     |
| `reactionContext`          | Post public et utilisateur référencé par une réaction              |
| `limitedActions`           | Restrictions et invites d'interaction publiques                    |
| `isLimitedReply`           | Indique si les réponses sont limitées                              |
| `isNoteTweet`              | Indique s'il s'agit d'un Note Tweet (post long format)             |
| `isQuoteStatus`            | Indique si ce tweet cite un autre tweet                            |
| `isRetweet`                | Indique si cette ligne est un retweet, original joint              |
| `isPinned`                 | Si l'auteur a épinglé ce post, lignes plates                       |
| `isReply`                  | Indique si ce tweet est une réponse                                |
| `quoted_tweet`             | Objet tweet cité (si c'est une citation)                           |
| `conversationId`           | ID de thread / conversation                                        |
| `resultType`               | Type de ligne pour les lignes enrichies, les lignes d'engagement et les diagnostics |
| `sourceTweetId`            | ID de tweet source pour les modes article et engagement            |
| `article`                  | Données d'article structurées en `mode: "article"`                 |

Les métadonnées optionnelles de tweet peuvent inclure
`authorUnavailable`, `card`, `communityId`, `communityNote`, `edit`,
`exclusiveContent`, `noteTweet` et `postCta`.
`isTranslatable`, `place`, `possiblySensitive` et `viewState` préservent
d'autre contexte public. `previousCounts` préserve l'engagement avant
édition. `tombstone` préserve les avis. `unmentionedUserIds` liste les
utilisateurs qui ont quitté la conversation. Consultez l'OpenAPI pour la
liste exacte des champs.

Les auteurs imbriqués suivent le contrat de profil public. Il couvre
l'identité, les compteurs, la vérification, la disponibilité, les données
professionnelles et les biographies de profil.

Les lignes de retweet règlent `isRetweet` sur `true`. Leur `text` porte le
post original en entier, et `retweeted_tweet` contient le post original avec
son auteur & ses compteurs.

Les lignes de tweet préservent aussi `type`, `source`, `inReplyToId`,
`inReplyToUserId`, `inReplyToUsername` et `retweeted_tweet`. Les tweets
cités et repostés préservent récursivement les mêmes champs sûrs pris en
charge.

Les médias incluent la disponibilité, la géométrie, les tags, les
variantes vidéo, `watchNowUrl` et les actions `visitSiteUrl`.

Les lignes n'incluent jamais d'état propre au visualiseur. Les indicateurs
d'abonnement, de blocage, de sourdine, de signet, de like, de repost, de droit
de modification et similaires sont toujours retirés, y compris de la sortie raw.

## Combien coûte le scraping de tweets ?

Chaque plan Apify coûte `$0.00015` par ligne livrée. Apify facture
séparément l'usage de sa plateforme. Xquik applique une facturation par
ligne de donnée livrée. Les diagnostics sont gratuits dans la sortie
`diagnostics`.

Aucun abonnement Xquik ne s'applique. Aucun frais de démarrage ou de
requête séparé ne s'applique. Chaque run écrit aussi un enregistrement
`run-report` avec `estimatedChargeUsd` calculé à partir du prix
pay-per-event en temps réel qu'Apify expose à l'Actor. Chaque issue de
run écrit `run-report`, y compris les sorties sans entrée et avec entrée
invalide. Les rapports de run séparent les lignes de donnée dans
`realRows` et les diagnostics dans `diagnosticRows`.

Comprenez les résultats vides avant de dépenser sur un autre run. L'objet
`filtering` des rapports et des diagnostics finaux compte les lignes retirées
par vos filtres. Consultez `serverFilteredRows`, `actorFilteredRows` et
`pagesWithUnknownServerFiltering`. Les lignes filtrées n'entraînent jamais de
frais de résultat.

L'épuisement de la source peut terminer l'extraction en dessous de votre
limite demandée. Ces runs indiquent `outcome: "complete"` avec
`completionReason: "source_exhausted"`. Les runs interrompus conservent
leur résultat partiel et leurs conseils de nouvelle tentative.

`failedSubtargets` compte les requêtes et cibles de profil arrêtées après une
erreur. Les lignes livrées restent dans le dataset et comptent pour la
facturation. Une erreur ne signifie jamais que la cible est introuvable. Ces
runs utilisent `completionReason: "partial_failure"`.

Une extraction interrompue écrit aussi un diagnostic `partial` gratuit.
Les résultats disponibles restent intacts. Le diagnostic indique
`availableResults`, `failedTargets`, `retryable` et `nextAction`. Une
sortie d'Actor réussie confirme la livraison, pas l'extraction complète.

Le texte de statut nomme toutes les causes de l'arrêt. Un run avec un compte
introuvable et une recherche bloquée indique les deux. `stopCauses` liste chaque
cause avec ses propres `message`, `retryable` et `nextAction`. Les causes sont
`target_not_found`, `target_protected`, `search_unavailable`, `likes_hidden`,
`target_failed`, `pagination_safety_limit`, `reply_reach` et `deadline_reached`.
Le run est `retryable` dès qu'une cause l'est.

Les cibles protégées ou manquantes comptent comme des échecs, y compris les runs
avec des résultats valides. Une recherche que X ne peut pas exécuter compte
aussi. X.com affiche « Something went wrong » pour une telle recherche. Le run
l'arrête aussitôt, sans nouvelle tentative. Les likes que X masque comptent
aussi. X montre qui a aimé un post uniquement à son auteur. Il montre les posts
qu'un compte a aimés uniquement à ce compte. Quand tous les échecs concernent
des cibles indisponibles, les diagnostics fixent `retryable: false`. Vérifiez
les URL ou noms d'utilisateur cibles et choisissez des comptes publics
disponibles. Affinez une recherche que X ne peut pas exécuter ou changez ses
filtres. Récupérez les personnes ayant reposté, les réponses ou les posts à la
place des likes masqués. Les autres échecs conservent des conseils de nouvelle
tentative pour les cibles inachevées.

Le diagnostic nomme ces cibles dans `unavailableTargets`. Chaque entrée contient
la `target` telle que vous l'avez saisie et une `reason` : `not_found`,
`protected`, `search_unavailable` ou `likes_hidden`. La liste contient jusqu'à
100 entrées. Retirez-les de l'entrée pour obtenir un run complet.

`completionReason: "pagination_safety_limit"` n'est pas un échec de lecture. Le
run a conservé ses lignes valides, puis a terminé une cible qui ne renvoyait
plus de nouveaux résultats. Le run signale une extraction incomplète.
`failedSubtargets` reste à `0`. Vous ne payez que les lignes livrées.

Le délai d'expiration Apify par défaut est `0`, donc les runs n'ont pas de
limite de temps. L'Actor continue jusqu'à ce qu'il atteigne le plafond ou épuise
les données éligibles. Vous pouvez néanmoins fixer un délai Apify fini. Alors
`completionReason: "deadline_reached"` signifie que cette limite est proche.
L'Actor enregistre les lignes et le rapport, puis se termine proprement avant la
limite. Les lignes livrées sont facturées une seule fois.

- Les démarrages, requêtes, URL et lookups de Tweet uniques n'ajoutent
  aucun frais séparé.
- L'Actor retire les doublons avant d'écrire ou de facturer les lignes.
- Les runs sans entrée, avec entrée invalide et sans sortie écrivent 1
  enregistrement exploitable dans la sortie `diagnostics` gratuite.

## Comment utiliser X Tweet Scraper pour scraper des données de tweet ?

### 1. Collez directement des URL

Collez un mélange d'URL de tweet, de profil, de recherche ou de list :

```json
{
  "startUrls": [
    { "url": "https://x.com/elonmusk/status/1846987139428634858" },
    { "url": "https://x.com/nasa" },
    { "url": "https://x.com/search?q=AI%20lang%3Aen" },
    { "url": "https://x.com/i/lists/1748648376080666720" }
  ],
  "maxItems": 500
}
```

Les URL de tweet renvoient ces tweets, sans doublons et dans l'ordre de votre
entrée. Les URL de profil renvoient les posts du compte. Les URL de recherche
exécutent leur requête. Les URL de list renvoient les posts de la List.
`maxItems` plafonne les résultats sur toutes les URL collées.

### 2. Handles en masse

Raccourci pour de nombreuses recherches `from:username` :

```json
{ "twitterHandles": ["elonmusk", "nasa", "openai"], "maxItems": 100 }
```

Chaque handle renvoie les posts de ce compte. L'Actor retire les lignes en
double avant la sortie et la facturation. Les noms d'utilisateur acceptent un
préfixe `@` optionnel. Les handles et les URL de profil gardent les reposts,
comme l'onglet Posts sur X. C'est vrai même avec des dates ou des filtres.
Réglez `tweetTypes.excludeRetweets` pour les retirer.

### 3. Rechercher des tweets

Réglez le champ **Search Terms** avec une ou plusieurs requêtes :

```json
{
  "searchTerms": ["from:elonmusk AI", "#bitcoin lang:en"],
  "maxItems": 1000,
  "queryType": "Latest"
}
```

Si `mode` vaut `tweet` ou `tweets` sans ID de Tweet, l'entrée de requête
est routée vers Search. Cela empêche des `searchTerms` valides de renvoyer
un lookup vide.

Les rattrapages de compte avec des fenêtres de date fonctionnent aussi, par
exemple `from:elonmusk since:2026-01-01 until:2026-01-02`. Chaque terme garde sa
propre attribution `searchTerm`. `maxItems` plafonne les résultats sur tous les
termes de recherche. L'Actor vérifie chaque tweet renvoyé par rapport aux
fenêtres `since:`, `until:` et en temps Unix. Les recherches filtrées continuent
de lire jusqu'à trouver des correspondances ou jusqu'à ce que X n'ait plus de
résultats.

Un terme de recherche `from:` renvoie ce que renvoie la recherche X. Il omet
donc les reposts. Ajoutez `include:nativeretweets` pour les garder, ou
`filter:nativeretweets` pour n'avoir que des reposts.

### 4. Rechercher des tweets par ID

```json
{ "tweetIds": ["1846987139428634858", "1858743654778892784"], "maxItems": 100 }
```

Les résultats gardent l'ordre de votre entrée, retirent les doublons et
n'incluent que les tweets demandés.

Les alias acceptés pour le même lookup incluent `tweetId`, `tweetIDs`,
`tweets`, `postIds`, `lookupPostIds`, `tweetUrls` et `postUrls`.

### 5. Modes explicites d'engagement, de thread et d'article

Utilisez `mode` quand vous voulez une seule route, indépendamment des
autres champs d'entrée :

```json
{ "mode": "replies", "replyTweetIds": ["1846987139428634858"], "maxItems": 100 }
```

Modes explicites pris en charge : `tweet`, `tweets`, `search`,
`profileTweets`, `profileReplies`, `profileMedia`, `profileLikes`,
`listTweets`, `article`, `replies`, `quotes`, `thread`, `retweeters` et
`favoriters`.

`profileTweets` suit l'onglet Posts du profil sur X. Il renvoie les posts
du compte, ses reposts et ses réponses à ses propres posts, par ordre de
date. Les réponses à d'autres comptes et le contexte de conversation
d'autres auteurs sont écartés avant la facturation.

Pour les posts originaux uniquement, excluez les types que vous ne voulez
pas :

```json
{
  "mode": "profileTweets",
  "twitterHandles": ["apify"],
  "tweetTypes": { "excludeReplies": true, "excludeRetweets": true },
  "maxItems": 100
}
```

`tweetTypes.excludeReplies`, `excludeRetweets` et `excludeQuotes`
fonctionnent sur chaque source. Une recherche les envoie à X sous la forme
`-filter:replies`, `-filter:nativeretweets` et `-filter:quote`. Sur un
profil ou une List, l'Actor écarte lui-même ces lignes. Les lignes exclues
n'atteignent jamais le dataset. Vous ne les payez donc jamais, et elles ne
comptent jamais dans `maxItems`.

`profileReplies` suit l'onglet With Replies de X. Il renvoie les posts et
réponses de profil rédigés par la cible. L'Actor exclut le contexte de
conversation d'autres auteurs. Utilisez `filter:replies` ou la recherche
`to:` quand vous avez besoin de résultats uniquement de réponse.

Les modes de recherche et de Tweet paginés prennent en charge `time.since`,
`time.until`, les horodatages Unix et `lang`. Ils incluent les Posts de profil,
With Replies, Media, Likes, les Lists, les réponses, les citations et les fils.
Les opérateurs de date plats correspondants fonctionnent aussi. L'Actor vérifie
chaque ligne avant la facturation. La borne de date inférieure est incluse. La
borne supérieure est exclue. Les filtres de date excluent les lignes sans date
exploitable. Les filtres de langue excluent les langues manquantes ou
différentes. Les lignes filtrées ne consomment jamais votre limite de résultats
demandée. Les runs de List avec une fenêtre de date atteignent vite les jours
plus anciens. Ils s'arrêtent une fois votre borne inférieure dépassée. Les
fenêtres très anciennes d'une List peuvent manquer quelques réponses. Comme la
borne supérieure est exclue, la même date pour `since` et `until` donne une
fenêtre vide. Réglez `until` sur le jour suivant pour obtenir 1 journée
complète. Les filtres de tweet ne s'appliquent pas aux listes d'utilisateurs ni
aux recherches directes de tweet ou d'article.

`time.withinTime` et `within_time` fonctionnent dans les mêmes modes. Une
valeur de `7d` conserve les 7 jours qui précèdent le moment où le run
commence à lire. Une fenêtre qui remonte avant 2006 conserve tous les
posts.

`mode: "replies"` est plus strict. Chaque ligne de tweet a `inReplyToId` égal à
l'ID de tweet demandé. Les réponses de conversation imbriquées ne comptent
jamais comme réponses directes. Si X affiche moins de réponses qu'il n'en
annonce, l'Actor garde les lignes trouvées. Il ajoute 1 enregistrement
`replies-incomplete` à `diagnostics` quand votre limite n'est pas atteinte. Le
run reste partiel jusqu'à votre limite ou jusqu'à ce que X n'ait plus de
réponses. `replyCoverage` indique le nombre de réponses et les détails de
couverture. Réglez `maxItems` sur votre total demandé, y compris des totaux
au-delà de 25 000 pour une seule cible de réponse.

Les lignes d'article incluent `resultType: "article"`, `sourceTweetId`,
`article` et un `author` optionnel. Les lignes d'utilisateur d'engagement
incluent `resultType: "user"`, `sourceTweetId` et `engagementMode`.

Les personnes ayant reposté restent un mode d'engagement public normal.
Les personnes ayant aimé sont au mieux : X ne peut exposer les
utilisateurs ayant aimé que pour les posts éligibles ou visibles par le
propriétaire. Les likes de profil sont aussi au mieux car de nombreux
profils publics n'exposent pas d'onglet Likes lisible. Si X n'expose ni
utilisateurs ni tweets aimés, l'Actor écrit un enregistrement
`diagnostics` gratuit. Les compteurs de signets peuvent apparaître sur les
lignes de tweet, mais X n'expose pas les comptes spécifiques ayant mis un
post en signet.

### 6. Sortie CSV plate

Gardez les champs JSON imbriqués par défaut, ou ajoutez des colonnes
adaptées aux tableurs :

```json
{ "searchTerms": ["from:nasa moon"], "maxItems": 100, "outputPreset": "flat" }
```

La sortie plate garde `author` et `media` inchangés et ajoute aussi des
champs de premier niveau tels que `authorUsername`, `authorName`,
`authorFollowers`, `tweetUrl`, `twitterUrl`, `mediaUrls`, `imageUrls` et
`videoUrls`.

Chaque ligne de tweet à plat porte `media`. Un tweet sans média a une liste
vide, donc chaque ligne a les mêmes clés dans un tableur ou un pipeline typé.

### 7. Choisir le nommage des champs

Gardez les noms de champ hérités par défaut. Sélectionnez un style pour
les données de résultat enrichies ou brutes :

```json
{
  "searchTerms": ["from:nasa moon"],
  "maxItems": 100,
  "outputVariant": "rich",
  "fieldStyle": "snake_case"
}
```

Utilisez `camelCase` ou `snake_case` pour les champs de résultat de
premier niveau et imbriqués. La sortie plate snake case inclut des champs
tels que `author_username` et `media_urls`. Les instantanés source sûrs
sous `raw` conservent leurs clés source d'origine. Les noms source en
conflit restent aussi inchangés pour éviter une perte de donnée.

Les diagnostics hérités utilisent `resultType`, `actorVersion` et
`replyCoverage`. La sortie enrichie et brute applique `fieldStyle` de
manière récursive. Par exemple, le snake case utilise `result_type`,
`actor_version` et `reply_coverage`. La vue de dataset Overview
fonctionne avec l'un ou l'autre style. Choisissez la vue Console
correspondant au `fieldStyle` du run. « camelCase fields » attend du
`camelCase`. « snake_case fields » attend du `snake_case`. Les vues ne
font que sélectionner des colonnes. Elles ne renomment jamais les données
stockées ou exportées.

### 8. Filtres avancés

Combinez des filtres d'utilisateur, de date, de localisation, de médias et
d'engagement :

```json
{
  "twitterContent": "AI",
  "from": "elonmusk",
  "since": "2026-01-01_00:00:00_UTC",
  "until": "2026-03-01_00:00:00_UTC",
  "lang": "en",
  "filter:media": true,
  "min_faves": 1000,
  "maxItems": 500
}
```

Réglez `queryType: "Latest + Top"` pour utiliser les deux modes de recherche X
dans un seul run. L'Actor retire les doublons avant la facturation et remplit
votre limite avec l'un ou l'autre mode. `Top` est trié par pertinence et n'est
pas exhaustif. Réglez `includeSearchTerms: true` pour joindre chaque requête
correspondante comme champ `searchTerm`.

Quand vous réglez `lang`, l'Actor vérifie la langue de chaque tweet
renvoyé. Il ignore les non-correspondances et continue la pagination pour
les tweets correspondants.

### Migrer depuis un autre Actor de tweets

Collez l'entrée que vous utilisez déjà. X Tweet Scraper lit les noms de
champ que les autres Actors de tweets utilisent et les fait correspondre à
ses propres champs. Les noms canoniques restent la valeur par défaut
documentée. Un alias ne supprime jamais un champ et ne change jamais ce que
vous payez. Le formulaire d'entrée ne liste que les champs canoniques, donc
il reste court. Les alias fonctionnent en JSON, API, SDK, automatisation et
entrées de tâche enregistrées.

| Champ que vous utilisez déjà                                                                                                                                           | X Tweet Scraper le lit comme                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `startUrls`, `urls`, `tweetUrls`, `postUrls`, `profileUrls`, `accountUrls`                                                                                             | `startUrls`                                                              |
| `profileUrl` en 1 chaîne                                                                                                                                               | `startUrls`                                                              |
| `tweetIds`, `tweetIDs`, `tweets`, `postIds`, `lookupPostIds`, `tweet_ids`, ou `tweetId` en 1 chaîne                                                                    | `tweetIds`                                                               |
| `twitterHandles`, `usernames`, `user_names`, `userNameList`, `handles`, `screenNames`, `profileTweets`                                                                 | `twitterHandles`                                                         |
| `username`, `handle`, `screenName` en 1 chaîne                                                                                                                         | `twitterHandles`                                                         |
| `searchTerms`, `searchQueries`, `queries`, `search`, en liste ou 1 recherche par ligne                                                                                 | `searchTerms`                                                            |
| `twitterContent`, `query`, `searchQuery`                                                                                                                               | `twitterContent`                                                         |
| `maxItems`, `maxResults`, `max_results`, `resultsLimit`, `count`, `resultsCount`, `numberOfTweets`, `maxPosts`, `max_posts`, `max_items`, `maxTweets`, `tweetsDesired` | `maxItems`                                                               |
| `sort`                                                                                                                                                                 | `queryType`                                                              |
| `tweetLanguage`, `language`                                                                                                                                            | `lang`                                                                   |
| `author`, `inReplyTo`, `mentioning`                                                                                                                                    | `from`, `to`, `@`                                                        |
| `start`, `startDate`, `end`, `endDate`                                                                                                                                 | `since`, `until`                                                         |
| `minimumRetweets`, `minimumFavorites`, `minimumReplies`                                                                                                                | `min_retweets`, `min_faves`, `min_replies`                               |
| `onlyImage`, `onlyVideo`, `onlyQuote`, `onlyTwitterBlue`                                                                                                               | `filter:images`, `filter:videos`, `filter:quote`, `filter:blue_verified` |
| `geotaggedNear`, `withinRadius`                                                                                                                                        | `near`, `within`                                                         |
| `quickDateRange` du Google Search Scraper, comme `d7`, `w2`, `m1` ou `y`                                                                                               | `since_time`, compté à rebours depuis le début du run                    |

Comportement d'une entrée collée :

- Chaque source s'exécute. Une entrée avec des URL de départ, des handles,
  des termes de recherche, des ID de List et des ID de tweet les exécute
  tous, et `maxItems` s'applique à l'ensemble du run.
- Une requête de recherche à côté de `searchTerms` s'exécute comme 1 terme
  de plus.
- L'Actor lit une URL de profil écrite `x.com/@name` comme `x.com/name`.
- Quand vous définissez un alias et son champ canonique, la valeur canonique
  l'emporte. Le log du run nomme l'alias qui a perdu.
- Le log du run nomme chaque champ que l'Actor ne lit pas, comme
  `customMapFunction`. Rien n'est écarté sans avis.
- Une limite de lignes doit être un nombre entier à partir de 1.
  `maxResults: 0` arrête le run avant toute récupération ou facturation.
- `quickDateRange: "m1"` lit le mois passé sur chaque route. Les mois et les
  années se comptent à rebours sur le calendrier. Une valeur sans h, d, w, m ou
  y arrête le run avant toute lecture ou facturation.
- L'Actor n'a pas d'unité de page. Remplacez `maxPages` par `maxItems`.
- L'Actor n'a pas de champ d'ID utilisateur. Envoyez des handles ou des URL de
  profil au lieu de `userId` ou `user_ids`.
- Les champs d'opérateur de recherche tels que `from`, `min_faves`,
  `since_time` et `filter:images` utilisent déjà les noms que X utilise. Ils
  n'ont donc besoin d'aucune correspondance.

### UX d'entrée Console et API

La Console expose ces contrôles :

- Mode, Output Variant, Field Style, Output Preset et Sort By sont des
  sélecteurs validés.
- Les champs Start URLs et Profile URLs acceptent des chaînes ou des
  objets `{ "url": "..." }`. Leurs éditeurs JSON préservent les deux
  formats d'API.
- Structured Filters expose des contrôles groupés sans JSON imbriqué.
- Les groupes de filtres canoniques gardent les opérateurs plats
  équivalents hors du formulaire. Les entrées JSON, API, SDK,
  automatisation et de tâche sauvegardée les acceptent toujours.
- Max Items et Max Items Per Target acceptent des nombres entiers à
  partir de 1. Les seuils d'engagement acceptent des nombres entiers à
  partir de 0.

Utilisez les champs canoniques dans les nouvelles intégrations. Les alias
du tableau de migration ci-dessus restent disponibles. `includeRaw` est un
alias de `outputVariant: "raw"`. Les valeurs historiques d'`outputVariant` telles
que `compact` et `full` restent acceptées et utilisent la sortie Legacy.
Le formulaire visuel les étiquette comme alias Legacy.

### Principaux opérateurs de recherche pris en charge

| Opérateur               | Exemple                | Objectif                        |
| -------------------------- | ------------------------- | ----------------------------------- |
| `from:`                    | `from:elonmusk`           | Uniquement les tweets de cet utilisateur |
| `to:`                       | `to:OpenAI`                | Uniquement les réponses à cet utilisateur |
| `@`                         | `@nasa`                    | Tweets mentionnant cet utilisateur   |
| `list:`                     | `list:123456`              | Tweets des membres de la list        |
| `lang:`                     | `lang:en`                  | Filtre par langue                    |
| `since:` / `until:`         | `since:2026-01-01`         | Plage de dates                       |
| `min_faves:`                | `min_faves:100`            | Seuil d'engagement                   |
| `min_retweets:`             | `min_retweets:50`          | Seuil de retweet                     |
| `filter:media`              | `filter:media`             | Opérateur de recherche média X       |
| `filter:videos`             | `filter:videos`            | Opérateur de recherche vidéo X       |
| `filter:images`             | `filter:images`            | Opérateur de recherche image X       |
| `filter:links`               | `filter:links`             | Uniquement les tweets avec liens     |
| `filter:replies`             | `filter:replies`           | Uniquement les tweets de réponse     |
| `filter:quote`                | `filter:quote`             | Uniquement les tweets citation       |
| `filter:blue_verified`        | `filter:blue_verified`     | Uniquement les utilisateurs Premium  |

Les fenêtres de date utilisent une borne inférieure inclusive et une
borne supérieure exclusive. L'Actor vérifie les deux bornes avant
d'ajouter ou de facturer chaque tweet.

Pour la liste complète des opérateurs, consultez
[Twitter Advanced Search](https://github.com/igorbrigadir/twitter-advanced-search).

## Entrée

Consultez l'onglet **Input** pour la liste complète des options. Tous les
champs sont optionnels, sauf au moins un parmi : `startUrls`,
`twitterHandles`, `listIds`, `tweetIds`, `searchTerms`, `twitterContent`,
ou leurs alias documentés.

Exemples :

- Collez une URL de tweet dans Start URLs.
- Collez une URL de profil ou ajoutez le nom d'utilisateur à X Handles.
- Utilisez `from:user since:YYYY-MM-DD until:YYYY-MM-DD` comme terme de
  recherche pour les rattrapages de compte.
- Collez une URL de list dans Start URLs.
- Combinez `twitterContent` avec des filtres tels que `from:`, `since:`,
  `min_faves:` et `filter:media` pour des recherches avancées.

## Sortie

Chaque tweet est un objet JSON avec les métadonnées disponibles :

Les schémas de dataset et de run-report incluent les titres, descriptions
et exemples de champ. Les agents peuvent les inspecter sans deviner le
sens des champs.

Les valeurs d'exemple sont illustratives. Les réponses reflètent les
données source au moment du run.

```json
{
  "id": "1846987139428634858",
  "text": "The future of AI is...",
  "createdAt": "Sun Mar 15 12:00:00 +0000 2026",
  "retweetCount": 500,
  "replyCount": 120,
  "likeCount": 5000,
  "quoteCount": 80,
  "viewCount": 1200000,
  "bookmarkCount": 300,
  "lang": "en",
  "url": "https://x.com/elonmusk/status/1846987139428634858",
  "author": {
    "id": "44196397",
    "username": "elonmusk",
    "name": "Elon Musk",
    "followers": 180000000,
    "verified": true
  },
  "media": [{ "type": "photo", "url": "https://..." }],
  "entities": {
    "hashtags": [{ "text": "AI" }],
    "urls": [],
    "user_mentions": []
  },
  "isNoteTweet": false,
  "isQuoteStatus": false,
  "isReply": false,
  "conversationId": "1846987139428634858"
}
```

Exportez en JSON, CSV, Excel ou HTML depuis le dataset Apify.

## Options de run

- Réglez la charge totale maximale Apify pour plafonner le coût du run.
  Laissez `maxItems` vide pour obtenir le maximum de lignes dans ce
  budget, ou réglez `maxItems` quand vous voulez moins de tweets.
- Réglez `maxTotalChargeUsd` dans l'API Apify, ou « Max cost per run »
  dans la Console. Apify expose cette limite à l'Actor sous la forme
  `ACTOR_MAX_TOTAL_CHARGE_USD`, et l'Actor la convertit en nombre maximal
  de lignes facturables.
- Passez `tweetIds` pour rechercher de nombreux tweets à la fois. Collez une URL
  de profil pour lire les posts d'un compte.
- Réglez `includeSearchTerms: true` lors de l'exécution de nombreuses
  requêtes pour étiqueter chaque résultat avec son terme de recherche
  source.
- Réglez `queryType: "Latest + Top"` pour utiliser les deux modes de recherche X
  dans un seul run. La déduplication et les plafonds de résultats s'appliquent
  aux deux.
- Utilisez les monitors de compte ou de mot-clé Xquik pour des
  vérifications à la seconde et des webhooks signés. Les monitors actifs
  vérifient chaque seconde.

## Cas d'usage

- Suivre le sentiment de marque à travers les tweets.
- Surveiller les posts concurrents et les termes du secteur.
- Trouver des prospects dans des conversations publiques.
- Collecter des datasets publics pour la recherche.
- Trouver des posts à fort engagement public.

## Responsabilité sur les données

L'Actor demande des champs X publics. Les résultats peuvent contenir des
données personnelles. Confirmez un objectif licite et suivez les règles
de confidentialité applicables. Consultez un conseil juridique qualifié en
cas de doute.

## Actors Xquik associés

Chaque Actor Xquik partage le même moteur d'extraction, la même facturation
au filtre et les mêmes diagnostics. Choisissez celui qui correspond aux
données dont vous avez besoin.

- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper) : scrape
  des profils ainsi que leurs posts, réponses, médias et abonnés à partir de
  handles, d'ID ou d'URL. Utilisez-le quand vous partez de comptes plutôt
  que de recherches. À partir de $0.00015 par ligne.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper) : scrape des
  réponses, des commentaires et des conversations entières sous les posts
  avec plus de 25 filtres. Utilisez-le quand vous avez besoin de la
  discussion sous les tweets. À partir de $0.00015 par ligne.
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

## Besoin de plus que du scraping ?

Xquik fournit aussi 47 outils de tableau de bord, 129 opérations REST, des
webhooks signés et un serveur MCP.

- [Documentation de l'API](https://docs.xquik.com/introduction) : guides
  de l'API REST
- [API Search Tweets](https://docs.xquik.com/api-reference/x/search-tweets) :
  recherchez des tweets via REST
- [API Batch Tweets](https://docs.xquik.com/api-reference/x/batch-tweets) :
  récupère jusqu'à 100 tweets par ID
- [API User Tweets](https://docs.xquik.com/api-reference/x/user-tweets) :
  obtient le fil d'un utilisateur
- [Serveur MCP](https://docs.xquik.com/mcp/overview) : découvrez les
  outils pris en charge
- [Webhooks](https://docs.xquik.com/webhooks/overview) : livraison
  d'événements signés
- [GitHub](https://github.com/Xquik-dev/x-twitter-scraper) : code source
  et suivi des problèmes

## FAQ

**Ai-je besoin d'une clé API X ?** Non. Vous n'avez besoin ni de clé API X, ni
de connexion, ni d'identifiants.

**Qu'est-ce qui limite un run ?** Votre limite d'éléments demandée et
votre limite de dépense Apify arrêtent le run. Les limites de compte et de
plateforme Apify s'appliquent toujours.

**Quelle est sa vitesse ?** Le temps d'exécution dépend de votre entrée, du
nombre de résultats et de la disponibilité de X.

**Pourquoi une recherche Latest renvoie-t-elle des posts que l'onglet Latest de
X n'affiche pas ?** X laisse certains posts correspondants hors de son onglet
Latest. Cet Actor renvoie aussi ces posts. Chaque post est un vrai résultat de
recherche X pour votre requête, et vous payez chaque post une seule fois.

**Quels opérateurs de recherche fonctionnent ?** La recherche
avancée X prend en charge les auteurs, les destinataires, les mentions,
les dates, l'engagement, les médias et la localisation.

**Puis-je utiliser l'API Apify pour l'exécuter ?** Oui. Consultez
l'[onglet API](https://apify.com/xquik/x-tweet-scraper/api) pour des
exemples en Python, JavaScript et cURL.

**Puis-je planifier des scrapes récurrents ?** Oui. Utilisez la
[planification](https://docs.apify.com/platform/schedules) intégrée
d'Apify pour exécuter cet Actor sur un cron.

**Où signaler un problème ?** Ouvrez un problème sur
[GitHub](https://github.com/Xquik-dev/x-twitter-scraper/issues) ou
utilisez l'onglet Issues sur la page de cet Actor.

**Puis-je obtenir une solution sur mesure ?** Oui. Visitez
[xquik.com](https://xquik.com) ou lisez la
[documentation de l'API](https://docs.xquik.com/introduction) pour le
tableau de bord, l'API, le serveur MCP et les webhooks.
