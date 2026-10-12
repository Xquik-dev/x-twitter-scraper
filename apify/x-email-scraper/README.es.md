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
mundo, con los datos de X más completos. X Email Scraper de Xquik obtiene los
correos que las cuentas publican en sus propios perfiles de X, sin cookies de X
ni inicio de sesión. La mayoría de los demás Actores de Apify cobran antes de
filtrar o quitar duplicados. Xquik solo cobra los resultados entregados, únicos
y que cumplen tus filtros.

Pega nombres de usuario, escanea los seguidores de una cuenta o busca usuarios
de X, y obtén cada perfil que publica un correo, con el correo primero. Un
perfil sin correo no se entrega y no cuesta nada. Pagas **$0.00015 por fila
entregada**, y Apify factura aparte el uso de la plataforma.

> Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
> "Twitter" y "X" son marcas registradas de X Corp.

## Datos de contacto en cada fila

- El primer correo que publica el perfil, en minúsculas.
- El dominio de ese correo y el campo del perfil que lo contiene: biografía,
  nombre o ubicación.
- Todos los correos del perfil, también cuando están escritos como "name [at]
  site [dot] com".
- Los números de teléfono que publica el perfil, como un enlace de WhatsApp.
- El sitio web del perfil y los enlaces de su biografía, cada uno con su red,
  como LinkedIn, GitHub o Telegram.
- El perfil público completo: nombre, biografía, conteos, verificación, fechas e
  imágenes.
- 3 fuentes en 1 ejecución: cuentas, sus seguidores o cuentas seguidas, y
  búsquedas de usuarios.
- Filtros por dominio de correo, correo de empresa, seguidores, antigüedad de la
  cuenta, biografía y ubicación.
- Nombres de usuario con o sin @, URLs de x.com y twitter.com e IDs numéricos de
  usuario.
- Eliminación de duplicados antes de facturar.
- Exportación en JSON, CSV, Excel, XML y RSS con los datasets de Apify.
- Las ejecuciones se reanudan desde el estado guardado tras una migración de
  Apify.

## Cómo obtener correos de perfiles de X

1. Abre X Email Scraper de Xquik en Apify Console.
2. Pega nombres de usuario, URLs de perfil o IDs de usuario en `twitterHandles`,
   o agrega `searchTerms`.
3. Activa `expandFollowers` para escanear en su lugar los seguidores de cada
   cuenta.
4. Define `maxItems` para limitar las filas entregadas y haz clic en Start.
5. Descarga el dataset en JSON, CSV o Excel, o usa la API de Apify.

En ningún paso ingresas cookies de X, datos de inicio de sesión ni una clave de
API.

## Entrada

`twitterHandles` acepta todas las formas de una cuenta, en cualquier
combinación. La ejecución revisa cada cuenta y entrega las que publican un
correo:

```json
{
  "twitterHandles": ["sample_user", "@sample_org", "https://x.com/sample_shop"],
  "maxItems": 1000
}
```

`startUrls` y `userIds` aceptan las mismas formas. Con `expandFollowers`, la
ejecución lee en su lugar los seguidores de cada cuenta y conserva los que
publican un correo. `expansionRelation` elige `Followers` o `Following`:

```json
{
  "twitterHandles": ["sample_org"],
  "expandFollowers": true,
  "expansionRelation": "Followers",
  "maxScan": 10000,
  "emailDomains": "example.com, example.org"
}
```

`searchTerms` busca usuarios de X por nombre, nombre de usuario o palabras de la
biografía. Cada término es 1 búsqueda:

```json
{
  "searchTerms": ["booking", "founder"],
  "businessEmailOnly": true,
  "minFollowers": 1000
}
```

Cerca de 1 de cada 400 seguidores publica un correo, así que un escaneo de
seguidores lee muchos más perfiles de los que entrega. `maxScan` limita los
perfiles que la ejecución lee de cada lista o búsqueda. Empieza en 10,000. El
estado de la ejecución dice cuántas filas leyó cuando detiene una lista ahí, y
puedes subir `maxScan` para leer más. Los perfiles escaneados son gratis.

`emailDomains` conserva los perfiles con un correo en uno de los dominios de la
lista o en un subdominio de ellos. `businessEmailOnly` conserva los perfiles con
un correo fuera de los servicios de correo gratuitos, como Gmail.
`minFollowers`, `maxFollowers`, `minAccountAgeDays`, `verifiedOnly`,
`hasWebsite`, `hasLocation`, `bioContains` y `locationContains` acotan aún más
los perfiles. Todos los filtros se aplican antes de facturar.

