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
    label: "rejects a changed nested scalar",
    raw: validFrontmatter.replace("mode: read-only", "mode: write-enabled"),
    expectedFragment: "frontmatter security.mode",
  },
  {
    label: "rejects a missing array value",
    raw: validFrontmatter.replace("[xquik, security]", "[xquik]"),
    expectedFragment: 'frontmatter tags missing "security"',
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

    assert.equal(drifts.length, 1);
    assert.ok(drifts[0].includes(currentCase.expectedFragment));
  });
}
