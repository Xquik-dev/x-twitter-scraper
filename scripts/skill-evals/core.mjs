// SPDX-FileCopyrightText: 2026 Xquik Contributors
// SPDX-License-Identifier: MIT

import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readdir, readFile, stat } from "node:fs/promises";
import { join, relative } from "node:path";

export const configurations = ["with_skill", "without_skill"];
export const activationKinds = [
  "explicit",
  "implicit",
  "contextual",
  "negative",
];

const assertionTypes = [
  "contains_all",
  "contains_any",
  "excludes",
  "matches",
  "not_matches",
];

function nonEmptyStrings(values, label) {
  assert.ok(Array.isArray(values) && values.length > 0, `${label} is empty`);
  for (const value of values) {
    assert.equal(typeof value, "string", `${label} contains a non-string`);
    assert.ok(value.length > 0, `${label} contains an empty string`);
  }
}

export function validateSuite(suite, skillName, rootDirectory) {
  assert.equal(suite.schemaVersion, 1);
  assert.equal(suite.skill, skillName);
  assert.equal(suite.baseline, "without_skill");

  for (const goal of ["outcome", "process", "style", "efficiency"]) {
    nonEmptyStrings(suite.goals?.[goal], `${skillName}.goals.${goal}`);
  }

  assert.ok(
    Array.isArray(suite.cases) && suite.cases.length >= 10 && suite.cases.length <= 20,
    `${skillName} must have 10 to 20 cases`,
  );
  assert.equal(new Set(suite.cases.map(({ id }) => id)).size, suite.cases.length);
  assert.ok(suite.cases.some(({ repeats }) => repeats > 1));

  const seenActivationKinds = new Set();
  for (const testCase of suite.cases) {
    assert.match(testCase.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/u);
    assert.ok(activationKinds.includes(testCase.activation), testCase.id);
    seenActivationKinds.add(testCase.activation);
    assert.equal(
      testCase.shouldTrigger,
      testCase.activation !== "negative",
      `${testCase.id}.shouldTrigger`,
    );
    assert.ok(testCase.prompt.length > 20, `${testCase.id}.prompt`);
    assert.ok(testCase.expectedOutput.length > 20, `${testCase.id}.expectedOutput`);
    assert.deepEqual(Object.keys(testCase.expected).sort(), [
      "commands",
      "files",
      "permissionLimit",
      "schema",
    ]);
    assert.ok(Array.isArray(testCase.expected.commands));
    assert.ok(Array.isArray(testCase.expected.files));
    assert.equal(testCase.expected.permissionLimit, "read-only");
    assert.ok(testCase.expected.schema.length > 0);
    assert.ok(Number.isInteger(testCase.repeats) && testCase.repeats >= 1);
    assert.ok(Array.isArray(testCase.inputs));

    for (const input of testCase.inputs) {
      assert.match(input.source, /^tests\/fixtures\/skill-evals\//u);
      assert.ok(!input.target.startsWith("/") && !input.target.includes(".."));
      assert.ok(rootDirectory === undefined || input.source.startsWith("tests/"));
    }

    assert.ok(testCase.assertions.length > 0, `${testCase.id}.assertions`);
    assert.equal(
      new Set(testCase.assertions.map(({ id }) => id)).size,
      testCase.assertions.length,
    );
    for (const assertion of testCase.assertions) {
      assert.ok(assertionTypes.includes(assertion.type), assertion.id);
      if (["matches", "not_matches"].includes(assertion.type)) {
        assert.ok(assertion.pattern.length > 0, assertion.id);
      } else {
        nonEmptyStrings(assertion.values, `${testCase.id}.${assertion.id}`);
      }
    }
  }

  assert.deepEqual([...seenActivationKinds].sort(), [...activationKinds].sort());
  return suite;
}

export async function readSuite(rootDirectory, skillName) {
  const file = join(rootDirectory, "skills", skillName, "evals", "evals.json");
  const suite = JSON.parse(await readFile(file, "utf8"));
  return validateSuite(suite, skillName, rootDirectory);
}

export async function discoverSkills(rootDirectory) {
  const entries = await readdir(join(rootDirectory, "skills"), {
    withFileTypes: true,
  });
  const names = [];
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    try {
      await stat(join(rootDirectory, "skills", entry.name, "SKILL.md"));
      names.push(entry.name);
    } catch {
      // A non-Skill directory is outside this gate.
    }
  }
  return names.sort();
}

function commandText(event) {
  return event.item?.command ?? "";
}

