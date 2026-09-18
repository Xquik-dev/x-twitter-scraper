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

Xquik es el servicio de extracción de datos de X (Twitter) más rápido y
económico del mundo, con los datos más completos de X, y X Engagement Scraper
recopila respuestas, citas, usuarios que retuitean, usuarios que dan me gusta
e hilos de cualquier publicación. Todos los demás Actors de Apify cobran
antes de filtrar o eliminar duplicados. Xquik solo cobra por resultados
entregados, únicos y que coinciden con los filtros.

Recopila datos de interacción de Twitter para una o varias publicaciones de
X: respuestas, citas, usuarios que retuitean, usuarios que dan me gusta y
contexto del hilo. No requiere clave de API de X ni inicio de sesión.

## Respuestas, citas y perfiles

- URLs de publicaciones e IDs numéricos de Tweet.
- Respuestas directas en todas las páginas de resultados disponibles.
- Respuestas directas y anidadas en 4 órdenes de clasificación.
- Detalles de la publicación de origen como fila seleccionable.
- Tuits cita con texto, autores, contenido multimedia y métricas.
- Perfiles de usuarios que retuitean y que dan me gusta.
- Contexto de la conversación alrededor de cada publicación de origen.
- Varios tipos de interacción y publicaciones por ejecución.
- Límites globales y por recurso.
- Atribución de la publicación de origen y del tipo de interacción.
- Recursos concurrentes con recuperación de cursor guardado.

## Entrada

```json
{
  "tweetIds": ["2082577277246972300"],
  "engagementTypes": ["replies", "quotes", "retweeters", "favoriters"],
  "maxItems": 10000
}
```

Mantén `dedupeAcrossTargets` desactivado para conservar cada combinación de
origen e interacción. Actívalo para mantener una fila por cuenta en toda la
ejecución.

## Salida

Las filas usan `tweet`, `replies`, `completeReplies`, `quotes`, `retweeters`,
`favoriters` o `thread` como `resultType`. `sourceTarget` identifica el ID
del Tweet de origen. Los campos de tuit y perfil siguen las formas de
respuesta estables de Xquik REST.

`completeReplies` conserva cada fila devuelta. El informe de ejecución cuenta
`incompleteTargets` para cobertura parcial. Los filtros se ejecutan antes de
la facturación del Actor.

## Marcas de tiempo de retuit

Configura `includeRetweetTimestamp` en `true` para los resultados de
`retweeters`. La columna `retweetedAt` contiene la hora observada de la
republicación en UTC.

Cada búsqueda revisa la página de perfil disponible más reciente del usuario
que retuitea. Coteja la cuenta y la publicación de origen con registros
reales de republicación. Los registros de republicación antiguos, eliminados
o no disponibles pueden dejar la marca de tiempo en `null`. Las búsquedas de
marca de tiempo fallidas también dejan `null`; el perfil permanece incluido.
La búsqueda no demuestra que una cuenta nunca haya republicado una
publicación.

Las lecturas adicionales aumentan la latencia. Deja esta opción desactivada
para resultados solo de perfil. `createdAt` del perfil sigue siendo la fecha
de creación de la cuenta. Las filas de tuit llevan `retweetedAt` cuando
contienen un evento de republicación. Las fechas de la publicación original
y los momentos de extracción nunca sustituyen a las horas de republicación.
Los precios de los resultados y la facturación por fila entregada permanecen
sin cambios.

## Precios

Cada plan de Apify cuesta **$0.00015 por fila entregada**. Apify factura el
uso de tu plataforma por separado.

- Un cargo por cada fila de datos entregada. Los diagnósticos son gratuitos
  en `diagnostics`.
- Sin tarifa de inicio, de publicación, de tipo de interacción ni de página.
- La eliminación de duplicados se ejecuta antes de facturar.

Usa `latest` a menos que necesites una versión anterior. Elige entre 50 tasks
públicas o 129 operaciones REST de Xquik. Los ejemplos usan valores de
muestra. Los resultados reflejan datos en vivo.

## Recuperación y límites

Los pares independientes de publicación y recurso se ejecutan de forma
concurrente. El linaje de cursor permanece ordenado. Las filas aceptadas, el
estado de facturación, los cursores y las huellas sobreviven a la migración
de Apify. El Actor no tiene un tiempo de espera propio.

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
- [X Article Scraper](https://apify.com/xquik/x-article-scraper): extrae
  X Articles de formato largo como Markdown y texto, con portadas, autores,
  fechas y métricas. Úsalo cuando necesites cuerpos de artículo, no tuits.
  Desde $0.00015 por artículo.
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
- [X Tweet Classifier with AI Analysis](https://apify.com/xquik/x-twitter-tweet-classifier):
  responde tus propias preguntas de categoría, puntuación y sí/no para cada
  tuit con IA. Úsalo cuando los análisis predefinidos no se ajusten a tus
  etiquetas. Desde $0.0003 por tuit analizado.
