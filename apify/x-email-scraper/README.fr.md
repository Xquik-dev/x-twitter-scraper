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
monde. Ses données X sont les plus complètes. X Email Scraper de Xquik récupère
les e-mails que les comptes publient sur leur propre profil X, sans cookies X ni
connexion. La plupart des autres Actors Apify facturent avant de filtrer ou de
dédupliquer. Xquik facture seulement les résultats livrés, uniques et conformes
à vos filtres.

Collez des noms d'utilisateur, scannez les abonnés d'un compte ou recherchez des
utilisateurs X, et obtenez chaque profil qui publie un e-mail, avec l'e-mail en
premier. Un profil sans e-mail n'est pas livré et ne coûte rien. Vous payez
**$0.00015 par ligne livrée**, et Apify facture l'usage de la plateforme à part.

> Xquik est un service tiers indépendant. Non affilié à X Corp.
> "Twitter" et "X" sont des marques déposées de X Corp.

## Coordonnées sur chaque ligne

- Le premier e-mail que le profil publie, en minuscules.
- Le domaine de cet e-mail et le champ du profil qui le contient, soit la bio,
  le nom ou la localisation.
- Tous les e-mails du profil, même quand ils sont écrits "name [at] site [dot]
  com".
- Les numéros de téléphone que le profil publie, comme un lien WhatsApp.
- Le site web du profil et les liens de sa bio, chacun avec son réseau, comme
  LinkedIn, GitHub ou Telegram.
- Le profil public complet, avec nom, bio, compteurs, certification, dates et
  images.
- 3 sources en 1 run, à savoir des comptes, leurs abonnés ou abonnements, et des
  recherches d'utilisateurs.
- Des filtres par domaine d'e-mail, e-mail professionnel, abonnés, ancienneté du
  compte, bio et localisation.
- Des noms d'utilisateur avec ou sans @, des URL x.com et twitter.com et des ID
  d'utilisateur numériques.
- La suppression des doublons avant la facturation.
- Des exports JSON, CSV, Excel, XML et RSS via les datasets Apify.
- Les runs reprennent depuis un état enregistré après une migration Apify.

## Comment récupérer les e-mails de profils X

1. Ouvrez X Email Scraper de Xquik dans Apify Console.
2. Collez des noms d'utilisateur, des URL de profil ou des ID d'utilisateur dans
   `twitterHandles`, ou ajoutez `searchTerms`.
3. Activez `expandFollowers` pour scanner les abonnés de chaque compte à la
   place.
4. Réglez `maxItems` pour plafonner les lignes livrées, puis cliquez sur Start.
5. Téléchargez le dataset en JSON, CSV ou Excel, ou passez par l'API Apify.

Vous ne saisissez ni cookies X, ni identifiants de connexion, ni clé API, à
aucune étape.

## Entrée

`twitterHandles` accepte un compte sous toutes ses formes, que vous pouvez
mélanger. Le run vérifie chaque compte et livre ceux qui publient un e-mail.

```json
{
  "twitterHandles": ["sample_user", "@sample_org", "https://x.com/sample_shop"],
  "maxItems": 1000
}
```

`startUrls` et `userIds` acceptent les mêmes formes. Avec `expandFollowers`, le
run lit les abonnés de chaque compte à la place et garde ceux qui publient un
e-mail. `expansionRelation` choisit `Followers` ou `Following`.

```json
{
  "twitterHandles": ["sample_org"],
  "expandFollowers": true,
  "expansionRelation": "Followers",
  "maxScan": 10000,
  "emailDomains": "example.com, example.org"
}
```

`searchTerms` recherche des utilisateurs X par nom, nom d'utilisateur ou mots de
la bio. Chaque terme donne 1 recherche.

```json
{
  "searchTerms": ["booking", "founder"],
  "businessEmailOnly": true,
  "minFollowers": 1000
}
```

