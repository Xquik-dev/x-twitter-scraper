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
mundo, con los datos de X más completos. X Tweet Viral Score Analyzer agrega una
estimación de Viral Score y un veredicto a cada tuit. Cualquier otro Actor de
Apify cobra antes de filtrar o eliminar duplicados. Xquik cobra solo por
resultados entregados, únicos y que coinciden con los filtros. Los costos de IA
están incluidos en el precio por tweet. No necesitas cuenta de IA, tokens ni
clave.

Descubre por qué los tuits se difunden o fracasan y conserva los datos
originales del tuit. **X Tweet Viral Score Analyzer with AI** recopila los
tuits que coinciden. La IA evalúa 8 rasgos de cada publicación. El Actor
convierte esas respuestas en una estimación de Viral Score de 0 a 100 y un
veredicto. Cada fila conserva los me gusta, republicaciones, respuestas y
citas reales, así que puedes comparar cada estimación con lo que ocurrió.

- **Viral Score por publicación** a partir de reglas fijas y versionadas.
- **8 respuestas sobre rasgos** muestran por qué una publicación obtuvo un
  puntaje alto o bajo.
- **Topes estrictos** limitan las publicaciones que parecen spam, ragebait o
  texto genérico de máquina.
- **Registros de origen completos** con cada campo que expone el tuit.

El Viral Score es una estimación de qué tan bien funciona la redacción. No
predice me gusta ni vistas. No reproduce cómo X clasifica las publicaciones.

## Cómo revisar el Viral Score de un tuit

1. Agrega términos de búsqueda, nombres de usuario de perfiles, URLs de tuits o
   IDs de tuits.
2. Configura `maxItems` y los filtros de extracción que necesita tu tarea.
3. Describe tu audiencia en `analysis.context`, o deja el valor predeterminado.
4. Ejecuta el Actor y abre la vista de Dataset `Viral Score`.

```json
{
  "searchTerms": ["from:NASA -filter:replies -filter:retweets"],
  "maxItems": 150,
  "analysis": { "context": "Space fans & general readers." }
}
```

### Qué responde el Actor

| Pregunta       | Respuesta                                                                 |
| -------------- | ------------------------------------------------------------------------- |
| Gancho         | 0 sin gancho, 1 inicio claro, 2 inicio contundente                        |
| Claridad       | 0 confuso, 1 requiere esfuerzo, 2 claro a la primera lectura              |
| Informativo    | 0 nada nuevo, 1 idea conocida, 2 aprendizaje útil                         |
| Gracioso       | 0 sin gracia, 1 algo divertido, 2 tan gracioso que se comparte            |
| Ragebait       | Probabilidad de que la publicación busque sobre todo provocar indignación |
| Escrito por IA | Probabilidad de que el texto parezca texto genérico de máquina            |
| Spam           | Probabilidad de spam, estafa, sorteo o búsqueda artificial de interacción |
| Reacción       | Compartir, responder, dar me gusta, discutir o ignorar                    |

La respuesta de escrito por IA evalúa solo el estilo. No establece quién
escribió la publicación.

### Cómo funciona el Viral Score

El gancho, la claridad, el valor que aporta y la reacción esperada suben el
puntaje. Un texto que suena a copia genérica de máquina lo baja.

Los topes fijos limitan el puntaje de posible spam, ragebait y copia genérica de
máquina. El puntaje es un número entero de 0 a 100.

| Veredicto     | Puntaje  |
| ------------- | -------- |
| `send_it`     | 70 a 100 |
| `edit_first`  | 40 a 69  |
| `sleep_on_it` | 0 a 39   |

`viral.weights` indica la versión de estas reglas, como `viral_lite:1`. Cambia
cada vez que cambian las reglas. El puntaje es `null` cuando el análisis falló,
el Actor lo omitió o falta una respuesta de rasgo predeterminada. El Actor nunca
completa un puntaje faltante con una suposición.

## Estimación del Algorithm Score

X publicó sus pesos de clasificación en el repositorio `xai-org/x-algorithm`,
archivo `home-mixer/params/param.rs`. El Actor aplica 4 de ellos a los conteos
públicos de cada publicación:

| Conteo        | Peso |
| ------------- | ---- |
| Me gusta      | 0.5  |
| Respuesta     | 5    |
| Republicación | 1    |
| Cita          | 5    |

