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

# X (Twitter) Stock & Crypto AI Trading Signals | $0.3/1K Tweets

<table align="center"><tr><td align="center">
<a href="https://youtu.be/4UOSpoOoC3Y?t=367"><img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" width="720" alt="Framer conecta Xquik MCP con agentes de código"></a><br>
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">Mira cómo Framer usa los extractores de Xquik con Claude Code, Codex, Cursor y más, desde el minuto 6:07.</a>
</td></tr></table>

Xquik es el servicio de extracción de X (Twitter) más rápido y económico del
mundo, con los datos de X más completos, y X (Twitter) Stock & Crypto AI
Trading Signals convierte tuits en posturas alcistas, bajistas, neutrales o
mixtas por ticker o moneda. Todos los demás Actors de Apify cobran antes de
filtrar o eliminar duplicados. Xquik cobra solo por resultados entregados,
únicos y que coinciden con los filtros.

Lee la postura detrás de las publicaciones sobre acciones, cripto y trading en
X (Twitter) y conserva los datos originales del tuit. **X (Twitter) Stock &
Crypto AI Trading Signals** recopila publicaciones sobre tus tickers o activos
y luego agrega, mediante IA, una postura, tipo de contenido, nivel de
convicción y relevancia del activo a cada publicación. Separa las
declaraciones firmes de los comentarios matizados, el análisis de la
promoción, y las publicaciones sobre tu activo de usos no relacionados de su
nombre.

- **Postura por publicación**: alcista, bajista, neutral, mixta o poco clara.
- **Tipo de contenido** distingue entre análisis, noticias, ideas de trading,
  promoción, humor y preguntas.
- **Convicción** separa las declaraciones y posiciones firmes de los
  comentarios matizados.
- **Relevancia** filtra usos no relacionados de un ticker o nombre de empresa.
- **Registros de fuente completos** para cada campo que expone el tuit.

## Cómo analizar el sentimiento del mercado en X

1. Agrega términos de búsqueda como `$NVDA lang:en -filter:retweets`, consultas
   de cashtags, nombres de usuario de perfiles o IDs de tuits.
2. Configura `maxItems` y filtros de extracción como límites de fecha o un
   mínimo de me gusta.
3. Coloca nombres de activos, tickers y alias en `analysis.targets` y describe
   el activo en `analysis.context`.
4. Ejecuta el Actor y abre el conjunto de datos.

```json
{
  "searchTerms": ["$NVDA lang:en -filter:retweets"],
  "maxItems": 500,
  "analysis": {
    "targets": [{ "name": "Nvidia", "aliases": ["NVDA", "$NVDA"] }],
    "context": "The chip maker as a listed stock."
  }
}
```

### Qué responde el Actor

| Pregunta   | Respuesta                                                          |
| ---------- | -------------------------------------------------------------------- |
| Postura    | Alcista, bajista, neutral, mixta o poco clara                       |
| Contenido  | Análisis, noticias, trading, promoción, humor, pregunta o poco claro |
| Convicción | 0 comentario matizado, 1 opinión declarada, 2 declaración o posición firme |
| Relevancia | Probabilidad de que la publicación trate tus objetivos como activos |

