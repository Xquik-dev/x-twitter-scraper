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

Xquik es el servicio de extracción de datos de X (Twitter) más rápido y
económico del mundo, con los datos de X más completos. X Media Downloader
extrae o almacena fotos, videos y GIFs de publicaciones y perfiles. Todos los
demás Actors de Apify cobran antes de filtrar o eliminar duplicados. Xquik
cobra solo por resultados entregados, únicos y que cumplen los filtros.

Descarga contenido multimedia de Twitter o extrae URLs directas de
publicaciones y de las pestañas de contenido multimedia de perfiles. Recopila
fotos, videos, GIFs y metadatos. No requiere clave de API de X ni inicio de
sesión.

## Archivos multimedia y metadatos

- Publicaciones, perfiles, respuestas, citas e hilos en lote.
- Fotos, GIFs, calidades de MP4 y listas de reproducción HLS.
- Metadatos, URLs directas y filtros disponibles.
- Almacenamiento dentro de los límites de la ejecución, enlaces de salida y
  eliminación de duplicados antes de facturar.

## Input

```json
{
  "twitterHandles": ["OpenAI"],
  "sources": ["profiles"],
  "downloadMedia": true,
  "maxItems": 10000
}
```

Con un objetivo alcanza. Habilita `downloadMedia` para almacenar los archivos.
Los archivos de más de 80 MB quedan solo como URL.

## Output

Las filas incluyen disponibilidad, metadatos y URLs de acción. Las filas
almacenadas agregan `storedMediaUrl` y `downloadStatus: "stored"`.
**Stored Media Files** permite examinar los registros almacenados.

## Precios

Cada plan de Apify cuesta **$0.00015 por fila entregada**. Apify factura el
uso de su plataforma por separado.

- La eliminación de duplicados se ejecuta antes de facturar. Un cobro por cada
  fila de datos entregada.
- Los diagnósticos son gratuitos en `diagnostics`. Sin tarifa de inicio, URL,
  archivo o calidad.

Usa `latest`. Elige entre 50 tareas públicas o 129 operaciones REST. Los
ejemplos usan valores de muestra. Los resultados reflejan datos en vivo.

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
  gusta a partir de nombres de usuario, IDs o URLs. Úsalo cuando empieces
  desde cuentas en lugar de búsquedas. Desde $0.00015 por fila.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): extrae
  respuestas, comentarios y conversaciones completas bajo publicaciones con
  más de 25 filtros. Úsalo cuando necesites la discusión debajo de los tuits.
  Desde $0.00015 por fila.
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
- [X List Scraper](https://apify.com/xquik/x-list-scraper): extrae
  publicaciones, miembros y seguidores de Listas desde URLs o IDs de Listas.
  Úsalo cuando una Lista curada defina tus fuentes. Desde $0.00015 por fila.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): extrae
  información, publicaciones, búsquedas, miembros y moderadores de
  Comunidades. Úsalo cuando tus fuentes sean Comunidades de X. Desde $0.00015
  por fila.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): extrae
  tendencias en tiempo real por ubicación con posición, volumen, consulta y
  WOEID. Úsalo cuando quieras saber qué es tendencia y dónde. Desde $0.00015
  por tendencia.
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): extrae
  Artículos largos de X en Markdown y texto con portadas, autores, fechas y
  métricas. Úsalo cuando necesites cuerpos de artículos, no tuits. Desde
  $0.00015 por artículo.
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
  relevancia de tema con IA. Úsalo cuando separes reportería de opinión.
  Desde $0.0003 por tuit analizado.
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  responde tus propias preguntas de categoría, puntaje y sí/no para cada tuit
  con IA. Úsalo cuando los análisis predefinidos no se ajusten a tus
  etiquetas. Desde $0.0003 por tuit analizado.
