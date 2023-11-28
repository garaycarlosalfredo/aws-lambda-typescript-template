module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:jsdoc/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  plugins: [
    "ramda",
    "@typescript-eslint",
    "prettier",
    "import",
    "sort-destructure-keys",
  ],
  rules: {
    "@typescript-eslint/naming-convention": "error",
    curly: "error",
    "@typescript-eslint/no-explicit-any": "error",
    "import/no-named-as-default": "error",
    "@typescript-eslint/no-empty-interface": [
      "warn",
      {
        allowSingleExtends: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: false,
      },
    ],
    "import/no-unresolved": "error",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["sibling", "parent"],
          "index",
          "unknown",
        ],
        // "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "sort-destructure-keys/sort-destructure-keys": 2,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json",
      },
    },
  },
};
