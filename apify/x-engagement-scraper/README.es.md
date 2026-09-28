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
mundo, con los datos de X más completos. X Engagement Scraper de Xquik recopila
respuestas, citas, cuentas que hicieron repost e hilos de cualquier post. La
mayoría de los demás Actores de Apify cobran antes de filtrar o quitar
duplicados. Xquik solo cobra los resultados entregados, únicos y que cumplen tus
filtros.

Recopila respuestas, citas, cuentas que hicieron repost (antes retuit) y el
contexto del hilo. Funciona con 1 o más posts de X (antes Twitter). Pagas
**$0.00015 por fila entregada**, y Apify factura aparte el uso de la plataforma.
No necesitas clave de API de X ni iniciar sesión.

> Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
> "Twitter" y "X" son marcas registradas de X Corp.

## Respuestas, citas y perfiles

- URLs de posts e IDs numéricos de posts.
- Respuestas directas en todas las páginas de resultados disponibles.
- Respuestas directas y anidadas con 4 modos de orden.
- Los detalles del post de origen como fila opcional.
- Citas con texto, autores, contenido multimedia y métricas.
- Perfiles de las cuentas que hicieron repost.
- El contexto de la conversación alrededor de cada post de origen.
- Muchos tipos de interacción y posts en 1 ejecución.
- Un límite global y un límite para cada recurso de interacción.
- Atribución del post de origen y del tipo de interacción.
- Las ejecuciones se reanudan tras un reinicio de Apify.

## Cómo extraer la interacción de posts de X

1. Abre X Engagement Scraper de Xquik en Apify Console.
2. Pega URLs de posts en `startUrls` o IDs numéricos de posts en `tweetIds`.
3. Elige `engagementTypes` y agrega filtros como `minLikes` o `language`.
4. Define `maxItems` para limitar las filas entregadas y haz clic en Start.
5. Descarga el dataset en JSON, CSV o Excel, o usa la API de Apify.

## Entrada

```json
{
  "tweetIds": ["2082577277246972300"],
  "engagementTypes": ["replies", "quotes", "retweeters"],
  "maxItems": 10000
}
```

En 2024, X dejó de mostrar quién marcó un post con Me gusta. El tipo
`favoriters` no devuelve filas. Una ejecución sin filas indica ese motivo en su
diagnóstico.

De forma predeterminada, cada cuenta o post aparece 1 vez por tipo de
interacción, con 1 cobro. Define `dedupeAcrossTargets` como `false` para
conservar una fila por cada post de origen. El estado de la ejecución cuenta los
duplicados que omitió sin cobro.

Las ejecuciones pequeñas sin problemas omiten `run-report` y ahorran uso de
Apify. Activa `alwaysSaveRunRecords` para escribirlo en todas las ejecuciones.

## Salida

Cada fila define `resultType` como `tweet`, `replies`, `completeReplies`,
`quotes`, `retweeters`, `favoriters` o `thread`. `sourceTarget` guarda el ID del
post de origen. Los campos de posts y perfiles siguen las formas estables de
respuesta de Xquik REST.

`completeReplies` conserva todas las filas devueltas. El informe de la ejecución
cuenta la cobertura parcial en `incompleteTargets`. Los filtros se aplican antes
de facturar.

Los ejemplos usan valores de muestra. Los resultados reflejan datos en vivo. Una
fila de respuesta se ve así:

```json
{
  "resultType": "replies",
  "sourceTarget": "2082577277246972300",
  "inReplyToId": "2082577277246972300",
  "username": "sample_user",
  "text": "Sample reply text",
  "likeCount": 12
}
```

## Marcas de tiempo de los reposts

Define `includeRetweetTimestamp` como `true` para los resultados de
`retweeters`. La columna `retweetedAt` guarda la hora observada del repost en
UTC.

X Engagement Scraper de Xquik encuentra la hora del repost cuando X todavía
muestra ese repost. Los reposts antiguos, eliminados o no disponibles dejan la
marca de tiempo en `null`. El perfil sigue en la salida. Un valor `null` no
prueba que una cuenta nunca haya hecho repost de un post.

