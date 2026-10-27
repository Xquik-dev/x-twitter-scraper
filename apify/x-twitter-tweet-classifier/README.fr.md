[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · **Français** · [Italiano](README.it.md)

[![Framer connecte Xquik MCP aux agents de codage](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Découvrez comment Framer utilise les scrapers Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
avec Claude Code, Codex, Cursor & d'autres outils, à partir de 6:07.

Xquik est le service de scraping X (Twitter) le plus rapide et le moins cher au
monde. Ses données X sont les plus complètes. X (Twitter) Tweet Classifier de
Xquik répond à vos propres questions sur chaque post. Demandez des étiquettes,
des scores ou des réponses oui/non. La plupart des autres Actors Apify facturent
avant de filtrer ou de dédupliquer. Xquik facture seulement les résultats
livrés, uniques et conformes à vos filtres. Le prix par post inclut les coûts
d'IA. Vous n'avez besoin d'aucun compte d'IA, d'aucun jeton ni d'aucune clé.

Classez les posts X (Twitter) avec vos propres questions & gardez les données
d'origine de chaque post. **X Tweet Classifier with AI Analysis** de Xquik
collecte les posts correspondants. Il répond à 1 à 8 questions typées par post.
Utilisez des catégories pour trier les demandes au support, des scores pour
prioriser & des probabilités pour la pertinence. Des préréglages couvrent le
suivi de marque, les plaintes, les concurrents, l'intention d'achat, les retours
produit, l'actualité, le sentiment & le sentiment de marché. Vos questions
personnalisées les remplacent.

- **Des réponses typées.** Les réponses portent des probabilités, une confiance
  & des versions de question.
- **Vos questions, vos catégories.** Chaque question accepte jusqu'à 255
  catégories.
- **Données source complètes.** Chaque ligne garde tous les champs que le post
  expose.
- **La facturation après filtrage.** Vous payez seulement les posts uniques,
  conformes à vos filtres & analysés avec succès.

> Xquik est un service tiers indépendant. Non affilié à X Corp. "Twitter" et "X"
> sont des marques déposées de X Corp.

## Comment classer des tweets avec vos propres questions

Vous débutez sur Apify ?
[Créez d'abord un compte gratuit](https://console.apify.com/sign-up?fpr=xquik).
Le plan gratuit ne demande aucune carte bancaire & donne $5 à dépenser chaque
mois. À $0.0003 par post analysé, $5 couvrent jusqu'à 16 000 posts analysés,
hors usage de la plateforme. Revenez ensuite ici & cliquez sur Try for free.

1. Ajoutez des URL de posts, des termes de recherche, des noms d'utilisateur ou
   des ID de post.
2. Réglez `maxItems` & les filtres d'extraction utiles à votre tâche.
3. Ajoutez vos questions dans `analysis.questions`, ou choisissez un préréglage
   avec `analysis.preset`. Sans l'un ni l'autre, le run utilise le préréglage
   `sentiment`.
4. Lancez le run & ouvrez le dataset.

Les modes pris en charge collectent des posts, des recherches, les posts d'un
profil, des Listes, des réponses, des citations & des discussions. L'extraction
d'Articles seule & les listes de comptes ne servent pas d'entrées au classement.

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

### Questions & limites

Fournissez 1 à 8 questions, chacune avec un ID unique, des instructions & une
version.

- `choice` utilise 2 à 255 `categories` nommées, avec des descriptions ou des
  valeurs null.
- `score` utilise un tableau `levels` ordonné d'au moins 2 descriptions.
- `probability` renvoie une valeur entre 0 & 1. Des `criteria` optionnels
  contiennent des descriptions `yes` & `no`.

Les préréglages sont `brand`, `complaints`, `competitors`, `purchase_intent`,
`product_feedback`, `news`, `sentiment` & `market`. `maxContextBytes` vaut 64
000 octets par défaut. Une limite plus basse coupe les posts longs pour qu'ils
tiennent & les marque `truncated`. `concurrency` vaut 16 par défaut & accepte 1
à 16. Chaque définition de question peut utiliser jusqu'à 8 000 octets.

## Analyser votre propre texte

Collez vos brouillons, réponses, avis ou notes dans `texts`. X Tweet Classifier
de Xquik les analyse. Il ne récupère rien sur X.

```json
{
  "texts": [
    "The new update is great, but sync still drops on mobile.",
    "Support fixed my issue in 10 minutes. Thank you."
  ]
}
```

- Chaque texte devient 1 ligne avec les mêmes réponses `analysis` qu'un post.
- `tweet.id` vaut `text:1`, `text:2` & ainsi de suite, & `tweet.type` vaut
  `text`.
- Chaque texte analysé coûte les mêmes $0.0003 qu'un post analysé.
- Quand `texts` est renseigné, le run analyse seulement ces textes. Lancez les
  cibles X dans un run séparé.

## Combien coûte le classement de tweets ?

X Tweet Classifier de Xquik coûte à partir de $0.0003 par post analysé. Il ne
facture pas de frais de démarrage. Le prix inclut la collecte & les coûts d'IA.
Vous n'avez besoin d'aucun compte d'IA, d'aucun jeton ni d'aucune clé. Le prix
couvre jusqu'à 8 questions & 64 000 octets de contexte par post. Chaque
définition de question peut utiliser jusqu'à 8 000 octets.

Pour plus de volume,
[choisissez un plan Apify](https://apify.com/pricing?fpr=xquik) avec plus
d'usage prépayé.

Les filtres d'extraction & la déduplication passent avant l'analyse. Vous ne
payez jamais les lignes filtrées ou en double. Les analyses échouées, les
analyses ignorées & les lignes de diagnostic ne sont pas facturées comme
résultats. Apify facture à part l'usage de la plateforme pour le calcul, le
stockage & le transfert, aux tarifs de votre plan. L'onglet Pricing l'indique.

## Exemples d'entrée & de sortie

L'entrée ci-dessus est prête à copier. Une ligne de sortie abrégée ressemble à
ceci.

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

Chaque résultat contient `tweet` & `analysis`. Les réponses incluent les types,
les versions de question & les probabilités disponibles. Une ligne dont
l'analyse a échoué ou a été ignorée garde le post collecté & une `reason`. Sa
liste de réponses est vide.

Les diagnostics gratuits du key-value store expliquent les entrées invalides,
les résultats manquants & les collectes interrompues. Le rapport du run sépare
les lignes collectées, les analyses facturées & les frais en attente.

## Résumé du run & réponses à plat

Un run écrit un enregistrement `analysis-summary` dans son key-value store dans
3 cas.

- Il rencontre un problème ou il est volumineux.
- Sa comparaison trouve un post modifié, nouveau ou non comparable.
- Il a `alwaysSaveRunRecords` activé.

Les autres runs n'écrivent pas cet enregistrement, y compris le premier run
d'une série. Leur statut donne la réponse principale, comme
`Top sentiment is positive in 3 of 5 results.` Une comparaison sans changement
indique `No change since the earlier run.` Un run qui rencontre un problème ou
qui est volumineux écrit aussi `run-report`. Un run avec `alwaysSaveRunRecords`
activé le fait aussi. `run-report` reprend le résumé sous
`results.analysisSummary`.

Le résumé compte les lignes analysées, échouées & ignorées. Il additionne
l'engagement & résume chaque question. Chaque question personnalisée a son
propre bloc.

- Une question à choix donne le nombre & la part de chaque catégorie.
- Une question de score donne sa moyenne & le nombre de lignes par niveau.
- Une question oui/non donne le nombre de oui & de non.
- Chaque ligne liste `sourceDomains`, les noms d'hôte vers lesquels elle pointe.
- Chaque ligne liste les `cashtags` trouvés dans son texte, comme `$NVDA`.
- Avec `monitor.baselineDatasetId` renseigné, le bloc `monitor` du résumé compte
  les statuts de comparaison. Il liste jusqu'à 50 lignes modifiées.

Le résumé arrondit les nombres à 4 décimales. Un run vide indique des compteurs
à 0 & des moyennes `null`.

Réglez `analysis.preset` pour lancer un préréglage intégré à la place de
questions personnalisées. Il accepte `brand`, `complaints`, `purchase_intent`,
`product_feedback`, `competitors`, `sentiment`, `market` ou `news`. Le résumé
donne alors chaque question de ce préréglage.

Chaque ligne de résultat porte aussi `answers`, une table plate indexée par ID
de question. Chaque valeur est la réponse choisie, soit une catégorie, un score
ou une probabilité. La vue de dataset `Flat answers` & les exports CSV ou Excel
affichent 1 colonne par question. Ces colonnes sont à côté du post, donc vos
tableurs n'ont aucun JSON à analyser. Les lignes échouées & ignorées portent une
table vide.

## Comparer avec un run antérieur

Passez `monitor.baselineDatasetId`, l'ID du dataset d'un run antérieur terminé
avec les mêmes réglages d'analyse. La comparaison lit les lignes de ce run. Elle
fonctionne même si ce run n'a pas écrit son résumé. Chaque ligne gagne alors un
objet `monitor`. Son statut prend ces valeurs.

- `first_run` sans référence.
- `new_to_baseline` pour les posts absents du run antérieur.
- `unchanged` ou `changed` pour les posts qu'il contenait.

`changes` liste chaque décision de vos questions passée de `previous` à
`current`. Les décisions se comparent par catégorie, par niveau de score arrondi
ou par oui/non au seuil de 0,5. Une décision compte comme changée seulement si
elle bouge nettement. Les quasi-égalités entre runs restent `unchanged`.

Une référence au-delà de `maxBaselineRows`, ou issue d'autres réglages, arrête
le run avant la collecte. Le run écrit alors une ligne de diagnostic.
`maxBaselineRows` vaut 100 000 par défaut.

## Exemples de tâches

Choisissez parmi 50 tâches publiques. Chacune part d'une vraie recherche en
anglais & d'un `maxItems` limité. Elle inclut des questions personnalisées
prêtes à l'emploi & la vue de dataset overview. Modifiez la recherche ou les
questions avant de lancer le run.

- [Trier les demandes de support client sur X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/triage-support-requests-on-x)
- [Noter des prospects commerciaux à partir de posts X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/score-sales-leads-from-x-posts)
- [Détecter les signalements de panne sur X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/detect-outage-reports-on-x)
- [Classer les signaux de recrutement sur X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-hiring-signals-on-x)
- [Étiqueter les demandes de fonctionnalités sur X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/tag-feature-requests-on-x)
- [Classer les retours sur une app comme des avis de store](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-app-store-style-feedback)
- [Détecter les alertes d'arnaque et de fraude sur X](https://apify.com/xquik/x-twitter-tweet-classifier/examples/detect-scam-warnings-on-x)
- [Classer l'intention de participer à un événement](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-event-attendance-intent)
- [Extraire des signaux d'avis sur des restaurants](https://apify.com/xquik/x-twitter-tweet-classifier/examples/extract-restaurant-review-signals)
- [Séparer la promotion crypto de l'analyse](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-crypto-scam-vs-analysis)
- [Classer les posts politiques persuasifs](https://apify.com/xquik/x-twitter-tweet-classifier/examples/classify-political-ad-style-posts)
- [Détecter les signaux de risque de résiliation d'abonnement](https://apify.com/xquik/x-twitter-tweet-classifier/examples/detect-churn-risk-signals)

Les autres tâches, sur la page de l'Actor, couvrent d'autres workflows.

## Actors Xquik associés

Tous les Actors Xquik partagent le même moteur d'extraction, la même facturation
après filtrage & les mêmes diagnostics. Choisissez celui qui correspond aux
données dont vous avez besoin.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper) scrape des posts
  depuis des recherches, des fils de profil, des Listes & des ID de post, avec
  plus de 50 filtres & des exports plats. Utilisez-le quand vous avez besoin de
  données de posts sans analyse. À partir de $0.00015 par ligne.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper) scrape des
  profils ainsi que leurs posts, réponses, médias & abonnés à partir de noms
  d'utilisateur, d'ID ou d'URL. Utilisez-le quand vous partez de comptes plutôt
  que de recherches. À partir de $0.00015 par ligne.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper) scrape des
  réponses, des commentaires & des conversations entières sous les posts, avec
  plus de 25 filtres. Utilisez-le quand vous avez besoin des échanges sous les
  posts. À partir de $0.00015 par ligne.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper) scrape en
  masse les réponses, citations, comptes qui ont reposté & fils de posts, à
  partir d'URL ou d'ID. Utilisez-le quand vous mesurez qui a interagi avec des
  posts. À partir de $0.00015 par ligne.
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper)
  scrape les posts qui citent des posts, avec le texte, les médias, les
  compteurs, les auteurs & 11 filtres. Utilisez-le quand vous étudiez qui a cité
  des posts & ce qu'ils ont dit. À partir de $0.00015 par post.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper) scrape les
  abonnés, les abonnements, les membres de Liste, les abonnés de Liste & les
  membres de Communauté sous forme de lignes de profil. Utilisez-le quand vous
  avez besoin de listes d'audience ou de membres. À partir de $0.00015 par
  profil.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper)
  recherche des comptes par nom d'utilisateur, bio & localisation, avec des
  filtres d'abonnés, de certification, d'ancienneté & de localisation.
  Utilisez-le quand vous créez des listes de comptes à partir d'une recherche. À
  partir de $0.00015 par profil.
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper)
  vérifie où sont basés les comptes avec le libellé "Account based in" de X, la
  mention "connected via" & les changements de nom d'utilisateur. Utilisez-le
  quand vous contrôlez où sont basés des comptes. À partir de $0.00015 par
  compte.
- [X Email Scraper](https://apify.com/xquik/x-email-scraper) récupère les
  e-mails, téléphones & liens que les comptes publient sur leur profil, à partir
  de noms d'utilisateur, d'abonnés ou de recherches d'utilisateurs. Utilisez-le
  quand vous avez besoin des e-mails que les profils publient. À partir de
  $0.00015 par profil.
- [X List Scraper](https://apify.com/xquik/x-list-scraper) scrape les posts,
  membres & abonnés d'une Liste à partir d'URL ou d'ID de Liste. Utilisez-le
  quand une Liste choisie définit vos sources. À partir de $0.00015 par ligne.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper) scrape les
  infos, posts, recherches, membres & modérateurs d'une Communauté. Utilisez-le
  quand vos sources sont des Communautés X. À partir de $0.00015 par ligne.
- [X Space Scraper](https://apify.com/xquik/x-space-scraper) trouve des Spaces
  par mot-clé & lit leurs titres, états, heures, nombres d'auditeurs, hôtes &
  intervenants. Il lit aussi des diffusions par URL ou par ID. Utilisez-le quand
  vous suivez l'audio & la vidéo en direct sur X. À partir de $0.00015 par Space
  ou diffusion.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper) scrape les
  tendances en temps réel par lieu, avec rang, volume, requête & WOEID.
  Utilisez-le quand vous suivez les tendances de chaque lieu. À partir de
  $0.00015 par tendance.
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper) scrape les offres
  d'emploi X par mot-clé, lieu, mode de travail, niveau d'expérience &
  entreprise, avec salaires & liens de candidature. Utilisez-le quand vous
  collectez des offres d'emploi publiées sur X. À partir de $0.00015 par offre.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper) scrape les
  Articles X longs en Markdown & en texte, avec couvertures, auteurs, dates &
  métriques. Utilisez-le quand vous avez besoin du corps des articles, pas des
  posts. À partir de $0.00015 par article.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader) extrait ou
  stocke des photos, vidéos & GIF à partir de posts ou de profils, avec des
  options MP4 & de métadonnées. Utilisez-le quand vous avez besoin des fichiers
  médias eux-mêmes. À partir de $0.00015 par ligne média.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring)
  suit les mentions de marque avec des réponses IA de pertinence, de sentiment &
  d'expérience client & compare les runs. Utilisez-le quand vous surveillez une
  marque dans le temps. À partir de $0.0003 par post analysé.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis)
  attribue par IA une attitude, une intensité & une probabilité de sarcasme à
  chaque post. Utilisez-le quand vous avez besoin du sentiment général sur
  n'importe quel sujet. À partir de $0.0003 par post analysé.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)
  attribue par IA une orientation haussière, baissière, neutre ou mixte, un type
  de contenu, une conviction & une pertinence d'actif. Utilisez-le quand vous
  suivez les actions, la crypto ou les discussions de trading. À partir de
  $0.0003 par post analysé.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)
  étiquette par IA les posts d'actualité selon leur format, leur attribution de
  source & leur pertinence de sujet. Utilisez-le quand vous séparez le reportage
  du commentaire. À partir de $0.0003 par post analysé.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)
  estime un Viral Score de 0 à 100 & un verdict pour chaque post, à partir des
  réponses de l'IA sur 8 traits. Utilisez-le quand vous étudiez pourquoi des
  posts se propagent ou font un flop. À partir de $0.0003 par post analysé.
