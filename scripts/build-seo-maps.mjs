import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import { basename } from "node:path";

const reviewedOn = "2026-08-22";
const outputRoot = new URL("../docs/research/seo/", import.meta.url);
const inputNames = [
  "ai_models-x_api_alternative-en-us-22-08-2026.csv",
  "ai_models-twitter_api_alternative-en-us-22-08-2026.csv",
  "keywords-unified-deduplicated.csv",
];
const inputPaths = process.argv.slice(2);
assert.deepEqual(
  inputPaths.map((path) => basename(path)),
  inputNames,
  `Usage: node scripts/build-seo-maps.mjs ${inputNames.join(" ")}`,
);

const destinationByTopic = {
  "account-and-credential-setup": "#account-and-credential-setup",
  "custom-data-collection": "#custom-data-collection",
  "dashboards-exports-and-datasets": "#dashboards-exports-and-datasets",
  "enterprise-and-volume": "#enterprise-and-volume",
  "features-limits-and-security": "#features-limits-and-security",
  "historical-data-search-and-filters": "#historical-data-search-and-filters",
  "integration-and-migration": "#integration-and-migration",
  "legal-and-acceptable-use": "#legal-and-acceptable-use",
  "monitoring-feeds-and-alerts": "#monitoring-feeds-and-alerts",
  "multi-network-requests": "#multi-network-requests",
  "performance-and-uptime": "#performance-and-uptime",
  "pricing-and-trials": "#pricing-and-trials",
  "profiles-engagement-and-analytics": "#profiles-engagement-and-analytics",
  "provider-models": "#provider-models",
  "publishing-and-account-actions": "#publishing-and-account-actions",
  "reviews-and-source-access": "#reviews-and-source-access",
  selection: "#choose-an-option",
  "sentiment-influencers-and-moderation":
    "#sentiment-influencers-and-moderation",
  "support-and-documentation": "#support-and-documentation",
};
const faq = "skills/x-twitter-scraper/references/twitter-api-alternative-faq.md";
const xTopics = [
  "selection",
  "provider-models",
  "pricing-and-trials",
  "enterprise-and-volume",
  "pricing-and-trials",
  "support-and-documentation",
  "support-and-documentation",
  "reviews-and-source-access",
  "pricing-and-trials",
  "reviews-and-source-access",
  "performance-and-uptime",
  "features-limits-and-security",
  "features-limits-and-security",
  "integration-and-migration",
  "features-limits-and-security",
  "selection",
  "selection",
  "support-and-documentation",
  "legal-and-acceptable-use",
  "support-and-documentation",
  "monitoring-feeds-and-alerts",
  "enterprise-and-volume",
  "performance-and-uptime",
  "profiles-engagement-and-analytics",
  "enterprise-and-volume",
  "features-limits-and-security",
  null,
  "multi-network-requests",
  "integration-and-migration",
  "performance-and-uptime",
  "integration-and-migration",
  "provider-models",
  "account-and-credential-setup",
  "integration-and-migration",
  "reviews-and-source-access",
  "pricing-and-trials",
  "account-and-credential-setup",
  "pricing-and-trials",
  ...Array.from({ length: 36 }, () => null),
];
const twitterTopics = [
  "selection",
  "provider-models",
  "pricing-and-trials",
  "pricing-and-trials",
  "pricing-and-trials",
  "provider-models",
  "monitoring-feeds-and-alerts",
  "provider-models",
  "selection",
  "historical-data-search-and-filters",
  "sentiment-influencers-and-moderation",
  "profiles-engagement-and-analytics",
  "profiles-engagement-and-analytics",
  "features-limits-and-security",
  "monitoring-feeds-and-alerts",
  "selection",
  "provider-models",
  "dashboards-exports-and-datasets",
  "profiles-engagement-and-analytics",
  "monitoring-feeds-and-alerts",
  "support-and-documentation",
  "enterprise-and-volume",
  "sentiment-influencers-and-moderation",
  "monitoring-feeds-and-alerts",
  "profiles-engagement-and-analytics",
  "sentiment-influencers-and-moderation",
  "features-limits-and-security",
  "features-limits-and-security",
  "performance-and-uptime",
  "support-and-documentation",
  "reviews-and-source-access",
  "support-and-documentation",
  "multi-network-requests",
  "monitoring-feeds-and-alerts",
  "integration-and-migration",
  "integration-and-migration",
  "pricing-and-trials",
  "profiles-engagement-and-analytics",
  "integration-and-migration",
  "monitoring-feeds-and-alerts",
  "monitoring-feeds-and-alerts",
  "monitoring-feeds-and-alerts",
  "profiles-engagement-and-analytics",
  "pricing-and-trials",
  "selection",
  "publishing-and-account-actions",
  "multi-network-requests",
  "pricing-and-trials",
  "historical-data-search-and-filters",
  "historical-data-search-and-filters",
  "sentiment-influencers-and-moderation",
  "dashboards-exports-and-datasets",
  "multi-network-requests",
  "reviews-and-source-access",
  "sentiment-influencers-and-moderation",
  "integration-and-migration",
  "publishing-and-account-actions",
  "monitoring-feeds-and-alerts",
  "profiles-engagement-and-analytics",
  "dashboards-exports-and-datasets",
  "historical-data-search-and-filters",
  "multi-network-requests",
  "custom-data-collection",
  "sentiment-influencers-and-moderation",
  "legal-and-acceptable-use",
  "profiles-engagement-and-analytics",
  "account-and-credential-setup",
  "dashboards-exports-and-datasets",
  "dashboards-exports-and-datasets",
  "multi-network-requests",
  "monitoring-feeds-and-alerts",
  "reviews-and-source-access",
  "support-and-documentation",
  "pricing-and-trials",
  "support-and-documentation",
];

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

