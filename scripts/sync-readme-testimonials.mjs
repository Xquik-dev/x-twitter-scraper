import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const record = JSON.parse(
  await readFile(
    new URL("docs/research/apify-reviews/reviews-2026-08-22.json", root),
    "utf8",
  ),
);
const reviews = record.reviews.filter(
  (review) => review.status === "eligible-testimonial",
);
assert.equal(reviews.length, 18);

const framerBlock = `<table>
  <tr>
    <td align="center">
      <a href="https://youtu.be/4UOSpoOoC3Y?t=367">
        <img src="https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg" alt="Framer connects Xquik MCP to coding agents" width="720">
      </a>
      <br>
      <strong>Framer demo</strong>
      <br>
      <sub>Watch <a href="https://youtu.be/4UOSpoOoC3Y?t=367">Connect Framer to Claude Code, Codex, Cursor, and more</a> at 6:07 for the Xquik MCP connection.</sub>
    </td>
  </tr>
</table>`;
const legalNotice = `> Xquik is an independent third-party service. Not affiliated with X Corp.
> "Twitter" and "X" are trademarks of X Corp.`;
const beginMarker = "<!-- BEGIN APIFY TESTIMONIALS -->";
const endMarker = "<!-- END APIFY TESTIMONIALS -->";
const academyUrl =
  "https://docs.apify.com/academy/actor-marketing-playbook/promote-your-actor/social-media";
const languages = [
  {
    file: "README.md",
    before: "## Bulk extraction and estimates",
    heading: "## What Apify users say",
    intro: [
      "Apify users wrote these reviews. The quotes are exact and unedited. Each review",
      "reports one user's experience. It does not prove the same result for everyone.",
    ],
    academy: "Apify tells Actor developers to share user testimonials",
    headers: ["Actor", "Exact review", "Reviewer and review date", "Rating"],
    source: "Source",
    audit: "Read the complete [Actor review audit](docs/research/apify-reviews/README.md).",
  },
  {
    file: "README.es.md",
    before: "## Filtros y casos de uso",
    heading: "## Lo que dicen los usuarios de Apify",
    intro: [
      "Estos comentarios son de usuarios de Apify. Las citas conservan su inglés original.",
      "No se añadieron traducciones, así que el texto no cambia. Cada comentario",
      "describe la experiencia de una persona. No garantiza el mismo resultado para todos.",
    ],
    academy: "Apify indica que los desarrolladores pueden compartir testimonios de usuarios",
    headers: ["Actor", "Comentario original", "Autor y fecha", "Valoración"],
    source: "Fuente",
    audit: "Consulta la [auditoría completa de comentarios](docs/research/apify-reviews/README.md).",
  },
  {
    file: "README.tr.md",
    before: "## Filtreler ve kullanım alanları",
    heading: "## Apify kullanıcıları ne diyor?",
    intro: [
      "Bu yorumları Apify kullanıcıları yazdı. Alıntılar özgün İngilizce metni korur.",
      "Metin değişmesin diye çeviri eklenmedi. Her yorum tek bir kullanıcının deneyimidir.",
      "Herkes için aynı sonucu garanti etmez.",
    ],
    academy: "Apify, Actor geliştiricilerinin kullanıcı yorumlarını paylaşabileceğini söylüyor",
    headers: ["Actor", "Özgün yorum", "Yorumcu ve tarih", "Puan"],
    source: "Kaynak",
    audit: "Tüm ayrıntılar için [Actor yorum denetimini](docs/research/apify-reviews/README.md) oku.",
  },
  {
    file: "README.zh-CN.md",
    before: "## 筛选条件和使用场景",
    heading: "## Apify 用户怎么说",
    intro: [
      "这些评论来自 Apify 用户。引文保留英文原文，未添加翻译。",
      "每条评论只代表一位用户的体验，不保证所有人都能得到相同结果。",
    ],
    academy: "Apify 说明 Actor 开发者可以分享用户评价",
    headers: ["Actor", "英文原文", "评论者和日期", "评分"],
    source: "来源",
    audit: "查看完整的 [Actor 评论审计](docs/research/apify-reviews/README.md)。",
  },
  {
    file: "README.ja.md",
    before: "## フィルターと用途",
    heading: "## Apify ユーザーの声",
    intro: [
      "以下は Apify ユーザーが投稿したレビューです。引用は英語の原文を変更していません。",
      "文面を守るため、翻訳は追加していません。各レビューは一人の体験です。",
      "すべての利用者に同じ結果を保証するものではありません。",
    ],
    academy: "Apify は Actor 開発者によるユーザーレビューの共有を案内しています",
    headers: ["Actor", "英語の原文", "投稿者と投稿日", "評価"],
    source: "出典",
    audit: "詳しくは [Actor レビュー監査](docs/research/apify-reviews/README.md) を確認してください。",
  },
  {
    file: "README.ko.md",
    before: "## 필터와 사용 사례",
    heading: "## Apify 사용자 후기",
    intro: [
      "다음 후기는 Apify 사용자가 작성했습니다. 인용문은 영어 원문을 그대로 유지합니다.",
      "문구를 바꾸지 않기 위해 번역을 넣지 않았습니다. 각 후기는 한 사용자의 경험입니다.",
      "모든 사용자에게 같은 결과를 보장하지 않습니다.",
    ],
    academy: "Apify는 Actor 개발자가 사용자 후기를 공유할 수 있다고 안내합니다",
    headers: ["Actor", "영어 원문", "작성자와 날짜", "평점"],
    source: "출처",
    audit: "자세한 내용은 [Actor 후기 감사](docs/research/apify-reviews/README.md)를 확인하세요.",
  },
  {
    file: "README.de.md",
    before: "## Filter und Anwendungsfälle",
    heading: "## Stimmen von Apify-Nutzern",
    intro: [
      "Diese Bewertungen stammen von Apify-Nutzern. Die englischen Zitate bleiben unverändert.",
      "Es wurde keine Übersetzung ergänzt. Jede Bewertung beschreibt eine einzelne Erfahrung.",
      "Sie garantiert nicht dasselbe Ergebnis für alle.",
    ],
    academy: "Apify erlaubt Actor-Entwicklern, Nutzerstimmen zu teilen",
    headers: ["Actor", "Englisches Original", "Verfasser und Datum", "Bewertung"],
    source: "Quelle",
    audit: "Lies die vollständige [Actor-Bewertungsprüfung](docs/research/apify-reviews/README.md).",
  },
  {
    file: "README.fr.md",
    before: "## Filtres et cas d'usage",
    heading: "## Avis des utilisateurs d'Apify",
    intro: [
      "Ces avis ont été écrits par des utilisateurs d'Apify. Les citations anglaises restent intactes.",
      "Aucune traduction n'a été ajoutée. Chaque avis décrit l'expérience d'une seule personne.",
      "Il ne garantit pas le même résultat pour tous.",
    ],
    academy: "Apify autorise les développeurs d'Actors à partager des témoignages d'utilisateurs",
    headers: ["Actor", "Texte anglais original", "Auteur et date", "Note"],
    source: "Source",
    audit: "Consultez l'[audit complet des avis d'Actors](docs/research/apify-reviews/README.md).",
  },
  {
    file: "README.it.md",
    before: "## Filtri e casi d'uso",
    heading: "## Cosa dicono gli utenti di Apify",
    intro: [
      "Queste recensioni sono state scritte dagli utenti di Apify. Le citazioni inglesi restano invariate.",
      "Non è stata aggiunta una traduzione. Ogni recensione descrive una singola esperienza.",
      "Non garantisce lo stesso risultato per tutti.",
    ],
    academy: "Apify consente agli sviluppatori di Actor di condividere testimonianze degli utenti",
    headers: ["Actor", "Testo inglese originale", "Autore e data", "Valutazione"],
    source: "Fonte",
    audit: "Consulta l'[audit completo delle recensioni degli Actor](docs/research/apify-reviews/README.md).",
  },
];

