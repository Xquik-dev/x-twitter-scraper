[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · **Français** · [Italiano](README.it.md)

[![Framer connecte Xquik MCP aux agents de codage](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Découvrez comment Framer utilise les scrapers Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
avec Claude Code, Codex, Cursor & d'autres outils, à partir de 6:07.

Xquik est le service de scraping X (Twitter) le plus rapide et le moins cher au
monde. Ses données X sont les plus complètes. X Tweet Sentiment Analysis de
Xquik évalue l'attitude, l'intensité & le sarcasme de chaque post. La plupart
des autres Actors Apify facturent avant de filtrer ou de dédupliquer. Xquik
facture seulement les résultats livrés, uniques et conformes à vos filtres. Les
coûts d'IA sont inclus dans le prix par post. Vous n'avez besoin d'aucun compte
d'IA, jeton ou clé.

Mesurez l'attitude derrière les posts X (Twitter) & gardez les données d'origine
de chaque post. **X Tweet Sentiment Analysis with AI** de Xquik collecte les
posts correspondants. Il ajoute à chaque post une catégorie de sentiment, un
niveau d'intensité & une probabilité de sarcasme, calculés par IA. Suivez les
réactions à un lancement, une campagne, un épisode ou une personnalité publique.
Séparez les réactions fortes des mentions en passant.

- **Un sentiment par post.** Chaque post reçoit sa propre catégorie, donc vous
  pouvez vérifier chaque réponse.
- **Intensité.** Un niveau de 0 à 2 sépare les posts appuyés des posts modérés.
- **Probabilité de sarcasme.** Elle signale les posts dont la formulation
  littérale contredit l'attitude.
- **Données source complètes.** Chaque ligne garde chaque champ que le post
  expose.

> Xquik est un service tiers indépendant. Non affilié à X Corp. "Twitter" et "X"
> sont des marques déposées de X Corp.

## Comment analyser le sentiment des tweets

Vous débutez sur Apify ?
[Créez d'abord un compte gratuit](https://console.apify.com/sign-up?fpr=xquik).
Le plan gratuit ne demande aucune carte bancaire & donne $5 à dépenser chaque
mois. À $0.0003 par post analysé, $5 couvrent jusqu'à 16 000 posts analysés,
hors usage de la plateforme. Revenez ensuite ici & cliquez sur Try for free.

1. Ajoutez des termes de recherche, des noms d'utilisateur, des URL de posts ou
   des ID de post.
2. Réglez `maxItems` & les filtres d'extraction utiles à votre tâche.
3. Laissez `analysis.targets` vide pour juger chaque post sur son propre sujet.
   Pour cibler une marque, un produit ou une personne, ajoutez ses noms & ses
   alias.
4. Lancez le run & ouvrez le dataset.

```json
{
  "searchTerms": ["\"season finale\" lang:en"],
  "maxItems": 200,
  "analysis": { "context": "Reactions to the show, not spoilers." }
}
```

### Les questions auxquelles l'Actor répond

| Question  | Réponse                                                        |
| --------- | -------------------------------------------------------------- |
| Sentiment | Positif, négatif, mixte, neutre ou incertain                   |
| Intensité | 0 mention en passant, 1 attitude claire, 2 formulation appuyée |
| Sarcasme  | Probabilité que la formulation littérale contredise l'attitude |

Avec des cibles, le sentiment juge l'attitude envers elles. Il utilise aussi le
contexte de citation ou de réponse que vous fournissez. Sans cibles, il juge le
sujet principal du post.

## Analyser votre propre texte

Collez vos propres brouillons, réponses, avis ou notes dans `texts`. X Tweet
Sentiment Analysis de Xquik les analyse. Il ne récupère rien sur X.

```json
{
  "texts": [
    "The new update is great, but sync still drops on mobile.",
    "Support fixed my issue in 10 minutes. Thank you."
  ]
}
```

- Chaque texte devient 1 ligne avec les mêmes réponses `analysis` qu'un post.
- `tweet.id` vaut `text:1`, `text:2` & ainsi de suite, & `tweet.type` vaut
  `text`.
- Chaque texte analysé coûte les mêmes $0.0003 qu'un post analysé.
- Quand `texts` est renseigné, le run analyse seulement ces textes. Lancez les
  cibles X dans un run séparé.

## Migrer depuis un autre Actor de sentiment

Utilisez 1 nom par réglage quand vous adaptez une entrée existante.

| Nom d'entrée existant                               | Champ Xquik      |
| --------------------------------------------------- | ---------------- |
| `query`, `searchQuery`                              | `twitterContent` |
| `queries`, `searchQueries`, `search`                | `searchTerms`    |
| `handles`, `usernames`, `username`, `profileTweets` | `twitterHandles` |
| `tweetUrls`, `postUrls`, `urls`                     | `startUrls`      |
| `tweetIDs`, `tweet_ids`, `postIds`, `tweetId`       | `tweetIds`       |
| `maxTweets`, `maxResults`, `count`, `max_posts`     | `maxItems`       |
| `sort`                                              | `queryType`      |
| `tweetLanguage`, `language`                         | `lang`           |
| `startDate`, `endDate`                              | `since`, `until` |

L'Actor accepte directement ces noms courants. Il lit aussi les noms de filtres
d'autres Actors de posts. Un filtre sans champ ici devient un opérateur de
recherche X dans chaque recherche du run, & le log du run liste ces opérateurs
au début. Utilisez `Latest` ou `Top` pour `sort`. Gardez les codes de langue &
les bornes de date. Les limites s'appliquent à l'ensemble des cibles. Cette
entrée est prête à lancer.

```json
{ "searchTerms": ["from:NASA"], "sort": "Latest", "maxItems": 5 }
```

Les autres entrées demandent une conversion avant le run.

Placez un `tweetUrl` unique dans `startUrls`.

```json
{ "startUrls": ["https://x.com/NASA/status/2105727882588807607"] }
```

Mettez `text`, `Texts`, les chaînes d'un dataset ou d'un fichier dans `texts`.

```json
{ "texts": ["Support fixed my issue. Thank you."] }
```

Transformez `hashtag` ou `cashtag` en chaînes de recherche.

```json
{ "searchTerms": ["#Artemis lang:en", "$AAPL lang:en"], "maxItems": 5 }
```

Remplacez `minLikes`, `minReplies` & `minRetweets` par ces noms de champ.

```json
{ "min_faves": 10, "min_replies": 2, "min_retweets": 3 }
```

Les résultats gardent l'enregistrement d'origine dans `tweet` & les réponses
dans `analysis.answers`. Associez les étiquettes positive, négative & neutre aux
catégories de sentiment correspondantes. Gardez `mixed` & `unclear` comme
catégories séparées. Les autres scores de sentiment peuvent utiliser des
échelles & des sens différents. L'intensité de Xquik va de 0 à 2 & peut inclure
des décimales. Le sarcasme est une probabilité. La confiance décrit la certitude
d'une réponse.

## Combien coûte l'analyse du sentiment des tweets ?

X Tweet Sentiment Analysis de Xquik coûte à partir de $0.0003 par post analysé.
Il ne facture pas de frais de démarrage. Le prix inclut la collecte & les coûts
d'IA. Vous n'avez besoin d'aucun compte d'IA, jeton ou clé. Le prix couvre
jusqu'à 8 questions & 64 000 octets de contexte par post. Chaque définition de
question peut utiliser jusqu'à 8 000 octets.

Pour plus de volume,
[choisissez un plan Apify](https://apify.com/pricing?fpr=xquik) avec plus
d'usage prépayé.

Les filtres d'extraction & la déduplication passent avant l'analyse. Vous ne
payez jamais les lignes filtrées ou en double. Les analyses échouées, les
analyses ignorées & les lignes de diagnostic ne sont pas facturées comme
résultats. Apify facture à part l'usage de la plateforme pour le calcul, le
stockage & le transfert, aux tarifs de votre plan. L'onglet Pricing l'indique.

## Exemples d'entrée & de sortie

L'entrée ci-dessus est prête à copier. Une ligne de sortie abrégée ressemble à
ceci.

```json
{
  "tweet": { "id": "2100493544842494265", "text": "…", "likeCount": 12 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      {
        "questionId": "sentiment",
        "type": "choice",
        "value": "positive",
        "confidence": 0.91
      },
      {
        "questionId": "intensity",
        "type": "score",
        "value": 2,
        "confidence": 0.8
      },
      { "questionId": "sarcasm", "type": "probability", "probability": 0.04 }
    ]
  }
}
```

Chaque résultat contient `tweet` & `analysis`. Les réponses incluent les types,
les versions de question & les probabilités disponibles. Une ligne dont
l'analyse a échoué ou a été ignorée garde le post collecté & une `reason`. Sa
liste de réponses est vide.

Les diagnostics gratuits du key-value store expliquent les entrées invalides,
les résultats manquants & les collectes interrompues. Le rapport du run sépare
les lignes collectées, les analyses facturées & les frais en attente.

## Résumé du run & réponses à plat

Un run écrit un enregistrement `analysis-summary` dans son key-value store dans
3 cas.

- Il rencontre un problème ou il est volumineux.
- Sa comparaison trouve un post modifié, nouveau ou non comparable.
- Il a `alwaysSaveRunRecords` activé.

Les autres runs n'écrivent pas cet enregistrement, y compris le premier run
d'une série. Leur statut donne la réponse principale, comme
`Top sentiment is positive in 3 of 5 results.` Une comparaison sans changement
indique `No change since the earlier run.` Un run qui rencontre un problème ou
qui est volumineux écrit aussi `run-report`. Un run avec `alwaysSaveRunRecords`
activé le fait aussi. `run-report` reprend le résumé sous
`results.analysisSummary`.

Le résumé compte les lignes analysées, échouées & ignorées. Il additionne
l'engagement & résume chaque question.

- La répartition `sentiment` montre combien de posts tombent dans chaque
  attitude.
- `engagementShares` pondère la même répartition par les J'aime, les reposts,
  les réponses & les citations.
- `top` liste les 3 posts qui ont le plus d'engagement pour chaque attitude.
- Chaque ligne liste `sourceDomains`, les noms d'hôte vers lesquels elle pointe.
- Chaque ligne liste les `cashtags` trouvés dans son texte, comme `$NVDA`.
- Avec `monitor.baselineDatasetId` renseigné, le bloc `monitor` du résumé compte
  les statuts de comparaison. Il liste jusqu'à 50 lignes modifiées.

Le résumé arrondit les nombres à 4 décimales. Un run vide indique des compteurs
à 0 & des moyennes `null`.

Chaque ligne de résultat porte aussi `answers`, une table plate indexée par ID
de question. Chaque valeur est la réponse choisie, soit une catégorie, un score
ou une probabilité. La vue de dataset `Flat answers` & les exports CSV ou Excel
affichent 1 colonne par question. Ces colonnes sont à côté du post, donc vos
tableurs n'ont aucun JSON à analyser. Les lignes échouées & ignorées portent une
table vide.

## Comparer avec un run antérieur

Passez `monitor.baselineDatasetId`, l'ID du dataset d'un run antérieur terminé
avec les mêmes réglages d'analyse. La comparaison lit les lignes de ce run. Elle
fonctionne même si ce run n'a pas écrit son résumé. Chaque ligne gagne alors un
objet `monitor`. Son statut prend ces valeurs.

- `first_run` sans référence.
- `new_to_baseline` pour les posts absents du run antérieur.
- `unchanged` ou `changed` pour les posts qu'il contenait.

`changes` liste chaque décision de sentiment, de niveau d'intensité ou de
sarcasme passée de `previous` à `current`. Les décisions se comparent par
catégorie, par niveau de score arrondi ou par oui/non au seuil de 0,5. Une
décision compte comme changée seulement si elle bouge nettement. Les
quasi-égalités entre runs restent `unchanged`.

Une référence au-delà de `maxBaselineRows`, ou issue d'autres réglages, arrête
le run avant la collecte. Le run écrit alors une ligne de diagnostic.
`maxBaselineRows` vaut 100 000 par défaut.

## Exemples de tâches

Choisissez parmi 50 tâches publiques. Commencez par l'exemple qui correspond à
votre question. La plupart des tâches utilisent de petits plafonds. Les 2
recherches datées demandent 50 posts. Ouvrez une tâche pour utiliser son entrée
enregistrée. Les entrées prêtes à copier & les volumes observés ci-dessous vous
aident à choisir vos réglages.

Chaque ligne réussie renvoie le sentiment, l'intensité & la probabilité de
sarcasme. Chacune garde son post d'origine ou son texte fourni à côté des
réponses. Ces exemples utilisent des entrées & des filtres de langue en anglais.
Une étiquette de langue peut quand même laisser passer du texte d'une autre
langue dans un post ou une citation.

Sans cibles, une réponse décrit le sujet principal du post. La mention d'un
mot-clé peut concerner autre chose. Avec plusieurs cibles, la réponse de
sentiment les décrit ensemble. Elle ne renvoie pas une réponse séparée pour
chaque cible.

Un profil peut masquer ses J'aime. S'ils sont indisponibles, utilisez les
réponses ou les posts du profil.

Les résultats de recherche peuvent inclure des annonces, des promotions, des
blagues & du texte répété. Des ID de post distincts ne prouvent ni des réactions
indépendantes ni l'identité de clients. Les expressions d'opinion & les filtres
d'engagement sélectionnent un échantillon. Examinez les posts avant de les
compter comme des retours. L'analyse ne vérifie pas leurs affirmations.

### Entrées de tâche testées

Ouvrez une tâche. Son onglet Input propose des champs visuels & du JSON. Copiez
son JSON ou modifiez les champs avant de lancer.
[Apify explique les entrées de tâche](https://docs.apify.com/actors/running/tasks).

Les dates de test sont en UTC. Les volumes décrivent le run enregistré, pas une
disponibilité garantie. Les exemples datés de 50 posts montrent pourquoi des ID
uniques diffèrent d'opinions indépendantes.

#### Brouillons d'avis sur un final

[Textes d'avis sur un final de saison](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-season-finale-reactions)

Séparez les éloges des critiques dans vos brouillons d'avis sur le final. Nous
avons observé 3 textes fournis uniques le 2026-10-01. Le plafond était de 3. Ce
sont vos propres textes d'illustration, pas une étude d'audience.

#### Discussions sur un lancement de téléphone

[Posts sur le lancement de l'iPhone en septembre 2026](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-iphone-launch-posts)

Examinez les discussions sur le lancement dans une période fixe de septembre.
Nous avons observé 5 posts uniques le 2026-10-01. Le plafond était de 5. Les
annonces comme les opinions personnelles peuvent correspondre.

#### Avis sur un spectacle de mi-temps

[Textes d'avis sur un spectacle de mi-temps](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-super-bowl-halftime-show)

Vérifiez les jugements mixtes et le sarcasme dans vos avis sur la mi-temps. Nous
avons observé 3 textes fournis uniques le 2026-10-01. Le plafond était de 3. Ce
sont vos propres avis d'illustration, pas des réactions au spectacle en direct.

#### Expériences de voiture électrique

[Posts sur l'expérience d'une voiture électrique](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-new-electric-car)

Trouvez des posts sur la conduite ou le choix d'une voiture électrique. Nous
avons observé 5 posts uniques le 2026-10-01. Le plafond était de 5. Les
expressions personnelles peuvent correspondre à des blagues ou à des récits de
seconde main.

#### Discussions sur un film

[Posts de discussion sur un film Marvel](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-marvel-movie-audiences)

Examinez les discussions sur le film avant de sélectionner des commentaires du
public. Nous avons observé 5 posts uniques le 2026-10-01. Le plafond était de 5.
Marvel peut correspondre à des emplois du mot sans rapport.

#### Légendes de médias d'artiste

[Ton des légendes de médias de Taylor Swift](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-taylor-swift-album-reactions)

Examinez les formulations de l'artiste à côté de médias récents. Nous avons
observé 5 posts uniques le 2026-10-01. Le plafond était de 5. Les légendes ne
peuvent pas décrire tout ce que montrent les images ou les vidéos.

#### Fil sur la sortie d'un jeu

[Fil d'actualité sur la sortie d'un jeu](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-video-game-launch)

Lisez une annonce à côté de réponses sur des jeux concurrents. Nous avons
observé 5 posts uniques le 2026-10-01. Le plafond était de 5. Le fil mentionne
plusieurs jeux et inclut son post d'ouverture.

#### Discussions sur le télétravail

[Discussions sur le télétravail](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-remote-work)

Comparez les attitudes exprimées dans les discussions sur le télétravail. Nous
avons observé 5 posts uniques le 2026-10-01. Le plafond était de 5. Des offres
d'emploi et des opinions répétées peuvent apparaître.

#### Posts sur les compagnies aériennes

[Posts de discussion sur les compagnies aériennes](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-airline-passengers)

Examinez les mentions de compagnies aériennes avant de choisir des retours sur
le service. Nous avons observé 5 posts uniques le 2026-10-01. Le plafond était
de 5. Une mention ne prouve pas que l'auteur est un passager.

#### Discussions sur le football universitaire

[Discussions sur le football universitaire](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-college-football-fans)

Séparez les opinions des fans de la promotion du football universitaire. Nous
avons observé 5 posts uniques le 2026-10-01. Le plafond était de 5. Des
avant-matchs et des promotions peuvent correspondre à côté des opinions de fans.

#### Discussions sur les taux d'intérêt

[Discussions sur les taux d'intérêt](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-interest-rates)

Examinez les attitudes envers le marché et la politique autour des taux
d'intérêt. Nous avons observé 5 posts uniques le 2026-10-01. Le plafond était
de 5. Le sujet principal peut être un responsable politique ou le marché.

#### Discussions sur les trottinettes

[Discussions sur les trottinettes électriques](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-electric-scooters)

Trouvez les discussions sur les trottinettes avant de choisir des retours
d'utilisateurs. Nous avons observé 5 posts uniques le 2026-10-01. Le plafond
était de 5. Des publicités, des études et des blagues peuvent correspondre à
côté d'expériences personnelles.

#### Expériences de restaurant

[Expériences dans de nouveaux restaurants](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-restaurant-openings)

Examinez les formulations à la première personne sur de nouveaux restaurants.
Nous avons observé 5 posts uniques le 2026-10-01. Le plafond était de 5. Des
formulations personnelles peuvent aussi apparaître dans des invitations ou des
recommandations.

#### Ton du fil d'une Liste publique

[Ton du fil d'une Liste publique](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-ai-coding-assistants)

Examinez le ton des posts d'une Liste publique. Nous avons observé 5 posts
uniques le 2026-10-01. Le plafond était de 5. Les membres peuvent aborder
d'autres sujets et reposter les mots d'une autre personne.

#### Réponses d'un profil d'appareils

[Ton des réponses du profil d'appareils Google](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-smart-home-device-owners)

Examinez les formulations d'un profil d'appareils, réponses comprises. Nous
avons observé 5 posts uniques le 2026-10-01. Le plafond était de 5. L'absence du
contexte parent peut limiter le sens d'une réponse de profil.

#### Entraînement au marathon

[Discussions sur l'entraînement au marathon](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-marathon-runners)

Trouvez les attitudes dans les nouvelles d'entraînement et les projets de
marathon. Nous avons observé 5 posts uniques le 2026-10-01. Le plafond était
de 5. Des projets et de la promotion peuvent apparaître à côté des nouvelles de
coureurs.

#### Préparation de voyage

[Posts personnels sur un voyage à Tokyo](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-tourist-destinations)

Examinez des projets de voyage personnels et des récits de voyage. Nous avons
observé 5 posts uniques le 2026-10-01. Le plafond était de 5. Des événements qui
portent le nom de Tokyo peuvent correspondre sans décrire un voyage au Japon.

#### Discussions sur le prix du streaming

[Posts de discussion sur le prix de Netflix](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-streaming-price-increases)

Trouvez les inquiétudes sur le prix de Netflix avant d'examiner les motifs de
résiliation. Nous avons observé 5 posts uniques le 2026-10-01. Le plafond était
de 5. Les expressions de prix sélectionnent des inquiétudes, pas un échantillon
représentatif de spectateurs.

#### Achats de fournitures scolaires

[Posts sur les fournitures scolaires en août 2026](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-back-to-school-shoppers)

Examinez 50 posts sur les fournitures scolaires dans une période d'août. Nous
avons observé 50 posts uniques le 2026-10-01. Le plafond était de 50. Les 50 ID
incluaient 42 lignes clairement liées au sujet lors de notre examen.

#### Retards de train

[Posts sur des retards de train vécus](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-public-transit)

Trouvez des plaintes et des expériences liées à des trains en retard. Nous avons
observé 5 posts uniques le 2026-10-01. Le plafond était de 5. Les expressions
personnelles peuvent manquer les avis officiels.

#### Discussions sur la nourriture pour animaux

[Posts sur des expériences de nourriture pour animaux](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-pet-food-brands)

Examinez les mentions de nourriture pour animaux dans des discussions plus
larges sur les soins. Nous avons observé 5 posts uniques le 2026-10-01. Le
plafond était de 5. Des discussions sur les soins ou sur des sujets vétérinaires
peuvent mentionner des marques de nourriture en passant.

#### Posts de fantasy sport sélectionnés

[Lot de posts de fantasy sport](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-fantasy-football-apps)

Analysez un lot choisi de posts sur le fantasy sport. Nous avons observé 2 posts
uniques le 2026-10-01. Le plafond était de 2. Les étiquettes concernent le sujet
de chaque post, pas automatiquement une application.

#### Expériences dans des cafés

[Posts sur des expériences dans des cafés](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-coffee-shop-customers)

Trouvez des commentaires sur des cafés avant de sélectionner des retours
clients. Nous avons observé 5 posts uniques le 2026-10-01. Le plafond était
de 5. Les plaintes des auteurs restent des déclarations non vérifiées.

#### Marché immobilier

[Discussions sur le marché immobilier](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-housing-market)

Examinez les opinions et l'actualité sur le marché immobilier. Nous avons
observé 5 posts uniques le 2026-10-01. Le plafond était de 5. L'actualité et les
opinions peuvent concerner des aspects différents du marché.

#### Discussions sur un tournoi

[Posts sur un tournoi de League of Legends](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-esports-tournament-viewers)

Séparez les discussions sur le tournoi de la promotion de billets ou de matchs.
Nous avons observé 5 posts uniques le 2026-10-01. Le plafond était de 5. Les
publicités de billets et les comptes rendus de match ne sont pas des opinions de
spectateurs.

#### Posts d'un éditeur de podcasts

[Ton des posts d'un éditeur de podcasts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-podcast-episodes)

Examinez les messages de l'éditeur de podcasts lui-même. Nous avons observé 5
posts uniques le 2026-10-01. Le plafond était de 5. Le ton de l'éditeur ne
mesure pas la satisfaction des auditeurs.

#### Comparaisons de salles de sport

[Textes d'avis comparant des salles de sport](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-gym-memberships)

Vérifiez l'attitude combinée envers 2 salles de sport dans vos avis. Nous avons
observé 3 textes fournis uniques le 2026-10-01. Le plafond était de 3. Les 2
cibles partagent 1 réponse de sentiment par texte.

#### Location de voitures

[Posts sur des expériences de location de voiture](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-car-rental-customers)

Trouvez des commentaires sur la location de voitures avant d'examiner les
problèmes de service. Nous avons observé 5 posts uniques le 2026-10-01. Le
plafond était de 5. Des demandes et des promotions peuvent correspondre à côté
de récits de locataires.

#### Discussions sur le campus

[Posts sur le coût de l'université et le campus](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-university-life)

Examinez les discussions sur le campus avant de sélectionner des posts liés aux
coûts. Nous avons observé 5 posts uniques le 2026-10-01. Le plafond était de 5.
L'actualité et les critiques du campus ne prouvent pas des expériences
d'étudiants.

#### Préparation de mariage

[Posts personnels sur la préparation d'un mariage](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-wedding-planning-posts)

Trouvez des formulations à la première personne sur les projets et les coûts de
mariage. Nous avons observé 5 posts uniques le 2026-10-01. Le plafond était
de 5. Des récits, des blagues et des formulations fortuites peuvent correspondre
à côté d'expériences de préparation.

#### Expériences de recharge

[Posts sur des expériences de recharge de véhicule électrique](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-ev-charging-experiences)

Examinez les expériences de recharge dans les discussions sur les véhicules
électriques. Nous avons observé 5 posts uniques le 2026-10-01. Le plafond était
de 5. La recharge peut être secondaire par rapport à un autre problème du
véhicule.

#### Discussions sur la déclaration d'impôts

[Posts sur les déclarations TurboTax du printemps 2026](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-tax-filing-software)

Examinez les discussions sur la déclaration dans une période fixe du printemps.
Nous avons observé 5 posts uniques le 2026-10-01. Le plafond était de 5. Les
posts ne vérifient ni les frais actuels ni les règles fiscales.

#### Visites de parcs à thème

[Discussions sur des visites de parcs à thème](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-theme-park-visitors)

Trouvez les mentions de parcs à thème avant de choisir des réactions de visite.
Nous avons observé 5 posts uniques le 2026-10-01. Le plafond était de 5. Des
références fortuites peuvent correspondre à des posts plus longs sur un autre
sujet.

#### Dépenses de courses

[Posts sur des budgets de courses vécus](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-grocery-prices)

Trouvez des commentaires à la première personne sur les dépenses de courses.
Nous avons observé 5 posts uniques le 2026-10-01. Le plafond était de 5. Des
discussions plus larges sur la politique, la nutrition ou les créateurs peuvent
mentionner les dépenses de courses.

#### Discussions sur les appareils photo

[Discussions sur les appareils photo de téléphone](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-phone-camera-reviews)

Examinez les mentions d'appareil photo à côté de photos, d'avis et d'annonces.
Nous avons observé 5 posts uniques le 2026-10-01. Le plafond était de 5. Les
mentions d'appareil photo peuvent être fortuites dans d'autres annonces.

#### Post sélectionné sur des sneakers

[Un post choisi sur des sneakers](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-sneaker-drop-reactions)

Analysez un post connu sans recherche large par mot-clé. Nous avons observé 1
post unique le 2026-10-01. Le plafond était de 1. Cette légende sélectionnée ne
décrit pas tous les détails de son image.

#### Chatbots de support

[Posts de discussion sur les chatbots de support](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-customer-support-chatbots)

Trouvez les discussions sur les chatbots de support avant de sélectionner des
plaintes sur le service. Nous avons observé 5 posts uniques le 2026-10-01. Le
plafond était de 5. Des bots de soutien émotionnel et des réponses d'entreprises
peuvent aussi correspondre.

#### Discussions sur un festival

[Discussions sur Coachella en avril 2026](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-music-festival-attendees)

Examinez 50 posts sur le festival dans une période d'avril. Nous avons observé
50 posts uniques le 2026-10-01. Le plafond était de 50. Les 50 ID incluaient 47
lignes liées au sujet et des textes d'actualité répétés.

#### Factures d'électricité

[Discussions sur les factures d'électricité](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-electric-bills)

Examinez les coûts d'électricité personnels à côté des discussions sur les
politiques publiques. Nous avons observé 5 posts uniques le 2026-10-01. Le
plafond était de 5. Les affirmations sur les politiques et les prévisions de
prix restent non vérifiées.

#### Changements d'effectif en basket

[Discussions sur les échanges et les signatures en NBA](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-nba-trade-reactions)

Trouvez les discussions sur les échanges et les signatures avant de choisir des
réactions de fans. Nous avons observé 5 posts uniques le 2026-10-01. Le plafond
était de 5. D'autres sujets peuvent mentionner des joueurs ou des équipes en
passant.

#### Discussions sur les séjours

[Discussions sur des séjours Airbnb](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-airbnb-stays)

Ciblez les attitudes envers Airbnb dans les discussions sur les séjours. Nous
avons observé 5 posts uniques le 2026-10-01. Le plafond était de 5. La promotion
d'hôtes et des posts sur l'application peuvent apparaître à côté de récits de
voyageurs.

#### Réactions à des livres

[Posts de réactions à des lectures](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-book-club-readers)

Examinez les réactions de lecture sans supposer l'appartenance à un club de
lecture. Nous avons observé 5 posts uniques le 2026-10-01. Le plafond était
de 5. Les comparaisons avec des films comme les opinions de lecture personnelles
peuvent correspondre.

#### Expériences de kits repas

[Posts sur des expériences HelloFresh](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-meal-kit-services)

Trouvez des commentaires sur les kits repas avant d'examiner les expériences du
produit. Nous avons observé 5 posts uniques le 2026-10-01. Le plafond était
de 5. Des projets, des publicités et des récits personnels plus larges peuvent
mentionner la marque.

#### Discussions sur une course

[Posts de discussion sur une course de Formule 1](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-formula-one-race-weekends)

Examinez les discussions sur la course à côté des déclarations d'équipes et de
pilotes. Nous avons observé 5 posts uniques le 2026-10-01. Le plafond était
de 5. Des déclarations de pilotes citées peuvent se répéter sous des ID
différents.

#### Expériences d'applications de rencontre

[Posts sur des expériences d'applications de rencontre](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-dating-app-experiences)

Trouvez des expériences d'applications de rencontre, des remarques sur des
matchs et des blagues. Nous avons observé 5 posts uniques le 2026-10-01. Le
plafond était de 5. Les remarques sur des matchs et les blagues ne vérifient pas
l'identité de clients.

#### Posts sur l'attente à l'aéroport

[Posts sur l'attente et les salons d'aéroport](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-airport-travelers)

Examinez les commentaires sur l'attente à l'aéroport à côté des avis aux
voyageurs. Nous avons observé 5 posts uniques le 2026-10-01. Le plafond était
de 5. Des avis officiels peuvent apparaître à côté d'expériences d'attente
personnelles.

#### Discussions sur les repas scolaires

[Discussions sur les repas scolaires](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-school-lunch-programs)

Examinez les posts personnels et le débat politique sur les repas scolaires.
Nous avons observé 5 posts uniques le 2026-10-01. Le plafond était de 5. Les
auteurs peuvent inclure des institutions, pas seulement des parents.

#### Dégustation de bière

[Posts de dégustation de bière artisanale](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-craft-beer-drinkers)

Trouvez des opinions de dégustation de bière avant de choisir des exemples
d'avis. Nous avons observé 5 posts uniques le 2026-10-01. Le plafond était de 5.
Des légendes courtes avec lien peuvent manquer de contexte pour une attitude
claire.

#### Citations d'une annonce d'amarrage

[Citations d'une annonce d'amarrage de SpaceX](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-space-launches)

Examinez les citations d'une seule annonce d'amarrage après une heure fixe. Nous
avons observé 5 posts uniques le 2026-10-01. Le plafond était de 5. Les
citations peuvent être des invitations ou des descriptions neutres, pas
seulement des réactions.

#### Réponses d'anniversaire

[Réponses à un anniversaire de la NASA](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-replies-to-a-news-post)

Examinez les réponses directes à un post d'anniversaire. Nous avons observé 5
posts uniques le 2026-10-01. Le plafond était de 5. L'absence du contexte racine
peut limiter le sens de l'analyse d'une réponse.

Gardez `maxItems` petit pendant que vous inspectez les résultats. Un plafond
limite la sortie, pas la disponibilité. Si moins de posts correspondent,
consultez le rapport du run avant de changer vos filtres. Élargissez 1 réglage à
la fois, comme les dates ou un seuil d'engagement. Notez le réglage que vous
avez changé.

Pour les analyses échouées, inspectez `analysis.reason` & relancez seulement les
ID concernés. Si les réponses d'un post semblent incomplètes, lisez la ligne de
diagnostic gratuite. Elle indique quand X a montré moins de réponses qu'il n'en
compte. Les légendes de médias ne peuvent pas décrire tout ce que montre une
image ou une vidéo. L'absence du contexte de citation ou de réponse peut rendre
une réponse incertaine.

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

## FAQ & support

Les réponses aux questions fréquentes, puis où trouver de l'aide.

### Ai-je besoin d'un compte d'IA, d'une clé API X ou d'une connexion ?

Non. X Tweet Sentiment Analysis de Xquik inclut les coûts d'IA dans son prix.
Vous n'avez besoin d'aucun compte d'IA, jeton ou clé. Vous n'avez pas non plus
besoin de clé API X, de connexion ou d'identifiants.

### Puis-je utiliser mes propres questions ?

Oui. Des `analysis.questions` personnalisées remplacent les questions par
défaut. Envoyez 1 à 8 questions de type `choice`, `score` ou `probability`. Les
questions à choix acceptent 2 à 255 catégories. Les questions de score demandent
au moins 2 niveaux ordonnés. Gardez les mêmes questions pour les runs que vous
voulez comparer.

### Pourquoi une ligne revient-elle avec une analyse échouée ou ignorée ?

`analysis.status` vaut `failed` ou `skipped`. L'Actor a collecté & livré le
post, mais l'analyse par IA n'a pas abouti. `analysis.reason` nomme la cause.
`context_limit` signifie que votre contexte & vos cibles ne laissent pas de
place au post. `service_unavailable` signifie que le service d'analyse était
brièvement indisponible. Ces lignes ne sont pas facturées comme résultats.
Raccourcissez `analysis.context` ou relancez les ID concernés.

L'Actor analyse quand même un post plus long que `maxContextBytes`. Il coupe
d'abord les posts cités & ceux auxquels le post répond, puis le post lui-même.
`analysis.contextAvailability.postText` vaut alors `truncated`. Augmentez
`maxContextBytes` jusqu'à 64 000 pour garder plus de texte.

### L'analyse vérifie-t-elle les faits ?

Non. Les réponses décrivent ce que le post exprime & la façon dont il le
présente. Les probabilités expriment la confiance de l'IA, pas la vérité.
Vérifiez les classements importants avec le post d'origine, que chaque ligne
garde.

### Quelles langues sont prises en charge ?

L'extraction prend en charge toutes les langues que X propose. Nous validons
d'abord l'analyse sur des scénarios clients en anglais. Les autres langues
prises en charge renvoient des réponses de même structure. Les catégories
`unclear` & les probabilités montrent l'incertitude dans toutes les langues.

### Comment limiter le coût ?

Les filtres, la déduplication & `maxItems` passent avant l'analyse. Vous payez
seulement les posts uniques et conformes à vos filtres. Utilisez des opérateurs
de recherche précis, des bornes de date & des seuils d'engagement. Commencez
avec un petit `maxItems` pour vérifier la qualité des réponses avant un gros
run.

### Est-il légal d'analyser des données X ?

L'Actor demande à X des champs publics. Les résultats peuvent contenir des
données personnelles. Assurez-vous d'avoir une finalité licite & respectez les
règles de protection des données applicables. En cas de doute, demandez conseil
à un juriste qualifié.

### Puis-je utiliser l'API, les planifications & les intégrations ?

Oui. Consultez
l'[onglet API](https://apify.com/xquik/x-tweet-sentiment-analysis/api) pour des
exemples en Python, JavaScript & cURL. Utilisez les
[planifications](https://docs.apify.com/platform/schedules) Apify pour des runs
récurrents. Passez l'ID du dataset précédent dans `monitor.baselineDatasetId`
pour voir ce qui a changé. Les intégrations Apify relient aussi les runs aux
webhooks, à Make, Zapier, n8n & Google Sheets.

### Où trouver de l'aide ?

Ouvrez une issue dans
l'[onglet Issues](https://apify.com/xquik/x-tweet-sentiment-analysis/issues)
avec l'ID du run. Les diagnostics gratuits du key-value store expliquent les
runs qui demandent votre attention. Un run qui ne récupère aucune ligne en
indique la raison dans son statut.
