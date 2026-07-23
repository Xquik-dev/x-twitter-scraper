#!/usr/bin/env node

// SPDX-FileCopyrightText: 2026 Xquik Contributors
// SPDX-License-Identifier: MIT

// Pre-publish and pre-commit guard for every public package contract.

import { expected } from "./release-guard/context.mjs";
import { collectPolicyDrifts } from "./release-guard/policy-checks.mjs";
import { collectRepositoryDrifts } from "./release-guard/repository-checks.mjs";

const failures = [...collectPolicyDrifts(), ...collectRepositoryDrifts()];

if (failures.length > 0) {
  process.stderr.write(
    `Release guard failed (package.json = ${expected}):\n${failures.join("\n")}\n`,
  );
  process.exit(1);
}

process.stdout.write(`All surfaces at ${expected}\n`);
