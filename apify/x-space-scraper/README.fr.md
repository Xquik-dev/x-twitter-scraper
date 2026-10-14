[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · **Français** · [Italiano](README.it.md)

[![Framer connecte Xquik MCP aux agents de codage](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Découvrez comment Framer utilise les scrapers Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
avec Claude Code, Codex, Cursor & d'autres outils, à partir de 6:07.

Xquik est le service de scraping X (Twitter) le plus rapide et le moins cher au
monde. Ses données X sont les plus complètes. X Space Scraper de Xquik trouve
des Spaces par mot-clé, hôte ou hashtag & lit des Spaces & des diffusions par
URL ou par ID. La plupart des autres Actors Apify facturent avant de filtrer ou
de dédupliquer. Xquik facture seulement les résultats livrés et uniques.

Trouvez des Spaces Twitter sur n'importe quel sujet, en direct, programmés ou
terminés. Vous n'avez besoin ni de clé API X ni de connexion. Vous payez
**$0.00015 par Space ou diffusion livré**, & Apify facture l'usage de la
plateforme à part.

> Xquik est un service tiers indépendant. Non affilié à X Corp. "Twitter" et "X"
> sont des marques déposées de X Corp.

## Données des Spaces

- Le titre, l'état & les heures de programmation, de début & de fin de chaque
  Space.
- Le nombre d'auditeurs en direct, les lectures du replay & les comptes présents
  dans le Space en ce moment.
- Le profil public de l'hôte, les co-hôtes, les intervenants & les auditeurs que
  X liste.
- Les réglages de replay, de clips & de verrouillage, ainsi que le post qui
  annonce le Space, avec son texte, ses compteurs & son auteur.
- Les posts que les hôtes & les intervenants ont partagés dans le Space, avec
  qui a partagé chacun & quand.
- L'enregistrement d'un Space terminé, sous forme d'URL de playlist HLS, avec
  `includeReplay`.
- Les diffusions par URL ou par ID, avec titre, état, heures, nombre de vues &
  hôte.
- La suppression des doublons avant la facturation. Un Space trouvé par 2 termes
  de recherche donne 1 ligne.

## Comment trouver des Spaces X

Vous débutez sur Apify ?
[Créez d'abord un compte gratuit](https://console.apify.com/sign-up?fpr=xquik).
Le plan gratuit ne demande aucune carte bancaire & donne $5 à dépenser chaque
mois. À $0.00015 par Space ou diffusion, $5 couvrent jusqu'à 33 000 Spaces ou
diffusions, hors usage de la plateforme. Revenez ensuite ici & cliquez sur Try
for free.

1. Ouvrez X Space Scraper de Xquik dans Apify Console.
2. Saisissez des mots, des hashtags ou des opérateurs de recherche X dans
   `searchTerms`.
3. Ou collez des URL de Space dans `startUrls`, ou des ID de Space dans
   `spaceIds`.
4. Pour les diffusions, collez leurs URL dans `startUrls` ou leurs ID dans
   `broadcastIds`.
5. Réglez `maxItems` pour plafonner les lignes livrées, puis cliquez sur Start.
6. Téléchargez le dataset en JSON, CSV ou Excel, ou utilisez l'API Apify.

`startUrls` accepte chaque URL comme simple chaîne ou comme objet
`{ "url": "..." }`.

```json
{
  "startUrls": [
    "https://x.com/i/spaces/1OGwblLjnQMKB",
    { "url": "https://x.com/i/broadcasts/1nGeLMWbkpaKX" }
  ]
}
```

## Entrée

```json
{
  "searchTerms": ["bitcoin", "from:solana"],
  "queryType": "Latest",
  "maxItems": 1000
}
```

Un terme de recherche trouve les Spaces que partagent les posts correspondants.
Il accepte les opérateurs de la recherche X.

| Objectif                                     | Terme de recherche |
| -------------------------------------------- | ------------------ |
| Des Spaces sur un sujet                      | `bitcoin`          |
| Des Spaces partagés par un compte            | `from:solana`      |
| Des Spaces sous un hashtag                   | `#AI`              |
| Des Spaces dans 1 langue                     | `startups lang:es` |
| Des Spaces partagés par des posts très aimés | `nba min_faves:50` |

`queryType` choisit quels posts passent en premier. `Latest` place les plus
récents en tête & `Top` les plus engageants.

`Live` liste les Spaces en direct en ce moment & `Upcoming` liste les Spaces
programmés. Les 2 lisent la recherche de Spaces propre à X, qui cherche des mots
dans les titres des Spaces & n'accepte aucun opérateur.

```json
{ "searchTerms": ["bitcoin"], "queryType": "Live" }
```

Lisez des Spaces que vous connaissez déjà par URL ou par ID.

```json
{
  "startUrls": [{ "url": "https://x.com/i/spaces/1OGwblLjnQMKB" }],
  "spaceIds": ["1OGwblLjnQMKB"]
}
```

Activez `includeReplay` pour obtenir l'enregistrement de chaque Space terminé.

```json
{ "spaceIds": ["1OGwblLjnQMKB"], "includeReplay": true }
```

La ligne porte alors `replay` avec `url`, une playlist HLS, ainsi que
`streamType` & `status`. Un Space en direct, programmé ou sans enregistrement
n'a pas de `replay`. L'enregistrement ne coûte rien de plus.

Lisez des diffusions, la vidéo en direct que X héberge sur `x.com/i/broadcasts`,
par URL ou par ID.

```json
{
  "startUrls": [{ "url": "https://x.com/i/broadcasts/1nGeLMWbkpaKX" }],
  "broadcastIds": ["1nGeLMWbkpaKX"]
}
```

Les petits runs sans problème n'écrivent pas `run-report` & réduisent l'usage
Apify. Activez `alwaysSaveRunRecords` pour l'écrire à chaque run.

## Sortie

Chaque ligne contient 1 Space ou 1 diffusion & son terme de recherche, son URL
ou son ID dans `sourceTarget`. `resultType` vaut `space` ou `broadcast`.

Les exemples utilisent des valeurs fictives. Les résultats reflètent les données
en direct. Une ligne de Space ressemble à ceci.

```json
{
  "id": "1SampleSpace1",
  "title": "Sample Space about bitcoin",
  "state": "Ended",
  "startedAt": "2026-03-11T17:00:26.227Z",
  "endedAt": "2026-03-11T17:49:29.190Z",
  "totalLiveListeners": 841,
  "totalReplayWatched": 609,
  "isAvailableForReplay": true,
  "creator": { "username": "sample_host", "name": "Sample Host" },
  "admins": [{ "username": "sample_host", "name": "Sample Host" }],
  "speakers": [{ "username": "sample_speaker", "name": "Sample Speaker" }],
  "listeners": [],
  "sharings": [
    {
      "id": "2106511178339881415",
      "sharedAt": "2026-03-11T17:20:16.658Z",
      "sharedBy": { "username": "sample_speaker", "name": "Sample Speaker" },
      "tweet": { "id": "2105620368836706789", "text": "Sample shared post" }
    }
  ],
  "resultType": "space",
  "sourceTarget": "bitcoin"
}
```

`state` contient 1 valeur parmi 5, telles que X les nomme.

| `state`      | Le Space                                |
| ------------ | --------------------------------------- |
| `NotStarted` | Est programmé & porte `scheduledStart`. |
| `Running`    | Est en direct en ce moment.             |
| `Ended`      | Est terminé. Son hôte l'a terminé.      |
| `TimedOut`   | Est terminé. X l'a fermé, pas son hôte. |
| `Canceled`   | Était programmé & n'a jamais commencé.  |

Les Spaces `Ended` & `TimedOut` portent `endedAt`, & les 2 peuvent garder un
enregistrement. X montre un Space réservé aux abonnés ou à une Communauté
seulement à son public, donc ces Spaces ne renvoient aucune ligne.

Une ligne de diffusion a `resultType: "broadcast"` & ressemble à ceci.

```json
{
  "id": "1SampleBcast1",
  "title": "Sample launch broadcast",
  "state": "Ended",
  "startedAt": "2026-09-17T00:54:56.506Z",
  "endedAt": "2026-09-17T01:17:35.036Z",
  "totalWatched": 161758,
  "totalWatching": 21639,
  "width": 3840,
  "height": 2160,
  "creator": { "username": "sample_host", "name": "Sample Host" },
  "resultType": "broadcast",
  "sourceTarget": "1SampleBcast1"
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

## Combien coûte le scraping de Spaces X ?

Sur chaque plan Apify, le prix est de $0.00015 par Space ou diffusion livré.
Apify facture votre usage de la plateforme à part.

Pour plus de volume,
[choisissez un plan Apify](https://apify.com/pricing?fpr=xquik) avec plus
d'usage prépayé.

- Une facturation par ligne de données livrée. Les diagnostics sont gratuits
  dans `diagnostics`.
- Pas de frais de démarrage, de recherche ou de page.
- La déduplication passe avant la facturation.

## Limites & reprise

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
- [X List Scraper](https://apify.com/xquik/x-list-scraper) scrape les posts,
  membres & abonnés d'une Liste à partir d'URL ou d'ID de Liste. Utilisez-le
  quand une Liste choisie définit vos sources. À partir de $0.00015 par ligne.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper) scrape les
  infos, posts, recherches, membres & modérateurs d'une Communauté. Utilisez-le
  quand vos sources sont des Communautés X. À partir de $0.00015 par ligne.
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

Non. X Space Scraper de Xquik n'a besoin d'aucune clé API X, d'aucune connexion
ni d'aucun identifiant.

### Puis-je trouver les Spaces en direct en ce moment ?

Oui. Réglez `queryType` sur `Live` & ajoutez un terme de recherche, comme
`bitcoin`. Chaque ligne est un Space en direct en ce moment. `Upcoming` liste
les Spaces programmés, qui portent `scheduledStart`.

### Est-il légal de scraper des Spaces X ?

X Space Scraper de Xquik demande à X des champs publics. Les résultats peuvent
contenir des données personnelles. Assurez-vous d'avoir une finalité licite &
respectez les règles de protection des données applicables. En cas de doute,
demandez conseil à un juriste qualifié.

### Pourquoi mon run n'a-t-il renvoyé aucun résultat ?

Lisez d'abord le statut du run. Le statut d'un run vide vous invite à vérifier
vos cibles. La sortie gratuite `diagnostics` apparaît quand quelque chose
demande votre attention. Son `stopCauses` donne à chaque cause une `nextAction`
à suivre.

### Puis-je utiliser l'API, les planifications & les intégrations ?

Oui. Utilisez l'API Apify ou l'API REST de Xquik.
L'[onglet API](https://apify.com/xquik/x-space-scraper/api) contient des
exemples en Python, JavaScript & cURL. Les
[planifications](https://docs.apify.com/platform/schedules) Apify lancent X
Space Scraper de Xquik selon un cron. Les agents utilisent
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Utilisez `latest`
sauf si vous avez besoin d'une build plus ancienne.

### Où trouver de l'aide ?

Ouvrez une issue dans
l'[onglet Issues](https://apify.com/xquik/x-space-scraper/issues) avec l'ID du
run. Les diagnostics gratuits du key-value store expliquent les runs qui
demandent votre attention. Un run qui ne récupère aucune ligne en indique la
raison dans son statut.

### Puis-je obtenir une solution sur mesure ?

Oui. Décrivez votre besoin dans
l'[onglet Issues](https://apify.com/xquik/x-space-scraper/issues). Xquik propose
aussi un tableau de bord, une API REST, un serveur MCP & des webhooks. Trouvez
le site web de Xquik sur son [profil Apify](https://apify.com/xquik).
