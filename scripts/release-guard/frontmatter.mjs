// SPDX-FileCopyrightText: 2026 Xquik Contributors
// SPDX-License-Identifier: MIT

export function collectFrontmatterDrifts(path, raw, expectations) {
  const frontmatter = parseFrontmatter(path, raw);
  if (frontmatter.error) {
    return [`  ${path}: ${frontmatter.error}`];
  }
  return [
    ...collectScalarFrontmatterDrifts(path, frontmatter, expectations),
    ...collectArrayFrontmatterDrifts(path, frontmatter, expectations),
    ...collectEnumFrontmatterDrifts(path, frontmatter, expectations),
  ];
}

function collectScalarFrontmatterDrifts(path, frontmatter, expectations) {
  const drifts = [];
  for (const [selector, expectedValue] of Object.entries(
    expectations.scalars ?? {},
  )) {
    const actualValue = frontmatter.scalars.get(selector);
    if (actualValue !== expectedValue) {
      drifts.push(
        `  ${path}: frontmatter ${selector} = ${formatValue(actualValue)} (expected ${formatValue(expectedValue)})`,
      );
    }
  }
  return drifts;
}

function collectArrayFrontmatterDrifts(path, frontmatter, expectations) {
  const drifts = [];
  for (const [selector, expectedValues] of Object.entries(
    expectations.arrays ?? {},
  )) {
    const actualValues = frontmatter.arrays.get(selector) ?? [];
    for (const expectedValue of expectedValues) {
      if (!actualValues.includes(expectedValue)) {
        drifts.push(
          `  ${path}: frontmatter ${selector} missing ${formatValue(expectedValue)}`,
        );
      }
    }
  }
  return drifts;
}

function collectEnumFrontmatterDrifts(path, frontmatter, expectations) {
  const drifts = [];
  for (const [selector, expectedValues] of Object.entries(
    expectations.enums ?? {},
  )) {
    const actualValue = frontmatter.scalars.get(selector);
    if (!expectedValues.includes(actualValue)) {
      drifts.push(
        `  ${path}: frontmatter ${selector} = ${formatValue(actualValue)} (expected one of ${formatValue(expectedValues)})`,
      );
    }
  }
  return drifts;
}

function parseFrontmatter(path, raw) {
  const lines = raw.split(/\r?\n/);
  if (lines[0] !== "---") {
    return frontmatterError("missing opening frontmatter marker");
  }
  const end = lines.indexOf("---", 1);
  if (end === -1) {
    return frontmatterError("missing closing frontmatter marker");
  }
  return parseYamlSubset(path, lines.slice(1, end));
}

function parseYamlSubset(path, lines) {
  const scalars = new Map();
  const arrays = new Map();
  const stack = [{ indent: -1, path: [] }];
  for (const line of lines) {
    if (line.trim() === "") {
      continue;
    }
    const indent = leadingSpaces(line);
    const trimmed = line.trim();
    while (stack.at(-1).indent >= indent) {
      stack.pop();
    }
    if (trimmed.startsWith("- ")) {
      const selector = stack.at(-1).path.join(".");
      arrays.set(selector, [
        ...(arrays.get(selector) ?? []),
        parseYamlScalar(trimmed.slice(2)),
      ]);
      continue;
    }
    const match = /^([^:]+):(.*)$/.exec(trimmed);
    if (!match) {
      return frontmatterError(
        `unsupported frontmatter line in ${path}: ${trimmed}`,
      );
    }
    const selectorPath = [...stack.at(-1).path, match[1].trim()];
    const rawValue = match[2].trim();
    if (rawValue === "") {
      stack.push({ indent, path: selectorPath });
      continue;
    }
    const selector = selectorPath.join(".");
    const value = parseYamlScalar(rawValue);
    if (Array.isArray(value)) {
      arrays.set(selector, value);
    } else {
      scalars.set(selector, value);
    }
  }
  return { arrays, error: null, scalars };
}

function frontmatterError(error) {
  return { arrays: new Map(), error, scalars: new Map() };
}

function parseYamlScalar(value) {
  if (value.startsWith("[") && value.endsWith("]")) {
    return value
      .slice(1, -1)
      .split(",")
      .map((item) => parseYamlScalar(item.trim()));
  }
  if (value === "true") {
    return true;
  }
  if (value === "false") {
    return false;
  }
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }
  return value;
}

function leadingSpaces(value) {
  return /^\s*/.exec(value)[0].length;
}

function formatValue(value) {
  return value === undefined ? "<missing>" : JSON.stringify(value);
}
