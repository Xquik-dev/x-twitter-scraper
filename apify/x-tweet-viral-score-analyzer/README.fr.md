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
monde, avec les données X les plus complètes. X Tweet Viral Score Analyzer
ajoute une estimation de Viral Score & un verdict à chaque tweet. Tous les
autres Actors Apify facturent avant de filtrer ou de dédupliquer. Xquik ne
facture que les résultats livrés, uniques et conformes aux filtres. Les coûts
d'IA sont inclus dans le prix par tweet. Vous n'avez besoin d'aucun compte d'IA,
jeton ni clé.

Comprenez pourquoi des tweets se propagent ou échouent et conservez les
données originales du tweet. **X Tweet Viral Score Analyzer with AI**
collecte les tweets correspondants. L'IA note 8 traits de chaque post.
L'Actor transforme ces réponses en une estimation de Viral Score de 0 à 100
& un verdict. Chaque ligne conserve les likes, reposts, réponses & citations
réels, afin que vous puissiez comparer chaque estimation avec ce qui s'est
passé.

- **Viral Score par post** à partir de règles fixes et versionnées.
- **8 réponses sur les traits** montrent pourquoi un post a obtenu un score
  élevé ou faible.
- **Arrêts stricts** plafonnent les posts qui ressemblent à du spam, du
  ragebait ou du texte générique de machine.
- **Enregistrements source complets** avec chaque champ exposé par le
  tweet.

Le Viral Score est une estimation de l'efficacité du libellé. Il ne prédit
ni les likes ni les vues. Il ne reproduit pas la façon dont X classe les
posts.

## Comment vérifier le Viral Score d'un tweet

1. Ajoutez des termes de recherche, des handles de profil, des URL de
   tweet ou des ID de tweet.
2. Réglez `maxItems` et les filtres d'extraction dont votre tâche a
   besoin.
3. Décrivez votre audience dans `analysis.context`, ou gardez la valeur par
   défaut.
4. Exécutez l'Actor et ouvrez la vue de dataset `Viral Score`.

```json
{
  "searchTerms": ["from:NASA -filter:replies -filter:retweets"],
  "maxItems": 150,
  "analysis": { "context": "Space fans & general readers." }
}
```

### Ce que l'Actor répond

| Question     | Réponse                                                                 |
| ------------ | ----------------------------------------------------------------------- |
| Accroche     | 0 aucune accroche, 1 ouverture claire, 2 ouverture percutante           |
| Clarté       | 0 confus, 1 demande un effort, 2 clair dès la première lecture          |
| Informatif   | 0 rien de nouveau, 1 idée familière, 2 enseignement utile               |
| Drôle        | 0 pas drôle, 1 légèrement amusant, 2 assez drôle pour être partagé      |
| Ragebait     | Probabilité que le post provoque surtout l'indignation                  |
| Écrit par IA | Probabilité que le texte ressemble à du texte générique de machine      |
| Spam         | Probabilité de spam, d'arnaque, de concours ou de chasse à l'engagement |
| Réaction     | Partager, répondre, aimer, débattre ou ignorer                          |

La réponse « écrit par IA » ne juge que le style. Elle n'établit pas qui a
écrit le post.

### Comment fonctionne le Viral Score

L'accroche, la clarté, l'apport et la réaction attendue font monter le score.
Une formulation qui ressemble à un texte générique de machine le fait baisser.

Des plafonds stricts limitent le score du spam probable, du ragebait et des
textes génériques de machine. Le score est un nombre entier de 0 à 100.

| Verdict       | Score    |
| ------------- | -------- |
| `send_it`     | 70 à 100 |
| `edit_first`  | 40 à 69  |
| `sleep_on_it` | 0 à 39   |

`viral.weights` nomme la version de ces règles, par exemple `viral_lite:1`. Elle
change chaque fois que les règles changent. Le score vaut `null` quand l'analyse
a échoué, que l'Actor l'a ignorée ou qu'une réponse de trait par défaut manque.
L'Actor ne remplit jamais un score manquant par une supposition.

## Estimation de l'Algorithm Score

X a publié ses poids de classement dans le dépôt `xai-org/x-algorithm`,
fichier `home-mixer/params/param.rs`. L'Actor en applique 4 aux compteurs
publics de chaque post :

| Compteur | Poids |
| -------- | ----- |
| Like     | 0,5   |
| Réponse  | 5     |
| Repost   | 1     |
| Citation | 5     |

