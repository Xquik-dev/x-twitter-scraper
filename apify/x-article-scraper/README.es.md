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
mundo, con los datos de X más completos. X Article Scraper de Xquik convierte
los Artículos de X de formato largo en Markdown y texto. También agrega
portadas, autores, fechas y métricas. La mayoría de los demás Actores de Apify
cobran antes de filtrar o quitar duplicados. Xquik solo cobra los resultados
entregados, únicos y que cumplen tus filtros.

Extrae Artículos de X de formato largo a partir de URLs de posts o IDs numéricos
de posts. Pagas **$0.00015 por artículo entregado**, y Apify factura aparte el
uso de la plataforma. No necesitas clave de API de X ni iniciar sesión.

> Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
> "Twitter" y "X" son marcas registradas de X Corp.

## Datos y formato de los Artículos

- Markdown con encabezados, listas, negrita, cursiva, enlaces e imágenes, sin
  HTML.
- Bloques `contents` que conservan el formato original.
- URLs de posts e IDs numéricos de posts en la misma ejecución.
- Todos los Artículos que publicó una cuenta, a partir de su nombre de usuario o
  de la URL de su perfil.
- Eliminación de duplicados antes de facturar.

X Article Scraper de Xquik nunca adivina los metadatos de los enlaces. Apify
muestra el Markdown como texto.

## Cómo extraer Artículos de X

1. Abre X Article Scraper de Xquik en Apify Console.
2. Pega URLs de posts con Artículos en `startUrls` o IDs de posts en `tweetIds`.
   Para enumerar los Artículos de una cuenta, agrega su nombre de usuario en
   `twitterHandles`.
3. Define `maxItems` para limitar los Artículos entregados y haz clic en Start.
4. Descarga el dataset en JSON, CSV o Excel, o usa la API de Apify.

`startUrls` acepta cada URL como texto simple o como objeto `{ "url": "..." }`:

```json
{
  "startUrls": [
    "https://x.com/github/status/2082201573976056245",
    { "url": "https://x.com/satyanadella/status/2066182223213293753" }
  ]
}
```

## Entrada

| Campo                  | Uso                                                | Valor predeterminado |
| ---------------------- | -------------------------------------------------- | -------------------- |
| `startUrls`            | URLs públicas de posts con Artículo o de perfiles  | Ninguno              |
| `tweetIds`             | IDs numéricos de posts con Artículo                | Ninguno              |
| `twitterHandles`       | Cuentas cuyos Artículos se enumeran                | Ninguno              |
| `maxItems`             | Límite global de Artículos entregados              | `100000`             |
| `dedupeAcrossTargets`  | Quita IDs de Artículos repetidos antes de facturar | `true`               |
| `maxConcurrency`       | Lecturas paralelas e independientes de Artículos   | `100`                |
| `alwaysSaveRunRecords` | Guarda `run-report` en cada ejecución              | `false`              |

## Salida

La pestaña Output abre `Articles`. `Results` enlaza a las filas. `Run Report`
enlaza a los conteos, la finalización, la duración y las anomalías. Una
ejecución grande, o una que tiene un problema, escribe el informe. Una ejecución
pequeña sin problemas muestra sus conteos en el estado de la ejecución. Activa
`alwaysSaveRunRecords` para escribirlo en todas las ejecuciones.

Los ejemplos usan valores de muestra. Los resultados reflejan datos en vivo. Una
fila de Artículo incluye estos campos:

```json
{
  "markdown": "# Article title\n\nPlain **Article** text",
  "bodyMarkdown": "Plain **Article** text",
  "bodyText": "Plain Article text",
  "contents": [
    {
      "type": "paragraph",
      "text": "Plain Article text",
      "inlineStyleRanges": [{ "offset": 6, "length": 7, "style": "Bold" }]
    }
  ]
}
```

Las filas agregan autor, fuente, portada, hora y métricas. Exporta en JSON o en
tablas.

