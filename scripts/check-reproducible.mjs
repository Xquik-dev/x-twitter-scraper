// SPDX-FileCopyrightText: 2026 Xquik Contributors
// SPDX-License-Identifier: MIT

import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdir, mkdtemp, readdir, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

function runNpm(args) {
  const result = spawnSync("npm", args, { stdio: "inherit" });
  if (result.error !== undefined) {
    throw result.error;
  }
  if (result.status !== 0) {
    throw new Error(`npm ${args.join(" ")} failed with status ${result.status}`);
  }
}

async function readPackage(directory) {
  const packageNames = (await readdir(directory)).filter((name) =>
    name.endsWith(".tgz"),
  );
  assert.equal(packageNames.length, 1, "Expected exactly one package archive");
  return readFile(join(directory, packageNames[0]));
}

const workspace = await mkdtemp(join(tmpdir(), "x-developer-reproducible-"));

try {
  const firstPack = join(workspace, "first");
  const secondPack = join(workspace, "second");
  await mkdir(firstPack);
  await mkdir(secondPack);

  runNpm(["pack", "--ignore-scripts", "--pack-destination", firstPack]);
  runNpm(["pack", "--ignore-scripts", "--pack-destination", secondPack]);

  assert.deepEqual(
    await readPackage(secondPack),
    await readPackage(firstPack),
    "Repeated package archives differ",
  );
} finally {
  await rm(workspace, { force: true, recursive: true });
}

process.stdout.write("Package archives are reproducible.\n");