Environ 1 abonné sur 400 publie un e-mail. Un scan d'abonnés lit donc bien plus
de profils qu'il n'en livre. `maxScan` plafonne les profils que le run lit dans
chaque liste ou recherche. Il vaut 10 000 au départ. Quand le run arrête une
liste à ce plafond, son statut indique combien de lignes il a lues, et vous
montez `maxScan` pour lire plus loin. Les profils scannés sont gratuits.

`emailDomains` garde les profils qui ont un e-mail sur un domaine listé ou sur
l'un de ses sous-domaines. `businessEmailOnly` garde les profils qui ont un
e-mail hors messagerie gratuite, comme Gmail. `minFollowers`, `maxFollowers`,
`minAccountAgeDays`, `verifiedOnly`, `hasWebsite`, `hasLocation`, `bioContains`
et `locationContains` affinent encore la sélection. Chaque filtre s'applique
avant la facturation.

`searchQueries` et `keyword` fonctionnent comme d'autres noms de `searchTerms`,
et `maxFollowersPerHandle` comme un autre nom de `maxScan`. Un compte que
l'entrée cite 2 fois est livré et facturé 1 seule fois. Les petits runs sans
problème n'écrivent pas `run-report` et réduisent l'usage Apify. Activez
`alwaysSaveRunRecords` pour l'écrire à chaque run.

### Migrer depuis un autre Actor d'e-mails

Collez l'entrée que vous utilisez déjà. X Email Scraper de Xquik lit ces noms de
champs d'autres Actors. Chaque ligne nomme leurs champs, puis le champ auquel
ils correspondent.

- `requireEmail` ne demande aucun champ. Chaque profil livré publie un e-mail.
- `requireWebsite` correspond à `hasWebsite`. Il garde un profil avec n'importe
  quel lien dans son champ de site web, et le statut du run le dit.
- `bioKeywords` correspond à `bioContains`. Il suffit que 1 de ses termes
  corresponde.
- `locationKeywords` avec 1 valeur correspond à `locationContains`. Avec plus de
  valeurs, le run s'arrête avant toute lecture ou facturation.
- `emailDomains` en liste correspond à `emailDomains`.
- `outputEmail`, `resolveShortLinks` ne demandent aucun champ. Chaque ligne
  contient ses e-mails et les liens complets de X.
- `findEmails`, `extractEmails` ne demandent aucun champ. Les lignes contiennent
  les e-mails qu'un profil publie sur X. Le statut du run indique que l'Actor ne
  lit aucun site lié.
- `validateEmails` ne demande aucun champ. Le statut du run indique que les
  e-mails arrivent tels que publiés, car l'Actor ne vérifie aucune boîte mail.

Si vous réglez l'un de ces noms et son champ canonique, la valeur canonique
l'emporte. Le log du run nomme le champ écarté.

## Sortie

Chaque profil qui publie un e-mail donne 1 ligne de dataset. Les coordonnées
viennent en premier, dans `email`, `emailDomain`, `emailSource` et
`contactInfo`. Le profil public complet suit, avec `id`, `username`, `name`,
`description`, `followers`, `following`, `verified`, `verifiedType`,
`createdAt`, `profilePicture` et d'autres champs. Les champs absents de la
source restent absents. X Email Scraper de Xquik n'invente aucune valeur.

Les exemples utilisent des valeurs fictives. Les résultats reflètent les données
en direct. Une ligne ressemble à ceci.

```json
{
  "email": "press@example.com",
  "emailDomain": "example.com",
  "emailSource": "bio",
  "contactInfo": {
    "emails": [
      {
        "value": "press@example.com",
        "domain": "example.com",
        "source": "bio"
      },
      {
        "value": "jane@example.org",
        "domain": "example.org",
        "source": "bio",
        "writtenAs": "jane [at] example [dot] org"
      }
    ],
    "phones": [
      {
        "value": "+14155550123",
        "source": "bio",
        "writtenAs": "+1 (415) 555-0123"
      }
    ],
    "links": [
      { "url": "https://example.com", "network": "website", "source": "url" }
    ]
  },
  "id": "1234567890",
  "username": "sample_user",
  "name": "Sample User",
  "description": "Press: press@example.com",
  "followers": 1200,
  "verified": true,
  "createdAt": "2017-03-21T20:50:14.000Z",
  "resultType": "profile",
  "sourceTarget": "sample_user"
}
```

