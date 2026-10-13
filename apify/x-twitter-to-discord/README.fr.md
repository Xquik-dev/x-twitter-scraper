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

https://www.youtube.com/watch?v=4UOSpoOoC3Y

[Découvrez comment Framer utilise les scrapers Xquik avec Claude Code, Codex, Cursor et d'autres outils, à partir de 6:07.](https://youtu.be/4UOSpoOoC3Y?t=367)

Xquik est le service de scraping X (Twitter) le plus rapide et le moins cher au
monde. Ses données X sont les plus complètes. X (Twitter) to Discord Bot de
Xquik envoie dans votre salon Discord chaque nouveau tweet, réponse, citation et
repost des comptes que vous choisissez. Il capte généralement chacun en moins
d'une seconde après son affichage sur X. La plupart des autres Actors Apify
facturent avant de filtrer ou de dédupliquer. Xquik facture seulement les
résultats livrés et uniques, et ici seulement les heures pendant lesquelles un
moniteur surveille.

Collez une URL de webhook Discord et les comptes à surveiller, puis cliquez sur
Start. Les alertes arrivent dans votre salon entre les runs, sans bot à héberger
ni à inviter. Vous payez **$0.0045 par monitor-hour**. Les événements et les
alertes sont gratuits, et Apify facture l'usage de la plateforme à part.

> Xquik est un service tiers indépendant. Non affilié à X Corp.
> "Twitter" et "X" sont des marques déposées de X Corp.

## Ce qu'envoie le bot Twitter vers Discord

- Chaque nouveau tweet, réponse, citation et repost des comptes que vous
  surveillez, généralement capté en moins d'une seconde après son affichage sur
  X.
- Chaque nouveau tweet que la recherche Récent de X montre pour votre mot-clé,
  avec n'importe quel opérateur de recherche X.
- Les vidéos en direct, les Spaces, les tweets supprimés, les changements de
  profil, les abonnements et les abonnés, quand vous les activez.
- Chaque alerte sous forme de message Discord qui nomme le compte et
  l'événement, contient le texte du tweet et renvoie vers le tweet sur X. Aucune
  mention dans un tweet ne notifie qui que ce soit.
- Un message de test vers chaque nouvelle URL Discord, avec sa réponse dans le
  statut du run.
- Chaque événement dans le dataset du run et dans 1 dataset d'historique par
  tâche enregistrée ou nom de moniteur.

## Comment envoyer des tweets sur Discord

La surveillance nécessite un plan Apify payant.
[Choisissez un plan](https://apify.com/pricing?fpr=xquik), puis revenez ici et
cliquez sur Try for free.

1. Dans Discord, ouvrez les paramètres de votre salon, puis Intégrations, puis
   Webhooks.
2. Créez un webhook et copiez son URL.
3. Ouvrez X (Twitter) to Discord Bot de Xquik dans Apify Console et collez l'URL
   dans `discordWebhookUrl`.
4. Collez des noms d'utilisateur dans `twitterHandles`, ou des recherches X dans
   `searchTerms`.
5. Cliquez sur Start. La surveillance démarre dans ce run, et le salon reçoit un
   message de test.
6. Ajoutez une planification qui lance l'Actor toutes les heures, avec la même
   entrée.

Chaque run suivant facture les heures surveillées depuis le run précédent. Il
enregistre les nouveaux événements dans son dataset et se termine vite. Un
moniteur sans run pendant 24 heures se met en pause. Votre salon reçoit un
avertissement 4 heures avant. Le run suivant le relance et facture d'abord les
heures impayées.

## Entrée

| Champ                                                   | Ce qu'il fait                                                                        |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `discordWebhookUrl`                                     | L'URL de webhook de votre salon Discord.                                             |
| `twitterHandles`                                        | Noms d'utilisateur avec ou sans @, ou URL de profils `x.com`, 1 par ligne.           |
| `searchTerms`                                           | Recherches X, comme `"x api" lang:en`. Chaque recherche correspond à 1 moniteur.     |
| `monitorName`                                           | Nomme cet ensemble de comptes et de mots-clés, pour les runs sans tâche enregistrée. |
| `newPosts`, `replies`, `quotes`, `reposts`              | Nouveaux tweets, réponses, tweets cités et reposts. Activés par défaut.              |
| `deletedPosts`, `liveVideos`                            | Tweets supprimés, vidéos en direct et Spaces des comptes.                            |
| `profileChanges`, `followingChanges`, `followerChanges` | Changements de profil, abonnements et abonnés des comptes.                           |
| `eventTypes`                                            | Types d'événements exacts, qui remplacent les cases à cocher.                        |
| `webhookUrls`, `telegram`                               | Slack, tout webhook HTTPS ou Telegram, en plus de Discord.                           |
| `since`                                                 | Enregistre 1 fois les événements conservés depuis une date des 30 derniers jours.    |
| `stop`                                                  | Arrête le moniteur et coupe les alertes.                                             |

1 entrée accepte jusqu'à 100 comptes et mots-clés. Les mots-clés envoient
seulement des événements de tweets. Un run sans URL Discord surveille quand même
et enregistre les nouveaux événements dans son dataset, et son statut vous
demande d'ajouter une URL de webhook.

Ces entrées sont prêtes à copier.

```json
{
  "discordWebhookUrl": "https://discord.com/api/webhooks/000/XXXX",
  "twitterHandles": ["NASA"]
}
```

```json
{
  "discordWebhookUrl": "https://discord.com/api/webhooks/000/XXXX",
  "searchTerms": ["\"your game\" -from:yourstudio"],
  "monitorName": "game-mentions"
}
```

## Sortie

Chaque run renvoie 4 sorties.

- **Page de statut**, l'enregistrement `STATUS.html`. Elle indique si le
  moniteur surveille, l'unique prochaine étape avec un bouton, ce que le run a
  enregistré et facturé, les cibles et chaque destination d'alerte. L'onglet
  Output l'affiche.
- **Enregistrement de statut**, l'enregistrement `STATUS`. Il contient le même
  statut en JSON.
- **Nouveaux événements**, le dataset du run. Il contient chaque nouvel
  événement, du plus ancien au plus récent, et 1 ligne de statut à la fin.
- **Diagnostics**, que l'Actor écrit seulement quand un point demande votre
  attention.

Une ligne d'événement est l'événement exactement tel que l'API REST de Xquik le
sert, avec tous ses champs. L'enregistrement de statut contient `state`,
`targets`, `destinations`, `eventsSaved`, `hoursCharged`, `paidThrough`,
`pausesAt`, `nextStep`, `nextStepAction` et `nextStepUrl`, tels que X (Twitter)
to Discord Bot les affiche.

Le dataset d'historique de votre compte garde chaque événement du moniteur, 1
seule fois chacun. Son nom commence par `x-monitor-`.

## Pour les agents IA

1 appel constitue toute l'API. Chaque appel démarre ou met à jour le moniteur,
facture les heures surveillées depuis l'appel précédent et renvoie seulement ce
qui est nouveau. Aucun appel ne facture 2 fois la même heure. Un appel qui
démarre ou met à jour un moniteur se termine vite, dans le délai qu'attend le
MCP d'Apify. Un arrêt prend environ une demi-minute, car il collecte d'abord les
derniers événements.

Cette entrée démarre ou poursuit un moniteur.

```json
{
  "discordWebhookUrl": "https://discord.com/api/webhooks/000/XXXX",
  "twitterHandles": ["NASA"],
  "monitorName": "agent-demo"
}
```

Le dataset du run contient les nouveaux événements, puis 1 ligne dont le
`resultType` vaut `status`. Son `state` indique si le moniteur surveille, et
`nextStep` indique quoi faire ensuite. Pour vérifier un moniteur, appelez de
nouveau l'Actor avec la même entrée. Cela ne change rien et facture seulement
des heures déjà surveillées.

Un moniteur a besoin d'un run au moins 1 fois toutes les 24 heures pour
continuer à surveiller. Le serveur MCP d'Apify n'a pas d'outil de planification,
donc vous ne pouvez pas en ajouter une. Demandez à l'utilisateur d'ajouter une
planification Apify sur la page indiquée dans `nextStepUrl`. Elle lance l'Actor
toutes les heures avec la même entrée. Arrêtez-le avec la même entrée et
`"stop": true`.

## Combien coûte un bot Twitter vers Discord ?

Sur chaque plan Apify payant, une monitor-hour coûte $0.0045. 1 compte ou
mot-clé correspond à 1 moniteur. Apify facture votre usage de la plateforme à
part.

- 1 compte envoyé sur Discord pendant 30 jours coûte environ $3.24.
- 5 comptes pendant 30 jours coûtent environ $16.20.
- Les événements et les alertes sont gratuits, quel que soit leur nombre.
- Pas de frais de démarrage. Un run facture seulement des heures déjà
  surveillées.
- Une cible que X n'a pas ne surveille rien et ne coûte rien.
- Votre coût maximal par run plafonne chaque facturation. Les heures au-delà
  attendent le run suivant.

Une planification horaire garde l'usage Apify faible par rapport aux heures
qu'elle paie. Des runs toutes les quelques minutes ajoutent de l'usage et ne
changent rien aux alertes, qui arrivent de toute façon entre les runs.

La surveillance nécessite un
[plan Apify payant](https://apify.com/pricing?fpr=xquik). Sur le plan gratuit,
un run ne démarre aucun moniteur et ne facture rien. Il affiche à la place les 5
derniers tweets de votre premier compte.

## Limites et reprise

- 1 entrée accepte jusqu'à 100 comptes et mots-clés. Utilisez 2 tâches pour
  aller au-delà.
- Jusqu'à 10 URL de webhook par entrée, plus Telegram.
- Les événements restent 30 jours, donc `since` peut les enregistrer à nouveau
  pendant ce délai.
- Un run qui s'arrête tôt laisse ses événements au run suivant. Aucun n'est
  perdu.
- Chaque run écrit 1 ligne de statut gratuite, donc son dataset n'est jamais
  vide.
- Chaque Actor de surveillance de Xquik facture le même prix horaire. Un run
  paie les heures impayées les plus anciennes de tous vos moniteurs, quel que
  soit l'Actor qui les a surveillés.

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

## FAQ

Les réponses aux questions fréquentes, puis où trouver de l'aide.

### Ai-je besoin de cookies X, d'une clé API ou d'une connexion ?

Non. X (Twitter) to Discord Bot de Xquik n'a besoin ni de cookies X, ni de clé
API, ni de connexion, ni d'identifiants. Chaque vérification s'exécute sur
l'infrastructure de Xquik.

### Dois-je héberger ou inviter un bot ?

Non. Discord publie chaque alerte via le webhook de votre salon. Rien ne tourne
de votre côté, et personne n'a besoin d'inviter quoi que ce soit sur le serveur.

### À quelle vitesse les tweets arrivent-ils sur Discord ?

Xquik capte généralement un nouveau tweet, une réponse, une citation ou un
repost d'un compte surveillé en moins d'une seconde après son affichage sur X.
Les alertes partent à mesure que les événements arrivent et n'attendent jamais
un run.

### Puis-je envoyer sur Discord des tweets par mot-clé ?

Oui. Ajoutez des recherches X dans `searchTerms`. Chaque nouveau tweet que la
recherche Récent de X montre pour elles arrive dans le salon.

### Puis-je publier dans plus de 1 salon ?

Oui. Mettez les URL de webhook des autres salons dans `webhookUrls`, jusqu'à 10
par entrée.

### Pourquoi le run indique-t-il que la surveillance nécessite un plan payant ?

Les moniteurs travaillent entre les runs, toute la journée. Ils nécessitent donc
un plan Apify payant. Passez à un plan supérieur, puis relancez avec la même
entrée.

### Que se passe-t-il quand j'arrête le moniteur ?

Le run arrête chaque cible et coupe les alertes. Il facture les heures
surveillées jusque-là. Il attend ensuite environ une demi-minute les événements
les plus récents et les enregistre, pour qu'aucun ne reste en arrière. Les
événements déjà conservés restent lisibles pendant 30 jours.

### Puis-je utiliser l'API, les planifications et les intégrations ?

Oui. Utilisez l'API Apify ou l'API REST de Xquik.
L'[onglet API](https://apify.com/xquik/x-twitter-to-discord/api) propose des
exemples en Python, JavaScript et cURL. Les
[planifications](https://docs.apify.com/platform/schedules) Apify gardent le
moniteur actif. Les agents passent par
[Apify MCP](https://docs.apify.com/platform/integrations/mcp).

### Est-il légal de surveiller des comptes X ?

X (Twitter) to Discord Bot de Xquik collecte des données publiques de X. Les
résultats peuvent contenir des données personnelles. Assurez-vous d'avoir une
finalité licite et respectez les règles de protection des données qui
s'appliquent à vous. En cas de doute, demandez conseil à un juriste qualifié.

### Où trouver de l'aide ?

Ouvrez une issue dans
l'[onglet Issues](https://apify.com/xquik/x-twitter-to-discord/issues) avec l'ID
du run. La page de statut explique chaque run, et les diagnostics gratuits
couvrent les runs qui demandent votre attention.

### Puis-je obtenir une solution sur mesure ?

Oui. Décrivez votre besoin dans
l'[onglet Issues](https://apify.com/xquik/x-twitter-to-discord/issues). Xquik
propose aussi un tableau de bord, une API REST, un serveur MCP et des webhooks.
Le site web de Xquik figure sur son [profil Apify](https://apify.com/xquik).
