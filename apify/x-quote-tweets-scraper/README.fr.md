[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · **Français** · [Italiano](README.it.md)

[![Framer connecte Xquik MCP aux agents de codage](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Découvrez comment Framer utilise les scrapers Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
avec Claude Code, Codex, Cursor & d'autres outils, à partir de 6:07.

Xquik est le service de scraping X (Twitter) le plus rapide et le moins cher au
monde. Ses données X sont les plus complètes. X Quote Tweets Scraper de Xquik
collecte les posts qui citent des posts X publics, sans cookies X ni connexion.
La plupart des autres Actors Apify facturent avant de filtrer ou de dédupliquer.
Xquik facture seulement les résultats livrés, uniques et conformes à vos
filtres.

Collez des URL de post ou des ID de post & obtenez toutes les citations que X
fournit pour chaque post en 1 run. Chaque ligne contient la citation, le profil
public complet de son auteur & le post cité. Vous payez **$0.00015 par ligne
livrée**, & Apify facture l'usage de la plateforme à part.

> Xquik est un service tiers indépendant. Non affilié à X Corp. "Twitter" et "X"
> sont des marques déposées de X Corp.

## Données de la citation sur chaque ligne

- Le texte complet, le lien, la langue & l'heure de publication de la citation.
- Les J'aime, réponses, reposts, citations, vues & signets.
- Le profil public complet de l'auteur, avec nom, bio, abonnés, certification &
  plus encore.
- Les photos, vidéos & GIF avec leurs liens.
- Les hashtags, mentions & liens présents dans le texte.
- Le post cité lui-même, sous la même forme.
- `sourceTarget`, le post de l'entrée que la ligne cite.
- `position`, la place de la ligne dans le run, & `scrapedAt`, son heure de
  livraison.
- De nombreux posts en 1 run, chacun lu jusqu'au bout de ce que X fournit.
- Les plus récentes d'abord, ou les citations que X classe le plus haut.
- 11 filtres pour la langue, les dates, le type de média, 6 compteurs minimaux &
  les auteurs certifiés.
- 1 ligne par auteur quand vous voulez des personnes, pas des posts.
- Des URL de post `x.com` & `twitter.com`, ou des ID de post numériques.
- La suppression des doublons avant la facturation.
- Des exports JSON, CSV, Excel, XML & RSS via les datasets Apify.
- Les runs reprennent depuis un état enregistré après une migration Apify.

## Comment scraper des citations de posts

Vous débutez sur Apify ?
[Créez d'abord un compte gratuit](https://console.apify.com/sign-up?fpr=xquik).
Le plan gratuit ne demande aucune carte bancaire & donne $5 à dépenser chaque
mois. À $0.00015 par post, $5 couvrent jusqu'à 33 000 posts, hors usage de la
plateforme. Revenez ensuite ici & cliquez sur Try for free.

1. Ouvrez X Quote Tweets Scraper de Xquik dans Apify Console.
2. Collez des URL de post dans `startUrls` ou des ID de post dans `tweetIds`.
3. Réglez `maxItems` pour plafonner les lignes livrées, puis cliquez sur Start.
4. Téléchargez le dataset en JSON, CSV ou Excel, ou utilisez l'API Apify.

Vous ne saisissez ni cookies X, ni identifiants de connexion, ni clé API, à
aucune étape. Vous ne transmettez aucun curseur de page d'un run à l'autre.

## Entrée

`startUrls` accepte chaque URL de post comme simple chaîne ou comme objet
`{ "url": "..." }`. `tweetIds` accepte des ID de post, & une URL de post y
fonctionne aussi.

```json
{
  "startUrls": [
    "https://x.com/OpenAI/status/2082577277246972300",
    { "url": "https://twitter.com/jack/status/20" }
  ],
  "tweetIds": ["2082201573976056245"],
  "maxItems": 1000
}
```

L'ordre, les filtres & les plafonds se placent à côté des posts.

```json
{
  "tweetIds": ["2082577277246972300"],
  "sort": "top",
  "language": "en",
  "minLikes": 10,
  "sinceDate": "2026-10-01",
  "maxItemsPerTarget": 200,
  "uniqueAuthors": true
}
```

- `sort` vaut `latest` pour les citations les plus récentes d'abord, ou `top`
  pour les citations que X classe le plus haut.
- `includeReplies` garde les réponses qui citent le post, comme la vue Citations
  de X les liste. Il est activé tant que vous ne le désactivez pas.
- `uniqueAuthors` garde la première citation de chaque auteur dans le run. Le
  dataset contient alors 1 ligne par auteur, pas par citation. Vous payez les
  lignes livrées.
- `maxItems` plafonne le run entier & `maxItemsPerTarget` plafonne chaque post.
- Les filtres sont `language`, `sinceDate`, `untilDate`, `mediaType`,
  `minLikes`, `minReplies`, `minRetweets`, `minQuotes`, `minViews`,
  `minBookmarks` & `verifiedOnly`.

Un post que l'entrée cite 2 fois est lu 1 seule fois. `tweetUrls`, `tweetId`,
`tweets` & `tweet_id` fonctionnent comme d'autres noms pour les posts. Les
petits runs sans problème n'écrivent pas `run-report` & réduisent l'usage Apify.
Activez `alwaysSaveRunRecords` pour l'écrire à chaque run.

## Sortie

Chaque citation donne 1 ligne de dataset avec `id`, `url`, `text`, `createdAt`,
`lang`, `likeCount`, `replyCount`, `retweetCount`, `quoteCount`, `viewCount`,
`bookmarkCount`, `media`, `entities`, `author`, `quotedTweetId` &
`quoted_tweet`. L'Actor ajoute `sourceTarget`, `position`, `scrapedAt` &
`resultType`. Les champs absents de la source restent absents. X Quote Tweets
Scraper de Xquik n'invente aucune valeur.

Les exemples utilisent des valeurs fictives. Les résultats reflètent les données
en direct. Une ligne ressemble à ceci.

```json
{
  "id": "1900000000000000001",
  "url": "https://x.com/sample_user/status/1900000000000000001",
  "text": "Worth a read. The second chart says it all.",
  "createdAt": "2026-10-11T09:00:00.000Z",
  "lang": "en",
  "likeCount": 42,
  "replyCount": 3,
  "retweetCount": 5,
  "quoteCount": 1,
  "viewCount": 1800,
  "bookmarkCount": 2,
  "author": {
    "id": "1234567890",
    "username": "sample_user",
    "name": "Sample User",
    "followers": 1200,
    "verified": true
  },
  "quotedTweetId": "1900000000000000000",
  "quoted_tweet": {
    "id": "1900000000000000000",
    "text": "Our new report is out."
  },
  "resultType": "quotes",
  "sourceTarget": "1900000000000000000",
  "position": 1,
  "scrapedAt": "2026-10-12T09:00:00.000Z"
}
```

`position` compte les lignes livrées à partir de 1, après les filtres & la
déduplication. Le dataset a 2 vues en tableau. "Quote Tweets" montre chaque
citation avec ses compteurs. "Quote Authors" montre qui a cité chaque post, avec
les champs de profil de l'auteur en colonnes.

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

- Utilisez un point pour un champ placé dans un objet. La casse & les tirets bas
  ne comptent pas.
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

## Ce que X fournit

2 limites viennent de X, & X Quote Tweets Scraper de Xquik les énonce
clairement.

- Sur un post avec beaucoup de citations, la recherche de X peut s'arrêter avant
  les plus anciennes. Un run lit toutes les citations que X fournit & s'arrête
  là.
- `top` est le classement de X, pas celui de Xquik. Ce n'est pas un tri par
  nombre de J'aime. Une ligne suivante peut avoir plus de J'aime qu'une ligne
  précédente.

## Combien coûte le scraping de citations de posts ?

Sur chaque plan Apify, le prix est de $0.00015 par ligne livrée. Apify facture
votre usage de la plateforme à part.

Pour plus de volume,
[choisissez un plan Apify](https://apify.com/pricing?fpr=xquik) avec plus
d'usage prépayé.

- Une facturation par ligne de données livrée. Les diagnostics sont gratuits
  dans `diagnostics`.
- Pas de frais de démarrage.
- Un post que X n'a pas n'ajoute ni ligne ni frais.
- Les filtres & `uniqueAuthors` passent avant la facturation, donc une citation
  écartée ne coûte rien.
- La déduplication passe avant la facturation.
- Les réglages de coût total maximal d'Apify plafonnent les lignes livrées.

## Limites & reprise

X Quote Tweets Scraper de Xquik lit de nombreux posts en 1 run. Les lignes
livrées & la progression survivent à un redémarrage d'Apify. L'Actor n'ajoute
aucune limite de temps propre. Il respecte tout timeout Apify que vous réglez.

Le statut du run nomme les posts que X ne trouve pas & vous invite à vérifier
l'URL ou l'ID. Une extraction interrompue écrit un diagnostic `partial` gratuit.
Les résultats disponibles restent intacts. Lisez `availableResults`,
`failedTargets`, `retryable` & `nextAction` avant de relancer. Une sortie
réussie de l'Actor confirme la livraison, pas une extraction complète.

Le statut du run nomme chaque cause d'arrêt anticipé. `stopCauses` liste chaque
cause avec ses propres `message`, `retryable` & `nextAction`. Le run est
`retryable` dès qu'une cause l'est.

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

### Ai-je besoin de cookies X, d'une clé API ou d'une connexion ?

Non. X Quote Tweets Scraper de Xquik n'a besoin d'aucun cookie X, d'aucune clé
API, d'aucune connexion ni d'aucun identifiant. Chaque lecture passe par
l'infrastructure de Xquik.

### Puis-je scraper les citations de nombreux posts en 1 run ?

Oui. Collez autant d'URL de post ou d'ID de post que nécessaire. Le
`sourceTarget` de chaque ligne indique quel post elle cite.

### Combien de citations 1 run peut-il renvoyer ?

Un run peut renvoyer 100 000 lignes & plus. Pour un export complet, montez
`maxItems` au-dessus des 1 000 que le formulaire propose au départ.

### Pourquoi un post avec beaucoup de citations en renvoie-t-il moins que son compteur n'en affiche ?

Sur un post avec beaucoup de citations, la recherche de X peut s'arrêter avant
les plus anciennes. Le run livre toutes les citations que X fournit. Le compteur
inclut aussi les citations de comptes privés ou supprimés.

### Comment obtenir 1 ligne par personne qui a cité un post ?

Activez `uniqueAuthors`. Le run garde la première citation de chaque auteur &
ignore ses citations suivantes sans les facturer.

### Est-il légal de scraper des citations de posts ?

X Quote Tweets Scraper de Xquik demande à X des posts publics. Les résultats
peuvent contenir des données personnelles. Assurez-vous d'avoir une finalité
licite & respectez les règles de protection des données applicables. En cas de
doute, demandez conseil à un juriste qualifié.

### Pourquoi mon run n'a-t-il renvoyé aucun résultat ?

Lisez d'abord le statut du run. Le statut d'un run vide indique si X ne trouve
pas un post ou si le post n'a aucune citation conforme à vos filtres. La sortie
gratuite `diagnostics` apparaît quand quelque chose demande votre attention. Son
`stopCauses` donne à chaque cause une `nextAction` à suivre.

### Puis-je utiliser l'API, les planifications & les intégrations ?

Oui. Utilisez l'API Apify ou l'API REST de Xquik.
L'[onglet API](https://apify.com/xquik/x-quote-tweets-scraper/api) contient des
exemples en Python, JavaScript & cURL. Les
[planifications](https://docs.apify.com/platform/schedules) Apify lancent X
Quote Tweets Scraper de Xquik selon un cron. Les agents utilisent
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Utilisez `latest`
sauf si vous avez besoin d'une build plus ancienne.

### Où trouver de l'aide ?

Ouvrez une issue dans
l'[onglet Issues](https://apify.com/xquik/x-quote-tweets-scraper/issues) avec
l'ID du run. Les diagnostics gratuits du key-value store expliquent les runs qui
demandent votre attention. Un run qui ne récupère aucune ligne en indique la
raison dans son statut.

### Puis-je obtenir une solution sur mesure ?

Oui. Décrivez votre besoin dans
l'[onglet Issues](https://apify.com/xquik/x-quote-tweets-scraper/issues). Xquik
propose aussi un tableau de bord, une API REST, un serveur MCP & des webhooks.
Trouvez le site web de Xquik sur son [profil Apify](https://apify.com/xquik).
