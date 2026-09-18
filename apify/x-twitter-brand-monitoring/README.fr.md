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

# X (Twitter) Brand Monitoring with AI Analysis | $0.3/1K Tweets

<table align="center"><tr><td align="center">
<a href="https://youtu.be/4UOSpoOoC3Y?t=367"><img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" width="720" alt="Framer connecte Xquik MCP aux agents de codage"></a><br>
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">Découvrez comment Framer utilise les scrapers Xquik avec Claude Code, Codex, Cursor et d'autres outils, à partir de 6:07.</a>
</td></tr></table>

Xquik est le service de scraping X (Twitter) le plus rapide et le moins cher
au monde, avec les données X les plus complètes. X (Twitter) Brand
Monitoring suit les mentions de votre marque avec pertinence, sentiment et
réponses sur l'expérience client. Tous les autres Actors Apify facturent
avant de filtrer ou de dédupliquer. Xquik ne facture que les résultats
livrés, uniques et conformes aux filtres.

Surveillez les mentions de marque sur X (Twitter) et suivez les changements
de sentiment entre les runs. **X (Twitter) Brand Monitoring with AI
Analysis** collecte chaque tweet correspondant, ajoute à chaque post des
réponses de pertinence, de sentiment et d'expérience client générées par
IA, et compare les réponses avec un dataset antérieur pour que vous voyiez
ce qui a changé. Les données originales du tweet restent dans chaque
ligne, donc les exports, les revues et l'analyse de suivi n'ont besoin
d'aucun second scrape.

Utilisez-le pour surveiller une marque, une gamme de produits ou une
campagne pour les plaintes, les compliments et les questions d'achat ;
pour briefer les équipes support et marketing à partir de vrais posts
plutôt que de scores agrégés ; et pour garder un historique run après run
de la façon dont les clients parlent de vous.

- **Chaque champ du tweet source** reste à côté des réponses : texte,
  auteur, compteurs, médias, liens, posts cités et posts de réponse.
- **Réponses typées** : une probabilité de pertinence, une catégorie de
  sentiment avec des probabilités et une catégorie d'expérience client.
- **Suivi des changements** entre les runs par décision, pas par bruit de
  probabilité.
- **Facturation au filtre** : seuls les tweets uniques, conformes aux
  filtres et avec une analyse réussie sont facturés.

## Comment surveiller une marque sur X

1. Ajoutez des termes de recherche (par exemple `"Acme headphones"
   lang:en`), des handles de profil, des URL de tweet ou des ID de tweet.
2. Réglez `maxItems` et les filtres d'extraction dont votre tâche a
   besoin, tels que des bornes de date, un minimum de likes ou
   l'exclusion des réponses.
3. Placez vos noms de marque et alias sous `analysis.targets` et décrivez
   la marque dans `analysis.context`.
4. Exécutez l'Actor, puis gardez l'ID du dataset pour votre prochaine
   comparaison.
5. Au run suivant, ajoutez `monitor.baselineDatasetId` avec cet ID.
   Gardez les questions, les cibles, le contexte et les limites de
   contexte inchangés pour que les réponses restent comparables.

```json
{
  "searchTerms": ["\"Acme headphones\" lang:en"],
  "maxItems": 100,
  "analysis": {
    "targets": [{ "name": "Acme", "aliases": ["Acme headphones"] }],
    "context": "Consumer headphones & customer service."
  },
  "monitor": {
    "baselineDatasetId": "YOUR_PREVIOUS_DATASET_ID",
    "maxBaselineRows": 100000
  }
}
```

Les cibles guident la classification. Elles ne créent pas de requêtes de
recherche ni ne retirent automatiquement les tweets non pertinents, donc
choisissez des termes de recherche et des filtres qui correspondent à
votre recherche.

### Ce que le monitor répond

| Question              | Réponse                                           |
| ----------------------- | ---------------------------------------------------- |
| Pertinence de la marque  | Probabilité que le tweet parle de votre cible        |
| Sentiment                | Positif, négatif, mixte, neutre ou incertain          |
| Expérience client        | Client, prospect, observateur ou incertain            |

Utilisez les probabilités de pertinence pour vérifier les homonymes
ambigus. Le sentiment décrit l'attitude exprimée par l'auteur envers la
cible.

### Comment fonctionnent les comparaisons

| Statut de comparaison    | Signification                                            |
| --------------------------- | ------------------------------------------------------------ |
| `first_run`                 | Aucune référence n'a été fournie                              |
| `new_to_baseline`           | Cet ID de tweet était absent de la référence                  |
| `unchanged`                 | Toutes les décisions comparables correspondent                |
| `changed`                   | Au moins 1 décision diffère                                   |
| `not_comparable`            | Métadonnées, ID ou réglages de correspondance requis manquants |
| `analysis_unavailable`      | Ce tweet n'a pas d'analyse réussie                             |

