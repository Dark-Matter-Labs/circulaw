/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
    'semi': true,
    'tabWidth': 2,
    'printWidth': 100,
    'singleQuote': true,
    'trailingComma': 'all',
    'jsxSingleQuote': true,
    'bracketSpacing': true,
    'plugins': ['prettier-plugin-tailwindcss']
  };
  
  module.exports = config;

