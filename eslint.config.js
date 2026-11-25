import js from "@eslint/js";
import boundaries from "eslint-plugin-boundaries";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import { importX } from "eslint-plugin-import-x";
import reactHooks from "eslint-plugin-react-hooks";
import { reactRefresh } from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import { config, configs as tsConfigs } from "typescript-eslint";

export default config(
  { ignores: ["dist", ".yarn"] },
  js.configs.recommended,
  tsConfigs.recommended,
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.vite(),
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: { globals: globals.browser },
    plugins: {
      boundaries,
      "simple-import-sort": simpleImportSort,
    },
    settings: {
      "import-x/resolver-next": [createTypeScriptImportResolver()],
      "boundaries/legacy-warnings": false,
      "boundaries/elements": [
        { type: "app", pattern: ["src/App.tsx", "src/main.tsx"], mode: "file" },
        { type: "ui", pattern: "src/components/{common,NavBar,canvas}/**" },
        { type: "section", pattern: "src/components/*.{ts,tsx}", mode: "file" },
        { type: "foundation", pattern: "src/{utils,styles,assets}/**" },
      ],
    },
    rules: {
      // Architecture: app -> sections -> ui -> foundation (never upwards)
      "boundaries/dependencies": [
        "error",
        {
          default: "disallow",
          policies: [
            { from: { element: { type: "app" } }, allow: { to: { element: { type: ["app", "section", "ui", "foundation"] } } } },
            { from: { element: { type: "section" } }, allow: { to: { element: { type: ["section", "ui", "foundation"] } } } },
            { from: { element: { type: "ui" } }, allow: { to: { element: { type: ["ui", "foundation"] } } } },
            { from: { element: { type: "foundation" } }, allow: { to: { element: { type: "foundation" } } } },
          ],
        },
      ],
      "react-refresh/only-export-components": [
        "error",
        { allowConstantExport: true, extraHOCs: ["SectionHoc"] },
      ],
      "import-x/no-cycle": "error",
      "import-x/no-duplicates": "error",
      "import-x/no-self-import": "error",
      "import-x/first": "error",
      "import-x/newline-after-import": "error",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { fixStyle: "inline-type-imports" },
      ],
      "no-console": ["error", { allow: ["warn", "error"] }],
    },
  },
);
