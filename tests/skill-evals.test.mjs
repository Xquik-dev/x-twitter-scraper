// SPDX-FileCopyrightText: 2026 Xquik Contributors
// SPDX-License-Identifier: MIT

import assert from "node:assert/strict";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import {
  buildBenchmark,
  discoverSkills,
  gradeRun,
  parseTrace,
  readSuite,
} from "../scripts/skill-evals/core.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

test("defines complete eval suites for every Skill", async () => {
  const skills = await discoverSkills(root);
  assert.deepEqual(skills, ["x-twitter-scraper", "xquik-social-research"]);
  const counts = await Promise.all(
    skills.map(async (skill) => (await readSuite(root, skill)).cases.length),
  );
  assert.deepEqual(counts, [12, 11]);
});

test("parses activation, commands, output, and usage from JSONL", () => {
  const skill = "x-twitter-scraper";
  const events = [
    {
      type: "item.completed",
      item: {
        type: "command_execution",
        command: `/bin/zsh -lc sed .codex/skills/${skill}/SKILL.md`,
      },
    },
    { type: "item.completed", item: { type: "agent_message", text: "Done" } },
    {
      type: "turn.completed",
      usage: {
        input_tokens: 10,
        cached_input_tokens: 4,
        output_tokens: 3,
        reasoning_output_tokens: 2,
      },
    },
  ];
  const trace = parseTrace(events.map(JSON.stringify).join("\n"), skill);
  assert.equal(trace.activated, true);
  assert.equal(trace.commands.length, 1);
  assert.equal(trace.finalOutput, "Done");
  assert.deepEqual(trace.usage, {
    cachedInputTokens: 4,
    inputTokens: 10,
    outputTokens: 3,
    reasoningOutputTokens: 2,
  });
  const metadataTrace = parseTrace(
    JSON.stringify({
      type: "item.completed",
      item: {
        type: "command_execution",
        command: `/bin/zsh -lc jq . .codex/skills/${skill}/evals/evals.json`,
      },
    }),
    skill,
  );
  assert.equal(metadataTrace.activated, false);
  const localTrace = parseTrace(
    JSON.stringify({
      type: "item.completed",
      item: {
        type: "command_execution",
        command: "/bin/zsh -lc sed -n '1,240p' SKILL.md",
        aggregated_output: `---\nname: ${skill}\ndescription: Test\n---`,
      },
    }),
    skill,
  );
  assert.equal(localTrace.activated, true);
});

test("detects an explicit Skill activation announcement", () => {
  const skill = "x-twitter-scraper";
  const events = [
    {
      type: "item.completed",
      item: {
        type: "agent_message",
        text: `I am using the ${skill} skill for this plan.`,
      },
    },
    { type: "item.completed", item: { type: "agent_message", text: "Done" } },
  ];
  const trace = parseTrace(events.map(JSON.stringify).join("\n"), skill);
  assert.equal(trace.activated, true);
  assert.equal(trace.commands.length, 0);
  assert.equal(trace.finalOutput, "Done");
});

test("records a named Skill invocation when runtime loading is silent", () => {
  const result = gradeRun({
    configuration: "with_skill",
    createdFiles: [],
    durationMs: 10,
    skillName: "x-twitter-scraper",
    testCase: {
      activation: "explicit",
      assertions: [],
      id: "named",
      inputs: [],
      shouldTrigger: true,
    },
    trace: {
      activated: false,
      commands: [],
      finalOutput: "Done",
      usage: {
        cachedInputTokens: 0,
        inputTokens: 1,
        outputTokens: 1,
        reasoningOutputTokens: 0,
      },
    },
  });
  assert.equal(result.activated, true);
  assert.equal(result.checks.find(({ id }) => id === "activation").pass, true);
});

test("grades objective assertions and aggregates a baseline delta", () => {
  const testCase = {
    id: "search",
    shouldTrigger: true,
    inputs: [],
    assertions: [
      { id: "route", type: "contains_all", values: ["/search", "limit"] },
      { id: "choice", type: "contains_any", values: ["q", "query"] },
      { id: "safe", type: "excludes", values: ["secret"] },
      { id: "bound", type: "matches", pattern: "limit.?=.?20" },
      { id: "price", type: "not_matches", pattern: "\\b\\d+ credits?\\b" },
    ],
  };
  const trace = {
    activated: true,
    commands: ["read SKILL.md"],
    finalOutput: "GET /search?q=topic&limit=20",
    usage: {
      cachedInputTokens: 0,
      inputTokens: 100,
      outputTokens: 20,
      reasoningOutputTokens: 5,
    },
  };
  const withSkill = gradeRun({
    configuration: "with_skill",
    createdFiles: [],
    durationMs: 1000,
    skillName: "x-twitter-scraper",
    testCase,
    trace,
  });
  const withStaticPrice = gradeRun({
    configuration: "with_skill",
    createdFiles: [],
    durationMs: 1000,
    skillName: "x-twitter-scraper",
    testCase,
    trace: { ...trace, finalOutput: `${trace.finalOutput} 10 credits` },
  });
  const withoutSkill = gradeRun({
    configuration: "without_skill",
    createdFiles: [],
    durationMs: 500,
    skillName: "x-twitter-scraper",
    testCase,
    trace: { ...trace, activated: false, finalOutput: "Need more details" },
  });
  assert.equal(withSkill.pass, true);
  assert.equal(withStaticPrice.pass, false);
  assert.equal(
    withStaticPrice.checks.find(({ id }) => id === "price").pass,
    false,
  );
  assert.equal(withoutSkill.pass, false);
  const benchmark = buildBenchmark([withSkill, withoutSkill]);
  assert.equal(benchmark.delta.passRate, 1);
  assert.equal(benchmark.gate.allWithSkillRunsPass, true);
  assert.equal(benchmark.gate.beatsBaseline, true);
});