`viral.algorithmWeightedSum` est la somme de chaque compteur multiplié par
son poids. `viral.algorithmScore` divise cette somme par les vues & la
multiplie par 1 000. Un post sans compteur de vues utilise les abonnés à la
place. `viral.algorithmBasis` nomme le diviseur, `views` ou `followers`. Ne
comparez que des scores ayant la même base. `viral.weightsVersion` nomme
les poids, comme `x_algorithm_params:2026-09-18`.

Limites :

- X multiplie chaque poids par une probabilité qu'il prédit pour un
  lecteur. L'Actor multiplie par les compteurs observés. Le résultat est
  une estimation, pas le score que X calcule.
- X ne publie aucun poids pour les signets ni les vues. La somme exclut les
  deux.
- X utilise plus de signaux que ces 4, comme le temps passé & les partages.
  Les données publiques ne les montrent pas.
- Le score est `null` quand un post n'a ni vues ni nombre d'abonnés.
- L'IA ne voit jamais ces compteurs. Elle ne lit que le texte & le
  contexte.

## Prévu face au réel

L'Actor compare chaque Viral Score avec ce qui s'est passé.
`viral.actualEngagementRate` vaut
`log10(1 + weighted sum per 1,000 followers)`. Le logarithme limite l'effet
d'un seul très gros post. Le taux est `null` quand le nombre d'abonnés
manque ou vaut 0.

Le bloc `viral.calibration` du résumé de run indique :

- `comparedPosts` : les posts ayant un Viral Score & un taux réel.
- `rankCorrelation` : une corrélation de rang de Spearman de -1 à 1. Elle
  vérifie si des scores plus élevés allaient avec des taux plus élevés.
- `calibrationScore` : 100 fois la corrélation, avec un plancher à 0.
- `overperformers` & `underperformers` : jusqu'à 5 posts chacun, avec l'ID
  du tweet, l'URL, le Viral Score, le taux réel & `gap`.

`gap` est le taux réel standardisé moins le Viral Score standardisé. Un
post entre dans une liste quand son écart atteint 1 écart type.

Limites :

- Moins de 10 posts comparés donnent une calibration `null` avec la raison
  `too_few_posts`. Des scores ou des taux identiques donnent
  `no_variation`.
- La corrélation est approximative.
- La calibration décrit un seul run. Un score faible peut signifier que les
  posts diffèrent par le moment, le sujet ou l'audience, pas que
  l'estimation du libellé a échoué.
- Les posts récents n'ont pas fini de recueillir de l'engagement. Comparez
  des posts d'âge similaire.

## Rapport par compte

Le bloc `viral.accounts` du résumé de run décrit chaque handle d'auteur :

- Le nombre de posts, le Viral Score moyen & le taux d'engagement réel
  moyen.
- Le meilleur & le pire post selon le Viral Score, avec l'ID du tweet &
  l'URL.
- Le Viral Score moyen par groupe : heure de publication en UTC, tranche de
  longueur du texte, avec média, avec lien & auto-thread.

Les tranches de longueur du texte sont `short` jusqu'à 80 caractères,
`medium` jusqu'à 200, `long` jusqu'à 280 & `extended` au-delà. Un post
d'auto-thread répond à son propre auteur.

Limites :

- Le rapport liste les 50 handles ayant le plus de posts notés.
- L'Actor suit les 1 000 premiers handles d'un run. `untrackedPosts` compte
  les posts notés des handles suivants & les posts sans handle.
- Un groupe avec peu de posts dit peu de choses. Vérifiez `posts` avant de
  comparer des moyennes.
- Les groupes montrent ce qui allait ensemble dans ce run. Ils ne montrent
  pas de cause.

## Classement

Le bloc `viral.leaderboard` du résumé de run classe les handles du rapport
par compte. `byViralScore` classe par Viral Score moyen.
`byActualEngagementRate` classe par taux réel moyen. Chaque liste contient
jusqu'à 20 handles avec `rank`, `posts` & `average`.

Limites :

- Un handle a besoin d'au moins 3 posts notés pour être classé.
- La liste des taux ignore les handles sans nombre d'abonnés.
- Le plus grand nombre de posts, puis le nom du handle, départagent les
  égalités.
- Le classement couvre les posts d'un seul run, pas tout l'historique d'un
  compte.