`viral.algorithmWeightedSum` es la suma de cada conteo multiplicado por su
peso. `viral.algorithmScore` divide esa suma entre las vistas y la multiplica
por 1000. Una publicación sin conteo de vistas usa los seguidores en su lugar.
`viral.algorithmBasis` indica el divisor, `views` o `followers`. Compara solo
puntajes con la misma base. `viral.weightsVersion` indica los pesos, como
`x_algorithm_params:2026-09-18`.

Límites:

- X multiplica cada peso por una probabilidad que predice para un espectador.
  El Actor multiplica por conteos observados. El resultado es una estimación,
  no el puntaje que calcula X.
- X no publica ningún peso para guardados ni vistas. La suma deja ambos fuera.
- X usa más señales que estas 4, como el tiempo de permanencia y los
  compartidos. Los datos públicos no las muestran.
- El puntaje es `null` cuando una publicación no tiene vistas ni conteo de
  seguidores.
- La IA nunca ve estos conteos. Solo lee el texto y el contexto.

## Predicción frente a resultado real

El Actor compara cada Viral Score con lo que ocurrió.
`viral.actualEngagementRate` es
`log10(1 + weighted sum per 1,000 followers)`. El logaritmo limita el efecto
de una publicación muy grande. La tasa es `null` cuando el conteo de
seguidores falta o es 0.

El bloque `viral.calibration` del resumen de ejecución reporta:

- `comparedPosts`: publicaciones con un Viral Score y una tasa real.
- `rankCorrelation`: una correlación de rangos de Spearman de -1 a 1. Pregunta
  si los puntajes más altos coincidieron con tasas más altas.
- `calibrationScore`: 100 veces la correlación, con un mínimo de 0.
- `overperformers` y `underperformers`: hasta 5 publicaciones cada uno, con ID
  del tuit, URL, Viral Score, tasa real y `gap`.

`gap` es la tasa real estandarizada menos el Viral Score estandarizado. Una
publicación entra en una lista cuando su gap alcanza 1 desviación estándar.

Límites:

- Menos de 10 publicaciones comparadas dan una calibración `null` con el
  motivo `too_few_posts`. Puntajes o tasas idénticos dan `no_variation`.
- La correlación es aproximada.
- La calibración describe una sola ejecución. Un puntaje bajo puede significar
  que las publicaciones difieren en momento, tema o audiencia, no que la
  estimación de la redacción falló.
- Las publicaciones recientes no han terminado de acumular interacción.
  Compara publicaciones de antigüedad similar.

## Informe de cuentas

El bloque `viral.accounts` del resumen de ejecución reporta cada nombre de
usuario de autor:

- Cantidad de publicaciones, Viral Score promedio y tasa de interacción real
  promedio.
- La mejor y la peor publicación por Viral Score, con ID del tuit y URL.
- Viral Score promedio por grupo: hora de publicación en UTC, rango de
  longitud del texto, tiene contenido multimedia, tiene enlace y autohilo.

Los rangos de longitud del texto son `short` hasta 80 caracteres, `medium`
hasta 200, `long` hasta 280 y `extended` por encima. Una publicación de
autohilo responde a su propio autor.

Límites:

- El informe enumera los 50 nombres de usuario con más publicaciones
  puntuadas.
- El Actor sigue los primeros 1000 nombres de usuario de una ejecución.
  `untrackedPosts` cuenta las publicaciones puntuadas de nombres de usuario
  posteriores y las publicaciones sin nombre de usuario.
- Un grupo con pocas publicaciones dice poco. Revisa `posts` antes de comparar
  promedios.
- Los grupos muestran qué coincidió en esta ejecución. No muestran causa.

## Tabla de clasificación

El bloque `viral.leaderboard` del resumen de ejecución clasifica los nombres
de usuario del informe de cuentas. `byViralScore` clasifica por Viral Score
promedio. `byActualEngagementRate` clasifica por tasa real promedio. Cada
lista contiene hasta 20 nombres de usuario con `rank`, `posts` y `average`.

Límites:

- Un nombre de usuario necesita al menos 3 publicaciones puntuadas para
  clasificar.
- La lista de tasas omite los nombres de usuario sin conteo de seguidores.
- Los empates se resuelven por más publicaciones y luego por el nombre de
  usuario.