Las respuestas describen lo que expresan los autores. No son asesoría de
inversión y no verifican afirmaciones, precios o reportes regulatorios.

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
  "tweet": { "id": "2100692112916574711", "text": "…", "likeCount": 31 },
  "analysis": {
    "status": "succeeded",
    "answers": [
      {
        "questionId": "stance",
        "type": "choice",
        "value": "bullish",
        "confidence": 0.86
      },
      {
        "questionId": "content",
        "type": "choice",
        "value": "analysis",
        "confidence": 0.79
      },
      {
        "questionId": "conviction",
        "type": "score",
        "value": 1,
        "confidence": 0.7
      },
      { "questionId": "relevance", "type": "probability", "probability": 0.95 }
    ]
  }
}
```

Cada resultado contiene `tweet` y `analysis`. Las respuestas incluyen tipos,
versiones de pregunta y probabilidades cuando están disponibles. Un análisis
fallido u omitido conserva el tuit recopilado con una lista de respuestas
vacía y un `reason`. Los diagnósticos gratuitos en el almacén de clave-valor
explican entradas inválidas, resultados faltantes y recopilaciones
interrumpidas, y el informe de ejecución separa las filas recopiladas, los
análisis cobrados y los cargos pendientes.

## Resumen de ejecución y respuestas planas

Cada ejecución escribe un registro `analysis-summary` en su almacén de
clave-valor y lo repite en `results.analysisSummary` dentro del informe de
ejecución. Cuenta las filas analizadas, fallidas y omitidas, suma la
interacción y resume cada pregunta. `cashtags` cuenta la postura por cashtag
como `$NVDA`, así que la proporción alcista por activo proviene de
`choices.stance`. El bloque `stance` agrega la división ponderada por
interacción y las publicaciones alcistas y bajistas con más interacción;
`conviction` informa la media y la media ponderada por interacción. Los
números se redondean a 4 decimales; las ejecuciones vacías informan conteos en
cero y medias `null`. Cada entrada de `cashtags` agrega `signal`: conteo
alcista, conteo bajista y un puntaje de -1 a 1 calculado como
(alcistas - bajistas) / filas, y `monitor.changedRows` lista los tuits cuya
postura cambió desde la línea base. Cada fila también incluye
`sourceDomains`, los dominios que enlaza, y el bloque `monitor` del resumen
cuenta los estados de comparación y lista hasta 50 filas cambiadas cuando se
configura `monitor.baselineDatasetId`.

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
tenía, con `changes` que lista cada postura, tipo de contenido o nivel de
convicción que cambió de `previous` a `current`. Las decisiones se comparan
por categoría, nivel de puntaje redondeado, o sí/no en 0.5, y una decisión
solo cuenta como cambiada cuando la respuesta se mueve claramente: la
categoría anterior cae por debajo de 0.4 de probabilidad, un puntaje se mueve
al menos 0.6 niveles, o una probabilidad de sí/no queda al menos a 0.1 del
umbral. Las fluctuaciones marginales entre ejecuciones se consideran sin
cambios. Las líneas base por encima de `maxBaselineRows` (100 000 por defecto)
o de una configuración distinta detienen la ejecución antes de la
recopilación con una fila de diagnóstico.

## Ejemplos de tareas

Elige entre 50 tareas públicas. Cada una parte de una búsqueda real en inglés
con un `maxItems` acotado, objetivos y contexto ya preparados, y la vista de
conjunto de datos de resumen. Edita la búsqueda o los objetivos antes de
ejecutar.

- [Nvidia (NVDA) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/nvda-market-sentiment-on-x)
- [Tesla (TSLA) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/tsla-market-sentiment-on-x)
- [Apple (AAPL) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/aapl-market-sentiment-on-x)
- [Amazon (AMZN) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/amzn-market-sentiment-on-x)
- [Microsoft (MSFT) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/msft-market-sentiment-on-x)
- [Alphabet (GOOGL) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/googl-market-sentiment-on-x)
- [Meta (META) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/meta-market-sentiment-on-x)
- [AMD (AMD) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/amd-market-sentiment-on-x)
- [Palantir (PLTR) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/pltr-market-sentiment-on-x)
- [Coinbase (COIN) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/coin-market-sentiment-on-x)
- [Strategy (MSTR) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/mstr-market-sentiment-on-x)
- [Robinhood (HOOD) market sentiment on X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/hood-market-sentiment-on-x)

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
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  Etiqueta publicaciones de noticias por formato, atribución de fuente y
  relevancia del tema con IA. Úsalo cuando separes el reportaje de la opinión.
  Desde $0.0003 por tuit analizado.
- [X (Twitter) Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  Responde tus propias preguntas de categoría, puntaje y sí/no para cada tuit
  con IA. Úsalo cuando los análisis predefinidos no se ajusten a tus
  etiquetas. Desde $0.0003 por tuit analizado.

## Preguntas frecuentes y soporte

### ¿Puedo seguir varios tickers en una sola ejecución?

Sí. Lista cada activo en `analysis.targets` con sus tickers y alias, y combina
términos de búsqueda. Las respuestas de relevancia te indican qué
publicaciones tratan tus objetivos como activos.

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
