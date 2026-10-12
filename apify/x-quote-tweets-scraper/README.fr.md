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
monde. Ses données X sont les plus complètes. X Quote Tweets Scraper de Xquik
collecte les posts qui citent des posts X publics, sans cookies X ni connexion.
La plupart des autres Actors Apify facturent avant de filtrer ou de dédupliquer.
Xquik facture seulement les résultats livrés, uniques et conformes à vos
filtres.

Collez des URL de post ou des ID de post et obtenez toutes les citations que X
fournit pour chaque post en 1 run. Chaque ligne contient la citation, le profil
public complet de son auteur et le post cité. Vous payez **$0.00015 par ligne
livrée**, et Apify facture l'usage de la plateforme à part.

> Xquik est un service tiers indépendant. Non affilié à X Corp.
> "Twitter" et "X" sont des marques déposées de X Corp.

## Données de la citation sur chaque ligne

- Le texte complet, le lien, la langue et l'heure de publication de la citation.
- Les J'aime, réponses, reposts, citations, vues et signets.
- Le profil public complet de l'auteur : nom, bio, abonnés, certification et
  plus encore.
- Les photos, vidéos et GIF avec leurs liens.
- Les hashtags, mentions et liens présents dans le texte.
- Le post cité lui-même, sous la même forme.
- `sourceTarget`, le post de l'entrée que la ligne cite.
- `position`, la place de la ligne dans le run, et `scrapedAt`, son heure de
  livraison.
- De nombreux posts en 1 run, chacun lu jusqu'au bout de ce que X fournit.
- Les plus récentes d'abord, ou les citations que X classe le plus haut.
- 11 filtres : langue, dates, type de média, 6 compteurs minimaux et auteurs
  certifiés.
- 1 ligne par auteur quand vous voulez des personnes, pas des posts.
- Des URL de post x.com et twitter.com, ou des ID de post numériques.
- La suppression des doublons avant la facturation.
- Des exports JSON, CSV, Excel, XML et RSS via les datasets Apify.
- Les runs reprennent depuis un état enregistré après une migration Apify.

## Comment scraper des citations de posts

1. Ouvrez X Quote Tweets Scraper de Xquik dans Apify Console.
2. Collez des URL de post dans `startUrls` ou des ID de post dans `tweetIds`.
3. Réglez `maxItems` pour plafonner les lignes livrées, puis cliquez sur Start.
4. Téléchargez le dataset en JSON, CSV ou Excel, ou passez par l'API Apify.

Vous ne saisissez ni cookies X, ni identifiants de connexion, ni clé API, à
aucune étape. Vous ne transmettez aucun curseur de page d'un run à l'autre.

## Entrée

`startUrls` accepte chaque URL de post comme simple chaîne ou comme objet
`{ "url": "..." }`. `tweetIds` accepte des ID de post, et une URL de post y
fonctionne aussi :

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

L'ordre, les filtres et les plafonds se placent à côté des posts :

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
- `maxItems` plafonne le run entier et `maxItemsPerTarget` plafonne chaque post.
- Les filtres sont `language`, `sinceDate`, `untilDate`, `mediaType`,
  `minLikes`, `minReplies`, `minRetweets`, `minQuotes`, `minViews`,
  `minBookmarks` et `verifiedOnly`.

Un post que l'entrée donne 2 fois est lu 1 seule fois. `tweetUrls`, `tweetId`,
`tweets` et `tweet_id` fonctionnent comme d'autres noms pour les posts. Les
petits runs sans problème n'écrivent pas `run-report` et réduisent l'usage
Apify. Activez `alwaysSaveRunRecords` pour l'écrire à chaque run.

## Sortie

Chaque citation donne 1 ligne de dataset avec `id`, `url`, `text`, `createdAt`,
`lang`, `likeCount`, `replyCount`, `retweetCount`, `quoteCount`, `viewCount`,
`bookmarkCount`, `media`, `entities`, `author`, `quotedTweetId` et
`quoted_tweet`. L'Actor ajoute `sourceTarget`, `position`, `scrapedAt` et
`resultType`. Les champs absents de la source restent absents. X Quote Tweets
Scraper de Xquik n'invente aucune valeur.

Les exemples utilisent des valeurs fictives. Les résultats reflètent les données
en direct. Une ligne ressemble à ceci :

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

`position` compte les lignes livrées à partir de 1, après les filtres et la
déduplication. Le dataset a 2 vues en tableau. "Quote Tweets" montre chaque
citation avec ses compteurs. "Quote Authors" montre qui a cité chaque post, avec
les champs de profil de l'auteur en colonnes.

