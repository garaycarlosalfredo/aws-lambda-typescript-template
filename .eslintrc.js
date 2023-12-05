module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsdoc/recommended',
    'plugin:prettier/recommended',
    'plugin:ramda/recommended'
  ],
  plugins: ['ramda', '@typescript-eslint', 'prettier', 'import', 'sort-destructure-keys'],
  rules: {
    // Misc
    curly: 'error',

    // TypeScript
    '@typescript-eslint/naming-convention': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-empty-interface': ['warn', { allowSingleExtends: true }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ],

    // Import
    'import/no-named-as-default': 'error',
    'import/no-unresolved': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true
      }
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['sibling', 'parent'], 'index', 'unknown'],
        alphabetize: { order: 'asc', caseInsensitive: true }
      }
    ],

    // Sort destructure keys
    'sort-destructure-keys/sort-destructure-keys': 2
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json'
      }
    }
  }
};
