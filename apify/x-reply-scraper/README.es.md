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
mundo, con los datos de X más completos. X Reply Scraper de Xquik recopila
respuestas, comentarios y conversaciones completas. La mayoría de los demás
Actores de Apify cobran antes de filtrar o quitar duplicados. Xquik solo cobra
los **resultados entregados, únicos y que cumplen tus filtros**.

Extrae respuestas de X (Twitter) por **$0.00015 por fila entregada** en
cualquier plan de Apify. Pega URLs de posts, IDs de posts, URLs de perfiles o
nombres de usuario. Exporta respuestas, conversaciones, autores, interacción,
entidades y URLs de contenido multimedia. Apify factura aparte tu uso de la
plataforma. No necesitas iniciar sesión en X. Los filtros se aplican antes de
escribir en el dataset, así que solo pagas las filas entregadas.

> Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
> "Twitter" y "X" son marcas registradas de X Corp.

## ¿Qué hace X Reply Scraper?

X Reply Scraper de Xquik recopila respuestas públicas y conversaciones de
comentarios. Trabaja con posts individuales, listas de URLs en bloque, IDs de
posts y cronologías de respuestas de usuarios.

### Funciones principales

- El modo auto sigue recopilando cuando los resultados directos están
  incompletos.
- `collectionStrategy` define cómo recopila el Actor las respuestas.
- Las entradas en bloque aceptan URLs de posts, IDs de posts, perfiles y nombres
  de usuario.
- Los filtros y la eliminación de duplicados se aplican antes de facturar.
- La salida admite 4 modos de orden, 3 niveles de detalle y 3 estilos de campo.
- Cada respuesta conserva su objetivo de origen, los IDs de sus padres, el ID
  raíz y la profundidad.
- Los cursores de continuación permiten recuperar historial y programar
  ejecuciones.
- Las ejecuciones que requieren atención escriben 1 registro gratuito en
  `diagnostics`. Una ejecución que lee todos los objetivos y no encuentra
  ninguna respuesta no escribe ninguno. Su estado explica por qué.
- Los registros de la ejecución muestran los tiempos por página y por objetivo
  en `fetchDurationMs`, `processingDurationMs`, `pushDurationMs`,
  `statusDurationMs`, `fullPageDurationMs` y `fullTargetDurationMs`.
- Las ejecuciones conservan las respuestas entregadas y el progreso cuando Apify
  las reinicia.

### Casos de uso

- Mide el sentimiento y las opiniones de clientes en las respuestas a posts de
  marcas y productos.
- Ordena las respuestas y los comentarios con más Me gusta de un post viral.
- Encuentra leads que hacen preguntas o mencionan una necesidad en respuestas
  públicas.
- Revisa las respuestas para moderar spam y abuso.
- Reconstruye conversaciones completas para investigación y datasets de
  entrenamiento de IA.
- Sigue cómo responde una cuenta a sus clientes a lo largo del tiempo.

### ¿Qué datos puede extraer X Reply Scraper?

Los esquemas del dataset y de run-report describen cada campo devuelto. Los
campos primitivos también traen ejemplos para agentes e integraciones generadas.

Cada fila completa de respuesta puede incluir estos campos principales:

| Campo               | Descripción                                                     |
| ------------------- | --------------------------------------------------------------- |
| `id`                | ID de la respuesta                                              |
| `text`              | Texto de la respuesta                                           |
| `fullText`          | Texto de la respuesta de formato largo                          |
| `createdAt`         | Marca de tiempo de la respuesta                                 |
| `lang`              | Código de idioma de X                                           |
| `url`               | URL directa de la respuesta                                     |
| `conversationId`    | ID de la conversación de X                                      |
| `inReplyToId`       | ID del padre inmediato                                          |
| `inReplyToUserId`   | ID del autor del padre                                          |
| `inReplyToUsername` | Nombre de usuario del padre                                     |
| `likeCount`         | Me gusta                                                        |
| `replyCount`        | Respuestas hijas                                                |
| `retweetCount`      | Reposts                                                         |
| `quoteCount`        | Citas                                                           |
| `viewCount`         | Visualizaciones                                                 |
| `bookmarkCount`     | Elementos guardados                                             |
| `author`            | Metadatos públicos disponibles del autor                        |
| `media`             | Imágenes, videos, GIFs y variantes                              |
| `entities`          | Hashtags, cashtags, menciones, URLs y marcas de tiempo de video |
| `quoted_tweet`      | Post citado, si existe                                          |
| `retweeted_tweet`   | Post original del repost, si existe                             |

