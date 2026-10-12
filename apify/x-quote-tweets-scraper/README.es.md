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
mundo, con los datos de X más completos. X Quote Tweets Scraper de Xquik
recopila los posts que citan posts públicos de X, sin cookies de X ni inicio de
sesión. La mayoría de los demás Actores de Apify cobran antes de filtrar o
quitar duplicados. Xquik solo cobra los resultados entregados, únicos y que
cumplen tus filtros.

Pega URLs o IDs de posts y obtén todas las citas que X entrega para cada post en
1 ejecución. Cada fila trae la cita, el perfil público completo de su autor y el
post citado. Pagas **$0.00015 por fila entregada**, y Apify factura aparte el
uso de la plataforma.

> Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
> "Twitter" y "X" son marcas registradas de X Corp.

## Datos de la cita en cada fila

- El texto completo, el enlace, el idioma y la hora de publicación de la cita.
- Me gusta, respuestas, reposts, citas, visualizaciones y elementos guardados.
- El perfil público completo del autor: nombre, biografía, seguidores,
  verificación y más.
- Fotos, videos y GIFs con sus enlaces.
- Hashtags, menciones y enlaces que aparecen en el texto.
- El propio post citado, con la misma forma.
- `sourceTarget`, el post de la entrada que la fila cita.
- `position`, el lugar de la fila en la ejecución, y `scrapedAt`, su hora de
  entrega.
- Muchos posts en 1 ejecución, cada uno leído hasta el final de lo que X
  entrega.
- Primero las más recientes, o las citas que X clasifica más alto.
- 11 filtros: idioma, fechas, tipo de contenido multimedia, 6 conteos mínimos y
  autores verificados.
- 1 fila por autor cuando quieres personas, no posts.
- URLs de posts de x.com y twitter.com, o IDs numéricos de posts.
- Eliminación de duplicados antes de facturar.
- Exportación en JSON, CSV, Excel, XML y RSS con los datasets de Apify.
- Las ejecuciones se reanudan desde el estado guardado tras una migración de
  Apify.

## Cómo extraer citas de tuits

1. Abre X Quote Tweets Scraper de Xquik en Apify Console.
2. Pega URLs de posts en `startUrls` o IDs de posts en `tweetIds`.
3. Define `maxItems` para limitar las filas entregadas y haz clic en Start.
4. Descarga el dataset en JSON, CSV o Excel, o usa la API de Apify.

En ningún paso ingresas cookies de X, datos de inicio de sesión ni una clave de
API. No llevas ningún cursor de página entre ejecuciones.

## Entrada

`startUrls` acepta cada URL de post como texto simple o como objeto
`{ "url": "..." }`. `tweetIds` acepta IDs de posts, y una URL de post también
funciona ahí:

```json
{
  "startUrls": [
    "https://x.com/OpenAI/status/2082577277246972300",
    { "url": "https://twitter.com/jack/status/20" }
  ],
  "tweetIds": ["2082201573976056245"],
  "maxItems": 1000
}
```

El orden, los filtros y los límites van junto a los posts:

```json
{
  "tweetIds": ["2082577277246972300"],
  "sort": "top",
  "language": "en",
  "minLikes": 10,
  "sinceDate": "2026-10-01",
  "maxItemsPerTarget": 200,
  "uniqueAuthors": true
}
```

- `sort` es `latest` para ver primero las citas más recientes, o `top` para las
  citas que X clasifica más alto.
- `includeReplies` conserva las respuestas que citan el post, tal como las
  enumera la vista Citas de X. Está activado salvo que lo desactives.
- `uniqueAuthors` conserva la primera cita de cada autor en la ejecución. Así,
  el dataset trae 1 fila por autor, no por cita. Pagas por las filas entregadas.
- `maxItems` limita toda la ejecución y `maxItemsPerTarget` limita cada post.
- Los filtros son `language`, `sinceDate`, `untilDate`, `mediaType`, `minLikes`,
  `minReplies`, `minRetweets`, `minQuotes`, `minViews`, `minBookmarks` y
  `verifiedOnly`.