- [X (Twitter) Monitor](https://apify.com/xquik/x-twitter-monitor) capte chaque
  nouveau tweet, réponse, citation, repost & changement de profil des comptes,
  généralement en moins d'une seconde après son affichage sur X, ainsi que les
  tweets par mot-clé & les follows. Utilisez-le quand vous voulez une alerte dès
  que X affiche un tweet. À partir de $0.0045 par monitor-hour.

## FAQ & support

Les réponses aux questions fréquentes, puis où trouver de l'aide.

### Ai-je besoin d'un compte d'IA, d'une clé API X ou d'une connexion ?

Non. X Tweet Classifier de Xquik inclut les coûts d'IA dans son prix. Vous
n'avez besoin d'aucun compte d'IA, d'aucun jeton ni d'aucune clé. Vous n'avez
pas non plus besoin de clé API X, de connexion ni d'identifiants.

### Les versions de question comptent-elles ?

Oui. Chaque réponse enregistre la `version` que vous donnez à sa question. Quand
vous affinez vos questions au fil du temps, vous savez quelle formulation a
produit un résultat.

### Pourquoi une ligne revient-elle avec une analyse échouée ou ignorée ?

`analysis.status` vaut `failed` ou `skipped`. L'Actor a collecté & livré le
post, mais l'analyse par IA n'a pas abouti. `analysis.reason` nomme la cause.
`context_limit` signifie que votre contexte & vos cibles ne laissent pas de
place au post. `service_unavailable` signifie que le service d'analyse était
brièvement indisponible. Ces lignes ne sont pas facturées comme résultats.
Raccourcissez `analysis.context` ou relancez les ID concernés.

L'Actor analyse quand même un post plus long que `maxContextBytes`. Il coupe
d'abord les posts cités & ceux auxquels le post répond, puis le post lui-même.
`analysis.contextAvailability.postText` vaut alors `truncated`. Augmentez
`maxContextBytes` jusqu'à 64 000 pour garder plus de texte.

### L'analyse vérifie-t-elle les faits ?

Non. Les réponses décrivent ce que le post exprime & la façon dont il le
présente. Les probabilités expriment la confiance de l'IA, pas la vérité.
Vérifiez les classements importants avec le post d'origine, que chaque ligne
garde.

### Quelles langues sont prises en charge ?

L'extraction prend en charge toutes les langues que X propose. Nous validons
d'abord l'analyse sur des scénarios clients en anglais. Les autres langues
prises en charge renvoient des réponses de même structure. Les catégories
`unclear` & les probabilités montrent l'incertitude dans toutes les langues.

### Comment limiter le coût ?

Les filtres, la déduplication & `maxItems` passent avant l'analyse. Vous payez
seulement les posts uniques et conformes à vos filtres. Utilisez des opérateurs
de recherche précis, des bornes de date & des seuils d'engagement. Commencez
avec un petit `maxItems` pour vérifier la qualité des réponses avant un gros
run.

### Est-il légal d'analyser des données X ?

L'Actor demande à X des champs publics. Les résultats peuvent contenir des
données personnelles. Assurez-vous d'avoir une finalité licite & respectez les
règles de protection des données applicables. En cas de doute, demandez conseil
à un juriste qualifié.

### Puis-je utiliser l'API, les planifications & les intégrations ?

Oui. Consultez
l'[onglet API](https://apify.com/xquik/x-twitter-tweet-classifier/api) pour des
exemples en Python, JavaScript & cURL. Utilisez les
[planifications](https://docs.apify.com/platform/schedules) Apify pour des runs
récurrents. Passez l'ID du dataset précédent dans `monitor.baselineDatasetId`
pour voir ce qui a changé. Les intégrations Apify relient aussi les runs aux
webhooks, à Make, Zapier, n8n & Google Sheets.

### Où trouver de l'aide ?

Ouvrez une issue dans
l'[onglet Issues](https://apify.com/xquik/x-twitter-tweet-classifier/issues)
avec l'ID du run. Les diagnostics gratuits du key-value store expliquent les
runs qui demandent votre attention. Un run qui ne récupère aucune ligne en
indique la raison dans son statut.
