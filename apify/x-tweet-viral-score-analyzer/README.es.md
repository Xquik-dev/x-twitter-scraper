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
mundo, con los datos de X más completos. X Tweet Viral Score Analyzer de Xquik
califica cada post. Agrega una estimación de Viral Score y un veredicto. La
mayoría de los demás Actores de Apify cobran antes de filtrar o quitar
duplicados. Xquik solo cobra los resultados entregados, únicos y que cumplen tus
filtros. El precio por post incluye los costos de IA. No necesitas cuenta de IA,
tokens ni clave.

Descubre por qué los posts (antes tuits) se difunden o fracasan, y conserva los
datos originales del post. **X Tweet Viral Score Analyzer with AI** de Xquik
recopila los posts que coinciden. La IA califica 8 rasgos de cada post. El Actor
convierte esas respuestas en una estimación de Viral Score y un veredicto. Cada
fila conserva los Me gusta, reposts, respuestas y citas reales. Compara cada
estimación con lo que pasó.

- **Viral Score por post.** Reglas fijas y versionadas calculan cada puntaje de
  0 a 100.
- **8 respuestas de rasgos.** Muestran por qué un post obtuvo un puntaje alto o
  bajo.
- **Topes fijos.** Limitan los posts que parecen spam, ragebait o redacción
  genérica de máquina.
- **Registros de origen completos.** Cada fila conserva todos los campos que
  muestra el post.

El Viral Score estima qué tan bien funciona la redacción. No predice Me gusta ni
visualizaciones. No reproduce la forma en que X ordena los posts.

> Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
> "Twitter" y "X" son marcas registradas de X Corp.

## Cómo revisar el Viral Score de un tuit

1. Agrega términos de búsqueda, nombres de usuario, URLs de posts o IDs de
   posts.
2. Define `maxItems` y los filtros de extracción que necesite tu tarea.
3. Describe tu audiencia en `analysis.context` o deja el valor predeterminado.
4. Inicia la ejecución y abre la vista de dataset `Viral Score`.

```json
{
  "searchTerms": ["from:NASA -filter:replies -filter:retweets"],
  "maxItems": 150,
  "analysis": { "context": "Space fans & general readers." }
}
```

### Qué responde el Actor

| Pregunta       | Respuesta                                                          |
| -------------- | ------------------------------------------------------------------ |
| Gancho         | 0 sin gancho, 1 inicio claro, 2 inicio contundente                 |
| Claridad       | 0 confuso, 1 cuesta entenderlo, 2 claro a la primera lectura       |
| Informativo    | 0 nada nuevo, 1 idea conocida, 2 aprendizaje útil                  |
| Gracioso       | 0 sin gracia, 1 algo divertido, 2 tan gracioso que se comparte     |
| Ragebait       | Probabilidad de que el post busque sobre todo provocar indignación |
| Escrito por IA | Probabilidad de que el texto parezca redacción genérica de máquina |
| Spam           | Probabilidad de spam, estafa, sorteo o granja de interacción       |
| Reacción       | Compartir, responder, dar Me gusta, discutir o ignorar             |

La pregunta Escrito por IA solo evalúa el estilo. No establece quién escribió el
post.

### Cómo funciona el Viral Score

El gancho, la claridad, el valor que aporta y la reacción esperada suben el
puntaje. Un texto que suena a redacción genérica de máquina lo baja.

Los topes fijos limitan el puntaje del posible spam, el ragebait y la redacción
genérica de máquina. El puntaje es un número entero de 0 a 100.

| Veredicto     | Puntaje  |
| ------------- | -------- |
| `send_it`     | 70 a 100 |
| `edit_first`  | 40 a 69  |
| `sleep_on_it` | 0 a 39   |

`viral.weights` indica la versión de estas reglas, como `viral_lite:1`. Cambia
cada vez que cambian las reglas. El puntaje es `null` después de un análisis
fallido u omitido. También es `null` cuando falta una respuesta de rasgo
predeterminada. X Tweet Viral Score Analyzer de Xquik nunca completa un puntaje
faltante con una suposición.

## Estimación del Algorithm Score

X publicó sus pesos de clasificación en el repositorio `xai-org/x-algorithm`,
archivo `home-mixer/params/param.rs`. X Tweet Viral Score Analyzer de Xquik
aplica 4 de ellos a los conteos públicos de cada post:

| Conteo    | Peso |
| --------- | ---- |
| Me gusta  | 0.5  |
| Respuesta | 5    |
| Repost    | 1    |
| Cita      | 5    |

`viral.algorithmWeightedSum` es la suma de cada conteo multiplicado por su peso.
`viral.algorithmScore` divide esa suma entre las visualizaciones y la multiplica
por 1,000. Un post sin conteo de visualizaciones usa los seguidores en su lugar.
`viral.algorithmBasis` indica el divisor, `views` o `followers`. Compara solo
puntajes con la misma base. `viral.weightsVersion` indica los pesos, como
`x_algorithm_params:2026-09-18`.

La estimación tiene estos límites:

- X multiplica cada peso por una probabilidad que predice para un espectador. El
  Actor multiplica por los conteos observados. El resultado es una estimación,
  no el puntaje que calcula X.
- X no publica pesos para los elementos guardados ni las visualizaciones. La
  suma deja fuera a los 2.
- X usa más señales que estas 4, como el tiempo de permanencia y las veces que
  se comparte. Los datos públicos no las muestran.
- El puntaje es `null` cuando un post no tiene visualizaciones ni conteo de
  seguidores.
- La IA nunca ve estos conteos. Solo lee el texto y el contexto.

## Predicción frente a resultado real

X Tweet Viral Score Analyzer de Xquik compara cada Viral Score con lo que pasó.
`viral.actualEngagementRate` es `log10(1 + weighted sum per 1,000 followers)`.
El logaritmo limita el efecto de un solo post muy grande. La tasa es `null`
cuando el conteo de seguidores falta o es 0.

El bloque `viral.calibration` del resumen de la ejecución informa estos campos:

- `comparedPosts` cuenta los posts con un Viral Score y una tasa real.
- `rankCorrelation` es una correlación de rangos de Spearman de -1 a 1. Muestra
  si los puntajes más altos coincidieron con tasas más altas.
- `calibrationScore` es 100 veces la correlación, con un mínimo de 0.
- `overperformers` y `underperformers` enumeran hasta 5 posts cada uno. Cada
  post trae su ID, su URL, su Viral Score, su tasa real y su `gap`.

`gap` es la tasa real estandarizada menos el Viral Score estandarizado. Un post
entra en una lista cuando su gap llega a 1 desviación estándar.

La calibración tiene estos límites:

- Con menos de 10 posts comparados, la calibración es `null` con el motivo
  `too_few_posts`. Los puntajes o tasas idénticos dan `no_variation`.
- La correlación es aproximada.
- La calibración describe una sola ejecución. Un puntaje bajo puede significar
  que los posts difieren en momento, tema o audiencia. No prueba que la
  estimación de la redacción haya fallado.
- Los posts recientes todavía no terminan de acumular interacción. Compara posts
  de antigüedad similar.

## Informe de cuentas

El bloque `viral.accounts` del resumen de la ejecución informa sobre cada nombre
de usuario de autor:

- Cantidad de posts, Viral Score promedio y tasa de interacción real promedio.
- El mejor y el peor post por Viral Score, con su ID y su URL.
- El Viral Score promedio por grupo. Los grupos son la hora de publicación en
  UTC y el rango de longitud del texto. También si tiene contenido multimedia,
  si tiene enlace y si es un hilo propio.

Los rangos de longitud del texto son `short`, `medium`, `long` y `extended`.
`short` llega hasta 80 caracteres, `medium` hasta 200 y `long` hasta 280.
`extended` cubre los textos más largos. Un post de hilo propio responde a su
propio autor.

El informe tiene estos límites:

- El informe enumera los 50 nombres de usuario con más posts puntuados.
- El informe sigue los primeros 1,000 nombres de usuario de una ejecución.
  `untrackedPosts` cuenta los posts puntuados de nombres de usuario posteriores
  y los posts sin nombre de usuario.
- Un grupo con pocos posts dice poco. Revisa `posts` antes de comparar
  promedios.
- Los grupos muestran qué coincidió en esta ejecución. No muestran causas.

## Tabla de clasificación

