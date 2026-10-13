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
monde. Ses données X sont les plus complètes. X (Twitter) Monitor de Xquik
envoie des alertes Twitter pour les mots-clés et les comptes que vous
choisissez. Il vérifie chaque seconde, et chaque nouveau post, réponse ou
changement de profil arrive sur Discord, Telegram, Slack ou votre webhook en
quelques secondes. La plupart des autres Actors Apify facturent avant de filtrer
ou de dédupliquer. Xquik facture seulement les résultats livrés et uniques, et
ici seulement les heures pendant lesquelles un moniteur surveille.

Collez des comptes ou des mots-clés et cliquez sur Start. La surveillance
démarre aussitôt, et les alertes arrivent entre les runs. Vous payez **$0.0045
par monitor-hour**. Les événements et les alertes sont gratuits, et Apify
facture l'usage de la plateforme à part.

> Xquik est un service tiers indépendant. Non affilié à X Corp.
> "Twitter" et "X" sont des marques déposées de X Corp.

## Ce qu'envoie le moniteur Twitter

- Les nouveaux posts, réponses, citations et reposts des comptes que vous
  surveillez.
- Les posts qui correspondent à une recherche par mot-clé, avec n'importe quel
  opérateur de recherche X.
- Les posts supprimés, ainsi que les vidéos en direct et les Spaces qu'un compte
  lance.
- Les changements de profil : nom, nom d'utilisateur, bio, photo de profil,
  bannière, localisation, lien, certification, protection, post épinglé et
  disponibilité.
- Les comptes que chaque compte surveillé suit ou cesse de suivre.
- L'événement complet : le post avec son auteur, ses compteurs et ses médias, ou
  le changement.
- L'ID d'utilisateur X permanent à côté du nom d'utilisateur actuel, pour qu'un
  compte renommé garde son moniteur.
- Des alertes vers Slack et Discord dans leur propre format de message, vers
  Telegram et vers tout webhook HTTPS en JSON signé.
- Une alerte de test vers chaque nouvelle destination, avec sa réponse dans le
  statut du run.
- Chaque événement dans le dataset du run et dans 1 dataset d'historique par
  moniteur.

## Comment configurer des alertes Twitter par mot-clé

1. Ouvrez X (Twitter) Monitor de Xquik dans Apify Console.
2. Collez des noms d'utilisateur dans `twitterHandles`, ou des recherches X dans
   `searchTerms`.
3. Choisissez les événements qui envoient une alerte. `newPosts` est activé par
   défaut.
4. Collez des URL de webhook dans `webhookUrls`, ou activez `telegram`.
5. Cliquez sur Start. La surveillance démarre dans ce run.
6. Ajoutez une planification qui lance l'Actor toutes les heures, avec la même
   entrée.

Chaque run suivant facture les heures surveillées depuis le run précédent. Il
enregistre les nouveaux événements dans son dataset et se termine vite. Un
moniteur sans run pendant 24 heures se met en pause. Vos alertes vous
préviennent 4 heures avant. Le run suivant le relance et facture d'abord les
heures impayées.

La même entrée poursuit le même moniteur. Une entrée modifiée le met à jour. Une
tâche enregistrée correspond à 1 moniteur. Sans tâche, `monitorName` nomme le
moniteur, donc 2 noms séparent 2 moniteurs.

## Alertes Twitter sur Discord, Telegram et Slack

- **Discord** : collez l'URL de webhook d'un salon dans `webhookUrls`. Chaque
  alerte arrive comme un message Discord, sans bot à héberger.
- **Telegram** : activez `telegram`. Le statut du run donne un lien vers le bot
  Telegram de Xquik. Ouvrez-le et appuyez sur Start, et les alertes arrivent
  dans ce chat.
- **Slack** : collez l'URL d'un webhook entrant. Chaque alerte arrive comme un
  message Slack.
- **N'importe quelle app** : collez une URL HTTPS. Chaque alerte arrive en JSON
  signé, le même événement que celui du dataset.

Chaque nouvelle destination reçoit une alerte de test dans le run qui l'ajoute.
La page de statut indique si elle est arrivée.

