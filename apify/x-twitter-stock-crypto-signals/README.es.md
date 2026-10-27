[English](README.md) · **Español** · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer conecta Xquik MCP con agentes de codificación](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Mira cómo Framer usa los extractores de Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
con Claude Code, Codex, Cursor & más, desde el minuto 6:07.

Xquik es el servicio de scraping de X (Twitter) más rápido y económico del
mundo, con los datos de X más completos. X (Twitter) Stock & Crypto AI Trading
Signals de Xquik convierte los posts en posturas. Cada postura es alcista,
bajista, neutral o mixta, por ticker & por moneda. La mayoría de los demás
Actores de Apify cobran antes de filtrar o quitar duplicados. Xquik solo cobra
los resultados entregados, únicos y que cumplen tus filtros. El precio por post
incluye los costos de IA. No necesitas cuenta de IA, tokens ni clave.

Lee la postura detrás de los posts sobre acciones, cripto & trading en X
(Twitter). **X (Twitter) Stock & Crypto AI Trading Signals** de Xquik recopila
posts sobre tus activos. Agrega con IA a cada post una postura, un tipo de
contenido, un nivel de convicción & la relevancia del activo. Separa las
apuestas firmes de los comentarios con reservas, & el análisis de la promoción.
Detecta los posts que usan el nombre de tu activo para otra cosa.

- **Postura por post.** Cada post es alcista, bajista, neutral, mixto o
  incierto.
- **Tipo de contenido.** Distingue análisis, noticias, ideas de trading,
  promoción, humor & preguntas.
- **Convicción.** Separa las apuestas & posiciones firmes de los comentarios con
  reservas.
- **Relevancia.** Te ayuda a descartar usos ajenos de un ticker o del nombre de
  una empresa.
- **Registros de origen completos.** Cada fila conserva todos los campos que
  muestra el post.

> Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
> "Twitter" y "X" son marcas registradas de X Corp.

## Cómo analizar el sentimiento del mercado en X

¿Recién llegas a Apify? Primero
[crea una cuenta gratis](https://console.apify.com/sign-up?fpr=xquik). El plan
gratuito no pide tarjeta de crédito & te da $5 para gastar cada mes. A $0.0003
por post analizado, $5 alcanzan para hasta 16,000 posts analizados, sin contar
el uso de la plataforma. Luego vuelve aquí & haz clic en Try for free.

1. Agrega términos de búsqueda como `$NVDA lang:en -filter:retweets`, consultas
   de cashtags, nombres de usuario de perfiles o IDs de posts.
2. Define `maxItems` & filtros de extracción como límites de fecha o un mínimo
   de Me gusta.
3. Pon los nombres, tickers & alias de los activos en `analysis.targets` &
   describe el activo en `analysis.context`.
4. Inicia la ejecución & abre el dataset.

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
probabilidad en el nivel 0 & toma la confianza de la postura.

Las respuestas describen lo que expresan los autores. No son asesoría de
inversión & no verifican afirmaciones, precios ni reportes regulatorios.

## Analiza tu propio texto

Pega en `texts` tus propios borradores, respuestas, reseñas o notas. X (Twitter)
Stock & Crypto AI Trading Signals de Xquik los analiza. No obtiene nada de X.

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
- `tweet.id` es `text:1`, `text:2` & así sucesivamente, & `tweet.type` es
  `text`.
- Cada texto analizado cuesta los mismos $0.0003 que un post analizado.
- Con `texts` definido, la ejecución solo analiza esos textos. Ejecuta los
  objetivos de X por separado.

## ¿Cuánto cuesta analizar el sentimiento del mercado en X?

X (Twitter) Stock & Crypto AI Trading Signals de Xquik cuesta desde $0.0003 por
post analizado. No cobra tarifa de inicio. El precio incluye la recopilación &
los costos de IA. No necesitas cuenta de IA, tokens ni clave. El precio cubre
hasta 8 preguntas & 64,000 bytes de contexto por post. Cada definición de
pregunta puede usar hasta 8,000 bytes.

Para más volumen, [elige un plan de Apify](https://apify.com/pricing?fpr=xquik)
con más uso prepagado.

Los filtros de extracción & la eliminación de duplicados se aplican antes del
análisis. Nunca pagas por filas filtradas ni duplicadas. Los análisis fallidos,
los análisis omitidos & las filas de diagnóstico no tienen cargo por resultado.
Apify factura aparte el uso de la plataforma para cómputo, almacenamiento &
transferencia, según las tarifas de tu plan. La pestaña Pricing lo muestra.

## Ejemplos de entrada & salida

La entrada de arriba está lista para copiar. Una fila de salida abreviada se ve
así.

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

Cada resultado contiene `tweet` & `analysis`. Las respuestas incluyen tipos,
versiones de pregunta & las probabilidades disponibles. Una fila con un análisis
fallido u omitido conserva el post recopilado & un `reason`. Su lista de
respuestas queda vacía.

Los diagnósticos gratuitos del almacén de clave-valor explican las entradas
inválidas, los resultados faltantes & las recopilaciones interrumpidas. El
informe de la ejecución separa las filas recopiladas, los análisis cobrados &
los cargos pendientes.

## Resumen de ejecución & respuestas planas

Una ejecución escribe un registro `analysis-summary` en su almacén de
clave-valor en 3 casos.

- Tiene un problema o es grande.
- Su comparación encuentra un post cambiado, nuevo o no comparable.
- Tiene `alwaysSaveRunRecords` activado.

Las demás ejecuciones omiten el registro, incluida la primera ejecución de una
serie. Su estado nombra la respuesta principal, como
`Top stance is bullish in 3 of 5 results.` Una comparación sin cambios indica
`No change since the earlier run.` Una ejecución que tiene un problema o es
grande también escribe `run-report`. Lo mismo hace una ejecución con
`alwaysSaveRunRecords` activado. `run-report` repite el resumen en
`results.analysisSummary`.

El resumen cuenta las filas analizadas, fallidas & omitidas. Suma la interacción
& resume cada pregunta.

- `cashtags` cuenta la postura por cashtag, como `$NVDA`. La proporción alcista
  de cada activo sale de `choices.stance`.
- Cada entrada de `cashtags` agrega `signal` con los conteos alcistas &
  bajistas. Su puntaje va de -1 a 1. El puntaje es alcistas menos bajistas,
  dividido por las filas.
- El bloque `stance` agrega la división ponderada por interacción & los posts
  alcistas y bajistas con más interacción.
- `conviction` informa la media & la media ponderada por interacción.
- `monitor.changedRows` enumera los posts cuya postura cambió desde la línea
  base.
- Cada fila enumera `sourceDomains`, los nombres de host a los que enlaza.
- Con `monitor.baselineDatasetId` definido, el bloque `monitor` del resumen
  cuenta los estados de comparación. Enumera hasta 50 filas cambiadas.

El resumen redondea los números a 4 decimales. Una ejecución vacía informa
conteos en 0 & medias `null`.

Cada fila de resultado también trae `answers`, un mapa plano con el ID de cada
pregunta como clave. Cada valor es la categoría, el puntaje o la probabilidad
elegidos. La vista de dataset `Flat answers` & las exportaciones a CSV o Excel
muestran 1 columna por pregunta. Las columnas quedan junto al post, así que las
hojas de cálculo no necesitan procesar JSON. Las filas fallidas & omitidas traen
un mapa vacío.

## Compara con una ejecución anterior

Pasa `monitor.baselineDatasetId`, el ID del dataset de una ejecución anterior
completada con la misma configuración de análisis. La comparación lee las filas
de esa ejecución. Funciona aunque esa ejecución haya omitido su resumen. Luego,
cada fila recibe un objeto `monitor`. Su estado toma estos valores.

- `first_run` sin línea base.
- `new_to_baseline` para posts que la ejecución anterior no tenía.
- `unchanged` o `changed` para posts que sí tenía.

`changes` enumera cada postura, tipo de contenido o nivel de convicción que pasó
de `previous` a `current`. Las decisiones se comparan por categoría, por nivel
de puntaje redondeado o por sí o no con corte en 0.5. Una decisión cuenta como
cambiada solo cuando se mueve con claridad. Los casi empates entre ejecuciones
quedan en `unchanged`.

Una línea base que supera `maxBaselineRows`, o que usa otra configuración,
detiene la ejecución antes de la recopilación. La ejecución escribe entonces una
fila de diagnóstico. `maxBaselineRows` es 100,000 de forma predeterminada.

## Ejemplos de tareas

Elige entre 50 tareas públicas. Cada una parte de una búsqueda real en inglés &
un `maxItems` acotado. Incluye objetivos, contexto & la vista general del
dataset, ya preparados. Edita la búsqueda o los objetivos antes de ejecutarla.

- [Sentimiento del mercado sobre Nvidia (NVDA) en X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/nvda-market-sentiment-on-x)
- [Sentimiento del mercado sobre Tesla (TSLA) en X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/tsla-market-sentiment-on-x)
- [Sentimiento del mercado sobre Apple (AAPL) en X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/aapl-market-sentiment-on-x)
- [Sentimiento del mercado sobre Amazon (AMZN) en X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/amzn-market-sentiment-on-x)
- [Sentimiento del mercado sobre Microsoft (MSFT) en X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/msft-market-sentiment-on-x)
- [Sentimiento del mercado sobre Alphabet (GOOGL) en X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/googl-market-sentiment-on-x)
- [Sentimiento del mercado sobre Meta (META) en X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/meta-market-sentiment-on-x)
- [Sentimiento del mercado sobre AMD (AMD) en X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/amd-market-sentiment-on-x)
- [Sentimiento del mercado sobre Palantir (PLTR) en X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/pltr-market-sentiment-on-x)
- [Sentimiento del mercado sobre Coinbase (COIN) en X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/coin-market-sentiment-on-x)
- [Sentimiento del mercado sobre Strategy (MSTR) en X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/mstr-market-sentiment-on-x)
- [Sentimiento del mercado sobre Robinhood (HOOD) en X](https://apify.com/xquik/x-twitter-stock-crypto-signals/examples/hood-market-sentiment-on-x)

Las demás tareas cubren más marcas, temas & mercados en la página del Actor.

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
- [X Community Scraper](https://apify.com/xquik/x-community-scraper) extrae
  información, posts, búsquedas, miembros & moderadores de Comunidades. Úsalo
  cuando tus fuentes sean Comunidades de X. Desde $0.00015 por fila.
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
- [X (Twitter) Monitor](https://apify.com/xquik/x-twitter-monitor) detecta cada
  tweet, respuesta, cita, repost y cambio de perfil nuevos de las cuentas,
  normalmente en menos de un segundo después de que X lo muestra, además de los
  tweets de palabras clave y los seguimientos. Úsalo cuando necesites alertas en
  cuanto X muestre un tweet. Desde $0.0045 por monitor-hour.

## Preguntas frecuentes & soporte

Respuestas a preguntas comunes y, luego, dónde conseguir ayuda.

### ¿Necesito una cuenta de IA, una clave de API de X o iniciar sesión?

No. X (Twitter) Stock & Crypto AI Trading Signals de Xquik incluye los costos de
IA en su precio. No necesitas cuenta de IA, tokens ni clave. Tampoco necesitas
clave de API de X, inicio de sesión ni credenciales.

### ¿Puedo seguir varios tickers en una sola ejecución?

Sí. Enumera cada activo con sus tickers & alias en `analysis.targets`. Combina
sus términos de búsqueda. Las respuestas de relevancia te dicen qué posts tratan
a tus objetivos como activos.

### ¿Por qué una fila volvió con un análisis fallido u omitido?

`analysis.status` es `failed` o `skipped`. El Actor recopiló & entregó el post,
pero el análisis con IA no se completó. `analysis.reason` indica la causa.
`context_limit` significa que tu contexto & tus objetivos no dejan espacio para
el post. `service_unavailable` significa que el servicio de análisis no estuvo
disponible por un momento. Estas filas no tienen cargo por resultado. Acorta
`analysis.context` o vuelve a ejecutar los IDs afectados.

El Actor analiza incluso un post más largo que `maxContextBytes`. Primero
recorta los posts citados & respondidos, y luego el post. En ese caso,
`analysis.contextAvailability.postText` queda en `truncated`. Sube
`maxContextBytes` hasta 64,000 para conservar más texto.

### ¿El análisis verifica hechos?

No. Las respuestas describen lo que expresa el post & cómo lo plantea. Las
probabilidades expresan la confianza de la IA, no la verdad. Revisa las
clasificaciones importantes contra el post original, que cada fila conserva.

### ¿Qué idiomas funcionan?

La extracción admite todos los idiomas que ofrece X. Validamos el análisis
primero con escenarios de clientes en inglés. Los demás idiomas compatibles
devuelven respuestas con la misma estructura. Las categorías `unclear` & las
probabilidades muestran la incertidumbre en todos los idiomas.

### ¿Cómo limito el costo?

Los filtros, la eliminación de duplicados & `maxItems` se aplican antes del
análisis. Solo pagas los posts únicos que cumplen tus filtros. Usa operadores de
búsqueda precisos, límites de fecha & mínimos de interacción. Empieza con un
`maxItems` pequeño para revisar la calidad de las respuestas antes de una
ejecución grande.

### ¿Es legal analizar datos de X?

El Actor solicita campos públicos de X. Los resultados pueden contener datos
personales. Confirma que tu propósito es lícito & cumple las normas de
privacidad aplicables. Si tienes dudas, consulta a un abogado calificado.

### ¿Puedo usar la API, las programaciones & las integraciones?

Sí. Consulta la
[pestaña API](https://apify.com/xquik/x-twitter-stock-crypto-signals/api) para
ver ejemplos en Python, JavaScript & cURL. Usa las
[programaciones](https://docs.apify.com/platform/schedules) de Apify para
ejecuciones recurrentes. Pasa el ID del dataset anterior como
`monitor.baselineDatasetId` para ver qué cambió. Las integraciones de Apify
también conectan las ejecuciones con webhooks, Make, Zapier, n8n & Google
Sheets.

### ¿Dónde consigo ayuda?

Abre un issue en la
[pestaña Issues](https://apify.com/xquik/x-twitter-stock-crypto-signals/issues)
con el ID de la ejecución. Los diagnósticos gratuitos del almacén de clave-valor
explican las ejecuciones que requieren atención. Una ejecución que no recibe
ninguna fila explica el motivo en su estado.
