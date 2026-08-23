// SPDX-FileCopyrightText: 2026 Xquik Contributors
// SPDX-License-Identifier: MIT

import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { discoverSkills, readSuite } from "./skill-evals/core.mjs";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const skills = await discoverSkills(root);

for (const skill of skills) await readSuite(root, skill);

process.stdout.write(
  `Checked ${skills.length} Skill eval suites: ${skills.join(", ")}.\n`,
);