`searchQueries` y `keyword` funcionan como otros nombres de `searchTerms`, y
`maxFollowersPerHandle` como otro nombre de `maxScan`. Una cuenta que la entrada
nombra 2 veces se entrega y se cobra 1 sola vez. Las ejecuciones pequeñas sin
problemas omiten `run-report` y ahorran uso de Apify. Activa
`alwaysSaveRunRecords` para escribirlo en todas las ejecuciones.

### Migra desde otro Actor de correos

Pega la entrada que ya usas. X Email Scraper de Xquik lee estos nombres de campo
de otros Actores. Cada línea nombra sus campos y, luego, el campo al que se
asignan:

- `requireEmail`: no necesita campo. Cada perfil entregado publica un correo.
- `requireWebsite`: `hasWebsite`. Conserva un perfil con cualquier enlace en su
  campo de sitio web, y el estado de la ejecución lo indica.
- `bioKeywords`: `bioContains`. Basta con que coincida 1 de sus términos.
- `locationKeywords` con 1 valor: `locationContains`. Con más valores, la
  ejecución se detiene antes de leer o cobrar.
- `emailDomains` como lista: `emailDomains`
- `outputEmail`, `resolveShortLinks`: no necesitan campo. Cada fila incluye sus
  correos y los enlaces completos de X.
- `findEmails`, `extractEmails`: sin campo. Las filas incluyen los correos que
  un perfil publica en X. El estado de la ejecución indica que el Actor no lee
  ningún sitio enlazado.
- `validateEmails`: sin campo. El estado de la ejecución indica que los correos
  llegan tal como se publican, porque el Actor no verifica ningún buzón.

Si defines uno de estos nombres y su campo canónico, gana el valor canónico. El
registro de la ejecución nombra el campo que perdió.

## Salida

Cada perfil que publica un correo es 1 fila del dataset. Primero van los datos
de contacto: `email`, `emailDomain`, `emailSource` y `contactInfo`. Sigue el
perfil público completo, con `id`, `username`, `name`, `description`,
`followers`, `following`, `verified`, `verifiedType`, `createdAt`,
`profilePicture` y más. Los campos que faltan en el origen quedan ausentes. X
Email Scraper de Xquik no inventa valores.

Los ejemplos usan valores de muestra. Los resultados reflejan datos en vivo. Una
fila se ve así:

```json
{
  "email": "press@example.com",
  "emailDomain": "example.com",
  "emailSource": "bio",
  "contactInfo": {
    "emails": [
      {
        "value": "press@example.com",
        "domain": "example.com",
        "source": "bio"
      },
      {
        "value": "jane@example.org",
        "domain": "example.org",
        "source": "bio",
        "writtenAs": "jane [at] example [dot] org"
      }
    ],
    "phones": [
      {
        "value": "+14155550123",
        "source": "bio",
        "writtenAs": "+1 (415) 555-0123"
      }
    ],
    "links": [
      { "url": "https://example.com", "network": "website", "source": "url" }
    ]
  },
  "id": "1234567890",
  "username": "sample_user",
  "name": "Sample User",
  "description": "Press: press@example.com",
  "followers": 1200,
  "verified": true,
  "createdAt": "2017-03-21T20:50:14.000Z",
  "resultType": "profile",
  "sourceTarget": "sample_user"
}
```

`resultType` es `profile` para una cuenta o un resultado de búsqueda,
`profileFollower` para un seguidor y `profileFollowing` para una cuenta seguida.
`sourceTarget` nombra la cuenta o el término de búsqueda del que salió la fila.

## Qué significa el correo

Un correo es una dirección que la cuenta escribió en su propio perfil: en su
biografía, su nombre o su ubicación. El Actor lo devuelve tal como la cuenta lo
publicó y lo pasa a minúsculas. Nada verifica que la dirección reciba correo, y
nada lee el sitio web al que enlaza un perfil. `writtenAs` guarda la forma en
que la cuenta lo escribió cuando es distinta, como en "jane [at] example [dot]
org".

Un número de teléfono aparece solo cuando el perfil lo escribe de una forma que
no puede ser otra cosa, como un enlace de WhatsApp o un número que empieza con
el signo +. Un año, una cantidad o un precio nunca se leen como número de
teléfono.

## ¿Cuánto cuesta obtener correos de perfiles de X?

En todos los planes de Apify, cada fila entregada cuesta $0.00015. Apify factura
aparte tu uso de la plataforma.

- Un cobro por cada fila de datos entregada. Los diagnósticos son gratis en
  `diagnostics`.
- Sin tarifa de inicio ni por consulta.
- Un perfil sin correo no agrega filas ni cobros.
- Una cuenta que X no tiene no agrega filas ni cobros.
- Xquik quita los duplicados antes de facturar.
- El cargo total máximo que definas en Apify limita las filas entregadas.

