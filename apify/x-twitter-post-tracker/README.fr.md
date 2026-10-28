[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · **Français** · [Italiano](README.it.md)

[![Framer connecte Xquik MCP aux agents de codage](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Découvrez comment Framer utilise les scrapers Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
avec Claude Code, Codex, Cursor & d'autres outils, à partir de 6:07.

Xquik est le service de scraping X (Twitter) le plus rapide et le moins cher au
monde. Ses données X sont les plus complètes. X (Twitter) Post Tracker de Xquik
enregistre les compteurs publics des posts que vous choisissez. Il ne demande ni
cookies X ni connexion. Relancez-le plus tard, et chaque ligne montre ce qui a
changé. La plupart des autres Actors Apify facturent avant de filtrer ou de
dédupliquer. Xquik facture seulement les résultats livrés et uniques.

Collez des URL de posts ou des ID de tweets. Chaque run enregistre 1 ligne de
relevé par post. Une ligne contient les vues, les J'aime, les reposts, les
réponses, les citations et les signets à ce moment-là. Elle contient aussi
l'évolution depuis le relevé précédent et depuis le premier. Vous payez
**$0.00015 par relevé livré**, et Apify facture l'usage de la plateforme à part.

> Xquik est un service tiers indépendant. Non affilié à X Corp. "Twitter" et "X"
> sont des marques déposées de X Corp.

## Pourquoi utiliser X (Twitter) Post Tracker ?

- **La croissance dans chaque ligne.** Chaque relevé contient l'évolution depuis
  le dernier run et depuis le premier.
- **Un historique sans base de données.** Passez le dataset d'un run précédent.
  Le premier relevé est reporté d'un run à l'autre.
- **Collez les posts sous n'importe quelle forme.** Mélangez URL de posts et ID
  de tweets dans 1 liste.
- **Des exports prêts pour les tableurs.** Façonnez les colonnes avec `fields`
  et `flatten`. Exportez en JSON, CSV, Excel, XML ou RSS.

## Ce que vous obtenez

### Des résultats complets

- Chaque résultat contient les données les plus complètes que X possède à son
  sujet.

### Des lignes exactes

- Un post n'est signalé comme manquant que s'il n'existe plus.
- Chaque ID d'une ligne reste exact.
- Les lignes ne contiennent que des données publiques.

### Des données à jour

- Les lectures continuent de fonctionner quand X déploie des changements.

### Rapidité

- Une réponse lente de X ne retarde pas votre requête.
- Les Actors lisent de nombreux comptes, posts et requêtes en même temps.
- Les lectures se terminent dès que leurs lignes arrivent.
- Les appels d'Actors bloqués se rétablissent d'eux-mêmes.

### Une facturation juste

- Une entrée invalide ne coûte rien, car elle est refusée avant toute lecture.
- Les Actors facturent seulement les lignes livrées, uniques et conformes à vos
  filtres.
- Un run redémarré ne facture jamais deux fois.
- Un plafond de dépense devient un plafond de lignes, et les diagnostics restent
  écrits.
- Les petits runs se terminent par un conseil qui réduit le coût.

### Fiabilité

- Une panne ponctuelle de X ne fait pas échouer votre requête.
- Une échéance renvoie les lignes déjà trouvées, avec des diagnostics.
- Les Actors résistent aux courtes pannes de Xquik.
- Les runs d'Actors survivent aux redémarrages sans doublons.
- Une ligne défectueuse ne fait pas échouer un lot entier.
- Les runs arrêtés gardent leurs lignes et leur rapport.
- Un run qui ne peut pas démarrer explique quand même pourquoi.
- Les problèmes du côté de X sont corrigés avant d'atteindre vos lectures.
- Le support voit exactement ce qu'une requête ou un run a renvoyé.

### Conçu pour les agents

- Les Actors acceptent les entrées écrites pour d'autres Actors.
- Chaque run indique pourquoi il s'est terminé et s'il faut réessayer.

### Contrôles qualité

- Chaque champ affiché par X est fourni, omis volontairement ou prouvé absent.
- Chaque lecture est testée en direct toutes les heures.

## Quelles données X (Twitter) Post Tracker peut-il extraire ?

- Les vues, J'aime, reposts, réponses, citations et signets de chaque post.
- L'heure de chaque relevé, dans `capturedAt`.
- Le premier relevé de chaque post, avec son heure et ses compteurs.
- Le relevé précédent, tiré du dataset du run précédent.
- L'évolution de chaque compteur depuis le relevé précédent.
- L'évolution de chaque compteur depuis le premier relevé.
- Le texte du post, sa date, son lien et son auteur.
- De nombreux posts en 1 run, livrés dans l'ordre de l'entrée.
- Des exports JSON, CSV, Excel, XML et RSS via les datasets Apify.

## Comment suivre les métriques des posts X dans le temps

Nouveau sur Apify ?
[Créez d'abord un compte gratuit](https://console.apify.com/sign-up?fpr=xquik).
Le plan gratuit ne demande pas de carte bancaire et donne $5 à dépenser chaque
mois. À $0.00015 par relevé, $5 paient jusqu'à 33 000 relevés avant l'usage de
la plateforme. Revenez ensuite ici et appuyez sur Try for free.

1. Ouvrez X (Twitter) Post Tracker de Xquik dans Apify Console.
2. Collez des URL de posts ou des ID de tweets dans `tweetIds`.
3. Laissez `previousDatasetId` vide au premier run, puis cliquez sur Start.
4. Au run suivant, choisissez le dataset du premier run dans
   `previousDatasetId`.
5. Téléchargez le dataset en JSON, CSV ou Excel, ou utilisez l'API Apify.

Vous ne saisissez ni cookies X, ni identifiants de connexion, ni clé API à
aucune étape.

## Entrée

`tweetIds` accepte des ID de tweets et des URL de posts, mélangés comme vous
voulez.

```json
{
  "tweetIds": [
    "2102882545427714266",
    "https://x.com/OpenAI/status/2082577277246972300",
    "20"
  ],
  "maxItems": 1000
}
```

`startUrls` accepte les mêmes URL de posts. Donnez chacune sous forme de texte
simple ou d'objet `{ "url": "..." }`.

`previousDatasetId` désigne le dataset d'un run précédent de cet Actor. Le
formulaire vous permet de le choisir parmi vos datasets. L'Actor ne fait que
lire ce dataset. Laissez-le vide au premier run.

```json
{
  "tweetIds": ["2102882545427714266", "20"],
  "previousDatasetId": "<dataset ID of an earlier run>"
}
```

Un post que l'entrée cite deux fois reçoit 1 ligne. `maxItems` garde les
premiers posts de l'entrée. Les petits runs sans problème sautent `run-report`
et économisent de l'usage Apify. Activez `alwaysSaveRunRecords` pour l'écrire à
chaque run.

## Lancez-le selon une planification

Les [planifications](https://docs.apify.com/platform/schedules) Apify démarrent
l'Actor selon un cron, par exemple toutes les heures.

1. Lancez l'Actor une fois avec vos posts et sans `previousDatasetId`.
2. Créez une planification pour l'Actor dans Apify Console.
3. Donnez à la planification la même entrée `tweetIds`.
4. Réglez `previousDatasetId` sur le dataset du premier run.

Chaque run planifié compare alors ses compteurs à ce dataset. Pour comparer
chaque run au précédent, démarrez les runs avec l'API Apify. Passez le
`defaultDatasetId` du dernier run comme `previousDatasetId`. Le premier relevé
est toujours reporté, donc `changeSinceFirst` continue de compter depuis le
jour 1. Un post absent du dernier run démarre un nouveau `firstSnapshot` au run
suivant.

## Sortie

Chaque post correspond à 1 ligne du dataset par run. Une ligne commence par
`postId`, `url`, `text`, `createdAt` et `author`. Viennent ensuite `capturedAt`
et les 6 compteurs, `viewCount`, `likeCount`, `retweetCount`, `replyCount`,
`quoteCount` et `bookmarkCount`. Puis viennent `firstSnapshot`,
`previousSnapshot`, `changeSincePrevious` et `changeSinceFirst`. Un compteur à 0
peut signifier que X ne l'a pas fourni.

Les exemples utilisent des valeurs fictives. Les résultats reflètent des données
en direct. La ligne d'un deuxième run ressemble à ceci.

```json
{
  "postId": "2102882545427714266",
  "url": "https://x.com/NASA/status/2102882545427714266",
  "text": "Welcome to the Artemis Accords, Croatia",
  "createdAt": "Wed Sep 23 22:07:23 +0000 2026",
  "author": { "id": "11348282", "username": "NASA", "name": "NASA" },
  "capturedAt": "2026-10-28T09:00:00.000Z",
  "viewCount": 1291231,
  "likeCount": 9043,
  "retweetCount": 772,
  "replyCount": 207,
  "quoteCount": 100,
  "bookmarkCount": 661,
  "firstSnapshot": {
    "capturedAt": "2026-10-25T09:00:00.000Z",
    "viewCount": 500000,
    "likeCount": 5000,
    "retweetCount": 500,
    "replyCount": 150,
    "quoteCount": 50,
    "bookmarkCount": 400
  },
  "previousSnapshot": {
    "capturedAt": "2026-10-27T09:00:00.000Z",
    "viewCount": 1200000,
    "likeCount": 9000,
    "retweetCount": 770,
    "replyCount": 205,
    "quoteCount": 99,
    "bookmarkCount": 640
  },
  "changeSincePrevious": {
    "viewCount": 91231,
    "likeCount": 43,
    "retweetCount": 2,
    "replyCount": 2,
    "quoteCount": 1,
    "bookmarkCount": 21
  },
  "changeSinceFirst": {
    "viewCount": 791231,
    "likeCount": 4043,
    "retweetCount": 272,
    "replyCount": 57,
    "quoteCount": 50,
    "bookmarkCount": 261
  },
  "resultType": "snapshot",
  "sourceTarget": "2102882545427714266"
}
```

Une ligne distingue 3 cas.

| La ligne contient                            | Signification                                       |
| -------------------------------------------- | --------------------------------------------------- |
| `previousSnapshot: null`                     | Le dataset précédent n'a aucune ligne pour ce post. |
| `previousSnapshot` avec des compteurs        | La ligne se compare à ce relevé.                    |
| Un compteur `null` dans un champ d'évolution | La ligne précédente n'a pas ce compteur.            |

Au premier run, `firstSnapshot` contient l'heure et les compteurs de la ligne
elle-même. Les 2 champs d'évolution restent `null` jusqu'à un run ultérieur.

## Colonnes de sortie

8 entrées façonnent chaque ligne après que le run l'a lue. Elles n'exécutent
aucun code et ne changent aucun prix.

| Champ               | Ce qu'il fait                                                                |
| ------------------- | ---------------------------------------------------------------------------- |
| `fields`            | Garde seulement ces champs, dans l'ordre et l'orthographe que vous écrivez   |
| `omitFields`        | Retire ces champs et garde le reste                                          |
| `renameFields`      | Déplace un champ vers une colonne avec un nouveau nom                        |
| `flatten`           | Transforme chaque objet imbriqué en colonnes de premier niveau               |
| `fillMissingFields` | Remplit avec `null` un champ gardé qui manque à une ligne. Activé par défaut |
| `joinFields`        | Transforme chacune de ces listes en 1 valeur texte                           |
| `joinSeparator`     | Texte entre les éléments joints. Par défaut, une virgule et une espace       |
| `constantFields`    | Ajoute une colonne avec le même texte sur chaque ligne                       |

- Utilisez un point pour un champ dans un objet, comme
  `changeSinceFirst.viewCount`.
- Aplatissez `changeSincePrevious` pour obtenir 1 colonne par compteur.
- Un nom de champ erroné arrête le run avant toute lecture et ne facture rien.
- Le run ignore une fonction map ou un filtre jq écrits pour un autre Actor.

## Combien coûte le suivi de posts X ?

Dans chaque plan Apify, un relevé livré coûte $0.00015. Apify facture votre
usage de la plateforme à part.

Pour plus de volume,
[choisissez un plan Apify](https://apify.com/pricing?fpr=xquik) avec plus
d'usage prépayé.

- Une facturation par ligne de relevé livrée. Les diagnostics sont gratuits dans
  `diagnostics`.
- Aucuns frais de démarrage ni frais pour lire le dataset précédent.
- Le run retire les posts en double avant la facturation.
- Un post que X n'a pas n'ajoute ni ligne ni frais.
- Un dataset que le run ne peut pas lire arrête le run et ne facture rien.
- Les réglages de facturation totale maximale d'Apify plafonnent les lignes
  livrées.

## Limites & reprise

X (Twitter) Post Tracker de Xquik lit de nombreux posts en 1 run. Les lignes
livrées et la progression survivent à un redémarrage d'Apify. L'Actor n'ajoute
aucune limite de temps propre. Il respecte tout délai d'expiration Apify que
vous fixez.

Le statut du run compte les posts pour lesquels X n'a aucune correspondance. Un
dataset précédent peut contenir jusqu'à 100 000 lignes. Un dataset que le run ne
peut pas lire l'arrête avant toute lecture de post. Le statut vous demande alors
de choisir le dataset d'un run précédent. Les runs interrompus écrivent un
diagnostic `partial` gratuit. Lisez `nextAction` avant de réessayer.

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

### Ai-je besoin de cookies X, d'une clé API ou d'une connexion ?

Non. X (Twitter) Post Tracker de Xquik n'a besoin ni de cookies X, ni de clé
API, ni de connexion, ni d'identifiants.

### Quel dataset choisir dans `previousDatasetId` ?

Choisissez le dataset d'un run précédent de cet Actor. Sa ligne la plus récente
pour chaque post devient `previousSnapshot`. L'Actor ignore les lignes d'autres
Actors et les diagnostics.

### Le premier relevé survit-il à de nombreux runs ?

Oui. Chaque ligne porte `firstSnapshot`. Enchaînez chaque run sur le précédent,
et le premier relevé reste le même.

### Puis-je suivre un post que quelqu'un a supprimé ?

Non. Un post que X n'a pas n'ajoute ni ligne ni frais. Le statut du run le
compte.

### Est-il légal de suivre des posts X ?

X (Twitter) Post Tracker de Xquik demande des champs publics de X. Les résultats
peuvent contenir des données personnelles. Assurez-vous d'avoir une finalité
licite et respectez les règles de protection des données applicables. En cas de
doute, demandez conseil à un juriste qualifié.

### Puis-je utiliser l'API, les planifications & les intégrations ?

Oui. Utilisez l'API Apify ou l'API REST de Xquik.
L'[onglet API](https://apify.com/xquik/x-twitter-post-tracker/api) propose des
exemples en Python, JavaScript et cURL. Les
[planifications](https://docs.apify.com/platform/schedules) Apify lancent X Post
Tracker de Xquik selon un cron. Les agents passent par
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Utilisez
`latest`, sauf si vous avez besoin d'un build plus ancien.

### Où trouver de l'aide ?

Ouvrez une issue dans
l'[onglet Issues](https://apify.com/xquik/x-twitter-post-tracker/issues) avec
l'ID du run. Les diagnostics gratuits du key-value store expliquent les runs qui
demandent votre attention.

### Puis-je obtenir une solution sur mesure ?

Oui. Décrivez votre besoin dans
l'[onglet Issues](https://apify.com/xquik/x-twitter-post-tracker/issues). Xquik
propose aussi un tableau de bord, une API REST, un serveur MCP et des webhooks.
Le site web de Xquik figure sur son [profil Apify](https://apify.com/xquik).
