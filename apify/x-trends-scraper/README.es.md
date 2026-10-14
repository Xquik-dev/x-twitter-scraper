[English](README.md) · **Español** · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer conecta Xquik MCP con agentes de codificación](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Mira cómo Framer usa los extractores de Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
con Claude Code, Codex, Cursor & más, desde el minuto 6:07.

Xquik es el servicio de scraping de X (Twitter) más rápido y económico del
mundo, con los datos de X más completos. X Trends Scraper de Xquik recopila
tendencias en tiempo real por ubicación con posición, volumen & consulta. La
mayoría de los demás Actores de Apify cobran antes de filtrar o quitar
duplicados. Xquik solo cobra los resultados entregados, únicos y que cumplen tus
filtros.

Extrae las tendencias actuales de Twitter en muchas ubicaciones en 1 ejecución.
O lee tendencias pasadas del archivo de tendencias de Twitter de Xquik, que
empieza el 2026-10-13 a las 02:20 UTC. Pagas **$0.00015 por fila entregada**, &
Apify factura aparte el uso de la plataforma. No necesitas clave de API de X ni
iniciar sesión.

> Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
> "Twitter" y "X" son marcas registradas de X Corp.

## Ubicaciones & datos de tendencias

- Varios países, ciudades o WOEIDs, leídos en paralelo.
- Hasta 50 tendencias actuales por ubicación.
- Tendencias pasadas del archivo de tendencias de Twitter, por fecha & hora,
  desde el 2026-10-13.
- Una lista de todos los lugares donde X ofrece tendencias, con su WOEID, país &
  tipo.
- Búsqueda de lugares de X, con el ID de lugar que acepta la búsqueda de posts
  de X.
- Hashflags de X, el emoji personalizado que X muestra después de algunos
  hashtags.
- Posición, tema, consulta, volumen de posts, URL de búsqueda, WOEID & ubicación
  de origen.
- La ubicación de origen en cada fila.
- Etiquetas para las filas de hashtags & para el volumen de posts disponible.
- Eliminación de duplicados de entradas equivalentes antes del cobro.
- Exportación en JSON, CSV, Excel, XML & RSS con los datasets de Apify.
- Las ejecuciones se reanudan desde el estado guardado tras una migración de
  Apify.

## Cómo extraer tendencias de X

¿Recién llegas a Apify? Primero
[crea una cuenta gratis](https://console.apify.com/sign-up?fpr=xquik). El plan
gratuito no pide tarjeta de crédito & te da $5 para gastar cada mes. A $0.00015
por tendencia, $5 alcanzan para hasta 33,000 tendencias, sin contar el uso de la
plataforma. Luego vuelve aquí & haz clic en Try for free.

1. Abre X Trends Scraper de Xquik en Apify Console.
2. Escribe nombres de ubicación en `locations` o WOEIDs numéricos en `woeids`.
3. Define `maxTrendsPerLocation`, hasta 50 tendencias por ubicación.
4. Define `maxItems` para limitar las filas entregadas de toda la ejecución &
   luego haz clic en Start.
5. Descarga el dataset en JSON, CSV o Excel, o usa la API de Apify.

## Entrada

Usa nombres de ubicación, WOEIDs numéricos o ambos.

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
filas & no cuesta nada. `woeids` acepta WOEIDs numéricos.

Para ver todos los nombres & WOEIDs, activa `listLocations`. La ejecución
enumera entonces los lugares donde X ofrece tendencias, en lugar de tendencias.

```json
{ "listLocations": true, "country": "TR", "maxItems": 100 }
```

`country` acepta un nombre o un código de 2 letras. `placeType` acepta
`country`, `town`, `worldwide` o `unknown`. `nameContains` conserva los lugares
cuyo nombre contiene tu texto. Deja los 3 vacíos para enumerar todos los
lugares.

Para buscar lugares de X por nombre, completa `placeSearchTerms`. La ejecución
devuelve entonces lugares en lugar de tendencias.

```json
{ "placeSearchTerms": ["New York"], "maxItems": 20 }
```

Cada lugar tiene el `id` que la búsqueda de posts de X acepta como `place`. X
ordena los lugares, así que su orden puede variar entre ejecuciones. X enumera
hasta 20 lugares por nombre, & menos para algunos nombres, como New York. La
ejecución conserva solo los lugares con el nombre que escribiste, así que New
Delhi no devuelve filas & no cuesta nada.

`maxItems` limita toda la ejecución & se llena término por término, así que el
primer término puede usarlo todo. Define `maxItemsPerTarget` para dar a cada
término una parte igual.

```json
{
  "placeSearchTerms": ["Paris", "Rome"],
  "maxItems": 20,
  "maxItemsPerTarget": 10
}
```

Para enumerar los hashflags de X, activa `listHashflags`. Un hashflag es el
emoji personalizado que X muestra después de un hashtag durante un tiempo
definido.

```json
{ "listHashflags": true, "hashtagContains": "football" }
```

La ejecución enumera los hashflags que X muestra ahora. Desactiva `activeOnly`
para agregar los que ya terminaron & los próximos. `hashtagContains` conserva
los hashtags que contienen tu texto.

Para ver qué fue tendencia en Twitter ayer o en cualquier momento pasado,
completa `at`. La ejecución lee entonces la lista guardada más cercana a ese
momento para cada ubicación.

```json
{ "locations": ["Turkey"], "at": "2026-10-13T14:00:00Z" }
```

`at` acepta una fecha como 2026-10-13, una hora como 2026-10-13T14:00:00Z o
segundos Unix. Una hora sin zona es UTC. Xquik guarda 12 listas por hora para
cada ubicación & conserva cada una 25 meses. El historial de tendencias de
Twitter empieza el 2026-10-13 a las 02:20 UTC. Un momento a más de 24 horas de
toda lista guardada no devuelve filas & no cuesta nada.

`at` también acepta un lapso hacia atrás desde la ejecución, como un número &
`s`, `m`, `h` o `d`. Con `24h`, una programación diaria lee las tendencias de
ayer en cada ejecución.

```json
{ "locations": ["Turkey"], "at": "24h" }
```

Para un rango, completa `from` & `to`. La ejecución devuelve 1 lista guardada
por cada paso de `every`, como `15m`, `1h` o `1d`.

```json
{
  "locations": ["Turkey"],
  "from": "2026-10-13",
  "to": "2026-10-14",
  "every": "1h",
  "maxItems": 1200
}
```

Sin `to`, el rango termina ahora. Sin `every`, la ejecución devuelve 1 lista por
hora. Un paso sin lista guardada no devuelve filas. `from` & `to` también
aceptan lapsos, así que `from` con `24h` lee las últimas 24 horas. `at` tiene
prioridad sobre `from` & `to`.

Una ejecución lee 1 tipo de fila. `listLocations` tiene prioridad sobre
`listHashflags`, que tiene prioridad sobre `placeSearchTerms`. Sin ninguno de
ellos, la ejecución lee tendencias.

Las ejecuciones pequeñas sin problemas omiten `run-report` & ahorran uso de
Apify. Activa `alwaysSaveRunRecords` para escribirlo en todas las ejecuciones.

## Salida

Cada tendencia es 1 fila del dataset. Las filas traen `name`, `rank`,
`tweetVolume`, `query`, `url`, `woeid`, `sourceTarget` & `resultType`.
`sourceTarget` es la ubicación tal como la escribiste. Los campos que faltan en
el origen quedan ausentes. X Trends Scraper de Xquik no inventa valores.

Los ejemplos usan valores de muestra. Los resultados reflejan datos en vivo. Una
fila de tendencia se ve así.

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

Las filas de `at` o de un rango también traen `capturedAt`, el momento en que
Xquik leyó su lista en X. Las filas de `at` traen además `requestedAt`, el
momento que pediste. Xquik no estima ninguno de los 2.

Con `listLocations`, cada lugar es 1 fila del dataset. Las filas traen `woeid`,
`name`, `country`, `countryCode`, `placeType`, `placeTypeCode`, `parentWoeid`,
`url` & `resultType`. `url` es la referencia antigua de X para el lugar & puede
no abrirse. Una fila de ubicación de tendencias se ve así.

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
`boundingBox`, `attributes`, `containedWithin`, `sourceTarget` & `resultType`.
`centroid` guarda la longitud y, luego, la latitud. Una fila de lugar se ve así.

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
& `resultType`. Una fila de hashflag se ve así.

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

## Columnas de salida

8 campos de entrada dan forma a cada fila después de que la ejecución la lee. No
ejecutan código & no cambian el precio.

| Campo               | Qué hace                                                                                   |
| ------------------- | ------------------------------------------------------------------------------------------ |
| `fields`            | Conserva solo estos campos, en el orden & la forma en que los escribes                     |
| `omitFields`        | Quita estos campos & conserva el resto                                                     |
| `renameFields`      | Mueve un campo a una columna con un nombre nuevo                                           |
| `flatten`           | Convierte cada objeto anidado en columnas de primer nivel                                  |
| `fillMissingFields` | Llena con `null` un campo conservado que falta en una fila. Activo de forma predeterminada |
| `joinFields`        | Convierte cada una de estas listas en 1 valor de texto                                     |
| `joinSeparator`     | Texto entre los elementos unidos. El valor predeterminado es una coma & un espacio         |
| `constantFields`    | Agrega una columna con el mismo texto en cada fila                                         |

- Usa un punto para un campo dentro de un objeto. Las mayúsculas & los guiones
  bajos no importan.
- Cada fila conserva su `id`.
- Con `fields`, un campo que falta en una fila llega como `null`. Así, todas las
  filas tienen las mismas columnas.
- Un nombre de campo incorrecto detiene la ejecución antes de leer & no cobra
  nada.
- Si no se pueden comprobar los nombres, la ejecución sigue leyendo & al final
  enumera los nombres que no encontró.
- La ejecución ignora una función de mapeo o un filtro jq escrito para otro
  Actor.

## ¿Cuánto cuesta extraer tendencias de X?

En todos los planes de Apify, cada fila entregada cuesta $0.00015. Apify factura
aparte tu uso de la plataforma.

Para más volumen, [elige un plan de Apify](https://apify.com/pricing?fpr=xquik)
con más uso prepagado.

- Un cobro por cada fila de datos entregada. Los diagnósticos son gratis en
  `diagnostics`.
- Una fila de ubicación de tendencias, de lugar o de hashflag cuesta lo mismo
  que una fila de tendencia.
- Sin tarifa de inicio, por consulta ni por ubicación.
- La eliminación de duplicados se aplica antes del cobro.
- La configuración de cargo total máximo de Apify limita las filas entregadas.

## Límites & recuperación

X Trends Scraper de Xquik lee muchas ubicaciones en 1 ejecución. Las filas
entregadas & el progreso se conservan tras un reinicio de Apify. El Actor no
agrega un límite de tiempo propio. Respeta cualquier tiempo límite que definas
en Apify.

Una extracción interrumpida escribe un diagnóstico `partial` gratis. Los
resultados disponibles se conservan. Lee `availableResults`, `failedTargets`,
`retryable` & `nextAction` antes de reintentar. Una salida exitosa del Actor
confirma la entrega, no una extracción completa.

El estado de la ejecución nombra cada causa de una detención anticipada.
`stopCauses` enumera cada causa con su propio `message`, `retryable` &
`nextAction`. Las causas son `target_not_found`, `target_failed`,
`pagination_safety_limit` & `deadline_reached`. Un objetivo inexistente entra en
la lista solo si otra causa detuvo la ejecución. La ejecución es `retryable` si
alguna causa lo es.

## Actores de Xquik relacionados

Todos los Actores de Xquik comparten el mismo motor de extracción, el cobro
después de filtrar & los diagnósticos. Elige el que se ajuste a los datos que
necesitas.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper) extrae posts de
  búsquedas, cronologías de perfiles, Listas & IDs de posts con más de 50
  filtros & exportaciones planas. Úsalo cuando necesites datos de posts sin
  análisis. Desde $0.00015 por fila.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper) extrae perfiles
  con sus posts, respuestas, contenido multimedia & seguidores a partir de
  nombres de usuario, IDs o URLs. Úsalo cuando partas de cuentas en lugar de
  búsquedas. Desde $0.00015 por fila.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper) extrae respuestas,
  comentarios & conversaciones completas debajo de posts con más de 25 filtros.
  Úsalo cuando necesites la conversación debajo de los posts. Desde $0.00015 por
  fila.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper) extrae
  respuestas, citas, cuentas que hicieron repost & hilos de URLs o IDs de posts
  en bloque. Úsalo cuando midas quién interactuó con los posts. Desde $0.00015
  por fila.
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper)
  extrae los posts que citan otros posts, con texto, contenido multimedia,
  conteos, autores & 11 filtros. Úsalo cuando estudies quién citó posts & qué
  dijo. Desde $0.00015 por post.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper) extrae
  seguidores, cuentas seguidas, miembros de Listas, suscriptores & miembros de
  Comunidades como filas de perfil. Úsalo cuando necesites listas de audiencia o
  de miembros. Desde $0.00015 por perfil.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper) busca
  usuarios por nombre de usuario, biografía & ubicación con filtros de
  seguidores, verificación, antigüedad & ubicación. Úsalo cuando crees listas de
  cuentas a partir de búsquedas. Desde $0.00015 por perfil.
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper)
  consulta dónde tienen su sede las cuentas con la etiqueta "Cuenta con sede en"
  de X, cómo se conectaron a X & sus cambios de nombre de usuario. Úsalo cuando
  verifiques dónde tienen su sede las cuentas. Desde $0.00015 por cuenta.
