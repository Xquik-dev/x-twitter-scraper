<p align="center">
  <a href="README.md">English</a> ·
  <strong>Español</strong> ·
  <a href="README.tr.md">Türkçe</a> ·
  <a href="README.zh-CN.md">简体中文</a> ·
  <a href="README.ja.md">日本語</a> ·
  <a href="README.ko.md">한국어</a> ·
  <a href="README.de.md">Deutsch</a> ·
  <a href="README.fr.md">Français</a> ·
  <a href="README.it.md">Italiano</a>
</p>

<table align="center"><tr><td align="center">
<a href="https://youtu.be/4UOSpoOoC3Y?t=367"><img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" width="720" alt="Framer conecta Xquik MCP con agentes de codificación"></a><br>
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">Mira cómo Framer usa los extractores de Xquik con Claude Code, Codex, Cursor y más, desde el minuto 6:07.</a>
</td></tr></table>

Xquik es el servicio de scraping de X (Twitter) más rápido y económico del
mundo, con los datos de X más completos. X Profile Scraper de Xquik recopila
perfiles, posts, respuestas, contenido multimedia y seguidores de cualquier
nombre de usuario. La mayoría de los demás Actores de Apify cobran antes de
filtrar o quitar duplicados. Xquik solo cobra los resultados entregados, únicos
y que cumplen tus filtros.

Extrae perfiles, posts, respuestas, contenido multimedia y seguidores de X a
partir de nombres de usuario, IDs o URLs. Pagas **$0.00015 por fila entregada**,
y Apify factura aparte el uso de la plataforma. No necesitas clave de API de X
ni iniciar sesión.

> Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
> "Twitter" y "X" son marcas registradas de X Corp.

## ¿Qué hace X Profile Scraper?

X Profile Scraper de Xquik devuelve perfiles públicos de X (Twitter) a partir de
nombres de usuario, IDs numéricos de usuario o URLs de perfiles. Cada perfil
puede agregar sus posts, respuestas, contenido multimedia, Destacados,
seguidores, cuentas seguidas y seguidores verificados. También traduce
biografías y comprueba quién transmite en vivo ahora.

### Funciones principales

- Lee muchos perfiles en 1 ejecución a partir de nombres de usuario, IDs o URLs.
- Agrega posts, respuestas, contenido multimedia, Destacados, seguidores,
  cuentas seguidas o seguidores verificados como filas separadas.
- Traduce cada biografía a un código de idioma con `translateBioTo`.
- Comprueba si cada perfil transmite en vivo ahora con `checkLiveNow`.
- Filtra posts por fecha, idioma, contenido multimedia e interacción.
- Filtra perfiles por tamaño de audiencia, antigüedad de la cuenta y
  verificación.
- Los filtros y la eliminación de duplicados se aplican antes de facturar.
- Las ejecuciones conservan las filas entregadas y el progreso cuando Apify las
  reinicia.

### Casos de uso

- Enriquece listas de clientes potenciales con biografías, sitios web,
  ubicaciones y tamaño de audiencia.
- Compara cuentas de la competencia por seguidores, posts y verificación.
- Evalúa creadores por audiencia, antigüedad de la cuenta e interacción.
- Archiva los posts, el contenido multimedia y los Destacados de una cuenta.
- Mapea la red de una cuenta a través de sus seguidores y cuentas seguidas.
- Vigila creadores y marcas para detectar transmisiones en vivo.
- Lee biografías de otros mercados en tu propio idioma.

### ¿Qué datos puede extraer X Profile Scraper?

Las filas de perfil usan `resultType: "profile"`. Estos son los campos
principales:

