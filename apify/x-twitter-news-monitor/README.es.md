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

# X (Twitter) News Monitor with AI Analysis | $0.3/1K Tweets

<table align="center"><tr><td align="center">
<a href="https://youtu.be/4UOSpoOoC3Y?t=367"><img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" width="720" alt="Framer conecta Xquik MCP con agentes de código"></a><br>
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">Mira cómo Framer usa los extractores de Xquik con Claude Code, Codex, Cursor y más, desde el minuto 6:07.</a>
</td></tr></table>

Xquik es el servicio de extracción de X (Twitter) más rápido y económico del
mundo, con los datos de X más completos, y X (Twitter) News Monitor clasifica
publicaciones de noticias por formato, atribución de fuente y relevancia. Todos
los demás Actors de Apify cobran antes de filtrar o eliminar duplicados. Xquik
cobra solo por resultados entregados, únicos y que coinciden con los filtros.

Clasifica publicaciones de noticias en X (Twitter) según lo que son y conserva
los datos originales del tuit. **X (Twitter) News Monitor with AI Analysis**
recopila publicaciones sobre tus temas y luego agrega, mediante IA, una
respuesta de formato, atribución de fuente y relevancia a cada publicación.
Separa el reportaje de la opinión y la especulación, ve si se nombra o enlaza
una fuente, y conserva solo las publicaciones que tratan sobre las
organizaciones, personas o temas que sigues.

- **Formato** distingue entre reportaje, opinión, especulación, promoción y
  sátira.
- **Atribución** muestra si una afirmación nombra una fuente, enlaza una, es de
  primera mano o no tiene ninguna.
- **Relevancia** conserva publicaciones sobre tus objetivos y descarta
  coincidencias de nombre sin relación.
- **Registros de fuente completos** para cada campo que expone el tuit,
  incluidos los artículos enlazados cuando están disponibles.

## Cómo clasificar publicaciones de noticias en X

1. Agrega términos de búsqueda como `Nvidia earnings lang:en -filter:retweets`,
   nombres de usuario de cuentas de noticias o IDs de tuits.
2. Configura `maxItems` y filtros de extracción como límites de fecha,
   `filter:news` o un mínimo de reposts.
3. Coloca las organizaciones, personas o temas que sigues y sus alias en
   `analysis.targets`, y acota el tema en `analysis.context`.
4. Ejecuta el Actor y abre el conjunto de datos.

```json
{
  "searchTerms": ["Nvidia earnings lang:en -filter:retweets"],
  "maxItems": 300,
  "analysis": {
    "targets": [{ "name": "Nvidia", "aliases": ["NVDA", "Jensen Huang"] }],
    "context": "Financial & product news about the chip maker."
  }
}
```

### Qué responde el Actor

| Pregunta    | Respuesta                                                                    |
| ----------- | ----------------------------------------------------------------------------- |
| Formato     | Reportaje, opinión, especulación, promoción, sátira, no relacionado o poco claro |
| Atribución  | Nombrada, enlazada, de primera mano, ausente o poco clara                     |
| Relevancia  | Probabilidad de que el evento reportado concierna a tus objetivos             |

La clasificación no verifica hechos. Una fuente nombrada no es una fuente
confiable; la atribución describe lo que presenta la publicación.

## Precios

Desde $0.0003 por tuit analizado con éxito, sin tarifa de inicio. La
recopilación está incluida, y el límite documentado de análisis es de 8
preguntas, 8000 bytes por definición de pregunta y 12 000 bytes de contexto por
tuit. Los filtros de extracción y la eliminación de duplicados se ejecutan
antes del análisis, así que las filas filtradas o duplicadas nunca se analizan
ni se cobran. Los análisis fallidos u omitidos y las filas de diagnóstico no
generan cargo por resultado. El uso de la plataforma Apify se factura por
separado por Apify y aparece en la pestaña Pricing.

## Ejemplos de entrada y salida

La entrada anterior está lista para copiar. Las filas de salida se ven así
(resumidas):

```json
{
  "tweet": { "id": "2100673144985993441", "text": "…", "retweetCount": 40 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      {
        "questionId": "format",
        "type": "choice",
        "value": "reporting",
        "confidence": 0.9
      },
      {
        "questionId": "attribution",
        "type": "choice",
        "value": "named",
        "confidence": 0.84
      },
      { "questionId": "relevance", "type": "probability", "probability": 0.98 }
    ]
  }
}
```

Cada resultado contiene `tweet` y `analysis`. Las respuestas incluyen tipos,
versiones de pregunta y probabilidades cuando están disponibles. Cuando una
publicación enlaza un X Article, el análisis obtiene el título, la vista previa
y los bloques de texto de ese artículo como contexto, y
`analysis.contextAvailability.article` informa `text_blocks`, `summary` (solo
título y vista previa) o `not_supplied`. Un análisis fallido u omitido conserva
el tuit recopilado con una lista de respuestas vacía y un `reason`. Los
diagnósticos gratuitos en el almacén de clave-valor explican entradas
inválidas, resultados faltantes y recopilaciones interrumpidas, y el informe de
ejecución separa las filas recopiladas, los análisis cobrados y los cargos
pendientes.

