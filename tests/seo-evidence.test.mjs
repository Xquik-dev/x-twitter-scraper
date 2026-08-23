import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../docs/research/seo/", import.meta.url);

async function readJson(file) {
  return JSON.parse(await readFile(new URL(file, root), "utf8"));
}

test("maps every supplied question to an answer or a reason", async () => {
  const [map, faq] = await Promise.all([
    readJson("question-map-2026-08-22.json"),
    readFile(
      new URL(
        "../../../skills/x-twitter-scraper/references/twitter-api-alternative-faq.md",
        root,
      ),
      "utf8",
    ),
  ]);
  const anchors = new Set(
    [...faq.matchAll(/^## (.+)$/gmu)].map((match) =>
      match[1]
        .toLocaleLowerCase("en-US")
        .replace(/[^a-z0-9 -]/gu, "")
        .trim()
        .replace(/ +/gu, "-"),
    ),
  );

  assert.equal(map.reviewedOn, "2026-08-22");
  assert.deepEqual(
    map.sources.map((source) => source.sha256),
    [
      "46324ef8f54b6847567cb1d159643072c6a5a6a591b5e8577688b65fdda4e262",
      "c56da0f4cc9e2186174de1052368f829fa76ca633c2bae06306bd693d27b7b35",
    ],
  );
  assert.deepEqual(map.counts, { total: 149, answered: 112, skipped: 37 });
  assert.equal(map.questions.length, map.counts.total);
  assert.equal(new Set(map.questions.map((row) => `${row.sourceFile}:${row.fileRow}`)).size, 149);
  for (const row of map.questions) {
    assert.match(row.promptFingerprint, /^[a-f0-9]{64}$/u);
    assert.equal(Boolean(row.destination), row.coverageStatus === "answered");
    assert.equal(Boolean(row.skipReason), row.coverageStatus === "skipped");
    if (row.destination) {
      assert.ok(anchors.has(row.destination.split("#")[1]));
    }
  }
});

test("records every keyword without inventing locale evidence", async () => {
  const map = await readJson("keyword-map-2026-08-22.json");

  assert.equal(map.reviewedOn, "2026-08-22");
  assert.equal(
    map.source.sha256,
    "01a8741c8fbccce376ebcca194a7ea808291d0febd796e46f178dead1092c5e4",
  );
  assert.equal(map.source.localeColumnPresent, false);
  assert.deepEqual(
    {
      totalRows: map.counts.totalRows,
      normalizedUnique: map.counts.normalizedUnique,
      duplicateGroups: map.counts.duplicateGroups,
      targeted: map.counts.targeted,
    },
    { totalRows: 3484, normalizedUnique: 3470, duplicateGroups: 14, targeted: 0 },
  );
  assert.equal(map.keywords.length, map.counts.totalRows);
  for (const row of map.keywords) {
    assert.ok(row.searchVolume > 0);
    assert.equal(row.locale, null);
    assert.match(row.phraseFingerprint, /^[a-f0-9]{64}$/u);
    if (row.topic) {
      assert.equal(row.coverageStatus, "not-targeted-missing-locale");
      assert.ok(row.destination);
    }
  }
});

test("keeps blocked repository wording out of both maps", async () => {
  const sources = await Promise.all([
    readFile(new URL("question-map-2026-08-22.json", root), "utf8"),
    readFile(new URL("keyword-map-2026-08-22.json", root), "utf8"),
  ]);
  const disallowed = new RegExp(
    `\\b(?:${["pub", "lic"].join("")}|${["app", "roved"].join("")})\\b`,
    "iu",
  );

  for (const source of sources) assert.doesNotMatch(source, disallowed);
});
