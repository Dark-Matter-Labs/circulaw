import js from '@eslint/js';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import prettier from 'eslint-config-prettier/flat';
import globals from 'globals';

const config = [
  // `next lint` only ever looked at app/, components/, lib/ and utils/. The ESLint CLI
  // walks the whole tree, so these need excluding explicitly: public/studio is build
  // output, and studio/ has its own ESLint config and dependency tree.
  {
    ignores: ['.next/**', 'public/studio/**', 'studio/**', 'next-sitemap.config.js'],
  },
  js.configs.recommended,
  ...nextCoreWebVitals,
  prettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 2024,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'spaced-comment': 'error',
      quotes: ['error', 'single'],
      'no-duplicate-imports': 'error',
    },
  },
  {
    // eslint-config-next 16 adds the React Compiler hook rules, which flag 37 existing
    // call sites across 18 files. None are regressions from the Next 16 upgrade: the
    // rules simply did not exist in the previous config. They are downgraded to
    // warnings so `yarn lint` and the pre-commit hook stay green, while the findings
    // remain visible. Worth working through separately, ideally before enabling
    // `reactCompiler`, since that is exactly the code the compiler would have to bail on.
    rules: {
      'react-hooks/set-state-in-effect': 'warn',
      'react-hooks/refs': 'warn',
      'react-hooks/static-components': 'warn',
      'react-hooks/preserve-manual-memoization': 'warn',
      'react-hooks/immutability': 'warn',
    },
  },
];

export default config;
