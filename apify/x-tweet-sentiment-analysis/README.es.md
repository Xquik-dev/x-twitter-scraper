[English](README.md) · **Español** · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer conecta Xquik MCP con agentes de codificación](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Mira cómo Framer usa los extractores de Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
con Claude Code, Codex, Cursor & más, desde el minuto 6:07.

Xquik es el servicio de scraping de X (Twitter) más rápido y económico del
mundo, con los datos de X más completos. X Tweet Sentiment Analysis de Xquik
agrega actitud, intensidad & sarcasmo a cada post. La mayoría de los demás
Actores de Apify cobran antes de filtrar o quitar duplicados. Xquik solo cobra
los resultados entregados, únicos y que cumplen tus filtros. El precio por post
incluye los costos de IA. No necesitas cuenta de IA, tokens ni clave.

Mide la actitud detrás de los posts de X (Twitter) & conserva los datos
originales del post. **X Tweet Sentiment Analysis with AI** de Xquik recopila
los posts que coinciden. Agrega a cada post una categoría de sentimiento
asignada con IA, un nivel de intensidad & una probabilidad de sarcasmo. Sigue
las reacciones a un lanzamiento, una campaña, un episodio o una figura pública.
Separa las reacciones intensas de las menciones de pasada.

> Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
> "Twitter" y "X" son marcas registradas de X Corp.

## ¿Por qué usar X Tweet Sentiment Analysis with AI?

- **El sentimiento hacia tu marca.** Agrega una marca, un producto o una persona
  a `analysis.targets`. Así las respuestas juzgan la actitud hacia ese objetivo.
- **Pondera las reacciones por interacción.** `engagementShares` pondera la
  distribución del sentimiento por Me gusta, reposts, respuestas & citas. `top`
  enumera los 3 posts con más interacción por actitud.
- **Ve qué cambió.** Agrega el ID del dataset de una ejecución anterior a
  `monitor.baselineDatasetId`. Así cada fila muestra qué respuestas cambiaron.
- **Analiza tu propio texto.** Pega borradores, reseñas o respuestas en `texts`
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
- Los resultados con los más recientes primero llegan en orden por fecha.
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

## ¿Qué datos devuelve X Tweet Sentiment Analysis with AI?

- **Sentimiento por post.** Cada post recibe su propia categoría, así que puedes
  auditar cada respuesta.
- **Intensidad.** Un nivel de 0 a 2 separa los posts enfáticos de los moderados.
- **Probabilidad de sarcasmo.** Marca los posts cuyo texto literal contradice la
  actitud.
- **Registros de origen completos.** Cada fila conserva todos los campos que
  muestra el post.

## Cómo analizar el sentimiento de los tuits

¿Recién llegas a Apify? Primero
[crea una cuenta gratis](https://console.apify.com/sign-up?fpr=xquik). El plan
gratuito no pide tarjeta de crédito & te da $5 para gastar cada mes. A $0.0003
por post analizado, $5 alcanzan para hasta 16,000 posts analizados, sin contar
el uso de la plataforma. Luego vuelve aquí & haz clic en Try for free.

1. Agrega términos de búsqueda, nombres de usuario de perfiles, URLs de posts o
   IDs de posts.
2. Define `maxItems` & los filtros de extracción que necesite tu tarea.
3. Deja `analysis.targets` vacío para evaluar cada post según su propio tema.
   Para enfocarte en una marca, un producto o una persona, agrega sus nombres &
   alias.
4. Inicia la ejecución & abre el dataset.

```json
{
  "searchTerms": ["\"season finale\" lang:en"],
  "maxItems": 200,
  "analysis": { "context": "Reactions to the show, not spoilers." }
}
```

### Qué responde el Actor

| Pregunta    | Respuesta                                                  |
| ----------- | ---------------------------------------------------------- |
| Sentimiento | Positivo, negativo, mixto, neutral o incierto              |
| Intensidad  | 0 mención de pasada, 1 actitud clara, 2 texto enfático     |
| Sarcasmo    | Probabilidad de que el texto literal contradiga la actitud |

Con objetivos, el sentimiento evalúa la actitud hacia ellos. También usa el
contexto de cita o respuesta que aportes. Sin objetivos, evalúa el tema
principal del post.

## Analiza tu propio texto

Pega en `texts` tus propios borradores, respuestas, reseñas o notas. X Tweet
Sentiment Analysis de Xquik los analiza. No obtiene nada de X.

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

## Migra desde otro Actor de sentimiento

Usa 1 nombre por ajuste cuando adaptes una entrada existente.

| Nombre de entrada existente                         | Campo de Xquik   |
| --------------------------------------------------- | ---------------- |
| `query`, `searchQuery`                              | `twitterContent` |
| `queries`, `searchQueries`, `search`                | `searchTerms`    |
| `handles`, `usernames`, `username`, `profileTweets` | `twitterHandles` |
| `tweetUrls`, `postUrls`, `urls`                     | `startUrls`      |
| `tweetIDs`, `tweet_ids`, `postIds`, `tweetId`       | `tweetIds`       |
| `maxTweets`, `maxResults`, `count`, `max_posts`     | `maxItems`       |
| `sort`                                              | `queryType`      |
| `tweetLanguage`, `language`                         | `lang`           |
| `startDate`, `endDate`                              | `since`, `until` |

El Actor acepta estos nombres comunes directamente. También lee los nombres de
filtro de otros Actores de posts. Un filtro sin campo aquí se convierte en un
operador de búsqueda de X en todas las búsquedas de la ejecución, & el registro
de la ejecución enumera esos operadores al inicio. Usa `Latest` o `Top` en
`sort`. Conserva los códigos de idioma & los límites de fecha. Los topes se
aplican a todos los objetivos en conjunto. Esta entrada está lista para
ejecutar.

```json
{ "searchTerms": ["from:NASA"], "sort": "Latest", "maxItems": 5 }
```

Las demás entradas necesitan conversión antes de la ejecución.

Pon un solo `tweetUrl` dentro de `startUrls`.

```json
{ "startUrls": ["https://x.com/NASA/status/2105727882588807607"] }
```

Pon `text`, `Texts`, cadenas de un dataset o cadenas de un archivo en `texts`.

```json
{ "texts": ["Support fixed my issue. Thank you."] }
```

Convierte `hashtag` o `cashtag` en cadenas de búsqueda.

```json
{ "searchTerms": ["#Artemis lang:en", "$AAPL lang:en"], "maxItems": 5 }
```

Reemplaza `minLikes`, `minReplies` & `minRetweets` por estos nombres de campo.

```json
{ "min_faves": 10, "min_replies": 2, "min_retweets": 3 }
```

Los resultados conservan el registro original en `tweet` & las respuestas en
`analysis.answers`. Asigna las etiquetas positiva, negativa & neutral a las
categorías de sentimiento correspondientes. Mantén `mixed` & `unclear` como
categorías separadas. Otros puntajes de sentimiento pueden usar escalas &
significados distintos. La intensidad de Xquik va de 0 a 2 & puede incluir
decimales. El sarcasmo es una probabilidad. La confianza describe la certeza de
una respuesta.

## ¿Cuánto cuesta analizar el sentimiento de los tuits?

X Tweet Sentiment Analysis de Xquik cuesta desde $0.0003 por post analizado. No
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
`Top sentiment is positive in 3 of 5 results.` Una comparación sin cambios
indica `No change since the earlier run.` Una ejecución que tiene un problema o
que es grande también escribe `run-report`. Lo mismo hace una ejecución con
`alwaysSaveRunRecords` activado. `run-report` repite el resumen en
`results.analysisSummary`.

El resumen cuenta las filas analizadas, fallidas & omitidas. Suma la interacción
& resume cada pregunta.

- La división de `sentiment` muestra cuántos posts caen en cada actitud.
- `engagementShares` pondera la misma división por Me gusta, reposts, respuestas
  & citas.
- `top` enumera los 3 posts con más interacción por actitud.
- Cada fila enumera `sourceDomains`, los nombres de host a los que enlaza.
- Cada fila enumera los `cashtags` que aparecen en su texto, como `$NVDA`.
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

`changes` enumera cada decisión de sentimiento, nivel de intensidad o sarcasmo
que pasó de `previous` a `current`. Las decisiones se comparan por categoría,
por nivel de puntaje redondeado o por sí o no con corte en 0.5. Una decisión
cuenta como cambiada solo cuando se mueve con claridad. Los casi empates entre
ejecuciones quedan en `unchanged`.

Una línea base que supera `maxBaselineRows`, o que usa otra configuración,
detiene la ejecución antes de la recopilación. La ejecución escribe entonces una
fila de diagnóstico. `maxBaselineRows` es 100,000 de forma predeterminada.

## Ejemplos de tareas

Elige entre 50 tareas públicas. Empieza con el ejemplo que coincida con tu
pregunta. La mayoría de las tareas usa topes pequeños. Las 2 búsquedas con
fechas piden 50 posts. Abre una tarea para usar su entrada guardada. Las
entradas listas para copiar & las cantidades observadas de abajo te ayudan a
elegir los ajustes.

Cada fila exitosa devuelve sentimiento, intensidad & probabilidad de sarcasmo.
Cada una conserva su post original o el texto aportado junto a las respuestas.
Estos ejemplos usan entradas en inglés & filtros de idioma. Una etiqueta de
idioma aún puede pasar por alto texto en otro idioma dentro de un post o una
cita.

Sin objetivos, una respuesta describe el tema principal del post. La mención de
una palabra clave puede referirse a otra cosa. Con varios objetivos, la
respuesta de sentimiento los describe en conjunto. No devuelve una respuesta
separada para cada objetivo.

Los Me gusta de un perfil pueden estar ocultos. Si no están disponibles, usa las
respuestas o los posts del perfil.

Los resultados de búsqueda pueden incluir anuncios, promociones, bromas & texto
repetido. Los IDs de post distintos no prueban reacciones independientes ni
identidades de clientes. Las frases de opinión & los filtros de interacción
seleccionan una muestra. Revisa los posts antes de contarlos como opiniones. El
análisis no verifica sus afirmaciones.

### Entradas de tareas probadas

Abre una tarea. Su pestaña Input tiene campos visuales & JSON. Copia su JSON o
cambia los campos antes de iniciar.
[Apify explica las entradas de las tareas](https://docs.apify.com/actors/running/tasks).

Las fechas de prueba usan UTC. Las cantidades describen la ejecución registrada,
no una disponibilidad garantizada. Los ejemplos de 50 posts con fechas muestran
por qué los IDs únicos difieren de las opiniones independientes.

#### Borradores de reseñas del final de temporada

[Textos de reseñas del final de temporada](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-season-finale-reactions)

Separa los elogios de las críticas en tus borradores de reseñas del final de
temporada. Se observaron 3 textos únicos aportados el 2026-10-01. El tope fue 3.
Son tus propios textos ilustrativos, no una investigación de audiencia.

#### Conversación sobre el lanzamiento de un teléfono

[Posts sobre el lanzamiento del iPhone en septiembre de 2026](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-iphone-launch-posts)

Revisa la conversación sobre el lanzamiento dentro de una ventana fija de fechas
de septiembre. Se observaron 5 posts únicos el 2026-10-01. El tope fue 5. Pueden
coincidir tanto anuncios como opiniones personales.

#### Reseñas del espectáculo de medio tiempo

[Textos de reseñas del espectáculo de medio tiempo](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-super-bowl-halftime-show)

Comprueba los juicios mixtos y el sarcasmo en tus reseñas del medio tiempo. Se
observaron 3 textos únicos aportados el 2026-10-01. El tope fue 3. Son tus
propias reseñas ilustrativas, no reacciones en vivo al espectáculo.

#### Experiencias con autos eléctricos

[Posts sobre experiencias con autos eléctricos](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-new-electric-car)

Encuentra posts sobre manejar o elegir un auto eléctrico. Se observaron 5 posts
únicos el 2026-10-01. El tope fue 5. Las frases personales pueden coincidir con
bromas o relatos de segunda mano.

#### Conversación sobre películas

[Posts de conversación sobre películas de Marvel](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-marvel-movie-audiences)

Revisa la conversación sobre películas antes de seleccionar comentarios del
público. Se observaron 5 posts únicos el 2026-10-01. El tope fue 5. Marvel puede
coincidir con usos de la palabra que no tienen relación.

#### Descripciones del contenido multimedia de una artista

[Tono de las descripciones multimedia de Taylor Swift](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-taylor-swift-album-reactions)

Revisa la redacción de la artista junto a su contenido multimedia reciente. Se
observaron 5 posts únicos el 2026-10-01. El tope fue 5. Las descripciones no
pueden detallar todo lo que muestran las imágenes o los videos.

#### Hilo del lanzamiento de un juego

[Hilo de novedades del lanzamiento de un juego](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-video-game-launch)

Lee un anuncio junto a respuestas sobre juegos de la competencia. Se observaron
5 posts únicos el 2026-10-01. El tope fue 5. El hilo menciona varios juegos e
incluye su post inicial.

#### Conversación sobre trabajo remoto

[Conversación sobre trabajo remoto](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-remote-work)

Compara las actitudes expresadas en la conversación sobre trabajo remoto. Se
observaron 5 posts únicos el 2026-10-01. El tope fue 5. Pueden aparecer ofertas
de empleo y opiniones repetidas.

#### Posts sobre aerolíneas

[Posts de conversación sobre aerolíneas](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-airline-passengers)

Revisa las menciones de aerolíneas antes de elegir opiniones sobre el servicio.
Se observaron 5 posts únicos el 2026-10-01. El tope fue 5. Una mención no prueba
que el autor sea pasajero.

#### Conversación sobre fútbol americano universitario

[Conversación sobre fútbol americano universitario](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-college-football-fans)

Separa las opiniones de aficionados de la promoción del fútbol americano
universitario. Se observaron 5 posts únicos el 2026-10-01. El tope fue 5. Las
previas y las promociones pueden coincidir junto a las opiniones de aficionados.

#### Conversación sobre tasas de interés

[Conversación sobre tasas de interés](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-interest-rates)

Revisa las actitudes sobre el mercado y las políticas en torno a las tasas de
interés. Se observaron 5 posts únicos el 2026-10-01. El tope fue 5. El tema
principal puede ser un político o el mercado.

#### Conversación sobre scooters

[Conversación sobre scooters eléctricos](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-toward-electric-scooters)

Encuentra la conversación sobre scooters antes de elegir opiniones de quienes
los usan. Se observaron 5 posts únicos el 2026-10-01. El tope fue 5. La
publicidad, los estudios y las bromas pueden coincidir junto a las experiencias
personales.

#### Experiencias en restaurantes

[Experiencias en restaurantes nuevos](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-restaurant-openings)

Revisa la redacción en primera persona sobre restaurantes nuevos. Se observaron
5 posts únicos el 2026-10-01. El tope fue 5. La redacción personal también puede
aparecer en invitaciones o recomendaciones.

#### Tono de la cronología de una Lista pública

[Tono de la cronología de una Lista pública](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-ai-coding-assistants)

Revisa el tono de los posts de una Lista pública. Se observaron 5 posts únicos
el 2026-10-01. El tope fue 5. Los miembros pueden hablar de otros temas y hacer
repost del texto de otra persona.

#### Respuestas del perfil de un dispositivo

[Tono de las respuestas del perfil de un dispositivo de Google](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-smart-home-device-owners)

Revisa la redacción del perfil de un dispositivo, incluidas las respuestas. Se
observaron 5 posts únicos el 2026-10-01. El tope fue 5. La falta de contexto del
post original puede limitar lo que significa una respuesta del perfil.

#### Entrenamiento para maratones

[Conversación sobre entrenamiento para maratones](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-marathon-runners)

Encuentra actitudes en novedades de entrenamiento y planes de maratón. Se
observaron 5 posts únicos el 2026-10-01. El tope fue 5. Los planes y la
promoción pueden aparecer junto a las novedades de corredores.

#### Planificación de viajes

[Posts personales sobre viajes a Tokio](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-tourist-destinations)

Revisa planes personales de viaje e historias de viaje. Se observaron 5 posts
únicos el 2026-10-01. El tope fue 5. Los eventos con Tokio en el nombre pueden
coincidir sin describir un viaje a Japón.

#### Conversación sobre precios de streaming

[Posts sobre el precio de Netflix](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-streaming-price-increases)

Encuentra inquietudes sobre el precio de Netflix antes de revisar motivos de
cancelación. Se observaron 5 posts únicos el 2026-10-01. El tope fue 5. Las
frases sobre precios seleccionan inquietudes, no una muestra representativa de
espectadores.

#### Compras de útiles escolares

[Posts sobre útiles escolares de agosto de 2026](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-back-to-school-shoppers)

Revisa 50 posts sobre útiles escolares dentro de una ventana de agosto. Se
observaron 50 posts únicos el 2026-10-01. El tope fue 50. Los 50 IDs incluyeron
42 filas claramente relacionadas en nuestra revisión.

#### Retrasos de trenes

[Posts sobre experiencias con retrasos de trenes](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-public-transit)

Encuentra quejas y experiencias con trenes retrasados. Se observaron 5 posts
únicos el 2026-10-01. El tope fue 5. Las frases personales pueden dejar fuera
los avisos oficiales.

#### Conversación sobre alimento para mascotas

[Posts sobre experiencias con alimento para mascotas](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-pet-food-brands)

Revisa las menciones de alimento para mascotas dentro de una conversación más
amplia sobre su cuidado. Se observaron 5 posts únicos el 2026-10-01. El tope
fue 5. Las conversaciones sobre cuidado o veterinaria pueden mencionar marcas de
alimento de pasada.

#### Posts seleccionados sobre deportes de fantasía

[Lote de posts sobre deportes de fantasía](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-fantasy-football-apps)

Analiza un lote seleccionado de posts sobre deportes de fantasía. Se observaron
2 posts únicos el 2026-10-01. El tope fue 2. Las etiquetas se refieren al tema
de cada post, no automáticamente a una app.

#### Experiencias en cafeterías

[Posts sobre experiencias en cafeterías](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-coffee-shop-customers)

Encuentra comentarios sobre cafeterías antes de seleccionar opiniones de
clientes. Se observaron 5 posts únicos el 2026-10-01. El tope fue 5. Las quejas
de los autores siguen siendo afirmaciones sin verificar.

#### Mercado de la vivienda

[Conversación sobre el mercado de la vivienda](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-housing-market)

Revisa opiniones y noticias sobre el mercado de la vivienda. Se observaron 5
posts únicos el 2026-10-01. El tope fue 5. Las noticias y las opiniones pueden
tratar temas distintos del mercado.

#### Conversación sobre torneos

[Posts sobre un torneo de League of Legends](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-esports-tournament-viewers)

Separa la conversación sobre el torneo de la promoción de boletos o partidos. Se
observaron 5 posts únicos el 2026-10-01. El tope fue 5. La publicidad de boletos
y las crónicas de partidos no son opiniones de espectadores.

#### Posts de un medio de podcasts

[Tono de los posts de un medio de podcasts](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-podcast-episodes)

Revisa los mensajes propios del medio que publica el podcast. Se observaron 5
posts únicos el 2026-10-01. El tope fue 5. El tono del medio no mide la
satisfacción de los oyentes.

#### Comparaciones de gimnasios

[Textos de reseñas que comparan gimnasios](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-gym-memberships)

Comprueba la actitud combinada hacia 2 gimnasios en tus reseñas. Se observaron 3
textos únicos aportados el 2026-10-01. El tope fue 3. Ambos objetivos comparten
1 respuesta de sentimiento por texto.

#### Alquiler de autos

[Posts sobre experiencias con alquiler de autos](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-car-rental-customers)

Encuentra comentarios sobre alquiler de autos antes de revisar inquietudes sobre
el servicio. Se observaron 5 posts únicos el 2026-10-01. El tope fue 5. Las
consultas y las promociones pueden coincidir junto a los relatos de quienes
alquilan.

#### Conversación sobre el campus

[Posts sobre costos universitarios y el campus](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-university-life)

Revisa la conversación sobre el campus antes de seleccionar posts relacionados
con costos. Se observaron 5 posts únicos el 2026-10-01. El tope fue 5. Las
noticias y las críticas sobre el campus no prueban experiencias de estudiantes.

#### Planificación de bodas

[Posts personales sobre planificación de bodas](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-wedding-planning-posts)

Encuentra redacción en primera persona sobre planes y costos de boda. Se
observaron 5 posts únicos el 2026-10-01. El tope fue 5. Las historias, las
bromas y el texto incidental pueden coincidir junto a las experiencias de
planificación.

#### Experiencias de carga

[Posts sobre experiencias de carga de vehículos eléctricos](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-ev-charging-experiences)

Revisa experiencias de carga dentro de la conversación sobre vehículos
eléctricos. Se observaron 5 posts únicos el 2026-10-01. El tope fue 5. La carga
puede ser secundaria frente a otra inquietud sobre el vehículo.

#### Conversación sobre declaración de impuestos

[Posts sobre declaraciones con TurboTax en la primavera de 2026](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-tax-filing-software)

Revisa la conversación sobre declaraciones dentro de una ventana fija de fechas
de primavera. Se observaron 5 posts únicos el 2026-10-01. El tope fue 5. Los
posts no verifican las tarifas ni las normas fiscales vigentes.

#### Visitas a parques temáticos

[Conversación sobre visitas a parques temáticos](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-theme-park-visitors)

Encuentra menciones de parques temáticos antes de elegir reacciones a visitas.
Se observaron 5 posts únicos el 2026-10-01. El tope fue 5. Las referencias de
pasada pueden coincidir con posts más largos sobre otro tema.

#### Gasto en supermercado

[Posts sobre experiencias con el presupuesto del supermercado](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-grocery-prices)

Encuentra comentarios en primera persona sobre el gasto en supermercado. Se
observaron 5 posts únicos el 2026-10-01. El tope fue 5. Las conversaciones más
amplias sobre política, nutrición o creadores pueden mencionar el gasto en
supermercado.

#### Conversación sobre cámaras

[Conversación sobre cámaras de teléfonos](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-new-phone-camera-reviews)

Revisa las menciones de cámaras junto a fotos, reseñas y anuncios. Se observaron
5 posts únicos el 2026-10-01. El tope fue 5. Las menciones de cámaras pueden ser
incidentales en otros anuncios.

#### Post seleccionado sobre zapatillas

[Un post seleccionado sobre zapatillas](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-sneaker-drop-reactions)

Analiza un post conocido sin una búsqueda amplia por palabra clave. Se observó 1
post único el 2026-10-01. El tope fue 1. Esta descripción seleccionada no
detalla todo lo que muestra su imagen.

#### Chatbots de soporte

[Posts sobre chatbots de soporte](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-customer-support-chatbots)

Encuentra la conversación sobre chatbots de soporte antes de seleccionar quejas
sobre el servicio. Se observaron 5 posts únicos el 2026-10-01. El tope fue 5.
También pueden coincidir bots de apoyo emocional y respuestas de empresas.

#### Conversación sobre festivales

[Conversación sobre Coachella en abril de 2026](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-music-festival-attendees)

Revisa 50 posts sobre el festival dentro de una ventana de abril. Se observaron
50 posts únicos el 2026-10-01. El tope fue 50. Los 50 IDs incluyeron 47 filas
relacionadas y texto de noticias repetido.

#### Facturas de electricidad

[Conversación sobre facturas de electricidad](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-electric-bills)

Revisa los costos personales de electricidad junto a la conversación sobre
políticas. Se observaron 5 posts únicos el 2026-10-01. El tope fue 5. Las
afirmaciones sobre políticas y las predicciones de precios siguen sin verificar.

#### Cambios de plantel en el básquetbol

[Conversación sobre traspasos y fichajes de la NBA](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-nba-trade-reactions)

Encuentra la conversación sobre traspasos y fichajes antes de elegir reacciones
de aficionados. Se observaron 5 posts únicos el 2026-10-01. El tope fue 5. Otras
noticias pueden mencionar jugadores o equipos de pasada.

#### Conversación sobre estadías

[Conversación sobre estadías en Airbnb](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-airbnb-stays)

Enfoca el análisis en las actitudes hacia Airbnb dentro de la conversación sobre
estadías. Se observaron 5 posts únicos el 2026-10-01. El tope fue 5. La
promoción de anfitriones y los posts sobre la app pueden aparecer junto a las
historias de huéspedes.

#### Reacciones a libros

[Posts con reacciones a lecturas de libros](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-book-club-readers)

Revisa reacciones de lectura sin suponer la pertenencia a un club de lectura. Se
observaron 5 posts únicos el 2026-10-01. El tope fue 5. Pueden coincidir tanto
comparaciones con películas como opiniones personales de lectura.

#### Experiencias con kits de comida

[Posts sobre experiencias con HelloFresh](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-meal-kit-services)

Encuentra comentarios sobre kits de comida antes de revisar experiencias con el
producto. Se observaron 5 posts únicos el 2026-10-01. El tope fue 5. Los planes,
la publicidad y las historias personales más amplias pueden mencionar la marca.

#### Conversación sobre carreras

[Posts de conversación sobre carreras de Fórmula 1](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-formula-one-race-weekends)

Revisa la conversación sobre la carrera junto a declaraciones de equipos y
pilotos. Se observaron 5 posts únicos el 2026-10-01. El tope fue 5. Las
declaraciones citadas de pilotos pueden repetirse en distintos IDs.

#### Experiencias con apps de citas

[Posts sobre experiencias con apps de citas](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-dating-app-experiences)

Encuentra experiencias con apps de citas, comentarios sobre matches y bromas. Se
observaron 5 posts únicos el 2026-10-01. El tope fue 5. Los comentarios sobre
matches y las bromas no verifican identidades de clientes.

#### Posts sobre esperas en aeropuertos

[Posts sobre esperas y salas VIP en aeropuertos](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-airport-travelers)

Revisa comentarios sobre esperas en aeropuertos junto a avisos de viaje. Se
observaron 5 posts únicos el 2026-10-01. El tope fue 5. Los avisos oficiales
pueden aparecer junto a las experiencias personales de espera.

#### Conversación sobre almuerzos escolares

[Conversación sobre almuerzos escolares](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-school-lunch-programs)

Revisa posts personales y el debate de políticas sobre almuerzos escolares. Se
observaron 5 posts únicos el 2026-10-01. El tope fue 5. Entre los autores puede
haber instituciones, no solo padres.

#### Cata de cerveza

[Posts sobre catas de cerveza artesanal](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-craft-beer-drinkers)

Encuentra opiniones de catas de cerveza antes de elegir ejemplos de reseñas. Se
observaron 5 posts únicos el 2026-10-01. El tope fue 5. Las descripciones breves
con enlace pueden no tener contexto suficiente para una actitud clara.

#### Citas del anuncio de un acoplamiento

[Citas del anuncio de acoplamiento de SpaceX](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-about-space-launches)

Revisa las citas de un solo anuncio de acoplamiento después de una hora fija. Se
observaron 5 posts únicos el 2026-10-01. El tope fue 5. Las citas pueden ser
invitaciones o descripciones neutrales, no solo reacciones.

#### Respuestas de cumpleaños

[Respuestas al cumpleaños de NASA](https://apify.com/xquik/x-tweet-sentiment-analysis/examples/sentiment-of-replies-to-a-news-post)

Revisa las respuestas directas a un solo post de cumpleaños. Se observaron 5
posts únicos el 2026-10-01. El tope fue 5. La falta de contexto del post raíz
puede limitar lo que significa el análisis de una respuesta.

Mantén `maxItems` pequeño mientras revisas los resultados. Un tope limita la
salida, no la disponibilidad. Si califican menos posts, revisa el informe de la
ejecución antes de cambiar tus filtros. Amplía 1 ajuste a la vez, como las
fechas o un mínimo de interacción. Lleva un registro del ajuste que cambiaste.

Para los análisis fallidos, revisa `analysis.reason` & reintenta solo los IDs
afectados. Si las respuestas de un post parecen incompletas, lee la fila de
diagnóstico gratuita. Indica cuándo X mostró menos respuestas de las que cuenta.
Las descripciones del contenido multimedia no pueden detallar todo lo que
muestra una imagen o un video. La falta de contexto de cita o respuesta puede
volver incierto el análisis.

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

No. X Tweet Sentiment Analysis de Xquik incluye los costos de IA en su precio.
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
[pestaña API](https://apify.com/xquik/x-tweet-sentiment-analysis/api) para ver
ejemplos en Python, JavaScript & cURL. Usa las
[programaciones](https://docs.apify.com/platform/schedules) de Apify para
ejecuciones recurrentes. Pasa el ID del dataset anterior como
`monitor.baselineDatasetId` para ver qué cambió. Las integraciones de Apify
también conectan las ejecuciones con webhooks, Make, Zapier, n8n & Google
Sheets.

### ¿Dónde consigo ayuda?

Abre un issue en la
[pestaña Issues](https://apify.com/xquik/x-tweet-sentiment-analysis/issues) con
el ID de la ejecución. Los diagnósticos gratuitos del almacén de clave-valor
explican las ejecuciones que requieren atención. Una ejecución que no recibe
ninguna fila explica el motivo en su estado.
