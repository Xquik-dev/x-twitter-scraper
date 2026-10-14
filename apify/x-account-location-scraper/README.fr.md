[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · **Français** · [Italiano](README.it.md)

[![Framer connecte Xquik MCP aux agents de codage](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Découvrez comment Framer utilise les scrapers Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
avec Claude Code, Codex, Cursor & d'autres outils, à partir de 6:07.

Xquik est le service de scraping X (Twitter) le plus rapide et le moins cher au
monde. Ses données X sont les plus complètes. X Account Location Scraper de
Xquik vérifie où sont basés les comptes X, sans cookies X ni connexion. La
plupart des autres Actors Apify facturent avant de filtrer ou de dédupliquer.
Xquik facture seulement les résultats livrés, uniques et conformes à vos
filtres.

Collez des noms d'utilisateur, des URL de profil ou des ID d'utilisateur &
obtenez le libellé "Account based in" de X pour chaque compte en 1 run. Ce
libellé est le pays ou la région d'un compte, selon la meilleure estimation de
X. Ce n'est ni une nationalité, ni un lieu de résidence, ni une localisation
exacte. Vous payez **$0.00015 par ligne livrée**, & Apify facture l'usage de la
plateforme à part.

> Xquik est un service tiers indépendant. Non affilié à X Corp. "Twitter" et "X"
> sont des marques déposées de X Corp.

## Détails du compte sur chaque ligne

- Le libellé "Account based in" de X, sous forme de pays ou de région.
- Le code ISO à 2 lettres de ce pays.
- Si X signale ou non que le libellé peut être inexact.
- La façon dont le compte s'est connecté à X la première fois, comme Web ou le
  pays d'une boutique d'applications.
- La plateforme & le code pays de cette connexion.
- Le nombre de changements de nom d'utilisateur du compte, & la date du dernier.
- L'organisation à laquelle X indique que le compte est affilié.
- L'âge du compte en jours & un lien vers son profil.
- Le profil public complet, avec nom, bio, compteurs, certification, dates &
  images.
- Une seconde lecture de tout compte dont X ne communique pas le libellé, sans
  frais supplémentaires.
- De nombreux comptes en 1 run, lus en parallèle & livrés dans l'ordre de
  l'entrée.
- Des noms d'utilisateur avec ou sans @, des URL `x.com` & `twitter.com` & des
  ID d'utilisateur numériques.
- La suppression des doublons avant la facturation.
- Des exports JSON, CSV, Excel, XML & RSS via les datasets Apify.
- Les runs reprennent depuis un état enregistré après une migration Apify.

## Comment vérifier où sont basés des comptes X

Vous débutez sur Apify ?
[Créez d'abord un compte gratuit](https://console.apify.com/sign-up?fpr=xquik).
Le plan gratuit ne demande aucune carte bancaire & donne $5 à dépenser chaque
mois. À $0.00015 par compte, $5 couvrent jusqu'à 33 000 comptes, hors usage de
la plateforme. Revenez ensuite ici & cliquez sur Try for free.

1. Ouvrez X Account Location Scraper de Xquik dans Apify Console.
2. Collez des noms d'utilisateur, des URL de profil ou des ID d'utilisateur dans
   `twitterHandles`.
3. Réglez `maxItems` pour plafonner les lignes livrées, puis cliquez sur Start.
4. Téléchargez le dataset en JSON, CSV ou Excel, ou passez par l'API Apify.

Vous ne saisissez ni cookies X, ni identifiants de connexion, ni clé API, à
aucune étape.

## Entrée

`twitterHandles` accepte un compte sous toutes ses formes, que vous pouvez
mélanger.

```json
{
  "twitterHandles": [
    "BBCWorld",
    "@OpenAI",
    "https://x.com/NASA",
    "https://twitter.com/github",
    "11348282"
  ],
  "maxItems": 1000
}
```

`startUrls` & `userIds` acceptent les mêmes formes. `startUrls` accepte chaque
URL comme simple chaîne ou comme objet `{ "url": "..." }`.

```json
{
  "startUrls": ["https://x.com/nasa", { "url": "https://x.com/OpenAI" }],
  "userIds": ["742143"]
}
```

Un ID d'utilisateur reste le même quand un compte change de nom d'utilisateur,
donc utilisez `userIds` pour les listes que vous conservez. `userNames`
fonctionne comme un autre nom de `twitterHandles`.

Un compte que l'entrée cite 2 fois est livré & facturé 1 seule fois, même si 1
entrée donne son nom d'utilisateur & l'autre son ID d'utilisateur. `maxItems`
garde les premiers comptes de l'entrée. Les petits runs sans problème n'écrivent
pas `run-report` & réduisent l'usage Apify. Activez `alwaysSaveRunRecords` pour
l'écrire à chaque run.

## Sortie

Chaque compte donne 1 ligne de dataset. Ce que X affiche sur la page À propos du
compte vient en premier, dans `accountBasedIn`, `accountBasedInUnavailable`,
`accountBasedInAccurate`, `affiliateUsername`, `connectedVia`,
`connectedViaAccurate` & `usernameChanges`. Le profil public complet suit, avec
`id`, `username`, `name`, `description`, `followers`, `following`, `verified`,
`verifiedType`, `createdAt`, `profilePicture` & d'autres champs. Les 5 champs
que l'Actor déduit du profil viennent en dernier. Ce sont
`accountBasedInCountryCode`, `connectedViaPlatform`, `connectedViaCountryCode`,
`accountAgeDays` & `profileUrl`. Les champs absents de la source restent
absents, & l'Actor omet tout code qu'il ne peut pas associer. X Account Location
Scraper de Xquik n'invente aucune valeur.

Les exemples utilisent des valeurs fictives. Les résultats reflètent les données
en direct. Une ligne ressemble à ceci.

```json
{
  "accountBasedIn": {
    "value": "United Kingdom",
    "level": "country",
    "observedAt": "2026-10-12T09:00:00.000Z"
  },
  "accountBasedInAccurate": true,
  "affiliateUsername": "sample_org",
  "connectedVia": "Web",
  "usernameChanges": {
    "count": 1,
    "lastChangedAt": "2021-03-04T10:00:00.000Z"
  },
  "id": "1234567890",
  "username": "sample_user",
  "name": "Sample User",
  "followers": 1200,
  "verified": true,
  "createdAt": "2017-03-21T20:50:14.000Z",
  "accountBasedInCountryCode": "GB",
  "connectedViaPlatform": "web",
  "accountAgeDays": 3491,
  "profileUrl": "https://x.com/sample_user",
  "resultType": "profile",
  "sourceTarget": "sample_user"
}
```

Une ligne distingue 3 cas.

| La ligne contient                 | Cela signifie                                        | Que faire                        |
| --------------------------------- | ---------------------------------------------------- | -------------------------------- |
| `accountBasedIn` avec une `value` | X affiche ce libellé pour le compte.                 | Utilisez-le.                     |
| `accountBasedIn: null`            | X n'affiche aucun libellé pour ce compte.            | Rien. X n'en a aucun à afficher. |
| `accountBasedInUnavailable: true` | X n'a pas communiqué le libellé lors des 2 lectures. | Relancez le compte plus tard.    |

Quand X ne communique pas un libellé, le run lit ce compte 1 fois de plus avant
de livrer la ligne. La seconde lecture est gratuite. Un libellé toujours non
communiqué est inconnu, pas absent. Une telle ligne porte le profil public sans
les champs À propos, & le statut du run compte ces comptes. Chacun des 3 cas
donne 1 ligne livrée.

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

- Utilisez un point pour un champ placé dans un objet, comme
  `accountBasedIn.value`. La casse & les tirets bas ne comptent pas.
- Chaque ligne garde son `id`.
- Avec `fields`, un champ absent d'une ligne arrive avec la valeur `null`.
  Chaque ligne a alors les mêmes colonnes.
- Un nom de champ erroné arrête le run avant toute lecture & ne facture rien.
- Si le run ne peut pas vérifier les noms, il continue de lire & liste à la fin
  les noms qu'il n'a pas vus.
- Le run ignore une fonction map ou un filtre jq écrit pour un autre Actor.

## Ce que signifie le libellé

X déduit `accountBasedIn` des adresses IP agrégées d'accès au compte. Le libellé
n'indique ni la nationalité, ni la résidence, ni l'identité, ni le lieu
d'inscription, ni le lieu de publication, ni la localisation exacte. `level`
indique si X affiche un pays ou une région plus large. `observedAt` enregistre
l'heure de récupération. `accountBasedInAccurate` vaut `false` quand X signale
que le libellé peut être inexact. `connectedVia` indique comment le compte s'est
connecté à X la première fois, & `connectedViaAccurate` vaut `false` quand X
signale que son pays peut être inexact. `connectedViaPlatform` vaut `web`, `ios`
ou `android`. Les 2 codes pays viennent des noms que X écrit, donc une région
n'en a pas. X écrit 2 noms pour certains pays, comme Türkiye & Turkey, & les 2
donnent le même code. `location` est le texte que le titulaire du compte a écrit
sur son profil. C'est un champ différent.

## Combien coûte la vérification de la localisation des comptes X ?

Sur chaque plan Apify, le prix est de $0.00015 par ligne livrée. Apify facture
votre usage de la plateforme à part.

Pour plus de volume,
[choisissez un plan Apify](https://apify.com/pricing?fpr=xquik) avec plus
d'usage prépayé.

- Une facturation par ligne de données livrée. Les diagnostics sont gratuits
  dans `diagnostics`.
- Pas de frais de démarrage ni de consultation.
- Un compte que X n'a pas n'ajoute aucune ligne & ne coûte rien.
- La seconde lecture d'un libellé non communiqué ne coûte rien de plus.
- La déduplication a lieu avant la facturation.
- Les réglages de coût total maximal d'Apify plafonnent les lignes livrées.

## Limites & reprise

X Account Location Scraper de Xquik lit de nombreux comptes en 1 run. Les lignes
livrées & la progression survivent à un redémarrage d'Apify. L'Actor n'ajoute
aucune limite de temps propre. Il respecte tout timeout Apify que vous réglez.

Le statut du run nomme les comptes que X ne trouve pas & vous invite à vérifier
le nom d'utilisateur, l'ID ou l'URL. Il nomme aussi les comptes suspendus. Une
extraction interrompue écrit un diagnostic `partial` gratuit. Les résultats
disponibles restent intacts. Lisez `availableResults`, `failedTargets`,
`retryable` & `nextAction` avant de relancer. Une sortie réussie de l'Actor
confirme la livraison, pas une extraction complète.

Le statut du run nomme chaque cause d'arrêt anticipé. `stopCauses` liste chaque
cause avec ses propres `message`, `retryable` & `nextAction`. Les causes sont
`target_not_found`, `target_suspended`, `target_failed` & `deadline_reached`.
Une cible introuvable ou suspendue n'entre dans la liste que si une autre cause
a arrêté le run. Le run est `retryable` dès qu'une cause l'est.

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

## FAQ

Les réponses aux questions fréquentes, puis où trouver de l'aide.

### Ai-je besoin de cookies X, d'une clé API ou d'une connexion ?

Non. X Account Location Scraper de Xquik n'a besoin ni de cookies X, ni de clé
API, ni de connexion, ni d'identifiants. Chaque lecture s'exécute sur
l'infrastructure de Xquik.

### Le libellé indique-t-il où vit le titulaire du compte ?

Non. C'est la meilleure estimation de X pour le compte. Le libellé n'indique ni
la nationalité, ni la résidence, ni la localisation exacte, & X signale lui-même
que certains libellés peuvent être inexacts.

### Pourquoi une ligne indique-t-elle `accountBasedInUnavailable` ?

X n'a pas communiqué le libellé lors des 2 lectures du run. Le libellé est
inconnu, pas absent. Relancez le compte plus tard pour l'obtenir.
`accountBasedIn: null` est différent. X n'affiche aucun libellé pour ce compte.

### Combien de comptes puis-je vérifier en 1 run ?

Autant que vous en collez. Un run peut renvoyer 100 000 lignes & plus. Pour une
liste plus longue, augmentez `maxItems` au-delà des 1 000 que le formulaire
propose au départ.

### Est-il légal de vérifier où sont basés des comptes X ?

X Account Location Scraper de Xquik demande à X des champs publics. Les
résultats peuvent contenir des données personnelles. Assurez-vous d'avoir une
finalité licite & respectez les règles de protection des données applicables. En
cas de doute, demandez conseil à un juriste qualifié.

### Pourquoi mon run n'a-t-il renvoyé aucun résultat ?

Lisez d'abord le statut du run. Le statut d'un run vide vous invite à vérifier
le nom d'utilisateur, l'ID ou l'URL de chaque compte que X ne trouve pas. La
sortie gratuite `diagnostics` apparaît quand quelque chose demande votre
attention. Son `stopCauses` donne à chaque cause une `nextAction` à suivre.

### Puis-je utiliser l'API, les planifications & les intégrations ?

Oui. Utilisez l'API Apify ou l'API REST de Xquik.
L'[onglet API](https://apify.com/xquik/x-account-location-scraper/api) propose
des exemples en Python, JavaScript & cURL. Les
[planifications](https://docs.apify.com/platform/schedules) Apify lancent X
Account Location Scraper de Xquik selon un cron. Les agents passent par
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Utilisez
`latest`, sauf si vous avez besoin d'une build plus ancienne.

### Où trouver de l'aide ?

Ouvrez une issue dans
l'[onglet Issues](https://apify.com/xquik/x-account-location-scraper/issues)
avec l'ID du run. Les diagnostics gratuits du key-value store expliquent les
runs qui demandent votre attention. Un run qui ne récupère aucune ligne en
indique la raison dans son statut.

### Puis-je obtenir une solution sur mesure ?

Oui. Décrivez votre besoin dans
l'[onglet Issues](https://apify.com/xquik/x-account-location-scraper/issues).
Xquik propose aussi un tableau de bord, une API REST, un serveur MCP & des
webhooks. Trouvez le site web de Xquik sur son
[profil Apify](https://apify.com/xquik).
