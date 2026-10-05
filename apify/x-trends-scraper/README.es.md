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
mundo, con los datos de X más completos. X Trends Scraper de Xquik recopila
tendencias en tiempo real por ubicación con posición, volumen y consulta. La
mayoría de los demás Actores de Apify cobran antes de filtrar o quitar
duplicados. Xquik solo cobra los resultados entregados, únicos y que cumplen tus
filtros.

Extrae las tendencias actuales de X (antes Twitter) en muchas ubicaciones en 1
ejecución. Pagas **$0.00015 por fila entregada**, y Apify factura aparte el uso
de la plataforma. No necesitas clave de API de X ni iniciar sesión.

> Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
> "Twitter" y "X" son marcas registradas de X Corp.

## Ubicaciones y datos de tendencias

- Varios países, ciudades o WOEIDs, leídos en paralelo.
- Hasta 50 tendencias actuales por ubicación.
- Una lista de todos los lugares donde X ofrece tendencias, con su WOEID, país y
  tipo.
- Búsqueda de lugares de X, con el ID de lugar que acepta la búsqueda de posts
  de X.
- Hashflags de X: el emoji personalizado que X muestra después de algunos
  hashtags.
- Posición, tema, consulta, volumen de posts, URL de búsqueda, WOEID y ubicación
  de origen.
- La ubicación de origen en cada fila.
- Etiquetas para las filas de hashtags y para el volumen de posts disponible.
- Eliminación de duplicados de entradas equivalentes antes de facturar.
- Exportación en JSON, CSV, Excel, XML y RSS con los datasets de Apify.
- Las ejecuciones se reanudan desde el estado guardado tras una migración de
  Apify.

## Cómo extraer tendencias de X

1. Abre X Trends Scraper de Xquik en Apify Console.
2. Escribe nombres de ubicación en `locations` o WOEIDs numéricos en `woeids`.
3. Define `maxTrendsPerLocation`, hasta 50 tendencias por ubicación.
4. Define `maxItems` para limitar las filas entregadas de toda la ejecución y
   haz clic en Start.
5. Descarga el dataset en JSON, CSV o Excel, o usa la API de Apify.

## Entrada

Usa nombres de ubicación, WOEIDs numéricos o ambos:

```json
{
  "locations": ["Worldwide", "United States", "Turkey"],
  "maxTrendsPerLocation": 50,
  "maxItems": 150
}
```

`locations` acepta cualquier país o ciudad donde X ofrece tendencias, como
Worldwide, United States, Japan o London. Los códigos de país de 2 letras
también funcionan. Un nombre para el que X no ofrece tendencias no devuelve
filas y no cuesta nada. `woeids` acepta WOEIDs numéricos.

Para ver todos los nombres y WOEIDs, activa `listLocations`. La ejecución
enumera entonces los lugares donde X ofrece tendencias, en lugar de tendencias:

```json
{ "listLocations": true, "country": "TR", "maxItems": 100 }
```

`country` acepta un nombre o un código de 2 letras. `placeType` acepta
`country`, `town`, `worldwide` o `unknown`. `nameContains` conserva los lugares
cuyo nombre contiene tu texto. Deja los 3 vacíos para enumerar todos los
lugares.

Para buscar lugares de X por nombre, completa `placeSearchTerms`. La ejecución
devuelve entonces lugares en lugar de tendencias:

```json
{ "placeSearchTerms": ["New York"], "maxItems": 20 }
```

Cada lugar tiene el `id` que la búsqueda de posts de X acepta como `place`. X
ordena los lugares, así que su orden puede variar entre ejecuciones. X enumera
hasta 20 lugares por nombre, y menos para algunos nombres, como New York. La
ejecución conserva solo los lugares con el nombre que escribiste, así que New
Delhi no devuelve filas y no cuesta nada.

`maxItems` limita toda la ejecución y se llena término por término, así que el
primer término puede usarlo todo. Define `maxItemsPerTarget` para dar a cada
término una parte igual:

```json
{
  "placeSearchTerms": ["Paris", "Rome"],
  "maxItems": 20,
  "maxItemsPerTarget": 10
}
```

Para enumerar los hashflags de X, activa `listHashflags`. Un hashflag es el
emoji personalizado que X muestra después de un hashtag durante un tiempo
definido:

```json
{ "listHashflags": true, "hashtagContains": "football" }
```

La ejecución enumera los hashflags que X muestra ahora. Desactiva `activeOnly`
para agregar los que ya terminaron y los próximos. `hashtagContains` conserva
los hashtags que contienen tu texto.

Una ejecución lee 1 tipo de fila. `listLocations` tiene prioridad sobre
`listHashflags`, que tiene prioridad sobre `placeSearchTerms`. Sin ninguno de
ellos, la ejecución lee tendencias.

Las ejecuciones pequeñas sin problemas omiten `run-report` y ahorran uso de
Apify. Activa `alwaysSaveRunRecords` para escribirlo en todas las ejecuciones.

## Salida

Cada tendencia es 1 fila del dataset. Las filas traen `name`, `rank`,
`tweetVolume`, `query`, `url`, `woeid`, `sourceTarget` y `resultType`.
`sourceTarget` es la ubicación tal como la escribiste. Los campos que faltan en
el origen quedan ausentes. X Trends Scraper de Xquik no inventa valores.

