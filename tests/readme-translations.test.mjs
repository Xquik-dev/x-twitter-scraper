// SPDX-FileCopyrightText: 2026 Xquik Contributors
// SPDX-License-Identifier: MIT

import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { access, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const legalNotice =
  "Xquik is an independent third-party service. Not affiliated with X Corp.";
const languages = [
  {
    file: "README.md",
    label: "English",
    accountText: [
      "You do not need an official X developer account.",
      "You do not need to connect or use an X account",
    ],
  },
  {
    file: "README.es.md",
    label: "Español",
    accountText: [
      "No necesitas una cuenta oficial de desarrollador de X.",
      "conectar ni usar una cuenta de X",
    ],
  },
  {
    file: "README.tr.md",
    label: "Türkçe",
    accountText: [
      "Resmî bir X geliştirici hesabına ihtiyacın yok.",
      "X hesabı bağlaman veya kullanman da gerekmez.",
    ],
  },
  {
    file: "README.zh-CN.md",
    label: "简体中文",
    accountText: ["无需官方 X 开发者账号。", "无需连接或使用 X 账号。"],
  },
  {
    file: "README.ja.md",
    label: "日本語",
    accountText: [
      "公式 X 開発者アカウントは不要です。",
      "使用する必要もありません。",
    ],
  },
  {
    file: "README.ko.md",
    label: "한국어",
    accountText: [
      "공식 X 개발자 계정은 필요하지 않습니다.",
      "사용할 필요도 없습니다.",
    ],
  },
  {
    file: "README.de.md",
    label: "Deutsch",
    accountText: [
      "Du brauchst kein offizielles X-Entwicklerkonto.",
      "kein X-Konto verbinden oder verwenden.",
    ],
  },
  {
    file: "README.fr.md",
    label: "Français",
    accountText: [
      "Vous n'avez pas besoin d'un compte développeur X officiel.",
      "besoin de connecter ni d'utiliser un compte X",
    ],
  },
  {
    file: "README.it.md",
    label: "Italiano",
    accountText: [
      "Non ti serve un account sviluppatore X ufficiale.",
      "non devi collegare o usare un account X.",
    ],
  },
];

const technicalCoverage = [
  "https://xquik.com/api/v1/x/tweets/search",
  "XQUIK_API_KEY",
  "https://xquik.com/mcp",
  "extractions/estimate",
  "docs/research/cost-study/README.md",
  "docs/research/apify-reviews/README.md",
  "docs/research/seo/README.md",
  "skills/x-twitter-scraper/references/twitter-api-alternative-faq.md",
  "npx skills@1.5.3 add Xquik-dev/x-twitter-scraper",
  "codex plugin marketplace add Xquik-dev/x-twitter-scraper",
  "codex plugin add x-twitter-scraper@x-twitter-scraper",
  "REST",
  "MCP",
  "SDK",
  "CLI",
  "Apify",
  "webhook",
  "128",
  "120",
  "119",
  "v2.6.7",
  "v2.6.0",
  "2026-08-22",
  "$0.015",
  'resultType !== "diagnostic"',
];
const sharedLinks = [
  "https://docs.xquik.com",
  "https://docs.xquik.com/api-reference/overview",
  "https://docs.xquik.com/guides/billing",
  "https://docs.xquik.com/guides/extraction-workflow",
  "https://docs.xquik.com/mcp/overview",
  "skills/x-twitter-scraper/references/security.md",
  ".github/CONTRIBUTING.md",
  ".github/SECURITY.md",
  "docs/readme-translations.md",
];
const disallowedPunctuation = new RegExp(
  `[${[0x2014, 0x2013, 0x201c, 0x201d]
    .map((codePoint) => String.fromCodePoint(codePoint))
    .join("")}]`,
  "u",
);

function expectedSourceComment(sourceHash) {
  return `<!-- Translation source SHA-256: ${sourceHash}. -->`;
}

function codeBlocks(source) {
  return [...source.matchAll(/```[^\n]*\n[\s\S]*?\n```/g)].map(
    (match) => match[0],
  );
}

test("keeps all 9 root READMEs linked and current", async () => {
  assert.equal(languages.length, 9);
  const english = await readFile(join(root, "README.md"), "utf8");
  const sourceHash = createHash("sha256").update(english).digest("hex");
  const englishExamples = codeBlocks(english).sort();
  const englishHeadingCount = (english.match(/^## /gmu) ?? []).length;

  assert.equal(englishExamples.length, 16);
  assert.equal(englishHeadingCount, 19);

  for (const language of languages) {
    const source = await readFile(join(root, language.file), "utf8");
    const normalized = source.replace(/\s+/g, " ");

    assert.ok(source.includes(`<strong>${language.label}</strong>`));
    assert.ok(source.includes(legalNotice), `${language.file}: legal notice`);
    assert.match(source, /^# .*X.*Twitter.*API/mu, `${language.file}: title`);

    for (const text of language.accountText) {
      assert.ok(normalized.includes(text), `${language.file}: ${text}`);
    }
    for (const token of technicalCoverage) {
      assert.ok(
        source.toLocaleLowerCase("en").includes(token.toLocaleLowerCase("en")),
        `${language.file}: ${token}`,
      );
    }
    for (const link of sharedLinks) {
      assert.ok(source.includes(link), `${language.file}: ${link}`);
    }
    for (const target of languages) {
      if (target.file === language.file) continue;
      assert.ok(
        source.includes(`href="${target.file}"`),
        `${language.file}: ${target.label}`,
      );
    }

    assert.deepEqual(codeBlocks(source).sort(), englishExamples);
    assert.equal((source.match(/^## /gmu) ?? []).length, englishHeadingCount);
    assert.doesNotMatch(source, disallowedPunctuation);
    assert.ok(source.includes("https://youtu.be/4UOSpoOoC3Y?t=367"));
    assert.ok(
      source.includes(
        "https://img.youtube.com/vi/4UOSpoOoC3Y/maxresdefault.jpg",
      ),
    );
    const disallowed = new RegExp(
      `\\b(?:${["pub", "lic"].join("")}|${["app", "roved"].join("")})\\b`,
      "iu",
    );
    assert.doesNotMatch(source, disallowed);

    if (language.file !== "README.md") {
      assert.ok(source.startsWith(expectedSourceComment(sourceHash)));
    }
  }
});

test("resolves every local translation link", async () => {
  for (const { file } of languages) {
    const source = await readFile(join(root, file), "utf8");
    const links = [...source.matchAll(/\]\(([^)]+)\)/g)].map(([, link]) => link);

    for (const link of links) {
      if (/^(?:https?:|mailto:|#)/u.test(link)) continue;
      const path = link.split("#", 1)[0];
      await assert.doesNotReject(
        access(join(root, dirname(file), path)),
        `${file}: broken local link ${link}`,
      );
    }
  }
});

test("keeps fluent reviews explicit", async () => {
  const register = await readFile(
    join(root, "docs", "translation-reviews.md"),
    "utf8",
  );
  const english = await readFile(join(root, "README.md"), "utf8");
  const sourceHash = createHash("sha256").update(english).digest("hex");

  assert.ok(register.includes(`The source hash is \`${sourceHash}\`.`));
  for (const { file } of languages) {
    assert.ok(register.includes("| `" + file + "` | Pending |"));
  }
  assert.doesNotMatch(register, /\| Verified \| Unassigned \|/u);
});
