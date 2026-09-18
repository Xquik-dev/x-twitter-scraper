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
mundo, con los datos de X más completos. X Tweet Sentiment Analysis agrega
actitud, intensidad & sarcasmo a cada tuit. Cualquier otro Actor de Apify
cobra antes de filtrar o eliminar duplicados. Xquik cobra solo por resultados
entregados, únicos y que coinciden con los filtros. Los costos de IA están
incluidos en el precio por tweet. No pagas a ningún proveedor de IA, no
compras tokens & no traes ninguna clave.

Mide la actitud detrás de las publicaciones de X (Twitter) y conserva los
datos originales del tuit. **X Tweet Sentiment Analysis with AI** recopila los
tuits que coinciden y luego agrega una categoría de sentimiento con IA, un
nivel de intensidad y una probabilidad de sarcasmo a cada publicación. Rastrea
reacciones a un lanzamiento, una campaña, un episodio o una figura pública, y
separa las reacciones intensas de las menciones pasajeras.

- **Sentimiento por publicación**, no un puntaje agregado que no puedes
  auditar.
- **Intensidad** separa las publicaciones enfáticas de las moderadas.
- **Probabilidad de sarcasmo** marca publicaciones cuyo texto literal
  contradice la actitud.
- **Registros de origen completos** con cada campo que expone el tuit.

## Cómo analizar el sentimiento de los tuits

1. Agrega términos de búsqueda, nombres de usuario de perfiles, URLs de tuits o
   IDs de tuits.
2. Configura `maxItems` y los filtros de extracción que necesita tu tarea.
3. Deja `analysis.targets` vacío para evaluar cada publicación según su propio
   tema, o agrega nombres y alias para enfocar la actitud en una marca, un
   producto o una persona.
4. Ejecuta el Actor y abre el Dataset.

```json
{
  "searchTerms": ["\"season finale\" lang:en"],
  "maxItems": 200,
  "analysis": { "context": "Reactions to the show, not spoilers." }
}
```

### Qué responde el Actor

| Pregunta   | Respuesta                                                       |
| ---------- | ---------------------------------------------------------------- |
| Sentimiento | Positivo, negativo, mixto, neutral o indeterminado               |
| Intensidad  | 0 mención pasajera, 1 actitud clara, 2 texto enfático             |
| Sarcasmo    | Probabilidad de que el texto literal contradiga la actitud        |

Cuando proporcionas objetivos (targets), el sentimiento evalúa la actitud
hacia ellos & usa el contexto de cita o respuesta que proporcionas. Sin
objetivos, evalúa el tema principal de la publicación.

## Precios

Los costos de IA están incluidos en el precio por tweet. No pagas a ningún proveedor de IA, no compras tokens & no traes ninguna clave.