- La tabla de clasificación cubre las publicaciones de una ejecución, no todo
  el historial de una cuenta.

## Puntúa un borrador antes de publicar

Pega tu propio texto en `texts`. El Actor lo puntúa y no obtiene nada de X.

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
- Un borrador aún no tiene me gusta ni vistas, así que `viral.algorithmScore`
  se mantiene en `null`.
- Cada texto analizado cuesta los mismos $0.0003 que un tuit analizado.
- Con `texts` establecido, la ejecución analiza solo esos textos. Ejecuta los
  objetivos de X por separado.

## Precios

Los costos de IA están incluidos en el precio por tweet. No necesitas cuenta de
IA, tokens ni clave.

Desde $0.0003 por tuit analizado con éxito, sin tarifa de inicio. El precio
incluye la recopilación y el Viral Score. La capacidad de análisis es de 8
preguntas, 8000 bytes por definición de pregunta y 12 000 bytes de contexto
por tuit. Los filtros de extracción y la eliminación de duplicados se ejecutan
antes del análisis, por lo que las filas descartadas y duplicadas nunca se
analizan ni se cobran. Los análisis fallidos u omitidos y las filas de
diagnóstico no tienen costo de resultado. Apify factura el uso de la
plataforma por separado. La pestaña Pricing lo muestra.

## Ejemplos de entrada y salida

La entrada anterior está lista para copiar. Las filas de salida se ven así
(abreviadas):

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
tipos, versiones de pregunta y probabilidades disponibles. `viral.stops`
enumera los topes estrictos que limitaron el puntaje. Un análisis fallido u
omitido conserva el tuit recopilado con una lista de respuestas vacía, un
`reason` y un puntaje `null`. Los diagnósticos gratuitos en el almacén de
clave-valor explican entradas inválidas, resultados faltantes y recopilación
interrumpida. El informe de ejecución separa las filas recopiladas, los
análisis cobrados y los cargos pendientes.

## Resumen de ejecución y respuestas planas

Cada ejecución escribe un registro `analysis-summary` en su almacén de
clave-valor y lo repite bajo `results.analysisSummary` en el informe de
ejecución. Cuenta las filas analizadas, fallidas y omitidas, suma la
interacción y resume cada pregunta. Su bloque `viral` reporta `averageScore`,
el conteo de cada veredicto y cuántas filas el Actor puntuó o dejó sin
puntaje. El mismo bloque contiene `calibration`, `accounts` y `leaderboard`,
descritos arriba. Las preguntas de puntaje reportan una media y una media
ponderada por interacción. La división de `reaction` muestra cuántos tuits
caen en cada reacción, y `top` enumera los tres tuits con más interacción por
reacción. Una ejecución vacía reporta conteos en cero y un promedio `null`.
Cada fila enumera `sourceDomains`, los nombres de host que enlaza, & `cashtags`
como `$NVDA` encontrados en su texto. Con `monitor.baselineDatasetId`
establecido, el bloque `monitor` del resumen cuenta los estados de comparación
& enumera hasta 50 filas modificadas.

Cada fila de resultado también incluye `viralScore`, `viralVerdict`,
`viralAlgorithmScore`, `viralActualEngagementRate` y `answers`, un mapa plano
del ID de pregunta a la categoría, puntaje o probabilidad elegidos. La vista de
Dataset `Viral Score` y las exportaciones a CSV o Excel muestran estas columnas
junto al tuit, así que las hojas de cálculo no necesitan analizar JSON. Las
filas fallidas u omitidas tienen un mapa vacío.

## Comparar con una ejecución anterior

Pasa `monitor.baselineDatasetId`, el ID del Dataset de una ejecución anterior
completada con la misma configuración de análisis. Cada fila obtiene entonces un
objeto `monitor`. Su estado es `first_run` sin línea base, `new_to_baseline`
para tuits que la ejecución anterior no tenía, & `unchanged` o `changed` para
tuits que sí tenía. `changes` enumera cada decisión de rasgo que cambió de
`previous` a `current`. Las decisiones se comparan por categoría, nivel de
puntaje redondeado o sí/no en 0.5. Una decisión cuenta como cambiada solo cuando
se mueve con claridad. Las fluctuaciones de empate cercano entre ejecuciones se
consideran sin cambios. Las líneas base por encima de `maxBaselineRows` (100 000
por defecto) o con configuraciones diferentes detienen la ejecución antes de la
recopilación con una fila de diagnóstico.

