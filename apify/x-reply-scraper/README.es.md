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

Xquik es el servicio de extracción de datos de X (Twitter) más rápido y
económico del mundo, con los datos de X más completos, y X Reply Scraper
recopila respuestas, comentarios y conversaciones completas. Todos los demás
Actors de Apify cobran antes de filtrar o eliminar duplicados. Xquik cobra
solo por resultados entregados, únicos y que cumplen los filtros.

Extrae respuestas de X (Twitter) por **$0.00015 por fila entregada en cada
plan de Apify**. Pega URLs de publicaciones, IDs de tuits, URLs de perfiles o
nombres de usuario. Exporta respuestas, conversaciones, autores, interacción,
entidades y URLs de contenido multimedia. Apify factura el uso de su
plataforma por separado. No se requiere inicio de sesión en X.

Los filtros se ejecutan antes de escribir en el conjunto de datos. Pagas solo
por las filas entregadas.

>

## Extracción incompleta

Una extracción interrumpida escribe un diagnóstico `partial` gratuito. Los
resultados disponibles permanecen intactos. Lee `availableResults`,
`failedTargets`, `retryable` y `nextAction` antes de reintentar. Una salida
exitosa del Actor confirma la entrega, no una extracción completa.

Xquik es un servicio independiente de terceros. No está afiliado a X Corp.

> "Twitter" y "X" son marcas registradas de X Corp.

## ¿Qué hace este extractor de respuestas de Twitter?

X Reply Scraper recopila respuestas públicas y conversaciones de comentarios.
Maneja publicaciones individuales, listas masivas de URLs, IDs de tuits y
líneas de tiempo de respuestas de usuarios.

Úsalo para análisis de sentimiento, comentarios de clientes, investigación de
comunidades, clasificación de respuestas, descubrimiento de leads, revisión
de moderación y conjuntos de datos de conversaciones.

### Comportamiento de la recopilación de respuestas

- El modo automático cambia los resultados directos incompletos a búsqueda
  de conversación.
- Las páginas automáticas de respuestas de tuits solicitan hasta 300 filas.
- Cuatro estrategias cubren respuestas directas, búsqueda y contexto de
  hilo.
- Las entradas masivas aceptan URLs de publicaciones, IDs de tuits, perfiles
  y nombres de usuario.
- Los objetivos de perfil combinan la línea de tiempo y la búsqueda por
  autor cuando ambas aplican.
- Los filtros y la eliminación de duplicados se ejecutan antes de facturar.
- La salida admite 4 modos de orden, 3 niveles de detalle y 3 estilos de
  campo.
- Cada respuesta conserva su objetivo de origen, IDs de padres, ID raíz y
  profundidad.
- Los cursores de continuación admiten reprocesos históricos y ejecuciones
  programadas.
- Las ejecuciones vacías escriben 1 registro gratuito en `diagnostics`.
- Los registros de página y objetivo incluyen `fetchDurationMs`,
  `processingDurationMs`, `pushDurationMs`, `statusDurationMs`,
  `fullPageDurationMs` y `fullTargetDurationMs` sin repetir las entradas.
- Los puntos de control conservan las respuestas aceptadas, los tiempos y
  los fallos después de reinicios.

### Usa siempre la versión más reciente

Selecciona `latest` en cada ejecución para recibir todas las correcciones
publicadas.

Cuando no se especifica una versión, Apify usa el valor predeterminado
`latest` de este Actor. Las ejecuciones desde Console y los ejemplos
estándar de la API heredan ese valor predeterminado.

Las tareas guardadas pueden anular el valor predeterminado del Actor. Los
Schedules y las integraciones de tareas reutilizan esa elección. Mantén cada
anulación en `latest`.

Apify no redirige números de versión exactos a `latest`. Reemplaza los
números fijados por `latest`. Usa versiones exactas solo para reversiones
temporales.

## Inicio rápido

El formulario inicial apunta a una conversación pública verificada. Devuelve
hasta 25 filas completas y planas en un máximo de 10 páginas. El modo
automático busca la conversación completa de forma predeterminada. La
eliminación de duplicados y la atribución de origen permanecen activadas.

