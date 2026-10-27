[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · **Français** · [Italiano](README.it.md)

[![Framer connecte Xquik MCP aux agents de codage](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Découvrez comment Framer utilise les scrapers Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
avec Claude Code, Codex, Cursor & d'autres outils, à partir de 6:07.

Xquik est le service de scraping X (Twitter) le plus rapide et le moins cher au
monde. Ses données X sont les plus complètes. X Tweet Scraper de Xquik collecte
les posts, les réponses, les profils, les Listes & les recherches avec plus de
50 filtres. Des benchmarks publics prouvent qu'il est le moins cher & le plus
rapide de 12 Actors de posts. Ses lignes portent 2x plus de champs que celles de
l'Actor médian, comme le montre le [benchmark ci-dessous](#benchmark). La
plupart des autres Actors Apify facturent avant de filtrer ou de dédupliquer.
Xquik facture seulement les résultats livrés, uniques et conformes à vos
filtres.

Scrapez les tweets de Twitter **à partir de $0.00015 par résultat livré sur
chaque plan Apify**, une alternative à l'API Twitter. Apify facture l'usage de
la plateforme à part. Vous n'avez besoin d'aucune connexion X, & vous ne payez
pas de frais de démarrage ni de requête. Conçu par Xquik.

> Xquik est un service tiers indépendant. Non affilié à X Corp. "Twitter" et "X"
> sont des marques déposées de X Corp.

## Que fait X Tweet Scraper ?

X Tweet Scraper de Xquik renvoie les posts, les métriques d'engagement, les
profils publics des auteurs & les médias. Il accepte des URL, des noms
d'utilisateur, des ID de Liste, des ID de post & des requêtes de recherche, avec
plus de 50 filtres.

### Cas d'usage

- Alimentez la recherche, l'enrichissement, l'analyse & l'entraînement d'IA avec
  le texte, les auteurs, les médias & les métriques des posts.
- Suivez le sentiment envers une marque dans les posts.
- Surveillez les posts des concurrents & les termes de votre secteur.
- Trouvez des prospects dans les conversations publiques.
- Collectez des datasets publics pour la recherche.
- Trouvez les posts à fort engagement public.

## Pourquoi utiliser X Tweet Scraper ?

- **Une recherche 13,6x plus rapide.** La recherche par mot-clé a été 13,6x plus
  rapide que le plus rapide de 4 autres Actors de tweets. La recherche filtrée a
  été 4,3x plus rapide, & le fil d'un utilisateur environ 3x. Le
  [benchmark](README.md#benchmark) a eu lieu le 2026-10-15 & le 2026-10-16.
- **Le coût le plus bas par tweet utile.** Il a coûté le moins par tweet utile
  dans les 3 tests du [benchmark](README.md#benchmark).
- **Plus de champs par tweet.** Sa ligne médiane de recherche par mot-clé avait
  67 champs. C'est 1,3x la médiane des autres Actors du [benchmark](README.md#benchmark).
- **Toutes les sources en 1 run.** Mélangez ID de post, noms d'utilisateur,
  Listes, recherches & URL dans 1 entrée. Réglez `mode` pour les réponses,
  citations, fils, mentions, retweeters ou articles.
- **Trouvez les meilleurs tweets de X.** `mode: "topTweets"` renvoie les tweets
  que X classe le plus haut pour 1 métrique, comme les vues. Limitez-les à un
  jour, une semaine ou un mois & à un pays.
- **Un code d'intégration pour chaque tweet.** `mode: "embed"` renvoie le HTML
  qui affiche un tweet sur votre site.
- **Aucun plafond d'ID de post.** Consultez autant d'ID de post que vous voulez
  en 1 run. Les lignes reviennent dans l'ordre de votre entrée. Votre limite de
  dépense & votre timeout s'appliquent toujours.
- **Latest & Top en 1 run.** Réglez `queryType` sur `Latest + Top` pour les deux
  ordres de recherche. Vous payez chaque tweet une seule fois.

### Résultats complets

- Les grandes plages de dates reviennent complètes & vite.
- Les recherches renvoient chaque résultat, quels que soient les opérateurs que
  vous combinez.
- L'historique d'un compte revient complet, anciens posts compris.
- Les posts de profil sans réponses gardent quand même les fils de l'auteur.
- Les lectures de profil incluent le post épinglé, marqué comme épinglé.
- Les listes de meilleurs tweets reviennent de façon fiable.
- Les pages filtrées reviennent pleines jusqu'à épuisement des résultats.
- Chaque résultat contient les données les plus complètes dont X dispose.

### Lignes exactes

- Les résultats de recherche contiennent chaque post qui correspond à votre
  requête & rien d'autre.
- La recherche de mots & d'expressions fonctionne dans toutes les langues &
  toutes les écritures.
- Les filtres de langue fonctionnent pour toutes les langues que X indique.
- Un post compte comme manquant seulement quand il a disparu.
- Les comptes protégés & les Listes privées reçoivent une réponse claire, pas
  une page vide.
- Les reposts portent le texte d'origine en entier.
- Chaque ID d'une ligne reste exact.
- Les mentions, liens, hashtags & passages mis en avant pointent vers le bon
  endroit du texte.
- Un compteur inconnu apparaît dans `unknownCounts` & jamais comme 0.
- Les badges de certification correspondent à ce qu'affiche `x.com`.
- Les lignes ne contiennent que des données publiques.
- Les recherches de citations renvoient chaque vraie citation & rien d'autre.
- Les exports de réponses contiennent seulement les réponses directes, dans un
  ordre vérifié.
- Les résultats du plus récent au plus ancien gardent le vrai ordre des dates
  d'une page à l'autre.
- Les recherches acceptent les requêtes telles que vous les taperiez sur X.
- Les recherches de lieux fonctionnent avec des noms en 6 langues.
- Une recherche impossible à lancer échoue aussitôt & dit comment la corriger.
- Une date a le même sens sous toutes ses formes courantes.
- Les recherches acceptent les bornes `since_id` & `max_id`.
- Les publicités & les contenus sponsorisés n'arrivent jamais dans vos lignes.

### Données à jour

- Les lectures continuent de fonctionner quand X déploie des changements.

### Vitesse

- Une page lente ne bloque pas votre run.
- Les recherches restent rapides sur les sujets très actifs.
- Chaque page suivante arrive vite.
- Les lectures se terminent dès que leurs lignes arrivent.
- Les appels d'Actor bloqués repartent d'eux-mêmes.

### Facturation juste

- Une entrée invalide ne coûte rien & vous dit quoi corriger.
- Un ID de post listé deux fois dans un lot se facture une seule fois.
- Les Actors facturent seulement les lignes livrées, uniques & conformes à vos
  filtres.
- Un run redémarré ne facture jamais deux fois.
- Les runs restent dans votre limite de dépense & écrivent quand même leurs
  diagnostics.
- Les petits runs se terminent par un conseil qui réduit le coût.

### Fiabilité

- Une erreur ponctuelle ne fait pas échouer votre run.
- La pagination reste cohérente d'une page à l'autre.
- La pagination ne tourne jamais en boucle.
- Un délai dépassé renvoie les lignes déjà trouvées, avec des diagnostics.
- Les Actors résistent aux courtes pannes de Xquik.
- Les runs d'Actor survivent aux redémarrages sans doublons.
- Une mauvaise ligne ne fait pas échouer tout un lot.
- Les runs arrêtés gardent leurs lignes & leur rapport.
- Un run qui ne peut pas démarrer explique quand même pourquoi.
- `stopCauses`, `failedSubtargets` & `unavailableTargets` détaillent les échecs
  partiels.
- Le support peut voir exactement ce qu'une requête ou un run a renvoyé.

### Conçu pour les agents

- Les Actors acceptent une entrée écrite pour d'autres Actors.
- La sortie est prête pour les tableurs, avec des colonnes plates & des totaux
  d'engagement.
- Chaque run indique pourquoi il s'est terminé & s'il faut réessayer.

### Données riches

- Les lignes de post portent le texte des Note Tweets, les modifications, les
  Notes de la Communauté, les libellés de portée & les contrôles de réponse.
- Les lignes portent les apps sources, le nombre de médias & les données de
  compte professionnel.
- Les médias arrivent avec leurs variantes, leur texte alternatif, leurs tailles
  & les motifs de disponibilité.
- Vous voyez quand chaque compte a reposté un post.
- Vous pouvez traduire les posts & les bios dans votre langue.

### Contrôles qualité

- Chaque champ que X affiche est fourni, omis exprès ou prouvé absent.
- Xquik teste chaque lecture en direct sur X.

## Quelles données X Tweet Scraper peut-il extraire ?

| Champ                  | Description                                                             |
| ---------------------- | ----------------------------------------------------------------------- |
| `id`                   | ID du post                                                              |
| `text`                 | Texte complet, y compris les Note Tweets jusqu'à 25k caractères         |
| `createdAt`            | Horodatage natif de X, en texte                                         |
| `likeCount`            | Nombre de J'aime                                                        |
| `retweetCount`         | Nombre de reposts                                                       |
| `replyCount`           | Nombre de réponses                                                      |
| `quoteCount`           | Nombre de citations                                                     |
| `viewCount`            | Nombre de vues                                                          |
| `bookmarkCount`        | Nombre de signets                                                       |
| `lang`                 | Langue du post                                                          |
| `url`                  | Lien direct vers le post                                                |
| `tweetUrl`             | Alias de l'URL du post en sortie plate                                  |
| `twitterUrl`           | URL `twitter.com` en sortie plate                                       |
| `author`               | Nom d'utilisateur, bio, site web & compteurs de l'auteur                |
| `authorUsername`       | Nom d'utilisateur de l'auteur en sortie plate                           |
| `authorFollowers`      | Nombre d'abonnés de l'auteur en sortie plate                            |
| `authorUrl`            | Site web de l'auteur en sortie plate, quand il existe                   |
| `authorDescription`    | Bio de l'auteur en sortie plate                                         |
| `authorCoverPicture`   | URL de la bannière de l'auteur en sortie plate                          |
| `authorPinnedTweetIds` | ID des posts épinglés de l'auteur en sortie plate                       |
| `media`                | Images, vidéos, GIF joints                                              |
| `mediaUrls`            | URL des médias en sortie plate                                          |
| `imageUrls`            | URL des images en sortie plate                                          |
| `videoUrls`            | URL des vidéos en sortie plate                                          |
| `entities`             | Hashtags, URL, mentions et horodatages vidéo                            |
| `displayTextRange`     | Plage de texte affichée par X, quand elle existe                        |
| `contentDisclosure`    | Métadonnées de divulgation, quand elles existent                        |
| `conversationControl`  | Règle de réponse et propriétaire public de la conversation              |
| `reactionContext`      | Post et utilisateur publics visés par une réaction                      |
| `subscriberBadge`      | Créateur auquel l'auteur de la réponse est abonné                       |
| `limitedActions`       | Restrictions et invites d'interaction publiques                         |
| `isLimitedReply`       | Indique si les réponses sont limitées                                   |
| `isNoteTweet`          | Indique s'il s'agit d'un Note Tweet (post long)                         |
| `isQuoteStatus`        | Indique si ce post en cite un autre                                     |
| `isRetweet`            | Indique si cette ligne est un repost, avec l'original joint             |
| `isPinned`             | Indique si l'auteur a épinglé ce post. Seulement dans les lignes plates |
| `isReply`              | Indique si ce post est une réponse                                      |
| `quoted_tweet`         | Objet du post cité (pour une citation)                                  |
| `conversationId`       | ID du fil ou de la conversation                                         |
| `resultType`           | Type de ligne pour les lignes riches, d'engagement & de diagnostic      |
| `sourceTweetId`        | ID du post source pour les modes article et engagement                  |
| `article`              | Données d'article structurées en `mode: "article"`                      |
| `translation`          | Traduction de X en `mode: "translation"`                                |
| `embed`                | HTML d'intégration & lien en `mode: "embed"`                            |

Les métadonnées de post optionnelles incluent `authorUnavailable`, `card`,
`cashtagAttachments`, `communityId`, `communityName`, `communityNote`, `edit`,
`exclusiveContent`, `noteTweet` & `postCta`. `isTranslatable`, `place`,
`possiblySensitive` & `viewState` gardent d'autres éléments de contexte public.
`previousCounts` garde l'engagement d'avant la modification. `tombstone` garde
les avis de visibilité. `unmentionedUserIds` liste les utilisateurs qui ont
quitté la conversation. Consultez OpenAPI pour les champs exacts.

Réglez `outputVariant: "rich"` pour obtenir le plus de données par ligne. Les
lignes riches ajoutent à la fin `hasCommunityNotes`, `quotedTweetPermalink`,
`unavailableAuthorId` & le `sourceUser` des médias. Les lignes Legacy restent
inchangées.

Les objets `author` imbriqués portent des champs de profil publics. Ils couvrent
l'identité, les compteurs, la certification, la disponibilité, les données
professionnelles & les biographies de profil.

Dans les lignes de repost, `isRetweet` vaut `true`. Leur `text` contient le post
d'origine en entier. `retweeted_tweet` contient le post d'origine avec son
auteur & ses compteurs.

Les lignes de post gardent aussi `type`, `source`, `inReplyToId`,
`inReplyToUserId`, `inReplyToUsername` & `retweeted_tweet`. Les posts cités &
repostés portent les mêmes champs à chaque niveau d'imbrication.

Les médias portent la disponibilité, les dimensions, les tags & les variantes
vidéo. Ils portent aussi les actions `watchNowUrl` & `visitSiteUrl`.

Les lignes n'incluent jamais d'état propre au compte qui consulte. L'Actor
retire les indicateurs d'abonnement, de blocage, de masquage, de signet, de
J'aime, de repost, de droit de modification & autres indicateurs de ce type. La
sortie brute les retire aussi.

## Comment utiliser X Tweet Scraper pour scraper des données de posts ?

Vous débutez sur Apify ?
[Créez d'abord un compte gratuit](https://console.apify.com/sign-up?fpr=xquik).
Le plan gratuit ne demande aucune carte bancaire & donne $5 à dépenser chaque
mois. À $0.00015 par ligne, $5 couvrent jusqu'à 33 000 lignes, hors usage de la
plateforme. Revenez ensuite ici & cliquez sur Try for free.

Suivez ces étapes dans Apify Console.

1. Ouvrez un [exemple de tâche](#exemples-de-tâches) ou l'onglet Input.
2. Ajoutez des URL, des noms d'utilisateur, des ID de post ou des termes de
   recherche.
3. Réglez `maxItems` & les filtres utiles.
4. Cliquez sur Start & attendez la fin du run.
5. Exportez le dataset en JSON, CSV, Excel ou HTML.

Chaque recette ci-dessous est une entrée complète pour 1 source. Choisissez
celle qui correspond à vos données.

### Coller des URL

Collez n'importe quel mélange d'URL de posts, de profils, de recherches ou de
Listes.

```json
{
  "startUrls": [
    { "url": "https://x.com/jack/status/20" },
    { "url": "https://x.com/nasa" },
    { "url": "https://x.com/search?q=AI%20lang%3Aen" },
    { "url": "https://x.com/i/lists/1748648376080666720" }
  ],
  "maxItems": 500
}
```

Les URL de posts renvoient ces posts, sans doublon & dans l'ordre de votre
entrée. Les URL de profil renvoient les posts du compte. Les URL de recherche
lancent leur requête. Les URL de Liste renvoient les posts de la Liste.
`maxItems` plafonne les résultats sur toutes les URL collées.

### Scraper de nombreux noms d'utilisateur

Les noms d'utilisateur servent de raccourci pour de nombreuses recherches
`from:username`.

```json
{ "twitterHandles": ["elonmusk", "nasa", "openai"], "maxItems": 100 }
```

Chaque nom d'utilisateur renvoie les posts de ce compte. L'Actor retire les
lignes en double avant la sortie & la facturation. Vous pouvez ajouter les noms
d'utilisateur avec ou sans `@`. Les noms d'utilisateur & les URL de profil
gardent les reposts, comme l'onglet Posts de X. Ils les gardent même avec des
dates ou des filtres. Réglez `tweetTypes.excludeRetweets` pour les retirer.

### Rechercher des posts

Mettez 1 ou plusieurs requêtes dans le champ Search terms.

```json
{
  "searchTerms": ["from:elonmusk AI", "#bitcoin lang:en"],
  "maxItems": 1000,
  "queryType": "Latest"
}
```

Avec `mode` réglé sur `tweet` ou `tweets` & sans ID de post, les requêtes
passent en recherche. Des `searchTerms` valides ne renvoient alors jamais une
consultation vide.

Vous pouvez aussi rattraper l'historique d'un compte par plages de dates, par
exemple `from:elonmusk since:2026-01-01 until:2026-01-02`. Chaque terme garde sa
propre attribution `searchTerm`. `maxItems` plafonne les résultats sur tous les
termes de recherche. L'Actor vérifie chaque post renvoyé par rapport aux
fenêtres `since:`, `until:` & en temps Unix. Les recherches filtrées continuent
de lire jusqu'à trouver des résultats conformes ou jusqu'à ce que X n'ait plus
de résultats.

Un terme de recherche `from:` renvoie ce que renvoie la recherche X, donc il
laisse de côté les reposts. Ajoutez `include:nativeretweets` pour les garder, ou
`filter:nativeretweets` pour avoir seulement les reposts.

### Retrouver des posts par ID

```json
{ "tweetIds": ["20", "2082577277246972300"], "maxItems": 100 }
```

Les résultats gardent l'ordre de votre entrée, retirent les doublons & incluent
seulement les posts demandés. La consultation accepte aussi `tweetId`,
`tweetIDs`, `tweets`, `postIds`, `lookupPostIds`, `tweetUrls` & `postUrls`.

Chaque entrée est un ID de post ou une URL de post. Le run ignore toute autre
entrée sans frais & lit le reste. Son statut compte les entrées ignorées & son
log les liste.

Mettez tous vos ID dans 1 run. Chaque run paie à Apify le même coût de
démarrage. Avec 1 ID par run, l'usage Apify ajoute environ $0.00008 à chaque
post. Avec 188 ID dans 1 run, il ajoute environ $0.000005. Un run de moins de 5
ID se termine par ce conseil.

### Modes engagement, fil & article

Réglez `mode` pour choisir ce que le run lit, quels que soient les autres champs
de l'entrée.

```json
{ "mode": "replies", "replyTweetIds": ["2082577277246972300"], "maxItems": 100 }
```

Les modes de post & de recherche sont `tweet`, `tweets` & `search`. Les modes de
profil sont `profileTweets`, `profileReplies`, `profileMedia`, `profileLikes` &
`profileMentions`. `listTweets` lit les posts d'une Liste, & `article` lit
l'article X contenu dans un post. Les modes pour un seul post sont `replies`,
`quotes`, `thread`, `retweeters`, `favoriters`, `translation` & `embed`.

`profileMentions` renvoie les posts qui mentionnent chaque nom d'utilisateur, du
plus récent au plus ancien.

```json
{ "mode": "profileMentions", "twitterHandles": ["nasa"], "maxItems": 100 }
```

`profileTweets` suit l'onglet Posts du profil sur X. Il renvoie les posts du
compte, ses reposts & ses réponses à ses propres posts. Les lignes arrivent par
ordre de date. L'Actor retire les réponses à d'autres comptes avant la
facturation. Il retire aussi le contexte de conversation venant d'autres
auteurs.

Pour avoir seulement les posts originaux, excluez les types dont vous ne voulez
pas.

```json
{
  "mode": "profileTweets",
  "twitterHandles": ["apify"],
  "tweetTypes": { "excludeReplies": true, "excludeRetweets": true },
  "maxItems": 100
}
```

`tweetTypes.excludeReplies`, `excludeRetweets` & `excludeQuotes` fonctionnent
sur chaque source. Une recherche les envoie à X sous la forme `-filter:replies`,
`-filter:nativeretweets` & `-filter:quote`. Sur un profil ou une Liste, l'Actor
retire lui-même ces lignes. Les lignes exclues n'atteignent jamais le dataset,
donc vous ne les payez jamais. Elles ne comptent jamais non plus dans
`maxItems`.

`profileReplies` suit l'onglet Réponses de X. Il renvoie les posts & les
réponses du compte lui-même. L'Actor exclut le contexte de conversation venant
d'autres auteurs. Utilisez `filter:replies` ou une recherche `to:` pour avoir
seulement des réponses.

La recherche & les modes de post paginés acceptent `time.since`, `time.until`,
les horodatages Unix & `lang`. Ces modes couvrent les onglets Posts, Réponses,
Médias et J'aime du profil, ainsi que les Listes, les réponses, les citations &
les fils. Les opérateurs de date plats équivalents fonctionnent aussi. L'Actor
vérifie chaque ligne avant la facturation. La borne de date basse est incluse.
La borne haute est exclue. Les filtres de date excluent les lignes sans date
utilisable. Les filtres de langue excluent les langues absentes ou différentes.
Les lignes filtrées n'entament jamais votre limite de résultats.

La même date pour `since` & `until` donne une fenêtre vide. Réglez `until` sur
le jour suivant pour avoir 1 jour complet. Les runs de Liste avec une fenêtre de
dates atteignent vite les jours plus anciens. Ils s'arrêtent dès qu'ils
dépassent votre borne basse. Une fenêtre très ancienne dans une Liste peut
manquer quelques réponses. Les filtres de post ne s'appliquent pas aux listes
d'utilisateurs ni aux consultations directes de post ou d'article.

`time.withinTime` & `within_time` fonctionnent dans les mêmes modes. La valeur
`7d` garde les 7 derniers jours avant que le run commence à lire. Une fenêtre
qui remonte avant 2006 garde tous les posts.

`mode: "replies"` est plus strict. Chaque ligne de post a un `inReplyToId` égal
à l'ID du post demandé. Les réponses imbriquées de la conversation ne comptent
jamais comme des réponses directes. Si X affiche moins de réponses qu'il n'en
annonce, l'Actor garde les lignes trouvées. Il ajoute 1 enregistrement
`replies-incomplete` dans `diagnostics` quand votre limite n'est pas atteinte.
Le run reste partiel jusqu'à atteindre votre limite ou jusqu'à ce que X n'ait
plus de réponses. `replyCoverage` donne les compteurs de réponses & les détails
de couverture. Réglez `maxItems` sur le total voulu, même au-delà de 25 000 pour
1 cible de réponses.

Les lignes d'article incluent `resultType: "article"`, `sourceTweetId`,
`article` & un `author` optionnel. Les lignes d'utilisateurs en mode engagement
incluent `resultType: "user"`, `sourceTweetId` & `engagementMode`.

Le mode retweeters fonctionne comme un mode d'engagement public normal. Le mode
favoriters est fourni sans garantie. X peut montrer les comptes qui ont aimé
seulement sur les posts éligibles ou visibles par leur auteur. Les J'aime d'un
profil sont aussi fournis sans garantie, car beaucoup de profils publics n'ont
pas d'onglet J'aime lisible. Si X ne montre ni utilisateurs ni posts aimés, le
statut du run l'indique. Les lignes de post peuvent porter le nombre de signets.
X ne montre pas quels comptes ont ajouté un post à leurs signets.

### Traduire des posts & obtenir le HTML d'intégration

`mode: "translation"` renvoie la traduction par X de chaque post. Réglez
`translateTo` sur un code de langue comme `en`, `es`, `pt-br` ou `zh-tw`. La
valeur par défaut est `en`.

```json
{
  "mode": "translation",
  "tweetIds": ["2082577277246972300"],
  "translateTo": "es"
}
```

Chaque ligne a `resultType: "translation"`, `sourceTweetId` & `translation`. Cet
objet contient `language`, `sourceLanguage`, `text` & `entities`.

`mode: "embed"` renvoie le HTML qui intègre chaque post sur un site web.

```json
{ "mode": "embed", "tweetIds": ["2082577277246972300"], "embedTheme": "dark" }
```

Chaque ligne a `resultType: "embed"`, `sourceTweetId` & `embed`. Cet objet
contient `url`, `authorName`, `authorUrl`, `html` & `width`. `embedHideMedia`,
`embedHideThread` & `embedOmitScript` retirent les médias, le post parent ou le
script du widget.

Les 2 modes acceptent des ID de post ou des URL de post dans `tweetIds`.
`startUrls` accepte aussi des URL de post. Chaque post donne 1 ligne au prix
habituel par ligne. Un post que X n'a pas ne donne aucune ligne & ne coûte rien.

### Obtenir les meilleurs posts de X

`mode: "topTweets"` renvoie les posts que X classe le plus haut selon 1
métrique, tels que la page Inspiration de X les montre.

```json
{
  "mode": "topTweets",
  "topMetric": "views",
  "topWindow": "week",
  "topCountry": "US",
  "maxItems": 100
}
```

`topMetric` vaut `likes`, `replies`, `quotes`, `bookmarks`, `shares` ou `views`.
La valeur par défaut est `likes`. `topWindow` vaut `day`, `week` ou `month`, &
vaut `day` par défaut. X liste jusqu'à 100 posts pour chaque choix. Laissez
`topCountry` vide pour tout X. Réglez `lang` pour garder 1 langue. Si les 2 sont
réglés, X choisit le pays & l'Actor garde la langue. Chaque ligne a
`engagementMode: "topTweets"` & coûte 1 résultat, comme tout post.

### Exporter des lignes CSV plates

Gardez les champs JSON imbriqués par défaut, ou ajoutez des colonnes adaptées
aux tableurs.

```json
{ "searchTerms": ["from:nasa moon"], "maxItems": 100, "outputPreset": "flat" }
```

La sortie plate garde `author` & `media` intacts. Elle ajoute des champs de
premier niveau comme `authorUsername`, `authorName`, `authorFollowers`,
`tweetUrl`, `twitterUrl`, `mediaUrls`, `imageUrls` & `videoUrls`.

Chaque ligne de post plate porte `media`. Un post sans médias a une liste vide.
Chaque ligne a donc les mêmes clés dans un tableur ou un pipeline typé.

### Choisir les noms de champs

Les noms de champs Legacy sont le défaut. Choisissez un style pour les résultats
riches ou bruts.

```json
{
  "searchTerms": ["from:nasa moon"],
  "maxItems": 100,
  "outputVariant": "rich",
  "fieldStyle": "snake_case"
}
```

Utilisez `camelCase` ou `snake_case` pour les champs de résultat de premier
niveau & imbriqués. La sortie plate en snake case inclut des champs comme
`author_username` & `media_urls`. Les instantanés sûrs de la source sous `raw`
gardent leurs clés source d'origine. Les noms source en conflit restent aussi
inchangés pour éviter toute perte de données.

Les diagnostics Legacy utilisent `resultType`, `actorVersion` & `replyCoverage`.
Les sorties riche & brute appliquent `fieldStyle` à chaque niveau d'imbrication.
Par exemple, le snake case utilise `result_type`, `actor_version` &
`reply_coverage`. La vue de dataset Overview fonctionne avec les 2 styles.
Choisissez la vue de la Console qui correspond au `fieldStyle` du run.
`camelCase fields` attend `camelCase`. `snake_case fields` attend `snake_case`.
Les vues choisissent seulement les colonnes. Elles ne renomment jamais les
données stockées ou exportées.

### Combiner des filtres avancés

Combinez des filtres d'utilisateur, de date, de lieu, de médias & d'engagement.

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
run. L'Actor retire les doublons avant la facturation & remplit votre limite à
partir des 2 modes. `Top` trie par pertinence & ne renvoie pas tous les
résultats. Réglez `includeSearchTerms: true` pour joindre chaque requête
correspondante dans un champ `searchTerm`.

Quand vous réglez `lang`, l'Actor vérifie la langue de chaque post renvoyé. Il
ignore les posts dans une autre langue & continue de lire pour trouver des posts
conformes.

## Exemples de tâches

Choisissez parmi 50 tâches publiques. Chacune a une entrée limitée & une vue de
dataset adaptée. Chaque tâche s'ouvre sur une vraie recherche ou une vraie
cible. Modifiez-la avant de la lancer.

- [Obtenez des posts X récents pour des agents IA](https://apify.com/xquik/x-tweet-scraper/examples/search-x-posts-for-ai-agents)
- [Créez un dataset X pour le RAG](https://apify.com/xquik/x-tweet-scraper/examples/build-x-rag-dataset)
- [Extrayez un article X pour le RAG](https://apify.com/xquik/x-tweet-scraper/examples/extract-x-article-for-rag)
- [Suivez votre visibilité dans la recherche IA sur X](https://apify.com/xquik/x-tweet-scraper/examples/monitor-ai-search-visibility-on-x)
- [Recherchez sur Twitter par date](https://apify.com/xquik/x-tweet-scraper/examples/search-twitter-by-date)
- [Découvrez des outils d'agents IA sur X](https://apify.com/xquik/x-tweet-scraper/examples/discover-ai-agent-tools-on-x)
- [Collectez des retours sur des produits d'IA](https://apify.com/xquik/x-tweet-scraper/examples/collect-ai-product-feedback)
- [Surveillez les mentions de marque sur X](https://apify.com/xquik/x-tweet-scraper/examples/monitor-brand-mentions-on-x)
- [Exportez des données Twitter en CSV](https://apify.com/xquik/x-tweet-scraper/examples/export-twitter-data-to-csv)
- [Collectez les réponses à un post d'OpenAI](https://apify.com/xquik/x-tweet-scraper/examples/collect-replies-to-an-openai-post)
- [Extrayez un fil Twitter complet](https://apify.com/xquik/x-tweet-scraper/examples/extract-complete-twitter-thread)
- [Collectez des conversations sur les véhicules électriques](https://apify.com/xquik/x-tweet-scraper/examples/collect-electric-vehicle-conversations)

## Combien coûte le scraping de tweets ?

X Tweet Scraper de Xquik coûte $0.00015 par ligne livrée sur chaque plan Apify.
Apify facture votre usage de la plateforme à part. Xquik facture une fois par
ligne de données livrée. Les diagnostics sont gratuits dans la sortie
`diagnostics`.

Pour plus de volume,
[choisissez un plan Apify](https://apify.com/pricing?fpr=xquik) avec plus
d'usage prépayé.

- Vous n'avez besoin d'aucun abonnement Xquik.
- Vous ne payez pas de frais séparés de démarrage ni de requête. Les URL & les
  consultations d'un seul post n'ajoutent pas de frais non plus.
- Les filtres & la déduplication passent avant la facturation. Vous ne payez
  jamais les lignes filtrées ou en double.
- Les runs sans entrée & ceux avec une entrée invalide écrivent 1 enregistrement
  exploitable dans la sortie gratuite `diagnostics`. C'est aussi le cas des runs
  qui s'arrêtent tôt, qui ignorent une cible, ou dont les propres filtres
  retirent toutes les lignes, comme `lang` sur la lecture d'un profil.
- Un run qui lit chaque cible sans récupérer aucune ligne n'écrit aucun
  enregistrement. Son statut indique pourquoi & ce qu'il faut changer. Les
  lignes que vos opérateurs de recherche excluent, comme `-is:retweet`,
  n'écrivent pas non plus d'enregistrement.

Un run qui rencontre un problème, ou un gros run, écrit aussi un enregistrement
`run-report`. Son `estimatedChargeUsd` utilise le prix pay-per-event en vigueur
chez Apify. Les runs qui rencontrent un problème écrivent toujours `run-report`,
y compris les sorties sans entrée ou avec une entrée invalide. Un petit run sans
problème ne l'écrit pas & réduit l'usage Apify. Activez `alwaysSaveRunRecords`
pour l'écrire à chaque run. Les rapports de run séparent les lignes de données
dans `realRows` des diagnostics dans `diagnosticRows`.

Pour plafonner ce qu'un run peut dépenser, consultez les
[options de run](#options-de-run).

## Benchmark

X Tweet Scraper de Xquik a battu 11 autres Actors de posts sur le coût & la
vitesse. Sa ligne médiane avait 63 champs, soit 2x la médiane des autres.

- `xquik/x-tweet-scraper` a livré 890 tweets utiles à $0.000175 par tweet utile,
  avec 39,2 par seconde & 63 champs par ligne.
  [Voir le run](https://console.apify.com/view/runs/fflWVxHwYvtyHpAQX)
- `xquik/x-tweet-scraper` a livré 883 tweets utiles à $0.000176 par tweet utile,
  avec 25,2 par seconde & 63 champs par ligne.
  [Voir le run](https://console.apify.com/view/runs/EtSdBgkUcH4M1uicf)
- `xquik/x-tweet-scraper` a livré 882 tweets utiles à $0.000177 par tweet utile,
  avec 25,7 par seconde & 63 champs par ligne.
  [Voir le run](https://console.apify.com/view/runs/SK3ZWhPwzGJYoYQba)
- `xquik/x-tweet-scraper` a livré 877 tweets utiles à $0.000178 par tweet utile,
  avec 26,9 par seconde & 63 champs par ligne.
  [Voir le run](https://console.apify.com/view/runs/JRdbcigkBMCaFuH1W)
- `scrapesmith/twitter-x-scraper-tweets-profiles-replies` a livré 813 tweets
  utiles à $0.000185 par tweet utile, avec 10,5 par seconde & 36 champs par
  ligne. [Voir le run](https://console.apify.com/view/runs/mIT1zf0xccCsYWO1E)
- `scrapesmith/twitter-x-scraper-tweets-profiles-replies` a livré 805 tweets
  utiles à $0.000187 par tweet utile, avec 10,6 par seconde & 36 champs par
  ligne. [Voir le run](https://console.apify.com/view/runs/p1MUeElsamZUepTpm)
- `scrapesmith/twitter-x-scraper-tweets-profiles-replies` a livré 805 tweets
  utiles à $0.000187 par tweet utile, avec 10,7 par seconde & 36 champs par
  ligne. [Voir le run](https://console.apify.com/view/runs/pQlQa0GMm7BWTUUOB)
- `kaitoeasyapi/twitter-x-data-tweet-scraper-pay-per-result-cheapest` a livré
  880 tweets utiles à $0.000250 par tweet utile, avec 9,1 par seconde & 46
  champs par ligne.
  [Voir le run](https://console.apify.com/view/runs/3Fn8yvqncsWdcw1I2)
- `scraper_one/x-posts-search` a livré 804 tweets utiles à $0.000314 par tweet
  utile, avec 3,3 par seconde & 14 champs par ligne.
  [Voir le run](https://console.apify.com/view/runs/M9TgeCLLKZlNTOrj0)
- `danek/twitter-scraper` a livré 807 tweets utiles à $0.000347 par tweet utile,
  avec 5,0 par seconde & 27 champs par ligne.
  [Voir le run](https://console.apify.com/view/runs/kyeJqCeaARxQPGM5W)
- `tweetapi/twitter-x-search-scraper` a livré 337 tweets utiles à $0.000374 par
  tweet utile, avec 2,6 par seconde & 28 champs par ligne.
  [Voir le run](https://console.apify.com/view/runs/mxkP8EDAUVtCZdobb)
- `api-ninja/x-twitter-advanced-search` a livré 837 tweets utiles à $0.000430
  par tweet utile, avec 7,4 par seconde & 28 champs par ligne.
  [Voir le run](https://console.apify.com/view/runs/XAWKinvZyPNjCwrib)
- `apidojo/twitter-scraper-lite` a livré 251 tweets utiles à $0.000494 par tweet
  utile, avec 12,9 par seconde & 54 champs par ligne.
  [Voir le run](https://console.apify.com/view/runs/1t4XwmbQNTtwMJ0Ta)
- `apidojo/tweet-scraper` a livré 481 tweets utiles à $0.000832 par tweet utile,
  avec 7,8 par seconde & 55 champs par ligne.
  [Voir le run](https://console.apify.com/view/runs/PydoBgS1YRblg29bB)
- `xtdata/twitter-x-scraper` a livré 1 378 tweets utiles à $0.001168 par tweet
  utile, avec 11,9 par seconde & 67 champs par ligne.
  [Voir le run](https://console.apify.com/view/runs/U91dRXEvKvqu41aop)
- `seemuapps/x-tweet-scraper` a livré 805 tweets utiles à $0.001242 par tweet
  utile, avec 6,9 par seconde & 24 champs par ligne.
  [Voir le run](https://console.apify.com/view/runs/FstursEw43TbcipYU)
- `maximedupre/twitter-scraper` a livré 46 tweets utiles à $0.002846 par tweet
  utile, avec 0,3 par seconde & 31 champs par ligne.
  [Voir le run](https://console.apify.com/view/runs/Hs8irhEcAfWcQNc4w)

Chaque Actor a lancé la même recherche & les mêmes filtres. Les autres Actors
ont tourné le 2026-09-27. Les runs de Xquik ont réglé `outputVariant: "rich"` &
ont tourné le 2026-09-29. Tous les runs ont utilisé le niveau Bronze. Un tweet
utile est un post original unique en anglais avec 10 J'aime ou plus. Le coût est
la dépense totale du client par tweet utile. Le nôtre inclut l'usage Apify que
payent nos clients. Champs par ligne est le nombre médian de champs non vides,
champs imbriqués compris. Une liste compte comme 1 champ. Ouvrez un run pour
voir son entrée, son log & son dataset.

## Runs vides, partiels & arrêtés

X Tweet Scraper de Xquik explique gratuitement les runs vides, partiels &
arrêtés. Le statut du run dit pourquoi il s'est arrêté. Il compte aussi les
résultats facturés & les cibles lues.

### Résultats vides

Vérifiez un résultat vide avant de payer un autre run. L'objet `filtering` des
rapports & des diagnostics finaux compte les lignes retirées par vos filtres.
Lisez `serverFilteredRows`, `actorFilteredRows` &
`pagesWithUnknownServerFiltering`. Vous ne payez jamais de frais de résultat
pour les lignes filtrées. Un run écrit 1 diagnostic avec ces compteurs quand les
propres filtres de l'Actor ont retiré des lignes (`actorFilteredRows`). Les
lignes que vos opérateurs de recherche excluent (`serverFilteredRows`), les
posts hors de votre fenêtre de temps & un run sans aucune ligne n'écrivent aucun
enregistrement. Le statut du run indique alors pourquoi & ce qu'il faut changer,
par exemple élargir la recherche.

Un run peut finir sous votre limite quand X n'a plus de résultats. Il indique
`outcome: "complete"` avec `completionReason: "source_exhausted"`. Les runs
interrompus gardent leur résultat partiel & leurs conseils de relance.

### Runs partiels

`failedSubtargets` compte les requêtes & les cibles de profil arrêtées après une
erreur. Les lignes livrées restent dans le dataset & comptent dans la
facturation. Une erreur ne signifie jamais que la cible est introuvable. Ces
runs utilisent `completionReason: "partial_failure"`.

Un run interrompu écrit aussi un diagnostic `partial` gratuit. Les résultats
déjà livrés restent intacts. Le diagnostic indique `availableResults`,
`failedTargets`, `retryable` & `nextAction`. Une sortie réussie de l'Actor
confirme la livraison. Elle ne confirme pas une extraction complète.

### Causes d'arrêt

Le texte de statut nomme chaque cause de l'arrêt. Un run avec un compte
introuvable & une recherche bloquée cite les 2. `stopCauses` liste chaque cause
avec ses propres `message`, `retryable` & `nextAction`. Les causes sont
`target_not_found`, `target_suspended`, `target_protected`,
`search_unavailable`, `likes_hidden`, `target_failed`,
`pagination_safety_limit`, `reply_reach` & `deadline_reached`. Le run est
`retryable` dès qu'une cause l'est.

### Cibles introuvables & indisponibles

Une cible introuvable ou protégée n'est pas un échec. X n'a rien à lire là. Le
run lit toutes les autres cibles jusqu'au bout. Il indique
`outcome: "complete"`. Sa raison d'achèvement vient des cibles lues, par exemple
`source_exhausted`. `failedSubtargets` ne compte pas ces cibles. Le texte de
statut & un diagnostic `complete` gratuit les comptent. Un run sans autre ligne
écrit plutôt un diagnostic `zero-output`.

Une recherche que X ne peut pas lancer compte comme un échec. X affiche
"Something went wrong" pour une telle recherche. Le run l'arrête tout de suite,
sans nouvel essai. Les J'aime que X masque comptent aussi comme des échecs &
s'arrêtent tout de suite. X montre qui a aimé un post seulement à son auteur. Il
montre les posts aimés d'un compte seulement à ce compte.

Quand tous les échecs concernent des cibles indisponibles, les diagnostics
indiquent `retryable: false`. Vérifiez les URL ou les noms d'utilisateur des
cibles & choisissez des comptes publics disponibles. Resserrez une recherche que
X ne peut pas lancer ou changez ses filtres. Lisez les comptes qui ont reposté,
les réponses ou les posts au lieu des J'aime masqués. Les autres échecs gardent
des conseils de relance pour les cibles inachevées.

Le diagnostic nomme ces cibles dans `unavailableTargets`. Chaque entrée a la
`target` telle que vous l'avez saisie, une `reason` & une `nextAction`. La
raison est `not_found`, `list_not_found`, `suspended`, `protected`,
`search_unavailable` ou `likes_hidden`. `list_not_found` signale une Liste que X
n'a pas trouvée. Elle est peut-être privée. Une entrée de recherche peut aussi
avoir un `fix`, par exemple l'opérateur à retirer. La liste contient jusqu'à 100
entrées. Retirez ces cibles de votre entrée.

### Limites de sécurité & de temps

`completionReason: "pagination_safety_limit"` n'est pas un échec de lecture. Le
run a gardé ses lignes valides. Il a ensuite arrêté une cible qui ne renvoyait
plus de nouveaux résultats. Le run signale une extraction incomplète.
`failedSubtargets` reste à `0`. Vous payez seulement les lignes livrées.

Le timeout Apify par défaut est `0`, donc les runs n'ont pas de limite de temps.
L'Actor continue jusqu'à atteindre votre plafond ou jusqu'à la fin des données
éligibles. Vous pouvez quand même régler un timeout Apify fini.
`completionReason: "deadline_reached"` signifie alors que cette limite approche.
L'Actor enregistre les lignes & le rapport, puis s'arrête proprement avant la
limite. Vous payez une seule fois chaque ligne livrée.

## Entrée

L'onglet Input liste chaque option. Donnez au moins 1 champ parmi `startUrls`,
`twitterHandles`, `listIds`, `tweetIds`, `searchTerms` ou `twitterContent`.
Leurs alias documentés fonctionnent aussi. Tous les autres champs sont
facultatifs.

Chacun de ces exemples suffit pour un run.

- Collez une URL de post dans Start URLs.
- Collez une URL de profil, ou ajoutez le nom d'utilisateur dans X handles.
- Utilisez `from:user since:YYYY-MM-DD until:YYYY-MM-DD` comme terme de
  recherche pour rattraper l'historique d'un compte.
- Collez une URL de Liste dans Start URLs.
- Combinez `twitterContent` avec des filtres comme `from:`, `since:`,
  `min_faves:` & `filter:media` pour des recherches avancées.

### Principaux opérateurs de recherche pris en charge

| Opérateur                | Exemple                   | Rôle                                        |
| ------------------------ | ------------------------- | ------------------------------------------- |
| `from:`                  | `from:elonmusk`           | Seulement les posts de cet utilisateur      |
| `to:`                    | `to:OpenAI`               | Seulement les réponses à cet utilisateur    |
| `@`                      | `@nasa`                   | Mentions de cet utilisateur                 |
| `list:`                  | `list:123456`             | Posts des membres de la liste               |
| `lang:`                  | `lang:en`                 | Filtrer par langue                          |
| `since:` / `until:`      | `since:2026-01-01`        | Plage de dates                              |
| `min_faves:`             | `min_faves:100`           | Seuil d'engagement                          |
| `min_retweets:`          | `min_retweets:50`         | Seuil de reposts                            |
| `filter:media`           | `filter:media`            | Opérateur de recherche X pour les médias    |
| `filter:videos`          | `filter:videos`           | Opérateur de recherche X pour les vidéos    |
| `filter:images`          | `filter:images`           | Opérateur de recherche X pour les images    |
| `filter:links`           | `filter:links`            | Seulement les posts avec des liens          |
| `filter:replies`         | `filter:replies`          | Seulement les réponses                      |
| `filter:quote`           | `filter:quote`            | Seulement les citations                     |
| `filter:blue_verified`   | `filter:blue_verified`    | Seulement les utilisateurs Premium          |
| `-filter:replies`        | `-filter:replies`         | Aucune réponse                              |
| `-filter:nativeretweets` | `-filter:nativeretweets`  | Aucun repost                                |
| `-filter:quote`          | `-filter:quote`           | Aucune citation                             |
| `OR`                     | `(from:nasa OR from:esa)` | Posts qui correspondent à l'un des 2 termes |
| `#`                      | `#bitcoin lang:en`        | Posts avec ce hashtag                       |

X ne cherche plus `filter:vine`, `filter:consumer_video`, `filter:pro_video`,
`filter:news` ni `retweets_of:`. Une recherche qui en contient un s'arrête tout
de suite. Un diagnostic gratuit indique la correction. Limitez chaque requête à
512 caractères ou moins. X ne cherche pas au-delà.

Les fenêtres de dates incluent la borne basse & excluent la borne haute. L'Actor
vérifie les 2 bornes avant d'ajouter ou de facturer chaque post.

Pour la liste complète des opérateurs, consultez les
[Twitter advanced search operators](https://github.com/Xquik-dev/x-twitter-advanced-search)
de Xquik.

### Migrer depuis un autre Actor de posts

Collez l'entrée que vous utilisez déjà. X Tweet Scraper de Xquik lit les noms de
champs des autres Actors de posts. Il les fait correspondre à ses propres
champs. Les noms canoniques restent la norme documentée. Un alias ne supprime
jamais un champ & ne change jamais ce que vous payez. Le formulaire d'entrée
liste seulement les champs canoniques, pour rester court. Les alias fonctionnent
dans les entrées JSON, API, SDK, d'automatisation & de tâches enregistrées.

Chaque ligne nomme les champs que vous utilisez déjà, puis le champ auquel ils
correspondent.

- `startUrls`, `urls`, `tweetUrls`, `postUrls`, `profileUrls`, `accountUrls`
  correspondent à `startUrls`.
- `profileUrl`, en une seule chaîne, correspond à `startUrls`.
- `tweetIds`, `tweetIDs`, `tweets`, `postIds`, `lookupPostIds`, `tweet_ids`, ou
  `tweetId` en une seule chaîne correspondent à `tweetIds`.
- `twitterHandles`, `usernames`, `user_names`, `userNameList`, `handles`,
  `screenNames`, `profileTweets` correspondent à `twitterHandles`.
- `username`, `handle`, `screenName`, en une seule chaîne, correspondent à
  `twitterHandles`.
- `searchTerms`, `searchQueries`, `queries`, `search`, en liste ou avec une
  recherche par ligne, correspondent à `searchTerms`.
- `twitterContent`, `query`, `searchQuery` correspondent à `twitterContent`.
- `maxItems`, `maxResults`, `max_results`, `resultsLimit`, `count`,
  `resultsCount`, `numberOfTweets`, `maxPosts`, `max_posts`, `max_items`,
  `maxTweets`, `tweetsDesired`, `maxTotalTweets` correspondent à `maxItems`.
- `per_profile_limit` correspond à `maxItemsPerTarget`.
- `sort` correspond à `queryType`.
- `search_type`, `searchType`, `query_type`, `search_sort` correspondent à
  `queryType` pour `Top` & `Latest`, quelle que soit la casse. `Media`, `Photos`
  & `Videos` activent `filter:media`, `filter:images` & `filter:videos`.
- `tweetLanguage`, `language`, `contentLanguage` correspondent à `lang`.
- `author`, `fromUser` correspondent à `from`.
- `inReplyTo`, `toUser` correspondent à `to`.
- `mentioning` correspond à `@`.
- `start`, `startDate`, `timeSince` correspondent à `since`.
- `end`, `endDate`, `timeUntil` correspondent à `until`.
- `timeSinceUnix`, `sinceTime`, `timeUntilUnix`, `untilTime`, en secondes,
  correspondent à `since_time`, `until_time`.
- `timeWithinTime`, `withinTime` correspondent à `within_time`.
- `timeWindowHours`, `timeWindow` correspondent à `within_time`, en heures & en
  jours.
- `timeSinceId`, `sinceId`, `timeMaxId`, `maxId` correspondent à `since_id`,
  `max_id`.
- `quickDateRange` de Google Search Scraper, comme `d7`, `w2`, `m1` ou `y`,
  correspond à `since_time`, compté à rebours depuis le début du run.
- `minimumFavorites`, `minLikes`, `min_likes`, `minFaves`, `engagementMinLikes`,
  `Minimum_likes` correspondent à `min_faves`.
- `minimumRetweets`, `minRetweets`, `engagementMinRetweets` correspondent à
  `min_retweets`.
- `minimumReplies`, `minReplies`, `engagementMinReplies`, `Minimum_replies`
  correspondent à `min_replies`.
- `engagementMaxLikes`, `maxLikes`, `engagementMaxRetweets`, `maxRetweets`,
  `engagementMaxReplies` correspondent à `engagement.maxLikes`,
  `engagement.maxRetweets`, `engagement.maxReplies`.
- `onlyImage`, `onlyImages`, `has_images` correspondent à `filter:images`.
- `onlyVideo`, `onlyVideos`, `has_videos` correspondent à `filter:videos`.
- `onlyWithMedia`, `mediaOnly` correspondent à `filter:media`.
- `onlyQuote`, `onlyQuotes` correspondent à `filter:quote`.
- `onlyTwitterBlue`, `usersBlueVerifiedOnly`, `blue_verified_only`,
  `onlyBlueVerified` correspondent à `filter:blue_verified`.
- `engagementHasEngagement`, `hasEngagement` correspondent à
  `filter:has_engagement`.
- `mediaHasLinks`, `has_links`, `requireLinks` correspondent à `filter:links`.
- `mediaHasMentions`, `has_mentions`, `requireMentions` correspondent à
  `filter:mentions`.
- `mediaHasHashtags`, `has_hashtags`, `requireHashtags` correspondent à
  `filter:hashtags`.
- `mediaNewsOnly`, `mediaSafeContentOnly` correspondent à `filter:news`,
  `filter:safe`.
- `mediaTypes`, avec 1 type, correspond au champ `filter:` de ce type.
- `mediaSubtype` correspond à `filter:media`, `filter:images` ou
  `filter:videos`.
- `includeNativeRetweets`, `includeRetweets` correspondent à
  `include:nativeretweets`.
- `excludeReplies`, `excludeRetweets`, `includeRetweets` réglé sur false,
  `tweetTypesExclude` correspondent à `tweetTypes.excludeReplies`,
  `tweetTypes.excludeRetweets` & `tweetTypes.excludeQuotes`.
- `tweetTypes` en liste avec 1 type correspond à `tweetTypes.replies`,
  `tweetTypes.quotes` ou `tweetTypes.nativeRetweets`.
- `tweetSubtype` correspond à `tweetTypes.replies` ou `tweetTypes.quotes`.
  `self_threads` ajoute l'opérateur `filter:self_threads`.
- `geotaggedNear`, `geoNear` correspondent à `near`.
- `withinRadius`, `geoWithinRadius`, `geoWithin` correspondent à `within`.
- `geoGeocode` correspond à `geocode`.
- `tweetConversationId`, `tweetQuotedTweetId`, `tweetQuotedUserId` correspondent
  à `conversation_id`, `quoted_tweet_id`, `quoted_user_id`.
- `cardName`, `tweetPollTypes` correspondent à `card_name`.
- `search_query` correspond à `twitterContent`.
- `profile_urls` correspond à `startUrls` pour les liens, à `twitterHandles`
  pour les noms d'utilisateur.
- `lookup_post_ids`, ou `id` en une seule chaîne, correspondent à `tweetIds`.
- `tweets` en 1 liste séparée par des virgules correspond à `tweetIds`.

Certains champs n'ont pas de champ ici. Chacun ajoute à chaque recherche du run
l'opérateur de recherche X qu'il représente. Le log du run liste au début les
opérateurs ajoutés.

- `usersFromUsers`, `from_users`, `usersToUsers`, `to_users`, `usersListMembers`
  ajoutent `from:`, `to:` & `list:`. Plusieurs valeurs s'exécutent comme des
  alternatives, comme `(from:a OR from:b)`.
- `usersMentionUsers`, `mentioning_users` ajoutent `@name`.
- `usersExcludeFromUsers` ajoute `-from:`.
- `onlyVerifiedUsers`, `usersVerifiedOnly`, `verified_only` ajoutent
  `filter:verified`.
- `placeObjectId`, `geoPlaceId`, `placeId`, `place` ajoutent `place:`.
- `cardDomain` ajoute `card_domain:`.
- `appsSources`, `appsExcludeSources` ajoutent `source:` & `-source:`.
- `contentKeywords`, `contentExactPhrases`, `contentHashtags`,
  `contentCashtags`, chacun avec 1 valeur, ajoutent le mot, la phrase entre
  guillemets, `#tag` & `$tag`.
- `contentExcludeKeywords`, `contentExcludeHashtags`, `exclude_words`,
  `hashtags_exclude` ajoutent `-word` & `-#tag`.
- Avec `all_words` & `exact_phrases`, chaque mot & chaque phrase doivent
  correspondre.
- `any_words`, `hashtags_any` ajoutent des alternatives, comme `(#a OR #b)`.
- `contentQuestionMarks` ajoute `?`.
- `contentEmoticons` ajoute `:)` pour `positive`, `:(` pour `negative`.
- `tweet_type` ajoute `filter:replies`, `filter:retweets` & leurs formes
  `-filter:`.

Les modes nommés en toutes lettres correspondent à `mode`. `Advanced Search`
correspond à `search`, `Get Tweet by ID` à `tweet`, `Get a Few Tweets` à
`tweets`, `Get Replies` à `replies`, `Get Quotes` à `quotes`, `Get Retweeters` à
`retweeters` & `Get Favoriters` à `favoriters`.

Une entrée collée se comporte ainsi.

- Chaque source s'exécute. Une entrée avec des URL, des noms d'utilisateur, des
  termes de recherche, des ID de Liste & des ID de post les lance toutes.
  `maxItems` s'applique sur tout le run.
- Une requête de recherche à côté de `searchTerms` s'exécute comme 1 terme de
  plus.
- Une URL de profil écrite `x.com/@name` se lit comme `x.com/name`.
- Si vous réglez un alias & son champ canonique, la valeur canonique l'emporte.
  Le log du run nomme l'alias écarté.
- Le log du run nomme chaque champ que l'Actor ignore, comme
  `customMapFunction`. L'Actor n'écarte jamais un champ en silence.
- Un plafond de lignes doit être un nombre entier de 1 ou plus. `maxResults: 0`
  arrête le run avant toute lecture ou facturation.
- `quickDateRange: "m1"` lit le dernier mois, quel que soit le mode de lecture.
  Les mois & les années se comptent à rebours sur le calendrier. Sans h, d, w, m
  ou y, le run s'arrête avant toute lecture ou facturation.
- L'Actor n'a pas d'unité de page. Remplacez `maxPages` par `maxItems`.
- L'Actor n'a pas de champ `userId` ou `user_ids`. Mettez un ID utilisateur à la
  place d'un nom d'utilisateur. Cela marche dans `twitterHandles`, dans les URL
  de profil & après `from:`.
- Les champs d'opérateurs de recherche comme `from`, `min_faves`, `since_time` &
  `filter:images` utilisent déjà les noms de X. Ils n'ont besoin d'aucune
  correspondance.
- Une liste dont un autre Actor ne dit pas si toutes ses valeurs ou l'une
  d'elles doivent correspondre s'exécute avec 1 valeur. Ces listes sont
  `contentKeywords`, `contentExactPhrases`, `contentHashtags`,
  `contentCashtags`, `usersMentionUsers`, `mediaTypes` & `tweetTypes`. Avec plus
  de valeurs, le run s'arrête avant toute lecture ou facturation. Son message
  indique comment les écrire en 1 terme de recherche.
- `search_type` réglé sur `People` ou `Lists`, `source_mode` réglé sur
  `followers`, un préréglage `engagementLevel` & le mode `Get Similar Tweets`
  arrêtent le run avant toute lecture ou facturation. Le message nomme l'Actor
  ou le champ à utiliser.
- `category` réglé sur `tweets` ou `info` ne change rien. La tâche d'un autre
  Actor, comme `followers`, `user_info` ou `replies`, arrête le run. Il ne lit &
  ne facture rien. Le message nomme cet Actor.

### Saisie dans la Console & via l'API

Le formulaire de la Console a ces contrôles.

- Mode, Output Variant, Field Style, Output Preset & Sort By sont des listes
  déroulantes validées.
- Start URLs & Profile URLs acceptent des chaînes ou des objets
  `{ "url": "..." }`. Leurs éditeurs JSON gardent les 2 formats de l'API.
- Les filtres structurés proposent des contrôles groupés, donc vous n'avez pas
  besoin de JSON imbriqué.
- Le formulaire masque les opérateurs plats qu'un groupe de filtres couvre déjà.
  Les entrées JSON, API, SDK, d'automatisation & de tâches enregistrées les
  acceptent toujours.
- Max Items & Max Items Per Target acceptent des nombres entiers de 1 ou plus.
  Les seuils d'engagement acceptent des nombres entiers de 0 ou plus.

Utilisez les champs canoniques dans les nouvelles intégrations. Les alias du
tableau de migration ci-dessus restent disponibles. `includeRaw` est un alias de
`outputVariant: "raw"`. Les anciennes valeurs d'`outputVariant`, comme `compact`
& `full`, fonctionnent toujours comme sortie Legacy. Le formulaire les marque
comme alias Legacy.

## Sortie

Chaque ligne de post est un objet JSON avec les métadonnées que X rend
disponibles. Les schémas du dataset & du run-report donnent à chaque champ un
titre, une description & un exemple. Les agents IA peuvent les lire sans deviner
le sens d'un champ.

Les valeurs d'exemple sont illustratives. Vos runs renvoient les données en
direct de X.

```json
{
  "id": "20",
  "text": "just setting up my twttr",
  "createdAt": "Tue Mar 21 20:50:14 +0000 2006",
  "retweetCount": 500,
  "replyCount": 120,
  "likeCount": 5000,
  "quoteCount": 80,
  "viewCount": 1200000,
  "bookmarkCount": 300,
  "lang": "en",
  "url": "https://x.com/jack/status/20",
  "author": {
    "id": "12",
    "username": "jack",
    "name": "jack",
    "followers": 6000000,
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
  "conversationId": "20"
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
  un seul run. La déduplication & les plafonds de résultats s'appliquent aux 2.
- Utilisez les moniteurs de compte ou de mot-clé de Xquik pour des vérifications
  chaque seconde & des webhooks signés. Les moniteurs actifs vérifient chaque
  seconde.

### Utilisez toujours la dernière build

Choisissez `latest` pour chaque run afin d'obtenir chaque correctif publié.

Si vous ne choisissez aucune build, Apify lance X Tweet Scraper de Xquik sur sa
build `latest` par défaut. Les runs de la Console & les exemples d'API standard
héritent de ce défaut.

Les tâches enregistrées peuvent remplacer le défaut de l'Actor. Les
planifications & les intégrations de tâches reprennent ce choix. Gardez chaque
remplacement réglé sur `latest`.

Apify ne redirige pas les numéros de build exacts vers `latest`. Remplacez les
numéros figés par `latest`. Utilisez une build exacte seulement pour un retour
arrière temporaire ou pour reproduire un run.

Lisez la documentation d'Apify sur les
[tags de build](https://docs.apify.com/platform/actors/development/builds-and-runs/builds),
les
[options de run](https://docs.apify.com/platform/actors/running/runs-and-builds)
& les [tâches](https://docs.apify.com/platform/actors/running/tasks).

## Actors Xquik associés

Tous les Actors Xquik partagent le même moteur d'extraction, la même facturation
après filtrage & les mêmes diagnostics. Choisissez celui qui correspond aux
données dont vous avez besoin.

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
- [X (Twitter) Monitor](https://apify.com/xquik/x-twitter-monitor) capte chaque
  nouveau tweet, réponse, citation, repost & changement de profil des comptes,
  généralement en moins d'une seconde après son affichage sur X, ainsi que les
  tweets par mot-clé & les follows. Utilisez-le quand vous voulez une alerte dès
  que X affiche un tweet. À partir de $0.0045 par monitor-hour.

## FAQ

Les réponses aux questions fréquentes, puis où trouver de l'aide.

### Ai-je besoin d'une clé API X ?

Non. Vous n'avez besoin ni de clé API X, ni de connexion, ni d'identifiants.

### Qu'est-ce qui limite un run ?

Votre limite d'éléments & votre limite de dépense Apify arrêtent le run. Les
limites de votre compte Apify & de la plateforme s'appliquent toujours.

### Quelle est sa vitesse ?

X Tweet Scraper de Xquik a livré de 25,2 à 39,2 tweets utiles par seconde dans
le [benchmark](#benchmark). La durée dépend de votre entrée, du nombre de
résultats & de la disponibilité de X.

### Les recherches renvoient-elles chaque post correspondant ?

Oui, jusqu'à épuisement des résultats ou jusqu'à `maxItems`. Les résultats
contiennent seulement les posts qui correspondent à votre requête. Vous payez
chaque post une seule fois.

### Quels opérateurs de recherche fonctionnent ?

La recherche avancée de X prend en charge les auteurs, les destinataires, les
mentions, les dates, l'engagement, les médias & le lieu. Consultez les
[principaux opérateurs de recherche pris en charge](#principaux-opérateurs-de-recherche-pris-en-charge)
pour des exemples.

### Puis-je utiliser l'API Apify pour lancer cet Actor ?

Oui. Consultez l'[onglet API](https://apify.com/xquik/x-tweet-scraper/api) pour
des exemples en Python, JavaScript & cURL.

### Puis-je planifier des scrapings récurrents ?

Oui. Utilisez la [planification](https://docs.apify.com/platform/schedules)
intégrée d'Apify pour lancer X Tweet Scraper de Xquik selon un cron.

### Puis-je obtenir une solution sur mesure ?

Oui. Décrivez votre besoin dans
l'[onglet Issues](https://apify.com/xquik/x-tweet-scraper/issues). Xquik propose
aussi un tableau de bord, une API REST, un serveur MCP & des webhooks. Trouvez
le site web de Xquik sur son [profil Apify](https://apify.com/xquik).

### Est-il légal de scraper des données X ?

X Tweet Scraper de Xquik demande à X des champs publics. Les résultats peuvent
contenir des données personnelles. Assurez-vous d'avoir une finalité licite &
respectez les règles de protection des données qui s'appliquent à vous. En cas
de doute, demandez conseil à un juriste qualifié.

### Où trouver de l'aide ?

Ouvrez une issue dans
l'[onglet Issues](https://apify.com/xquik/x-tweet-scraper/issues) avec l'ID du
run.
