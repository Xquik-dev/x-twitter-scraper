[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · **Français** · [Italiano](README.it.md)

[![Framer connecte Xquik MCP aux agents de codage](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Découvrez comment Framer utilise les scrapers Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
avec Claude Code, Codex, Cursor & d'autres outils, à partir de 6:07.

Xquik est le service de scraping X (Twitter) le plus rapide et le moins cher au
monde. Ses données X sont les plus complètes. X Email Scraper de Xquik récupère
les e-mails que les comptes publient sur leur propre profil X, sans cookies X ni
connexion. La plupart des autres Actors Apify facturent avant de filtrer ou de
dédupliquer. Xquik facture seulement les résultats livrés, uniques et conformes
à vos filtres.

Collez des noms d'utilisateur, scannez les abonnés d'un compte ou recherchez des
utilisateurs X, & obtenez chaque profil qui publie un e-mail, avec l'e-mail en
premier. Un profil sans e-mail n'est pas livré & ne coûte rien. Vous payez
**$0.00015 par ligne livrée**, & Apify facture l'usage de la plateforme à part.

> Xquik est un service tiers indépendant. Non affilié à X Corp. "Twitter" et "X"
> sont des marques déposées de X Corp.

## Coordonnées sur chaque ligne

- Le premier e-mail que le profil publie, en minuscules.
- Le domaine de cet e-mail & le champ du profil qui le contient, soit la bio, le
  nom ou la localisation.
- Tous les e-mails du profil, même quand ils sont écrits "name [at] site [dot]
  com".
- Les numéros de téléphone que le profil publie, comme un lien WhatsApp.
- Le site web du profil & les liens de sa bio, chacun avec son réseau, comme
  LinkedIn, GitHub ou Telegram.
- Le profil public complet, avec nom, bio, compteurs, certification, dates &
  images.
- 3 sources en 1 run, à savoir des comptes, leurs abonnés ou abonnements, & des
  recherches d'utilisateurs.
- Des filtres par domaine d'e-mail, e-mail professionnel, abonnés, ancienneté du
  compte, bio & localisation.
- Des noms d'utilisateur avec ou sans @, des URL `x.com` & `twitter.com` & des
  ID utilisateur numériques.
- La suppression des doublons avant la facturation.
- Des exports JSON, CSV, Excel, XML & RSS via les datasets Apify.
- Les runs reprennent depuis un état enregistré après une migration Apify.

## Comment récupérer les e-mails de profils X

Vous débutez sur Apify ?
[Créez d'abord un compte gratuit](https://console.apify.com/sign-up?fpr=xquik).
Le plan gratuit ne demande aucune carte bancaire & donne $5 à dépenser chaque
mois. À $0.00015 par profil, $5 couvrent jusqu'à 33 000 profils, hors usage de
la plateforme. Revenez ensuite ici & cliquez sur Try for free.

1. Ouvrez X Email Scraper de Xquik dans Apify Console.
2. Collez des noms d'utilisateur, des URL de profil ou des ID utilisateur dans
   `twitterHandles`, ou ajoutez `searchTerms`.
3. Activez `expandFollowers` pour scanner plutôt les abonnés de chaque compte.
4. Réglez `maxItems` pour plafonner les lignes livrées, puis cliquez sur Start.
5. Téléchargez le dataset en JSON, CSV ou Excel, ou utilisez l'API Apify.

Vous ne saisissez ni cookies X, ni identifiants de connexion, ni clé API, à
aucune étape.

## Entrée

`twitterHandles` accepte un compte sous toutes ses formes, dans n'importe quel
mélange. Le run vérifie chaque compte & livre ceux qui publient un e-mail.

```json
{
  "twitterHandles": ["sample_user", "@sample_org", "https://x.com/sample_shop"],
  "maxItems": 1000
}
```

`startUrls` & `userIds` acceptent les mêmes formes. Avec `expandFollowers`, le
run lit plutôt les abonnés de chaque compte & garde ceux qui publient un e-mail.
`expansionRelation` choisit `Followers` ou `Following`.

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
liste à ce plafond, son statut indique combien de lignes il a lues, & vous
montez `maxScan` pour lire plus loin. Les profils scannés sont gratuits.

`emailDomains` garde les profils qui ont un e-mail sur un domaine listé ou sur
l'un de ses sous-domaines. `businessEmailOnly` garde les profils qui ont un
e-mail hors messagerie gratuite, comme Gmail. `minFollowers`, `maxFollowers`,
`minAccountAgeDays`, `verifiedOnly`, `hasWebsite`, `hasLocation`, `bioContains`
& `locationContains` affinent encore la sélection. Chaque filtre s'applique
avant la facturation.

`searchQueries` & `keyword` fonctionnent comme d'autres noms de `searchTerms`, &
`maxFollowersPerHandle` comme un autre nom de `maxScan`. Un compte que l'entrée
cite 2 fois est livré & facturé 1 seule fois. Les petits runs sans problème
n'écrivent pas `run-report` & réduisent l'usage Apify. Activez
`alwaysSaveRunRecords` pour l'écrire à chaque run.

### Migrer depuis un autre Actor d'e-mails

Collez l'entrée que vous utilisez déjà. X Email Scraper de Xquik lit ces noms de
champs d'autres Actors. Chaque ligne nomme leurs champs, puis le champ auquel
ils correspondent.

- `requireEmail` ne demande aucun champ. Chaque profil livré publie un e-mail.
- `requireWebsite` correspond à `hasWebsite`. Il garde un profil avec n'importe
  quel lien dans son champ de site web, & le statut du run le dit.
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

Si vous réglez l'un de ces noms & son champ canonique, la valeur canonique
l'emporte. Le log du run nomme le champ écarté.

## Sortie

Chaque profil qui publie un e-mail donne 1 ligne de dataset. Les coordonnées
viennent en premier, dans `email`, `emailDomain`, `emailSource` & `contactInfo`.
Le profil public complet suit, avec `id`, `username`, `name`, `description`,
`followers`, `following`, `verified`, `verifiedType`, `createdAt`,
`profilePicture` & d'autres champs. Les champs absents de la source restent
absents. X Email Scraper de Xquik n'invente aucune valeur.

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
`profileFollower` pour un abonné & `profileFollowing` pour un compte que
quelqu'un suit. `sourceTarget` nomme le compte ou le terme de recherche d'où
vient la ligne.

## Ce que signifie l'e-mail

Un e-mail est une adresse que le compte a écrite sur son propre profil, dans sa
bio, son nom ou sa localisation. L'Actor la renvoie telle que le compte l'a
publiée & la met en minuscules. Rien ne vérifie que l'adresse reçoit des
messages, & rien ne lit le site web vers lequel un profil renvoie. `writtenAs`
contient l'écriture du compte lui-même quand elle diffère, comme dans "jane [at]
example [dot] org".

Un numéro de téléphone apparaît seulement quand le profil l'écrit sous une forme
qui ne peut rien être d'autre, comme un lien WhatsApp ou un numéro qui commence
par +. Une année, un compteur ou un prix n'est jamais lu comme un numéro de
téléphone.

## Combien coûte la récupération des e-mails de profils X ?

Sur chaque plan Apify, le prix est de $0.00015 par ligne livrée. Apify facture
votre usage de la plateforme à part.

Pour plus de volume,
[choisissez un plan Apify](https://apify.com/pricing?fpr=xquik) avec plus
d'usage prépayé.

- Une facturation par ligne de données livrée. Les diagnostics sont gratuits
  dans `diagnostics`.
- Pas de frais de démarrage ou de consultation.
- Un profil sans e-mail n'ajoute ni ligne ni frais.
- Un compte que X n'a pas n'ajoute ni ligne ni frais.
- La déduplication passe avant la facturation.
- Les réglages de coût total maximal d'Apify plafonnent les lignes livrées.

Un scan d'abonnés tourne un moment pour trouver peu de lignes, car il lit
environ 350 profils par seconde & en garde environ 1 sur 400. `maxScan` borne
cette durée.

## Limites & reprise

X Email Scraper de Xquik lit de nombreux comptes, listes & recherches en 1 run.
Les lignes livrées & la progression survivent à un redémarrage d'Apify. L'Actor
n'ajoute aucune limite de temps propre. Il respecte tout timeout Apify que vous
réglez.

Le statut du run nomme les comptes que X ne trouve pas & vous invite à vérifier
le nom d'utilisateur, l'ID ou l'URL. Il nomme aussi les comptes suspendus. Une
extraction interrompue écrit un diagnostic `partial` gratuit. Les résultats
disponibles restent intacts. Lisez `availableResults`, `failedTargets`,
`retryable` & `nextAction` avant de relancer. Une sortie réussie de l'Actor
confirme la livraison, pas une extraction complète.

Le statut du run nomme chaque cause d'arrêt anticipé. `stopCauses` liste chaque
cause avec ses propres `message`, `retryable` & `nextAction`. Les causes sont
`scan_limit`, `target_not_found`, `target_suspended`, `target_failed` &
`deadline_reached`. Une cible introuvable ou suspendue, ou une liste arrêtée à
`maxScan`, n'entre dans la liste que si une autre cause a arrêté le run. Le run
est `retryable` dès qu'une cause l'est.

Une liste que le run arrête à `maxScan` ne termine aucun run en avance. Un run
qui a des lignes va jusqu'au bout, & son statut indique combien de lignes il a
lues & vous invite à monter `maxScan`. Il n'écrit aucun diagnostic pour cela, ce
qui vous évite l'écriture d'un enregistrement. Un rapport de run compte ces
listes dans `scanLimitedTargets`.

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

Non. X Email Scraper de Xquik n'a besoin d'aucun cookie X, d'aucune clé API,
d'aucune connexion ni d'aucun identifiant. Chaque lecture passe par
l'infrastructure de Xquik.

### D'où viennent les e-mails ?

Ils viennent du profil lui-même, dans la bio, le nom & la localisation que le
compte a écrits. L'Actor ne lit aucun post ni aucun site web lié, donc chaque
e-mail est un e-mail que le compte a publié sur son propre profil X.

### L'Actor vérifie-t-il qu'un e-mail fonctionne ?

Non. Il renvoie chaque adresse telle que le compte l'a publiée. Rien ne vérifie
que l'adresse reçoit des messages.

### Pourquoi un scan d'abonnés a-t-il livré peu de lignes ?

Environ 1 abonné sur 400 publie un e-mail. Le statut du run indique combien de
lignes le run a lues. Montez `maxScan` pour lire plus loin dans une liste, ou
utilisez `searchTerms` avec des mots comme booking, qui gardent bien plus de
lignes.

### Combien de profils puis-je vérifier en 1 run ?

Autant que vous en collez. Un run peut renvoyer 100 000 lignes & plus. Pour une
liste plus grande, montez `maxItems` au-dessus des 1 000 que le formulaire
propose au départ.

### Est-il légal de collecter des e-mails de profils X ?

X Email Scraper de Xquik demande à X des champs publics. Les résultats
contiennent des données personnelles. Assurez-vous d'avoir une finalité licite,
respectez les règles de protection des données & d'e-mailing qui s'appliquent à
vous & honorez les désinscriptions. En cas de doute, demandez conseil à un
juriste qualifié.

### Pourquoi mon run n'a-t-il renvoyé aucun résultat ?

Lisez d'abord le statut du run. Le statut d'un run vide vous invite à vérifier
le nom d'utilisateur, l'ID ou l'URL de chaque compte que X ne trouve pas. Un
profil sans e-mail n'ajoute aucune ligne. La sortie gratuite `diagnostics`
apparaît quand quelque chose demande votre attention. Son `stopCauses` donne à
chaque cause une `nextAction` à suivre.

### Puis-je utiliser l'API, les planifications & les intégrations ?

Oui. Utilisez l'API Apify ou l'API REST de Xquik.
L'[onglet API](https://apify.com/xquik/x-email-scraper/api) contient des
exemples en Python, JavaScript & cURL. Les
[planifications](https://docs.apify.com/platform/schedules) Apify lancent X
Email Scraper de Xquik selon un cron. Les agents utilisent
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Utilisez `latest`
sauf si vous avez besoin d'une build plus ancienne.

### Où trouver de l'aide ?

Ouvrez une issue dans
l'[onglet Issues](https://apify.com/xquik/x-email-scraper/issues) avec l'ID du
run. Les diagnostics gratuits du key-value store expliquent les runs qui
demandent votre attention. Un run qui ne récupère aucune ligne en indique la
raison dans son statut.

### Puis-je obtenir une solution sur mesure ?

Oui. Décrivez votre besoin dans
l'[onglet Issues](https://apify.com/xquik/x-email-scraper/issues). Xquik propose
aussi un tableau de bord, une API REST, un serveur MCP & des webhooks. Trouvez
le site web de Xquik sur son [profil Apify](https://apify.com/xquik).