## Noter un brouillon avant de publier

Collez votre propre texte dans `texts`. L'Actor le note & ne récupère rien
sur X.

```json
{
  "texts": [
    "We shipped dark mode today. Try it and tell us what breaks.",
    "5 things we learned from 1,000 support tickets."
  ],
  "analysis": { "context": "Developers who use our app." }
}
```

- Chaque texte devient 1 ligne avec `viralScore`, `viralVerdict` &
  `viral.stops`.
- `tweet.id` vaut `text:1`, `text:2` & ainsi de suite, & `tweet.type` vaut
  `text`.
- Un brouillon n'a encore ni likes ni vues, donc `viral.algorithmScore`
  reste `null`.
- Chaque texte analysé coûte les mêmes $0.0003 qu'un tweet analysé.
- Avec `texts` réglé, le run n'analyse que ces textes. Exécutez les cibles
  X séparément.

## Tarification

Les coûts d'IA sont inclus dans le prix par tweet. Vous n'avez besoin d'aucun
compte d'IA, jeton ni clé.

À partir de $0.0003 par tweet analysé avec succès, sans frais de
démarrage. Le prix inclut la collecte & le Viral Score. L'allocation
d'analyse est de 8 questions, 8 000 octets par définition de question et
12 000 octets de contexte par tweet. Les filtres d'extraction et la
déduplication s'exécutent avant l'analyse, donc les lignes filtrées et en
double ne sont jamais analysées ni facturées. Les analyses échouées ou
ignorées et les lignes de diagnostic n'entraînent aucun frais de résultat.
Apify facture séparément l'usage de la plateforme. L'onglet Pricing
l'affiche.

## Exemples d'entrée et de sortie

L'entrée ci-dessus est prête à copier. Les lignes de sortie ressemblent à
ceci (abrégées) :

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

Chaque résultat contient `tweet`, `analysis` & `viral`. Les réponses
incluent les types, les versions de question et les probabilités
disponibles. `viral.stops` liste les arrêts stricts qui ont plafonné le
score. Une analyse échouée ou ignorée conserve le tweet collecté avec une
liste de réponses vide, une `reason` & un score `null`. Les diagnostics
gratuits dans le key-value store expliquent les entrées invalides, les
résultats manquants et la collecte interrompue. Le rapport de run sépare
les lignes collectées, les analyses facturées et les frais en attente.

## Résumé de run et réponses à plat

Chaque run écrit un enregistrement `analysis-summary` dans son
key-value store et le répète sous `results.analysisSummary` dans le
rapport de run. Il compte les lignes analysées, échouées et ignorées,
totalise l'engagement, et résume chaque question. Son bloc `viral` indique
`averageScore`, le nombre de chaque verdict, & combien de lignes l'Actor a
notées ou laissées sans score. Le même bloc contient `calibration`,
`accounts` & `leaderboard`, décrits ci-dessus. Les questions de score
indiquent une moyenne & une moyenne pondérée par l'engagement. La
répartition `reaction` montre combien de tweets tombent dans chaque
réaction, & `top` liste les trois tweets les plus engagés par réaction. Un
run vide indique des comptes à zéro & une moyenne `null`. Chaque ligne
liste `sourceDomains`, les noms d'hôte qu'elle lie, & `cashtags` tels que
`$NVDA` trouvés dans son texte. Avec `monitor.baselineDatasetId` réglé, le
bloc `monitor` du résumé compte les statuts de comparaison & liste jusqu'à
50 lignes modifiées.

Chaque ligne de résultat porte aussi `viralScore`, `viralVerdict`,
`viralAlgorithmScore`, `viralActualEngagementRate` & `answers`, une
correspondance plate de l'ID de question vers la catégorie, le score ou la
probabilité choisie. La vue de dataset `Viral Score` et les exports CSV ou
Excel affichent ces colonnes à côté du tweet, afin que les tableurs n'aient
besoin d'aucune analyse JSON. Les lignes échouées et ignorées portent une
correspondance vide.

## Comparer avec un run antérieur