Los ejemplos usan valores de muestra. Los resultados reflejan datos en vivo. Una
fila de tendencia se ve así:

```json
{
  "name": "#SampleTrend",
  "rank": 1,
  "tweetVolume": 12000,
  "isHashtag": true,
  "woeid": 1,
  "sourceTarget": "Worldwide"
}
```

Con `listLocations`, cada lugar es 1 fila del dataset. Las filas traen `woeid`,
`name`, `country`, `countryCode`, `placeType`, `placeTypeCode`, `parentWoeid`,
`url` y `resultType`. `url` es la referencia antigua de X para el lugar y puede
no abrirse. Una fila de ubicación de tendencias se ve así:

```json
{
  "woeid": 2344116,
  "name": "Istanbul",
  "country": "Turkey",
  "countryCode": "TR",
  "placeType": "Town",
  "placeTypeCode": 7,
  "parentWoeid": 23424969,
  "resultType": "trendLocation"
}
```

Con `placeSearchTerms`, cada lugar es 1 fila del dataset. Las filas traen `id`,
`name`, `fullName`, `country`, `countryCode`, `placeType`, `url`, `centroid`,
`boundingBox`, `attributes`, `containedWithin`, `sourceTarget` y `resultType`.
`centroid` guarda la longitud y, luego, la latitud. Una fila de lugar se ve así:

```json
{
  "id": "0123456789abcdef",
  "name": "Sample City",
  "fullName": "Sample City, Sample Country",
  "country": "Sample Country",
  "countryCode": "US",
  "placeType": "city",
  "centroid": [-73.97, 40.78],
  "sourceTarget": "New York",
  "resultType": "place"
}
```

Con `listHashflags`, cada hashflag es 1 fila del dataset. Las filas traen
`hashtag`, `assetUrl`, `startsAt`, `endsAt`, `isHashfettiEnabled`, `animations`
y `resultType`. Una fila de hashflag se ve así:

```json
{
  "hashtag": "SampleHashtag",
  "assetUrl": "https://abs.twimg.com/hashflags/Sample/Sample.png",
  "startsAt": "2026-10-02T10:00:00.000Z",
  "endsAt": "2027-01-03T14:59:00.000Z",
  "isHashfettiEnabled": false,
  "animations": [],
  "resultType": "hashflag"
}
```

## ¿Cuánto cuesta extraer tendencias de X?

En todos los planes de Apify, cada fila entregada cuesta $0.00015. Apify factura
aparte tu uso de la plataforma.

- Un cobro por cada fila de datos entregada. Los diagnósticos son gratis en
  `diagnostics`.
- Una fila de ubicación de tendencias, de lugar o de hashflag cuesta lo mismo
  que una fila de tendencia.
- Sin tarifa de inicio, por consulta ni por ubicación.
- Xquik quita los duplicados antes de facturar.
- El cargo total máximo que definas en Apify limita las filas entregadas.

## Límites y recuperación

X Trends Scraper de Xquik lee muchas ubicaciones en 1 ejecución. Las filas
entregadas y el progreso se conservan tras un reinicio de Apify. El Actor no
agrega su propio límite de tiempo. Respeta cualquier tiempo límite que definas
en Apify.

Una extracción interrumpida escribe un diagnóstico `partial` gratis. Los
resultados disponibles se conservan. Lee `availableResults`, `failedTargets`,
`retryable` y `nextAction` antes de reintentar. Una salida exitosa del Actor
confirma la entrega, no una extracción completa.

El estado de la ejecución nombra cada causa de una detención anticipada.
`stopCauses` enumera cada causa con su propio `message`, `retryable` y
`nextAction`. Las causas son `target_not_found`, `target_failed`,
`pagination_safety_limit` y `deadline_reached`. Un objetivo inexistente entra en
la lista solo si otra causa detuvo la ejecución. La ejecución es `retryable` si
alguna causa lo es.

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

### ¿Necesito una clave de API de X o iniciar sesión?

No. X Trends Scraper de Xquik no necesita clave de API de X, inicio de sesión ni
credenciales.

### ¿Es legal extraer tendencias de X?

X Trends Scraper de Xquik solicita campos públicos de X. Los resultados pueden
contener datos personales. Confirma que tu propósito es lícito y cumple las
normas de privacidad aplicables. Si tienes dudas, consulta a un abogado
calificado.

### ¿Por qué mi ejecución no devolvió resultados?

Abre primero la salida gratuita `diagnostics`. El estado de una ejecución vacía
te pide revisar tus objetivos y filtros. `stopCauses` da a cada causa un
`nextAction` que puedes seguir. Una ubicación para la que X no ofrece tendencias
no devuelve filas. Activa `listLocations` para ver los nombres que X acepta.

### ¿Puedo usar la API, las programaciones y las integraciones?

Sí. Elige entre 50 tareas públicas o la API REST de Xquik. La
[pestaña API](https://apify.com/xquik/x-trends-scraper/api) tiene ejemplos en
Python, JavaScript y cURL. Las
[programaciones](https://docs.apify.com/platform/schedules) de Apify ejecutan X
Trends Scraper de Xquik con un cron. Los agentes usan
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