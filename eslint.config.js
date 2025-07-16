const globals = require('globals');
const haensl = require('@haensl/eslint-config');
const react = require('eslint-plugin-react');

module.exports = [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  react.configs.flat.recommended,
  ...haensl
];
