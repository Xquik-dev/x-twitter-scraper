// SPDX-FileCopyrightText: 2026 Xquik Contributors
// SPDX-License-Identifier: MIT

import test from "node:test";

test("validates every package contract surface", async () => {
  await import("../scripts/check-versions.mjs");
});
