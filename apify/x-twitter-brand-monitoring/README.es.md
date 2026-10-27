[English](README.md) · **Español** · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer conecta Xquik MCP con agentes de codificación](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Mira cómo Framer usa los extractores de Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
con Claude Code, Codex, Cursor & más, desde el minuto 6:07.

Xquik es el servicio de scraping de X (Twitter) más rápido y económico del
mundo, con los datos de X más completos. X (Twitter) Brand Monitoring de Xquik
sigue las menciones de tu marca con respuestas de relevancia, sentimiento &
experiencia del cliente. La mayoría de los demás Actores de Apify cobran antes
de filtrar o quitar duplicados. Xquik solo cobra los resultados entregados,
únicos y que cumplen tus filtros. El precio por post incluye los costos de IA.
No necesitas cuenta de IA, tokens ni clave.

Monitorea las menciones de marca en X (Twitter) & sigue los cambios de
sentimiento entre ejecuciones. **X (Twitter) Brand Monitoring with AI Analysis**
de Xquik recopila todos los posts que coinciden. Responde con IA preguntas de
relevancia, sentimiento & experiencia del cliente para cada post. Compara esas
respuestas con un dataset anterior, así ves qué cambió. Cada fila conserva los
datos originales del post. Las exportaciones, las revisiones & los análisis
posteriores no necesitan una segunda extracción.

Vigila una marca, una línea de productos o una campaña para detectar quejas,
elogios & preguntas de compra. Informa a los equipos de soporte & marketing con
posts reales. Guarda un historial de cómo hablan de ti los clientes, de una
ejecución a otra.

> Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
> "Twitter" y "X" son marcas registradas de X Corp.

## ¿Por qué usar X (Twitter) Brand Monitoring with AI Analysis?

- **Cuota de voz por marca.** El resumen da las menciones, la cuota de voz & la
  interacción por marca & alias.
- **Alertas sobre lo que cambió.** Agrega el ID del dataset de una ejecución
  anterior a `monitor.baselineDatasetId`. `monitor.changedRows` enumera las
  menciones cuyas decisiones cambiaron, listas para un webhook.
- **Menciones principales por marca.** Cada marca enumera sus 3 menciones con
  más interacción por categoría de respuesta.
- **Detecta homónimos.** Una probabilidad de relevancia marca las menciones que
  no hablan de tu marca.
- **Analiza tu propio texto.** Pega reseñas, respuestas o borradores en `texts`
  para recibir las mismas respuestas de IA. La ejecución no obtiene nada de X.
- **Respuestas listas para hojas de cálculo.** La vista `Flat answers` & las
  exportaciones CSV o Excel muestran 1 columna por pregunta.
- **Haz tus propias preguntas.** Reemplaza las predeterminadas con hasta 8
  preguntas en `analysis.questions`.
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

## ¿Qué datos devuelve X (Twitter) Brand Monitoring with AI Analysis?

- **Todos los campos del post de origen.** El texto, el autor, los conteos, el
  contenido multimedia, los enlaces & los posts citados y respondidos quedan
  junto a las respuestas.
- **Respuestas tipadas.** Cada fila tiene una probabilidad de relevancia, una
  categoría de sentimiento con probabilidades & una categoría de experiencia del
  cliente.

## Cómo monitorear una marca en X

¿Recién llegas a Apify? Primero
[crea una cuenta gratis](https://console.apify.com/sign-up?fpr=xquik). El plan
gratuito no pide tarjeta de crédito & te da $5 para gastar cada mes. A $0.0003
por post analizado, $5 alcanzan para hasta 16,000 posts analizados, sin contar
el uso de la plataforma. Luego vuelve aquí & haz clic en Try for free.

1. Agrega términos de búsqueda, nombres de usuario de perfiles, URLs de posts o
   IDs de posts. Por ejemplo, busca `(Sony OR "WH-1000XM5") headphones lang:en`.
2. Define `maxItems` & los filtros de extracción que necesite tu tarea. Algunos
   ejemplos son los límites de fecha, un mínimo de Me gusta & la exclusión de
   respuestas.
3. Pon los nombres & alias de tu marca en `analysis.targets` & describe la marca
   en `analysis.context`.
4. Inicia la ejecución & luego guarda el ID del dataset para tu próxima
   comparación.
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
posts irrelevantes. Elige términos de búsqueda & filtros que se ajusten a tu
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
empates entre ejecuciones quedan en `unchanged`, & lo mismo pasa con los cambios
que mantienen la misma decisión. Así, las pequeñas diferencias de la IA entre
ejecuciones no aparecen como cambios.

`changes` enumera cada pregunta cambiada con su decisión `previous` & `current`.
Los cambios pueden venir de la variación de la IA, de contexto nuevo o de datos
de origen editados. No prueban que los hechos hayan cambiado, & un post ausente
no prueba que se haya eliminado.

El límite de la línea base, `maxBaselineRows`, es 100,000 filas de forma
predeterminada. Los IDs de posts duplicados, los fallos de carga & los datasets
que cambian de tamaño detienen la comparación antes de la recopilación. Nunca se
convierten en una línea base vacía.

## Analiza tu propio texto

Pega en `texts` tus propios borradores, respuestas, reseñas o notas. X (Twitter)
Brand Monitoring de Xquik los analiza. No obtiene nada de X.

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
- `tweet.id` es `text:1`, `text:2` & así sucesivamente, & `tweet.type` es
  `text`.
- Cada texto analizado cuesta los mismos $0.0003 que un post analizado.
- Con `texts` definido, la ejecución solo analiza esos textos. Ejecuta los
  objetivos de X por separado.

## ¿Cuánto cuesta monitorear una marca en X?

X (Twitter) Brand Monitoring de Xquik cuesta desde $0.0003 por post analizado.
No cobra tarifa de inicio. El precio incluye la recopilación & los costos de IA.
No necesitas cuenta de IA, tokens ni clave. El precio cubre hasta 8 preguntas &
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

Cada resultado contiene `tweet`, `analysis` & `monitor`. Las respuestas incluyen
tipos, versiones de pregunta & las probabilidades disponibles.
`analysis.contextAvailability` informa si falta contexto de cita, respuesta,
autor o contenido multimedia. Una fila con un análisis fallido u omitido
conserva el post recopilado & un `reason`. Su lista de respuestas queda vacía.

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
`Top sentiment is negative in 2 of 5 results.` Una comparación sin cambios
indica `No change since the earlier run.` Una ejecución que tiene un problema o
es grande también escribe `run-report`. Lo mismo hace una ejecución con
`alwaysSaveRunRecords` activado. `run-report` repite el resumen en
`results.analysisSummary`.

El resumen cuenta las filas analizadas, fallidas & omitidas. Suma la interacción
& resume cada pregunta.

- `targets` informa las menciones, la participación en la conversación & la
  interacción por marca o alias.
- Cada entrada de `targets` tiene `top`, sus 3 menciones con más interacción por
  categoría de respuesta. Úsalo para alertar sobre las menciones negativas &
  positivas más fuertes.
- Cada entrada de `targets` tiene `choices`, la división de respuestas entre los
  posts que mencionan esa marca.
- El bloque `sentiment` enumera en `top` las 3 menciones positivas & negativas
  con más interacción.
- `relevance` cuenta las menciones que sí hablan de la marca.
- `monitor.changedRows` enumera los posts cuyas decisiones cambiaron desde la
  línea base. Envíalos a un webhook o a una alerta.
- Con `monitor.baselineDatasetId` definido, el bloque `monitor` cuenta los
  estados de comparación. Enumera hasta 50 filas cambiadas.
- Cada fila enumera `sourceDomains`, los nombres de host a los que enlaza.

El resumen redondea los números a 4 decimales. Una ejecución vacía informa
conteos en 0 & medias `null`.

Cada fila de resultado también trae `answers`, un mapa plano con el ID de cada
pregunta como clave. Cada valor es la categoría, el puntaje o la probabilidad
elegidos. La vista de dataset `Flat answers` & las exportaciones a CSV o Excel
muestran 1 columna por pregunta. Las columnas quedan junto al post, así que las
hojas de cálculo no necesitan procesar JSON. Las filas fallidas & omitidas traen
un mapa vacío.

## Ejemplos de tareas

Elige entre 50 tareas públicas. Cada una parte de una búsqueda real en inglés &
un `maxItems` acotado. Incluye objetivos, contexto & la vista general del
dataset, ya preparados. Edita la búsqueda o los objetivos antes de ejecutarla.

- [Monitorea las menciones de la marca Nike en X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-nike-brand-mentions-on-x)
- [Monitorea las menciones de la marca Starbucks en X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-starbucks-brand-mentions-on-x)
- [Monitorea las menciones de la marca Tesla en X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-tesla-brand-mentions-on-x)
- [Monitorea las menciones de la marca Spotify en X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-spotify-brand-mentions-on-x)
- [Monitorea las menciones de la marca Netflix en X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-netflix-brand-mentions-on-x)
- [Monitorea las menciones de la marca Airbnb en X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-airbnb-brand-mentions-on-x)
- [Monitorea las menciones de la marca Uber en X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-uber-brand-mentions-on-x)
- [Monitorea las menciones de la marca Peloton en X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-peloton-brand-mentions-on-x)
- [Monitorea las menciones de la marca Shopify en X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-shopify-brand-mentions-on-x)
- [Monitorea las menciones de la marca Notion en X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-notion-brand-mentions-on-x)
- [Monitorea las menciones de la marca Duolingo en X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-duolingo-brand-mentions-on-x)
- [Monitorea las menciones de la marca Lululemon en X](https://apify.com/xquik/x-twitter-brand-monitoring/examples/monitor-lululemon-brand-mentions-on-x)

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
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis)
  etiqueta con IA la actitud, la intensidad & la probabilidad de sarcasmo de
  cada post. Úsalo cuando necesites el sentimiento general sobre cualquier tema.
  Desde $0.0003 por post analizado.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals)
  etiqueta con IA la postura alcista, bajista, neutral o mixta, el tipo de
  contenido, la convicción & la relevancia del activo. Úsalo cuando sigas
  acciones, cripto o conversaciones de trading. Desde $0.0003 por post
  analizado.
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

No. X (Twitter) Brand Monitoring de Xquik incluye los costos de IA en su precio.
No necesitas cuenta de IA, tokens ni clave. Tampoco necesitas clave de API de X,
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
[pestaña API](https://apify.com/xquik/x-twitter-brand-monitoring/api) para ver
ejemplos en Python, JavaScript & cURL. Usa las
[programaciones](https://docs.apify.com/platform/schedules) de Apify para
ejecuciones recurrentes. Pasa el ID del dataset anterior como
`monitor.baselineDatasetId` para ver qué cambió. Las integraciones de Apify
también conectan las ejecuciones con webhooks, Make, Zapier, n8n & Google
Sheets.

### ¿Dónde consigo ayuda?

Abre un issue en la
[pestaña Issues](https://apify.com/xquik/x-twitter-brand-monitoring/issues) con
el ID de la ejecución. Los diagnósticos gratuitos del almacén de clave-valor
explican las ejecuciones que requieren atención. Una ejecución que no recibe
ninguna fila explica el motivo en su estado.
