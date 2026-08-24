import { readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const skillRoot = join(root, "skills", "x-twitter-scraper");
const excludedFiles = new Set([
  "BENCHMARK.md",
  "skill-card.md",
  "skillspector-report.md",
]);
const description =
  "Install the X (Twitter) Scraper API and X API Alternative Skill for searches, exports, monitors, webhooks, and supported account actions. Not affiliated with X Corp.";

async function listFiles(directory) {
  const files = [];
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries.sort((a, b) =>
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0,
  )) {
    const source = join(directory, entry.name);
    const path = relative(skillRoot, source).split(sep).join("/");

    if (entry.isDirectory()) {
      if (entry.name !== "evals") files.push(...(await listFiles(source)));
    } else if (entry.isFile() && !excludedFiles.has(entry.name)) {
      files.push({
        path: `skills/x-twitter-scraper/${path}`,
        type: "registry:file",
        target: `~/.agents/skills/x-twitter-scraper/${path}`,
      });
    }
  }

  return files;
}

function format(value) {
  return `${JSON.stringify(value, null, 2)}\n`;
}

async function output(name, value, check) {
  const file = join(root, name);
  const expected = format(value);

  if (!check) {
    await writeFile(file, expected);
    return true;
  }

  return readFile(file, "utf8").then(
    (current) => current === expected,
    () => false,
  );
}

const files = await listFiles(skillRoot);
const registry = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "xquik",
  homepage: "https://docs.xquik.com",
  items: [
    {
      name: "x-twitter-scraper",
      type: "registry:item",
      title: "X Twitter scraper Skill",
      description,
      files,
    },
  ],
};
const namespaceItem = {
  $schema: "https://ui.shadcn.com/schema/registry-item.json",
  name: "x-twitter-scraper",
  type: "registry:item",
  title: "X Twitter scraper Skill",
  description,
  registryDependencies: ["Xquik-dev/x-twitter-scraper/x-twitter-scraper"],
};
const check = process.argv.includes("--check");
const results = await Promise.all([
  output("registry.json", registry, check),
  output("x-twitter-scraper.json", namespaceItem, check),
]);

if (results.includes(false)) {
  process.stderr.write("Shadcn registry files are stale. Run bun run registry:build.\n");
  process.exitCode = 1;
} else {
  process.stdout.write(`Shadcn registry files ${check ? "match" : "updated"}.\n`);
}
