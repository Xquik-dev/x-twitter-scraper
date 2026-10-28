[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · **Français** · [Italiano](README.it.md)

[![Framer connecte Xquik MCP aux agents de codage](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Découvrez comment Framer utilise les scrapers Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
avec Claude Code, Codex, Cursor & d'autres outils, à partir de 6:07.

Xquik est le service de scraping X (Twitter) le plus rapide et le moins cher au
monde. Ses données X sont les plus complètes. X Engagement Scraper de Xquik
collecte les réponses, les citations, les comptes qui ont reposté & les
discussions de n'importe quel post. La plupart des autres Actors Apify facturent
avant de filtrer ou de dédupliquer. Xquik facture seulement les résultats
livrés, uniques et conformes à vos filtres.

Collectez les réponses, les citations, les comptes qui ont reposté & le contexte
de discussion de 1 ou plusieurs posts X. Vous payez **$0.00015 par ligne
livrée**, & Apify facture l'usage de la plateforme à part. Vous n'avez besoin ni
de clé API X ni de connexion.

> Xquik est un service tiers indépendant. Non affilié à X Corp. "Twitter" et "X"
> sont des marques déposées de X Corp.

## Pourquoi utiliser X Engagement Scraper ?

- **Seulement les réponses utiles.** Choisissez les réponses directes ou
  imbriquées, une profondeur de réponse & une période.
- **Des prospects parmi ceux qui repostent.** Filtrez-les par `minFollowers`,
  `hasEmail` ou `bioContains`. Les lignes portent les e-mails, téléphones &
  liens que publie chaque profil.
- **Tous les types d'engagement en 1 run.** Collez des URL de posts ou des ID de
  post. Mélangez réponses, citations, retweeters & contexte du fil.
- **Fixez vos limites de lignes.** Plafonnez le run avec `maxItems` & chaque
  type d'engagement d'un post avec `maxItemsPerTarget`.
- **Taux d'engagement intégrés.** Indiquez `engagementRate` ou
  `engagementPerView` dans `fields` pour ajouter la colonne.

### Résultats complets

- Chaque résultat contient les données les plus complètes dont X dispose.

### Lignes exactes

- Les reposts portent le texte d'origine en entier.
- Chaque ID d'une ligne reste exact.
- Les mentions, liens, hashtags & passages mis en avant pointent vers le bon
  endroit du texte.
- Un compteur inconnu apparaît dans `unknownCounts` & jamais comme 0.
- Les badges de certification correspondent à ce qu'affiche `x.com`.
- Les lignes ne contiennent que des données publiques.
- Les recherches de citations renvoient chaque vraie citation & rien d'autre.
- Les publicités & les contenus sponsorisés n'arrivent jamais dans vos lignes.

### Données à jour

- Les lectures continuent de fonctionner quand X déploie des changements.

### Vitesse

- Une page lente ne bloque pas votre run.
- Les lectures se terminent dès que leurs lignes arrivent.
- Les appels d'Actor bloqués repartent d'eux-mêmes.

### Facturation juste

- Une entrée invalide ne coûte rien & vous dit quoi corriger.
- Les Actors facturent seulement les lignes livrées, uniques & conformes à vos
  filtres.
- Un profil commun à plusieurs cibles se facture une seule fois.
- Un run redémarré ne facture jamais deux fois.
- Les runs restent dans votre limite de dépense & écrivent quand même leurs
  diagnostics.
- Les petits runs se terminent par un conseil qui réduit le coût.

### Fiabilité

- Une erreur ponctuelle ne fait pas échouer votre run.
- Un délai dépassé renvoie les lignes déjà trouvées, avec des diagnostics.
- Les Actors résistent aux courtes pannes de Xquik.
- Les runs d'Actor survivent aux redémarrages sans doublons.
- Une mauvaise ligne ne fait pas échouer tout un lot.
- Les runs arrêtés gardent leurs lignes & leur rapport.
- Un run qui ne peut pas démarrer explique quand même pourquoi.
- Le support peut voir exactement ce qu'une requête ou un run a renvoyé.

### Conçu pour les agents

- Les Actors acceptent une entrée écrite pour d'autres Actors.
- La sortie est prête pour les tableurs, avec des colonnes plates & des totaux
  d'engagement.
- Chaque run indique pourquoi il s'est terminé & s'il faut réessayer.

### Données riches

- Les lignes de post portent le texte des Note Tweets, les modifications, les
  Notes de la Communauté, les libellés de portée & les contrôles de réponse.
- Les lignes portent les apps sources, le nombre de médias & les données de
  compte professionnel.
- Les médias arrivent avec leurs variantes, leur texte alternatif, leurs tailles
  & les motifs de disponibilité.
- Vous voyez quand chaque compte a reposté un post.
- Vous voyez si chaque compte a répondu à un post, l'a reposté ou cité. Vous
  voyez aussi s'il suit l'auteur ou fait partie d'une Communauté.

### Contrôles qualité

- Chaque champ que X affiche est fourni, omis exprès ou prouvé absent.
- Xquik teste chaque lecture en direct sur X.

## Quelles données X Engagement Scraper peut-il extraire ?

- Les réponses directes, sur les pages de résultats disponibles.
- Les réponses directes & imbriquées, en 4 ordres de tri.
- Les détails du post source, en ligne optionnelle.
- Les citations avec texte, auteurs, médias & métriques.
- Les profils des comptes qui ont reposté.
- Le contexte de conversation autour de chaque post source.
- L'attribution de chaque ligne à son post source & à son type d'engagement.

## Comment scraper l'engagement de posts X

Vous débutez sur Apify ?
[Créez d'abord un compte gratuit](https://console.apify.com/sign-up?fpr=xquik).
Le plan gratuit ne demande aucune carte bancaire & donne $5 à dépenser chaque
mois. À $0.00015 par ligne, $5 couvrent jusqu'à 33 000 lignes, hors usage de la
plateforme. Revenez ensuite ici & cliquez sur Try for free.

1. Ouvrez X Engagement Scraper de Xquik dans Apify Console.
2. Collez des URL de posts dans `startUrls` ou des ID de post numériques dans
   `tweetIds`.
3. Choisissez `engagementTypes` & ajoutez des filtres comme `minLikes` ou
   `language`.
4. Réglez `maxItems` pour plafonner les lignes livrées, puis cliquez sur Start.
5. Téléchargez le dataset en JSON, CSV ou Excel, ou utilisez l'API Apify.

`startUrls` accepte chaque URL comme simple chaîne ou comme objet
`{ "url": "..." }`.

```json
{
  "startUrls": [
    "https://x.com/OpenAI/status/2082577277246972300",
    { "url": "https://x.com/jack/status/20" }
  ]
}
```

## Entrée

```json
{
  "tweetIds": ["2082577277246972300"],
  "engagementTypes": ["replies", "quotes", "retweeters"],
  "maxItems": 10000
}
```

En 2024, X a cessé de montrer qui a aimé un post. Le type `favoriters` ne
renvoie aucune ligne. Un run sans ligne donne cette raison dans son diagnostic.

Par défaut, chaque compte ou post apparaît 1 fois par type d'engagement, avec 1
facturation. Réglez `dedupeAcrossTargets` sur `false` pour garder une ligne par
post source. Le statut du run compte les doublons ignorés, sans frais.

Les petits runs sans problème n'écrivent pas `run-report` & réduisent l'usage
Apify. Activez `alwaysSaveRunRecords` pour l'écrire à chaque run.

### Migrer depuis un autre Actor d'engagement

L'Actor lit ces noms de champs d'autres Actors d'engagement.

- `urls` correspond à `startUrls`.
- `category` correspond à `engagementTypes`. `replies`, `retweets`, `info` &
  `checkRetweet` se lisent comme `replies`, `retweeters`, `tweet` &
  `repostCheck`.
- `resultsPerCategory` correspond à `maxItemsPerTarget`.
- `retweetCheckUsername` correspond à `repostCheckUsers`.

Une `category` qui relève d'un autre Actor, comme `followers` ou `tweets`,
arrête le run. Il ne lit & ne facture rien. Le message nomme l'Actor à utiliser.
Si vous réglez l'un de ces noms & son champ canonique, la valeur canonique
l'emporte. Le log du run nomme le champ écarté.

## Sortie

Dans chaque ligne, `resultType` vaut `tweet`, `replies`, `completeReplies`,
`quotes`, `retweeters`, `favoriters`, `thread` ou `repostCheck`. `sourceTarget`
contient l'ID du post source. Les champs de post & de profil suivent la
structure stable des réponses de l'API REST de Xquik.

`completeReplies` garde chaque ligne renvoyée. Le rapport du run compte la
couverture partielle dans `incompleteTargets`. Les filtres passent avant la
facturation.

Les comptes qui ont reposté ou aimé acceptent tous les filtres de profil, comme
`minFollowers`, `hasEmail` & `bioContains`. Leurs lignes portent `email` &
`contactInfo`, les e-mails, téléphones & liens que chaque profil publie.

Les exemples utilisent des valeurs fictives. Les résultats reflètent les données
en direct. Une ligne de réponse ressemble à ceci.

```json
{
  "resultType": "replies",
  "sourceTarget": "2082577277246972300",
  "inReplyToId": "2082577277246972300",
  "username": "sample_user",
  "text": "Sample reply text",
  "likeCount": 12
}
```

## Colonnes de sortie

8 champs d'entrée façonnent chaque ligne une fois que le run l'a lue. Ils
n'exécutent aucun code & ne changent pas le prix.

| Champ               | Rôle                                                                            |
| ------------------- | ------------------------------------------------------------------------------- |
| `fields`            | Garde seulement ces champs, dans l'ordre & avec l'orthographe que vous écrivez  |
| `omitFields`        | Retire ces champs & garde le reste                                              |
| `renameFields`      | Déplace un champ dans une colonne qui porte un nouveau nom                      |
| `flatten`           | Transforme chaque objet imbriqué en colonnes de premier niveau                  |
| `fillMissingFields` | Remplit avec `null` un champ gardé qui manque dans une ligne. Activé par défaut |
| `joinFields`        | Transforme chacune de ces listes en 1 valeur texte                              |
| `joinSeparator`     | Texte entre les éléments joints. Par défaut, une virgule & un espace            |
| `constantFields`    | Ajoute une colonne avec le même texte sur chaque ligne                          |

- Utilisez un point pour un champ placé dans un objet. La casse & les tirets bas
  ne comptent pas.
- Chaque ligne garde son `id`.
- Avec `fields`, un champ absent d'une ligne arrive avec la valeur `null`.
  Chaque ligne a alors les mêmes colonnes.
- Un nom de champ erroné arrête le run avant toute lecture & ne facture rien.
- Si le run ne peut pas vérifier les noms, il continue de lire & liste à la fin
  les noms qu'il n'a pas vus.
- Le run ignore une fonction map ou un filtre jq écrit pour un autre Actor.

Nommez une colonne calculée dans `fields` ou `renameFields` pour l'ajouter.

| Colonne             | Formule                                                                                 |
| ------------------- | --------------------------------------------------------------------------------------- |
| `totalEngagement`   | `likeCount` + `replyCount` + `retweetCount` + `quoteCount`. Un compteur absent ajoute 0 |
| `engagementRate`    | `totalEngagement` × 100 ÷ les `followers` de l'auteur, à 4 décimales                    |
| `engagementPerView` | `totalEngagement` × 100 ÷ `viewCount`, à 4 décimales                                    |

`totalEngagement` vaut `null` pour une ligne sans ces compteurs. Un taux vaut
`null` quand son diviseur manque ou vaut 0.

## Vérification de repost

Ajoutez `repostCheck` à `engagementTypes` & listez des comptes dans
`repostCheckUsers` pour savoir si chaque compte a reposté chaque post.

```json
{
  "tweetIds": ["2098439298617856319"],
  "engagementTypes": ["repostCheck"],
  "repostCheckUsers": ["discord", "nasa"]
}
```

Chaque vérification donne 1 ligne avec `isRetweeted`, `retweetedAt`,
`retweetId`, `checkedPosts` & `complete`. Son `id` est
`repostCheck:<post ID>:<account>`. La vérification lit les posts les plus
récents de chaque compte. Un repost plus ancien que ces posts apparaît comme
`false` avec `complete: false`.

Un run qui contient seulement des lignes `repostCheck` & `tweet` garde l'ordre
de votre entrée. Chaque post est suivi de ses comptes, dans l'ordre où vous les
avez listés.

## Horodatage des reposts

Réglez `includeRetweetTimestamp` sur `true` pour les résultats `retweeters`. La
colonne `retweetedAt` contient l'heure observée du repost, en UTC.

X Engagement Scraper de Xquik trouve l'heure du repost quand X montre encore ce
repost. Pour un repost ancien, supprimé ou indisponible, l'horodatage reste
`null`. Le profil reste dans la sortie. Une valeur `null` ne prouve pas qu'un
compte n'a jamais reposté un post.

Cette option ralentit les runs. Laissez-la désactivée si vous voulez seulement
les profils. Le `createdAt` du profil reste la date de création du compte. Les
lignes de post portent `retweetedAt` quand elles contiennent un repost. Les
dates des posts d'origine & les heures de scraping ne remplacent jamais les
heures de repost. Les prix des résultats & la facturation par ligne livrée
restent les mêmes.

## Combien coûte le scraping de l'engagement de posts X ?

Sur chaque plan Apify, le prix est de $0.00015 par ligne livrée. Apify facture
votre usage de la plateforme à part.

Pour plus de volume,
[choisissez un plan Apify](https://apify.com/pricing?fpr=xquik) avec plus
d'usage prépayé.

- Une facturation par ligne de données livrée. Les diagnostics sont gratuits
  dans `diagnostics`.
- Pas de frais de démarrage, de post, de type d'engagement ou de page.
- La déduplication passe avant la facturation.

## Limites & reprise

X Engagement Scraper de Xquik lit de nombreux posts & types d'engagement en 1
run. Les lignes livrées & la progression survivent à un redémarrage d'Apify.
L'Actor n'ajoute aucune limite de temps propre.

Une extraction interrompue écrit un diagnostic `partial` gratuit. Les résultats
disponibles restent intacts. Lisez `availableResults`, `failedTargets`,
`retryable` & `nextAction` avant de relancer. Une sortie réussie de l'Actor
confirme la livraison, pas une extraction complète.

Le statut du run nomme chaque cause d'arrêt anticipé. `stopCauses` liste chaque
cause avec ses propres `message`, `retryable` & `nextAction`. Les causes sont
`target_not_found`, `target_failed`, `pagination_safety_limit`, `reply_reach` &
`deadline_reached`. `reply_reach` signifie que X n'a renvoyé qu'une partie d'une
discussion de réponses. Une cible introuvable n'entre dans la liste que si une
autre cause a arrêté le run. Le run est `retryable` dès qu'une cause l'est.

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
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)
  estime un Viral Score de 0 à 100 & un verdict pour chaque post, à partir des
  réponses de l'IA sur 8 traits. Utilisez-le quand vous étudiez pourquoi des
  posts se propagent ou font un flop. À partir de $0.0003 par post analysé.
- [X (Twitter) Monitor](https://apify.com/xquik/x-twitter-monitor) capte chaque
  nouveau tweet, réponse, citation, repost & changement de profil des comptes,
  généralement en moins d'une seconde après son affichage sur X, ainsi que les
  tweets par mot-clé & les follows. Utilisez-le quand vous voulez une alerte dès
  que X affiche un tweet. À partir de $0.0045 par monitor-hour.

## FAQ

Les réponses aux questions fréquentes, puis où trouver de l'aide.

### Ai-je besoin d'une clé API X ou d'une connexion ?

Non. X Engagement Scraper de Xquik n'a besoin d'aucune clé API X, d'aucune
connexion ni d'aucun identifiant.

### Est-il légal de scraper des données d'engagement X ?

X Engagement Scraper de Xquik demande à X des champs publics. Les résultats
peuvent contenir des données personnelles. Assurez-vous d'avoir une finalité
licite & respectez les règles de protection des données applicables. En cas de
doute, demandez conseil à un juriste qualifié.

### Pourquoi mon run n'a-t-il renvoyé aucun résultat ?

Lisez d'abord le statut du run. Le statut d'un run vide vous invite à vérifier
vos cibles & vos filtres. La sortie gratuite `diagnostics` apparaît quand
quelque chose demande votre attention. Son `stopCauses` donne à chaque cause une
`nextAction` à suivre. Le run liste chaque entrée qu'il ne peut pas lire &
indique comment la corriger. En 2024, X a cessé de montrer qui a aimé un post,
donc `favoriters` ne renvoie aucune ligne.

### Puis-je utiliser l'API, les planifications & les intégrations ?

Oui. Choisissez parmi 50 tâches publiques ou utilisez l'API REST de Xquik.
L'[onglet API](https://apify.com/xquik/x-engagement-scraper/api) contient des
exemples en Python, JavaScript & cURL. Les
[planifications](https://docs.apify.com/platform/schedules) Apify lancent X
Engagement Scraper de Xquik selon un cron. Les agents utilisent
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Utilisez `latest`
sauf si vous avez besoin d'une build plus ancienne.

### Où trouver de l'aide ?

Ouvrez une issue dans
l'[onglet Issues](https://apify.com/xquik/x-engagement-scraper/issues) avec l'ID
du run. Les diagnostics gratuits du key-value store expliquent les runs qui
demandent votre attention. Un run qui ne récupère aucune ligne en indique la
raison dans son statut.

### Puis-je obtenir une solution sur mesure ?

Oui. Décrivez votre besoin dans
l'[onglet Issues](https://apify.com/xquik/x-engagement-scraper/issues). Xquik
propose aussi un tableau de bord, une API REST, un serveur MCP & des webhooks.
Trouvez le site web de Xquik sur son [profil Apify](https://apify.com/xquik).