## Entrée

| Champ                                | Ce qu'il fait                                                                     |
| ------------------------------------ | --------------------------------------------------------------------------------- |
| `twitterHandles`                     | Noms d'utilisateur avec ou sans @, ou URL de profils x.com.                       |
| `searchTerms`                        | Recherches X, comme `"x api" lang:en`. Chaque recherche correspond à 1 moniteur.  |
| `monitorName`                        | Nomme le moniteur pour les runs sans tâche enregistrée.                           |
| `newPosts`                           | Posts originaux. Activé par défaut.                                               |
| `replies`, `quotes`, `reposts`       | Ces types de posts.                                                               |
| `deletedPosts`, `liveVideos`         | Posts supprimés, vidéos en direct et Spaces des comptes.                          |
| `profileChanges`, `followingChanges` | Changements de profil et d'abonnements des comptes.                               |
| `eventTypes`                         | Types d'événements exacts, qui remplacent les cases à cocher.                     |
| `webhookUrls`                        | URL HTTPS, 1 par ligne. L'Actor détecte les URL Slack et Discord.                 |
| `telegram`                           | Envoie les alertes sur Telegram via un lien que le run vous donne.                |
| `since`                              | Enregistre 1 fois les événements conservés depuis une date des 30 derniers jours. |
| `stop`                               | Arrête le moniteur et coupe les alertes.                                          |

Les comptes et les mots-clés totalisent jusqu'à 100 par moniteur. Les mots-clés
envoient seulement des événements de posts. Telegram n'a besoin ni de nom
d'utilisateur ni d'ID de chat. Le statut du run donne un lien. Ouvrez-le et
appuyez sur Start, et les alertes arrivent dans ce chat.

Entrées prêtes à copier :

```json
{ "twitterHandles": ["NASA", "SpaceX"], "newPosts": true, "replies": true }
```

```json
{
  "searchTerms": ["\"your brand\" -from:yourbrand"],
  "webhookUrls": "https://hooks.slack.com/services/T000/B000/XXXX",
  "monitorName": "brand-mentions"
}
```

```json
{ "twitterHandles": ["elonmusk"], "profileChanges": true, "telegram": true }
```

## Sortie

Chaque run renvoie 4 sorties.

- **Page de statut**, l'enregistrement `STATUS.html` : ce que surveille le
  moniteur, chaque destination d'alerte, la facturation et la prochaine étape.
  L'onglet Output l'affiche.
- **Enregistrement de statut**, l'enregistrement `STATUS` : le même statut en
  JSON.
- **Nouveaux événements** : le dataset du run, avec chaque nouvel événement, du
  plus ancien au plus récent, et 1 ligne de statut à la fin.
- **Diagnostics** : l'Actor les écrit seulement quand un point demande votre
  attention.

Une ligne d'événement est l'événement exactement tel que l'API REST de Xquik le
sert, avec tous ses champs :

```json
{
  "resultType": "event",
  "id": "981",
  "type": "tweet.new",
  "occurredAt": "2026-10-13T09:00:01.000Z",
  "monitorId": "2944",
  "monitorType": "account",
  "username": "NASA",
  "xUserId": "11348282",
  "data": { "tweetId": "1977000000000000000", "text": "Liftoff!" }
}
```

Les valeurs d'exemple montrent la structure. Les données en direct diffèrent.

L'enregistrement de statut contient `state`, `targets`, `destinations`,
`eventsSaved`, `pendingEvents`, `hoursCharged`, `chargedUsd`, `hoursOwed`,
`paidThrough`, `pausesAt`, `historyDataset`, `notices` et `nextStep`. Une cible
que X n'a pas l'indique dans son `message`, et le moniteur surveille le reste.
Un nouveau webhook générique affiche son secret de signature 1 seule fois,
uniquement dans l'enregistrement de statut.

Le dataset d'historique de votre compte garde chaque événement du moniteur, 1
seule fois chacun. Son nom commence par `x-monitor-`.

## Pour les agents IA

