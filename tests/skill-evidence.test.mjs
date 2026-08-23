// SPDX-FileCopyrightText: 2026 Xquik Contributors
// SPDX-License-Identifier: MIT

import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import test from "node:test";

import {
  discoverSkills,
  hashDirectory,
  readSuite,
} from "../scripts/skill-evals/core.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));

async function readJson(path) {
  return JSON.parse(await readFile(new URL(path, import.meta.url), "utf8"));
}

async function currentSkillRecords() {
  const names = await discoverSkills(root);
  return Promise.all(
    names.map(async (name) => ({
      hash: await hashDirectory(fileURLToPath(new URL(`../skills/${name}`, import.meta.url))),
      name,
      suite: await readSuite(root, name),
    })),
  );
}

test("keeps Skill security evidence tied to exact source hashes", async () => {
  const [evidence, suppressions, skills] = await Promise.all([
    readJson("../docs/research/skill-security/results/results-2026-08-23.json"),
    readJson("../docs/research/skill-security/suppressions-2026-08-22.json"),
    currentSkillRecords(),
  ]);

  assert.equal(evidence.schemaVersion, 1);
  assert.deepEqual(suppressions.suppressions, []);
  assert.deepEqual(Object.keys(evidence.skills).sort(), skills.map(({ name }) => name));

  for (const { hash, name } of skills) {
    const record = evidence.skills[name];
    assert.equal(record.sourceSha256, hash, `${name} source changed after scanning`);
    assert.ok(record.scans.length >= 2, `${name} needs static and semantic scans`);
    assert.deepEqual(
      [...new Set(record.scans.map(({ mode }) => mode))].sort(),
      ["semantic", "static"],
    );
    for (const scan of record.scans) {
      const analyzers = evidence.analyzerProfiles[scan.analyzerProfile];
      assert.ok(analyzers, `${name} ${scan.analyzerProfile}`);
      assert.equal(scan.sourceSha256, hash);
      assert.equal(scan.executionSuccessful, true);
      assert.equal(scan.recommendation, "SAFE");
      assert.equal(scan.riskScore, 0);
      assert.equal(scan.activeFindings, 0);
      assert.equal(scan.suppressedFindings, 0);
      assert.equal(scan.analysisComplete, true);
      assert.equal(scan.coveragePercent, 100);
      assert.deepEqual(analyzers.failed, []);
      assert.deepEqual(analyzers.partial, []);
      if (scan.mode === "semantic") {
        for (const analyzer of [
          "semantic_developer_intent",
          "semantic_quality_policy",
          "semantic_security_discovery",
        ]) {
          assert.ok(analyzers.completed.includes(analyzer), `${name} ${analyzer}`);
        }
        assert.ok(
          [...analyzers.completed, ...analyzers.notApplicable].includes(
            "meta_analyzer",
          ),
          `${name} meta_analyzer`,
        );
      }
    }
  }
});

test("keeps two passing Skill benchmarks tied to exact source hashes", async () => {
  const [evidence, skills] = await Promise.all([
    readJson("../docs/research/skill-evals/benchmark-2026-08-23.json"),
    currentSkillRecords(),
  ]);

  assert.equal(evidence.schemaVersion, 1);
  assert.deepEqual(Object.keys(evidence.skills).sort(), skills.map(({ name }) => name));

  for (const { hash, name, suite } of skills) {
    const record = evidence.skills[name];
    assert.equal(record.sourceSha256, hash, `${name} source changed after evaluation`);
    assert.equal(record.caseCount, suite.cases.length);
    assert.equal(record.iterations.length, 2);
    assert.equal(new Set(record.iterations.map(({ id }) => id)).size, 2);
    for (const iteration of record.iterations) {
      assert.equal(iteration.sourceSha256, hash);
      assert.equal(iteration.sandbox, "read-only");
      assert.equal(iteration.withSkill.failed, 0);
      assert.equal(iteration.withSkill.passRate, 1);
      assert.ok(iteration.withSkill.runCount >= suite.cases.length);
      assert.ok(iteration.withoutSkill.passRate < iteration.withSkill.passRate);
      assert.equal(iteration.withSkill.createdFileCount, 0);
      assert.equal(iteration.gate.allWithSkillRunsPass, true);
      assert.equal(iteration.gate.beatsBaseline, true);
      assert.equal(iteration.gate.noExtraPermissions, true);
      assert.equal(iteration.gate.noCreatedFiles, true);
      assert.equal(iteration.rubric.withSkillRunCount, iteration.withSkill.runCount);
      assert.equal(iteration.rubric.allDimensionsPass, true);
    }
  }
});
