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
monde. Ses données X sont les plus complètes. X Tweet Viral Score Analyzer de
Xquik note chaque post. Il ajoute une estimation de Viral Score et un verdict.
La plupart des autres Actors Apify facturent avant de filtrer ou de dédupliquer.
Xquik facture seulement les résultats livrés, uniques et conformes à vos
filtres. Le prix par post inclut les coûts d'IA. Aucun compte d'IA, jeton ou clé
n'est nécessaire.

Comprenez pourquoi des posts percent ou font un flop, et gardez les données
d'origine de chaque post. **X Tweet Viral Score Analyzer with AI** de Xquik
collecte les posts correspondants. L'IA évalue 8 critères pour chaque post.
L'Actor transforme ces réponses en une estimation de Viral Score et un verdict.
Chaque ligne garde les vrais J'aime, reposts, réponses et citations. Comparez
chaque estimation avec ce qui s'est vraiment passé.

- **Un Viral Score par post.** Des règles fixes et versionnées calculent chaque
  score, de 0 à 100.
- **8 critères notés.** Ils montrent pourquoi un post a un score élevé ou
  faible.
- **Des plafonds stricts.** Ils limitent les posts qui ressemblent à du spam, à
  du ragebait ou à un texte générique écrit par une machine.
- **Données source complètes.** Chaque ligne garde tous les champs disponibles
  du post.

Le Viral Score estime l'efficacité de la formulation. Il ne prédit ni les J'aime
ni les vues. Il ne reproduit pas la façon dont X classe les posts.

> Xquik est un service tiers indépendant. Non affilié à X Corp.
> "Twitter" et "X" sont des marques déposées de X Corp.

## Comment vérifier le Viral Score d'un tweet

1. Ajoutez des termes de recherche, des noms d'utilisateur, des URL de posts ou
   des ID de post.
2. Réglez `maxItems` et les filtres d'extraction utiles à votre tâche.
3. Décrivez votre audience dans `analysis.context`, ou gardez la valeur par
   défaut.
4. Lancez le run et ouvrez la vue de dataset `Viral Score`.

```json
{
  "searchTerms": ["from:NASA -filter:replies -filter:retweets"],
  "maxItems": 150,
  "analysis": { "context": "Space fans & general readers." }
}
```

### Les questions auxquelles l'Actor répond

| Question     | Réponse                                                                       |
| ------------ | ----------------------------------------------------------------------------- |
| Accroche     | 0 aucune accroche, 1 ouverture claire, 2 ouverture percutante                 |
| Clarté       | 0 confus, 1 demande un effort, 2 clair dès la première lecture                |
| Informatif   | 0 rien de nouveau, 1 idée connue, 2 enseignement utile                        |
| Drôle        | 0 pas drôle, 1 un peu amusant, 2 assez drôle pour être partagé                |
| Ragebait     | Probabilité que le post cherche surtout à provoquer l'indignation             |
| Écrit par IA | Probabilité que le texte ressemble à un texte générique écrit par une machine |
| Spam         | Probabilité de spam, d'arnaque, de concours ou de chasse à l'engagement       |
| Réaction     | Partager, répondre, aimer, débattre ou ignorer                                |

La réponse "écrit par IA" juge seulement le style. Elle n'établit pas qui a
écrit le post.

### Comment fonctionne le Viral Score

L'accroche, la clarté, l'apport et la réaction attendue font monter le score.
Une formulation qui ressemble à un texte générique écrit par une machine le fait
baisser.

Des plafonds stricts limitent le score du spam probable, du ragebait et des
textes génériques écrits par une machine. Le score est un nombre entier de 0 à
100.

| Verdict       | Score    |
| ------------- | -------- |
| `send_it`     | 70 à 100 |
| `edit_first`  | 40 à 69  |
| `sleep_on_it` | 0 à 39   |

`viral.weights` nomme la version de ces règles, par exemple `viral_lite:1`. Elle
change à chaque changement des règles. Le score vaut `null` après une analyse
échouée ou ignorée. Il vaut aussi `null` quand la réponse à un critère par
défaut manque. X Tweet Viral Score Analyzer de Xquik ne remplace jamais un score
manquant par une supposition.

## Estimation de l'Algorithm Score

X a publié ses poids de classement dans le dépôt `xai-org/x-algorithm`, fichier
`home-mixer/params/param.rs`. X Tweet Viral Score Analyzer de Xquik en applique
4 aux compteurs publics de chaque post :

| Compteur | Poids |
| -------- | ----- |
| J'aime   | 0,5   |
| Réponse  | 5     |
| Repost   | 1     |
| Citation | 5     |

