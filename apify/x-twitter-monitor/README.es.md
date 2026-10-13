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
mundo, con los datos de X más completos. X (Twitter) Monitor de Xquik envía
alertas de Twitter para las palabras clave y las cuentas que elijas. Revisa cada
segundo, y cada post, respuesta o cambio de perfil nuevo llega a Discord,
Telegram, Slack o tu webhook en segundos. La mayoría de los demás Actores de
Apify cobran antes de filtrar o quitar duplicados. Xquik solo cobra los
resultados entregados y únicos, y aquí solo las horas que vigila un monitor.

Pega cuentas o palabras clave y haz clic en Start. El monitoreo empieza de
inmediato, y las alertas llegan entre ejecuciones. Pagas **$0.0045 por
monitor-hour**. Los eventos y las alertas son gratis, y Apify factura aparte el
uso de la plataforma.

> Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
> "Twitter" y "X" son marcas registradas de X Corp.

## Qué envía el monitor de Twitter

- Posts nuevos, respuestas, citas y reposts de las cuentas que vigilas.
- Posts que coinciden con una búsqueda por palabra clave, con cualquier operador
  de búsqueda de X.
- Posts eliminados, videos en vivo y Espacios que inicia una cuenta.
- Cambios de perfil: nombre, nombre de usuario, biografía, foto de perfil,
  imagen de encabezado, ubicación, enlace, verificación, protección, post fijado
  y disponibilidad.
- Las cuentas que cada cuenta vigilada sigue o deja de seguir.
- El evento completo: el post con su autor, conteos y contenido multimedia, o el
  cambio.
- El ID de usuario permanente de X junto al nombre de usuario actual, así una
  cuenta que cambia de nombre conserva su monitor.
- Alertas a Slack y Discord en su propio formato de mensaje, a Telegram y a
  cualquier webhook HTTPS como JSON firmado.
- Una alerta de prueba a cada destino nuevo, con la respuesta del destino en el
  estado de la ejecución.
- Cada evento en el dataset de la ejecución y en 1 dataset de historial por
  monitor.

## Cómo configurar alertas de Twitter por palabras clave

1. Abre X (Twitter) Monitor de Xquik en Apify Console.
2. Pega nombres de usuario en `twitterHandles`, o búsquedas de X en
   `searchTerms`.
3. Elige los eventos que envían una alerta. `newPosts` está activado por
   defecto.
4. Pega URLs de webhook en `webhookUrls`, o activa `telegram`.
5. Haz clic en Start. El monitoreo empieza en esa ejecución.
6. Agrega una programación que ejecute el Actor cada hora, con la misma entrada.

Cada ejecución posterior cobra las horas vigiladas desde la ejecución anterior.
Guarda los eventos nuevos en su dataset y termina rápido. Un monitor que pasa 24
horas sin ejecución se pausa. Tus alertas te avisan 4 horas antes. La siguiente
ejecución lo reanuda y primero cobra las horas pendientes de pago.

La misma entrada continúa el mismo monitor. Una entrada modificada lo actualiza.
Una tarea guardada es 1 monitor. Sin tarea, `monitorName` le da nombre al
monitor, así que 2 nombres mantienen separados 2 monitores.

## Alertas de Twitter en Discord, Telegram y Slack

- **Discord**: pega la URL de webhook de un canal en `webhookUrls`. Cada alerta
  llega como un mensaje de Discord, sin bot que alojar.
- **Telegram**: activa `telegram`. El estado de la ejecución te da un enlace al
  bot de Telegram de Xquik. Ábrelo y presiona Start, y las alertas llegan a ese
  chat.
- **Slack**: pega la URL de un webhook entrante. Cada alerta llega como un
  mensaje de Slack.
- **Cualquier app**: pega una URL HTTPS. Cada alerta llega como JSON firmado, el
  mismo evento que guarda el dataset.

Cada destino nuevo recibe una alerta de prueba en la ejecución que lo agrega. La
página de estado indica si llegó.

## Entrada

