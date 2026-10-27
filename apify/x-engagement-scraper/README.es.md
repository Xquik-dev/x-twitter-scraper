[English](README.md) · **Español** · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer conecta Xquik MCP con agentes de codificación](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Mira cómo Framer usa los extractores de Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
con Claude Code, Codex, Cursor & más, desde el minuto 6:07.

Xquik es el servicio de scraping de X (Twitter) más rápido y económico del
mundo, con los datos de X más completos. X Engagement Scraper de Xquik recopila
respuestas, citas, cuentas que hicieron repost & hilos de cualquier post. La
mayoría de los demás Actores de Apify cobran antes de filtrar o quitar
duplicados. Xquik solo cobra los resultados entregados, únicos y que cumplen tus
filtros.

Recopila respuestas, citas, cuentas que hicieron repost & el contexto del hilo
de Twitter para 1 o más posts de X. Pagas **$0.00015 por fila entregada**, &
Apify factura aparte el uso de la plataforma. No necesitas clave de API de X ni
iniciar sesión.

> Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
> "Twitter" y "X" son marcas registradas de X Corp.

## ¿Por qué usar X Engagement Scraper?

- **Comprueba quién hizo repost.** Descubre si cada cuenta de `repostCheckUsers`
  hizo repost de cada post.
- **Solo las respuestas que necesitas.** Elige respuestas directas o anidadas,
  una profundidad de respuesta & un rango de tiempo.
- **Clientes potenciales entre quienes hicieron repost.** Filtra a esas cuentas
  por `minFollowers`, `hasEmail` o `bioContains`. Las filas traen los correos,
  teléfonos & enlaces que publica cada perfil.
- **Todos los tipos de interacción en 1 ejecución.** Pega URLs de posts o IDs de
  posts. Combina respuestas, citas, cuentas que hicieron repost & contexto del
  hilo.
- **Define tus límites de filas.** Limita la ejecución con `maxItems` & cada
  tipo de interacción de cada post con `maxItemsPerTarget`.
- **Tasas de interacción incluidas.** Indica `engagementRate` o
  `engagementPerView` en `fields` para agregar la columna.

### Resultados completos

- Cada resultado trae los datos más completos que X tiene sobre él.

### Filas precisas

- Los reposts traen el texto original completo.
- Cada ID de una fila se mantiene exacto.
- Las menciones, los enlaces, los hashtags & los resaltados quedan alineados con
  el texto.
- Un conteo desconocido aparece en `unknownCounts`, nunca como 0.
- Las insignias de verificación coinciden con lo que muestra `x.com`.
- Las filas solo contienen datos públicos.
- Las búsquedas de citas devuelven todas las citas reales & nada más.
- Los anuncios & las entradas promocionadas nunca llegan a tus filas.

### Datos actualizados

- Las lecturas siguen funcionando cuando X lanza cambios.

### Velocidad

- Una página lenta no frena tu ejecución.
- Las lecturas terminan en cuanto llegan sus filas.
- Las llamadas a Actores que se atascan se recuperan solas.

### Cobro justo

- Una entrada inválida no cuesta nada & te dice qué corregir.
- Los Actores solo cobran las filas entregadas, únicas & que cumplen tus
  filtros.
- Un perfil que comparten varios objetivos se cobra 1 sola vez.
- Una ejecución reiniciada nunca cobra 2 veces.
- Las ejecuciones respetan tu límite de gasto & aun así escriben sus
  diagnósticos.
- Las ejecuciones pequeñas terminan con un consejo para gastar menos.

### Confiabilidad

- Un error aislado no hace fallar tu ejecución.
- Si se acaba el tiempo, recibes las filas ya encontradas, con diagnósticos.
- Los Actores resisten las caídas breves de Xquik.
- Las ejecuciones de los Actores siguen tras un reinicio sin repetir nada.
- Una fila defectuosa no arruina un lote.
- Las ejecuciones detenidas conservan sus filas & su informe.
- Una ejecución que no puede iniciar igual explica por qué.
- Soporte puede ver exactamente qué devolvió una solicitud o una ejecución.

### Hecho para agentes

- Los Actores aceptan entradas escritas para otros Actores.
- La salida está lista para hojas de cálculo, con columnas planas & totales de
  interacción.
- Cada ejecución dice por qué terminó & si conviene reintentar.

### Datos detallados

- Las filas de posts traen el texto de los Note Tweets, las ediciones, las Notas
  de la Comunidad, las etiquetas de alcance & los controles de respuesta.
- Las filas traen la app de origen, los conteos de contenido multimedia & los
  datos de cuentas profesionales.
- El contenido multimedia trae variantes, texto alternativo, tamaños & motivos
  de disponibilidad.
- Ves cuándo cada cuenta hizo repost de un post.

### Controles de calidad

- Cada campo que muestra X se entrega, se omite a propósito o se comprueba que
  no existe.
- Xquik prueba cada lectura en vivo contra X.

## ¿Qué datos puede extraer X Engagement Scraper?

- Respuestas directas en todas las páginas de resultados disponibles.
- Respuestas directas & anidadas con 4 modos de orden.
- Los detalles del post de origen como una fila que puedes elegir.
- Citas con texto, autores, contenido multimedia & métricas.
- Perfiles de las cuentas que hicieron repost.
- El contexto de la conversación alrededor de cada post de origen.
- Atribución del post de origen & del tipo de interacción.

## Cómo extraer la interacción de posts de X

¿Recién llegas a Apify? Primero
[crea una cuenta gratis](https://console.apify.com/sign-up?fpr=xquik). El plan
gratuito no pide tarjeta de crédito & te da $5 para gastar cada mes. A $0.00015
por fila, $5 alcanzan para hasta 33,000 filas, sin contar el uso de la
plataforma. Luego vuelve aquí & haz clic en Try for free.

1. Abre X Engagement Scraper de Xquik en Apify Console.
2. Pega URLs de posts en `startUrls` o IDs numéricos de posts en `tweetIds`.
3. Elige `engagementTypes` & agrega filtros como `minLikes` o `language`.
4. Define `maxItems` para limitar las filas entregadas & luego haz clic en
   Start.
5. Descarga el dataset en JSON, CSV o Excel, o usa la API de Apify.

`startUrls` acepta cada URL como texto simple o como objeto `{ "url": "..." }`.

```json
{
  "startUrls": [
    "https://x.com/OpenAI/status/2082577277246972300",
    { "url": "https://x.com/jack/status/20" }
  ]
}
```

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

De forma predeterminada, cada cuenta o post aparece una sola vez por tipo de
interacción, con 1 cobro. Define `dedupeAcrossTargets` como `false` para
conservar una fila por cada post de origen. El estado de la ejecución cuenta los
duplicados que omitió sin cobro.

Las ejecuciones pequeñas sin problemas omiten `run-report` & ahorran uso de
Apify. Activa `alwaysSaveRunRecords` para escribirlo en todas las ejecuciones.

### Migra desde otro Actor de interacciones

El Actor lee estos nombres de campo de otros Actores de interacciones.

- `urls` se asigna a `startUrls`.
- `category` se asigna a `engagementTypes`. `replies`, `retweets`, `info` &
  `checkRetweet` se leen como `replies`, `retweeters`, `tweet` & `repostCheck`.
- `resultsPerCategory` se asigna a `maxItemsPerTarget`.
- `retweetCheckUsername` se asigna a `repostCheckUsers`.

Una `category` que es tarea de otro Actor, como `followers` o `tweets`, detiene
la ejecución. No lee nada & no cobra nada. El mensaje nombra el Actor que debes
usar. Si defines uno de estos nombres & su campo canónico, gana el valor
canónico. El registro de la ejecución nombra el campo que perdió.

## Salida

Cada fila define `resultType` como `tweet`, `replies`, `completeReplies`,
`quotes`, `retweeters`, `favoriters`, `thread` o `repostCheck`. `sourceTarget`
guarda el ID del post de origen. Los campos de posts & perfiles siguen las
formas estables de respuesta de la API REST de Xquik.

`completeReplies` conserva todas las filas devueltas. El informe de la ejecución
cuenta la cobertura parcial en `incompleteTargets`. Los filtros se aplican antes
del cobro.

Las cuentas que hicieron repost & las que dieron Me gusta aceptan todos los
filtros de perfil, como `minFollowers`, `hasEmail` & `bioContains`. Sus filas
traen `email` & `contactInfo`, los correos, teléfonos & enlaces que publica cada
perfil.

Los ejemplos usan valores de muestra. Los resultados reflejan datos en vivo. Una
fila de respuesta se ve así.

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

## Verificación de reposts

Agrega `repostCheck` a `engagementTypes` & enumera cuentas en `repostCheckUsers`
para saber si cada cuenta hizo repost de cada post.

```json
{
  "tweetIds": ["2098439298617856319"],
  "engagementTypes": ["repostCheck"],
  "repostCheckUsers": ["discord", "nasa"]
}
```

Cada verificación es 1 fila con `isRetweeted`, `retweetedAt`, `retweetId`,
`checkedPosts` & `complete`. Su `id` es `repostCheck:<post ID>:<account>`. La
verificación lee los posts más recientes de cada cuenta. Un repost anterior a
esos posts aparece como `false` con `complete: false`.

Una ejecución con solo filas `repostCheck` & `tweet` conserva el orden de tu
entrada. Cada post va seguido de sus cuentas, tal como las enumeraste.

## Marcas de tiempo de los reposts

Define `includeRetweetTimestamp` como `true` para los resultados de
`retweeters`. La columna `retweetedAt` guarda la hora observada del repost en
UTC.

X Engagement Scraper de Xquik encuentra la hora del repost cuando X todavía
muestra ese repost. Los reposts antiguos, eliminados o no disponibles dejan la
marca de tiempo en `null`. El perfil sigue en la salida. Un valor `null` no
prueba que una cuenta nunca haya hecho repost de un post.

Esta opción hace más lentas las ejecuciones. Déjala desactivada si solo quieres
perfiles. El `createdAt` del perfil sigue siendo la fecha de creación de la
cuenta. Las filas de posts traen `retweetedAt` cuando contienen un repost. Las
fechas del post original & las horas de extracción nunca reemplazan las horas de
repost. Los precios por resultado & el cobro por fila entregada no cambian.

## ¿Cuánto cuesta extraer la interacción de posts de X?

En todos los planes de Apify, cada fila entregada cuesta $0.00015. Apify factura
aparte tu uso de la plataforma.

Para más volumen, [elige un plan de Apify](https://apify.com/pricing?fpr=xquik)
con más uso prepagado.

- Un cobro por cada fila de datos entregada. Los diagnósticos son gratis en
  `diagnostics`.
- Sin tarifa de inicio, por post, por tipo de interacción ni por página.
- La eliminación de duplicados se aplica antes del cobro.

## Límites & recuperación

X Engagement Scraper de Xquik lee muchos posts & tipos de interacción en 1
ejecución. Las filas entregadas & el progreso se conservan tras un reinicio de
Apify. El Actor no agrega un límite de tiempo propio.

Una extracción interrumpida escribe un diagnóstico `partial` gratis. Los
resultados disponibles se conservan. Lee `availableResults`, `failedTargets`,
`retryable` & `nextAction` antes de reintentar. Una salida exitosa del Actor
confirma la entrega, no una extracción completa.

El estado de la ejecución nombra cada causa de una detención anticipada.
`stopCauses` enumera cada causa con su propio `message`, `retryable` &
`nextAction`. Las causas son `target_not_found`, `target_failed`,
`pagination_safety_limit`, `reply_reach` & `deadline_reached`. `reply_reach`
significa que X entregó solo una parte de un hilo de respuestas. Un objetivo
inexistente entra en la lista solo si otra causa detuvo la ejecución. La
ejecución es `retryable` si alguna causa lo es.

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

### ¿Necesito una clave de API de X o iniciar sesión?

No. X Engagement Scraper de Xquik no necesita clave de API de X, inicio de
sesión ni credenciales.

### ¿Es legal extraer datos de interacción de X?

X Engagement Scraper de Xquik solicita campos públicos de X. Los resultados
pueden contener datos personales. Confirma que tu propósito es lícito & cumple
las normas de privacidad aplicables. Si tienes dudas, consulta a un abogado
calificado.

### ¿Por qué mi ejecución no devolvió resultados?

Lee primero el estado de la ejecución. El estado de una ejecución vacía te pide
revisar tus objetivos & filtros. La salida gratuita `diagnostics` aparece cuando
algo requiere atención. Su `stopCauses` da a cada causa un `nextAction` que
puedes seguir. La ejecución enumera cada entrada que no puede leer & explica
cómo corregirla. En 2024, X dejó de mostrar quién marcó un post con Me gusta,
así que `favoriters` no devuelve filas.

### ¿Puedo usar la API, las programaciones & las integraciones?

Sí. Elige entre 50 tareas públicas o la API REST de Xquik. La
[pestaña API](https://apify.com/xquik/x-engagement-scraper/api) tiene ejemplos
en Python, JavaScript & cURL. Las
[programaciones](https://docs.apify.com/platform/schedules) de Apify ejecutan X
Engagement Scraper de Xquik con un cron. Los agentes usan
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Usa `latest`
salvo que necesites una compilación anterior.

### ¿Dónde consigo ayuda?

Abre un issue en la
[pestaña Issues](https://apify.com/xquik/x-engagement-scraper/issues) con el ID
de la ejecución. Los diagnósticos gratuitos del almacén de clave-valor explican
las ejecuciones que requieren atención. Una ejecución que no recibe ninguna fila
explica el motivo en su estado.

### ¿Puedo obtener una solución a medida?

Sí. Describe lo que necesitas en la
[pestaña Issues](https://apify.com/xquik/x-engagement-scraper/issues). Xquik
también ofrece un panel, una API REST, un servidor MCP & webhooks. Encuentra el
sitio web de Xquik en su [perfil de Apify](https://apify.com/xquik).
