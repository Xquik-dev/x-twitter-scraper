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
monde. Ses données X sont les plus complètes. X (Twitter) Stock & Crypto AI
Trading Signals de Xquik transforme les posts en orientations de marché. Chaque
orientation est haussière, baissière, neutre ou mixte, par ticker et par
cryptomonnaie. La plupart des autres Actors Apify facturent avant de filtrer ou
de dédupliquer. Xquik facture seulement les résultats livrés, uniques et
conformes à vos filtres. Le prix par post inclut les coûts d'IA. Aucun compte
d'IA, jeton ou clé n'est nécessaire.

Décryptez l'orientation des posts X (Twitter) sur les actions, la crypto et le
trading. **X (Twitter) Stock & Crypto AI Trading Signals** de Xquik collecte les
posts sur vos actifs. Il ajoute à chaque post une orientation, un type de
contenu, un niveau de conviction et une pertinence d'actif, calculés par IA.
Séparez les pronostics fermes des remarques prudentes, et l'analyse de la
promotion. Repérez les posts qui utilisent le nom de votre actif pour autre
chose.

- **Une orientation par post.** Chaque post est haussier, baissier, neutre,
  mixte ou incertain.
- **Type de contenu.** Il distingue analyse, actualité, idées de trade,
  promotion, humour et questions.
- **Conviction.** Elle sépare les pronostics fermes et les positions ouvertes
  des remarques prudentes.
- **Pertinence.** Elle vous aide à écarter les usages sans rapport d'un ticker
  ou d'un nom d'entreprise.
- **Données source complètes.** Chaque ligne garde tous les champs disponibles
  du post.

> Xquik est un service tiers indépendant. Non affilié à X Corp.
> "Twitter" et "X" sont des marques déposées de X Corp.

## Comment analyser le sentiment de marché sur X

1. Ajoutez des termes de recherche comme `$NVDA lang:en -filter:retweets`, des
   requêtes par cashtag, des noms d'utilisateur ou des ID de post.
2. Réglez `maxItems` et des filtres d'extraction comme des bornes de date ou un
   minimum de J'aime.
3. Mettez les noms d'actifs, les tickers et les alias dans `analysis.targets` et
   décrivez l'actif dans `analysis.context`.
4. Lancez le run et ouvrez le dataset.

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

### Les questions auxquelles l'Actor répond

| Question    | Réponse                                                                    |
| ----------- | -------------------------------------------------------------------------- |
| Orientation | Haussière, baissière, neutre, mixte ou incertaine                          |
| Contenu     | Analyse, actualité, trade, promotion, humour, question ou incertain        |
| Conviction  | 0 remarque prudente, 1 avis exprimé, 2 pronostic ferme ou position ouverte |
| Pertinence  | Probabilité que le post traite vos cibles comme des actifs                 |

La conviction vaut 0 dès que l'orientation est neutre ou incertaine. Un post
sans direction ne peut pas en affirmer une fermement. Cette réponse met toute la
probabilité sur le niveau 0 et reprend la confiance de l'orientation.

Les réponses décrivent ce que les auteurs expriment. Elles ne sont pas des
conseils en investissement et ne vérifient ni les affirmations, ni les cours, ni
les documents réglementaires.

## Analyser votre propre texte

Collez vos brouillons, réponses, avis ou notes dans `texts`. X (Twitter) Stock &
Crypto AI Trading Signals de Xquik les analyse. Il ne récupère rien sur X.

```json
{
  "texts": [
    "$NVDA guidance beat again. I am adding on any dip below 900.",
    "Not touching $BTC until the ETF flows turn positive."
  ]
}
```

- Chaque texte devient 1 ligne avec les mêmes réponses `analysis` qu'un post.
- `tweet.id` vaut `text:1`, `text:2` et ainsi de suite, et `tweet.type` vaut
  `text`.
- Chaque texte analysé coûte les mêmes $0.0003 qu'un post analysé.
- Quand `texts` est renseigné, le run analyse seulement ces textes. Lancez les
  cibles X dans un run séparé.

## Combien coûte l'analyse du sentiment de marché sur X ?

X (Twitter) Stock & Crypto AI Trading Signals de Xquik coûte à partir de $0.0003
par post analysé. Il ne facture pas de frais de démarrage. Le prix inclut la
collecte et les coûts d'IA. Aucun compte d'IA, jeton ou clé n'est nécessaire. Le
prix couvre jusqu'à 8 questions et 64 000 octets de contexte par post. Chaque
définition de question peut utiliser jusqu'à 8 000 octets.

