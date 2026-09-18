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
<a href="https://youtu.be/4UOSpoOoC3Y?t=367"><img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" width="720" alt="Framer conecta Xquik MCP con agentes de código"></a><br>
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">Mira cómo Framer usa los extractores de Xquik con Claude Code, Codex, Cursor y más, desde el minuto 6:07.</a>
</td></tr></table>

Xquik es el servicio de extracción de X (Twitter) más rápido y económico del
mundo, con los datos de X más completos, y X Tweet Scraper recopila tuits,
respuestas, perfiles, listas y búsquedas con más de 50 filtros. Cualquier otro
Actor de Apify cobra antes de filtrar o eliminar duplicados. Xquik cobra solo
por resultados entregados, únicos y que coinciden con los filtros.

Extrae tuits públicos de X (Twitter) **desde $0.00015 por resultado entregado
en cualquier plan de Apify**. Apify factura el uso de la plataforma por
separado. Sin inicio de sesión en X, sin tarifa de inicio ni de consulta.
Creado por [Xquik](https://xquik.com).

> Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
> "Twitter" y "X" son marcas registradas de X Corp.

## ¿Qué hace X Tweet Scraper?

X Tweet Scraper devuelve tuits, métricas de interacción, perfiles públicos de
autores y contenido multimedia. Acepta URLs, nombres de usuario, IDs de Lista,
IDs de tuits y consultas de búsqueda con más de 50 filtros.

### Comportamiento principal

- Los filtros y la eliminación de duplicados se ejecutan antes de facturar.
- Una sola entrada admite búsquedas directas, líneas de tiempo, Listas,
  búsqueda e interacción.
- Las entradas de ID de tuit no tienen un límite de conteo fijo. Se aplican
  la configuración de gasto y tiempo de espera de Apify.
- Las páginas automáticas de búsqueda y citas solicitan hasta 300 filas.
- Los cursores guardados conservan sus límites de página originales y
  reinician cuando vencen.
- Los modos de perfil combinan línea de tiempo y búsqueda de autor cuando
  ambos aplican.
- Los registros de página incluyen `fetchDurationMs`, `processingDurationMs`,
  `pushDurationMs`, `statusDurationMs` y `fullPageDurationMs` sin repetir
  objetivos.
- Los puntos de control conservan las filas aceptadas, los tiempos y los
  conteos de fallos tras un reinicio.

### Usa siempre la compilación más reciente

Selecciona `latest` en cada ejecución para recibir todas las correcciones
publicadas.

Cuando no se especifica una compilación, Apify usa el valor `latest` por
defecto de este Actor. Las ejecuciones desde Console y los ejemplos estándar
de la API heredan ese valor.

Las tareas guardadas pueden anular el valor predeterminado del Actor. Los
Schedules y las integraciones de Tasks reutilizan esa elección. Mantén cada
anulación fijada en `latest`.

Apify no redirige números de compilación exactos a `latest`. Reemplaza los
números fijados por `latest`. Usa una compilación exacta solo para una
reversión temporal o para reproducibilidad.

Lee sobre las [etiquetas de compilación](https://docs.apify.com/platform/actors/development/builds-and-runs/builds),
las [opciones de ejecución](https://docs.apify.com/platform/actors/running/runs-and-builds)
y la [documentación de tareas](https://docs.apify.com/platform/actors/running/tasks)
de Apify.

## Ejemplos de tareas

Elige entre 50 tareas públicas. Cada una tiene una entrada acotada y una vista
de Dataset correspondiente. Cada tarea comienza con una búsqueda u objetivo
real. Edítala antes de ejecutar.

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
- [Collect Spanish AI conversations](https://apify.com/xquik/x-tweet-scraper/examples/collect-spanish-ai-conversations)

### ¿Qué datos puede extraer X Tweet Scraper?

| Campo                  | Descripción                                                     |
| ---------------------- | ---------------------------------------------------------------- |
| `id`                   | ID del tuit                                                       |
| `text`                 | Texto completo del tuit (incluye Note Tweets de hasta 25 000 caracteres) |
| `createdAt`            | Cadena de fecha y hora nativa de X                                |
| `likeCount`            | Número de me gusta                                                |
| `retweetCount`         | Número de retuits                                                 |
| `replyCount`           | Número de respuestas                                              |
| `quoteCount`           | Número de tuits cita                                              |
| `viewCount`            | Número de vistas                                                  |
| `bookmarkCount`        | Número de marcadores                                              |
| `lang`                 | Idioma del tuit                                                   |
| `url`                  | Enlace directo al tuit                                            |
| `tweetUrl`             | Alias de URL del tuit en la salida plana                          |
| `twitterUrl`           | URL con formato twitter.com en la salida plana                    |
| `author`               | Campos disponibles del autor (nombre de usuario, biografía, sitio web, conteos) |
| `authorUsername`       | Nombre de usuario del autor en la salida plana                    |
| `authorFollowers`      | Conteo de seguidores del autor en la salida plana                 |
| `authorUrl`            | Sitio web del autor cuando está disponible, en la salida plana    |
| `authorDescription`    | Texto de biografía del autor en la salida plana                   |
| `authorCoverPicture`   | URL de la imagen de portada del autor en la salida plana          |
| `authorPinnedTweetIds` | IDs de tuits fijados del autor en la salida plana                 |
| `media`                | Imágenes, videos y GIFs adjuntos                                  |
| `mediaUrls`            | URLs de contenido multimedia en la salida plana                   |
| `imageUrls`            | URLs de imágenes en la salida plana                                |
| `videoUrls`            | URLs de videos en la salida plana                                  |
| `entities`             | Hashtags, URLs, menciones y marcas de tiempo de video              |
| `displayTextRange`     | Rango de texto visible de X cuando está disponible                 |
| `contentDisclosure`    | Metadatos de divulgación cuando están disponibles                  |
| `conversationControl`  | Política de respuesta y propietario público de la conversación     |
| `reactionContext`      | Publicación pública y usuario referenciado por una reacción        |
| `limitedActions`       | Restricciones y mensajes públicos de interacción                   |
| `isLimitedReply`       | Si las respuestas están limitadas                                  |
| `isNoteTweet`          | Si es un Note Tweet (publicación larga)                            |
| `isQuoteStatus`        | Si este tuit cita otro tuit                                        |
| `isReply`              | Si este tuit es una respuesta                                      |
| `quoted_tweet`         | Objeto del tuit citado (si es un tuit cita)                        |
| `conversationId`       | ID del hilo o conversación                                         |
| `resultType`           | Tipo de fila para filas completas, filas de interacción y diagnósticos |
| `sourceTweetId`        | ID del tuit de origen para modos de artículo e interacción          |
| `article`              | Datos estructurados del artículo en `mode: "article"`               |

Los metadatos opcionales del tuit pueden incluir `card`, `communityId`,
`communityNote`, `edit`, `noteTweet` y `postCta`. `isTranslatable`, `place`,
`possiblySensitive` y `viewState` conservan otro contexto público.
`previousCounts` conserva la interacción previa a la edición. `tombstone`
conserva avisos. `unmentionedUserIds` enumera usuarios que dejaron la
conversación. Consulta el OpenAPI para los campos exactos.

Los autores anidados siguen el contrato de perfil público. Cubre identidad,
conteos, verificación, disponibilidad, datos profesionales y biografías de
perfil.

Las filas de tuit también conservan `type`, `source`, `inReplyToId`,
`inReplyToUserId`, `inReplyToUsername` y `retweeted_tweet`. Los tuits citados
y republicados conservan los mismos campos seguros compatibles de forma
recursiva.

El contenido multimedia incluye disponibilidad, geometría, etiquetas,
variantes de video, `watchNowUrl` y acciones `visitSiteUrl`.

El estado relativo al visor pertenece a la cuenta de extracción de Xquik, no a
tu conjunto de datos. Las marcas de seguir, bloquear, silenciar, marcador, me
gusta, repostear, permiso de edición y similares siempre se eliminan, incluso
de la salida sin procesar.

## ¿Cuánto cuesta extraer tuits?

Todos los planes de Apify cuestan `$0.00015` por fila entregada. Apify factura
el uso de tu plataforma por separado. Xquik aplica un cobro por cada fila de
datos entregada. Los diagnósticos son gratuitos en la salida `diagnostics`.

No se aplica ninguna suscripción de Xquik. No se aplica ninguna tarifa
separada de inicio ni de consulta. Cada ejecución también escribe un registro
`run-report` con `estimatedChargeUsd` calculado a partir del precio de pago
por evento en vivo que Apify expone al Actor. Cada resultado escribe
`run-report`, incluidas las salidas sin entrada o con entrada inválida. Los
informes de ejecución separan las filas de datos en `realRows` y los
diagnósticos en `diagnosticRows`.

Comprende los resultados vacíos antes de gastar en otra ejecución. El objeto
`filtering` separa `serverFilteredRows` de `actorFilteredRows` en los informes
y diagnósticos finales. Estos cuentan filas rechazadas en las páginas
procesadas, incluidas las filas de origen repetidas.
`pagesWithUnknownServerFiltering` identifica páginas sin conteos válidos del
servidor. Los conteos faltantes permanecen como vacíos. Las filas filtradas
nunca generan cargos de resultado.

El agotamiento de la fuente puede completar la extracción por debajo de tu
límite solicitado. Estas ejecuciones reportan `outcome: "complete"` con
`completionReason: "source_exhausted"`. Las ejecuciones interrumpidas
conservan su resultado parcial y las indicaciones de reintento.

`failedSubtargets` cuenta consultas y objetivos de perfil detenidos por fallos
de lectura. La paginación y los fallos de pago conservan filas parciales y
cursores sin terminar. Nunca implican que el objetivo esté ausente. Las filas
aceptadas siguen siendo filas de datos y cuentan para la facturación. Estas
ejecuciones usan `completionReason: "partial_failure"`. La paginación rápida
del lado del servidor sigue el mismo contrato de reporte.

La extracción interrumpida también escribe un diagnóstico gratuito de
`partial`. Los resultados disponibles permanecen intactos. El diagnóstico
reporta `availableResults`, `failedTargets`, `retryable` y `nextAction`. Una
salida exitosa del Actor confirma la entrega, no la extracción completa.

Los objetivos protegidos o faltantes cuentan como fallos, incluidas las
ejecuciones con resultados válidos. Cuando todos los fallos se refieren a
objetivos no disponibles, los diagnósticos establecen `retryable: false`.
Verifica las URLs o nombres de usuario del objetivo y elige cuentas públicas
disponibles. Otros fallos conservan indicaciones de reintento para los
objetivos sin terminar.

`completionReason: "pagination_safety_limit"` no es un fallo de lectura.
Significa que la paginación conservó filas válidas y luego alcanzó su límite
de seguridad acotado. Las búsquedas Latest continúan a través de páginas
vacías mientras queden cursores de recuperación válidos. Las búsquedas Top y
la recuperación por ventana de cuenta pueden establecer un punto de control
tras 10 páginas vacías consecutivas. Las búsquedas también establecen un punto
de control cuando el servicio reporta paginación estancada. Los
estancamientos detienen los reintentos automáticos sin reiniciar la búsqueda.
Estas ejecuciones reportan extracción incompleta y conservan cursores
reanudables. Una página terminal completa la paginación incluso después de
páginas vacías consecutivas. `failedSubtargets` permanece en `0`. Solo se
facturan las filas de Dataset aceptadas.

El tiempo de espera predeterminado de Apify es `0`, así que las ejecuciones no
tienen límite de tiempo. El Actor continúa hasta alcanzar el tope o agotar los
datos elegibles. Quien invoca aún puede establecer un tiempo de espera finito
de Apify. Entonces `completionReason: "deadline_reached"` significa que ese
límite configurado está cerca. El Actor reserva los últimos 15 segundos para
puntos de control, filas, informes y una salida exitosa. Las filas válidas se
entregan y se facturan una sola vez. La paginación sin terminar permanece
reanudable.

- Los inicios, consultas, URLs y búsquedas de un solo tuit no agregan una
  tarifa separada.
- El Actor elimina duplicados antes de escribir o facturar filas.
- Las ejecuciones sin entrada, con entrada inválida o sin salida escriben 1
  registro accionable en la salida gratuita `diagnostics`.

## ¿Cómo uso X Tweet Scraper para extraer datos de tuits?

### 1. Pega URLs directamente

Pega una mezcla de URLs de tuits, perfiles, búsquedas o listas:

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

Las URLs de tuits se buscan en lotes concurrentes de hasta 100. Las respuestas
parcialmente exitosas vuelven a verificar los IDs no resueltos una vez. La
salida de cada lote permanece única y coincide con los IDs solicitados. Las
URLs de perfil combinan la línea de tiempo del perfil con la búsqueda de
autor. Las URLs de búsqueda extraen la consulta. Las URLs de lista usan la
ruta dedicada de lista en lugar de la búsqueda genérica `list:`. `maxItems`
limita los resultados en todas las URLs pegadas.

### 2. Nombres de usuario en lote

Atajo para muchas búsquedas de `from:nombredeusuario`:

```json
{ "twitterHandles": ["elonmusk", "nasa", "openai"], "maxItems": 100 }
```

Cada nombre de usuario combina la paginación por cursor con la búsqueda de
autor. El Actor elimina las filas duplicadas antes de la salida y la
facturación. Los nombres de usuario aceptan un prefijo `@` opcional.

### 3. Buscar tuits

Configura el campo **Search Terms** con una o más consultas:

```json
{
  "searchTerms": ["from:elonmusk AI", "#bitcoin lang:en"],
  "maxItems": 1000,
  "queryType": "Latest"
}
```

Si `mode` es `tweet` o `tweets` sin IDs de tuit, la entrada de consulta se
dirige a Search. Esto evita que un `searchTerms` válido devuelva una búsqueda
directa vacía.

Los rellenos simples de cuenta con ventanas de fecha, como
`from:elonmusk since:2026-01-01 until:2026-01-02`, usan una ruta de cuenta
acotada. Las ventanas recientes combinan la línea de tiempo del perfil con la
búsqueda de autor. Las ventanas históricas usan búsqueda exacta. Las ventanas
adyacentes compatibles comparten una sola recuperación y conservan su
atribución original de `searchTerm`. `maxItems` limita los resultados en todos
los términos de búsqueda. Todas las ventanas `since:`/`until:` y de tiempo
Unix verifican cada tuit devuelto. Las ventanas de cuenta filtradas leen
páginas de origen completas antes de aplicar el tope de salida. Las páginas
filtradas continúan hasta que hay tuits coincidentes o termina la paginación.
Los términos de búsqueda independientes se ejecutan de forma simultánea. Cada
término conserva paginación por cursor ordenada para una profundidad y
atribución consistentes. Las ventanas de cuenta comparten una sola
recuperación solo cuando son compatibles.

### 4. Buscar tuits por ID

```json
{ "tweetIds": ["1846987139428634858", "1858743654778892784"], "maxItems": 100 }
```

El Actor procesa 100 IDs por solicitud. Ejecuta los lotes de forma simultánea
y escribe cada grupo completado una sola vez. Las respuestas parciales solo
vuelven a verificar los IDs no resueltos. Los resultados conservan el orden de
entrada, eliminan duplicados y excluyen tuits no solicitados.

Los alias aceptados para la misma búsqueda incluyen `tweetId`, `tweetIDs`,
`tweets`, `postIds`, `lookupPostIds`, `tweetUrls` y `postUrls`.

### 5. Modos explícitos de interacción, hilo y artículo

Usa `mode` cuando quieras una sola ruta, sin importar otros campos de entrada:

```json
{ "mode": "replies", "replyTweetIds": ["1846987139428634858"], "maxItems": 100 }
```

Modos explícitos admitidos: `tweet`, `tweets`, `search`, `profileTweets`,
`profileReplies`, `profileMedia`, `profileLikes`, `listTweets`, `article`,
`replies`, `quotes`, `thread`, `retweeters` y `favoriters`.

`profileTweets` sigue la pestaña Posts del perfil. Devuelve publicaciones que
no son respuestas escritas por el objetivo. Las filas de respuesta y el
contexto de conversación de otros autores se excluyen antes de facturar.

`profileReplies` sigue la pestaña With Replies de X. Devuelve publicaciones y
respuestas del perfil escritas por el objetivo. El contexto de conversación de
otros autores se excluye. Usa `filter:replies` o la búsqueda `to:` cuando
necesites resultados solo de respuestas.

Los modos de búsqueda y de tuit paginado admiten `time.since`, `time.until`,
marcas de tiempo Unix y `lang`. Esto incluye Posts de perfil, With Replies,
Media, Likes, Listas, respuestas, citas e hilos. Los operadores de fecha plana
correspondientes también funcionan. El Actor verifica cada fila antes de
facturar. El límite inferior de fecha es inclusivo; el límite superior es
exclusivo. Los filtros de fecha excluyen filas sin fechas utilizables. Los
filtros de idioma excluyen idiomas faltantes o no coincidentes. Las filas
filtradas nunca consumen tu límite de resultados solicitado. Los resultados
sin ordenar siguen paginando cuando tuits más antiguos preceden a los
resultados coincidentes. Los filtros de tuit no aplican a listas de usuarios ni
a búsquedas directas de tuits o artículos.

`mode: "replies"` es más estricto. Combina líneas de tiempo directas, modos de
clasificación admitidos, cada módulo de cursor hacia adelante, ramas de
contenido oculto etiquetadas, particiones de tiempo escaladas al conteo de
respuestas reportado, y búsqueda. Cada fila de tuit tiene `inReplyToId` igual
al ID del tuit solicitado. Las respuestas de conversación anidadas nunca
cuentan como respuestas directas. Si X expone menos respuestas de las
reportadas, el Actor conserva las filas parciales seguras. Agrega 1 registro
`replies-incomplete` a `diagnostics` cuando queda capacidad. Alcanzar un
umbral de cobertura no significa que la extracción haya terminado. La
ejecución permanece parcial hasta tu límite o el agotamiento verificado de la
fuente. `replyCoverage` reporta conteos, estrategias, anomalías de paginación,
campos faltantes y la alternativa recomendada. El Actor respeta los retrasos
de reintento transitorios antes de devolver una salida vacía. Configura
`maxItems` según tu total solicitado, incluidos totales superiores a 25 000
para un solo objetivo de respuesta.

Las filas de artículo incluyen `resultType: "article"`, `sourceTweetId`,
`article` y `author` opcional. Las filas de usuario de interacción incluyen
`resultType: "user"`, `sourceTweetId` y `engagementMode`.

Los usuarios que retuitean siguen siendo un modo normal de interacción
pública. Quienes dan me gusta son de mejor esfuerzo: X puede exponer solo los
usuarios que dan me gusta en publicaciones elegibles o visibles para el
propietario. Los me gusta de perfil también son de mejor esfuerzo porque
muchos perfiles públicos no exponen una pestaña de Likes legible. Si X no
expone usuarios o tuits que recibieron me gusta, el Actor escribe un registro
gratuito de `diagnostics`. Los conteos de marcadores pueden aparecer en las
filas de tuit, pero X no expone las cuentas específicas que marcaron una
publicación.

### 6. Salida plana en CSV

Conserva los campos JSON anidados predeterminados, o agrega columnas
compatibles con hojas de cálculo:

```json
{ "searchTerms": ["from:nasa moon"], "maxItems": 100, "outputPreset": "flat" }
```

La salida plana conserva `author` y `media` sin cambios y también agrega
campos de nivel superior como `authorUsername`, `authorName`,
`authorFollowers`, `tweetUrl`, `twitterUrl`, `mediaUrls`, `imageUrls` y
`videoUrls`.

### 7. Elige el nombramiento de campos

Conserva los nombres de campo heredados por defecto. Elige un estilo para
datos de resultado completos o sin procesar:

```json
{
  "searchTerms": ["from:nasa moon"],
  "maxItems": 100,
  "outputVariant": "rich",
  "fieldStyle": "snake_case"
}
```

Usa `camelCase` o `snake_case` para los campos de resultado de nivel superior
y anidados. La salida plana en snake case incluye campos como
`author_username` y `media_urls`. Las instantáneas de origen seguras bajo
`raw` conservan sus claves de origen originales. Los nombres de origen en
conflicto también permanecen sin cambios para evitar pérdida de datos.

Los diagnósticos heredados usan `resultType`, `actorVersion` y
`replyCoverage`. La salida completa y sin procesar aplica `fieldStyle` de
forma recursiva. Por ejemplo, snake case usa `result_type`, `actor_version` y
`reply_coverage`. La vista de Dataset Overview funciona con cualquiera de los
dos estilos. Elige la vista de Console que coincida con el `fieldStyle` de la
ejecución. `camelCase fields` espera `camelCase`. `snake_case fields` espera
`snake_case`. Las vistas solo seleccionan columnas. Nunca renombran los datos
almacenados o exportados.

### 8. Filtros avanzados

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

Configura `queryType: "Latest + Top"` para ejecutar ambos modos de búsqueda de
X de forma simultánea. El Actor elimina duplicados antes de facturar y
completa la capacidad no usada desde cualquiera de los dos modos. `Top` está
clasificado por relevancia y no es exhaustivo. Configura
`includeSearchTerms: true` para adjuntar cada consulta coincidente como un
campo `searchTerm`. Las interrupciones de lectura transitorias breves reciben
un reintento adicional antes de que el Actor devuelva un diagnóstico.

Cuando configuras `lang`, el Actor verifica el idioma de cada tuit devuelto.
Omite las discrepancias y continúa paginando en busca de tuits coincidentes.

También puedes pasar alias compatibles con la competencia como `query`,
`searchQuery`, `urls`, `profileUrls`, `usernames`, `maxResults`,
`max_results`, `resultsLimit`, `numberOfTweets`, `maxPosts` y `max_posts`.

### Experiencia de entrada en Console y API

Console expone estos controles:

- Mode, Output Variant, Field Style, Output Preset y Sort By son listas de
  selección validadas.
- Los campos Start URLs y Profile URLs aceptan cadenas u objetos
  `{ "url": "..." }`. Sus editores JSON conservan ambos formatos de API.
- Structured Filters expone controles agrupados sin JSON anidado.
- Los grupos de filtros canónicos mantienen los operadores planos equivalentes
  fuera del formulario. Las entradas JSON, de API, SDK, automatización y
  tareas guardadas aún los aceptan.
- Max Items y Max Items Per Target aceptan números enteros de 1 o más. Los
  umbrales de interacción aceptan números enteros de 0 o más.

Usa campos canónicos en integraciones nuevas. Los alias de compatibilidad
siguen disponibles en las entradas JSON, de API, SDK, automatización y tareas.
Esto incluye `includeRaw` como alias de `outputVariant: "raw"`. Los valores
históricos de `outputVariant` como `compact` y `full` siguen siendo aceptados
y usan la salida heredada (Legacy). El formulario visual los etiqueta como
alias heredados (Legacy).

### Principales operadores de búsqueda admitidos

| Operador               | Ejemplo                | Propósito                            |
| ----------------------- | ------------------------ | -------------------------------------- |
| `from:`                | `from:elonmusk`        | Solo tuits de este usuario             |
| `to:`                  | `to:OpenAI`            | Solo respuestas a este usuario         |
| `@`                    | `@nasa`                | Tuits que mencionan a este usuario     |
| `list:`                | `list:123456`          | Tuits de miembros de la lista          |
| `lang:`                | `lang:en`              | Filtrar por idioma                     |
| `since:` / `until:`    | `since:2026-01-01`     | Rango de fechas                        |
| `min_faves:`           | `min_faves:100`        | Umbral de interacción                  |
| `min_retweets:`        | `min_retweets:50`      | Umbral de retuits                      |
| `filter:media`         | `filter:media`         | Operador de búsqueda de contenido multimedia de X |
| `filter:videos`        | `filter:videos`        | Operador de búsqueda de video de X     |
| `filter:images`        | `filter:images`        | Operador de búsqueda de imágenes de X  |
| `filter:links`         | `filter:links`         | Solo tuits con enlaces                 |
| `filter:replies`       | `filter:replies`       | Solo tuits de respuesta                |
| `filter:quote`         | `filter:quote`         | Solo tuits cita                        |
| `filter:blue_verified` | `filter:blue_verified` | Solo usuarios Premium                  |

Las ventanas de fecha usan un límite inferior inclusivo y uno superior
exclusivo. El Actor verifica ambos límites antes de agregar o cobrar por cada
tuit.

Para la lista completa de operadores, consulta
[Twitter Advanced Search](https://github.com/igorbrigadir/twitter-advanced-search).

## Entrada

Consulta la pestaña **Input** para la lista completa de opciones. Todos los
campos son opcionales excepto al menos uno de: `startUrls`, `twitterHandles`,
`listIds`, `tweetIds`, `searchTerms`, `twitterContent`, o sus alias
documentados.

Ejemplos:

- Pega una URL de tuit en Start URLs.
- Pega una URL de perfil o agrega el nombre de usuario en X Handles. El Actor
  combina su línea de tiempo con la búsqueda de autor.
- Usa `from:usuario since:AAAA-MM-DD until:AAAA-MM-DD` como término de
  búsqueda para rellenos de cuenta. El Actor combina ventanas compatibles
  antes de la recuperación. Las ventanas recientes combinan la línea de
  tiempo del perfil con la búsqueda de autor. Las ventanas históricas usan
  búsqueda exacta.
- Pega una URL de lista en Start URLs.
- Combina `twitterContent` con filtros como `from:`, `since:`, `min_faves:` y
  `filter:media` para búsquedas avanzadas.

El extractor dirige las URLs de lista a través de la ruta dedicada de lista en
lugar de la búsqueda genérica `list:ID`.

## Salida

Cada tuit es un objeto JSON con los metadatos disponibles:

Los esquemas de Dataset e informe de ejecución incluyen títulos de campo,
descripciones y ejemplos. Los agentes pueden inspeccionarlos sin adivinar el
significado del campo.

Los valores de muestra son ilustrativos. Las respuestas reflejan los datos de
origen en el momento de la ejecución.

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

Exporta como JSON, CSV, Excel o HTML desde el Dataset de Apify.

## Opciones de ejecución

- Configura el cargo total máximo de Apify para limitar el costo de la
  ejecución. Deja `maxItems` vacío para obtener el máximo de filas dentro de
  ese presupuesto, o configura `maxItems` cuando quieras menos tuits.
- Configura `maxTotalChargeUsd` en la API de Apify, o Max cost per run en
  Console. Apify expone ese límite al Actor como
  `ACTOR_MAX_TOTAL_CHARGE_USD`, y el Actor lo convierte en el conteo máximo de
  filas facturables.
- Pasa `tweetIds` para lotes concurrentes de 100 IDs. Pega una URL de perfil
  para usar la ruta rápida de línea de tiempo de usuario.
- Configura `includeSearchTerms: true` cuando ejecutes muchas consultas para
  etiquetar cada resultado con su término de búsqueda de origen.
- Configura `queryType: "Latest + Top"` para ejecutar ambos modos de búsqueda
  de X de forma simultánea. La eliminación de duplicados y los topes de
  resultado permanecen atómicos.
- Usa los monitores de cuenta o palabra clave de Xquik para verificaciones
  cada 1 segundo y webhooks firmados. Los monitores activos verifican cada
  segundo.

## Casos de uso

- Rastrear el sentimiento de marca en los tuits.
- Monitorear publicaciones de la competencia y términos del sector.
- Encontrar prospectos en conversaciones públicas.
- Recopilar conjuntos de datos públicos para investigación.
- Encontrar publicaciones con alta interacción pública.

## Responsabilidad con los datos

El Actor solicita campos públicos de X. Los resultados pueden contener datos
personales. Confirma un propósito lícito y sigue las normas de privacidad
aplicables. Consulta con asesoría legal calificada cuando tengas dudas.

## Actores de Xquik relacionados

Todos los Actores de Xquik comparten el mismo motor de extracción y la
facturación basada en filtros, con diagnósticos. Elige el que coincida con los
datos que necesitas.

- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): Extrae
  perfiles junto con sus publicaciones, respuestas, contenido multimedia y me
  gusta a partir de nombres de usuario, IDs o URLs. Úsalo cuando partes de
  cuentas en lugar de búsquedas. Desde $0.00015 por fila.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): Extrae
  respuestas, comentarios y conversaciones completas debajo de publicaciones
  con más de 25 filtros. Úsalo cuando necesites la discusión debajo de los
  tuits. Desde $0.00015 por fila.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): Extrae
  respuestas, citas, usuarios que retuitean, quienes dan me gusta e hilos para
  URLs o IDs de publicaciones de forma masiva. Úsalo cuando mides quién
  interactuó con las publicaciones. Desde $0.00015 por fila.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): Extrae
  seguidores, cuentas seguidas, miembros de Listas, suscriptores y miembros de
  Comunidades como filas de perfil. Úsalo cuando necesites listas de audiencia
  o de miembros. Desde $0.00015 por perfil.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper):
  Busca usuarios por nombre de usuario, biografía y ubicación con filtros de
  seguidores, verificación, antigüedad y ubicación. Úsalo cuando construyes
  listas de cuentas a partir de una búsqueda. Desde $0.00015 por perfil.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): Extrae
  publicaciones, miembros y seguidores de Listas a partir de URLs o IDs de
  Listas. Úsalo cuando una Lista curada define tus fuentes. Desde $0.00015 por
  fila.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): Extrae
  información, publicaciones, búsquedas, miembros y moderadores de
  Comunidades. Úsalo cuando tus fuentes sean Comunidades de X. Desde $0.00015
  por fila.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): Extrae
  tendencias en tiempo real por ubicación con rango, volumen, consulta y
  WOEID. Úsalo cuando rastreas qué es tendencia y dónde. Desde $0.00015 por
  tendencia.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): Extrae
  artículos extensos de X en Markdown y texto con portadas, autores, fechas y
  métricas. Úsalo cuando necesites el cuerpo de artículos, no tuits. Desde
  $0.00015 por artículo.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): Extrae o
  almacena fotos, videos y GIFs de publicaciones o perfiles con opciones de
  MP4 y metadatos. Úsalo cuando necesites los archivos multimedia en sí.
  Desde $0.00015 por fila multimedia.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  Rastrea menciones de marca con relevancia, sentimiento y respuestas de
  experiencia del cliente mediante IA, y compara ejecuciones. Úsalo cuando
  observas una marca a lo largo del tiempo. Desde $0.0003 por tuit analizado.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  Etiqueta actitud, intensidad y probabilidad de sarcasmo para cada tuit con
  IA. Úsalo cuando necesites sentimiento general sobre cualquier tema. Desde
  $0.0003 por tuit analizado.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  Etiqueta postura alcista, bajista, neutral o mixta, tipo de contenido,
  convicción y relevancia del activo con IA. Úsalo cuando sigues acciones,
  criptomonedas o conversaciones de trading. Desde $0.0003 por tuit analizado.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  Etiqueta publicaciones de noticias por formato, atribución de fuente y
  relevancia del tema con IA. Úsalo cuando separas los reportes del
  comentario. Desde $0.0003 por tuit analizado.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  Responde tus propias preguntas de categoría, puntaje y sí/no para cada tuit
  con IA. Úsalo cuando los análisis predefinidos no se ajustan a tus
  etiquetas. Desde $0.0003 por tuit analizado.

