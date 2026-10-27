[English](README.md) · **Español** · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer conecta Xquik MCP con agentes de codificación](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Mira cómo Framer usa los extractores de Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
con Claude Code, Codex, Cursor & más, desde el minuto 6:07.

Xquik es el servicio de scraping de X (Twitter) más rápido y económico del
mundo, con los datos de X más completos. X Account Location Scraper de Xquik
consulta dónde tienen su sede las cuentas de X, sin cookies de X ni inicio de
sesión. La mayoría de los demás Actores de Apify cobran antes de filtrar o
quitar duplicados. Xquik solo cobra los resultados entregados, únicos y que
cumplen tus filtros.

Pega nombres de usuario, URLs de perfil o IDs de usuario & obtén la etiqueta
"Cuenta con sede en" de X para cada cuenta en 1 ejecución. La etiqueta es la
mejor estimación de X sobre el país o la región de una cuenta. No es
nacionalidad, residencia ni ubicación exacta. Pagas **$0.00015 por fila
entregada** & Apify factura aparte el uso de la plataforma.

> Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
> "Twitter" y "X" son marcas registradas de X Corp.

## ¿Por qué usar X Account Location Scraper?

- **Una respuesta clara para cada cuenta.** Cada fila indica si X muestra una
  etiqueta, si no tiene ninguna o si la retuvo.
- **Filas en el orden de tu entrada.** Muchas cuentas vuelven en el orden en que
  las enumeraste.
- **Pega cualquier forma de cuenta.** Combina nombres de usuario con o sin @,
  URLs de perfiles & IDs de usuario en 1 lista. Usa `userIds` para las listas
  que conservas, porque el ID de usuario no cambia cuando cambia el nombre de
  usuario.
- **Exportaciones listas para hojas de cálculo.** Ajusta las columnas con
  `fields` & `flatten`. Exporta en JSON, CSV, Excel, XML o RSS.

### Resultados completos

- Cada resultado trae los datos más completos que X tiene sobre él.

### Filas precisas

- Cada ID de una fila se mantiene exacto.
- Las insignias de verificación coinciden con lo que muestra `x.com`.
- Las filas solo contienen datos públicos.
- Los anuncios & las entradas promocionadas nunca llegan a tus filas.

### Datos actualizados

- Las lecturas siguen funcionando cuando X lanza cambios.

### Velocidad

- Una página lenta no frena tu ejecución.
- Las lecturas terminan en cuanto llegan sus filas.
- Las llamadas a Actores que se atascan se recuperan solas.

### Cobro justo

- Una entrada inválida no cuesta nada & te dice qué corregir.
- Los Actores solo cobran las filas entregadas, únicas & que cumplen tus
  filtros.
- Un perfil que comparten varios objetivos se cobra 1 sola vez.
- Una ejecución reiniciada nunca cobra 2 veces.
- Las ejecuciones respetan tu límite de gasto & aun así escriben sus
  diagnósticos.
- Las ejecuciones pequeñas terminan con un consejo para gastar menos.

### Confiabilidad

- Un error aislado no hace fallar tu ejecución.
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

- La ubicación de la cuenta trae el código de país, una nota de precisión & el
  historial de nombres de usuario.

### Controles de calidad

- Cada campo que muestra X se entrega, se omite a propósito o se comprueba que
  no existe.
- Xquik prueba cada lectura en vivo contra X.

## ¿Qué datos puede extraer X Account Location Scraper?

- La etiqueta "Cuenta con sede en" de X, como país o región.
- El código ISO de 2 letras de ese país.
- Si X indica que la etiqueta puede ser inexacta.
- Cómo se conectó la cuenta a X por primera vez, como Web o el país de una
  tienda de aplicaciones.
- La plataforma & el código de país de esa conexión.
- Cuántas veces cambió la cuenta su nombre de usuario, & cuándo fue la última
  vez.
- La organización con la que X muestra que la cuenta está afiliada.
- La antigüedad de la cuenta en días & un enlace a su perfil.
- El perfil público completo, con nombre, biografía, conteos, verificación,
  fechas & imágenes.

## Cómo consultar dónde tienen su sede las cuentas de X

¿Recién llegas a Apify? Primero
[crea una cuenta gratis](https://console.apify.com/sign-up?fpr=xquik). El plan
gratuito no pide tarjeta de crédito & te da $5 para gastar cada mes. A $0.00015
por cuenta, $5 alcanzan para hasta 33,000 cuentas, sin contar el uso de la
plataforma. Luego vuelve aquí & presiona Try for free.

1. Abre X Account Location Scraper de Xquik en Apify Console.
2. Pega nombres de usuario, URLs de perfil o IDs de usuario en `twitterHandles`.
3. Define `maxItems` para limitar las filas entregadas y luego haz clic en
   Start.
4. Descarga el dataset en JSON, CSV o Excel, o usa la API de Apify.

En ningún paso ingresas cookies de X, datos de inicio de sesión ni una clave de
API.

## Entrada

`twitterHandles` acepta todas las formas de una cuenta, en cualquier
combinación.

```json
{
  "twitterHandles": [
    "BBCWorld",
    "@OpenAI",
    "https://x.com/NASA",
    "https://twitter.com/github",
    "11348282"
  ],
  "maxItems": 1000
}
```

`startUrls` & `userIds` aceptan las mismas formas. `startUrls` acepta cada URL
como texto simple o como objeto `{ "url": "..." }`.

```json
{
  "startUrls": ["https://x.com/nasa", { "url": "https://x.com/OpenAI" }],
  "userIds": ["742143"]
}
```

Un ID de usuario no cambia cuando una cuenta cambia su nombre de usuario, así
que usa `userIds` para las listas que conservas. `userNames` funciona como otro
nombre de `twitterHandles`.

Una cuenta que la entrada nombra 2 veces se entrega & se cobra 1 sola vez,
también cuando 1 entrada es su nombre de usuario & la otra su ID de usuario.
`maxItems` conserva las primeras cuentas de la entrada. Las ejecuciones pequeñas
sin problemas omiten `run-report` & ahorran uso de Apify. Activa
`alwaysSaveRunRecords` para escribirlo en todas las ejecuciones.

## Salida

Cada cuenta es 1 fila del dataset. Primero va lo que muestra la página "Acerca
de esta cuenta" de X, en `accountBasedIn`, `accountBasedInUnavailable`,
`accountBasedInAccurate`, `affiliateUsername`, `connectedVia`,
`connectedViaAccurate` & `usernameChanges`. Sigue el perfil público completo,
con `id`, `username`, `name`, `description`, `followers`, `following`,
`verified`, `verifiedType`, `createdAt`, `profilePicture` & más. Al final van 5
campos que el Actor calcula a partir del perfil. Son
`accountBasedInCountryCode`, `connectedViaPlatform`, `connectedViaCountryCode`,
`accountAgeDays` & `profileUrl`. Los campos que faltan en el origen quedan
ausentes, & un código que el Actor no puede identificar queda fuera. X Account
Location Scraper de Xquik no inventa valores.

Los ejemplos usan valores de muestra. Los resultados reflejan datos en vivo. Una
fila se ve así.

```json
{
  "accountBasedIn": {
    "value": "United Kingdom",
    "level": "country",
    "observedAt": "2026-10-12T09:00:00.000Z"
  },
  "accountBasedInAccurate": true,
  "affiliateUsername": "sample_org",
  "connectedVia": "Web",
  "usernameChanges": {
    "count": 1,
    "lastChangedAt": "2021-03-04T10:00:00.000Z"
  },
  "id": "1234567890",
  "username": "sample_user",
  "name": "Sample User",
  "followers": 1200,
  "verified": true,
  "createdAt": "2017-03-21T20:50:14.000Z",
  "accountBasedInCountryCode": "GB",
  "connectedViaPlatform": "web",
  "accountAgeDays": 3491,
  "profileUrl": "https://x.com/sample_user",
  "resultType": "profile",
  "sourceTarget": "sample_user"
}
```

Una fila distingue 3 casos.

| La fila trae                      | Qué significa                                   | Qué hacer                              |
| --------------------------------- | ----------------------------------------------- | -------------------------------------- |
| `accountBasedIn` con un `value`   | X muestra esta etiqueta para la cuenta.         | Úsala.                                 |
| `accountBasedIn: null`            | X no muestra ninguna etiqueta para esta cuenta. | Nada. X no tiene ninguna que mostrar.  |
| `accountBasedInUnavailable: true` | X retuvo la etiqueta en las 2 lecturas.         | Vuelve a ejecutar la cuenta más tarde. |

Cuando X retiene una etiqueta, la ejecución lee esa cuenta 1 vez más antes de
entregar la fila. La segunda lectura es gratis. Una etiqueta que sigue retenida
es desconocida, no ausente. Esa fila trae el perfil público sin los campos de
"Acerca de esta cuenta", & el estado de la ejecución cuenta estas cuentas. Cada
uno de los 3 casos es 1 fila entregada.

## Columnas de salida

8 campos de entrada dan forma a cada fila después de que la ejecución la lee. No
ejecutan código & no cambian el precio.

| Campo               | Qué hace                                                                                   |
| ------------------- | ------------------------------------------------------------------------------------------ |
| `fields`            | Conserva solo estos campos, en el orden & la forma en que los escribes                     |
| `omitFields`        | Quita estos campos & conserva el resto                                                     |
| `renameFields`      | Mueve un campo a una columna con un nombre nuevo                                           |
| `flatten`           | Convierte cada objeto anidado en columnas de primer nivel                                  |
| `fillMissingFields` | Llena con `null` un campo conservado que falta en una fila. Activo de forma predeterminada |
| `joinFields`        | Convierte cada una de estas listas en 1 valor de texto                                     |
| `joinSeparator`     | Texto entre los elementos unidos. El valor predeterminado es una coma & un espacio         |
| `constantFields`    | Agrega una columna con el mismo texto en cada fila                                         |

- Usa un punto para un campo dentro de un objeto, como `accountBasedIn.value`.
  Las mayúsculas & los guiones bajos no importan.
- Cada fila conserva su `id`.
- Con `fields`, un campo que falta en una fila llega como `null`. Así, todas las
  filas tienen las mismas columnas.
- Un nombre de campo incorrecto detiene la ejecución antes de leer & no cobra
  nada.
- Si no se pueden comprobar los nombres, la ejecución sigue leyendo & al final
  enumera los nombres que no encontró.
- La ejecución ignora una función de mapeo o un filtro jq escrito para otro
  Actor.

## Qué significa la etiqueta

X deduce `accountBasedIn` a partir de IPs agregadas de acceso a la cuenta. La
etiqueta no indica nacionalidad, residencia, identidad, registro, lugar de
publicación ni ubicación exacta. `level` indica si X muestra un país o una
región más amplia. `observedAt` registra la hora de la consulta.
`accountBasedInAccurate` es `false` cuando X indica que la etiqueta puede ser
inexacta. `connectedVia` indica cómo se conectó la cuenta a X por primera vez, &
`connectedViaAccurate` es `false` cuando X indica que su país puede ser
inexacto. `connectedViaPlatform` es `web`, `ios` o `android`. Los 2 códigos de
país salen de los nombres que X escribe, así que una región no tiene ninguno. X
escribe 2 nombres para algunos países, como Türkiye & Turkey, & ambos dan el
mismo código. `location` es el texto que el dueño de la cuenta escribió en el
perfil, que es un campo distinto.

## ¿Cuánto cuesta consultar la ubicación de cuentas de X?

En todos los planes de Apify, cada fila entregada cuesta $0.00015. Apify factura
aparte tu uso de la plataforma.

Para más volumen, [elige un plan de Apify](https://apify.com/pricing?fpr=xquik)
con más uso prepagado.

- Un solo cobro por cada fila de datos entregada. Los diagnósticos son gratis en
  `diagnostics`.
- Sin tarifa de inicio ni de consulta.
- Una cuenta que X no tiene no agrega filas ni cobros.
- La segunda lectura de una etiqueta retenida no tiene costo adicional.
- La eliminación de duplicados se aplica antes de facturar.
- La configuración de cargo total máximo de Apify limita las filas entregadas.

## Límites & recuperación

X Account Location Scraper de Xquik lee muchas cuentas en 1 ejecución. Las filas
entregadas & el progreso se conservan tras un reinicio de Apify. El Actor no
agrega un límite de tiempo propio. Respeta cualquier tiempo límite que definas
en Apify.

El estado de la ejecución nombra las cuentas para las que X no encuentra
coincidencia & te pide revisar el nombre de usuario, el ID o la URL. También
nombra las cuentas suspendidas. Una extracción interrumpida escribe un
diagnóstico `partial` gratis. Los resultados disponibles se conservan intactos.
Lee `availableResults`, `failedTargets`, `retryable` & `nextAction` antes de
reintentar. Una salida exitosa del Actor confirma la entrega, no una extracción
completa.

El estado de la ejecución nombra cada causa de una detención anticipada.
`stopCauses` enumera cada causa con su propio `message`, `retryable` &
`nextAction`. Las causas son `target_not_found`, `target_suspended`,
`target_failed` & `deadline_reached`. Un objetivo inexistente o suspendido entra
en la lista solo si otra causa detuvo la ejecución. La ejecución es `retryable`
si alguna causa lo es.

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

No. X Account Location Scraper de Xquik no necesita cookies de X, clave de API,
inicio de sesión ni credenciales. Todas las lecturas se ejecutan en la
infraestructura de Xquik.

### ¿La etiqueta muestra dónde vive el dueño de la cuenta?

No. Es la mejor estimación de X para la cuenta. No indica nacionalidad,
residencia ni ubicación exacta, & la propia X marca algunas etiquetas como
posiblemente inexactas.

### ¿Por qué una fila dice `accountBasedInUnavailable`?

X retuvo la etiqueta en las 2 lecturas de la ejecución. La etiqueta es
desconocida, no ausente. Vuelve a ejecutar la cuenta más tarde para obtenerla.
`accountBasedIn: null` es distinto. X no muestra ninguna etiqueta para esa
cuenta.

### ¿Cuántas cuentas puedo consultar en 1 ejecución?

Todas las que pegues. Una ejecución puede devolver 100,000 filas & más. Para una
lista más grande, sube `maxItems` por encima de las 1,000 con las que empieza el
formulario.

### ¿Es legal consultar dónde tienen su sede las cuentas de X?

X Account Location Scraper de Xquik solicita campos públicos de X. Los
resultados pueden contener datos personales. Confirma que tu propósito es lícito
& cumple las normas de privacidad aplicables. Si tienes dudas, consulta a un
abogado calificado.

### ¿Por qué mi ejecución no devolvió resultados?

Lee primero el estado de la ejecución. El estado de una ejecución vacía te pide
revisar el nombre de usuario, el ID o la URL de cada cuenta para la que X no
encuentra coincidencia. La salida gratuita `diagnostics` aparece cuando algo
requiere atención. Su `stopCauses` da a cada causa un `nextAction` que puedes
seguir.

### ¿Puedo usar la API, las programaciones & las integraciones?

Sí. Usa la API de Apify o la API REST de Xquik. La
[pestaña API](https://apify.com/xquik/x-account-location-scraper/api) tiene
ejemplos en Python, JavaScript & cURL. Las
[programaciones](https://docs.apify.com/platform/schedules) de Apify ejecutan X
Account Location Scraper de Xquik con un cron. Los agentes usan
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Usa `latest`
salvo que necesites una compilación anterior.

### ¿Dónde consigo ayuda?

Abre un issue en la
[pestaña Issues](https://apify.com/xquik/x-account-location-scraper/issues) con
el ID de la ejecución. Los diagnósticos gratuitos del almacén de clave-valor
explican las ejecuciones que requieren atención. Una ejecución que no recibe
ninguna fila explica el motivo en su estado.

### ¿Puedo obtener una solución a medida?

Sí. Describe lo que necesitas en la
[pestaña Issues](https://apify.com/xquik/x-account-location-scraper/issues).
Xquik también ofrece un panel, una API REST, un servidor MCP & webhooks.
Encuentra el sitio web de Xquik en su
[perfil de Apify](https://apify.com/xquik).
