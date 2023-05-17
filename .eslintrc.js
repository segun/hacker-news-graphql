module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  ignorePatterns: ['node_modules', '**/__mocks__*', '**/__tests__*', '**/*.spec.*'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', '@typescript-eslint', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],
  rules: {
  "@typescript-eslint/naming-convention": [
    "error",
    {
      "selector": "interface",
      "format": ["PascalCase"],
      "custom": {
        "regex": "^I[A-Z]",
        "match": true
      }
    }
  ],
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'warn',
    'react/prop-types': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': ['error', 'static public field'],
    'react/destructuring-assignment': ['warn', 'always', { ignoreClassFields: true }],
    'no-nested-ternary': 'off',
    '@typescript-eslint/restrict-template-expressions': 'warn',
    // '@typescript-eslint/adjacent-overload-signatures': 'warn',
    // '@typescript-eslint/array-type': 'warn',
    // '@typescript-eslint/ban-types': 'warn',
    // '@typescript-eslint/class-name-casing': 'warn',
    // '@typescript-eslint/consistent-type-assertions': 'warn',
    // '@typescript-eslint/indent': ['off', 2],
    // '@typescript-eslint/member-delimiter-style': [
    //   'off',
    //   {
    //     multiline: {
    //       delimiter: 'none',
    //       requireLast: true,
    //     },
    //     singleline: {
    //       delimiter: 'semi',
    //       requireLast: false,
    //     },
    //   },
    // ],
    // '@typescript-eslint/member-ordering': 'off',
    // '@typescript-eslint/no-empty-function': 'warn',
    // '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    'import/no-named-as-default': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',    
    // '@typescript-eslint/no-misused-new': 'warn',
    // '@typescript-eslint/no-namespace': 'warn',
    // '@typescript-eslint/no-parameter-properties': 'off',
    // '@typescript-eslint/no-this-alias': 'warn',
    // '@typescript-eslint/no-use-before-define': 'off',
    // '@typescript-eslint/no-var-requires': 'warn',
    // '@typescript-eslint/prefer-for-of': 'warn',
    // '@typescript-eslint/prefer-function-type': 'warn',
    // '@typescript-eslint/prefer-namespace-keyword': 'warn',
    // '@typescript-eslint/quotes': ['warn', 'single'],
    // '@typescript-eslint/semi': ['off', null],
    // '@typescript-eslint/triple-slash-reference': 'warn',
    // '@typescript-eslint/type-annotation-spacing': 'off',
    // '@typescript-eslint/unified-signatures': 'warn',
    // 'arrow-parens': ['off', 'as-needed'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
