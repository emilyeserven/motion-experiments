// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import emstackConfig from "@emilyeserven/eslint-config";
import tseslint from "typescript-eslint";

export default tseslint.config([
  ...emstackConfig,
  {
    files: ["**/*.{ts,tsx}"],
    ignores: [
      "packages/middleware/src/**/*.ts",
      "packages/**/src/**/*.test.{js,ts}",
      "packages/client/server.js",
    ],
    rules: {
      "no-unused-vars": "off",

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
    },
  },
]);