Un post que la entrada nombra 2 veces se lee 1 sola vez. `tweetUrls`, `tweetId`,
`tweets` y `tweet_id` funcionan como otros nombres de los posts. Las ejecuciones
pequeñas sin problemas omiten `run-report` y ahorran uso de Apify. Activa
`alwaysSaveRunRecords` para escribirlo en todas las ejecuciones.

## Salida

Cada cita es 1 fila del dataset con `id`, `url`, `text`, `createdAt`, `lang`,
`likeCount`, `replyCount`, `retweetCount`, `quoteCount`, `viewCount`,
`bookmarkCount`, `media`, `entities`, `author`, `quotedTweetId` y
`quoted_tweet`. El Actor agrega `sourceTarget`, `position`, `scrapedAt` y
`resultType`. Los campos que faltan en el origen quedan ausentes. X Quote Tweets
Scraper de Xquik no inventa valores.

Los ejemplos usan valores de muestra. Los resultados reflejan datos en vivo. Una
fila se ve así:

```json
{
  "id": "1900000000000000001",
  "url": "https://x.com/sample_user/status/1900000000000000001",
  "text": "Worth a read. The second chart says it all.",
  "createdAt": "2026-10-11T09:00:00.000Z",
  "lang": "en",
  "likeCount": 42,
  "replyCount": 3,
  "retweetCount": 5,
  "quoteCount": 1,
  "viewCount": 1800,
  "bookmarkCount": 2,
  "author": {
    "id": "1234567890",
    "username": "sample_user",
    "name": "Sample User",
    "followers": 1200,
    "verified": true
  },
  "quotedTweetId": "1900000000000000000",
  "quoted_tweet": {
    "id": "1900000000000000000",
    "text": "Our new report is out."
  },
  "resultType": "quotes",
  "sourceTarget": "1900000000000000000",
  "position": 1,
  "scrapedAt": "2026-10-12T09:00:00.000Z"
}
```

`position` cuenta las filas entregadas desde 1, después de los filtros y de la
eliminación de duplicados. El dataset tiene 2 vistas de tabla. "Quote Tweets"
muestra cada cita con sus conteos. "Quote Authors" muestra quién citó cada post,
con los campos del perfil del autor como columnas.

## Qué entrega X

2 límites vienen de X, y X Quote Tweets Scraper de Xquik los indica con
claridad:

- La búsqueda de X decide qué tan atrás llegan las citas de un post muy grande.
  Una ejecución lee todas las citas que X entrega y se detiene ahí.
- `top` es la clasificación de X, no la de Xquik. No es un orden por cantidad de
  Me gusta. Una fila posterior puede tener más Me gusta que una anterior.

## ¿Cuánto cuesta extraer citas de tuits?

En todos los planes de Apify, cada fila entregada cuesta $0.00015. Apify factura
aparte tu uso de la plataforma.

- Un cobro por cada fila de datos entregada. Los diagnósticos son gratis en
  `diagnostics`.
- Sin tarifa de inicio.
- Un post que X no tiene no agrega filas ni cobros.
- Los filtros y `uniqueAuthors` se aplican antes de facturar, así que una cita
  descartada no cuesta nada.
- Xquik quita los duplicados antes de facturar.
- El cargo total máximo que definas en Apify limita las filas entregadas.

## Límites y recuperación

X Quote Tweets Scraper de Xquik lee muchos posts en 1 ejecución. Las filas
entregadas y el progreso se conservan tras un reinicio de Apify. El Actor no
agrega su propio límite de tiempo. Respeta cualquier tiempo límite que definas
en Apify.

El estado de la ejecución nombra los posts para los que X no encuentra
coincidencia y te pide revisar la URL o el ID. Una extracción interrumpida
escribe un diagnóstico `partial` gratis. Los resultados disponibles se
conservan. Lee `availableResults`, `failedTargets`, `retryable` y `nextAction`
antes de reintentar. Una salida exitosa del Actor confirma la entrega, no una
extracción completa.

El estado de la ejecución nombra cada causa de una detención anticipada.
`stopCauses` enumera cada causa con su propio `message`, `retryable` y
`nextAction`. La ejecución es `retryable` si alguna causa lo es.

