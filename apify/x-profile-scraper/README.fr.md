[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · **Français** · [Italiano](README.it.md)

[![Framer connecte Xquik MCP aux agents de codage](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Découvrez comment Framer utilise les scrapers Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
avec Claude Code, Codex, Cursor & d'autres outils, à partir de 6:07.

Xquik est le service de scraping X (Twitter) le plus rapide et le moins cher au
monde. Ses données X sont les plus complètes. X Profile Scraper de Xquik
collecte les profils, posts, réponses, médias & abonnés de n'importe quel nom
d'utilisateur. La plupart des autres Actors Apify facturent avant de filtrer ou
de dédupliquer. Xquik facture seulement les résultats livrés, uniques et
conformes à vos filtres.

Consultez des comptes Twitter en masse & lisez les profils sans compte X.
Scrapez les profils, posts, réponses, médias & abonnés X à partir de noms
d'utilisateur, d'ID ou d'URL. Vous payez **$0.00015 par ligne livrée**, & Apify
facture l'usage de la plateforme à part. Vous n'avez besoin ni de clé API X ni
de connexion.

> Xquik est un service tiers indépendant. Non affilié à X Corp. "Twitter" et "X"
> sont des marques déposées de X Corp.

## Que fait X Profile Scraper ?

X Profile Scraper de Xquik renvoie des profils X (Twitter) publics à partir de
noms d'utilisateur, d'ID utilisateur numériques ou d'URL de profil. Chaque
profil peut ajouter ses posts, réponses, médias, Temps forts, abonnés,
abonnements & abonnés certifiés. Il traduit aussi les bios & vérifie qui diffuse
en direct en ce moment.

### Cas d'usage

- Enrichissez vos listes de prospects avec les bios, sites web, localisations &
  tailles d'audience.
- Comparez les comptes concurrents par abonnés, posts & certification.
- Évaluez des créateurs par audience, ancienneté du compte & engagement.
- Archivez les posts, médias & Temps forts d'un compte.
- Cartographiez le réseau d'un compte grâce à ses abonnés & abonnements.
- Surveillez les diffusions en direct de créateurs & de marques.
- Lisez dans votre langue les bios d'autres marchés.

## Pourquoi utiliser X Profile Scraper ?

- **Tout un compte en 1 run.** Donnez des noms d'utilisateur, des ID ou des URL.
  Ajoutez comme lignes les posts, réponses, médias, Temps forts, abonnés,
  abonnements ou abonnés certifiés.
- **Vérification des diffusions en direct.** `checkLiveNow` indique qui est en
  direct maintenant, avec sa dernière diffusion.
- **Les contacts publiés sur chaque ligne.** `email` & `contactInfo` contiennent
  les e-mails, téléphones & liens que publie un profil. Gardez seulement les
  e-mails professionnels ou les domaines que vous choisissez.
- **Origine & historique du compte.** `accountBasedIn` contient le libellé de
  pays ou de région de X. `usernameChanges` montre combien de fois un nom
  d'utilisateur a changé.
- **Des filtres pour les profils & les posts.** Gardez les profils selon la
  taille de l'audience, l'âge du compte & la certification. Gardez les posts
  selon la date, la langue, les médias & l'engagement.

### Résultats complets

- L'historique d'un compte revient complet, anciens posts compris.
- Les posts de profil sans réponses gardent quand même les fils de l'auteur.
- Les lectures de profil incluent le post épinglé, marqué comme épinglé.
- Les exports d'abonnés & d'abonnements renvoient des listes complètes.
- Les exports d'abonnés certifiés renvoient aussi des listes complètes.
- Chaque résultat contient les données les plus complètes dont X dispose.

### Lignes exactes

- Les reposts portent le texte d'origine en entier.
- Chaque ID d'une ligne reste exact.
- Les mentions, liens, hashtags & passages mis en avant pointent vers le bon
  endroit du texte.
- Les badges de certification correspondent à ce qu'affiche `x.com`.
- Les lignes ne contiennent que des données publiques.
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
- Vous pouvez traduire les posts & les bios dans votre langue.

### Contrôles qualité

- Chaque champ que X affiche est fourni, omis exprès ou prouvé absent.
- Xquik teste chaque lecture en direct sur X.

## Quelles données X Profile Scraper peut-il extraire ?

Les lignes de profil utilisent `resultType: "profile"`. Voici les champs
principaux.

| Champ                    | Description                                      |
| ------------------------ | ------------------------------------------------ |
| `id`                     | ID utilisateur numérique                         |
| `username`               | Nom d'utilisateur sans `@`                       |
| `name`                   | Nom affiché                                      |
| `description`            | Texte de la bio                                  |
| `url`                    | Site web sur les lignes de profil                |
| `location`               | Localisation saisie par le titulaire             |
| `email`                  | Premier e-mail que le profil publie              |
| `contactInfo`            | E-mails, téléphones & liens que le profil publie |
| `followers`              | Nombre d'abonnés                                 |
| `following`              | Nombre d'abonnements                             |
| `statusesCount`          | Nombre de posts                                  |
| `mediaCount`             | Nombre de posts avec médias                      |
| `favouritesCount`        | J'aime donnés par le compte                      |
| `listedCount`            | Listes publiques qui incluent le compte          |
| `createdAt`              | Date de création du compte                       |
| `verified`               | Indique si X signale une certification           |
| `isBlueVerified`         | Indique si le compte a la certification X Blue   |
| `verifiedType`           | Catégorie de certification, comme `Government`   |
| `profilePicture`         | URL de la photo de profil en 48 px               |
| `profilePictureOriginal` | La même image en taille réelle, à télécharger    |
| `coverPicture`           | URL de la bannière                               |
| `pinnedTweetIds`         | ID des posts épinglés                            |
| `professional`           | Catégorie & type professionnels                  |
| `accountBasedIn`         | Libellé de pays ou de région de X, sans garantie |
| `connectedVia`           | Moyen de première connexion du compte à X        |
| `usernameChanges`        | Nombre de changements de nom & date du dernier   |
| `birthdate`              | Éléments de date de naissance rendus publics     |
| `subscribersCount`       | Nombre d'abonnés payants, quand X l'envoie       |
| `tipJar`                 | Liens de pourboire publics                       |
| `protected`              | Indique si le compte protège ses posts           |
| `unavailable`            | Indique si le compte est indisponible            |
| `sourceTarget`           | Nom d'utilisateur, ID ou URL que vous avez saisi |

Le schéma du dataset documente tous les autres champs, comme
`identityVerification`, `isAutomated`, `automatedBy`, `withheldInCountries` &
`verificationReason`.

Les lignes optionnelles gardent le format des réponses de l'API REST de Xquik.

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

Les lignes n'incluent jamais l'état visible par vous seul, par exemple si vous
suivez ou bloquez un compte.

## Comment utiliser X Profile Scraper pour scraper des données de profil ?

Vous débutez sur Apify ?
[Créez d'abord un compte gratuit](https://console.apify.com/sign-up?fpr=xquik).
Le plan gratuit ne demande aucune carte bancaire & donne $5 à dépenser chaque
mois. À $0.00015 par ligne, $5 couvrent jusqu'à 33 000 lignes, hors usage de la
plateforme. Revenez ensuite ici & cliquez sur Try for free.

Suivez ces étapes dans Apify Console.

1. Ouvrez un [exemple de tâche](#exemples-de-tâches) ou l'onglet Input.
2. Ajoutez des noms d'utilisateur à `twitterHandles`, des URL à `startUrls` ou
   des ID à `userIds`.
3. Activez les ressources dont vous avez besoin, comme `includeTweets`.
4. Réglez `maxItems` & vos filtres éventuels, puis cliquez sur Start.
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
`{ "url": "..." }`. `userIds` accepte des ID utilisateur X numériques.

```json
{
  "startUrls": ["https://x.com/nasa", { "url": "https://x.com/OpenAI" }],
  "userIds": ["11348282"],
  "maxItems": 100
}
```

Le run lit 1 seule fois un nom d'utilisateur répété.

### Ajouter les posts, réponses & médias

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
filtrées n'atteignent jamais le dataset, donc vous ne les payez jamais.

### Exporter les abonnés & abonnements

```json
{
  "twitterHandles": ["apify"],
  "includeFollowers": true,
  "minFollowers": 1000,
  "verifiedOnly": true,
  "maxItems": 1000
}
```

`includeFollowers`, `includeFollowing` & `includeVerifiedFollowers` ajoutent 1
ligne de profil par compte. Les filtres de profils s'appliquent à ces lignes &
aux profils principaux.

### Traduire les bios

```json
{ "twitterHandles": ["nasa", "SpaceX"], "translateBioTo": "es" }
```

Chaque traduction forme 1 ligne `profileBioTranslation` avec `text`, `language`
& `sourceLanguage`. Un profil sans bio n'ajoute ni ligne ni frais.

### Voir qui est en direct maintenant

```json
{ "twitterHandles": ["nasa", "SpaceX"], "checkLiveNow": true }
```

Chaque contrôle forme 1 ligne `profileLive` avec `live`, `userId`, `userName` &
`broadcast`. `broadcast` contient la dernière diffusion du profil, en cours ou
terminée, ou null. Un profil introuvable n'ajoute aucune ligne.

## Exemples de tâches

Choisissez parmi 50 tâches publiques. Chacune a une entrée limitée & une vue de
dataset adaptée. Modifiez une tâche avant de la lancer.

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
Apify. Apify facture votre usage de la plateforme à part. Xquik facture une fois
par ligne de données livrée. Les diagnostics sont gratuits dans la sortie
`diagnostics`.

Pour plus de volume,
[choisissez un plan Apify](https://apify.com/pricing?fpr=xquik) avec plus
d'usage prépayé.

- Vous n'avez besoin d'aucun abonnement Xquik.
- Vous ne payez pas de frais séparés de démarrage, de profil ou de requête.
- Les filtres & la déduplication passent avant la facturation. Vous ne payez
  jamais les lignes filtrées ou en double.
- Un profil sans bio n'entraîne pas de frais de traduction.
- Un profil introuvable n'entraîne pas de frais de contrôle du direct.
- Les réglages de coût total maximal d'Apify plafonnent les lignes livrées.

Un run qui rencontre un problème, ou un gros run, écrit aussi un enregistrement
`run-report`. Un petit run sans problème ne l'écrit pas & réduit l'usage Apify.
Activez `alwaysSaveRunRecords` pour l'écrire à chaque run.

Pour plafonner ce qu'un run peut dépenser, consultez les
[options de run](#options-de-run).

## Runs vides, partiels & arrêtés

X Profile Scraper de Xquik explique gratuitement les runs vides, partiels &
arrêtés. Le statut du run dit pourquoi il s'est arrêté. Il compte aussi les
résultats facturés & les cibles lues.

### Résultats vides

Le statut d'un run vide vous invite à vérifier vos cibles & vos filtres. Les
lignes filtrées ne consomment jamais votre limite de résultats. Un run qui lit
chaque cible & ne récupère aucune ligne n'écrit aucun enregistrement. Son statut
explique pourquoi & ce qu'il faut changer.

Depuis 2024, X montre les posts qu'un compte a aimés seulement à ce compte.
`includeLikes` ne renvoie aucune ligne `profileLike` pour les autres comptes.

### Runs partiels

Une extraction interrompue écrit un diagnostic `partial` gratuit. Les lignes
livrées restent dans le dataset. Lisez `availableResults`, `failedTargets`,
`retryable` & `nextAction` avant de relancer. Une sortie réussie de l'Actor
confirme la livraison, pas une extraction complète.

### Causes d'arrêt

Le statut du run nomme chaque cause d'arrêt anticipé. `stopCauses` liste chaque
cause avec ses propres `message`, `retryable` & `nextAction`. Les causes sont
`target_not_found`, `target_suspended`, `target_failed`,
`pagination_safety_limit` & `deadline_reached`. `target_suspended` nomme les
comptes que X a suspendus. Une cible introuvable ou suspendue n'entre dans la
liste que si une autre cause a arrêté le run. Le run est `retryable` dès qu'une
cause l'est.

## Entrée

L'onglet Input liste toutes les options. Renseignez au moins 1 champ parmi
`twitterHandles`, `startUrls` ou `userIds`. Tous les autres champs sont
facultatifs.

| Champ                          | Rôle                                                            |
| ------------------------------ | --------------------------------------------------------------- |
| `twitterHandles`               | Noms d'utilisateur, avec ou sans `@`                            |
| `startUrls`                    | URL de profil sur `x.com` ou `twitter.com`                      |
| `userIds`                      | ID utilisateur X numériques                                     |
| `maxItems`                     | Plafond de lignes livrées sur tout le run                       |
| `maxItemsPerTarget`            | Plafond de lignes par profil ou ressource                       |
| `includeTweets`                | Ajoute l'onglet Posts                                           |
| `includeReplies`               | Ajoute l'onglet Réponses                                        |
| `includeMedia`                 | Ajoute l'onglet Médias                                          |
| `includeHighlights`            | Ajoute l'onglet Temps forts                                     |
| `includeLikes`                 | Ajoute les posts aimés, que X masque aux autres comptes         |
| `includeFollowers`             | Ajoute les abonnés                                              |
| `includeFollowing`             | Ajoute les comptes suivis                                       |
| `includeVerifiedFollowers`     | Ajoute les abonnés certifiés                                    |
| `translateBioTo`               | Traduit chaque bio vers un code de langue, comme `es`           |
| `checkLiveNow`                 | Vérifie si chaque profil diffuse en direct en ce moment         |
| `sinceDate`, `untilDate`       | Garde les posts dans une plage de dates                         |
| `language`                     | Garde les posts dans 1 code de langue                           |
| `mediaType`                    | Garde les posts avec images, vidéos, GIF, liens ou sans média   |
| `minViews`, `minLikes`         | Garde les posts au-dessus d'un nombre de vues ou de J'aime      |
| `minReplies`, `minRetweets`    | Garde les posts au-dessus d'un nombre de réponses ou de reposts |
| `nativeRetweets`               | Garde seulement les reposts natifs                              |
| `verifiedOnly`                 | Garde les auteurs ou profils certifiés                          |
| `blueVerifiedOnly`             | Garde les auteurs ou profils que X marque certifiés Blue        |
| `verifiedType`                 | Garde les profils avec 1 type de certification                  |
| `minFollowers`, `maxFollowers` | Garde les profils dans une fourchette d'audience                |
| `minAccountAgeDays`            | Garde les profils âgés d'au moins ce nombre de jours            |
| `minFollowing`, `maxFollowing` | Garde les profils dans une fourchette d'abonnements             |
| `minStatuses`, `maxStatuses`   | Garde les profils dans une fourchette de nombre de posts        |
| `hasWebsite`, `hasLocation`    | Garde les profils qui indiquent un site web ou une localisation |
| `hasEmail`                     | Garde les profils qui publient un e-mail                        |
| `businessEmailOnly`            | Garde les profils avec un e-mail hors messagerie gratuite       |
| `emailDomains`                 | Garde les profils avec un e-mail sur ces domaines               |
| `bioContains`                  | Garde les profils dont la bio contient 1 de ces mots            |
| `locationContains`             | Garde les profils dont la localisation contient ce texte        |
| `usernameContains`             | Garde les profils dont le nom d'utilisateur contient ce texte   |
| `dedupeAcrossTargets`          | Retire les lignes répétées entre profils avant la facturation   |

### Migrer depuis un autre Actor de profils

Collez l'entrée que vous utilisez déjà. X Profile Scraper de Xquik lit ces noms
de champs d'autres Actors de profils. Chaque ligne nomme leurs champs, puis le
champ auquel ils correspondent.

- `profiles`, `userNames`, `usernames`, `handles`, `screenNames` correspondent à
  `twitterHandles`.
- `urls`, `profileUrls` correspondent à `startUrls`.
- `maxProfiles`, `maxResults` correspondent à `maxItems`.
- `shouldScrapeFollowers`, `shouldScrapeFollowings` correspondent à
  `includeFollowers`, `includeFollowing`.
- `requireEmail` correspond à `hasEmail`.
- `requireWebsite` correspond à `hasWebsite`. Il garde un profil avec n'importe
  quel lien dans son champ de site web, & le statut du run le dit.
- `filterByBlueVerified` correspond à `blueVerifiedOnly`. `false` arrête le run
  avant toute lecture ou facturation.
- `bioKeywords` correspond à `bioContains`. Il suffit que 1 de ses termes
  corresponde.
- `locationKeywords` avec 1 valeur correspond à `locationContains`. Plus de
  valeurs arrêtent le run avant toute lecture ou facturation.
- `emailDomains` en liste correspond à `emailDomains`.
- `outputEmail`, `resolveShortLinks` ne demandent aucun champ. Chaque ligne
  contient ses e-mails & les liens complets de X.
- `findEmails`, `extractEmails` ne demandent aucun champ. Les lignes contiennent
  les e-mails qu'un profil publie sur X. Le statut du run indique que l'Actor ne
  lit aucun site lié.
- `validateEmails` ne demande aucun champ. Le statut du run indique que les
  e-mails arrivent tels que publiés, car l'Actor ne vérifie aucune boîte mail.

`category` réglé sur `user_info` ne change rien. Une catégorie qui relève d'un
autre Actor, comme `tweets` ou `followers`, arrête le run. Il ne lit & ne
facture rien. Le message nomme l'Actor à utiliser. Si vous réglez un alias & son
champ canonique, la valeur canonique l'emporte. Le log du run nomme l'alias
écarté.

### Choisir les bonnes entrées

- Pour une simple fiche de profil, indiquez des noms d'utilisateur & laissez
  toutes les options `include` désactivées.
- Pour archiver un compte, activez `includeTweets`, `includeMedia` &
  `includeHighlights`, & réglez `sinceDate`.
- Pour les meilleurs contenus, ajoutez `minLikes` ou `minViews` à
  `includeTweets`.
- Pour des listes de prospects, activez `includeFollowers` avec `minFollowers` &
  `minAccountAgeDays`.
- Pour le chevauchement d'audience, indiquez 2 noms d'utilisateur, activez
  `includeFollowers` & réglez `dedupeAcrossTargets: false`. Un abonné commun
  apparaît alors sous chaque nom d'utilisateur.

## Sortie

Chaque ligne est un objet JSON. Le schéma du dataset donne à chaque champ un
titre & une description, donc les agents IA peuvent lire les lignes sans
deviner.

Les exemples utilisent des valeurs fictives. Les résultats reflètent les données
en direct. Une ligne de profil ressemble à ceci.

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
n'indique ni nationalité, ni résidence, ni identité, ni lieu d'inscription, ni
lieu de publication, ni position exacte. `observedAt` enregistre l'heure de
récupération. `accountBasedIn` vaut null quand X n'affiche aucun libellé. Quand
X le masque, la ligne porte plutôt `accountBasedInUnavailable: true`.

Exportez le dataset en JSON, CSV, Excel ou HTML.

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

Nommez une colonne calculée dans `fields` ou `renameFields` pour l'ajouter.

| Colonne             | Formule                                                                                 |
| ------------------- | --------------------------------------------------------------------------------------- |
| `totalEngagement`   | `likeCount` + `replyCount` + `retweetCount` + `quoteCount`. Un compteur absent ajoute 0 |
| `engagementRate`    | `totalEngagement` × 100 ÷ les `followers` de l'auteur, à 4 décimales                    |
| `engagementPerView` | `totalEngagement` × 100 ÷ `viewCount`, à 4 décimales                                    |

`totalEngagement` vaut `null` pour une ligne sans ces compteurs. Un taux vaut
`null` quand son diviseur manque ou vaut 0.

## Options de run

- Réglez le coût total maximal d'Apify pour plafonner le coût du run. Laissez
  `maxItems` élevé pour obtenir le plus de lignes possible dans ce budget.
- Réglez `maxTotalChargeUsd` dans l'API Apify, ou Max cost per run dans Console.
- Mettez tous vos profils dans 1 run. Chaque run paie à Apify le même coût de
  démarrage.
- `maxConcurrency` fixe le nombre de profils traités en même temps. La valeur
  par défaut est le réglage sûr le plus rapide.
- Utilisez les moniteurs de comptes Xquik pour des vérifications à la seconde &
  des webhooks signés. Les moniteurs actifs vérifient chaque seconde.

Choisissez `latest` pour chaque run afin d'obtenir chaque correctif publié. Les
tâches enregistrées & les planifications gardent leur propre choix de build,
donc laissez-le sur `latest`.

## Actors Xquik associés

Tous les Actors Xquik partagent le même moteur d'extraction, la même facturation
après filtrage & les mêmes diagnostics. Choisissez celui qui correspond aux
données dont vous avez besoin.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper) scrape des posts
  depuis des recherches, des fils de profil, des Listes & des ID de post, avec
  plus de 50 filtres & des exports plats. Utilisez-le quand vous avez besoin de
  données de posts sans analyse. À partir de $0.00015 par ligne.
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

### Ai-je besoin d'une clé API X ou d'une connexion ?

Non. X Profile Scraper de Xquik n'a besoin d'aucune clé API X, d'aucune
connexion ni d'aucun identifiant.

### Combien de profils puis-je scraper en 1 run ?

Autant que vous en indiquez. `maxItems` & votre limite de dépense Apify
plafonnent les lignes.

### Puis-je exporter des profils X en CSV ou Excel ?

Oui. Exportez le dataset en JSON, CSV, Excel ou HTML depuis l'onglet Storage.

### Puis-je scraper les abonnés d'un compte Twitter ?

Oui. Activez `includeFollowers`, `includeFollowing` ou
`includeVerifiedFollowers`. Chaque compte forme 1 ligne.

### Récupère-t-il le site web & la localisation d'un profil ?

Oui. `url` contient le site web & `location` contient le texte saisi par le
titulaire. Réglez `hasWebsite` & `hasLocation` pour garder seulement les profils
qui les indiquent.

### Puis-je scraper des comptes protégés ?

Vous obtenez la ligne de profil public, avec `protected: true`. X montre les
posts & les abonnés d'un compte protégé seulement à ses abonnés approuvés.

### Comment savoir si un compte est en direct maintenant ?

Réglez `checkLiveNow: true`. Chaque profil reçoit une ligne `profileLive` avec
`live` & sa dernière diffusion.

### Peut-il traduire les bios ?

Oui. Réglez `translateBioTo` sur un code de langue, comme `es` ou `pt-br`. Un
profil sans bio n'ajoute aucune ligne.

### Pourquoi includeLikes ne renvoie-t-il rien ?

Depuis 2024, X montre les posts qu'un compte a aimés seulement à ce compte. Les
autres comptes, y compris cet Actor, ne peuvent pas les lire.

### Est-il légal de scraper des profils X ?

X Profile Scraper de Xquik demande à X des champs publics. Les résultats peuvent
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
L'[onglet API](https://apify.com/xquik/x-profile-scraper/api) contient des
exemples en Python, JavaScript & cURL. Les
[planifications](https://docs.apify.com/platform/schedules) Apify lancent X
Profile Scraper de Xquik selon un cron. Les agents utilisent
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Utilisez `latest`
sauf si vous avez besoin d'une build plus ancienne.

### Puis-je obtenir une solution sur mesure ?

Oui. Décrivez votre besoin dans
l'[onglet Issues](https://apify.com/xquik/x-profile-scraper/issues). Xquik
propose aussi un tableau de bord, une API REST, un serveur MCP & des webhooks.
Trouvez le site web de Xquik sur son [profil Apify](https://apify.com/xquik).

### Où trouver de l'aide ?

Ouvrez une issue dans
l'[onglet Issues](https://apify.com/xquik/x-profile-scraper/issues) avec l'ID du
run. Les diagnostics gratuits du key-value store expliquent les runs qui
demandent votre attention. Un run qui ne récupère aucune ligne en indique la
raison dans son statut.