## Ce que X fournit

2 limites viennent de X, et X Quote Tweets Scraper de Xquik les énonce
clairement :

- La recherche de X décide jusqu'où remontent les citations d'un très gros post.
  Un run lit toutes les citations que X fournit et s'arrête là.
- `top` est le classement de X, pas celui de Xquik. Ce n'est pas un tri par
  nombre de J'aime. Une ligne suivante peut avoir plus de J'aime qu'une ligne
  précédente.

## Combien coûte le scraping de citations de posts ?

Le prix est de $0.00015 par ligne livrée sur chaque plan Apify. Apify facture
votre usage de la plateforme à part.

- Une facturation par ligne de données livrée. Les diagnostics sont gratuits
  dans `diagnostics`.
- Pas de frais de démarrage.
- Un post absent de X n'ajoute ni ligne ni frais.
- Les filtres et `uniqueAuthors` s'appliquent avant la facturation, donc une
  citation écartée ne coûte rien.
- La déduplication a lieu avant la facturation.
- Les réglages de coût total maximal d'Apify plafonnent les lignes livrées.

## Limites et reprise

X Quote Tweets Scraper de Xquik lit de nombreux posts en 1 run. Un redémarrage
d'Apify ne fait perdre ni les lignes livrées ni la progression. L'Actor n'ajoute
aucune limite de temps. Il respecte tout timeout Apify que vous réglez.

Le statut du run nomme les posts que X ne trouve pas et vous invite à vérifier
l'URL ou l'ID. Une extraction interrompue écrit un diagnostic `partial` gratuit.
Les résultats disponibles restent intacts. Lisez `availableResults`,
`failedTargets`, `retryable` et `nextAction` avant de relancer. Une sortie
réussie de l'Actor confirme la livraison, pas une extraction complète.

Le statut du run nomme chaque cause d'arrêt anticipé. `stopCauses` liste chaque
cause avec ses propres `message`, `retryable` et `nextAction`. Le run est
`retryable` dès qu'une cause l'est.

## Actors Xquik associés

Tous les Actors Xquik partagent le même moteur d'extraction, la même facturation
après filtrage et les mêmes diagnostics. Choisissez celui qui correspond aux
données dont vous avez besoin.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper) : scrape des posts
  (tweets) depuis des recherches, des fils de profil, des Listes et des ID de
  post, avec plus de 50 filtres et des exports plats. Utilisez-le quand vous
  avez besoin de données de posts sans analyse. À partir de $0.00015 par ligne.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper) : scrape des
  profils ainsi que leurs posts, réponses, médias et abonnés à partir de noms
  d'utilisateur, d'ID ou d'URL. Utilisez-le quand vous partez de comptes plutôt
  que de recherches. À partir de $0.00015 par ligne.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper) : scrape des
  réponses, des commentaires et des conversations entières sous les posts avec
  plus de 25 filtres. Utilisez-le quand vous avez besoin des échanges sous les
  posts. À partir de $0.00015 par ligne.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper) : scrape
  en masse les réponses, citations, comptes qui ont reposté et discussions de
  posts, à partir d'URL ou d'ID. Utilisez-le pour mesurer qui a interagi avec
  des posts. À partir de $0.00015 par ligne.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper) : scrape les
  abonnés, les abonnements, les membres et abonnés de Liste et les membres de
  Communauté sous forme de lignes de profil. Utilisez-le quand vous avez besoin
  de listes d'audience ou de membres. À partir de $0.00015 par profil.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper) :
  recherche des comptes par nom d'utilisateur, bio et localisation, avec des
  filtres d'abonnés, de certification, d'ancienneté et de localisation.
  Utilisez-le pour créer des listes de comptes à partir d'une recherche. À
  partir de $0.00015 par profil.
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper) :
  vérifie où sont basés les comptes avec le libellé "Account based in" de X, la
  façon dont ils se sont connectés à X et leurs changements de nom
  d'utilisateur. Utilisez-le quand vous vérifiez où sont basés des comptes. À
  partir de $0.00015 par compte.
- [X List Scraper](https://apify.com/xquik/x-list-scraper) : scrape les posts,
  membres et abonnés d'une Liste à partir d'URL ou d'ID de Liste. Utilisez-le
  quand une Liste choisie définit vos sources. À partir de $0.00015 par ligne.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper) : scrape
  les infos, posts, recherches, membres et modérateurs d'une Communauté.
  Utilisez-le quand vos sources sont des Communautés X. À partir de $0.00015 par
  ligne.
