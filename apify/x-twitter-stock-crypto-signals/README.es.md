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
mundo, con los datos de X más completos. X (Twitter) Stock & Crypto AI Trading
Signals de Xquik convierte los posts en posturas. Cada postura es alcista,
bajista, neutral o mixta, por ticker y por moneda. La mayoría de los demás
Actores de Apify cobran antes de filtrar o quitar duplicados. Xquik solo cobra
los resultados entregados, únicos y que cumplen tus filtros. El precio por post
incluye los costos de IA. No necesitas cuenta de IA, tokens ni clave.

Lee la postura detrás de los posts (antes tuits) sobre acciones, cripto y
trading en X. **X (Twitter) Stock & Crypto AI Trading Signals** de Xquik
recopila posts sobre tus activos. Agrega con IA a cada post una postura, un tipo
de contenido, un nivel de convicción y la relevancia del activo. Separa las
apuestas firmes de los comentarios con reservas, y el análisis de la promoción.
Detecta los posts que usan el nombre de tu activo para otra cosa.

- **Postura por post.** Cada post es alcista, bajista, neutral, mixto o
  incierto.
- **Tipo de contenido.** Distingue análisis, noticias, ideas de trading,
  promoción, humor y preguntas.
- **Convicción.** Separa las apuestas y posiciones firmes de los comentarios con
  reservas.
- **Relevancia.** Te ayuda a descartar usos ajenos de un ticker o del nombre de
  una empresa.
- **Registros de origen completos.** Cada fila conserva todos los campos que
  muestra el post.

> Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
> "Twitter" y "X" son marcas registradas de X Corp.

## Cómo analizar el sentimiento del mercado en X

1. Agrega términos de búsqueda como `$NVDA lang:en -filter:retweets`, consultas
   de cashtags, nombres de usuario o IDs de posts.
2. Define `maxItems` y filtros de extracción como límites de fecha o un mínimo
   de Me gusta.
3. Pon los nombres, tickers y alias de los activos en `analysis.targets` y
   describe el activo en `analysis.context`.
4. Inicia la ejecución y abre el dataset.

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

| Pregunta   | Respuesta                                                                  |
| ---------- | -------------------------------------------------------------------------- |
| Postura    | Alcista, bajista, neutral, mixta o incierta                                |
| Contenido  | Análisis, noticia, trading, promoción, humor, pregunta o incierto          |
| Convicción | 0 comentario con reservas, 1 opinión declarada, 2 apuesta o posición firme |
| Relevancia | Probabilidad de que el post trate a tus objetivos como activos             |

La convicción es 0 siempre que la postura sea neutral o incierta. Un post sin
dirección no puede afirmarla con firmeza. Esa respuesta pone toda la
probabilidad en el nivel 0 y toma la confianza de la postura.

Las respuestas describen lo que expresan los autores. No son asesoría de
inversión y no verifican afirmaciones, precios ni reportes regulatorios.

## Analiza tu propio texto

Pega en `texts` tus borradores, respuestas, reseñas o notas. X (Twitter) Stock &
Crypto AI Trading Signals de Xquik los analiza. No obtiene nada de X.