Un nombre de usuario en `twitterHandles`, o una URL de perfil en `startUrls`,
enumera los Artículos de esa cuenta, primero los más recientes. Cada uno es una
fila `articlePreview` con `title`, `previewText`, `coverImageUrl` y `articleId`
del Artículo, sus fechas y las métricas del post. X no muestra el cuerpo ahí,
así que la fila no tiene `markdown` ni `contents`. Ejecuta su `tweetId` para
obtener el Artículo completo.

## ¿Cuánto cuesta extraer Artículos de X?

En todos los planes de Apify, cada artículo entregado cuesta $0.00015. Apify
factura aparte tu uso de la plataforma.

- Un cobro por cada fila de datos entregada. Los diagnósticos son gratis en
  `diagnostics`.
- Sin tarifa de inicio.
- Xquik quita los duplicados antes de facturar.

## Límites y recuperación

X Article Scraper de Xquik solo devuelve los Artículos públicos que X muestra.

Una extracción interrumpida escribe un diagnóstico `partial` gratis. Los
resultados disponibles se conservan. Lee `availableResults`, `failedTargets`,
`retryable` y `nextAction` antes de reintentar. Una salida exitosa del Actor
confirma la entrega, no una extracción completa.

El estado de la ejecución nombra cada causa de una detención anticipada.
`stopCauses` enumera cada causa con su propio `message`, `retryable` y
`nextAction`. Las causas son `target_not_found`, `target_suspended`,
`target_failed`, `pagination_safety_limit` y `deadline_reached`.
`target_suspended` nombra las cuentas que X suspendió. Un objetivo inexistente o
suspendido entra en la lista solo si otra causa detuvo la ejecución. La
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
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): extrae
  respuestas, citas, cuentas que hicieron repost e hilos de URLs o IDs de posts
  en bloque. Úsalo cuando midas quién interactuó con los posts. Desde $0.00015
  por fila.
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper):
  extrae los posts que citan posts, con texto, multimedia, conteos, autores y 11
  filtros. Úsalo cuando estudies quién citó posts y qué dijo. Desde $0.00015 por
  post.
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

No. X Article Scraper de Xquik no necesita clave de API de X, inicio de sesión
ni credenciales.

### ¿Es legal extraer Artículos de X?

X Article Scraper de Xquik solicita campos públicos de X. Los resultados pueden
contener datos personales. Confirma que tu propósito es lícito y cumple las
normas de privacidad aplicables. Si tienes dudas, consulta a un abogado
calificado.

### ¿Por qué mi ejecución no devolvió resultados?

Abre primero la salida gratuita `diagnostics`. El estado de una ejecución vacía
te pide revisar tus objetivos y filtros. `stopCauses` da a cada causa un
`nextAction` que puedes seguir. La ejecución avisa sobre los enlaces que no
puede leer y explica cómo corregirlos. X Article Scraper de Xquik solo devuelve
los Artículos públicos que X muestra.

### ¿Puedo usar la API, las programaciones y las integraciones?

Sí. Elige entre 50 tareas públicas o la API REST de Xquik. La
[pestaña API](https://apify.com/xquik/x-article-scraper/api) tiene ejemplos en
Python, JavaScript y cURL. Las
[programaciones](https://docs.apify.com/platform/schedules) de Apify ejecutan X
Article Scraper de Xquik con un cron. Los agentes usan
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Las lecturas
individuales usan
[Xquik REST](https://docs.xquik.com/api-reference/x/get-article). Usa `latest`
salvo que necesites una compilación anterior.

### ¿Dónde consigo ayuda?

Abre un issue en la página del Actor o escribe a support@xquik.com con el ID de
la ejecución. Los diagnósticos gratuitos del almacén de clave-valor explican las
ejecuciones vacías, parciales o interrumpidas.

### ¿Puedo obtener una solución a medida?

Sí. Visita [xquik.com](https://xquik.com) o lee la
[documentación de la API](https://docs.xquik.com/introduction). Ahí encontrarás
el panel, la API, el servidor MCP y los webhooks.