Les réponses se comparent par décision : une réponse `choice` par sa
catégorie, une réponse `score` par son niveau le plus proche, et une
réponse `probability` par sa décision oui-ou-non à 0,5. Une décision ne
compte comme changée que lorsque la réponse évolue clairement : la
catégorie précédente tombe sous 0,4 de probabilité, un score bouge d'au
moins 0,6 niveau, ou une probabilité oui/non se situe à au moins 0,1 du
seuil. Les fluctuations proches d'une égalité entre les runs restent
inchangées. Les évolutions qui conservent la même décision restent
`unchanged`, afin que la variation du modèle entre les runs n'inonde pas
votre rapport. `changes` liste chaque question modifiée avec sa décision
`previous` et `current`. Les changements peuvent refléter une variation
du modèle, un nouveau contexte ou une donnée source modifiée ; ils ne
prouvent pas des faits changés, et un tweet absent ne prouve pas une
suppression.

La limite de référence est de 100 000 lignes par défaut. Les ID de tweet
en double, les échecs de chargement et les tailles de dataset changeantes
arrêtent la comparaison avant la collecte ; ils ne deviennent jamais une
référence vide.

## Tarification

À partir de $0.0003 par tweet analysé avec succès, sans frais de
démarrage. La collecte est incluse, et l'allocation d'analyse documentée
est de 8 questions, 8 000 octets par définition de question et 12 000
octets de contexte par tweet. Les filtres d'extraction et la déduplication
s'exécutent avant l'analyse, donc les lignes filtrées et en double ne sont
jamais analysées ni facturées. Les analyses échouées ou ignorées et les
lignes de diagnostic n'entraînent aucun frais de résultat. L'usage de la
plateforme Apify (calcul, stockage et transfert) est facturé séparément
par Apify aux tarifs de votre plan et apparaît dans l'onglet Pricing.

## Exemples d'entrée et de sortie

L'entrée ci-dessus est prête à copier. Les lignes de sortie ressemblent à
ceci (abrégées) :

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

Chaque résultat contient `tweet`, `analysis` et `monitor`. Les réponses
incluent les types, les versions de question et les probabilités
disponibles. Le contexte manquant de citation, de réponse, d'auteur et de
médias reste explicite sous `analysis.contextAvailability`. Une analyse
échouée ou ignorée conserve le tweet collecté avec une liste de réponses
vide et une `reason`. Les diagnostics gratuits dans le key-value store
expliquent les entrées invalides, les résultats manquants et la collecte
interrompue, et le rapport de run sépare les lignes collectées, les
analyses facturées et les frais en attente.

## Résumé de run et réponses à plat

Chaque run écrit un enregistrement `analysis-summary` dans son
key-value store et le répète sous `results.analysisSummary` dans le
rapport de run. Il compte les lignes analysées, échouées et ignorées,
totalise l'engagement, et résume chaque question. `targets` rapporte les
mentions, la part de voix et l'engagement par marque ou alias, et le
`top` de chaque entrée liste ses trois mentions les plus engagées par
catégorie de réponse, afin que les mentions négatives et positives les
plus fortes de chaque marque soient prêtes pour des alertes. Le bloc
`sentiment` liste les trois mentions positives et négatives les plus
engagées sous `top`, prêtes pour des alertes, et `relevance` compte les
mentions qui concernent la marque. Les nombres sont arrondis à 4
décimales ; les runs vides indiquent des comptes à zéro et des moyennes
`null`. Chaque entrée `targets` porte aussi `choices`, la répartition des
réponses parmi les tweets qui mentionnent cette marque, et
`monitor.changedRows` liste les tweets dont les décisions ont évolué
depuis la référence. Chaque ligne liste aussi `sourceDomains`, les noms
d'hôte qu'elle lie, et le bloc `monitor` du résumé compte les statuts de
comparaison et liste jusqu'à 50 lignes modifiées quand
`monitor.baselineDatasetId` est réglé.

Chaque ligne de résultat porte aussi `answers`, une correspondance plate
de l'ID de question vers la catégorie, le score ou la probabilité
choisie. La vue de dataset `Flat answers` et les exports CSV ou Excel
affichent une colonne par question à côté du tweet, afin que les
tableurs n'aient besoin d'aucune analyse JSON. Les lignes échouées et
ignorées portent une correspondance vide.

## Exemples de tâches

Choisissez parmi 50 tâches publiques. Chacune démarre depuis une
recherche anglaise réelle avec un `maxItems` borné, des cibles et un
contexte déjà prêts, et la vue de dataset overview. Modifiez la recherche
ou les cibles avant de l'exécuter.

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
- [X (Twitter) Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier) :
  répond à vos propres questions de catégorie, de score et de oui/non pour
  chaque tweet par IA. Utilisez-le quand les analyses prédéfinies ne
  correspondent pas à vos étiquettes. À partir de $0.0003 par tweet
  analysé.

## FAQ et support

### Puis-je utiliser mes propres questions ?

Oui. Des `analysis.questions` personnalisées remplacent les valeurs par
défaut : 1 à 8 questions de type `choice`, `score` ou `probability`. Les
questions `choice` acceptent 2 à 255 catégories ; les scores utilisent au
moins 2 niveaux ordonnés. Gardez les mêmes questions sur les runs que vous
voulez comparer.

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
