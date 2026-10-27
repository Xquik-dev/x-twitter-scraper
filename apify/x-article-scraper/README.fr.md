[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · **Français** · [Italiano](README.it.md)

[![Framer connecte Xquik MCP aux agents de codage](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Découvrez comment Framer utilise les scrapers Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
avec Claude Code, Codex, Cursor & d'autres outils, à partir de 6:07.

Xquik est le service de scraping X (Twitter) le plus rapide et le moins cher au
monde. Ses données X sont les plus complètes. X Article Scraper de Xquik
transforme les Articles X longs en Markdown & en texte. Il ajoute les
couvertures, les auteurs, les dates & les métriques. La plupart des autres
Actors Apify facturent avant de filtrer ou de dédupliquer. Xquik facture
seulement les résultats livrés, uniques et conformes à vos filtres.

Extrayez des Articles X longs à partir d'URL de posts ou d'ID de post
numériques. Vous payez **$0.00015 par article livré**, & Apify facture l'usage
de la plateforme à part. Vous n'avez besoin ni de clé API X ni de connexion.

> Xquik est un service tiers indépendant. Non affilié à X Corp. "Twitter" et "X"
> sont des marques déposées de X Corp.

## Données & format des Articles

- Du Markdown avec titres, listes, gras, italique, liens & images, sans HTML.
- Des blocs `contents` qui gardent la mise en forme d'origine.
- Des URL de posts & des ID de post numériques dans le même run.
- Tous les Articles publiés par un compte, à partir de son nom d'utilisateur ou
  de l'URL de son profil.
- La suppression des doublons avant la facturation.

X Article Scraper de Xquik ne devine jamais les métadonnées des liens. Apify
affiche le Markdown sous forme de texte.

## Comment scraper des Articles X

Vous débutez sur Apify ?
[Créez d'abord un compte gratuit](https://console.apify.com/sign-up?fpr=xquik).
Le plan gratuit ne demande aucune carte bancaire & donne $5 à dépenser chaque
mois. À $0.00015 par article, $5 couvrent jusqu'à 33 000 articles, hors usage de
la plateforme. Revenez ensuite ici & cliquez sur Try for free.

1. Ouvrez X Article Scraper de Xquik dans Apify Console.
2. Collez des URL de posts d'Article dans `startUrls` ou des ID de post dans
   `tweetIds`. Pour lister les Articles d'un compte, ajoutez son nom
   d'utilisateur dans `twitterHandles`.
3. Réglez `maxItems` pour plafonner les Articles livrés, puis cliquez sur Start.
4. Téléchargez le dataset en JSON, CSV ou Excel, ou utilisez l'API Apify.

`startUrls` accepte chaque URL comme simple chaîne ou comme objet
`{ "url": "..." }`.

```json
{
  "startUrls": [
    "https://x.com/github/status/2082201573976056245",
    { "url": "https://x.com/satyanadella/status/2066182223213293753" }
  ]
}
```

## Entrée

| Champ                  | Rôle                                                 | Par défaut |
| ---------------------- | ---------------------------------------------------- | ---------- |
| `startUrls`            | URL publiques de posts d'Article ou de profils       | Aucune     |
| `tweetIds`             | ID de post numériques d'Articles                     | Aucun      |
| `twitterHandles`       | Comptes dont l'Actor liste les Articles              | Aucun      |
| `maxItems`             | Plafond global d'Articles livrés                     | `100000`   |
| `dedupeAcrossTargets`  | Retire les ID d'Article répétés avant la facturation | `true`     |
| `maxConcurrency`       | Lectures d'Articles indépendantes en parallèle       | `100`      |
| `alwaysSaveRunRecords` | Enregistre `run-report` à chaque run                 | `false`    |

## Sortie

L'onglet Output ouvre `Articles`. `Results` mène aux lignes. `Run Report` mène
aux compteurs, à l'achèvement, à la durée & aux anomalies. Un run qui rencontre
un problème, ou un gros run, écrit ce rapport. Un petit run sans problème donne
plutôt ses compteurs dans le statut du run. Activez `alwaysSaveRunRecords` pour
l'écrire à chaque run.

Les exemples utilisent des valeurs fictives. Les résultats reflètent les données
en direct. Une ligne d'Article contient ces champs.

```json
{
  "markdown": "# Article title\n\nPlain **Article** text",
  "bodyMarkdown": "Plain **Article** text",
  "bodyText": "Plain Article text",
  "contents": [
    {
      "type": "paragraph",
      "text": "Plain Article text",
      "inlineStyleRanges": [{ "offset": 6, "length": 7, "style": "Bold" }]
    }
  ]
}
```

Les lignes ajoutent l'auteur, la source, la couverture, l'heure & les métriques.
Exportez en JSON ou en tableaux.

Un nom d'utilisateur dans `twitterHandles`, ou une URL de profil dans
`startUrls`, liste les Articles de ce compte, du plus récent au plus ancien.
Chacun est une ligne `articlePreview` avec le `title`, le `previewText`, la
`coverImageUrl` & l'`articleId` de l'Article, ses dates & les métriques du post.
X n'y liste pas le corps, donc la ligne n'a ni `markdown` ni `contents`. Lancez
son `tweetId` pour obtenir l'Article complet.

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

## Combien coûte le scraping d'Articles X ?

Sur chaque plan Apify, le prix est de $0.00015 par article livré. Apify facture
votre usage de la plateforme à part.

Pour plus de volume,
[choisissez un plan Apify](https://apify.com/pricing?fpr=xquik) avec plus
d'usage prépayé.

- Une facturation par ligne de données livrée. Les diagnostics sont gratuits
  dans `diagnostics`.
- Pas de frais de démarrage.
- La déduplication passe avant la facturation.

## Limites & reprise

X Article Scraper de Xquik renvoie seulement les Articles publics que X rend
accessibles.

Une extraction interrompue écrit un diagnostic `partial` gratuit. Les résultats
disponibles restent intacts. Lisez `availableResults`, `failedTargets`,
`retryable` & `nextAction` avant de relancer. Une sortie réussie de l'Actor
confirme la livraison, pas une extraction complète.

Le statut du run nomme chaque cause d'arrêt anticipé. `stopCauses` liste chaque
cause avec ses propres `message`, `retryable` & `nextAction`. Les causes sont
`target_not_found`, `target_suspended`, `target_failed`,
`pagination_safety_limit` & `deadline_reached`. `target_suspended` nomme les
comptes que X a suspendus. Une cible introuvable ou suspendue n'entre dans la
liste que si une autre cause a arrêté le run. Le run est `retryable` dès qu'une
cause l'est.

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

Non. X Article Scraper de Xquik n'a besoin d'aucune clé API X, d'aucune
connexion ni d'aucun identifiant.

### Est-il légal de scraper des Articles X ?

X Article Scraper de Xquik demande à X des champs publics. Les résultats peuvent
contenir des données personnelles. Assurez-vous d'avoir une finalité licite &
respectez les règles de protection des données applicables. En cas de doute,
demandez conseil à un juriste qualifié.

### Pourquoi mon run n'a-t-il renvoyé aucun résultat ?

Lisez d'abord le statut du run. Le statut d'un run vide vous invite à vérifier
vos cibles & vos filtres. La sortie gratuite `diagnostics` apparaît quand
quelque chose demande votre attention. Son `stopCauses` donne à chaque cause une
`nextAction` à suivre. Le run signale les liens qu'il ne peut pas lire & indique
comment les corriger. X Article Scraper de Xquik renvoie seulement les Articles
publics que X rend accessibles.

### Puis-je utiliser l'API, les planifications & les intégrations ?

Oui. Choisissez parmi 50 tâches publiques ou utilisez l'API REST de Xquik.
L'[onglet API](https://apify.com/xquik/x-article-scraper/api) contient des
exemples en Python, JavaScript & cURL. Les
[planifications](https://docs.apify.com/platform/schedules) Apify lancent X
Article Scraper de Xquik selon un cron. Les agents utilisent
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Utilisez `latest`
sauf si vous avez besoin d'une build plus ancienne.

### Où trouver de l'aide ?

Ouvrez une issue dans
l'[onglet Issues](https://apify.com/xquik/x-article-scraper/issues) avec l'ID du
run. Les diagnostics gratuits du key-value store expliquent les runs qui
demandent votre attention. Un run qui ne récupère aucune ligne en indique la
raison dans son statut.

### Puis-je obtenir une solution sur mesure ?

Oui. Décrivez votre besoin dans
l'[onglet Issues](https://apify.com/xquik/x-article-scraper/issues). Xquik
propose aussi un tableau de bord, une API REST, un serveur MCP & des webhooks.
Trouvez le site web de Xquik sur son [profil Apify](https://apify.com/xquik).