- [X Email Scraper](https://apify.com/xquik/x-email-scraper) obtiene los
  correos, teléfonos & enlaces que las cuentas publican en sus perfiles, a
  partir de nombres de usuario, seguidores o búsquedas de usuarios. Úsalo cuando
  necesites los correos que publican los perfiles. Desde $0.00015 por perfil.
- [X List Scraper](https://apify.com/xquik/x-list-scraper) extrae posts,
  miembros & seguidores de Listas a partir de URLs o IDs de Listas. Úsalo cuando
  una Lista curada defina tus fuentes. Desde $0.00015 por fila.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper) extrae
  información, posts, búsquedas, miembros & moderadores de Comunidades. Úsalo
  cuando tus fuentes sean Comunidades de X. Desde $0.00015 por fila.
- [X Space Scraper](https://apify.com/xquik/x-space-scraper) encuentra Espacios
  por palabra clave & lee sus títulos, estados, horas, cantidad de oyentes,
  anfitriones & oradores. También lee transmisiones por URL o ID. Úsalo cuando
  sigas el audio & el video en vivo en X. Desde $0.00015 por Espacio o
  transmisión.
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper) extrae ofertas de
  empleo de X por palabra clave, lugar, modalidad de trabajo, nivel de
  experiencia & empresa, con salarios & enlaces para postularse. Úsalo cuando
  recopiles vacantes publicadas en X. Desde $0.00015 por empleo.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper) extrae
  Artículos de X de formato largo como Markdown & texto con portadas, autores,
  fechas & métricas. Úsalo cuando necesites el cuerpo de los Artículos, no
  posts. Desde $0.00015 por artículo.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader) extrae o
  guarda fotos, videos & GIFs de posts o perfiles con opciones de MP4 &
  metadatos. Úsalo cuando necesites los archivos multimedia en sí. Desde
  $0.00015 por fila de contenido multimedia.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring)
  sigue menciones de marca con respuestas de IA sobre relevancia, sentimiento &
  experiencia del cliente, & compara ejecuciones. Úsalo cuando vigiles una marca
  a lo largo del tiempo. Desde $0.0003 por post analizado.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis)
  etiqueta con IA la actitud, la intensidad & la probabilidad de sarcasmo de
  cada post. Úsalo cuando necesites el sentimiento general sobre cualquier tema.
  Desde $0.0003 por post analizado.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)
  etiqueta con IA la postura alcista, bajista, neutral o mixta, el tipo de
  contenido, la convicción & la relevancia del activo. Úsalo cuando sigas
  acciones, cripto o conversaciones de trading. Desde $0.0003 por post
  analizado.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)
  etiqueta con IA los posts de noticias por formato, atribución de la fuente &
  relevancia del tema. Úsalo cuando separes la información de la opinión. Desde
  $0.0003 por post analizado.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)
  responde con IA tus propias preguntas de categoría, puntaje & sí o no para
  cada post. Úsalo cuando los análisis predefinidos no se ajusten a tus
  etiquetas. Desde $0.0003 por post analizado.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)
  estima un Viral Score de 0 a 100 & un veredicto para cada post a partir de 8
  respuestas de IA sobre sus rasgos. Úsalo cuando estudies por qué los posts se
  difunden o fracasan. Desde $0.0003 por post analizado.

