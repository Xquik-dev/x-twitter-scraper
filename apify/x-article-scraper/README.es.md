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

# X Article Scraper | $0.00015/Article | Pay-Per-Result

<table align="center"><tr><td align="center">
<a href="https://youtu.be/4UOSpoOoC3Y?t=367"><img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" width="720" alt="Framer conecta Xquik MCP con agentes de codificación"></a><br>
<a href="https://youtu.be/4UOSpoOoC3Y?t=367">Mira cómo Framer usa los extractores de Xquik con Claude Code, Codex, Cursor y más, desde el minuto 6:07.</a>
</td></tr></table>

Xquik es el servicio de extracción de datos de X (Twitter) más rápido y
económico del mundo, con los datos más completos de X, y X Article Scraper
convierte los X Articles de formato largo en Markdown, texto, portadas,
autores, fechas y métricas. Todos los demás Actors de Apify cobran antes de
filtrar o eliminar duplicados. Xquik solo cobra por resultados entregados,
únicos y que coinciden con los filtros.

Extrae X Articles de formato largo a partir de URLs de publicaciones o IDs
numéricos de Tweet. No requiere clave de API de X ni inicio de sesión.

## Entrada

| Campo                  | Propósito                                       | Valor por defecto |
| ---------------------- | ------------------------------------------------ | -------- |
| `startUrls`            | URLs públicas de publicaciones de Article        | Ninguno  |
| `tweetIds`             | IDs numéricos de Tweet de Article                | Ninguno  |
| `maxItems`             | Límite global de Articles entregados             | `100000` |
| `dedupeAcrossTargets`  | Elimina IDs de Article repetidos antes de facturar | `true` |
| `maxConcurrency`       | Lecturas paralelas independientes de Article      | `100`    |

## Salida

La pestaña Output abre `Articles`. `Results` enlaza a las filas. `Run Report`
enlaza a conteos, finalización, duración y anomalías.

```json
{
  "markdown": "# Article title\n\nPlain Article text",
  "contents": [{ "type": "paragraph", "text": "Plain Article text" }]
}
```

Las filas agregan autor, fuente, portada, hora y métricas. Exporta en JSON o
en tablas.

## Finalización y facturación

La eliminación de duplicados se ejecuta antes de facturar. Paga por fila de
datos entregada, sin tarifa de inicio. Cada plan de Apify cuesta **$0.00015
por artículo entregado**. Los diagnósticos son gratuitos en la salida
`diagnostics`. Apify factura el uso de tu plataforma por separado.

## API y MCP

