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

Xquik es el servicio de extracción de X (Twitter) más rápido y económico del
mundo, con los datos de X más completos. X Trends Scraper recopila
tendencias en tiempo real por ubicación con rango, volumen y consulta. Cualquier
otro Actor de Apify cobra antes de filtrar o eliminar duplicados. Xquik cobra
solo por resultados entregados, únicos y que coinciden con los filtros.

Extrae las tendencias actuales de Twitter en muchas ubicaciones en una sola
ejecución. Exporta rango, tema, consulta, volumen de tuits, URL de búsqueda,
WOEID y ubicación de origen. No se necesita clave de API de X ni inicio de
sesión.

## Ubicaciones y datos de tendencias

- Ejecuta varios países o WOEID de forma simultánea.
- Devuelve hasta 50 tendencias actuales por ubicación.
- Conserva la atribución de ubicación en cada fila.
- Etiqueta las filas de hashtags e indica si hay volumen de tuits disponible.
- Elimina duplicados equivalentes antes de facturar.
- Exporta JSON, CSV, Excel, XML y RSS a través de los Dataset de Apify.
- Retoma desde el estado guardado tras una migración de Apify.

## Entrada

Usa nombres de ubicación, WOEID numéricos o ambos:

```json
{
  "locations": ["Worldwide", "United States", "Turkey"],
  "maxTrendsPerLocation": 50,
  "maxItems": 150
}
```

Los atajos admitidos incluyen Worldwide, United States, United Kingdom, Turkey,
Brazil, Canada, France, Germany, India, Indonesia, Japan, Mexico y Australia.
Usa `woeids` para cualquier otra ubicación compatible.

## Salida

Cada tendencia es una fila del Dataset con `name`, `rank`, `tweetVolume`,
`query`, `url`, `woeid`, `sourceTarget` y `resultType`. Los campos de origen
faltantes quedan ausentes. El Actor no inventa valores.

## Precios

Todos los planes de Apify cuestan **$0.00015 por fila entregada**. Apify
factura el uso de tu plataforma por separado.

- Un cobro por cada fila de datos entregada. Los diagnósticos son gratuitos en
  `diagnostics`.
- Sin tarifa de inicio, consulta ni ubicación.
- El Actor elimina los duplicados antes de facturar.
- La configuración de cargo total máximo de Apify limita las filas entregadas.

Usa `latest` a menos que necesites una compilación anterior. Elige entre 50
tareas públicas o 129 operaciones REST de Xquik. Los ejemplos usan valores de
muestra. Los resultados reflejan datos en vivo.

## Recuperación y límites

Las ubicaciones independientes se ejecutan de forma simultánea. El estado del
cursor, las filas aceptadas, el estado de facturación y las huellas de salida
sobreviven a una migración de Apify. El Actor no impone un tiempo de espera
propio para la ejecución. Se respeta un tiempo de espera de Apify establecido
por quien lo invoca.

## Extracción incompleta

Una extracción interrumpida escribe un diagnóstico gratuito de `partial`. Los
resultados disponibles permanecen intactos. Lee `availableResults`,
`failedTargets`, `retryable` y `nextAction` antes de reintentar. Una salida
exitosa del Actor confirma la entrega, no la extracción completa.

Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
"Twitter" y "X" son marcas registradas de X Corp.

## Actores de Xquik relacionados

Todos los Actores de Xquik comparten el mismo motor de extracción y la
facturación basada en filtros, con diagnósticos. Elige el que coincida con los
datos que necesitas.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): Extrae tuits de
  búsquedas, líneas de tiempo de perfiles, Listas e IDs de tuits con más de 50
  filtros y exportaciones planas. Úsalo cuando necesites datos de tuits sin
  análisis. Desde $0.00015 por fila.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): Extrae
  perfiles junto con sus publicaciones, respuestas, contenido multimedia y
  seguidores a partir de nombres de usuario, IDs o URLs. Úsalo cuando partes de
  cuentas en lugar de búsquedas. Desde $0.00015 por fila.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): Extrae
  respuestas, comentarios y conversaciones completas debajo de publicaciones
  con más de 25 filtros. Úsalo cuando necesites la discusión debajo de los
  tuits. Desde $0.00015 por fila.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): Extrae
  respuestas, citas, usuarios que retuitean e hilos para URLs o IDs de
  publicaciones de forma masiva. Úsalo cuando mides quién
  interactuó con las publicaciones. Desde $0.00015 por fila.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): Extrae
  seguidores, cuentas seguidas, miembros de Listas, suscriptores y miembros de
  Comunidades como filas de perfil. Úsalo cuando necesites listas de audiencia
  o de miembros. Desde $0.00015 por perfil.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper):
  Busca usuarios por nombre de usuario, biografía y ubicación con filtros de
  seguidores, verificación, antigüedad y ubicación. Úsalo cuando construyes
  listas de cuentas a partir de una búsqueda. Desde $0.00015 por perfil.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): Extrae
  publicaciones, miembros y seguidores de Listas a partir de URLs o IDs de
  Listas. Úsalo cuando una Lista curada define tus fuentes. Desde $0.00015 por
  fila.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): Extrae
  información, publicaciones, búsquedas, miembros y moderadores de
  Comunidades. Úsalo cuando tus fuentes sean Comunidades de X. Desde $0.00015
  por fila.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): Extrae
  artículos extensos de X en Markdown y texto con portadas, autores, fechas y
  métricas. Úsalo cuando necesites el cuerpo de artículos, no tuits. Desde
  $0.00015 por artículo.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): Extrae o
  almacena fotos, videos y GIFs de publicaciones o perfiles con opciones de
  MP4 y metadatos. Úsalo cuando necesites los archivos multimedia en sí.
  Desde $0.00015 por fila multimedia.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  Rastrea menciones de marca con relevancia, sentimiento y respuestas de
  experiencia del cliente mediante IA, y compara ejecuciones. Úsalo cuando
  observas una marca a lo largo del tiempo. Desde $0.0003 por tuit analizado.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  Etiqueta actitud, intensidad y probabilidad de sarcasmo para cada tuit con
  IA. Úsalo cuando necesites sentimiento general sobre cualquier tema. Desde
  $0.0003 por tuit analizado.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  Etiqueta postura alcista, bajista, neutral o mixta, tipo de contenido,
  convicción y relevancia del activo con IA. Úsalo cuando sigues acciones,
  criptomonedas o conversaciones de trading. Desde $0.0003 por tuit analizado.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  Etiqueta publicaciones de noticias por formato, atribución de fuente y
  relevancia del tema con IA. Úsalo cuando separas los reportes del
  comentario. Desde $0.0003 por tuit analizado.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  Responde tus propias preguntas de categoría, puntaje y sí/no para cada tuit
  con IA. Úsalo cuando los análisis predefinidos no se ajustan a tus
  etiquetas. Desde $0.0003 por tuit analizado.
- [X Tweet Viral Score Analyzer with AI](https://apify.com/xquik/x-tweet-viral-score-analyzer):
  Estima un Viral Score de 0 a 100 y un veredicto para cada tuit a partir de 8
  respuestas de IA sobre sus rasgos. Úsalo cuando estudias por qué los tuits se
  difunden o fracasan. Desde $0.0003 por tuit analizado.
