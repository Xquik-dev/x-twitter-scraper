import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
  { linterOptions: { noInlineConfig: true, reportUnusedDisableDirectives: "error" } },
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    rules: {
      "no-restricted-syntax": ["error", { selector: "Program", message: "Write this file in TypeScript." }],
    },
  },
  {
    files: ["**/*.{ts,tsx,mts,cts}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname },
    },
    plugins: { "@typescript-eslint": tseslint.plugin },
    rules: {
      "@typescript-eslint/ban-ts-comment": [
        "error",
        { "ts-check": false, "ts-expect-error": true, "ts-ignore": true, "ts-nocheck": true },
      ],
      "@typescript-eslint/consistent-type-assertions": ["error", { assertionStyle: "never" }],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unsafe-argument": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unsafe-return": "error",
      "no-warning-comments": ["error", { terms: ["type-coverage:ignore"], location: "anywhere" }],
    },
  },
);