function escapeCell(value) {
  return value.replaceAll("|", "\\|");
}

function testimonialBlock(language) {
  const rows = reviews.map((review) => {
    const date = review.reviewedAt.slice(0, 10);
    return `| ${review.actor} | "${escapeCell(review.text)}" | ${review.reviewer}, ${date}. [${language.source}](${review.sourceUrl}) | ${review.rating}/5 |`;
  });
  return [
    beginMarker,
    "",
    language.heading,
    "",
    ...language.intro,
    `[${language.academy}](${academyUrl}).`,
    "",
    `| ${language.headers.join(" | ")} |`,
    "| --- | --- | --- | ---: |",
    ...rows,
    "",
    language.audit,
    "",
    endMarker,
  ].join("\n");
}

function withFramer(source) {
  if (source.includes(framerBlock)) return source;
  assert.ok(source.includes(legalNotice));
  return source.replace(legalNotice, `${legalNotice}\n\n${framerBlock}`);
}

function withTestimonials(source, language) {
  const block = testimonialBlock(language);
  const begin = source.indexOf(beginMarker);
  if (begin >= 0) {
    const end = source.indexOf(endMarker, begin);
    assert.ok(end >= 0);
    return `${source.slice(0, begin)}${block}${source.slice(end + endMarker.length)}`;
  }
  assert.ok(source.includes(language.before));
  return source.replace(language.before, `${block}\n\n${language.before}`);
}

const output = new Map();
for (const language of languages) {
  const source = await readFile(new URL(language.file, root), "utf8");
  output.set(language.file, withTestimonials(withFramer(source), language));
}
const englishHash = createHash("sha256")
  .update(output.get("README.md"))
  .digest("hex");
for (const language of languages.slice(1)) {
  const source = output.get(language.file).replace(
    /^<!-- Translation source SHA-256: [a-f0-9]{64}\. -->/u,
    `<!-- Translation source SHA-256: ${englishHash}. -->`,
  );
  output.set(language.file, source);
}
const reviewRegister = (
  await readFile(new URL("docs/translation-reviews.md", root), "utf8")
).replace(
  /^The source hash is `[a-f0-9]{64}`\./mu,
  `The source hash is \`${englishHash}\`.`,
);
output.set("docs/translation-reviews.md", reviewRegister);
await Promise.all(
  [...output].map(([file, source]) => writeFile(new URL(file, root), source)),
);
process.stdout.write(`Synced ${reviews.length} testimonials across 9 READMEs.\n`);
