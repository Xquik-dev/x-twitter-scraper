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
mundo, con los datos de X más completos. X (Twitter) Brand Monitoring rastrea
las menciones de tu marca con relevancia, sentimiento y respuestas de
experiencia del cliente. Cualquier otro Actor de Apify cobra antes de filtrar o
eliminar duplicados. Xquik cobra solo por resultados entregados, únicos y que
coinciden con los filtros. Los costos de IA están incluidos en el precio por
tweet. No pagas a ningún proveedor de IA, no compras tokens & no traes ninguna
clave.

Monitorea menciones de marca en X (Twitter) y rastrea los cambios de sentimiento
entre ejecuciones. **X (Twitter) Brand Monitoring with AI Analysis** recopila
cada tuit que coincide. Responde con IA preguntas de relevancia, sentimiento &
experiencia del cliente para cada publicación. Compara esas respuestas con un
Dataset anterior, así que ves qué cambió. Cada fila conserva los datos
originales del tuit, así que las exportaciones, revisiones & análisis
posteriores no necesitan una segunda extracción.

Vigila una marca, una línea de producto o una campaña en busca de quejas,
elogios & preguntas de compra. Informa a los equipos de soporte & marketing con
publicaciones reales. Mantén un historial de cómo hablan los clientes de ti de
una ejecución a otra.

- **Cada campo del tuit de origen.** El texto, el autor, los conteos, el
  contenido multimedia, los enlaces & las publicaciones citadas y respondidas
  permanecen junto a las respuestas.
- **Respuestas tipadas.** Cada fila tiene una probabilidad de relevancia, una
  categoría de sentimiento con probabilidades & una categoría de experiencia del
  cliente.
- **Seguimiento de cambios.** Las ejecuciones se comparan por decisión, así que
  los cambios pequeños de probabilidad no cuentan como cambios.
- **Facturación basada en filtros.** Pagas solo por tuits únicos que coinciden
  con los filtros y tienen un análisis exitoso.

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

Las respuestas se comparan por decisión. Una respuesta `choice` se compara por
su categoría. Una respuesta `score` se compara por su nivel más cercano. Una
respuesta `probability` se compara por su decisión de sí o no en 0.5. Una
decisión cuenta como cambiada en tres casos. La categoría anterior cae por
debajo de 0.4 de probabilidad. Un puntaje se mueve al menos 0.6 niveles. Una
probabilidad de sí/no queda a al menos 0.1 del umbral. Los empates cercanos
entre ejecuciones permanecen `unchanged`, & también los cambios que mantienen la
misma decisión. La variación del modelo entre ejecuciones no llena tu informe.
`changes` enumera cada pregunta cambiada con su decisión `previous` & `current`.
Los cambios pueden venir de variación del modelo, contexto nuevo o datos de
origen editados. No prueban hechos cambiados, & un tuit ausente no prueba que
fue eliminado.

El límite de línea base es de 100 000 filas por defecto. Los IDs de tuits
duplicados, los fallos de carga y los tamaños de Dataset cambiantes detienen la
comparación antes de la recopilación. Nunca se convierten en una línea base
vacía.

## Precios

Los costos de IA están incluidos en el precio por tweet. No pagas a ningún
proveedor de IA, no compras tokens & no traes ninguna clave.

Desde $0.0003 por tuit analizado con éxito, sin tarifa de inicio. El precio
incluye la recopilación. La capacidad de análisis es de 8 preguntas, 8000 bytes
por definición de pregunta & 12 000 bytes de contexto por tuit. Los filtros de
extracción & la eliminación de duplicados se ejecutan antes del análisis, así
que nunca pagas por filas descartadas o duplicadas. Los análisis fallidos, los
análisis omitidos & las filas de diagnóstico no tienen costo de resultado. Apify
factura por separado el uso de la plataforma por cómputo, almacenamiento &
transferencia, según las tarifas de tu plan. La pestaña Pricing lo muestra.

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
ejecución. Cuenta las filas analizadas, fallidas y omitidas, suma la interacción
y resume cada pregunta.

- `targets` reporta menciones, participación de voz & interacción por marca o
  alias.
- Cada entrada de `targets` tiene `top`, sus tres menciones con más interacción
  por categoría de respuesta. Úsalo para alertar sobre las menciones negativas &
  positivas más fuertes.
- Cada entrada de `targets` tiene `choices`, la división de respuestas entre los
  tuits que mencionan esa marca.
- El bloque `sentiment` enumera las tres menciones positivas & negativas con más
  interacción bajo `top`.
- `relevance` cuenta las menciones que tratan sobre la marca.
- `monitor.changedRows` enumera los tuits cuyas decisiones cambiaron desde la
  línea base. Envíalos a un webhook o a una alerta.
- Con `monitor.baselineDatasetId` establecido, el bloque `monitor` cuenta los
  estados de comparación & enumera hasta 50 filas modificadas.
- Cada fila enumera `sourceDomains`, los nombres de host que enlaza.

El resumen redondea los números a 4 decimales. Una ejecución vacía reporta
conteos en cero & medias `null`.

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

## Preguntas frecuentes y soporte

### ¿Puedo usar mis propias preguntas?

Sí. Las `analysis.questions` personalizadas reemplazan las predeterminadas.
Envía de 1 a 8 preguntas de tipo `choice`, `score` o `probability`. Las
preguntas de tipo choice aceptan entre 2 y 255 categorías. Los puntajes usan al
menos 2 niveles ordenados. Mantén las mismas preguntas en las ejecuciones que
quieras comparar.

### ¿Por qué una fila regresó con `analysis.status` en `failed` o `skipped`?

El Actor recopiló & entregó el tuit, pero el análisis con IA no se completó.
`analysis.reason` indica la causa, como `context_limit` cuando el tuit y su
contexto superan `maxContextBytes`, o `service_unavailable` tras varios
reintentos. Estas filas no tienen costo de resultado. Aumenta
`maxContextBytes` (hasta 12 000) o vuelve a ejecutar los IDs afectados.

### ¿El análisis verifica hechos?

No. Las respuestas describen lo que expresa la publicación & cómo lo enmarca.
Las probabilidades expresan la confianza del modelo, no la verdad. Revisa las
clasificaciones importantes contra el tuit original, que cada fila conserva.

### ¿Qué idiomas funcionan?

La extracción admite todos los idiomas que ofrece X. Validamos el análisis
primero con escenarios de clientes en inglés. Los demás idiomas admitidos
devuelven respuestas con la misma estructura. Las categorías `unclear` & las
probabilidades muestran la incertidumbre en todos los idiomas.

### ¿Cómo limito el costo?

Los filtros, la eliminación de duplicados & `maxItems` se ejecutan antes del
análisis, así que el Actor analiza & cobra solo los tuits únicos que coinciden
con los filtros. Usa operadores de búsqueda precisos, límites de fecha &
umbrales de interacción, & comienza con un `maxItems` pequeño para verificar la
calidad de las respuestas antes de una ejecución grande.

### ¿Dónde obtengo ayuda?

Abre un issue en la página del Actor o contacta a support@xquik.com con el ID
de la ejecución. Los diagnósticos gratuitos en el almacén de clave-valor
explican ejecuciones vacías, parciales o interrumpidas.

Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
"Twitter" y "X" son marcas registradas de X Corp.
