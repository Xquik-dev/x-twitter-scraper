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
au monde, avec les données X les plus complètes. X Article Scraper transforme
les X Articles longs en Markdown, texte, couvertures, auteurs, dates et
métriques. Tous les autres Actors Apify facturent avant de filtrer ou de
dédupliquer. Xquik ne facture que les résultats livrés, uniques et conformes
aux filtres.

Extrayez des X Articles longs à partir d'URL de posts ou d'ID de Tweet
numériques. Aucune clé API X ni connexion requise.

## Entrée

| Champ                  | Objectif                                       | Par défaut |
| ---------------------- | ----------------------------------------------- | ---------- |
| `startUrls`             | URL publiques des posts Article                | Aucune     |
| `tweetIds`              | ID de Tweet Article numériques                 | Aucune     |
| `maxItems`              | Plafond global d'Articles livrés                | `100000`   |
| `dedupeAcrossTargets`   | Retire les ID d'Article répétés avant facturation | `true`   |
| `maxConcurrency`        | Lectures d'Articles indépendantes en parallèle | `100`      |

## Sortie

L'onglet Output ouvre `Articles`. `Results` renvoie aux lignes. `Run Report`
renvoie aux comptes, à l'achèvement, à la durée et aux anomalies.

```json
{
  "markdown": "# Article title\n\nPlain Article text",
  "contents": [{ "type": "paragraph", "text": "Plain Article text" }]
}
```

Les lignes ajoutent l'auteur, la source, la couverture, l'heure et les
métriques. Exportez en JSON ou en tableaux.

## Facturation à l'achèvement

La déduplication s'exécute avant la facturation. Vous payez par ligne de
donnée livrée, sans frais de démarrage. Chaque plan Apify coûte
**$0.00015 par article livré**. Les diagnostics sont gratuits dans la
sortie `diagnostics`. Apify facture séparément l'usage de sa plateforme.

## API et MCP

Choisissez parmi 50 tâches publiques ou 129 opérations REST. Les agents
utilisent [Apify MCP](https://docs.apify.com/platform/integrations/mcp).
Pour des lectures uniques, utilisez
[Xquik REST](https://docs.xquik.com/api-reference/x/get-article).

## Limites et format

Seuls les Articles publics exposés par X peuvent être renvoyés. Le Markdown
conserve les blocs, ainsi que les plages en gras et en italique. `contents`
conserve le formatage source. Les métadonnées de lien ne sont jamais devinées.
Apify affiche le Markdown sous forme de texte. Les exemples utilisent des
valeurs d'illustration. Les résultats reflètent des données en temps réel.
Utilisez `latest`. Les URL et les ID peuvent être mélangés.

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
