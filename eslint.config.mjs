import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

export default [
  {
    ignores: ['public/**', 'node_modules/**', '.next/**', 'dist/**', 'out/**'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  nextPlugin.configs.recommended,
  prettierConfig,
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: 'module',
      },
    },
    plugins: {
      import: importPlugin,
      'jsx-a11y': jsxA11yPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'simple-import-sort': simpleImportSortPlugin,
    },
    rules: {
      '@next/next/no-img-element': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/member-ordering': [
        'warn',
        {
          interfaces: ['signature', 'method', 'constructor', 'field'],
          typeLiterals: ['signature', 'method', 'constructor', 'field'],
        },
      ],
      '@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_'}],
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/order': 'off',
      'jsx-a11y/no-autofocus': 'off',
      'jsx-a11y/no-onchange': 'off',
      'no-irregular-whitespace': 'off',
      'object-curly-spacing': ['error', 'never'],
      'react/display-name': 'off',
      'react/jsx-curly-brace-presence': [2, 'never'],
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-sort-props': 'error',
      'react/no-unescaped-entities': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      'sort-imports': 'off',
    },
    settings: {
      react: {
        pragma: 'React',
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.tsx'],
    rules: {
      'react/prop-types': 'off',
    },
  },
  {
    files: ['**/*.js'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
];
