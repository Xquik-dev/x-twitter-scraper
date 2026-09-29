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
mundo, con los datos de X más completos. X Tweet Scraper de Xquik recopila posts
(antes tuits), respuestas, perfiles, Listas y búsquedas con más de 50 filtros.
Pruebas comparativas públicas demuestran que es el más económico y rápido de 12
Actores que extraen posts. Sus filas traen 2x los campos del Actor mediano, como
muestra la [prueba comparativa de abajo](#prueba-comparativa). La mayoría de los
demás Actores de Apify cobran antes de filtrar o quitar duplicados. Xquik solo
cobra los resultados entregados, únicos y que cumplen tus filtros.

Extrae posts públicos de X (Twitter) **desde $0.00015 por resultado entregado en
cualquier plan de Apify**. Apify factura aparte el uso de la plataforma. No
necesitas iniciar sesión en X y no pagas tarifa de inicio ni de consulta. Creado
por [Xquik](https://xquik.com).

> Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
> "Twitter" y "X" son marcas registradas de X Corp.

## ¿Qué hace X Tweet Scraper?

X Tweet Scraper de Xquik devuelve posts, métricas de interacción, perfiles
públicos de los autores y contenido multimedia. Acepta URLs, nombres de usuario,
IDs de Listas, IDs de posts y consultas de búsqueda con más de 50 filtros.

### Funciones principales

- Los filtros y la eliminación de duplicados se aplican antes de facturar.
- Una sola entrada admite consultas por ID, cronologías, Listas, búsqueda y
  modos de interacción.
- Las entradas de IDs de posts no tienen un límite fijo de cantidad. Tus límites
  de gasto y de tiempo en Apify siguen vigentes.
- Los registros de la ejecución muestran los tiempos de cada página en
  `fetchDurationMs`, `processingDurationMs`, `pushDurationMs`,
  `statusDurationMs` y `fullPageDurationMs`.
- Las ejecuciones conservan las filas entregadas y el progreso cuando Apify las
  reinicia.

### Casos de uso

- Alimenta investigación, enriquecimiento, analítica & entrenamiento de IA con
  más campos por tuit. Nuestra fila mediana tuvo 63 campos el 2026-09-29. Es 2x
  la mediana de otros 11 Actores.
- Sigue el sentimiento de marca en los posts.
- Vigila los posts de la competencia y los términos de tu sector.
- Encuentra clientes potenciales en conversaciones públicas.
- Recopila datasets públicos para investigación.
- Encuentra posts con mucha interacción pública.

### ¿Qué datos puede extraer X Tweet Scraper?

| Campo                  | Descripción                                                                     |
| ---------------------- | ------------------------------------------------------------------------------- |
| `id`                   | ID del post                                                                     |
| `text`                 | Texto completo del post (incluye Note Tweets de hasta 25k caracteres)           |
| `createdAt`            | Cadena de fecha y hora nativa de X                                              |
| `likeCount`            | Cantidad de Me gusta                                                            |
| `retweetCount`         | Cantidad de reposts                                                             |
| `replyCount`           | Cantidad de respuestas                                                          |
| `quoteCount`           | Cantidad de citas                                                               |
| `viewCount`            | Cantidad de visualizaciones                                                     |
| `bookmarkCount`        | Cantidad de elementos guardados                                                 |
| `lang`                 | Idioma del post                                                                 |
| `url`                  | Enlace directo al post                                                          |
| `tweetUrl`             | Alias de la URL del post en la salida plana                                     |
| `twitterUrl`           | URL con formato twitter.com en la salida plana                                  |
| `author`               | Campos disponibles del autor (nombre de usuario, biografía, sitio web, conteos) |
| `authorUsername`       | Nombre de usuario del autor en la salida plana                                  |
| `authorFollowers`      | Cantidad de seguidores del autor en la salida plana                             |
| `authorUrl`            | Sitio web del autor en la salida plana, si existe                               |
| `authorDescription`    | Biografía del autor en la salida plana                                          |
| `authorCoverPicture`   | URL de la imagen de encabezado del autor en la salida plana                     |
| `authorPinnedTweetIds` | IDs de los posts fijados del autor en la salida plana                           |
| `media`                | Imágenes, videos y GIFs adjuntos                                                |
| `mediaUrls`            | URLs de contenido multimedia en la salida plana                                 |
| `imageUrls`            | URLs de imágenes en la salida plana                                             |
| `videoUrls`            | URLs de videos en la salida plana                                               |
| `entities`             | Hashtags, URLs, menciones y marcas de tiempo de video                           |
| `displayTextRange`     | Rango de texto visible de X, si existe                                          |
| `contentDisclosure`    | Metadatos de divulgación, si existen                                            |
| `conversationControl`  | Política de respuestas y dueño público de la conversación                       |
| `reactionContext`      | Post y usuario públicos a los que hace referencia una reacción                  |
| `limitedActions`       | Restricciones y avisos públicos de interacción                                  |
| `isLimitedReply`       | Si las respuestas están limitadas                                               |
| `isNoteTweet`          | Si es un Note Tweet (post de formato largo)                                     |
| `isQuoteStatus`        | Si este post cita otro post                                                     |
| `isRetweet`            | Si esta fila es un repost, con el original adjunto                              |
| `isPinned`             | Si el autor fijó este post, en filas planas                                     |
| `isReply`              | Si este post es una respuesta                                                   |
| `quoted_tweet`         | Objeto del post citado (si es una cita)                                         |
| `conversationId`       | ID del hilo o de la conversación                                                |
| `resultType`           | Tipo de fila para filas completas, de interacción y diagnósticos                |
| `sourceTweetId`        | ID del post de origen en los modos de artículo e interacción                    |
| `article`              | Datos estructurados del artículo en `mode: "article"`                           |

Los metadatos opcionales del post incluyen `authorUnavailable`, `card`,
`communityId`, `communityNote`, `edit`, `exclusiveContent`, `noteTweet` y
`postCta`. `isTranslatable`, `place`, `possiblySensitive` y `viewState` guardan
otro contexto público. `previousCounts` guarda la interacción previa a una
edición. `tombstone` guarda los avisos de visibilidad. `unmentionedUserIds`
enumera a los usuarios que salieron de la conversación. Consulta OpenAPI para
ver los campos exactos.

Los objetos `author` anidados traen campos públicos del perfil. Cubren
identidad, conteos, verificación, disponibilidad, datos profesionales y
biografías del perfil.

Las filas de repost definen `isRetweet` como `true`. Su `text` trae el post
original completo. `retweeted_tweet` guarda el post original con su autor y sus
conteos.

Las filas de posts también conservan `type`, `source`, `inReplyToId`,
`inReplyToUserId`, `inReplyToUsername` y `retweeted_tweet`. Los posts citados y
los reposts traen los mismos campos en cada nivel de anidación.

El contenido multimedia trae disponibilidad, geometría, etiquetas y variantes de
video. También trae las acciones `watchNowUrl` y `visitSiteUrl`.

Las filas nunca incluyen estados que solo ve el espectador. El Actor quita las
marcas de seguimiento, bloqueo, silencio, elementos guardados, Me gusta, repost,
permiso de edición y otras similares. La salida raw también las quita.

## ¿Cómo uso X Tweet Scraper para extraer datos de tuits?

Sigue estos pasos en Apify Console:

1. Abre un [ejemplo de tarea](#ejemplos-de-tareas) o la pestaña Input.
2. Agrega URLs, nombres de usuario, IDs de posts o términos de búsqueda.
3. Define `maxItems` y los filtros que necesites.
4. Haz clic en Start y espera a que termine la ejecución.
5. Exporta el dataset en JSON, CSV, Excel o HTML.

Los ejemplos de abajo muestran la entrada de cada fuente.

### Pega URLs

Pega cualquier mezcla de URLs de posts, perfiles, búsquedas o Listas:

```json
{
  "startUrls": [
    { "url": "https://x.com/elonmusk/status/1846987139428634858" },
    { "url": "https://x.com/nasa" },
    { "url": "https://x.com/search?q=AI%20lang%3Aen" },
    { "url": "https://x.com/i/lists/1748648376080666720" }
  ],
  "maxItems": 500
}
```

Las URLs de posts devuelven esos posts, sin duplicados y en el orden de tu
entrada. Las URLs de perfil devuelven los posts de la cuenta. Las URLs de
búsqueda ejecutan su consulta. Las URLs de Listas devuelven los posts de la
Lista. `maxItems` limita los resultados de todas las URLs pegadas.

### Extrae muchos nombres de usuario

Los nombres de usuario funcionan como atajo para muchas búsquedas
`from:username`:

```json
{ "twitterHandles": ["elonmusk", "nasa", "openai"], "maxItems": 100 }
```

Cada nombre de usuario devuelve los posts de esa cuenta. El Actor quita las
filas duplicadas antes de la salida y del cobro. Puedes escribir los nombres de
usuario con o sin `@`. Los nombres de usuario y las URLs de perfil conservan los
reposts, igual que la pestaña Posts de X. Los conservan incluso con fechas o
filtros. Define `tweetTypes.excludeRetweets` para quitarlos.

### Busca posts

Escribe 1 o más consultas en el campo Search terms:

```json
{
  "searchTerms": ["from:elonmusk AI", "#bitcoin lang:en"],
  "maxItems": 1000,
  "queryType": "Latest"
}
```

Con `mode` en `tweet` o `tweets` y sin IDs de posts, las consultas se ejecutan
como búsqueda. Así, unos `searchTerms` válidos nunca terminan en una consulta
por ID vacía.

También puedes recuperar el historial de una cuenta con ventanas de fechas, como
`from:elonmusk since:2026-01-01 until:2026-01-02`. Cada término conserva su
propia atribución `searchTerm`. `maxItems` limita los resultados de todos los
términos de búsqueda. El Actor revisa cada post devuelto contra las ventanas
`since:`, `until:` y de tiempo Unix. Las búsquedas filtradas siguen leyendo
hasta encontrar coincidencias o hasta que X no tenga más resultados.

Un término de búsqueda `from:` devuelve lo mismo que la búsqueda de X, así que
omite los reposts. Agrega `include:nativeretweets` para conservarlos, o
`filter:nativeretweets` para obtener solo reposts.

### Consulta posts por ID

```json
{ "tweetIds": ["1846987139428634858", "1858743654778892784"], "maxItems": 100 }
```

Los resultados siguen el orden de tu entrada, quitan duplicados e incluyen solo
los posts que pediste. La consulta también acepta `tweetId`, `tweetIDs`,
`tweets`, `postIds`, `lookupPostIds`, `tweetUrls` y `postUrls`.

### Modos de interacción, hilo y artículo

Define `mode` para forzar una ruta, sin importar los demás campos de la entrada:

```json
{ "mode": "replies", "replyTweetIds": ["1846987139428634858"], "maxItems": 100 }
```

Los modos de posts y búsqueda son `tweet`, `tweets` y `search`. Los modos de
perfil son `profileTweets`, `profileReplies`, `profileMedia` y `profileLikes`.
`listTweets` lee los posts de una Lista, y `article` lee el Artículo de X de un
post. Los modos para un solo post son `replies`, `quotes`, `thread`,
`retweeters` y `favoriters`.

`profileTweets` sigue la pestaña Posts del perfil en X. Devuelve los posts, los
reposts y las respuestas de la cuenta a sus propios posts. Las filas llegan en
orden de fecha. El Actor quita las respuestas a otras cuentas antes de facturar.
También quita el contexto de conversación de otros autores.

Para obtener solo posts originales, excluye los tipos que no quieres:

```json
{
  "mode": "profileTweets",
  "twitterHandles": ["apify"],
  "tweetTypes": { "excludeReplies": true, "excludeRetweets": true },
  "maxItems": 100
}
```

`tweetTypes.excludeReplies`, `excludeRetweets` y `excludeQuotes` funcionan en
todas las fuentes. Una búsqueda los envía a X como `-filter:replies`,
`-filter:nativeretweets` y `-filter:quote`. En un perfil o una Lista, el Actor
quita esas filas por su cuenta. Las filas excluidas nunca llegan al dataset, así
que nunca pagas por ellas. Tampoco cuentan para `maxItems`.

`profileReplies` sigue la pestaña Respuestas de X. Devuelve los posts y las
respuestas de la propia cuenta. El Actor excluye el contexto de conversación de
otros autores. Usa `filter:replies` o una búsqueda `to:` para obtener solo
respuestas.

Los modos de búsqueda y los modos paginados de posts admiten `time.since`,
`time.until`, marcas de tiempo Unix y `lang`. Esto incluye las pestañas Posts,
Respuestas, Multimedia y Me gusta del perfil, las Listas, las respuestas, las
citas y los hilos. También funcionan los operadores de fecha planos
equivalentes. El Actor verifica cada fila antes de facturar. El límite inferior
de fecha es inclusivo. El límite superior es exclusivo. Los filtros de fecha
excluyen las filas sin fechas utilizables. Los filtros de idioma excluyen los
idiomas ausentes o que no coinciden. Las filas filtradas nunca consumen tu
límite de resultados.

La misma fecha en `since` y `until` da una ventana vacía. Define `until` como el
día siguiente para obtener 1 día completo. Las ejecuciones de Listas con ventana
de fechas llegan rápido a los días más antiguos. Terminan en cuanto pasan tu
límite inferior. Las ventanas muy antiguas de una Lista pueden omitir algunas
respuestas. Los filtros de posts no se aplican a listas de usuarios ni a
consultas directas de posts o Artículos.

`time.withinTime` y `within_time` funcionan en los mismos modos. Un valor de
`7d` conserva los últimos 7 días antes de que la ejecución empiece a leer. Una
ventana que llega antes de 2006 conserva todos los posts.

`mode: "replies"` es más estricto. Cada fila de post tiene `inReplyToId` igual
al ID del post pedido. Las respuestas anidadas de la conversación nunca cuentan
como respuestas directas. Si X muestra menos respuestas de las que informa, el
Actor conserva las filas que encontró. Agrega 1 registro `replies-incomplete` a
`diagnostics` cuando no se alcanza tu límite. La ejecución queda parcial hasta
que alcanza tu límite o X no tiene más respuestas. `replyCoverage` informa los
conteos de respuestas y los detalles de cobertura. Define `maxItems` con el
total que quieres, incluso más de 25,000 para un solo post objetivo.

Las filas de artículo incluyen `resultType: "article"`, `sourceTweetId`,
`article` y un `author` opcional. Las filas de usuarios de interacción incluyen
`resultType: "user"`, `sourceTweetId` y `engagementMode`.

El modo `retweeters` funciona como cualquier modo público de interacción. El
modo `favoriters` funciona en la medida de lo posible. X puede mostrar quién
marcó Me gusta solo en posts elegibles o visibles para su autor. Los Me gusta de
perfiles también funcionan en la medida de lo posible. Muchos perfiles públicos
no tienen una pestaña Me gusta legible. Si X no muestra usuarios ni posts con Me
gusta, el Actor escribe un registro gratuito en `diagnostics`. Las filas de
posts pueden traer la cantidad de elementos guardados. X no muestra qué cuentas
guardaron un post.

### Exporta filas CSV planas

Conserva los campos JSON anidados predeterminados o agrega columnas cómodas para
hojas de cálculo:

```json
{ "searchTerms": ["from:nasa moon"], "maxItems": 100, "outputPreset": "flat" }
```

La salida plana deja `author` y `media` sin cambios. Agrega campos de primer
nivel como `authorUsername`, `authorName`, `authorFollowers`, `tweetUrl`,
`twitterUrl`, `mediaUrls`, `imageUrls` y `videoUrls`.

Cada fila plana de post trae `media`. Un post sin contenido multimedia tiene una
lista vacía. Así, todas las filas tienen las mismas claves en una hoja de
cálculo o en un pipeline tipado.

### Elige los nombres de los campos

Los nombres de campo Legacy son los predeterminados. Elige un estilo para
resultados rich o raw:

```json
{
  "searchTerms": ["from:nasa moon"],
  "maxItems": 100,
  "outputVariant": "rich",
  "fieldStyle": "snake_case"
}
```

Usa `camelCase` o `snake_case` para los campos de resultado de primer nivel y
anidados. La salida plana en snake case incluye campos como `author_username` y
`media_urls`. Las copias seguras del origen bajo `raw` conservan sus claves
originales. Los nombres de origen en conflicto también quedan sin cambios para
evitar pérdida de datos.

Los diagnósticos Legacy usan `resultType`, `actorVersion` y `replyCoverage`. Las
salidas rich y raw aplican `fieldStyle` en cada nivel de anidación. Por ejemplo,
snake case usa `result_type`, `actor_version` y `reply_coverage`. La vista
Overview del dataset funciona con cualquiera de los 2 estilos. Elige la vista de
Console que coincida con el `fieldStyle` de la ejecución. `camelCase fields`
espera `camelCase`. `snake_case fields` espera `snake_case`. Las vistas solo
seleccionan columnas. Nunca renombran los datos guardados ni exportados.

### Combina filtros avanzados

Combina filtros de usuario, fecha, ubicación, contenido multimedia e
interacción:

```json
{
  "twitterContent": "AI",
  "from": "elonmusk",
  "since": "2026-01-01_00:00:00_UTC",
  "until": "2026-03-01_00:00:00_UTC",
  "lang": "en",
  "filter:media": true,
  "min_faves": 1000,
  "maxItems": 500
}
```

Define `queryType: "Latest + Top"` para usar los 2 modos de búsqueda de X en 1
ejecución. El Actor quita duplicados antes de facturar y llena tu límite con
cualquiera de los 2 modos. `Top` ordena por relevancia y no devuelve todas las
coincidencias. Define `includeSearchTerms: true` para adjuntar cada consulta
coincidente como un campo `searchTerm`.

Cuando defines `lang`, el Actor verifica el idioma de cada post devuelto. Omite
los que no coinciden y sigue leyendo en busca de posts que sí coincidan.

## Ejemplos de tareas

Elige entre 50 tareas públicas. Cada una tiene una entrada acotada y una vista
de dataset correspondiente. Cada tarea trae una búsqueda u objetivo real.
Edítala antes de ejecutarla.

- [Fetch fresh X posts for AI agents](https://apify.com/xquik/x-tweet-scraper/examples/search-x-posts-for-ai-agents)
- [Build an X dataset for RAG](https://apify.com/xquik/x-tweet-scraper/examples/build-x-rag-dataset)
- [Extract an X article for RAG](https://apify.com/xquik/x-tweet-scraper/examples/extract-x-article-for-rag)
- [Monitor AI search visibility on X](https://apify.com/xquik/x-tweet-scraper/examples/monitor-ai-search-visibility-on-x)
- [Track AI SEO and generative engine optimization](https://apify.com/xquik/x-tweet-scraper/examples/track-generative-engine-optimization-talk)
- [Discover AI agent tools on X](https://apify.com/xquik/x-tweet-scraper/examples/discover-ai-agent-tools-on-x)
- [Collect AI product feedback](https://apify.com/xquik/x-tweet-scraper/examples/collect-ai-product-feedback)
- [Monitor brand mentions on X](https://apify.com/xquik/x-tweet-scraper/examples/monitor-brand-mentions-on-x)
- [Export Twitter data to CSV](https://apify.com/xquik/x-tweet-scraper/examples/export-twitter-data-to-csv)
- [Collect replies to an OpenAI post](https://apify.com/xquik/x-tweet-scraper/examples/collect-replies-to-an-openai-post)
- [Extract a complete Twitter thread](https://apify.com/xquik/x-tweet-scraper/examples/extract-complete-twitter-thread)
- [Collect electric vehicle conversations](https://apify.com/xquik/x-tweet-scraper/examples/collect-electric-vehicle-conversations)

## ¿Cuánto cuesta extraer tuits?

X Tweet Scraper de Xquik cuesta $0.00015 por fila entregada en cualquier plan de
Apify. Apify factura aparte tu uso de la plataforma. Xquik aplica un cobro por
cada fila de datos entregada. Los diagnósticos son gratis en la salida
`diagnostics`.

- No necesitas suscripción de Xquik.
- No pagas tarifa aparte de inicio ni de consulta. Las URLs y las consultas de
  un solo post tampoco agregan tarifa.
- Los filtros y la eliminación de duplicados se aplican antes de facturar. Nunca
  pagas por filas filtradas ni duplicadas.
- Las ejecuciones sin entrada, con entrada inválida o sin salida escriben 1
  registro con instrucciones en la salida gratuita `diagnostics`.

Una ejecución grande, o una que tiene un problema, también escribe un registro
`run-report`. Su `estimatedChargeUsd` usa el precio actual por evento de Apify.
Las ejecuciones con problemas siempre escriben `run-report`, incluso las que
terminan sin entrada o con entrada inválida. Una ejecución pequeña sin problemas
lo omite y ahorra uso de Apify. Activa `alwaysSaveRunRecords` para escribirlo en
todas las ejecuciones. Los informes separan las filas de datos en `realRows` de
los diagnósticos en `diagnosticRows`.

Para limitar lo que puede gastar una ejecución, consulta
[Opciones de ejecución](#opciones-de-ejecución).

## Prueba comparativa

X Tweet Scraper de Xquik superó a otros 11 Actores de posts en costo y
velocidad. Su fila mediana tuvo 63 campos, 2x la mediana de los demás.

| Actor                                                             | Tuits útiles | Costo por tuit útil | Tuits útiles por segundo | Campos por fila | Ejecución pública                                                      |
| ----------------------------------------------------------------- | -----------: | ------------------: | -----------------------: | --------------: | ---------------------------------------------------------------------- |
| xquik/x-tweet-scraper                                             |          890 |           $0.000175 |                     39.2 |              63 | [Ver ejecución](https://console.apify.com/view/runs/fflWVxHwYvtyHpAQX) |
| xquik/x-tweet-scraper                                             |          883 |           $0.000176 |                     25.2 |              63 | [Ver ejecución](https://console.apify.com/view/runs/EtSdBgkUcH4M1uicf) |
| xquik/x-tweet-scraper                                             |          882 |           $0.000177 |                     25.7 |              63 | [Ver ejecución](https://console.apify.com/view/runs/SK3ZWhPwzGJYoYQba) |
| xquik/x-tweet-scraper                                             |          877 |           $0.000178 |                     26.9 |              63 | [Ver ejecución](https://console.apify.com/view/runs/JRdbcigkBMCaFuH1W) |
| scrapesmith/twitter-x-scraper-tweets-profiles-replies             |          813 |           $0.000185 |                     10.5 |              36 | [Ver ejecución](https://console.apify.com/view/runs/mIT1zf0xccCsYWO1E) |
| scrapesmith/twitter-x-scraper-tweets-profiles-replies             |          805 |           $0.000187 |                     10.6 |              36 | [Ver ejecución](https://console.apify.com/view/runs/p1MUeElsamZUepTpm) |
| scrapesmith/twitter-x-scraper-tweets-profiles-replies             |          805 |           $0.000187 |                     10.7 |              36 | [Ver ejecución](https://console.apify.com/view/runs/pQlQa0GMm7BWTUUOB) |
| kaitoeasyapi/twitter-x-data-tweet-scraper-pay-per-result-cheapest |          880 |           $0.000250 |                      9.1 |              46 | [Ver ejecución](https://console.apify.com/view/runs/3Fn8yvqncsWdcw1I2) |
| scraper_one/x-posts-search                                        |          804 |           $0.000314 |                      3.3 |              14 | [Ver ejecución](https://console.apify.com/view/runs/M9TgeCLLKZlNTOrj0) |
| danek/twitter-scraper                                             |          807 |           $0.000347 |                      5.0 |              27 | [Ver ejecución](https://console.apify.com/view/runs/kyeJqCeaARxQPGM5W) |
| tweetapi/twitter-x-search-scraper                                 |          337 |           $0.000374 |                      2.6 |              28 | [Ver ejecución](https://console.apify.com/view/runs/mxkP8EDAUVtCZdobb) |
| api-ninja/x-twitter-advanced-search                               |          837 |           $0.000430 |                      7.4 |              28 | [Ver ejecución](https://console.apify.com/view/runs/XAWKinvZyPNjCwrib) |
| apidojo/twitter-scraper-lite                                      |          251 |           $0.000494 |                     12.9 |              54 | [Ver ejecución](https://console.apify.com/view/runs/1t4XwmbQNTtwMJ0Ta) |
| apidojo/tweet-scraper                                             |          481 |           $0.000832 |                      7.8 |              55 | [Ver ejecución](https://console.apify.com/view/runs/PydoBgS1YRblg29bB) |
| xtdata/twitter-x-scraper                                          |         1378 |           $0.001168 |                     11.9 |              67 | [Ver ejecución](https://console.apify.com/view/runs/U91dRXEvKvqu41aop) |
| seemuapps/x-tweet-scraper                                         |          805 |           $0.001242 |                      6.9 |              24 | [Ver ejecución](https://console.apify.com/view/runs/FstursEw43TbcipYU) |
| maximedupre/twitter-scraper                                       |           46 |           $0.002846 |                      0.3 |              31 | [Ver ejecución](https://console.apify.com/view/runs/Hs8irhEcAfWcQNc4w) |

Cada Actor hizo la misma búsqueda con los mismos filtros. Los otros Actores
corrieron el 2026-09-27. Las ejecuciones de Xquik usaron `outputVariant: "rich"`
y corrieron el 2026-09-29. Todas las ejecuciones usaron el nivel Bronze. Un tuit
útil es una publicación original única en inglés con 10+ me gusta. El costo es
el gasto total del cliente por tuit útil. El nuestro incluye el uso de Apify que
pagan nuestros clientes. Campos por fila es la mediana de campos no vacíos,
incluidos los anidados. Una lista cuenta como 1 campo. Abre una ejecución para
ver su entrada, registro & conjunto de datos.

## Ejecuciones vacías, parciales y detenidas

X Tweet Scraper de Xquik explica gratis las ejecuciones vacías, parciales y
detenidas. El estado de la ejecución dice por qué se detuvo. También cuenta los
resultados cobrados y los objetivos leídos.

### Resultados vacíos

Revisa un resultado vacío antes de pagar otra ejecución. El objeto `filtering`
de los informes y de los diagnósticos finales cuenta las filas que quitaron tus
filtros. Lee `serverFilteredRows`, `actorFilteredRows` y
`pagesWithUnknownServerFiltering`. Las filas filtradas nunca generan cargos por
resultado.

Una ejecución puede terminar por debajo de tu límite cuando X no tiene más
resultados. Informa `outcome: "complete"` con
`completionReason: "source_exhausted"`. Las ejecuciones interrumpidas conservan
su resultado parcial y las indicaciones para reintentar.

### Ejecuciones parciales

`failedSubtargets` cuenta las consultas y los perfiles objetivo que se
detuvieron tras un error. Las filas entregadas quedan en el dataset y cuentan
para el cobro. Un error nunca significa que el objetivo no exista. Estas
ejecuciones usan `completionReason: "partial_failure"`.

Una ejecución interrumpida también escribe un diagnóstico `partial` gratis. Los
resultados ya entregados se conservan. El diagnóstico informa
`availableResults`, `failedTargets`, `retryable` y `nextAction`. Una salida
exitosa del Actor confirma la entrega. No confirma una extracción completa.

### Causas de detención

El texto de estado nombra cada causa de la detención. Una ejecución con una
cuenta inexistente y una búsqueda estancada menciona las 2. `stopCauses` enumera
cada causa con su propio `message`, `retryable` y `nextAction`. Las causas son
`target_not_found`, `target_protected`, `search_unavailable`, `likes_hidden`,
`target_failed`, `pagination_safety_limit`, `reply_reach` y `deadline_reached`.
La ejecución es `retryable` si alguna causa lo es.

### Objetivos inexistentes y no disponibles

Un objetivo inexistente o protegido no es un fallo. X no tiene nada que leer
ahí. La ejecución lee todos los demás objetivos hasta el final. Informa
`outcome: "complete"`. Su motivo de finalización viene de los objetivos que
leyó, como `source_exhausted`. `failedSubtargets` deja fuera esos objetivos. El
texto de estado y un diagnóstico `complete` gratis los cuentan. Una ejecución
sin otras filas escribe en su lugar un diagnóstico `zero-output`.

Una búsqueda que X no puede ejecutar cuenta como fallo. X.com muestra "Algo
salió mal" ("Something went wrong") para esa búsqueda. La ejecución la detiene
de inmediato, sin reintentos. Los Me gusta que X oculta también cuentan como
fallos, y la ejecución los detiene de inmediato. X solo le muestra a su autor
quién marcó un post con Me gusta. Los posts que una cuenta marcó con Me gusta
solo los ve esa cuenta.

Cuando todos los fallos son de objetivos no disponibles, los diagnósticos
definen `retryable: false`. Revisa las URLs o nombres de usuario de los
objetivos y elige cuentas públicas disponibles. Acota una búsqueda que X no
puede ejecutar o cambia sus filtros. Lee cuentas que hicieron repost, respuestas
o posts en lugar de Me gusta ocultos. Los demás fallos conservan las
indicaciones para reintentar los objetivos sin terminar.

El diagnóstico nombra esos objetivos en `unavailableTargets`. Cada entrada tiene
el `target` tal como lo escribiste, un `reason` y un `nextAction`. El motivo es
`not_found`, `protected`, `search_unavailable` o `likes_hidden`. Una entrada de
búsqueda también puede tener un `fix`, como el operador que debes quitar. La
lista guarda hasta 100 entradas. Quita esos objetivos de tu entrada.

### Límites de seguridad y de tiempo

`completionReason: "pagination_safety_limit"` no es un fallo de lectura. La
ejecución conservó sus filas válidas. Después terminó un objetivo que dejó de
devolver resultados nuevos. La ejecución informa una extracción incompleta.
`failedSubtargets` queda en `0`. Solo pagas las filas entregadas.

El tiempo límite predeterminado de Apify es `0`, así que las ejecuciones no
tienen límite de tiempo. El Actor sigue hasta alcanzar tu tope o hasta agotar
los datos elegibles. Aun así, puedes definir un tiempo límite finito en Apify.
En ese caso, `completionReason: "deadline_reached"` significa que ese límite
está cerca. El Actor guarda las filas y el informe, y sale limpiamente antes del
límite. Pagas 1 vez por cada fila entregada.

## Entrada

La pestaña Input enumera todas las opciones. Indica al menos 1 de `startUrls`,
`twitterHandles`, `listIds`, `tweetIds`, `searchTerms` o `twitterContent`. Sus
alias documentados también funcionan. Todos los demás campos son opcionales.

Ejemplos:

- Pega una URL de post en Start URLs.
- Pega una URL de perfil o agrega el nombre de usuario en X handles.
- Usa `from:user since:YYYY-MM-DD until:YYYY-MM-DD` como término de búsqueda
  para recuperar el historial de una cuenta.
- Pega una URL de Lista en Start URLs.
- Combina `twitterContent` con filtros como `from:`, `since:`, `min_faves:` y
  `filter:media` para búsquedas avanzadas.

### Principales operadores de búsqueda compatibles

| Operador               | Ejemplo                | Uso                                     |
| ---------------------- | ---------------------- | --------------------------------------- |
| `from:`                | `from:elonmusk`        | Solo posts de este usuario              |
| `to:`                  | `to:OpenAI`            | Solo respuestas a este usuario          |
| `@`                    | `@nasa`                | Posts que mencionan a este usuario      |
| `list:`                | `list:123456`          | Posts de los miembros de la Lista       |
| `lang:`                | `lang:en`              | Filtra por idioma                       |
| `since:` / `until:`    | `since:2026-01-01`     | Rango de fechas                         |
| `min_faves:`           | `min_faves:100`        | Umbral de interacción                   |
| `min_retweets:`        | `min_retweets:50`      | Umbral de reposts                       |
| `filter:media`         | `filter:media`         | Operador de X para contenido multimedia |
| `filter:videos`        | `filter:videos`        | Operador de X para videos               |
| `filter:images`        | `filter:images`        | Operador de X para imágenes             |
| `filter:links`         | `filter:links`         | Solo posts con enlaces                  |
| `filter:replies`       | `filter:replies`       | Solo respuestas                         |
| `filter:quote`         | `filter:quote`         | Solo citas                              |
| `filter:blue_verified` | `filter:blue_verified` | Solo usuarios Premium                   |

X ya no busca con `filter:vine`, `filter:consumer_video`, `filter:pro_video`,
`filter:news` ni `retweets_of:`. Una búsqueda con alguno de ellos termina de
inmediato. Un diagnóstico gratuito indica cómo corregirla. Mantén cada consulta
en 512 caracteres o menos. X no busca más allá de ese largo.

Las ventanas de fechas incluyen el límite inferior y excluyen el superior. El
Actor revisa ambos límites antes de agregar o cobrar cada post.

Para ver la lista completa de operadores, consulta
[Twitter Advanced Search](https://github.com/igorbrigadir/twitter-advanced-search).

### Migra desde otro Actor de posts

Pega la entrada que ya usas. X Tweet Scraper de Xquik lee los nombres de campo
que usan otros Actores de posts. Los asigna a sus propios campos. Los nombres
canónicos siguen siendo el valor documentado predeterminado. Un alias nunca
descarta un campo ni cambia lo que pagas. El formulario de entrada solo muestra
los campos canónicos, así que sigue siendo corto. Los alias funcionan en
entradas JSON, API, SDK, automatizaciones y tareas guardadas.

| Campo que ya usas                                                                                                                                                      | Xquik lo lee como                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `startUrls`, `urls`, `tweetUrls`, `postUrls`, `profileUrls`, `accountUrls`                                                                                             | `startUrls`                                                              |
| `profileUrl`, como una sola cadena                                                                                                                                     | `startUrls`                                                              |
| `tweetIds`, `tweetIDs`, `tweets`, `postIds`, `lookupPostIds`, `tweet_ids`, o `tweetId` como una sola cadena                                                            | `tweetIds`                                                               |
| `twitterHandles`, `usernames`, `user_names`, `userNameList`, `handles`, `screenNames`, `profileTweets`                                                                 | `twitterHandles`                                                         |
| `username`, `handle`, `screenName`, como una sola cadena                                                                                                               | `twitterHandles`                                                         |
| `searchTerms`, `searchQueries`, `queries`, `search`, como lista o con una búsqueda por línea                                                                           | `searchTerms`                                                            |
| `twitterContent`, `query`, `searchQuery`                                                                                                                               | `twitterContent`                                                         |
| `maxItems`, `maxResults`, `max_results`, `resultsLimit`, `count`, `resultsCount`, `numberOfTweets`, `maxPosts`, `max_posts`, `max_items`, `maxTweets`, `tweetsDesired` | `maxItems`                                                               |
| `sort`                                                                                                                                                                 | `queryType`                                                              |
| `tweetLanguage`, `language`                                                                                                                                            | `lang`                                                                   |
| `author`, `inReplyTo`, `mentioning`                                                                                                                                    | `from`, `to`, `@`                                                        |
| `start`, `startDate`, `end`, `endDate`                                                                                                                                 | `since`, `until`                                                         |
| `minimumRetweets`, `minimumFavorites`, `minimumReplies`                                                                                                                | `min_retweets`, `min_faves`, `min_replies`                               |
| `onlyImage`, `onlyVideo`, `onlyQuote`, `onlyTwitterBlue`                                                                                                               | `filter:images`, `filter:videos`, `filter:quote`, `filter:blue_verified` |
| `geotaggedNear`, `withinRadius`                                                                                                                                        | `near`, `within`                                                         |
| `quickDateRange` de Google Search Scraper, como `d7`, `w2`, `m1` o `y`                                                                                                 | `since_time`, contado hacia atrás desde el inicio de la ejecución        |

Cómo se comporta una entrada pegada:

- Todas las fuentes se ejecutan. Una entrada con URLs, nombres de usuario,
  términos de búsqueda, IDs de Listas e IDs de posts las ejecuta todas.
  `maxItems` se aplica a toda la ejecución.
- Una consulta de búsqueda junto a `searchTerms` se ejecuta como 1 término más.
- Una URL de perfil escrita como `x.com/@name` se lee como `x.com/name`.
- Si defines un alias y su campo canónico, gana el valor canónico. El registro
  de la ejecución nombra el alias que perdió.
- El registro de la ejecución nombra cada campo que el Actor ignora, como
  `customMapFunction`. El Actor nunca descarta un campo en silencio.
- Un tope de filas debe ser un número entero de 1 o más. `maxResults: 0` detiene
  la ejecución antes de leer o cobrar nada.
- `quickDateRange: "m1"` lee el último mes en todas las rutas. Los meses y los
  años se cuentan hacia atrás en el calendario. Sin h, d, w, m o y, la ejecución
  se detiene antes de leer o cobrar.
- El Actor no tiene unidad de página. Reemplaza `maxPages` por `maxItems`.
- El Actor no tiene campo de ID de usuario. Envía nombres de usuario o URLs de
  perfil en lugar de `userId` o `user_ids`.
- Los campos de operadores de búsqueda como `from`, `min_faves`, `since_time` y
  `filter:images` ya usan los nombres de X. No necesitan conversión.

### Entrada en Console y API

El formulario de Console tiene estos controles:

- Mode, Output Variant, Field Style, Output Preset y Sort By son menús
  desplegables validados.
- Start URLs y Profile URLs aceptan cadenas u objetos `{ "url": "..." }`. Sus
  editores JSON conservan los 2 formatos de la API.
- Los filtros estructurados ofrecen controles agrupados, así que no necesitas
  JSON anidado.
- El formulario oculta los operadores planos que ya cubre un grupo de filtros.
  Las entradas JSON, API, SDK, automatizaciones y tareas guardadas los siguen
  aceptando.
- Max Items y Max Items Per Target aceptan números enteros de 1 o más. Los
  umbrales de interacción aceptan números enteros de 0 o más.

Usa los campos canónicos en integraciones nuevas. Los alias de la tabla de
migración de arriba siguen disponibles. `includeRaw` es un alias de
`outputVariant: "raw"`. Los valores antiguos de `outputVariant`, como `compact`
y `full`, siguen funcionando como salida Legacy. El formulario los marca como
alias Legacy.

## Salida

Cada fila de post es un objeto JSON con los metadatos que X ofrece. Los esquemas
del dataset y de run-report dan a cada campo un título, una descripción y un
ejemplo. Los agentes de IA pueden leerlos sin adivinar qué significa un campo.

Los valores de muestra son ilustrativos. Tus ejecuciones devuelven datos en vivo
de X.

```json
{
  "id": "1846987139428634858",
  "text": "The future of AI is...",
  "createdAt": "Sun Mar 15 12:00:00 +0000 2026",
  "retweetCount": 500,
  "replyCount": 120,
  "likeCount": 5000,
  "quoteCount": 80,
  "viewCount": 1200000,
  "bookmarkCount": 300,
  "lang": "en",
  "url": "https://x.com/elonmusk/status/1846987139428634858",
  "author": {
    "id": "44196397",
    "username": "elonmusk",
    "name": "Elon Musk",
    "followers": 180000000,
    "verified": true
  },
  "media": [{ "type": "photo", "url": "https://..." }],
  "entities": {
    "hashtags": [{ "text": "AI" }],
    "urls": [],
    "user_mentions": []
  },
  "isNoteTweet": false,
  "isQuoteStatus": false,
  "isReply": false,
  "conversationId": "1846987139428634858"
}
```

Exporta el dataset en JSON, CSV, Excel o HTML.

## Opciones de ejecución

- Define el cargo total máximo de Apify para limitar el costo de la ejecución.
  Deja `maxItems` vacío para obtener la mayor cantidad de filas que permita ese
  presupuesto. Define `maxItems` cuando quieras menos posts.
- Define `maxTotalChargeUsd` en la API de Apify, o Max cost per run en Console.
  Apify pasa ese límite al Actor como `ACTOR_MAX_TOTAL_CHARGE_USD`. El Actor lo
  convierte en la cantidad máxima de filas cobrables.
- Pasa `tweetIds` para consultar muchos posts a la vez. Pega una URL de perfil
  para leer los posts de una cuenta.
- Con muchas consultas, define `includeSearchTerms: true` para etiquetar cada
  resultado con su término de búsqueda.
- Define `queryType: "Latest + Top"` para usar los 2 modos de búsqueda de X en 1
  ejecución. La eliminación de duplicados y los topes de resultados se aplican a
  ambos.
- Usa los monitores de cuentas o de palabras clave de Xquik para revisiones cada
  segundo y webhooks firmados. Los monitores activos revisan cada segundo.

### Usa siempre la compilación más reciente

Selecciona `latest` en cada ejecución para recibir todas las correcciones
publicadas.

Si no eliges una compilación, Apify ejecuta X Tweet Scraper de Xquik con su
valor predeterminado `latest`. Las ejecuciones desde Console y los ejemplos
estándar de la API heredan ese valor.

Las tareas guardadas pueden reemplazar el valor predeterminado del Actor. Las
programaciones y las integraciones de tareas reutilizan esa elección. Deja cada
reemplazo en `latest`.

Apify no redirige los números de compilación exactos a `latest`. Reemplaza los
números fijados por `latest`. Usa una compilación exacta solo para volver atrás
de forma temporal o para reproducir una ejecución.

Lee las
[etiquetas de compilación](https://docs.apify.com/platform/actors/development/builds-and-runs/builds),
las
[opciones de ejecución](https://docs.apify.com/platform/actors/running/runs-and-builds)
y la
[documentación de tareas](https://docs.apify.com/platform/actors/running/tasks)
de Apify.

## Actores de Xquik relacionados

Todos los Actores de Xquik comparten el mismo motor de extracción, el cobro
después de filtrar y los diagnósticos. Elige el que se ajuste a los datos que
necesitas.

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

## ¿Necesitas más que extracción?

Xquik también ofrece 47 herramientas en el panel, 129 operaciones REST, webhooks
firmados y un servidor MCP.

- [Documentación de la API](https://docs.xquik.com/introduction): guías de la
  API REST
- [Search Tweets API](https://docs.xquik.com/api-reference/x/search-tweets):
  busca posts por REST
- [Batch Tweets API](https://docs.xquik.com/api-reference/x/batch-tweets):
  obtiene hasta 100 posts por ID
- [User Tweets API](https://docs.xquik.com/api-reference/x/user-tweets): obtiene
  la cronología de un usuario
- [Servidor MCP](https://docs.xquik.com/mcp/overview): descubre las herramientas
  compatibles
- [Webhooks](https://docs.xquik.com/webhooks/overview): entrega de eventos
  firmados
- [GitHub](https://github.com/Xquik-dev/x-twitter-scraper): código fuente y
  seguimiento de issues

## Preguntas frecuentes

### ¿Necesito una clave de API de X?

No. No necesitas clave de API de X, inicio de sesión ni credenciales.

### ¿Qué limita una ejecución?

Tu límite de ítems y tu límite de gasto en Apify detienen la ejecución. Los
límites de tu cuenta y de la plataforma de Apify siguen vigentes.

### ¿Qué tan rápido es?

X Tweet Scraper de Xquik entregó de 25.2 a 39.2 posts útiles por segundo en la
[prueba comparativa](#prueba-comparativa). El tiempo de ejecución depende de tu
entrada, la cantidad de resultados y la disponibilidad de X.

### ¿Por qué una búsqueda Latest devuelve posts que no aparecen en la pestaña Más recientes de X?

X deja algunos posts coincidentes fuera de su pestaña Más recientes. X Tweet
Scraper de Xquik también devuelve esos posts. Cada post es un resultado real de
la búsqueda de X para tu consulta. Pagas cada post 1 vez.

### ¿Qué operadores de búsqueda funcionan?

La búsqueda avanzada de X admite autores, destinatarios, menciones, fechas,
interacción, contenido multimedia y ubicación. Consulta
[Principales operadores de búsqueda compatibles](#principales-operadores-de-búsqueda-compatibles)
para ver ejemplos.

### ¿Puedo usar la API de Apify para ejecutarlo?

Sí. Consulta la [pestaña API](https://apify.com/xquik/x-tweet-scraper/api) para
ver ejemplos en Python, JavaScript y cURL.

### ¿Puedo programar extracciones recurrentes?

Sí. Usa la [programación](https://docs.apify.com/platform/schedules) integrada
de Apify para ejecutar X Tweet Scraper de Xquik con un cron.

### ¿Puedo obtener una solución a medida?

Sí. Visita [xquik.com](https://xquik.com) o lee la
[documentación de la API](https://docs.xquik.com/introduction) sobre el panel,
la API, el servidor MCP y los webhooks.

### ¿Es legal extraer datos de X?

X Tweet Scraper de Xquik solicita campos públicos de X. Los resultados pueden
contener datos personales. Confirma que tu propósito es lícito y cumple las
normas de privacidad que te aplican. Si tienes dudas, consulta a un abogado
calificado.

### ¿Dónde consigo ayuda?

Abre un issue en la pestaña Issues de la página del Actor o en
[GitHub](https://github.com/Xquik-dev/x-twitter-scraper/issues). También puedes
escribir a support@xquik.com con el ID de la ejecución.