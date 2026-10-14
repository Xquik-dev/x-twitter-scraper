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
monde. Ses données X sont les plus complètes. X Profile Scraper de Xquik
collecte les profils, posts, réponses, médias et abonnés de n'importe quel nom
d'utilisateur. La plupart des autres Actors Apify facturent avant de filtrer ou
de dédupliquer. Xquik facture seulement les résultats livrés, uniques et
conformes à vos filtres.

Consultez des comptes Twitter en masse et lisez les profils sans compte X.
Scrapez les profils, posts, réponses, médias et abonnés X à partir de noms
d'utilisateur, d'ID ou d'URL. Vous payez **$0.00015 par ligne livrée**, et Apify
facture l'usage de la plateforme à part. Vous n'avez besoin ni de clé API X ni
de connexion.

> Xquik est un service tiers indépendant. Non affilié à X Corp.
> "Twitter" et "X" sont des marques déposées de X Corp.

## Que fait X Profile Scraper ?

X Profile Scraper de Xquik renvoie des profils X (Twitter) publics à partir de
noms d'utilisateur, d'ID utilisateur numériques ou d'URL de profil. Chaque
profil peut ajouter ses posts, réponses, médias, Temps forts, abonnés,
abonnements et abonnés certifiés. Il traduit aussi les bios et vérifie qui
diffuse en direct en ce moment.

### Fonctionnalités clés

- Lisez de nombreux profils en 1 run depuis des noms d'utilisateur, ID ou URL.
- Ajoutez les posts, réponses, médias, Temps forts, abonnés, abonnements ou
  abonnés certifiés sous forme de lignes distinctes.
- Traduisez chaque bio vers un code de langue avec `translateBioTo`.
- Vérifiez si chaque profil diffuse en direct en ce moment avec `checkLiveNow`.
- Filtrez les posts par date, langue, médias et engagement.
- Filtrez les profils par taille d'audience, ancienneté et certification.
- Les filtres et la suppression des doublons s'appliquent avant la facturation.
- Un redémarrage d'Apify ne fait perdre ni les lignes livrées ni la progression.

### Cas d'usage

- Enrichissez vos listes de prospects avec les bios, sites web, localisations et
  tailles d'audience.
- Comparez les comptes concurrents par abonnés, posts et certification.
- Évaluez des créateurs par audience, ancienneté du compte et engagement.
- Archivez les posts, médias et Temps forts d'un compte.
- Cartographiez le réseau d'un compte grâce à ses abonnés et abonnements.
- Surveillez les diffusions en direct de créateurs et de marques.
- Lisez dans votre langue les bios d'autres marchés.

### Quelles données X Profile Scraper peut-il extraire ?

Les lignes de profil utilisent `resultType: "profile"`. Voici les champs
principaux :

| Champ              | Description                                      |
| ------------------ | ------------------------------------------------ |
| `id`               | ID utilisateur numérique                         |
| `username`         | Nom d'utilisateur sans `@`                       |
| `name`             | Nom affiché                                      |
| `description`      | Texte de la bio                                  |
| `url`              | Site web sur les lignes de profil                |
| `location`         | Localisation saisie par le titulaire             |
| `followers`        | Nombre d'abonnés                                 |
| `following`        | Nombre d'abonnements                             |
| `statusesCount`    | Nombre de posts                                  |
| `mediaCount`       | Nombre de posts avec médias                      |
| `favouritesCount`  | J'aime donnés par le compte                      |
| `listedCount`      | Listes publiques qui incluent le compte          |
| `createdAt`        | Date de création du compte                       |
| `verified`         | Indique si X signale une certification           |
| `isBlueVerified`   | Indique si le compte a la certification X Blue   |
| `verifiedType`     | Catégorie de certification, comme `Government`   |
| `profilePicture`   | URL de la photo de profil                        |
| `coverPicture`     | URL de la bannière                               |
| `pinnedTweetIds`   | ID des posts épinglés                            |
| `professional`     | Catégorie et type professionnels                 |
| `accountBasedIn`   | Libellé de pays ou de région de X, sans garantie |
| `connectedVia`     | Moyen de première connexion du compte à X        |
| `usernameChanges`  | Fréquence et date du dernier changement de nom   |
| `birthdate`        | Éléments de date de naissance rendus publics     |
| `subscribersCount` | Nombre d'abonnés payants, quand X l'envoie       |
| `tipJar`           | Liens de pourboire publics                       |
| `protected`        | Indique si le compte protège ses posts           |
| `unavailable`      | Indique si le compte est indisponible            |
| `sourceTarget`     | Nom d'utilisateur, ID ou URL que vous avez saisi |