Las filas completas también conservan los metadatos de origen disponibles:

- Los campos de tipo de post son `type`, `isReply`, `isQuoteStatus`,
  `isNoteTweet`, `isLimitedReply` e `isTranslatable`.
- Los detalles del texto son `displayTextRange`, `noteTweet`, `article` y
  `card`.
- Las etiquetas y los avisos son `contentDisclosure`, `communityNote`,
  `possiblySensitive`, `tombstone` y `exclusiveContent`.
- Los detalles de la conversación son `conversationControl`, `limitedActions` y
  `unmentionedUserIds`.
- Los campos de contexto son `source`, `place`, `communityId`, `communityName`,
  `reactionContext` y `postCta`.
- Los campos de edición y disponibilidad son `edit`, `previousCounts`,
  `viewState` y `authorUnavailable`.

Las filas planas conservan la ascendencia de la conversación, los detalles del
origen, el tipo de resultado y la versión del esquema. Consulta OpenAPI para ver
los campos exactos.

## ¿Cómo uso X Reply Scraper para extraer respuestas?

1. Pega URLs de posts, IDs de posts, URLs de perfiles o nombres de usuario.
2. Define `maxItems`, `scope` y los filtros que necesites.
3. Ejecuta X Reply Scraper de Xquik y abre el dataset.

El formulario precargado apunta a una conversación pública verificada. Devuelve
hasta 1,000 filas completas y planas. De forma predeterminada, el modo auto
busca en toda la conversación. La eliminación de duplicados y la atribución del
origen siguen activas.

### Extrae respuestas desde la URL de un post

```json
{
  "startUrls": [{ "url": "https://x.com/OpenAI/status/2082577277246972300" }],
  "maxItems": 100
}
```

### Extrae respuestas desde IDs de posts

```json
{
  "tweetIds": ["2082577277246972300", "2083148725367783580"],
  "maxItemsPerTarget": 100,
  "maxItems": 10000
}
```

### Recopila toda la conversación anidada

```json
{
  "tweetIds": ["2082577277246972300"],
  "collectionStrategy": "conversationSearch",
  "scope": "all",
  "maxDepth": 5,
  "sort": "oldest",
  "maxItems": 500
}
```

### Extrae la cronología de respuestas de un usuario

```json
{ "usernames": ["OpenAI", "apify"], "maxItems": 10000 }
```

### Filtra respuestas antes de facturar

```json
{
  "tweetIds": ["2082577277246972300"],
  "anyWords": ["API", "agent", "developer"],
  "excludeWords": ["airdrop", "giveaway"],
  "lang": "en",
  "minLikes": 2,
  "minViews": 100,
  "verifiedOnly": true,
  "maxItems": 10000
}
```

### Exporta filas planas listas para CSV

```json
{
  "tweetIds": ["2082577277246972300"],
  "outputMode": "full",
  "outputPreset": "flat",
  "fieldStyle": "camelCase",
  "maxItems": 100
}
```

## Ejemplos de tareas

Elige entre 50 tareas públicas. Cada una tiene una entrada acotada y una vista
de dataset correspondiente. Edita cualquier tarea antes de ejecutarla.

