// SPDX-FileCopyrightText: 2026 Xquik Contributors
// SPDX-License-Identifier: MIT

import { spawn } from "node:child_process";
import {
  cp,
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  rm,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

import {
  buildBenchmark,
  configurations,
  discoverSkills,
  gradeRun,
  hashDirectory,
  parseTrace,
  readSuite,
} from "./skill-evals/core.mjs";

const root = dirname(dirname(fileURLToPath(import.meta.url)));

function optionsFrom(argv) {
  const options = {
    artifacts: join(root, "skills", "_artifacts", "evals"),
    cases: [],
    concurrency: 2,
    iteration: new Date().toISOString().replaceAll(/[:.]/gu, "-"),
    rubric: true,
    skills: [],
    timeoutMs: 120_000,
  };
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];
    if (value === "--skill") options.skills.push(argv[++index]);
    else if (value === "--case") options.cases.push(argv[++index]);
    else if (value === "--iteration") options.iteration = argv[++index];
    else if (value === "--artifacts") options.artifacts = argv[++index];
    else if (value === "--concurrency") options.concurrency = Number(argv[++index]);
    else if (value === "--model") options.model = argv[++index];
    else if (value === "--timeout-ms") options.timeoutMs = Number(argv[++index]);
    else if (value === "--no-rubric") options.rubric = false;
    else throw new Error(`Unknown option: ${value}`);
  }
  if (!Number.isInteger(options.concurrency) || options.concurrency < 1) {
    throw new Error("--concurrency must be a positive integer");
  }
  if (!Number.isInteger(options.timeoutMs) || options.timeoutMs < 1) {
    throw new Error("--timeout-ms must be a positive integer");
  }
  return options;
}

async function filesBelow(directory, prefix = "") {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    const name = join(prefix, entry.name);
    if (entry.isDirectory()) files.push(...(await filesBelow(path, name)));
    else if (entry.isFile()) files.push(name);
  }
  return files.sort();
}

function runCodex({ directory, model, outputSchema, prompt, timeoutMs }) {
  const args = [
    "exec",
    "--json",
    "--ephemeral",
    "--ignore-user-config",
    "--ignore-rules",
    "--skip-git-repo-check",
    "--sandbox",
    "read-only",
    "--cd",
    directory,
  ];
  if (model) args.push("--model", model);
  if (outputSchema) args.push("--output-schema", outputSchema);
  args.push(prompt);

  return new Promise((resolve, reject) => {
    const child = spawn("codex", args, { stdio: ["ignore", "pipe", "pipe"] });
    let stdout = "";
    let stderr = "";
    let timedOut = false;
    let forceTimer;
    const timer = setTimeout(() => {
      timedOut = true;
      child.kill("SIGTERM");
      forceTimer = setTimeout(() => child.kill("SIGKILL"), 5_000);
      forceTimer.unref();
    }, timeoutMs);
    timer.unref();
    child.stdout.setEncoding("utf8");
    child.stderr.setEncoding("utf8");
    child.stdout.on("data", (chunk) => {
      stdout += chunk;
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk;
    });
    child.once("error", (error) => {
      clearTimeout(timer);
      if (forceTimer) clearTimeout(forceTimer);
      reject(error);
    });
    child.once("close", (code, signal) => {
      clearTimeout(timer);
      if (forceTimer) clearTimeout(forceTimer);
      resolve({ code: code ?? 1, signal, stderr, stdout, timedOut });
    });
  });
}

async function prepareWorkspace(skillName, testCase, configuration) {
  const directory = await mkdtemp(join(tmpdir(), "xquik-skill-eval-"));
  if (configuration === "with_skill") {
    const target = join(directory, ".codex", "skills", skillName);
    await mkdir(dirname(target), { recursive: true });
    await cp(join(root, "skills", skillName), target, { recursive: true });
  }
  for (const input of testCase.inputs) {
    const target = join(directory, input.target);
    await mkdir(dirname(target), { recursive: true });
    await cp(join(root, input.source), target);
  }
  return directory;
}