## Actores de Xquik relacionados

Todos los Actores de Xquik comparten el mismo motor de extracción, el cobro
después de filtrar y los diagnósticos. Elige el que se ajuste a los datos que
necesitas.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): extrae posts de
  búsquedas, cronologías de perfiles, Listas e IDs de posts con más de 50
  filtros y exportaciones planas. Úsalo cuando necesites datos de posts sin
  análisis. Desde $0.00015 por fila.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): extrae
  perfiles con sus posts, respuestas, contenido multimedia y seguidores a partir
  de nombres de usuario, IDs o URLs. Úsalo cuando partas de cuentas en lugar de
  búsquedas. Desde $0.00015 por fila.
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
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper):
  consulta dónde tienen su sede las cuentas con la etiqueta "Cuenta con sede en"
  de X, cómo se conectaron a X y sus cambios de nombre de usuario. Úsalo cuando
  verifiques dónde tienen su sede las cuentas. Desde $0.00015 por cuenta.
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

## Preguntas frecuentes

Respuestas a preguntas comunes y, luego, dónde conseguir ayuda.

### ¿Necesito cookies de X, una clave de API o iniciar sesión?

No. X Quote Tweets Scraper de Xquik no necesita cookies de X, clave de API,
inicio de sesión ni credenciales. Todas las lecturas se ejecutan en la
infraestructura de Xquik.

### ¿Puedo extraer las citas de muchos posts en 1 ejecución?

Sí. Pega todas las URLs o IDs de posts que necesites. El `sourceTarget` de cada
fila indica qué post cita.

### ¿Cuántas citas puede devolver 1 ejecución?

Una ejecución puede devolver 100,000 filas y más. Para una exportación completa,
sube `maxItems` por encima de las 1,000 con las que empieza el formulario.

### ¿Por qué un post enorme devuelve menos citas de las que muestra su contador?

La búsqueda de X decide qué tan atrás llegan las citas de un post muy grande. La
ejecución entrega todas las citas que X entrega. El contador también incluye
citas de cuentas privadas o eliminadas.

### ¿Cómo obtengo 1 fila por cada persona que citó un post?

Activa `uniqueAuthors`. La ejecución conserva la primera cita de cada autor y
omite las posteriores sin cobro.

### ¿Es legal extraer citas de tuits?

X Quote Tweets Scraper de Xquik solicita posts públicos de X. Los resultados
pueden contener datos personales. Confirma que tu propósito es lícito y cumple
las normas de privacidad aplicables. Si tienes dudas, consulta a un abogado
calificado.

### ¿Por qué mi ejecución no devolvió resultados?

Lee primero el estado de la ejecución. El estado de una ejecución vacía indica
si X no encuentra coincidencia para un post o si el post no tiene citas que
cumplan tus filtros. La salida gratuita `diagnostics` aparece cuando algo
necesita atención. Su `stopCauses` da a cada causa un `nextAction` que puedes
seguir.

### ¿Puedo usar la API, las programaciones y las integraciones?

Sí. Usa la API de Apify o la API REST de Xquik. La
[pestaña API](https://apify.com/xquik/x-quote-tweets-scraper/api) tiene ejemplos
en Python, JavaScript y cURL. Las
[programaciones](https://docs.apify.com/platform/schedules) de Apify ejecutan X
Quote Tweets Scraper de Xquik con un cron. Los agentes usan
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Usa `latest`
salvo que necesites una compilación anterior.

### ¿Dónde consigo ayuda?

Abre un issue en la página del Actor o escribe a <support@xquik.com> con el ID
de la ejecución. Los diagnósticos gratuitos del almacén de clave-valor explican
las ejecuciones que necesitan atención. Una ejecución que no recibe ninguna fila
dice por qué en su estado.

### ¿Puedo obtener una solución a medida?

Sí. Visita [xquik.com](https://xquik.com) o lee la
[documentación de la API](https://docs.xquik.com/introduction). Ahí encontrarás
el panel, la API, el servidor MCP y los webhooks.