1 appel constitue toute l'API. Chaque appel démarre ou met à jour le moniteur,
facture les heures surveillées depuis l'appel précédent et renvoie seulement ce
qui est nouveau. Aucun appel ne facture 2 fois la même heure. Les appels se
terminent vite, dans le délai qu'attend le MCP d'Apify.

Démarrer ou poursuivre un moniteur :

```json
{
  "twitterHandles": ["NASA"],
  "searchTerms": ["\"x api\" lang:en"],
  "replies": true,
  "monitorName": "agent-demo"
}
```

Ce que renvoie un appel :

- Le dataset du run contient les nouveaux événements, puis 1 ligne dont le
  `resultType` vaut `status`. Son `state` indique si le moniteur surveille, et
  `nextStep` indique quoi faire ensuite.
- L'enregistrement `STATUS` contient le même statut, avec un secret de signature
  quand l'appel a créé un webhook.

Pour qu'il continue, demandez à votre agent de créer une planification Apify qui
lance l'Actor toutes les heures avec la même entrée. Tout minuteur qui l'appelle
au moins 1 fois toutes les 24 heures fonctionne aussi. Arrêtez-le avec la même
entrée et `"stop": true`.

L'Actor lit aussi les noms que les agents devinent, comme `handles` et
`usernames`, et le statut du run indique comment il les a lus.

## Combien coûte un moniteur Twitter ?

Sur chaque plan Apify payant, une monitor-hour coûte $0.0045. 1 compte ou
mot-clé correspond à 1 moniteur. Apify facture votre usage de la plateforme à
part.

- 1 compte surveillé pendant 30 jours coûte environ $3.24.
- 10 comptes et 2 mots-clés surveillés pendant 30 jours coûtent environ $38.88.
- Les événements et les alertes sont gratuits, quel que soit leur nombre.
- Pas de frais de démarrage. Un run facture seulement des heures déjà
  surveillées.
- Une cible que X n'a pas ne surveille rien et ne coûte rien.
- Votre coût maximal par run plafonne chaque facturation. Les heures au-delà
  attendent le run suivant.

Une planification horaire garde l'usage Apify faible par rapport aux heures
qu'elle paie. Des runs toutes les quelques minutes ajoutent de l'usage et ne
changent rien aux alertes, qui arrivent de toute façon entre les runs.

La surveillance nécessite un plan Apify payant. Sur le plan gratuit, un run ne
démarre aucun moniteur et ne facture rien. Il affiche à la place les 5 derniers
posts de votre premier compte, pour que vous voyiez ce que contiendraient les
alertes.

## Limites et reprise

- Les comptes et les mots-clés totalisent jusqu'à 100 par moniteur. Utilisez 2
  tâches pour aller au-delà.
- Jusqu'à 10 URL de webhook par moniteur, plus Telegram.
- Les événements restent 30 jours, donc `since` peut les enregistrer à nouveau
  pendant ce délai.
- Un run qui s'arrête tôt laisse ses événements au run suivant. Aucun n'est
  perdu.
- Un run qui se termine entre la réservation de ses heures et leur facturation
  ne facture rien. Ces heures restent payées et gratuites.
- Chaque run écrit 1 ligne de statut gratuite, donc son dataset n'est jamais
  vide.

## Actors Xquik associés