Esta opción hace más lentas las ejecuciones. Déjala desactivada si solo quieres
perfiles. `createdAt` del perfil sigue siendo la fecha de creación de la cuenta.
Las filas de posts llevan `retweetedAt` cuando contienen un repost. Las fechas
del post original y las horas de extracción nunca reemplazan las horas de
repost. Los precios por resultado y el cobro por fila entregada no cambian.

## ¿Cuánto cuesta extraer la interacción de posts de X?

En todos los planes de Apify, cada fila entregada cuesta $0.00015. Apify factura
aparte tu uso de la plataforma.

- Un cobro por cada fila de datos entregada. Los diagnósticos son gratis en
  `diagnostics`.
- Sin tarifa de inicio, por post, por tipo de interacción ni por página.
- Xquik quita los duplicados antes de facturar.

## Límites y recuperación

X Engagement Scraper de Xquik lee muchos posts y tipos de interacción en 1
ejecución. Las filas entregadas y el progreso se conservan tras un reinicio de
Apify. El Actor no agrega su propio límite de tiempo.

Una extracción interrumpida escribe un diagnóstico `partial` gratis. Los
resultados disponibles se conservan. Lee `availableResults`, `failedTargets`,
`retryable` y `nextAction` antes de reintentar. Una salida exitosa del Actor
confirma la entrega, no una extracción completa.

El estado de la ejecución nombra cada causa de una detención anticipada.
`stopCauses` enumera cada causa con su propio `message`, `retryable` y
`nextAction`. Las causas son `target_not_found`, `target_failed`,
`pagination_safety_limit`, `reply_reach` y `deadline_reached`. `reply_reach`
significa que X entregó solo una parte de un hilo de respuestas. Un objetivo
inexistente entra en la lista solo si otra causa detuvo la ejecución. La
ejecución es `retryable` si alguna causa lo es.

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
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): extrae
  tendencias en tiempo real por ubicación con posición, volumen, consulta y
  WOEID. Úsalo cuando sigas qué es tendencia y dónde. Desde $0.00015 por
  tendencia.
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

### ¿Necesito una clave de API de X o iniciar sesión?

No. X Engagement Scraper de Xquik no necesita clave de API de X, inicio de
sesión ni credenciales.

### ¿Es legal extraer datos de interacción de X?

X Engagement Scraper de Xquik solicita campos públicos de X. Los resultados
pueden contener datos personales. Confirma que tu propósito es lícito y cumple
las normas de privacidad aplicables. Si tienes dudas, consulta a un abogado
calificado.

### ¿Por qué mi ejecución no devolvió resultados?

Abre primero la salida gratuita `diagnostics`. El estado de una ejecución vacía
te pide revisar tus objetivos y filtros. `stopCauses` da a cada causa un
`nextAction` que puedes seguir. La ejecución enumera cada entrada que no puede
leer y explica cómo corregirla. En 2024, X dejó de mostrar quién marcó un post
con Me gusta, así que `favoriters` no devuelve filas.

### ¿Puedo usar la API, las programaciones y las integraciones?

Sí. Elige entre 50 tareas públicas o 129 operaciones REST de Xquik. La
[pestaña API](https://apify.com/xquik/x-engagement-scraper/api) tiene ejemplos
en Python, JavaScript y cURL. Las
[programaciones](https://docs.apify.com/platform/schedules) de Apify ejecutan X
Engagement Scraper de Xquik con un cron. Los agentes usan
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Usa `latest`
salvo que necesites una compilación anterior.

### ¿Dónde consigo ayuda?

Abre un issue en la página del Actor o escribe a support@xquik.com con el ID de
la ejecución. Los diagnósticos gratuitos del almacén de clave-valor explican las
ejecuciones vacías, parciales o interrumpidas.

### ¿Puedo obtener una solución a medida?

Sí. Visita [xquik.com](https://xquik.com) o lee la
[documentación de la API](https://docs.xquik.com/introduction). Ahí encontrarás
el panel, la API, el servidor MCP y los webhooks.