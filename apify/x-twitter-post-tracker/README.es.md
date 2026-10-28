[English](README.md) · **Español** · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer conecta Xquik MCP con agentes de codificación](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Mira cómo Framer usa los extractores de Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
con Claude Code, Codex, Cursor & más, desde el minuto 6:07.

Xquik es el servicio de scraping de X (Twitter) más rápido y económico del
mundo, con los datos de X más completos. X (Twitter) Post Tracker de Xquik
registra los conteos públicos de los posts que elijas. No necesita cookies de X
ni inicio de sesión. Vuelve a ejecutarlo más tarde y cada fila muestra qué
cambió. La mayoría de los demás Actores de Apify cobran antes de filtrar o
quitar duplicados. Xquik solo cobra los resultados entregados y únicos.

Pega URLs de posts o IDs de tweets. Cada ejecución guarda 1 fila de captura por
post. Una fila trae las visualizaciones, los Me gusta, los reposts, las
respuestas, las citas y los guardados de ese momento. También trae el cambio
desde la captura anterior y desde la primera. Pagas **$0.00015 por captura
entregada**, y Apify factura aparte el uso de la plataforma.

> Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
> "Twitter" y "X" son marcas registradas de X Corp.

## ¿Por qué usar X (Twitter) Post Tracker?

- **Crecimiento en cada fila.** Cada captura trae el cambio desde la última
  ejecución y desde la primera.
- **Historial sin base de datos.** Pasa el dataset de una ejecución anterior. La
  primera captura se mantiene de una ejecución a otra.
- **Pega cualquier forma de post.** Combina URLs de posts e IDs de tweets en 1
  lista.
- **Exportaciones listas para hojas de cálculo.** Ajusta las columnas con
  `fields` y `flatten`. Exporta en JSON, CSV, Excel, XML o RSS.

## Qué obtienes

### Resultados completos

- Cada resultado trae los datos más completos que X tiene sobre él.

### Filas precisas

- Un post figura como faltante solo cuando ya no existe.
- Cada ID de una fila se mantiene exacto.
- Las filas solo traen datos públicos.

### Datos actualizados

- Las lecturas siguen funcionando cuando X lanza cambios.

### Velocidad

- Una respuesta lenta de X no frena tu solicitud.
- Los Actores leen muchos nombres de usuario, posts y búsquedas a la vez.
- Las lecturas terminan en cuanto llegan sus filas.
- Las llamadas de Actores que se traban se recuperan solas.

### Cobro justo

- Una entrada inválida no cuesta nada, porque se rechaza antes de cualquier
  lectura.
- Los Actores solo cobran filas entregadas, únicas y que cumplen tus filtros.
- Una ejecución reiniciada nunca cobra 2 veces.
- Un límite de gasto se convierte en un límite de filas, y los diagnósticos se
  siguen escribiendo.
- Las ejecuciones pequeñas terminan con un consejo para bajar el costo.

### Confiabilidad

- Una falla puntual de X no hace fallar tu solicitud.
- Un plazo vencido devuelve las filas ya encontradas, con diagnósticos.
- Los Actores resisten caídas breves de Xquik.
- Las ejecuciones de Actores sobreviven a reinicios sin repetir filas.
- Una fila con errores no arruina un lote.
- Las ejecuciones detenidas conservan sus filas y su reporte.
- Una ejecución que no puede iniciar igual explica por qué.
- Los problemas del lado de X se corrigen antes de llegar a tus lecturas.
- Soporte puede ver con exactitud lo que devolvió una solicitud o una ejecución.

### Hecho para agentes

- Los Actores aceptan entradas escritas para otros Actores.
- Cada ejecución dice por qué terminó y si conviene reintentar.

### Datos detallados

- Cada fila de captura incluye el cambio de cada conteo desde una ejecución anterior.

### Controles de calidad

- Cada campo que muestra X se entrega, se omite a propósito o se comprueba que
  no existe.
- Cada lectura se prueba en vivo cada hora.

## ¿Qué datos puede extraer X (Twitter) Post Tracker?

- Visualizaciones, Me gusta, reposts, respuestas, citas y guardados de cada
  post.
- La hora de cada captura, en `capturedAt`.
- La primera captura de cada post, con su hora y sus conteos.
- La captura anterior, tomada del dataset de la ejecución anterior.
- El cambio de cada conteo desde la captura anterior.
- El cambio de cada conteo desde la primera captura.
- El texto del post, su fecha, su enlace y su autor.
- Muchos posts en 1 ejecución, entregados en el orden de la entrada.
- Exportación en JSON, CSV, Excel, XML y RSS con los datasets de Apify.

## Cómo seguir las métricas de posts de X a lo largo del tiempo

¿Eres nuevo en Apify? Primero
[crea una cuenta gratis](https://console.apify.com/sign-up?fpr=xquik). El plan
gratuito no pide tarjeta de crédito y te da $5 para gastar cada mes. A $0.00015
por captura, $5 alcanzan para hasta 33,000 capturas antes del uso de la
plataforma. Luego vuelve aquí y presiona Try for free.

1. Abre X (Twitter) Post Tracker de Xquik en Apify Console.
2. Pega URLs de posts o IDs de tweets en `tweetIds`.
3. Deja `previousDatasetId` vacío en la primera ejecución y haz clic en Start.
4. En la siguiente ejecución, elige el dataset de la primera ejecución en
   `previousDatasetId`.
5. Descarga el dataset en JSON, CSV o Excel, o usa la API de Apify.

En ningún paso ingresas cookies de X, datos de inicio de sesión ni una clave de
API.

## Entrada

`tweetIds` acepta IDs de tweets y URLs de posts, en cualquier combinación.

```json
{
  "tweetIds": [
    "2102882545427714266",
    "https://x.com/OpenAI/status/2082577277246972300",
    "20"
  ],
  "maxItems": 1000
}
```

`startUrls` acepta las mismas URLs de posts. Escribe cada una como texto simple
o como objeto `{ "url": "..." }`.

`previousDatasetId` indica el dataset de una ejecución anterior de este Actor.
El formulario te deja elegirlo entre tus datasets. El Actor solo lee ese
dataset. Déjalo vacío en la primera ejecución.

```json
{
  "tweetIds": ["2102882545427714266", "20"],
  "previousDatasetId": "<dataset ID of an earlier run>"
}
```

Un post que la entrada nombra 2 veces recibe 1 fila. `maxItems` conserva los
primeros posts de la entrada. Las ejecuciones pequeñas sin problemas omiten
`run-report` y ahorran uso de Apify. Activa `alwaysSaveRunRecords` para
escribirlo en todas las ejecuciones.

## Ejecútalo con una programación

Las [programaciones](https://docs.apify.com/platform/schedules) de Apify inician
el Actor con un cron, por ejemplo cada hora.

1. Ejecuta el Actor 1 vez con tus posts y sin `previousDatasetId`.
2. Crea una programación para el Actor en Apify Console.
3. Dale a la programación la misma entrada en `tweetIds`.
4. Define `previousDatasetId` con el dataset de la primera ejecución.

Así, cada ejecución programada compara sus conteos con ese dataset. Para
comparar cada ejecución con la anterior, inicia las ejecuciones con la API de
Apify. Pasa el `defaultDatasetId` de la última ejecución como
`previousDatasetId`. La primera captura se sigue arrastrando, así que
`changeSinceFirst` sigue contando desde el día 1. Un post que faltó en la última
ejecución empieza un nuevo `firstSnapshot` en la siguiente.

Si una ejecución no guarda capturas, pasa el dataset de la ejecución anterior.

## Salida

Cada post es 1 fila del dataset por ejecución. Una fila empieza con `postId`,
`url`, `text`, `createdAt` y `author`. Luego vienen `capturedAt` y los 6
conteos, `viewCount`, `likeCount`, `retweetCount`, `replyCount`, `quoteCount` y
`bookmarkCount`. Después vienen `firstSnapshot`, `previousSnapshot`,
`changeSincePrevious` y `changeSinceFirst`. Un conteo de 0 puede significar que
X no lo informó.

Los ejemplos usan valores de muestra. Los resultados reflejan datos en vivo. La
fila de una segunda ejecución se ve así.

```json
{
  "postId": "2102882545427714266",
  "url": "https://x.com/NASA/status/2102882545427714266",
  "text": "Welcome to the Artemis Accords, Croatia",
  "createdAt": "Wed Sep 23 22:07:23 +0000 2026",
  "author": { "id": "11348282", "username": "NASA", "name": "NASA" },
  "capturedAt": "2026-10-28T09:00:00.000Z",
  "viewCount": 1291231,
  "likeCount": 9043,
  "retweetCount": 772,
  "replyCount": 207,
  "quoteCount": 100,
  "bookmarkCount": 661,
  "firstSnapshot": {
    "capturedAt": "2026-10-25T09:00:00.000Z",
    "viewCount": 500000,
    "likeCount": 5000,
    "retweetCount": 500,
    "replyCount": 150,
    "quoteCount": 50,
    "bookmarkCount": 400
  },
  "previousSnapshot": {
    "capturedAt": "2026-10-27T09:00:00.000Z",
    "viewCount": 1200000,
    "likeCount": 9000,
    "retweetCount": 770,
    "replyCount": 205,
    "quoteCount": 99,
    "bookmarkCount": 640
  },
  "changeSincePrevious": {
    "viewCount": 91231,
    "likeCount": 43,
    "retweetCount": 2,
    "replyCount": 2,
    "quoteCount": 1,
    "bookmarkCount": 21
  },
  "changeSinceFirst": {
    "viewCount": 791231,
    "likeCount": 4043,
    "retweetCount": 272,
    "replyCount": 57,
    "quoteCount": 50,
    "bookmarkCount": 261
  },
  "resultType": "snapshot",
  "sourceTarget": "2102882545427714266"
}
```

Una fila distingue 3 casos.

| La fila trae                           | Qué significa                                             |
| -------------------------------------- | --------------------------------------------------------- |
| `previousSnapshot: null`               | El dataset anterior no tiene ninguna fila para este post. |
| `previousSnapshot` con conteos         | La fila se compara con esa captura.                       |
| Un conteo `null` en un campo de cambio | A la fila anterior le falta ese conteo.                   |

En una primera ejecución, `firstSnapshot` trae la hora y los conteos de la
propia fila. Los 2 campos de cambio son `null` hasta una ejecución posterior.

## Columnas de salida

8 entradas dan forma a cada fila después de que la ejecución la lee. No ejecutan
código ni cambian el precio.

| Campo               | Qué hace                                                                             |
| ------------------- | ------------------------------------------------------------------------------------ |
| `fields`            | Conserva solo estos campos, en el orden y con la escritura que uses                  |
| `omitFields`        | Quita estos campos y conserva el resto                                               |
| `renameFields`      | Mueve un campo a una columna con un nombre nuevo                                     |
| `flatten`           | Convierte cada objeto anidado en columnas de primer nivel                            |
| `fillMissingFields` | Rellena con `null` un campo conservado que le falta a una fila. Activado por defecto |
| `joinFields`        | Convierte cada una de estas listas en 1 valor de texto                               |
| `joinSeparator`     | Texto entre los elementos unidos. Por defecto es una coma y un espacio               |
| `constantFields`    | Agrega una columna con el mismo texto en cada fila                                   |

- Usa un punto para un campo dentro de un objeto, como
  `changeSinceFirst.viewCount`.
- Aplana `changeSincePrevious` para obtener 1 columna por conteo.
- Un nombre de campo incorrecto detiene la ejecución antes de leer y no cobra
  nada.
- La ejecución ignora una función map o un filtro jq escritos para otro Actor.

## ¿Cuánto cuesta seguir posts de X?

En todos los planes de Apify, cada captura entregada cuesta $0.00015. Apify
factura aparte tu uso de la plataforma.

Para más volumen, [elige un plan de Apify](https://apify.com/pricing?fpr=xquik)
con más uso prepagado.

- Un cobro por cada fila de captura entregada. Los diagnósticos son gratis en
  `diagnostics`.
- Sin tarifa de inicio ni tarifa por leer el dataset anterior.
- La ejecución quita los posts duplicados antes de facturar.
- Un post que X no tiene no agrega filas ni cobros.
- Un dataset que la ejecución no puede leer la detiene y no cobra nada.
- El cargo total máximo que definas en Apify limita las filas entregadas.

## Límites & recuperación

X (Twitter) Post Tracker de Xquik lee muchos posts en 1 ejecución. Las filas
entregadas y el progreso se conservan tras un reinicio de Apify. El Actor no
agrega su propio límite de tiempo. Respeta cualquier tiempo límite que definas
en Apify.

El estado de la ejecución cuenta los posts para los que X no tiene coincidencia.
Un dataset anterior puede tener hasta 100,000 filas. Un dataset que la ejecución
no puede leer la detiene antes de leer cualquier post. Entonces el estado te
pide elegir el dataset de una ejecución anterior. Las ejecuciones interrumpidas
escriben un diagnóstico `partial` gratis. Lee `nextAction` antes de reintentar.

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

### ¿Necesito cookies de X, una clave de API o iniciar sesión?

No. X (Twitter) Post Tracker de Xquik no necesita cookies de X, clave de API,
inicio de sesión ni credenciales.

### ¿Qué dataset elijo en `previousDatasetId`?

Elige el dataset de una ejecución anterior de este Actor. Su fila más reciente
de cada post pasa a ser `previousSnapshot`. El Actor omite las filas de otros
Actores y los diagnósticos.

### ¿La primera captura se conserva tras muchas ejecuciones?

Sí. Cada fila lleva `firstSnapshot`. Encadena cada ejecución con la anterior y
la primera captura se mantiene igual.

### ¿Puedo seguir un post que alguien eliminó?

No. Un post que X no tiene no agrega filas ni cobros. El estado de la ejecución
lo cuenta.

### ¿Es legal seguir posts de X?

X (Twitter) Post Tracker de Xquik solicita campos públicos de X. Los resultados
pueden contener datos personales. Confirma que tu propósito es lícito y cumple
las normas de privacidad aplicables. Si tienes dudas, consulta a un abogado
calificado.

### ¿Puedo usar la API, las programaciones & las integraciones?

Sí. Usa la API de Apify o la API REST de Xquik. La
[pestaña API](https://apify.com/xquik/x-twitter-post-tracker/api) tiene ejemplos
en Python, JavaScript y cURL. Las
[programaciones](https://docs.apify.com/platform/schedules) de Apify ejecutan X
Post Tracker de Xquik con un cron. Los agentes usan
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Usa `latest`
salvo que necesites una compilación anterior.

### ¿Dónde consigo ayuda?

Abre un issue en la
[pestaña Issues](https://apify.com/xquik/x-twitter-post-tracker/issues) con el
ID de la ejecución. Los diagnósticos gratuitos del almacén de clave-valor
explican las ejecuciones que necesitan atención.

### ¿Puedo obtener una solución a medida?

Sí. Describe lo que necesitas en la
[pestaña Issues](https://apify.com/xquik/x-twitter-post-tracker/issues). Xquik
también ofrece un panel, una API REST, un servidor MCP y webhooks. Encuentra el
sitio web de Xquik en su [perfil de Apify](https://apify.com/xquik).
