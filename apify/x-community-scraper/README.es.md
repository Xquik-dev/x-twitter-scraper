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
mundo, con los datos de X más completos. X Community Scraper de Xquik recopila
información, posts, contenido multimedia, búsquedas, miembros y moderadores de
Comunidades, y encuentra Comunidades por palabra clave o tema. La mayoría de los
demás Actores de Apify cobran antes de filtrar o quitar duplicados. Xquik solo
cobra los resultados entregados, únicos y que cumplen tus filtros.

Recopila información, posts, contenido multimedia, coincidencias de palabras
clave, miembros y moderadores de Comunidades de X (antes Twitter). Usa URLs o
IDs de Comunidades. Encuentra Comunidades por palabra clave o tema, o enumera
las que X sugiere. Pagas **$0.00015 por fila entregada**, y Apify factura aparte
el uso de la plataforma. No necesitas clave de API de X ni iniciar sesión.

> Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
> "Twitter" y "X" son marcas registradas de X Corp.

## ¿Qué hace X Community Scraper?

X Community Scraper de Xquik lee Comunidades públicas de X (Twitter) a partir de
sus URLs o IDs. Devuelve la información, los posts, el contenido multimedia, las
coincidencias de palabras clave, los miembros y los moderadores de cada
Comunidad. También encuentra Comunidades por palabra clave o tema, y enumera las
que X sugiere.

### Funciones principales

- Lee muchas Comunidades y recursos en 1 ejecución.
- Obtén información de la Comunidad con reglas, pregunta de ingreso, creador,
  administrador y tema.
- Recopila posts, primero los más recientes, o los posts Destacados que X mejor
  posiciona.
- Recopila la pestaña Multimedia, o busca en los posts de una Comunidad por
  palabra clave.
- Exporta miembros y moderadores, o encuentra miembros por nombre.
- Encuentra Comunidades por palabra clave o tema, con su registro completo.
- Filtra posts por fecha, idioma, contenido multimedia e interacción.
- Filtra miembros por tamaño de audiencia, antigüedad de la cuenta y
  verificación.
- Los filtros y la eliminación de duplicados se aplican antes de facturar.
- Las ejecuciones conservan las filas entregadas y el progreso cuando Apify las
  reinicia.

### Casos de uso

- Crea listas de prospectos con los miembros de una Comunidad de nicho.
- Sigue los comentarios sobre tu producto y las solicitudes de funciones en una
  Comunidad de usuarios.
- Encuentra lanzamientos, posts de contratación y noticias de financiamiento
  entre fundadores.
- Compara Comunidades por tamaño, tema y actividad.
- Lee las reglas de una Comunidad antes de publicar en ella.
- Encuentra a los moderadores y a los miembros con más seguidores de una
  Comunidad.
- Recopila posts con imágenes o videos para investigación creativa.

### ¿Qué datos puede extraer X Community Scraper?

Las filas de Comunidad usan `resultType: "community"`. Estos son los campos
principales:

| Campo             | Descripción                                              |
| ----------------- | -------------------------------------------------------- |
| `id`              | ID de la Comunidad                                       |
| `name`            | Nombre de la Comunidad                                   |
| `description`     | Descripción de la Comunidad                              |
| `url`             | URL de la Comunidad                                      |
| `member_count`    | Cantidad de miembros                                     |
| `moderator_count` | Cantidad de moderadores                                  |
| `rules`           | Reglas de la Comunidad                                   |
| `question`        | Lo que la Comunidad pregunta a quien se une              |
| `primary_topic`   | El tema en el que X clasifica la Comunidad               |
| `searchTags`      | Etiquetas con las que X encuentra la Comunidad           |
| `creator`         | El perfil público del creador                            |
| `admin`           | El perfil público del administrador                      |
| `membersFacepile` | Vista previa de miembros en la página de la Comunidad    |
| `is_nsfw`         | Si la Comunidad está marcada como sensible               |
| `banner`          | URL, tamaño y colores principales del banner             |
| `sourceTarget`    | La URL, el ID, la palabra clave o el tema que ingresaste |

Cada recurso agrega filas de su propio tipo:

| `resultType`         | Recurso o entrada             | Una fila por          |
| -------------------- | ----------------------------- | --------------------- |
| `community`          | `info`, palabras clave, temas | Comunidad             |
| `communityTweet`     | `tweets`, `search`            | Post                  |
| `communityMedia`     | `media`                       | Post con foto o video |
| `communityMember`    | `members`, `memberNames`      | Miembro               |
| `communityModerator` | `moderators`                  | Moderador             |
| `communityTopic`     | `listTopics`                  | Tema                  |

Las filas de posts incluyen `text`, `createdAt`, `likeCount`, `replyCount`,
`retweetCount`, `viewCount`, `media` y el perfil `author`. Las filas de miembros
y moderadores incluyen los campos del perfil, como `username`, `followers`,
`verified` y `communityRole`.

## ¿Cómo uso X Community Scraper para extraer datos de Comunidades?

Sigue estos pasos en Apify Console:

1. Abre un [ejemplo de tarea](#ejemplos-de-tareas) o la pestaña Input.
2. Pega URLs de Comunidades en `startUrls` o IDs en `communityIds`.
3. Elige `resources` y agrega filtros como `sinceDate` o `minLikes`.
4. Define `maxItems` y haz clic en Start.
5. Exporta el dataset en JSON, CSV, Excel o HTML.

Cada receta de abajo es una entrada completa.

### Obtén información y posts recientes de una Comunidad

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["info", "tweets"],
  "maxItems": 200
}
```

`startUrls` acepta cada URL como texto simple o como objeto `{ "url": "..." }`:

```json
{
  "startUrls": [
    "https://x.com/i/communities/1493446837214187523",
    { "url": "https://x.com/i/communities/1493446837214187523" }
  ]
}
```

### Recopila los posts Destacados

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["tweets"],
  "postsOrder": "Top",
  "minLikes": 50,
  "maxItems": 100
}
```

Define `postsOrder` como `Top` para los posts que X mejor posiciona. Agrega
`"media"` a `resources` para la pestaña Multimedia.

### Busca en los posts de una Comunidad

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["search"],
  "query": "pricing",
  "queryType": "Latest",
  "maxItems": 100
}
```

### Exporta miembros y moderadores

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["members", "moderators"],
  "minFollowers": 1000,
  "maxItems": 1000
}
```

Los filtros de miembros se aplican a las filas de miembros y moderadores. Las
filas filtradas nunca llegan al dataset, así que nunca pagas por ellas.

### Encuentra miembros por nombre

```json
{
  "communityIds": ["1493446837214187523"],
  "memberNames": ["marckohlbrugge"],
  "maxItems": 100
}
```

X revisa hasta 10 cuentas coincidentes por nombre, igual que la búsqueda de
miembros de x.com. Cada miembro encontrado es 1 fila `communityMember` con su
`communityRole`. Una ejecución con `memberNames` no lee ningún otro recurso,
salvo que `resources` lo incluya.

### Encuentra Comunidades por palabra clave o tema

```json
{
  "searchTerms": ["artificial intelligence"],
  "topics": ["Technology"],
  "maxItems": 100
}
```

Cada Comunidad encontrada trae sus reglas y los perfiles de su creador,
administradores y miembros. Define `includeDetails` como `false` para una
ejecución más rápida con el registro corto. Activa `includeSuggested` para las
Comunidades que X sugiere, que pueden variar en cada ejecución, o `listTopics`
para todos los temas y sus subtemas.

## Ejemplos de tareas

Elige entre 50 tareas públicas. Cada una tiene una entrada acotada y una vista
del dataset que le corresponde. Edita una tarea antes de ejecutarla.

