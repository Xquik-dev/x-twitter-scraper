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
au monde, avec les données X les plus complètes. X Profile Scraper collecte
les profils, posts, réponses, médias et abonnés pour n'importe quel handle.
Tous les autres Actors Apify facturent avant de filtrer ou de dédupliquer.
Xquik ne facture que les résultats livrés, uniques et conformes aux filtres.

Scrapez des profils X, leurs posts, réponses, médias et abonnés. Utilisez
des handles, des ID ou des URL. Aucune clé API X ni connexion requise.

## Profils et fils

- Extrayez la bio, les compteurs, la vérification, la localisation
  renseignée par le propriétaire, le site web et les médias.
- Incluez le champ « Compte basé à » public de X, quand disponible, calculé
  au mieux.
- Ajoutez les lignes Profile Posts et With Replies sur toutes les pages de
  résultats disponibles.
- Ajoutez les médias, abonnés, comptes suivis ou abonnés vérifiés.
- Filtrez les posts optionnels par date, médias, vérification, statut de
  repost et métriques.
- Filtrez les profils optionnels par audience, activité, ancienneté et
  métadonnées publiques.
- L'Actor retire les lignes en double avant la facturation.

## Entrée

```json
{
  "twitterHandles": ["OpenAI", "apify"],
  "includeTweets": true,
  "includeReplies": false,
  "maxItems": 10000
}
```

Une seule cible suffit. Le plafond global `maxItems` inclut les profils et
les ressources sélectionnées.

## Sortie

Les lignes de profil utilisent `resultType: "profile"`. Les lignes
optionnelles utilisent `profileTweet`, `profileReply`, `profileMedia`,
`profileFollower`, `profileFollowing` ou `profileVerifiedFollower`. Chaque ligne conserve `sourceTarget`. Les champs
publics restent dans la forme de réponse Xquik REST. X déduit
`accountBasedIn` à partir des IP d'accès au compte agrégées. `observedAt`
enregistre l'heure de récupération. Cela n'indique ni la nationalité, ni la
résidence, ni l'identité, ni l'inscription, ni le post, ni la localisation
exacte.

Depuis 2024, X ne montre les posts aimés par un compte qu'à ce compte.
`includeLikes` ne renvoie aucune ligne `profileLike` pour les autres comptes.

## Tarification

Chaque plan Apify coûte **$0.00015 par ligne livrée**. Apify facture
séparément l'usage de sa plateforme.

- Une facturation par ligne de donnée livrée. Les diagnostics sont gratuits
  dans `diagnostics`.
- Aucun frais de démarrage, de profil ou de requête.
- La déduplication s'exécute avant la facturation.
- Les paramètres Apify de charge totale maximale plafonnent les lignes
  livrées.

Utilisez `latest` sauf si vous avez besoin d'une build plus ancienne.
Choisissez parmi 50 tâches publiques ou 129 opérations Xquik REST. Les
exemples utilisent des valeurs d'illustration. Les résultats reflètent des
données en temps réel.

## Pagination et reprise

Les cibles indépendantes s'exécutent en parallèle. Les fils utilisent une
couverture automatique avec tous les filtres. Les lignes acceptées, l'état
de facturation et les empreintes survivent à une migration.

## Extraction incomplète

Une extraction interrompue écrit un diagnostic `partial` gratuit. Les
résultats disponibles restent intacts. Consultez `availableResults`,
`failedTargets`, `retryable` et `nextAction` avant de relancer. Une sortie
d'Actor réussie confirme la livraison, pas l'extraction complète.

Le texte de statut nomme chaque cause d'un arrêt anticipé. `stopCauses` liste
chaque cause avec ses propres `message`, `retryable` et `nextAction`. Les causes
sont `target_not_found`, `target_failed`, `pagination_safety_limit` et
`deadline_reached`. Une cible introuvable n'y figure que si une autre cause a
arrêté le run. Le run est `retryable` dès qu'une cause l'est.

Xquik est un service tiers indépendant. Non affilié à X Corp.
« Twitter » et « X » sont des marques déposées de X Corp.

## Actors Xquik associés

Chaque Actor Xquik partage le même moteur d'extraction, la même facturation
au filtre et les mêmes diagnostics. Choisissez celui qui correspond aux
données dont vous avez besoin.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper) : scrape des
  tweets depuis des recherches, des fils de profil, des Lists et des ID de
  tweet avec plus de 50 filtres et des exports plats. Utilisez-le quand vous
  avez besoin de données de tweet sans analyse. À partir de $0.00015 par
  ligne.
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