Tous les Actors Xquik partagent le même moteur d'extraction, la même facturation
après filtrage et les mêmes diagnostics. Choisissez celui qui correspond aux
données dont vous avez besoin.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper) : scrape des
  posts (tweets) depuis des recherches, des fils de profil, des Listes et des ID
  de post, avec plus de 50 filtres et des exports plats. Utilisez-le quand vous
  avez besoin de données de posts sans analyse. À partir de $0.00015 par
  ligne.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper) : scrape
  des profils ainsi que leurs posts, réponses, médias et abonnés à partir de
  noms d'utilisateur, d'ID ou d'URL. Utilisez-le quand vous partez de comptes
  plutôt que de recherches. À partir de $0.00015 par ligne.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper) : scrape des
  réponses, des commentaires et des conversations entières sous les posts
  avec plus de 25 filtres. Utilisez-le quand vous avez besoin des échanges
  sous les posts. À partir de $0.00015 par ligne.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper) :
  scrape en masse les réponses, citations, comptes qui ont reposté et
  discussions de posts, à partir d'URL ou d'ID. Utilisez-le pour mesurer qui a
  interagi avec des posts. À partir de $0.00015 par ligne.
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper) :
  scrape les posts qui citent des posts, avec le texte, les médias, les
  compteurs, les auteurs et 11 filtres. Utilisez-le quand vous étudiez qui a
  cité des posts et ce qu'ils ont dit. À partir de $0.00015 par post.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper) : scrape
  les abonnés, les abonnements, les membres et abonnés de Liste et les
  membres de Communauté sous forme de lignes de profil. Utilisez-le quand
  vous avez besoin de listes d'audience ou de membres. À partir de
  $0.00015 par profil.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper) :
  recherche des comptes par nom d'utilisateur, bio et localisation, avec des
  filtres d'abonnés, de certification, d'ancienneté et de localisation.
  Utilisez-le pour créer des listes de comptes à partir d'une recherche. À
  partir de $0.00015 par profil.
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper) :
  vérifie où sont basés les comptes avec le libellé "Account based in" de X, la
  façon dont ils se sont connectés à X et leurs changements de nom
  d'utilisateur. Utilisez-le quand vous vérifiez où sont basés des comptes. À
  partir de $0.00015 par compte.
- [X Email Scraper](https://apify.com/xquik/x-email-scraper) : récupère les
  e-mails, téléphones et liens que les comptes publient sur leur profil, à
  partir de noms d'utilisateur, d'abonnés ou de recherches d'utilisateurs.
  Utilisez-le quand vous avez besoin des e-mails que les profils publient. À
  partir de $0.00015 par profil.
- [X List Scraper](https://apify.com/xquik/x-list-scraper) : scrape les
  posts, membres et abonnés d'une Liste à partir d'URL ou d'ID de Liste.
  Utilisez-le quand une Liste choisie définit vos sources. À partir de
  $0.00015 par ligne.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper) :
  scrape les infos, posts, recherches, membres et modérateurs d'une
  Communauté. Utilisez-le quand vos sources sont des Communautés X. À
  partir de $0.00015 par ligne.
- [X Space Scraper](https://apify.com/xquik/x-space-scraper) : trouve des Spaces
  par mot-clé et lit leurs titres, états, heures, nombres d'auditeurs, hôtes et
  intervenants. Lit aussi des diffusions par URL ou par ID. Utilisez-le quand
  vous suivez l'audio et la vidéo en direct sur X. À partir de $0.00015 par
  Space ou diffusion.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper) : scrape les
  tendances en temps réel par lieu, avec rang, volume, requête et WOEID.
  Utilisez-le pour suivre les tendances de chaque lieu. À partir de
  $0.00015 par tendance.
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper) : scrape les offres
  d'emploi X par mot-clé, lieu, mode de travail, niveau d'expérience et
  entreprise, avec salaires et liens de candidature. Utilisez-le quand vous
  collectez des offres d'emploi publiées sur X. À partir de $0.00015 par offre.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper) : scrape
  les Articles X longs en Markdown et en texte, avec couvertures, auteurs,
  dates et métriques. Utilisez-le quand vous avez besoin du corps des
  Articles, pas des posts. À partir de $0.00015 par article.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader) :
  extrait ou stocke des photos, vidéos et GIF à partir de posts ou de
  profils, avec des options MP4 et de métadonnées. Utilisez-le quand vous
  avez besoin des fichiers médias eux-mêmes. À partir de $0.00015 par
  ligne média.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring) :
  suit les mentions de marque avec pertinence, sentiment et réponses sur
  l'expérience client par IA, et compare les runs. Utilisez-le pour surveiller
  une marque dans le temps. À partir de $0.0003 par post analysé.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis) :
  attribue une attitude, une intensité et une probabilité de sarcasme à chaque
  post par IA. Utilisez-le pour un sentiment général sur n'importe quel sujet. À
  partir de $0.0003 par post analysé.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals) :
  attribue une orientation haussière, baissière, neutre ou mixte, un type de
  contenu, une conviction et une pertinence d'actif par IA. Utilisez-le pour
  suivre les actions, la crypto ou les discussions de trading. À partir de
  $0.0003 par post analysé.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor) :
  attribue un format, une attribution de source et une pertinence de sujet aux
  posts d'actualité par IA. Utilisez-le pour séparer le reportage du
  commentaire. À partir de $0.0003 par post analysé.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier) :
  répond à vos propres questions de catégorie, de score et de oui/non pour
  chaque post par IA. Utilisez-le quand les analyses prédéfinies ne
  correspondent pas à vos étiquettes. À partir de $0.0003 par post analysé.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer) :
  estime un Viral Score de 0 à 100 et un verdict pour chaque post à partir de 8
  critères notés par IA. Utilisez-le quand vous étudiez pourquoi des posts
  percent ou font un flop. À partir de $0.0003 par post analysé.