- [X Space Scraper](https://apify.com/xquik/x-space-scraper) : trouve des Spaces
  par mot-clé et lit leurs titres, états, heures, nombres d'auditeurs, hôtes et
  intervenants. Lit aussi des diffusions par URL ou par ID. Utilisez-le quand
  vous suivez l'audio et la vidéo en direct sur X. À partir de $0.00015 par
  Space ou diffusion.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper) : scrape les
  tendances en temps réel par lieu, avec rang, volume, requête et WOEID.
  Utilisez-le pour suivre les tendances de chaque lieu. À partir de $0.00015 par
  tendance.
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper) : scrape les offres
  d'emploi X par mot-clé, lieu, mode de travail, niveau d'expérience et
  entreprise, avec salaires et liens de candidature. Utilisez-le quand vous
  collectez des offres d'emploi publiées sur X. À partir de $0.00015 par offre.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper) : scrape les
  Articles X longs en Markdown et en texte, avec couvertures, auteurs, dates et
  métriques. Utilisez-le quand vous avez besoin du corps des Articles, pas des
  posts. À partir de $0.00015 par article.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader) : extrait ou
  stocke des photos, vidéos et GIF à partir de posts ou de profils, avec des
  options MP4 et de métadonnées. Utilisez-le quand vous avez besoin des fichiers
  médias eux-mêmes. À partir de $0.00015 par ligne média.
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

Les réponses aux questions fréquentes, puis où trouver de l'aide.

### Ai-je besoin de cookies X, d'une clé API ou d'une connexion ?

Non. X Quote Tweets Scraper de Xquik n'a besoin ni de cookies X, ni de clé API,
ni de connexion, ni d'identifiants. Chaque lecture s'exécute sur
l'infrastructure de Xquik.

### Puis-je scraper les citations de nombreux posts en 1 run ?

Oui. Collez autant d'URL de post ou d'ID de post que nécessaire. Le
`sourceTarget` de chaque ligne indique quel post elle cite.

### Combien de citations 1 run peut-il renvoyer ?

Un run peut renvoyer 100 000 lignes et plus. Pour un export complet, montez
`maxItems` au-dessus des 1 000 que le formulaire propose au départ.

### Pourquoi un post énorme renvoie-t-il moins de citations que son compteur n'en affiche ?

La recherche de X décide jusqu'où remontent les citations d'un très gros post.
Le run livre toutes les citations que X fournit. Le compteur inclut aussi les
citations de comptes privés ou supprimés.

### Comment obtenir 1 ligne par personne ayant cité un post ?

Activez `uniqueAuthors`. Le run garde la première citation de chaque auteur et
ignore les suivantes sans les facturer.

### Est-il légal de scraper des citations de posts ?

X Quote Tweets Scraper de Xquik collecte des posts publics de X. Les résultats
peuvent contenir des données personnelles. Assurez-vous d'avoir une finalité
licite et respectez les règles de protection des données applicables. En cas de
doute, demandez conseil à un juriste qualifié.

### Pourquoi mon run n'a-t-il renvoyé aucun résultat ?

Lisez d'abord le statut du run. Le statut d'un run vide indique si X ne trouve
pas un post ou si le post n'a aucune citation conforme à vos filtres. La sortie
gratuite `diagnostics` apparaît quand un point demande votre attention. Son
`stopCauses` donne à chaque cause une `nextAction` à suivre.

### Puis-je utiliser l'API, les planifications et les intégrations ?

Oui. Utilisez l'API Apify ou l'API REST de Xquik.
L'[onglet API](https://apify.com/xquik/x-quote-tweets-scraper/api) propose des
exemples en Python, JavaScript et cURL. Les
[planifications](https://docs.apify.com/platform/schedules) Apify lancent X
Quote Tweets Scraper de Xquik selon un cron. Les agents passent par
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Utilisez
`latest`, sauf si vous avez besoin d'une build plus ancienne.

### Où trouver de l'aide ?

Ouvrez une issue sur la page de l'Actor ou écrivez à <support@xquik.com> avec
l'ID du run. Les diagnostics gratuits du key-value store expliquent les runs qui
demandent votre attention. Un run qui ne reçoit aucune ligne en donne la raison
dans son statut.

### Puis-je obtenir une solution sur mesure ?

Oui. Rendez-vous sur [xquik.com](https://xquik.com) ou lisez la
[documentation de l'API](https://docs.xquik.com/introduction). Elle couvre le
tableau de bord, l'API, le serveur MCP et les webhooks.