Les filtres d'extraction et la déduplication passent avant l'analyse. Vous ne
payez jamais les lignes filtrées ou en double. Les analyses échouées ou ignorées
et les lignes de diagnostic ne sont pas facturées comme résultats. Apify facture
à part l'usage de la plateforme pour le calcul, le stockage et le transfert, aux
tarifs de votre plan. L'onglet Pricing l'indique.

## Exemples d'entrée et de sortie

L'entrée ci-dessus est prête à copier. Voici une ligne de sortie abrégée :

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

Chaque résultat contient `tweet` et `analysis`. Les réponses incluent les types,
les versions de question et les probabilités disponibles. Une ligne dont
l'analyse a échoué ou a été ignorée garde le post collecté et une `reason`. Sa
liste de réponses est vide.

Les diagnostics gratuits du key-value store expliquent les entrées invalides,
les résultats manquants et les collectes interrompues. Le rapport du run sépare
les lignes collectées, les analyses facturées et les frais en attente.

## Résumé du run et réponses à plat

Un run écrit un enregistrement `analysis-summary` dans son key-value store dans
4 cas :

- Il rencontre un problème ou il est volumineux.
- Il règle `monitor` sans `baselineDatasetId`, comme premier run d'une série.
- Sa comparaison trouve un post modifié, nouveau ou non comparable.
- Il a `alwaysSaveRunRecords` activé.

Les autres runs n'écrivent pas cet enregistrement. Leur statut donne la réponse
principale, comme `Top stance: bullish in 3 of 5 results.` Une comparaison sans
changement indique `No change since the earlier run.` Un run qui rencontre un
problème ou qui est volumineux écrit aussi `run-report`. Un run avec
`alwaysSaveRunRecords` activé le fait aussi. `run-report` reprend le résumé sous
`results.analysisSummary`.

Le résumé compte les lignes analysées, échouées et ignorées. Il additionne
l'engagement et résume chaque question.

- `cashtags` compte les orientations par cashtag, comme `$NVDA`. Le ratio
  haussier de chaque actif vient de `choices.stance`.
- Chaque entrée de `cashtags` ajoute `signal`, avec le nombre de lignes
  haussières et baissières. Son score va de -1 à 1. Il se calcule ainsi : lignes
  haussières moins lignes baissières, divisé par le nombre de lignes.
- Le bloc `stance` ajoute la répartition pondérée par l'engagement, ainsi que
  les posts haussiers et baissiers qui ont le plus d'engagement.
- `conviction` donne la moyenne et la moyenne pondérée par l'engagement.
- `monitor.changedRows` liste les posts dont l'orientation a bougé depuis la
  référence.
- Chaque ligne liste `sourceDomains`, les noms d'hôte vers lesquels elle pointe.
- Avec `monitor.baselineDatasetId` renseigné, le bloc `monitor` du résumé compte
  les statuts de comparaison. Il liste jusqu'à 50 lignes modifiées.

Le résumé arrondit les nombres à 4 décimales. Un run vide indique des compteurs
à 0 et des moyennes `null`.

Chaque ligne de résultat porte aussi `answers`, une table plate indexée par ID
de question. Chaque valeur est la catégorie, le score ou la probabilité choisie.
La vue de dataset `Flat answers` et les exports CSV ou Excel affichent 1 colonne
par question. Ces colonnes sont à côté du post, donc vos tableurs n'ont aucun
JSON à analyser. Les lignes échouées et ignorées portent une table vide.

## Comparer avec un run antérieur

Passez `monitor.baselineDatasetId`, l'ID du dataset d'un run antérieur terminé
avec les mêmes réglages d'analyse. La comparaison lit les lignes de ce run. Elle
fonctionne même si ce run n'a pas écrit son résumé. Chaque ligne gagne alors un
objet `monitor`. Son statut peut être :

- `first_run` sans référence.
- `new_to_baseline` pour les posts absents du run antérieur.
- `unchanged` ou `changed` pour les posts qu'il contenait.

`changes` liste chaque orientation, type de contenu ou niveau de conviction
passé de `previous` à `current`. Les décisions se comparent par catégorie, par
niveau de score arrondi ou par oui/non au seuil de 0,5. Une décision compte
comme changée seulement si elle bouge nettement. Les quasi-égalités entre runs
restent `unchanged`.

