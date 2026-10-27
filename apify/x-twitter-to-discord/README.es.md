[English](README.md) · **Español** · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer conecta Xquik MCP con agentes de codificación](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Mira cómo Framer usa los extractores de Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
con Claude Code, Codex, Cursor & más, desde el minuto 6:07.

Xquik es el servicio de scraping de X (Twitter) más rápido y económico del
mundo, con los datos de X más completos. X (Twitter) to Discord Bot de Xquik
envía a tu canal de Discord todos los tweets, respuestas, citas y reposts nuevos
de las cuentas que elijas. Normalmente detecta cada uno en menos de un segundo
después de que X lo muestra. La mayoría de los demás Actores de Apify cobran
antes de filtrar o quitar duplicados. Xquik solo cobra los resultados entregados
y únicos, y aquí solo las horas que vigila un monitor.

Pega una URL de webhook de Discord y las cuentas que quieres vigilar, luego haz
clic en Start. Las alertas llegan a tu canal entre ejecuciones, sin bot que
alojar ni invitar. Pagas **$0.0045 por monitor-hour**. Los eventos y las alertas
son gratis, y Apify factura aparte el uso de la plataforma.

> Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
> "Twitter" y "X" son marcas registradas de X Corp.

## Qué envía el bot de Twitter a Discord

- Todos los tweets, respuestas, citas y reposts nuevos de las cuentas que
  vigilas, normalmente detectados en menos de un segundo después de que X los
  muestra.
- Todos los tweets nuevos que X muestra en la búsqueda Más reciente para tu
  palabra clave, con cualquier operador de búsqueda de X.
- Videos en vivo, Espacios, tweets eliminados, cambios de perfil, seguimientos y
  seguidores, cuando los activas.
- Cada alerta como un mensaje de Discord que nombra la cuenta y el evento,
  contiene el texto del tweet y enlaza al tweet en X. Ninguna mención en un
  tweet notifica a nadie.
- Un mensaje de prueba a cada URL nueva de Discord, con su respuesta en el
  estado de la ejecución.
- Cada evento en el dataset de la ejecución y en 1 dataset de historial por
  tarea guardada o por nombre de monitor.

## Cómo enviar tweets a Discord

El monitoreo necesita un plan de pago de Apify.
[Elige un plan](https://apify.com/pricing?fpr=xquik), luego vuelve aquí y
presiona Try for free.

1. En Discord, abre los ajustes de tu canal, luego Integraciones y luego
   Webhooks.
2. Crea un webhook y copia su URL.
3. Abre X (Twitter) to Discord Bot de Xquik en Apify Console y pega la URL en
   `discordWebhookUrl`.
4. Pega nombres de usuario en `twitterHandles`, o búsquedas de X en
   `searchTerms`.
5. Haz clic en Start. El monitoreo empieza en esa ejecución, y el canal recibe
   un mensaje de prueba.
6. Agrega una programación que ejecute el Actor cada hora, con la misma entrada.

Cada ejecución posterior cobra las horas vigiladas desde la ejecución anterior.
Guarda los eventos nuevos en su dataset y termina rápido. Un monitor que pasa 24
horas sin ejecución se pausa. Tu canal recibe un aviso 4 horas antes. La
siguiente ejecución lo reanuda y primero cobra las horas pendientes de pago.

## Entrada

| Campo                                                   | Qué hace                                                                                     |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `discordWebhookUrl`                                     | La URL de webhook de tu canal de Discord.                                                    |
| `twitterHandles`                                        | Nombres de usuario con o sin @, o URLs de perfiles de `x.com`, 1 por línea.                  |
| `searchTerms`                                           | Búsquedas de X, como `"x api" lang:en`. Cada búsqueda es 1 monitor.                          |
| `monitorName`                                           | Le da nombre a este conjunto de cuentas y palabras clave, en ejecuciones sin tarea guardada. |
| `newPosts`, `replies`, `quotes`, `reposts`              | Tweets nuevos, respuestas, tweets citados y reposts. Activados por defecto.                  |
| `deletedPosts`, `liveVideos`                            | Tweets eliminados, videos en vivo y Espacios de las cuentas.                                 |
| `profileChanges`, `followingChanges`, `followerChanges` | Cambios de perfil, seguimientos y seguidores de las cuentas.                                 |
| `eventTypes`                                            | Tipos de evento exactos, que reemplazan las casillas.                                        |
| `webhookUrls`, `telegram`                               | Slack, cualquier webhook HTTPS o Telegram, además de Discord.                                |
| `since`                                                 | Guarda 1 vez los eventos conservados desde una fecha de los últimos 30 días.                 |
| `stop`                                                  | Detiene el monitor y apaga las alertas.                                                      |

1 entrada admite hasta 100 cuentas y palabras clave. Las palabras clave solo
envían eventos de tweets. Una ejecución sin URL de Discord igual vigila y guarda
los eventos nuevos en su dataset, y su estado te pide agregar una URL de
webhook.

Estas entradas están listas para copiar.

```json
{
  "discordWebhookUrl": "https://discord.com/api/webhooks/000/XXXX",
  "twitterHandles": ["NASA"]
}
```

```json
{
  "discordWebhookUrl": "https://discord.com/api/webhooks/000/XXXX",
  "searchTerms": ["\"your game\" -from:yourstudio"],
  "monitorName": "game-mentions"
}
```

## Salida

Cada ejecución devuelve 4 salidas.

- **Página de estado**, el registro `STATUS.html`. Muestra si el monitor vigila,
  el único paso siguiente con un botón, lo que la ejecución guardó y cobró, los
  objetivos y cada destino de alertas. La pestaña Output la muestra.
- **Registro de estado**, el registro `STATUS`. Contiene el mismo estado en
  JSON.
- **Eventos nuevos**, el dataset de la ejecución. Contiene cada evento nuevo,
  del más antiguo al más reciente, y 1 fila de estado al final.
- **Diagnósticos**, que el Actor escribe solo cuando algo necesita atención.

Una fila de evento es el evento tal como lo entrega la API REST de Xquik, con
todos sus campos. El registro de estado contiene `state`, `targets`,
`destinations`, `eventsSaved`, `hoursCharged`, `paidThrough`, `pausesAt`,
`nextStep`, `nextStepAction` y `nextStepUrl`, tal como los muestra X (Twitter)
to Discord Bot.

El dataset de historial de tu cuenta guarda cada evento del monitor, 1 sola vez
cada uno. Su nombre empieza con `x-monitor-`.

## Para agentes de IA

1 llamada es toda la API. Cada llamada inicia o actualiza el monitor, cobra las
horas vigiladas desde la llamada anterior y devuelve solo lo nuevo. Ninguna
llamada cobra 2 veces la misma hora. Una llamada que inicia o actualiza un
monitor termina rápido, dentro del tiempo que espera el MCP de Apify. Detener un
monitor tarda alrededor de medio minuto, porque primero recoge los últimos
eventos.

Esta entrada inicia o continúa un monitor.

```json
{
  "discordWebhookUrl": "https://discord.com/api/webhooks/000/XXXX",
  "twitterHandles": ["NASA"],
  "monitorName": "agent-demo"
}
```

El dataset de la ejecución contiene los eventos nuevos y luego 1 fila con
`resultType` `status`. Su `state` indica si el monitor vigila, y `nextStep`
indica qué hacer después. Para revisar un monitor, vuelve a llamar al Actor con
la misma entrada. Eso no cambia nada y solo cobra horas ya vigiladas.

Un monitor necesita una ejecución al menos 1 vez cada 24 horas para seguir
vigilando. El servidor MCP de Apify no tiene una herramienta de programación,
así que no puedes agregar una. Pide al usuario que agregue una programación de
Apify en la página de `nextStepUrl`. Esa programación ejecuta el Actor cada hora
con la misma entrada. Detenlo con la misma entrada y `"stop": true`.

## ¿Cuánto cuesta un bot de Twitter a Discord?

En todos los planes de pago de Apify, cada monitor-hour cuesta $0.0045. 1 cuenta
o palabra clave es 1 monitor. Apify factura aparte tu uso de la plataforma.

- 1 cuenta enviada a Discord durante 30 días cuesta unos $3.24.
- 5 cuentas durante 30 días cuestan unos $16.20.
- Los eventos y las alertas son gratis, sin importar cuántos lleguen.
- Sin tarifa de inicio. Una ejecución solo cobra horas ya vigiladas.
- Un objetivo que X no tiene no vigila nada y no cuesta nada.
- Tu costo máximo por ejecución limita cada cobro. Las horas que lo superan
  esperan a la siguiente ejecución.

Una programación cada hora mantiene bajo el uso de Apify frente a las horas que
paga. Las ejecuciones cada pocos minutos suman uso y no cambian nada en las
alertas, que igual llegan entre ejecuciones.

El monitoreo necesita un
[plan de pago de Apify](https://apify.com/pricing?fpr=xquik). En el plan
gratuito, una ejecución no inicia ningún monitor y no cobra nada. En su lugar,
muestra los 5 tweets más recientes de tu primera cuenta.

## Límites & recuperación

- 1 entrada admite hasta 100 cuentas y palabras clave. Usa 2 tareas para más.
- Hasta 10 URLs de webhook por entrada, más Telegram.
- Los eventos se conservan 30 días, así que `since` puede volver a guardarlos
  dentro de ese plazo.
- Una ejecución que se detiene antes de tiempo deja sus eventos para la
  siguiente ejecución. No se pierde ninguno.
- Cada ejecución escribe 1 fila de estado gratis, así que su dataset nunca queda
  vacío.
- Todos los Actores de monitoreo de Xquik cobran el mismo precio por hora. Una
  ejecución paga las horas pendientes más antiguas de todos tus monitores, sin
  importar qué Actor los vigiló.

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
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer)
  estima un Viral Score de 0 a 100 & un veredicto para cada post a partir de 8
  respuestas de IA sobre sus rasgos. Úsalo cuando estudies por qué los posts se
  difunden o fracasan. Desde $0.0003 por post analizado.
- [X (Twitter) Monitor](https://apify.com/xquik/x-twitter-monitor) detecta cada
  tweet, respuesta, cita, repost y cambio de perfil nuevos de las cuentas,
  normalmente en menos de un segundo después de que X lo muestra, además de los
  tweets de palabras clave y los seguimientos. Úsalo cuando necesites alertas en
  cuanto X muestre un tweet. Desde $0.0045 por monitor-hour.

## Preguntas frecuentes

Respuestas a preguntas comunes y, luego, dónde conseguir ayuda.

### ¿Necesito cookies de X, una clave de API o iniciar sesión?

No. X (Twitter) to Discord Bot de Xquik no necesita cookies de X, clave de API,
inicio de sesión ni credenciales. Todas las revisiones se ejecutan en la
infraestructura de Xquik.

### ¿Necesito alojar o invitar un bot?

No. Discord publica cada alerta a través del webhook de tu canal. Nada se
ejecuta de tu lado, y nadie necesita invitar nada al servidor.

### ¿Qué tan rápido llegan los tweets a Discord?

Xquik normalmente detecta un tweet, una respuesta, una cita o un repost nuevo de
una cuenta vigilada en menos de un segundo después de que X lo muestra. El tweet
normalmente llega a Discord cerca de un segundo después de que X lo muestra. Las
alertas nunca esperan a una ejecución.

### ¿Puedo enviar a Discord tweets por palabra clave?

Sí. Agrega búsquedas de X en `searchTerms`. Cada tweet nuevo que X muestra para
ellas en la búsqueda Más reciente llega al canal.

### ¿Puedo publicar en más de 1 canal?

Sí. Pon las URLs de webhook de los otros canales en `webhookUrls`, hasta 10 por
entrada.

### ¿Por qué la ejecución dice que el monitoreo necesita un plan de pago?

Los monitores trabajan entre ejecuciones, todo el día. Por eso necesitan un plan
de pago de Apify. Mejora tu plan y vuelve a ejecutar con la misma entrada.

### ¿Qué pasa cuando detengo el monitor?

La ejecución detiene todos los objetivos y apaga las alertas. Cobra las horas
vigiladas hasta ese momento. Luego espera alrededor de medio minuto los eventos
más recientes y los guarda, para que no quede ninguno atrás. Los eventos ya
conservados se pueden leer durante 30 días.

### ¿Puedo usar la API, las programaciones & las integraciones?

Sí. Usa la API de Apify o la API REST de Xquik. La
[pestaña API](https://apify.com/xquik/x-twitter-to-discord/api) tiene ejemplos
en Python, JavaScript y cURL. Las
[programaciones](https://docs.apify.com/platform/schedules) de Apify mantienen
activo el monitor. Los agentes usan
[Apify MCP](https://docs.apify.com/platform/integrations/mcp).

### ¿Es legal monitorear cuentas de X?

X (Twitter) to Discord Bot de Xquik solicita datos públicos de X. Los resultados
pueden contener datos personales. Confirma que tu propósito es lícito y cumple
las normas de privacidad que te aplican. Si tienes dudas, consulta a un abogado
calificado.

### ¿Dónde consigo ayuda?

Abre un issue en la
[pestaña Issues](https://apify.com/xquik/x-twitter-to-discord/issues) con el ID
de la ejecución. La página de estado explica cada ejecución, y los diagnósticos
gratuitos cubren las ejecuciones que necesitan atención.

### ¿Puedo obtener una solución a medida?

Sí. Describe lo que necesitas en la
[pestaña Issues](https://apify.com/xquik/x-twitter-to-discord/issues). Xquik
también ofrece un panel, una API REST, un servidor MCP y webhooks. Encuentra el
sitio web de Xquik en su [perfil de Apify](https://apify.com/xquik).
