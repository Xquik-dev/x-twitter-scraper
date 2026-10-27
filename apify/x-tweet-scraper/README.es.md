[English](README.md) · **Español** · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer conecta Xquik MCP con agentes de codificación](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Mira cómo Framer usa los extractores de Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
con Claude Code, Codex, Cursor & más, desde el minuto 6:07.

Xquik es el servicio de scraping de X (Twitter) más rápido y económico del
mundo, con los datos de X más completos. X Tweet Scraper de Xquik recopila
posts, respuestas, perfiles, Listas & búsquedas con más de 50 filtros. Pruebas
comparativas públicas demuestran que es el más económico & rápido de 12 Actores
de posts. Sus filas traen 2x los campos del Actor mediano, como muestra la
[prueba comparativa de abajo](#prueba-comparativa). La mayoría de los demás
Actores de Apify cobran antes de filtrar o quitar duplicados. Xquik solo cobra
los resultados entregados, únicos y que cumplen tus filtros.

Extrae tweets de Twitter **desde $0.00015 por resultado entregado en todos los
planes de Apify**, una alternativa a la API de Twitter. Apify factura aparte el
uso de la plataforma. No necesitas iniciar sesión en X & no pagas tarifa de
inicio ni de consulta. Creado por Xquik.

> Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
> "Twitter" y "X" son marcas registradas de X Corp.

## ¿Qué hace X Tweet Scraper?

X Tweet Scraper de Xquik devuelve posts, métricas de interacción, perfiles
públicos de los autores & contenido multimedia. Acepta URLs, nombres de usuario,
IDs de Listas, IDs de posts & consultas de búsqueda con más de 50 filtros.

### Casos de uso

- Alimenta investigación, enriquecimiento, analítica & entrenamiento de IA con
  el texto, los autores, el contenido multimedia & las métricas de los posts.
- Sigue el sentimiento de marca en los posts.
- Vigila los posts de la competencia & los términos de tu sector.
- Encuentra clientes potenciales en conversaciones públicas.
- Recopila datasets públicos para investigación.
- Encuentra posts con mucha interacción pública.

## ¿Por qué usar X Tweet Scraper?

- **Búsqueda 13.6x más rápida.** La búsqueda por palabra clave fue 13.6x más
  rápida que la más rápida de otros 4 Actores de posts. La búsqueda filtrada fue
  4.3x más rápida, & la cronología de un usuario, unas 3x. La [prueba
  comparativa](README.md#benchmark) se hizo el 2026-10-15 & el 2026-10-16.
- **El menor costo por post útil.** Tuvo el menor costo por post útil en los 3
  casos de la [prueba comparativa](README.md#benchmark).
- **Más campos por post.** Su fila mediana de búsqueda por palabra clave tuvo 67
  campos. Es 1.3x la mediana de los otros Actores en la [prueba
  comparativa](README.md#benchmark).
- **Todas las fuentes en 1 ejecución.** Combina IDs de posts, nombres de
  usuario, Listas, búsquedas & URLs en 1 entrada. Define `mode` para respuestas,
  citas, hilos, menciones, cuentas que hicieron repost o artículos.
- **Encuentra los posts más destacados de X.** `mode: "topTweets"` devuelve los
  posts que X clasifica más alto en 1 métrica, como las visualizaciones.
  Limítalos a un día, una semana o un mes & a un país.
- **Código para insertar cada post.** `mode: "embed"` devuelve el HTML que
  muestra un post en tu sitio.
- **Sin límite de IDs de posts.** Consulta cualquier cantidad de IDs de posts en
  1 ejecución. Las filas vuelven en el orden de tu entrada. Tu límite de gasto &
  tu tiempo límite siguen vigentes.
- **Más recientes & Destacados en 1 ejecución.** Para ambos órdenes de búsqueda,
  define `queryType` como `Latest + Top`. Pagas cada post 1 sola vez.

### Resultados completos

- Los rangos de fechas grandes vuelven completos & rápido.
- Las búsquedas devuelven todas las coincidencias, sin importar qué operadores
  combines.
- El historial de la cuenta vuelve completo, incluidos los posts antiguos.
- Al excluir las respuestas de los posts de un perfil, igual se conservan los
  hilos del propio autor.
- Las lecturas de perfiles incluyen el post fijado, marcado como fijado.
- Las listas de posts más destacados vuelven de forma confiable.
- Las páginas filtradas vuelven llenas hasta que se acaban los resultados.
- Cada resultado trae los datos más completos que X tiene sobre él.

### Filas precisas

- Los resultados de búsqueda traen todos los posts que coinciden con tu consulta
  & nada más.
- La coincidencia de palabras & frases funciona en todos los idiomas & sistemas
  de escritura.
- Los filtros de idioma funcionan con todos los idiomas que X etiqueta.
- Un post se marca como inexistente solo cuando ya no existe.
- Las cuentas protegidas & las Listas privadas reciben una respuesta clara, no
  una página vacía.
- Los reposts traen el texto original completo.
- Cada ID de una fila se mantiene exacto.
- Las menciones, los enlaces, los hashtags & los resaltados quedan alineados con
  el texto.
- Un conteo desconocido aparece en `unknownCounts`, nunca como 0.
- Las insignias de verificación coinciden con lo que muestra `x.com`.
- Las filas solo contienen datos públicos.
- Las búsquedas de citas devuelven todas las citas reales & nada más.
- Las exportaciones de respuestas solo traen respuestas directas, en un orden
  comprobado.
- Los resultados con los más recientes primero mantienen el orden real por fecha
  entre páginas.
- Las búsquedas aceptan consultas tal como las escribirías en X.
- Las búsquedas de lugares funcionan con nombres en 6 idiomas.
- Una búsqueda que no puede ejecutarse falla de inmediato & dice cómo
  corregirla.
- Una fecha significa lo mismo en cualquier formato común.
- Las búsquedas aceptan los límites `since_id` & `max_id`.
- Los anuncios & las entradas promocionadas nunca llegan a tus filas.

### Datos actualizados

- Las lecturas siguen funcionando cuando X lanza cambios.

### Velocidad

- Una página lenta no frena tu ejecución.
- Las búsquedas siguen siendo rápidas en temas con mucha actividad.
- Cada página siguiente llega rápido.
- Las lecturas terminan en cuanto llegan sus filas.
- Las llamadas a Actores que se atascan se recuperan solas.

### Cobro justo

- Una entrada inválida no cuesta nada & te dice qué corregir.
- Un ID de post que aparece 2 veces en un lote se cobra 1 sola vez.
- Los Actores solo cobran las filas entregadas, únicas & que cumplen tus
  filtros.
- Una ejecución reiniciada nunca cobra 2 veces.
- Las ejecuciones respetan tu límite de gasto & aun así escriben sus
  diagnósticos.
- Las ejecuciones pequeñas terminan con un consejo para gastar menos.

### Confiabilidad

- Un error aislado no hace fallar tu ejecución.
- La paginación se mantiene coherente de una página a la siguiente.
- La paginación nunca entra en un bucle infinito.
- Si se acaba el tiempo, recibes las filas ya encontradas, con diagnósticos.
- Los Actores resisten las caídas breves de Xquik.
- Las ejecuciones de los Actores siguen tras un reinicio sin repetir nada.
- Una fila defectuosa no arruina un lote.
- Las ejecuciones detenidas conservan sus filas & su informe.
- Una ejecución que no puede iniciar igual explica por qué.
- `stopCauses`, `failedSubtargets` & `unavailableTargets` detallan las fallas
  parciales.
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
- Los posts & las biografías se pueden traducir a tu idioma.

### Controles de calidad

- Cada campo que muestra X se entrega, se omite a propósito o se comprueba que
  no existe.
- Xquik prueba cada lectura en vivo contra X.

## ¿Qué datos puede extraer X Tweet Scraper?

| Campo                  | Descripción                                                       |
| ---------------------- | ----------------------------------------------------------------- |
| `id`                   | ID del post                                                       |
| `text`                 | Texto completo, incluidos los Note Tweets de hasta 25k caracteres |
| `createdAt`            | Cadena de fecha y hora nativa de X                                |
| `likeCount`            | Cantidad de Me gusta                                              |
| `retweetCount`         | Cantidad de reposts                                               |
| `replyCount`           | Cantidad de respuestas                                            |
| `quoteCount`           | Cantidad de citas                                                 |
| `viewCount`            | Cantidad de visualizaciones                                       |
| `bookmarkCount`        | Cantidad de elementos guardados                                   |
| `lang`                 | Idioma del post                                                   |
| `url`                  | Enlace directo al post                                            |
| `tweetUrl`             | Alias de la URL del post en la salida plana                       |
| `twitterUrl`           | URL de `twitter.com` en la salida plana                           |
| `author`               | Nombre de usuario, biografía, sitio web & conteos del autor       |
| `authorUsername`       | Nombre de usuario del autor en la salida plana                    |
| `authorFollowers`      | Cantidad de seguidores del autor en la salida plana               |
| `authorUrl`            | Sitio web del autor en la salida plana, si existe                 |
| `authorDescription`    | Texto de la biografía del autor en la salida plana                |
| `authorCoverPicture`   | URL de la imagen de encabezado del autor en la salida plana       |
| `authorPinnedTweetIds` | IDs de los posts fijados del autor en la salida plana             |
| `media`                | Imágenes, videos y GIFs adjuntos                                  |
| `mediaUrls`            | URLs de contenido multimedia en la salida plana                   |
| `imageUrls`            | URLs de imágenes en la salida plana                               |
| `videoUrls`            | URLs de videos en la salida plana                                 |
| `entities`             | Hashtags, URLs, menciones y marcas de tiempo de video             |
| `displayTextRange`     | Rango de texto visible de X, si existe                            |
| `contentDisclosure`    | Metadatos de divulgación, si existen                              |
| `conversationControl`  | Política de respuestas y dueño público de la conversación         |
| `reactionContext`      | Post y usuario públicos a los que hace referencia una reacción    |
| `subscriberBadge`      | Creador al que está suscrito el autor de la respuesta             |
| `limitedActions`       | Restricciones y avisos públicos de interacción                    |
| `isLimitedReply`       | Si las respuestas están limitadas                                 |
| `isNoteTweet`          | Si es un Note Tweet (post de formato largo)                       |
| `isQuoteStatus`        | Si este post cita otro post                                       |
| `isRetweet`            | Si esta fila es un repost, con el original adjunto                |
| `isPinned`             | Si el autor fijó este post. Solo en filas planas                  |
| `isReply`              | Si este post es una respuesta                                     |
| `quoted_tweet`         | Objeto del post citado (si es una cita)                           |
| `conversationId`       | ID del hilo o de la conversación                                  |
| `resultType`           | Tipo de fila para filas rich, de interacción & de diagnóstico     |
| `sourceTweetId`        | ID del post de origen en los modos de artículo e interacción      |
| `article`              | Datos estructurados del artículo en `mode: "article"`             |
| `translation`          | Traducción de X en `mode: "translation"`                          |
| `embed`                | HTML para insertar & enlace en `mode: "embed"`                    |

Los metadatos opcionales del post incluyen `authorUnavailable`, `card`,
`cashtagAttachments`, `communityId`, `communityName`, `communityNote`, `edit`,
`exclusiveContent`, `noteTweet` & `postCta`. `isTranslatable`, `place`,
`possiblySensitive` & `viewState` guardan otro contexto público.
`previousCounts` guarda la interacción previa a una edición. `tombstone` guarda
los avisos de visibilidad. `unmentionedUserIds` enumera a los usuarios que
salieron de la conversación. Consulta OpenAPI para ver los campos exactos.

Define `outputVariant: "rich"` para obtener la mayor cantidad de datos por fila.
Las filas rich agregan al final `hasCommunityNotes`, `quotedTweetPermalink`,
`unavailableAuthorId` & el `sourceUser` del contenido multimedia. Las filas
Legacy no cambian.

Los objetos `author` anidados traen campos públicos del perfil. Cubren
identidad, conteos, verificación, disponibilidad, datos profesionales &
biografías del perfil.

Las filas de repost definen `isRetweet` como `true`. Su `text` trae el post
original completo. `retweeted_tweet` guarda el post original con su autor & sus
conteos.

Las filas de posts también conservan `type`, `source`, `inReplyToId`,
`inReplyToUserId`, `inReplyToUsername` & `retweeted_tweet`. Los posts citados &
los reposts traen los mismos campos en cada nivel de anidación.

El contenido multimedia trae disponibilidad, geometría, etiquetas & variantes de
video. También trae las acciones `watchNowUrl` & `visitSiteUrl`.

Las filas nunca incluyen estados que solo ve el espectador. El Actor quita las
marcas de seguimiento, bloqueo, silencio, elementos guardados, Me gusta, repost,
permiso de edición & otras similares del espectador. La salida raw también las
quita.

## ¿Cómo uso X Tweet Scraper para extraer datos de tuits?

¿Recién llegas a Apify? Primero
[crea una cuenta gratis](https://console.apify.com/sign-up?fpr=xquik). El plan
gratuito no pide tarjeta de crédito & te da $5 para gastar cada mes. A $0.00015
por fila, $5 alcanzan para hasta 33,000 filas, sin contar el uso de la
plataforma. Luego vuelve aquí & haz clic en Try for free.

Sigue estos pasos en Apify Console.

1. Abre un [ejemplo de tarea](#ejemplos-de-tareas) o la pestaña Input.
2. Agrega URLs, nombres de usuario, IDs de posts o términos de búsqueda.
3. Define `maxItems` & los filtros que necesites.
4. Haz clic en Start & espera a que termine la ejecución.
5. Exporta el dataset en JSON, CSV, Excel o HTML.

Cada receta de abajo es una entrada completa para 1 fuente. Elige la que se
ajuste a tus datos.

### Pega URLs

Pega cualquier mezcla de URLs de posts, perfiles, búsquedas o Listas.

```json
{
  "startUrls": [
    { "url": "https://x.com/jack/status/20" },
    { "url": "https://x.com/nasa" },
    { "url": "https://x.com/search?q=AI%20lang%3Aen" },
    { "url": "https://x.com/i/lists/1748648376080666720" }
  ],
  "maxItems": 500
}
```

Las URLs de posts devuelven esos posts, sin duplicados & en el orden de tu
entrada. Las URLs de perfil devuelven los posts de la cuenta. Las URLs de
búsqueda ejecutan su consulta. Las URLs de Listas devuelven los posts de la
Lista. `maxItems` limita los resultados de todas las URLs pegadas.

### Extrae muchos nombres de usuario

Los nombres de usuario funcionan como atajo para muchas búsquedas
`from:username`.

```json
{ "twitterHandles": ["elonmusk", "nasa", "openai"], "maxItems": 100 }
```

Cada nombre de usuario devuelve los posts de esa cuenta. El Actor quita las
filas duplicadas antes de la salida & del cobro. Puedes agregar nombres de
usuario con o sin `@`. Los nombres de usuario & las URLs de perfil conservan los
reposts, igual que la pestaña Posts de X. Los conservan incluso con fechas o
filtros. Define `tweetTypes.excludeRetweets` para quitarlos.

### Busca posts

Escribe 1 o más consultas en el campo Search terms.

```json
{
  "searchTerms": ["from:elonmusk AI", "#bitcoin lang:en"],
  "maxItems": 1000,
  "queryType": "Latest"
}
```

Con `mode` en `tweet` o `tweets` & sin IDs de posts, las consultas se ejecutan
como búsqueda. Así, unos `searchTerms` válidos nunca devuelven una consulta por
ID vacía.

También funciona recuperar el historial de una cuenta con ventanas de fechas,
como `from:elonmusk since:2026-01-01 until:2026-01-02`. Cada término conserva su
propia atribución `searchTerm`. `maxItems` limita los resultados de todos los
términos de búsqueda. El Actor revisa cada post devuelto contra las ventanas
`since:`, `until:` & de tiempo Unix. Las búsquedas filtradas siguen leyendo
hasta encontrar coincidencias o hasta que X no tenga más resultados.

Un término de búsqueda `from:` devuelve lo mismo que la búsqueda de X, así que
deja fuera los reposts. Agrega `include:nativeretweets` para conservarlos, o
`filter:nativeretweets` para obtener solo reposts.

### Consulta posts por ID

```json
{ "tweetIds": ["20", "2082577277246972300"], "maxItems": 100 }
```

Los resultados conservan el orden de tu entrada, quitan duplicados & incluyen
solo los posts que pediste. La consulta también acepta `tweetId`, `tweetIDs`,
`tweets`, `postIds`, `lookupPostIds`, `tweetUrls` & `postUrls`.

Cada elemento es un ID de post o una URL de post. La ejecución omite cualquier
otro elemento sin cobrar & lee el resto. Su estado cuenta los elementos omitidos
& su registro los enumera.

Pon todos tus IDs en 1 ejecución. Cada ejecución le paga a Apify el mismo costo
de inicio. Con 1 ID por ejecución, el uso de Apify agrega cerca de $0.00008 a
cada post. Con 188 IDs en 1 ejecución, agrega cerca de $0.000005. Una ejecución
con menos de 5 IDs termina con este consejo.

### Modos de interacción, hilo & artículo

Define `mode` para elegir qué lee la ejecución, sin importar los demás campos de
la entrada.

```json
{ "mode": "replies", "replyTweetIds": ["2082577277246972300"], "maxItems": 100 }
```

Los modos de posts & búsqueda son `tweet`, `tweets` & `search`. Los modos de
perfil son `profileTweets`, `profileReplies`, `profileMedia`, `profileLikes` &
`profileMentions`. `listTweets` lee los posts de una Lista, & `article` lee el
Artículo de X de un post. Los modos para un solo post son `replies`, `quotes`,
`thread`, `retweeters`, `favoriters`, `translation` & `embed`.

`profileMentions` devuelve los posts que mencionan cada nombre de usuario,
primero los más recientes.

```json
{ "mode": "profileMentions", "twitterHandles": ["nasa"], "maxItems": 100 }
```

`profileTweets` sigue la pestaña Posts del perfil en X. Devuelve los posts, los
reposts & las respuestas de la cuenta a sus propios posts. Las filas llegan en
orden de fecha. El Actor quita las respuestas a otras cuentas antes de facturar.
También quita el contexto de conversación de otros autores.

Para obtener solo posts originales, excluye los tipos que no quieres.

```json
{
  "mode": "profileTweets",
  "twitterHandles": ["apify"],
  "tweetTypes": { "excludeReplies": true, "excludeRetweets": true },
  "maxItems": 100
}
```

`tweetTypes.excludeReplies`, `excludeRetweets` & `excludeQuotes` funcionan en
todas las fuentes. Una búsqueda los envía a X como `-filter:replies`,
`-filter:nativeretweets` & `-filter:quote`. En un perfil o una Lista, el Actor
quita esas filas por su cuenta. Las filas excluidas nunca llegan al dataset, así
que nunca pagas por ellas. Tampoco cuentan nunca para `maxItems`.

`profileReplies` sigue la pestaña Respuestas de X. Devuelve los posts & las
respuestas de la propia cuenta. El Actor excluye el contexto de conversación de
otros autores. Usa `filter:replies` o una búsqueda `to:` para obtener solo
respuestas.

Los modos de búsqueda & los modos paginados de posts admiten `time.since`,
`time.until`, marcas de tiempo Unix & `lang`. Estos modos incluyen las pestañas
Posts, Respuestas, Multimedia & Me gusta del perfil, las Listas, las respuestas,
las citas & los hilos. También funcionan los operadores de fecha planos
equivalentes. El Actor verifica cada fila antes de facturar. El límite inferior
de fecha es inclusivo. El límite superior es exclusivo. Los filtros de fecha
excluyen las filas sin fechas utilizables. Los filtros de idioma excluyen los
idiomas ausentes o que no coinciden. Las filas filtradas nunca consumen tu
límite de resultados.

La misma fecha en `since` & `until` da una ventana vacía. Define `until` como el
día siguiente para obtener 1 día completo. Las ejecuciones de Listas con ventana
de fechas llegan rápido a los días más antiguos. Terminan en cuanto pasan tu
límite inferior. Las ventanas muy antiguas de una Lista pueden omitir algunas
respuestas. Los filtros de posts no se aplican a listas de usuarios ni a
consultas directas de posts o artículos.

`time.withinTime` & `within_time` funcionan en los mismos modos. Un valor de
`7d` conserva los últimos 7 días antes de que la ejecución empiece a leer. Una
ventana que llega antes de 2006 conserva todos los posts.

`mode: "replies"` es más estricto. Cada fila de post tiene `inReplyToId` igual
al ID del post pedido. Las respuestas anidadas de la conversación nunca cuentan
como respuestas directas. Si X muestra menos respuestas de las que informa, el
Actor conserva las filas que encontró. Agrega 1 registro `replies-incomplete` a
`diagnostics` cuando no se alcanza tu límite. La ejecución queda parcial hasta
que alcanza tu límite o X no tiene más respuestas. `replyCoverage` informa los
conteos de respuestas & los detalles de cobertura. Define `maxItems` con el
total que quieres, incluso más de 25,000 para 1 post objetivo.

Las filas de artículo incluyen `resultType: "article"`, `sourceTweetId`,
`article` & un `author` opcional. Las filas de usuarios de interacción incluyen
`resultType: "user"`, `sourceTweetId` & `engagementMode`.

Las cuentas que hicieron repost funcionan como un modo público de interacción
normal. Las cuentas que dieron Me gusta se obtienen en la medida de lo posible.
X puede mostrar quién dio Me gusta solo en posts elegibles o visibles para su
autor. Los Me gusta del perfil también se obtienen en la medida de lo posible,
ya que muchos perfiles públicos no tienen una pestaña Me gusta legible. Si X no
muestra usuarios ni posts con Me gusta, el estado de la ejecución lo indica. Las
filas de posts pueden traer la cantidad de elementos guardados. X no muestra qué
cuentas guardaron un post.

### Traduce posts & obtén el HTML para insertarlos

`mode: "translation"` devuelve la traducción de X de cada post. Define
`translateTo` con un código de idioma, como `en`, `es`, `pt-br` o `zh-tw`. El
valor predeterminado es `en`.

```json
{
  "mode": "translation",
  "tweetIds": ["2082577277246972300"],
  "translateTo": "es"
}
```

Cada fila tiene `resultType: "translation"`, `sourceTweetId` & `translation`.
Ese objeto contiene `language`, `sourceLanguage`, `text` & `entities`.

`mode: "embed"` devuelve el HTML que inserta cada post en un sitio web.

```json
{ "mode": "embed", "tweetIds": ["2082577277246972300"], "embedTheme": "dark" }
```

Cada fila tiene `resultType: "embed"`, `sourceTweetId` & `embed`. Ese objeto
contiene `url`, `authorName`, `authorUrl`, `html` & `width`. `embedHideMedia`,
`embedHideThread` & `embedOmitScript` dejan fuera el contenido multimedia, el
post al que responde o el script del widget.

Ambos modos aceptan IDs de posts o URLs de posts en `tweetIds`. `startUrls`
también acepta URLs de posts. Cada post da 1 fila al precio habitual por fila.
Un post que X no tiene no da ninguna fila ni genera cobro.

### Obtén los posts más destacados de X

`mode: "topTweets"` devuelve los posts que X clasifica más alto según 1 métrica,
tal como los muestra la página Inspiration de X.

```json
{
  "mode": "topTweets",
  "topMetric": "views",
  "topWindow": "week",
  "topCountry": "US",
  "maxItems": 100
}
```

`topMetric` es `likes`, `replies`, `quotes`, `bookmarks`, `shares` o `views`. El
valor predeterminado es `likes`. `topWindow` es `day`, `week` o `month`, & su
valor predeterminado es `day`. X enumera hasta 100 posts para cada opción. Deja
`topCountry` vacío para todo X. Define `lang` para conservar 1 idioma. Con ambos
definidos, X elige el país & el Actor conserva el idioma. Cada fila tiene
`engagementMode: "topTweets"` & cuesta 1 resultado, como cualquier post.

### Exporta filas CSV planas

Conserva los campos JSON anidados predeterminados o agrega columnas cómodas para
hojas de cálculo.

```json
{ "searchTerms": ["from:nasa moon"], "maxItems": 100, "outputPreset": "flat" }
```

La salida plana deja `author` & `media` sin cambios. Agrega campos de primer
nivel como `authorUsername`, `authorName`, `authorFollowers`, `tweetUrl`,
`twitterUrl`, `mediaUrls`, `imageUrls` & `videoUrls`.

Cada fila plana de post trae `media`. Un post sin contenido multimedia tiene una
lista vacía. Así, todas las filas tienen las mismas claves en una hoja de
cálculo o en un pipeline tipado.

### Elige los nombres de los campos

Los nombres de campo Legacy son los predeterminados. Elige un estilo para
resultados rich o raw.

```json
{
  "searchTerms": ["from:nasa moon"],
  "maxItems": 100,
  "outputVariant": "rich",
  "fieldStyle": "snake_case"
}
```

Usa `camelCase` o `snake_case` para los campos de resultado de primer nivel &
anidados. La salida plana en snake case incluye campos como `author_username` &
`media_urls`. Las copias seguras del origen bajo `raw` conservan sus claves de
origen. Los nombres de origen en conflicto también quedan sin cambios para
evitar pérdida de datos.

Los diagnósticos Legacy usan `resultType`, `actorVersion` & `replyCoverage`. Las
salidas rich & raw aplican `fieldStyle` en cada nivel de anidación. Por ejemplo,
snake case usa `result_type`, `actor_version` & `reply_coverage`. La vista
Overview del dataset funciona con ambos estilos. Elige la vista de Console que
coincida con el `fieldStyle` de la ejecución. `camelCase fields` espera
`camelCase`. `snake_case fields` espera `snake_case`. Las vistas solo
seleccionan columnas. Nunca renombran los datos guardados ni exportados.

### Combina filtros avanzados

Combina filtros de usuario, fecha, ubicación, contenido multimedia &
interacción.

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

Define `queryType: "Latest + Top"` para usar ambos modos de búsqueda de X en 1
ejecución. El Actor quita duplicados antes de facturar & llena tu límite con
cualquiera de los 2 modos. `Top` ordena por relevancia & no devuelve todas las
coincidencias. Define `includeSearchTerms: true` para adjuntar cada consulta
coincidente como un campo `searchTerm`.

Cuando defines `lang`, el Actor verifica el idioma de cada post devuelto. Omite
los que no coinciden & sigue leyendo en busca de posts que sí coincidan.

## Ejemplos de tareas

Elige entre 50 tareas públicas. Cada una tiene una entrada acotada & una vista
de dataset que le corresponde. Cada tarea se abre con una búsqueda o un objetivo
real. Edítala antes de ejecutarla.

- [Obtén posts recientes de X para agentes de IA](https://apify.com/xquik/x-tweet-scraper/examples/search-x-posts-for-ai-agents)
- [Crea un dataset de X para RAG](https://apify.com/xquik/x-tweet-scraper/examples/build-x-rag-dataset)
- [Extrae un Artículo de X para RAG](https://apify.com/xquik/x-tweet-scraper/examples/extract-x-article-for-rag)
- [Vigila tu visibilidad en búsquedas de IA en X](https://apify.com/xquik/x-tweet-scraper/examples/monitor-ai-search-visibility-on-x)
- [Busca en Twitter por fecha](https://apify.com/xquik/x-tweet-scraper/examples/search-twitter-by-date)
- [Descubre herramientas para agentes de IA en X](https://apify.com/xquik/x-tweet-scraper/examples/discover-ai-agent-tools-on-x)
- [Recopila opiniones sobre productos de IA](https://apify.com/xquik/x-tweet-scraper/examples/collect-ai-product-feedback)
- [Vigila las menciones de marca en X](https://apify.com/xquik/x-tweet-scraper/examples/monitor-brand-mentions-on-x)
- [Exporta datos de Twitter a CSV](https://apify.com/xquik/x-tweet-scraper/examples/export-twitter-data-to-csv)
- [Recopila respuestas a un post de OpenAI](https://apify.com/xquik/x-tweet-scraper/examples/collect-replies-to-an-openai-post)
- [Extrae un hilo completo de Twitter](https://apify.com/xquik/x-tweet-scraper/examples/extract-complete-twitter-thread)
- [Recopila conversaciones sobre vehículos eléctricos](https://apify.com/xquik/x-tweet-scraper/examples/collect-electric-vehicle-conversations)

## ¿Cuánto cuesta extraer tuits?

X Tweet Scraper de Xquik cuesta $0.00015 por fila entregada en todos los planes
de Apify. Apify factura aparte tu uso de la plataforma. Xquik aplica un solo
cobro por cada fila de datos entregada. Los diagnósticos son gratis en la salida
`diagnostics`.

Para más volumen, [elige un plan de Apify](https://apify.com/pricing?fpr=xquik)
con más uso prepagado.

- No necesitas suscripción de Xquik.
- No pagas tarifa aparte de inicio ni de consulta. Las URLs & las consultas de
  un solo post tampoco agregan tarifa.
- Los filtros & la eliminación de duplicados se aplican antes de facturar. Nunca
  pagas por filas filtradas ni duplicadas.
- Las ejecuciones sin entrada & con entrada inválida escriben 1 registro con
  instrucciones en la salida gratuita `diagnostics`. Lo mismo hacen las
  ejecuciones que se detienen antes de tiempo, omiten un objetivo o cuyos
  propios filtros, como `lang` en una lectura de perfil, quitan todas las filas.
- Una ejecución que lee todos los objetivos & no recibe ninguna fila no escribe
  ningún registro. Su estado dice por qué & qué cambiar. Las filas que tus
  operadores de búsqueda descartan, como `-is:retweet`, tampoco escriben
  registro.

Una ejecución que tiene un problema, o una ejecución grande, también escribe un
registro `run-report`. Su `estimatedChargeUsd` usa el precio vigente de pago por
evento de Apify. Las ejecuciones con problemas siempre escriben `run-report`,
incluso las que terminan sin entrada o con entrada inválida. Una ejecución
pequeña sin problemas lo omite & ahorra uso de Apify. Activa
`alwaysSaveRunRecords` para escribirlo en todas las ejecuciones. Los informes de
ejecución separan las filas de datos en `realRows` de los diagnósticos en
`diagnosticRows`.

Para limitar lo que puede gastar una ejecución, consulta
[Opciones de ejecución](#opciones-de-ejecución).

## Prueba comparativa

X Tweet Scraper de Xquik superó a otros 11 Actores de posts en costo &
velocidad. Su fila mediana tuvo 63 campos, 2x la mediana de los demás.

- `xquik/x-tweet-scraper` entregó 890 posts útiles a $0.000175 por post útil,
  39.2 por segundo & 63 campos por fila.
  [Ver ejecución](https://console.apify.com/view/runs/fflWVxHwYvtyHpAQX)
- `xquik/x-tweet-scraper` entregó 883 posts útiles a $0.000176 por post útil,
  25.2 por segundo & 63 campos por fila.
  [Ver ejecución](https://console.apify.com/view/runs/EtSdBgkUcH4M1uicf)
- `xquik/x-tweet-scraper` entregó 882 posts útiles a $0.000177 por post útil,
  25.7 por segundo & 63 campos por fila.
  [Ver ejecución](https://console.apify.com/view/runs/SK3ZWhPwzGJYoYQba)
- `xquik/x-tweet-scraper` entregó 877 posts útiles a $0.000178 por post útil,
  26.9 por segundo & 63 campos por fila.
  [Ver ejecución](https://console.apify.com/view/runs/JRdbcigkBMCaFuH1W)
- `scrapesmith/twitter-x-scraper-tweets-profiles-replies` entregó 813 posts
  útiles a $0.000185 por post útil, 10.5 por segundo & 36 campos por fila.
  [Ver ejecución](https://console.apify.com/view/runs/mIT1zf0xccCsYWO1E)
- `scrapesmith/twitter-x-scraper-tweets-profiles-replies` entregó 805 posts
  útiles a $0.000187 por post útil, 10.6 por segundo & 36 campos por fila.
  [Ver ejecución](https://console.apify.com/view/runs/p1MUeElsamZUepTpm)
- `scrapesmith/twitter-x-scraper-tweets-profiles-replies` entregó 805 posts
  útiles a $0.000187 por post útil, 10.7 por segundo & 36 campos por fila.
  [Ver ejecución](https://console.apify.com/view/runs/pQlQa0GMm7BWTUUOB)
- `kaitoeasyapi/twitter-x-data-tweet-scraper-pay-per-result-cheapest` entregó
  880 posts útiles a $0.000250 por post útil, 9.1 por segundo & 46 campos por
  fila. [Ver ejecución](https://console.apify.com/view/runs/3Fn8yvqncsWdcw1I2)
- `scraper_one/x-posts-search` entregó 804 posts útiles a $0.000314 por post
  útil, 3.3 por segundo & 14 campos por fila.
  [Ver ejecución](https://console.apify.com/view/runs/M9TgeCLLKZlNTOrj0)
- `danek/twitter-scraper` entregó 807 posts útiles a $0.000347 por post útil,
  5.0 por segundo & 27 campos por fila.
  [Ver ejecución](https://console.apify.com/view/runs/kyeJqCeaARxQPGM5W)
- `tweetapi/twitter-x-search-scraper` entregó 337 posts útiles a $0.000374 por
  post útil, 2.6 por segundo & 28 campos por fila.
  [Ver ejecución](https://console.apify.com/view/runs/mxkP8EDAUVtCZdobb)
- `api-ninja/x-twitter-advanced-search` entregó 837 posts útiles a $0.000430 por
  post útil, 7.4 por segundo & 28 campos por fila.
  [Ver ejecución](https://console.apify.com/view/runs/XAWKinvZyPNjCwrib)
- `apidojo/twitter-scraper-lite` entregó 251 posts útiles a $0.000494 por post
  útil, 12.9 por segundo & 54 campos por fila.
  [Ver ejecución](https://console.apify.com/view/runs/1t4XwmbQNTtwMJ0Ta)
- `apidojo/tweet-scraper` entregó 481 posts útiles a $0.000832 por post útil,
  7.8 por segundo & 55 campos por fila.
  [Ver ejecución](https://console.apify.com/view/runs/PydoBgS1YRblg29bB)
- `xtdata/twitter-x-scraper` entregó 1,378 posts útiles a $0.001168 por post
  útil, 11.9 por segundo & 67 campos por fila.
  [Ver ejecución](https://console.apify.com/view/runs/U91dRXEvKvqu41aop)
- `seemuapps/x-tweet-scraper` entregó 805 posts útiles a $0.001242 por post
  útil, 6.9 por segundo & 24 campos por fila.
  [Ver ejecución](https://console.apify.com/view/runs/FstursEw43TbcipYU)
- `maximedupre/twitter-scraper` entregó 46 posts útiles a $0.002846 por post
  útil, 0.3 por segundo & 31 campos por fila.
  [Ver ejecución](https://console.apify.com/view/runs/Hs8irhEcAfWcQNc4w)

Cada Actor ejecutó la misma búsqueda & los mismos filtros. Los demás Actores se
ejecutaron el 2026-09-27. Las ejecuciones de Xquik usaron
`outputVariant: "rich"` & se ejecutaron el 2026-09-29. Todas las ejecuciones
usaron el nivel Bronze. Un post útil es un post original único en inglés con 10+
Me gusta. El costo es el gasto total del cliente por post útil. El nuestro
incluye el uso de Apify que pagan nuestros clientes. Campos por fila es la
cantidad mediana de campos no vacíos, incluidos los anidados. Una lista cuenta
como 1 campo. Abre una ejecución para ver su entrada, su registro & su dataset.

## Ejecuciones vacías, parciales & detenidas

X Tweet Scraper de Xquik explica gratis las ejecuciones vacías, parciales &
detenidas. El estado de la ejecución dice por qué se detuvo. También cuenta los
resultados cobrados & los objetivos leídos.

### Resultados vacíos

Revisa un resultado vacío antes de pagar otra ejecución. El objeto `filtering`
de los informes & de los diagnósticos finales cuenta las filas que quitaron tus
filtros. Lee `serverFilteredRows`, `actorFilteredRows` &
`pagesWithUnknownServerFiltering`. Nunca pagas cargos por resultado por las
filas filtradas. Una ejecución escribe 1 diagnóstico con estos conteos cuando
los propios filtros del Actor quitaron filas (`actorFilteredRows`). Las filas
que tus operadores de búsqueda descartan (`serverFilteredRows`), los posts fuera
de tu ventana de tiempo & una ejecución que no recibió ninguna fila no escriben
ningún registro. Su estado dice por qué & qué cambiar, como hacer una búsqueda
más amplia.

Una ejecución puede terminar por debajo de tu límite cuando X no tiene más
resultados. Informa `outcome: "complete"` con
`completionReason: "source_exhausted"`. Las ejecuciones interrumpidas conservan
su resultado parcial & las indicaciones para reintentar.

### Ejecuciones parciales

`failedSubtargets` cuenta las consultas & los perfiles objetivo que se
detuvieron tras un error. Las filas entregadas quedan en el dataset & cuentan
para el cobro. Un error nunca significa que el objetivo no exista. Estas
ejecuciones usan `completionReason: "partial_failure"`.

Una ejecución interrumpida también escribe un diagnóstico `partial` gratis. Los
resultados ya entregados se conservan intactos. El diagnóstico informa
`availableResults`, `failedTargets`, `retryable` & `nextAction`. Una salida
exitosa del Actor confirma la entrega. No confirma una extracción completa.

### Causas de detención

El texto de estado nombra cada causa de la detención. Una ejecución con una
cuenta inexistente & una búsqueda estancada menciona ambas. `stopCauses` enumera
cada causa con su propio `message`, `retryable` & `nextAction`. Las causas son
`target_not_found`, `target_suspended`, `target_protected`,
`search_unavailable`, `likes_hidden`, `target_failed`,
`pagination_safety_limit`, `reply_reach` & `deadline_reached`. La ejecución es
`retryable` si alguna causa lo es.

### Objetivos inexistentes & no disponibles

Un objetivo inexistente o protegido no es un fallo. X no tiene nada que leer
ahí. La ejecución lee todos los demás objetivos hasta el final. Informa
`outcome: "complete"`. Su motivo de finalización viene de los objetivos que
leyó, como `source_exhausted`. `failedSubtargets` deja fuera esos objetivos. El
texto de estado & un diagnóstico `complete` gratis los cuentan. Una ejecución
sin otras filas escribe en su lugar un diagnóstico `zero-output`.

Una búsqueda que X no puede ejecutar cuenta como fallo. X muestra "Algo salió
mal" para esa búsqueda. La ejecución la detiene de inmediato, sin reintentos.
Los Me gusta que X oculta también cuentan como fallos & se detienen de
inmediato. X solo le muestra a su autor quién dio Me gusta a un post. Solo le
muestra a una cuenta los posts a los que esa cuenta dio Me gusta.

Cuando todos los fallos son de objetivos no disponibles, los diagnósticos
definen `retryable: false`. Revisa las URLs o los nombres de usuario de los
objetivos & elige cuentas públicas disponibles. Acota una búsqueda que X no
puede ejecutar o cambia sus filtros. Lee cuentas que hicieron repost, respuestas
o posts en lugar de Me gusta ocultos. Los demás fallos conservan las
indicaciones para reintentar los objetivos sin terminar.

El diagnóstico nombra esos objetivos en `unavailableTargets`. Cada elemento
tiene el `target` tal como lo escribiste, un `reason` & un `nextAction`. El
motivo es `not_found`, `list_not_found`, `suspended`, `protected`,
`search_unavailable` o `likes_hidden`. `list_not_found` marca una Lista que X no
encontró, que puede ser privada. Un elemento de búsqueda también puede tener un
`fix`, como el operador que debes quitar. La lista guarda hasta 100 elementos.
Quita esos objetivos de tu entrada.

### Límites de seguridad & de tiempo

`completionReason: "pagination_safety_limit"` no es un fallo de lectura. La
ejecución conservó sus filas válidas. Después terminó un objetivo que dejó de
devolver resultados nuevos. La ejecución informa una extracción incompleta.
`failedSubtargets` queda en `0`. Solo pagas las filas entregadas.

El tiempo límite predeterminado de Apify es `0`, así que las ejecuciones no
tienen límite de tiempo. El Actor sigue hasta alcanzar tu tope o hasta agotar
los datos elegibles. Aun así, puedes definir un tiempo límite finito en Apify.
En ese caso, `completionReason: "deadline_reached"` significa que ese límite
está cerca. El Actor guarda las filas & el informe, y luego sale limpiamente
antes del límite. Pagas 1 sola vez por cada fila entregada.

## Entrada

La pestaña Input enumera todas las opciones. Indica al menos uno de `startUrls`,
`twitterHandles`, `listIds`, `tweetIds`, `searchTerms` o `twitterContent`. Sus
alias documentados también funcionan. Todos los demás campos son opcionales.

Cada una de estas opciones basta para una ejecución.

- Pega una URL de post en Start URLs.
- Pega una URL de perfil, o agrega el nombre de usuario en X handles.
- Usa `from:user since:YYYY-MM-DD until:YYYY-MM-DD` como término de búsqueda
  para recuperar el historial de una cuenta.
- Pega una URL de Lista en Start URLs.
- Combina `twitterContent` con filtros como `from:`, `since:`, `min_faves:` &
  `filter:media` para búsquedas avanzadas.

### Principales operadores de búsqueda compatibles

| Operador                 | Ejemplo                   | Uso                                                  |
| ------------------------ | ------------------------- | ---------------------------------------------------- |
| `from:`                  | `from:elonmusk`           | Solo posts de este usuario                           |
| `to:`                    | `to:OpenAI`               | Solo respuestas a este usuario                       |
| `@`                      | `@nasa`                   | Menciones de este usuario                            |
| `list:`                  | `list:123456`             | Posts de los miembros de la Lista                    |
| `lang:`                  | `lang:en`                 | Filtra por idioma                                    |
| `since:` / `until:`      | `since:2026-01-01`        | Rango de fechas                                      |
| `min_faves:`             | `min_faves:100`           | Umbral de interacción                                |
| `min_retweets:`          | `min_retweets:50`         | Umbral de reposts                                    |
| `filter:media`           | `filter:media`            | Operador de búsqueda de X para contenido multimedia  |
| `filter:videos`          | `filter:videos`           | Operador de búsqueda de X para videos                |
| `filter:images`          | `filter:images`           | Operador de búsqueda de X para imágenes              |
| `filter:links`           | `filter:links`            | Solo posts con enlaces                               |
| `filter:replies`         | `filter:replies`          | Solo respuestas                                      |
| `filter:quote`           | `filter:quote`            | Solo citas                                           |
| `filter:blue_verified`   | `filter:blue_verified`    | Solo usuarios Premium                                |
| `-filter:replies`        | `-filter:replies`         | Sin respuestas                                       |
| `-filter:nativeretweets` | `-filter:nativeretweets`  | Sin reposts                                          |
| `-filter:quote`          | `-filter:quote`           | Sin citas                                            |
| `OR`                     | `(from:nasa OR from:esa)` | Posts que coinciden con cualquiera de los 2 términos |
| `#`                      | `#bitcoin lang:en`        | Posts con este hashtag                               |

X ya no busca con `filter:vine`, `filter:consumer_video`, `filter:pro_video`,
`filter:news` ni `retweets_of:`. Una búsqueda con alguno de ellos termina de
inmediato. Un diagnóstico gratuito indica cómo corregirla. Mantén cada consulta
en 512 caracteres o menos. X no busca consultas más largas.

Las ventanas de fechas incluyen el límite inferior & excluyen el superior. El
Actor revisa ambos límites antes de agregar o cobrar cada post.

Para ver la lista completa de operadores, consulta los
[operadores de búsqueda avanzada de Twitter](https://github.com/Xquik-dev/x-twitter-advanced-search)
de Xquik.

### Migra desde otro Actor de posts

Pega la entrada que ya usas. X Tweet Scraper de Xquik lee los nombres de campo
que usan otros Actores de posts. Los asigna a sus propios campos. Los nombres
canónicos siguen siendo el valor documentado predeterminado. Un alias nunca
descarta un campo & nunca cambia lo que pagas. El formulario de entrada solo
muestra los campos canónicos, así que sigue siendo corto. Los alias funcionan en
entradas JSON, API, SDK, automatizaciones & tareas guardadas.

Cada línea nombra los campos que ya usas y, luego, el campo al que se asignan.

- `startUrls`, `urls`, `tweetUrls`, `postUrls`, `profileUrls`, `accountUrls` se
  asignan a `startUrls`.
- `profileUrl`, como una sola cadena, se asigna a `startUrls`.
- `tweetIds`, `tweetIDs`, `tweets`, `postIds`, `lookupPostIds`, `tweet_ids`, o
  `tweetId` como una sola cadena se asignan a `tweetIds`.
- `twitterHandles`, `usernames`, `user_names`, `userNameList`, `handles`,
  `screenNames`, `profileTweets` se asignan a `twitterHandles`.
- `username`, `handle`, `screenName`, como una sola cadena, se asignan a
  `twitterHandles`.
- `searchTerms`, `searchQueries`, `queries`, `search`, como lista o con una
  búsqueda por línea, se asignan a `searchTerms`.
- `twitterContent`, `query`, `searchQuery` se asignan a `twitterContent`.
- `maxItems`, `maxResults`, `max_results`, `resultsLimit`, `count`,
  `resultsCount`, `numberOfTweets`, `maxPosts`, `max_posts`, `max_items`,
  `maxTweets`, `tweetsDesired`, `maxTotalTweets` se asignan a `maxItems`.
- `per_profile_limit` se asigna a `maxItemsPerTarget`.
- `sort` se asigna a `queryType`.
- `search_type`, `searchType`, `query_type`, `search_sort` se asignan a
  `queryType` para `Top` & `Latest`, con mayúsculas o minúsculas. `Media`,
  `Photos` & `Videos` activan `filter:media`, `filter:images` & `filter:videos`.
- `tweetLanguage`, `language`, `contentLanguage` se asignan a `lang`.
- `author`, `fromUser` se asignan a `from`.
- `inReplyTo`, `toUser` se asignan a `to`.
- `mentioning` se asigna a `@`.
- `start`, `startDate`, `timeSince` se asignan a `since`.
- `end`, `endDate`, `timeUntil` se asignan a `until`.
- `timeSinceUnix`, `sinceTime`, `timeUntilUnix`, `untilTime`, en segundos, se
  asignan a `since_time`, `until_time`.
- `timeWithinTime`, `withinTime` se asignan a `within_time`.
- `timeWindowHours`, `timeWindow` se asignan a `within_time`, en horas & en
  días.
- `timeSinceId`, `sinceId`, `timeMaxId`, `maxId` se asignan a `since_id`,
  `max_id`.
- `quickDateRange` de Google Search Scraper, como `d7`, `w2`, `m1` o `y`, se
  asigna a `since_time`, contado hacia atrás desde el inicio de la ejecución.
- `minimumFavorites`, `minLikes`, `min_likes`, `minFaves`, `engagementMinLikes`,
  `Minimum_likes` se asignan a `min_faves`.
- `minimumRetweets`, `minRetweets`, `engagementMinRetweets` se asignan a
  `min_retweets`.
- `minimumReplies`, `minReplies`, `engagementMinReplies`, `Minimum_replies` se
  asignan a `min_replies`.
- `engagementMaxLikes`, `maxLikes`, `engagementMaxRetweets`, `maxRetweets`,
  `engagementMaxReplies` se asignan a `engagement.maxLikes`,
  `engagement.maxRetweets`, `engagement.maxReplies`.
- `onlyImage`, `onlyImages`, `has_images` se asignan a `filter:images`.
- `onlyVideo`, `onlyVideos`, `has_videos` se asignan a `filter:videos`.
- `onlyWithMedia`, `mediaOnly` se asignan a `filter:media`.
- `onlyQuote`, `onlyQuotes` se asignan a `filter:quote`.
- `onlyTwitterBlue`, `usersBlueVerifiedOnly`, `blue_verified_only`,
  `onlyBlueVerified` se asignan a `filter:blue_verified`.
- `engagementHasEngagement`, `hasEngagement` se asignan a
  `filter:has_engagement`.
- `mediaHasLinks`, `has_links`, `requireLinks` se asignan a `filter:links`.
- `mediaHasMentions`, `has_mentions`, `requireMentions` se asignan a
  `filter:mentions`.
- `mediaHasHashtags`, `has_hashtags`, `requireHashtags` se asignan a
  `filter:hashtags`.
- `mediaNewsOnly`, `mediaSafeContentOnly` se asignan a `filter:news`,
  `filter:safe`.
- `mediaTypes`, con 1 tipo, se asigna al campo `filter:` de ese tipo.
- `mediaSubtype` se asigna a `filter:media`, `filter:images` o `filter:videos`.
- `includeNativeRetweets`, `includeRetweets` se asignan a
  `include:nativeretweets`.
- `excludeReplies`, `excludeRetweets`, `includeRetweets` en false,
  `tweetTypesExclude` se asignan a `tweetTypes.excludeReplies`,
  `tweetTypes.excludeRetweets` & `tweetTypes.excludeQuotes`.
- `tweetTypes` como lista con 1 tipo se asigna a `tweetTypes.replies`,
  `tweetTypes.quotes` o `tweetTypes.nativeRetweets`.
- `tweetSubtype` se asigna a `tweetTypes.replies` o `tweetTypes.quotes`.
  `self_threads` agrega el operador `filter:self_threads`.
- `geotaggedNear`, `geoNear` se asignan a `near`.
- `withinRadius`, `geoWithinRadius`, `geoWithin` se asignan a `within`.
- `geoGeocode` se asigna a `geocode`.
- `tweetConversationId`, `tweetQuotedTweetId`, `tweetQuotedUserId` se asignan a
  `conversation_id`, `quoted_tweet_id`, `quoted_user_id`.
- `cardName`, `tweetPollTypes` se asignan a `card_name`.
- `search_query` se asigna a `twitterContent`.
- `profile_urls` se asigna a `startUrls` para enlaces y a `twitterHandles` para
  nombres de usuario.
- `lookup_post_ids`, o `id` como una sola cadena se asignan a `tweetIds`.
- `tweets` como 1 lista separada por comas se asigna a `tweetIds`.

Algunos campos no tienen un campo de destino aquí. Cada uno agrega a todas las
búsquedas de la ejecución el operador de búsqueda de X que representa. El
registro de la ejecución enumera al inicio los operadores que agregó.

- `usersFromUsers`, `from_users`, `usersToUsers`, `to_users`, `usersListMembers`
  agregan `from:`, `to:` & `list:`. Varios valores se ejecutan como
  alternativas, como `(from:a OR from:b)`.
- `usersMentionUsers`, `mentioning_users` agregan `@name`.
- `usersExcludeFromUsers` agrega `-from:`.
- `onlyVerifiedUsers`, `usersVerifiedOnly`, `verified_only` agregan
  `filter:verified`.
- `placeObjectId`, `geoPlaceId`, `placeId`, `place` agregan `place:`.
- `cardDomain` agrega `card_domain:`.
- `appsSources`, `appsExcludeSources` agregan `source:` & `-source:`.
- `contentKeywords`, `contentExactPhrases`, `contentHashtags`,
  `contentCashtags`, cada uno con 1 valor, agregan la palabra, la frase entre
  comillas, `#tag` & `$tag`.
- `contentExcludeKeywords`, `contentExcludeHashtags`, `exclude_words`,
  `hashtags_exclude` agregan `-word` & `-#tag`.
- Con `all_words` & `exact_phrases`, todas las palabras & frases deben
  coincidir.
- `any_words`, `hashtags_any` agregan alternativas, como `(#a OR #b)`.
- `contentQuestionMarks` agrega `?`.
- `contentEmoticons` agrega `:)` para `positive` y `:(` para `negative`.
- `tweet_type` agrega `filter:replies`, `filter:retweets` & sus formas
  `-filter:`.

Los modos escritos con palabras se asignan a `mode`. `Advanced Search` se asigna
a `search`, `Get Tweet by ID` a `tweet`, `Get a Few Tweets` a `tweets`,
`Get Replies` a `replies`, `Get Quotes` a `quotes`, `Get Retweeters` a
`retweeters` & `Get Favoriters` a `favoriters`.

Una entrada pegada se comporta así.

- Todas las fuentes se ejecutan. Una entrada con URLs, nombres de usuario,
  términos de búsqueda, IDs de Listas & IDs de posts las ejecuta todas.
  `maxItems` se aplica a toda la ejecución.
- Una consulta de búsqueda junto a `searchTerms` se ejecuta como 1 término más.
- Una URL de perfil escrita como `x.com/@name` se lee igual que `x.com/name`.
- Si defines un alias & su campo canónico, gana el valor canónico. El registro
  de la ejecución nombra el alias que perdió.
- El registro de la ejecución nombra cada campo que el Actor ignora, como
  `customMapFunction`. El Actor nunca descarta un campo en silencio.
- Un tope de filas debe ser un número entero de 1 o más. `maxResults: 0` detiene
  la ejecución antes de que lea o cobre nada.
- `quickDateRange: "m1"` lee el último mes en todas las rutas. Los meses & los
  años se cuentan hacia atrás en el calendario. Sin la unidad h, d, w, m o y, la
  ejecución se detiene antes de leer o cobrar.
- El Actor no tiene unidad de página. Reemplaza `maxPages` por `maxItems`.
- El Actor no tiene campo `userId` ni `user_ids`. Pon el ID de usuario donde
  iría el nombre de usuario. Funciona en `twitterHandles`, en URLs de perfil &
  después de `from:`.
- Los campos de operadores de búsqueda como `from`, `min_faves`, `since_time` &
  `filter:images` ya usan los nombres de X. No necesitan asignación.
- Una lista que otro Actor no define como todos o cualquiera de sus valores se
  ejecuta con 1 valor. Estas listas son `contentKeywords`,
  `contentExactPhrases`, `contentHashtags`, `contentCashtags`,
  `usersMentionUsers`, `mediaTypes` & `tweetTypes`. Con más valores, la
  ejecución se detiene antes de leer o cobrar. Su mensaje indica cómo
  escribirlos como 1 término de búsqueda.
- `search_type` en `People` o `Lists`, `source_mode` en `followers`, un
  preajuste de `engagementLevel` & el modo `Get Similar Tweets` detienen la
  ejecución antes de leer o cobrar. El mensaje nombra el Actor o el campo que
  debes usar.
- `category` en `tweets` o `info` no cambia nada. La tarea de otro Actor, como
  `followers`, `user_info` o `replies`, detiene la ejecución. No lee & no cobra
  nada. El mensaje nombra ese Actor.

### Entrada en Console & API

El formulario de Console tiene estos controles.

- Mode, Output Variant, Field Style, Output Preset & Sort By son menús
  desplegables validados.
- Start URLs & Profile URLs aceptan cadenas u objetos `{ "url": "..." }`. Sus
  editores JSON conservan ambos formatos de la API.
- Los filtros estructurados ofrecen controles agrupados, así que no necesitas
  JSON anidado.
- El formulario oculta los operadores planos que ya cubre un grupo de filtros.
  Las entradas JSON, API, SDK, automatizaciones & tareas guardadas los siguen
  aceptando.
- Max Items & Max Items Per Target aceptan números enteros de 1 o más. Los
  umbrales de interacción aceptan números enteros de 0 o más.

Usa los campos canónicos en integraciones nuevas. Los alias de la tabla de
migración de arriba siguen disponibles. `includeRaw` es un alias de
`outputVariant: "raw"`. Los valores antiguos de `outputVariant`, como `compact`
& `full`, siguen funcionando como salida Legacy. El formulario los marca como
alias Legacy.

## Salida

Cada fila de post es un objeto JSON con los metadatos que X ofrece. Los esquemas
del dataset & de run-report dan a cada campo un título, una descripción & un
ejemplo. Los agentes de IA pueden leerlos sin adivinar qué significa un campo.

Los valores de muestra son ilustrativos. Tus ejecuciones devuelven datos en vivo
de X.

```json
{
  "id": "20",
  "text": "just setting up my twttr",
  "createdAt": "Tue Mar 21 20:50:14 +0000 2006",
  "retweetCount": 500,
  "replyCount": 120,
  "likeCount": 5000,
  "quoteCount": 80,
  "viewCount": 1200000,
  "bookmarkCount": 300,
  "lang": "en",
  "url": "https://x.com/jack/status/20",
  "author": {
    "id": "12",
    "username": "jack",
    "name": "jack",
    "followers": 6000000,
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
  "conversationId": "20"
}
```

Exporta el dataset en JSON, CSV, Excel o HTML.

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

- Usa un punto para un campo dentro de un objeto, como `author.id`. Las
  mayúsculas & los guiones bajos no importan.
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
- Define `queryType: "Latest + Top"` para usar ambos modos de búsqueda de X en
  una sola ejecución. La eliminación de duplicados & los topes de resultados se
  aplican a ambos.
- Usa los monitores de cuentas o de palabras clave de Xquik para revisiones de 1
  segundo & webhooks firmados. Los monitores activos revisan cada segundo.

### Usa siempre la compilación más reciente

Selecciona `latest` en cada ejecución para recibir todas las correcciones
publicadas.

Si no eliges una compilación, Apify ejecuta X Tweet Scraper de Xquik con su
valor predeterminado `latest`. Las ejecuciones desde Console & los ejemplos
estándar de la API heredan ese valor predeterminado.

Las tareas guardadas pueden reemplazar el valor predeterminado del Actor. Las
programaciones & las integraciones de tareas reutilizan esa elección. Deja cada
reemplazo en `latest`.

Apify no redirige los números de compilación exactos a `latest`. Reemplaza los
números fijados por `latest`. Usa una compilación exacta solo para volver atrás
de forma temporal o para reproducir una ejecución.

Lee las
[etiquetas de compilación](https://docs.apify.com/platform/actors/development/builds-and-runs/builds),
las
[opciones de ejecución](https://docs.apify.com/platform/actors/running/runs-and-builds)
& la
[documentación de tareas](https://docs.apify.com/platform/actors/running/tasks)
de Apify.

## Actores de Xquik relacionados

Todos los Actores de Xquik comparten el mismo motor de extracción, el cobro
después de filtrar & los diagnósticos. Elige el que se ajuste a los datos que
necesitas.

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

### ¿Necesito una clave de API de X?

No. No necesitas clave de API de X, inicio de sesión ni credenciales.

### ¿Qué limita una ejecución?

Tu límite de ítems & tu límite de gasto en Apify detienen la ejecución. Los
límites de tu cuenta & de la plataforma de Apify siguen vigentes.

### ¿Qué tan rápido es?

X Tweet Scraper de Xquik entregó de 25.2 a 39.2 posts útiles por segundo en la
[prueba comparativa](#prueba-comparativa). El tiempo de ejecución depende de tu
entrada, la cantidad de resultados & la disponibilidad de X.

### ¿Las búsquedas devuelven todos los posts que coinciden?

Sí, hasta que se acaban las coincidencias o llegas a `maxItems`. Los resultados
solo traen posts que coinciden con tu consulta. Pagas cada post 1 sola vez.

### ¿Qué operadores de búsqueda funcionan?

La búsqueda avanzada de X admite autores, destinatarios, menciones, fechas,
interacción, contenido multimedia & ubicación. Consulta
[Principales operadores de búsqueda compatibles](#principales-operadores-de-búsqueda-compatibles)
para ver ejemplos.

### ¿Puedo usar la API de Apify para ejecutarlo?

Sí. Consulta la [pestaña API](https://apify.com/xquik/x-tweet-scraper/api) para
ver ejemplos en Python, JavaScript & cURL.

### ¿Puedo programar extracciones recurrentes?

Sí. Usa la [programación](https://docs.apify.com/platform/schedules) integrada
de Apify para ejecutar X Tweet Scraper de Xquik con un cron.

### ¿Puedo obtener una solución a medida?

Sí. Describe lo que necesitas en la
[pestaña Issues](https://apify.com/xquik/x-tweet-scraper/issues). Xquik también
ofrece un panel, una API REST, un servidor MCP & webhooks. Encuentra el sitio
web de Xquik en su [perfil de Apify](https://apify.com/xquik).

### ¿Es legal extraer datos de X?

X Tweet Scraper de Xquik solicita campos públicos de X. Los resultados pueden
contener datos personales. Confirma que tu propósito es lícito & cumple las
normas de privacidad que te aplican. Si tienes dudas, consulta a un abogado
calificado.

### ¿Dónde consigo ayuda?

Abre un issue en la
[pestaña Issues](https://apify.com/xquik/x-tweet-scraper/issues) con el ID de la
ejecución.