| Campo                                | Qué hace                                                                     |
| ------------------------------------ | ---------------------------------------------------------------------------- |
| `twitterHandles`                     | Nombres de usuario con o sin @, o URLs de perfiles de x.com.                 |
| `searchTerms`                        | Búsquedas de X, como `"x api" lang:en`. Cada búsqueda es 1 monitor.          |
| `monitorName`                        | Le da nombre al monitor en ejecuciones sin tarea guardada.                   |
| `newPosts`                           | Posts originales. Activado por defecto.                                      |
| `replies`, `quotes`, `reposts`       | Esos tipos de post.                                                          |
| `deletedPosts`, `liveVideos`         | Posts eliminados, videos en vivo y Espacios de las cuentas.                  |
| `profileChanges`, `followingChanges` | Cambios de perfil y de cuentas seguidas de las cuentas.                      |
| `eventTypes`                         | Tipos de evento exactos, que reemplazan las casillas.                        |
| `webhookUrls`                        | URLs HTTPS, 1 por línea. El Actor detecta las URLs de Slack y Discord.       |
| `telegram`                           | Envía alertas a Telegram con un enlace que te da la ejecución.               |
| `since`                              | Guarda 1 vez los eventos conservados desde una fecha de los últimos 30 días. |
| `stop`                               | Detiene el monitor y apaga las alertas.                                      |

Las cuentas y las palabras clave suman hasta 100 por monitor. Las palabras clave
solo envían eventos de posts. Telegram no necesita nombre de usuario ni ID de
chat. El estado de la ejecución te da un enlace. Ábrelo y presiona Start, y las
alertas llegan a ese chat.

Entradas listas para copiar:

```json
{ "twitterHandles": ["NASA", "SpaceX"], "newPosts": true, "replies": true }
```

```json
{
  "searchTerms": ["\"your brand\" -from:yourbrand"],
  "webhookUrls": "https://hooks.slack.com/services/T000/B000/XXXX",
  "monitorName": "brand-mentions"
}
```

```json
{ "twitterHandles": ["elonmusk"], "profileChanges": true, "telegram": true }
```

## Salida

Cada ejecución devuelve 4 salidas.

- **Página de estado**, el registro `STATUS.html`: qué vigila el monitor, cada
  destino de alertas, el cobro y el siguiente paso. La pestaña Output la
  muestra.
- **Registro de estado**, el registro `STATUS`: el mismo estado en JSON.
- **Eventos nuevos**: el dataset de la ejecución, con cada evento nuevo, del más
  antiguo al más reciente, y 1 fila de estado al final.
- **Diagnósticos**: el Actor los escribe solo cuando algo necesita atención.

Una fila de evento es el evento tal como lo entrega la API REST de Xquik, con
todos sus campos:

```json
{
  "resultType": "event",
  "id": "981",
  "type": "tweet.new",
  "occurredAt": "2026-10-13T09:00:01.000Z",
  "monitorId": "2944",
  "monitorType": "account",
  "username": "NASA",
  "xUserId": "11348282",
  "data": { "tweetId": "1977000000000000000", "text": "Liftoff!" }
}
```

Los valores de ejemplo muestran la estructura. Los datos en vivo son distintos.

El registro de estado contiene `state`, `targets`, `destinations`,
`eventsSaved`, `pendingEvents`, `hoursCharged`, `chargedUsd`, `hoursOwed`,
`paidThrough`, `pausesAt`, `historyDataset`, `notices` y `nextStep`. Un objetivo
que X no tiene lo indica en su `message`, y el monitor vigila el resto. Un
webhook genérico nuevo muestra su secreto de firma 1 sola vez, solo en el
registro de estado.

El dataset de historial de tu cuenta guarda cada evento del monitor, 1 sola vez
cada uno. Su nombre empieza con `x-monitor-`.

## Para agentes de IA

1 llamada es toda la API. Cada llamada inicia o actualiza el monitor, cobra las
horas vigiladas desde la llamada anterior y devuelve solo lo nuevo. Ninguna
llamada cobra 2 veces la misma hora. Las llamadas terminan rápido, dentro del
tiempo que espera el MCP de Apify.

Inicia o continúa un monitor:

```json
{
  "twitterHandles": ["NASA"],
  "searchTerms": ["\"x api\" lang:en"],
  "replies": true,
  "monitorName": "agent-demo"
}
```

Qué devuelve una llamada:

