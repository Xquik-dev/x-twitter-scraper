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
mundo, con los datos de X más completos. X Follower Scraper de Xquik recopila
seguidores, cuentas seguidas, miembros de Listas, suscriptores y miembros de
Comunidades. Pruebas comparativas públicas demuestran que es el más económico y
rápido de 10 Actores que extraen seguidores. Sus filas traen 1.9x los campos del
Actor mediano, como muestra la
[prueba comparativa de abajo](#prueba-comparativa). La mayoría de los demás
Actores de Apify cobran antes de filtrar o quitar duplicados. Xquik solo cobra
los resultados entregados, únicos y que cumplen tus filtros.

Extrae seguidores, cuentas seguidas, seguidores verificados, miembros de Listas,
suscriptores de Listas y miembros de Comunidades de X (Twitter). X Follower
Scraper de Xquik cuesta **desde $0.00015 por perfil entregado en cualquier plan
de Apify**. Apify factura aparte el uso de la plataforma. No necesitas iniciar
sesión en X, y Xquik no cobra tarifa de inicio ni de consulta.

> Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
> "Twitter" y "X" son marcas registradas de X Corp.

## ¿Qué hace X Follower Scraper?

X Follower Scraper de Xquik devuelve los datos públicos de perfil disponibles de
seguidores, cuentas seguidas, Listas y Comunidades. Cada fila indica su objetivo
de origen y su relación.

### Comportamiento principal

- Los filtros y la eliminación de duplicados se aplican antes de facturar.
- De forma predeterminada, un perfil que comparten varios objetivos aparece y se
  cobra 1 sola vez.
- Una ejecución acepta nombres de usuario, IDs numéricos, URLs y rutas cortas.
- El modo merge registra los perfiles compartidos, los orígenes, las relaciones
  y `overlapCount`.
- Los registros de la ejecución muestran los tiempos de cada página en
  `fetchDurationMs`, `processingDurationMs`, `pushDurationMs`,
  `statusDurationMs` y `fullPageDurationMs`.
- Las ejecuciones conservan las filas entregadas y el progreso cuando Apify las
  reinicia.

### ¿Qué datos puede extraer X Follower Scraper?

| Campo             | Descripción                                                             |
| ----------------- | ----------------------------------------------------------------------- |
| `id`              | ID numérico del usuario de X                                            |
| `username`        | Nombre de usuario (sin `@`)                                             |
| `name`            | Nombre visible                                                          |
| `description`     | Biografía                                                               |
| `followers`       | Cantidad de seguidores                                                  |
| `following`       | Cantidad de cuentas seguidas                                            |
| `statusesCount`   | Total de posts publicados                                               |
| `mediaCount`      | Total de contenido multimedia subido                                    |
| `favouritesCount` | Total de Me gusta dados                                                 |
| `verified`        | Marca pública combinada de verificación Blue o antigua                  |
| `verifiedType`    | `blue`, `business`, `government` o `none`                               |
| `location`        | Ubicación que indicó el usuario                                         |
| `url`             | URL del sitio web del perfil                                            |
| `profilePicture`  | URL de la foto de perfil (tamaño completo)                              |
| `coverPicture`    | URL de la imagen de encabezado                                          |
| `createdAt`       | Cadena de fecha y hora de creación de la cuenta, según X                |
| `sourceTarget`    | Nombre de usuario o ID del que extrajiste este perfil                   |
| `sourceRelation`  | Relación: `followers`, `following`, `list_members`, ...                 |
| `sourceUrl`       | URL exacta donde apareció el perfil                                     |
| `sourceTargets`   | Todos los objetivos que coincidieron con este perfil en modo merge      |
| `sourceRelations` | Todas las relaciones que coincidieron con este perfil en modo merge     |
| `sourceUrls`      | Todas las URLs de origen que coincidieron con este perfil en modo merge |
| `overlapCount`    | Cantidad de pares relación-objetivo coincidentes en modo merge          |
| `resultType`      | Tipo de fila en los modos de salida full y raw                          |
| `raw`             | Perfil de origen seguro antes del formato propio del Actor              |

Las filas siguen el contrato de perfil público. Cubre identidad, conteos,
verificación, disponibilidad, afiliados, datos profesionales y biografías. La
atribución del origen, las entidades y los IDs de posts fijados siguen
disponibles. Consulta OpenAPI para ver los campos exactos.

Define `outputMode: "raw"` o `includeRaw: true` para agregar un campo `raw`.
Guarda una copia segura del perfil de origen. El modo compacto es el
predeterminado.

`verifiedOnly` acepta perfiles públicos con verificación Blue o antigua. Si las
marcas del origen se contradicen, gana el estado verificado.

Las filas nunca incluyen estados que solo ve el espectador. Xquik quita las
marcas de seguimiento, bloqueo, silencio, Mensajes Directos (MD), notificaciones
y otras similares. La salida raw también las quita.

## Casos de uso

- Enriquece leads & crea conjuntos de datos de investigación con más campos por
  perfil. Nuestra fila mediana tuvo 28 campos el 2026-09-28. Es 1.9x la mediana
  de otros 9 Actores.
- Exporta los seguidores de la competencia para buscar leads.
- Compara audiencias entre tu cuenta, la competencia y figuras públicas.
- Filtra por cantidad de seguidores y verificación para encontrar perfiles que
  encajen.
- Exporta los miembros de Comunidades de X.
- Crea datasets públicos de redes sociales para investigación.
- Segmenta bases de seguidores por palabra clave de la biografía, ubicación o
  tipo de perfil.

## ¿Cómo uso X Follower Scraper para extraer datos de seguidores?

1. Abre X Follower Scraper de Xquik en Apify Console.
2. Agrega URLs de perfiles, Listas o Comunidades, nombres de usuario de X o IDs
   numéricos.
3. Elige una relación, como `followers` o `verified_followers`.
4. Define `maxItems` y los filtros de perfil que quieras.
5. Inicia la ejecución.
6. Exporta el dataset en JSON, CSV, Excel o HTML.

Las entradas de abajo cubren los trabajos más comunes.

### Pega URLs de perfiles o Listas

Pega URLs de perfiles, Listas o Comunidades. Cada URL define la relación que se
extrae:

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

### Nombres de usuario en bloque

`twitterHandles` es un atajo para muchos objetivos `/<handle>/followers`. Los
nombres de usuario funcionan con o sin `@`:

```json
{
  "twitterHandles": ["elonmusk", "nasa", "openai"],
  "relation": "followers",
  "maxItems": 1000
}
```

`relation` define qué se extrae de cada nombre de usuario. Usa `followers`,
`following` o `verified_followers`.

La misma entrada también acepta `username`, `usernames` y `user_names` como
alias.

### Ejecuciones con varias relaciones

Define `relations` para leer varias relaciones de los mismos nombres de usuario:

```json
{
  "usernames": ["nasa"],
  "relations": ["followers", "following"],
  "maxItems": 1000
}
```

También funcionan booleanos como `getFollowers`, `getFollowing`,
`getVerifiedFollowers`, `getListMembers`, `getListFollowers` y
`getCommunityMembers`.

### Extrae por IDs numéricos de usuarios, Listas o Comunidades

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

Los IDs numéricos de usuario también aceptan los alias `twitterUserIds` y
`user_ids`.

`relation` se aplica a los IDs numéricos de usuario. Los IDs de Listas usan
miembros de forma predeterminada. Los IDs de Comunidades siempre usan miembros.
`maxItemsPerTarget` evita que el primer objetivo grande consuma todo `maxItems`.

### Filtra antes de pagar

Agrega filtros para que solo los perfiles que coinciden entren a tu dataset:

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

El Actor puede revisar más perfiles de los que escribe. Solo pagas las filas que
pasan todos los filtros y entran a tu dataset.

Separa las alternativas de `bioContains` con comas o saltos de línea. Un perfil
pasa cuando su biografía contiene cualquiera de los términos. La comparación no
distingue mayúsculas de minúsculas.

### Encuentra audiencias en común

Usa el modo merge para comparar competidores, Listas, Comunidades o tipos de
relación:

```json
{
  "twitterHandles": ["openai", "anthropicai", "GoogleDeepMind"],
  "relation": "followers",
  "dedupeMode": "merge",
  "maxItemsPerTarget": 5000,
  "maxItems": 15000
}
```

La salida tiene 1 fila por perfil único. Los perfiles compartidos incluyen
`sourceTargets`, `sourceRelations`, `sourceUrls`, `sourceTargetKeys` y
`overlapCount`. Ordena por `overlapCount` o exporta las filas a CSV. Deja
`maxItems` lo bastante alto para que cada objetivo agregue filas. Usa
`maxItemsPerTarget` para definir la profundidad de cada cuenta.

### Formatos de URL aceptados

| URL                                         | Relación                                               |
| ------------------------------------------- | ------------------------------------------------------ |
| `https://x.com/<handle>/followers`          | `followers`                                            |
| `https://x.com/<handle>/verified_followers` | `verified_followers`                                   |
| `https://x.com/<handle>/following`          | `following`                                            |
| `https://x.com/<handle>`                    | `relation` predeterminada (followers si no la defines) |
| `https://x.com/i/lists/<id>/members`        | `list_members`                                         |
| `https://x.com/i/lists/<id>/followers`      | `list_followers`                                       |
| `https://x.com/i/lists/<id>`                | `list_members`                                         |
| `https://x.com/i/communities/<id>/members`  | `community_members`                                    |
| `https://x.com/i/communities/<id>`          | `community_members`                                    |
| `<handle>/followers`                        | `followers`                                            |
| `<handle>/following`                        | `following`                                            |
| `<handle>/verified_followers`               | `verified_followers`                                   |
| `lists/<id>/members`                        | `list_members`                                         |
| `lists/<id>/followers`                      | `list_followers`                                       |
| `communities/<id>/members`                  | `community_members`                                    |

Las URLs de `twitter.com` y `mobile.twitter.com` también funcionan en todos los
casos. Las URLs sin `https://`, como `x.com/nasa`, también funcionan.

## Ejemplos de tareas

Elige entre 50 tareas públicas. Cada una tiene una entrada acotada y una vista
de dataset correspondiente. Cada tarea trae una audiencia o un filtro real.
Edítala antes de ejecutarla.

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

## ¿Cuánto cuesta extraer seguidores de X?

X Follower Scraper de Xquik cuesta $0.00015 por perfil entregado en cualquier
plan de Apify. Apify factura aparte tu uso de la plataforma. Xquik aplica un
cobro por cada fila de datos entregada. No necesitas una suscripción aparte de
Xquik, y Xquik no cobra tarifa de inicio. Los inicios, los objetivos y la
relación elegida no agregan cargos de consulta.

Una ejecución puede leer muchos objetivos. Los topes, la eliminación de
duplicados, la atribución y el cobro se mantienen exactos en todos ellos.

- Los filtros se aplican antes de que un perfil entre a tu dataset, así que las
  filas filtradas no cuestan nada.
- Los filtros numéricos son `minFollowers`, `maxFollowers`, `minFollowing`,
  `maxFollowing`, `minStatuses`, `maxStatuses` y `minAccountAgeDays`.
- Los filtros de perfil son `verifiedOnly`, `verifiedType`, `bioContains`,
  `locationContains`, `usernameContains`, `hasWebsite` y `hasLocation`.
- El Actor quita las repeticiones entre objetivos antes de escribir. Define
  `dedupeAcrossTargets: false` para conservarlas.
- Xquik nunca cobra las filas que el dataset rechaza.
- Los diagnósticos son gratis en la salida `diagnostics`.
- Las ejecuciones sin entrada, con entrada inválida o sin salida escriben 1
  registro con instrucciones en la salida gratuita `diagnostics`.

Una ejecución grande, o una que tiene un problema, también escribe un registro
`run-report`. Su `estimatedChargeUsd` usa el precio actual por evento que Apify
le informa al Actor. Una ejecución pequeña sin problemas lo omite y ahorra uso
de Apify. Activa `alwaysSaveRunRecords` para escribirlo en todas las
ejecuciones.

## Prueba comparativa

X Follower Scraper de Xquik superó a otros 9 Actores de seguidores en costo y
velocidad. Su fila mediana tuvo 28 campos, 1.9x la mediana de los demás.

| Actor                                                  | Perfiles útiles | Costo por perfil útil | Perfiles útiles por segundo | Campos por fila | Ejecución pública                                                                                                                                                                                                |
| ------------------------------------------------------ | --------------: | --------------------: | --------------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| xquik/x-follower-scraper                               |            1000 |             $0.000155 |                        68.5 |              27 | [Ver ejecución](https://console.apify.com/view/runs/X8Vnx8Ytuk5AzWiK7)                                                                                                                                           |
| xquik/x-follower-scraper                               |             999 |             $0.000155 |                        38.4 |              28 | [Ver ejecución](https://console.apify.com/view/runs/lPqjfUn8767FpIDis)                                                                                                                                           |
| b2b_leads/X-Real-Time-Data                             |             286 |             $0.000388 |                         3.1 |              21 | [Ver ejecución](https://console.apify.com/view/runs/IkQButA6cVz4ys4GM)                                                                                                                                           |
| kaitoeasyapi/premium-x-follower-scraper-following-data |             356 |             $0.000506 |                        21.9 |              50 | [Ver ejecución](https://console.apify.com/view/runs/cJgj15HLBA50LEUf0)                                                                                                                                           |
| api-ninja/x-twitter-followers-scraper                  |             350 |             $0.000809 |                         7.0 |               8 | [Ver ejecución](https://console.apify.com/view/runs/XjJ4UPKAILSz0Droz)                                                                                                                                           |
| altimis/scweet                                         |             332 |             $0.000922 |                         1.1 |              21 | [Ver ejecución](https://console.apify.com/view/runs/qVGvT7TPAJEHCuR42)                                                                                                                                           |
| apidojo/twitter-user-scraper                           |             323 |             $0.001160 |                         7.3 |              25 | [Ver ejecución](https://console.apify.com/view/runs/Xnf7rh8jK6764gP1f)                                                                                                                                           |
| atomus/twitter-scraper                                 |             323 |             $0.001272 |                         6.2 |              13 | [Ver ejecución](https://console.apify.com/view/runs/MWz1l0cTcfPcEnaiH)                                                                                                                                           |
| practicaltools/cheap-simple-twitter-api                |             283 |             $0.002036 |                         6.5 |               4 | [Ejecución 1](https://console.apify.com/view/runs/Zhvi7LsfpHdQNKcGb), [Ejecución 2](https://console.apify.com/view/runs/IsJj4fa8pFUG7uhlK), [Ejecución 3](https://console.apify.com/view/runs/2W7n8fpEqoxiXq6oX) |
| maximedupre/twitter-scraper                            |             320 |             $0.002192 |                         2.1 |              15 | [Ejecución 1](https://console.apify.com/view/runs/HblUkhgI2svp1LBGs), [Ejecución 2](https://console.apify.com/view/runs/37yQFzgydzJoWfa39), [Ejecución 3](https://console.apify.com/view/runs/mtBoKcocaM4BUzZmm) |
| seemuapps/x-followers-following-scraper                |             286 |             $0.003504 |                         3.9 |               9 | [Ejecución 1](https://console.apify.com/view/runs/1r3je034X2qhFGgLj), [Ejecución 2](https://console.apify.com/view/runs/dc4ztVP3n2eemgiNQ), [Ejecución 3](https://console.apify.com/view/runs/gWPiBT00G7D9IJ0Cj) |

Cada Actor leyó los seguidores de NASA, SpaceX & esa el 2026-09-28. Todas las
ejecuciones usaron el nivel Bronze. Un perfil útil es único, tiene 30+ días, 1+
seguidor & 1+ publicación. El costo es el gasto total del cliente por perfil
útil. El nuestro incluye el uso de Apify que pagan nuestros clientes. Una fila
con 3 ejecuciones las suma. Campos por fila es la mediana de campos no vacíos,
incluidos los anidados. Una lista cuenta como 1 campo. Abre una ejecución para
ver su entrada, registro & conjunto de datos.

## Entrada

La pestaña Input enumera todas las opciones. Agrega al menos 1 de `startUrls`,
`twitterHandles`, `userIds`, `listIds` o `communityIds`. Sus alias documentados
también cuentan. Todos los demás campos son opcionales.

Prueba estas entradas:

- Agrega el nombre de usuario de un competidor a `twitterHandles` con
  `relation: "followers"`.
- Pega `https://x.com/<handle>/verified_followers` en Start URLs para obtener
  perfiles verificados.
- Pega la URL de una Lista en Start URLs para revisar sus miembros.
- Agrega 2 o más nombres de usuario. Un perfil compartido aparece 1 vez, bajo el
  primer objetivo. Usa `dedupeMode: "merge"` para conservar 1 fila con cada
  objetivo coincidente. Define `dedupeAcrossTargets: false` para conservar 1
  fila por objetivo.

### Entrada en Console y API

El formulario de Console tiene estos controles:

- El campo Start URLs acepta cadenas de URL u objetos `{ "url": "..." }`. Su
  editor JSON conserva los 2 formatos de la API.
- Relation, Output Mode y Dedupe Mode son listas con opciones fijas.
- Relations es una lista de selección múltiple para ejecuciones con varias
  relaciones.
- Los límites de resultados aceptan números enteros de 1 o más.
- Los filtros numéricos de perfil aceptan números enteros de 0 o más.

Usa los campos canónicos en integraciones nuevas. Los alias siguen funcionando
en entradas JSON, API, SDK, automatizaciones y tareas. `outputVariant` e
`includeRaw` son alias de Output Mode. `dedupeAcrossTargets` es un alias de
Dedupe Mode. El formulario visual oculta los alias que duplican un control
canónico. Las entradas JSON y las tareas guardadas que usan alias siguen
funcionando. Las entradas guardadas con `dedupeAcrossTargets: false` o
`dedupeMode: "none"` conservan 1 fila por objetivo.

### Migra desde otro Actor de seguidores

Pega la entrada que ya usas. X Follower Scraper de Xquik lee los nombres de
campo que usan otros Actores de seguidores de X. Los asigna a sus propios
campos. Los nombres canónicos siguen siendo el valor documentado predeterminado.
Un alias nunca descarta un campo ni cambia lo que pagas.

| Campo que ya usas                                                                     | Xquik lo lee como     |
| ------------------------------------------------------------------------------------- | --------------------- |
| `twitterHandles`, `usernames`, `user_names`, `handles`, `userNameList`, `screenNames` | `twitterHandles`      |
| `username`, `handle`, `screenName`, como una sola cadena                              | `twitterHandles`      |
| `twitterUserIds`, `user_ids`, `userIdList`                                            | `userIds`             |
| `user_id`, `userId`, como una sola cadena                                             | `userIds`             |
| `startUrls`, `urls`, `targets`, `profileUrls`, `accountUrls`                          | `startUrls`           |
| `profileUrl`, como una sola cadena                                                    | `startUrls`           |
| `getFollowers`, `getFollowing`                                                        | `relations`           |
| `type` con `followers` o `following`                                                  | `relation`            |
| `maxResults`, `max_results`, `resultsLimit`, `count`                                  | `maxItems`            |
| `scrapeAllResults`                                                                    | sin tope por objetivo |

2 nombres significan otra cosa aquí. En algunos Actores, `maxFollowers` y
`maxFollowing` limitan cuántas filas devuelve una ejecución. En X Follower
Scraper de Xquik, filtran perfiles por su cantidad de seguidores y de cuentas
seguidas. Usa `maxItems` para limitar las filas. El Actor no tiene unidad de
página, así que reemplaza `maxPages` por `maxItems`.

### Usa siempre la compilación más reciente

Las ejecuciones desde Store usan la compilación `latest` de X Follower Scraper
de Xquik. En las llamadas a la API, omite el reemplazo de compilación o pasa
`build=latest`. Actualiza las tareas y las integraciones que fijan una
compilación anterior. Las compilaciones fijadas nunca cambian solas.

## Salida

Cada perfil es un objeto JSON. El modo compacto devuelve campos públicos
normalizados, campos de versión del esquema y metadatos de origen, si existen.

Los esquemas del dataset y de run-report describen cada campo devuelto. Los
campos primitivos también traen ejemplos para agentes e integraciones generadas.

Los valores de muestra de abajo son ilustrativos. Tus filas traen datos en vivo
al momento de la ejecución. Una fila compacta se ve así:

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

`dedupeMode: "merge"` agrega campos de coincidencia:

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

Exporta el dataset de Apify en JSON, CSV, Excel o HTML.

## Opciones de ejecución

Define `maxTotalChargeUsd` en la API de Apify para fijar un tope de gasto. En
Console, el mismo límite se llama Max cost per run. Apify pasa ese límite a X
Follower Scraper de Xquik como `ACTOR_MAX_TOTAL_CHARGE_USD`. El Actor se detiene
antes de aceptar filas que superen el límite. Deja `maxItems` vacío para obtener
todos los perfiles que permita el tope de gasto. Define `maxItems` y
`maxItemsPerTarget` solo si quieres menos perfiles de los que permite el
presupuesto.

- Combina filtros de perfil, como `minFollowers`, `verifiedType` y
  `bioContains`, para acotar el dataset que se cobra.
- De forma predeterminada, las ejecuciones solo conservan perfiles únicos entre
  objetivos. Define `dedupeAcrossTargets: false` para conservar 1 fila por
  objetivo.
- Define `dedupeMode: "merge"` para obtener 1 fila por perfil con cada objetivo
  de origen coincidente.
- Define `outputMode: "full"` para obtener campos opcionales del perfil, si
  existen. Incluyen IDs de posts fijados, entidades y metadatos del perfil.
- Define `outputMode: "raw"` o `includeRaw: true` para incluir un objeto `raw`
  depurado junto a los campos normalizados.
- Programa ejecuciones repetidas y guarda cada dataset para comparar IDs de
  perfil. Los monitores de Xquik emiten eventos compatibles de posts y perfiles,
  no cambios en las listas de seguidores.

## Ejecuciones vacías, parciales y detenidas

X Follower Scraper de Xquik explica las ejecuciones vacías, parciales y
detenidas con diagnósticos gratuitos. Una salida exitosa del Actor confirma la
entrega, no una extracción completa.

Una ejecución interrumpida escribe un diagnóstico `partial` gratis. Los
resultados ya entregados quedan en el dataset. Lee `availableResults`,
`failedTargets`, `retryable` y `nextAction` antes de reintentar.

El estado de la ejecución dice por qué se detuvo. También cuenta los resultados
cobrados, los duplicados omitidos y los objetivos leídos. El estado nombra cada
causa de una detención anticipada. `stopCauses` enumera cada causa con su propio
`message`, `retryable` y `nextAction`. Las causas son `target_not_found`,
`target_protected`, `target_failed` y `deadline_reached`. Una cuenta inexistente
entra en la lista solo si otra causa detuvo la ejecución. La ejecución es
`retryable` si alguna causa lo es.

X mantiene privadas las listas de una cuenta protegida. Ese objetivo recibe
`target_protected` en 1 diagnóstico gratuito, y la ejecución lee los demás
objetivos.

`failedTargets` cuenta los objetivos que se detuvieron tras un error. Estas
ejecuciones usan `completionReason: "partial_failure"`. Sus perfiles entregados
siguen siendo filas de datos cobrables.

El tiempo límite predeterminado de Apify es `0`, así que las ejecuciones no
tienen límite de tiempo. La ejecución sigue hasta alcanzar el tope o hasta
quedarse sin perfiles. Aun así, puedes definir un tiempo límite finito. En ese
caso, `completionReason: "deadline_reached"` significa que ese límite está
cerca. La ejecución guarda los perfiles y el informe, y sale limpiamente antes
del límite. Los perfiles entregados se cobran 1 vez.

Las ejecuciones con problemas siempre escriben `run-report`, incluso las que
terminan sin entrada o con entrada inválida. `run-report` también tiene un campo
`version` con la versión exacta publicada del código del Actor.

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
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): extrae respuestas,
  comentarios y conversaciones completas debajo de posts con más de 25 filtros.
  Úsalo cuando necesites la conversación debajo de los posts. Desde $0.00015 por
  fila.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): extrae
  respuestas, citas, cuentas que hicieron repost e hilos de URLs o IDs de posts
  en bloque. Úsalo cuando midas quién interactuó con los posts. Desde $0.00015
  por fila.
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
- [Followers API](https://docs.xquik.com/api-reference/x/followers): obtiene los
  seguidores disponibles de una cuenta
- [Following API](https://docs.xquik.com/api-reference/x/following): obtiene las
  cuentas que sigue un usuario
- [List Members API](https://docs.xquik.com/api-reference/x/list-members):
  exporta los miembros de una Lista pública de X
- [Servidor MCP](https://docs.xquik.com/mcp/overview): descubre y ejecuta
  operaciones compatibles en JSON o texto
- [Webhooks](https://docs.xquik.com/webhooks/overview): recibe eventos
  compatibles de posts y perfiles

## Preguntas frecuentes

### ¿Necesito una clave de API de X?

No. No necesitas clave de API de X, inicio de sesión ni credenciales.

### ¿Qué limita una ejecución?

Tu límite de ítems y tu límite de gasto en Apify detienen la ejecución. Los
límites de tu cuenta y de la plataforma de Apify siguen vigentes.

### ¿Qué tan rápido es?

La velocidad de X Follower Scraper de Xquik depende del tamaño del objetivo, los
filtros y la disponibilidad de X. Sus 2 ejecuciones de la
[prueba comparativa](#prueba-comparativa) llegaron a 38.4 y 68.5 perfiles útiles
por segundo.

### ¿Por qué mi ejecución devuelve menos filas que `maxItems`?

Los filtros como `minFollowers`, `verifiedOnly` y `bioContains` se aplican antes
de escribir. Relaja los filtros para obtener más resultados. X Follower Scraper
de Xquik también quita las repeticiones entre objetivos.

### ¿Cuántos seguidores puedo extraer de una sola cuenta?

Todos los que X muestra para esa cuenta. La ejecución sigue hasta tu tope, tu
límite de gasto o el final de la lista. `maxItemsPerTarget` solo limita cada
objetivo.

### ¿El Actor reintenta los fallos temporales?

Sí. Se recupera solo de los errores temporales de X. Tras un fallo grave, la
ejecución conserva sus resultados parciales.

### ¿Qué pasa cerca del tiempo límite de ejecución de Apify?

X Follower Scraper de Xquik no agrega su propio plazo más corto. Antes de tu
límite, guarda los perfiles, escribe el informe y sale. Las filas que nunca
llegan al dataset no cuestan nada.

### ¿Puedo retomar donde lo dejé?

Todavía no. Una ejecución nueva sobre el mismo objetivo empieza desde el
principio.

### ¿Puedo usar la API de Apify para ejecutarlo?

Sí. Consulta la [pestaña API](https://apify.com/xquik/x-follower-scraper/api)
para ver ejemplos en Python, JavaScript y cURL.

### ¿Puedo programar extracciones recurrentes?

Sí. Usa la [programación](https://docs.apify.com/platform/schedules) integrada
de Apify para ejecutar este Actor con un cron. Compara los datasets guardados
para detectar cambios en los seguidores.

### ¿Es legal extraer datos de X?

X Follower Scraper de Xquik solicita campos públicos de perfiles de X. Los
resultados pueden contener datos personales, incluidas las ubicaciones que
indican los usuarios. Confirma que tu propósito es lícito y cumple las normas de
privacidad aplicables. Si tienes dudas, consulta a un abogado calificado.

### ¿Dónde consigo ayuda?

Abre un issue en la pestaña Issues de la página del Actor. También puedes
escribir a support@xquik.com con el ID de la ejecución.

### ¿Dónde está la documentación de la API?

Lee la [documentación de la API](https://docs.xquik.com/introduction).