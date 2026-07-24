// SPDX-FileCopyrightText: 2026 Xquik Contributors
// SPDX-License-Identifier: MIT

import { readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export const root = join(dirname(fileURLToPath(import.meta.url)), "../..");

export function readText(path) {
  return readFileSync(join(root, path), "utf8");
}

export function readJson(path) {
  return JSON.parse(readText(path));
}

export function asArray(value) {
  return Array.isArray(value) ? value : [value];
}

export function collectFilesBelow(path) {
  const stats = statSync(join(root, path));
  if (stats.isFile()) {
    return [path];
  }
  if (!stats.isDirectory()) {
    return [];
  }
  return readdirSync(join(root, path), { withFileTypes: true }).flatMap(
    (entry) => {
      const childPath = `${path}/${entry.name}`;
      return entry.isDirectory() ? collectFilesBelow(childPath) : [childPath];
    },
  );
}

export function readSelector(object, selector) {
  return selector
    .split(".")
    .reduce((value, key) => value?.[selectorKey(key)], object);
}

function selectorKey(key) {
  const index = Number(key);
  return Number.isNaN(index) ? key : index;
}

export function formatValue(value) {
  return value === undefined ? "<missing>" : JSON.stringify(value);
}

export const expected = readJson("package.json").version;

export const taskGuidePaths = readdirSync(join(root, "task-guides"))
  .filter((fileName) => fileName.endsWith(".md"))
  .map((fileName) => `task-guides/${fileName}`);

export const taskGuideNames = new Set(
  taskGuidePaths.map((path) => path.slice("task-guides/".length, -3)),
);
