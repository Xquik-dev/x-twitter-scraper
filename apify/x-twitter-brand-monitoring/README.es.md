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
mundo, con los datos de X más completos. X (Twitter) Brand Monitoring de Xquik
sigue las menciones de tu marca con respuestas de relevancia, sentimiento y
experiencia del cliente. La mayoría de los demás Actores de Apify cobran antes
de filtrar o quitar duplicados. Xquik solo cobra los resultados entregados,
únicos y que cumplen tus filtros. El precio por post incluye los costos de IA.
No necesitas cuenta de IA, tokens ni clave.

Monitorea las menciones de marca en X (Twitter) y sigue los cambios de
sentimiento entre ejecuciones. **X (Twitter) Brand Monitoring with AI Analysis**
de Xquik recopila todos los posts (antes tuits) que coinciden. Responde con IA
preguntas de relevancia, sentimiento y experiencia del cliente para cada post.
Compara esas respuestas con un dataset anterior, así ves qué cambió. Cada fila
conserva los datos originales del post. Las exportaciones, las revisiones y los
análisis posteriores no necesitan una segunda extracción.

Vigila una marca, una línea de productos o una campaña para detectar quejas,
elogios y preguntas de compra. Informa a los equipos de soporte y marketing con
posts reales. Guarda un historial de cómo hablan de ti los clientes, de una
ejecución a otra.

- **Todos los campos del post de origen.** Texto, autor, conteos, contenido
  multimedia, enlaces y posts citados y respondidos quedan junto a las
  respuestas.
- **Respuestas tipadas.** Cada fila tiene una probabilidad de relevancia, una
  categoría de sentimiento con probabilidades y una categoría de experiencia del
  cliente.
- **Seguimiento de cambios.** Las ejecuciones se comparan por decisión, así que
  los pequeños cambios de probabilidad no cuentan como cambios.
- **Cobro después de filtrar.** Solo pagas los posts únicos que cumplen tus
  filtros y tienen un análisis exitoso.

> Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
> "Twitter" y "X" son marcas registradas de X Corp.

## Cómo monitorear una marca en X

1. Agrega términos de búsqueda, nombres de usuario, URLs de posts o IDs de
   posts. Por ejemplo, busca `(Sony OR "WH-1000XM5") headphones lang:en`.
2. Define `maxItems` y los filtros de extracción que necesite tu tarea. Por
   ejemplo, límites de fecha, un mínimo de Me gusta o la exclusión de
   respuestas.
3. Pon los nombres y alias de tu marca en `analysis.targets` y describe la marca
   en `analysis.context`.
4. Inicia la ejecución y guarda el ID del dataset para tu próxima comparación.
5. En la siguiente ejecución, agrega `monitor.baselineDatasetId` con ese ID. No
   cambies las preguntas, los objetivos, el contexto ni los límites de contexto,
   así las respuestas siguen siendo comparables. La comparación lee ese dataset,
   así que funciona aunque esa ejecución haya omitido su resumen.

```json
{
  "searchTerms": ["(Sony OR \"WH-1000XM5\") headphones lang:en"],
  "maxItems": 100,
  "analysis": {
    "targets": [
      { "name": "Sony", "aliases": ["Sony headphones", "WH-1000XM5"] }
    ],
    "context": "Consumer headphones & customer service."
  },
  "monitor": {
    "baselineDatasetId": "YOUR_PREVIOUS_DATASET_ID",
    "maxBaselineRows": 100000
  }
}
```

Los objetivos guían la clasificación. No crean consultas de búsqueda ni quitan
posts irrelevantes. Elige términos de búsqueda y filtros que se ajusten a tu
investigación.

### Qué responde el monitor

| Pregunta                | Respuesta                                        |
| ----------------------- | ------------------------------------------------ |
| Relevancia de la marca  | Probabilidad de que el post hable de tu objetivo |
| Sentimiento             | Positivo, negativo, mixto, neutral o incierto    |
| Experiencia del cliente | Cliente, prospecto, observador o incierto        |

Usa las probabilidades de relevancia para revisar homónimos ambiguos. El
sentimiento describe la actitud que expresa el autor hacia el objetivo.

### Cómo funcionan las comparaciones

| Estado de la comparación | Significado                                          |
| ------------------------ | ---------------------------------------------------- |
| `first_run`              | No se indicó una línea base                          |
| `new_to_baseline`        | Este ID de post no estaba en la línea base           |
| `unchanged`              | Todas las decisiones comparables coinciden           |
| `changed`                | Al menos 1 decisión es distinta                      |
| `not_comparable`         | Faltan metadatos, IDs o configuraciones coincidentes |
| `analysis_unavailable`   | Este post no tiene un análisis exitoso               |

Las respuestas se comparan por decisión. Una respuesta `choice` se compara por
su categoría. Una respuesta `score` se compara por su nivel más cercano. Una
respuesta `probability` se compara por su decisión de sí o no con corte en 0.5.
Una decisión cuenta como cambiada solo cuando se mueve con claridad. Los casi
empates entre ejecuciones quedan en `unchanged`, igual que los cambios que
mantienen la misma decisión. Así, las pequeñas diferencias de la IA entre
ejecuciones no aparecen como cambios.

`changes` enumera cada pregunta cambiada con su decisión `previous` y `current`.
Los cambios pueden venir de la variación de la IA, de contexto nuevo o de datos
de origen editados. No prueban que los hechos hayan cambiado, y un post ausente
no prueba que se haya eliminado.