### Extraer respuestas desde una URL de publicación

```json
{
  "startUrls": [{ "url": "https://x.com/OpenAI/status/2082577277246972300" }],
  "maxItems": 100
}
```

### Extraer respuestas desde IDs de tuits

```json
{
  "tweetIds": ["2082577277246972300", "2083148725367783580"],
  "maxItemsPerTarget": 100,
  "maxItems": 10000
}
```

### Recopilar la conversación anidada completa

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

### Extraer la línea de tiempo de respuestas de un usuario

```json
{ "usernames": ["OpenAI", "apify"], "maxItems": 10000 }
```

### Filtrar respuestas antes de facturar

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

### Exportar filas planas aptas para CSV

```json
{
  "tweetIds": ["2082577277246972300"],
  "outputMode": "full",
  "outputPreset": "flat",
  "fieldStyle": "camelCase",
  "maxItems": 100
}
```

Los valores de muestra son ilustrativos. Las respuestas reflejan los datos de
origen en el momento de la ejecución.

## Preparación para agentes de IA y MCP

Ejecuta este Actor a través de Apify MCP, clientes de API, x402 o Skyfire.

- Los permisos limitados protegen los datos de la cuenta de Apify que no
  están relacionados.
- La facturación por evento (pay-per-event) admite costos deterministas
  basados en resultados.
- El modo standby permanece deshabilitado por compatibilidad con pagos
  agenticos.
- Los esquemas tipados exponen respuestas, reportes de ejecución y cursores
  de continuación.
- Los valores predeterminados acotados evitan ejecuciones de agentes sin
  límite por accidente.
- Los modos estables `camelCase` y `snake_case` simplifican el
  encadenamiento de herramientas.
- Las filas de diagnóstico incluyen un estado, un mensaje y una acción de
  recuperación.
- Los reportes de ejecución incluyen resultados exactos, motivos de
  detención y estimaciones de cobro.

## Objetivos de respuesta y alias de entrada

Usa los campos principales a continuación.

| Input         | Propósito                                             |
| ------------- | ------------------------------------------------------ |
| `startUrls`   | URLs mixtas de publicaciones y perfiles de X            |
| `tweetIds`    | IDs numéricos de publicaciones                          |
| `usernames`   | Líneas de tiempo de perfil con búsqueda por autor       |
| `startCursor` | Reanuda un objetivo desde un cursor de origen guardado  |

El formulario visual muestra solo los controles canónicos. Los alias de
compatibilidad siguen disponibles en JSON, API, SDK, automatización y
entradas de tareas guardadas. Los campos canónicos y de alias explícitos
mantienen su orden de resolución existente cuando se combinan.

Los alias de compatibilidad aceptan entradas comunes de la competencia:

- Alias de URL: `urls`, `tweetUrls`, `postUrls`, `profileUrls`
- Alias de ID: `conversationIds`, `postIds`, `ids`, `tweetId`, `id`
- Alias de nombre de usuario: `twitterHandles`, `screenname`
- Alias de límite global: `maxResults`, `max_results`, `resultsLimit`,
  `maxReplies`
- Alias por objetivo: `maxRepliesPerTweet`, `maxCommentsPerPost`
- Alias de búsqueda: `useSearch`
- Alias de respuestas anidadas: `includeNestedReplies`,
  `includeRepliesOfReplies`
- Alias de publicación original: `includeOriginalTweet`
- Alias de salida: `outputVariant`, `includeRaw`

Los objetivos malformados o no admitidos no hacen fallar al Actor. La
ejecución devuelve un diagnóstico accionable cuando no queda ningún objetivo
válido.

Los objetivos de perfil combinan paginación por cursor con búsqueda por
autor. El Actor elimina las filas duplicadas antes de la salida y de la
facturación. Los cursores heredados guardados conservan la paginación
estándar.

## Estrategias de cobertura

### Automático completo