Desde $0.0003 por tuit analizado con éxito, sin tarifa de inicio. El precio
incluye la recopilación. La capacidad de análisis es de 8
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
  "tweet": { "id": "2100493544842494265", "text": "…", "likeCount": 12 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      {
        "questionId": "sentiment",
        "type": "choice",
        "value": "positive",
        "confidence": 0.91
      },
      {
        "questionId": "intensity",
        "type": "score",
        "value": 2,
        "confidence": 0.8
      },
      { "questionId": "sarcasm", "type": "probability", "probability": 0.04 }
    ]
  }
}
```

Cada resultado contiene `tweet` y `analysis`. Las respuestas incluyen tipos,
versiones de pregunta y probabilidades disponibles. Un análisis fallido u
omitido conserva el tuit recopilado con una lista de respuestas vacía y un
`reason`. Los diagnósticos gratuitos en el almacén de clave-valor explican
entradas inválidas, resultados faltantes y recopilación interrumpida, y el
informe de ejecución separa las filas recopiladas, los análisis cobrados y los
cargos pendientes.

## Resumen de ejecución y respuestas planas

Cada ejecución escribe un registro `analysis-summary` en su almacén de
clave-valor y lo repite bajo `results.analysisSummary` en el informe de
ejecución. Cuenta las filas analizadas, fallidas y omitidas, suma la
interacción y resume cada pregunta. La división de `sentiment` muestra cuántos
tuits caen en cada actitud. `engagementShares` muestra la misma división con
cada tuit ponderado por sus me gusta, retuits, respuestas & citas. `top`
enumera los tres tuits con más interacción por actitud. El resumen redondea
los números a 4 decimales. Una ejecución vacía reporta conteos en cero &
medias `null`. Cada fila enumera `sourceDomains`, los nombres de host que
enlaza, & `cashtags` como `$NVDA` encontrados en su texto. Con
`monitor.baselineDatasetId` establecido, el bloque `monitor` del resumen
cuenta los estados de comparación & enumera hasta 50 filas modificadas.

Cada fila de resultado también incluye `answers`, un mapa plano del ID de
pregunta a la categoría, puntaje o probabilidad elegidos. La vista de Dataset
`Flat answers` y las exportaciones a CSV o Excel muestran una columna por
pregunta junto al tuit, así que las hojas de cálculo no necesitan analizar
JSON. Las filas fallidas u omitidas tienen un mapa vacío.

## Comparar con una ejecución anterior

Pasa `monitor.baselineDatasetId`, el ID del Dataset de una ejecución
anterior completada con la misma configuración de análisis. Cada fila obtiene
entonces un objeto `monitor`. Su estado es `first_run` sin línea base,
`new_to_baseline` para tuits que la ejecución anterior no tenía, & `unchanged`
o `changed` para tuits que sí tenía. `changes` enumera cada decisión de
sentimiento, nivel de intensidad o sarcasmo que cambió de `previous` a
`current`. Las decisiones se comparan por categoría, nivel de puntaje
redondeado o sí/no en 0.5. Una decisión cuenta como cambiada en tres casos. La
categoría anterior cae por debajo de 0.4 de probabilidad. Un puntaje se mueve
al menos 0.6 niveles. Una probabilidad de sí/no queda a al menos 0.1 del
umbral. Las fluctuaciones de empate cercano entre ejecuciones se consideran
sin cambios. Las líneas base por encima de `maxBaselineRows` (100 000 por
defecto) o con configuraciones diferentes detienen la ejecución antes de la
recopilación con una fila de diagnóstico.

## Ejemplos de tareas

Elige entre 50 tareas públicas. Cada una parte de una búsqueda real en inglés
con un `maxItems` acotado, objetivos y contexto ya preparados, y la vista de
Dataset general. Edita la búsqueda o los objetivos antes de ejecutar.

- [Sentiment of season finale reactions](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-season-finale-reactions)
- [Sentiment of iPhone launch posts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-iphone-launch-posts)
- [Sentiment of the Super Bowl halftime show](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-super-bowl-halftime-show)
- [Sentiment toward a new electric car model](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-new-electric-car)
- [Sentiment of Marvel movie audiences](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-marvel-movie-audiences)
- [Sentiment of Taylor Swift album reactions](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-taylor-swift-album-reactions)
- [Sentiment of a video game launch](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-video-game-launch)
- [Sentiment about remote work](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-remote-work)
- [Sentiment of airline passengers](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-airline-passengers)
- [Sentiment of college football fans](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-college-football-fans)
- [Sentiment about interest rate decisions](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-interest-rates)
- [Sentiment toward electric scooters](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-electric-scooters)

Las tareas restantes cubren más marcas, temas y mercados en la página del
Actor.

## Actores de Xquik relacionados

Todos los Actores de Xquik comparten el mismo motor de extracción y la
facturación basada en filtros, con diagnósticos. Elige el que coincida con los
datos que necesitas.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): Extrae tuits de
  búsquedas, líneas de tiempo de perfiles, Listas e IDs de tuits con más de 50
  filtros y exportaciones planas. Úsalo cuando necesites datos de tuits sin
  análisis. Desde $0.00015 por fila.
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

## Preguntas frecuentes y soporte

### ¿Puedo usar mis propias preguntas?

Sí. Las `analysis.questions` personalizadas reemplazan las predeterminadas: de
1 a 8 preguntas de tipo `choice`, `score` o `probability` con entre 2 y 255
categorías o al menos 2 niveles ordenados.

### ¿Por qué una fila regresó con `analysis.status` en `failed` o `skipped`?

El Actor recopiló & entregó el tuit, pero el análisis con IA no se completó.
`analysis.reason` indica la causa, como `context_limit` cuando el tuit y su
contexto superan `maxContextBytes`, o `service_unavailable` tras varios
reintentos. Estas filas no tienen costo de resultado. Aumenta
`maxContextBytes` (hasta 12 000) o vuelve a ejecutar los IDs afectados.

### ¿El análisis verifica hechos?

No. Las respuestas describen lo que expresa la publicación & cómo lo
enmarca. Las probabilidades expresan la confianza del modelo, no la verdad.
Revisa las clasificaciones importantes contra el tuit original, que cada fila
conserva.

### ¿Qué idiomas funcionan?

La extracción admite todos los idiomas que ofrece X. Validamos el análisis
primero con escenarios de clientes en inglés. Los demás idiomas admitidos
devuelven respuestas con la misma estructura. Las categorías `unclear` & las
probabilidades muestran la incertidumbre en todos los idiomas.

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