## Resumen de ejecución y respuestas planas

Cada ejecución escribe un registro `analysis-summary` en su almacén de
clave-valor y lo repite en `results.analysisSummary` dentro del informe de
ejecución. Cuenta las filas analizadas, fallidas y omitidas, suma la
interacción y resume cada pregunta. La división de `format` separa el
reportaje de la opinión, la especulación, la promoción y la sátira;
`attribution` cuenta las fuentes nombradas, enlazadas, de primera mano y
ausentes; `relevance` cuenta las publicaciones sobre cada objetivo, con
`targets` que indica las menciones por objetivo, y el `top` de cada objetivo
lista sus publicaciones con más interacción por categoría de respuesta. Los
números se redondean a 4 decimales; las ejecuciones vacías informan conteos en
cero y medias `null`. `sourceDomains` cuenta los dominios enlazados en toda la
ejecución, cada entrada de `targets` incluye `choices` con la división de
formato y atribución para las publicaciones sobre ese objetivo, y
`monitor.changedRows` lista las publicaciones cuyas decisiones cambiaron desde
la línea base. Cada fila también incluye `sourceDomains`, los dominios que
enlaza, `cashtags` como `$NVDA` encontrados en su texto, y el bloque `monitor`
del resumen cuenta los estados de comparación y lista hasta 50 filas cambiadas
cuando se configura `monitor.baselineDatasetId`.

Cada fila de resultado también incluye `answers`, un mapa plano del ID de
pregunta a la categoría, puntaje o probabilidad elegidos. La vista de conjunto
de datos `Flat answers` y las exportaciones a CSV o Excel muestran una columna
por pregunta junto al tuit, así las hojas de cálculo no necesitan analizar
JSON. Las filas fallidas u omitidas tienen un mapa vacío.

## Comparar con una ejecución anterior

Pasa `monitor.baselineDatasetId`, el ID de conjunto de datos de una ejecución
anterior completada con la misma configuración de análisis, y cada fila gana
un objeto `monitor`: `first_run` sin línea base, `new_to_baseline` para tuits
que la ejecución anterior no tenía, `unchanged` o `changed` para tuits que sí
tenía, con `changes` que lista cada decisión de formato, atribución o
relevancia que cambió de `previous` a `current`. Las decisiones se comparan por
categoría, nivel de puntaje redondeado, o sí/no en 0.5, y una decisión solo
cuenta como cambiada cuando la respuesta se mueve claramente: la categoría
anterior cae por debajo de 0.4 de probabilidad, un puntaje se mueve al menos
0.6 niveles, o una probabilidad de sí/no queda al menos a 0.1 del umbral. Las
fluctuaciones marginales entre ejecuciones se consideran sin cambios. Las
líneas base por encima de `maxBaselineRows` (100 000 por defecto) o de una
configuración distinta detienen la ejecución antes de la recopilación con una
fila de diagnóstico.

## Ejemplos de tareas

Elige entre 50 tareas públicas. Cada una parte de una búsqueda real en inglés
con un `maxItems` acotado, objetivos y contexto ya preparados, y la vista de
conjunto de datos de resumen. Edita la búsqueda o los objetivos antes de
ejecutar.

- [Classify Nvidia news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-nvidia-news-posts-on-x)
- [Classify X Article news posts](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-x-article-news-posts)
- [Classify OpenAI news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-openai-news-posts-on-x)
- [Classify Apple news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-apple-news-posts-on-x)
- [Classify Tesla news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-tesla-news-posts-on-x)
- [Classify SpaceX news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-spacex-news-posts-on-x)
- [Classify Boeing news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-boeing-news-posts-on-x)
- [Classify Pfizer news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-pfizer-news-posts-on-x)
- [Classify Moderna news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-moderna-news-posts-on-x)
- [Classify ExxonMobil news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-exxon-news-posts-on-x)
- [Classify Federal Reserve news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-federal-reserve-news-posts-on-x)
- [Classify European Central Bank news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-european-central-bank-news-posts-on-x)
- [Classify Bank of England news posts on X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-bank-of-england-news-posts-on-x)

El resto de las tareas cubre más marcas, temas y mercados en la página del
Actor.

## Actors relacionados de Xquik