`viral.algorithmWeightedSum` est la somme de chaque compteur multiplié par son
poids. `viral.algorithmScore` divise cette somme par les vues et la multiplie
par 1 000. Un post sans compteur de vues utilise les abonnés à la place.
`viral.algorithmBasis` nomme le diviseur, `views` ou `followers`. Comparez
seulement des scores qui ont la même base. `viral.weightsVersion` nomme les
poids, par exemple `x_algorithm_params:2026-09-18`.

L'estimation a ces limites :

- X multiplie chaque poids par une probabilité qu'il prédit pour un lecteur.
  L'Actor multiplie par les compteurs observés. Le résultat est une estimation,
  pas le score que X calcule.
- X ne publie aucun poids pour les signets ni pour les vues. La somme les laisse
  de côté.
- X utilise d'autres signaux que ces 4, comme le temps de lecture et les
  partages. Les données publiques ne les montrent pas.
- Le score vaut `null` quand un post n'a ni vues ni nombre d'abonnés.
- L'IA ne voit jamais ces compteurs. Elle lit seulement le texte et le contexte.

## Prévision et résultat réel

X Tweet Viral Score Analyzer de Xquik compare chaque Viral Score avec ce qui
s'est passé. `viral.actualEngagementRate` vaut
`log10(1 + weighted sum per 1,000 followers)`. Le logarithme limite l'effet d'un
seul post très populaire. Le taux vaut `null` quand le nombre d'abonnés manque
ou vaut 0.

Le bloc `viral.calibration` du résumé du run donne ces champs :

- `comparedPosts` compte les posts qui ont un Viral Score et un taux réel.
- `rankCorrelation` est une corrélation de rang de Spearman, de -1 à 1. Elle
  montre si les scores plus élevés allaient de pair avec des taux plus élevés.
- `calibrationScore` vaut 100 fois la corrélation, avec un plancher à 0.
- `overperformers` et `underperformers` listent jusqu'à 5 posts chacun. Chacun a
  son ID de post, son URL, son Viral Score, son taux réel et son `gap`.

`gap` est le taux réel standardisé moins le Viral Score standardisé. Un post
entre dans une liste quand son écart atteint 1 écart type.

La calibration a ces limites :

- Moins de 10 posts comparés donnent une calibration `null` avec la raison
  `too_few_posts`. Des scores ou des taux identiques donnent `no_variation`.
- La corrélation est approximative.
- La calibration décrit un seul run. Un score faible peut venir de posts qui
  diffèrent par le moment, le sujet ou l'audience. Il ne prouve pas que
  l'estimation de la formulation a échoué.
- Les posts récents n'ont pas fini de recevoir de l'engagement. Comparez des
  posts d'âge similaire.

## Rapport par compte

Le bloc `viral.accounts` du résumé du run décrit chaque nom d'utilisateur
d'auteur :

- Le nombre de posts, le Viral Score moyen et le taux d'engagement réel moyen.
- Le meilleur et le pire post selon le Viral Score, avec l'ID du post et l'URL.
- Le Viral Score moyen par groupe. Les groupes sont l'heure de publication en
  UTC, la tranche de longueur du texte, la présence de médias, la présence d'un
  lien et l'auto-réponse.

Les tranches de longueur sont `short`, `medium`, `long` et `extended`. `short`
s'arrête à 80 caractères, `medium` à 200 et `long` à 280. `extended` couvre les
textes plus longs. Un post en auto-réponse répond à son propre auteur.

Le rapport a ces limites :

- Le rapport liste les 50 noms d'utilisateur qui ont le plus de posts notés.
- Le rapport suit les 1 000 premiers noms d'utilisateur d'un run.
  `untrackedPosts` compte les posts notés des noms d'utilisateur suivants et les
  posts sans nom d'utilisateur.
- Un groupe de quelques posts est peu parlant. Vérifiez `posts` avant de
  comparer des moyennes.
- Les groupes montrent des associations dans ce run, pas des causes.

## Classement

Le bloc `viral.leaderboard` du résumé du run classe les noms d'utilisateur du
rapport par compte. `byViralScore` classe par Viral Score moyen.
`byActualEngagementRate` classe par taux réel moyen. Chaque liste contient
jusqu'à 20 noms d'utilisateur avec `rank`, `posts` et `average`.

Le classement a ces limites :

- Un nom d'utilisateur a besoin d'au moins 3 posts notés pour être classé.
- La liste des taux ignore les noms d'utilisateur sans nombre d'abonnés.
- En cas d'égalité, le nombre de posts départage, puis le nom d'utilisateur.
- Le classement couvre les posts d'un seul run, pas tout l'historique d'un
  compte.

## Noter un brouillon avant de publier

Collez votre propre texte dans `texts`. X Tweet Viral Score Analyzer de Xquik le
note et ne récupère rien sur X.

```json
{
  "texts": [
    "We shipped dark mode today. Try it and tell us what breaks.",
    "5 things we learned from 1,000 support tickets."
  ],
  "analysis": { "context": "Developers who use our app." }
}
```