El bloque `viral.leaderboard` del resumen de la ejecución clasifica los nombres
de usuario del informe de cuentas. `byViralScore` clasifica por Viral Score
promedio. `byActualEngagementRate` clasifica por tasa real promedio. Cada lista
guarda hasta 20 nombres de usuario con `rank`, `posts` y `average`.

La tabla de clasificación tiene estos límites:

- Un nombre de usuario necesita al menos 3 posts puntuados para entrar.
- La lista de tasas omite los nombres de usuario sin conteo de seguidores.
- Los empates se resuelven por más posts y luego por el nombre de usuario.
- La tabla de clasificación cubre los posts de una ejecución, no todo el
  historial de una cuenta.

## Puntúa un borrador antes de publicar

Pega tu propio texto en `texts`. X Tweet Viral Score Analyzer de Xquik lo puntúa
y no obtiene nada de X.

```json
{
  "texts": [
    "We shipped dark mode today. Try it and tell us what breaks.",
    "5 things we learned from 1,000 support tickets."
  ],
  "analysis": { "context": "Developers who use our app." }
}
```

- Cada texto se convierte en 1 fila con `viralScore`, `viralVerdict` y
  `viral.stops`.
- `tweet.id` es `text:1`, `text:2` y así sucesivamente, y `tweet.type` es
  `text`.
- Un borrador todavía no tiene Me gusta ni visualizaciones, así que
  `viral.algorithmScore` queda en `null`.
- Cada texto analizado cuesta lo mismo que un post analizado, $0.0003.
- Con `texts` definido, la ejecución solo analiza esos textos. Ejecuta los
  objetivos de X por separado.

## ¿Cuánto cuesta revisar el Viral Score?

X Tweet Viral Score Analyzer de Xquik cuesta desde $0.0003 por post analizado.
No cobra tarifa de inicio. El precio incluye la recopilación, los costos de IA y
el Viral Score. No necesitas cuenta de IA, tokens ni clave. El precio cubre
hasta 8 preguntas y 64,000 bytes de contexto por post. Cada definición de
pregunta puede usar hasta 8,000 bytes.

Los filtros de extracción y la eliminación de duplicados se aplican antes del
análisis. Nunca pagas por filas filtradas ni duplicadas. Los análisis fallidos,
los análisis omitidos y las filas de diagnóstico no tienen cargo por resultado.
Apify factura aparte el uso de la plataforma para cómputo, almacenamiento y
transferencia, según las tarifas de tu plan. La pestaña Pricing lo muestra.

## Ejemplos de entrada y salida

La entrada de arriba está lista para copiar. Una fila de salida abreviada se ve
así:

```json
{
  "tweet": { "id": "2100493544842494265", "text": "...", "likeCount": 12 },
  "viral": {
    "score": 74,
    "verdict": "send_it",
    "weights": "viral_lite:1",
    "stops": [],
    "algorithmScore": 8.5,
    "algorithmBasis": "views",
    "algorithmWeightedSum": 17,
    "actualEngagementRate": 0.7202,
    "weightsVersion": "x_algorithm_params:2026-09-18"
  },
  "viralScore": 74,
  "viralVerdict": "send_it",
  "viralAlgorithmScore": 8.5,
  "viralActualEngagementRate": 0.7202,
  "analysis": {
    "status": "succeeded",
    "answers": [
      { "questionId": "hook", "type": "score", "value": 2, "confidence": 0.84 },
      { "questionId": "spam", "type": "probability", "probability": 0.03 },
      {
        "questionId": "reaction",
        "type": "choice",
        "value": "share",
        "confidence": 0.7
      }
    ]
  }
}
```

Cada resultado contiene `tweet`, `analysis` y `viral`. Las respuestas incluyen
tipos, versiones de pregunta y las probabilidades disponibles. `viral.stops`
enumera los topes fijos que limitaron el puntaje. Una fila con un análisis
fallido u omitido conserva el post recopilado y un `reason`. Su lista de
respuestas queda vacía y su puntaje es `null`.

Los diagnósticos gratuitos del almacén de clave-valor explican las entradas
inválidas, los resultados faltantes y las recopilaciones interrumpidas. El
informe de la ejecución separa las filas recopiladas, los análisis cobrados y
los cargos pendientes.