- [Extrae respuestas de posts de X y comentarios de Twitter](https://apify.com/xquik/x-reply-scraper/examples/scrape-post-replies)
- [Extrae respuestas de Twitter en bloque](https://apify.com/xquik/x-reply-scraper/examples/scrape-bulk-post-replies)
- [Reconstruye una conversación de respuestas de Twitter](https://apify.com/xquik/x-reply-scraper/examples/rebuild-full-conversation)
- [Ordena las respuestas de Twitter por Me gusta](https://apify.com/xquik/x-reply-scraper/examples/rank-most-liked-replies)
- [Extrae las respuestas más recientes a un post](https://apify.com/xquik/x-reply-scraper/examples/collect-latest-replies)
- [Quita el spam de las respuestas de Twitter](https://apify.com/xquik/x-reply-scraper/examples/exclude-spam-keywords)
- [Extrae respuestas de Twitter en inglés](https://apify.com/xquik/x-reply-scraper/examples/collect-english-replies)
- [Extrae respuestas de Twitter de cuentas verificadas](https://apify.com/xquik/x-reply-scraper/examples/collect-verified-replies)
- [Extrae respuestas de Twitter con contenido multimedia](https://apify.com/xquik/x-reply-scraper/examples/collect-media-replies)
- [Extrae la cronología de respuestas de Twitter de un usuario](https://apify.com/xquik/x-reply-scraper/examples/scrape-profile-replies)
- [Recopila respuestas de Twitter para agentes de IA](https://apify.com/xquik/x-reply-scraper/examples/collect-replies-for-ai-agents)
- [Crea un dataset RAG de respuestas de X](https://apify.com/xquik/x-reply-scraper/examples/build-x-reply-rag-dataset)
- [Archiva respuestas de Twitter para LLMs](https://apify.com/xquik/x-reply-scraper/examples/archive-replies-for-llm-processing)
- [Extrae leads de respuestas de X para tu CRM](https://apify.com/xquik/x-reply-scraper/examples/extract-reply-leads-for-crm)

## ¿Cuánto cuesta extraer respuestas de X?

X Reply Scraper de Xquik cuesta $0.00015 por fila entregada en cualquier plan de
Apify. Apify factura aparte el uso de la plataforma.

Xquik aplica un cobro por cada fila de datos entregada. Las respuestas que
quitan tus filtros o la eliminación de duplicados no cuestan nada. Los registros
de diagnóstico en `diagnostics` son gratis. No hay tarifa de inicio, por URL,
por consulta, por paginación ni por filtro.

## Ejecuciones vacías, parciales y detenidas

X Reply Scraper de Xquik explica gratis las ejecuciones vacías, parciales y
detenidas. El estado de la ejecución dice por qué se detuvo. También cuenta los
resultados cobrados y los objetivos leídos. Una ejecución que lee todos los
objetivos y no encuentra ninguna respuesta no escribe ningún registro. Su estado
explica por qué y qué cambiar.

### Extracción incompleta

Una ejecución interrumpida escribe un diagnóstico `partial` gratis. Los
resultados disponibles se conservan. Lee `availableResults`, `failedTargets`,
`retryable` y `nextAction` antes de reintentar. Una salida exitosa del Actor
confirma la entrega, no una extracción completa.

El estado nombra cada causa de una detención anticipada. `stopCauses` enumera
cada causa con su propio `message`, `retryable` y `nextAction`. Las causas son
`target_not_found`, `target_failed`, `page_limit`, `reply_reach` y
`deadline_reached`. `reply_reach` significa que X entregó solo una parte de un
hilo.

Un post o una cuenta que no existe no cuenta como fallo. El estado lo nombra,
por ejemplo "X has no match for 1 target." Entra en `stopCauses` solo si otra
causa detuvo la ejecución. La ejecución es `retryable` si alguna causa lo es.

### Diagnósticos

Las filas de datos exitosas usan `resultType: "reply"`. Una ejecución que
requiere atención escribe exactamente 1 registro gratuito en `diagnostics`.
Algunos ejemplos son una entrada inválida, un objetivo omitido o una detención
anticipada. El registro explica cómo corregir el problema. Una ejecución que lee
todos los objetivos y no encuentra ninguna respuesta no escribe ninguno. Su
estado explica por qué.

El estado de la ejecución dice por qué se detuvo. También cuenta los resultados
cobrados y los objetivos leídos. Las ejecuciones con problemas siempre escriben
`run-report`, incluso las que terminan sin entrada o con entrada inválida. Una
ejecución grande también lo escribe. Una ejecución pequeña sin problemas lo
omite y ahorra uso de Apify. Activa `alwaysSaveRunRecords` para escribirlo en
todas las ejecuciones.

El esquema del informe documenta la finalización, el cobro, los fallos y los
cursores guardados. Su campo `version` indica la versión exacta publicada del
código del Actor.

El campo `status` usa estos valores:

- `no-input`
- `invalid-input`
- `replies-incomplete`
- `zero-output`
- `aborted`
- `unexpected-error`

## Entrada

La pestaña Input enumera todas las opciones. Indica al menos 1 URL de post, ID
de post, URL de perfil o nombre de usuario. Todos los demás campos son
opcionales.

### Objetivos de respuesta y alias de entrada

Usa estos campos principales.

| Entrada       | Uso                                          |
| ------------- | -------------------------------------------- |
| `startUrls`   | URLs de posts y perfiles de X, mezcladas     |
| `tweetIds`    | IDs numéricos de posts                       |
| `usernames`   | Cronologías de respuestas de perfiles        |
| `startCursor` | Reanuda un objetivo desde un cursor guardado |

El formulario de entrada solo muestra los controles canónicos. Los alias de
compatibilidad siguen funcionando en entradas JSON, API, SDK, automatizaciones y
tareas guardadas. Si combinas campos canónicos y alias, se aplica su orden de
resolución actual.

Estos alias aceptan nombres de campo comunes de otros scrapers:

- Alias de URL: `urls`, `tweetUrls`, `postUrls`, `profileUrls` y `twitterUrl`
  como una sola cadena
- Alias de ID: `conversationIds`, `postIds`, `ids`, `tweetId`, `id`
- Alias de nombre de usuario: `twitterHandles`, `screenname`
- Alias de límite global: `maxResults`, `max_results`, `resultsLimit`,
  `maxReplies`
- Alias por objetivo: `maxRepliesPerTweet`, `maxCommentsPerPost`,
  `resultsPerCategory`
- Alias de búsqueda: `useSearch`
- Alias de respuestas anidadas: `includeNestedReplies`,
  `includeRepliesOfReplies`
- Alias de profundidad: `depth` como `1`, `2` o `3` para `maxDepth`. `full` no
  pone límite.
- Alias de alcance: `onlyDirectReplies` para `scope: "direct"`
- Alias del post original: `includeOriginalTweet`, `includeSourceTweet`. Con
  `includeSourceTweet`, `resultsPerCategory` limita las respuestas y el post es
  1 fila más.
- Alias de autor: `excludeOpSelfReplies` para `excludeOriginalAuthor`
- Alias de orden: `sortBy` y `queryType` para `sort`. `top`, `newest` y
  `mostLiked` se leen como `relevance`, `latest` y `likes`.
- Alias de salida: `outputVariant`, `includeRaw`

`category` en `replies` no cambia nada. Una categoría que es tarea de otro
Actor, como `retweets` o `info`, detiene la ejecución. No lee ni cobra nada. El
mensaje nombra el Actor que debes usar. Si defines uno de estos alias y su campo
canónico, gana el valor canónico. El registro de la ejecución nombra el alias
que perdió.

Los objetivos mal formados o no compatibles no hacen fallar al Actor. Cuando no
queda ningún objetivo válido, la ejecución escribe un diagnóstico con la
corrección.

### Estrategias de cobertura

Elige cómo recopila el Actor las respuestas. Auto sirve para la mayoría de los
trabajos.

#### Modo auto completo

Usa `collectionStrategy: "auto"` para la mayoría de los trabajos. Recopila todas
las respuestas que puede leer dentro de tu `scope`. Los controles de alcance,
profundidad, orden y autor se aplican antes de tus límites. Incluye las
respuestas debajo de objetivos que no son raíz. Cuando X oculta parte de un
hilo, el estado dice cuántas respuestas oculta X. Los demás valores de
`collectionStrategy` nunca cambian de modo.

Una cifra de cobertura en los diagnósticos no prueba que X no tenga más
respuestas. Los límites, los datos faltantes o los errores pueden dejar una
ejecución incompleta.

#### Respuestas directas

Usa `collectionStrategy: "replies"` para obtener respuestas directas en el orden
propio de X. Admite cursores guardados.

#### Búsqueda en la conversación

Usa `collectionStrategy: "conversationSearch"` para cubrir la conversación de
forma amplia.

#### Contexto completo del hilo

Usa `collectionStrategy: "thread"` para leer el contexto de la conversación de
origen. Define `includeOriginalPost: true` para conservar el post raíz con
profundidad 0.

#### Respuestas ocultas

La estrategia `auto` predeterminada agrega las respuestas que ocultó el autor
del post. Cada una es una fila con `resultType: "hiddenReply"`, al precio
habitual por fila, y cuenta para `maxItems`. La ejecución solo las lee cuando el
post cuenta más respuestas de las que muestra X, así que un post sin respuestas
ocultas no cuesta nada extra. Define `includeHiddenReplies: false` para dejarlas
fuera.

Usa `collectionStrategy: "hiddenReplies"` para obtener solo las respuestas
ocultas. X las enumera de la más antigua a la más nueva, junto con sus
respuestas. Un post sin respuestas ocultas no devuelve filas.

### Controles de respuestas directas y anidadas

Usa `scope` para elegir la forma del resultado.

| Valor    | Resultado                                                     |
| -------- | ------------------------------------------------------------- |
| `direct` | Conserva las respuestas de profundidad 1                      |
| `nested` | Conserva las respuestas a respuestas de profundidad 2+        |
| `all`    | Conserva todas las respuestas directas y anidadas disponibles |

Usa `maxDepth` para limitar el anidamiento. Cuando X omite un ancestro de la
conversación, puede faltar el enlace al padre. El Actor conserva la mejor
profundidad disponible.

### Orden

Usa `sort` con estos valores:

- `relevance` conserva el orden de origen de X
- `latest` ordena de más nuevo a más antiguo
- `oldest` ordena de más antiguo a más nuevo
- `likes` ordena por cantidad de Me gusta, de mayor a menor

La búsqueda de X cuenta de menos los Me gusta de algunas respuestas antiguas,
así que las ejecuciones con `likes` pueden omitirlas.

Los objetivos de perfil recopilan la cantidad que pediste de resultados únicos y
filtrados, y luego los ordenan. Los objetivos de post conservan el orden global.

Los alias de compatibilidad `sortBy` y `queryType` siguen funcionando.

### Filtros de respuestas

Todos los filtros compatibles se aplican antes de escribir en el dataset.

#### Filtros de texto y entidades

| Entrada          | Comportamiento                            |
| ---------------- | ----------------------------------------- |
| `exactPhrase`    | Exige 1 frase exacta                      |
| `anyWords`       | Exige al menos 1 palabra o frase          |
| `excludeWords`   | Quita las palabras o frases que coinciden |
| `keywordInclude` | Alias que se combina con `anyWords`       |
| `keywordExclude` | Alias que se combina con `excludeWords`   |
| `hashtags`       | Exige al menos 1 hashtag                  |
| `cashtags`       | Exige al menos 1 cashtag                  |
| `mentioning`     | Exige una @mención                        |

#### Filtros de autor e idioma

| Entrada                 | Comportamiento                                          |
| ----------------------- | ------------------------------------------------------- |
| `fromUser`              | Conserva 1 autor de respuestas                          |
| `toUser`                | Conserva las respuestas dirigidas a 1 nombre de usuario |
| `lang`                  | Conserva 1 código de idioma de X                        |
| `verifiedOnly`          | Exige cualquier señal pública de verificación           |
| `blueVerifiedOnly`      | Exige verificación de X Premium                         |
| `excludeOriginalAuthor` | Quita las autorrespuestas del autor del post de origen  |

#### Filtros de interacción

Usa `minLikes`, `minReplies`, `minRetweets`, `minQuotes`, `minViews` y
`minBookmarks`. El alias `minFaves` equivale a `minLikes`.

#### Filtros de contenido multimedia y tiempo

- Define `hasMediaOnly: true` para obtener respuestas con contenido multimedia
  público.
- Define `mediaType` como `any`, `image`, `video`, `gif` o `link`.
- Define `mediaType` como `none` para respuestas de texto sin multimedia ni enlaces.
- Define `since` para una marca de tiempo inicial inclusiva.
- Define `until` para una marca de tiempo final exclusiva.
- Usa `sinceTime` y `untilTime` como alias de compatibilidad.

## Salida

Cada fila de respuesta es un objeto JSON. Los esquemas del dataset y de
run-report describen cada campo, así que los agentes de IA pueden leer las filas
sin adivinar. Exporta el dataset como JSON, CSV, Excel o HTML.

### Metadatos del autor

Los autores anidados siguen el contrato de perfil público. Cubre identidad,
conteos, verificación, disponibilidad, datos profesionales y biografías del
perfil.

La salida plana agrega `authorId`, `authorUsername`, `authorName`,
`authorFollowers`, `authorFollowing` y `authorVerified`.

### Metadatos del contenido multimedia

El contenido multimedia cubre disponibilidad, geometría, etiquetas y variantes
de video. También trae las acciones `watchNowUrl` y `visitSiteUrl`.

La salida plana agrega `mediaUrls`.

### Ejemplo de salida

Una fila de respuesta recortada se ve así:

```json
{
  "resultType": "reply",
  "id": "1881423000000000000",
  "url": "https://x.com/example/status/1881423000000000000",
  "text": "Thanks for sharing this update.",
  "createdAt": "2026-08-09T12:00:00.000Z",
  "lang": "en",
  "conversationId": "1881422000000000000",
  "rootTweetId": "1881422000000000000",
  "parentReplyId": "1881422000000000000",
  "depth": 1,
  "isDirectReply": true,
  "likeCount": 42,
  "replyCount": 3,
  "retweetCount": 5,
  "quoteCount": 2,
  "viewCount": 1000,
  "bookmarkCount": 7,
  "authorUsername": "example",
  "authorName": "Example User",
  "authorFollowers": 1000,
  "authorVerified": false,
  "mediaUrls": ["https://pbs.twimg.com/media/example.jpg"],
  "sourceTweetId": "1881422000000000000",
  "sourceTarget": "1881422000000000000"
}
```

Los valores de muestra son ilustrativos. Las ejecuciones reales devuelven datos
en vivo.

### Modos de salida

Elige qué tan ancha es cada fila del dataset.

#### Compacto

Define `outputMode: "compact"` para obtener un dataset más reducido. Conserva
los campos de texto, conversación, autor, interacción y contenido multimedia.

#### Completo

Define `outputMode: "full"` para conservar todos los campos públicos
compatibles.

#### Rich

Define `outputMode: "rich"` para obtener la mayor cantidad de datos por fila.
Las filas rich conservan todas las columnas del modo completo y agregan al final
`hasCommunityNotes`, `quotedTweetPermalink`, `unavailableAuthorId` y el
`sourceUser` del contenido multimedia.

#### Raw

Define `outputMode: "raw"` para agregar una copia depurada del origen bajo
`raw`.

#### Anidado o plano

El formato `flat` predeterminado conserva los objetos anidados y agrega campos
del autor para tablas. Define `outputPreset: "nested"` para omitir los campos
planos agregados.

#### Nombres de campo

Define `fieldStyle` como `source`, `camelCase` o `snake_case`. El Actor evita
sobrescribir claves de origen que choquen entre sí.

## Opciones de ejecución

### Límites, cobro y continuación

`maxItems` limita las filas entregadas en toda la ejecución. `maxItemsPerTarget`
limita cada post o perfil.

Una ejecución puede leer muchos objetivos. Los topes, la eliminación de
duplicados, la atribución y el cobro se mantienen exactos en todos ellos.

El Actor quita las filas duplicadas antes de la salida y del cobro. Define
`dedupeAcrossTargets: false` para conservar filas duplicadas de objetivos
distintos.

Después de una ejecución limitada por páginas, lee `next-cursors` en el almacén
de clave-valor predeterminado. Pasa un cursor en `startCursor` para continuar
ese objetivo.

#### Tiempo límite de Apify

El tiempo límite predeterminado de Apify es `0`, así que las ejecuciones no
tienen límite de tiempo. El Actor sigue hasta alcanzar el tope o hasta agotar
los datos elegibles. Aun así, puedes definir un tiempo límite finito en Apify.
En ese caso, `completionReason: "deadline_reached"` significa que ese límite
está cerca. El Actor guarda las respuestas y el informe, y sale limpiamente
antes del límite. Las respuestas entregadas se cobran 1 vez. Los objetivos sin
terminar se pueden reanudar.

### Ejemplos de API

Cada ejemplo ejecuta X Reply Scraper de Xquik y devuelve los ítems del dataset.
Reemplaza `<APIFY_API_TOKEN>` por tu token de la API de Apify.

#### JavaScript

```javascript
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: '<APIFY_API_TOKEN>' });
const run = await client
  .actor('xquik/x-reply-scraper')
  .call({
    tweetIds: ['2082577277246972300'],
    collectionStrategy: 'auto',
    scope: 'all',
    maxItems: 100,
  });

const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
```

#### Python

```python
from apify_client import ApifyClient

client = ApifyClient("<APIFY_API_TOKEN>")
run = client.actor("xquik/x-reply-scraper").call(run_input={
    "tweetIds": ["2082577277246972300"],
    "collectionStrategy": "auto",
    "scope": "all",
    "maxItems": 100,
})

for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
```

#### cURL

```bash
actor=xquik~x-reply-scraper
curl "https://api.apify.com/v2/acts/$actor/run-sync-get-dataset-items" \
  -X POST \
  -H "Authorization: Bearer <APIFY_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"tweetIds":["2082577277246972300"],"maxItems":100}'
```

### Automatización e integraciones

Ejecuta X Reply Scraper de Xquik con programaciones, webhooks o clientes de API
de Apify. Conéctalo a Make, Zapier, n8n, Google Sheets o almacenamiento en la
nube. Los agentes pueden llamarlo mediante el
[servidor MCP de Apify](https://docs.apify.com/platform/integrations/mcp).

Los flujos de agentes elegibles también pueden usar
[x402](https://docs.apify.com/integrations/x402) o
[Skyfire](https://docs.apify.com/integrations/skyfire).

Xquik también ofrece 53 herramientas en el panel, una API REST, webhooks
firmados y un servidor MCP.

### Listo para agentes de IA y MCP

Ejecuta X Reply Scraper de Xquik con Apify MCP, clientes de API, x402 o Skyfire.

- Los permisos limitados protegen los datos no relacionados de tu cuenta de
  Apify.
- El cobro por evento vincula el costo con los resultados entregados.
- El modo Standby queda desactivado para ser compatible con los pagos de
  agentes.
- Los esquemas tipados describen las respuestas, los informes de ejecución y los
  cursores de continuación.
- Los valores predeterminados acotados evitan ejecuciones de agentes sin límite
  por accidente.
- Los modos estables `camelCase` y `snake_case` facilitan encadenar
  herramientas.
- Las filas de diagnóstico incluyen un estado, un mensaje y una acción para
  recuperarse.
- Los informes de ejecución incluyen resultados exactos, motivos de detención y
  estimaciones de cobro.

### Usa siempre la compilación más reciente

Selecciona `latest` en cada ejecución para recibir todas las correcciones
publicadas.

Si no eliges una compilación, Apify usa el valor predeterminado `latest` de este
Actor. Las ejecuciones desde Console y los ejemplos estándar de la API heredan
ese valor.

Las tareas guardadas pueden reemplazar el valor predeterminado del Actor. Las
programaciones y las integraciones de tareas reutilizan esa elección. Deja cada
reemplazo en `latest`.

Apify no redirige los números de compilación exactos a `latest`. Reemplaza los
números fijados por `latest`. Usa compilaciones exactas solo para volver atrás
de forma temporal.

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
- [X Email Scraper](https://apify.com/xquik/x-email-scraper): obtiene los
  correos, teléfonos y enlaces que las cuentas publican en sus perfiles, a
  partir de nombres de usuario, seguidores o búsquedas de usuarios. Úsalo cuando
  necesites los correos que publican los perfiles. Desde $0.00015 por perfil.
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

Xquik también ofrece 53 herramientas en el panel, una API REST, webhooks
firmados y un servidor MCP.

- [Documentación de la API](https://docs.xquik.com/introduction): guías de la
  API REST
- [API de respuestas a posts](https://docs.xquik.com/api-reference/x/tweet-replies):
  obtén las respuestas a un post
- [API de respuestas ocultas](https://docs.xquik.com/api-reference/x/tweet-hidden-replies):
  obtén las respuestas que ocultó un autor
- [API de hilos](https://docs.xquik.com/api-reference/x/tweet-thread): obtén un
  hilo completo
- [API de respuestas de usuarios](https://docs.xquik.com/api-reference/x/user-replies):
  obtén las respuestas de un usuario
- [Servidor MCP](https://docs.xquik.com/mcp/overview): descubre las herramientas
  compatibles
- [Webhooks](https://docs.xquik.com/webhooks/overview): entrega firmada de
  eventos

## Preguntas frecuentes

Respuestas a preguntas comunes y, luego, dónde conseguir ayuda.

### ¿Cómo extraigo los comentarios de un post?

Pega la URL del post en `startUrls` y haz clic en Start. X llama respuestas a
los comentarios, así que cada comentario es 1 fila de respuesta.

### ¿Puedo extraer respuestas de muchos posts a la vez?

Sí. Pega muchas URLs de posts o IDs de posts en 1 ejecución. Cada respuesta
conserva el post de origen en `sourceTarget`.

### ¿Incluye respuestas anidadas?

Sí. El `scope` predeterminado recopila respuestas directas y anidadas. Define
`scope` como `direct` para obtener solo las respuestas al post. `maxDepth`
limita la profundidad de una ejecución.

### ¿Obtiene las respuestas que ocultó el autor?

Sí. La estrategia `auto` predeterminada las agrega como filas `hiddenReply`.
Define `includeHiddenReplies: false` para omitirlas.

### ¿Puedo ordenar las respuestas por Me gusta o por fecha?

Sí. Define `sort` para ordenar las respuestas por Me gusta o para ver primero
las más recientes o las más antiguas.

### ¿Puedo exportar las respuestas a CSV o Excel?

Sí. Exporta el dataset como CSV, Excel, JSON o HTML. La salida plana conserva 1
respuesta por fila, con los campos del autor al lado.

### ¿Puedo extraer las respuestas de un usuario en lugar de las de un post?

Sí. Pega una URL de perfil o un nombre de usuario. La ejecución lee la
cronología de respuestas de ese usuario.

### ¿Necesito una clave de API de X o iniciar sesión?

No. No necesitas clave de API de X, inicio de sesión ni credenciales. X Reply
Scraper de Xquik nunca te pide tu contraseña, tus cookies ni tus tokens de X.

### ¿Es legal extraer respuestas de X?

X Reply Scraper de Xquik recopila respuestas públicas y no evade las cuentas
protegidas. Recopila solo datos públicos. Cumple las leyes y las reglas de la
plataforma que apliquen.

Los datasets de respuestas pueden contener datos personales. Elige un propósito
lícito. Guarda los datos el menor tiempo posible. Protege las exportaciones.
Atiende las solicitudes de eliminación y de acceso cuando corresponda. Si tienes
dudas, consulta a un abogado calificado.

### ¿Por qué mi ejecución devolvió menos respuestas de las que muestra el post?

Cuando X oculta parte de un hilo, el estado dice cuántas respuestas oculta X.
`reply_reach` en `stopCauses` significa que X entregó solo una parte de un hilo.
Los filtros, la eliminación de duplicados, `scope`, `maxDepth` y tus límites
también reducen la cantidad.

### ¿Puedo usar la API, las programaciones y las integraciones?

Sí. La [pestaña API](https://apify.com/xquik/x-reply-scraper/api) muestra
ejemplos en Python, JavaScript y cURL. Usa las
[programaciones](https://docs.apify.com/platform/schedules) de Apify para
ejecutar X Reply Scraper de Xquik con un cron. También se conecta con Make,
Zapier, n8n y Google Sheets.

### ¿Dónde consigo ayuda?

Abre un issue en la página del Actor o escribe a <support@xquik.com> con el ID
de la ejecución.

### ¿Puedo obtener una solución a medida?

Sí. Visita [xquik.com](https://xquik.com) o lee la
[documentación de la API](https://docs.xquik.com/introduction). Xquik ofrece un
panel, una API REST, un servidor MCP y webhooks.