## FAQ

Les réponses aux questions fréquentes, puis où trouver de l'aide.

### Ai-je besoin de cookies X, d'une clé API ou d'une connexion ?

Non. X (Twitter) Monitor de Xquik n'a besoin ni de cookies X, ni de clé API, ni
de connexion, ni d'identifiants. Chaque vérification s'exécute sur
l'infrastructure de Xquik.

### Comment surveiller un compte Twitter ?

Collez son nom d'utilisateur dans `twitterHandles`, choisissez les événements
voulus et ajoutez une destination d'alerte. Chaque nouveau post vous parvient en
quelques secondes, et chaque événement reste dans le dataset.

### Peut-il surveiller des comptes crypto et des mentions de cryptomonnaies ?

Oui. Ajoutez les comptes que vous suivez, ou une recherche par mot-clé comme un
cashtag ou une adresse de contrat. Les posts correspondants arrivent sur Discord
ou Telegram en quelques secondes.

### À quelle vitesse arrivent les alertes ?

Xquik vérifie chaque seconde et envoie chaque événement en quelques secondes.
Les alertes n'attendent jamais un run.

### Pourquoi le run indique-t-il que la surveillance nécessite un plan payant ?

Les moniteurs travaillent entre les runs, toute la journée. Ils nécessitent donc
un plan Apify payant. Passez à un plan supérieur, puis relancez avec la même
entrée.

### Que se passe-t-il quand j'arrête le moniteur ?

Le run arrête chaque cible et coupe les alertes. Il facture les heures
surveillées jusque-là. Les événements déjà conservés restent lisibles pendant 30
jours.

### Comment vérifier la signature d'un webhook ?

Un nouveau webhook générique reçoit un secret de signature, affiché 1 seule fois
dans l'enregistrement `STATUS`. Xquik signe chaque livraison avec ce secret,
comme pour ses webhooks REST.

### Puis-je utiliser l'API, les planifications et les intégrations ?

Oui. Utilisez l'API Apify ou l'API REST de Xquik.
L'[onglet API](https://apify.com/xquik/x-twitter-monitor/api) propose des
exemples en Python, JavaScript et cURL. Les
[planifications](https://docs.apify.com/platform/schedules) Apify gardent le
moniteur actif. Les agents passent par
[Apify MCP](https://docs.apify.com/platform/integrations/mcp).

### Est-il légal de surveiller des comptes X ?

X (Twitter) Monitor de Xquik collecte des données publiques de X. Les résultats
peuvent contenir des données personnelles. Assurez-vous d'avoir une finalité
licite et respectez les règles de protection des données qui s'appliquent à
vous. En cas de doute, demandez conseil à un juriste qualifié.

### Où trouver de l'aide ?

Ouvrez une issue sur la page de l'Actor ou écrivez à <support@xquik.com> avec
l'ID du run. La page de statut explique chaque run, et les diagnostics gratuits
couvrent les runs qui demandent votre attention.

### Puis-je obtenir une solution sur mesure ?

Oui. Rendez-vous sur [xquik.com](https://xquik.com) ou lisez la
[documentation de l'API](https://docs.xquik.com/introduction). Elle couvre le
tableau de bord, l'API, le serveur MCP et les webhooks.