Le schéma du dataset documente tous les autres champs, comme
`identityVerification`, `isAutomated`, `automatedBy`, `withheldInCountries` et
`verificationReason`.

Les lignes optionnelles gardent le format des réponses de l'API REST de Xquik :

| `resultType`              | Activé par                 | Une ligne par        |
| ------------------------- | -------------------------- | -------------------- |
| `profileTweet`            | `includeTweets`            | Post                 |
| `profileReply`            | `includeReplies`           | Post ou réponse      |
| `profileMedia`            | `includeMedia`             | Post avec médias     |
| `profileHighlight`        | `includeHighlights`        | Post des Temps forts |
| `profileFollower`         | `includeFollowers`         | Abonné               |
| `profileFollowing`        | `includeFollowing`         | Compte suivi         |
| `profileVerifiedFollower` | `includeVerifiedFollowers` | Abonné certifié      |
| `profileBioTranslation`   | `translateBioTo`           | Bio traduite         |
| `profileLive`             | `checkLiveNow`             | Profil contrôlé      |

Les lignes n'incluent jamais l'état propre à votre compte, par exemple si vous
suivez ou bloquez un compte.

## Comment utiliser X Profile Scraper pour scraper des données de profil ?

Suivez ces étapes dans Apify Console :

1. Ouvrez un [exemple de tâche](#exemples-de-tâches) ou l'onglet Input.
2. Ajoutez des noms d'utilisateur à `twitterHandles`, des URL à `startUrls` ou
   des ID à `userIds`.
3. Activez les ressources dont vous avez besoin, comme `includeTweets`.
4. Réglez `maxItems` et vos filtres éventuels, puis cliquez sur Start.
5. Exportez le dataset en JSON, CSV, Excel ou HTML.

Chaque recette ci-dessous est une entrée complète.

### Scraper de nombreux profils

```json
{ "twitterHandles": ["nasa", "OpenAI", "apify"], "maxItems": 100 }
```

Chaque nom d'utilisateur renvoie 1 ligne de profil. Les noms d'utilisateur
fonctionnent avec ou sans `@`.

### Coller des URL ou des ID de profil

`startUrls` accepte chaque URL comme simple chaîne ou comme objet
`{ "url": "..." }`. `userIds` accepte des ID utilisateur X numériques :

```json
{
  "startUrls": ["https://x.com/nasa", { "url": "https://x.com/OpenAI" }],
  "userIds": ["11348282"],
  "maxItems": 100
}
```

Un nom d'utilisateur saisi 2 fois est lu 1 seule fois.

### Ajouter les posts, réponses et médias

```json
{
  "twitterHandles": ["nasa"],
  "includeTweets": true,
  "includeMedia": true,
  "sinceDate": "2026-01-01",
  "maxItems": 500
}
```

`includeTweets` suit l'onglet Posts du profil. `includeReplies` suit son onglet
Réponses. `includeMedia` suit son onglet Médias. `includeHighlights` ajoute les
posts de son onglet Temps forts, dans l'ordre de X. Un profil sans Temps forts
n'ajoute aucune ligne.

### Garder seulement les posts populaires

```json
{
  "twitterHandles": ["nasa"],
  "includeTweets": true,
  "minLikes": 1000,
  "mediaType": "videos",
  "maxItems": 200
}
```

Les filtres de posts s'appliquent aux lignes de posts optionnelles. Les lignes
filtrées n'atteignent jamais le dataset, vous ne les payez donc jamais.

### Exporter les abonnés et abonnements

```json
{
  "twitterHandles": ["apify"],
  "includeFollowers": true,
  "minFollowers": 1000,
  "verifiedOnly": true,
  "maxItems": 1000
}
```

`includeFollowers`, `includeFollowing` et `includeVerifiedFollowers` ajoutent 1
ligne de profil par compte. Les filtres de profils s'appliquent à ces lignes et
aux profils principaux.

### Traduire les bios

```json
{ "twitterHandles": ["nasa", "SpaceX"], "translateBioTo": "es" }
```

Chaque traduction forme 1 ligne `profileBioTranslation` avec `text`, `language`
et `sourceLanguage`. Un profil sans bio n'ajoute ni ligne ni frais.

### Voir qui est en direct

```json
{ "twitterHandles": ["nasa", "SpaceX"], "checkLiveNow": true }
```

Chaque contrôle forme 1 ligne `profileLive` avec `live`, `userId`, `userName` et
`broadcast`. `broadcast` contient la dernière diffusion du profil, en cours ou
terminée, ou null. Un profil introuvable n'ajoute aucune ligne.

## Exemples de tâches

Choisissez parmi 50 tâches publiques. Chacune a une entrée plafonnée et une vue
de dataset adaptée. Modifiez une tâche avant de la lancer.

- [Obtenir la fiche de profil d'un compte X](https://apify.com/xquik/x-profile-scraper/examples/get-an-x-profile-card)
- [Comparer les profils de marques concurrentes](https://apify.com/xquik/x-profile-scraper/examples/compare-competitor-brand-profiles)
- [Convertir des ID utilisateur numériques en profils](https://apify.com/xquik/x-profile-scraper/examples/resolve-numeric-user-ids-to-profiles)
- [Collecter les posts récents d'un compte](https://apify.com/xquik/x-profile-scraper/examples/collect-recent-posts-from-an-account)
- [Trouver les posts les plus aimés d'un compte](https://apify.com/xquik/x-profile-scraper/examples/find-an-accounts-most-liked-posts)
- [Collecter les vidéos publiées par un compte](https://apify.com/xquik/x-profile-scraper/examples/collect-videos-from-an-account)
- [Archiver 1 année civile d'un compte](https://apify.com/xquik/x-profile-scraper/examples/archive-one-year-of-posts)
- [Exporter les abonnés d'un compte](https://apify.com/xquik/x-profile-scraper/examples/export-the-followers-of-an-account)
- [Exporter les abonnés certifiés d'une entreprise](https://apify.com/xquik/x-profile-scraper/examples/export-verified-followers)
- [Trouver les abonnés qui ont 10 000 abonnés ou plus](https://apify.com/xquik/x-profile-scraper/examples/find-influential-followers)
- [Mesurer le chevauchement d'audience de 2 outils de design](https://apify.com/xquik/x-profile-scraper/examples/measure-audience-overlap)
- [Réaliser un audit complet d'un compte](https://apify.com/xquik/x-profile-scraper/examples/run-a-full-account-audit)

## Combien coûte le scraping de profils X ?

X Profile Scraper de Xquik coûte $0.00015 par ligne livrée sur chaque plan
Apify. Apify facture votre usage de la plateforme à part. Xquik applique une
facturation par ligne de données livrée. Les diagnostics sont gratuits dans la
sortie `diagnostics`.

- Vous n'avez besoin d'aucun abonnement Xquik.
- Vous ne payez pas de frais séparés de démarrage, de profil ou de requête.
- Les filtres et la déduplication ont lieu avant la facturation. Vous ne payez
  jamais les lignes filtrées ou en double.
- Un profil sans bio n'entraîne pas de frais de traduction.
- Un profil introuvable n'entraîne pas de frais de contrôle du direct.
- Les réglages de coût total maximal d'Apify plafonnent les lignes livrées.

Un run qui rencontre un problème, ou un gros run, écrit aussi un enregistrement
`run-report`. Un petit run sans problème s'en passe et réduit l'usage Apify.
Activez `alwaysSaveRunRecords` pour l'écrire à chaque run.

Pour plafonner ce qu'un run peut dépenser, consultez
[Options de run](#options-de-run).

## Runs vides, partiels et arrêtés

X Profile Scraper de Xquik explique gratuitement les runs vides, partiels et
arrêtés. Le statut du run indique pourquoi le run s'est arrêté. Il compte aussi
les résultats facturés et les cibles lues.

### Résultats vides

Le statut d'un run vide vous invite à vérifier vos cibles et vos filtres. Les
lignes filtrées ne consomment jamais votre limite de résultats. Un run qui lit
toutes les cibles sans recevoir aucune ligne n'écrit aucun enregistrement. Son
statut indique pourquoi et ce qu'il faut changer.

Depuis 2024, X ne montre les posts aimés par un compte qu'à ce compte.
`includeLikes` ne renvoie aucune ligne `profileLike` pour les autres comptes.

### Runs partiels

Une extraction interrompue écrit un diagnostic `partial` gratuit. Les lignes
livrées restent dans le dataset. Lisez `availableResults`, `failedTargets`,
`retryable` et `nextAction` avant de relancer. Une sortie réussie de l'Actor
confirme la livraison, pas une extraction complète.

### Causes d'arrêt

Le statut du run nomme chaque cause d'arrêt anticipé. `stopCauses` liste chaque
cause avec ses propres `message`, `retryable` et `nextAction`. Les causes sont
`target_not_found`, `target_suspended`, `target_failed`,
`pagination_safety_limit` et `deadline_reached`. `target_suspended` nomme les
comptes que X a suspendus. Une cible introuvable ou suspendue n'entre dans la
liste que si une autre cause a arrêté le run. Le run est `retryable` dès qu'une
cause l'est.

## Entrée

L'onglet Input liste toutes les options. Renseignez au moins 1 champ parmi
`twitterHandles`, `startUrls` ou `userIds`. Tous les autres champs sont
optionnels.

| Champ                          | Ce qu'il fait                                                 |
| ------------------------------ | ------------------------------------------------------------- |
| `twitterHandles`               | Noms d'utilisateur, avec ou sans `@`                          |
| `startUrls`                    | URL de profil sur x.com ou twitter.com                        |
| `userIds`                      | ID utilisateur X numériques                                   |
| `maxItems`                     | Plafond de lignes livrées sur tout le run                     |
| `maxItemsPerTarget`            | Plafond de lignes par profil ou ressource                     |
| `includeTweets`                | Ajoute l'onglet Posts                                         |
| `includeReplies`               | Ajoute l'onglet Réponses                                      |
| `includeMedia`                 | Ajoute l'onglet Médias                                        |
| `includeHighlights`            | Ajoute l'onglet Temps forts                                   |
| `includeLikes`                 | Ajoute les posts aimés, que X masque aux autres comptes       |
| `includeFollowers`             | Ajoute les abonnés                                            |
| `includeFollowing`             | Ajoute les comptes suivis                                     |
| `includeVerifiedFollowers`     | Ajoute les abonnés certifiés                                  |
| `translateBioTo`               | Traduit chaque bio vers un code de langue, comme `es`         |
| `checkLiveNow`                 | Vérifie si chaque profil diffuse en direct en ce moment       |
| `sinceDate`, `untilDate`       | Garde les posts dans une plage de dates                       |
| `language`                     | Garde les posts dans 1 langue, via son code                   |
| `mediaType`                    | Garde les posts avec images, vidéos, GIF, liens ou sans média |
| `minViews`, `minLikes`         | Garde les posts dépassant un nombre de vues ou de J'aime      |
| `minReplies`, `minRetweets`    | Garde les posts dépassant un nombre de réponses ou de reposts |
| `nativeRetweets`               | Garde seulement les reposts natifs                            |
| `verifiedOnly`                 | Garde les auteurs ou profils certifiés                        |
| `blueVerifiedOnly`             | Garde les auteurs ou profils que X marque certifiés Blue      |
| `minFollowers`, `maxFollowers` | Garde les profils dans une fourchette d'audience              |
| `minAccountAgeDays`            | Garde les profils âgés d'au moins ce nombre de jours          |
| `hasWebsite`, `hasLocation` | Garde les profils qui indiquent un site web ou une localisation |
| `bioContains` | Garde les profils dont la bio contient 1 de ces mots |
| `locationContains` | Garde les profils dont la localisation contient ce texte |
| `dedupeAcrossTargets`          | Retire les lignes répétées entre profils avant la facturation |

### Migrer depuis un autre Actor de profils

Collez l'entrée que vous utilisez déjà. X Profile Scraper de Xquik lit ces noms
de champs d'autres Actors de profils. Chaque ligne nomme leurs champs, puis le
champ auquel ils correspondent :

- `profiles`, `userNames`, `usernames`, `handles`, `screenNames` :
  `twitterHandles`
- `urls`, `profileUrls` : `startUrls`
- `maxProfiles`, `maxResults` : `maxItems`
- `shouldScrapeFollowers`, `shouldScrapeFollowings` : `includeFollowers`,
  `includeFollowing`
- `requireEmail` : `hasEmail`
- `requireWebsite` : `hasWebsite`. Il garde un profil avec n'importe quel lien
  dans son champ de site web, et le statut du run le dit.
- `filterByBlueVerified` : `blueVerifiedOnly`. `false` arrête le run avant toute
  lecture ou facturation.
- `bioKeywords` : `bioContains`. Il suffit que 1 de ses termes corresponde.
- `locationKeywords` avec 1 valeur : `locationContains`. Avec plus de valeurs,
  le run s'arrête avant toute lecture ou facturation.
- `emailDomains` en liste : `emailDomains`
- `outputEmail`, `resolveShortLinks` : aucun champ nécessaire. Chaque ligne
  contient ses e-mails et les liens complets de X.
- `findEmails`, `extractEmails` : aucun champ. Les lignes contiennent les
  e-mails qu'un profil publie sur X. Le statut du run indique que l'Actor ne lit
  aucun site lié.
- `validateEmails` : aucun champ. Le statut du run indique que les e-mails
  arrivent tels que publiés, car l'Actor ne vérifie aucune boîte mail.

`category` réglé sur `user_info` ne change rien. Une catégorie qui relève d'un
autre Actor, comme `tweets` ou `followers`, arrête le run. Il ne lit et ne
facture rien. Le message nomme l'Actor à utiliser. Si vous réglez un alias et
son champ canonique, la valeur canonique l'emporte. Le log du run nomme l'alias
écarté.

### Choisir les bonnes entrées

- Pour une simple fiche de profil, indiquez des noms d'utilisateur et laissez
  toutes les options `include` désactivées.
- Pour archiver un compte, activez `includeTweets`, `includeMedia` et
  `includeHighlights`, puis réglez `sinceDate`.
- Pour les meilleurs posts, ajoutez `minLikes` ou `minViews` à `includeTweets`.
- Pour des listes de prospects, activez `includeFollowers` avec `minFollowers`
  et `minAccountAgeDays`.
- Pour le chevauchement d'audience, indiquez 2 noms d'utilisateur, activez
  `includeFollowers` et réglez `dedupeAcrossTargets: false`. Un abonné commun
  apparaît alors sous chaque nom d'utilisateur.

## Sortie

Chaque ligne est un objet JSON. Le schéma du dataset donne à chaque champ un
titre et une description, pour que les agents IA lisent les lignes sans deviner.

Les exemples utilisent des valeurs fictives. Les résultats reflètent les données
en direct. Une ligne de profil ressemble à ceci :

```json
{
  "resultType": "profile",
  "sourceTarget": "sample_user",
  "id": "1234567890",
  "username": "sample_user",
  "name": "Sample User",
  "description": "Building tools for researchers.",
  "url": "https://example.com",
  "location": "Lisbon",
  "followers": 1200,
  "following": 310,
  "statusesCount": 4200,
  "verified": false,
  "createdAt": "Tue Mar 21 20:50:14 +0000 2017",
  "accountBasedInUnavailable": true
}
```

X déduit `accountBasedIn` des IP agrégées qui accèdent au compte. Ce libellé
n'indique ni nationalité, ni résidence, ni identité. Il ne donne pas non plus le
lieu d'inscription, le lieu de publication ou la position exacte. `observedAt`
enregistre l'heure de récupération. `accountBasedIn` vaut null quand X n'affiche
aucun libellé. Quand X le masque, la ligne porte plutôt
`accountBasedInUnavailable: true`.

Exportez le dataset en JSON, CSV, Excel ou HTML.

## Options de run

- Réglez le coût total maximal d'Apify pour plafonner le coût du run. Laissez
  `maxItems` élevé pour obtenir le plus de lignes possible dans ce budget.
- Réglez `maxTotalChargeUsd` dans l'API Apify, ou Max cost per run dans Console.
- Mettez tous vos profils dans 1 run. Chaque run paie à Apify le même coût de
  démarrage.
- `maxConcurrency` fixe le nombre de profils traités en même temps. La valeur
  par défaut est le réglage sûr le plus rapide.
- Utilisez les moniteurs de comptes Xquik pour des vérifications à la seconde et
  des webhooks signés. Les moniteurs actifs vérifient chaque seconde.

Sélectionnez `latest` pour chaque run afin de profiter de chaque correctif
publié. Les tâches enregistrées et les planifications gardent leur propre choix
de build, alors laissez-le sur `latest`.

## Actors Xquik associés

Tous les Actors Xquik partagent le même moteur d'extraction, la même facturation
après filtrage et les mêmes diagnostics. Choisissez celui qui correspond aux
données dont vous avez besoin.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper) scrape des posts
  (tweets) depuis des recherches, des fils de profil, des Listes et des ID de
  post, avec plus de 50 filtres et des exports plats. Utilisez-le quand vous
  avez besoin de données de posts sans analyse. À partir de $0.00015 par ligne.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper) scrape des
  réponses, des commentaires et des conversations entières sous les posts avec
  plus de 25 filtres. Utilisez-le quand vous avez besoin des échanges sous les
  posts. À partir de $0.00015 par ligne.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper) scrape en
  masse les réponses, citations, comptes qui ont reposté et discussions de
  posts, à partir d'URL ou d'ID. Utilisez-le pour mesurer qui a interagi avec
  des posts. À partir de $0.00015 par ligne.
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper)
  scrape les posts qui citent des posts, avec le texte, les médias, les
  compteurs, les auteurs et 11 filtres. Utilisez-le quand vous étudiez qui a
  cité des posts et ce qu'ils ont dit. À partir de $0.00015 par post.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper) scrape les
  abonnés, les abonnements, les membres et abonnés de Liste et les membres de
  Communauté sous forme de lignes de profil. Utilisez-le quand vous avez besoin
  de listes d'audience ou de membres. À partir de $0.00015 par profil.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper)
  recherche des comptes par nom d'utilisateur, bio et localisation, avec des
  filtres d'abonnés, de certification, d'ancienneté et de localisation.
  Utilisez-le pour créer des listes de comptes à partir d'une recherche. À
  partir de $0.00015 par profil.
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper)
  vérifie où sont basés les comptes avec le libellé "Account based in" de X, la
  façon dont ils se sont connectés à X et leurs changements de nom
  d'utilisateur. Utilisez-le quand vous vérifiez où sont basés des comptes. À
  partir de $0.00015 par compte.
- [X Email Scraper](https://apify.com/xquik/x-email-scraper) récupère les
  e-mails, téléphones et liens que les comptes publient sur leur profil, à
  partir de noms d'utilisateur, d'abonnés ou de recherches d'utilisateurs.
  Utilisez-le quand vous avez besoin des e-mails que les profils publient. À
  partir de $0.00015 par profil.
- [X List Scraper](https://apify.com/xquik/x-list-scraper) scrape les posts,
  membres et abonnés d'une Liste à partir d'URL ou d'ID de Liste. Utilisez-le
  quand une Liste choisie définit vos sources. À partir de $0.00015 par ligne.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper) scrape les
  infos, posts, recherches, membres et modérateurs d'une Communauté. Utilisez-le
  quand vos sources sont des Communautés X. À partir de $0.00015 par ligne.
- [X Space Scraper](https://apify.com/xquik/x-space-scraper) trouve des Spaces
  par mot-clé et lit leurs titres, états, heures, nombres d'auditeurs, hôtes et
  intervenants. Il lit aussi des diffusions par URL ou par ID. Utilisez-le quand
  vous suivez l'audio et la vidéo en direct sur X. À partir de $0.00015 par
  Space ou diffusion.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper) scrape les
  tendances en temps réel par lieu, avec rang, volume, requête et WOEID.
  Utilisez-le pour suivre les tendances de chaque lieu. À partir de $0.00015 par
  tendance.
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper) scrape les offres
  d'emploi X par mot-clé, lieu, mode de travail, niveau d'expérience et
  entreprise, avec salaires et liens de candidature. Utilisez-le quand vous
  collectez des offres d'emploi publiées sur X. À partir de $0.00015 par offre.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper) scrape les
  Articles X longs en Markdown et en texte, avec couvertures, auteurs, dates et
  métriques. Utilisez-le quand vous avez besoin du corps des Articles, pas des
  posts. À partir de $0.00015 par article.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader) extrait ou
  stocke des photos, vidéos et GIF à partir de posts ou de profils, avec des
  options MP4 et de métadonnées. Utilisez-le quand vous avez besoin des fichiers
  médias eux-mêmes. À partir de $0.00015 par ligne média.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring)
  suit les mentions de marque avec pertinence, sentiment et réponses sur
  l'expérience client par IA, et compare les runs. Utilisez-le pour surveiller
  une marque dans le temps. À partir de $0.0003 par post analysé.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis)
  attribue une attitude, une intensité et une probabilité de sarcasme à chaque
  post par IA. Utilisez-le pour un sentiment général sur n'importe quel sujet. À
  partir de $0.0003 par post analysé.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)
  attribue une orientation haussière, baissière, neutre ou mixte, un type de
  contenu, une conviction et une pertinence d'actif par IA. Utilisez-le pour
  suivre les actions, la crypto ou les discussions de trading. À partir de
  $0.0003 par post analysé.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)
  attribue un format, une attribution de source et une pertinence de sujet aux
  posts d'actualité par IA. Utilisez-le pour séparer le reportage du
  commentaire. À partir de $0.0003 par post analysé.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)
  répond à vos propres questions de catégorie, de score et de oui/non pour
  chaque post par IA. Utilisez-le quand les analyses prédéfinies ne
  correspondent pas à vos étiquettes. À partir de $0.0003 par post analysé.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)
  estime un Viral Score de 0 à 100 et un verdict pour chaque post à partir de 8
  critères notés par IA. Utilisez-le quand vous étudiez pourquoi des posts
  percent ou font un flop. À partir de $0.0003 par post analysé.

## Besoin de plus que du scraping ?

Xquik propose aussi 53 outils de tableau de bord, une API REST, des webhooks
signés et un serveur MCP.

- [Documentation de l'API](https://docs.xquik.com/introduction) : guides de
  l'API REST
- [API de consultation de profil](https://docs.xquik.com/api-reference/x/twitter-profile-lookup) :
  obtenir 1 profil public
- [API des posts d'un utilisateur](https://docs.xquik.com/api-reference/x/user-tweets) :
  obtenir les posts d'un utilisateur
- [API des abonnés](https://docs.xquik.com/api-reference/x/followers) : obtenir
  les abonnés d'un compte
- [API de traduction de bio](https://docs.xquik.com/api-reference/x/user-bio-translation) :
  traduire la bio d'un profil
- [API de statut en direct](https://docs.xquik.com/api-reference/x/user-live-status) :
  vérifier si un utilisateur est en direct
- [Serveur MCP](https://docs.xquik.com/mcp/overview) : découvrir les outils pris
  en charge
- [Webhooks](https://docs.xquik.com/webhooks/overview) : livraison d'événements
  signés

## FAQ

Les réponses aux questions fréquentes, puis où trouver de l'aide.

### Ai-je besoin d'une clé API X ou d'une connexion ?

Non. X Profile Scraper de Xquik n'a besoin ni de clé API X, ni de connexion, ni
d'identifiants.

### Combien de profils puis-je scraper en 1 run ?

Autant que vous en indiquez. `maxItems` et votre limite de dépenses Apify
plafonnent les lignes.

### Puis-je exporter des profils X en CSV ou Excel ?

Oui. Exportez le dataset en JSON, CSV, Excel ou HTML depuis l'onglet Storage.

### Puis-je scraper les abonnés d'un utilisateur Twitter ?

Oui. Activez `includeFollowers`, `includeFollowing` ou
`includeVerifiedFollowers`. Chaque compte forme 1 ligne.

### Récupère-t-il le site web et la localisation d'un profil ?

Oui. `url` contient le site web et `location` contient le texte saisi par le
titulaire.
Activez `hasWebsite` et `hasLocation` pour ne garder que les profils qui les indiquent.

### Puis-je scraper des comptes protégés ?

Vous obtenez la ligne de profil publique, avec `protected: true`. X ne montre
les posts et les abonnés d'un compte protégé qu'à ses abonnés approuvés.

### Comment savoir si un compte est en direct ?

Réglez `checkLiveNow: true`. Chaque profil reçoit une ligne `profileLive` avec
`live` et sa dernière diffusion.

### Peut-il traduire les bios ?

Oui. Réglez `translateBioTo` sur un code de langue, comme `es` ou `pt-br`. Un
profil sans bio n'ajoute aucune ligne.

### Pourquoi includeLikes ne renvoie-t-il rien ?

Depuis 2024, X ne montre les posts aimés par un compte qu'à ce compte. Les
autres comptes, y compris cet Actor, ne peuvent pas les lire.

### Est-il légal de scraper des profils X ?

X Profile Scraper de Xquik collecte des champs publics de X. Les résultats
peuvent contenir des données personnelles. Assurez-vous d'avoir une finalité
licite et respectez les règles de protection des données applicables. En cas de
doute, demandez conseil à un juriste qualifié.

### Pourquoi mon run n'a-t-il renvoyé aucun résultat ?

Lisez d'abord le statut du run. Le statut d'un run vide vous invite à vérifier
vos cibles et vos filtres. La sortie gratuite `diagnostics` apparaît quand un
point demande votre attention. Son champ `stopCauses` donne à chaque cause une
`nextAction` à suivre. Le run liste chaque entrée qu'il ne peut pas lire et
indique comment la corriger.

### Puis-je utiliser l'API, les planifications et les intégrations ?

Oui. Choisissez parmi 50 tâches publiques ou l'API REST de Xquik.
L'[onglet API](https://apify.com/xquik/x-profile-scraper/api) propose des
exemples en Python, JavaScript et cURL. Les
[planifications](https://docs.apify.com/platform/schedules) Apify lancent X
Profile Scraper de Xquik selon un cron. Les agents passent par
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Utilisez
`latest`, sauf si vous avez besoin d'une build plus ancienne.

### Puis-je obtenir une solution sur mesure ?

Oui. Rendez-vous sur [xquik.com](https://xquik.com) ou lisez la
[documentation de l'API](https://docs.xquik.com/introduction). Elle couvre le
tableau de bord, l'API, le serveur MCP et les webhooks.

### Où trouver de l'aide ?

Ouvrez une issue sur la page de l'Actor ou écrivez à <support@xquik.com> avec
l'ID du run. Les diagnostics gratuits du key-value store expliquent les runs qui
demandent votre attention. Un run qui ne reçoit aucune ligne en indique la
raison dans son statut.