```json
{
  "texts": [
    "$NVDA guidance beat again. I am adding on any dip below 900.",
    "Not touching $BTC until the ETF flows turn positive."
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

## ¿Cuánto cuesta analizar el sentimiento del mercado en X?

X (Twitter) Stock & Crypto AI Trading Signals de Xquik cuesta desde $0.0003 por
post analizado. No cobra tarifa de inicio. El precio incluye la recopilación y
los costos de IA. No necesitas cuenta de IA, tokens ni clave. El precio cubre
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
versiones de pregunta y las probabilidades disponibles. Una fila con un análisis
fallido u omitido conserva el post recopilado y un `reason`. Su lista de
respuestas queda vacía.

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
principal, como `Top stance: bullish in 3 of 5 results.` Una comparación sin
cambios indica `No change since the earlier run.` Una ejecución grande, o una
que tiene un problema, también escribe `run-report`. Lo mismo hace una ejecución
con `alwaysSaveRunRecords` activado. `run-report` repite el resumen en
`results.analysisSummary`.

El resumen cuenta las filas analizadas, fallidas y omitidas. Suma la interacción
y resume cada pregunta.

- `cashtags` cuenta la postura por cashtag, como `$NVDA`. La proporción alcista
  de cada activo sale de `choices.stance`.
- Cada entrada de `cashtags` agrega `signal` con los conteos alcistas y
  bajistas. Su puntaje va de -1 a 1. El puntaje es alcistas menos bajistas,
  dividido por las filas.
- El bloque `stance` agrega la división ponderada por interacción y los posts
  alcistas y bajistas con más interacción.
- `conviction` informa la media y la media ponderada por interacción.
- `monitor.changedRows` enumera los posts cuya postura cambió desde la línea
  base.
- Cada fila enumera `sourceDomains`, los nombres de host a los que enlaza.
- Con `monitor.baselineDatasetId` definido, el bloque `monitor` del resumen
  cuenta los estados de comparación. Enumera hasta 50 filas cambiadas.

El resumen redondea los números a 4 decimales. Una ejecución vacía informa
conteos en 0 y medias `null`.

Cada fila de resultado también trae `answers`, un mapa plano con el ID de cada
pregunta como clave. Cada valor es la categoría, el puntaje o la probabilidad
elegidos. La vista de dataset `Flat answers` y las exportaciones a CSV o Excel
muestran 1 columna por pregunta. Las columnas quedan junto al post, así que las
hojas de cálculo no necesitan procesar JSON. Las filas fallidas u omitidas traen
un mapa vacío.

## Comparar con una ejecución anterior

Pasa `monitor.baselineDatasetId`, el ID del dataset de una ejecución anterior
completada con la misma configuración de análisis. La comparación lee las filas
de esa ejecución. Funciona aunque esa ejecución haya omitido su resumen. Luego,
cada fila recibe un objeto `monitor`. Su estado puede ser:

- `first_run` sin línea base.
- `new_to_baseline` para posts que la ejecución anterior no tenía.
- `unchanged` o `changed` para posts que sí tenía.

`changes` enumera cada postura, tipo de contenido o nivel de convicción que pasó
de `previous` a `current`. Las decisiones se comparan por categoría, nivel de
puntaje redondeado o sí o no con corte en 0.5. Una decisión cuenta como cambiada
solo cuando se mueve con claridad. Los casi empates entre ejecuciones quedan en
`unchanged`.

Una línea base que supera `maxBaselineRows`, o que usa otra configuración,
detiene la ejecución antes de la recopilación. La ejecución escribe entonces una
fila de diagnóstico. `maxBaselineRows` es 100,000 de forma predeterminada.

## Ejemplos de tareas

Elige entre 50 tareas públicas. Cada una parte de una búsqueda real en inglés y
un `maxItems` acotado. Incluye objetivos, contexto y la vista general del
dataset, ya preparados. Edita la búsqueda o los objetivos antes de ejecutarla.

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
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  sigue menciones de marca con relevancia, sentimiento y respuestas de
  experiencia del cliente generadas con IA, y compara ejecuciones. Úsalo cuando
  vigiles una marca a lo largo del tiempo. Desde $0.0003 por post analizado.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  etiqueta con IA la actitud, la intensidad y la probabilidad de sarcasmo de
  cada post. Úsalo cuando necesites el sentimiento general sobre cualquier tema.
  Desde $0.0003 por post analizado.
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

No. X (Twitter) Stock & Crypto AI Trading Signals de Xquik incluye los costos de
IA en su precio. No necesitas cuenta de IA, tokens ni clave. Tampoco necesitas
clave de API de X, inicio de sesión ni credenciales.

### ¿Puedo seguir varios tickers en 1 ejecución?

Sí. Enumera cada activo con sus tickers y alias en `analysis.targets`. Combina
sus términos de búsqueda. Las respuestas de relevancia te dicen qué posts tratan
a tus objetivos como activos.

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
[pestaña API](https://apify.com/xquik/x-twitter-stock-crypto-signals/api) para
ver ejemplos en Python, JavaScript y cURL. Usa las
[programaciones](https://docs.apify.com/platform/schedules) de Apify para
ejecuciones recurrentes. Pasa el ID del dataset anterior como
`monitor.baselineDatasetId` para ver qué cambió. Las integraciones de Apify
también conectan las ejecuciones con webhooks, Make, Zapier, n8n y Google
Sheets.

### ¿Dónde consigo ayuda?

Abre un issue en la página del Actor o escribe a support@xquik.com con el ID de
la ejecución. Los diagnósticos gratuitos del almacén de clave-valor explican las
ejecuciones vacías, parciales o interrumpidas.