- [Obtén un resumen de una Comunidad de X](https://apify.com/xquik/x-community-scraper/examples/get-an-x-community-overview)
- [Obtén los detalles de una Comunidad de X con sus posts recientes](https://apify.com/xquik/x-community-scraper/examples/get-community-details-with-recent-posts)
- [Encuentra los mejores posts de tecnología en una Comunidad de X](https://apify.com/xquik/x-community-scraper/examples/find-top-technology-posts-in-a-community)
- [Exporta los miembros de una Comunidad de X](https://apify.com/xquik/x-community-scraper/examples/export-x-community-members)
- [Exporta los miembros verificados de una Comunidad de X](https://apify.com/xquik/x-community-scraper/examples/export-verified-community-members)
- [Enumera los moderadores de una Comunidad de X](https://apify.com/xquik/x-community-scraper/examples/list-x-community-moderators)
- [Compara Comunidades de desarrolladores por tamaño y tema](https://apify.com/xquik/x-community-scraper/examples/compare-developer-communities-by-size)
- [Lee las reglas de una Comunidad de X antes de publicar](https://apify.com/xquik/x-community-scraper/examples/read-community-rules-before-you-post)
- [Encuentra posts de financiamiento en una Comunidad de startups](https://apify.com/xquik/x-community-scraper/examples/find-funding-posts-in-a-startup-community)
- [Encuentra posts de contratación en una Comunidad de ingeniería de software](https://apify.com/xquik/x-community-scraper/examples/find-hiring-posts-in-a-software-community)
- [Encuentra miembros de una Comunidad de startups con grandes audiencias](https://apify.com/xquik/x-community-scraper/examples/find-startup-community-members-with-big-audiences)
- [Audita de principio a fin una Comunidad pequeña de X](https://apify.com/xquik/x-community-scraper/examples/audit-a-small-community-end-to-end)

## ¿Cuánto cuesta extraer Comunidades de X?

X Community Scraper de Xquik cuesta $0.00015 por fila entregada en todos los
planes de Apify. Apify factura aparte tu uso de la plataforma. Xquik aplica un
cobro por cada fila de datos entregada. Los diagnósticos son gratis en la salida
`diagnostics`.

- No necesitas una suscripción a Xquik.
- No pagas tarifas aparte por inicio, Comunidad, recurso ni consulta.
- Una Comunidad encontrada cuesta 1 fila, con o sin su registro completo.
- Los filtros y la eliminación de duplicados se aplican antes de facturar. Nunca
  pagas por filas filtradas o duplicadas.
- La configuración de cargo total máximo de Apify limita las filas entregadas.

Una ejecución que encuentra un problema, o una ejecución grande, también escribe
un registro `run-report`. Una ejecución pequeña sin problemas lo omite y ahorra
uso de Apify. Activa `alwaysSaveRunRecords` para escribirlo en todas las
ejecuciones.

Para limitar lo que puede gastar una ejecución, consulta
[Opciones de ejecución](#opciones-de-ejecución).

## Ejecuciones vacías, parciales y detenidas

X Community Scraper de Xquik explica gratis las ejecuciones vacías, parciales y
detenidas. El estado de la ejecución dice por qué se detuvo. También cuenta los
resultados cobrados y los objetivos leídos.

### Resultados vacíos

El estado de una ejecución vacía te pide revisar tus objetivos y filtros. Las
filas filtradas nunca consumen tu límite de resultados. Una ejecución que lee
todos los objetivos y no recibe ninguna fila no escribe ningún registro. Su
estado explica por qué y qué cambiar. El Actor solo devuelve las Comunidades
públicas que X muestra. Los campos disponibles varían según la Comunidad.

### Ejecuciones parciales

Una extracción interrumpida escribe un diagnóstico `partial` gratis. Las filas
entregadas se quedan en el dataset. Lee `availableResults`, `failedTargets`,
`retryable` y `nextAction` antes de reintentar. Una salida exitosa del Actor
confirma la entrega, no una extracción completa.

### Causas de detención

El estado de la ejecución nombra cada causa de una detención anticipada.
`stopCauses` enumera cada causa con su propio `message`, `retryable` y
`nextAction`. Las causas son `target_not_found`, `target_failed`,
`pagination_safety_limit` y `deadline_reached`. Un objetivo inexistente entra en
la lista solo si otra causa detuvo la ejecución. La ejecución es `retryable` si
alguna causa lo es. El Actor no agrega su propio límite de tiempo.

## Entrada

La pestaña Input enumera todas las opciones. Indica URLs o IDs de Comunidades,
palabras clave o temas, o activa `includeSuggested` o `listTopics`. Todos los
demás campos son opcionales.

| Campo                          | Qué hace                                                                      |
| ------------------------------ | ----------------------------------------------------------------------------- |
| `startUrls`                    | URLs de Comunidades en x.com                                                  |
| `communityIds`                 | IDs numéricos de Comunidades                                                  |
| `resources`                    | `info`, `tweets`, `media`, `search`, `members`, `moderators`                  |
| `query`                        | Palabra clave para el recurso `search`                                        |
| `queryType`                    | Orden `Latest` o `Top` para la búsqueda por palabra clave                     |
| `postsOrder`                   | Orden `Latest` o `Top` para los posts                                         |
| `memberNames`                  | Nombres o nombres de usuario para buscar entre los miembros                   |
| `searchTerms`                  | Palabras clave para encontrar Comunidades                                     |
| `topics`                       | Nombres o IDs de temas, como `Technology`                                     |
| `includeSuggested`             | Agrega las Comunidades que X sugiere para unirte                              |
| `listTopics`                   | Agrega todos los temas de Comunidades y sus subtemas                          |
| `includeDetails`               | Agrega registros completos a Comunidades encontradas por palabra clave o tema |
| `maxItems`                     | Límite de filas entregadas en toda la ejecución                               |
| `maxItemsPerTarget`            | Límite de filas para cada recurso de Comunidad                                |
| `sinceDate`, `untilDate`       | Conserva posts dentro de un rango de fechas                                   |
| `language`                     | Conserva posts en 1 código de idioma                                          |
| `mediaType`                    | Conserva posts con imágenes, videos, GIFs, enlaces o sin ninguno              |
| `minViews`, `minLikes`         | Conserva posts con un mínimo de visualizaciones o Me gusta                    |
| `minReplies`, `minRetweets`    | Conserva posts con un mínimo de respuestas o reposts                          |
| `nativeRetweets`               | Conserva solo los reposts nativos                                             |
| `verifiedOnly`                 | Conserva autores, miembros o moderadores verificados                          |
| `minFollowers`, `maxFollowers` | Conserva miembros dentro de un rango de audiencia                             |
| `minAccountAgeDays`            | Conserva miembros con una antigüedad mínima en días                           |
| `dedupeAcrossTargets`          | Quita las filas repetidas entre Comunidades antes de facturar                 |

### Elige las entradas correctas

- Para un vistazo rápido, mantén los recursos predeterminados `info` y `tweets`.
- Para listas de prospectos, elige `members` con `minFollowers` y
  `verifiedOnly`.
- Para investigar productos, elige `search` con una `query` como `bug` o
  `pricing`.
- Para investigación creativa, elige `media` y define `mediaType`.
- Para descubrir Comunidades, envía `searchTerms` o `topics` sin IDs.

## Salida

Cada fila es un objeto JSON. Todas las filas incluyen `sourceTarget` con la
Comunidad, la palabra clave o el tema de entrada. X Community Scraper de Xquik
conserva los campos de origen y no inventa valores. El esquema del dataset da a
cada campo un título y una descripción.

Los ejemplos usan valores de muestra. Los resultados reflejan datos en vivo. Una
fila de información de Comunidad se ve así:

```json
{
  "resultType": "community",
  "sourceTarget": "1493446837214187523",
  "id": "1493446837214187523",
  "name": "Sample Community",
  "description": "A place to share what you build.",
  "member_count": 1200,
  "moderator_count": 4,
  "primary_topic": "Technology"
}
```

Exporta el dataset en JSON, CSV, Excel o HTML.

## Opciones de ejecución

- Define el cargo total máximo de Apify para limitar el costo de la ejecución.
  Deja `maxItems` alto para obtener la mayor cantidad de filas que permita ese
  presupuesto.
- Define `maxTotalChargeUsd` en la API de Apify, o Max cost per run en Console.
- Pon todas tus Comunidades en 1 ejecución. Cada ejecución paga a Apify el mismo
  costo de inicio.
- `maxItemsPerTarget` limita las filas de cada recurso de Comunidad.
- `maxConcurrency` define cuántos recursos de Comunidad se ejecutan a la vez. El
  valor predeterminado es la configuración segura más rápida.

Selecciona `latest` en cada ejecución para obtener todas las correcciones
publicadas. Las tareas guardadas y las programaciones conservan su propia
elección de compilación, así que mantenla en `latest`.

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
- [API de información de Comunidad](https://docs.xquik.com/api-reference/x/community-info):
  obtén el registro de 1 Comunidad
- [API de posts de Comunidad](https://docs.xquik.com/api-reference/x/community-tweets):
  obtén los posts de una Comunidad
- [API de miembros de Comunidad](https://docs.xquik.com/api-reference/x/community-members):
  exporta los miembros de una Comunidad
- [API para encontrar Comunidades](https://docs.xquik.com/api-reference/x/community-find):
  encuentra Comunidades por palabra clave
- [Servidor MCP](https://docs.xquik.com/mcp/overview): descubre las herramientas
  compatibles
- [Webhooks](https://docs.xquik.com/webhooks/overview): entrega de eventos
  firmados

## Preguntas frecuentes

Respuestas a preguntas comunes y, luego, dónde conseguir ayuda.

### ¿Necesito una clave de API de X o iniciar sesión?

No. X Community Scraper de Xquik no necesita clave de API de X, inicio de sesión
ni credenciales.

### ¿Cómo encuentro el ID de una Comunidad?

Abre la Comunidad en x.com. El ID es el número que sigue a `/i/communities/` en
la URL. También puedes pegar la URL completa en `startUrls`.

### ¿Puedo exportar los miembros de una Comunidad de X a CSV o Excel?

Sí. Elige el recurso `members` y luego exporta el dataset en CSV, Excel, JSON o
HTML.

### ¿Puedo encontrar una Comunidad sin su ID?

Sí. Envía palabras clave en `searchTerms` o temas en `topics`. Cada Comunidad
encontrada es 1 fila con su registro completo.

### ¿Puedo obtener los posts Destacados de una Comunidad?

Sí. Define `postsOrder` como `Top`. Agrega `minLikes` o `minViews` para
conservar solo los posts más populares.

### ¿Cuántas Comunidades puedo extraer en 1 ejecución?

Todas las que indiques. `maxItems` y tu tope de gasto en Apify limitan las
filas.

### ¿Lee Comunidades privadas?

No. X Community Scraper de Xquik solo devuelve las Comunidades públicas que X
muestra.

### ¿Es legal extraer Comunidades de X?

X Community Scraper de Xquik solicita campos públicos de X. Los resultados
pueden contener datos personales. Confirma que tu propósito es lícito y cumple
las normas de privacidad aplicables. Si tienes dudas, consulta a un abogado
calificado.

### ¿Por qué mi ejecución no devolvió resultados?

Lee primero el estado de la ejecución. El estado de una ejecución vacía te pide
revisar tus objetivos y filtros. La salida gratuita `diagnostics` aparece cuando
algo requiere atención. Su `stopCauses` da a cada causa un `nextAction` que
puedes seguir. La ejecución enumera cada entrada que no puede leer y explica
cómo corregirla.

### ¿Puedo usar la API, las programaciones y las integraciones?

Sí. Elige entre 50 tareas públicas o la API REST de Xquik. La
[pestaña API](https://apify.com/xquik/x-community-scraper/api) tiene ejemplos en
Python, JavaScript y cURL. Las
[programaciones](https://docs.apify.com/platform/schedules) de Apify ejecutan X
Community Scraper de Xquik con un cron. Los agentes usan
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Usa `latest`
salvo que necesites una compilación anterior.

### ¿Puedo obtener una solución a medida?

Sí. Visita [xquik.com](https://xquik.com) o lee la
[documentación de la API](https://docs.xquik.com/introduction). Ahí encontrarás
el panel, la API, el servidor MCP y los webhooks.

### ¿Dónde consigo ayuda?

Abre un issue en la página del Actor o escribe a <support@xquik.com> con el ID
de la ejecución. Los diagnósticos gratuitos del almacén de clave-valor explican
las ejecuciones que requieren atención. Una ejecución que no recibe ninguna fila
explica el motivo en su estado.