`resultType` vaut `profile` pour un compte ou un résultat de recherche,
`profileFollower` pour un abonné et `profileFollowing` pour un compte suivi.
`sourceTarget` nomme le compte ou le terme de recherche d'où vient la ligne.

## Ce que signifie l'e-mail

Un e-mail est une adresse que le compte a écrite sur son propre profil, dans sa
bio, son nom ou sa localisation. L'Actor la renvoie telle que le compte l'a
publiée et la met en minuscules. Rien ne vérifie que l'adresse reçoit des
messages, et rien ne lit le site web vers lequel un profil renvoie. `writtenAs`
contient l'écriture d'origine du compte quand elle diffère, comme dans "jane
[at] example [dot] org".

Un numéro de téléphone apparaît seulement quand le profil l'écrit sous une forme
qui ne peut rien être d'autre, comme un lien WhatsApp ou un numéro qui commence
par +. Une année, un compteur ou un prix n'est jamais lu comme un numéro de
téléphone.

## Combien coûte la récupération des e-mails de profils X ?

Le prix est de $0.00015 par ligne livrée sur chaque plan Apify. Apify facture
votre usage de la plateforme à part.

- Une facturation par ligne de données livrée. Les diagnostics sont gratuits
  dans `diagnostics`.
- Pas de frais de démarrage ou de consultation.
- Un profil sans e-mail n'ajoute ni ligne ni frais.
- Un compte absent de X n'ajoute ni ligne ni frais.
- La déduplication a lieu avant la facturation.
- Les réglages de coût total maximal d'Apify plafonnent les lignes livrées.

Un scan d'abonnés tourne un moment pour trouver peu de lignes, car il lit
environ 350 profils par seconde et en garde environ 1 sur 400. `maxScan` borne
cette durée.

## Limites et reprise

X Email Scraper de Xquik lit de nombreux comptes, listes et recherches en 1 run.
Un redémarrage d'Apify ne fait perdre ni les lignes livrées ni la progression.
L'Actor n'ajoute aucune limite de temps. Il respecte tout timeout Apify que vous
réglez.

Le statut du run nomme les comptes que X ne trouve pas et vous invite à vérifier
le nom d'utilisateur, l'ID ou l'URL. Il nomme aussi les comptes suspendus. Une
extraction interrompue écrit un diagnostic `partial` gratuit. Les résultats
disponibles restent intacts. Lisez `availableResults`, `failedTargets`,
`retryable` et `nextAction` avant de relancer. Une sortie réussie de l'Actor
confirme la livraison, pas une extraction complète.

Le statut du run nomme chaque cause d'arrêt anticipé. `stopCauses` liste chaque
cause avec ses propres `message`, `retryable` et `nextAction`. Les causes sont
`scan_limit`, `target_not_found`, `target_suspended`, `target_failed` et
`deadline_reached`. Une cible introuvable ou suspendue, ou une liste arrêtée à
`maxScan`, n'entre dans la liste que si une autre cause a arrêté le run. Le run
est `retryable` dès qu'une cause l'est.

Une liste que le run arrête à `maxScan` ne provoque aucun arrêt anticipé. Un run
qui a des lignes va jusqu'au bout, et son statut indique combien de lignes il a
lues et vous invite à monter `maxScan`. Il n'écrit aucun diagnostic pour cela,
ce qui vous évite l'écriture d'un enregistrement. Un rapport de run compte ces
listes dans `scanLimitedTargets`.

## Actors Xquik associés

