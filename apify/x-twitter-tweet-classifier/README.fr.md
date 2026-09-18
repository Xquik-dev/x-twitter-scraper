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
au monde, avec les données X les plus complètes. X (Twitter) Tweet
Classifier répond à vos propres étiquettes, scores et questions oui/non sur
chaque tweet. Tous les autres Actors Apify facturent avant de filtrer ou de
dédupliquer. Xquik ne facture que les résultats livrés, uniques et
conformes aux filtres.

Les coûts d'IA sont inclus dans le prix par tweet. Vous ne payez aucun fournisseur d'IA, n'achetez aucun jeton & n'apportez aucune clé.

Classifiez les posts X (Twitter) avec vos propres questions et conservez
les données originales du tweet. **X Tweet Classifier with AI Analysis** collecte les tweets correspondants, puis répond à 1 à 8
questions typées par post : des catégories pour le triage support, des
scores pour la priorisation et des probabilités pour la pertinence. Des
préréglages couvrent la surveillance de marque, les plaintes, les
concurrents, l'intention d'achat, les retours produit, l'actualité, le
sentiment et le sentiment de marché ; des questions personnalisées les
remplacent.

- **Réponses typées** avec probabilités, confiance et versions de
  question.
- **Vos questions, vos catégories** : jusqu'à 255 catégories par
  question.
- **Enregistrements source complets** pour chaque champ exposé par le
  tweet.
- **Facturation au filtre** : seuls les tweets uniques, conformes aux
  filtres et avec une analyse réussie sont facturés.

## Comment classifier des tweets avec des questions personnalisées

1. Ajoutez des URL de tweet, des termes de recherche, des handles de
   profil ou des ID de tweet.
2. Réglez `maxItems` et les filtres d'extraction dont votre tâche a
   besoin.
3. Ajoutez vos questions sous `analysis.questions`, ou choisissez un
   préréglage avec `analysis.preset`.
4. Exécutez l'Actor et ouvrez le dataset.

Les modes pris en charge collectent des tweets, des recherches, des posts
de profil, des Lists, des réponses, des citations et des threads.
L'extraction d'article autonome et les listes d'utilisateurs ne sont pas
des entrées de classification.

```json
{
  "searchTerms": ["\"need a recommendation\" headphones lang:en"],
  "maxItems": 20,
  "analysis": {
    "questions": [
      {
        "id": "buying",
        "type": "probability",
        "version": "1",
        "instructions": "Does the author want to buy headphones?"
      }
    ],
    "targets": [{ "name": "headphones", "aliases": ["headset"] }],
    "context": "Exclude advertisements aimed at other buyers."
  }
}
```

### Questions et limites

Fournissez 1 à 8 questions avec des ID uniques, des instructions et des
versions.

- `choice` utilise 2 à 255 `categories` nommées avec des descriptions ou
  des valeurs nulles.
- `score` utilise un tableau `levels` ordonné contenant au moins 2
  descriptions.
- `probability` renvoie une valeur entre 0 et 1. Des `criteria`
  optionnels contiennent des descriptions `yes` et `no`.

Préréglages : `brand`, `complaints`, `competitors`, `purchase_intent`,
`product_feedback`, `news`, `sentiment` et `market`. `maxContextBytes`
vaut par défaut 12 000 octets ; des limites plus petites ignorent le
contexte trop volumineux sans le tronquer. `concurrency` vaut par défaut
4 et accepte de 1 à 16. Chaque définition de question reste dans une
allocation de 8 000 octets.

## Tarification

Les coûts d'IA sont inclus dans le prix par tweet. Vous ne payez aucun fournisseur d'IA, n'achetez aucun jeton & n'apportez aucune clé.

À partir de $0.0003 par tweet analysé avec succès, sans frais de
démarrage. La collecte est incluse, et l'allocation d'analyse documentée
est de 8 questions, 8 000 octets par définition de question et 12 000
octets de contexte par tweet. Les filtres d'extraction et la déduplication
s'exécutent avant l'analyse, donc les lignes filtrées et en double ne sont
jamais analysées ni facturées. Les analyses échouées ou ignorées et les
lignes de diagnostic n'entraînent aucun frais de résultat. L'usage de la
plateforme Apify est facturé séparément par Apify et apparaît dans
l'onglet Pricing.

## Exemples d'entrée et de sortie

L'entrée ci-dessus est prête à copier. Les lignes de sortie ressemblent à
ceci (abrégées) :

```json
{
  "tweet": { "id": "2100344867507327087", "text": "…", "likeCount": 6409 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      {
        "questionId": "topic",
        "type": "choice",
        "value": "ai_safety",
        "confidence": 0.93
      },
      {
        "questionId": "disclosure",
        "type": "probability",
        "probability": 0.97
      },
      {
        "questionId": "specificity",
        "type": "score",
        "value": 2,
        "confidence": 0.88
      }
    ]
  }
}
```

Chaque résultat contient `tweet` et `analysis`. Les réponses incluent les
types, les versions de question et les probabilités disponibles. Une
analyse échouée ou ignorée conserve le tweet collecté avec une liste de
réponses vide et une `reason`. Les diagnostics gratuits dans le
key-value store expliquent les entrées invalides, les résultats manquants
et la collecte interrompue, et le rapport de run sépare les lignes
collectées, les analyses facturées et les frais en attente.

## Résumé de run et réponses à plat