| Campo              | Descripción                                                      |
| ------------------ | ---------------------------------------------------------------- |
| `id`               | ID numérico del usuario                                          |
| `username`         | Nombre de usuario sin `@`                                        |
| `name`             | Nombre visible                                                   |
| `description`      | Texto de la biografía                                            |
| `url`              | Sitio web en las filas de perfil                                 |
| `location`         | Ubicación que escribió el titular                                |
| `followers`        | Cantidad de seguidores                                           |
| `following`        | Cantidad de cuentas seguidas                                     |
| `statusesCount`    | Cantidad de posts                                                |
| `mediaCount`       | Cantidad de posts con contenido multimedia                       |
| `favouritesCount`  | Me gusta que dio la cuenta                                       |
| `listedCount`      | Listas públicas que incluyen la cuenta                           |
| `createdAt`        | Fecha de creación de la cuenta                                   |
| `verified`         | Si X indica que la cuenta está verificada                        |
| `isBlueVerified`   | Si la cuenta tiene verificación de X Blue                        |
| `verifiedType`     | Categoría de verificación, como `Government`                     |
| `profilePicture`   | URL de la imagen de perfil                                       |
| `coverPicture`     | URL de la imagen de encabezado                                   |
| `pinnedTweetIds`   | IDs de los posts fijados                                         |
| `professional`     | Categoría y tipo profesional                                     |
| `accountBasedIn`   | Etiqueta aproximada de país o región según X                     |
| `connectedVia`     | Cómo se conectó la cuenta a X por primera vez                    |
| `usernameChanges`  | Cuántas veces cambió el nombre de usuario y cuándo fue la última |
| `birthdate`        | Partes de la fecha de nacimiento que la cuenta hizo públicas     |
| `subscribersCount` | Cantidad de suscriptores, cuando X la envía                      |
| `tipJar`           | Enlaces públicos de propinas                                     |
| `protected`        | Si la cuenta protege sus posts                                   |
| `unavailable`      | Si la cuenta no está disponible                                  |
| `sourceTarget`     | El nombre de usuario, ID o URL que ingresaste                    |

El esquema del dataset documenta todos los demás campos, como
`identityVerification`, `isAutomated`, `automatedBy`, `withheldInCountries` y
`verificationReason`.

Las filas opcionales mantienen la forma de respuesta de Xquik REST:

| `resultType`              | Se activa con              | Una fila por                  |
| ------------------------- | -------------------------- | ----------------------------- |
| `profileTweet`            | `includeTweets`            | Post                          |
| `profileReply`            | `includeReplies`           | Post o respuesta              |
| `profileMedia`            | `includeMedia`             | Post con contenido multimedia |
| `profileHighlight`        | `includeHighlights`        | Post destacado                |
| `profileFollower`         | `includeFollowers`         | Seguidor                      |
| `profileFollowing`        | `includeFollowing`         | Cuenta seguida                |
| `profileVerifiedFollower` | `includeVerifiedFollowers` | Seguidor verificado           |
| `profileBioTranslation`   | `translateBioTo`           | Biografía traducida           |
| `profileLive`             | `checkLiveNow`             | Perfil comprobado             |

Las filas nunca incluyen datos que solo ve quien consulta, como si sigues o
bloqueas una cuenta.

## ¿Cómo uso X Profile Scraper para extraer datos de perfiles?

Sigue estos pasos en Apify Console:

1. Abre un [ejemplo de tarea](#ejemplos-de-tareas) o la pestaña Input.
2. Agrega nombres de usuario en `twitterHandles`, URLs en `startUrls` o IDs en
   `userIds`.
3. Activa los recursos que necesites, como `includeTweets`.
4. Define `maxItems` y los filtros que quieras, y luego haz clic en Start.
5. Exporta el dataset en JSON, CSV, Excel o HTML.

Cada receta de abajo es una entrada completa.

### Extrae muchos perfiles

```json
{ "twitterHandles": ["nasa", "OpenAI", "apify"], "maxItems": 100 }
```

Cada nombre de usuario devuelve 1 fila de perfil. Los nombres de usuario
funcionan con o sin `@`.

### Pega URLs o IDs de perfiles

`startUrls` acepta cada URL como texto simple o como objeto `{ "url": "..." }`.
`userIds` acepta IDs numéricos de usuarios de X:

```json
{
  "startUrls": ["https://x.com/nasa", { "url": "https://x.com/OpenAI" }],
  "userIds": ["11348282"],
  "maxItems": 100
}
```

Si indicas un nombre de usuario 2 veces, se lee 1 sola vez.

### Agrega posts, respuestas y contenido multimedia

```json
{
  "twitterHandles": ["nasa"],
  "includeTweets": true,
  "includeMedia": true,
  "sinceDate": "2026-01-01",
  "maxItems": 500
}
```

`includeTweets` lee la pestaña Posts del perfil. `includeReplies` lee su pestaña
Respuestas. `includeMedia` lee su pestaña Multimedia. `includeHighlights` agrega
los posts de su pestaña Destacados, en el orden de X. Un perfil sin destacados
no agrega filas.

### Conserva solo los posts populares

```json
{
  "twitterHandles": ["nasa"],
  "includeTweets": true,
  "minLikes": 1000,
  "mediaType": "videos",
  "maxItems": 200
}
```

Los filtros de posts se aplican a las filas opcionales de posts. Las filas
filtradas nunca llegan al dataset, así que nunca pagas por ellas.

### Exporta seguidores y cuentas seguidas

```json
{
  "twitterHandles": ["apify"],
  "includeFollowers": true,
  "minFollowers": 1000,
  "verifiedOnly": true,
  "maxItems": 1000
}
```

`includeFollowers`, `includeFollowing` y `includeVerifiedFollowers` agregan 1
fila de perfil por cuenta. Los filtros de perfil se aplican a estas filas y a
los perfiles principales.

### Traduce biografías

```json
{ "twitterHandles": ["nasa", "SpaceX"], "translateBioTo": "es" }
```

Cada traducción es 1 fila `profileBioTranslation` con `text`, `language` y
`sourceLanguage`. Un perfil sin biografía no agrega filas ni cobros.

### Comprueba quién está en vivo ahora

```json
{ "twitterHandles": ["nasa", "SpaceX"], "checkLiveNow": true }
```

Cada comprobación es 1 fila `profileLive` con `live`, `userId`, `userName` y
`broadcast`. `broadcast` contiene la última transmisión del perfil, en vivo o
finalizada, o null. Un perfil inexistente no agrega filas.

## Ejemplos de tareas

Elige entre 50 tareas públicas. Cada una tiene una entrada acotada y una vista
del dataset que le corresponde. Edita una tarea antes de ejecutarla.

- [Obtén la tarjeta de perfil de 1 cuenta de X](https://apify.com/xquik/x-profile-scraper/examples/get-an-x-profile-card)
- [Compara los perfiles de marcas competidoras](https://apify.com/xquik/x-profile-scraper/examples/compare-competitor-brand-profiles)
- [Convierte IDs numéricos de usuarios en perfiles](https://apify.com/xquik/x-profile-scraper/examples/resolve-numeric-user-ids-to-profiles)
- [Recopila los posts recientes de 1 cuenta](https://apify.com/xquik/x-profile-scraper/examples/collect-recent-posts-from-an-account)
- [Encuentra los posts con más Me gusta de una cuenta](https://apify.com/xquik/x-profile-scraper/examples/find-an-accounts-most-liked-posts)
- [Recopila los videos que publica una cuenta](https://apify.com/xquik/x-profile-scraper/examples/collect-videos-from-an-account)
- [Archiva 1 año calendario de una cuenta](https://apify.com/xquik/x-profile-scraper/examples/archive-one-year-of-posts)
- [Exporta los seguidores de una cuenta](https://apify.com/xquik/x-profile-scraper/examples/export-the-followers-of-an-account)
- [Exporta los seguidores verificados de una empresa](https://apify.com/xquik/x-profile-scraper/examples/export-verified-followers)
- [Encuentra seguidores con 10,000 seguidores o más](https://apify.com/xquik/x-profile-scraper/examples/find-influential-followers)
- [Mide la coincidencia de audiencia entre 2 herramientas de diseño](https://apify.com/xquik/x-profile-scraper/examples/measure-audience-overlap)
- [Haz una auditoría completa de 1 cuenta](https://apify.com/xquik/x-profile-scraper/examples/run-a-full-account-audit)

## ¿Cuánto cuesta extraer perfiles de X?

X Profile Scraper de Xquik cuesta $0.00015 por fila entregada en todos los
planes de Apify. Apify factura aparte tu uso de la plataforma. Xquik aplica un
cobro por cada fila de datos entregada. Los diagnósticos son gratis en la salida
`diagnostics`.

- No necesitas suscripción a Xquik.
- No pagas tarifas aparte de inicio, por perfil ni por consulta.
- Los filtros y la eliminación de duplicados se aplican antes de facturar. Nunca
  pagas por filas filtradas o duplicadas.
- Un perfil sin biografía no agrega cobro de traducción.
- Un perfil inexistente no agrega cobro de comprobación en vivo.
- El cargo total máximo que definas en Apify limita las filas entregadas.

Una ejecución con algún problema, o una ejecución grande, también escribe un
registro `run-report`. Una ejecución pequeña sin problemas lo omite y ahorra uso
de Apify. Activa `alwaysSaveRunRecords` para escribirlo en todas las
ejecuciones.

Para limitar lo que puede gastar una ejecución, consulta
[Opciones de ejecución](#opciones-de-ejecución).

## Ejecuciones vacías, parciales y detenidas

X Profile Scraper de Xquik explica gratis las ejecuciones vacías, parciales y
detenidas. El estado de la ejecución indica por qué se detuvo. También cuenta
los resultados cobrados y los objetivos leídos.

### Resultados vacíos

El estado de una ejecución vacía te pide revisar tus objetivos y filtros. Las
filas filtradas nunca consumen tu límite de resultados. Una ejecución que lee
todos los objetivos y no obtiene ninguna fila no escribe ningún registro. Su
estado explica por qué y qué cambiar.

Desde 2024, X solo le muestra a cada cuenta los posts que esa cuenta marcó con
Me gusta. `includeLikes` no devuelve filas `profileLike` de otras cuentas.

### Ejecuciones parciales

Una extracción interrumpida escribe un diagnóstico `partial` gratis. Las filas
entregadas se conservan en el dataset. Lee `availableResults`, `failedTargets`,
`retryable` y `nextAction` antes de reintentar. Una salida exitosa del Actor
confirma la entrega, no una extracción completa.

### Causas de detención

El estado de la ejecución nombra cada causa de una detención anticipada.
`stopCauses` enumera cada causa con su propio `message`, `retryable` y
`nextAction`. Las causas son `target_not_found`, `target_suspended`,
`target_failed`, `pagination_safety_limit` y `deadline_reached`.
`target_suspended` nombra las cuentas que X suspendió. Un objetivo inexistente o
suspendido entra en la lista solo si otra causa detuvo la ejecución. La
ejecución es `retryable` si alguna causa lo es.

## Entrada

La pestaña Input enumera todas las opciones. Indica al menos 1 de
`twitterHandles`, `startUrls` o `userIds`. Todos los demás campos son
opcionales.

| Campo                          | Qué hace                                                         |
| ------------------------------ | ---------------------------------------------------------------- |
| `twitterHandles`               | Nombres de usuario, con o sin `@`                                |
| `startUrls`                    | URLs de perfiles en x.com o twitter.com                          |
| `userIds`                      | IDs numéricos de usuarios de X                                   |
| `maxItems`                     | Límite de filas entregadas en toda la ejecución                  |
| `maxItemsPerTarget`            | Límite de filas por cada perfil o recurso                        |
| `includeTweets`                | Agrega la pestaña Posts                                          |
| `includeReplies`               | Agrega la pestaña Respuestas                                     |
| `includeMedia`                 | Agrega la pestaña Multimedia                                     |
| `includeHighlights`            | Agrega la pestaña Destacados                                     |
| `includeLikes`                 | Agrega los Me gusta, que X oculta a otras cuentas                |
| `includeFollowers`             | Agrega seguidores                                                |
| `includeFollowing`             | Agrega cuentas seguidas                                          |
| `includeVerifiedFollowers`     | Agrega seguidores verificados                                    |
| `translateBioTo`               | Traduce cada biografía a un código de idioma, como `es`          |
| `checkLiveNow`                 | Comprueba si cada perfil transmite en vivo ahora                 |
| `sinceDate`, `untilDate`       | Conserva los posts dentro de un rango de fechas                  |
| `language`                     | Conserva los posts en 1 código de idioma                         |
| `mediaType`                    | Conserva los posts con imágenes, videos, GIFs, enlaces o ninguno |
| `minViews`, `minLikes`         | Conserva los posts sobre un mínimo de visualizaciones o Me gusta |
| `minReplies`, `minRetweets`    | Conserva los posts sobre un mínimo de respuestas o reposts       |
| `nativeRetweets`               | Conserva solo los reposts nativos                                |
| `verifiedOnly`                 | Conserva autores o perfiles verificados                          |
| `minFollowers`, `maxFollowers` | Conserva los perfiles dentro de un rango de audiencia            |
| `minAccountAgeDays`            | Conserva los perfiles con al menos estos días de antigüedad      |
| `hasWebsite`, `hasLocation` | Conserva los perfiles que indican un sitio web o una ubicación |
| `bioContains` | Conserva los perfiles cuya biografía tiene 1 de estas palabras |
| `locationContains` | Conserva los perfiles cuya ubicación tiene este texto |
| `dedupeAcrossTargets`          | Descarta filas repetidas entre perfiles antes de facturar        |

### Migra desde otro Actor de perfiles

Pega la entrada que ya usas. X Profile Scraper de Xquik lee estos nombres de
campo de otros Actores de perfiles. Cada línea nombra sus campos y, luego, el
campo al que se asignan:

- `profiles`, `userNames`, `usernames`, `handles`, `screenNames`:
  `twitterHandles`
- `urls`, `profileUrls`: `startUrls`
- `maxProfiles`, `maxResults`: `maxItems`
- `shouldScrapeFollowers`, `shouldScrapeFollowings`: `includeFollowers`,
  `includeFollowing`

`category` en `user_info` no cambia nada. Una categoría que es tarea de otro
Actor, como `tweets` o `followers`, detiene la ejecución. No lee ni cobra nada.
El mensaje nombra el Actor que debes usar. Si defines un alias y su campo
canónico, gana el valor canónico. El registro de la ejecución nombra el alias
que perdió.

### Elige las entradas correctas

- Para obtener solo la tarjeta de perfil, indica nombres de usuario y deja
  desactivadas todas las opciones `include`.
- Para archivar una cuenta, activa `includeTweets`, `includeMedia` y
  `includeHighlights`, y define `sinceDate`.
- Para el contenido más popular, agrega `minLikes` o `minViews` a
  `includeTweets`.
- Para listas de clientes potenciales, activa `includeFollowers` con
  `minFollowers` y `minAccountAgeDays`.
- Para la coincidencia de audiencia, indica 2 nombres de usuario, activa
  `includeFollowers` y define `dedupeAcrossTargets: false`. Así, un seguidor
  compartido aparece bajo cada nombre de usuario.

## Salida

Cada fila es un objeto JSON. El esquema del dataset le da a cada campo un título
y una descripción, así que los agentes de IA pueden leer las filas sin adivinar.

Los ejemplos usan valores de muestra. Los resultados reflejan datos en vivo. Una
fila de perfil se ve así:

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

X deduce `accountBasedIn` a partir de IPs agregadas de acceso a la cuenta. La
etiqueta no indica nacionalidad, residencia, identidad, registro, lugar de
publicación ni ubicación exacta. `observedAt` registra la hora de la consulta.
`accountBasedIn` es null cuando X no muestra la etiqueta. Cuando X la retiene,
la fila trae `accountBasedInUnavailable: true` en su lugar.

Exporta el dataset en JSON, CSV, Excel o HTML.

## Opciones de ejecución

- Define el cargo total máximo de Apify para limitar el costo de la ejecución.
  Deja `maxItems` alto para obtener la mayor cantidad de filas que permita ese
  presupuesto.
- Define `maxTotalChargeUsd` en la API de Apify, o Max cost per run en Console.
- Pon todos tus perfiles en 1 ejecución. Cada ejecución le paga a Apify el mismo
  costo de inicio.
- `maxConcurrency` define cuántos perfiles se ejecutan a la vez. El valor
  predeterminado es la opción segura más rápida.
- Usa los monitores de cuentas de Xquik para comprobaciones de 1 segundo y
  webhooks firmados. Los monitores activos comprueban cada segundo.

Selecciona `latest` en cada ejecución para recibir todas las correcciones
publicadas. Las tareas y programaciones guardadas conservan su propia elección
de compilación, así que mantenla en `latest`.

## Actores de Xquik relacionados

Todos los Actores de Xquik comparten el mismo motor de extracción, el cobro
después de filtrar y los diagnósticos. Elige el que se ajuste a los datos que
necesitas.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): extrae posts de
  búsquedas, cronologías de perfiles, Listas e IDs de posts con más de 50
  filtros y exportaciones planas. Úsalo cuando necesites datos de posts sin
  análisis. Desde $0.00015 por fila.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): extrae respuestas,
  comentarios y conversaciones completas debajo de posts con más de 25 filtros.
  Úsalo cuando necesites la conversación debajo de los posts. Desde $0.00015 por
  fila.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): extrae
  respuestas, citas, cuentas que hicieron repost e hilos de URLs o IDs de posts
  en bloque. Úsalo cuando midas quién interactuó con los posts. Desde $0.00015
  por fila.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): extrae
  seguidores, cuentas seguidas, miembros de Listas, suscriptores y miembros de
  Comunidades como filas de perfil. Úsalo cuando necesites listas de audiencia o
  de miembros. Desde $0.00015 por perfil.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper): busca
  usuarios por nombre de usuario, biografía y ubicación con filtros de
  seguidores, verificación, antigüedad y ubicación. Úsalo cuando crees listas de
  cuentas a partir de búsquedas. Desde $0.00015 por perfil.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): extrae posts,
  miembros y seguidores de Listas a partir de URLs o IDs de Listas. Úsalo cuando
  una Lista curada defina tus fuentes. Desde $0.00015 por fila.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): extrae
  información, posts, búsquedas, miembros y moderadores de Comunidades. Úsalo
  cuando tus fuentes sean Comunidades de X. Desde $0.00015 por fila.
- [X Space Scraper](https://apify.com/xquik/x-space-scraper): encuentra Espacios
  por palabra clave y lee sus títulos, estados, horas, cantidad de oyentes,
  anfitriones y oradores. También lee transmisiones por URL o ID. Úsalo cuando
  sigas el audio y el video en vivo en X. Desde $0.00015 por Espacio o
  transmisión.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): extrae
  tendencias en tiempo real por ubicación con posición, volumen, consulta y
  WOEID. Úsalo cuando sigas qué es tendencia y dónde. Desde $0.00015 por
  tendencia.
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper): extrae ofertas de
  empleo de X por palabra clave, lugar, modalidad de trabajo, nivel de
  experiencia y empresa, con salarios y enlaces para postularse. Úsalo cuando
  recopiles vacantes publicadas en X. Desde $0.00015 por empleo.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): extrae
  Artículos de X de formato largo como Markdown y texto con portadas, autores,
  fechas y métricas. Úsalo cuando necesites el cuerpo de los Artículos, no
  posts. Desde $0.00015 por artículo.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): extrae o
  guarda fotos, videos y GIFs de posts o perfiles con opciones de MP4 y
  metadatos. Úsalo cuando necesites los archivos multimedia en sí. Desde
  $0.00015 por fila de contenido multimedia.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  sigue menciones de marca con relevancia, sentimiento y respuestas de
  experiencia del cliente generadas con IA, y compara ejecuciones. Úsalo cuando
  vigiles una marca a lo largo del tiempo. Desde $0.0003 por post analizado.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  etiqueta con IA la actitud, la intensidad y la probabilidad de sarcasmo de
  cada post. Úsalo cuando necesites el sentimiento general sobre cualquier tema.
  Desde $0.0003 por post analizado.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  etiqueta con IA la postura alcista, bajista, neutral o mixta, el tipo de
  contenido, la convicción y la relevancia del activo. Úsalo cuando sigas
  acciones, cripto o conversaciones de trading. Desde $0.0003 por post
  analizado.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  etiqueta con IA los posts de noticias por formato, atribución de la fuente y
  relevancia del tema. Úsalo cuando separes la información de la opinión. Desde
  $0.0003 por post analizado.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  responde con IA tus propias preguntas de categoría, puntuación y sí o no para
  cada post. Úsalo cuando los análisis predefinidos no se ajusten a tus
  etiquetas. Desde $0.0003 por post analizado.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer):
  estima un Viral Score de 0 a 100 y un veredicto para cada post a partir de 8
  respuestas de IA sobre sus rasgos. Úsalo cuando estudies por qué un post se
  difunde o fracasa. Desde $0.0003 por post analizado.

## ¿Necesitas más que scraping?

Xquik también ofrece 53 herramientas en el panel, una API REST, webhooks firmados
y un servidor MCP.

- [Documentación de la API](https://docs.xquik.com/introduction): guías de la
  API REST
- [API de consulta de perfiles](https://docs.xquik.com/api-reference/x/twitter-profile-lookup):
  obtén 1 perfil público
- [API de posts de usuarios](https://docs.xquik.com/api-reference/x/user-tweets):
  obtén los posts de un usuario
- [API de seguidores](https://docs.xquik.com/api-reference/x/followers): obtén
  los seguidores de una cuenta
- [API de traducción de biografías](https://docs.xquik.com/api-reference/x/user-bio-translation):
  traduce la biografía de un perfil
- [API de estado en vivo](https://docs.xquik.com/api-reference/x/user-live-status):
  comprueba si un usuario está en vivo
- [Servidor MCP](https://docs.xquik.com/mcp/overview): descubre las herramientas
  compatibles
- [Webhooks](https://docs.xquik.com/webhooks/overview): entrega firmada de
  eventos

## Preguntas frecuentes

Respuestas a preguntas comunes y, luego, dónde conseguir ayuda.

### ¿Necesito una clave de API de X o iniciar sesión?

No. X Profile Scraper de Xquik no necesita clave de API de X, inicio de sesión
ni credenciales.

### ¿Cuántos perfiles puedo extraer en 1 ejecución?

Todos los que indiques. `maxItems` y tu límite de gasto en Apify limitan las
filas.

### ¿Puedo exportar perfiles de X a CSV o Excel?

Sí. Exporta el dataset en JSON, CSV, Excel o HTML desde la pestaña Storage.

### ¿Puedo extraer los seguidores de un usuario de Twitter?

Sí. Activa `includeFollowers`, `includeFollowing` o `includeVerifiedFollowers`.
Cada cuenta es 1 fila.

### ¿Obtiene el sitio web y la ubicación de un perfil?

Sí. `url` contiene el sitio web y `location` contiene el texto que escribió el
titular.
Define `hasWebsite` y `hasLocation` para conservar solo los perfiles que los indican.

### ¿Puedo extraer cuentas protegidas?

Obtienes la fila del perfil público, con `protected: true`. X solo muestra los
posts y los seguidores de una cuenta protegida a sus seguidores aprobados.

### ¿Cómo sé si una cuenta está en vivo ahora?

Define `checkLiveNow: true`. Cada perfil recibe una fila `profileLive` con
`live` y su última transmisión.

### ¿Puede traducir biografías?

Sí. Define `translateBioTo` con un código de idioma, como `es` o `pt-br`. Un
perfil sin biografía no agrega filas.

### ¿Por qué includeLikes no devuelve nada?

Desde 2024, X solo le muestra a cada cuenta los posts que esa cuenta marcó con
Me gusta. Otras cuentas, incluido este Actor, no pueden leerlos.

### ¿Es legal extraer perfiles de X?

X Profile Scraper de Xquik solicita campos públicos de X. Los resultados pueden
contener datos personales. Confirma que tu propósito es lícito y cumple las
normas de privacidad aplicables. Si tienes dudas, consulta a un abogado
calificado.

### ¿Por qué mi ejecución no devolvió resultados?

Lee primero el estado de la ejecución. El estado de una ejecución vacía te pide
revisar tus objetivos y filtros. La salida gratuita `diagnostics` aparece cuando
algo requiere atención. Su `stopCauses` da a cada causa un `nextAction` que
puedes seguir. La ejecución enumera cada entrada que no puede leer y explica
cómo corregirla.

### ¿Puedo usar la API, las programaciones y las integraciones?

Sí. Elige entre 50 tareas públicas o la API REST de Xquik. La
[pestaña API](https://apify.com/xquik/x-profile-scraper/api) tiene ejemplos en
Python, JavaScript y cURL. Las
[programaciones](https://docs.apify.com/platform/schedules) de Apify ejecutan X
Profile Scraper de Xquik con un cron. Los agentes usan
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Usa `latest`
salvo que necesites una compilación anterior.

### ¿Puedo obtener una solución a medida?

Sí. Visita [xquik.com](https://xquik.com) o lee la
[documentación de la API](https://docs.xquik.com/introduction). Ahí encontrarás
el panel, la API, el servidor MCP y los webhooks.

### ¿Dónde consigo ayuda?

Abre un issue en la página del Actor o escribe a <support@xquik.com> con el ID
de la ejecución. Los diagnósticos gratuitos del almacén de clave-valor explican
las ejecuciones que requieren atención. Una ejecución que no obtiene ninguna
fila explica por qué en su estado.
