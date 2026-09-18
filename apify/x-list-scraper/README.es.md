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
<a href="https://youtu.be/4UOSpoOoC3Y?t=367"><img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" width="720" alt="Framer conecta Xquik MCP con agentes de código"></a><br>
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">Mira cómo Framer usa los extractores de Xquik con Claude Code, Codex, Cursor y más, desde el minuto 6:07.</a>
</td></tr></table>

Xquik es el servicio de extracción de datos de X (Twitter) más rápido y económico
del mundo, con los datos de X más completos, y X List Scraper recopila
publicaciones, miembros y seguidores de Listas. Todos los demás Actors de Apify
cobran antes de filtrar o eliminar duplicados. Xquik cobra solo por resultados
entregados, únicos y que cumplen los filtros.

Extrae publicaciones, miembros y seguidores de Listas de X desde URLs de Listas
o IDs numéricos. Procesa varias Listas y recursos juntos. No requiere clave de
API de X ni inicio de sesión.

## Datos y filtros de Listas

- Publicaciones de Listas con texto, autor, métricas, contenido multimedia y marcas de tiempo.
- Miembros de Listas y seguidores de Listas.
- Inclusión opcional de respuestas para las líneas de tiempo de publicaciones.
- Filtros de fecha, tiempo Unix, idioma, contenido multimedia, interacción, verificación y perfil.
- Varias Listas y tipos de recurso por ejecución.
- Límites globales y por recurso.
- La paginación se reanuda tras una migración. Se eliminan las filas duplicadas.

## Input

```json
{
  "listIds": ["1748648376080666720"],
  "resources": ["tweets", "members", "followers"],
  "includeReplies": false,
  "maxItems": 10000
}
```

## Output

Las filas usan `listTweet`, `listMember` o `listFollower` como `resultType` y
conservan el ID de Lista de entrada en `sourceTarget`. El cuerpo de la fila usa
el formato estable de respuesta de Tuit o perfil de Xquik.

## Precios

Cada plan de Apify cuesta **$0.00015 por fila entregada**. Apify factura el uso
de su plataforma por separado.

- Un cobro por cada fila de datos entregada. Los diagnósticos son gratuitos en `diagnostics`.
- Sin tarifa de inicio, de Lista ni de recurso.
- La eliminación de duplicados se ejecuta antes de facturar.

Usa `latest` a menos que necesites una versión anterior. Elige entre 50 tareas
públicas o 129 operaciones REST de Xquik. Los ejemplos usan valores de muestra.
Los resultados reflejan datos en vivo.

## Paginación y recuperación

Los recursos de Lista independientes se ejecutan en paralelo. Cada linaje de
cursor permanece ordenado. Las filas aceptadas, el estado de facturación, los
cursores y las huellas digitales sobreviven a una migración de Apify. El Actor
no tiene un tiempo de espera propio.

## Extracción incompleta

Una extracción interrumpida escribe un diagnóstico `partial` gratuito. Los
resultados disponibles permanecen intactos. Lee `availableResults`,
`failedTargets`, `retryable` y `nextAction` antes de reintentar. Una salida
exitosa del Actor confirma la entrega, no una extracción completa.

Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
"Twitter" y "X" son marcas registradas de X Corp.

## Actors de Xquik relacionados

Todos los Actors de Xquik comparten el mismo motor de extracción y la misma
facturación basada en filtros con diagnósticos. Elige el que corresponda a los
datos que necesitas.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): extrae tuits de
  búsquedas, líneas de tiempo de perfiles, Listas e IDs de tuits con más de 50
  filtros y exportaciones planas. Úsalo cuando necesites datos de tuits sin
  análisis. Desde $0.00015 por fila.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): extrae
  perfiles junto con sus publicaciones, respuestas, contenido multimedia y me
  gusta a partir de nombres de usuario, IDs o URLs. Úsalo cuando empieces desde
  cuentas en lugar de búsquedas. Desde $0.00015 por fila.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): extrae
  respuestas, comentarios y conversaciones completas bajo publicaciones con más
  de 25 filtros. Úsalo cuando necesites la discusión debajo de los tuits. Desde
  $0.00015 por fila.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): extrae
  respuestas, citas, usuarios que retuitean, quienes dan me gusta e hilos para
  URLs o IDs de publicaciones en lote. Úsalo cuando midas quién interactuó con
  las publicaciones. Desde $0.00015 por fila.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): extrae
  seguidores, cuentas seguidas, miembros de Listas, suscriptores y miembros de
  Comunidades como filas de perfil. Úsalo cuando necesites listas de audiencia
  o miembros. Desde $0.00015 por perfil.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper):
  busca usuarios por nombre de usuario, biografía y ubicación con filtros de
  seguidores, verificación, antigüedad y ubicación. Úsalo cuando construyas
  listas de cuentas a partir de una búsqueda. Desde $0.00015 por perfil.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): extrae
  información, publicaciones, búsquedas, miembros y moderadores de Comunidades.
  Úsalo cuando tus fuentes sean Comunidades de X. Desde $0.00015 por fila.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): extrae
  tendencias en tiempo real por ubicación con posición, volumen, consulta y
  WOEID. Úsalo cuando quieras saber qué es tendencia y dónde. Desde $0.00015
  por tendencia.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): extrae
  Artículos largos de X en Markdown y texto con portadas, autores, fechas y
  métricas. Úsalo cuando necesites cuerpos de artículos, no tuits. Desde
  $0.00015 por artículo.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): extrae o
  almacena fotos, videos y GIFs de publicaciones o perfiles con opciones de MP4
  y metadatos. Úsalo cuando necesites los archivos multimedia en sí. Desde
  $0.00015 por fila de contenido multimedia.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  rastrea menciones de marca con relevancia, sentimiento y respuestas de
  experiencia del cliente mediante IA, y compara ejecuciones. Úsalo cuando
  sigas una marca a lo largo del tiempo. Desde $0.0003 por tuit analizado.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  etiqueta actitud, intensidad y probabilidad de sarcasmo de cada tuit con IA.
  Úsalo cuando necesites sentimiento general sobre cualquier tema. Desde
  $0.0003 por tuit analizado.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  etiqueta postura alcista, bajista, neutral o mixta, tipo de contenido,
  convicción y relevancia de activos con IA. Úsalo cuando sigas acciones,
  cripto o conversaciones de trading. Desde $0.0003 por tuit analizado.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  etiqueta publicaciones de noticias por formato, atribución de fuente y
  relevancia de tema con IA. Úsalo cuando separes reportería de opinión. Desde
  $0.0003 por tuit analizado.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  responde tus propias preguntas de categoría, puntaje y sí/no para cada tuit
  con IA. Úsalo cuando los análisis predefinidos no se ajusten a tus
  etiquetas. Desde $0.0003 por tuit analizado.
