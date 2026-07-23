// SPDX-FileCopyrightText: 2026 Xquik Contributors
// SPDX-License-Identifier: MIT

import assert from "node:assert/strict";
import test from "node:test";

import { collectFrontmatterDrifts } from "../scripts/release-guard/frontmatter.mjs";

const expectations = {
  scalars: {
    name: "xquik-test",
    enabled: true,
    "security.mode": "read-only",
  },
  arrays: {
    tags: ["xquik", "security"],
  },
  enums: {
    "security.mode": ["read-only", "restricted"],
  },
};

const validFrontmatter = `---
name: xquik-test
enabled: true
tags: [xquik, security]
security:
  mode: read-only
---

# Test Skill
`;

const cases = [
  {
    label: "accepts the complete policy",
    raw: validFrontmatter,
    expected: [],
  },
  {
    label: "rejects missing frontmatter",
    raw: "# Test Skill\n",
    expectedFragment: "missing opening frontmatter marker",
  },
  {
    label: "rejects unclosed frontmatter",
    raw: "---\nname: xquik-test\n",
    expectedFragment: "missing closing frontmatter marker",
  },
  {
    label: "rejects unsupported frontmatter syntax",
    raw: validFrontmatter.replace("name: xquik-test", "name xquik-test"),
    expectedFragment: "unsupported frontmatter line",
  },
  {
    label: "rejects a changed nested scalar",
    raw: validFrontmatter.replace("mode: read-only", "mode: write-enabled"),
    expectedFragment: "frontmatter security.mode",
  },
  {
    label: "rejects a missing array value",
    raw: validFrontmatter.replace("[xquik, security]", "[xquik]"),
    expectedFragment: 'frontmatter tags missing "security"',
  },
  {
    label: "accepts quoted scalars and block arrays",
    raw: validFrontmatter
      .replace("name: xquik-test", 'name: "xquik-test"')
      .replace("tags: [xquik, security]", "tags:\n  - xquik\n  - security"),
    expected: [],
  },
  {
    label: "accepts blank lines and false values",
    raw: validFrontmatter
      .replace("enabled: true", "enabled: false\n")
      .replace("tags: [xquik, security]", "tags:\n  - xquik\n  - security"),
    expectations: {
      ...expectations,
      scalars: {
        ...expectations.scalars,
        enabled: false,
      },
    },
    expected: [],
  },
  {
    label: "reports missing scalars and invalid enums",
    raw: validFrontmatter.replace("name: xquik-test\n", ""),
    expectedFragments: [
      "frontmatter name = <missing>",
      "expected one of",
    ],
    expectations: {
      ...expectations,
      enums: {
        ...expectations.enums,
        name: ["approved"],
      },
    },
  },
];

for (const currentCase of cases) {
  test(currentCase.label, () => {
    const drifts = collectFrontmatterDrifts(
      "skills/test/SKILL.md",
      currentCase.raw,
      currentCase.expectations ?? expectations,
    );

    if (currentCase.expected !== undefined) {
      assert.deepEqual(drifts, currentCase.expected);
      return;
    }

    if (currentCase.expectedFragments !== undefined) {
      for (const expectedFragment of currentCase.expectedFragments) {
        assert.ok(drifts.some((drift) => drift.includes(expectedFragment)));
      }
      return;
    }

    assert.ok(
      drifts.some((drift) => drift.includes(currentCase.expectedFragment)),
    );
  });
}