Usa `collectionStrategy: "auto"` para la mayoría de los trabajos. Los
alcances completos o anidados comienzan con la extracción completa de
respuestas. Los controles de alcance, profundidad, orden y autor se aplican
antes de los límites de respuesta. La extracción incluye los descendientes
debajo de objetivos que no son la raíz. La extracción incompleta conserva
las filas antes de intentar búsqueda de conversación y respuestas directas.
Los alcances directos recurren a la búsqueda cuando es necesario. Las
páginas sin terminar conservan su continuación. Las estrategias explícitas
nunca cambian.

El umbral de cobertura de diagnóstico no prueba el agotamiento de la
fuente. Páginas estancadas, límites, datos faltantes o errores dejan la
recuperación incompleta.

### Extremo de respuesta directa

Usa `collectionStrategy: "replies"` para forzar la línea de tiempo de
respuestas de X. Esto conserva el orden de la fuente y admite cursores.

### Búsqueda de conversación

Usa `collectionStrategy: "conversationSearch"` para una cobertura amplia de
la conversación. El Actor busca por `conversation_id:<ID de tuit>`.

### Contexto completo del hilo

Usa `collectionStrategy: "thread"` para leer el contexto de la conversación
de origen. Configura `includeOriginalPost: true` para conservar la
publicación raíz como profundidad 0.

## Controles de respuestas directas y anidadas

Usa `scope` para elegir la forma del resultado.

| Valor    | Resultado                                              |
| -------- | -------------------------------------------------------- |
| `direct` | Conserva las respuestas de profundidad 1                 |
| `nested` | Conserva las respuestas a respuestas en profundidad 2+    |
| `all`    | Conserva toda respuesta directa y anidada disponible      |

Usa `maxDepth` para acotar el anidamiento. Los enlaces de padre pueden estar
ausentes cuando X omite un ancestro de la conversación. El Actor conserva la
mejor profundidad disponible.

## Orden

Usa `sort` con estos valores:

- `relevance` conserva el orden de origen de X
- `latest` ordena de más reciente a más antiguo
- `oldest` ordena de más antiguo a más reciente
- `likes` ordena de mayor a menor cantidad de me gusta

Los objetivos de perfil recopilan la cantidad solicitada de resultados
únicos y filtrados antes de ordenarlos. Los objetivos de tuit conservan el
orden global.

Los alias de compatibilidad `sortBy` y `queryType` siguen siendo
compatibles.

## Filtros de respuestas

Todos los filtros admitidos se ejecutan antes de escribir en el conjunto de
datos.

### Filtros de texto y entidades

| Input            | Comportamiento                        |
| ---------------- | -------------------------------------- |
| `exactPhrase`    | Requiere una frase exacta              |
| `anyWords`       | Requiere al menos 1 palabra o frase    |
| `excludeWords`   | Elimina palabras o frases coincidentes |
| `keywordInclude` | Alias combinado con `anyWords`         |
| `keywordExclude` | Alias combinado con `excludeWords`     |
| `hashtags`       | Requiere al menos 1 hashtag            |
| `cashtags`       | Requiere al menos 1 cashtag            |
| `mentioning`     | Requiere una @mención                  |

### Filtros de autor e idioma

| Input                   | Comportamiento                              |
| ----------------------- | ---------------------------------------------- |
| `fromUser`              | Conserva un solo autor de respuestas           |
| `toUser`                | Conserva respuestas dirigidas a un usuario     |
| `lang`                  | Conserva un código de idioma de X              |
| `verifiedOnly`          | Requiere cualquier señal pública de verificación |
| `blueVerifiedOnly`      | Requiere verificación de X Premium             |
| `excludeOriginalAuthor` | Elimina autorrespuestas del autor de origen    |

### Filtros de interacción

Usa `minLikes`, `minReplies`, `minRetweets`, `minQuotes`, `minViews` y
`minBookmarks`. El alias `minFaves` corresponde a `minLikes`.

### Filtros de contenido multimedia y tiempo

- Configura `hasMediaOnly: true` para respuestas con contenido multimedia
  público.