Chaque run écrit un enregistrement `analysis-summary` dans son
key-value store et le répète sous `results.analysisSummary` dans le
rapport de run. Il compte les lignes analysées, échouées et ignorées,
totalise l'engagement, et résume chaque question. Chaque question
personnalisée reçoit son propre bloc : comptes et parts de catégorie
pour les questions à choix, moyenne et comptes de niveau pour les
questions de score, comptes oui et non pour les questions oui/non. Les
nombres sont arrondis à 4 décimales ; les runs vides indiquent des
comptes à zéro et des moyennes `null`. Passez `analysis.preset` avec
`brand`, `complaints`, `purchase_intent`, `product_feedback`,
`competitors`, `sentiment`, `market` ou `news` pour exécuter une lentille
intégrée plutôt que des questions personnalisées ; le résumé rapporte
alors cette lentille par question. Chaque ligne liste aussi
`sourceDomains`, les noms d'hôte qu'elle lie, `cashtags` tels que `$NVDA`
trouvés dans son texte, et le bloc `monitor` du résumé compte les statuts
de comparaison et liste jusqu'à 50 lignes modifiées quand
`monitor.baselineDatasetId` est réglé.

Chaque ligne de résultat porte aussi `answers`, une correspondance plate
de l'ID de question vers la catégorie, le score ou la probabilité
choisie. La vue de dataset `Flat answers` et les exports CSV ou Excel
affichent une colonne par question à côté du tweet, afin que les
tableurs n'aient besoin d'aucune analyse JSON. Les lignes échouées et
ignorées portent une correspondance vide.

## Comparer avec un run antérieur

Passez `monitor.baselineDatasetId`, l'ID du dataset d'un run antérieur
terminé avec les mêmes réglages d'analyse, et chaque ligne gagne un objet
`monitor` : `first_run` sans référence, `new_to_baseline` pour les tweets
absents du run antérieur, `unchanged` ou `changed` pour les tweets qu'il
avait, avec `changes` listant chaque décision, pour l'une de vos
questions, ayant évolué de `previous` à `current`. Les décisions se
comparent par catégorie, niveau de score arrondi, ou oui/non à 0,5, et
une décision ne compte comme changée que lorsque la réponse évolue
clairement : la catégorie précédente tombe sous 0,4 de probabilité, un
score bouge d'au moins 0,6 niveau, ou une probabilité oui/non se situe à
au moins 0,1 du seuil. Les fluctuations proches d'une égalité entre les
runs restent inchangées. Les références au-delà de `maxBaselineRows`
(par défaut 100 000) ou issues de réglages différents arrêtent le run
avant la collecte avec une ligne de diagnostic.

## Exemples de tâches

Choisissez parmi 50 tâches publiques. Chacune démarre depuis une
recherche anglaise réelle avec un `maxItems` borné, des questions
personnalisées déjà prêtes et la vue de dataset overview. Modifiez la
recherche ou les questions avant de l'exécuter.

- [Triage customer support requests on X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/triage-support-requests-on-x)
- [Score sales leads from X posts](https://apify.com/xquik/x-twitter-tweet-classifier/examples/score-sales-leads-from-x-posts)
- [Detect service outage reports on X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/detect-outage-reports-on-x)
- [Classify hiring signals on X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-hiring-signals-on-x)
- [Tag product feature requests on X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/tag-feature-requests-on-x)
- [Classify app feedback like store reviews](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-app-store-style-feedback)
- [Detect scam and fraud warnings on X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/detect-scam-warnings-on-x)
- [Classify event attendance intent](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-event-attendance-intent)
- [Extract restaurant review signals](https://apify.com/xquik/x-twitter-tweet-classifier/examples/extract-restaurant-review-signals)
- [Separate crypto promotion from analysis](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-crypto-scam-vs-analysis)
- [Classify persuasive political posts](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-political-ad-style-posts)
- [Detect subscription churn risk signals](https://apify.com/xquik/x-twitter-tweet-classifier/examples/detect-churn-risk-signals)

Les tâches restantes couvrent d'autres workflows sur la page de l'Actor.

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

## FAQ et support

### Les versions de question comptent-elles ?

Oui. La `version` que vous donnez à chaque question est stockée avec
chaque réponse, ce qui vous permet de savoir quelle formulation a produit
un résultat quand vous affinez vos questions dans le temps.

### Pourquoi une ligne revient-elle avec un `analysis.status` de `failed` ou `skipped` ?

Le tweet a été collecté et livré, mais l'analyse par IA ne s'est pas
terminée. `analysis.reason` nomme la cause, comme `context_limit` quand
le tweet et son contexte dépassent `maxContextBytes`, ou
`service_unavailable` après des tentatives. Ces lignes n'entraînent aucun
frais de résultat. Augmentez `maxContextBytes` (jusqu'à 12 000) ou
relancez les ID concernés.

### L'analyse vérifie-t-elle les faits ?

Non. Les réponses décrivent ce que le post exprime et comment il est
formulé. Les probabilités expriment la confiance du modèle, pas la
vérité. Vérifiez les classifications importantes par rapport au tweet
original, que chaque ligne conserve.

### Quelles langues fonctionnent ?

L'extraction prend en charge toutes les langues servies par X. L'analyse
est validée d'abord sur des scénarios clients en anglais ; les autres
langues prises en charge renvoient des réponses avec la même structure, et
l'incertitude reste explicite via les catégories et probabilités
`unclear`.

### Comment limiter le coût ?

Les filtres, la déduplication et `maxItems` s'exécutent avant l'analyse,
donc seuls les tweets uniques et conformes aux filtres sont analysés et
facturés. Utilisez des opérateurs de recherche précis, des bornes de date
et des planchers d'engagement, et commencez avec un `maxItems` réduit pour
vérifier la qualité des réponses avant un grand run.

### Où obtenir de l'aide ?

Ouvrez un problème sur la page de l'Actor ou contactez support@xquik.com
avec l'ID du run. Les diagnostics gratuits dans le key-value store
expliquent les runs vides, partiels ou interrompus.

Xquik est un service tiers indépendant. Non affilié à X Corp.
« Twitter » et « X » sont des marques déposées de X Corp.
