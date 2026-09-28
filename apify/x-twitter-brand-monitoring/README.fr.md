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
monde. Ses données X sont les plus complètes. X (Twitter) Brand Monitoring de
Xquik suit les mentions de votre marque avec des réponses sur la pertinence, le
sentiment et l'expérience client. La plupart des autres Actors Apify facturent
avant de filtrer ou de dédupliquer. Xquik facture seulement les résultats
livrés, uniques et conformes à vos filtres. Le prix par post inclut les coûts
d'IA. Aucun compte d'IA, jeton ou clé n'est nécessaire.

Surveillez les mentions de marque sur X (Twitter) et suivez l'évolution du
sentiment d'un run à l'autre. **X (Twitter) Brand Monitoring with AI Analysis**
de Xquik collecte chaque post correspondant. Pour chaque post, il répond par IA
à des questions de pertinence, de sentiment et d'expérience client. Il compare
ces réponses avec un dataset antérieur, pour que vous voyiez ce qui a changé.
Chaque ligne garde les données d'origine du post. Vos exports, revues et
analyses de suivi n'ont pas besoin d'un second scraping.

Surveillez les plaintes, les éloges et les questions d'achat autour d'une
marque, d'une gamme de produits ou d'une campagne. Briefez les équipes support
et marketing à partir de vrais posts. Gardez, run après run, l'historique de ce
que vos clients disent de vous.

- **Tous les champs du post source.** Le texte, l'auteur, les compteurs, les
  médias, les liens, les posts cités et les posts auxquels il répond restent à
  côté des réponses.
- **Des réponses typées.** Chaque ligne a une probabilité de pertinence, une
  catégorie de sentiment avec ses probabilités et une catégorie d'expérience
  client.
- **Le suivi des changements.** Les runs se comparent par décision, donc de
  petits écarts de probabilité ne comptent pas comme des changements.
- **La facturation après filtrage.** Vous payez seulement les posts uniques,
  conformes à vos filtres et analysés avec succès.

> Xquik est un service tiers indépendant. Non affilié à X Corp.
> "Twitter" et "X" sont des marques déposées de X Corp.

## Comment surveiller une marque sur X

1. Ajoutez des termes de recherche, des noms d'utilisateur, des URL de posts ou
   des ID de post. Par exemple, cherchez
   `(Sony OR "WH-1000XM5") headphones lang:en`.
2. Réglez `maxItems` et les filtres d'extraction utiles à votre tâche. Par
   exemple, des bornes de date, un minimum de J'aime ou l'exclusion des
   réponses.
3. Mettez les noms et les alias de votre marque dans `analysis.targets` et
   décrivez la marque dans `analysis.context`.
4. Lancez le run, puis gardez l'ID du dataset pour votre prochaine comparaison.
5. Au run suivant, ajoutez `monitor.baselineDatasetId` avec cet ID. Ne changez
   ni les questions, ni les cibles, ni le contexte, ni les limites de contexte.
   Les réponses restent ainsi comparables. La comparaison lit ce dataset, donc
   elle fonctionne même si ce run n'a pas écrit son résumé.

```json
{
  "searchTerms": ["(Sony OR \"WH-1000XM5\") headphones lang:en"],
  "maxItems": 100,
  "analysis": {
    "targets": [
      { "name": "Sony", "aliases": ["Sony headphones", "WH-1000XM5"] }
    ],
    "context": "Consumer headphones & customer service."
  },
  "monitor": {
    "baselineDatasetId": "YOUR_PREVIOUS_DATASET_ID",
    "maxBaselineRows": 100000
  }
}
```

Les cibles guident le classement. Elles ne créent pas de requêtes de recherche
et ne retirent pas les posts hors sujet. Choisissez des termes de recherche et
des filtres adaptés à votre étude.

### Les questions auxquelles le monitoring répond

| Question                  | Réponse                                      |
| ------------------------- | -------------------------------------------- |
| Pertinence pour la marque | Probabilité que le post parle de votre cible |
| Sentiment                 | Positif, négatif, mixte, neutre ou incertain |
| Expérience client         | Client, prospect, observateur ou incertain   |

Utilisez les probabilités de pertinence pour revoir les homonymes ambigus. Le
sentiment décrit l'attitude que l'auteur exprime envers la cible.

### Comment fonctionnent les comparaisons

