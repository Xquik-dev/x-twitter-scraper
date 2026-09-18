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
mundo, con los datos de X más completos, y X (Twitter) Brand Monitoring rastrea
las menciones de tu marca con relevancia, sentimiento y respuestas de
experiencia del cliente. Cualquier otro Actor de Apify cobra antes de filtrar o
eliminar duplicados. Xquik cobra solo por resultados entregados, únicos y que
coinciden con los filtros.

Los costos de IA están incluidos en el precio por tweet. No pagas a ningún proveedor de IA, no compras tokens & no traes ninguna clave.

Monitorea menciones de marca en X (Twitter) y rastrea los cambios de
sentimiento entre ejecuciones. **X (Twitter) Brand Monitoring** recopila cada tuit que coincide, agrega respuestas de relevancia,
sentimiento y experiencia del cliente con IA a cada publicación, y compara las
respuestas con un Dataset anterior para que veas qué cambió. Los datos
originales del tuit permanecen en cada fila, así que las exportaciones,
revisiones y análisis posteriores no necesitan una segunda extracción.

Úsalo para vigilar una marca, una línea de producto o una campaña en busca de
quejas, elogios y preguntas de compra; para informar a los equipos de soporte y
marketing con publicaciones reales en lugar de puntajes agregados; y para
mantener un historial de cómo hablan los clientes de ti a lo largo de las
ejecuciones.

- **Cada campo del tuit de origen** permanece junto a las respuestas: texto,
  autor, conteos, contenido multimedia, enlaces, publicaciones citadas y
  respondidas.
- **Respuestas tipadas**: una probabilidad de relevancia, una categoría de
  sentimiento con probabilidades y una categoría de experiencia del cliente.
- **Seguimiento de cambios** entre ejecuciones por decisión, no por ruido de
  probabilidad.
- **Facturación basada en filtros**: solo se cobran los tuits únicos que
  coinciden con los filtros y tienen análisis exitoso.

## Cómo monitorear una marca en X

1. Agrega términos de búsqueda (por ejemplo `"Acme headphones" lang:en`),
   nombres de usuario de perfiles, URLs de tuits o IDs de tuits.
2. Configura `maxItems` y los filtros de extracción que necesita tu tarea,
   como límites de fecha, mínimo de me gusta o exclusión de respuestas.
3. Pon los nombres y alias de tu marca bajo `analysis.targets` y describe la
   marca en `analysis.context`.
4. Ejecuta el Actor y luego conserva el ID del Dataset para tu próxima
   comparación.
5. En la siguiente ejecución, agrega `monitor.baselineDatasetId` con ese ID.
   Mantén sin cambios las preguntas, objetivos, contexto y límites de contexto
   para que las respuestas sigan siendo comparables.

```json
{
  "searchTerms": ["\"Acme headphones\" lang:en"],
  "maxItems": 100,
  "analysis": {
    "targets": [{ "name": "Acme", "aliases": ["Acme headphones"] }],
    "context": "Consumer headphones & customer service."
  },
  "monitor": {
    "baselineDatasetId": "YOUR_PREVIOUS_DATASET_ID",
    "maxBaselineRows": 100000
  }
}
```

Los objetivos guían la clasificación. No crean consultas de búsqueda ni
eliminan tuits irrelevantes automáticamente, así que elige términos de
búsqueda y filtros que coincidan con tu investigación.

### Qué responde el monitor

| Pregunta                | Respuesta                                            |
| ------------------------ | ----------------------------------------------------- |
| Relevancia de marca      | Probabilidad de que el tuit hable de tu objetivo       |
| Sentimiento              | Positivo, negativo, mixto, neutral o indeterminado     |
| Experiencia del cliente  | Cliente, prospecto, observador o indeterminado         |

Usa las probabilidades de relevancia para revisar homónimos ambiguos. El
sentimiento describe la actitud expresada por el autor hacia el objetivo.

### Cómo funcionan las comparaciones

| Estado de comparación   | Significado                                                |
| ------------------------ | ----------------------------------------------------------- |
| `first_run`              | No se proporcionó una línea base                             |
| `new_to_baseline`        | Este ID de tuit no estaba en la línea base                   |
| `unchanged`              | Todas las decisiones comparables coinciden                   |
| `changed`                | Al menos 1 decisión difiere                                  |
| `not_comparable`         | Faltan metadatos, IDs o configuraciones de coincidencia requeridos |
| `analysis_unavailable`   | Este tuit no tiene un análisis exitoso                        |