Tous les Actors Xquik partagent le même moteur d'extraction, la même facturation
après filtrage et les mêmes diagnostics. Choisissez celui qui correspond aux
données dont vous avez besoin.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper) scrape des posts
  (tweets) depuis des recherches, des fils de profil, des Listes et des ID de
  post, avec plus de 50 filtres et des exports plats. Utilisez-le quand vous
  avez besoin de données de posts sans analyse. À partir de $0.00015 par ligne.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper) scrape des
  profils ainsi que leurs posts, réponses, médias et abonnés à partir de noms
  d'utilisateur, d'ID ou d'URL. Utilisez-le quand vous partez de comptes plutôt
  que de recherches. À partir de $0.00015 par ligne.
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

## FAQ

Les réponses aux questions fréquentes, puis où trouver de l'aide.

### Ai-je besoin de cookies X, d'une clé API ou d'une connexion ?

Non. X Email Scraper de Xquik n'a besoin ni de cookies X, ni de clé API, ni de
connexion, ni d'identifiants. Chaque lecture s'exécute sur l'infrastructure de
Xquik.

### D'où viennent les e-mails ?

Ils viennent du profil lui-même, soit la bio, le nom et la localisation que le
compte a écrits. L'Actor ne lit aucun post ni aucun site web lié. Chaque e-mail
est donc une adresse que le compte a publiée sur son propre profil X.

### L'Actor vérifie-t-il qu'un e-mail fonctionne ?

Non. Il renvoie chaque adresse telle que le compte l'a publiée. Rien ne vérifie
que l'adresse reçoit des messages.

### Pourquoi un scan d'abonnés a-t-il livré peu de lignes ?

Environ 1 abonné sur 400 publie un e-mail. Le statut du run indique combien de
lignes il a lues dans une liste. Montez `maxScan` pour lire plus loin dans une
liste, ou utilisez `searchTerms` avec des mots comme booking, qui gardent bien
plus de lignes.

### Combien de profils puis-je vérifier en 1 run ?

Autant que vous en collez. Un run peut renvoyer 100 000 lignes et plus. Pour une
liste plus longue, montez `maxItems` au-dessus des 1 000 que le formulaire
propose au départ.

### Est-il légal de collecter des e-mails de profils X ?

X Email Scraper de Xquik collecte des champs publics de X. Les résultats
contiennent des données personnelles. Assurez-vous d'avoir une finalité licite,
respectez les règles de protection des données et d'envoi d'e-mails qui
s'appliquent à vous, et honorez les demandes de désinscription. En cas de doute,
demandez conseil à un juriste qualifié.

### Pourquoi mon run n'a-t-il renvoyé aucun résultat ?

Lisez d'abord le statut du run. Le statut d'un run vide vous invite à vérifier
le nom d'utilisateur, l'ID ou l'URL de chaque compte que X ne trouve pas. Un
profil sans e-mail n'ajoute aucune ligne. La sortie gratuite `diagnostics`
apparaît quand un point demande votre attention. Son `stopCauses` donne à chaque
cause une `nextAction` à suivre.

### Puis-je utiliser l'API, les planifications et les intégrations ?

Oui. Utilisez l'API Apify ou l'API REST de Xquik.
L'[onglet API](https://apify.com/xquik/x-email-scraper/api) propose des exemples
en Python, JavaScript et cURL. Les
[planifications](https://docs.apify.com/platform/schedules) Apify lancent X
Email Scraper de Xquik selon un cron. Les agents passent par
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Utilisez
`latest`, sauf si vous avez besoin d'une build plus ancienne.

### Où trouver de l'aide ?

Ouvrez une issue sur la page de l'Actor ou écrivez à <support@xquik.com> avec
l'ID du run. Les diagnostics gratuits du key-value store expliquent les runs qui
demandent votre attention. Un run qui ne reçoit aucune ligne en donne la raison
dans son statut.

### Puis-je obtenir une solution sur mesure ?

Oui. Rendez-vous sur [xquik.com](https://xquik.com) ou lisez la
[documentation de l'API](https://docs.xquik.com/introduction). Elle couvre le
tableau de bord, l'API, le serveur MCP et les webhooks.