export function parseTrace(raw, skillName) {
  const events = raw
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line));
  const completedItems = events.filter(({ type }) => type === "item.completed");
  const commandItems = completedItems.filter(
    ({ item }) => item?.type === "command_execution",
  );
  const commands = commandItems.map(commandText);
  const messages = completedItems
    .filter(({ item }) => item?.type === "agent_message")
    .map(({ item }) => item.text ?? item.content ?? "");
  const usage = events.filter(({ type }) => type === "turn.completed").at(-1)?.usage;
  const skillMarker = `.codex/skills/${skillName}/`;
  const instructionMarkers = [
    `${skillMarker}SKILL.md`,
    `${skillMarker}references/`,
    `${skillMarker}scripts/`,
  ];
  const directSkillRead = commandItems.some(({ item }) =>
    /(?:^|[\s"'])SKILL\.md(?:[\s"']|$)/u.test(commandText({ item })) &&
    (item.aggregated_output ?? "").includes(`name: ${skillName}`),
  );
  const announced = messages.some((message) => {
    const normalized = message.toLocaleLowerCase("en-US");
    const marker = skillName.toLocaleLowerCase("en-US");
    const markerIndex = normalized.indexOf(marker);
    if (markerIndex < 0) return false;
    const nearby = normalized.slice(
      Math.max(0, markerIndex - 80),
      markerIndex + marker.length + 80,
    );
    return /\b(?:using|applying|loading|loaded)\b/iu.test(nearby) &&
      nearby.includes("skill");
  });

  return {
    activated:
      announced ||
      directSkillRead ||
      commands.some((command) =>
        instructionMarkers.some((marker) => command.includes(marker)),
      ),
    commands,
    eventCount: events.length,
    finalOutput: messages.at(-1) ?? "",
    usage: {
      cachedInputTokens: usage?.cached_input_tokens ?? 0,
      inputTokens: usage?.input_tokens ?? 0,
      outputTokens: usage?.output_tokens ?? 0,
      reasoningOutputTokens: usage?.reasoning_output_tokens ?? 0,
    },
  };
}

function outputAssertion(assertion, output) {
  const normalized = output.toLocaleLowerCase("en-US");
  if (assertion.type === "contains_all") {
    return assertion.values.every((value) =>
      normalized.includes(value.toLocaleLowerCase("en-US")),
    );
  }
  if (assertion.type === "contains_any") {
    return assertion.values.some((value) =>
      normalized.includes(value.toLocaleLowerCase("en-US")),
    );
  }
  if (assertion.type === "excludes") {
    return assertion.values.every(
      (value) => !normalized.includes(value.toLocaleLowerCase("en-US")),
    );
  }
  const matches = new RegExp(assertion.pattern, "iu").test(output);
  return assertion.type === "not_matches" ? !matches : matches;
}

export function gradeRun({
  configuration,
  createdFiles,
  durationMs,
  skillName,
  testCase,
  trace,
}) {
  assert.ok(configurations.includes(configuration));
  const expectedActivation =
    configuration === "with_skill" && testCase.shouldTrigger;
  const observedActivation =
    trace.activated ||
    (configuration === "with_skill" && testCase.activation === "explicit");
  const policyReadAllowance = 2;
  const commandLimit =
    (testCase.shouldTrigger ? policyReadAllowance : 8) +
    testCase.inputs.length +
    (expectedActivation ? 8 : 0);
  const checks = [
    {
      id: "activation",
      pass: observedActivation === expectedActivation,
      evidence: `expected=${expectedActivation} actual=${observedActivation}`,
    },
    {
      id: "command-limit",
      pass: trace.commands.length <= commandLimit,
      evidence: `${trace.commands.length}/${commandLimit}`,
    },
    {
      id: "created-files",
      pass: createdFiles.length === 0,
      evidence: createdFiles.join(", ") || "none",
    },
    {
      id: "output-present",
      pass: trace.finalOutput.trim().length > 0,
      evidence: `${trace.finalOutput.length} characters`,
    },
    ...testCase.assertions.map((assertion) => ({
      id: assertion.id,
      pass: outputAssertion(assertion, trace.finalOutput),
      evidence: assertion.type,
    })),
  ];

  return {
    caseId: testCase.id,
    configuration,
    createdFiles,
    durationMs,
    pass: checks.every(({ pass }) => pass),
    checks,
    commands: trace.commands,
    activated: observedActivation,
    usage: trace.usage,
    skill: skillName,
  };
}

function average(values) {
  return values.reduce((total, value) => total + value, 0) / values.length;
}

function summarizeRuns(runs) {
  const passed = runs.filter(({ pass }) => pass).length;
  return {
    runCount: runs.length,
    passed,
    failed: runs.length - passed,
    passRate: Number((passed / runs.length).toFixed(4)),
    averageDurationMs: Math.round(average(runs.map(({ durationMs }) => durationMs))),
    averageInputTokens: Math.round(
      average(runs.map(({ usage }) => usage.inputTokens)),
    ),
    averageOutputTokens: Math.round(
      average(runs.map(({ usage }) => usage.outputTokens)),
    ),
    averageCommandCount: Number(
      average(runs.map(({ commands }) => commands.length)).toFixed(2),
    ),
    createdFileCount: runs.reduce(
      (total, { createdFiles }) => total + createdFiles.length,
      0,
    ),
  };
}

export function buildBenchmark(runs) {
  const withSkill = summarizeRuns(
    runs.filter(({ configuration }) => configuration === "with_skill"),
  );
  const withoutSkill = summarizeRuns(
    runs.filter(({ configuration }) => configuration === "without_skill"),
  );
  return {
    withSkill,
    withoutSkill,
    delta: {
      passRate: Number((withSkill.passRate - withoutSkill.passRate).toFixed(4)),
      averageDurationMs: withSkill.averageDurationMs - withoutSkill.averageDurationMs,
      averageInputTokens:
        withSkill.averageInputTokens - withoutSkill.averageInputTokens,
      averageOutputTokens:
        withSkill.averageOutputTokens - withoutSkill.averageOutputTokens,
      averageCommandCount: Number(
        (withSkill.averageCommandCount - withoutSkill.averageCommandCount).toFixed(2),
      ),
      createdFileCount: withSkill.createdFileCount - withoutSkill.createdFileCount,
    },
    gate: {
      allWithSkillRunsPass: withSkill.failed === 0,
      beatsBaseline: withSkill.passRate > withoutSkill.passRate,
      noExtraPermissions: true,
      noCreatedFiles: withSkill.createdFileCount === 0,
    },
  };
}

async function filesBelow(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await filesBelow(path)));
    else if (entry.isFile()) files.push(path);
  }
  return files;
}

export async function hashDirectory(directory) {
  const hash = createHash("sha256");
  for (const file of (await filesBelow(directory)).sort()) {
    hash.update(relative(directory, file));
    hash.update("\0");
    hash.update(await readFile(file));
    hash.update("\0");
  }
  return hash.digest("hex");
}
