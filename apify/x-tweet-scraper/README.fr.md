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
monde. Ses données X sont les plus complètes. X Tweet Scraper de Xquik collecte
les posts (tweets), les réponses, les profils, les Listes et les recherches avec
plus de 50 filtres. Des benchmarks publics prouvent qu'il est le moins cher et
le plus rapide de 12 Actors de posts. Ses lignes portent 2x plus de champs que
celles de l'Actor médian, comme le montre le [benchmark ci-dessous](#benchmark).
La plupart des autres Actors Apify facturent avant de filtrer ou de dédupliquer.
Xquik facture seulement les résultats livrés, uniques et conformes à vos
filtres.

Scrapez les posts publics de X (Twitter) **à partir de $0.00015 par résultat
livré sur chaque plan Apify**. Apify facture l'usage de la plateforme à part.
Aucune connexion X n'est requise, et vous ne payez pas de frais de démarrage ni
de requête. Conçu par [Xquik](https://xquik.com).

> Xquik est un service tiers indépendant. Non affilié à X Corp.
> "Twitter" et "X" sont des marques déposées de X Corp.

## Que fait X Tweet Scraper ?

X Tweet Scraper de Xquik renvoie les posts, les métriques d'engagement, les
profils publics des auteurs et les médias. Il accepte des URL, des noms
d'utilisateur, des ID de Liste, des ID de post et des requêtes de recherche,
avec plus de 50 filtres.

### Fonctionnalités clés

- Les filtres et la suppression des doublons passent avant la facturation.
- Une seule entrée gère les consultations par ID, les fils, les Listes, la
  recherche et les modes d'engagement.
- Les entrées d'ID de post n'ont pas de plafond fixe. Vos réglages de dépense et
  de timeout Apify s'appliquent toujours.
- Les logs du run montrent la durée de chaque page dans `fetchDurationMs`,
  `processingDurationMs`, `pushDurationMs`, `statusDurationMs` et
  `fullPageDurationMs`.
- Les runs gardent les lignes livrées et la progression quand Apify les
  redémarre.

### Cas d'usage

- Alimenter la recherche, l'enrichissement, l'analyse & l'entraînement d'IA avec
  plus de champs par tweet. Le 2026-09-27, notre ligne médiane avait 63 champs.
  C'est 2x la médiane de 11 autres Actors.
- Suivez le sentiment envers une marque dans les posts.
- Surveillez les posts des concurrents et les termes de votre secteur.
- Trouvez des prospects dans les conversations publiques.
- Collectez des datasets publics pour la recherche.
- Trouvez les posts à fort engagement public.

### Quelles données X Tweet Scraper peut-il extraire ?

| Champ                  | Description                                                               |
| ---------------------- | ------------------------------------------------------------------------- |
| `id`                   | ID du post                                                                |
| `text`                 | Texte complet du post (y compris les Note Tweets jusqu'à 25k caractères)  |
| `createdAt`            | Horodatage natif de X, en texte                                           |
| `likeCount`            | Nombre de J'aime                                                          |
| `retweetCount`         | Nombre de reposts                                                         |
| `replyCount`           | Nombre de réponses                                                        |
| `quoteCount`           | Nombre de citations                                                       |
| `viewCount`            | Nombre de vues                                                            |
| `bookmarkCount`        | Nombre de signets                                                         |
| `lang`                 | Langue du post                                                            |
| `url`                  | Lien direct vers le post                                                  |
| `tweetUrl`             | Alias de l'URL du post en sortie plate                                    |
| `twitterUrl`           | URL au format twitter.com en sortie plate                                 |
| `author`               | Champs d'auteur disponibles (nom d'utilisateur, bio, site web, compteurs) |
| `authorUsername`       | Nom d'utilisateur de l'auteur en sortie plate                             |
| `authorFollowers`      | Nombre d'abonnés de l'auteur en sortie plate                              |
| `authorUrl`            | Site web de l'auteur en sortie plate, quand il existe                     |
| `authorDescription`    | Bio de l'auteur en sortie plate                                           |
| `authorCoverPicture`   | URL de la bannière de l'auteur en sortie plate                            |
| `authorPinnedTweetIds` | ID des posts épinglés de l'auteur en sortie plate                         |
| `media`                | Images, vidéos et GIF joints                                              |
| `mediaUrls`            | URL des médias en sortie plate                                            |
| `imageUrls`            | URL des images en sortie plate                                            |
| `videoUrls`            | URL des vidéos en sortie plate                                            |
| `entities`             | Hashtags, URL, mentions et horodatages vidéo                              |
| `displayTextRange`     | Plage de texte affichée par X, quand elle existe                          |
| `contentDisclosure`    | Métadonnées de divulgation, quand elles existent                          |
| `conversationControl`  | Règle de réponse et propriétaire public de la conversation                |
| `reactionContext`      | Post et utilisateur publics visés par une réaction                        |
| `limitedActions`       | Restrictions et invites d'interaction publiques                           |
| `isLimitedReply`       | Indique si les réponses sont limitées                                     |
| `isNoteTweet`          | Indique s'il s'agit d'un Note Tweet (post long)                           |
| `isQuoteStatus`        | Indique si ce post en cite un autre                                       |
| `isRetweet`            | Indique si cette ligne est un repost, avec l'original joint               |
| `isPinned`             | Indique si l'auteur a épinglé ce post, en lignes plates                   |
| `isReply`              | Indique si ce post est une réponse                                        |
| `quoted_tweet`         | Objet du post cité (pour une citation)                                    |
| `conversationId`       | ID de la discussion ou de la conversation                                 |
| `resultType`           | Type de ligne pour les lignes riches, d'engagement et de diagnostic       |
| `sourceTweetId`        | ID du post source pour les modes Article et engagement                    |
| `article`              | Données d'Article structurées en `mode: "article"`                        |

Les métadonnées de post optionnelles incluent `authorUnavailable`, `card`,
`communityId`, `communityNote`, `edit`, `exclusiveContent`, `noteTweet` et
`postCta`. `isTranslatable`, `place`, `possiblySensitive` et `viewState` gardent
d'autres éléments de contexte public. `previousCounts` garde l'engagement
d'avant la modification. `tombstone` garde les avis de visibilité.
`unmentionedUserIds` liste les utilisateurs qui ont quitté la conversation.
Consultez OpenAPI pour la liste exacte des champs.

Les objets `author` imbriqués portent les champs de profil publics. Ils couvrent
l'identité, les compteurs, la certification, la disponibilité, les données
professionnelles et les biographies de profil.

Dans les lignes de repost, `isRetweet` vaut `true`. Leur `text` contient le post
d'origine en entier. `retweeted_tweet` contient le post d'origine avec son
auteur et ses compteurs.

Les lignes de post gardent aussi `type`, `source`, `inReplyToId`,
`inReplyToUserId`, `inReplyToUsername` et `retweeted_tweet`. Les posts cités et
repostés portent les mêmes champs à chaque niveau d'imbrication.

Les médias portent la disponibilité, les dimensions, les tags et les variantes
vidéo. Ils portent aussi les actions `watchNowUrl` et `visitSiteUrl`.

Les lignes n'incluent jamais d'état propre au compte qui consulte. L'Actor
retire les indicateurs d'abonnement, de blocage, de masquage, de signet, de
J'aime, de repost, de droit de modification et autres indicateurs de ce type. La
sortie brute les retire aussi.

## Comment utiliser X Tweet Scraper pour scraper des tweets ?

Suivez ces étapes dans Apify Console :

1. Ouvrez un [exemple de tâche](#exemples-de-tâches) ou l'onglet Input.
2. Ajoutez des URL, des noms d'utilisateur, des ID de post ou des termes de
   recherche.
3. Réglez `maxItems` et les filtres utiles.
4. Cliquez sur Start et attendez la fin du run.
5. Exportez le dataset en JSON, CSV, Excel ou HTML.

Les recettes ci-dessous montrent l'entrée de chaque source.

### Coller des URL

Collez n'importe quel mélange d'URL de posts, de profils, de recherches ou de
Listes :

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

Les URL de posts renvoient ces posts, sans doublon et dans l'ordre de votre
entrée. Les URL de profil renvoient les posts du compte. Les URL de recherche
lancent leur requête. Les URL de Liste renvoient les posts de la Liste.
`maxItems` plafonne les résultats sur toutes les URL collées.

### Scraper de nombreux noms d'utilisateur

Les noms d'utilisateur servent de raccourci pour de nombreuses recherches
`from:username` :

```json
{ "twitterHandles": ["elonmusk", "nasa", "openai"], "maxItems": 100 }
```

Chaque nom d'utilisateur renvoie les posts de ce compte. L'Actor retire les
lignes en double avant la sortie et la facturation. Vous pouvez ajouter les noms
d'utilisateur avec ou sans `@`. Les noms d'utilisateur et les URL de profil
gardent les reposts, comme l'onglet Posts de X. Ils les gardent même avec des
dates ou des filtres. Réglez `tweetTypes.excludeRetweets` pour les retirer.

### Rechercher des tweets

Mettez 1 ou plusieurs requêtes dans le champ Search terms :

```json
{
  "searchTerms": ["from:elonmusk AI", "#bitcoin lang:en"],
  "maxItems": 1000,
  "queryType": "Latest"
}
```

Avec `mode` réglé sur `tweet` ou `tweets` et sans ID de post, les requêtes
passent en recherche. Des `searchTerms` valides ne renvoient alors jamais une
consultation vide.

Vous pouvez aussi récupérer l'historique d'un compte par plages de dates, par
exemple `from:elonmusk since:2026-01-01 until:2026-01-02`. Chaque terme garde sa
propre attribution `searchTerm`. `maxItems` plafonne les résultats sur tous les
termes de recherche. L'Actor vérifie chaque post renvoyé par rapport aux
fenêtres `since:`, `until:` et en temps Unix. Les recherches filtrées continuent
de lire jusqu'à trouver des résultats conformes ou jusqu'à ce que X n'ait plus
de résultats.

Un terme de recherche `from:` renvoie ce que renvoie la recherche X, donc il
laisse de côté les reposts. Ajoutez `include:nativeretweets` pour les garder, ou
`filter:nativeretweets` pour avoir seulement les reposts.

### Retrouver des posts par ID

```json
{ "tweetIds": ["1846987139428634858", "1858743654778892784"], "maxItems": 100 }
```

Les résultats gardent l'ordre de votre entrée, retirent les doublons et
incluent seulement les posts demandés. La consultation accepte aussi `tweetId`,
`tweetIDs`, `tweets`, `postIds`, `lookupPostIds`, `tweetUrls` et `postUrls`.

### Modes engagement, discussion et Article

Réglez `mode` pour imposer un mode, quels que soient les autres champs de
l'entrée :

```json
{ "mode": "replies", "replyTweetIds": ["1846987139428634858"], "maxItems": 100 }
```

Les modes de post et de recherche sont `tweet`, `tweets` et `search`. Les modes
de profil sont `profileTweets`, `profileReplies`, `profileMedia` et
`profileLikes`. `listTweets` lit les posts d'une Liste, et `article` lit
l'Article X contenu dans un post. Les modes pour un seul post sont `replies`,
`quotes`, `thread`, `retweeters` et `favoriters`.

`profileTweets` suit l'onglet Posts du profil sur X. Il renvoie les posts du
compte, ses reposts et ses réponses à ses propres posts. Les lignes arrivent par
ordre de date. L'Actor retire les réponses à d'autres comptes avant la
facturation. Il retire aussi le contexte de conversation venant d'autres
auteurs.

Pour avoir seulement les posts originaux, excluez les types dont vous ne voulez
pas :

```json
{
  "mode": "profileTweets",
  "twitterHandles": ["apify"],
  "tweetTypes": { "excludeReplies": true, "excludeRetweets": true },
  "maxItems": 100
}
```

`tweetTypes.excludeReplies`, `excludeRetweets` et `excludeQuotes` fonctionnent
sur chaque source. Une recherche les envoie à X sous la forme `-filter:replies`,
`-filter:nativeretweets` et `-filter:quote`. Sur un profil ou une Liste, l'Actor
retire lui-même ces lignes. Les lignes exclues n'atteignent jamais le dataset,
donc vous ne les payez jamais. Elles ne comptent jamais non plus dans
`maxItems`.

`profileReplies` suit l'onglet Réponses de X. Il renvoie les posts et les
réponses du compte lui-même. L'Actor exclut le contexte de conversation venant
d'autres auteurs. Utilisez `filter:replies` ou une recherche `to:` pour avoir
seulement des réponses.

La recherche et les modes de post paginés acceptent `time.since`, `time.until`,
les horodatages Unix et `lang`. Ces modes incluent les onglets Posts, Réponses,
Médias et J'aime du profil, les Listes, les réponses, les citations et les
discussions. Les opérateurs de date plats équivalents fonctionnent aussi.
L'Actor vérifie chaque ligne avant la facturation. La borne de date basse est
incluse. La borne haute est exclue. Les filtres de date excluent les lignes sans
date utilisable. Les filtres de langue excluent les langues absentes ou
différentes. Les lignes filtrées n'entament jamais votre limite de résultats.

La même date pour `since` et `until` donne une fenêtre vide. Réglez `until` sur
le jour suivant pour avoir 1 jour complet. Les runs de Liste avec une fenêtre de
dates atteignent vite les jours plus anciens. Ils s'arrêtent dès qu'ils
dépassent votre borne basse. Une fenêtre très ancienne dans une Liste peut
manquer quelques réponses. Les filtres de post ne s'appliquent pas aux listes
d'utilisateurs ni aux consultations directes de post ou d'Article.

`time.withinTime` et `within_time` fonctionnent dans les mêmes modes. La valeur
`7d` garde les 7 derniers jours avant que le run commence à lire. Une fenêtre
qui remonte avant 2006 garde tous les posts.

`mode: "replies"` est plus strict. Chaque ligne de post a un `inReplyToId` égal
à l'ID du post demandé. Les réponses imbriquées de la conversation ne comptent
jamais comme des réponses directes. Si X affiche moins de réponses qu'il n'en
annonce, l'Actor garde les lignes trouvées. Il ajoute 1 enregistrement
`replies-incomplete` dans `diagnostics` quand votre limite n'est pas atteinte.
Le run reste partiel jusqu'à atteindre votre limite ou jusqu'à ce que X n'ait
plus de réponses. `replyCoverage` donne les compteurs de réponses et les détails
de couverture. Réglez `maxItems` sur le total voulu, même au-delà de 25 000 pour
une seule cible de réponses.

Les lignes d'Article incluent `resultType: "article"`, `sourceTweetId`,
`article` et un `author` optionnel. Les lignes d'utilisateurs en mode engagement
incluent `resultType: "user"`, `sourceTweetId` et `engagementMode`.

Le mode `retweeters` fonctionne comme un mode d'engagement public normal. Le
mode `favoriters` est fourni sans garantie. X peut montrer les comptes qui ont
aimé seulement sur les posts éligibles ou visibles par leur auteur. Les J'aime
d'un profil sont aussi fournis sans garantie, car beaucoup de profils publics
n'ont pas d'onglet J'aime lisible. Si X ne montre ni utilisateurs ni posts
aimés, l'Actor écrit un enregistrement `diagnostics` gratuit. Les lignes de post
peuvent porter le nombre de signets. X ne montre pas quels comptes ont ajouté un
post à leurs signets.

### Exporter des lignes CSV plates

Gardez les champs JSON imbriqués par défaut, ou ajoutez des colonnes adaptées
aux tableurs :

```json
{ "searchTerms": ["from:nasa moon"], "maxItems": 100, "outputPreset": "flat" }
```

La sortie plate garde `author` et `media` intacts. Elle ajoute des champs de
premier niveau comme `authorUsername`, `authorName`, `authorFollowers`,
`tweetUrl`, `twitterUrl`, `mediaUrls`, `imageUrls` et `videoUrls`.

Chaque ligne de post plate porte `media`. Un post sans médias a une liste vide.
Chaque ligne a donc les mêmes clés dans un tableur ou un pipeline typé.

### Choisir les noms de champs

Les noms de champs historiques sont le défaut. Choisissez un style pour les
résultats `rich` ou `raw` :

```json
{
  "searchTerms": ["from:nasa moon"],
  "maxItems": 100,
  "outputVariant": "rich",
  "fieldStyle": "snake_case"
}
```

Utilisez `camelCase` ou `snake_case` pour les champs de premier niveau et les
champs imbriqués. La sortie plate en snake case inclut des champs comme
`author_username` et `media_urls`. Les instantanés sûrs de la source sous `raw`
gardent leurs clés d'origine. Les noms source en conflit restent aussi inchangés
pour éviter toute perte de données.

Les diagnostics historiques utilisent `resultType`, `actorVersion` et
`replyCoverage`. Les sorties `rich` et `raw` appliquent `fieldStyle` à chaque
niveau d'imbrication. Par exemple, le snake case utilise `result_type`,
`actor_version` et `reply_coverage`. La vue de dataset Overview fonctionne avec
les 2 styles. Choisissez la vue de la Console qui correspond au `fieldStyle` du
run. `camelCase fields` attend `camelCase`. `snake_case fields` attend
`snake_case`. Les vues choisissent seulement les colonnes. Elles ne renomment
jamais les données stockées ou exportées.

### Combiner des filtres avancés

Combinez des filtres d'utilisateur, de date, de lieu, de médias et
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

Réglez `queryType: "Latest + Top"` pour lancer les 2 modes de recherche X dans 1
run. L'Actor retire les doublons avant la facturation et remplit votre limite à
partir des 2 modes. `Top` trie par pertinence et ne renvoie pas tous les
résultats. Réglez `includeSearchTerms: true` pour joindre chaque requête
correspondante dans un champ `searchTerm`.

Quand vous réglez `lang`, l'Actor vérifie la langue de chaque post renvoyé. Il
ignore les posts dans une autre langue et continue de lire pour trouver des
posts conformes.

## Exemples de tâches

Choisissez parmi 50 tâches publiques. Chacune a une entrée limitée et une vue de
dataset adaptée. Chaque tâche s'ouvre sur une vraie recherche ou une vraie
cible. Modifiez-la avant de la lancer.

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
- [Collect electric vehicle conversations](https://apify.com/xquik/x-tweet-scraper/examples/collect-electric-vehicle-conversations)

## Combien coûte le scraping de tweets ?

X Tweet Scraper de Xquik coûte $0.00015 par ligne livrée sur chaque plan Apify.
Apify facture l'usage de votre plateforme à part. Xquik facture une fois par
ligne de données livrée. Les diagnostics sont gratuits dans la sortie
`diagnostics`.

- Vous n'avez besoin d'aucun abonnement Xquik.
- Vous ne payez pas de frais de démarrage ni de requête. Les URL et les
  consultations d'un seul post ne coûtent rien de plus.
- Les filtres et la déduplication passent avant la facturation. Vous ne payez
  jamais les lignes filtrées ou en double.
- Les runs sans entrée, avec une entrée invalide ou sans sortie écrivent 1
  enregistrement exploitable dans la sortie gratuite `diagnostics`.

Un run qui rencontre un problème, ou un gros run, écrit aussi un enregistrement
`run-report`. Son `estimatedChargeUsd` utilise le prix pay-per-event en vigueur
chez Apify. Les runs qui rencontrent un problème écrivent toujours `run-report`,
y compris les sorties sans entrée ou avec une entrée invalide. Un petit run sans
problème ne l'écrit pas et réduit l'usage Apify. Activez `alwaysSaveRunRecords`
pour l'écrire à chaque run. Les rapports de run séparent les lignes de données
dans `realRows` des diagnostics dans `diagnosticRows`.

Pour plafonner ce qu'un run peut dépenser, voir les
[options de run](#options-de-run).

## Benchmark

X Tweet Scraper de Xquik a battu 11 autres Actors de posts sur le coût et la
vitesse. Sa ligne médiane avait 63 champs, soit 2x la médiane des autres.

| Actor                                                             | Tweets utiles | Coût par tweet utile | Tweets utiles par seconde | Champs par ligne | Run public                                                           |
| ----------------------------------------------------------------- | ------------: | -------------------: | ------------------------: | ---------------: | -------------------------------------------------------------------- |
| xquik/x-tweet-scraper                                             |           882 |            $0.000177 |                      27.0 |               63 | [Voir le run](https://console.apify.com/view/runs/JJfsKql7EdiXsSX3T) |
| xquik/x-tweet-scraper                                             |           868 |            $0.000179 |                      27.4 |               63 | [Voir le run](https://console.apify.com/view/runs/58ye04whvCP63nmmW) |
| xquik/x-tweet-scraper                                             |           869 |            $0.000179 |                      25.8 |               63 | [Voir le run](https://console.apify.com/view/runs/ytoTpYCca2MShp4gh) |
| xquik/x-tweet-scraper                                             |           879 |            $0.000177 |                      29.1 |               63 | [Voir le run](https://console.apify.com/view/runs/CrJLYvAIG0Ji666rr) |
| scrapesmith/twitter-x-scraper-tweets-profiles-replies             |           813 |            $0.000185 |                      10.5 |               36 | [Voir le run](https://console.apify.com/view/runs/mIT1zf0xccCsYWO1E) |
| scrapesmith/twitter-x-scraper-tweets-profiles-replies             |           805 |            $0.000187 |                      10.6 |               36 | [Voir le run](https://console.apify.com/view/runs/p1MUeElsamZUepTpm) |
| scrapesmith/twitter-x-scraper-tweets-profiles-replies             |           805 |            $0.000187 |                      10.7 |               36 | [Voir le run](https://console.apify.com/view/runs/pQlQa0GMm7BWTUUOB) |
| kaitoeasyapi/twitter-x-data-tweet-scraper-pay-per-result-cheapest |           880 |            $0.000250 |                       9.1 |               46 | [Voir le run](https://console.apify.com/view/runs/3Fn8yvqncsWdcw1I2) |
| scraper_one/x-posts-search                                        |           804 |            $0.000314 |                       3.3 |               14 | [Voir le run](https://console.apify.com/view/runs/M9TgeCLLKZlNTOrj0) |
| danek/twitter-scraper                                             |           807 |            $0.000347 |                       5.0 |               27 | [Voir le run](https://console.apify.com/view/runs/kyeJqCeaARxQPGM5W) |
| tweetapi/twitter-x-search-scraper                                 |           337 |            $0.000374 |                       2.6 |               28 | [Voir le run](https://console.apify.com/view/runs/mxkP8EDAUVtCZdobb) |
| api-ninja/x-twitter-advanced-search                               |           837 |            $0.000430 |                       7.4 |               28 | [Voir le run](https://console.apify.com/view/runs/XAWKinvZyPNjCwrib) |
| apidojo/twitter-scraper-lite                                      |           251 |            $0.000494 |                      12.9 |               54 | [Voir le run](https://console.apify.com/view/runs/1t4XwmbQNTtwMJ0Ta) |
| apidojo/tweet-scraper                                             |           481 |            $0.000832 |                       7.8 |               55 | [Voir le run](https://console.apify.com/view/runs/PydoBgS1YRblg29bB) |
| xtdata/twitter-x-scraper                                          |          1378 |            $0.001168 |                      11.9 |               67 | [Voir le run](https://console.apify.com/view/runs/U91dRXEvKvqu41aop) |
| seemuapps/x-tweet-scraper                                         |           805 |            $0.001242 |                       6.9 |               24 | [Voir le run](https://console.apify.com/view/runs/FstursEw43TbcipYU) |
| maximedupre/twitter-scraper                                       |            46 |            $0.002846 |                       0.3 |               31 | [Voir le run](https://console.apify.com/view/runs/Hs8irhEcAfWcQNc4w) |

Chaque Actor a lancé la même recherche avec les mêmes filtres le 2026-09-27.
Tous les runs ont utilisé le niveau Bronze. Un tweet utile est un post original
unique en anglais avec 10+ likes. Le coût est la dépense totale du client par
tweet utile. Le nôtre inclut l'usage Apify que payent nos clients. Champs par
ligne est la médiane des champs non vides, champs imbriqués compris. Une liste
compte comme 1 champ. Ouvrez un run pour voir son entrée, son log & son dataset.

## Runs vides, partiels et arrêtés

X Tweet Scraper de Xquik explique gratuitement les runs vides, partiels et
arrêtés. Le statut du run dit pourquoi il s'est arrêté. Il compte aussi les
résultats facturés et les cibles lues.

### Résultats vides

Vérifiez un résultat vide avant de payer un autre run. L'objet `filtering` des
rapports et des diagnostics finaux compte les lignes retirées par vos filtres.
Lisez `serverFilteredRows`, `actorFilteredRows` et
`pagesWithUnknownServerFiltering`. Vous ne payez jamais de frais de résultat
pour les lignes filtrées.

Un run peut finir sous votre limite quand X n'a plus de résultats. Il indique
`outcome: "complete"` avec `completionReason: "source_exhausted"`. Les runs
interrompus gardent leur résultat partiel et leurs conseils de relance.

### Runs partiels

`failedSubtargets` compte les requêtes et les cibles de profil arrêtées après
une erreur. Les lignes livrées restent dans le dataset et comptent dans la
facturation. Une erreur ne signifie jamais que la cible est introuvable. Ces
runs utilisent `completionReason: "partial_failure"`.

Un run interrompu écrit aussi un diagnostic `partial` gratuit. Les résultats
déjà livrés restent intacts. Le diagnostic indique `availableResults`,
`failedTargets`, `retryable` et `nextAction`. Une sortie réussie de l'Actor
confirme la livraison. Elle ne confirme pas une extraction complète.

### Causes d'arrêt

Le texte de statut nomme chaque cause de l'arrêt. Un run avec un compte
introuvable et une recherche bloquée cite les 2. `stopCauses` liste chaque cause
avec ses propres `message`, `retryable` et `nextAction`. Les causes sont
`target_not_found`, `target_protected`, `search_unavailable`, `likes_hidden`,
`target_failed`, `pagination_safety_limit`, `reply_reach` et
`deadline_reached`. Le run est `retryable` dès qu'une cause l'est.

### Cibles introuvables et indisponibles

Une cible introuvable ou protégée n'est pas un échec. X n'a rien à renvoyer pour
elle. Le run lit toutes les autres cibles jusqu'au bout. Il indique
`outcome: "complete"`. Sa raison d'achèvement vient des cibles lues, par exemple
`source_exhausted`. `failedSubtargets` ne compte pas ces cibles. Le texte de
statut et un diagnostic `complete` gratuit les comptent. Un run sans autre ligne
écrit plutôt un diagnostic `zero-output`.

Une recherche que X ne peut pas lancer compte comme un échec. X.com affiche
"Something went wrong" pour une telle recherche. Le run l'arrête tout de suite,
sans nouvel essai. Les J'aime que X masque comptent aussi comme des échecs et
s'arrêtent tout de suite. X montre qui a aimé un post seulement à son auteur. Il
montre les posts aimés d'un compte seulement à ce compte.

Quand tous les échecs concernent des cibles indisponibles, les diagnostics
indiquent `retryable: false`. Vérifiez les URL ou les noms d'utilisateur des
cibles et choisissez des comptes publics disponibles. Resserrez une recherche
que X ne peut pas lancer ou changez ses filtres. Lisez les comptes qui ont
reposté, les réponses ou les posts au lieu des J'aime masqués. Les autres échecs
gardent des conseils de relance pour les cibles inachevées.

Le diagnostic nomme ces cibles dans `unavailableTargets`. Chaque entrée a la
`target` telle que vous l'avez saisie, une `reason` et une `nextAction`. La
raison est `not_found`, `protected`, `search_unavailable` ou `likes_hidden`. Une
entrée de recherche peut aussi avoir un `fix`, par exemple l'opérateur à
retirer. La liste contient jusqu'à 100 entrées. Retirez ces cibles de votre
entrée.

### Limites de sécurité et de temps

`completionReason: "pagination_safety_limit"` n'est pas un échec de lecture. Le
run a gardé ses lignes valides. Il a ensuite arrêté une cible qui ne renvoyait
plus de nouveaux résultats. Le run signale une extraction incomplète.
`failedSubtargets` reste à `0`. Vous payez seulement les lignes livrées.

Le timeout Apify par défaut est `0`, donc les runs n'ont pas de limite de temps.
L'Actor continue jusqu'à votre plafond ou jusqu'à la fin des données éligibles.
Vous pouvez quand même régler un timeout Apify.
`completionReason: "deadline_reached"` signifie alors que cette limite approche.
L'Actor enregistre les lignes et le rapport, puis s'arrête proprement avant la
limite. Vous payez une seule fois chaque ligne livrée.

## Entrée

L'onglet Input liste chaque option. Donnez au moins 1 champ parmi `startUrls`,
`twitterHandles`, `listIds`, `tweetIds`, `searchTerms` ou `twitterContent`.
Leurs alias documentés fonctionnent aussi. Tous les autres champs sont
facultatifs.

Exemples :

- Collez une URL de post dans Start URLs.
- Collez une URL de profil, ou ajoutez le nom d'utilisateur dans X handles.
- Utilisez `from:user since:YYYY-MM-DD until:YYYY-MM-DD` comme terme de
  recherche pour rattraper l'historique d'un compte.
- Collez une URL de Liste dans Start URLs.
- Combinez `twitterContent` avec des filtres comme `from:`, `since:`,
  `min_faves:` et `filter:media` pour des recherches avancées.

### Principaux opérateurs de recherche pris en charge

| Opérateur              | Exemple                | Rôle                                     |
| ---------------------- | ---------------------- | ---------------------------------------- |
| `from:`                | `from:elonmusk`        | Seulement les posts de cet utilisateur   |
| `to:`                  | `to:OpenAI`            | Seulement les réponses à cet utilisateur |
| `@`                    | `@nasa`                | Posts qui mentionnent cet utilisateur    |
| `list:`                | `list:123456`          | Posts des membres de la Liste            |
| `lang:`                | `lang:en`              | Filtrer par langue                       |
| `since:` / `until:`    | `since:2026-01-01`     | Plage de dates                           |
| `min_faves:`           | `min_faves:100`        | Seuil d'engagement                       |
| `min_retweets:`        | `min_retweets:50`      | Seuil de reposts                         |
| `filter:media`         | `filter:media`         | Opérateur de recherche X pour les médias |
| `filter:videos`        | `filter:videos`        | Opérateur de recherche X pour les vidéos |
| `filter:images`        | `filter:images`        | Opérateur de recherche X pour les images |
| `filter:links`         | `filter:links`         | Seulement les posts avec des liens       |
| `filter:replies`       | `filter:replies`       | Seulement les réponses                   |
| `filter:quote`         | `filter:quote`         | Seulement les citations                  |
| `filter:blue_verified` | `filter:blue_verified` | Seulement les utilisateurs Premium       |

X ne prend plus en charge `filter:vine`, `filter:consumer_video`,
`filter:pro_video`, `filter:news` ni `retweets_of:` dans la recherche. Une
recherche qui en contient un s'arrête tout de suite. Un diagnostic gratuit
indique la correction. Limitez chaque requête à 512 caractères. X ne cherche pas
au-delà.

Les fenêtres de dates incluent la borne basse et excluent la borne haute.
L'Actor vérifie les 2 bornes avant d'ajouter ou de facturer chaque post.

Pour la liste complète des opérateurs, voir
[Twitter Advanced Search](https://github.com/igorbrigadir/twitter-advanced-search).

### Migrer depuis un autre Actor de posts

Collez l'entrée que vous utilisez déjà. X Tweet Scraper de Xquik lit les noms de
champs des autres Actors de posts. Il les fait correspondre à ses propres
champs. Les noms canoniques restent la norme documentée. Un alias ne supprime
jamais un champ et ne change jamais ce que vous payez. Le formulaire d'entrée
liste seulement les champs canoniques, pour rester court. Les alias fonctionnent
dans les entrées JSON, API, SDK, d'automatisation et de tâches enregistrées.

| Champ que vous utilisez déjà                                                                                                                                           | Xquik le lit comme                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `startUrls`, `urls`, `tweetUrls`, `postUrls`, `profileUrls`, `accountUrls`                                                                                             | `startUrls`                                                              |
| `profileUrl`, en une seule chaîne                                                                                                                                      | `startUrls`                                                              |
| `tweetIds`, `tweetIDs`, `tweets`, `postIds`, `lookupPostIds`, `tweet_ids`, ou `tweetId` en une seule chaîne                                                            | `tweetIds`                                                               |
| `twitterHandles`, `usernames`, `user_names`, `userNameList`, `handles`, `screenNames`, `profileTweets`                                                                 | `twitterHandles`                                                         |
| `username`, `handle`, `screenName`, en une seule chaîne                                                                                                                | `twitterHandles`                                                         |
| `searchTerms`, `searchQueries`, `queries`, `search`, en liste ou une recherche par ligne                                                                               | `searchTerms`                                                            |
| `twitterContent`, `query`, `searchQuery`                                                                                                                               | `twitterContent`                                                         |
| `maxItems`, `maxResults`, `max_results`, `resultsLimit`, `count`, `resultsCount`, `numberOfTweets`, `maxPosts`, `max_posts`, `max_items`, `maxTweets`, `tweetsDesired` | `maxItems`                                                               |
| `sort`                                                                                                                                                                 | `queryType`                                                              |
| `tweetLanguage`, `language`                                                                                                                                            | `lang`                                                                   |
| `author`, `inReplyTo`, `mentioning`                                                                                                                                    | `from`, `to`, `@`                                                        |
| `start`, `startDate`, `end`, `endDate`                                                                                                                                 | `since`, `until`                                                         |
| `minimumRetweets`, `minimumFavorites`, `minimumReplies`                                                                                                                | `min_retweets`, `min_faves`, `min_replies`                               |
| `onlyImage`, `onlyVideo`, `onlyQuote`, `onlyTwitterBlue`                                                                                                               | `filter:images`, `filter:videos`, `filter:quote`, `filter:blue_verified` |
| `geotaggedNear`, `withinRadius`                                                                                                                                        | `near`, `within`                                                         |
| `quickDateRange` de Google Search Scraper, comme `d7`, `w2`, `m1` ou `y`                                                                                               | `since_time`, compté à rebours depuis le début du run                    |

Comportement d'une entrée collée :

- Chaque source s'exécute. Une entrée avec des URL, des noms d'utilisateur, des
  termes de recherche, des ID de Liste et des ID de post les lance toutes.
  `maxItems` s'applique sur tout le run.
- Une requête de recherche à côté de `searchTerms` s'exécute comme 1 terme de
  plus.
- Une URL de profil écrite `x.com/@name` se lit comme `x.com/name`.
- Si vous réglez un alias et son champ canonique, la valeur canonique l'emporte.
  Le log du run nomme l'alias écarté.
- Le log du run nomme chaque champ que l'Actor ignore, comme
  `customMapFunction`. L'Actor n'écarte jamais un champ en silence.
- Un plafond de lignes doit être un nombre entier de 1 ou plus.
  `maxResults: 0` arrête le run avant toute lecture ou facturation.
- `quickDateRange: "m1"` lit le dernier mois, quelle que soit la source. Les
  mois et les années se comptent à rebours sur le calendrier. Sans h, d, w, m ou
  y, le run s'arrête avant toute lecture ou facturation.
- L'Actor n'a pas d'unité de page. Remplacez `maxPages` par `maxItems`.
- L'Actor n'a pas de champ d'ID utilisateur. Envoyez des noms d'utilisateur ou
  des URL de profil au lieu de `userId` ou `user_ids`.
- Les champs d'opérateurs de recherche comme `from`, `min_faves`, `since_time`
  et `filter:images` utilisent déjà les noms de X. Ils n'ont besoin d'aucune
  correspondance.

### Saisie dans la Console et via l'API

Le formulaire de la Console a ces contrôles :

- Mode, Output Variant, Field Style, Output Preset et Sort By sont des listes
  déroulantes validées.
- Start URLs et Profile URLs acceptent des chaînes ou des objets
  `{ "url": "..." }`. Leurs éditeurs JSON gardent les 2 formats de l'API.
- Les filtres structurés proposent des contrôles groupés, donc vous n'avez pas
  besoin de JSON imbriqué.
- Le formulaire masque les opérateurs plats qu'un groupe de filtres couvre déjà.
  Les entrées JSON, API, SDK, d'automatisation et de tâches enregistrées les
  acceptent toujours.
- Max Items et Max Items Per Target acceptent des nombres entiers de 1 ou plus.
  Les seuils d'engagement acceptent des nombres entiers de 0 ou plus.

Utilisez les champs canoniques dans les nouvelles intégrations. Les alias du
tableau de migration ci-dessus restent disponibles. `includeRaw` est un alias de
`outputVariant: "raw"`. Les anciennes valeurs d'`outputVariant`, comme `compact`
et `full`, fonctionnent toujours comme sortie Legacy. Le formulaire les marque
comme alias Legacy.

## Sortie

Chaque ligne de post est un objet JSON avec les métadonnées que X rend
disponibles. Les schémas du dataset et du run-report donnent à chaque champ un
titre, une description et un exemple. Les agents IA peuvent les lire sans
deviner le sens d'un champ.

Les valeurs sont des exemples. Vos runs renvoient les données en direct de X.

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

Exportez le dataset en JSON, CSV, Excel ou HTML.

## Options de run

- Réglez le coût total maximal d'Apify pour plafonner le coût du run. Laissez
  `maxItems` vide pour obtenir le plus de lignes possible dans ce budget. Réglez
  `maxItems` si vous voulez moins de posts.
- Réglez `maxTotalChargeUsd` dans l'API Apify, ou Max cost per run dans la
  Console. Apify transmet cette limite à l'Actor sous la forme
  `ACTOR_MAX_TOTAL_CHARGE_USD`. L'Actor la convertit en nombre maximal de lignes
  facturables.
- Passez `tweetIds` pour consulter de nombreux posts d'un coup. Collez une URL
  de profil pour lire les posts d'un compte.
- Avec de nombreuses requêtes, réglez `includeSearchTerms: true` pour marquer
  chaque résultat avec son terme de recherche.
- Réglez `queryType: "Latest + Top"` pour lancer les 2 modes de recherche X dans
  1 run. La déduplication et les plafonds de résultats s'appliquent aux 2.
- Utilisez les moniteurs de compte ou de mot-clé de Xquik pour des vérifications
  à la seconde et des webhooks signés. Les moniteurs actifs vérifient toutes
  les secondes.

### Utilisez toujours la dernière build

Choisissez `latest` pour chaque run afin d'obtenir chaque correctif publié.

Si vous ne choisissez aucune build, Apify lance X Tweet Scraper de Xquik sur sa
build `latest` par défaut. Les runs de la Console et les exemples d'API standard
héritent de ce défaut.

Les tâches enregistrées peuvent remplacer ce défaut. Les planifications et les
intégrations de tâches reprennent ce choix. Réglez chaque remplacement sur
`latest`.

Apify ne redirige pas les numéros de build exacts vers `latest`. Remplacez les
numéros figés par `latest`. Utilisez une build exacte seulement pour un retour
arrière temporaire ou pour reproduire un run.

Lisez la documentation d'Apify sur les
[tags de build](https://docs.apify.com/platform/actors/development/builds-and-runs/builds),
les
[options de run](https://docs.apify.com/platform/actors/running/runs-and-builds)
et les [tâches](https://docs.apify.com/platform/actors/running/tasks).

## Actors Xquik associés

Tous les Actors Xquik partagent le même moteur d'extraction, la même facturation
après filtrage et les mêmes diagnostics. Choisissez celui qui correspond aux
données dont vous avez besoin.

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

## Besoin de plus que du scraping ?

Xquik propose aussi 47 outils de tableau de bord, 129 opérations REST, des
webhooks signés et un serveur MCP.

- [Documentation de l'API](https://docs.xquik.com/introduction) : guides de
  l'API REST
- [Search Tweets API](https://docs.xquik.com/api-reference/x/search-tweets) :
  recherchez des posts via REST
- [Batch Tweets API](https://docs.xquik.com/api-reference/x/batch-tweets) :
  récupérez jusqu'à 100 posts par ID
- [User Tweets API](https://docs.xquik.com/api-reference/x/user-tweets) :
  obtenez le fil d'un utilisateur
- [Serveur MCP](https://docs.xquik.com/mcp/overview) : découvrez les outils pris
  en charge
- [Webhooks](https://docs.xquik.com/webhooks/overview) : livraison d'événements
  signés
- [GitHub](https://github.com/Xquik-dev/x-twitter-scraper) : code source et
  suivi des issues

## FAQ

### Ai-je besoin d'une clé API X ?

Non. Vous n'avez besoin ni de clé API X, ni de connexion, ni d'identifiants.

### Qu'est-ce qui limite un run ?

Votre limite d'éléments et votre limite de dépense Apify arrêtent le run. Les
limites de votre compte Apify et de la plateforme s'appliquent toujours.

### Quelle est sa vitesse ?

X Tweet Scraper de Xquik a livré de 25,8 à 29,1 posts utiles par seconde dans le
[benchmark](#benchmark). La durée dépend de votre entrée, du nombre de résultats
et de la disponibilité de X.

### Pourquoi une recherche Latest renvoie-t-elle des posts que l'onglet Récent de X n'affiche pas ?

X laisse certains posts correspondants hors de son onglet Récent. X Tweet
Scraper de Xquik renvoie aussi ces posts. Chaque post est un vrai résultat de
recherche X pour votre requête. Vous payez chaque post une seule fois.

### Quels opérateurs de recherche fonctionnent ?

La recherche avancée de X prend en charge les auteurs, les destinataires, les
mentions, les dates, l'engagement, les médias et le lieu. Voir les
[principaux opérateurs de recherche pris en charge](#principaux-opérateurs-de-recherche-pris-en-charge)
pour des exemples.

### Puis-je utiliser l'API Apify pour lancer cet Actor ?

Oui. L'[onglet API](https://apify.com/xquik/x-tweet-scraper/api) propose des
exemples en Python, JavaScript et cURL.

### Puis-je planifier des scrapings récurrents ?

Oui. Utilisez la [planification](https://docs.apify.com/platform/schedules)
intégrée d'Apify pour lancer X Tweet Scraper de Xquik selon un cron.

### Puis-je obtenir une solution sur mesure ?

Oui. Rendez-vous sur [xquik.com](https://xquik.com) ou lisez la
[documentation de l'API](https://docs.xquik.com/introduction) pour le tableau de
bord, l'API, le serveur MCP et les webhooks.

### Est-il légal de scraper des données X ?

X Tweet Scraper de Xquik collecte des champs publics de X. Les résultats peuvent
contenir des données personnelles. Assurez-vous d'avoir une finalité licite et
respectez les règles de protection des données qui s'appliquent à vous. En cas
de doute, demandez conseil à un juriste qualifié.

### Où trouver de l'aide ?

Ouvrez une issue dans l'onglet Issues de la page de l'Actor, ou sur
[GitHub](https://github.com/Xquik-dev/x-twitter-scraper/issues). Vous pouvez
aussi écrire à support@xquik.com avec l'ID du run.
