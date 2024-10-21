declare module "eslint-plugin-react" {
  import { type Linter, type ESLint } from "eslint"
  const plugin: ESLint.Plugin & {
    configs: {
      flat: {
        recommended: Linter.Config
        "jsx-runtime": Linter.Config
      }
    }
  }
  export = plugin
}

declare module "eslint-plugin-react-hooks" {
  import { type Linter, type ESLint } from "eslint"
  const plugin: ESLint.Plugin & {
    configs: {
      recommended: Linter.Config
    }
  }
  export = plugin
}

declare module "eslint-plugin-react-refresh" {
  import { type ESLint } from "eslint"
  const plugin: ESLint.Plugin
  export = plugin
}