Elige entre 50 tasks públicas o 129 operaciones REST. Los agentes usan
[Apify MCP](https://docs.apify.com/platform/integrations/mcp). Para lecturas
individuales, usa [Xquik REST](https://docs.xquik.com/api-reference/x/get-article).

## Límites y formato

Solo se pueden devolver los Articles públicos que X expone. Markdown conserva
bloques, y rangos en negrita y cursiva. `contents` conserva el formato de
origen. Los metadatos de enlaces nunca se inventan. Apify muestra el Markdown
como texto. Los ejemplos usan valores de muestra. Los resultados reflejan
datos en vivo. Usa `latest`. Las URLs y los IDs se pueden combinar.

## Extracción incompleta

Una extracción interrumpida escribe un diagnóstico `partial` gratuito. Los
resultados disponibles permanecen intactos. Lee `availableResults`,
`failedTargets`, `retryable` y `nextAction` antes de reintentar. Una salida
exitosa del Actor confirma la entrega, no una extracción completa.

Xquik es un servicio independiente de terceros. No está afiliado a X Corp.
"Twitter" y "X" son marcas registradas de X Corp.

## Actors de Xquik relacionados

Todos los Actors de Xquik comparten el mismo motor de extracción, la
facturación basada en filtros primero y los diagnósticos. Elige el que
coincida con los datos que necesitas.

- [X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper): extrae tuits de
  búsquedas, líneas de tiempo de perfiles, Listas e IDs de tuits, con más de 50
  filtros y exportaciones planas. Úsalo cuando necesites datos de tuits sin
  análisis. Desde $0.00015 por fila.
- [X Profile Scraper](https://apify.com/xquik/x-profile-scraper): extrae
  perfiles junto con sus publicaciones, respuestas, contenido multimedia y me
  gusta, a partir de nombres de usuario, IDs o URLs. Úsalo cuando partas de
  cuentas en lugar de búsquedas. Desde $0.00015 por fila.
- [X Reply Scraper](https://apify.com/xquik/x-reply-scraper): extrae
  respuestas, comentarios y conversaciones completas debajo de publicaciones,
  con más de 25 filtros. Úsalo cuando necesites la discusión debajo de los
  tuits. Desde $0.00015 por fila.
- [X Engagement Scraper](https://apify.com/xquik/x-engagement-scraper): extrae
  respuestas, citas, usuarios que retuitean, usuarios que dan me gusta e hilos
  para URLs o IDs de publicaciones en bloque. Úsalo cuando midas quién
  interactuó con las publicaciones. Desde $0.00015 por fila.
- [X Follower Scraper](https://apify.com/xquik/x-follower-scraper): extrae
  seguidores, cuentas seguidas, miembros de Listas, suscriptores y miembros de
  Comunidades como filas de perfil. Úsalo cuando necesites listas de audiencia
  o miembros. Desde $0.00015 por perfil.
- [X User Search Scraper](https://apify.com/xquik/x-user-search-scraper):
  busca usuarios por nombre de usuario, biografía y ubicación, con filtros de
  seguidores, verificación, antigüedad de cuenta y ubicación. Úsalo cuando
  construyas listas de cuentas a partir de una búsqueda. Desde $0.00015 por
  perfil.
- [X List Scraper](https://apify.com/xquik/x-list-scraper): extrae
  publicaciones, miembros y seguidores de Listas a partir de URLs o IDs de
  Listas. Úsalo cuando una Lista curada defina tus fuentes. Desde $0.00015 por
  fila.
- [X Community Scraper](https://apify.com/xquik/x-community-scraper): extrae
  información, publicaciones, búsquedas, miembros y moderadores de
  Comunidades. Úsalo cuando tus fuentes sean Comunidades de X. Desde $0.00015
  por fila.
- [X Trends Scraper](https://apify.com/xquik/x-trends-scraper): extrae
  tendencias en tiempo real por ubicación, con rango, volumen, consulta y
  WOEID. Úsalo cuando quieras saber qué es tendencia y dónde. Desde $0.00015
  por tendencia.
- [X Media Downloader](https://apify.com/xquik/x-media-downloader): extrae o
  almacena fotos, videos y GIFs de publicaciones o perfiles, con opciones de
  MP4 y metadatos. Úsalo cuando necesites los archivos multimedia en sí.
  Desde $0.00015 por fila de contenido multimedia.
- [X (Twitter) Brand Monitoring with AI Analysis](https://apify.com/xquik/x-twitter-brand-monitoring):
  rastrea menciones de marca con relevancia, sentimiento y respuestas de
  experiencia del cliente generadas por IA, y compara ejecuciones. Úsalo
  cuando monitorees una marca a lo largo del tiempo. Desde $0.0003 por tuit
  analizado.
- [X Tweet Sentiment Analysis with AI](https://apify.com/xquik/x-tweet-sentiment-analysis):
  etiqueta la actitud, la intensidad y la probabilidad de sarcasmo de cada
  tuit con IA. Úsalo cuando necesites un sentimiento general sobre cualquier
  tema. Desde $0.0003 por tuit analizado.
- [X (Twitter) Stock & Crypto AI Trading Signals](https://apify.com/xquik/x-twitter-stock-crypto-signals):
  etiqueta la postura alcista, bajista, neutral o mixta, el tipo de contenido,
  la convicción y la relevancia del activo con IA. Úsalo cuando sigas
  acciones, cripto o conversaciones de trading. Desde $0.0003 por tuit
  analizado.
- [X (Twitter) News Monitor with AI Analysis](https://apify.com/xquik/x-twitter-news-monitor):
  etiqueta publicaciones de noticias por formato, atribución de fuente y
  relevancia del tema con IA. Úsalo cuando separes el reporte informativo del
  comentario. Desde $0.0003 por tuit analizado.
- [X (Twitter) Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  responde tus propias preguntas de categoría, puntuación y sí/no para cada
  tuit con IA. Úsalo cuando los análisis predefinidos no se ajusten a tus
  etiquetas. Desde $0.0003 por tuit analizado.
