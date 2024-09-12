const { TestEnvironment } = require("jest-environment-node");
const { node } = require("prop-types");

// .eslintrc.js
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:sonarjs/recommended-legacy',
        'plugin:prettier/recommended',
    ],
    plugins: [
        'sonarjs',
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        'complexity': ['error', 10],
        'max-lines': ['error', 300],
        'sonarjs/cognitive-complexity': ['error', 10],
        'prettier/prettier': 'error',
    },
};