## Resumen de ejecución y respuestas planas

Una ejecución escribe un registro `analysis-summary` en su almacén de
clave-valor en 4 casos:

- Tiene un problema o es grande.
- Define `monitor` sin `baselineDatasetId`, como primera ejecución de una serie.
- Su comparación encuentra un post cambiado, nuevo o no comparable.
- Tiene `alwaysSaveRunRecords` activado.

Las demás ejecuciones omiten el registro. Su estado nombra la respuesta
principal, como `Average Viral Score: 64.` Una comparación sin cambios indica
`No change since the earlier run.` Una ejecución grande, o una que tiene un
problema, también escribe `run-report`. Lo mismo hace una ejecución con
`alwaysSaveRunRecords` activado. `run-report` repite el resumen en
`results.analysisSummary`.

El resumen cuenta las filas analizadas, fallidas y omitidas. Suma la interacción
y resume cada pregunta.

- El bloque `viral` informa `averageScore` y la cantidad de cada veredicto.
  También cuenta las filas con puntaje y sin puntaje.
- El mismo bloque guarda `calibration`, `accounts` y `leaderboard`, descritos
  arriba.
- Las preguntas `score` informan una media y una media ponderada por
  interacción.
- La división de `reaction` muestra cuántos posts caen en cada reacción.
- `top` enumera los 3 posts con más interacción por reacción.
- Cada fila enumera `sourceDomains`, los nombres de host a los que enlaza.
- Cada fila enumera los `cashtags` de su texto, como `$NVDA`.
- Con `monitor.baselineDatasetId` definido, el bloque `monitor` del resumen
  cuenta los estados de comparación. Enumera hasta 50 filas cambiadas.

Una ejecución vacía informa conteos en 0 y un promedio `null`.

Cada fila de resultado también trae `viralScore`, `viralVerdict`,
`viralAlgorithmScore` y `viralActualEngagementRate`. También trae `answers`, un
mapa plano con el ID de cada pregunta como clave. Cada valor es la categoría, el
puntaje o la probabilidad elegidos. La vista de dataset `Viral Score` y las
exportaciones a CSV o Excel muestran estas columnas. Quedan junto al post, así
que las hojas de cálculo no necesitan procesar JSON. Las filas fallidas u
omitidas traen un mapa vacío.

## Comparar con una ejecución anterior

Pasa `monitor.baselineDatasetId`, el ID del dataset de una ejecución anterior
completada con la misma configuración de análisis. La comparación lee las filas
de esa ejecución. Funciona aunque esa ejecución haya omitido su resumen. Luego,
cada fila recibe un objeto `monitor`. Su estado puede ser:

- `first_run` sin línea base.
- `new_to_baseline` para posts que la ejecución anterior no tenía.
- `unchanged` o `changed` para posts que sí tenía.

`changes` enumera cada decisión de rasgo que pasó de `previous` a `current`. Las
decisiones se comparan por categoría, nivel de puntaje redondeado o sí o no con
corte en 0.5. Una decisión cuenta como cambiada solo cuando se mueve con
claridad. Los casi empates entre ejecuciones quedan en `unchanged`.

Una línea base que supera `maxBaselineRows`, o que usa otra configuración,
detiene la ejecución antes de la recopilación. La ejecución escribe entonces una
fila de diagnóstico. `maxBaselineRows` es 100,000 de forma predeterminada.

## Ejemplos de tareas

Elige entre 50 tareas públicas. Cada una parte de una búsqueda real en inglés y
un `maxItems` acotado. Usa la vista de dataset `Viral Score`. Algunas agregan
contexto de audiencia. Edita la búsqueda o el contexto antes de ejecutarla.

