[English](README.md) · **Español** · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer conecta Xquik MCP con agentes de codificación](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Mira cómo Framer usa los extractores de Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
con Claude Code, Codex, Cursor & más, desde el minuto 6:07.

Xquik es el servicio de scraping de X (Twitter) más rápido y económico del
mundo, con los datos de X más completos. X Tweet Viral Score Analyzer de Xquik
califica cada post. Agrega una estimación de Viral Score & un veredicto. La
mayoría de los demás Actores de Apify cobran antes de filtrar o quitar
duplicados. Xquik solo cobra los resultados entregados, únicos y que cumplen tus
filtros. El precio por post incluye los costos de IA. No necesitas cuenta de IA,
tokens ni clave.

Descubre por qué los posts se difunden o fracasan & conserva los datos
originales del post. **X Tweet Viral Score Analyzer with AI** de Xquik recopila
los posts que coinciden. La IA califica 8 rasgos de cada post. El Actor
convierte esas respuestas en una estimación de Viral Score & un veredicto. Cada
fila conserva los Me gusta, reposts, respuestas & citas reales. Compara cada
estimación con lo que pasó.

El Viral Score estima qué tan bien funciona la redacción. No predice Me gusta ni
visualizaciones. No reproduce la forma en que X ordena los posts.

> Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
> "Twitter" y "X" son marcas registradas de X Corp.

## ¿Por qué usar X Tweet Viral Score Analyzer with AI?

- **Sabe qué posts publicar.** Cada post recibe un veredicto `send_it`,
  `edit_first` o `sleep_on_it`.
- **Prueba borradores antes de publicar.** Pega texto en `texts` para obtener el
  mismo puntaje & veredicto. La ejecución no obtiene nada de X.
- **Predicción frente a resultado real.** El resumen enumera los posts cuya
  interacción real superó o no alcanzó su puntaje.
- **Descubre qué funciona en cada cuenta.** Cada nombre de usuario recibe su
  mejor & su peor post. El informe divide su puntaje promedio por hora de
  publicación, longitud, contenido multimedia & enlaces.
- **Compara cuentas lado a lado.** Una tabla de clasificación ordena los nombres
  de usuario por Viral Score promedio & tasa de interacción real.
- **Ve qué cambió.** Agrega el ID del dataset de una ejecución anterior a
  `monitor.baselineDatasetId`. Así cada fila muestra qué rasgos cambiaron.
- **Puntajes listos para hojas de cálculo.** La vista `Viral Score` & las
  exportaciones ponen el puntaje, el veredicto & las respuestas en columnas.
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
- `viralAlgorithmScore` convierte los conteos públicos de un post en 1 número
  comparable.

### Controles de calidad

- Cada campo que muestra X se entrega, se omite a propósito o se comprueba que
  no existe.
- Xquik prueba cada lectura en vivo contra X.

## ¿Qué datos devuelve X Tweet Viral Score Analyzer with AI?

- **Viral Score por post.** Reglas fijas y versionadas calculan cada puntaje de
  0 a 100.
- **8 respuestas sobre rasgos.** Muestran por qué un post obtuvo un puntaje alto
  o bajo.
- **Topes fijos.** Limitan los posts que parecen spam, ragebait o redacción
  genérica de máquina.
- **Registros de origen completos.** Cada fila conserva todos los campos que
  muestra el post.

## Cómo revisar el Viral Score de un tuit

¿Recién llegas a Apify? Primero
[crea una cuenta gratis](https://console.apify.com/sign-up?fpr=xquik). El plan
gratuito no pide tarjeta de crédito & te da $5 para gastar cada mes. A $0.0003
por post analizado, $5 alcanzan para hasta 16,000 posts analizados, sin contar
el uso de la plataforma. Luego vuelve aquí & haz clic en Try for free.

1. Agrega términos de búsqueda, nombres de usuario de perfiles, URLs de posts o
   IDs de posts.
2. Define `maxItems` & los filtros de extracción que necesite tu tarea.
3. Describe tu audiencia en `analysis.context` o deja el valor predeterminado.
4. Inicia la ejecución & abre la vista de dataset `Viral Score`.

```json
{
  "searchTerms": ["from:NASA -filter:replies -filter:retweets"],
  "maxItems": 150,
  "analysis": { "context": "Space fans & general readers." }
}
```

### Qué responde el Actor

| Pregunta       | Respuesta                                                          |
| -------------- | ------------------------------------------------------------------ |
| Gancho         | 0 sin gancho, 1 inicio claro, 2 inicio contundente                 |
| Claridad       | 0 confuso, 1 cuesta entenderlo, 2 claro a la primera lectura       |
| Informativo    | 0 nada nuevo, 1 idea conocida, 2 aprendizaje útil                  |
| Gracioso       | 0 sin gracia, 1 algo divertido, 2 tan gracioso que se comparte     |
| Ragebait       | Probabilidad de que el post busque sobre todo provocar indignación |
| Escrito por IA | Probabilidad de que el texto parezca redacción genérica de máquina |
| Spam           | Probabilidad de spam, estafa, sorteo o granja de interacción       |
| Reacción       | Compartir, responder, dar Me gusta, discutir o ignorar             |

La respuesta Escrito por IA solo evalúa el estilo. No establece quién escribió
el post.

### Cómo funciona el Viral Score

El gancho, la claridad, el valor que aporta & la reacción esperada suben el
puntaje. Un texto que suena a redacción genérica de máquina lo baja.

Los topes fijos limitan el puntaje del posible spam, el ragebait & la redacción
genérica de máquina. El puntaje es un número entero de 0 a 100.

| Veredicto     | Puntaje  |
| ------------- | -------- |
| `send_it`     | 70 a 100 |
| `edit_first`  | 40 a 69  |
| `sleep_on_it` | 0 a 39   |

`viral.weights` indica la versión de estas reglas, como `viral_lite:1`. Cambia
cada vez que cambian las reglas. El puntaje es `null` después de un análisis
fallido u omitido. También es `null` cuando falta una respuesta de rasgo
predeterminada. X Tweet Viral Score Analyzer de Xquik nunca completa un puntaje
faltante con una suposición.

## Estimación del puntaje del algoritmo

X publicó sus pesos de clasificación en el repositorio `xai-org/x-algorithm`,
archivo `home-mixer/params/param.rs`. X Tweet Viral Score Analyzer de Xquik
aplica 4 de ellos a los conteos públicos de cada post.

| Conteo    | Peso |
| --------- | ---- |
| Me gusta  | 0.66 |
| Respuesta | 5    |
| Repost    | 1    |
| Cita      | 5    |

`viral.algorithmWeightedSum` es la suma de cada conteo multiplicado por su peso.
`viral.algorithmScore` divide esa suma entre las visualizaciones & la multiplica
por 1,000. Un post sin conteo de visualizaciones usa los seguidores en su lugar.
`viral.algorithmBasis` indica el divisor, `views` o `followers`. Compara solo
puntajes con la misma base. `viral.weightsVersion` indica los pesos, como
`x_algorithm_params:2026-10-14`.

La estimación tiene estos límites.

- X multiplica cada peso por una probabilidad que predice para un solo
  espectador. El Actor multiplica por los conteos observados. El resultado es
  una estimación, no el puntaje que calcula X.
- X no publica pesos para los elementos guardados ni para las visualizaciones.
  La suma deja fuera ambos.
- X usa más señales que estas 4, como el tiempo de permanencia & las veces que
  se comparte. Los datos públicos no las muestran.
- El puntaje es `null` cuando un post no tiene visualizaciones ni conteo de
  seguidores.
- La IA nunca ve estos conteos. Solo lee el texto & el contexto.

## Predicción frente a resultado real

X Tweet Viral Score Analyzer de Xquik compara cada Viral Score con lo que pasó.
`viral.actualEngagementRate` es `log10(1 + weighted sum per 1,000 followers)`.
El logaritmo limita el efecto de un solo post muy grande. La tasa es `null`
cuando el conteo de seguidores falta o es 0.

El bloque `viral.calibration` del resumen de la ejecución informa estos campos.

- `comparedPosts` cuenta los posts con un Viral Score & una tasa real.
- `rankCorrelation` es una correlación de rangos de Spearman de -1 a 1. Muestra
  si los puntajes más altos coincidieron con tasas más altas.
- `calibrationScore` es 100 veces la correlación, con un mínimo de 0.
- `overperformers` & `underperformers` enumeran hasta 5 posts cada uno. Cada
  post trae su ID, su URL, su Viral Score, su tasa real & su `gap`.

`gap` es la tasa real estandarizada menos el Viral Score estandarizado. Un post
entra en una lista cuando su gap llega a 1 desviación estándar.

La calibración tiene estos límites.

- Con menos de 10 posts comparados, la calibración es `null` con el motivo
  `too_few_posts`. Los puntajes o tasas idénticos dan `no_variation`.
- La correlación es aproximada.
- La calibración describe una sola ejecución. Un puntaje bajo puede significar
  que los posts difieren en momento, tema o audiencia. No prueba que la
  estimación de la redacción haya fallado.
- Los posts recientes todavía no terminan de acumular interacción. Compara posts
  de antigüedad similar.

## Informe de cuentas

El bloque `viral.accounts` del resumen de la ejecución informa sobre cada nombre
de usuario de autor.

- Cantidad de posts, Viral Score promedio & tasa de interacción real promedio.
- El mejor & el peor post por Viral Score, con su ID & su URL.
- El Viral Score promedio por grupo. Los grupos son la hora de publicación en
  UTC, el rango de longitud del texto, si tiene contenido multimedia, si tiene
  enlace & si es un hilo propio.

Los rangos de longitud del texto son `short`, `medium`, `long` & `extended`.
`short` llega hasta 80 caracteres, `medium` hasta 200 & `long` hasta 280.
`extended` cubre los textos más largos. Un post de hilo propio responde a su
propio autor.

El informe tiene estos límites.

- El informe enumera los 50 nombres de usuario con más posts puntuados.
- El informe sigue los primeros 1,000 nombres de usuario de una ejecución.
  `untrackedPosts` cuenta los posts puntuados de nombres de usuario posteriores
  & los posts sin nombre de usuario.
- Un grupo con pocos posts dice poco. Revisa `posts` antes de comparar
  promedios.
- Los grupos muestran qué coincidió en esta ejecución. No muestran causas.

## Tabla de clasificación

El bloque `viral.leaderboard` del resumen de la ejecución clasifica los nombres
de usuario del informe de cuentas. `byViralScore` clasifica por Viral Score
promedio. `byActualEngagementRate` clasifica por tasa real promedio. Cada lista
guarda hasta 20 nombres de usuario con `rank`, `posts` & `average`.

La tabla de clasificación tiene estos límites.

- Un nombre de usuario necesita al menos 3 posts puntuados para entrar.
- La lista de tasas omite los nombres de usuario sin conteo de seguidores.
- Los empates se resuelven por más posts y luego por el nombre de usuario.
- La tabla de clasificación cubre los posts de una sola ejecución, no todo el
  historial de una cuenta.

## Puntúa un borrador antes de publicar

Pega tu propio texto en `texts`. X Tweet Viral Score Analyzer de Xquik lo puntúa
& no obtiene nada de X.

```json
{
  "texts": [
    "We shipped dark mode today. Try it and tell us what breaks.",
    "5 things we learned from 1,000 support tickets."
  ],
  "analysis": { "context": "Developers who use our app." }
}
```

- Cada texto se convierte en 1 fila con `viralScore`, `viralVerdict` &
  `viral.stops`.
- `tweet.id` es `text:1`, `text:2` & así sucesivamente, & `tweet.type` es
  `text`.
- Un borrador todavía no tiene Me gusta ni visualizaciones, así que
  `viral.algorithmScore` queda en `null`.
- Cada texto analizado cuesta los mismos $0.0003 que un post analizado.
- Con `texts` definido, la ejecución solo analiza esos textos. Ejecuta los
  objetivos de X por separado.

## ¿Cuánto cuesta revisar el Viral Score?

X Tweet Viral Score Analyzer de Xquik cuesta desde $0.0003 por post analizado.
No cobra tarifa de inicio. El precio incluye la recopilación, los costos de IA &
el Viral Score. No necesitas cuenta de IA, tokens ni clave. El precio cubre
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
  "tweet": { "id": "2100493544842494265", "text": "...", "likeCount": 12 },
  "viral": {
    "score": 74,
    "verdict": "send_it",
    "weights": "viral_lite:1",
    "stops": [],
    "algorithmScore": 9.46,
    "algorithmBasis": "views",
    "algorithmWeightedSum": 18.92,
    "actualEngagementRate": 0.7582,
    "weightsVersion": "x_algorithm_params:2026-10-14"
  },
  "viralScore": 74,
  "viralVerdict": "send_it",
  "viralAlgorithmScore": 9.46,
  "viralActualEngagementRate": 0.7582,
  "analysis": {
    "status": "succeeded",
    "answers": [
      { "questionId": "hook", "type": "score", "value": 2, "confidence": 0.84 },
      { "questionId": "spam", "type": "probability", "probability": 0.03 },
      {
        "questionId": "reaction",
        "type": "choice",
        "value": "share",
        "confidence": 0.7
      }
    ]
  }
}
```

Cada resultado contiene `tweet`, `analysis` & `viral`. Las respuestas incluyen
tipos, versiones de pregunta & las probabilidades disponibles. `viral.stops`
enumera los topes fijos que limitaron el puntaje. Una fila con un análisis
fallido u omitido conserva el post recopilado & un `reason`. Su lista de
respuestas queda vacía & su puntaje es `null`.

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
`Average Viral Score is 64.` Una comparación sin cambios indica
`No change since the earlier run.` Una ejecución que tiene un problema o que es
grande también escribe `run-report`. Lo mismo hace una ejecución con
`alwaysSaveRunRecords` activado. `run-report` repite el resumen en
`results.analysisSummary`.

El resumen cuenta las filas analizadas, fallidas & omitidas. Suma la interacción
& resume cada pregunta.

- El bloque `viral` informa `averageScore` & la cantidad de cada veredicto.
  También cuenta las filas con puntaje & sin puntaje.
- El mismo bloque guarda `calibration`, `accounts` & `leaderboard`, descritos
  arriba.
- Las preguntas de puntaje informan una media & una media ponderada por
  interacción.
- La división de `reaction` muestra cuántos posts caen en cada reacción.
- `top` enumera los 3 posts con más interacción por reacción.
- Cada fila enumera `sourceDomains`, los nombres de host a los que enlaza.
- Cada fila enumera los `cashtags` que aparecen en su texto, como `$NVDA`.
- Con `monitor.baselineDatasetId` definido, el bloque `monitor` del resumen
  cuenta los estados de comparación. Enumera hasta 50 filas cambiadas.

Una ejecución vacía informa conteos en 0 & un promedio `null`.

Cada fila de resultado también trae `viralScore`, `viralVerdict`,
`viralAlgorithmScore` & `viralActualEngagementRate`. También trae `answers`, un
mapa plano con el ID de cada pregunta como clave. Cada valor es la categoría, el
puntaje o la probabilidad elegidos. La vista de dataset `Viral Score` & las
exportaciones a CSV o Excel muestran estas columnas. Quedan junto al post, así
que las hojas de cálculo no necesitan procesar JSON. Las filas fallidas &
omitidas traen un mapa vacío.

## Compara con una ejecución anterior

Pasa `monitor.baselineDatasetId`, el ID del dataset de una ejecución anterior
completada con la misma configuración de análisis. La comparación lee las filas
de esa ejecución. Funciona aunque esa ejecución haya omitido su resumen. Luego,
cada fila recibe un objeto `monitor`. Su estado toma estos valores.

- `first_run` sin línea base.
- `new_to_baseline` para posts que la ejecución anterior no tenía.
- `unchanged` o `changed` para posts que sí tenía.

`changes` enumera cada decisión de rasgo que pasó de `previous` a `current`. Las
decisiones se comparan por categoría, por nivel de puntaje redondeado o por sí o
no con corte en 0.5. Una decisión cuenta como cambiada solo cuando se mueve con
claridad. Los casi empates entre ejecuciones quedan en `unchanged`.

Una línea base que supera `maxBaselineRows`, o que usa otra configuración,
detiene la ejecución antes de la recopilación. La ejecución escribe entonces una
fila de diagnóstico. `maxBaselineRows` es 100,000 de forma predeterminada.

## Ejemplos de tareas

Elige entre 50 tareas públicas. Cada una parte de una búsqueda real en inglés &
un `maxItems` acotado. Usa la vista de dataset `Viral Score`. Algunas agregan
contexto de audiencia. Edita la búsqueda o el contexto antes de ejecutarla.

- [Viral Score de posts de lanzamiento de startups de IA](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-ai-startup-launch-tweets)
- [Viral Score de posts de fundadores de SaaS que construyen en público](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-saas-founder-build-in-public-posts)
- [Viral Score de posts de lanzamiento en Product Hunt](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-product-hunt-launch-posts)
- [Viral Score de anuncios de herramientas para desarrolladores](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-developer-tool-announcements)
- [Viral Score de posts de lanzamientos de código abierto](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-open-source-release-posts)
- [Viral Score de anuncios de proyectos cripto](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-crypto-project-announcements)
- [Viral Score de posts de humor sobre crianza](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-parenting-humor-posts)
- [Viral Score de posts de humor de oficina](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-office-humor-posts)
- [Viral Score de descripciones de fotos de mascotas](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-of-pet-photo-captions)
- [Auditoría del Viral Score de los posts de NASA](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-nasa-posts)
- [Auditoría del Viral Score de los posts de Duolingo](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-duolingo-posts)
- [Auditoría del Viral Score de los posts de Wendy's](https://apify.com/xquik/x-tweet-viral-score-analyzer/examples/viral-score-audit-of-wendys-posts)

Las demás tareas cubren más temas & cuentas de marcas en la página del Actor.

## Preguntas frecuentes & soporte

Respuestas a preguntas comunes y, luego, dónde conseguir ayuda.

### ¿Necesito una cuenta de IA, una clave de API de X o iniciar sesión?

No. X Tweet Viral Score Analyzer de Xquik incluye los costos de IA en su precio.
No necesitas cuenta de IA, tokens ni clave. Tampoco necesitas clave de API de X,
inicio de sesión ni credenciales.

### ¿Un puntaje alto significa que un post se volverá viral?

No. El puntaje estima qué tan bien funciona la redacción para un lector general.
El momento, el tamaño de la audiencia, el contenido multimedia & la suerte
también deciden el alcance. Compara los puntajes con los conteos reales de
interacción de cada fila antes de confiar en ellos.

### ¿Puedo usar mis propias preguntas?

Sí. Las `analysis.questions` personalizadas reemplazan las predeterminadas.
Envía de 1 a 8 preguntas `choice`, `score` o `probability`. Las preguntas de
opción aceptan de 2 a 255 categorías. Las preguntas de puntaje necesitan al
menos 2 niveles ordenados. El Viral Score necesita las 8 preguntas
predeterminadas, así que las preguntas personalizadas lo dejan en `null`.

### ¿Por qué una fila volvió con un análisis fallido u omitido?

`analysis.status` es `failed` o `skipped`. El Actor recopiló & entregó el post,
pero el análisis con IA no se completó. `analysis.reason` indica la causa.
`context_limit` significa que tu contexto & tus objetivos no dejan espacio para
el post. `service_unavailable` significa que el servicio de análisis no estuvo
disponible por un momento. Estas filas no tienen cargo por resultado ni puntaje.
Acorta `analysis.context` o vuelve a ejecutar los IDs afectados.

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
devuelven respuestas con la misma estructura.

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
[pestaña API](https://apify.com/xquik/x-tweet-viral-score-analyzer/api) para ver
ejemplos en Python, JavaScript & cURL. Usa las
[programaciones](https://docs.apify.com/platform/schedules) de Apify para
ejecuciones recurrentes. Pasa el ID del dataset anterior como
`monitor.baselineDatasetId` para ver qué cambió. Las integraciones de Apify
también conectan las ejecuciones con webhooks, Make, Zapier, n8n & Google
Sheets.

### ¿Dónde consigo ayuda?

Abre un issue en la
[pestaña Issues](https://apify.com/xquik/x-tweet-viral-score-analyzer/issues)
con el ID de la ejecución. Los diagnósticos gratuitos del almacén de clave-valor
explican las ejecuciones que requieren atención. Una ejecución que no recibe
ninguna fila explica el motivo en su estado.

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
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor)
  etiqueta con IA los posts de noticias por formato, atribución de la fuente &
  relevancia del tema. Úsalo cuando separes la información de la opinión. Desde
  $0.0003 por post analizado.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier)
  responde con IA tus propias preguntas de categoría, puntaje & sí o no para
  cada post. Úsalo cuando los análisis predefinidos no se ajusten a tus
  etiquetas. Desde $0.0003 por post analizado.
- [X (Twitter) Monitor](https://apify.com/xquik/x-twitter-monitor) detecta cada
  tweet, respuesta, cita, repost y cambio de perfil nuevos de las cuentas,
  normalmente en menos de un segundo después de que X lo muestra, además de los
  tweets de palabras clave y los seguimientos. Úsalo cuando necesites alertas en
  cuanto X muestre un tweet. Desde $0.0045 por monitor-hour.