## ¿Necesitas más que extracción?

Xquik también ofrece 47 herramientas de panel, 129 operaciones REST, webhooks
firmados y un servidor MCP.

- [Documentación de la API](https://docs.xquik.com/introduction): guías de la
  API REST
- [API de Search Tweets](https://docs.xquik.com/api-reference/x/search-tweets):
  el endpoint que impulsa este Actor
- [API de Batch Tweets](https://docs.xquik.com/api-reference/x/batch-tweets):
  obtén hasta 100 tuits por ID
- [API de User Tweets](https://docs.xquik.com/api-reference/x/user-tweets):
  obtén la línea de tiempo de un usuario
- [Servidor MCP](https://docs.xquik.com/mcp/overview): descubre las
  herramientas admitidas
- [Webhooks](https://docs.xquik.com/webhooks/overview): entrega de eventos
  firmada
- [GitHub](https://github.com/Xquik-dev/x-twitter-scraper): código fuente y
  seguimiento de issues

## Preguntas frecuentes

**¿Necesito una clave de API de X?** No. Este extractor usa su propia
infraestructura. No se requiere inicio de sesión ni credenciales.

**¿Qué limita una ejecución?** Tu límite de elementos solicitado y el límite
de gasto de Apify detienen la ejecución. Los límites de cuenta y plataforma de
Apify siguen aplicando.

**¿Qué tan rápido es?** El tiempo de ejecución depende de la ruta, el conteo
de resultados y la disponibilidad de la fuente.

**¿Qué operadores de búsqueda se admiten?** La búsqueda avanzada de X admite
autores, destinatarios, menciones, fechas, interacción, contenido multimedia y
ubicación.

**¿Puedo usar la API de Apify para ejecutar esto?** Sí. Consulta la
[pestaña API](https://apify.com/xquik/x-tweet-scraper/api) para ejemplos en
Python, JavaScript y cURL.

**¿Puedo programar extracciones recurrentes?** Sí. Usa la
[programación](https://docs.apify.com/platform/schedules) integrada de Apify
para ejecutar este Actor con un cron.

**¿Dónde reporto problemas?** Abre un issue en
[GitHub](https://github.com/Xquik-dev/x-twitter-scraper/issues) o usa la
pestaña Issues en la página de este Actor.

**¿Puedo obtener una solución personalizada?** Sí. Visita
[xquik.com](https://xquik.com) o lee la
[documentación de la API](https://docs.xquik.com/introduction) para conocer el
panel, la API, el servidor MCP y los webhooks.
