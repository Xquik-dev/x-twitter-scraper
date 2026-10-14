[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · **Français** · [Italiano](README.it.md)

[![Framer connecte Xquik MCP aux agents de codage](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Découvrez comment Framer utilise les scrapers Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
avec Claude Code, Codex, Cursor & d'autres outils, à partir de 6:07.

Xquik est le service de scraping X (Twitter) le plus rapide et le moins cher au
monde. Ses données X sont les plus complètes. X List Scraper de Xquik collecte
les détails, les posts, les membres & les abonnés d'une Liste, & trouve des
Listes par mot-clé. La plupart des autres Actors Apify facturent avant de
filtrer ou de dédupliquer. Xquik facture seulement les résultats livrés, uniques
et conformes à vos filtres.

Scrapez les détails, les posts, les membres & les abonnés de Listes X à partir
d'URL ou d'ID de Liste numériques, ou trouvez des Listes publiques avec des
termes de recherche. Vous payez **$0.00015 par ligne livrée**, & Apify facture
l'usage de la plateforme à part. Vous n'avez besoin ni de clé API X ni de
connexion.

> Xquik est un service tiers indépendant. Non affilié à X Corp. "Twitter" et "X"
> sont des marques déposées de X Corp.

## Données de Liste & filtres

- Les détails de la Liste, avec nom, description, nombres de membres &
  d'abonnés, date de création, bannière & profil public du propriétaire.
- Les posts de la Liste avec texte, auteur, métriques, médias & horodatages.
- Les membres de la Liste & les abonnés de la Liste.
- La recherche de Listes par mot-clé. Chaque ligne est 1 Liste avec son
  propriétaire, son nombre de membres & son nombre d'abonnés.
- Les réponses dans les posts de la Liste, en option.
- Des filtres de date, d'horodatage Unix, de langue, de médias, d'engagement, de
  certification & de profil.
- Des filtres de profil pour les membres & les abonnés, comme `minFollowers`,
  `hasEmail` & `bioContains`.
- Les Listes publiques qu'un compte a créées ou dont il est membre, à partir de
  son nom d'utilisateur ou de l'URL de son profil.
- Plusieurs Listes & types de ressources en 1 run.
- Un plafond global & un plafond par ressource de Liste ou par terme de
  recherche.
- Les runs reprennent après une migration Apify.
- La suppression des doublons avant la facturation.

## Comment scraper des Listes X

Vous débutez sur Apify ?
[Créez d'abord un compte gratuit](https://console.apify.com/sign-up?fpr=xquik).
Le plan gratuit ne demande aucune carte bancaire & donne $5 à dépenser chaque
mois. À $0.00015 par ligne, $5 couvrent jusqu'à 33 000 lignes, hors usage de la
plateforme. Revenez ensuite ici & cliquez sur Try for free.

1. Ouvrez X List Scraper de Xquik dans Apify Console.
2. Collez des URL de Liste dans `startUrls` ou des ID de Liste numériques dans
   `listIds`. Pour trouver des Listes, ajoutez plutôt des mots-clés dans
   `searchTerms`.
3. Choisissez `resources` & ajoutez des filtres comme `sinceDate` ou `minLikes`.
4. Réglez `maxItems` pour plafonner les lignes livrées, puis cliquez sur Start.
5. Téléchargez le dataset en JSON, CSV ou Excel, ou utilisez l'API Apify.

`startUrls` accepte chaque URL comme simple chaîne ou comme objet
`{ "url": "..." }`.

```json
{
  "startUrls": [
    "https://x.com/i/lists/1748648376080666720",
    { "url": "https://x.com/nasa" }
  ]
}
```

## Entrée

```json
{
  "listIds": ["1748648376080666720"],
  "resources": ["info", "tweets", "members", "followers"],
  "includeReplies": false,
  "maxItems": 10000
}
```

Pour trouver des Listes par mot-clé, envoyez des termes de recherche.

```json
{ "searchTerms": ["space news", "climate science"], "maxItemsPerTarget": 50 }
```

Les petits runs sans problème n'écrivent pas `run-report` & réduisent l'usage
Apify. Activez `alwaysSaveRunRecords` pour l'écrire à chaque run.

## Sortie

Dans chaque ligne, `resultType` vaut `list`, `listTweet`, `listMember` ou
`listFollower`. `sourceTarget` garde l'ID de la Liste d'entrée, ou le terme de
recherche qui a trouvé une ligne `list`. Une ligne `list` contient les détails
d'une Liste, 1 par Liste. Les autres lignes suivent la structure stable des
réponses de Xquik pour un post ou un profil.

Les lignes de membre & d'abonné portent `email` & `contactInfo`. Elles
contiennent les e-mails, téléphones & liens que chaque profil publie.

### Les Listes d'un compte

Ajoutez des noms d'utilisateur dans `twitterHandles`, ou des URL de profil dans
`startUrls`, pour lister les Listes publiques de chaque compte.

```json
{ "twitterHandles": ["verge"], "accountLists": ["created", "memberships"] }
```

`created` liste les Listes que le compte a créées & `memberships` les Listes qui
le contiennent. Chaque Liste donne 1 ligne. Son `resultType` vaut `createdList`
ou `listMembership`, & son `sourceTarget` est le nom d'utilisateur. La ligne
porte aussi `id`, `name`, `description`, `memberCount`, `subscriberCount`,
`createdAt`, `bannerUrl` & le profil `owner`. X montre une Liste privée
seulement à son propriétaire, donc les Listes privées restent exclues.

Les Listes créées par chaque compte arrivent avant celles dont il est membre.
L'Actor lit les comptes en parallèle, donc les lignes de comptes différents
arrivent au fil de la lecture. Regroupez-les par `sourceTarget`.

Une ligne correspond à 1 compte & 1 Liste. Une Liste commune à 2 de vos comptes
donne 2 lignes, 1 sous chacun. Chaque ligne est facturée. `dedupeAcrossTargets`
ne retire jamais ces lignes.

Les exemples utilisent des valeurs fictives. Les résultats reflètent les données
en direct. Une ligne de détails de Liste ressemble à ceci.

```json
{
  "resultType": "list",
  "sourceTarget": "4143408",
  "id": "4143408",
  "name": "NASA Centers",
  "description": "NASA has 10 centers http://www.nasa.gov/about/sites",
  "memberCount": 11,
  "subscriberCount": 859,
  "createdAt": "2009-12-02T22:41:02.000Z",
  "owner": { "username": "NASA", "name": "NASA" }
}
```

Une ligne de membre de Liste ressemble à ceci.

```json
{
  "resultType": "listMember",
  "sourceTarget": "1748648376080666720",
  "username": "sample_user",
  "name": "Sample User",
  "followers": 1200,
  "verified": false
}
```

Une ligne `list` issue d'un terme de recherche ressemble à ceci.

```json
{
  "resultType": "list",
  "sourceTarget": "space news",
  "id": "1000000000000000001",
  "name": "Sample Space News",
  "description": "Sample accounts that post space news.",
  "url": "https://x.com/i/lists/1000000000000000001",
  "memberCount": 35,
  "subscriberCount": 76,
  "owner": { "username": "sample_user", "name": "Sample User" }
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

## Combien coûte le scraping de Listes X ?

Sur chaque plan Apify, le prix est de $0.00015 par ligne livrée. Apify facture
votre usage de la plateforme à part.

Pour plus de volume,
[choisissez un plan Apify](https://apify.com/pricing?fpr=xquik) avec plus
d'usage prépayé.

- Une facturation par ligne de données livrée. Les diagnostics sont gratuits
  dans `diagnostics`.
- Pas de frais de démarrage, de Liste ou de ressource.
- La déduplication passe avant la facturation.

## Limites & reprise

X List Scraper de Xquik lit de nombreuses Listes & ressources en 1 run. Les
lignes livrées & la progression survivent à un redémarrage d'Apify. L'Actor
n'ajoute aucune limite de temps propre.

Une extraction interrompue écrit un diagnostic `partial` gratuit. Les résultats
disponibles restent intacts. Lisez `availableResults`, `failedTargets`,
`retryable` & `nextAction` avant de relancer. Une sortie réussie de l'Actor
confirme la livraison, pas une extraction complète.

Le statut du run nomme chaque cause d'arrêt anticipé. `stopCauses` liste chaque
cause avec ses propres `message`, `retryable` & `nextAction`. Les causes sont
`target_not_found`, `target_failed`, `pagination_safety_limit` &
`deadline_reached`. Une cible introuvable n'entre dans la liste que si une autre
cause a arrêté le run. Le run est `retryable` dès qu'une cause l'est.

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

## FAQ

Les réponses aux questions fréquentes, puis où trouver de l'aide.

### Ai-je besoin d'une clé API X ou d'une connexion ?

Non. X List Scraper de Xquik n'a besoin d'aucune clé API X, d'aucune connexion
ni d'aucun identifiant.

### Est-il légal de scraper des Listes X ?

X List Scraper de Xquik demande à X des champs publics. Les résultats peuvent
contenir des données personnelles. Assurez-vous d'avoir une finalité licite &
respectez les règles de protection des données applicables. En cas de doute,
demandez conseil à un juriste qualifié.

### Pourquoi mon run n'a-t-il renvoyé aucun résultat ?

Lisez d'abord le statut du run. Le statut d'un run vide vous invite à vérifier
vos cibles & vos filtres. La sortie gratuite `diagnostics` apparaît quand
quelque chose demande votre attention. Son `stopCauses` donne à chaque cause une
`nextAction` à suivre. Le run liste chaque entrée qu'il ne peut pas lire &
indique comment la corriger.

### Puis-je utiliser l'API, les planifications & les intégrations ?

Oui. Choisissez parmi 50 tâches publiques ou utilisez l'API REST de Xquik.
L'[onglet API](https://apify.com/xquik/x-list-scraper/api) contient des exemples
en Python, JavaScript & cURL. Les
[planifications](https://docs.apify.com/platform/schedules) Apify lancent X List
Scraper de Xquik selon un cron. Les agents utilisent
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Utilisez `latest`
sauf si vous avez besoin d'une build plus ancienne.

### Où trouver de l'aide ?

Ouvrez une issue dans
l'[onglet Issues](https://apify.com/xquik/x-list-scraper/issues) avec l'ID du
run. Les diagnostics gratuits du key-value store expliquent les runs qui
demandent votre attention. Un run qui ne récupère aucune ligne en indique la
raison dans son statut.

### Puis-je obtenir une solution sur mesure ?

Oui. Décrivez votre besoin dans
l'[onglet Issues](https://apify.com/xquik/x-list-scraper/issues). Xquik propose
aussi un tableau de bord, une API REST, un serveur MCP & des webhooks. Trouvez
le site web de Xquik sur son [profil Apify](https://apify.com/xquik).
