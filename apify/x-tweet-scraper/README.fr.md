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
- Les pages de recherche et de citation automatiques demandent jusqu'à 300
  lignes.
- Les curseurs sauvegardés conservent leurs limites de page d'origine et
  redémarrent quand ils expirent.
- Les modes de profil combinent le fil et la recherche par auteur quand
  les deux s'appliquent.
- Les logs de page incluent `fetchDurationMs`, `processingDurationMs`,
  `pushDurationMs`, `statusDurationMs` et `fullPageDurationMs` sans
  répéter les cibles.
- Les points de contrôle préservent les lignes acceptées, la durée et les
  compteurs d'échec après un redémarrage.

### Utilisez toujours la dernière build

Sélectionnez `latest` pour chaque run afin de recevoir tous les correctifs
publiés.

Quand aucune build n'est spécifiée, Apify utilise la valeur par défaut
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
| `isReply`                  | Indique si ce tweet est une réponse                                |
| `quoted_tweet`             | Objet tweet cité (si c'est une citation)                           |
| `conversationId`           | ID de thread / conversation                                        |
| `resultType`               | Type de ligne pour les lignes enrichies, les lignes d'engagement et les diagnostics |
| `sourceTweetId`            | ID de tweet source pour les modes article et engagement            |
| `article`                  | Données d'article structurées en `mode: "article"`                 |

Les métadonnées optionnelles de tweet peuvent inclure `card`,
`communityId`, `communityNote`, `edit`, `noteTweet` et `postCta`.
`isTranslatable`, `place`, `possiblySensitive` et `viewState` préservent
d'autre contexte public. `previousCounts` préserve l'engagement avant
édition. `tombstone` préserve les avis. `unmentionedUserIds` liste les
utilisateurs qui ont quitté la conversation. Consultez l'OpenAPI pour la
liste exacte des champs.

Les auteurs imbriqués suivent le contrat de profil public. Il couvre
l'identité, les compteurs, la vérification, la disponibilité, les données
professionnelles et les biographies de profil.

Les lignes de tweet préservent aussi `type`, `source`, `inReplyToId`,
`inReplyToUserId`, `inReplyToUsername` et `retweeted_tweet`. Les tweets
cités et repostés préservent récursivement les mêmes champs sûrs pris en
charge.

Les médias incluent la disponibilité, la géométrie, les tags, les
variantes vidéo, `watchNowUrl` et les actions `visitSiteUrl`.

L'état relatif au visualiseur appartient au compte de récupération de
Xquik, pas à votre dataset. Les indicateurs de suivi, blocage, mise en
sourdine, signet, like, repost, permission d'édition et autres indicateurs
relatifs au visualiseur sont toujours retirés, y compris de la sortie
brute.

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
`filtering` sépare `serverFilteredRows` de `actorFilteredRows` dans les
rapports et diagnostics finaux. Ces chiffres comptent les lignes rejetées
sur les pages traitées, y compris les lignes source répétées.
`pagesWithUnknownServerFiltering` identifie les pages sans compteurs
serveur valides. Les compteurs manquants restent des lacunes. Les lignes
filtrées n'entraînent jamais de frais de résultat.

L'épuisement de la source peut terminer l'extraction en dessous de votre
limite demandée. Ces runs indiquent `outcome: "complete"` avec
`completionReason: "source_exhausted"`. Les runs interrompus conservent
leur résultat partiel et leurs conseils de nouvelle tentative.

`failedSubtargets` compte les requêtes et cibles de profil arrêtées par
des échecs de lecture. La pagination et les échecs de paiement préservent
les lignes partielles et les curseurs inachevés. Ils n'impliquent jamais
que la cible est manquante. Les lignes acceptées restent des lignes de
donnée et comptent pour la facturation. Ces runs utilisent
`completionReason: "partial_failure"`. La pagination rapide côté serveur
suit le même contrat de reporting.

Une extraction interrompue écrit aussi un diagnostic `partial` gratuit.
Les résultats disponibles restent intacts. Le diagnostic indique
`availableResults`, `failedTargets`, `retryable` et `nextAction`. Une
sortie d'Actor réussie confirme la livraison, pas l'extraction complète.

Les cibles protégées ou manquantes comptent comme des échecs, y compris
les runs avec des résultats valides. Quand tous les échecs concernent des
cibles indisponibles, les diagnostics fixent `retryable: false`. Vérifiez
les URL ou noms d'utilisateur cibles et choisissez des comptes publics
disponibles. Les autres échecs conservent des conseils de nouvelle
tentative pour les cibles inachevées.

`completionReason: "pagination_safety_limit"` n'est pas un échec de
lecture. Cela signifie que la pagination a conservé des lignes valides,
puis a atteint sa limite de sécurité bornée. Les recherches Latest
continuent à travers les pages vides tant que des curseurs de récupération
valides subsistent. Les recherches Top et la récupération de fenêtre de
compte peuvent enregistrer un point de contrôle après 10 pages vides
consécutives. Les recherches enregistrent aussi un point de contrôle
quand le service signale une pagination bloquée. Les blocages arrêtent les
nouvelles tentatives automatiques sans redémarrer la recherche. Ces runs
indiquent une extraction incomplète et conservent des curseurs
reprenables. Une page terminale complète la pagination même après des
pages vides consécutives. `failedSubtargets` reste à `0`. Seules les
lignes de dataset acceptées sont facturées.

Le délai d'expiration Apify par défaut est `0`, donc les runs n'ont pas de
limite de temps. L'Actor continue jusqu'au plafond ou jusqu'à
l'épuisement des données éligibles. Un appelant peut néanmoins fixer un
délai Apify fini. Alors `completionReason: "deadline_reached"` signifie
que cette limite configurée est proche. L'Actor garde les 15 dernières
secondes pour les points de contrôle, les lignes, les rapports et une
sortie réussie. Les lignes valides restent livrées et facturées une seule
fois. La pagination inachevée reste reprenable.

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

Les URL de tweet sont recherchées par lots simultanés allant jusqu'à 100.
Les réponses partiellement réussies revérifient une fois les ID non
résolus. La sortie de lot reste unique et correspond aux ID demandés. Les
URL de profil combinent le fil de profil avec la recherche par auteur. Les
URL de recherche extraient la requête. Les URL de list utilisent le chemin
dédié aux lists plutôt que la recherche générique `list:`. `maxItems`
plafonne les résultats sur toutes les URL collées.

### 2. Handles en masse

Raccourci pour de nombreuses recherches `from:username` :

```json
{ "twitterHandles": ["elonmusk", "nasa", "openai"], "maxItems": 100 }
```

Chaque handle combine la pagination par curseur avec la recherche par
auteur. L'Actor retire les lignes en double avant la sortie et la
facturation. Les noms d'utilisateur acceptent un préfixe `@` optionnel.

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

Les rattrapages de compte simples avec des fenêtres de date, tels que
`from:elonmusk since:2026-01-01 until:2026-01-02`, utilisent une route de
compte bornée. Les fenêtres récentes combinent le fil de profil avec la
recherche par auteur. Les fenêtres historiques utilisent une recherche
exacte. Les fenêtres adjacentes compatibles partagent une récupération et
conservent leur attribution `searchTerm` d'origine. `maxItems` plafonne
les résultats sur tous les termes de recherche. Toutes les fenêtres
`since:`/`until:` et en temps Unix vérifient chaque tweet renvoyé. Les
fenêtres de compte filtrées lisent les pages source complètes avant
d'appliquer le plafond de sortie. Les pages filtrées continuent jusqu'à
ce que des tweets correspondants soient trouvés ou que la pagination se
termine. Les termes de recherche indépendants s'exécutent en parallèle.
Chaque terme conserve une pagination de curseur ordonnée pour une
profondeur et une attribution cohérentes. Les fenêtres de compte partagent
une récupération uniquement quand elles sont compatibles.

### 4. Rechercher des tweets par ID

```json
{ "tweetIds": ["1846987139428634858", "1858743654778892784"], "maxItems": 100 }
```

L'Actor traite 100 ID par requête. Il exécute les lots en parallèle et
écrit chaque groupe terminé une seule fois. Les réponses partielles
revérifient uniquement les ID non résolus. Les résultats préservent
l'ordre d'entrée, retirent les doublons et excluent les tweets non
demandés.

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

`profileTweets` suit l'onglet Posts du profil. Il renvoie les posts non
réponse rédigés par la cible. Les lignes de réponse et le contexte de
conversation d'autres auteurs sont exclus avant la facturation.

`profileReplies` suit l'onglet With Replies de X. Il renvoie les posts et
réponses de profil rédigés par la cible. Le contexte de conversation
d'autres auteurs est exclu. Utilisez `filter:replies` ou la recherche
`to:` quand vous avez besoin de résultats uniquement de réponse.

Les modes de recherche et de Tweet paginés prennent en charge
`time.since`, `time.until`, les horodatages Unix et `lang`. Cela inclut
les onglets Posts, With Replies, Media, Likes, Lists de profil, les
réponses, citations et threads. Les opérateurs de date plats
correspondants fonctionnent aussi. L'Actor vérifie chaque ligne avant la
facturation. La borne de date inférieure est inclusive ; la borne
supérieure est exclusive. Les filtres de date excluent les lignes sans
date exploitable. Les filtres de langue excluent les langues manquantes
ou non correspondantes. Les lignes filtrées ne consomment jamais votre
limite de résultat demandée. Les résultats non ordonnés continuent la
pagination quand des Tweets plus anciens précèdent des résultats
correspondants. Les filtres de tweet ne s'appliquent pas aux listes
d'utilisateurs ni aux lookups directs de Tweet/article.

`mode: "replies"` est plus strict. Il combine les fils directs, les modes
de classement pris en charge, chaque module de curseur avant, les
branches de contenu masqué étiquetées, les partitions temporelles mises à
l'échelle du nombre de réponses rapporté et la recherche. Chaque ligne de
tweet a `inReplyToId` égal à l'ID de tweet demandé. Les réponses de
conversation imbriquées ne comptent jamais comme réponses directes. Si X
expose moins de réponses que rapporté, l'Actor conserve les lignes
partielles sûres. Il ajoute 1 enregistrement `replies-incomplete` à
`diagnostics` quand de la capacité reste. Atteindre un seuil de couverture
ne signifie pas que l'extraction est terminée. Le run reste partiel
jusqu'à votre limite ou l'épuisement vérifié de la source.
`replyCoverage` indique les comptes, les stratégies, les anomalies de
pagination, les champs manquants et le repli recommandé. L'Actor honore
les délais de nouvelle tentative transitoires avant de renvoyer une
sortie vide. Réglez `maxItems` sur votre total demandé, y compris des
totaux au-delà de 25 000 pour une seule cible de réponse.

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

Réglez `queryType: "Latest + Top"` pour exécuter les deux modes de
recherche X en parallèle. L'Actor déduplique avant la facturation et
comble la capacité inutilisée depuis l'un ou l'autre mode. `Top` est
classé par pertinence et n'est pas exhaustif. Réglez
`includeSearchTerms: true` pour attacher chaque requête correspondante
comme champ `searchTerm`. Les courtes pannes de lecture transitoires
obtiennent une tentative supplémentaire avant que l'Actor ne renvoie un
diagnostic.

Quand vous réglez `lang`, l'Actor vérifie la langue de chaque tweet
renvoyé. Il ignore les non-correspondances et continue la pagination pour
les tweets correspondants.

Vous pouvez aussi passer des alias compatibles avec les concurrents tels
que `query`, `searchQuery`, `urls`, `profileUrls`, `usernames`,
`maxResults`, `max_results`, `resultsLimit`, `numberOfTweets`, `maxPosts`
et `max_posts`.

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
de compatibilité restent disponibles en JSON, API, SDK, automatisation et
entrées de tâche. Cela inclut `includeRaw` comme alias de
`outputVariant: "raw"`. Les valeurs historiques d'`outputVariant` telles
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
  L'Actor combine son fil avec la recherche par auteur.
- Utilisez `from:user since:YYYY-MM-DD until:YYYY-MM-DD` comme terme de
  recherche pour les rattrapages de compte. L'Actor fusionne les fenêtres
  compatibles avant la récupération. Les fenêtres récentes combinent le
  fil de profil avec la recherche par auteur. Les fenêtres historiques
  utilisent une recherche exacte.
- Collez une URL de list dans Start URLs.
- Combinez `twitterContent` avec des filtres tels que `from:`, `since:`,
  `min_faves:` et `filter:media` pour des recherches avancées.

Le scraper route les URL de list via le chemin dédié aux lists plutôt que
la recherche générique `list:ID`.

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
- Passez `tweetIds` pour des lots simultanés de 100 ID. Collez une URL de
  profil pour utiliser la voie rapide du fil utilisateur.
- Réglez `includeSearchTerms: true` lors de l'exécution de nombreuses
  requêtes pour étiqueter chaque résultat avec son terme de recherche
  source.
- Réglez `queryType: "Latest + Top"` pour exécuter les deux modes de
  recherche X en parallèle. La déduplication et les plafonds de résultat
  restent atomiques.
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
- [X (Twitter) Brand Monitoring](https://apify.com/xquik/x-twitter-brand-monitoring) :
  suit les mentions de marque avec pertinence, sentiment et réponses sur
  l'expérience client par IA, et compare les runs. Utilisez-le pour
  surveiller une marque dans le temps. À partir de $0.0003 par tweet
  analysé.
- [X Tweet Sentiment Analysis](https://apify.com/xquik/x-tweet-sentiment-analysis) :
  attribue une attitude, une intensité et une probabilité de sarcasme à
  chaque tweet par IA. Utilisez-le pour un sentiment général sur n'importe
  quel sujet. À partir de $0.0003 par tweet analysé.
- [X (Twitter) Stock & Crypto Signal](https://apify.com/xquik/x-twitter-stock-crypto-signals) :
  attribue une position haussière, baissière, neutre ou mixte, un type de
  contenu, une conviction et une pertinence d'actif par IA. Utilisez-le
  pour suivre les actions, la crypto ou les discussions de trading. À
  partir de $0.0003 par tweet analysé.
- [X (Twitter) News Monitor with AI](https://apify.com/xquik/x-twitter-news-monitor) :
  attribue un format, une attribution de source et une pertinence de sujet
  aux posts d'actualité par IA. Utilisez-le pour séparer le reportage du
  commentaire. À partir de $0.0003 par tweet analysé.
- [X Tweet Classifier with AI](https://apify.com/xquik/x-twitter-tweet-classifier) :
  répond à vos propres questions de catégorie, de score et de oui/non pour
  chaque tweet par IA. Utilisez-le quand les analyses prédéfinies ne
  correspondent pas à vos étiquettes. À partir de $0.0003 par tweet
  analysé.

## Besoin de plus que du scraping ?

Xquik fournit aussi 47 outils de tableau de bord, 129 opérations REST, des
webhooks signés et un serveur MCP.

- [Documentation de l'API](https://docs.xquik.com/introduction) : guides
  de l'API REST
- [API Search Tweets](https://docs.xquik.com/api-reference/x/search-tweets) :
  l'endpoint qui alimente cet Actor
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

**Ai-je besoin d'une clé API X ?** Non. Ce scraper utilise sa propre
infrastructure. Aucune connexion ni identifiant requis.

**Qu'est-ce qui limite un run ?** Votre limite d'éléments demandée et
votre limite de dépense Apify arrêtent le run. Les limites de compte et de
plateforme Apify s'appliquent toujours.

**Quelle est sa vitesse ?** Le temps d'exécution dépend de la route, du
nombre de résultats et de la disponibilité en amont.

**Quels opérateurs de recherche sont pris en charge ?** La recherche
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
