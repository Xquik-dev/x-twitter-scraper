[English](README.md) · **Español** · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer conecta Xquik MCP con agentes de codificación](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Mira cómo Framer usa los extractores de Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
con Claude Code, Codex, Cursor & más, desde el minuto 6:07.

Xquik es el servicio de scraping de X (Twitter) más rápido y económico del
mundo, con los datos de X más completos. X (Twitter) News Monitor de Xquik
ordena los posts de noticias por formato, atribución de la fuente & relevancia.
La mayoría de los demás Actores de Apify cobran antes de filtrar o quitar
duplicados. Xquik solo cobra los resultados entregados, únicos y que cumplen tus
filtros. El precio por post incluye los costos de IA. No necesitas cuenta de IA,
tokens ni clave.

Ordena por tipo los posts de noticias en X (Twitter) & conserva los datos
originales del post. **X (Twitter) News Monitor with AI Analysis** de Xquik
recopila posts sobre tus temas. Agrega con IA a cada post una respuesta de
formato, atribución de la fuente & relevancia. Separa la información de la
opinión & la especulación. Ve si un post nombra una fuente o enlaza a ella.
Conserva solo los posts sobre las organizaciones, personas o temas que sigues.

> Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
> "Twitter" y "X" son marcas registradas de X Corp.

## ¿Por qué usar X (Twitter) News Monitor with AI Analysis?

- **La información aparte de la especulación.** Filtra por la respuesta `format`
  para conservar la información & descartar la especulación o la promoción.
- **Ve qué fuentes se citan.** `sourceDomains` cuenta los dominios enlazados en
  toda la ejecución.
- **Los Artículos enlazados cuentan.** Un post que enlaza un Artículo de X
  también recibe respuestas sobre el Artículo.
- **Cobertura por objetivo.** Cada objetivo recibe su propia distribución de
  formato & atribución, & sus posts principales.
- **Ve qué cambió.** Agrega el ID del dataset de una ejecución anterior a
  `monitor.baselineDatasetId`. Así cada fila muestra qué decisiones cambiaron.
- **Revisa tu propio texto.** Pega titulares o borradores en `texts` para
  recibir las mismas respuestas de IA. La ejecución no obtiene nada de X.
- **Respuestas listas para hojas de cálculo.** La vista `Flat answers` & las
  exportaciones CSV o Excel muestran 1 columna por pregunta.
- **Sin cuentas ni claves.** El precio incluye el análisis con IA. No necesitas
  clave de IA, clave de API de X ni inicio de sesión.

### Resultados completos

- Los rangos de fechas grandes vuelven completos & rápido.
- Las búsquedas devuelven todas las coincidencias, sin importar qué operadores
  combines.
- Las páginas filtradas vuelven llenas hasta que se acaban los resultados.
- Cada resultado trae los datos más completos que X tiene sobre él.

### Filas precisas

- Los resultados de búsqueda traen todos los posts que coinciden con tu consulta
  & nada más.
- La coincidencia de palabras & frases funciona en todos los idiomas & sistemas
  de escritura.
- Los filtros de idioma funcionan con todos los idiomas que X etiqueta.
- Las cuentas protegidas & las Listas privadas reciben una respuesta clara, no
  una página vacía.
- Los reposts traen el texto original completo.
- Cada ID de una fila se mantiene exacto.
- Las menciones, los enlaces, los hashtags & los resaltados quedan alineados con
  el texto.
- Las insignias de verificación coinciden con lo que muestra `x.com`.
- Las filas solo contienen datos públicos.
- Los resultados con los más recientes primero mantienen el orden real por fecha
  entre páginas.
- Las búsquedas aceptan consultas tal como las escribirías en X.
- Las búsquedas de lugares funcionan con nombres en 6 idiomas.
- Una búsqueda que no puede ejecutarse falla de inmediato & dice cómo
  corregirla.
- Una fecha significa lo mismo en cualquier formato común.
- Las búsquedas aceptan los límites `since_id` & `max_id`.
- Los anuncios & las entradas promocionadas nunca llegan a tus filas.

### Datos actualizados

- Las lecturas siguen funcionando cuando X lanza cambios.

### Velocidad

- Una página lenta no frena tu ejecución.
- Las búsquedas siguen siendo rápidas en temas con mucha actividad.
- Cada página siguiente llega rápido.
- Las lecturas terminan en cuanto llegan sus filas.
- Las llamadas a Actores que se atascan se recuperan solas.

### Cobro justo

- Una entrada inválida no cuesta nada & te dice qué corregir.
- El análisis con IA solo cobra los posts que analizó.
- Los Actores solo cobran las filas entregadas, únicas & que cumplen tus
  filtros.
- Una ejecución reiniciada nunca cobra 2 veces.
- Las ejecuciones respetan tu límite de gasto & aun así escriben sus
  diagnósticos.
- Los Actores de IA no cobran los análisis fallidos u omitidos.

### Confiabilidad

- Un error aislado no hace fallar tu ejecución.
- La paginación se mantiene coherente de una página a la siguiente.
- La paginación nunca entra en un bucle infinito.
- Si se acaba el tiempo, recibes las filas ya encontradas, con diagnósticos.
- Los Actores resisten las caídas breves de Xquik.
- Las ejecuciones de los Actores siguen tras un reinicio sin repetir nada.
- Una fila defectuosa no arruina un lote.
- Las ejecuciones detenidas conservan sus filas & su informe.
- Una ejecución que no puede iniciar igual explica por qué.
- Soporte puede ver exactamente qué devolvió una solicitud o una ejecución.

### Hecho para agentes

- Los Actores aceptan entradas escritas para otros Actores.
- Cada ejecución dice por qué terminó & si conviene reintentar.

### Datos detallados

- Las filas de posts traen el texto de los Note Tweets, las ediciones, las Notas
  de la Comunidad, las etiquetas de alcance & los controles de respuesta.
- Las filas traen la app de origen, los conteos de contenido multimedia & los
  datos de cuentas profesionales.
- El contenido multimedia trae variantes, texto alternativo, tamaños & motivos
  de disponibilidad.
- Las respuestas de IA traen probabilidades, confianza & una versión de
  pregunta.
- El ruido no genera cambios falsos entre ejecuciones de análisis.

### Controles de calidad

- Cada campo que muestra X se entrega, se omite a propósito o se comprueba que
  no existe.
- Xquik prueba cada lectura en vivo contra X.

## ¿Qué datos devuelve X (Twitter) News Monitor with AI Analysis?

- **Formato.** Distingue información, opinión, especulación, promoción & sátira.
- **Atribución.** Muestra si una afirmación nombra una fuente, la enlaza, es de
  primera mano o no tiene fuente.
- **Relevancia.** Distingue los posts sobre tus objetivos de los que solo
  comparten el nombre.
- **Registros de origen completos.** Cada fila conserva todos los campos que
  muestra el post, incluidos los artículos enlazados cuando existen.

## Cómo clasificar posts de noticias en X

¿Recién llegas a Apify? Primero
[crea una cuenta gratis](https://console.apify.com/sign-up?fpr=xquik). El plan
gratuito no pide tarjeta de crédito & te da $5 para gastar cada mes. A $0.0003
por post analizado, $5 alcanzan para hasta 16,000 posts analizados, sin contar
el uso de la plataforma. Luego vuelve aquí & haz clic en Try for free.

1. Agrega términos de búsqueda como `Nvidia earnings lang:en -filter:retweets`,
   nombres de usuario de cuentas de noticias o IDs de posts.
2. Define `maxItems` & filtros de extracción como límites de fecha,
   `filter:links` o un mínimo de reposts.
3. Pon en `analysis.targets` las organizaciones, personas o temas que sigues,
   con sus alias. Acota el tema en `analysis.context`.
4. Inicia la ejecución & abre el dataset.

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

- El formato es información, opinión, especulación, promoción, sátira, no
  relacionado o incierto.
- La atribución es nombrada, enlazada, de primera mano, ausente o incierta.
- La relevancia es la probabilidad de que el hecho informado se refiera a tus
  objetivos.

La clasificación no verifica hechos. Nombrar una fuente no la vuelve creíble. La
atribución describe lo que presenta el post.

## Analiza tu propio texto

Pega en `texts` tus propios borradores, respuestas, reseñas o notas. X (Twitter)
News Monitor de Xquik los analiza. No obtiene nada de X.

```json
{
  "texts": [
    "Central bank holds rates at 4.5%, signals 2 cuts next year.",
    "I was at the port this morning. Cranes are idle & trucks are queued."
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

## ¿Cuánto cuesta clasificar posts de noticias en X?

X (Twitter) News Monitor de Xquik cuesta desde $0.0003 por post analizado. No
cobra tarifa de inicio. El precio incluye la recopilación & los costos de IA. No
necesitas cuenta de IA, tokens ni clave. El precio cubre hasta 8 preguntas &
64,000 bytes de contexto por post. Cada definición de pregunta puede usar hasta
8,000 bytes.

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

Cada resultado contiene `tweet` & `analysis`. Las respuestas incluyen tipos,
versiones de pregunta & las probabilidades disponibles. Una fila con un análisis
fallido u omitido conserva el post recopilado & un `reason`. Su lista de
respuestas queda vacía.

Cuando un post enlaza un Artículo de X, el análisis también obtiene ese
artículo. Agrega como contexto el título, la vista previa & los bloques de
texto. `analysis.contextAvailability.article` informa `text_blocks`, `summary` o
`not_supplied`. `summary` significa que solo hay título & vista previa.

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
`Top format is reporting in 4 of 5 results.` Una comparación sin cambios indica
`No change since the earlier run.` Una ejecución que tiene un problema o es
grande también escribe `run-report`. Lo mismo hace una ejecución con
`alwaysSaveRunRecords` activado. `run-report` repite el resumen en
`results.analysisSummary`.

El resumen cuenta las filas analizadas, fallidas & omitidas. Suma la interacción
& resume cada pregunta.

- La división de `format` separa la información de la opinión, la especulación,
  la promoción & la sátira.
- `attribution` cuenta las fuentes nombradas, enlazadas, de primera mano &
  ausentes.
- `relevance` cuenta los posts sobre cada objetivo.
- `targets` da las menciones por objetivo. El `top` de cada objetivo enumera sus
  posts con más interacción por categoría de respuesta.
- Cada entrada de `targets` tiene `choices`, la división por formato &
  atribución de los posts sobre ese objetivo.
- `sourceDomains` cuenta los dominios enlazados en toda la ejecución.
- `monitor.changedRows` enumera los posts cuyas decisiones cambiaron desde la
  línea base.
- Cada fila enumera `sourceDomains`, los nombres de host a los que enlaza.
- Cada fila enumera los `cashtags` de su texto, como `$NVDA`.
- Con `monitor.baselineDatasetId` definido, el bloque `monitor` del resumen
  cuenta los estados de comparación. Enumera hasta 50 filas cambiadas.

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

`changes` enumera cada decisión de formato, atribución o relevancia que pasó de
`previous` a `current`. Las decisiones se comparan por categoría, por nivel de
puntaje redondeado o por sí o no con corte en 0.5. Una decisión cuenta como
cambiada solo cuando se mueve con claridad. Los casi empates entre ejecuciones
quedan en `unchanged`.

Una línea base que supera `maxBaselineRows`, o que usa otra configuración,
detiene la ejecución antes de la recopilación. La ejecución escribe entonces una
fila de diagnóstico. `maxBaselineRows` es 100,000 de forma predeterminada.

## Ejemplos de tareas

Elige entre 50 tareas públicas. Cada una parte de una búsqueda real en inglés &
un `maxItems` acotado. Incluye objetivos, contexto & la vista general del
dataset, ya preparados. Edita la búsqueda o los objetivos antes de ejecutarla.

- [Clasifica posts de noticias sobre Nvidia en X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-nvidia-news-posts-on-x)
- [Clasifica posts de noticias con Artículos de X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-x-article-news-posts)
- [Clasifica posts de noticias sobre OpenAI en X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-openai-news-posts-on-x)
- [Clasifica posts de noticias sobre Apple en X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-apple-news-posts-on-x)
- [Clasifica posts de noticias sobre Tesla en X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-tesla-news-posts-on-x)
- [Clasifica posts de noticias sobre SpaceX en X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-spacex-news-posts-on-x)
- [Clasifica posts de noticias sobre Boeing en X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-boeing-news-posts-on-x)
- [Clasifica posts de noticias sobre Pfizer en X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-pfizer-news-posts-on-x)
- [Clasifica posts de noticias sobre Moderna en X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-moderna-news-posts-on-x)
- [Clasifica posts de noticias sobre ExxonMobil en X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-exxon-news-posts-on-x)
- [Clasifica posts de noticias sobre la Reserva Federal en X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-federal-reserve-news-posts-on-x)
- [Clasifica posts de noticias sobre el Banco Central Europeo en X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-european-central-bank-news-posts-on-x)
- [Clasifica posts de noticias sobre el Banco de Inglaterra en X](https://apify.com/xquik/x-twitter-news-monitor/examples/classify-bank-of-england-news-posts-on-x)

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
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)
  etiqueta con IA la postura alcista, bajista, neutral o mixta, el tipo de
  contenido, la convicción & la relevancia del activo. Úsalo cuando sigas
  acciones, cripto o conversaciones de trading. Desde $0.0003 por post
  analizado.
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

No. X (Twitter) News Monitor de Xquik incluye los costos de IA en su precio. No
necesitas cuenta de IA, tokens ni clave. Tampoco necesitas clave de API de X,
inicio de sesión ni credenciales.

### ¿Puedo usar mis propias preguntas?

Sí. Las `analysis.questions` personalizadas reemplazan las predeterminadas.
Envía de 1 a 8 preguntas `choice`, `score` o `probability`. Las preguntas
`choice` aceptan de 2 a 255 categorías. Las preguntas `score` necesitan al menos
2 niveles ordenados. Mantén las mismas preguntas en las ejecuciones que quieras
comparar.

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
[pestaña API](https://apify.com/xquik/x-twitter-news-monitor/api) para ver
ejemplos en Python, JavaScript & cURL. Usa las
[programaciones](https://docs.apify.com/platform/schedules) de Apify para
ejecuciones recurrentes. Pasa el ID del dataset anterior como
`monitor.baselineDatasetId` para ver qué cambió. Las integraciones de Apify
también conectan las ejecuciones con webhooks, Make, Zapier, n8n & Google
Sheets.

### ¿Dónde consigo ayuda?

Abre un issue en la
[pestaña Issues](https://apify.com/xquik/x-twitter-news-monitor/issues) con el
ID de la ejecución. Los diagnósticos gratuitos del almacén de clave-valor
explican las ejecuciones que requieren atención. Una ejecución que no recibe
ninguna fila explica el motivo en su estado.