- Chaque texte devient 1 ligne avec `viralScore`, `viralVerdict` et
  `viral.stops`.
- `tweet.id` vaut `text:1`, `text:2` et ainsi de suite, et `tweet.type` vaut
  `text`.
- Un brouillon n'a encore ni J'aime ni vues, donc `viral.algorithmScore` reste
  `null`.
- Chaque texte analysé coûte les mêmes $0.0003 qu'un post analysé.
- Quand `texts` est renseigné, le run analyse seulement ces textes. Lancez les
  cibles X dans un run séparé.

## Combien coûte la vérification des Viral Scores ?

X Tweet Viral Score Analyzer de Xquik coûte à partir de $0.0003 par post
analysé. Il ne facture pas de frais de démarrage. Le prix inclut la collecte,
les coûts d'IA et le Viral Score. Aucun compte d'IA, jeton ou clé n'est
nécessaire. Le prix couvre jusqu'à 8 questions et 64 000 octets de contexte par
post. Chaque définition de question peut utiliser jusqu'à 8 000 octets.

Les filtres d'extraction et la déduplication passent avant l'analyse. Vous ne
payez jamais les lignes filtrées ou en double. Les analyses échouées ou ignorées
et les lignes de diagnostic ne sont pas facturées comme résultats. Apify facture
à part l'usage de la plateforme pour le calcul, le stockage et le transfert, aux
tarifs de votre plan. L'onglet Pricing l'indique.

## Exemples d'entrée et de sortie

L'entrée ci-dessus est prête à copier. Voici une ligne de sortie abrégée :

```json
{
  "tweet": { "id": "2100493544842494265", "text": "...", "likeCount": 12 },
  "viral": {
    "score": 74,
    "verdict": "send_it",
    "weights": "viral_lite:1",
    "stops": [],
    "algorithmScore": 8.5,
    "algorithmBasis": "views",
    "algorithmWeightedSum": 17,
    "actualEngagementRate": 0.7202,
    "weightsVersion": "x_algorithm_params:2026-09-18"
  },
  "viralScore": 74,
  "viralVerdict": "send_it",
  "viralAlgorithmScore": 8.5,
  "viralActualEngagementRate": 0.7202,
  "analysis": {
    "status": "succeeded",
    "answers": [
      { "questionId": "hook", "type": "score", "value": 2, "confidence": 0.84 },
      { "questionId": "spam", "type": "probability", "probability": 0.03 },
      {
        "questionId": "reaction",
        "type": "choice",
        "value": "share",
        "confidence": 0.7
      }
    ]
  }
}
```

Chaque résultat contient `tweet`, `analysis` et `viral`. Les réponses incluent
les types, les versions de question et les probabilités disponibles.
`viral.stops` liste les plafonds stricts qui ont limité le score. Une ligne dont
l'analyse a échoué ou a été ignorée garde le post collecté et une `reason`. Sa
liste de réponses est vide et son score vaut `null`.

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
principale, comme `Average Viral Score: 64.` Une comparaison sans changement
indique `No change since the earlier run.` Un run qui rencontre un problème ou
qui est volumineux écrit aussi `run-report`. Un run avec `alwaysSaveRunRecords`
activé le fait aussi. `run-report` reprend le résumé sous
`results.analysisSummary`.

Le résumé compte les lignes analysées, échouées et ignorées. Il additionne
l'engagement et résume chaque question.

- Le bloc `viral` donne `averageScore` et le nombre de chaque verdict. Il compte
  aussi les lignes notées et non notées.
- Le même bloc contient `calibration`, `accounts` et `leaderboard`, décrits plus
  haut.
- Les questions à score donnent une moyenne et une moyenne pondérée par
  l'engagement.
- La répartition `reaction` montre combien de posts tombent dans chaque
  réaction.
- `top` liste les 3 posts qui ont le plus d'engagement pour chaque réaction.
- Chaque ligne liste `sourceDomains`, les noms d'hôte vers lesquels elle pointe.
- Chaque ligne liste les `cashtags` trouvés dans son texte, comme `$NVDA`.
- Avec `monitor.baselineDatasetId` renseigné, le bloc `monitor` du résumé compte
  les statuts de comparaison. Il liste jusqu'à 50 lignes modifiées.

Un run vide indique des compteurs à 0 et une moyenne `null`.

Chaque ligne de résultat porte aussi `viralScore`, `viralVerdict`,
`viralAlgorithmScore` et `viralActualEngagementRate`. Elle porte aussi
`answers`, une table plate indexée par ID de question. Chaque valeur est la
catégorie, le score ou la probabilité choisie. La vue de dataset `Viral Score`
et les exports CSV ou Excel affichent ces colonnes. Elles sont à côté du post,
donc vos tableurs n'ont aucun JSON à analyser. Les lignes échouées et ignorées
portent une table vide.

