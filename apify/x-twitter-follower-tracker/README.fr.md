[English](README.md) · [Español](README.es.md) · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · **Français** · [Italiano](README.it.md)

[![Framer connecte Xquik MCP aux agents de codage](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Découvrez comment Framer utilise les scrapers Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
avec Claude Code, Codex, Cursor & d'autres outils, à partir de 6:07.

Xquik est le service de scraping X (Twitter) le plus rapide et le moins cher au
monde. Ses données X sont les plus complètes. X (Twitter) Follower Tracker de
Xquik montre les nouveaux abonnés et les abonnés perdus des comptes que vous
choisissez, et qui ils suivent ou cessent de suivre. Chaque alerte contient le
profil complet de l'autre compte. La plupart des autres Actors Apify facturent
avant de filtrer ou de dédupliquer. Xquik facture seulement les résultats livrés
et uniques, et ici seulement les heures pendant lesquelles un moniteur
surveille.

Collez les comptes à suivre et cliquez sur Start. Les alertes arrivent entre les
runs. Vous payez **$0.0045 par monitor-hour**. Les événements et les alertes
sont gratuits, et Apify facture l'usage de la plateforme à part.

> Xquik est un service tiers indépendant. Non affilié à X Corp. "Twitter" et "X"
> sont des marques déposées de X Corp.

## Ce qu'envoie le tracker d'abonnés Twitter

- Les nouveaux abonnés, c'est-à-dire les comptes qui commencent à suivre chaque
  compte que vous surveillez.
- Les abonnés perdus, c'est-à-dire les comptes qui quittent ses abonnés.
- Les nouveaux abonnements et désabonnements, c'est-à-dire les comptes qu'il
  commence ou cesse de suivre.
- Chaque alerte avec le profil complet de l'autre compte, comme son nom, sa bio
  et son nombre d'abonnés.
- Des alertes sur Telegram, Discord, Slack ou tout webhook HTTPS, et chaque
  événement dans le dataset du run et dans 1 dataset d'historique.

## Comment suivre les abonnés Twitter

La surveillance nécessite un plan Apify payant.
[Choisissez un plan](https://apify.com/pricing?fpr=xquik), puis revenez ici et
cliquez sur Try for free.

1. Ouvrez X (Twitter) Follower Tracker de Xquik dans Apify Console.
2. Collez des noms d'utilisateur dans `twitterHandles`.
3. Activez `telegram`, ou collez une URL de webhook Discord ou Slack dans
   `webhookUrls`.
4. Cliquez sur Start. Le suivi démarre dans ce run.
5. Ajoutez une planification qui lance l'Actor toutes les heures, avec la même
   entrée.

Chaque run suivant facture les heures surveillées depuis le run précédent et
enregistre les nouveaux événements dans son dataset. Un moniteur sans run
pendant 24 heures se met en pause. Vos alertes vous préviennent 4 heures avant.
Le run suivant le relance et facture d'abord les heures impayées.

## Ce que voit le tracker

- Les nouveaux abonnés et les nouveaux abonnements de tout compte public.
- Les abonnés perdus des comptes qui ont jusqu'à 100 000 abonnés, et les
  désabonnements des comptes qui suivent jusqu'à 100 000 comptes. Au-delà, parmi
  les 5 000 plus récents.
- Un abonné perdu situé loin dans une grande liste peut arriver plus tard qu'un
  nouvel abonné, car Xquik vérifie la liste entière moins souvent que ses
  abonnés les plus récents.
- Un abonné dont X suspend ou supprime le compte compte aussi comme perdu.
- Un compte qui part puis revient peut de nouveau compter comme nouvel abonné.
- Le premier run prend chaque liste telle quelle, donc aucun abonné existant ne
  compte comme nouveau.
- Un compte protégé cache ses listes, donc il n'envoie rien.

## Entrée

| Champ              | Ce qu'il fait                                                              |
| ------------------ | -------------------------------------------------------------------------- |
| `twitterHandles`   | Noms d'utilisateur avec ou sans @, ou URL de profils `x.com`, 1 par ligne. |
| `monitorName`      | Nomme cet ensemble de comptes, pour les runs sans tâche enregistrée.       |
| `followerChanges`  | Nouveaux abonnés et abonnés perdus. Activé par défaut.                     |
| `followingChanges` | Nouveaux abonnements et désabonnements. Activé par défaut.                 |
| `webhookUrls`      | URL HTTPS, 1 par ligne. L'Actor détecte les URL Slack et Discord.          |
| `telegram`         | Envoie les alertes sur Telegram via un lien que le run vous donne.         |
| `stop`             | Arrête le moniteur et coupe les alertes.                                   |

1 entrée accepte jusqu'à 100 comptes. Telegram n'a besoin ni de nom
d'utilisateur ni d'ID de chat. Le statut du run donne un lien. Ouvrez-le et
appuyez sur Start, et les alertes arrivent dans ce chat. Le formulaire masque
les événements de tweets de X (Twitter) Monitor, et une entrée qui les envoie
fonctionne quand même.

Ces entrées sont prêtes à copier.

```json
{ "twitterHandles": ["xquikcom"], "telegram": true }
```

```json
{
  "twitterHandles": ["yourhandle"],
  "followingChanges": false,
  "webhookUrls": "https://hooks.slack.com/services/T000/B000/XXXX"
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
Follower Tracker les affiche.

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
{ "twitterHandles": ["xquikcom"], "monitorName": "agent-demo" }
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

## Combien coûte un tracker d'abonnés Twitter ?

Sur chaque plan Apify payant, une monitor-hour coûte $0.0045. 1 compte
correspond à 1 moniteur. Apify facture votre usage de la plateforme à part.

- 1 compte suivi pendant 30 jours coûte environ $3.24.
- 10 comptes suivis pendant 30 jours coûtent environ $32.40.
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

## Limites & reprise

- 1 entrée accepte jusqu'à 100 comptes. Utilisez 2 tâches pour aller au-delà.
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

Non. X (Twitter) Follower Tracker de Xquik n'a besoin ni de cookies X, ni de clé
API, ni de connexion, ni d'identifiants. Chaque vérification s'exécute sur
l'infrastructure de Xquik.

### Puis-je voir qui a quitté mes abonnés sur X ?

Oui. Surveillez votre propre compte public. Chaque compte qui quitte ses abonnés
envoie une alerte d'abonné perdu avec son profil complet. Cela inclut un
désabonnement et un compte que X suspend ou supprime.

### Peut-il montrer qui un compte suit ?

Oui. `followingChanges` est activé par défaut, donc chaque compte que le compte
surveillé commence ou cesse de suivre envoie une alerte.

### Fonctionne-t-il pour les comptes qui ont des millions d'abonnés ?

Il nomme les nouveaux abonnés de tout compte public. Il nomme les abonnés perdus
sur les comptes qui ont jusqu'à 100 000 abonnés. Au-delà, parmi les 5 000 plus
récents.

### Envoie-t-il aussi des tweets ?

Non, par défaut. Activez les événements de tweets via `eventTypes`, ou utilisez
X (Twitter) Monitor pour les tweets.

### Pourquoi le run indique-t-il que la surveillance nécessite un plan payant ?

Les moniteurs travaillent entre les runs, toute la journée. Ils nécessitent donc
un plan Apify payant. Passez à un plan supérieur, puis relancez avec la même
entrée.

### Que se passe-t-il quand j'arrête le moniteur ?

Le run arrête chaque cible et coupe les alertes. Il facture les heures
surveillées jusque-là. Il attend ensuite environ une demi-minute les événements
les plus récents et les enregistre, pour qu'aucun ne reste en arrière. Les
événements déjà conservés restent lisibles pendant 30 jours.

### Puis-je utiliser l'API, les planifications & les intégrations ?

Oui. Utilisez l'API Apify ou l'API REST de Xquik.
L'[onglet API](https://apify.com/xquik/x-twitter-follower-tracker/api) propose
des exemples en Python, JavaScript et cURL. Les
[planifications](https://docs.apify.com/platform/schedules) Apify gardent le
moniteur actif. Les agents passent par
[Apify MCP](https://docs.apify.com/platform/integrations/mcp).

### Est-il légal de surveiller des comptes X ?

X (Twitter) Follower Tracker de Xquik collecte des données publiques de X. Les
résultats peuvent contenir des données personnelles. Assurez-vous d'avoir une
finalité licite et respectez les règles de protection des données qui
s'appliquent à vous. En cas de doute, demandez conseil à un juriste qualifié.

### Où trouver de l'aide ?

Ouvrez une issue dans
l'[onglet Issues](https://apify.com/xquik/x-twitter-follower-tracker/issues)
avec l'ID du run. La page de statut explique chaque run, et les diagnostics
gratuits couvrent les runs qui demandent votre attention.

### Puis-je obtenir une solution sur mesure ?

Oui. Décrivez votre besoin dans
l'[onglet Issues](https://apify.com/xquik/x-twitter-follower-tracker/issues).
Xquik propose aussi un tableau de bord, une API REST, un serveur MCP et des
webhooks. Le site web de Xquik figure sur son
[profil Apify](https://apify.com/xquik).
