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
au monde, avec les données X les plus complètes. X (Twitter) Stock & Crypto AI Trading Signals transforme les tweets en positions haussière, baissière,
neutre ou mixte par action ou coin. Tous les autres Actors Apify facturent
avant de filtrer ou de dédupliquer. Xquik ne facture que les résultats
livrés, uniques et conformes aux filtres.

Les coûts d'IA sont inclus dans le prix par tweet. Vous ne payez aucun fournisseur d'IA, n'achetez aucun jeton & n'apportez aucune clé.

Lisez la position derrière les posts d'action, de crypto et de trading sur
X (Twitter) et conservez les données originales du tweet. **X (Twitter) Stock & Crypto AI Trading Signals** collecte les posts sur vos tickers ou
actifs, puis ajoute à chaque post une position, un type de contenu, un
niveau de conviction et une pertinence d'actif générés par IA. Séparez les
appels fermes des remarques nuancées, l'analyse de la promotion, et les
posts sur votre actif des usages non liés de son nom.

- **Position par post** : haussière, baissière, neutre, mixte ou
  incertaine.
- **Le type de contenu** distingue l'analyse, l'actualité, les idées de
  trade, la promotion, l'humour et les questions.
- **La conviction** sépare les appels et positions fermes des remarques
  nuancées.
- **La pertinence** retire les usages non liés d'un ticker ou d'un nom
  d'entreprise.
- **Enregistrements source complets** pour chaque champ exposé par le
  tweet.

## Comment analyser le sentiment de marché sur X

1. Ajoutez des termes de recherche tels que `$NVDA lang:en
   -filter:retweets`, des requêtes de cashtag, des handles de profil ou
   des ID de tweet.
2. Réglez `maxItems` et des filtres d'extraction tels que des bornes de
   date ou un minimum de likes.
3. Placez les noms d'actif, les tickers et les alias sous
   `analysis.targets` et décrivez l'actif dans `analysis.context`.
4. Exécutez l'Actor et ouvrez le dataset.

```json
{
  "searchTerms": ["$NVDA lang:en -filter:retweets"],
  "maxItems": 500,
  "analysis": {
    "targets": [{ "name": "Nvidia", "aliases": ["NVDA", "$NVDA"] }],
    "context": "The chip maker as a listed stock."
  }
}
```

### Ce que l'Actor répond

| Question    | Réponse                                                            |
| ------------- | ---------------------------------------------------------------------- |
| Position       | Haussière, baissière, neutre, mixte ou incertaine                       |
| Contenu        | Analyse, actualité, trade, promotion, humour, question ou incertain     |
| Conviction     | 0 remarque nuancée, 1 avis exprimé, 2 appel ou position ferme            |
| Pertinence     | Probabilité que le post traite vos cibles comme des actifs             |

Les réponses décrivent ce que les auteurs expriment. Elles ne constituent
pas un conseil en investissement et ne vérifient ni les affirmations, ni
les prix, ni les dépôts réglementaires.

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
  "tweet": { "id": "2100692112916574711", "text": "…", "likeCount": 31 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      {
        "questionId": "stance",
        "type": "choice",
        "value": "bullish",
        "confidence": 0.86
      },
      {
        "questionId": "content",
        "type": "choice",
        "value": "analysis",
        "confidence": 0.79
      },
      {
        "questionId": "conviction",
        "type": "score",
        "value": 1,
        "confidence": 0.7
      },
      { "questionId": "relevance", "type": "probability", "probability": 0.95 }
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
totalise l'engagement, et résume chaque question. `cashtags` compte la
position par cashtag tel que `$NVDA`, donc le ratio haussier par actif
provient de `choices.stance`. Le bloc `stance` ajoute la répartition
pondérée par l'engagement et les posts haussiers et baissiers les plus
engagés ; `conviction` rapporte la moyenne et la moyenne pondérée par
l'engagement. Les nombres sont arrondis à 4 décimales ; les runs vides
indiquent des comptes à zéro et des moyennes `null`. Chaque entrée
`cashtags` ajoute `signal` : le compte haussier, le compte baissier et un
score de -1 à 1 calculé comme (haussier - baissier) / lignes, et
`monitor.changedRows` liste les tweets dont la position a évolué depuis
la référence. Chaque ligne liste aussi `sourceDomains`, les noms d'hôte
qu'elle lie, et le bloc `monitor` du résumé compte les statuts de
comparaison et liste jusqu'à 50 lignes modifiées quand
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
avait, avec `changes` listant chaque position, type de contenu ou niveau
de conviction ayant évolué de `previous` à `current`. Les décisions se
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
recherche anglaise réelle avec un `maxItems` borné, des cibles et un
contexte déjà prêts, et la vue de dataset overview. Modifiez la recherche
ou les cibles avant de l'exécuter.

- [Nvidia (NVDA) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/nvda-market-sentiment-on-x)
- [Tesla (TSLA) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/tsla-market-sentiment-on-x)
- [Apple (AAPL) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/aapl-market-sentiment-on-x)
- [Amazon (AMZN) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/amzn-market-sentiment-on-x)
- [Microsoft (MSFT) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/msft-market-sentiment-on-x)
- [Alphabet (GOOGL) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/googl-market-sentiment-on-x)
- [Meta (META) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/meta-market-sentiment-on-x)
- [AMD (AMD) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/amd-market-sentiment-on-x)
- [Palantir (PLTR) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/pltr-market-sentiment-on-x)
- [Coinbase (COIN) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/coin-market-sentiment-on-x)
- [Strategy (MSTR) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/mstr-market-sentiment-on-x)
- [Robinhood (HOOD) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/hood-market-sentiment-on-x)

Les tâches restantes couvrent d'autres marques, sujets et marchés sur la
page de l'Actor.

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
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor) :
  attribue un format, une attribution de source et une pertinence de sujet
  aux posts d'actualité par IA. Utilisez-le pour séparer le reportage du
  commentaire. À partir de $0.0003 par tweet analysé.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier) :
  répond à vos propres questions de catégorie, de score et de oui/non pour
  chaque tweet par IA. Utilisez-le quand les analyses prédéfinies ne
  correspondent pas à vos étiquettes. À partir de $0.0003 par tweet
  analysé.

## FAQ et support

### Puis-je suivre plusieurs tickers en un seul run ?

Oui. Listez chaque actif sous `analysis.targets` avec ses tickers et
alias, et combinez des termes de recherche. Les réponses de pertinence
vous indiquent quels posts traitent vos cibles comme des actifs.

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
