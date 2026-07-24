// SPDX-FileCopyrightText: 2026 Xquik Contributors
// SPDX-License-Identifier: MIT

import { readdirSync } from "node:fs";
import { join } from "node:path";

import { contentChecks } from "./content-policy.mjs";
import {
  expected,
  asArray,
  readJson,
  readText,
  root,
  taskGuideNames,
  taskGuidePaths,
} from "./context.mjs";
import { collectFrontmatterDrifts } from "./frontmatter.mjs";
import {
  skillFrontmatterExpectations,
  taskGuideFrontmatterExpectations,
  versionSurfaces,
} from "./policy.mjs";

function collectVersionDrifts() {
  const drifts = [];
  for (const surface of versionSurfaces) {
    const raw = readText(surface.path);
    for (const version of asArray(surface.get(raw))) {
      if (version !== expected) {
        drifts.push(
          `  ${surface.path}: ${version ?? "<missing>"} (expected ${expected})`,
        );
      }
    }
  }
  return drifts;
}

function collectContentDrifts() {
  const drifts = [];
  for (const check of contentChecks) {
    const raw = readText(check.path);
    for (const required of check.required) {
      if (!raw.includes(required)) {
        drifts.push(`  ${check.path}: missing "${required}"`);
      }
    }
    for (const forbidden of check.forbidden) {
      const matches =
        typeof forbidden === "string"
          ? raw.includes(forbidden)
          : forbidden.pattern.test(raw);
      if (matches) {
        const label =
          typeof forbidden === "string" ? `"${forbidden}"` : forbidden.label;
        drifts.push(`  ${check.path}: stale ${label}`);
      }
    }
  }
  return drifts;
}

function collectFrontmatterPolicyDrifts(paths, expectations) {
  return paths.flatMap((path) =>
    collectFrontmatterDrifts(path, readText(path), expectations),
  );
}

function collectSkillMetadataDrifts() {
  const portableSkillPaths = readdirSync(join(root, "skills"))
    .filter((directory) => directory !== "x-twitter-scraper")
    .map((directory) => `skills/${directory}/SKILL.md`);
  return [
    ...collectFrontmatterPolicyDrifts(
      ["skills/x-twitter-scraper/SKILL.md"],
      skillFrontmatterExpectations,
    ),
    ...collectFrontmatterPolicyDrifts(portableSkillPaths, {}),
  ];
}

function collectTaskGuideMetadataDrifts() {
  return collectFrontmatterPolicyDrifts(taskGuidePaths, {
    ...taskGuideFrontmatterExpectations,
    scalars: {
      ...taskGuideFrontmatterExpectations.scalars,
      "metadata.version": expected,
    },
  });
}

function collectTaskGuideUsageLanguageDrifts() {
  const drifts = [];
  for (const path of taskGuidePaths) {
    const raw = readText(path);
    if (raw.includes("| Free") || raw.includes("free read-only")) {
      drifts.push(`  ${path}: use "Included" instead of pricing-style "Free"`);
    }
    if (raw.includes("sibling skills") || raw.includes("` skill")) {
      drifts.push(`  ${path}: task guides must not be labeled skills`);
    }
  }
  return drifts;
}

function collectSkillsShGroupingDrifts() {
  const drifts = [];
  const groupedSkills = new Set();
  for (const group of readJson("skills.sh.json").groupings ?? []) {
    for (const skill of group.skills ?? []) {
      groupedSkills.add(skill);
      if (skill !== "x-twitter-scraper" && !taskGuideNames.has(skill)) {
        drifts.push(`  skills.sh.json: grouped skill "${skill}" has no guide`);
      }
    }
  }
  for (const skill of taskGuideNames) {
    if (!groupedSkills.has(skill)) {
      drifts.push(`  skills.sh.json: missing task guide "${skill}"`);
    }
  }
  return drifts;
}

export function collectPolicyDrifts() {
  return [
    ...collectVersionDrifts(),
    ...collectContentDrifts(),
    ...collectSkillMetadataDrifts(),
    ...collectTaskGuideMetadataDrifts(),
    ...collectTaskGuideUsageLanguageDrifts(),
    ...collectSkillsShGroupingDrifts(),
  ];
}