## Preguntas frecuentes

Respuestas a preguntas comunes y, luego, dónde conseguir ayuda.

### ¿Necesito una clave de API de X o iniciar sesión?

No. X Trends Scraper de Xquik no necesita clave de API de X, inicio de sesión ni
credenciales.

### ¿Es legal extraer tendencias de X?

X Trends Scraper de Xquik solicita campos públicos de X. Los resultados pueden
contener datos personales. Confirma que tu propósito es lícito & cumple las
normas de privacidad aplicables. Si tienes dudas, consulta a un abogado
calificado.

### ¿Por qué mi ejecución no devolvió resultados?

Lee primero el estado de la ejecución. El estado de una ejecución vacía te pide
revisar tus objetivos & filtros. La salida gratuita `diagnostics` aparece cuando
algo requiere atención. Su `stopCauses` da a cada causa un `nextAction` que
puedes seguir. Una ubicación para la que X no ofrece tendencias no devuelve
filas. Activa `listLocations` para ver los nombres que X acepta.

### ¿Puedo extraer tendencias históricas de Twitter?

Sí, desde el 2026-10-13 a las 02:20 UTC. Completa `at` para 1 momento pasado, o
`from` & `to` para un rango. En una programación, usa un lapso como `24h`. Cada
fila trae `capturedAt`, el momento de su lista guardada.

### ¿Puedo usar la API, las programaciones & las integraciones?

Sí. Elige entre 50 tareas públicas o la API REST de Xquik. La
[pestaña API](https://apify.com/xquik/x-trends-scraper/api) tiene ejemplos en
Python, JavaScript & cURL. Las
[programaciones](https://docs.apify.com/platform/schedules) de Apify ejecutan X
Trends Scraper de Xquik con un cron. Los agentes usan
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Usa `latest`
salvo que necesites una compilación anterior.

### ¿Dónde consigo ayuda?

Abre un issue en la
[pestaña Issues](https://apify.com/xquik/x-trends-scraper/issues) con el ID de
la ejecución. Los diagnósticos gratuitos del almacén de clave-valor explican las
ejecuciones que requieren atención. Una ejecución que no recibe ninguna fila
explica el motivo en su estado.

### ¿Puedo obtener una solución a medida?

Sí. Describe lo que necesitas en la
[pestaña Issues](https://apify.com/xquik/x-trends-scraper/issues). Xquik también
ofrece un panel, una API REST, un servidor MCP & webhooks. Encuentra el sitio
web de Xquik en su [perfil de Apify](https://apify.com/xquik).
