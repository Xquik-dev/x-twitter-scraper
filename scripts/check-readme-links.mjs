import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const readmes = [
  "README.md",
  "README.es.md",
  "README.tr.md",
  "README.zh-CN.md",
  "README.ja.md",
  "README.ko.md",
  "README.de.md",
  "README.fr.md",
  "README.it.md",
];
const acceptedRestrictedStatuses = new Set([401, 403, 429]);

function externalLinks(source) {
  const markdown = [...source.matchAll(/\]\((https?:\/\/[^)]+)\)/g)].map(
    (match) => match[1],
  );
  const html = [...source.matchAll(/href="(https?:\/\/[^"]+)"/g)].map(
    (match) => match[1],
  );
  const images = [...source.matchAll(/<img[^>]+src="(https?:\/\/[^" ]+)"/g)].map(
    (match) => match[1],
  );
  return [...markdown, ...html, ...images].map((link) =>
    link.split("#", 1)[0],
  );
}

async function check(link) {
  try {
    const options = {
      method: "HEAD",
      redirect: "follow",
      headers: { "user-agent": "xquik-readme-link-check/1.0" },
      signal: AbortSignal.timeout(20_000),
    };
    let response = await fetch(link, options);
    if (response.status === 405) {
      response = await fetch(link, {
        ...options,
        method: "GET",
        headers: { ...options.headers, range: "bytes=0-0" },
        signal: AbortSignal.timeout(20_000),
      });
    }
    return {
      link,
      ok:
        response.ok ||
        acceptedRestrictedStatuses.has(response.status),
      status: response.status,
    };
  } catch (error) {
    return {
      link,
      ok: false,
      status: error instanceof Error ? error.message : String(error),
    };
  }
}

const sources = await Promise.all(
  readmes.map((file) => readFile(new URL(file, root), "utf8")),
);
const links = [...new Set(sources.flatMap(externalLinks))].sort();
const results = [];

for (let index = 0; index < links.length; index += 6) {
  results.push(...(await Promise.all(links.slice(index, index + 6).map(check))));
}

const failures = results.filter((result) => !result.ok);
assert.deepEqual(failures, []);

const restricted = results.filter((result) =>
  acceptedRestrictedStatuses.has(result.status),
);
process.stdout.write(
  [
    "README link check passed.",
    `Files: ${readmes.length}`,
    `Unique external links: ${links.length}`,
    `Bot-restricted responses accepted: ${restricted.length}`,
  ].join("\n") + "\n",
);