## Comparer avec un run antérieur

Passez `monitor.baselineDatasetId`, l'ID du dataset d'un run antérieur terminé
avec les mêmes réglages d'analyse. La comparaison lit les lignes de ce run. Elle
fonctionne même si ce run n'a pas écrit son résumé. Chaque ligne gagne alors un
objet `monitor`. Son statut peut être :

- `first_run` sans référence.
- `new_to_baseline` pour les posts absents du run antérieur.
- `unchanged` ou `changed` pour les posts qu'il contenait.

`changes` liste chaque décision de critère passée de `previous` à `current`. Les
décisions se comparent par catégorie, par niveau de score arrondi ou par oui/non
au seuil de 0,5. Une décision compte comme changée seulement si elle bouge
nettement. Les quasi-égalités entre runs restent `unchanged`.

Une référence au-delà de `maxBaselineRows`, ou issue d'autres réglages, arrête
le run avant la collecte. Le run écrit alors une ligne de diagnostic.
`maxBaselineRows` vaut 100 000 par défaut.

## Exemples de tâches

Choisissez parmi 50 tâches publiques. Chacune part d'une vraie recherche en
anglais et d'un `maxItems` limité. Elle utilise la vue de dataset `Viral Score`.
Certaines ajoutent un contexte d'audience. Modifiez la recherche ou le contexte
avant de lancer le run.

- [Viral score of AI startup launch tweets](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-ai-startup-launch-tweets)
- [Viral score of SaaS founder build in public posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-saas-founder-build-in-public-posts)
- [Viral score of Product Hunt launch posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-product-hunt-launch-posts)
- [Viral score of Developer tool announcements](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-developer-tool-announcements)
- [Viral score of Open source release posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-open-source-release-posts)
- [Viral score of Crypto project announcements](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-crypto-project-announcements)
- [Viral score of Parenting humor posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-parenting-humor-posts)
- [Viral score of Office humor posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-office-humor-posts)
- [Viral score of Pet photo captions](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-pet-photo-captions)
- [Viral score audit of NASA posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-nasa-posts)
- [Viral score audit of Duolingo posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-duolingo-posts)
- [Viral score audit of Wendy's posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-wendys-posts)

Les autres tâches, sur la page de l'Actor, couvrent d'autres sujets et comptes
de marque.

## FAQ et support

### Ai-je besoin d'un compte d'IA, d'une clé API X ou d'une connexion ?

Non. X Tweet Viral Score Analyzer de Xquik inclut les coûts d'IA dans son prix.
Aucun compte d'IA, jeton ou clé n'est nécessaire. Vous n'avez pas non plus
besoin de clé API X, de connexion ou d'identifiants.

### Un score élevé veut-il dire qu'un tweet deviendra viral ?

Non. Le score estime l'efficacité de la formulation pour un lecteur moyen. Le
moment, la taille de l'audience, les médias et la chance décident aussi de la
portée. Comparez les scores avec les vrais compteurs d'engagement de chaque
ligne avant de vous y fier.

### Puis-je utiliser mes propres questions ?

Oui. Des `analysis.questions` personnalisées remplacent les questions par
défaut. Envoyez 1 à 8 questions de type `choice`, `score` ou `probability`. Une
question `choice` accepte 2 à 255 catégories. Une question `score` demande au
moins 2 niveaux ordonnés. Le Viral Score a besoin des 8 questions par défaut,
donc des questions personnalisées le laissent à `null`.

### Pourquoi une ligne revient-elle avec `analysis.status` à `failed` ou `skipped` ?

L'Actor a collecté et livré le post, mais l'analyse par IA n'a pas abouti.
`analysis.reason` nomme la cause. `context_limit` signifie que votre contexte et
vos cibles ne laissent pas de place au post. `service_unavailable` signifie que
le service d'analyse était brièvement indisponible. Ces lignes ne sont pas
facturées comme résultats et n'ont pas de score. Raccourcissez
`analysis.context` ou relancez les ID concernés.

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
prises en charge renvoient des réponses de même structure.

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

Oui. L'[onglet API](https://apify.com/xquik/x-tweet-viral-score-analyzer/api)
propose des exemples en Python, JavaScript et cURL. Utilisez les
[planifications](https://docs.apify.com/platform/schedules) Apify pour des runs
récurrents. Passez l'ID du dataset précédent dans `monitor.baselineDatasetId`
pour voir ce qui a changé. Les intégrations Apify relient aussi les runs aux
webhooks, à Make, Zapier, n8n et Google Sheets.

### Où trouver de l'aide ?

Ouvrez une issue sur la page de l'Actor ou écrivez à support@xquik.com avec l'ID
du run. Les diagnostics gratuits du key-value store expliquent les runs vides,
partiels ou interrompus.

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
