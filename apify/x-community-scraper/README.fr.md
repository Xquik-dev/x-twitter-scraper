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
monde. Ses données X sont les plus complètes. X Community Scraper de Xquik
collecte les infos, les posts, les recherches, les membres et les modérateurs
d'une Communauté. La plupart des autres Actors Apify facturent avant de filtrer
ou de dédupliquer. Xquik facture seulement les résultats livrés, uniques et
conformes à vos filtres.

Collectez les infos, les posts, les résultats par mot-clé, les membres et les
modérateurs d'une Communauté X (Twitter) à partir d'URL ou d'ID de Communauté.
Vous payez **$0.00015 par ligne livrée**, et Apify facture l'usage de la
plateforme à part. Vous n'avez besoin ni de clé API X ni de connexion.

> Xquik est un service tiers indépendant. Non affilié à X Corp.
> "Twitter" et "X" sont des marques déposées de X Corp.

## Données de Communauté et filtres

- Les métadonnées et les règles de la Communauté, quand X les rend publiques.
- Les derniers posts de la Communauté.
- La recherche par mot-clé, triée par Latest ou Top.
- Les membres et les modérateurs de la Communauté.
- Des filtres de posts, de membres et de modérateurs, appliqués avant la
  facturation.
- Plusieurs Communautés et ressources en 1 run.
- Un plafond global et un plafond par ressource.
- Les runs reprennent après un redémarrage d'Apify.
- La suppression des doublons avant la facturation.

## Comment scraper des Communautés X

1. Ouvrez X Community Scraper de Xquik dans Apify Console.
2. Collez des URL de Communauté dans `startUrls` ou des ID dans `communityIds`.
3. Choisissez `resources` et ajoutez des filtres comme `sinceDate` ou
   `minLikes`.
4. Réglez `maxItems` pour plafonner les lignes livrées, puis cliquez sur Start.
5. Téléchargez le dataset en JSON, CSV ou Excel, ou passez par l'API Apify.

## Entrée

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["info", "tweets", "members", "moderators"],
  "maxItems": 10000
}
```

Pour une recherche par mot-clé, ajoutez `"search"` à `resources` et renseignez
`query`.

Les petits runs sans problème n'écrivent pas `run-report` et réduisent l'usage
Apify. Activez `alwaysSaveRunRecords` pour l'écrire à chaque run.

## Sortie

Dans chaque ligne, `resultType` vaut `community`, `communityTweet`,
`communityMember` ou `communityModerator`. Chaque ligne inclut `sourceTarget`
pour la Communauté d'entrée. X Community Scraper de Xquik garde les champs
source et n'invente aucune valeur.

Les exemples utilisent des valeurs fictives. Les résultats reflètent les données
en direct. Une ligne d'infos de Communauté ressemble à ceci :

```json
{
  "resultType": "community",
  "sourceTarget": "1493446837214187523",
  "name": "Sample Community",
  "member_count": 1200,
  "moderator_count": 4
}
```

## Combien coûte le scraping de Communautés X ?

Le prix est de $0.00015 par ligne livrée sur chaque plan Apify. Apify facture
l'usage de votre plateforme à part.

- Une facturation par ligne de données livrée. Les diagnostics sont gratuits
  dans `diagnostics`.
- Pas de frais de démarrage, de Communauté, de ressource ou de requête.
- La déduplication a lieu avant la facturation.

## Limites et reprise

X Community Scraper de Xquik lit de nombreuses Communautés et ressources en 1
run. Un redémarrage d'Apify ne fait perdre ni les lignes livrées ni la
progression. L'Actor n'ajoute aucune limite de temps. Il renvoie seulement les
Communautés publiques accessibles sur X. Les champs disponibles varient selon la
Communauté.

Une extraction interrompue écrit un diagnostic `partial` gratuit. Les résultats
disponibles restent intacts. Lisez `availableResults`, `failedTargets`,
`retryable` et `nextAction` avant de relancer. Une sortie réussie de l'Actor
confirme la livraison, pas une extraction complète.

Le statut du run nomme chaque cause d'arrêt anticipé. `stopCauses` liste chaque
cause avec ses propres `message`, `retryable` et `nextAction`. Les causes sont
`target_not_found`, `target_failed`, `pagination_safety_limit` et
`deadline_reached`. Une cible introuvable n'entre dans la liste que si une autre
cause a arrêté le run. Le run est `retryable` dès qu'une cause l'est.

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

Non. X Community Scraper de Xquik n'a besoin ni de clé API X, ni de connexion,
ni d'identifiants.

### Est-il légal de scraper des Communautés X ?

X Community Scraper de Xquik collecte des champs publics de X. Les résultats
peuvent contenir des données personnelles. Assurez-vous d'avoir une finalité
licite et respectez les règles de protection des données applicables. En cas de
doute, demandez conseil à un juriste qualifié.

### Pourquoi mon run n'a-t-il renvoyé aucun résultat ?

Ouvrez d'abord la sortie gratuite `diagnostics`. Le statut d'un run vide vous
invite à vérifier vos cibles et vos filtres. `stopCauses` donne à chaque cause
une `nextAction` à suivre. Le run liste chaque entrée qu'il ne peut pas lire et
indique comment la corriger. X Community Scraper de Xquik renvoie seulement les
Communautés publiques accessibles sur X.

### Puis-je utiliser l'API, les planifications et les intégrations ?

Oui. Choisissez parmi 50 tâches publiques ou 129 opérations REST de Xquik.
L'[onglet API](https://apify.com/xquik/x-community-scraper/api) propose des
exemples en Python, JavaScript et cURL. Les
[planifications](https://docs.apify.com/platform/schedules) Apify lancent X
Community Scraper de Xquik selon un cron. Les agents passent par
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Utilisez
`latest`, sauf si vous avez besoin d'une build plus ancienne.

### Où trouver de l'aide ?

Ouvrez une issue sur la page de l'Actor ou écrivez à support@xquik.com avec l'ID
du run. Les diagnostics gratuits du key-value store expliquent les runs vides,
partiels ou interrompus.

### Puis-je obtenir une solution sur mesure ?

Oui. Rendez-vous sur [xquik.com](https://xquik.com) ou lisez la
[documentation de l'API](https://docs.xquik.com/introduction). Elle couvre le
tableau de bord, l'API, le serveur MCP et les webhooks.
