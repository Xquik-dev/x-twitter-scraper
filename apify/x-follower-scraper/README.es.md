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

Xquik es el servicio de extracción de datos de X (Twitter) más rápido y
económico del mundo, con los datos más completos de X, y X Follower Scraper
recopila seguidores, cuentas seguidas, miembros de listas, suscriptores y
miembros de comunidades. Todos los demás Actors de Apify cobran antes de
filtrar o eliminar duplicados. Xquik solo cobra por resultados entregados,
únicos y que coinciden con los filtros.

Extrae seguidores, cuentas seguidas, seguidores verificados, miembros de
Listas, suscriptores de Listas y miembros de Comunidades de X (Twitter)
**desde $0.00015 por perfil entregado en cada plan de Apify**. Apify factura
el uso de la plataforma por separado. Sin inicio de sesión en X, tarifa de
inicio ni tarifa de consulta.

>

## Extracción incompleta

Una extracción interrumpida escribe un diagnóstico `partial` gratuito. Los
resultados disponibles permanecen intactos. Lee `availableResults`,
`failedTargets`, `retryable` y `nextAction` antes de reintentar. Una salida
exitosa del Actor confirma la entrega, no una extracción completa.

Xquik es un servicio independiente de terceros. No está afiliado a X Corp.

> "Twitter" y "X" son marcas registradas de X Corp.

## ¿Qué hace X Follower Scraper?

X Follower Scraper devuelve los datos de perfil público disponibles para
seguidores, cuentas seguidas, Listas y Comunidades. Cada fila incluye su
objetivo de origen y su relación.

### Comportamiento principal

- Los filtros y la eliminación de duplicados se ejecutan antes de facturar.
- Una ejecución acepta nombres de usuario, IDs numéricos, URLs y rutas
  cortas.
- El modo de combinación registra perfiles compartidos, orígenes, relaciones
  y `overlapCount`.
- Los cursores automáticos solicitan hasta 300 perfiles por página.
- Los cursores antiguos mantienen su límite de 200 perfiles y se reinician
  al expirar.
- Los registros de página incluyen `fetchDurationMs`, `processingDurationMs`,
  `pushDurationMs`, `statusDurationMs` y `fullPageDurationMs` sin repetir
  objetivos.
- Los checkpoints conservan las filas aceptadas, los tiempos y los conteos
  de fallos después de reinicios.

## Ejemplos de tasks

Elige entre 50 tasks públicas. Cada una tiene una entrada acotada y una vista
de dataset correspondiente. Cada task se abre con una audiencia o un filtro
real. Edítala antes de ejecutarla.