async function executeRun(task, options, iterationDirectory) {
  const workspace = await prepareWorkspace(
    task.skillName,
    task.testCase,
    task.configuration,
  );
  const before = await filesBelow(workspace);
  const startedAt = new Date();
  const start = performance.now();
  try {
    const result = await runCodex({
      directory: workspace,
      model: options.model,
      prompt: task.testCase.prompt,
      timeoutMs: options.timeoutMs,
    });
    const durationMs = Math.round(performance.now() - start);
    if (result.code !== 0) {
      throw new Error(
        `codex exec failed for ${task.runId}: code=${result.code} signal=${result.signal} timedOut=${result.timedOut}`,
      );
    }
    const trace = parseTrace(result.stdout, task.skillName);
    const after = await filesBelow(workspace);
    const createdFiles = after.filter((file) => !before.includes(file));
    const grade = gradeRun({
      configuration: task.configuration,
      createdFiles,
      durationMs,
      skillName: task.skillName,
      testCase: task.testCase,
      trace,
    });
    const outputDirectory = join(iterationDirectory, task.runId);
    await mkdir(outputDirectory, { recursive: true });
    await Promise.all([
      writeFile(join(outputDirectory, "trace.jsonl"), result.stdout),
      writeFile(join(outputDirectory, "stderr.log"), result.stderr),
      writeFile(join(outputDirectory, "output.md"), trace.finalOutput),
      writeFile(
        join(outputDirectory, "grading.json"),
        `${JSON.stringify(grade, null, 2)}\n`,
      ),
      writeFile(
        join(outputDirectory, "timing.json"),
        `${JSON.stringify(
          {
            startedAt: startedAt.toISOString(),
            durationMs,
            usage: trace.usage,
          },
          null,
          2,
        )}\n`,
      ),
    ]);
    process.stdout.write(`${task.runId}: ${grade.pass ? "PASS" : "FAIL"}\n`);
    return { ...grade, runId: task.runId, output: trace.finalOutput };
  } finally {
    await rm(workspace, { force: true, recursive: true });
  }
}

async function runQueue(tasks, workerCount, run) {
  const remaining = [...tasks];
  const results = [];
  async function worker() {
    while (remaining.length > 0) {
      const task = remaining.shift();
      results.push(await run(task));
    }
  }
  await Promise.all(
    Array.from({ length: Math.min(workerCount, tasks.length) }, () => worker()),
  );
  return results;
}

function rubricPrompt(skillName, suite, runs) {
  const evidence = runs.map(({ output, ...run }) => {
    const testCase = suite.cases.find(({ id }) => id === run.caseId);
    return {
      runId: run.runId,
      prompt: testCase.prompt,
      expectedOutput: testCase.expectedOutput,
      shouldTrigger: testCase.shouldTrigger,
      activated: run.activated,
      output,
      commands: run.commands,
      commandCount: run.commands.length,
      commandLimit: run.checks.find(({ id }) => id === "command-limit")?.evidence,
      createdFiles: run.createdFiles,
      mechanicalPass: run.pass,
    };
  });
  return [
    `Grade ${skillName} eval outputs. Use no tools.`,
    "Return one result for every runId.",
    "Outcome checks correctness and completion.",
    "Process checks the stated safety and account boundaries.",
    "Style checks plain, direct wording and no invented facts.",
    "Efficiency checks focus, command count, and created files.",
    "Pass efficiency when the mechanical run passes and every command supports the task.",
    "The with_skill label means the Skill was available, not necessarily activated.",
    "For shouldTrigger=false, pass process when activated=false and the output stays outside the Skill.",
    "For shouldTrigger=false, judge activation, scope, and the stated expected output. Do not require another Skill or its tools.",
    "Use the commands field. Do not treat another required writing guide as Skill activation.",
    "Do not fail efficiency only because a run reads its Skill, needed references, or mandatory writing guidance.",
    "Relevant read-only commands within commandLimit are efficient. Adjacent tasks may use other needed tools.",
    "Require direct evidence. Do not give uncertain work a pass.",
    JSON.stringify(evidence),
  ].join("\n");
}

