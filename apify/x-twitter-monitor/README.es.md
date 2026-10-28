[English](README.md) · **Español** · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer conecta Xquik MCP con agentes de codificación](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Mira cómo Framer usa los extractores de Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
con Claude Code, Codex, Cursor & más, desde el minuto 6:07.

Xquik es el servicio de scraping de X (Twitter) más rápido y económico del
mundo, con los datos de X más completos. X (Twitter) Monitor de Xquik envía
alertas de Twitter para las cuentas y las palabras clave que elijas. Detecta
todos los tweets, respuestas, citas, reposts y cambios de perfil nuevos de una
cuenta vigilada. Normalmente detecta cada uno en menos de un segundo después de
que X lo muestra. Para una palabra clave, detecta todos los tweets nuevos que X
muestra en la búsqueda Más reciente. También detecta seguimientos y seguidores.
Cada evento llega a Discord, Telegram, Slack o tu webhook como una alerta. La
mayoría de los demás Actores de Apify cobran antes de filtrar o quitar
duplicados. Xquik solo cobra los resultados entregados y únicos, y aquí solo las
horas que vigila un monitor.

Pega cuentas o palabras clave y haz clic en Start. El monitoreo empieza de
inmediato, y las alertas llegan entre ejecuciones. Pagas **$0.0045 por
monitor-hour**. Los eventos y las alertas son gratis, y Apify factura aparte el
uso de la plataforma.

> Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
> "Twitter" y "X" son marcas registradas de X Corp.

## ¿Por qué usar X (Twitter) Monitor?

- **Alertas donde trabaja tu equipo.** Discord & Slack reciben su propio formato
  de mensaje, sin un bot que alojar. Telegram no necesita ID de chat, &
  cualquier webhook HTTPS recibe el evento completo.
- **Comprueba que tus alertas funcionan.** Cada URL nueva de webhook, Slack o
  Discord recibe una alerta de prueba. El estado de la ejecución dice si llegó.
  Telegram confirma en el chat cuando presionas Start.
- **Vigila cuentas & temas a la vez.** 1 entrada admite hasta 100 cuentas &
  búsquedas de X. Una búsqueda de un @usuario detecta las menciones de esa
  cuenta.
- **Recupera eventos perdidos.** `since` vuelve a guardar los eventos desde
  cualquier fecha de los últimos 30 días.
- **Comprueba que el monitor está vigilando.** La página de estado de cada
  ejecución lo indica & muestra 1 siguiente paso con un botón.
- **Sin pausas silenciosas.** Tus alertas te avisan 4 horas antes de que se
  pause un monitor sin ejecuciones. La siguiente ejecución lo reanuda.
- **No necesitas cuenta de X.** Nunca compartes tu inicio de sesión de X ni una
  clave de API.

### Filas precisas

- Los reposts traen el texto original completo.
- Cada ID de una fila se mantiene exacto.
- Las menciones, los enlaces, los hashtags & los resaltados quedan alineados con
  el texto.
- Las insignias de verificación coinciden con lo que muestra `x.com`.
- Las filas solo contienen datos públicos.
- Los anuncios & las entradas promocionadas nunca llegan a tus filas.
- Los monitores solo informan eliminaciones & dejados de seguir reales.
- Las alertas de cambios de perfil no saltan por valores que van & vienen.

### Datos actualizados

- Los monitores de cuentas detectan los cambios en cerca de un segundo.
- Los monitores de palabras clave detectan todos los tweets que coinciden.
- Los monitores no se pierden ningún tweet.
- Un monitor que se atrasa recupera lo que se perdió.
- Los videos en vivo & los Espacios generan un evento cuando empiezan.
- Las lecturas siguen funcionando cuando X lanza cambios.

### Velocidad

- Una página lenta no frena tu ejecución.
- Las llamadas a Actores que se atascan se recuperan solas.

### Cobro justo

- Los monitores tienen 1 precio fijo por hora, con eventos & webhooks incluidos.
- Los Actores de monitoreo solo cobran las horas que un monitor estuvo
  vigilando.

### Confiabilidad

- Un error aislado no hace fallar tu ejecución.
- Los Actores resisten las caídas breves de Xquik.
- Las ejecuciones de los Actores siguen tras un reinicio sin repetir nada.
- Las ejecuciones detenidas conservan sus filas & su informe.
- Una ejecución que no puede iniciar igual explica por qué.
- Los webhooks van firmados & protegidos contra ataques de repetición.
- Un webhook que estuvo caído igual recibe sus eventos, hasta por 7 días.
- Los eventos nuevos llegan a tiempo, incluso después de que tu webhook estuvo
  caído.
- Los webhooks nunca van a hosts privados o locales.
- Las alertas de chat llegan en orden sin alcanzar los límites de frecuencia.
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

### Controles de calidad

- Cada campo que muestra X se entrega, se omite a propósito o se comprueba que
  no existe.
- Xquik prueba cada lectura en vivo contra X.
- Los README de los Actores, los esquemas & la salida real nombran los mismos
  campos.

## ¿Qué datos envía X (Twitter) Monitor?

- Todos los tweets, respuestas, citas y reposts nuevos de las cuentas que
  vigilas, normalmente detectados en menos de un segundo después de que X los
  muestra.
- Todos los tweets nuevos que X muestra en la búsqueda Más reciente para tu
  palabra clave, con cualquier operador de búsqueda de X.
- Tweets eliminados, videos en vivo y Espacios que inicia una cuenta.
- Cambios de perfil, como nombre visible, nombre de usuario, biografía, foto de
  perfil, imagen de encabezado, ubicación, sitio web, verificación, protección,
  tweet fijado y disponibilidad, también detectados normalmente en menos de un
  segundo después de que X los muestra.
- Las cuentas que cada cuenta vigilada sigue o deja de seguir.
- Seguidores nuevos y perdidos de cada cuenta vigilada.
- Tweets con menciones, hashtags, multimedia, enlaces o encuestas, y tweets
  largos, en `eventTypes`.
- El evento completo, que es el tweet con su autor, conteos y contenido
  multimedia, o el cambio.
- El ID de usuario permanente de X junto al nombre de usuario actual, así una
  cuenta que cambia de nombre conserva su monitor.
- Cada evento en el dataset de la ejecución y en 1 dataset de historial por
  tarea guardada o por nombre de monitor.

## Cómo configurar alertas de Twitter por palabras clave

El monitoreo necesita un plan de pago de Apify.
[Elige un plan](https://apify.com/pricing?fpr=xquik), luego vuelve aquí y
presiona Try for free.

1. Abre X (Twitter) Monitor de Xquik en Apify Console.
2. Pega nombres de usuario en `twitterHandles`, o búsquedas de X en
   `searchTerms`.
3. Elige los eventos que envían una alerta. Los tweets nuevos, las respuestas,
   las citas y los reposts están activados por defecto.
4. Pega URLs de webhook en `webhookUrls`, o activa `telegram`.
5. Haz clic en Start. El monitoreo empieza en esa ejecución.
6. Agrega una programación que ejecute el Actor cada hora, con la misma entrada.

Cada ejecución posterior cobra las horas vigiladas desde la ejecución anterior.
Guarda los eventos nuevos en su dataset y termina rápido. Un monitor que pasa 24
horas sin ejecución se pausa. Tus alertas te avisan 4 horas antes. La siguiente
ejecución lo reanuda y primero cobra las horas pendientes de pago.

La misma entrada continúa los mismos monitores. Una entrada modificada los
actualiza. Una tarea guardada mantiene 1 conjunto de monitores. Sin tarea,
`monitorName` le da nombre al conjunto, así que 2 nombres mantienen separados 2
conjuntos.

## Alertas de Twitter en Discord, Telegram y Slack

- **Discord.** Pega la URL de webhook de un canal en `webhookUrls`. Cada alerta
  llega como un mensaje de Discord, sin bot que alojar.
- **Telegram.** Activa `telegram`. El estado de la ejecución te da un enlace al
  bot de Telegram de Xquik. Ábrelo y presiona Start, y las alertas llegan a ese
  chat.
- **Slack.** Pega la URL de un webhook entrante. Cada alerta llega como un
  mensaje de Slack.
- **Cualquier app.** Pega una URL HTTPS. Cada alerta llega como JSON firmado, el
  mismo evento que guarda el dataset.

Cada URL nueva de webhook, Slack o Discord recibe una alerta de prueba en la
ejecución que la agrega, y la página de estado indica si llegó. Telegram no
envía alerta de prueba. El bot responde en el chat cuando presionas Start, y la
siguiente ejecución muestra Telegram como conectado.

## Entrada

| Campo                                | Qué hace                                                                                       |
| ------------------------------------ | ---------------------------------------------------------------------------------------------- |
| `twitterHandles`                     | Nombres de usuario con o sin @, o URLs de perfiles de `x.com`, 1 por línea.                    |
| `searchTerms`                        | Búsquedas de X, como `"x api" lang:en`. Cada búsqueda es 1 monitor.                            |
| `monitorName`                        | Le da nombre a este conjunto de cuentas y palabras clave, en ejecuciones sin tarea guardada.   |
| `newPosts`                           | Todos los tweets nuevos. Activado por defecto.                                                 |
| `replies`, `quotes`, `reposts`       | Respuestas, tweets citados y reposts. Activados por defecto.                                   |
| `deletedPosts`, `liveVideos`         | Tweets eliminados, videos en vivo y Espacios de las cuentas.                                   |
| `profileChanges`, `followingChanges` | Cambios de perfil de las cuentas y cuentas que siguen o dejan de seguir.                       |
| `followerChanges`                    | Seguidores nuevos y perdidos de las cuentas.                                                   |
| `eventTypes`                         | Tipos de evento exactos, que reemplazan las casillas, como cambios de seguidores y multimedia. |
| `webhookUrls`                        | URLs HTTPS, 1 por línea. El Actor detecta las URLs de Slack y Discord.                         |
| `telegram`                           | Envía alertas a Telegram con un enlace que te da la ejecución.                                 |
| `since`                              | Guarda 1 vez los eventos conservados desde una fecha de los últimos 30 días.                   |
| `stop`                               | Detiene el monitor y apaga las alertas.                                                        |

1 entrada admite hasta 100 cuentas y palabras clave. Las palabras clave solo
envían eventos de tweets. Pon una frase entre comillas para que coincida
exactamente, como en `"x api"`. Sin comillas, las palabras pueden aparecer en
cualquier parte de un tweet. Para detectar menciones de una cuenta, agrega la
palabra clave `@username`. Telegram no necesita nombre de usuario ni ID de chat.
El estado de la ejecución te da un enlace. Ábrelo y presiona Start, y las
alertas llegan a ese chat.

Estas entradas están listas para copiar.

```json
{ "twitterHandles": ["NASA", "SpaceX"], "reposts": false }
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

- **Página de estado**, el registro `STATUS.html`. Muestra si el monitor vigila,
  el único paso siguiente con un botón, lo que la ejecución guardó y cobró, los
  objetivos y cada destino de alertas. La pestaña Output la muestra.
- **Registro de estado**, el registro `STATUS`. Contiene el mismo estado en
  JSON.
- **Eventos nuevos**, el dataset de la ejecución. Contiene cada evento nuevo,
  del más antiguo al más reciente, y 1 fila de estado al final.
- **Diagnósticos**, que el Actor escribe solo cuando algo necesita atención.

Una fila de evento es el evento tal como lo entrega la API REST de Xquik, con
todos sus campos.

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
`eventsSaved`, `pendingEvents`, `hoursCharged`, `chargedUsd`, `chargeConfirmed`,
`hoursOwed`, `paidThrough`, `pausesAt`, `historyDataset`, `notices`, `nextStep`,
`nextStepAction` y `nextStepUrl`. Un objetivo que X no tiene lo indica en su
`message`, y el monitor vigila el resto. Un webhook genérico nuevo muestra su
secreto de firma 1 sola vez, solo en el registro de estado.

El dataset de historial de tu cuenta guarda cada evento del monitor, 1 sola vez
cada uno. Su nombre empieza con `x-monitor-`.

## Para agentes de IA

1 llamada es toda la API. Cada llamada inicia o actualiza el monitor, cobra las
horas vigiladas desde la llamada anterior y devuelve solo lo nuevo. Ninguna
llamada cobra 2 veces la misma hora. Una llamada que inicia o actualiza un
monitor termina rápido, dentro del tiempo que espera el MCP de Apify. Detener un
monitor tarda alrededor de medio minuto, porque primero recoge los últimos
eventos. Lee su resultado en la ejecución cuando tu herramienta deje de esperar.

Esta entrada inicia o continúa un monitor.

```json
{
  "twitterHandles": ["NASA"],
  "searchTerms": ["\"x api\" lang:en"],
  "monitorName": "agent-demo"
}
```

Una llamada devuelve 2 cosas.

- El dataset de la ejecución contiene los eventos nuevos y luego 1 fila con
  `resultType` `status`. Su `state` indica si el monitor vigila, y `nextStep`
  indica qué hacer después. `nextStepAction` nombra el tipo de paso, como
  `add_schedule`, y `nextStepUrl` es la página para hacerlo.
- El registro `STATUS` contiene el mismo estado, con un secreto de firma cuando
  la llamada creó un webhook.

Para revisar un monitor, vuelve a llamar al Actor con la misma entrada. Eso no
cambia nada y solo cobra horas ya vigiladas. Devuelve el estado y los eventos
nuevos.

Un monitor necesita una ejecución al menos 1 vez cada 24 horas para seguir
vigilando. El servidor MCP de Apify no tiene una herramienta de programación,
así que no puedes agregar una. Pide al usuario que agregue una programación de
Apify en la página de `nextStepUrl`. Esa programación ejecuta el Actor cada hora
con la misma entrada. O vuelve a llamar al Actor tú mismo desde cualquier
temporizador. Detenlo con la misma entrada y `"stop": true`.

El Actor también lee los nombres que adivinan los agentes, como `handles` y
`usernames`, y el estado de la ejecución indica cómo los leyó.

## ¿Cuánto cuesta un monitor de Twitter?

En todos los planes de pago de Apify, cada monitor-hour cuesta $0.0045. 1 cuenta
o palabra clave es 1 monitor. Una entrada con 2 cuentas y 1 palabra clave cuesta
3 monitor-hours cada hora. Apify factura aparte tu uso de la plataforma.

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

El monitoreo necesita un
[plan de pago de Apify](https://apify.com/pricing?fpr=xquik). En el plan
gratuito, una ejecución no inicia ningún monitor y no cobra nada. En su lugar,
muestra los 5 tweets más recientes de tu primera cuenta, para que veas qué
contendrían las alertas.

## Límites & recuperación

- 1 entrada admite hasta 100 cuentas y palabras clave. Usa 2 tareas para más.
- Hasta 10 URLs de webhook por entrada, más Telegram.
- Los eventos se conservan 30 días, así que `since` puede volver a guardarlos
  dentro de ese plazo.
- Una ejecución que se detiene antes de tiempo deja sus eventos para la
  siguiente ejecución. No se pierde ninguno.
- Una ejecución que termina entre la reserva de sus horas y su cobro no cobra
  nada. Esas horas quedan como pagadas y no cuestan nada.
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

## Preguntas frecuentes

Respuestas a preguntas comunes y, luego, dónde conseguir ayuda.

### ¿Necesito cookies de X, una clave de API o iniciar sesión?

No. X (Twitter) Monitor de Xquik no necesita cookies de X, clave de API, inicio
de sesión ni credenciales. Todas las revisiones se ejecutan en la
infraestructura de Xquik.

### ¿Cómo monitoreo una cuenta de Twitter?

Pega su nombre de usuario en `twitterHandles`, elige los eventos que quieres y
agrega un destino de alertas. Xquik normalmente detecta cada tweet nuevo en
menos de un segundo después de que X lo muestra, y cada evento queda en el
dataset.

### ¿Puede monitorear cuentas de cripto y menciones de monedas?

Sí. Agrega las cuentas que sigues, o una búsqueda por palabra clave como un
cashtag o una dirección de contrato. Sus tweets nuevos y los tweets que
coinciden llegan a Discord o Telegram como alertas.

### ¿Qué tan rápido llegan las alertas?

Xquik normalmente detecta un tweet, una respuesta, una cita, un repost o un
cambio de perfil nuevo de una cuenta vigilada en menos de un segundo después de
que X lo muestra. La alerta de un tweet normalmente te llega cerca de un segundo
después de que X lo muestra. Las alertas nunca esperan a una ejecución.

### ¿Por qué la ejecución dice que el monitoreo necesita un plan de pago?

Los monitores trabajan entre ejecuciones, todo el día. Por eso necesitan un plan
de pago de Apify. Mejora tu plan y vuelve a ejecutar con la misma entrada.

### ¿Qué pasa cuando detengo el monitor?

La ejecución detiene todos los objetivos y apaga las alertas. Cobra las horas
vigiladas hasta ese momento. Luego espera alrededor de medio minuto los eventos
más recientes y los guarda, para que no quede ninguno atrás. Los eventos ya
conservados se pueden leer durante 30 días.

### ¿Cómo verifico la firma de un webhook?

Un webhook genérico nuevo recibe un secreto de firma, que aparece 1 sola vez en
el registro `STATUS`. Xquik firma cada entrega con ese secreto, igual que sus
webhooks REST.

### ¿Puedo usar la API, las programaciones & las integraciones?

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

Abre un issue en la
[pestaña Issues](https://apify.com/xquik/x-twitter-monitor/issues) con el ID de
la ejecución. La página de estado explica cada ejecución, y los diagnósticos
gratuitos cubren las ejecuciones que necesitan atención.

### ¿Puedo obtener una solución a medida?

Sí. Describe lo que necesitas en la
[pestaña Issues](https://apify.com/xquik/x-twitter-monitor/issues). Xquik
también ofrece un panel, una API REST, un servidor MCP y webhooks. Encuentra el
sitio web de Xquik en su [perfil de Apify](https://apify.com/xquik).