Todos los Actors de Xquik comparten el mismo motor de extracción, facturación
basada en filtros primero y diagnósticos. Elige el que coincida con los datos
que necesitas.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): Extrae tuits de
  búsquedas, líneas de tiempo de perfiles, Listas e IDs de tuits con más de 50
  filtros y exportaciones planas. Úsalo cuando necesites datos de tuits sin
  análisis. Desde $0.00015 por fila.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): Extrae
  perfiles junto con sus publicaciones, respuestas, medios y me gusta a partir
  de nombres de usuario, IDs o URLs. Úsalo cuando partas de cuentas en lugar de
  búsquedas. Desde $0.00015 por fila.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): Extrae
  respuestas, comentarios y conversaciones completas debajo de publicaciones
  con más de 25 filtros. Úsalo cuando necesites la discusión debajo de los
  tuits. Desde $0.00015 por fila.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): Extrae
  respuestas, citas, usuarios que retuitean, quienes dan me gusta e hilos para
  URLs o IDs de publicaciones en bloque. Úsalo cuando midas quién interactuó
  con las publicaciones. Desde $0.00015 por fila.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): Extrae
  seguidores, cuentas seguidas, miembros de Listas, suscriptores y miembros de
  Comunidades como filas de perfil. Úsalo cuando necesites listas de audiencia
  o de miembros. Desde $0.00015 por perfil.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper):
  Busca usuarios por nombre de usuario, bio y ubicación con filtros de
  seguidores, verificación, antigüedad y ubicación. Úsalo cuando construyas
  listas de cuentas a partir de una búsqueda. Desde $0.00015 por perfil.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): Extrae
  publicaciones, miembros y seguidores de Listas a partir de URLs o IDs de
  Listas. Úsalo cuando una Lista curada defina tus fuentes. Desde $0.00015 por
  fila.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): Extrae
  información, publicaciones, búsquedas, miembros y moderadores de
  Comunidades. Úsalo cuando tus fuentes sean Comunidades de X. Desde $0.00015
  por fila.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): Extrae
  tendencias en tiempo real por ubicación con posición, volumen, consulta y
  WOEID. Úsalo cuando sigas qué es tendencia y dónde. Desde $0.00015 por
  tendencia.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): Extrae
  artículos largos de X en Markdown y texto con portadas, autores, fechas y
  métricas. Úsalo cuando necesites el cuerpo de artículos, no tuits. Desde
  $0.00015 por artículo.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): Extrae o
  almacena fotos, videos y GIFs de publicaciones o perfiles con opciones de
  MP4 y metadatos. Úsalo cuando necesites los archivos multimedia en sí. Desde
  $0.00015 por fila de medio.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  Rastrea menciones de marca con relevancia, sentimiento y respuestas de
  experiencia de cliente mediante IA, y compara ejecuciones. Úsalo cuando
  sigas una marca en el tiempo. Desde $0.0003 por tuit analizado.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  Etiqueta actitud, intensidad y probabilidad de sarcasmo para cada tuit con
  IA. Úsalo cuando necesites sentimiento general sobre cualquier tema. Desde
  $0.0003 por tuit analizado.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  Etiqueta postura alcista, bajista, neutral o mixta, tipo de contenido,
  convicción y relevancia del activo con IA. Úsalo cuando sigas acciones,
  cripto o conversaciones de trading. Desde $0.0003 por tuit analizado.
- [X (Twitter) Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  Responde tus propias preguntas de categoría, puntaje y sí/no para cada tuit
  con IA. Úsalo cuando los análisis predefinidos no se ajusten a tus
  etiquetas. Desde $0.0003 por tuit analizado.

## Preguntas frecuentes y soporte

### ¿Puedo usar mis propias preguntas?

Sí. Las `analysis.questions` personalizadas reemplazan a las predeterminadas:
de 1 a 8 preguntas de tipo `choice`, `score` o `probability` con entre 2 y 255
categorías o al menos 2 niveles ordenados.

### ¿Por qué una fila regresó con `analysis.status` en `failed` o `skipped`?

El tuit se recopiló y entregó, pero el análisis con IA no se completó.
`analysis.reason` indica la causa, como `context_limit` cuando el tuit y su
contexto superan `maxContextBytes`, o `service_unavailable` tras varios
reintentos. Estas filas no generan cargo por resultado. Aumenta
`maxContextBytes` (hasta 12 000) o vuelve a ejecutar los IDs afectados.

### ¿El análisis verifica hechos?

No. Las respuestas describen lo que expresa la publicación y cómo está
formulada. Las probabilidades expresan la confianza del modelo, no la verdad.
Revisa las clasificaciones importantes contra el tuit original, que cada fila
conserva.

### ¿Qué idiomas funcionan?

La extracción admite todos los idiomas que ofrece X. El análisis se valida
primero con escenarios de clientes en inglés; los demás idiomas admitidos
devuelven respuestas con la misma estructura, y la incertidumbre queda
explícita mediante categorías y probabilidades `unclear`.

### ¿Cómo limito el costo?

Los filtros, la eliminación de duplicados y `maxItems` se ejecutan antes del
análisis, así que solo se analizan y cobran los tuits únicos que coinciden con
los filtros. Usa operadores de búsqueda precisos, límites de fecha y pisos de
interacción, y comienza con un `maxItems` pequeño para revisar la calidad de
las respuestas antes de una ejecución grande.

### ¿Dónde obtengo ayuda?

Abre un issue en la página del Actor o contacta a support@xquik.com con el ID
de la ejecución. Los diagnósticos gratuitos en el almacén de clave-valor
explican ejecuciones vacías, parciales o interrumpidas.

Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
"Twitter" y "X" son marcas registradas de X Corp.