Passez `monitor.baselineDatasetId`, l'ID du dataset d'un run antérieur terminé
avec les mêmes réglages d'analyse. Chaque ligne gagne alors un objet `monitor`.
Son statut est `first_run` sans référence, `new_to_baseline` pour les tweets
absents du run antérieur, & `unchanged` ou `changed` pour les tweets qu'il
avait. `changes` liste chaque décision de trait ayant évolué de `previous` à
`current`. Les décisions se comparent par catégorie, niveau de score arrondi, ou
oui/non à 0,5. Une décision ne compte comme changée que si elle bouge nettement.
Les fluctuations proches d'une égalité entre les runs restent inchangées. Les
références au-delà de `maxBaselineRows` (par défaut 100 000) ou issues de
réglages différents arrêtent le run avant la collecte avec une ligne de
diagnostic.

## Exemples de tâches

Choisissez parmi 50 tâches publiques. Chacune démarre depuis une
recherche anglaise réelle avec un `maxItems` borné & la vue de dataset
`Viral Score`. Certaines ajoutent un contexte d'audience. Modifiez la
recherche ou le contexte avant de l'exécuter.

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

Les tâches restantes couvrent d'autres sujets & comptes de marque sur la
page de l'Actor.

## FAQ et support

### Un score élevé signifie-t-il qu'un tweet deviendra viral ?

Non. Le score estime l'efficacité du libellé pour un lecteur général. Le
moment, la taille de l'audience, les médias & la chance décident aussi de
la portée. Comparez les scores avec les compteurs d'engagement réels de
chaque ligne avant de vous y fier.

### Puis-je utiliser mes propres questions ?

Oui. Des `analysis.questions` personnalisées remplacent les valeurs par
défaut : 1 à 8 questions de type `choice`, `score` ou `probability` avec
2 à 255 catégories ou au moins 2 niveaux ordonnés. Le Viral Score a besoin
des 8 questions par défaut, donc des questions personnalisées le laissent
à `null`.

### Pourquoi une ligne revient-elle avec un `analysis.status` de `failed` ou `skipped` ?

L'Actor a collecté & livré le tweet, mais l'analyse par IA ne s'est pas
terminée. `analysis.reason` nomme la cause, comme `context_limit` quand le tweet
et son contexte dépassent `maxContextBytes`, ou `service_unavailable` quand le
service d'analyse est brièvement indisponible. Ces lignes n'entraînent aucun
frais de résultat & n'ont aucun score. Augmentez `maxContextBytes` (jusqu'à 12 000)
ou relancez les ID concernés.

### L'analyse vérifie-t-elle les faits ?

Non. Les réponses décrivent ce que le post exprime & comment le post le
formule. Les probabilités expriment la confiance du modèle, pas la
vérité. Vérifiez les classifications importantes par rapport au tweet
original, que chaque ligne conserve.

### Quelles langues fonctionnent ?

L'extraction prend en charge toutes les langues servies par X. Nous
validons l'analyse d'abord sur des scénarios clients en anglais. Les autres
langues prises en charge renvoient des réponses avec la même structure.

### Comment limiter le coût ?

Les filtres, la déduplication et `maxItems` s'exécutent avant l'analyse,
donc l'Actor n'analyse & ne facture que les tweets uniques et conformes aux
filtres. Utilisez des opérateurs de recherche précis, des bornes de date
et des planchers d'engagement, et commencez avec un `maxItems` réduit pour
vérifier la qualité des réponses avant un grand run.

### Où obtenir de l'aide ?

Ouvrez un problème sur la page de l'Actor ou contactez support@xquik.com
avec l'ID du run. Les diagnostics gratuits dans le key-value store
expliquent les runs vides, partiels ou interrompus.

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
  des profils ainsi que leurs posts, réponses, médias et abonnés à partir de
  handles, d'ID ou d'URL. Utilisez-le quand vous partez de comptes plutôt
  que de recherches. À partir de $0.00015 par ligne.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper) : scrape des
  réponses, des commentaires et des conversations entières sous les posts
  avec plus de 25 filtres. Utilisez-le quand vous avez besoin de la
  discussion sous les tweets. À partir de $0.00015 par ligne.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper) :
  scrape les réponses, citations, personnes ayant reposté et threads pour
  des URL ou ID de post en masse. Utilisez-le pour mesurer qui s'est engagé avec des posts. À partir de $0.00015 par ligne.
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
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier) :
  répond à vos propres questions de catégorie, de score et de oui/non pour
  chaque tweet par IA. Utilisez-le quand les analyses prédéfinies ne
  correspondent pas à vos étiquettes. À partir de $0.0003 par tweet
  analysé.