Un escaneo de seguidores tarda un rato y encuentra pocas filas, porque lee cerca
de 350 perfiles por segundo y conserva cerca de 1 de cada 400. `maxScan` limita
ese tiempo.

## Límites y recuperación

X Email Scraper de Xquik lee muchas cuentas, listas y búsquedas en 1 ejecución.
Las filas entregadas y el progreso se conservan tras un reinicio de Apify. El
Actor no agrega su propio límite de tiempo. Respeta cualquier tiempo límite que
definas en Apify.

El estado de la ejecución nombra las cuentas para las que X no encuentra
coincidencia y te pide revisar el nombre de usuario, el ID o la URL. También
nombra las cuentas suspendidas. Una extracción interrumpida escribe un
diagnóstico `partial` gratis. Los resultados disponibles se conservan. Lee
`availableResults`, `failedTargets`, `retryable` y `nextAction` antes de
reintentar. Una salida exitosa del Actor confirma la entrega, no una extracción
completa.

El estado de la ejecución nombra cada causa de una detención anticipada.
`stopCauses` enumera cada causa con su propio `message`, `retryable` y
`nextAction`. Las causas son `scan_limit`, `target_not_found`,
`target_suspended`, `target_failed` y `deadline_reached`. Una lista que la
ejecución detiene en `maxScan` es una causa `scan_limit`, y el informe de la
ejecución cuenta esas listas en `scanLimitedTargets`. Un objetivo inexistente o
suspendido entra en la lista solo si otra causa detuvo la ejecución. La
ejecución es `retryable` si alguna causa lo es.

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

No. X Email Scraper de Xquik no necesita cookies de X, clave de API, inicio de
sesión ni credenciales. Todas las lecturas se ejecutan en la infraestructura de
Xquik.

### ¿De dónde salen los correos?

Del propio perfil: la biografía, el nombre y la ubicación que escribió la
cuenta. El Actor no lee ningún post ni ningún sitio web enlazado, así que cada
correo es uno que la cuenta publicó en su propio perfil de X.

### ¿El Actor verifica que un correo funcione?

No. Devuelve cada dirección tal como la cuenta la publicó. Nada verifica que la
dirección reciba correo.

### ¿Por qué un escaneo de seguidores entregó pocas filas?

Cerca de 1 de cada 400 seguidores publica un correo. El estado de la ejecución
dice cuántas filas se leyeron de una lista. Sube `maxScan` para leer más
perfiles de una lista, o usa `searchTerms` con palabras como booking, que
conservan muchas más filas.

### ¿Cuántos perfiles puedo consultar en 1 ejecución?

Todos los que pegues. Una ejecución puede devolver 100,000 filas y más. Para una
lista más grande, sube `maxItems` por encima de las 1,000 con las que empieza el
formulario.

### ¿Es legal recopilar correos de perfiles de X?

X Email Scraper de Xquik solicita campos públicos de X. Los resultados contienen
datos personales. Confirma que tu propósito es lícito, cumple las normas de
privacidad y de correo electrónico que se aplican a tu caso y respeta las
solicitudes de baja. Si tienes dudas, consulta a un abogado calificado.

### ¿Por qué mi ejecución no devolvió resultados?

Lee primero el estado de la ejecución. El estado de una ejecución vacía te pide
revisar el nombre de usuario, el ID o la URL de cada cuenta para la que X no
encuentra coincidencia. Un perfil sin correo no agrega filas. La salida gratuita
`diagnostics` aparece cuando algo necesita atención. Su `stopCauses` da a cada
causa un `nextAction` que puedes seguir.

### ¿Puedo usar la API, las programaciones y las integraciones?

Sí. Usa la API de Apify o la API REST de Xquik. La
[pestaña API](https://apify.com/xquik/x-email-scraper/api) tiene ejemplos en
Python, JavaScript y cURL. Las
[programaciones](https://docs.apify.com/platform/schedules) de Apify ejecutan X
Email Scraper de Xquik con un cron. Los agentes usan
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Usa `latest`
salvo que necesites una compilación anterior.

### ¿Dónde consigo ayuda?

Abre un issue en la página del Actor o escribe a <support@xquik.com> con el ID
de la ejecución. Los diagnósticos gratuitos del almacén de clave-valor explican
las ejecuciones que necesitan atención. Una ejecución que no recibe ninguna fila
dice por qué en su estado.

### ¿Puedo obtener una solución a medida?

Sí. Visita [xquik.com](https://xquik.com) o lee la
[documentación de la API](https://docs.xquik.com/introduction). Ahí encontrarás
el panel, la API, el servidor MCP y los webhooks.