| Statut de comparaison  | Signification                                                       |
| ---------------------- | ------------------------------------------------------------------- |
| `first_run`            | Aucune référence fournie                                            |
| `new_to_baseline`      | Cet ID de post était absent de la référence                         |
| `unchanged`            | Chaque décision comparable correspond                               |
| `changed`              | Au moins 1 décision diffère                                         |
| `not_comparable`       | Il manque des métadonnées, des ID ou des réglages identiques requis |
| `analysis_unavailable` | Ce post n'a aucune analyse réussie                                  |

Les réponses se comparent par décision. Une réponse `choice` se compare par sa
catégorie. Une réponse `score` se compare par son niveau le plus proche. Une
réponse `probability` se compare par sa décision oui ou non au seuil de 0,5.
Une décision compte comme changée seulement si elle bouge nettement. Les
quasi-égalités entre runs restent `unchanged`, comme les écarts qui gardent la
même décision. Les petites différences d'IA entre runs n'apparaissent donc pas
comme des changements.

`changes` liste chaque question modifiée avec sa décision `previous` et
`current`. Un changement peut venir d'une variation de l'IA, d'un nouveau
contexte ou de données source modifiées. Il ne prouve pas que les faits ont
changé. Un post absent ne prouve pas non plus une suppression.

La limite de référence, `maxBaselineRows`, vaut 100 000 lignes par défaut. Des
ID de post en double, des échecs de chargement ou une taille de dataset qui
change arrêtent la comparaison avant la collecte. Ils ne deviennent jamais une
référence vide.

## Analyser votre propre texte

Collez vos brouillons, réponses, avis ou notes dans `texts`. X (Twitter) Brand
Monitoring de Xquik les analyse. Il ne récupère rien sur X.

```json
{
  "texts": [
    "The new update is great, but sync still drops on mobile.",
    "Support fixed my issue in 10 minutes. Thank you."
  ]
}
```

- Chaque texte devient 1 ligne avec les mêmes réponses `analysis` qu'un post.
- `tweet.id` vaut `text:1`, `text:2` et ainsi de suite, et `tweet.type` vaut
  `text`.
- Chaque texte analysé coûte les mêmes $0.0003 qu'un post analysé.
- Quand `texts` est renseigné, le run analyse seulement ces textes. Lancez les
  cibles X dans un run séparé.

## Combien coûte la surveillance d'une marque sur X ?

X (Twitter) Brand Monitoring de Xquik coûte à partir de $0.0003 par post
analysé. Il ne facture pas de frais de démarrage. Le prix inclut la collecte et
les coûts d'IA. Aucun compte d'IA, jeton ou clé n'est nécessaire. Le prix couvre
jusqu'à 8 questions et 64 000 octets de contexte par post. Chaque définition de
question peut utiliser jusqu'à 8 000 octets.

Les filtres d'extraction et la déduplication passent avant l'analyse. Vous ne
payez jamais les lignes filtrées ou en double. Les analyses échouées ou ignorées
et les lignes de diagnostic ne sont pas facturées comme résultats. Apify facture
à part l'usage de la plateforme pour le calcul, le stockage et le transfert, aux
tarifs de votre plan. L'onglet Pricing l'indique.

## Exemples d'entrée et de sortie

L'entrée ci-dessus est prête à copier. Voici une ligne de sortie abrégée :

```json
{
  "tweet": { "id": "2100344867507327087", "text": "…", "likeCount": 6409 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      { "questionId": "relevance", "type": "probability", "probability": 0.97 },
      {
        "questionId": "sentiment",
        "type": "choice",
        "value": "neutral",
        "confidence": 0.88
      },
      {
        "questionId": "experience",
        "type": "choice",
        "value": "observer",
        "confidence": 0.69
      }
    ]
  },
  "monitor": { "status": "unchanged", "changedQuestionIds": [], "changes": [] }
}
```

Chaque résultat contient `tweet`, `analysis` et `monitor`. Les réponses incluent
les types, les versions de question et les probabilités disponibles.
`analysis.contextAvailability` signale le contexte manquant : citation, réponse,
auteur et médias. Une ligne dont l'analyse a échoué ou a été ignorée garde le
post collecté et une `reason`. Sa liste de réponses est vide.

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
principale, comme `Top sentiment: negative in 2 of 5 results.` Une comparaison
sans changement indique `No change since the earlier run.` Un run qui rencontre
un problème ou qui est volumineux écrit aussi `run-report`. Un run avec
`alwaysSaveRunRecords` activé le fait aussi. `run-report` reprend le résumé sous
`results.analysisSummary`.