async function runRubric(skillName, suite, runs, options, iterationDirectory) {
  const workspace = await mkdtemp(join(tmpdir(), "xquik-skill-rubric-"));
  try {
    const rubric = { results: [] };
    for (let index = 0; index < runs.length; index += 8) {
      const batch = runs.slice(index, index + 8);
      const result = await runCodex({
        directory: workspace,
        model: options.model,
        outputSchema: join(root, "scripts", "skill-evals", "rubric.schema.json"),
        prompt: rubricPrompt(skillName, suite, batch),
        timeoutMs: options.timeoutMs,
      });
      if (result.code !== 0) throw new Error(`Rubric failed for ${skillName}`);
      const trace = parseTrace(result.stdout, skillName);
      const batchRubric = JSON.parse(trace.finalOutput);
      const expectedIds = new Set(batch.map(({ runId }) => runId));
      const actualIds = new Set(batchRubric.results.map(({ runId }) => runId));
      if (
        expectedIds.size !== batchRubric.results.length ||
        expectedIds.size !== actualIds.size ||
        [...expectedIds].some((id) => !actualIds.has(id))
      ) {
        throw new Error(`Rubric omitted or duplicated ${skillName} run IDs`);
      }
      rubric.results.push(...batchRubric.results);
    }
    await writeFile(
      join(iterationDirectory, `${skillName}-rubric.json`),
      `${JSON.stringify(rubric, null, 2)}\n`,
    );
    return rubric;
  } finally {
    await rm(workspace, { force: true, recursive: true });
  }
}

function tasksFor(skillName, suite, caseIds) {
  const cases =
    caseIds.length === 0
      ? suite.cases
      : suite.cases.filter(({ id }) => caseIds.includes(id));
  if (cases.length === 0) throw new Error(`No selected cases found for ${skillName}`);
  return cases.flatMap((testCase) =>
    configurations.flatMap((configuration) =>
      Array.from({ length: testCase.repeats }, (_, index) => ({
        configuration,
        runId: `${skillName}--${testCase.id}--${configuration}--${index + 1}`,
        skillName,
        testCase,
      })),
    ),
  );
}

const options = optionsFrom(process.argv.slice(2));
const discovered = await discoverSkills(root);
const skills = options.skills.length > 0 ? options.skills : discovered;
for (const skill of skills) {
  if (!discovered.includes(skill)) throw new Error(`Unknown Skill: ${skill}`);
}

const iterationDirectory = join(options.artifacts, options.iteration);
await mkdir(iterationDirectory, { recursive: true });
const suites = new Map();
const tasks = [];
for (const skill of skills) {
  const suite = await readSuite(root, skill);
  suites.set(skill, suite);
  tasks.push(...tasksFor(skill, suite, options.cases));
}

const runs = await runQueue(tasks, options.concurrency, (task) =>
  executeRun(task, options, iterationDirectory),
);
const benchmarks = {};
const rubrics = {};
for (const skill of skills) {
  const skillRuns = runs.filter(({ skill: runSkill }) => runSkill === skill);
  benchmarks[skill] = buildBenchmark(skillRuns);
  if (options.rubric) {
    rubrics[skill] = await runRubric(
      skill,
      suites.get(skill),
      skillRuns,
      options,
      iterationDirectory,
    );
  }
}

const manifest = {
  iteration: options.iteration,
  completedAt: new Date().toISOString(),
  model: options.model ?? "Codex CLI default",
  sandbox: "read-only",
  configurations,
  skills: Object.fromEntries(
    await Promise.all(
      skills.map(async (skill) => [
        skill,
        {
          sourceSha256: await hashDirectory(join(root, "skills", skill)),
          caseCount: suites.get(skill).cases.length,
          runCount: runs.filter(({ skill: runSkill }) => runSkill === skill).length,
        },
      ]),
    ),
  ),
};
await Promise.all([
  writeFile(
    join(iterationDirectory, "benchmark.json"),
    `${JSON.stringify(benchmarks, null, 2)}\n`,
  ),
  writeFile(
    join(iterationDirectory, "manifest.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
  ),
  writeFile(
    join(iterationDirectory, "human-feedback.template.json"),
    `${JSON.stringify(
      {
        reviewedAt: null,
        reviewer: null,
        findings: skills.map((skill) => ({ skill, actionable: null, notes: "" })),
      },
      null,
      2,
    )}\n`,
  ),
]);

const deterministicPass = Object.values(benchmarks).every(
  ({ gate }) =>
    gate.allWithSkillRunsPass &&
    gate.beatsBaseline &&
    gate.noExtraPermissions &&
    gate.noCreatedFiles,
);
const rubricPass = Object.values(rubrics).every(({ results }) =>
  results
    .filter(({ runId }) => runId.includes("--with_skill--"))
    .every(({ outcome, process, style, efficiency }) =>
      [outcome, process, style, efficiency].every(Boolean),
    ),
);

if (!deterministicPass || !rubricPass) process.exitCode = 1;