- [Viral score of AI startup launch tweets](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-ai-startup-launch-tweets)
- [Viral score of SaaS founder build in public posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-saas-founder-build-in-public-posts)
- [Viral score of Product Hunt launch posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-product-hunt-launch-posts)
- [Viral score of Developer tool announcements](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-developer-tool-announcements)
- [Viral score of Open source release posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-open-source-release-posts)
- [Viral score of Crypto project announcements](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-crypto-project-announcements)
- [Viral score of Parenting humor posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-parenting-humor-posts)
- [Viral score of Office humor posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-office-humor-posts)
- [Viral score of Pet photo captions](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-pet-photo-captions)
- [Viral score audit of NASA posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-nasa-posts)
- [Viral score audit of Duolingo posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-duolingo-posts)
- [Viral score audit of Wendy's posts](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-wendys-posts)

Las demás tareas cubren más temas y cuentas de marcas en la página del Actor.

## Preguntas frecuentes y soporte

### ¿Necesito una cuenta de IA, una clave de API de X o iniciar sesión?

No. X Tweet Viral Score Analyzer de Xquik incluye los costos de IA en su precio.
No necesitas cuenta de IA, tokens ni clave. Tampoco necesitas clave de API de X,
inicio de sesión ni credenciales.

### ¿Un puntaje alto significa que un post se hará viral?

No. El puntaje estima qué tan bien funciona la redacción para un lector general.
El momento, el tamaño de la audiencia, el contenido multimedia y la suerte
también deciden el alcance. Compara los puntajes con los conteos reales de
interacción de cada fila antes de confiar en ellos.

### ¿Puedo usar mis propias preguntas?

Sí. Las `analysis.questions` personalizadas reemplazan las predeterminadas.
Envía de 1 a 8 preguntas `choice`, `score` o `probability`. Las preguntas
`choice` aceptan de 2 a 255 categorías. Las preguntas `score` necesitan al menos
2 niveles ordenados. El Viral Score necesita las 8 preguntas predeterminadas,
así que con preguntas personalizadas queda en `null`.

### ¿Por qué una fila volvió con `analysis.status` en `failed` o `skipped`?

El Actor recopiló y entregó el post, pero el análisis con IA no se completó.
`analysis.reason` indica la causa. `context_limit` significa que tu contexto y
tus objetivos no dejan espacio para el post. `service_unavailable` significa que
el servicio de análisis no estuvo disponible por un momento. Estas filas no
tienen cargo por resultado ni puntaje. Acorta `analysis.context` o vuelve a
ejecutar los IDs afectados.

El Actor analiza incluso los posts más largos que `maxContextBytes`. Primero
recorta los posts citados y respondidos, y luego el post. En ese caso,
`analysis.contextAvailability.postText` queda en `truncated`. Sube
`maxContextBytes` hasta 64,000 para conservar más texto.

### ¿El análisis verifica hechos?

No. Las respuestas describen lo que expresa el post y cómo lo plantea. Las
probabilidades expresan la confianza de la IA, no la verdad. Revisa las
clasificaciones importantes contra el post original, que cada fila conserva.

### ¿Qué idiomas funcionan?

La extracción admite todos los idiomas que ofrece X. Validamos el análisis
primero con escenarios de clientes en inglés. Los demás idiomas compatibles
devuelven respuestas con la misma estructura.

### ¿Cómo limito el costo?

Los filtros, la eliminación de duplicados y `maxItems` se aplican antes del
análisis. Solo pagas los posts únicos que cumplen tus filtros. Usa operadores de
búsqueda precisos, límites de fecha y mínimos de interacción. Empieza con un
`maxItems` pequeño para revisar la calidad de las respuestas antes de una
ejecución grande.

### ¿Es legal analizar datos de X?

El Actor solicita campos públicos de X. Los resultados pueden contener datos
personales. Confirma que tu propósito es lícito y cumple las normas de
privacidad aplicables. Si tienes dudas, consulta a un abogado calificado.

### ¿Puedo usar la API, las programaciones y las integraciones?

Sí. Consulta la
[pestaña API](https://apify.com/xquik/x-tweet-viral-score-analyzer/api) para ver
ejemplos en Python, JavaScript y cURL. Usa las
[programaciones](https://docs.apify.com/platform/schedules) de Apify para
ejecuciones recurrentes. Pasa el ID del dataset anterior como
`monitor.baselineDatasetId` para ver qué cambió. Las integraciones de Apify
también conectan las ejecuciones con webhooks, Make, Zapier, n8n y Google
Sheets.

### ¿Dónde consigo ayuda?

Abre un issue en la página del Actor o escribe a support@xquik.com con el ID de
la ejecución. Los diagnósticos gratuitos del almacén de clave-valor explican las
ejecuciones vacías, parciales o interrumpidas.

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