Le résumé compte les lignes analysées, échouées et ignorées. Il additionne
l'engagement et résume chaque question.

- `targets` rapporte les mentions, la part de voix et l'engagement par marque ou
  par alias.
- Chaque entrée de `targets` a `top`, ses 3 mentions avec le plus d'engagement
  par catégorie de réponse. Utilisez-le pour alerter sur les mentions négatives
  et positives les plus fortes.
- Chaque entrée de `targets` a `choices`, la répartition des réponses parmi les
  posts qui mentionnent cette marque.
- Le bloc `sentiment` liste sous `top` les 3 mentions positives et négatives
  avec le plus d'engagement.
- `relevance` compte les mentions qui parlent de la marque.
- `monitor.changedRows` liste les posts dont les décisions ont bougé depuis la
  référence. Envoyez-les à un webhook ou à une alerte.
- Avec `monitor.baselineDatasetId` renseigné, le bloc `monitor` compte les
  statuts de comparaison. Il liste jusqu'à 50 lignes modifiées.
- Chaque ligne liste `sourceDomains`, les noms d'hôte vers lesquels elle pointe.

Le résumé arrondit les nombres à 4 décimales. Un run vide indique des compteurs
à 0 et des moyennes `null`.

Chaque ligne de résultat porte aussi `answers`, une table plate indexée par ID
de question. Chaque valeur est la catégorie, le score ou la probabilité choisie.
La vue de dataset `Flat answers` et les exports CSV ou Excel affichent 1 colonne
par question. Ces colonnes sont à côté du post, donc vos tableurs n'ont aucun
JSON à analyser. Les lignes échouées et ignorées portent une table vide.

## Exemples de tâches

Choisissez parmi 50 tâches publiques. Chacune part d'une vraie recherche en
anglais et d'un `maxItems` limité. Elle inclut des cibles et un contexte prêts à
l'emploi, ainsi que la vue de dataset overview. Modifiez la recherche ou les
cibles avant de lancer le run.

- [Monitor Nike brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-nike-brand-mentions-on-x)
- [Monitor Starbucks brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-starbucks-brand-mentions-on-x)
- [Monitor Tesla brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-tesla-brand-mentions-on-x)
- [Monitor Spotify brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-spotify-brand-mentions-on-x)
- [Monitor Netflix brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-netflix-brand-mentions-on-x)
- [Monitor Airbnb brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-airbnb-brand-mentions-on-x)
- [Monitor Uber brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-uber-brand-mentions-on-x)
- [Monitor Peloton brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-peloton-brand-mentions-on-x)
- [Monitor Shopify brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-shopify-brand-mentions-on-x)
- [Monitor Notion brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-notion-brand-mentions-on-x)
- [Monitor Duolingo brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-duolingo-brand-mentions-on-x)
- [Monitor Lululemon brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-lululemon-brand-mentions-on-x)

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

## FAQ et support

### Ai-je besoin d'un compte d'IA, d'une clé API X ou d'une connexion ?

Non. X (Twitter) Brand Monitoring de Xquik inclut les coûts d'IA dans son prix.
Aucun compte d'IA, jeton ou clé n'est nécessaire. Vous n'avez pas non plus
besoin de clé API X, de connexion ou d'identifiants.

### Puis-je utiliser mes propres questions ?

Oui. Des `analysis.questions` personnalisées remplacent les questions par
défaut. Envoyez 1 à 8 questions de type `choice`, `score` ou `probability`. Une
question `choice` accepte 2 à 255 catégories. Une question `score` demande au
moins 2 niveaux ordonnés. Gardez les mêmes questions pour les runs que vous
voulez comparer.

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

Oui. L'[onglet API](https://apify.com/xquik/x-twitter-brand-monitoring/api)
propose des exemples en Python, JavaScript et cURL. Utilisez les
[planifications](https://docs.apify.com/platform/schedules) Apify pour des runs
récurrents. Passez l'ID du dataset précédent dans `monitor.baselineDatasetId`
pour voir ce qui a changé. Les intégrations Apify relient aussi les runs aux
webhooks, à Make, Zapier, n8n et Google Sheets.

### Où trouver de l'aide ?

Ouvrez une issue sur la page de l'Actor ou écrivez à support@xquik.com avec l'ID
du run. Les diagnostics gratuits du key-value store expliquent les runs vides,
partiels ou interrompus.
