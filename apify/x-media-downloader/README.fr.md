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
au monde, avec les données X les plus complètes. X Media Downloader extrait
ou stocke des photos, vidéos et GIFs à partir de posts et de profils. Tous
les autres Actors Apify facturent avant de filtrer ou de dédupliquer. Xquik
ne facture que les résultats livrés, uniques et conformes aux filtres.

Téléchargez des médias Twitter ou extrayez des URL directes à partir des
onglets Média de posts et de profils. Collectez photos, vidéos, GIFs et
métadonnées. Aucune clé API X ni connexion requise.

## Fichiers médias et métadonnées

- Posts, profils, réponses, citations et threads en masse.
- Photos, GIFs, qualités MP4 et playlists HLS.
- Métadonnées, URL directes et filtres disponibles.
- Stockage dans les limites du run, liens de sortie et déduplication avant
  facturation.

## Entrée

```json
{
  "twitterHandles": ["OpenAI"],
  "sources": ["profiles"],
  "downloadMedia": true,
  "maxItems": 10000
}
```

Une seule cible suffit. Activez `downloadMedia` pour stocker les fichiers.
Les fichiers de plus de 80 Mo restent en URL uniquement.

## Sortie

Les lignes incluent la disponibilité, les métadonnées et les URL d'action.
Les lignes stockées ajoutent `storedMediaUrl` et `downloadStatus: "stored"`.
**Stored Media Files** permet de parcourir les enregistrements stockés.

## Tarification

Chaque plan Apify coûte **$0.00015 par ligne livrée**. Apify facture
séparément l'usage de sa plateforme.

- La déduplication s'exécute avant la facturation. Une facturation par
  ligne de donnée livrée.
- Les diagnostics sont gratuits dans `diagnostics`. Aucun frais de
  démarrage, d'URL, de fichier ou de qualité.

Utilisez `latest`. Choisissez parmi 50 tâches publiques ou 129 opérations
REST. Les exemples utilisent des valeurs d'illustration. Les résultats
reflètent des données en temps réel.

## Extraction incomplète

Une extraction interrompue écrit un diagnostic `partial` gratuit. Les
résultats disponibles restent intacts. Consultez `availableResults`,
`failedTargets`, `retryable` et `nextAction` avant de relancer. Une sortie
d'Actor réussie confirme la livraison, pas l'extraction complète.

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