- El dataset de la ejecución contiene los eventos nuevos y luego 1 fila con
  `resultType` `status`. Su `state` indica si el monitor vigila, y `nextStep`
  indica qué hacer después.
- El registro `STATUS` contiene el mismo estado, con un secreto de firma cuando
  la llamada creó un webhook.

Mantenlo activo: pide a tu agente que cree una programación de Apify que ejecute
el Actor cada hora con la misma entrada. También sirve cualquier temporizador
que lo llame al menos 1 vez cada 24 horas. Detenlo con la misma entrada y
`"stop": true`.

El Actor también lee los nombres que adivinan los agentes, como `handles` y
`usernames`, y el estado de la ejecución indica cómo los leyó.

## ¿Cuánto cuesta un monitor de Twitter?

En todos los planes de pago de Apify, cada monitor-hour cuesta $0.0045. 1 cuenta
o palabra clave es 1 monitor. Apify factura aparte tu uso de la plataforma.

- 1 cuenta vigilada durante 30 días cuesta unos $3.24.
- 10 cuentas y 2 palabras clave vigiladas durante 30 días cuestan unos $38.88.
- Los eventos y las alertas son gratis, sin importar cuántos lleguen.
- Sin tarifa de inicio. Una ejecución solo cobra horas ya vigiladas.
- Un objetivo que X no tiene no vigila nada y no cuesta nada.
- Tu costo máximo por ejecución limita cada cobro. Las horas que lo superan
  esperan a la siguiente ejecución.

Una programación cada hora mantiene bajo el uso de Apify frente a las horas que
paga. Las ejecuciones cada pocos minutos suman uso y no cambian nada en las
alertas, que igual llegan entre ejecuciones.

El monitoreo necesita un plan de pago de Apify. En el plan gratuito, una
ejecución no inicia ningún monitor y no cobra nada. En su lugar, muestra los 5
posts más recientes de tu primera cuenta, para que veas qué contendrían las
alertas.

## Límites y recuperación

- Las cuentas y las palabras clave suman hasta 100 por monitor. Usa 2 tareas
  para más.
- Hasta 10 URLs de webhook por monitor, más Telegram.
- Los eventos se conservan 30 días, así que `since` puede volver a guardarlos
  dentro de ese plazo.
- Una ejecución que se detiene antes de tiempo deja sus eventos para la
  siguiente ejecución. No se pierde ninguno.
- Una ejecución que termina entre la reserva de sus horas y su cobro no cobra
  nada. Esas horas quedan como pagadas y no cuestan nada.
- Cada ejecución escribe 1 fila de estado gratis, así que su dataset nunca queda
  vacío.

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
- [X Quote Tweets Scraper](https://apify.com/xquik/x-quote-tweets-scraper):
  extrae los posts que citan posts, con texto, multimedia, conteos, autores y 11
  filtros. Úsalo cuando estudies quién citó posts y qué dijo. Desde $0.00015 por
  post.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): extrae
  seguidores, cuentas seguidas, miembros de Listas, suscriptores y miembros de
  Comunidades como filas de perfil. Úsalo cuando necesites listas de audiencia o
  de miembros. Desde $0.00015 por perfil.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper): busca
  usuarios por nombre de usuario, biografía y ubicación con filtros de
  seguidores, verificación, antigüedad y ubicación. Úsalo cuando crees listas de
  cuentas a partir de búsquedas. Desde $0.00015 por perfil.
- [X Account Location Scraper](https://apify.com/xquik/x-account-location-scraper):
  consulta dónde tienen su sede las cuentas con la etiqueta "Cuenta con sede en"
  de X, cómo se conectaron a X y sus cambios de nombre de usuario. Úsalo cuando
  verifiques dónde tienen su sede las cuentas. Desde $0.00015 por cuenta.
- [X Email Scraper](https://apify.com/xquik/x-email-scraper): obtiene los
  correos, teléfonos y enlaces que las cuentas publican en sus perfiles, a
  partir de nombres de usuario, seguidores o búsquedas de usuarios. Úsalo cuando
  necesites los correos que publican los perfiles. Desde $0.00015 por perfil.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): extrae posts,
  miembros y seguidores de Listas a partir de URLs o IDs de Listas. Úsalo cuando
  una Lista curada defina tus fuentes. Desde $0.00015 por fila.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): extrae
  información, posts, búsquedas, miembros y moderadores de Comunidades. Úsalo
  cuando tus fuentes sean Comunidades de X. Desde $0.00015 por fila.