- Configura `mediaType` como `any`, `image`, `video`, `gif` o `link`.
- Configura `since` para una marca de tiempo de inicio inclusiva.
- Configura `until` para una marca de tiempo de fin exclusiva.
- Usa `sinceTime` y `untilTime` como alias de compatibilidad.

## Límites, facturación y continuación

`maxItems` limita las filas entregadas en toda la ejecución.
`maxItemsPerTarget` limita cada publicación o perfil.

Los objetivos independientes se ejecutan en paralelo. Cada objetivo conserva
la paginación ordenada por cursor. Las escrituras del conjunto de datos
mantienen los límites, la eliminación de duplicados, la atribución y la
facturación de forma atómica.

El Actor elimina duplicados antes de facturar. Configura
`dedupeAcrossTargets: false` para conservar filas duplicadas de distintos
objetivos.

Después de una ejecución limitada por páginas, lee `next-cursors` desde el
almacén de clave-valor predeterminado. Pasa un cursor a través de
`startCursor` para continuar ese objetivo.

## Campos de salida

Los esquemas del Dataset y del reporte de ejecución describen cada campo
devuelto. Los campos primitivos también incluyen ejemplos para agentes e
integraciones generadas.

Cada fila completa de respuesta puede incluir estos campos principales:

| Campo               | Descripción                                                 |
| ------------------- | -------------------------------------------------------------- |
| `id`                | ID de la respuesta                                              |
| `text`              | Texto de la respuesta                                           |
| `fullText`          | Texto largo de la respuesta                                     |
| `createdAt`         | Marca de tiempo de la respuesta                                 |
| `lang`              | Código de idioma de X                                           |
| `url`               | URL directa de la respuesta                                     |
| `conversationId`    | ID de conversación de X                                         |
| `inReplyToId`       | ID del padre inmediato                                          |
| `inReplyToUserId`   | ID del autor del padre                                          |
| `inReplyToUsername` | Nombre de usuario del padre                                     |
| `likeCount`         | Me gusta                                                        |
| `replyCount`        | Respuestas hijas                                                |
| `retweetCount`      | Retuits                                                         |
| `quoteCount`        | Citas                                                           |
| `viewCount`         | Vistas                                                          |
| `bookmarkCount`     | Marcadores                                                      |
| `author`            | Metadatos públicos disponibles del autor                        |
| `media`             | Imágenes, videos, GIFs y variantes                              |
| `entities`          | Hashtags, cashtags, menciones, URLs y marcas de tiempo de video |
| `quoted_tweet`      | Publicación citada cuando está disponible                       |
| `retweeted_tweet`   | Publicación republicada cuando está disponible                  |

Las filas completas también conservan los metadatos de origen disponibles.
Esto incluye `isNoteTweet`, `isReply`, `isLimitedReply`, `isQuoteStatus`,
`source`, `type`, `displayTextRange`, `contentDisclosure`,
`conversationControl`, `article`, `limitedActions`, `reactionContext`,
`card`, `communityId`, `communityNote`, `edit`, `isTranslatable`,
`noteTweet`, `place`, `postCta`, `possiblySensitive`, `previousCounts`,
`tombstone`, `unmentionedUserIds` y `viewState`.

Las filas planas conservan la ascendencia de la conversación, los detalles
de origen, el tipo de resultado y la versión del esquema. Consulta OpenAPI
para conocer los campos exactos.

### Metadatos del autor

Los autores anidados siguen el contrato de perfil público. Cubre identidad,
contadores, verificación, disponibilidad, datos profesionales y biografías
de perfil.

La salida plana agrega `authorId`, `authorUsername`, `authorName`,
`authorFollowers`, `authorFollowing` y `authorVerified`.

### Metadatos de contenido multimedia

El contenido multimedia incluye disponibilidad, geometría, etiquetas,
variantes de video, y las acciones `watchNowUrl` y `visitSiteUrl`.

La salida plana agrega `mediaUrls`.

## Modos de salida

### Compacto

Configura `outputMode: "compact"` para reducir el ancho del conjunto de
datos. Conserva los campos de texto, conversación, autor, interacción y
contenido multimedia.

