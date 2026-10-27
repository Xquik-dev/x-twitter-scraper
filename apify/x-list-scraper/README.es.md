[English](README.md) · **Español** · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer conecta Xquik MCP con agentes de codificación](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Mira cómo Framer usa los extractores de Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
con Claude Code, Codex, Cursor & más, desde el minuto 6:07.

Xquik es el servicio de scraping de X (Twitter) más rápido y económico del
mundo, con los datos de X más completos. X List Scraper de Xquik recopila
detalles, posts, miembros & seguidores de Listas, & encuentra Listas por palabra
clave. La mayoría de los demás Actores de Apify cobran antes de filtrar o quitar
duplicados. Xquik solo cobra los resultados entregados, únicos y que cumplen tus
filtros.

Extrae detalles, posts, miembros & seguidores de Listas de X a partir de URLs de
Listas o IDs numéricos de Listas, o encuentra Listas públicas con términos de
búsqueda. Pagas **$0.00015 por fila entregada**, & Apify factura aparte el uso
de la plataforma. No necesitas clave de API de X ni iniciar sesión.

> Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
> "Twitter" y "X" son marcas registradas de X Corp.

## Datos & filtros de Listas

- Detalles de Listas con nombre, descripción, cantidad de miembros & de
  seguidores, fecha de creación, imagen de encabezado & el perfil público del
  dueño.
- Posts de Listas con texto, autor, métricas, contenido multimedia & marcas de
  tiempo.
- Miembros de Listas & seguidores de Listas.
- Búsqueda de Listas por palabra clave. Cada fila es 1 Lista con su dueño, su
  cantidad de miembros & su cantidad de seguidores.
- Respuestas opcionales en los posts de Listas.
- Filtros de fechas, tiempo Unix, idioma, contenido multimedia, interacción,
  verificación & perfiles.
- Filtros de perfil para miembros & seguidores, como `minFollowers`, `hasEmail`
  & `bioContains`.
- Las Listas públicas que una cuenta creó o en las que está, a partir de su
  nombre de usuario o de la URL de su perfil.
- Muchas Listas & tipos de recurso en 1 ejecución.
- Un límite global & un límite para cada recurso de Lista o término de búsqueda.
- Las ejecuciones se reanudan tras una migración de Apify.
- Eliminación de duplicados antes del cobro.

## Cómo extraer Listas de X

¿Recién llegas a Apify? Primero
[crea una cuenta gratis](https://console.apify.com/sign-up?fpr=xquik). El plan
gratuito no pide tarjeta de crédito & te da $5 para gastar cada mes. A $0.00015
por fila, $5 alcanzan para hasta 33,000 filas, sin contar el uso de la
plataforma. Luego vuelve aquí & haz clic en Try for free.

1. Abre X List Scraper de Xquik en Apify Console.
2. Pega URLs de Listas en `startUrls` o IDs numéricos de Listas en `listIds`.
   Para encontrar Listas, agrega en su lugar palabras clave en `searchTerms`.
3. Elige `resources` & agrega filtros como `sinceDate` o `minLikes`.
4. Define `maxItems` para limitar las filas entregadas & luego haz clic en
   Start.
5. Descarga el dataset en JSON, CSV o Excel, o usa la API de Apify.

`startUrls` acepta cada URL como texto simple o como objeto `{ "url": "..." }`.

```json
{
  "startUrls": [
    "https://x.com/i/lists/1748648376080666720",
    { "url": "https://x.com/nasa" }
  ]
}
```

## Entrada

```json
{
  "listIds": ["1748648376080666720"],
  "resources": ["info", "tweets", "members", "followers"],
  "includeReplies": false,
  "maxItems": 10000
}
```

Para encontrar Listas por palabra clave, envía términos de búsqueda.

```json
{ "searchTerms": ["space news", "climate science"], "maxItemsPerTarget": 50 }
```

Las ejecuciones pequeñas sin problemas omiten `run-report` & ahorran uso de
Apify. Activa `alwaysSaveRunRecords` para escribirlo en todas las ejecuciones.

## Salida

Cada fila define `resultType` como `list`, `listTweet`, `listMember` o
`listFollower`. `sourceTarget` guarda el ID de la Lista de entrada, o el término
de búsqueda que encontró una fila `list`. Una fila `list` guarda los detalles de
una Lista, 1 por Lista. Las demás filas usan la forma estable de respuesta de
post o de perfil de Xquik.

Las filas de miembros & de seguidores traen `email` & `contactInfo`. Contienen
los correos, teléfonos & enlaces que publica cada perfil.

### Las Listas de una cuenta

Agrega nombres de usuario en `twitterHandles`, o URLs de perfil en `startUrls`,
para enumerar las Listas públicas de cada cuenta.

```json
{ "twitterHandles": ["verge"], "accountLists": ["created", "memberships"] }
```

`created` enumera las Listas que creó la cuenta & `memberships`, las Listas que
la incluyen. Cada Lista es 1 fila con `resultType` `createdList` o
`listMembership`, `sourceTarget` con el nombre de usuario, & `id`, `name`,
`description`, `memberCount`, `subscriberCount`, `createdAt`, `bannerUrl` & el
perfil `owner`. X muestra una Lista privada solo a su dueño, así que las Listas
privadas quedan fuera.

Las Listas creadas de cada cuenta van antes que sus membresías. El Actor lee las
cuentas en paralelo, así que las filas de distintas cuentas llegan a medida que
se leen. Agrúpalas por `sourceTarget`.

Una fila es 1 cuenta & 1 Lista. Una Lista que comparten 2 de tus cuentas genera
2 filas, 1 bajo cada cuenta. Cada fila se cobra. `dedupeAcrossTargets` nunca
quita estas filas.

Los ejemplos usan valores de muestra. Los resultados reflejan datos en vivo. Una
fila de detalles de Lista se ve así.

```json
{
  "resultType": "list",
  "sourceTarget": "4143408",
  "id": "4143408",
  "name": "NASA Centers",
  "description": "NASA has 10 centers http://www.nasa.gov/about/sites",
  "memberCount": 11,
  "subscriberCount": 859,
  "createdAt": "2009-12-02T22:41:02.000Z",
  "owner": { "username": "NASA", "name": "NASA" }
}
```

Una fila de miembro de Lista se ve así.

```json
{
  "resultType": "listMember",
  "sourceTarget": "1748648376080666720",
  "username": "sample_user",
  "name": "Sample User",
  "followers": 1200,
  "verified": false
}
```

Una fila `list` de un término de búsqueda se ve así.

```json
{
  "resultType": "list",
  "sourceTarget": "space news",
  "id": "1000000000000000001",
  "name": "Sample Space News",
  "description": "Sample accounts that post space news.",
  "url": "https://x.com/i/lists/1000000000000000001",
  "memberCount": 35,
  "subscriberCount": 76,
  "owner": { "username": "sample_user", "name": "Sample User" }
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

Nombra una columna calculada en `fields` o `renameFields` para agregarla.

| Columna             | Fórmula                                                                                |
| ------------------- | -------------------------------------------------------------------------------------- |
| `totalEngagement`   | `likeCount` + `replyCount` + `retweetCount` + `quoteCount`. Un conteo que falta suma 0 |
| `engagementRate`    | `totalEngagement` × 100 ÷ los `followers` del autor, con 4 decimales                   |
| `engagementPerView` | `totalEngagement` × 100 ÷ `viewCount`, con 4 decimales                                 |

`totalEngagement` es `null` en una fila sin esos conteos. Una tasa es `null`
cuando su divisor falta o es 0.

## ¿Cuánto cuesta extraer Listas de X?

En todos los planes de Apify, cada fila entregada cuesta $0.00015. Apify factura
aparte tu uso de la plataforma.

Para más volumen, [elige un plan de Apify](https://apify.com/pricing?fpr=xquik)
con más uso prepagado.

- Un cobro por cada fila de datos entregada. Los diagnósticos son gratis en
  `diagnostics`.
- Sin tarifa de inicio, por Lista ni por recurso.
- La eliminación de duplicados se aplica antes del cobro.

## Límites & recuperación

X List Scraper de Xquik lee muchas Listas & recursos en 1 ejecución. Las filas
entregadas & el progreso se conservan tras un reinicio de Apify. El Actor no
agrega un límite de tiempo propio.

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
- [X Community Scraper](https://apify.com/xquik/x-community-scraper) extrae
  información, posts, búsquedas, miembros & moderadores de Comunidades. Úsalo
  cuando tus fuentes sean Comunidades de X. Desde $0.00015 por fila.
- [X Space Scraper](https://apify.com/xquik/x-space-scraper) encuentra Espacios
  por palabra clave & lee sus títulos, estados, horas, cantidad de oyentes,
  anfitriones & oradores. También lee transmisiones por URL o ID. Úsalo cuando
  sigas el audio & el video en vivo en X. Desde $0.00015 por Espacio o
  transmisión.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper) extrae tendencias
  en tiempo real por ubicación con posición, volumen, consulta & WOEID. Úsalo
  cuando sigas qué es tendencia y dónde. Desde $0.00015 por tendencia.
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
- [X (Twitter) Monitor](https://apify.com/xquik/x-twitter-monitor) detecta cada
  tweet, respuesta, cita, repost y cambio de perfil nuevos de las cuentas,
  normalmente en menos de un segundo después de que X lo muestra, además de los
  tweets de palabras clave y los seguimientos. Úsalo cuando necesites alertas en
  cuanto X muestre un tweet. Desde $0.0045 por monitor-hour.

## Preguntas frecuentes

Respuestas a preguntas comunes y, luego, dónde conseguir ayuda.

### ¿Necesito una clave de API de X o iniciar sesión?

No. X List Scraper de Xquik no necesita clave de API de X, inicio de sesión ni
credenciales.

### ¿Es legal extraer Listas de X?

X List Scraper de Xquik solicita campos públicos de X. Los resultados pueden
contener datos personales. Confirma que tu propósito es lícito & cumple las
normas de privacidad aplicables. Si tienes dudas, consulta a un abogado
calificado.

### ¿Por qué mi ejecución no devolvió resultados?

Lee primero el estado de la ejecución. El estado de una ejecución vacía te pide
revisar tus objetivos & filtros. La salida gratuita `diagnostics` aparece cuando
algo requiere atención. Su `stopCauses` da a cada causa un `nextAction` que
puedes seguir. La ejecución enumera cada entrada que no puede leer & explica
cómo corregirla.

### ¿Puedo usar la API, las programaciones & las integraciones?

Sí. Elige entre 50 tareas públicas o la API REST de Xquik. La
[pestaña API](https://apify.com/xquik/x-list-scraper/api) tiene ejemplos en
Python, JavaScript & cURL. Las
[programaciones](https://docs.apify.com/platform/schedules) de Apify ejecutan X
List Scraper de Xquik con un cron. Los agentes usan
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Usa `latest`
salvo que necesites una compilación anterior.

### ¿Dónde consigo ayuda?

Abre un issue en la
[pestaña Issues](https://apify.com/xquik/x-list-scraper/issues) con el ID de la
ejecución. Los diagnósticos gratuitos del almacén de clave-valor explican las
ejecuciones que requieren atención. Una ejecución que no recibe ninguna fila
explica el motivo en su estado.

### ¿Puedo obtener una solución a medida?

Sí. Describe lo que necesitas en la
[pestaña Issues](https://apify.com/xquik/x-list-scraper/issues). Xquik también
ofrece un panel, una API REST, un servidor MCP & webhooks. Encuentra el sitio
web de Xquik en su [perfil de Apify](https://apify.com/xquik).