Las respuestas se comparan por decisión: una respuesta `choice` por su
categoría, una respuesta `score` por su nivel más cercano y una respuesta
`probability` por su decisión de sí o no en 0.5. Una decisión solo cuenta como
cambiada cuando la respuesta se mueve claramente: la categoría anterior cae
por debajo de 0.4 de probabilidad, un puntaje se mueve al menos 0.6 niveles, o
una probabilidad de sí/no queda a al menos 0.1 del umbral. Las fluctuaciones
de empate cercano entre ejecuciones se consideran sin cambios. Los cambios que
mantienen la misma decisión permanecen `unchanged`, así que la variación del
modelo entre ejecuciones no satura tu informe. `changes` enumera cada pregunta
cambiada con su decisión `previous` y `current`. Los cambios pueden reflejar
variación del modelo, contexto nuevo o datos de origen editados; no prueban
hechos cambiados, y un tuit ausente no prueba que fue eliminado.

El límite de línea base es de 100 000 filas por defecto. Los IDs de tuits
duplicados, los fallos de carga y los tamaños de Dataset cambiantes detienen
la comparación antes de la recopilación; nunca se convierten en una línea base
vacía.

## Precios

Los costos de IA están incluidos en el precio por tweet. No pagas a ningún proveedor de IA, no compras tokens & no traes ninguna clave.

Desde $0.0003 por tuit analizado con éxito, sin tarifa de inicio. La
recopilación está incluida, y la capacidad de análisis documentada es de 8
preguntas, 8000 bytes por definición de pregunta y 12 000 bytes de contexto
por tuit. Los filtros de extracción y la eliminación de duplicados se ejecutan
antes del análisis, por lo que las filas descartadas y duplicadas nunca se
analizan ni se cobran. Los análisis fallidos u omitidos y las filas de
diagnóstico no tienen costo de resultado. El uso de la plataforma de Apify
(cómputo, almacenamiento y transferencia) se factura por separado por Apify
según las tarifas de tu plan y aparece en la pestaña Pricing.

## Ejemplos de entrada y salida

La entrada anterior está lista para copiar. Las filas de salida se ven así
(abreviadas):

```json
{
  "tweet": { "id": "2100344867507327087", "text": "…", "likeCount": 6409 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      { "questionId": "relevance", "type": "probability", "probability": 0.97 },
      {
        "questionId": "sentiment",
        "type": "choice",
        "value": "neutral",
        "confidence": 0.88
      },
      {
        "questionId": "experience",
        "type": "choice",
        "value": "observer",
        "confidence": 0.69
      }
    ]
  },
  "monitor": { "status": "unchanged", "changedQuestionIds": [], "changes": [] }
}
```

Cada resultado contiene `tweet`, `analysis` y `monitor`. Las respuestas
incluyen tipos, versiones de pregunta y probabilidades disponibles. El
contexto faltante de citas, respuestas, autor y contenido multimedia queda
explícito bajo `analysis.contextAvailability`. Un análisis fallido u omitido
conserva el tuit recopilado con una lista de respuestas vacía y un `reason`.
Los diagnósticos gratuitos en el almacén de clave-valor explican entradas
inválidas, resultados faltantes y recopilación interrumpida, y el informe de
ejecución separa las filas recopiladas, los análisis cobrados y los cargos
pendientes.

## Resumen de ejecución y respuestas planas

Cada ejecución escribe un registro `analysis-summary` en su almacén de
clave-valor y lo repite bajo `results.analysisSummary` en el informe de
ejecución. Cuenta las filas analizadas, fallidas y omitidas, suma la
interacción y resume cada pregunta. `targets` reporta menciones, participación
de voz e interacción por marca o alias, y el `top` de cada entrada enumera sus
tres menciones con más interacción por categoría de respuesta, así que las
menciones negativas y positivas más fuertes de cada marca quedan listas para
alertas. El bloque `sentiment` enumera las tres menciones positivas y
negativas con más interacción bajo `top`, listas para alertas, y `relevance`
cuenta las menciones que tratan sobre la marca. Los números se redondean a 4
decimales; las ejecuciones vacías reportan conteos en cero y medias `null`.
Cada entrada de `targets` también incluye `choices`, la división de respuestas
entre los tuits que mencionan esa marca, y `monitor.changedRows` enumera los
tuits cuyas decisiones cambiaron desde la línea base, listos para un webhook o
alerta. Cada fila también enumera `sourceDomains`, los nombres de host que
enlaza, y el bloque `monitor` del resumen cuenta los estados de comparación y
enumera hasta 50 filas modificadas cuando se establece
`monitor.baselineDatasetId`.

Cada fila de resultado también incluye `answers`, un mapa plano del ID de
pregunta a la categoría, puntaje o probabilidad elegidos. La vista de Dataset
`Flat answers` y las exportaciones a CSV o Excel muestran una columna por
pregunta junto al tuit, así que las hojas de cálculo no necesitan analizar
JSON. Las filas fallidas u omitidas tienen un mapa vacío.