### Completo

Configura `outputMode: "full"` para conservar cada campo público admitido.

### Sin procesar

Configura `outputMode: "raw"` para agregar una instantánea de origen
depurada bajo `raw`.

### Anidado o plano

El diseño predeterminado `flat` conserva los objetos anidados y agrega
campos de autor para tablas. Configura `outputPreset: "nested"` para omitir
los campos planos agregados.

### Nomenclatura de campos

Configura `fieldStyle` como `source`, `camelCase` o `snake_case`. El Actor
evita sobrescribir claves de origen coincidentes.

## Diagnósticos

Las filas de datos exitosas usan `resultType: "reply"`. Las salidas sin
datos escriben exactamente 1 registro gratuito en `diagnostics` con una
solución accionable.

Cada resultado escribe `run-report`, incluidas las salidas sin entrada y con
entrada inválida. El esquema del reporte documenta la finalización, la
facturación, los fallos y los cursores guardados. Su campo `version`
informa la versión exacta del código fuente publicado del Actor.

Los posibles estados incluyen:

- `no-input`
- `invalid-input`
- `replies-incomplete`
- `zero-output`
- `aborted`
- `unexpected-error`

## ¿Cuánto cuesta?

Cada plan de Apify cuesta **$0.00015 por fila entregada**. Esto equivale a
`$0.00015` por fila. Apify factura el uso de la plataforma por separado.

Xquik aplica un cobro por cada fila de datos entregada. Los diagnósticos son
gratuitos en `diagnostics`. No se aplica tarifa de inicio, URL, consulta,
paginación, filtro o proxy.

El tiempo de espera predeterminado de Apify es `0`, por lo que las
ejecuciones no tienen límite de tiempo. El Actor continúa hasta que se
alcanza el límite o se agotan los datos elegibles. Quien invoca puede seguir
configurando un tiempo de espera finito de Apify. Entonces,
`completionReason: "deadline_reached"` significa que ese límite configurado
está cerca. El Actor reserva los últimos 15 segundos para puntos de
control, filas, reportes y una salida exitosa. Las respuestas ya
recopiladas permanecen entregadas y se facturan una sola vez. La paginación
sin terminar sigue siendo reanudable.

## Ejemplos de tareas públicas

Elige entre 50 tareas públicas. Cada una tiene una entrada acotada y una
vista de conjunto de datos correspondiente. Edita cualquier tarea antes de
ejecutarla.

Empieza con estos ejemplos:

- [Collect replies for AI agents](https://apify.com/xquik/x-reply-scraper/examples/collect-replies-for-ai-agents)
- [Build an X reply RAG dataset](https://apify.com/xquik/x-reply-scraper/examples/build-x-reply-rag-dataset)
- [Archive replies for LLM processing](https://apify.com/xquik/x-reply-scraper/examples/archive-replies-for-llm-processing)
- [Extract reply leads for CRM](https://apify.com/xquik/x-reply-scraper/examples/extract-reply-leads-for-crm)

## Ejemplo de API

### JavaScript

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

### Python

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

### cURL

```bash
curl "https://api.apify.com/v2/acts/xquik~x-reply-scraper/run-sync-get-dataset-items" \
  -X POST \
  -H "Authorization: Bearer <APIFY_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"tweetIds":["2082577277246972300"],"maxItems":100}'
```

## Automatización e integraciones

Ejecuta el Actor mediante Schedules de Apify, webhooks, clientes de API,
Make, Zapier, n8n, Google Sheets, almacenamiento en la nube o el
[servidor Apify MCP](https://docs.apify.com/platform/integrations/mcp).

Los flujos de trabajo de agentes elegibles también pueden usar
[x402](https://docs.apify.com/integrations/x402) o
[Skyfire](https://docs.apify.com/integrations/skyfire).

Xquik también ofrece 47 herramientas de panel, 129 operaciones REST,
webhooks firmados y un servidor MCP.

## Uso responsable

Recopila solo datos públicos. Cumple las leyes y las reglas de la
plataforma aplicables.

Los conjuntos de datos de respuestas pueden contener datos personales. Elige
un propósito lícito. Minimiza la retención. Protege las exportaciones.
Respeta las solicitudes de eliminación y acceso cuando corresponda.

El Actor no evade cuentas protegidas. No solicita contraseñas, cookies de
sesión ni tokens de autenticación de X de los clientes.

## Actors de Xquik relacionados

Todos los Actors de Xquik comparten el mismo motor de extracción y la misma
facturación basada en filtros con diagnósticos. Elige el que corresponda a
los datos que necesitas.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): extrae tuits
  de búsquedas, líneas de tiempo de perfiles, Listas e IDs de tuits con más
  de 50 filtros y exportaciones planas. Úsalo cuando necesites datos de
  tuits sin análisis. Desde $0.00015 por fila.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): extrae
  perfiles junto con sus publicaciones, respuestas, contenido multimedia y
  me gusta a partir de nombres de usuario, IDs o URLs. Úsalo cuando empieces
  desde cuentas en lugar de búsquedas. Desde $0.00015 por fila.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper):
  extrae respuestas, citas, usuarios que retuitean, quienes dan me gusta e
  hilos para URLs o IDs de publicaciones en lote. Úsalo cuando midas quién
  interactuó con las publicaciones. Desde $0.00015 por fila.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): extrae
  seguidores, cuentas seguidas, miembros de Listas, suscriptores y miembros
  de Comunidades como filas de perfil. Úsalo cuando necesites listas de
  audiencia o miembros. Desde $0.00015 por perfil.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper):
  busca usuarios por nombre de usuario, biografía y ubicación con filtros de
  seguidores, verificación, antigüedad y ubicación. Úsalo cuando construyas
  listas de cuentas a partir de una búsqueda. Desde $0.00015 por perfil.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): extrae
  publicaciones, miembros y seguidores de Listas desde URLs o IDs de Listas.
  Úsalo cuando una Lista curada defina tus fuentes. Desde $0.00015 por fila.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): extrae
  información, publicaciones, búsquedas, miembros y moderadores de
  Comunidades. Úsalo cuando tus fuentes sean Comunidades de X. Desde
  $0.00015 por fila.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): extrae
  tendencias en tiempo real por ubicación con posición, volumen, consulta y
  WOEID. Úsalo cuando quieras saber qué es tendencia y dónde. Desde $0.00015
  por tendencia.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): extrae
  Artículos largos de X en Markdown y texto con portadas, autores, fechas y
  métricas. Úsalo cuando necesites cuerpos de artículos, no tuits. Desde
  $0.00015 por artículo.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): extrae o
  almacena fotos, videos y GIFs de publicaciones o perfiles con opciones de
  MP4 y metadatos. Úsalo cuando necesites los archivos multimedia en sí.
  Desde $0.00015 por fila de contenido multimedia.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  rastrea menciones de marca con relevancia, sentimiento y respuestas de
  experiencia del cliente mediante IA, y compara ejecuciones. Úsalo cuando
  sigas una marca a lo largo del tiempo. Desde $0.0003 por tuit analizado.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  etiqueta actitud, intensidad y probabilidad de sarcasmo de cada tuit con
  IA. Úsalo cuando necesites sentimiento general sobre cualquier tema.
  Desde $0.0003 por tuit analizado.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  etiqueta postura alcista, bajista, neutral o mixta, tipo de contenido,
  convicción y relevancia de activos con IA. Úsalo cuando sigas acciones,
  cripto o conversaciones de trading. Desde $0.0003 por tuit analizado.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  etiqueta publicaciones de noticias por formato, atribución de fuente y
  relevancia de tema con IA. Úsalo cuando separes reportería de opinión.
  Desde $0.0003 por tuit analizado.
- [X (Twitter) Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  responde tus propias preguntas de categoría, puntaje y sí/no para cada
  tuit con IA. Úsalo cuando los análisis predefinidos no se ajusten a tus
  etiquetas. Desde $0.0003 por tuit analizado.
