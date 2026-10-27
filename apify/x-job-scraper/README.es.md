[English](README.md) · **Español** · [Türkçe](README.tr.md) ·
[简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) ·
[Deutsch](README.de.md) · [Français](README.fr.md) · [Italiano](README.it.md)

[![Framer conecta Xquik MCP con agentes de codificación](https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg)](https://youtu.be/4UOSpoOoC3Y?t=367)\
[Mira cómo Framer usa los extractores de Xquik](https://youtu.be/4UOSpoOoC3Y?t=367)
con Claude Code, Codex, Cursor & más, desde el minuto 6:07.

Xquik es el servicio de scraping de X (Twitter) más rápido y económico del
mundo, con los datos de X más completos. X Jobs Scraper de Xquik recopila
ofertas de empleo publicadas en X, con salarios, enlaces para postularse &
descripciones completas. La mayoría de los demás Actores de Apify cobran antes
de filtrar o quitar duplicados. Xquik solo cobra los resultados entregados,
únicos y que cumplen tus filtros.

Busca empleos de X por palabra clave, lugar, modalidad de trabajo, nivel de
experiencia & empresa en 1 ejecución. Pagas **$0.00015 por fila entregada**, &
Apify factura aparte el uso de la plataforma. No necesitas clave de API de X ni
iniciar sesión.

> Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
> "Twitter" y "X" son marcas registradas de X Corp.

## Búsquedas & datos de empleos

- Muchos términos de búsqueda en 1 ejecución, leídos en paralelo.
- Filtros de lugar, modalidad de trabajo, nivel de experiencia, tipo de empleo &
  empresa.
- URLs & IDs de empleos leídos como ofertas completas.
- Ubicaciones de empleo por nombre, cada una con el ID que acepta `locationId`.
- Título, rango salarial, moneda, enlace para postularse, ubicación & cuenta que
  contrata.
- Descripciones completas en texto plano & Markdown en cada fila.
- La búsqueda de origen en cada fila.
- Eliminación de duplicados entre búsquedas antes del cobro.
- Exportación en JSON, CSV, Excel, XML & RSS con los datasets de Apify.
- Las ejecuciones se reanudan desde el estado guardado tras una migración de
  Apify.

## Cómo extraer empleos de X

¿Recién llegas a Apify? Primero
[crea una cuenta gratis](https://console.apify.com/sign-up?fpr=xquik). El plan
gratuito no pide tarjeta de crédito & te da $5 para gastar cada mes. A $0.00015
por empleo, $5 alcanzan para hasta 33,000 empleos, sin contar el uso de la
plataforma. Luego vuelve aquí & haz clic en Try for free.

1. Abre X Jobs Scraper de Xquik en Apify Console.
2. Escribe puestos o habilidades en `searchTerms`, o URLs de empleos en
   `startUrls`.
3. Acota la búsqueda con `location`, `locationType`, `seniority` o `company`.
4. Define `maxItems` para limitar las filas entregadas & luego haz clic en
   Start.
5. Descarga el dataset en JSON, CSV o Excel, o usa la API de Apify.

`startUrls` acepta cada URL como texto simple o como objeto `{ "url": "..." }`.

```json
{
  "startUrls": [
    "https://x.com/i/jobs/1899202395210649861",
    { "url": "https://x.com/i/jobs/1899202395210649861" }
  ]
}
```

## Entrada

Busca por palabra clave con filtros.

```json
{
  "searchTerms": ["software engineer", "data scientist"],
  "location": "Berlin",
  "locationType": ["remote", "hybrid"],
  "seniority": ["senior", "lead"],
  "maxItems": 200
}
```

`locationType` acepta `onsite`, `remote` & `hybrid`. `seniority` acepta
`intern`, `entry_level`, `junior`, `mid_level`, `senior`, `lead`, `manager` &
`executive`. `employmentType` acepta `full_time`, `full_time_contract`,
`part_time` & `contract_to_hire`. Cada filtro conserva los empleos que coinciden
con cualquiera de los valores que elijas.

Lee por URL o ID los empleos que ya conoces.

```json
{
  "startUrls": [{ "url": "https://x.com/i/jobs/1899202395210649861" }],
  "jobIds": ["1828221151962898435"]
}
```

`location` acepta el nombre de un lugar. En cambio, `locationId` fija 1 lugar
exacto, como New York City en vez de West New York.

Encuentra los IDs de lugares por nombre. Una ejecución con `locationSearchTerms`
enumera lugares en vez de empleos.

```json
{ "locationSearchTerms": ["New York"], "maxItems": 20 }
```

Las ejecuciones pequeñas sin problemas omiten `run-report` & ahorran uso de
Apify. Activa `alwaysSaveRunRecords` para escribirlo en todas las ejecuciones.

## Salida

Cada empleo es 1 fila del dataset con `id`, `title`, `url`, `applyUrl`,
`location`, los campos de salario & `account`. Cada fila también trae
`description`, `descriptionMarkdown`, `locationType`, `employmentType`,
`seniorityLevel`, `jobFunction`, `team`, `postedAt` & `company`. Define
`includeDetails` como `false` para una ejecución más rápida solo con los campos
del listado. Las filas de URLs de empleos siempre traen la oferta completa. Los
campos que faltan en el origen quedan ausentes. X Jobs Scraper de Xquik no
inventa valores.

Los ejemplos usan valores de muestra. Los resultados reflejan datos en vivo. Una
fila de empleo se ve así.

```json
{
  "id": "1899202395210649861",
  "title": "Engineer",
  "url": "https://x.com/i/jobs/1899202395210649861",
  "applyUrl": "https://example.com/careers/engineer",
  "location": "United States",
  "locationType": "remote",
  "employmentType": "full_time",
  "seniorityLevel": "lead",
  "formattedSalary": "Starting at $225K",
  "salaryMin": 225000,
  "salaryCurrencyCode": "USD",
  "salaryInterval": "annually",
  "account": { "username": "example", "verified": true },
  "sourceTarget": "software engineer",
  "resultType": "job"
}
```

Cada ubicación de empleo es 1 fila con el `id` que acepta `locationId`.

```json
{
  "id": "1720462281920696805",
  "name": "New York City, NY",
  "sourceTarget": "New York",
  "resultType": "jobLocation"
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

## ¿Cuánto cuesta extraer empleos de X?

En todos los planes de Apify, cada fila entregada cuesta $0.00015. Apify factura
aparte tu uso de la plataforma.

Para más volumen, [elige un plan de Apify](https://apify.com/pricing?fpr=xquik)
con más uso prepagado.

- Un cobro por cada fila de datos entregada. Los diagnósticos son gratis en
  `diagnostics`.
- Sin tarifa de inicio, por búsqueda ni por URL de empleo.
- Las descripciones completas no tienen costo adicional.
- La eliminación de duplicados se aplica antes del cobro.
- La configuración de cargo total máximo de Apify limita las filas entregadas.

## Límites & recuperación

X Jobs Scraper de Xquik lee muchas búsquedas & URLs de empleos en 1 ejecución.
Las filas entregadas & el progreso se conservan tras un reinicio de Apify. El
Actor no agrega un límite de tiempo propio. Respeta cualquier tiempo límite que
definas en Apify.

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

### ¿Necesito una clave de API de X o iniciar sesión?

No. X Jobs Scraper de Xquik no necesita clave de API de X, inicio de sesión ni
credenciales.

### ¿Es legal extraer empleos de X?

X Jobs Scraper de Xquik solicita campos públicos de X. Los resultados pueden
contener datos personales. Confirma que tu propósito es lícito & cumple las
normas de privacidad aplicables. Si tienes dudas, consulta a un abogado
calificado.

### ¿Por qué mi ejecución no devolvió resultados?

Lee primero el estado de la ejecución. El estado de una ejecución vacía te pide
revisar tus términos de búsqueda & filtros. La salida gratuita `diagnostics`
aparece cuando algo requiere atención. Su `stopCauses` da a cada causa un
`nextAction` que puedes seguir. Un valor de filtro que el Actor no conoce
detiene la ejecución antes de cualquier cobro & nombra los valores que debes
usar.

### ¿Puedo usar la API, las programaciones & las integraciones?

Sí. Usa la API de Apify o la API REST de Xquik. La
[pestaña API](https://apify.com/xquik/x-job-scraper/api) tiene ejemplos en
Python, JavaScript & cURL. Las
[programaciones](https://docs.apify.com/platform/schedules) de Apify ejecutan X
Jobs Scraper de Xquik con un cron. Los agentes usan
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Usa `latest`
salvo que necesites una compilación anterior.

### ¿Dónde consigo ayuda?

Abre un issue en la
[pestaña Issues](https://apify.com/xquik/x-job-scraper/issues) con el ID de la
ejecución. Los diagnósticos gratuitos del almacén de clave-valor explican las
ejecuciones que requieren atención. Una ejecución que no recibe ninguna fila
explica el motivo en su estado.

### ¿Puedo obtener una solución a medida?

Sí. Describe lo que necesitas en la
[pestaña Issues](https://apify.com/xquik/x-job-scraper/issues). Xquik también
ofrece un panel, una API REST, un servidor MCP & webhooks. Encuentra el sitio
web de Xquik en su [perfil de Apify](https://apify.com/xquik).
