[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · **Français** · [Italiano](README.it.md)

[![Framer connecte Xquik MCP aux agents de codage](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Découvrez comment Framer utilise les scrapers Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
avec Claude Code, Codex, Cursor & d'autres outils, à partir de 6:07.

Xquik est le service de scraping X (Twitter) le plus rapide et le moins cher au
monde. Ses données X sont les plus complètes. X Tweet Viral Score Analyzer de
Xquik note chaque post. Il ajoute une estimation de Viral Score & un verdict. La
plupart des autres Actors Apify facturent avant de filtrer ou de dédupliquer.
Xquik facture seulement les résultats livrés, uniques et conformes à vos
filtres. Les coûts d'IA sont inclus dans le prix par post. Vous n'avez besoin
d'aucun compte d'IA, jeton ou clé.

Comprenez pourquoi des posts percent ou font un flop & gardez les données
d'origine de chaque post. **X Tweet Viral Score Analyzer with AI** de Xquik
collecte les posts correspondants. L'IA évalue 8 traits de chaque post. L'Actor
transforme ces réponses en une estimation de Viral Score & un verdict. Chaque
ligne garde les vrais J'aime, reposts, réponses & citations. Comparez chaque
estimation avec ce qui s'est passé.

Le Viral Score estime l'efficacité de la formulation. Il ne prédit ni les J'aime
ni les vues. Il ne reproduit pas la façon dont X classe les posts.

> Xquik est un service tiers indépendant. Non affilié à X Corp. "Twitter" et "X"
> sont des marques déposées de X Corp.

## Pourquoi utiliser X Tweet Viral Score Analyzer with AI ?

- **Sachez quels posts publier.** Chaque post reçoit un verdict `send_it`,
  `edit_first` ou `sleep_on_it`.
- **Testez vos brouillons avant de publier.** Collez du texte dans `texts` pour
  obtenir le même score & le même verdict. Le run ne récupère rien sur X.
- **La prévision face à la réalité.** Le résumé liste les posts dont
  l'engagement réel a dépassé leur score ou est resté en dessous.
- **Voyez ce qui marche pour chaque compte.** Chaque nom d'utilisateur reçoit
  son meilleur & son pire post. Le rapport découpe son score moyen par heure de
  publication, longueur, médias & liens.
- **Classez les comptes côte à côte.** Un classement range les noms
  d'utilisateur par Viral Score moyen & par taux d'engagement réel.
- **Voyez ce qui a changé.** Ajoutez l'ID du dataset d'un run précédent à
  `monitor.baselineDatasetId`. Chaque ligne montre alors quels traits ont
  changé.
- **Des scores prêts pour les tableurs.** La vue `Viral Score` & les exports
  mettent le score, le verdict & les réponses en colonnes.
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
- `viralAlgorithmScore` transforme les compteurs publics d'un post en 1 nombre
  comparable.

### Contrôles qualité

- Chaque champ que X affiche est fourni, omis exprès ou prouvé absent.
- Xquik teste chaque lecture en direct sur X.

## Quelles données X Tweet Viral Score Analyzer with AI renvoie-t-il ?

- **Un Viral Score par post.** Des règles fixes & versionnées calculent chaque
  score de 0 à 100.
- **8 réponses sur des traits.** Elles montrent pourquoi un post a un score
  élevé ou faible.
- **Des plafonds stricts.** Ils limitent les posts qui ressemblent à du spam, à
  du ragebait ou à un texte générique écrit par une machine.
- **Données source complètes.** Chaque ligne garde chaque champ que le post
  expose.

## Comment vérifier le Viral Score d'un tweet

Vous débutez sur Apify ?
[Créez d'abord un compte gratuit](https://console.apify.com/sign-up?fpr=xquik).
Le plan gratuit ne demande aucune carte bancaire & donne $5 à dépenser chaque
mois. À $0.0003 par post analysé, $5 couvrent jusqu'à 16 000 posts analysés,
hors usage de la plateforme. Revenez ensuite ici & cliquez sur Try for free.

1. Ajoutez des termes de recherche, des noms d'utilisateur, des URL de posts ou
   des ID de post.
2. Réglez `maxItems` & les filtres d'extraction utiles à votre tâche.
3. Décrivez votre audience dans `analysis.context`, ou gardez la valeur par
   défaut.
4. Lancez le run & ouvrez la vue de dataset `Viral Score`.

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

La réponse sur l'écriture par IA juge seulement le style. Elle n'établit pas qui
a écrit le post.

### Comment fonctionne le Viral Score

L'accroche, la clarté, l'apport & la réaction attendue font monter le score. Une
formulation qui ressemble à un texte générique écrit par une machine le fait
baisser.

Des plafonds stricts limitent le score du spam probable, du ragebait & des
textes génériques écrits par une machine. Le score est un nombre entier de 0
à 100.

| Verdict       | Score    |
| ------------- | -------- |
| `send_it`     | 70 à 100 |
| `edit_first`  | 40 à 69  |
| `sleep_on_it` | 0 à 39   |

`viral.weights` nomme la version de ces règles, par exemple `viral_lite:1`. Elle
change à chaque changement des règles. Le score vaut `null` après une analyse
échouée ou ignorée. Il vaut aussi `null` quand la réponse à un trait par défaut
manque. X Tweet Viral Score Analyzer de Xquik ne remplace jamais un score
manquant par une supposition.

## Estimation du score de l'algorithme

X a publié ses poids de classement dans le dépôt `xai-org/x-algorithm`, fichier
`home-mixer/params/param.rs`. X Tweet Viral Score Analyzer de Xquik en applique
4 aux compteurs publics de chaque post.

| Compteur | Poids |
| -------- | ----- |
| J'aime   | 0,66  |
| Réponse  | 5     |
| Repost   | 1     |
| Citation | 5     |

`viral.algorithmWeightedSum` est la somme de chaque compteur multiplié par son
poids. `viral.algorithmScore` divise cette somme par les vues & la multiplie par
1 000. Un post sans compteur de vues utilise les abonnés à la place.
`viral.algorithmBasis` nomme le diviseur, `views` ou `followers`. Comparez
seulement des scores qui ont la même base. `viral.weightsVersion` nomme les
poids, par exemple `x_algorithm_params:2026-10-14`.

L'estimation a ces limites.

- X multiplie chaque poids par une probabilité qu'il prédit pour un lecteur.
  L'Actor multiplie par les compteurs observés. Le résultat est une estimation,
  pas le score que X calcule.
- X ne publie aucun poids pour les signets ni pour les vues. La somme les laisse
  de côté.
- X utilise d'autres signaux que ces 4, comme le temps de lecture & les
  partages. Les données publiques ne les montrent pas.
- Le score vaut `null` quand un post n'a aucune vue & aucun nombre d'abonnés.
- L'IA ne voit jamais ces compteurs. Elle lit seulement le texte & le contexte.

## Prévision face au résultat réel

X Tweet Viral Score Analyzer de Xquik compare chaque Viral Score avec ce qui
s'est passé. `viral.actualEngagementRate` vaut
`log10(1 + weighted sum per 1,000 followers)`. Le logarithme limite l'effet d'un
seul post très populaire. Le taux vaut `null` quand le nombre d'abonnés manque
ou vaut 0.

Le bloc `viral.calibration` du résumé du run donne ces champs.

- `comparedPosts` compte les posts qui ont un Viral Score & un taux réel.
- `rankCorrelation` est une corrélation de rang de Spearman, de -1 à 1. Elle
  montre si les scores plus élevés allaient avec des taux plus élevés.
- `calibrationScore` vaut 100 fois la corrélation, avec un plancher à 0.
- `overperformers` & `underperformers` listent jusqu'à 5 posts chacun. Chacun a
  son ID de post, son URL, son Viral Score, son taux réel & son `gap`.

`gap` est le taux réel standardisé moins le Viral Score standardisé. Un post
entre dans une liste quand son écart atteint 1 écart type.

La calibration a ces limites.

- Moins de 10 posts comparés donnent une calibration `null` avec la raison
  `too_few_posts`. Des scores ou des taux identiques donnent `no_variation`.
- La corrélation est approximative.
- La calibration décrit un seul run. Un score faible peut signifier que les
  posts diffèrent par le moment, le sujet ou l'audience. Il ne prouve pas que
  l'estimation de la formulation a échoué.
- Les posts récents n'ont pas fini de recevoir de l'engagement. Comparez des
  posts d'âge similaire.

## Rapport par compte

Le bloc `viral.accounts` du résumé du run décrit chaque nom d'utilisateur
d'auteur.

- Le nombre de posts, le Viral Score moyen & le taux d'engagement réel moyen.
- Le meilleur & le pire post selon le Viral Score, avec l'ID du post & l'URL.
- Le Viral Score moyen par groupe. Les groupes sont l'heure de publication en
  UTC, la tranche de longueur du texte, la présence de médias, la présence d'un
  lien & l'auto-réponse.

Les tranches de longueur sont `short`, `medium`, `long` & `extended`. `short`
s'arrête à 80 caractères, `medium` à 200 & `long` à 280. `extended` couvre les
textes plus longs. Un post en auto-réponse répond à son propre auteur.

Le rapport a ces limites.

- Le rapport liste les 50 noms d'utilisateur qui ont le plus de posts notés.
- Le rapport suit les 1 000 premiers noms d'utilisateur d'un run.
  `untrackedPosts` compte les posts notés des noms d'utilisateur suivants & les
  posts sans nom d'utilisateur.
- Un groupe de quelques posts dit peu de chose. Vérifiez `posts` avant de
  comparer des moyennes.
- Les groupes montrent ce qui allait ensemble dans ce run. Ils ne montrent pas
  de cause.

## Classement

Le bloc `viral.leaderboard` du résumé du run classe les noms d'utilisateur du
rapport par compte. `byViralScore` classe par Viral Score moyen.
`byActualEngagementRate` classe par taux réel moyen. Chaque liste contient
jusqu'à 20 noms d'utilisateur avec `rank`, `posts` & `average`.

Le classement a ces limites.

- Un nom d'utilisateur a besoin d'au moins 3 posts notés pour être classé.
- La liste des taux ignore les noms d'utilisateur sans nombre d'abonnés.
- En cas d'égalité, le nombre de posts départage, puis le nom d'utilisateur.
- Le classement couvre les posts d'un seul run, pas tout l'historique d'un
  compte.

## Noter un brouillon avant de publier

Collez votre propre texte dans `texts`. X Tweet Viral Score Analyzer de Xquik le
note & ne récupère rien sur X.

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
- Un brouillon n'a encore ni J'aime ni vues, donc `viral.algorithmScore` reste
  `null`.
- Chaque texte analysé coûte les mêmes $0.0003 qu'un post analysé.
- Quand `texts` est renseigné, le run analyse seulement ces textes. Lancez les
  cibles X dans un run séparé.

## Combien coûte la vérification des Viral Scores ?

X Tweet Viral Score Analyzer de Xquik coûte à partir de $0.0003 par post
analysé. Il ne facture pas de frais de démarrage. Le prix inclut la collecte,
les coûts d'IA & le Viral Score. Vous n'avez besoin d'aucun compte d'IA, jeton
ou clé. Le prix couvre jusqu'à 8 questions & 64 000 octets de contexte par post.
Chaque définition de question peut utiliser jusqu'à 8 000 octets.

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
  "tweet": { "id": "2100493544842494265", "text": "...", "likeCount": 12 },
  "viral": {
    "score": 74,
    "verdict": "send_it",
    "weights": "viral_lite:1",
    "stops": [],
    "algorithmScore": 9.46,
    "algorithmBasis": "views",
    "algorithmWeightedSum": 18.92,
    "actualEngagementRate": 0.7582,
    "weightsVersion": "x_algorithm_params:2026-10-14"
  },
  "viralScore": 74,
  "viralVerdict": "send_it",
  "viralAlgorithmScore": 9.46,
  "viralActualEngagementRate": 0.7582,
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

Chaque résultat contient `tweet`, `analysis` & `viral`. Les réponses incluent
les types, les versions de question & les probabilités disponibles.
`viral.stops` liste les plafonds stricts qui ont limité le score. Une ligne dont
l'analyse a échoué ou a été ignorée garde le post collecté & une `reason`. Sa
liste de réponses est vide & son score vaut `null`.

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
`Average Viral Score is 64.` Une comparaison sans changement indique
`No change since the earlier run.` Un run qui rencontre un problème ou qui est
volumineux écrit aussi `run-report`. Un run avec `alwaysSaveRunRecords` activé
le fait aussi. `run-report` reprend le résumé sous `results.analysisSummary`.

Le résumé compte les lignes analysées, échouées & ignorées. Il additionne
l'engagement & résume chaque question.

- Le bloc `viral` donne `averageScore` & le nombre de chaque verdict. Il compte
  aussi les lignes notées & non notées.
- Le même bloc contient `calibration`, `accounts` & `leaderboard`, décrits plus
  haut.
- Les questions de score donnent une moyenne & une moyenne pondérée par
  l'engagement.
- La répartition `reaction` montre combien de posts tombent dans chaque
  réaction.
- `top` liste les 3 posts qui ont le plus d'engagement pour chaque réaction.
- Chaque ligne liste `sourceDomains`, les noms d'hôte vers lesquels elle pointe.
- Chaque ligne liste les `cashtags` trouvés dans son texte, comme `$NVDA`.
- Avec `monitor.baselineDatasetId` renseigné, le bloc `monitor` du résumé compte
  les statuts de comparaison. Il liste jusqu'à 50 lignes modifiées.

Un run vide indique des compteurs à 0 & une moyenne `null`.

Chaque ligne de résultat porte aussi `viralScore`, `viralVerdict`,
`viralAlgorithmScore` & `viralActualEngagementRate`. Elle porte aussi `answers`,
une table plate indexée par ID de question. Chaque valeur est la réponse
choisie, soit une catégorie, un score ou une probabilité. La vue de dataset
`Viral Score` & les exports CSV ou Excel affichent ces colonnes. Elles sont à
côté du post, donc vos tableurs n'ont aucun JSON à analyser. Les lignes échouées
& ignorées portent une table vide.

## Comparer avec un run antérieur

Passez `monitor.baselineDatasetId`, l'ID du dataset d'un run antérieur terminé
avec les mêmes réglages d'analyse. La comparaison lit les lignes de ce run. Elle
fonctionne même si ce run n'a pas écrit son résumé. Chaque ligne gagne alors un
objet `monitor`. Son statut prend ces valeurs.

- `first_run` sans référence.
- `new_to_baseline` pour les posts absents du run antérieur.
- `unchanged` ou `changed` pour les posts qu'il contenait.

`changes` liste chaque décision de trait passée de `previous` à `current`. Les
décisions se comparent par catégorie, par niveau de score arrondi ou par oui/non
au seuil de 0,5. Une décision compte comme changée seulement si elle bouge
nettement. Les quasi-égalités entre runs restent `unchanged`.

Une référence au-delà de `maxBaselineRows`, ou issue d'autres réglages, arrête
le run avant la collecte. Le run écrit alors une ligne de diagnostic.
`maxBaselineRows` vaut 100 000 par défaut.

## Exemples de tâches

Choisissez parmi 50 tâches publiques. Chacune part d'une vraie recherche en
anglais & d'un `maxItems` limité. Elle utilise la vue de dataset `Viral Score`.
Certaines ajoutent un contexte d'audience. Modifiez la recherche ou le contexte
avant de lancer le run.

- [Viral Score des posts de lancement de startups d'IA](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-ai-startup-launch-tweets)
- [Viral Score des posts build in public de fondateurs SaaS](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-saas-founder-build-in-public-posts)
- [Viral Score des posts de lancement sur Product Hunt](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-product-hunt-launch-posts)
- [Viral Score des annonces d'outils pour développeurs](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-developer-tool-announcements)
- [Viral Score des posts de sortie open source](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-open-source-release-posts)
- [Viral Score des annonces de projets crypto](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-crypto-project-announcements)
- [Viral Score des posts d'humour sur la parentalité](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-parenting-humor-posts)
- [Viral Score des posts d'humour de bureau](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-office-humor-posts)
- [Viral Score des légendes de photos d'animaux](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-pet-photo-captions)
- [Audit du Viral Score des posts de la NASA](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-nasa-posts)
- [Audit du Viral Score des posts de Duolingo](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-duolingo-posts)
- [Audit du Viral Score des posts de Wendy's](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-wendys-posts)

Les autres tâches, sur la page de l'Actor, couvrent d'autres sujets & comptes de
marque.

## FAQ & support

Les réponses aux questions fréquentes, puis où trouver de l'aide.

### Ai-je besoin d'un compte d'IA, d'une clé API X ou d'une connexion ?

Non. X Tweet Viral Score Analyzer de Xquik inclut les coûts d'IA dans son prix.
Vous n'avez besoin d'aucun compte d'IA, jeton ou clé. Vous n'avez pas non plus
besoin de clé API X, de connexion ou d'identifiants.

### Un score élevé signifie-t-il qu'un post deviendra viral ?

Non. Le score estime l'efficacité de la formulation pour un lecteur général. Le
moment, la taille de l'audience, les médias & la chance décident aussi de la
portée. Comparez les scores avec les vrais compteurs d'engagement de chaque
ligne avant de vous y fier.

### Puis-je utiliser mes propres questions ?

Oui. Des `analysis.questions` personnalisées remplacent les questions par
défaut. Envoyez 1 à 8 questions de type `choice`, `score` ou `probability`. Les
questions à choix acceptent 2 à 255 catégories. Les questions de score demandent
au moins 2 niveaux ordonnés. Le Viral Score a besoin des 8 questions par défaut,
donc des questions personnalisées le laissent à `null`.

### Pourquoi une ligne revient-elle avec une analyse échouée ou ignorée ?

`analysis.status` vaut `failed` ou `skipped`. L'Actor a collecté & livré le
post, mais l'analyse par IA n'a pas abouti. `analysis.reason` nomme la cause.
`context_limit` signifie que votre contexte & vos cibles ne laissent pas de
place au post. `service_unavailable` signifie que le service d'analyse était
brièvement indisponible. Ces lignes ne sont pas facturées comme résultats &
n'ont pas de score. Raccourcissez `analysis.context` ou relancez les ID
concernés.

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
prises en charge renvoient des réponses de même structure.

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
l'[onglet API](https://apify.com/xquik/x-tweet-viral-score-analyzer/api) pour
des exemples en Python, JavaScript & cURL. Utilisez les
[planifications](https://docs.apify.com/platform/schedules) Apify pour des runs
récurrents. Passez l'ID du dataset précédent dans `monitor.baselineDatasetId`
pour voir ce qui a changé. Les intégrations Apify relient aussi les runs aux
webhooks, à Make, Zapier, n8n & Google Sheets.

### Où trouver de l'aide ?

Ouvrez une issue dans
l'[onglet Issues](https://apify.com/xquik/x-tweet-viral-score-analyzer/issues)
avec l'ID du run. Les diagnostics gratuits du key-value store expliquent les
runs qui demandent votre attention. Un run qui ne récupère aucune ligne en
indique la raison dans son statut.

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
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)
  répond par IA à vos propres questions de catégorie, de score & de oui/non pour
  chaque post. Utilisez-le quand les analyses prédéfinies ne correspondent pas à
  vos étiquettes. À partir de $0.0003 par post analysé.
- [X (Twitter) Monitor](https://apify.com/xquik/x-twitter-monitor) capte chaque
  nouveau tweet, réponse, citation, repost & changement de profil des comptes,
  généralement en moins d'une seconde après son affichage sur X, ainsi que les
  tweets par mot-clé & les follows. Utilisez-le quand vous voulez une alerte dès
  que X affiche un tweet. À partir de $0.0045 par monitor-hour.
