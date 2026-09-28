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
monde. Ses données X sont les plus complètes. X Engagement Scraper de Xquik
collecte les réponses, les citations, les comptes qui ont reposté et les
discussions de n'importe quel post. La plupart des autres Actors Apify facturent
avant de filtrer ou de dédupliquer. Xquik facture seulement les résultats
livrés, uniques et conformes à vos filtres.

Collectez les réponses, les citations, les comptes qui ont reposté (retweeters)
et le contexte de discussion pour 1 ou plusieurs posts X (Twitter). Vous payez
**$0.00015 par ligne livrée**, et Apify facture l'usage de la plateforme à part.
Vous n'avez besoin ni de clé API X ni de connexion.

> Xquik est un service tiers indépendant. Non affilié à X Corp.
> "Twitter" et "X" sont des marques déposées de X Corp.

## Réponses, citations et profils

- Des URL de posts et des ID de post numériques.
- Les réponses directes, sur les pages de résultats disponibles.
- Les réponses directes et imbriquées, en 4 ordres de tri.
- Les détails du post source, en ligne optionnelle.
- Les citations avec texte, auteurs, médias et métriques.
- Les profils des comptes qui ont reposté.
- Le contexte de conversation autour de chaque post source.
- Plusieurs types d'engagement et plusieurs posts en 1 run.
- Un plafond global et un plafond par ressource d'engagement.
- L'attribution de chaque ligne à son post source et à son type d'engagement.
- Les runs reprennent après un redémarrage d'Apify.

## Comment scraper l'engagement de posts X

1. Ouvrez X Engagement Scraper de Xquik dans Apify Console.
2. Collez des URL de posts dans `startUrls` ou des ID de post numériques dans
   `tweetIds`.
3. Choisissez `engagementTypes` et ajoutez des filtres comme `minLikes` ou
   `language`.
4. Réglez `maxItems` pour plafonner les lignes livrées, puis cliquez sur Start.
5. Téléchargez le dataset en JSON, CSV ou Excel, ou passez par l'API Apify.

## Entrée

```json
{
  "tweetIds": ["2082577277246972300"],
  "engagementTypes": ["replies", "quotes", "retweeters"],
  "maxItems": 10000
}
```

En 2024, X a cessé de montrer qui a aimé un post. Le type `favoriters` ne
renvoie aucune ligne. Un run sans ligne donne cette raison dans son diagnostic.

Par défaut, chaque compte ou post apparaît une fois par type d'engagement, avec
1 facturation. Réglez `dedupeAcrossTargets` sur `false` pour garder une ligne
par post source. Le statut du run compte les doublons ignorés, sans frais.

Les petits runs sans problème n'écrivent pas `run-report` et réduisent l'usage
Apify. Activez `alwaysSaveRunRecords` pour l'écrire à chaque run.

## Sortie

Dans chaque ligne, `resultType` vaut `tweet`, `replies`, `completeReplies`,
`quotes`, `retweeters`, `favoriters` ou `thread`. `sourceTarget` contient l'ID
du post source. Les champs de post et de profil suivent la structure stable des
réponses de l'API REST de Xquik.

`completeReplies` garde chaque ligne renvoyée. Le rapport du run compte la
couverture partielle dans `incompleteTargets`. Les filtres s'appliquent avant la
facturation.

Les exemples utilisent des valeurs fictives. Les résultats reflètent les données
en direct. Une ligne de réponse ressemble à ceci :

```json
{
  "resultType": "replies",
  "sourceTarget": "2082577277246972300",
  "inReplyToId": "2082577277246972300",
  "username": "sample_user",
  "text": "Sample reply text",
  "likeCount": 12
}
```

## Horodatage des reposts (retweets)

Réglez `includeRetweetTimestamp` sur `true` pour les résultats `retweeters`. La
colonne `retweetedAt` contient l'heure observée du repost, en UTC.

X Engagement Scraper de Xquik trouve l'heure du repost quand X montre encore ce
repost. Pour un repost ancien, supprimé ou indisponible, l'horodatage reste
`null`. Le profil reste dans la sortie. Une valeur `null` ne prouve pas qu'un
compte n'a jamais reposté un post.

Cette option ralentit les runs. Laissez-la désactivée si vous voulez seulement
les profils. Le `createdAt` du profil reste la date de création du compte. Les
lignes de post portent `retweetedAt` quand elles contiennent un repost. Les
dates des posts d'origine et les heures de scraping ne remplacent jamais les
heures de repost. Les prix des résultats et la facturation par ligne livrée
restent les mêmes.

## Combien coûte le scraping de l'engagement de posts X ?

Le prix est de $0.00015 par ligne livrée sur chaque plan Apify. Apify facture
l'usage de votre plateforme à part.

- Une facturation par ligne de données livrée. Les diagnostics sont gratuits
  dans `diagnostics`.
- Pas de frais de démarrage, de post, de type d'engagement ou de page.
- La déduplication a lieu avant la facturation.

## Limites et reprise

X Engagement Scraper de Xquik lit de nombreux posts et types d'engagement en 1
run. Un redémarrage d'Apify ne fait perdre ni les lignes livrées ni la
progression. L'Actor n'ajoute aucune limite de temps.

Une extraction interrompue écrit un diagnostic `partial` gratuit. Les résultats
disponibles restent intacts. Lisez `availableResults`, `failedTargets`,
`retryable` et `nextAction` avant de relancer. Une sortie réussie de l'Actor
confirme la livraison, pas une extraction complète.

Le statut du run nomme chaque cause d'arrêt anticipé. `stopCauses` liste chaque
cause avec ses propres `message`, `retryable` et `nextAction`. Les causes sont
`target_not_found`, `target_failed`, `pagination_safety_limit`, `reply_reach` et
`deadline_reached`. `reply_reach` signifie que X n'a renvoyé qu'une partie des
réponses d'une conversation. Une cible introuvable n'entre dans la liste que si
une autre cause a arrêté le run. Le run est `retryable` dès qu'une cause l'est.

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

Non. X Engagement Scraper de Xquik n'a besoin ni de clé API X, ni de connexion,
ni d'identifiants.

### Est-il légal de scraper des données d'engagement X ?

X Engagement Scraper de Xquik collecte des champs publics de X. Les résultats
peuvent contenir des données personnelles. Assurez-vous d'avoir une finalité
licite et respectez les règles de protection des données applicables. En cas de
doute, demandez conseil à un juriste qualifié.

### Pourquoi mon run n'a-t-il renvoyé aucun résultat ?

Ouvrez d'abord la sortie gratuite `diagnostics`. Le statut d'un run vide vous
invite à vérifier vos cibles et vos filtres. `stopCauses` donne à chaque cause
une `nextAction` à suivre. Le run liste chaque entrée qu'il ne peut pas lire et
indique comment la corriger. X a cessé de montrer qui a aimé un post en 2024,
donc `favoriters` ne renvoie aucune ligne.

### Puis-je utiliser l'API, les planifications et les intégrations ?

Oui. Choisissez parmi 50 tâches publiques ou 129 opérations REST de Xquik.
L'[onglet API](https://apify.com/xquik/x-engagement-scraper/api) propose des
exemples en Python, JavaScript et cURL. Les
[planifications](https://docs.apify.com/platform/schedules) Apify lancent X
Engagement Scraper de Xquik selon un cron. Les agents passent par
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