## Ejemplos de tareas

Elige entre 50 tareas públicas. Cada una parte de una búsqueda real en inglés
con un `maxItems` acotado y la vista de Dataset `Viral Score`. Algunas agregan
contexto de audiencia. Edita la búsqueda o el contexto antes de ejecutar.

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

Las tareas restantes cubren más temas y cuentas de marcas en la página del
Actor.

## Preguntas frecuentes y soporte

### ¿Un puntaje alto significa que un tuit se volverá viral?

No. El puntaje estima qué tan bien funciona la redacción para un lector
general. El momento, el tamaño de la audiencia, el contenido multimedia y la
suerte también deciden el alcance. Compara los puntajes con los conteos reales
de interacción de cada fila antes de confiar en ellos.

### ¿Puedo usar mis propias preguntas?

Sí. Las `analysis.questions` personalizadas reemplazan las predeterminadas: de
1 a 8 preguntas de tipo `choice`, `score` o `probability` con entre 2 y 255
categorías o al menos 2 niveles ordenados. El Viral Score necesita las 8
preguntas predeterminadas, así que las preguntas personalizadas lo dejan en
`null`.

### ¿Por qué una fila regresó con `analysis.status` en `failed` o `skipped`?

El Actor recopiló & entregó el tuit, pero el análisis con IA no se completó.
`analysis.reason` indica la causa, como `context_limit` cuando el tuit y su
contexto superan `maxContextBytes`, o `service_unavailable` cuando el servicio
de análisis no está disponible por un momento. Estas filas no tienen costo de
resultado ni puntaje. Aumenta `maxContextBytes` (hasta 12 000) o vuelve a
ejecutar los IDs afectados.

### ¿El análisis verifica hechos?

No. Las respuestas describen lo que expresa la publicación & cómo lo
enmarca. Las probabilidades expresan la confianza del modelo, no la verdad.
Revisa las clasificaciones importantes contra el tuit original, que cada fila
conserva.

### ¿Qué idiomas funcionan?

La extracción admite todos los idiomas que ofrece X. Validamos el análisis
primero con escenarios de clientes en inglés. Los demás idiomas admitidos
devuelven respuestas con la misma estructura.

### ¿Cómo limito el costo?

Los filtros, la eliminación de duplicados y `maxItems` se ejecutan antes del
análisis, así que el Actor analiza & cobra solo los tuits únicos que coinciden
con los filtros. Usa operadores de búsqueda precisos, límites de fecha y umbrales
de interacción, y comienza con un `maxItems` pequeño para verificar la
calidad de las respuestas antes de una ejecución grande.

### ¿Dónde obtengo ayuda?

Abre un issue en la página del Actor o contacta a support@xquik.com con el ID
de la ejecución. Los diagnósticos gratuitos en el almacén de clave-valor
explican ejecuciones vacías, parciales o interrumpidas.

Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
"Twitter" y "X" son marcas registradas de X Corp.

## Actores de Xquik relacionados

Todos los Actores de Xquik comparten el mismo motor de extracción y la
facturación basada en filtros, con diagnósticos. Elige el que coincida con los
datos que necesitas.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): Extrae tuits de
  búsquedas, líneas de tiempo de perfiles, Listas e IDs de tuits con más de 50
  filtros y exportaciones planas. Úsalo cuando necesites datos de tuits sin
  análisis. Desde $0.00015 por fila.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): Extrae
  perfiles junto con sus publicaciones, respuestas, contenido multimedia y
  seguidores a partir de nombres de usuario, IDs o URLs. Úsalo cuando partes de
  cuentas en lugar de búsquedas. Desde $0.00015 por fila.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): Extrae
  respuestas, comentarios y conversaciones completas debajo de publicaciones
  con más de 25 filtros. Úsalo cuando necesites la discusión debajo de los
  tuits. Desde $0.00015 por fila.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): Extrae
  respuestas, citas, usuarios que retuitean e hilos para URLs o IDs de
  publicaciones de forma masiva. Úsalo cuando mides quién
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
