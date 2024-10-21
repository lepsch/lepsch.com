import eslintjs from "@eslint/js"
import tseslint from "typescript-eslint"
import globals from "globals"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import unusedImports from "eslint-plugin-unused-imports"

export default tseslint.config(
  { files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"] },

  // ESLint JS
  eslintjs.configs.recommended,

  // typescript-eslint
  ...tseslint.configs.strictTypeChecked,
  {
    languageOptions: {
      parserOptions: { projectService: true },
      globals: { ...globals.browser },
    },
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
  },

  {
    files: ["patch_build.js"],
    languageOptions: {
      globals: { ...globals.node },
    },
  },

  // eslint-plugin-react
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  {
    settings: {
      react: {
        version: "18",
      },
    },
  },

  // eslint-plugin-react-hooks
  {
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },

  // eslint-plugin-react-refresh
  {
    plugins: {
      "react-refresh": reactRefresh,
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
          // Remix routes module exports (https://remix.run/docs/en/main/route/action)
          allowExportNames: [
            "action",
            "clientAction",
            "clientLoader",
            "Component",
            "ErrorBoundary",
            "handle",
            "headers",
            "HydrateFallback",
            "Layout",
            "links",
            "loader",
            "meta",
            "shouldRevalidate",
          ],
        },
      ],
    },
  },

  // eslint-plugin-unused-imports
  {
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },

  // Ignore common output dirs
  {
    ignores: ["build/", "public/", ".react-router/"],
  },

  {
    rules: {
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/require-array-sort-compare": "error",
      "@typescript-eslint/switch-exhaustiveness-check": "error",
      "@typescript-eslint/method-signature-style": "error",
      "@typescript-eslint/no-unnecessary-qualifier": "error",
      "@typescript-eslint/no-unsafe-unary-minus": "error",
      "@typescript-eslint/prefer-find": "error",
      "@typescript-eslint/prefer-for-of": "error",
      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/promise-function-async": "error",
    },
  },
)
