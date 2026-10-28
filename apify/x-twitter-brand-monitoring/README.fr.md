[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · **Français** · [Italiano](README.it.md)

[![Framer connecte Xquik MCP aux agents de codage](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Découvrez comment Framer utilise les scrapers Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
avec Claude Code, Codex, Cursor & d'autres outils, à partir de 6:07.

Xquik est le service de scraping X (Twitter) le plus rapide et le moins cher au
monde. Ses données X sont les plus complètes. X (Twitter) Brand Monitoring de
Xquik suit les mentions de votre marque avec des réponses sur la pertinence, le
sentiment & l'expérience client. La plupart des autres Actors Apify facturent
avant de filtrer ou de dédupliquer. Xquik facture seulement les résultats
livrés, uniques et conformes à vos filtres. Le prix par post inclut les coûts
d'IA. Vous n'avez besoin d'aucun compte d'IA, d'aucun jeton ni d'aucune clé.

Surveillez les mentions de marque sur X (Twitter) & suivez l'évolution du
sentiment d'un run à l'autre. **X (Twitter) Brand Monitoring with AI Analysis**
de Xquik collecte chaque post correspondant. Pour chaque post, il répond par IA
à des questions de pertinence, de sentiment & d'expérience client. Il compare
ces réponses avec un dataset antérieur, pour que vous voyiez ce qui a changé.
Chaque ligne garde les données d'origine du post. Vos exports, revues & analyses
de suivi n'ont pas besoin d'un second scraping.

Surveillez les plaintes, les éloges & les questions d'achat autour d'une marque,
d'une gamme de produits ou d'une campagne. Briefez les équipes support &
marketing à partir de vrais posts. Gardez, run après run, l'historique de ce que
vos clients disent de vous.

> Xquik est un service tiers indépendant. Non affilié à X Corp. "Twitter" et "X"
> sont des marques déposées de X Corp.

## Pourquoi utiliser X (Twitter) Brand Monitoring with AI Analysis ?

- **Part de voix par marque.** Le résumé donne les mentions, la part de voix &
  l'engagement par marque & par alias.
- **Des alertes sur ce qui a changé.** Ajoutez l'ID du dataset d'un run
  précédent à `monitor.baselineDatasetId`. `monitor.changedRows` liste les
  mentions dont les décisions ont changé, prêtes pour un webhook.
- **Les meilleures mentions par marque.** Chaque marque liste ses 3 mentions
  avec le plus d'engagement par catégorie de réponse.
- **Repérez les homonymes.** Une probabilité de pertinence signale les mentions
  qui ne parlent pas de votre marque.
- **Analysez votre propre texte.** Collez des avis, des réponses ou des
  brouillons dans `texts` pour obtenir les mêmes réponses d'IA. Le run ne
  récupère rien sur X.
- **Des réponses prêtes pour les tableurs.** La vue `Flat answers` & les exports
  CSV ou Excel montrent 1 colonne par question.
- **Posez vos propres questions.** Remplacez les questions par défaut par les
  vôtres, jusqu'à 8, dans `analysis.questions`.
- **Aucun compte ni clé.** Le prix inclut l'analyse par IA. Vous n'avez besoin
  ni de clé d'IA, ni de clé API X, ni de connexion.

### Résultats complets

- Les grandes plages de dates reviennent complètes & vite.
- Les recherches renvoient chaque résultat, quels que soient les opérateurs que
  vous combinez.
- Les pages filtrées reviennent pleines jusqu'à épuisement des résultats.
- Chaque résultat contient les données les plus complètes dont X dispose.

### Lignes exactes

- Les résultats de recherche contiennent chaque post qui correspond à votre
  requête & rien d'autre.
- La recherche de mots & d'expressions fonctionne dans toutes les langues &
  toutes les écritures.
- Les filtres de langue fonctionnent pour toutes les langues que X indique.
- Les comptes protégés & les Listes privées reçoivent une réponse claire, pas
  une page vide.
- Les reposts portent le texte d'origine en entier.
- Chaque ID d'une ligne reste exact.
- Les mentions, liens, hashtags & passages mis en avant pointent vers le bon
  endroit du texte.
- Les badges de certification correspondent à ce qu'affiche `x.com`.
- Les lignes ne contiennent que des données publiques.
- Les résultats du plus récent au plus ancien arrivent dans l'ordre des dates.
- Les recherches acceptent les requêtes telles que vous les taperiez sur X.
- Les recherches de lieux fonctionnent avec des noms en 6 langues.
- Une recherche impossible à lancer échoue aussitôt & dit comment la corriger.
- Une date a le même sens sous toutes ses formes courantes.
- Les recherches acceptent les bornes `since_id` & `max_id`.
- Les publicités & les contenus sponsorisés n'arrivent jamais dans vos lignes.

### Données à jour

- Les lectures continuent de fonctionner quand X déploie des changements.

### Vitesse

- Une page lente ne bloque pas votre run.
- Les recherches restent rapides sur les sujets très actifs.
- Chaque page suivante arrive vite.
- Les lectures se terminent dès que leurs lignes arrivent.
- Les appels d'Actor bloqués repartent d'eux-mêmes.

### Facturation juste

- Une entrée invalide ne coûte rien & vous dit quoi corriger.
- L'analyse par IA facture seulement les posts analysés.
- Les Actors facturent seulement les lignes livrées, uniques & conformes à vos
  filtres.
- Un run redémarré ne facture jamais deux fois.
- Les runs restent dans votre limite de dépense & écrivent quand même leurs
  diagnostics.
- Les Actors d'IA ne facturent pas les analyses échouées ou ignorées.

### Fiabilité

- Une erreur ponctuelle ne fait pas échouer votre run.
- La pagination reste cohérente d'une page à l'autre.
- La pagination ne tourne jamais en boucle.
- Un délai dépassé renvoie les lignes déjà trouvées, avec des diagnostics.
- Les Actors résistent aux courtes pannes de Xquik.
- Les runs d'Actor survivent aux redémarrages sans doublons.
- Une mauvaise ligne ne fait pas échouer tout un lot.
- Les runs arrêtés gardent leurs lignes & leur rapport.
- Un run qui ne peut pas démarrer explique quand même pourquoi.
- Le support peut voir exactement ce qu'une requête ou un run a renvoyé.

### Conçu pour les agents

- Les Actors acceptent une entrée écrite pour d'autres Actors.
- Chaque run indique pourquoi il s'est terminé & s'il faut réessayer.

### Données riches

- Les lignes de post portent le texte des Note Tweets, les modifications, les
  Notes de la Communauté, les libellés de portée & les contrôles de réponse.
- Les lignes portent les apps sources, le nombre de médias & les données de
  compte professionnel.
- Les médias arrivent avec leurs variantes, leur texte alternatif, leurs tailles
  & les motifs de disponibilité.
- Les réponses d'IA portent des probabilités, un niveau de confiance & une
  version de question.
- D'un run d'analyse à l'autre, le bruit ne crée pas de faux changements.

### Contrôles qualité

- Chaque champ que X affiche est fourni, omis exprès ou prouvé absent.
- Xquik teste chaque lecture en direct sur X.

## Quelles données X (Twitter) Brand Monitoring with AI Analysis renvoie-t-il ?

- **Tous les champs du post source.** Le texte, l'auteur, les compteurs, les
  médias, les liens, les posts cités & les posts auxquels il répond restent à
  côté des réponses.
- **Des réponses typées.** Chaque ligne a une probabilité de pertinence, une
  catégorie de sentiment avec ses probabilités & une catégorie d'expérience
  client.

## Comment surveiller une marque sur X

Vous débutez sur Apify ?
[Créez d'abord un compte gratuit](https://console.apify.com/sign-up?fpr=xquik).
Le plan gratuit ne demande aucune carte bancaire & donne $5 à dépenser chaque
mois. À $0.0003 par post analysé, $5 couvrent jusqu'à 16 000 posts analysés,
hors usage de la plateforme. Revenez ensuite ici & cliquez sur Try for free.

1. Ajoutez des termes de recherche, des noms d'utilisateur, des URL de posts ou
   des ID de post. Par exemple, cherchez
   `(Sony OR "WH-1000XM5") headphones lang:en`.
2. Réglez `maxItems` & les filtres d'extraction utiles à votre tâche. Par
   exemple, des bornes de date, un minimum de J'aime ou l'exclusion des
   réponses.
3. Mettez les noms & les alias de votre marque dans `analysis.targets` &
   décrivez la marque dans `analysis.context`.
4. Lancez le run, puis gardez l'ID du dataset pour votre prochaine comparaison.
5. Au run suivant, ajoutez `monitor.baselineDatasetId` avec cet ID. Ne changez
   ni les questions, ni les cibles, ni le contexte, ni les limites de contexte,
   pour que les réponses restent comparables. La comparaison lit ce dataset,
   donc elle fonctionne même si ce run n'a pas écrit son résumé.

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

Les cibles guident le classement. Elles ne créent pas de requêtes de recherche &
ne retirent pas les posts hors sujet. Choisissez des termes de recherche & des
filtres adaptés à votre étude.

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
| `first_run`            | Aucune référence n'a été fournie                                    |
| `new_to_baseline`      | Cet ID de post était absent de la référence                         |
| `unchanged`            | Chaque décision comparable correspond                               |
| `changed`              | Au moins 1 décision diffère                                         |
| `not_comparable`       | Il manque des métadonnées, des ID ou des réglages de correspondance |
| `analysis_unavailable` | Ce post n'a aucune analyse réussie                                  |

Les réponses se comparent par décision. Une réponse `choice` se compare par sa
catégorie. Une réponse `score` se compare par son niveau le plus proche. Une
réponse `probability` se compare par sa décision oui ou non au seuil de 0,5. Une
décision compte comme changée seulement si elle bouge nettement. Les
quasi-égalités entre runs restent `unchanged`, & les écarts qui gardent la même
décision aussi. Les petites différences d'IA entre runs n'apparaissent donc pas
comme des changements.

`changes` liste chaque question modifiée avec sa décision `previous` &
`current`. Un changement peut venir d'une variation de l'IA, d'un nouveau
contexte ou de données source modifiées. Il ne prouve pas que les faits ont
changé, & un post absent ne prouve pas une suppression.

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
- `tweet.id` vaut `text:1`, `text:2` & ainsi de suite, & `tweet.type` vaut
  `text`.
- Chaque texte analysé coûte les mêmes $0.0003 qu'un post analysé.
- Quand `texts` est renseigné, le run analyse seulement ces textes. Lancez les
  cibles X dans un run séparé.

## Combien coûte la surveillance d'une marque sur X ?

X (Twitter) Brand Monitoring de Xquik coûte à partir de $0.0003 par post
analysé. Il ne facture pas de frais de démarrage. Le prix inclut la collecte &
les coûts d'IA. Vous n'avez besoin d'aucun compte d'IA, d'aucun jeton ni
d'aucune clé. Le prix couvre jusqu'à 8 questions & 64 000 octets de contexte par
post. Chaque définition de question peut utiliser jusqu'à 8 000 octets.

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

Chaque résultat contient `tweet`, `analysis` & `monitor`. Les réponses incluent
les types, les versions de question & les probabilités disponibles.
`analysis.contextAvailability` signale le contexte manquant de citation, de
réponse, d'auteur & de médias. Une ligne dont l'analyse a échoué ou a été
ignorée garde le post collecté & une `reason`. Sa liste de réponses est vide.

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
`Top sentiment is negative in 2 of 5 results.` Une comparaison sans changement
indique `No change since the earlier run.` Un run qui rencontre un problème ou
qui est volumineux écrit aussi `run-report`. Un run avec `alwaysSaveRunRecords`
activé le fait aussi. `run-report` reprend le résumé sous
`results.analysisSummary`.

Le résumé compte les lignes analysées, échouées & ignorées. Il additionne
l'engagement & résume chaque question.

- `targets` rapporte les mentions, la part de voix & l'engagement par marque ou
  par alias.
- Chaque entrée de `targets` a `top`, ses 3 mentions avec le plus d'engagement
  par catégorie de réponse. Utilisez-le pour alerter sur les mentions négatives
  & positives les plus fortes.
- Chaque entrée de `targets` a `choices`, la répartition des réponses parmi les
  posts qui mentionnent cette marque.
- Le bloc `sentiment` liste sous `top` les 3 mentions positives & négatives avec
  le plus d'engagement.
- `relevance` compte les mentions qui parlent de la marque.
- `monitor.changedRows` liste les posts dont les décisions ont bougé depuis la
  référence. Envoyez-les à un webhook ou à une alerte.
- Avec `monitor.baselineDatasetId` renseigné, le bloc `monitor` compte les
  statuts de comparaison. Il liste jusqu'à 50 lignes modifiées.
- Chaque ligne liste `sourceDomains`, les noms d'hôte vers lesquels elle pointe.

Le résumé arrondit les nombres à 4 décimales. Un run vide indique des compteurs
à 0 & des moyennes `null`.

Chaque ligne de résultat porte aussi `answers`, une table plate indexée par ID
de question. Chaque valeur est la réponse choisie, soit une catégorie, un score
ou une probabilité. La vue de dataset `Flat answers` & les exports CSV ou Excel
affichent 1 colonne par question. Ces colonnes sont à côté du post, donc vos
tableurs n'ont aucun JSON à analyser. Les lignes échouées & ignorées portent une
table vide.

## Exemples de tâches

Choisissez parmi 50 tâches publiques. Chacune part d'une vraie recherche en
anglais & d'un `maxItems` limité. Elle inclut des cibles prêtes à l'emploi, un
contexte & la vue de dataset overview. Modifiez la recherche ou les cibles avant
de lancer le run.

- [Surveiller les mentions de la marque Nike sur X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-nike-brand-mentions-on-x)
- [Surveiller les mentions de la marque Starbucks sur X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-starbucks-brand-mentions-on-x)
- [Surveiller les mentions de la marque Tesla sur X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-tesla-brand-mentions-on-x)
- [Surveiller les mentions de la marque Spotify sur X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-spotify-brand-mentions-on-x)
- [Surveiller les mentions de la marque Netflix sur X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-netflix-brand-mentions-on-x)
- [Surveiller les mentions de la marque Airbnb sur X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-airbnb-brand-mentions-on-x)
- [Surveiller les mentions de la marque Uber sur X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-uber-brand-mentions-on-x)
- [Surveiller les mentions de la marque Peloton sur X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-peloton-brand-mentions-on-x)
- [Surveiller les mentions de la marque Shopify sur X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-shopify-brand-mentions-on-x)
- [Surveiller les mentions de la marque Notion sur X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-notion-brand-mentions-on-x)
- [Surveiller les mentions de la marque Duolingo sur X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-duolingo-brand-mentions-on-x)
- [Surveiller les mentions de la marque Lululemon sur X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-lululemon-brand-mentions-on-x)

Les autres tâches, sur la page de l'Actor, couvrent d'autres marques, sujets &
marchés.

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
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)
  répond par IA à vos propres questions de catégorie, de score & de oui/non pour
  chaque post. Utilisez-le quand les analyses prédéfinies ne correspondent pas à
  vos étiquettes. À partir de $0.0003 par post analysé.
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

Non. X (Twitter) Brand Monitoring de Xquik inclut les coûts d'IA dans son prix.
Vous n'avez besoin d'aucun compte d'IA, d'aucun jeton ni d'aucune clé. Vous
n'avez pas non plus besoin de clé API X, de connexion ni d'identifiants.

### Puis-je utiliser mes propres questions ?

Oui. Des `analysis.questions` personnalisées remplacent les questions par
défaut. Envoyez 1 à 8 questions de type `choice`, `score` ou `probability`. Les
questions à choix acceptent 2 à 255 catégories. Les questions de score demandent
au moins 2 niveaux ordonnés. Gardez les mêmes questions pour les runs que vous
voulez comparer.

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
l'[onglet API](https://apify.com/xquik/x-twitter-brand-monitoring/api) pour des
exemples en Python, JavaScript & cURL. Utilisez les
[planifications](https://docs.apify.com/platform/schedules) Apify pour des runs
récurrents. Passez l'ID du dataset précédent dans `monitor.baselineDatasetId`
pour voir ce qui a changé. Les intégrations Apify relient aussi les runs aux
webhooks, à Make, Zapier, n8n & Google Sheets.

### Où trouver de l'aide ?

Ouvrez une issue dans
l'[onglet Issues](https://apify.com/xquik/x-twitter-brand-monitoring/issues)
avec l'ID du run. Les diagnostics gratuits du key-value store expliquent les
runs qui demandent votre attention. Un run qui ne récupère aucune ligne en
indique la raison dans son statut.
