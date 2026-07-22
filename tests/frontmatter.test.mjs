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
];

for (const currentCase of cases) {
  test(currentCase.label, () => {
    const drifts = collectFrontmatterDrifts(
      "skills/test/SKILL.md",
      currentCase.raw,
      expectations,
    );

    if (currentCase.expected !== undefined) {
      assert.deepEqual(drifts, currentCase.expected);
      return;
    }

    assert.ok(
      drifts.some((drift) => drift.includes(currentCase.expectedFragment)),
    );
  });
}