- [X Space Scraper](https://apify.com/xquik/x-space-scraper): encuentra Espacios
  por palabra clave y lee sus títulos, estados, horas, cantidad de oyentes,
  anfitriones y oradores. También lee transmisiones por URL o ID. Úsalo cuando
  sigas el audio y el video en vivo en X. Desde $0.00015 por Espacio o
  transmisión.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): extrae
  tendencias en tiempo real por ubicación con posición, volumen, consulta y
  WOEID. Úsalo cuando sigas qué es tendencia y dónde. Desde $0.00015 por
  tendencia.
- [X Jobs Scraper](https://apify.com/xquik/x-job-scraper): extrae ofertas de
  empleo de X por palabra clave, lugar, modalidad de trabajo, nivel de
  experiencia y empresa, con salarios y enlaces para postularse. Úsalo cuando
  recopiles vacantes publicadas en X. Desde $0.00015 por empleo.
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

## Preguntas frecuentes

Respuestas a preguntas comunes y, luego, dónde conseguir ayuda.

### ¿Necesito cookies de X, una clave de API o iniciar sesión?

No. X (Twitter) Monitor de Xquik no necesita cookies de X, clave de API, inicio
de sesión ni credenciales. Todas las revisiones se ejecutan en la
infraestructura de Xquik.

### ¿Cómo monitoreo una cuenta de Twitter?

Pega su nombre de usuario en `twitterHandles`, elige los eventos que quieres y
agrega un destino de alertas. Cada post nuevo te llega en segundos, y cada
evento queda en el dataset.

### ¿Puede monitorear cuentas de cripto y menciones de monedas?

Sí. Agrega las cuentas que sigues, o una búsqueda por palabra clave como un
cashtag o una dirección de contrato. Los posts que coinciden llegan a Discord o
Telegram en segundos.

### ¿Qué tan rápido llegan las alertas?

Xquik revisa cada segundo y envía cada evento en segundos. Las alertas nunca
esperan a una ejecución.

### ¿Por qué la ejecución dice que el monitoreo necesita un plan de pago?

Los monitores trabajan entre ejecuciones, todo el día. Por eso necesitan un plan
de pago de Apify. Mejora tu plan y vuelve a ejecutar con la misma entrada.

### ¿Qué pasa cuando detengo el monitor?

La ejecución detiene todos los objetivos y apaga las alertas. Cobra las horas
vigiladas hasta ese momento. Los eventos ya conservados se pueden leer durante
30 días.

### ¿Cómo verifico la firma de un webhook?

Un webhook genérico nuevo recibe un secreto de firma, que aparece 1 sola vez en
el registro `STATUS`. Xquik firma cada entrega con ese secreto, igual que sus
webhooks REST.

### ¿Puedo usar la API, las programaciones y las integraciones?

Sí. Usa la API de Apify o la API REST de Xquik. La
[pestaña API](https://apify.com/xquik/x-twitter-monitor/api) tiene ejemplos en
Python, JavaScript y cURL. Las
[programaciones](https://docs.apify.com/platform/schedules) de Apify mantienen
activo el monitor. Los agentes usan
[Apify MCP](https://docs.apify.com/platform/integrations/mcp).

### ¿Es legal monitorear cuentas de X?

X (Twitter) Monitor de Xquik solicita datos públicos de X. Los resultados pueden
contener datos personales. Confirma que tu propósito es lícito y cumple las
normas de privacidad que te aplican. Si tienes dudas, consulta a un abogado
calificado.

### ¿Dónde consigo ayuda?

Abre un issue en la página del Actor o escribe a <support@xquik.com> con el ID
de la ejecución. La página de estado explica cada ejecución, y los diagnósticos
gratuitos cubren las ejecuciones que necesitan atención.

### ¿Puedo obtener una solución a medida?

Sí. Visita [xquik.com](https://xquik.com) o lee la
[documentación de la API](https://docs.xquik.com/introduction). Ahí encontrarás
el panel, la API, el servidor MCP y los webhooks.