function parseCsv(source) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  for (let index = 0; index < source.length; index += 1) {
    const character = source[index];
    if (quoted && character === '"' && source[index + 1] === '"') {
      field += '"';
      index += 1;
    } else if (character === '"') {
      quoted = !quoted;
    } else if (character === "," && !quoted) {
      row.push(field);
      field = "";
    } else if ((character === "\n" || character === "\r") && !quoted) {
      if (character === "\r" && source[index + 1] === "\n") index += 1;
      row.push(field);
      if (row.some(Boolean)) rows.push(row);
      row = [];
      field = "";
    } else {
      field += character;
    }
  }
  if (field || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  const headers = rows.shift().map((header) => header.replace(/^\uFEFF/u, ""));
  return rows.map((values) =>
    Object.fromEntries(headers.map((header, index) => [header, values[index]])),
  );
}

function normalize(value) {
  return value.normalize("NFKC").toLocaleLowerCase("en-US").trim().replace(/\s+/gu, " ");
}

function normalizeKeyword(value) {
  return normalize(value)
    .normalize("NFKD")
    .replace(/[’']/gu, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

function questionSkipReason(sourceNumber, xFile) {
  if (!xFile) return null;
  if (sourceNumber >= 39) {
    return "The prompt uses xAPI as a learning-data standard, not X Corp.";
  }
  if (sourceNumber === 27) {
    return "The prompt asks about device management, not X data.";
  }
  return null;
}

function questionRecord(row, index, sourceFile, topic, xFile) {
  const sourceNumber = Number(row.No);
  const skipReason = questionSkipReason(sourceNumber, xFile);
  assert.equal(Boolean(topic), !skipReason);
  return {
    sourceFile,
    fileRow: index + 2,
    sourceNumber,
    locale: "en-US",
    sourcePlatform: row.Platform,
    sourceIntent: [row["Main Intent"], row["Secondary Intent"]].filter(
      (value) => value && value !== "-",
    ),
    promptFingerprint: sha256(normalize(row.Prompt)),
    topic,
    destination: topic ? `${faq}${destinationByTopic[topic]}` : null,
    coverageStatus: topic ? "answered" : "skipped",
    skipReason,
  };
}

function keywordTopic(phrase) {
  const excluded = /\b(?:buy|sale|fake|generator|font|banner|character|shadowban|verification|monetization|followers? free|free followers?)\b/iu;
  if (excluded.test(phrase)) return null;
  const hasX = /\b(?:twitter|tweet|tweets|x)\b/iu.test(phrase);
  if (!hasX) return null;
  if (/\b(?:api|sdk|developer platform|developer account|mcp)\b/iu.test(phrase)) {
    return "api-and-agent-access";
  }
  if (/\b(?:scrape|scraper|scraping)\b/iu.test(phrase)) return "scraping";
  if (/\b(?:search|lookup|find tweets?|advanced search)\b/iu.test(phrase)) return "search";
  if (/\b(?:monitor|monitoring|webhook|mentions?|hashtag|trends?|alerts?)\b/iu.test(phrase)) {
    return "monitoring";
  }
  if (/\b(?:followers?|following)\b/iu.test(phrase) && /\b(?:api|data|export|list|search|track|history|count)\b/iu.test(phrase)) {
    return "relationships";
  }
  if (/\b(?:archive|historical|deleted tweets?|export|dataset|twitter data|tweet data)\b/iu.test(phrase)) {
    return "datasets";
  }
  if (/\b(?:analytics|sentiment|metrics|engagement|profile data|user data)\b/iu.test(phrase)) {
    return "analytics";
  }
  if (/\b(?:replies|reply|quotes?|reposts?|retweets?|likes?|media)\b/iu.test(phrase) && /\b(?:api|data|download|scrape|search|track)\b/iu.test(phrase)) {
    return "tweet-objects";
  }
  if (/\b(?:auto post|automate tweets|schedule tweets|post api|dm api|publish)\b/iu.test(phrase)) {
    return "account-actions";
  }
  return null;
}

const keywordDestinations = {
  "account-actions": "skills/x-twitter-scraper/references/api-endpoints-x-write.md",
  analytics: "skills/x-twitter-scraper/references/twitter-scraper-api-guide.md",
  "api-and-agent-access": "skills/x-twitter-scraper/references/compare-twitter-apis.md",
  datasets: "skills/x-twitter-scraper/references/scrape-export-twitter-data.md",
  monitoring: "skills/x-twitter-scraper/references/track-twitter-keywords-mentions.md",
  relationships: "skills/x-twitter-scraper/references/export-twitter-followers.md",
  scraping: "skills/x-twitter-scraper/references/twitter-scraper-api-guide.md",
  search: "skills/x-twitter-scraper/references/twitter-scraper-api-guide.md",
  "tweet-objects": "skills/x-twitter-scraper/references/twitter-scraper-api-guide.md",
};

function inferIntent(phrase) {
  if (/\b(?:price|pricing|cost|api key|download|export|install)\b/iu.test(phrase)) {
    return "commercial-or-transactional";
  }
  if (/\b(?:docs|documentation|github|login|site)\b/iu.test(phrase)) {
    return "navigational";
  }
  return "informational";
}

function keywordCoverage(topic, hidesPhrase) {
  if (topic) {
    return {
      coverageStatus: "not-targeted-missing-locale",
      reason:
        "The CSV records no locale. Do not target this phrase until a locale-specific source confirms the volume.",
    };
  }
  if (hidesPhrase) {
    return {
      coverageStatus: "excluded-repository-wording",
      reason:
        "The repository wording rule excludes this source phrase. Use its row and fingerprint for traceability.",
    };
  }
  return {
    coverageStatus: "excluded-irrelevant",
    reason: "The phrase does not match a documented Xquik task.",
  };
}

const [xSource, twitterSource, keywordSource] = await Promise.all(
  inputPaths.map((path) => readFile(path, "utf8")),
);
const xRows = parseCsv(xSource);
const twitterRows = parseCsv(twitterSource);
const keywordRows = parseCsv(keywordSource);
assert.equal(xRows.length, 74);
assert.equal(twitterRows.length, 75);
assert.equal(keywordRows.length, 3484);
assert.equal(xTopics.length, xRows.length);
assert.equal(twitterTopics.length, twitterRows.length);

const questions = [
  ...xRows.map((row, index) =>
    questionRecord(row, index, inputNames[0], xTopics[index], true),
  ),
  ...twitterRows.map((row, index) =>
    questionRecord(row, index, inputNames[1], twitterTopics[index], false),
  ),
];
const disallowed = new RegExp(
  `\\b(?:${["pub", "lic"].join("")}|${["app", "roved"].join("")})\\b`,
  "iu",
);
const canonicalRows = new Map();
const keywords = keywordRows.map((row, index) => {
  const sourceRow = index + 2;
  const phrase = normalize(row.keyword);
  const normalizedKey = normalizeKeyword(phrase);
  const canonicalSourceRow = canonicalRows.get(normalizedKey) ?? sourceRow;
  canonicalRows.set(normalizedKey, canonicalSourceRow);
  const topic = keywordTopic(phrase);
  const hidesPhrase =
    disallowed.test(phrase) || phrase.includes(["pub", "lic"].join(""));
  const coverage = keywordCoverage(topic, hidesPhrase);
  return {
    sourceFile: inputNames[2],
    sourceRow,
    phrase: hidesPhrase ? null : phrase,
    phraseFingerprint: sha256(phrase),
    normalizedKey: hidesPhrase ? null : normalizedKey,
    duplicateOfRow: canonicalSourceRow === sourceRow ? null : canonicalSourceRow,
    searchVolume: Number(row.search_volume),
    locale: null,
    intent: topic ? inferIntent(phrase) : null,
    topic,
    destination: topic ? keywordDestinations[topic] : null,
    ...coverage,
  };
});

for (const keyword of keywords) assert.ok(keyword.searchVolume > 0);
const duplicateGroups = new Set(
  keywords.filter((row) => row.duplicateOfRow).map((row) => row.duplicateOfRow),
).size;
const questionMap = {
  reviewedOn,
  method: "Each source prompt is represented by its file row and SHA-256 fingerprint. Relevant prompts map to one verified guide section.",
  sources: inputNames.slice(0, 2).map((file, index) => ({
    file,
    sha256: sha256(index === 0 ? xSource : twitterSource),
    rows: index === 0 ? xRows.length : twitterRows.length,
    locale: "en-US",
  })),
  counts: {
    total: questions.length,
    answered: questions.filter((row) => row.coverageStatus === "answered").length,
    skipped: questions.filter((row) => row.coverageStatus === "skipped").length,
  },
  questions,
};
const keywordMap = {
  reviewedOn,
  method: "Normalization uses NFKD, lower case, apostrophe removal, non-letter and non-number folding, and whitespace folding.",
  source: {
    file: inputNames[2],
    sha256: sha256(keywordSource),
    rows: keywordRows.length,
    columns: ["keyword", "search_volume"],
    localeColumnPresent: false,
  },
  counts: {
    totalRows: keywords.length,
    normalizedUnique: canonicalRows.size,
    duplicateGroups,
    relevant: keywords.filter((row) => row.topic).length,
    targeted: 0,
  },
  localeGate: "Open. The input has no locale field. No phrase from this CSV is used as locale-specific targeting evidence.",
  keywords,
};

await Promise.all([
  writeFile(
    new URL("question-map-2026-08-22.json", outputRoot),
    `${JSON.stringify(questionMap, null, 2)}\n`,
  ),
  writeFile(
    new URL("keyword-map-2026-08-22.json", outputRoot),
    `${JSON.stringify(keywordMap, null, 2)}\n`,
  ),
]);
process.stdout.write(
  `Wrote ${questions.length} question rows and ${keywords.length} keyword rows.\n`,
);