Une référence au-delà de `maxBaselineRows`, ou issue d'autres réglages, arrête
le run avant la collecte. Le run écrit alors une ligne de diagnostic.
`maxBaselineRows` vaut 100 000 par défaut.

## Exemples de tâches

Choisissez parmi 50 tâches publiques. Chacune part d'une vraie recherche en
anglais et d'un `maxItems` limité. Elle inclut des cibles et un contexte prêts à
l'emploi, ainsi que la vue de dataset overview. Modifiez la recherche ou les
cibles avant de lancer le run.

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

Les autres tâches, sur la page de l'Actor, couvrent d'autres marques, sujets et
marchés.

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

## FAQ et support

### Ai-je besoin d'un compte d'IA, d'une clé API X ou d'une connexion ?

Non. X (Twitter) Stock & Crypto AI Trading Signals de Xquik inclut les coûts
d'IA dans son prix. Aucun compte d'IA, jeton ou clé n'est nécessaire. Vous
n'avez pas non plus besoin de clé API X, de connexion ou d'identifiants.

### Puis-je suivre plusieurs tickers dans 1 run ?

Oui. Listez chaque actif avec ses tickers et ses alias dans `analysis.targets`.
Combinez leurs termes de recherche. Les réponses de pertinence vous disent quels
posts traitent vos cibles comme des actifs.

### Pourquoi une ligne revient-elle avec `analysis.status` à `failed` ou `skipped` ?

L'Actor a collecté et livré le post, mais l'analyse par IA n'a pas abouti.
`analysis.reason` nomme la cause. `context_limit` signifie que votre contexte et
vos cibles ne laissent pas de place au post. `service_unavailable` signifie que
le service d'analyse était brièvement indisponible. Ces lignes ne sont pas
facturées comme résultats. Raccourcissez `analysis.context` ou relancez les ID
concernés.

L'Actor analyse quand même un post plus long que `maxContextBytes`. Il coupe
d'abord les posts cités et les posts auxquels il répond, puis le post lui-même.
`analysis.contextAvailability.postText` vaut alors `truncated`. Augmentez
`maxContextBytes` jusqu'à 64 000 pour garder plus de texte.

### L'analyse vérifie-t-elle les faits ?

Non. Les réponses décrivent ce que le post exprime et la façon dont il le
présente. Les probabilités expriment la confiance de l'IA, pas la vérité.
Vérifiez les classements importants avec le post d'origine, que chaque ligne
garde.

### Quelles langues sont prises en charge ?

L'extraction prend en charge toutes les langues disponibles sur X. Nous validons
d'abord l'analyse sur des scénarios clients en anglais. Les autres langues
prises en charge renvoient des réponses de même structure. Les catégories
`unclear` et les probabilités montrent l'incertitude dans toutes les langues.

### Comment limiter le coût ?

Les filtres, la déduplication et `maxItems` passent avant l'analyse. Vous payez
seulement les posts uniques et conformes à vos filtres. Utilisez des opérateurs
de recherche précis, des bornes de date et des seuils d'engagement. Commencez
avec un petit `maxItems` pour vérifier la qualité des réponses avant un gros
run.

### Est-il légal d'analyser des données X ?

L'Actor collecte des champs publics de X. Les résultats peuvent contenir des
données personnelles. Assurez-vous d'avoir une finalité licite et respectez les
règles de protection des données applicables. En cas de doute, demandez conseil
à un juriste qualifié.

### Puis-je utiliser l'API, les planifications et les intégrations ?

Oui. L'[onglet API](https://apify.com/xquik/x-twitter-stock-crypto-signals/api)
propose des exemples en Python, JavaScript et cURL. Utilisez les
[planifications](https://docs.apify.com/platform/schedules) Apify pour des runs
récurrents. Passez l'ID du dataset précédent dans `monitor.baselineDatasetId`
pour voir ce qui a changé. Les intégrations Apify relient aussi les runs aux
webhooks, à Make, Zapier, n8n et Google Sheets.

### Où trouver de l'aide ?

Ouvrez une issue sur la page de l'Actor ou écrivez à support@xquik.com avec l'ID
du run. Les diagnostics gratuits du key-value store expliquent les runs vides,
partiels ou interrompus.
