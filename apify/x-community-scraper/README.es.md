[English](README.md) · **Español** · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer conecta Xquik MCP con agentes de codificación](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Mira cómo Framer usa los extractores de Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
con Claude Code, Codex, Cursor & más, desde el minuto 6:07.

Xquik es el servicio de scraping de X (Twitter) más rápido y económico del
mundo, con los datos de X más completos. X Community Scraper de Xquik recopila
información, posts, contenido multimedia, búsquedas, miembros & moderadores de
Comunidades, & encuentra Comunidades por palabra clave o tema. La mayoría de los
demás Actores de Apify cobran antes de filtrar o quitar duplicados. Xquik solo
cobra los resultados entregados, únicos y que cumplen tus filtros.

Recopila información, posts, contenido multimedia, coincidencias de palabras
clave, miembros & moderadores de Comunidades de Twitter a partir de URLs o IDs
de Comunidades. Encuentra Comunidades por palabra clave o tema, o enumera las
que X sugiere. Pagas **$0.00015 por fila entregada** & Apify factura aparte el
uso de la plataforma. No necesitas clave de API de X ni iniciar sesión.

> Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
> "Twitter" y "X" son marcas registradas de X Corp.

## ¿Qué hace X Community Scraper?

X Community Scraper de Xquik lee Comunidades públicas de X (Twitter) a partir de
sus URLs o IDs. Devuelve la información, los posts, el contenido multimedia, las
coincidencias de palabras clave, los miembros & los moderadores de cada
Comunidad. También encuentra Comunidades por palabra clave o tema, & enumera las
que X sugiere.

### Funciones principales

- Lee muchas Comunidades & recursos en 1 ejecución.
- Obtén información de la Comunidad con reglas, pregunta de ingreso, creador,
  administrador & tema.
- Recopila posts, primero los más recientes, o los posts Destacados que X mejor
  posiciona.
- Recopila la pestaña Multimedia, o busca en los posts de una Comunidad por
  palabra clave.
- Exporta miembros & moderadores, o encuentra miembros por nombre.
- Encuentra Comunidades por palabra clave o tema, con sus registros completos.
- Filtra posts por fecha, idioma, contenido multimedia & interacción.
- Filtra miembros por tamaño de audiencia, antigüedad de la cuenta &
  verificación.
- Los filtros & la eliminación de duplicados se aplican antes de facturar.
- Las ejecuciones conservan las filas entregadas & el progreso cuando Apify las
  reinicia.

### Casos de uso

- Crea listas de clientes potenciales con los miembros de una Comunidad de
  nicho.
- Sigue los comentarios sobre tu producto & las solicitudes de funciones en una
  Comunidad de usuarios.
- Encuentra lanzamientos, posts de contratación & noticias de financiamiento
  entre fundadores.
- Compara Comunidades por tamaño, tema & actividad.
- Lee las reglas de una Comunidad antes de publicar en ella.
- Encuentra a los moderadores & a los miembros con más seguidores de una
  Comunidad.
- Recopila posts con imágenes o videos para investigación creativa.

### ¿Qué datos puede extraer X Community Scraper?

Las filas de Comunidad usan `resultType: "community"`. Estos son los campos
principales.

| Campo             | Descripción                                                           |
| ----------------- | --------------------------------------------------------------------- |
| `id`              | ID de la Comunidad                                                    |
| `name`            | Nombre de la Comunidad                                                |
| `description`     | Descripción de la Comunidad                                           |
| `url`             | URL de la Comunidad                                                   |
| `member_count`    | Cantidad de miembros                                                  |
| `moderator_count` | Cantidad de moderadores                                               |
| `rules`           | Reglas de la Comunidad                                                |
| `question`        | Lo que la Comunidad pregunta a quien se une                           |
| `primary_topic`   | El tema en el que X clasifica la Comunidad                            |
| `searchTags`      | Etiquetas con las que X encuentra la Comunidad                        |
| `creator`         | El perfil público del creador                                         |
| `admin`           | El perfil público del administrador                                   |
| `membersFacepile` | Miembros que X muestra como vista previa en la página de la Comunidad |
| `is_nsfw`         | Si la Comunidad está marcada como sensible                            |
| `banner`          | URL, tamaño & colores principales del banner                          |
| `sourceTarget`    | La URL, el ID, la palabra clave o el tema que ingresaste              |

Cada recurso agrega filas de su propio tipo.

| `resultType`         | Recurso o entrada             | Una fila por          |
| -------------------- | ----------------------------- | --------------------- |
| `community`          | `info`, palabras clave, temas | Comunidad             |
| `communityTweet`     | `tweets`, `search`            | Post                  |
| `communityMedia`     | `media`                       | Post con foto o video |
| `communityMember`    | `members`, `memberNames`      | Miembro               |
| `communityModerator` | `moderators`                  | Moderador             |
| `communityTopic`     | `listTopics`                  | Tema                  |

Las filas de posts traen `text`, `createdAt`, `likeCount`, `replyCount`,
`retweetCount`, `viewCount`, `media` & el perfil `author`. Las filas de miembros
& moderadores traen los campos del perfil, como `username`, `followers`,
`verified` & `communityRole`. También traen `email` & `contactInfo`, los
correos, teléfonos & enlaces que publica cada perfil.

## ¿Cómo uso X Community Scraper para extraer datos de Comunidades?

¿Recién llegas a Apify? Primero
[crea una cuenta gratis](https://console.apify.com/sign-up?fpr=xquik). El plan
gratuito no pide tarjeta de crédito & te da $5 para gastar cada mes. A $0.00015
por fila, $5 alcanzan para hasta 33,000 filas, sin contar el uso de la
plataforma. Luego vuelve aquí & haz clic en Try for free.

Sigue estos pasos en Apify Console.

1. Abre un [ejemplo de tarea](#ejemplos-de-tareas) o la pestaña Input.
2. Pega URLs de Comunidades en `startUrls` o IDs en `communityIds`.
3. Elige `resources` & agrega filtros, como `sinceDate` o `minLikes`.
4. Define `maxItems` y luego haz clic en Start.
5. Exporta el dataset en JSON, CSV, Excel o HTML.

Cada receta de abajo es una entrada completa.

### Obtén información & posts recientes de una Comunidad

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["info", "tweets"],
  "maxItems": 200
}
```

`startUrls` acepta cada URL como texto simple o como objeto `{ "url": "..." }`.

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

Define `postsOrder` como `Top` para obtener los posts que X mejor posiciona.
Agrega `"media"` a `resources` para la pestaña Multimedia.

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

### Exporta miembros & moderadores

```json
{
  "communityIds": ["1493446837214187523"],
  "resources": ["members", "moderators"],
  "minFollowers": 1000,
  "maxItems": 1000
}
```

Los filtros de miembros se aplican a las filas de miembros & moderadores. Las
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
miembros de X. Cada miembro encontrado es 1 fila `communityMember` con su
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

Cada Comunidad encontrada trae sus reglas & los perfiles de su creador, su
administrador & sus miembros. Define `includeDetails` como `false` para una
ejecución más rápida con el registro corto. Activa `includeSuggested` para las
Comunidades que X sugiere, que pueden variar en cada ejecución, o `listTopics`
para todos los temas & sus subtemas.

## Ejemplos de tareas

Elige entre 50 tareas públicas. Cada una tiene una entrada acotada & una vista
de dataset que le corresponde. Edita una tarea antes de ejecutarla.

- [Obtén un resumen de una Comunidad de X](https://apify.com/xquik/x-community-scraper/examples/get-an-x-community-overview)
- [Obtén los detalles de una Comunidad de X con sus posts recientes](https://apify.com/xquik/x-community-scraper/examples/get-community-details-with-recent-posts)
- [Encuentra los posts de tecnología más destacados en una Comunidad de X](https://apify.com/xquik/x-community-scraper/examples/find-top-technology-posts-in-a-community)
- [Exporta los miembros de una Comunidad de X](https://apify.com/xquik/x-community-scraper/examples/export-x-community-members)
- [Exporta los miembros verificados de una Comunidad de X](https://apify.com/xquik/x-community-scraper/examples/export-verified-community-members)
- [Enumera los moderadores de una Comunidad de X](https://apify.com/xquik/x-community-scraper/examples/list-x-community-moderators)
- [Compara Comunidades de desarrolladores por tamaño & tema](https://apify.com/xquik/x-community-scraper/examples/compare-developer-communities-by-size)
- [Lee las reglas de una Comunidad de X antes de publicar](https://apify.com/xquik/x-community-scraper/examples/read-community-rules-before-you-post)
- [Encuentra posts de financiamiento en una Comunidad de startups](https://apify.com/xquik/x-community-scraper/examples/find-funding-posts-in-a-startup-community)
- [Encuentra posts de contratación en una Comunidad de ingeniería de software](https://apify.com/xquik/x-community-scraper/examples/find-hiring-posts-in-a-software-community)
- [Encuentra miembros de una Comunidad de startups con grandes audiencias](https://apify.com/xquik/x-community-scraper/examples/find-startup-community-members-with-big-audiences)
- [Audita de principio a fin una Comunidad pequeña de X](https://apify.com/xquik/x-community-scraper/examples/audit-a-small-community-end-to-end)

## ¿Cuánto cuesta extraer Comunidades de X?

X Community Scraper de Xquik cuesta $0.00015 por fila entregada en todos los
planes de Apify. Apify factura aparte tu uso de la plataforma. Xquik aplica un
solo cobro por cada fila de datos entregada. Los diagnósticos son gratis en la
salida `diagnostics`.

Para más volumen, [elige un plan de Apify](https://apify.com/pricing?fpr=xquik)
con más uso prepagado.

- No necesitas una suscripción de Xquik.
- No pagas tarifas aparte por inicio, Comunidad, recurso ni consulta.
- Una Comunidad encontrada cuesta 1 fila, con o sin su registro completo.
- Los filtros & la eliminación de duplicados se aplican antes de facturar. Nunca
  pagas por filas filtradas ni duplicadas.
- La configuración de cargo total máximo de Apify limita las filas entregadas.

Una ejecución que tiene un problema, o una ejecución grande, también escribe un
registro `run-report`. Una ejecución pequeña sin problemas lo omite & ahorra uso
de Apify. Activa `alwaysSaveRunRecords` para escribirlo en todas las
ejecuciones.

Para limitar lo que puede gastar una ejecución, consulta
[Opciones de ejecución](#opciones-de-ejecución).

## Ejecuciones vacías, parciales & detenidas

X Community Scraper de Xquik explica gratis las ejecuciones vacías, parciales &
detenidas. El estado de la ejecución dice por qué se detuvo. También cuenta los
resultados cobrados & los objetivos leídos.

### Resultados vacíos

El estado de una ejecución vacía te pide revisar tus objetivos & filtros. Las
filas filtradas nunca consumen tu límite de resultados. Una ejecución que lee
todos los objetivos & no recibe ninguna fila no escribe ningún registro. Su
estado dice por qué & qué cambiar. El Actor solo devuelve las Comunidades
públicas que X muestra. Los campos disponibles varían según la Comunidad.

### Ejecuciones parciales

Una extracción interrumpida escribe un diagnóstico `partial` gratis. Las filas
entregadas se quedan en el dataset. Lee `availableResults`, `failedTargets`,
`retryable` & `nextAction` antes de reintentar. Una salida exitosa del Actor
confirma la entrega, no una extracción completa.

### Causas de detención

El estado de la ejecución nombra cada causa de una detención anticipada.
`stopCauses` enumera cada causa con su propio `message`, `retryable` &
`nextAction`. Las causas son `target_not_found`, `target_failed`,
`pagination_safety_limit` & `deadline_reached`. Un objetivo inexistente entra en
la lista solo si otra causa detuvo la ejecución. La ejecución es `retryable` si
alguna causa lo es. El Actor no agrega un límite de tiempo propio.

## Entrada

La pestaña Input enumera todas las opciones. Indica URLs o IDs de Comunidades,
palabras clave o temas, o activa `includeSuggested` o `listTopics`. Todos los
demás campos son opcionales.

| Campo                          | Qué hace                                                                          |
| ------------------------------ | --------------------------------------------------------------------------------- |
| `startUrls`                    | URLs de Comunidades en `x.com`                                                    |
| `communityIds`                 | IDs numéricos de Comunidades                                                      |
| `resources`                    | `info`, `tweets`, `media`, `search`, `members`, `moderators`                      |
| `query`                        | Palabra clave para el recurso `search`                                            |
| `queryType`                    | Orden `Latest` o `Top` para la búsqueda por palabra clave                         |
| `postsOrder`                   | Orden `Latest` o `Top` para los posts                                             |
| `memberNames`                  | Nombres o nombres de usuario para buscar entre los miembros                       |
| `searchTerms`                  | Palabras clave para encontrar Comunidades                                         |
| `topics`                       | Nombres o IDs de temas, como `Technology`                                         |
| `includeSuggested`             | Agrega las Comunidades que X sugiere para unirte                                  |
| `listTopics`                   | Agrega todos los temas de Comunidades & sus subtemas                              |
| `includeDetails`               | Agrega registros completos a las Comunidades encontradas por palabra clave o tema |
| `maxItems`                     | Tope de filas entregadas en toda la ejecución                                     |
| `maxItemsPerTarget`            | Tope de filas para cada recurso de Comunidad                                      |
| `sinceDate`, `untilDate`       | Conserva posts dentro de una ventana de fechas                                    |
| `language`                     | Conserva posts en 1 código de idioma                                              |
| `mediaType`                    | Conserva posts con imágenes, videos, GIFs, enlaces o sin ninguno                  |
| `minViews`, `minLikes`         | Conserva posts por encima de una cantidad de visualizaciones o Me gusta           |
| `minReplies`, `minRetweets`    | Conserva posts por encima de una cantidad de respuestas o reposts                 |
| `nativeRetweets`               | Conserva solo los reposts nativos                                                 |
| `verifiedOnly`                 | Conserva autores, miembros o moderadores verificados                              |
| `minFollowers`, `maxFollowers` | Conserva miembros dentro de un rango de audiencia                                 |
| `minAccountAgeDays`            | Conserva miembros con al menos esta cantidad de días de antigüedad                |
| `blueVerifiedOnly`             | Conserva autores o miembros que X marca como verificados con Blue                 |
| `verifiedType`                 | Conserva miembros con 1 tipo de verificación                                      |
| `minFollowing`, `maxFollowing` | Conserva miembros dentro de un rango de cuentas seguidas                          |
| `minStatuses`, `maxStatuses`   | Conserva miembros dentro de un rango de cantidad de posts                         |
| `hasWebsite`, `hasLocation`    | Conserva miembros que indican un sitio web o una ubicación                        |
| `hasEmail`                     | Conserva miembros que publican un correo                                          |
| `businessEmailOnly`            | Conserva miembros con un correo que no es de un servicio gratuito                 |
| `emailDomains`                 | Conserva miembros con un correo en estos dominios                                 |
| `bioContains`                  | Conserva miembros cuya biografía tiene 1 de estas palabras                        |
| `locationContains`             | Conserva miembros cuya ubicación tiene este texto                                 |
| `usernameContains`             | Conserva miembros cuyo nombre de usuario tiene este texto                         |
| `dedupeAcrossTargets`          | Quita las filas repetidas entre Comunidades antes de facturar                     |

### Migra desde otro Actor de Comunidades

Los nombres `ranking` & `sort` funcionan como `postsOrder`. `Top` o `Relevance`
lee los posts Destacados. Si defines uno de ellos & `postsOrder`, gana el valor
de `postsOrder`. El registro de la ejecución nombra el campo que perdió.

### Elige las entradas correctas

- Para un vistazo rápido, mantén los recursos predeterminados `info` & `tweets`.
- Para listas de clientes potenciales, elige `members` con `minFollowers` &
  `verifiedOnly`.
- Para investigar productos, elige `search` con una `query` como `bug` o
  `pricing`.
- Para investigación creativa, elige `media` & define `mediaType`.
- Para descubrir Comunidades, envía `searchTerms` o `topics` sin IDs.

## Salida

Cada fila es un objeto JSON. Todas las filas incluyen `sourceTarget` con la
Comunidad, la palabra clave o el tema de entrada. X Community Scraper de Xquik
conserva los campos de origen & no inventa valores. El esquema del dataset da a
cada campo un título & una descripción.

Los ejemplos usan valores de muestra. Los resultados reflejan datos en vivo. Una
fila de información de Comunidad se ve así.

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

## Opciones de ejecución

- Define el cargo total máximo de Apify para limitar el costo de la ejecución.
  Deja `maxItems` alto para obtener la mayor cantidad de filas que permita ese
  presupuesto.
- Define `maxTotalChargeUsd` en la API de Apify, o Max cost per run en Console.
- Pon todas tus Comunidades en 1 ejecución. Cada ejecución le paga a Apify el
  mismo costo de inicio.
- `maxItemsPerTarget` limita las filas de cada recurso de Comunidad.
- `maxConcurrency` define cuántos recursos de Comunidad se ejecutan a la vez. El
  valor predeterminado es la configuración segura más rápida.

Selecciona `latest` en cada ejecución para recibir todas las correcciones
publicadas. Las tareas guardadas & las programaciones conservan su propia
elección de compilación, así que mantenla en `latest`.

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

## Preguntas frecuentes

Respuestas a preguntas comunes y, luego, dónde conseguir ayuda.

### ¿Necesito una clave de API de X o iniciar sesión?

No. X Community Scraper de Xquik no necesita clave de API de X, inicio de sesión
ni credenciales.

### ¿Cómo encuentro el ID de una Comunidad?

Abre la Comunidad en X. El ID es el número que sigue a `/i/communities/` en la
URL. También puedes pegar la URL completa en `startUrls`.

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

Todas las que indiques. `maxItems` & tu límite de gasto en Apify limitan las
filas.

### ¿Lee Comunidades privadas?

No. X Community Scraper de Xquik solo devuelve las Comunidades públicas que X
muestra.

### ¿Es legal extraer Comunidades de X?

X Community Scraper de Xquik solicita campos públicos de X. Los resultados
pueden contener datos personales. Confirma que tu propósito es lícito & cumple
las normas de privacidad aplicables. Si tienes dudas, consulta a un abogado
calificado.

### ¿Por qué mi ejecución no devolvió resultados?

Lee primero el estado de la ejecución. El estado de una ejecución vacía te pide
revisar tus objetivos & filtros. La salida gratuita `diagnostics` aparece cuando
algo requiere atención. Su `stopCauses` da a cada causa un `nextAction` que
puedes seguir. La ejecución enumera cada entrada que no puede leer & explica
cómo corregirla.

### ¿Puedo usar la API, las programaciones & las integraciones?

Sí. Elige entre 50 tareas públicas o la API REST de Xquik. La
[pestaña API](https://apify.com/xquik/x-community-scraper/api) tiene ejemplos en
Python, JavaScript & cURL. Las
[programaciones](https://docs.apify.com/platform/schedules) de Apify ejecutan X
Community Scraper de Xquik con un cron. Los agentes usan
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Usa `latest`
salvo que necesites una compilación anterior.

### ¿Puedo obtener una solución a medida?

Sí. Describe lo que necesitas en la
[pestaña Issues](https://apify.com/xquik/x-community-scraper/issues). Xquik
también ofrece un panel, una API REST, un servidor MCP & webhooks. Encuentra el
sitio web de Xquik en su [perfil de Apify](https://apify.com/xquik).

### ¿Dónde consigo ayuda?

Abre un issue en la
[pestaña Issues](https://apify.com/xquik/x-community-scraper/issues) con el ID
de la ejecución. Los diagnósticos gratuitos del almacén de clave-valor explican
las ejecuciones que requieren atención. Una ejecución que no recibe ninguna fila
explica el motivo en su estado.