El límite de la línea base, `maxBaselineRows`, es 100,000 filas de forma
predeterminada. Estos casos detienen la comparación antes de la recopilación:
IDs de posts duplicados, fallos de carga y datasets que cambian de tamaño. Nunca
se convierten en una línea base vacía.

## Analiza tu propio texto

Pega en `texts` tus borradores, respuestas, reseñas o notas. X (Twitter) Brand
Monitoring de Xquik los analiza. No obtiene nada de X.

```json
{
  "texts": [
    "The new update is great, but sync still drops on mobile.",
    "Support fixed my issue in 10 minutes. Thank you."
  ]
}
```

- Cada texto se convierte en 1 fila con las mismas respuestas de `analysis` que
  un post.
- `tweet.id` es `text:1`, `text:2` y así sucesivamente, y `tweet.type` es
  `text`.
- Cada texto analizado cuesta lo mismo que un post analizado, $0.0003.
- Con `texts` definido, la ejecución solo analiza esos textos. Ejecuta los
  objetivos de X por separado.

## ¿Cuánto cuesta monitorear una marca en X?

X (Twitter) Brand Monitoring de Xquik cuesta desde $0.0003 por post analizado.
No cobra tarifa de inicio. El precio incluye la recopilación y los costos de IA.
No necesitas cuenta de IA, tokens ni clave. El precio cubre hasta 8 preguntas y
64,000 bytes de contexto por post. Cada definición de pregunta puede usar hasta
8,000 bytes.

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

Cada resultado contiene `tweet`, `analysis` y `monitor`. Las respuestas incluyen
tipos, versiones de pregunta y las probabilidades disponibles.
`analysis.contextAvailability` informa si falta contexto de cita, respuesta,
autor o contenido multimedia. Una fila con un análisis fallido u omitido
conserva el post recopilado y un `reason`. Su lista de respuestas queda vacía.

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
principal, como `Top sentiment: negative in 2 of 5 results.` Una comparación sin
cambios indica `No change since the earlier run.` Una ejecución grande, o una
que tiene un problema, también escribe `run-report`. Lo mismo hace una ejecución
con `alwaysSaveRunRecords` activado. `run-report` repite el resumen en
`results.analysisSummary`.

El resumen cuenta las filas analizadas, fallidas y omitidas. Suma la interacción
y resume cada pregunta.

- `targets` informa las menciones, la participación en la conversación y la
  interacción por marca o alias.
- Cada entrada de `targets` tiene `top`, sus 3 menciones con más interacción por
  categoría de respuesta. Úsalo para alertar sobre las menciones negativas y
  positivas más fuertes.
- Cada entrada de `targets` tiene `choices`, la división de respuestas entre los
  posts que mencionan esa marca.
- El bloque `sentiment` enumera en `top` las 3 menciones positivas y negativas
  con más interacción.
- `relevance` cuenta las menciones que sí hablan de la marca.
- `monitor.changedRows` enumera los posts cuyas decisiones cambiaron desde la
  línea base. Envíalos a un webhook o a una alerta.
- Con `monitor.baselineDatasetId` definido, el bloque `monitor` cuenta los
  estados de comparación. Enumera hasta 50 filas cambiadas.
- Cada fila enumera `sourceDomains`, los nombres de host a los que enlaza.

El resumen redondea los números a 4 decimales. Una ejecución vacía informa
conteos en 0 y medias `null`.

Cada fila de resultado también trae `answers`, un mapa plano con el ID de cada
pregunta como clave. Cada valor es la categoría, el puntaje o la probabilidad
elegidos. La vista de dataset `Flat answers` y las exportaciones a CSV o Excel
muestran 1 columna por pregunta. Las columnas quedan junto al post, así que las
hojas de cálculo no necesitan procesar JSON. Las filas fallidas u omitidas traen
un mapa vacío.

## Ejemplos de tareas

Elige entre 50 tareas públicas. Cada una parte de una búsqueda real en inglés y
un `maxItems` acotado. Incluye objetivos, contexto y la vista general del
dataset, ya preparados. Edita la búsqueda o los objetivos antes de ejecutarla.

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

Las demás tareas cubren más marcas, temas y mercados en la página del Actor.

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

## Preguntas frecuentes y soporte

### ¿Necesito una cuenta de IA, una clave de API de X o iniciar sesión?

No. X (Twitter) Brand Monitoring de Xquik incluye los costos de IA en su precio.
No necesitas cuenta de IA, tokens ni clave. Tampoco necesitas clave de API de X,
inicio de sesión ni credenciales.

### ¿Puedo usar mis propias preguntas?

Sí. Las `analysis.questions` personalizadas reemplazan las predeterminadas.
Envía de 1 a 8 preguntas `choice`, `score` o `probability`. Las preguntas
`choice` aceptan de 2 a 255 categorías. Las preguntas `score` necesitan al menos
2 niveles ordenados. Mantén las mismas preguntas en las ejecuciones que quieras
comparar.

### ¿Por qué una fila volvió con `analysis.status` en `failed` o `skipped`?

El Actor recopiló y entregó el post, pero el análisis con IA no se completó.
`analysis.reason` indica la causa. `context_limit` significa que tu contexto y
tus objetivos no dejan espacio para el post. `service_unavailable` significa que
el servicio de análisis no estuvo disponible por un momento. Estas filas no
tienen cargo por resultado. Acorta `analysis.context` o vuelve a ejecutar los
IDs afectados.

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
devuelven respuestas con la misma estructura. Las categorías `unclear` y las
probabilidades muestran la incertidumbre en todos los idiomas.

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
[pestaña API](https://apify.com/xquik/x-twitter-brand-monitoring/api) para ver
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