## Ejemplos de tareas

Elige entre 50 tareas públicas. Cada una parte de una búsqueda real en inglés
con un `maxItems` acotado, objetivos y contexto ya preparados, y la vista de
Dataset general. Edita la búsqueda o los objetivos antes de ejecutar.

- [Monitor Nike brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-nike-brand-mentions-on-x)
- [Monitor Starbucks brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-starbucks-brand-mentions-on-x)
- [Monitor Tesla brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-tesla-brand-mentions-on-x)
- [Monitor Spotify brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-spotify-brand-mentions-on-x)
- [Monitor Netflix brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-netflix-brand-mentions-on-x)
- [Monitor Airbnb brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-airbnb-brand-mentions-on-x)
- [Monitor Uber brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-uber-brand-mentions-on-x)
- [Monitor Peloton brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-peloton-brand-mentions-on-x)
- [Monitor Shopify brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-shopify-brand-mentions-on-x)
- [Monitor Notion brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-notion-brand-mentions-on-x)
- [Monitor Duolingo brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-duolingo-brand-mentions-on-x)
- [Monitor Lululemon brand mentions on X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-lululemon-brand-mentions-on-x)

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
- [X Tweet Sentiment Analysis](https://apify.com/xquik/x-tweet-sentiment-analysis):
  Etiqueta actitud, intensidad y probabilidad de sarcasmo para cada tuit con
  IA. Úsalo cuando necesites sentimiento general sobre cualquier tema. Desde
  $0.0003 por tuit analizado.
- [X (Twitter) Stock & Crypto Signal](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  Etiqueta postura alcista, bajista, neutral o mixta, tipo de contenido,
  convicción y relevancia del activo con IA. Úsalo cuando sigues acciones,
  criptomonedas o conversaciones de trading. Desde $0.0003 por tuit analizado.
- [X (Twitter) News Monitor with AI](https://apify.com/xquik/x-twitter-news-monitor):
  Etiqueta publicaciones de noticias por formato, atribución de fuente y
  relevancia del tema con IA. Úsalo cuando separas los reportes del
  comentario. Desde $0.0003 por tuit analizado.
- [X Tweet Classifier with AI](https://apify.com/xquik/x-twitter-tweet-classifier):
  Responde tus propias preguntas de categoría, puntaje y sí/no para cada tuit
  con IA. Úsalo cuando los análisis predefinidos no se ajustan a tus
  etiquetas. Desde $0.0003 por tuit analizado.

## Preguntas frecuentes y soporte

### ¿Puedo usar mis propias preguntas?

Sí. Las `analysis.questions` personalizadas reemplazan las predeterminadas: de
1 a 8 preguntas de tipo `choice`, `score` o `probability`. Las preguntas de
tipo choice aceptan entre 2 y 255 categorías; los puntajes usan al menos 2
niveles ordenados. Mantén las mismas preguntas en las ejecuciones que quieras
comparar.

### ¿Por qué una fila regresó con `analysis.status` en `failed` o `skipped`?

El tuit se recopiló y entregó, pero el análisis con IA no se completó.
`analysis.reason` indica la causa, como `context_limit` cuando el tuit y su
contexto superan `maxContextBytes`, o `service_unavailable` tras varios
reintentos. Estas filas no tienen costo de resultado. Aumenta
`maxContextBytes` (hasta 12 000) o vuelve a ejecutar los IDs afectados.

### ¿El análisis verifica hechos?

No. Las respuestas describen lo que expresa la publicación y cómo está
enmarcada. Las probabilidades expresan la confianza del modelo, no la verdad.
Revisa las clasificaciones importantes contra el tuit original, que cada fila
conserva.

### ¿Qué idiomas funcionan?

La extracción admite todos los idiomas que ofrece X. El análisis se valida
primero con escenarios de clientes en inglés; los demás idiomas admitidos
devuelven respuestas con la misma estructura, y la incertidumbre queda
explícita mediante categorías `unclear` y probabilidades.

### ¿Cómo limito el costo?

Los filtros, la eliminación de duplicados y `maxItems` se ejecutan antes del
análisis, así que solo se analizan y cobran los tuits únicos que coinciden con
los filtros. Usa operadores de búsqueda precisos, límites de fecha y umbrales
de interacción, y comienza con un `maxItems` pequeño para verificar la
calidad de las respuestas antes de una ejecución grande.

### ¿Dónde obtengo ayuda?

Abre un issue en la página del Actor o contacta a support@xquik.com con el ID
de la ejecución. Los diagnósticos gratuitos en el almacén de clave-valor
explican ejecuciones vacías, parciales o interrumpidas.

Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
"Twitter" y "X" son marcas registradas de X Corp.
