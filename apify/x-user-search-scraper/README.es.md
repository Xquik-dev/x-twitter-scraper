[English](README.md) · **Español** · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer conecta Xquik MCP con agentes de codificación](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Mira cómo Framer usa los extractores de Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
con Claude Code, Codex, Cursor & más, desde el minuto 6:07.

Xquik es el servicio de scraping de X (Twitter) más rápido y económico del
mundo, con los datos de X más completos. X User Search Scraper de Xquik
encuentra usuarios por nombre de usuario, biografía & ubicación. La mayoría de
los demás Actores de Apify cobran antes de filtrar o quitar duplicados. Xquik
solo cobra los resultados entregados, únicos y que cumplen tus filtros.

Haz una búsqueda de usuarios de Twitter por nombre, tema, biografía o ubicación.
No necesitas clave de API de X ni iniciar sesión. Pagas **$0.00015 por perfil
entregado**, & Apify factura aparte el uso de la plataforma.

> Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
> "Twitter" y "X" son marcas registradas de X Corp.

## Datos & filtros de cuentas

- Filtros de audiencia, posts, antigüedad, verificación, sitio web, ubicación,
  biografía, nombre de usuario & correo.
- `email` & `contactInfo` con los correos, teléfonos & enlaces que publica cada
  perfil.
- Modo Search Autocomplete, con las cuentas, los temas, los hashtags & los
  cashtags que X sugiere para cada término de búsqueda.
- Reanuda 1 consulta desde un cursor guardado en `startCursor`.
- Las ejecuciones conservan las filas entregadas & el progreso cuando Apify las
  reinicia.
- Filtros & eliminación de duplicados antes del cobro.

## Cómo buscar usuarios de X

¿Recién llegas a Apify? Primero
[crea una cuenta gratis](https://console.apify.com/sign-up?fpr=xquik). El plan
gratuito no pide tarjeta de crédito & te da $5 para gastar cada mes. A $0.00015
por perfil, $5 alcanzan para hasta 33,000 perfiles, sin contar el uso de la
plataforma. Luego vuelve aquí & haz clic en Try for free.

1. Abre X User Search Scraper de Xquik en Apify Console.
2. Escribe nombres, temas, biografías o ubicaciones en `searchTerms`.
3. Agrega filtros como `minFollowers`, `verifiedOnly` o `locationContains`.
4. Define `maxItems` para limitar los perfiles entregados & luego haz clic en
   Start.
5. Descarga el dataset en JSON, CSV o Excel, o usa la API de Apify.

## Entrada

```json
{
  "searchTerms": ["artificial intelligence", "machine learning"],
  "minFollowers": 1000,
  "maxItems": 10000
}
```

Las ejecuciones pequeñas sin problemas omiten `run-report` & ahorran uso de
Apify. Activa `alwaysSaveRunRecords` para escribirlo en todas las ejecuciones.

### Migra desde otro Actor de búsqueda de usuarios

Pega la entrada que ya usas. X User Search Scraper de Xquik lee estos nombres de
campo de otros Actores. Cada línea nombra sus campos y, luego, el campo al que
se asignan.

- `requireEmail`, `requireWebsite` se asignan a `hasEmail`, `hasWebsite`.
- En `verification`, `any_verified` define `verifiedOnly`, `blue_verified`
  define `blueVerifiedOnly`, `business` & `government` definen `verifiedType`.
  `unverified` detiene la ejecución antes de cualquier lectura o cobro.
- `bioKeywords` se asigna a `bioContains`. Basta con que coincida 1 cualquiera
  de sus términos.
- `locationKeywords` con 1 valor se asigna a `locationContains`. Con más
  valores, la ejecución se detiene antes de cualquier lectura o cobro.
- `emailDomains` como lista se asigna a `emailDomains`.
- `outputEmail`, `resolveShortLinks` no necesitan campo. Cada fila incluye sus
  correos & los enlaces completos de X.
- `findEmails`, `extractEmails` no necesitan campo. Las filas incluyen los
  correos que un perfil publica en X. El estado de la ejecución indica que el
  Actor no lee ningún sitio enlazado.
- `validateEmails` no necesita campo. El estado de la ejecución indica que los
  correos llegan tal como se publican, porque el Actor no verifica ningún buzón.

Si defines uno de estos nombres & su campo canónico, gana el valor canónico. El
registro de la ejecución nombra el campo que perdió.

## Autocompletado de búsqueda

Define `mode` como `autocomplete` para leer lo que X sugiere mientras alguien
escribe. Cada término de búsqueda devuelve cuentas, temas, hashtags & cashtags
sugeridos.

```json
{
  "searchTerms": ["nasa", "$tsla"],
  "mode": "autocomplete",
  "suggestionTypes": ["users", "cashtags"],
  "maxItems": 100
}
```

- Empieza un término con `#` para hashtags o con `$` para cashtags.
- `suggestionTypes` conserva solo los tipos que elijas.
- Cada fila indica su `suggestionType` &, en `suggestion`, el texto que debes
  buscar.
- Una fila de cashtag trae `price`, `marketCap` & `dailyChangePercent`.
- Los filtros de perfil solo se aplican a Profile Search.

Una fila de sugerencia se ve así.

```json
{
  "suggestionType": "user",
  "suggestion": "@sample_user",
  "username": "sample_user",
  "name": "Sample User",
  "verified": true,
  "sourceTarget": "sample"
}
```

## Salida

Cada fila contiene un perfil &, en `sourceTarget`, la consulta que lo encontró.

Los ejemplos usan valores de muestra. Los resultados reflejan datos en vivo. Una
fila de perfil se ve así.

```json
{
  "username": "sample_user",
  "name": "Sample User",
  "description": "Sample bio about artificial intelligence",
  "followers": 2500,
  "verified": false,
  "sourceTarget": "artificial intelligence"
}
```

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

- Usa un punto para un campo dentro de un objeto. Las mayúsculas & los guiones
  bajos no importan.
- Cada fila conserva su `id`.
- Con `fields`, un campo que falta en una fila llega como `null`. Así, todas las
  filas tienen las mismas columnas.
- Un nombre de campo incorrecto detiene la ejecución antes de leer & no cobra
  nada.
- Si no se pueden comprobar los nombres, la ejecución sigue leyendo & al final
  enumera los nombres que no encontró.
- La ejecución ignora una función de mapeo o un filtro jq escrito para otro
  Actor.

## ¿Cuánto cuesta buscar usuarios de X?

En todos los planes de Apify, cada perfil entregado cuesta $0.00015. Una
sugerencia de Search Autocomplete cuesta lo mismo por fila entregada. Apify
factura aparte tu uso de la plataforma.

Para más volumen, [elige un plan de Apify](https://apify.com/pricing?fpr=xquik)
con más uso prepagado.

- Un cobro por cada fila de datos entregada. Los diagnósticos son gratis en
  `diagnostics`.
- Sin tarifa de inicio, por consulta ni por página.
- Los filtros & la eliminación de duplicados se aplican antes del cobro.

## Límites & recuperación

Una extracción interrumpida escribe un diagnóstico `partial` gratis. Los
resultados disponibles se conservan. Lee `availableResults`, `failedTargets`,
`retryable` & `nextAction` antes de reintentar. Una salida exitosa del Actor
confirma la entrega, no una extracción completa.

El estado de la ejecución nombra cada causa de una detención anticipada.
`stopCauses` enumera cada causa con su propio `message`, `retryable` &
`nextAction`. Las causas son `target_not_found`, `target_failed`,
`pagination_safety_limit` & `deadline_reached`. Un objetivo inexistente entra en
la lista solo si otra causa detuvo la ejecución. La ejecución es `retryable` si
alguna causa lo es.

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

### ¿Necesito una clave de API de X o iniciar sesión?

No. X User Search Scraper de Xquik no necesita clave de API de X, inicio de
sesión ni credenciales.

### ¿Es legal extraer cuentas de X?

X User Search Scraper de Xquik solicita campos públicos de X. Los resultados
pueden contener datos personales. Confirma que tu propósito es lícito & cumple
las normas de privacidad aplicables. Si tienes dudas, consulta a un abogado
calificado.

### ¿Por qué mi ejecución no devolvió resultados?

Lee primero el estado de la ejecución. El estado de una ejecución vacía te pide
revisar tus objetivos & filtros. La salida gratuita `diagnostics` aparece cuando
algo requiere atención. Su `stopCauses` da a cada causa un `nextAction` que
puedes seguir.

### ¿Puedo usar la API, las programaciones & las integraciones?

Sí. Elige entre 50 tareas públicas o la API REST de Xquik. La
[pestaña API](https://apify.com/xquik/x-user-search-scraper/api) tiene ejemplos
en Python, JavaScript & cURL. Las
[programaciones](https://docs.apify.com/platform/schedules) de Apify ejecutan X
User Search Scraper de Xquik con un cron. Los agentes usan
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Usa `latest`
salvo que necesites una compilación anterior.

### ¿Dónde consigo ayuda?

Abre un issue en la
[pestaña Issues](https://apify.com/xquik/x-user-search-scraper/issues) con el ID
de la ejecución. Los diagnósticos gratuitos del almacén de clave-valor explican
las ejecuciones que requieren atención. Una ejecución que no recibe ninguna fila
explica el motivo en su estado.

### ¿Puedo obtener una solución a medida?

Sí. Describe lo que necesitas en la
[pestaña Issues](https://apify.com/xquik/x-user-search-scraper/issues). Xquik
también ofrece un panel, una API REST, un servidor MCP & webhooks. Encuentra el
sitio web de Xquik en su [perfil de Apify](https://apify.com/xquik).