- [Discover AI builders in OpenAI followers](https://apify.com/xquik/x-follower-scraper/examples/discover-ai-builders-in-openai-followers)
- [Build an X audience dataset for AI agents](https://apify.com/xquik/x-follower-scraper/examples/build-agent-ready-x-audience-dataset)
- [Collect X audience data for RAG](https://apify.com/xquik/x-follower-scraper/examples/collect-x-audience-data-for-rag)
- [Find AI SEO practitioners on X](https://apify.com/xquik/x-follower-scraper/examples/find-ai-seo-practitioners-on-x)
- [Compare AI brand follower overlap](https://apify.com/xquik/x-follower-scraper/examples/compare-ai-brand-follower-overlap)
- [Export Twitter followers to CSV](https://apify.com/xquik/x-follower-scraper/examples/export-twitter-followers-to-csv)
- [Analyze competitor follower overlap](https://apify.com/xquik/x-follower-scraper/examples/analyze-competitor-follower-overlap)
- [Find micro-influencers in X followers](https://apify.com/xquik/x-follower-scraper/examples/find-micro-influencers-in-followers)
- [Export curated Twitter list members](https://apify.com/xquik/x-follower-scraper/examples/export-curated-twitter-list-members)
- [Analyze public X Community members](https://apify.com/xquik/x-follower-scraper/examples/analyze-public-x-community-members)
- [Collect Community members for AI agents](https://apify.com/xquik/x-follower-scraper/examples/collect-community-members-for-ai-agents)
- [Create repeatable X follower snapshots](https://apify.com/xquik/x-follower-scraper/examples/create-repeatable-follower-snapshots)

### ¿Qué datos puede extraer X Follower Scraper?

| Campo             | Descripción                                              |
| ----------------- | --------------------------------------------------------- |
| `id`              | ID numérico de usuario de X                                |
| `username`        | Nombre de usuario (sin `@`)                                |
| `name`            | Nombre visible                                             |
| `description`     | Texto de la biografía                                      |
| `followers`       | Cantidad de seguidores                                     |
| `following`       | Cantidad de cuentas seguidas                               |
| `statusesCount`   | Total de tuits publicados                                  |
| `mediaCount`      | Total de contenido multimedia subido                       |
| `favouritesCount` | Total de me gusta otorgados                                |
| `verified`        | Indicador combinado de Blue público o verificado heredado  |
| `verifiedType`    | `blue`, `business`, `government` o `none`                  |
| `location`        | Ubicación autoinformada                                    |
| `url`             | URL del sitio web del perfil                                |
| `profilePicture`  | URL del avatar (tamaño completo)                            |
| `coverPicture`    | URL del banner                                              |
| `createdAt`       | Cadena de marca de tiempo de creación de la cuenta desde X  |
| `sourceTarget`    | Nombre de usuario o ID desde el que extrajiste este perfil  |
| `sourceRelation`  | Relación: `followers`, `following`, `list_members`, ...     |
| `sourceUrl`       | URL exacta en la que se descubrió el perfil                 |
| `sourceTargets`   | Todos los objetivos que coincidieron con este perfil en modo combinación |
| `sourceRelations` | Todas las relaciones que coincidieron con este perfil en modo combinación |
| `sourceUrls`      | Todas las URLs de origen que coincidieron con este perfil en modo combinación |
| `overlapCount`    | Cantidad de pares relación-objetivo coincidentes en modo combinación |
| `resultType`      | Tipo de fila en los modos de salida completo y sin procesar |
| `raw`             | Perfil de origen seguro antes del formato específico del Actor |

Las filas siguen el contrato de perfil público. Cubre identidad, conteos,
verificación, disponibilidad, afiliados, datos profesionales y biografías.
La atribución de origen, las entidades y los IDs de tuits fijados permanecen
disponibles. Consulta el OpenAPI para conocer los campos exactos.

Configura `outputMode: "raw"` o `includeRaw: true` para incluir una copia
`raw` del perfil de origen seguro. El modo compacto sigue siendo el
predeterminado.

`verifiedOnly` acepta perfiles con Blue público y verificados heredados. Los
indicadores de origen contradictorios nunca dejan que un valor falso oculte
un estado de verificación verdadero.

El estado relativo al visor pertenece a la cuenta de lectura de Xquik, no a
tu dataset. Los indicadores de seguir, bloquear, silenciar, mensaje directo,
notificación y similares siempre se eliminan, incluso en la salida sin
procesar.

## ¿Cuánto cuesta extraer seguidores de X?

Cada plan de Apify cuesta `$0.00015` por perfil entregado. Apify factura el
uso de tu plataforma por separado. Xquik aplica un cargo por cada fila de
datos entregada. Los diagnósticos son gratuitos en la salida `diagnostics`.
No se aplica ninguna suscripción de Xquik por separado. No se aplica tarifa
de inicio. Cada ejecución escribe un registro `run-report` con
`estimatedChargeUsd` calculado a partir del precio de pago por evento en
vivo que Apify expone al Actor. Cada resultado escribe `run-report`,
incluidas las salidas sin entrada y con entrada inválida. Su campo `version`
informa la versión exacta del código fuente publicado del Actor.

`failedTargets` cuenta los objetivos que se detuvieron tras un fallo de
lectura. Los perfiles aceptados siguen siendo filas de datos facturables.
Estas ejecuciones usan `completionReason: "partial_failure"`. La paginación
rápida del lado del servidor sigue el mismo contrato de reportes.

El tiempo de espera predeterminado de Apify es `0`. Las ejecuciones no
tienen límite de tiempo. El Actor sigue cada cursor en vivo hasta el límite o
el fin de la fuente. Quien invoca aún puede establecer un tiempo de espera
finito. Entonces `completionReason: "deadline_reached"` significa que ese
límite está cerca. El Actor reserva los últimos 15 segundos para
checkpoints, filas, reportes y una salida limpia. Los perfiles válidos se
siguen entregando y se facturan una sola vez. La paginación sin terminar
sigue siendo reanudable.

Los objetivos independientes se ejecutan de forma concurrente. Cada objetivo
mantiene una paginación de cursor ordenada. Las escrituras del dataset
mantienen los límites, la eliminación de duplicados, la atribución y la
facturación de forma atómica.

- Los inicios, los objetivos y la selección de relación no agregan cargo de
  consulta por separado.
- Los filtros (`minFollowers`, `verifiedOnly`, `bioContains`,
  `locationContains`, `minFollowing`, `maxFollowing`, `minStatuses`,
  `maxStatuses`, `minAccountAgeDays`, `verifiedType`, `usernameContains`,
  `hasWebsite`, `hasLocation`) se ejecutan antes de que un perfil entre a tu
  dataset.
- Con `dedupeAcrossTargets: true`, los repetidos se eliminan antes de
  escribir.
- Las filas rechazadas por el dataset no se facturan.
- Las ejecuciones sin entrada, con entrada inválida y sin salida escriben 1
  registro accionable en la salida gratuita `diagnostics`.

Configura `maxTotalChargeUsd` en la API de Apify, o el costo máximo por
ejecución en Console, para poner un tope duro al gasto. Apify expone ese
límite al Actor como `ACTOR_MAX_TOTAL_CHARGE_USD`, y el Actor se detiene
antes de aceptar filas que lo superen. Deja `maxItems` vacío para que la
ejecución devuelva tantos perfiles como el tope de gasto lo permita.
Configura `maxItems` solo cuando quieras un límite de resultados menor al
que permitiría el presupuesto.

## ¿Cómo uso X Follower Scraper para extraer datos de seguidores?

### 1. Pega URLs de perfil o de lista

Pega URLs de perfil, Lista o Comunidad. El extractor enruta cada URL a su
relación:

```json
{
  "startUrls": [
    { "url": "https://x.com/nasa/followers" },
    { "url": "https://x.com/spacex/verified_followers" },
    { "url": "https://x.com/elonmusk/following" },
    { "url": "https://x.com/i/lists/1748648376080666720/members" },
    { "url": "https://x.com/i/communities/1493446837214187523/members" }
  ],
  "maxItems": 5000
}
```

### 2. Nombres de usuario en bloque

Atajo para muchos objetivos `/<handle>/followers`. Los nombres de usuario
aceptan `@` o ningún prefijo:

```json
{
  "twitterHandles": ["elonmusk", "nasa", "openai"],
  "relation": "followers",
  "maxItems": 1000
}
```

Configura `relation` en `followers`, `following` o `verified_followers` para
cambiar qué se extrae para cada nombre de usuario.

Los alias aceptados para la misma entrada incluyen `username`, `usernames` y
`user_names`.

### 3. Ejecuciones multi-relación

```json
{
  "usernames": ["nasa"],
  "relations": ["followers", "following"],
  "maxItems": 1000
}
```

También puedes usar valores booleanos como `getFollowers`, `getFollowing`,
`getVerifiedFollowers`, `getListMembers`, `getListFollowers` y
`getCommunityMembers`.

### 4. Extrae por IDs numéricos de usuario, lista o comunidad

```json
{
  "userIds": ["44196397"],
  "listIds": ["1748648376080666720"],
  "communityIds": ["1493446837214187523"],
  "relation": "followers",
  "maxItemsPerTarget": 500,
  "maxItems": 1500
}
```

Los alias aceptados para IDs numéricos de usuario incluyen `twitterUserIds` y
`user_ids`.

`relation` se aplica a IDs numéricos de usuario. Los IDs de Lista usan
miembros por defecto. Los IDs de Comunidad siempre usan miembros.
`maxItemsPerTarget` evita que el primer objetivo grande consuma el límite
global.

### 5. Filtra antes de pagar

Aplica filtros para que solo los perfiles coincidentes entren a tu dataset:

```json
{
  "twitterHandles": ["openai"],
  "relation": "followers",
  "minFollowers": 1000,
  "verifiedOnly": true,
  "verifiedType": "business",
  "minStatuses": 100,
  "usernameContains": "ai",
  "bioContains": "founder, CEO",
  "locationContains": "San Francisco",
  "maxItems": 500
}
```

El Actor puede inspeccionar más perfiles de los que escribe. Solo pagas por
las filas que pasan todos los filtros y entran a tu dataset.

Separa las alternativas de `bioContains` con comas o saltos de línea. Un
perfil pasa cuando su biografía contiene alguno de los términos indicados.
La coincidencia no distingue mayúsculas de minúsculas.

### 6. Encuentra superposición de audiencia

Usa el modo de combinación para comparar competidores, listas, comunidades o
tipos de relación:

```json
{
  "twitterHandles": ["openai", "anthropicai", "GoogleDeepMind"],
  "relation": "followers",
  "dedupeMode": "merge",
  "maxItemsPerTarget": 5000,
  "maxItems": 15000
}
```

La salida contiene una fila por perfil único. Los perfiles compartidos
incluyen `sourceTargets`, `sourceRelations`, `sourceUrls`,
`sourceTargetKeys` y `overlapCount`, para que puedas ordenar por superposición
o exportar directamente a CSV. Mantén `maxItems` lo bastante alto para que
cada objetivo aporte filas; usa `maxItemsPerTarget` para controlar la
profundidad por cuenta.

### Formatos de URL aceptados

| URL                                          | Relación                                    |
| --------------------------------------------- | -------------------------------------------- |
| `https://x.com/<handle>/followers`            | `followers`                                  |
| `https://x.com/<handle>/verified_followers`   | `verified_followers`                         |
| `https://x.com/<handle>/following`            | `following`                                  |
| `https://x.com/<handle>`                      | `relation` por defecto (followers si no se define) |
| `https://x.com/i/lists/<id>/members`          | `list_members`                               |
| `https://x.com/i/lists/<id>/followers`        | `list_followers`                             |
| `https://x.com/i/lists/<id>`                  | `list_members`                               |
| `https://x.com/i/communities/<id>/members`    | `community_members`                          |
| `https://x.com/i/communities/<id>`            | `community_members`                          |
| `<handle>/followers`                          | `followers`                                  |
| `<handle>/following`                          | `following`                                  |
| `<handle>/verified_followers`                 | `verified_followers`                         |
| `lists/<id>/members`                          | `list_members`                               |
| `lists/<id>/followers`                        | `list_followers`                             |
| `communities/<id>/members`                    | `community_members`                          |

`twitter.com` y `mobile.twitter.com` también se aceptan en todas partes.

## Entrada

Consulta la pestaña Input para ver la lista completa de opciones. Todos los
campos son opcionales excepto al menos uno de: `startUrls`,
`twitterHandles`, `userIds`, `listIds` o `communityIds`, o sus alias
documentados.

Ejemplos:

- Agrega un nombre de usuario de la competencia a `twitterHandles` con
  `relation: "followers"`.
- Pega `https://x.com/<handle>/verified_followers` en Start URLs para
  perfiles verificados.
- Pega una URL de lista en Start URLs para auditar sus miembros.
- Agrega 2 o más nombres de usuario. Configura `dedupeMode: "first"` para
  conservar solo la primera fila de perfil coincidente, o usa
  `dedupeMode: "merge"` para conservar una fila con todos los objetivos de
  origen coincidentes.

### Experiencia de entrada en Console y API

Console expone estos controles:

- El campo Start URLs acepta cadenas de URL u objetos
  `{ "url": "..." }`. Su editor JSON conserva ambos formatos de API.
- Relation, Output Mode y Dedupe Mode son selects validados.
- Relations es un multi-select validado para ejecuciones multi-relación.
- Los límites de resultados aceptan números enteros de 1 o más.
- Los filtros numéricos de perfil aceptan números enteros de 0 o más.

Usa campos canónicos en integraciones nuevas. Los alias de compatibilidad
siguen disponibles en JSON, API, SDK, automatización y entradas de task.
Esto incluye `outputVariant` e `includeRaw` como alias de Output Mode.
También incluye `dedupeAcrossTargets` como alias de Dedupe Mode. El
formulario visual oculta los alias que duplican un control canónico. Las
entradas JSON existentes y las de task guardadas conservan su comportamiento
actual.

### Usa siempre la versión más reciente

Las ejecuciones de Store usan la configuración de versión `latest` del
Actor. Los clientes de API deben omitir la anulación de versión o pasar
`build=latest`. Actualiza las Tasks e integraciones que fijen una versión
anterior. Las versiones fijadas nunca se mueven automáticamente.

## Salida

Cada perfil es un objeto JSON. El modo compacto devuelve campos públicos
normalizados, campos de versión de esquema y metadatos de origen cuando
están disponibles:

Los esquemas de Dataset y run-report describen cada campo devuelto. Los
campos primitivos también incluyen ejemplos para agentes e integraciones
generadas.

Los valores de muestra son ilustrativos. Las respuestas reflejan los datos
de origen en el momento de la ejecución.

```json
{
  "schemaVersion": 1,
  "_schema_version": 1,
  "id": "44196397",
  "username": "elonmusk",
  "name": "Elon Musk",
  "description": "...",
  "followers": 180000000,
  "following": 500,
  "statusesCount": 42000,
  "mediaCount": 3200,
  "favouritesCount": 120000,
  "verified": true,
  "verifiedType": "blue",
  "location": "...",
  "url": "https://...",
  "profilePicture": "https://...",
  "coverPicture": "https://...",
  "createdAt": "Tue Jun 02 20:12:29 +0000 2009",
  "sourceTarget": "nasa",
  "sourceRelation": "followers",
  "sourceUrl": "https://x.com/nasa/followers"
}
```

El modo de eliminación de duplicados por combinación agrega campos de
superposición:

```json
{
  "schemaVersion": 1,
  "_schema_version": 1,
  "id": "44196397",
  "username": "elonmusk",
  "sourceTargets": ["nasa", "spacex"],
  "sourceRelations": ["followers"],
  "sourceUrls": [
    "https://x.com/nasa/followers",
    "https://x.com/spacex/followers"
  ],
  "sourceTargetKeys": ["followers:nasa", "followers:spacex"],
  "overlapCount": 2
}
```

Exporta en JSON, CSV, Excel o HTML desde el dataset de Apify.

## Opciones de ejecución

- Configura el costo máximo total de Apify para limitar el costo de la
  ejecución. Deja `maxItems` vacío para obtener el máximo de filas dentro de
  ese presupuesto, o configura `maxItems` y `maxItemsPerTarget` cuando
  quieras menos perfiles.
- Combina `minFollowers`, `verifiedOnly`, `verifiedType`, `minStatuses`,
  `usernameContains`, `bioContains`, `locationContains`, `hasWebsite` y
  `hasLocation` para acotar el dataset facturado.
- Configura `dedupeMode: "first"` al extraer varios nombres de usuario de la
  competencia para obtener solo perfiles únicos en todos los objetivos.
- Configura `dedupeMode: "merge"` para obtener una fila por perfil con cada
  objetivo de origen coincidente adjunto.
- Configura `outputMode: "full"` para obtener campos de perfil opcionales,
  como IDs de tuits fijados, entidades y metadatos de perfil cuando estén
  disponibles.
- Configura `outputMode: "raw"` o `includeRaw: true` para incluir un objeto
  `raw` depurado junto con los campos normalizados.
- Programa ejecuciones repetidas del Actor y almacena cada dataset para
  comparar IDs de perfil. Los monitores de Xquik emiten eventos de tuit y
  perfil compatibles, no cambios en la lista de seguidores.

## Casos de uso

- Exporta seguidores de la competencia para investigación de leads.
- Compara audiencias entre tu cuenta, la competencia y figuras públicas.
- Filtra por cantidad de seguidores y verificación para encontrar perfiles
  coincidentes.
- Exporta miembros de Comunidades de X relevantes.
- Construye datasets públicos de redes sociales para investigación.
- Segmenta bases de seguidores por palabra clave de biografía, ubicación o
  tipo de perfil.

## Responsabilidad sobre los datos

El Actor solicita campos de perfil público de X. Los resultados pueden
contener datos personales, incluidas ubicaciones autoinformadas. Confirma
un propósito lícito y sigue las normas de privacidad aplicables. Consulta a
un asesor legal calificado en caso de duda.

## Actors de Xquik relacionados

Todos los Actors de Xquik comparten el mismo motor de extracción, la
facturación basada en filtros primero y los diagnósticos. Elige el que
coincida con los datos que necesitas.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): extrae tuits de
  búsquedas, líneas de tiempo de perfiles, Listas e IDs de tuits, con más de 50
  filtros y exportaciones planas. Úsalo cuando necesites datos de tuits sin
  análisis. Desde $0.00015 por fila.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): extrae
  perfiles junto con sus publicaciones, respuestas, contenido multimedia y me
  gusta, a partir de nombres de usuario, IDs o URLs. Úsalo cuando partas de
  cuentas en lugar de búsquedas. Desde $0.00015 por fila.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): extrae
  respuestas, comentarios y conversaciones completas debajo de publicaciones,
  con más de 25 filtros. Úsalo cuando necesites la discusión debajo de los
  tuits. Desde $0.00015 por fila.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): extrae
  respuestas, citas, usuarios que retuitean, usuarios que dan me gusta e hilos
  para URLs o IDs de publicaciones en bloque. Úsalo cuando midas quién
  interactuó con las publicaciones. Desde $0.00015 por fila.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper):
  busca usuarios por nombre de usuario, biografía y ubicación, con filtros de
  seguidores, verificación, antigüedad de cuenta y ubicación. Úsalo cuando
  construyas listas de cuentas a partir de una búsqueda. Desde $0.00015 por
  perfil.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): extrae
  publicaciones, miembros y seguidores de Listas a partir de URLs o IDs de
  Listas. Úsalo cuando una Lista curada defina tus fuentes. Desde $0.00015 por
  fila.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): extrae
  información, publicaciones, búsquedas, miembros y moderadores de
  Comunidades. Úsalo cuando tus fuentes sean Comunidades de X. Desde $0.00015
  por fila.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): extrae
  tendencias en tiempo real por ubicación, con rango, volumen, consulta y
  WOEID. Úsalo cuando quieras saber qué es tendencia y dónde. Desde $0.00015
  por tendencia.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): extrae
  X Articles de formato largo como Markdown y texto, con portadas, autores,
  fechas y métricas. Úsalo cuando necesites cuerpos de artículo, no tuits.
  Desde $0.00015 por artículo.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): extrae o
  almacena fotos, videos y GIFs de publicaciones o perfiles, con opciones de
  MP4 y metadatos. Úsalo cuando necesites los archivos multimedia en sí.
  Desde $0.00015 por fila de contenido multimedia.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  rastrea menciones de marca con relevancia, sentimiento y respuestas de
  experiencia del cliente generadas por IA, y compara ejecuciones. Úsalo
  cuando monitorees una marca a lo largo del tiempo. Desde $0.0003 por tuit
  analizado.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  etiqueta la actitud, la intensidad y la probabilidad de sarcasmo de cada
  tuit con IA. Úsalo cuando necesites un sentimiento general sobre cualquier
  tema. Desde $0.0003 por tuit analizado.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  etiqueta la postura alcista, bajista, neutral o mixta, el tipo de contenido,
  la convicción y la relevancia del activo con IA. Úsalo cuando sigas
  acciones, cripto o conversaciones de trading. Desde $0.0003 por tuit
  analizado.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  etiqueta publicaciones de noticias por formato, atribución de fuente y
  relevancia del tema con IA. Úsalo cuando separes el reporte informativo del
  comentario. Desde $0.0003 por tuit analizado.
- [X (Twitter) Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  responde tus propias preguntas de categoría, puntuación y sí/no para cada
  tuit con IA. Úsalo cuando los análisis predefinidos no se ajusten a tus
  etiquetas. Desde $0.0003 por tuit analizado.

## ¿Necesitas más que extracción?

Xquik también ofrece 47 herramientas de panel, 129 operaciones REST,
webhooks firmados y un servidor MCP.

- [API documentation](https://docs.xquik.com/introduction): guías de la API
  REST
- [Followers API](https://docs.xquik.com/api-reference/x/followers): obtén
  los seguidores disponibles de una cuenta
- [Following API](https://docs.xquik.com/api-reference/x/following): obtén a
  quién sigue un usuario
- [List Members API](https://docs.xquik.com/api-reference/x/list-members):
  exporta miembros de una lista pública de X
- [MCP server](https://docs.xquik.com/mcp/overview): descubre y ejecuta
  operaciones JSON o de texto compatibles
- [Webhooks](https://docs.xquik.com/webhooks/overview): recibe eventos
  compatibles de Tweet y perfil

## Preguntas frecuentes

**¿Necesito una clave de API de X?** No. Este extractor usa su propia
infraestructura. No requiere inicio de sesión ni credenciales.

**¿Qué limita una ejecución?** El límite de elementos que solicites y el
límite de gasto de Apify detienen la ejecución. Los límites de cuenta y
plataforma de Apify también se aplican.

**¿Qué tan rápido es?** El tiempo de ejecución depende del tamaño del
objetivo, los filtros y la disponibilidad ascendente. Las ejecuciones con
filtros profundos guardan el progreso en Console cada 5 páginas. Esto
reduce el tráfico sin datos entre las descargas de página.

**¿Por qué mi ejecución devuelve menos filas que `maxItems`?** Filtros como
`minFollowers`, `verifiedOnly` y `bioContains` se aplican antes de escribir.
Relaja los filtros para obtener más resultados.

**¿Cuántos seguidores puedo extraer de una sola cuenta?** X pagina las
cuentas grandes en lotes. Aumenta el límite de tiempo de ejecución de Apify
para obtener más páginas. `maxItemsPerTarget` solo limita cada objetivo.

**¿El Actor reintenta los fallos temporales?** Sí. Hace hasta 3 intentos por
página para tiempos de espera, respuestas 429 y 5xx. Respeta `Retry-After`
cuando está presente. De lo contrario, usa retroceso exponencial. Los fallos
irrecuperables conservan los resultados parciales.

**¿Qué pasa cerca del límite de tiempo de ejecución de Apify?** El Actor no
agrega un plazo de ejecución más corto. Usa el límite configurado de Apify y
reserva los últimos 15 segundos para la finalización. Vuelca los perfiles,
guarda el checkpoint de la paginación, escribe el reporte y termina. Las
filas no aceptadas por el dataset no se facturan.

**¿Puedo reanudar donde lo dejé?** La entrada de cursor de reanudación aún
no está disponible. Volver a ejecutar el mismo objetivo empieza desde su
primera página disponible.

**¿Puedo usar la API de Apify para ejecutar esto?** Sí. Consulta la
[pestaña API](https://apify.com/xquik/x-follower-scraper/api) para ver
ejemplos en Python, JavaScript y cURL.

**¿Puedo programar extracciones recurrentes?** Sí. Usa la
[programación](https://docs.apify.com/platform/schedules) integrada de Apify
para ejecutar este Actor con un cron. Compara los datasets almacenados para
encontrar cambios en los seguidores.

**¿Dónde reporto problemas?** Usa la pestaña Issues en la página de este
Actor.

**¿Dónde están los documentos de la API?** Lee la
[API documentation](https://docs.xquik.com/introduction).
