import eslint from '@eslint/js';
import eslintPluginVue from 'eslint-plugin-vue';
import globals from 'globals'
import typescriptEslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import'

export default typescriptEslint.config(
  { ignores: [ '**/*.d.ts', '**/coverage', '**/build', '**/public'] },
  {
    extends: [
      eslint.configs.recommended,
      ...typescriptEslint.configs.recommended,
      ...eslintPluginVue.configs['flat/recommended'],
    ],
    files: ['**/*.{ts,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        __dirname: 'readonly',
        path: 'readonly',
        process: 'readonly',
        require: 'readonly',
        __IS_DEV__: 'readonly'
      },
      parserOptions: {
        parser: typescriptEslint.parser,
      },
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      'vue/multi-word-component-names': "off",
      'vue/html-indent': ['error', 2, {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        ignores: [],
      }],
      // Пробелы в import
      'object-curly-spacing': ['error', 'always'],
      // Запрет на использование неимпортированных переменных
      'no-undef': 'error',
      // Ошибка, если импортируешь несуществующий модуль
      'import/no-unresolved': 'error',
      // Запрет на использование до объявления
      'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
      // Упорядочивание импортов
      'import/order': ['error', {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        pathGroups: [
          // Группа 1: Vue и экосистема
          {
            pattern: '{vue,@vue/**,pinia,vue-router,vue-i18n}',
            group: 'external',
            position: 'before',
          },
          // Группа 2: Shared
          {
            pattern: 'shared/**',
            group: 'internal',
            position: 'after',
          },
          // Группа 3: Widgets
          {
            pattern: 'widgets/**',
            group: 'internal',
            position: 'after',
          },
          // Группа 4: статика
          {
            pattern: '**/*.{svg,png,jpeg,jpg}',
            group: 'object',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always', // Пустая строка между группами
      }],
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    }
  },
);
